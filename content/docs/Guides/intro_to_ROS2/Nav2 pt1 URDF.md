---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-19T09:18:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-19T09:18:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide: [https://docs.nav2.org/setup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

---

This part of the guide goes over [Nav2](https://docs.nav2.org/index.html) which is a package in ROS that provides autonomous navigation.

In this guide we will build a simple differential drive (tank drive) robot

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLFKWASG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBq44FSKhFzrdfEm370SsPG9MAaVUijH39xl1oIWegxFAiBXgzldgOcRGYkh3e8dRYXqvmfaRSEN6cN%2Bd5nqkKHAfiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj5JiU9CqI0MsQ%2FIHKtwDph3atsZ1%2FKWYoPb3wFTQNYEfca4%2BbkD0E5EnHA5W8fqdyZkl1%2FiPqst8vxMo9wLujG93BOzUAUMZQ9Q%2BFAVHc3g8EtpxxzCmSZeRNkReGBRBY7raw4Pg8fJ6AJ5axA1kxrDCK%2BYamUiZJ%2FAuiKybOZ4C7w4G95FFKOTdZt%2B5FoTXlXuIfkgvU38K%2BShKCqKF6M%2BZsC7MamsUNV3bqCMW7ZJAnSOF1NM4b%2F9VlI6rCp%2FsoMHp4HTsNlzUn40Jd5mEp7ZnBacqrNZbRh0sSdo2BTv4MpCtp1CjNB8ZC6Ohs%2BD%2F2In76hJxfeHp6TgirGNSq%2F4CzIU4X9zslTJ%2FT%2B6MXgWahl2OkiAquURroSFy36EWwJCU%2F2%2FT6DGZMuRM61yX9SJ1prFQ2XvwcGwR%2BbthdADCIYnwBnaRH1FNfP14FauR4GhDuWZONMDarCDKDF23ZmtK%2FvaFgwon9LNVJTCKd7pUQJWubKO%2BF95GEp0EJUpZfnbBjgZPviV5M0M0vfGTfCkeWE%2BHBfPAgKmmXWtAXeMk04kk9NcnPsaR4w3jIkm%2BwZWmfT2BX2%2F%2B5VxOGwphJADgi6uwOjQu9JPpWZ0UrXFXp1BGuOGR6nexBOJ9toncPijCsfW58qfA8oUw6LP6zwY6pgEVEtzO%2Fgli5ooQGCOgVgHTiwofwtXUaddr6nX1kHSDl26Xefm%2BkyzwIcCFD0VbTKkeGXNGEYjsFMjy1Kow%2Fd96bUiTEimTQPhOlTk9vTpC3hoJ6Vdlm%2FZBPYPc6%2Bh2GoboFNW9lKmNWTz3JdFxn%2BNFKNUstQgnJ7ja1zPcBMctZs6T%2F2oN0SDGWfdHR%2BJ27rTmvSdVOBVT2DE8yQMXiSSjqAnPcDjT&X-Amz-Signature=89c1b97074f9f705c61f43a8330257b9ff7e77c96ab49c672445ea6b810ceac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLFKWASG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBq44FSKhFzrdfEm370SsPG9MAaVUijH39xl1oIWegxFAiBXgzldgOcRGYkh3e8dRYXqvmfaRSEN6cN%2Bd5nqkKHAfiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj5JiU9CqI0MsQ%2FIHKtwDph3atsZ1%2FKWYoPb3wFTQNYEfca4%2BbkD0E5EnHA5W8fqdyZkl1%2FiPqst8vxMo9wLujG93BOzUAUMZQ9Q%2BFAVHc3g8EtpxxzCmSZeRNkReGBRBY7raw4Pg8fJ6AJ5axA1kxrDCK%2BYamUiZJ%2FAuiKybOZ4C7w4G95FFKOTdZt%2B5FoTXlXuIfkgvU38K%2BShKCqKF6M%2BZsC7MamsUNV3bqCMW7ZJAnSOF1NM4b%2F9VlI6rCp%2FsoMHp4HTsNlzUn40Jd5mEp7ZnBacqrNZbRh0sSdo2BTv4MpCtp1CjNB8ZC6Ohs%2BD%2F2In76hJxfeHp6TgirGNSq%2F4CzIU4X9zslTJ%2FT%2B6MXgWahl2OkiAquURroSFy36EWwJCU%2F2%2FT6DGZMuRM61yX9SJ1prFQ2XvwcGwR%2BbthdADCIYnwBnaRH1FNfP14FauR4GhDuWZONMDarCDKDF23ZmtK%2FvaFgwon9LNVJTCKd7pUQJWubKO%2BF95GEp0EJUpZfnbBjgZPviV5M0M0vfGTfCkeWE%2BHBfPAgKmmXWtAXeMk04kk9NcnPsaR4w3jIkm%2BwZWmfT2BX2%2F%2B5VxOGwphJADgi6uwOjQu9JPpWZ0UrXFXp1BGuOGR6nexBOJ9toncPijCsfW58qfA8oUw6LP6zwY6pgEVEtzO%2Fgli5ooQGCOgVgHTiwofwtXUaddr6nX1kHSDl26Xefm%2BkyzwIcCFD0VbTKkeGXNGEYjsFMjy1Kow%2Fd96bUiTEimTQPhOlTk9vTpC3hoJ6Vdlm%2FZBPYPc6%2Bh2GoboFNW9lKmNWTz3JdFxn%2BNFKNUstQgnJ7ja1zPcBMctZs6T%2F2oN0SDGWfdHR%2BJ27rTmvSdVOBVT2DE8yQMXiSSjqAnPcDjT&X-Amz-Signature=1bdcec10f4d25373306cc4ffaaec2506317980016a6ee22c1f33c8e5c8c7010c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLFKWASG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBq44FSKhFzrdfEm370SsPG9MAaVUijH39xl1oIWegxFAiBXgzldgOcRGYkh3e8dRYXqvmfaRSEN6cN%2Bd5nqkKHAfiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj5JiU9CqI0MsQ%2FIHKtwDph3atsZ1%2FKWYoPb3wFTQNYEfca4%2BbkD0E5EnHA5W8fqdyZkl1%2FiPqst8vxMo9wLujG93BOzUAUMZQ9Q%2BFAVHc3g8EtpxxzCmSZeRNkReGBRBY7raw4Pg8fJ6AJ5axA1kxrDCK%2BYamUiZJ%2FAuiKybOZ4C7w4G95FFKOTdZt%2B5FoTXlXuIfkgvU38K%2BShKCqKF6M%2BZsC7MamsUNV3bqCMW7ZJAnSOF1NM4b%2F9VlI6rCp%2FsoMHp4HTsNlzUn40Jd5mEp7ZnBacqrNZbRh0sSdo2BTv4MpCtp1CjNB8ZC6Ohs%2BD%2F2In76hJxfeHp6TgirGNSq%2F4CzIU4X9zslTJ%2FT%2B6MXgWahl2OkiAquURroSFy36EWwJCU%2F2%2FT6DGZMuRM61yX9SJ1prFQ2XvwcGwR%2BbthdADCIYnwBnaRH1FNfP14FauR4GhDuWZONMDarCDKDF23ZmtK%2FvaFgwon9LNVJTCKd7pUQJWubKO%2BF95GEp0EJUpZfnbBjgZPviV5M0M0vfGTfCkeWE%2BHBfPAgKmmXWtAXeMk04kk9NcnPsaR4w3jIkm%2BwZWmfT2BX2%2F%2B5VxOGwphJADgi6uwOjQu9JPpWZ0UrXFXp1BGuOGR6nexBOJ9toncPijCsfW58qfA8oUw6LP6zwY6pgEVEtzO%2Fgli5ooQGCOgVgHTiwofwtXUaddr6nX1kHSDl26Xefm%2BkyzwIcCFD0VbTKkeGXNGEYjsFMjy1Kow%2Fd96bUiTEimTQPhOlTk9vTpC3hoJ6Vdlm%2FZBPYPc6%2Bh2GoboFNW9lKmNWTz3JdFxn%2BNFKNUstQgnJ7ja1zPcBMctZs6T%2F2oN0SDGWfdHR%2BJ27rTmvSdVOBVT2DE8yQMXiSSjqAnPcDjT&X-Amz-Signature=67abf680afc27ddc0ca685d14822462197b7c0ba696de279e5e0a06e47fb6a00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are many reasons for this because

- keeps all your code in one place
- You don’t need a monitor, mouse, and keyboard to connect to your Raspberry Pi
- Your laptop is much much faster than your Raspberry Pi so debugging is faster
- Once you are done developing on your laptop all you have to do is copy all the files over to the Pi and Docker will automatically make it work

{{% /alert %}}

## Creating workspace + package

[What are ROS workspaces/packages?](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-packages/)

```bash
mkdir -p mbot_ws/src
cd mbot_ws/src
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node mbot_pkg
```

### Building 

```bash
cd ../ # you should be in the mbot_ws folder after running this
colcon build --symlink-install  
source install/setup.bash
```

## install pkg

{{< tabs tabTotal="2">}}
{{% tab tabName="Dev container" %}}

If you are doing the Dev container setup put these at the bottom of your `Dockerfile` in `.devcontainer/Dockerfile`

```bash

################################
## ADD ANY CUSTOM SETUP BELOW ##
################################

RUN sudo apt update

# Rosdep update
RUN rosdep update --rosdistro ${ROS_DISTRO}

# Install dependencies
RUN sudo apt-get install -y \
    python3-colcon-common-extensions \
    ros-${ROS_DISTRO}-xacro \
    ros-${ROS_DISTRO}-ament-cmake \
    ros-${ROS_DISTRO}-robot-localization \
    ros-${ROS_DISTRO}-joint-state-publisher-gui \
    ros-${ROS_DISTRO}-slam-toolbox \
    ros-${ROS_DISTRO}-navigation2 \
    ros-${ROS_DISTRO}-nav2-bringup \
    ros-${ROS_DISTRO}-tf-transformations \
    ros-${ROS_DISTRO}-librealsense2* \
    ros-${ROS_DISTRO}-realsense2-* \
    ros-${ROS_DISTRO}-rqt-tf-tree \
    ros-${ROS_DISTRO}-foxglove-bridge \
    ros-${ROS_DISTRO}-ros-gz 

RUN sudo apt-get install -y python3-pip \
    && sudo rm -rf /var/lib/apt/lists/*


# enable extra quality of life plugins
RUN echo "source /usr/share/colcon_argcomplete/hook/colcon-argcomplete.bash" >> ~/.bashrc
RUN echo "source /usr/share/colcon_cd/function/colcon_cd.sh" >> ~/.bashrc
RUN echo "export _colcon_cd_root=/opt/ros/${ROS_DISTRO}/" >> ~/.bashrc
RUN echo "export RCUTILS_COLORIZED_OUTPUT=1" >> ~/.bashrc


# Source the ROS setup file
RUN echo "source /<your root folder>/mbot_ws/install/setup.bash" >> ~/.bashrc
```

**Example:**

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLFKWASG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBq44FSKhFzrdfEm370SsPG9MAaVUijH39xl1oIWegxFAiBXgzldgOcRGYkh3e8dRYXqvmfaRSEN6cN%2Bd5nqkKHAfiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj5JiU9CqI0MsQ%2FIHKtwDph3atsZ1%2FKWYoPb3wFTQNYEfca4%2BbkD0E5EnHA5W8fqdyZkl1%2FiPqst8vxMo9wLujG93BOzUAUMZQ9Q%2BFAVHc3g8EtpxxzCmSZeRNkReGBRBY7raw4Pg8fJ6AJ5axA1kxrDCK%2BYamUiZJ%2FAuiKybOZ4C7w4G95FFKOTdZt%2B5FoTXlXuIfkgvU38K%2BShKCqKF6M%2BZsC7MamsUNV3bqCMW7ZJAnSOF1NM4b%2F9VlI6rCp%2FsoMHp4HTsNlzUn40Jd5mEp7ZnBacqrNZbRh0sSdo2BTv4MpCtp1CjNB8ZC6Ohs%2BD%2F2In76hJxfeHp6TgirGNSq%2F4CzIU4X9zslTJ%2FT%2B6MXgWahl2OkiAquURroSFy36EWwJCU%2F2%2FT6DGZMuRM61yX9SJ1prFQ2XvwcGwR%2BbthdADCIYnwBnaRH1FNfP14FauR4GhDuWZONMDarCDKDF23ZmtK%2FvaFgwon9LNVJTCKd7pUQJWubKO%2BF95GEp0EJUpZfnbBjgZPviV5M0M0vfGTfCkeWE%2BHBfPAgKmmXWtAXeMk04kk9NcnPsaR4w3jIkm%2BwZWmfT2BX2%2F%2B5VxOGwphJADgi6uwOjQu9JPpWZ0UrXFXp1BGuOGR6nexBOJ9toncPijCsfW58qfA8oUw6LP6zwY6pgEVEtzO%2Fgli5ooQGCOgVgHTiwofwtXUaddr6nX1kHSDl26Xefm%2BkyzwIcCFD0VbTKkeGXNGEYjsFMjy1Kow%2Fd96bUiTEimTQPhOlTk9vTpC3hoJ6Vdlm%2FZBPYPc6%2Bh2GoboFNW9lKmNWTz3JdFxn%2BNFKNUstQgnJ7ja1zPcBMctZs6T%2F2oN0SDGWfdHR%2BJ27rTmvSdVOBVT2DE8yQMXiSSjqAnPcDjT&X-Amz-Signature=f3ae2743ae3a47a56d6f519bbc725eca8de6ea2bd34a29f6b7a0ef7e3f8ae3f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLFKWASG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBq44FSKhFzrdfEm370SsPG9MAaVUijH39xl1oIWegxFAiBXgzldgOcRGYkh3e8dRYXqvmfaRSEN6cN%2Bd5nqkKHAfiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj5JiU9CqI0MsQ%2FIHKtwDph3atsZ1%2FKWYoPb3wFTQNYEfca4%2BbkD0E5EnHA5W8fqdyZkl1%2FiPqst8vxMo9wLujG93BOzUAUMZQ9Q%2BFAVHc3g8EtpxxzCmSZeRNkReGBRBY7raw4Pg8fJ6AJ5axA1kxrDCK%2BYamUiZJ%2FAuiKybOZ4C7w4G95FFKOTdZt%2B5FoTXlXuIfkgvU38K%2BShKCqKF6M%2BZsC7MamsUNV3bqCMW7ZJAnSOF1NM4b%2F9VlI6rCp%2FsoMHp4HTsNlzUn40Jd5mEp7ZnBacqrNZbRh0sSdo2BTv4MpCtp1CjNB8ZC6Ohs%2BD%2F2In76hJxfeHp6TgirGNSq%2F4CzIU4X9zslTJ%2FT%2B6MXgWahl2OkiAquURroSFy36EWwJCU%2F2%2FT6DGZMuRM61yX9SJ1prFQ2XvwcGwR%2BbthdADCIYnwBnaRH1FNfP14FauR4GhDuWZONMDarCDKDF23ZmtK%2FvaFgwon9LNVJTCKd7pUQJWubKO%2BF95GEp0EJUpZfnbBjgZPviV5M0M0vfGTfCkeWE%2BHBfPAgKmmXWtAXeMk04kk9NcnPsaR4w3jIkm%2BwZWmfT2BX2%2F%2B5VxOGwphJADgi6uwOjQu9JPpWZ0UrXFXp1BGuOGR6nexBOJ9toncPijCsfW58qfA8oUw6LP6zwY6pgEVEtzO%2Fgli5ooQGCOgVgHTiwofwtXUaddr6nX1kHSDl26Xefm%2BkyzwIcCFD0VbTKkeGXNGEYjsFMjy1Kow%2Fd96bUiTEimTQPhOlTk9vTpC3hoJ6Vdlm%2FZBPYPc6%2Bh2GoboFNW9lKmNWTz3JdFxn%2BNFKNUstQgnJ7ja1zPcBMctZs6T%2F2oN0SDGWfdHR%2BJ27rTmvSdVOBVT2DE8yQMXiSSjqAnPcDjT&X-Amz-Signature=40ec730f72ab5444233ce1ceebe0d2bab12b04fde2287aaf08b21747e9b86593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLFKWASG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBq44FSKhFzrdfEm370SsPG9MAaVUijH39xl1oIWegxFAiBXgzldgOcRGYkh3e8dRYXqvmfaRSEN6cN%2Bd5nqkKHAfiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj5JiU9CqI0MsQ%2FIHKtwDph3atsZ1%2FKWYoPb3wFTQNYEfca4%2BbkD0E5EnHA5W8fqdyZkl1%2FiPqst8vxMo9wLujG93BOzUAUMZQ9Q%2BFAVHc3g8EtpxxzCmSZeRNkReGBRBY7raw4Pg8fJ6AJ5axA1kxrDCK%2BYamUiZJ%2FAuiKybOZ4C7w4G95FFKOTdZt%2B5FoTXlXuIfkgvU38K%2BShKCqKF6M%2BZsC7MamsUNV3bqCMW7ZJAnSOF1NM4b%2F9VlI6rCp%2FsoMHp4HTsNlzUn40Jd5mEp7ZnBacqrNZbRh0sSdo2BTv4MpCtp1CjNB8ZC6Ohs%2BD%2F2In76hJxfeHp6TgirGNSq%2F4CzIU4X9zslTJ%2FT%2B6MXgWahl2OkiAquURroSFy36EWwJCU%2F2%2FT6DGZMuRM61yX9SJ1prFQ2XvwcGwR%2BbthdADCIYnwBnaRH1FNfP14FauR4GhDuWZONMDarCDKDF23ZmtK%2FvaFgwon9LNVJTCKd7pUQJWubKO%2BF95GEp0EJUpZfnbBjgZPviV5M0M0vfGTfCkeWE%2BHBfPAgKmmXWtAXeMk04kk9NcnPsaR4w3jIkm%2BwZWmfT2BX2%2F%2B5VxOGwphJADgi6uwOjQu9JPpWZ0UrXFXp1BGuOGR6nexBOJ9toncPijCsfW58qfA8oUw6LP6zwY6pgEVEtzO%2Fgli5ooQGCOgVgHTiwofwtXUaddr6nX1kHSDl26Xefm%2BkyzwIcCFD0VbTKkeGXNGEYjsFMjy1Kow%2Fd96bUiTEimTQPhOlTk9vTpC3hoJ6Vdlm%2FZBPYPc6%2Bh2GoboFNW9lKmNWTz3JdFxn%2BNFKNUstQgnJ7ja1zPcBMctZs6T%2F2oN0SDGWfdHR%2BJ27rTmvSdVOBVT2DE8yQMXiSSjqAnPcDjT&X-Amz-Signature=90540a3a48a1f1f60714321789837944e6d1228319f6b274c4600c7126cadf65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> NOTE: every time you do an `apt install ...` you need to add it to the dev container to make it stay permanently

I also recommend you add these extensions to your dev container in `devcontainer.json`

```json
  "customizations": {
    "vscode": {
      "extensions": [
        "ms-python.python",
        "VisualStudioExptTeam.vscodeintellicode",
        "twxs.cmake",
        "zchrissirhcz.cmake-highlight",
        "Ranch-Hand-Robotics.urdf-editor"
      ]
    }
  }
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLFKWASG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBq44FSKhFzrdfEm370SsPG9MAaVUijH39xl1oIWegxFAiBXgzldgOcRGYkh3e8dRYXqvmfaRSEN6cN%2Bd5nqkKHAfiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj5JiU9CqI0MsQ%2FIHKtwDph3atsZ1%2FKWYoPb3wFTQNYEfca4%2BbkD0E5EnHA5W8fqdyZkl1%2FiPqst8vxMo9wLujG93BOzUAUMZQ9Q%2BFAVHc3g8EtpxxzCmSZeRNkReGBRBY7raw4Pg8fJ6AJ5axA1kxrDCK%2BYamUiZJ%2FAuiKybOZ4C7w4G95FFKOTdZt%2B5FoTXlXuIfkgvU38K%2BShKCqKF6M%2BZsC7MamsUNV3bqCMW7ZJAnSOF1NM4b%2F9VlI6rCp%2FsoMHp4HTsNlzUn40Jd5mEp7ZnBacqrNZbRh0sSdo2BTv4MpCtp1CjNB8ZC6Ohs%2BD%2F2In76hJxfeHp6TgirGNSq%2F4CzIU4X9zslTJ%2FT%2B6MXgWahl2OkiAquURroSFy36EWwJCU%2F2%2FT6DGZMuRM61yX9SJ1prFQ2XvwcGwR%2BbthdADCIYnwBnaRH1FNfP14FauR4GhDuWZONMDarCDKDF23ZmtK%2FvaFgwon9LNVJTCKd7pUQJWubKO%2BF95GEp0EJUpZfnbBjgZPviV5M0M0vfGTfCkeWE%2BHBfPAgKmmXWtAXeMk04kk9NcnPsaR4w3jIkm%2BwZWmfT2BX2%2F%2B5VxOGwphJADgi6uwOjQu9JPpWZ0UrXFXp1BGuOGR6nexBOJ9toncPijCsfW58qfA8oUw6LP6zwY6pgEVEtzO%2Fgli5ooQGCOgVgHTiwofwtXUaddr6nX1kHSDl26Xefm%2BkyzwIcCFD0VbTKkeGXNGEYjsFMjy1Kow%2Fd96bUiTEimTQPhOlTk9vTpC3hoJ6Vdlm%2FZBPYPc6%2Bh2GoboFNW9lKmNWTz3JdFxn%2BNFKNUstQgnJ7ja1zPcBMctZs6T%2F2oN0SDGWfdHR%2BJ27rTmvSdVOBVT2DE8yQMXiSSjqAnPcDjT&X-Amz-Signature=b7da5d9581208fc05eae9fc76cb70b6399eddcd47bd99ffc204efad919c671ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% /tab %}}
{{% tab tabName="Linux" %}}

Install these packages (if you are not running the dev container setup)

```bash
sudo apt install ros-$ROS2_DISTRO-joint-state-publisher-gui
sudo apt install ros-$ROS2_DISTRO-xacro
```

{{% /tab %}}
{{< /tabs >}}

---

# Building your robot in URDF

make a folder in `mbot_pkg` called `description` and a file called `mbot_description.urdf`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLFKWASG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBq44FSKhFzrdfEm370SsPG9MAaVUijH39xl1oIWegxFAiBXgzldgOcRGYkh3e8dRYXqvmfaRSEN6cN%2Bd5nqkKHAfiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj5JiU9CqI0MsQ%2FIHKtwDph3atsZ1%2FKWYoPb3wFTQNYEfca4%2BbkD0E5EnHA5W8fqdyZkl1%2FiPqst8vxMo9wLujG93BOzUAUMZQ9Q%2BFAVHc3g8EtpxxzCmSZeRNkReGBRBY7raw4Pg8fJ6AJ5axA1kxrDCK%2BYamUiZJ%2FAuiKybOZ4C7w4G95FFKOTdZt%2B5FoTXlXuIfkgvU38K%2BShKCqKF6M%2BZsC7MamsUNV3bqCMW7ZJAnSOF1NM4b%2F9VlI6rCp%2FsoMHp4HTsNlzUn40Jd5mEp7ZnBacqrNZbRh0sSdo2BTv4MpCtp1CjNB8ZC6Ohs%2BD%2F2In76hJxfeHp6TgirGNSq%2F4CzIU4X9zslTJ%2FT%2B6MXgWahl2OkiAquURroSFy36EWwJCU%2F2%2FT6DGZMuRM61yX9SJ1prFQ2XvwcGwR%2BbthdADCIYnwBnaRH1FNfP14FauR4GhDuWZONMDarCDKDF23ZmtK%2FvaFgwon9LNVJTCKd7pUQJWubKO%2BF95GEp0EJUpZfnbBjgZPviV5M0M0vfGTfCkeWE%2BHBfPAgKmmXWtAXeMk04kk9NcnPsaR4w3jIkm%2BwZWmfT2BX2%2F%2B5VxOGwphJADgi6uwOjQu9JPpWZ0UrXFXp1BGuOGR6nexBOJ9toncPijCsfW58qfA8oUw6LP6zwY6pgEVEtzO%2Fgli5ooQGCOgVgHTiwofwtXUaddr6nX1kHSDl26Xefm%2BkyzwIcCFD0VbTKkeGXNGEYjsFMjy1Kow%2Fd96bUiTEimTQPhOlTk9vTpC3hoJ6Vdlm%2FZBPYPc6%2Bh2GoboFNW9lKmNWTz3JdFxn%2BNFKNUstQgnJ7ja1zPcBMctZs6T%2F2oN0SDGWfdHR%2BJ27rTmvSdVOBVT2DE8yQMXiSSjqAnPcDjT&X-Amz-Signature=d8582bc8b77ad04b5d973e1813c73722e9c4a15a3700c690090326e040d32091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLFKWASG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBq44FSKhFzrdfEm370SsPG9MAaVUijH39xl1oIWegxFAiBXgzldgOcRGYkh3e8dRYXqvmfaRSEN6cN%2Bd5nqkKHAfiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj5JiU9CqI0MsQ%2FIHKtwDph3atsZ1%2FKWYoPb3wFTQNYEfca4%2BbkD0E5EnHA5W8fqdyZkl1%2FiPqst8vxMo9wLujG93BOzUAUMZQ9Q%2BFAVHc3g8EtpxxzCmSZeRNkReGBRBY7raw4Pg8fJ6AJ5axA1kxrDCK%2BYamUiZJ%2FAuiKybOZ4C7w4G95FFKOTdZt%2B5FoTXlXuIfkgvU38K%2BShKCqKF6M%2BZsC7MamsUNV3bqCMW7ZJAnSOF1NM4b%2F9VlI6rCp%2FsoMHp4HTsNlzUn40Jd5mEp7ZnBacqrNZbRh0sSdo2BTv4MpCtp1CjNB8ZC6Ohs%2BD%2F2In76hJxfeHp6TgirGNSq%2F4CzIU4X9zslTJ%2FT%2B6MXgWahl2OkiAquURroSFy36EWwJCU%2F2%2FT6DGZMuRM61yX9SJ1prFQ2XvwcGwR%2BbthdADCIYnwBnaRH1FNfP14FauR4GhDuWZONMDarCDKDF23ZmtK%2FvaFgwon9LNVJTCKd7pUQJWubKO%2BF95GEp0EJUpZfnbBjgZPviV5M0M0vfGTfCkeWE%2BHBfPAgKmmXWtAXeMk04kk9NcnPsaR4w3jIkm%2BwZWmfT2BX2%2F%2B5VxOGwphJADgi6uwOjQu9JPpWZ0UrXFXp1BGuOGR6nexBOJ9toncPijCsfW58qfA8oUw6LP6zwY6pgEVEtzO%2Fgli5ooQGCOgVgHTiwofwtXUaddr6nX1kHSDl26Xefm%2BkyzwIcCFD0VbTKkeGXNGEYjsFMjy1Kow%2Fd96bUiTEimTQPhOlTk9vTpC3hoJ6Vdlm%2FZBPYPc6%2Bh2GoboFNW9lKmNWTz3JdFxn%2BNFKNUstQgnJ7ja1zPcBMctZs6T%2F2oN0SDGWfdHR%2BJ27rTmvSdVOBVT2DE8yQMXiSSjqAnPcDjT&X-Amz-Signature=70c18905cb3084edd0ad5e5a28cdbaad996b760e65ae51d7e2b86760b6371976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLFKWASG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBq44FSKhFzrdfEm370SsPG9MAaVUijH39xl1oIWegxFAiBXgzldgOcRGYkh3e8dRYXqvmfaRSEN6cN%2Bd5nqkKHAfiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj5JiU9CqI0MsQ%2FIHKtwDph3atsZ1%2FKWYoPb3wFTQNYEfca4%2BbkD0E5EnHA5W8fqdyZkl1%2FiPqst8vxMo9wLujG93BOzUAUMZQ9Q%2BFAVHc3g8EtpxxzCmSZeRNkReGBRBY7raw4Pg8fJ6AJ5axA1kxrDCK%2BYamUiZJ%2FAuiKybOZ4C7w4G95FFKOTdZt%2B5FoTXlXuIfkgvU38K%2BShKCqKF6M%2BZsC7MamsUNV3bqCMW7ZJAnSOF1NM4b%2F9VlI6rCp%2FsoMHp4HTsNlzUn40Jd5mEp7ZnBacqrNZbRh0sSdo2BTv4MpCtp1CjNB8ZC6Ohs%2BD%2F2In76hJxfeHp6TgirGNSq%2F4CzIU4X9zslTJ%2FT%2B6MXgWahl2OkiAquURroSFy36EWwJCU%2F2%2FT6DGZMuRM61yX9SJ1prFQ2XvwcGwR%2BbthdADCIYnwBnaRH1FNfP14FauR4GhDuWZONMDarCDKDF23ZmtK%2FvaFgwon9LNVJTCKd7pUQJWubKO%2BF95GEp0EJUpZfnbBjgZPviV5M0M0vfGTfCkeWE%2BHBfPAgKmmXWtAXeMk04kk9NcnPsaR4w3jIkm%2BwZWmfT2BX2%2F%2B5VxOGwphJADgi6uwOjQu9JPpWZ0UrXFXp1BGuOGR6nexBOJ9toncPijCsfW58qfA8oUw6LP6zwY6pgEVEtzO%2Fgli5ooQGCOgVgHTiwofwtXUaddr6nX1kHSDl26Xefm%2BkyzwIcCFD0VbTKkeGXNGEYjsFMjy1Kow%2Fd96bUiTEimTQPhOlTk9vTpC3hoJ6Vdlm%2FZBPYPc6%2Bh2GoboFNW9lKmNWTz3JdFxn%2BNFKNUstQgnJ7ja1zPcBMctZs6T%2F2oN0SDGWfdHR%2BJ27rTmvSdVOBVT2DE8yQMXiSSjqAnPcDjT&X-Amz-Signature=7398dc1f646496958ca6e94762fdf8d2b0dcaebf7cefcfce73ffc9591e5963b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> urdf can get complex to look at so I will be putting a “_scratch”_ like equivalent next to each example I put down.

To start add these tags:

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml
<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">



</robot>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ6FLKVZ%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCNDzNBZS4Rmo76A%2BVCB%2FUCzoPL0ANVkFoQSWWTCi631gIgAO4HU3EBM31URRVSAT7Vo%2FSMvIGvvwpQ4vZX1Bp%2Fq78qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8Ws2XbxFpYkph3RircAxeb9NkWzlKXzCDAH4maJxexLw4L1C3v%2FcXBmdInu8MArU%2Fz%2FssuMzGZ2v%2B8RBuhLU9BwoKKUwMRJs83P1MU8T4Cd%2Fax7j6B75n2KkCR0mpFuYE4UTw04Ln0RAtIkEI5xf1SopW47%2BbflthEQ6AmqywWrcczsxqDq641cj8%2FMbU1ijWvmJUb5tcr8EL%2FOaaTeMaa8yB8V%2B5RvvCvKJO94hOx9hDryP9xgQ3P1%2FxMnGEuftk7hJfA8xSrZS8mXX0KDFPOdcBK2ulXicHyhVOjwNj6%2FFu34LrpGqSm85uOI8jaWPVM5j1SOR8VB9F%2B9S18CUgF%2BzQJcrSi%2FopLxyUxZhoUofVwe7gA0YtSoyge%2FoLCykTuG6uabn369r6%2FxK3oQnV905Oowz4PIrR44aU%2BRY%2BWUPob2FLZOXMVZsgP66UQap90eaijDtI5hAcRCFogfl69dzbhVjSt0kkDfCjsLwaArvHz4zPGkCjMkpOSBhP0P979gJx13%2FAmiaHz9WdbRTyUqjnf5xHLIomgqZZ62qs4gOX8JPiVo7oAb3UvWTCLBiZXZ84ooeG%2F9NqjLH%2FbHBSDtnAW1RNMOyDBiQ2sQfBjpTAPJVsQnLeYAnpevi%2B44J6Fs0vOgURIs2SxMKOz%2Bs8GOqUBKaybDURh4bKJyEWpWw1NwgEM0%2FfAc8qlhFKdBdhbQCNPbvZCR673933XMWaE5Gwm%2FwDx7o7SEnCaZHgY1WmDPdwkXIdiEeB1gMbL4PvEsQGuy7eaM2eV3RcjzFZGfd2rASq4eehDV1eNK14Iv%2BeNreeFEjWrKaZdI6fJOxN2e6KRTn6goDK1MXvdCIbn32jPabR5emfVPy5R0bLlcFx7IJGSjDbE&X-Amz-Signature=540ac21a7cccac5e722f564e1101332c1053352be67d4d5516ba88bc2e380e64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

All urdf files must start with these tags to be valid urdf. All of our code will go in between the `<robot>` tags 

Next lets put down some constants we will use later

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml
<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">
  <!-- Define robot constants -->
  <xacro:property name="base_width" value="0.31"/>
  <xacro:property name="base_length" value="0.42"/>
  <xacro:property name="base_height" value="0.18"/>

  <xacro:property name="wheel_radius" value="0.10"/>
  <xacro:property name="wheel_width" value="0.04"/>
  <xacro:property name="wheel_ygap" value="0.025"/>
  <xacro:property name="wheel_zoff" value="0.05"/>
  <xacro:property name="wheel_xoff" value="0.12"/>

  <xacro:property name="caster_xoff" value="0.14"/>


</robot>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB7O7C5Q%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIDYAXgsdZxLkwUkAimPCU%2FIGYIA13r8l4Jn%2Fv6%2BzBKCBAiEA8MJR0eKd3VEChqK6aXTHq94ZvCNpS7dqybt0o6II8tkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsDe9otVLE5q1jiaSrcA8VlwpvBsrgQ8cNo9Jv4GaCeqkPW3mPe9doBXdOaRbYfZ%2BhImK0GIN99Si3t%2FaFeTWUtC0YHaIOwzc6rYd7CR4ynboSxpLbegflWbH0hTHCU8IREP%2FqMUFjuvH3a8zMlIeYyD9iAFuKQxKNN%2FSCWzdp0%2FciJJfumYj4dijis9sUPh%2BdPEVcYOUW52wncArIjYyRlxUQ%2FhGb7G4zcntBXaag%2FVn4ZdC54fe1JSNgK%2F%2BWmsZwrEiCTPvCfbe1%2FY80IhqLduMwyH4Fxh12%2BQ%2FOAnc%2FsXztD0GjwiOiDAM32qmkNu5t8sXtUM6tMHz0zvixcDSRe%2F1xhVMWFvj2lj1oJ050Z8m4Ng7SX%2FQVspwfL4Gxa7xp%2FK5S7MDW1TmUL7RyyWl6tQ1TgLKuCWkz4Nl8m432D3n0KTu6bmS4ZM%2FqYIsCfxXPTM8W5bqSOqCfYH5FqRIVejm7rUZtwynyHFxyK0SUUsgWDcWqxHYmHm5qVxvP5fyY8OfnAvDXbWxSTNSq8Co3f0OzNrihk6EP4n8De2QmjYzbwcIGyqq1BTSQQ0o6Lzdrpgg6OtmqE4R8qVnxUFP3rN7DUPGMQ0iCsKRx46nmxWvVyMnfa4w4owfN4sPG7hNOOpWXELAqQZoLxMNqx%2Bs8GOqUByc8BOJeCb%2BROk12kaXOKzCApLhNFR7%2FdNKDp%2FOrvrs6lrllmR%2B9Kburale9KiU%2FgYQyYYwUoWLXV1vAbpd8v2fiG5zaXb9o1byrEOWEq2l0ahH0UTDSBG1Okp4MOry%2Bg7tj45R6uMsEKgWNd8SNXnKaEElrP3giFpqtiY4HO602L%2B0UO9YKazJmuBVnz2IvfOxWTT14i5ng4fr8r6rKviLpfDXh%2F&X-Amz-Signature=f9b269f25e3bc2f996600e324727b71ec0639b4445302b7521360e65434bfd2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

You can think of these as **variables** but in the xacro language

<details>
  <summary>{{< markdownify >}}What do the variables represent?{{< /markdownify >}}</summary>
  
`base_width`, `base_length`, `base_height` are the dimensions of the main body of the robot.

`wheel_radius` and `wheel_width` are the dimensions of the 2 back wheels.

`wheel_ygap` is the gap between the chassis and wheel.

`wheel_zoff` and `wheel_xoff` is the offset between the z-axis and x-axis.

`caster_xoff` is the offset of the caster wheel (the little ball) along the x-axis.

</details>



Lets now make a link for the body and call it `base_link` to be the “_root” of our robot._ This is common convention in ROS and is required to be called `base_link` for later parts in this guide

For now we are only going to add the visual part of the link to see if our design is correct. Later we will add collision and inertia.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml
  <!-- Robot Base -->
  <link name="base_link">
    <visual>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>
    
  </link>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWJ6UWOG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIGyTJwEedQWnN%2Fgu3gxagtmOHhdqgk%2B7roRFVyCMr%2BcGAiEAmm%2FhXHLHTpxWoMsQRkjGCIfGZFy1n3ZoM%2FWa8yJiiu0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2B3EZPOTX9MArWMPircAw4F1mKDhJJFZbWOks6s%2BNgRLpjin4vBgIOhbtdMe9vHInBumHgJMUre81A5vHA0Mwb5smy14yJue2LDyvcUOzUEA23SSB8jiWqgJDzpIFcAGV5g3ybllWXdcQAe4UUXr4FkjAtM%2FK1k2zeaH4WiH9Cv1DvPmq1XttLDZG8VPpsPOty3cRulepMvamhVT1NGLHmo349sALAVqdib1HOCLSYBr089JXRA0hwWAWEhO1XeB2z%2FImRo9H%2Bp%2FF5mEl99KoDaCYm3fGthC%2FlpFrPlAT0TRBsE2jKme6NFdB47UsKPOtKpU68%2BNlyxbvNUh%2BdjDE1SM0XWHIZtHhCUlMHx0AsXB%2FY1ZDedsorUTJWt3cpFvUic8YB3D8gM84PzEdjN7U0V8%2BA%2Fd4%2FJj0renfzUPEHuIEYNhYTZ61HFzx2JwwN5vhPrSbReQm6Sxz5ZlZRwgLBekJoH6b9jzE73dlpVnAHToK5k0L8IILLGqlpGk5I%2BbKQwUpTli9tBG67pWqvpQZqoqPvlHAOI92YqB5jamkImaHLPZyPIaZQK2Ci2UHcQnfmh5V1jklvYF6Y74BEfkHGyuDxJhA1AwG2Ei1PUpkW3k80Dd9LCviJMLd7AbaPeKdPWwBVyTv3hhz%2B4MJGy%2Bs8GOqUBaIplZp3N47Tg3HNmsOETaB1bEda4ZE%2BMMoCB4EHak1Gp%2Fz0sgOHpjAxOMFH1Impt8QaFcv5LOPOelIzzCpEwdZSXHJtG8%2FP6kJ6Re4bdRNORA%2B4rOOpQx%2BH7MLwYw%2BljdqGxigpOQtBYzyVMcBpjTU4wSO1XPFVpBH3p2VSVFE%2BN18SgXdYO1G8pxiwr01w%2F%2BKgWYanBAHOe%2FEVbAKrGaV%2FMxWzJ&X-Amz-Signature=75c82a2c29183e592e31caa1c5896b458ceb143842e915b763bda45b4580b0f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLFKWASG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBq44FSKhFzrdfEm370SsPG9MAaVUijH39xl1oIWegxFAiBXgzldgOcRGYkh3e8dRYXqvmfaRSEN6cN%2Bd5nqkKHAfiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj5JiU9CqI0MsQ%2FIHKtwDph3atsZ1%2FKWYoPb3wFTQNYEfca4%2BbkD0E5EnHA5W8fqdyZkl1%2FiPqst8vxMo9wLujG93BOzUAUMZQ9Q%2BFAVHc3g8EtpxxzCmSZeRNkReGBRBY7raw4Pg8fJ6AJ5axA1kxrDCK%2BYamUiZJ%2FAuiKybOZ4C7w4G95FFKOTdZt%2B5FoTXlXuIfkgvU38K%2BShKCqKF6M%2BZsC7MamsUNV3bqCMW7ZJAnSOF1NM4b%2F9VlI6rCp%2FsoMHp4HTsNlzUn40Jd5mEp7ZnBacqrNZbRh0sSdo2BTv4MpCtp1CjNB8ZC6Ohs%2BD%2F2In76hJxfeHp6TgirGNSq%2F4CzIU4X9zslTJ%2FT%2B6MXgWahl2OkiAquURroSFy36EWwJCU%2F2%2FT6DGZMuRM61yX9SJ1prFQ2XvwcGwR%2BbthdADCIYnwBnaRH1FNfP14FauR4GhDuWZONMDarCDKDF23ZmtK%2FvaFgwon9LNVJTCKd7pUQJWubKO%2BF95GEp0EJUpZfnbBjgZPviV5M0M0vfGTfCkeWE%2BHBfPAgKmmXWtAXeMk04kk9NcnPsaR4w3jIkm%2BwZWmfT2BX2%2F%2B5VxOGwphJADgi6uwOjQu9JPpWZ0UrXFXp1BGuOGR6nexBOJ9toncPijCsfW58qfA8oUw6LP6zwY6pgEVEtzO%2Fgli5ooQGCOgVgHTiwofwtXUaddr6nX1kHSDl26Xefm%2BkyzwIcCFD0VbTKkeGXNGEYjsFMjy1Kow%2Fd96bUiTEimTQPhOlTk9vTpC3hoJ6Vdlm%2FZBPYPc6%2Bh2GoboFNW9lKmNWTz3JdFxn%2BNFKNUstQgnJ7ja1zPcBMctZs6T%2F2oN0SDGWfdHR%2BJ27rTmvSdVOBVT2DE8yQMXiSSjqAnPcDjT&X-Amz-Signature=95c3ee87f6719f85902154114faa15e14d37c3bd15dcd6b6d35a4717745284ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

under `</link>` lets define a link called `base_footprint`. This link is just used for path finding to know where the robot is on a 2D map.

Later on in this guide we will see how it gets used.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml
  <!-- Robot Footprint -->
  <link name="base_footprint"/>

  <joint name="base_joint" type="fixed">
    <parent link="base_link"/>
    <child link="base_footprint"/>
    <origin xyz="0.0 0.0 ${-(wheel_radius+wheel_zoff)}" rpy="0 0 0"/>
  </joint>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK5NKAS4%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCJvd3T%2F03ydXNSTrqGbnZIydfhkaUpBlcJoofy5Z1WpQIgPXlexiksawWx90ZT2aN0pbTeEDqexAYi60lumYPPF6oqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJSsKRYvbf8fLPJ7SrcA%2Bhv9SjGfHbF5Qz8D2pp2VZUlF679kLCr2Vxjo6u2ybW2zvHQfq0ONgK05wWusNvQYWKqPlYdAvRRtkko7tMbzvA6vY4mrNBxw0l7tcoWCvdI47OB5M%2FR2xUw4a7NCKQhxOZvxVC1F0m%2BCEWxO%2FFrSqs2RaytbvKtG6se0sai6YeYsMmASP4tC27NzH3vre2nh3MS1yu5V4yCa35Z6cbQBmc4w35Oag8cWTZfHYbViH7ATAanoJ53lSxNdxzV92OVutX5M6XezQjI6oVThIbTl20i7i9VGszHoJrWclmtxtfRUsJrMOKKQyABp%2F66nC%2BSXYiASeUKfj6AlgbdnsDPc4RusOB5pbyIzB2HODzElgIJ3A6xpxJ76PYBxmZsZoIEY5fimo%2FuqKRKXIsFaH2%2FD7gus3LVN3jxWMsAzxZXzjpcNpYT0Lq%2FJl2mZX48zsvi0JGQnR7zcUDIjDoHcSivlFJ0QryNSHqZgBYbG42%2BufQj90fOa5r0W31QTWfvsgnrmPy4%2FoKCuYycSfAXczt%2BX%2Fhe8ed1ID%2Fab6jFo0RG78BPUMgZIIJR%2Bej3w181He%2FzZhb3HbI6uZKKjCCRFSiazlFD7y%2FRX%2BCAlGc%2BGgxJhXzNwQr0tjUgJnw%2B3ioMOiz%2Bs8GOqUBOLvw2Scx2GBPD0dGS0HmRWPltD0W%2BfGoq89ifdcVEkWZSRp3R82zpCmiUyac3Ymnpl4gJl7ibF%2FWZKh4VeDBoRER8na9jJMNWYx6oJVClbRstt04Mqq17fkevBT%2Bm3CN%2FX52jSctz%2BEopC7flDccpL5cD4595AdfOXHOr%2FJ%2FmSvgn8Hepjrh9vE2LiSSECa%2BE5fi5RvID%2BNsuSGgCAmfXcdwgle%2F&X-Amz-Signature=75f6dc33cc5966a89d3a99a372836ef320e818e08df75c99458689b350bdae00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLFKWASG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBq44FSKhFzrdfEm370SsPG9MAaVUijH39xl1oIWegxFAiBXgzldgOcRGYkh3e8dRYXqvmfaRSEN6cN%2Bd5nqkKHAfiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj5JiU9CqI0MsQ%2FIHKtwDph3atsZ1%2FKWYoPb3wFTQNYEfca4%2BbkD0E5EnHA5W8fqdyZkl1%2FiPqst8vxMo9wLujG93BOzUAUMZQ9Q%2BFAVHc3g8EtpxxzCmSZeRNkReGBRBY7raw4Pg8fJ6AJ5axA1kxrDCK%2BYamUiZJ%2FAuiKybOZ4C7w4G95FFKOTdZt%2B5FoTXlXuIfkgvU38K%2BShKCqKF6M%2BZsC7MamsUNV3bqCMW7ZJAnSOF1NM4b%2F9VlI6rCp%2FsoMHp4HTsNlzUn40Jd5mEp7ZnBacqrNZbRh0sSdo2BTv4MpCtp1CjNB8ZC6Ohs%2BD%2F2In76hJxfeHp6TgirGNSq%2F4CzIU4X9zslTJ%2FT%2B6MXgWahl2OkiAquURroSFy36EWwJCU%2F2%2FT6DGZMuRM61yX9SJ1prFQ2XvwcGwR%2BbthdADCIYnwBnaRH1FNfP14FauR4GhDuWZONMDarCDKDF23ZmtK%2FvaFgwon9LNVJTCKd7pUQJWubKO%2BF95GEp0EJUpZfnbBjgZPviV5M0M0vfGTfCkeWE%2BHBfPAgKmmXWtAXeMk04kk9NcnPsaR4w3jIkm%2BwZWmfT2BX2%2F%2B5VxOGwphJADgi6uwOjQu9JPpWZ0UrXFXp1BGuOGR6nexBOJ9toncPijCsfW58qfA8oUw6LP6zwY6pgEVEtzO%2Fgli5ooQGCOgVgHTiwofwtXUaddr6nX1kHSDl26Xefm%2BkyzwIcCFD0VbTKkeGXNGEYjsFMjy1Kow%2Fd96bUiTEimTQPhOlTk9vTpC3hoJ6Vdlm%2FZBPYPc6%2Bh2GoboFNW9lKmNWTz3JdFxn%2BNFKNUstQgnJ7ja1zPcBMctZs6T%2F2oN0SDGWfdHR%2BJ27rTmvSdVOBVT2DE8yQMXiSSjqAnPcDjT&X-Amz-Signature=c0170608f27fc10cafee31b0fd747e9bacde10094707066377ec2516146b6d0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

under `</joint>` to add wheels lets use a `xacro:macro` (basically a xacro function) to avoid duplicate code. The macro will take 3 functions `prefix`, `x_reflect`, and `y_reflect` so we can flip the wheel on the x or y axis. We also make the joint continuous so the wheel can rotate freely.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml
  <!-- Wheels -->
  <xacro:macro name="wheel" params="prefix x_reflect y_reflect">
    <link name="${prefix}_link">
      <visual>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
            <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
        <material name="Gray">
          <color rgba="0.5 0.5 0.5 1.0"/>
        </material>
      </visual>
    </link>

    <joint name="${prefix}_joint" type="continuous">
      <parent link="base_link"/>
      <child link="${prefix}_link"/>
      <origin xyz="${x_reflect*wheel_xoff} ${y_reflect*(base_width/2+wheel_ygap)} ${-wheel_zoff}" rpy="0 0 0"/>
      <axis xyz="0 1 0"/>
    </joint>
  </xacro:macro>

  <xacro:wheel prefix="drivewhl_l" x_reflect="-1" y_reflect="1" />
  <xacro:wheel prefix="drivewhl_r" x_reflect="-1" y_reflect="-1" />
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWYYXHH7%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIBilzBlZLpGXVQm3mOk4DfWI3ob3PuoTjrof6Wz%2BpSeNAiEA1E5hzRvMDixqK%2F7WJiKN%2FfBOdNRIwgjrkqwZkmwyT4gqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtyiflo4kdTGGRHNSrcAx6jCVY26zebdgJtE8%2F075xGC9RLAKFepiu8J%2B1WFjSpG2lwEiRVjtxK%2FI65qq4iy6%2BYtDgvRlUSZWXdq2yNUDHDqQsySP%2BxMpol3oMJpnBphghrcfww6HIx0HVbJHL3cMKh1LDFeNZFosbSuDmlvwyo5GHhljCfHQb4L4l4fywbO0bNuDTYr%2Bcmu6WiDC3XkMVDvtl9fsUqYKXlILxU2bgH%2Fn%2BTzcGOXmE23DwGtRlT%2FrZV2Z24D0Qu0a3JxzlNdBshAwunEn%2FbDmemXRz06cx2e81kswgXyndomArK1TX1Lmqyc109nOQ5jhcMaiQfEwKIZPoMQotT7fO4wpW01uLQHO6NEwb3yIVBjpLYaMj9s4i4XtBuWIhm6Mf0dAaCRgBcqdGsrWdBe3xjRHD3zOjtlBI1pJryeGuiN2Dfot8h9t9XC%2B%2BHAYjffO3HK9aDoW6Hus4nkjOSLhsC53%2BsizvAzcvAVgIu43R3Hcys%2FtZWx6O2%2BH9G6dCr7RH9oW0CoNifef9sfs4DH3jnwRdKfCvgeKoorE%2FbSAcPk9zTQlNDswKu%2FdmuH%2B01uUy3WlJLHecIZyY4Fa%2BtbHjIcGhWI8lCqq3CnalW0BIY3SE59fpfOrGeOqmtZq9D6AbXMN%2By%2Bs8GOqUBtoN2xvjynZpeVqLomJSIO9g0G%2Bl2AA6riIrZrCa%2FHblush%2Ff%2BSqXu0hAiEUPucE6cJq1kFO%2FF8jGgohD4ACuO3Z9ozcrYjIeOM1eis8%2BPmQU2aR0XdRDujzhUPrfJsbnZ5C0wXWr9TXB1LEB9v%2FyqcbOzQoZt%2BudblcxD%2B2gGz3UVzSeCrKd%2FR2TIedZM6gHm35iFqNOrlkrwzLTxqrEAZn51ukS&X-Amz-Signature=b49108f8a9714d7777197aa6ff14993afcce15ca1c6baec102fda47696cac87e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLFKWASG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBq44FSKhFzrdfEm370SsPG9MAaVUijH39xl1oIWegxFAiBXgzldgOcRGYkh3e8dRYXqvmfaRSEN6cN%2Bd5nqkKHAfiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj5JiU9CqI0MsQ%2FIHKtwDph3atsZ1%2FKWYoPb3wFTQNYEfca4%2BbkD0E5EnHA5W8fqdyZkl1%2FiPqst8vxMo9wLujG93BOzUAUMZQ9Q%2BFAVHc3g8EtpxxzCmSZeRNkReGBRBY7raw4Pg8fJ6AJ5axA1kxrDCK%2BYamUiZJ%2FAuiKybOZ4C7w4G95FFKOTdZt%2B5FoTXlXuIfkgvU38K%2BShKCqKF6M%2BZsC7MamsUNV3bqCMW7ZJAnSOF1NM4b%2F9VlI6rCp%2FsoMHp4HTsNlzUn40Jd5mEp7ZnBacqrNZbRh0sSdo2BTv4MpCtp1CjNB8ZC6Ohs%2BD%2F2In76hJxfeHp6TgirGNSq%2F4CzIU4X9zslTJ%2FT%2B6MXgWahl2OkiAquURroSFy36EWwJCU%2F2%2FT6DGZMuRM61yX9SJ1prFQ2XvwcGwR%2BbthdADCIYnwBnaRH1FNfP14FauR4GhDuWZONMDarCDKDF23ZmtK%2FvaFgwon9LNVJTCKd7pUQJWubKO%2BF95GEp0EJUpZfnbBjgZPviV5M0M0vfGTfCkeWE%2BHBfPAgKmmXWtAXeMk04kk9NcnPsaR4w3jIkm%2BwZWmfT2BX2%2F%2B5VxOGwphJADgi6uwOjQu9JPpWZ0UrXFXp1BGuOGR6nexBOJ9toncPijCsfW58qfA8oUw6LP6zwY6pgEVEtzO%2Fgli5ooQGCOgVgHTiwofwtXUaddr6nX1kHSDl26Xefm%2BkyzwIcCFD0VbTKkeGXNGEYjsFMjy1Kow%2Fd96bUiTEimTQPhOlTk9vTpC3hoJ6Vdlm%2FZBPYPc6%2Bh2GoboFNW9lKmNWTz3JdFxn%2BNFKNUstQgnJ7ja1zPcBMctZs6T%2F2oN0SDGWfdHR%2BJ27rTmvSdVOBVT2DE8yQMXiSSjqAnPcDjT&X-Amz-Signature=cdd3c1b531051ede3db10310a6d1306c5eb83edf8f73ea6b42b86d1d162f2dbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Under `xacro:wheel` lets add the caster wheel at the front of the robot. The robot up until now should look like the image below

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml
  <!-- Caster Wheel -->
  <link name="front_caster">
    <visual>
      <geometry>
        <sphere radius="${(wheel_radius+wheel_zoff-(base_height/2))}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>
  </link>

  <joint name="caster_joint" type="fixed">
    <parent link="base_link"/>
    <child link="front_caster"/>
    <origin xyz="${caster_xoff} 0.0 ${-(base_height/2)}" rpy="0 0 0"/>
  </joint>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UHSGZIH%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDKhTmtq0i4w9AWBE67mQVypYhgUNHvFZc8XvL%2FVtKnEQIgHz5nzNHNIOgELuNWWCjB9h5rcte8%2FQSkMWgW4ZwwrJEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWJUj%2Fndd%2B9DN1xkircA3%2BdvhipCZxaSCtubI8%2Bf1Dda1w7smSrkacON4lIkrxM2TdO%2B0i6R5RQxC0CKCjjpQPfu1O5lH45enqjXHZ4wmrnX1JYZTKywyBUPMW5KXzYnBujGyUWe9VQJ2EI2G79BL4y0sA29HUKZT2ICJmiXJIerdvIWNtrMbdAjbFLIXlleumeUaXkP5Vw61kf3GZfjr4PB2IAygeu10AIauKYzFK0ovFwl%2FZ2NCDEXl2dLag%2BWI1OjmZKUOcSLIsYGIk8vthFOTQfuvVrHb7kQFm5RR9YcofgT2sGm44aGlpm9iwJErCmoJajnDh3TQp5IJqGR9BLFcmUheALtfqQxcPIIno5D08DqTWP4yufFjB7wDrNaCmnazeyu697EB20OqYs4IKRsUBQ4cRbg9Hqo01w4YJkeP4LGFpi9oRx6f7Od9FoH%2BYtboKa9x3skQkJmriB2riXSnYxrVTuA8lIxDFbSZQbv1zE3TUZSgJky54nHTVENL2%2B%2BFcIWt4vxMPPBrZ9DxaKFHClt%2BfSElRY3RJ6ittWuArPo1JB%2BviEKkBJx8RjKbbjofd2mclRzzUmExLrDGvuGlnE6rOTxYio3vBc0H3KshTeXwJm%2F4E0ZpNIr5PPgI87JtCcq4ACb5V9MImz%2Bs8GOqUBo5sdRRvGCBtgBk%2FfhgDGwvG6KZZCHsys7ObCa3DMWfG0AsiEWyOCwVqzdJlLHtMKuqVrBnaf0ypMIjuOYs4CUzpSjDHWyZ9Gb9%2FXDSM%2FnQuoFdhdaThtJvcoen7mbISTUBivjPSEeuc%2FmDkUvA8TROpn%2FYbxtOd51BMPdQIksXtgBKvJ2ISgySLCc7NVtek1pBpbaKre8q7iqJz5TJVvPgjrbqis&X-Amz-Signature=d8725c7496361fc77b08a3e5eb1a3a399e6aeb987d80f1d12b269459fe1ec764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLFKWASG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBq44FSKhFzrdfEm370SsPG9MAaVUijH39xl1oIWegxFAiBXgzldgOcRGYkh3e8dRYXqvmfaRSEN6cN%2Bd5nqkKHAfiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj5JiU9CqI0MsQ%2FIHKtwDph3atsZ1%2FKWYoPb3wFTQNYEfca4%2BbkD0E5EnHA5W8fqdyZkl1%2FiPqst8vxMo9wLujG93BOzUAUMZQ9Q%2BFAVHc3g8EtpxxzCmSZeRNkReGBRBY7raw4Pg8fJ6AJ5axA1kxrDCK%2BYamUiZJ%2FAuiKybOZ4C7w4G95FFKOTdZt%2B5FoTXlXuIfkgvU38K%2BShKCqKF6M%2BZsC7MamsUNV3bqCMW7ZJAnSOF1NM4b%2F9VlI6rCp%2FsoMHp4HTsNlzUn40Jd5mEp7ZnBacqrNZbRh0sSdo2BTv4MpCtp1CjNB8ZC6Ohs%2BD%2F2In76hJxfeHp6TgirGNSq%2F4CzIU4X9zslTJ%2FT%2B6MXgWahl2OkiAquURroSFy36EWwJCU%2F2%2FT6DGZMuRM61yX9SJ1prFQ2XvwcGwR%2BbthdADCIYnwBnaRH1FNfP14FauR4GhDuWZONMDarCDKDF23ZmtK%2FvaFgwon9LNVJTCKd7pUQJWubKO%2BF95GEp0EJUpZfnbBjgZPviV5M0M0vfGTfCkeWE%2BHBfPAgKmmXWtAXeMk04kk9NcnPsaR4w3jIkm%2BwZWmfT2BX2%2F%2B5VxOGwphJADgi6uwOjQu9JPpWZ0UrXFXp1BGuOGR6nexBOJ9toncPijCsfW58qfA8oUw6LP6zwY6pgEVEtzO%2Fgli5ooQGCOgVgHTiwofwtXUaddr6nX1kHSDl26Xefm%2BkyzwIcCFD0VbTKkeGXNGEYjsFMjy1Kow%2Fd96bUiTEimTQPhOlTk9vTpC3hoJ6Vdlm%2FZBPYPc6%2Bh2GoboFNW9lKmNWTz3JdFxn%2BNFKNUstQgnJ7ja1zPcBMctZs6T%2F2oN0SDGWfdHR%2BJ27rTmvSdVOBVT2DE8yQMXiSSjqAnPcDjT&X-Amz-Signature=ca12fe4d0bb64a3d9f71f3fe832bc0b09ad2812f331ab9a980128afe36dd808e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}code up until this point{{< /markdownify >}}</summary>
  
<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml
<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">

  <!-- Define robot constants -->
  <xacro:property name="base_width" value="0.31"/>
  <xacro:property name="base_length" value="0.42"/>
  <xacro:property name="base_height" value="0.18"/>

  <xacro:property name="wheel_radius" value="0.10"/>
  <xacro:property name="wheel_width" value="0.04"/>
  <xacro:property name="wheel_ygap" value="0.025"/>
  <xacro:property name="wheel_zoff" value="0.05"/>
  <xacro:property name="wheel_xoff" value="0.12"/>

  <xacro:property name="caster_xoff" value="0.14"/>

  <!-- Robot Base -->
  <link name="base_link">
    <visual>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>
    
  </link>

  <!-- Robot Footprint -->
  <link name="base_footprint"/>

  <joint name="base_joint" type="fixed">
    <parent link="base_link"/>
    <child link="base_footprint"/>
    <origin xyz="0.0 0.0 ${-(wheel_radius+wheel_zoff)}" rpy="0 0 0"/>
  </joint>

  <!-- Wheels -->
  <xacro:macro name="wheel" params="prefix x_reflect y_reflect">
    <link name="${prefix}_link">
      <visual>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
            <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
        <material name="Gray">
          <color rgba="0.5 0.5 0.5 1.0"/>
        </material>
      </visual>
    </link>

    <joint name="${prefix}_joint" type="continuous">
      <parent link="base_link"/>
      <child link="${prefix}_link"/>
      <origin xyz="${x_reflect*wheel_xoff} ${y_reflect*(base_width/2+wheel_ygap)} ${-wheel_zoff}" rpy="0 0 0"/>
      <axis xyz="0 1 0"/>
    </joint>
  </xacro:macro>

  <xacro:wheel prefix="drivewhl_l" x_reflect="-1" y_reflect="1" />
  <xacro:wheel prefix="drivewhl_r" x_reflect="-1" y_reflect="-1" />

    <!-- Caster Wheel -->
  <link name="front_caster">
    <visual>
      <geometry>
        <sphere radius="${(wheel_radius+wheel_zoff-(base_height/2))}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>
  </link>

  <joint name="caster_joint" type="fixed">
    <parent link="base_link"/>
    <child link="front_caster"/>
    <origin xyz="${caster_xoff} 0.0 ${-(base_height/2)}" rpy="0 0 0"/>
  </joint>

</robot>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BFODSKE%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQC48wk3AKQCqxhJJk4rjFSEm6V3K7zmq12lGh4Qnfb3ugIhAOpfIybMzyGVzgeWjLm12EAelL%2BiPCQWjmGZkadQf9BmKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRiUgO1ETCJofRh0wq3ANPOo5%2B7TdPpVE3khYdJ9Pwj864cNMlQc4S4bYdt5Y6hREWgREBxbsNbCg%2FwlN0Ta5%2Bqba6knxSnKQTn%2BLLdiydZqe9SrSor8KMJ9aowCtZBjLyhXqX86nE9NrbsuLV%2BibLTdoEZ9S7LOivcUNk0SwV3MkhgN74NOe%2BiUDwd3SUo5D8slRcIDEt7UIwm7pkhvt3VbxwuVdjmbRKIAiPr7bbcL7BjU4rGu4nKpPOrEYweyKZK%2FTrAQAPLvRzF60JfwaOhh51APd1LjqZRo3UZVF%2BK5GQXz2aB5Cx3HyPGmBAMNN66vREAlNzUTPbJGPha2%2FyVN8yzzkw10ZF61VBtnA6P9p%2FFoMmcyH4vAdYLkBhXy7gMilDdl60GbX%2Bc%2B9rhRoxzGiORZ6eOt6W3v1frTWRVzt%2Fo%2BH6Zu5hxIgMmZwCywPVzGM%2FQ%2BjYQZUB2Efl5LwQPH%2BzBdOnX2YISQgo18ofTjUUgRgbXiD6qItmW8L50fceJIhzJANW1aryvIbjUmj1EKCIeBbB0eD5sbet5ELLPWWGbKpEpu%2FpujWuvx2FtcuxFoNroLZ6y4wD6rRN9RvLRFQgL0MAqggHPRV3TMvEUmYixeOdUfSSrMU%2FgrBvD0hq6VhTs9EATmLQJTDYsfrPBjqkAdKbtFp1%2B%2BC8Vz%2BpdDDvTe%2BZLexiZMUsoyJM84YQTdJrDb5lRJK2dfR3vQy39cTgdLQpUyGG4654SJXFFPzwPoqnqFzx5Lw8Whp41tP242gpKe7HaRuAVlyCNRkhTAU3JHedLaqBXl6cqYc1n6hNda7Y1K4RUeEvET7%2B90u60W4ik%2BFopFQF%2Fx8dOytPecEDtIE5vCVPyt5jYm5aiNCQOaVbXb8x&X-Amz-Signature=87fddbf673e6c0b7326d18ecdd9c34c2023ff9a6f34a8c6ad05035744cd3ff85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

</details>



### Adding Collision and Inertia

Next lets add collision and inertia to our robot. These attributes will be used in the robot simulator later in this guide.

To start lets make some `xacro:macro` to avoid repetitive code to make box, cylinder, and sphere inertia.

Place this under the constants section.

```xml
  <!-- Define inertial property macros  -->
  <xacro:macro name="box_inertia" params="m w h d">
    <inertial>
      <origin xyz="0 0 0" rpy="${pi/2} 0 ${pi/2}"/>
      <mass value="${m}"/>
      <inertia ixx="${(m/12) * (h*h + d*d)}" ixy="0.0" ixz="0.0" iyy="${(m/12) * (w*w + d*d)}" iyz="0.0" izz="${(m/12) * (w*w + h*h)}"/>
    </inertial>
  </xacro:macro>

  <xacro:macro name="cylinder_inertia" params="m r h">
    <inertial>
      <origin xyz="0 0 0" rpy="${pi/2} 0 0" />
      <mass value="${m}"/>
      <inertia ixx="${(m/12) * (3*r*r + h*h)}" ixy = "0" ixz = "0" iyy="${(m/12) * (3*r*r + h*h)}" iyz = "0" izz="${(m/2) * (r*r)}"/>
    </inertial>
  </xacro:macro>

  <xacro:macro name="sphere_inertia" params="m r">
    <inertial>
      <mass value="${m}"/>
      <inertia ixx="${(2/5) * m * (r*r)}" ixy="0.0" ixz="0.0" iyy="${(2/5) * m * (r*r)}" iyz="0.0" izz="${(2/5) * m * (r*r)}"/>
    </inertial>
  </xacro:macro>
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLFKWASG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBq44FSKhFzrdfEm370SsPG9MAaVUijH39xl1oIWegxFAiBXgzldgOcRGYkh3e8dRYXqvmfaRSEN6cN%2Bd5nqkKHAfiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj5JiU9CqI0MsQ%2FIHKtwDph3atsZ1%2FKWYoPb3wFTQNYEfca4%2BbkD0E5EnHA5W8fqdyZkl1%2FiPqst8vxMo9wLujG93BOzUAUMZQ9Q%2BFAVHc3g8EtpxxzCmSZeRNkReGBRBY7raw4Pg8fJ6AJ5axA1kxrDCK%2BYamUiZJ%2FAuiKybOZ4C7w4G95FFKOTdZt%2B5FoTXlXuIfkgvU38K%2BShKCqKF6M%2BZsC7MamsUNV3bqCMW7ZJAnSOF1NM4b%2F9VlI6rCp%2FsoMHp4HTsNlzUn40Jd5mEp7ZnBacqrNZbRh0sSdo2BTv4MpCtp1CjNB8ZC6Ohs%2BD%2F2In76hJxfeHp6TgirGNSq%2F4CzIU4X9zslTJ%2FT%2B6MXgWahl2OkiAquURroSFy36EWwJCU%2F2%2FT6DGZMuRM61yX9SJ1prFQ2XvwcGwR%2BbthdADCIYnwBnaRH1FNfP14FauR4GhDuWZONMDarCDKDF23ZmtK%2FvaFgwon9LNVJTCKd7pUQJWubKO%2BF95GEp0EJUpZfnbBjgZPviV5M0M0vfGTfCkeWE%2BHBfPAgKmmXWtAXeMk04kk9NcnPsaR4w3jIkm%2BwZWmfT2BX2%2F%2B5VxOGwphJADgi6uwOjQu9JPpWZ0UrXFXp1BGuOGR6nexBOJ9toncPijCsfW58qfA8oUw6LP6zwY6pgEVEtzO%2Fgli5ooQGCOgVgHTiwofwtXUaddr6nX1kHSDl26Xefm%2BkyzwIcCFD0VbTKkeGXNGEYjsFMjy1Kow%2Fd96bUiTEimTQPhOlTk9vTpC3hoJ6Vdlm%2FZBPYPc6%2Bh2GoboFNW9lKmNWTz3JdFxn%2BNFKNUstQgnJ7ja1zPcBMctZs6T%2F2oN0SDGWfdHR%2BJ27rTmvSdVOBVT2DE8yQMXiSSjqAnPcDjT&X-Amz-Signature=4d9e3c6fc9aa42fa399b8880cd564b50548bac87131a9814017346e803c85679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Next go into our `base_link` and add the collision and inertia tags.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "12-16","18-18"
  <!-- Robot Base -->
  <link name="base_link">
    <visual>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>
    
    <collision>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
    </collision>
    
    <xacro:box_inertia m="15" w="${base_width}" d="${base_length}" h="${base_height}"/>
  </link>
```

Same for our wheels:

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647CEQRDP%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCts%2BasFVZoBKobCmU6fMxW34tUnCmn49TA68puzcEegQIgTMCGOsMFULV1WRKgpd4e1t%2FIkIkILD1qAimODErnp6sqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFciIYkCrIawhO7qASrcA%2B9%2FOargIQklJpYhre4Bn1CCG7FuT35TFnZKwCvBOAOnE9i7%2Ft6xx2i56g4AdztTWz7PDuBSvfCmj2up%2BZTxs0p4kJnzSU9sXBu2IcpI5RmkWCf05WeQgLfhyBI9F%2BqmbDe1DtDHj%2B8qqbQwlKhW%2BqGodyX8GPmiV68xIyz0NM4DnOKJBSQba5XOdgI8MVG4B0iZ%2BO%2FgqZLVnBalfQ0ITFHUMjq6XUD4zbcnmOjcs9Kqhea1eozPxu52gKNv%2FhKEmKqZTwMt6p5%2B%2BhDuHCmBWhlXnkldpbx58ZsJBxhlX%2BbT4FnhlzGX1n2TomJHhi8uVU%2FkglzrWIwxaGJ4lc2qdF%2BJBNRzOYXas1gwJNntoTm%2BZoFax79LMORKGa2fZaKLWxrRtYZDSa0eA0AfMfPsWgDVoORGMe9lG5lHI3xVwKLVmfs8KPRaFLIsSjnDCtd5%2F6qwD75lUxZxZgpgaYi6XV0aMvwFS6JyAb9zm92NVCZQmyuXzM%2BJxBZi12ocJWTPL96GSTQDPfpf2PpmQAipryzAQ0%2BPiC3QnvxDVA02NF96sotVnfU2d8HcxcirCKH%2BNYs1GDhZkZO%2FuHNiWIa3F3FMyLEALRTcIkyn31nLZDbHGwkTyExTpqnr0xrZMLmy%2Bs8GOqUB%2FxhfYIkAjYTH1dwD0QZr83zMW4jj2Eewy44NyKI%2BSFuiPSq5cbGNgLobpNQAX%2Bf66C0SbUDYrJJ%2B17ZXVB0%2FeN9i4CCrZb97HL0gHMghBa5dcfSzXYctF02e%2FGzgWmVC%2B368CG7hAqMl0CdK%2BkrAk8VvBpC0bn3TackxLgXWCgMcAoNtdiTAbNlOh20stSR7h4ahYtV%2FnXrbNOHX76eSbCX1C52P&X-Amz-Signature=4765f3622451c2eca576e4e262077dcc965b74c74bd913442804dfc9caffe834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "12-19"
    <link name="${prefix}_link">
      <visual>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
            <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
        <material name="Gray">
          <color rgba="0.5 0.5 0.5 1.0"/>
        </material>
      </visual>

      <collision>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
      </collision>

      <xacro:cylinder_inertia m="0.5" r="${wheel_radius}" h="${wheel_width}"/>
    </link>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673EPNRW4%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQD9R1i99P%2BQzWmfDF5lbfzKnsj52RDRt9Lzd%2BiwqGTQxgIhAL5KwwfumYe0U9PA%2FxTWdGiTp3BVKeFb2aIw%2FADjxqV5KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynDUZToEJoCL5PwTEq3ANpWA%2Bwt9ZaHSazz1YjLE3imai5EK98iBaQY4ShclSqn%2FZbpivlm%2B05Mo2vkWvjSjO94mYKtNxsIkXochqoq2JepkU0mdBOIZZxVNXnYDriJ%2BCi7D1fCVr%2FN5QHCOLGs48Hwrk7rXY3pgEtQjlj3dfGIFUL68QvqZBsvn%2Bw4Z0i1Bp6Q6SzRvBZkndwEOZPXrr51loRY4Cs4MW0Pf%2FHV6k0PlTJqscAgMbj7hRCg%2FkNJ0GGHKXiIINWr91ptLlnH%2Brsh1kTTtvRCQPWKMuravs33Hrl6IUK9%2BaQazAzynA06o5GOfgrYhFASCp81NzhfOzfMEqUqY%2FuzILxXHpcBBx22mqfDNZnKDv584R2GXiC0tBRXEJGx5jU%2F5tBeZXCiK0oizD3TSDXEhq%2BYmTzv2vttt3Vas2DRBcaHZzB70PG6j5DtlsLOINaItPAEducs3M2NQ3MIXUFiYkgU251pUWmZxndoU9EspfiASDUWaAwp%2BcuPrq0bsYFEB8ORfTXjKm7mp%2BYjxg5CdBKNSExiBhs6cGu7iG4maiyCjRTDqiWFg%2BSd92ppxW9UJ2vd6RSyzkhX4e%2BaJA%2BPguqwEUvIgs7V%2BGJF86SAjjArwhARE7Iy0moFjU4q8rSsTjH2TD9sfrPBjqkAcl9J%2Fhw%2Bnuopi%2FDpp6xBwgYo0m2vjhbjpZ4ibYw3%2BYUzggw4eviBaGHAs%2BeLaG%2FSpVHR77MvEMSGgKg9T7Q1xHmV5EYvDx%2BxSFAv%2BQA0VzN2erJ81RFW5V9OnVQw4fm1mELzq8RMnhQO9xWJufnbPTjRm0nXueDop33u4ZV3ST0me%2FbUFud3EwtaUA1wvF08WT4Dg2VnSoAyZykJ8NI%2BSGPXPBa&X-Amz-Signature=d4f0f522174f144a6308fc365b77d46e8a3c9f7ccaed1978499725383efb7918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

and Same for the caster wheel:

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "12-19"
  <!-- Caster Wheel -->
  <link name="front_caster">
    <visual>
      <geometry>
        <sphere radius="${(wheel_radius+wheel_zoff-(base_height/2))}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <sphere radius="${(wheel_radius+wheel_zoff-(base_height/2))}"/>
      </geometry>
    </collision>

    <xacro:sphere_inertia m="0.5" r="${(wheel_radius+wheel_zoff-(base_height/2))}"/>
  </link>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLTAXG52%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDhIqxnJQa%2FvvOIjq6kJY8Fo45uAWGRgo0R7OYHv1ydjgIgVYLMgi4N4v6hW2O8LBAA181lJsN%2FIdSIHND241fRbhYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3bCxNzeut6vxeGOSrcA1RyU4WpSl4dQDch%2B7s9oOH2EoIjq1J8eRn%2BH54Y%2FoQgr1BSBJYDQGLLq74H%2Fvv0EWjU6H%2FaAt3tqwrkyXAASLx2OIDQECP088VeUQi23BU3JCZWqfPFPs8mMPBGo5soNQBDWWoPCVGZ6sH2yqDjw2EIQAfPluO5eA3I939jVII4HXzTN5OGw4KMC8NlAo1UkWF%2FYnq2WY4CfAZxahzS6J2%2B1X8pJ7lQS58BCV4yIGYjmsgubVyB9T7E53Bvg8exSA%2FjKeW7ZwdhxN1JwWLk3smAOhaXECkFGC8bJoqNMBQCimFz7txbJsGU09hPVUEtyLleiylnkBM1VPM%2Fp%2FB%2FGS0%2B6pmASNP%2BIojsNzruW7l05IoaNd3B3BUDhv83tQX9Nx3xtN3FkPdz5KywWOlxrUB%2FwUPm4WTWkLV5KHCGnwCQCVWBji1HqFwNFtbkop4Tr1%2F8Kt5dak41gMgFEaH9wsIBYIkrtimRZoZ2wZO7X5vT9BvPKpZ5%2Bxx54Q2qfBMaMRqom9706PliVvF%2B3N2HYIEb%2B597LFsxiREtXnHvUa4dQgihUDxlS46XO65AvuZxHhlm58X6b7dRA6l9JrRRRWWVCxyOrolH2Zdz6QviipYR5VuPtuBZOYaij%2BZSMN%2By%2Bs8GOqUBRkx8urYmC5p7Z71Az9uLKfw9oJrmuhHavMY3b4xCT%2F06Wj3r9PXssgeE87F9C0WVcrVs1JtpEVtNB3FCHUAYzF8V7cvMzGOa0KNaVXVzhy%2FZ7GZqNo2KhB0NLlaJ8d6uioxBIdvm%2F8etPXoxRo0YPR7ViWs0PomG0I9R6TaeeAsH5jlISCtXRVBOOGUTICPCEUmJJ1gQedAHJZXv8Z7oU%2FiBPJNM&X-Amz-Signature=955d6ae68c94cac6aade3ed6038917c1a3c95f910882aff09fc83a092aac71ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLFKWASG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBq44FSKhFzrdfEm370SsPG9MAaVUijH39xl1oIWegxFAiBXgzldgOcRGYkh3e8dRYXqvmfaRSEN6cN%2Bd5nqkKHAfiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj5JiU9CqI0MsQ%2FIHKtwDph3atsZ1%2FKWYoPb3wFTQNYEfca4%2BbkD0E5EnHA5W8fqdyZkl1%2FiPqst8vxMo9wLujG93BOzUAUMZQ9Q%2BFAVHc3g8EtpxxzCmSZeRNkReGBRBY7raw4Pg8fJ6AJ5axA1kxrDCK%2BYamUiZJ%2FAuiKybOZ4C7w4G95FFKOTdZt%2B5FoTXlXuIfkgvU38K%2BShKCqKF6M%2BZsC7MamsUNV3bqCMW7ZJAnSOF1NM4b%2F9VlI6rCp%2FsoMHp4HTsNlzUn40Jd5mEp7ZnBacqrNZbRh0sSdo2BTv4MpCtp1CjNB8ZC6Ohs%2BD%2F2In76hJxfeHp6TgirGNSq%2F4CzIU4X9zslTJ%2FT%2B6MXgWahl2OkiAquURroSFy36EWwJCU%2F2%2FT6DGZMuRM61yX9SJ1prFQ2XvwcGwR%2BbthdADCIYnwBnaRH1FNfP14FauR4GhDuWZONMDarCDKDF23ZmtK%2FvaFgwon9LNVJTCKd7pUQJWubKO%2BF95GEp0EJUpZfnbBjgZPviV5M0M0vfGTfCkeWE%2BHBfPAgKmmXWtAXeMk04kk9NcnPsaR4w3jIkm%2BwZWmfT2BX2%2F%2B5VxOGwphJADgi6uwOjQu9JPpWZ0UrXFXp1BGuOGR6nexBOJ9toncPijCsfW58qfA8oUw6LP6zwY6pgEVEtzO%2Fgli5ooQGCOgVgHTiwofwtXUaddr6nX1kHSDl26Xefm%2BkyzwIcCFD0VbTKkeGXNGEYjsFMjy1Kow%2Fd96bUiTEimTQPhOlTk9vTpC3hoJ6Vdlm%2FZBPYPc6%2Bh2GoboFNW9lKmNWTz3JdFxn%2BNFKNUstQgnJ7ja1zPcBMctZs6T%2F2oN0SDGWfdHR%2BJ27rTmvSdVOBVT2DE8yQMXiSSjqAnPcDjT&X-Amz-Signature=2548954d4785481f67a0163d1992f923db7a883a730890ee3675df2af272a939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**final code:**{{< /markdownify >}}</summary>
  
```xml
<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">

  <!-- Define robot constants -->
  <xacro:property name="base_width" value="0.31"/>
  <xacro:property name="base_length" value="0.42"/>
  <xacro:property name="base_height" value="0.18"/>

  <xacro:property name="wheel_radius" value="0.10"/>
  <xacro:property name="wheel_width" value="0.04"/>
  <xacro:property name="wheel_ygap" value="0.025"/>
  <xacro:property name="wheel_zoff" value="0.05"/>
  <xacro:property name="wheel_xoff" value="0.12"/>

  <xacro:property name="caster_xoff" value="0.14"/>

	<!-- Define inertial property macros  -->
  <xacro:macro name="box_inertia" params="m w h d">
    <inertial>
      <origin xyz="0 0 0" rpy="${pi/2} 0 ${pi/2}"/>
      <mass value="${m}"/>
      <inertia ixx="${(m/12) * (h*h + d*d)}" ixy="0.0" ixz="0.0" iyy="${(m/12) * (w*w + d*d)}" iyz="0.0" izz="${(m/12) * (w*w + h*h)}"/>
    </inertial>
  </xacro:macro>

  <xacro:macro name="cylinder_inertia" params="m r h">
    <inertial>
      <origin xyz="0 0 0" rpy="${pi/2} 0 0" />
      <mass value="${m}"/>
      <inertia ixx="${(m/12) * (3*r*r + h*h)}" ixy = "0" ixz = "0" iyy="${(m/12) * (3*r*r + h*h)}" iyz = "0" izz="${(m/2) * (r*r)}"/>
    </inertial>
  </xacro:macro>

  <xacro:macro name="sphere_inertia" params="m r">
    <inertial>
      <mass value="${m}"/>
      <inertia ixx="${(2/5) * m * (r*r)}" ixy="0.0" ixz="0.0" iyy="${(2/5) * m * (r*r)}" iyz="0.0" izz="${(2/5) * m * (r*r)}"/>
    </inertial>
  </xacro:macro>


  <!-- Robot Base -->
  <link name="base_link">
    <visual>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>
   
    <collision>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
    </collision>

    <xacro:box_inertia m="15" w="${base_width}" d="${base_length}" h="${base_height}"/>
  </link>

  <!-- Robot Footprint -->
  <link name="base_footprint">
    <xacro:box_inertia m="15" w="${base_width}" d="${base_length}" h="${base_height}"/>
  </link>

  <joint name="base_joint" type="fixed">
    <parent link="base_link"/>
    <child link="base_footprint"/>
    <origin xyz="0.0 0.0 ${-(wheel_radius+wheel_zoff)}" rpy="0 0 0"/>
  </joint>


  <!-- Wheels -->
  <xacro:macro name="wheel" params="prefix x_reflect y_reflect">
    <link name="${prefix}_link">
      <visual>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
            <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
        <material name="Gray">
          <color rgba="0.5 0.5 0.5 1.0"/>
        </material>
      </visual>
      
      <collision>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
      </collision>

      <xacro:cylinder_inertia m="0.5" r="${wheel_radius}" h="${wheel_width}"/>
    </link>

    <joint name="${prefix}_joint" type="continuous">
      <parent link="base_link"/>
      <child link="${prefix}_link"/>
      <origin xyz="${x_reflect*wheel_xoff} ${y_reflect*(base_width/2+wheel_ygap)} ${-wheel_zoff}" rpy="0 0 0"/>
      <axis xyz="0 1 0"/>
    </joint>
  </xacro:macro>

  <xacro:wheel prefix="drivewhl_l" x_reflect="-1" y_reflect="1" />
  <xacro:wheel prefix="drivewhl_r" x_reflect="-1" y_reflect="-1" />

    <!-- Caster Wheel -->
  <link name="front_caster">
    <visual>
      <geometry>
        <sphere radius="${(wheel_radius+wheel_zoff-(base_height/2))}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>
    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <sphere radius="${(wheel_radius+wheel_zoff-(base_height/2))}"/>
      </geometry>
    </collision>

  </link>

  <joint name="caster_joint" type="fixed">
    <parent link="base_link"/>
    <child link="front_caster"/>
    <origin xyz="${caster_xoff} 0.0 ${-(base_height/2)}" rpy="0 0 0"/>
  </joint>

</robot>
```

</details>



# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLFKWASG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBq44FSKhFzrdfEm370SsPG9MAaVUijH39xl1oIWegxFAiBXgzldgOcRGYkh3e8dRYXqvmfaRSEN6cN%2Bd5nqkKHAfiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj5JiU9CqI0MsQ%2FIHKtwDph3atsZ1%2FKWYoPb3wFTQNYEfca4%2BbkD0E5EnHA5W8fqdyZkl1%2FiPqst8vxMo9wLujG93BOzUAUMZQ9Q%2BFAVHc3g8EtpxxzCmSZeRNkReGBRBY7raw4Pg8fJ6AJ5axA1kxrDCK%2BYamUiZJ%2FAuiKybOZ4C7w4G95FFKOTdZt%2B5FoTXlXuIfkgvU38K%2BShKCqKF6M%2BZsC7MamsUNV3bqCMW7ZJAnSOF1NM4b%2F9VlI6rCp%2FsoMHp4HTsNlzUn40Jd5mEp7ZnBacqrNZbRh0sSdo2BTv4MpCtp1CjNB8ZC6Ohs%2BD%2F2In76hJxfeHp6TgirGNSq%2F4CzIU4X9zslTJ%2FT%2B6MXgWahl2OkiAquURroSFy36EWwJCU%2F2%2FT6DGZMuRM61yX9SJ1prFQ2XvwcGwR%2BbthdADCIYnwBnaRH1FNfP14FauR4GhDuWZONMDarCDKDF23ZmtK%2FvaFgwon9LNVJTCKd7pUQJWubKO%2BF95GEp0EJUpZfnbBjgZPviV5M0M0vfGTfCkeWE%2BHBfPAgKmmXWtAXeMk04kk9NcnPsaR4w3jIkm%2BwZWmfT2BX2%2F%2B5VxOGwphJADgi6uwOjQu9JPpWZ0UrXFXp1BGuOGR6nexBOJ9toncPijCsfW58qfA8oUw6LP6zwY6pgEVEtzO%2Fgli5ooQGCOgVgHTiwofwtXUaddr6nX1kHSDl26Xefm%2BkyzwIcCFD0VbTKkeGXNGEYjsFMjy1Kow%2Fd96bUiTEimTQPhOlTk9vTpC3hoJ6Vdlm%2FZBPYPc6%2Bh2GoboFNW9lKmNWTz3JdFxn%2BNFKNUstQgnJ7ja1zPcBMctZs6T%2F2oN0SDGWfdHR%2BJ27rTmvSdVOBVT2DE8yQMXiSSjqAnPcDjT&X-Amz-Signature=c4c6f1737f4eb8e139538fc3c807fe119911cd6170c69f6a74158a9c14c3e37c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}


#### Outputs:

| **Name**             | **Type** |
| -------------------- | -------- |
| `/tf`                |          |
| `/robot_description` |          |

#### Params:

| **Name**            | **Type** |
| ------------------- | -------- |
| `robot_description` | file     |
| `use_sim_time`      | bool     |

#### description:

Node that takes in the `urdf` and puts it into ROS

Takes 2 major inputs:

- `urdf` file and publishes all transforms in the `/tf` topic
- `/joint_states` topic that takes in all the states of joints in the `urdf`

{{% /alert %}}

{{% alert icon=”👾” context="success" %}}

### **New Node** **`joint`**_**`_`**_**`state_publisher_gui`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THGVOCZR%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIHunlpQeKUdo99EP8f3NHlizRmESTBIIKJM9fSO1syLOAiEAnXbe9TdKrK1SLVgZrUZn3ki2b10MXWPWJTSgEU3eGxUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAMfzk%2Fv64tjazQcCrcA6AhnLq0twDO5i%2BONn7JJ0eeQ6STuXNZSGzmqtHy%2FcGX1%2BxlT6IyoLelNpJDNRUQy%2B9g30ZeikqkUObp4hyNvqvHFQU72wdP4FqLXIznE9rwOQEj4ACBV0NxFHSBL41LG0YhqwqQP0Elup%2BbFSTZQCA9diNKmzZzDYWxIO5mLsn%2F%2BFOs9UXWUx4GqY9yy1LMTKWZ6Ap8ZOK7D7PxlENztcYhuptVwErFovWaZlk1VRy7%2Be8uGalSpMOnfor5pvYt4pBw2MqJQKqqf6D23lB1As%2FScsXjJ0kIIjzeY17dAkVwQpBEa2PWtH9jjw0djKQ%2FE%2BA46gnxqTvq3NRPZ8O%2Bp3MzvkZueC3kIKZbyFLedPdH0AAfeWIbwzrGXuh%2FoAngywCIPWnViG8qCVRpoXBwVNSYgT6da6kFgeUoK4%2FuntkkhuSzj4XKrlAKt9wOQV9tRsWKOurWTGFpypVLsbS2iB5azDUc%2BeGRGcfd9VsytOmx58%2FEfoaQGx5sV%2FtKgO%2Fg2obETekYZRGed%2F3GE5NiRfOtRXBd7PiDN9mxEghVR1Qv52DMUC%2FhZtqIvKGhoqVtChm%2Bni2DziZohho%2FuiUX2dXN4LHdiuUPDoRH5rLJwE0ByoP6o%2FkZrRomuqW5MMix%2Bs8GOqUBcvHFqD%2FiAC3eu%2BywE6z0pUXq2MbOR%2Bx%2FYY1%2FwsAq2jYqKACUpy9CBFtVKMK0lb0QQ2KMTatodsLPpBT369Z8cnK1OstFFahLAGYPSlxMRpamzJ1YVpzUlEqqOcQeQl4J7RaJjNDq%2F2ItZiqBTT%2FSqlrssGbwhjwfzOtMKIoxFwQzvcHhqPnZlKae4Qi%2FsQ0Akk1CGwZyrBSBeXWXXcprKVehCY%2FB&X-Amz-Signature=484c7a68be4f3caa6a6de2eb5bdb7f206f4cf4b846db065d4d8c628ba38e0997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

| **Name**             | **Type** |
| -------------------- | -------- |
| `/robot_description` |          |

#### Outputs:

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

#### description:

lets you debug your `urdf` to see if all your joints work correctly.

Takes `/robot_description` from `robot_state_publisher` and outputs `/joint_states` with adjustable sliders

designed to be replaced by a physical robot or a simulated robot node

{{% /alert %}}

## Current Node diagram

With the two nodes we are going to make this diagram:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THGVOCZR%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIHunlpQeKUdo99EP8f3NHlizRmESTBIIKJM9fSO1syLOAiEAnXbe9TdKrK1SLVgZrUZn3ki2b10MXWPWJTSgEU3eGxUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAMfzk%2Fv64tjazQcCrcA6AhnLq0twDO5i%2BONn7JJ0eeQ6STuXNZSGzmqtHy%2FcGX1%2BxlT6IyoLelNpJDNRUQy%2B9g30ZeikqkUObp4hyNvqvHFQU72wdP4FqLXIznE9rwOQEj4ACBV0NxFHSBL41LG0YhqwqQP0Elup%2BbFSTZQCA9diNKmzZzDYWxIO5mLsn%2F%2BFOs9UXWUx4GqY9yy1LMTKWZ6Ap8ZOK7D7PxlENztcYhuptVwErFovWaZlk1VRy7%2Be8uGalSpMOnfor5pvYt4pBw2MqJQKqqf6D23lB1As%2FScsXjJ0kIIjzeY17dAkVwQpBEa2PWtH9jjw0djKQ%2FE%2BA46gnxqTvq3NRPZ8O%2Bp3MzvkZueC3kIKZbyFLedPdH0AAfeWIbwzrGXuh%2FoAngywCIPWnViG8qCVRpoXBwVNSYgT6da6kFgeUoK4%2FuntkkhuSzj4XKrlAKt9wOQV9tRsWKOurWTGFpypVLsbS2iB5azDUc%2BeGRGcfd9VsytOmx58%2FEfoaQGx5sV%2FtKgO%2Fg2obETekYZRGed%2F3GE5NiRfOtRXBd7PiDN9mxEghVR1Qv52DMUC%2FhZtqIvKGhoqVtChm%2Bni2DziZohho%2FuiUX2dXN4LHdiuUPDoRH5rLJwE0ByoP6o%2FkZrRomuqW5MMix%2Bs8GOqUBcvHFqD%2FiAC3eu%2BywE6z0pUXq2MbOR%2Bx%2FYY1%2FwsAq2jYqKACUpy9CBFtVKMK0lb0QQ2KMTatodsLPpBT369Z8cnK1OstFFahLAGYPSlxMRpamzJ1YVpzUlEqqOcQeQl4J7RaJjNDq%2F2ItZiqBTT%2FSqlrssGbwhjwfzOtMKIoxFwQzvcHhqPnZlKae4Qi%2FsQ0Akk1CGwZyrBSBeXWXXcprKVehCY%2FB&X-Amz-Signature=d48a3f7a82706904d55d4cdb26abc7499f9f590780756ee1b4ae34e8f11044d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THGVOCZR%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIHunlpQeKUdo99EP8f3NHlizRmESTBIIKJM9fSO1syLOAiEAnXbe9TdKrK1SLVgZrUZn3ki2b10MXWPWJTSgEU3eGxUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAMfzk%2Fv64tjazQcCrcA6AhnLq0twDO5i%2BONn7JJ0eeQ6STuXNZSGzmqtHy%2FcGX1%2BxlT6IyoLelNpJDNRUQy%2B9g30ZeikqkUObp4hyNvqvHFQU72wdP4FqLXIznE9rwOQEj4ACBV0NxFHSBL41LG0YhqwqQP0Elup%2BbFSTZQCA9diNKmzZzDYWxIO5mLsn%2F%2BFOs9UXWUx4GqY9yy1LMTKWZ6Ap8ZOK7D7PxlENztcYhuptVwErFovWaZlk1VRy7%2Be8uGalSpMOnfor5pvYt4pBw2MqJQKqqf6D23lB1As%2FScsXjJ0kIIjzeY17dAkVwQpBEa2PWtH9jjw0djKQ%2FE%2BA46gnxqTvq3NRPZ8O%2Bp3MzvkZueC3kIKZbyFLedPdH0AAfeWIbwzrGXuh%2FoAngywCIPWnViG8qCVRpoXBwVNSYgT6da6kFgeUoK4%2FuntkkhuSzj4XKrlAKt9wOQV9tRsWKOurWTGFpypVLsbS2iB5azDUc%2BeGRGcfd9VsytOmx58%2FEfoaQGx5sV%2FtKgO%2Fg2obETekYZRGed%2F3GE5NiRfOtRXBd7PiDN9mxEghVR1Qv52DMUC%2FhZtqIvKGhoqVtChm%2Bni2DziZohho%2FuiUX2dXN4LHdiuUPDoRH5rLJwE0ByoP6o%2FkZrRomuqW5MMix%2Bs8GOqUBcvHFqD%2FiAC3eu%2BywE6z0pUXq2MbOR%2Bx%2FYY1%2FwsAq2jYqKACUpy9CBFtVKMK0lb0QQ2KMTatodsLPpBT369Z8cnK1OstFFahLAGYPSlxMRpamzJ1YVpzUlEqqOcQeQl4J7RaJjNDq%2F2ItZiqBTT%2FSqlrssGbwhjwfzOtMKIoxFwQzvcHhqPnZlKae4Qi%2FsQ0Akk1CGwZyrBSBeXWXXcprKVehCY%2FB&X-Amz-Signature=c09bc4230ebfdd19edfce5421219b656a039551477f02e0c4e497e9034e5968e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THGVOCZR%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIHunlpQeKUdo99EP8f3NHlizRmESTBIIKJM9fSO1syLOAiEAnXbe9TdKrK1SLVgZrUZn3ki2b10MXWPWJTSgEU3eGxUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAMfzk%2Fv64tjazQcCrcA6AhnLq0twDO5i%2BONn7JJ0eeQ6STuXNZSGzmqtHy%2FcGX1%2BxlT6IyoLelNpJDNRUQy%2B9g30ZeikqkUObp4hyNvqvHFQU72wdP4FqLXIznE9rwOQEj4ACBV0NxFHSBL41LG0YhqwqQP0Elup%2BbFSTZQCA9diNKmzZzDYWxIO5mLsn%2F%2BFOs9UXWUx4GqY9yy1LMTKWZ6Ap8ZOK7D7PxlENztcYhuptVwErFovWaZlk1VRy7%2Be8uGalSpMOnfor5pvYt4pBw2MqJQKqqf6D23lB1As%2FScsXjJ0kIIjzeY17dAkVwQpBEa2PWtH9jjw0djKQ%2FE%2BA46gnxqTvq3NRPZ8O%2Bp3MzvkZueC3kIKZbyFLedPdH0AAfeWIbwzrGXuh%2FoAngywCIPWnViG8qCVRpoXBwVNSYgT6da6kFgeUoK4%2FuntkkhuSzj4XKrlAKt9wOQV9tRsWKOurWTGFpypVLsbS2iB5azDUc%2BeGRGcfd9VsytOmx58%2FEfoaQGx5sV%2FtKgO%2Fg2obETekYZRGed%2F3GE5NiRfOtRXBd7PiDN9mxEghVR1Qv52DMUC%2FhZtqIvKGhoqVtChm%2Bni2DziZohho%2FuiUX2dXN4LHdiuUPDoRH5rLJwE0ByoP6o%2FkZrRomuqW5MMix%2Bs8GOqUBcvHFqD%2FiAC3eu%2BywE6z0pUXq2MbOR%2Bx%2FYY1%2FwsAq2jYqKACUpy9CBFtVKMK0lb0QQ2KMTatodsLPpBT369Z8cnK1OstFFahLAGYPSlxMRpamzJ1YVpzUlEqqOcQeQl4J7RaJjNDq%2F2ItZiqBTT%2FSqlrssGbwhjwfzOtMKIoxFwQzvcHhqPnZlKae4Qi%2FsQ0Akk1CGwZyrBSBeXWXXcprKVehCY%2FB&X-Amz-Signature=f64ad207389e9ada72bcd821c27555bb50ba89bc1a67b0dc637910c70fe51bb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QADQ5AXD%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDqdrzhWDWEG7pOooK%2Bt0kSNAuwn9W3On%2B7HxCvMvh7VwIhAPwZNkXmP%2BWPmSSutsYUr6V7AIuAd4DLQawqKBSstCu1KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4pNbvyCKrxjeOcF0q3AMyC16FDPeu%2B9NjgYt2UECD8bDA6KH7wC66ahvyrrE4Z6jcwYdbEcjHsIIatHZujtk83N6oV%2BaZvC%2FehrJ4tGvylZDCzdMjRUeSvtI4daTkyt4h1ANiUhS9EFDdmUbRc%2FznCXJikx1PYsOC1mT2qpdzgpIgyaYAP%2Bejc6QYOyNmw%2Bi90V23bkRnGIgCX2lzs06%2BaMw%2BL0eiMEbadFlWxtqXAr%2BeJ9EDnOIld3XLZB2LfUAyw8HIXTcyGiH5HvjbTy7Plm3ZCd5tuwO8amxtpS1hBkZloO7T3yL6n%2BlOLWtEY70yWtIFDSoqErD6lGJkID1JoMCgDPO2xOb3YN9sFEHr%2F1k1myDkAsuujnqa1f9LYfaex3IqN%2Fx6NWmxvKZtcPitsZFh1MaaSQ3hk3eFTYo%2FqplOcszlzDY9jliV5fR97qFQidsW5rgGJ%2BqdERzG1lURPTcxXUSA4Rsbu9NEiQbyHPHle3Dln%2FeDIkqhSJTwDiSAOmuPvY0VRIJOkUv7J9LgFze37OyKOcM9pGLo9tXoHIkKGRdZWd01PV5kyh0dvOeaXDaLB5jOPGzj%2BpYSiwgIEggQoAk1iPficj%2BlkQR6HO063eKYlKmAgpkPe9fnD6SXgBTmYIv0osQC%2BDCTsfrPBjqkAasZDRxtIkURyAs97A8TaxF4Jc0UY8gxKWuaf%2FoK%2BIWlyBzMnTWhFf3%2F1YqaQMNdlDgZgCr4gy6029UvHN1y6jk854nerr0eskFD7GYTJtOTK4o31KHlZht3jwk13wNSoO9G%2Fq3%2BYNCWH3iBkGg1UUTUxIN6bnxe33GMU2qjw8CPuG3ls8hWBx%2FkXRYdp9WF0CLW7NmsVJPNIaHUXRMyWE0JJFAL&X-Amz-Signature=a87d5691c28e02a1f98f76b62ddd3dd7c33cfc134f8e2eb515c95d5cb9183c35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THGVOCZR%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIHunlpQeKUdo99EP8f3NHlizRmESTBIIKJM9fSO1syLOAiEAnXbe9TdKrK1SLVgZrUZn3ki2b10MXWPWJTSgEU3eGxUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAMfzk%2Fv64tjazQcCrcA6AhnLq0twDO5i%2BONn7JJ0eeQ6STuXNZSGzmqtHy%2FcGX1%2BxlT6IyoLelNpJDNRUQy%2B9g30ZeikqkUObp4hyNvqvHFQU72wdP4FqLXIznE9rwOQEj4ACBV0NxFHSBL41LG0YhqwqQP0Elup%2BbFSTZQCA9diNKmzZzDYWxIO5mLsn%2F%2BFOs9UXWUx4GqY9yy1LMTKWZ6Ap8ZOK7D7PxlENztcYhuptVwErFovWaZlk1VRy7%2Be8uGalSpMOnfor5pvYt4pBw2MqJQKqqf6D23lB1As%2FScsXjJ0kIIjzeY17dAkVwQpBEa2PWtH9jjw0djKQ%2FE%2BA46gnxqTvq3NRPZ8O%2Bp3MzvkZueC3kIKZbyFLedPdH0AAfeWIbwzrGXuh%2FoAngywCIPWnViG8qCVRpoXBwVNSYgT6da6kFgeUoK4%2FuntkkhuSzj4XKrlAKt9wOQV9tRsWKOurWTGFpypVLsbS2iB5azDUc%2BeGRGcfd9VsytOmx58%2FEfoaQGx5sV%2FtKgO%2Fg2obETekYZRGed%2F3GE5NiRfOtRXBd7PiDN9mxEghVR1Qv52DMUC%2FhZtqIvKGhoqVtChm%2Bni2DziZohho%2FuiUX2dXN4LHdiuUPDoRH5rLJwE0ByoP6o%2FkZrRomuqW5MMix%2Bs8GOqUBcvHFqD%2FiAC3eu%2BywE6z0pUXq2MbOR%2Bx%2FYY1%2FwsAq2jYqKACUpy9CBFtVKMK0lb0QQ2KMTatodsLPpBT369Z8cnK1OstFFahLAGYPSlxMRpamzJ1YVpzUlEqqOcQeQl4J7RaJjNDq%2F2ItZiqBTT%2FSqlrssGbwhjwfzOtMKIoxFwQzvcHhqPnZlKae4Qi%2FsQ0Akk1CGwZyrBSBeXWXXcprKVehCY%2FB&X-Amz-Signature=7ef170f3a02a71fc3b45a5542a722de1295a992c6d6b6e5cfbdca7f2b56d79d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Move config.rviz

<details>
  <summary>{{< markdownify >}}What is rviz?{{< /markdownify >}}</summary>
  
TODO: explain rviz better (say how it is like ros2 echo but visual)

</details>



create `rviz` folder in `mbot_pkg` and move the `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THGVOCZR%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIHunlpQeKUdo99EP8f3NHlizRmESTBIIKJM9fSO1syLOAiEAnXbe9TdKrK1SLVgZrUZn3ki2b10MXWPWJTSgEU3eGxUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAMfzk%2Fv64tjazQcCrcA6AhnLq0twDO5i%2BONn7JJ0eeQ6STuXNZSGzmqtHy%2FcGX1%2BxlT6IyoLelNpJDNRUQy%2B9g30ZeikqkUObp4hyNvqvHFQU72wdP4FqLXIznE9rwOQEj4ACBV0NxFHSBL41LG0YhqwqQP0Elup%2BbFSTZQCA9diNKmzZzDYWxIO5mLsn%2F%2BFOs9UXWUx4GqY9yy1LMTKWZ6Ap8ZOK7D7PxlENztcYhuptVwErFovWaZlk1VRy7%2Be8uGalSpMOnfor5pvYt4pBw2MqJQKqqf6D23lB1As%2FScsXjJ0kIIjzeY17dAkVwQpBEa2PWtH9jjw0djKQ%2FE%2BA46gnxqTvq3NRPZ8O%2Bp3MzvkZueC3kIKZbyFLedPdH0AAfeWIbwzrGXuh%2FoAngywCIPWnViG8qCVRpoXBwVNSYgT6da6kFgeUoK4%2FuntkkhuSzj4XKrlAKt9wOQV9tRsWKOurWTGFpypVLsbS2iB5azDUc%2BeGRGcfd9VsytOmx58%2FEfoaQGx5sV%2FtKgO%2Fg2obETekYZRGed%2F3GE5NiRfOtRXBd7PiDN9mxEghVR1Qv52DMUC%2FhZtqIvKGhoqVtChm%2Bni2DziZohho%2FuiUX2dXN4LHdiuUPDoRH5rLJwE0ByoP6o%2FkZrRomuqW5MMix%2Bs8GOqUBcvHFqD%2FiAC3eu%2BywE6z0pUXq2MbOR%2Bx%2FYY1%2FwsAq2jYqKACUpy9CBFtVKMK0lb0QQ2KMTatodsLPpBT369Z8cnK1OstFFahLAGYPSlxMRpamzJ1YVpzUlEqqOcQeQl4J7RaJjNDq%2F2ItZiqBTT%2FSqlrssGbwhjwfzOtMKIoxFwQzvcHhqPnZlKae4Qi%2FsQ0Akk1CGwZyrBSBeXWXXcprKVehCY%2FB&X-Amz-Signature=7878f421f2fba89891d0eb3596d60d91934fa72cc55ed5c6cf1f1a3487ae9081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THGVOCZR%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIHunlpQeKUdo99EP8f3NHlizRmESTBIIKJM9fSO1syLOAiEAnXbe9TdKrK1SLVgZrUZn3ki2b10MXWPWJTSgEU3eGxUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAMfzk%2Fv64tjazQcCrcA6AhnLq0twDO5i%2BONn7JJ0eeQ6STuXNZSGzmqtHy%2FcGX1%2BxlT6IyoLelNpJDNRUQy%2B9g30ZeikqkUObp4hyNvqvHFQU72wdP4FqLXIznE9rwOQEj4ACBV0NxFHSBL41LG0YhqwqQP0Elup%2BbFSTZQCA9diNKmzZzDYWxIO5mLsn%2F%2BFOs9UXWUx4GqY9yy1LMTKWZ6Ap8ZOK7D7PxlENztcYhuptVwErFovWaZlk1VRy7%2Be8uGalSpMOnfor5pvYt4pBw2MqJQKqqf6D23lB1As%2FScsXjJ0kIIjzeY17dAkVwQpBEa2PWtH9jjw0djKQ%2FE%2BA46gnxqTvq3NRPZ8O%2Bp3MzvkZueC3kIKZbyFLedPdH0AAfeWIbwzrGXuh%2FoAngywCIPWnViG8qCVRpoXBwVNSYgT6da6kFgeUoK4%2FuntkkhuSzj4XKrlAKt9wOQV9tRsWKOurWTGFpypVLsbS2iB5azDUc%2BeGRGcfd9VsytOmx58%2FEfoaQGx5sV%2FtKgO%2Fg2obETekYZRGed%2F3GE5NiRfOtRXBd7PiDN9mxEghVR1Qv52DMUC%2FhZtqIvKGhoqVtChm%2Bni2DziZohho%2FuiUX2dXN4LHdiuUPDoRH5rLJwE0ByoP6o%2FkZrRomuqW5MMix%2Bs8GOqUBcvHFqD%2FiAC3eu%2BywE6z0pUXq2MbOR%2Bx%2FYY1%2FwsAq2jYqKACUpy9CBFtVKMK0lb0QQ2KMTatodsLPpBT369Z8cnK1OstFFahLAGYPSlxMRpamzJ1YVpzUlEqqOcQeQl4J7RaJjNDq%2F2ItZiqBTT%2FSqlrssGbwhjwfzOtMKIoxFwQzvcHhqPnZlKae4Qi%2FsQ0Akk1CGwZyrBSBeXWXXcprKVehCY%2FB&X-Amz-Signature=392d065cbed8a7922325bf73f9b6c7034cd5a21f27a6e2eec3bac2fdea45f6d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Launch file

<details>
  <summary>{{< markdownify >}}What is in this launch file?{{< /markdownify >}}</summary>
  
[launch files guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/launch-files/)

Launch files are just a scripted way of running multiple ROS nodes at the same time instead of opining multiple terminals.

</details>



This should do the same thing as running the three terminals from above

```python
import os
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument, ExecuteProcess, IncludeLaunchDescription
from launch.conditions import IfCondition, UnlessCondition
from launch.substitutions import Command, LaunchConfiguration
from launch_ros.actions import Node
from launch.launch_description_sources import PythonLaunchDescriptionSource
from ament_index_python.packages import get_package_share_directory
from ros_gz_bridge.actions import RosGzBridge
from ros_gz_sim.actions import GzServer
from launch_ros.substitutions import FindPackageShare


def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config

    robot_state_publisher_node = Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', default_model_path])}]
    )
    joint_state_publisher_gui_node = Node(
        package='joint_state_publisher_gui',
        executable='joint_state_publisher_gui',
    )
    rviz_node = Node(
        package='rviz2',
        executable='rviz2',
        output='screen',
        arguments=['-d', default_rviz_config_path],
    )

    return LaunchDescription([
        joint_state_publisher_gui_node, # debugs urdf joints
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node # starts rviz
    ])
```

## Add new files to `setup.py` 

if we add new files types to the package we need to update the `setup.py` and rebuild

```python "3-6","6-6","6-13","24-24"

from setuptools import find_packages, setup
import os
from glob import glob

package_name = 'mbot_pkg'

files = []
for full_filepath in glob('**/*.*', recursive=True):
    filepath = os.path.split(full_filepath)
    if filepath[0] != '':
        result = (os.path.join('share', package_name, filepath[0]), [full_filepath])
        files.append(result)


setup(
    name=package_name,
    version='0.0.0',
    packages=find_packages(exclude=['test']),
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
        ('share/' + package_name, ['package.xml']),
    ] + files,


...

```

**Build:**

{{% alert context="danger" %}}

## MAKE SURE YOUR RUN `colcon build` in `mbot_ws` folder!

```bash
colcon build --symlink-install
```

{{% /alert %}}

## Running

To run the code we just need to do:

```bash
ros2 launch mbot_pkg display.launch.py
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THGVOCZR%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIHunlpQeKUdo99EP8f3NHlizRmESTBIIKJM9fSO1syLOAiEAnXbe9TdKrK1SLVgZrUZn3ki2b10MXWPWJTSgEU3eGxUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAMfzk%2Fv64tjazQcCrcA6AhnLq0twDO5i%2BONn7JJ0eeQ6STuXNZSGzmqtHy%2FcGX1%2BxlT6IyoLelNpJDNRUQy%2B9g30ZeikqkUObp4hyNvqvHFQU72wdP4FqLXIznE9rwOQEj4ACBV0NxFHSBL41LG0YhqwqQP0Elup%2BbFSTZQCA9diNKmzZzDYWxIO5mLsn%2F%2BFOs9UXWUx4GqY9yy1LMTKWZ6Ap8ZOK7D7PxlENztcYhuptVwErFovWaZlk1VRy7%2Be8uGalSpMOnfor5pvYt4pBw2MqJQKqqf6D23lB1As%2FScsXjJ0kIIjzeY17dAkVwQpBEa2PWtH9jjw0djKQ%2FE%2BA46gnxqTvq3NRPZ8O%2Bp3MzvkZueC3kIKZbyFLedPdH0AAfeWIbwzrGXuh%2FoAngywCIPWnViG8qCVRpoXBwVNSYgT6da6kFgeUoK4%2FuntkkhuSzj4XKrlAKt9wOQV9tRsWKOurWTGFpypVLsbS2iB5azDUc%2BeGRGcfd9VsytOmx58%2FEfoaQGx5sV%2FtKgO%2Fg2obETekYZRGed%2F3GE5NiRfOtRXBd7PiDN9mxEghVR1Qv52DMUC%2FhZtqIvKGhoqVtChm%2Bni2DziZohho%2FuiUX2dXN4LHdiuUPDoRH5rLJwE0ByoP6o%2FkZrRomuqW5MMix%2Bs8GOqUBcvHFqD%2FiAC3eu%2BywE6z0pUXq2MbOR%2Bx%2FYY1%2FwsAq2jYqKACUpy9CBFtVKMK0lb0QQ2KMTatodsLPpBT369Z8cnK1OstFFahLAGYPSlxMRpamzJ1YVpzUlEqqOcQeQl4J7RaJjNDq%2F2ItZiqBTT%2FSqlrssGbwhjwfzOtMKIoxFwQzvcHhqPnZlKae4Qi%2FsQ0Akk1CGwZyrBSBeXWXXcprKVehCY%2FB&X-Amz-Signature=da990610a026466cc335c5aacc6d781a17e92562cb8417826b9dc8d978492989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THGVOCZR%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIHunlpQeKUdo99EP8f3NHlizRmESTBIIKJM9fSO1syLOAiEAnXbe9TdKrK1SLVgZrUZn3ki2b10MXWPWJTSgEU3eGxUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAMfzk%2Fv64tjazQcCrcA6AhnLq0twDO5i%2BONn7JJ0eeQ6STuXNZSGzmqtHy%2FcGX1%2BxlT6IyoLelNpJDNRUQy%2B9g30ZeikqkUObp4hyNvqvHFQU72wdP4FqLXIznE9rwOQEj4ACBV0NxFHSBL41LG0YhqwqQP0Elup%2BbFSTZQCA9diNKmzZzDYWxIO5mLsn%2F%2BFOs9UXWUx4GqY9yy1LMTKWZ6Ap8ZOK7D7PxlENztcYhuptVwErFovWaZlk1VRy7%2Be8uGalSpMOnfor5pvYt4pBw2MqJQKqqf6D23lB1As%2FScsXjJ0kIIjzeY17dAkVwQpBEa2PWtH9jjw0djKQ%2FE%2BA46gnxqTvq3NRPZ8O%2Bp3MzvkZueC3kIKZbyFLedPdH0AAfeWIbwzrGXuh%2FoAngywCIPWnViG8qCVRpoXBwVNSYgT6da6kFgeUoK4%2FuntkkhuSzj4XKrlAKt9wOQV9tRsWKOurWTGFpypVLsbS2iB5azDUc%2BeGRGcfd9VsytOmx58%2FEfoaQGx5sV%2FtKgO%2Fg2obETekYZRGed%2F3GE5NiRfOtRXBd7PiDN9mxEghVR1Qv52DMUC%2FhZtqIvKGhoqVtChm%2Bni2DziZohho%2FuiUX2dXN4LHdiuUPDoRH5rLJwE0ByoP6o%2FkZrRomuqW5MMix%2Bs8GOqUBcvHFqD%2FiAC3eu%2BywE6z0pUXq2MbOR%2Bx%2FYY1%2FwsAq2jYqKACUpy9CBFtVKMK0lb0QQ2KMTatodsLPpBT369Z8cnK1OstFFahLAGYPSlxMRpamzJ1YVpzUlEqqOcQeQl4J7RaJjNDq%2F2ItZiqBTT%2FSqlrssGbwhjwfzOtMKIoxFwQzvcHhqPnZlKae4Qi%2FsQ0Akk1CGwZyrBSBeXWXXcprKVehCY%2FB&X-Amz-Signature=08feb0d466cc38e7cce8f7b55a88629340948a4bc8f0320d71b170433e9c6a8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THGVOCZR%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIHunlpQeKUdo99EP8f3NHlizRmESTBIIKJM9fSO1syLOAiEAnXbe9TdKrK1SLVgZrUZn3ki2b10MXWPWJTSgEU3eGxUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAMfzk%2Fv64tjazQcCrcA6AhnLq0twDO5i%2BONn7JJ0eeQ6STuXNZSGzmqtHy%2FcGX1%2BxlT6IyoLelNpJDNRUQy%2B9g30ZeikqkUObp4hyNvqvHFQU72wdP4FqLXIznE9rwOQEj4ACBV0NxFHSBL41LG0YhqwqQP0Elup%2BbFSTZQCA9diNKmzZzDYWxIO5mLsn%2F%2BFOs9UXWUx4GqY9yy1LMTKWZ6Ap8ZOK7D7PxlENztcYhuptVwErFovWaZlk1VRy7%2Be8uGalSpMOnfor5pvYt4pBw2MqJQKqqf6D23lB1As%2FScsXjJ0kIIjzeY17dAkVwQpBEa2PWtH9jjw0djKQ%2FE%2BA46gnxqTvq3NRPZ8O%2Bp3MzvkZueC3kIKZbyFLedPdH0AAfeWIbwzrGXuh%2FoAngywCIPWnViG8qCVRpoXBwVNSYgT6da6kFgeUoK4%2FuntkkhuSzj4XKrlAKt9wOQV9tRsWKOurWTGFpypVLsbS2iB5azDUc%2BeGRGcfd9VsytOmx58%2FEfoaQGx5sV%2FtKgO%2Fg2obETekYZRGed%2F3GE5NiRfOtRXBd7PiDN9mxEghVR1Qv52DMUC%2FhZtqIvKGhoqVtChm%2Bni2DziZohho%2FuiUX2dXN4LHdiuUPDoRH5rLJwE0ByoP6o%2FkZrRomuqW5MMix%2Bs8GOqUBcvHFqD%2FiAC3eu%2BywE6z0pUXq2MbOR%2Bx%2FYY1%2FwsAq2jYqKACUpy9CBFtVKMK0lb0QQ2KMTatodsLPpBT369Z8cnK1OstFFahLAGYPSlxMRpamzJ1YVpzUlEqqOcQeQl4J7RaJjNDq%2F2ItZiqBTT%2FSqlrssGbwhjwfzOtMKIoxFwQzvcHhqPnZlKae4Qi%2FsQ0Akk1CGwZyrBSBeXWXXcprKVehCY%2FB&X-Amz-Signature=c76f39a184ef1be0d262cce1908dcc024fd42200c23f1e5e6b14a207b43cdc94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


