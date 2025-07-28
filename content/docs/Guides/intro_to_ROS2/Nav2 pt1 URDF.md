---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T23:33:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T23:33:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXY2VUB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICJL2EReNr1GvC1DTMaQmIESFBIxqSurL958LIrF5Dv3AiEA5XF8rqNGcY1z66kyVTLc8K3rp9%2BlcQNFPhKLnRHBGB0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBp7piugXSv3t3hxircA4X9nb%2Fyx9nIAzCfPZ3NbIVK7kjyHPd8%2F5l7WtIJfG8hgM%2BiEHyvIO1309ydFcFLdj68xWr5Ewnxg10qnvo5qMOqPvnwO2QtPTVj6%2BAMs692mHItgoZg6xwwADG4BgNW4qjY9TXrCcBvnJucyO2xsLQsFzdooNI1F4t6rS%2FJJZS1%2FkhvWt2GrS18gDCNcLapnHa1CgsTnA8H2HDv%2FKz3pyVJQndgKWt0w7toJJh%2Br7Fbyi5w8EPLT0DjRn3oKN5NsUVnsQQwH4vGB8t7qE%2BYVx%2Bkr%2F0krxmdBbW%2BSbmfSY94IaHkaXE4hisCw9hzqnYRfpvSalgGRVnkmR03h0zhoHMfvqCxMeTokA1%2Fb81d6UCQVx6I4z3E5hFa%2Bk0nUaI4pH0gaUYBv%2FuvAxL%2BlLTHFL%2B%2BAcQoA4864y562whkyQHMBLnt8bz3VgqU0jHSBp39u4Ho05tJTkZxkZym%2FbXFsMv2BJ0%2FNT2S1TlT%2F%2Bu6xNwFwtgMkIHAvqnHjEKcmcEzaIhPasoYIWpYdYsKdOGmFtvUnjmd6KTL8BpxdPI0Btjoh1ZbMDq1deKaWPVpL6%2F1IceYzFw6RsAlEt9lG4zLhcfwa5T5vidc6U2JUS7sBU1NBBJ81E82obJcm%2BFUMKHumsQGOqUBCA1dRM6YmnpWSbs8HjgKNIxDVAVde%2BgdF7ezW7FigVs3C6jD4BOfwwZXVyLAd%2FuqmliF29fbDYAMRrrnoRCguycbq%2FgQtsf9j78OL6ftBTw6PcXm%2Bhj3Dl%2BKCKkWhZA8KOzajFKM%2Bv%2FKSKK%2B2OSzkZ1idmoRZEjNAXYIRhmi7DZl7Ooxv%2FQYafb2yzTyMun30BZc2p4PfiJWyoKSDEKDBHGAOaxA&X-Amz-Signature=d1ff2f780594c143dff92949c3251464831261adf6527f80f982fb9f448b05a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXY2VUB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICJL2EReNr1GvC1DTMaQmIESFBIxqSurL958LIrF5Dv3AiEA5XF8rqNGcY1z66kyVTLc8K3rp9%2BlcQNFPhKLnRHBGB0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBp7piugXSv3t3hxircA4X9nb%2Fyx9nIAzCfPZ3NbIVK7kjyHPd8%2F5l7WtIJfG8hgM%2BiEHyvIO1309ydFcFLdj68xWr5Ewnxg10qnvo5qMOqPvnwO2QtPTVj6%2BAMs692mHItgoZg6xwwADG4BgNW4qjY9TXrCcBvnJucyO2xsLQsFzdooNI1F4t6rS%2FJJZS1%2FkhvWt2GrS18gDCNcLapnHa1CgsTnA8H2HDv%2FKz3pyVJQndgKWt0w7toJJh%2Br7Fbyi5w8EPLT0DjRn3oKN5NsUVnsQQwH4vGB8t7qE%2BYVx%2Bkr%2F0krxmdBbW%2BSbmfSY94IaHkaXE4hisCw9hzqnYRfpvSalgGRVnkmR03h0zhoHMfvqCxMeTokA1%2Fb81d6UCQVx6I4z3E5hFa%2Bk0nUaI4pH0gaUYBv%2FuvAxL%2BlLTHFL%2B%2BAcQoA4864y562whkyQHMBLnt8bz3VgqU0jHSBp39u4Ho05tJTkZxkZym%2FbXFsMv2BJ0%2FNT2S1TlT%2F%2Bu6xNwFwtgMkIHAvqnHjEKcmcEzaIhPasoYIWpYdYsKdOGmFtvUnjmd6KTL8BpxdPI0Btjoh1ZbMDq1deKaWPVpL6%2F1IceYzFw6RsAlEt9lG4zLhcfwa5T5vidc6U2JUS7sBU1NBBJ81E82obJcm%2BFUMKHumsQGOqUBCA1dRM6YmnpWSbs8HjgKNIxDVAVde%2BgdF7ezW7FigVs3C6jD4BOfwwZXVyLAd%2FuqmliF29fbDYAMRrrnoRCguycbq%2FgQtsf9j78OL6ftBTw6PcXm%2Bhj3Dl%2BKCKkWhZA8KOzajFKM%2Bv%2FKSKK%2B2OSzkZ1idmoRZEjNAXYIRhmi7DZl7Ooxv%2FQYafb2yzTyMun30BZc2p4PfiJWyoKSDEKDBHGAOaxA&X-Amz-Signature=b011177a16a06306a0bc1ec58c664547a43249fe91f4cba4ec5cf5b9f1f6448a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXY2VUB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICJL2EReNr1GvC1DTMaQmIESFBIxqSurL958LIrF5Dv3AiEA5XF8rqNGcY1z66kyVTLc8K3rp9%2BlcQNFPhKLnRHBGB0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBp7piugXSv3t3hxircA4X9nb%2Fyx9nIAzCfPZ3NbIVK7kjyHPd8%2F5l7WtIJfG8hgM%2BiEHyvIO1309ydFcFLdj68xWr5Ewnxg10qnvo5qMOqPvnwO2QtPTVj6%2BAMs692mHItgoZg6xwwADG4BgNW4qjY9TXrCcBvnJucyO2xsLQsFzdooNI1F4t6rS%2FJJZS1%2FkhvWt2GrS18gDCNcLapnHa1CgsTnA8H2HDv%2FKz3pyVJQndgKWt0w7toJJh%2Br7Fbyi5w8EPLT0DjRn3oKN5NsUVnsQQwH4vGB8t7qE%2BYVx%2Bkr%2F0krxmdBbW%2BSbmfSY94IaHkaXE4hisCw9hzqnYRfpvSalgGRVnkmR03h0zhoHMfvqCxMeTokA1%2Fb81d6UCQVx6I4z3E5hFa%2Bk0nUaI4pH0gaUYBv%2FuvAxL%2BlLTHFL%2B%2BAcQoA4864y562whkyQHMBLnt8bz3VgqU0jHSBp39u4Ho05tJTkZxkZym%2FbXFsMv2BJ0%2FNT2S1TlT%2F%2Bu6xNwFwtgMkIHAvqnHjEKcmcEzaIhPasoYIWpYdYsKdOGmFtvUnjmd6KTL8BpxdPI0Btjoh1ZbMDq1deKaWPVpL6%2F1IceYzFw6RsAlEt9lG4zLhcfwa5T5vidc6U2JUS7sBU1NBBJ81E82obJcm%2BFUMKHumsQGOqUBCA1dRM6YmnpWSbs8HjgKNIxDVAVde%2BgdF7ezW7FigVs3C6jD4BOfwwZXVyLAd%2FuqmliF29fbDYAMRrrnoRCguycbq%2FgQtsf9j78OL6ftBTw6PcXm%2Bhj3Dl%2BKCKkWhZA8KOzajFKM%2Bv%2FKSKK%2B2OSzkZ1idmoRZEjNAXYIRhmi7DZl7Ooxv%2FQYafb2yzTyMun30BZc2p4PfiJWyoKSDEKDBHGAOaxA&X-Amz-Signature=41d01bc62b97eb35b9995f4648a6b569be3285aa4c3ff9717d11c9a7be329f5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXY2VUB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICJL2EReNr1GvC1DTMaQmIESFBIxqSurL958LIrF5Dv3AiEA5XF8rqNGcY1z66kyVTLc8K3rp9%2BlcQNFPhKLnRHBGB0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBp7piugXSv3t3hxircA4X9nb%2Fyx9nIAzCfPZ3NbIVK7kjyHPd8%2F5l7WtIJfG8hgM%2BiEHyvIO1309ydFcFLdj68xWr5Ewnxg10qnvo5qMOqPvnwO2QtPTVj6%2BAMs692mHItgoZg6xwwADG4BgNW4qjY9TXrCcBvnJucyO2xsLQsFzdooNI1F4t6rS%2FJJZS1%2FkhvWt2GrS18gDCNcLapnHa1CgsTnA8H2HDv%2FKz3pyVJQndgKWt0w7toJJh%2Br7Fbyi5w8EPLT0DjRn3oKN5NsUVnsQQwH4vGB8t7qE%2BYVx%2Bkr%2F0krxmdBbW%2BSbmfSY94IaHkaXE4hisCw9hzqnYRfpvSalgGRVnkmR03h0zhoHMfvqCxMeTokA1%2Fb81d6UCQVx6I4z3E5hFa%2Bk0nUaI4pH0gaUYBv%2FuvAxL%2BlLTHFL%2B%2BAcQoA4864y562whkyQHMBLnt8bz3VgqU0jHSBp39u4Ho05tJTkZxkZym%2FbXFsMv2BJ0%2FNT2S1TlT%2F%2Bu6xNwFwtgMkIHAvqnHjEKcmcEzaIhPasoYIWpYdYsKdOGmFtvUnjmd6KTL8BpxdPI0Btjoh1ZbMDq1deKaWPVpL6%2F1IceYzFw6RsAlEt9lG4zLhcfwa5T5vidc6U2JUS7sBU1NBBJ81E82obJcm%2BFUMKHumsQGOqUBCA1dRM6YmnpWSbs8HjgKNIxDVAVde%2BgdF7ezW7FigVs3C6jD4BOfwwZXVyLAd%2FuqmliF29fbDYAMRrrnoRCguycbq%2FgQtsf9j78OL6ftBTw6PcXm%2Bhj3Dl%2BKCKkWhZA8KOzajFKM%2Bv%2FKSKK%2B2OSzkZ1idmoRZEjNAXYIRhmi7DZl7Ooxv%2FQYafb2yzTyMun30BZc2p4PfiJWyoKSDEKDBHGAOaxA&X-Amz-Signature=1d710eeb471ba241bebb7826c21cf8cd67f3d449ec0fe74cdc06571fa79bf82d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXY2VUB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICJL2EReNr1GvC1DTMaQmIESFBIxqSurL958LIrF5Dv3AiEA5XF8rqNGcY1z66kyVTLc8K3rp9%2BlcQNFPhKLnRHBGB0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBp7piugXSv3t3hxircA4X9nb%2Fyx9nIAzCfPZ3NbIVK7kjyHPd8%2F5l7WtIJfG8hgM%2BiEHyvIO1309ydFcFLdj68xWr5Ewnxg10qnvo5qMOqPvnwO2QtPTVj6%2BAMs692mHItgoZg6xwwADG4BgNW4qjY9TXrCcBvnJucyO2xsLQsFzdooNI1F4t6rS%2FJJZS1%2FkhvWt2GrS18gDCNcLapnHa1CgsTnA8H2HDv%2FKz3pyVJQndgKWt0w7toJJh%2Br7Fbyi5w8EPLT0DjRn3oKN5NsUVnsQQwH4vGB8t7qE%2BYVx%2Bkr%2F0krxmdBbW%2BSbmfSY94IaHkaXE4hisCw9hzqnYRfpvSalgGRVnkmR03h0zhoHMfvqCxMeTokA1%2Fb81d6UCQVx6I4z3E5hFa%2Bk0nUaI4pH0gaUYBv%2FuvAxL%2BlLTHFL%2B%2BAcQoA4864y562whkyQHMBLnt8bz3VgqU0jHSBp39u4Ho05tJTkZxkZym%2FbXFsMv2BJ0%2FNT2S1TlT%2F%2Bu6xNwFwtgMkIHAvqnHjEKcmcEzaIhPasoYIWpYdYsKdOGmFtvUnjmd6KTL8BpxdPI0Btjoh1ZbMDq1deKaWPVpL6%2F1IceYzFw6RsAlEt9lG4zLhcfwa5T5vidc6U2JUS7sBU1NBBJ81E82obJcm%2BFUMKHumsQGOqUBCA1dRM6YmnpWSbs8HjgKNIxDVAVde%2BgdF7ezW7FigVs3C6jD4BOfwwZXVyLAd%2FuqmliF29fbDYAMRrrnoRCguycbq%2FgQtsf9j78OL6ftBTw6PcXm%2Bhj3Dl%2BKCKkWhZA8KOzajFKM%2Bv%2FKSKK%2B2OSzkZ1idmoRZEjNAXYIRhmi7DZl7Ooxv%2FQYafb2yzTyMun30BZc2p4PfiJWyoKSDEKDBHGAOaxA&X-Amz-Signature=bb164ddfcdd1f86b4be1884977575d6f92f59da813b80d9f8fbf1f5f40c2f281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXY2VUB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICJL2EReNr1GvC1DTMaQmIESFBIxqSurL958LIrF5Dv3AiEA5XF8rqNGcY1z66kyVTLc8K3rp9%2BlcQNFPhKLnRHBGB0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBp7piugXSv3t3hxircA4X9nb%2Fyx9nIAzCfPZ3NbIVK7kjyHPd8%2F5l7WtIJfG8hgM%2BiEHyvIO1309ydFcFLdj68xWr5Ewnxg10qnvo5qMOqPvnwO2QtPTVj6%2BAMs692mHItgoZg6xwwADG4BgNW4qjY9TXrCcBvnJucyO2xsLQsFzdooNI1F4t6rS%2FJJZS1%2FkhvWt2GrS18gDCNcLapnHa1CgsTnA8H2HDv%2FKz3pyVJQndgKWt0w7toJJh%2Br7Fbyi5w8EPLT0DjRn3oKN5NsUVnsQQwH4vGB8t7qE%2BYVx%2Bkr%2F0krxmdBbW%2BSbmfSY94IaHkaXE4hisCw9hzqnYRfpvSalgGRVnkmR03h0zhoHMfvqCxMeTokA1%2Fb81d6UCQVx6I4z3E5hFa%2Bk0nUaI4pH0gaUYBv%2FuvAxL%2BlLTHFL%2B%2BAcQoA4864y562whkyQHMBLnt8bz3VgqU0jHSBp39u4Ho05tJTkZxkZym%2FbXFsMv2BJ0%2FNT2S1TlT%2F%2Bu6xNwFwtgMkIHAvqnHjEKcmcEzaIhPasoYIWpYdYsKdOGmFtvUnjmd6KTL8BpxdPI0Btjoh1ZbMDq1deKaWPVpL6%2F1IceYzFw6RsAlEt9lG4zLhcfwa5T5vidc6U2JUS7sBU1NBBJ81E82obJcm%2BFUMKHumsQGOqUBCA1dRM6YmnpWSbs8HjgKNIxDVAVde%2BgdF7ezW7FigVs3C6jD4BOfwwZXVyLAd%2FuqmliF29fbDYAMRrrnoRCguycbq%2FgQtsf9j78OL6ftBTw6PcXm%2Bhj3Dl%2BKCKkWhZA8KOzajFKM%2Bv%2FKSKK%2B2OSzkZ1idmoRZEjNAXYIRhmi7DZl7Ooxv%2FQYafb2yzTyMun30BZc2p4PfiJWyoKSDEKDBHGAOaxA&X-Amz-Signature=f2edecc5f95ec780bf77043119415a66438c40f4cd6035f2357304897db51be4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXY2VUB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICJL2EReNr1GvC1DTMaQmIESFBIxqSurL958LIrF5Dv3AiEA5XF8rqNGcY1z66kyVTLc8K3rp9%2BlcQNFPhKLnRHBGB0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBp7piugXSv3t3hxircA4X9nb%2Fyx9nIAzCfPZ3NbIVK7kjyHPd8%2F5l7WtIJfG8hgM%2BiEHyvIO1309ydFcFLdj68xWr5Ewnxg10qnvo5qMOqPvnwO2QtPTVj6%2BAMs692mHItgoZg6xwwADG4BgNW4qjY9TXrCcBvnJucyO2xsLQsFzdooNI1F4t6rS%2FJJZS1%2FkhvWt2GrS18gDCNcLapnHa1CgsTnA8H2HDv%2FKz3pyVJQndgKWt0w7toJJh%2Br7Fbyi5w8EPLT0DjRn3oKN5NsUVnsQQwH4vGB8t7qE%2BYVx%2Bkr%2F0krxmdBbW%2BSbmfSY94IaHkaXE4hisCw9hzqnYRfpvSalgGRVnkmR03h0zhoHMfvqCxMeTokA1%2Fb81d6UCQVx6I4z3E5hFa%2Bk0nUaI4pH0gaUYBv%2FuvAxL%2BlLTHFL%2B%2BAcQoA4864y562whkyQHMBLnt8bz3VgqU0jHSBp39u4Ho05tJTkZxkZym%2FbXFsMv2BJ0%2FNT2S1TlT%2F%2Bu6xNwFwtgMkIHAvqnHjEKcmcEzaIhPasoYIWpYdYsKdOGmFtvUnjmd6KTL8BpxdPI0Btjoh1ZbMDq1deKaWPVpL6%2F1IceYzFw6RsAlEt9lG4zLhcfwa5T5vidc6U2JUS7sBU1NBBJ81E82obJcm%2BFUMKHumsQGOqUBCA1dRM6YmnpWSbs8HjgKNIxDVAVde%2BgdF7ezW7FigVs3C6jD4BOfwwZXVyLAd%2FuqmliF29fbDYAMRrrnoRCguycbq%2FgQtsf9j78OL6ftBTw6PcXm%2Bhj3Dl%2BKCKkWhZA8KOzajFKM%2Bv%2FKSKK%2B2OSzkZ1idmoRZEjNAXYIRhmi7DZl7Ooxv%2FQYafb2yzTyMun30BZc2p4PfiJWyoKSDEKDBHGAOaxA&X-Amz-Signature=47388c08b844eb42bd9898f94b3b5b4df67d132b3468fa4d659912eec9076b7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXY2VUB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICJL2EReNr1GvC1DTMaQmIESFBIxqSurL958LIrF5Dv3AiEA5XF8rqNGcY1z66kyVTLc8K3rp9%2BlcQNFPhKLnRHBGB0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBp7piugXSv3t3hxircA4X9nb%2Fyx9nIAzCfPZ3NbIVK7kjyHPd8%2F5l7WtIJfG8hgM%2BiEHyvIO1309ydFcFLdj68xWr5Ewnxg10qnvo5qMOqPvnwO2QtPTVj6%2BAMs692mHItgoZg6xwwADG4BgNW4qjY9TXrCcBvnJucyO2xsLQsFzdooNI1F4t6rS%2FJJZS1%2FkhvWt2GrS18gDCNcLapnHa1CgsTnA8H2HDv%2FKz3pyVJQndgKWt0w7toJJh%2Br7Fbyi5w8EPLT0DjRn3oKN5NsUVnsQQwH4vGB8t7qE%2BYVx%2Bkr%2F0krxmdBbW%2BSbmfSY94IaHkaXE4hisCw9hzqnYRfpvSalgGRVnkmR03h0zhoHMfvqCxMeTokA1%2Fb81d6UCQVx6I4z3E5hFa%2Bk0nUaI4pH0gaUYBv%2FuvAxL%2BlLTHFL%2B%2BAcQoA4864y562whkyQHMBLnt8bz3VgqU0jHSBp39u4Ho05tJTkZxkZym%2FbXFsMv2BJ0%2FNT2S1TlT%2F%2Bu6xNwFwtgMkIHAvqnHjEKcmcEzaIhPasoYIWpYdYsKdOGmFtvUnjmd6KTL8BpxdPI0Btjoh1ZbMDq1deKaWPVpL6%2F1IceYzFw6RsAlEt9lG4zLhcfwa5T5vidc6U2JUS7sBU1NBBJ81E82obJcm%2BFUMKHumsQGOqUBCA1dRM6YmnpWSbs8HjgKNIxDVAVde%2BgdF7ezW7FigVs3C6jD4BOfwwZXVyLAd%2FuqmliF29fbDYAMRrrnoRCguycbq%2FgQtsf9j78OL6ftBTw6PcXm%2Bhj3Dl%2BKCKkWhZA8KOzajFKM%2Bv%2FKSKK%2B2OSzkZ1idmoRZEjNAXYIRhmi7DZl7Ooxv%2FQYafb2yzTyMun30BZc2p4PfiJWyoKSDEKDBHGAOaxA&X-Amz-Signature=75fb78bdf07c2a08574974a6c6a8b5aef7836425ca52ae3db84e51ff7cac855e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXY2VUB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICJL2EReNr1GvC1DTMaQmIESFBIxqSurL958LIrF5Dv3AiEA5XF8rqNGcY1z66kyVTLc8K3rp9%2BlcQNFPhKLnRHBGB0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBp7piugXSv3t3hxircA4X9nb%2Fyx9nIAzCfPZ3NbIVK7kjyHPd8%2F5l7WtIJfG8hgM%2BiEHyvIO1309ydFcFLdj68xWr5Ewnxg10qnvo5qMOqPvnwO2QtPTVj6%2BAMs692mHItgoZg6xwwADG4BgNW4qjY9TXrCcBvnJucyO2xsLQsFzdooNI1F4t6rS%2FJJZS1%2FkhvWt2GrS18gDCNcLapnHa1CgsTnA8H2HDv%2FKz3pyVJQndgKWt0w7toJJh%2Br7Fbyi5w8EPLT0DjRn3oKN5NsUVnsQQwH4vGB8t7qE%2BYVx%2Bkr%2F0krxmdBbW%2BSbmfSY94IaHkaXE4hisCw9hzqnYRfpvSalgGRVnkmR03h0zhoHMfvqCxMeTokA1%2Fb81d6UCQVx6I4z3E5hFa%2Bk0nUaI4pH0gaUYBv%2FuvAxL%2BlLTHFL%2B%2BAcQoA4864y562whkyQHMBLnt8bz3VgqU0jHSBp39u4Ho05tJTkZxkZym%2FbXFsMv2BJ0%2FNT2S1TlT%2F%2Bu6xNwFwtgMkIHAvqnHjEKcmcEzaIhPasoYIWpYdYsKdOGmFtvUnjmd6KTL8BpxdPI0Btjoh1ZbMDq1deKaWPVpL6%2F1IceYzFw6RsAlEt9lG4zLhcfwa5T5vidc6U2JUS7sBU1NBBJ81E82obJcm%2BFUMKHumsQGOqUBCA1dRM6YmnpWSbs8HjgKNIxDVAVde%2BgdF7ezW7FigVs3C6jD4BOfwwZXVyLAd%2FuqmliF29fbDYAMRrrnoRCguycbq%2FgQtsf9j78OL6ftBTw6PcXm%2Bhj3Dl%2BKCKkWhZA8KOzajFKM%2Bv%2FKSKK%2B2OSzkZ1idmoRZEjNAXYIRhmi7DZl7Ooxv%2FQYafb2yzTyMun30BZc2p4PfiJWyoKSDEKDBHGAOaxA&X-Amz-Signature=0e64bbc5219fa1a8f5581caf7c5fef2712800d1c11549c932c62e75649947db0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXY2VUB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICJL2EReNr1GvC1DTMaQmIESFBIxqSurL958LIrF5Dv3AiEA5XF8rqNGcY1z66kyVTLc8K3rp9%2BlcQNFPhKLnRHBGB0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBp7piugXSv3t3hxircA4X9nb%2Fyx9nIAzCfPZ3NbIVK7kjyHPd8%2F5l7WtIJfG8hgM%2BiEHyvIO1309ydFcFLdj68xWr5Ewnxg10qnvo5qMOqPvnwO2QtPTVj6%2BAMs692mHItgoZg6xwwADG4BgNW4qjY9TXrCcBvnJucyO2xsLQsFzdooNI1F4t6rS%2FJJZS1%2FkhvWt2GrS18gDCNcLapnHa1CgsTnA8H2HDv%2FKz3pyVJQndgKWt0w7toJJh%2Br7Fbyi5w8EPLT0DjRn3oKN5NsUVnsQQwH4vGB8t7qE%2BYVx%2Bkr%2F0krxmdBbW%2BSbmfSY94IaHkaXE4hisCw9hzqnYRfpvSalgGRVnkmR03h0zhoHMfvqCxMeTokA1%2Fb81d6UCQVx6I4z3E5hFa%2Bk0nUaI4pH0gaUYBv%2FuvAxL%2BlLTHFL%2B%2BAcQoA4864y562whkyQHMBLnt8bz3VgqU0jHSBp39u4Ho05tJTkZxkZym%2FbXFsMv2BJ0%2FNT2S1TlT%2F%2Bu6xNwFwtgMkIHAvqnHjEKcmcEzaIhPasoYIWpYdYsKdOGmFtvUnjmd6KTL8BpxdPI0Btjoh1ZbMDq1deKaWPVpL6%2F1IceYzFw6RsAlEt9lG4zLhcfwa5T5vidc6U2JUS7sBU1NBBJ81E82obJcm%2BFUMKHumsQGOqUBCA1dRM6YmnpWSbs8HjgKNIxDVAVde%2BgdF7ezW7FigVs3C6jD4BOfwwZXVyLAd%2FuqmliF29fbDYAMRrrnoRCguycbq%2FgQtsf9j78OL6ftBTw6PcXm%2Bhj3Dl%2BKCKkWhZA8KOzajFKM%2Bv%2FKSKK%2B2OSzkZ1idmoRZEjNAXYIRhmi7DZl7Ooxv%2FQYafb2yzTyMun30BZc2p4PfiJWyoKSDEKDBHGAOaxA&X-Amz-Signature=3ece0042f97207b784069dc6223b5ccd8cf9c56ebf8a3042bda0c7f1e72a3d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

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
      
      <collision>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
      </collision>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXY2VUB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICJL2EReNr1GvC1DTMaQmIESFBIxqSurL958LIrF5Dv3AiEA5XF8rqNGcY1z66kyVTLc8K3rp9%2BlcQNFPhKLnRHBGB0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBp7piugXSv3t3hxircA4X9nb%2Fyx9nIAzCfPZ3NbIVK7kjyHPd8%2F5l7WtIJfG8hgM%2BiEHyvIO1309ydFcFLdj68xWr5Ewnxg10qnvo5qMOqPvnwO2QtPTVj6%2BAMs692mHItgoZg6xwwADG4BgNW4qjY9TXrCcBvnJucyO2xsLQsFzdooNI1F4t6rS%2FJJZS1%2FkhvWt2GrS18gDCNcLapnHa1CgsTnA8H2HDv%2FKz3pyVJQndgKWt0w7toJJh%2Br7Fbyi5w8EPLT0DjRn3oKN5NsUVnsQQwH4vGB8t7qE%2BYVx%2Bkr%2F0krxmdBbW%2BSbmfSY94IaHkaXE4hisCw9hzqnYRfpvSalgGRVnkmR03h0zhoHMfvqCxMeTokA1%2Fb81d6UCQVx6I4z3E5hFa%2Bk0nUaI4pH0gaUYBv%2FuvAxL%2BlLTHFL%2B%2BAcQoA4864y562whkyQHMBLnt8bz3VgqU0jHSBp39u4Ho05tJTkZxkZym%2FbXFsMv2BJ0%2FNT2S1TlT%2F%2Bu6xNwFwtgMkIHAvqnHjEKcmcEzaIhPasoYIWpYdYsKdOGmFtvUnjmd6KTL8BpxdPI0Btjoh1ZbMDq1deKaWPVpL6%2F1IceYzFw6RsAlEt9lG4zLhcfwa5T5vidc6U2JUS7sBU1NBBJ81E82obJcm%2BFUMKHumsQGOqUBCA1dRM6YmnpWSbs8HjgKNIxDVAVde%2BgdF7ezW7FigVs3C6jD4BOfwwZXVyLAd%2FuqmliF29fbDYAMRrrnoRCguycbq%2FgQtsf9j78OL6ftBTw6PcXm%2Bhj3Dl%2BKCKkWhZA8KOzajFKM%2Bv%2FKSKK%2B2OSzkZ1idmoRZEjNAXYIRhmi7DZl7Ooxv%2FQYafb2yzTyMun30BZc2p4PfiJWyoKSDEKDBHGAOaxA&X-Amz-Signature=3a32e974da434c98cc5d45023194eae4ac30370ba5278fadc06c3c25ee0df429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXY2VUB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICJL2EReNr1GvC1DTMaQmIESFBIxqSurL958LIrF5Dv3AiEA5XF8rqNGcY1z66kyVTLc8K3rp9%2BlcQNFPhKLnRHBGB0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBp7piugXSv3t3hxircA4X9nb%2Fyx9nIAzCfPZ3NbIVK7kjyHPd8%2F5l7WtIJfG8hgM%2BiEHyvIO1309ydFcFLdj68xWr5Ewnxg10qnvo5qMOqPvnwO2QtPTVj6%2BAMs692mHItgoZg6xwwADG4BgNW4qjY9TXrCcBvnJucyO2xsLQsFzdooNI1F4t6rS%2FJJZS1%2FkhvWt2GrS18gDCNcLapnHa1CgsTnA8H2HDv%2FKz3pyVJQndgKWt0w7toJJh%2Br7Fbyi5w8EPLT0DjRn3oKN5NsUVnsQQwH4vGB8t7qE%2BYVx%2Bkr%2F0krxmdBbW%2BSbmfSY94IaHkaXE4hisCw9hzqnYRfpvSalgGRVnkmR03h0zhoHMfvqCxMeTokA1%2Fb81d6UCQVx6I4z3E5hFa%2Bk0nUaI4pH0gaUYBv%2FuvAxL%2BlLTHFL%2B%2BAcQoA4864y562whkyQHMBLnt8bz3VgqU0jHSBp39u4Ho05tJTkZxkZym%2FbXFsMv2BJ0%2FNT2S1TlT%2F%2Bu6xNwFwtgMkIHAvqnHjEKcmcEzaIhPasoYIWpYdYsKdOGmFtvUnjmd6KTL8BpxdPI0Btjoh1ZbMDq1deKaWPVpL6%2F1IceYzFw6RsAlEt9lG4zLhcfwa5T5vidc6U2JUS7sBU1NBBJ81E82obJcm%2BFUMKHumsQGOqUBCA1dRM6YmnpWSbs8HjgKNIxDVAVde%2BgdF7ezW7FigVs3C6jD4BOfwwZXVyLAd%2FuqmliF29fbDYAMRrrnoRCguycbq%2FgQtsf9j78OL6ftBTw6PcXm%2Bhj3Dl%2BKCKkWhZA8KOzajFKM%2Bv%2FKSKK%2B2OSzkZ1idmoRZEjNAXYIRhmi7DZl7Ooxv%2FQYafb2yzTyMun30BZc2p4PfiJWyoKSDEKDBHGAOaxA&X-Amz-Signature=4ae265d76c3a67c33b1cbbe417ca9a0828bbc47ea884df57368ad10977c6dd6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXY2VUB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICJL2EReNr1GvC1DTMaQmIESFBIxqSurL958LIrF5Dv3AiEA5XF8rqNGcY1z66kyVTLc8K3rp9%2BlcQNFPhKLnRHBGB0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBp7piugXSv3t3hxircA4X9nb%2Fyx9nIAzCfPZ3NbIVK7kjyHPd8%2F5l7WtIJfG8hgM%2BiEHyvIO1309ydFcFLdj68xWr5Ewnxg10qnvo5qMOqPvnwO2QtPTVj6%2BAMs692mHItgoZg6xwwADG4BgNW4qjY9TXrCcBvnJucyO2xsLQsFzdooNI1F4t6rS%2FJJZS1%2FkhvWt2GrS18gDCNcLapnHa1CgsTnA8H2HDv%2FKz3pyVJQndgKWt0w7toJJh%2Br7Fbyi5w8EPLT0DjRn3oKN5NsUVnsQQwH4vGB8t7qE%2BYVx%2Bkr%2F0krxmdBbW%2BSbmfSY94IaHkaXE4hisCw9hzqnYRfpvSalgGRVnkmR03h0zhoHMfvqCxMeTokA1%2Fb81d6UCQVx6I4z3E5hFa%2Bk0nUaI4pH0gaUYBv%2FuvAxL%2BlLTHFL%2B%2BAcQoA4864y562whkyQHMBLnt8bz3VgqU0jHSBp39u4Ho05tJTkZxkZym%2FbXFsMv2BJ0%2FNT2S1TlT%2F%2Bu6xNwFwtgMkIHAvqnHjEKcmcEzaIhPasoYIWpYdYsKdOGmFtvUnjmd6KTL8BpxdPI0Btjoh1ZbMDq1deKaWPVpL6%2F1IceYzFw6RsAlEt9lG4zLhcfwa5T5vidc6U2JUS7sBU1NBBJ81E82obJcm%2BFUMKHumsQGOqUBCA1dRM6YmnpWSbs8HjgKNIxDVAVde%2BgdF7ezW7FigVs3C6jD4BOfwwZXVyLAd%2FuqmliF29fbDYAMRrrnoRCguycbq%2FgQtsf9j78OL6ftBTw6PcXm%2Bhj3Dl%2BKCKkWhZA8KOzajFKM%2Bv%2FKSKK%2B2OSzkZ1idmoRZEjNAXYIRhmi7DZl7Ooxv%2FQYafb2yzTyMun30BZc2p4PfiJWyoKSDEKDBHGAOaxA&X-Amz-Signature=7b686e98d10defdf40df0dadb65f9c198739e0906f584e4e9fb5f197f9acf240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXY2VUB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICJL2EReNr1GvC1DTMaQmIESFBIxqSurL958LIrF5Dv3AiEA5XF8rqNGcY1z66kyVTLc8K3rp9%2BlcQNFPhKLnRHBGB0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBp7piugXSv3t3hxircA4X9nb%2Fyx9nIAzCfPZ3NbIVK7kjyHPd8%2F5l7WtIJfG8hgM%2BiEHyvIO1309ydFcFLdj68xWr5Ewnxg10qnvo5qMOqPvnwO2QtPTVj6%2BAMs692mHItgoZg6xwwADG4BgNW4qjY9TXrCcBvnJucyO2xsLQsFzdooNI1F4t6rS%2FJJZS1%2FkhvWt2GrS18gDCNcLapnHa1CgsTnA8H2HDv%2FKz3pyVJQndgKWt0w7toJJh%2Br7Fbyi5w8EPLT0DjRn3oKN5NsUVnsQQwH4vGB8t7qE%2BYVx%2Bkr%2F0krxmdBbW%2BSbmfSY94IaHkaXE4hisCw9hzqnYRfpvSalgGRVnkmR03h0zhoHMfvqCxMeTokA1%2Fb81d6UCQVx6I4z3E5hFa%2Bk0nUaI4pH0gaUYBv%2FuvAxL%2BlLTHFL%2B%2BAcQoA4864y562whkyQHMBLnt8bz3VgqU0jHSBp39u4Ho05tJTkZxkZym%2FbXFsMv2BJ0%2FNT2S1TlT%2F%2Bu6xNwFwtgMkIHAvqnHjEKcmcEzaIhPasoYIWpYdYsKdOGmFtvUnjmd6KTL8BpxdPI0Btjoh1ZbMDq1deKaWPVpL6%2F1IceYzFw6RsAlEt9lG4zLhcfwa5T5vidc6U2JUS7sBU1NBBJ81E82obJcm%2BFUMKHumsQGOqUBCA1dRM6YmnpWSbs8HjgKNIxDVAVde%2BgdF7ezW7FigVs3C6jD4BOfwwZXVyLAd%2FuqmliF29fbDYAMRrrnoRCguycbq%2FgQtsf9j78OL6ftBTw6PcXm%2Bhj3Dl%2BKCKkWhZA8KOzajFKM%2Bv%2FKSKK%2B2OSzkZ1idmoRZEjNAXYIRhmi7DZl7Ooxv%2FQYafb2yzTyMun30BZc2p4PfiJWyoKSDEKDBHGAOaxA&X-Amz-Signature=3cee37b4ec959c6ba7bf8ad8d46f00abc27090ebfd9cff7d297a362910ad6bee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPCX47ES%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIA4QBGmS5h9wn8JjkCXQcIF2A9O%2FaMgfjorZOM5DhHxFAiEA4WaYzBhm8s6dOr4a90qo0bML4okofbnIU2PBtUktSLEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpLrmJQm9Q06NvdDircAyikHHbuS1Zhw2bI1XwU49PZ1EBg6gGDjU2ltlUJRbZ64X122nAFVnE54v6kTqRa3bD9fxFPGDPXnLBqL448BZdBiinuHmpqQeBj92U%2FG6%2FN4UyNlJLY5h5gIbLwCcfKknqHH6OqShEyOG8EVY4NJWNyPZL7WDjlI0RjnLOpB1kUOMg9WSQlhf7Vq4lmOthEw8%2B1QwOgjZHOZjZ%2FIPcQ6RMi6bKmMsS16FHdQMSv3CPu6VmtiAhyIZcK9RC6zW%2FLAbdZ1OMkjPUTMmNTl1Fu8iBQhjiEWvT1n1uKJqKJ9Prl7kJeHjzqjf6q4KkNEv43BJ8mOJNsorq9%2FspU69PX%2BkMmZQIlE7SZeqddn14ckrdQdDiltZbAjEnam76KYX%2FgjC53LgrNDGUEyhxGyeF5mer8AyL5ErDq%2FA%2BZMc2BAw8k2mK%2FO8PajI2RuGg4wh9NuR%2BsH0d%2B00L524QJD%2BRy6UdiyUfKNSrFq%2B%2BVJ08HGi1hCP0vlEicuc2QCbYV7xRuKcIkxKoctbPaS90Ym%2F4Ms3iv0zK27oHmChcCsN2GBhnZ4iYEKK65ZXtoUmTmTLynJOxpO%2BO1cKv2rC6tU4e%2B0eK3NA7tsW0CYkN9kclWs4SzXNYMFy2I55mrFnxLMMPumsQGOqUBay8vVzx90yPrOYj2%2BTbgkS94fQg9PVWyHLMpB41Ra2jz7aK93n%2Fvzm97tkBIi62ujvzlzgo%2FLx7LMiqWdy0lDDXPgv8YztXSrJSzkyVSmQMW9Ao95321lu82nTpgHQeicOmyAxZX3npuToA522vIqTnf72akVTXYnN6Q%2FlIw99lqJCbhzHLb9KY%2FN0aBo9Bj8gokwAfbBEBmJ0cNfpHyhmRuBOxr&X-Amz-Signature=62fb544416b9ca29e9d6e02742b489e655a3b9302560b4538128f30e657ebb33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPCX47ES%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIA4QBGmS5h9wn8JjkCXQcIF2A9O%2FaMgfjorZOM5DhHxFAiEA4WaYzBhm8s6dOr4a90qo0bML4okofbnIU2PBtUktSLEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpLrmJQm9Q06NvdDircAyikHHbuS1Zhw2bI1XwU49PZ1EBg6gGDjU2ltlUJRbZ64X122nAFVnE54v6kTqRa3bD9fxFPGDPXnLBqL448BZdBiinuHmpqQeBj92U%2FG6%2FN4UyNlJLY5h5gIbLwCcfKknqHH6OqShEyOG8EVY4NJWNyPZL7WDjlI0RjnLOpB1kUOMg9WSQlhf7Vq4lmOthEw8%2B1QwOgjZHOZjZ%2FIPcQ6RMi6bKmMsS16FHdQMSv3CPu6VmtiAhyIZcK9RC6zW%2FLAbdZ1OMkjPUTMmNTl1Fu8iBQhjiEWvT1n1uKJqKJ9Prl7kJeHjzqjf6q4KkNEv43BJ8mOJNsorq9%2FspU69PX%2BkMmZQIlE7SZeqddn14ckrdQdDiltZbAjEnam76KYX%2FgjC53LgrNDGUEyhxGyeF5mer8AyL5ErDq%2FA%2BZMc2BAw8k2mK%2FO8PajI2RuGg4wh9NuR%2BsH0d%2B00L524QJD%2BRy6UdiyUfKNSrFq%2B%2BVJ08HGi1hCP0vlEicuc2QCbYV7xRuKcIkxKoctbPaS90Ym%2F4Ms3iv0zK27oHmChcCsN2GBhnZ4iYEKK65ZXtoUmTmTLynJOxpO%2BO1cKv2rC6tU4e%2B0eK3NA7tsW0CYkN9kclWs4SzXNYMFy2I55mrFnxLMMPumsQGOqUBay8vVzx90yPrOYj2%2BTbgkS94fQg9PVWyHLMpB41Ra2jz7aK93n%2Fvzm97tkBIi62ujvzlzgo%2FLx7LMiqWdy0lDDXPgv8YztXSrJSzkyVSmQMW9Ao95321lu82nTpgHQeicOmyAxZX3npuToA522vIqTnf72akVTXYnN6Q%2FlIw99lqJCbhzHLb9KY%2FN0aBo9Bj8gokwAfbBEBmJ0cNfpHyhmRuBOxr&X-Amz-Signature=0f790b539a5479f4b16b0d4e13a9876f70dc386c103a688d7e35307e0907d2bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPCX47ES%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIA4QBGmS5h9wn8JjkCXQcIF2A9O%2FaMgfjorZOM5DhHxFAiEA4WaYzBhm8s6dOr4a90qo0bML4okofbnIU2PBtUktSLEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpLrmJQm9Q06NvdDircAyikHHbuS1Zhw2bI1XwU49PZ1EBg6gGDjU2ltlUJRbZ64X122nAFVnE54v6kTqRa3bD9fxFPGDPXnLBqL448BZdBiinuHmpqQeBj92U%2FG6%2FN4UyNlJLY5h5gIbLwCcfKknqHH6OqShEyOG8EVY4NJWNyPZL7WDjlI0RjnLOpB1kUOMg9WSQlhf7Vq4lmOthEw8%2B1QwOgjZHOZjZ%2FIPcQ6RMi6bKmMsS16FHdQMSv3CPu6VmtiAhyIZcK9RC6zW%2FLAbdZ1OMkjPUTMmNTl1Fu8iBQhjiEWvT1n1uKJqKJ9Prl7kJeHjzqjf6q4KkNEv43BJ8mOJNsorq9%2FspU69PX%2BkMmZQIlE7SZeqddn14ckrdQdDiltZbAjEnam76KYX%2FgjC53LgrNDGUEyhxGyeF5mer8AyL5ErDq%2FA%2BZMc2BAw8k2mK%2FO8PajI2RuGg4wh9NuR%2BsH0d%2B00L524QJD%2BRy6UdiyUfKNSrFq%2B%2BVJ08HGi1hCP0vlEicuc2QCbYV7xRuKcIkxKoctbPaS90Ym%2F4Ms3iv0zK27oHmChcCsN2GBhnZ4iYEKK65ZXtoUmTmTLynJOxpO%2BO1cKv2rC6tU4e%2B0eK3NA7tsW0CYkN9kclWs4SzXNYMFy2I55mrFnxLMMPumsQGOqUBay8vVzx90yPrOYj2%2BTbgkS94fQg9PVWyHLMpB41Ra2jz7aK93n%2Fvzm97tkBIi62ujvzlzgo%2FLx7LMiqWdy0lDDXPgv8YztXSrJSzkyVSmQMW9Ao95321lu82nTpgHQeicOmyAxZX3npuToA522vIqTnf72akVTXYnN6Q%2FlIw99lqJCbhzHLb9KY%2FN0aBo9Bj8gokwAfbBEBmJ0cNfpHyhmRuBOxr&X-Amz-Signature=fdd4ca47d7658f97f647bd655ddcf34108e3da28291f1dba97944e8d8f21b07f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPCX47ES%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIA4QBGmS5h9wn8JjkCXQcIF2A9O%2FaMgfjorZOM5DhHxFAiEA4WaYzBhm8s6dOr4a90qo0bML4okofbnIU2PBtUktSLEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpLrmJQm9Q06NvdDircAyikHHbuS1Zhw2bI1XwU49PZ1EBg6gGDjU2ltlUJRbZ64X122nAFVnE54v6kTqRa3bD9fxFPGDPXnLBqL448BZdBiinuHmpqQeBj92U%2FG6%2FN4UyNlJLY5h5gIbLwCcfKknqHH6OqShEyOG8EVY4NJWNyPZL7WDjlI0RjnLOpB1kUOMg9WSQlhf7Vq4lmOthEw8%2B1QwOgjZHOZjZ%2FIPcQ6RMi6bKmMsS16FHdQMSv3CPu6VmtiAhyIZcK9RC6zW%2FLAbdZ1OMkjPUTMmNTl1Fu8iBQhjiEWvT1n1uKJqKJ9Prl7kJeHjzqjf6q4KkNEv43BJ8mOJNsorq9%2FspU69PX%2BkMmZQIlE7SZeqddn14ckrdQdDiltZbAjEnam76KYX%2FgjC53LgrNDGUEyhxGyeF5mer8AyL5ErDq%2FA%2BZMc2BAw8k2mK%2FO8PajI2RuGg4wh9NuR%2BsH0d%2B00L524QJD%2BRy6UdiyUfKNSrFq%2B%2BVJ08HGi1hCP0vlEicuc2QCbYV7xRuKcIkxKoctbPaS90Ym%2F4Ms3iv0zK27oHmChcCsN2GBhnZ4iYEKK65ZXtoUmTmTLynJOxpO%2BO1cKv2rC6tU4e%2B0eK3NA7tsW0CYkN9kclWs4SzXNYMFy2I55mrFnxLMMPumsQGOqUBay8vVzx90yPrOYj2%2BTbgkS94fQg9PVWyHLMpB41Ra2jz7aK93n%2Fvzm97tkBIi62ujvzlzgo%2FLx7LMiqWdy0lDDXPgv8YztXSrJSzkyVSmQMW9Ao95321lu82nTpgHQeicOmyAxZX3npuToA522vIqTnf72akVTXYnN6Q%2FlIw99lqJCbhzHLb9KY%2FN0aBo9Bj8gokwAfbBEBmJ0cNfpHyhmRuBOxr&X-Amz-Signature=2a5671793893e80e178df415e94ad04655e0f344e1adc63e8b37eb008d4b24d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPCX47ES%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIA4QBGmS5h9wn8JjkCXQcIF2A9O%2FaMgfjorZOM5DhHxFAiEA4WaYzBhm8s6dOr4a90qo0bML4okofbnIU2PBtUktSLEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpLrmJQm9Q06NvdDircAyikHHbuS1Zhw2bI1XwU49PZ1EBg6gGDjU2ltlUJRbZ64X122nAFVnE54v6kTqRa3bD9fxFPGDPXnLBqL448BZdBiinuHmpqQeBj92U%2FG6%2FN4UyNlJLY5h5gIbLwCcfKknqHH6OqShEyOG8EVY4NJWNyPZL7WDjlI0RjnLOpB1kUOMg9WSQlhf7Vq4lmOthEw8%2B1QwOgjZHOZjZ%2FIPcQ6RMi6bKmMsS16FHdQMSv3CPu6VmtiAhyIZcK9RC6zW%2FLAbdZ1OMkjPUTMmNTl1Fu8iBQhjiEWvT1n1uKJqKJ9Prl7kJeHjzqjf6q4KkNEv43BJ8mOJNsorq9%2FspU69PX%2BkMmZQIlE7SZeqddn14ckrdQdDiltZbAjEnam76KYX%2FgjC53LgrNDGUEyhxGyeF5mer8AyL5ErDq%2FA%2BZMc2BAw8k2mK%2FO8PajI2RuGg4wh9NuR%2BsH0d%2B00L524QJD%2BRy6UdiyUfKNSrFq%2B%2BVJ08HGi1hCP0vlEicuc2QCbYV7xRuKcIkxKoctbPaS90Ym%2F4Ms3iv0zK27oHmChcCsN2GBhnZ4iYEKK65ZXtoUmTmTLynJOxpO%2BO1cKv2rC6tU4e%2B0eK3NA7tsW0CYkN9kclWs4SzXNYMFy2I55mrFnxLMMPumsQGOqUBay8vVzx90yPrOYj2%2BTbgkS94fQg9PVWyHLMpB41Ra2jz7aK93n%2Fvzm97tkBIi62ujvzlzgo%2FLx7LMiqWdy0lDDXPgv8YztXSrJSzkyVSmQMW9Ao95321lu82nTpgHQeicOmyAxZX3npuToA522vIqTnf72akVTXYnN6Q%2FlIw99lqJCbhzHLb9KY%2FN0aBo9Bj8gokwAfbBEBmJ0cNfpHyhmRuBOxr&X-Amz-Signature=24fd29e8d1cf274dfa39c047b3edde38a87a172733b9dc51c3426784f584aa69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPCX47ES%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIA4QBGmS5h9wn8JjkCXQcIF2A9O%2FaMgfjorZOM5DhHxFAiEA4WaYzBhm8s6dOr4a90qo0bML4okofbnIU2PBtUktSLEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpLrmJQm9Q06NvdDircAyikHHbuS1Zhw2bI1XwU49PZ1EBg6gGDjU2ltlUJRbZ64X122nAFVnE54v6kTqRa3bD9fxFPGDPXnLBqL448BZdBiinuHmpqQeBj92U%2FG6%2FN4UyNlJLY5h5gIbLwCcfKknqHH6OqShEyOG8EVY4NJWNyPZL7WDjlI0RjnLOpB1kUOMg9WSQlhf7Vq4lmOthEw8%2B1QwOgjZHOZjZ%2FIPcQ6RMi6bKmMsS16FHdQMSv3CPu6VmtiAhyIZcK9RC6zW%2FLAbdZ1OMkjPUTMmNTl1Fu8iBQhjiEWvT1n1uKJqKJ9Prl7kJeHjzqjf6q4KkNEv43BJ8mOJNsorq9%2FspU69PX%2BkMmZQIlE7SZeqddn14ckrdQdDiltZbAjEnam76KYX%2FgjC53LgrNDGUEyhxGyeF5mer8AyL5ErDq%2FA%2BZMc2BAw8k2mK%2FO8PajI2RuGg4wh9NuR%2BsH0d%2B00L524QJD%2BRy6UdiyUfKNSrFq%2B%2BVJ08HGi1hCP0vlEicuc2QCbYV7xRuKcIkxKoctbPaS90Ym%2F4Ms3iv0zK27oHmChcCsN2GBhnZ4iYEKK65ZXtoUmTmTLynJOxpO%2BO1cKv2rC6tU4e%2B0eK3NA7tsW0CYkN9kclWs4SzXNYMFy2I55mrFnxLMMPumsQGOqUBay8vVzx90yPrOYj2%2BTbgkS94fQg9PVWyHLMpB41Ra2jz7aK93n%2Fvzm97tkBIi62ujvzlzgo%2FLx7LMiqWdy0lDDXPgv8YztXSrJSzkyVSmQMW9Ao95321lu82nTpgHQeicOmyAxZX3npuToA522vIqTnf72akVTXYnN6Q%2FlIw99lqJCbhzHLb9KY%2FN0aBo9Bj8gokwAfbBEBmJ0cNfpHyhmRuBOxr&X-Amz-Signature=ba79715bbdc9296ad18001bbf75b5ed0b660638a2ff0b9ff0900c34176279f44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
