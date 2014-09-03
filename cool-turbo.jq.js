$(function(){

  function coolturbo(){
    
    var ctx = $('body');
    var list_content = 'a,p,h1,h2,h3,h4,h5,h6,i,small,strong,s,code,label';
    var content = ctx.find(list_content);
    var realtext = content.text();
    
    content.each(function(){
      
      var $this = $(this);
      var realtext = $this.text();
      var newtext = realtext + ' cool turbo';
      $this.empty().append(newtext);
      
    });
  }
  
  coolturbo();
  
});
