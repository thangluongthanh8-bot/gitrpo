import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Chào mừng đến với trang chủ</h1>
      <p>
        Dự án của bạn đang sử dụng Next.js App Router. Việc định tuyến được xử lý bằng hệ thống tệp trong thư mục `app`.
      </p>
      <p>
        Bạn không cần sử dụng `react-router-dom` (BrowserRouter, Routes, Route).
      </p>
      <p>
        Để điều hướng giữa các trang, hãy sử dụng component `Link` từ `next/link`.
      </p>
      <nav>
        <ul>
          <li>
            <Link href="/pg1">Đến Trang Dịch Vụ 1</Link>
          </li>
          <li>
            <Link href="/pg2">Đến Trang Dịch Vụ 2</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

