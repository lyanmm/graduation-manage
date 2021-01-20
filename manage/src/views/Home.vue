<template>
  <div class="layout">
    <Layout>
      <Header :style="{position: 'fixed', width: '100%'}">
        <div class="layout-logo">后台数据管理系统</div>
        <div class="layout-logout" @click="handleLogout">注销
          <Icon type="ios-arrow-forward"/>
        </div>
      </Header>
      <Layout>
        <Sider hide-trigger
               :style="{position: 'fixed',marginTop:'64px', height: '100vh', left: 0, overflow: 'auto',background: '#fff'}">
          <Menu theme="light" width="auto" active-name="1-1">
            <MenuGroup title="全部">
              <MenuItem name="1-1" to="/home/summary">
                <Icon type="ios-analytics"/>
                主控台
              </MenuItem>
            </MenuGroup>
            <MenuGroup title="设备">
              <MenuItem name="2-1" to="/home/checkDevice">
                <Icon type="ios-search"/>
                查看设备
              </MenuItem>
              <MenuItem name="2-2">
                <Icon type="ios-construct"/>
                管理设备
              </MenuItem>
              <MenuItem name="2-3">
                <Icon type="ios-map"/>
                查看设备地图
              </MenuItem>
            </MenuGroup>
            <MenuGroup title="用户">
              <MenuItem name="3-1">
                <Icon type="ios-search"/>
                查看用户
              </MenuItem>
              <MenuItem name="3-2">
                <Icon type="ios-people"/>
                管理用户
              </MenuItem>
            </MenuGroup>
            <MenuGroup title="货物">
              <MenuItem name="4-1">
                <Icon type="ios-search"/>
                查看货物
              </MenuItem>
              <MenuItem name="4-2">
                <Icon type="logo-dropbox"/>
                管理货物
              </MenuItem>
            </MenuGroup>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Content class="layout-content" :style="{ minHeight: '400px'}">
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import {logout} from "@/http/log";

export default {
  name: "Home",
  methods: {
    handleLogout() {
      // const token = sessionStorage.getItem('token');
      // logout();
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.layout-logo {
  position: relative;
  font-size: 22px;
  color: #fff;
}

.layout-logout {
  position: absolute;
  right: 40px;
  top: 0;
  font-size: 15px;
  color: #fff;
  cursor: pointer;
}

.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}

.layout-content {
  height: calc(100vh - 114px);
  margin-left: 200px;
  margin-top: 88px;
}
</style>