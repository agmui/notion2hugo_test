---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-16T13:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-16T13:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AU2AJZT%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBQ49Y%2BeTtL5Oy71YHkA2CxYpSD17xS8GXh2hN2zXgUEAiAqTYLwBJvKePhCF%2BFQqS0WG06fzRTjCiZBmmEqfkhinCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpIAHIX7kUwO96SokKtwDnGgGGF7IoPQwWTwG%2BNG9hg4d9Jg9856ZplmJ7L%2F3enLmANqgSGzAgHfPRU45ApWnrMxgWGL1%2FvFMd4FTNh7jitjzckRlKAp8Vmikx9OHe3aWgQPJp%2FOo9h7eNU7xmJ4rPeKF2J8%2FPSjBmfhHaZMAOQa0fY5Xt0wK9Wg00CbH1tjOAdMP7Dp4bicefZgV75qI3I8fTLjL48je8zqTNG%2Ff3mjNzs8yN8OKz6AHSJZidxx8tXtqW%2BLl3FaHsVYsgtleXkqdrP2DajaRGGPMSrZer%2FPuDO79CcFIv65qkyus2rj5mr8BkLhvAnoDOm1pfB%2ByS4KRSSyXY03Y6N5RoXA%2FVke%2FWeJ0O7j72rwNMoGPRSqwJ82SAd0F1839j1XwatqTdgpLQV4DpAPHIq8JZS%2FXd5k0PE6mcEBuLRxZ3lIX4sFBu%2FYUx%2Fjrx8maVhpkYoq1l4t5KYb4M2dUL%2Fo1yFdicdSeSkBg%2BLWsMP1sUbJVg0NAqG91zvG5PgrqeHbIybpIUVkZNsQ%2BBQ3shROWXlVse68GZcnEw6m5QR9CrEbvPsvnU%2Ful10pni5pVPQnTA8K0FnUSTSHfcqYle6XeGr1nyoqle7%2Ft0nU6%2FN7g5H3OfXJRCUyPXqlqF8Xkg4Awx5yCxQY6pgF5dWszwPzMkAzkY45eVmnEC%2FDB7UL4Ubsf%2FjR7tcpzotzg2Xn4LwkkJKoRqSJbVhyfM8EbbjQVTHw%2FHi1jvANotwq%2FXb2DbRMcIZMKndKW3s7VVcEL%2FRsBkwmkfaJ5u6ow6ueSCJruHBQkmjU0%2Fvw%2BYUA8xfYTCQ2iZMecgx1M2GA%2Bg1t%2FBes9tjWS6048tGiJTKHnkQ%2BK60voX7UYHOeLpAsvf2Un&X-Amz-Signature=ebf4255b66c81d5df01e9052e9265597d59166884ed9feb6bc6500292e153f94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AU2AJZT%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBQ49Y%2BeTtL5Oy71YHkA2CxYpSD17xS8GXh2hN2zXgUEAiAqTYLwBJvKePhCF%2BFQqS0WG06fzRTjCiZBmmEqfkhinCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpIAHIX7kUwO96SokKtwDnGgGGF7IoPQwWTwG%2BNG9hg4d9Jg9856ZplmJ7L%2F3enLmANqgSGzAgHfPRU45ApWnrMxgWGL1%2FvFMd4FTNh7jitjzckRlKAp8Vmikx9OHe3aWgQPJp%2FOo9h7eNU7xmJ4rPeKF2J8%2FPSjBmfhHaZMAOQa0fY5Xt0wK9Wg00CbH1tjOAdMP7Dp4bicefZgV75qI3I8fTLjL48je8zqTNG%2Ff3mjNzs8yN8OKz6AHSJZidxx8tXtqW%2BLl3FaHsVYsgtleXkqdrP2DajaRGGPMSrZer%2FPuDO79CcFIv65qkyus2rj5mr8BkLhvAnoDOm1pfB%2ByS4KRSSyXY03Y6N5RoXA%2FVke%2FWeJ0O7j72rwNMoGPRSqwJ82SAd0F1839j1XwatqTdgpLQV4DpAPHIq8JZS%2FXd5k0PE6mcEBuLRxZ3lIX4sFBu%2FYUx%2Fjrx8maVhpkYoq1l4t5KYb4M2dUL%2Fo1yFdicdSeSkBg%2BLWsMP1sUbJVg0NAqG91zvG5PgrqeHbIybpIUVkZNsQ%2BBQ3shROWXlVse68GZcnEw6m5QR9CrEbvPsvnU%2Ful10pni5pVPQnTA8K0FnUSTSHfcqYle6XeGr1nyoqle7%2Ft0nU6%2FN7g5H3OfXJRCUyPXqlqF8Xkg4Awx5yCxQY6pgF5dWszwPzMkAzkY45eVmnEC%2FDB7UL4Ubsf%2FjR7tcpzotzg2Xn4LwkkJKoRqSJbVhyfM8EbbjQVTHw%2FHi1jvANotwq%2FXb2DbRMcIZMKndKW3s7VVcEL%2FRsBkwmkfaJ5u6ow6ueSCJruHBQkmjU0%2Fvw%2BYUA8xfYTCQ2iZMecgx1M2GA%2Bg1t%2FBes9tjWS6048tGiJTKHnkQ%2BK60voX7UYHOeLpAsvf2Un&X-Amz-Signature=7242b7f0374f2b82fbe8e00be8534aa168ec0edcafe4f8d4ff270c9905ff844b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AU2AJZT%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBQ49Y%2BeTtL5Oy71YHkA2CxYpSD17xS8GXh2hN2zXgUEAiAqTYLwBJvKePhCF%2BFQqS0WG06fzRTjCiZBmmEqfkhinCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpIAHIX7kUwO96SokKtwDnGgGGF7IoPQwWTwG%2BNG9hg4d9Jg9856ZplmJ7L%2F3enLmANqgSGzAgHfPRU45ApWnrMxgWGL1%2FvFMd4FTNh7jitjzckRlKAp8Vmikx9OHe3aWgQPJp%2FOo9h7eNU7xmJ4rPeKF2J8%2FPSjBmfhHaZMAOQa0fY5Xt0wK9Wg00CbH1tjOAdMP7Dp4bicefZgV75qI3I8fTLjL48je8zqTNG%2Ff3mjNzs8yN8OKz6AHSJZidxx8tXtqW%2BLl3FaHsVYsgtleXkqdrP2DajaRGGPMSrZer%2FPuDO79CcFIv65qkyus2rj5mr8BkLhvAnoDOm1pfB%2ByS4KRSSyXY03Y6N5RoXA%2FVke%2FWeJ0O7j72rwNMoGPRSqwJ82SAd0F1839j1XwatqTdgpLQV4DpAPHIq8JZS%2FXd5k0PE6mcEBuLRxZ3lIX4sFBu%2FYUx%2Fjrx8maVhpkYoq1l4t5KYb4M2dUL%2Fo1yFdicdSeSkBg%2BLWsMP1sUbJVg0NAqG91zvG5PgrqeHbIybpIUVkZNsQ%2BBQ3shROWXlVse68GZcnEw6m5QR9CrEbvPsvnU%2Ful10pni5pVPQnTA8K0FnUSTSHfcqYle6XeGr1nyoqle7%2Ft0nU6%2FN7g5H3OfXJRCUyPXqlqF8Xkg4Awx5yCxQY6pgF5dWszwPzMkAzkY45eVmnEC%2FDB7UL4Ubsf%2FjR7tcpzotzg2Xn4LwkkJKoRqSJbVhyfM8EbbjQVTHw%2FHi1jvANotwq%2FXb2DbRMcIZMKndKW3s7VVcEL%2FRsBkwmkfaJ5u6ow6ueSCJruHBQkmjU0%2Fvw%2BYUA8xfYTCQ2iZMecgx1M2GA%2Bg1t%2FBes9tjWS6048tGiJTKHnkQ%2BK60voX7UYHOeLpAsvf2Un&X-Amz-Signature=e118b7da1073773a9553ed73fa6108a1509a9be2423d8bcab525fa129c459493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AU2AJZT%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBQ49Y%2BeTtL5Oy71YHkA2CxYpSD17xS8GXh2hN2zXgUEAiAqTYLwBJvKePhCF%2BFQqS0WG06fzRTjCiZBmmEqfkhinCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpIAHIX7kUwO96SokKtwDnGgGGF7IoPQwWTwG%2BNG9hg4d9Jg9856ZplmJ7L%2F3enLmANqgSGzAgHfPRU45ApWnrMxgWGL1%2FvFMd4FTNh7jitjzckRlKAp8Vmikx9OHe3aWgQPJp%2FOo9h7eNU7xmJ4rPeKF2J8%2FPSjBmfhHaZMAOQa0fY5Xt0wK9Wg00CbH1tjOAdMP7Dp4bicefZgV75qI3I8fTLjL48je8zqTNG%2Ff3mjNzs8yN8OKz6AHSJZidxx8tXtqW%2BLl3FaHsVYsgtleXkqdrP2DajaRGGPMSrZer%2FPuDO79CcFIv65qkyus2rj5mr8BkLhvAnoDOm1pfB%2ByS4KRSSyXY03Y6N5RoXA%2FVke%2FWeJ0O7j72rwNMoGPRSqwJ82SAd0F1839j1XwatqTdgpLQV4DpAPHIq8JZS%2FXd5k0PE6mcEBuLRxZ3lIX4sFBu%2FYUx%2Fjrx8maVhpkYoq1l4t5KYb4M2dUL%2Fo1yFdicdSeSkBg%2BLWsMP1sUbJVg0NAqG91zvG5PgrqeHbIybpIUVkZNsQ%2BBQ3shROWXlVse68GZcnEw6m5QR9CrEbvPsvnU%2Ful10pni5pVPQnTA8K0FnUSTSHfcqYle6XeGr1nyoqle7%2Ft0nU6%2FN7g5H3OfXJRCUyPXqlqF8Xkg4Awx5yCxQY6pgF5dWszwPzMkAzkY45eVmnEC%2FDB7UL4Ubsf%2FjR7tcpzotzg2Xn4LwkkJKoRqSJbVhyfM8EbbjQVTHw%2FHi1jvANotwq%2FXb2DbRMcIZMKndKW3s7VVcEL%2FRsBkwmkfaJ5u6ow6ueSCJruHBQkmjU0%2Fvw%2BYUA8xfYTCQ2iZMecgx1M2GA%2Bg1t%2FBes9tjWS6048tGiJTKHnkQ%2BK60voX7UYHOeLpAsvf2Un&X-Amz-Signature=68dceee9aeca35e9e437d0e09f0b328c173e52d02440e5e916bc872f4f6cb404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AU2AJZT%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBQ49Y%2BeTtL5Oy71YHkA2CxYpSD17xS8GXh2hN2zXgUEAiAqTYLwBJvKePhCF%2BFQqS0WG06fzRTjCiZBmmEqfkhinCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpIAHIX7kUwO96SokKtwDnGgGGF7IoPQwWTwG%2BNG9hg4d9Jg9856ZplmJ7L%2F3enLmANqgSGzAgHfPRU45ApWnrMxgWGL1%2FvFMd4FTNh7jitjzckRlKAp8Vmikx9OHe3aWgQPJp%2FOo9h7eNU7xmJ4rPeKF2J8%2FPSjBmfhHaZMAOQa0fY5Xt0wK9Wg00CbH1tjOAdMP7Dp4bicefZgV75qI3I8fTLjL48je8zqTNG%2Ff3mjNzs8yN8OKz6AHSJZidxx8tXtqW%2BLl3FaHsVYsgtleXkqdrP2DajaRGGPMSrZer%2FPuDO79CcFIv65qkyus2rj5mr8BkLhvAnoDOm1pfB%2ByS4KRSSyXY03Y6N5RoXA%2FVke%2FWeJ0O7j72rwNMoGPRSqwJ82SAd0F1839j1XwatqTdgpLQV4DpAPHIq8JZS%2FXd5k0PE6mcEBuLRxZ3lIX4sFBu%2FYUx%2Fjrx8maVhpkYoq1l4t5KYb4M2dUL%2Fo1yFdicdSeSkBg%2BLWsMP1sUbJVg0NAqG91zvG5PgrqeHbIybpIUVkZNsQ%2BBQ3shROWXlVse68GZcnEw6m5QR9CrEbvPsvnU%2Ful10pni5pVPQnTA8K0FnUSTSHfcqYle6XeGr1nyoqle7%2Ft0nU6%2FN7g5H3OfXJRCUyPXqlqF8Xkg4Awx5yCxQY6pgF5dWszwPzMkAzkY45eVmnEC%2FDB7UL4Ubsf%2FjR7tcpzotzg2Xn4LwkkJKoRqSJbVhyfM8EbbjQVTHw%2FHi1jvANotwq%2FXb2DbRMcIZMKndKW3s7VVcEL%2FRsBkwmkfaJ5u6ow6ueSCJruHBQkmjU0%2Fvw%2BYUA8xfYTCQ2iZMecgx1M2GA%2Bg1t%2FBes9tjWS6048tGiJTKHnkQ%2BK60voX7UYHOeLpAsvf2Un&X-Amz-Signature=be2be09cb260c2e29f2432f940912e38e5e9394031892ff47c3c15427e63f820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AU2AJZT%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBQ49Y%2BeTtL5Oy71YHkA2CxYpSD17xS8GXh2hN2zXgUEAiAqTYLwBJvKePhCF%2BFQqS0WG06fzRTjCiZBmmEqfkhinCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpIAHIX7kUwO96SokKtwDnGgGGF7IoPQwWTwG%2BNG9hg4d9Jg9856ZplmJ7L%2F3enLmANqgSGzAgHfPRU45ApWnrMxgWGL1%2FvFMd4FTNh7jitjzckRlKAp8Vmikx9OHe3aWgQPJp%2FOo9h7eNU7xmJ4rPeKF2J8%2FPSjBmfhHaZMAOQa0fY5Xt0wK9Wg00CbH1tjOAdMP7Dp4bicefZgV75qI3I8fTLjL48je8zqTNG%2Ff3mjNzs8yN8OKz6AHSJZidxx8tXtqW%2BLl3FaHsVYsgtleXkqdrP2DajaRGGPMSrZer%2FPuDO79CcFIv65qkyus2rj5mr8BkLhvAnoDOm1pfB%2ByS4KRSSyXY03Y6N5RoXA%2FVke%2FWeJ0O7j72rwNMoGPRSqwJ82SAd0F1839j1XwatqTdgpLQV4DpAPHIq8JZS%2FXd5k0PE6mcEBuLRxZ3lIX4sFBu%2FYUx%2Fjrx8maVhpkYoq1l4t5KYb4M2dUL%2Fo1yFdicdSeSkBg%2BLWsMP1sUbJVg0NAqG91zvG5PgrqeHbIybpIUVkZNsQ%2BBQ3shROWXlVse68GZcnEw6m5QR9CrEbvPsvnU%2Ful10pni5pVPQnTA8K0FnUSTSHfcqYle6XeGr1nyoqle7%2Ft0nU6%2FN7g5H3OfXJRCUyPXqlqF8Xkg4Awx5yCxQY6pgF5dWszwPzMkAzkY45eVmnEC%2FDB7UL4Ubsf%2FjR7tcpzotzg2Xn4LwkkJKoRqSJbVhyfM8EbbjQVTHw%2FHi1jvANotwq%2FXb2DbRMcIZMKndKW3s7VVcEL%2FRsBkwmkfaJ5u6ow6ueSCJruHBQkmjU0%2Fvw%2BYUA8xfYTCQ2iZMecgx1M2GA%2Bg1t%2FBes9tjWS6048tGiJTKHnkQ%2BK60voX7UYHOeLpAsvf2Un&X-Amz-Signature=985e44f65ea680ea0f8d21e2b271409ba0a4a159ccc5a6caa4b70d592602d410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AU2AJZT%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBQ49Y%2BeTtL5Oy71YHkA2CxYpSD17xS8GXh2hN2zXgUEAiAqTYLwBJvKePhCF%2BFQqS0WG06fzRTjCiZBmmEqfkhinCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpIAHIX7kUwO96SokKtwDnGgGGF7IoPQwWTwG%2BNG9hg4d9Jg9856ZplmJ7L%2F3enLmANqgSGzAgHfPRU45ApWnrMxgWGL1%2FvFMd4FTNh7jitjzckRlKAp8Vmikx9OHe3aWgQPJp%2FOo9h7eNU7xmJ4rPeKF2J8%2FPSjBmfhHaZMAOQa0fY5Xt0wK9Wg00CbH1tjOAdMP7Dp4bicefZgV75qI3I8fTLjL48je8zqTNG%2Ff3mjNzs8yN8OKz6AHSJZidxx8tXtqW%2BLl3FaHsVYsgtleXkqdrP2DajaRGGPMSrZer%2FPuDO79CcFIv65qkyus2rj5mr8BkLhvAnoDOm1pfB%2ByS4KRSSyXY03Y6N5RoXA%2FVke%2FWeJ0O7j72rwNMoGPRSqwJ82SAd0F1839j1XwatqTdgpLQV4DpAPHIq8JZS%2FXd5k0PE6mcEBuLRxZ3lIX4sFBu%2FYUx%2Fjrx8maVhpkYoq1l4t5KYb4M2dUL%2Fo1yFdicdSeSkBg%2BLWsMP1sUbJVg0NAqG91zvG5PgrqeHbIybpIUVkZNsQ%2BBQ3shROWXlVse68GZcnEw6m5QR9CrEbvPsvnU%2Ful10pni5pVPQnTA8K0FnUSTSHfcqYle6XeGr1nyoqle7%2Ft0nU6%2FN7g5H3OfXJRCUyPXqlqF8Xkg4Awx5yCxQY6pgF5dWszwPzMkAzkY45eVmnEC%2FDB7UL4Ubsf%2FjR7tcpzotzg2Xn4LwkkJKoRqSJbVhyfM8EbbjQVTHw%2FHi1jvANotwq%2FXb2DbRMcIZMKndKW3s7VVcEL%2FRsBkwmkfaJ5u6ow6ueSCJruHBQkmjU0%2Fvw%2BYUA8xfYTCQ2iZMecgx1M2GA%2Bg1t%2FBes9tjWS6048tGiJTKHnkQ%2BK60voX7UYHOeLpAsvf2Un&X-Amz-Signature=89063d3e13a88019f94174a202234dd6b3b20911a6177b13e386a5c89d49856b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AU2AJZT%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBQ49Y%2BeTtL5Oy71YHkA2CxYpSD17xS8GXh2hN2zXgUEAiAqTYLwBJvKePhCF%2BFQqS0WG06fzRTjCiZBmmEqfkhinCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpIAHIX7kUwO96SokKtwDnGgGGF7IoPQwWTwG%2BNG9hg4d9Jg9856ZplmJ7L%2F3enLmANqgSGzAgHfPRU45ApWnrMxgWGL1%2FvFMd4FTNh7jitjzckRlKAp8Vmikx9OHe3aWgQPJp%2FOo9h7eNU7xmJ4rPeKF2J8%2FPSjBmfhHaZMAOQa0fY5Xt0wK9Wg00CbH1tjOAdMP7Dp4bicefZgV75qI3I8fTLjL48je8zqTNG%2Ff3mjNzs8yN8OKz6AHSJZidxx8tXtqW%2BLl3FaHsVYsgtleXkqdrP2DajaRGGPMSrZer%2FPuDO79CcFIv65qkyus2rj5mr8BkLhvAnoDOm1pfB%2ByS4KRSSyXY03Y6N5RoXA%2FVke%2FWeJ0O7j72rwNMoGPRSqwJ82SAd0F1839j1XwatqTdgpLQV4DpAPHIq8JZS%2FXd5k0PE6mcEBuLRxZ3lIX4sFBu%2FYUx%2Fjrx8maVhpkYoq1l4t5KYb4M2dUL%2Fo1yFdicdSeSkBg%2BLWsMP1sUbJVg0NAqG91zvG5PgrqeHbIybpIUVkZNsQ%2BBQ3shROWXlVse68GZcnEw6m5QR9CrEbvPsvnU%2Ful10pni5pVPQnTA8K0FnUSTSHfcqYle6XeGr1nyoqle7%2Ft0nU6%2FN7g5H3OfXJRCUyPXqlqF8Xkg4Awx5yCxQY6pgF5dWszwPzMkAzkY45eVmnEC%2FDB7UL4Ubsf%2FjR7tcpzotzg2Xn4LwkkJKoRqSJbVhyfM8EbbjQVTHw%2FHi1jvANotwq%2FXb2DbRMcIZMKndKW3s7VVcEL%2FRsBkwmkfaJ5u6ow6ueSCJruHBQkmjU0%2Fvw%2BYUA8xfYTCQ2iZMecgx1M2GA%2Bg1t%2FBes9tjWS6048tGiJTKHnkQ%2BK60voX7UYHOeLpAsvf2Un&X-Amz-Signature=fcb6cc1c9b7a58b65affecb6dd025c19ae65ad9ea96f0de020d914451f801cdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AU2AJZT%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBQ49Y%2BeTtL5Oy71YHkA2CxYpSD17xS8GXh2hN2zXgUEAiAqTYLwBJvKePhCF%2BFQqS0WG06fzRTjCiZBmmEqfkhinCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpIAHIX7kUwO96SokKtwDnGgGGF7IoPQwWTwG%2BNG9hg4d9Jg9856ZplmJ7L%2F3enLmANqgSGzAgHfPRU45ApWnrMxgWGL1%2FvFMd4FTNh7jitjzckRlKAp8Vmikx9OHe3aWgQPJp%2FOo9h7eNU7xmJ4rPeKF2J8%2FPSjBmfhHaZMAOQa0fY5Xt0wK9Wg00CbH1tjOAdMP7Dp4bicefZgV75qI3I8fTLjL48je8zqTNG%2Ff3mjNzs8yN8OKz6AHSJZidxx8tXtqW%2BLl3FaHsVYsgtleXkqdrP2DajaRGGPMSrZer%2FPuDO79CcFIv65qkyus2rj5mr8BkLhvAnoDOm1pfB%2ByS4KRSSyXY03Y6N5RoXA%2FVke%2FWeJ0O7j72rwNMoGPRSqwJ82SAd0F1839j1XwatqTdgpLQV4DpAPHIq8JZS%2FXd5k0PE6mcEBuLRxZ3lIX4sFBu%2FYUx%2Fjrx8maVhpkYoq1l4t5KYb4M2dUL%2Fo1yFdicdSeSkBg%2BLWsMP1sUbJVg0NAqG91zvG5PgrqeHbIybpIUVkZNsQ%2BBQ3shROWXlVse68GZcnEw6m5QR9CrEbvPsvnU%2Ful10pni5pVPQnTA8K0FnUSTSHfcqYle6XeGr1nyoqle7%2Ft0nU6%2FN7g5H3OfXJRCUyPXqlqF8Xkg4Awx5yCxQY6pgF5dWszwPzMkAzkY45eVmnEC%2FDB7UL4Ubsf%2FjR7tcpzotzg2Xn4LwkkJKoRqSJbVhyfM8EbbjQVTHw%2FHi1jvANotwq%2FXb2DbRMcIZMKndKW3s7VVcEL%2FRsBkwmkfaJ5u6ow6ueSCJruHBQkmjU0%2Fvw%2BYUA8xfYTCQ2iZMecgx1M2GA%2Bg1t%2FBes9tjWS6048tGiJTKHnkQ%2BK60voX7UYHOeLpAsvf2Un&X-Amz-Signature=68d259700a10617b90e72488a55565749ba1133e43584588290bf622bf18d227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AU2AJZT%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBQ49Y%2BeTtL5Oy71YHkA2CxYpSD17xS8GXh2hN2zXgUEAiAqTYLwBJvKePhCF%2BFQqS0WG06fzRTjCiZBmmEqfkhinCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpIAHIX7kUwO96SokKtwDnGgGGF7IoPQwWTwG%2BNG9hg4d9Jg9856ZplmJ7L%2F3enLmANqgSGzAgHfPRU45ApWnrMxgWGL1%2FvFMd4FTNh7jitjzckRlKAp8Vmikx9OHe3aWgQPJp%2FOo9h7eNU7xmJ4rPeKF2J8%2FPSjBmfhHaZMAOQa0fY5Xt0wK9Wg00CbH1tjOAdMP7Dp4bicefZgV75qI3I8fTLjL48je8zqTNG%2Ff3mjNzs8yN8OKz6AHSJZidxx8tXtqW%2BLl3FaHsVYsgtleXkqdrP2DajaRGGPMSrZer%2FPuDO79CcFIv65qkyus2rj5mr8BkLhvAnoDOm1pfB%2ByS4KRSSyXY03Y6N5RoXA%2FVke%2FWeJ0O7j72rwNMoGPRSqwJ82SAd0F1839j1XwatqTdgpLQV4DpAPHIq8JZS%2FXd5k0PE6mcEBuLRxZ3lIX4sFBu%2FYUx%2Fjrx8maVhpkYoq1l4t5KYb4M2dUL%2Fo1yFdicdSeSkBg%2BLWsMP1sUbJVg0NAqG91zvG5PgrqeHbIybpIUVkZNsQ%2BBQ3shROWXlVse68GZcnEw6m5QR9CrEbvPsvnU%2Ful10pni5pVPQnTA8K0FnUSTSHfcqYle6XeGr1nyoqle7%2Ft0nU6%2FN7g5H3OfXJRCUyPXqlqF8Xkg4Awx5yCxQY6pgF5dWszwPzMkAzkY45eVmnEC%2FDB7UL4Ubsf%2FjR7tcpzotzg2Xn4LwkkJKoRqSJbVhyfM8EbbjQVTHw%2FHi1jvANotwq%2FXb2DbRMcIZMKndKW3s7VVcEL%2FRsBkwmkfaJ5u6ow6ueSCJruHBQkmjU0%2Fvw%2BYUA8xfYTCQ2iZMecgx1M2GA%2Bg1t%2FBes9tjWS6048tGiJTKHnkQ%2BK60voX7UYHOeLpAsvf2Un&X-Amz-Signature=8a1f605d45c75ea8b25e0835c388b41bab37f2d64b407e98a21340f1cb43eae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> urdf can get complex to look at so I will be putting a “_scratch”_ like equivalent next to each example I put down.

To start add these tags:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">



</robot>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKPB7KXA%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC76xblnGeZaW3unYnfW3vXH%2B9Yy5BG4g9ClQhXYMaIHQIhAMm6o6Hvt14oi9P3zOhhAoCUSp8i6xGgHVeVsdhy%2BdorKv8DCHcQABoMNjM3NDIzMTgzODA1Igz7JJobzdQVqVWa50cq3ANuAtRj2VZCEv4%2Bn4XRqB1g8nzzzr2Fi8rICsa5kkazMBKiiXyG3T%2F2ITy6lE9adkvNSDyLmG0H5Ttx1eHTQBLEtJjbT983rY5CbCp8lUBHvNIIEGYaEYmtdQSB0CFmEHBoDfom3h8WEzGnVJV%2BXqa2bp0LpHfOs023wbfHACW%2BqmhShseepkEK0DtVOa3q5EiZYUjf8VzHK9XV%2BACSs%2FBgp5p2j5ZQMXIAurtham14D974wpUdc2pGqOBbYvm2ARnlNST9pEQLxrU5vpm%2Bv%2F2IMhXtNrmvwyrIZG14RH51f3p%2BrM2GmyMmTlQXdVZREWNYI3lP%2BnMoKXuEZjff48%2BwH977kWwDXaZg0bmJZjgKqk5uvgNdOmtgBCz8aTYaFcJNhiW6ETLv60hk6GejojThJAbuTaxG4MBc5W7LLSOaHngdrEofy33AUBJYoBkmKnZi0rSKfbdvCixpLqOaSFAqCadFiyjx3KVfYn483R3Vg7faUriERV6u1TlfdRFvyrb%2Bk5aBYFzSWMqfo2nKJoFY0RG4wzihH7pGfVSjIkx8jG%2BIRyUQDIiH%2BwLud8N6e6o3v1ruVI6fyKNjaMqZfQLrG21aVS30HXnqQRtnBlfy0%2FNfPBnuZTYuY5iGFDCzmILFBjqkATwFltATkUoQ9mfi5YJB4%2Bvie0E5%2FtaABU2m0Wgx21Qi%2FrSEM8WMXm0zR5GA61uLKok2dzBD651UYWlY9ef8wxshHMLzQq0C0I6ZT7w%2FQNn7Yx9StX0c%2BFdcfhotDmT1j28GSleLKpaLHoRXWgxrQAZkITYn00qIB1C8JIUgN7Z5jjnKGtWIVxYOrZWLP9YkNDT7YjzEKAOb0lK0Aui2fHe4IDxp&X-Amz-Signature=36a625c9344e9ce23014d4084441e02e9668e6c4eb5413a0fc2a468cc04da94c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIT6FWMK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIC%2BKpKLEYvRYBDgX8KlIvvTh%2Bft7UBkP6WyB2MrnZYC3AiEApy1mF9z1JwHTponk4g2QLoeI2soTLjQjaBk7PcQFbCsq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDCP%2FaVkEIx88YRAr7ircA7Hjx8q0KRLHqFsEqo0ayg1j%2BR4gqxlEa4bR84qnvTwbfeNG0HYCgEIYJEG6WQClSjNAjfy%2FNR4cFPrV5FEs%2BTKrnjSvwMWuX3xCWoNGd10AjTm6z1LmsKcEEJjuEwo9zx4SAygBvA8I85me0tOuVlfpTVFDE7rtdvRQQBa3xOYaSajA5MpN9gtmtzRufWiBqdb13wIt2LnafAhxMZq%2BtNHNES1y3yYd7QBpVJ43YnWAP0mYkfdoWd6tV%2FkcF%2Brf4yPuPlGtf7Jxy%2FAHXVDirh3MPhrJKITv9lwS6WIFCH%2F67kcA9YmfueMB7aUoDHuYGxiDNYjhDzhFkQSYs9tQ%2FHGGniqgS7sDVZYyxeyUGBlVB58q9%2BkoAbnB4b%2FmSJKxSmZU0EEmSO3bWNNj7E3oEYesT6SX57DPEUJN%2BScGIgIfdLr80lgL3%2B61eSuu7AUerEtG2vQx7yXHE%2FqC%2BI%2B7Hv0rT96cjR5ZebhQY4tJitwqRijfJlH1Jatx2VN51X4E%2FqiU6MrwPKSgQpYYAMNssGvNdJIoVsEk7GfGqtoPW1D3rwYygnVkjBJstfSvrImKqHJQTml22ZiAQS8267eBZGyhdAVto51YY%2F9sBDC8r1R6Vp0Qti%2FET7n%2BoYgpMJKegsUGOqUBt3JMtdCKlDAschyttCUNMMsuqceaewkUMDFI0mUcjnC9slVyE1ck7Ov4WY%2F%2Fjxd5jQySwrFXJ7gIy6nF0Lan3KaxOoAB7qyPkQEIhb3Rx7d401JXxFHuTBlRLIoPFpC79JelKl%2BlCSnUlxqEhwL%2BpzVhOi5%2BGI09dp7N0CjmDoeuXtYE9uiujMxZTVKV9wSKtgciQ3LYlCTpeSlQZarVv6KRRlLe&X-Amz-Signature=badafa1ef0e965a62427c923814a1a2e9541cbaef3250387580c7344553a6d20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UXK7WHF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCj1I6P3GQ052EsATaGT1qQB8jjviCZUeyLvavo%2FVBX8QIhAKJZnghQXwqdI0BIjDUY1vzrhorpePJdWC15vRjQGrSzKv8DCHcQABoMNjM3NDIzMTgzODA1IgxQeFkjWPztPb6XwOYq3AMs6LhbcBLmg1X3cRvmPVdgAeAfdZ3VlYtL90gyDwAevvuUpjz0G6njZYgcT2VH%2FJ7b%2Bnxp31nnTesUShorKdNPd6bGFwfVdFtzSOUvN4DHaRxVppifRuJeAqQYX696co6%2FkRwRG7SNnfIB6DDcUG68iZhjWNepBgBYlcQbcyI6zF6p7Puymh6QwyWF5G6mh%2F4jRk0NjQWOrU5TV4EYTd%2BFLrHeP3qTM4VEBHl0446BhfBILOWa4Ctz8i%2B7cFzQ7YSYZ3xs0qdfsuu9XHWCrhVMe2ycxpJUGpgDrmkoaW0%2F7hCBi4Ej%2BIoPg%2B2Su5%2Bwe3kbPnA1nJKup1toQZ%2FOZGjpR6eu3O5q%2Fz0U07AXoMpSGXFClKo5Ss9LpnnLetdb7PbXKkP85i6CdBu%2Ba7pec80u9x%2FzCqQ%2BAjG%2FGsQM8kcS13vP2LIrwgB5V3bUBz3wo02ssI9%2BC4PaZTb%2FCYlaE75WfIfGblf%2BnQlpHohPq6JB0yiQNT9cuFQFIgNLLb%2FPLwDCsOSzOtc%2BnPFMXqSq6uH9ejgNcnvHnNqMR5NNbTq0uIo8utjp%2FTPfqdav3OKbJ1CHOGt0XmPxE2tFqJvbxebUs4hULVDNFpty6KaF5pe9WVCvndskZFByTbycXDDrnILFBjqkAXSCwHAcVe2tVx7uPZYWdpAX6aRHlSDnHDip8MPdfZ9YnE2huYm%2FHJXUEwISmtF6L9ejPI%2BzTrlqrgVTwj0Mx8%2Fw5YXjMG66wrGtECsd508He%2BiXCHrl3w6P5Pz45lq50etGe42tlWtV29p27LOwX%2FaXPxySMyczli1%2FnJozLsXxzdftWjKQTbTD7cXec%2BDyPEfLBCU8zuoglaBshoZ5fba4Bg%2FI&X-Amz-Signature=7c6a36770c7675c62cb935820f6d35b6f0126e23ee127e5b9fb3904ea7f117dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AU2AJZT%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBQ49Y%2BeTtL5Oy71YHkA2CxYpSD17xS8GXh2hN2zXgUEAiAqTYLwBJvKePhCF%2BFQqS0WG06fzRTjCiZBmmEqfkhinCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpIAHIX7kUwO96SokKtwDnGgGGF7IoPQwWTwG%2BNG9hg4d9Jg9856ZplmJ7L%2F3enLmANqgSGzAgHfPRU45ApWnrMxgWGL1%2FvFMd4FTNh7jitjzckRlKAp8Vmikx9OHe3aWgQPJp%2FOo9h7eNU7xmJ4rPeKF2J8%2FPSjBmfhHaZMAOQa0fY5Xt0wK9Wg00CbH1tjOAdMP7Dp4bicefZgV75qI3I8fTLjL48je8zqTNG%2Ff3mjNzs8yN8OKz6AHSJZidxx8tXtqW%2BLl3FaHsVYsgtleXkqdrP2DajaRGGPMSrZer%2FPuDO79CcFIv65qkyus2rj5mr8BkLhvAnoDOm1pfB%2ByS4KRSSyXY03Y6N5RoXA%2FVke%2FWeJ0O7j72rwNMoGPRSqwJ82SAd0F1839j1XwatqTdgpLQV4DpAPHIq8JZS%2FXd5k0PE6mcEBuLRxZ3lIX4sFBu%2FYUx%2Fjrx8maVhpkYoq1l4t5KYb4M2dUL%2Fo1yFdicdSeSkBg%2BLWsMP1sUbJVg0NAqG91zvG5PgrqeHbIybpIUVkZNsQ%2BBQ3shROWXlVse68GZcnEw6m5QR9CrEbvPsvnU%2Ful10pni5pVPQnTA8K0FnUSTSHfcqYle6XeGr1nyoqle7%2Ft0nU6%2FN7g5H3OfXJRCUyPXqlqF8Xkg4Awx5yCxQY6pgF5dWszwPzMkAzkY45eVmnEC%2FDB7UL4Ubsf%2FjR7tcpzotzg2Xn4LwkkJKoRqSJbVhyfM8EbbjQVTHw%2FHi1jvANotwq%2FXb2DbRMcIZMKndKW3s7VVcEL%2FRsBkwmkfaJ5u6ow6ueSCJruHBQkmjU0%2Fvw%2BYUA8xfYTCQ2iZMecgx1M2GA%2Bg1t%2FBes9tjWS6048tGiJTKHnkQ%2BK60voX7UYHOeLpAsvf2Un&X-Amz-Signature=103dbdef8f84f6f68fb64b3b95ad27665a9dc1167a33d780d0ed37522b930bf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHBD3PKV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHuNrynJzgb%2FA3Tm%2FlPtMj88vg3hyrW9KeiuG637b8g7AiAe7fTqGVuj7nYTW7CkgGSH8t%2BMzI3Cvf5o%2BUo6y3lLIyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMwJe%2BTuh37Wi1eu0sKtwD82fKFa6Eqr53gYDLKOWMJd2%2BFaDfcws0USO4uBXSmtrgGWWnDpeOvWolvbsQ1GoyeYlxxHZAhPbInozhKnF1W4x1lOzj7A8XOMNeSccmzP3%2BI3VjERbYzSuFwapf3h39FE%2Fx%2BxrxkDsz8xP7FFiVHIOJ8opva3t15kFTA7gWXuFHXiRTVKUUBMic%2FzVOqmJ5KIGdBFmmfcsKt6u0kBagHqwA9G4oL7pIVmtRybOE88sgRlOKu7cni2iQFAYoEUwSKgr6t0MQUHELfSRr9yP0QhNLxtpetqlwlXp5FyrX%2FGj0pw%2BnQ4vCopLb7lzEbgmMbSxfF5tzcb3j8wSTcImpym2eWGLdD3zuQIIECwxeYNI%2FAbtB9OvwfyF%2Bp4eu36GkIhMpnfUeljhhV2ThqFHW0qBzOgDwf1dRfZz0J6iKFytd4117jbkaTVc3%2F5vmP3adDBWxr3ApeyHy8bXIOwxnwNA1xzT6wzpXyxgyaA11BkS%2BEL4IVaRF%2FwLLo7HEnVW9nAye3YF5NCmmEO8k8dSvqVJ3u8TSgBZRqpwK93ZcmW9EDSd9afEOlrfJR07apd3iq9DPqT7RhcIWK3ui1ofbJSPsmkm7mAG2c3P8SEiPrcNSe8ttreLzuVG8RDMw45mCxQY6pgGwVbl7JoY0LmjSHKGIKj69tnrZObzdxlaXYaTF2Sknucg6yxA458cKNe46v080NmuBW%2Fxa6O%2BmXF9CtX7Qyu6FwDhjn9xSkmlYXh2nar2z5tL5OkynBnBlrEjxAb8%2BTIVaUmp8KitqEvMc8Dl6GZdJ6XLJWVa0bmsiyrFWJrw8B%2B70fnYbqgywj7qCTfmNn6KJ9ERtygP6%2Be%2FTEUN3NgoGj7jY%2B8ff&X-Amz-Signature=f39594a5dd5fed0c0d54e50afb1ac20381f0653440553c74f47d3fb4bdf8a8b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AU2AJZT%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBQ49Y%2BeTtL5Oy71YHkA2CxYpSD17xS8GXh2hN2zXgUEAiAqTYLwBJvKePhCF%2BFQqS0WG06fzRTjCiZBmmEqfkhinCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpIAHIX7kUwO96SokKtwDnGgGGF7IoPQwWTwG%2BNG9hg4d9Jg9856ZplmJ7L%2F3enLmANqgSGzAgHfPRU45ApWnrMxgWGL1%2FvFMd4FTNh7jitjzckRlKAp8Vmikx9OHe3aWgQPJp%2FOo9h7eNU7xmJ4rPeKF2J8%2FPSjBmfhHaZMAOQa0fY5Xt0wK9Wg00CbH1tjOAdMP7Dp4bicefZgV75qI3I8fTLjL48je8zqTNG%2Ff3mjNzs8yN8OKz6AHSJZidxx8tXtqW%2BLl3FaHsVYsgtleXkqdrP2DajaRGGPMSrZer%2FPuDO79CcFIv65qkyus2rj5mr8BkLhvAnoDOm1pfB%2ByS4KRSSyXY03Y6N5RoXA%2FVke%2FWeJ0O7j72rwNMoGPRSqwJ82SAd0F1839j1XwatqTdgpLQV4DpAPHIq8JZS%2FXd5k0PE6mcEBuLRxZ3lIX4sFBu%2FYUx%2Fjrx8maVhpkYoq1l4t5KYb4M2dUL%2Fo1yFdicdSeSkBg%2BLWsMP1sUbJVg0NAqG91zvG5PgrqeHbIybpIUVkZNsQ%2BBQ3shROWXlVse68GZcnEw6m5QR9CrEbvPsvnU%2Ful10pni5pVPQnTA8K0FnUSTSHfcqYle6XeGr1nyoqle7%2Ft0nU6%2FN7g5H3OfXJRCUyPXqlqF8Xkg4Awx5yCxQY6pgF5dWszwPzMkAzkY45eVmnEC%2FDB7UL4Ubsf%2FjR7tcpzotzg2Xn4LwkkJKoRqSJbVhyfM8EbbjQVTHw%2FHi1jvANotwq%2FXb2DbRMcIZMKndKW3s7VVcEL%2FRsBkwmkfaJ5u6ow6ueSCJruHBQkmjU0%2Fvw%2BYUA8xfYTCQ2iZMecgx1M2GA%2Bg1t%2FBes9tjWS6048tGiJTKHnkQ%2BK60voX7UYHOeLpAsvf2Un&X-Amz-Signature=fe27488b2c79ccb33f9e4c36db6626e77557325f3278f3b7b2edf8248c2774c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSKH77S5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCFuTbsWkjh7B%2FYvb21be9CRrkoGVOptbpreFTy2P%2Bl8AIhANgcC6V%2BWoFBqbnzkSx%2BWnKHF9WzIiDJTQaaGF06HEysKv8DCHcQABoMNjM3NDIzMTgzODA1IgzNHglPpEfHEJFgvwoq3APda5EZZJWt3E2Yv%2FzVGQ1HwE44oGPJUyLKaQMUtoloP2YdmsFq3iatEmX5l4ddnajeB6WeubYFdhets8QKpQ6K7KzC%2BSUal4egOlMlvhNVSM8u%2FNusQe8trK%2FajLfc3xRs7doK4Uq5OoxDgD%2B6p31QjXxCL%2BWSv12MhfwENK%2BtCo%2FSQEfz9bPPJpimKbywWuQwSpjTiS3ccCvJkc7mLHCVEwB36zZTB%2FS%2Ft8ecVctn4cFXoz68kYPn8so%2BlR%2Fw08mEwdkGaMEviEqNNVOPunQqhz5ztkWfPXSMX8UZcEtQfZRBx4aFByvpz0bz8R2SO89sgNhr5TiAdcyHcBC%2BEKRoMOUCrXrhY4GFzyrkPj1ZuSpYJsJXkSKXzp8v2WWDJO3B2NwXuYYnZIIL2kmt63o0nSXEHOAEIG6XrUbsjOFV97h578%2FriTxUIanU%2BNq2KOqpxyIq64miR2zSd8uswQEsy3FDHyk6Se93gi3Ios7%2BxSV6FawD146tyi6uFCqvx0exBuNEO8xUQSwXxldB6VZBZuxWUeG51vw5r2l5Py%2BoP6sBIHVQc5o8BEuCnpAnVz%2Fcr%2B5EEnDar1B7NcNdG%2Fn51CZVvSfphBnNL%2FUfR8cs5Vr5W7%2FSZkRwyhZdQDCzmILFBjqkAX%2BWolXjWs355v5skxu0KQVuhCQs3Gh%2FWsjkgmSs0K0l1EG8iykOHZpNr9NUWF4gcyZP88kzQmglpRmSVAD%2FW%2BwWz5nBVW%2BhgJEUlrkNeLGjMKcAm52jbc1L1ep3NRmjCgB98DQDLtP4xrBrD25nFS6mBkrvg1DiKqQcwjtda47EVXsX7XELTCzQrtDiOd804LskqooGh6dl%2Bz7kTPxO2g0bQl1%2F&X-Amz-Signature=270f83657d5facd3bdeab45c488ba17e19f827c38eabb57a6f4b02224a56ed8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AU2AJZT%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBQ49Y%2BeTtL5Oy71YHkA2CxYpSD17xS8GXh2hN2zXgUEAiAqTYLwBJvKePhCF%2BFQqS0WG06fzRTjCiZBmmEqfkhinCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpIAHIX7kUwO96SokKtwDnGgGGF7IoPQwWTwG%2BNG9hg4d9Jg9856ZplmJ7L%2F3enLmANqgSGzAgHfPRU45ApWnrMxgWGL1%2FvFMd4FTNh7jitjzckRlKAp8Vmikx9OHe3aWgQPJp%2FOo9h7eNU7xmJ4rPeKF2J8%2FPSjBmfhHaZMAOQa0fY5Xt0wK9Wg00CbH1tjOAdMP7Dp4bicefZgV75qI3I8fTLjL48je8zqTNG%2Ff3mjNzs8yN8OKz6AHSJZidxx8tXtqW%2BLl3FaHsVYsgtleXkqdrP2DajaRGGPMSrZer%2FPuDO79CcFIv65qkyus2rj5mr8BkLhvAnoDOm1pfB%2ByS4KRSSyXY03Y6N5RoXA%2FVke%2FWeJ0O7j72rwNMoGPRSqwJ82SAd0F1839j1XwatqTdgpLQV4DpAPHIq8JZS%2FXd5k0PE6mcEBuLRxZ3lIX4sFBu%2FYUx%2Fjrx8maVhpkYoq1l4t5KYb4M2dUL%2Fo1yFdicdSeSkBg%2BLWsMP1sUbJVg0NAqG91zvG5PgrqeHbIybpIUVkZNsQ%2BBQ3shROWXlVse68GZcnEw6m5QR9CrEbvPsvnU%2Ful10pni5pVPQnTA8K0FnUSTSHfcqYle6XeGr1nyoqle7%2Ft0nU6%2FN7g5H3OfXJRCUyPXqlqF8Xkg4Awx5yCxQY6pgF5dWszwPzMkAzkY45eVmnEC%2FDB7UL4Ubsf%2FjR7tcpzotzg2Xn4LwkkJKoRqSJbVhyfM8EbbjQVTHw%2FHi1jvANotwq%2FXb2DbRMcIZMKndKW3s7VVcEL%2FRsBkwmkfaJ5u6ow6ueSCJruHBQkmjU0%2Fvw%2BYUA8xfYTCQ2iZMecgx1M2GA%2Bg1t%2FBes9tjWS6048tGiJTKHnkQ%2BK60voX7UYHOeLpAsvf2Un&X-Amz-Signature=2ce13c0a82a4a678d05162e44bf12973049a6d944d2bdac3548893942503730e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2W2TDXQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDR5C3d0iqcuSqQokUu8GOjmGxaEyJbAEf0LKn4n%2Fe2aQIhANQ4MnIwpFvlULwG1A2SMy5WF1NVjaOSWEYiPVdZbHjfKv8DCHcQABoMNjM3NDIzMTgzODA1IgyTccVf0Dqf8c2h7%2Bkq3ANe3iBjF7KvIjb2yQBQEH307TcwtnLS1BCZK%2FCmDBGlzbZ8QeGqXM2GNtOMmIo6vYABj1TmnjSoEtFJc8d%2FnbfZ1U0dw1ev%2FVWkb91TcDHgPlbNsMxEVa94XLUWV95rJKdUlaWRNLB17zNVxMj19WNmWjPm3WPqVbqAmFtKZA2AE3%2FawbpgcMLq6yW5RbAbLENAZ7FawWLxEbgok%2BCwyxVsAeMlkMKBgQBXZDvIe1b77PqEAP7fRDyAA4kBFmDi5mDM2H9bNFgOfffRZ%2B78CLS9O1WkRBNX4YFqtnhm9ut13gWBVE%2BwJWwz0V%2FjJ6CgAoHe4QyTZkjWB7VRaIHiHl74glzmoHnQ8PhfgNC7vWL7aSeCHv6IZraGpmiHTVGuxKg2Rwy%2BDHiZZGUt6p2iNpyHiDEClQvUwiVYZ67G2zvFkPr0ATg6dsd3BcQHZFOzD876cHjmcHmzc0oxfGElRAUbokDZntwDLOX6pexgW8NugP1Hk%2FbrkkQ0bBmo0YHMUREcX%2B3viLFoDPThquGJx%2BriTzoAuALV%2FcN6rT3TDiMPAMmHlHCore9q5jo2zL6oI%2BCoD7oI88eCXwEtW9pRYmGvu0cIKuOCd7Pdvx7gcxgnknC92rMeHdtOvIBGTzDjmoLFBjqkAZ0b%2BydpuVb2qhmYeV%2FwcprELeoGjltA3n1gwNLq0QsGtN6xKxNQVNGKjt0ze8pzV%2FP7vE%2FNOg5Y0xEChlHTpy4DKdQlOAlLGjXtoJ9S8RkD72yb1VfGlxpIR9ps5gaz81yeTe1vK4NnxQ5tah6m9%2BudiERqEbMbZsjJIVptZ6CTi8XC%2BBY%2FOw3q5QET5SF1ryQU%2FjMwCVwMOtcS3vLFu2NEfPcA&X-Amz-Signature=dd894188ea492d296db317de4d073a9fa9ec9d063931d24137578c439f5c2790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AU2AJZT%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBQ49Y%2BeTtL5Oy71YHkA2CxYpSD17xS8GXh2hN2zXgUEAiAqTYLwBJvKePhCF%2BFQqS0WG06fzRTjCiZBmmEqfkhinCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpIAHIX7kUwO96SokKtwDnGgGGF7IoPQwWTwG%2BNG9hg4d9Jg9856ZplmJ7L%2F3enLmANqgSGzAgHfPRU45ApWnrMxgWGL1%2FvFMd4FTNh7jitjzckRlKAp8Vmikx9OHe3aWgQPJp%2FOo9h7eNU7xmJ4rPeKF2J8%2FPSjBmfhHaZMAOQa0fY5Xt0wK9Wg00CbH1tjOAdMP7Dp4bicefZgV75qI3I8fTLjL48je8zqTNG%2Ff3mjNzs8yN8OKz6AHSJZidxx8tXtqW%2BLl3FaHsVYsgtleXkqdrP2DajaRGGPMSrZer%2FPuDO79CcFIv65qkyus2rj5mr8BkLhvAnoDOm1pfB%2ByS4KRSSyXY03Y6N5RoXA%2FVke%2FWeJ0O7j72rwNMoGPRSqwJ82SAd0F1839j1XwatqTdgpLQV4DpAPHIq8JZS%2FXd5k0PE6mcEBuLRxZ3lIX4sFBu%2FYUx%2Fjrx8maVhpkYoq1l4t5KYb4M2dUL%2Fo1yFdicdSeSkBg%2BLWsMP1sUbJVg0NAqG91zvG5PgrqeHbIybpIUVkZNsQ%2BBQ3shROWXlVse68GZcnEw6m5QR9CrEbvPsvnU%2Ful10pni5pVPQnTA8K0FnUSTSHfcqYle6XeGr1nyoqle7%2Ft0nU6%2FN7g5H3OfXJRCUyPXqlqF8Xkg4Awx5yCxQY6pgF5dWszwPzMkAzkY45eVmnEC%2FDB7UL4Ubsf%2FjR7tcpzotzg2Xn4LwkkJKoRqSJbVhyfM8EbbjQVTHw%2FHi1jvANotwq%2FXb2DbRMcIZMKndKW3s7VVcEL%2FRsBkwmkfaJ5u6ow6ueSCJruHBQkmjU0%2Fvw%2BYUA8xfYTCQ2iZMecgx1M2GA%2Bg1t%2FBes9tjWS6048tGiJTKHnkQ%2BK60voX7UYHOeLpAsvf2Un&X-Amz-Signature=f7d2300e0147f9c2cef89e993e42ef97c48a6a81dcc78b5598938274e1fc23aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XVKOZEK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQD6Sem4oTk761SuOPghoysSN8Smfw6XJKmvfsN2%2FsBBMQIgXfzgZIAqXehWCdCXZ1iKyQSo62%2B%2FZl%2BGZiInextkU3sq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHvYbHUnfzabsQF0QSrcA2l5hSbtBmGp4h85BXjFAGzHLH7dK9pDqRlpHD7tt6h8eSl1irjegOKoeI3pdaR5cHOjqtwa840FrCtBY%2FBrR0aG5%2B9b43J3XV2Mga7qC96yMjSu%2FDP8YV%2BykRTDmcWNso0xjm1A2tcax0IMJjUBjfbudC8KYGe98Oqhsyhw%2BXAFuldhmpO08YIXW%2BPQobnCLByA4CWwI0ZvqK1hloz5cGWZLDmoTDEmeaKCdewfrgxGYtXTlRTawKCn8YwFO3v7vFqMoNGsyrUyc6FU7tkgK8F%2F6JY%2Bl4yYDemY4zU2aiKoiJpeZmzPr2aR6ixpnimFOiPGzwv%2FwJLi0xhS%2FJuyA0RFhDqJbHvFbmnzpA32Pyvq1E6MzLUjJZ4NlOKYeNGXFkTNhfSijacp4dPnl2aoFMcNVBhmGgw7poNW1riR1AkcnjY5Sl3tBOTEfjd1aAgNEvrq1d5NTzKSRCZRQGFzds9pXsGyQe2KzenJrm74GNbCcDMGvJzLrla4Nsz9dXOtb2q6V7StTI2UkUf9AjWMX7DUCVnA12ZFuiuEa7Nn%2Bvv%2F1uzJ0C9hpiv4TbZf4XRxqER2Ytf4x11%2FDyFhSYluTmLMrkt8es973JUyvNYK4BaDbtrGt9Nm3nQKVn42MKCXgsUGOqUBs8BHDj3m4MbK4tT2qM5VSZMLmVgHLOLYYXd8VZKADYWDLI9%2Ff2xAFgcveJNFVS2grdwea5aRAQ47VFAJEFPI5GG1eYU9IfpaEGyApsxBBSFrkdlthY4qjg140Ye%2BXWNx0wdA%2BFLd%2BPIcXNfTa19ZQPTLVbCQtSR%2FWPR1JGQsu1lqzJMwLmd%2BYBm9qNzcpy4OYDcEDdTeZbSaUGMFhNg8J2TisIUy&X-Amz-Signature=8cd7ee32e70aae5d232c59aab3cf2278e336f51c99339b27cf46713bca3e33b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2XFYFWW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIFH4k7Nm%2Fff4brbJMY5pQBWUXWx%2FSHnpAkl9vtDOY%2F8eAiEA6AwgDNaLkyAUQmY2arLcNie6dllXp6J1hse6hNOu2xIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHIeTzWcscECrzMtZSrcA8lxmvNJUSbg2YzWFBq70LTsybr7saeIlPUGfOSu0wbCW9Rv5r8HpIPnUAryr3Afy1WJr08t9HeD8ASlhg%2FjvrJZRI2rgsKXnQ4pXuP2YKZraN2xPtBJGjxFh43mCwV1xIS8OlVlYumyZ9OsSVY3O8cMMcsMtPy2YNpTSglXQ0LYJJ6vSTlg91bHXxyWCEA3oD590XrME8L0pPT%2B6HSMKhr5ybd5wULYWWhkc3Ut9uAk3gygyrHbNoxWpLBC52qqKCPDSqs%2BO%2BhF%2Fw3cwj%2FoOHOmRdhtRYvOqVNT%2BhpmLbP0AvQQuPxCda8pAN2VT7k%2Bl5GxSn87LBByWBeLYqCvZEcp9bzyVxOO8wrGI5e4ExuttxYG%2FobpFiIvyun6En0izWNgpIzW3ttvs30y06yLRh6DDXpl%2FN0EZbpt0HsthjZwp42hcwckbghxVAQaLb7VmA6VbWDW2xuyttoJAWxFte%2BXhYN1y9PPDBVuFDr6AiPkcDU4ROtQqARZJbsunb4YeApl74FbdFqJJ945NDZagOsDbc8Qv7rVhy3Pd6Q3%2B0dEL15CKajQKeWGivNb2WTgakKZcMfecRXbBydApJlo1PDSY4v6kzqH58mfmGe%2FD0SnzwJj0I0jIWqcdHJYMIqUgsUGOqUBCuB5myIob%2Fr4ZdPUouuuzBJUF9hvypk7cOemRCCqkiuRdy%2BYDTsdp9wnLArEsdCI%2BFyelXo25N%2BJhZQm4w00N9Y18GlNMQspub0V4feUFX3smIxrmCr6Q3St0Y7ST%2B9rN5HZWXJf9DWvs8XerXTf4xEJyCi3hLJdWqFaTakoOaoKb9FZMzH8dZudNrlEJ4mmqxFAKvgg1XMVd5sR26dfDAaTNn8X&X-Amz-Signature=b53fd8f211ac168ca74b9a6fe0e8546337f1615ab11e1276034267e2aa8d8e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657OROCY3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCatAVsEJV8VD1%2FS%2BXEx606x6U1ggidYoyyZ3G3M1GfzAIgPoLG4NNC2wLRjXLheY2A1eFb2UqoY%2BmHAWbQsTQsTc4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDE2dECmgvELkjF2m5SrcA6k2frps4yZozrKT128kiktMU100ciNimYVqbv52mGb1pUHyJFm3RCJ7nJDGwR6aTe0SyDvUOVU%2B%2F4WjYy9grgpaOAa0AG4DdBb%2FvOfq0Axu6E7M7nK2cvjl5wjcJZZCxqCT1U6%2B8xhYNb5LTMu6aZOjnxaferQcPGe9oDXURBluPmsyX37aqcZ%2BSBKW3DPkUtsPTJpY%2FjJJBIhgosPUMxc14qsv9pV22MT5RGaPA2lSthLdpCtgUTqMuUBp8LzqahlYMaEeeCyAfpBLoGrai3YnYBNlK4MtNAMLA0ex%2BMRbilrZwD95Rsdq5mHicu4jL1%2BdDKMXE8yVQzj0255kHKLmdZANKuICPQtJ8sc%2FfTQHFhe%2FiTNN26o%2Bt5dRYywv4FehUGAaDK9c4vmvp8oAQluY%2F%2FslAXCyfJryKOkFEwjdDZo5vFGXE9OrvE2KdqYWTU0AbRT2PEsKt3HvLUkApuIPJcTMIiiaXz%2BjvCumk%2Fa6REYsLbsmAAbe5nrkEJEQ9qZCbXchCNyAZeDgl9jN3tw3SuLahbi8aSvP5Laax%2FVRNIaKR3A1QZ1unhd6lLO%2FqK86lsi7jTcyo4yxF7%2F8J%2FZbZly2OzpEr93npWEIK1pRboxMk11fcTM3VNGKMPGZgsUGOqUBWCwu3YsZG9BY5SQAbK7LWzPzyx%2B1w86KUyKK5gy88tpNBj9alnyr7JP4FIGI%2FF30u3%2BDX0T6kZOsX%2FzNaP9nms9ffwKhm7QDtrTIse9Um232kHECLSzClvMAgINPYOPfcbsSRRFCUH8FOasBziCwKMc8dYNpHczJSbX89Fce%2BkBLUvQbAs2F%2FKGm8DsL27PSSYyRlIwbDpMTzyXsmsMkQUtWcEEo&X-Amz-Signature=26d61260dbc08cab619655c956df19891d031991e6f7887fbb4d7d9ba05a9022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5NKTHUA%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCrYpUA8sIqFyvKxzNyLjZkVVYaIBXGnYgy5XvkIWOGowIhAMB5yt8EHdJbL3cQmtjDqV1eQzuW0CaWL0WNOgwBJIr%2BKv8DCHcQABoMNjM3NDIzMTgzODA1IgwNIUEmhv0EAXQBbXcq3APMlgHzps9fEgnGzuJgUSj6PeFa849dAVhHGyEUL3sf3q0%2B66m9Joux6BYuY5siAkb%2BGMt4M7kQCgjF7Zw6m8vhJRsLMZcekAVKa0fd9vzwXGEOCvi8am3sgLTAdv%2F2blGHWhOlrPP0xnTy2jz8la5EdY5vidyoV2idRzqFDW%2F7saoJJUYrl5Z7WZvnSOMXeG4eCo2hiol%2FrzyOo70NfGEHxMFJtCZcGEoT3EulsLQhn3OH%2BszA3p3V48woYp6JTLGJIa9E4WvgqgfzIdD9tQUjw8RmAqX4BTT7cg9jzqVuPqYm7bbr%2Fx3Ukj%2Be9HwMSkxqA8lcBShmugCUwfORvmgkXa2%2F1g13AlVmEQC%2BbIPJtWVipn6jqqaEJEFW4SNdwx%2BRZWLahCXqrafrMetOExIX%2BKdZ7YXjgzfulWMx8dLunZTo0hTDP7wLDZ2gkiT6c0E%2BXt35fLuMzNZ%2Bn0UMNSfMP7gMMG0%2FWcnHn7n5z1J9Erpv0CZoZA3cTUZmmaJLR0QPxJ%2FBJDWJy1lL9SV1lWPNb%2BA49BzWDulbW1oWIIcuA7qSexUsmwTjtFUTi3moC8Renf0Kanr2JVtn4W5GeoKwJXWj3RzLmKGXeZayomzp4AcVh5%2F6EsQYSL1muTDlm4LFBjqkAXE58APvUauzfn65GGNE2Rokn%2FZk%2FRsSeKcBYTr5O%2Bpa0Dy7kZu1wfApb1JnlAlZQ12QE5Y54YIiMQBDh8flnAkETzCB746u%2B6%2F8ZmBTaOxAgkC464r1BBkxWDacI2M1V3HjwgKVY6KDQPEm59GUHVYD4S7L%2FwNEMUnCtaadL2ueCLPUWkNQl3OkQQ%2BkzBWlX4ScbJnDceg42OGRdi8NlD0RuudH&X-Amz-Signature=34097519aef4c34155a973aef963c15acc5d0bb1e156c88d300a68d26f77e499&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STXU2EIB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQD%2BODq%2BpxjFl6UY4ObO4k0kp7Ibvel%2FBtrMUSeG%2BTduqAIgBxH7ci9nLvR%2FfGk6ua3hYUv2V1J4F1MtuRmoi5%2Bh%2BMwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAtMI6frjBCnOTlnDSrcA8lMZi6QRR6%2BNx%2Fw49Fld%2Bfo6Oc4VlUL5GCg8B%2FzlBJobN6Lyxi1KUjYSduWDWlIb2DuufcjMo%2BuHYhF8PpE73lhUSd8hZlmNZg6fgkbXj77t0hkmy95V6sUGiPzG%2FN6%2FGutPxqkR30%2BxB7eN7JPDUC9RW8%2BF8ZLFaUr3e8zLdzjhB%2BDzcTDIluMaDczkJmA8Gxfl3AHSmysGtNRmbLQyOegShpz0PsBejlkl1zWDG4aFmTAMEEt%2Fz9SbNKloMxhfp6Q6mGmA0ZdjVHe3%2FSIsZliHLvV%2BKJ6av%2FcFDJ7IRIJPMopMAXmI9ZA3mITvbRBXo5%2BIockbuzBuvZPNw4ffzH4Ri%2Bm7UgIqKGc0EKxgAhmMLtatneCKqFO0N9v%2BYnsbB%2F1bsGohhYW9C3SLNcFmm5ZhIeOjzeGjcBe2V7hjZ%2FSFW9qRSqRuvGTqQkz3PKz4nZGU2yBxn2Y%2Bk8kYEUul5T%2FwFozTF%2BW3GjQb8HRLmfy9lvYebBw6qxoN4if5UOUJo40sHhurBTCLUbAEGj6p29Xh1MSHQ2sMc8iuWa9Lw9w57nb05725liP2ehVh%2BEJrNLxguyZ8HiEqK3TVwUUDya7DqQolW78MDEXx3gFLj8DYKRUpBXo82Si5iIxMPCXgsUGOqUBrA%2F1Ig4zLBL%2FfXhjmUOIrNwEiEUTsIsH4kMcb7vvOnvs3Y6JTUHppoJD76ZKbpb4mYqdYbp25xOPcEpm2FzHeTdGJ3h0c%2FO2XeWz7w1SzOHLMxpKNUm83e%2FVXlcIHWeE%2FY2FebsYMrPoKUvXiMQL9CLtEo7bTvEqIBl425lTHQS%2FjgtcCeBntEhgZK2gcDWCHn1PZgutbm3zjE3vys9bi8fM1MuZ&X-Amz-Signature=31f3ab2b16157a886ae78f17cd6be447eeeb7802357e93b964ddc95ef078e634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AU2AJZT%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBQ49Y%2BeTtL5Oy71YHkA2CxYpSD17xS8GXh2hN2zXgUEAiAqTYLwBJvKePhCF%2BFQqS0WG06fzRTjCiZBmmEqfkhinCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpIAHIX7kUwO96SokKtwDnGgGGF7IoPQwWTwG%2BNG9hg4d9Jg9856ZplmJ7L%2F3enLmANqgSGzAgHfPRU45ApWnrMxgWGL1%2FvFMd4FTNh7jitjzckRlKAp8Vmikx9OHe3aWgQPJp%2FOo9h7eNU7xmJ4rPeKF2J8%2FPSjBmfhHaZMAOQa0fY5Xt0wK9Wg00CbH1tjOAdMP7Dp4bicefZgV75qI3I8fTLjL48je8zqTNG%2Ff3mjNzs8yN8OKz6AHSJZidxx8tXtqW%2BLl3FaHsVYsgtleXkqdrP2DajaRGGPMSrZer%2FPuDO79CcFIv65qkyus2rj5mr8BkLhvAnoDOm1pfB%2ByS4KRSSyXY03Y6N5RoXA%2FVke%2FWeJ0O7j72rwNMoGPRSqwJ82SAd0F1839j1XwatqTdgpLQV4DpAPHIq8JZS%2FXd5k0PE6mcEBuLRxZ3lIX4sFBu%2FYUx%2Fjrx8maVhpkYoq1l4t5KYb4M2dUL%2Fo1yFdicdSeSkBg%2BLWsMP1sUbJVg0NAqG91zvG5PgrqeHbIybpIUVkZNsQ%2BBQ3shROWXlVse68GZcnEw6m5QR9CrEbvPsvnU%2Ful10pni5pVPQnTA8K0FnUSTSHfcqYle6XeGr1nyoqle7%2Ft0nU6%2FN7g5H3OfXJRCUyPXqlqF8Xkg4Awx5yCxQY6pgF5dWszwPzMkAzkY45eVmnEC%2FDB7UL4Ubsf%2FjR7tcpzotzg2Xn4LwkkJKoRqSJbVhyfM8EbbjQVTHw%2FHi1jvANotwq%2FXb2DbRMcIZMKndKW3s7VVcEL%2FRsBkwmkfaJ5u6ow6ueSCJruHBQkmjU0%2Fvw%2BYUA8xfYTCQ2iZMecgx1M2GA%2Bg1t%2FBes9tjWS6048tGiJTKHnkQ%2BK60voX7UYHOeLpAsvf2Un&X-Amz-Signature=c535607be09028db1ff6a929e3a92ec01376779045aa7c3d287b896587aa1f49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AU2AJZT%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBQ49Y%2BeTtL5Oy71YHkA2CxYpSD17xS8GXh2hN2zXgUEAiAqTYLwBJvKePhCF%2BFQqS0WG06fzRTjCiZBmmEqfkhinCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpIAHIX7kUwO96SokKtwDnGgGGF7IoPQwWTwG%2BNG9hg4d9Jg9856ZplmJ7L%2F3enLmANqgSGzAgHfPRU45ApWnrMxgWGL1%2FvFMd4FTNh7jitjzckRlKAp8Vmikx9OHe3aWgQPJp%2FOo9h7eNU7xmJ4rPeKF2J8%2FPSjBmfhHaZMAOQa0fY5Xt0wK9Wg00CbH1tjOAdMP7Dp4bicefZgV75qI3I8fTLjL48je8zqTNG%2Ff3mjNzs8yN8OKz6AHSJZidxx8tXtqW%2BLl3FaHsVYsgtleXkqdrP2DajaRGGPMSrZer%2FPuDO79CcFIv65qkyus2rj5mr8BkLhvAnoDOm1pfB%2ByS4KRSSyXY03Y6N5RoXA%2FVke%2FWeJ0O7j72rwNMoGPRSqwJ82SAd0F1839j1XwatqTdgpLQV4DpAPHIq8JZS%2FXd5k0PE6mcEBuLRxZ3lIX4sFBu%2FYUx%2Fjrx8maVhpkYoq1l4t5KYb4M2dUL%2Fo1yFdicdSeSkBg%2BLWsMP1sUbJVg0NAqG91zvG5PgrqeHbIybpIUVkZNsQ%2BBQ3shROWXlVse68GZcnEw6m5QR9CrEbvPsvnU%2Ful10pni5pVPQnTA8K0FnUSTSHfcqYle6XeGr1nyoqle7%2Ft0nU6%2FN7g5H3OfXJRCUyPXqlqF8Xkg4Awx5yCxQY6pgF5dWszwPzMkAzkY45eVmnEC%2FDB7UL4Ubsf%2FjR7tcpzotzg2Xn4LwkkJKoRqSJbVhyfM8EbbjQVTHw%2FHi1jvANotwq%2FXb2DbRMcIZMKndKW3s7VVcEL%2FRsBkwmkfaJ5u6ow6ueSCJruHBQkmjU0%2Fvw%2BYUA8xfYTCQ2iZMecgx1M2GA%2Bg1t%2FBes9tjWS6048tGiJTKHnkQ%2BK60voX7UYHOeLpAsvf2Un&X-Amz-Signature=e2bc5b04ad7ea2c1ff79286ecad487cb81e2c4fc98555cb85db9b5be1b233855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665MUBQGQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBYjqqJ1AUKQDEp2vi%2Ffjj3j9M0AkTTraz7HMcQeKgIHAiEApPESG0l3eivzzP3U4qJQ4rEmf7%2FyNyv5kSHSzhedEX0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDN83u9GdceIhS6gplyrcA0Dc8MCezLS4YiklJ7cPpTNBaYbzn9sQHRxxXOlHUNmH0feOKJawPFvZTTvVOc04iZfUoh2REWLmRqF8Xj5C3J4Y0WjIJScxwIG1dyRAL6AoLUNZU6MzfUIXwZQQiJ9sK3A1j%2FwHozYiL2QZXVupH5qgm4yCaHtVYlez1UR5C2C3Q%2BePsTvaovZnivoKiJMEJnbea0FHwECEwGSFILw8buzeKK21JzTiw51w0V7opzZYMdqAmqYxV2ZaH3jDvxlDoOfm1rdz9xpvLfQWKMSJ6DdRQjgGe5jK%2FxTyqvVN9YbNOMv2tOvqJAtzPrsvh0hJuHeUApBvtGZ%2Bt137KgRFkiqZadyiE7wURy80UdPJDcdU9H7A9KfeB%2Bk3n%2FQFEnWGooSY5m62HS5NAuln4KFt%2Bbfmcj%2Fd2l%2BZuA2VJYjfTDSZhFUXko30OClsRDYM61%2Bo%2BUc95yCbh1M6nstJpYZMU1qCsvxUgq1Qq%2BNAHnvpRIWPoPGEtUvzy1lONxnDthMRW3QQ8UgkTcd0tcV2xoowtw3g8rtnrSm4bv2ptfy6ozJuRQT12aNowfz1Gd0kypmKivEclFhqXuUnjbSL9BocEdHKeFfnBjuPS%2BJRf%2B8yYqJFYgW1ZqMKzL%2FRykPBMOqbgsUGOqUBmg%2FnuDIw3SLE64AmoeqJqtVkSGy40N%2BRJv545PKj92Jz6ra%2BGTS3spK8NRIloaCRuc%2FcEl3E7NxTjrHzXQhX%2FnxO1%2Bz6JkMk29rHyKGSLYa%2FArSRotHMAGMWaowVb2jjikkhm19Mm2RvW0eeM8QV%2BTRULlTmaQFLn8OIC%2FNIvgE4ML%2BkuSPMucTcXHGoIyEpxLrGVynjIa44yyWoyOAzw%2BbdFprf&X-Amz-Signature=e1b8a389a831c85acb44876a174cc0a6bcc677a8440fa1143b90592f07fb11e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665MUBQGQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBYjqqJ1AUKQDEp2vi%2Ffjj3j9M0AkTTraz7HMcQeKgIHAiEApPESG0l3eivzzP3U4qJQ4rEmf7%2FyNyv5kSHSzhedEX0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDN83u9GdceIhS6gplyrcA0Dc8MCezLS4YiklJ7cPpTNBaYbzn9sQHRxxXOlHUNmH0feOKJawPFvZTTvVOc04iZfUoh2REWLmRqF8Xj5C3J4Y0WjIJScxwIG1dyRAL6AoLUNZU6MzfUIXwZQQiJ9sK3A1j%2FwHozYiL2QZXVupH5qgm4yCaHtVYlez1UR5C2C3Q%2BePsTvaovZnivoKiJMEJnbea0FHwECEwGSFILw8buzeKK21JzTiw51w0V7opzZYMdqAmqYxV2ZaH3jDvxlDoOfm1rdz9xpvLfQWKMSJ6DdRQjgGe5jK%2FxTyqvVN9YbNOMv2tOvqJAtzPrsvh0hJuHeUApBvtGZ%2Bt137KgRFkiqZadyiE7wURy80UdPJDcdU9H7A9KfeB%2Bk3n%2FQFEnWGooSY5m62HS5NAuln4KFt%2Bbfmcj%2Fd2l%2BZuA2VJYjfTDSZhFUXko30OClsRDYM61%2Bo%2BUc95yCbh1M6nstJpYZMU1qCsvxUgq1Qq%2BNAHnvpRIWPoPGEtUvzy1lONxnDthMRW3QQ8UgkTcd0tcV2xoowtw3g8rtnrSm4bv2ptfy6ozJuRQT12aNowfz1Gd0kypmKivEclFhqXuUnjbSL9BocEdHKeFfnBjuPS%2BJRf%2B8yYqJFYgW1ZqMKzL%2FRykPBMOqbgsUGOqUBmg%2FnuDIw3SLE64AmoeqJqtVkSGy40N%2BRJv545PKj92Jz6ra%2BGTS3spK8NRIloaCRuc%2FcEl3E7NxTjrHzXQhX%2FnxO1%2Bz6JkMk29rHyKGSLYa%2FArSRotHMAGMWaowVb2jjikkhm19Mm2RvW0eeM8QV%2BTRULlTmaQFLn8OIC%2FNIvgE4ML%2BkuSPMucTcXHGoIyEpxLrGVynjIa44yyWoyOAzw%2BbdFprf&X-Amz-Signature=b533ac29f46f7a5fd68e79038d3a666ec0820d4b78b8283a5fad66a42f060505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665MUBQGQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBYjqqJ1AUKQDEp2vi%2Ffjj3j9M0AkTTraz7HMcQeKgIHAiEApPESG0l3eivzzP3U4qJQ4rEmf7%2FyNyv5kSHSzhedEX0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDN83u9GdceIhS6gplyrcA0Dc8MCezLS4YiklJ7cPpTNBaYbzn9sQHRxxXOlHUNmH0feOKJawPFvZTTvVOc04iZfUoh2REWLmRqF8Xj5C3J4Y0WjIJScxwIG1dyRAL6AoLUNZU6MzfUIXwZQQiJ9sK3A1j%2FwHozYiL2QZXVupH5qgm4yCaHtVYlez1UR5C2C3Q%2BePsTvaovZnivoKiJMEJnbea0FHwECEwGSFILw8buzeKK21JzTiw51w0V7opzZYMdqAmqYxV2ZaH3jDvxlDoOfm1rdz9xpvLfQWKMSJ6DdRQjgGe5jK%2FxTyqvVN9YbNOMv2tOvqJAtzPrsvh0hJuHeUApBvtGZ%2Bt137KgRFkiqZadyiE7wURy80UdPJDcdU9H7A9KfeB%2Bk3n%2FQFEnWGooSY5m62HS5NAuln4KFt%2Bbfmcj%2Fd2l%2BZuA2VJYjfTDSZhFUXko30OClsRDYM61%2Bo%2BUc95yCbh1M6nstJpYZMU1qCsvxUgq1Qq%2BNAHnvpRIWPoPGEtUvzy1lONxnDthMRW3QQ8UgkTcd0tcV2xoowtw3g8rtnrSm4bv2ptfy6ozJuRQT12aNowfz1Gd0kypmKivEclFhqXuUnjbSL9BocEdHKeFfnBjuPS%2BJRf%2B8yYqJFYgW1ZqMKzL%2FRykPBMOqbgsUGOqUBmg%2FnuDIw3SLE64AmoeqJqtVkSGy40N%2BRJv545PKj92Jz6ra%2BGTS3spK8NRIloaCRuc%2FcEl3E7NxTjrHzXQhX%2FnxO1%2Bz6JkMk29rHyKGSLYa%2FArSRotHMAGMWaowVb2jjikkhm19Mm2RvW0eeM8QV%2BTRULlTmaQFLn8OIC%2FNIvgE4ML%2BkuSPMucTcXHGoIyEpxLrGVynjIa44yyWoyOAzw%2BbdFprf&X-Amz-Signature=f6937620b5376c24dffac795f45d03d51ac82006536fcd9176ec3a756f4bf7a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665MUBQGQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBYjqqJ1AUKQDEp2vi%2Ffjj3j9M0AkTTraz7HMcQeKgIHAiEApPESG0l3eivzzP3U4qJQ4rEmf7%2FyNyv5kSHSzhedEX0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDN83u9GdceIhS6gplyrcA0Dc8MCezLS4YiklJ7cPpTNBaYbzn9sQHRxxXOlHUNmH0feOKJawPFvZTTvVOc04iZfUoh2REWLmRqF8Xj5C3J4Y0WjIJScxwIG1dyRAL6AoLUNZU6MzfUIXwZQQiJ9sK3A1j%2FwHozYiL2QZXVupH5qgm4yCaHtVYlez1UR5C2C3Q%2BePsTvaovZnivoKiJMEJnbea0FHwECEwGSFILw8buzeKK21JzTiw51w0V7opzZYMdqAmqYxV2ZaH3jDvxlDoOfm1rdz9xpvLfQWKMSJ6DdRQjgGe5jK%2FxTyqvVN9YbNOMv2tOvqJAtzPrsvh0hJuHeUApBvtGZ%2Bt137KgRFkiqZadyiE7wURy80UdPJDcdU9H7A9KfeB%2Bk3n%2FQFEnWGooSY5m62HS5NAuln4KFt%2Bbfmcj%2Fd2l%2BZuA2VJYjfTDSZhFUXko30OClsRDYM61%2Bo%2BUc95yCbh1M6nstJpYZMU1qCsvxUgq1Qq%2BNAHnvpRIWPoPGEtUvzy1lONxnDthMRW3QQ8UgkTcd0tcV2xoowtw3g8rtnrSm4bv2ptfy6ozJuRQT12aNowfz1Gd0kypmKivEclFhqXuUnjbSL9BocEdHKeFfnBjuPS%2BJRf%2B8yYqJFYgW1ZqMKzL%2FRykPBMOqbgsUGOqUBmg%2FnuDIw3SLE64AmoeqJqtVkSGy40N%2BRJv545PKj92Jz6ra%2BGTS3spK8NRIloaCRuc%2FcEl3E7NxTjrHzXQhX%2FnxO1%2Bz6JkMk29rHyKGSLYa%2FArSRotHMAGMWaowVb2jjikkhm19Mm2RvW0eeM8QV%2BTRULlTmaQFLn8OIC%2FNIvgE4ML%2BkuSPMucTcXHGoIyEpxLrGVynjIa44yyWoyOAzw%2BbdFprf&X-Amz-Signature=fa81c661f96a1823ca0d0e6f27253efb30c2eda0ba521749d10acd6da834cc10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665MUBQGQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBYjqqJ1AUKQDEp2vi%2Ffjj3j9M0AkTTraz7HMcQeKgIHAiEApPESG0l3eivzzP3U4qJQ4rEmf7%2FyNyv5kSHSzhedEX0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDN83u9GdceIhS6gplyrcA0Dc8MCezLS4YiklJ7cPpTNBaYbzn9sQHRxxXOlHUNmH0feOKJawPFvZTTvVOc04iZfUoh2REWLmRqF8Xj5C3J4Y0WjIJScxwIG1dyRAL6AoLUNZU6MzfUIXwZQQiJ9sK3A1j%2FwHozYiL2QZXVupH5qgm4yCaHtVYlez1UR5C2C3Q%2BePsTvaovZnivoKiJMEJnbea0FHwECEwGSFILw8buzeKK21JzTiw51w0V7opzZYMdqAmqYxV2ZaH3jDvxlDoOfm1rdz9xpvLfQWKMSJ6DdRQjgGe5jK%2FxTyqvVN9YbNOMv2tOvqJAtzPrsvh0hJuHeUApBvtGZ%2Bt137KgRFkiqZadyiE7wURy80UdPJDcdU9H7A9KfeB%2Bk3n%2FQFEnWGooSY5m62HS5NAuln4KFt%2Bbfmcj%2Fd2l%2BZuA2VJYjfTDSZhFUXko30OClsRDYM61%2Bo%2BUc95yCbh1M6nstJpYZMU1qCsvxUgq1Qq%2BNAHnvpRIWPoPGEtUvzy1lONxnDthMRW3QQ8UgkTcd0tcV2xoowtw3g8rtnrSm4bv2ptfy6ozJuRQT12aNowfz1Gd0kypmKivEclFhqXuUnjbSL9BocEdHKeFfnBjuPS%2BJRf%2B8yYqJFYgW1ZqMKzL%2FRykPBMOqbgsUGOqUBmg%2FnuDIw3SLE64AmoeqJqtVkSGy40N%2BRJv545PKj92Jz6ra%2BGTS3spK8NRIloaCRuc%2FcEl3E7NxTjrHzXQhX%2FnxO1%2Bz6JkMk29rHyKGSLYa%2FArSRotHMAGMWaowVb2jjikkhm19Mm2RvW0eeM8QV%2BTRULlTmaQFLn8OIC%2FNIvgE4ML%2BkuSPMucTcXHGoIyEpxLrGVynjIa44yyWoyOAzw%2BbdFprf&X-Amz-Signature=eb4ee3e2b22b4a8e3e2b9f19bcce5f8e64c898b1e1ec1f4f13d4290a79a2de9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665MUBQGQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBYjqqJ1AUKQDEp2vi%2Ffjj3j9M0AkTTraz7HMcQeKgIHAiEApPESG0l3eivzzP3U4qJQ4rEmf7%2FyNyv5kSHSzhedEX0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDN83u9GdceIhS6gplyrcA0Dc8MCezLS4YiklJ7cPpTNBaYbzn9sQHRxxXOlHUNmH0feOKJawPFvZTTvVOc04iZfUoh2REWLmRqF8Xj5C3J4Y0WjIJScxwIG1dyRAL6AoLUNZU6MzfUIXwZQQiJ9sK3A1j%2FwHozYiL2QZXVupH5qgm4yCaHtVYlez1UR5C2C3Q%2BePsTvaovZnivoKiJMEJnbea0FHwECEwGSFILw8buzeKK21JzTiw51w0V7opzZYMdqAmqYxV2ZaH3jDvxlDoOfm1rdz9xpvLfQWKMSJ6DdRQjgGe5jK%2FxTyqvVN9YbNOMv2tOvqJAtzPrsvh0hJuHeUApBvtGZ%2Bt137KgRFkiqZadyiE7wURy80UdPJDcdU9H7A9KfeB%2Bk3n%2FQFEnWGooSY5m62HS5NAuln4KFt%2Bbfmcj%2Fd2l%2BZuA2VJYjfTDSZhFUXko30OClsRDYM61%2Bo%2BUc95yCbh1M6nstJpYZMU1qCsvxUgq1Qq%2BNAHnvpRIWPoPGEtUvzy1lONxnDthMRW3QQ8UgkTcd0tcV2xoowtw3g8rtnrSm4bv2ptfy6ozJuRQT12aNowfz1Gd0kypmKivEclFhqXuUnjbSL9BocEdHKeFfnBjuPS%2BJRf%2B8yYqJFYgW1ZqMKzL%2FRykPBMOqbgsUGOqUBmg%2FnuDIw3SLE64AmoeqJqtVkSGy40N%2BRJv545PKj92Jz6ra%2BGTS3spK8NRIloaCRuc%2FcEl3E7NxTjrHzXQhX%2FnxO1%2Bz6JkMk29rHyKGSLYa%2FArSRotHMAGMWaowVb2jjikkhm19Mm2RvW0eeM8QV%2BTRULlTmaQFLn8OIC%2FNIvgE4ML%2BkuSPMucTcXHGoIyEpxLrGVynjIa44yyWoyOAzw%2BbdFprf&X-Amz-Signature=c7de09ffd7475be957c4d246e9ac9faf1b410390997847e14576864d9c204199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665MUBQGQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBYjqqJ1AUKQDEp2vi%2Ffjj3j9M0AkTTraz7HMcQeKgIHAiEApPESG0l3eivzzP3U4qJQ4rEmf7%2FyNyv5kSHSzhedEX0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDN83u9GdceIhS6gplyrcA0Dc8MCezLS4YiklJ7cPpTNBaYbzn9sQHRxxXOlHUNmH0feOKJawPFvZTTvVOc04iZfUoh2REWLmRqF8Xj5C3J4Y0WjIJScxwIG1dyRAL6AoLUNZU6MzfUIXwZQQiJ9sK3A1j%2FwHozYiL2QZXVupH5qgm4yCaHtVYlez1UR5C2C3Q%2BePsTvaovZnivoKiJMEJnbea0FHwECEwGSFILw8buzeKK21JzTiw51w0V7opzZYMdqAmqYxV2ZaH3jDvxlDoOfm1rdz9xpvLfQWKMSJ6DdRQjgGe5jK%2FxTyqvVN9YbNOMv2tOvqJAtzPrsvh0hJuHeUApBvtGZ%2Bt137KgRFkiqZadyiE7wURy80UdPJDcdU9H7A9KfeB%2Bk3n%2FQFEnWGooSY5m62HS5NAuln4KFt%2Bbfmcj%2Fd2l%2BZuA2VJYjfTDSZhFUXko30OClsRDYM61%2Bo%2BUc95yCbh1M6nstJpYZMU1qCsvxUgq1Qq%2BNAHnvpRIWPoPGEtUvzy1lONxnDthMRW3QQ8UgkTcd0tcV2xoowtw3g8rtnrSm4bv2ptfy6ozJuRQT12aNowfz1Gd0kypmKivEclFhqXuUnjbSL9BocEdHKeFfnBjuPS%2BJRf%2B8yYqJFYgW1ZqMKzL%2FRykPBMOqbgsUGOqUBmg%2FnuDIw3SLE64AmoeqJqtVkSGy40N%2BRJv545PKj92Jz6ra%2BGTS3spK8NRIloaCRuc%2FcEl3E7NxTjrHzXQhX%2FnxO1%2Bz6JkMk29rHyKGSLYa%2FArSRotHMAGMWaowVb2jjikkhm19Mm2RvW0eeM8QV%2BTRULlTmaQFLn8OIC%2FNIvgE4ML%2BkuSPMucTcXHGoIyEpxLrGVynjIa44yyWoyOAzw%2BbdFprf&X-Amz-Signature=f6937620b5376c24dffac795f45d03d51ac82006536fcd9176ec3a756f4bf7a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665MUBQGQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBYjqqJ1AUKQDEp2vi%2Ffjj3j9M0AkTTraz7HMcQeKgIHAiEApPESG0l3eivzzP3U4qJQ4rEmf7%2FyNyv5kSHSzhedEX0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDN83u9GdceIhS6gplyrcA0Dc8MCezLS4YiklJ7cPpTNBaYbzn9sQHRxxXOlHUNmH0feOKJawPFvZTTvVOc04iZfUoh2REWLmRqF8Xj5C3J4Y0WjIJScxwIG1dyRAL6AoLUNZU6MzfUIXwZQQiJ9sK3A1j%2FwHozYiL2QZXVupH5qgm4yCaHtVYlez1UR5C2C3Q%2BePsTvaovZnivoKiJMEJnbea0FHwECEwGSFILw8buzeKK21JzTiw51w0V7opzZYMdqAmqYxV2ZaH3jDvxlDoOfm1rdz9xpvLfQWKMSJ6DdRQjgGe5jK%2FxTyqvVN9YbNOMv2tOvqJAtzPrsvh0hJuHeUApBvtGZ%2Bt137KgRFkiqZadyiE7wURy80UdPJDcdU9H7A9KfeB%2Bk3n%2FQFEnWGooSY5m62HS5NAuln4KFt%2Bbfmcj%2Fd2l%2BZuA2VJYjfTDSZhFUXko30OClsRDYM61%2Bo%2BUc95yCbh1M6nstJpYZMU1qCsvxUgq1Qq%2BNAHnvpRIWPoPGEtUvzy1lONxnDthMRW3QQ8UgkTcd0tcV2xoowtw3g8rtnrSm4bv2ptfy6ozJuRQT12aNowfz1Gd0kypmKivEclFhqXuUnjbSL9BocEdHKeFfnBjuPS%2BJRf%2B8yYqJFYgW1ZqMKzL%2FRykPBMOqbgsUGOqUBmg%2FnuDIw3SLE64AmoeqJqtVkSGy40N%2BRJv545PKj92Jz6ra%2BGTS3spK8NRIloaCRuc%2FcEl3E7NxTjrHzXQhX%2FnxO1%2Bz6JkMk29rHyKGSLYa%2FArSRotHMAGMWaowVb2jjikkhm19Mm2RvW0eeM8QV%2BTRULlTmaQFLn8OIC%2FNIvgE4ML%2BkuSPMucTcXHGoIyEpxLrGVynjIa44yyWoyOAzw%2BbdFprf&X-Amz-Signature=53cae3e9e568e7691f5570ec6971aca1adecbb365aabec43a8eb92b495921ccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665MUBQGQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBYjqqJ1AUKQDEp2vi%2Ffjj3j9M0AkTTraz7HMcQeKgIHAiEApPESG0l3eivzzP3U4qJQ4rEmf7%2FyNyv5kSHSzhedEX0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDN83u9GdceIhS6gplyrcA0Dc8MCezLS4YiklJ7cPpTNBaYbzn9sQHRxxXOlHUNmH0feOKJawPFvZTTvVOc04iZfUoh2REWLmRqF8Xj5C3J4Y0WjIJScxwIG1dyRAL6AoLUNZU6MzfUIXwZQQiJ9sK3A1j%2FwHozYiL2QZXVupH5qgm4yCaHtVYlez1UR5C2C3Q%2BePsTvaovZnivoKiJMEJnbea0FHwECEwGSFILw8buzeKK21JzTiw51w0V7opzZYMdqAmqYxV2ZaH3jDvxlDoOfm1rdz9xpvLfQWKMSJ6DdRQjgGe5jK%2FxTyqvVN9YbNOMv2tOvqJAtzPrsvh0hJuHeUApBvtGZ%2Bt137KgRFkiqZadyiE7wURy80UdPJDcdU9H7A9KfeB%2Bk3n%2FQFEnWGooSY5m62HS5NAuln4KFt%2Bbfmcj%2Fd2l%2BZuA2VJYjfTDSZhFUXko30OClsRDYM61%2Bo%2BUc95yCbh1M6nstJpYZMU1qCsvxUgq1Qq%2BNAHnvpRIWPoPGEtUvzy1lONxnDthMRW3QQ8UgkTcd0tcV2xoowtw3g8rtnrSm4bv2ptfy6ozJuRQT12aNowfz1Gd0kypmKivEclFhqXuUnjbSL9BocEdHKeFfnBjuPS%2BJRf%2B8yYqJFYgW1ZqMKzL%2FRykPBMOqbgsUGOqUBmg%2FnuDIw3SLE64AmoeqJqtVkSGy40N%2BRJv545PKj92Jz6ra%2BGTS3spK8NRIloaCRuc%2FcEl3E7NxTjrHzXQhX%2FnxO1%2Bz6JkMk29rHyKGSLYa%2FArSRotHMAGMWaowVb2jjikkhm19Mm2RvW0eeM8QV%2BTRULlTmaQFLn8OIC%2FNIvgE4ML%2BkuSPMucTcXHGoIyEpxLrGVynjIa44yyWoyOAzw%2BbdFprf&X-Amz-Signature=481e17aad16f8c82cfa30ca585d5ac6f6b51da0160f9bded1b241db04ea15c9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665MUBQGQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBYjqqJ1AUKQDEp2vi%2Ffjj3j9M0AkTTraz7HMcQeKgIHAiEApPESG0l3eivzzP3U4qJQ4rEmf7%2FyNyv5kSHSzhedEX0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDN83u9GdceIhS6gplyrcA0Dc8MCezLS4YiklJ7cPpTNBaYbzn9sQHRxxXOlHUNmH0feOKJawPFvZTTvVOc04iZfUoh2REWLmRqF8Xj5C3J4Y0WjIJScxwIG1dyRAL6AoLUNZU6MzfUIXwZQQiJ9sK3A1j%2FwHozYiL2QZXVupH5qgm4yCaHtVYlez1UR5C2C3Q%2BePsTvaovZnivoKiJMEJnbea0FHwECEwGSFILw8buzeKK21JzTiw51w0V7opzZYMdqAmqYxV2ZaH3jDvxlDoOfm1rdz9xpvLfQWKMSJ6DdRQjgGe5jK%2FxTyqvVN9YbNOMv2tOvqJAtzPrsvh0hJuHeUApBvtGZ%2Bt137KgRFkiqZadyiE7wURy80UdPJDcdU9H7A9KfeB%2Bk3n%2FQFEnWGooSY5m62HS5NAuln4KFt%2Bbfmcj%2Fd2l%2BZuA2VJYjfTDSZhFUXko30OClsRDYM61%2Bo%2BUc95yCbh1M6nstJpYZMU1qCsvxUgq1Qq%2BNAHnvpRIWPoPGEtUvzy1lONxnDthMRW3QQ8UgkTcd0tcV2xoowtw3g8rtnrSm4bv2ptfy6ozJuRQT12aNowfz1Gd0kypmKivEclFhqXuUnjbSL9BocEdHKeFfnBjuPS%2BJRf%2B8yYqJFYgW1ZqMKzL%2FRykPBMOqbgsUGOqUBmg%2FnuDIw3SLE64AmoeqJqtVkSGy40N%2BRJv545PKj92Jz6ra%2BGTS3spK8NRIloaCRuc%2FcEl3E7NxTjrHzXQhX%2FnxO1%2Bz6JkMk29rHyKGSLYa%2FArSRotHMAGMWaowVb2jjikkhm19Mm2RvW0eeM8QV%2BTRULlTmaQFLn8OIC%2FNIvgE4ML%2BkuSPMucTcXHGoIyEpxLrGVynjIa44yyWoyOAzw%2BbdFprf&X-Amz-Signature=6320dd0d9c460ebf4b30eccf26c49e76a858b800cd4630cd2b633b1ae6c41fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
