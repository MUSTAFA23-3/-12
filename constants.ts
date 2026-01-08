
import { Course, Student, DiscountCode } from './types';

export const INITIAL_COURSES: Course[] = [
  {
    id: '1',
    title: 'الدعامة والحركة في الكائنات الحية',
    price: 150,
    image: 'https://picsum.photos/seed/biology1/800/600',
    description: 'شرح مفصل للدعامة في النبات والإنسان مع حل مئات الأسئلة بنظام الاوبن بوك.',
    content: ['مقدمة الدعامة في النبات', 'الهيكل العظمي المحوري', 'الهيكل العظمي الطرفي', 'الغضاريف والمفاصل', 'الانقباض العضلي']
  },
  {
    id: '2',
    title: 'الهرمونات والتنسيق الهرموني',
    price: 120,
    image: 'https://picsum.photos/seed/biology2/800/600',
    description: 'رحلة داخل الغدد الصماء في جسم الإنسان وكيفية التحكم في الوظائف الحيوية.',
    content: ['الغدة النخامية', 'الغدة الدرقية', 'البنكرياس وغدد القناة الهضمية', 'الأدرينالين وهرمونات التوتر']
  },
  {
    id: '3',
    title: 'أساسيات الجيولوجيا وعلم الأرض',
    price: 180,
    image: 'https://picsum.photos/seed/geo1/800/600',
    description: 'فهم مكونات كوكب الأرض وتاريخ الحياة من خلال السجل الجيولوجي.',
    content: ['مكونات كوكب الأرض', 'التراكيب الجيولوجية', 'السجل الجيولوجي', 'المعادن والبلورات']
  }
];

export const MOCK_STUDENTS: Student[] = [
  {
    id: 's1',
    name: 'أحمد محمود علي',
    grade: 'الصف الثالث الثانوي',
    track: 'general',
    studentPhone: '01012345678',
    parentPhone: '01298765432',
    registeredAt: '2024-05-15'
  },
  {
    id: 's2',
    name: 'سارة محمد حسن',
    grade: 'الصف الثالث الثانوي',
    track: 'azhar',
    studentPhone: '01155443322',
    parentPhone: '01566778899',
    registeredAt: '2024-05-16'
  }
];

export const MOCK_CODES: DiscountCode[] = [
  { id: 'c1', code: 'ZAYED20', percentage: 20, isActive: true },
  { id: 'c2', code: 'SUPER50', percentage: 50, isActive: true }
];
