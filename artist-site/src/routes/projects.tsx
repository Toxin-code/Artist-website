import { createFileRoute } from '@tanstack/react-router'
import { GalleryPage } from '../pages/gallery-page'

export const Route = createFileRoute('/projects')({
    component: GalleryPage,
})