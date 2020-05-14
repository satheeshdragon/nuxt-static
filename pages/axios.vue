<template>
	<div>

     <ul>
          <li v-for="article in articles" class="item">
            <nuxt-link :to="'/article/' + article.id">{{ article.title }}</nuxt-link>
          </li>
        </ul>

	</div>
</template>

<script>
	export default {

		 async asyncData () {
	      const {data} = this.$axios.$get('https://sdnodeapi.herokuapp.com/exercises/')
	      return {articles:data}
	    }


		// data(){
		// 	var first_data = [];
		// 	var theArray = [];

		// 	// const {data} = this.$axios.$get('https://sdnodeapi.herokuapp.com/exercises/')

		// 	// return {articles:data}

		// 	this.$axios.$get('https://sdnodeapi.herokuapp.com/exercises/').then( res =>  {

		// 		// res.map(r => {
		// 		// 	console.log(r.username);
		// 		// 	theArray = r.username
		// 		// 	// this.theArray.push(r.username);
		// 		// 	}
		// 		// )

		// 		this.first_data = res;

		// 		// const newItem = {
  //   //               Name: res.username,
  //   //             };
  //   //             console.log(res);
  //   //             console.log('********');
  //   //             this.theArray.push(newItem);

		// 		// this.first_data = res
		// 	});

		// 	// first_data.map(r => {
		// 	// 		console.log(r.username);
		// 	// 		theArray = r.username
		// 	// 		// this.theArray.push(r.username);
		// 	// });

		// 	// this.first_data = [{
		// 	// 	"username" : "satheesh",
		// 	// 	"username" : "kumar"
		// 	// }];

		// 	// console.log (theArray);

		// 	// var obj = first_data.map();

		// 	return {my:first_data};

		// 	// var example1 = new Vue({
		// 	//   el: '#example-1',
		// 	//   data: {
		// 	//     items: [
		// 	//       { message: 'Foo' },
		// 	//       { message: 'Bar' }
		// 	//     ]
		// 	//   }
		// 	// });

		// 	// return data;
		// }
	}
</script>
