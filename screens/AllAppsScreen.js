import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import PayslipIcon from '../components/PayslipsIcon';
import DatingIcon from '../components/DatingIcon';

// Ảnh PNG đang nằm ở THƯ MỤC GỐC của project, còn file này nằm ở screens/
// → phải đi lùi 1 cấp bằng '../'
// (Nếu sau này chuyển vào assets/icons/ thì đổi thành '../assets/icons/...')
const IMG = {
  approveNow: require('../assets/icons/approve_now.png'),
  reward: require('../assets/icons/reward.png'),
  discipline: require('../assets/icons/discipline.png'),
  myTasks: require('../assets/icons/icon_my_tasks_v2.png'),
  fptCare: require('../assets/icons/fpt_care.png'),
  events: require('../assets/icons/events.png'),
  survey: require('../assets/icons/survey.png'),
  birthday: require('../assets/icons/birthday.png'),
  news: require('../assets/icons/news.png'),
  starAve: require('../assets/icons/star_ave.png'),
  employeeInfo: require('../assets/icons/employee_info.png'),
  game: require('../assets/icons/game.png'),
};

const ICON_LIBS = { Ionicons, MaterialIcons, FontAwesome5 };

const SECTIONS = [
  {
    title: 'WORK',
    items: [
      {
        title: 'Approve Now',
        description:
          'Notify managers of pending requests and allow managers to approve/reject requests from internal tools',
        bg: '#e3f2fd',
        image: IMG.approveNow,
      },
      {
        title: 'Reward',
        description:
          'Send colleagues a thank you note or reward Gold for exceptional contribution',
        bg: '#e8f5e9',
        image: IMG.reward,
      },
      {
        title: 'Discipline',
        description:
          'Send a discipline warning to subordinates for violation of codes of conduct',
        bg: '#ede7f6',
        image: IMG.discipline,
      },
      {
        // ⚠️ chưa có PNG — tạm dùng icon expo
        title: 'Learning',
        description:
          'View a list of mandatory, registered and suggested learning courses; check-in and send feedback for each course',
        bg: '#e3f2fd',
        icon: { lib: 'Ionicons', name: 'school', color: '#1e88e5' },
      },
      {
        title: 'My Tasks',
        bg: '#e8f4fd',
        image: IMG.myTasks,
      },
    ],
  },
  {
    title: 'UTILITIES',
    items: [
      {
        title: 'FPT Care',
        description: 'FPT Care',
        bg: '#e3f2fd',
        image: IMG.fptCare,
      },
      {
        title: 'Events',
        description:
          'Register, check-in, check-out, send feedback to company events and programs',
        bg: '#fff3e0',
        image: IMG.events,
      },
      {
        title: 'Survey',
        description:
          'Conduct and collect responses for company-wide or department-wide surveys',
        bg: '#e3f2fd',
        image: IMG.survey,
      },
      {
        title: 'FPT Dating',
        description: 'Dating feature.',
        bg: '#dfe8f5', // ← trùng màu nền tròn của icon → icon tự hòa vào khung tròn 44px
        CustomIcon: DatingIcon,
      },
      {
        // chưa có PNG — dùng icon đã convert từ XML
        title: 'Payslip',
        description: 'Payslip',
        bg: '#e3f2fd',
        CustomIcon: PayslipIcon,
      },
      {
        title: 'Birthday',
        description:
          "Your birthday is a special moment. We're very happy to send the best wishes for you. Colleagues can send you birthday wishes on myFPT.",
        bg: '#e3f2fd',
        image: IMG.birthday,
      },
    ],
  },
  {
    title: 'NEWS',
    items: [
      {
        title: 'News',
        description:
          'A collection of latest news and notable events around the company',
        bg: '#e3f2fd',
        image: IMG.news,
      },
      {
        title: 'Star Ave',
        description:
          'Recognise notable achievements within a business unit or within FPT',
        bg: '#fff3e0',
        image: IMG.starAve,
      },
    ],
  },
  {
    title: 'WIKI',
    items: [
      {
        title: 'Employee Info',
        description:
          'Basic, non-confidential employee information (name, gender, department, etc.)',
        bg: '#e3f2fd',
        image: IMG.employeeInfo,
      },
    ],
  },
  {
    title: 'GAME',
    items: [
      {
        title: 'Game',
        description: 'Community-engaging games with Gold as rewards',
        bg: '#ede7f6',
        image: IMG.game,
      },
    ],
  },
];

// Thứ tự ưu tiên: PNG → icon tự convert (SVG) → icon expo (fallback)
function ItemIcon({ item }) {
  if (item.image) {
    return (
      <Image
        source={item.image}
        style={{ width: 30, height: 30 }}
        resizeMode="contain"
      />
    );
  }
  if (item.CustomIcon) {
    const Custom = item.CustomIcon;
    return <Custom />;
  }
  const Lib = ICON_LIBS[item.icon.lib];
  return <Lib name={item.icon.name} size={20} color={item.icon.color} />;
}

export default function AllAppsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Search & Grid Icon */}
      <View style={styles.header}>
        <View style={styles.searchBox}>
          <Ionicons
            name="search"
            size={18}
            color="#888"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Type feature's name"
            placeholderTextColor="#888"
            style={styles.input}
          />
        </View>
        <TouchableOpacity style={styles.gridButton}>
          <Ionicons name="grid-outline" size={22} color="#444" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.screenTitle}>All Apps</Text>

        {SECTIONS.map((section) => (
          <View key={section.title}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitleText}>{section.title}</Text>
            </View>

            {section.items.map((item) => (
              <View key={item.title} style={styles.appItem}>
                <View
                  style={[styles.iconContainer, { backgroundColor: item.bg }]}>
                  <ItemIcon item={item} />
                </View>
                <View style={styles.appContent}>
                  <Text style={styles.appTitle}>{item.title}</Text>
                  {item.description ? (
                    <Text style={styles.appDescription} numberOfLines={3}>
                      {item.description}
                    </Text>
                  ) : null}
                </View>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f1f2f6',
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 40,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  gridButton: {
    marginLeft: 12,
  },
  screenTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginVertical: 12,
    color: '#000',
  },
  sectionHeader: {
    backgroundColor: '#f1f2f6',
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  sectionTitleText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#666',
  },
  appItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f2f6',
    alignItems: 'flex-start',
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  appContent: {
    flex: 1,
    justifyContent: 'center',
  },
  appTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
  },
  appDescription: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
});
