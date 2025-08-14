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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I3ZJXBD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIAgBz3l1SEsNamBl%2F%2BEk3CQtnT5xTsq5Hy4%2B4skQ3BWdAiEA9j%2BdOtcF9E%2FLWkM1CDqDExWY%2FuLBfLMdWkt5tAE1MR8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOIfc%2FTJWFW50OhfCyrcAxahTvAMuSth7470PXAnAav76EeD2qGVkItxyhI7FLGGotEtdJNhjv%2FH%2Fcl0IOeclxGS5gSrKB1z36MXC315ZqBD%2BMEBoVCRObt8NaQe2%2FrxjW7Ay5WUwtA5FDXjOplO0SinacM03ryFu7qITgCz2QVmjOWfTzRpUYVwegmT%2FcKS0hg0xb6Xc0nQ1lFW16DM2F0hNZO7Z3wojDDdJnnS9QQ8Nk%2BA%2FSzetYdIS5UayHi%2FkYl6tNbMJw3Aarer3iHkEPk8EpmK%2BRCLQlyfPADVv2cyzxukc7ktYbki0L1ZNDtCfzIp3N6lhaiz1Vp5P8r2%2FNVm9QKQ%2BpD8fGl0mSMfNmMYdLDSWSXis%2B8%2FbO%2BgBBvYLgjXJIkSezVA4b2BLZHwI%2FFQlAoFjfCRAY3TXlCR1LmwuGJtYNj69PZkLY6kOdegDZ1RmIAfNqXT4YY413GOsFlVGN9zdS6hCLR9nsgK0V%2FXNmZXa7An9skK5mGybwXCFVe4WQ2cmuk%2FVFVRbLwKTLIRW3DSXOROqOQm0X%2FpE8n3cCaiax31fAXQhh9F%2FUp0L2EY%2BgfgRXTISXYeyM4%2FSpnS%2FFeNvyCV5pDQrDogn%2B8ZyZz1zf8haC2ocX3iXxZxlP2QVmeWu5uPC1BDMI2y%2BcQGOqUBfMdbGPdzmXNiHCM1gKtTijLqJLSij8JW20c%2BFkKxUrbVR38ttFKVVukwFAq9ncoikWJqgkzmFInJuvCv1DoBtM%2BjPuLUNHrfYNTbOVRh7WXcVHK4cRzCEosJsyEEL%2BSFrVdEtHnrIjY2bSEwzVAUQz7XdnQhvGHDhcun2qgy9lXOVywnWwwwQlSTzaf7phfYV2JyZGIXmdrIsFq4JKmJhEmJtdux&X-Amz-Signature=b3fd6e2901a3871fc7136856f9af74d798f371c0eee690614830c046e210c0d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I3ZJXBD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIAgBz3l1SEsNamBl%2F%2BEk3CQtnT5xTsq5Hy4%2B4skQ3BWdAiEA9j%2BdOtcF9E%2FLWkM1CDqDExWY%2FuLBfLMdWkt5tAE1MR8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOIfc%2FTJWFW50OhfCyrcAxahTvAMuSth7470PXAnAav76EeD2qGVkItxyhI7FLGGotEtdJNhjv%2FH%2Fcl0IOeclxGS5gSrKB1z36MXC315ZqBD%2BMEBoVCRObt8NaQe2%2FrxjW7Ay5WUwtA5FDXjOplO0SinacM03ryFu7qITgCz2QVmjOWfTzRpUYVwegmT%2FcKS0hg0xb6Xc0nQ1lFW16DM2F0hNZO7Z3wojDDdJnnS9QQ8Nk%2BA%2FSzetYdIS5UayHi%2FkYl6tNbMJw3Aarer3iHkEPk8EpmK%2BRCLQlyfPADVv2cyzxukc7ktYbki0L1ZNDtCfzIp3N6lhaiz1Vp5P8r2%2FNVm9QKQ%2BpD8fGl0mSMfNmMYdLDSWSXis%2B8%2FbO%2BgBBvYLgjXJIkSezVA4b2BLZHwI%2FFQlAoFjfCRAY3TXlCR1LmwuGJtYNj69PZkLY6kOdegDZ1RmIAfNqXT4YY413GOsFlVGN9zdS6hCLR9nsgK0V%2FXNmZXa7An9skK5mGybwXCFVe4WQ2cmuk%2FVFVRbLwKTLIRW3DSXOROqOQm0X%2FpE8n3cCaiax31fAXQhh9F%2FUp0L2EY%2BgfgRXTISXYeyM4%2FSpnS%2FFeNvyCV5pDQrDogn%2B8ZyZz1zf8haC2ocX3iXxZxlP2QVmeWu5uPC1BDMI2y%2BcQGOqUBfMdbGPdzmXNiHCM1gKtTijLqJLSij8JW20c%2BFkKxUrbVR38ttFKVVukwFAq9ncoikWJqgkzmFInJuvCv1DoBtM%2BjPuLUNHrfYNTbOVRh7WXcVHK4cRzCEosJsyEEL%2BSFrVdEtHnrIjY2bSEwzVAUQz7XdnQhvGHDhcun2qgy9lXOVywnWwwwQlSTzaf7phfYV2JyZGIXmdrIsFq4JKmJhEmJtdux&X-Amz-Signature=73b76f6d53b89898de975ab652474f8b38da0d9e98e1aa2c710d5890f313d1e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I3ZJXBD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIAgBz3l1SEsNamBl%2F%2BEk3CQtnT5xTsq5Hy4%2B4skQ3BWdAiEA9j%2BdOtcF9E%2FLWkM1CDqDExWY%2FuLBfLMdWkt5tAE1MR8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOIfc%2FTJWFW50OhfCyrcAxahTvAMuSth7470PXAnAav76EeD2qGVkItxyhI7FLGGotEtdJNhjv%2FH%2Fcl0IOeclxGS5gSrKB1z36MXC315ZqBD%2BMEBoVCRObt8NaQe2%2FrxjW7Ay5WUwtA5FDXjOplO0SinacM03ryFu7qITgCz2QVmjOWfTzRpUYVwegmT%2FcKS0hg0xb6Xc0nQ1lFW16DM2F0hNZO7Z3wojDDdJnnS9QQ8Nk%2BA%2FSzetYdIS5UayHi%2FkYl6tNbMJw3Aarer3iHkEPk8EpmK%2BRCLQlyfPADVv2cyzxukc7ktYbki0L1ZNDtCfzIp3N6lhaiz1Vp5P8r2%2FNVm9QKQ%2BpD8fGl0mSMfNmMYdLDSWSXis%2B8%2FbO%2BgBBvYLgjXJIkSezVA4b2BLZHwI%2FFQlAoFjfCRAY3TXlCR1LmwuGJtYNj69PZkLY6kOdegDZ1RmIAfNqXT4YY413GOsFlVGN9zdS6hCLR9nsgK0V%2FXNmZXa7An9skK5mGybwXCFVe4WQ2cmuk%2FVFVRbLwKTLIRW3DSXOROqOQm0X%2FpE8n3cCaiax31fAXQhh9F%2FUp0L2EY%2BgfgRXTISXYeyM4%2FSpnS%2FFeNvyCV5pDQrDogn%2B8ZyZz1zf8haC2ocX3iXxZxlP2QVmeWu5uPC1BDMI2y%2BcQGOqUBfMdbGPdzmXNiHCM1gKtTijLqJLSij8JW20c%2BFkKxUrbVR38ttFKVVukwFAq9ncoikWJqgkzmFInJuvCv1DoBtM%2BjPuLUNHrfYNTbOVRh7WXcVHK4cRzCEosJsyEEL%2BSFrVdEtHnrIjY2bSEwzVAUQz7XdnQhvGHDhcun2qgy9lXOVywnWwwwQlSTzaf7phfYV2JyZGIXmdrIsFq4JKmJhEmJtdux&X-Amz-Signature=127ce066ad1a0cf9da963134f202bc169caa0843b0040fec4b83c406662713a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I3ZJXBD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIAgBz3l1SEsNamBl%2F%2BEk3CQtnT5xTsq5Hy4%2B4skQ3BWdAiEA9j%2BdOtcF9E%2FLWkM1CDqDExWY%2FuLBfLMdWkt5tAE1MR8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOIfc%2FTJWFW50OhfCyrcAxahTvAMuSth7470PXAnAav76EeD2qGVkItxyhI7FLGGotEtdJNhjv%2FH%2Fcl0IOeclxGS5gSrKB1z36MXC315ZqBD%2BMEBoVCRObt8NaQe2%2FrxjW7Ay5WUwtA5FDXjOplO0SinacM03ryFu7qITgCz2QVmjOWfTzRpUYVwegmT%2FcKS0hg0xb6Xc0nQ1lFW16DM2F0hNZO7Z3wojDDdJnnS9QQ8Nk%2BA%2FSzetYdIS5UayHi%2FkYl6tNbMJw3Aarer3iHkEPk8EpmK%2BRCLQlyfPADVv2cyzxukc7ktYbki0L1ZNDtCfzIp3N6lhaiz1Vp5P8r2%2FNVm9QKQ%2BpD8fGl0mSMfNmMYdLDSWSXis%2B8%2FbO%2BgBBvYLgjXJIkSezVA4b2BLZHwI%2FFQlAoFjfCRAY3TXlCR1LmwuGJtYNj69PZkLY6kOdegDZ1RmIAfNqXT4YY413GOsFlVGN9zdS6hCLR9nsgK0V%2FXNmZXa7An9skK5mGybwXCFVe4WQ2cmuk%2FVFVRbLwKTLIRW3DSXOROqOQm0X%2FpE8n3cCaiax31fAXQhh9F%2FUp0L2EY%2BgfgRXTISXYeyM4%2FSpnS%2FFeNvyCV5pDQrDogn%2B8ZyZz1zf8haC2ocX3iXxZxlP2QVmeWu5uPC1BDMI2y%2BcQGOqUBfMdbGPdzmXNiHCM1gKtTijLqJLSij8JW20c%2BFkKxUrbVR38ttFKVVukwFAq9ncoikWJqgkzmFInJuvCv1DoBtM%2BjPuLUNHrfYNTbOVRh7WXcVHK4cRzCEosJsyEEL%2BSFrVdEtHnrIjY2bSEwzVAUQz7XdnQhvGHDhcun2qgy9lXOVywnWwwwQlSTzaf7phfYV2JyZGIXmdrIsFq4JKmJhEmJtdux&X-Amz-Signature=057e813f4538743c6cf1587f1b45180582d8d2d188847e4ba9f99c930299191e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I3ZJXBD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIAgBz3l1SEsNamBl%2F%2BEk3CQtnT5xTsq5Hy4%2B4skQ3BWdAiEA9j%2BdOtcF9E%2FLWkM1CDqDExWY%2FuLBfLMdWkt5tAE1MR8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOIfc%2FTJWFW50OhfCyrcAxahTvAMuSth7470PXAnAav76EeD2qGVkItxyhI7FLGGotEtdJNhjv%2FH%2Fcl0IOeclxGS5gSrKB1z36MXC315ZqBD%2BMEBoVCRObt8NaQe2%2FrxjW7Ay5WUwtA5FDXjOplO0SinacM03ryFu7qITgCz2QVmjOWfTzRpUYVwegmT%2FcKS0hg0xb6Xc0nQ1lFW16DM2F0hNZO7Z3wojDDdJnnS9QQ8Nk%2BA%2FSzetYdIS5UayHi%2FkYl6tNbMJw3Aarer3iHkEPk8EpmK%2BRCLQlyfPADVv2cyzxukc7ktYbki0L1ZNDtCfzIp3N6lhaiz1Vp5P8r2%2FNVm9QKQ%2BpD8fGl0mSMfNmMYdLDSWSXis%2B8%2FbO%2BgBBvYLgjXJIkSezVA4b2BLZHwI%2FFQlAoFjfCRAY3TXlCR1LmwuGJtYNj69PZkLY6kOdegDZ1RmIAfNqXT4YY413GOsFlVGN9zdS6hCLR9nsgK0V%2FXNmZXa7An9skK5mGybwXCFVe4WQ2cmuk%2FVFVRbLwKTLIRW3DSXOROqOQm0X%2FpE8n3cCaiax31fAXQhh9F%2FUp0L2EY%2BgfgRXTISXYeyM4%2FSpnS%2FFeNvyCV5pDQrDogn%2B8ZyZz1zf8haC2ocX3iXxZxlP2QVmeWu5uPC1BDMI2y%2BcQGOqUBfMdbGPdzmXNiHCM1gKtTijLqJLSij8JW20c%2BFkKxUrbVR38ttFKVVukwFAq9ncoikWJqgkzmFInJuvCv1DoBtM%2BjPuLUNHrfYNTbOVRh7WXcVHK4cRzCEosJsyEEL%2BSFrVdEtHnrIjY2bSEwzVAUQz7XdnQhvGHDhcun2qgy9lXOVywnWwwwQlSTzaf7phfYV2JyZGIXmdrIsFq4JKmJhEmJtdux&X-Amz-Signature=9cd2140aaedb3a7a2b2ca7e73734e8d1dbf5bc36ea1cae46e34621b6ac01bf06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I3ZJXBD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIAgBz3l1SEsNamBl%2F%2BEk3CQtnT5xTsq5Hy4%2B4skQ3BWdAiEA9j%2BdOtcF9E%2FLWkM1CDqDExWY%2FuLBfLMdWkt5tAE1MR8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOIfc%2FTJWFW50OhfCyrcAxahTvAMuSth7470PXAnAav76EeD2qGVkItxyhI7FLGGotEtdJNhjv%2FH%2Fcl0IOeclxGS5gSrKB1z36MXC315ZqBD%2BMEBoVCRObt8NaQe2%2FrxjW7Ay5WUwtA5FDXjOplO0SinacM03ryFu7qITgCz2QVmjOWfTzRpUYVwegmT%2FcKS0hg0xb6Xc0nQ1lFW16DM2F0hNZO7Z3wojDDdJnnS9QQ8Nk%2BA%2FSzetYdIS5UayHi%2FkYl6tNbMJw3Aarer3iHkEPk8EpmK%2BRCLQlyfPADVv2cyzxukc7ktYbki0L1ZNDtCfzIp3N6lhaiz1Vp5P8r2%2FNVm9QKQ%2BpD8fGl0mSMfNmMYdLDSWSXis%2B8%2FbO%2BgBBvYLgjXJIkSezVA4b2BLZHwI%2FFQlAoFjfCRAY3TXlCR1LmwuGJtYNj69PZkLY6kOdegDZ1RmIAfNqXT4YY413GOsFlVGN9zdS6hCLR9nsgK0V%2FXNmZXa7An9skK5mGybwXCFVe4WQ2cmuk%2FVFVRbLwKTLIRW3DSXOROqOQm0X%2FpE8n3cCaiax31fAXQhh9F%2FUp0L2EY%2BgfgRXTISXYeyM4%2FSpnS%2FFeNvyCV5pDQrDogn%2B8ZyZz1zf8haC2ocX3iXxZxlP2QVmeWu5uPC1BDMI2y%2BcQGOqUBfMdbGPdzmXNiHCM1gKtTijLqJLSij8JW20c%2BFkKxUrbVR38ttFKVVukwFAq9ncoikWJqgkzmFInJuvCv1DoBtM%2BjPuLUNHrfYNTbOVRh7WXcVHK4cRzCEosJsyEEL%2BSFrVdEtHnrIjY2bSEwzVAUQz7XdnQhvGHDhcun2qgy9lXOVywnWwwwQlSTzaf7phfYV2JyZGIXmdrIsFq4JKmJhEmJtdux&X-Amz-Signature=e076ab014d3ea0f85dba7a1d8a283e97cb1f3273c050b092d4e8840dfcd43d02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I3ZJXBD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIAgBz3l1SEsNamBl%2F%2BEk3CQtnT5xTsq5Hy4%2B4skQ3BWdAiEA9j%2BdOtcF9E%2FLWkM1CDqDExWY%2FuLBfLMdWkt5tAE1MR8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOIfc%2FTJWFW50OhfCyrcAxahTvAMuSth7470PXAnAav76EeD2qGVkItxyhI7FLGGotEtdJNhjv%2FH%2Fcl0IOeclxGS5gSrKB1z36MXC315ZqBD%2BMEBoVCRObt8NaQe2%2FrxjW7Ay5WUwtA5FDXjOplO0SinacM03ryFu7qITgCz2QVmjOWfTzRpUYVwegmT%2FcKS0hg0xb6Xc0nQ1lFW16DM2F0hNZO7Z3wojDDdJnnS9QQ8Nk%2BA%2FSzetYdIS5UayHi%2FkYl6tNbMJw3Aarer3iHkEPk8EpmK%2BRCLQlyfPADVv2cyzxukc7ktYbki0L1ZNDtCfzIp3N6lhaiz1Vp5P8r2%2FNVm9QKQ%2BpD8fGl0mSMfNmMYdLDSWSXis%2B8%2FbO%2BgBBvYLgjXJIkSezVA4b2BLZHwI%2FFQlAoFjfCRAY3TXlCR1LmwuGJtYNj69PZkLY6kOdegDZ1RmIAfNqXT4YY413GOsFlVGN9zdS6hCLR9nsgK0V%2FXNmZXa7An9skK5mGybwXCFVe4WQ2cmuk%2FVFVRbLwKTLIRW3DSXOROqOQm0X%2FpE8n3cCaiax31fAXQhh9F%2FUp0L2EY%2BgfgRXTISXYeyM4%2FSpnS%2FFeNvyCV5pDQrDogn%2B8ZyZz1zf8haC2ocX3iXxZxlP2QVmeWu5uPC1BDMI2y%2BcQGOqUBfMdbGPdzmXNiHCM1gKtTijLqJLSij8JW20c%2BFkKxUrbVR38ttFKVVukwFAq9ncoikWJqgkzmFInJuvCv1DoBtM%2BjPuLUNHrfYNTbOVRh7WXcVHK4cRzCEosJsyEEL%2BSFrVdEtHnrIjY2bSEwzVAUQz7XdnQhvGHDhcun2qgy9lXOVywnWwwwQlSTzaf7phfYV2JyZGIXmdrIsFq4JKmJhEmJtdux&X-Amz-Signature=5a06a1d83edf7d6f2b50c493ed148b37baa7b3dcc01d9fbeb5afe4eb00f7d547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I3ZJXBD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIAgBz3l1SEsNamBl%2F%2BEk3CQtnT5xTsq5Hy4%2B4skQ3BWdAiEA9j%2BdOtcF9E%2FLWkM1CDqDExWY%2FuLBfLMdWkt5tAE1MR8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOIfc%2FTJWFW50OhfCyrcAxahTvAMuSth7470PXAnAav76EeD2qGVkItxyhI7FLGGotEtdJNhjv%2FH%2Fcl0IOeclxGS5gSrKB1z36MXC315ZqBD%2BMEBoVCRObt8NaQe2%2FrxjW7Ay5WUwtA5FDXjOplO0SinacM03ryFu7qITgCz2QVmjOWfTzRpUYVwegmT%2FcKS0hg0xb6Xc0nQ1lFW16DM2F0hNZO7Z3wojDDdJnnS9QQ8Nk%2BA%2FSzetYdIS5UayHi%2FkYl6tNbMJw3Aarer3iHkEPk8EpmK%2BRCLQlyfPADVv2cyzxukc7ktYbki0L1ZNDtCfzIp3N6lhaiz1Vp5P8r2%2FNVm9QKQ%2BpD8fGl0mSMfNmMYdLDSWSXis%2B8%2FbO%2BgBBvYLgjXJIkSezVA4b2BLZHwI%2FFQlAoFjfCRAY3TXlCR1LmwuGJtYNj69PZkLY6kOdegDZ1RmIAfNqXT4YY413GOsFlVGN9zdS6hCLR9nsgK0V%2FXNmZXa7An9skK5mGybwXCFVe4WQ2cmuk%2FVFVRbLwKTLIRW3DSXOROqOQm0X%2FpE8n3cCaiax31fAXQhh9F%2FUp0L2EY%2BgfgRXTISXYeyM4%2FSpnS%2FFeNvyCV5pDQrDogn%2B8ZyZz1zf8haC2ocX3iXxZxlP2QVmeWu5uPC1BDMI2y%2BcQGOqUBfMdbGPdzmXNiHCM1gKtTijLqJLSij8JW20c%2BFkKxUrbVR38ttFKVVukwFAq9ncoikWJqgkzmFInJuvCv1DoBtM%2BjPuLUNHrfYNTbOVRh7WXcVHK4cRzCEosJsyEEL%2BSFrVdEtHnrIjY2bSEwzVAUQz7XdnQhvGHDhcun2qgy9lXOVywnWwwwQlSTzaf7phfYV2JyZGIXmdrIsFq4JKmJhEmJtdux&X-Amz-Signature=6e5b6b26f0ee9ebb68564767741e807f8f6379264555c934aca7264c388b298d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I3ZJXBD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIAgBz3l1SEsNamBl%2F%2BEk3CQtnT5xTsq5Hy4%2B4skQ3BWdAiEA9j%2BdOtcF9E%2FLWkM1CDqDExWY%2FuLBfLMdWkt5tAE1MR8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOIfc%2FTJWFW50OhfCyrcAxahTvAMuSth7470PXAnAav76EeD2qGVkItxyhI7FLGGotEtdJNhjv%2FH%2Fcl0IOeclxGS5gSrKB1z36MXC315ZqBD%2BMEBoVCRObt8NaQe2%2FrxjW7Ay5WUwtA5FDXjOplO0SinacM03ryFu7qITgCz2QVmjOWfTzRpUYVwegmT%2FcKS0hg0xb6Xc0nQ1lFW16DM2F0hNZO7Z3wojDDdJnnS9QQ8Nk%2BA%2FSzetYdIS5UayHi%2FkYl6tNbMJw3Aarer3iHkEPk8EpmK%2BRCLQlyfPADVv2cyzxukc7ktYbki0L1ZNDtCfzIp3N6lhaiz1Vp5P8r2%2FNVm9QKQ%2BpD8fGl0mSMfNmMYdLDSWSXis%2B8%2FbO%2BgBBvYLgjXJIkSezVA4b2BLZHwI%2FFQlAoFjfCRAY3TXlCR1LmwuGJtYNj69PZkLY6kOdegDZ1RmIAfNqXT4YY413GOsFlVGN9zdS6hCLR9nsgK0V%2FXNmZXa7An9skK5mGybwXCFVe4WQ2cmuk%2FVFVRbLwKTLIRW3DSXOROqOQm0X%2FpE8n3cCaiax31fAXQhh9F%2FUp0L2EY%2BgfgRXTISXYeyM4%2FSpnS%2FFeNvyCV5pDQrDogn%2B8ZyZz1zf8haC2ocX3iXxZxlP2QVmeWu5uPC1BDMI2y%2BcQGOqUBfMdbGPdzmXNiHCM1gKtTijLqJLSij8JW20c%2BFkKxUrbVR38ttFKVVukwFAq9ncoikWJqgkzmFInJuvCv1DoBtM%2BjPuLUNHrfYNTbOVRh7WXcVHK4cRzCEosJsyEEL%2BSFrVdEtHnrIjY2bSEwzVAUQz7XdnQhvGHDhcun2qgy9lXOVywnWwwwQlSTzaf7phfYV2JyZGIXmdrIsFq4JKmJhEmJtdux&X-Amz-Signature=6cfc65736225bc0fa2ae5898e07ff8326423a0759f9f2d341bd9aac6447512cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I3ZJXBD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIAgBz3l1SEsNamBl%2F%2BEk3CQtnT5xTsq5Hy4%2B4skQ3BWdAiEA9j%2BdOtcF9E%2FLWkM1CDqDExWY%2FuLBfLMdWkt5tAE1MR8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOIfc%2FTJWFW50OhfCyrcAxahTvAMuSth7470PXAnAav76EeD2qGVkItxyhI7FLGGotEtdJNhjv%2FH%2Fcl0IOeclxGS5gSrKB1z36MXC315ZqBD%2BMEBoVCRObt8NaQe2%2FrxjW7Ay5WUwtA5FDXjOplO0SinacM03ryFu7qITgCz2QVmjOWfTzRpUYVwegmT%2FcKS0hg0xb6Xc0nQ1lFW16DM2F0hNZO7Z3wojDDdJnnS9QQ8Nk%2BA%2FSzetYdIS5UayHi%2FkYl6tNbMJw3Aarer3iHkEPk8EpmK%2BRCLQlyfPADVv2cyzxukc7ktYbki0L1ZNDtCfzIp3N6lhaiz1Vp5P8r2%2FNVm9QKQ%2BpD8fGl0mSMfNmMYdLDSWSXis%2B8%2FbO%2BgBBvYLgjXJIkSezVA4b2BLZHwI%2FFQlAoFjfCRAY3TXlCR1LmwuGJtYNj69PZkLY6kOdegDZ1RmIAfNqXT4YY413GOsFlVGN9zdS6hCLR9nsgK0V%2FXNmZXa7An9skK5mGybwXCFVe4WQ2cmuk%2FVFVRbLwKTLIRW3DSXOROqOQm0X%2FpE8n3cCaiax31fAXQhh9F%2FUp0L2EY%2BgfgRXTISXYeyM4%2FSpnS%2FFeNvyCV5pDQrDogn%2B8ZyZz1zf8haC2ocX3iXxZxlP2QVmeWu5uPC1BDMI2y%2BcQGOqUBfMdbGPdzmXNiHCM1gKtTijLqJLSij8JW20c%2BFkKxUrbVR38ttFKVVukwFAq9ncoikWJqgkzmFInJuvCv1DoBtM%2BjPuLUNHrfYNTbOVRh7WXcVHK4cRzCEosJsyEEL%2BSFrVdEtHnrIjY2bSEwzVAUQz7XdnQhvGHDhcun2qgy9lXOVywnWwwwQlSTzaf7phfYV2JyZGIXmdrIsFq4JKmJhEmJtdux&X-Amz-Signature=6b1898e60ade9f3a995bf9974e13c6ce8097e5749a2779537df84689dd945c66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MJFPG6A%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDPexXcdBPlfD%2BCR%2Bt0qrqbzH%2F4T3%2Br%2FghgOEM6ZjsxtAIgL5UxqM1F3kr1tOMOHr12bJayTLHV7kaU2q6%2F1j%2BZPQYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKBpXinyCqur0dnqBCrcA%2FJTLcIVFacY4YCELb3Sqd25IXGDxW0dR2cr5GK5pbN13MEJdA%2B5zZd8oHj7uO1CXI9%2F6vgEPzHQcr5rRvXgOWgrIWEmsM58MiBCKvfkDXv0vdiymgWI9nozBgPPRKhLcejk9Z5AkKCL1M81NMyxaMaYExD6vGnlnITZytKMawhkMr8eUBeyH9PVIWQdwu7uPPqZ%2B31jdC6pr1LUkYC1evLkVUdRR0Hu7TO0410ryOUsERfNZjKKTF%2FkFc6Afv1KwAGWQh5wD9CRZxWgJ1qljmwvzDHJ1kFK55ICxstrdabCUMbXut4mlNSDt7YWakWyBgraoytRIl1AkkjfGSLxfvKPEx3mGgZAX2%2FlI7RNG3HLlmtSe7G8nL9LRk1XAJvxEoyvKZIAWJ2ZZDPle2yM0CXCNYmNtd72hUF2AdpjvCqZYut%2Bv4R8SnQlfiN8ww63%2FNgQw%2Bkj%2FAZbEzKnwIqPk%2FcoCSO%2BzAqtQPmdMooviX1vM9tnpDeV6Fu0bYZcqx2nnevdjzk%2BzR%2BnxToqqzTwCOaF5Ze1llLBmSgoCcyG%2FVOI2ezesl%2BzeNCfFTBYtraMJjuy%2BjSXduqbMPw2epYdoQWjm%2B8KUZDPURUcCu6OV84bMNnGacjSAQenVr8rMKKz%2BcQGOqUBXqea35XMmj1bFpMJSkuCx%2FkwRh9scSGhkS1lo43Ax4072jECJrA11b28S2H5scYFdkdgiD6Urwx22HznyoC0M2pgO%2BtDfZaok2DnAEBik%2FebuSJvf5%2BnjsDkDTYnaNmFfeQDrIJORKKD9FDEYPo045DEAaLqfFzCmIwBM27Dxwg1ylKeKTjEb5zKA68QG5ixHYMFEEXoHbRJRYexXHvO77%2FN8Fh5&X-Amz-Signature=b60f18cad58eac67202be6797d79e451702b9d3053e90dabb79c61c6de2dde0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ARWX3AS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIHd24nDuXqEIJMfphD1Rp3LIUFqOEXb87KQAeEFVGHkDAiAklF3Jo0ffLRT2ODNgVYO43%2Fr5wge3oBt2SJ%2FLqKVvMir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMfenxTZ1F5YJ3ueC6KtwDjEsNtgk8zRLJWdpWwGoTcAXtmf%2BGCEXdKa3JrPh%2BXTGAYMGr1E%2FIovSx1ZVLtU8oswgyq3YqnV2axF2aF9Oi1S56BSxdPtHOABgska0eNco63PIbrbxEdR5i9IW6xH1WUpNS61GyehGE4%2BrkN4QEtLFAWa8Nvu2kIUByT6LZcJyYufHNeWDC%2BZMdkPY5wSPnMM6V3eH%2FYoI%2FBtS76rTv7vjDTm58rki9VpRb1%2BUWWXSKb2okWGv%2BzH451oRYvV9pV8FveKn%2B5lO2uM2DXcvqqIOt45FaFx9ujbqPfkuBzkj9oaJnWDn81bWbky2oJvz1Ado8mTojsdp0o4ScH8j6Z6XGLi1mNay5VAuZwnjSLJfjn7iav%2Bjr2YhVDDER9EaX3S41zhZSO5xKIRyV%2BwHLYxVLSIbngzN%2BRkWS%2FHDexuxEuR3PRKwvA0agcjhHYWoNp6qNEz4mkowL7nSAtCnXr5sruRiP6%2FWesqNcHXdFBB%2FkS%2F9d%2BYzwvbxwE1dK919%2BtqXRxSDTVkY0j9bKxcOmv3345p1tLdeHgBiSj%2F7w8KQ%2BNIvrjH5zlixnVhFr9ec4BIM9P5qumh0xBYOZUfGx%2FcqLm%2FI6WdHYKW5j%2B%2BYCyB8Qc5HMAu8FERzHh2AwlbT5xAY6pgEjfg0C50eMHCU%2Fgx1%2F5TfX9aoMffQvSsty3kLEjGbaRMtkjxTAlr7HbnrGNvr1TJqb5QEy2p31t%2BFMpu%2Ffx6H3s8BFi36GCyVAh%2FNoPc5x6A2JVZi%2FFGwZ4FXqc45%2FLpyKhdnK%2BlEkEAgzjJh1nwvgP%2BQDu5RHCVRJGDW7nXI4Di8dNPaeTBmC35fRToIc7WOpWkOiGWaynk4js6HP%2F0HNUhYb6WtI&X-Amz-Signature=6a3d6a6f575f615b16dcb85099e26615e13ddc122e1ce0971c6552513f90f2c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDIJT5W%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIC1hQ7zrsyoQyIQ8H6eKvyAZJI1JkAOEHKG2%2B7jOYCBjAiEAlYBqRmQRN%2Bi7AVGATc5rppuVnZrEzUGLkBjbawd%2B29kq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDGZiLGTg4Y6oeC3bxCrcA5riW5jj0Xc9sOD1DQRI%2BwUgFZawgvCOFtGBEo4AFRQucLhKENRf9HPaBfzxX0y3I4ZnPUWxRAYcZHDaTjgSlsItSQKKrj3hDji%2B4tsUX%2FWDE5JeoSU2DB5cw%2FAGaEomElXy%2BdbLbFNkPe3Z3n5KVzM35JHUKJhieQz9F%2FJ240iyHm%2BKK4FPTCrFiFmhS7Dx0YxBDbK%2BSVEoOGt7FJJJ2Jtn2DONFciIWJrJ%2BZF8rLypN2IJkUQTJT%2FynbAUOoXzli8E3KgO1w0RVrkQ7BX2EjvyHRvdYbRV5%2Be1tARIHay1OkMthVEnvmBJbsdN2Rb9ty%2FZ8cxzY4ADHa3zgeL0Yv%2BX1S%2B3kRUNeq58kQEaHTKeoYgnSHIz%2BhQJCtPPlubYsPYRyY%2BQ5yN1q%2FtGjT7mlzw9FXB2uhZaiRuUQKNtY%2BTkgquWcOFsrIggb0LF2ra6R2lo9L29litQ1JvKhaAFjp9u6cBvjq7bwd%2FbmJorvy9sZn6KJiBpjEcQyqTA9%2Bs%2FSLNeRWpsZx36yVe86On%2BqzyA3FsQXD5nR9EDt9lIBUC%2Bg7YW5xDfj%2F1iRPkgbcth%2FhUgrfEytBtYhNK%2BS3fCRF%2Fc%2FhGQ5IZaWxHg1y2wKiASSLa0rYiN%2Fva0HBlaMO2y%2BcQGOqUBp8JRP2b3LmHqg8Qs86Kp6UTjQrcF4EPmC0xnAkTmz8NLrdJmY1AzBTndgHTmj7JWaqq92quC4LJ5dpctJdUSa3JrnrJbTcoGAQOzo0vvGrNMh3Y8%2BlUkgsXFCv2lWb%2B3xTp7PP6MpQag58w24p7MYZNTOrpAFX8fpyyGFVUt1%2FlP0Q2aHnZnr2R3w6AVxidp5%2BvFqS%2FqioyHpXOJjy9gSdhRrFch&X-Amz-Signature=7a13dd0073a36c5d8110f69b53e34771b83869d2d08d7ed7c0f850f94ca855ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I3ZJXBD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIAgBz3l1SEsNamBl%2F%2BEk3CQtnT5xTsq5Hy4%2B4skQ3BWdAiEA9j%2BdOtcF9E%2FLWkM1CDqDExWY%2FuLBfLMdWkt5tAE1MR8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOIfc%2FTJWFW50OhfCyrcAxahTvAMuSth7470PXAnAav76EeD2qGVkItxyhI7FLGGotEtdJNhjv%2FH%2Fcl0IOeclxGS5gSrKB1z36MXC315ZqBD%2BMEBoVCRObt8NaQe2%2FrxjW7Ay5WUwtA5FDXjOplO0SinacM03ryFu7qITgCz2QVmjOWfTzRpUYVwegmT%2FcKS0hg0xb6Xc0nQ1lFW16DM2F0hNZO7Z3wojDDdJnnS9QQ8Nk%2BA%2FSzetYdIS5UayHi%2FkYl6tNbMJw3Aarer3iHkEPk8EpmK%2BRCLQlyfPADVv2cyzxukc7ktYbki0L1ZNDtCfzIp3N6lhaiz1Vp5P8r2%2FNVm9QKQ%2BpD8fGl0mSMfNmMYdLDSWSXis%2B8%2FbO%2BgBBvYLgjXJIkSezVA4b2BLZHwI%2FFQlAoFjfCRAY3TXlCR1LmwuGJtYNj69PZkLY6kOdegDZ1RmIAfNqXT4YY413GOsFlVGN9zdS6hCLR9nsgK0V%2FXNmZXa7An9skK5mGybwXCFVe4WQ2cmuk%2FVFVRbLwKTLIRW3DSXOROqOQm0X%2FpE8n3cCaiax31fAXQhh9F%2FUp0L2EY%2BgfgRXTISXYeyM4%2FSpnS%2FFeNvyCV5pDQrDogn%2B8ZyZz1zf8haC2ocX3iXxZxlP2QVmeWu5uPC1BDMI2y%2BcQGOqUBfMdbGPdzmXNiHCM1gKtTijLqJLSij8JW20c%2BFkKxUrbVR38ttFKVVukwFAq9ncoikWJqgkzmFInJuvCv1DoBtM%2BjPuLUNHrfYNTbOVRh7WXcVHK4cRzCEosJsyEEL%2BSFrVdEtHnrIjY2bSEwzVAUQz7XdnQhvGHDhcun2qgy9lXOVywnWwwwQlSTzaf7phfYV2JyZGIXmdrIsFq4JKmJhEmJtdux&X-Amz-Signature=220d6abdd94e18a0858f71f39b0ae5674c5864e7fa5d8a2f4588e71edf36684b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KGO2IGO%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIA7HPpnGru2RTcJLdqfiZRKQjc5zF%2FEP%2ByV0jT4LPnCcAiEAkoHo%2FqLF8Uz6eJhGJdjXrfsJMqQs%2BBPnaQdGk1ObTLgq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDGLVnCyr%2BHrtpvfK2ircAzQpVLpcoJokluXabzdw9BR3DGciHHbP0s%2BRyN%2BDkSRBitTaOaPIbrPPckghlP5dSdK7iZmqwHIHwbevXWOEctalYLkLzo5S43ZYxJG1mhtnBMIv1tgir9J8FTSvQmYpyN1frxb1pfDXHX6OpnDhLHeDax1kEcgYF3Wey0Yh0zmGKL13X7XqfcOTc3Wy%2FRrMXThicHO65eoQrMSU6F3YVCaUGJcaTb5isHQKKdqBsfeFosmXT3FpsYDwGcsJZZL7k5k7yCJaQYYdV4OvIqv2tB56RkFnKepup7tT6nTViVS32vncbXp1rKdUnXXye3bxBmsVpPKIlB1u2EdO7lryt9WSQlLUdLLcTm9OdF6fZ%2B0GU2Hw%2BF%2BrBzXEJcQFZc5xsFUJZW9uI1tq0tu%2BkAQyMCoWQxV64rxAeWjCPmfwbfqwoUFj67USarBbV22OkyOYjtHIJ6rY7RmC4K6j%2BzmpaeQH3XIzZlJiQq%2FpSxR1yHdpfrbUwaiBxbD8b6UPkVah%2B2skIn54MVEgtVwohEyFkRN5LcpZRP7uiTV1Bd%2B%2BQHZYg921TMnd5ZT%2FpfXUwxg76CV5%2FSPXkPOCctYOb10msG04SCp3Ien5Jm3F0FEXAjWqMbE9%2FZDvWCuMZ7J2MM2y%2BcQGOqUB2CT%2BpHqRiYgm5pQ0uhOgN3wzAg4qxU53K0poO5BJPJPdKB5KaUp7GRHjyV0NHngxRye%2BvPuGTHZe43RonPj%2BPfznIUvpvxmnlSbqdJ3mw906aw5q23lBHzCQ8sqjXc2VyRtkNvQGZULXgbqTD5tw7ZGtQIvYCZyotY8baRDOqV16ka83GiNyb8WFOUgeJSTPDVC5xm%2BEOVusSEo2g9LnHJdynd%2B2&X-Amz-Signature=6a3c229b7d976c32cd18e4d6490a112f1f4e7c077e8217264933e517eaa27722&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I3ZJXBD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIAgBz3l1SEsNamBl%2F%2BEk3CQtnT5xTsq5Hy4%2B4skQ3BWdAiEA9j%2BdOtcF9E%2FLWkM1CDqDExWY%2FuLBfLMdWkt5tAE1MR8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOIfc%2FTJWFW50OhfCyrcAxahTvAMuSth7470PXAnAav76EeD2qGVkItxyhI7FLGGotEtdJNhjv%2FH%2Fcl0IOeclxGS5gSrKB1z36MXC315ZqBD%2BMEBoVCRObt8NaQe2%2FrxjW7Ay5WUwtA5FDXjOplO0SinacM03ryFu7qITgCz2QVmjOWfTzRpUYVwegmT%2FcKS0hg0xb6Xc0nQ1lFW16DM2F0hNZO7Z3wojDDdJnnS9QQ8Nk%2BA%2FSzetYdIS5UayHi%2FkYl6tNbMJw3Aarer3iHkEPk8EpmK%2BRCLQlyfPADVv2cyzxukc7ktYbki0L1ZNDtCfzIp3N6lhaiz1Vp5P8r2%2FNVm9QKQ%2BpD8fGl0mSMfNmMYdLDSWSXis%2B8%2FbO%2BgBBvYLgjXJIkSezVA4b2BLZHwI%2FFQlAoFjfCRAY3TXlCR1LmwuGJtYNj69PZkLY6kOdegDZ1RmIAfNqXT4YY413GOsFlVGN9zdS6hCLR9nsgK0V%2FXNmZXa7An9skK5mGybwXCFVe4WQ2cmuk%2FVFVRbLwKTLIRW3DSXOROqOQm0X%2FpE8n3cCaiax31fAXQhh9F%2FUp0L2EY%2BgfgRXTISXYeyM4%2FSpnS%2FFeNvyCV5pDQrDogn%2B8ZyZz1zf8haC2ocX3iXxZxlP2QVmeWu5uPC1BDMI2y%2BcQGOqUBfMdbGPdzmXNiHCM1gKtTijLqJLSij8JW20c%2BFkKxUrbVR38ttFKVVukwFAq9ncoikWJqgkzmFInJuvCv1DoBtM%2BjPuLUNHrfYNTbOVRh7WXcVHK4cRzCEosJsyEEL%2BSFrVdEtHnrIjY2bSEwzVAUQz7XdnQhvGHDhcun2qgy9lXOVywnWwwwQlSTzaf7phfYV2JyZGIXmdrIsFq4JKmJhEmJtdux&X-Amz-Signature=869883de72f35b26c01682576ae056cbe9aa895c7415fed68c378fc6fa102f96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3QTKTYL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCICyUxLRad5kCMYUDTlwn3L%2BGaK%2BaFVK8L99TlTexjxI3AiEA2DVmoXC1UzcXv%2B45DvFeDxhhUGzMMNLdxsDf0EEmcGwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMOdINYczgrbO2iEYCrcA99R%2F5qq3Z3of5jy16rf8Uc0TrLkjctmoQrfNFZ3KsvvZS8ToFBPg4WEO7rhZYLaur9wrgTO839MK3yIfAkjX3i2kO2otolG41sj2pmVJYIsNAxdCERDrLaHP8qhm7OGHBGa3rqbmQW%2B7xt4aozNqkxf0pILs71RY8img84aVEBZHnGDA3bhDXHgEdO%2BDURFKx5Eln52yCViy9nS3hPjqEOHbfDZhAuI58IbEVjjiiCrPg64EqdC36CD2d4%2FKghgUoaC0HAaWwYiSCGTWA%2BN5dJ0bUdmHgtT3DzrY7llYw4pSiTWHpcVxvssju%2B1FuLnW3R4wN10NydjQPGhMg46ptsJJ7X4NlkoIaqZKyGB%2Bkf9MPRCWXOUia6fNFn5jL3rKbMyUckjI9r8GkZ%2Fr8M8ZvEcT1RzPY1dcROK%2FhaBaZxi2zetDZ3Qj6fhF5Vfh6kFpUDg9E%2B098j6U9lHLzS2wsqLEOC%2BrF08T0Ey3gsgKBKp30kztekSZnasKA3i2efEN6U7kyCu9ZRlPG9VT34zpp3kkFRDTa9pR3QU0Lw20DPfUBis%2BoC58Rl9C1YzCMrb6QY0mwYsTr1AprF5debdp0StihNTHnu2JeaRnw02PocFtwmWsOAY3Rzr2pQcMMmy%2BcQGOqUBg5fQ%2Fpq%2BxWycVKaMqXDmeeVY%2F1%2BrHBqXxi2CeOB4aPKM7xhoQDVSyttCBE2bFF4N6nwKNgvObZNfQtnOiG4pyBCYvL4Uak6%2By%2BiAx%2BTbNg1V%2FDmSFd9D1uXXtr5jNI1ojTI4%2BZP1dVuPclAU5BLreJ%2BRtX8mduRklHF7Z3lhtMeOGe4QRIxIhI2lMzHJopnHwaTsu9ydASNfLd9fOYUcH6BBZfGN&X-Amz-Signature=ae14028d6b6cb412b34a77b336c00263a7ed55ee8522b185889145687055e7c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I3ZJXBD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIAgBz3l1SEsNamBl%2F%2BEk3CQtnT5xTsq5Hy4%2B4skQ3BWdAiEA9j%2BdOtcF9E%2FLWkM1CDqDExWY%2FuLBfLMdWkt5tAE1MR8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOIfc%2FTJWFW50OhfCyrcAxahTvAMuSth7470PXAnAav76EeD2qGVkItxyhI7FLGGotEtdJNhjv%2FH%2Fcl0IOeclxGS5gSrKB1z36MXC315ZqBD%2BMEBoVCRObt8NaQe2%2FrxjW7Ay5WUwtA5FDXjOplO0SinacM03ryFu7qITgCz2QVmjOWfTzRpUYVwegmT%2FcKS0hg0xb6Xc0nQ1lFW16DM2F0hNZO7Z3wojDDdJnnS9QQ8Nk%2BA%2FSzetYdIS5UayHi%2FkYl6tNbMJw3Aarer3iHkEPk8EpmK%2BRCLQlyfPADVv2cyzxukc7ktYbki0L1ZNDtCfzIp3N6lhaiz1Vp5P8r2%2FNVm9QKQ%2BpD8fGl0mSMfNmMYdLDSWSXis%2B8%2FbO%2BgBBvYLgjXJIkSezVA4b2BLZHwI%2FFQlAoFjfCRAY3TXlCR1LmwuGJtYNj69PZkLY6kOdegDZ1RmIAfNqXT4YY413GOsFlVGN9zdS6hCLR9nsgK0V%2FXNmZXa7An9skK5mGybwXCFVe4WQ2cmuk%2FVFVRbLwKTLIRW3DSXOROqOQm0X%2FpE8n3cCaiax31fAXQhh9F%2FUp0L2EY%2BgfgRXTISXYeyM4%2FSpnS%2FFeNvyCV5pDQrDogn%2B8ZyZz1zf8haC2ocX3iXxZxlP2QVmeWu5uPC1BDMI2y%2BcQGOqUBfMdbGPdzmXNiHCM1gKtTijLqJLSij8JW20c%2BFkKxUrbVR38ttFKVVukwFAq9ncoikWJqgkzmFInJuvCv1DoBtM%2BjPuLUNHrfYNTbOVRh7WXcVHK4cRzCEosJsyEEL%2BSFrVdEtHnrIjY2bSEwzVAUQz7XdnQhvGHDhcun2qgy9lXOVywnWwwwQlSTzaf7phfYV2JyZGIXmdrIsFq4JKmJhEmJtdux&X-Amz-Signature=d85be5541c77dbb55fa397ebb02ba8328e4b382a5d09388c7eacb2ef26187094&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTH3E455%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQC2KEJECV3I8h%2BxTxwf7ieq8gYH21vSsPxXx10bKUf%2BfQIhALz2FmtMrsPGMWSN8zdwALR60WmjkJcCKT4NDp57WvmPKv8DCE8QABoMNjM3NDIzMTgzODA1Igy%2BfT2n2BpA1pgqMTEq3APVgIYPpfLXQ0FjMRG3UYIcYvzkz0QhqnDNr4VV3UaWYquaqwEuhSM2qm55ML2Ph5Sjm1bjcvzALBe5jxx7oxW9FF5X7e4KdPuBjfX%2BxZiR%2FgjxEoWMMM7bJIerLlc5LJ5zVKdDL519WY6TQ%2F6uFtdzxhY8OUT8L91MMpAgaUj5pY3G%2Fy0KH%2FD6LRQ0IT90lfH%2B%2FmS4uy5%2F7IjT3Wv%2BrSI9EM0VMdK%2B37bv%2Fvizv%2Bdzm2CBYCfHy%2FN65uOfCQtvLMoWtI7rTGwHbuO2iiNwdM2Dfwtlr4Edy2pMklRDMP1Dq3Ro%2FikjrNZvJ6TP2KjiAVtuKhkRyZzBEFsbV2AlegvfaSp%2F6M5IX519ASHR1NNdRfhcRoh4l5%2BTtkg9hypyaUOfBTu0uCz%2BIZDr%2BdnJkBij%2FxmFId3SqRvpSAp7%2B9pSeVCwpnII%2FQGuA1CntFzaSlPD4Vvgfih22sLYPTLPl3VHL40UVCmvBv7WGxCDPd6S1psAT0wMzzdilw%2FF5dO15Dg6%2B33S4DD8RzQHLzxwRB2njx1WKFr67Uyb0lr0oc4SesXtyXaX4qTQaGNEfTLzeubFQ%2B7XSDxJK5jNxMANw%2Fl30%2Bl3TIFs3NLr4ZpNAGTvINqQlQv5Y0yJ6gk3ODCOs%2FnEBjqkAS%2FhvWivnjiYVivSett%2FOcLB28tD13kCIWWEFgHmZ2LpcXuRl3m45yx0mmZpdz%2F7dFGAtIMfxXdq6KS4ZzKGRZysP6KDTNhUiVG0TrOmQFfDveMPgqIcI00zrfbgi%2BIAtoELoPllAGkvDnYcdDpfW%2FVK%2BckwJSYBDWOPwBIPuX%2BR%2BQgZtxClx2rmnBJBUs%2Bg46Kz2UVDRRQL9Eg7FN1F42EOOu0O&X-Amz-Signature=eec1bea92a2fe71d9ea89095fb7c1e8b4a7a9934d90201fe13f843fdac22c770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I3ZJXBD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIAgBz3l1SEsNamBl%2F%2BEk3CQtnT5xTsq5Hy4%2B4skQ3BWdAiEA9j%2BdOtcF9E%2FLWkM1CDqDExWY%2FuLBfLMdWkt5tAE1MR8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOIfc%2FTJWFW50OhfCyrcAxahTvAMuSth7470PXAnAav76EeD2qGVkItxyhI7FLGGotEtdJNhjv%2FH%2Fcl0IOeclxGS5gSrKB1z36MXC315ZqBD%2BMEBoVCRObt8NaQe2%2FrxjW7Ay5WUwtA5FDXjOplO0SinacM03ryFu7qITgCz2QVmjOWfTzRpUYVwegmT%2FcKS0hg0xb6Xc0nQ1lFW16DM2F0hNZO7Z3wojDDdJnnS9QQ8Nk%2BA%2FSzetYdIS5UayHi%2FkYl6tNbMJw3Aarer3iHkEPk8EpmK%2BRCLQlyfPADVv2cyzxukc7ktYbki0L1ZNDtCfzIp3N6lhaiz1Vp5P8r2%2FNVm9QKQ%2BpD8fGl0mSMfNmMYdLDSWSXis%2B8%2FbO%2BgBBvYLgjXJIkSezVA4b2BLZHwI%2FFQlAoFjfCRAY3TXlCR1LmwuGJtYNj69PZkLY6kOdegDZ1RmIAfNqXT4YY413GOsFlVGN9zdS6hCLR9nsgK0V%2FXNmZXa7An9skK5mGybwXCFVe4WQ2cmuk%2FVFVRbLwKTLIRW3DSXOROqOQm0X%2FpE8n3cCaiax31fAXQhh9F%2FUp0L2EY%2BgfgRXTISXYeyM4%2FSpnS%2FFeNvyCV5pDQrDogn%2B8ZyZz1zf8haC2ocX3iXxZxlP2QVmeWu5uPC1BDMI2y%2BcQGOqUBfMdbGPdzmXNiHCM1gKtTijLqJLSij8JW20c%2BFkKxUrbVR38ttFKVVukwFAq9ncoikWJqgkzmFInJuvCv1DoBtM%2BjPuLUNHrfYNTbOVRh7WXcVHK4cRzCEosJsyEEL%2BSFrVdEtHnrIjY2bSEwzVAUQz7XdnQhvGHDhcun2qgy9lXOVywnWwwwQlSTzaf7phfYV2JyZGIXmdrIsFq4JKmJhEmJtdux&X-Amz-Signature=4e2d6cafb9d6a2bcbc693f4fa4406fee86aa8da930074bda3d95c36723250148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667NEP3ZY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIEv8sj%2BGajvANtICjZjBiC5Je3EO2nV0ORtc7iEhnbGpAiEA2uOjADNb%2BEVcxhxHQkSLnm%2BieF48MetqYNSL9lFZpDgq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDR%2FX0PdNo2lLMc%2FkircA02Gi7nf6UNR7orMW7lrz6HsnnVOHZAO2EbX7koG0d5AN5tfKfAPw1WWbHwF6Ffq%2BleFphb2fpZE2I8r%2FPUsFQZ9xJdYiZeuFnywm1S3oxvFJGT4xpZD8aCu83v8AaGTrJZo%2BVXB8eUj4PrHTzRKoqTKQvX9%2B6xVS56bsmNpGVEtO4tzmwxflU4DQ9Bc4g2i%2BCp%2BO8%2Bul%2BC0srUiSv45fujYRqgzyZCKSP1qi4%2FQOGZyeUjiXM%2FfUaBShn08nhPV8ut7F3yi9Clp4yr5QK3U9K751LLZOrhExFmBRLg6cQIshn4eVFFlz%2FTb6jY0Jb3YFOdhQwhNJLAVk1YwebzE5GjhTYfP7zY2erThQBt7pU%2BdUKQDYxxhtIPEud2tY9XTv7CiEx9i18TdF1uMuB8k6n3Oj15XxN6xf2BI%2Fm5ebOfUvubTLsw3yi5QdonfhJYb5O7ZR40u%2BKt0t3HOhyYEYJE6StBbHbcX2Od4gcShCV75xYTJ6oPblJWsBkLF8nrMq2aDfXjQZQgPa9DFFJ%2F%2Bz5PWUqjIbW1k9025FiKxE1CaOZzFYxlCCYLrQ8c7BFuASCDujISy68DqOrHuefLWcjzqsjwCDGG4ZzivCZZZaTNyCE%2Bor4Tyo%2F3JDo2aMIuz%2BcQGOqUBSay4elkQvPgD%2BVBuZpm6KBux65fZ4t21E8ZyGxV1nFv49MX50Z0i1msu8vGZFhx7zhyGpbQ9hWm3ZDaVMcA2elPJs9cW26vlQR0drCko5ssGIQYmPFKeHF%2BKHq9ej3D22uFoY94wZaeAeHu1BAqfCqOGxByPuT%2BJ8S%2FhlXGLHkNdT2af4Ej2pTnU3mVJpz8cQLJFhHbQbkH2FrpY90RaowNPJC2p&X-Amz-Signature=1058e5a53f8f5dd22860b9df00797cef92d5ef85d77022239d1de93f914b598e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JVX44YF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCICRFQLgAEln2SE2nmv3t9%2FfeedAcfjuKu6rN8FVfHwXQAiEAl8RJxeuegdopIvqvMTTvvWCnnVwd%2FUsbfE9rT4IibmYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCiBYNJ9nws6pASmRCrcAyiV9TCTIDKCzrU1sf3qqrHMmeJl6WZYDX%2FUNYpy7AxWM6VOCHTddViMn%2B5yHIp1MvR3BawFhXBn%2BWwiE9gdv6Fzv0GinX2pxNHcD7NllgIfvC1710ua89eEi6v52FTxCdozi2Xy4UqZz8CwhfEDcD%2FM67sbguCJzn%2BGR3tzYQlyH1hRt3kJaFWgz2CKbTSpR4lmBeMp5gs4rEfHJuFe%2FebIpMcAuzMyAsNM%2F89p6JGTAInI87JgrO5Sg8MemTWf4BDtOUu9zbgc%2B8Q5qbqjHzmNK3Wjr6P1zcEBmEs7LXc532MM07b%2Bt46XILhSkxunxTqLzxjiP%2F42ZtfPqn8QwMcVIv7p1dwKqMPU2XnEDwDQiwuTgGcT2Oe4HeCXwuDJBvDnSlfbeBIBVqMyYxcpDNi2MiSounXD68n3kk%2FHWRfZS4b%2FjFvRdIjeOh2XFX01wsgxAA348xvaRKMsDaU1K%2FB0%2F9jjr3SMc3GoPqPeZO9%2FD%2BRknUA677C46rKktNUkYL%2BPtMg9rXMb1MGkxWMjIXUgzb%2FkFR1WA0YBYUEJMKl1qz4lZZ9s0fMHXheAyJHtaP5nXuylnStKN%2Bq6ccY2oVPcg2xulvgwxsHtF%2BnLoHUAWjtj%2F%2Bl2vTeep6HGMI6z%2BcQGOqUBJahiCPQF7G980M8WAwyhK5%2FmBmfuTcfhp1cMPg0b%2BkR7wUM4nqhGM5NofeGITyP7U1k0w8xAr2xWoUCrhI%2BzQq973edZYaaF9rrMMCEFkXSmqiO2%2FhyqeqP62hbWBBIGF%2BcVrVvO9W2xaPbKq7HzwliHlGqRnKCRbM0pSZqMQYRKQKRbTpZfo9IO4aBARdYOfnX4kuxxHw7rEyoiwoZ0MzimkaS6&X-Amz-Signature=f6440a6ceafb6a14b597dc741cd032d765d1d45a1943f43b72b823a4f6fc90c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBJDLDMM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDjsT0GzblgXX6d5KHrdhEPXo5LTex%2Be3ffhqkottwSsQIhAIq6v7V2CJINgBwdsUCgFrdd2sJQ3MZ8ayKQm%2Byc8d%2FsKv8DCE8QABoMNjM3NDIzMTgzODA1IgzETQx53P0HJMrXgCEq3AOabxZRSw2WfTeZA3Ru8TnW9PcVLeUevC%2ByAhRsMDlkrbbzj9I7wNU25AJTlLqZi22SdYJhVs9EhTaL2dCTkuNeiqzIN9gNvtjMYqHDRnvkx9jR70B4PTnX91y%2FnID7zUhjS9GXXyFym0zG86z%2BhhL%2F5crhtq33WXo%2F0%2BiHo5GOY4b1wDpAtlf8uR6ZGBKewWpEkhot2KUqOf%2BOQCGmlGNBqy9gd9T4Fmzcnbhhdh9hicRzGE7ICzzI9LGvstcOS88Pz%2FPWqc%2BcbyOhkGLhOkqJ49RdpMr8XFn%2Bu8QiFKqqBGNoa8x8LWgtHr%2BFl%2BkL4x1pb11x8QIloJey%2Fs5M8looLbCpzFsAAdYAEyckYb6ujTYeg%2BKTv3%2FwWOlCvq3koPJnhziEFQOtCPu9ur%2BwOk8uIfZjNiD%2F2jzFO6ZRxHlx5ZGsqY5N8G3SryKRjFoQriLjkbFxr5ZU47Vd%2BFJYc9nOn7oFOCjqd6kPjmjZtVyouZnu4bWMeslLiE74S4pkPOZEuikJsL9ZZpRZL6tMJxlcWWPSydfTOAoXhS384JH3hHF92qBVj%2FNlW%2FHKQPMMj%2FnnLknpZr46IMW8Q2CmRrF90O1GNXywYrhNgNs0t0RuruTm9%2FZiey6VpNt7%2FDCWsvnEBjqkAZ%2FzKAihKKfxBcTxtprZ%2F3s7OgJeeW6rcEVnn%2F4JtbRuip2sCbvUwoi34YU8UvdJp3zmA9BNB4lAs7eHqfHK%2FLf3kKG6hzmPbhBcAlJtvRdtgfos7%2BK82WHblHML%2Bw6Lw5hnGytOCgbtUnjwye%2B0WxIQXSr69eUzR6Gn1TckPQieiCN%2FdAs0zBFlIxIpmxsAhuCqi1JAIifHFYma58Lv9zZHLRQZ&X-Amz-Signature=2cbd484eb2b903467800f4381f171ff215fb7ee66f2d68a39d011031648cf075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUGVYYV7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIH38P2bW%2B6XY%2FTDXk86NQIE%2FTek6D1%2FU4dRD%2BFfDrtq8AiB%2FqBZ4JKvfnF6dT2yUxt3bwon0XfkvuyZ5gHH2LKQyfCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMlDBKtDnnskwxCUCLKtwDgtTvjyOiCotGwsLea4dd0DcnUnGROeUP1s%2BSiwZHNAISzqDpqt2D3%2B9SkOVLD1kqDjmrZbtahjBwt3l2%2FwdQWSmyXmPVBF2yFeFC2tuZA%2FpFP4x684TbQ7oWFTDKcM2s4E%2ByjTKVMKC4pbwCXksPd%2BOgYotHqCmNWWWizE29rIatwNroZFY%2FPRsdDd%2BG4siIYOvsBZRk4AMijsa6keWLtxRnKlw0vk2B2gQEbblwu3g0bJ9kAtNxfs%2BpsqEsLtVbZTfVycJKoqoa9CuR%2Ba95b7PtYBsQV%2FbQfChG3gdLl9Rw5iIk9ogPoK7fAK94wqDHRz9sxOLcdT9fLDZgjDNri3XlCnzTKs%2FKTu1K5%2FVmeA1UFIT32Bj4axzhG65%2Fx9MAlnSpOFfUTiu9%2FN7TAAKNUHjbs6GK0NFW6p3MsDmuVOH9ouo8cCTY5TIXzPizx8ibEMKyX6NMGrhh3e9sB0RXWqaIegxt%2BWwKX8tk6CEzvsL%2FzcxwpQP8GShjaWs4gVXK3XcEjETgC15bkHBNzQneNOaCt5swCkdEHy2JueHeLkArqfDoAE4WvNUchFg%2FQAKgokJvX41RHu4G8PDxPjLdkWdqLVOjBzxOWhN5AXCxM8wTCwG7DfJmrkVWU1sw4bL5xAY6pgF4OyU0MiANk6cDSESVYorBa9qpazZ1RXYmJsE8v8hMTFia%2Fy3I2jVvTcmrAX2VAfxzxulDiZrUEHJriHtiREJ41zZtzlh7u9zacWyRdqVjlqQ749flpyfY2zSSOqSru18KnM%2FGIO%2B59sZ22DCbf6RHLl%2Fh7ggwAUo0Y%2BK0csqPXP37Q6Gy%2BN2aT0e%2BRkyct5ulUQbWVo%2FxeuvjGlmE0q7ucyQmaCNM&X-Amz-Signature=84816cee2d67bc4ab61e710de70879e01883e59f63b1e69e0b7aae063ba8bafc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR54GT47%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDjKO3VZmBTFU2Tfsu9cPQGQQaZzrBqIV8DvVYuT3B9ZwIhAOkNrGTnn0u0ZpSm5JEFA5mdhrzh%2FFfVSm39jcXrUk7fKv8DCE8QABoMNjM3NDIzMTgzODA1IgyGaSoLXG0pWiSZ%2F2wq3AOQulBLhSYl9X4d1lRlzatkJenVXCa8aqUweAg%2Bk16W%2FyBUx%2BbrcFuIsNcIpPMe6miw3T9g6ciu063DSYlbEO16joYacKw5h%2FKHpucq7%2B745xDktLM1zYJs3RTP%2BD3BE%2BxzV5d1S%2B2WYxlyvv%2FaMurgQQuDLw5UFVNHxhq1DIChs0K5XtGHf82TflIAD9ZvHWzV6Ry8thghJFYDeIuSauJcqWaZnycNmDzr8R8vBm7hSs1YNQEfYdeRC0UzsS7z8xIrrY8u%2Bvt6Gdvp8bR%2F6HiYhQIkx90ObqRca0QZ5u2VFrEHLS3nXykfrr5zvDPcmLkByUXkHoYsUU2zf3rox8gy96AMG3%2Fq6H8KYnIT%2FM%2F7pNbawlP%2BWa8sEPMGfEQpByFDGKKd1ODUYa2sDbFf2J6gNJ8nKrECIY5RFQENQ3VZbtPOYYjdEHGQOgaWQS4j9LzSb3hy1%2BM8K1dyjrGYM8cIXQd%2BAbWwylPm9HSyV9fxWOh41jP0g2CWCz41kR3YqWsSZ%2FYuW8yKL82Vz7uP1j3xF0SEEfmJOu4qrug3yMOmX%2FK2jHpx%2FfT8yWEjraWZi7Tu6dBXa3o748aGZs2MeHCw73td1Q3PH%2BSlt48Kgs8vLRiOfsDqYZnIM7G7TjCNs%2FnEBjqkAWpXZcXykl6vixA%2BsxJO2eOKPL%2F9NuoGlKci4PkyWNsgX%2BgUSJgEq2ul355iGsQNyHrWraaFJxCit%2BAnQxC4%2ByObmq%2BTbXz914HnqrN9v%2BVAradit%2F1q6aGWDUZPyv0hcUff18BS35YqD4GaYJuK%2F1hZ2PIRKHB9symO5TEwoC4D45tRHHIZqO17npub9zsWDvOXnwZpzpHjBekSM%2Fz4ILbjKbt8&X-Amz-Signature=fb83c61da221075e91779f71e2d12fb6b7e09a2de285a81a17b044ffc355ac5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I3ZJXBD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIAgBz3l1SEsNamBl%2F%2BEk3CQtnT5xTsq5Hy4%2B4skQ3BWdAiEA9j%2BdOtcF9E%2FLWkM1CDqDExWY%2FuLBfLMdWkt5tAE1MR8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOIfc%2FTJWFW50OhfCyrcAxahTvAMuSth7470PXAnAav76EeD2qGVkItxyhI7FLGGotEtdJNhjv%2FH%2Fcl0IOeclxGS5gSrKB1z36MXC315ZqBD%2BMEBoVCRObt8NaQe2%2FrxjW7Ay5WUwtA5FDXjOplO0SinacM03ryFu7qITgCz2QVmjOWfTzRpUYVwegmT%2FcKS0hg0xb6Xc0nQ1lFW16DM2F0hNZO7Z3wojDDdJnnS9QQ8Nk%2BA%2FSzetYdIS5UayHi%2FkYl6tNbMJw3Aarer3iHkEPk8EpmK%2BRCLQlyfPADVv2cyzxukc7ktYbki0L1ZNDtCfzIp3N6lhaiz1Vp5P8r2%2FNVm9QKQ%2BpD8fGl0mSMfNmMYdLDSWSXis%2B8%2FbO%2BgBBvYLgjXJIkSezVA4b2BLZHwI%2FFQlAoFjfCRAY3TXlCR1LmwuGJtYNj69PZkLY6kOdegDZ1RmIAfNqXT4YY413GOsFlVGN9zdS6hCLR9nsgK0V%2FXNmZXa7An9skK5mGybwXCFVe4WQ2cmuk%2FVFVRbLwKTLIRW3DSXOROqOQm0X%2FpE8n3cCaiax31fAXQhh9F%2FUp0L2EY%2BgfgRXTISXYeyM4%2FSpnS%2FFeNvyCV5pDQrDogn%2B8ZyZz1zf8haC2ocX3iXxZxlP2QVmeWu5uPC1BDMI2y%2BcQGOqUBfMdbGPdzmXNiHCM1gKtTijLqJLSij8JW20c%2BFkKxUrbVR38ttFKVVukwFAq9ncoikWJqgkzmFInJuvCv1DoBtM%2BjPuLUNHrfYNTbOVRh7WXcVHK4cRzCEosJsyEEL%2BSFrVdEtHnrIjY2bSEwzVAUQz7XdnQhvGHDhcun2qgy9lXOVywnWwwwQlSTzaf7phfYV2JyZGIXmdrIsFq4JKmJhEmJtdux&X-Amz-Signature=ef11c1b2d206c7f2f6a45e49c6e76f04a4eb6476ee5f3cbcdf633b9755fbd4b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I3ZJXBD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIAgBz3l1SEsNamBl%2F%2BEk3CQtnT5xTsq5Hy4%2B4skQ3BWdAiEA9j%2BdOtcF9E%2FLWkM1CDqDExWY%2FuLBfLMdWkt5tAE1MR8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOIfc%2FTJWFW50OhfCyrcAxahTvAMuSth7470PXAnAav76EeD2qGVkItxyhI7FLGGotEtdJNhjv%2FH%2Fcl0IOeclxGS5gSrKB1z36MXC315ZqBD%2BMEBoVCRObt8NaQe2%2FrxjW7Ay5WUwtA5FDXjOplO0SinacM03ryFu7qITgCz2QVmjOWfTzRpUYVwegmT%2FcKS0hg0xb6Xc0nQ1lFW16DM2F0hNZO7Z3wojDDdJnnS9QQ8Nk%2BA%2FSzetYdIS5UayHi%2FkYl6tNbMJw3Aarer3iHkEPk8EpmK%2BRCLQlyfPADVv2cyzxukc7ktYbki0L1ZNDtCfzIp3N6lhaiz1Vp5P8r2%2FNVm9QKQ%2BpD8fGl0mSMfNmMYdLDSWSXis%2B8%2FbO%2BgBBvYLgjXJIkSezVA4b2BLZHwI%2FFQlAoFjfCRAY3TXlCR1LmwuGJtYNj69PZkLY6kOdegDZ1RmIAfNqXT4YY413GOsFlVGN9zdS6hCLR9nsgK0V%2FXNmZXa7An9skK5mGybwXCFVe4WQ2cmuk%2FVFVRbLwKTLIRW3DSXOROqOQm0X%2FpE8n3cCaiax31fAXQhh9F%2FUp0L2EY%2BgfgRXTISXYeyM4%2FSpnS%2FFeNvyCV5pDQrDogn%2B8ZyZz1zf8haC2ocX3iXxZxlP2QVmeWu5uPC1BDMI2y%2BcQGOqUBfMdbGPdzmXNiHCM1gKtTijLqJLSij8JW20c%2BFkKxUrbVR38ttFKVVukwFAq9ncoikWJqgkzmFInJuvCv1DoBtM%2BjPuLUNHrfYNTbOVRh7WXcVHK4cRzCEosJsyEEL%2BSFrVdEtHnrIjY2bSEwzVAUQz7XdnQhvGHDhcun2qgy9lXOVywnWwwwQlSTzaf7phfYV2JyZGIXmdrIsFq4JKmJhEmJtdux&X-Amz-Signature=9bd933ebecab18d5ee06bfc0c378a4fb313ad99c31bf98b08b4feaf07bfd3f7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3D4JRLH%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCkFf0VsMSLcO2GOtLUWapGOSqt5Z%2FVtx9xzz5IoK%2FAdgIgXafZ1G%2FArcTgxVNhGJqcDk%2BUMjJsBMirU5XVDhCTMgIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOwE49SZPeDnJBupMircAx2mbWtwCwcvIBIvs8tXh2sf%2B%2BRnDJwa4G7OVMCfreU92aIqOXzg85qvkczbBNk%2F5vInpHcsCGbovdXMykOqRFmB%2FUp41ryK3Ad%2BXZ1t2Klbxr%2Fyj9BOxbEMmFjHQrgQcfXH%2BSRIu%2F7%2BnBAZu3YtSu8APnofkK0L1v0EX64ZCk%2FQgulB4%2BoQ0yoVcOOtL5isAVZ4%2FLgtjiaHn0zzc64nGNOGkRInAUcVzuLrd9GlBnhPtI1xbvfoqbcv1PFNhM3DPnzvIaamsCiGdP5O1qvH1UJZItrw60bcFtN33fh%2FLIFWWWcK%2B0x%2BNae9Ggh%2FA7mIQd41uNLQ%2FLqMM2KbCwlj4hoTasiFGyQCz7QneIW%2F0gUzledWUCgiZKsKafVOqykoM6tdbkfORGEgj2rxaWuEpkiCzzfRceSJG%2BfXm1DIACVf1vhSdduWxPboBLyZS9LeZc0RRdqvNwl8nxU0pXg7%2BProl6aJbWS77RhNkteE6tKlbsHvifmWg8D%2FxA2UJwtLGkMMZK4FhIea9j67FirE%2Bj6uBnx6uJsoLcXdoZ5OO%2Fs0onkWjRY9Sgh23BT%2FPeN3XLHhiLBJpaBwoy6VTCwOhKmLfOJzw%2BF2m9SWYLBaiPo3wfx70M%2BS%2F5BhMVE%2BMO%2By%2BcQGOqUBXYSFVpvLK9pitbCPsvin4quTuZd8Q9mP0pzJoFWQPAt3dmy4VIAJn4R%2BiZB%2Blg1WJNQuOcXX01TmBhPvMHUM2wQ%2BWHEkHkK9vZGEXIVzeR8iq0IZHpuTUwNwApjYdA2uNJnkZvD%2BhkLeieZ8gU3s4h53ODsEGP8jd%2FHl9UgGEX8a%2BJwYE1aEuAVaH%2BEKXth4tF%2BXdx8GXn371WjfUQMg0m1qecJj&X-Amz-Signature=6808a76712c6249ccf4cd7e5293ea8a2e8070a7e6b26fea9d15742a03c04369f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3D4JRLH%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCkFf0VsMSLcO2GOtLUWapGOSqt5Z%2FVtx9xzz5IoK%2FAdgIgXafZ1G%2FArcTgxVNhGJqcDk%2BUMjJsBMirU5XVDhCTMgIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOwE49SZPeDnJBupMircAx2mbWtwCwcvIBIvs8tXh2sf%2B%2BRnDJwa4G7OVMCfreU92aIqOXzg85qvkczbBNk%2F5vInpHcsCGbovdXMykOqRFmB%2FUp41ryK3Ad%2BXZ1t2Klbxr%2Fyj9BOxbEMmFjHQrgQcfXH%2BSRIu%2F7%2BnBAZu3YtSu8APnofkK0L1v0EX64ZCk%2FQgulB4%2BoQ0yoVcOOtL5isAVZ4%2FLgtjiaHn0zzc64nGNOGkRInAUcVzuLrd9GlBnhPtI1xbvfoqbcv1PFNhM3DPnzvIaamsCiGdP5O1qvH1UJZItrw60bcFtN33fh%2FLIFWWWcK%2B0x%2BNae9Ggh%2FA7mIQd41uNLQ%2FLqMM2KbCwlj4hoTasiFGyQCz7QneIW%2F0gUzledWUCgiZKsKafVOqykoM6tdbkfORGEgj2rxaWuEpkiCzzfRceSJG%2BfXm1DIACVf1vhSdduWxPboBLyZS9LeZc0RRdqvNwl8nxU0pXg7%2BProl6aJbWS77RhNkteE6tKlbsHvifmWg8D%2FxA2UJwtLGkMMZK4FhIea9j67FirE%2Bj6uBnx6uJsoLcXdoZ5OO%2Fs0onkWjRY9Sgh23BT%2FPeN3XLHhiLBJpaBwoy6VTCwOhKmLfOJzw%2BF2m9SWYLBaiPo3wfx70M%2BS%2F5BhMVE%2BMO%2By%2BcQGOqUBXYSFVpvLK9pitbCPsvin4quTuZd8Q9mP0pzJoFWQPAt3dmy4VIAJn4R%2BiZB%2Blg1WJNQuOcXX01TmBhPvMHUM2wQ%2BWHEkHkK9vZGEXIVzeR8iq0IZHpuTUwNwApjYdA2uNJnkZvD%2BhkLeieZ8gU3s4h53ODsEGP8jd%2FHl9UgGEX8a%2BJwYE1aEuAVaH%2BEKXth4tF%2BXdx8GXn371WjfUQMg0m1qecJj&X-Amz-Signature=c0e85bf70ca637961cb98459ff582d20c8dcb49da40a13a4ea5a97acce09c65b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3D4JRLH%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCkFf0VsMSLcO2GOtLUWapGOSqt5Z%2FVtx9xzz5IoK%2FAdgIgXafZ1G%2FArcTgxVNhGJqcDk%2BUMjJsBMirU5XVDhCTMgIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOwE49SZPeDnJBupMircAx2mbWtwCwcvIBIvs8tXh2sf%2B%2BRnDJwa4G7OVMCfreU92aIqOXzg85qvkczbBNk%2F5vInpHcsCGbovdXMykOqRFmB%2FUp41ryK3Ad%2BXZ1t2Klbxr%2Fyj9BOxbEMmFjHQrgQcfXH%2BSRIu%2F7%2BnBAZu3YtSu8APnofkK0L1v0EX64ZCk%2FQgulB4%2BoQ0yoVcOOtL5isAVZ4%2FLgtjiaHn0zzc64nGNOGkRInAUcVzuLrd9GlBnhPtI1xbvfoqbcv1PFNhM3DPnzvIaamsCiGdP5O1qvH1UJZItrw60bcFtN33fh%2FLIFWWWcK%2B0x%2BNae9Ggh%2FA7mIQd41uNLQ%2FLqMM2KbCwlj4hoTasiFGyQCz7QneIW%2F0gUzledWUCgiZKsKafVOqykoM6tdbkfORGEgj2rxaWuEpkiCzzfRceSJG%2BfXm1DIACVf1vhSdduWxPboBLyZS9LeZc0RRdqvNwl8nxU0pXg7%2BProl6aJbWS77RhNkteE6tKlbsHvifmWg8D%2FxA2UJwtLGkMMZK4FhIea9j67FirE%2Bj6uBnx6uJsoLcXdoZ5OO%2Fs0onkWjRY9Sgh23BT%2FPeN3XLHhiLBJpaBwoy6VTCwOhKmLfOJzw%2BF2m9SWYLBaiPo3wfx70M%2BS%2F5BhMVE%2BMO%2By%2BcQGOqUBXYSFVpvLK9pitbCPsvin4quTuZd8Q9mP0pzJoFWQPAt3dmy4VIAJn4R%2BiZB%2Blg1WJNQuOcXX01TmBhPvMHUM2wQ%2BWHEkHkK9vZGEXIVzeR8iq0IZHpuTUwNwApjYdA2uNJnkZvD%2BhkLeieZ8gU3s4h53ODsEGP8jd%2FHl9UgGEX8a%2BJwYE1aEuAVaH%2BEKXth4tF%2BXdx8GXn371WjfUQMg0m1qecJj&X-Amz-Signature=993b924431d8d1b9c57125341d5c80c391ed1fa960ce690b759121da7fecab8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3D4JRLH%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCkFf0VsMSLcO2GOtLUWapGOSqt5Z%2FVtx9xzz5IoK%2FAdgIgXafZ1G%2FArcTgxVNhGJqcDk%2BUMjJsBMirU5XVDhCTMgIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOwE49SZPeDnJBupMircAx2mbWtwCwcvIBIvs8tXh2sf%2B%2BRnDJwa4G7OVMCfreU92aIqOXzg85qvkczbBNk%2F5vInpHcsCGbovdXMykOqRFmB%2FUp41ryK3Ad%2BXZ1t2Klbxr%2Fyj9BOxbEMmFjHQrgQcfXH%2BSRIu%2F7%2BnBAZu3YtSu8APnofkK0L1v0EX64ZCk%2FQgulB4%2BoQ0yoVcOOtL5isAVZ4%2FLgtjiaHn0zzc64nGNOGkRInAUcVzuLrd9GlBnhPtI1xbvfoqbcv1PFNhM3DPnzvIaamsCiGdP5O1qvH1UJZItrw60bcFtN33fh%2FLIFWWWcK%2B0x%2BNae9Ggh%2FA7mIQd41uNLQ%2FLqMM2KbCwlj4hoTasiFGyQCz7QneIW%2F0gUzledWUCgiZKsKafVOqykoM6tdbkfORGEgj2rxaWuEpkiCzzfRceSJG%2BfXm1DIACVf1vhSdduWxPboBLyZS9LeZc0RRdqvNwl8nxU0pXg7%2BProl6aJbWS77RhNkteE6tKlbsHvifmWg8D%2FxA2UJwtLGkMMZK4FhIea9j67FirE%2Bj6uBnx6uJsoLcXdoZ5OO%2Fs0onkWjRY9Sgh23BT%2FPeN3XLHhiLBJpaBwoy6VTCwOhKmLfOJzw%2BF2m9SWYLBaiPo3wfx70M%2BS%2F5BhMVE%2BMO%2By%2BcQGOqUBXYSFVpvLK9pitbCPsvin4quTuZd8Q9mP0pzJoFWQPAt3dmy4VIAJn4R%2BiZB%2Blg1WJNQuOcXX01TmBhPvMHUM2wQ%2BWHEkHkK9vZGEXIVzeR8iq0IZHpuTUwNwApjYdA2uNJnkZvD%2BhkLeieZ8gU3s4h53ODsEGP8jd%2FHl9UgGEX8a%2BJwYE1aEuAVaH%2BEKXth4tF%2BXdx8GXn371WjfUQMg0m1qecJj&X-Amz-Signature=9b6895da6ca044dfc2d9e8505c06377c4254e565474f57d0e72afab0e50b447f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3D4JRLH%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCkFf0VsMSLcO2GOtLUWapGOSqt5Z%2FVtx9xzz5IoK%2FAdgIgXafZ1G%2FArcTgxVNhGJqcDk%2BUMjJsBMirU5XVDhCTMgIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOwE49SZPeDnJBupMircAx2mbWtwCwcvIBIvs8tXh2sf%2B%2BRnDJwa4G7OVMCfreU92aIqOXzg85qvkczbBNk%2F5vInpHcsCGbovdXMykOqRFmB%2FUp41ryK3Ad%2BXZ1t2Klbxr%2Fyj9BOxbEMmFjHQrgQcfXH%2BSRIu%2F7%2BnBAZu3YtSu8APnofkK0L1v0EX64ZCk%2FQgulB4%2BoQ0yoVcOOtL5isAVZ4%2FLgtjiaHn0zzc64nGNOGkRInAUcVzuLrd9GlBnhPtI1xbvfoqbcv1PFNhM3DPnzvIaamsCiGdP5O1qvH1UJZItrw60bcFtN33fh%2FLIFWWWcK%2B0x%2BNae9Ggh%2FA7mIQd41uNLQ%2FLqMM2KbCwlj4hoTasiFGyQCz7QneIW%2F0gUzledWUCgiZKsKafVOqykoM6tdbkfORGEgj2rxaWuEpkiCzzfRceSJG%2BfXm1DIACVf1vhSdduWxPboBLyZS9LeZc0RRdqvNwl8nxU0pXg7%2BProl6aJbWS77RhNkteE6tKlbsHvifmWg8D%2FxA2UJwtLGkMMZK4FhIea9j67FirE%2Bj6uBnx6uJsoLcXdoZ5OO%2Fs0onkWjRY9Sgh23BT%2FPeN3XLHhiLBJpaBwoy6VTCwOhKmLfOJzw%2BF2m9SWYLBaiPo3wfx70M%2BS%2F5BhMVE%2BMO%2By%2BcQGOqUBXYSFVpvLK9pitbCPsvin4quTuZd8Q9mP0pzJoFWQPAt3dmy4VIAJn4R%2BiZB%2Blg1WJNQuOcXX01TmBhPvMHUM2wQ%2BWHEkHkK9vZGEXIVzeR8iq0IZHpuTUwNwApjYdA2uNJnkZvD%2BhkLeieZ8gU3s4h53ODsEGP8jd%2FHl9UgGEX8a%2BJwYE1aEuAVaH%2BEKXth4tF%2BXdx8GXn371WjfUQMg0m1qecJj&X-Amz-Signature=22a33f2a67b37ef19aa45a3ce8de99a7fc4dc8ebd113914cd55021a663691dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3D4JRLH%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCkFf0VsMSLcO2GOtLUWapGOSqt5Z%2FVtx9xzz5IoK%2FAdgIgXafZ1G%2FArcTgxVNhGJqcDk%2BUMjJsBMirU5XVDhCTMgIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOwE49SZPeDnJBupMircAx2mbWtwCwcvIBIvs8tXh2sf%2B%2BRnDJwa4G7OVMCfreU92aIqOXzg85qvkczbBNk%2F5vInpHcsCGbovdXMykOqRFmB%2FUp41ryK3Ad%2BXZ1t2Klbxr%2Fyj9BOxbEMmFjHQrgQcfXH%2BSRIu%2F7%2BnBAZu3YtSu8APnofkK0L1v0EX64ZCk%2FQgulB4%2BoQ0yoVcOOtL5isAVZ4%2FLgtjiaHn0zzc64nGNOGkRInAUcVzuLrd9GlBnhPtI1xbvfoqbcv1PFNhM3DPnzvIaamsCiGdP5O1qvH1UJZItrw60bcFtN33fh%2FLIFWWWcK%2B0x%2BNae9Ggh%2FA7mIQd41uNLQ%2FLqMM2KbCwlj4hoTasiFGyQCz7QneIW%2F0gUzledWUCgiZKsKafVOqykoM6tdbkfORGEgj2rxaWuEpkiCzzfRceSJG%2BfXm1DIACVf1vhSdduWxPboBLyZS9LeZc0RRdqvNwl8nxU0pXg7%2BProl6aJbWS77RhNkteE6tKlbsHvifmWg8D%2FxA2UJwtLGkMMZK4FhIea9j67FirE%2Bj6uBnx6uJsoLcXdoZ5OO%2Fs0onkWjRY9Sgh23BT%2FPeN3XLHhiLBJpaBwoy6VTCwOhKmLfOJzw%2BF2m9SWYLBaiPo3wfx70M%2BS%2F5BhMVE%2BMO%2By%2BcQGOqUBXYSFVpvLK9pitbCPsvin4quTuZd8Q9mP0pzJoFWQPAt3dmy4VIAJn4R%2BiZB%2Blg1WJNQuOcXX01TmBhPvMHUM2wQ%2BWHEkHkK9vZGEXIVzeR8iq0IZHpuTUwNwApjYdA2uNJnkZvD%2BhkLeieZ8gU3s4h53ODsEGP8jd%2FHl9UgGEX8a%2BJwYE1aEuAVaH%2BEKXth4tF%2BXdx8GXn371WjfUQMg0m1qecJj&X-Amz-Signature=2e43da3835f7e72b30aebd3f73109297f729cd4ad58c07ca6f868dd233518dcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3D4JRLH%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCkFf0VsMSLcO2GOtLUWapGOSqt5Z%2FVtx9xzz5IoK%2FAdgIgXafZ1G%2FArcTgxVNhGJqcDk%2BUMjJsBMirU5XVDhCTMgIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOwE49SZPeDnJBupMircAx2mbWtwCwcvIBIvs8tXh2sf%2B%2BRnDJwa4G7OVMCfreU92aIqOXzg85qvkczbBNk%2F5vInpHcsCGbovdXMykOqRFmB%2FUp41ryK3Ad%2BXZ1t2Klbxr%2Fyj9BOxbEMmFjHQrgQcfXH%2BSRIu%2F7%2BnBAZu3YtSu8APnofkK0L1v0EX64ZCk%2FQgulB4%2BoQ0yoVcOOtL5isAVZ4%2FLgtjiaHn0zzc64nGNOGkRInAUcVzuLrd9GlBnhPtI1xbvfoqbcv1PFNhM3DPnzvIaamsCiGdP5O1qvH1UJZItrw60bcFtN33fh%2FLIFWWWcK%2B0x%2BNae9Ggh%2FA7mIQd41uNLQ%2FLqMM2KbCwlj4hoTasiFGyQCz7QneIW%2F0gUzledWUCgiZKsKafVOqykoM6tdbkfORGEgj2rxaWuEpkiCzzfRceSJG%2BfXm1DIACVf1vhSdduWxPboBLyZS9LeZc0RRdqvNwl8nxU0pXg7%2BProl6aJbWS77RhNkteE6tKlbsHvifmWg8D%2FxA2UJwtLGkMMZK4FhIea9j67FirE%2Bj6uBnx6uJsoLcXdoZ5OO%2Fs0onkWjRY9Sgh23BT%2FPeN3XLHhiLBJpaBwoy6VTCwOhKmLfOJzw%2BF2m9SWYLBaiPo3wfx70M%2BS%2F5BhMVE%2BMO%2By%2BcQGOqUBXYSFVpvLK9pitbCPsvin4quTuZd8Q9mP0pzJoFWQPAt3dmy4VIAJn4R%2BiZB%2Blg1WJNQuOcXX01TmBhPvMHUM2wQ%2BWHEkHkK9vZGEXIVzeR8iq0IZHpuTUwNwApjYdA2uNJnkZvD%2BhkLeieZ8gU3s4h53ODsEGP8jd%2FHl9UgGEX8a%2BJwYE1aEuAVaH%2BEKXth4tF%2BXdx8GXn371WjfUQMg0m1qecJj&X-Amz-Signature=993b924431d8d1b9c57125341d5c80c391ed1fa960ce690b759121da7fecab8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3D4JRLH%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCkFf0VsMSLcO2GOtLUWapGOSqt5Z%2FVtx9xzz5IoK%2FAdgIgXafZ1G%2FArcTgxVNhGJqcDk%2BUMjJsBMirU5XVDhCTMgIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOwE49SZPeDnJBupMircAx2mbWtwCwcvIBIvs8tXh2sf%2B%2BRnDJwa4G7OVMCfreU92aIqOXzg85qvkczbBNk%2F5vInpHcsCGbovdXMykOqRFmB%2FUp41ryK3Ad%2BXZ1t2Klbxr%2Fyj9BOxbEMmFjHQrgQcfXH%2BSRIu%2F7%2BnBAZu3YtSu8APnofkK0L1v0EX64ZCk%2FQgulB4%2BoQ0yoVcOOtL5isAVZ4%2FLgtjiaHn0zzc64nGNOGkRInAUcVzuLrd9GlBnhPtI1xbvfoqbcv1PFNhM3DPnzvIaamsCiGdP5O1qvH1UJZItrw60bcFtN33fh%2FLIFWWWcK%2B0x%2BNae9Ggh%2FA7mIQd41uNLQ%2FLqMM2KbCwlj4hoTasiFGyQCz7QneIW%2F0gUzledWUCgiZKsKafVOqykoM6tdbkfORGEgj2rxaWuEpkiCzzfRceSJG%2BfXm1DIACVf1vhSdduWxPboBLyZS9LeZc0RRdqvNwl8nxU0pXg7%2BProl6aJbWS77RhNkteE6tKlbsHvifmWg8D%2FxA2UJwtLGkMMZK4FhIea9j67FirE%2Bj6uBnx6uJsoLcXdoZ5OO%2Fs0onkWjRY9Sgh23BT%2FPeN3XLHhiLBJpaBwoy6VTCwOhKmLfOJzw%2BF2m9SWYLBaiPo3wfx70M%2BS%2F5BhMVE%2BMO%2By%2BcQGOqUBXYSFVpvLK9pitbCPsvin4quTuZd8Q9mP0pzJoFWQPAt3dmy4VIAJn4R%2BiZB%2Blg1WJNQuOcXX01TmBhPvMHUM2wQ%2BWHEkHkK9vZGEXIVzeR8iq0IZHpuTUwNwApjYdA2uNJnkZvD%2BhkLeieZ8gU3s4h53ODsEGP8jd%2FHl9UgGEX8a%2BJwYE1aEuAVaH%2BEKXth4tF%2BXdx8GXn371WjfUQMg0m1qecJj&X-Amz-Signature=66d84b2cb45acc29e1c17f462c04bbf23c8e1761e7de23e0241267adae574576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3D4JRLH%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCkFf0VsMSLcO2GOtLUWapGOSqt5Z%2FVtx9xzz5IoK%2FAdgIgXafZ1G%2FArcTgxVNhGJqcDk%2BUMjJsBMirU5XVDhCTMgIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOwE49SZPeDnJBupMircAx2mbWtwCwcvIBIvs8tXh2sf%2B%2BRnDJwa4G7OVMCfreU92aIqOXzg85qvkczbBNk%2F5vInpHcsCGbovdXMykOqRFmB%2FUp41ryK3Ad%2BXZ1t2Klbxr%2Fyj9BOxbEMmFjHQrgQcfXH%2BSRIu%2F7%2BnBAZu3YtSu8APnofkK0L1v0EX64ZCk%2FQgulB4%2BoQ0yoVcOOtL5isAVZ4%2FLgtjiaHn0zzc64nGNOGkRInAUcVzuLrd9GlBnhPtI1xbvfoqbcv1PFNhM3DPnzvIaamsCiGdP5O1qvH1UJZItrw60bcFtN33fh%2FLIFWWWcK%2B0x%2BNae9Ggh%2FA7mIQd41uNLQ%2FLqMM2KbCwlj4hoTasiFGyQCz7QneIW%2F0gUzledWUCgiZKsKafVOqykoM6tdbkfORGEgj2rxaWuEpkiCzzfRceSJG%2BfXm1DIACVf1vhSdduWxPboBLyZS9LeZc0RRdqvNwl8nxU0pXg7%2BProl6aJbWS77RhNkteE6tKlbsHvifmWg8D%2FxA2UJwtLGkMMZK4FhIea9j67FirE%2Bj6uBnx6uJsoLcXdoZ5OO%2Fs0onkWjRY9Sgh23BT%2FPeN3XLHhiLBJpaBwoy6VTCwOhKmLfOJzw%2BF2m9SWYLBaiPo3wfx70M%2BS%2F5BhMVE%2BMO%2By%2BcQGOqUBXYSFVpvLK9pitbCPsvin4quTuZd8Q9mP0pzJoFWQPAt3dmy4VIAJn4R%2BiZB%2Blg1WJNQuOcXX01TmBhPvMHUM2wQ%2BWHEkHkK9vZGEXIVzeR8iq0IZHpuTUwNwApjYdA2uNJnkZvD%2BhkLeieZ8gU3s4h53ODsEGP8jd%2FHl9UgGEX8a%2BJwYE1aEuAVaH%2BEKXth4tF%2BXdx8GXn371WjfUQMg0m1qecJj&X-Amz-Signature=b1e6bdcde626bc179b736197e06dd1c7f2c4c6423341d55e52ca4a82ca7b73bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3D4JRLH%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCkFf0VsMSLcO2GOtLUWapGOSqt5Z%2FVtx9xzz5IoK%2FAdgIgXafZ1G%2FArcTgxVNhGJqcDk%2BUMjJsBMirU5XVDhCTMgIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOwE49SZPeDnJBupMircAx2mbWtwCwcvIBIvs8tXh2sf%2B%2BRnDJwa4G7OVMCfreU92aIqOXzg85qvkczbBNk%2F5vInpHcsCGbovdXMykOqRFmB%2FUp41ryK3Ad%2BXZ1t2Klbxr%2Fyj9BOxbEMmFjHQrgQcfXH%2BSRIu%2F7%2BnBAZu3YtSu8APnofkK0L1v0EX64ZCk%2FQgulB4%2BoQ0yoVcOOtL5isAVZ4%2FLgtjiaHn0zzc64nGNOGkRInAUcVzuLrd9GlBnhPtI1xbvfoqbcv1PFNhM3DPnzvIaamsCiGdP5O1qvH1UJZItrw60bcFtN33fh%2FLIFWWWcK%2B0x%2BNae9Ggh%2FA7mIQd41uNLQ%2FLqMM2KbCwlj4hoTasiFGyQCz7QneIW%2F0gUzledWUCgiZKsKafVOqykoM6tdbkfORGEgj2rxaWuEpkiCzzfRceSJG%2BfXm1DIACVf1vhSdduWxPboBLyZS9LeZc0RRdqvNwl8nxU0pXg7%2BProl6aJbWS77RhNkteE6tKlbsHvifmWg8D%2FxA2UJwtLGkMMZK4FhIea9j67FirE%2Bj6uBnx6uJsoLcXdoZ5OO%2Fs0onkWjRY9Sgh23BT%2FPeN3XLHhiLBJpaBwoy6VTCwOhKmLfOJzw%2BF2m9SWYLBaiPo3wfx70M%2BS%2F5BhMVE%2BMO%2By%2BcQGOqUBXYSFVpvLK9pitbCPsvin4quTuZd8Q9mP0pzJoFWQPAt3dmy4VIAJn4R%2BiZB%2Blg1WJNQuOcXX01TmBhPvMHUM2wQ%2BWHEkHkK9vZGEXIVzeR8iq0IZHpuTUwNwApjYdA2uNJnkZvD%2BhkLeieZ8gU3s4h53ODsEGP8jd%2FHl9UgGEX8a%2BJwYE1aEuAVaH%2BEKXth4tF%2BXdx8GXn371WjfUQMg0m1qecJj&X-Amz-Signature=29d0f7f5373ee255943b7b1afa3366c7a2ec0350e4ba4e01a6c6ba9a1ae22721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
