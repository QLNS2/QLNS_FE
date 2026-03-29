import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import checkLogin from "./checkLogin";

const routes = [
  // Public career portal routes (no login)
  {
    path: "/career",
    component: () => import("../components/Public/CareerPortal/index.vue"),
  },
  {
    path: "/career/:id",
    component: () => import("../components/Public/CareerPortal/JobDetail.vue"),
  },
  {
    path: "/",
    component: () => import("../layout/wrapper/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/dang-nhap",
    component: () => import("../components/Admin/DangNhap/index.vue"),
    meta: { layout: "blank" },
  },
  {
    path: "/admin/profile",
    component: () => import("../components/Admin/Profile/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/vi-tri-tuyen-dung",
    component: () => import("../components/Admin/ViTriTuyenDung/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/ung-vien",
    component: () => import("../components/Admin/UngVien/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/ho-so-ung-tuyen",
    component: () => import("../components/Admin/HoSoUngTuyen/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/nhan-vien",
    component: () => import("../components/Admin/NhanVien/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/chuc-vu",
    component: () => import("../components/Admin/ChucVu/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/quy-dinh-cho-diem",
    component: () => import("../components/Admin/QuyDinhChoDiem/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/tieu-chi-kpi",
    component: () => import("../components/Admin/TieuChiKpi/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/phong-ban",
    component: () => import("../components/Admin/PhongBan/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/chi-tiet-hop-dong",
    component: () => import("../components/Admin/ChiTietHopDong/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/loai-hop-dong",
    component: () => import("../components/Admin/LoaiHopDong/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/cham-cong",
    component: () => import("../components/Admin/ChamCong/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/luong",
    component: () => import("../components/Admin/Luong/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/luong-theo-thang",
    component: () => import("../components/Admin/LuongTheoThang/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/kpi-nhan-vien",
    component: () => import("../components/Admin/KPINhanVien/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/thuong-va-phat",
    component: () => import("../components/Admin/ThuongVaPhat/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/thong-ke-ca-cham-cong",
    component: () =>
      import("../components/Admin/ThongKe/ThongKeCaChamCong/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/thong-ke-diem-kpi-nhan-vien",
    component: () =>
      import("../components/Admin/ThongKe/ThongKeDiemKPINhanVien/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/thong-ke-diem-phat",
    component: () =>
      import("../components/Admin/ThongKe/ThongKeDiemPhat/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/thong-ke-diem-thuong",
    component: () =>
      import("../components/Admin/ThongKe/ThongKeDiemThuong/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/chat",
    component: () =>
      import("../components/Admin/Chat/index.vue"),
    beforeEnter: checkLogin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router