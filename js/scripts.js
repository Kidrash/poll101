$(Document).ready(function(){

        const db = []

        $('#form').submit((e) => {
            e.preventDefault()
            const firstName = $('#inputFname').val()
            const secondName = $('#inputSname').val()
            const idNumber = $('#inputIdentificationNumber').val()
            const county = $('#inputCounty').val()
            const zip = $('#inputZip').val()
            const chosenCandidate = $('#candidates').val()
            
    
            console.log(firstName,secondName,idNumber,county,zip)

            if(db.find(user => user.idNumber === idNumber)){
                return
            }else{
                console.log(chosenCandidate)
                db.push({firstName,secondName,idNumber,county,zip,vote:chosenCandidate})
                $('button')
                .text('Voted')
                .css('background-color','green')

                if(chosenCandidate === 'Uhuru'){
                   updateVote('#u')
                }else if(chosenCandidate === 'Rao'){
                    updateVote('#r')
                 }else if(chosenCandidate === 'Kalembe'){
                    updateVote('#k')
                 }else{
                    updateVote('#m')
                 }
            }

            
        })

       const  updateVote = (element) => {
        const p =  $(element)
        const newValue = parseInt(p.text()) + 1
        p.text(newValue)
       }


})
$(document).ready(function(){
  $("#vote").click(function(){
      alert("Thankyou "+name+" for voting")
  })
});
