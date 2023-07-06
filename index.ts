import { ChangeEvent, useState } from 'react';

export const useImageUploader = () => {
    const [image, setImage] = useState<string | null>(null);

    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const file = e.target.files?.[0];
        if (!file) return;
        if (!file.type.includes('image')) return alert('Please upload an image file');
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const result = reader.result as string;
            setImage(result);
        };
    };

    return {
        image,
        handleChangeImage,
    };
};
