import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-stories',
  templateUrl: './customer-stories.component.html',
  styleUrls: ['./customer-stories.component.scss']
})
export class CustomerStoriesComponent {
customerStories=[
  {
    id:1,
    customerImg:'../../../../assets/images/customer-stories/item1.svg',
    rating:'../../../../assets/images/customer-stories/rarting.svg',
    customerName:'Rohit Anugula',
    ownerName:'Hi Abilio 1,',
    endingText:'Thanks',
    comment:' Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod scaevola sea. Et nec tantas accusamus salutatus, sit commodo veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius essent fuisset ut. Viderer petentium cu his. Tollit molestie suscipiantur his et.'
  },
  {
    id:2,
    customerImg:'../../../../assets/images/customer-stories/item2.svg',
    rating:'../../../../assets/images/customer-stories/rarting.svg',
    customerName:'Suresh Peyyala',
    ownerName: "Avesome Experience",
    endingText:'Thanks',
    comment:'Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod scaevola sea. Et nec tantas accusamus salutatus, sit commodo veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius essent fuisset ut. Viderer petentium cu his. Tollit molestie suscipiantur his et. sit commodo veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius essent fuisset ut. Viderer petentium cu his. Tollit molestie suscipiantur his et.'
  },
  {
    id:3,
    customerImg:'../../../../assets/images/customer-stories/item3.svg',
    rating:'../../../../assets/images/customer-stories/rarting.svg',
    customerName:'John Peter',
    ownerName:"'Avesome Experience'",
    endingText:'Thanks',
    comment:'Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod scaevola sea. Et nec tantas accusamus salutatus, sit commodo veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius essent fuisset ut. Viderer petentium cu his. Tollit molestie suscipiantur his et.'
  },
  {
    id:4,
    customerImg:'../../../../assets/images/customer-stories/item4.svg',
    rating:'../../../../assets/images/customer-stories/rarting.svg',
    customerName:'Saurav K',
    // ownerName:'Hi Abilio 4,',
    endingText:'Thanks',
    comment:' Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod scaevola sea. '
  },
  {
    id:5,
    customerImg:'../../../../assets/images/customer-stories/item5.svg',
    rating:'../../../../assets/images/customer-stories/rarting.svg',
    customerName:'Vandana Setty',
    ownerName:'Hi Abilio',
    endingText:'Thanks',
    comment:'Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod scaevola sea. Et nec tantas accusamus salutatus, sit commodo veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius essent fuisset ut. Viderer petentium cu his. Tollit molestie suscipiantur his et'
  },
  {
    id:6,
    customerImg:'../../../../assets/images/customer-stories/item6.svg',
    rating:'../../../../assets/images/customer-stories/rarting.svg',
    customerName:'Ram M',
    ownerName:'Hi Abilio 6,',
    endingText:'Thanks',
    comment:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`
  },
  {
    id:7,
    customerImg:'../../../../assets/images/customer-stories/item7.svg',
    rating:'../../../../assets/images/customer-stories/rarting.svg',
    customerName:'',
    ownerName:'Harshavardhan Kumar',
    endingText:'Thanks',
    comment:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.`
  },
  {
    id:8,
    customerImg:'../../../../assets/images/customer-stories/item8.svg',
    rating:'../../../../assets/images/customer-stories/rarting.svg',
    customerName:'Thirupathi O',
    // ownerName:'Hi Abilio 8,',
    endingText:'Thanks',
    comment:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.`
  }
]

}
