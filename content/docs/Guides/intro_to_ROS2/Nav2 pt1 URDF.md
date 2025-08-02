---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-02T01:13:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-02T01:13:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q34VTM2O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIifZmlml3NVRmt%2FXm0iMQUCHTBdXQ7pIk%2FGU5XKD2VAiEAuAmuddQTQj96k%2F7FJuZqewkO01moQj9cVX0AfVl60O4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqfMoUSIcKzwSpYByrcA6jcLGC%2BZMmQRATr4gnUY5NthTpT%2Fn9uRaVVWbExDp6qBiPEV1cknBeSR7iIxpVsTWD4bU3b%2Bk080PnQY8D7PFjPlT7zc%2BUB56OJ6sycFgXVcG%2BBL3oFksWarlW5ibvQkwjGaNL0uoEc7aV3H3d9riLnameX22OIpiBxjXJBQZ35xQ8GM7yA%2FBcsUhxh24Qzbwo%2FaN%2BnbDLYHnG4%2BNLOVTdtAFUdf2zVFIOreZLqeWhQzeYUhzOLh7BzQCQJ0R%2Bs7%2BjhXa4D7yuqjvkrO0dPbpzXpojx4ZDKAVzGN4VCXJODWVQl%2FKVJLqGnYXtogb0D60LFFG0BlIFF%2B4mBS02Rajr5k5tKVCYplNmorI9S8CAbGj3B2JXhFN28LAmF0F5jcIGkGj6IGvzr1wjlXQWB0RSrjFR8oOi3P8ZkLxgtFkIHS0uhaYicbLi8BVPI7%2BaFh7hVwxJhbO9U%2B53mPxBdKGzOlOeRk4QOCuIq%2FRH5leQOPnP7YlqCkdZ6j2%2FuYI2SZm3RLikcPI%2FMOKL5ugDXvH15orehAH1BqK874IHwequmDY42xVBUIGT7i1ziH0hsWagvIZ7RZ8CO89pOJC%2F96HkmVmp0g%2Fa4wBmaQdMR4mgpevR3N%2BuBp4H19M44MKHStcQGOqUBuBaJ1ejbsHunGuMgMSxtLwwWZ4cN7zkAn8jWP41fruiqhr25IFU4GFxrn4iq8lNBz03TOx2vtJAHkPJsq0Hy795ClMMmJ3mGVSrHrb1n8n8B5VsBMP4IpMDSW9j8bOKSufxM0DJfAYzahs%2FlCY6tgTJqxzoKevuTNu2cXYZ0Gx7%2FHLw10qJIllFlEj8OETwojN1JPndApXGWi1YVWHqJuqGWzEHP&X-Amz-Signature=04f68b81a2fa71b10a8c395e40e4f47d51bf589072c01c789ac0624313fc9693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q34VTM2O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIifZmlml3NVRmt%2FXm0iMQUCHTBdXQ7pIk%2FGU5XKD2VAiEAuAmuddQTQj96k%2F7FJuZqewkO01moQj9cVX0AfVl60O4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqfMoUSIcKzwSpYByrcA6jcLGC%2BZMmQRATr4gnUY5NthTpT%2Fn9uRaVVWbExDp6qBiPEV1cknBeSR7iIxpVsTWD4bU3b%2Bk080PnQY8D7PFjPlT7zc%2BUB56OJ6sycFgXVcG%2BBL3oFksWarlW5ibvQkwjGaNL0uoEc7aV3H3d9riLnameX22OIpiBxjXJBQZ35xQ8GM7yA%2FBcsUhxh24Qzbwo%2FaN%2BnbDLYHnG4%2BNLOVTdtAFUdf2zVFIOreZLqeWhQzeYUhzOLh7BzQCQJ0R%2Bs7%2BjhXa4D7yuqjvkrO0dPbpzXpojx4ZDKAVzGN4VCXJODWVQl%2FKVJLqGnYXtogb0D60LFFG0BlIFF%2B4mBS02Rajr5k5tKVCYplNmorI9S8CAbGj3B2JXhFN28LAmF0F5jcIGkGj6IGvzr1wjlXQWB0RSrjFR8oOi3P8ZkLxgtFkIHS0uhaYicbLi8BVPI7%2BaFh7hVwxJhbO9U%2B53mPxBdKGzOlOeRk4QOCuIq%2FRH5leQOPnP7YlqCkdZ6j2%2FuYI2SZm3RLikcPI%2FMOKL5ugDXvH15orehAH1BqK874IHwequmDY42xVBUIGT7i1ziH0hsWagvIZ7RZ8CO89pOJC%2F96HkmVmp0g%2Fa4wBmaQdMR4mgpevR3N%2BuBp4H19M44MKHStcQGOqUBuBaJ1ejbsHunGuMgMSxtLwwWZ4cN7zkAn8jWP41fruiqhr25IFU4GFxrn4iq8lNBz03TOx2vtJAHkPJsq0Hy795ClMMmJ3mGVSrHrb1n8n8B5VsBMP4IpMDSW9j8bOKSufxM0DJfAYzahs%2FlCY6tgTJqxzoKevuTNu2cXYZ0Gx7%2FHLw10qJIllFlEj8OETwojN1JPndApXGWi1YVWHqJuqGWzEHP&X-Amz-Signature=0e248bf5ddcc5fae3dc91eed21ca8afdc1ec6464a4e6f450207a77b5dba16f99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q34VTM2O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIifZmlml3NVRmt%2FXm0iMQUCHTBdXQ7pIk%2FGU5XKD2VAiEAuAmuddQTQj96k%2F7FJuZqewkO01moQj9cVX0AfVl60O4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqfMoUSIcKzwSpYByrcA6jcLGC%2BZMmQRATr4gnUY5NthTpT%2Fn9uRaVVWbExDp6qBiPEV1cknBeSR7iIxpVsTWD4bU3b%2Bk080PnQY8D7PFjPlT7zc%2BUB56OJ6sycFgXVcG%2BBL3oFksWarlW5ibvQkwjGaNL0uoEc7aV3H3d9riLnameX22OIpiBxjXJBQZ35xQ8GM7yA%2FBcsUhxh24Qzbwo%2FaN%2BnbDLYHnG4%2BNLOVTdtAFUdf2zVFIOreZLqeWhQzeYUhzOLh7BzQCQJ0R%2Bs7%2BjhXa4D7yuqjvkrO0dPbpzXpojx4ZDKAVzGN4VCXJODWVQl%2FKVJLqGnYXtogb0D60LFFG0BlIFF%2B4mBS02Rajr5k5tKVCYplNmorI9S8CAbGj3B2JXhFN28LAmF0F5jcIGkGj6IGvzr1wjlXQWB0RSrjFR8oOi3P8ZkLxgtFkIHS0uhaYicbLi8BVPI7%2BaFh7hVwxJhbO9U%2B53mPxBdKGzOlOeRk4QOCuIq%2FRH5leQOPnP7YlqCkdZ6j2%2FuYI2SZm3RLikcPI%2FMOKL5ugDXvH15orehAH1BqK874IHwequmDY42xVBUIGT7i1ziH0hsWagvIZ7RZ8CO89pOJC%2F96HkmVmp0g%2Fa4wBmaQdMR4mgpevR3N%2BuBp4H19M44MKHStcQGOqUBuBaJ1ejbsHunGuMgMSxtLwwWZ4cN7zkAn8jWP41fruiqhr25IFU4GFxrn4iq8lNBz03TOx2vtJAHkPJsq0Hy795ClMMmJ3mGVSrHrb1n8n8B5VsBMP4IpMDSW9j8bOKSufxM0DJfAYzahs%2FlCY6tgTJqxzoKevuTNu2cXYZ0Gx7%2FHLw10qJIllFlEj8OETwojN1JPndApXGWi1YVWHqJuqGWzEHP&X-Amz-Signature=bb88f18b2976f3d61dd47813a5bb41137cb60070f9ead501cf90137e34d614b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q34VTM2O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIifZmlml3NVRmt%2FXm0iMQUCHTBdXQ7pIk%2FGU5XKD2VAiEAuAmuddQTQj96k%2F7FJuZqewkO01moQj9cVX0AfVl60O4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqfMoUSIcKzwSpYByrcA6jcLGC%2BZMmQRATr4gnUY5NthTpT%2Fn9uRaVVWbExDp6qBiPEV1cknBeSR7iIxpVsTWD4bU3b%2Bk080PnQY8D7PFjPlT7zc%2BUB56OJ6sycFgXVcG%2BBL3oFksWarlW5ibvQkwjGaNL0uoEc7aV3H3d9riLnameX22OIpiBxjXJBQZ35xQ8GM7yA%2FBcsUhxh24Qzbwo%2FaN%2BnbDLYHnG4%2BNLOVTdtAFUdf2zVFIOreZLqeWhQzeYUhzOLh7BzQCQJ0R%2Bs7%2BjhXa4D7yuqjvkrO0dPbpzXpojx4ZDKAVzGN4VCXJODWVQl%2FKVJLqGnYXtogb0D60LFFG0BlIFF%2B4mBS02Rajr5k5tKVCYplNmorI9S8CAbGj3B2JXhFN28LAmF0F5jcIGkGj6IGvzr1wjlXQWB0RSrjFR8oOi3P8ZkLxgtFkIHS0uhaYicbLi8BVPI7%2BaFh7hVwxJhbO9U%2B53mPxBdKGzOlOeRk4QOCuIq%2FRH5leQOPnP7YlqCkdZ6j2%2FuYI2SZm3RLikcPI%2FMOKL5ugDXvH15orehAH1BqK874IHwequmDY42xVBUIGT7i1ziH0hsWagvIZ7RZ8CO89pOJC%2F96HkmVmp0g%2Fa4wBmaQdMR4mgpevR3N%2BuBp4H19M44MKHStcQGOqUBuBaJ1ejbsHunGuMgMSxtLwwWZ4cN7zkAn8jWP41fruiqhr25IFU4GFxrn4iq8lNBz03TOx2vtJAHkPJsq0Hy795ClMMmJ3mGVSrHrb1n8n8B5VsBMP4IpMDSW9j8bOKSufxM0DJfAYzahs%2FlCY6tgTJqxzoKevuTNu2cXYZ0Gx7%2FHLw10qJIllFlEj8OETwojN1JPndApXGWi1YVWHqJuqGWzEHP&X-Amz-Signature=e0a334f30f0af3005ab5cc27914056197196e185797bc8c90a321b36866531da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q34VTM2O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIifZmlml3NVRmt%2FXm0iMQUCHTBdXQ7pIk%2FGU5XKD2VAiEAuAmuddQTQj96k%2F7FJuZqewkO01moQj9cVX0AfVl60O4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqfMoUSIcKzwSpYByrcA6jcLGC%2BZMmQRATr4gnUY5NthTpT%2Fn9uRaVVWbExDp6qBiPEV1cknBeSR7iIxpVsTWD4bU3b%2Bk080PnQY8D7PFjPlT7zc%2BUB56OJ6sycFgXVcG%2BBL3oFksWarlW5ibvQkwjGaNL0uoEc7aV3H3d9riLnameX22OIpiBxjXJBQZ35xQ8GM7yA%2FBcsUhxh24Qzbwo%2FaN%2BnbDLYHnG4%2BNLOVTdtAFUdf2zVFIOreZLqeWhQzeYUhzOLh7BzQCQJ0R%2Bs7%2BjhXa4D7yuqjvkrO0dPbpzXpojx4ZDKAVzGN4VCXJODWVQl%2FKVJLqGnYXtogb0D60LFFG0BlIFF%2B4mBS02Rajr5k5tKVCYplNmorI9S8CAbGj3B2JXhFN28LAmF0F5jcIGkGj6IGvzr1wjlXQWB0RSrjFR8oOi3P8ZkLxgtFkIHS0uhaYicbLi8BVPI7%2BaFh7hVwxJhbO9U%2B53mPxBdKGzOlOeRk4QOCuIq%2FRH5leQOPnP7YlqCkdZ6j2%2FuYI2SZm3RLikcPI%2FMOKL5ugDXvH15orehAH1BqK874IHwequmDY42xVBUIGT7i1ziH0hsWagvIZ7RZ8CO89pOJC%2F96HkmVmp0g%2Fa4wBmaQdMR4mgpevR3N%2BuBp4H19M44MKHStcQGOqUBuBaJ1ejbsHunGuMgMSxtLwwWZ4cN7zkAn8jWP41fruiqhr25IFU4GFxrn4iq8lNBz03TOx2vtJAHkPJsq0Hy795ClMMmJ3mGVSrHrb1n8n8B5VsBMP4IpMDSW9j8bOKSufxM0DJfAYzahs%2FlCY6tgTJqxzoKevuTNu2cXYZ0Gx7%2FHLw10qJIllFlEj8OETwojN1JPndApXGWi1YVWHqJuqGWzEHP&X-Amz-Signature=29770b49b969455fe9ab18b5841e8096b9c25a26d698d00badef8f788669ec21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q34VTM2O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIifZmlml3NVRmt%2FXm0iMQUCHTBdXQ7pIk%2FGU5XKD2VAiEAuAmuddQTQj96k%2F7FJuZqewkO01moQj9cVX0AfVl60O4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqfMoUSIcKzwSpYByrcA6jcLGC%2BZMmQRATr4gnUY5NthTpT%2Fn9uRaVVWbExDp6qBiPEV1cknBeSR7iIxpVsTWD4bU3b%2Bk080PnQY8D7PFjPlT7zc%2BUB56OJ6sycFgXVcG%2BBL3oFksWarlW5ibvQkwjGaNL0uoEc7aV3H3d9riLnameX22OIpiBxjXJBQZ35xQ8GM7yA%2FBcsUhxh24Qzbwo%2FaN%2BnbDLYHnG4%2BNLOVTdtAFUdf2zVFIOreZLqeWhQzeYUhzOLh7BzQCQJ0R%2Bs7%2BjhXa4D7yuqjvkrO0dPbpzXpojx4ZDKAVzGN4VCXJODWVQl%2FKVJLqGnYXtogb0D60LFFG0BlIFF%2B4mBS02Rajr5k5tKVCYplNmorI9S8CAbGj3B2JXhFN28LAmF0F5jcIGkGj6IGvzr1wjlXQWB0RSrjFR8oOi3P8ZkLxgtFkIHS0uhaYicbLi8BVPI7%2BaFh7hVwxJhbO9U%2B53mPxBdKGzOlOeRk4QOCuIq%2FRH5leQOPnP7YlqCkdZ6j2%2FuYI2SZm3RLikcPI%2FMOKL5ugDXvH15orehAH1BqK874IHwequmDY42xVBUIGT7i1ziH0hsWagvIZ7RZ8CO89pOJC%2F96HkmVmp0g%2Fa4wBmaQdMR4mgpevR3N%2BuBp4H19M44MKHStcQGOqUBuBaJ1ejbsHunGuMgMSxtLwwWZ4cN7zkAn8jWP41fruiqhr25IFU4GFxrn4iq8lNBz03TOx2vtJAHkPJsq0Hy795ClMMmJ3mGVSrHrb1n8n8B5VsBMP4IpMDSW9j8bOKSufxM0DJfAYzahs%2FlCY6tgTJqxzoKevuTNu2cXYZ0Gx7%2FHLw10qJIllFlEj8OETwojN1JPndApXGWi1YVWHqJuqGWzEHP&X-Amz-Signature=94db2289edd79b255538629b5c78dc8f51f1fb10725aff1bcaaf592cdc3bba2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q34VTM2O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIifZmlml3NVRmt%2FXm0iMQUCHTBdXQ7pIk%2FGU5XKD2VAiEAuAmuddQTQj96k%2F7FJuZqewkO01moQj9cVX0AfVl60O4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqfMoUSIcKzwSpYByrcA6jcLGC%2BZMmQRATr4gnUY5NthTpT%2Fn9uRaVVWbExDp6qBiPEV1cknBeSR7iIxpVsTWD4bU3b%2Bk080PnQY8D7PFjPlT7zc%2BUB56OJ6sycFgXVcG%2BBL3oFksWarlW5ibvQkwjGaNL0uoEc7aV3H3d9riLnameX22OIpiBxjXJBQZ35xQ8GM7yA%2FBcsUhxh24Qzbwo%2FaN%2BnbDLYHnG4%2BNLOVTdtAFUdf2zVFIOreZLqeWhQzeYUhzOLh7BzQCQJ0R%2Bs7%2BjhXa4D7yuqjvkrO0dPbpzXpojx4ZDKAVzGN4VCXJODWVQl%2FKVJLqGnYXtogb0D60LFFG0BlIFF%2B4mBS02Rajr5k5tKVCYplNmorI9S8CAbGj3B2JXhFN28LAmF0F5jcIGkGj6IGvzr1wjlXQWB0RSrjFR8oOi3P8ZkLxgtFkIHS0uhaYicbLi8BVPI7%2BaFh7hVwxJhbO9U%2B53mPxBdKGzOlOeRk4QOCuIq%2FRH5leQOPnP7YlqCkdZ6j2%2FuYI2SZm3RLikcPI%2FMOKL5ugDXvH15orehAH1BqK874IHwequmDY42xVBUIGT7i1ziH0hsWagvIZ7RZ8CO89pOJC%2F96HkmVmp0g%2Fa4wBmaQdMR4mgpevR3N%2BuBp4H19M44MKHStcQGOqUBuBaJ1ejbsHunGuMgMSxtLwwWZ4cN7zkAn8jWP41fruiqhr25IFU4GFxrn4iq8lNBz03TOx2vtJAHkPJsq0Hy795ClMMmJ3mGVSrHrb1n8n8B5VsBMP4IpMDSW9j8bOKSufxM0DJfAYzahs%2FlCY6tgTJqxzoKevuTNu2cXYZ0Gx7%2FHLw10qJIllFlEj8OETwojN1JPndApXGWi1YVWHqJuqGWzEHP&X-Amz-Signature=c4df47807a5d86efb51aaf0c5a3392800ddd9ba5372c21f8c6d8a4d29680660c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q34VTM2O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIifZmlml3NVRmt%2FXm0iMQUCHTBdXQ7pIk%2FGU5XKD2VAiEAuAmuddQTQj96k%2F7FJuZqewkO01moQj9cVX0AfVl60O4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqfMoUSIcKzwSpYByrcA6jcLGC%2BZMmQRATr4gnUY5NthTpT%2Fn9uRaVVWbExDp6qBiPEV1cknBeSR7iIxpVsTWD4bU3b%2Bk080PnQY8D7PFjPlT7zc%2BUB56OJ6sycFgXVcG%2BBL3oFksWarlW5ibvQkwjGaNL0uoEc7aV3H3d9riLnameX22OIpiBxjXJBQZ35xQ8GM7yA%2FBcsUhxh24Qzbwo%2FaN%2BnbDLYHnG4%2BNLOVTdtAFUdf2zVFIOreZLqeWhQzeYUhzOLh7BzQCQJ0R%2Bs7%2BjhXa4D7yuqjvkrO0dPbpzXpojx4ZDKAVzGN4VCXJODWVQl%2FKVJLqGnYXtogb0D60LFFG0BlIFF%2B4mBS02Rajr5k5tKVCYplNmorI9S8CAbGj3B2JXhFN28LAmF0F5jcIGkGj6IGvzr1wjlXQWB0RSrjFR8oOi3P8ZkLxgtFkIHS0uhaYicbLi8BVPI7%2BaFh7hVwxJhbO9U%2B53mPxBdKGzOlOeRk4QOCuIq%2FRH5leQOPnP7YlqCkdZ6j2%2FuYI2SZm3RLikcPI%2FMOKL5ugDXvH15orehAH1BqK874IHwequmDY42xVBUIGT7i1ziH0hsWagvIZ7RZ8CO89pOJC%2F96HkmVmp0g%2Fa4wBmaQdMR4mgpevR3N%2BuBp4H19M44MKHStcQGOqUBuBaJ1ejbsHunGuMgMSxtLwwWZ4cN7zkAn8jWP41fruiqhr25IFU4GFxrn4iq8lNBz03TOx2vtJAHkPJsq0Hy795ClMMmJ3mGVSrHrb1n8n8B5VsBMP4IpMDSW9j8bOKSufxM0DJfAYzahs%2FlCY6tgTJqxzoKevuTNu2cXYZ0Gx7%2FHLw10qJIllFlEj8OETwojN1JPndApXGWi1YVWHqJuqGWzEHP&X-Amz-Signature=b03da0d382e2c43bbffcef2a2fd1d6ccae166c8c85955a301d25678dffd1a3ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q34VTM2O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIifZmlml3NVRmt%2FXm0iMQUCHTBdXQ7pIk%2FGU5XKD2VAiEAuAmuddQTQj96k%2F7FJuZqewkO01moQj9cVX0AfVl60O4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqfMoUSIcKzwSpYByrcA6jcLGC%2BZMmQRATr4gnUY5NthTpT%2Fn9uRaVVWbExDp6qBiPEV1cknBeSR7iIxpVsTWD4bU3b%2Bk080PnQY8D7PFjPlT7zc%2BUB56OJ6sycFgXVcG%2BBL3oFksWarlW5ibvQkwjGaNL0uoEc7aV3H3d9riLnameX22OIpiBxjXJBQZ35xQ8GM7yA%2FBcsUhxh24Qzbwo%2FaN%2BnbDLYHnG4%2BNLOVTdtAFUdf2zVFIOreZLqeWhQzeYUhzOLh7BzQCQJ0R%2Bs7%2BjhXa4D7yuqjvkrO0dPbpzXpojx4ZDKAVzGN4VCXJODWVQl%2FKVJLqGnYXtogb0D60LFFG0BlIFF%2B4mBS02Rajr5k5tKVCYplNmorI9S8CAbGj3B2JXhFN28LAmF0F5jcIGkGj6IGvzr1wjlXQWB0RSrjFR8oOi3P8ZkLxgtFkIHS0uhaYicbLi8BVPI7%2BaFh7hVwxJhbO9U%2B53mPxBdKGzOlOeRk4QOCuIq%2FRH5leQOPnP7YlqCkdZ6j2%2FuYI2SZm3RLikcPI%2FMOKL5ugDXvH15orehAH1BqK874IHwequmDY42xVBUIGT7i1ziH0hsWagvIZ7RZ8CO89pOJC%2F96HkmVmp0g%2Fa4wBmaQdMR4mgpevR3N%2BuBp4H19M44MKHStcQGOqUBuBaJ1ejbsHunGuMgMSxtLwwWZ4cN7zkAn8jWP41fruiqhr25IFU4GFxrn4iq8lNBz03TOx2vtJAHkPJsq0Hy795ClMMmJ3mGVSrHrb1n8n8B5VsBMP4IpMDSW9j8bOKSufxM0DJfAYzahs%2FlCY6tgTJqxzoKevuTNu2cXYZ0Gx7%2FHLw10qJIllFlEj8OETwojN1JPndApXGWi1YVWHqJuqGWzEHP&X-Amz-Signature=03d835183f7cd5d1306f71edadff6a6a2941e50d496b905cf18d901041841cc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

TODO: preview of robot we r going make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q34VTM2O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIifZmlml3NVRmt%2FXm0iMQUCHTBdXQ7pIk%2FGU5XKD2VAiEAuAmuddQTQj96k%2F7FJuZqewkO01moQj9cVX0AfVl60O4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqfMoUSIcKzwSpYByrcA6jcLGC%2BZMmQRATr4gnUY5NthTpT%2Fn9uRaVVWbExDp6qBiPEV1cknBeSR7iIxpVsTWD4bU3b%2Bk080PnQY8D7PFjPlT7zc%2BUB56OJ6sycFgXVcG%2BBL3oFksWarlW5ibvQkwjGaNL0uoEc7aV3H3d9riLnameX22OIpiBxjXJBQZ35xQ8GM7yA%2FBcsUhxh24Qzbwo%2FaN%2BnbDLYHnG4%2BNLOVTdtAFUdf2zVFIOreZLqeWhQzeYUhzOLh7BzQCQJ0R%2Bs7%2BjhXa4D7yuqjvkrO0dPbpzXpojx4ZDKAVzGN4VCXJODWVQl%2FKVJLqGnYXtogb0D60LFFG0BlIFF%2B4mBS02Rajr5k5tKVCYplNmorI9S8CAbGj3B2JXhFN28LAmF0F5jcIGkGj6IGvzr1wjlXQWB0RSrjFR8oOi3P8ZkLxgtFkIHS0uhaYicbLi8BVPI7%2BaFh7hVwxJhbO9U%2B53mPxBdKGzOlOeRk4QOCuIq%2FRH5leQOPnP7YlqCkdZ6j2%2FuYI2SZm3RLikcPI%2FMOKL5ugDXvH15orehAH1BqK874IHwequmDY42xVBUIGT7i1ziH0hsWagvIZ7RZ8CO89pOJC%2F96HkmVmp0g%2Fa4wBmaQdMR4mgpevR3N%2BuBp4H19M44MKHStcQGOqUBuBaJ1ejbsHunGuMgMSxtLwwWZ4cN7zkAn8jWP41fruiqhr25IFU4GFxrn4iq8lNBz03TOx2vtJAHkPJsq0Hy795ClMMmJ3mGVSrHrb1n8n8B5VsBMP4IpMDSW9j8bOKSufxM0DJfAYzahs%2FlCY6tgTJqxzoKevuTNu2cXYZ0Gx7%2FHLw10qJIllFlEj8OETwojN1JPndApXGWi1YVWHqJuqGWzEHP&X-Amz-Signature=baec22d715c79f245647cf7d0a6d1357b5d7e4e448441b116984d774a179d581&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

urdf can get complex to look at so I will be putting a “_scratch”_ like equivalent next to each example I put down.

To start must all urdf have these tags:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
**<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">



</robot>**
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTU6PNRT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTi%2FZufnhL4dsYSk6L8QCWihONR5H5m4urQMiQvUUHnAiA1x5HabXtT9I4dWwEgmbU0VdInqlCptoZXjf%2F2%2FBuJxiqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMScJ3DHNZsDpOqP09KtwDkBTfo0opfjlXZ5bJNyR%2BwFyqvIIA7ygZ5T16SG8zpFkW7R1W6hMTFp9rzfOShFc%2Fh41fO7C34x8q0jLDQsnNA9MW7mqOU4XcmI3RHBswt%2FNOyhwdXIRi875oXLZjJ4ahIgsSNKDTet9vmrx3YxqPIKuqzIsTil0zdn8eTWanoHNjbwVJGl9sT79XigZ4snCY8%2FWV8o9hodG8pAe4nxTeM0Bxxf911ltxvlaN%2FDOpbVDhBKTx10rn0eYpatanRNfekwN9QSi9C1Asee10bvGrnVNjbzTlg62KQiGLKVJfgXZsNp%2B02SsokQLKpgElI5%2BAhy95YEuFaVGJn0CDrlCXbT9vFfmorps2fLwQdCeAYTwYsNqJHEpXIJVdpjUl%2Fy6JM0oZZLYdEN8sOWRuWqqXkR65aMnN4vEvbl8iH4OYmj%2F0GKc%2FdHoNLtKaXG%2FjBTll1uwvwmGjU4drjdeNPxKRnksRYqPKct0Vg7v6szelI%2FTqZVdQRXvKDlKJ863wKwd2SGg3rptTBRTYlKt55WoDi2%2FpDuYcpBx%2Fujxd%2FcbFjfNhdPz95MNmxNfQRx0QDjRcr0HB2mQo7QE9ltCCzNXdqUPMZAnCDDMf2wIs5iKBO0BcJamojb%2BrZ%2BdH6ZMwr%2Fe1xAY6pgFguHrgj5GBbpSXCk69dOej8zau0nxKbYSCwvLCp%2FCLf99%2FKSmN8VrP3zP70RcjvIZwDICow%2F5NOJBLtgw44pPUTD9lgtmqnzd1tL2%2FgCsNngU5iwU7c6d2u3HQ0FF4HzOUy8NnRy9fwTIfVW%2BNFsNvwKQTI7JIpZA%2FAMV%2FMxngC3GG%2Biy32v7c3oOBIX48asEAK7RuOShRLrW6WYBrzObJSd%2FM0FFO&X-Amz-Signature=bb36d86791862c2a7502a27303f7a2a2de2a449c5ebd38f71c66bd32a44c000f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

All of our code will go in between the `<robot>` tags 

Next lets put down some constants we will use later

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C3BUBXW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtJROg33rEpxnZGNcJcuqGha7J7GILAZHcNa8PkolADAiBbh2361XxH8IRO%2B8gGDXfrW1wRBS5TSm5JbTiLpaCQnCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIQNg6mU4pRs7QtmIKtwDm7xcdrOqnTqz%2FAh5SmnadBqfTAVeLExNiFOd02yMla3YxZrQ90ekhDBBi%2FzqweyM7sRJjRZNYvtUxyVx19saie9%2FvTwBoFLpnf7fxHA59gP1KMelYBNKcEb%2BBREiEpyMp0eIrV%2BwpFXOTszQUbAxVsoT%2Bew2dEk3j75nD17GFQPK4GkMEX9hahao0wTlpQG1%2FcgDaEwsokbfyU%2FtznwpmnqmRkbWeSGDyyCipPuZkL4Ulrlwrdk3aVjYSVgCA1ymwLZAb0gk7J4M9Yn1h%2FSceeWw7JGQZuq61onW9tvzszZGaD1oVWoE7xF3jFuOJDZ5NIJDMW1TNcFhspPf1m9PogZoboVa9x6R3ENF7hs0a2d5uZz8qgEN36uGYCTi3zfkspz9IXYY8n5JdGEMGnuXwQcOSFvMAUEODU3SnNYR2e19ywWT04kFdRG0IpFVGeSLyabOZHmi7FeDdRrUFsC6c0kSZFjJr21%2FBLEKTrLC8O0StJ379YZNS%2BeN0HDcRnZ7dXhtt0c6Tex7jpvvNpLJxJt1eKpx6q6ZeZojL3bPxVQpAJBk5UyVqXvNgtmEhgD4%2FWeJ4HvlAGvWj4UOv9GHbspNK6CFmLHM5AA9CJc5oT6mSQMV2Vwxrf7msrAwo%2Fe1xAY6pgHCQnsMMRybxH4Ocmci2MlCDcB2CoWFRoJsTlA%2BAsPZmO9N0j%2BoHb8QL9n8u%2BvkRYhVoYq7hYfV70Um8P%2F9R315%2FpBM%2Fgoma4Os9X14lTSUP33FRdPYeWL%2B7rhb3RQruhYuNgjs%2F7io1Fq5YsqZjsznJUWeE0DSGShkTVzk7AqG5sORCTUQJ3wlpXn3rlKQJ8VMhgp6DrMTMi2RhHokWaWziJ8T1phR&X-Amz-Signature=d00acf43f8e547abff21ebd2dd909b3aad65cfc767d48728c3fc290bd6dbd832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

You can think of these as **variables** but in the xacro language

<details>
      <summary>What do the variables represent?</summary>
      TODO:
  </details>

Lets now make a link for the body of the robot

For now we are only going to add the visual part of the link to see if our design is correct. Later we will add collision and inertia.

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BRUMDXC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxIC53NQyzGtPA%2BeAvzMhvz%2FFBoANaCPtgcwr1hx0IgwIgdWhH7fEyyJHDn71NaYaogi7GxiQNRMZ9KcNftN4N9YwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUGWaJR6NPl7rRCDCrcAwKOTjDHhLWVrVhUrrCnoiIx05co%2BJWkKGFQsxTTkfxGI2FEjiGkoMUiL%2FBiMJbPdbUri%2BFdG9nFzpJCRtQ6KtLfUq47ZWTfmJ7i6iLZXoMCs3q1oX4hKgMqg1Ay9H6nOUa1SnzRmlQuHr6Z3iajAFY4Rko1nuoNyy8bTsDuSKyARI25xqVPD0EwQCxxvhVFECV7xvr%2FSHEAfkHP5EeDterqs8SH68CuHl%2B7Hr1txmKk1Ppznxx0TnAjRBg9lbPunVIhsu52gXet1as%2BoIh58zGM7TkqnCt69hvT6ADFZmWubrz1St%2BGNAFoip%2BP3MzTBkfi8QkbJAnJKwy1MEfYT8sciJ8F7wwKZnkn3qDPuuR6Woe3AsuyW70wi%2BLMV0AIg4qpbUf3uPNRMcjV%2FedfATTnOpGRjR2gR%2BJ6QyRBOWWKDYSJql0y0gozEBbKOum0GgSS6iCCuIXQvUr90WuEM5EGk%2Fo48Y3TRM3%2BJuX4q6dg4bWiceYF1qtlQC%2Fka9zYGEsRkzl%2BmSi3BunghnuODxK2WUWZBPcRf%2BDFT64I47Kr%2Bvk3LKFZmizjrpsVQI%2FkWLUk%2FftPkYVq0ptvpl9M8UbrN8Lgz4cNNNFIsRBAPMpbp496Sl2k1kHkUUcRMJzStcQGOqUBdSw0t6P5JheLbIFKC9SLGHe5LTI%2BR4w9bN%2BmFnsjfG95sU3VlBZAY5Jnw4DTccXfCLoAkA5jOXsl9TR0yg3u1ud6X99PfmO3mDySlM%2FZWlPR%2B4wqdtjaGRwYXMQb%2FpknA7KiH%2F8spnHDsU5suaCCxFvDsOix5nJ%2FVOgtTrbd%2F17kQ8%2BXwWOe2wPGq9bJ03c3wXbQ3TZuYX7DkJIgO7mma0nVkZSM&X-Amz-Signature=9382f32c825ae9eda370b636ce34f4a61b43c09ff2a4b96e0c06444625a7d4c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q34VTM2O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIifZmlml3NVRmt%2FXm0iMQUCHTBdXQ7pIk%2FGU5XKD2VAiEAuAmuddQTQj96k%2F7FJuZqewkO01moQj9cVX0AfVl60O4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqfMoUSIcKzwSpYByrcA6jcLGC%2BZMmQRATr4gnUY5NthTpT%2Fn9uRaVVWbExDp6qBiPEV1cknBeSR7iIxpVsTWD4bU3b%2Bk080PnQY8D7PFjPlT7zc%2BUB56OJ6sycFgXVcG%2BBL3oFksWarlW5ibvQkwjGaNL0uoEc7aV3H3d9riLnameX22OIpiBxjXJBQZ35xQ8GM7yA%2FBcsUhxh24Qzbwo%2FaN%2BnbDLYHnG4%2BNLOVTdtAFUdf2zVFIOreZLqeWhQzeYUhzOLh7BzQCQJ0R%2Bs7%2BjhXa4D7yuqjvkrO0dPbpzXpojx4ZDKAVzGN4VCXJODWVQl%2FKVJLqGnYXtogb0D60LFFG0BlIFF%2B4mBS02Rajr5k5tKVCYplNmorI9S8CAbGj3B2JXhFN28LAmF0F5jcIGkGj6IGvzr1wjlXQWB0RSrjFR8oOi3P8ZkLxgtFkIHS0uhaYicbLi8BVPI7%2BaFh7hVwxJhbO9U%2B53mPxBdKGzOlOeRk4QOCuIq%2FRH5leQOPnP7YlqCkdZ6j2%2FuYI2SZm3RLikcPI%2FMOKL5ugDXvH15orehAH1BqK874IHwequmDY42xVBUIGT7i1ziH0hsWagvIZ7RZ8CO89pOJC%2F96HkmVmp0g%2Fa4wBmaQdMR4mgpevR3N%2BuBp4H19M44MKHStcQGOqUBuBaJ1ejbsHunGuMgMSxtLwwWZ4cN7zkAn8jWP41fruiqhr25IFU4GFxrn4iq8lNBz03TOx2vtJAHkPJsq0Hy795ClMMmJ3mGVSrHrb1n8n8B5VsBMP4IpMDSW9j8bOKSufxM0DJfAYzahs%2FlCY6tgTJqxzoKevuTNu2cXYZ0Gx7%2FHLw10qJIllFlEj8OETwojN1JPndApXGWi1YVWHqJuqGWzEHP&X-Amz-Signature=74b03e80b2a2db42d1239e866e2b0771de755ea6a34213afb09708ec4066d47c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQF7F2V7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJSuBpYS012VFBTkZql%2FZW4WdU5buYVP4oDEZD44I0jwIgKyGVu52O8K%2BYKgZsOr%2F2k9TQ5pVMl06gte3YMAT8g40qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEVwbr4cyMJzzQIWCrcA4UhEWPFGUq%2FJTqBma%2BibXS5RhJ%2BrVaprapE8F7D%2F8FDYMEfMr%2Fx6%2F1MkDX%2BXAOVSN1YcAx9RH53EEYWp5WaqaKlqi90ttntixh4Fc9mDBT0tyrwiy1Ctdb%2Bw6uBbfCYqLQFGf4wajfK0kk6WqJ1sxOqzMATb3RQapoGqhZmb6oZK6R6LnADCw14IB8UeXff9Oed7IP5PKhOr%2FdeZ9L2lXkuHiwVLjoR934Nz7Ogi%2BQYd6nPegNHQA8P%2BwHVZDJTdGgHhhmDvdGwgNINxfXDlbYXUpa9FR9%2B37SRB71eg8EtX5PlwVV%2B2QnmMluZXebEo0gqkpAkCfR2JdobjNKVIeDnu6bMDEywIjD9V3Wvi0x0eY12fmeyRfyt6GddjhoIu%2Bz0lJW%2BGkjwk9DeKrq%2FoYAMyVZyC8CU6%2BH%2B1K2JSbyiiInkhRloqADY%2F60bDH6Fa%2BPZ0xm5LnaYwkyNwrEQ0yzIJxRraJr%2BK%2BHxlmQ9y8WzLAO7GBtEnpL1u7r3yDu1KBDh7Hi6NzejOrVhqi021dcvJuW4DWUB53%2BPW53adazCqg%2FHlN%2FYZS1%2FlAUcf%2F%2BqGd1rPSmmLeeKuntzNPBmkKo4fz5JPCZCTJYc08%2FQg%2Fww7Zn2SPKmmPVIYWTuMKL3tcQGOqUBzMUrITFeQwue5BIYrpAUzTfXAqJIuC7lwA29xeTQ870YdYjJujcxYY6JsHz8TGNZSGVCD0p57WaimB%2FUiWSBPwmwP95GFM%2BJNEYLStFTvOGDDwy3e4TpSwVXFomEV1DMABh7dykuJFhQy9fMcAw3ZB%2FJRXs0tda%2BiMA2Xcj7eWaeVm0xREco5hM8%2F0I%2B2%2FWKiRXxRoHbw4frgzh6bNwQTT%2FNHeoZ&X-Amz-Signature=7a13bff8a4eecb5009281f0e82d9bd4915946015ce213b15bf6bfd875f3364e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q34VTM2O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIifZmlml3NVRmt%2FXm0iMQUCHTBdXQ7pIk%2FGU5XKD2VAiEAuAmuddQTQj96k%2F7FJuZqewkO01moQj9cVX0AfVl60O4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqfMoUSIcKzwSpYByrcA6jcLGC%2BZMmQRATr4gnUY5NthTpT%2Fn9uRaVVWbExDp6qBiPEV1cknBeSR7iIxpVsTWD4bU3b%2Bk080PnQY8D7PFjPlT7zc%2BUB56OJ6sycFgXVcG%2BBL3oFksWarlW5ibvQkwjGaNL0uoEc7aV3H3d9riLnameX22OIpiBxjXJBQZ35xQ8GM7yA%2FBcsUhxh24Qzbwo%2FaN%2BnbDLYHnG4%2BNLOVTdtAFUdf2zVFIOreZLqeWhQzeYUhzOLh7BzQCQJ0R%2Bs7%2BjhXa4D7yuqjvkrO0dPbpzXpojx4ZDKAVzGN4VCXJODWVQl%2FKVJLqGnYXtogb0D60LFFG0BlIFF%2B4mBS02Rajr5k5tKVCYplNmorI9S8CAbGj3B2JXhFN28LAmF0F5jcIGkGj6IGvzr1wjlXQWB0RSrjFR8oOi3P8ZkLxgtFkIHS0uhaYicbLi8BVPI7%2BaFh7hVwxJhbO9U%2B53mPxBdKGzOlOeRk4QOCuIq%2FRH5leQOPnP7YlqCkdZ6j2%2FuYI2SZm3RLikcPI%2FMOKL5ugDXvH15orehAH1BqK874IHwequmDY42xVBUIGT7i1ziH0hsWagvIZ7RZ8CO89pOJC%2F96HkmVmp0g%2Fa4wBmaQdMR4mgpevR3N%2BuBp4H19M44MKHStcQGOqUBuBaJ1ejbsHunGuMgMSxtLwwWZ4cN7zkAn8jWP41fruiqhr25IFU4GFxrn4iq8lNBz03TOx2vtJAHkPJsq0Hy795ClMMmJ3mGVSrHrb1n8n8B5VsBMP4IpMDSW9j8bOKSufxM0DJfAYzahs%2FlCY6tgTJqxzoKevuTNu2cXYZ0Gx7%2FHLw10qJIllFlEj8OETwojN1JPndApXGWi1YVWHqJuqGWzEHP&X-Amz-Signature=f2efe8f5144876a16a432db5a13bbcdf09c9dfe86ad6921f75606d5332309b89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPGHGIZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9vqKgyCzgnDyHU6q3CjmJesH84ZABicQRcnsDJ8%2BQQAiEAvy5wVhZb2CJCw8ylbJqrKJc2O7Y%2FecJtBw%2F5MxXnmpAqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZh11vESyrugrbBaCrcA07rDvsSmLH6xu5uDkJjfq6%2FveSdMFjggYEmTt8mifSFP2xBteYUKzxCPHWNdEsZG5RH5Rh8UEJM%2B0oJJssn6xk6fxnYE%2BAKwr%2B8Vvy4VuD2GjUOKg3%2FoAdgp%2FSUmJ2hxpz7O9hJQOT0gyydGJk%2B73d72BrhmVXeoerXjj1Z8Sax941asg7kwJlHBDdQY5EEOjbD%2B4oEx8TCrx%2Fs6SM%2FMtB8jxkY%2FIc%2Fi95ty%2F%2BNPCMyt1AsftEdMDmeuVASttDyOOQPgANSJcQOgF99I1aFzLHAIRUiRhZgrzTZAhuVbhJMAE%2BolYF5Xn3xP96MKpiTwwrt1TIGpOd2z1HVe2mgrWYQmN9BKVxr5pKnaMjSTGj3Q%2BuZefuVPEMdULunjcnQussqg58eHCrmoHZ78R7eJdVnSgGJucxPhgc3J4AHwBRE0X3gT6COMTrbN6smie4mLOuI8ihuwCNGLwG4Ykdsf6MuPCVss4aVHWaJg2QDimZjeXEUpnMa9cblmj86X8m8J3ymZVuGv91Ctl2USluhgDO2u7RDT18m%2Fi6DQAIB3830CO5RTans0jhHxz7mB1difxCWEPdaIScNekz69C3ybtiTf6SEFEEtLwhnAmwdnTOE%2BbZMSW%2F52U3SAdXfMI%2F3tcQGOqUBgCKplGRkgISgpnadlbxqie8HSa8C7T2%2FRbfJNsaO5b%2B8Aor76DBHZRcKtkm5DTjWvO%2B%2BiRU86UMd96b6RYCrbIuZ6jqn0%2BgOdlF17vuJFRYwZVIM7iI2Sv2BbWv3B%2F1tVmiYyfYuMBkwzMyBAa8KW1ZHJbpkMdm7rZV0g1FajnZMfiUpVxq58nR8U9pZG1%2FDAYgVzgfQYj4xhA4Kic5drwmbOlj2&X-Amz-Signature=c5be58e27bba6ec8c3fe80a53c9cdf57aa87c9f3043029127e3104172384786a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q34VTM2O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIifZmlml3NVRmt%2FXm0iMQUCHTBdXQ7pIk%2FGU5XKD2VAiEAuAmuddQTQj96k%2F7FJuZqewkO01moQj9cVX0AfVl60O4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqfMoUSIcKzwSpYByrcA6jcLGC%2BZMmQRATr4gnUY5NthTpT%2Fn9uRaVVWbExDp6qBiPEV1cknBeSR7iIxpVsTWD4bU3b%2Bk080PnQY8D7PFjPlT7zc%2BUB56OJ6sycFgXVcG%2BBL3oFksWarlW5ibvQkwjGaNL0uoEc7aV3H3d9riLnameX22OIpiBxjXJBQZ35xQ8GM7yA%2FBcsUhxh24Qzbwo%2FaN%2BnbDLYHnG4%2BNLOVTdtAFUdf2zVFIOreZLqeWhQzeYUhzOLh7BzQCQJ0R%2Bs7%2BjhXa4D7yuqjvkrO0dPbpzXpojx4ZDKAVzGN4VCXJODWVQl%2FKVJLqGnYXtogb0D60LFFG0BlIFF%2B4mBS02Rajr5k5tKVCYplNmorI9S8CAbGj3B2JXhFN28LAmF0F5jcIGkGj6IGvzr1wjlXQWB0RSrjFR8oOi3P8ZkLxgtFkIHS0uhaYicbLi8BVPI7%2BaFh7hVwxJhbO9U%2B53mPxBdKGzOlOeRk4QOCuIq%2FRH5leQOPnP7YlqCkdZ6j2%2FuYI2SZm3RLikcPI%2FMOKL5ugDXvH15orehAH1BqK874IHwequmDY42xVBUIGT7i1ziH0hsWagvIZ7RZ8CO89pOJC%2F96HkmVmp0g%2Fa4wBmaQdMR4mgpevR3N%2BuBp4H19M44MKHStcQGOqUBuBaJ1ejbsHunGuMgMSxtLwwWZ4cN7zkAn8jWP41fruiqhr25IFU4GFxrn4iq8lNBz03TOx2vtJAHkPJsq0Hy795ClMMmJ3mGVSrHrb1n8n8B5VsBMP4IpMDSW9j8bOKSufxM0DJfAYzahs%2FlCY6tgTJqxzoKevuTNu2cXYZ0Gx7%2FHLw10qJIllFlEj8OETwojN1JPndApXGWi1YVWHqJuqGWzEHP&X-Amz-Signature=3dbdb5d7acdec4ecc028e3d5168f88eba2ee56401967495e3bda9f8b3549b530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRFKFBPH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqUWTMnhb2urj2jO2EoXYvoOpuVgL8rBC3vFgvjogv3AiEA3TP34fJa14KThqSKSJ9Pa0k1ZgWr3cIiSUMiP4g2YigqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFTnurzBlM9vPu8nircA3EjBxFEPh3lNNsIMjjVEUrkE8aQ4%2Bd3PVc0Ug6EYN7C4yjoFK0jg3FytPCMNyGZe7NBrT%2FdltdCjr16k8bAaVuI8Rhq3y0FE4AsruvnJPmxULU2wQO5c7UaJfRkD66kdFLneN0fB798dPeHiuYYEoOUP3gyGwV%2F6mxPdP6HhCOJngpwBpbZoTwR0GEbXtFHu7d%2F4AoCgaVk%2FQP2ua%2Bb27roKsPSLTWIyIkWY1K0HKw50Ac2G4CpuzcLYYC0HvaJN5HoEP%2BWjY3K3216hE5V2ZVQuLadGt7GbfjwpTDE7BcGMdBN29rO8i7a3G25fh6VqkQ4c53wUBjBeRqg38LG%2BwFfK7r6k%2Bv2FnHD8O1RWinNPgaNCIccKI%2BlaF6%2FBxXzQZvIEJ61E2ZTz7aycdOZNsd1zPCSiUMPRRBaTzOqDZHvEX5S%2BztkZv9KIFnCIJPX8HmClSB8Gpx5e5eQQyzn5yd%2BNHEjNyx%2FBRjPlLtaCvhOrAQQllLCyADu8cX7o42Y%2FzQRBQFJaCyilRnIhpin2tBnRlxADesRridQS%2F89%2F1niHHf0K%2Bju7r4mb%2FKf6wXKVTucu8brEWoRTb9NJx5Jucxb6lQIHGHTioAoaF62f2Gz9DE2CnrDbYksBkn%2BMJr3tcQGOqUBXPTL0i5%2BzudoaSvECJXgWfbuV8EY%2B4ZcskCH1E%2BdgRPyd0OPaihhUOlnNxFKASJVrg1b9X6yQReME20IkbeepatauR2SZemsnYsG2atrux%2Bln4y0B8XeJTQ6QmsvgtQ7Lmb9CKyVTD4RFNTenlKwUgIcVgySbDdMT1poTTRRO0KyDKO1L6WjV%2BfqDEf4i7FNiybyMYpf8vc5A8X1f3TRy2UJDgRY&X-Amz-Signature=5a46e7dafce5bfc679e658189eccc800a9224dcfe3ed47d397e4a06cb49dee9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q34VTM2O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIifZmlml3NVRmt%2FXm0iMQUCHTBdXQ7pIk%2FGU5XKD2VAiEAuAmuddQTQj96k%2F7FJuZqewkO01moQj9cVX0AfVl60O4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqfMoUSIcKzwSpYByrcA6jcLGC%2BZMmQRATr4gnUY5NthTpT%2Fn9uRaVVWbExDp6qBiPEV1cknBeSR7iIxpVsTWD4bU3b%2Bk080PnQY8D7PFjPlT7zc%2BUB56OJ6sycFgXVcG%2BBL3oFksWarlW5ibvQkwjGaNL0uoEc7aV3H3d9riLnameX22OIpiBxjXJBQZ35xQ8GM7yA%2FBcsUhxh24Qzbwo%2FaN%2BnbDLYHnG4%2BNLOVTdtAFUdf2zVFIOreZLqeWhQzeYUhzOLh7BzQCQJ0R%2Bs7%2BjhXa4D7yuqjvkrO0dPbpzXpojx4ZDKAVzGN4VCXJODWVQl%2FKVJLqGnYXtogb0D60LFFG0BlIFF%2B4mBS02Rajr5k5tKVCYplNmorI9S8CAbGj3B2JXhFN28LAmF0F5jcIGkGj6IGvzr1wjlXQWB0RSrjFR8oOi3P8ZkLxgtFkIHS0uhaYicbLi8BVPI7%2BaFh7hVwxJhbO9U%2B53mPxBdKGzOlOeRk4QOCuIq%2FRH5leQOPnP7YlqCkdZ6j2%2FuYI2SZm3RLikcPI%2FMOKL5ugDXvH15orehAH1BqK874IHwequmDY42xVBUIGT7i1ziH0hsWagvIZ7RZ8CO89pOJC%2F96HkmVmp0g%2Fa4wBmaQdMR4mgpevR3N%2BuBp4H19M44MKHStcQGOqUBuBaJ1ejbsHunGuMgMSxtLwwWZ4cN7zkAn8jWP41fruiqhr25IFU4GFxrn4iq8lNBz03TOx2vtJAHkPJsq0Hy795ClMMmJ3mGVSrHrb1n8n8B5VsBMP4IpMDSW9j8bOKSufxM0DJfAYzahs%2FlCY6tgTJqxzoKevuTNu2cXYZ0Gx7%2FHLw10qJIllFlEj8OETwojN1JPndApXGWi1YVWHqJuqGWzEHP&X-Amz-Signature=cc861f132368ee67341d7b2b51b60bdbe89a660248d059a128afc6882027848c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>code up until this point</summary>
      <div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K4RUTL3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDO2dX%2F%2BnOmCK%2FKhG%2FgyahjUpwo%2FbtlDjvDpLTIuImygIgWE%2BrdiXc1TqDHyt%2Fls8zuF4uCvs9Ci9lWzVJdGFJRMAqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLFyJVDa9Sd9SJt0CrcAwJO0rX5eLCeSrWkykpy7txfoITC5W4LuMMnaw%2FflpdZHnqEn8X%2Bo9y%2BRdkV9Z4TI5zPlUSa%2B%2FHOCjZlmd4%2FjYQyykVN6TaWTwQFiHRp3lcq8KuiMQ5jXPQDDq56%2BjSMTtgoXwlmKZiWBnVEa4tCe4d%2FIO9MyqvRfm9e0YP%2BFYA%2BX3l1lV5%2F%2BUCtihdrdbJgGhi44qfIKGhZ5HUTDcjM5aSoUtic%2F5A06No%2F3ZkgLVS0sAx7V0UfUEXEJDEXJotM8yIjFUTAu0H0VcmTEOadSIqsWpE6ohNJPeMUjHpHMJY1FSHWR9rqI%2Fv2EAEiAI7%2BSy%2FPNUk3dDhfgs9N4ubFsraDo6Ac8a%2FzaS9RftDu5HTlb58ldOYSkneIp%2Fn7EmqCtjAMLtOEDx7VPwsBKqDzd5uubooPp%2FUUvsTMcfZLfbibmCur0I9dZnb2%2BOYGZMLnxOqsJ8ymXfgt4HCIAJqMKzhdpU1TsnXhdsRh1IoA3M4wcMn%2FO49bMqQyLmh44DmGoPn2IWFKGSfLKP0jx2paPeq8UWLklKjMSif9vUwl7WdpAs%2B1Gzcqwg9frWG%2Fz7dm96bnUBSQ2AfLpALdsDasN0wcG5qDirmI%2BB21PqkT2ayWu2%2FvnHh8ttVmCGSHMKX3tcQGOqUBrnVBySsoJ63gQi%2BlZ2ZcVzTp5Tb1Ps5oD8qoYfA4FrndnyuqLO2umvM1IMoJUCmCIFaL1Tah37YyGO7eG18Gu7fw5o5gxbGYnCrZKYXrP440M4c3eIvnaJOizDdml4AlSjWglQq1d%2Fc60fkIzS8RBBZVbWJAyFdBCC29pqqDUlI6i1OXXG3x%2BySKsiUYHGPJNBnNqIEdQseMq7Wq54J0U4sfaygw&X-Amz-Signature=cfede2553789f563b6de6600d27ea4500837bb3def0fa73339891c6500156516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>
  </details>

### Adding Collision and Inertia

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

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

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSEYAXFS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZUmWiZot5VYpV59b%2ByQI5wEggl293WuMezPhI4YMlfwIgJI7tDpL9uI8FBWArN3aSonJ%2BNsQZ0ENDG8%2BCwKhY7bgqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwRcnqhggLVClcaoyrcA%2BWcjX16%2FABAnzeBs68Wktr0kZYwVFGnyYIajVoOtaZ%2F15Q3LhW7KdFZdbUmIpIjZe0j9HPxM01l1NxPJZFK3M2Amk%2B2ImL8Xe%2FxPqbPmclpfYoxUuTRmvCUV5frJqAW9dN8AK6iqLhAlcN7iaYWVNpmQtlNwBPrwcXWkMKgvDj5igynwC%2BAjl8unqbQx5lwrHp6by382DmS%2BZxplVJzL94DT3XBt35t9J3cKCkcY6TAiz7woeIHwhOvYVYmreWf7ysWUsJBS6qvSFLTvLoF989%2Fylig0M05b2ukY4USOupcPyTF6WHBh8rglQB7Sgp5tPeSIgJhnnsUUNVJnxklbi9B37Nl9tJ72o44xou5FXgjOE%2FCp%2F4lBbjSmwib9qJv9b1eIM8BLkxEWRjUVEUiiQD1fjLBOc6tvDb2LYQAPB6iNdiR%2BeWQCk4Vq62m1VkxFcdbKC%2Fu2WvQowbSseZZw2wYMrH2FmSduqGkHJdbNtqRz2aZbPaVVyFGMccELvCS7Bt75V3zYWJ6bbgnFslADRRzIr2T%2FIioK0XnYK4%2B3Mo%2F3Sf%2BdI6m1qnPqVjvrsbBttJKGreLG6F0GyocN5GZTMSFNsujFHSe1fxroXty%2FH3C3FH1Ac0V3yGtGdaOMLb3tcQGOqUBbFHXaIQXul3Lc4RjjPdTlEQb9PKgtlb68Z649OSuzLTvrFu%2F%2FAiViJc%2BUv8jB07rPhS6aFFO8Bd9N%2BJNOXMEaT1U8Ux%2FB1zX5cs9yFKNvXdHwpjjbDVmTqJGh99SciHsydPejaQgEYp7pP6Cl6rh5MVwBEamELys8%2Bp0pZ5i5fZhxzB4fw%2FN1naE1hMkFX1bA0ih7%2BOCTZLS3kaak1SwRtqSd0Gi&X-Amz-Signature=5b41d0c8947d255fe3e54e30a5982bd380aa75154255a76a326138c715adae17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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
    
    <collision>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
    </collision>
    
    <xacro:box_inertia m="15" w="${base_width}" d="${base_length}" h="${base_height}"/>
  </link>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WYE4AGY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEA3ztBOpXzaIRjuE7Nzd5pFnXzBPj5ZfMyiBR%2B9t16AiA%2FvSxJKzKIww5hXBnS%2FJr5APdycYf%2Bqy1C5ncuwIgK0CqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMipVpqRajyiapb%2BwkKtwDOFFuAXMksCdP9YR7xT5xwdfHj4YdvKLkS0FcLRQ%2BSd%2FT9mq8zSjMYTxqRJd64cieRZ%2BxFpfFheKFv9VeyVjwzHgbaon6vqkOytFViBjT3a6NufP4lQ0tjLJuHNFkSMuG2MWBSCcd3qeEMeFFxnI2yjLqQxijVe4my0dx95QbeT%2BuYP2PzS9iEuj0gRlvs0ECnIhB2Tkwwp4GSiD8VFKyUZ%2FecyKgX%2FaD%2FmfbFHanSnAP4ayUfYRm%2F2BTs7V3m5knh6WnEYhBC3QZPMESFpioUrWbEaUiPEURdXSDq%2FYiS6gtTUpUX7jxkjIrGObCFB%2F71JD8iWF70Claprp1O91NfJ9oZQ1zo5WCZsuMxidrC1BusdSXSmbSSu4xlyXBMI0r%2BV3D8bRgm7WM%2FlcVJfKYJNPbdGKCOchXwrGm%2BSJ0MpMD6IcnrrQrNbMzZLIR0xBYAav1q%2BnZ%2B4fW8%2BSut%2BainYYthVPNJRy8dCHsDNQhMQ5uPSUppxJRxM39uIki1IFnufVaA1ctNwDYUnl0FhNF%2FIN4cr86D1UxAshinAohUhwa%2Fws0JUgEbmSsq%2F34g%2BjPtuc%2BNGfR6pf2Gu5deZ%2BTIe7pZivqPlJ6lrEdxRC1ScBdJiBUCARrULHaulIw7fa1xAY6pgEjQk0yCqhwNCbVr2t77f72h1xNDgWAMf3NATq%2Fe6OCcBfedzU5k%2BWZxKMBrwFVvPNRRzyFNHC1K6Wuow5sJEQkjK1ZNXhHYbPiU3y5Ta2W7Srj2VFhGLc1JbpqimtLB0X%2B4Atux2d8eRNRSDWF6FPkwVsoHUFjDFkd0ekstFrEMY5RACSItwFzbtY0Yp25DtUt299gCsoXaBjm9XhMgTbqJxwDzh8g&X-Amz-Signature=13d5971c6432000452dcb87255ff903b110181dccdeb3bbe9332775b28e26d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUGRRAT7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrQGAeCOgqAl%2BzED%2Br6eO1qz6bGbr5qPIj7LXNJ0NsjwIgOKgvbk1FTtq0WedNZLZpY9v1epKqqw4R%2FHmkdgtUQXwqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDL0xnBSO0da47NyICrcA5UA3Oq9pVyOOlXoZbfp3oniJTJaXh1hCYMDr7qNHVp%2Bqsz9zZbqfgy6umBkeQ%2BDQaqyLSnJ71rjTA3dteE9Kh3yhcBN6uckWp7aNh8fnIaO9VAndNFV9I7oMIF%2B%2FymE0LqYd7I5GC%2BYmJRUVeZYhDPCOIQjtemDSJmbtga3j9ty6kqI1hC1oLO6zzi7w6JIKxENyHneHdkJ5O9jQYn%2F4gD6bV9h%2FVTxJyVHAVtt7XxTY5ryJC%2FoqrhtlhED%2BNeE1d5nDOUW0LZmP3Rs4tP2Ch%2F3QnRxB%2FfYGEHNCbOQM1Sid2D8tit3e35RIDqi1eb03zujclllDdcHc57o2obzWZ9Ga3RxXBQeHnyCR2BiQys7Thh5ImvVeDtqMj4Iyc2Ew5DQNluzUzQclLal7F9VW4NtEyVyIiOxVOJ2uNK8uXMjhO2pW4h5FopIQN38ZqENQlOvM1RXJbeh0i2mLwZ%2F%2FU3DgbeCI7cwXeu6FXY%2FLNj5EGD4FEEJ77%2FKrEuX5LCT49A%2FLa31YCK3QtP7dEoxRx%2BeAEUjNAyHBn55%2BZlSBeRlI%2FJF64eMSSPkd6%2FM3ZnLSf5q7gonQqnU7slR9DWPWUsN4pUU1PPlxEmGs%2Fkauyttbdwh3X1muPCF4NxKMJL3tcQGOqUBeij4n6IREcLbnUvmB4iudODV5cqFQNkVQ6QV%2B%2FeCxb78zErw6sHzAdsr0BNLthlK4nzCuNf2BtT8Qqto7L%2BvpXbuRpLRdf%2BWut1II%2BgEloq5nJXBCF7DlpxzZwcwUmIrYCQobx2dK4vxc%2Fbs8FdU%2FAjzYSaV%2B%2FMXTjU0EArqpFcNIWNsXyICbREFpXp2YLgNEcS3k6tHmC%2FEXLR1v31Z67WLLIfQ&X-Amz-Signature=8c0ba882c5dd2da4c68c0cda410ed62be741506a2a8be404c9dad5cb467dc97a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDQFBQV2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8UcsGNmSyhVFkkCdm%2FNYqZjono90vvgB%2FepOWokQbzQIhANWbkJdZcDTx7J79yG2xLjm3UlVvKEnsubInMOnQl6RSKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnR%2B52Yy9mkzYabHIq3AO4yWdrle%2BXEzi2qRHBbQpUxBKjXnUSB7wU7Zu5bavI9%2BBhJPApV%2BSbN%2F0SAN3G6GeHCnk5jXRRv9GNnWJOCSfin6mAAnOQbvFfpKgTm6jav3D8kMUXd6SLdfdsFYzleeSD2hvfMDnIrTOblcg5KLb1wVX5wYDD6%2FqYivKgJh%2BQPtZ2DGImJvwg9btiKNAz2hiVDiGYcoMQBMQfdeSxu%2F%2F2QXBwshRrqcLZ1AAlm7y6B1RFeUBtJZF5Xr0dbFOE2kRR7pVYNUQuhu2hYCpbkQ67OgkNUOi836R4TiS0D2Y5uyax6QYPkzX%2FTH0IMclDYCcj0C00LoXqp7HnX%2Bg6dLM5TKF4zunySuElwOvKwDYfPyc2%2FnOqYdh%2BPznXCJ8yl%2BOzLusYQWpaR6TyTfvJYNaqdNVD0J3lWOV3m3qLi9VwNKYFBqZEDI%2FUsLbPLgj0e49iwOOlpkUS%2FDQE%2BD403MW0ZLBcoazn7JYkckvhprPfUMkSWFQVnJMwarcA6ncUPMieDH3Th0rqQd66xEF5XPQ85Y%2BGFxTuRAOUwGOMuFOM9ysFfR99U3rsDTMZ4M61U4K%2FHTST2XCQg3tR%2BPz9rp%2BNDbdr0QezpDATp5Ep7dTzduko8%2BsNFknhoxWEeTDt9rXEBjqkAYIFz9o3%2FeaNy%2FM6xl9XfEGNkiqKU69H7NdF8FVRTbC1QFtGpKFlqsUfATJ6IDej2BySFrVFfm%2Fn89R3WEPybLRrvuQoWI8cpy%2FYDBdkN9MPVT%2B5mCu%2B6KzIxfs5z%2FNH7lxG9JrxDkDewzc9tb4Sg%2BTpWyLz5Tk%2FB7czyWwqXKkVHGcZWtqdCAuljC705c0ZLM7KX8WhDgv6BM8Gm74Vtfm6bI20&X-Amz-Signature=0e71fd333beaf2a518a5aa03a533fb30ad97e92a2f1141604968a47fb8faf572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q34VTM2O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIifZmlml3NVRmt%2FXm0iMQUCHTBdXQ7pIk%2FGU5XKD2VAiEAuAmuddQTQj96k%2F7FJuZqewkO01moQj9cVX0AfVl60O4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqfMoUSIcKzwSpYByrcA6jcLGC%2BZMmQRATr4gnUY5NthTpT%2Fn9uRaVVWbExDp6qBiPEV1cknBeSR7iIxpVsTWD4bU3b%2Bk080PnQY8D7PFjPlT7zc%2BUB56OJ6sycFgXVcG%2BBL3oFksWarlW5ibvQkwjGaNL0uoEc7aV3H3d9riLnameX22OIpiBxjXJBQZ35xQ8GM7yA%2FBcsUhxh24Qzbwo%2FaN%2BnbDLYHnG4%2BNLOVTdtAFUdf2zVFIOreZLqeWhQzeYUhzOLh7BzQCQJ0R%2Bs7%2BjhXa4D7yuqjvkrO0dPbpzXpojx4ZDKAVzGN4VCXJODWVQl%2FKVJLqGnYXtogb0D60LFFG0BlIFF%2B4mBS02Rajr5k5tKVCYplNmorI9S8CAbGj3B2JXhFN28LAmF0F5jcIGkGj6IGvzr1wjlXQWB0RSrjFR8oOi3P8ZkLxgtFkIHS0uhaYicbLi8BVPI7%2BaFh7hVwxJhbO9U%2B53mPxBdKGzOlOeRk4QOCuIq%2FRH5leQOPnP7YlqCkdZ6j2%2FuYI2SZm3RLikcPI%2FMOKL5ugDXvH15orehAH1BqK874IHwequmDY42xVBUIGT7i1ziH0hsWagvIZ7RZ8CO89pOJC%2F96HkmVmp0g%2Fa4wBmaQdMR4mgpevR3N%2BuBp4H19M44MKHStcQGOqUBuBaJ1ejbsHunGuMgMSxtLwwWZ4cN7zkAn8jWP41fruiqhr25IFU4GFxrn4iq8lNBz03TOx2vtJAHkPJsq0Hy795ClMMmJ3mGVSrHrb1n8n8B5VsBMP4IpMDSW9j8bOKSufxM0DJfAYzahs%2FlCY6tgTJqxzoKevuTNu2cXYZ0Gx7%2FHLw10qJIllFlEj8OETwojN1JPndApXGWi1YVWHqJuqGWzEHP&X-Amz-Signature=8a06a0eddbd6bd2e75ba5160618049409d45a334ba00795e980e9872cda618e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Types of blocks in URDF:

- robot
- vars/Properties
- macros
	- inertial
		- origin
		- mass
		- inertia
- link:
	- visual
		- geometry
			- box
			- cylinder
			- sphere
		- material
			- color
	- collision
		- ~~origin~~
		- geometry
		- friction
	- xacro:box_inertia
	- xacro:cylinder_inertia
	- xacro:sphere_inertia
- joint:
	- parent
	- child
	- ~~origin~~
	- axis
- xacro:wheel

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

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NSWXJ32%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ65smhOTNr5aQ4eoyz317lcpakeosjbGUSEhOU%2FNacwIhAMMMKuWI%2Bkonkzn650%2FaQ6mr0e105NmrDnaQZE%2Btk76dKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyud0LEeejbAV7vVJcq3APgln5ik3CVYBj95GC74PbEiLUskFzqSfDK2vE2VNkfiOKmKnosSdwHzO6GpTaW7OyskQKONXatZBz%2B1UONU7HvljjOzMhHIgKfqmiVRlBEon78uo9aklxeA4W8N4FwCNtir2U%2BVXPhxD7zxCNR5ALDxuGt8JrfBgcY6YQt4zLkelQZPyfkfdlEFGN96oY7UJayEmAasqvfYUGFq8m9a6hoXlouGj16ZfpAs319EPlNmNX0968LDkxXZxZuHA4z07X5DNR5spJjqR5HXwF2jvXsKzPqKXh4cA8sf0cY%2F%2BPvE28KU4CxHulSaQy9Duxu%2FeXI77eFzdpRDHsxo8zWv34F9PMFZ3S2jERE4MosTKt3%2FqtkmmjC0SYcyX%2BqRn6cUvM5ymRcl7T2YvWLjQ8PCrzoCxzJy6i515xjOUdkRnRW%2F0s7YUxJLMreqaCHpQwhkwLUH4wpxImhj%2Ffwy%2FE7RPo01OcXJJc9J%2FPGOEBad3y384QjwvLS3WogAp9S02fPOx2AkxrYn3ru5%2F9brauNXR6PpEfdWLPOkQSBxQP0zFkqOrbaTfGR54RgNWPWBKeipmPeyDDMSrx6VH00DXON1J2YrPnnADoTaGKIX%2BRqwWhIB7MMRhdFbK5puc8n%2BjCx0rXEBjqkAUizwJmwBWqlD%2Fbxc9HLcnmhAgjjYnmSrbRi0mTrhkeaMwH3Eucqk9dRP5ZnXHh9DjrzAQta2CmfOgzBdhKhXbMpM2Ic904tSAapHdZ9YjMvr8nOMKRLen35RjwWHnmwmdKTQ3NexLffBT2Wrhd6KNv%2FBMPd0%2F%2BxXJ%2Fzxmd%2F4VpdIjbsB9A46pTkrn%2BG8%2Fhltqf8ldF4RMRxFIEEaWBPXgXNX8Xk&X-Amz-Signature=2be6f79016911b71d667adbb715d47dc4c9c47f286f0638a9e6aea851c957204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**             | **Type** |
| -------------------- | -------- |
| `/tf`                |          |
| `/robot_description` |          |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**            | **Type** |
| ------------------- | -------- |
| `robot_description` | file     |
| `use_sim_time`      | bool     |

{{< /table >}}

#### description:

Node that takes in the `urdf` and puts it into ROS

Takes 2 major inputs:

- `urdf` file and publishes all transforms in the `/tf` topic
- `/joint_states` topic that takes in all the states of joints in the `urdf`

{{% /alert %}}

{{% alert icon=”👾” context="success" %}}

### **New Node** **`joint`**_**`_`**_**`state_publisher_gui`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NSWXJ32%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ65smhOTNr5aQ4eoyz317lcpakeosjbGUSEhOU%2FNacwIhAMMMKuWI%2Bkonkzn650%2FaQ6mr0e105NmrDnaQZE%2Btk76dKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyud0LEeejbAV7vVJcq3APgln5ik3CVYBj95GC74PbEiLUskFzqSfDK2vE2VNkfiOKmKnosSdwHzO6GpTaW7OyskQKONXatZBz%2B1UONU7HvljjOzMhHIgKfqmiVRlBEon78uo9aklxeA4W8N4FwCNtir2U%2BVXPhxD7zxCNR5ALDxuGt8JrfBgcY6YQt4zLkelQZPyfkfdlEFGN96oY7UJayEmAasqvfYUGFq8m9a6hoXlouGj16ZfpAs319EPlNmNX0968LDkxXZxZuHA4z07X5DNR5spJjqR5HXwF2jvXsKzPqKXh4cA8sf0cY%2F%2BPvE28KU4CxHulSaQy9Duxu%2FeXI77eFzdpRDHsxo8zWv34F9PMFZ3S2jERE4MosTKt3%2FqtkmmjC0SYcyX%2BqRn6cUvM5ymRcl7T2YvWLjQ8PCrzoCxzJy6i515xjOUdkRnRW%2F0s7YUxJLMreqaCHpQwhkwLUH4wpxImhj%2Ffwy%2FE7RPo01OcXJJc9J%2FPGOEBad3y384QjwvLS3WogAp9S02fPOx2AkxrYn3ru5%2F9brauNXR6PpEfdWLPOkQSBxQP0zFkqOrbaTfGR54RgNWPWBKeipmPeyDDMSrx6VH00DXON1J2YrPnnADoTaGKIX%2BRqwWhIB7MMRhdFbK5puc8n%2BjCx0rXEBjqkAUizwJmwBWqlD%2Fbxc9HLcnmhAgjjYnmSrbRi0mTrhkeaMwH3Eucqk9dRP5ZnXHh9DjrzAQta2CmfOgzBdhKhXbMpM2Ic904tSAapHdZ9YjMvr8nOMKRLen35RjwWHnmwmdKTQ3NexLffBT2Wrhd6KNv%2FBMPd0%2F%2BxXJ%2Fzxmd%2F4VpdIjbsB9A46pTkrn%2BG8%2Fhltqf8ldF4RMRxFIEEaWBPXgXNX8Xk&X-Amz-Signature=fbf45a363d3844e08ac296f49b48968edbeedc4c74f35768aaf26b7530d0dd1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**             | **Type** |
| -------------------- | -------- |
| `/robot_description` |          |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}

#### description:

lets you debug your `urdf` to see if all your joints work correctly.

Takes `/robot_description` from `robot_state_publisher` and outputs `/joint_states` with adjustable sliders

designed to be replaced by a physical robot or a simulated robot node

{{% /alert %}}

## Current Node diagram

With the two nodes we are going to make this diagram:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NSWXJ32%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ65smhOTNr5aQ4eoyz317lcpakeosjbGUSEhOU%2FNacwIhAMMMKuWI%2Bkonkzn650%2FaQ6mr0e105NmrDnaQZE%2Btk76dKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyud0LEeejbAV7vVJcq3APgln5ik3CVYBj95GC74PbEiLUskFzqSfDK2vE2VNkfiOKmKnosSdwHzO6GpTaW7OyskQKONXatZBz%2B1UONU7HvljjOzMhHIgKfqmiVRlBEon78uo9aklxeA4W8N4FwCNtir2U%2BVXPhxD7zxCNR5ALDxuGt8JrfBgcY6YQt4zLkelQZPyfkfdlEFGN96oY7UJayEmAasqvfYUGFq8m9a6hoXlouGj16ZfpAs319EPlNmNX0968LDkxXZxZuHA4z07X5DNR5spJjqR5HXwF2jvXsKzPqKXh4cA8sf0cY%2F%2BPvE28KU4CxHulSaQy9Duxu%2FeXI77eFzdpRDHsxo8zWv34F9PMFZ3S2jERE4MosTKt3%2FqtkmmjC0SYcyX%2BqRn6cUvM5ymRcl7T2YvWLjQ8PCrzoCxzJy6i515xjOUdkRnRW%2F0s7YUxJLMreqaCHpQwhkwLUH4wpxImhj%2Ffwy%2FE7RPo01OcXJJc9J%2FPGOEBad3y384QjwvLS3WogAp9S02fPOx2AkxrYn3ru5%2F9brauNXR6PpEfdWLPOkQSBxQP0zFkqOrbaTfGR54RgNWPWBKeipmPeyDDMSrx6VH00DXON1J2YrPnnADoTaGKIX%2BRqwWhIB7MMRhdFbK5puc8n%2BjCx0rXEBjqkAUizwJmwBWqlD%2Fbxc9HLcnmhAgjjYnmSrbRi0mTrhkeaMwH3Eucqk9dRP5ZnXHh9DjrzAQta2CmfOgzBdhKhXbMpM2Ic904tSAapHdZ9YjMvr8nOMKRLen35RjwWHnmwmdKTQ3NexLffBT2Wrhd6KNv%2FBMPd0%2F%2BxXJ%2Fzxmd%2F4VpdIjbsB9A46pTkrn%2BG8%2Fhltqf8ldF4RMRxFIEEaWBPXgXNX8Xk&X-Amz-Signature=6c10a586d4d698174f8772a9a5ca2b4cfb9874c280831f4be68e17d7ed1932df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NSWXJ32%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ65smhOTNr5aQ4eoyz317lcpakeosjbGUSEhOU%2FNacwIhAMMMKuWI%2Bkonkzn650%2FaQ6mr0e105NmrDnaQZE%2Btk76dKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyud0LEeejbAV7vVJcq3APgln5ik3CVYBj95GC74PbEiLUskFzqSfDK2vE2VNkfiOKmKnosSdwHzO6GpTaW7OyskQKONXatZBz%2B1UONU7HvljjOzMhHIgKfqmiVRlBEon78uo9aklxeA4W8N4FwCNtir2U%2BVXPhxD7zxCNR5ALDxuGt8JrfBgcY6YQt4zLkelQZPyfkfdlEFGN96oY7UJayEmAasqvfYUGFq8m9a6hoXlouGj16ZfpAs319EPlNmNX0968LDkxXZxZuHA4z07X5DNR5spJjqR5HXwF2jvXsKzPqKXh4cA8sf0cY%2F%2BPvE28KU4CxHulSaQy9Duxu%2FeXI77eFzdpRDHsxo8zWv34F9PMFZ3S2jERE4MosTKt3%2FqtkmmjC0SYcyX%2BqRn6cUvM5ymRcl7T2YvWLjQ8PCrzoCxzJy6i515xjOUdkRnRW%2F0s7YUxJLMreqaCHpQwhkwLUH4wpxImhj%2Ffwy%2FE7RPo01OcXJJc9J%2FPGOEBad3y384QjwvLS3WogAp9S02fPOx2AkxrYn3ru5%2F9brauNXR6PpEfdWLPOkQSBxQP0zFkqOrbaTfGR54RgNWPWBKeipmPeyDDMSrx6VH00DXON1J2YrPnnADoTaGKIX%2BRqwWhIB7MMRhdFbK5puc8n%2BjCx0rXEBjqkAUizwJmwBWqlD%2Fbxc9HLcnmhAgjjYnmSrbRi0mTrhkeaMwH3Eucqk9dRP5ZnXHh9DjrzAQta2CmfOgzBdhKhXbMpM2Ic904tSAapHdZ9YjMvr8nOMKRLen35RjwWHnmwmdKTQ3NexLffBT2Wrhd6KNv%2FBMPd0%2F%2BxXJ%2Fzxmd%2F4VpdIjbsB9A46pTkrn%2BG8%2Fhltqf8ldF4RMRxFIEEaWBPXgXNX8Xk&X-Amz-Signature=e14f861bb3acf3055165d82bde7c279c63695c50d93d50031aefa3684f9ce437&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NSWXJ32%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ65smhOTNr5aQ4eoyz317lcpakeosjbGUSEhOU%2FNacwIhAMMMKuWI%2Bkonkzn650%2FaQ6mr0e105NmrDnaQZE%2Btk76dKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyud0LEeejbAV7vVJcq3APgln5ik3CVYBj95GC74PbEiLUskFzqSfDK2vE2VNkfiOKmKnosSdwHzO6GpTaW7OyskQKONXatZBz%2B1UONU7HvljjOzMhHIgKfqmiVRlBEon78uo9aklxeA4W8N4FwCNtir2U%2BVXPhxD7zxCNR5ALDxuGt8JrfBgcY6YQt4zLkelQZPyfkfdlEFGN96oY7UJayEmAasqvfYUGFq8m9a6hoXlouGj16ZfpAs319EPlNmNX0968LDkxXZxZuHA4z07X5DNR5spJjqR5HXwF2jvXsKzPqKXh4cA8sf0cY%2F%2BPvE28KU4CxHulSaQy9Duxu%2FeXI77eFzdpRDHsxo8zWv34F9PMFZ3S2jERE4MosTKt3%2FqtkmmjC0SYcyX%2BqRn6cUvM5ymRcl7T2YvWLjQ8PCrzoCxzJy6i515xjOUdkRnRW%2F0s7YUxJLMreqaCHpQwhkwLUH4wpxImhj%2Ffwy%2FE7RPo01OcXJJc9J%2FPGOEBad3y384QjwvLS3WogAp9S02fPOx2AkxrYn3ru5%2F9brauNXR6PpEfdWLPOkQSBxQP0zFkqOrbaTfGR54RgNWPWBKeipmPeyDDMSrx6VH00DXON1J2YrPnnADoTaGKIX%2BRqwWhIB7MMRhdFbK5puc8n%2BjCx0rXEBjqkAUizwJmwBWqlD%2Fbxc9HLcnmhAgjjYnmSrbRi0mTrhkeaMwH3Eucqk9dRP5ZnXHh9DjrzAQta2CmfOgzBdhKhXbMpM2Ic904tSAapHdZ9YjMvr8nOMKRLen35RjwWHnmwmdKTQ3NexLffBT2Wrhd6KNv%2FBMPd0%2F%2BxXJ%2Fzxmd%2F4VpdIjbsB9A46pTkrn%2BG8%2Fhltqf8ldF4RMRxFIEEaWBPXgXNX8Xk&X-Amz-Signature=e1807d039b6ea57cb663ec2e6b3f17e80d7f32deaa4d86439d18dd5f54aec86c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NSWXJ32%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ65smhOTNr5aQ4eoyz317lcpakeosjbGUSEhOU%2FNacwIhAMMMKuWI%2Bkonkzn650%2FaQ6mr0e105NmrDnaQZE%2Btk76dKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyud0LEeejbAV7vVJcq3APgln5ik3CVYBj95GC74PbEiLUskFzqSfDK2vE2VNkfiOKmKnosSdwHzO6GpTaW7OyskQKONXatZBz%2B1UONU7HvljjOzMhHIgKfqmiVRlBEon78uo9aklxeA4W8N4FwCNtir2U%2BVXPhxD7zxCNR5ALDxuGt8JrfBgcY6YQt4zLkelQZPyfkfdlEFGN96oY7UJayEmAasqvfYUGFq8m9a6hoXlouGj16ZfpAs319EPlNmNX0968LDkxXZxZuHA4z07X5DNR5spJjqR5HXwF2jvXsKzPqKXh4cA8sf0cY%2F%2BPvE28KU4CxHulSaQy9Duxu%2FeXI77eFzdpRDHsxo8zWv34F9PMFZ3S2jERE4MosTKt3%2FqtkmmjC0SYcyX%2BqRn6cUvM5ymRcl7T2YvWLjQ8PCrzoCxzJy6i515xjOUdkRnRW%2F0s7YUxJLMreqaCHpQwhkwLUH4wpxImhj%2Ffwy%2FE7RPo01OcXJJc9J%2FPGOEBad3y384QjwvLS3WogAp9S02fPOx2AkxrYn3ru5%2F9brauNXR6PpEfdWLPOkQSBxQP0zFkqOrbaTfGR54RgNWPWBKeipmPeyDDMSrx6VH00DXON1J2YrPnnADoTaGKIX%2BRqwWhIB7MMRhdFbK5puc8n%2BjCx0rXEBjqkAUizwJmwBWqlD%2Fbxc9HLcnmhAgjjYnmSrbRi0mTrhkeaMwH3Eucqk9dRP5ZnXHh9DjrzAQta2CmfOgzBdhKhXbMpM2Ic904tSAapHdZ9YjMvr8nOMKRLen35RjwWHnmwmdKTQ3NexLffBT2Wrhd6KNv%2FBMPd0%2F%2BxXJ%2Fzxmd%2F4VpdIjbsB9A46pTkrn%2BG8%2Fhltqf8ldF4RMRxFIEEaWBPXgXNX8Xk&X-Amz-Signature=757d97c1a3657bb3c3184b872655da5ee5d2adc8509dfbe88efecf548bc307d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Launch file

<details>
      <summary>What is in this launch file?</summary>
      TODO:
  </details>

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

```python

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

{{% alert context="warning" %}}

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NSWXJ32%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ65smhOTNr5aQ4eoyz317lcpakeosjbGUSEhOU%2FNacwIhAMMMKuWI%2Bkonkzn650%2FaQ6mr0e105NmrDnaQZE%2Btk76dKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyud0LEeejbAV7vVJcq3APgln5ik3CVYBj95GC74PbEiLUskFzqSfDK2vE2VNkfiOKmKnosSdwHzO6GpTaW7OyskQKONXatZBz%2B1UONU7HvljjOzMhHIgKfqmiVRlBEon78uo9aklxeA4W8N4FwCNtir2U%2BVXPhxD7zxCNR5ALDxuGt8JrfBgcY6YQt4zLkelQZPyfkfdlEFGN96oY7UJayEmAasqvfYUGFq8m9a6hoXlouGj16ZfpAs319EPlNmNX0968LDkxXZxZuHA4z07X5DNR5spJjqR5HXwF2jvXsKzPqKXh4cA8sf0cY%2F%2BPvE28KU4CxHulSaQy9Duxu%2FeXI77eFzdpRDHsxo8zWv34F9PMFZ3S2jERE4MosTKt3%2FqtkmmjC0SYcyX%2BqRn6cUvM5ymRcl7T2YvWLjQ8PCrzoCxzJy6i515xjOUdkRnRW%2F0s7YUxJLMreqaCHpQwhkwLUH4wpxImhj%2Ffwy%2FE7RPo01OcXJJc9J%2FPGOEBad3y384QjwvLS3WogAp9S02fPOx2AkxrYn3ru5%2F9brauNXR6PpEfdWLPOkQSBxQP0zFkqOrbaTfGR54RgNWPWBKeipmPeyDDMSrx6VH00DXON1J2YrPnnADoTaGKIX%2BRqwWhIB7MMRhdFbK5puc8n%2BjCx0rXEBjqkAUizwJmwBWqlD%2Fbxc9HLcnmhAgjjYnmSrbRi0mTrhkeaMwH3Eucqk9dRP5ZnXHh9DjrzAQta2CmfOgzBdhKhXbMpM2Ic904tSAapHdZ9YjMvr8nOMKRLen35RjwWHnmwmdKTQ3NexLffBT2Wrhd6KNv%2FBMPd0%2F%2BxXJ%2Fzxmd%2F4VpdIjbsB9A46pTkrn%2BG8%2Fhltqf8ldF4RMRxFIEEaWBPXgXNX8Xk&X-Amz-Signature=d8cfe338b9f42e81aac3525e752ba781d3029c6c9df66f9fc350963f055fd32d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NSWXJ32%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ65smhOTNr5aQ4eoyz317lcpakeosjbGUSEhOU%2FNacwIhAMMMKuWI%2Bkonkzn650%2FaQ6mr0e105NmrDnaQZE%2Btk76dKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyud0LEeejbAV7vVJcq3APgln5ik3CVYBj95GC74PbEiLUskFzqSfDK2vE2VNkfiOKmKnosSdwHzO6GpTaW7OyskQKONXatZBz%2B1UONU7HvljjOzMhHIgKfqmiVRlBEon78uo9aklxeA4W8N4FwCNtir2U%2BVXPhxD7zxCNR5ALDxuGt8JrfBgcY6YQt4zLkelQZPyfkfdlEFGN96oY7UJayEmAasqvfYUGFq8m9a6hoXlouGj16ZfpAs319EPlNmNX0968LDkxXZxZuHA4z07X5DNR5spJjqR5HXwF2jvXsKzPqKXh4cA8sf0cY%2F%2BPvE28KU4CxHulSaQy9Duxu%2FeXI77eFzdpRDHsxo8zWv34F9PMFZ3S2jERE4MosTKt3%2FqtkmmjC0SYcyX%2BqRn6cUvM5ymRcl7T2YvWLjQ8PCrzoCxzJy6i515xjOUdkRnRW%2F0s7YUxJLMreqaCHpQwhkwLUH4wpxImhj%2Ffwy%2FE7RPo01OcXJJc9J%2FPGOEBad3y384QjwvLS3WogAp9S02fPOx2AkxrYn3ru5%2F9brauNXR6PpEfdWLPOkQSBxQP0zFkqOrbaTfGR54RgNWPWBKeipmPeyDDMSrx6VH00DXON1J2YrPnnADoTaGKIX%2BRqwWhIB7MMRhdFbK5puc8n%2BjCx0rXEBjqkAUizwJmwBWqlD%2Fbxc9HLcnmhAgjjYnmSrbRi0mTrhkeaMwH3Eucqk9dRP5ZnXHh9DjrzAQta2CmfOgzBdhKhXbMpM2Ic904tSAapHdZ9YjMvr8nOMKRLen35RjwWHnmwmdKTQ3NexLffBT2Wrhd6KNv%2FBMPd0%2F%2BxXJ%2Fzxmd%2F4VpdIjbsB9A46pTkrn%2BG8%2Fhltqf8ldF4RMRxFIEEaWBPXgXNX8Xk&X-Amz-Signature=9486338951c1f4f282efeefd16f78a2a5f3fd8f86780649aaa7d0c31cdf3aab9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NSWXJ32%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ65smhOTNr5aQ4eoyz317lcpakeosjbGUSEhOU%2FNacwIhAMMMKuWI%2Bkonkzn650%2FaQ6mr0e105NmrDnaQZE%2Btk76dKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyud0LEeejbAV7vVJcq3APgln5ik3CVYBj95GC74PbEiLUskFzqSfDK2vE2VNkfiOKmKnosSdwHzO6GpTaW7OyskQKONXatZBz%2B1UONU7HvljjOzMhHIgKfqmiVRlBEon78uo9aklxeA4W8N4FwCNtir2U%2BVXPhxD7zxCNR5ALDxuGt8JrfBgcY6YQt4zLkelQZPyfkfdlEFGN96oY7UJayEmAasqvfYUGFq8m9a6hoXlouGj16ZfpAs319EPlNmNX0968LDkxXZxZuHA4z07X5DNR5spJjqR5HXwF2jvXsKzPqKXh4cA8sf0cY%2F%2BPvE28KU4CxHulSaQy9Duxu%2FeXI77eFzdpRDHsxo8zWv34F9PMFZ3S2jERE4MosTKt3%2FqtkmmjC0SYcyX%2BqRn6cUvM5ymRcl7T2YvWLjQ8PCrzoCxzJy6i515xjOUdkRnRW%2F0s7YUxJLMreqaCHpQwhkwLUH4wpxImhj%2Ffwy%2FE7RPo01OcXJJc9J%2FPGOEBad3y384QjwvLS3WogAp9S02fPOx2AkxrYn3ru5%2F9brauNXR6PpEfdWLPOkQSBxQP0zFkqOrbaTfGR54RgNWPWBKeipmPeyDDMSrx6VH00DXON1J2YrPnnADoTaGKIX%2BRqwWhIB7MMRhdFbK5puc8n%2BjCx0rXEBjqkAUizwJmwBWqlD%2Fbxc9HLcnmhAgjjYnmSrbRi0mTrhkeaMwH3Eucqk9dRP5ZnXHh9DjrzAQta2CmfOgzBdhKhXbMpM2Ic904tSAapHdZ9YjMvr8nOMKRLen35RjwWHnmwmdKTQ3NexLffBT2Wrhd6KNv%2FBMPd0%2F%2BxXJ%2Fzxmd%2F4VpdIjbsB9A46pTkrn%2BG8%2Fhltqf8ldF4RMRxFIEEaWBPXgXNX8Xk&X-Amz-Signature=16273704c9aba5f639dd13b221c3741e86437b64ac436c7c183798f1e2398791&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NSWXJ32%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ65smhOTNr5aQ4eoyz317lcpakeosjbGUSEhOU%2FNacwIhAMMMKuWI%2Bkonkzn650%2FaQ6mr0e105NmrDnaQZE%2Btk76dKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyud0LEeejbAV7vVJcq3APgln5ik3CVYBj95GC74PbEiLUskFzqSfDK2vE2VNkfiOKmKnosSdwHzO6GpTaW7OyskQKONXatZBz%2B1UONU7HvljjOzMhHIgKfqmiVRlBEon78uo9aklxeA4W8N4FwCNtir2U%2BVXPhxD7zxCNR5ALDxuGt8JrfBgcY6YQt4zLkelQZPyfkfdlEFGN96oY7UJayEmAasqvfYUGFq8m9a6hoXlouGj16ZfpAs319EPlNmNX0968LDkxXZxZuHA4z07X5DNR5spJjqR5HXwF2jvXsKzPqKXh4cA8sf0cY%2F%2BPvE28KU4CxHulSaQy9Duxu%2FeXI77eFzdpRDHsxo8zWv34F9PMFZ3S2jERE4MosTKt3%2FqtkmmjC0SYcyX%2BqRn6cUvM5ymRcl7T2YvWLjQ8PCrzoCxzJy6i515xjOUdkRnRW%2F0s7YUxJLMreqaCHpQwhkwLUH4wpxImhj%2Ffwy%2FE7RPo01OcXJJc9J%2FPGOEBad3y384QjwvLS3WogAp9S02fPOx2AkxrYn3ru5%2F9brauNXR6PpEfdWLPOkQSBxQP0zFkqOrbaTfGR54RgNWPWBKeipmPeyDDMSrx6VH00DXON1J2YrPnnADoTaGKIX%2BRqwWhIB7MMRhdFbK5puc8n%2BjCx0rXEBjqkAUizwJmwBWqlD%2Fbxc9HLcnmhAgjjYnmSrbRi0mTrhkeaMwH3Eucqk9dRP5ZnXHh9DjrzAQta2CmfOgzBdhKhXbMpM2Ic904tSAapHdZ9YjMvr8nOMKRLen35RjwWHnmwmdKTQ3NexLffBT2Wrhd6KNv%2FBMPd0%2F%2BxXJ%2Fzxmd%2F4VpdIjbsB9A46pTkrn%2BG8%2Fhltqf8ldF4RMRxFIEEaWBPXgXNX8Xk&X-Amz-Signature=58bd773025f6b8e0b95b50abab6f911cca2e9093e3199dfe2d7505140d7c23b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
