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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EKON5QX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIBLfSTlfYQ0fXX9EXdLMHZCw%2BGW3RWv80UrhbXNtYcqCAiBAck88WLsMQinBEm%2B6PZ0P6wxM7HbCU5a8LLPHbIPEHyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMowZ3dUDwMufikreCKtwDcGVndNjBy1usIr75OKoeW4zeZDo15A%2BW6%2FHBxGpvZ5JcFaF63bECAJN3tDroQHUKmcYiMvDnS4Q6olkDp1tAVyfw920e3uEecXkAjBLIegvsCXSxomUh9o%2BT%2FTR%2FAWUdrEYPuXRtT7zTnam2Nz3Vl1%2BFGzhxrLMZIg%2BU%2BDJP%2BPqAIFOstSdaPkBkan3xi1yML71EjmnjK0N5IHt4bq65Hxl7dYPoO3fkyFTKm75zEc66KuDAfX2jfR6Z83%2BpBGk5lp%2FmFTgJgHlQFjDn1AhJpdQAF09cUdrNLRcePiK0aq%2BopkrgT9wsZ1FLcyPG0eh1GuJbnBsYyfqXDjAC4eep67xVb%2BjAX8Pq5AmRKHVfHJe6oK1rKEjaA21AYeorJyWfJWwlH62Dydl6vw%2Bmh5U1ZTQ274CXpHxelDVK9MvFRu2sFaXZhq3Sduv7eDRPYi0wZtOxIv5AzafpAVA65LojFBMwkJYwF%2BcodnuRzLYVnjgJWncycBburxpKNW7RvqAwwyB2AV%2FOUgKj3ZGkJG4r9BxBIpwp2Au8NU6r%2BP8Qr2uAhK14YSRfHEgByY%2FtL%2F1UDov%2BsUYVwINKeFA5JgBXzn3XhVtbjWC4XoYNgpoqESGTnAAupSR8RAcg3how5I3BxAY6pgHYNLqdb%2BG0Sixbfo%2BZ%2BPLEsqTUEjp3rv0aEX588wx8SOHriOTxLNCt6k6OId%2F5qlxknl1GI7G0y5jkiwyUb56s2BMEENRahP0G6oV7Of1U73ff7XksUsiY4j3sGLEuVarpI3DDmVQugj6Yc35WZEZqAv9IKs79GE4zoy%2BKE7mhiOTx%2B2iSzeYhlIeM4MjX384XqSFecChUIDzG1h7tBri8eohwAfMI&X-Amz-Signature=f8abda518e14c9b941c1a0e9e9220746c9be7eb603956b973e2e83d5ce583ade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EKON5QX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIBLfSTlfYQ0fXX9EXdLMHZCw%2BGW3RWv80UrhbXNtYcqCAiBAck88WLsMQinBEm%2B6PZ0P6wxM7HbCU5a8LLPHbIPEHyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMowZ3dUDwMufikreCKtwDcGVndNjBy1usIr75OKoeW4zeZDo15A%2BW6%2FHBxGpvZ5JcFaF63bECAJN3tDroQHUKmcYiMvDnS4Q6olkDp1tAVyfw920e3uEecXkAjBLIegvsCXSxomUh9o%2BT%2FTR%2FAWUdrEYPuXRtT7zTnam2Nz3Vl1%2BFGzhxrLMZIg%2BU%2BDJP%2BPqAIFOstSdaPkBkan3xi1yML71EjmnjK0N5IHt4bq65Hxl7dYPoO3fkyFTKm75zEc66KuDAfX2jfR6Z83%2BpBGk5lp%2FmFTgJgHlQFjDn1AhJpdQAF09cUdrNLRcePiK0aq%2BopkrgT9wsZ1FLcyPG0eh1GuJbnBsYyfqXDjAC4eep67xVb%2BjAX8Pq5AmRKHVfHJe6oK1rKEjaA21AYeorJyWfJWwlH62Dydl6vw%2Bmh5U1ZTQ274CXpHxelDVK9MvFRu2sFaXZhq3Sduv7eDRPYi0wZtOxIv5AzafpAVA65LojFBMwkJYwF%2BcodnuRzLYVnjgJWncycBburxpKNW7RvqAwwyB2AV%2FOUgKj3ZGkJG4r9BxBIpwp2Au8NU6r%2BP8Qr2uAhK14YSRfHEgByY%2FtL%2F1UDov%2BsUYVwINKeFA5JgBXzn3XhVtbjWC4XoYNgpoqESGTnAAupSR8RAcg3how5I3BxAY6pgHYNLqdb%2BG0Sixbfo%2BZ%2BPLEsqTUEjp3rv0aEX588wx8SOHriOTxLNCt6k6OId%2F5qlxknl1GI7G0y5jkiwyUb56s2BMEENRahP0G6oV7Of1U73ff7XksUsiY4j3sGLEuVarpI3DDmVQugj6Yc35WZEZqAv9IKs79GE4zoy%2BKE7mhiOTx%2B2iSzeYhlIeM4MjX384XqSFecChUIDzG1h7tBri8eohwAfMI&X-Amz-Signature=d375e456384231df03e1fdd2de210c08f1c7d9e34437227e8c99a35c1290c51e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EKON5QX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIBLfSTlfYQ0fXX9EXdLMHZCw%2BGW3RWv80UrhbXNtYcqCAiBAck88WLsMQinBEm%2B6PZ0P6wxM7HbCU5a8LLPHbIPEHyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMowZ3dUDwMufikreCKtwDcGVndNjBy1usIr75OKoeW4zeZDo15A%2BW6%2FHBxGpvZ5JcFaF63bECAJN3tDroQHUKmcYiMvDnS4Q6olkDp1tAVyfw920e3uEecXkAjBLIegvsCXSxomUh9o%2BT%2FTR%2FAWUdrEYPuXRtT7zTnam2Nz3Vl1%2BFGzhxrLMZIg%2BU%2BDJP%2BPqAIFOstSdaPkBkan3xi1yML71EjmnjK0N5IHt4bq65Hxl7dYPoO3fkyFTKm75zEc66KuDAfX2jfR6Z83%2BpBGk5lp%2FmFTgJgHlQFjDn1AhJpdQAF09cUdrNLRcePiK0aq%2BopkrgT9wsZ1FLcyPG0eh1GuJbnBsYyfqXDjAC4eep67xVb%2BjAX8Pq5AmRKHVfHJe6oK1rKEjaA21AYeorJyWfJWwlH62Dydl6vw%2Bmh5U1ZTQ274CXpHxelDVK9MvFRu2sFaXZhq3Sduv7eDRPYi0wZtOxIv5AzafpAVA65LojFBMwkJYwF%2BcodnuRzLYVnjgJWncycBburxpKNW7RvqAwwyB2AV%2FOUgKj3ZGkJG4r9BxBIpwp2Au8NU6r%2BP8Qr2uAhK14YSRfHEgByY%2FtL%2F1UDov%2BsUYVwINKeFA5JgBXzn3XhVtbjWC4XoYNgpoqESGTnAAupSR8RAcg3how5I3BxAY6pgHYNLqdb%2BG0Sixbfo%2BZ%2BPLEsqTUEjp3rv0aEX588wx8SOHriOTxLNCt6k6OId%2F5qlxknl1GI7G0y5jkiwyUb56s2BMEENRahP0G6oV7Of1U73ff7XksUsiY4j3sGLEuVarpI3DDmVQugj6Yc35WZEZqAv9IKs79GE4zoy%2BKE7mhiOTx%2B2iSzeYhlIeM4MjX384XqSFecChUIDzG1h7tBri8eohwAfMI&X-Amz-Signature=7b26fb769b24bed706197b25501b61fa6cabc55baa7c529f9fc536ef5255fc4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EKON5QX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIBLfSTlfYQ0fXX9EXdLMHZCw%2BGW3RWv80UrhbXNtYcqCAiBAck88WLsMQinBEm%2B6PZ0P6wxM7HbCU5a8LLPHbIPEHyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMowZ3dUDwMufikreCKtwDcGVndNjBy1usIr75OKoeW4zeZDo15A%2BW6%2FHBxGpvZ5JcFaF63bECAJN3tDroQHUKmcYiMvDnS4Q6olkDp1tAVyfw920e3uEecXkAjBLIegvsCXSxomUh9o%2BT%2FTR%2FAWUdrEYPuXRtT7zTnam2Nz3Vl1%2BFGzhxrLMZIg%2BU%2BDJP%2BPqAIFOstSdaPkBkan3xi1yML71EjmnjK0N5IHt4bq65Hxl7dYPoO3fkyFTKm75zEc66KuDAfX2jfR6Z83%2BpBGk5lp%2FmFTgJgHlQFjDn1AhJpdQAF09cUdrNLRcePiK0aq%2BopkrgT9wsZ1FLcyPG0eh1GuJbnBsYyfqXDjAC4eep67xVb%2BjAX8Pq5AmRKHVfHJe6oK1rKEjaA21AYeorJyWfJWwlH62Dydl6vw%2Bmh5U1ZTQ274CXpHxelDVK9MvFRu2sFaXZhq3Sduv7eDRPYi0wZtOxIv5AzafpAVA65LojFBMwkJYwF%2BcodnuRzLYVnjgJWncycBburxpKNW7RvqAwwyB2AV%2FOUgKj3ZGkJG4r9BxBIpwp2Au8NU6r%2BP8Qr2uAhK14YSRfHEgByY%2FtL%2F1UDov%2BsUYVwINKeFA5JgBXzn3XhVtbjWC4XoYNgpoqESGTnAAupSR8RAcg3how5I3BxAY6pgHYNLqdb%2BG0Sixbfo%2BZ%2BPLEsqTUEjp3rv0aEX588wx8SOHriOTxLNCt6k6OId%2F5qlxknl1GI7G0y5jkiwyUb56s2BMEENRahP0G6oV7Of1U73ff7XksUsiY4j3sGLEuVarpI3DDmVQugj6Yc35WZEZqAv9IKs79GE4zoy%2BKE7mhiOTx%2B2iSzeYhlIeM4MjX384XqSFecChUIDzG1h7tBri8eohwAfMI&X-Amz-Signature=9a8da66284c815f9f2c8e77ba27f856533b2cc12cfe4f6fe9972d1ec0487ac07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EKON5QX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIBLfSTlfYQ0fXX9EXdLMHZCw%2BGW3RWv80UrhbXNtYcqCAiBAck88WLsMQinBEm%2B6PZ0P6wxM7HbCU5a8LLPHbIPEHyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMowZ3dUDwMufikreCKtwDcGVndNjBy1usIr75OKoeW4zeZDo15A%2BW6%2FHBxGpvZ5JcFaF63bECAJN3tDroQHUKmcYiMvDnS4Q6olkDp1tAVyfw920e3uEecXkAjBLIegvsCXSxomUh9o%2BT%2FTR%2FAWUdrEYPuXRtT7zTnam2Nz3Vl1%2BFGzhxrLMZIg%2BU%2BDJP%2BPqAIFOstSdaPkBkan3xi1yML71EjmnjK0N5IHt4bq65Hxl7dYPoO3fkyFTKm75zEc66KuDAfX2jfR6Z83%2BpBGk5lp%2FmFTgJgHlQFjDn1AhJpdQAF09cUdrNLRcePiK0aq%2BopkrgT9wsZ1FLcyPG0eh1GuJbnBsYyfqXDjAC4eep67xVb%2BjAX8Pq5AmRKHVfHJe6oK1rKEjaA21AYeorJyWfJWwlH62Dydl6vw%2Bmh5U1ZTQ274CXpHxelDVK9MvFRu2sFaXZhq3Sduv7eDRPYi0wZtOxIv5AzafpAVA65LojFBMwkJYwF%2BcodnuRzLYVnjgJWncycBburxpKNW7RvqAwwyB2AV%2FOUgKj3ZGkJG4r9BxBIpwp2Au8NU6r%2BP8Qr2uAhK14YSRfHEgByY%2FtL%2F1UDov%2BsUYVwINKeFA5JgBXzn3XhVtbjWC4XoYNgpoqESGTnAAupSR8RAcg3how5I3BxAY6pgHYNLqdb%2BG0Sixbfo%2BZ%2BPLEsqTUEjp3rv0aEX588wx8SOHriOTxLNCt6k6OId%2F5qlxknl1GI7G0y5jkiwyUb56s2BMEENRahP0G6oV7Of1U73ff7XksUsiY4j3sGLEuVarpI3DDmVQugj6Yc35WZEZqAv9IKs79GE4zoy%2BKE7mhiOTx%2B2iSzeYhlIeM4MjX384XqSFecChUIDzG1h7tBri8eohwAfMI&X-Amz-Signature=52746ab5e256a8ece996a0d067b937031e07b19fe508935cec45b444fa0c9c45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EKON5QX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIBLfSTlfYQ0fXX9EXdLMHZCw%2BGW3RWv80UrhbXNtYcqCAiBAck88WLsMQinBEm%2B6PZ0P6wxM7HbCU5a8LLPHbIPEHyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMowZ3dUDwMufikreCKtwDcGVndNjBy1usIr75OKoeW4zeZDo15A%2BW6%2FHBxGpvZ5JcFaF63bECAJN3tDroQHUKmcYiMvDnS4Q6olkDp1tAVyfw920e3uEecXkAjBLIegvsCXSxomUh9o%2BT%2FTR%2FAWUdrEYPuXRtT7zTnam2Nz3Vl1%2BFGzhxrLMZIg%2BU%2BDJP%2BPqAIFOstSdaPkBkan3xi1yML71EjmnjK0N5IHt4bq65Hxl7dYPoO3fkyFTKm75zEc66KuDAfX2jfR6Z83%2BpBGk5lp%2FmFTgJgHlQFjDn1AhJpdQAF09cUdrNLRcePiK0aq%2BopkrgT9wsZ1FLcyPG0eh1GuJbnBsYyfqXDjAC4eep67xVb%2BjAX8Pq5AmRKHVfHJe6oK1rKEjaA21AYeorJyWfJWwlH62Dydl6vw%2Bmh5U1ZTQ274CXpHxelDVK9MvFRu2sFaXZhq3Sduv7eDRPYi0wZtOxIv5AzafpAVA65LojFBMwkJYwF%2BcodnuRzLYVnjgJWncycBburxpKNW7RvqAwwyB2AV%2FOUgKj3ZGkJG4r9BxBIpwp2Au8NU6r%2BP8Qr2uAhK14YSRfHEgByY%2FtL%2F1UDov%2BsUYVwINKeFA5JgBXzn3XhVtbjWC4XoYNgpoqESGTnAAupSR8RAcg3how5I3BxAY6pgHYNLqdb%2BG0Sixbfo%2BZ%2BPLEsqTUEjp3rv0aEX588wx8SOHriOTxLNCt6k6OId%2F5qlxknl1GI7G0y5jkiwyUb56s2BMEENRahP0G6oV7Of1U73ff7XksUsiY4j3sGLEuVarpI3DDmVQugj6Yc35WZEZqAv9IKs79GE4zoy%2BKE7mhiOTx%2B2iSzeYhlIeM4MjX384XqSFecChUIDzG1h7tBri8eohwAfMI&X-Amz-Signature=ff5e76914ce08792580cc81536f1f5a5378a4de271d93f3141fbb6dca6dd8577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EKON5QX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIBLfSTlfYQ0fXX9EXdLMHZCw%2BGW3RWv80UrhbXNtYcqCAiBAck88WLsMQinBEm%2B6PZ0P6wxM7HbCU5a8LLPHbIPEHyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMowZ3dUDwMufikreCKtwDcGVndNjBy1usIr75OKoeW4zeZDo15A%2BW6%2FHBxGpvZ5JcFaF63bECAJN3tDroQHUKmcYiMvDnS4Q6olkDp1tAVyfw920e3uEecXkAjBLIegvsCXSxomUh9o%2BT%2FTR%2FAWUdrEYPuXRtT7zTnam2Nz3Vl1%2BFGzhxrLMZIg%2BU%2BDJP%2BPqAIFOstSdaPkBkan3xi1yML71EjmnjK0N5IHt4bq65Hxl7dYPoO3fkyFTKm75zEc66KuDAfX2jfR6Z83%2BpBGk5lp%2FmFTgJgHlQFjDn1AhJpdQAF09cUdrNLRcePiK0aq%2BopkrgT9wsZ1FLcyPG0eh1GuJbnBsYyfqXDjAC4eep67xVb%2BjAX8Pq5AmRKHVfHJe6oK1rKEjaA21AYeorJyWfJWwlH62Dydl6vw%2Bmh5U1ZTQ274CXpHxelDVK9MvFRu2sFaXZhq3Sduv7eDRPYi0wZtOxIv5AzafpAVA65LojFBMwkJYwF%2BcodnuRzLYVnjgJWncycBburxpKNW7RvqAwwyB2AV%2FOUgKj3ZGkJG4r9BxBIpwp2Au8NU6r%2BP8Qr2uAhK14YSRfHEgByY%2FtL%2F1UDov%2BsUYVwINKeFA5JgBXzn3XhVtbjWC4XoYNgpoqESGTnAAupSR8RAcg3how5I3BxAY6pgHYNLqdb%2BG0Sixbfo%2BZ%2BPLEsqTUEjp3rv0aEX588wx8SOHriOTxLNCt6k6OId%2F5qlxknl1GI7G0y5jkiwyUb56s2BMEENRahP0G6oV7Of1U73ff7XksUsiY4j3sGLEuVarpI3DDmVQugj6Yc35WZEZqAv9IKs79GE4zoy%2BKE7mhiOTx%2B2iSzeYhlIeM4MjX384XqSFecChUIDzG1h7tBri8eohwAfMI&X-Amz-Signature=d53f70af857eccf57f201f81b53e7ef5eca7a43c00c3fcc0927adbf9eef8c896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EKON5QX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIBLfSTlfYQ0fXX9EXdLMHZCw%2BGW3RWv80UrhbXNtYcqCAiBAck88WLsMQinBEm%2B6PZ0P6wxM7HbCU5a8LLPHbIPEHyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMowZ3dUDwMufikreCKtwDcGVndNjBy1usIr75OKoeW4zeZDo15A%2BW6%2FHBxGpvZ5JcFaF63bECAJN3tDroQHUKmcYiMvDnS4Q6olkDp1tAVyfw920e3uEecXkAjBLIegvsCXSxomUh9o%2BT%2FTR%2FAWUdrEYPuXRtT7zTnam2Nz3Vl1%2BFGzhxrLMZIg%2BU%2BDJP%2BPqAIFOstSdaPkBkan3xi1yML71EjmnjK0N5IHt4bq65Hxl7dYPoO3fkyFTKm75zEc66KuDAfX2jfR6Z83%2BpBGk5lp%2FmFTgJgHlQFjDn1AhJpdQAF09cUdrNLRcePiK0aq%2BopkrgT9wsZ1FLcyPG0eh1GuJbnBsYyfqXDjAC4eep67xVb%2BjAX8Pq5AmRKHVfHJe6oK1rKEjaA21AYeorJyWfJWwlH62Dydl6vw%2Bmh5U1ZTQ274CXpHxelDVK9MvFRu2sFaXZhq3Sduv7eDRPYi0wZtOxIv5AzafpAVA65LojFBMwkJYwF%2BcodnuRzLYVnjgJWncycBburxpKNW7RvqAwwyB2AV%2FOUgKj3ZGkJG4r9BxBIpwp2Au8NU6r%2BP8Qr2uAhK14YSRfHEgByY%2FtL%2F1UDov%2BsUYVwINKeFA5JgBXzn3XhVtbjWC4XoYNgpoqESGTnAAupSR8RAcg3how5I3BxAY6pgHYNLqdb%2BG0Sixbfo%2BZ%2BPLEsqTUEjp3rv0aEX588wx8SOHriOTxLNCt6k6OId%2F5qlxknl1GI7G0y5jkiwyUb56s2BMEENRahP0G6oV7Of1U73ff7XksUsiY4j3sGLEuVarpI3DDmVQugj6Yc35WZEZqAv9IKs79GE4zoy%2BKE7mhiOTx%2B2iSzeYhlIeM4MjX384XqSFecChUIDzG1h7tBri8eohwAfMI&X-Amz-Signature=808cfb4beefdfeb50bb382ea135397f6ce126bb610bb657a3757200d9a268884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EKON5QX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIBLfSTlfYQ0fXX9EXdLMHZCw%2BGW3RWv80UrhbXNtYcqCAiBAck88WLsMQinBEm%2B6PZ0P6wxM7HbCU5a8LLPHbIPEHyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMowZ3dUDwMufikreCKtwDcGVndNjBy1usIr75OKoeW4zeZDo15A%2BW6%2FHBxGpvZ5JcFaF63bECAJN3tDroQHUKmcYiMvDnS4Q6olkDp1tAVyfw920e3uEecXkAjBLIegvsCXSxomUh9o%2BT%2FTR%2FAWUdrEYPuXRtT7zTnam2Nz3Vl1%2BFGzhxrLMZIg%2BU%2BDJP%2BPqAIFOstSdaPkBkan3xi1yML71EjmnjK0N5IHt4bq65Hxl7dYPoO3fkyFTKm75zEc66KuDAfX2jfR6Z83%2BpBGk5lp%2FmFTgJgHlQFjDn1AhJpdQAF09cUdrNLRcePiK0aq%2BopkrgT9wsZ1FLcyPG0eh1GuJbnBsYyfqXDjAC4eep67xVb%2BjAX8Pq5AmRKHVfHJe6oK1rKEjaA21AYeorJyWfJWwlH62Dydl6vw%2Bmh5U1ZTQ274CXpHxelDVK9MvFRu2sFaXZhq3Sduv7eDRPYi0wZtOxIv5AzafpAVA65LojFBMwkJYwF%2BcodnuRzLYVnjgJWncycBburxpKNW7RvqAwwyB2AV%2FOUgKj3ZGkJG4r9BxBIpwp2Au8NU6r%2BP8Qr2uAhK14YSRfHEgByY%2FtL%2F1UDov%2BsUYVwINKeFA5JgBXzn3XhVtbjWC4XoYNgpoqESGTnAAupSR8RAcg3how5I3BxAY6pgHYNLqdb%2BG0Sixbfo%2BZ%2BPLEsqTUEjp3rv0aEX588wx8SOHriOTxLNCt6k6OId%2F5qlxknl1GI7G0y5jkiwyUb56s2BMEENRahP0G6oV7Of1U73ff7XksUsiY4j3sGLEuVarpI3DDmVQugj6Yc35WZEZqAv9IKs79GE4zoy%2BKE7mhiOTx%2B2iSzeYhlIeM4MjX384XqSFecChUIDzG1h7tBri8eohwAfMI&X-Amz-Signature=0da06a743f7f4c554827acb7954be50838cf7f7d4c017cd8afb4f0b735bf11d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EKON5QX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIBLfSTlfYQ0fXX9EXdLMHZCw%2BGW3RWv80UrhbXNtYcqCAiBAck88WLsMQinBEm%2B6PZ0P6wxM7HbCU5a8LLPHbIPEHyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMowZ3dUDwMufikreCKtwDcGVndNjBy1usIr75OKoeW4zeZDo15A%2BW6%2FHBxGpvZ5JcFaF63bECAJN3tDroQHUKmcYiMvDnS4Q6olkDp1tAVyfw920e3uEecXkAjBLIegvsCXSxomUh9o%2BT%2FTR%2FAWUdrEYPuXRtT7zTnam2Nz3Vl1%2BFGzhxrLMZIg%2BU%2BDJP%2BPqAIFOstSdaPkBkan3xi1yML71EjmnjK0N5IHt4bq65Hxl7dYPoO3fkyFTKm75zEc66KuDAfX2jfR6Z83%2BpBGk5lp%2FmFTgJgHlQFjDn1AhJpdQAF09cUdrNLRcePiK0aq%2BopkrgT9wsZ1FLcyPG0eh1GuJbnBsYyfqXDjAC4eep67xVb%2BjAX8Pq5AmRKHVfHJe6oK1rKEjaA21AYeorJyWfJWwlH62Dydl6vw%2Bmh5U1ZTQ274CXpHxelDVK9MvFRu2sFaXZhq3Sduv7eDRPYi0wZtOxIv5AzafpAVA65LojFBMwkJYwF%2BcodnuRzLYVnjgJWncycBburxpKNW7RvqAwwyB2AV%2FOUgKj3ZGkJG4r9BxBIpwp2Au8NU6r%2BP8Qr2uAhK14YSRfHEgByY%2FtL%2F1UDov%2BsUYVwINKeFA5JgBXzn3XhVtbjWC4XoYNgpoqESGTnAAupSR8RAcg3how5I3BxAY6pgHYNLqdb%2BG0Sixbfo%2BZ%2BPLEsqTUEjp3rv0aEX588wx8SOHriOTxLNCt6k6OId%2F5qlxknl1GI7G0y5jkiwyUb56s2BMEENRahP0G6oV7Of1U73ff7XksUsiY4j3sGLEuVarpI3DDmVQugj6Yc35WZEZqAv9IKs79GE4zoy%2BKE7mhiOTx%2B2iSzeYhlIeM4MjX384XqSFecChUIDzG1h7tBri8eohwAfMI&X-Amz-Signature=be01e177a3a0c55f3d162130f9d1ef86cf6fb342f9c80d6823060d960fc8f87e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCZ5MZBJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDo7vqLsa1LJbrho3CTRVtcvKpvhXHpYZ9f7vmEYEJHmgIgVQqD8h%2FKHJ06CcUSF89zANxeKsam60DHCoIfBvbIAIQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDGGNTbT1fnBRaOSZKircAwPTM37%2FYAjMbOs2xkwDDP7j%2Bod9ePpMDiaIE6eC0psCpmQEvSD9ZFpZkZ1hQ6BUiltEEmQLBoQUz0kr0XFP7bHqeJNZN5ZM%2Bo%2B0XOGpBmtsEOvY19GL1s3jmxS1u0AHnjyIRepkBcLchI4nF%2B8YpY9bH4ktZG0JVTD8Oaj7wtajZ0mk7CTL4nL6YnDzc1sD70fK4vSbzQgri%2BDRKr%2FwAd3BjTPeJFedKUO0k2KSlICdN9mJQ77DkDcJiXNR4X6Fie%2F%2FqLUvx9bf0zKZp3I4KEAx2IoOfHuUhZFCBhFRIpFGCfGhaEb6CjWTXbkxEywCN9Hkr0SjbdbBrrhJ8okpKWd%2B15UHhnmc8lnCQ59K13luXhDIoqWcl9RE6tbI6Bm6eTaAsA28e88KrQLCZzPm3ubSDfaDUs5MfG3HdZb%2BNcgOzdiA1JMHei9KtyJUBzcFns4RCNRiVEwumjY0Y1Q3Lwvj6KgpmbfOrHSlJxrAeKZAdtEMv9RF%2Bxg94mRtx5jkC%2B1eDRMA0Bx73Eb8kYRv4xT6LGvmmzbkuh%2FZAsBYwVE6%2F78eIEq0XZq%2FTZeF3yGQ5Ch9xhcrDu4nEiT%2BZK1ePvjeBG5o5kNHct5uQw65Q1W45Coh%2BYVJ%2FVn6amV0MPyNwcQGOqUBwnzyqn3afWb8HD9JC8KI%2BF8GqIwS1J%2B0aUF1rdGYsvT5W5gyyTLVqF7BYzyd9RMa%2BhF5V24m3a5STGU0zZ1zLIBMWqZgopLL5jAUz%2BJxt%2F5ULKplW3UemxPut1WCIfQk%2BsyyfIkN3ixiGPtd1Qr5ZyftA%2F%2B6j2dQsPaPxy2SnOv5mWJI2LDAmJDnzkwFsTFrMi2rOi37px56saKvW3yCfV2VUjAs&X-Amz-Signature=310fa113cffc37aed917aa7b4f5ea05a47b637ce1ee4d220efb2c070d8c4c9d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XPZSQHI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCpVHhI5Ac%2FPvJH6VfudyVR9WvLnlp%2F7pminL%2FhG7lgaAIhAMm7WhJcKketrwNDk3hJEeYwtK2ORUHFnTqTqYMNa44oKv8DCD8QABoMNjM3NDIzMTgzODA1IgwOVWIryuFk%2BtdMHggq3ANPndyL%2BQT9x6m4r9S%2BUOlWN2XpkBIT09hbpjq5t2bYAMHZ4E6AXQtRCtVG6j4TMjLtE6%2BAh7%2FdLRO31wM8rBH5lRumd67%2BTEboF5SUrImcHjJhH4lb0NjjhNi76tCl1NMWc1LZGNhuYZCZM8I2ixYJeYQZPJM9FqC7wAXUiCAX8tYsXIK%2BbU3oXOKWmCbRGIWU7GeLHOV526zR28zH%2F9aMAmmtUGP9e16HwiHydDt65iu%2BETYMcQ0amCfOHwm3nFz5tAOt8JTKB%2BgmwORfVVIOTIju5T1x0PTzTExErL9EXc4mnUxKiBPcmQmyK%2BngVvHAKOiu3lkSfQHwc%2F%2Bir0YHv4Ne5Ye0zeEuHw3xhQ1pVnrGv9rwKgp6Fdv10bvPbZwDEfWnVy5dcdhWTrB%2BoVxyTnhdNR5%2FnhySYkmU5Tt03y5v60DphuMzm6GSN76K1QnBlGlDmfCREZryDgfhSDZZ70gYciJbSyYkIpzuFGnEmTIZiWc2Mi9MmqmFDox0dBZUMCORq531TKQoXR%2Fsrp0V7rrEsKL5riJQRjPdJtVCfiIXcwWZYel%2BrG9%2FuMa6VRXOp09twU1x%2B92Ag0wzBePtRXOR75dGO71Neb3SgbMm6zgJ897jldd82YtFVTCkjcHEBjqkAcfIFXID1T3xNmcUGTrLlvW1nkvgniU6ddVbUZma0N%2B%2FYYv%2FCl63tmiZ8M7LPHhHDUZwm0l5geIt9MXBXiI4hmQepWWBQrm3nXOWkkouIxBpklfbd2c8bZdpCBxCvkPbATHS8Hr9XcJrAaQops4OvjIak%2FN%2BwaDWRh9%2BDt9U%2FwCKujDLOGhtKG38L2xmIscWBBdG%2BIc8hWV5zHPsvHL74NePSu6k&X-Amz-Signature=0063b8ddb643cbb11cca1dc02795d07e0cb7469b8853aebed3d653291adb96aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PFTOLTO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFvTRi6Pk89QagO7eH9h8UX21wMzg4OpYNGp5WVBUBnfAiEAlEeh8v4YLspF93nMPafH9sq9ZPG6ZHRnks42QqUK4jgq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDES1t%2FJG70I5Qos%2BDCrcA6Hlmf14ul1zFABQHhwyBIZGX6%2BUymaqU8oorrS5eb2vQV5WVKwbnxLolS9T6XzkgNzyRrRvltVJhBDItAw7J4w8ModB9X2DaaOtL%2F%2FNvIn2kVZVwwMsiWWGuGbtyX83W4DND49ndi5QiMPkR%2B25Lbh4SOvdkM8yrWXy%2BXIaBxkX9X66vb1nrn0Y28V%2FmopwSsNRYe3mdlWCeQWr6kZq8ZgxhykGCdn%2Fll0sW0isaU%2Bf3K%2FVZzCPsIZYzLLE5pOsLj5yqxfZkoS0yNTk9iXNGsm01aZQSi7CwuYKX9ov11TxB2i9a7UD7w%2B2uJIzbsRD%2BqnAxZ3lC7oBqtMAyOKxgWldaYp2BvpnepaNYzGpyRJiPyYVCNp%2BW54Ja76%2B%2BIMP6dioDNjgUEdDE9HHnMx5658IH5eUGR8I6CTvidwEAelPKhodQMoDGIRD4MBZTiYrIYsNpTawGUN%2FJJ3fjWkUFYmjGAGRKXfz2E2qsEBQRqxKuszgKXsZDBN9%2FbQ42yLTCnFmXEfVfhdci5AZ%2Ffw2i5JyNcmFkNcehR5CN%2FrIUz%2BBpJ7dniNAAtcTxVBLDORY7AtBh0LEC1yFkKz76hW179oV2wdrKi98nJvRVDh0ZopU98a5Gtsei9%2BFGj8SMLiNwcQGOqUBvZf1nFpD0YlstfIMvsCFsJ6dxku%2BoZGYARRTuDf%2FWbGkgwaqbGhmY%2F9ml33pqcIP60lXLVVSpAdjM6N%2B%2FHdGn506T66GTTnape4%2FxmNylbJn%2B7NBpA6vT6cD7zsyIVjidN33Jf9ObQmC9jNtugdsv%2BfUsz20omq%2BKP3%2BNbN1tHkszIuJhHQi%2Bz5nFyVNHkwFLs1u1pGz9iKXm%2FRuw0NZDxsrMHPD&X-Amz-Signature=9a1d80092adf9efba74e936d1e11d1e83d334597d2c877514205c44882bf5254&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EKON5QX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIBLfSTlfYQ0fXX9EXdLMHZCw%2BGW3RWv80UrhbXNtYcqCAiBAck88WLsMQinBEm%2B6PZ0P6wxM7HbCU5a8LLPHbIPEHyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMowZ3dUDwMufikreCKtwDcGVndNjBy1usIr75OKoeW4zeZDo15A%2BW6%2FHBxGpvZ5JcFaF63bECAJN3tDroQHUKmcYiMvDnS4Q6olkDp1tAVyfw920e3uEecXkAjBLIegvsCXSxomUh9o%2BT%2FTR%2FAWUdrEYPuXRtT7zTnam2Nz3Vl1%2BFGzhxrLMZIg%2BU%2BDJP%2BPqAIFOstSdaPkBkan3xi1yML71EjmnjK0N5IHt4bq65Hxl7dYPoO3fkyFTKm75zEc66KuDAfX2jfR6Z83%2BpBGk5lp%2FmFTgJgHlQFjDn1AhJpdQAF09cUdrNLRcePiK0aq%2BopkrgT9wsZ1FLcyPG0eh1GuJbnBsYyfqXDjAC4eep67xVb%2BjAX8Pq5AmRKHVfHJe6oK1rKEjaA21AYeorJyWfJWwlH62Dydl6vw%2Bmh5U1ZTQ274CXpHxelDVK9MvFRu2sFaXZhq3Sduv7eDRPYi0wZtOxIv5AzafpAVA65LojFBMwkJYwF%2BcodnuRzLYVnjgJWncycBburxpKNW7RvqAwwyB2AV%2FOUgKj3ZGkJG4r9BxBIpwp2Au8NU6r%2BP8Qr2uAhK14YSRfHEgByY%2FtL%2F1UDov%2BsUYVwINKeFA5JgBXzn3XhVtbjWC4XoYNgpoqESGTnAAupSR8RAcg3how5I3BxAY6pgHYNLqdb%2BG0Sixbfo%2BZ%2BPLEsqTUEjp3rv0aEX588wx8SOHriOTxLNCt6k6OId%2F5qlxknl1GI7G0y5jkiwyUb56s2BMEENRahP0G6oV7Of1U73ff7XksUsiY4j3sGLEuVarpI3DDmVQugj6Yc35WZEZqAv9IKs79GE4zoy%2BKE7mhiOTx%2B2iSzeYhlIeM4MjX384XqSFecChUIDzG1h7tBri8eohwAfMI&X-Amz-Signature=a1f59f34df11edc7ad2c459685f147771f687304243999d107f26155d36a02e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHXAF4LN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDWiOciZPTgeWI3KqVyTiYc7KfzJh75wa7NVnHhCC4PewIhAIDQoblZE1kHNi9ZpCkxh6HE9DmNMZjhRF9MmhyccemIKv8DCD8QABoMNjM3NDIzMTgzODA1IgzZ7W%2FGqsLQzl1B1Lcq3AOoXsoVbUvpVG43x0sHlIF%2FAlGP89XBw74c7LOrivJTrj5PjUAM1xiRHYaucEZIy09SSFzKKq5bemUMIZfXWC8PXGREJUqT0T9FgK%2FJQjWKVAZ3LEZaypet%2BdknF3DuboFXJPFtGs6Dfx%2B1FzStT0jzgcensRkpTkL%2FsTK1E3C%2B92t2ERPZjEPOn8jhVMtK1QYHAEJ97x1wUo4X4iIbS%2Bp3kQxXsQDYYKHa%2BOfEyo3F1NFj1G7HZQPg0jHruCB%2B7x9wHOVIPyspvIe1OGj%2BYy9iSPaHX2oT8eGHy6natllkb7WYcMFA42Mg0cIksKKgZjzxo4GkxcUYnf1Fs4E80qebYQA0DXhyuNUc7199TsDvbXDx1lPi5hUH6kPQTOLu1y3MtAhWFkBvMjEHQonL17pghk3pgELzkGKdNoJP%2FayLcAnXqkevZVEdoVb2SXGVoqOwxJtrTFzicnKQphVdpvsyRk0FnREmyHeDTEskptho3RidiLHifEy9VLlqkcUzlQSHFhm1VgzUewDI6eVB%2BmvFBV4NsnD03D5%2BMlbiLFQpxePCql%2FoRRJtVt%2FbY0F0s1DKEIgW%2FQ1TS5x%2FA38X9yWYHuKkDgeiwzdugm535DhjUi6vcJ86KebzshQGvjDPjcHEBjqkAduscCBtV6dGV18u6apQTSyOqF79SN5jgLN3PPfuP9%2BJMZiRI%2BFbS6IOa5Xr5o9Ij%2B6hRBs1W4SbJIvAyfcrvmlsb7IcTl6OaJ55Mg1tnCG82dFIVi9HEWR6ga%2BTyFobZXC2pUeP3WgQpTwS5OUekzjD1u%2BFYcvzKrABmZdcULIk1KC4fr5O8OTHVEhV%2FzXvy3S0dFR13%2BlUCT7hEoBbmI2Lpupi&X-Amz-Signature=82d1ea24d12fe147836b25d357ffe821306b029e7e2c1902afac8116f59fd627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EKON5QX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIBLfSTlfYQ0fXX9EXdLMHZCw%2BGW3RWv80UrhbXNtYcqCAiBAck88WLsMQinBEm%2B6PZ0P6wxM7HbCU5a8LLPHbIPEHyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMowZ3dUDwMufikreCKtwDcGVndNjBy1usIr75OKoeW4zeZDo15A%2BW6%2FHBxGpvZ5JcFaF63bECAJN3tDroQHUKmcYiMvDnS4Q6olkDp1tAVyfw920e3uEecXkAjBLIegvsCXSxomUh9o%2BT%2FTR%2FAWUdrEYPuXRtT7zTnam2Nz3Vl1%2BFGzhxrLMZIg%2BU%2BDJP%2BPqAIFOstSdaPkBkan3xi1yML71EjmnjK0N5IHt4bq65Hxl7dYPoO3fkyFTKm75zEc66KuDAfX2jfR6Z83%2BpBGk5lp%2FmFTgJgHlQFjDn1AhJpdQAF09cUdrNLRcePiK0aq%2BopkrgT9wsZ1FLcyPG0eh1GuJbnBsYyfqXDjAC4eep67xVb%2BjAX8Pq5AmRKHVfHJe6oK1rKEjaA21AYeorJyWfJWwlH62Dydl6vw%2Bmh5U1ZTQ274CXpHxelDVK9MvFRu2sFaXZhq3Sduv7eDRPYi0wZtOxIv5AzafpAVA65LojFBMwkJYwF%2BcodnuRzLYVnjgJWncycBburxpKNW7RvqAwwyB2AV%2FOUgKj3ZGkJG4r9BxBIpwp2Au8NU6r%2BP8Qr2uAhK14YSRfHEgByY%2FtL%2F1UDov%2BsUYVwINKeFA5JgBXzn3XhVtbjWC4XoYNgpoqESGTnAAupSR8RAcg3how5I3BxAY6pgHYNLqdb%2BG0Sixbfo%2BZ%2BPLEsqTUEjp3rv0aEX588wx8SOHriOTxLNCt6k6OId%2F5qlxknl1GI7G0y5jkiwyUb56s2BMEENRahP0G6oV7Of1U73ff7XksUsiY4j3sGLEuVarpI3DDmVQugj6Yc35WZEZqAv9IKs79GE4zoy%2BKE7mhiOTx%2B2iSzeYhlIeM4MjX384XqSFecChUIDzG1h7tBri8eohwAfMI&X-Amz-Signature=2ba392aa773bc3bee8db0fd6c617b59b4d2d9f3909dbae34b0df7a935cde55b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN7WJRMG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCasTBYZayqbhf4WsziassrdYSWEOlIBzOzA6lExVFjFQIgQAJGdaOgo7x1dTOriH4M65DIHBHsPhmmEkTGjWf6kl4q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFSondBNi7kBunX1dCrcA683EZNZZMpV6Hw2%2FPHJ4Tekf4CMLMQtiLiRotkb7gWzGxpsYi3iu4ep8NmBPafJln6PbKZVkKe%2Fljb0c6IyPq2PA%2FMpVx518oIKkFUWEMc0xQ%2B7CtB%2FNyMYckEdZE0sRbM8Kz2rEgdAFtWAc3NMbTmQ0wTfneIClLqd0YrySSVauUUl4D6Zpcu3TaHOZ4iNmsnQjJYsQuf58x%2B7b3megI01sCQA4mlbMv6ef0utHwrata0zv20gh1LiSEexNR%2FIwY1W%2FstD3phri%2F2r6re6utd5gojZx%2BQzIegATinAiBdMM5xGszcSjjhOlK1TIVMvJ7K5yzZaDKKF0Q9AeXyRK0vv%2FehJf%2F6t8Zv8kCOsrL9KOgp7k2Uq%2Bw5Zo2aeriUlToiS5tDVhGQMq1IptLfImhYkEb4ml0sOnpiyv2E97f5ySQiIUuIKj%2BAL1WmOzlj%2FPT0wk7suRQz35PWGoaKuUb0vzH%2BxSkB%2FaB453mn2Jea%2FGaEg4IgAYfsqwfPv1QCt11fCTYyTbCmKaQ4X5ysccJaDmXH8GkH%2BF5m8eNL%2BzYyq%2FU7Zib9e%2FfVwa4qAfjmWzHzHEZi1AcZ4PDEgQbrYHddo5qamWVi39zqDdFvuIY%2BWEhH9SISDKCK2wk%2FHMNCNwcQGOqUBJ8QQjDznT%2F9yWFAXNVp7oTaNBHHZYNTO9DNfZpKvLweqaDKJts5ZKZL6Z%2FNPuoxYRUAkYcH4NZxQQKfB6IYFybivx0MAzSGNPnES2WJ6yRhfFEPV%2Ffd85fzG4ggM62daMA8CmZd%2Br%2Fy47IT6Hbf%2BPaGo5sgFx97E37K6bQPmgY277jo3QE86HKBcLLAs0bFjCH4c5xjXE0TgotFAWK0Y6cXirTKb&X-Amz-Signature=d7c0049a913220794bc0bff91554c4c836f1ebe30204cb4f52d9ccb4393ef464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EKON5QX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIBLfSTlfYQ0fXX9EXdLMHZCw%2BGW3RWv80UrhbXNtYcqCAiBAck88WLsMQinBEm%2B6PZ0P6wxM7HbCU5a8LLPHbIPEHyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMowZ3dUDwMufikreCKtwDcGVndNjBy1usIr75OKoeW4zeZDo15A%2BW6%2FHBxGpvZ5JcFaF63bECAJN3tDroQHUKmcYiMvDnS4Q6olkDp1tAVyfw920e3uEecXkAjBLIegvsCXSxomUh9o%2BT%2FTR%2FAWUdrEYPuXRtT7zTnam2Nz3Vl1%2BFGzhxrLMZIg%2BU%2BDJP%2BPqAIFOstSdaPkBkan3xi1yML71EjmnjK0N5IHt4bq65Hxl7dYPoO3fkyFTKm75zEc66KuDAfX2jfR6Z83%2BpBGk5lp%2FmFTgJgHlQFjDn1AhJpdQAF09cUdrNLRcePiK0aq%2BopkrgT9wsZ1FLcyPG0eh1GuJbnBsYyfqXDjAC4eep67xVb%2BjAX8Pq5AmRKHVfHJe6oK1rKEjaA21AYeorJyWfJWwlH62Dydl6vw%2Bmh5U1ZTQ274CXpHxelDVK9MvFRu2sFaXZhq3Sduv7eDRPYi0wZtOxIv5AzafpAVA65LojFBMwkJYwF%2BcodnuRzLYVnjgJWncycBburxpKNW7RvqAwwyB2AV%2FOUgKj3ZGkJG4r9BxBIpwp2Au8NU6r%2BP8Qr2uAhK14YSRfHEgByY%2FtL%2F1UDov%2BsUYVwINKeFA5JgBXzn3XhVtbjWC4XoYNgpoqESGTnAAupSR8RAcg3how5I3BxAY6pgHYNLqdb%2BG0Sixbfo%2BZ%2BPLEsqTUEjp3rv0aEX588wx8SOHriOTxLNCt6k6OId%2F5qlxknl1GI7G0y5jkiwyUb56s2BMEENRahP0G6oV7Of1U73ff7XksUsiY4j3sGLEuVarpI3DDmVQugj6Yc35WZEZqAv9IKs79GE4zoy%2BKE7mhiOTx%2B2iSzeYhlIeM4MjX384XqSFecChUIDzG1h7tBri8eohwAfMI&X-Amz-Signature=b1b529e664419f701b1a991f4b6d8fa4e52faca362d08ca5257985bc1b469141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYLBFDAH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDGLKDDnhnzuwHFz4HwxmajAJ%2B4KtDddYY5gbj%2BtnODsQIhALI5J5mN8sTEPUiG%2FNQTl80kwNjAk14OB1yIuzSKm%2FxIKv8DCD8QABoMNjM3NDIzMTgzODA1IgyfWnl74wkqBJLBYYQq3AO1yLZ7r%2FmE1Anyv6ihjOQRGUMFO%2F3Hb%2BL3H6PAQHQvOdaLGz%2F7gummO3%2BRE5x4FeEy7i2B1NWhuGgQtgAyumohdezGFpKS52%2BhO5Ze1K7v%2BaOiCVUyc7gwBjDI8nYGo77upPgYND8nVFVNLGYGrNO9puquxrRIc1RUpMk%2FxHinsw%2BFCVQHSHUeLF%2BVMrLzb%2Bf84g1VyaA8k2xOi5lGJjtNDRlvpsOxKDO9%2BH%2BSdVRCiBTu4XWrTbKAHHTrSNi6wuenDMvZP0x16PPwoiK4numFVjBahEfXkPcYCd0MryzcGB2LxT5atTO3dDUopSsFl9SWJe5VJ7UZIv4mJZ9hW3K2cdHTu2FlWzhHQnuWnwfnooDjvfhmW8fow6SmCVW1MMQjg%2B6BUFNcWDfwS9Uq%2BaiyK9xojUBU3N1725Y1q470mdvQ1mGH5%2FdilSqfWI%2FXvenzyAk5W9NshJ0M6Ibojpqsaf%2F8%2F2m7bq7YIr4MddVP%2FqFvk%2BCdAmYQSQmHsYdXrjYTfVw%2FPZHqwA%2BLqMPWoKH%2Fn%2Bmaudh1qRxhSKSwioTWcN9GL91BLvPbJOhj3xJSJnveDDW05dlzpJBcD%2FSZj3XghzVcwnsgkmQP5ojZeX0vu4hBK1LEIm%2Bou6mE1TCXjcHEBjqkAfNnnS5tMUAiNczx14pmeQG%2BTxzdK7s%2B5iXWAnmq56YvJFFbEOhhfYdrPO1O%2FHhHmImq2Ce27SGj%2Bf5PtS4P9kD5c5ro4ChK3wbWtU%2FYn%2FzLnJxYmoKfEAj4lfNTInRRw31hCNRdIG8z%2FsYELloCpCKaB%2F%2BYRnVO6SbrVHgJean9AnxI0%2BWAD1do%2BuAiGL7GXgUQBR6o8dJMY1DEce77Z6C%2BZ8Rw&X-Amz-Signature=49efeb433c4571d52d7d920318daeffdfbe6cb922e8c3363035d07c95e17cfc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EKON5QX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIBLfSTlfYQ0fXX9EXdLMHZCw%2BGW3RWv80UrhbXNtYcqCAiBAck88WLsMQinBEm%2B6PZ0P6wxM7HbCU5a8LLPHbIPEHyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMowZ3dUDwMufikreCKtwDcGVndNjBy1usIr75OKoeW4zeZDo15A%2BW6%2FHBxGpvZ5JcFaF63bECAJN3tDroQHUKmcYiMvDnS4Q6olkDp1tAVyfw920e3uEecXkAjBLIegvsCXSxomUh9o%2BT%2FTR%2FAWUdrEYPuXRtT7zTnam2Nz3Vl1%2BFGzhxrLMZIg%2BU%2BDJP%2BPqAIFOstSdaPkBkan3xi1yML71EjmnjK0N5IHt4bq65Hxl7dYPoO3fkyFTKm75zEc66KuDAfX2jfR6Z83%2BpBGk5lp%2FmFTgJgHlQFjDn1AhJpdQAF09cUdrNLRcePiK0aq%2BopkrgT9wsZ1FLcyPG0eh1GuJbnBsYyfqXDjAC4eep67xVb%2BjAX8Pq5AmRKHVfHJe6oK1rKEjaA21AYeorJyWfJWwlH62Dydl6vw%2Bmh5U1ZTQ274CXpHxelDVK9MvFRu2sFaXZhq3Sduv7eDRPYi0wZtOxIv5AzafpAVA65LojFBMwkJYwF%2BcodnuRzLYVnjgJWncycBburxpKNW7RvqAwwyB2AV%2FOUgKj3ZGkJG4r9BxBIpwp2Au8NU6r%2BP8Qr2uAhK14YSRfHEgByY%2FtL%2F1UDov%2BsUYVwINKeFA5JgBXzn3XhVtbjWC4XoYNgpoqESGTnAAupSR8RAcg3how5I3BxAY6pgHYNLqdb%2BG0Sixbfo%2BZ%2BPLEsqTUEjp3rv0aEX588wx8SOHriOTxLNCt6k6OId%2F5qlxknl1GI7G0y5jkiwyUb56s2BMEENRahP0G6oV7Of1U73ff7XksUsiY4j3sGLEuVarpI3DDmVQugj6Yc35WZEZqAv9IKs79GE4zoy%2BKE7mhiOTx%2B2iSzeYhlIeM4MjX384XqSFecChUIDzG1h7tBri8eohwAfMI&X-Amz-Signature=867bd2ad91f43964b25b8188fbe33bb92a72168eb119e4e30520cc2d3aa78463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667AXAYFJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCqqmScp78PNIMriUCIBync3m3nR3Bv2kqLCz4ZdBDs2wIgQyBCNOSdsxSpyTxXzO1yfnqd%2BJqTuZeqGzJii2qCYa4q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDNNjrOR4yzmIdDZaRCrcA3KYTcennAEAo17jTZhnkod4C8cr9Ed%2FGLIgfXUF13vjhk2M8gzCM0v7y%2BsOtsqNchTfxZXtPylmfYB4Gh3dDvE01aOF71lWogCmYcK%2B3f4lPh7potOjIG%2FVUZMO3%2B%2BCuQWoY%2FmEeqmdIrZ6l7sQuB5uU5KiYUetkaOiwTVyhN9mmcExWWEx1URALOxBMGEctH07RsKriXTUozxUf5aMyhlB%2BIO82Jy%2F6UmVpChobGjb32ZxwzT1NMhc%2Feia11r4xf1t2nCBl22v9V%2BkzvVstbCXk4B5%2FA0VRRNngtzluONOtEXqyoejnPY0vZwiCzVem3ckeVyvAfe2LSsuMHz4d3fE8NIG0mg1s8jei5bKUhuNXf9BZI3I64fn1AWxumXOQ0gh3VFPbk0p3JjCCNSjHAnyBfeA2FRrhWC05mUM1I7do4RbZ%2FD8VrdpbFdrWu%2B4YdC3Mx%2BfCDhAd6Bo7V01SQsZggCS5EKsYfHnUPfcmMunZjcf4htTRa2fX1K4E911wV1yM2B61h4hDRDfeqVa6PwlZS7k3aWFQ7MkPgxuA2%2FSNAz7%2FdWfiZigfaGo4GihH%2Bn9vj9CFA8MzQqL1oThlILE7XB1DkTvaJHV4C%2B9PdHYrvOlLHDSyhO3p9KmMLqNwcQGOqUBVBm1cZ05U3JQpNSpxnqyDifc8avI2SFdBL5mlI2IDlE5dWssd8ApaYsotqh0GWeh0WqCnwOQ3aODILhLnvZ421Is9FdxvzwtZUE8lrvxz26YpOplpki1cgStCGVqdfynAlziW4Zn8GWbar6OL6D7mGd2xmai6QSPWpzkIHn0y%2Bzn8i4BUWXFWL7sPUhpbx0m1P7aEw%2FBMV3sEeq27qLPS0gHt01P&X-Amz-Signature=23948d4dbc265ce549d1e95319bae7e9c65e9ae41fc31e69ee4c91fa423e8050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDEZFMZC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIG%2BrcgWIATDNdLUCX60iMk2mw6wIlaaIhbMQuDoMSX2%2BAiARr%2FzWNvkQEucWBdCTXPiM21pf8q0CEOlBIsNh8pTB0Cr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMKCQPxz9n%2FrY%2BMV3bKtwDte5TKWaDQh5j3lCgxNxcsneYkGSrOs%2F5lYOmtnlGtNHhYaA3g3jRb0fyQ3xy0buX%2FuKsB5EpJJccF320Gv80kBz%2Fgm0SLIGVPNSHb1AlmjC22Ozhmqq3RKCaNnfPI0%2Fi1U2C%2Be2O%2Bm4EKlKKAhewzRCbnZ0r6GpV80V6xrIZpAhlmJuxF0IwqnSTCLNHj4PEm9qt1DFOycd3iz%2FPpQQmPkkPSZ16JufeXsDsaYmBfBZsRR6sa848iCu%2FxeYNCrEaBQMJDHMHIzuLdtmuOwQQ%2Fosyt5OKMMRNi89GolRpVx7UUBv2qGryjC1UJ38UrggMfIMxfAreJ0kTTXw8WzbXkmaVOWvgAKvJ%2FLF3uvjGnJwPFHtCyIGfNsJDywL%2Bd8NXwKIPrS5EyP9rBJS11TFRm%2FO8U6%2BxNYJHByr1oWtaDyX21d9so8WWPp6OUun4hZu0lYN%2BW9weNi7DeHesDp3Lc5hl1BdHU1YrqDxmyvRPzXxgNJ8FAc7UVxBZz3skR%2BY3LXcC59gYdiOwub7IkTZLHYm%2F7kVtThNUgDiVjfqkSeX%2Ft9Qt01v5v6be4Z%2Bl1vAfejQNuSRu2jdi9XXfpzmoayxWwpnAtGiUNLuFICIV6RXcirOQdeVgCmLRpswwx43BxAY6pgHC9EIngWHX0%2FuKR22%2FpeFFP%2BclPTqsxhUygr%2Fp0m78fxHu6747Sufm5rD8ycSVwwKYRwgWirVIu6U3qJjelz0MChtTcZbgPFgRxjSPoAGDk4S3WT6Y%2FQkP%2BEP60c4q35DqoxlCq1%2BE%2Fx90FT%2BrTAtNbqb%2FDQ%2Fs8npyBQh0wQPepMpfztCyBl9uWqicSHznKIM1DF7cYhKTfUSnbe5UrBIhDznWu9ns&X-Amz-Signature=60850a102921a05a861c9b7902306b82114372b90abab24a487cd1369fe296fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EICE6XT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDOJ%2FtAvHypwcaNcrxf6khYzx8DmahYgMTv690N5PIfrQIhAMYt%2Bhpb4e8aFwc5YpfY7yLiBBAjXEq1neewM9PfDjaZKv8DCD8QABoMNjM3NDIzMTgzODA1IgzTJOqCDGpCU0SBsMMq3APJFsgMN02EW8fuZYzbAKx6zmx%2Ban26pFOa55F2YUTeyq2%2FgvSE3z2nvPvzAMYQihbsI7VO2%2FMeI4j5WOg%2FWM9UYfQ%2B2lDfJB8WGh6rsZYBKkdFuCBciZtJClY%2BgeZSJWThttIWTZJiwU3GkY6w5MjrdE%2BY5c2uABPm5%2FpTyxnq6HFgvOPwV6CfdeLs8s6%2BSI6ZRhj84NNVMmitYndZupRz7PkOIfuF8HNm%2B%2FlI3Cibhd668O97TXXhKgBgN8VDarLst9pFs41M%2FiD%2BFDICMSpfpFcMKzFj3p4uJn%2B5qJuoHVZgwTL25o05gdKMj4i%2BpJLwSHn5awxEre%2BsVUzXQjRdrnsPY9jUATboeyFRswUjUB0SRvhL59CSN8V0ABFFln%2Fg80mDcug9hZKAcp99jtyp6RRnFQxjZu9eYUkperzrRs8oAQaG5rfxPwUK%2Fo3ejZTLvOKIiDGrupWmKusMXX9XLOiTs02MJ4CZUcMYCHssts1XiyunNl4KgiXj9unL3O9jd81xvfCpDyiZnLrp4JkyXfJFC29qTkfnU7C%2FEN5vWCN6TqCSqTLtOvG6gLLU6dTok%2FNM3GDu5RkG8fVzHV7ncT7VD4yhBh3CMVmUSSpcBdNxZA7Ja9Ky4uymxzDUjcHEBjqkARJmTUTXylTmKeTQYlv%2BMbXSm53NFQxHvKVPK93go6U9i1%2FV26ooCJccpMStDLbfIGGjXcTTnfmztiL1ytxxcqDYl5mJNPrS1JKhqAwlvD5I957GKAywkWGcN3R2KZ9zQFbsHZ3%2BneVoOIswvyYSe2dc4rTiS20QqRhrEjdDIQhw7sBUx%2BLpJlKDpvoEsNZH3R%2FwE%2BYjC94Bft%2F1haWj0OZL6LaX&X-Amz-Signature=894b9ee2a38b382ebef5d71807f5ef087c0d1e1e53f2fcda7dbc9d3f857c426e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O5JZIV5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFo%2BfFLN%2FjBE1iADyX4dTyZSuCiKSqYnGejozcrLpEDlAiEAm5BqVFobI%2FS6fju8lYKpPr4WHqgMr0f3o7KvRNM0r8Qq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHTieIHEpZ1qGOSoSCrcAyx8xSGkjNhYA8tyQXjaLFt9Wi1gk4cLl%2BRej3RpLq%2FNjelq6Q2DgSTmyZFpKVcvd2aIJZKZD3N8QpbzKazhrYdj7H89sFdpNpH5J3XcrkIslZWHPQE0qbRjwslHyfmh%2Fi9MJnHmSjAU2J3L6EX0L%2BcCqXBJlWsOyXQZLNHcW8tChU4I8ugU5NcdalZiMgbJkrtpB%2BIxxWHFEhtoVj45WiNi66%2B9H3Jx8t2HMXbvPbgDPbYHWgyvbY31n1xOePW%2FxNx5peYgF%2Bbu8yL29StJp%2Fp%2FUmzHKs9eazneIzMdFSNeYhLzTuxZU2T95wRH55AbP9laV6eQdvgtAd1WuTwIG0ect6D3EZ5BVOl1CaMUmKRXHzOR1Xw7m8yrV0gsdoCxsAfwLL6w9c6HKQAEgNyOoo4JmVMfdrzhGuabnU%2F3fwfyPrZw4%2B8xSDyjs%2BfwMtyMFSWlwt%2BMm6NudI1JGbWblq9z%2F2IgwXpOZNAyRm3LezSGm4BwnAE8A7PCDPhuAXwiyB9VhSmB3CWUmatPIQQ7gLFKBMnultDT7P%2BxydCDgThvCe7l3eNPv0TtPel0ox%2Bwp0jIVYdOfJNqdP%2BfRkN%2FrfDLH8t4Df28GTp74WEOk7f7WXUPedEkZKTcIDxvMIKNwcQGOqUBVV0yB%2FFoH%2BVO%2FEroNvIQsuE%2BbL1ZW9GWtf66RZVS%2B4ftMuWYO%2FqPMTv8O5Re5t5H%2FKaxJ0qIhYYTAivpVaZk23xGXjUixJJ%2FuYEGhl4mEW7rHVLmeTCsBaGjVz8dqtmQiNy7NX08zj%2FRpUTkGz6Xqvm5d5g5%2F09HMfUXHm44YBHlA9dR7gfn%2FgKv0SxowLpLrN6y%2FZR0Ghcu7Ru1qTU0J7sgUbP5&X-Amz-Signature=ec8a5c7019ed9517a44674e5cedc785695222a75eb4eb21655439e3372ff6a3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U4IY5D3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBzoRRoZpjCIOlKi56NuwltHVWlBtiWSvIq1yxgQDXOYAiEA52A4aJsdF%2BLhyXaRfZfo87L3xFplh5jAiN5P6dy6CtUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDOYLCTqsD1%2BLXVwCTyrcA0fFjfCzYc5Rps8T0I%2F%2FzvGKuDZ5yD6SNsuRXjF%2BrCClJQh%2B%2FBShbyaC%2FjgqvieAUT%2F%2BozzoP2xkKiVvfeVcmIDb7iDl1KU2iB1R2U9kgBZ3UUMp6VpHriLMqs5uLUy1DVO5BMuXgoQ401NyBj3D7%2Ft0QrM%2BXnKq2Cfdk2C2dVHDO1SrULlupaT%2BzIRWJC1%2B0O2ZMxHnN11GZvG4DwmrQJFIjeDHLet2TRNWBLTcm4xamKwmX1PFgKDVtDBiPT3LSk3J2Pqgpf0ze70LRiXjFZKFNBvAAP3D1VrKu0AE6i0va8jOGMMG4HgBnw4ybncSsxCn02hED9RAh2KQVTdFND%2BZXWykqV2f1PBV5Gc9tWYqlGg%2FQKV8Qe6Nutq6%2Ff92ZNKOMu2Ic1%2BurPU2GNCbUZAoeocczryTkP7BpgprUXjteXj8wt71KSxx%2BY6tpgY3LmXYfK%2Bp5p98DTIMTTFYOzD71VfZHMIZJ8UREG7%2FLCkEyIaIKfU%2By%2FofPgSEARGFRp4yKXZQhOjjHZ0r0JtpVqIS7YpHqdhWKkUHOfk%2BgI3yxCJt5F%2FPt3fKEbW%2FkJ95UlVbQT1kCcTqK%2BWMyeieQyKVQ5fLHUiOmhFqm7m4Z63QhBX1PhXWm3aiO7QKMMCNwcQGOqUBpJG2RDdDlld%2FXHq9QSgU9aeNopx8SAvAF4Jqw29zo0ZtUk1HQdPnheXA2LzobZ%2BRXopGaZHjeVJmUwH8%2FngjL4z5E%2FBfbiAoCA%2FwqBwl2wS4%2B6exR3OKXMUIjJpt5l16WB4HdKwIbSTuGtbctrwKh4hLSlEFhIKbD3FPQPVMZ%2FLkHeUdpFAa99QffcTVxB5wUs8j2lcw8OliG2v8zZ0PbHEGHFKB&X-Amz-Signature=62b6052f90fbe9bc93c53a04f8b5a8d764a67c2447c6c22999f652b8a0f066bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EKON5QX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIBLfSTlfYQ0fXX9EXdLMHZCw%2BGW3RWv80UrhbXNtYcqCAiBAck88WLsMQinBEm%2B6PZ0P6wxM7HbCU5a8LLPHbIPEHyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMowZ3dUDwMufikreCKtwDcGVndNjBy1usIr75OKoeW4zeZDo15A%2BW6%2FHBxGpvZ5JcFaF63bECAJN3tDroQHUKmcYiMvDnS4Q6olkDp1tAVyfw920e3uEecXkAjBLIegvsCXSxomUh9o%2BT%2FTR%2FAWUdrEYPuXRtT7zTnam2Nz3Vl1%2BFGzhxrLMZIg%2BU%2BDJP%2BPqAIFOstSdaPkBkan3xi1yML71EjmnjK0N5IHt4bq65Hxl7dYPoO3fkyFTKm75zEc66KuDAfX2jfR6Z83%2BpBGk5lp%2FmFTgJgHlQFjDn1AhJpdQAF09cUdrNLRcePiK0aq%2BopkrgT9wsZ1FLcyPG0eh1GuJbnBsYyfqXDjAC4eep67xVb%2BjAX8Pq5AmRKHVfHJe6oK1rKEjaA21AYeorJyWfJWwlH62Dydl6vw%2Bmh5U1ZTQ274CXpHxelDVK9MvFRu2sFaXZhq3Sduv7eDRPYi0wZtOxIv5AzafpAVA65LojFBMwkJYwF%2BcodnuRzLYVnjgJWncycBburxpKNW7RvqAwwyB2AV%2FOUgKj3ZGkJG4r9BxBIpwp2Au8NU6r%2BP8Qr2uAhK14YSRfHEgByY%2FtL%2F1UDov%2BsUYVwINKeFA5JgBXzn3XhVtbjWC4XoYNgpoqESGTnAAupSR8RAcg3how5I3BxAY6pgHYNLqdb%2BG0Sixbfo%2BZ%2BPLEsqTUEjp3rv0aEX588wx8SOHriOTxLNCt6k6OId%2F5qlxknl1GI7G0y5jkiwyUb56s2BMEENRahP0G6oV7Of1U73ff7XksUsiY4j3sGLEuVarpI3DDmVQugj6Yc35WZEZqAv9IKs79GE4zoy%2BKE7mhiOTx%2B2iSzeYhlIeM4MjX384XqSFecChUIDzG1h7tBri8eohwAfMI&X-Amz-Signature=3ba464f8730c1bdf9bc1460d341665187745b2e8305f8a28dbe2592e47b979ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EKON5QX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIBLfSTlfYQ0fXX9EXdLMHZCw%2BGW3RWv80UrhbXNtYcqCAiBAck88WLsMQinBEm%2B6PZ0P6wxM7HbCU5a8LLPHbIPEHyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMowZ3dUDwMufikreCKtwDcGVndNjBy1usIr75OKoeW4zeZDo15A%2BW6%2FHBxGpvZ5JcFaF63bECAJN3tDroQHUKmcYiMvDnS4Q6olkDp1tAVyfw920e3uEecXkAjBLIegvsCXSxomUh9o%2BT%2FTR%2FAWUdrEYPuXRtT7zTnam2Nz3Vl1%2BFGzhxrLMZIg%2BU%2BDJP%2BPqAIFOstSdaPkBkan3xi1yML71EjmnjK0N5IHt4bq65Hxl7dYPoO3fkyFTKm75zEc66KuDAfX2jfR6Z83%2BpBGk5lp%2FmFTgJgHlQFjDn1AhJpdQAF09cUdrNLRcePiK0aq%2BopkrgT9wsZ1FLcyPG0eh1GuJbnBsYyfqXDjAC4eep67xVb%2BjAX8Pq5AmRKHVfHJe6oK1rKEjaA21AYeorJyWfJWwlH62Dydl6vw%2Bmh5U1ZTQ274CXpHxelDVK9MvFRu2sFaXZhq3Sduv7eDRPYi0wZtOxIv5AzafpAVA65LojFBMwkJYwF%2BcodnuRzLYVnjgJWncycBburxpKNW7RvqAwwyB2AV%2FOUgKj3ZGkJG4r9BxBIpwp2Au8NU6r%2BP8Qr2uAhK14YSRfHEgByY%2FtL%2F1UDov%2BsUYVwINKeFA5JgBXzn3XhVtbjWC4XoYNgpoqESGTnAAupSR8RAcg3how5I3BxAY6pgHYNLqdb%2BG0Sixbfo%2BZ%2BPLEsqTUEjp3rv0aEX588wx8SOHriOTxLNCt6k6OId%2F5qlxknl1GI7G0y5jkiwyUb56s2BMEENRahP0G6oV7Of1U73ff7XksUsiY4j3sGLEuVarpI3DDmVQugj6Yc35WZEZqAv9IKs79GE4zoy%2BKE7mhiOTx%2B2iSzeYhlIeM4MjX384XqSFecChUIDzG1h7tBri8eohwAfMI&X-Amz-Signature=fe419d6f935d6280e7b6f4826553d3e924ac8a520a200b4070522ccbea1721c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHWIA3PK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEQSIbQ40oFqO4OTxZmHrG3GOCpW%2BKgPAL1OCrK2m22lAiBASSLBsSizAnhaU4C7IYR4S%2FVDe3MyzXtVf6iijqJH3Sr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMhYPqNtYFOoa0EyV9KtwDAVF2P3SVs2CVeVjv2eCkdEWOrpPspE1cZ9uoCNVl2ULJyiQiRsZyEVeS4TxTqI1drz7s9TDI2y4BtMmwt8FHpahAeYPjKdOzS%2Fg3%2BnJYeL0hAGbIfF25ztypvUhzySFJEzh3UI64xbCSBEL%2BcwfuYfOhPcknt4iNoT2MtF4XLWhaRAJYqT8jXhoJzQkRj7iEMyoUMv5KJYp6TdcpgBQ%2FFyM73fL%2Bqh5u7wwMFsAI7NbYSDiR1fQ5%2BTxJ%2BAaE8qWn8VpqOX89HEelhaB4HUyp7w2pp2LPxuLjZFPwm%2BM%2BiSwI0nVV8r191pFVaxh3PTHqPVeOUOZV5dNjPWEeufDxTMIDxVYlZI7%2FfNGSJl68mgdDvjf2z8ATOJK2Kqw8%2F4qPb6qJg25V%2BKDBjwgh35oFlpcXNZn8d0RJsHv5fldskpYv5wJQ%2FvtoXJWcWWksFglZc6q9iHwt874BVX7txC7wdMg12qDx20yPixFZTHNGlGs9KDtPG%2BeFpVqeEwy%2FiWYBb62Ec66PBdw2WELe6v6d6PJ0CRU5zdduYl9zslfo1qYrxjVdAnJZoYTbAzWt4FujHDZgK8R3WWOVxKc8KkSKAhrGe672Dk5ku14Nj6dmj7RW3pb46v5lWR09OLQwuI3BxAY6pgG%2F2MTmnjxJT5n4IZxnMO6qfQAqbo9L3Y6O%2FQKMQiJfWhS%2B9YkmxzbanZvW5Rh4INdREsNEeV7e4OWVGjpF1niMGzwAL7qPVKiNroI%2BsFUYyQkF0QTmgRxI7BHtH%2BndGVsO9o3BZVXWmBjVNiO5npVwXlEnLqv0rDYzaJw9wpZDWHHlbEL2gE3PN856GOhaPezUTRnF%2BaQzK9Fh%2FQbNgzzicWiyirSP&X-Amz-Signature=829f0e31c8aabf43f25dba567b480b59cda5b558ca29f4af6558c16adbb04091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHWIA3PK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEQSIbQ40oFqO4OTxZmHrG3GOCpW%2BKgPAL1OCrK2m22lAiBASSLBsSizAnhaU4C7IYR4S%2FVDe3MyzXtVf6iijqJH3Sr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMhYPqNtYFOoa0EyV9KtwDAVF2P3SVs2CVeVjv2eCkdEWOrpPspE1cZ9uoCNVl2ULJyiQiRsZyEVeS4TxTqI1drz7s9TDI2y4BtMmwt8FHpahAeYPjKdOzS%2Fg3%2BnJYeL0hAGbIfF25ztypvUhzySFJEzh3UI64xbCSBEL%2BcwfuYfOhPcknt4iNoT2MtF4XLWhaRAJYqT8jXhoJzQkRj7iEMyoUMv5KJYp6TdcpgBQ%2FFyM73fL%2Bqh5u7wwMFsAI7NbYSDiR1fQ5%2BTxJ%2BAaE8qWn8VpqOX89HEelhaB4HUyp7w2pp2LPxuLjZFPwm%2BM%2BiSwI0nVV8r191pFVaxh3PTHqPVeOUOZV5dNjPWEeufDxTMIDxVYlZI7%2FfNGSJl68mgdDvjf2z8ATOJK2Kqw8%2F4qPb6qJg25V%2BKDBjwgh35oFlpcXNZn8d0RJsHv5fldskpYv5wJQ%2FvtoXJWcWWksFglZc6q9iHwt874BVX7txC7wdMg12qDx20yPixFZTHNGlGs9KDtPG%2BeFpVqeEwy%2FiWYBb62Ec66PBdw2WELe6v6d6PJ0CRU5zdduYl9zslfo1qYrxjVdAnJZoYTbAzWt4FujHDZgK8R3WWOVxKc8KkSKAhrGe672Dk5ku14Nj6dmj7RW3pb46v5lWR09OLQwuI3BxAY6pgG%2F2MTmnjxJT5n4IZxnMO6qfQAqbo9L3Y6O%2FQKMQiJfWhS%2B9YkmxzbanZvW5Rh4INdREsNEeV7e4OWVGjpF1niMGzwAL7qPVKiNroI%2BsFUYyQkF0QTmgRxI7BHtH%2BndGVsO9o3BZVXWmBjVNiO5npVwXlEnLqv0rDYzaJw9wpZDWHHlbEL2gE3PN856GOhaPezUTRnF%2BaQzK9Fh%2FQbNgzzicWiyirSP&X-Amz-Signature=a0338475a95f6de79889d2574c326b4498001e0a09629c25563acb36f7c085c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHWIA3PK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEQSIbQ40oFqO4OTxZmHrG3GOCpW%2BKgPAL1OCrK2m22lAiBASSLBsSizAnhaU4C7IYR4S%2FVDe3MyzXtVf6iijqJH3Sr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMhYPqNtYFOoa0EyV9KtwDAVF2P3SVs2CVeVjv2eCkdEWOrpPspE1cZ9uoCNVl2ULJyiQiRsZyEVeS4TxTqI1drz7s9TDI2y4BtMmwt8FHpahAeYPjKdOzS%2Fg3%2BnJYeL0hAGbIfF25ztypvUhzySFJEzh3UI64xbCSBEL%2BcwfuYfOhPcknt4iNoT2MtF4XLWhaRAJYqT8jXhoJzQkRj7iEMyoUMv5KJYp6TdcpgBQ%2FFyM73fL%2Bqh5u7wwMFsAI7NbYSDiR1fQ5%2BTxJ%2BAaE8qWn8VpqOX89HEelhaB4HUyp7w2pp2LPxuLjZFPwm%2BM%2BiSwI0nVV8r191pFVaxh3PTHqPVeOUOZV5dNjPWEeufDxTMIDxVYlZI7%2FfNGSJl68mgdDvjf2z8ATOJK2Kqw8%2F4qPb6qJg25V%2BKDBjwgh35oFlpcXNZn8d0RJsHv5fldskpYv5wJQ%2FvtoXJWcWWksFglZc6q9iHwt874BVX7txC7wdMg12qDx20yPixFZTHNGlGs9KDtPG%2BeFpVqeEwy%2FiWYBb62Ec66PBdw2WELe6v6d6PJ0CRU5zdduYl9zslfo1qYrxjVdAnJZoYTbAzWt4FujHDZgK8R3WWOVxKc8KkSKAhrGe672Dk5ku14Nj6dmj7RW3pb46v5lWR09OLQwuI3BxAY6pgG%2F2MTmnjxJT5n4IZxnMO6qfQAqbo9L3Y6O%2FQKMQiJfWhS%2B9YkmxzbanZvW5Rh4INdREsNEeV7e4OWVGjpF1niMGzwAL7qPVKiNroI%2BsFUYyQkF0QTmgRxI7BHtH%2BndGVsO9o3BZVXWmBjVNiO5npVwXlEnLqv0rDYzaJw9wpZDWHHlbEL2gE3PN856GOhaPezUTRnF%2BaQzK9Fh%2FQbNgzzicWiyirSP&X-Amz-Signature=91372f663530e124023dfeb91e099017b1f6960ad2b95aadf7f761c23673fe06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHWIA3PK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEQSIbQ40oFqO4OTxZmHrG3GOCpW%2BKgPAL1OCrK2m22lAiBASSLBsSizAnhaU4C7IYR4S%2FVDe3MyzXtVf6iijqJH3Sr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMhYPqNtYFOoa0EyV9KtwDAVF2P3SVs2CVeVjv2eCkdEWOrpPspE1cZ9uoCNVl2ULJyiQiRsZyEVeS4TxTqI1drz7s9TDI2y4BtMmwt8FHpahAeYPjKdOzS%2Fg3%2BnJYeL0hAGbIfF25ztypvUhzySFJEzh3UI64xbCSBEL%2BcwfuYfOhPcknt4iNoT2MtF4XLWhaRAJYqT8jXhoJzQkRj7iEMyoUMv5KJYp6TdcpgBQ%2FFyM73fL%2Bqh5u7wwMFsAI7NbYSDiR1fQ5%2BTxJ%2BAaE8qWn8VpqOX89HEelhaB4HUyp7w2pp2LPxuLjZFPwm%2BM%2BiSwI0nVV8r191pFVaxh3PTHqPVeOUOZV5dNjPWEeufDxTMIDxVYlZI7%2FfNGSJl68mgdDvjf2z8ATOJK2Kqw8%2F4qPb6qJg25V%2BKDBjwgh35oFlpcXNZn8d0RJsHv5fldskpYv5wJQ%2FvtoXJWcWWksFglZc6q9iHwt874BVX7txC7wdMg12qDx20yPixFZTHNGlGs9KDtPG%2BeFpVqeEwy%2FiWYBb62Ec66PBdw2WELe6v6d6PJ0CRU5zdduYl9zslfo1qYrxjVdAnJZoYTbAzWt4FujHDZgK8R3WWOVxKc8KkSKAhrGe672Dk5ku14Nj6dmj7RW3pb46v5lWR09OLQwuI3BxAY6pgG%2F2MTmnjxJT5n4IZxnMO6qfQAqbo9L3Y6O%2FQKMQiJfWhS%2B9YkmxzbanZvW5Rh4INdREsNEeV7e4OWVGjpF1niMGzwAL7qPVKiNroI%2BsFUYyQkF0QTmgRxI7BHtH%2BndGVsO9o3BZVXWmBjVNiO5npVwXlEnLqv0rDYzaJw9wpZDWHHlbEL2gE3PN856GOhaPezUTRnF%2BaQzK9Fh%2FQbNgzzicWiyirSP&X-Amz-Signature=d32f843a37a3fefef2102bff0e8b6ccdd160dd3cdaa403b2ca7f0352bff51ac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHWIA3PK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEQSIbQ40oFqO4OTxZmHrG3GOCpW%2BKgPAL1OCrK2m22lAiBASSLBsSizAnhaU4C7IYR4S%2FVDe3MyzXtVf6iijqJH3Sr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMhYPqNtYFOoa0EyV9KtwDAVF2P3SVs2CVeVjv2eCkdEWOrpPspE1cZ9uoCNVl2ULJyiQiRsZyEVeS4TxTqI1drz7s9TDI2y4BtMmwt8FHpahAeYPjKdOzS%2Fg3%2BnJYeL0hAGbIfF25ztypvUhzySFJEzh3UI64xbCSBEL%2BcwfuYfOhPcknt4iNoT2MtF4XLWhaRAJYqT8jXhoJzQkRj7iEMyoUMv5KJYp6TdcpgBQ%2FFyM73fL%2Bqh5u7wwMFsAI7NbYSDiR1fQ5%2BTxJ%2BAaE8qWn8VpqOX89HEelhaB4HUyp7w2pp2LPxuLjZFPwm%2BM%2BiSwI0nVV8r191pFVaxh3PTHqPVeOUOZV5dNjPWEeufDxTMIDxVYlZI7%2FfNGSJl68mgdDvjf2z8ATOJK2Kqw8%2F4qPb6qJg25V%2BKDBjwgh35oFlpcXNZn8d0RJsHv5fldskpYv5wJQ%2FvtoXJWcWWksFglZc6q9iHwt874BVX7txC7wdMg12qDx20yPixFZTHNGlGs9KDtPG%2BeFpVqeEwy%2FiWYBb62Ec66PBdw2WELe6v6d6PJ0CRU5zdduYl9zslfo1qYrxjVdAnJZoYTbAzWt4FujHDZgK8R3WWOVxKc8KkSKAhrGe672Dk5ku14Nj6dmj7RW3pb46v5lWR09OLQwuI3BxAY6pgG%2F2MTmnjxJT5n4IZxnMO6qfQAqbo9L3Y6O%2FQKMQiJfWhS%2B9YkmxzbanZvW5Rh4INdREsNEeV7e4OWVGjpF1niMGzwAL7qPVKiNroI%2BsFUYyQkF0QTmgRxI7BHtH%2BndGVsO9o3BZVXWmBjVNiO5npVwXlEnLqv0rDYzaJw9wpZDWHHlbEL2gE3PN856GOhaPezUTRnF%2BaQzK9Fh%2FQbNgzzicWiyirSP&X-Amz-Signature=9334dc6df1af8c00f0edd435929b0282c1c42d2257e5ab2ba23c6196914445eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHWIA3PK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEQSIbQ40oFqO4OTxZmHrG3GOCpW%2BKgPAL1OCrK2m22lAiBASSLBsSizAnhaU4C7IYR4S%2FVDe3MyzXtVf6iijqJH3Sr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMhYPqNtYFOoa0EyV9KtwDAVF2P3SVs2CVeVjv2eCkdEWOrpPspE1cZ9uoCNVl2ULJyiQiRsZyEVeS4TxTqI1drz7s9TDI2y4BtMmwt8FHpahAeYPjKdOzS%2Fg3%2BnJYeL0hAGbIfF25ztypvUhzySFJEzh3UI64xbCSBEL%2BcwfuYfOhPcknt4iNoT2MtF4XLWhaRAJYqT8jXhoJzQkRj7iEMyoUMv5KJYp6TdcpgBQ%2FFyM73fL%2Bqh5u7wwMFsAI7NbYSDiR1fQ5%2BTxJ%2BAaE8qWn8VpqOX89HEelhaB4HUyp7w2pp2LPxuLjZFPwm%2BM%2BiSwI0nVV8r191pFVaxh3PTHqPVeOUOZV5dNjPWEeufDxTMIDxVYlZI7%2FfNGSJl68mgdDvjf2z8ATOJK2Kqw8%2F4qPb6qJg25V%2BKDBjwgh35oFlpcXNZn8d0RJsHv5fldskpYv5wJQ%2FvtoXJWcWWksFglZc6q9iHwt874BVX7txC7wdMg12qDx20yPixFZTHNGlGs9KDtPG%2BeFpVqeEwy%2FiWYBb62Ec66PBdw2WELe6v6d6PJ0CRU5zdduYl9zslfo1qYrxjVdAnJZoYTbAzWt4FujHDZgK8R3WWOVxKc8KkSKAhrGe672Dk5ku14Nj6dmj7RW3pb46v5lWR09OLQwuI3BxAY6pgG%2F2MTmnjxJT5n4IZxnMO6qfQAqbo9L3Y6O%2FQKMQiJfWhS%2B9YkmxzbanZvW5Rh4INdREsNEeV7e4OWVGjpF1niMGzwAL7qPVKiNroI%2BsFUYyQkF0QTmgRxI7BHtH%2BndGVsO9o3BZVXWmBjVNiO5npVwXlEnLqv0rDYzaJw9wpZDWHHlbEL2gE3PN856GOhaPezUTRnF%2BaQzK9Fh%2FQbNgzzicWiyirSP&X-Amz-Signature=dffa348325d977d7caaa8f866fdc79d677df3b8879df0aace46d4446cd047616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHWIA3PK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEQSIbQ40oFqO4OTxZmHrG3GOCpW%2BKgPAL1OCrK2m22lAiBASSLBsSizAnhaU4C7IYR4S%2FVDe3MyzXtVf6iijqJH3Sr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMhYPqNtYFOoa0EyV9KtwDAVF2P3SVs2CVeVjv2eCkdEWOrpPspE1cZ9uoCNVl2ULJyiQiRsZyEVeS4TxTqI1drz7s9TDI2y4BtMmwt8FHpahAeYPjKdOzS%2Fg3%2BnJYeL0hAGbIfF25ztypvUhzySFJEzh3UI64xbCSBEL%2BcwfuYfOhPcknt4iNoT2MtF4XLWhaRAJYqT8jXhoJzQkRj7iEMyoUMv5KJYp6TdcpgBQ%2FFyM73fL%2Bqh5u7wwMFsAI7NbYSDiR1fQ5%2BTxJ%2BAaE8qWn8VpqOX89HEelhaB4HUyp7w2pp2LPxuLjZFPwm%2BM%2BiSwI0nVV8r191pFVaxh3PTHqPVeOUOZV5dNjPWEeufDxTMIDxVYlZI7%2FfNGSJl68mgdDvjf2z8ATOJK2Kqw8%2F4qPb6qJg25V%2BKDBjwgh35oFlpcXNZn8d0RJsHv5fldskpYv5wJQ%2FvtoXJWcWWksFglZc6q9iHwt874BVX7txC7wdMg12qDx20yPixFZTHNGlGs9KDtPG%2BeFpVqeEwy%2FiWYBb62Ec66PBdw2WELe6v6d6PJ0CRU5zdduYl9zslfo1qYrxjVdAnJZoYTbAzWt4FujHDZgK8R3WWOVxKc8KkSKAhrGe672Dk5ku14Nj6dmj7RW3pb46v5lWR09OLQwuI3BxAY6pgG%2F2MTmnjxJT5n4IZxnMO6qfQAqbo9L3Y6O%2FQKMQiJfWhS%2B9YkmxzbanZvW5Rh4INdREsNEeV7e4OWVGjpF1niMGzwAL7qPVKiNroI%2BsFUYyQkF0QTmgRxI7BHtH%2BndGVsO9o3BZVXWmBjVNiO5npVwXlEnLqv0rDYzaJw9wpZDWHHlbEL2gE3PN856GOhaPezUTRnF%2BaQzK9Fh%2FQbNgzzicWiyirSP&X-Amz-Signature=91372f663530e124023dfeb91e099017b1f6960ad2b95aadf7f761c23673fe06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHWIA3PK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEQSIbQ40oFqO4OTxZmHrG3GOCpW%2BKgPAL1OCrK2m22lAiBASSLBsSizAnhaU4C7IYR4S%2FVDe3MyzXtVf6iijqJH3Sr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMhYPqNtYFOoa0EyV9KtwDAVF2P3SVs2CVeVjv2eCkdEWOrpPspE1cZ9uoCNVl2ULJyiQiRsZyEVeS4TxTqI1drz7s9TDI2y4BtMmwt8FHpahAeYPjKdOzS%2Fg3%2BnJYeL0hAGbIfF25ztypvUhzySFJEzh3UI64xbCSBEL%2BcwfuYfOhPcknt4iNoT2MtF4XLWhaRAJYqT8jXhoJzQkRj7iEMyoUMv5KJYp6TdcpgBQ%2FFyM73fL%2Bqh5u7wwMFsAI7NbYSDiR1fQ5%2BTxJ%2BAaE8qWn8VpqOX89HEelhaB4HUyp7w2pp2LPxuLjZFPwm%2BM%2BiSwI0nVV8r191pFVaxh3PTHqPVeOUOZV5dNjPWEeufDxTMIDxVYlZI7%2FfNGSJl68mgdDvjf2z8ATOJK2Kqw8%2F4qPb6qJg25V%2BKDBjwgh35oFlpcXNZn8d0RJsHv5fldskpYv5wJQ%2FvtoXJWcWWksFglZc6q9iHwt874BVX7txC7wdMg12qDx20yPixFZTHNGlGs9KDtPG%2BeFpVqeEwy%2FiWYBb62Ec66PBdw2WELe6v6d6PJ0CRU5zdduYl9zslfo1qYrxjVdAnJZoYTbAzWt4FujHDZgK8R3WWOVxKc8KkSKAhrGe672Dk5ku14Nj6dmj7RW3pb46v5lWR09OLQwuI3BxAY6pgG%2F2MTmnjxJT5n4IZxnMO6qfQAqbo9L3Y6O%2FQKMQiJfWhS%2B9YkmxzbanZvW5Rh4INdREsNEeV7e4OWVGjpF1niMGzwAL7qPVKiNroI%2BsFUYyQkF0QTmgRxI7BHtH%2BndGVsO9o3BZVXWmBjVNiO5npVwXlEnLqv0rDYzaJw9wpZDWHHlbEL2gE3PN856GOhaPezUTRnF%2BaQzK9Fh%2FQbNgzzicWiyirSP&X-Amz-Signature=d1eb1b04eae1383d100e641af2c3bb5a3208e1d30ad86b17bd702de41fd211ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHWIA3PK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEQSIbQ40oFqO4OTxZmHrG3GOCpW%2BKgPAL1OCrK2m22lAiBASSLBsSizAnhaU4C7IYR4S%2FVDe3MyzXtVf6iijqJH3Sr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMhYPqNtYFOoa0EyV9KtwDAVF2P3SVs2CVeVjv2eCkdEWOrpPspE1cZ9uoCNVl2ULJyiQiRsZyEVeS4TxTqI1drz7s9TDI2y4BtMmwt8FHpahAeYPjKdOzS%2Fg3%2BnJYeL0hAGbIfF25ztypvUhzySFJEzh3UI64xbCSBEL%2BcwfuYfOhPcknt4iNoT2MtF4XLWhaRAJYqT8jXhoJzQkRj7iEMyoUMv5KJYp6TdcpgBQ%2FFyM73fL%2Bqh5u7wwMFsAI7NbYSDiR1fQ5%2BTxJ%2BAaE8qWn8VpqOX89HEelhaB4HUyp7w2pp2LPxuLjZFPwm%2BM%2BiSwI0nVV8r191pFVaxh3PTHqPVeOUOZV5dNjPWEeufDxTMIDxVYlZI7%2FfNGSJl68mgdDvjf2z8ATOJK2Kqw8%2F4qPb6qJg25V%2BKDBjwgh35oFlpcXNZn8d0RJsHv5fldskpYv5wJQ%2FvtoXJWcWWksFglZc6q9iHwt874BVX7txC7wdMg12qDx20yPixFZTHNGlGs9KDtPG%2BeFpVqeEwy%2FiWYBb62Ec66PBdw2WELe6v6d6PJ0CRU5zdduYl9zslfo1qYrxjVdAnJZoYTbAzWt4FujHDZgK8R3WWOVxKc8KkSKAhrGe672Dk5ku14Nj6dmj7RW3pb46v5lWR09OLQwuI3BxAY6pgG%2F2MTmnjxJT5n4IZxnMO6qfQAqbo9L3Y6O%2FQKMQiJfWhS%2B9YkmxzbanZvW5Rh4INdREsNEeV7e4OWVGjpF1niMGzwAL7qPVKiNroI%2BsFUYyQkF0QTmgRxI7BHtH%2BndGVsO9o3BZVXWmBjVNiO5npVwXlEnLqv0rDYzaJw9wpZDWHHlbEL2gE3PN856GOhaPezUTRnF%2BaQzK9Fh%2FQbNgzzicWiyirSP&X-Amz-Signature=8678b362138365f9aa22015244df42b43a81326a67469734f323c3d73925f744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHWIA3PK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEQSIbQ40oFqO4OTxZmHrG3GOCpW%2BKgPAL1OCrK2m22lAiBASSLBsSizAnhaU4C7IYR4S%2FVDe3MyzXtVf6iijqJH3Sr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMhYPqNtYFOoa0EyV9KtwDAVF2P3SVs2CVeVjv2eCkdEWOrpPspE1cZ9uoCNVl2ULJyiQiRsZyEVeS4TxTqI1drz7s9TDI2y4BtMmwt8FHpahAeYPjKdOzS%2Fg3%2BnJYeL0hAGbIfF25ztypvUhzySFJEzh3UI64xbCSBEL%2BcwfuYfOhPcknt4iNoT2MtF4XLWhaRAJYqT8jXhoJzQkRj7iEMyoUMv5KJYp6TdcpgBQ%2FFyM73fL%2Bqh5u7wwMFsAI7NbYSDiR1fQ5%2BTxJ%2BAaE8qWn8VpqOX89HEelhaB4HUyp7w2pp2LPxuLjZFPwm%2BM%2BiSwI0nVV8r191pFVaxh3PTHqPVeOUOZV5dNjPWEeufDxTMIDxVYlZI7%2FfNGSJl68mgdDvjf2z8ATOJK2Kqw8%2F4qPb6qJg25V%2BKDBjwgh35oFlpcXNZn8d0RJsHv5fldskpYv5wJQ%2FvtoXJWcWWksFglZc6q9iHwt874BVX7txC7wdMg12qDx20yPixFZTHNGlGs9KDtPG%2BeFpVqeEwy%2FiWYBb62Ec66PBdw2WELe6v6d6PJ0CRU5zdduYl9zslfo1qYrxjVdAnJZoYTbAzWt4FujHDZgK8R3WWOVxKc8KkSKAhrGe672Dk5ku14Nj6dmj7RW3pb46v5lWR09OLQwuI3BxAY6pgG%2F2MTmnjxJT5n4IZxnMO6qfQAqbo9L3Y6O%2FQKMQiJfWhS%2B9YkmxzbanZvW5Rh4INdREsNEeV7e4OWVGjpF1niMGzwAL7qPVKiNroI%2BsFUYyQkF0QTmgRxI7BHtH%2BndGVsO9o3BZVXWmBjVNiO5npVwXlEnLqv0rDYzaJw9wpZDWHHlbEL2gE3PN856GOhaPezUTRnF%2BaQzK9Fh%2FQbNgzzicWiyirSP&X-Amz-Signature=c54041bae19d5a9f5931fa8a3ca4cb7716db4ead741555a47a454f57beda5fa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
