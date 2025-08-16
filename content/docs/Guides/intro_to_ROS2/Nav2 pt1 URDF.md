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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P3FUVUY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGsQMuWGOGeFa8GgPHgKekhYWWAPdtQVq9AECwCY4V3RAiBXGLjc8OE2jFVt9GyOvcS4VkQ2zypoCAP6p6KYMliZ7yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMKXmu22GtoXTK%2BTbtKtwD0AdtedADlfaD6ZyScLgNYC8QKHwG99ut35V4KZTaOQTroM%2BUdRVKNNCsqy6y1cijFNn5jk7vakQzMHhGyXPIDadagPFqhPGO3IN8eCWXWUscXBwRDTR%2BI%2FYSyPP%2BOijVC4IfwXWoREAzj45cdo2bSOeBZY3ZZiUTQD6C4He8669o3ONqfNkvC0gxrvbj1niMAp7LhtKB0Dlop09jhxpoyBLq%2FEWCzh3KPwphk73ln7V5vvi%2FwyVvOpiJWQCR3mRWfiZ106fezF6q3RZrSpC3F4bVH6pMn6eqlZr7899r5jI7Lbw5u0yNQNP%2B8w7UNfEgVdZJ%2FSSgNTWMzgWjOxbzmy1PIIDPcWkuSCAcI6dJ7P9CxEd5AW2phnh%2FQBqXE4Hx7jQ2EDUdv0GzL9UcyaLwf7vrKEBW2lwSq06k8%2BOHshrMOKVpc7oywHmqqO72%2BsD2J1nn%2Bt8NrvITzGACyZSr%2BF8dD38twBNJemWvWh4kUzEk3RPCKHIr%2FNLz9SrZWx2nB8Enls6XVXAEfXDEc6k06Oj0vLXqqplNPstjdmCcc9X9utMsuXN8prdADeJTQJaS5Szuh0BQVgYC2dx454o6PI17EXxDaY2r0ORUkVq7QcDvlqIO3JDMQgKbRVAwhZyCxQY6pgEaXUola3WJ8wa7ctrIqvrWsxLmw6IBKQEA8NqPK5Gpad0lLy6uaIvYneO6LI00sAtsRs8gjU2tA%2FC0uG2EM1KlEdl0JNfpZpnbpduTY6YtI9swBak%2F8Ew6tezdJrNPghsvxl5LyCXBHRkwfqR%2Bp9IALCVdFY7%2FfkXjMSLnq5MEHUCYL8rj%2BPEfF98U8VLSXmF19wS6qiCpDDSRSK9JpGwtTm1dpsDn&X-Amz-Signature=e6ab0538cdf6cb7f015b6722bc2591ea34072d22e35b16a8a169eec346bf1aca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P3FUVUY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGsQMuWGOGeFa8GgPHgKekhYWWAPdtQVq9AECwCY4V3RAiBXGLjc8OE2jFVt9GyOvcS4VkQ2zypoCAP6p6KYMliZ7yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMKXmu22GtoXTK%2BTbtKtwD0AdtedADlfaD6ZyScLgNYC8QKHwG99ut35V4KZTaOQTroM%2BUdRVKNNCsqy6y1cijFNn5jk7vakQzMHhGyXPIDadagPFqhPGO3IN8eCWXWUscXBwRDTR%2BI%2FYSyPP%2BOijVC4IfwXWoREAzj45cdo2bSOeBZY3ZZiUTQD6C4He8669o3ONqfNkvC0gxrvbj1niMAp7LhtKB0Dlop09jhxpoyBLq%2FEWCzh3KPwphk73ln7V5vvi%2FwyVvOpiJWQCR3mRWfiZ106fezF6q3RZrSpC3F4bVH6pMn6eqlZr7899r5jI7Lbw5u0yNQNP%2B8w7UNfEgVdZJ%2FSSgNTWMzgWjOxbzmy1PIIDPcWkuSCAcI6dJ7P9CxEd5AW2phnh%2FQBqXE4Hx7jQ2EDUdv0GzL9UcyaLwf7vrKEBW2lwSq06k8%2BOHshrMOKVpc7oywHmqqO72%2BsD2J1nn%2Bt8NrvITzGACyZSr%2BF8dD38twBNJemWvWh4kUzEk3RPCKHIr%2FNLz9SrZWx2nB8Enls6XVXAEfXDEc6k06Oj0vLXqqplNPstjdmCcc9X9utMsuXN8prdADeJTQJaS5Szuh0BQVgYC2dx454o6PI17EXxDaY2r0ORUkVq7QcDvlqIO3JDMQgKbRVAwhZyCxQY6pgEaXUola3WJ8wa7ctrIqvrWsxLmw6IBKQEA8NqPK5Gpad0lLy6uaIvYneO6LI00sAtsRs8gjU2tA%2FC0uG2EM1KlEdl0JNfpZpnbpduTY6YtI9swBak%2F8Ew6tezdJrNPghsvxl5LyCXBHRkwfqR%2Bp9IALCVdFY7%2FfkXjMSLnq5MEHUCYL8rj%2BPEfF98U8VLSXmF19wS6qiCpDDSRSK9JpGwtTm1dpsDn&X-Amz-Signature=ef5cf7eb668d75d59345bc4beafbe8d75b60a805de04784b80826e4f79c6d11b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P3FUVUY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGsQMuWGOGeFa8GgPHgKekhYWWAPdtQVq9AECwCY4V3RAiBXGLjc8OE2jFVt9GyOvcS4VkQ2zypoCAP6p6KYMliZ7yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMKXmu22GtoXTK%2BTbtKtwD0AdtedADlfaD6ZyScLgNYC8QKHwG99ut35V4KZTaOQTroM%2BUdRVKNNCsqy6y1cijFNn5jk7vakQzMHhGyXPIDadagPFqhPGO3IN8eCWXWUscXBwRDTR%2BI%2FYSyPP%2BOijVC4IfwXWoREAzj45cdo2bSOeBZY3ZZiUTQD6C4He8669o3ONqfNkvC0gxrvbj1niMAp7LhtKB0Dlop09jhxpoyBLq%2FEWCzh3KPwphk73ln7V5vvi%2FwyVvOpiJWQCR3mRWfiZ106fezF6q3RZrSpC3F4bVH6pMn6eqlZr7899r5jI7Lbw5u0yNQNP%2B8w7UNfEgVdZJ%2FSSgNTWMzgWjOxbzmy1PIIDPcWkuSCAcI6dJ7P9CxEd5AW2phnh%2FQBqXE4Hx7jQ2EDUdv0GzL9UcyaLwf7vrKEBW2lwSq06k8%2BOHshrMOKVpc7oywHmqqO72%2BsD2J1nn%2Bt8NrvITzGACyZSr%2BF8dD38twBNJemWvWh4kUzEk3RPCKHIr%2FNLz9SrZWx2nB8Enls6XVXAEfXDEc6k06Oj0vLXqqplNPstjdmCcc9X9utMsuXN8prdADeJTQJaS5Szuh0BQVgYC2dx454o6PI17EXxDaY2r0ORUkVq7QcDvlqIO3JDMQgKbRVAwhZyCxQY6pgEaXUola3WJ8wa7ctrIqvrWsxLmw6IBKQEA8NqPK5Gpad0lLy6uaIvYneO6LI00sAtsRs8gjU2tA%2FC0uG2EM1KlEdl0JNfpZpnbpduTY6YtI9swBak%2F8Ew6tezdJrNPghsvxl5LyCXBHRkwfqR%2Bp9IALCVdFY7%2FfkXjMSLnq5MEHUCYL8rj%2BPEfF98U8VLSXmF19wS6qiCpDDSRSK9JpGwtTm1dpsDn&X-Amz-Signature=5fa3830b144dd2d7aa011ad24def17c373fc07890690f38f93033b21500000b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P3FUVUY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGsQMuWGOGeFa8GgPHgKekhYWWAPdtQVq9AECwCY4V3RAiBXGLjc8OE2jFVt9GyOvcS4VkQ2zypoCAP6p6KYMliZ7yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMKXmu22GtoXTK%2BTbtKtwD0AdtedADlfaD6ZyScLgNYC8QKHwG99ut35V4KZTaOQTroM%2BUdRVKNNCsqy6y1cijFNn5jk7vakQzMHhGyXPIDadagPFqhPGO3IN8eCWXWUscXBwRDTR%2BI%2FYSyPP%2BOijVC4IfwXWoREAzj45cdo2bSOeBZY3ZZiUTQD6C4He8669o3ONqfNkvC0gxrvbj1niMAp7LhtKB0Dlop09jhxpoyBLq%2FEWCzh3KPwphk73ln7V5vvi%2FwyVvOpiJWQCR3mRWfiZ106fezF6q3RZrSpC3F4bVH6pMn6eqlZr7899r5jI7Lbw5u0yNQNP%2B8w7UNfEgVdZJ%2FSSgNTWMzgWjOxbzmy1PIIDPcWkuSCAcI6dJ7P9CxEd5AW2phnh%2FQBqXE4Hx7jQ2EDUdv0GzL9UcyaLwf7vrKEBW2lwSq06k8%2BOHshrMOKVpc7oywHmqqO72%2BsD2J1nn%2Bt8NrvITzGACyZSr%2BF8dD38twBNJemWvWh4kUzEk3RPCKHIr%2FNLz9SrZWx2nB8Enls6XVXAEfXDEc6k06Oj0vLXqqplNPstjdmCcc9X9utMsuXN8prdADeJTQJaS5Szuh0BQVgYC2dx454o6PI17EXxDaY2r0ORUkVq7QcDvlqIO3JDMQgKbRVAwhZyCxQY6pgEaXUola3WJ8wa7ctrIqvrWsxLmw6IBKQEA8NqPK5Gpad0lLy6uaIvYneO6LI00sAtsRs8gjU2tA%2FC0uG2EM1KlEdl0JNfpZpnbpduTY6YtI9swBak%2F8Ew6tezdJrNPghsvxl5LyCXBHRkwfqR%2Bp9IALCVdFY7%2FfkXjMSLnq5MEHUCYL8rj%2BPEfF98U8VLSXmF19wS6qiCpDDSRSK9JpGwtTm1dpsDn&X-Amz-Signature=0b9273911d2b002cb489084bb0d92efffbad752be4c2ae6f0c410aa778b0af31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P3FUVUY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGsQMuWGOGeFa8GgPHgKekhYWWAPdtQVq9AECwCY4V3RAiBXGLjc8OE2jFVt9GyOvcS4VkQ2zypoCAP6p6KYMliZ7yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMKXmu22GtoXTK%2BTbtKtwD0AdtedADlfaD6ZyScLgNYC8QKHwG99ut35V4KZTaOQTroM%2BUdRVKNNCsqy6y1cijFNn5jk7vakQzMHhGyXPIDadagPFqhPGO3IN8eCWXWUscXBwRDTR%2BI%2FYSyPP%2BOijVC4IfwXWoREAzj45cdo2bSOeBZY3ZZiUTQD6C4He8669o3ONqfNkvC0gxrvbj1niMAp7LhtKB0Dlop09jhxpoyBLq%2FEWCzh3KPwphk73ln7V5vvi%2FwyVvOpiJWQCR3mRWfiZ106fezF6q3RZrSpC3F4bVH6pMn6eqlZr7899r5jI7Lbw5u0yNQNP%2B8w7UNfEgVdZJ%2FSSgNTWMzgWjOxbzmy1PIIDPcWkuSCAcI6dJ7P9CxEd5AW2phnh%2FQBqXE4Hx7jQ2EDUdv0GzL9UcyaLwf7vrKEBW2lwSq06k8%2BOHshrMOKVpc7oywHmqqO72%2BsD2J1nn%2Bt8NrvITzGACyZSr%2BF8dD38twBNJemWvWh4kUzEk3RPCKHIr%2FNLz9SrZWx2nB8Enls6XVXAEfXDEc6k06Oj0vLXqqplNPstjdmCcc9X9utMsuXN8prdADeJTQJaS5Szuh0BQVgYC2dx454o6PI17EXxDaY2r0ORUkVq7QcDvlqIO3JDMQgKbRVAwhZyCxQY6pgEaXUola3WJ8wa7ctrIqvrWsxLmw6IBKQEA8NqPK5Gpad0lLy6uaIvYneO6LI00sAtsRs8gjU2tA%2FC0uG2EM1KlEdl0JNfpZpnbpduTY6YtI9swBak%2F8Ew6tezdJrNPghsvxl5LyCXBHRkwfqR%2Bp9IALCVdFY7%2FfkXjMSLnq5MEHUCYL8rj%2BPEfF98U8VLSXmF19wS6qiCpDDSRSK9JpGwtTm1dpsDn&X-Amz-Signature=3fe95cc6e81a4921653b2753d4b28e61b84c57f5c9526d4f9c2118821c4215fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P3FUVUY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGsQMuWGOGeFa8GgPHgKekhYWWAPdtQVq9AECwCY4V3RAiBXGLjc8OE2jFVt9GyOvcS4VkQ2zypoCAP6p6KYMliZ7yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMKXmu22GtoXTK%2BTbtKtwD0AdtedADlfaD6ZyScLgNYC8QKHwG99ut35V4KZTaOQTroM%2BUdRVKNNCsqy6y1cijFNn5jk7vakQzMHhGyXPIDadagPFqhPGO3IN8eCWXWUscXBwRDTR%2BI%2FYSyPP%2BOijVC4IfwXWoREAzj45cdo2bSOeBZY3ZZiUTQD6C4He8669o3ONqfNkvC0gxrvbj1niMAp7LhtKB0Dlop09jhxpoyBLq%2FEWCzh3KPwphk73ln7V5vvi%2FwyVvOpiJWQCR3mRWfiZ106fezF6q3RZrSpC3F4bVH6pMn6eqlZr7899r5jI7Lbw5u0yNQNP%2B8w7UNfEgVdZJ%2FSSgNTWMzgWjOxbzmy1PIIDPcWkuSCAcI6dJ7P9CxEd5AW2phnh%2FQBqXE4Hx7jQ2EDUdv0GzL9UcyaLwf7vrKEBW2lwSq06k8%2BOHshrMOKVpc7oywHmqqO72%2BsD2J1nn%2Bt8NrvITzGACyZSr%2BF8dD38twBNJemWvWh4kUzEk3RPCKHIr%2FNLz9SrZWx2nB8Enls6XVXAEfXDEc6k06Oj0vLXqqplNPstjdmCcc9X9utMsuXN8prdADeJTQJaS5Szuh0BQVgYC2dx454o6PI17EXxDaY2r0ORUkVq7QcDvlqIO3JDMQgKbRVAwhZyCxQY6pgEaXUola3WJ8wa7ctrIqvrWsxLmw6IBKQEA8NqPK5Gpad0lLy6uaIvYneO6LI00sAtsRs8gjU2tA%2FC0uG2EM1KlEdl0JNfpZpnbpduTY6YtI9swBak%2F8Ew6tezdJrNPghsvxl5LyCXBHRkwfqR%2Bp9IALCVdFY7%2FfkXjMSLnq5MEHUCYL8rj%2BPEfF98U8VLSXmF19wS6qiCpDDSRSK9JpGwtTm1dpsDn&X-Amz-Signature=fedf61300bdfc991210c7e2004fa5d696ceb4524aac0399e0d7da55deed3daec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P3FUVUY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGsQMuWGOGeFa8GgPHgKekhYWWAPdtQVq9AECwCY4V3RAiBXGLjc8OE2jFVt9GyOvcS4VkQ2zypoCAP6p6KYMliZ7yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMKXmu22GtoXTK%2BTbtKtwD0AdtedADlfaD6ZyScLgNYC8QKHwG99ut35V4KZTaOQTroM%2BUdRVKNNCsqy6y1cijFNn5jk7vakQzMHhGyXPIDadagPFqhPGO3IN8eCWXWUscXBwRDTR%2BI%2FYSyPP%2BOijVC4IfwXWoREAzj45cdo2bSOeBZY3ZZiUTQD6C4He8669o3ONqfNkvC0gxrvbj1niMAp7LhtKB0Dlop09jhxpoyBLq%2FEWCzh3KPwphk73ln7V5vvi%2FwyVvOpiJWQCR3mRWfiZ106fezF6q3RZrSpC3F4bVH6pMn6eqlZr7899r5jI7Lbw5u0yNQNP%2B8w7UNfEgVdZJ%2FSSgNTWMzgWjOxbzmy1PIIDPcWkuSCAcI6dJ7P9CxEd5AW2phnh%2FQBqXE4Hx7jQ2EDUdv0GzL9UcyaLwf7vrKEBW2lwSq06k8%2BOHshrMOKVpc7oywHmqqO72%2BsD2J1nn%2Bt8NrvITzGACyZSr%2BF8dD38twBNJemWvWh4kUzEk3RPCKHIr%2FNLz9SrZWx2nB8Enls6XVXAEfXDEc6k06Oj0vLXqqplNPstjdmCcc9X9utMsuXN8prdADeJTQJaS5Szuh0BQVgYC2dx454o6PI17EXxDaY2r0ORUkVq7QcDvlqIO3JDMQgKbRVAwhZyCxQY6pgEaXUola3WJ8wa7ctrIqvrWsxLmw6IBKQEA8NqPK5Gpad0lLy6uaIvYneO6LI00sAtsRs8gjU2tA%2FC0uG2EM1KlEdl0JNfpZpnbpduTY6YtI9swBak%2F8Ew6tezdJrNPghsvxl5LyCXBHRkwfqR%2Bp9IALCVdFY7%2FfkXjMSLnq5MEHUCYL8rj%2BPEfF98U8VLSXmF19wS6qiCpDDSRSK9JpGwtTm1dpsDn&X-Amz-Signature=190ae240499bd66ef8a4369718d8f9f633fa5abb9c3471d619628b80e5345d88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P3FUVUY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGsQMuWGOGeFa8GgPHgKekhYWWAPdtQVq9AECwCY4V3RAiBXGLjc8OE2jFVt9GyOvcS4VkQ2zypoCAP6p6KYMliZ7yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMKXmu22GtoXTK%2BTbtKtwD0AdtedADlfaD6ZyScLgNYC8QKHwG99ut35V4KZTaOQTroM%2BUdRVKNNCsqy6y1cijFNn5jk7vakQzMHhGyXPIDadagPFqhPGO3IN8eCWXWUscXBwRDTR%2BI%2FYSyPP%2BOijVC4IfwXWoREAzj45cdo2bSOeBZY3ZZiUTQD6C4He8669o3ONqfNkvC0gxrvbj1niMAp7LhtKB0Dlop09jhxpoyBLq%2FEWCzh3KPwphk73ln7V5vvi%2FwyVvOpiJWQCR3mRWfiZ106fezF6q3RZrSpC3F4bVH6pMn6eqlZr7899r5jI7Lbw5u0yNQNP%2B8w7UNfEgVdZJ%2FSSgNTWMzgWjOxbzmy1PIIDPcWkuSCAcI6dJ7P9CxEd5AW2phnh%2FQBqXE4Hx7jQ2EDUdv0GzL9UcyaLwf7vrKEBW2lwSq06k8%2BOHshrMOKVpc7oywHmqqO72%2BsD2J1nn%2Bt8NrvITzGACyZSr%2BF8dD38twBNJemWvWh4kUzEk3RPCKHIr%2FNLz9SrZWx2nB8Enls6XVXAEfXDEc6k06Oj0vLXqqplNPstjdmCcc9X9utMsuXN8prdADeJTQJaS5Szuh0BQVgYC2dx454o6PI17EXxDaY2r0ORUkVq7QcDvlqIO3JDMQgKbRVAwhZyCxQY6pgEaXUola3WJ8wa7ctrIqvrWsxLmw6IBKQEA8NqPK5Gpad0lLy6uaIvYneO6LI00sAtsRs8gjU2tA%2FC0uG2EM1KlEdl0JNfpZpnbpduTY6YtI9swBak%2F8Ew6tezdJrNPghsvxl5LyCXBHRkwfqR%2Bp9IALCVdFY7%2FfkXjMSLnq5MEHUCYL8rj%2BPEfF98U8VLSXmF19wS6qiCpDDSRSK9JpGwtTm1dpsDn&X-Amz-Signature=ea649a2cf2dd7bf7091f658d2a9f10fbd07cef271ae9938d3675c97e7b57f8aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P3FUVUY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGsQMuWGOGeFa8GgPHgKekhYWWAPdtQVq9AECwCY4V3RAiBXGLjc8OE2jFVt9GyOvcS4VkQ2zypoCAP6p6KYMliZ7yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMKXmu22GtoXTK%2BTbtKtwD0AdtedADlfaD6ZyScLgNYC8QKHwG99ut35V4KZTaOQTroM%2BUdRVKNNCsqy6y1cijFNn5jk7vakQzMHhGyXPIDadagPFqhPGO3IN8eCWXWUscXBwRDTR%2BI%2FYSyPP%2BOijVC4IfwXWoREAzj45cdo2bSOeBZY3ZZiUTQD6C4He8669o3ONqfNkvC0gxrvbj1niMAp7LhtKB0Dlop09jhxpoyBLq%2FEWCzh3KPwphk73ln7V5vvi%2FwyVvOpiJWQCR3mRWfiZ106fezF6q3RZrSpC3F4bVH6pMn6eqlZr7899r5jI7Lbw5u0yNQNP%2B8w7UNfEgVdZJ%2FSSgNTWMzgWjOxbzmy1PIIDPcWkuSCAcI6dJ7P9CxEd5AW2phnh%2FQBqXE4Hx7jQ2EDUdv0GzL9UcyaLwf7vrKEBW2lwSq06k8%2BOHshrMOKVpc7oywHmqqO72%2BsD2J1nn%2Bt8NrvITzGACyZSr%2BF8dD38twBNJemWvWh4kUzEk3RPCKHIr%2FNLz9SrZWx2nB8Enls6XVXAEfXDEc6k06Oj0vLXqqplNPstjdmCcc9X9utMsuXN8prdADeJTQJaS5Szuh0BQVgYC2dx454o6PI17EXxDaY2r0ORUkVq7QcDvlqIO3JDMQgKbRVAwhZyCxQY6pgEaXUola3WJ8wa7ctrIqvrWsxLmw6IBKQEA8NqPK5Gpad0lLy6uaIvYneO6LI00sAtsRs8gjU2tA%2FC0uG2EM1KlEdl0JNfpZpnbpduTY6YtI9swBak%2F8Ew6tezdJrNPghsvxl5LyCXBHRkwfqR%2Bp9IALCVdFY7%2FfkXjMSLnq5MEHUCYL8rj%2BPEfF98U8VLSXmF19wS6qiCpDDSRSK9JpGwtTm1dpsDn&X-Amz-Signature=e2ee53cf302c0fe0de0593a13acb721b0c2440bf7a71711d3ae4af738fd14ceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P3FUVUY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGsQMuWGOGeFa8GgPHgKekhYWWAPdtQVq9AECwCY4V3RAiBXGLjc8OE2jFVt9GyOvcS4VkQ2zypoCAP6p6KYMliZ7yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMKXmu22GtoXTK%2BTbtKtwD0AdtedADlfaD6ZyScLgNYC8QKHwG99ut35V4KZTaOQTroM%2BUdRVKNNCsqy6y1cijFNn5jk7vakQzMHhGyXPIDadagPFqhPGO3IN8eCWXWUscXBwRDTR%2BI%2FYSyPP%2BOijVC4IfwXWoREAzj45cdo2bSOeBZY3ZZiUTQD6C4He8669o3ONqfNkvC0gxrvbj1niMAp7LhtKB0Dlop09jhxpoyBLq%2FEWCzh3KPwphk73ln7V5vvi%2FwyVvOpiJWQCR3mRWfiZ106fezF6q3RZrSpC3F4bVH6pMn6eqlZr7899r5jI7Lbw5u0yNQNP%2B8w7UNfEgVdZJ%2FSSgNTWMzgWjOxbzmy1PIIDPcWkuSCAcI6dJ7P9CxEd5AW2phnh%2FQBqXE4Hx7jQ2EDUdv0GzL9UcyaLwf7vrKEBW2lwSq06k8%2BOHshrMOKVpc7oywHmqqO72%2BsD2J1nn%2Bt8NrvITzGACyZSr%2BF8dD38twBNJemWvWh4kUzEk3RPCKHIr%2FNLz9SrZWx2nB8Enls6XVXAEfXDEc6k06Oj0vLXqqplNPstjdmCcc9X9utMsuXN8prdADeJTQJaS5Szuh0BQVgYC2dx454o6PI17EXxDaY2r0ORUkVq7QcDvlqIO3JDMQgKbRVAwhZyCxQY6pgEaXUola3WJ8wa7ctrIqvrWsxLmw6IBKQEA8NqPK5Gpad0lLy6uaIvYneO6LI00sAtsRs8gjU2tA%2FC0uG2EM1KlEdl0JNfpZpnbpduTY6YtI9swBak%2F8Ew6tezdJrNPghsvxl5LyCXBHRkwfqR%2Bp9IALCVdFY7%2FfkXjMSLnq5MEHUCYL8rj%2BPEfF98U8VLSXmF19wS6qiCpDDSRSK9JpGwtTm1dpsDn&X-Amz-Signature=711747e3a31bcc4277b284d7666a2a5de53316bc4b189d7e60bf298cfda98c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFYJWIZ4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDb%2F3BF9Swy8EbGF%2FqOnE4xCkYUU4Hatx%2B9JLi91jfzXQIhAN6OYuY8ZyJv1I8MKNVxRvRfrArjDhzLAvTt1EldZHh8Kv8DCHcQABoMNjM3NDIzMTgzODA1IgwDARBkpWZbyxoX1ncq3AOM1qS3C6zjOiozxkBKlZdhwHD59ZoL9loPYwIoNycTl4BEaZuD%2BKfbP%2BnPJehdGltiE5fyOrphZPxacuPwYp%2BjOznBbp6Evy2Qo0zqAb9aGSkPlJx2wFnl2jp%2BDPRjSb1Wb%2BHRs4lAC8zAgTvnEAhtos4DjrsW5MW%2BbYeL75m%2F%2F3hMfam4gDL%2Br8TKs03E3vCK5wboTLL4kWSEglwimDh%2B2Mjeo0RoriOvbpVprAQW%2BTHwgjLmlF3pNepjnZE3s3N4dr0iv2z%2BxMcajNB0DOEN5XAHqVHomzA%2FGrTq%2Bv82%2BFPDyPwLWucCXoXeI9Tabw8nrJpFpDs9hu8Ta79CKiCSsN6bsvD5ghO6WdGl9RicXb0NS0kiVnL7g0g9so6vm2PoiLqx5JC4ie2Tk9kcdonQGb614lpooelrY75afRBnvuqN4HVsUBocQYI9H8toH%2BnLT7NwNe%2FHOGIja6%2FYt3QvqNvlnOcmCh2%2F%2BUOWHMZ4911qOK6jqu4G07ZcEKccIouDM0mzP7yOWiCVNenhd%2Bs6B1rbE3CsP7nbtSJhg7XnUKdkSAnf2CJClczGh1kzewVbP9bTyVy5Wt1JSQCaLpzuDW%2B08PJBhcfR80neLoy6DTyLu8HmApbIA6MW8TDrkILFBjqkAaoQNp0H1jCBBOHtUGbvmmNJMZxD%2Bx2pyRz0uLNRbaT6K5gAUCeWoc0OjrelQ73BvSAMegNOSQR3wfNWApLh615d8Tc4EgA49e0oQ9hIdjElDIgFAghuI3rV0ncBY7rCj2W1GBOqhc9WArHVvSmNR07jiIKCojt9KqFq0C%2BbiyADnuew4ow1TP865ZvFcv%2BNfYNfv1eZHG0hK8JPohcaW9am9L8o&X-Amz-Signature=1f336e274333c1412a528aacfc643ca8d10849cf1dc8eed9ad282d379ae72689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQCYDJGT%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDHE9GXLmYUJmHgG8%2FzaR7M4rGVAFNJgAaLRZq2AL6wBAiEAks892lfsS3%2FSytHBxQ%2FaS2TS32K%2BVLHeZpfniFSSgZYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDGqqM%2BBQrcw4KnNBSrcA2uU7BWgT%2FpxPii5YScCwtsLpauidCCjlE%2Fmq6IU0EL3%2FY3Gboq0sjyu2Bj9tPPWNiIdobG7ElgjKuUmjPiiK%2FBZj2OXCZ27kiCDdkuj1iIiRoi8vwIgYIalrQWiM401LUzqGu7RHO5cAj0LZXEpyDj%2FD9Hm22Io9Pn6ZBsQ5S2rIDd3tQco2vxdIDdDWTW1JSlLLwWsERNNU79XLal%2FrwGKr4jV0%2FvEFpTHP2Er0dXA82CgB%2BgjIuIq7dFr7mz7RHrIzPG2jQ0CuaiJzWZlAb7DuqaMEVf8i0SuUnhsYLj9xTE8u7aOyfJe2d7iavMl1xfZ6bwDzDEk%2FQDbrQ3JPG2z8ndftKFVeUjb6KRKOT24jssuOFXpw58qq%2B0z2OySpRKprMa74SEh5ROA7T2UvThUnW%2BFN3bw3ZSHw6%2FlunqUxulNjNVMHlDbgh2vXmFxDlhq%2B47jtilb4sJnfuiFmMrh86MqZ%2B%2BMaGCGiAb350aiRHTHbQ49koA7lvngnVS59z1mxbbI%2FXSD42wJV%2FvhLxO2t%2B4wopt%2BXEUL3F3Ja8iZrPCuWfAAFzV74zVrcQnrpbHsGiEUgUY4PdZj%2B9hsHmB83x475nzKVDmMqK7jz50hM229CCw5HeeyI%2F5gMJKYgsUGOqUBPbgttudoL17rJyevQuFCKW9VJb0BYjEMwr8Q5vph1WwwV8LHTmo9HQrHYVvj7rOhacEAx2CHPQRIIsIhQVZMg0RsqHgSqP7Q1IGQc0YK8%2FspofFU4j%2BOLazpVQ6RuaO001Xzarf5i148CgPZGUdgHJcIFEjErZltUz4zWUWhyGSnjMah%2BBlTy3GsNuVGXRZrwxsRs5MOBD3Hvozm%2B1J25KnfymmS&X-Amz-Signature=885db2901882f9cd2b64fbe07da43f86cbdc13cf3a32299dec599e159e71823c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVA447HH%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCkVyL4rSK%2FfEIzffGFeNjg%2BdE6Yst7OQsxpT9fI%2Fe1ngIhAOYYXC%2Fy8bxMmrpwaAwjeHzNxJVYoZ4OxSVZamSeZdo2Kv8DCHcQABoMNjM3NDIzMTgzODA1IgyljjImedhZQNeYy3wq3AOollaIS7o2Y7fSP5C1SYVyKZsWEfEGsJEmaRgLftnOrZ2rku7%2BeqbSEYANRH0XEkDPi%2BZUBHqa6R%2BKnGttehAem%2Ftl3AkIYMdA9OXluncEchruN36ef9tjG25Yn8uzJF31E2yVMap9jbRkV32JRpQyQXMYVAF3P9DGUtKjkfysoI33811lLGA1vSYioGji2o3uDAuxSv%2BlLt0uNTx7WZCvstn9hFNVKnsUO5pOvmiymBeSTcYCKNPw7enlk%2FxPVKdR6PNVXcsMa6gQHUX9ndmOfF4huUTrszTa9lNQ5FMEoojpo8U5gIoztCyA2JeS4FEBhPa4y19BWKr1tFcIPDrhw2M1mu1j%2B4ye%2FlNOh4UDHHGFmhh6EPONdHiTU8aOeibpckbnD0Vu5FU4BTN848h6bhHSsGRnRV7nJTXcejU5u%2FvSoAyIFBWQYqCUee6kXg%2F0Da%2BUBt5MKxcy0luzd28oT%2F91fXzDSNWEboIZsFgl1j5KirvrKPV54kV7yS4Yy%2FkCPQJcQMKGmN7xL5fCpSD3Jx6yu%2BllgynFV%2FXwCAYjFx7pR05vkh0DcI5TAZXhwPTzcHAoHXnBZhVphCCN8oAA3yjNQ2id0IQjZP7DEDDmK6TCtlO3u2fv5pBiVTCdlILFBjqkAUheiYQMUmKKddY7llyHz5PtEMtAK6XvWIKEmRaNdKPjT75nBgJqQOHCWIgUKf3SpIbSih6mLYdRj2cB2j0TrRGM6ENb4NY04It6fK2D8EZshPsAorXcnNCWuCnJLJOq04WLrzpasCg%2FUq2ZNmDBzRzjLcmBrb0URKYTBK4yXVjKi39yh0ZnBFyGm9D1VHuFha1nBKeJuth4NG%2BtBnQrSXwMrBHr&X-Amz-Signature=d59b010fe51c07512b8e63892566add3d3531150c8ef5e9c547242f779f2e812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P3FUVUY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGsQMuWGOGeFa8GgPHgKekhYWWAPdtQVq9AECwCY4V3RAiBXGLjc8OE2jFVt9GyOvcS4VkQ2zypoCAP6p6KYMliZ7yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMKXmu22GtoXTK%2BTbtKtwD0AdtedADlfaD6ZyScLgNYC8QKHwG99ut35V4KZTaOQTroM%2BUdRVKNNCsqy6y1cijFNn5jk7vakQzMHhGyXPIDadagPFqhPGO3IN8eCWXWUscXBwRDTR%2BI%2FYSyPP%2BOijVC4IfwXWoREAzj45cdo2bSOeBZY3ZZiUTQD6C4He8669o3ONqfNkvC0gxrvbj1niMAp7LhtKB0Dlop09jhxpoyBLq%2FEWCzh3KPwphk73ln7V5vvi%2FwyVvOpiJWQCR3mRWfiZ106fezF6q3RZrSpC3F4bVH6pMn6eqlZr7899r5jI7Lbw5u0yNQNP%2B8w7UNfEgVdZJ%2FSSgNTWMzgWjOxbzmy1PIIDPcWkuSCAcI6dJ7P9CxEd5AW2phnh%2FQBqXE4Hx7jQ2EDUdv0GzL9UcyaLwf7vrKEBW2lwSq06k8%2BOHshrMOKVpc7oywHmqqO72%2BsD2J1nn%2Bt8NrvITzGACyZSr%2BF8dD38twBNJemWvWh4kUzEk3RPCKHIr%2FNLz9SrZWx2nB8Enls6XVXAEfXDEc6k06Oj0vLXqqplNPstjdmCcc9X9utMsuXN8prdADeJTQJaS5Szuh0BQVgYC2dx454o6PI17EXxDaY2r0ORUkVq7QcDvlqIO3JDMQgKbRVAwhZyCxQY6pgEaXUola3WJ8wa7ctrIqvrWsxLmw6IBKQEA8NqPK5Gpad0lLy6uaIvYneO6LI00sAtsRs8gjU2tA%2FC0uG2EM1KlEdl0JNfpZpnbpduTY6YtI9swBak%2F8Ew6tezdJrNPghsvxl5LyCXBHRkwfqR%2Bp9IALCVdFY7%2FfkXjMSLnq5MEHUCYL8rj%2BPEfF98U8VLSXmF19wS6qiCpDDSRSK9JpGwtTm1dpsDn&X-Amz-Signature=fe585b0cf1cb1c0d5520914cc6bf00cf586761f32ddfea999b3263c985041a79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JBCU5Y2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEYBYicEQczx7utXNHLt%2Fw8p0PRDh6dKw11dOj1Ozw87AiEAvJJoF%2BYrZ%2Fb4JjA0V9qUq6tkUHv%2FCFZCmS6IwmGmp80q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOqoVmmhk3zKhTlZEyrcA7rR0mq9%2Fd0A06frmNV%2FrzbL%2Bz1uTxjvIB%2FGXkr9SJr%2FP%2FIi%2BjJk44nxb8NTy395FDNR%2F0BBq%2B6IT75W0PKLubDt5l8vu2br9BGSwdYEFJa2PaeAhZov%2FF8hAWjQ%2BS%2BDW6byXlNDRJ40XhVNSAa4l4UT%2FHKGcL4%2FxN%2FqEDMEiGyr8yNx%2FWfbLnbWUwg3MvfmF3iRudKhej127ITNKW8JQFGDjPkdu1YpJGocXyBMjn%2FKTR%2BpacxglXeVgfVdCFO36sKr%2FkkNEZ3ooCgzERZFMT0F04AGzkwFKZvLhXo3OQiyYEt91iGsHcWuyBG1MxvM3jnnG7LyKrDIe%2BhaQbljK9GVGQq2Blm756ElXJiYqSVunYqo0XKL6VQH6unViWm620HF50S%2BGrJ36iOaYtA0vkm85GGUkV3CSpC7rlYqLsLXuQvkFIDycqbnxMJW67GeXUdbI7t%2B5nA9ikKB1AgoCQJtZHXaLhuB54L0puNskAYVoI%2FwdRfhzNTq16f8oC76DJEyjw%2BylxEfLwYzR9z0YfGWCAeQZ7q2wDwPxKGmIe33HuW1EY0O3hXsinepJcP1jXqqaBUR6lYxTjabvtaVbCN0MaGaM1bxPhPOdflxECzDG80BB27DOULilR7RMJKegsUGOqUBfhkSm%2BjAyG%2F2Sbe2zFVkjJ9y%2FVrZ%2BOHCeQf9bMOF1987JI9lJWvdsmsDmm0An0Julw5THhm2ygeTwLEW89QrcxnzX2TslGc%2B3m1q%2Fr6psfM0PzpLt9NDayzaUY%2FxQN8j84VyzTBPeyrmZDSncSArNzW2SwtxCY4qgBJw%2Fqp8C1ftzQOUfvQ97tKAZAlVd%2FzKCwOHPkwevJWAy91zFBom4vhh2oRG&X-Amz-Signature=768741ff5a798730fd58b1d78a6f8f3dd7b8e1802e297a62fa09917ae8c7b774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P3FUVUY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGsQMuWGOGeFa8GgPHgKekhYWWAPdtQVq9AECwCY4V3RAiBXGLjc8OE2jFVt9GyOvcS4VkQ2zypoCAP6p6KYMliZ7yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMKXmu22GtoXTK%2BTbtKtwD0AdtedADlfaD6ZyScLgNYC8QKHwG99ut35V4KZTaOQTroM%2BUdRVKNNCsqy6y1cijFNn5jk7vakQzMHhGyXPIDadagPFqhPGO3IN8eCWXWUscXBwRDTR%2BI%2FYSyPP%2BOijVC4IfwXWoREAzj45cdo2bSOeBZY3ZZiUTQD6C4He8669o3ONqfNkvC0gxrvbj1niMAp7LhtKB0Dlop09jhxpoyBLq%2FEWCzh3KPwphk73ln7V5vvi%2FwyVvOpiJWQCR3mRWfiZ106fezF6q3RZrSpC3F4bVH6pMn6eqlZr7899r5jI7Lbw5u0yNQNP%2B8w7UNfEgVdZJ%2FSSgNTWMzgWjOxbzmy1PIIDPcWkuSCAcI6dJ7P9CxEd5AW2phnh%2FQBqXE4Hx7jQ2EDUdv0GzL9UcyaLwf7vrKEBW2lwSq06k8%2BOHshrMOKVpc7oywHmqqO72%2BsD2J1nn%2Bt8NrvITzGACyZSr%2BF8dD38twBNJemWvWh4kUzEk3RPCKHIr%2FNLz9SrZWx2nB8Enls6XVXAEfXDEc6k06Oj0vLXqqplNPstjdmCcc9X9utMsuXN8prdADeJTQJaS5Szuh0BQVgYC2dx454o6PI17EXxDaY2r0ORUkVq7QcDvlqIO3JDMQgKbRVAwhZyCxQY6pgEaXUola3WJ8wa7ctrIqvrWsxLmw6IBKQEA8NqPK5Gpad0lLy6uaIvYneO6LI00sAtsRs8gjU2tA%2FC0uG2EM1KlEdl0JNfpZpnbpduTY6YtI9swBak%2F8Ew6tezdJrNPghsvxl5LyCXBHRkwfqR%2Bp9IALCVdFY7%2FfkXjMSLnq5MEHUCYL8rj%2BPEfF98U8VLSXmF19wS6qiCpDDSRSK9JpGwtTm1dpsDn&X-Amz-Signature=0b3222cf5308c96b4f86847e80cc82029e7970f4a5d61ea51f15dda386c1b19d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2JGBBUQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIFeYt54EpeAhygrLAxwMpwO3ih2ttMtMskD4AxIenLHVAiB4oR5i6NPi5nMH%2FHjU6nufe%2F6U8M2lxQvRSlTi6IMSKCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM039dPeR7HbPG7GoiKtwD0ZkIVNYZUcwMWiEKlRtXJ8wBTfo9vogsnU0DJhKKFqhoSkwYvikNfpH60b0JWWzxP1fGNSOT4R%2BKsjtaVrMcO5eaI8SGb99jMKUK%2Frz0ZQsleFVLq7M0UGYOgXcWUo3l2eHwLnUb8mzlOB1RiEac2hR821BHeaoi91hoWlUiXyeQ5JPz0IO3t3ERRiDEsEcK59NrKOGc%2FHiyvI5far7PPdaYZmYzsl5IvSZO69j2Sl8DZ8Kb0Oy6Y9a2psbLpIxOmcpdqWD6Gb5o%2FvehqqxNVEgwssTjOnQSRygXzk2%2BoQakiEcjJo6QehaFH9%2Fq7u%2F%2BeXS9LTm%2FqGobDSpINx19TwLJvSrg4fQxBjT6k3lmBSgUdguOWbkm%2FwLfjX5Ag57G%2Fd01PiCUiqP3y0tOJklJYcbYuYCmuqT1lITtGyD4gOvp3ycnecki6%2B2cqrbDHlGz4JKS%2BRJNb0aKEYWE9NNV2ANJDX2%2FwQAHKCJTKZGm2UK1o6azc8e8utDOiEgmnH4KU3ZwG2BsU5vC33Bflq3joWTEDGe9MgoORD8QUcDm1%2Bo3G3bNUqL%2B2gqv2TkBEVm5KDHwI8WDM%2Ft0CIcdT9hZcmi2B47nBhjnUoLyn8jfpUt0lL4tWhmiWZLc7dgw8ZmCxQY6pgFvNcyiKrsTphvcyw8SW%2BkDjCjNVn35R8fY3HHxLJh3tgKz7e3g47agbAj1%2FyoaSZWZbrxD%2BW31q6Y%2FNTrDOlac%2FBwdkmJOaHyUEB3NCw3Y90M7q8AmorbB4NCX4cYCCEvUYvXljgGV5%2Fl8%2BHWVCNT4L7yovRlnMVlvv1nJmls8hIqM%2Fch24Ru68rAuzJzaMX4DGdnr08m3VnlO1sVbR35dkMZhBYll&X-Amz-Signature=5adc12bba63ee06ef4c0ad179e5f04c9dcbdaa3637bf8cabbe0b3e4855e123b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P3FUVUY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGsQMuWGOGeFa8GgPHgKekhYWWAPdtQVq9AECwCY4V3RAiBXGLjc8OE2jFVt9GyOvcS4VkQ2zypoCAP6p6KYMliZ7yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMKXmu22GtoXTK%2BTbtKtwD0AdtedADlfaD6ZyScLgNYC8QKHwG99ut35V4KZTaOQTroM%2BUdRVKNNCsqy6y1cijFNn5jk7vakQzMHhGyXPIDadagPFqhPGO3IN8eCWXWUscXBwRDTR%2BI%2FYSyPP%2BOijVC4IfwXWoREAzj45cdo2bSOeBZY3ZZiUTQD6C4He8669o3ONqfNkvC0gxrvbj1niMAp7LhtKB0Dlop09jhxpoyBLq%2FEWCzh3KPwphk73ln7V5vvi%2FwyVvOpiJWQCR3mRWfiZ106fezF6q3RZrSpC3F4bVH6pMn6eqlZr7899r5jI7Lbw5u0yNQNP%2B8w7UNfEgVdZJ%2FSSgNTWMzgWjOxbzmy1PIIDPcWkuSCAcI6dJ7P9CxEd5AW2phnh%2FQBqXE4Hx7jQ2EDUdv0GzL9UcyaLwf7vrKEBW2lwSq06k8%2BOHshrMOKVpc7oywHmqqO72%2BsD2J1nn%2Bt8NrvITzGACyZSr%2BF8dD38twBNJemWvWh4kUzEk3RPCKHIr%2FNLz9SrZWx2nB8Enls6XVXAEfXDEc6k06Oj0vLXqqplNPstjdmCcc9X9utMsuXN8prdADeJTQJaS5Szuh0BQVgYC2dx454o6PI17EXxDaY2r0ORUkVq7QcDvlqIO3JDMQgKbRVAwhZyCxQY6pgEaXUola3WJ8wa7ctrIqvrWsxLmw6IBKQEA8NqPK5Gpad0lLy6uaIvYneO6LI00sAtsRs8gjU2tA%2FC0uG2EM1KlEdl0JNfpZpnbpduTY6YtI9swBak%2F8Ew6tezdJrNPghsvxl5LyCXBHRkwfqR%2Bp9IALCVdFY7%2FfkXjMSLnq5MEHUCYL8rj%2BPEfF98U8VLSXmF19wS6qiCpDDSRSK9JpGwtTm1dpsDn&X-Amz-Signature=a7164ba1ad519d884ad16b70c3254c2996ece1f5aa134c3b5fce18893e05de20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKLCPSDO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIFJuqXprmCy9101lKNj5bZ%2BBIyODlfGs8oxQHbzrd7E%2FAiEAow06wd5USkR%2FeMNleHwVFfJR3MIWp2QHmcYB7V%2BRxxQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJieCJsm8mSuTQLS%2BCrcA9YtsfeV5Bdj%2FF2CDbQYae4pIZhzY%2BzTqs8xoZ298tJw7p5htZ9W%2BPnmz%2FRGS7lR9TaAvUksAWF4sj589UsqnO7nCG4p4KraFxEm9hZR2Y9D466dDnMcqqm4h65RTkTf6iDe9YnfGl2vwbQ5uXjZU5%2BKQHNzmjiXLo%2FAx99ONrDWwCZnw4eCcVrYlcUC4PgqinkRLLr%2FYwnKX31CdcWoja8Y%2FowSHSACB8Y6U22zascWgpMHjjsEX9ubq%2BHSm4sp4TR3jarWJeVICpDj0B2mxfG6MQz9nsIGTuyM9VsLS2xE5TAOeOMigP6dEbSBqQZVkzf7W7tFxYWxC%2F78xpHZThglZ0WNQqArTEPBD35BqooA3vVDzQtzIUwnKa6QTJfOn33kOzZGGhF9G9rgY5uxESyWnq6a98ty%2BgCYTnSz7aR9sP0HmYc1e72VVY5n%2B%2Fl1xELq%2FSZJriWNzJc7KStZ%2FkAYWXoe%2FbBSWjFvzqthUgxr5PtusT4k2ulMdkNgw2L9Ktng%2BO1T5RzrVI9tCIKhB8ufaS6bm5QoYPW6ODvKOn%2BJ7uLIVbpFAwvMJk8oQJUQNKrcqHg%2FjHpWbHicbP%2FouZ8w4rftBQosurpyGg8b5gpl47x1EUB3K7Ra8yc3MJ2egsUGOqUBo4g0B6pdZxJHKimoiyIXdl0VkeCfzRKHeGNPhs87F5HNZGnSnhzCd0XTDutlL4pxhvClinw%2FQGU4GaOe8zLFHXL4IQ1yQR7LIBg5yrEnKDW9fWD5lPQvvS48uhUNQzquPOmJo50tM%2Bal8gkHPWwWnMLBflcThrGL5srWTW%2Fl2eAkCthluPWi5Z8tK6zW3sDFme4sTrL00%2FTBP%2BVKSUo85gS%2B8bNV&X-Amz-Signature=28bfbad3719ad77b94e74f50f4a5d971ce6208f4eb0c7e8a2f68ef39f606c7be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P3FUVUY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGsQMuWGOGeFa8GgPHgKekhYWWAPdtQVq9AECwCY4V3RAiBXGLjc8OE2jFVt9GyOvcS4VkQ2zypoCAP6p6KYMliZ7yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMKXmu22GtoXTK%2BTbtKtwD0AdtedADlfaD6ZyScLgNYC8QKHwG99ut35V4KZTaOQTroM%2BUdRVKNNCsqy6y1cijFNn5jk7vakQzMHhGyXPIDadagPFqhPGO3IN8eCWXWUscXBwRDTR%2BI%2FYSyPP%2BOijVC4IfwXWoREAzj45cdo2bSOeBZY3ZZiUTQD6C4He8669o3ONqfNkvC0gxrvbj1niMAp7LhtKB0Dlop09jhxpoyBLq%2FEWCzh3KPwphk73ln7V5vvi%2FwyVvOpiJWQCR3mRWfiZ106fezF6q3RZrSpC3F4bVH6pMn6eqlZr7899r5jI7Lbw5u0yNQNP%2B8w7UNfEgVdZJ%2FSSgNTWMzgWjOxbzmy1PIIDPcWkuSCAcI6dJ7P9CxEd5AW2phnh%2FQBqXE4Hx7jQ2EDUdv0GzL9UcyaLwf7vrKEBW2lwSq06k8%2BOHshrMOKVpc7oywHmqqO72%2BsD2J1nn%2Bt8NrvITzGACyZSr%2BF8dD38twBNJemWvWh4kUzEk3RPCKHIr%2FNLz9SrZWx2nB8Enls6XVXAEfXDEc6k06Oj0vLXqqplNPstjdmCcc9X9utMsuXN8prdADeJTQJaS5Szuh0BQVgYC2dx454o6PI17EXxDaY2r0ORUkVq7QcDvlqIO3JDMQgKbRVAwhZyCxQY6pgEaXUola3WJ8wa7ctrIqvrWsxLmw6IBKQEA8NqPK5Gpad0lLy6uaIvYneO6LI00sAtsRs8gjU2tA%2FC0uG2EM1KlEdl0JNfpZpnbpduTY6YtI9swBak%2F8Ew6tezdJrNPghsvxl5LyCXBHRkwfqR%2Bp9IALCVdFY7%2FfkXjMSLnq5MEHUCYL8rj%2BPEfF98U8VLSXmF19wS6qiCpDDSRSK9JpGwtTm1dpsDn&X-Amz-Signature=eea14841a1a7b2591a2020c04f03205a7b525ae0bb6cb7086c48867cf86580ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466246M2M7E%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDenASpIwKmPhTxKyxiFCravJ5Ca0E3eQfAPtXx%2B%2Ftt2gIgDl%2BjHbOdPl%2BAbH4nyOV74SY3ZELfiXJhEcAcOnOx8lsq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDD3c3q9zPm9CkIuPcSrcA8L5F6MApj6F3mZ4xAIfLQYILyg%2Fap0mPshkO6INTSI9czmsaxIJV2SSDmabEfER0tXyzNYC6YkrGY%2BCANsJJmnxtr698oC9%2FOxSvDp%2BHuTb0GOakpE42uuH8LhVfVTCM1riSenDgn1vjaYSDmiPz9H8PVUn2Jt%2BkXroPF6W9aLJFUpMIuWyKd9ayva51KSJCHw%2FLuWPBqiRywth%2BbBsdtgiWAYqmTBkpmbDkv82cdnqCYvuS2h8FrSsAMCYgw%2FcJ1aZIoMkxS6PAB%2BOUiWsDP07LqXjK5SvoHNfqondCkz0qEFvAlgOOsaLzvdAnXN64IIBSF9wsDWdvB6HE0b%2FaUXGzShnVipxXPZ2PrIMAVnCxmqyF044lo4QSNSBCUpMHM4QliFer31Lso%2B1GaLsRvLRFurIsT4AQA8ngnbDp56lxIr5orwAl84OihR9huNodpU2v5PeBMfxAzBcVMgojmC6Y4UojZZugEJIv%2FOgoXxpt5APqnKLF6UrKDMJ90Jbq81UIc%2Fw7nNwilwWU3n8djaSYciEU8vwzkoybZwisXaFmFZUtSxOfEn%2Fcf2p0KolS2JpPFuDw9c9yseE6E0hjKisE49mk594tAmayfzo1XNxOzipjNOxmcwcjx7vMLzFgsUGOqUB3vsgbEJTR8N22LDPY2%2BobTylZLDnyPOLxgBg3BfmaSd7kueLorYUDEdnutc62cyCNw4uD87ij0GNIEuajLHNjhA7SHv3c%2FaRKlkoi8y%2BpxmXtGpceavKqKFDmgWpVcY%2Ftz67GEM5kc1dssYIB8pVwpF5%2FdGfummBywuLNvjJOmH%2BPEN1BsWQ5e%2F5sy7r6%2BUHQdPLuv1G8oyXEv%2FdccBKZkqjT9js&X-Amz-Signature=639b8bf038d6d679fedbc95cc5273bdcb9a771f23d5cfc127f6b7234b9d55069&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D23OTRK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDK%2BYaB3PSdMtZBTJirfhnzzrD0t4yYl%2FOerb3lZI%2FVKgIgO7WcyJp6OxHb7p9Z7Z%2FGOCVAb7d3juNupZ4g9TkqBbAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOqA09xrHgiyMPIlmyrcA65814aJYivX1jdxbjfKJx7yOYQ4hU8erygifpNO0XolPEiSVNw6TEIZ7zhMB8btzhZB9zEG7GRDMqp7VpqfEf3UggkZV1qRPcoLDrdsXR91vVFb61dwEEKsrDr1Xk57PuNDBb2xRMMKMdBch38EgzzzI9iyM9nVZpF2qtNGtC3qMzzX5GATRnbu%2Fi%2BONvtGQXsQfa3EF79ZiMBd6YBWa1XUwIaCj1CnaC90XrwBem4HVCViG7jFzAbGbCX29J%2FmbPbxpCU2jtP9UDUsey%2B64nrLpEZeJFmeJwvR1bGsbKdefVad%2BzH29rGBjrk6v22CosCBlZQRIdJlpezbgZH6rVZ%2FghrJEJR4Sxmoo3ONc5nZ7jBjHf3pB2BvGuOGgMyQ4jh0xihQUHXtdNZdnk2HpkmlUEYggGjzfskqD8tKkGs%2BYhYOg6%2B6U6lyjPNe4tyi6PEhr5WaoaYI3dbj2akpkM2ej%2B6NbycXRwc5SnOfFiHGQuN7GFpjhU8ZV0wH0%2BKFajhw1l%2FyEgOis7h2qALx9Y33noVBf%2BSMunQ2TRhtNdTre1DCD8UtB6RT3DePrswSs%2BIlkY%2FvVnDqiY1Z%2BZyiQ3nSfX5xr6nLPc7JjBmkl%2BJks1UuUDKcupk7M9jiMJ2egsUGOqUBEAgAqUGma0tKK2VSkGVtfQVKwKSySTbtnVc0XICb8Qn1hzKO77ww8phkkmEDotb7Tpx7r65yi3Uaq2SyFMvm%2FuFrRhzGk0RjzjQ5hDN%2FgLhXpt%2FrZVSbiKQXgCWQGqdtIPXFpUGixO2uGoi4c6GrOLstnLWGQvYHl4CnrVNDIqiHJCr5l5i%2BBK7GMGiI5yCe3SY14rTz28zVmjRsDVcTgRtac8Wl&X-Amz-Signature=081740611d45939b114029d32d8d6d8ae5e3ad635ce703b2909cbfc42df90f3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKDNKZMY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDT%2F1bzVZ4nr7Rkyl6kGr6WbwfzhWOwD%2BfBJIPvCya0awIhAIG3%2Bb8EPtlhEuVFVDxBPHW1PHPUBiH50EJEbVP8%2BLteKv8DCHcQABoMNjM3NDIzMTgzODA1IgwwdFVpP%2BO1OaRuWuMq3AP24OZCw6GMsLhlABauB1XN56s7mJFwmdw9W5yKVMFpYI1kwXPPlJPEfOSWMWmXwW1AhRfN58%2F74sVExVVQ85uAv8krGtXodCjW0ipz9YvoiUH9Jc5IShYO2jyuJEW%2FE%2FIiZC8dHM1muq%2B5LhuyrnN9Lt7o8TYgYCEyrGyQMIfANOqJydNpurAHKW%2FoVxODdJ%2B4%2BNb97t2mgfgC6INMWPg5X5iESTP7SSsvz4BqyGSbkVRFuHf0vEbvf1K0aV80BxQOpbhhBtWpjQjW2hzvjigiZ2B%2BedhnYjMQfLABVQAn8Vol%2B%2FJf03cvj5yNgVdxukPRe85b0wsh6u252jPOj8r7wLPN2LI4atC6if8vSbjc1lK%2BhuUAvIfF%2BUtctUhl7b6UG%2FkzA6HAQHseglnmlWL3V41ucWtfsne2U5SDvgoxgDoptlSRqX9%2FlYByUFGXi8Qhq0%2FyD7JfDbEgWUKCjBxWGDb0wSiJR5xUDfnTtrNKRGmV0nZQoIafYab46AoDyJ281YS3MyNUlmSoRrgjigi4q0hmr%2BaClNkI%2BhcFwppzk6mHBfa95qG592DEmorAbCA5O9Vj8jJ%2BgWRChgQLyi76kFI54842483eV0haisNEYejyUk9sFhvqeA2OnzDlm4LFBjqkAW444qqgmuTkt%2F%2BmaNDNjdcyxvH8VAa3wZOWKHfX65Zfj%2BVcdBhPjM0HrpswaQTxtAR9KSi4y0fLOECnj7OzzboJ63KIt%2FoqwifKAJLV9QWP8PeFnTbuj%2B4hzuWCRep%2BYIDk6YRWw5JoZhJ%2BkE3ZsM9GGEGZvnj5vfwJNSKCSxAWSBLnr5Ip%2BwttyLiU36hRouatGTIoIlys3O%2FdjpUAu%2B3HHSN2&X-Amz-Signature=46e9a3180f4d369f49f23c7d76c64bcc81f87f635f3c3f6cfdbc854dd776779b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624TACLTY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIFb1EMoj9XT7SxPeEOEcdOOpowcr2wVErIbyalQFh0HSAiA%2BAJYENR7X1jBFm6ztlR0G%2Be%2FdcHqPG79mbQQj%2FLo7wSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMhgHbvx6CNuOQYsGYKtwDeeRF%2F5%2FBA5NzLmzF%2BrmWfpmJdcsIXkuIC%2BLzngTEwmZZlko7i7WISb3lncPQnxmi12S3sihRQt%2F65ddJ0aSv9FpuzGcj41F3WWTaRF65IHmO7aMsJkts5qXeB0eUxApwnLLb6gqUiqwebj59SOuSMSIGhffN3RA1unb8aV6v%2FVYzKK15xPmIyeHhDYshxyFGeDBp%2BQA%2FSNCi4GOrpcUF3lYQwt1mRB3D9OqbMmaB9zjfrCMsyvtXSsuIq0LBKlZ%2F%2BWTtjFQ0yZ4HV9ZB5qnFtWFxEprroxJppR8gdRGM2wI5H0Bs0f3%2FM6envsV92R0O4DzZDXdiRxxAkYGAJBnyuqqzHWCvKzeBt1Qb0p7I24P2umkLlTTxonXoQgGS2Vzd9qC0cfjAFzHrQTsTbttpVsCR804thM%2FHEcFyP%2F0fc%2FAhKHi%2FatGvC%2ByEtbHBXNcUsiXVfSEL4xPpSim%2BQ4S9ioKnKzX%2BNOKFhxxsWRZ%2Ff4Sr1AdRTg8zsdQRJn1uiNh9DdsGTaYGx8gERlYabVcSZUFJtnxb65GgmerI15J6cQCs9p6TImVKCCPU7VRT9lnq7XIqRlg8oDR2FT%2BEc17HjG01C2E8fIbxL1YsgxVfaS6URRdR1VM8r8MwXFwwt5KCxQY6pgFXyLlJfLWNd0E9HnxlFAXuj0KpGG75x%2Bqss0KCXpjC%2BjHhlGc8KE5vwKz66vB3IPLvoffgg7iMw1wyFYD0PLS19yCA6NToMop%2BR02KmARiAzUpgdioK2cM56JefhiqhI2j7CbLw%2FZn8p0coBoIg5wkmBgWYdA9BRVF0BdCCx6HmOMoO8FCiwLcMcytYxBEfqYZ4XhJ5eJqhEUgJmKhSA2IMFweX5RD&X-Amz-Signature=950eaed78b2c14abaeacd80ee69e97dde65aca72ec173ed71f3ec32bae01a759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSVIFAH5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBfOzbkbfeALeOTyBlxnQ2Q6aEdi0TVigS5KwruYsFwNAiAAnOrwh4kLjBrwuWWmKz3AhR7v7CTvhLSKdkTn%2FogdxSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM1325w8A%2FEm%2B3AZqIKtwD8tUoUkouM0aMFxCbxQK1%2FufKlvFhKtzIPVkWg%2BUfctOr0fpr%2BGXnlRZHmGp6BgRBLGJ64wxFuANrJDUFWh7Y8Fy%2FDVNa5hzOAoqh65ARcnGMva0jLlTLqL1FIwRKqeJx4Vsi3brj2MJnispCYuNv%2FF6y28gwojin45eThCZMUZMIYg3kUGsnMHIn%2FtX2an6LnX0G%2BZyyhwGNxdnez5wVdj6dsI0mjqFC7%2BjZ4xiUcfMC9vN%2F9du69fcRfkF6%2BrcVvoyRBzEICw8COLwldEeS%2BMp2SLMJ7S2gUZtZM0eXjPStQD7az2GnvqIA5gwz2dhslEqOL7ssFXmP5hDzpTu7qKZepo5v81hECNGyvTeP7Z7B%2B0KeUSQxztK0cjhfRgMhT4pAnlGd4h8hy7eX9YtTnKtXH%2Fvg5FEu3y2WfziS2OLY8riNJceytSCsrNkOnfR2y2m5zg8J4vV%2FwYOXSpl%2BSH41iIn4BfaEGm26eilTlmJgXR2etcKdA7uoGbeJA3VeXiS08W%2BcUpERR0IJP5HKuaXKi5%2FoWXuR1VeHRi9FZyXh7lD6VHZmblg6s2PlLUkfEs6IeGEewvSSI2XwxJF6d33ka54E%2Fbu8NLevd8UDRSBYs0xVuQ1HTkrRm5cwzpOCxQY6pgF9M8CNGxUqjKDVZcRYx93ZbT4Ayup035iFScslJqZx6F0iXN9b9%2Ftq8%2F%2FLTfz4PYPFOjIZuvTewz6bvdLDL5Rym3LKbEA%2BVaLY7PFSaZrxdqT0aQOsaATkcDKL%2BTHLsdLKSPux0GwGKmZf9xFBVIR5OyFlRRhZen7%2BnBgsLUkeMadBelCmXPisDhTzgXFH9d6OUKUMg0z1GZIUz9jrdyavb2eNRCE%2F&X-Amz-Signature=4a8518a2d7286a82cbd45d426b58d3ae6cf1fd32c6375e44d83d766ea9184066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P3FUVUY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGsQMuWGOGeFa8GgPHgKekhYWWAPdtQVq9AECwCY4V3RAiBXGLjc8OE2jFVt9GyOvcS4VkQ2zypoCAP6p6KYMliZ7yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMKXmu22GtoXTK%2BTbtKtwD0AdtedADlfaD6ZyScLgNYC8QKHwG99ut35V4KZTaOQTroM%2BUdRVKNNCsqy6y1cijFNn5jk7vakQzMHhGyXPIDadagPFqhPGO3IN8eCWXWUscXBwRDTR%2BI%2FYSyPP%2BOijVC4IfwXWoREAzj45cdo2bSOeBZY3ZZiUTQD6C4He8669o3ONqfNkvC0gxrvbj1niMAp7LhtKB0Dlop09jhxpoyBLq%2FEWCzh3KPwphk73ln7V5vvi%2FwyVvOpiJWQCR3mRWfiZ106fezF6q3RZrSpC3F4bVH6pMn6eqlZr7899r5jI7Lbw5u0yNQNP%2B8w7UNfEgVdZJ%2FSSgNTWMzgWjOxbzmy1PIIDPcWkuSCAcI6dJ7P9CxEd5AW2phnh%2FQBqXE4Hx7jQ2EDUdv0GzL9UcyaLwf7vrKEBW2lwSq06k8%2BOHshrMOKVpc7oywHmqqO72%2BsD2J1nn%2Bt8NrvITzGACyZSr%2BF8dD38twBNJemWvWh4kUzEk3RPCKHIr%2FNLz9SrZWx2nB8Enls6XVXAEfXDEc6k06Oj0vLXqqplNPstjdmCcc9X9utMsuXN8prdADeJTQJaS5Szuh0BQVgYC2dx454o6PI17EXxDaY2r0ORUkVq7QcDvlqIO3JDMQgKbRVAwhZyCxQY6pgEaXUola3WJ8wa7ctrIqvrWsxLmw6IBKQEA8NqPK5Gpad0lLy6uaIvYneO6LI00sAtsRs8gjU2tA%2FC0uG2EM1KlEdl0JNfpZpnbpduTY6YtI9swBak%2F8Ew6tezdJrNPghsvxl5LyCXBHRkwfqR%2Bp9IALCVdFY7%2FfkXjMSLnq5MEHUCYL8rj%2BPEfF98U8VLSXmF19wS6qiCpDDSRSK9JpGwtTm1dpsDn&X-Amz-Signature=5b97b61eefcd64284176b867192eaecd11c39890133ce6fef7a7715c5a7385a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P3FUVUY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGsQMuWGOGeFa8GgPHgKekhYWWAPdtQVq9AECwCY4V3RAiBXGLjc8OE2jFVt9GyOvcS4VkQ2zypoCAP6p6KYMliZ7yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMKXmu22GtoXTK%2BTbtKtwD0AdtedADlfaD6ZyScLgNYC8QKHwG99ut35V4KZTaOQTroM%2BUdRVKNNCsqy6y1cijFNn5jk7vakQzMHhGyXPIDadagPFqhPGO3IN8eCWXWUscXBwRDTR%2BI%2FYSyPP%2BOijVC4IfwXWoREAzj45cdo2bSOeBZY3ZZiUTQD6C4He8669o3ONqfNkvC0gxrvbj1niMAp7LhtKB0Dlop09jhxpoyBLq%2FEWCzh3KPwphk73ln7V5vvi%2FwyVvOpiJWQCR3mRWfiZ106fezF6q3RZrSpC3F4bVH6pMn6eqlZr7899r5jI7Lbw5u0yNQNP%2B8w7UNfEgVdZJ%2FSSgNTWMzgWjOxbzmy1PIIDPcWkuSCAcI6dJ7P9CxEd5AW2phnh%2FQBqXE4Hx7jQ2EDUdv0GzL9UcyaLwf7vrKEBW2lwSq06k8%2BOHshrMOKVpc7oywHmqqO72%2BsD2J1nn%2Bt8NrvITzGACyZSr%2BF8dD38twBNJemWvWh4kUzEk3RPCKHIr%2FNLz9SrZWx2nB8Enls6XVXAEfXDEc6k06Oj0vLXqqplNPstjdmCcc9X9utMsuXN8prdADeJTQJaS5Szuh0BQVgYC2dx454o6PI17EXxDaY2r0ORUkVq7QcDvlqIO3JDMQgKbRVAwhZyCxQY6pgEaXUola3WJ8wa7ctrIqvrWsxLmw6IBKQEA8NqPK5Gpad0lLy6uaIvYneO6LI00sAtsRs8gjU2tA%2FC0uG2EM1KlEdl0JNfpZpnbpduTY6YtI9swBak%2F8Ew6tezdJrNPghsvxl5LyCXBHRkwfqR%2Bp9IALCVdFY7%2FfkXjMSLnq5MEHUCYL8rj%2BPEfF98U8VLSXmF19wS6qiCpDDSRSK9JpGwtTm1dpsDn&X-Amz-Signature=785667448f3d4287e973588f83bafea1614c1ca5d2e16e2a948d5eb2eef40ca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AJVLW2S%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAx46P1sOjORYjB4lwpp7NL%2Bk9PrDG4PPPggrihax8dQAiAlD8shgM6%2F9vpJaro6S%2Bmui9E3Nk4B08GagIV2m1GP8ir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMLUTyB3rJKVhZE40AKtwDe6Y2%2BrhLedQ%2FmwhqOXV%2BP3yA0R%2FaJT%2FMHg1%2BmXt9adD3gjzktaHpH8ZGEGH8hCQ0fwt8eVnQ%2BfdL%2BL0OjirhrwIcslAkOPxbj9u7o9SU95GPnJuJo4TA2IJyXq2Re3OH0izFj7iaeduV1admy7bSTZZQ85AjHc6dv6qfDRPNsYanp7MhJ76mabo79AvN4P0hYOlxW4SvlvkqMM5zg5lT4rHM4ngAl27Id5%2B7s4%2BNuACVHCxaMlBRV3SGSeCmJAbHpLE46ymAA%2FCCeIhCSY8OI6yuql%2FBWeXWbgXuASfbBk%2BD3GkpnDxsou8woNUp8jVNHI77sRbYHDF2iYr6uA48wDEXopZPoA9RiPOVkDTro9zjHV8qVTkdwJWXuiV2QmAlMcPmSUUHsDiwQwHfLaatMCGmzDe29XanD2QueYbvA8WYWKWaUCCLZtK50dDdw%2FfC1%2FKd1%2BqZBjbZyAFaelFnzRjz5D%2FibL%2FK1P8MVrdNc1X4Ctod3v2QbGrV6lTmoH1Qp%2BuHnLa6RN24%2BjTCAAyDliXLMahB93aMS%2Bkh2%2FSDRa0xqqnzjP9%2FMMuNr2JzFD0fH0FyJ4uFDSsU6tMlgCr1WbQaqohXakQaFl7sUCjVZpDwkcVjZ%2FAIegHifoAwnZSCxQY6pgG3qShUWKXbVoOlqjrAyhJPpD28yFju7ImFpV2cw80kOZRJGIMhgOTP%2FkoOQ9dmJdoy2uV92Wxl1TVytcWhOsyJ5Vjpp89cAxMEZ1UXLeF%2FId4jq4b8KnNeqA4usestM6Rg6ndX5DcYgBMPrhWIicLNg6elzamgbWOjdECj47a2rm6NTDTFYBKaD0SL3eF1XuTfYqJMn5S%2FFO5kNqXyJLfFjlbfz6wU&X-Amz-Signature=4f9d3db8b3934425ffbce5317a53aff637ae2d9bc3a7595cd8edd44c49a6c155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AJVLW2S%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAx46P1sOjORYjB4lwpp7NL%2Bk9PrDG4PPPggrihax8dQAiAlD8shgM6%2F9vpJaro6S%2Bmui9E3Nk4B08GagIV2m1GP8ir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMLUTyB3rJKVhZE40AKtwDe6Y2%2BrhLedQ%2FmwhqOXV%2BP3yA0R%2FaJT%2FMHg1%2BmXt9adD3gjzktaHpH8ZGEGH8hCQ0fwt8eVnQ%2BfdL%2BL0OjirhrwIcslAkOPxbj9u7o9SU95GPnJuJo4TA2IJyXq2Re3OH0izFj7iaeduV1admy7bSTZZQ85AjHc6dv6qfDRPNsYanp7MhJ76mabo79AvN4P0hYOlxW4SvlvkqMM5zg5lT4rHM4ngAl27Id5%2B7s4%2BNuACVHCxaMlBRV3SGSeCmJAbHpLE46ymAA%2FCCeIhCSY8OI6yuql%2FBWeXWbgXuASfbBk%2BD3GkpnDxsou8woNUp8jVNHI77sRbYHDF2iYr6uA48wDEXopZPoA9RiPOVkDTro9zjHV8qVTkdwJWXuiV2QmAlMcPmSUUHsDiwQwHfLaatMCGmzDe29XanD2QueYbvA8WYWKWaUCCLZtK50dDdw%2FfC1%2FKd1%2BqZBjbZyAFaelFnzRjz5D%2FibL%2FK1P8MVrdNc1X4Ctod3v2QbGrV6lTmoH1Qp%2BuHnLa6RN24%2BjTCAAyDliXLMahB93aMS%2Bkh2%2FSDRa0xqqnzjP9%2FMMuNr2JzFD0fH0FyJ4uFDSsU6tMlgCr1WbQaqohXakQaFl7sUCjVZpDwkcVjZ%2FAIegHifoAwnZSCxQY6pgG3qShUWKXbVoOlqjrAyhJPpD28yFju7ImFpV2cw80kOZRJGIMhgOTP%2FkoOQ9dmJdoy2uV92Wxl1TVytcWhOsyJ5Vjpp89cAxMEZ1UXLeF%2FId4jq4b8KnNeqA4usestM6Rg6ndX5DcYgBMPrhWIicLNg6elzamgbWOjdECj47a2rm6NTDTFYBKaD0SL3eF1XuTfYqJMn5S%2FFO5kNqXyJLfFjlbfz6wU&X-Amz-Signature=8b0a8c1a81f190b9f23d3bf37097dfc257bad1e9bddd5d52f9ea9b9a508aaa97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AJVLW2S%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAx46P1sOjORYjB4lwpp7NL%2Bk9PrDG4PPPggrihax8dQAiAlD8shgM6%2F9vpJaro6S%2Bmui9E3Nk4B08GagIV2m1GP8ir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMLUTyB3rJKVhZE40AKtwDe6Y2%2BrhLedQ%2FmwhqOXV%2BP3yA0R%2FaJT%2FMHg1%2BmXt9adD3gjzktaHpH8ZGEGH8hCQ0fwt8eVnQ%2BfdL%2BL0OjirhrwIcslAkOPxbj9u7o9SU95GPnJuJo4TA2IJyXq2Re3OH0izFj7iaeduV1admy7bSTZZQ85AjHc6dv6qfDRPNsYanp7MhJ76mabo79AvN4P0hYOlxW4SvlvkqMM5zg5lT4rHM4ngAl27Id5%2B7s4%2BNuACVHCxaMlBRV3SGSeCmJAbHpLE46ymAA%2FCCeIhCSY8OI6yuql%2FBWeXWbgXuASfbBk%2BD3GkpnDxsou8woNUp8jVNHI77sRbYHDF2iYr6uA48wDEXopZPoA9RiPOVkDTro9zjHV8qVTkdwJWXuiV2QmAlMcPmSUUHsDiwQwHfLaatMCGmzDe29XanD2QueYbvA8WYWKWaUCCLZtK50dDdw%2FfC1%2FKd1%2BqZBjbZyAFaelFnzRjz5D%2FibL%2FK1P8MVrdNc1X4Ctod3v2QbGrV6lTmoH1Qp%2BuHnLa6RN24%2BjTCAAyDliXLMahB93aMS%2Bkh2%2FSDRa0xqqnzjP9%2FMMuNr2JzFD0fH0FyJ4uFDSsU6tMlgCr1WbQaqohXakQaFl7sUCjVZpDwkcVjZ%2FAIegHifoAwnZSCxQY6pgG3qShUWKXbVoOlqjrAyhJPpD28yFju7ImFpV2cw80kOZRJGIMhgOTP%2FkoOQ9dmJdoy2uV92Wxl1TVytcWhOsyJ5Vjpp89cAxMEZ1UXLeF%2FId4jq4b8KnNeqA4usestM6Rg6ndX5DcYgBMPrhWIicLNg6elzamgbWOjdECj47a2rm6NTDTFYBKaD0SL3eF1XuTfYqJMn5S%2FFO5kNqXyJLfFjlbfz6wU&X-Amz-Signature=aa6f52ee5c5414296fb91394b8f56a8e4cb03ccc7fa14d07b482f79d3b0c954f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AJVLW2S%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAx46P1sOjORYjB4lwpp7NL%2Bk9PrDG4PPPggrihax8dQAiAlD8shgM6%2F9vpJaro6S%2Bmui9E3Nk4B08GagIV2m1GP8ir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMLUTyB3rJKVhZE40AKtwDe6Y2%2BrhLedQ%2FmwhqOXV%2BP3yA0R%2FaJT%2FMHg1%2BmXt9adD3gjzktaHpH8ZGEGH8hCQ0fwt8eVnQ%2BfdL%2BL0OjirhrwIcslAkOPxbj9u7o9SU95GPnJuJo4TA2IJyXq2Re3OH0izFj7iaeduV1admy7bSTZZQ85AjHc6dv6qfDRPNsYanp7MhJ76mabo79AvN4P0hYOlxW4SvlvkqMM5zg5lT4rHM4ngAl27Id5%2B7s4%2BNuACVHCxaMlBRV3SGSeCmJAbHpLE46ymAA%2FCCeIhCSY8OI6yuql%2FBWeXWbgXuASfbBk%2BD3GkpnDxsou8woNUp8jVNHI77sRbYHDF2iYr6uA48wDEXopZPoA9RiPOVkDTro9zjHV8qVTkdwJWXuiV2QmAlMcPmSUUHsDiwQwHfLaatMCGmzDe29XanD2QueYbvA8WYWKWaUCCLZtK50dDdw%2FfC1%2FKd1%2BqZBjbZyAFaelFnzRjz5D%2FibL%2FK1P8MVrdNc1X4Ctod3v2QbGrV6lTmoH1Qp%2BuHnLa6RN24%2BjTCAAyDliXLMahB93aMS%2Bkh2%2FSDRa0xqqnzjP9%2FMMuNr2JzFD0fH0FyJ4uFDSsU6tMlgCr1WbQaqohXakQaFl7sUCjVZpDwkcVjZ%2FAIegHifoAwnZSCxQY6pgG3qShUWKXbVoOlqjrAyhJPpD28yFju7ImFpV2cw80kOZRJGIMhgOTP%2FkoOQ9dmJdoy2uV92Wxl1TVytcWhOsyJ5Vjpp89cAxMEZ1UXLeF%2FId4jq4b8KnNeqA4usestM6Rg6ndX5DcYgBMPrhWIicLNg6elzamgbWOjdECj47a2rm6NTDTFYBKaD0SL3eF1XuTfYqJMn5S%2FFO5kNqXyJLfFjlbfz6wU&X-Amz-Signature=5899fbf248aa2e7f24ecd20ae5a14b3cd72d31a0ec38141d741a50548a12444e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AJVLW2S%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAx46P1sOjORYjB4lwpp7NL%2Bk9PrDG4PPPggrihax8dQAiAlD8shgM6%2F9vpJaro6S%2Bmui9E3Nk4B08GagIV2m1GP8ir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMLUTyB3rJKVhZE40AKtwDe6Y2%2BrhLedQ%2FmwhqOXV%2BP3yA0R%2FaJT%2FMHg1%2BmXt9adD3gjzktaHpH8ZGEGH8hCQ0fwt8eVnQ%2BfdL%2BL0OjirhrwIcslAkOPxbj9u7o9SU95GPnJuJo4TA2IJyXq2Re3OH0izFj7iaeduV1admy7bSTZZQ85AjHc6dv6qfDRPNsYanp7MhJ76mabo79AvN4P0hYOlxW4SvlvkqMM5zg5lT4rHM4ngAl27Id5%2B7s4%2BNuACVHCxaMlBRV3SGSeCmJAbHpLE46ymAA%2FCCeIhCSY8OI6yuql%2FBWeXWbgXuASfbBk%2BD3GkpnDxsou8woNUp8jVNHI77sRbYHDF2iYr6uA48wDEXopZPoA9RiPOVkDTro9zjHV8qVTkdwJWXuiV2QmAlMcPmSUUHsDiwQwHfLaatMCGmzDe29XanD2QueYbvA8WYWKWaUCCLZtK50dDdw%2FfC1%2FKd1%2BqZBjbZyAFaelFnzRjz5D%2FibL%2FK1P8MVrdNc1X4Ctod3v2QbGrV6lTmoH1Qp%2BuHnLa6RN24%2BjTCAAyDliXLMahB93aMS%2Bkh2%2FSDRa0xqqnzjP9%2FMMuNr2JzFD0fH0FyJ4uFDSsU6tMlgCr1WbQaqohXakQaFl7sUCjVZpDwkcVjZ%2FAIegHifoAwnZSCxQY6pgG3qShUWKXbVoOlqjrAyhJPpD28yFju7ImFpV2cw80kOZRJGIMhgOTP%2FkoOQ9dmJdoy2uV92Wxl1TVytcWhOsyJ5Vjpp89cAxMEZ1UXLeF%2FId4jq4b8KnNeqA4usestM6Rg6ndX5DcYgBMPrhWIicLNg6elzamgbWOjdECj47a2rm6NTDTFYBKaD0SL3eF1XuTfYqJMn5S%2FFO5kNqXyJLfFjlbfz6wU&X-Amz-Signature=1fa0c7e11dfce0241fa6f2962640006338401fd46c62821cf409000964f907b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AJVLW2S%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAx46P1sOjORYjB4lwpp7NL%2Bk9PrDG4PPPggrihax8dQAiAlD8shgM6%2F9vpJaro6S%2Bmui9E3Nk4B08GagIV2m1GP8ir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMLUTyB3rJKVhZE40AKtwDe6Y2%2BrhLedQ%2FmwhqOXV%2BP3yA0R%2FaJT%2FMHg1%2BmXt9adD3gjzktaHpH8ZGEGH8hCQ0fwt8eVnQ%2BfdL%2BL0OjirhrwIcslAkOPxbj9u7o9SU95GPnJuJo4TA2IJyXq2Re3OH0izFj7iaeduV1admy7bSTZZQ85AjHc6dv6qfDRPNsYanp7MhJ76mabo79AvN4P0hYOlxW4SvlvkqMM5zg5lT4rHM4ngAl27Id5%2B7s4%2BNuACVHCxaMlBRV3SGSeCmJAbHpLE46ymAA%2FCCeIhCSY8OI6yuql%2FBWeXWbgXuASfbBk%2BD3GkpnDxsou8woNUp8jVNHI77sRbYHDF2iYr6uA48wDEXopZPoA9RiPOVkDTro9zjHV8qVTkdwJWXuiV2QmAlMcPmSUUHsDiwQwHfLaatMCGmzDe29XanD2QueYbvA8WYWKWaUCCLZtK50dDdw%2FfC1%2FKd1%2BqZBjbZyAFaelFnzRjz5D%2FibL%2FK1P8MVrdNc1X4Ctod3v2QbGrV6lTmoH1Qp%2BuHnLa6RN24%2BjTCAAyDliXLMahB93aMS%2Bkh2%2FSDRa0xqqnzjP9%2FMMuNr2JzFD0fH0FyJ4uFDSsU6tMlgCr1WbQaqohXakQaFl7sUCjVZpDwkcVjZ%2FAIegHifoAwnZSCxQY6pgG3qShUWKXbVoOlqjrAyhJPpD28yFju7ImFpV2cw80kOZRJGIMhgOTP%2FkoOQ9dmJdoy2uV92Wxl1TVytcWhOsyJ5Vjpp89cAxMEZ1UXLeF%2FId4jq4b8KnNeqA4usestM6Rg6ndX5DcYgBMPrhWIicLNg6elzamgbWOjdECj47a2rm6NTDTFYBKaD0SL3eF1XuTfYqJMn5S%2FFO5kNqXyJLfFjlbfz6wU&X-Amz-Signature=3fbcf105bd1bb6f7a909c13edb77d3497ee6782c9f0b9135fadc7ecb86f4e8d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AJVLW2S%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAx46P1sOjORYjB4lwpp7NL%2Bk9PrDG4PPPggrihax8dQAiAlD8shgM6%2F9vpJaro6S%2Bmui9E3Nk4B08GagIV2m1GP8ir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMLUTyB3rJKVhZE40AKtwDe6Y2%2BrhLedQ%2FmwhqOXV%2BP3yA0R%2FaJT%2FMHg1%2BmXt9adD3gjzktaHpH8ZGEGH8hCQ0fwt8eVnQ%2BfdL%2BL0OjirhrwIcslAkOPxbj9u7o9SU95GPnJuJo4TA2IJyXq2Re3OH0izFj7iaeduV1admy7bSTZZQ85AjHc6dv6qfDRPNsYanp7MhJ76mabo79AvN4P0hYOlxW4SvlvkqMM5zg5lT4rHM4ngAl27Id5%2B7s4%2BNuACVHCxaMlBRV3SGSeCmJAbHpLE46ymAA%2FCCeIhCSY8OI6yuql%2FBWeXWbgXuASfbBk%2BD3GkpnDxsou8woNUp8jVNHI77sRbYHDF2iYr6uA48wDEXopZPoA9RiPOVkDTro9zjHV8qVTkdwJWXuiV2QmAlMcPmSUUHsDiwQwHfLaatMCGmzDe29XanD2QueYbvA8WYWKWaUCCLZtK50dDdw%2FfC1%2FKd1%2BqZBjbZyAFaelFnzRjz5D%2FibL%2FK1P8MVrdNc1X4Ctod3v2QbGrV6lTmoH1Qp%2BuHnLa6RN24%2BjTCAAyDliXLMahB93aMS%2Bkh2%2FSDRa0xqqnzjP9%2FMMuNr2JzFD0fH0FyJ4uFDSsU6tMlgCr1WbQaqohXakQaFl7sUCjVZpDwkcVjZ%2FAIegHifoAwnZSCxQY6pgG3qShUWKXbVoOlqjrAyhJPpD28yFju7ImFpV2cw80kOZRJGIMhgOTP%2FkoOQ9dmJdoy2uV92Wxl1TVytcWhOsyJ5Vjpp89cAxMEZ1UXLeF%2FId4jq4b8KnNeqA4usestM6Rg6ndX5DcYgBMPrhWIicLNg6elzamgbWOjdECj47a2rm6NTDTFYBKaD0SL3eF1XuTfYqJMn5S%2FFO5kNqXyJLfFjlbfz6wU&X-Amz-Signature=d664699f0141d96deeffa972c47375ee44f4081f60d69398d01b7904292cca8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AJVLW2S%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAx46P1sOjORYjB4lwpp7NL%2Bk9PrDG4PPPggrihax8dQAiAlD8shgM6%2F9vpJaro6S%2Bmui9E3Nk4B08GagIV2m1GP8ir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMLUTyB3rJKVhZE40AKtwDe6Y2%2BrhLedQ%2FmwhqOXV%2BP3yA0R%2FaJT%2FMHg1%2BmXt9adD3gjzktaHpH8ZGEGH8hCQ0fwt8eVnQ%2BfdL%2BL0OjirhrwIcslAkOPxbj9u7o9SU95GPnJuJo4TA2IJyXq2Re3OH0izFj7iaeduV1admy7bSTZZQ85AjHc6dv6qfDRPNsYanp7MhJ76mabo79AvN4P0hYOlxW4SvlvkqMM5zg5lT4rHM4ngAl27Id5%2B7s4%2BNuACVHCxaMlBRV3SGSeCmJAbHpLE46ymAA%2FCCeIhCSY8OI6yuql%2FBWeXWbgXuASfbBk%2BD3GkpnDxsou8woNUp8jVNHI77sRbYHDF2iYr6uA48wDEXopZPoA9RiPOVkDTro9zjHV8qVTkdwJWXuiV2QmAlMcPmSUUHsDiwQwHfLaatMCGmzDe29XanD2QueYbvA8WYWKWaUCCLZtK50dDdw%2FfC1%2FKd1%2BqZBjbZyAFaelFnzRjz5D%2FibL%2FK1P8MVrdNc1X4Ctod3v2QbGrV6lTmoH1Qp%2BuHnLa6RN24%2BjTCAAyDliXLMahB93aMS%2Bkh2%2FSDRa0xqqnzjP9%2FMMuNr2JzFD0fH0FyJ4uFDSsU6tMlgCr1WbQaqohXakQaFl7sUCjVZpDwkcVjZ%2FAIegHifoAwnZSCxQY6pgG3qShUWKXbVoOlqjrAyhJPpD28yFju7ImFpV2cw80kOZRJGIMhgOTP%2FkoOQ9dmJdoy2uV92Wxl1TVytcWhOsyJ5Vjpp89cAxMEZ1UXLeF%2FId4jq4b8KnNeqA4usestM6Rg6ndX5DcYgBMPrhWIicLNg6elzamgbWOjdECj47a2rm6NTDTFYBKaD0SL3eF1XuTfYqJMn5S%2FFO5kNqXyJLfFjlbfz6wU&X-Amz-Signature=8f51cfebbc26291457a2624159b58e377f0d873188e490ba5c0fa61ef4f6ddfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AJVLW2S%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAx46P1sOjORYjB4lwpp7NL%2Bk9PrDG4PPPggrihax8dQAiAlD8shgM6%2F9vpJaro6S%2Bmui9E3Nk4B08GagIV2m1GP8ir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMLUTyB3rJKVhZE40AKtwDe6Y2%2BrhLedQ%2FmwhqOXV%2BP3yA0R%2FaJT%2FMHg1%2BmXt9adD3gjzktaHpH8ZGEGH8hCQ0fwt8eVnQ%2BfdL%2BL0OjirhrwIcslAkOPxbj9u7o9SU95GPnJuJo4TA2IJyXq2Re3OH0izFj7iaeduV1admy7bSTZZQ85AjHc6dv6qfDRPNsYanp7MhJ76mabo79AvN4P0hYOlxW4SvlvkqMM5zg5lT4rHM4ngAl27Id5%2B7s4%2BNuACVHCxaMlBRV3SGSeCmJAbHpLE46ymAA%2FCCeIhCSY8OI6yuql%2FBWeXWbgXuASfbBk%2BD3GkpnDxsou8woNUp8jVNHI77sRbYHDF2iYr6uA48wDEXopZPoA9RiPOVkDTro9zjHV8qVTkdwJWXuiV2QmAlMcPmSUUHsDiwQwHfLaatMCGmzDe29XanD2QueYbvA8WYWKWaUCCLZtK50dDdw%2FfC1%2FKd1%2BqZBjbZyAFaelFnzRjz5D%2FibL%2FK1P8MVrdNc1X4Ctod3v2QbGrV6lTmoH1Qp%2BuHnLa6RN24%2BjTCAAyDliXLMahB93aMS%2Bkh2%2FSDRa0xqqnzjP9%2FMMuNr2JzFD0fH0FyJ4uFDSsU6tMlgCr1WbQaqohXakQaFl7sUCjVZpDwkcVjZ%2FAIegHifoAwnZSCxQY6pgG3qShUWKXbVoOlqjrAyhJPpD28yFju7ImFpV2cw80kOZRJGIMhgOTP%2FkoOQ9dmJdoy2uV92Wxl1TVytcWhOsyJ5Vjpp89cAxMEZ1UXLeF%2FId4jq4b8KnNeqA4usestM6Rg6ndX5DcYgBMPrhWIicLNg6elzamgbWOjdECj47a2rm6NTDTFYBKaD0SL3eF1XuTfYqJMn5S%2FFO5kNqXyJLfFjlbfz6wU&X-Amz-Signature=6b27c0eb8eab82b70617d183e92cb603622fc83fd6d1e50c41be36cdc997dc49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AJVLW2S%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAx46P1sOjORYjB4lwpp7NL%2Bk9PrDG4PPPggrihax8dQAiAlD8shgM6%2F9vpJaro6S%2Bmui9E3Nk4B08GagIV2m1GP8ir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMLUTyB3rJKVhZE40AKtwDe6Y2%2BrhLedQ%2FmwhqOXV%2BP3yA0R%2FaJT%2FMHg1%2BmXt9adD3gjzktaHpH8ZGEGH8hCQ0fwt8eVnQ%2BfdL%2BL0OjirhrwIcslAkOPxbj9u7o9SU95GPnJuJo4TA2IJyXq2Re3OH0izFj7iaeduV1admy7bSTZZQ85AjHc6dv6qfDRPNsYanp7MhJ76mabo79AvN4P0hYOlxW4SvlvkqMM5zg5lT4rHM4ngAl27Id5%2B7s4%2BNuACVHCxaMlBRV3SGSeCmJAbHpLE46ymAA%2FCCeIhCSY8OI6yuql%2FBWeXWbgXuASfbBk%2BD3GkpnDxsou8woNUp8jVNHI77sRbYHDF2iYr6uA48wDEXopZPoA9RiPOVkDTro9zjHV8qVTkdwJWXuiV2QmAlMcPmSUUHsDiwQwHfLaatMCGmzDe29XanD2QueYbvA8WYWKWaUCCLZtK50dDdw%2FfC1%2FKd1%2BqZBjbZyAFaelFnzRjz5D%2FibL%2FK1P8MVrdNc1X4Ctod3v2QbGrV6lTmoH1Qp%2BuHnLa6RN24%2BjTCAAyDliXLMahB93aMS%2Bkh2%2FSDRa0xqqnzjP9%2FMMuNr2JzFD0fH0FyJ4uFDSsU6tMlgCr1WbQaqohXakQaFl7sUCjVZpDwkcVjZ%2FAIegHifoAwnZSCxQY6pgG3qShUWKXbVoOlqjrAyhJPpD28yFju7ImFpV2cw80kOZRJGIMhgOTP%2FkoOQ9dmJdoy2uV92Wxl1TVytcWhOsyJ5Vjpp89cAxMEZ1UXLeF%2FId4jq4b8KnNeqA4usestM6Rg6ndX5DcYgBMPrhWIicLNg6elzamgbWOjdECj47a2rm6NTDTFYBKaD0SL3eF1XuTfYqJMn5S%2FFO5kNqXyJLfFjlbfz6wU&X-Amz-Signature=a908c92285269ebb7cb604516852e4114cef6e5e8c74954c1a8f05ceda667012&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
