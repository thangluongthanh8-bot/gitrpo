import { directus } from '@/lib/directus';
import { readItems } from '@directus/sdk';

// Hàm này nhận vào "slug" của dịch vụ và trả về danh sách bài SEO tương ứng
export async function getSeoBlocksByServiceSlug(slug: string) {
  try {
    const result = await directus.request(
      readItems('services', {
        filter: {
          slug: { _eq: slug }, // Lọc đúng dịch vụ theo slug
        },
        fields: [
          // Chỉ lấy phần seo_blocks, không cần lấy name/description vì page bạn đã có rồi
          {
            seo_blocks: ['title', 'content', 'status', 'slug'],
            Sd: true,
            name: true

          }
        ],
        deep: {
          seo_blocks: {
            _filter: { status: { _eq: 'published' } } // Chỉ lấy bài đã public
          }
        },
        limit: 1,
      })
    );
    console.log(result,"result");
    
    // Trả về mảng các bài viết (hoặc mảng rỗng nếu không tìm thấy)
    return result[0]?.seo_blocks || [];
  } catch (error) {
    console.error(`Lỗi lấy SEO blocks cho dịch vụ ${slug}:`, error);
    return [];
  }
}