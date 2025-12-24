/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
// 1. Import hàm lấy dữ liệu và UI Component
import { getSeoBlocksByServiceSlug } from '../../lib/get-seo-blocks';
import SeoBlockSection from '../components/SeoBlockSection';
import { log } from 'console';

export default async function Page1() {

    
    const seoBlocks = await getSeoBlocksByServiceSlug('hello , tesst'); 
    console.log(seoBlocks);
  return (
    <main className="container mx-auto p-10">
      {/* --- PHẦN CODE CŨ (ĐANG FIX CỨNG) CỦA BẠN --- */}
      <h1 className="text-4xl font-bold">Dịch vụ Thiết kế Website</h1>
      <p>Chúng tôi cung cấp dịch vụ web chuyên nghiệp...</p>
      {/* ... các nội dung cũ giữ nguyên ... */}


      {/* --- PHẦN THÊM MỚI: CHÈN SEO BLOCK VÀO CUỐI --- */}
      <SeoBlockSection blocks={seoBlocks} />
      
    </main>
  )
}
