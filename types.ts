
export interface Course {
  id: string;
  title: string;
  price: number;
  image: string;
  content: string[];
  description: string;
}

export interface Student {
  id: string;
  name: string;
  grade: string;
  track: 'general' | 'azhar';
  studentPhone: string;
  parentPhone: string;
  registeredAt: string;
}

export interface DiscountCode {
  id: string;
  code: string;
  percentage: number;
  isActive: boolean;
}

export enum View {
  HOME = 'home',
  AUTH = 'auth',
  COURSE_DETAILS = 'course-details',
  DASHBOARD = 'dashboard'
}

export enum DashTab {
  CONTENT = 'content',
  STUDENTS = 'students',
  CODES = 'codes'
}
