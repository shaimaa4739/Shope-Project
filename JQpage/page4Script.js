function fadeToDiv(){
    $('.animateMe').fadeToggle(3000);
}
$('.animateMe').on('click',function(){
    $(this).slideToggle(2000);
});
$('.animateType3').on('mouseover',function(){
    $(this).animate({
        "left":"200px"
    },2000)
});
$('.animateType3').on('mouseout',function(){
    console.log("mouse down")
    $(this).animate({
        "left":"0px"
    },2000)
});
$('.animateType4').on('mouseover',function(){
    $(this).animate({
        "right":"200px"
    },2000)
});
$('.animateType4').on('mouseout',function(){
    console.log("mouse down")
    $(this).animate({
        "right":"65px"
    },2000)
});

// Ajax in jquery
$.ajax(
    {
        "url":"https://jsonplaceholder.typicode.com/posts",
        method:"get",
        // data is returned from the url
        success:function(data,statusText,xhrObj){
            if(xhrObj.status===200){
                console.log(data[0])
                var d = new Date();
                var date = d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear();
                for(var i=0; i<3 ; i++)
                {   
                    var post = document.createElement('div');
                    $(post).attr('id',data[i].id);
                    $(post).addClass('post')

                    var imgDiv = document.createElement('div');
                    $(imgDiv).attr('id',"imgID");
                    var img = document.createElement('img');
                    $(img).attr('src',"../Images/Blank-Avatar.png");
                    $(img).appendTo($(imgDiv));
                    $(post).append($(imgDiv));

                    var usrInfo = document.createElement('div');
                    $(usrInfo).attr('id',"usrInfoID");
                    $(post).append($(usrInfo));

                    var usrName = document.createElement('div');
                    usrName.innerText="Shaimaa Siraj";
                    $(usrInfo).append($(usrName));

                    var postDate = document.createElement('div');

                    postDate.innerText=date;
                    $(usrInfo).append($(postDate));

                    var postContent = document.createElement('div');
                    postContent.innerText=data[i].body;
                    $(postContent).attr('class',"postBodyClass");
                    $(post).append($(postContent));

                    $('.postsContainer').append($(post))
                }
                

                // var activity = document.createElement('div');
                // $(activity).attr('class',"activityClass");
                // $('.postsContainer').append($(activity));

                // var like = document.createElement('span');
                // $(like).attr('class',"likeClass");
                // like.innerHTML="<i class=\"fa fa-thumbs-up\"></i>";
                // $(activity).append($(like));

                // var comment = document.createElement('span');
                // $(comment).attr('class',"commentClass");
                // comment.innerHTML="<i class=\"fa fa-comment\"></i> shaimaa";
                // $(activity).append($(comment));

                // var share = document.createElement('span');
                // $(share).attr('class',"shareClass");
                // share.innerHTML="<i class=\"fa fa-share-square\"></i>";
                // $(activity).append($(share));


                console.log($('.postsContainer'));
            }
            else
            {
                console.log("error from server")
            }
        },
        error:function(){
            console.log("error from ajax")
        }
    }
    
)
