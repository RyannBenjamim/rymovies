export default function useUseful() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        })
    }

    const brasilFormatData = (data) => {
        if (data === undefined) return 'Indefinido'
        
        const dataObject = new Date(data);
        let day = dataObject.getDate() + 1;
        let month = dataObject.getMonth() + 1;
        const year = dataObject.getFullYear();
      
        day = day < 10 ? '0' + day : day;
        month = month < 10 ? '0' + month : month;
      
        return `${day}/${month}/${year}`
    }

    return { scrollToTop, brasilFormatData }
}