var app ={
  initialize: function() {

  },
  onDeviceReady: function() {

  },
  prefLSID:"Prefs",
  bookLSID:"BookPos",
  getPreferences:function(){
    return JSON.parse(window.localStorage.getItem(this.prefLSID));
  },
  setPreferences:function(items){
    window.localStorage.setItem(this.prefLSID,JSON.stringify(items));
  },
  setBookPos:function(pos){
    window.localStorage.setItem(this.bookLSID,pos);
  },
  getBookPos:function(){
    return window.localStorage.getItem(this.bookLSID);
  },
  removeBookPos:function(){
    window.localStorage.setItem(this.bookLSID,"");
  }
};

app.initialize();
