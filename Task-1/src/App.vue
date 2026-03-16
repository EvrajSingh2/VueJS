<template>
  <div class="st:bg-gray-400 st:min-h-screen">
    <header class="st:flex st:items-center st:justify-center st:text-center">
      <h1 class="st:text-[54px] st:font-[500] st:my-[40px]">Interactive Expense Tracker</h1>
    </header>
    <main class="st:max-w-[1240px] st:mx-auto st:bg-white st:py-[30px] st:px-[15px]">

      <form @submit.prevent="addExpense" class="st:flex st:flex-col st:gap-[20px]">
        <div class="st:flex st:items-center st:text-[24px] st:w-full st:gap-[5px]">
          <label for="title">Title:</label>
          <input v-model="title" type="text" class="st:border-b-[2px] st:border-gray-500 st:outline-none st:flex-1">
        </div>

        <div class="st:flex st:items-center st:text-[24px] st:w-full st:gap-[5px]">
          <label for="Amount">Amount:</label>
          <input v-model="amount" type="number" class="st:border-b-[2px] st:border-gray-500 st:outline-none st:flex-1">
        </div>

        <div class="st:flex st:items-center st:gap-[5px] st:w-full st:text-[24px]">
          <label>Select Category:</label>
          <select v-model="category">
            <option value="Food">Food</option>
            <option value="Tarvel">Travel</option>
            <option value="Work">Work</option>
            <option value="Gym">Gym</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button
          class="st:text-[24px] st:border st:bg-green-500 st:text-white st:font-[500] st:p-[5px] st:w-[10%] st:rounded-[10px]">
          {{ editId === null ? "ADD" : "Update" }}
        </button>
      </form>

      <div class="st:flex st:items-center st:justify-end st:gap-[5px] st:w-full st:text-[20px]">
        <label>Filter:</label>
        <select v-model="filter" @change="render">
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Tarvel">Travel</option>
          <option value="Work">Work</option>
          <option value="Gym">Gym</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <table class="st:w-full st:border st:border-gray-400 st:border-collapse st:text-[24px]">
        <thead class="st:bg-gray-300">
          <tr>
            <td class="st:border st:px-3 st:py-2">ID</td>
            <td class="st:border st:px-3 st:py-2">Title</td>
            <td class="st:border st:px-3 st:py-2">Amount</td>
            <td class="st:border st:px-3 st:py-2">Category</td>
            <td class="st:border st:px-3 st:py-2">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="expense in result">
            <td class="st:border st:px-3 st:py-2">{{ expense.id }}</td>
            <td class="st:border st:px-3 st:py-2">{{ expense.title }}</td>
            <td class="st:border st:px-3 st:py-2">{{ expense.amount }}</td>
            <td class="st:border st:px-3 st:py-2">{{ expense.category }}</td>
            <td class="st:border st:px-3 st:py-2 st:flex st:items-center st:justify-center st:gap-[10px]">
              <button type="button" @click="editExpense(expense.id)"
                class="st:border st:px-[5px] st:py-[2px] st:bg-green-400">
                Edit
              </button>
              <button tyep="button" @click="deleteExpense(expense.id)"
                class="st:border st:px-[5px] st:py-[2px] st:bg-red-400">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <p
        class="st:text-[24px] st:border st:bg-red-400 st:text-white st:font-400 st:mt-[40px] st:rounded-[10px] st:w-fit st:px-[10px] st:py-[5px] st:pr-[50px]">
        Total Expenses: {{ total }}</p>

    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      amount: "",
      category: "Food",
      filter: "All",
      expenses: [],
      result: [],
      nextId: 1,
      editId: null,
      total: 0
    }
  },

  methods: {
    addExpense() {
      const text = this.title.trim();
      const amt = this.amount;
      let cate = this.category

      if (text === "") {
        alert("Title cannot be Empty");
        return;
      }
      if (amt <= 0) {
        alert("Invaid Amount");
        return;
      }

      if (this.editId === null) {
        this.expenses.push({
          id: this.nextId++,
          title: text,
          amount: amt,
          category: cate
        })
      } else {
        const exp = this.expenses.find(e => e.id === this.editId);

        exp.title = text;
        exp.amount = amt;
        exp.category = cate;

        this.editId = null;
      }


      this.title = "";
      this.amount = "";

      this.render();
    },

    render() {
      if (this.filter === "All") {
        this.result = this.expenses;
      } else {
        this.result = this.expenses.filter(expense => expense.category === this.filter);
      }

      this.total = this.result.reduce((sum, expense) => {
        return sum + Number(expense.amount);
      }, 0)
    },

    deleteExpense(id) {
      this.expenses = this.expenses.filter(expense => expense.id !== id);
      this.title = "";
      this.amount = "";
      this.category = "Food";
      this.editId = null;
      this.render();
    },

    editExpense(id) {
      const exp = this.expenses.find(expense => expense.id === id);
      this.title = exp.title;
      this.amount = exp.amount;
      this.category = exp.category;

      this.editId = id;
    },

    mounted() {
      this.render();
    }
  }
}
</script>
