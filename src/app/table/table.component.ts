import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
activate = false;
  users = [{"id":1,"first_name":"Ezechiel","last_name":"Gilston","gender":"Male","email":"egilston0@bandcamp.com","phone":"4392700770"},
{"id":2,"first_name":"Daren","last_name":"Jayme","gender":"Male","email":"djayme1@rakuten.co.jp","phone":"4173146642"},
{"id":3,"first_name":"Roosevelt","last_name":"Cartan","gender":"Male","email":"rcartan2@sfgate.com","phone":"2158840321"},
{"id":4,"first_name":"Dion","last_name":"Kubiczek","gender":"Male","email":"dkubiczek3@usatoday.com","phone":"5427126278"},
{"id":5,"first_name":"Wallie","last_name":"Pollins","gender":"Female","email":"wpollins4@aboutads.info","phone":"9817804872"},
{"id":6,"first_name":"Hugh","last_name":"MacShirie","gender":"Male","email":"hmacshirie5@wordpress.com","phone":"1646026492"},
{"id":7,"first_name":"Jacquetta","last_name":"D'Hooghe","gender":"Female","email":"jdhooghe6@lycos.com","phone":"6201738833"},
{"id":8,"first_name":"Alta","last_name":"Philimore","gender":"Female","email":"aphilimore7@studiopress.com","phone":"7169037149"},
{"id":9,"first_name":"Celie","last_name":"Pennetti","gender":"Female","email":"cpennetti8@icio.us","phone":"7531486751"},
{"id":10,"first_name":"Irv","last_name":"Le Borgne","gender":"Male","email":"ileborgne9@amazon.co.uk","phone":"1602607228"},
{"id":11,"first_name":"Rosemonde","last_name":"Hume","gender":"Female","email":"rhumea@amazonaws.com","phone":"3743461610"},
{"id":12,"first_name":"Gertruda","last_name":"Woodes","gender":"Female","email":"gwoodesb@uol.com.br","phone":"5955735889"},
{"id":13,"first_name":"Park","last_name":"Vivians","gender":"Male","email":"pviviansc@europa.eu","phone":"9635036784"},
{"id":14,"first_name":"Judon","last_name":"Box","gender":"Male","email":"jboxd@oracle.com","phone":"7859394120"},
{"id":15,"first_name":"Benedetto","last_name":"Walsham","gender":"Male","email":"bwalshame@booking.com","phone":"9435869794"}];

getColumnNames():string[] {

return this.activate ? ['id', 'first_name', 'last_name', 'gender'] : ['id', 'first_name', 'email', 'phone'];
}
}
