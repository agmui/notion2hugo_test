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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4OZXWY3%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCYmgl%2FuAF2dbSSe0ONSoRuTOQbG%2FAUj%2BF4xr8zl%2FUIoQIgKQHS%2FsxxwLfIBaojFAoaSdpiqT4y9KCfNVb21OjzyCgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGpNYOUq3vzVNJmZSrcA7TZmToCXkflroMu9Oc4gft0c09idxQfnIMG4YzpbufYuLYFfh9V300utUNCrM%2Bgu9alGauHlNAUK4q8K4%2FLyMt0V9wUuus48dhRa0TGkBJOGf3kuDLBOa25qc6slVd1bi2cOXX2H%2F4KVRJXewjz3AKp7wL2VE84efo3bybmVQVUndbMHBwEGNBdF938G0fWJ8NAV5401WwPhBOaAUH4LKTrNCSQ%2BLPQ3BJs2Hzunznq%2FaSFpAFWZEWN5wp5vFFULi%2FGJFzjMofon5tfiA1LBVRm2AINJ9zMFiKQwQu5iwJlCC4nTCnByemyJVNKzuzxE91Jyym59iGiX0Qn%2BIaXJjmutevnKwzU%2B3Xof%2B1AuM8wJGLh0UL%2BEQibPvCbw%2F%2B2y0cBUHQNUN7fD3oxuw8c93CdyD58GIqIIRtaHddGC7iXjH%2FJ6bCVVbJW2jK%2FMYny3m8E4rNy4iyGO2oC67dEqArts7WhKQzskw3d%2B3MhnWM%2FejAqT%2FR4FgFoRTWS8%2Bf7v6OV%2FWnmoICG4skIItLV4YisZHslASBaUvD6vjzJme3RBAD9kXtfvQq8ew2xFKopVvDDLjQYk2rvocZ9PdkegFsOg3JPV0FfLYjycGBHj1BRYXviiFCqQNDxJSvVMIyn6dAGOqUB0oWWU89qvkxcL08mnT5os0Qq1LJgcalqWs7kznvwBPxNtq3hmerb4PSR9%2BGishIM7OZUMFMkFGDfUrkpbimulPB9YGS%2F4MqwiSY%2BMrHDyodzSlyI860lodwqs2pq8PVe6I0wL6%2FmsMgBcNKmS8BBf0MGwA52u0QhEhMjDZAmXpmrmiSJVBUjqsYa%2BIfCceowpLUIsclL%2BX8zaSeAP0KH04bCPauK&X-Amz-Signature=4d37a024f0846cf10a26e7ce565cb1860683fee17b261acaffacc3bad1474e54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4OZXWY3%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCYmgl%2FuAF2dbSSe0ONSoRuTOQbG%2FAUj%2BF4xr8zl%2FUIoQIgKQHS%2FsxxwLfIBaojFAoaSdpiqT4y9KCfNVb21OjzyCgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGpNYOUq3vzVNJmZSrcA7TZmToCXkflroMu9Oc4gft0c09idxQfnIMG4YzpbufYuLYFfh9V300utUNCrM%2Bgu9alGauHlNAUK4q8K4%2FLyMt0V9wUuus48dhRa0TGkBJOGf3kuDLBOa25qc6slVd1bi2cOXX2H%2F4KVRJXewjz3AKp7wL2VE84efo3bybmVQVUndbMHBwEGNBdF938G0fWJ8NAV5401WwPhBOaAUH4LKTrNCSQ%2BLPQ3BJs2Hzunznq%2FaSFpAFWZEWN5wp5vFFULi%2FGJFzjMofon5tfiA1LBVRm2AINJ9zMFiKQwQu5iwJlCC4nTCnByemyJVNKzuzxE91Jyym59iGiX0Qn%2BIaXJjmutevnKwzU%2B3Xof%2B1AuM8wJGLh0UL%2BEQibPvCbw%2F%2B2y0cBUHQNUN7fD3oxuw8c93CdyD58GIqIIRtaHddGC7iXjH%2FJ6bCVVbJW2jK%2FMYny3m8E4rNy4iyGO2oC67dEqArts7WhKQzskw3d%2B3MhnWM%2FejAqT%2FR4FgFoRTWS8%2Bf7v6OV%2FWnmoICG4skIItLV4YisZHslASBaUvD6vjzJme3RBAD9kXtfvQq8ew2xFKopVvDDLjQYk2rvocZ9PdkegFsOg3JPV0FfLYjycGBHj1BRYXviiFCqQNDxJSvVMIyn6dAGOqUB0oWWU89qvkxcL08mnT5os0Qq1LJgcalqWs7kznvwBPxNtq3hmerb4PSR9%2BGishIM7OZUMFMkFGDfUrkpbimulPB9YGS%2F4MqwiSY%2BMrHDyodzSlyI860lodwqs2pq8PVe6I0wL6%2FmsMgBcNKmS8BBf0MGwA52u0QhEhMjDZAmXpmrmiSJVBUjqsYa%2BIfCceowpLUIsclL%2BX8zaSeAP0KH04bCPauK&X-Amz-Signature=0a2be8f75912a35c1c933fcf48d61e6e43ed0a7d02229ef64bb618351d102dfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4OZXWY3%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCYmgl%2FuAF2dbSSe0ONSoRuTOQbG%2FAUj%2BF4xr8zl%2FUIoQIgKQHS%2FsxxwLfIBaojFAoaSdpiqT4y9KCfNVb21OjzyCgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGpNYOUq3vzVNJmZSrcA7TZmToCXkflroMu9Oc4gft0c09idxQfnIMG4YzpbufYuLYFfh9V300utUNCrM%2Bgu9alGauHlNAUK4q8K4%2FLyMt0V9wUuus48dhRa0TGkBJOGf3kuDLBOa25qc6slVd1bi2cOXX2H%2F4KVRJXewjz3AKp7wL2VE84efo3bybmVQVUndbMHBwEGNBdF938G0fWJ8NAV5401WwPhBOaAUH4LKTrNCSQ%2BLPQ3BJs2Hzunznq%2FaSFpAFWZEWN5wp5vFFULi%2FGJFzjMofon5tfiA1LBVRm2AINJ9zMFiKQwQu5iwJlCC4nTCnByemyJVNKzuzxE91Jyym59iGiX0Qn%2BIaXJjmutevnKwzU%2B3Xof%2B1AuM8wJGLh0UL%2BEQibPvCbw%2F%2B2y0cBUHQNUN7fD3oxuw8c93CdyD58GIqIIRtaHddGC7iXjH%2FJ6bCVVbJW2jK%2FMYny3m8E4rNy4iyGO2oC67dEqArts7WhKQzskw3d%2B3MhnWM%2FejAqT%2FR4FgFoRTWS8%2Bf7v6OV%2FWnmoICG4skIItLV4YisZHslASBaUvD6vjzJme3RBAD9kXtfvQq8ew2xFKopVvDDLjQYk2rvocZ9PdkegFsOg3JPV0FfLYjycGBHj1BRYXviiFCqQNDxJSvVMIyn6dAGOqUB0oWWU89qvkxcL08mnT5os0Qq1LJgcalqWs7kznvwBPxNtq3hmerb4PSR9%2BGishIM7OZUMFMkFGDfUrkpbimulPB9YGS%2F4MqwiSY%2BMrHDyodzSlyI860lodwqs2pq8PVe6I0wL6%2FmsMgBcNKmS8BBf0MGwA52u0QhEhMjDZAmXpmrmiSJVBUjqsYa%2BIfCceowpLUIsclL%2BX8zaSeAP0KH04bCPauK&X-Amz-Signature=f7479660a1eca6d657614fd9ace025870b9c756ca482dbbb4f42bd69441763b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4OZXWY3%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCYmgl%2FuAF2dbSSe0ONSoRuTOQbG%2FAUj%2BF4xr8zl%2FUIoQIgKQHS%2FsxxwLfIBaojFAoaSdpiqT4y9KCfNVb21OjzyCgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGpNYOUq3vzVNJmZSrcA7TZmToCXkflroMu9Oc4gft0c09idxQfnIMG4YzpbufYuLYFfh9V300utUNCrM%2Bgu9alGauHlNAUK4q8K4%2FLyMt0V9wUuus48dhRa0TGkBJOGf3kuDLBOa25qc6slVd1bi2cOXX2H%2F4KVRJXewjz3AKp7wL2VE84efo3bybmVQVUndbMHBwEGNBdF938G0fWJ8NAV5401WwPhBOaAUH4LKTrNCSQ%2BLPQ3BJs2Hzunznq%2FaSFpAFWZEWN5wp5vFFULi%2FGJFzjMofon5tfiA1LBVRm2AINJ9zMFiKQwQu5iwJlCC4nTCnByemyJVNKzuzxE91Jyym59iGiX0Qn%2BIaXJjmutevnKwzU%2B3Xof%2B1AuM8wJGLh0UL%2BEQibPvCbw%2F%2B2y0cBUHQNUN7fD3oxuw8c93CdyD58GIqIIRtaHddGC7iXjH%2FJ6bCVVbJW2jK%2FMYny3m8E4rNy4iyGO2oC67dEqArts7WhKQzskw3d%2B3MhnWM%2FejAqT%2FR4FgFoRTWS8%2Bf7v6OV%2FWnmoICG4skIItLV4YisZHslASBaUvD6vjzJme3RBAD9kXtfvQq8ew2xFKopVvDDLjQYk2rvocZ9PdkegFsOg3JPV0FfLYjycGBHj1BRYXviiFCqQNDxJSvVMIyn6dAGOqUB0oWWU89qvkxcL08mnT5os0Qq1LJgcalqWs7kznvwBPxNtq3hmerb4PSR9%2BGishIM7OZUMFMkFGDfUrkpbimulPB9YGS%2F4MqwiSY%2BMrHDyodzSlyI860lodwqs2pq8PVe6I0wL6%2FmsMgBcNKmS8BBf0MGwA52u0QhEhMjDZAmXpmrmiSJVBUjqsYa%2BIfCceowpLUIsclL%2BX8zaSeAP0KH04bCPauK&X-Amz-Signature=dc96d628cf9377bcd9c4de5259984520b1cb94134a0ccd02618d5a9687d3cce0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4OZXWY3%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCYmgl%2FuAF2dbSSe0ONSoRuTOQbG%2FAUj%2BF4xr8zl%2FUIoQIgKQHS%2FsxxwLfIBaojFAoaSdpiqT4y9KCfNVb21OjzyCgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGpNYOUq3vzVNJmZSrcA7TZmToCXkflroMu9Oc4gft0c09idxQfnIMG4YzpbufYuLYFfh9V300utUNCrM%2Bgu9alGauHlNAUK4q8K4%2FLyMt0V9wUuus48dhRa0TGkBJOGf3kuDLBOa25qc6slVd1bi2cOXX2H%2F4KVRJXewjz3AKp7wL2VE84efo3bybmVQVUndbMHBwEGNBdF938G0fWJ8NAV5401WwPhBOaAUH4LKTrNCSQ%2BLPQ3BJs2Hzunznq%2FaSFpAFWZEWN5wp5vFFULi%2FGJFzjMofon5tfiA1LBVRm2AINJ9zMFiKQwQu5iwJlCC4nTCnByemyJVNKzuzxE91Jyym59iGiX0Qn%2BIaXJjmutevnKwzU%2B3Xof%2B1AuM8wJGLh0UL%2BEQibPvCbw%2F%2B2y0cBUHQNUN7fD3oxuw8c93CdyD58GIqIIRtaHddGC7iXjH%2FJ6bCVVbJW2jK%2FMYny3m8E4rNy4iyGO2oC67dEqArts7WhKQzskw3d%2B3MhnWM%2FejAqT%2FR4FgFoRTWS8%2Bf7v6OV%2FWnmoICG4skIItLV4YisZHslASBaUvD6vjzJme3RBAD9kXtfvQq8ew2xFKopVvDDLjQYk2rvocZ9PdkegFsOg3JPV0FfLYjycGBHj1BRYXviiFCqQNDxJSvVMIyn6dAGOqUB0oWWU89qvkxcL08mnT5os0Qq1LJgcalqWs7kznvwBPxNtq3hmerb4PSR9%2BGishIM7OZUMFMkFGDfUrkpbimulPB9YGS%2F4MqwiSY%2BMrHDyodzSlyI860lodwqs2pq8PVe6I0wL6%2FmsMgBcNKmS8BBf0MGwA52u0QhEhMjDZAmXpmrmiSJVBUjqsYa%2BIfCceowpLUIsclL%2BX8zaSeAP0KH04bCPauK&X-Amz-Signature=70fc280bc4c810c6fbfa0be7b5dd75373be0a09a89b2c9fee420cc0697f48457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4OZXWY3%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCYmgl%2FuAF2dbSSe0ONSoRuTOQbG%2FAUj%2BF4xr8zl%2FUIoQIgKQHS%2FsxxwLfIBaojFAoaSdpiqT4y9KCfNVb21OjzyCgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGpNYOUq3vzVNJmZSrcA7TZmToCXkflroMu9Oc4gft0c09idxQfnIMG4YzpbufYuLYFfh9V300utUNCrM%2Bgu9alGauHlNAUK4q8K4%2FLyMt0V9wUuus48dhRa0TGkBJOGf3kuDLBOa25qc6slVd1bi2cOXX2H%2F4KVRJXewjz3AKp7wL2VE84efo3bybmVQVUndbMHBwEGNBdF938G0fWJ8NAV5401WwPhBOaAUH4LKTrNCSQ%2BLPQ3BJs2Hzunznq%2FaSFpAFWZEWN5wp5vFFULi%2FGJFzjMofon5tfiA1LBVRm2AINJ9zMFiKQwQu5iwJlCC4nTCnByemyJVNKzuzxE91Jyym59iGiX0Qn%2BIaXJjmutevnKwzU%2B3Xof%2B1AuM8wJGLh0UL%2BEQibPvCbw%2F%2B2y0cBUHQNUN7fD3oxuw8c93CdyD58GIqIIRtaHddGC7iXjH%2FJ6bCVVbJW2jK%2FMYny3m8E4rNy4iyGO2oC67dEqArts7WhKQzskw3d%2B3MhnWM%2FejAqT%2FR4FgFoRTWS8%2Bf7v6OV%2FWnmoICG4skIItLV4YisZHslASBaUvD6vjzJme3RBAD9kXtfvQq8ew2xFKopVvDDLjQYk2rvocZ9PdkegFsOg3JPV0FfLYjycGBHj1BRYXviiFCqQNDxJSvVMIyn6dAGOqUB0oWWU89qvkxcL08mnT5os0Qq1LJgcalqWs7kznvwBPxNtq3hmerb4PSR9%2BGishIM7OZUMFMkFGDfUrkpbimulPB9YGS%2F4MqwiSY%2BMrHDyodzSlyI860lodwqs2pq8PVe6I0wL6%2FmsMgBcNKmS8BBf0MGwA52u0QhEhMjDZAmXpmrmiSJVBUjqsYa%2BIfCceowpLUIsclL%2BX8zaSeAP0KH04bCPauK&X-Amz-Signature=8145ee60dd578104cc1eeca72998326cf3fda2fb58729fe544274605e0907cab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4OZXWY3%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCYmgl%2FuAF2dbSSe0ONSoRuTOQbG%2FAUj%2BF4xr8zl%2FUIoQIgKQHS%2FsxxwLfIBaojFAoaSdpiqT4y9KCfNVb21OjzyCgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGpNYOUq3vzVNJmZSrcA7TZmToCXkflroMu9Oc4gft0c09idxQfnIMG4YzpbufYuLYFfh9V300utUNCrM%2Bgu9alGauHlNAUK4q8K4%2FLyMt0V9wUuus48dhRa0TGkBJOGf3kuDLBOa25qc6slVd1bi2cOXX2H%2F4KVRJXewjz3AKp7wL2VE84efo3bybmVQVUndbMHBwEGNBdF938G0fWJ8NAV5401WwPhBOaAUH4LKTrNCSQ%2BLPQ3BJs2Hzunznq%2FaSFpAFWZEWN5wp5vFFULi%2FGJFzjMofon5tfiA1LBVRm2AINJ9zMFiKQwQu5iwJlCC4nTCnByemyJVNKzuzxE91Jyym59iGiX0Qn%2BIaXJjmutevnKwzU%2B3Xof%2B1AuM8wJGLh0UL%2BEQibPvCbw%2F%2B2y0cBUHQNUN7fD3oxuw8c93CdyD58GIqIIRtaHddGC7iXjH%2FJ6bCVVbJW2jK%2FMYny3m8E4rNy4iyGO2oC67dEqArts7WhKQzskw3d%2B3MhnWM%2FejAqT%2FR4FgFoRTWS8%2Bf7v6OV%2FWnmoICG4skIItLV4YisZHslASBaUvD6vjzJme3RBAD9kXtfvQq8ew2xFKopVvDDLjQYk2rvocZ9PdkegFsOg3JPV0FfLYjycGBHj1BRYXviiFCqQNDxJSvVMIyn6dAGOqUB0oWWU89qvkxcL08mnT5os0Qq1LJgcalqWs7kznvwBPxNtq3hmerb4PSR9%2BGishIM7OZUMFMkFGDfUrkpbimulPB9YGS%2F4MqwiSY%2BMrHDyodzSlyI860lodwqs2pq8PVe6I0wL6%2FmsMgBcNKmS8BBf0MGwA52u0QhEhMjDZAmXpmrmiSJVBUjqsYa%2BIfCceowpLUIsclL%2BX8zaSeAP0KH04bCPauK&X-Amz-Signature=427655a4e772777041614590539048d450789c7e420494f3fd0b1b7ecbea480f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4OZXWY3%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCYmgl%2FuAF2dbSSe0ONSoRuTOQbG%2FAUj%2BF4xr8zl%2FUIoQIgKQHS%2FsxxwLfIBaojFAoaSdpiqT4y9KCfNVb21OjzyCgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGpNYOUq3vzVNJmZSrcA7TZmToCXkflroMu9Oc4gft0c09idxQfnIMG4YzpbufYuLYFfh9V300utUNCrM%2Bgu9alGauHlNAUK4q8K4%2FLyMt0V9wUuus48dhRa0TGkBJOGf3kuDLBOa25qc6slVd1bi2cOXX2H%2F4KVRJXewjz3AKp7wL2VE84efo3bybmVQVUndbMHBwEGNBdF938G0fWJ8NAV5401WwPhBOaAUH4LKTrNCSQ%2BLPQ3BJs2Hzunznq%2FaSFpAFWZEWN5wp5vFFULi%2FGJFzjMofon5tfiA1LBVRm2AINJ9zMFiKQwQu5iwJlCC4nTCnByemyJVNKzuzxE91Jyym59iGiX0Qn%2BIaXJjmutevnKwzU%2B3Xof%2B1AuM8wJGLh0UL%2BEQibPvCbw%2F%2B2y0cBUHQNUN7fD3oxuw8c93CdyD58GIqIIRtaHddGC7iXjH%2FJ6bCVVbJW2jK%2FMYny3m8E4rNy4iyGO2oC67dEqArts7WhKQzskw3d%2B3MhnWM%2FejAqT%2FR4FgFoRTWS8%2Bf7v6OV%2FWnmoICG4skIItLV4YisZHslASBaUvD6vjzJme3RBAD9kXtfvQq8ew2xFKopVvDDLjQYk2rvocZ9PdkegFsOg3JPV0FfLYjycGBHj1BRYXviiFCqQNDxJSvVMIyn6dAGOqUB0oWWU89qvkxcL08mnT5os0Qq1LJgcalqWs7kznvwBPxNtq3hmerb4PSR9%2BGishIM7OZUMFMkFGDfUrkpbimulPB9YGS%2F4MqwiSY%2BMrHDyodzSlyI860lodwqs2pq8PVe6I0wL6%2FmsMgBcNKmS8BBf0MGwA52u0QhEhMjDZAmXpmrmiSJVBUjqsYa%2BIfCceowpLUIsclL%2BX8zaSeAP0KH04bCPauK&X-Amz-Signature=656ffcdf0312fd0c268ffaeeaf1144452aae35aa152f700c50e5ad1f6a834aba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4OZXWY3%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCYmgl%2FuAF2dbSSe0ONSoRuTOQbG%2FAUj%2BF4xr8zl%2FUIoQIgKQHS%2FsxxwLfIBaojFAoaSdpiqT4y9KCfNVb21OjzyCgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGpNYOUq3vzVNJmZSrcA7TZmToCXkflroMu9Oc4gft0c09idxQfnIMG4YzpbufYuLYFfh9V300utUNCrM%2Bgu9alGauHlNAUK4q8K4%2FLyMt0V9wUuus48dhRa0TGkBJOGf3kuDLBOa25qc6slVd1bi2cOXX2H%2F4KVRJXewjz3AKp7wL2VE84efo3bybmVQVUndbMHBwEGNBdF938G0fWJ8NAV5401WwPhBOaAUH4LKTrNCSQ%2BLPQ3BJs2Hzunznq%2FaSFpAFWZEWN5wp5vFFULi%2FGJFzjMofon5tfiA1LBVRm2AINJ9zMFiKQwQu5iwJlCC4nTCnByemyJVNKzuzxE91Jyym59iGiX0Qn%2BIaXJjmutevnKwzU%2B3Xof%2B1AuM8wJGLh0UL%2BEQibPvCbw%2F%2B2y0cBUHQNUN7fD3oxuw8c93CdyD58GIqIIRtaHddGC7iXjH%2FJ6bCVVbJW2jK%2FMYny3m8E4rNy4iyGO2oC67dEqArts7WhKQzskw3d%2B3MhnWM%2FejAqT%2FR4FgFoRTWS8%2Bf7v6OV%2FWnmoICG4skIItLV4YisZHslASBaUvD6vjzJme3RBAD9kXtfvQq8ew2xFKopVvDDLjQYk2rvocZ9PdkegFsOg3JPV0FfLYjycGBHj1BRYXviiFCqQNDxJSvVMIyn6dAGOqUB0oWWU89qvkxcL08mnT5os0Qq1LJgcalqWs7kznvwBPxNtq3hmerb4PSR9%2BGishIM7OZUMFMkFGDfUrkpbimulPB9YGS%2F4MqwiSY%2BMrHDyodzSlyI860lodwqs2pq8PVe6I0wL6%2FmsMgBcNKmS8BBf0MGwA52u0QhEhMjDZAmXpmrmiSJVBUjqsYa%2BIfCceowpLUIsclL%2BX8zaSeAP0KH04bCPauK&X-Amz-Signature=ec1dc3d10d889f439779a17e6c3bdc3f23e02339da61e41f1dc4a69e64e6e3e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4OZXWY3%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCYmgl%2FuAF2dbSSe0ONSoRuTOQbG%2FAUj%2BF4xr8zl%2FUIoQIgKQHS%2FsxxwLfIBaojFAoaSdpiqT4y9KCfNVb21OjzyCgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGpNYOUq3vzVNJmZSrcA7TZmToCXkflroMu9Oc4gft0c09idxQfnIMG4YzpbufYuLYFfh9V300utUNCrM%2Bgu9alGauHlNAUK4q8K4%2FLyMt0V9wUuus48dhRa0TGkBJOGf3kuDLBOa25qc6slVd1bi2cOXX2H%2F4KVRJXewjz3AKp7wL2VE84efo3bybmVQVUndbMHBwEGNBdF938G0fWJ8NAV5401WwPhBOaAUH4LKTrNCSQ%2BLPQ3BJs2Hzunznq%2FaSFpAFWZEWN5wp5vFFULi%2FGJFzjMofon5tfiA1LBVRm2AINJ9zMFiKQwQu5iwJlCC4nTCnByemyJVNKzuzxE91Jyym59iGiX0Qn%2BIaXJjmutevnKwzU%2B3Xof%2B1AuM8wJGLh0UL%2BEQibPvCbw%2F%2B2y0cBUHQNUN7fD3oxuw8c93CdyD58GIqIIRtaHddGC7iXjH%2FJ6bCVVbJW2jK%2FMYny3m8E4rNy4iyGO2oC67dEqArts7WhKQzskw3d%2B3MhnWM%2FejAqT%2FR4FgFoRTWS8%2Bf7v6OV%2FWnmoICG4skIItLV4YisZHslASBaUvD6vjzJme3RBAD9kXtfvQq8ew2xFKopVvDDLjQYk2rvocZ9PdkegFsOg3JPV0FfLYjycGBHj1BRYXviiFCqQNDxJSvVMIyn6dAGOqUB0oWWU89qvkxcL08mnT5os0Qq1LJgcalqWs7kznvwBPxNtq3hmerb4PSR9%2BGishIM7OZUMFMkFGDfUrkpbimulPB9YGS%2F4MqwiSY%2BMrHDyodzSlyI860lodwqs2pq8PVe6I0wL6%2FmsMgBcNKmS8BBf0MGwA52u0QhEhMjDZAmXpmrmiSJVBUjqsYa%2BIfCceowpLUIsclL%2BX8zaSeAP0KH04bCPauK&X-Amz-Signature=009e345e2eac85e1195f801562da283bd8ead573e167b41feeacdeeeb89ce97a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB7OSBZM%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCXERLecHQPNqAWltm7t%2FyOuh9G5su5idG4izoAZ89qCwIhAOFTAUx2OjpUVeY6GhajiTvMGP6o5ppAtx16vglpHQbTKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igya5%2FpXz4wCU5Kr%2FgQq3AOLoTB0A0SkUFs3wGNOnbl4tgTCAcqGWv0%2FX2LUqul%2Bus5vz7QnOQjJFcjHRKzwB1PnbCfKWwfjaYFuPmVajJIo3lzSz9UZ2wi2oaN9x3t6or0rHOfpMB8Cb1Ws3dHLCI6f9eQt%2Fm0yjm%2FQnYHQU%2F59lPRwd2EGVYpxhqyap2ENMhpHbyO%2F%2BSGiDPAPZ5F%2BHHnsCso2XrKOh3Gglpjphb2ucxVTGcJ02KCt7V4WwFWEbVq5k8fmwTsEihllFq%2BPrgclAEnRK%2FpDlAvDmOwp8Z%2FsPGRgr%2BLDmuNcuGhvKg3kW2OII6JCIkYWXAfGNk3WENjhdJIUzGoVl9OFRmM5DwWDu5Ln5HiGO9P8YDjV8ROe%2BmxK6i4XPLoL2QGzIA0YLu6f%2BUaGP088PCMfyNswRjVz3ljxFt%2BYQTzR1hKAPW2jjZomsSiJXNTUhVBtM66%2BGew4K%2BG2frRMz8LuE5QfGc9g%2FK6FoUgb9mPpAWrZCwbgUsN8yy4jBhwSqYvzoGtOzh76j2RxMAil9vyImC7%2BUIqJsTGBSe%2BRbENjSScppAr%2F%2F2ljP5FpiHoxzUCXjlC40ge77YaePC9IfBq1%2FAv50IQU8YxKhAXkFK%2BMqah%2BFK7Mhevm7Pwh%2FloMTegZ4DDcpunQBjqkAe0SPNh%2BHKA5uoufDyBfFoo789HCTEDsAJXM5B6ncfDgB1GQdEidHX%2B54yXP%2ByJLM3csjW3PkL%2FbV26zm3CiojTlBFzgf9rSyKzbVWk0EfXCkcFLL9d%2FhsKkmKcoWLb9gqGQ%2FXmouQQWEbeSGF3H8VILo0YwYCrpziN1WbzSi%2F11qF9VjmqkYimxg7PY%2BMFg3jlor0pHaaXKk90qG6PLh%2B9sa93w&X-Amz-Signature=c395217d4c9f01e7b9a90a5bfae20b01465559329b6eccf9b7186df4d785d41b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IZOGKL7%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDW%2BGgYFAy%2BPPg2R0%2BdXkOB9CuOnNqbh%2BbguMom2QIwqgIgKouRuKH4ILbWTmrBuWxYH2bdrvn49offhayoGIxF%2FqEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIH0%2FKRmh9STxgJIGircA6iR2teytc%2FcruzvZ3xcvu6hxCjMB1CBtoJAfhvGL1rOMXMKQWUbe1JLzKxRLy3qzcvg1Be45csWQL5yCECJZ%2FNxMmJNu2fRhBUrU2Y5kfXOj34P%2F04dwmKYxs%2BysuCrrdFfAG5iO1%2BX9uO8nNEImvCs6AUO%2F55blZ52DqOS9FB9TxlBpjFYVqemQ%2B3bI8xC8bFFKqbtrZvVrc4824AidviWiTX8bA%2BY3pmu896fcBDCm9eDMXRl1s%2FLx%2FwrC1XdXkfL5KBNpEph3llqOTtnyT1ZTJwPOpcF0GFhYpEKfFWhnMZ8DZWmVtlUVy7a3g%2FgUWW9J7GieBExa2KH7he7OOV3L04%2FP9PjSU5KzDmsAZI4%2BgY2Hqbnh%2FmREGhdpoaulKR0EMBksOm4HfKULgZ6oihdMDrP2ASMeMLGYf5kDL824RTFh78SbxMLnvBYCw1H6kinJ3B6s6F5ZgoY71EgzGmRkAcyJ%2FYFZxWcaqvssdnzNraNxnzxANMz1ewoZ8W3Dm4tyMlaOHjJZe8Ee%2FHau1R%2BYXraISBllovAig5VUFdwzpTKUebsLyXXu6l9HxEZAoERPhbf2rUGTasY39qQC%2FLnQpKzGN2TcUkWd92e5hlffNtmOAYtTYjaG6%2FdMIym6dAGOqUB%2FHwEbz0s%2FMhJr%2FNic7diYO4iNNhpHxBX1sH%2FNCcsUk9Fhz6E2PetoFeYFKEarODPX%2Bdb91%2FUHff%2FPh2luEJdrgKguxrGButqp%2B%2F1%2FLtV9LilywtFMcxdSeq3sKXUylK6pKZ5VjK%2BhhpfjR8biPhMKnKjhoT4XRUCpd0gaXoG3XmG6MOC415STtPLuDevr%2Bm%2BADkuhyo6pD1zFKjsSS7DExzA3LRq&X-Amz-Signature=df3889dc7702c9a91bdc77eb727ce1c5fa8d72066f8a138ddfbea4afde7e2f2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NOFYG5I%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCICcnXnleQkgZDcUmVAZc4h0yv8E1p66kuO7zghQQITTKAiBNDK0w0bo5phPKi1bbOcliUydyg55v9T9QaKTrj7ESESqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjWRQGrfpN%2B7nNn%2BOKtwDtwp5NLahzXMsQqK85SH3tJz0FpG2qzC840nuVf9a3h7z7youhKvU3ftUFcCC%2BeOfZ6lzVm6lbNS5Akq3OOk%2FpVQcq9bhvi2RtmgObjSwRgK9xuCn1QQ%2BJoGxVHPKOKpQD5oqNF%2FDOqQVNK9WyLJcD%2FNCtavq7hNOBQUMJkCrRh%2Ff6hqVgyyDutxAtCRiXPpDrGDZTdpXErqa72SDApVfvS9%2F%2BWL9IUOm70aOq80LubUd2jGBik%2BPzzekqc%2FFD6zkYhcBLdIpR4cnFBT0MPgmqfUZS84aqDin01P%2BeZtD2a6mm8XqdaFn%2F%2Ftndb%2FAfVB5P%2BtG74V4JwE0seLUHQTBKFWg7VHE23d81QRIrXfEVWwwcEP7%2BmgSrpxkGTA7kOIcXiMpeJU2uyfjpDKG1nrsp4HvOddIByVoh1jEwLM8ZAckJYkg%2BWUdIpCzMaAFKfHc8pDf7gHnfWrZAYJ2YmrDkgY%2B%2FsP7Xtf6BW1zfL73ZMBzjmQybMGtSyLgNCFXivxi%2Fu6GNVqyYFA5XIaVpOWgcINn%2BG6s7juu2VdHwg0NEnl%2B%2FsfjAmfEE02RFo%2FEt8ryw%2B8o%2BSkwuyjpLSO9kxPbIwMEs1RGI17XtfuAIOYn21%2BkQmB0W0fmiquT4Mkw8abp0AY6pgFLKVq%2BJOcJ3zI%2FBJdav3nwap7m5QHnMm4u5VMjPReVP5YV2Kw4kh9HB5gK9RO3aZTXAl8l0JzaXZxUQ9s1OdOqjknzpb6F933slq37vnL1wmRxmlRP4auWdWN0%2Ftc4wwsmeALqrl7bFcNeQn%2FTWmsjkfwq2RzGTQHGgD9Adxmq0Gg0gAQZa0On1k8o0ayndT0hkZc64cVsFVKA0Rob9EjcNtP6SiUy&X-Amz-Signature=74e931d8e40351948977f9b746bc8dcd7ffb122e8147ec8336a2256d05a4bcd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4OZXWY3%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCYmgl%2FuAF2dbSSe0ONSoRuTOQbG%2FAUj%2BF4xr8zl%2FUIoQIgKQHS%2FsxxwLfIBaojFAoaSdpiqT4y9KCfNVb21OjzyCgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGpNYOUq3vzVNJmZSrcA7TZmToCXkflroMu9Oc4gft0c09idxQfnIMG4YzpbufYuLYFfh9V300utUNCrM%2Bgu9alGauHlNAUK4q8K4%2FLyMt0V9wUuus48dhRa0TGkBJOGf3kuDLBOa25qc6slVd1bi2cOXX2H%2F4KVRJXewjz3AKp7wL2VE84efo3bybmVQVUndbMHBwEGNBdF938G0fWJ8NAV5401WwPhBOaAUH4LKTrNCSQ%2BLPQ3BJs2Hzunznq%2FaSFpAFWZEWN5wp5vFFULi%2FGJFzjMofon5tfiA1LBVRm2AINJ9zMFiKQwQu5iwJlCC4nTCnByemyJVNKzuzxE91Jyym59iGiX0Qn%2BIaXJjmutevnKwzU%2B3Xof%2B1AuM8wJGLh0UL%2BEQibPvCbw%2F%2B2y0cBUHQNUN7fD3oxuw8c93CdyD58GIqIIRtaHddGC7iXjH%2FJ6bCVVbJW2jK%2FMYny3m8E4rNy4iyGO2oC67dEqArts7WhKQzskw3d%2B3MhnWM%2FejAqT%2FR4FgFoRTWS8%2Bf7v6OV%2FWnmoICG4skIItLV4YisZHslASBaUvD6vjzJme3RBAD9kXtfvQq8ew2xFKopVvDDLjQYk2rvocZ9PdkegFsOg3JPV0FfLYjycGBHj1BRYXviiFCqQNDxJSvVMIyn6dAGOqUB0oWWU89qvkxcL08mnT5os0Qq1LJgcalqWs7kznvwBPxNtq3hmerb4PSR9%2BGishIM7OZUMFMkFGDfUrkpbimulPB9YGS%2F4MqwiSY%2BMrHDyodzSlyI860lodwqs2pq8PVe6I0wL6%2FmsMgBcNKmS8BBf0MGwA52u0QhEhMjDZAmXpmrmiSJVBUjqsYa%2BIfCceowpLUIsclL%2BX8zaSeAP0KH04bCPauK&X-Amz-Signature=576e32354a18ea29fc426eaee1d8ff058b31496dd0428cbcb6608583543e93ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7ROKNYE%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCKz%2BPmx135%2B0fV8U7SZJgYSOpUJn3rV5vlDtnQHWNqywIhAPO4FCewpnm3QXHcRoHmdcUm0mQP%2F7PJCsDbATjtRok8KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJYTVyvA9UqkfxyBAq3AMYq0HW9xZp433W5RH9u7Hy0eiX%2FWNbajR2gjBEm1XkP%2B1NJpSryY3d7xHLET8c2jjEFxasJqSDQbWiA6RGmW4ZsjGQCYYngpNcSesG3kbSN7RVOTOBC2z1EtXADU1zeJOgZOEF19KCkiHvS42gbSpH%2BfZY6bCizy2aia3XBPi3mJVxOtJEqpRRYl150DjtRV7r%2FrH85%2BYvpAzt0glCxNoNLWacmZ9C9gxKVsijPXDGkyVAwL3Izw127TAhpJwP6pbHgVRSmHyTn50CXnXpJ8kV0CjUcgC8NbrWN7SugGqdoYijSUvoATe%2F1EEMP9jOoNKtFT6jOtC%2FTk9V9pk2zX%2FLzSgvYTAtIZHfyqoTDwpg5sZOi9Gi6KvjAbloK0KP%2BPe5PFJj%2FBTtvBS7x5652oKXUWeC5npEJyK5zE7B5x%2F0A4JQwtQ9w1ZYnkvqtsNEe3aKhkZ2RVDI%2BO6QVqqH5%2B5988bMiXQHY1bHzybNsHbOGgHufFbNLE4MJlccIz6%2BaYbM3V0L2iRYcbLc%2B61xGYME4sny5%2BHQVRiAoXFlqeeQiNcJadCdDcoGVI1GmdfOJRoqo0Rwk62QPcaLgdRLAjEXbMenIjW6HkhPEYyFlQDajWHRST1%2FpPG3iK%2F%2FiTDLpunQBjqkASYfhLSRRzaHf2%2F%2BIZqzcUmZBDOFU18BgrP5CVOJ4yPZWMGIsVgF4%2FcRKbztvgogBXCf8KcgzER5lr83aFWH2nLknPvvLx3hmDSSK2A6L%2BFdv5enYe1Lwrn58iVoyw%2F4bqI8UU4tvw0rBJq9M3oHb2IaAeLzUYILwtgisw0cUS5as1AZ7KeDTrjy58pQI4bTbmlm3gil8SB4kgj93kNv%2B6QoHO%2BW&X-Amz-Signature=eac71ded68bab13b6d64d79f316a4b779fff76e96a65a0888f8969e0882cd45a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4OZXWY3%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCYmgl%2FuAF2dbSSe0ONSoRuTOQbG%2FAUj%2BF4xr8zl%2FUIoQIgKQHS%2FsxxwLfIBaojFAoaSdpiqT4y9KCfNVb21OjzyCgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGpNYOUq3vzVNJmZSrcA7TZmToCXkflroMu9Oc4gft0c09idxQfnIMG4YzpbufYuLYFfh9V300utUNCrM%2Bgu9alGauHlNAUK4q8K4%2FLyMt0V9wUuus48dhRa0TGkBJOGf3kuDLBOa25qc6slVd1bi2cOXX2H%2F4KVRJXewjz3AKp7wL2VE84efo3bybmVQVUndbMHBwEGNBdF938G0fWJ8NAV5401WwPhBOaAUH4LKTrNCSQ%2BLPQ3BJs2Hzunznq%2FaSFpAFWZEWN5wp5vFFULi%2FGJFzjMofon5tfiA1LBVRm2AINJ9zMFiKQwQu5iwJlCC4nTCnByemyJVNKzuzxE91Jyym59iGiX0Qn%2BIaXJjmutevnKwzU%2B3Xof%2B1AuM8wJGLh0UL%2BEQibPvCbw%2F%2B2y0cBUHQNUN7fD3oxuw8c93CdyD58GIqIIRtaHddGC7iXjH%2FJ6bCVVbJW2jK%2FMYny3m8E4rNy4iyGO2oC67dEqArts7WhKQzskw3d%2B3MhnWM%2FejAqT%2FR4FgFoRTWS8%2Bf7v6OV%2FWnmoICG4skIItLV4YisZHslASBaUvD6vjzJme3RBAD9kXtfvQq8ew2xFKopVvDDLjQYk2rvocZ9PdkegFsOg3JPV0FfLYjycGBHj1BRYXviiFCqQNDxJSvVMIyn6dAGOqUB0oWWU89qvkxcL08mnT5os0Qq1LJgcalqWs7kznvwBPxNtq3hmerb4PSR9%2BGishIM7OZUMFMkFGDfUrkpbimulPB9YGS%2F4MqwiSY%2BMrHDyodzSlyI860lodwqs2pq8PVe6I0wL6%2FmsMgBcNKmS8BBf0MGwA52u0QhEhMjDZAmXpmrmiSJVBUjqsYa%2BIfCceowpLUIsclL%2BX8zaSeAP0KH04bCPauK&X-Amz-Signature=4828e69552eaa1f3b6bb2313f0b585c0673ce96e73202a6250b993397ade28b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP2AGBOQ%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIGJHLtBDp%2BhUE6w%2FmCgG%2F1JSM7MGX7n%2BvfbN9bek6a5wAiEA9lKd21EtkQ57dICG4n%2BWSBVJI5m%2FiA6VhPc%2BMOQndDMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9M6sWSBY0PkvKExSrcAzcch7S9olNdg2jAaSxWjqCxLg%2FcxhY0CDMmOQX3zD%2FnmKeRtXU1kiYm7TfVYa4SMt1ELoQnKFjEiORDTxsU1FVbXnSDYP%2FNrGkg2Gu%2Fv8Q%2BPMPrc0ovxpoNe9LyHunSvghohl8JWzR7cutoKt0aGMdMjD%2BXl9OjF2VmYlkCrfdbTXsMLVroi5q7cjP1n4AoHjL36KmEjrE9UuzvKi3WSA%2FPILQN1okB97WbzWj8Q7zGf9o1JfBnoTtNdl%2BdA9lXFb7N5ENLH7Uc17286f8QU2ZIrU8iynXBj6Fwx%2BDhBxFFpOcdaV2AJl9kEVYxJveFo9WWHPj%2FbIdYiJ9p3Bi83BkQpGblFgwzp3ytiwvuxT0vPgutI59L75Oa9RdUqpn%2FoyU8Ua3uXIrhj7ze%2B4Df%2B28wZjgBymxhUyO%2FCfmJKJ9VPH2bQxLek3Z7zFoqgrfrskqC%2Bxtvnyg%2Fqn2Htd5MLz581pNFjPsUsjv0smK5FTNX0JddIPmzooWj50HVuD4Kp0U1RB9BCm1lwbg7QaKCuG5EnLlkMkAL7MgIi1psszsUZ1oumnz6Kl%2F34PGPaC54e%2B2quTal7K0JBgwgpr3JBWJTBDmb4tdMFZfDWz7cAhQVxW%2FYGuQHfEiEU8yiMOWn6dAGOqUBT9hcXId3b8QqLBbSkceULbdClNwQm914lbDFWhP24ViaabIvDbCAHPtbwZIcb1O8s0Ab3wXdurumr3CDnzHKMZ5KAfX1q8Kn4c6BKAcqQwP5eCl5uNi6e%2BE8rsDwbtss73Lz%2Bzlid%2FtyElwLUDStSDzkd7j8nzz54tB2zQmYE73jE7DHj72WN7twxorMn7ZaUf9jT1WNYBjGw4C5JhnS6C1kfl3m&X-Amz-Signature=098aa7a68de015556bef2716e46d0a99dc90ff73dfb4bf0d400ea5a5d41cf41b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4OZXWY3%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCYmgl%2FuAF2dbSSe0ONSoRuTOQbG%2FAUj%2BF4xr8zl%2FUIoQIgKQHS%2FsxxwLfIBaojFAoaSdpiqT4y9KCfNVb21OjzyCgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGpNYOUq3vzVNJmZSrcA7TZmToCXkflroMu9Oc4gft0c09idxQfnIMG4YzpbufYuLYFfh9V300utUNCrM%2Bgu9alGauHlNAUK4q8K4%2FLyMt0V9wUuus48dhRa0TGkBJOGf3kuDLBOa25qc6slVd1bi2cOXX2H%2F4KVRJXewjz3AKp7wL2VE84efo3bybmVQVUndbMHBwEGNBdF938G0fWJ8NAV5401WwPhBOaAUH4LKTrNCSQ%2BLPQ3BJs2Hzunznq%2FaSFpAFWZEWN5wp5vFFULi%2FGJFzjMofon5tfiA1LBVRm2AINJ9zMFiKQwQu5iwJlCC4nTCnByemyJVNKzuzxE91Jyym59iGiX0Qn%2BIaXJjmutevnKwzU%2B3Xof%2B1AuM8wJGLh0UL%2BEQibPvCbw%2F%2B2y0cBUHQNUN7fD3oxuw8c93CdyD58GIqIIRtaHddGC7iXjH%2FJ6bCVVbJW2jK%2FMYny3m8E4rNy4iyGO2oC67dEqArts7WhKQzskw3d%2B3MhnWM%2FejAqT%2FR4FgFoRTWS8%2Bf7v6OV%2FWnmoICG4skIItLV4YisZHslASBaUvD6vjzJme3RBAD9kXtfvQq8ew2xFKopVvDDLjQYk2rvocZ9PdkegFsOg3JPV0FfLYjycGBHj1BRYXviiFCqQNDxJSvVMIyn6dAGOqUB0oWWU89qvkxcL08mnT5os0Qq1LJgcalqWs7kznvwBPxNtq3hmerb4PSR9%2BGishIM7OZUMFMkFGDfUrkpbimulPB9YGS%2F4MqwiSY%2BMrHDyodzSlyI860lodwqs2pq8PVe6I0wL6%2FmsMgBcNKmS8BBf0MGwA52u0QhEhMjDZAmXpmrmiSJVBUjqsYa%2BIfCceowpLUIsclL%2BX8zaSeAP0KH04bCPauK&X-Amz-Signature=3515ebe8d8a926092b824d2c1c4ba63b0677fe803d4b3ad64d4d3abf5f420b67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJAQLVUF%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIHWSmoIzu9K3jerNShttVPsaLaULHVNFfoh18WUi6Mm6AiBf7DZBGK91JEOwV33bm0iEhST%2FbuNfGAwmsrhQUcG72SqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH1Z8WHgQPs6MIjvLKtwDgAsTexe6HwcbzpHvlRyQJ%2FbdGLFThPAzYsyJo1TjcOALByHMuZgzivRWrPa37rxSv9YFmy1lu6VZnOCImwYm2WxiZxqvZZgveRsGKmKOvTXxxMduHaPvh1ha4dOj%2FpX5ljW5eJ%2FmhnaUDIIEJkMD%2FZLCLKhReUok%2FFwHixsqkyRtK9R4lvWXYkj8m8g%2BYlPpPr4paOCiIAsIgDjmcaSEQuxGTBpFNt8M4pCwniV%2FtGi7qfiL2S7EICT2QVZ86oJ6yIdkGUfeJjexEMDeanN2X5kqTWOTr2AjJz%2FYZaPmeGCpD98g3Z6PKOVMmOCr4UDAovHFnFgKmuwm5ZcmfI08VgXKfkZfDW6ACr7KDOpZDeOLCulPgMPpahkiZmSaD7Tgh%2Bclmwle6nYFwapnz6f9C3I6yVo41OmTyVx8D%2F31qN7%2FvFg2oNzoAAiQDte%2FttFha80M0MmWANqKJapBe0tyjpqQIDOTvoZibswl3bwbz1wbRNHM7oQ7BBpLplc4Kog8s3n4YCAyRhC%2FzR8qzgVLeEBp2e3c8zO6z4xCBoczTd1zhGx9uXH7u3qsG1AiHqmB%2BwyrsOylvnxOnCK87oU2%2FsNoA%2B2%2FzGBX0uLM%2BJQyg7v1FdciwD4l5Yh36yMw86Xp0AY6pgEsPk2uMakBG7jbz0k2UrtaG1DoY7HUwuIRUcTfDbOUpJ2ZPQd8UHsrFHKTTk9GJTpreDxqLudCLRpBSgHtbdLvj213Yi5o9hO380sCFcw5N%2FPWI1ZYp82tvC%2BAfYOJwpSbZuUMViNFC6hROAAdhWegPSjvzR%2F%2FHhxj8lR4%2BKrGPeJRYFFOr%2F7nYRggaTYL%2BZ3CEEAa5Ygrc5ctrtkkykQUrJZBIi35&X-Amz-Signature=376550ff8f9da66a71041ca626a19b16b4c3e5ad0d2afddd48ddc15075c585d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4OZXWY3%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCYmgl%2FuAF2dbSSe0ONSoRuTOQbG%2FAUj%2BF4xr8zl%2FUIoQIgKQHS%2FsxxwLfIBaojFAoaSdpiqT4y9KCfNVb21OjzyCgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGpNYOUq3vzVNJmZSrcA7TZmToCXkflroMu9Oc4gft0c09idxQfnIMG4YzpbufYuLYFfh9V300utUNCrM%2Bgu9alGauHlNAUK4q8K4%2FLyMt0V9wUuus48dhRa0TGkBJOGf3kuDLBOa25qc6slVd1bi2cOXX2H%2F4KVRJXewjz3AKp7wL2VE84efo3bybmVQVUndbMHBwEGNBdF938G0fWJ8NAV5401WwPhBOaAUH4LKTrNCSQ%2BLPQ3BJs2Hzunznq%2FaSFpAFWZEWN5wp5vFFULi%2FGJFzjMofon5tfiA1LBVRm2AINJ9zMFiKQwQu5iwJlCC4nTCnByemyJVNKzuzxE91Jyym59iGiX0Qn%2BIaXJjmutevnKwzU%2B3Xof%2B1AuM8wJGLh0UL%2BEQibPvCbw%2F%2B2y0cBUHQNUN7fD3oxuw8c93CdyD58GIqIIRtaHddGC7iXjH%2FJ6bCVVbJW2jK%2FMYny3m8E4rNy4iyGO2oC67dEqArts7WhKQzskw3d%2B3MhnWM%2FejAqT%2FR4FgFoRTWS8%2Bf7v6OV%2FWnmoICG4skIItLV4YisZHslASBaUvD6vjzJme3RBAD9kXtfvQq8ew2xFKopVvDDLjQYk2rvocZ9PdkegFsOg3JPV0FfLYjycGBHj1BRYXviiFCqQNDxJSvVMIyn6dAGOqUB0oWWU89qvkxcL08mnT5os0Qq1LJgcalqWs7kznvwBPxNtq3hmerb4PSR9%2BGishIM7OZUMFMkFGDfUrkpbimulPB9YGS%2F4MqwiSY%2BMrHDyodzSlyI860lodwqs2pq8PVe6I0wL6%2FmsMgBcNKmS8BBf0MGwA52u0QhEhMjDZAmXpmrmiSJVBUjqsYa%2BIfCceowpLUIsclL%2BX8zaSeAP0KH04bCPauK&X-Amz-Signature=74991d70267ea0fc59ef456de64e43ffede1859d83c625ca32dc9de617b36756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644CFOBFJ%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFI22GgU8Im799laBjKIaAyfkFt8C3mzm9ijVJsUBx7ZAiEAm1KFPeOQ8dNJXPmCil3d8NeDmBwIONnESXAF%2FdLYF8cqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRqNRAcCjms9XpqYyrcA0cT2ChI1eGuwCnngHL7B6q6tSTy214vlXQvBTvu%2BwZP0ZpDYrY2CoEFvjWX7nREBkeWqjcPpJe4wJFVnNNwMojc2PdHW7uewlBW8slKrNEx4vuBhRIeINxfF172uQrRZ936gPtUZD24yUrmzDWt0Dm1B5Px6K4%2BHtWLjXayrjOVYcVwYdzqVQ3lz9e6P4cD3uhwh9%2Fc0Ru68ytqZ98ygUgya8KveHN1xolsP5vuQRkxf1gQr5AQrc1sLMY1ZJgt88vJ%2FdSPthCenFjmpmXGXNcv6S9ewjbNF%2BKuUNQLTMmAWKaJrBa38eE0zTsHLbk4IbnIa%2BmB0iG6IFU1%2F4s7WW8%2B63yqrcqzmKQ1fJBcOi%2BwRSUWnN7WBIJFoGFMzx8R9FGJ1j82DnOE2GOh%2FL6lN73a%2FNsxWDigMSFswP9p1PTOK%2BgAYqdWk0z7gHyyOsGZMazd2eEfarCf2%2BAmg%2BHvWydGlfNQAgHaIvuYqJojbCIYDdrJTax8E3Fuwx737fzOQT%2FjLPyvZI1%2BoQ2qxU5tFjixEfCEzF3OcspNGNfJVnQtBhoM0zdmvAR9obqQPIuAEEWbX4y872vy547FCkjh6DCuJ1lbOsYdXZlfg7SFIzKSy7qlPsPM62sw1f17MLem6dAGOqUBNlcIQxCsgfVoCNU%2Fm36NntIqUTNJLLxMFwhI7fglRLVCRRAf76EdOZB4eUh6qto2I%2FOBqc2wJ164Z89kIS3TkpitKTs83n%2Fug4k%2B1%2FKf6md7R30dri97usfkVb8vBJqldOLK5RIWC5NTDkZADXdQImjKqxxNawJP9h5ynyCQb%2BFag0h9jqO%2FoIh0r6IIy2gz8VCdeNtYXSffd3eQbVieDHGCkTi1&X-Amz-Signature=bc87612d1500fd0acbe1bbf0d1aa886f1cb0060b04abed6d41d34d4ae40bd084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4OZXWY3%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCYmgl%2FuAF2dbSSe0ONSoRuTOQbG%2FAUj%2BF4xr8zl%2FUIoQIgKQHS%2FsxxwLfIBaojFAoaSdpiqT4y9KCfNVb21OjzyCgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGpNYOUq3vzVNJmZSrcA7TZmToCXkflroMu9Oc4gft0c09idxQfnIMG4YzpbufYuLYFfh9V300utUNCrM%2Bgu9alGauHlNAUK4q8K4%2FLyMt0V9wUuus48dhRa0TGkBJOGf3kuDLBOa25qc6slVd1bi2cOXX2H%2F4KVRJXewjz3AKp7wL2VE84efo3bybmVQVUndbMHBwEGNBdF938G0fWJ8NAV5401WwPhBOaAUH4LKTrNCSQ%2BLPQ3BJs2Hzunznq%2FaSFpAFWZEWN5wp5vFFULi%2FGJFzjMofon5tfiA1LBVRm2AINJ9zMFiKQwQu5iwJlCC4nTCnByemyJVNKzuzxE91Jyym59iGiX0Qn%2BIaXJjmutevnKwzU%2B3Xof%2B1AuM8wJGLh0UL%2BEQibPvCbw%2F%2B2y0cBUHQNUN7fD3oxuw8c93CdyD58GIqIIRtaHddGC7iXjH%2FJ6bCVVbJW2jK%2FMYny3m8E4rNy4iyGO2oC67dEqArts7WhKQzskw3d%2B3MhnWM%2FejAqT%2FR4FgFoRTWS8%2Bf7v6OV%2FWnmoICG4skIItLV4YisZHslASBaUvD6vjzJme3RBAD9kXtfvQq8ew2xFKopVvDDLjQYk2rvocZ9PdkegFsOg3JPV0FfLYjycGBHj1BRYXviiFCqQNDxJSvVMIyn6dAGOqUB0oWWU89qvkxcL08mnT5os0Qq1LJgcalqWs7kznvwBPxNtq3hmerb4PSR9%2BGishIM7OZUMFMkFGDfUrkpbimulPB9YGS%2F4MqwiSY%2BMrHDyodzSlyI860lodwqs2pq8PVe6I0wL6%2FmsMgBcNKmS8BBf0MGwA52u0QhEhMjDZAmXpmrmiSJVBUjqsYa%2BIfCceowpLUIsclL%2BX8zaSeAP0KH04bCPauK&X-Amz-Signature=ae7a3b7e8d1c6ab0eeff9561689076fa16a93e5909186efccc54a5591e4fc3d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOEFZMEB%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCX3I5lJ0Q8lLywuHLiDOYBl0g2EKj2NioC2tNNqON0pwIgC3qwDAdattSwXFi47bMcftO3dUCGEEYcU%2FCjvw7vDEoqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVfSiuPK5vuIGi7SircAzlZeeCyTEUoAAOR8hTXykn0aK%2BwpX%2BaYC3Yuc34oKO2O6ZUqCNxprdOQThOu6Wyb%2B%2BDTKDPZJrOMKMBTEZyG5ZpyYzFa0gd71eLlJCsmHt6aKCdLZHVMEaLS5DLnH8hv5RR6jho33ZnJ9IB1FYHju6AjUMbfoM8OyUvG%2FVNzLDys63B29WrdgrwQ313pTzvZwMto5o6XrOVG23%2FwQbKWVOpp9DbC2hDCBkVx8xWkyGvfYljPHSFwbGTdkvz6OLZt8C87M0xPIVICKugjY4cqoNl5ZlNTxxGHL3NNJVqbLEIF2HV0hddZ9T8zvGTHwd%2Fv%2FQWcF6uieHQ5kNewhv5wqHsvoPQtTtdnanEvE4mdG13lDV9FR4lP5obmKbqrMBRGiwb7%2BUVH1zMq0dnreFnWxEN431p5smC2CT%2BB%2FWiMioIFp8Qw%2BYp0%2B4sicK6QHzs9Tn5lNXqF%2BmcE%2BNs7GVw5j8w7fHQ8mNDpO0v0e8sN08T24GKNNkX67Be%2Fuk6uBakuKoUbdmvTQK%2BnxBdnGTc95ESb7%2F32onkcfk7ajvoQhFHxW3TVITXvOHJWpDAs49zebv1%2Ba8Yi4js2h%2F9o3xtQQtFBJnSvgeqLJ6KbjaQ%2BI6AJNAdZEsdug0RVFGgMPCl6dAGOqUB0MjcO3gfdFkQHt2BkZSjnDXqQTuULTVmvXfXLckhoMmFXvqMHql4eZwtptFan7o90qvSfJpvODeA%2FH%2FvKbdi7vJJM71BZPnIXuLblD0LvSSbN0VCkv6uaaawJ6x2I%2FskbPiV6S%2BaqRzZM3mT7lvpBBtPFCMx8imF8BKr4d%2Bo6DDka12BdlixY2jjPDgAKO27ioG2QYxrpIsM6GU6GwsGc%2FPXxgP2&X-Amz-Signature=20e913e47c2ab02be61e77265d03f9c1ecc58d79f1fceea376a27d2d97bd9b46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYT63PYR%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDTApQe2GXBsieaXQfJo16lmaFq8E731seEGP5X3Z4wzQIhAKTlrBh%2FyoMtZxCu9rcy4AYhbZnpP8%2F0%2BQwSty5xdCM5KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJAYoGtvuPGsp7%2FUUq3AO65X0HnhiQyiMf%2Bu%2B6jZ9FGWTPJUgHNwRd%2Bqs6rVxLkM7KDBwqIPzRrQi7cmZB%2FRd3aYf261M4Snrn0MbF9EFOcB%2FWkOQVzLGQdnE2wh8yNDQR21cZtOCWPtm2CF0MyALhFhyFxLrsl9axP3kgSWR7itNtSGJezN0oZfE4AnJtU5ra7UY2AMYj5zZEDLcWofSdAhhoiK0HE7ML6mYEb5eC1fXP7eIRdr2YCdgYpc9K5t48Jb%2BFgCtyQov6y92gybVK%2Bz8UerKYf%2BQxitxAS7SBxJ6jdbHBxj8QxjxrxppmtlCxoQJov%2FDk9UuEeLnB%2FDe3IndD6gS5g2pQFu0iaJLa%2F0pmGax7q0MyAvQ04I4rMpUM9JRdB6SNl92QYRuidXQKtPf5QOPkMov3LrOLiEkyMq%2FzVFX6xxnYhAx%2B5A4uciFwConobOFjrhdqbywPXFdg%2B4D2u1y0Y9RU1gjQrwmi0tIl6lJsPqObVtTP%2FZp0DSsnAoovGn0ix8TwVg%2FRuPz%2Be9%2BDgt2R8b3Vc%2F4a5DjqZCKuJ3RRpNBs%2B1Ltlos%2FZ%2Fuq7%2F40hQmha48u7nDiHeWIzbztYKI36Ofi9QIP%2B0Upcegaali4J1gv1PjaGw7eKRDsAPBvcwbm6nVcpTCIpunQBjqkATHNz2%2Bpn%2BgY75NJj4ESiLGk0c1xYHjM2Y4ft2UPTkUq81hSMNDXC13OdZOcmd%2Bhljm6fBfY4sTz4cbcUJVfnyxfujK5tugjhjPoP60tbYtqWI9X7UgbfJKIow1Fm9ITmSecYziSC7CD4CtJOmSXT6jm7PJjbRqI9cGLuVi%2BDRoPZGKOWyiB5RFsC0fd1%2FSWP5vocDtH7%2FoZH5MSfmq1g094dXeX&X-Amz-Signature=c7b5df58a5c1a069ab1ece0063b67d2b7452730e4d73b5372197690c11821093&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CTTDDFQ%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIHzdmIrR92ijJZBU1eG7JjedQ%2Bkb7e3XFRd9Era2kJwHAiEAwP4QvritNwk2FU6E0oDfBTfxMmzv0VhSvAdRC3LBDesqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZ9wI1p5PyWZ2pEMCrcA1DyTnja0kdYGOiBEJMwvmT7nCz3HizSasbd4sJ4CVxHVo0CTeI%2FX1RM4z89mfHDQ0LzxRZCTOWPzG6lOJQgmpIArfcUPyzOFNTzLLOTCkHmJSnDGRecVInGndZO7CyRA2jyGC%2Bh%2BbbhGTMb9ZMDTkW%2B7zejg8AS7yWU6iBCvFVm%2FDY1KO%2FAvq6Sxw1OPvRYci9clZguQPKTWa1PutspyuxsAzN7uiq4s%2FzzAu%2Fc3C30hXeZMVVp1Jb1J2u%2FwPlIlpack9bguknxCb0Sweffk2m6rs3YyBDTpbFZ8DOfRIK414NXqI3PlCxWe6L%2FHjzGoGppMnVtYlBr6gfX17Z9TgLmlj7%2BRJnjUroaMcMUt3vCMqFae4zbkdINf9fLwg3w%2FHGThsMbgG3HDw2yjmXPmTgg1bvtdSpWLHnHubBc4BY7niccRa1A4AhQPsbyTMOWSCO5jwaDknHlW%2FvE9OVccphFhE2GOUood6DUwVSu%2FbFTRK7jtdhYsVL5yc5fgfhahl4AFxnmHVBr7OhocFynubMem5yp0HHT6%2BowjDHv9k2zTXrgZCIxNirvdo%2Fji%2Bsv2xesXjg5b2HX8qlXLeOo7XT9inv14CU7o70O1gX94wU8XmNbucxvukMcDCoiMM6n6dAGOqUBlBzD9uGcrM1U8BA5Rkj5IKw38%2B9O6hyKVW2L9HV3MUzLNJ0jZU1IRH1AEd6d7E%2FP92QxIHDH4hbOYeIl1xVvSMkMQox7K3M7pl7l%2FkODKZUDr%2FF73jlWwskDpjWQLlvYo190RLzdxZq%2FILg1dE9mfaXR1Qv4V7RKIHKNcT85QAKxIH%2BFuJCKiAI1ZKcJQBE0iX72YlbzVqy3e1crl%2FxERSTEGTUM&X-Amz-Signature=f9eca0a2e17ba9e4ed131e2e1d00e289c5fa176892be5b11940d58ac19f6e6a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4OZXWY3%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCYmgl%2FuAF2dbSSe0ONSoRuTOQbG%2FAUj%2BF4xr8zl%2FUIoQIgKQHS%2FsxxwLfIBaojFAoaSdpiqT4y9KCfNVb21OjzyCgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGpNYOUq3vzVNJmZSrcA7TZmToCXkflroMu9Oc4gft0c09idxQfnIMG4YzpbufYuLYFfh9V300utUNCrM%2Bgu9alGauHlNAUK4q8K4%2FLyMt0V9wUuus48dhRa0TGkBJOGf3kuDLBOa25qc6slVd1bi2cOXX2H%2F4KVRJXewjz3AKp7wL2VE84efo3bybmVQVUndbMHBwEGNBdF938G0fWJ8NAV5401WwPhBOaAUH4LKTrNCSQ%2BLPQ3BJs2Hzunznq%2FaSFpAFWZEWN5wp5vFFULi%2FGJFzjMofon5tfiA1LBVRm2AINJ9zMFiKQwQu5iwJlCC4nTCnByemyJVNKzuzxE91Jyym59iGiX0Qn%2BIaXJjmutevnKwzU%2B3Xof%2B1AuM8wJGLh0UL%2BEQibPvCbw%2F%2B2y0cBUHQNUN7fD3oxuw8c93CdyD58GIqIIRtaHddGC7iXjH%2FJ6bCVVbJW2jK%2FMYny3m8E4rNy4iyGO2oC67dEqArts7WhKQzskw3d%2B3MhnWM%2FejAqT%2FR4FgFoRTWS8%2Bf7v6OV%2FWnmoICG4skIItLV4YisZHslASBaUvD6vjzJme3RBAD9kXtfvQq8ew2xFKopVvDDLjQYk2rvocZ9PdkegFsOg3JPV0FfLYjycGBHj1BRYXviiFCqQNDxJSvVMIyn6dAGOqUB0oWWU89qvkxcL08mnT5os0Qq1LJgcalqWs7kznvwBPxNtq3hmerb4PSR9%2BGishIM7OZUMFMkFGDfUrkpbimulPB9YGS%2F4MqwiSY%2BMrHDyodzSlyI860lodwqs2pq8PVe6I0wL6%2FmsMgBcNKmS8BBf0MGwA52u0QhEhMjDZAmXpmrmiSJVBUjqsYa%2BIfCceowpLUIsclL%2BX8zaSeAP0KH04bCPauK&X-Amz-Signature=48392ba434a2d51359182695b1928d52e46859f961ee5677ee8b54530801948e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4OZXWY3%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCYmgl%2FuAF2dbSSe0ONSoRuTOQbG%2FAUj%2BF4xr8zl%2FUIoQIgKQHS%2FsxxwLfIBaojFAoaSdpiqT4y9KCfNVb21OjzyCgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGpNYOUq3vzVNJmZSrcA7TZmToCXkflroMu9Oc4gft0c09idxQfnIMG4YzpbufYuLYFfh9V300utUNCrM%2Bgu9alGauHlNAUK4q8K4%2FLyMt0V9wUuus48dhRa0TGkBJOGf3kuDLBOa25qc6slVd1bi2cOXX2H%2F4KVRJXewjz3AKp7wL2VE84efo3bybmVQVUndbMHBwEGNBdF938G0fWJ8NAV5401WwPhBOaAUH4LKTrNCSQ%2BLPQ3BJs2Hzunznq%2FaSFpAFWZEWN5wp5vFFULi%2FGJFzjMofon5tfiA1LBVRm2AINJ9zMFiKQwQu5iwJlCC4nTCnByemyJVNKzuzxE91Jyym59iGiX0Qn%2BIaXJjmutevnKwzU%2B3Xof%2B1AuM8wJGLh0UL%2BEQibPvCbw%2F%2B2y0cBUHQNUN7fD3oxuw8c93CdyD58GIqIIRtaHddGC7iXjH%2FJ6bCVVbJW2jK%2FMYny3m8E4rNy4iyGO2oC67dEqArts7WhKQzskw3d%2B3MhnWM%2FejAqT%2FR4FgFoRTWS8%2Bf7v6OV%2FWnmoICG4skIItLV4YisZHslASBaUvD6vjzJme3RBAD9kXtfvQq8ew2xFKopVvDDLjQYk2rvocZ9PdkegFsOg3JPV0FfLYjycGBHj1BRYXviiFCqQNDxJSvVMIyn6dAGOqUB0oWWU89qvkxcL08mnT5os0Qq1LJgcalqWs7kznvwBPxNtq3hmerb4PSR9%2BGishIM7OZUMFMkFGDfUrkpbimulPB9YGS%2F4MqwiSY%2BMrHDyodzSlyI860lodwqs2pq8PVe6I0wL6%2FmsMgBcNKmS8BBf0MGwA52u0QhEhMjDZAmXpmrmiSJVBUjqsYa%2BIfCceowpLUIsclL%2BX8zaSeAP0KH04bCPauK&X-Amz-Signature=dff43a18af0e9d09baa7c2e9cc9418745832951e4768f99289670c0fc3c98f5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYMYCO6H%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCDIkBCx%2FoxU6BUvUOBpU680iglYuBWFlpJ8%2B0aOdLiQwIhAKalQ%2F3%2BXNpI8O4IaaYftRjlrPrtEaMMbT0%2FvY7x96OmKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6tMgG4Ar6V74IrAAq3AP3GsRXe5ttrSPOVfcw3fHDRhbN7ye0mnpDynIq3QL9%2BH57jBh0f1WDVTbR1DKGvSWkchRqc2Fixn%2FxQLAAOv37g6TAQ3HJsbMQZeHBtkM9b4TjEy7KZ517mElgF8laxSDaMWXHqOu%2F8bHcv01ykLW%2B%2BKj2etGh5KhYyCkH6oek%2Fke3Y8%2BBvjd9oEDENsT6IKbDJT8Mf3R0vEyOpbcXHq5QEQenn8geELq3Pkq52VzXQW6jg9WzkWMrEITiNECPej2cdArY5Q1lNjoBxYM0gdFErqKAVik77iydV4XxY7ZVpKcF2sJ4hKkjWxyo70HZaXvT%2FVGTlElCcoQQZ5Q4btN9Up1Ufro5uUNL7h9GxXyDuKFeK9pr7tvQXoeNKrkQRYPW3SA0YqUjBMKTxEDEfY17hgRMvtnKOIyLWPPK3vkpXX69ADxJYP63QSKk3UPdDQjgRJncJb3PRP%2BfNFFWHr%2Bq5kMQSRIIWI6JJ3efFammUUqe8kKwDz08V0bMnCSY3Sky3ppqnRXwLC0DkQrmxyp1mXmd%2F7%2Fc%2FiwNVGcDCCnl4jkEI0PwvnJfZaE%2Fd88mOfbFb23AQ%2BAr6CvZIMyZDczGxKgC8Wd0yEEcMExPKDJupDa7hYIY6f%2FlR9fgcjCRp%2BnQBjqkAR9fSBBEuuC3mTrpOzFq3qOOyvSDpvaGhlU2fY0EfW3VdjPd5LD471VsHiYL%2B44zHrstC2UA%2Fkh%2FTydKEjXUdGrEczK%2FUPtVK8iBYwilzNiQN3Z6CeGRbGPcuEgeH3y0agp6pCfsJE4Q6aqVeBjNh20xoPp8dRmCvFzzrWxT%2FKW6GzhDkzcCedXAEZ4qnRl6jFoSYxIKZPo08brXwhJ7hUOnq%2BzZ&X-Amz-Signature=2e947f606b9095bbc5680fcf100817a4175690f5aebf1af48be0ae20e4b09650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYMYCO6H%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCDIkBCx%2FoxU6BUvUOBpU680iglYuBWFlpJ8%2B0aOdLiQwIhAKalQ%2F3%2BXNpI8O4IaaYftRjlrPrtEaMMbT0%2FvY7x96OmKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6tMgG4Ar6V74IrAAq3AP3GsRXe5ttrSPOVfcw3fHDRhbN7ye0mnpDynIq3QL9%2BH57jBh0f1WDVTbR1DKGvSWkchRqc2Fixn%2FxQLAAOv37g6TAQ3HJsbMQZeHBtkM9b4TjEy7KZ517mElgF8laxSDaMWXHqOu%2F8bHcv01ykLW%2B%2BKj2etGh5KhYyCkH6oek%2Fke3Y8%2BBvjd9oEDENsT6IKbDJT8Mf3R0vEyOpbcXHq5QEQenn8geELq3Pkq52VzXQW6jg9WzkWMrEITiNECPej2cdArY5Q1lNjoBxYM0gdFErqKAVik77iydV4XxY7ZVpKcF2sJ4hKkjWxyo70HZaXvT%2FVGTlElCcoQQZ5Q4btN9Up1Ufro5uUNL7h9GxXyDuKFeK9pr7tvQXoeNKrkQRYPW3SA0YqUjBMKTxEDEfY17hgRMvtnKOIyLWPPK3vkpXX69ADxJYP63QSKk3UPdDQjgRJncJb3PRP%2BfNFFWHr%2Bq5kMQSRIIWI6JJ3efFammUUqe8kKwDz08V0bMnCSY3Sky3ppqnRXwLC0DkQrmxyp1mXmd%2F7%2Fc%2FiwNVGcDCCnl4jkEI0PwvnJfZaE%2Fd88mOfbFb23AQ%2BAr6CvZIMyZDczGxKgC8Wd0yEEcMExPKDJupDa7hYIY6f%2FlR9fgcjCRp%2BnQBjqkAR9fSBBEuuC3mTrpOzFq3qOOyvSDpvaGhlU2fY0EfW3VdjPd5LD471VsHiYL%2B44zHrstC2UA%2Fkh%2FTydKEjXUdGrEczK%2FUPtVK8iBYwilzNiQN3Z6CeGRbGPcuEgeH3y0agp6pCfsJE4Q6aqVeBjNh20xoPp8dRmCvFzzrWxT%2FKW6GzhDkzcCedXAEZ4qnRl6jFoSYxIKZPo08brXwhJ7hUOnq%2BzZ&X-Amz-Signature=9c04402e5f2f8b29d3296c4f02d2ef9436b73359193aed68afbb7f36d8699008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYMYCO6H%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCDIkBCx%2FoxU6BUvUOBpU680iglYuBWFlpJ8%2B0aOdLiQwIhAKalQ%2F3%2BXNpI8O4IaaYftRjlrPrtEaMMbT0%2FvY7x96OmKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6tMgG4Ar6V74IrAAq3AP3GsRXe5ttrSPOVfcw3fHDRhbN7ye0mnpDynIq3QL9%2BH57jBh0f1WDVTbR1DKGvSWkchRqc2Fixn%2FxQLAAOv37g6TAQ3HJsbMQZeHBtkM9b4TjEy7KZ517mElgF8laxSDaMWXHqOu%2F8bHcv01ykLW%2B%2BKj2etGh5KhYyCkH6oek%2Fke3Y8%2BBvjd9oEDENsT6IKbDJT8Mf3R0vEyOpbcXHq5QEQenn8geELq3Pkq52VzXQW6jg9WzkWMrEITiNECPej2cdArY5Q1lNjoBxYM0gdFErqKAVik77iydV4XxY7ZVpKcF2sJ4hKkjWxyo70HZaXvT%2FVGTlElCcoQQZ5Q4btN9Up1Ufro5uUNL7h9GxXyDuKFeK9pr7tvQXoeNKrkQRYPW3SA0YqUjBMKTxEDEfY17hgRMvtnKOIyLWPPK3vkpXX69ADxJYP63QSKk3UPdDQjgRJncJb3PRP%2BfNFFWHr%2Bq5kMQSRIIWI6JJ3efFammUUqe8kKwDz08V0bMnCSY3Sky3ppqnRXwLC0DkQrmxyp1mXmd%2F7%2Fc%2FiwNVGcDCCnl4jkEI0PwvnJfZaE%2Fd88mOfbFb23AQ%2BAr6CvZIMyZDczGxKgC8Wd0yEEcMExPKDJupDa7hYIY6f%2FlR9fgcjCRp%2BnQBjqkAR9fSBBEuuC3mTrpOzFq3qOOyvSDpvaGhlU2fY0EfW3VdjPd5LD471VsHiYL%2B44zHrstC2UA%2Fkh%2FTydKEjXUdGrEczK%2FUPtVK8iBYwilzNiQN3Z6CeGRbGPcuEgeH3y0agp6pCfsJE4Q6aqVeBjNh20xoPp8dRmCvFzzrWxT%2FKW6GzhDkzcCedXAEZ4qnRl6jFoSYxIKZPo08brXwhJ7hUOnq%2BzZ&X-Amz-Signature=cf085c1c71b9c60c72cc6ad8846a3f331d9bc215476f8b7d928c65621a46c8ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYMYCO6H%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCDIkBCx%2FoxU6BUvUOBpU680iglYuBWFlpJ8%2B0aOdLiQwIhAKalQ%2F3%2BXNpI8O4IaaYftRjlrPrtEaMMbT0%2FvY7x96OmKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6tMgG4Ar6V74IrAAq3AP3GsRXe5ttrSPOVfcw3fHDRhbN7ye0mnpDynIq3QL9%2BH57jBh0f1WDVTbR1DKGvSWkchRqc2Fixn%2FxQLAAOv37g6TAQ3HJsbMQZeHBtkM9b4TjEy7KZ517mElgF8laxSDaMWXHqOu%2F8bHcv01ykLW%2B%2BKj2etGh5KhYyCkH6oek%2Fke3Y8%2BBvjd9oEDENsT6IKbDJT8Mf3R0vEyOpbcXHq5QEQenn8geELq3Pkq52VzXQW6jg9WzkWMrEITiNECPej2cdArY5Q1lNjoBxYM0gdFErqKAVik77iydV4XxY7ZVpKcF2sJ4hKkjWxyo70HZaXvT%2FVGTlElCcoQQZ5Q4btN9Up1Ufro5uUNL7h9GxXyDuKFeK9pr7tvQXoeNKrkQRYPW3SA0YqUjBMKTxEDEfY17hgRMvtnKOIyLWPPK3vkpXX69ADxJYP63QSKk3UPdDQjgRJncJb3PRP%2BfNFFWHr%2Bq5kMQSRIIWI6JJ3efFammUUqe8kKwDz08V0bMnCSY3Sky3ppqnRXwLC0DkQrmxyp1mXmd%2F7%2Fc%2FiwNVGcDCCnl4jkEI0PwvnJfZaE%2Fd88mOfbFb23AQ%2BAr6CvZIMyZDczGxKgC8Wd0yEEcMExPKDJupDa7hYIY6f%2FlR9fgcjCRp%2BnQBjqkAR9fSBBEuuC3mTrpOzFq3qOOyvSDpvaGhlU2fY0EfW3VdjPd5LD471VsHiYL%2B44zHrstC2UA%2Fkh%2FTydKEjXUdGrEczK%2FUPtVK8iBYwilzNiQN3Z6CeGRbGPcuEgeH3y0agp6pCfsJE4Q6aqVeBjNh20xoPp8dRmCvFzzrWxT%2FKW6GzhDkzcCedXAEZ4qnRl6jFoSYxIKZPo08brXwhJ7hUOnq%2BzZ&X-Amz-Signature=481f201c2d9d9f3d7f85995a3bdeb4e9ceb71b9d09078449b0a5085715672c58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PVU7QVR%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCgAmrnocEwohTX7FPtvvPRiAR9z6sCaoORnLkT%2FM5INwIgfWuRFv%2FH9BLnssAGYQf%2BkyM1WkNeJY0h0OCecGQx1rEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2ForsFKFObhTx83pircA%2FqeFbgSKeZ2wNmgQ9a2mftbXgDcoRf8ux4ems%2BDVBPMp8fCMwxdN31iaGrRTnUZO1JoTLAodJvVaiLEAmilYgWQDWERd3ixsumP2svsJkxKq3ZHyCQQz%2FRHPgtGVwboVirfOoSO0RhNx3YOKb8EXKUDYeLAwqimrTf1pTaugt6AA%2FBIpGugosk8SP5J0rmE5pTMmYTLNpKr8ytnLG%2BRm0JnD7LuU8qJAR5eKSNf9rfSf5iU4etHxIxCS%2BQZD9wFbzl9WMpNZvS1e32%2FBZcTo10dz%2FWTiCZW1BOPDCKJkhVm7L7nA8XgtIupby3CZajCKVeg8Jb40bmiqrbT%2BSddmKiIDS9lcjOBRrL0a3aVYiLQIFIjcfg5J%2BBFhCwMqfDDx7rm3JHiEYu7yUxzlAnt0HjY0ILK07NEcb7b9FG%2Bw2BS%2FEGgFEVovdvphfGeJZbBAHAahVRlBpys44jP4BJ3cY233FiRVqTYevXabTcA7s8oChr%2FlmARcV2RcdvZ6K4cl7nFai0Hm%2FP3vmIiR2KUOf2gPjL725Lvcn7oPLrYJY9m2ARRSSg0BA2%2FU%2FVr0sfL7L6yKva9tyic9kgPM2UeXhU6WBwDB4sdIevh1jij2C9GMdRK2XSmtGpEsGdpMIqm6dAGOqUBC%2B3Xy0kk0HrC1u29m6kmF6s9gQnWc5T7LBlqk0mC8%2BpL3sp7gFuIlayJ2Exy1Pv%2FC7JcHySt%2FY4FPs5KyysZeM8cLIHXsiaP2shY%2BHxlI3quvHLh6fJ1Hlz02fyuAbRZzJJJD4%2FE15g%2B44SZjLeMDZVlnvLnJ2kWZ%2FcLz5jMtTDU5izhWxwAYhjbfVUsQ4tkqTwLLIZAwqX%2FZonudJLsJaS5kcdp&X-Amz-Signature=bcd306243ca496d269c0c0e4bb2ad2964dffcf44a07347ebe8195b8ca95601e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYMYCO6H%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCDIkBCx%2FoxU6BUvUOBpU680iglYuBWFlpJ8%2B0aOdLiQwIhAKalQ%2F3%2BXNpI8O4IaaYftRjlrPrtEaMMbT0%2FvY7x96OmKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6tMgG4Ar6V74IrAAq3AP3GsRXe5ttrSPOVfcw3fHDRhbN7ye0mnpDynIq3QL9%2BH57jBh0f1WDVTbR1DKGvSWkchRqc2Fixn%2FxQLAAOv37g6TAQ3HJsbMQZeHBtkM9b4TjEy7KZ517mElgF8laxSDaMWXHqOu%2F8bHcv01ykLW%2B%2BKj2etGh5KhYyCkH6oek%2Fke3Y8%2BBvjd9oEDENsT6IKbDJT8Mf3R0vEyOpbcXHq5QEQenn8geELq3Pkq52VzXQW6jg9WzkWMrEITiNECPej2cdArY5Q1lNjoBxYM0gdFErqKAVik77iydV4XxY7ZVpKcF2sJ4hKkjWxyo70HZaXvT%2FVGTlElCcoQQZ5Q4btN9Up1Ufro5uUNL7h9GxXyDuKFeK9pr7tvQXoeNKrkQRYPW3SA0YqUjBMKTxEDEfY17hgRMvtnKOIyLWPPK3vkpXX69ADxJYP63QSKk3UPdDQjgRJncJb3PRP%2BfNFFWHr%2Bq5kMQSRIIWI6JJ3efFammUUqe8kKwDz08V0bMnCSY3Sky3ppqnRXwLC0DkQrmxyp1mXmd%2F7%2Fc%2FiwNVGcDCCnl4jkEI0PwvnJfZaE%2Fd88mOfbFb23AQ%2BAr6CvZIMyZDczGxKgC8Wd0yEEcMExPKDJupDa7hYIY6f%2FlR9fgcjCRp%2BnQBjqkAR9fSBBEuuC3mTrpOzFq3qOOyvSDpvaGhlU2fY0EfW3VdjPd5LD471VsHiYL%2B44zHrstC2UA%2Fkh%2FTydKEjXUdGrEczK%2FUPtVK8iBYwilzNiQN3Z6CeGRbGPcuEgeH3y0agp6pCfsJE4Q6aqVeBjNh20xoPp8dRmCvFzzrWxT%2FKW6GzhDkzcCedXAEZ4qnRl6jFoSYxIKZPo08brXwhJ7hUOnq%2BzZ&X-Amz-Signature=ef8cd7f0f000bd9952ee6d7f6e5bc515dad5061369122a30341050405c0c9d9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYMYCO6H%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCDIkBCx%2FoxU6BUvUOBpU680iglYuBWFlpJ8%2B0aOdLiQwIhAKalQ%2F3%2BXNpI8O4IaaYftRjlrPrtEaMMbT0%2FvY7x96OmKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6tMgG4Ar6V74IrAAq3AP3GsRXe5ttrSPOVfcw3fHDRhbN7ye0mnpDynIq3QL9%2BH57jBh0f1WDVTbR1DKGvSWkchRqc2Fixn%2FxQLAAOv37g6TAQ3HJsbMQZeHBtkM9b4TjEy7KZ517mElgF8laxSDaMWXHqOu%2F8bHcv01ykLW%2B%2BKj2etGh5KhYyCkH6oek%2Fke3Y8%2BBvjd9oEDENsT6IKbDJT8Mf3R0vEyOpbcXHq5QEQenn8geELq3Pkq52VzXQW6jg9WzkWMrEITiNECPej2cdArY5Q1lNjoBxYM0gdFErqKAVik77iydV4XxY7ZVpKcF2sJ4hKkjWxyo70HZaXvT%2FVGTlElCcoQQZ5Q4btN9Up1Ufro5uUNL7h9GxXyDuKFeK9pr7tvQXoeNKrkQRYPW3SA0YqUjBMKTxEDEfY17hgRMvtnKOIyLWPPK3vkpXX69ADxJYP63QSKk3UPdDQjgRJncJb3PRP%2BfNFFWHr%2Bq5kMQSRIIWI6JJ3efFammUUqe8kKwDz08V0bMnCSY3Sky3ppqnRXwLC0DkQrmxyp1mXmd%2F7%2Fc%2FiwNVGcDCCnl4jkEI0PwvnJfZaE%2Fd88mOfbFb23AQ%2BAr6CvZIMyZDczGxKgC8Wd0yEEcMExPKDJupDa7hYIY6f%2FlR9fgcjCRp%2BnQBjqkAR9fSBBEuuC3mTrpOzFq3qOOyvSDpvaGhlU2fY0EfW3VdjPd5LD471VsHiYL%2B44zHrstC2UA%2Fkh%2FTydKEjXUdGrEczK%2FUPtVK8iBYwilzNiQN3Z6CeGRbGPcuEgeH3y0agp6pCfsJE4Q6aqVeBjNh20xoPp8dRmCvFzzrWxT%2FKW6GzhDkzcCedXAEZ4qnRl6jFoSYxIKZPo08brXwhJ7hUOnq%2BzZ&X-Amz-Signature=39d339c4267a027e1c144d244a3f6c87b62303ddb6f903951affc4d71acdc578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYMYCO6H%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCDIkBCx%2FoxU6BUvUOBpU680iglYuBWFlpJ8%2B0aOdLiQwIhAKalQ%2F3%2BXNpI8O4IaaYftRjlrPrtEaMMbT0%2FvY7x96OmKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6tMgG4Ar6V74IrAAq3AP3GsRXe5ttrSPOVfcw3fHDRhbN7ye0mnpDynIq3QL9%2BH57jBh0f1WDVTbR1DKGvSWkchRqc2Fixn%2FxQLAAOv37g6TAQ3HJsbMQZeHBtkM9b4TjEy7KZ517mElgF8laxSDaMWXHqOu%2F8bHcv01ykLW%2B%2BKj2etGh5KhYyCkH6oek%2Fke3Y8%2BBvjd9oEDENsT6IKbDJT8Mf3R0vEyOpbcXHq5QEQenn8geELq3Pkq52VzXQW6jg9WzkWMrEITiNECPej2cdArY5Q1lNjoBxYM0gdFErqKAVik77iydV4XxY7ZVpKcF2sJ4hKkjWxyo70HZaXvT%2FVGTlElCcoQQZ5Q4btN9Up1Ufro5uUNL7h9GxXyDuKFeK9pr7tvQXoeNKrkQRYPW3SA0YqUjBMKTxEDEfY17hgRMvtnKOIyLWPPK3vkpXX69ADxJYP63QSKk3UPdDQjgRJncJb3PRP%2BfNFFWHr%2Bq5kMQSRIIWI6JJ3efFammUUqe8kKwDz08V0bMnCSY3Sky3ppqnRXwLC0DkQrmxyp1mXmd%2F7%2Fc%2FiwNVGcDCCnl4jkEI0PwvnJfZaE%2Fd88mOfbFb23AQ%2BAr6CvZIMyZDczGxKgC8Wd0yEEcMExPKDJupDa7hYIY6f%2FlR9fgcjCRp%2BnQBjqkAR9fSBBEuuC3mTrpOzFq3qOOyvSDpvaGhlU2fY0EfW3VdjPd5LD471VsHiYL%2B44zHrstC2UA%2Fkh%2FTydKEjXUdGrEczK%2FUPtVK8iBYwilzNiQN3Z6CeGRbGPcuEgeH3y0agp6pCfsJE4Q6aqVeBjNh20xoPp8dRmCvFzzrWxT%2FKW6GzhDkzcCedXAEZ4qnRl6jFoSYxIKZPo08brXwhJ7hUOnq%2BzZ&X-Amz-Signature=cf085c1c71b9c60c72cc6ad8846a3f331d9bc215476f8b7d928c65621a46c8ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYMYCO6H%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCDIkBCx%2FoxU6BUvUOBpU680iglYuBWFlpJ8%2B0aOdLiQwIhAKalQ%2F3%2BXNpI8O4IaaYftRjlrPrtEaMMbT0%2FvY7x96OmKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6tMgG4Ar6V74IrAAq3AP3GsRXe5ttrSPOVfcw3fHDRhbN7ye0mnpDynIq3QL9%2BH57jBh0f1WDVTbR1DKGvSWkchRqc2Fixn%2FxQLAAOv37g6TAQ3HJsbMQZeHBtkM9b4TjEy7KZ517mElgF8laxSDaMWXHqOu%2F8bHcv01ykLW%2B%2BKj2etGh5KhYyCkH6oek%2Fke3Y8%2BBvjd9oEDENsT6IKbDJT8Mf3R0vEyOpbcXHq5QEQenn8geELq3Pkq52VzXQW6jg9WzkWMrEITiNECPej2cdArY5Q1lNjoBxYM0gdFErqKAVik77iydV4XxY7ZVpKcF2sJ4hKkjWxyo70HZaXvT%2FVGTlElCcoQQZ5Q4btN9Up1Ufro5uUNL7h9GxXyDuKFeK9pr7tvQXoeNKrkQRYPW3SA0YqUjBMKTxEDEfY17hgRMvtnKOIyLWPPK3vkpXX69ADxJYP63QSKk3UPdDQjgRJncJb3PRP%2BfNFFWHr%2Bq5kMQSRIIWI6JJ3efFammUUqe8kKwDz08V0bMnCSY3Sky3ppqnRXwLC0DkQrmxyp1mXmd%2F7%2Fc%2FiwNVGcDCCnl4jkEI0PwvnJfZaE%2Fd88mOfbFb23AQ%2BAr6CvZIMyZDczGxKgC8Wd0yEEcMExPKDJupDa7hYIY6f%2FlR9fgcjCRp%2BnQBjqkAR9fSBBEuuC3mTrpOzFq3qOOyvSDpvaGhlU2fY0EfW3VdjPd5LD471VsHiYL%2B44zHrstC2UA%2Fkh%2FTydKEjXUdGrEczK%2FUPtVK8iBYwilzNiQN3Z6CeGRbGPcuEgeH3y0agp6pCfsJE4Q6aqVeBjNh20xoPp8dRmCvFzzrWxT%2FKW6GzhDkzcCedXAEZ4qnRl6jFoSYxIKZPo08brXwhJ7hUOnq%2BzZ&X-Amz-Signature=d9b0dc0a2bf25d58ee69a6c156a694568b9255338b1894934d31a621766bcead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYMYCO6H%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCDIkBCx%2FoxU6BUvUOBpU680iglYuBWFlpJ8%2B0aOdLiQwIhAKalQ%2F3%2BXNpI8O4IaaYftRjlrPrtEaMMbT0%2FvY7x96OmKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6tMgG4Ar6V74IrAAq3AP3GsRXe5ttrSPOVfcw3fHDRhbN7ye0mnpDynIq3QL9%2BH57jBh0f1WDVTbR1DKGvSWkchRqc2Fixn%2FxQLAAOv37g6TAQ3HJsbMQZeHBtkM9b4TjEy7KZ517mElgF8laxSDaMWXHqOu%2F8bHcv01ykLW%2B%2BKj2etGh5KhYyCkH6oek%2Fke3Y8%2BBvjd9oEDENsT6IKbDJT8Mf3R0vEyOpbcXHq5QEQenn8geELq3Pkq52VzXQW6jg9WzkWMrEITiNECPej2cdArY5Q1lNjoBxYM0gdFErqKAVik77iydV4XxY7ZVpKcF2sJ4hKkjWxyo70HZaXvT%2FVGTlElCcoQQZ5Q4btN9Up1Ufro5uUNL7h9GxXyDuKFeK9pr7tvQXoeNKrkQRYPW3SA0YqUjBMKTxEDEfY17hgRMvtnKOIyLWPPK3vkpXX69ADxJYP63QSKk3UPdDQjgRJncJb3PRP%2BfNFFWHr%2Bq5kMQSRIIWI6JJ3efFammUUqe8kKwDz08V0bMnCSY3Sky3ppqnRXwLC0DkQrmxyp1mXmd%2F7%2Fc%2FiwNVGcDCCnl4jkEI0PwvnJfZaE%2Fd88mOfbFb23AQ%2BAr6CvZIMyZDczGxKgC8Wd0yEEcMExPKDJupDa7hYIY6f%2FlR9fgcjCRp%2BnQBjqkAR9fSBBEuuC3mTrpOzFq3qOOyvSDpvaGhlU2fY0EfW3VdjPd5LD471VsHiYL%2B44zHrstC2UA%2Fkh%2FTydKEjXUdGrEczK%2FUPtVK8iBYwilzNiQN3Z6CeGRbGPcuEgeH3y0agp6pCfsJE4Q6aqVeBjNh20xoPp8dRmCvFzzrWxT%2FKW6GzhDkzcCedXAEZ4qnRl6jFoSYxIKZPo08brXwhJ7hUOnq%2BzZ&X-Amz-Signature=2df1e66130727bb5b3c9159fbb0ea8b26d07fc0dd07e73704c04524c5fa9f160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYMYCO6H%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCDIkBCx%2FoxU6BUvUOBpU680iglYuBWFlpJ8%2B0aOdLiQwIhAKalQ%2F3%2BXNpI8O4IaaYftRjlrPrtEaMMbT0%2FvY7x96OmKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6tMgG4Ar6V74IrAAq3AP3GsRXe5ttrSPOVfcw3fHDRhbN7ye0mnpDynIq3QL9%2BH57jBh0f1WDVTbR1DKGvSWkchRqc2Fixn%2FxQLAAOv37g6TAQ3HJsbMQZeHBtkM9b4TjEy7KZ517mElgF8laxSDaMWXHqOu%2F8bHcv01ykLW%2B%2BKj2etGh5KhYyCkH6oek%2Fke3Y8%2BBvjd9oEDENsT6IKbDJT8Mf3R0vEyOpbcXHq5QEQenn8geELq3Pkq52VzXQW6jg9WzkWMrEITiNECPej2cdArY5Q1lNjoBxYM0gdFErqKAVik77iydV4XxY7ZVpKcF2sJ4hKkjWxyo70HZaXvT%2FVGTlElCcoQQZ5Q4btN9Up1Ufro5uUNL7h9GxXyDuKFeK9pr7tvQXoeNKrkQRYPW3SA0YqUjBMKTxEDEfY17hgRMvtnKOIyLWPPK3vkpXX69ADxJYP63QSKk3UPdDQjgRJncJb3PRP%2BfNFFWHr%2Bq5kMQSRIIWI6JJ3efFammUUqe8kKwDz08V0bMnCSY3Sky3ppqnRXwLC0DkQrmxyp1mXmd%2F7%2Fc%2FiwNVGcDCCnl4jkEI0PwvnJfZaE%2Fd88mOfbFb23AQ%2BAr6CvZIMyZDczGxKgC8Wd0yEEcMExPKDJupDa7hYIY6f%2FlR9fgcjCRp%2BnQBjqkAR9fSBBEuuC3mTrpOzFq3qOOyvSDpvaGhlU2fY0EfW3VdjPd5LD471VsHiYL%2B44zHrstC2UA%2Fkh%2FTydKEjXUdGrEczK%2FUPtVK8iBYwilzNiQN3Z6CeGRbGPcuEgeH3y0agp6pCfsJE4Q6aqVeBjNh20xoPp8dRmCvFzzrWxT%2FKW6GzhDkzcCedXAEZ4qnRl6jFoSYxIKZPo08brXwhJ7hUOnq%2BzZ&X-Amz-Signature=cd64d131173d363d6d67b25d3272dbad2593b36ce9e576ec87ce15231b72c55a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


