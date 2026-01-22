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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WIURI5E%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDXc7B6qOezd7gGJZYXOOvB7h06WHN5b3rgxBif9exWIAIgXW24CKa8sgLVAWdnwzD86dJPgBw1AlxJF8S%2FodT31PEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrWBM%2FHMcmYW62z8yrcA4WU94CSgsC7mMrnL%2B4eQ2Y0cUX70G9L1faJqEaaKJVKLvdlDeqFysNO%2FSwZFQymfwSM49%2Baop9BtfBHQ6n3LA6V03DG2%2BmUVHvRigQvlzNdjI%2FX3Zu7TCXbCM6DoxSJMjYTgsozbknKb2x62MfpdqskWuvdtyxrShRqU8Ebi3JQu8x8RRWogBfjJzJAlgi3ADD4UcMtrXD4Gy0%2FQtSYKW8ErMzaH4mb947MyHm%2BCMMfmclRy4zkSlooiW0%2Bo2XM69xaRytO9Me%2B94j601tsJpgoImava7iTVDnlOxhH3MMatE0cdPYLILzK7UuGjIRVH0wJi35%2F0r7oYajroNxlCjCmNhAcJ7NtXdcR7tQQYsybUseMn%2BwTUwOBjd%2FdDbttYAklA%2Bg7RdJjsVJNZtOA0Gl6RSLhCCyzvnL4l%2FlSZVmRrSLZveKv5AuxcvKBQOaQlq97bgwNtO4lVFRrbeS%2FOxA3q5kRNiAfquZ0vTKagxgKvra9wnW3dkfwNkh%2Brwn67nCEygDxEkJf7VouZcB8pSoJOlMr8XoTEoLaskfY2HLhJTiuJ6oNr%2BqLiNXmTedVRi0ftd8UzhvFEK8ATbLDgmc4my3l4R%2FLEeIP9ZLMCmg7X7ksYNylPTESPK5AMJXYxcsGOqUBRd0QURXBRjjUqrEzSXlH%2B5TqSzQoPNMmeGqGms83ZzKI4lVyFw9%2BsHRN0I4qH2l0KKbxUN1hI9LOMEedyducz00b%2ByjIlmcy%2FjCa3l9XQxLPR7sueML1ne9sILGyFdR8nuXE9hSEz7KgDmunf9c7wMloYOg0SNXDX231T9VulVgpqdYtK03LVeN9nzTxFiyYGbCV80pYdFEplX%2FJFCeNdnsfRP%2BN&X-Amz-Signature=80193737bf247d03ce1d2116652bdec2869acbd31858b14ec5c9fa42391a0915&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WIURI5E%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDXc7B6qOezd7gGJZYXOOvB7h06WHN5b3rgxBif9exWIAIgXW24CKa8sgLVAWdnwzD86dJPgBw1AlxJF8S%2FodT31PEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrWBM%2FHMcmYW62z8yrcA4WU94CSgsC7mMrnL%2B4eQ2Y0cUX70G9L1faJqEaaKJVKLvdlDeqFysNO%2FSwZFQymfwSM49%2Baop9BtfBHQ6n3LA6V03DG2%2BmUVHvRigQvlzNdjI%2FX3Zu7TCXbCM6DoxSJMjYTgsozbknKb2x62MfpdqskWuvdtyxrShRqU8Ebi3JQu8x8RRWogBfjJzJAlgi3ADD4UcMtrXD4Gy0%2FQtSYKW8ErMzaH4mb947MyHm%2BCMMfmclRy4zkSlooiW0%2Bo2XM69xaRytO9Me%2B94j601tsJpgoImava7iTVDnlOxhH3MMatE0cdPYLILzK7UuGjIRVH0wJi35%2F0r7oYajroNxlCjCmNhAcJ7NtXdcR7tQQYsybUseMn%2BwTUwOBjd%2FdDbttYAklA%2Bg7RdJjsVJNZtOA0Gl6RSLhCCyzvnL4l%2FlSZVmRrSLZveKv5AuxcvKBQOaQlq97bgwNtO4lVFRrbeS%2FOxA3q5kRNiAfquZ0vTKagxgKvra9wnW3dkfwNkh%2Brwn67nCEygDxEkJf7VouZcB8pSoJOlMr8XoTEoLaskfY2HLhJTiuJ6oNr%2BqLiNXmTedVRi0ftd8UzhvFEK8ATbLDgmc4my3l4R%2FLEeIP9ZLMCmg7X7ksYNylPTESPK5AMJXYxcsGOqUBRd0QURXBRjjUqrEzSXlH%2B5TqSzQoPNMmeGqGms83ZzKI4lVyFw9%2BsHRN0I4qH2l0KKbxUN1hI9LOMEedyducz00b%2ByjIlmcy%2FjCa3l9XQxLPR7sueML1ne9sILGyFdR8nuXE9hSEz7KgDmunf9c7wMloYOg0SNXDX231T9VulVgpqdYtK03LVeN9nzTxFiyYGbCV80pYdFEplX%2FJFCeNdnsfRP%2BN&X-Amz-Signature=5c7ad2fca170a4e2b28045d8041a9c3e4365817e1505c80460e07f46b0a52cc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WIURI5E%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDXc7B6qOezd7gGJZYXOOvB7h06WHN5b3rgxBif9exWIAIgXW24CKa8sgLVAWdnwzD86dJPgBw1AlxJF8S%2FodT31PEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrWBM%2FHMcmYW62z8yrcA4WU94CSgsC7mMrnL%2B4eQ2Y0cUX70G9L1faJqEaaKJVKLvdlDeqFysNO%2FSwZFQymfwSM49%2Baop9BtfBHQ6n3LA6V03DG2%2BmUVHvRigQvlzNdjI%2FX3Zu7TCXbCM6DoxSJMjYTgsozbknKb2x62MfpdqskWuvdtyxrShRqU8Ebi3JQu8x8RRWogBfjJzJAlgi3ADD4UcMtrXD4Gy0%2FQtSYKW8ErMzaH4mb947MyHm%2BCMMfmclRy4zkSlooiW0%2Bo2XM69xaRytO9Me%2B94j601tsJpgoImava7iTVDnlOxhH3MMatE0cdPYLILzK7UuGjIRVH0wJi35%2F0r7oYajroNxlCjCmNhAcJ7NtXdcR7tQQYsybUseMn%2BwTUwOBjd%2FdDbttYAklA%2Bg7RdJjsVJNZtOA0Gl6RSLhCCyzvnL4l%2FlSZVmRrSLZveKv5AuxcvKBQOaQlq97bgwNtO4lVFRrbeS%2FOxA3q5kRNiAfquZ0vTKagxgKvra9wnW3dkfwNkh%2Brwn67nCEygDxEkJf7VouZcB8pSoJOlMr8XoTEoLaskfY2HLhJTiuJ6oNr%2BqLiNXmTedVRi0ftd8UzhvFEK8ATbLDgmc4my3l4R%2FLEeIP9ZLMCmg7X7ksYNylPTESPK5AMJXYxcsGOqUBRd0QURXBRjjUqrEzSXlH%2B5TqSzQoPNMmeGqGms83ZzKI4lVyFw9%2BsHRN0I4qH2l0KKbxUN1hI9LOMEedyducz00b%2ByjIlmcy%2FjCa3l9XQxLPR7sueML1ne9sILGyFdR8nuXE9hSEz7KgDmunf9c7wMloYOg0SNXDX231T9VulVgpqdYtK03LVeN9nzTxFiyYGbCV80pYdFEplX%2FJFCeNdnsfRP%2BN&X-Amz-Signature=6ba845c65ba025b174a6d6b3c86f198414ff319fc1f25680b111e5bbea659a1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WIURI5E%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDXc7B6qOezd7gGJZYXOOvB7h06WHN5b3rgxBif9exWIAIgXW24CKa8sgLVAWdnwzD86dJPgBw1AlxJF8S%2FodT31PEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrWBM%2FHMcmYW62z8yrcA4WU94CSgsC7mMrnL%2B4eQ2Y0cUX70G9L1faJqEaaKJVKLvdlDeqFysNO%2FSwZFQymfwSM49%2Baop9BtfBHQ6n3LA6V03DG2%2BmUVHvRigQvlzNdjI%2FX3Zu7TCXbCM6DoxSJMjYTgsozbknKb2x62MfpdqskWuvdtyxrShRqU8Ebi3JQu8x8RRWogBfjJzJAlgi3ADD4UcMtrXD4Gy0%2FQtSYKW8ErMzaH4mb947MyHm%2BCMMfmclRy4zkSlooiW0%2Bo2XM69xaRytO9Me%2B94j601tsJpgoImava7iTVDnlOxhH3MMatE0cdPYLILzK7UuGjIRVH0wJi35%2F0r7oYajroNxlCjCmNhAcJ7NtXdcR7tQQYsybUseMn%2BwTUwOBjd%2FdDbttYAklA%2Bg7RdJjsVJNZtOA0Gl6RSLhCCyzvnL4l%2FlSZVmRrSLZveKv5AuxcvKBQOaQlq97bgwNtO4lVFRrbeS%2FOxA3q5kRNiAfquZ0vTKagxgKvra9wnW3dkfwNkh%2Brwn67nCEygDxEkJf7VouZcB8pSoJOlMr8XoTEoLaskfY2HLhJTiuJ6oNr%2BqLiNXmTedVRi0ftd8UzhvFEK8ATbLDgmc4my3l4R%2FLEeIP9ZLMCmg7X7ksYNylPTESPK5AMJXYxcsGOqUBRd0QURXBRjjUqrEzSXlH%2B5TqSzQoPNMmeGqGms83ZzKI4lVyFw9%2BsHRN0I4qH2l0KKbxUN1hI9LOMEedyducz00b%2ByjIlmcy%2FjCa3l9XQxLPR7sueML1ne9sILGyFdR8nuXE9hSEz7KgDmunf9c7wMloYOg0SNXDX231T9VulVgpqdYtK03LVeN9nzTxFiyYGbCV80pYdFEplX%2FJFCeNdnsfRP%2BN&X-Amz-Signature=04f55d0a1f788112286197707b2ef89ecf813efc843b4bb34e2d937fe9c33a4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WIURI5E%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDXc7B6qOezd7gGJZYXOOvB7h06WHN5b3rgxBif9exWIAIgXW24CKa8sgLVAWdnwzD86dJPgBw1AlxJF8S%2FodT31PEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrWBM%2FHMcmYW62z8yrcA4WU94CSgsC7mMrnL%2B4eQ2Y0cUX70G9L1faJqEaaKJVKLvdlDeqFysNO%2FSwZFQymfwSM49%2Baop9BtfBHQ6n3LA6V03DG2%2BmUVHvRigQvlzNdjI%2FX3Zu7TCXbCM6DoxSJMjYTgsozbknKb2x62MfpdqskWuvdtyxrShRqU8Ebi3JQu8x8RRWogBfjJzJAlgi3ADD4UcMtrXD4Gy0%2FQtSYKW8ErMzaH4mb947MyHm%2BCMMfmclRy4zkSlooiW0%2Bo2XM69xaRytO9Me%2B94j601tsJpgoImava7iTVDnlOxhH3MMatE0cdPYLILzK7UuGjIRVH0wJi35%2F0r7oYajroNxlCjCmNhAcJ7NtXdcR7tQQYsybUseMn%2BwTUwOBjd%2FdDbttYAklA%2Bg7RdJjsVJNZtOA0Gl6RSLhCCyzvnL4l%2FlSZVmRrSLZveKv5AuxcvKBQOaQlq97bgwNtO4lVFRrbeS%2FOxA3q5kRNiAfquZ0vTKagxgKvra9wnW3dkfwNkh%2Brwn67nCEygDxEkJf7VouZcB8pSoJOlMr8XoTEoLaskfY2HLhJTiuJ6oNr%2BqLiNXmTedVRi0ftd8UzhvFEK8ATbLDgmc4my3l4R%2FLEeIP9ZLMCmg7X7ksYNylPTESPK5AMJXYxcsGOqUBRd0QURXBRjjUqrEzSXlH%2B5TqSzQoPNMmeGqGms83ZzKI4lVyFw9%2BsHRN0I4qH2l0KKbxUN1hI9LOMEedyducz00b%2ByjIlmcy%2FjCa3l9XQxLPR7sueML1ne9sILGyFdR8nuXE9hSEz7KgDmunf9c7wMloYOg0SNXDX231T9VulVgpqdYtK03LVeN9nzTxFiyYGbCV80pYdFEplX%2FJFCeNdnsfRP%2BN&X-Amz-Signature=dc4dfa4ea96c2240dd1f9095e43c566ab4b12a7097b4e6ff611489747952d5e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WIURI5E%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDXc7B6qOezd7gGJZYXOOvB7h06WHN5b3rgxBif9exWIAIgXW24CKa8sgLVAWdnwzD86dJPgBw1AlxJF8S%2FodT31PEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrWBM%2FHMcmYW62z8yrcA4WU94CSgsC7mMrnL%2B4eQ2Y0cUX70G9L1faJqEaaKJVKLvdlDeqFysNO%2FSwZFQymfwSM49%2Baop9BtfBHQ6n3LA6V03DG2%2BmUVHvRigQvlzNdjI%2FX3Zu7TCXbCM6DoxSJMjYTgsozbknKb2x62MfpdqskWuvdtyxrShRqU8Ebi3JQu8x8RRWogBfjJzJAlgi3ADD4UcMtrXD4Gy0%2FQtSYKW8ErMzaH4mb947MyHm%2BCMMfmclRy4zkSlooiW0%2Bo2XM69xaRytO9Me%2B94j601tsJpgoImava7iTVDnlOxhH3MMatE0cdPYLILzK7UuGjIRVH0wJi35%2F0r7oYajroNxlCjCmNhAcJ7NtXdcR7tQQYsybUseMn%2BwTUwOBjd%2FdDbttYAklA%2Bg7RdJjsVJNZtOA0Gl6RSLhCCyzvnL4l%2FlSZVmRrSLZveKv5AuxcvKBQOaQlq97bgwNtO4lVFRrbeS%2FOxA3q5kRNiAfquZ0vTKagxgKvra9wnW3dkfwNkh%2Brwn67nCEygDxEkJf7VouZcB8pSoJOlMr8XoTEoLaskfY2HLhJTiuJ6oNr%2BqLiNXmTedVRi0ftd8UzhvFEK8ATbLDgmc4my3l4R%2FLEeIP9ZLMCmg7X7ksYNylPTESPK5AMJXYxcsGOqUBRd0QURXBRjjUqrEzSXlH%2B5TqSzQoPNMmeGqGms83ZzKI4lVyFw9%2BsHRN0I4qH2l0KKbxUN1hI9LOMEedyducz00b%2ByjIlmcy%2FjCa3l9XQxLPR7sueML1ne9sILGyFdR8nuXE9hSEz7KgDmunf9c7wMloYOg0SNXDX231T9VulVgpqdYtK03LVeN9nzTxFiyYGbCV80pYdFEplX%2FJFCeNdnsfRP%2BN&X-Amz-Signature=c5501334da38590e5e293c42ab88176d74c990281b268ad81a78570e19ae765f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WIURI5E%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDXc7B6qOezd7gGJZYXOOvB7h06WHN5b3rgxBif9exWIAIgXW24CKa8sgLVAWdnwzD86dJPgBw1AlxJF8S%2FodT31PEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrWBM%2FHMcmYW62z8yrcA4WU94CSgsC7mMrnL%2B4eQ2Y0cUX70G9L1faJqEaaKJVKLvdlDeqFysNO%2FSwZFQymfwSM49%2Baop9BtfBHQ6n3LA6V03DG2%2BmUVHvRigQvlzNdjI%2FX3Zu7TCXbCM6DoxSJMjYTgsozbknKb2x62MfpdqskWuvdtyxrShRqU8Ebi3JQu8x8RRWogBfjJzJAlgi3ADD4UcMtrXD4Gy0%2FQtSYKW8ErMzaH4mb947MyHm%2BCMMfmclRy4zkSlooiW0%2Bo2XM69xaRytO9Me%2B94j601tsJpgoImava7iTVDnlOxhH3MMatE0cdPYLILzK7UuGjIRVH0wJi35%2F0r7oYajroNxlCjCmNhAcJ7NtXdcR7tQQYsybUseMn%2BwTUwOBjd%2FdDbttYAklA%2Bg7RdJjsVJNZtOA0Gl6RSLhCCyzvnL4l%2FlSZVmRrSLZveKv5AuxcvKBQOaQlq97bgwNtO4lVFRrbeS%2FOxA3q5kRNiAfquZ0vTKagxgKvra9wnW3dkfwNkh%2Brwn67nCEygDxEkJf7VouZcB8pSoJOlMr8XoTEoLaskfY2HLhJTiuJ6oNr%2BqLiNXmTedVRi0ftd8UzhvFEK8ATbLDgmc4my3l4R%2FLEeIP9ZLMCmg7X7ksYNylPTESPK5AMJXYxcsGOqUBRd0QURXBRjjUqrEzSXlH%2B5TqSzQoPNMmeGqGms83ZzKI4lVyFw9%2BsHRN0I4qH2l0KKbxUN1hI9LOMEedyducz00b%2ByjIlmcy%2FjCa3l9XQxLPR7sueML1ne9sILGyFdR8nuXE9hSEz7KgDmunf9c7wMloYOg0SNXDX231T9VulVgpqdYtK03LVeN9nzTxFiyYGbCV80pYdFEplX%2FJFCeNdnsfRP%2BN&X-Amz-Signature=98200e2531988f5a782ff21a9e179f168d9caacd9f1d4618ceaf0dea6d15d8be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WIURI5E%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDXc7B6qOezd7gGJZYXOOvB7h06WHN5b3rgxBif9exWIAIgXW24CKa8sgLVAWdnwzD86dJPgBw1AlxJF8S%2FodT31PEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrWBM%2FHMcmYW62z8yrcA4WU94CSgsC7mMrnL%2B4eQ2Y0cUX70G9L1faJqEaaKJVKLvdlDeqFysNO%2FSwZFQymfwSM49%2Baop9BtfBHQ6n3LA6V03DG2%2BmUVHvRigQvlzNdjI%2FX3Zu7TCXbCM6DoxSJMjYTgsozbknKb2x62MfpdqskWuvdtyxrShRqU8Ebi3JQu8x8RRWogBfjJzJAlgi3ADD4UcMtrXD4Gy0%2FQtSYKW8ErMzaH4mb947MyHm%2BCMMfmclRy4zkSlooiW0%2Bo2XM69xaRytO9Me%2B94j601tsJpgoImava7iTVDnlOxhH3MMatE0cdPYLILzK7UuGjIRVH0wJi35%2F0r7oYajroNxlCjCmNhAcJ7NtXdcR7tQQYsybUseMn%2BwTUwOBjd%2FdDbttYAklA%2Bg7RdJjsVJNZtOA0Gl6RSLhCCyzvnL4l%2FlSZVmRrSLZveKv5AuxcvKBQOaQlq97bgwNtO4lVFRrbeS%2FOxA3q5kRNiAfquZ0vTKagxgKvra9wnW3dkfwNkh%2Brwn67nCEygDxEkJf7VouZcB8pSoJOlMr8XoTEoLaskfY2HLhJTiuJ6oNr%2BqLiNXmTedVRi0ftd8UzhvFEK8ATbLDgmc4my3l4R%2FLEeIP9ZLMCmg7X7ksYNylPTESPK5AMJXYxcsGOqUBRd0QURXBRjjUqrEzSXlH%2B5TqSzQoPNMmeGqGms83ZzKI4lVyFw9%2BsHRN0I4qH2l0KKbxUN1hI9LOMEedyducz00b%2ByjIlmcy%2FjCa3l9XQxLPR7sueML1ne9sILGyFdR8nuXE9hSEz7KgDmunf9c7wMloYOg0SNXDX231T9VulVgpqdYtK03LVeN9nzTxFiyYGbCV80pYdFEplX%2FJFCeNdnsfRP%2BN&X-Amz-Signature=3b5e00c0759d39f760f37918916a029a0a416f7e5819bed642159ea587abeb36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WIURI5E%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDXc7B6qOezd7gGJZYXOOvB7h06WHN5b3rgxBif9exWIAIgXW24CKa8sgLVAWdnwzD86dJPgBw1AlxJF8S%2FodT31PEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrWBM%2FHMcmYW62z8yrcA4WU94CSgsC7mMrnL%2B4eQ2Y0cUX70G9L1faJqEaaKJVKLvdlDeqFysNO%2FSwZFQymfwSM49%2Baop9BtfBHQ6n3LA6V03DG2%2BmUVHvRigQvlzNdjI%2FX3Zu7TCXbCM6DoxSJMjYTgsozbknKb2x62MfpdqskWuvdtyxrShRqU8Ebi3JQu8x8RRWogBfjJzJAlgi3ADD4UcMtrXD4Gy0%2FQtSYKW8ErMzaH4mb947MyHm%2BCMMfmclRy4zkSlooiW0%2Bo2XM69xaRytO9Me%2B94j601tsJpgoImava7iTVDnlOxhH3MMatE0cdPYLILzK7UuGjIRVH0wJi35%2F0r7oYajroNxlCjCmNhAcJ7NtXdcR7tQQYsybUseMn%2BwTUwOBjd%2FdDbttYAklA%2Bg7RdJjsVJNZtOA0Gl6RSLhCCyzvnL4l%2FlSZVmRrSLZveKv5AuxcvKBQOaQlq97bgwNtO4lVFRrbeS%2FOxA3q5kRNiAfquZ0vTKagxgKvra9wnW3dkfwNkh%2Brwn67nCEygDxEkJf7VouZcB8pSoJOlMr8XoTEoLaskfY2HLhJTiuJ6oNr%2BqLiNXmTedVRi0ftd8UzhvFEK8ATbLDgmc4my3l4R%2FLEeIP9ZLMCmg7X7ksYNylPTESPK5AMJXYxcsGOqUBRd0QURXBRjjUqrEzSXlH%2B5TqSzQoPNMmeGqGms83ZzKI4lVyFw9%2BsHRN0I4qH2l0KKbxUN1hI9LOMEedyducz00b%2ByjIlmcy%2FjCa3l9XQxLPR7sueML1ne9sILGyFdR8nuXE9hSEz7KgDmunf9c7wMloYOg0SNXDX231T9VulVgpqdYtK03LVeN9nzTxFiyYGbCV80pYdFEplX%2FJFCeNdnsfRP%2BN&X-Amz-Signature=e280cae254a8787b44725ffa0e318d1d7dcd7cfbf975d7f2b585b01c0b3278a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WIURI5E%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDXc7B6qOezd7gGJZYXOOvB7h06WHN5b3rgxBif9exWIAIgXW24CKa8sgLVAWdnwzD86dJPgBw1AlxJF8S%2FodT31PEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrWBM%2FHMcmYW62z8yrcA4WU94CSgsC7mMrnL%2B4eQ2Y0cUX70G9L1faJqEaaKJVKLvdlDeqFysNO%2FSwZFQymfwSM49%2Baop9BtfBHQ6n3LA6V03DG2%2BmUVHvRigQvlzNdjI%2FX3Zu7TCXbCM6DoxSJMjYTgsozbknKb2x62MfpdqskWuvdtyxrShRqU8Ebi3JQu8x8RRWogBfjJzJAlgi3ADD4UcMtrXD4Gy0%2FQtSYKW8ErMzaH4mb947MyHm%2BCMMfmclRy4zkSlooiW0%2Bo2XM69xaRytO9Me%2B94j601tsJpgoImava7iTVDnlOxhH3MMatE0cdPYLILzK7UuGjIRVH0wJi35%2F0r7oYajroNxlCjCmNhAcJ7NtXdcR7tQQYsybUseMn%2BwTUwOBjd%2FdDbttYAklA%2Bg7RdJjsVJNZtOA0Gl6RSLhCCyzvnL4l%2FlSZVmRrSLZveKv5AuxcvKBQOaQlq97bgwNtO4lVFRrbeS%2FOxA3q5kRNiAfquZ0vTKagxgKvra9wnW3dkfwNkh%2Brwn67nCEygDxEkJf7VouZcB8pSoJOlMr8XoTEoLaskfY2HLhJTiuJ6oNr%2BqLiNXmTedVRi0ftd8UzhvFEK8ATbLDgmc4my3l4R%2FLEeIP9ZLMCmg7X7ksYNylPTESPK5AMJXYxcsGOqUBRd0QURXBRjjUqrEzSXlH%2B5TqSzQoPNMmeGqGms83ZzKI4lVyFw9%2BsHRN0I4qH2l0KKbxUN1hI9LOMEedyducz00b%2ByjIlmcy%2FjCa3l9XQxLPR7sueML1ne9sILGyFdR8nuXE9hSEz7KgDmunf9c7wMloYOg0SNXDX231T9VulVgpqdYtK03LVeN9nzTxFiyYGbCV80pYdFEplX%2FJFCeNdnsfRP%2BN&X-Amz-Signature=82d6a820ae2e38b107bd08658c34fb08f91a778fcfdeff466760d82036167b10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCZGVOL%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIBuuSvtagR3iK0kTpGEjvtU1NjjG4ZY6kBizDJr2MisRAiBjBVIC7A4nZHm1QEYIikexMEbvktTF%2BupRECRRuQp1ICqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgb70dmDRNYGPciCaKtwD2mnYemRv6Ixg3X%2FDlIgOmpl7WDSkVROil3e9VwzVYSh8GqBhnrmhhbnu6xM0nC88W7u3wc6zrthi9OGQL%2Ftm0wxHWPj9JMZlvL1MksrK%2Bun18I1Z5FwvJsL87qNslrK5rC3kvhmsRfpbBH1yQwgGdzdK16xTwM3NoZzYU%2Fyapw36cBjoIteOsc%2BsniTgXSrp78GFucUQIqG%2Fl387HYvC552W0NSbCft0CGo4wPDUalm3nA5EkOE5OGDn6cvzg2jFnb3Ioifw3QWxwRJpCopmSx4QKR12SnGJceEqQBsAG0si6KB7S8JTn0ocsNHjN5qBW%2FvVBFoJeVpM1quYxG%2F3YPKA%2FYX8GfkCnTlkNG5gN1A1iU9AM8arHziVK8zMWJbsGgQ8LYT%2BruYIEZCNDiyEsqDBgoXFMAJ%2BP%2BYehH1EC1aFZBhGCGLDq93QIaiJad99F668hEYPwg3THY9GYuqjgsC%2F1OeiVBkQ2ZZncSRsQ3YFbKihzo7SUXarIUH7%2F6OVm7LN5s82RFi8f40RVsN3jNZyeTi6wcpjLSQNzoOGo%2FybzrRgHn975AN9RiudIK0jepBHbWigIBNU1%2Bmq4lTFbBv2bXwTpKpsldCYE%2F%2BUMS8v52KlZ6nJpJ44qoYw5tfFywY6pgG7EiqSviC4YlEnFCiwnaZs7TgvaXt9u0ccbexzqm3rSIwIt4aTiZ0ofzCJdy8vmEdfca1w9OLcZGkK0yR7CAi9Hhsv2Ald0KjH7o3Ppid7Kfr37gWG1DM9eJkRfE6QcnO23p1BV%2FJoOTygRy0JGYQmFeLbxwZ7vTqNiBEwkamduhmDmmv4VBtH%2BVotD9vXLkrwx3H9SGtyZKy1rfdnD2M6GoDOWKIY&X-Amz-Signature=cdccd71b31271ec73193040c6d9fbb2a88979e7d74d31a9aba75de3f5e0c6241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAD3QKD5%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQD%2FON4kAzFDwUN0gQtjHX%2BJJsFeHCEVDBvG7n9%2B3uxNFgIgYjjoN7QEvlwHuXlsaSLbwmV6Yh41FnotdxkuCWrIvNsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrjo6XE7PcnmhVaQCrcA%2FAXrThPQBhhBgy9RO4m72sSpEwHbrUysSRQgUK7aaYPUaGfboyfbdDgH4Mlc2k9%2FJIa3%2F48kSl90tgoh3nWngKGLqOU%2BBLa5n6P7VsjTXqW3Hm7s%2Few%2FbBAC6cv8204WdFYt6eRPNm1vaL9R%2FWv%2BlvX7d0EuQ0QNyjq6GbNV1vESPCe4D9cJnGsrp6hgst23xm1rVAmjMc55MJUjkuTYhlzNlLYpugkrN%2B1l3Gt%2Bebo7StIhGzIcmc%2B46KSVuZdghoQnl14bN4SRzQrG4fDnHRhREeX5xJ%2FelrBN3AW0E7hjayUVGUAlxU5VAqxIZxxpdoAFW%2B4r3aIYj7lJjDzo%2F7jzg9021YgwIUQkg3ybwd1lS%2BGGq1IED12GuDT%2BmnHzF10OvPh4kHVRVQCotPqcKqqO4SvKuX%2BSPsyu1z9LduKEBqsjStbBNIyHxjSpAWjuKuz%2BtKtbOXo5vtFCDYG4TWJ%2F28FOzIJblSDupwSi8ZfT2xurnXg4TMd1maJnKWfpKbf%2BXklnoI7B0ew8PjpEuZM799bbjvzoVMQVOBeMo7dOQTrOqg%2FndSDd%2B2TtiCU%2FeaGWy4rhThM5QVHbVdd%2BZAztOiqoCzUgjLhgovQsQ3y5fjrUurpZJ9QX5kFMKXXxcsGOqUBkBVIatlE9sgSKlTgBJtWrtISl%2BfgC5hd1SKbjlPGoWzFFHYRmuwMPxgRmgk7tbvWCoyMPFSgQcWT796GvX6Jvc1tpdgAUQiDDEtgqje06h5yHh1Xv42M6w0xkg%2BBAlJFUJFr1A2NU85wSPYMSJxUy2JHUUeN4C52n5GUlC8%2FXBfbmOtdGFIj2ZSpe3Jml30Zzg8bKLpfB2lx0UoDFSMZI73ZvRbN&X-Amz-Signature=d0258edaac478521ff2880b236d09cfe42a7d6a302e1bfa0870c1bbdfb591fec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUN3PPEO%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIGLcw8Xx%2FQre%2ByhPfuq5KBPhFe8IRSiOGZYVhOKuVsqhAiAffjvzSqYaZZ89%2FfwV4oSoVloDjwMN7gGcrQZzRIQrGSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLADMts65fo8Li7WwKtwDP6JlDjw8tzLMl2ot8bNdxzl%2FBVs0Oa031lvpv%2F76r8kIbU81kFOk%2BZMgQjJT61iXeEDUFCF8R3B6mnRLafkpxyIQOwIkd2kd%2BXFbjkDVRqy202OhJ2qy7k3xlFKd0kroUVjJNtTZQtYYaj%2FZVbxslVOd0Z%2FUXbLwSW5pWwTbSFFCHgSgQZ3khnKFrASUK6qQt5GIwJLNLsv34qwdm7seWtKHH4RLrWex%2B%2BcwttK8PCT8MXU7jcKsq8%2Bjmr60M5O7eUEHQ6M7Kcg3fROoTlL4tJhYoU1teaVuJXQ03tvqG%2BiWmblgkM9uUUwBqZ6Ego7y4jhAfwsu3%2BpasMoFIv7K6X0KH4od8sgCTTNVR5BilXGNYM%2F1tbD1cPkr474Pu2TFcQUBMMq%2FftnihiHcCgDCjTKINtApDXAL0Qpy1foduIjtFLHy%2FL6DG9TLgJnMMDN20e8GYaPCWcKniyRar%2FtpBHGqaGt0YJmW%2B%2B6ON6uCqYZyVaCdHdVo66dAFbmTDHNVk5WqyN5odlfT4rdaCtFtGnjHYdmbG4sgZH26wzWZVGs9YX5E%2FkOuGgswj1agGL%2BZUiKm%2F1N1Zf3ToYW3SH43q0fmdTknwxNkteUKtq%2BnaS9buUU8pha21Qsjh28w5tfFywY6pgEOt0GCdPgInU4RYwfgfgQAa8hDJ%2Fj%2F6NYMMi2oVp5ACtBFL%2BMFhRN0kHGipi8c3WHQeTc57t%2B0WkCqN5e7QuUQwhXIu%2Fmnf3ArLgAz0vqLouw%2BZ7%2FBZVvoyjDtn6O2lk7AnMiZrjLhZ3fdF1NJvPY5LheKQVkBol%2BbD5PewM7fp0ExTR6YqZZ7gwQ3P84T2HJkXTnuCc5%2FLDrt2kyIflAz4Ra5Ddlr&X-Amz-Signature=74c19b3a6bb762f1117a05b6102afecd376a717dbecc5c9c9e7ba775e49fca2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WIURI5E%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDXc7B6qOezd7gGJZYXOOvB7h06WHN5b3rgxBif9exWIAIgXW24CKa8sgLVAWdnwzD86dJPgBw1AlxJF8S%2FodT31PEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrWBM%2FHMcmYW62z8yrcA4WU94CSgsC7mMrnL%2B4eQ2Y0cUX70G9L1faJqEaaKJVKLvdlDeqFysNO%2FSwZFQymfwSM49%2Baop9BtfBHQ6n3LA6V03DG2%2BmUVHvRigQvlzNdjI%2FX3Zu7TCXbCM6DoxSJMjYTgsozbknKb2x62MfpdqskWuvdtyxrShRqU8Ebi3JQu8x8RRWogBfjJzJAlgi3ADD4UcMtrXD4Gy0%2FQtSYKW8ErMzaH4mb947MyHm%2BCMMfmclRy4zkSlooiW0%2Bo2XM69xaRytO9Me%2B94j601tsJpgoImava7iTVDnlOxhH3MMatE0cdPYLILzK7UuGjIRVH0wJi35%2F0r7oYajroNxlCjCmNhAcJ7NtXdcR7tQQYsybUseMn%2BwTUwOBjd%2FdDbttYAklA%2Bg7RdJjsVJNZtOA0Gl6RSLhCCyzvnL4l%2FlSZVmRrSLZveKv5AuxcvKBQOaQlq97bgwNtO4lVFRrbeS%2FOxA3q5kRNiAfquZ0vTKagxgKvra9wnW3dkfwNkh%2Brwn67nCEygDxEkJf7VouZcB8pSoJOlMr8XoTEoLaskfY2HLhJTiuJ6oNr%2BqLiNXmTedVRi0ftd8UzhvFEK8ATbLDgmc4my3l4R%2FLEeIP9ZLMCmg7X7ksYNylPTESPK5AMJXYxcsGOqUBRd0QURXBRjjUqrEzSXlH%2B5TqSzQoPNMmeGqGms83ZzKI4lVyFw9%2BsHRN0I4qH2l0KKbxUN1hI9LOMEedyducz00b%2ByjIlmcy%2FjCa3l9XQxLPR7sueML1ne9sILGyFdR8nuXE9hSEz7KgDmunf9c7wMloYOg0SNXDX231T9VulVgpqdYtK03LVeN9nzTxFiyYGbCV80pYdFEplX%2FJFCeNdnsfRP%2BN&X-Amz-Signature=fee256475c38e3d40f3996e0f413f2037cfe4a0a15cead03d9ea47644397dd3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ5Y67PB%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCtztZYXinNBTQeQj86djd3ukVIt7ggQD0b3IyOufWbwgIgHC58ncnZvYf2FKHtX5d98Hz0QvmglFuXcuwwvBSO%2BcwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2B0WXgMWr%2Bq7UNtCircA3JN1lSH7UITZlNeeYGjsPBdFzYHtxZO3Yjn9tx0bD4%2FcLyggj%2FJlKlPsfwglgFzlzzi3SmGOyBes8aiOdJevcFAMU6q9ZIBc5EWZsWd5S3r%2BWSKAVFClX2SfkfVgbMJgkWr6Wk3PuuKm8it5Q3tzX8bKXFqpk9iCVMYLKbk28mCT%2FyZ8z6PXx%2B8Zl%2BYBIHWWD1uO%2FtcmmBUu0%2BrF7jqVjpct%2BUHQvUhYCpU15wtus1KqNA%2FBupwq1QRU41dgXMRACABUlBIG%2BynMC%2BqLloFb%2BCMN%2B%2BRmVGYd6DPz8O6UpJwgVLR5rA65MKpurZZbcEvUIs7pzdkDRRIM%2BFESqChwPzcM%2FCP%2FRFvuRdmPFhxlQw635dZY7z33NIarbnawQnNMcHdSf%2Fc9yxZaME4TdnXmDLJLr49iK31HiTvZCAGjUJjLR4LhUlDw4saFT859sGOCtxYSYBGgEXiN5LVrWSW3R6JpEMHXsrgAhRu9IVEDGVNzHFkoDV800Mx1V32jo2X0BFAK0sbNuBNlnsZDkO9D880IAv0fcVfNjHMwWtR1ycAF0DPimkgdBEiolTHkKhKekZ6QQO9HCvE0q36ua5kcz8tRGQQL0lgCHG6x6ohDlIJxZejdawhW1W3njrrMLTYxcsGOqUBnwPkWXMpZXpWLqEgBuJyjs3Tc5OhSTIdCw9AP60k%2BPl5OOQxGZWKZuPV5HfJDAIOp1mNO9dWcon6qE50CC0tWI89PyRvowOYDdy5LXftJk%2B23RplTI05v%2BV0NHSb74eRwACS4Fka%2B4MNxC8HXTyE60Q2xKuNvDqljDxxA6tnghQkr4%2Fin3xiDY%2Buiv9tPaFn8lBHgAG9M88Lg%2BIR6o6WrwtFboOi&X-Amz-Signature=d736f13e79fd6fb0d7dd4244b66181034ee0c4c8522d399454ae3d82b19687f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WIURI5E%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDXc7B6qOezd7gGJZYXOOvB7h06WHN5b3rgxBif9exWIAIgXW24CKa8sgLVAWdnwzD86dJPgBw1AlxJF8S%2FodT31PEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrWBM%2FHMcmYW62z8yrcA4WU94CSgsC7mMrnL%2B4eQ2Y0cUX70G9L1faJqEaaKJVKLvdlDeqFysNO%2FSwZFQymfwSM49%2Baop9BtfBHQ6n3LA6V03DG2%2BmUVHvRigQvlzNdjI%2FX3Zu7TCXbCM6DoxSJMjYTgsozbknKb2x62MfpdqskWuvdtyxrShRqU8Ebi3JQu8x8RRWogBfjJzJAlgi3ADD4UcMtrXD4Gy0%2FQtSYKW8ErMzaH4mb947MyHm%2BCMMfmclRy4zkSlooiW0%2Bo2XM69xaRytO9Me%2B94j601tsJpgoImava7iTVDnlOxhH3MMatE0cdPYLILzK7UuGjIRVH0wJi35%2F0r7oYajroNxlCjCmNhAcJ7NtXdcR7tQQYsybUseMn%2BwTUwOBjd%2FdDbttYAklA%2Bg7RdJjsVJNZtOA0Gl6RSLhCCyzvnL4l%2FlSZVmRrSLZveKv5AuxcvKBQOaQlq97bgwNtO4lVFRrbeS%2FOxA3q5kRNiAfquZ0vTKagxgKvra9wnW3dkfwNkh%2Brwn67nCEygDxEkJf7VouZcB8pSoJOlMr8XoTEoLaskfY2HLhJTiuJ6oNr%2BqLiNXmTedVRi0ftd8UzhvFEK8ATbLDgmc4my3l4R%2FLEeIP9ZLMCmg7X7ksYNylPTESPK5AMJXYxcsGOqUBRd0QURXBRjjUqrEzSXlH%2B5TqSzQoPNMmeGqGms83ZzKI4lVyFw9%2BsHRN0I4qH2l0KKbxUN1hI9LOMEedyducz00b%2ByjIlmcy%2FjCa3l9XQxLPR7sueML1ne9sILGyFdR8nuXE9hSEz7KgDmunf9c7wMloYOg0SNXDX231T9VulVgpqdYtK03LVeN9nzTxFiyYGbCV80pYdFEplX%2FJFCeNdnsfRP%2BN&X-Amz-Signature=99f340d8bb6951228091e70ddf05284e760504d417c3fba37bac8349ab194974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XE5ITCP%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIBBoYjTYWOZmg2IC9cIMeWO0L%2Bxr6VKWR3rULzouxs7SAiAQtNQ%2B7%2FahS%2FJNnoDEKwIkcnMJna%2F5M36YzIELPv%2BajyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLoQidzN3e8k4X6aBKtwDLeIlAUBYPmkABmTIJpQNGmYj3c07INFiwfg2gYlaU3eGACLye7q9%2ByFRZHd73PgZye2gZaxhEDagMfdp5hdoaYX%2FhhBvk0jwwbbCFRJHau6sGrhiAW2VG5YBKwjUYNVMTGW3u3dIsUhMtmCVN7o7VWv%2BraL7vKc0IxmhAZhFq5pd035lJb6f%2Fn3ZwegZ0B0uAy2kUAUbjZblKOu6Ypnvw7zgY%2Bl3rBuPH1wWuCusVoqvu1zDiR5eZsHPP5ch%2B1JUaaSoQZQ7VlxBgwV%2F9eT4s2MWjZh4YCaXa3TfIcM%2F3kc0Tjp3AH7vXpzkQClDn96nxgR6Ak7xYaUUX5%2FBtEfSfAArRSdydLytYSkqR8nBaFO1eapLky5qyJmYUPWs0CdbVibO2bjhVBQWs%2BwgyK2tHf%2F3xUJWpJSGttBtOPJPznZel9pMv0ZuB5J0nOu0GzO8Fu6rgTXlB1wgR3BGmTPt8PQ5uGYnlxlkuF6iMHRYeAT4o9kzVH33PrYSRviM%2B2yRNlPJgB30ZEUYehbCx%2FbYFD4KMwJJiH0PBnBa86xaOs9GuMziYQ2mFmQBV9cI%2FlLmno9Kuu8StcdQ%2BCUARuG%2FBLVdG12dgQgcQ%2BFuKqIlgjeWh27xL6tFScSOewEwqdfFywY6pgGc2PH90nGuj67sJQKD9MjOTLIkWwTl5Vb4QOikmDTuJyORXlyyaOSsg6lXzslbyWhEnsZdI5asVNlb9YkT7mKd3Khg0K%2BDo5ykyWIZRRF%2Fvcs6vezEJLhADMYxwOjoUuRnoQgWAhg%2F4lF%2BO3%2Fkolp5AT8yasjdpB8bEElT%2FvXCgd7KDV7PnX%2B4w%2BSgK93ssIM2es%2BCzufU1geMiPBWsUQVjTJhtkqC&X-Amz-Signature=4d71b3a333e013343b03b6e7488c0a698bcb9b96510e8dd116f4747f6abcdd6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WIURI5E%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDXc7B6qOezd7gGJZYXOOvB7h06WHN5b3rgxBif9exWIAIgXW24CKa8sgLVAWdnwzD86dJPgBw1AlxJF8S%2FodT31PEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrWBM%2FHMcmYW62z8yrcA4WU94CSgsC7mMrnL%2B4eQ2Y0cUX70G9L1faJqEaaKJVKLvdlDeqFysNO%2FSwZFQymfwSM49%2Baop9BtfBHQ6n3LA6V03DG2%2BmUVHvRigQvlzNdjI%2FX3Zu7TCXbCM6DoxSJMjYTgsozbknKb2x62MfpdqskWuvdtyxrShRqU8Ebi3JQu8x8RRWogBfjJzJAlgi3ADD4UcMtrXD4Gy0%2FQtSYKW8ErMzaH4mb947MyHm%2BCMMfmclRy4zkSlooiW0%2Bo2XM69xaRytO9Me%2B94j601tsJpgoImava7iTVDnlOxhH3MMatE0cdPYLILzK7UuGjIRVH0wJi35%2F0r7oYajroNxlCjCmNhAcJ7NtXdcR7tQQYsybUseMn%2BwTUwOBjd%2FdDbttYAklA%2Bg7RdJjsVJNZtOA0Gl6RSLhCCyzvnL4l%2FlSZVmRrSLZveKv5AuxcvKBQOaQlq97bgwNtO4lVFRrbeS%2FOxA3q5kRNiAfquZ0vTKagxgKvra9wnW3dkfwNkh%2Brwn67nCEygDxEkJf7VouZcB8pSoJOlMr8XoTEoLaskfY2HLhJTiuJ6oNr%2BqLiNXmTedVRi0ftd8UzhvFEK8ATbLDgmc4my3l4R%2FLEeIP9ZLMCmg7X7ksYNylPTESPK5AMJXYxcsGOqUBRd0QURXBRjjUqrEzSXlH%2B5TqSzQoPNMmeGqGms83ZzKI4lVyFw9%2BsHRN0I4qH2l0KKbxUN1hI9LOMEedyducz00b%2ByjIlmcy%2FjCa3l9XQxLPR7sueML1ne9sILGyFdR8nuXE9hSEz7KgDmunf9c7wMloYOg0SNXDX231T9VulVgpqdYtK03LVeN9nzTxFiyYGbCV80pYdFEplX%2FJFCeNdnsfRP%2BN&X-Amz-Signature=59ab5ff72cd81bff15aff860310bf2ed0ecdf3e4312f0b90a9d4a59e4ac6b0cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAC2VDWA%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIACLPMFri3bxT9OoMw8R%2BT9UXljbHFgtxor3PuQoBI1wAiEAtWHWQDfbtY7UpS5mPbu9yOf9DMBx9Pt%2BDt47kfeOEFUqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEflFNvU7Ngd8ZfNoCrcA4PkoR30GYxsXHNilrnuXP3817I9JMkqzTXmDEB%2BnCBzzYhaQh3nTK2lWjAYAZZC%2FIvk%2BnFWTNoA2I3kMUbh9XklB41jDlmM1%2BrmXFqGSz%2BjVLuJcr5tFwrBkPjH3o8keYzbRioPiH180fbM36iX3eBCkJon9jySPuLb67dbSUOTCUE0cLbR5v%2FIpgZPfkyzslXWuLfCHLjle%2BJKK2PggGI0m0y7ruOhfKvEAMiPI%2FU31m%2BvbJ41VqKzPeap020bnOESImvYGi27a41Tm2G97PcWYiwNuMYmVdGr5bYp1ckNT9vvkiQWbIM1NofUeVp2%2BVX9YU6qg9MtNQzytiz8ojwUCdXB6GzwdBTbXaKK17dfJo6HiF64kImPcvgNMez%2FSvNVMm1Wgi%2FS7WD%2BjLORhk9RnmS8uvhmTsE6yp5L20g3ZLC9hbNqvuZYvJ2l0J4OKqrNWM%2BsSU%2F6mjnW%2FmSr4YYvoR2%2F16hMfHEV%2FEc4g8m57fpuK8VnFdkHsBCurSGp29KR5Xb%2FD8Eev%2B8EzLsuZDQgxhU%2FBTUbkIiqIJdI6%2BIi3Mm1BlkfAhnjZ2JRwQDRGEjEzEEkh806MO1pHfgHDvW55wOIk61OT3EzNJWrRnBRJqmz9Zj16fbWm%2BxtMLHXxcsGOqUBf%2FJQ7hJ9cu0n8RQzZzmAum0zYaYQSGCsOr%2BefqacFfZk7AyRPMXJchncYIyVaZ1mXPyzoS50wriw6mCjuHcTwtZfR1KTJ307xmxXPzvXNZyscvwbDPQvHi%2Fgs4QyqAVt3lYXtlicAazvblsmJdqAw3CM%2BLvTz3HEXhgHyLIgjSdZuOxyPLVC2%2B4PN19HaWpfJIzOodh3G6F6KpobjTS2Dcz0QRyx&X-Amz-Signature=2d352bf4b3d63f902a3ac404e1fc3c32568cd6ad7a3b16d4d2cbbcbe61a9abe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WIURI5E%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDXc7B6qOezd7gGJZYXOOvB7h06WHN5b3rgxBif9exWIAIgXW24CKa8sgLVAWdnwzD86dJPgBw1AlxJF8S%2FodT31PEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrWBM%2FHMcmYW62z8yrcA4WU94CSgsC7mMrnL%2B4eQ2Y0cUX70G9L1faJqEaaKJVKLvdlDeqFysNO%2FSwZFQymfwSM49%2Baop9BtfBHQ6n3LA6V03DG2%2BmUVHvRigQvlzNdjI%2FX3Zu7TCXbCM6DoxSJMjYTgsozbknKb2x62MfpdqskWuvdtyxrShRqU8Ebi3JQu8x8RRWogBfjJzJAlgi3ADD4UcMtrXD4Gy0%2FQtSYKW8ErMzaH4mb947MyHm%2BCMMfmclRy4zkSlooiW0%2Bo2XM69xaRytO9Me%2B94j601tsJpgoImava7iTVDnlOxhH3MMatE0cdPYLILzK7UuGjIRVH0wJi35%2F0r7oYajroNxlCjCmNhAcJ7NtXdcR7tQQYsybUseMn%2BwTUwOBjd%2FdDbttYAklA%2Bg7RdJjsVJNZtOA0Gl6RSLhCCyzvnL4l%2FlSZVmRrSLZveKv5AuxcvKBQOaQlq97bgwNtO4lVFRrbeS%2FOxA3q5kRNiAfquZ0vTKagxgKvra9wnW3dkfwNkh%2Brwn67nCEygDxEkJf7VouZcB8pSoJOlMr8XoTEoLaskfY2HLhJTiuJ6oNr%2BqLiNXmTedVRi0ftd8UzhvFEK8ATbLDgmc4my3l4R%2FLEeIP9ZLMCmg7X7ksYNylPTESPK5AMJXYxcsGOqUBRd0QURXBRjjUqrEzSXlH%2B5TqSzQoPNMmeGqGms83ZzKI4lVyFw9%2BsHRN0I4qH2l0KKbxUN1hI9LOMEedyducz00b%2ByjIlmcy%2FjCa3l9XQxLPR7sueML1ne9sILGyFdR8nuXE9hSEz7KgDmunf9c7wMloYOg0SNXDX231T9VulVgpqdYtK03LVeN9nzTxFiyYGbCV80pYdFEplX%2FJFCeNdnsfRP%2BN&X-Amz-Signature=8aa0b32dd3b29e3e12dad87546be5a346c254b9e04d0a295cf51112a6585b825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466635MQQEW%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIGA5jBioXbBJmedp1jXsx2OWOtfeiqZar9y6nwoPFbfFAiEArNfAy6xl4BKFgavjl0ObPLogvQ9wihkDwaMAOTXZT6IqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHwPdvsymn2lJvz6SrcA5sJDRw0qlP2M6jqD3HWF7QTAnk2cG5mIesBln2HiRnzvMQmuKJA4tIFnDIq3G0p0wYpkLGLP3eUkva4Dm27Gh5kS7rLXYiJAuhZOmrYWRrO4uCwbIDphDattbujo5v7ImAKHSvZ6Dx7gQR%2BdG%2Fy7SYnZmWS0t%2FtwDByf8ZTLLz44YBGT%2B1pz1iuSWIwTnpS3aRh4fFlc47aPZBihmUdmd5zgqzxA3XWzggutlGtesQOBNUA%2B6XdTvQQ2RCcnFGxpns%2FaFvJoBiRrZdiLUprwiF4D8wqY8qbTlfX1R3Kx75elY4%2BAu%2FbVKrmMFKolcG75Ig1JJJ2XokBiNJgExROfBlL3SZkp1iCqpBVeQLl8LNce1YfpftGCfigukcUKsJhHbh5b3l09HaAWxZE%2B1PwDxtaMhFPK0l3LatW%2FSlTcxHqdFQko3WsajjM3PkAtnVOR1zulNLppS9GiNMyLmw3YzpmBcP7zBiHqbrtO6ylePMpa9zUj8yByO6vEnSfoXStAlhNxIC6RKyaPpli5jRvdG%2BQOeWgrhzqpbYe3vH8mkE5488iMQftWEt4GGgVo1jSL4LQhEIsbEvnwje83CTkHm4GBIcDyQiVthQbJrfTk4zjr9MD4qF3Ez7NbPCcMMvXxcsGOqUBdoPKuKf9y6ytKIkl4QGWQy98XQP74ALe9nomPGdv2WqwVdLIljy9K1eRRRlFz%2Bk65Zxbc6Sg5oduYMRnOsVzVQRBe1LM5jBOc0IceGWYtL3AGZKnQukhDt0c4sCM%2FBthbPkE%2F57e1GB%2FJ%2BFTCG8AMP9lJZZMpTawBXBBNlVXcXCmLgNNlIsDul1Mqz7rIk0KzeYyIp2gSDCvYB8o1NRe1fWdNsQw&X-Amz-Signature=665883798fcd1ad94522adb7324092d0a9547aa69fb6df69582e9ba954a2896c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WIURI5E%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDXc7B6qOezd7gGJZYXOOvB7h06WHN5b3rgxBif9exWIAIgXW24CKa8sgLVAWdnwzD86dJPgBw1AlxJF8S%2FodT31PEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrWBM%2FHMcmYW62z8yrcA4WU94CSgsC7mMrnL%2B4eQ2Y0cUX70G9L1faJqEaaKJVKLvdlDeqFysNO%2FSwZFQymfwSM49%2Baop9BtfBHQ6n3LA6V03DG2%2BmUVHvRigQvlzNdjI%2FX3Zu7TCXbCM6DoxSJMjYTgsozbknKb2x62MfpdqskWuvdtyxrShRqU8Ebi3JQu8x8RRWogBfjJzJAlgi3ADD4UcMtrXD4Gy0%2FQtSYKW8ErMzaH4mb947MyHm%2BCMMfmclRy4zkSlooiW0%2Bo2XM69xaRytO9Me%2B94j601tsJpgoImava7iTVDnlOxhH3MMatE0cdPYLILzK7UuGjIRVH0wJi35%2F0r7oYajroNxlCjCmNhAcJ7NtXdcR7tQQYsybUseMn%2BwTUwOBjd%2FdDbttYAklA%2Bg7RdJjsVJNZtOA0Gl6RSLhCCyzvnL4l%2FlSZVmRrSLZveKv5AuxcvKBQOaQlq97bgwNtO4lVFRrbeS%2FOxA3q5kRNiAfquZ0vTKagxgKvra9wnW3dkfwNkh%2Brwn67nCEygDxEkJf7VouZcB8pSoJOlMr8XoTEoLaskfY2HLhJTiuJ6oNr%2BqLiNXmTedVRi0ftd8UzhvFEK8ATbLDgmc4my3l4R%2FLEeIP9ZLMCmg7X7ksYNylPTESPK5AMJXYxcsGOqUBRd0QURXBRjjUqrEzSXlH%2B5TqSzQoPNMmeGqGms83ZzKI4lVyFw9%2BsHRN0I4qH2l0KKbxUN1hI9LOMEedyducz00b%2ByjIlmcy%2FjCa3l9XQxLPR7sueML1ne9sILGyFdR8nuXE9hSEz7KgDmunf9c7wMloYOg0SNXDX231T9VulVgpqdYtK03LVeN9nzTxFiyYGbCV80pYdFEplX%2FJFCeNdnsfRP%2BN&X-Amz-Signature=ad43f315358f5052b46859b8230828818a5f1a24ebbe740232fa5cd3f0126d4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z3LVLFO%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQD6AzPM8h7TxG8T3KxQY%2F1biVKlkjq7Obmy3XxSdNWAYQIhAK581Bsgy4uL02ZhfRFjwKwhkB0eJu0gG8oKR3BgcezdKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlhEsajDheDZeLI%2Fgq3AM%2B6Mdyb%2Bs4coLscZdj%2F%2FRVNx2XdIM985LXpcSANjhGs9J5JIp5wZG4HpMq7yAgeoe%2BATJ5O8E8sww%2F3LLn%2FhKJCSZO8j1btTeuUBNdTrwtPxUoordy25l2tzgG9Yl1LVStcQ3neu2Tl7NI3PqQ4mzfG0MCo4B28a3QKJjxg4ZTv3jHSPATnIpbl%2BR9fWj3%2FxO2UkvCIocRK%2BPibhGcAOh6WO1Mk0fg%2BnMS8kLWtyovBM3HbmOxweGkNxgqNuntd8QWFxmztghfOf0pdabQJ75MZP7f4MBBykVI1qmdL2q8gxzro%2FM0CZxD%2F2RhF4ItX8GZq3rA3GqVy2HmTKO8qTBSTQDTlm59aSaWu81G2JP9xb69xvIZaPRWQnD1wZaPyDZ60dBTADZiPIrVD0krjJj%2BBWzMwrTL0XCDmJoiZa%2B6%2F1xm7vjHakvSCeUAgfrIhpE7eXCr1MoSTdv6Odm7rIFWUldBqoq8q%2BBmUOI3UoVEm37jn528iGSGcNwakHJjERqI1gPS39rfOyPH1ks%2FUF%2FStt508PowNW6%2BQ2uGevQK1WA478YKLE8TwGIvAcszLIGqfC7SXHwt5261zu7fW%2F55%2FyCcbZOo5I2oR4cCgqH5n5Pe6GJ7pUArLgb8eTC62MXLBjqkAWod55zkYcM6upitSTw5%2FL1PkID9Mcf027RJibuHaKBpeS674oVrTf0UBKrfyf0cY2hdKHQkHvwhwnZRGH0z1mWE74cjONDFBVTmRDyDvEeMc6h7gwzD6Yf1%2BUuPuJD6ojwIqwxCtoAyfVpHX%2F4wxEsoHgSASZvHkPUJjKeKGCgpSbF5zwi%2FxV0Zp92liZTDQXCejrlGiAFrIro2trRt1TdEYuNL&X-Amz-Signature=11dbce2956c9455a30edddb1644cacdb3dda8507eb935c0b62a934a35784c881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN5XLPOD%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCwd1Uy4En8NUAbOjoxqc2B0tmaN54Qc3YWuApZS4HKoAIgEfd%2F4gorEb%2Bxj3wg5KTEiOltiCsLfNcPz%2Bgu3%2F9CDIgqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGHKFzHGa3lg0TPpircA1mQXawzZYabhnpe6oHjxcxJfDg4H368Up3cnMdAX1oihDgZerN1GFvPXmkJF2kfTDgUXJMddGh3h%2Bdh%2FpmPz7n45tg4vG1GVNoqvZlTtlk5MyGBPTXDKYdFruEW8Zzw1PWfV%2B1y949KLdQEYU%2FjYZcRUe9by%2B3SwyWTIRTYNGL2TFjZQajp9zVF7ELnoz0P0jes1uA3z5zvobp2fv9IiGot2lE7NCHL4m7XvtpIbCpEvtSduNf3XGTqpzzV7Nmskhb0J%2F7Z7aonjpnany1O5e0T8ZwdtuFEChgf%2BYuFrOhi%2BjOHkT7DjjR%2Bhhz7BVpv6KkCqzy6mEegn65%2FmVfMfcW3n9IsUjBFFEt4zaU%2Fux1K0webLFBLykkWpgmhDEDm%2F4KHOrwd8JRsXMtk3CnZdcLoxeqTvioW4znp7Kc6c1iG%2BR7b3EMHeTWj5t1%2Fz0jhTL26do5RqowNYWLvhf6SAOZWkbrdmLU%2FijlOzxlnnpwIpCQcT%2FFSFT2GF9mmxDVLGgY5X4BxIYTNCJkfUtGc87%2FJBmOWcbu5sOIZxl7wBCWBFVVqH0WpokrhQsW72x5OMcJQUOPpIchS6K2JWalp9ZcwN37aJ7IliBc%2FSLGDgXR0%2FCDJeFYLNXzP1tDzMIXXxcsGOqUB7kL%2BdwQBvUY5O1hK%2FxUNdp3Ag5AEPhKSlHBLkESIG7H8gG570b6URmlh9rKL%2F2DFNBRCycikOfWJp7u1MeIJcHxGLwxuN9VV5hElC7Ec%2B6vJAE%2B8dq4%2Bky1axJTC43m%2BLa5tT7PjZcoxQyUIBJUYRGJRHnCYxkneIwaxa9tmRogSoMUdtG4%2Fz6flkDM%2FWB7E%2F8RUM2s4Fz5M4DyL4QA0Ru0LZw04&X-Amz-Signature=32ce5e23f3f0b7076ec16b892b77c8b0eb35eaa7496efe9ca9a43120966e5b90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCAR62ZJ%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCcPX9ZnsofO%2BkX3TOK%2FYII946JpvwxjEczi8%2Fspwr%2BzwIhAIEBtzjetoIE5ZH%2Fsm%2Fc0EAOGq4%2BPCEVxXhG91T4M7GRKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4ERqwyyX1ikYU8qgq3AOGt3Ei3lv1JcdIe07QXB0rx%2FyVvyRo1lKTjzEyo7bMCKtu9PSGUzTQ5h6dgFahnpqzKd5%2Bxk8%2BV51Nu%2BEc%2FDVULpcRZsUsPnPu8egEeX3fKzU66DczOvFraP40PkxTSUhzW1bj0Wd5Oj89OrBj%2FU4TPAnG7oCSmCJNV0G4uie3kLKlD8RNgz27lx4nexnd2n%2BjKmVkzxiOUUkGdWYfbbgRnzuh%2BsNnOnWCUR9wHPDpuERvpPBBMcyhV8TJxt9Yyo6mjNFcNmDj%2FEDaJrf5EZVUopnFa0JG3O8Hqf0e1YYJo6r6GYdHTeoZeAZXnJqJeq9CZtw2YQlOwWwlIDmYb2vEr25Qjc4V7bCCtgprOppsxn4iAzW9WGGIFI4VgmBZM8sajE3u4xtLLT1fDVrVQNZn1lr%2Frse7CXr6GZmqlpMEaURcW2otDZDlNdzAF4LM8Qqu66MIq4rrojNUJcfcSIr6QG5rMwBpOsLeYN7Y8cC%2F2jJrBArHXCLDp%2FAaAWllMoGfqlQPeCJEI%2Fxm00wWthrWl5k4zcJxYsPZDItvUl3x2N9pFUJBq8SX9%2BuAlkJEKhZN%2Fgx3uhvJNYw6frnDhAuCI8wmcOClMzjqNxqHdAwz%2B5dyoXVgMOKjk0uqzDDQ18XLBjqkAasGmSfGORd7VbjVYUNKY7EDPYQEMpFtb3CVsaPU5tYesMa71n%2Bhx0QTXcHG8eLvj%2Be5OukmESYoCLonfTFAyu98LVKEfzhTJG11UEiUFrwt6JlD2yIG9rLcvPOkLpqexX1GQHSNJMvAVFy6ehxJuM4reNQOVuDGhNRbl%2BvyXf6mdnM3xh3ZcsPcvXuKt1OAVmYBfLT03WXRf9JSRkr5yxkY9dtA&X-Amz-Signature=a13550d2536f2cb3060c2861bd480f748842d8a05cfb856000de6c1020cc4846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WIURI5E%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDXc7B6qOezd7gGJZYXOOvB7h06WHN5b3rgxBif9exWIAIgXW24CKa8sgLVAWdnwzD86dJPgBw1AlxJF8S%2FodT31PEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrWBM%2FHMcmYW62z8yrcA4WU94CSgsC7mMrnL%2B4eQ2Y0cUX70G9L1faJqEaaKJVKLvdlDeqFysNO%2FSwZFQymfwSM49%2Baop9BtfBHQ6n3LA6V03DG2%2BmUVHvRigQvlzNdjI%2FX3Zu7TCXbCM6DoxSJMjYTgsozbknKb2x62MfpdqskWuvdtyxrShRqU8Ebi3JQu8x8RRWogBfjJzJAlgi3ADD4UcMtrXD4Gy0%2FQtSYKW8ErMzaH4mb947MyHm%2BCMMfmclRy4zkSlooiW0%2Bo2XM69xaRytO9Me%2B94j601tsJpgoImava7iTVDnlOxhH3MMatE0cdPYLILzK7UuGjIRVH0wJi35%2F0r7oYajroNxlCjCmNhAcJ7NtXdcR7tQQYsybUseMn%2BwTUwOBjd%2FdDbttYAklA%2Bg7RdJjsVJNZtOA0Gl6RSLhCCyzvnL4l%2FlSZVmRrSLZveKv5AuxcvKBQOaQlq97bgwNtO4lVFRrbeS%2FOxA3q5kRNiAfquZ0vTKagxgKvra9wnW3dkfwNkh%2Brwn67nCEygDxEkJf7VouZcB8pSoJOlMr8XoTEoLaskfY2HLhJTiuJ6oNr%2BqLiNXmTedVRi0ftd8UzhvFEK8ATbLDgmc4my3l4R%2FLEeIP9ZLMCmg7X7ksYNylPTESPK5AMJXYxcsGOqUBRd0QURXBRjjUqrEzSXlH%2B5TqSzQoPNMmeGqGms83ZzKI4lVyFw9%2BsHRN0I4qH2l0KKbxUN1hI9LOMEedyducz00b%2ByjIlmcy%2FjCa3l9XQxLPR7sueML1ne9sILGyFdR8nuXE9hSEz7KgDmunf9c7wMloYOg0SNXDX231T9VulVgpqdYtK03LVeN9nzTxFiyYGbCV80pYdFEplX%2FJFCeNdnsfRP%2BN&X-Amz-Signature=f64881fe9b63a4fa05dd44953b4116d18b0ec0cd869dd9f413040e235aa5ae97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WIURI5E%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDXc7B6qOezd7gGJZYXOOvB7h06WHN5b3rgxBif9exWIAIgXW24CKa8sgLVAWdnwzD86dJPgBw1AlxJF8S%2FodT31PEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrWBM%2FHMcmYW62z8yrcA4WU94CSgsC7mMrnL%2B4eQ2Y0cUX70G9L1faJqEaaKJVKLvdlDeqFysNO%2FSwZFQymfwSM49%2Baop9BtfBHQ6n3LA6V03DG2%2BmUVHvRigQvlzNdjI%2FX3Zu7TCXbCM6DoxSJMjYTgsozbknKb2x62MfpdqskWuvdtyxrShRqU8Ebi3JQu8x8RRWogBfjJzJAlgi3ADD4UcMtrXD4Gy0%2FQtSYKW8ErMzaH4mb947MyHm%2BCMMfmclRy4zkSlooiW0%2Bo2XM69xaRytO9Me%2B94j601tsJpgoImava7iTVDnlOxhH3MMatE0cdPYLILzK7UuGjIRVH0wJi35%2F0r7oYajroNxlCjCmNhAcJ7NtXdcR7tQQYsybUseMn%2BwTUwOBjd%2FdDbttYAklA%2Bg7RdJjsVJNZtOA0Gl6RSLhCCyzvnL4l%2FlSZVmRrSLZveKv5AuxcvKBQOaQlq97bgwNtO4lVFRrbeS%2FOxA3q5kRNiAfquZ0vTKagxgKvra9wnW3dkfwNkh%2Brwn67nCEygDxEkJf7VouZcB8pSoJOlMr8XoTEoLaskfY2HLhJTiuJ6oNr%2BqLiNXmTedVRi0ftd8UzhvFEK8ATbLDgmc4my3l4R%2FLEeIP9ZLMCmg7X7ksYNylPTESPK5AMJXYxcsGOqUBRd0QURXBRjjUqrEzSXlH%2B5TqSzQoPNMmeGqGms83ZzKI4lVyFw9%2BsHRN0I4qH2l0KKbxUN1hI9LOMEedyducz00b%2ByjIlmcy%2FjCa3l9XQxLPR7sueML1ne9sILGyFdR8nuXE9hSEz7KgDmunf9c7wMloYOg0SNXDX231T9VulVgpqdYtK03LVeN9nzTxFiyYGbCV80pYdFEplX%2FJFCeNdnsfRP%2BN&X-Amz-Signature=18879f124a90110700f6e356392f51477a67da730f9b77571ee18d0322b68be1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UJRIEWX%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCWG7UvbPWMK6I%2BC5CcwPuT8RF9wcLBQj%2Bce8zMpZaECwIgetvKfonJSY6nZYnfLCPbgBjhms%2FFT4v8v5VAduVfBqAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFRkjuvUW1%2FsXoBnSrcA9TJ73gHOtLNPdzCVzyMjdJorND17G8VZHn4EtIJEN6W6U1SmoGnwJdKvtli0gqpjk9bvQ0mNC0T398C%2FD1Q8lUtNbqIRjhrEMGwbkv3QM0bSlMmV%2FmXAVBR8fI6zotaVhjl7tz9f%2FQn4bWqMGrBFIKeyHZX42b3Lvd6IEKgQ9mCotEUFtRrEKp03APYS0TD9dvfCA%2BeI2Fhi0u279mAcEheNTjMkXJEbQmbP6cRxcW3EtyvSxmqPPU1ioriSBMD0OaYGAaanHSD6J3Px0Ar0G5e9jPrMWKmSgjgRRZ9GT88t6dFFnCajTjoje9uxxzGwApOBYzNxU5RVfvYcdqjtn69yX3JR5x3QbAbPEU67fx8K3dQN%2BRcQcT0dK2R9XQoBNuxud0%2BXecJkuorkHUce9%2B8WAM%2FRU86nQ27gK3SHt480aOCNgodaW2mR1iAODUQOS8gkq%2BA2U8kV8yemaTp0%2BJyEq5HAi47lnu4Mko1ZYZKcymqpCzkKTNaFWCvIgYwLVYDZdYqcSSGrgVfMFoNFXranRFojpHd5nYHUi7rC2AAHXl%2BOslfQ4CXO4fjM9owRWHOzUdQyQOzySy4LmbZEvrSrQefBa1TP7v0CML8EsrClk9HBQdFFn%2Ba48pEMKPXxcsGOqUBZIpfDYgP%2FC2WLn1villNOEcpPu2VaujijovAuAH4ZvyBkXpdxSi7t6BSKYN8xhD5Bco0D%2FMCKMltCgTDs6A%2BwO9Mg90Pm8RjXbD1bAq6Uu9rEFgCyfoFlXURLNnJw3Ys%2FZQ4f%2FCUGsK6%2B6TMwEugh8AoXViKLurtQ7oqJpt66QzBKQqCKpTuQPLj9XCYGC8slCP1yQvpv3Ug1ED7bH%2B10a9GizjS&X-Amz-Signature=dd8c41c4c7ccbf53476b4d67ffe110a8ccc61b062df6237edfbc586df5a556d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UJRIEWX%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCWG7UvbPWMK6I%2BC5CcwPuT8RF9wcLBQj%2Bce8zMpZaECwIgetvKfonJSY6nZYnfLCPbgBjhms%2FFT4v8v5VAduVfBqAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFRkjuvUW1%2FsXoBnSrcA9TJ73gHOtLNPdzCVzyMjdJorND17G8VZHn4EtIJEN6W6U1SmoGnwJdKvtli0gqpjk9bvQ0mNC0T398C%2FD1Q8lUtNbqIRjhrEMGwbkv3QM0bSlMmV%2FmXAVBR8fI6zotaVhjl7tz9f%2FQn4bWqMGrBFIKeyHZX42b3Lvd6IEKgQ9mCotEUFtRrEKp03APYS0TD9dvfCA%2BeI2Fhi0u279mAcEheNTjMkXJEbQmbP6cRxcW3EtyvSxmqPPU1ioriSBMD0OaYGAaanHSD6J3Px0Ar0G5e9jPrMWKmSgjgRRZ9GT88t6dFFnCajTjoje9uxxzGwApOBYzNxU5RVfvYcdqjtn69yX3JR5x3QbAbPEU67fx8K3dQN%2BRcQcT0dK2R9XQoBNuxud0%2BXecJkuorkHUce9%2B8WAM%2FRU86nQ27gK3SHt480aOCNgodaW2mR1iAODUQOS8gkq%2BA2U8kV8yemaTp0%2BJyEq5HAi47lnu4Mko1ZYZKcymqpCzkKTNaFWCvIgYwLVYDZdYqcSSGrgVfMFoNFXranRFojpHd5nYHUi7rC2AAHXl%2BOslfQ4CXO4fjM9owRWHOzUdQyQOzySy4LmbZEvrSrQefBa1TP7v0CML8EsrClk9HBQdFFn%2Ba48pEMKPXxcsGOqUBZIpfDYgP%2FC2WLn1villNOEcpPu2VaujijovAuAH4ZvyBkXpdxSi7t6BSKYN8xhD5Bco0D%2FMCKMltCgTDs6A%2BwO9Mg90Pm8RjXbD1bAq6Uu9rEFgCyfoFlXURLNnJw3Ys%2FZQ4f%2FCUGsK6%2B6TMwEugh8AoXViKLurtQ7oqJpt66QzBKQqCKpTuQPLj9XCYGC8slCP1yQvpv3Ug1ED7bH%2B10a9GizjS&X-Amz-Signature=a1f9b8d61f8f273a7ad6f950888ce9b80a7f2bc6e7110c89630a7feb0c0a4206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UJRIEWX%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCWG7UvbPWMK6I%2BC5CcwPuT8RF9wcLBQj%2Bce8zMpZaECwIgetvKfonJSY6nZYnfLCPbgBjhms%2FFT4v8v5VAduVfBqAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFRkjuvUW1%2FsXoBnSrcA9TJ73gHOtLNPdzCVzyMjdJorND17G8VZHn4EtIJEN6W6U1SmoGnwJdKvtli0gqpjk9bvQ0mNC0T398C%2FD1Q8lUtNbqIRjhrEMGwbkv3QM0bSlMmV%2FmXAVBR8fI6zotaVhjl7tz9f%2FQn4bWqMGrBFIKeyHZX42b3Lvd6IEKgQ9mCotEUFtRrEKp03APYS0TD9dvfCA%2BeI2Fhi0u279mAcEheNTjMkXJEbQmbP6cRxcW3EtyvSxmqPPU1ioriSBMD0OaYGAaanHSD6J3Px0Ar0G5e9jPrMWKmSgjgRRZ9GT88t6dFFnCajTjoje9uxxzGwApOBYzNxU5RVfvYcdqjtn69yX3JR5x3QbAbPEU67fx8K3dQN%2BRcQcT0dK2R9XQoBNuxud0%2BXecJkuorkHUce9%2B8WAM%2FRU86nQ27gK3SHt480aOCNgodaW2mR1iAODUQOS8gkq%2BA2U8kV8yemaTp0%2BJyEq5HAi47lnu4Mko1ZYZKcymqpCzkKTNaFWCvIgYwLVYDZdYqcSSGrgVfMFoNFXranRFojpHd5nYHUi7rC2AAHXl%2BOslfQ4CXO4fjM9owRWHOzUdQyQOzySy4LmbZEvrSrQefBa1TP7v0CML8EsrClk9HBQdFFn%2Ba48pEMKPXxcsGOqUBZIpfDYgP%2FC2WLn1villNOEcpPu2VaujijovAuAH4ZvyBkXpdxSi7t6BSKYN8xhD5Bco0D%2FMCKMltCgTDs6A%2BwO9Mg90Pm8RjXbD1bAq6Uu9rEFgCyfoFlXURLNnJw3Ys%2FZQ4f%2FCUGsK6%2B6TMwEugh8AoXViKLurtQ7oqJpt66QzBKQqCKpTuQPLj9XCYGC8slCP1yQvpv3Ug1ED7bH%2B10a9GizjS&X-Amz-Signature=590443b0dd21829d63d327416460eced86986e701a59b4d690874b7d4b868a4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UJRIEWX%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCWG7UvbPWMK6I%2BC5CcwPuT8RF9wcLBQj%2Bce8zMpZaECwIgetvKfonJSY6nZYnfLCPbgBjhms%2FFT4v8v5VAduVfBqAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFRkjuvUW1%2FsXoBnSrcA9TJ73gHOtLNPdzCVzyMjdJorND17G8VZHn4EtIJEN6W6U1SmoGnwJdKvtli0gqpjk9bvQ0mNC0T398C%2FD1Q8lUtNbqIRjhrEMGwbkv3QM0bSlMmV%2FmXAVBR8fI6zotaVhjl7tz9f%2FQn4bWqMGrBFIKeyHZX42b3Lvd6IEKgQ9mCotEUFtRrEKp03APYS0TD9dvfCA%2BeI2Fhi0u279mAcEheNTjMkXJEbQmbP6cRxcW3EtyvSxmqPPU1ioriSBMD0OaYGAaanHSD6J3Px0Ar0G5e9jPrMWKmSgjgRRZ9GT88t6dFFnCajTjoje9uxxzGwApOBYzNxU5RVfvYcdqjtn69yX3JR5x3QbAbPEU67fx8K3dQN%2BRcQcT0dK2R9XQoBNuxud0%2BXecJkuorkHUce9%2B8WAM%2FRU86nQ27gK3SHt480aOCNgodaW2mR1iAODUQOS8gkq%2BA2U8kV8yemaTp0%2BJyEq5HAi47lnu4Mko1ZYZKcymqpCzkKTNaFWCvIgYwLVYDZdYqcSSGrgVfMFoNFXranRFojpHd5nYHUi7rC2AAHXl%2BOslfQ4CXO4fjM9owRWHOzUdQyQOzySy4LmbZEvrSrQefBa1TP7v0CML8EsrClk9HBQdFFn%2Ba48pEMKPXxcsGOqUBZIpfDYgP%2FC2WLn1villNOEcpPu2VaujijovAuAH4ZvyBkXpdxSi7t6BSKYN8xhD5Bco0D%2FMCKMltCgTDs6A%2BwO9Mg90Pm8RjXbD1bAq6Uu9rEFgCyfoFlXURLNnJw3Ys%2FZQ4f%2FCUGsK6%2B6TMwEugh8AoXViKLurtQ7oqJpt66QzBKQqCKpTuQPLj9XCYGC8slCP1yQvpv3Ug1ED7bH%2B10a9GizjS&X-Amz-Signature=2236a09ab34f07c0a1eab01cc9339fcb149c86e647c03cd36cb1000a4eabe1cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKSYM66R%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCICq17lPxiEl7TWf29isJLfDEKOLctpQE47BaTXthoewzAiEA96ib9qlMpNZ3C0JALYiIKLCLZZeLhr%2B0JCK4ZYGM8j8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFK%2BZ4b2p2jYThTQRyrcA%2BVsLEHgITgvzdipoMzdEWZBsIV4nyueIQR8ruZlZS9hCaAh%2Bt43sIN4TmCUNS9i2%2FtRzPBeHanW2ZSZKQOglBtaF%2BaJHeuEhgYKuLv8cbiJ7%2FI2Qs0PRghiblQyJIwQj4Cians4%2FEoayyHxG04HG9iwYIp2moOkU2Ul7PI5%2FWrOzzO914KMkd7byNUaKH3Sk1a3CNDxF91Eq5lQfAwDVQ3D1iGd5%2FB3Wbt%2FhF17NYwIYesVO8Oim96igFuf%2FXOOyk8sJPB6ykzILnwnQOVJyGSjdv8ekMFae6x96aED7TTWGlTlNoM38nnWQn6bqVg%2BO8mCfNB%2FGADu8IhHuKZmcLiqzxhD4DnrmBD%2F7rywe05eIb55A8t9ugeAl4H26NpTg5dEDym9nEmn1sEW%2B%2FLSOt3X6NYaPSfZQ5QW%2BVXyfLKwCqqpLih6PPu%2FiajkjJDTuml08XdzG17LhAUxtOysHdX318Sx2VI4JZ5GDFimaWLK7l%2BWAtITPGoIq6ZXmgfzaKalNQpiBuvzkM6icxzhQXD1u1vEuKUwLRmTU9ktzFuhu%2BebWzmn73MVD2Cz5M4rJi2klDdXTHjxZi%2BJrTcCZa%2FzV0YB3VwcXVpvo%2B1AC6IievjmPMqwGu%2BQPrAPMKbXxcsGOqUBbnAVjb3XWNunYhQQgW%2FjYkeziWQITQQQId5YvEL4%2BNLjusI7Up5EnkGk%2Fbw%2BEV2czfSf55450IwXpRZKgSzBOrLfRya0j%2Be59LcZkXRRZ9R18pf5vyjV%2BEJVBjO%2BozU59a8Mfhp8fxYOaZpA%2BNh%2FPWowX6ky9WCXvCwvYDaKqosF8nDuJwS0o0f3GwpGJQ76RaZxKaVDIQQ1vwV%2F8P3muZLWKKb9&X-Amz-Signature=2d4bcd33e216fb355fc5f89cbbf6cf439db592d451f1a9f1f4d8a685abce3f69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UJRIEWX%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCWG7UvbPWMK6I%2BC5CcwPuT8RF9wcLBQj%2Bce8zMpZaECwIgetvKfonJSY6nZYnfLCPbgBjhms%2FFT4v8v5VAduVfBqAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFRkjuvUW1%2FsXoBnSrcA9TJ73gHOtLNPdzCVzyMjdJorND17G8VZHn4EtIJEN6W6U1SmoGnwJdKvtli0gqpjk9bvQ0mNC0T398C%2FD1Q8lUtNbqIRjhrEMGwbkv3QM0bSlMmV%2FmXAVBR8fI6zotaVhjl7tz9f%2FQn4bWqMGrBFIKeyHZX42b3Lvd6IEKgQ9mCotEUFtRrEKp03APYS0TD9dvfCA%2BeI2Fhi0u279mAcEheNTjMkXJEbQmbP6cRxcW3EtyvSxmqPPU1ioriSBMD0OaYGAaanHSD6J3Px0Ar0G5e9jPrMWKmSgjgRRZ9GT88t6dFFnCajTjoje9uxxzGwApOBYzNxU5RVfvYcdqjtn69yX3JR5x3QbAbPEU67fx8K3dQN%2BRcQcT0dK2R9XQoBNuxud0%2BXecJkuorkHUce9%2B8WAM%2FRU86nQ27gK3SHt480aOCNgodaW2mR1iAODUQOS8gkq%2BA2U8kV8yemaTp0%2BJyEq5HAi47lnu4Mko1ZYZKcymqpCzkKTNaFWCvIgYwLVYDZdYqcSSGrgVfMFoNFXranRFojpHd5nYHUi7rC2AAHXl%2BOslfQ4CXO4fjM9owRWHOzUdQyQOzySy4LmbZEvrSrQefBa1TP7v0CML8EsrClk9HBQdFFn%2Ba48pEMKPXxcsGOqUBZIpfDYgP%2FC2WLn1villNOEcpPu2VaujijovAuAH4ZvyBkXpdxSi7t6BSKYN8xhD5Bco0D%2FMCKMltCgTDs6A%2BwO9Mg90Pm8RjXbD1bAq6Uu9rEFgCyfoFlXURLNnJw3Ys%2FZQ4f%2FCUGsK6%2B6TMwEugh8AoXViKLurtQ7oqJpt66QzBKQqCKpTuQPLj9XCYGC8slCP1yQvpv3Ug1ED7bH%2B10a9GizjS&X-Amz-Signature=030f73b1a623d514ea50dc245243666eef44fb99f97a7283c7d46b546048caf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UJRIEWX%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCWG7UvbPWMK6I%2BC5CcwPuT8RF9wcLBQj%2Bce8zMpZaECwIgetvKfonJSY6nZYnfLCPbgBjhms%2FFT4v8v5VAduVfBqAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFRkjuvUW1%2FsXoBnSrcA9TJ73gHOtLNPdzCVzyMjdJorND17G8VZHn4EtIJEN6W6U1SmoGnwJdKvtli0gqpjk9bvQ0mNC0T398C%2FD1Q8lUtNbqIRjhrEMGwbkv3QM0bSlMmV%2FmXAVBR8fI6zotaVhjl7tz9f%2FQn4bWqMGrBFIKeyHZX42b3Lvd6IEKgQ9mCotEUFtRrEKp03APYS0TD9dvfCA%2BeI2Fhi0u279mAcEheNTjMkXJEbQmbP6cRxcW3EtyvSxmqPPU1ioriSBMD0OaYGAaanHSD6J3Px0Ar0G5e9jPrMWKmSgjgRRZ9GT88t6dFFnCajTjoje9uxxzGwApOBYzNxU5RVfvYcdqjtn69yX3JR5x3QbAbPEU67fx8K3dQN%2BRcQcT0dK2R9XQoBNuxud0%2BXecJkuorkHUce9%2B8WAM%2FRU86nQ27gK3SHt480aOCNgodaW2mR1iAODUQOS8gkq%2BA2U8kV8yemaTp0%2BJyEq5HAi47lnu4Mko1ZYZKcymqpCzkKTNaFWCvIgYwLVYDZdYqcSSGrgVfMFoNFXranRFojpHd5nYHUi7rC2AAHXl%2BOslfQ4CXO4fjM9owRWHOzUdQyQOzySy4LmbZEvrSrQefBa1TP7v0CML8EsrClk9HBQdFFn%2Ba48pEMKPXxcsGOqUBZIpfDYgP%2FC2WLn1villNOEcpPu2VaujijovAuAH4ZvyBkXpdxSi7t6BSKYN8xhD5Bco0D%2FMCKMltCgTDs6A%2BwO9Mg90Pm8RjXbD1bAq6Uu9rEFgCyfoFlXURLNnJw3Ys%2FZQ4f%2FCUGsK6%2B6TMwEugh8AoXViKLurtQ7oqJpt66QzBKQqCKpTuQPLj9XCYGC8slCP1yQvpv3Ug1ED7bH%2B10a9GizjS&X-Amz-Signature=5727d2ea7db08e73f0fd54b5b8bd1f42ec91832e03c4811e680a7ec78cb8e9e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UJRIEWX%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCWG7UvbPWMK6I%2BC5CcwPuT8RF9wcLBQj%2Bce8zMpZaECwIgetvKfonJSY6nZYnfLCPbgBjhms%2FFT4v8v5VAduVfBqAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFRkjuvUW1%2FsXoBnSrcA9TJ73gHOtLNPdzCVzyMjdJorND17G8VZHn4EtIJEN6W6U1SmoGnwJdKvtli0gqpjk9bvQ0mNC0T398C%2FD1Q8lUtNbqIRjhrEMGwbkv3QM0bSlMmV%2FmXAVBR8fI6zotaVhjl7tz9f%2FQn4bWqMGrBFIKeyHZX42b3Lvd6IEKgQ9mCotEUFtRrEKp03APYS0TD9dvfCA%2BeI2Fhi0u279mAcEheNTjMkXJEbQmbP6cRxcW3EtyvSxmqPPU1ioriSBMD0OaYGAaanHSD6J3Px0Ar0G5e9jPrMWKmSgjgRRZ9GT88t6dFFnCajTjoje9uxxzGwApOBYzNxU5RVfvYcdqjtn69yX3JR5x3QbAbPEU67fx8K3dQN%2BRcQcT0dK2R9XQoBNuxud0%2BXecJkuorkHUce9%2B8WAM%2FRU86nQ27gK3SHt480aOCNgodaW2mR1iAODUQOS8gkq%2BA2U8kV8yemaTp0%2BJyEq5HAi47lnu4Mko1ZYZKcymqpCzkKTNaFWCvIgYwLVYDZdYqcSSGrgVfMFoNFXranRFojpHd5nYHUi7rC2AAHXl%2BOslfQ4CXO4fjM9owRWHOzUdQyQOzySy4LmbZEvrSrQefBa1TP7v0CML8EsrClk9HBQdFFn%2Ba48pEMKPXxcsGOqUBZIpfDYgP%2FC2WLn1villNOEcpPu2VaujijovAuAH4ZvyBkXpdxSi7t6BSKYN8xhD5Bco0D%2FMCKMltCgTDs6A%2BwO9Mg90Pm8RjXbD1bAq6Uu9rEFgCyfoFlXURLNnJw3Ys%2FZQ4f%2FCUGsK6%2B6TMwEugh8AoXViKLurtQ7oqJpt66QzBKQqCKpTuQPLj9XCYGC8slCP1yQvpv3Ug1ED7bH%2B10a9GizjS&X-Amz-Signature=9b662ac15adfd566163e692a4bfe8631901a664969fd16d5a230aaaa80de37ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UJRIEWX%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCWG7UvbPWMK6I%2BC5CcwPuT8RF9wcLBQj%2Bce8zMpZaECwIgetvKfonJSY6nZYnfLCPbgBjhms%2FFT4v8v5VAduVfBqAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFRkjuvUW1%2FsXoBnSrcA9TJ73gHOtLNPdzCVzyMjdJorND17G8VZHn4EtIJEN6W6U1SmoGnwJdKvtli0gqpjk9bvQ0mNC0T398C%2FD1Q8lUtNbqIRjhrEMGwbkv3QM0bSlMmV%2FmXAVBR8fI6zotaVhjl7tz9f%2FQn4bWqMGrBFIKeyHZX42b3Lvd6IEKgQ9mCotEUFtRrEKp03APYS0TD9dvfCA%2BeI2Fhi0u279mAcEheNTjMkXJEbQmbP6cRxcW3EtyvSxmqPPU1ioriSBMD0OaYGAaanHSD6J3Px0Ar0G5e9jPrMWKmSgjgRRZ9GT88t6dFFnCajTjoje9uxxzGwApOBYzNxU5RVfvYcdqjtn69yX3JR5x3QbAbPEU67fx8K3dQN%2BRcQcT0dK2R9XQoBNuxud0%2BXecJkuorkHUce9%2B8WAM%2FRU86nQ27gK3SHt480aOCNgodaW2mR1iAODUQOS8gkq%2BA2U8kV8yemaTp0%2BJyEq5HAi47lnu4Mko1ZYZKcymqpCzkKTNaFWCvIgYwLVYDZdYqcSSGrgVfMFoNFXranRFojpHd5nYHUi7rC2AAHXl%2BOslfQ4CXO4fjM9owRWHOzUdQyQOzySy4LmbZEvrSrQefBa1TP7v0CML8EsrClk9HBQdFFn%2Ba48pEMKPXxcsGOqUBZIpfDYgP%2FC2WLn1villNOEcpPu2VaujijovAuAH4ZvyBkXpdxSi7t6BSKYN8xhD5Bco0D%2FMCKMltCgTDs6A%2BwO9Mg90Pm8RjXbD1bAq6Uu9rEFgCyfoFlXURLNnJw3Ys%2FZQ4f%2FCUGsK6%2B6TMwEugh8AoXViKLurtQ7oqJpt66QzBKQqCKpTuQPLj9XCYGC8slCP1yQvpv3Ug1ED7bH%2B10a9GizjS&X-Amz-Signature=710cfd4fecb8ff4f5ec5ee90e9302d9c3a1afa73706c96f51626ff71b0934fe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UJRIEWX%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCWG7UvbPWMK6I%2BC5CcwPuT8RF9wcLBQj%2Bce8zMpZaECwIgetvKfonJSY6nZYnfLCPbgBjhms%2FFT4v8v5VAduVfBqAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFRkjuvUW1%2FsXoBnSrcA9TJ73gHOtLNPdzCVzyMjdJorND17G8VZHn4EtIJEN6W6U1SmoGnwJdKvtli0gqpjk9bvQ0mNC0T398C%2FD1Q8lUtNbqIRjhrEMGwbkv3QM0bSlMmV%2FmXAVBR8fI6zotaVhjl7tz9f%2FQn4bWqMGrBFIKeyHZX42b3Lvd6IEKgQ9mCotEUFtRrEKp03APYS0TD9dvfCA%2BeI2Fhi0u279mAcEheNTjMkXJEbQmbP6cRxcW3EtyvSxmqPPU1ioriSBMD0OaYGAaanHSD6J3Px0Ar0G5e9jPrMWKmSgjgRRZ9GT88t6dFFnCajTjoje9uxxzGwApOBYzNxU5RVfvYcdqjtn69yX3JR5x3QbAbPEU67fx8K3dQN%2BRcQcT0dK2R9XQoBNuxud0%2BXecJkuorkHUce9%2B8WAM%2FRU86nQ27gK3SHt480aOCNgodaW2mR1iAODUQOS8gkq%2BA2U8kV8yemaTp0%2BJyEq5HAi47lnu4Mko1ZYZKcymqpCzkKTNaFWCvIgYwLVYDZdYqcSSGrgVfMFoNFXranRFojpHd5nYHUi7rC2AAHXl%2BOslfQ4CXO4fjM9owRWHOzUdQyQOzySy4LmbZEvrSrQefBa1TP7v0CML8EsrClk9HBQdFFn%2Ba48pEMKPXxcsGOqUBZIpfDYgP%2FC2WLn1villNOEcpPu2VaujijovAuAH4ZvyBkXpdxSi7t6BSKYN8xhD5Bco0D%2FMCKMltCgTDs6A%2BwO9Mg90Pm8RjXbD1bAq6Uu9rEFgCyfoFlXURLNnJw3Ys%2FZQ4f%2FCUGsK6%2B6TMwEugh8AoXViKLurtQ7oqJpt66QzBKQqCKpTuQPLj9XCYGC8slCP1yQvpv3Ug1ED7bH%2B10a9GizjS&X-Amz-Signature=2c92971fa67d488195b13d2901af23a51aaa8537d01fc7924935d108f2157f14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UJRIEWX%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCWG7UvbPWMK6I%2BC5CcwPuT8RF9wcLBQj%2Bce8zMpZaECwIgetvKfonJSY6nZYnfLCPbgBjhms%2FFT4v8v5VAduVfBqAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFRkjuvUW1%2FsXoBnSrcA9TJ73gHOtLNPdzCVzyMjdJorND17G8VZHn4EtIJEN6W6U1SmoGnwJdKvtli0gqpjk9bvQ0mNC0T398C%2FD1Q8lUtNbqIRjhrEMGwbkv3QM0bSlMmV%2FmXAVBR8fI6zotaVhjl7tz9f%2FQn4bWqMGrBFIKeyHZX42b3Lvd6IEKgQ9mCotEUFtRrEKp03APYS0TD9dvfCA%2BeI2Fhi0u279mAcEheNTjMkXJEbQmbP6cRxcW3EtyvSxmqPPU1ioriSBMD0OaYGAaanHSD6J3Px0Ar0G5e9jPrMWKmSgjgRRZ9GT88t6dFFnCajTjoje9uxxzGwApOBYzNxU5RVfvYcdqjtn69yX3JR5x3QbAbPEU67fx8K3dQN%2BRcQcT0dK2R9XQoBNuxud0%2BXecJkuorkHUce9%2B8WAM%2FRU86nQ27gK3SHt480aOCNgodaW2mR1iAODUQOS8gkq%2BA2U8kV8yemaTp0%2BJyEq5HAi47lnu4Mko1ZYZKcymqpCzkKTNaFWCvIgYwLVYDZdYqcSSGrgVfMFoNFXranRFojpHd5nYHUi7rC2AAHXl%2BOslfQ4CXO4fjM9owRWHOzUdQyQOzySy4LmbZEvrSrQefBa1TP7v0CML8EsrClk9HBQdFFn%2Ba48pEMKPXxcsGOqUBZIpfDYgP%2FC2WLn1villNOEcpPu2VaujijovAuAH4ZvyBkXpdxSi7t6BSKYN8xhD5Bco0D%2FMCKMltCgTDs6A%2BwO9Mg90Pm8RjXbD1bAq6Uu9rEFgCyfoFlXURLNnJw3Ys%2FZQ4f%2FCUGsK6%2B6TMwEugh8AoXViKLurtQ7oqJpt66QzBKQqCKpTuQPLj9XCYGC8slCP1yQvpv3Ug1ED7bH%2B10a9GizjS&X-Amz-Signature=743a4f358a8d9b5306c846732e28ac49b572817fcca516fecfcef3b38d2d4445&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


