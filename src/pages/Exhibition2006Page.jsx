
import { useState } from 'react';
import Carousel from "../components/Carousel";
import ImageModal from "../components/ImageModal";

// Image data for this exhibition
const exhibition2006Images = [
    { id: 1.1, src: '2006_exhibition/wall_1/CA3YE5ZZ.jpg', alt: 'CA3YE5ZZ' },
    { id: 1.2, src: '2006_exhibition/wall_1/CA7MA9NJ.jpg', alt: 'CA7MA9NJ' },
    { id: 1.3, src: '2006_exhibition/wall_1/CA8T0TGF.jpg', alt: 'CA8T0TGF' },
    { id: 1.4, src: '2006_exhibition/wall_1/CA9WKZX1.jpg', alt: 'CA9WKZX1' },
    { id: 1.5, src: '2006_exhibition/wall_1/CACP8H8F.jpg', alt: 'CACP8H8F' },
    { id: 1.6, src: '2006_exhibition/wall_1/CAYZ8TMZ.jpg', alt: 'CAYZ8TMZ' },

    { id: 2.1, src: '2006_exhibition/wall_2/CA2NOD63.jpg', alt: 'CA2NOD63' },
    { id: 2.2, src: '2006_exhibition/wall_2/CA7MY1R7.jpg', alt: 'CA7MY1R7' },
    { id: 2.3, src: '2006_exhibition/wall_2/CA23AJMX.jpg', alt: 'CA23AJMX' },
    { id: 2.4, src: '2006_exhibition/wall_2/CADOMHTR.jpg', alt: 'CADOMHTR' },
    { id: 2.5, src: '2006_exhibition/wall_2/CAJYMLZV.jpg', alt: 'CAJYMLZV' },
    { id: 2.6, src: '2006_exhibition/wall_2/CAXK8NLP.jpg', alt: 'CAXK8NLP' },

    { id: 3.1, src: '2006_exhibition/wall_3/CA3AEPRV.jpg', alt: 'CA3AEPRV' },
    { id: 3.2, src: '2006_exhibition/wall_3/CABYILBB.jpg', alt: 'CABYILBB' },
    { id: 3.3, src: '2006_exhibition/wall_3/CADCM9PR.jpg', alt: 'CADCM9PR' },
    { id: 3.4, src: '2006_exhibition/wall_3/CAJIA1VF.jpg', alt: 'CAJIA1VF' },
    { id: 3.5, src: '2006_exhibition/wall_3/CAL8EXDV.jpg', alt: 'CAL8EXDV' },
    { id: 3.6, src: '2006_exhibition/wall_3/CAP0GB5L.jpg', alt: 'CAP0GB5L' },

    { id: 4.1, src: '2006_exhibition/wall_4/birds014.jpg', alt: 'birds014' },
    { id: 4.2, src: '2006_exhibition/wall_4/CAOHYBCT.jpg', alt: 'CAOHYBCT' },
    { id: 4.3, src: '2006_exhibition/wall_4/CAR6GBFT.jpg', alt: 'CAR6GBFT' },
];



export default function Exhibition2006Page() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleImageClick = (image, index) => {
        setSelectedImage(image);
        setCurrentImageIndex(index);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedImage(null);
    };

    const handleNavigateModal = (newIndex) => {
        setCurrentImageIndex(newIndex);
        setSelectedImage(exhibition2006Images[newIndex]);
    };
    return (

        <div className="flex flex-col gap-2 h-full w-full items-center font-mono overflow-x-hidden">
            <h1 className="w-[60vw] mt-14 text-xl text-center sm:text-4xl sm:mt-5">Willkommen zu meiner Ausstellung aus dem Jahr 2006</h1>

            <p className="font-sans">Click on any image to view it in full screen</p>

            <Carousel
                images={exhibition2006Images}
                onImageClick={handleImageClick}
                autoplay={true}
                showNavigation={true}
                showPagination={true} />
            <ImageModal
                isOpen={modalOpen}
                onClose={handleCloseModal}
                image={selectedImage}
                images={exhibition2006Images}
                currentIndex={currentImageIndex}
                onNavigate={handleNavigateModal} />
        </div>
    )
}