---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-02T09:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-02T09:55:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SZV2GOW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGt6G3fIaL5sgSdqhmBpV1xKwXuHYWjHIkGPsJK3DUJgAiAg3m0el1hl0emyyZ51i%2FsmJ1mpr6yM%2F8RK2%2Bhb6Y%2FL6Cr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMzBZNK7q1EAFqL09fKtwDAuzfX9CKExmmJFCh0b2wRn17y88B%2Bb%2Fhgu8bN5AUe7G04L54gLTyl%2BuXeb75aCFec52ubTl8UsXe82L1WcuTedPloOaS4MfBhZ26Gwt%2BgsXp%2BKeHDXUM1umTepEIWZZIF8avFozMgoD5BgJNDk1U9ki0Pn%2F%2BrNCI%2Ft7zz8IkqGBoXLZ%2Bq8uNRa%2FSRufB93Tjk0w100uzNJo8RC9mjzopHup6rI4AC5aGCTc34fdQLmbyioezfNjflAW4XZUVxu5SV%2B3lTcV3mRkIp0FYYw8aYwqzBNeunVquRgBI%2BC0aQqWI8YA0R91t12V2bhDX4cM6JtENU1P4%2Bynzp7fYs8lLZHkfklbugteTVk53xbo0m2zxor48UVuXtb%2FAcPV3BVy98Qh27pGYXuvXjTt01a60Yapzyut2smJGWK2Sgp8NMYdZ3Na5zNPJVenT5X3qaWTx18euxRw2PE1UT2zPOnXrieutzcf669qWfHyzWodYwxz67iOegJlKpuYwCd5ol%2FkvDRbQxilEUAdftAMPf%2BlB9bMShnMWM7jT0nBDLyFfXKT%2B53oILDAweVd549QHLp2AvcqIhF%2BU7tQuo%2FD3WQSTUbD0XW8wojy3JB%2B9p%2B7%2Fe%2Fo4HP5DU6qMRJF6KSkwr9r9xAY6pgGIAUEEpEl34dFV4tCiiPNTLA9x6C4%2F0GT%2Btq%2BspEcCQE4WkPkYqjz3HbljEO3LA6lycp2L5pD9kcKVqcPzw%2BQNqBME28wCXXcBgKa5btuT7SA9LGy7S%2BVF2U24eyn5KVVs2GBw3t9yXvjvskXRObyk0ACk1dUun4vdQEZFWbYsgEUEHl%2Brt5YmPjQWGQZscw8KPG67VsVMljgugIt7F5o1ZTbh6G8T&X-Amz-Signature=22af7b3e10aa00c414bc1acfe40011c9c468f7130134a997c710ddf846070e06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SZV2GOW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGt6G3fIaL5sgSdqhmBpV1xKwXuHYWjHIkGPsJK3DUJgAiAg3m0el1hl0emyyZ51i%2FsmJ1mpr6yM%2F8RK2%2Bhb6Y%2FL6Cr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMzBZNK7q1EAFqL09fKtwDAuzfX9CKExmmJFCh0b2wRn17y88B%2Bb%2Fhgu8bN5AUe7G04L54gLTyl%2BuXeb75aCFec52ubTl8UsXe82L1WcuTedPloOaS4MfBhZ26Gwt%2BgsXp%2BKeHDXUM1umTepEIWZZIF8avFozMgoD5BgJNDk1U9ki0Pn%2F%2BrNCI%2Ft7zz8IkqGBoXLZ%2Bq8uNRa%2FSRufB93Tjk0w100uzNJo8RC9mjzopHup6rI4AC5aGCTc34fdQLmbyioezfNjflAW4XZUVxu5SV%2B3lTcV3mRkIp0FYYw8aYwqzBNeunVquRgBI%2BC0aQqWI8YA0R91t12V2bhDX4cM6JtENU1P4%2Bynzp7fYs8lLZHkfklbugteTVk53xbo0m2zxor48UVuXtb%2FAcPV3BVy98Qh27pGYXuvXjTt01a60Yapzyut2smJGWK2Sgp8NMYdZ3Na5zNPJVenT5X3qaWTx18euxRw2PE1UT2zPOnXrieutzcf669qWfHyzWodYwxz67iOegJlKpuYwCd5ol%2FkvDRbQxilEUAdftAMPf%2BlB9bMShnMWM7jT0nBDLyFfXKT%2B53oILDAweVd549QHLp2AvcqIhF%2BU7tQuo%2FD3WQSTUbD0XW8wojy3JB%2B9p%2B7%2Fe%2Fo4HP5DU6qMRJF6KSkwr9r9xAY6pgGIAUEEpEl34dFV4tCiiPNTLA9x6C4%2F0GT%2Btq%2BspEcCQE4WkPkYqjz3HbljEO3LA6lycp2L5pD9kcKVqcPzw%2BQNqBME28wCXXcBgKa5btuT7SA9LGy7S%2BVF2U24eyn5KVVs2GBw3t9yXvjvskXRObyk0ACk1dUun4vdQEZFWbYsgEUEHl%2Brt5YmPjQWGQZscw8KPG67VsVMljgugIt7F5o1ZTbh6G8T&X-Amz-Signature=8754a5670c113ab3c575e960fca2bab09a42b639f518069fc01be17cda50bd37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SZV2GOW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGt6G3fIaL5sgSdqhmBpV1xKwXuHYWjHIkGPsJK3DUJgAiAg3m0el1hl0emyyZ51i%2FsmJ1mpr6yM%2F8RK2%2Bhb6Y%2FL6Cr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMzBZNK7q1EAFqL09fKtwDAuzfX9CKExmmJFCh0b2wRn17y88B%2Bb%2Fhgu8bN5AUe7G04L54gLTyl%2BuXeb75aCFec52ubTl8UsXe82L1WcuTedPloOaS4MfBhZ26Gwt%2BgsXp%2BKeHDXUM1umTepEIWZZIF8avFozMgoD5BgJNDk1U9ki0Pn%2F%2BrNCI%2Ft7zz8IkqGBoXLZ%2Bq8uNRa%2FSRufB93Tjk0w100uzNJo8RC9mjzopHup6rI4AC5aGCTc34fdQLmbyioezfNjflAW4XZUVxu5SV%2B3lTcV3mRkIp0FYYw8aYwqzBNeunVquRgBI%2BC0aQqWI8YA0R91t12V2bhDX4cM6JtENU1P4%2Bynzp7fYs8lLZHkfklbugteTVk53xbo0m2zxor48UVuXtb%2FAcPV3BVy98Qh27pGYXuvXjTt01a60Yapzyut2smJGWK2Sgp8NMYdZ3Na5zNPJVenT5X3qaWTx18euxRw2PE1UT2zPOnXrieutzcf669qWfHyzWodYwxz67iOegJlKpuYwCd5ol%2FkvDRbQxilEUAdftAMPf%2BlB9bMShnMWM7jT0nBDLyFfXKT%2B53oILDAweVd549QHLp2AvcqIhF%2BU7tQuo%2FD3WQSTUbD0XW8wojy3JB%2B9p%2B7%2Fe%2Fo4HP5DU6qMRJF6KSkwr9r9xAY6pgGIAUEEpEl34dFV4tCiiPNTLA9x6C4%2F0GT%2Btq%2BspEcCQE4WkPkYqjz3HbljEO3LA6lycp2L5pD9kcKVqcPzw%2BQNqBME28wCXXcBgKa5btuT7SA9LGy7S%2BVF2U24eyn5KVVs2GBw3t9yXvjvskXRObyk0ACk1dUun4vdQEZFWbYsgEUEHl%2Brt5YmPjQWGQZscw8KPG67VsVMljgugIt7F5o1ZTbh6G8T&X-Amz-Signature=1e4d40faa31a59045d2a8d00e30d0b4e6d06f9d8c14186815cd693f8b8a627bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SZV2GOW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGt6G3fIaL5sgSdqhmBpV1xKwXuHYWjHIkGPsJK3DUJgAiAg3m0el1hl0emyyZ51i%2FsmJ1mpr6yM%2F8RK2%2Bhb6Y%2FL6Cr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMzBZNK7q1EAFqL09fKtwDAuzfX9CKExmmJFCh0b2wRn17y88B%2Bb%2Fhgu8bN5AUe7G04L54gLTyl%2BuXeb75aCFec52ubTl8UsXe82L1WcuTedPloOaS4MfBhZ26Gwt%2BgsXp%2BKeHDXUM1umTepEIWZZIF8avFozMgoD5BgJNDk1U9ki0Pn%2F%2BrNCI%2Ft7zz8IkqGBoXLZ%2Bq8uNRa%2FSRufB93Tjk0w100uzNJo8RC9mjzopHup6rI4AC5aGCTc34fdQLmbyioezfNjflAW4XZUVxu5SV%2B3lTcV3mRkIp0FYYw8aYwqzBNeunVquRgBI%2BC0aQqWI8YA0R91t12V2bhDX4cM6JtENU1P4%2Bynzp7fYs8lLZHkfklbugteTVk53xbo0m2zxor48UVuXtb%2FAcPV3BVy98Qh27pGYXuvXjTt01a60Yapzyut2smJGWK2Sgp8NMYdZ3Na5zNPJVenT5X3qaWTx18euxRw2PE1UT2zPOnXrieutzcf669qWfHyzWodYwxz67iOegJlKpuYwCd5ol%2FkvDRbQxilEUAdftAMPf%2BlB9bMShnMWM7jT0nBDLyFfXKT%2B53oILDAweVd549QHLp2AvcqIhF%2BU7tQuo%2FD3WQSTUbD0XW8wojy3JB%2B9p%2B7%2Fe%2Fo4HP5DU6qMRJF6KSkwr9r9xAY6pgGIAUEEpEl34dFV4tCiiPNTLA9x6C4%2F0GT%2Btq%2BspEcCQE4WkPkYqjz3HbljEO3LA6lycp2L5pD9kcKVqcPzw%2BQNqBME28wCXXcBgKa5btuT7SA9LGy7S%2BVF2U24eyn5KVVs2GBw3t9yXvjvskXRObyk0ACk1dUun4vdQEZFWbYsgEUEHl%2Brt5YmPjQWGQZscw8KPG67VsVMljgugIt7F5o1ZTbh6G8T&X-Amz-Signature=1835ee350a9374352b0ea17a63be2c26489cb3492105ef3eec8089419221c9a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SZV2GOW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGt6G3fIaL5sgSdqhmBpV1xKwXuHYWjHIkGPsJK3DUJgAiAg3m0el1hl0emyyZ51i%2FsmJ1mpr6yM%2F8RK2%2Bhb6Y%2FL6Cr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMzBZNK7q1EAFqL09fKtwDAuzfX9CKExmmJFCh0b2wRn17y88B%2Bb%2Fhgu8bN5AUe7G04L54gLTyl%2BuXeb75aCFec52ubTl8UsXe82L1WcuTedPloOaS4MfBhZ26Gwt%2BgsXp%2BKeHDXUM1umTepEIWZZIF8avFozMgoD5BgJNDk1U9ki0Pn%2F%2BrNCI%2Ft7zz8IkqGBoXLZ%2Bq8uNRa%2FSRufB93Tjk0w100uzNJo8RC9mjzopHup6rI4AC5aGCTc34fdQLmbyioezfNjflAW4XZUVxu5SV%2B3lTcV3mRkIp0FYYw8aYwqzBNeunVquRgBI%2BC0aQqWI8YA0R91t12V2bhDX4cM6JtENU1P4%2Bynzp7fYs8lLZHkfklbugteTVk53xbo0m2zxor48UVuXtb%2FAcPV3BVy98Qh27pGYXuvXjTt01a60Yapzyut2smJGWK2Sgp8NMYdZ3Na5zNPJVenT5X3qaWTx18euxRw2PE1UT2zPOnXrieutzcf669qWfHyzWodYwxz67iOegJlKpuYwCd5ol%2FkvDRbQxilEUAdftAMPf%2BlB9bMShnMWM7jT0nBDLyFfXKT%2B53oILDAweVd549QHLp2AvcqIhF%2BU7tQuo%2FD3WQSTUbD0XW8wojy3JB%2B9p%2B7%2Fe%2Fo4HP5DU6qMRJF6KSkwr9r9xAY6pgGIAUEEpEl34dFV4tCiiPNTLA9x6C4%2F0GT%2Btq%2BspEcCQE4WkPkYqjz3HbljEO3LA6lycp2L5pD9kcKVqcPzw%2BQNqBME28wCXXcBgKa5btuT7SA9LGy7S%2BVF2U24eyn5KVVs2GBw3t9yXvjvskXRObyk0ACk1dUun4vdQEZFWbYsgEUEHl%2Brt5YmPjQWGQZscw8KPG67VsVMljgugIt7F5o1ZTbh6G8T&X-Amz-Signature=e72ab353fb9b324b829e5cbce9eba62d99eb311b0b42e1872dd16ea824e393be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SZV2GOW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGt6G3fIaL5sgSdqhmBpV1xKwXuHYWjHIkGPsJK3DUJgAiAg3m0el1hl0emyyZ51i%2FsmJ1mpr6yM%2F8RK2%2Bhb6Y%2FL6Cr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMzBZNK7q1EAFqL09fKtwDAuzfX9CKExmmJFCh0b2wRn17y88B%2Bb%2Fhgu8bN5AUe7G04L54gLTyl%2BuXeb75aCFec52ubTl8UsXe82L1WcuTedPloOaS4MfBhZ26Gwt%2BgsXp%2BKeHDXUM1umTepEIWZZIF8avFozMgoD5BgJNDk1U9ki0Pn%2F%2BrNCI%2Ft7zz8IkqGBoXLZ%2Bq8uNRa%2FSRufB93Tjk0w100uzNJo8RC9mjzopHup6rI4AC5aGCTc34fdQLmbyioezfNjflAW4XZUVxu5SV%2B3lTcV3mRkIp0FYYw8aYwqzBNeunVquRgBI%2BC0aQqWI8YA0R91t12V2bhDX4cM6JtENU1P4%2Bynzp7fYs8lLZHkfklbugteTVk53xbo0m2zxor48UVuXtb%2FAcPV3BVy98Qh27pGYXuvXjTt01a60Yapzyut2smJGWK2Sgp8NMYdZ3Na5zNPJVenT5X3qaWTx18euxRw2PE1UT2zPOnXrieutzcf669qWfHyzWodYwxz67iOegJlKpuYwCd5ol%2FkvDRbQxilEUAdftAMPf%2BlB9bMShnMWM7jT0nBDLyFfXKT%2B53oILDAweVd549QHLp2AvcqIhF%2BU7tQuo%2FD3WQSTUbD0XW8wojy3JB%2B9p%2B7%2Fe%2Fo4HP5DU6qMRJF6KSkwr9r9xAY6pgGIAUEEpEl34dFV4tCiiPNTLA9x6C4%2F0GT%2Btq%2BspEcCQE4WkPkYqjz3HbljEO3LA6lycp2L5pD9kcKVqcPzw%2BQNqBME28wCXXcBgKa5btuT7SA9LGy7S%2BVF2U24eyn5KVVs2GBw3t9yXvjvskXRObyk0ACk1dUun4vdQEZFWbYsgEUEHl%2Brt5YmPjQWGQZscw8KPG67VsVMljgugIt7F5o1ZTbh6G8T&X-Amz-Signature=46d31bb4767333e4938d3cf457b30dbb5c53d2346ff2afd9ea671f43ddf0bf38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SZV2GOW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGt6G3fIaL5sgSdqhmBpV1xKwXuHYWjHIkGPsJK3DUJgAiAg3m0el1hl0emyyZ51i%2FsmJ1mpr6yM%2F8RK2%2Bhb6Y%2FL6Cr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMzBZNK7q1EAFqL09fKtwDAuzfX9CKExmmJFCh0b2wRn17y88B%2Bb%2Fhgu8bN5AUe7G04L54gLTyl%2BuXeb75aCFec52ubTl8UsXe82L1WcuTedPloOaS4MfBhZ26Gwt%2BgsXp%2BKeHDXUM1umTepEIWZZIF8avFozMgoD5BgJNDk1U9ki0Pn%2F%2BrNCI%2Ft7zz8IkqGBoXLZ%2Bq8uNRa%2FSRufB93Tjk0w100uzNJo8RC9mjzopHup6rI4AC5aGCTc34fdQLmbyioezfNjflAW4XZUVxu5SV%2B3lTcV3mRkIp0FYYw8aYwqzBNeunVquRgBI%2BC0aQqWI8YA0R91t12V2bhDX4cM6JtENU1P4%2Bynzp7fYs8lLZHkfklbugteTVk53xbo0m2zxor48UVuXtb%2FAcPV3BVy98Qh27pGYXuvXjTt01a60Yapzyut2smJGWK2Sgp8NMYdZ3Na5zNPJVenT5X3qaWTx18euxRw2PE1UT2zPOnXrieutzcf669qWfHyzWodYwxz67iOegJlKpuYwCd5ol%2FkvDRbQxilEUAdftAMPf%2BlB9bMShnMWM7jT0nBDLyFfXKT%2B53oILDAweVd549QHLp2AvcqIhF%2BU7tQuo%2FD3WQSTUbD0XW8wojy3JB%2B9p%2B7%2Fe%2Fo4HP5DU6qMRJF6KSkwr9r9xAY6pgGIAUEEpEl34dFV4tCiiPNTLA9x6C4%2F0GT%2Btq%2BspEcCQE4WkPkYqjz3HbljEO3LA6lycp2L5pD9kcKVqcPzw%2BQNqBME28wCXXcBgKa5btuT7SA9LGy7S%2BVF2U24eyn5KVVs2GBw3t9yXvjvskXRObyk0ACk1dUun4vdQEZFWbYsgEUEHl%2Brt5YmPjQWGQZscw8KPG67VsVMljgugIt7F5o1ZTbh6G8T&X-Amz-Signature=b0f9e7738ab86657ccbddcdfde199ec17d93d5eff16e3b161ee689b4ab640bd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SZV2GOW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGt6G3fIaL5sgSdqhmBpV1xKwXuHYWjHIkGPsJK3DUJgAiAg3m0el1hl0emyyZ51i%2FsmJ1mpr6yM%2F8RK2%2Bhb6Y%2FL6Cr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMzBZNK7q1EAFqL09fKtwDAuzfX9CKExmmJFCh0b2wRn17y88B%2Bb%2Fhgu8bN5AUe7G04L54gLTyl%2BuXeb75aCFec52ubTl8UsXe82L1WcuTedPloOaS4MfBhZ26Gwt%2BgsXp%2BKeHDXUM1umTepEIWZZIF8avFozMgoD5BgJNDk1U9ki0Pn%2F%2BrNCI%2Ft7zz8IkqGBoXLZ%2Bq8uNRa%2FSRufB93Tjk0w100uzNJo8RC9mjzopHup6rI4AC5aGCTc34fdQLmbyioezfNjflAW4XZUVxu5SV%2B3lTcV3mRkIp0FYYw8aYwqzBNeunVquRgBI%2BC0aQqWI8YA0R91t12V2bhDX4cM6JtENU1P4%2Bynzp7fYs8lLZHkfklbugteTVk53xbo0m2zxor48UVuXtb%2FAcPV3BVy98Qh27pGYXuvXjTt01a60Yapzyut2smJGWK2Sgp8NMYdZ3Na5zNPJVenT5X3qaWTx18euxRw2PE1UT2zPOnXrieutzcf669qWfHyzWodYwxz67iOegJlKpuYwCd5ol%2FkvDRbQxilEUAdftAMPf%2BlB9bMShnMWM7jT0nBDLyFfXKT%2B53oILDAweVd549QHLp2AvcqIhF%2BU7tQuo%2FD3WQSTUbD0XW8wojy3JB%2B9p%2B7%2Fe%2Fo4HP5DU6qMRJF6KSkwr9r9xAY6pgGIAUEEpEl34dFV4tCiiPNTLA9x6C4%2F0GT%2Btq%2BspEcCQE4WkPkYqjz3HbljEO3LA6lycp2L5pD9kcKVqcPzw%2BQNqBME28wCXXcBgKa5btuT7SA9LGy7S%2BVF2U24eyn5KVVs2GBw3t9yXvjvskXRObyk0ACk1dUun4vdQEZFWbYsgEUEHl%2Brt5YmPjQWGQZscw8KPG67VsVMljgugIt7F5o1ZTbh6G8T&X-Amz-Signature=abb54b2d855aaccf3b94df08ff8c06b9cd32919426f2bb080a3334da05691cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SZV2GOW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGt6G3fIaL5sgSdqhmBpV1xKwXuHYWjHIkGPsJK3DUJgAiAg3m0el1hl0emyyZ51i%2FsmJ1mpr6yM%2F8RK2%2Bhb6Y%2FL6Cr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMzBZNK7q1EAFqL09fKtwDAuzfX9CKExmmJFCh0b2wRn17y88B%2Bb%2Fhgu8bN5AUe7G04L54gLTyl%2BuXeb75aCFec52ubTl8UsXe82L1WcuTedPloOaS4MfBhZ26Gwt%2BgsXp%2BKeHDXUM1umTepEIWZZIF8avFozMgoD5BgJNDk1U9ki0Pn%2F%2BrNCI%2Ft7zz8IkqGBoXLZ%2Bq8uNRa%2FSRufB93Tjk0w100uzNJo8RC9mjzopHup6rI4AC5aGCTc34fdQLmbyioezfNjflAW4XZUVxu5SV%2B3lTcV3mRkIp0FYYw8aYwqzBNeunVquRgBI%2BC0aQqWI8YA0R91t12V2bhDX4cM6JtENU1P4%2Bynzp7fYs8lLZHkfklbugteTVk53xbo0m2zxor48UVuXtb%2FAcPV3BVy98Qh27pGYXuvXjTt01a60Yapzyut2smJGWK2Sgp8NMYdZ3Na5zNPJVenT5X3qaWTx18euxRw2PE1UT2zPOnXrieutzcf669qWfHyzWodYwxz67iOegJlKpuYwCd5ol%2FkvDRbQxilEUAdftAMPf%2BlB9bMShnMWM7jT0nBDLyFfXKT%2B53oILDAweVd549QHLp2AvcqIhF%2BU7tQuo%2FD3WQSTUbD0XW8wojy3JB%2B9p%2B7%2Fe%2Fo4HP5DU6qMRJF6KSkwr9r9xAY6pgGIAUEEpEl34dFV4tCiiPNTLA9x6C4%2F0GT%2Btq%2BspEcCQE4WkPkYqjz3HbljEO3LA6lycp2L5pD9kcKVqcPzw%2BQNqBME28wCXXcBgKa5btuT7SA9LGy7S%2BVF2U24eyn5KVVs2GBw3t9yXvjvskXRObyk0ACk1dUun4vdQEZFWbYsgEUEHl%2Brt5YmPjQWGQZscw8KPG67VsVMljgugIt7F5o1ZTbh6G8T&X-Amz-Signature=b4e1a7cc2b4c2c31592a98644d61aa31cc42d7e0a2468f960617bd31af0c8af4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SZV2GOW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGt6G3fIaL5sgSdqhmBpV1xKwXuHYWjHIkGPsJK3DUJgAiAg3m0el1hl0emyyZ51i%2FsmJ1mpr6yM%2F8RK2%2Bhb6Y%2FL6Cr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMzBZNK7q1EAFqL09fKtwDAuzfX9CKExmmJFCh0b2wRn17y88B%2Bb%2Fhgu8bN5AUe7G04L54gLTyl%2BuXeb75aCFec52ubTl8UsXe82L1WcuTedPloOaS4MfBhZ26Gwt%2BgsXp%2BKeHDXUM1umTepEIWZZIF8avFozMgoD5BgJNDk1U9ki0Pn%2F%2BrNCI%2Ft7zz8IkqGBoXLZ%2Bq8uNRa%2FSRufB93Tjk0w100uzNJo8RC9mjzopHup6rI4AC5aGCTc34fdQLmbyioezfNjflAW4XZUVxu5SV%2B3lTcV3mRkIp0FYYw8aYwqzBNeunVquRgBI%2BC0aQqWI8YA0R91t12V2bhDX4cM6JtENU1P4%2Bynzp7fYs8lLZHkfklbugteTVk53xbo0m2zxor48UVuXtb%2FAcPV3BVy98Qh27pGYXuvXjTt01a60Yapzyut2smJGWK2Sgp8NMYdZ3Na5zNPJVenT5X3qaWTx18euxRw2PE1UT2zPOnXrieutzcf669qWfHyzWodYwxz67iOegJlKpuYwCd5ol%2FkvDRbQxilEUAdftAMPf%2BlB9bMShnMWM7jT0nBDLyFfXKT%2B53oILDAweVd549QHLp2AvcqIhF%2BU7tQuo%2FD3WQSTUbD0XW8wojy3JB%2B9p%2B7%2Fe%2Fo4HP5DU6qMRJF6KSkwr9r9xAY6pgGIAUEEpEl34dFV4tCiiPNTLA9x6C4%2F0GT%2Btq%2BspEcCQE4WkPkYqjz3HbljEO3LA6lycp2L5pD9kcKVqcPzw%2BQNqBME28wCXXcBgKa5btuT7SA9LGy7S%2BVF2U24eyn5KVVs2GBw3t9yXvjvskXRObyk0ACk1dUun4vdQEZFWbYsgEUEHl%2Brt5YmPjQWGQZscw8KPG67VsVMljgugIt7F5o1ZTbh6G8T&X-Amz-Signature=965f169978f9e9fcc88c8453195bce1b89b366632926e355ef9f58db367ddbb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> urdf can get complex to look at so I will be putting a “_scratch”_ like equivalent next to each example I put down.

To start add these tags:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
**<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">



</robot>**
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSGGFJ5P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCICU0U%2FxYd2LqdIU7BMU1kiGtayQCyw796X5eqBs0liavAiB%2BgV%2BKRQwJdUUD8aqzdyd7qXqWGOkv7zdNgTufHZAHuir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMayDAAdmlPsxd5hpeKtwD9UJF%2BNQjotvZvqaHaascVBeOZIA9XCg0yIdhJVHGMeNgGGUkbg9iWZwMOBugIYjoQw4KXAoutW7LaG4z0R%2FhfPAo0ApkhxO4JBQ9gwaAZYQtcL36vz3Hi2xf3yUI%2F0ra7VQeN%2BYQppBeEqGHs9qSjksje3iP2R6n7xx70owy2c5YLER95t%2Bnob5axjr0KzMSvhqurMXBP4MRg0q9NFid%2BGTcZu0UKP43poiW8XIzlcZEbs1pPR3L1fsz3NDM19o%2BGdgtHuxeTkOMHANi4CBxxW2FULZGLFLneSQ9gkQEx%2BbTpR9ZxonOuLDjb93C3NpRDLSYnR1UM5RkBmJkuvaM5BsytJGqskN7x%2Fs3MpElIVZe7m0fdA9XyWQLF8FoLVCWskiHzyE2XWuTRujtcHQKLIZbVA1AKz8jU6oodeSph%2FJikRBv3X05VuuziXswl%2FZ1CpnAHgRy6%2FqrPLp9SfcnZFohCJR1dEuRiwiOUaIIkpxeuf5xkj9KIOqUZVSg8gwG%2FghFtVkKx0eVt7qBhhZW0AQ0Ab5l62f2we2MLZHhwoHqwys0r7b4u6XD%2FFNLbv9%2BxokfbLYXELnwOgW31nJbffVBQQT2ixFBiVaCDh%2Fz4ELFxnKdTVIeF56qYRIwlNv9xAY6pgH2CqzjLBzrEH3oGhn%2FcoJOLj9Ne5GMDw33snFW1gqOTJ37JPRqeWGNayrU%2B2T60LYmRWxpkhJPABTNiXIx%2F8taWVV3socAPvvIl2DUKtrVx2UnQM1CDrfd9yef5WiCR%2B9e5qvsXfqP6Nhnqgnhj251vT8lRP4fhGKp%2BpXSe02lixxNnYEh3NMVH%2Birp2pJCrbR4F0bZ5qQXd%2FtgEDLcER9MBUIVfjG&X-Amz-Signature=b339796f8ca5a1194cf1fccd5cbf09bd2ffc7e6e8a6dd6441cb0b1da1629c481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

All urdf files must start with these tags to be valid urdf. All of our code will go in between the `<robot>` tags 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676DGSWND%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDjq3w1zjM4IX8qBsJ%2BIbrXHaeKKX5F5YW53lHdNMsC7wIgEybOtYtuTo8gb0p8sCtKPlW7d1NGTMxJpRNgBzFJKeAq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDKcNre%2Fgma5FN%2BUCwircA9qdjNKJUd%2BmS7d7H%2B08rbeXidmG7UVToKWRCuKlkzFCuXjZPzxm%2Bq5FVzyKgtAF8lfhVtP%2FNNilvHRX0GAR1Gzlyzk1NSWmssXRRhX7onlSh4KQZsQuM6e5MT6b1%2BRAoIyrDeQ3XTyhQVMwhDLyyymLQKa1T5sSu%2F2Q3p85fxgd2j4bt5%2BJ4aXhwqg%2B2WpolICJZ6x6wLNgV4nHvmvWeT0pDlwBZgyEfBr6P9BSJMNWOcQenfkUqjGsU0K2QF4oFHfwhWTKdn6aMZ7qzW1FZgxGGc0BXWVNuDhImqdVfsrxurJAqT3%2BqRVS9BS7iIGe8f5V1x6quGGh0oWxPcgA1hx%2FovVw23%2BLDjX5q6TzNW3Ma7s2%2BfUIenTcS5dfEp1AE9qN%2BU5sNbVefOifU4DS8vHsN%2F%2FkBM6eJE0SC1hROeju9u6Og2LeWxIZy7wyw0FH4J9%2FEhAs%2B8eBpe0mBmZ6cSIrQv2xJVvw3v1Q8kw9L7cbcX6m1JDYgCtMyUSnbWH3snlE02TanfvAaZhufFl4072KlvFCIfB9%2BosgIeV1JYB4hFnVJT99q84Ah92jRI0Fb769FrXDsEuKtMmzZjgee3JwVwsvPoMBFusS18SLk%2BkLsE7ahXuPO8IEGGeyMMLa%2FcQGOqUB74NbusU9cxmqpnMGDE0O197EfXwNUTtD%2F0fNKpeo%2BwlozsJF55VGy3iKS3Qj3ufSfer5NQCViMvu3xuRZ3Qpvs6jtc3zNk%2FuYyM%2BKmT6nt%2FrbpfoNcR7YWAHN0BhCCDA4CMUxtxzq310qj3IPX0CktL2bgIEcv5BvyX61e6blUh9%2BuYsxAlddhxYx%2B5ZF65qXf5vpQeJsXsgfgLveh%2FchAZvGPm%2F&X-Amz-Signature=68e31f12eee30c81ce4ee02aabb65d3270ddd809ab364a88d4dbf9e4c6fe0024&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

You can think of these as **variables** but in the xacro language

<details>
      <summary>What do the variables represent?</summary>
      `base_width`, `base_length`, `base_height` are the dimensions of the main body of the robot.
  </details>

Lets now make a link for the body and call it `base_link` to be the “_root” of our robot._ This is common convention in ROS and is required to be called `base_link` for later parts in this guide

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FWJANGQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCpPgOY%2BbMA1qxgV2H5XTot5qJdPNxmCuw3k14t6VorbAIgecgc9MOa925xJfJPvQY%2B7fL99aFrXgPp1tgjADpeJJcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDN7X4XmE75kE76g5mSrcA8qoXSUqld8TCkvXsKPYSBvrwGoajUaOrKLP0p6cA03Nf8ODetb%2Fu5HnCwyo1FtbUVBd4OlXv%2Fsa7tKf2Hl5tC%2BRwReC9Bam%2BwonmtqBFPha5EdX5%2FE9mFuz4IRLCx26OlQc3UZ%2F0lyzSlzrlfvppqOF2Ln0dRrRz8hmHOm6pV66Mf0MRjM6IwnNTVDbOEaY55gZH2TXTNk%2BjGDmNnYTxsjfhDY5ABCRFD2IYeHhbVMmQZZQ%2F8upcZULxkV93SyRpvvuZ688xh2P1egE0E0JQb23oa1Qz%2FQMS9HAY2mwOTWRgQltcWitnJSwrhM2VXFY7zd5Wq%2FXGYWWDg36qAeuvKG10ElCfrHMWzrlUDXjUA%2BcBw64M8AnTh7NcbknhAMFyo8Eo%2FvsdHl0N6EsdO%2BybyGGVW%2F4kGpYLst4NSgEccLJU3o3G2lSYgL3igqfaHUmHVznJW7kF1cH%2FUU%2BLeAeYXgVAGTpEnTvgIxBsDZYusTC6r0qozgPVk4DLhsop2IqDnAOwQ%2Fkvwa22jN51yQMYyzg8Uwk6%2BztbIqW9OVayyjde65cMj2Rf%2BT4MMfcYfFqFYuRluKkCVdqNg9tIwG5OiUOTB5cJ3toVZN2IGx1Pfm0Mt1%2B4B2Yr%2FyIqn9IMNPa%2FcQGOqUBls1%2BN52AORQFZBFoHiA0YFdvRiQhnfHI2qh%2BJE%2BEgccAxCf7xGRBjxLi67t5ucYURgEBxVxq4IDR3HvDYbE8a%2FGx%2FGSVeXea62Bn%2BM7sizqS%2FWvHnPz1Y%2B%2Fe8mC0fnCWArJKrerHdPFiDFJ6nBdbtPM45i31JkzAAynfFExPPIwwVu2M0c4tDkou%2BjF2a6BUPbUMsSz61ukHDf5QwqO6W07ZW4zd&X-Amz-Signature=5e059cb0a68650549c7b81f15713289eae8b29bf705952a9734485d88c0826a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SZV2GOW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGt6G3fIaL5sgSdqhmBpV1xKwXuHYWjHIkGPsJK3DUJgAiAg3m0el1hl0emyyZ51i%2FsmJ1mpr6yM%2F8RK2%2Bhb6Y%2FL6Cr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMzBZNK7q1EAFqL09fKtwDAuzfX9CKExmmJFCh0b2wRn17y88B%2Bb%2Fhgu8bN5AUe7G04L54gLTyl%2BuXeb75aCFec52ubTl8UsXe82L1WcuTedPloOaS4MfBhZ26Gwt%2BgsXp%2BKeHDXUM1umTepEIWZZIF8avFozMgoD5BgJNDk1U9ki0Pn%2F%2BrNCI%2Ft7zz8IkqGBoXLZ%2Bq8uNRa%2FSRufB93Tjk0w100uzNJo8RC9mjzopHup6rI4AC5aGCTc34fdQLmbyioezfNjflAW4XZUVxu5SV%2B3lTcV3mRkIp0FYYw8aYwqzBNeunVquRgBI%2BC0aQqWI8YA0R91t12V2bhDX4cM6JtENU1P4%2Bynzp7fYs8lLZHkfklbugteTVk53xbo0m2zxor48UVuXtb%2FAcPV3BVy98Qh27pGYXuvXjTt01a60Yapzyut2smJGWK2Sgp8NMYdZ3Na5zNPJVenT5X3qaWTx18euxRw2PE1UT2zPOnXrieutzcf669qWfHyzWodYwxz67iOegJlKpuYwCd5ol%2FkvDRbQxilEUAdftAMPf%2BlB9bMShnMWM7jT0nBDLyFfXKT%2B53oILDAweVd549QHLp2AvcqIhF%2BU7tQuo%2FD3WQSTUbD0XW8wojy3JB%2B9p%2B7%2Fe%2Fo4HP5DU6qMRJF6KSkwr9r9xAY6pgGIAUEEpEl34dFV4tCiiPNTLA9x6C4%2F0GT%2Btq%2BspEcCQE4WkPkYqjz3HbljEO3LA6lycp2L5pD9kcKVqcPzw%2BQNqBME28wCXXcBgKa5btuT7SA9LGy7S%2BVF2U24eyn5KVVs2GBw3t9yXvjvskXRObyk0ACk1dUun4vdQEZFWbYsgEUEHl%2Brt5YmPjQWGQZscw8KPG67VsVMljgugIt7F5o1ZTbh6G8T&X-Amz-Signature=47f4b36a1a6e57e2bb98e774b53e0e59fae925c0fdc8680f710548d0bcde9623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

under `</link>` lets define a link called `base_footprint`. This link is just used for path finding to know where the robot is on a 2D map.

Later on in this guide we will see how it gets used.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQBFTJ6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDDabcjdOIz3RrTKxDd9rFzsQsk9zDDpaWXdwo4CltW%2FQIhANgslBHQhZ7w7XQ7POroYRtMWGm%2Bpnnwck5tUQkoHdYkKv8DCGIQABoMNjM3NDIzMTgzODA1IgyZVYFfQAF%2BvTulNJoq3AMufxWb6mLUDVBLdBURlnArFZrfSzzBm5VNr4ZTLD%2FbYNCaFpYYOU6bmGVCGBgthKYyWyp0agiRj1BeouNJeaguqEAIsV0cNOLi5Xd4qIVLHZiExDDYsVk%2Bd%2BgiNFLyhzCRDbLy59IYMTIgy0Cm5l2hN8DryGd025lN1Pzhbqshz2xcNhszGApXayCD2%2FK9vSpo2YxrZkIEOilJrKWJcIP5ueOToYgH3QvHxKGnD4%2FdX1IJ1Y9QULBmdlbenjCZ3j%2BvKVQdyCqtXa8KO9ye5sqjw7kC6DdhjiGjLJP27Z1ZyqqcgvBMxU1GC8RgFRC9xw82dLO6A0iSHVcj5R%2B03VFsCYzfX6CK6uMakPBg2PJZ1vdUuHbODvpgZs%2B0up%2FiMqylxkw3%2BkxP1deZgLCU4oqYpkEdND9ltV52ol2wlAyfN4izw8%2BZaf%2FZiKpXcrolem05GPR6OPVHQc%2Ft0NyLTk6luQgoYYyoZ56wtWMH3YedvGp0bwBNTyx8DhevWahTnyN4kGYnzcj9itd6dU%2FTaEcw6ZdiDDi2WrAJJwcC62AH2vucpy%2BHu%2BMMUpRXxWocuckLdApAb9azfFTK8Q44vU5aGb4aEdgJKvcZJDIiKOfg%2FuE3UYUxjaoQQyIoczC12v3EBjqkAVo5oZppsK07ZVURYEFrRpQI3NqzAVxzzV4xDUbahnyrPemR7O%2F4jKcmeH0rs%2B%2BtV0r79f6epSlaSzMDEtiCctuFZ9XYoXosvfsTCxG7bL8QNukRsagLnivgeRgdZz8Zb3IOczo5Fy0PjnUDMWUtpkAp5kf7AQnus%2B5yE77W%2FgtzBowIAFHxqstNpHIeS1NZNs3harwWzcyAx%2BDiflczhqcqeQrM&X-Amz-Signature=7aa12405429ae97574ae654bf7280fe475e21180cacf6f63937969be264ea69e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SZV2GOW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGt6G3fIaL5sgSdqhmBpV1xKwXuHYWjHIkGPsJK3DUJgAiAg3m0el1hl0emyyZ51i%2FsmJ1mpr6yM%2F8RK2%2Bhb6Y%2FL6Cr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMzBZNK7q1EAFqL09fKtwDAuzfX9CKExmmJFCh0b2wRn17y88B%2Bb%2Fhgu8bN5AUe7G04L54gLTyl%2BuXeb75aCFec52ubTl8UsXe82L1WcuTedPloOaS4MfBhZ26Gwt%2BgsXp%2BKeHDXUM1umTepEIWZZIF8avFozMgoD5BgJNDk1U9ki0Pn%2F%2BrNCI%2Ft7zz8IkqGBoXLZ%2Bq8uNRa%2FSRufB93Tjk0w100uzNJo8RC9mjzopHup6rI4AC5aGCTc34fdQLmbyioezfNjflAW4XZUVxu5SV%2B3lTcV3mRkIp0FYYw8aYwqzBNeunVquRgBI%2BC0aQqWI8YA0R91t12V2bhDX4cM6JtENU1P4%2Bynzp7fYs8lLZHkfklbugteTVk53xbo0m2zxor48UVuXtb%2FAcPV3BVy98Qh27pGYXuvXjTt01a60Yapzyut2smJGWK2Sgp8NMYdZ3Na5zNPJVenT5X3qaWTx18euxRw2PE1UT2zPOnXrieutzcf669qWfHyzWodYwxz67iOegJlKpuYwCd5ol%2FkvDRbQxilEUAdftAMPf%2BlB9bMShnMWM7jT0nBDLyFfXKT%2B53oILDAweVd549QHLp2AvcqIhF%2BU7tQuo%2FD3WQSTUbD0XW8wojy3JB%2B9p%2B7%2Fe%2Fo4HP5DU6qMRJF6KSkwr9r9xAY6pgGIAUEEpEl34dFV4tCiiPNTLA9x6C4%2F0GT%2Btq%2BspEcCQE4WkPkYqjz3HbljEO3LA6lycp2L5pD9kcKVqcPzw%2BQNqBME28wCXXcBgKa5btuT7SA9LGy7S%2BVF2U24eyn5KVVs2GBw3t9yXvjvskXRObyk0ACk1dUun4vdQEZFWbYsgEUEHl%2Brt5YmPjQWGQZscw8KPG67VsVMljgugIt7F5o1ZTbh6G8T&X-Amz-Signature=cdb91fe38ecd5c02cafc06e696362d8b6de48fca9978e7d8a31833f3f04963ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

under `</joint>` to add wheels lets use a `xacro:macro` (basically a xacro function) to avoid duplicate code. The macro will take 3 functions `prefix`, `x_reflect`, and `y_reflect` so we can flip the wheel on the x or y axis. We also make the joint continuous so the wheel can rotate freely.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AY2I5UP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDlNYUXh3kNgZ0SDBo8ZhXymfzyziQ98sv%2BeSJSF23xPwIgKI4N3GBj482%2F6YGYprnkueYL7gGvB8yfVuk2PujDy9sq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDNXZnkpcXAt%2FqWAl8CrcAxbrvMF29VSfFXbceHQmIzQ7KgJLD7iqhAVP2ZZuxM%2FEK6iIKyQkYKXnGZRnw%2BIdi0%2BmKD0DFWr1WS5y1ZsGLURKChTeUIvNmhdUcDO%2Fv15LqQGEg9HfFt%2Fw1kqGlFTmwgWpf1MTFwT9k1BYGmcIzgFE2iB%2FNw08IUC49zisucUnStfV%2F5eM1QT1NtfXPQ2I%2FnorlVRtkzEv%2BLxfwla3dOvtZ1LSehr7cytV%2BohFyCPPFepIpM%2FDNOXRHi8XDIiSxwm0QeHvR4M5VnXdqNWWZXPB1MN0JCFbdMuDjVlC2YbwOYIvrfa5uGPKVvIEzQAf6zfgn%2FTcT9JnhK8AQ%2FowPOZFYZN0TimNia%2BN7jdMcH0PxaykK7ea2rYW6f5i11ZA%2FapDVd6lhZqXf5cbf6ZB%2FZecDat7EBLGHRJzV9rEcTptN8MhiQggIi8BG8zzoJDWop%2B3lHLW7%2F13%2BcAXdJ1ISBduvG%2BdanipbMxPM9dLL4hLC1JEURcniyLG54LF8946YDuKHT21wju90gc0AR6Cdh%2F12uoyCGaQq0E8pX442bx1%2B%2FCSYtmtE1W1aWK9sJkDq35fKInjSx01BOzsoWix0kzqRhjtUU5j%2BYqaLobXsjp0C5rMG2OVyiWJiNgfMITb%2FcQGOqUBpFMfX4yY32c1gijeoI5nUa94tfKn8vAD8CycTWb9a%2B0UEdY%2BzdxMYAprXH795iT82fLH7G3ftz3N4hZ6TUpd9FM0qWT3vZ6Nd79vBsKflx0HFH5nAeazBTXNCJFtQ%2B%2FFRed0yZodq%2Bbfc%2BQWs6jqiGEberFU01pKza%2FQ5NTTDxNyrEAxCXg%2B%2Fd%2FXck3pVJatdb2sKKA55gNKPD35dGi4XU4wp3mz&X-Amz-Signature=999074d86ccc5895193cb25b37ff3c9a4c99caaaa48e08d798d1d45d7b407f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SZV2GOW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGt6G3fIaL5sgSdqhmBpV1xKwXuHYWjHIkGPsJK3DUJgAiAg3m0el1hl0emyyZ51i%2FsmJ1mpr6yM%2F8RK2%2Bhb6Y%2FL6Cr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMzBZNK7q1EAFqL09fKtwDAuzfX9CKExmmJFCh0b2wRn17y88B%2Bb%2Fhgu8bN5AUe7G04L54gLTyl%2BuXeb75aCFec52ubTl8UsXe82L1WcuTedPloOaS4MfBhZ26Gwt%2BgsXp%2BKeHDXUM1umTepEIWZZIF8avFozMgoD5BgJNDk1U9ki0Pn%2F%2BrNCI%2Ft7zz8IkqGBoXLZ%2Bq8uNRa%2FSRufB93Tjk0w100uzNJo8RC9mjzopHup6rI4AC5aGCTc34fdQLmbyioezfNjflAW4XZUVxu5SV%2B3lTcV3mRkIp0FYYw8aYwqzBNeunVquRgBI%2BC0aQqWI8YA0R91t12V2bhDX4cM6JtENU1P4%2Bynzp7fYs8lLZHkfklbugteTVk53xbo0m2zxor48UVuXtb%2FAcPV3BVy98Qh27pGYXuvXjTt01a60Yapzyut2smJGWK2Sgp8NMYdZ3Na5zNPJVenT5X3qaWTx18euxRw2PE1UT2zPOnXrieutzcf669qWfHyzWodYwxz67iOegJlKpuYwCd5ol%2FkvDRbQxilEUAdftAMPf%2BlB9bMShnMWM7jT0nBDLyFfXKT%2B53oILDAweVd549QHLp2AvcqIhF%2BU7tQuo%2FD3WQSTUbD0XW8wojy3JB%2B9p%2B7%2Fe%2Fo4HP5DU6qMRJF6KSkwr9r9xAY6pgGIAUEEpEl34dFV4tCiiPNTLA9x6C4%2F0GT%2Btq%2BspEcCQE4WkPkYqjz3HbljEO3LA6lycp2L5pD9kcKVqcPzw%2BQNqBME28wCXXcBgKa5btuT7SA9LGy7S%2BVF2U24eyn5KVVs2GBw3t9yXvjvskXRObyk0ACk1dUun4vdQEZFWbYsgEUEHl%2Brt5YmPjQWGQZscw8KPG67VsVMljgugIt7F5o1ZTbh6G8T&X-Amz-Signature=2277bcb26b62cfd4596aa92ca503df2a3778a33c3f77d108052918840ff1c8d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Under `xacro:wheel` lets add the caster wheel at the front of the robot. The robot up until now should look like the image below

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL3YWBR7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQD%2FilnJrp6Uk5MRO9PjHqHfuIbzbg0CAMLjQ3BneO3rwgIhAJJTJ%2Fx3NPSeFXcJq%2FCu058Wiw0HV80LoVJquPCMAFUhKv8DCGIQABoMNjM3NDIzMTgzODA1IgzKs4UC0rZMRwvHFNgq3AM0o12opzoaE102D5jUQbi23UYAOmg%2F1bTamh%2Baa7Ae8SZpifjE0s3oiVz%2FKVXabGgPzU%2BXS9AlzTVXMtzf158x4XdoaZmdIcsgqchses3QvISt1itkL%2BGPMITgr%2FujCfG%2BskBtnSfqUSxhfrEK9Je3NswKdyzkdf77WLBnmY1Vm%2Fgmzbvm7L5NAwdKX4wm37G6le79wAeUaQcNglaDcnG%2FrBlIP%2FjeO58mXNk7mvHSW2VsbbhkSbb0KFpMRON5u%2F0d4GSwCcTfvkigFJ6WePM3VljkxIQB0e2l3ctHUdw%2FftAGaDvG09UKCmXYSzB5Lq%2FkbdJ2k%2BYlUETScdDpVrOe6GcewxX1NjhOK%2BvmU%2FElSXmfqXL0cvEdmUxRtU4yVgi56mZw0LSGtYwexpMMuQ1Z0WjCqzzWutSMwPYY8PRfSxqvSVVngWuHZ01pfaLeW0gAy2NQ71GHCSgFdO3ih0AMFcjhEvfOecPSQ6dPUMbZjHYQDS8KC6FLz5QGAVrZryoOvCVF%2Bj6z6ChLodYnCBrI%2B%2BgLDY3R7hWO96OzVWe3tNQQNWUs0LaKiw8zGOu8FGBmIpWDBoZNuwUg9yFkc55FFGcHK5daWpLXBuHkIInFuhODdgoD43BS7etEJjDU2v3EBjqkAVtP8v%2BD3%2Bamg%2Bv%2Fbkw7szxhfDJKaYjQwLr%2FKBWLmqpKIQNjK3qA7CZZtmCJBp%2BL%2B%2BDg5aEO6I6fjxDt5uPNW0S468CBOr2rQBI4FhE0x3awJeQbMvJIuq7rRFE5UwSKLLnY7GNAdl47ajNjsqg3e9dCMkStChkq1ZWHWU9lAJLm%2B6KAFuFI1%2FKz0D2WQhw0hrgJPkgI0WOqV%2FlcbbG7tbMPMGmM&X-Amz-Signature=f83c5fbcc5359a56c9a765bf9b25ab10c12dbd71c4d4d425e5f6f2567181ebfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SZV2GOW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGt6G3fIaL5sgSdqhmBpV1xKwXuHYWjHIkGPsJK3DUJgAiAg3m0el1hl0emyyZ51i%2FsmJ1mpr6yM%2F8RK2%2Bhb6Y%2FL6Cr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMzBZNK7q1EAFqL09fKtwDAuzfX9CKExmmJFCh0b2wRn17y88B%2Bb%2Fhgu8bN5AUe7G04L54gLTyl%2BuXeb75aCFec52ubTl8UsXe82L1WcuTedPloOaS4MfBhZ26Gwt%2BgsXp%2BKeHDXUM1umTepEIWZZIF8avFozMgoD5BgJNDk1U9ki0Pn%2F%2BrNCI%2Ft7zz8IkqGBoXLZ%2Bq8uNRa%2FSRufB93Tjk0w100uzNJo8RC9mjzopHup6rI4AC5aGCTc34fdQLmbyioezfNjflAW4XZUVxu5SV%2B3lTcV3mRkIp0FYYw8aYwqzBNeunVquRgBI%2BC0aQqWI8YA0R91t12V2bhDX4cM6JtENU1P4%2Bynzp7fYs8lLZHkfklbugteTVk53xbo0m2zxor48UVuXtb%2FAcPV3BVy98Qh27pGYXuvXjTt01a60Yapzyut2smJGWK2Sgp8NMYdZ3Na5zNPJVenT5X3qaWTx18euxRw2PE1UT2zPOnXrieutzcf669qWfHyzWodYwxz67iOegJlKpuYwCd5ol%2FkvDRbQxilEUAdftAMPf%2BlB9bMShnMWM7jT0nBDLyFfXKT%2B53oILDAweVd549QHLp2AvcqIhF%2BU7tQuo%2FD3WQSTUbD0XW8wojy3JB%2B9p%2B7%2Fe%2Fo4HP5DU6qMRJF6KSkwr9r9xAY6pgGIAUEEpEl34dFV4tCiiPNTLA9x6C4%2F0GT%2Btq%2BspEcCQE4WkPkYqjz3HbljEO3LA6lycp2L5pD9kcKVqcPzw%2BQNqBME28wCXXcBgKa5btuT7SA9LGy7S%2BVF2U24eyn5KVVs2GBw3t9yXvjvskXRObyk0ACk1dUun4vdQEZFWbYsgEUEHl%2Brt5YmPjQWGQZscw8KPG67VsVMljgugIt7F5o1ZTbh6G8T&X-Amz-Signature=aae9c1e2705603a2964f2b04d2238ee370080db9ab02ffb231919060325b7555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWF6HSDL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDfTZcL42Io2JX17t3GaY2CZUtt%2BGGM%2F2CpAWKt%2Faq5hwIgPNt%2B3GR5j6XWwur8jzrsyj%2Fv%2BG0EAImpoFdVmgPU25Aq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDNDnWEAGVzswvptB3ircA9Gk4HXXadXOIIR8ceuagpJD0%2FFWs4p0d5Wq6n1L%2BRNSJbquf16IEJ4awR2Voz8OkLKa4dCMgi%2Fbi4qh1Q9pIsMy6gzyffrAzryKdDriEW%2B7P2pqLCg3Gs5y700tp7ganxUXJBd6Kjwf0Mj1r0pdgkR9eeA3H3mL1JSNUsxEMvXfFcrN1uiDnCOySiTjFDhKXeCa%2FZ3UXVyXhoPloeJ9U4krNNz7RfK81j2aJVrcIuf5u3JmOvIaVZmBbdrKrZkCQBivUEJZu%2BNh93Ith14aU%2BpXUoMcDDIyHmIGQTkn2MCDDt5RRod3gd3nwCJiri%2BKO8Y5Set8pg03tIjgcnoN2WhP%2FdnIfxA50K4jjnzCY5hB7OpDSW4k0gTrmHgrc8xCRvEPJ1D7EjEMjXYQZcsQhxGbl%2BIJgcHo2jDt5w%2BTsKf19gw1Fem9qVZ9Ep5hZFsiwpyWFg1ZsYVZZ0mQHfgsNd3oX7kn3JWaFdl7IZDx796KCoorXcSac4A2DDNsDDDJJPIeCCaeWymcqqclP5%2BOYxi2KFtThHOLxPnx%2FTyz6y7cdJ1eWUTHC329vZl8J%2FPXfZHAHPMTgEO%2FGUvoKQojO4RhvECu13YLc5N1eBgZ2ls7R6NLAhv9tC5fJayKMNja%2FcQGOqUBczuhyIxJak1gURPicMuJXvZsVQzUeT%2FeRl01sGb4GeKQxHPYtQ2wMWiVhKsK7Pgx9WQna0DB2HyCtCa5bdbeODKGkYO6yq4HloGivY70kTR%2FO9hdJ%2FUT9tHVB8IxqgjOSl1dqCWTactOp6NO2BX4KnOilr7AiWP9JKWNbn%2BNjipF4pC%2F5%2BnGfUhHkO5g4rETd0y6x5MB5rLB6f8Lhqfp5rmCRuuC&X-Amz-Signature=92a8033f61ff09a8e2c2f1f80178d2a1ff14a23612e7ceefc8c9cfa9f185cd4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>
  </details>

### Adding Collision and Inertia

Next lets add collision and inertia to our robot. These attributes will be used in the robot simulator later in this guide.

To start lets make some `xacro:macro` to avoid repetitive code to make box, cylinder, and sphere inertia.

Place this under the constants section.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q6VP7UU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCID4MSlKhwccpvfiE2%2Bu441xsMQn%2BqMu%2Bl9n1wpqXw9xVAiEAxuFA%2FcGzDr22iJrQLXE29XpmPKuWOkB6EM40kisJeL8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCaRYW7YihK5l%2FWJGSrcA0iTYde6F1nxD8Z%2B%2FRhepdyEls2y9w%2BCg2Dc%2BBrQZEEzy%2BXri%2Fqy8bjHK3Atx1Jl%2BX53EY6VMUTIT91F3ffjRF6xI3OLMxPOZy5TKRGCgKdY6UtmM7G6%2BRoE8jByL7AKuMoLRUUPW%2BHffWGG0Jh9JoakU7rij%2FwYO4F5hraC8Y%2FCYB%2BB1efuUy2BFglIjwOaH%2B8Y4jQA399K8Wm8MPwFfJFs6eEkR3uNSA5oq0Khqa5S081aCFQNlOToEbDyuIN%2BruzO7rpVTMOM4FakLTl%2FrYXSUBr1Lb0sVE9B7QWA60%2FfnZGgehdlp3fD5MhmOPaN4R%2FQ0ac%2Fx%2FPr1XlmjHsyGuQxAyUfsl0glaBocFGB0UhW4UaEIJpxnpAo0HHebbb7mNJYQtmpSYf5Tx0yf3pXKBiYttPrRFCKIMR9RT0oCRnWQV%2Bb2H3CPGMCMG6PXhsNbOi%2BpW3JEhtjpPRjwMB1%2BgGE4y6O4unUeapMbUQyuGmMJMj1Zn0Hu1YvSti7yObnt3sYvDCjaHIinSJfkiu1xubxnYT1FWwi%2BPBBLEXGiQJj6bXqmBKuJ5U%2FvaYth6nPckSevlWX7Qe1qS4hWD7MqHjVPpyo4LI21SUw1BGtRtb60b%2FB7bUvppZbHaY8MPra%2FcQGOqUBSElxKHB%2F0t3Pb0dRDA5Q%2F6lWVIMJyB5Ll6TX%2FXymUBnV%2Bsek8oeo0Uv%2BIM4WkHItxJi1Ffoep7fmU8Fn6tTx8IygtTeqVFsUjAcHtzMA3lnB3pjIcvkO%2FX5y2TF92kjSAUw8RBWMubb5vk01RETgSG8KK7cm4G00ZTsd%2BWLtsj3fCATHBZ4Rd%2BXcyZy83T4H7mwFFpe%2BFITc9%2BeL1Czt3n3HMMwC&X-Amz-Signature=7c289e56cfa7f211a9da941f68107c286cfdf5ee038b77b1b7508301bd2d4163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

Next go into our `base_link` and add the collision and inertia tags.

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

Same for our wheels:

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO7URB5O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDYTv8Ak2eESDLSilfi7DNhrFinUWXDsFqgUkeCLJakLwIgHA31UBb8UlSvRM0d0S0qbTEh4Z6xPTHwiCwi0cyRHtwq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDByZX08V762sV%2FWsGCrcA78pZ8KJmRWPw8DyHLhIqBOifBV%2BTL0oeBmEO74TjMLo1k15DHDQcKbhjK%2FPxUqnJs75TfoczchTDDvWGN0H1pNyA4cMtODUP2ZZZn2zhmAPk4Pbg8rL4LE8lm%2FxZGLTeioSTgonYc%2F87hct6fzJf0TRLQjBtQEHzD%2Fb5LWxSGGMFKc0mla1Edz5XtQPZfVhxHb377zz5n67%2BnoXcXo23%2FM4DH50lle0ud%2FhBXtcQ6%2BIdz9OkYyFRhQJmgjtFwqK%2BFb7zY%2BSRCOwkiuM07YC28%2F7oQh5K7ZDGWgy2Q2lm3uPMtdjO%2Fnrp4cwI3NtQIaUtI8ZOFyLe2yoMuqKx8EUYPylMMZ5JgkD6poN1IvJEGtu3UtT6Szu4WbgbW8iUp5%2FSVNPNYuBkFxL9NMTe8trrZ3fiOpOrb8W8FRQgVOMVBCAj8IUkoqDZGtrgoVo2A6UokaVTa7h5umGwjETztSa0QpnoLN87P%2FswaQIeUtpOuxxoVkwW8YpkmH92VdGLHMGUlaaE61BSjAAUJ8F3Gvt26LwbKspPrHQgTSDzs9n20Kjl1thE6ArrUT1F59%2BvR0cgDyri4wFsfu2X%2BYQp5fOIB%2B6QavDjIcqo3snFJtZe9hnk%2BR96ckWctf5AXU1MMHa%2FcQGOqUBv%2FP8tj3m%2ByI9SZtRutbzc8aYJjYOVwSO4ZOu4k8rd7i3AFSg9%2FY8UPAWQ94v9WP2WcAFHxpt2gC8TD6C3ZRtK5cmYqUAH6ZdU4z8VeHX1YX7%2F1LBBCKlOJx6AcUCIS4W%2B6laivRZALfh0yVbeYQz4VzNfPjUCE5emZU9gelNtWwTWhD6vDxM9PsFiWZN6BSAmAk74CGsgubCrW1N0TLKK6oxLYta&X-Amz-Signature=3cd98afbecd7b467c7b89520cccb84cf57f3aff223945000b4e148539476fb36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SH42MAO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQD2Q%2BgBRNLUv1F1gw2a3NAgi0h3pE%2FeBcI3seR1PymaugIhAMZtDfB%2FJhC06yI1ug6q2RXxq4NGTJA8rIEZBjUmtrxUKv8DCGIQABoMNjM3NDIzMTgzODA1IgyeJbmLZYN%2FZrWNWJsq3AOiJdopIg%2B0uFOk4Ce%2FxeRCIe3q2LpbGF%2Fh1Wvk3MPX7HEJigVvKAQ2y%2BLqHlyGVPo03F%2BiorC6kq2TjGGz3tQT9YfcF%2FQeNTtvQgakODOMbJ9ieDGrJEq99czK3up%2FKiM0OZECvHY%2BZyTnJ%2FLe9jlpGa6c%2FXuuA3QtGZtxDGt90kCFq5ea5iWVl5CZSJLPjhlY6MIqZbE1U37XOHbnMHGbGC2bos7ylmLxCefVuHU7Kx3lg1fMO6wGc9Z8uSdqYkJLBP6uu1LYSr91J1Maop2WbtkMPX0ozRQ4N%2B4DN3h34jKeS7tpltajIdjVlRjJnWBhcBxhymPZ7j%2BTv2CHFLGX7j%2FTjc4soPvPQGdPlop%2FtX1EHmZ4qT7Vcm4EQqjhtdyT94PVITDPONmqfWL%2BmrSZ9%2BvWGSCE2dKlxS2jXDoxfVW5wnfjVTpEVh%2FbyvF3M0Zcv4sfM4U8NCPu9ZapacMKyHkUx6COaSTd6V18xnzrVhV4DrZ5ZKJu%2FQTAq4Cm7Y%2ByGtOiEdMo6DYDn8qwitAUAWlzuhqz4xaatrX%2FmToAxWGMJGUdzhKu1O9bWBBLP5%2F94nsRoqqNNFuvB410msB2IWLOg7LpaudIr5UUsdOoZ0YnNbmrPtKRNsZWozC12%2F3EBjqkAQuzRzWD2FvlRP0HuSSwPaWcboQdl4LybGS%2BwEruphRzCc5sXI5wJIoxCbiB8uuJQvhhQD5hkgz22lRW93ItYfBqxGZyy1BSEeG9Hr7JGkyZyayPXaKlOuaiHl%2BzQ7P0DjZ%2Fuli2t02FFa53GtuIIjxsE27aEMDrB%2Bh%2FFYXNarW%2Be3SPHa1zfBCEtITTLdvux5CE2tqxvIFIscAZMSwHu1JeREPY&X-Amz-Signature=030878911c7ef4594e0f9a843b8cf23152f55cb13f958c0753c014c6c598abef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

and Same for the caster wheel:

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP56YWXO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFJh5jgPYWp4EToH3rGECWEPdFxC8EzX%2FyFDGof7f4aAAiEA5pHbQkTiQ8XUv85hJ%2FF3V2fMIyLZqU3G0ZgA18Ny%2FNsq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDAqy2o%2BZfxXbD8YOBCrcA7qIAL1YjmoTwdQi6tbO39ZhUTkSr1Y1%2BaniQRh6nMlErNwYOfV0gLEkGUvo34LBJR6tLUA%2BiLBr%2F59F2NBfVzZG4%2Fb8n%2FozvfIuDagkK29SBNZHDbbfDsXVvoUxxT6Mkl7jD8J1nC88OjUNpEPvoReq5KyXk2PK5lwNvqKCYYWoNFP1ThzGpmzRfgSqemzqtFb9pITsTYIjqBr6bZ2hqiC8x%2FrPU0Kjmj9K%2FUQ7gRqqmu16LtSrbb%2BK3YLflbJYWekPou3oweKLn9jEauX16gFWoTRchsbTyC4d9CGoVQ%2BTmJ%2FQRe%2FRfOWKW1%2BspKtO8IgBZuq%2FGOJ1aym4RsJ6iAZmHf7jGzyObY%2Be13gqBrbPFLiGnRsufosc4WbXUPxLsfLzpsZa9NNg5WcQcpAGvMu5NygDMbQqeD4OaikvUWTurPu6IyqM7cP6DLMreeatpH9SVRw1VejkUVh6TERJ3qI%2FLRi%2FYFDRyykCKMmeT352Ssnm9H3XlTq01Zwq6PgkYDJyaO0FjjoFz3hezDShZ9OEOeIxx2x77MtkSLSgc8tuyrbroD2Y12EgAnSl%2Fem1ILvkyq17ESJ%2BYFU%2BiJ7iVPg4js8Q0V6%2BrpgwDdj%2BM5zfiF2c1BV8sHkKMxNqMLjb%2FcQGOqUB9Fon98BjWXrsTDU4%2Bybhkhm8HINLc2YANquo018Bf6WNXIDwAPZjNOkT02WW6wqd%2BEe85e7XP2rRt9BJBniyQMWDVppP%2FcCC6lXsGaNvweJt41tDaboTuSDGQ%2FyagEAyyDvmfgz3dG73sQt2%2Fp2Q23hWld2IO1lcDnDzYkbyq37cxQVq8a7YIHCh5cztomdkMy2wL6eRi%2Btf4pNrnIMpxACEjCR7&X-Amz-Signature=4759156390e35f9d0b2b361ac125f61114d7176a9fb27614f994de2c3a05ded4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SZV2GOW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGt6G3fIaL5sgSdqhmBpV1xKwXuHYWjHIkGPsJK3DUJgAiAg3m0el1hl0emyyZ51i%2FsmJ1mpr6yM%2F8RK2%2Bhb6Y%2FL6Cr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMzBZNK7q1EAFqL09fKtwDAuzfX9CKExmmJFCh0b2wRn17y88B%2Bb%2Fhgu8bN5AUe7G04L54gLTyl%2BuXeb75aCFec52ubTl8UsXe82L1WcuTedPloOaS4MfBhZ26Gwt%2BgsXp%2BKeHDXUM1umTepEIWZZIF8avFozMgoD5BgJNDk1U9ki0Pn%2F%2BrNCI%2Ft7zz8IkqGBoXLZ%2Bq8uNRa%2FSRufB93Tjk0w100uzNJo8RC9mjzopHup6rI4AC5aGCTc34fdQLmbyioezfNjflAW4XZUVxu5SV%2B3lTcV3mRkIp0FYYw8aYwqzBNeunVquRgBI%2BC0aQqWI8YA0R91t12V2bhDX4cM6JtENU1P4%2Bynzp7fYs8lLZHkfklbugteTVk53xbo0m2zxor48UVuXtb%2FAcPV3BVy98Qh27pGYXuvXjTt01a60Yapzyut2smJGWK2Sgp8NMYdZ3Na5zNPJVenT5X3qaWTx18euxRw2PE1UT2zPOnXrieutzcf669qWfHyzWodYwxz67iOegJlKpuYwCd5ol%2FkvDRbQxilEUAdftAMPf%2BlB9bMShnMWM7jT0nBDLyFfXKT%2B53oILDAweVd549QHLp2AvcqIhF%2BU7tQuo%2FD3WQSTUbD0XW8wojy3JB%2B9p%2B7%2Fe%2Fo4HP5DU6qMRJF6KSkwr9r9xAY6pgGIAUEEpEl34dFV4tCiiPNTLA9x6C4%2F0GT%2Btq%2BspEcCQE4WkPkYqjz3HbljEO3LA6lycp2L5pD9kcKVqcPzw%2BQNqBME28wCXXcBgKa5btuT7SA9LGy7S%2BVF2U24eyn5KVVs2GBw3t9yXvjvskXRObyk0ACk1dUun4vdQEZFWbYsgEUEHl%2Brt5YmPjQWGQZscw8KPG67VsVMljgugIt7F5o1ZTbh6G8T&X-Amz-Signature=37aabf7f9071a5d2b24b61842507478ad264a283ac38a065748b4c4b31981619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>final code:</summary>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SZV2GOW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGt6G3fIaL5sgSdqhmBpV1xKwXuHYWjHIkGPsJK3DUJgAiAg3m0el1hl0emyyZ51i%2FsmJ1mpr6yM%2F8RK2%2Bhb6Y%2FL6Cr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMzBZNK7q1EAFqL09fKtwDAuzfX9CKExmmJFCh0b2wRn17y88B%2Bb%2Fhgu8bN5AUe7G04L54gLTyl%2BuXeb75aCFec52ubTl8UsXe82L1WcuTedPloOaS4MfBhZ26Gwt%2BgsXp%2BKeHDXUM1umTepEIWZZIF8avFozMgoD5BgJNDk1U9ki0Pn%2F%2BrNCI%2Ft7zz8IkqGBoXLZ%2Bq8uNRa%2FSRufB93Tjk0w100uzNJo8RC9mjzopHup6rI4AC5aGCTc34fdQLmbyioezfNjflAW4XZUVxu5SV%2B3lTcV3mRkIp0FYYw8aYwqzBNeunVquRgBI%2BC0aQqWI8YA0R91t12V2bhDX4cM6JtENU1P4%2Bynzp7fYs8lLZHkfklbugteTVk53xbo0m2zxor48UVuXtb%2FAcPV3BVy98Qh27pGYXuvXjTt01a60Yapzyut2smJGWK2Sgp8NMYdZ3Na5zNPJVenT5X3qaWTx18euxRw2PE1UT2zPOnXrieutzcf669qWfHyzWodYwxz67iOegJlKpuYwCd5ol%2FkvDRbQxilEUAdftAMPf%2BlB9bMShnMWM7jT0nBDLyFfXKT%2B53oILDAweVd549QHLp2AvcqIhF%2BU7tQuo%2FD3WQSTUbD0XW8wojy3JB%2B9p%2B7%2Fe%2Fo4HP5DU6qMRJF6KSkwr9r9xAY6pgGIAUEEpEl34dFV4tCiiPNTLA9x6C4%2F0GT%2Btq%2BspEcCQE4WkPkYqjz3HbljEO3LA6lycp2L5pD9kcKVqcPzw%2BQNqBME28wCXXcBgKa5btuT7SA9LGy7S%2BVF2U24eyn5KVVs2GBw3t9yXvjvskXRObyk0ACk1dUun4vdQEZFWbYsgEUEHl%2Brt5YmPjQWGQZscw8KPG67VsVMljgugIt7F5o1ZTbh6G8T&X-Amz-Signature=0365ee6e733218fe651faf742fbaf5a44fadc7f839cd2cf57b0dbafc57aeb391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FHWCVWQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIEehn7%2FEcMwooL4min9I79wQUlPOcp9qnyxjN%2BkIzDOzAiAShqMSlw0ILtgNKJeUU33nXTzyp%2FwfawmZPCXd24xxpir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM9yaugzUsw29u8L1aKtwDhh1%2Fo1jebAnTXqvNOxyCo5akVphWo5XirD6c8VBt03gs%2BkMgNB1%2BQ8%2FbZQkDXgckmmW1CwQA6oG25yk%2BbB5oFqSOOP0Gxm6p3Ukvqx4qqBI2GRdFQOXHqGBN7kcAYj%2BTpewx2yJjjEsA81W1s3ebU0xe9YuA5gyghh8DqqCNwP4FZjRMSWmx1pAoLUMpreRpiR3WX7XfefJ8WxAHE%2BW2HdC%2FChdyV%2F%2BHoW1SAI6bPzo04ebyHXYdR4T4%2BuHS%2F2XbTLDIEqGj%2F5ZYjf%2FADFF0q3Cc7JS%2BALG%2FMTqJ%2FTGafq9ZLAX2tzAraoPxOsqfRItfAYzP1LI5FLZDr60x%2F%2BFHH9Qq8PPb9wvt8l39VuCr2nK2CSwPX3KApCIlRkiOHKaQ08MGtQm%2FgqjpViUkOAl4Fm7FetYnBy%2FtkEkcQ3hv%2FXx%2Fyvbn8Uxg7itSkskkT4tey3bV3DPOkNeniBGi87iCCBmKQMJhHYyLGQFpOO336jVwUhZyaf6K2PfjZMKfTtzWpBtusZFW14%2BJsNk6JFBLPDLtPjz%2Fbci%2BfGeHHf3aknMCZyCmAytI37LXclFUruaUvyhFNhj0qK6wt2k7zQvP1MAgUnT6lz9ERnT%2FmWCHeB%2FUkTn6U8TA0AJtRh0wlNv9xAY6pgG9XIJQ37TooArqEthpIXfBJo6WhzyP1PmUg3krv%2B3ymNr4SSVmYsb8%2FWyoXlALi%2BetfzB8FimxO8uPZnurj90sFgPdp4mEO6LpLgS3%2F3QYXznVWSO0FHYNmSXqO%2BQhY6iX3%2FbEA1rOeX88e1qlcUpE5Wz9Ejr4inQnaejXxdIR3lJhplURSX4oLAfx5TI6FAk7VHJPfPeFrXEYs0CJhthIls0hI9jC&X-Amz-Signature=a999e7a53da7a7e38e4a079af7287b0c608dc592d9584f59864792354e3a2bb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FHWCVWQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIEehn7%2FEcMwooL4min9I79wQUlPOcp9qnyxjN%2BkIzDOzAiAShqMSlw0ILtgNKJeUU33nXTzyp%2FwfawmZPCXd24xxpir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM9yaugzUsw29u8L1aKtwDhh1%2Fo1jebAnTXqvNOxyCo5akVphWo5XirD6c8VBt03gs%2BkMgNB1%2BQ8%2FbZQkDXgckmmW1CwQA6oG25yk%2BbB5oFqSOOP0Gxm6p3Ukvqx4qqBI2GRdFQOXHqGBN7kcAYj%2BTpewx2yJjjEsA81W1s3ebU0xe9YuA5gyghh8DqqCNwP4FZjRMSWmx1pAoLUMpreRpiR3WX7XfefJ8WxAHE%2BW2HdC%2FChdyV%2F%2BHoW1SAI6bPzo04ebyHXYdR4T4%2BuHS%2F2XbTLDIEqGj%2F5ZYjf%2FADFF0q3Cc7JS%2BALG%2FMTqJ%2FTGafq9ZLAX2tzAraoPxOsqfRItfAYzP1LI5FLZDr60x%2F%2BFHH9Qq8PPb9wvt8l39VuCr2nK2CSwPX3KApCIlRkiOHKaQ08MGtQm%2FgqjpViUkOAl4Fm7FetYnBy%2FtkEkcQ3hv%2FXx%2Fyvbn8Uxg7itSkskkT4tey3bV3DPOkNeniBGi87iCCBmKQMJhHYyLGQFpOO336jVwUhZyaf6K2PfjZMKfTtzWpBtusZFW14%2BJsNk6JFBLPDLtPjz%2Fbci%2BfGeHHf3aknMCZyCmAytI37LXclFUruaUvyhFNhj0qK6wt2k7zQvP1MAgUnT6lz9ERnT%2FmWCHeB%2FUkTn6U8TA0AJtRh0wlNv9xAY6pgG9XIJQ37TooArqEthpIXfBJo6WhzyP1PmUg3krv%2B3ymNr4SSVmYsb8%2FWyoXlALi%2BetfzB8FimxO8uPZnurj90sFgPdp4mEO6LpLgS3%2F3QYXznVWSO0FHYNmSXqO%2BQhY6iX3%2FbEA1rOeX88e1qlcUpE5Wz9Ejr4inQnaejXxdIR3lJhplURSX4oLAfx5TI6FAk7VHJPfPeFrXEYs0CJhthIls0hI9jC&X-Amz-Signature=480107439ee6a056f4b5ae01f55df78f40888f1c2e46d04ccda9af27bbc88d71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FHWCVWQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIEehn7%2FEcMwooL4min9I79wQUlPOcp9qnyxjN%2BkIzDOzAiAShqMSlw0ILtgNKJeUU33nXTzyp%2FwfawmZPCXd24xxpir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM9yaugzUsw29u8L1aKtwDhh1%2Fo1jebAnTXqvNOxyCo5akVphWo5XirD6c8VBt03gs%2BkMgNB1%2BQ8%2FbZQkDXgckmmW1CwQA6oG25yk%2BbB5oFqSOOP0Gxm6p3Ukvqx4qqBI2GRdFQOXHqGBN7kcAYj%2BTpewx2yJjjEsA81W1s3ebU0xe9YuA5gyghh8DqqCNwP4FZjRMSWmx1pAoLUMpreRpiR3WX7XfefJ8WxAHE%2BW2HdC%2FChdyV%2F%2BHoW1SAI6bPzo04ebyHXYdR4T4%2BuHS%2F2XbTLDIEqGj%2F5ZYjf%2FADFF0q3Cc7JS%2BALG%2FMTqJ%2FTGafq9ZLAX2tzAraoPxOsqfRItfAYzP1LI5FLZDr60x%2F%2BFHH9Qq8PPb9wvt8l39VuCr2nK2CSwPX3KApCIlRkiOHKaQ08MGtQm%2FgqjpViUkOAl4Fm7FetYnBy%2FtkEkcQ3hv%2FXx%2Fyvbn8Uxg7itSkskkT4tey3bV3DPOkNeniBGi87iCCBmKQMJhHYyLGQFpOO336jVwUhZyaf6K2PfjZMKfTtzWpBtusZFW14%2BJsNk6JFBLPDLtPjz%2Fbci%2BfGeHHf3aknMCZyCmAytI37LXclFUruaUvyhFNhj0qK6wt2k7zQvP1MAgUnT6lz9ERnT%2FmWCHeB%2FUkTn6U8TA0AJtRh0wlNv9xAY6pgG9XIJQ37TooArqEthpIXfBJo6WhzyP1PmUg3krv%2B3ymNr4SSVmYsb8%2FWyoXlALi%2BetfzB8FimxO8uPZnurj90sFgPdp4mEO6LpLgS3%2F3QYXznVWSO0FHYNmSXqO%2BQhY6iX3%2FbEA1rOeX88e1qlcUpE5Wz9Ejr4inQnaejXxdIR3lJhplURSX4oLAfx5TI6FAk7VHJPfPeFrXEYs0CJhthIls0hI9jC&X-Amz-Signature=cee59861817333e906bb8ed2c935bf9d5fa9e8c88cfd3b6f8d312239afcf4a61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FHWCVWQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIEehn7%2FEcMwooL4min9I79wQUlPOcp9qnyxjN%2BkIzDOzAiAShqMSlw0ILtgNKJeUU33nXTzyp%2FwfawmZPCXd24xxpir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM9yaugzUsw29u8L1aKtwDhh1%2Fo1jebAnTXqvNOxyCo5akVphWo5XirD6c8VBt03gs%2BkMgNB1%2BQ8%2FbZQkDXgckmmW1CwQA6oG25yk%2BbB5oFqSOOP0Gxm6p3Ukvqx4qqBI2GRdFQOXHqGBN7kcAYj%2BTpewx2yJjjEsA81W1s3ebU0xe9YuA5gyghh8DqqCNwP4FZjRMSWmx1pAoLUMpreRpiR3WX7XfefJ8WxAHE%2BW2HdC%2FChdyV%2F%2BHoW1SAI6bPzo04ebyHXYdR4T4%2BuHS%2F2XbTLDIEqGj%2F5ZYjf%2FADFF0q3Cc7JS%2BALG%2FMTqJ%2FTGafq9ZLAX2tzAraoPxOsqfRItfAYzP1LI5FLZDr60x%2F%2BFHH9Qq8PPb9wvt8l39VuCr2nK2CSwPX3KApCIlRkiOHKaQ08MGtQm%2FgqjpViUkOAl4Fm7FetYnBy%2FtkEkcQ3hv%2FXx%2Fyvbn8Uxg7itSkskkT4tey3bV3DPOkNeniBGi87iCCBmKQMJhHYyLGQFpOO336jVwUhZyaf6K2PfjZMKfTtzWpBtusZFW14%2BJsNk6JFBLPDLtPjz%2Fbci%2BfGeHHf3aknMCZyCmAytI37LXclFUruaUvyhFNhj0qK6wt2k7zQvP1MAgUnT6lz9ERnT%2FmWCHeB%2FUkTn6U8TA0AJtRh0wlNv9xAY6pgG9XIJQ37TooArqEthpIXfBJo6WhzyP1PmUg3krv%2B3ymNr4SSVmYsb8%2FWyoXlALi%2BetfzB8FimxO8uPZnurj90sFgPdp4mEO6LpLgS3%2F3QYXznVWSO0FHYNmSXqO%2BQhY6iX3%2FbEA1rOeX88e1qlcUpE5Wz9Ejr4inQnaejXxdIR3lJhplURSX4oLAfx5TI6FAk7VHJPfPeFrXEYs0CJhthIls0hI9jC&X-Amz-Signature=9f227a7ec32fb2a3263f5816177931f3d7383b42bb793cbc06f3c2407b6b7df9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FHWCVWQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIEehn7%2FEcMwooL4min9I79wQUlPOcp9qnyxjN%2BkIzDOzAiAShqMSlw0ILtgNKJeUU33nXTzyp%2FwfawmZPCXd24xxpir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM9yaugzUsw29u8L1aKtwDhh1%2Fo1jebAnTXqvNOxyCo5akVphWo5XirD6c8VBt03gs%2BkMgNB1%2BQ8%2FbZQkDXgckmmW1CwQA6oG25yk%2BbB5oFqSOOP0Gxm6p3Ukvqx4qqBI2GRdFQOXHqGBN7kcAYj%2BTpewx2yJjjEsA81W1s3ebU0xe9YuA5gyghh8DqqCNwP4FZjRMSWmx1pAoLUMpreRpiR3WX7XfefJ8WxAHE%2BW2HdC%2FChdyV%2F%2BHoW1SAI6bPzo04ebyHXYdR4T4%2BuHS%2F2XbTLDIEqGj%2F5ZYjf%2FADFF0q3Cc7JS%2BALG%2FMTqJ%2FTGafq9ZLAX2tzAraoPxOsqfRItfAYzP1LI5FLZDr60x%2F%2BFHH9Qq8PPb9wvt8l39VuCr2nK2CSwPX3KApCIlRkiOHKaQ08MGtQm%2FgqjpViUkOAl4Fm7FetYnBy%2FtkEkcQ3hv%2FXx%2Fyvbn8Uxg7itSkskkT4tey3bV3DPOkNeniBGi87iCCBmKQMJhHYyLGQFpOO336jVwUhZyaf6K2PfjZMKfTtzWpBtusZFW14%2BJsNk6JFBLPDLtPjz%2Fbci%2BfGeHHf3aknMCZyCmAytI37LXclFUruaUvyhFNhj0qK6wt2k7zQvP1MAgUnT6lz9ERnT%2FmWCHeB%2FUkTn6U8TA0AJtRh0wlNv9xAY6pgG9XIJQ37TooArqEthpIXfBJo6WhzyP1PmUg3krv%2B3ymNr4SSVmYsb8%2FWyoXlALi%2BetfzB8FimxO8uPZnurj90sFgPdp4mEO6LpLgS3%2F3QYXznVWSO0FHYNmSXqO%2BQhY6iX3%2FbEA1rOeX88e1qlcUpE5Wz9Ejr4inQnaejXxdIR3lJhplURSX4oLAfx5TI6FAk7VHJPfPeFrXEYs0CJhthIls0hI9jC&X-Amz-Signature=b0002a20ce08c65f8662a4212bd00553b5d0b8bb4f621f47a6f8019e53e418a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Move config.rviz

<details>
      <summary>What is rviz?</summary>
      TODO: explain rviz better (say how it is like ros2 echo but visual)
  </details>

create `rviz` folder in `mbot_pkg` and move the `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FHWCVWQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIEehn7%2FEcMwooL4min9I79wQUlPOcp9qnyxjN%2BkIzDOzAiAShqMSlw0ILtgNKJeUU33nXTzyp%2FwfawmZPCXd24xxpir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM9yaugzUsw29u8L1aKtwDhh1%2Fo1jebAnTXqvNOxyCo5akVphWo5XirD6c8VBt03gs%2BkMgNB1%2BQ8%2FbZQkDXgckmmW1CwQA6oG25yk%2BbB5oFqSOOP0Gxm6p3Ukvqx4qqBI2GRdFQOXHqGBN7kcAYj%2BTpewx2yJjjEsA81W1s3ebU0xe9YuA5gyghh8DqqCNwP4FZjRMSWmx1pAoLUMpreRpiR3WX7XfefJ8WxAHE%2BW2HdC%2FChdyV%2F%2BHoW1SAI6bPzo04ebyHXYdR4T4%2BuHS%2F2XbTLDIEqGj%2F5ZYjf%2FADFF0q3Cc7JS%2BALG%2FMTqJ%2FTGafq9ZLAX2tzAraoPxOsqfRItfAYzP1LI5FLZDr60x%2F%2BFHH9Qq8PPb9wvt8l39VuCr2nK2CSwPX3KApCIlRkiOHKaQ08MGtQm%2FgqjpViUkOAl4Fm7FetYnBy%2FtkEkcQ3hv%2FXx%2Fyvbn8Uxg7itSkskkT4tey3bV3DPOkNeniBGi87iCCBmKQMJhHYyLGQFpOO336jVwUhZyaf6K2PfjZMKfTtzWpBtusZFW14%2BJsNk6JFBLPDLtPjz%2Fbci%2BfGeHHf3aknMCZyCmAytI37LXclFUruaUvyhFNhj0qK6wt2k7zQvP1MAgUnT6lz9ERnT%2FmWCHeB%2FUkTn6U8TA0AJtRh0wlNv9xAY6pgG9XIJQ37TooArqEthpIXfBJo6WhzyP1PmUg3krv%2B3ymNr4SSVmYsb8%2FWyoXlALi%2BetfzB8FimxO8uPZnurj90sFgPdp4mEO6LpLgS3%2F3QYXznVWSO0FHYNmSXqO%2BQhY6iX3%2FbEA1rOeX88e1qlcUpE5Wz9Ejr4inQnaejXxdIR3lJhplURSX4oLAfx5TI6FAk7VHJPfPeFrXEYs0CJhthIls0hI9jC&X-Amz-Signature=7d0844259b1e54d961f58dc30b9fd9810b1dbbf82628703f5e36fd2afc16bd53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FHWCVWQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIEehn7%2FEcMwooL4min9I79wQUlPOcp9qnyxjN%2BkIzDOzAiAShqMSlw0ILtgNKJeUU33nXTzyp%2FwfawmZPCXd24xxpir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM9yaugzUsw29u8L1aKtwDhh1%2Fo1jebAnTXqvNOxyCo5akVphWo5XirD6c8VBt03gs%2BkMgNB1%2BQ8%2FbZQkDXgckmmW1CwQA6oG25yk%2BbB5oFqSOOP0Gxm6p3Ukvqx4qqBI2GRdFQOXHqGBN7kcAYj%2BTpewx2yJjjEsA81W1s3ebU0xe9YuA5gyghh8DqqCNwP4FZjRMSWmx1pAoLUMpreRpiR3WX7XfefJ8WxAHE%2BW2HdC%2FChdyV%2F%2BHoW1SAI6bPzo04ebyHXYdR4T4%2BuHS%2F2XbTLDIEqGj%2F5ZYjf%2FADFF0q3Cc7JS%2BALG%2FMTqJ%2FTGafq9ZLAX2tzAraoPxOsqfRItfAYzP1LI5FLZDr60x%2F%2BFHH9Qq8PPb9wvt8l39VuCr2nK2CSwPX3KApCIlRkiOHKaQ08MGtQm%2FgqjpViUkOAl4Fm7FetYnBy%2FtkEkcQ3hv%2FXx%2Fyvbn8Uxg7itSkskkT4tey3bV3DPOkNeniBGi87iCCBmKQMJhHYyLGQFpOO336jVwUhZyaf6K2PfjZMKfTtzWpBtusZFW14%2BJsNk6JFBLPDLtPjz%2Fbci%2BfGeHHf3aknMCZyCmAytI37LXclFUruaUvyhFNhj0qK6wt2k7zQvP1MAgUnT6lz9ERnT%2FmWCHeB%2FUkTn6U8TA0AJtRh0wlNv9xAY6pgG9XIJQ37TooArqEthpIXfBJo6WhzyP1PmUg3krv%2B3ymNr4SSVmYsb8%2FWyoXlALi%2BetfzB8FimxO8uPZnurj90sFgPdp4mEO6LpLgS3%2F3QYXznVWSO0FHYNmSXqO%2BQhY6iX3%2FbEA1rOeX88e1qlcUpE5Wz9Ejr4inQnaejXxdIR3lJhplURSX4oLAfx5TI6FAk7VHJPfPeFrXEYs0CJhthIls0hI9jC&X-Amz-Signature=cee59861817333e906bb8ed2c935bf9d5fa9e8c88cfd3b6f8d312239afcf4a61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Launch file

<details>
      <summary>What is in this launch file?</summary>
      [launch files guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/launch-files/)
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

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FHWCVWQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIEehn7%2FEcMwooL4min9I79wQUlPOcp9qnyxjN%2BkIzDOzAiAShqMSlw0ILtgNKJeUU33nXTzyp%2FwfawmZPCXd24xxpir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM9yaugzUsw29u8L1aKtwDhh1%2Fo1jebAnTXqvNOxyCo5akVphWo5XirD6c8VBt03gs%2BkMgNB1%2BQ8%2FbZQkDXgckmmW1CwQA6oG25yk%2BbB5oFqSOOP0Gxm6p3Ukvqx4qqBI2GRdFQOXHqGBN7kcAYj%2BTpewx2yJjjEsA81W1s3ebU0xe9YuA5gyghh8DqqCNwP4FZjRMSWmx1pAoLUMpreRpiR3WX7XfefJ8WxAHE%2BW2HdC%2FChdyV%2F%2BHoW1SAI6bPzo04ebyHXYdR4T4%2BuHS%2F2XbTLDIEqGj%2F5ZYjf%2FADFF0q3Cc7JS%2BALG%2FMTqJ%2FTGafq9ZLAX2tzAraoPxOsqfRItfAYzP1LI5FLZDr60x%2F%2BFHH9Qq8PPb9wvt8l39VuCr2nK2CSwPX3KApCIlRkiOHKaQ08MGtQm%2FgqjpViUkOAl4Fm7FetYnBy%2FtkEkcQ3hv%2FXx%2Fyvbn8Uxg7itSkskkT4tey3bV3DPOkNeniBGi87iCCBmKQMJhHYyLGQFpOO336jVwUhZyaf6K2PfjZMKfTtzWpBtusZFW14%2BJsNk6JFBLPDLtPjz%2Fbci%2BfGeHHf3aknMCZyCmAytI37LXclFUruaUvyhFNhj0qK6wt2k7zQvP1MAgUnT6lz9ERnT%2FmWCHeB%2FUkTn6U8TA0AJtRh0wlNv9xAY6pgG9XIJQ37TooArqEthpIXfBJo6WhzyP1PmUg3krv%2B3ymNr4SSVmYsb8%2FWyoXlALi%2BetfzB8FimxO8uPZnurj90sFgPdp4mEO6LpLgS3%2F3QYXznVWSO0FHYNmSXqO%2BQhY6iX3%2FbEA1rOeX88e1qlcUpE5Wz9Ejr4inQnaejXxdIR3lJhplURSX4oLAfx5TI6FAk7VHJPfPeFrXEYs0CJhthIls0hI9jC&X-Amz-Signature=16e761e5777ff862e734e7a7bce9b04011449f4aeda0b79323bc4e7f7772cca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FHWCVWQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIEehn7%2FEcMwooL4min9I79wQUlPOcp9qnyxjN%2BkIzDOzAiAShqMSlw0ILtgNKJeUU33nXTzyp%2FwfawmZPCXd24xxpir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM9yaugzUsw29u8L1aKtwDhh1%2Fo1jebAnTXqvNOxyCo5akVphWo5XirD6c8VBt03gs%2BkMgNB1%2BQ8%2FbZQkDXgckmmW1CwQA6oG25yk%2BbB5oFqSOOP0Gxm6p3Ukvqx4qqBI2GRdFQOXHqGBN7kcAYj%2BTpewx2yJjjEsA81W1s3ebU0xe9YuA5gyghh8DqqCNwP4FZjRMSWmx1pAoLUMpreRpiR3WX7XfefJ8WxAHE%2BW2HdC%2FChdyV%2F%2BHoW1SAI6bPzo04ebyHXYdR4T4%2BuHS%2F2XbTLDIEqGj%2F5ZYjf%2FADFF0q3Cc7JS%2BALG%2FMTqJ%2FTGafq9ZLAX2tzAraoPxOsqfRItfAYzP1LI5FLZDr60x%2F%2BFHH9Qq8PPb9wvt8l39VuCr2nK2CSwPX3KApCIlRkiOHKaQ08MGtQm%2FgqjpViUkOAl4Fm7FetYnBy%2FtkEkcQ3hv%2FXx%2Fyvbn8Uxg7itSkskkT4tey3bV3DPOkNeniBGi87iCCBmKQMJhHYyLGQFpOO336jVwUhZyaf6K2PfjZMKfTtzWpBtusZFW14%2BJsNk6JFBLPDLtPjz%2Fbci%2BfGeHHf3aknMCZyCmAytI37LXclFUruaUvyhFNhj0qK6wt2k7zQvP1MAgUnT6lz9ERnT%2FmWCHeB%2FUkTn6U8TA0AJtRh0wlNv9xAY6pgG9XIJQ37TooArqEthpIXfBJo6WhzyP1PmUg3krv%2B3ymNr4SSVmYsb8%2FWyoXlALi%2BetfzB8FimxO8uPZnurj90sFgPdp4mEO6LpLgS3%2F3QYXznVWSO0FHYNmSXqO%2BQhY6iX3%2FbEA1rOeX88e1qlcUpE5Wz9Ejr4inQnaejXxdIR3lJhplURSX4oLAfx5TI6FAk7VHJPfPeFrXEYs0CJhthIls0hI9jC&X-Amz-Signature=e6b2924c74b050c05da4929c230875157da7625dc6896bc7d7f210f75ee1067e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FHWCVWQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIEehn7%2FEcMwooL4min9I79wQUlPOcp9qnyxjN%2BkIzDOzAiAShqMSlw0ILtgNKJeUU33nXTzyp%2FwfawmZPCXd24xxpir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM9yaugzUsw29u8L1aKtwDhh1%2Fo1jebAnTXqvNOxyCo5akVphWo5XirD6c8VBt03gs%2BkMgNB1%2BQ8%2FbZQkDXgckmmW1CwQA6oG25yk%2BbB5oFqSOOP0Gxm6p3Ukvqx4qqBI2GRdFQOXHqGBN7kcAYj%2BTpewx2yJjjEsA81W1s3ebU0xe9YuA5gyghh8DqqCNwP4FZjRMSWmx1pAoLUMpreRpiR3WX7XfefJ8WxAHE%2BW2HdC%2FChdyV%2F%2BHoW1SAI6bPzo04ebyHXYdR4T4%2BuHS%2F2XbTLDIEqGj%2F5ZYjf%2FADFF0q3Cc7JS%2BALG%2FMTqJ%2FTGafq9ZLAX2tzAraoPxOsqfRItfAYzP1LI5FLZDr60x%2F%2BFHH9Qq8PPb9wvt8l39VuCr2nK2CSwPX3KApCIlRkiOHKaQ08MGtQm%2FgqjpViUkOAl4Fm7FetYnBy%2FtkEkcQ3hv%2FXx%2Fyvbn8Uxg7itSkskkT4tey3bV3DPOkNeniBGi87iCCBmKQMJhHYyLGQFpOO336jVwUhZyaf6K2PfjZMKfTtzWpBtusZFW14%2BJsNk6JFBLPDLtPjz%2Fbci%2BfGeHHf3aknMCZyCmAytI37LXclFUruaUvyhFNhj0qK6wt2k7zQvP1MAgUnT6lz9ERnT%2FmWCHeB%2FUkTn6U8TA0AJtRh0wlNv9xAY6pgG9XIJQ37TooArqEthpIXfBJo6WhzyP1PmUg3krv%2B3ymNr4SSVmYsb8%2FWyoXlALi%2BetfzB8FimxO8uPZnurj90sFgPdp4mEO6LpLgS3%2F3QYXznVWSO0FHYNmSXqO%2BQhY6iX3%2FbEA1rOeX88e1qlcUpE5Wz9Ejr4inQnaejXxdIR3lJhplURSX4oLAfx5TI6FAk7VHJPfPeFrXEYs0CJhthIls0hI9jC&X-Amz-Signature=54a87b0bf9948caa75b2ef70d45f11f5db7149f1690b7db81de6d7f6dec223ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
