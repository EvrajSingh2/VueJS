<template>
  <main class="st:bg-gradient-to-br st:from-[#056C87] st:to-black st:h-full st:w-full st:py-[40px] st:px-4">
    <form @submit.prevent="registerUser"
      class="st:max-w-[1400px] st:mx-auto st:flex st:items-center st:justify-center st:items-stretch">
      <div
        class="st:hidden st:md:block st:w-[40%] st:bg-[url(src/assets/img2.avif)] st:bg-no-repeat st:bg-cover st:rounded-[30px] st:md:rounded-r-[0px] st:overflow-hidden">
        <div class="st:w-full st:h-full st:bg-black/40 st:flex st:items-center st:justify-center st:gap-[10px]">
          <div class="st:max-w-[60%] st:mx-auto st:flex st:flex-col st:items-center st:justify-start">
            <h1 class="st:text-[44px] st:text-center st:text-white st:font-[500]">Search Tap</h1>
            <p class="st:text-[24px] st:text-center st:text-white st:font-[500]">Fast and relevant search solution for
              small, medium or entreprise level e-commerce websites and mobile apps.</p>
          </div>
        </div>
      </div>

      <div
        class="st:w-full st:md:w-[60%] st:flex st:flex-col st:bg-white st:px-[10px] st:md:px-[10px] st:py-[20px] st:gap-[30px] st:rounded-[30px] st:md:rounded-l-[0px]">
        <h2 class="st:text-[32px] st:md:text-[44px] st:font-extrabold st:text-center">Registration Form</h2>
        <div
          class="st:flex st:flex-col st:w-full st:md:max-w-[80%] st:mx-auto st:gap-[30px] st:items-start st:md:justify-center st:text-[16px] st:md:text-[20px]">

          <div
            class="st:flex st:flex-col st:md:flex-row st:md:items-center st:md:justify-center st:gap-[20px] st:w-full">
            <div class="st:flex st:flex-col st:items-start st:gap-[5px] st:md:w-[49%]">
              <label for="name">FirstName:</label>
              <input type="text" v-model.trim="form.firstname" placeholder="Enter Your First Name" required
                class="st:border st:border-gray-400 st:rounded-[10px] st:px-[10px] st:bg-[#056C87] st:text-white st:py-[5px] st:w-full">
            </div>
            <div class="st:flex st:flex-col st:items-start st:gap-[5px] st:md:w-[49%]">
              <label for="name">LastName:</label>
              <input type="text" v-model.trim="form.lastname" placeholder="Enter Your First Name" required
                class="st:border st:border-gray-400 st:rounded-[10px] st:px-[10px] st:bg-[#056C87] st:text-white st:py-[5px] st:w-full">
            </div>
          </div>

          <div
            class="st:flex st:flex-col st:md:flex-row st:md:items-center st:md:justify-center st:gap-[20px] st:w-full">
            <div class="st:flex st:flex-col st:items-start st:justify-center st:gap-[5px] st:md:w-[49%]">
              <label for="name">Date of Birth:</label>
              <input type="date" v-model="form.dob"
                class="st:border st:border-gray-400 st:rounded-[10px] st:px-[10px] st:bg-[#056C87] st:text-white st:py-[5px] st:w-full">
            </div>
            <div class="st:flex st:flex-col st:items-start st:gap-[5px] st:md:w-[49%]">
              <label for="name">Email:</label>
              <input type="email" v-model="form.email" placeholder="Enter Your Email Address" required
                class="st:border st:border-gray-400 st:rounded-[10px] st:px-[10px] st:bg-[#056C87] st:text-white st:py-[5px] st:w-full">
            </div>
          </div>

          <div class="st:flex st:flex-col st:items-start st:justify-center st:gap-[5px] st:w-full">
            <label for="Gender">Gender:</label>
            <div class="st:flex st:items-center st:justify-center st:gap-[15px]">
              <div class="st:flex st:flex-wrap st:gap-[10px]">
                <label class="st:flex st:items-center st:gap-[10px]">
                  <input type="radio" v-model="form.gender" name="gender" value="Male"
                    class="st:w-[20px] st:h-[20px] st:accent-[#056C87]">
                  <span>Male</span>
                </label>
              </div>
              <div class="st:flex st:flex-wrap st:gap-[10px]">
                <label class="st:flex st:items-center st:gap-[10px]">
                  <input type="radio" v-model="form.gender" name="gender" value="Female"
                    class="st:w-[20px] st:h-[20px] st:accent-[#056C87]">
                  <span>Female</span>
                </label>
              </div>
              <div class="st:flex st:flex-wrap st:gap-[10px]">
                <label class="st:flex st:items-center st:gap-[10px]">
                  <input type="radio" v-model="form.gender" name="gender" value="Other"
                    class="st:w-[20px] st:h-[20px] st:accent-[#056C87]">
                  <span>Other</span>
                </label>
              </div>
            </div>
          </div>

          <div class="st:w-full st:flex st:flex-col st:gap-[5px]">
            <label for="phone">Phone Number:</label>
            <input type="tel" v-model="form.phone" placeholder="Enter Your Phone Number"
              class="st:border st:border-gray-400 st:rounded-[10px] st:px-[10px] st:bg-[#056C87] st:text-white st:py-[5px] st:w-full">
          </div>

          <div class="st:flex st:flex-col st:md:flex-row st:md:items-start st:justify-start st:gap-[20px] st:w-full">
            <div class="st:flex  st:flex-col  st:items-start st:gap-[10px] st:w-[49%]">
              <label>Subjects:</label>
              <label class="st:flex st:items-center st:gap-[6px]">
                <span class="st:w-[80px]">C++</span>
                <input type="checkbox" v-model="form.subjects" value="C++"
                  class="st:w-[20px] st:h-[20px] st:cursor-pointer st:accent-[#056C87]">
              </label>
              <label class="st:flex st:items-center st:gap-[6px]">
                <span class="st:w-[80px]">Java</span>
                <input type="checkbox" v-model="form.subjects" value="Java"
                  class="st:w-[20px] st:h-[20px] st:cursor-pointer st:accent-[#056C87]">
              </label>
              <label class="st:flex st:items-center st:gap-[6px]">
                <span class="st:w-[80px]">Python</span>
                <input type="checkbox" v-model="form.subjects" value="Python"
                  class="st:w-[20px] st:h-[20px] st:cursor-pointer st:accent-[#056C87]">
              </label>
              <label class="st:flex st:items-center st:gap-[6px]">
                <span class="st:w-[80px]">SQL</span>
                <input type="checkbox" v-model="form.subjects" value="SQL"
                  class="st:w-[20px] st:h-[20px] st:cursor-pointer st:accent-[#056C87]">
              </label>
            </div>

            <div class="st:flex st:flex-col st:items-start st:md:w-[49%] st:gap-[10px]">
              <label for="examcenter">Exam Center:</label>
              <select v-model="form.examcenter"
                class="st:w-full st:h-[50px] st:bg-[#056C87] st:text-white st:rounded-md st:px-4 st:border st:border-gray-300 st:focus:ring-2 st:focus:ring-[#056C87]">
                <option class="st:text-white">Select an Exam Center</option>
                <option value="Delhi" class="st:text-white">Delhi</option>
                <option value="Mumbai" class="st:text-white">Mumbai</option>
                <option value="Kolkata" class="st:text-white">Kolkata</option>
              </select>
            </div>
          </div>

          <div class="st:flex st:items-start st:justify-start st:w-full st:gap-[20px]">
            <button type="submit"
              class="st:flex st:justify-center st:text-[24px] st:border st:bg-[#056C87]  st:py-[10px] st:rounded-[15px]  st:text-white st:w-full  st:mx-auto">
              {{ editId === null ? "Register" : "Update" }}</button>
            <button @click.prevent="clearForm"
              class="st:flex st:justify-center st:text-[24px] st:border st:bg-red-500  st:py-[10px] st:rounded-[15px]  st:text-white st:w-full  st:mx-auto">
              {{ editId === null ? "Clear" : "Cancel" }}</button>
          </div>
        </div>
      </div>
    </form>

    <div class="st:max-w-[1400px] st:mx-auto st:mt-[60px]">
      <h2 class="st:text-[32px] st:md:text-[44px] st:text-white st:font-[600] st:mb-[20px]">Registration Data</h2>

      <div
        class="st:flex st:mx-auto st:items-center st:justify-center st:md:items-center st:md:justify-end st:mt-[20px] st:gap-[10px] st:mb-[10px]">
        <div class="st:w-1/2 st:md:w-auto">
          <p @click="toggleFunc"
            class="st:text-[20px] st:w-full st:px-[15px] st:py-[3px]  st:rounded st:bg-[#012E3C] st:text-white st:border st:border-gray-500 st:cursor-pointer">
            Filters</p>
        </div>

        <div class="st:w-1/2 st:md:w-auto">
          <select v-model="sortVal"
            class="st:text-[16px] st:md:text-[20px] st:w-full st:h-[38px] st:px-[15px] st:py-[3px] st:rounded st:bg-[#012E3C] st:text-white st:border st:border-gray-500 st:cursor-pointer">
            <option v-for="sortoption in sortOptions" :key="sortoption.value" :value="sortoption.value">
              {{ sortoption.label }}
            </option>
          </select>
        </div>
      </div>

      <div class="st:flex st:flex-col st:md:flex-row st:gap-[20px]">
        <div v-if="isActive"
          class="st:w-full st:md:w-1/5 st:border st:border-gray-400 st:p-[15px] st:rounded-lg st:bg-[#012E3C] st:text-white">
          <h2 class="st:text-[22px] st:mb-[10px]">Filters</h2>
          <div class="st:mb-[20px]">
            <p class="st:mb-[5px]">Gender</p>

            <label v-for="gender in genderOptions" :key="gender" class="st:block">
              <input type="checkbox" v-model="filters.filteredGender" :value="gender">
              {{ gender }}
            </label>
          </div>

          <div class="st:mb-[20px]">
            <p class="st:mb-[5px]">Subjects</p>

            <label v-for="subject in subjectOptions" :key="subject" class="st:block">
              <input type="checkbox" v-model="filters.filteredSubjects" :value="subject">
              {{ subject }}
            </label>

          </div>

          <div class="st:mb-[20px]">
            <p class="st:mb-[5px]">Exam Center</p>

            <label v-for="center in centerOptions" :key="center" class="st:block">
              <input type="checkbox" v-model="filters.filteredCenters" :value="center">
              {{ center }}
            </label>
          </div>

          <button @click="clearFilters"
            class="st:w-1/2 st:bg-red-600 st:px-3 st:py-1 st:rounded-[10px] st:text-white st:cursor-pointer">
            Clear Filters
          </button>
        </div>

        <div class="st:overflow-auto" :class="isActive ? 'st:w-4/5' : 'st:w-full'">
          <table class="st:w-full st:border-collapse">
            <thead>
              <tr>
                <th class="st:border st:border-gray-300 st:px-4 st:py-2 st:text-left st:text-white st:text-nowrap">ID
                </th>
                <th class="st:border st:border-gray-300 st:px-4 st:py-2 st:text-left st:text-white st:text-nowrap">First
                  Name </th>
                <th class="st:border st:border-gray-300 st:px-4 st:py-2 st:text-left st:text-white st:text-nowrap">Last
                  Name </th>
                <th class="st:border st:border-gray-300 st:px-4 st:py-2 st:text-left st:text-white st:text-nowrap">Date
                  of Birth </th>
                <th class="st:border st:border-gray-300 st:px-4 st:py-2 st:text-left st:text-white st:text-nowrap">
                  Age</th>
                <th class="st:border st:border-gray-300 st:px-4 st:py-2 st:text-left st:text-white st:text-nowrap">
                  Gender </th>
                <th class="st:border st:border-gray-300 st:px-4 st:py-2 st:text-left st:text-white st:text-nowrap">Email
                  Address </th>
                <th class="st:border st:border-gray-300 st:px-4 st:py-2 st:text-left st:text-white st:text-nowrap">Phone
                  Number </th>
                <th class="st:border st:border-gray-300 st:px-4 st:py-2 st:text-left st:text-white st:text-nowrap">
                  Subjects </th>
                <th class="st:border st:border-gray-300 st:px-4 st:py-2 st:text-left st:text-white st:text-nowrap">Exam
                  Center </th>
                <th class="st:border st:border-gray-300 st:px-4 st:py-2 st:text-left st:text-white st:text-nowrap">
                  Action </th>
              </tr>
            </thead>

            <tbody class="st:text-gray-200">
              <tr v-for="user in filteredData" :key="user.id">
                <td class="st:border st:px-4 st:py-2">{{ user.id }}</td>
                <td class="st:border st:px-4 st:py-2">{{ user.firstname }}</td>
                <td class="st:border st:px-4 st:py-2">{{ user.lastname }}</td>
                <td class="st:border st:px-4 st:py-2">{{ user.dob }}</td>
                <td class="st:border st:px-4 st:py-2">{{ user.age }}</td>
                <td class="st:border st:px-4 st:py-2">{{ user.gender }}</td>
                <td class="st:border st:px-4 st:py-2">{{ user.email }}</td>
                <td class="st:border st:px-4 st:py-2">{{ user.phone }}</td>
                <td class="st:border st:px-4 st:py-2">{{ user.subjects.join(", ") }}</td>
                <td class="st:border st:px-4 st:py-2">{{ user.examcenter }}</td>
                <td class="st:border st:px-4 st:py-2">
                  <div class="st:flex st:items-center st:gap-[10px]">
                    <button type="button" class="st:border st:px-[5px] st:py-[2px] st:bg-green-600 st:rounded-[5px]"
                      @click="editUSer(user.id)">
                      Edit
                    </button>
                    <button type="button" class="st:border st:px-[5px] st:py-[2px] st:bg-red-600 st:rounded-[5px]"
                      @click="deleteUser(user.id)">
                      Delete
                    </button>
                  </div>

                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  </main>
</template>

<script>
import { SortType, Gender, Subjects, Centers } from "./types";
export default {
  data() {
    return {
      users: [
        {
          id: 1,
          firstname: "Evraj",
          lastname: "Singh",
          dob: "2003-12-27",
          age: 22,
          email: "evraj1@gmail.com",
          phone: "8765672269",
          gender: "Male",
          examcenter: "Delhi",
          subjects: ["Java", "C++"]
        },
        {
          id: 2,
          firstname: "Sidak",
          lastname: "Singh",
          dob: "2004-08-13",
          age: 21,
          email: "sidak@gmail.com",
          phone: "8855219675",
          gender: "Male",
          examcenter: "Mumbai",
          subjects: ["Java"]
        },
        {
          id: 3,
          firstname: "Alpha",
          lastname: "Bell",
          dob: "1998-02-22",
          age: 27,
          email: "alpha@gmail.com",
          phone: "8765672232",
          gender: "Female",
          examcenter: "Delhi",
          subjects: ["SQL"]
        },
        {
          id: 4,
          firstname: "lauren",
          lastname: "belium",
          dob: "1995-02-20",
          age: 31,
          email: "lauren2@gmail.com",
          phone: "8765672232",
          gender: "Female",
          examcenter: "Kolkata",
          subjects: ["Python"]
        },
        {
          id: 5,
          firstname: "Hemant",
          lastname: "Singh",
          dob: "1998-02-22",
          age: 27,
          email: "lauren@gmail.com",
          phone: "7065857770",
          gender: "Male",
          examcenter: "Kolkata",
          subjects: ["SQL", "Java", "Python"]
        },
        {
          id: 6,
          firstname: "lauren",
          lastname: "smith",
          dob: "2006-02-22",
          age: 20,
          email: "lauren21@gmail.com",
          phone: "8700093751",
          gender: "Other",
          examcenter: "Delhi",
          subjects: ["SQL", "Python", "C++", "Java"]
        },

      ],
      nextId: 7,
      editId: null,
      SortType,
      sortVal: "",
      isActive: false,

      sortOptions: [
        { label: "sort", value: "" },
        { label: "Name A-Z ↑", value: SortType.NameAZ },
        { label: "Name Z-A ↓", value: SortType.NameZA },
        { label: "Age ↑", value: SortType.AgeInc },
        { label: "Age ↓", value: SortType.AgeDec },
        { label: "Subjects ↑", value: SortType.SubjectsInc },
        { label: "Subjects ↓", value: SortType.SubjectsDec }
      ],

      genderOptions: [Gender.Male, Gender.Female, Gender.Other],

      subjectOptions: [Subjects.Cplus, Subjects.Java, Subjects.Python, Subjects.SQL],

      centerOptions: [Centers.Delhi, Centers.Mumbai, Centers.Kolkata],

      filters: {
        filteredGender: [],
        filteredSubjects: [],
        filteredCenters: [],
      },

      form: {
        firstname: "",
        lastname: "",
        dob: "",
        email: "",
        phone: "",
        gender: "",
        examcenter: "",
        subjects: []
      }
    }
  },
  methods: {
    registerUser() {

      const age = new Date().getFullYear() - new Date(this.form.dob).getFullYear();

      const userData = {
        id: this.nextId, ...this.form, age
      }

      if (this.editId === null) {
        this.users.push(userData);
        this.nextId++;
      } else {
        const index = this.users.findIndex(user => user.id === this.editId);

        this.users[index] = {
          id: this.editId,
          ...this.form, age
        };

        this.editId = null;
      }

      this.form = {
        firstname: "",
        lastname: "",
        dob: "",
        email: "",
        phone: "",
        gender: "",
        examcenter: "",
        subjects: []
      }
    },

    editUSer(id) {
      const editUser = this.users.find(user => user.id === id);
      this.form = {
        firstname: editUser.firstname,
        lastname: editUser.lastname,
        dob: editUser.dob,
        email: editUser.email,
        phone: editUser.phone,
        gender: editUser.gender,
        examcenter: editUser.examcenter,
        subjects: [...editUser.subjects]
      }

      this.editId = id;
    },

    deleteUser(id) {
      this.users = this.users.filter(user => user.id !== id);
      this.clearForm();
    },

    toggleFunc() {
      this.isActive = !this.isActive;
    },

    clearForm() {
      this.form = {
        firstname: "",
        lastname: "",
        dob: "",
        email: "",
        phone: "",
        gender: "",
        examcenter: "",
        subjects: []
      }
      this.editId = null;
    },

    clearFilters() {
      this.filters.filteredGender = [];
      this.filters.filteredCenters = [];
      this.filters.filteredSubjects = [];
    },

    sortData(data, order = "asc", type) {
      data.sort((a, b) => {
        let fa = a[type];
        let fb = b[type];
        console.log(typeof fa);
        console.log(typeof fb);

        if (typeof fa === "string") {
          console.log("in if");
          fa = fa.toLowerCase();
          fb = fb.toLowerCase();
        }
        else if (typeof fa === "object") {
          console.log("in else");
          fa = fa.length;
          fb = fb.length;
        }

        if (fa < fb) {
          return order === "asc" ? -1 : 1;
        } else {
          return order === "asc" ? 1 : -1;
        }
      });
    },
  },
  computed: {
    filteredData() {
      let data = this.users.filter(user => {
        const genderr = this.filters.filteredGender.length === 0 || this.filters.filteredGender.includes(user.gender);

        const centerr = this.filters.filteredCenters.length === 0 || this.filters.filteredCenters.includes(user.examcenter);

        const subjectt = this.filters.filteredSubjects.length === 0 || user.subjects.some(subject =>
          this.filters.filteredSubjects.includes(subject)
        )

        return genderr && centerr && subjectt;
      });

      if (this.sortVal === SortType.NameAZ) {
        this.sortData(data, "asc", "firstname");
      }
      else if (this.sortVal === SortType.NameZA) {
        this.sortData(data, "desc", "firstname");
      }
      else if (this.sortVal === SortType.AgeInc) {
        this.sortData(data, "asc", "age");
      }
      else if (this.sortVal === SortType.AgeDec) {
        this.sortData(data, "desc", "age");
      }
      else if (this.sortVal === SortType.SubjectsInc) {
        this.sortData(data, "asc", "subjects");
      }
      else if (this.sortVal === SortType.SubjectsDec) {
        this.sortData(data, "desc", "subjects");
      }

      return data;
    },
  }
}
</script>
