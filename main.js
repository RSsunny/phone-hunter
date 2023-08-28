const loadPhone=async(phoneName='a',isShowAll)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/phones?search=${phoneName}`)
    const data=await res.json()
    displayPhone(data.data,isShowAll)
}
loadPhone()
const displayPhone=(phones,isShowAll)=>{
    const phoneContainer=document.getElementById('phone-container')
    phoneContainer.textContent=''
    const moreBtn=document.getElementById('more-btn')
    if(phones.length>12&&!isShowAll){
        moreBtn.classList.remove('hidden')
    }else{moreBtn.classList.add('hidden')}
    if(!isShowAll){
        phones=phones.slice(0,12)
    }
   phones.forEach(phone=>{
    
    const div=document.createElement('div')
    div.classList=`card bg-gray-400 text-black`
    div.innerHTML=`
    <figure class=" pt-5">
    <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
    </figure>
     <div class="card-body py-4 items-center text-center">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>There are many variations of passages of available, but the majority have suffered</p>
    <div class="card-actions">
      <button onclick="showModal('${phone.slug}')" class="btn btn-primary">Show deatils</button>
        </div>
     </div>
    `
    phoneContainer.appendChild(div)
   })
   loding(false)
}
const handelSearch=(isShowAll)=>{
    loding(true)
    const inputFild=document.getElementById('input-fild')
    const inputValue=inputFild.value
    loadPhone(inputValue,isShowAll)
}
const loadHandel=(isShowAll)=>{
    handelSearch(true)
}
const loding=(isloding)=>{
    const showLodar=document.getElementById('lodar-spen')
    if(isloding){
        showLodar.classList.remove('hidden')
    }else{
        showLodar.classList.add('hidden')
    }
}
loadPhone('a')
const showModal=async(id)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data=await res.json()
    loadDatadetails(data)   
}
const loadDatadetails=(data)=>{
    load_Modal.showModal()
    const detailsdata=data.data
    const modalContainer=document.getElementById('modal-Container')
    modalContainer.innerHTML=`
    <div class="flex justify-center"><img src="${detailsdata.image}" class="w-3/4 position-center p-5" alt=""></div>
    <h2>${detailsdata.name}</h2>
    
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
    <p><span>Strage :</span>${detailsdata.mainFeatures?.storage}</p>
    <p><span>Display Size :</span>${detailsdata.mainFeatures?.displaySize}</p>
    <p><span>Chipset : </span>${detailsdata.mainFeatures?.chipSet}</p>
    <p><span>Memory : </span>${detailsdata.mainFeatures?.memory}</p>
    <p><span>Slug :</span>${detailsdata.slug}</p>
    <p><span>Release data :</span>${detailsdata.releaseDate}</p>
    <p><span>Brand :</span>${detailsdata.brand}</p>
    <p><span>GPS :</span>${detailsdata.others? detailsdata.others.GPS:'not GPS avaleable'}</p>
    `
    
}
