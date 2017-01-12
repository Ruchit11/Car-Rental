/* 
 * Student Info: Name=Ruchit Chokshi, ID=14452cr
 * Subject: CourseNoCS557_HW_4_Fall_2015
 * Author: Ruchit
 * Filename: student.js
 * Date and Time: Nov 30, 2015 10:13:26 PM
 * Project Name: HW_4
 */
$(document).ready(function(){

	$("#btn1").click(function(){
		
            $.ajax({

                     type: "GET",
                     url: "student.json",
                     dataType: "json",
                     success: function(response){
                    	 
                    		
                    	 var body = document.body;
                    	 $(body).append("<p> total: "+response.length+ "</p>");
                  		var table= $("<table> </table>").css({"border-color":"1px solid black", "background-color":"yellow"});
                  	     $("body").append(table);
                  	   var thead = $("<thead> </thead").append("<th> Name </th> ","<th> Country </th> ","<th> age </th> ");
              	     $(table).append(thead);
                  	     
                  	     for(var i=0; i<response.length; i++){
                  	    var tr= $("<tr> </tr>");
                  	   $(table).append(tr);
                  	  
                  	   $(tr).append("<td>"+response[i].name+"</td>");
                  	   
                  	
                	  
                	   $(tr).append("<td>"+response[i].Country+"</td>");
                	   
                	  
                	   $(tr).append("<td>"+response[i].age+"</td>");
                	   
                	   
                	  
                	  
                    	               	
                    	 
                  	     }

                     },

                     error: function(){
                     	
                     }

             

            });
	});

	});

