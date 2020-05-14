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
           ==> {{ project }}

        
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

     // async asyncData (context) {
     //    const {data} = context.$axios.$get('http://dummy.restapiexample.com/api/v1/employees');
     //    console.log(data);
     //    return {articles:data}
     //  }

     data () {
       return {
          project: ''
        }
      },
      asyncData (context) {
        const ip =  context.$axios.$get('http://icanhazip.com').then( function(res,context){ 
          console.log(res);
          // console.log(context);
          // this.project = 'sat';
          // return { project: res };
        } );
        // return { project: 'NEW' }
      }
      // async fetch () {
      //   // this.project = await this.$http.$get('http://icanhazip.com')
      //   this.project = ['satheesh']
      // },
  }
</script>