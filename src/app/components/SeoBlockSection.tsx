import React from 'react';

// Định nghĩa kiểu dữ liệu đầu vào
interface SeoArticle {
  title: string;
  slug: string;
  content: string;
  status: string;
  tags?: string[];
}

export default function SeoBlockSection({ blocks }: { blocks: SeoArticle[] }) {
  // Nếu không có bài viết nào thì ẩn luôn section này cho gọn
  if (!blocks || blocks.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Kiến thức chuyên sâu</h2>
      
      <div className="grid gap-6">
        {blocks.map((article, index) => (
          <article key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-blue-700 mb-3">{article.title}</h3>
            
            {/* Render nội dung HTML từ Directus */}
            <div 
              className="prose max-w-none text-gray-600"
              dangerouslySetInnerHTML={{ __html: article.content }} 
            />
          </article>
        ))}
      </div>
    </section>
  );
}