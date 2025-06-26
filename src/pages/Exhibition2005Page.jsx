
import { useState } from 'react';
import Carousel from "../components/Carousel";
import ImageModal from "../components/ImageModal";

// Image data for this exhibition
const exhibition2005Images = [
    { id: 1.1, src: '2005_exhibition/wall_1/barreerreef008.jpg', alt: 'Barrier Reef' },
    { id: 1.2, src: '2005_exhibition/wall_1/freespirit004.jpg', alt: 'Free Spirit' },
    { id: 1.3, src: '2005_exhibition/wall_1/frienlypelican002.jpg', alt: 'Friendly Pelican' },
    { id: 1.4, src: '2005_exhibition/wall_1/rebland001.jpg', alt: 'Rebland' },
    { id: 1.5, src: '2005_exhibition/wall_1/stimmungen005.jpg', alt: 'Stimmungen' },
    { id: 1.6, src: '2005_exhibition/wall_1/waratah009.jpg', alt: 'Waratah' },

    { id: 2.1, src: '2005_exhibition/wall_2/bluemountains007.jpg', alt: 'Blue Mountains' },
    { id: 2.2, src: '2005_exhibition/wall_2/butterfly016.jpg', alt: 'Butterfly' },
    { id: 2.3, src: '2005_exhibition/wall_2/comfort017.jpg', alt: 'Comfort' },
    { id: 2.4, src: '2005_exhibition/wall_2/family018.jpg', alt: 'Family' },
    { id: 2.5, src: '2005_exhibition/wall_2/father022.jpg', alt: 'Father' },
    { id: 2.6, src: '2005_exhibition/wall_2/harmony013.jpg', alt: 'Harmony' },

    { id: 3.1, src: '2005_exhibition/wall_3/australianfauna003.jpg', alt: 'Australian Fauna' },
    { id: 3.2, src: '2005_exhibition/wall_3/kangaroo019.jpg', alt: 'Kangaroo' },
    { id: 3.3, src: '2005_exhibition/wall_3/newlife021.jpg', alt: 'New Life' },
    { id: 3.4, src: '2005_exhibition/wall_3/selfportret006.jpg', alt: 'Self Portret' },
    { id: 3.5, src: '2005_exhibition/wall_3/stimmungen026.jpg', alt: 'Stimmungen' },
    { id: 3.6, src: '2005_exhibition/wall_3/uluru012.jpg', alt: 'Uluru' },
    
];


export default function Exhibition2005Page() {
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
        setSelectedImage(exhibition2005Images[newIndex]);
    };
    return (

        <div className="flex flex-col gap-2 h-full w-full items-center font-mono overflow-x-hidden sm:gap-6">
            <h1 className="w-[60vw] mt-14 text-xl text-center sm:text-4xl sm:mt-5">Willkommen zu meiner Ausstellung aus dem Jahr 2005</h1>

            <p className="font-sans">Click on any image to view it in full screen</p>

            <Carousel
                images={exhibition2005Images}
                onImageClick={handleImageClick}
                autoplay={true}
                showNavigation={true}
                showPagination={true} />
            <ImageModal
                isOpen={modalOpen}
                onClose={handleCloseModal}
                image={selectedImage}
                images={exhibition2005Images}
                currentIndex={currentImageIndex}
                onNavigate={handleNavigateModal} />
        </div>
    )
}