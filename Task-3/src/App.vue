<template v-if="showMobileSort" class="st:overlay-bacdrop">
  <header>
    <img src="/src/assets/header.png" alt="header" class="st:w-full st:hidden st:lg:block">
    <img src="/src/assets/header2.png" alt="header" class="st:w-full st:hidden st:md:block st:lg:hidden">
    <img src="/src/assets/header3.png" alt="header" class="st:w-full st:md:hidden">
  </header>
  <div
    class="st:flex st:items-center st:justify-center st:md:justify-end st:md:items-end st:max-w-[1200px] st:mx-auto st:my-[10px]">
    <input type="text" v-model="query" @input="handleSearch" placeholder="Search product"
      class="st:border st:p-[8px] st:w-full st:mx-[20px] st:md:w-[40%] st:rounded-[10px] st:py-[15px]">
  </div>


  <!-- error -->
  <div v-if="err" class="st:flex st:flex-col st:items-center st:justify-center st:h-[200px] st:gap-[10px]">
    <p class="st:text-[24px] st:font-[600]">
      It's taking longer than usual. Please check your network connection or try refreshing the page!
    </p>
  </div>
  <!-- no results -->
  <div v-else-if="showResults && !loader && results.length === 0"
    class="st:flex st:flex-col st:items-center st:justify-center st:h-[200px] st:gap-[10px]">
    <p class="st:text-[24px] st:font-[600]">
      We're sorry. There are no results for '{{ query }}'.
    </p>
    <p class="st:text-[20px]">
      Please check the spelling or try again with a less specific or different term.
    </p>
  </div>


  <main v-else-if="showResults" class=" st:bg-[#f5f5f5]">

    <!-- scroll to top -->
    <div v-if="!showMobileFilters && !showMobileSort"
      class="st:absolute st:bottom-[50px] st:md:bottom-[120px] st:right-[60px] st:md:right-[80px] st:lg:right-[100px]">
      <button v-if="isVisible" @click="scrollToTop"
        class="st:text-[28px] st:md:text-[34px] st:lg:text-[40px] st:fixed st:text-white st:border st:bg-black st:w-[35px] st:h-[35px] st:md:w-[43px] st:md:h-[43px] st:lg:w-[50px] st:lg:h-[50px] st:text-center st:z-100">^</button>
    </div>


    <div class="st:max-w-[1500px] st:mx-auto st:pt-[10px] st:md:pt-[50px]">
      <div class="st:flex st:flex-col st:md:flex-row st:w-full st:px-[15px] st:md:px-[50px]">
        <div class="st:flex st:md:hidden st:w-full st:items-center st:justify-center  st:gap-[20px] st:px-[5px]">
          <div @click="showMobileFilters = true"
            class="st:flex st:items-center st:justify-center st:w-1/2 st:border-[1px] st:bg-white st:rounded-[5px] st:p-[7px]">
            <svg class="st:w-[18px]" viewBox="0 0 500 500" width="15" height="15" fill="#121212">
              <path
                d="m367.820312 0h-351.261718c-6.199219-.0117188-11.878906 3.449219-14.710938 8.960938-2.871094 5.585937-2.367187 12.3125 1.300782 17.414062l128.6875 181.285156c.042968.0625.089843.121094.132812.183594 4.675781 6.3125 7.207031 13.960938 7.21875 21.816406v147.800782c-.027344 4.375 1.691406 8.582031 4.773438 11.6875 3.085937 3.101562 7.28125 4.851562 11.65625 4.851562 2.222656-.003906 4.425781-.445312 6.480468-1.300781l72.3125-27.570313c6.476563-1.980468 10.777344-8.09375 10.777344-15.453125v-120.015625c.011719-7.855468 2.542969-15.503906 7.214844-21.816406.042968-.0625.089844-.121094.132812-.183594l128.691406-181.289062c3.667969-5.097656 4.171876-11.820313 1.300782-17.40625-2.828125-5.515625-8.511719-8.9765628-14.707032-8.964844zm0 0">
              </path>
            </svg>
            <p class="st:text-[15px] st:text-[121212]">Filter</p>
          </div>
          <div @click="showMobileSort = true"
            class="st:flex st:items-center st:justify-center st:w-1/2 st:border-[1px] st:bg-white st:rounded-[5px] st:p-[7px]">
            <svg class="st:w-[18px]" viewBox="0 0 500 500" width="18" height="18" fill="#121212">
              <rect x="0" y="277.333" width="128" height="42.667"></rect>
              <rect x="0" y="170.667" width="256" height="42.667"></rect>
              <rect x="0" y="64" width="384" height="42.667"></rect>
            </svg>
            <p class="st:text-[15px] st:text-[121212]">Sort</p>
          </div>
        </div>


        <!-- <div class="st:w-full">
              <div @click="showCollections = !showCollections"
                class="st:flex st:items-center st:justify-between st:cursor-pointer st:gap-[5px] st:my-[10px]">
                <div class="st:flex st:items-center st:justify-between st:w-full">
                  <h2 class="st:text-[16px] st:font-[500]">Collections</h2>
                  <button v-if="showCollections && selectedCollection.length > 0"
                    @click="clearFilter('collections'), showCollections = !showCollections"
                    class="st:cursor-pointer">clear
                  </button>
                </div>
                <svg class="st:w-[14px] " viewBox="0 0 600 500" width="12" height="12" fill="#000">
                  <path d="m275.565 361.679-223.897-223.896h-51.668l275.565 275.565 275.565-275.565h-51.668z">
                  </path>
                </svg>
              </div>
              <div v-if="showCollections" class="st:max-h-[200px] st:overflow-y-auto">
                <div v-for="facet in textFacets.collections" :key="facet.label"
                  class="st:flex st:justify-between st:gap-[10px] st:text-[14px] st:text-[#213555] st:font-[700]">
                  <div class="st:flex st:items-start st:gap-[8px]">
                    <input type="checkbox" :value="facet.label" v-model="selectedCollection" @change="filterData"
                      class="st:w-[15px] st:h-[15px] st:mt-[3px]">
                    <span class="st:capitalize ">{{ facet.label }}</span>
                  </div>
                  <div class="st:flex st:justify-end">
                    <span>({{ facet.value }})</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="st:w-full">
              <div @click="showProductType = !showProductType"
                class="st:flex st:items-center st:justify-between st:cursor-pointer st:gap-[5px] st:my-[10px]">
                <div class="st:flex st:items-center st:justify-between st:w-full">
                  <h2 class="st:text-[16px] st:font-[500]">Product Type</h2>
                  <button v-if="showProductType && selectedProductType.length > 0"
                    @click="clearFilter('productType'), showProductType = !showProductType"
                    class="st:cursor-pointer">clear
                  </button>
                </div>
                <svg class="st:w-[14px] " viewBox="0 0 600 500" width="12" height="12" fill="#000">
                  <path d="m275.565 361.679-223.897-223.896h-51.668l275.565 275.565 275.565-275.565h-51.668z">
                  </path>
                </svg>
              </div>
              <div v-if="showProductType" class="st:max-h-[200px] st:overflow-y-auto">
                <div v-for="facet in textFacets.product_type" :key="facet.label"
                  class="st:flex st:justify-between st:gap-[10px] st:text-[14px] st:text-[#213555] st:font-[700]">
                  <div class="st:flex st:gap-[8px] st:items-stretch">
                    <input type="checkbox" :value="facet.label" v-model="selectedProductType" @change="filterData"
                      class="st:w-[15px] st:h-[15px] st:mt-[3px]">
                    <span class="st:capitalize">{{ facet.label }}</span>
                  </div>
                  <div class="st:flex st:justify-end">
                    <span>({{ facet.value }})</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="st:w-full">
              <div @click="showPrice = !showPrice"
                class="st:flex st:items-center st:justify-between st:cursor-pointer st:gap-[5px] st:my-[10px]">
                <div class="st:flex st:items-center st:justify-between st:w-full">
                  <h2 class="st:text-[16px] st:font-[500]">Price</h2>
                  <button v-if="showPrice && selectedPrice.length > 0"
                    @click="clearFilter('price'), showPrice = !showPrice" class="st:cursor-pointer">clear
                  </button>
                </div>
                <svg class="st:w-[14px] st:transition-transform" viewBox="0 0 600 500" width="12" height="12"
                  fill="#000">
                  <path d="m275.565 361.679-223.897-223.896h-51.668l275.565 275.565 275.565-275.565h-51.668z">
                  </path>
                </svg>
              </div>
              <div v-if="showPrice" class="st:max-h-[200px] st:overflow-y-auto">
                <div v-for="facet in numericFacets.discounted_price" :key="facet.min">
                  <div v-if="facet.count > 0"
                    class="st:flex st:justify-between st:gap-[10px] st:text-[14px] st:text-[#213555] st:font-[700]">
                    <div v-if="facet.min < 300" class="st:flex st:gap-[8px] st:items-stretch">
                      <input type="checkbox" :value="facet" v-model="selectedPrice" @change="filterData"
                        class="st:w-[15px] st:h-[15px] st:mt-[3px]">
                      <span>{{ facet.min }}</span>
                      <span>- {{ facet.max }}</span>
                    </div>
                    <div v-if="facet.min >= 300" class="st:flex st:gap-[8px] st:items-stretch">
                      <input type="checkbox" :value="facet" v-model="selectedPrice" @change="filterData"
                        class="st:w-[15px] st:h-[15px] st:mt-[4px]">
                      <span>{{ facet.min }}</span>
                      <span> & Above</span>
                    </div>
                    <div class="st:flex st:justify-end">
                      <span>({{ facet.count }})</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="st:w-full">
              <div @click="showDiscountedPrice = !showDiscountedPrice"
                class="st:flex st:items-center st:justify-between st:cursor-pointer st:gap-[5px] st:my-[10px]">
                <div class="st:flex st:items-center st:justify-between st:w-full">
                  <h2 class="st:text-[16px] st:font-[500]">Discount</h2>
                  <button v-if="showDiscountedPrice && selectedDiscountedPrice.length > 0"
                    @click="clearFilter('discountedPrice'), showDiscountedPrice = !showDiscountedPrice"
                    class="st:cursor-pointer">clear
                  </button>
                </div>
                <svg class="st:w-[14px] st:transition-transform" viewBox="0 0 600 500" width="12" height="12"
                  fill="#000">
                  <path d="m275.565 361.679-223.897-223.896h-51.668l275.565 275.565 275.565-275.565h-51.668z">
                  </path>
                </svg>
              </div>
              <div v-if="showDiscountedPrice" class="st:max-h-[200px] st:overflow-y-auto">
                <div v-for="facet in numericFacets.discount" :key="facet.min">
                  <div v-if="facet.count > 0"
                    class="st:flex st:justify-between st:gap-[10px] st:text-[14px] st:text-[#213555] st:font-[700]">
                    <div class="st:flex st:gap-[8px] st:items-stretch">
                      <input type="checkbox" :value="facet" v-model="selectedDiscountedPrice" @change="filterData"
                        class="st:w-[15px] st:h-[15px] st:mt-[3px]">
                      <span>{{ facet.max }} % Off Or More</span>
                    </div>
                    <div class="st:flex st:justify-end">
                      <span>({{ facet.count }})</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->

        <!-- filters -->
        <div
          :class="['st:w-full st:md:w-[20%] st:lg:w-[15%] st:mr-[20px] st:md:bg-[#f5f5f5] st:h-full',
            showMobileFilters ? 'st:block st:fixed st:bg-white st:top-0 st:left-0 st:h-full st:w-full st:z-50' : 'st:hidden st:md:block']">
          <div class="st:flex st:flex-col st:items-start st:gap-[10px] st:h-full">
            <div
              class="st:flex st:items-center st:justify-between st:w-full st:border-b st:border-b-gray-200 st:px-[20px] st:md:px-0 st:pt-[20px] st:md:pt-0 st:pb-[15px]">
              <h2 class="st:text-[14px] st:font-[400] st:text-[#000000bf]">Filter</h2>
              <button v-if="clearAll" @click="clearFilters"
                class="st:border-b st:hover:border-b-[2px]  st:cursor-pointer st:text-[14px] st:font-[400] st:text-[#000000bf]">Remove
                all</button>
            </div>

            <div v-for="filter in filters" :key="filter.field" v-show="showFilter(filter)"
              class="st:w-full st:border-b st:border-b-gray-200 st:pb-[15px] st:px-[20px] st:md:px-0">
              <div v-if="filter.values.length > 0" @click="filter.isOpen = !filter.isOpen"
                class="st:flex st:items-center st:justify-between st:cursor-pointer st:my-[10px]">
                <h2 class="st:text-[14px] st:font-[400] st:text-[#000000bf]">{{ filter.label }}</h2>
                <div class="st:flex st:items-center st:gap-[10px]">
                  <button v-if="filter.selected.length > 0"
                    @click="clearFilter(filter.field), filter.isOpen = !filter.isOpen"
                    class="st:text-[14px] st:cursor-pointer">Clear</button>
                  <svg v-if="filter.isOpen" class="st:w-[14px] st:transition-transform" viewBox="0 0 600 500" width="12"
                    height="12" fill="#000">
                    <path d="m275.565 189.451 223.897 223.897h51.668l-275.565-275.565-275.565 275.565h51.668z"></path>
                  </svg>
                  <svg v-else class="st:w-[14px] st:transition-transform" viewBox="0 0 600 500" width="12" height="12"
                    fill="#000">
                    <path d="m275.565 361.679-223.897-223.896h-51.668l275.565 275.565 275.565-275.565h-51.668z">
                    </path>
                  </svg>
                </div>
              </div>

              <!-- textFacet -->
              <div v-show="filter.isOpen" :id="`st-${filter.field}-filter`"
                class="st-filter-container st:max-h-[200px] st:overflow-y-auto">
                <div v-if="filter.type === 'textFacet'">
                  <div v-for="item in filter.values" :key="item.label"
                    class="st:flex st:gap-[8px] st:items-center st:justify-between st:text-[14px] st:text-[#213555] st:font-[700] st:capitalize ">

                    <label class="st:flex st:gap-[8px]">
                      <input type="checkbox" :value="item.label" v-model="filter.selected" @change="applyFilters"
                        class="st:hidden">
                      <div
                        class="st:w-[16px] st:h-[16px] st:border st:border-gray-400 st:rounded-[5px] st:flex st:items-center st:justify-center">
                        <img src="/src/assets/tick.svg" alt="tick" class="st:w-[15px] st:h-[15px]"
                          v-if="filter.selected.includes(item.label)">
                      </div>
                      <span class="st:flex-1">{{ item.label }}</span>
                    </label>
                    <span>({{ item.value }})</span>
                  </div>
                </div>

                <!-- numericFacet -->
                <div v-if="filter.type === 'numericFacet'">
                  <div v-for="item in filter.values" :key="item.min"
                    class=" st:text-[14px] st:text-[#213555] st:font-[700] st:capitalize">
                    <div v-if="item.count > 0" class="st:flex st:items-center st:justify-between">
                      <label class="st:flex st:gap-[8px] st:items-center st:cursor-pointer">
                        <input type="checkbox" :value="item" v-model="filter.selected" @change="applyFilters"
                          class="st:hidden">
                        <div
                          class="st:w-[16px] st:h-[16px] st:border st:border-gray-400 st:rounded-[5px] st:flex st:items-center st:justify-center">

                          <img src="/src/assets/tick.svg" alt="tick" class="st:w-[15px] st:h-[15px]"
                            v-if="filter.selected.some(val => val.min === item.min)">
                        </div>

                        <div v-if="filter.field === 'discounted_price'">
                          <span v-if="item.min === 0">Below ${{ item.max }}</span>
                          <span v-else-if="item.min === 401">${{ item.min }} & Above</span>
                          <span v-else>${{ item.min }} - ${{ item.max }}</span>
                        </div>
                        <div v-else-if="filter.field === 'discount'">
                          <span>{{ item.min }}% Off Or More</span>
                        </div>
                      </label>

                      <span>({{ item.count }})</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Availability -->
            <div class="st:w-full st:my-[10px] st:flex-1 st:px-[20px] st:md:px-0">
              <div @click="showAvailibilty = !showAvailibilty"
                class="st:flex st:items-center st:justify-between st:mb-[8px] st:cursor-pointer">
                <h2 class="st:text-[14px] st:font-[400] st:text-[#000000bf]">Availability</h2>
                <svg class="st:w-[14px] st:transition-transform" viewBox="0 0 600 500" width="12" height="12"
                  fill="#000">
                  <path d="m275.565 361.679-223.897-223.896h-51.668l275.565 275.565 275.565-275.565h-51.668z">
                  </path>
                </svg>
              </div>

              <div v-if="showAvailibilty">
                <label class=" st:flex st:items-center st:gap-[8px] st:text-[14px] st:cursor-pointer st:text-[#213555]
                st:font-[700] st:capitalize">
                  <input type="checkbox" v-model="excludeOutOfStock" @change="applyFilters"
                    class="st:w-[16px] st:h-[16px]">
                  Exclude Out of Stock
                </label>
              </div>
            </div>

            <div class="st:flex st:md:hidden st:items-center st:justify-center st:w-full">
              <button @click="showMobileFilters = false"
                class="st:border st:w-1/2 st:py-[10px] st:border-gray-300 st:font-[700]">Close</button>
              <button @click="showMobileFilters = false"
                class="st:border st:w-1/2 st:border-[#213555] st:bg-[#213555] st:text-white st:py-[10px] st:font-[700]">Apply</button>
            </div>

          </div>
        </div>


        <div class="st:w-full st:md:w-[80%] st:lg:w-[85%] st:items-start st:pb-[8px]">


          <div v-if="showMobileSort" @click="showMobileSort = false" class="st:fixed st:z-20 st:inset-0 st:bg-black/50">
          </div>
          <!-- mobileSort -->
          <div
            :class="['st:flex st:flex-col st:md:hidden st:bg-white st:w-full st:h-fit st:px-[20px] st:gap-[15px] st:pb-[20px]', showMobileSort ? 'st:fixed st:bottom-0 st:left-0 st:z-30' : 'st:hidden']">
            <div
              class="st:flex  st:border-b-[1px] st:w-full st:border-gray-300 st:outline-none st:items-center st:justify-start st:py-[12px]">
              <p @click="showMobileSort = false" class="st:text-black st:text-[18px] st:w-1/2">✖</p>
              <p class="st:text-[18px] st:font-[400] st:w-1/2">SORT BY</p>
            </div>
            <p class="st:text-[14px] st:capitalize st:letter-spacing:[0.4px]" v-for="sort in sortOptions"
              :key="sort.fields" @click="sortData(sort.fields), showMobileSort = false"
              :class="{ 'active-sort': sortVal === sort.fields }">{{
                sort.label }}</p>
          </div>

          <!-- dynamicfilters -->
          <div v-if="selectFilters.length > 0"
            class="st:flex st:md:flex-wrap st:w-full st:overflow-x-auto st:items-start st:justify-start st:mt-[20px] st:md:mt-0 st:md:mb-[20px] st:gap-[20px] st:text-[14px] st:font-[500]">
            <div v-for="(item, index) in selectFilters" :key="index"
              class="st:flex st:items-center st:gap-[10px] st:border st:border-gray-400 st:px-[10px] st:py-[5px] st:rounded-full st:cursor-pointer">
              <span class="st:text-nowrap">{{ item.label }}</span>
              <button @click="removeFilter(item)" class="st:font-[600] st:cursor-pointer">X</button>
            </div>
          </div>

          <div class="st:flex st:items-center st:justify-between st:w-full st:pb-[10px] st:px-[5px] st:md:px-[10px]">
            <div class="st:my-[20px] st:md:my-0">
              <span
                class="st:text-[14px] st:text-[#000] st:font-[400] st:letter-spacing:[0.6px] st:opacity-[0.7] st:pt-[13px] st:md:pt-0">Showing
                <strong class="st:font-[700]">
                  {{ resp.totalHits }}
                </strong> Result(s) for <strong class="st:font-[700]">"{{ query }}"</strong></span>
            </div>



            <div class="st:hidden st:relative st:md:flex-col st:items-start st:justify-center">
              <div class="st:flex st:text-[14px] st:text-[#000] st:items-center st:justify-between st:w-[230px]">
                <p>Sort by: <span class="st:pl-[20px] st:cursor-pointer ">Relevance</span></p>

                <svg class="st:w-[15px]" viewBox="0 0 600 500" width="12" height="12" fill="#000">
                  <path d="m275.565 361.679-223.897-223.896h-51.668l275.565 275.565 275.565-275.565h-51.668z"></path>
                </svg>
              </div>

            </div>

            <!-- sorting -->
            <div class="st:hidden st:md:flex st:items-center st:justify-center">
              <label class="st:text-[14px]">Sort By:</label>
              <select v-model="sortVal" @change="sortData()" class="st:text-[14px]">
                <option v-for="sort in sortOptions" :key="sort.fields" :value="sort.fields">
                  {{ sort.label }}
                </option>
              </select>
            </div>
          </div>


          <!-- grid -->
          <div v-if="loader"
            class="st:absolute st:inset-0 st:bg-white/70 st:flex st:justify-center st:items-center st:z-20">
            <div
              class="st:w-[40px] st:h-[40px] st:border-[4px] st:border-gray-200 st:border-t-gray-500 st:rounded-full st:animate-spin">
            </div>
          </div>

          <div class="st:relative">
            <div class="st:grid st:grid-cols-2 st:md:grid-cols-3 st:lg:grid-cols-4 st:gap-[30px_10px] st:md:my-[10px]">
              <div v-for="value in results" :key="value.id"
                class="st:bg-white st:rounded-[15px] st:shadow-md st:py-[10px] st:flex st:flex-col st:items-stretch st:tracking-[0.6px]">

                <div class="st:relative st:cursor-pointer">
                  <img v-if="value.image" :src="value.image.src" alt="product"
                    class="st:w-full st:h-[200px] st:object-cover st:rounded-[6px]" />
                  <p v-if="value.discount > 0"
                    class="st:text-[12px] st:text-[#fff] st:font-[400] st:border-[1px] st:bg-red-500 st:absolute st:top-[4px] st:right-[4px] st:md:top-[13.5px]  st:md:right-[10px] st:p-[4px_10px] st:md:p-[5px_13px_6px_13px] st:rounded-full st:z-10 st:mt-0 st:md:mt-[-10px]">
                    {{ value.discount }}% OFF
                  </p>
                </div>

                <div
                  class="st:flex st:flex-col st:items-center st:mt-[10px] st:gap-[10px] st:w-full st:flex-1 st:text-center">
                  <h3 class="st:text-[15px]  st:font-[800]">
                    {{ value.title }}
                  </h3>

                  <h3 class="st:text-[14px] st:capitalize st:text-[#213555]  st:font-[800]">
                    {{ value.vendor }}
                  </h3>

                  <p v-if="value.discount === 0" class="st:text-[16px] st:font-[600] st:flex-1">
                    $ {{ value.price }}
                  </p>
                  <div v-if="value.discount > 0"
                    class="st:flex st:items-center st:justify-between st:gap-[10px] st:flex-1">
                    <p class="st:text-[13px] st:font-[700] st:line-through">$ {{ value.price }}</p>
                    <p class="st:text-[16px] st:font-[700] st:text-red-500">$ {{ value.discounted_price }}</p>
                  </div>

                  <div class="st:flex st:items-center st:justify-center st:w-full st:mt-[20px]">
                    <button
                      class="st:text-[15px] st:text-white st:border st:bg-[#213555] st:font-[700] st:w-[90%] st:py-[10px] st:rounded-[10px] st:cursor-pointer">ADD
                      TO CART</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <paginate v-if="pageCount > 1" v-model="page" :page-count="pageCount" :page-range="3" :click-handler="handlePages"
        :prev-text="'<'" :next-text="'>'" :container-class="'pagination'" :page-class="'page-item'"
        :active-class="'active'">
      </paginate>
      <div v-if="pageCount <= 1 && results.length > 0" class="st:text-center st:text-[16px] st:font-[400] st:py-[20px]">
        No More Results
      </div>
    </div>
  </main>


  <footer>
    <img src="/src/assets/footer11.png" alt="header" class="st:w-full st:hidden st:lg:block">
    <img src="/src/assets/footer12.png" alt="header" class="st:w-full st:hidden st:md:block st:lg:hidden">
    <img src="/src/assets/footer13.png" alt="header" class="st:w-full st:md:hidden">

  </footer>
</template>

<script>

import SearchClient from "@searchtap/search-client";
import { SortValue } from "./types";
import Paginate from "vuejs-paginate-next";
import { def } from "@vue/shared";
export default {
  components: {
    Paginate
  },
  data() {
    const searchClient = new SearchClient("8MI7TKTXH4DXQEKRGQQC5WVU", "H9VCE36B3E15PXPH277SSJG7");

    return {
      client: searchClient,
      results: [],
      query: "",
      page: 1,
      resp: {},

      filters: [{
        field: 'collections',
        label: 'Collections',
        type: 'textFacet',
        values: [],
        selected: [],
        isOpen: false
      },
      {
        field: 'product_type',
        label: 'Product Type',
        type: 'textFacet',
        values: [],
        selected: [],
        isOpen: false
      },
      {
        field: 'discounted_price',
        label: 'Price',
        type: 'numericFacet',
        values: [],
        selected: [],
        isOpen: false
      },
      {
        field: 'discount',
        label: 'Discount',
        type: 'numericFacet',
        values: [],
        selected: [],
        isOpen: false
      },
      ],
      excludeOutOfStock: false,
      showAvailibilty: false,

      sortVal: '',
      sortOptions: [{
        label: 'Relevance',
        active: true,
        fields: ['-isActive', '-_rank'],
      },
      {
        label: 'Price: Low to High',
        active: false,
        fields: ['-isActive', 'discounted_price'],
      },
      {
        label: 'Price: High to Low',
        active: false,
        fields: ['-isActive', '-discounted_price'],
      },
      {
        label: 'Name: A to Z',
        active: false,
        fields: ['-isActive', 'title'],
      },
      {
        label: 'Name: Z to A',
        active: false,
        fields: ['-isActive', '-title'],
      },
      {
        label: 'Date: New to Old',
        active: false,
        fields: ['-isActive', '-published_at'],
      },
      {
        label: 'Date: Old to New',
        active: false,
        fields: ['-isActive', 'published_at'],
      }],

      showResults: false,
      loader: false,

      showDiscountedPrice: false,
      isVisible: false,

      showMobileFilters: false,
      showMobileSort: false,

      clearAll: false,

      err: null,
    }
  },
  methods: {
    showData() {
      this.showResults = true;
      this.client = new SearchClient("8MI7TKTXH4DXQEKRGQQC5WVU", "H9VCE36B3E15PXPH277SSJG7");
      this.client.count(32);
      this.client.skip((this.page - 1) * 32);


      this.client.textFacets('product_type', 'collections');
      this.client.numericFacets('discounted_price', [
        {
          min: 0,
          max: 100,
          minInclusive: true,
          maxInclusive: true
        },
        {
          min: 101,
          max: 200,
          minInclusive: true,
          maxInclusive: true
        },
        {
          min: 201,
          max: 300,
          minInclusive: true,
          maxInclusive: true
        },
        {
          min: 301,
          max: 400,
          minInclusive: true,
          maxInclusive: true
        },

        {
          min: 401,
          max: 999999,
          minInclusive: true,
          maxInclusive: false
        }
      ]);

      this.client.numericFacets('discount', [
        {
          min: 10,
          max: 100,
          minInclusive: true,
          maxInclusive: true
        },
        {
          min: 20,
          max: 100,
          minInclusive: true,
          maxInclusive: true
        },
        {
          min: 30,
          max: 100,
          minInclusive: true,
          maxInclusive: true
        },
        {
          min: 40,
          max: 100,
          minInclusive: true,
          maxInclusive: true
        },

        {
          min: 50,
          max: 100,
          minInclusive: true,
          maxInclusive: true
        }
      ]);

      const selected = this.sortOptions.find(s => s.fields === this.sortVal);
      if (selected) {
        selected.fields.forEach(field => {
          this.client.sort(field);
        })
      }

      this.filters.forEach(filter => {

        document.querySelector(`#st-${filter.field}-filter`)?.scrollTo({ top: 0, behavior: "smooth" })

        if (filter.type === 'textFacet' && filter.selected.length > 0) {
          this.client.textFacetFilters(filter.field, filter.selected);
        }

        if (filter.type === 'numericFacet' && filter.selected.length > 0) {
          filter.selected.forEach(val => {
            this.client.numericFacetFilters(filter.field, val.min, val.max);
          });
        }
      });


      if (this.excludeOutOfStock) {
        this.client.filter("isActive=1");
      }

    },


    async displayData() {
      if (this.query.trim() === "") return this.showResults = false;
      this.loader = true;
      this.err = null;

      try {
        this.showData();
        this.resp = await this.client.search(this.query, "GXRDI1DDCJYW9MPFLDY3AH38");
        console.log('api response', this.resp)
        this.results = this.resp.results;


        this.filters.forEach(filter => {
          if (filter.type === 'textFacet') {
            filter.values = this.resp.textFacets[filter.field];
          }
          if (filter.type === 'numericFacet') {
            filter.values = this.resp.numericFacets[filter.field];
          }
          if (filter.selected.length > 0) {
            if (filter.type === "textFacet") {
              filter.values.sort((a, b) => {
                return filter.selected.includes(b.label) - filter.selected.includes(a.label);
              })
            }
            if (filter.type === "numericFacet") {
              filter.values.sort((a, b) => {
                return filter.selected.some(v => v.max === b.max) - filter.selected.some(v => v.min === a.min);
              })
            }
          }
        })

        this.clearAll = this.filters.some(filter => filter.selected.length > 0);
      } catch (err) {
        this.err = "Something went wrong. Please try again.";
        console.error(this.err, err);
        this.results = [];
      } finally {
        this.loader = false;
      }
    },
    sortData(sortParam = null) {
      if (sortParam)
        this.sortVal = sortParam;
      this.page = 1;
      this.displayData();
      this.updateUrl();
    },
    applyFilters() {
      this.page = 1;
      this.displayData();
      this.updateUrl();
    },

    handlePages(pageNum) {
      this.page = pageNum;
      this.scrollToTop();

      this.displayData();
      this.updateUrl();
    },

    clearFilters() {
      this.filters.forEach(filter => {
        filter.selected = [];
      })

      this.page = 1;
      this.displayData();
      this.updateUrl();
    },

    clearFilter(filterName) {
      this.filters.forEach(filter => {
        if (filter.field === filterName) {
          filter.selected = [];
        }
      })

      this.displayData();
      this.updateUrl();
    },

    removeFilter(item) {
      this.filters.forEach(filter => {
        if (filter.field === item.field) {
          if (filter.type === 'textFacet') {
            filter.selected = filter.selected.filter(v => v !== item.value);
          }
          if (filter.type === 'numericFacet') {
            filter.selected = filter.selected.filter(v => v.min !== item.value.min);
          }
        }
      });

      this.applyFilters();
    },
    resetAll() {
      this.results = [];
      this.resp = {};

      this.filters.forEach(filter => {
        filter.selected = [];
        filter.values = [];
        filter.isOpen = false;
      });

      this.sortVal = '';

      this.page = 1;

      this.showResults = false;

      this.client = new SearchClient(
        "8MI7TKTXH4DXQEKRGQQC5WVU",
        "H9VCE36B3E15PXPH277SSJG7"
      );
    },

    handleSearch() {
      if (this.query.trim() === "") {
        this.resetAll();
        window.history.pushState(
          {}, "", window.location.pathname);
        this.showMobileSort = false;
      } else {
        this.sortVal = this.defaultSort;
        this.clearFilters();
        this.displayData();
        // this.updateUrl();
      }
    },

    handleScroll() {
      if (window.scrollY > 1000) this.isVisible = true;
      else this.isVisible = false;

      if (document.activeElement.tagName === 'INPUT') {
        document.activeElement.blur();
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },

    updateUrl() {
      const params = new URLSearchParams();

      if (this.query) params.set("q", this.query);
      if (this.page > 1) params.set("page", this.page);
      const sortt = this.sortOptions.find(sort => sort.fields === this.sortVal);
      if (this.sortVal != this.sortOptions[0].fields) params.set("sort", sortt.label);

      this.filters.forEach(filter => {
        if (filter.selected.length > 0) {
          params.set(filter.field, JSON.stringify(filter.selected));
        }
      });

      if (this.excludeOutOfStock) params.set("available", "1");

      const newUrl = `${window.location.pathname}?${params.toString()}`;

      window.history.pushState({
        ...Object.fromEntries(params)
      }, "", newUrl);

    },

    showFilter(filter) {
      if (filter.type === "textFacet") {
        return filter.values.length > 0
      }
      if (filter.type === "numericFacet") {
        return filter.values.some(v => v.count > 0);
      }

      return true;
    }

  },
  computed: {
    selectFilters() {
      let showFilter = [];
      this.filters.forEach(filter => {
        if (filter.type === 'textFacet') {
          filter.selected.forEach(val => {
            showFilter.push({
              field: filter.field,
              value: val,
              label: `${filter.label} : ${val}`
            });
          });
        }

        if (filter.type === 'numericFacet') {
          filter.selected.forEach(val => {
            let label = "";
            if (filter.field === "discounted_price") {
              if (val.min === 0) label = `Below $${val.max}`;
              else if (val.min >= 401) label = `$${val.min} & Above`
              else label = `$${val.min} - $${val.max}`
            }
            if (filter.field === 'discount') {
              label = `$${val.max}% Off Or More`
            }
            showFilter.push({
              field: filter.field,
              value: val,
              label: `${filter.label} : ${label}`
            });
          });
        }
      });

      return showFilter;
    },
    defaultSort() {
      return this.sortOptions.find(sort => sort.active).fields;
    },
    pageCount() {
      if (!this.resp.totalHits) return 0;

      return Math.ceil(this.resp.totalHits / 32);
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);

    this.sortVal = this.sortOptions[0].fields;

    const params = new URLSearchParams(window.location.search);

    this.query = params.get("q") || "";
    this.page = Number(params.get("page")) || 1;
    const sortt = this.sortOptions.find(sort => sort.label === params.get("sort"));

    this.sortVal = sortt ? sortt.fields : this.defaultSort;

    this.filters.forEach(filter => {
      const val = params.get(filter.field);
      if (val) {
        filter.selected = JSON.parse(val);
      }
    });

    this.excludeOutOfStock = params.get("available") === "1";

    if (this.query) {
      this.displayData();
    }

    window.addEventListener("popstate", (event) => {
      const state = event.state;

      if (!state) return;
      else {
        this.query = state.q || "";
        this.page = Number(state.page) || 1;
        const sortt = this.sortOptions.find(sort => sort.label === state.sort);

        this.sortVal = sortt ? sortt.fields : this.defaultSort;

        this.filters.forEach(filter => {
          if (state[filter.field]) {
            filter.selected = JSON.parse(state[filter.field]);
          } else {
            filter.selected = [];
          }
        });
        this.excludeOutOfStock = state.stock === "1";
        this.displayData();
      }
    });
    this.filters.forEach(filter => {
      if (filter.selected.length > 0) {
        filter.isOpen = true;
      }
    });

  },
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}

.page-item {
  padding: 0px 5px;
  color: #374151;
  cursor: pointer;
}

.page-item:hover {
  background-color: #f3f4f6;
}

.active {
  border-bottom: 1px solid;
  border-color: black;
  font-weight: 500;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 40px 0px;
  flex-wrap: wrap;
}

p.st\:text-\[14px\].st\:capitalize.st\:letter-spacing\:\[0\.4px\].active-sort {
  font-weight: 900;
}
</style>