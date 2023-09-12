

const Card = () => {
  const swipers = [
    {
      id: 1,
      image: 'Vector',
      title: 'برمجة التطبقيات',
      content: 'تصميم جذاب , يدعم جميع الاجهزة الاندرويد و الايفون بكل الاصدارات ، حق تملك كامل ل السورس كود, دعم ٢٤ ساعة'
    },
    {
      id: 2,
      image: 'Vector',
      title: 'برمجة التطبقيات',
      content: 'تصميم جذاب , يدعم جميع الاجهزة الاندرويد و الايفون بكل الاصدارات ، حق تملك كامل ل السورس كود, دعم ٢٤ ساعة'
    },
    {
      id: 3,
      image: 'Vector',
      title: 'برمجة التطبقيات',
      content: 'تصميم جذاب , يدعم جميع الاجهزة الاندرويد و الايفون بكل الاصدارات ، حق تملك كامل ل السورس كود, دعم ٢٤ ساعة'
    },
    {
      id: 4,
      image: 'Vector',
      title: 'برمجة التطبقيات',
      content: 'تصميم جذاب , يدعم جميع الاجهزة الاندرويد و الايفون بكل الاصدارات ، حق تملك كامل ل السورس كود, دعم ٢٤ ساعة'
    },
    {
      id: 5,
      image: 'Vector',
      title: 'برمجة التطبقيات',
      content: 'تصميم جذاب , يدعم جميع الاجهزة الاندرويد و الايفون بكل الاصدارات ، حق تملك كامل ل السورس كود, دعم ٢٤ ساعة'
    },
    {
      id: 6,
      image: 'Vector',
      title: 'برمجة التطبقيات',
      content: 'تصميم جذاب , يدعم جميع الاجهزة الاندرويد و الايفون بكل الاصدارات ، حق تملك كامل ل السورس كود, دعم ٢٤ ساعة'
    },

  ]
  return (
    <>
    {swipers.map((item ,index)=>{
      return(

      <div key={index} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div key={item.id} className="flex flex-col items-center pb-10">
          <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={item.image} alt="Bonnie image" />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.title}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.content}</p>
        </div>
      </div>
      )
    })}
    </>
  )
}

export default Card