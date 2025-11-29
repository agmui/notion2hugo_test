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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJJOHEU%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBp7FDOU%2Br4XwXcdg1ALbQKp1M5Yz9cA0xQzdess%2FQXgAiEA5YkZL0n3Ckn4EyBohHzIsL7EU0puF9QAQiCOlEO3IMIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuJ9c4lEKlwxJAqXircA6EmfbmeordCTyKzPBJaZtSqQCdcqsMmQXue9dy5kjnYiuoA7Gcn2eswyGIKuCSxLdumBK5ZZRa5oF1PaDvZK%2FRV0dl2pk3ZnpqWX8uZC9fYbv7lVWW6d2bT4CamLaEGY9BZVRCHZW4pe7rNUSnzILCZJzWKjUG5%2FGo%2BSaF3l5NJUjFBYed%2FQNGrgMVKAP6GZk4uws6zXHOPpWkDf0R6dDOYvDhUENusxzid%2FTc21cs0v4633ud36wMtfcViT52aQk8p4DnwgdqqUYDvy%2BdSARB0VNYVnVXllkkyWCSDkEG%2BPUzLHNV5WOJjMzzBT43QDEiO%2FroSKr6e0Dzd94SoOjYTa7wWmCJdosoQPDFRXWTTmFapD0PZ3pBH6zpOg86vKJ2EWWmrJ7YcISIaf1qYj0JIMAESeTIdLzna329WlkrHnD2ro6nolbIYAGit6ynVV834S2RvARA07zK0QVGb8UPjVZ86%2Fsn1yehyeUplYRK6n8EuoFuLlOdEMHuBGRrTEYg4JDBjOoP9dOuI%2FJf%2BHtLJHntdU7AIyDeRl%2Fx11Jc9BF9cvaEunrvtsZ8cohSJNWQI4qMDrn%2B25WhmhznwVP4Udne0ZK3ub02zhdnxwBRFeoVsZcvvHb5G0WpSMO77p8kGOqUBgJ4bZNfzN%2BMq2gBBwBeOJ82iDOideXi8Byeku3oRpb8d%2BJ2DVSIk3BFShKotQASLxgdMeOve1c83CCaZWYEfiOI%2BscG5gDm29ECxkxfPttU1gJtWnIG7pAAnG%2FoXgQcM9rBsJRBBu7EOxe%2BgJzBs%2BNRnwvB33oZHGlcKo0cRyUAZvEZVAfrYt%2B%2BLkgV%2B76euVJZiUIR%2F7MSm7WM%2BOufLtxxp9lhA&X-Amz-Signature=2d15f55da063ff1289577327a38a1b2866628cca9ecb753fff0e0454de455aa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJJOHEU%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBp7FDOU%2Br4XwXcdg1ALbQKp1M5Yz9cA0xQzdess%2FQXgAiEA5YkZL0n3Ckn4EyBohHzIsL7EU0puF9QAQiCOlEO3IMIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuJ9c4lEKlwxJAqXircA6EmfbmeordCTyKzPBJaZtSqQCdcqsMmQXue9dy5kjnYiuoA7Gcn2eswyGIKuCSxLdumBK5ZZRa5oF1PaDvZK%2FRV0dl2pk3ZnpqWX8uZC9fYbv7lVWW6d2bT4CamLaEGY9BZVRCHZW4pe7rNUSnzILCZJzWKjUG5%2FGo%2BSaF3l5NJUjFBYed%2FQNGrgMVKAP6GZk4uws6zXHOPpWkDf0R6dDOYvDhUENusxzid%2FTc21cs0v4633ud36wMtfcViT52aQk8p4DnwgdqqUYDvy%2BdSARB0VNYVnVXllkkyWCSDkEG%2BPUzLHNV5WOJjMzzBT43QDEiO%2FroSKr6e0Dzd94SoOjYTa7wWmCJdosoQPDFRXWTTmFapD0PZ3pBH6zpOg86vKJ2EWWmrJ7YcISIaf1qYj0JIMAESeTIdLzna329WlkrHnD2ro6nolbIYAGit6ynVV834S2RvARA07zK0QVGb8UPjVZ86%2Fsn1yehyeUplYRK6n8EuoFuLlOdEMHuBGRrTEYg4JDBjOoP9dOuI%2FJf%2BHtLJHntdU7AIyDeRl%2Fx11Jc9BF9cvaEunrvtsZ8cohSJNWQI4qMDrn%2B25WhmhznwVP4Udne0ZK3ub02zhdnxwBRFeoVsZcvvHb5G0WpSMO77p8kGOqUBgJ4bZNfzN%2BMq2gBBwBeOJ82iDOideXi8Byeku3oRpb8d%2BJ2DVSIk3BFShKotQASLxgdMeOve1c83CCaZWYEfiOI%2BscG5gDm29ECxkxfPttU1gJtWnIG7pAAnG%2FoXgQcM9rBsJRBBu7EOxe%2BgJzBs%2BNRnwvB33oZHGlcKo0cRyUAZvEZVAfrYt%2B%2BLkgV%2B76euVJZiUIR%2F7MSm7WM%2BOufLtxxp9lhA&X-Amz-Signature=d36c9e12ad54adaed04d35e030d2eb4b680aba161271db8a320e714f91218493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJJOHEU%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBp7FDOU%2Br4XwXcdg1ALbQKp1M5Yz9cA0xQzdess%2FQXgAiEA5YkZL0n3Ckn4EyBohHzIsL7EU0puF9QAQiCOlEO3IMIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuJ9c4lEKlwxJAqXircA6EmfbmeordCTyKzPBJaZtSqQCdcqsMmQXue9dy5kjnYiuoA7Gcn2eswyGIKuCSxLdumBK5ZZRa5oF1PaDvZK%2FRV0dl2pk3ZnpqWX8uZC9fYbv7lVWW6d2bT4CamLaEGY9BZVRCHZW4pe7rNUSnzILCZJzWKjUG5%2FGo%2BSaF3l5NJUjFBYed%2FQNGrgMVKAP6GZk4uws6zXHOPpWkDf0R6dDOYvDhUENusxzid%2FTc21cs0v4633ud36wMtfcViT52aQk8p4DnwgdqqUYDvy%2BdSARB0VNYVnVXllkkyWCSDkEG%2BPUzLHNV5WOJjMzzBT43QDEiO%2FroSKr6e0Dzd94SoOjYTa7wWmCJdosoQPDFRXWTTmFapD0PZ3pBH6zpOg86vKJ2EWWmrJ7YcISIaf1qYj0JIMAESeTIdLzna329WlkrHnD2ro6nolbIYAGit6ynVV834S2RvARA07zK0QVGb8UPjVZ86%2Fsn1yehyeUplYRK6n8EuoFuLlOdEMHuBGRrTEYg4JDBjOoP9dOuI%2FJf%2BHtLJHntdU7AIyDeRl%2Fx11Jc9BF9cvaEunrvtsZ8cohSJNWQI4qMDrn%2B25WhmhznwVP4Udne0ZK3ub02zhdnxwBRFeoVsZcvvHb5G0WpSMO77p8kGOqUBgJ4bZNfzN%2BMq2gBBwBeOJ82iDOideXi8Byeku3oRpb8d%2BJ2DVSIk3BFShKotQASLxgdMeOve1c83CCaZWYEfiOI%2BscG5gDm29ECxkxfPttU1gJtWnIG7pAAnG%2FoXgQcM9rBsJRBBu7EOxe%2BgJzBs%2BNRnwvB33oZHGlcKo0cRyUAZvEZVAfrYt%2B%2BLkgV%2B76euVJZiUIR%2F7MSm7WM%2BOufLtxxp9lhA&X-Amz-Signature=bcfdf4677993cb10ce179abf3c3e15f77fd1911972754f625f8dff97be77415f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJJOHEU%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBp7FDOU%2Br4XwXcdg1ALbQKp1M5Yz9cA0xQzdess%2FQXgAiEA5YkZL0n3Ckn4EyBohHzIsL7EU0puF9QAQiCOlEO3IMIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuJ9c4lEKlwxJAqXircA6EmfbmeordCTyKzPBJaZtSqQCdcqsMmQXue9dy5kjnYiuoA7Gcn2eswyGIKuCSxLdumBK5ZZRa5oF1PaDvZK%2FRV0dl2pk3ZnpqWX8uZC9fYbv7lVWW6d2bT4CamLaEGY9BZVRCHZW4pe7rNUSnzILCZJzWKjUG5%2FGo%2BSaF3l5NJUjFBYed%2FQNGrgMVKAP6GZk4uws6zXHOPpWkDf0R6dDOYvDhUENusxzid%2FTc21cs0v4633ud36wMtfcViT52aQk8p4DnwgdqqUYDvy%2BdSARB0VNYVnVXllkkyWCSDkEG%2BPUzLHNV5WOJjMzzBT43QDEiO%2FroSKr6e0Dzd94SoOjYTa7wWmCJdosoQPDFRXWTTmFapD0PZ3pBH6zpOg86vKJ2EWWmrJ7YcISIaf1qYj0JIMAESeTIdLzna329WlkrHnD2ro6nolbIYAGit6ynVV834S2RvARA07zK0QVGb8UPjVZ86%2Fsn1yehyeUplYRK6n8EuoFuLlOdEMHuBGRrTEYg4JDBjOoP9dOuI%2FJf%2BHtLJHntdU7AIyDeRl%2Fx11Jc9BF9cvaEunrvtsZ8cohSJNWQI4qMDrn%2B25WhmhznwVP4Udne0ZK3ub02zhdnxwBRFeoVsZcvvHb5G0WpSMO77p8kGOqUBgJ4bZNfzN%2BMq2gBBwBeOJ82iDOideXi8Byeku3oRpb8d%2BJ2DVSIk3BFShKotQASLxgdMeOve1c83CCaZWYEfiOI%2BscG5gDm29ECxkxfPttU1gJtWnIG7pAAnG%2FoXgQcM9rBsJRBBu7EOxe%2BgJzBs%2BNRnwvB33oZHGlcKo0cRyUAZvEZVAfrYt%2B%2BLkgV%2B76euVJZiUIR%2F7MSm7WM%2BOufLtxxp9lhA&X-Amz-Signature=75f7ed98f66e44e506254fedb4f873135b2ce4aa6f5ff242e3596a2fccae4c2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJJOHEU%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBp7FDOU%2Br4XwXcdg1ALbQKp1M5Yz9cA0xQzdess%2FQXgAiEA5YkZL0n3Ckn4EyBohHzIsL7EU0puF9QAQiCOlEO3IMIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuJ9c4lEKlwxJAqXircA6EmfbmeordCTyKzPBJaZtSqQCdcqsMmQXue9dy5kjnYiuoA7Gcn2eswyGIKuCSxLdumBK5ZZRa5oF1PaDvZK%2FRV0dl2pk3ZnpqWX8uZC9fYbv7lVWW6d2bT4CamLaEGY9BZVRCHZW4pe7rNUSnzILCZJzWKjUG5%2FGo%2BSaF3l5NJUjFBYed%2FQNGrgMVKAP6GZk4uws6zXHOPpWkDf0R6dDOYvDhUENusxzid%2FTc21cs0v4633ud36wMtfcViT52aQk8p4DnwgdqqUYDvy%2BdSARB0VNYVnVXllkkyWCSDkEG%2BPUzLHNV5WOJjMzzBT43QDEiO%2FroSKr6e0Dzd94SoOjYTa7wWmCJdosoQPDFRXWTTmFapD0PZ3pBH6zpOg86vKJ2EWWmrJ7YcISIaf1qYj0JIMAESeTIdLzna329WlkrHnD2ro6nolbIYAGit6ynVV834S2RvARA07zK0QVGb8UPjVZ86%2Fsn1yehyeUplYRK6n8EuoFuLlOdEMHuBGRrTEYg4JDBjOoP9dOuI%2FJf%2BHtLJHntdU7AIyDeRl%2Fx11Jc9BF9cvaEunrvtsZ8cohSJNWQI4qMDrn%2B25WhmhznwVP4Udne0ZK3ub02zhdnxwBRFeoVsZcvvHb5G0WpSMO77p8kGOqUBgJ4bZNfzN%2BMq2gBBwBeOJ82iDOideXi8Byeku3oRpb8d%2BJ2DVSIk3BFShKotQASLxgdMeOve1c83CCaZWYEfiOI%2BscG5gDm29ECxkxfPttU1gJtWnIG7pAAnG%2FoXgQcM9rBsJRBBu7EOxe%2BgJzBs%2BNRnwvB33oZHGlcKo0cRyUAZvEZVAfrYt%2B%2BLkgV%2B76euVJZiUIR%2F7MSm7WM%2BOufLtxxp9lhA&X-Amz-Signature=dfade0ca3d13e0ac43c110cf349ab8052bbd3b18b34b57a41fe7ea9d7413a5f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJJOHEU%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBp7FDOU%2Br4XwXcdg1ALbQKp1M5Yz9cA0xQzdess%2FQXgAiEA5YkZL0n3Ckn4EyBohHzIsL7EU0puF9QAQiCOlEO3IMIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuJ9c4lEKlwxJAqXircA6EmfbmeordCTyKzPBJaZtSqQCdcqsMmQXue9dy5kjnYiuoA7Gcn2eswyGIKuCSxLdumBK5ZZRa5oF1PaDvZK%2FRV0dl2pk3ZnpqWX8uZC9fYbv7lVWW6d2bT4CamLaEGY9BZVRCHZW4pe7rNUSnzILCZJzWKjUG5%2FGo%2BSaF3l5NJUjFBYed%2FQNGrgMVKAP6GZk4uws6zXHOPpWkDf0R6dDOYvDhUENusxzid%2FTc21cs0v4633ud36wMtfcViT52aQk8p4DnwgdqqUYDvy%2BdSARB0VNYVnVXllkkyWCSDkEG%2BPUzLHNV5WOJjMzzBT43QDEiO%2FroSKr6e0Dzd94SoOjYTa7wWmCJdosoQPDFRXWTTmFapD0PZ3pBH6zpOg86vKJ2EWWmrJ7YcISIaf1qYj0JIMAESeTIdLzna329WlkrHnD2ro6nolbIYAGit6ynVV834S2RvARA07zK0QVGb8UPjVZ86%2Fsn1yehyeUplYRK6n8EuoFuLlOdEMHuBGRrTEYg4JDBjOoP9dOuI%2FJf%2BHtLJHntdU7AIyDeRl%2Fx11Jc9BF9cvaEunrvtsZ8cohSJNWQI4qMDrn%2B25WhmhznwVP4Udne0ZK3ub02zhdnxwBRFeoVsZcvvHb5G0WpSMO77p8kGOqUBgJ4bZNfzN%2BMq2gBBwBeOJ82iDOideXi8Byeku3oRpb8d%2BJ2DVSIk3BFShKotQASLxgdMeOve1c83CCaZWYEfiOI%2BscG5gDm29ECxkxfPttU1gJtWnIG7pAAnG%2FoXgQcM9rBsJRBBu7EOxe%2BgJzBs%2BNRnwvB33oZHGlcKo0cRyUAZvEZVAfrYt%2B%2BLkgV%2B76euVJZiUIR%2F7MSm7WM%2BOufLtxxp9lhA&X-Amz-Signature=bf1891e53bf5072442f7024f9c8db25f86f90baa65f9072cb2def8f47fb7d2a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJJOHEU%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBp7FDOU%2Br4XwXcdg1ALbQKp1M5Yz9cA0xQzdess%2FQXgAiEA5YkZL0n3Ckn4EyBohHzIsL7EU0puF9QAQiCOlEO3IMIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuJ9c4lEKlwxJAqXircA6EmfbmeordCTyKzPBJaZtSqQCdcqsMmQXue9dy5kjnYiuoA7Gcn2eswyGIKuCSxLdumBK5ZZRa5oF1PaDvZK%2FRV0dl2pk3ZnpqWX8uZC9fYbv7lVWW6d2bT4CamLaEGY9BZVRCHZW4pe7rNUSnzILCZJzWKjUG5%2FGo%2BSaF3l5NJUjFBYed%2FQNGrgMVKAP6GZk4uws6zXHOPpWkDf0R6dDOYvDhUENusxzid%2FTc21cs0v4633ud36wMtfcViT52aQk8p4DnwgdqqUYDvy%2BdSARB0VNYVnVXllkkyWCSDkEG%2BPUzLHNV5WOJjMzzBT43QDEiO%2FroSKr6e0Dzd94SoOjYTa7wWmCJdosoQPDFRXWTTmFapD0PZ3pBH6zpOg86vKJ2EWWmrJ7YcISIaf1qYj0JIMAESeTIdLzna329WlkrHnD2ro6nolbIYAGit6ynVV834S2RvARA07zK0QVGb8UPjVZ86%2Fsn1yehyeUplYRK6n8EuoFuLlOdEMHuBGRrTEYg4JDBjOoP9dOuI%2FJf%2BHtLJHntdU7AIyDeRl%2Fx11Jc9BF9cvaEunrvtsZ8cohSJNWQI4qMDrn%2B25WhmhznwVP4Udne0ZK3ub02zhdnxwBRFeoVsZcvvHb5G0WpSMO77p8kGOqUBgJ4bZNfzN%2BMq2gBBwBeOJ82iDOideXi8Byeku3oRpb8d%2BJ2DVSIk3BFShKotQASLxgdMeOve1c83CCaZWYEfiOI%2BscG5gDm29ECxkxfPttU1gJtWnIG7pAAnG%2FoXgQcM9rBsJRBBu7EOxe%2BgJzBs%2BNRnwvB33oZHGlcKo0cRyUAZvEZVAfrYt%2B%2BLkgV%2B76euVJZiUIR%2F7MSm7WM%2BOufLtxxp9lhA&X-Amz-Signature=5a3e054dcf5e06e9ace96e4b57428193118ffff438d2a05949afffc4bee7712e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJJOHEU%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBp7FDOU%2Br4XwXcdg1ALbQKp1M5Yz9cA0xQzdess%2FQXgAiEA5YkZL0n3Ckn4EyBohHzIsL7EU0puF9QAQiCOlEO3IMIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuJ9c4lEKlwxJAqXircA6EmfbmeordCTyKzPBJaZtSqQCdcqsMmQXue9dy5kjnYiuoA7Gcn2eswyGIKuCSxLdumBK5ZZRa5oF1PaDvZK%2FRV0dl2pk3ZnpqWX8uZC9fYbv7lVWW6d2bT4CamLaEGY9BZVRCHZW4pe7rNUSnzILCZJzWKjUG5%2FGo%2BSaF3l5NJUjFBYed%2FQNGrgMVKAP6GZk4uws6zXHOPpWkDf0R6dDOYvDhUENusxzid%2FTc21cs0v4633ud36wMtfcViT52aQk8p4DnwgdqqUYDvy%2BdSARB0VNYVnVXllkkyWCSDkEG%2BPUzLHNV5WOJjMzzBT43QDEiO%2FroSKr6e0Dzd94SoOjYTa7wWmCJdosoQPDFRXWTTmFapD0PZ3pBH6zpOg86vKJ2EWWmrJ7YcISIaf1qYj0JIMAESeTIdLzna329WlkrHnD2ro6nolbIYAGit6ynVV834S2RvARA07zK0QVGb8UPjVZ86%2Fsn1yehyeUplYRK6n8EuoFuLlOdEMHuBGRrTEYg4JDBjOoP9dOuI%2FJf%2BHtLJHntdU7AIyDeRl%2Fx11Jc9BF9cvaEunrvtsZ8cohSJNWQI4qMDrn%2B25WhmhznwVP4Udne0ZK3ub02zhdnxwBRFeoVsZcvvHb5G0WpSMO77p8kGOqUBgJ4bZNfzN%2BMq2gBBwBeOJ82iDOideXi8Byeku3oRpb8d%2BJ2DVSIk3BFShKotQASLxgdMeOve1c83CCaZWYEfiOI%2BscG5gDm29ECxkxfPttU1gJtWnIG7pAAnG%2FoXgQcM9rBsJRBBu7EOxe%2BgJzBs%2BNRnwvB33oZHGlcKo0cRyUAZvEZVAfrYt%2B%2BLkgV%2B76euVJZiUIR%2F7MSm7WM%2BOufLtxxp9lhA&X-Amz-Signature=b65ba9544f506d4b3ec0e8f23569badb71d0a6c7ef55d81fa0518c6da3aed71c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJJOHEU%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBp7FDOU%2Br4XwXcdg1ALbQKp1M5Yz9cA0xQzdess%2FQXgAiEA5YkZL0n3Ckn4EyBohHzIsL7EU0puF9QAQiCOlEO3IMIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuJ9c4lEKlwxJAqXircA6EmfbmeordCTyKzPBJaZtSqQCdcqsMmQXue9dy5kjnYiuoA7Gcn2eswyGIKuCSxLdumBK5ZZRa5oF1PaDvZK%2FRV0dl2pk3ZnpqWX8uZC9fYbv7lVWW6d2bT4CamLaEGY9BZVRCHZW4pe7rNUSnzILCZJzWKjUG5%2FGo%2BSaF3l5NJUjFBYed%2FQNGrgMVKAP6GZk4uws6zXHOPpWkDf0R6dDOYvDhUENusxzid%2FTc21cs0v4633ud36wMtfcViT52aQk8p4DnwgdqqUYDvy%2BdSARB0VNYVnVXllkkyWCSDkEG%2BPUzLHNV5WOJjMzzBT43QDEiO%2FroSKr6e0Dzd94SoOjYTa7wWmCJdosoQPDFRXWTTmFapD0PZ3pBH6zpOg86vKJ2EWWmrJ7YcISIaf1qYj0JIMAESeTIdLzna329WlkrHnD2ro6nolbIYAGit6ynVV834S2RvARA07zK0QVGb8UPjVZ86%2Fsn1yehyeUplYRK6n8EuoFuLlOdEMHuBGRrTEYg4JDBjOoP9dOuI%2FJf%2BHtLJHntdU7AIyDeRl%2Fx11Jc9BF9cvaEunrvtsZ8cohSJNWQI4qMDrn%2B25WhmhznwVP4Udne0ZK3ub02zhdnxwBRFeoVsZcvvHb5G0WpSMO77p8kGOqUBgJ4bZNfzN%2BMq2gBBwBeOJ82iDOideXi8Byeku3oRpb8d%2BJ2DVSIk3BFShKotQASLxgdMeOve1c83CCaZWYEfiOI%2BscG5gDm29ECxkxfPttU1gJtWnIG7pAAnG%2FoXgQcM9rBsJRBBu7EOxe%2BgJzBs%2BNRnwvB33oZHGlcKo0cRyUAZvEZVAfrYt%2B%2BLkgV%2B76euVJZiUIR%2F7MSm7WM%2BOufLtxxp9lhA&X-Amz-Signature=b67bebf9a9b4765a6e15a054e3b4710646df9b54ced2c40f55560c914b3836d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJJOHEU%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBp7FDOU%2Br4XwXcdg1ALbQKp1M5Yz9cA0xQzdess%2FQXgAiEA5YkZL0n3Ckn4EyBohHzIsL7EU0puF9QAQiCOlEO3IMIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuJ9c4lEKlwxJAqXircA6EmfbmeordCTyKzPBJaZtSqQCdcqsMmQXue9dy5kjnYiuoA7Gcn2eswyGIKuCSxLdumBK5ZZRa5oF1PaDvZK%2FRV0dl2pk3ZnpqWX8uZC9fYbv7lVWW6d2bT4CamLaEGY9BZVRCHZW4pe7rNUSnzILCZJzWKjUG5%2FGo%2BSaF3l5NJUjFBYed%2FQNGrgMVKAP6GZk4uws6zXHOPpWkDf0R6dDOYvDhUENusxzid%2FTc21cs0v4633ud36wMtfcViT52aQk8p4DnwgdqqUYDvy%2BdSARB0VNYVnVXllkkyWCSDkEG%2BPUzLHNV5WOJjMzzBT43QDEiO%2FroSKr6e0Dzd94SoOjYTa7wWmCJdosoQPDFRXWTTmFapD0PZ3pBH6zpOg86vKJ2EWWmrJ7YcISIaf1qYj0JIMAESeTIdLzna329WlkrHnD2ro6nolbIYAGit6ynVV834S2RvARA07zK0QVGb8UPjVZ86%2Fsn1yehyeUplYRK6n8EuoFuLlOdEMHuBGRrTEYg4JDBjOoP9dOuI%2FJf%2BHtLJHntdU7AIyDeRl%2Fx11Jc9BF9cvaEunrvtsZ8cohSJNWQI4qMDrn%2B25WhmhznwVP4Udne0ZK3ub02zhdnxwBRFeoVsZcvvHb5G0WpSMO77p8kGOqUBgJ4bZNfzN%2BMq2gBBwBeOJ82iDOideXi8Byeku3oRpb8d%2BJ2DVSIk3BFShKotQASLxgdMeOve1c83CCaZWYEfiOI%2BscG5gDm29ECxkxfPttU1gJtWnIG7pAAnG%2FoXgQcM9rBsJRBBu7EOxe%2BgJzBs%2BNRnwvB33oZHGlcKo0cRyUAZvEZVAfrYt%2B%2BLkgV%2B76euVJZiUIR%2F7MSm7WM%2BOufLtxxp9lhA&X-Amz-Signature=d8402e5ff735e45751d8194066baccb361986343861665f743f349a82c49b3af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOXYRBUQ%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICri19O5S49fMf0c358Zb4zMRGUpFKEHRLABDs2gzLwRAiBA%2FW4JNwboDyGMF1vvfwZztZANWAwIEGQg%2BtV8De9CYCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv0YQqkuCQikKi5vDKtwDemt17Uq364ztekgpjzxylaD%2BKe1Gf1iuYOOMaBm8ncdKPqlDw1PY8QM1aDwL1%2FTmwHhT1OPlFdY1eaPdQ4I16PV%2Bq39J%2BahhDE%2FwYW61%2BPPtBhb1EQsymTbON3h05meHbqx6%2Fx%2B2NKw7bYovQ0GS%2FSAcBj%2F5xiDWv3A1GssU%2Ff3LT4F68KA8MDLdqSZYtGr2l7bWLmQZ9rplZaTjypa3Zg5UYjAudiriN03vvlSP12sE7RvOOUYwF6iM0svRppH2chHcBjqCsf0n%2B2fDs5AWbznBP2n%2Bep0lH%2FXGD8gNAUbJXalzPPIpuhHd1qJEeuAxzdWf219KXN9PmOWxTJjB0KkkyAvzCSWd%2BFYJxUHEMRLz8HPCP5K0ZeAeSWcf0Cy0JyVUvaMg0%2Fi4A6St5Dbs8LpV4KOtB2sQsTEE2CUtB9Y1KtWhbcGEKuEdyN5ony5y12mUf6FA9OFAGmEjlnK8yQcgJJlHh%2FIGsz3hfy1Scewug8WGeMkE%2BOu7PmFrDQpOzSPtlXymI%2FQiZ2%2FpFbsfjCBPJj%2Fs9HZoTrobbqMC3jwIfNvnjMYeORms3ZSe9KWbDL4TGhxUfBcWgEFKLAkVXW4g7Z%2FkbQr0eoAYOg7QuIatHD9HaapInCn1IfQwmPmnyQY6pgHNr%2BstYzeeYlCyJM48k%2BXLdyrPEldty7aK%2F4dW9ENj6IFxgLRxF3Zr0KSFjVih%2FUNOywHnaEE%2FCGWa51pM8R%2Bs95ntRUYB3hFgQ0xTZlTjN2SM%2B7hriFgRkT6xJDiQL8cCfZt%2Fji%2FgPOAptFjN8a9FlGOmZBD92WTAaf8rD2Z0dUSnhXh1JQX24LGXkQ7w%2F4aAKjWuSfuHWlaVHLiLZpaxr%2BM639YH&X-Amz-Signature=206f40702fbb26ece8b32096d253b2d88bd7edaaf7b1983c2cf4efe727369b68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGT3E5ME%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJdn%2BlCSE3KQkuLYgFXjNjoqBpkRzhWdsGbHO98UFU9QIgV%2F9eYGFHlN1sBIJHF1chn61s6g3F4X9L%2FU4yW6HEOksqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJ1ykTDHJF%2FiDY29ircA6QaVwpUmekOoh7deHX8%2BiIo5LQ5%2BclXk8X4%2F7r0ULO%2FxaKP9g1iaK%2BwHcoVWzOL8KVxBriX9eFoLoEgD%2BXn8qvqP06tm0zO%2F33nZFMAKbS9YW4kMuo0edEhYCXwkfki4luIfRPS%2FmzhLe2QbtDyUdwZGwjbPFNxh6vSuatdKxW6BObikhjkT4SrbbnPYRwW4V0pRdRYYEh2oknzkO6ucwwnbkGQVFK1Wp4C0fqaMjb%2Fq1Twy0wI99kKec6pTpsB%2Bo0PfuMKJTtXJfamGBEzv3SdwCri5tsvtQmqkkL4D5T9MUhdgUgVQ3qXv2wdATU3u%2BX0SNOjdXUoEJqUIz8iTHv%2BomUVwbxDNAd8JbMOVp1U8SW4wHyxaE1G1Clsut9sWxKCDvF9fZwksbNEKkXrOsO3nqC0vDXFFG6XHWrL8Oe9k3LQbhnlqGuQYdFrp3hrrRHCcsXmmNool8V8%2FArB9MGZ1ZfDTqibZSlTd7Gmv02gzWM2aRyQyykUeYoRkyAeBXaeKyaXYYyBQhYTdSeV7SdEVEiMhHZpdhnQfsIXpyliIvRF3JkvZUaZS%2Bf87wBftTGUXB1x6lvunxgu8J%2BfpqOKE0gCSQCZ2dObkBKCDgWl17yeQ3isPfstVdmJMM%2BOqckGOqUByMrMuu7v8adY8lrtvZ4TIpTVvHWfYvvGKR%2BfcGcBlnTnjyJWaYqsj6FTHv9%2BirHmnOtmKPXb80vJFS7tYSHTdv5GtqjW3TqjCVNGbW3PizpDl5H70n%2BFHJEQ%2B%2FZE9ouzSvTIRgGlRbboiMeHef68MHGO%2Fa5e%2Bt5jT%2FRIURLyHeqs%2BITZosVJLbxGHzl1PBpnvPAOSoeFBAKkp3r7kmxI2tyDw4g9&X-Amz-Signature=0fb5d073ad485e6bbc9130498dc730e7b702470a73d7397dfb5e0536fea02d1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM6A6IG2%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFW9KBujXBc1JsrvL1YBcmkQsOE7nfYNJ9dICsBddPSkAiEAxI%2FYUNXt3JdqsPWU8ualHKClGl%2FRIfV3JFW7ttSgnPAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbOH1F9yvQ%2FbED01CrcA4f%2BfQDv3b3bD0MtX11413t%2FjjyHfuhdPkpqGV2grRX%2F4v3A9X2VGh53ZgtiSexhy42os4%2BHySmUHDVnUoOoFVZd6DOJ6HXnJ5ZCiILhUc8lK74rKAoSZvmX9z7Hpm4aHGwWWk392Akqjw8%2FIwqv2kRkoGyLTfmoCO1LmaKior2jFRmVP8VG5%2B1Np2%2BewSEdUj78ohDy7EQ7vxU20es3d0Zg5oU93gMMEYVbl2KQdd4JXVyfKpL9VpHnbhY%2BI3MeBjwhuOLNL%2Fte5WWbTrmq3UsvYd2UF81pOrjBE28V8Op62IKEw2PUXlioPI1UVn%2BDD5TgwxbrfKl6EAhniH9PhE8iQOn%2BgUoAY%2F98HsJSxWPHRYzq7pC5YsdUyUuk0Klt8H2zsRqhzrK3Z4NIKwA98IUBzVYWznJ5tIQ4bXYPU7I8k5mslbFZl3zBhzeI70DjNiGOh6VfFjZQ1hHgpaMk0%2Bg%2FC%2FUa%2FknRV8YCW5P7AXuJ%2FupjtqwCfL4F8KAIDpCoZRaGa7B%2BideDym626nBjNvb3XxSCgVxQ8JflKGgyNwg%2BPerl1CwDqSSD8VW1HkYGHP1jbsEOuwYZS09s2YxNJ%2FN%2F4sl0vcuIFh1lLQFGn45vZSTOAdY5SfmL9%2F%2B%2FMNX4p8kGOqUBGrJxrn%2FgoR9eW9WdolR%2FGdTffHk0bQuW274x5FYFl9gWj6SiU7QsTK84enClxMs8r%2FmdmPIL2okpC2zlMwKN%2Bdcw32SNpbLIu7Wp83gM7PvObftx612xspH5I7XKTvi3z64yNuecG2ndpVEjh1aMYqAi5bMUUvdwd%2FedyQq0v9GO7rGWYu4yYwcQAvoXYYaBLpn6CMQf9v2jFWyNXJSu497FNEgH&X-Amz-Signature=9cd3aa60ec906c290a7d0f6a2efe29e16d97fb568b942b49b85bff7d53e47c9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJJOHEU%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBp7FDOU%2Br4XwXcdg1ALbQKp1M5Yz9cA0xQzdess%2FQXgAiEA5YkZL0n3Ckn4EyBohHzIsL7EU0puF9QAQiCOlEO3IMIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuJ9c4lEKlwxJAqXircA6EmfbmeordCTyKzPBJaZtSqQCdcqsMmQXue9dy5kjnYiuoA7Gcn2eswyGIKuCSxLdumBK5ZZRa5oF1PaDvZK%2FRV0dl2pk3ZnpqWX8uZC9fYbv7lVWW6d2bT4CamLaEGY9BZVRCHZW4pe7rNUSnzILCZJzWKjUG5%2FGo%2BSaF3l5NJUjFBYed%2FQNGrgMVKAP6GZk4uws6zXHOPpWkDf0R6dDOYvDhUENusxzid%2FTc21cs0v4633ud36wMtfcViT52aQk8p4DnwgdqqUYDvy%2BdSARB0VNYVnVXllkkyWCSDkEG%2BPUzLHNV5WOJjMzzBT43QDEiO%2FroSKr6e0Dzd94SoOjYTa7wWmCJdosoQPDFRXWTTmFapD0PZ3pBH6zpOg86vKJ2EWWmrJ7YcISIaf1qYj0JIMAESeTIdLzna329WlkrHnD2ro6nolbIYAGit6ynVV834S2RvARA07zK0QVGb8UPjVZ86%2Fsn1yehyeUplYRK6n8EuoFuLlOdEMHuBGRrTEYg4JDBjOoP9dOuI%2FJf%2BHtLJHntdU7AIyDeRl%2Fx11Jc9BF9cvaEunrvtsZ8cohSJNWQI4qMDrn%2B25WhmhznwVP4Udne0ZK3ub02zhdnxwBRFeoVsZcvvHb5G0WpSMO77p8kGOqUBgJ4bZNfzN%2BMq2gBBwBeOJ82iDOideXi8Byeku3oRpb8d%2BJ2DVSIk3BFShKotQASLxgdMeOve1c83CCaZWYEfiOI%2BscG5gDm29ECxkxfPttU1gJtWnIG7pAAnG%2FoXgQcM9rBsJRBBu7EOxe%2BgJzBs%2BNRnwvB33oZHGlcKo0cRyUAZvEZVAfrYt%2B%2BLkgV%2B76euVJZiUIR%2F7MSm7WM%2BOufLtxxp9lhA&X-Amz-Signature=0b8835996edac8850d7d8cc228b60fd25eeb9367a2fd8d78b7ac9da6cf150e47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TO5WOG6%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvgk874hq8Fus8ONuP9gLjVQWD1qumo1xKPQHV7AI9YAiAILHOgjaWta8%2F907ZQqOFm79aNNUcCvWrISPHJKQcr1SqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqK3ONZIVsiB1BHP7KtwDOVxtusuWT27fUKvmL3cmu%2FmKyRCL7ogZ7z6FhZPqZCCPguQpNwHspYMP8lDwHpZJBMKBaN9jaQF%2FCIpQ7BqQtY8B037CNlIcBhVRw3dneLVR%2F3xAelo3CdpRnGZH8K9ti94LuPk%2B38ZrQCj%2FjpIMAoEzrenxn3cNAg8Z%2FJ16YsjEU%2FCq%2BbgJt1Szf9fhLNNsW6XKyV%2FMGQAETHJO4NDt%2BnCH3Sj8DSipTsxL%2BQ0g6GQxo7vsAWg%2FIQXB3rKW1CaV7prHQaznvZtngTkwOBEDdNp0OxBjd%2FD21Yri%2FcUhZIWHhZ%2Fqw2UqO7xmrGEnUEbRCRM8mM6mtCF4yGO3utojdGlPyKkxikDhjIjPvfhL0v2oCQOdTxGA4qYQz76jkV%2BRPZPBNaH%2BuN0OaoxfBjT0DUkkRe%2F%2F50%2BxjXVOpw41QCkbN%2BFZVmqSJO4SnH2GRcs%2Bo0b88nBCeshVIw6wQFtLUVQziscec%2BTEoy5f16YJBl4pqpC5aYto7dOTjZ%2FvDLknzwwmHkmzwWCX3X3iBqVEA%2B8as12spvpMpiQMuE7nU6%2FI10SGIk7hleZaOX0KWe1OLrim8ob3GbuQmIqSwgcvwgcp2XjJUR%2FjWcOuKSAnLoAF4nHDXNV1gnpfesMwqPynyQY6pgH4l5aXBi37lssifHN02yNRz0C4HXSn3QBKC2utHe8QsjuRp95Y4g2gG3nYtItfAyGJuJ9pioDWKs5edExEWH11Y%2Ft9YOQv%2BS0%2F8rY2yLjgAwwPFzNcSkki2FZ7vBwZjgJbQkB6QP2yQ7HwCqFDW1qJlkHHVKfDkNJWvYI4AGhHceOphmBdCUBMH%2BVrLUA2bduBwBERGSkq6daqqL%2BSk4qNi9tX1omM&X-Amz-Signature=6835338ddf5a7d17614e7a5c082bf0ea884660e0319e312c819ab1539dc08297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJJOHEU%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBp7FDOU%2Br4XwXcdg1ALbQKp1M5Yz9cA0xQzdess%2FQXgAiEA5YkZL0n3Ckn4EyBohHzIsL7EU0puF9QAQiCOlEO3IMIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuJ9c4lEKlwxJAqXircA6EmfbmeordCTyKzPBJaZtSqQCdcqsMmQXue9dy5kjnYiuoA7Gcn2eswyGIKuCSxLdumBK5ZZRa5oF1PaDvZK%2FRV0dl2pk3ZnpqWX8uZC9fYbv7lVWW6d2bT4CamLaEGY9BZVRCHZW4pe7rNUSnzILCZJzWKjUG5%2FGo%2BSaF3l5NJUjFBYed%2FQNGrgMVKAP6GZk4uws6zXHOPpWkDf0R6dDOYvDhUENusxzid%2FTc21cs0v4633ud36wMtfcViT52aQk8p4DnwgdqqUYDvy%2BdSARB0VNYVnVXllkkyWCSDkEG%2BPUzLHNV5WOJjMzzBT43QDEiO%2FroSKr6e0Dzd94SoOjYTa7wWmCJdosoQPDFRXWTTmFapD0PZ3pBH6zpOg86vKJ2EWWmrJ7YcISIaf1qYj0JIMAESeTIdLzna329WlkrHnD2ro6nolbIYAGit6ynVV834S2RvARA07zK0QVGb8UPjVZ86%2Fsn1yehyeUplYRK6n8EuoFuLlOdEMHuBGRrTEYg4JDBjOoP9dOuI%2FJf%2BHtLJHntdU7AIyDeRl%2Fx11Jc9BF9cvaEunrvtsZ8cohSJNWQI4qMDrn%2B25WhmhznwVP4Udne0ZK3ub02zhdnxwBRFeoVsZcvvHb5G0WpSMO77p8kGOqUBgJ4bZNfzN%2BMq2gBBwBeOJ82iDOideXi8Byeku3oRpb8d%2BJ2DVSIk3BFShKotQASLxgdMeOve1c83CCaZWYEfiOI%2BscG5gDm29ECxkxfPttU1gJtWnIG7pAAnG%2FoXgQcM9rBsJRBBu7EOxe%2BgJzBs%2BNRnwvB33oZHGlcKo0cRyUAZvEZVAfrYt%2B%2BLkgV%2B76euVJZiUIR%2F7MSm7WM%2BOufLtxxp9lhA&X-Amz-Signature=49a2fbf422a77b8e5917d1b6ed97611e7c11a74c32e3544c2b7b4ca706a63cd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QSQHWRD%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg3tIYQrj4NSXu7B%2FVjnrFvmiUHzpA%2Fh9YA4DnQEkmxAiEAo0n3oW7l7S68nbeazJPVRmJi5U1BZadAkXpOOlzHj6sqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8T8hubroC842R%2FeSrcA1cMCC06MQ5P1DTDZYGMO8vg0ag1VvqVbYO9f14ItELNHs7GujK6zaBGEcoOnFHWER7CUAOoCPNnOgoRG%2FIH4EMJdGTAWMZi7aMJW5fEvURFgcXl31brO4cDlFNI09OM8zer5fhV3L9yZ%2BZ6cFZaHKjn3mtDiPpbpIw2Sl%2BOEDsFlTe8vlSaLqX7vHYTe20AL4DF9hn5KPUXWddwshK858w1E38ZipyZkxhBv1adunsRYrra4cGCZ7NnTn9yug83O4wpVM3RNeqpEKKvlTeBXJeQig1ZlZYAkLaAO6TcFXStkDQXG127bFXcVnIH1TgJNn9AjG0uUagyEhIFKb%2BXqYSw4St8LvK9lm6uyH0jnsoo4LlR5PjNV8WvzpYIigaqt6s4FQbByD2zGGpAtQwYUTNmI%2Fi2mTX8ge8ehsb8h71C7IZhToKIg6mhWDcflSqVoJ9qa5stnO9YACDVwBZTC1fBmFkxZcwxGhaw50hQ9kcGO8ONxJpYDM%2Butd0q%2B0MIKny4zEO0u6u6Fb0k25kiD12n%2FbdlWs5xaFQvl9fgHjZ8XPpc%2B3U2OI9Kqq%2FXx8WUxHqUt3uf%2Bb8DjVDfaCyBDkY7%2BgxZWMOyuXkQxStmnj%2FgPdn%2BOBnGCwpU7Az7MJv%2Bp8kGOqUBOmskA9kxEoE7mfQ4PkmRnJg%2BSZ%2BwZz6Y%2FJ2SxAltUAc6Ssp0adUhkH5sdLEZV%2B%2BdXeaUck5rNjO35Gnj0FHUQR5t0kTbFn1UFzHd6s%2BcpNe7TNhU4gcX%2FJv14z9j6yKJOKbcom0Ef7rv6X3TxSSyi7tAIMn6%2BBOJj2wD5YNd6HQXpgW3bWzHc8sub8X965mWIjAbTk3PZ7BKpbepagHvyo3elrFL&X-Amz-Signature=b6e8188f5bf0ef5dac8deb337ed7b58ec4fe60b2aee720559279d753be37a174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJJOHEU%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBp7FDOU%2Br4XwXcdg1ALbQKp1M5Yz9cA0xQzdess%2FQXgAiEA5YkZL0n3Ckn4EyBohHzIsL7EU0puF9QAQiCOlEO3IMIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuJ9c4lEKlwxJAqXircA6EmfbmeordCTyKzPBJaZtSqQCdcqsMmQXue9dy5kjnYiuoA7Gcn2eswyGIKuCSxLdumBK5ZZRa5oF1PaDvZK%2FRV0dl2pk3ZnpqWX8uZC9fYbv7lVWW6d2bT4CamLaEGY9BZVRCHZW4pe7rNUSnzILCZJzWKjUG5%2FGo%2BSaF3l5NJUjFBYed%2FQNGrgMVKAP6GZk4uws6zXHOPpWkDf0R6dDOYvDhUENusxzid%2FTc21cs0v4633ud36wMtfcViT52aQk8p4DnwgdqqUYDvy%2BdSARB0VNYVnVXllkkyWCSDkEG%2BPUzLHNV5WOJjMzzBT43QDEiO%2FroSKr6e0Dzd94SoOjYTa7wWmCJdosoQPDFRXWTTmFapD0PZ3pBH6zpOg86vKJ2EWWmrJ7YcISIaf1qYj0JIMAESeTIdLzna329WlkrHnD2ro6nolbIYAGit6ynVV834S2RvARA07zK0QVGb8UPjVZ86%2Fsn1yehyeUplYRK6n8EuoFuLlOdEMHuBGRrTEYg4JDBjOoP9dOuI%2FJf%2BHtLJHntdU7AIyDeRl%2Fx11Jc9BF9cvaEunrvtsZ8cohSJNWQI4qMDrn%2B25WhmhznwVP4Udne0ZK3ub02zhdnxwBRFeoVsZcvvHb5G0WpSMO77p8kGOqUBgJ4bZNfzN%2BMq2gBBwBeOJ82iDOideXi8Byeku3oRpb8d%2BJ2DVSIk3BFShKotQASLxgdMeOve1c83CCaZWYEfiOI%2BscG5gDm29ECxkxfPttU1gJtWnIG7pAAnG%2FoXgQcM9rBsJRBBu7EOxe%2BgJzBs%2BNRnwvB33oZHGlcKo0cRyUAZvEZVAfrYt%2B%2BLkgV%2B76euVJZiUIR%2F7MSm7WM%2BOufLtxxp9lhA&X-Amz-Signature=1c2497b04b4fd271838e2be7cc0712f4ce41270712cb4f80f050eacdfc110c30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5RABWCC%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFCp7SCQepBET%2FwKPMZal3HizaAOImlqQkhPc4jB%2BZqAiBnFTTJ%2FOofmQENFqESfMeNqYnZm8vZBlAOog7MSwq%2F4iqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6WkuDZX1xUhawk4OKtwDGHMrl90ZqwEzYhRh6drpgISm2BbeERp9csqi82JhbHGu4N%2FffjRi9TLGw1gI3ZuZ3nnSMPWLyYAoejg1zQzfhgx07sTtqHgsz5hag6noExsTCqA4tUW2PwVLVBnjQkHr40TEorv%2Bah5XKFd51bECNzI1OUX6mTbkw%2FeFmuCK3IGWUQRBpPlHEEmkRWwkGql3qRIzxGe%2Bf4LvhOpkXt6c3LhCTNgSZbESmuXQ9wOwhgfVx2tEWZX1N556u%2BLc7%2F58L1NFkGdygcjcatLDj5FGf08wy%2Bk5qz8UEqjXPOeo5YL5IECWnS2L%2BpgXwGCF27ujPqqC%2FwQjlZmkJmGQ1gcIz0wQQ1rL3ZHOd4ZzbQP3bOyrda9rlcysTG6gWQsldABwpXcnx5Zy9s%2FZJ2M631AWlm67h2He7j843W77VTxF2F91moI41nA%2BCvoqa7LdnSdcB2i2pqrTzolwdX8PQfqvBf3F%2Fr%2FrLaT13OoCgObcKkLba84O1blig1DbfA1ogyCIGxNMZ%2BcC1hfUcImdx7FoXtgv8iECxnCKlSU4wFD5KQFas6%2FTWV6P2lW9btK7NfUJuGf2gLdQODhNr1C%2BRhb5Z%2FO%2BxF4m7IuyC5IfBD%2FSnRlBIz%2BK%2B1MjHmXIwDYwz%2FenyQY6pgES2BOQ6dWgpMafDEOmzF8NXvxxrubBdqxiIgz0zehDswB8QyVXW1mDNLi8uHk5daiCahln5lwT1%2BZ7B%2FVE3sgGAw%2BC0hTAHtQ8rrP%2FRf1vUmuNuwV5dq7t26Y6jdJ3nkFULOoehEhqoLxybcyvnv8ybS4LhedI8tbIIkcVemB5r2XayfPd%2F06P6k3RpL3PQzkV50fl6EQ4mUtDgFAocvkouTTWiklh&X-Amz-Signature=7af98f73c49182c81537a7003a9c77ebef63dc5055a726dc557906318dd7a4b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJJOHEU%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBp7FDOU%2Br4XwXcdg1ALbQKp1M5Yz9cA0xQzdess%2FQXgAiEA5YkZL0n3Ckn4EyBohHzIsL7EU0puF9QAQiCOlEO3IMIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuJ9c4lEKlwxJAqXircA6EmfbmeordCTyKzPBJaZtSqQCdcqsMmQXue9dy5kjnYiuoA7Gcn2eswyGIKuCSxLdumBK5ZZRa5oF1PaDvZK%2FRV0dl2pk3ZnpqWX8uZC9fYbv7lVWW6d2bT4CamLaEGY9BZVRCHZW4pe7rNUSnzILCZJzWKjUG5%2FGo%2BSaF3l5NJUjFBYed%2FQNGrgMVKAP6GZk4uws6zXHOPpWkDf0R6dDOYvDhUENusxzid%2FTc21cs0v4633ud36wMtfcViT52aQk8p4DnwgdqqUYDvy%2BdSARB0VNYVnVXllkkyWCSDkEG%2BPUzLHNV5WOJjMzzBT43QDEiO%2FroSKr6e0Dzd94SoOjYTa7wWmCJdosoQPDFRXWTTmFapD0PZ3pBH6zpOg86vKJ2EWWmrJ7YcISIaf1qYj0JIMAESeTIdLzna329WlkrHnD2ro6nolbIYAGit6ynVV834S2RvARA07zK0QVGb8UPjVZ86%2Fsn1yehyeUplYRK6n8EuoFuLlOdEMHuBGRrTEYg4JDBjOoP9dOuI%2FJf%2BHtLJHntdU7AIyDeRl%2Fx11Jc9BF9cvaEunrvtsZ8cohSJNWQI4qMDrn%2B25WhmhznwVP4Udne0ZK3ub02zhdnxwBRFeoVsZcvvHb5G0WpSMO77p8kGOqUBgJ4bZNfzN%2BMq2gBBwBeOJ82iDOideXi8Byeku3oRpb8d%2BJ2DVSIk3BFShKotQASLxgdMeOve1c83CCaZWYEfiOI%2BscG5gDm29ECxkxfPttU1gJtWnIG7pAAnG%2FoXgQcM9rBsJRBBu7EOxe%2BgJzBs%2BNRnwvB33oZHGlcKo0cRyUAZvEZVAfrYt%2B%2BLkgV%2B76euVJZiUIR%2F7MSm7WM%2BOufLtxxp9lhA&X-Amz-Signature=29a08260d6af413c254cbc5be86e4869de3fa58bfab4b476c4d430e96b7a81c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYKFNEAD%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6TDPu6I%2BUlp9eYGpr5oMQ21hyke6UOoJpN%2Boppjy2oAiAWDYYHC%2FpLipzPxZi7L%2FNXvKr7dNAQVrZ9D6pVnbPzpCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlHJXpllTzv7yLNZlKtwDT%2BVpP%2FEIKftdJrz7fOhWaVLoNjgRIdM25sQzf4R3HEUMQ%2BBf%2BUhE20U%2BQN4tBKabZSGB2mzqtvZUI5rsjD8Iy08ujO0y9xoCd50M6lyHmrU9%2FmgXjGk%2F6umMcO5iIJVrQX6vyquMU%2BnNnfosnG37r8%2BYtrYQyr%2FDnEz%2B4oFlAM7GbxVnyNoXDdFOLxMXWGtVsITSbdtX2Eq%2B7YnEoPTM3HEpkyX%2FglKY%2FN9bOOycx6vsD%2FNr0kfFq5cmOeept6N8Ii3qzT59g57draJ7%2B%2BwKKK2Q5Jr9nIYxHdNgd%2F19BZ3wHkB47jwHhHvwBMNh4jF%2Ft5V0E52n%2BHfztgVht1c7QzURFZ5uB1nNxff1J%2BA%2FlUdxAfqlg5xKnCCcKWnCaUKXQsgKfECCt5pwUL0UYcK7oPK3nEhF50BbEL7T0rPvR85tl6kJxHPv0g%2ByM9jexFqg7ayYXZXk8mALz0SIZ9t8bxKfXHCha8SQOJEi2E9y7764GM1fT5nT6zmK1dGtafU9dVUdyb7m1NTypmpCLZvz2BpbBaQSE7ARPM231ouDvzOQ%2FBIE1chSjeyhpzkHkhAZF6DowOcM93xoY0L%2BDu025ept0nPxDsvlmWNkv45NW57SwKXhqQOP2PlYcB4w9funyQY6pgHiBPrMlaNEwqUiQp5jv1WHXmdxZwP6TyTUJ5hLQGdLar5ebkRVQ4t3MuztU8sF%2Bfrja3wrUHG0%2BK0y4A5DVakdM3R6MnPiOaHwG7JWjg1Wu8UHZSFpEjKfS38LE8dO0HfNa3RF0k3Sj26uBTEuDlfEaWvqQpSyywyRn275nocetZmfEN2LIiX543KwckPutl%2FPFVTnU1UzI2hir1x9aolSd2fwS83Q&X-Amz-Signature=22201e42b7fb234c566f8e9110df39bb72f12b841d18107c3e0fa61ffe711f4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJJOHEU%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBp7FDOU%2Br4XwXcdg1ALbQKp1M5Yz9cA0xQzdess%2FQXgAiEA5YkZL0n3Ckn4EyBohHzIsL7EU0puF9QAQiCOlEO3IMIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuJ9c4lEKlwxJAqXircA6EmfbmeordCTyKzPBJaZtSqQCdcqsMmQXue9dy5kjnYiuoA7Gcn2eswyGIKuCSxLdumBK5ZZRa5oF1PaDvZK%2FRV0dl2pk3ZnpqWX8uZC9fYbv7lVWW6d2bT4CamLaEGY9BZVRCHZW4pe7rNUSnzILCZJzWKjUG5%2FGo%2BSaF3l5NJUjFBYed%2FQNGrgMVKAP6GZk4uws6zXHOPpWkDf0R6dDOYvDhUENusxzid%2FTc21cs0v4633ud36wMtfcViT52aQk8p4DnwgdqqUYDvy%2BdSARB0VNYVnVXllkkyWCSDkEG%2BPUzLHNV5WOJjMzzBT43QDEiO%2FroSKr6e0Dzd94SoOjYTa7wWmCJdosoQPDFRXWTTmFapD0PZ3pBH6zpOg86vKJ2EWWmrJ7YcISIaf1qYj0JIMAESeTIdLzna329WlkrHnD2ro6nolbIYAGit6ynVV834S2RvARA07zK0QVGb8UPjVZ86%2Fsn1yehyeUplYRK6n8EuoFuLlOdEMHuBGRrTEYg4JDBjOoP9dOuI%2FJf%2BHtLJHntdU7AIyDeRl%2Fx11Jc9BF9cvaEunrvtsZ8cohSJNWQI4qMDrn%2B25WhmhznwVP4Udne0ZK3ub02zhdnxwBRFeoVsZcvvHb5G0WpSMO77p8kGOqUBgJ4bZNfzN%2BMq2gBBwBeOJ82iDOideXi8Byeku3oRpb8d%2BJ2DVSIk3BFShKotQASLxgdMeOve1c83CCaZWYEfiOI%2BscG5gDm29ECxkxfPttU1gJtWnIG7pAAnG%2FoXgQcM9rBsJRBBu7EOxe%2BgJzBs%2BNRnwvB33oZHGlcKo0cRyUAZvEZVAfrYt%2B%2BLkgV%2B76euVJZiUIR%2F7MSm7WM%2BOufLtxxp9lhA&X-Amz-Signature=3b24bda7922d00749b520a41d9a57dfc5e60c97320091428d812c0b67af7b70e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RDFPYJT%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm%2BLQDOXHAQth7GTBIV%2BVEUKV6t%2FDt9htgM44OayWxxwIgC%2FdQMCa0Cstc4YeCR0ItKFoBUpd568jJD0MUGyunYFIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFYvQ%2FiwytZ2U%2BIxircA3bJpQWeVzKOAp99aHy0GlFJ0TAuLZY%2FDzcFYTfG%2BaCVRDR3iokLPv3QEt0jqr6mWsyJ7wfLfA%2FDB59Y9N7AlREIG6ua8vHSsROaKQYqBlB6n3fA%2FFSKPBd8mHF6wFyLWrlPDDh%2ByfBHuaHcfsQXOPVzOM9OslbkBqWtAiRGeelNSiGJdjCz%2BrqmshwnaMQBwj9lAPzfnGPcfd9UZv4j0nJVb8fnD9BzNpuW7u%2FwNXz%2FyQ0vJF7hhRWKR4%2B7%2FS9fz6AV2zWikbhTSURCNYItE2vLBsfjA%2BSd18njV%2BMWHG4tW8i7z6KwedobdI5YJfloD4LdzAZu3r0niyeNZIIvfzUKR6sHkQ7KcVRdsZh0Lr%2Bj19d0ArHSDZm5qq0jZ2p4Ix%2BP9hGVMjTcnC47gL%2BERiWF4UqGeslVRew39YgnNpAaMkhxSzP8qyb7rw2AJZwpIQnFX4F5f0ZRYiGrtEMtHs4UFamF2enpuTcFixs88XRGYOmmVbQ8%2BFxCp5LmMpqCvU2f3kVHw9vvVVU%2BgvlUp2qRSxjpkvQTTkNHIUXWjlWQ3w4Y7fQIuOXth6zKZ3lIbZabTmgY1HyWMPcNLoBA3KnatmVvFPAv9QjRO435M3BjyYfNDxgIzyFAJANJMN3%2Bp8kGOqUBIFyTxcI3BPT7mixiV3t69vOjsfIqx9WBqRcx4tujDZJfrMdqtD5M2FZQo4L6JJT%2BegpH7W3lPO%2Fip5%2BRYDyvQ3Voq%2FYDn62%2Bp8aYQDxb4dHaR3ke0q%2Fb7teHCXKiVJlnZ%2BcM4v%2Br26v%2FsXOdIPiDiIjsiXFB71lsNuCTGWjbFFigfy72Kb22G1lbL9c3MDpr0mclthFC1%2BsUMnBSiTsZFnzLv0XA&X-Amz-Signature=9c0361dc80e4c9a9ec37797026136e25db252254c3718ca3720e7374e2416b90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRPHEWDJ%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfauZi7RH2BdkdrPnpWym0GABhTy9ItfAlunTACqatQAiAhn1BwMnRRCkdUzX%2FOiKDmhrSuPPcF0ZZmKdbg9f9mCSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEp0kcymjsqaObAQzKtwD27KgEg94Fl%2FQTqtZ1jLXC9CW4txEDmJ3AK19FbBzBh11hpERbTVbGuHeCGx4kOvcN1CzYP8jlmlqgp8XAs6G%2BsC1AYbEuUSVwsQFC55szNh%2BRwN2wuMVsHYia0APpmHDTbtb3r0OFVd8xJYl3SENfEnk%2B2SWfVV8nlvaThnhL5fDRUnxtX6WoM3COpd%2BGGwFQo4E8tEEQ2qx6Qvz4rKh%2B8maPhC9uO6FOAbb5GRCixnjoXN5WcDp6CG8OVKECzekH5%2FCvfq%2BWaUt12KDkrw7DwupZKPmXHtReNhL0gNWB3gYvpPO7IuN0bg4h6E4SAZdsdw7%2FPxDL0s9rtf21kuOPcezs3j32LoGN3oiQTvO4PdOZSWl6Wa47MsT1NMVnyZB11tPoonl1qfKIji14ELeXUnNJbX087e2T7kRY7ig84%2Bxt8QYGD4Mpf%2BxA0HiH%2Fhts%2BXAFmyQI6VR05Zy5jSAm2i8wrIfrK5l9pN8KxD%2BoCqlSn2Lus7%2BqDKnSDKdVuj1ObpNL5B19M%2FF2hb%2Bg6%2B5X4CJwN83c23t7siDYCnL%2B%2BOCrJZAsNb3g%2F6vppy4OVMFKVE9R06pdWI%2BY1ol2rtWaMn6h%2FH%2BiTmJVHE70japKimemjPYmgXEJRJ38DowuvanyQY6pgFQlDR8DJshXUhvcdikEVKiJFUeuh1EiVSkrMQxPcntVaaOGPP15L3HlsMAv7ZkfdvOxYmlHa0rBX1RJUfXRNCGzFO1owtWE8CGu4WEaMXE2B9Ilodd5Pnremoodt%2FQS5O5TFdIXtogd5xNDoIyrxxmv2KJdcDJnw9Jbp0hQCdBPp3fNy2kRyaRWUb3%2FxlNTcHaI44TUmcHSRC1YnXKrarciXg0UYoZ&X-Amz-Signature=2026af18a0c65776e912199464654dc44b606f863f3318d47c6da2a347b5034b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUYE4TQX%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6vhbW9zMa6auOyfhRXiL%2BduxvGynIVxk7H98FMXA2LwIhANCNQzf%2FFFSF9xWCtmQWBQivPzIEdCZSXWH2Pxd4%2FHTvKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxptNGM1iaYqSzRe6Uq3AOr4TrTtFva5Pdm6ApQY12NjP%2B03x0f7zxmn%2BunQ0zfRpauV1%2FEspZnSU8MRejg%2FcIJnD%2FnTy5sawYmi%2FlWwWvumCUbnekhARYCrnAPGeEa2PcoS35lxc0Tk5mOkhkIZ67xOOI6H0sAZ3drP89gLzIRp2ESbawqn%2FfFUcCljlASCaTw%2FWa%2BL%2Bs2OmF8igvaik5za56jTYsTOLADoT3syP85QCcygRiEjmwmKKXYZGonuTouQATTlEA2%2Ffg8laJV6P8VDsZqfYlWx4nEiQVlDNMyRTQj4SU%2B1%2F0%2BXcRi%2FQWWmGOBNcLrnlwL6cBYMnOro6Qe8FzPMDoi1e5UmeSlPSKi1lK0DtXE2AGLLDaGgA5ZHnJwzVFtJffiSPX82lqJ7jNTqAMypdKQGLTHpM88sTuU5b%2FenG1iTtsaXF6wmEfuHZ%2FD5kXwW%2BJ51MhagAf3tZsKPWs76phKqiagAFUuoSAJx8ELcjFd%2FAOARauKvKeor4bBJR%2F6%2FwHKfYBwTVRuE3LIj0JvWA4n1b8a5QXgXXXQGegFRjwYjYTKsOjaH%2B%2FVU50dcxi1oLdCzrQ9V1p2M5zb52x290GHj50DaomdaTkTJSkAaJTDyhvQ3k%2BLxJlpZWpRa2NjfFbCuusOlDD0%2BqfJBjqkAX3iivjHo6Ni%2FZP1CLz7ukS55sg%2B4Ow%2FDWNBJC21smdXk%2F0e15MXsmUBn4KNBDFHSN%2FQchs32u6G8TbBvZnlTJqVhvaBJ7KM%2Fp5myz5dMpOAHErrQtzubXlprv%2BV74AlJztojpuqp7kw%2BAA8fKotzPaDVYqpNw8T1FproVyk0b0lKEaMbdVQUwb%2F5ZdpZ4tqJc2bwg2IO7r%2B64hJFld%2BcJffI%2FdG&X-Amz-Signature=bc9c7dca73238a3db2f4b258d42e5946aae4f9db33af0b292e44d9ddbc729e53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJJOHEU%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBp7FDOU%2Br4XwXcdg1ALbQKp1M5Yz9cA0xQzdess%2FQXgAiEA5YkZL0n3Ckn4EyBohHzIsL7EU0puF9QAQiCOlEO3IMIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuJ9c4lEKlwxJAqXircA6EmfbmeordCTyKzPBJaZtSqQCdcqsMmQXue9dy5kjnYiuoA7Gcn2eswyGIKuCSxLdumBK5ZZRa5oF1PaDvZK%2FRV0dl2pk3ZnpqWX8uZC9fYbv7lVWW6d2bT4CamLaEGY9BZVRCHZW4pe7rNUSnzILCZJzWKjUG5%2FGo%2BSaF3l5NJUjFBYed%2FQNGrgMVKAP6GZk4uws6zXHOPpWkDf0R6dDOYvDhUENusxzid%2FTc21cs0v4633ud36wMtfcViT52aQk8p4DnwgdqqUYDvy%2BdSARB0VNYVnVXllkkyWCSDkEG%2BPUzLHNV5WOJjMzzBT43QDEiO%2FroSKr6e0Dzd94SoOjYTa7wWmCJdosoQPDFRXWTTmFapD0PZ3pBH6zpOg86vKJ2EWWmrJ7YcISIaf1qYj0JIMAESeTIdLzna329WlkrHnD2ro6nolbIYAGit6ynVV834S2RvARA07zK0QVGb8UPjVZ86%2Fsn1yehyeUplYRK6n8EuoFuLlOdEMHuBGRrTEYg4JDBjOoP9dOuI%2FJf%2BHtLJHntdU7AIyDeRl%2Fx11Jc9BF9cvaEunrvtsZ8cohSJNWQI4qMDrn%2B25WhmhznwVP4Udne0ZK3ub02zhdnxwBRFeoVsZcvvHb5G0WpSMO77p8kGOqUBgJ4bZNfzN%2BMq2gBBwBeOJ82iDOideXi8Byeku3oRpb8d%2BJ2DVSIk3BFShKotQASLxgdMeOve1c83CCaZWYEfiOI%2BscG5gDm29ECxkxfPttU1gJtWnIG7pAAnG%2FoXgQcM9rBsJRBBu7EOxe%2BgJzBs%2BNRnwvB33oZHGlcKo0cRyUAZvEZVAfrYt%2B%2BLkgV%2B76euVJZiUIR%2F7MSm7WM%2BOufLtxxp9lhA&X-Amz-Signature=fe0b68aab30cf91d2e7a3ece19c46a5bba82aa07bafd6ae116c953befc803f4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJJOHEU%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBp7FDOU%2Br4XwXcdg1ALbQKp1M5Yz9cA0xQzdess%2FQXgAiEA5YkZL0n3Ckn4EyBohHzIsL7EU0puF9QAQiCOlEO3IMIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuJ9c4lEKlwxJAqXircA6EmfbmeordCTyKzPBJaZtSqQCdcqsMmQXue9dy5kjnYiuoA7Gcn2eswyGIKuCSxLdumBK5ZZRa5oF1PaDvZK%2FRV0dl2pk3ZnpqWX8uZC9fYbv7lVWW6d2bT4CamLaEGY9BZVRCHZW4pe7rNUSnzILCZJzWKjUG5%2FGo%2BSaF3l5NJUjFBYed%2FQNGrgMVKAP6GZk4uws6zXHOPpWkDf0R6dDOYvDhUENusxzid%2FTc21cs0v4633ud36wMtfcViT52aQk8p4DnwgdqqUYDvy%2BdSARB0VNYVnVXllkkyWCSDkEG%2BPUzLHNV5WOJjMzzBT43QDEiO%2FroSKr6e0Dzd94SoOjYTa7wWmCJdosoQPDFRXWTTmFapD0PZ3pBH6zpOg86vKJ2EWWmrJ7YcISIaf1qYj0JIMAESeTIdLzna329WlkrHnD2ro6nolbIYAGit6ynVV834S2RvARA07zK0QVGb8UPjVZ86%2Fsn1yehyeUplYRK6n8EuoFuLlOdEMHuBGRrTEYg4JDBjOoP9dOuI%2FJf%2BHtLJHntdU7AIyDeRl%2Fx11Jc9BF9cvaEunrvtsZ8cohSJNWQI4qMDrn%2B25WhmhznwVP4Udne0ZK3ub02zhdnxwBRFeoVsZcvvHb5G0WpSMO77p8kGOqUBgJ4bZNfzN%2BMq2gBBwBeOJ82iDOideXi8Byeku3oRpb8d%2BJ2DVSIk3BFShKotQASLxgdMeOve1c83CCaZWYEfiOI%2BscG5gDm29ECxkxfPttU1gJtWnIG7pAAnG%2FoXgQcM9rBsJRBBu7EOxe%2BgJzBs%2BNRnwvB33oZHGlcKo0cRyUAZvEZVAfrYt%2B%2BLkgV%2B76euVJZiUIR%2F7MSm7WM%2BOufLtxxp9lhA&X-Amz-Signature=c6516d956da97ab466ea4bea1724cea094f8027c6574308df5a3effa01fb8903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQO5GKQJ%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEcuK%2BGGMNToSCpErZeRGnlPgAmQamM9V%2Fd5UyDkEHogIhAN6HP4gU8uSijd1IANbY1EEkVsP1jGj5ibC14RhvRCFqKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0h4z%2F8TbmzFaY5BYq3ANNr0Hgyc5kJDikQwMNuVocjlpJCSshnFAZ3g2W9%2BXdAjAuHeG%2FpIPIfTaBcWZLhbRCsjYaeZkf6EZyywETxdlaJaBqULVbcVllJx4lOb%2F6d2wTJEGiVQR%2BkjFJC1n49Bh4e82qpgT4egExRLwJL1jdXA8yjs%2BgA1JD5Y2xGWoApiIlMVbnRQQw5eIXshwdOdBuCl7vRsi6u3d17X3VS70KTxnq%2BBfjiaoHIhJ6EI5OPjozddGfm2CuHWUTMbjBhv9Ev7WzlVTKbPSDNF2zKs3Xp1Xh%2FYWrfCTHuWkIGb7XTz3HYfehCL5aI5LMpr49Bkg%2F%2FH7fEjXi%2FvihFCGpxvI%2FsXMPEMlxVVE1sQOL8WpMAPwbQtlaAf%2FHWX7DjaVuCqPMjts2XOuOuYsNp1L%2FM9%2BXarJ31NrCbNAhybtOxKS0IqrVs1P68U%2BEeWQEFTCkT5zItZ2%2FN%2BQnzd%2BFItX%2BNrSBX%2BwlcQHDgeWlbLSOqXNa9R8eRFQEwaiIHW94d4M7P0P6a%2BEkP6v3PDRheSVBhGbDoVuE2JES4idH5pTV%2FPuXwt%2FogUVKrJaBtJDD0S%2FsPMnN%2F4%2B9xRATzebD9XbK9DfqsK0d5VB4e3QFnqZMKk5TLk2cTalLEp1R3IarLjDP96fJBjqkAbatnNIHEFVmpMij165IXspYnWmPuMh4U7PCWf7TPjXCLSlPna4EHXugrOsX9f3a4qAlPHPVjFyEs%2Bo6UyVeZSugeCvNCUfQacYxP6oSMCnZJVvEEA9p90efj0vMBgM7skMSW4cv3nUE6I7cZZb6Uuqx0IkDfWmQkSfJYQ8Lj7stiJr5PCDCoiV75yme%2Bnm9vqDhQn5PIORjfSiEarIymXd1RVnf&X-Amz-Signature=d5d1954c5b60ce0f6616f850b306c9d4a0163d8798255ca6df0a141bfcb3b40b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQO5GKQJ%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEcuK%2BGGMNToSCpErZeRGnlPgAmQamM9V%2Fd5UyDkEHogIhAN6HP4gU8uSijd1IANbY1EEkVsP1jGj5ibC14RhvRCFqKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0h4z%2F8TbmzFaY5BYq3ANNr0Hgyc5kJDikQwMNuVocjlpJCSshnFAZ3g2W9%2BXdAjAuHeG%2FpIPIfTaBcWZLhbRCsjYaeZkf6EZyywETxdlaJaBqULVbcVllJx4lOb%2F6d2wTJEGiVQR%2BkjFJC1n49Bh4e82qpgT4egExRLwJL1jdXA8yjs%2BgA1JD5Y2xGWoApiIlMVbnRQQw5eIXshwdOdBuCl7vRsi6u3d17X3VS70KTxnq%2BBfjiaoHIhJ6EI5OPjozddGfm2CuHWUTMbjBhv9Ev7WzlVTKbPSDNF2zKs3Xp1Xh%2FYWrfCTHuWkIGb7XTz3HYfehCL5aI5LMpr49Bkg%2F%2FH7fEjXi%2FvihFCGpxvI%2FsXMPEMlxVVE1sQOL8WpMAPwbQtlaAf%2FHWX7DjaVuCqPMjts2XOuOuYsNp1L%2FM9%2BXarJ31NrCbNAhybtOxKS0IqrVs1P68U%2BEeWQEFTCkT5zItZ2%2FN%2BQnzd%2BFItX%2BNrSBX%2BwlcQHDgeWlbLSOqXNa9R8eRFQEwaiIHW94d4M7P0P6a%2BEkP6v3PDRheSVBhGbDoVuE2JES4idH5pTV%2FPuXwt%2FogUVKrJaBtJDD0S%2FsPMnN%2F4%2B9xRATzebD9XbK9DfqsK0d5VB4e3QFnqZMKk5TLk2cTalLEp1R3IarLjDP96fJBjqkAbatnNIHEFVmpMij165IXspYnWmPuMh4U7PCWf7TPjXCLSlPna4EHXugrOsX9f3a4qAlPHPVjFyEs%2Bo6UyVeZSugeCvNCUfQacYxP6oSMCnZJVvEEA9p90efj0vMBgM7skMSW4cv3nUE6I7cZZb6Uuqx0IkDfWmQkSfJYQ8Lj7stiJr5PCDCoiV75yme%2Bnm9vqDhQn5PIORjfSiEarIymXd1RVnf&X-Amz-Signature=2732caeaad983d729dc4e2a39e752ddf416db018de7e0261bd6061723bad20ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQO5GKQJ%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEcuK%2BGGMNToSCpErZeRGnlPgAmQamM9V%2Fd5UyDkEHogIhAN6HP4gU8uSijd1IANbY1EEkVsP1jGj5ibC14RhvRCFqKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0h4z%2F8TbmzFaY5BYq3ANNr0Hgyc5kJDikQwMNuVocjlpJCSshnFAZ3g2W9%2BXdAjAuHeG%2FpIPIfTaBcWZLhbRCsjYaeZkf6EZyywETxdlaJaBqULVbcVllJx4lOb%2F6d2wTJEGiVQR%2BkjFJC1n49Bh4e82qpgT4egExRLwJL1jdXA8yjs%2BgA1JD5Y2xGWoApiIlMVbnRQQw5eIXshwdOdBuCl7vRsi6u3d17X3VS70KTxnq%2BBfjiaoHIhJ6EI5OPjozddGfm2CuHWUTMbjBhv9Ev7WzlVTKbPSDNF2zKs3Xp1Xh%2FYWrfCTHuWkIGb7XTz3HYfehCL5aI5LMpr49Bkg%2F%2FH7fEjXi%2FvihFCGpxvI%2FsXMPEMlxVVE1sQOL8WpMAPwbQtlaAf%2FHWX7DjaVuCqPMjts2XOuOuYsNp1L%2FM9%2BXarJ31NrCbNAhybtOxKS0IqrVs1P68U%2BEeWQEFTCkT5zItZ2%2FN%2BQnzd%2BFItX%2BNrSBX%2BwlcQHDgeWlbLSOqXNa9R8eRFQEwaiIHW94d4M7P0P6a%2BEkP6v3PDRheSVBhGbDoVuE2JES4idH5pTV%2FPuXwt%2FogUVKrJaBtJDD0S%2FsPMnN%2F4%2B9xRATzebD9XbK9DfqsK0d5VB4e3QFnqZMKk5TLk2cTalLEp1R3IarLjDP96fJBjqkAbatnNIHEFVmpMij165IXspYnWmPuMh4U7PCWf7TPjXCLSlPna4EHXugrOsX9f3a4qAlPHPVjFyEs%2Bo6UyVeZSugeCvNCUfQacYxP6oSMCnZJVvEEA9p90efj0vMBgM7skMSW4cv3nUE6I7cZZb6Uuqx0IkDfWmQkSfJYQ8Lj7stiJr5PCDCoiV75yme%2Bnm9vqDhQn5PIORjfSiEarIymXd1RVnf&X-Amz-Signature=14ae6526360999a6828759cdc6416d68f9cd5d3a7d9b6fdc7b5c290135a15a2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQO5GKQJ%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEcuK%2BGGMNToSCpErZeRGnlPgAmQamM9V%2Fd5UyDkEHogIhAN6HP4gU8uSijd1IANbY1EEkVsP1jGj5ibC14RhvRCFqKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0h4z%2F8TbmzFaY5BYq3ANNr0Hgyc5kJDikQwMNuVocjlpJCSshnFAZ3g2W9%2BXdAjAuHeG%2FpIPIfTaBcWZLhbRCsjYaeZkf6EZyywETxdlaJaBqULVbcVllJx4lOb%2F6d2wTJEGiVQR%2BkjFJC1n49Bh4e82qpgT4egExRLwJL1jdXA8yjs%2BgA1JD5Y2xGWoApiIlMVbnRQQw5eIXshwdOdBuCl7vRsi6u3d17X3VS70KTxnq%2BBfjiaoHIhJ6EI5OPjozddGfm2CuHWUTMbjBhv9Ev7WzlVTKbPSDNF2zKs3Xp1Xh%2FYWrfCTHuWkIGb7XTz3HYfehCL5aI5LMpr49Bkg%2F%2FH7fEjXi%2FvihFCGpxvI%2FsXMPEMlxVVE1sQOL8WpMAPwbQtlaAf%2FHWX7DjaVuCqPMjts2XOuOuYsNp1L%2FM9%2BXarJ31NrCbNAhybtOxKS0IqrVs1P68U%2BEeWQEFTCkT5zItZ2%2FN%2BQnzd%2BFItX%2BNrSBX%2BwlcQHDgeWlbLSOqXNa9R8eRFQEwaiIHW94d4M7P0P6a%2BEkP6v3PDRheSVBhGbDoVuE2JES4idH5pTV%2FPuXwt%2FogUVKrJaBtJDD0S%2FsPMnN%2F4%2B9xRATzebD9XbK9DfqsK0d5VB4e3QFnqZMKk5TLk2cTalLEp1R3IarLjDP96fJBjqkAbatnNIHEFVmpMij165IXspYnWmPuMh4U7PCWf7TPjXCLSlPna4EHXugrOsX9f3a4qAlPHPVjFyEs%2Bo6UyVeZSugeCvNCUfQacYxP6oSMCnZJVvEEA9p90efj0vMBgM7skMSW4cv3nUE6I7cZZb6Uuqx0IkDfWmQkSfJYQ8Lj7stiJr5PCDCoiV75yme%2Bnm9vqDhQn5PIORjfSiEarIymXd1RVnf&X-Amz-Signature=a6d6e90f7d9fdad1a601771f8a88ea74c53336b62f82bbbcf5e7be775b75c2a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H3ZSNRC%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T013003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzER0EydU07EnbWf7yMczg%2FCGn10w3gj73r%2BdBnrky%2FwIhAOkjry9jHnpTUsN6f6csyYRViMQpimdxGCrFP0RTmVA%2FKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igycl7ki3JbyavLPxNoq3ANmeT6PcNTPkZ0hrlEO8nOctJa7Fy4wc0m%2F%2BTzg%2F4Trato82M7i2%2BYV3ZckCbRTj3fmBGkwOK90q7RJBjGA%2FIb08p1pgIg92O1HRwSqwm%2FlW5m8OQ%2Ba3t9gjt6LskHo3jIouBP0M1WPC2NwHBO0sV%2BHRzTbFM2nOnSO3Jk3Tc34QI3ZIB82VQEB25rdA23ljJAMt1y11d5PxGqzTnOMoSgr1SSERwwDA7tBY7X6nTCGIPD5a3wEWrazOAE16%2BTdBJIfsrmcChY6W7OJ2Lg2Nc%2FJJlQMIhErNsMpamBwnuO5vgyBRO4kh4SHTQJ8a6m9SO6X42n%2BBKgxXDd1OCqc55vDfvDbET43b%2FKsyN%2BJLZ8J8CRjMFATVUVcX02QK%2FwY2gq3y0riB8efq6tCG8PYost56eJgU8lMWTwMeFLepWfPCArmDO1e4jXbhdQigmhNf1FO5RJPauL0TalA8FQFWXb1R2v12HHWDWrNCDWuoI1eRRqLdwa5MwBW7hNhD0WurSsM8pMPRM3yAi87f%2Bjvc6jmhwREnjw9wWC%2BEBtnBufwxxlyZpNZkdjsjRkqPkJHPCYqWo0F%2BrpBhvucWc4eG5C2kvQjrqHpRJI8yhg9QV8w6kxsNhij9cW9VsZz4zCH%2F6fJBjqkASNE8dR3ByEGahIevHiPwEX7moPuuBkS3n6aDi95A2SQJo7WPbLRG7710n9BD7o95gzT102AftNUJRBUYAsvajE5wX3Fm7XR%2ByB8F%2F5pwEs2wjxqtksCkoJn4jP1y7v6khILmq1WwIXFKeSySHVlTWnTzY7ESnc28V9M0RkwO5V%2BmFDr29UjfHAZdqCPf4%2BryXoqFuLusmnQND96lBQ17nGl%2BDBm&X-Amz-Signature=0ce4ff86e54b2122054be7ad7980aacf901ed6d531a8fc0c49f33b84b9fa1278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQO5GKQJ%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEcuK%2BGGMNToSCpErZeRGnlPgAmQamM9V%2Fd5UyDkEHogIhAN6HP4gU8uSijd1IANbY1EEkVsP1jGj5ibC14RhvRCFqKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0h4z%2F8TbmzFaY5BYq3ANNr0Hgyc5kJDikQwMNuVocjlpJCSshnFAZ3g2W9%2BXdAjAuHeG%2FpIPIfTaBcWZLhbRCsjYaeZkf6EZyywETxdlaJaBqULVbcVllJx4lOb%2F6d2wTJEGiVQR%2BkjFJC1n49Bh4e82qpgT4egExRLwJL1jdXA8yjs%2BgA1JD5Y2xGWoApiIlMVbnRQQw5eIXshwdOdBuCl7vRsi6u3d17X3VS70KTxnq%2BBfjiaoHIhJ6EI5OPjozddGfm2CuHWUTMbjBhv9Ev7WzlVTKbPSDNF2zKs3Xp1Xh%2FYWrfCTHuWkIGb7XTz3HYfehCL5aI5LMpr49Bkg%2F%2FH7fEjXi%2FvihFCGpxvI%2FsXMPEMlxVVE1sQOL8WpMAPwbQtlaAf%2FHWX7DjaVuCqPMjts2XOuOuYsNp1L%2FM9%2BXarJ31NrCbNAhybtOxKS0IqrVs1P68U%2BEeWQEFTCkT5zItZ2%2FN%2BQnzd%2BFItX%2BNrSBX%2BwlcQHDgeWlbLSOqXNa9R8eRFQEwaiIHW94d4M7P0P6a%2BEkP6v3PDRheSVBhGbDoVuE2JES4idH5pTV%2FPuXwt%2FogUVKrJaBtJDD0S%2FsPMnN%2F4%2B9xRATzebD9XbK9DfqsK0d5VB4e3QFnqZMKk5TLk2cTalLEp1R3IarLjDP96fJBjqkAbatnNIHEFVmpMij165IXspYnWmPuMh4U7PCWf7TPjXCLSlPna4EHXugrOsX9f3a4qAlPHPVjFyEs%2Bo6UyVeZSugeCvNCUfQacYxP6oSMCnZJVvEEA9p90efj0vMBgM7skMSW4cv3nUE6I7cZZb6Uuqx0IkDfWmQkSfJYQ8Lj7stiJr5PCDCoiV75yme%2Bnm9vqDhQn5PIORjfSiEarIymXd1RVnf&X-Amz-Signature=f216c797ef9ac9e2f7a8b2a601d34160ec025e1285f1f6984e9f9c937f57eb49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQO5GKQJ%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEcuK%2BGGMNToSCpErZeRGnlPgAmQamM9V%2Fd5UyDkEHogIhAN6HP4gU8uSijd1IANbY1EEkVsP1jGj5ibC14RhvRCFqKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0h4z%2F8TbmzFaY5BYq3ANNr0Hgyc5kJDikQwMNuVocjlpJCSshnFAZ3g2W9%2BXdAjAuHeG%2FpIPIfTaBcWZLhbRCsjYaeZkf6EZyywETxdlaJaBqULVbcVllJx4lOb%2F6d2wTJEGiVQR%2BkjFJC1n49Bh4e82qpgT4egExRLwJL1jdXA8yjs%2BgA1JD5Y2xGWoApiIlMVbnRQQw5eIXshwdOdBuCl7vRsi6u3d17X3VS70KTxnq%2BBfjiaoHIhJ6EI5OPjozddGfm2CuHWUTMbjBhv9Ev7WzlVTKbPSDNF2zKs3Xp1Xh%2FYWrfCTHuWkIGb7XTz3HYfehCL5aI5LMpr49Bkg%2F%2FH7fEjXi%2FvihFCGpxvI%2FsXMPEMlxVVE1sQOL8WpMAPwbQtlaAf%2FHWX7DjaVuCqPMjts2XOuOuYsNp1L%2FM9%2BXarJ31NrCbNAhybtOxKS0IqrVs1P68U%2BEeWQEFTCkT5zItZ2%2FN%2BQnzd%2BFItX%2BNrSBX%2BwlcQHDgeWlbLSOqXNa9R8eRFQEwaiIHW94d4M7P0P6a%2BEkP6v3PDRheSVBhGbDoVuE2JES4idH5pTV%2FPuXwt%2FogUVKrJaBtJDD0S%2FsPMnN%2F4%2B9xRATzebD9XbK9DfqsK0d5VB4e3QFnqZMKk5TLk2cTalLEp1R3IarLjDP96fJBjqkAbatnNIHEFVmpMij165IXspYnWmPuMh4U7PCWf7TPjXCLSlPna4EHXugrOsX9f3a4qAlPHPVjFyEs%2Bo6UyVeZSugeCvNCUfQacYxP6oSMCnZJVvEEA9p90efj0vMBgM7skMSW4cv3nUE6I7cZZb6Uuqx0IkDfWmQkSfJYQ8Lj7stiJr5PCDCoiV75yme%2Bnm9vqDhQn5PIORjfSiEarIymXd1RVnf&X-Amz-Signature=ce38d5c06ea7c013b2d7f726af5dcb4596d56dd0b8a6870b668654779a1eb4e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQO5GKQJ%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEcuK%2BGGMNToSCpErZeRGnlPgAmQamM9V%2Fd5UyDkEHogIhAN6HP4gU8uSijd1IANbY1EEkVsP1jGj5ibC14RhvRCFqKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0h4z%2F8TbmzFaY5BYq3ANNr0Hgyc5kJDikQwMNuVocjlpJCSshnFAZ3g2W9%2BXdAjAuHeG%2FpIPIfTaBcWZLhbRCsjYaeZkf6EZyywETxdlaJaBqULVbcVllJx4lOb%2F6d2wTJEGiVQR%2BkjFJC1n49Bh4e82qpgT4egExRLwJL1jdXA8yjs%2BgA1JD5Y2xGWoApiIlMVbnRQQw5eIXshwdOdBuCl7vRsi6u3d17X3VS70KTxnq%2BBfjiaoHIhJ6EI5OPjozddGfm2CuHWUTMbjBhv9Ev7WzlVTKbPSDNF2zKs3Xp1Xh%2FYWrfCTHuWkIGb7XTz3HYfehCL5aI5LMpr49Bkg%2F%2FH7fEjXi%2FvihFCGpxvI%2FsXMPEMlxVVE1sQOL8WpMAPwbQtlaAf%2FHWX7DjaVuCqPMjts2XOuOuYsNp1L%2FM9%2BXarJ31NrCbNAhybtOxKS0IqrVs1P68U%2BEeWQEFTCkT5zItZ2%2FN%2BQnzd%2BFItX%2BNrSBX%2BwlcQHDgeWlbLSOqXNa9R8eRFQEwaiIHW94d4M7P0P6a%2BEkP6v3PDRheSVBhGbDoVuE2JES4idH5pTV%2FPuXwt%2FogUVKrJaBtJDD0S%2FsPMnN%2F4%2B9xRATzebD9XbK9DfqsK0d5VB4e3QFnqZMKk5TLk2cTalLEp1R3IarLjDP96fJBjqkAbatnNIHEFVmpMij165IXspYnWmPuMh4U7PCWf7TPjXCLSlPna4EHXugrOsX9f3a4qAlPHPVjFyEs%2Bo6UyVeZSugeCvNCUfQacYxP6oSMCnZJVvEEA9p90efj0vMBgM7skMSW4cv3nUE6I7cZZb6Uuqx0IkDfWmQkSfJYQ8Lj7stiJr5PCDCoiV75yme%2Bnm9vqDhQn5PIORjfSiEarIymXd1RVnf&X-Amz-Signature=14ae6526360999a6828759cdc6416d68f9cd5d3a7d9b6fdc7b5c290135a15a2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQO5GKQJ%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEcuK%2BGGMNToSCpErZeRGnlPgAmQamM9V%2Fd5UyDkEHogIhAN6HP4gU8uSijd1IANbY1EEkVsP1jGj5ibC14RhvRCFqKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0h4z%2F8TbmzFaY5BYq3ANNr0Hgyc5kJDikQwMNuVocjlpJCSshnFAZ3g2W9%2BXdAjAuHeG%2FpIPIfTaBcWZLhbRCsjYaeZkf6EZyywETxdlaJaBqULVbcVllJx4lOb%2F6d2wTJEGiVQR%2BkjFJC1n49Bh4e82qpgT4egExRLwJL1jdXA8yjs%2BgA1JD5Y2xGWoApiIlMVbnRQQw5eIXshwdOdBuCl7vRsi6u3d17X3VS70KTxnq%2BBfjiaoHIhJ6EI5OPjozddGfm2CuHWUTMbjBhv9Ev7WzlVTKbPSDNF2zKs3Xp1Xh%2FYWrfCTHuWkIGb7XTz3HYfehCL5aI5LMpr49Bkg%2F%2FH7fEjXi%2FvihFCGpxvI%2FsXMPEMlxVVE1sQOL8WpMAPwbQtlaAf%2FHWX7DjaVuCqPMjts2XOuOuYsNp1L%2FM9%2BXarJ31NrCbNAhybtOxKS0IqrVs1P68U%2BEeWQEFTCkT5zItZ2%2FN%2BQnzd%2BFItX%2BNrSBX%2BwlcQHDgeWlbLSOqXNa9R8eRFQEwaiIHW94d4M7P0P6a%2BEkP6v3PDRheSVBhGbDoVuE2JES4idH5pTV%2FPuXwt%2FogUVKrJaBtJDD0S%2FsPMnN%2F4%2B9xRATzebD9XbK9DfqsK0d5VB4e3QFnqZMKk5TLk2cTalLEp1R3IarLjDP96fJBjqkAbatnNIHEFVmpMij165IXspYnWmPuMh4U7PCWf7TPjXCLSlPna4EHXugrOsX9f3a4qAlPHPVjFyEs%2Bo6UyVeZSugeCvNCUfQacYxP6oSMCnZJVvEEA9p90efj0vMBgM7skMSW4cv3nUE6I7cZZb6Uuqx0IkDfWmQkSfJYQ8Lj7stiJr5PCDCoiV75yme%2Bnm9vqDhQn5PIORjfSiEarIymXd1RVnf&X-Amz-Signature=132957eeef927ed31d6463507a260b0d23dc1fbe0868d6f5dacd90d16660c2e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQO5GKQJ%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEcuK%2BGGMNToSCpErZeRGnlPgAmQamM9V%2Fd5UyDkEHogIhAN6HP4gU8uSijd1IANbY1EEkVsP1jGj5ibC14RhvRCFqKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0h4z%2F8TbmzFaY5BYq3ANNr0Hgyc5kJDikQwMNuVocjlpJCSshnFAZ3g2W9%2BXdAjAuHeG%2FpIPIfTaBcWZLhbRCsjYaeZkf6EZyywETxdlaJaBqULVbcVllJx4lOb%2F6d2wTJEGiVQR%2BkjFJC1n49Bh4e82qpgT4egExRLwJL1jdXA8yjs%2BgA1JD5Y2xGWoApiIlMVbnRQQw5eIXshwdOdBuCl7vRsi6u3d17X3VS70KTxnq%2BBfjiaoHIhJ6EI5OPjozddGfm2CuHWUTMbjBhv9Ev7WzlVTKbPSDNF2zKs3Xp1Xh%2FYWrfCTHuWkIGb7XTz3HYfehCL5aI5LMpr49Bkg%2F%2FH7fEjXi%2FvihFCGpxvI%2FsXMPEMlxVVE1sQOL8WpMAPwbQtlaAf%2FHWX7DjaVuCqPMjts2XOuOuYsNp1L%2FM9%2BXarJ31NrCbNAhybtOxKS0IqrVs1P68U%2BEeWQEFTCkT5zItZ2%2FN%2BQnzd%2BFItX%2BNrSBX%2BwlcQHDgeWlbLSOqXNa9R8eRFQEwaiIHW94d4M7P0P6a%2BEkP6v3PDRheSVBhGbDoVuE2JES4idH5pTV%2FPuXwt%2FogUVKrJaBtJDD0S%2FsPMnN%2F4%2B9xRATzebD9XbK9DfqsK0d5VB4e3QFnqZMKk5TLk2cTalLEp1R3IarLjDP96fJBjqkAbatnNIHEFVmpMij165IXspYnWmPuMh4U7PCWf7TPjXCLSlPna4EHXugrOsX9f3a4qAlPHPVjFyEs%2Bo6UyVeZSugeCvNCUfQacYxP6oSMCnZJVvEEA9p90efj0vMBgM7skMSW4cv3nUE6I7cZZb6Uuqx0IkDfWmQkSfJYQ8Lj7stiJr5PCDCoiV75yme%2Bnm9vqDhQn5PIORjfSiEarIymXd1RVnf&X-Amz-Signature=ff325af557fa544d281e0524a76620cf7adf3632898550503f3782ccd5ab2b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQO5GKQJ%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEcuK%2BGGMNToSCpErZeRGnlPgAmQamM9V%2Fd5UyDkEHogIhAN6HP4gU8uSijd1IANbY1EEkVsP1jGj5ibC14RhvRCFqKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0h4z%2F8TbmzFaY5BYq3ANNr0Hgyc5kJDikQwMNuVocjlpJCSshnFAZ3g2W9%2BXdAjAuHeG%2FpIPIfTaBcWZLhbRCsjYaeZkf6EZyywETxdlaJaBqULVbcVllJx4lOb%2F6d2wTJEGiVQR%2BkjFJC1n49Bh4e82qpgT4egExRLwJL1jdXA8yjs%2BgA1JD5Y2xGWoApiIlMVbnRQQw5eIXshwdOdBuCl7vRsi6u3d17X3VS70KTxnq%2BBfjiaoHIhJ6EI5OPjozddGfm2CuHWUTMbjBhv9Ev7WzlVTKbPSDNF2zKs3Xp1Xh%2FYWrfCTHuWkIGb7XTz3HYfehCL5aI5LMpr49Bkg%2F%2FH7fEjXi%2FvihFCGpxvI%2FsXMPEMlxVVE1sQOL8WpMAPwbQtlaAf%2FHWX7DjaVuCqPMjts2XOuOuYsNp1L%2FM9%2BXarJ31NrCbNAhybtOxKS0IqrVs1P68U%2BEeWQEFTCkT5zItZ2%2FN%2BQnzd%2BFItX%2BNrSBX%2BwlcQHDgeWlbLSOqXNa9R8eRFQEwaiIHW94d4M7P0P6a%2BEkP6v3PDRheSVBhGbDoVuE2JES4idH5pTV%2FPuXwt%2FogUVKrJaBtJDD0S%2FsPMnN%2F4%2B9xRATzebD9XbK9DfqsK0d5VB4e3QFnqZMKk5TLk2cTalLEp1R3IarLjDP96fJBjqkAbatnNIHEFVmpMij165IXspYnWmPuMh4U7PCWf7TPjXCLSlPna4EHXugrOsX9f3a4qAlPHPVjFyEs%2Bo6UyVeZSugeCvNCUfQacYxP6oSMCnZJVvEEA9p90efj0vMBgM7skMSW4cv3nUE6I7cZZb6Uuqx0IkDfWmQkSfJYQ8Lj7stiJr5PCDCoiV75yme%2Bnm9vqDhQn5PIORjfSiEarIymXd1RVnf&X-Amz-Signature=54029006811f6e31d9c3b8f51414bf61f287791bdaea46a18bcb33472f9a05cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


