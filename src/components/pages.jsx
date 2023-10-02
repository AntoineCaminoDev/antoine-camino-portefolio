
export default function Example({ activerMachine},objectClicked) {



  const projetClick=(objectClicked)=>{
    
    activerMachine(objectClicked)
   
  }

  return (

    <div >

      <main className="level02Back">

        <div>

          <button> exit </button>

        </div>

        <div>

          <h3> Projet React </h3>

          <div>

            <div onClick={() => projetClick("projet1")} className="p1"> projet 1 </div>

            <div onClick={() => projetClick("projet2")} className="p1"> projet 2 </div>

            <div onClick={() => projetClick("projet3")} className="p1"> projet 3 </div>

          </div>


        </div>


        <div>

<h3> Projet Wordpress </h3>

<div>
  <div> projet 1 </div>

  <div> projet 2 </div>

  <div> projet 3 </div>

</div>


</div>



      </main>

    </div>
  )
}