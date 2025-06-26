
import { useState } from 'react';
import Carousel from "../components/Carousel";
import ImageModal from "../components/ImageModal";

// Image data for this exhibition
const exhibition2007Images = [
    { id: 1, src: 'new_2007/Celebration.jpg', alt: 'Celebration' },
    { id: 2, src: 'new_2007/DAncingBirds.jpg', alt: 'Dancing Birds' },
    { id: 3, src: 'new_2007/Journey.jpg', alt: 'Journey' },
    { id: 4, src: 'new_2007/lovers.jpg', alt: 'Lovers' },
    { id: 5, src: 'new_2007/moment.jpg', alt: 'Moment' },

];



export default function Paintings2007Page() {
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
        setSelectedImage(exhibition2007Images[newIndex]);
    };
    return (

        <div className="flex flex-col gap-2 h-full w-full items-center font-mono overflow-x-hidden">
            <h1 className="w-[60vw] mt-14 text-xl text-center sm:text-4xl sm:mt-5">New paintings from 2007</h1>

            <p className="font-sans">Click on any image to view it in full screen</p>

            <Carousel
                images={exhibition2007Images}
                onImageClick={handleImageClick}
                autoplay={true}
                showNavigation={true}
                showPagination={true} />
            <ImageModal
                isOpen={modalOpen}
                onClose={handleCloseModal}
                image={selectedImage}
                images={exhibition2007Images}
                currentIndex={currentImageIndex}
                onNavigate={handleNavigateModal} />
        </div>
    )
}