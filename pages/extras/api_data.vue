<template>
  <div>

      <div class="content-wrapper">
    <div class="container">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>
          About
          <small>Example 2.0</small>
        </h1>
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
          <li><a href="#">Layout</a></li>
          <li class="active">Top Navigation</li>
        </ol>
      </section>

      <!-- Main content -->
      <section class="content">
        <div class="row">
        <div class="col-md-12">
          <h1>API DATA</h1>
          <br>
           ==> {{ ip }}
           <br>
           ==> {{ data }}
           <br>
           ==> {{ my_data }}
           <br>

             <span v-for="n in 10">
            <li> {{ n }} </li>
           </span>

           <br>

           <!-- <li v-for="my_data in tracks"> {{ my_data.employee_name }} </li> -->


           <ol v-if="posts.length">
            <li v-for="post in posts">
              {{ post.username }}
            </li>
          </ol>

          <ol v-if="employe_data.length">
            <li v-for="value in employe_data">
              {{ value.username }}
            </li>
          </ol>

          ------AXIOS DATA-------

          <ol v-if="axios_list_data.length">
            <li v-for="value in axios_list_data">
              {{ value.username }}
            </li>
          </ol>

          ====================

          <table>
          <tr>
            <th>Names</th>
            <th>description</th>
          </tr>
          <tr v-for="value in axios_list_data">
            <td>
              {{ value.username }}
            </td>
            <td>
              {{ value.description }}
            </td>
          </tr>
        </table>


        
        </div>
        <!-- /.col -->
      </div>
      </section>
      <!-- /.content -->
    </div>
    <!-- /.container -->
  </div>
  </div>
</template>

<script>
  export default {

    

    // async asyncData ($axios) {
    //        const ip_data = await $axios.$get('http://icanhazip.com')
    //       return { ip: ip }
    // }

    // mydata(){
    //   const ip = await $axios.$get('http://icanhazip.com')
    //     return { ip }
    // }

     async asyncData({ $axios }) {
        const ip_data = await $axios.$get('http://icanhazip.com');
        let data = [];
        let posts= [];
        let employe_data = [];
        let axios_list_data = [];

        const employees_datas = await $axios.$get('https://sdnodeapi.herokuapp.com/exercises/')
        // .then(data=>{return data.json()})
        .then(res => {
          // console.log(res.data);
          axios_list_data = res;
          // return res.data.employee_name
        });
        // console.log(employe_data);
        return { 
          ip : ip_data,
          my_data : data,
          posts : posts,
          employe_data : employe_data,
          axios_list_data : axios_list_data,
        }
      },
      created() {
        this.setPosts();
      },
      methods: {
      setPosts() {
        const url = 'https://sdnodeapi.herokuapp.com/exercises/';
          fetch(url)
          .then(data=>{return data.json()})
          .then(res=>{
            console.log(res);
            this.posts = res
          });


          const urls = 'https://sdnodeapi.herokuapp.com/exercises/';
          fetch(urls)
          .then(data=>{return data.json()})
          .then(res=>{
            console.log(res);
            this.employe_data = res
          });


        }
      },

      data ({ $axios }) {
        const ip_data =  $axios.$get('http://icanhazip.com')
        return { data : ip_data }
            // return { data: 'default' }
        }


    // methods: {
    //   async fetchSomething() {
    //     const ip = await this.$axios.$get('http://icanhazip.com')
    //     this.int_p = int_p
    //   }
    // }
   
  }
</script>
