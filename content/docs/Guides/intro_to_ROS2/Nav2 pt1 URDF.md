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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYUAI5R%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC406iRx5lod37%2FsAwmCXchGmyvBHx07ZxFh4s%2FIGiRrAIgMKEQpsJFWY5b99eJvQQ4JjNAp8Iu2EoiTw%2FvKoy0BiAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDOhpSyvkRVusUSLB7CrcA9Q4N6oH0QXwpOjdoqAKnQ%2FUiNCRtPjWzGIVcPrNgqgEjTpnBidoNS2Fseu4290B38mqyAkjMGjM0AGZzDacKptCm9ggqOst39YrbVmTaRYrP2xsZ%2F9a7igLZBJiYLg1rTXXiIOatm86Fz5L664psgCKb6ZK6QaO7ZXd4XNsi1KErL0T085rHeSyyAuV7uXSiBb0sffWlkJ3jv6GvLXgdjk62FlgqyUKI85dlyASqs1Jl3XwRzRalmn2Ye3LLNm5JV4LSnqWnICYg1AcR9x%2FeNrDLvYSEZSjdkPDyQ2EUgCFV%2Bt5Oi7cxr4fpoanABlpa4eXckO2PvhpT5W%2Fq6O9Ljf76FhbmXfqzubX5hCuF3kDCGTpWkbaVhAesUMOsOjoqQ7TbFNYOSa%2Bz7YorEUX%2FyXeoS1yrNwsWygQOqQj0OLrW%2FWrBlF%2FeTR22J1pMsp52uS590azbp%2BbAevZLYzuUE4zRd4U%2BKtneKR%2Bhvj%2BA5ByWXor8okhZE%2B1jMuziOcQ%2FwMiyRPLSe1ieSo4yur5Fl%2B7VSMyn7xHE%2FPx%2Fmt4fKeej%2F9vCbr93bIKhweRmIG67qsimHSwYhbpNLZV4wW1skZLJm3KGT4qMBQzpQsgBtWK5kOINe%2BznxFg%2FuMMMITswcoGOqUBhhyCh%2FeVOyYuyBSYFDfmFmq46Dq2s2It1ZJRLLi0Cd4TF3HLtqXFdReUpQBJcI39tNfK8TwXRMANkVgl6tBuNI7sYyafnepuBSAuY0nhkUcNs0NX%2Bl%2B9h%2Bu4MiYNu4pk8LxP%2BvPCPwXHrD9trSltS74gB2DeKlwsp4xUrBj6V1dASrkel6LCD4gmIsDR%2FEEitZvm4QiSkEawxIPDJetKH323aTM%2F&X-Amz-Signature=41c07054a247aae2e6899dbda834665f489679ce063f617a90f6ec4bfe6683cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYUAI5R%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC406iRx5lod37%2FsAwmCXchGmyvBHx07ZxFh4s%2FIGiRrAIgMKEQpsJFWY5b99eJvQQ4JjNAp8Iu2EoiTw%2FvKoy0BiAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDOhpSyvkRVusUSLB7CrcA9Q4N6oH0QXwpOjdoqAKnQ%2FUiNCRtPjWzGIVcPrNgqgEjTpnBidoNS2Fseu4290B38mqyAkjMGjM0AGZzDacKptCm9ggqOst39YrbVmTaRYrP2xsZ%2F9a7igLZBJiYLg1rTXXiIOatm86Fz5L664psgCKb6ZK6QaO7ZXd4XNsi1KErL0T085rHeSyyAuV7uXSiBb0sffWlkJ3jv6GvLXgdjk62FlgqyUKI85dlyASqs1Jl3XwRzRalmn2Ye3LLNm5JV4LSnqWnICYg1AcR9x%2FeNrDLvYSEZSjdkPDyQ2EUgCFV%2Bt5Oi7cxr4fpoanABlpa4eXckO2PvhpT5W%2Fq6O9Ljf76FhbmXfqzubX5hCuF3kDCGTpWkbaVhAesUMOsOjoqQ7TbFNYOSa%2Bz7YorEUX%2FyXeoS1yrNwsWygQOqQj0OLrW%2FWrBlF%2FeTR22J1pMsp52uS590azbp%2BbAevZLYzuUE4zRd4U%2BKtneKR%2Bhvj%2BA5ByWXor8okhZE%2B1jMuziOcQ%2FwMiyRPLSe1ieSo4yur5Fl%2B7VSMyn7xHE%2FPx%2Fmt4fKeej%2F9vCbr93bIKhweRmIG67qsimHSwYhbpNLZV4wW1skZLJm3KGT4qMBQzpQsgBtWK5kOINe%2BznxFg%2FuMMMITswcoGOqUBhhyCh%2FeVOyYuyBSYFDfmFmq46Dq2s2It1ZJRLLi0Cd4TF3HLtqXFdReUpQBJcI39tNfK8TwXRMANkVgl6tBuNI7sYyafnepuBSAuY0nhkUcNs0NX%2Bl%2B9h%2Bu4MiYNu4pk8LxP%2BvPCPwXHrD9trSltS74gB2DeKlwsp4xUrBj6V1dASrkel6LCD4gmIsDR%2FEEitZvm4QiSkEawxIPDJetKH323aTM%2F&X-Amz-Signature=969709db21c3d8ea10bd3bcdc95a8b4c249eb5c31cef13c73343f8b6cd28172d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYUAI5R%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC406iRx5lod37%2FsAwmCXchGmyvBHx07ZxFh4s%2FIGiRrAIgMKEQpsJFWY5b99eJvQQ4JjNAp8Iu2EoiTw%2FvKoy0BiAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDOhpSyvkRVusUSLB7CrcA9Q4N6oH0QXwpOjdoqAKnQ%2FUiNCRtPjWzGIVcPrNgqgEjTpnBidoNS2Fseu4290B38mqyAkjMGjM0AGZzDacKptCm9ggqOst39YrbVmTaRYrP2xsZ%2F9a7igLZBJiYLg1rTXXiIOatm86Fz5L664psgCKb6ZK6QaO7ZXd4XNsi1KErL0T085rHeSyyAuV7uXSiBb0sffWlkJ3jv6GvLXgdjk62FlgqyUKI85dlyASqs1Jl3XwRzRalmn2Ye3LLNm5JV4LSnqWnICYg1AcR9x%2FeNrDLvYSEZSjdkPDyQ2EUgCFV%2Bt5Oi7cxr4fpoanABlpa4eXckO2PvhpT5W%2Fq6O9Ljf76FhbmXfqzubX5hCuF3kDCGTpWkbaVhAesUMOsOjoqQ7TbFNYOSa%2Bz7YorEUX%2FyXeoS1yrNwsWygQOqQj0OLrW%2FWrBlF%2FeTR22J1pMsp52uS590azbp%2BbAevZLYzuUE4zRd4U%2BKtneKR%2Bhvj%2BA5ByWXor8okhZE%2B1jMuziOcQ%2FwMiyRPLSe1ieSo4yur5Fl%2B7VSMyn7xHE%2FPx%2Fmt4fKeej%2F9vCbr93bIKhweRmIG67qsimHSwYhbpNLZV4wW1skZLJm3KGT4qMBQzpQsgBtWK5kOINe%2BznxFg%2FuMMMITswcoGOqUBhhyCh%2FeVOyYuyBSYFDfmFmq46Dq2s2It1ZJRLLi0Cd4TF3HLtqXFdReUpQBJcI39tNfK8TwXRMANkVgl6tBuNI7sYyafnepuBSAuY0nhkUcNs0NX%2Bl%2B9h%2Bu4MiYNu4pk8LxP%2BvPCPwXHrD9trSltS74gB2DeKlwsp4xUrBj6V1dASrkel6LCD4gmIsDR%2FEEitZvm4QiSkEawxIPDJetKH323aTM%2F&X-Amz-Signature=a5f022caf6826109ff812459025b53ed07a106cca697f5a6ca4f38504619db66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYUAI5R%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC406iRx5lod37%2FsAwmCXchGmyvBHx07ZxFh4s%2FIGiRrAIgMKEQpsJFWY5b99eJvQQ4JjNAp8Iu2EoiTw%2FvKoy0BiAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDOhpSyvkRVusUSLB7CrcA9Q4N6oH0QXwpOjdoqAKnQ%2FUiNCRtPjWzGIVcPrNgqgEjTpnBidoNS2Fseu4290B38mqyAkjMGjM0AGZzDacKptCm9ggqOst39YrbVmTaRYrP2xsZ%2F9a7igLZBJiYLg1rTXXiIOatm86Fz5L664psgCKb6ZK6QaO7ZXd4XNsi1KErL0T085rHeSyyAuV7uXSiBb0sffWlkJ3jv6GvLXgdjk62FlgqyUKI85dlyASqs1Jl3XwRzRalmn2Ye3LLNm5JV4LSnqWnICYg1AcR9x%2FeNrDLvYSEZSjdkPDyQ2EUgCFV%2Bt5Oi7cxr4fpoanABlpa4eXckO2PvhpT5W%2Fq6O9Ljf76FhbmXfqzubX5hCuF3kDCGTpWkbaVhAesUMOsOjoqQ7TbFNYOSa%2Bz7YorEUX%2FyXeoS1yrNwsWygQOqQj0OLrW%2FWrBlF%2FeTR22J1pMsp52uS590azbp%2BbAevZLYzuUE4zRd4U%2BKtneKR%2Bhvj%2BA5ByWXor8okhZE%2B1jMuziOcQ%2FwMiyRPLSe1ieSo4yur5Fl%2B7VSMyn7xHE%2FPx%2Fmt4fKeej%2F9vCbr93bIKhweRmIG67qsimHSwYhbpNLZV4wW1skZLJm3KGT4qMBQzpQsgBtWK5kOINe%2BznxFg%2FuMMMITswcoGOqUBhhyCh%2FeVOyYuyBSYFDfmFmq46Dq2s2It1ZJRLLi0Cd4TF3HLtqXFdReUpQBJcI39tNfK8TwXRMANkVgl6tBuNI7sYyafnepuBSAuY0nhkUcNs0NX%2Bl%2B9h%2Bu4MiYNu4pk8LxP%2BvPCPwXHrD9trSltS74gB2DeKlwsp4xUrBj6V1dASrkel6LCD4gmIsDR%2FEEitZvm4QiSkEawxIPDJetKH323aTM%2F&X-Amz-Signature=1e8483cdfd940e6b3a8ca66cba51e6adf2afbcca07549eea8f1c5e2d56175dac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYUAI5R%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC406iRx5lod37%2FsAwmCXchGmyvBHx07ZxFh4s%2FIGiRrAIgMKEQpsJFWY5b99eJvQQ4JjNAp8Iu2EoiTw%2FvKoy0BiAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDOhpSyvkRVusUSLB7CrcA9Q4N6oH0QXwpOjdoqAKnQ%2FUiNCRtPjWzGIVcPrNgqgEjTpnBidoNS2Fseu4290B38mqyAkjMGjM0AGZzDacKptCm9ggqOst39YrbVmTaRYrP2xsZ%2F9a7igLZBJiYLg1rTXXiIOatm86Fz5L664psgCKb6ZK6QaO7ZXd4XNsi1KErL0T085rHeSyyAuV7uXSiBb0sffWlkJ3jv6GvLXgdjk62FlgqyUKI85dlyASqs1Jl3XwRzRalmn2Ye3LLNm5JV4LSnqWnICYg1AcR9x%2FeNrDLvYSEZSjdkPDyQ2EUgCFV%2Bt5Oi7cxr4fpoanABlpa4eXckO2PvhpT5W%2Fq6O9Ljf76FhbmXfqzubX5hCuF3kDCGTpWkbaVhAesUMOsOjoqQ7TbFNYOSa%2Bz7YorEUX%2FyXeoS1yrNwsWygQOqQj0OLrW%2FWrBlF%2FeTR22J1pMsp52uS590azbp%2BbAevZLYzuUE4zRd4U%2BKtneKR%2Bhvj%2BA5ByWXor8okhZE%2B1jMuziOcQ%2FwMiyRPLSe1ieSo4yur5Fl%2B7VSMyn7xHE%2FPx%2Fmt4fKeej%2F9vCbr93bIKhweRmIG67qsimHSwYhbpNLZV4wW1skZLJm3KGT4qMBQzpQsgBtWK5kOINe%2BznxFg%2FuMMMITswcoGOqUBhhyCh%2FeVOyYuyBSYFDfmFmq46Dq2s2It1ZJRLLi0Cd4TF3HLtqXFdReUpQBJcI39tNfK8TwXRMANkVgl6tBuNI7sYyafnepuBSAuY0nhkUcNs0NX%2Bl%2B9h%2Bu4MiYNu4pk8LxP%2BvPCPwXHrD9trSltS74gB2DeKlwsp4xUrBj6V1dASrkel6LCD4gmIsDR%2FEEitZvm4QiSkEawxIPDJetKH323aTM%2F&X-Amz-Signature=421947235d0428679cc7b7c2e6a06d200498ca00a6ab2a78a817d36a9cba2236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYUAI5R%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC406iRx5lod37%2FsAwmCXchGmyvBHx07ZxFh4s%2FIGiRrAIgMKEQpsJFWY5b99eJvQQ4JjNAp8Iu2EoiTw%2FvKoy0BiAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDOhpSyvkRVusUSLB7CrcA9Q4N6oH0QXwpOjdoqAKnQ%2FUiNCRtPjWzGIVcPrNgqgEjTpnBidoNS2Fseu4290B38mqyAkjMGjM0AGZzDacKptCm9ggqOst39YrbVmTaRYrP2xsZ%2F9a7igLZBJiYLg1rTXXiIOatm86Fz5L664psgCKb6ZK6QaO7ZXd4XNsi1KErL0T085rHeSyyAuV7uXSiBb0sffWlkJ3jv6GvLXgdjk62FlgqyUKI85dlyASqs1Jl3XwRzRalmn2Ye3LLNm5JV4LSnqWnICYg1AcR9x%2FeNrDLvYSEZSjdkPDyQ2EUgCFV%2Bt5Oi7cxr4fpoanABlpa4eXckO2PvhpT5W%2Fq6O9Ljf76FhbmXfqzubX5hCuF3kDCGTpWkbaVhAesUMOsOjoqQ7TbFNYOSa%2Bz7YorEUX%2FyXeoS1yrNwsWygQOqQj0OLrW%2FWrBlF%2FeTR22J1pMsp52uS590azbp%2BbAevZLYzuUE4zRd4U%2BKtneKR%2Bhvj%2BA5ByWXor8okhZE%2B1jMuziOcQ%2FwMiyRPLSe1ieSo4yur5Fl%2B7VSMyn7xHE%2FPx%2Fmt4fKeej%2F9vCbr93bIKhweRmIG67qsimHSwYhbpNLZV4wW1skZLJm3KGT4qMBQzpQsgBtWK5kOINe%2BznxFg%2FuMMMITswcoGOqUBhhyCh%2FeVOyYuyBSYFDfmFmq46Dq2s2It1ZJRLLi0Cd4TF3HLtqXFdReUpQBJcI39tNfK8TwXRMANkVgl6tBuNI7sYyafnepuBSAuY0nhkUcNs0NX%2Bl%2B9h%2Bu4MiYNu4pk8LxP%2BvPCPwXHrD9trSltS74gB2DeKlwsp4xUrBj6V1dASrkel6LCD4gmIsDR%2FEEitZvm4QiSkEawxIPDJetKH323aTM%2F&X-Amz-Signature=cb5ceebbdf0d5c5d31c96844d6bb4fc7e6618da26224ac4d8eb645b4b2535db9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYUAI5R%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC406iRx5lod37%2FsAwmCXchGmyvBHx07ZxFh4s%2FIGiRrAIgMKEQpsJFWY5b99eJvQQ4JjNAp8Iu2EoiTw%2FvKoy0BiAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDOhpSyvkRVusUSLB7CrcA9Q4N6oH0QXwpOjdoqAKnQ%2FUiNCRtPjWzGIVcPrNgqgEjTpnBidoNS2Fseu4290B38mqyAkjMGjM0AGZzDacKptCm9ggqOst39YrbVmTaRYrP2xsZ%2F9a7igLZBJiYLg1rTXXiIOatm86Fz5L664psgCKb6ZK6QaO7ZXd4XNsi1KErL0T085rHeSyyAuV7uXSiBb0sffWlkJ3jv6GvLXgdjk62FlgqyUKI85dlyASqs1Jl3XwRzRalmn2Ye3LLNm5JV4LSnqWnICYg1AcR9x%2FeNrDLvYSEZSjdkPDyQ2EUgCFV%2Bt5Oi7cxr4fpoanABlpa4eXckO2PvhpT5W%2Fq6O9Ljf76FhbmXfqzubX5hCuF3kDCGTpWkbaVhAesUMOsOjoqQ7TbFNYOSa%2Bz7YorEUX%2FyXeoS1yrNwsWygQOqQj0OLrW%2FWrBlF%2FeTR22J1pMsp52uS590azbp%2BbAevZLYzuUE4zRd4U%2BKtneKR%2Bhvj%2BA5ByWXor8okhZE%2B1jMuziOcQ%2FwMiyRPLSe1ieSo4yur5Fl%2B7VSMyn7xHE%2FPx%2Fmt4fKeej%2F9vCbr93bIKhweRmIG67qsimHSwYhbpNLZV4wW1skZLJm3KGT4qMBQzpQsgBtWK5kOINe%2BznxFg%2FuMMMITswcoGOqUBhhyCh%2FeVOyYuyBSYFDfmFmq46Dq2s2It1ZJRLLi0Cd4TF3HLtqXFdReUpQBJcI39tNfK8TwXRMANkVgl6tBuNI7sYyafnepuBSAuY0nhkUcNs0NX%2Bl%2B9h%2Bu4MiYNu4pk8LxP%2BvPCPwXHrD9trSltS74gB2DeKlwsp4xUrBj6V1dASrkel6LCD4gmIsDR%2FEEitZvm4QiSkEawxIPDJetKH323aTM%2F&X-Amz-Signature=2bf5cb4df9035ca36eea87eaaa46fed0d25fd6d5a0e2584bf63df75e77509015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYUAI5R%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC406iRx5lod37%2FsAwmCXchGmyvBHx07ZxFh4s%2FIGiRrAIgMKEQpsJFWY5b99eJvQQ4JjNAp8Iu2EoiTw%2FvKoy0BiAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDOhpSyvkRVusUSLB7CrcA9Q4N6oH0QXwpOjdoqAKnQ%2FUiNCRtPjWzGIVcPrNgqgEjTpnBidoNS2Fseu4290B38mqyAkjMGjM0AGZzDacKptCm9ggqOst39YrbVmTaRYrP2xsZ%2F9a7igLZBJiYLg1rTXXiIOatm86Fz5L664psgCKb6ZK6QaO7ZXd4XNsi1KErL0T085rHeSyyAuV7uXSiBb0sffWlkJ3jv6GvLXgdjk62FlgqyUKI85dlyASqs1Jl3XwRzRalmn2Ye3LLNm5JV4LSnqWnICYg1AcR9x%2FeNrDLvYSEZSjdkPDyQ2EUgCFV%2Bt5Oi7cxr4fpoanABlpa4eXckO2PvhpT5W%2Fq6O9Ljf76FhbmXfqzubX5hCuF3kDCGTpWkbaVhAesUMOsOjoqQ7TbFNYOSa%2Bz7YorEUX%2FyXeoS1yrNwsWygQOqQj0OLrW%2FWrBlF%2FeTR22J1pMsp52uS590azbp%2BbAevZLYzuUE4zRd4U%2BKtneKR%2Bhvj%2BA5ByWXor8okhZE%2B1jMuziOcQ%2FwMiyRPLSe1ieSo4yur5Fl%2B7VSMyn7xHE%2FPx%2Fmt4fKeej%2F9vCbr93bIKhweRmIG67qsimHSwYhbpNLZV4wW1skZLJm3KGT4qMBQzpQsgBtWK5kOINe%2BznxFg%2FuMMMITswcoGOqUBhhyCh%2FeVOyYuyBSYFDfmFmq46Dq2s2It1ZJRLLi0Cd4TF3HLtqXFdReUpQBJcI39tNfK8TwXRMANkVgl6tBuNI7sYyafnepuBSAuY0nhkUcNs0NX%2Bl%2B9h%2Bu4MiYNu4pk8LxP%2BvPCPwXHrD9trSltS74gB2DeKlwsp4xUrBj6V1dASrkel6LCD4gmIsDR%2FEEitZvm4QiSkEawxIPDJetKH323aTM%2F&X-Amz-Signature=331c821b9720e75007be414f102aa61a18b5a34ca93179d76693fcc0cdc24540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYUAI5R%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC406iRx5lod37%2FsAwmCXchGmyvBHx07ZxFh4s%2FIGiRrAIgMKEQpsJFWY5b99eJvQQ4JjNAp8Iu2EoiTw%2FvKoy0BiAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDOhpSyvkRVusUSLB7CrcA9Q4N6oH0QXwpOjdoqAKnQ%2FUiNCRtPjWzGIVcPrNgqgEjTpnBidoNS2Fseu4290B38mqyAkjMGjM0AGZzDacKptCm9ggqOst39YrbVmTaRYrP2xsZ%2F9a7igLZBJiYLg1rTXXiIOatm86Fz5L664psgCKb6ZK6QaO7ZXd4XNsi1KErL0T085rHeSyyAuV7uXSiBb0sffWlkJ3jv6GvLXgdjk62FlgqyUKI85dlyASqs1Jl3XwRzRalmn2Ye3LLNm5JV4LSnqWnICYg1AcR9x%2FeNrDLvYSEZSjdkPDyQ2EUgCFV%2Bt5Oi7cxr4fpoanABlpa4eXckO2PvhpT5W%2Fq6O9Ljf76FhbmXfqzubX5hCuF3kDCGTpWkbaVhAesUMOsOjoqQ7TbFNYOSa%2Bz7YorEUX%2FyXeoS1yrNwsWygQOqQj0OLrW%2FWrBlF%2FeTR22J1pMsp52uS590azbp%2BbAevZLYzuUE4zRd4U%2BKtneKR%2Bhvj%2BA5ByWXor8okhZE%2B1jMuziOcQ%2FwMiyRPLSe1ieSo4yur5Fl%2B7VSMyn7xHE%2FPx%2Fmt4fKeej%2F9vCbr93bIKhweRmIG67qsimHSwYhbpNLZV4wW1skZLJm3KGT4qMBQzpQsgBtWK5kOINe%2BznxFg%2FuMMMITswcoGOqUBhhyCh%2FeVOyYuyBSYFDfmFmq46Dq2s2It1ZJRLLi0Cd4TF3HLtqXFdReUpQBJcI39tNfK8TwXRMANkVgl6tBuNI7sYyafnepuBSAuY0nhkUcNs0NX%2Bl%2B9h%2Bu4MiYNu4pk8LxP%2BvPCPwXHrD9trSltS74gB2DeKlwsp4xUrBj6V1dASrkel6LCD4gmIsDR%2FEEitZvm4QiSkEawxIPDJetKH323aTM%2F&X-Amz-Signature=20d49a7f981bab0ace4dd24ec08fbb8fcfc24400a10d2594dc01539387a28dc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYUAI5R%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC406iRx5lod37%2FsAwmCXchGmyvBHx07ZxFh4s%2FIGiRrAIgMKEQpsJFWY5b99eJvQQ4JjNAp8Iu2EoiTw%2FvKoy0BiAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDOhpSyvkRVusUSLB7CrcA9Q4N6oH0QXwpOjdoqAKnQ%2FUiNCRtPjWzGIVcPrNgqgEjTpnBidoNS2Fseu4290B38mqyAkjMGjM0AGZzDacKptCm9ggqOst39YrbVmTaRYrP2xsZ%2F9a7igLZBJiYLg1rTXXiIOatm86Fz5L664psgCKb6ZK6QaO7ZXd4XNsi1KErL0T085rHeSyyAuV7uXSiBb0sffWlkJ3jv6GvLXgdjk62FlgqyUKI85dlyASqs1Jl3XwRzRalmn2Ye3LLNm5JV4LSnqWnICYg1AcR9x%2FeNrDLvYSEZSjdkPDyQ2EUgCFV%2Bt5Oi7cxr4fpoanABlpa4eXckO2PvhpT5W%2Fq6O9Ljf76FhbmXfqzubX5hCuF3kDCGTpWkbaVhAesUMOsOjoqQ7TbFNYOSa%2Bz7YorEUX%2FyXeoS1yrNwsWygQOqQj0OLrW%2FWrBlF%2FeTR22J1pMsp52uS590azbp%2BbAevZLYzuUE4zRd4U%2BKtneKR%2Bhvj%2BA5ByWXor8okhZE%2B1jMuziOcQ%2FwMiyRPLSe1ieSo4yur5Fl%2B7VSMyn7xHE%2FPx%2Fmt4fKeej%2F9vCbr93bIKhweRmIG67qsimHSwYhbpNLZV4wW1skZLJm3KGT4qMBQzpQsgBtWK5kOINe%2BznxFg%2FuMMMITswcoGOqUBhhyCh%2FeVOyYuyBSYFDfmFmq46Dq2s2It1ZJRLLi0Cd4TF3HLtqXFdReUpQBJcI39tNfK8TwXRMANkVgl6tBuNI7sYyafnepuBSAuY0nhkUcNs0NX%2Bl%2B9h%2Bu4MiYNu4pk8LxP%2BvPCPwXHrD9trSltS74gB2DeKlwsp4xUrBj6V1dASrkel6LCD4gmIsDR%2FEEitZvm4QiSkEawxIPDJetKH323aTM%2F&X-Amz-Signature=50ca489879c5ff4056bd7cbf5b5e196cf6bf649781c9deee802efa8be0f7c255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIW7GYRG%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAv1ttE%2B6b89MKRbEEUaxx1fF9F7bm1j7iGvet2KOMDzAiAEVb0rPK9XG2btfIDxZN98i%2FUmtK%2Be53HQ1WuP%2B8EFjyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMjQ01X4XMY8%2F9hxOvKtwDVrLjIhFfex9kG8JQzjbfCISXMQlLLwCmrJe7U84d0UI79bG7R74RB5Sko6q1ejzQdVU3zUVA9p8TbXVb8h1XFdZ1WacrooYAhFkTg%2FSIBHA0z6yLvddUcehMhcvoHz7Kf%2BIg4TyhOx7IzkNaBWq2w6sPgE8oeXvwRgw5PL9Uh%2Fi9KA8cP6eFwCWRDAt2Qas28SWnWTkydtSm7oMH7wQ7E6%2FujfJ5zNcI1a0GhUF%2B%2FVdYKZNfLQcwyzwmpSxcju24K%2BfHUNLJxlpAJo1PnJlC7JuEJ446wld%2FF8TWG55353BHTjzwmIYcbXeFhSAkSWp0mgqVOxFWjHctcvBld7X8M57G%2B0chvU1VkXpYIx%2BG0NzBkwZar0RPD4RYumDv3DI9UCwU%2FCcqL2vwWlz0UJgoOPBHCHNCyOa%2B%2BnnvarmnpP8TLMe5PxgZA6I2NM8aa%2BXyiQLm8LEDLu2F9mQzkfw4ISyvip3%2FlTGlrVijyblskPGXMnG%2FBDAtyHE1VP4FtVmQJIVst9TBCErkiobk0coyCazZOsx1BpIVCsuUIJhpAbIFyo7gNVE481%2B62PlDyKdk43RgDGS8p7xRowWWGGvi9VZ6Yz%2BV86YLzUVyFTLx9oQQwH3xm%2FT%2B3pQtupow38LBygY6pgGklDVkjKenmh%2BTf2i%2FvM2T68qzL0PP8AcOYpoRJuMNS5L39GOFpj6pCZNQk%2BK3J1p%2F8QT6Rshf6rY%2BJ2HWhw1w8CjJd2FQMshbnBG8v4E5WaaOZDhdRqEsH5bDvzpriYgD1Y7whnQVFwCGFNthmCoPPhcqHYC6%2FrbsjdWNQupjBJnDnSwx5H8jv%2BmO%2FuVBjnLW4ufvtbU7EQdbqcx56xYRe2ewBIsR&X-Amz-Signature=12019d05fb89daf03c089063fc063a3755af90e4bb3669a86f5d87df1620fb64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646QHQQC3%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFp8brE%2FnkHHXGzw86WP4cPSs8aPjLbZDkp8d%2F%2FoY7EAIgZFRiGFWGX5sbCaU5mjrOx%2BYDJQwfRL9A9QK69267M7Yq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDHC9v8iah0VCG%2BZ4QSrcA%2FtXNDjon8EgUBWfIXxFyqRVZVNNkFNu%2Bb2SBR%2Fg1fBn3ckmaUqFkZ49MTXO4L0zDugvMdpVbVPRjAFCp2um6UGZeNq7yGPFLIFmvmkwEmNcipwB7uLqjMkiMqn4H4jZ0psUYVEz5A2Op4k%2FMN5SZ5Zfm7r%2BWaaqUCRPphS%2F5WzjAE85PaleexTilFMoRiNYpXEgIPQ40dFsF4HdA1QeBehcT%2BYAICeavfd%2FbPpNoHHb1HHRY9VppYRJvZhyFpE8zXYt%2BxZzZAbbcvFhK6ypt9eg6szq4WrlTj5ouMrIOTbJyLsq2H6ZahAz53eFjvlGQXFUpwr3voYoOFT%2F0zjB%2B2Zyh7fN%2BPfFIohlrtrRZCAoCvm4Sy9A46xTrtLku2AOtKbsHItJ%2F1aZ95m3GgfUIEEoBZvjYctDpWlnOCqe%2F2O35kHHOJUqM%2BYHB6QHz9jWI%2F2fh2X1AvwNr99Il2T%2FqvvxG7xH7klK%2FpamObiG3bnmmAgiAUGqWMDUmHWGnB6f1ho7MWa%2FW%2FNdLBt3CXxvQ5oXUWqHMRQPJducQHrxUEFqK%2BPME3DrWcvUgwX2J%2FBzh8eL%2FM0POuxsvP6%2FZgTtyH5BXEgZ0YaIMVQM6%2FxUjV6J%2FnK89UQNEbC09w7oMKHhwcoGOqUBBVoDy6z9hblhu9d78ZMgADPwEMY2GQzV7gH4r7Jv54ZVqisarZNys8xGUVpdCR4FKD5gng3vdGfDJc7%2FXXQeaY3ZlL7ndnoLVS9pGyTmo9n3ihKz9ABO2m4IKovXuv%2FcDbyKV3qhISf2mAx9w8AjIAriVcg2vWLY0VJgVCoZHOdiByLGvRVl82JOy%2BZYCiucUtI01oyWIR9fXleYfNYbmYl2MCzY&X-Amz-Signature=e8c50b73414a1204ca8bec2d029dcff3879f8ca105c5efcc9a5bfa81e6e98750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BDCE7YY%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUSyi6ffy7eDwfcKIw3VBt95m54ldxQXDSQZU%2BeuGOhQIgJbSg4xyAzBRCu7qQRmwABWSsnT9chxowPjG7O1MVH5gq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIwp7Z0kizemesL%2FyircA2QBm5tTl4Q8TT7Xr4n6a%2FSNFhuy47%2BqyOIpDQ8JVubULLxswwHE%2BOKJgzeRPmOg126Vmnx6Vhae6K8MkEzf1qx78ZZkQs9JN1bEcObwDbYAVT6uh%2Bv5%2BcagXBuxrVpXCgYhAqfhKIJUoJeDcD8CNhoJ50OWMjeTvHuiRkEenor5nFeMF1fFjk1Fbduo%2FlcUyMnPD8qrIFwLV1MfxXSNh5LVhfeYZueOMOSfyV8kOJ%2F3t81puQB3MlVtsJ%2BTe8lw0fVbXPMFcQsNOXRULYhNNcr3ZCAz5NpXWPEv8CT%2F1ZRmwkc9HMiyUwMifFyOSmMN%2Fva9oWDyeMJAnNv%2BYsmj0Q%2FSStNbEYuNMkLjc3hnUWx4sy7P5Ec7Jf8kgO%2FM%2BwDo90F9%2F0HQ0g8vVzcmPCKDytljs%2BX5Q8PeLZQzfZc%2BE6HdxnKPS1pJu%2B%2BZbKqo41Kd2%2Fj9lGGMN04Fp3RQpEofHSYIfmCn%2Bn2o764H7mfEcFxU329cb4IF8JyrkR0PTCFprai0yhEvNmqx1m%2FnUA85mAaRcqxt0qYWG9zpBNOWLtrCwh0nJddeM%2F9lCbHUn1YY%2BrjwqAph89nNZS1kSah%2FLes%2Bk%2FM2pAatm2ZsWq6poWd%2FzZzpBRk%2FeZBf26yIMLf8wcoGOqUB0idltomcfIq7nlOCIfXYZQ6zABu7FreaInC04bzIVikTUNIy2%2B2CLW4HnYjfp3DZnzs6i44lEI57EJ3qXyTDPMlPUq1LR29J4qzjbkf%2BkYAyjIVfEaf5D8U10eT8M5uSWh8aPaOQWkuSYhm%2Fu0yiY2%2FrbeNeEnBm5XLBjQpdzqQmzktcglyH%2BIxxfY%2Bv6itxvsmwT68Fd83n%2Fftep88zTslmg0u3&X-Amz-Signature=047ace0401d9c7454c1b3fadc28148d3b37c5f1d616b8d2a81a8da077157da4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYUAI5R%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC406iRx5lod37%2FsAwmCXchGmyvBHx07ZxFh4s%2FIGiRrAIgMKEQpsJFWY5b99eJvQQ4JjNAp8Iu2EoiTw%2FvKoy0BiAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDOhpSyvkRVusUSLB7CrcA9Q4N6oH0QXwpOjdoqAKnQ%2FUiNCRtPjWzGIVcPrNgqgEjTpnBidoNS2Fseu4290B38mqyAkjMGjM0AGZzDacKptCm9ggqOst39YrbVmTaRYrP2xsZ%2F9a7igLZBJiYLg1rTXXiIOatm86Fz5L664psgCKb6ZK6QaO7ZXd4XNsi1KErL0T085rHeSyyAuV7uXSiBb0sffWlkJ3jv6GvLXgdjk62FlgqyUKI85dlyASqs1Jl3XwRzRalmn2Ye3LLNm5JV4LSnqWnICYg1AcR9x%2FeNrDLvYSEZSjdkPDyQ2EUgCFV%2Bt5Oi7cxr4fpoanABlpa4eXckO2PvhpT5W%2Fq6O9Ljf76FhbmXfqzubX5hCuF3kDCGTpWkbaVhAesUMOsOjoqQ7TbFNYOSa%2Bz7YorEUX%2FyXeoS1yrNwsWygQOqQj0OLrW%2FWrBlF%2FeTR22J1pMsp52uS590azbp%2BbAevZLYzuUE4zRd4U%2BKtneKR%2Bhvj%2BA5ByWXor8okhZE%2B1jMuziOcQ%2FwMiyRPLSe1ieSo4yur5Fl%2B7VSMyn7xHE%2FPx%2Fmt4fKeej%2F9vCbr93bIKhweRmIG67qsimHSwYhbpNLZV4wW1skZLJm3KGT4qMBQzpQsgBtWK5kOINe%2BznxFg%2FuMMMITswcoGOqUBhhyCh%2FeVOyYuyBSYFDfmFmq46Dq2s2It1ZJRLLi0Cd4TF3HLtqXFdReUpQBJcI39tNfK8TwXRMANkVgl6tBuNI7sYyafnepuBSAuY0nhkUcNs0NX%2Bl%2B9h%2Bu4MiYNu4pk8LxP%2BvPCPwXHrD9trSltS74gB2DeKlwsp4xUrBj6V1dASrkel6LCD4gmIsDR%2FEEitZvm4QiSkEawxIPDJetKH323aTM%2F&X-Amz-Signature=92e2da2b52f8d8a4382f3ec74ddbdab97813d4e319d31ecaca4f37297c8e51dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVJE46O7%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRji2Q%2BWp5bV0m71HCs8RD%2FvvANxvuQDOOFN8WZn2yYQIhALFaxJCnw1w1igJYl0N1b1EC%2Fqfm96yyylyxZFo9tTfPKv8DCHkQABoMNjM3NDIzMTgzODA1Igw7OnS5vKO28fZi2wMq3AP9lDwyIKcyY4xggKX6UhQdcQ%2BD8Ow0Nvr%2FPFAU%2Fwl%2BseeLtnMEJm6x4yFFJAmMuRc7MD1pe2iymqSnrNHly9wcwL2Ne02idsZ%2B72IksxmznrmmIQCU1us0M3qzZ8FkVe%2BTrsz8NfBkir5QavgcVTvN9OaqPA9KcKctosJXLoMuQo1NM1ZSKveVxeWt5P7inFBBDLEvTyy0m4d8Wju2rLkK5ZzX4M6a0n2sVFvunurXpPSwgIm7iEbdxK0PXSWfuR243zbgeqluLH6ByNMpkSzhH7CIDnocDhbuaiUKJpG4GA46jhD5FqXHmC7BSL48PF%2FsN2EwKlcItRgn38n%2B0UEkm272b%2FVEtkonrFXzBBgS5w0Lzk3JGBw527am%2FBw8BjvY4v2PRGX5u48qnnhcfIc%2F04pFfclDWl4z4EnlDUm2HiYvAMIwuM%2FNERRqI%2Fw3RGLyYrEc2ML%2BLfBfI5P%2BTJvYOw%2BbJr94dHeRP082MzRl4zGfKyGGDAtlfMi1vwwxcWzlePDrkHiMuoxRzCUyf05K2tGpoBJN7CtByUuxMQS39VBRGD5OCjYVlCo%2FcxH%2BVfSS5R0zk3ZgRr0Tnt2dAFFdAltNv8jI2LlqbIDcw7mrIX4aQ2%2FB465vmqHnADCb5sHKBjqkAXpo2XdMABkMzz577tJQxB8YOv1wwW3Z7F%2F6TOh4G2Znac9mGC8dLFXCPOWyqLBk9FkDvDTRdWkHM6NA4a7vhqhpYeqHLi2xleEdDgW8wBI3fnNzOiR9kpROIVLtA8AFFUIgYICBENK7NrRsDS5AlEW9ivWZDAdrOTq2aUg%2F1txAkZ0ucrG%2FWptO2o1bYbbRBn7VIVzvxx2UdX3twNUGLN1pshRW&X-Amz-Signature=1dc89a60e0448be23ffe9cc1d1f985fe1f57b9c29dc70424f0d9972fe01f7179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYUAI5R%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC406iRx5lod37%2FsAwmCXchGmyvBHx07ZxFh4s%2FIGiRrAIgMKEQpsJFWY5b99eJvQQ4JjNAp8Iu2EoiTw%2FvKoy0BiAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDOhpSyvkRVusUSLB7CrcA9Q4N6oH0QXwpOjdoqAKnQ%2FUiNCRtPjWzGIVcPrNgqgEjTpnBidoNS2Fseu4290B38mqyAkjMGjM0AGZzDacKptCm9ggqOst39YrbVmTaRYrP2xsZ%2F9a7igLZBJiYLg1rTXXiIOatm86Fz5L664psgCKb6ZK6QaO7ZXd4XNsi1KErL0T085rHeSyyAuV7uXSiBb0sffWlkJ3jv6GvLXgdjk62FlgqyUKI85dlyASqs1Jl3XwRzRalmn2Ye3LLNm5JV4LSnqWnICYg1AcR9x%2FeNrDLvYSEZSjdkPDyQ2EUgCFV%2Bt5Oi7cxr4fpoanABlpa4eXckO2PvhpT5W%2Fq6O9Ljf76FhbmXfqzubX5hCuF3kDCGTpWkbaVhAesUMOsOjoqQ7TbFNYOSa%2Bz7YorEUX%2FyXeoS1yrNwsWygQOqQj0OLrW%2FWrBlF%2FeTR22J1pMsp52uS590azbp%2BbAevZLYzuUE4zRd4U%2BKtneKR%2Bhvj%2BA5ByWXor8okhZE%2B1jMuziOcQ%2FwMiyRPLSe1ieSo4yur5Fl%2B7VSMyn7xHE%2FPx%2Fmt4fKeej%2F9vCbr93bIKhweRmIG67qsimHSwYhbpNLZV4wW1skZLJm3KGT4qMBQzpQsgBtWK5kOINe%2BznxFg%2FuMMMITswcoGOqUBhhyCh%2FeVOyYuyBSYFDfmFmq46Dq2s2It1ZJRLLi0Cd4TF3HLtqXFdReUpQBJcI39tNfK8TwXRMANkVgl6tBuNI7sYyafnepuBSAuY0nhkUcNs0NX%2Bl%2B9h%2Bu4MiYNu4pk8LxP%2BvPCPwXHrD9trSltS74gB2DeKlwsp4xUrBj6V1dASrkel6LCD4gmIsDR%2FEEitZvm4QiSkEawxIPDJetKH323aTM%2F&X-Amz-Signature=6e71a7b04e844eb2ed5fd14f21e0d1c8439466e5910176f208344a5102d1daa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAMUTJ72%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDipQ%2BGTZmrFIlaCQw9s9dt0K2E8IFRKpaQYXMIpo1LjwIhAOUeJMWSV6F3F%2FUictWvlITfb7gi8QvHboa8ZeeMjuV5Kv8DCHkQABoMNjM3NDIzMTgzODA1IgyL0XNyVdIttIBr4ZUq3AN7r%2FNWZMYTNj8BX92V7tttCtUROMSWui0NozwBNTXzve%2F3A0IF5z%2B5ckf98uDQEvglqE2vmXrqGUfgPmRr8qocwtLLAcfwKX0kpHUBCWOc8GzYNu2FXl3w8vZFGv4Mx3hyCOgVJt5Z4lIOZ5VvrthTFHTRdk%2BpnqUjWRN3wiK1MRJxzVt7nd7Ygvw3zHTXXTgHzIOTPGmGQr54cNHwh8S%2BxhcTg5e9PFMy7pqqgM55KIUbZP%2B34aDg3kvDaFpJ0F5eXRY7z8YVdWkG7sbQaUV5HC6MrRfYTmiTvttOB0dZBIz%2Bpr7QaTWNv9d9WzRkKEsW5u2xJfm1nFwcmMo3C1NAC6ExaL7GRSurgFRf5Ea9AFoPROMcT5Sq4J7529oBI%2BgCbY6ETjUbsCGhaTj%2FS9YnpWeOqbI%2F7%2BOFPnlhBJXZQ8N8JISZM9mGVJYDiGy6AvzmAr16tJ%2Fc%2BbMzA0Z0OHS3eIfNs5MwUsrju85anud31Ay3hm8UYMcjmF5CdidGr0jPeDCjm%2BGYVaBpgBe8hf86n4fZH3%2BiJaOqsbw%2FI%2F0f%2Bv03ePm%2FNgfQj9K2aXN4gjbhcikQpEDkZxm45NYItv170QfltL4m%2FGeUwvMvLXoYoUYFrAjMX2JUAJWsaDCY38HKBjqkAWmTBNECo6r5GkuUJTjCuBW32SKLZWm0RrEyQd06NUDUC40bket8X4F4WQnwNVoaDkjuY4heK%2B7rFxo6aqgJe6KTPKHxefiAwwkN3giR9OCnkLgF%2F3BCXMk0vXWUX7Zi7zUH%2FLTceHc7Ws2XSlXX6n9kZKEhOikxAFv25tvORaTfTeZPx6J%2FvfQ4XM7z0n6VBD1n4rEI5RxZPjZPFYOf43LSQRw5&X-Amz-Signature=7e19f37090a6945f961e33c687a1226c0a61da06f92be7865e91862d5391c0bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYUAI5R%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC406iRx5lod37%2FsAwmCXchGmyvBHx07ZxFh4s%2FIGiRrAIgMKEQpsJFWY5b99eJvQQ4JjNAp8Iu2EoiTw%2FvKoy0BiAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDOhpSyvkRVusUSLB7CrcA9Q4N6oH0QXwpOjdoqAKnQ%2FUiNCRtPjWzGIVcPrNgqgEjTpnBidoNS2Fseu4290B38mqyAkjMGjM0AGZzDacKptCm9ggqOst39YrbVmTaRYrP2xsZ%2F9a7igLZBJiYLg1rTXXiIOatm86Fz5L664psgCKb6ZK6QaO7ZXd4XNsi1KErL0T085rHeSyyAuV7uXSiBb0sffWlkJ3jv6GvLXgdjk62FlgqyUKI85dlyASqs1Jl3XwRzRalmn2Ye3LLNm5JV4LSnqWnICYg1AcR9x%2FeNrDLvYSEZSjdkPDyQ2EUgCFV%2Bt5Oi7cxr4fpoanABlpa4eXckO2PvhpT5W%2Fq6O9Ljf76FhbmXfqzubX5hCuF3kDCGTpWkbaVhAesUMOsOjoqQ7TbFNYOSa%2Bz7YorEUX%2FyXeoS1yrNwsWygQOqQj0OLrW%2FWrBlF%2FeTR22J1pMsp52uS590azbp%2BbAevZLYzuUE4zRd4U%2BKtneKR%2Bhvj%2BA5ByWXor8okhZE%2B1jMuziOcQ%2FwMiyRPLSe1ieSo4yur5Fl%2B7VSMyn7xHE%2FPx%2Fmt4fKeej%2F9vCbr93bIKhweRmIG67qsimHSwYhbpNLZV4wW1skZLJm3KGT4qMBQzpQsgBtWK5kOINe%2BznxFg%2FuMMMITswcoGOqUBhhyCh%2FeVOyYuyBSYFDfmFmq46Dq2s2It1ZJRLLi0Cd4TF3HLtqXFdReUpQBJcI39tNfK8TwXRMANkVgl6tBuNI7sYyafnepuBSAuY0nhkUcNs0NX%2Bl%2B9h%2Bu4MiYNu4pk8LxP%2BvPCPwXHrD9trSltS74gB2DeKlwsp4xUrBj6V1dASrkel6LCD4gmIsDR%2FEEitZvm4QiSkEawxIPDJetKH323aTM%2F&X-Amz-Signature=91b93ec0b49fd073a0aa8e6abdacd39a04e0d5076e4d4674e4377d9333e2e24a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSLSJP7T%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMP%2BwjlIjDGh96%2BUaux5xpV%2FKXxSjCIfgwuo%2BGB6U%2B7AIhAKkwMMBOwE63VGshpWx3RAfDj53%2FRK44vZHDJeeziL67Kv8DCHYQABoMNjM3NDIzMTgzODA1IgwS7mV1rUiQW5QgOe0q3AN1R0V2VUmNhiV221gAItDzUftaoYXoBGWHP6sIV%2B3%2BSStfGW%2FYnRHPNa8Q7HLL%2FUCB7hkaMdQFWqDke%2FHmZNyN1ltz%2FIeutZ%2F4zpkSmncVuE2wWi33jVQkwBDnAmQ9dSAwA%2BxHL2tFxUvp%2BrdkC7DX4jcZQBNEd80wMyIMTpR2YWbwnFyIwu8v1BK%2BSulWAi7yz6QdjD1gHrXf5HESsDf0qW18vJYGMWFo783bAhfW%2F7fTlRe4WTAk8ThlFPlvo3Ye8Y7%2FBejCnE1cyNn9H4JNTuB2kMp0E2QYrA2EKL8e3Xkl9haDE1X7gpVCzzGQHV16RqTi%2BXOPtnUxvhv2fNfWG%2BoFk1yPwOgRhM32U9U4Z2co%2BO0dQfdLoPoTdBemm%2FMCK8isH2JIMT0inNc5YJRxaDGcr%2FFwdxB5O2m%2BkX%2BrK7QHBbQlv9MaZy5JCOAWeOTjoLgEh6y0CrWN1ozqgZXbnXcifLAV0MLtSjxmm4LhCFxK6CSLfkpmyI6MZSPnrnhgQzHWx5l9Hbrbp%2Bet4grbiswL6oxBZU2N%2FdKiRIlM8b3tGu5fO7jRHJag709s9A8KS6vH4JZ3yo7hJo%2FfgfplEVH1TcH6VbX44m9wfWguVFpEbTiQO%2F5oJkwJjjCSlMHKBjqkAelPhhj5WR%2BZVPA5n%2FWyVHnlrfbdqCPhSpcNYeMIk4HB8xIAtcxSneUoleepliYTUAD8o56OhMtFLPLupjyETOY2RO5moxu5RdrovUEzaS9dZWXJvl731gjdU7aDRMuh24SaAIOWMfiOaU3sDLxM7rRxJL5GqZwMIYRIX5O0dw3rvxl81JirMsEprhjjNgfdKalsHoDOp9mgdVTEKFphd7Pu5qz6&X-Amz-Signature=1c6848ad0bdd7254b22966f7750339033d84d2e9f966ff5117fc67062a6073c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYUAI5R%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC406iRx5lod37%2FsAwmCXchGmyvBHx07ZxFh4s%2FIGiRrAIgMKEQpsJFWY5b99eJvQQ4JjNAp8Iu2EoiTw%2FvKoy0BiAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDOhpSyvkRVusUSLB7CrcA9Q4N6oH0QXwpOjdoqAKnQ%2FUiNCRtPjWzGIVcPrNgqgEjTpnBidoNS2Fseu4290B38mqyAkjMGjM0AGZzDacKptCm9ggqOst39YrbVmTaRYrP2xsZ%2F9a7igLZBJiYLg1rTXXiIOatm86Fz5L664psgCKb6ZK6QaO7ZXd4XNsi1KErL0T085rHeSyyAuV7uXSiBb0sffWlkJ3jv6GvLXgdjk62FlgqyUKI85dlyASqs1Jl3XwRzRalmn2Ye3LLNm5JV4LSnqWnICYg1AcR9x%2FeNrDLvYSEZSjdkPDyQ2EUgCFV%2Bt5Oi7cxr4fpoanABlpa4eXckO2PvhpT5W%2Fq6O9Ljf76FhbmXfqzubX5hCuF3kDCGTpWkbaVhAesUMOsOjoqQ7TbFNYOSa%2Bz7YorEUX%2FyXeoS1yrNwsWygQOqQj0OLrW%2FWrBlF%2FeTR22J1pMsp52uS590azbp%2BbAevZLYzuUE4zRd4U%2BKtneKR%2Bhvj%2BA5ByWXor8okhZE%2B1jMuziOcQ%2FwMiyRPLSe1ieSo4yur5Fl%2B7VSMyn7xHE%2FPx%2Fmt4fKeej%2F9vCbr93bIKhweRmIG67qsimHSwYhbpNLZV4wW1skZLJm3KGT4qMBQzpQsgBtWK5kOINe%2BznxFg%2FuMMMITswcoGOqUBhhyCh%2FeVOyYuyBSYFDfmFmq46Dq2s2It1ZJRLLi0Cd4TF3HLtqXFdReUpQBJcI39tNfK8TwXRMANkVgl6tBuNI7sYyafnepuBSAuY0nhkUcNs0NX%2Bl%2B9h%2Bu4MiYNu4pk8LxP%2BvPCPwXHrD9trSltS74gB2DeKlwsp4xUrBj6V1dASrkel6LCD4gmIsDR%2FEEitZvm4QiSkEawxIPDJetKH323aTM%2F&X-Amz-Signature=5de8a43dea51816dbb8bd85f4fbc60a513f619c66815addbbc4e1dc31475cc73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCE4QP5C%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEKGN0ojn2DHSEXomfporyZO9Bh62ZP1cLd8j%2Bp0c5tAiBDEu7xnCwUkWcropxQC%2BWw%2B2P6dx%2B2R%2F%2B8sImYdfR10yr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMuaXeOz43lMuawPCFKtwD0JS4NtCbntH9kVGyoOe%2BsvROnwMcEuOD1rVQNHPQEp37tFTj9t%2Bqx%2BkuLPXvFr%2BIl2eW%2BolzKJ5V4ODV23sVhzWtZLNwpEatFAQEWw%2BU38D90BcVdpXYqcXOh2CFYcmobWT5jR2pX%2BaRKXMcu%2B%2FJ7pTpmuvOnfJRPENfqQ%2Be6%2F7KJq2H0IjduSHxSNpCnJkt9%2BZ4xuKwGzNgRIWlJ91sR%2F36rlp1tI8l%2F75G7mrV%2F0gKOVUqdzAQ%2FplkRCucjQ40DLeEf6D4B%2Bm%2BuWXVjHg4VZwdxTtqxfLuS0AaXtTFS6V7JF1gkHNLobtX%2Fl%2BEvoGFboEQknadMJ37wJjTUlvBrg13o7YeAMiPX5kQzlfJgN0L03sT%2BTH31bHF1xV6WvljI0X98CGH3NcQrO0PIiVUXsu3Hd1nUgLHxUjGO1AndSZbUgQ9Vu3x%2FeyODcTZfdteaIuL%2F0GxrPcinW%2FMidZsHivuzV8XFU0BQVJEZLsQWn6NENpnEae%2Bb4nGurSphhZDrk04qnD6VDjRioSotflGB%2BkUhCP0URb6adA39ZRZg7S48VnuTYbrF8bNiJ%2Fwg1ojp5MvVNVZkX2TcteApEubTTRFK0UD4XKnJLZxsQ68fcsiolh73kZDJHd1TYcw9PPBygY6pgF0eZADRGsB3eWHMi6gF%2Bi4NVPQeZih5aJZJ5coi6HWSBBVVomxJNTrPcuuCwnDZWFAaWi6sB0DK0LwfelllttndFhwVFHsK78EXlnM4ZsCF2kpWPXbzFGm3WjRKkH2%2BH08z6olwVin%2BlqWOeLtYl3jaPoZ8XRomyRxh8%2BgSWPMy80XdohBsbFVMDLGzfAL11mfnXj2Hc%2FLOCRyCu9CX%2BA8dM3jp2Ri&X-Amz-Signature=6e9df7d8f87bf332e4a65a3d252be0c52f058199fb2bc106c430f9adca38e945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYUAI5R%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC406iRx5lod37%2FsAwmCXchGmyvBHx07ZxFh4s%2FIGiRrAIgMKEQpsJFWY5b99eJvQQ4JjNAp8Iu2EoiTw%2FvKoy0BiAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDOhpSyvkRVusUSLB7CrcA9Q4N6oH0QXwpOjdoqAKnQ%2FUiNCRtPjWzGIVcPrNgqgEjTpnBidoNS2Fseu4290B38mqyAkjMGjM0AGZzDacKptCm9ggqOst39YrbVmTaRYrP2xsZ%2F9a7igLZBJiYLg1rTXXiIOatm86Fz5L664psgCKb6ZK6QaO7ZXd4XNsi1KErL0T085rHeSyyAuV7uXSiBb0sffWlkJ3jv6GvLXgdjk62FlgqyUKI85dlyASqs1Jl3XwRzRalmn2Ye3LLNm5JV4LSnqWnICYg1AcR9x%2FeNrDLvYSEZSjdkPDyQ2EUgCFV%2Bt5Oi7cxr4fpoanABlpa4eXckO2PvhpT5W%2Fq6O9Ljf76FhbmXfqzubX5hCuF3kDCGTpWkbaVhAesUMOsOjoqQ7TbFNYOSa%2Bz7YorEUX%2FyXeoS1yrNwsWygQOqQj0OLrW%2FWrBlF%2FeTR22J1pMsp52uS590azbp%2BbAevZLYzuUE4zRd4U%2BKtneKR%2Bhvj%2BA5ByWXor8okhZE%2B1jMuziOcQ%2FwMiyRPLSe1ieSo4yur5Fl%2B7VSMyn7xHE%2FPx%2Fmt4fKeej%2F9vCbr93bIKhweRmIG67qsimHSwYhbpNLZV4wW1skZLJm3KGT4qMBQzpQsgBtWK5kOINe%2BznxFg%2FuMMMITswcoGOqUBhhyCh%2FeVOyYuyBSYFDfmFmq46Dq2s2It1ZJRLLi0Cd4TF3HLtqXFdReUpQBJcI39tNfK8TwXRMANkVgl6tBuNI7sYyafnepuBSAuY0nhkUcNs0NX%2Bl%2B9h%2Bu4MiYNu4pk8LxP%2BvPCPwXHrD9trSltS74gB2DeKlwsp4xUrBj6V1dASrkel6LCD4gmIsDR%2FEEitZvm4QiSkEawxIPDJetKH323aTM%2F&X-Amz-Signature=b149e59a0048303598014b93442029ab0d4a2b5c9b7d0b3a64da4ad488871d61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLWH3L6K%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2Bj3GC5Ebqtm9FYVJfwWvUFPcMSR%2Bz%2FPJMvynracGHoAiAbVVLVV8KwEzkj1Z7gJZ2PE6HesfsQTrBuWdFBofAtVir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMr0vbgUnNKtTN5n4VKtwD7n5eH%2B21ydkgfjK6F8DhTNWfc9AepH12AJKZd%2FuKg70n19s1RKvOXGBA9fQX7TS%2FmWt8SH7wp%2BLuHixbo%2B%2BGsOhWiXlrnNFfP94KAaTfAa4zZu2xMGyS6ByY7rv8jJzIY4Zs%2B2buVcJgohvYrwnnOrzRsKnO%2Fz%2Bb7zJ9ZU2ouEBM1OPab%2BsPq2gMjr2OdnEnpq4sw%2FOikCYCb0f07BgLyWa4720SsLpUVYcpJiPL88Bfzv3RaQwaKx83RdSP7HRL8ZaZAQjoRxW1bDKvlPuINKOKkgReMSZdlFGtAKYWiDNpb1V5K8hMylNtJGOJJ3DQsFoOM5mECF%2BfMhqODFkdkRSn%2FFjAyVMbfrosVNq7bAaIPp8SX6ulzpgaht4N6WRBnCNk6M%2FXJYh4JR%2BUUYihBkOvK6Iz%2FLNozyLiaDhVkbRvHOMhK746HpYSBcPfK75M4mZHP0cFf25XvRP9GHfRIY5D2MOlmgcc0VNe%2BBEZTeZxtCUCJwgEfodgi9lI1x9vCyDOrv9uxEace%2By8MXSE7oQetAClwThNGqD3HP8721MxLv6pf%2FQHevK0l6y1IaChS2JqRGArafI%2FYMuXkhxaE%2FRFJRyiZPw5vOizf3GwY5%2BGHMprcYkJYZSXU9gw%2F4nBygY6pgFHVpueMY7%2F7ZXTGSnCjyntyFi6xAyFIEJKWvvr2gDBR48Kct3PWHA3qxxKNqhDpGfIpPYy1dRYNLjR%2BSiGXCfXZD1xdk9kMrDFLczSShXuMMNWHXCyukxfO%2BJeWrn5kOTMsZ454wsP0xBpzsxSCgAAvqsd%2BDTyRWpYMrgOdMynmJeFtUAJaePu1Yk7Hr4YyYkDPqR%2BKxABCTaX6W5I58pxmluMD3pw&X-Amz-Signature=77e4c630cd497d9f4052a972c674de80da227c4f3ac761052ad1bf1953b52cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVF4GPBE%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BHw70StE8FdYQJVa7DssJS7WnVpB2gdTFcpgFr4WQtgIhAMRnIJljBPjB71NbS0H8qtpe8btj%2FbgPYXCB2%2BeybLq9Kv8DCHYQABoMNjM3NDIzMTgzODA1IgwMMGRE963wq6%2FV2EYq3APtxURoK7EMgbWpAo6sZiHvTjcJ74DWeBUbHAUEbn7sLgeMY69mzZ57bP%2B14zHF6xeeToYcxjPODvnJREJ1OAg6HAyy9R8cWjQSKNImju5wKnl7rWwIwjmPbfjPReqAzD6amTBLjCBC65wHu9hAcFHcwd57aQaF%2BJzTaTzcDKbU63jEhUZnhfLKgB1gEPT3LOKbyGDMOfxPTmOJE5mDi4K14PwbueXOpva0MVpignmIcY35Rgk5tVnA22nY%2BmyFaCPCOsmLdVSC0M%2Fnsm%2F%2FNekUwY6jsP6z8CTvxBy2mkwmM%2BjKOT306WcatO6bBCmBD0lF2pTbuqKQgYWe8DcbiQpJQUzyHKA7soE8NgdvsmXajDTd8mD8aYdrMmOJ0VsGql0sJID9BW8%2FSV8mqbAWrW7uhvWEy04liBEPw23G9DlQsJVcASUBMCP5CM%2Bb4%2B4CZIkC5ETmZ149Wv5sdrARuekfPxfQXSWpnUCud%2FCJDGBmo06zyIy5ZVQ4frAd3OJwM3t1IKg4gS0jrwXFQxEzBYMRRNzZtmj5QDelZN3vi%2B5g7P9bcmBYqmJnA785%2BUw7D2YfmpMceRo%2FvlrS7Ay%2Fg1bngZLNqQFheIbReDMgHmjKTbMYqL9dGhtWmXVO3TCSlMHKBjqkAROdUxGvFWHQIcezqq1cTCurzIf6lEjm7sPzyu3o89KlLcthGceOdg2wsevWRDnAMg8r7dyVyGArI2itO8n5d%2B2pmy8mImF3lbqF6PWmvvYS%2FrAy8ZEjs5waj6dsjzrSEV9aytTFs2ej3mMNqFq6492VdJLbCPM3Rr5W%2Fg2cHGu1qPLC%2FOxKB9zTKMMlqOv8FRql%2FJk8yw7XpKAAutAj9H4Wge%2FV&X-Amz-Signature=baa2c8b3930bf41b02583c8b7fa512f53a9885e81b517eb421a330436c6d2444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGGSAZJY%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZcv8UdFo%2BlSChj1wQ0uYahBA95fl5N2Atw5j0esdxLwIgEOQ0tk1S7Rgr1uYFYBRPweSe203ZyNcNAggcYrX7wtYq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBektE6%2FASanGXQo1yrcAzuM7awQueWPacXzEBS4LwrdqAx1oIw0W%2FjqxD0gE8LlAXVQo1IyC3ETxKUfhecQ8kwN7RGNScSuwyiznEUGpIrVp9z1XIevAywNhu6FXOEkHt3hmE1GVzGEPWgPFx5JNk76kMyJbRmYn%2BiVYPJ82XM2P8w%2Bf2Q6gofe7o5QCfH6Upvp966S2rNGwUxdrlGKaSpvA8keORO4ABy7REdrSQ5E1%2FuPPrFDyg%2BcQpaiS%2BPY%2F%2BLHyw0NxcXqjRroE%2BsGmLhckQvYL%2F62p9RLTgEEykkWbI6x2jTgjZiC9DvwJzAmvvFISKC2Xs%2FG0ZhFiQth%2FcNVWe8yxy7Q61a59%2BPdBuUqJLghcGQrhwXSg9QWOuH4CjXl2VesacbE911FV1cZv5Tbuda9qAUljgamCtRG%2Bkx2oCo4wZJi0OFJKeOUZY4kSOCh42rh51Rq4fSIjeMbwVJC1ymDMlNbRC3gQe9qDF1gmkygPof5s%2B%2B6FYP81pNTDN4NemTDfLnpDiGu5LNM%2F7dnZ3lJMKjDJ%2FFSp%2FgSVkoh1agPAdHf8kbalWA%2F4ERVV552ZcGCpOBUewbs%2BS4WxwGoOb6gaael5LuLiwGCSh%2BWCuk6dGXguaBeg6dlHzcYsBuDBtzscCLVoDHvMLviwcoGOqUBl4vU6HCwuc21N3PMlnlYaahAhMNXDmEMaKeWlC%2FGghtjdFExKghP0ohkyf90wryfqEav0B1p8xXxC1T%2Bc%2Fmu3dtGll916wiHbmrN4SGLZh7cfoBlsadIpwljh3cwC1vYiSl9Vkl0xdvUrvJ0gUXstUNtoRgIFcsXZFvCQvHn0mQHgXpx5NdbtjoQunkBzcPn9dmzsEMw46bN4%2BV%2FdEJhYY%2BhsFOs&X-Amz-Signature=7c1329753158fdeecab8b4932fdb1f36d00e72e928b14d3ec8fb499633112bdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYUAI5R%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC406iRx5lod37%2FsAwmCXchGmyvBHx07ZxFh4s%2FIGiRrAIgMKEQpsJFWY5b99eJvQQ4JjNAp8Iu2EoiTw%2FvKoy0BiAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDOhpSyvkRVusUSLB7CrcA9Q4N6oH0QXwpOjdoqAKnQ%2FUiNCRtPjWzGIVcPrNgqgEjTpnBidoNS2Fseu4290B38mqyAkjMGjM0AGZzDacKptCm9ggqOst39YrbVmTaRYrP2xsZ%2F9a7igLZBJiYLg1rTXXiIOatm86Fz5L664psgCKb6ZK6QaO7ZXd4XNsi1KErL0T085rHeSyyAuV7uXSiBb0sffWlkJ3jv6GvLXgdjk62FlgqyUKI85dlyASqs1Jl3XwRzRalmn2Ye3LLNm5JV4LSnqWnICYg1AcR9x%2FeNrDLvYSEZSjdkPDyQ2EUgCFV%2Bt5Oi7cxr4fpoanABlpa4eXckO2PvhpT5W%2Fq6O9Ljf76FhbmXfqzubX5hCuF3kDCGTpWkbaVhAesUMOsOjoqQ7TbFNYOSa%2Bz7YorEUX%2FyXeoS1yrNwsWygQOqQj0OLrW%2FWrBlF%2FeTR22J1pMsp52uS590azbp%2BbAevZLYzuUE4zRd4U%2BKtneKR%2Bhvj%2BA5ByWXor8okhZE%2B1jMuziOcQ%2FwMiyRPLSe1ieSo4yur5Fl%2B7VSMyn7xHE%2FPx%2Fmt4fKeej%2F9vCbr93bIKhweRmIG67qsimHSwYhbpNLZV4wW1skZLJm3KGT4qMBQzpQsgBtWK5kOINe%2BznxFg%2FuMMMITswcoGOqUBhhyCh%2FeVOyYuyBSYFDfmFmq46Dq2s2It1ZJRLLi0Cd4TF3HLtqXFdReUpQBJcI39tNfK8TwXRMANkVgl6tBuNI7sYyafnepuBSAuY0nhkUcNs0NX%2Bl%2B9h%2Bu4MiYNu4pk8LxP%2BvPCPwXHrD9trSltS74gB2DeKlwsp4xUrBj6V1dASrkel6LCD4gmIsDR%2FEEitZvm4QiSkEawxIPDJetKH323aTM%2F&X-Amz-Signature=5d16ca0c5ca91eb149dd1a702b5cf133a5e4051ab21d7eff7b136331af240a00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYUAI5R%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC406iRx5lod37%2FsAwmCXchGmyvBHx07ZxFh4s%2FIGiRrAIgMKEQpsJFWY5b99eJvQQ4JjNAp8Iu2EoiTw%2FvKoy0BiAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDOhpSyvkRVusUSLB7CrcA9Q4N6oH0QXwpOjdoqAKnQ%2FUiNCRtPjWzGIVcPrNgqgEjTpnBidoNS2Fseu4290B38mqyAkjMGjM0AGZzDacKptCm9ggqOst39YrbVmTaRYrP2xsZ%2F9a7igLZBJiYLg1rTXXiIOatm86Fz5L664psgCKb6ZK6QaO7ZXd4XNsi1KErL0T085rHeSyyAuV7uXSiBb0sffWlkJ3jv6GvLXgdjk62FlgqyUKI85dlyASqs1Jl3XwRzRalmn2Ye3LLNm5JV4LSnqWnICYg1AcR9x%2FeNrDLvYSEZSjdkPDyQ2EUgCFV%2Bt5Oi7cxr4fpoanABlpa4eXckO2PvhpT5W%2Fq6O9Ljf76FhbmXfqzubX5hCuF3kDCGTpWkbaVhAesUMOsOjoqQ7TbFNYOSa%2Bz7YorEUX%2FyXeoS1yrNwsWygQOqQj0OLrW%2FWrBlF%2FeTR22J1pMsp52uS590azbp%2BbAevZLYzuUE4zRd4U%2BKtneKR%2Bhvj%2BA5ByWXor8okhZE%2B1jMuziOcQ%2FwMiyRPLSe1ieSo4yur5Fl%2B7VSMyn7xHE%2FPx%2Fmt4fKeej%2F9vCbr93bIKhweRmIG67qsimHSwYhbpNLZV4wW1skZLJm3KGT4qMBQzpQsgBtWK5kOINe%2BznxFg%2FuMMMITswcoGOqUBhhyCh%2FeVOyYuyBSYFDfmFmq46Dq2s2It1ZJRLLi0Cd4TF3HLtqXFdReUpQBJcI39tNfK8TwXRMANkVgl6tBuNI7sYyafnepuBSAuY0nhkUcNs0NX%2Bl%2B9h%2Bu4MiYNu4pk8LxP%2BvPCPwXHrD9trSltS74gB2DeKlwsp4xUrBj6V1dASrkel6LCD4gmIsDR%2FEEitZvm4QiSkEawxIPDJetKH323aTM%2F&X-Amz-Signature=339e9acb4d644845e2e815abd8ce4e293b0b2f01c13a6253affb3f30967898aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHR5GEJZ%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzoRDoJ4HiAN%2FX6IDrD%2Fg3rF45ELFyRsLFQnPvLAkI5QIhANlvLBSM5g8SCv%2FjKFiOSQ%2Fh1hFxnaM5mJ5KpnAQemskKv8DCHkQABoMNjM3NDIzMTgzODA1IgwGE9CumIM10k6a6dUq3AN%2BdLf79Dx4YCpEg9xVhmuC76qL6VhRhp4gPbVRq6n4jAn1SL0XMp8ppwgOoQYN7lLdOicwf6OefqXPxx3tUGJuSySCbVcOoNLfLeNki%2FkYu4Q6Wa5SQjNAWCX1j%2BTRm8swjUth6mGnx3fTjy5%2Bh9xyLTpia05DAnDGOicflTZorLi1hhDO7RegZrFCPB8UzLCdWu%2BvHWS6G0KhNB5u53bk%2BYwKT83v6beuHpiOPBRpE3Jtps%2FSFc1aCD8PmSD2asoiuH0CDYqharxRT7KPWTDfUz0DaQ3UA6Dvh7kLvbcDr82q4TSxKSdbLTvnHzC0JWEDmHsskGHx79w0Bl38%2BxTmM%2FWUZwZJbP1YjO3Tu3oyfG%2FNg69gwk9IWKTiFU2t4RR7aQYsgT5Opg0O%2FgtMWtv3xgdXd4cEePgz6K9KifCq%2BvYp20DSP9tgullhOtGfbeWKT66BFQRVQmVjaiFWHFXwEwigpp9e3Ucl4xgW03X2lYfwpA1uTBZ%2FX0hXRuptRUlAHXZO5AuvvOtyoBE3Hl62DFbdEerSPFq08SyyQipkCXGGL3EV4VZFjPAEIXN1EteORsl4ARj%2B9e69F%2BOVkDkVv6CWNyo%2BbcyGZXHqVCNj80tJYXbcko7BgCRfvzD15sHKBjqkAdCUtMJ6Axk8AG3dqWj218LNx4bCHtYZhZXrU61mOL37x5znJALlayOSxQMm%2Blaic%2F2cjltQBFz%2BlhHKfRPc1t%2F2ikCKDlmnFKe5t0Can%2F%2FHnyzEW76PfrBqTiKdD2O9nYywh5qzTKVHDFhAbXCfxyYb5yyFOdRxGHVlPPTj6JTKFbrJGVpUOurcqwK1dFqbWu6GuNFIKUP5wz9GHE%2BHd2XQ19Ys&X-Amz-Signature=a89d15f1e2b72aa4e12599b35b238b00378ea55bfeb5db288d02e610d2c73848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHR5GEJZ%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzoRDoJ4HiAN%2FX6IDrD%2Fg3rF45ELFyRsLFQnPvLAkI5QIhANlvLBSM5g8SCv%2FjKFiOSQ%2Fh1hFxnaM5mJ5KpnAQemskKv8DCHkQABoMNjM3NDIzMTgzODA1IgwGE9CumIM10k6a6dUq3AN%2BdLf79Dx4YCpEg9xVhmuC76qL6VhRhp4gPbVRq6n4jAn1SL0XMp8ppwgOoQYN7lLdOicwf6OefqXPxx3tUGJuSySCbVcOoNLfLeNki%2FkYu4Q6Wa5SQjNAWCX1j%2BTRm8swjUth6mGnx3fTjy5%2Bh9xyLTpia05DAnDGOicflTZorLi1hhDO7RegZrFCPB8UzLCdWu%2BvHWS6G0KhNB5u53bk%2BYwKT83v6beuHpiOPBRpE3Jtps%2FSFc1aCD8PmSD2asoiuH0CDYqharxRT7KPWTDfUz0DaQ3UA6Dvh7kLvbcDr82q4TSxKSdbLTvnHzC0JWEDmHsskGHx79w0Bl38%2BxTmM%2FWUZwZJbP1YjO3Tu3oyfG%2FNg69gwk9IWKTiFU2t4RR7aQYsgT5Opg0O%2FgtMWtv3xgdXd4cEePgz6K9KifCq%2BvYp20DSP9tgullhOtGfbeWKT66BFQRVQmVjaiFWHFXwEwigpp9e3Ucl4xgW03X2lYfwpA1uTBZ%2FX0hXRuptRUlAHXZO5AuvvOtyoBE3Hl62DFbdEerSPFq08SyyQipkCXGGL3EV4VZFjPAEIXN1EteORsl4ARj%2B9e69F%2BOVkDkVv6CWNyo%2BbcyGZXHqVCNj80tJYXbcko7BgCRfvzD15sHKBjqkAdCUtMJ6Axk8AG3dqWj218LNx4bCHtYZhZXrU61mOL37x5znJALlayOSxQMm%2Blaic%2F2cjltQBFz%2BlhHKfRPc1t%2F2ikCKDlmnFKe5t0Can%2F%2FHnyzEW76PfrBqTiKdD2O9nYywh5qzTKVHDFhAbXCfxyYb5yyFOdRxGHVlPPTj6JTKFbrJGVpUOurcqwK1dFqbWu6GuNFIKUP5wz9GHE%2BHd2XQ19Ys&X-Amz-Signature=9ac869bf5be4f8de70443028039f82115c60a9ce013981875f3353e85c05813a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHR5GEJZ%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzoRDoJ4HiAN%2FX6IDrD%2Fg3rF45ELFyRsLFQnPvLAkI5QIhANlvLBSM5g8SCv%2FjKFiOSQ%2Fh1hFxnaM5mJ5KpnAQemskKv8DCHkQABoMNjM3NDIzMTgzODA1IgwGE9CumIM10k6a6dUq3AN%2BdLf79Dx4YCpEg9xVhmuC76qL6VhRhp4gPbVRq6n4jAn1SL0XMp8ppwgOoQYN7lLdOicwf6OefqXPxx3tUGJuSySCbVcOoNLfLeNki%2FkYu4Q6Wa5SQjNAWCX1j%2BTRm8swjUth6mGnx3fTjy5%2Bh9xyLTpia05DAnDGOicflTZorLi1hhDO7RegZrFCPB8UzLCdWu%2BvHWS6G0KhNB5u53bk%2BYwKT83v6beuHpiOPBRpE3Jtps%2FSFc1aCD8PmSD2asoiuH0CDYqharxRT7KPWTDfUz0DaQ3UA6Dvh7kLvbcDr82q4TSxKSdbLTvnHzC0JWEDmHsskGHx79w0Bl38%2BxTmM%2FWUZwZJbP1YjO3Tu3oyfG%2FNg69gwk9IWKTiFU2t4RR7aQYsgT5Opg0O%2FgtMWtv3xgdXd4cEePgz6K9KifCq%2BvYp20DSP9tgullhOtGfbeWKT66BFQRVQmVjaiFWHFXwEwigpp9e3Ucl4xgW03X2lYfwpA1uTBZ%2FX0hXRuptRUlAHXZO5AuvvOtyoBE3Hl62DFbdEerSPFq08SyyQipkCXGGL3EV4VZFjPAEIXN1EteORsl4ARj%2B9e69F%2BOVkDkVv6CWNyo%2BbcyGZXHqVCNj80tJYXbcko7BgCRfvzD15sHKBjqkAdCUtMJ6Axk8AG3dqWj218LNx4bCHtYZhZXrU61mOL37x5znJALlayOSxQMm%2Blaic%2F2cjltQBFz%2BlhHKfRPc1t%2F2ikCKDlmnFKe5t0Can%2F%2FHnyzEW76PfrBqTiKdD2O9nYywh5qzTKVHDFhAbXCfxyYb5yyFOdRxGHVlPPTj6JTKFbrJGVpUOurcqwK1dFqbWu6GuNFIKUP5wz9GHE%2BHd2XQ19Ys&X-Amz-Signature=8cef0f38df70d834aa8353a0d2e1e6bc8c6af94a2c675cdc516d7f25af1908f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHR5GEJZ%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzoRDoJ4HiAN%2FX6IDrD%2Fg3rF45ELFyRsLFQnPvLAkI5QIhANlvLBSM5g8SCv%2FjKFiOSQ%2Fh1hFxnaM5mJ5KpnAQemskKv8DCHkQABoMNjM3NDIzMTgzODA1IgwGE9CumIM10k6a6dUq3AN%2BdLf79Dx4YCpEg9xVhmuC76qL6VhRhp4gPbVRq6n4jAn1SL0XMp8ppwgOoQYN7lLdOicwf6OefqXPxx3tUGJuSySCbVcOoNLfLeNki%2FkYu4Q6Wa5SQjNAWCX1j%2BTRm8swjUth6mGnx3fTjy5%2Bh9xyLTpia05DAnDGOicflTZorLi1hhDO7RegZrFCPB8UzLCdWu%2BvHWS6G0KhNB5u53bk%2BYwKT83v6beuHpiOPBRpE3Jtps%2FSFc1aCD8PmSD2asoiuH0CDYqharxRT7KPWTDfUz0DaQ3UA6Dvh7kLvbcDr82q4TSxKSdbLTvnHzC0JWEDmHsskGHx79w0Bl38%2BxTmM%2FWUZwZJbP1YjO3Tu3oyfG%2FNg69gwk9IWKTiFU2t4RR7aQYsgT5Opg0O%2FgtMWtv3xgdXd4cEePgz6K9KifCq%2BvYp20DSP9tgullhOtGfbeWKT66BFQRVQmVjaiFWHFXwEwigpp9e3Ucl4xgW03X2lYfwpA1uTBZ%2FX0hXRuptRUlAHXZO5AuvvOtyoBE3Hl62DFbdEerSPFq08SyyQipkCXGGL3EV4VZFjPAEIXN1EteORsl4ARj%2B9e69F%2BOVkDkVv6CWNyo%2BbcyGZXHqVCNj80tJYXbcko7BgCRfvzD15sHKBjqkAdCUtMJ6Axk8AG3dqWj218LNx4bCHtYZhZXrU61mOL37x5znJALlayOSxQMm%2Blaic%2F2cjltQBFz%2BlhHKfRPc1t%2F2ikCKDlmnFKe5t0Can%2F%2FHnyzEW76PfrBqTiKdD2O9nYywh5qzTKVHDFhAbXCfxyYb5yyFOdRxGHVlPPTj6JTKFbrJGVpUOurcqwK1dFqbWu6GuNFIKUP5wz9GHE%2BHd2XQ19Ys&X-Amz-Signature=0b7ed1dc124bd5c7c256ffb0f8db6b5c0c202f9f65c54dcd879d390cd730f412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW57LKV4%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV6%2BVWmaa%2F6a2aH7SyEZSQpHgu%2BBPGLzgIoqRSgVnMpwIgJSQR5AAkAHng2TzFbj4wCne8Mnfnr4hBFGcCjFSiApMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDMK4WKa2%2BHS5W%2B9FryrcAyk1ROfSuXRzQ1Okyn07%2B%2FWDRaPA8yvKOwg9PPLq283xmrkHcp50up5TSsgIt6lhAuccrVfxUpPvEOULLQpeWCp95Bms7vRGv%2Fs8dRwj8KMpSSB9xrRQRpuqIGXLkZq8%2Fkco1%2FYLUNhm1mSbXH1raNfRbKf50VN%2BtfVGZfe%2B6fZz9iNY%2BTEWEdI1n4loZrzQ5RtNU01J9%2Btdbe8Kn3EYwF7P8bkuAWrXby8nhaV60Ks8t%2BAi9iOae6GamMenid2Y%2B39F8%2FJFTXymltgdTXXFzwYii7Db1cqGcS%2B7CFVXmqpfXtwmPT6O28rRpViA1luUqzqT0iWZD0Rjgo%2FH0kcnD4tEh59A8P5kNfX4bAskORTwnVlCouUWSdDYsI5UUu8OHzbn3eHlDNTlw6RfBIApmiCbTHyct1qR2BGdMsXC%2BQ8eTvv%2By%2FdS8oq0hyj0X1I09lg%2F2SL4U55KD6C07Q6FYmMuQ5hjkPABZn6oTM13A55%2FxwVP4yBk%2FyXDqTb20z1wcbZ2NDvwGmZhBUU3UkevIeVclw7rkd9T8yQnROQzyJYTqvQguMZ0pA22qCoQV5moDAjoD9Rh%2F6dll7wtQ%2FwjKWQKsHUbK56hoHS9%2FLZDN9DrXt04WuNXRXKohugxMLjmwcoGOqUBT4FlYhoodktDC5kC1U9upBTTz0hzAZlrRAdO2yNXhuCjUimdEYKpxkXThLdBAtQDb11wi2JcfbUbERL9uuo%2BfLa1YAS7v5rYEBrAkkt7qmk18YnTWCQDDT16d4wViCgTEdWm1zQZ4%2BNV7QvjcrwGUA6taHGU8w7CJ3h0ACpGhd7Vj4cmcicwSkRv1Ir%2FlXhuUEeZOKoqBWkWgcLT0QXz83VgZIiK&X-Amz-Signature=1978ed9c559bd0413681da0c9443ab00952a83c998d60302032350fc3d491fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHR5GEJZ%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzoRDoJ4HiAN%2FX6IDrD%2Fg3rF45ELFyRsLFQnPvLAkI5QIhANlvLBSM5g8SCv%2FjKFiOSQ%2Fh1hFxnaM5mJ5KpnAQemskKv8DCHkQABoMNjM3NDIzMTgzODA1IgwGE9CumIM10k6a6dUq3AN%2BdLf79Dx4YCpEg9xVhmuC76qL6VhRhp4gPbVRq6n4jAn1SL0XMp8ppwgOoQYN7lLdOicwf6OefqXPxx3tUGJuSySCbVcOoNLfLeNki%2FkYu4Q6Wa5SQjNAWCX1j%2BTRm8swjUth6mGnx3fTjy5%2Bh9xyLTpia05DAnDGOicflTZorLi1hhDO7RegZrFCPB8UzLCdWu%2BvHWS6G0KhNB5u53bk%2BYwKT83v6beuHpiOPBRpE3Jtps%2FSFc1aCD8PmSD2asoiuH0CDYqharxRT7KPWTDfUz0DaQ3UA6Dvh7kLvbcDr82q4TSxKSdbLTvnHzC0JWEDmHsskGHx79w0Bl38%2BxTmM%2FWUZwZJbP1YjO3Tu3oyfG%2FNg69gwk9IWKTiFU2t4RR7aQYsgT5Opg0O%2FgtMWtv3xgdXd4cEePgz6K9KifCq%2BvYp20DSP9tgullhOtGfbeWKT66BFQRVQmVjaiFWHFXwEwigpp9e3Ucl4xgW03X2lYfwpA1uTBZ%2FX0hXRuptRUlAHXZO5AuvvOtyoBE3Hl62DFbdEerSPFq08SyyQipkCXGGL3EV4VZFjPAEIXN1EteORsl4ARj%2B9e69F%2BOVkDkVv6CWNyo%2BbcyGZXHqVCNj80tJYXbcko7BgCRfvzD15sHKBjqkAdCUtMJ6Axk8AG3dqWj218LNx4bCHtYZhZXrU61mOL37x5znJALlayOSxQMm%2Blaic%2F2cjltQBFz%2BlhHKfRPc1t%2F2ikCKDlmnFKe5t0Can%2F%2FHnyzEW76PfrBqTiKdD2O9nYywh5qzTKVHDFhAbXCfxyYb5yyFOdRxGHVlPPTj6JTKFbrJGVpUOurcqwK1dFqbWu6GuNFIKUP5wz9GHE%2BHd2XQ19Ys&X-Amz-Signature=28a5fb06967cf1ed8a3027887dd31a04729def9ebe5aa1afd8f01e62b7d36460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHR5GEJZ%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzoRDoJ4HiAN%2FX6IDrD%2Fg3rF45ELFyRsLFQnPvLAkI5QIhANlvLBSM5g8SCv%2FjKFiOSQ%2Fh1hFxnaM5mJ5KpnAQemskKv8DCHkQABoMNjM3NDIzMTgzODA1IgwGE9CumIM10k6a6dUq3AN%2BdLf79Dx4YCpEg9xVhmuC76qL6VhRhp4gPbVRq6n4jAn1SL0XMp8ppwgOoQYN7lLdOicwf6OefqXPxx3tUGJuSySCbVcOoNLfLeNki%2FkYu4Q6Wa5SQjNAWCX1j%2BTRm8swjUth6mGnx3fTjy5%2Bh9xyLTpia05DAnDGOicflTZorLi1hhDO7RegZrFCPB8UzLCdWu%2BvHWS6G0KhNB5u53bk%2BYwKT83v6beuHpiOPBRpE3Jtps%2FSFc1aCD8PmSD2asoiuH0CDYqharxRT7KPWTDfUz0DaQ3UA6Dvh7kLvbcDr82q4TSxKSdbLTvnHzC0JWEDmHsskGHx79w0Bl38%2BxTmM%2FWUZwZJbP1YjO3Tu3oyfG%2FNg69gwk9IWKTiFU2t4RR7aQYsgT5Opg0O%2FgtMWtv3xgdXd4cEePgz6K9KifCq%2BvYp20DSP9tgullhOtGfbeWKT66BFQRVQmVjaiFWHFXwEwigpp9e3Ucl4xgW03X2lYfwpA1uTBZ%2FX0hXRuptRUlAHXZO5AuvvOtyoBE3Hl62DFbdEerSPFq08SyyQipkCXGGL3EV4VZFjPAEIXN1EteORsl4ARj%2B9e69F%2BOVkDkVv6CWNyo%2BbcyGZXHqVCNj80tJYXbcko7BgCRfvzD15sHKBjqkAdCUtMJ6Axk8AG3dqWj218LNx4bCHtYZhZXrU61mOL37x5znJALlayOSxQMm%2Blaic%2F2cjltQBFz%2BlhHKfRPc1t%2F2ikCKDlmnFKe5t0Can%2F%2FHnyzEW76PfrBqTiKdD2O9nYywh5qzTKVHDFhAbXCfxyYb5yyFOdRxGHVlPPTj6JTKFbrJGVpUOurcqwK1dFqbWu6GuNFIKUP5wz9GHE%2BHd2XQ19Ys&X-Amz-Signature=c6874cd310e8342658283999be0ce21c8c8f6eec22a812d67547965e3668da56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHR5GEJZ%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzoRDoJ4HiAN%2FX6IDrD%2Fg3rF45ELFyRsLFQnPvLAkI5QIhANlvLBSM5g8SCv%2FjKFiOSQ%2Fh1hFxnaM5mJ5KpnAQemskKv8DCHkQABoMNjM3NDIzMTgzODA1IgwGE9CumIM10k6a6dUq3AN%2BdLf79Dx4YCpEg9xVhmuC76qL6VhRhp4gPbVRq6n4jAn1SL0XMp8ppwgOoQYN7lLdOicwf6OefqXPxx3tUGJuSySCbVcOoNLfLeNki%2FkYu4Q6Wa5SQjNAWCX1j%2BTRm8swjUth6mGnx3fTjy5%2Bh9xyLTpia05DAnDGOicflTZorLi1hhDO7RegZrFCPB8UzLCdWu%2BvHWS6G0KhNB5u53bk%2BYwKT83v6beuHpiOPBRpE3Jtps%2FSFc1aCD8PmSD2asoiuH0CDYqharxRT7KPWTDfUz0DaQ3UA6Dvh7kLvbcDr82q4TSxKSdbLTvnHzC0JWEDmHsskGHx79w0Bl38%2BxTmM%2FWUZwZJbP1YjO3Tu3oyfG%2FNg69gwk9IWKTiFU2t4RR7aQYsgT5Opg0O%2FgtMWtv3xgdXd4cEePgz6K9KifCq%2BvYp20DSP9tgullhOtGfbeWKT66BFQRVQmVjaiFWHFXwEwigpp9e3Ucl4xgW03X2lYfwpA1uTBZ%2FX0hXRuptRUlAHXZO5AuvvOtyoBE3Hl62DFbdEerSPFq08SyyQipkCXGGL3EV4VZFjPAEIXN1EteORsl4ARj%2B9e69F%2BOVkDkVv6CWNyo%2BbcyGZXHqVCNj80tJYXbcko7BgCRfvzD15sHKBjqkAdCUtMJ6Axk8AG3dqWj218LNx4bCHtYZhZXrU61mOL37x5znJALlayOSxQMm%2Blaic%2F2cjltQBFz%2BlhHKfRPc1t%2F2ikCKDlmnFKe5t0Can%2F%2FHnyzEW76PfrBqTiKdD2O9nYywh5qzTKVHDFhAbXCfxyYb5yyFOdRxGHVlPPTj6JTKFbrJGVpUOurcqwK1dFqbWu6GuNFIKUP5wz9GHE%2BHd2XQ19Ys&X-Amz-Signature=8cef0f38df70d834aa8353a0d2e1e6bc8c6af94a2c675cdc516d7f25af1908f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHR5GEJZ%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzoRDoJ4HiAN%2FX6IDrD%2Fg3rF45ELFyRsLFQnPvLAkI5QIhANlvLBSM5g8SCv%2FjKFiOSQ%2Fh1hFxnaM5mJ5KpnAQemskKv8DCHkQABoMNjM3NDIzMTgzODA1IgwGE9CumIM10k6a6dUq3AN%2BdLf79Dx4YCpEg9xVhmuC76qL6VhRhp4gPbVRq6n4jAn1SL0XMp8ppwgOoQYN7lLdOicwf6OefqXPxx3tUGJuSySCbVcOoNLfLeNki%2FkYu4Q6Wa5SQjNAWCX1j%2BTRm8swjUth6mGnx3fTjy5%2Bh9xyLTpia05DAnDGOicflTZorLi1hhDO7RegZrFCPB8UzLCdWu%2BvHWS6G0KhNB5u53bk%2BYwKT83v6beuHpiOPBRpE3Jtps%2FSFc1aCD8PmSD2asoiuH0CDYqharxRT7KPWTDfUz0DaQ3UA6Dvh7kLvbcDr82q4TSxKSdbLTvnHzC0JWEDmHsskGHx79w0Bl38%2BxTmM%2FWUZwZJbP1YjO3Tu3oyfG%2FNg69gwk9IWKTiFU2t4RR7aQYsgT5Opg0O%2FgtMWtv3xgdXd4cEePgz6K9KifCq%2BvYp20DSP9tgullhOtGfbeWKT66BFQRVQmVjaiFWHFXwEwigpp9e3Ucl4xgW03X2lYfwpA1uTBZ%2FX0hXRuptRUlAHXZO5AuvvOtyoBE3Hl62DFbdEerSPFq08SyyQipkCXGGL3EV4VZFjPAEIXN1EteORsl4ARj%2B9e69F%2BOVkDkVv6CWNyo%2BbcyGZXHqVCNj80tJYXbcko7BgCRfvzD15sHKBjqkAdCUtMJ6Axk8AG3dqWj218LNx4bCHtYZhZXrU61mOL37x5znJALlayOSxQMm%2Blaic%2F2cjltQBFz%2BlhHKfRPc1t%2F2ikCKDlmnFKe5t0Can%2F%2FHnyzEW76PfrBqTiKdD2O9nYywh5qzTKVHDFhAbXCfxyYb5yyFOdRxGHVlPPTj6JTKFbrJGVpUOurcqwK1dFqbWu6GuNFIKUP5wz9GHE%2BHd2XQ19Ys&X-Amz-Signature=17234ca86c90ffecdf5f34f258b99c8dcfb2c2c3880ada109a1ae713a807031c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHR5GEJZ%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzoRDoJ4HiAN%2FX6IDrD%2Fg3rF45ELFyRsLFQnPvLAkI5QIhANlvLBSM5g8SCv%2FjKFiOSQ%2Fh1hFxnaM5mJ5KpnAQemskKv8DCHkQABoMNjM3NDIzMTgzODA1IgwGE9CumIM10k6a6dUq3AN%2BdLf79Dx4YCpEg9xVhmuC76qL6VhRhp4gPbVRq6n4jAn1SL0XMp8ppwgOoQYN7lLdOicwf6OefqXPxx3tUGJuSySCbVcOoNLfLeNki%2FkYu4Q6Wa5SQjNAWCX1j%2BTRm8swjUth6mGnx3fTjy5%2Bh9xyLTpia05DAnDGOicflTZorLi1hhDO7RegZrFCPB8UzLCdWu%2BvHWS6G0KhNB5u53bk%2BYwKT83v6beuHpiOPBRpE3Jtps%2FSFc1aCD8PmSD2asoiuH0CDYqharxRT7KPWTDfUz0DaQ3UA6Dvh7kLvbcDr82q4TSxKSdbLTvnHzC0JWEDmHsskGHx79w0Bl38%2BxTmM%2FWUZwZJbP1YjO3Tu3oyfG%2FNg69gwk9IWKTiFU2t4RR7aQYsgT5Opg0O%2FgtMWtv3xgdXd4cEePgz6K9KifCq%2BvYp20DSP9tgullhOtGfbeWKT66BFQRVQmVjaiFWHFXwEwigpp9e3Ucl4xgW03X2lYfwpA1uTBZ%2FX0hXRuptRUlAHXZO5AuvvOtyoBE3Hl62DFbdEerSPFq08SyyQipkCXGGL3EV4VZFjPAEIXN1EteORsl4ARj%2B9e69F%2BOVkDkVv6CWNyo%2BbcyGZXHqVCNj80tJYXbcko7BgCRfvzD15sHKBjqkAdCUtMJ6Axk8AG3dqWj218LNx4bCHtYZhZXrU61mOL37x5znJALlayOSxQMm%2Blaic%2F2cjltQBFz%2BlhHKfRPc1t%2F2ikCKDlmnFKe5t0Can%2F%2FHnyzEW76PfrBqTiKdD2O9nYywh5qzTKVHDFhAbXCfxyYb5yyFOdRxGHVlPPTj6JTKFbrJGVpUOurcqwK1dFqbWu6GuNFIKUP5wz9GHE%2BHd2XQ19Ys&X-Amz-Signature=ffc391389c75d3504d7a0b25441b19331e3fb4f1d28eb18c791468312f5bfdcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHR5GEJZ%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzoRDoJ4HiAN%2FX6IDrD%2Fg3rF45ELFyRsLFQnPvLAkI5QIhANlvLBSM5g8SCv%2FjKFiOSQ%2Fh1hFxnaM5mJ5KpnAQemskKv8DCHkQABoMNjM3NDIzMTgzODA1IgwGE9CumIM10k6a6dUq3AN%2BdLf79Dx4YCpEg9xVhmuC76qL6VhRhp4gPbVRq6n4jAn1SL0XMp8ppwgOoQYN7lLdOicwf6OefqXPxx3tUGJuSySCbVcOoNLfLeNki%2FkYu4Q6Wa5SQjNAWCX1j%2BTRm8swjUth6mGnx3fTjy5%2Bh9xyLTpia05DAnDGOicflTZorLi1hhDO7RegZrFCPB8UzLCdWu%2BvHWS6G0KhNB5u53bk%2BYwKT83v6beuHpiOPBRpE3Jtps%2FSFc1aCD8PmSD2asoiuH0CDYqharxRT7KPWTDfUz0DaQ3UA6Dvh7kLvbcDr82q4TSxKSdbLTvnHzC0JWEDmHsskGHx79w0Bl38%2BxTmM%2FWUZwZJbP1YjO3Tu3oyfG%2FNg69gwk9IWKTiFU2t4RR7aQYsgT5Opg0O%2FgtMWtv3xgdXd4cEePgz6K9KifCq%2BvYp20DSP9tgullhOtGfbeWKT66BFQRVQmVjaiFWHFXwEwigpp9e3Ucl4xgW03X2lYfwpA1uTBZ%2FX0hXRuptRUlAHXZO5AuvvOtyoBE3Hl62DFbdEerSPFq08SyyQipkCXGGL3EV4VZFjPAEIXN1EteORsl4ARj%2B9e69F%2BOVkDkVv6CWNyo%2BbcyGZXHqVCNj80tJYXbcko7BgCRfvzD15sHKBjqkAdCUtMJ6Axk8AG3dqWj218LNx4bCHtYZhZXrU61mOL37x5znJALlayOSxQMm%2Blaic%2F2cjltQBFz%2BlhHKfRPc1t%2F2ikCKDlmnFKe5t0Can%2F%2FHnyzEW76PfrBqTiKdD2O9nYywh5qzTKVHDFhAbXCfxyYb5yyFOdRxGHVlPPTj6JTKFbrJGVpUOurcqwK1dFqbWu6GuNFIKUP5wz9GHE%2BHd2XQ19Ys&X-Amz-Signature=c93192d13696ad06bd1d752be6ff73ecd40aad21ee390ec1922c433ec3157816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


