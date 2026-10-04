import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  SafeAreaView, 
  TouchableOpacity 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Import trực tiếp các icon qua path file riêng
import MyProfileIcon from '../components/myProfile/MyProfileIcon';
import SettingsIcon from '../components/myProfile/SettingsIcon';
import SupportIcon from '../components/myProfile/SupportIcon';
import FaqIcon from '../components/myProfile/FaqIcon';
import AdminIcon from '../components/myProfile/AdminIcon';
import LogoutIcon from '../components/myProfile/LogoutIcon';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Phần ảnh bìa và Avatar */}
        <View style={styles.headerContainer}>
          <View style={styles.coverBackground} />
          
          <View style={styles.avatarWrapper}>
            <View style={styles.avatarContainer}>
              <Text style={styles.avatarText}>HI</Text>
            </View>
            <View style={styles.cameraIconContainer}>
              <Ionicons name="camera" size={14} color="#fff" />
            </View>
          </View>
        </View>

        {/* Thông tin cá nhân */}
        <View style={styles.userInfoContainer}>
          <Text style={styles.userName}>VIP</Text>
          <Text style={styles.userRole}>(SE)</Text>
        </View>

        {/* Danh sách các tùy chọn menu */}
        <View style={styles.menuList}>
          {/* My Profile */}
          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <View style={styles.menuLeft}>
              <View style={styles.iconWrapper}>
                <MyProfileIcon size={20} color="#1e88e5" />
              </View>
              <Text style={styles.menuText}>My Profile</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#ccc" />
          </TouchableOpacity>

          {/* Settings */}
          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <View style={styles.menuLeft}>
              <View style={styles.iconWrapper}>
                <SettingsIcon size={20} color="#1e88e5" />
              </View>
              <Text style={styles.menuText}>Settings</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#ccc" />
          </TouchableOpacity>

          {/* Support */}
          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <View style={styles.menuLeft}>
              <View style={styles.iconWrapper}>
                <SupportIcon size={20} color="#1e88e5" />
              </View>
              <Text style={styles.menuText}>Support</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#ccc" />
          </TouchableOpacity>

          {/* FAQ */}
          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <View style={styles.menuLeft}>
              <View style={styles.iconWrapper}>
                <FaqIcon size={20} color="#1e88e5" />
              </View>
              <Text style={styles.menuText}>FAQ</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#ccc" />
          </TouchableOpacity>

          {/* Admin */}
          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <View style={styles.menuLeft}>
              <View style={styles.iconWrapper}>
                <AdminIcon size={20} color="#1e88e5" />
              </View>
              <Text style={styles.menuText}>Admin</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#ccc" />
          </TouchableOpacity>

          {/* Logout */}
          <TouchableOpacity style={[styles.menuItem, styles.logoutItem]} activeOpacity={0.7}>
            <View style={styles.menuLeft}>
              <View style={styles.iconWrapper}>
                <LogoutIcon size={20} color="#1e88e5" />
              </View>
              <Text style={styles.menuText}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Thông tin phiên bản */}
        <View style={styles.footerContainer}>
          <Text style={styles.versionText}>myFPT Version 5.9.10</Text>
          <Text style={styles.copyrightText}>Copyright @ FPT Software 2021</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'center',
    position: 'relative',
    marginBottom: 45,
  },
  coverBackground: {
    width: '100%',
    height: 130,
    backgroundColor: '#2196f3',
  },
  avatarWrapper: {
    position: 'absolute',
    bottom: -35,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e3f2fd',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#fff',
  },
  avatarText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1e88e5',
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#757575',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  userInfoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  userRole: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  menuList: {
    borderTopWidth: 1,
    borderTopColor: '#f1f2f6',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f2f6',
  },
  logoutItem: {
    borderBottomWidth: 0,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 24,
    alignItems: 'center',
    marginRight: 15,
  },
  menuText: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
  },
  footerContainer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  versionText: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  copyrightText: {
    fontSize: 11,
    color: '#aaa',
  },
});