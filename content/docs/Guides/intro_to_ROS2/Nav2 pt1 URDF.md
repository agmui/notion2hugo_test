---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-01T02:02:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-01T02:02:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675KJWPS6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGsGwm%2FMox35jcjCPa0owGBwZLhdroVlhPz3LvC0Wz%2BAIgDyRwIMLC27RgxZBt5MOg9DbIxvH9dCwX%2BW32rVc2Vh8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH6Mw0%2FBt1v9GmrHircA6DiIZJRNUK3mlQQhaQQ4t9ekfO4zdEOfhcOzkJHjLdwme6fHxtrYpYlYcxIuHJ5OTF5eFATdJP7BKKv%2BWUxYbS%2FCXF4R0IfZvFd0XeKNeKpCHt7xntnNBEJjuSLr0A9hKkYKMD7kD93NG3iNVhf06rKC9xM9FgKnsuCSMqthkLBrayelhvcTr780RYY9fodLpJzzA%2BejtZsfL%2BXOvOaDa%2FWVRwUDJzqiOT0gMQ0qB68%2BDcipeNwQcJ798aH%2Bxiha%2Fx%2Bw4wOdARJrAcKWzkUc1avDZoHB9w61T5Pn%2FPcgVRZtKtKy2ePFbeJs88RWiJ710PKPcVYQ97VtcbM9aNSQOiLgM8MJpRg3C%2BZ%2FV3iV5gvXwVh%2FTe4EAKOpT2z4%2B6pAReOuw1NQgmfTPkX0P2HaWHJmOd%2FdFzP46CGNjZZ%2BhouulYnzlmGCwgKE5SznzFLvZJGvdxWBtO8Z1gR9Afk5lAsEwNVZhCtEkCQpuRssrSjH%2BsWrf8lBdO9%2By8Hq6JQngQRHghe7obxjx5fg0phnzUiZLnY9WIJCrcVbGA0C%2FF71Diqoi19i4WbrFMcAVJ72%2FWUmOfkEbgn6mfZ5pJMa9kHLDpM6PK%2Biw4cf96b7W9zczmXr6mbwuDGoGQbMJHsscQGOqUBWGSBTk8A6n8oLrlfV1nhtllP8XzxDbRIBrPLcsGFgrTxvEqFmyeZdyPHc0n3Raufq5AC6pIVmRKhGZ3tum6zUOl7SguY%2BVoS9BkD12zUrStU1Ar1DM37KYKx5go1N79PChbJpl2zFQiYHUWLoa5l5on9wGUdHd%2FseHhUK%2BXipkhL71gpFRbBuPThV%2FZ04ki5%2BckqPbP9gi1WxCiROVJ2CD4xs4Pv&X-Amz-Signature=8cc4963172923bcab42181142f618abea9bfefee0d02d0e42b4f05f3fb61c03c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675KJWPS6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGsGwm%2FMox35jcjCPa0owGBwZLhdroVlhPz3LvC0Wz%2BAIgDyRwIMLC27RgxZBt5MOg9DbIxvH9dCwX%2BW32rVc2Vh8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH6Mw0%2FBt1v9GmrHircA6DiIZJRNUK3mlQQhaQQ4t9ekfO4zdEOfhcOzkJHjLdwme6fHxtrYpYlYcxIuHJ5OTF5eFATdJP7BKKv%2BWUxYbS%2FCXF4R0IfZvFd0XeKNeKpCHt7xntnNBEJjuSLr0A9hKkYKMD7kD93NG3iNVhf06rKC9xM9FgKnsuCSMqthkLBrayelhvcTr780RYY9fodLpJzzA%2BejtZsfL%2BXOvOaDa%2FWVRwUDJzqiOT0gMQ0qB68%2BDcipeNwQcJ798aH%2Bxiha%2Fx%2Bw4wOdARJrAcKWzkUc1avDZoHB9w61T5Pn%2FPcgVRZtKtKy2ePFbeJs88RWiJ710PKPcVYQ97VtcbM9aNSQOiLgM8MJpRg3C%2BZ%2FV3iV5gvXwVh%2FTe4EAKOpT2z4%2B6pAReOuw1NQgmfTPkX0P2HaWHJmOd%2FdFzP46CGNjZZ%2BhouulYnzlmGCwgKE5SznzFLvZJGvdxWBtO8Z1gR9Afk5lAsEwNVZhCtEkCQpuRssrSjH%2BsWrf8lBdO9%2By8Hq6JQngQRHghe7obxjx5fg0phnzUiZLnY9WIJCrcVbGA0C%2FF71Diqoi19i4WbrFMcAVJ72%2FWUmOfkEbgn6mfZ5pJMa9kHLDpM6PK%2Biw4cf96b7W9zczmXr6mbwuDGoGQbMJHsscQGOqUBWGSBTk8A6n8oLrlfV1nhtllP8XzxDbRIBrPLcsGFgrTxvEqFmyeZdyPHc0n3Raufq5AC6pIVmRKhGZ3tum6zUOl7SguY%2BVoS9BkD12zUrStU1Ar1DM37KYKx5go1N79PChbJpl2zFQiYHUWLoa5l5on9wGUdHd%2FseHhUK%2BXipkhL71gpFRbBuPThV%2FZ04ki5%2BckqPbP9gi1WxCiROVJ2CD4xs4Pv&X-Amz-Signature=6363b5a8a5064166e69bdf79ee0f43dd5f82ce24a1f66b0c6cf7412976e78261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675KJWPS6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGsGwm%2FMox35jcjCPa0owGBwZLhdroVlhPz3LvC0Wz%2BAIgDyRwIMLC27RgxZBt5MOg9DbIxvH9dCwX%2BW32rVc2Vh8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH6Mw0%2FBt1v9GmrHircA6DiIZJRNUK3mlQQhaQQ4t9ekfO4zdEOfhcOzkJHjLdwme6fHxtrYpYlYcxIuHJ5OTF5eFATdJP7BKKv%2BWUxYbS%2FCXF4R0IfZvFd0XeKNeKpCHt7xntnNBEJjuSLr0A9hKkYKMD7kD93NG3iNVhf06rKC9xM9FgKnsuCSMqthkLBrayelhvcTr780RYY9fodLpJzzA%2BejtZsfL%2BXOvOaDa%2FWVRwUDJzqiOT0gMQ0qB68%2BDcipeNwQcJ798aH%2Bxiha%2Fx%2Bw4wOdARJrAcKWzkUc1avDZoHB9w61T5Pn%2FPcgVRZtKtKy2ePFbeJs88RWiJ710PKPcVYQ97VtcbM9aNSQOiLgM8MJpRg3C%2BZ%2FV3iV5gvXwVh%2FTe4EAKOpT2z4%2B6pAReOuw1NQgmfTPkX0P2HaWHJmOd%2FdFzP46CGNjZZ%2BhouulYnzlmGCwgKE5SznzFLvZJGvdxWBtO8Z1gR9Afk5lAsEwNVZhCtEkCQpuRssrSjH%2BsWrf8lBdO9%2By8Hq6JQngQRHghe7obxjx5fg0phnzUiZLnY9WIJCrcVbGA0C%2FF71Diqoi19i4WbrFMcAVJ72%2FWUmOfkEbgn6mfZ5pJMa9kHLDpM6PK%2Biw4cf96b7W9zczmXr6mbwuDGoGQbMJHsscQGOqUBWGSBTk8A6n8oLrlfV1nhtllP8XzxDbRIBrPLcsGFgrTxvEqFmyeZdyPHc0n3Raufq5AC6pIVmRKhGZ3tum6zUOl7SguY%2BVoS9BkD12zUrStU1Ar1DM37KYKx5go1N79PChbJpl2zFQiYHUWLoa5l5on9wGUdHd%2FseHhUK%2BXipkhL71gpFRbBuPThV%2FZ04ki5%2BckqPbP9gi1WxCiROVJ2CD4xs4Pv&X-Amz-Signature=80ba965692efe376cbc0d7a1a1b040802bfd4910bc92804debebf6ab8814b63e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675KJWPS6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGsGwm%2FMox35jcjCPa0owGBwZLhdroVlhPz3LvC0Wz%2BAIgDyRwIMLC27RgxZBt5MOg9DbIxvH9dCwX%2BW32rVc2Vh8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH6Mw0%2FBt1v9GmrHircA6DiIZJRNUK3mlQQhaQQ4t9ekfO4zdEOfhcOzkJHjLdwme6fHxtrYpYlYcxIuHJ5OTF5eFATdJP7BKKv%2BWUxYbS%2FCXF4R0IfZvFd0XeKNeKpCHt7xntnNBEJjuSLr0A9hKkYKMD7kD93NG3iNVhf06rKC9xM9FgKnsuCSMqthkLBrayelhvcTr780RYY9fodLpJzzA%2BejtZsfL%2BXOvOaDa%2FWVRwUDJzqiOT0gMQ0qB68%2BDcipeNwQcJ798aH%2Bxiha%2Fx%2Bw4wOdARJrAcKWzkUc1avDZoHB9w61T5Pn%2FPcgVRZtKtKy2ePFbeJs88RWiJ710PKPcVYQ97VtcbM9aNSQOiLgM8MJpRg3C%2BZ%2FV3iV5gvXwVh%2FTe4EAKOpT2z4%2B6pAReOuw1NQgmfTPkX0P2HaWHJmOd%2FdFzP46CGNjZZ%2BhouulYnzlmGCwgKE5SznzFLvZJGvdxWBtO8Z1gR9Afk5lAsEwNVZhCtEkCQpuRssrSjH%2BsWrf8lBdO9%2By8Hq6JQngQRHghe7obxjx5fg0phnzUiZLnY9WIJCrcVbGA0C%2FF71Diqoi19i4WbrFMcAVJ72%2FWUmOfkEbgn6mfZ5pJMa9kHLDpM6PK%2Biw4cf96b7W9zczmXr6mbwuDGoGQbMJHsscQGOqUBWGSBTk8A6n8oLrlfV1nhtllP8XzxDbRIBrPLcsGFgrTxvEqFmyeZdyPHc0n3Raufq5AC6pIVmRKhGZ3tum6zUOl7SguY%2BVoS9BkD12zUrStU1Ar1DM37KYKx5go1N79PChbJpl2zFQiYHUWLoa5l5on9wGUdHd%2FseHhUK%2BXipkhL71gpFRbBuPThV%2FZ04ki5%2BckqPbP9gi1WxCiROVJ2CD4xs4Pv&X-Amz-Signature=b5c66e69ab6d25ab609c4b962d8173393dc8fc199fab247e5c3c1d04f814edfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675KJWPS6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGsGwm%2FMox35jcjCPa0owGBwZLhdroVlhPz3LvC0Wz%2BAIgDyRwIMLC27RgxZBt5MOg9DbIxvH9dCwX%2BW32rVc2Vh8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH6Mw0%2FBt1v9GmrHircA6DiIZJRNUK3mlQQhaQQ4t9ekfO4zdEOfhcOzkJHjLdwme6fHxtrYpYlYcxIuHJ5OTF5eFATdJP7BKKv%2BWUxYbS%2FCXF4R0IfZvFd0XeKNeKpCHt7xntnNBEJjuSLr0A9hKkYKMD7kD93NG3iNVhf06rKC9xM9FgKnsuCSMqthkLBrayelhvcTr780RYY9fodLpJzzA%2BejtZsfL%2BXOvOaDa%2FWVRwUDJzqiOT0gMQ0qB68%2BDcipeNwQcJ798aH%2Bxiha%2Fx%2Bw4wOdARJrAcKWzkUc1avDZoHB9w61T5Pn%2FPcgVRZtKtKy2ePFbeJs88RWiJ710PKPcVYQ97VtcbM9aNSQOiLgM8MJpRg3C%2BZ%2FV3iV5gvXwVh%2FTe4EAKOpT2z4%2B6pAReOuw1NQgmfTPkX0P2HaWHJmOd%2FdFzP46CGNjZZ%2BhouulYnzlmGCwgKE5SznzFLvZJGvdxWBtO8Z1gR9Afk5lAsEwNVZhCtEkCQpuRssrSjH%2BsWrf8lBdO9%2By8Hq6JQngQRHghe7obxjx5fg0phnzUiZLnY9WIJCrcVbGA0C%2FF71Diqoi19i4WbrFMcAVJ72%2FWUmOfkEbgn6mfZ5pJMa9kHLDpM6PK%2Biw4cf96b7W9zczmXr6mbwuDGoGQbMJHsscQGOqUBWGSBTk8A6n8oLrlfV1nhtllP8XzxDbRIBrPLcsGFgrTxvEqFmyeZdyPHc0n3Raufq5AC6pIVmRKhGZ3tum6zUOl7SguY%2BVoS9BkD12zUrStU1Ar1DM37KYKx5go1N79PChbJpl2zFQiYHUWLoa5l5on9wGUdHd%2FseHhUK%2BXipkhL71gpFRbBuPThV%2FZ04ki5%2BckqPbP9gi1WxCiROVJ2CD4xs4Pv&X-Amz-Signature=b9904ec6932384ad483d2dbd93b36808c1cd3f53b4773532c70300218d376a00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675KJWPS6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGsGwm%2FMox35jcjCPa0owGBwZLhdroVlhPz3LvC0Wz%2BAIgDyRwIMLC27RgxZBt5MOg9DbIxvH9dCwX%2BW32rVc2Vh8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH6Mw0%2FBt1v9GmrHircA6DiIZJRNUK3mlQQhaQQ4t9ekfO4zdEOfhcOzkJHjLdwme6fHxtrYpYlYcxIuHJ5OTF5eFATdJP7BKKv%2BWUxYbS%2FCXF4R0IfZvFd0XeKNeKpCHt7xntnNBEJjuSLr0A9hKkYKMD7kD93NG3iNVhf06rKC9xM9FgKnsuCSMqthkLBrayelhvcTr780RYY9fodLpJzzA%2BejtZsfL%2BXOvOaDa%2FWVRwUDJzqiOT0gMQ0qB68%2BDcipeNwQcJ798aH%2Bxiha%2Fx%2Bw4wOdARJrAcKWzkUc1avDZoHB9w61T5Pn%2FPcgVRZtKtKy2ePFbeJs88RWiJ710PKPcVYQ97VtcbM9aNSQOiLgM8MJpRg3C%2BZ%2FV3iV5gvXwVh%2FTe4EAKOpT2z4%2B6pAReOuw1NQgmfTPkX0P2HaWHJmOd%2FdFzP46CGNjZZ%2BhouulYnzlmGCwgKE5SznzFLvZJGvdxWBtO8Z1gR9Afk5lAsEwNVZhCtEkCQpuRssrSjH%2BsWrf8lBdO9%2By8Hq6JQngQRHghe7obxjx5fg0phnzUiZLnY9WIJCrcVbGA0C%2FF71Diqoi19i4WbrFMcAVJ72%2FWUmOfkEbgn6mfZ5pJMa9kHLDpM6PK%2Biw4cf96b7W9zczmXr6mbwuDGoGQbMJHsscQGOqUBWGSBTk8A6n8oLrlfV1nhtllP8XzxDbRIBrPLcsGFgrTxvEqFmyeZdyPHc0n3Raufq5AC6pIVmRKhGZ3tum6zUOl7SguY%2BVoS9BkD12zUrStU1Ar1DM37KYKx5go1N79PChbJpl2zFQiYHUWLoa5l5on9wGUdHd%2FseHhUK%2BXipkhL71gpFRbBuPThV%2FZ04ki5%2BckqPbP9gi1WxCiROVJ2CD4xs4Pv&X-Amz-Signature=b416cc4fb5ed114a698dab7f3452ddb969cb64b3efa229c83022fa279d29b844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675KJWPS6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGsGwm%2FMox35jcjCPa0owGBwZLhdroVlhPz3LvC0Wz%2BAIgDyRwIMLC27RgxZBt5MOg9DbIxvH9dCwX%2BW32rVc2Vh8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH6Mw0%2FBt1v9GmrHircA6DiIZJRNUK3mlQQhaQQ4t9ekfO4zdEOfhcOzkJHjLdwme6fHxtrYpYlYcxIuHJ5OTF5eFATdJP7BKKv%2BWUxYbS%2FCXF4R0IfZvFd0XeKNeKpCHt7xntnNBEJjuSLr0A9hKkYKMD7kD93NG3iNVhf06rKC9xM9FgKnsuCSMqthkLBrayelhvcTr780RYY9fodLpJzzA%2BejtZsfL%2BXOvOaDa%2FWVRwUDJzqiOT0gMQ0qB68%2BDcipeNwQcJ798aH%2Bxiha%2Fx%2Bw4wOdARJrAcKWzkUc1avDZoHB9w61T5Pn%2FPcgVRZtKtKy2ePFbeJs88RWiJ710PKPcVYQ97VtcbM9aNSQOiLgM8MJpRg3C%2BZ%2FV3iV5gvXwVh%2FTe4EAKOpT2z4%2B6pAReOuw1NQgmfTPkX0P2HaWHJmOd%2FdFzP46CGNjZZ%2BhouulYnzlmGCwgKE5SznzFLvZJGvdxWBtO8Z1gR9Afk5lAsEwNVZhCtEkCQpuRssrSjH%2BsWrf8lBdO9%2By8Hq6JQngQRHghe7obxjx5fg0phnzUiZLnY9WIJCrcVbGA0C%2FF71Diqoi19i4WbrFMcAVJ72%2FWUmOfkEbgn6mfZ5pJMa9kHLDpM6PK%2Biw4cf96b7W9zczmXr6mbwuDGoGQbMJHsscQGOqUBWGSBTk8A6n8oLrlfV1nhtllP8XzxDbRIBrPLcsGFgrTxvEqFmyeZdyPHc0n3Raufq5AC6pIVmRKhGZ3tum6zUOl7SguY%2BVoS9BkD12zUrStU1Ar1DM37KYKx5go1N79PChbJpl2zFQiYHUWLoa5l5on9wGUdHd%2FseHhUK%2BXipkhL71gpFRbBuPThV%2FZ04ki5%2BckqPbP9gi1WxCiROVJ2CD4xs4Pv&X-Amz-Signature=311542f181095ec0ec001aa444e6bffbc4ea91754e8380e54dbf906b14b38b38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675KJWPS6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGsGwm%2FMox35jcjCPa0owGBwZLhdroVlhPz3LvC0Wz%2BAIgDyRwIMLC27RgxZBt5MOg9DbIxvH9dCwX%2BW32rVc2Vh8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH6Mw0%2FBt1v9GmrHircA6DiIZJRNUK3mlQQhaQQ4t9ekfO4zdEOfhcOzkJHjLdwme6fHxtrYpYlYcxIuHJ5OTF5eFATdJP7BKKv%2BWUxYbS%2FCXF4R0IfZvFd0XeKNeKpCHt7xntnNBEJjuSLr0A9hKkYKMD7kD93NG3iNVhf06rKC9xM9FgKnsuCSMqthkLBrayelhvcTr780RYY9fodLpJzzA%2BejtZsfL%2BXOvOaDa%2FWVRwUDJzqiOT0gMQ0qB68%2BDcipeNwQcJ798aH%2Bxiha%2Fx%2Bw4wOdARJrAcKWzkUc1avDZoHB9w61T5Pn%2FPcgVRZtKtKy2ePFbeJs88RWiJ710PKPcVYQ97VtcbM9aNSQOiLgM8MJpRg3C%2BZ%2FV3iV5gvXwVh%2FTe4EAKOpT2z4%2B6pAReOuw1NQgmfTPkX0P2HaWHJmOd%2FdFzP46CGNjZZ%2BhouulYnzlmGCwgKE5SznzFLvZJGvdxWBtO8Z1gR9Afk5lAsEwNVZhCtEkCQpuRssrSjH%2BsWrf8lBdO9%2By8Hq6JQngQRHghe7obxjx5fg0phnzUiZLnY9WIJCrcVbGA0C%2FF71Diqoi19i4WbrFMcAVJ72%2FWUmOfkEbgn6mfZ5pJMa9kHLDpM6PK%2Biw4cf96b7W9zczmXr6mbwuDGoGQbMJHsscQGOqUBWGSBTk8A6n8oLrlfV1nhtllP8XzxDbRIBrPLcsGFgrTxvEqFmyeZdyPHc0n3Raufq5AC6pIVmRKhGZ3tum6zUOl7SguY%2BVoS9BkD12zUrStU1Ar1DM37KYKx5go1N79PChbJpl2zFQiYHUWLoa5l5on9wGUdHd%2FseHhUK%2BXipkhL71gpFRbBuPThV%2FZ04ki5%2BckqPbP9gi1WxCiROVJ2CD4xs4Pv&X-Amz-Signature=83a75281f3b1d4ef9d0930ca85f049749d1dfa4322e9b69f4d9339b3521d0313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675KJWPS6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGsGwm%2FMox35jcjCPa0owGBwZLhdroVlhPz3LvC0Wz%2BAIgDyRwIMLC27RgxZBt5MOg9DbIxvH9dCwX%2BW32rVc2Vh8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH6Mw0%2FBt1v9GmrHircA6DiIZJRNUK3mlQQhaQQ4t9ekfO4zdEOfhcOzkJHjLdwme6fHxtrYpYlYcxIuHJ5OTF5eFATdJP7BKKv%2BWUxYbS%2FCXF4R0IfZvFd0XeKNeKpCHt7xntnNBEJjuSLr0A9hKkYKMD7kD93NG3iNVhf06rKC9xM9FgKnsuCSMqthkLBrayelhvcTr780RYY9fodLpJzzA%2BejtZsfL%2BXOvOaDa%2FWVRwUDJzqiOT0gMQ0qB68%2BDcipeNwQcJ798aH%2Bxiha%2Fx%2Bw4wOdARJrAcKWzkUc1avDZoHB9w61T5Pn%2FPcgVRZtKtKy2ePFbeJs88RWiJ710PKPcVYQ97VtcbM9aNSQOiLgM8MJpRg3C%2BZ%2FV3iV5gvXwVh%2FTe4EAKOpT2z4%2B6pAReOuw1NQgmfTPkX0P2HaWHJmOd%2FdFzP46CGNjZZ%2BhouulYnzlmGCwgKE5SznzFLvZJGvdxWBtO8Z1gR9Afk5lAsEwNVZhCtEkCQpuRssrSjH%2BsWrf8lBdO9%2By8Hq6JQngQRHghe7obxjx5fg0phnzUiZLnY9WIJCrcVbGA0C%2FF71Diqoi19i4WbrFMcAVJ72%2FWUmOfkEbgn6mfZ5pJMa9kHLDpM6PK%2Biw4cf96b7W9zczmXr6mbwuDGoGQbMJHsscQGOqUBWGSBTk8A6n8oLrlfV1nhtllP8XzxDbRIBrPLcsGFgrTxvEqFmyeZdyPHc0n3Raufq5AC6pIVmRKhGZ3tum6zUOl7SguY%2BVoS9BkD12zUrStU1Ar1DM37KYKx5go1N79PChbJpl2zFQiYHUWLoa5l5on9wGUdHd%2FseHhUK%2BXipkhL71gpFRbBuPThV%2FZ04ki5%2BckqPbP9gi1WxCiROVJ2CD4xs4Pv&X-Amz-Signature=aba62c0bd558070c329dbb42b2c4f1483107f5512ff2f25d25aa4cdcdee65018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675KJWPS6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGsGwm%2FMox35jcjCPa0owGBwZLhdroVlhPz3LvC0Wz%2BAIgDyRwIMLC27RgxZBt5MOg9DbIxvH9dCwX%2BW32rVc2Vh8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH6Mw0%2FBt1v9GmrHircA6DiIZJRNUK3mlQQhaQQ4t9ekfO4zdEOfhcOzkJHjLdwme6fHxtrYpYlYcxIuHJ5OTF5eFATdJP7BKKv%2BWUxYbS%2FCXF4R0IfZvFd0XeKNeKpCHt7xntnNBEJjuSLr0A9hKkYKMD7kD93NG3iNVhf06rKC9xM9FgKnsuCSMqthkLBrayelhvcTr780RYY9fodLpJzzA%2BejtZsfL%2BXOvOaDa%2FWVRwUDJzqiOT0gMQ0qB68%2BDcipeNwQcJ798aH%2Bxiha%2Fx%2Bw4wOdARJrAcKWzkUc1avDZoHB9w61T5Pn%2FPcgVRZtKtKy2ePFbeJs88RWiJ710PKPcVYQ97VtcbM9aNSQOiLgM8MJpRg3C%2BZ%2FV3iV5gvXwVh%2FTe4EAKOpT2z4%2B6pAReOuw1NQgmfTPkX0P2HaWHJmOd%2FdFzP46CGNjZZ%2BhouulYnzlmGCwgKE5SznzFLvZJGvdxWBtO8Z1gR9Afk5lAsEwNVZhCtEkCQpuRssrSjH%2BsWrf8lBdO9%2By8Hq6JQngQRHghe7obxjx5fg0phnzUiZLnY9WIJCrcVbGA0C%2FF71Diqoi19i4WbrFMcAVJ72%2FWUmOfkEbgn6mfZ5pJMa9kHLDpM6PK%2Biw4cf96b7W9zczmXr6mbwuDGoGQbMJHsscQGOqUBWGSBTk8A6n8oLrlfV1nhtllP8XzxDbRIBrPLcsGFgrTxvEqFmyeZdyPHc0n3Raufq5AC6pIVmRKhGZ3tum6zUOl7SguY%2BVoS9BkD12zUrStU1Ar1DM37KYKx5go1N79PChbJpl2zFQiYHUWLoa5l5on9wGUdHd%2FseHhUK%2BXipkhL71gpFRbBuPThV%2FZ04ki5%2BckqPbP9gi1WxCiROVJ2CD4xs4Pv&X-Amz-Signature=7b73c2e5bf7f66d1bc04df6e7d9dda48bad9688ac03e95e1834f7a99b0b274d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

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
        <surface><friction><ode>
          <mu>1.0</mu>
          <mu2>1.0</mu2>
          <fdir1>1 0 0</fdir1>
        </ode></friction></surface>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675KJWPS6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGsGwm%2FMox35jcjCPa0owGBwZLhdroVlhPz3LvC0Wz%2BAIgDyRwIMLC27RgxZBt5MOg9DbIxvH9dCwX%2BW32rVc2Vh8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH6Mw0%2FBt1v9GmrHircA6DiIZJRNUK3mlQQhaQQ4t9ekfO4zdEOfhcOzkJHjLdwme6fHxtrYpYlYcxIuHJ5OTF5eFATdJP7BKKv%2BWUxYbS%2FCXF4R0IfZvFd0XeKNeKpCHt7xntnNBEJjuSLr0A9hKkYKMD7kD93NG3iNVhf06rKC9xM9FgKnsuCSMqthkLBrayelhvcTr780RYY9fodLpJzzA%2BejtZsfL%2BXOvOaDa%2FWVRwUDJzqiOT0gMQ0qB68%2BDcipeNwQcJ798aH%2Bxiha%2Fx%2Bw4wOdARJrAcKWzkUc1avDZoHB9w61T5Pn%2FPcgVRZtKtKy2ePFbeJs88RWiJ710PKPcVYQ97VtcbM9aNSQOiLgM8MJpRg3C%2BZ%2FV3iV5gvXwVh%2FTe4EAKOpT2z4%2B6pAReOuw1NQgmfTPkX0P2HaWHJmOd%2FdFzP46CGNjZZ%2BhouulYnzlmGCwgKE5SznzFLvZJGvdxWBtO8Z1gR9Afk5lAsEwNVZhCtEkCQpuRssrSjH%2BsWrf8lBdO9%2By8Hq6JQngQRHghe7obxjx5fg0phnzUiZLnY9WIJCrcVbGA0C%2FF71Diqoi19i4WbrFMcAVJ72%2FWUmOfkEbgn6mfZ5pJMa9kHLDpM6PK%2Biw4cf96b7W9zczmXr6mbwuDGoGQbMJHsscQGOqUBWGSBTk8A6n8oLrlfV1nhtllP8XzxDbRIBrPLcsGFgrTxvEqFmyeZdyPHc0n3Raufq5AC6pIVmRKhGZ3tum6zUOl7SguY%2BVoS9BkD12zUrStU1Ar1DM37KYKx5go1N79PChbJpl2zFQiYHUWLoa5l5on9wGUdHd%2FseHhUK%2BXipkhL71gpFRbBuPThV%2FZ04ki5%2BckqPbP9gi1WxCiROVJ2CD4xs4Pv&X-Amz-Signature=d719e800d3e694fd8b7ef7b353299b8280b86819f2a1d8cce6f879e84d5bb601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675KJWPS6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGsGwm%2FMox35jcjCPa0owGBwZLhdroVlhPz3LvC0Wz%2BAIgDyRwIMLC27RgxZBt5MOg9DbIxvH9dCwX%2BW32rVc2Vh8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH6Mw0%2FBt1v9GmrHircA6DiIZJRNUK3mlQQhaQQ4t9ekfO4zdEOfhcOzkJHjLdwme6fHxtrYpYlYcxIuHJ5OTF5eFATdJP7BKKv%2BWUxYbS%2FCXF4R0IfZvFd0XeKNeKpCHt7xntnNBEJjuSLr0A9hKkYKMD7kD93NG3iNVhf06rKC9xM9FgKnsuCSMqthkLBrayelhvcTr780RYY9fodLpJzzA%2BejtZsfL%2BXOvOaDa%2FWVRwUDJzqiOT0gMQ0qB68%2BDcipeNwQcJ798aH%2Bxiha%2Fx%2Bw4wOdARJrAcKWzkUc1avDZoHB9w61T5Pn%2FPcgVRZtKtKy2ePFbeJs88RWiJ710PKPcVYQ97VtcbM9aNSQOiLgM8MJpRg3C%2BZ%2FV3iV5gvXwVh%2FTe4EAKOpT2z4%2B6pAReOuw1NQgmfTPkX0P2HaWHJmOd%2FdFzP46CGNjZZ%2BhouulYnzlmGCwgKE5SznzFLvZJGvdxWBtO8Z1gR9Afk5lAsEwNVZhCtEkCQpuRssrSjH%2BsWrf8lBdO9%2By8Hq6JQngQRHghe7obxjx5fg0phnzUiZLnY9WIJCrcVbGA0C%2FF71Diqoi19i4WbrFMcAVJ72%2FWUmOfkEbgn6mfZ5pJMa9kHLDpM6PK%2Biw4cf96b7W9zczmXr6mbwuDGoGQbMJHsscQGOqUBWGSBTk8A6n8oLrlfV1nhtllP8XzxDbRIBrPLcsGFgrTxvEqFmyeZdyPHc0n3Raufq5AC6pIVmRKhGZ3tum6zUOl7SguY%2BVoS9BkD12zUrStU1Ar1DM37KYKx5go1N79PChbJpl2zFQiYHUWLoa5l5on9wGUdHd%2FseHhUK%2BXipkhL71gpFRbBuPThV%2FZ04ki5%2BckqPbP9gi1WxCiROVJ2CD4xs4Pv&X-Amz-Signature=d7c4346deef9f1a7179e8bdbee85b52c1ecd6e28ddbed2e1142161f25c6ea360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675KJWPS6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGsGwm%2FMox35jcjCPa0owGBwZLhdroVlhPz3LvC0Wz%2BAIgDyRwIMLC27RgxZBt5MOg9DbIxvH9dCwX%2BW32rVc2Vh8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH6Mw0%2FBt1v9GmrHircA6DiIZJRNUK3mlQQhaQQ4t9ekfO4zdEOfhcOzkJHjLdwme6fHxtrYpYlYcxIuHJ5OTF5eFATdJP7BKKv%2BWUxYbS%2FCXF4R0IfZvFd0XeKNeKpCHt7xntnNBEJjuSLr0A9hKkYKMD7kD93NG3iNVhf06rKC9xM9FgKnsuCSMqthkLBrayelhvcTr780RYY9fodLpJzzA%2BejtZsfL%2BXOvOaDa%2FWVRwUDJzqiOT0gMQ0qB68%2BDcipeNwQcJ798aH%2Bxiha%2Fx%2Bw4wOdARJrAcKWzkUc1avDZoHB9w61T5Pn%2FPcgVRZtKtKy2ePFbeJs88RWiJ710PKPcVYQ97VtcbM9aNSQOiLgM8MJpRg3C%2BZ%2FV3iV5gvXwVh%2FTe4EAKOpT2z4%2B6pAReOuw1NQgmfTPkX0P2HaWHJmOd%2FdFzP46CGNjZZ%2BhouulYnzlmGCwgKE5SznzFLvZJGvdxWBtO8Z1gR9Afk5lAsEwNVZhCtEkCQpuRssrSjH%2BsWrf8lBdO9%2By8Hq6JQngQRHghe7obxjx5fg0phnzUiZLnY9WIJCrcVbGA0C%2FF71Diqoi19i4WbrFMcAVJ72%2FWUmOfkEbgn6mfZ5pJMa9kHLDpM6PK%2Biw4cf96b7W9zczmXr6mbwuDGoGQbMJHsscQGOqUBWGSBTk8A6n8oLrlfV1nhtllP8XzxDbRIBrPLcsGFgrTxvEqFmyeZdyPHc0n3Raufq5AC6pIVmRKhGZ3tum6zUOl7SguY%2BVoS9BkD12zUrStU1Ar1DM37KYKx5go1N79PChbJpl2zFQiYHUWLoa5l5on9wGUdHd%2FseHhUK%2BXipkhL71gpFRbBuPThV%2FZ04ki5%2BckqPbP9gi1WxCiROVJ2CD4xs4Pv&X-Amz-Signature=95441fd58bd5b9ba30fa17371ed974be43b653be827a0ec0ab302cd31962b811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G4HYNVA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkQV7n0oPm8JVvQW4XlIXVWXR8Ti0VbOlkfYn%2FRUE%2BrAiEA%2BcFrqFCWsCGrE1I28FODwoMQV%2FgO2b4ckM0SGoALCIIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHu3PM3QZu4E92CGfyrcA53mYEyMobz%2BwcsjIY8MZsXBibxIh6hismvacCFks7%2BV1j3aZX19c3MFGzp49SJQ7XrYqm7iYuRe4peMbr%2Bxtna%2FRneecEN36nBDPpl4mZx7TtD%2BZlpA9udt4r%2BkLmUaENdORzp2dvbq1J%2Fgctx3FwwbENkg23CTAkWtPwPRLjUSsDn66OnORn%2BW4ViwsjRg3eyz5i0ashYi%2FMfnItdoLAy91PS6cO6THjAhVtVK7yN9IWH5HTBmSDh1OPaBClvnbSz37XB%2FPRjeu%2FNDxIfUyHkQiBXVXuKa5F%2BVpqYkEgkBEsKIttl5AQFdcOjZTBDd4%2B8jCIOZADrFQ8aEpxS8jXKaFE9%2F2wgV7x9tYyc6ujOYDF0sy8cu5%2B6poh0bii1vK6%2FrBvbCoNb5%2FLFSrvjTF%2FLR7unaDnaJuku8pzaJ4GS%2FpKBSIzF04OQNoGhjn1X0heSlL06%2BZR2HldVWQMIVvvBiI%2B5rv18JMcF1HnWy1g8NyteAjjGJwFI3n%2FN8DfXUcHAmzcXhbQZBnjp8rw9oPiqGbgsLNPAN0bcAzzLWag61n3ByT6ts7%2BOoPO%2BxQYLR7RJrDKs%2BtYxq5TOiKOO7JfsjAUxKdcDW4kLyiVeSQR4l8xHeU6fGm98Ngrj5MLPsscQGOqUBsgRYSOclKJ0eYIq19pPCBbv8QRVFklBtWRlKNh6slsl0OsmRouIZMB0m7T2ph0k5ktD0f%2BYZxWfUzkNorUQ10GdrhfiY5gxNmNyJsBvBD7LIFGlrQ5uYQ2W5A2Q9VyGa2cfiADWc919PzaMSNSd6xJFscl5rthY%2FralyEcadzsPkoeLE7yywsC23%2FTIoCpYkr4SZFFK99%2BFgIrpLs%2BKEhX88PeSH&X-Amz-Signature=f07474b0ebe5905883cc41f26df26264f0d0a1c3c493805df2dd77a56d7155e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G4HYNVA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkQV7n0oPm8JVvQW4XlIXVWXR8Ti0VbOlkfYn%2FRUE%2BrAiEA%2BcFrqFCWsCGrE1I28FODwoMQV%2FgO2b4ckM0SGoALCIIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHu3PM3QZu4E92CGfyrcA53mYEyMobz%2BwcsjIY8MZsXBibxIh6hismvacCFks7%2BV1j3aZX19c3MFGzp49SJQ7XrYqm7iYuRe4peMbr%2Bxtna%2FRneecEN36nBDPpl4mZx7TtD%2BZlpA9udt4r%2BkLmUaENdORzp2dvbq1J%2Fgctx3FwwbENkg23CTAkWtPwPRLjUSsDn66OnORn%2BW4ViwsjRg3eyz5i0ashYi%2FMfnItdoLAy91PS6cO6THjAhVtVK7yN9IWH5HTBmSDh1OPaBClvnbSz37XB%2FPRjeu%2FNDxIfUyHkQiBXVXuKa5F%2BVpqYkEgkBEsKIttl5AQFdcOjZTBDd4%2B8jCIOZADrFQ8aEpxS8jXKaFE9%2F2wgV7x9tYyc6ujOYDF0sy8cu5%2B6poh0bii1vK6%2FrBvbCoNb5%2FLFSrvjTF%2FLR7unaDnaJuku8pzaJ4GS%2FpKBSIzF04OQNoGhjn1X0heSlL06%2BZR2HldVWQMIVvvBiI%2B5rv18JMcF1HnWy1g8NyteAjjGJwFI3n%2FN8DfXUcHAmzcXhbQZBnjp8rw9oPiqGbgsLNPAN0bcAzzLWag61n3ByT6ts7%2BOoPO%2BxQYLR7RJrDKs%2BtYxq5TOiKOO7JfsjAUxKdcDW4kLyiVeSQR4l8xHeU6fGm98Ngrj5MLPsscQGOqUBsgRYSOclKJ0eYIq19pPCBbv8QRVFklBtWRlKNh6slsl0OsmRouIZMB0m7T2ph0k5ktD0f%2BYZxWfUzkNorUQ10GdrhfiY5gxNmNyJsBvBD7LIFGlrQ5uYQ2W5A2Q9VyGa2cfiADWc919PzaMSNSd6xJFscl5rthY%2FralyEcadzsPkoeLE7yywsC23%2FTIoCpYkr4SZFFK99%2BFgIrpLs%2BKEhX88PeSH&X-Amz-Signature=a96ea8dea208468c9d16283d323dbb904488f2164b51c7253cfc6179a25c0eda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G4HYNVA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkQV7n0oPm8JVvQW4XlIXVWXR8Ti0VbOlkfYn%2FRUE%2BrAiEA%2BcFrqFCWsCGrE1I28FODwoMQV%2FgO2b4ckM0SGoALCIIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHu3PM3QZu4E92CGfyrcA53mYEyMobz%2BwcsjIY8MZsXBibxIh6hismvacCFks7%2BV1j3aZX19c3MFGzp49SJQ7XrYqm7iYuRe4peMbr%2Bxtna%2FRneecEN36nBDPpl4mZx7TtD%2BZlpA9udt4r%2BkLmUaENdORzp2dvbq1J%2Fgctx3FwwbENkg23CTAkWtPwPRLjUSsDn66OnORn%2BW4ViwsjRg3eyz5i0ashYi%2FMfnItdoLAy91PS6cO6THjAhVtVK7yN9IWH5HTBmSDh1OPaBClvnbSz37XB%2FPRjeu%2FNDxIfUyHkQiBXVXuKa5F%2BVpqYkEgkBEsKIttl5AQFdcOjZTBDd4%2B8jCIOZADrFQ8aEpxS8jXKaFE9%2F2wgV7x9tYyc6ujOYDF0sy8cu5%2B6poh0bii1vK6%2FrBvbCoNb5%2FLFSrvjTF%2FLR7unaDnaJuku8pzaJ4GS%2FpKBSIzF04OQNoGhjn1X0heSlL06%2BZR2HldVWQMIVvvBiI%2B5rv18JMcF1HnWy1g8NyteAjjGJwFI3n%2FN8DfXUcHAmzcXhbQZBnjp8rw9oPiqGbgsLNPAN0bcAzzLWag61n3ByT6ts7%2BOoPO%2BxQYLR7RJrDKs%2BtYxq5TOiKOO7JfsjAUxKdcDW4kLyiVeSQR4l8xHeU6fGm98Ngrj5MLPsscQGOqUBsgRYSOclKJ0eYIq19pPCBbv8QRVFklBtWRlKNh6slsl0OsmRouIZMB0m7T2ph0k5ktD0f%2BYZxWfUzkNorUQ10GdrhfiY5gxNmNyJsBvBD7LIFGlrQ5uYQ2W5A2Q9VyGa2cfiADWc919PzaMSNSd6xJFscl5rthY%2FralyEcadzsPkoeLE7yywsC23%2FTIoCpYkr4SZFFK99%2BFgIrpLs%2BKEhX88PeSH&X-Amz-Signature=e28c9c56006c7c497ae53ea9bcbf0d8f7d4fc23f9d7bb0802d1b3e8678f1dc33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G4HYNVA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkQV7n0oPm8JVvQW4XlIXVWXR8Ti0VbOlkfYn%2FRUE%2BrAiEA%2BcFrqFCWsCGrE1I28FODwoMQV%2FgO2b4ckM0SGoALCIIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHu3PM3QZu4E92CGfyrcA53mYEyMobz%2BwcsjIY8MZsXBibxIh6hismvacCFks7%2BV1j3aZX19c3MFGzp49SJQ7XrYqm7iYuRe4peMbr%2Bxtna%2FRneecEN36nBDPpl4mZx7TtD%2BZlpA9udt4r%2BkLmUaENdORzp2dvbq1J%2Fgctx3FwwbENkg23CTAkWtPwPRLjUSsDn66OnORn%2BW4ViwsjRg3eyz5i0ashYi%2FMfnItdoLAy91PS6cO6THjAhVtVK7yN9IWH5HTBmSDh1OPaBClvnbSz37XB%2FPRjeu%2FNDxIfUyHkQiBXVXuKa5F%2BVpqYkEgkBEsKIttl5AQFdcOjZTBDd4%2B8jCIOZADrFQ8aEpxS8jXKaFE9%2F2wgV7x9tYyc6ujOYDF0sy8cu5%2B6poh0bii1vK6%2FrBvbCoNb5%2FLFSrvjTF%2FLR7unaDnaJuku8pzaJ4GS%2FpKBSIzF04OQNoGhjn1X0heSlL06%2BZR2HldVWQMIVvvBiI%2B5rv18JMcF1HnWy1g8NyteAjjGJwFI3n%2FN8DfXUcHAmzcXhbQZBnjp8rw9oPiqGbgsLNPAN0bcAzzLWag61n3ByT6ts7%2BOoPO%2BxQYLR7RJrDKs%2BtYxq5TOiKOO7JfsjAUxKdcDW4kLyiVeSQR4l8xHeU6fGm98Ngrj5MLPsscQGOqUBsgRYSOclKJ0eYIq19pPCBbv8QRVFklBtWRlKNh6slsl0OsmRouIZMB0m7T2ph0k5ktD0f%2BYZxWfUzkNorUQ10GdrhfiY5gxNmNyJsBvBD7LIFGlrQ5uYQ2W5A2Q9VyGa2cfiADWc919PzaMSNSd6xJFscl5rthY%2FralyEcadzsPkoeLE7yywsC23%2FTIoCpYkr4SZFFK99%2BFgIrpLs%2BKEhX88PeSH&X-Amz-Signature=02888cd9972fc7e5d8f67763a3ed08642e80342ad068a08a8f1f5fefc51d474b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G4HYNVA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkQV7n0oPm8JVvQW4XlIXVWXR8Ti0VbOlkfYn%2FRUE%2BrAiEA%2BcFrqFCWsCGrE1I28FODwoMQV%2FgO2b4ckM0SGoALCIIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHu3PM3QZu4E92CGfyrcA53mYEyMobz%2BwcsjIY8MZsXBibxIh6hismvacCFks7%2BV1j3aZX19c3MFGzp49SJQ7XrYqm7iYuRe4peMbr%2Bxtna%2FRneecEN36nBDPpl4mZx7TtD%2BZlpA9udt4r%2BkLmUaENdORzp2dvbq1J%2Fgctx3FwwbENkg23CTAkWtPwPRLjUSsDn66OnORn%2BW4ViwsjRg3eyz5i0ashYi%2FMfnItdoLAy91PS6cO6THjAhVtVK7yN9IWH5HTBmSDh1OPaBClvnbSz37XB%2FPRjeu%2FNDxIfUyHkQiBXVXuKa5F%2BVpqYkEgkBEsKIttl5AQFdcOjZTBDd4%2B8jCIOZADrFQ8aEpxS8jXKaFE9%2F2wgV7x9tYyc6ujOYDF0sy8cu5%2B6poh0bii1vK6%2FrBvbCoNb5%2FLFSrvjTF%2FLR7unaDnaJuku8pzaJ4GS%2FpKBSIzF04OQNoGhjn1X0heSlL06%2BZR2HldVWQMIVvvBiI%2B5rv18JMcF1HnWy1g8NyteAjjGJwFI3n%2FN8DfXUcHAmzcXhbQZBnjp8rw9oPiqGbgsLNPAN0bcAzzLWag61n3ByT6ts7%2BOoPO%2BxQYLR7RJrDKs%2BtYxq5TOiKOO7JfsjAUxKdcDW4kLyiVeSQR4l8xHeU6fGm98Ngrj5MLPsscQGOqUBsgRYSOclKJ0eYIq19pPCBbv8QRVFklBtWRlKNh6slsl0OsmRouIZMB0m7T2ph0k5ktD0f%2BYZxWfUzkNorUQ10GdrhfiY5gxNmNyJsBvBD7LIFGlrQ5uYQ2W5A2Q9VyGa2cfiADWc919PzaMSNSd6xJFscl5rthY%2FralyEcadzsPkoeLE7yywsC23%2FTIoCpYkr4SZFFK99%2BFgIrpLs%2BKEhX88PeSH&X-Amz-Signature=ac735792847dbb1cc24afde905051726841cb98989d4694212da7633381c7f35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G4HYNVA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkQV7n0oPm8JVvQW4XlIXVWXR8Ti0VbOlkfYn%2FRUE%2BrAiEA%2BcFrqFCWsCGrE1I28FODwoMQV%2FgO2b4ckM0SGoALCIIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHu3PM3QZu4E92CGfyrcA53mYEyMobz%2BwcsjIY8MZsXBibxIh6hismvacCFks7%2BV1j3aZX19c3MFGzp49SJQ7XrYqm7iYuRe4peMbr%2Bxtna%2FRneecEN36nBDPpl4mZx7TtD%2BZlpA9udt4r%2BkLmUaENdORzp2dvbq1J%2Fgctx3FwwbENkg23CTAkWtPwPRLjUSsDn66OnORn%2BW4ViwsjRg3eyz5i0ashYi%2FMfnItdoLAy91PS6cO6THjAhVtVK7yN9IWH5HTBmSDh1OPaBClvnbSz37XB%2FPRjeu%2FNDxIfUyHkQiBXVXuKa5F%2BVpqYkEgkBEsKIttl5AQFdcOjZTBDd4%2B8jCIOZADrFQ8aEpxS8jXKaFE9%2F2wgV7x9tYyc6ujOYDF0sy8cu5%2B6poh0bii1vK6%2FrBvbCoNb5%2FLFSrvjTF%2FLR7unaDnaJuku8pzaJ4GS%2FpKBSIzF04OQNoGhjn1X0heSlL06%2BZR2HldVWQMIVvvBiI%2B5rv18JMcF1HnWy1g8NyteAjjGJwFI3n%2FN8DfXUcHAmzcXhbQZBnjp8rw9oPiqGbgsLNPAN0bcAzzLWag61n3ByT6ts7%2BOoPO%2BxQYLR7RJrDKs%2BtYxq5TOiKOO7JfsjAUxKdcDW4kLyiVeSQR4l8xHeU6fGm98Ngrj5MLPsscQGOqUBsgRYSOclKJ0eYIq19pPCBbv8QRVFklBtWRlKNh6slsl0OsmRouIZMB0m7T2ph0k5ktD0f%2BYZxWfUzkNorUQ10GdrhfiY5gxNmNyJsBvBD7LIFGlrQ5uYQ2W5A2Q9VyGa2cfiADWc919PzaMSNSd6xJFscl5rthY%2FralyEcadzsPkoeLE7yywsC23%2FTIoCpYkr4SZFFK99%2BFgIrpLs%2BKEhX88PeSH&X-Amz-Signature=e449af89725ff2e12b3cc37f056601278d750ba203a85cd6a22bc1fc4b649323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G4HYNVA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkQV7n0oPm8JVvQW4XlIXVWXR8Ti0VbOlkfYn%2FRUE%2BrAiEA%2BcFrqFCWsCGrE1I28FODwoMQV%2FgO2b4ckM0SGoALCIIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHu3PM3QZu4E92CGfyrcA53mYEyMobz%2BwcsjIY8MZsXBibxIh6hismvacCFks7%2BV1j3aZX19c3MFGzp49SJQ7XrYqm7iYuRe4peMbr%2Bxtna%2FRneecEN36nBDPpl4mZx7TtD%2BZlpA9udt4r%2BkLmUaENdORzp2dvbq1J%2Fgctx3FwwbENkg23CTAkWtPwPRLjUSsDn66OnORn%2BW4ViwsjRg3eyz5i0ashYi%2FMfnItdoLAy91PS6cO6THjAhVtVK7yN9IWH5HTBmSDh1OPaBClvnbSz37XB%2FPRjeu%2FNDxIfUyHkQiBXVXuKa5F%2BVpqYkEgkBEsKIttl5AQFdcOjZTBDd4%2B8jCIOZADrFQ8aEpxS8jXKaFE9%2F2wgV7x9tYyc6ujOYDF0sy8cu5%2B6poh0bii1vK6%2FrBvbCoNb5%2FLFSrvjTF%2FLR7unaDnaJuku8pzaJ4GS%2FpKBSIzF04OQNoGhjn1X0heSlL06%2BZR2HldVWQMIVvvBiI%2B5rv18JMcF1HnWy1g8NyteAjjGJwFI3n%2FN8DfXUcHAmzcXhbQZBnjp8rw9oPiqGbgsLNPAN0bcAzzLWag61n3ByT6ts7%2BOoPO%2BxQYLR7RJrDKs%2BtYxq5TOiKOO7JfsjAUxKdcDW4kLyiVeSQR4l8xHeU6fGm98Ngrj5MLPsscQGOqUBsgRYSOclKJ0eYIq19pPCBbv8QRVFklBtWRlKNh6slsl0OsmRouIZMB0m7T2ph0k5ktD0f%2BYZxWfUzkNorUQ10GdrhfiY5gxNmNyJsBvBD7LIFGlrQ5uYQ2W5A2Q9VyGa2cfiADWc919PzaMSNSd6xJFscl5rthY%2FralyEcadzsPkoeLE7yywsC23%2FTIoCpYkr4SZFFK99%2BFgIrpLs%2BKEhX88PeSH&X-Amz-Signature=f803c6dc5ecd0778e1ee7c27bb7fe7070222a058da6cd5b10b2e1ae70400ec61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
