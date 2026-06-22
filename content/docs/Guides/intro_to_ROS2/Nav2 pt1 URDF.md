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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRY7L6X%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC%2FafdrZwLGQ3k6OMh%2FeZLeZ7yyIWPiIr4H2YuyY99j6wIgNZE9Q5gQrOh5YfaD28yWurxP1qIYYY60xoqEJziB4vIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuiAg4T4JXDC%2Fd3MircA4wmga0N2zJmIrZO7JEi8Lx7b8%2F7vngmqMEXwSXjkB1GpQR3j2qk4FmEGLxvPNMJecPrAFIfXyDJMfMLZlnIcR8QmfSqmbU5idvZkZyDJZi9C64zuEjeKesbOZa6RosT8gboR37oyYlqhS83fk%2BHrk8QLYWU3D5FHMCEK8%2FLb%2B5uk65yARXx%2Fe55UOp01pk%2FgVYiYoOV60r6o4Fupkurs%2BygKhkH20V1bFH4%2Fr6uHEU3l1lEsQiyIQARGcQjzhGKPDBN0s65VFUIy7ZUJn9KLJdCYlVMFC695ZwbqUHs5zIjLVVcTwK4%2FjFmeWjeAcz9o0s6Ojm%2BvCxSMg%2BNHB2IxlV87QCNyiJ1NEQlkoF2hOzmjQWlMerCRJ1ffxk8PsegrbKaTslp2AGmn8zpOWh0LjtwzMSssKhKPhXt%2ByeWYXiLe2peuKkc4On4pDTI2ilEbK8oaLCdESooMzNNw5xJV42J7nl%2FtbXSgifEJGtP08be8d6kn%2BoYDqu5XekhVWM%2Fr6ErQceN1KkL9zXJ7LZ9ObY54AzUDIIRDMOyrV2MTU65CqAVIMlwCuPRMfMbeCEi9EEO46EEJ8xsP%2BwutrnLRS98HxuVH%2BkvZ8p3WUwZQM2D%2BNf8%2BDlzNB9BEr4WMLnX4tEGOqUBhl4%2FTu7Ttk6%2BQy40t1%2Fo795qzbxrEa%2Bh9%2BuaHSLnVOAp3mw6owqY6ftqco8Qvy73MacYQZZseTEhmh9cDPuNeI%2FBJXMQ5dJ6T3kN4DTc82YaRMghAPM9ChVMRHFE60iEbiOnrx%2FI56mIEG1%2FqUCwg5mSTilA%2FugoLDpii3gkuJ3NtxjS75NnYFp2m2GKq%2Bm2pvZgQ2A%2BZAWBN3U97bHjWSM%2Bfld6&X-Amz-Signature=ab5cc811251a7966207278a7955daeb4c6adae28929cc832fe1285772c20da9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRY7L6X%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC%2FafdrZwLGQ3k6OMh%2FeZLeZ7yyIWPiIr4H2YuyY99j6wIgNZE9Q5gQrOh5YfaD28yWurxP1qIYYY60xoqEJziB4vIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuiAg4T4JXDC%2Fd3MircA4wmga0N2zJmIrZO7JEi8Lx7b8%2F7vngmqMEXwSXjkB1GpQR3j2qk4FmEGLxvPNMJecPrAFIfXyDJMfMLZlnIcR8QmfSqmbU5idvZkZyDJZi9C64zuEjeKesbOZa6RosT8gboR37oyYlqhS83fk%2BHrk8QLYWU3D5FHMCEK8%2FLb%2B5uk65yARXx%2Fe55UOp01pk%2FgVYiYoOV60r6o4Fupkurs%2BygKhkH20V1bFH4%2Fr6uHEU3l1lEsQiyIQARGcQjzhGKPDBN0s65VFUIy7ZUJn9KLJdCYlVMFC695ZwbqUHs5zIjLVVcTwK4%2FjFmeWjeAcz9o0s6Ojm%2BvCxSMg%2BNHB2IxlV87QCNyiJ1NEQlkoF2hOzmjQWlMerCRJ1ffxk8PsegrbKaTslp2AGmn8zpOWh0LjtwzMSssKhKPhXt%2ByeWYXiLe2peuKkc4On4pDTI2ilEbK8oaLCdESooMzNNw5xJV42J7nl%2FtbXSgifEJGtP08be8d6kn%2BoYDqu5XekhVWM%2Fr6ErQceN1KkL9zXJ7LZ9ObY54AzUDIIRDMOyrV2MTU65CqAVIMlwCuPRMfMbeCEi9EEO46EEJ8xsP%2BwutrnLRS98HxuVH%2BkvZ8p3WUwZQM2D%2BNf8%2BDlzNB9BEr4WMLnX4tEGOqUBhl4%2FTu7Ttk6%2BQy40t1%2Fo795qzbxrEa%2Bh9%2BuaHSLnVOAp3mw6owqY6ftqco8Qvy73MacYQZZseTEhmh9cDPuNeI%2FBJXMQ5dJ6T3kN4DTc82YaRMghAPM9ChVMRHFE60iEbiOnrx%2FI56mIEG1%2FqUCwg5mSTilA%2FugoLDpii3gkuJ3NtxjS75NnYFp2m2GKq%2Bm2pvZgQ2A%2BZAWBN3U97bHjWSM%2Bfld6&X-Amz-Signature=b26558e09ed3c84e34a23fc1f4f67647eda2ebefbc3054b34fc627cf0d7053f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRY7L6X%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC%2FafdrZwLGQ3k6OMh%2FeZLeZ7yyIWPiIr4H2YuyY99j6wIgNZE9Q5gQrOh5YfaD28yWurxP1qIYYY60xoqEJziB4vIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuiAg4T4JXDC%2Fd3MircA4wmga0N2zJmIrZO7JEi8Lx7b8%2F7vngmqMEXwSXjkB1GpQR3j2qk4FmEGLxvPNMJecPrAFIfXyDJMfMLZlnIcR8QmfSqmbU5idvZkZyDJZi9C64zuEjeKesbOZa6RosT8gboR37oyYlqhS83fk%2BHrk8QLYWU3D5FHMCEK8%2FLb%2B5uk65yARXx%2Fe55UOp01pk%2FgVYiYoOV60r6o4Fupkurs%2BygKhkH20V1bFH4%2Fr6uHEU3l1lEsQiyIQARGcQjzhGKPDBN0s65VFUIy7ZUJn9KLJdCYlVMFC695ZwbqUHs5zIjLVVcTwK4%2FjFmeWjeAcz9o0s6Ojm%2BvCxSMg%2BNHB2IxlV87QCNyiJ1NEQlkoF2hOzmjQWlMerCRJ1ffxk8PsegrbKaTslp2AGmn8zpOWh0LjtwzMSssKhKPhXt%2ByeWYXiLe2peuKkc4On4pDTI2ilEbK8oaLCdESooMzNNw5xJV42J7nl%2FtbXSgifEJGtP08be8d6kn%2BoYDqu5XekhVWM%2Fr6ErQceN1KkL9zXJ7LZ9ObY54AzUDIIRDMOyrV2MTU65CqAVIMlwCuPRMfMbeCEi9EEO46EEJ8xsP%2BwutrnLRS98HxuVH%2BkvZ8p3WUwZQM2D%2BNf8%2BDlzNB9BEr4WMLnX4tEGOqUBhl4%2FTu7Ttk6%2BQy40t1%2Fo795qzbxrEa%2Bh9%2BuaHSLnVOAp3mw6owqY6ftqco8Qvy73MacYQZZseTEhmh9cDPuNeI%2FBJXMQ5dJ6T3kN4DTc82YaRMghAPM9ChVMRHFE60iEbiOnrx%2FI56mIEG1%2FqUCwg5mSTilA%2FugoLDpii3gkuJ3NtxjS75NnYFp2m2GKq%2Bm2pvZgQ2A%2BZAWBN3U97bHjWSM%2Bfld6&X-Amz-Signature=6dd5f5a32464785c85c89af85468aa5b7121c460d4e4fab30bf6baf32500e983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRY7L6X%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC%2FafdrZwLGQ3k6OMh%2FeZLeZ7yyIWPiIr4H2YuyY99j6wIgNZE9Q5gQrOh5YfaD28yWurxP1qIYYY60xoqEJziB4vIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuiAg4T4JXDC%2Fd3MircA4wmga0N2zJmIrZO7JEi8Lx7b8%2F7vngmqMEXwSXjkB1GpQR3j2qk4FmEGLxvPNMJecPrAFIfXyDJMfMLZlnIcR8QmfSqmbU5idvZkZyDJZi9C64zuEjeKesbOZa6RosT8gboR37oyYlqhS83fk%2BHrk8QLYWU3D5FHMCEK8%2FLb%2B5uk65yARXx%2Fe55UOp01pk%2FgVYiYoOV60r6o4Fupkurs%2BygKhkH20V1bFH4%2Fr6uHEU3l1lEsQiyIQARGcQjzhGKPDBN0s65VFUIy7ZUJn9KLJdCYlVMFC695ZwbqUHs5zIjLVVcTwK4%2FjFmeWjeAcz9o0s6Ojm%2BvCxSMg%2BNHB2IxlV87QCNyiJ1NEQlkoF2hOzmjQWlMerCRJ1ffxk8PsegrbKaTslp2AGmn8zpOWh0LjtwzMSssKhKPhXt%2ByeWYXiLe2peuKkc4On4pDTI2ilEbK8oaLCdESooMzNNw5xJV42J7nl%2FtbXSgifEJGtP08be8d6kn%2BoYDqu5XekhVWM%2Fr6ErQceN1KkL9zXJ7LZ9ObY54AzUDIIRDMOyrV2MTU65CqAVIMlwCuPRMfMbeCEi9EEO46EEJ8xsP%2BwutrnLRS98HxuVH%2BkvZ8p3WUwZQM2D%2BNf8%2BDlzNB9BEr4WMLnX4tEGOqUBhl4%2FTu7Ttk6%2BQy40t1%2Fo795qzbxrEa%2Bh9%2BuaHSLnVOAp3mw6owqY6ftqco8Qvy73MacYQZZseTEhmh9cDPuNeI%2FBJXMQ5dJ6T3kN4DTc82YaRMghAPM9ChVMRHFE60iEbiOnrx%2FI56mIEG1%2FqUCwg5mSTilA%2FugoLDpii3gkuJ3NtxjS75NnYFp2m2GKq%2Bm2pvZgQ2A%2BZAWBN3U97bHjWSM%2Bfld6&X-Amz-Signature=9d64e181e3bdbf22c0fe3723d44f87c7d903edd3957eb414da45128f87d30148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRY7L6X%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC%2FafdrZwLGQ3k6OMh%2FeZLeZ7yyIWPiIr4H2YuyY99j6wIgNZE9Q5gQrOh5YfaD28yWurxP1qIYYY60xoqEJziB4vIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuiAg4T4JXDC%2Fd3MircA4wmga0N2zJmIrZO7JEi8Lx7b8%2F7vngmqMEXwSXjkB1GpQR3j2qk4FmEGLxvPNMJecPrAFIfXyDJMfMLZlnIcR8QmfSqmbU5idvZkZyDJZi9C64zuEjeKesbOZa6RosT8gboR37oyYlqhS83fk%2BHrk8QLYWU3D5FHMCEK8%2FLb%2B5uk65yARXx%2Fe55UOp01pk%2FgVYiYoOV60r6o4Fupkurs%2BygKhkH20V1bFH4%2Fr6uHEU3l1lEsQiyIQARGcQjzhGKPDBN0s65VFUIy7ZUJn9KLJdCYlVMFC695ZwbqUHs5zIjLVVcTwK4%2FjFmeWjeAcz9o0s6Ojm%2BvCxSMg%2BNHB2IxlV87QCNyiJ1NEQlkoF2hOzmjQWlMerCRJ1ffxk8PsegrbKaTslp2AGmn8zpOWh0LjtwzMSssKhKPhXt%2ByeWYXiLe2peuKkc4On4pDTI2ilEbK8oaLCdESooMzNNw5xJV42J7nl%2FtbXSgifEJGtP08be8d6kn%2BoYDqu5XekhVWM%2Fr6ErQceN1KkL9zXJ7LZ9ObY54AzUDIIRDMOyrV2MTU65CqAVIMlwCuPRMfMbeCEi9EEO46EEJ8xsP%2BwutrnLRS98HxuVH%2BkvZ8p3WUwZQM2D%2BNf8%2BDlzNB9BEr4WMLnX4tEGOqUBhl4%2FTu7Ttk6%2BQy40t1%2Fo795qzbxrEa%2Bh9%2BuaHSLnVOAp3mw6owqY6ftqco8Qvy73MacYQZZseTEhmh9cDPuNeI%2FBJXMQ5dJ6T3kN4DTc82YaRMghAPM9ChVMRHFE60iEbiOnrx%2FI56mIEG1%2FqUCwg5mSTilA%2FugoLDpii3gkuJ3NtxjS75NnYFp2m2GKq%2Bm2pvZgQ2A%2BZAWBN3U97bHjWSM%2Bfld6&X-Amz-Signature=61c03ae96f71ed21c750a32876ecbc07048d16ce541a2a967933932b488ba14c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRY7L6X%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC%2FafdrZwLGQ3k6OMh%2FeZLeZ7yyIWPiIr4H2YuyY99j6wIgNZE9Q5gQrOh5YfaD28yWurxP1qIYYY60xoqEJziB4vIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuiAg4T4JXDC%2Fd3MircA4wmga0N2zJmIrZO7JEi8Lx7b8%2F7vngmqMEXwSXjkB1GpQR3j2qk4FmEGLxvPNMJecPrAFIfXyDJMfMLZlnIcR8QmfSqmbU5idvZkZyDJZi9C64zuEjeKesbOZa6RosT8gboR37oyYlqhS83fk%2BHrk8QLYWU3D5FHMCEK8%2FLb%2B5uk65yARXx%2Fe55UOp01pk%2FgVYiYoOV60r6o4Fupkurs%2BygKhkH20V1bFH4%2Fr6uHEU3l1lEsQiyIQARGcQjzhGKPDBN0s65VFUIy7ZUJn9KLJdCYlVMFC695ZwbqUHs5zIjLVVcTwK4%2FjFmeWjeAcz9o0s6Ojm%2BvCxSMg%2BNHB2IxlV87QCNyiJ1NEQlkoF2hOzmjQWlMerCRJ1ffxk8PsegrbKaTslp2AGmn8zpOWh0LjtwzMSssKhKPhXt%2ByeWYXiLe2peuKkc4On4pDTI2ilEbK8oaLCdESooMzNNw5xJV42J7nl%2FtbXSgifEJGtP08be8d6kn%2BoYDqu5XekhVWM%2Fr6ErQceN1KkL9zXJ7LZ9ObY54AzUDIIRDMOyrV2MTU65CqAVIMlwCuPRMfMbeCEi9EEO46EEJ8xsP%2BwutrnLRS98HxuVH%2BkvZ8p3WUwZQM2D%2BNf8%2BDlzNB9BEr4WMLnX4tEGOqUBhl4%2FTu7Ttk6%2BQy40t1%2Fo795qzbxrEa%2Bh9%2BuaHSLnVOAp3mw6owqY6ftqco8Qvy73MacYQZZseTEhmh9cDPuNeI%2FBJXMQ5dJ6T3kN4DTc82YaRMghAPM9ChVMRHFE60iEbiOnrx%2FI56mIEG1%2FqUCwg5mSTilA%2FugoLDpii3gkuJ3NtxjS75NnYFp2m2GKq%2Bm2pvZgQ2A%2BZAWBN3U97bHjWSM%2Bfld6&X-Amz-Signature=5e00fa77d5a749c65cb9165ce61e533e990fe99508e6b74124eae574d33dbead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRY7L6X%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC%2FafdrZwLGQ3k6OMh%2FeZLeZ7yyIWPiIr4H2YuyY99j6wIgNZE9Q5gQrOh5YfaD28yWurxP1qIYYY60xoqEJziB4vIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuiAg4T4JXDC%2Fd3MircA4wmga0N2zJmIrZO7JEi8Lx7b8%2F7vngmqMEXwSXjkB1GpQR3j2qk4FmEGLxvPNMJecPrAFIfXyDJMfMLZlnIcR8QmfSqmbU5idvZkZyDJZi9C64zuEjeKesbOZa6RosT8gboR37oyYlqhS83fk%2BHrk8QLYWU3D5FHMCEK8%2FLb%2B5uk65yARXx%2Fe55UOp01pk%2FgVYiYoOV60r6o4Fupkurs%2BygKhkH20V1bFH4%2Fr6uHEU3l1lEsQiyIQARGcQjzhGKPDBN0s65VFUIy7ZUJn9KLJdCYlVMFC695ZwbqUHs5zIjLVVcTwK4%2FjFmeWjeAcz9o0s6Ojm%2BvCxSMg%2BNHB2IxlV87QCNyiJ1NEQlkoF2hOzmjQWlMerCRJ1ffxk8PsegrbKaTslp2AGmn8zpOWh0LjtwzMSssKhKPhXt%2ByeWYXiLe2peuKkc4On4pDTI2ilEbK8oaLCdESooMzNNw5xJV42J7nl%2FtbXSgifEJGtP08be8d6kn%2BoYDqu5XekhVWM%2Fr6ErQceN1KkL9zXJ7LZ9ObY54AzUDIIRDMOyrV2MTU65CqAVIMlwCuPRMfMbeCEi9EEO46EEJ8xsP%2BwutrnLRS98HxuVH%2BkvZ8p3WUwZQM2D%2BNf8%2BDlzNB9BEr4WMLnX4tEGOqUBhl4%2FTu7Ttk6%2BQy40t1%2Fo795qzbxrEa%2Bh9%2BuaHSLnVOAp3mw6owqY6ftqco8Qvy73MacYQZZseTEhmh9cDPuNeI%2FBJXMQ5dJ6T3kN4DTc82YaRMghAPM9ChVMRHFE60iEbiOnrx%2FI56mIEG1%2FqUCwg5mSTilA%2FugoLDpii3gkuJ3NtxjS75NnYFp2m2GKq%2Bm2pvZgQ2A%2BZAWBN3U97bHjWSM%2Bfld6&X-Amz-Signature=39e49fe74b821f07d4160e4c6de477573a313a00c25f77b86e50066c7864e34d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRY7L6X%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC%2FafdrZwLGQ3k6OMh%2FeZLeZ7yyIWPiIr4H2YuyY99j6wIgNZE9Q5gQrOh5YfaD28yWurxP1qIYYY60xoqEJziB4vIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuiAg4T4JXDC%2Fd3MircA4wmga0N2zJmIrZO7JEi8Lx7b8%2F7vngmqMEXwSXjkB1GpQR3j2qk4FmEGLxvPNMJecPrAFIfXyDJMfMLZlnIcR8QmfSqmbU5idvZkZyDJZi9C64zuEjeKesbOZa6RosT8gboR37oyYlqhS83fk%2BHrk8QLYWU3D5FHMCEK8%2FLb%2B5uk65yARXx%2Fe55UOp01pk%2FgVYiYoOV60r6o4Fupkurs%2BygKhkH20V1bFH4%2Fr6uHEU3l1lEsQiyIQARGcQjzhGKPDBN0s65VFUIy7ZUJn9KLJdCYlVMFC695ZwbqUHs5zIjLVVcTwK4%2FjFmeWjeAcz9o0s6Ojm%2BvCxSMg%2BNHB2IxlV87QCNyiJ1NEQlkoF2hOzmjQWlMerCRJ1ffxk8PsegrbKaTslp2AGmn8zpOWh0LjtwzMSssKhKPhXt%2ByeWYXiLe2peuKkc4On4pDTI2ilEbK8oaLCdESooMzNNw5xJV42J7nl%2FtbXSgifEJGtP08be8d6kn%2BoYDqu5XekhVWM%2Fr6ErQceN1KkL9zXJ7LZ9ObY54AzUDIIRDMOyrV2MTU65CqAVIMlwCuPRMfMbeCEi9EEO46EEJ8xsP%2BwutrnLRS98HxuVH%2BkvZ8p3WUwZQM2D%2BNf8%2BDlzNB9BEr4WMLnX4tEGOqUBhl4%2FTu7Ttk6%2BQy40t1%2Fo795qzbxrEa%2Bh9%2BuaHSLnVOAp3mw6owqY6ftqco8Qvy73MacYQZZseTEhmh9cDPuNeI%2FBJXMQ5dJ6T3kN4DTc82YaRMghAPM9ChVMRHFE60iEbiOnrx%2FI56mIEG1%2FqUCwg5mSTilA%2FugoLDpii3gkuJ3NtxjS75NnYFp2m2GKq%2Bm2pvZgQ2A%2BZAWBN3U97bHjWSM%2Bfld6&X-Amz-Signature=887bbace3a3de4f5cf9eab0f54a329d79ebd5328417c5363c2b32fc313076bcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRY7L6X%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC%2FafdrZwLGQ3k6OMh%2FeZLeZ7yyIWPiIr4H2YuyY99j6wIgNZE9Q5gQrOh5YfaD28yWurxP1qIYYY60xoqEJziB4vIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuiAg4T4JXDC%2Fd3MircA4wmga0N2zJmIrZO7JEi8Lx7b8%2F7vngmqMEXwSXjkB1GpQR3j2qk4FmEGLxvPNMJecPrAFIfXyDJMfMLZlnIcR8QmfSqmbU5idvZkZyDJZi9C64zuEjeKesbOZa6RosT8gboR37oyYlqhS83fk%2BHrk8QLYWU3D5FHMCEK8%2FLb%2B5uk65yARXx%2Fe55UOp01pk%2FgVYiYoOV60r6o4Fupkurs%2BygKhkH20V1bFH4%2Fr6uHEU3l1lEsQiyIQARGcQjzhGKPDBN0s65VFUIy7ZUJn9KLJdCYlVMFC695ZwbqUHs5zIjLVVcTwK4%2FjFmeWjeAcz9o0s6Ojm%2BvCxSMg%2BNHB2IxlV87QCNyiJ1NEQlkoF2hOzmjQWlMerCRJ1ffxk8PsegrbKaTslp2AGmn8zpOWh0LjtwzMSssKhKPhXt%2ByeWYXiLe2peuKkc4On4pDTI2ilEbK8oaLCdESooMzNNw5xJV42J7nl%2FtbXSgifEJGtP08be8d6kn%2BoYDqu5XekhVWM%2Fr6ErQceN1KkL9zXJ7LZ9ObY54AzUDIIRDMOyrV2MTU65CqAVIMlwCuPRMfMbeCEi9EEO46EEJ8xsP%2BwutrnLRS98HxuVH%2BkvZ8p3WUwZQM2D%2BNf8%2BDlzNB9BEr4WMLnX4tEGOqUBhl4%2FTu7Ttk6%2BQy40t1%2Fo795qzbxrEa%2Bh9%2BuaHSLnVOAp3mw6owqY6ftqco8Qvy73MacYQZZseTEhmh9cDPuNeI%2FBJXMQ5dJ6T3kN4DTc82YaRMghAPM9ChVMRHFE60iEbiOnrx%2FI56mIEG1%2FqUCwg5mSTilA%2FugoLDpii3gkuJ3NtxjS75NnYFp2m2GKq%2Bm2pvZgQ2A%2BZAWBN3U97bHjWSM%2Bfld6&X-Amz-Signature=d3550340c593a86a4c6f77367364b82eb8647367d1a844b0237eeaf8a78fafa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRY7L6X%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC%2FafdrZwLGQ3k6OMh%2FeZLeZ7yyIWPiIr4H2YuyY99j6wIgNZE9Q5gQrOh5YfaD28yWurxP1qIYYY60xoqEJziB4vIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuiAg4T4JXDC%2Fd3MircA4wmga0N2zJmIrZO7JEi8Lx7b8%2F7vngmqMEXwSXjkB1GpQR3j2qk4FmEGLxvPNMJecPrAFIfXyDJMfMLZlnIcR8QmfSqmbU5idvZkZyDJZi9C64zuEjeKesbOZa6RosT8gboR37oyYlqhS83fk%2BHrk8QLYWU3D5FHMCEK8%2FLb%2B5uk65yARXx%2Fe55UOp01pk%2FgVYiYoOV60r6o4Fupkurs%2BygKhkH20V1bFH4%2Fr6uHEU3l1lEsQiyIQARGcQjzhGKPDBN0s65VFUIy7ZUJn9KLJdCYlVMFC695ZwbqUHs5zIjLVVcTwK4%2FjFmeWjeAcz9o0s6Ojm%2BvCxSMg%2BNHB2IxlV87QCNyiJ1NEQlkoF2hOzmjQWlMerCRJ1ffxk8PsegrbKaTslp2AGmn8zpOWh0LjtwzMSssKhKPhXt%2ByeWYXiLe2peuKkc4On4pDTI2ilEbK8oaLCdESooMzNNw5xJV42J7nl%2FtbXSgifEJGtP08be8d6kn%2BoYDqu5XekhVWM%2Fr6ErQceN1KkL9zXJ7LZ9ObY54AzUDIIRDMOyrV2MTU65CqAVIMlwCuPRMfMbeCEi9EEO46EEJ8xsP%2BwutrnLRS98HxuVH%2BkvZ8p3WUwZQM2D%2BNf8%2BDlzNB9BEr4WMLnX4tEGOqUBhl4%2FTu7Ttk6%2BQy40t1%2Fo795qzbxrEa%2Bh9%2BuaHSLnVOAp3mw6owqY6ftqco8Qvy73MacYQZZseTEhmh9cDPuNeI%2FBJXMQ5dJ6T3kN4DTc82YaRMghAPM9ChVMRHFE60iEbiOnrx%2FI56mIEG1%2FqUCwg5mSTilA%2FugoLDpii3gkuJ3NtxjS75NnYFp2m2GKq%2Bm2pvZgQ2A%2BZAWBN3U97bHjWSM%2Bfld6&X-Amz-Signature=b731bb5fbd9705b54c21f2877e2ad74205bc69f59f2c09cb517b020df1c3cac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LAP23DI%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQC%2BSU0YBEGHeOo9RREAmO0ittHq4K9tKlrBpHVPm1fHTAIhAKZ0%2Flrr9TBXTcbj2cGkpsdRYpbeooBxkepmXI%2BvVk3dKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY%2B3zcQPY1jkmaNxEq3APR5bA4e6fcYX5DvvqP7dq1kG49OMtk908vwvHaG9RBoqBllKj2sGMRw25o25e6VWukfB%2FeEdzTmYLSVng8R0bD%2BmmpwHYTXWsErnv5DiH0OBcjqW9nZ2pjuN3AChl7mOcOBxlsIbv%2FD0nUjK%2F3UOpYxBOimmm0b17otW1JTn9R4900se5xQ8c0uMLSJ7jhuulPClSbuntF3ne%2BDS%2BhpRco66Aj1zwLk%2BqK3iRli6lRn05B%2BekE1Qf9rtoie41CdVI21AqER80zcvFotydCk9QC5vq2EeT2wbVxYe5ZcDJh8yScHZJzHeYqdBTwRT2QGgN49itbb%2BsTJ%2Fc2%2F%2BHxwPCrRYae9kjnpVUP8VP0JCLY8aEdlPRkDR8BdQ4rmQ1LiDb5cbripdGtU147%2BtFaHC9SXBG%2FFK33io3dRwOVm2OXyhGoES741qL9zchMZwFL2SYh1JxVoX97HqqyV8l6pGx9My7kYHK4hhw6REGL0h2bKw6TWBfehE0wOQVW13UmKZ%2BVETECfSaJutTL%2FrDC0lAIc7ZdcGoc4irdv%2FmWI7w1eXTE2nAwg6ijZNXL8RulAU3cpevXMPpPSbBtXYqvlzkdYD5eMzkGTGvCbaiZ4KFnsUfrbRcbHUrClDtNRTCo1%2BLRBjqkAVajd%2BYGEetuzkRh36NhgeFIoYTRrmovvLufQu9uBBcbejlrVZuq1Ch9FwuqRXI8LstVehwReHVKBM6TGGxEDSpLWjVgglpU3%2Fjs5gvP2xnO%2B22s8LgTJR%2BkGjC3yWNKZAcUOFTiNdCjlPniRwAd1aYnMI90xcWyn5Te%2FFZczqvof4mTgFdpv5sBUmKJSWmK5J4R0I5A2KimtZjHlX299WL%2FzgZp&X-Amz-Signature=2ea89c867fc6d18ac444c389c133e51a075c63b5c5ccd8247d9e88469052c84f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSTALQS7%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDi64okQc3g4XJXln4IhYtQYjosj7V%2B87oVYbZqtTJnVQIgcMIU17UF92se57AWxACGH6PUO7ZQoGPxfWZnPPZm6NMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2MUO%2BRtw%2BhhStt2ircA1n1myJnYs74nC3%2BvEpzL0LeDi0HkdOlqjv19ZYbfIt7C2HKDoiESzN8H9L0Z9czC3%2FUgg9MTqzb1IuirF6puO4b4isX6%2FonnVnZyDKFVgN9%2FKIGBdWAmw5YGFP%2FThLeiHBqdRgkfApaplfSg11Q5QaD%2BDvDRIZNgfxjnkgWtPNBmsukwgid6tCIDHJIW6tMW2jxA%2BGb3vXQTRfHyJH07A3a2ysW48ZZsyhUDnilJlAHHEFeEqD8bE3iAziC4%2BCtqU66Y75y5HSEPRm6SVk4AxHoAgO0LN74pk%2B9aGsDRvyxu%2FD29gRImapYkEI1CkBL4WTpsJRGgFtJ3iWaz3lrYX7QPPGZ41BUdk6k1%2FL22cKf3AxnnpK27rrndukLP21jnPN%2FJlEdWb8PRtajEIgvBi3K5O2uittj4twjxd%2BacDJgcizOa77RTNoVDQ5ZjYEoNmCRqd5jIiXPOEIocmxIlHVixkDjB0bui9rnLeSFvKo0N2hXCAUcBK3lXsNiac0bsT%2BSbH8zTqDyZO2qKMTlWV%2F6%2Fgek8mAerpZejA8LJCqYzjyynUg%2FnwGhu93A9dOWTP%2B6S0zFV8iFDVUpwiaguKMzEJ%2F%2BrNCbLbgQ3YsgnouxbML6hWt5aDZJ%2FEdgMK%2FY4tEGOqUBgNkTryfjAuSeRFCUkVrWpFYy9%2FYZJi%2BqhjHe1lFhKa%2BJi0ADY9PgpMAl%2FFspmA3MZly3mz6VvuwRyP1uMnSJjC4QBmZP%2FHhWdwvD6aJdTua6XKe%2ByAs80AK0%2FKKccj2idBI9D3wRripckiIvATzcnxjCglNJcOr31Wj3FtduFILM9h13u1ltMuxksf67piMbvy2kinFeyLyPbPt3CJxt%2BoZGpela&X-Amz-Signature=c7d447abf37ec2f6fdfef2a6d19afb48c1fe7ceff18fc163aa837784339fa5cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMSQZR3Y%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDoaaqg7NOh1kmXuOEMIJb%2FlEVEJT5qoiNBm0921n%2FmCAIhAJH1ghsujwWiaQUNnwMaGg8IMMXFcXDljLHmtQHQQBC%2BKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOa45w5VHxxez%2FI6cq3AP83CeI1bwwv3RffxSyOUTjNohtwnIJrZNr1i3jt4RI4%2FSEyP4%2BIaBmB9tFkBseFom89jG8ywOi0zhlqRG81Y6WHka0GQ7dCH7NOujhND7CeEyi18cXJJHOPRZnQzwSGPt8c7LOvvuU7TqeTfzAcgqRGKRR3FZ%2FJhWRL8zvj3w%2FZNx2Bq9tYTE4R9ZmLEn4QfJBl%2Fqkf0YDe2bx7B9GOXjw%2BAhLRt2BPQAHkOx3eTm1gxmG9k4J4baHd4NX077YItvhlPfQdMhwfarmDr71YsrxkJL4d8SbuOXqD%2B7ZFkjuxvFjLYCmotHvf50%2FEPkApRwL3%2FsU7nrkxnbFeQqr%2BJZbRSzJQ3mr4411J4h71CwZ1yMNmloJUvxHs%2F%2FFLu03drAVF1Lk4oecKW7%2F8z97rKuaYBBi96%2Bixm6nwINMu3aZNaXe3MLc%2FfxH8kGMIAXWO1mUEZqDj6zaq2oJvuaMA4zYct9A5G5ruYjHJgNIi1l%2Fz3Ohtmj28qRKAr8R84YRwh4rI92RgJDT%2BpGrrjyOkf%2BiYDHLtyBoXz0L5Vg22ooUg1lHWRVs48gBiqSZrJAESMDaPMinUyIs1ZJLf9jg23LC1%2B%2F%2FF4c74YuMC9hjGDbqTs2E7ecU5Nz21320UDD32OLRBjqkAYSt1xWKySdgUvOqtwfIE0%2F62nguJynmnGMDMTe0H%2F8o0fjtWU2qe%2BBRiZyFbRZthsBZNmRkdv9A9LEkKblNCarko90A2EDyxDnKCf8mzDDZzvi62J1LAehcifMHxXFJBzvqjR5jPUHXUxjLwVmqOD9I65E9D4wRNebCQAJxMY8%2FN%2BjHt5bOepGcvb8%2FZ2NgndUCTIwgWEJd3NuBS%2F5gyG5SKgU9&X-Amz-Signature=ebda7e5c26580980f35ea017d5b1fc8f8bb47dda3374186251a6405e64015da2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRY7L6X%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC%2FafdrZwLGQ3k6OMh%2FeZLeZ7yyIWPiIr4H2YuyY99j6wIgNZE9Q5gQrOh5YfaD28yWurxP1qIYYY60xoqEJziB4vIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuiAg4T4JXDC%2Fd3MircA4wmga0N2zJmIrZO7JEi8Lx7b8%2F7vngmqMEXwSXjkB1GpQR3j2qk4FmEGLxvPNMJecPrAFIfXyDJMfMLZlnIcR8QmfSqmbU5idvZkZyDJZi9C64zuEjeKesbOZa6RosT8gboR37oyYlqhS83fk%2BHrk8QLYWU3D5FHMCEK8%2FLb%2B5uk65yARXx%2Fe55UOp01pk%2FgVYiYoOV60r6o4Fupkurs%2BygKhkH20V1bFH4%2Fr6uHEU3l1lEsQiyIQARGcQjzhGKPDBN0s65VFUIy7ZUJn9KLJdCYlVMFC695ZwbqUHs5zIjLVVcTwK4%2FjFmeWjeAcz9o0s6Ojm%2BvCxSMg%2BNHB2IxlV87QCNyiJ1NEQlkoF2hOzmjQWlMerCRJ1ffxk8PsegrbKaTslp2AGmn8zpOWh0LjtwzMSssKhKPhXt%2ByeWYXiLe2peuKkc4On4pDTI2ilEbK8oaLCdESooMzNNw5xJV42J7nl%2FtbXSgifEJGtP08be8d6kn%2BoYDqu5XekhVWM%2Fr6ErQceN1KkL9zXJ7LZ9ObY54AzUDIIRDMOyrV2MTU65CqAVIMlwCuPRMfMbeCEi9EEO46EEJ8xsP%2BwutrnLRS98HxuVH%2BkvZ8p3WUwZQM2D%2BNf8%2BDlzNB9BEr4WMLnX4tEGOqUBhl4%2FTu7Ttk6%2BQy40t1%2Fo795qzbxrEa%2Bh9%2BuaHSLnVOAp3mw6owqY6ftqco8Qvy73MacYQZZseTEhmh9cDPuNeI%2FBJXMQ5dJ6T3kN4DTc82YaRMghAPM9ChVMRHFE60iEbiOnrx%2FI56mIEG1%2FqUCwg5mSTilA%2FugoLDpii3gkuJ3NtxjS75NnYFp2m2GKq%2Bm2pvZgQ2A%2BZAWBN3U97bHjWSM%2Bfld6&X-Amz-Signature=c1fcc2203def3f640086675a7e48760a9e392169f329c9e7bb1fd8d080da6ae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2QYI7W7%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIA8qHcvsbxj5gH5LDSOh5AYRdOSfyblfHMK1Sgtc0dP1AiAXFVuyzGBIPQ36vba5rQXm3%2Fmfd7MBB%2FrfbqUm0GFrUSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb4Jn5Atkd%2FGcLsDDKtwDhHeLnFdgLr7P0J%2FV5%2BIGGx4rSne74sQ8dY2qPQewVzCX1k0Pwul3QnQG9a5LbHs8Ah9PfQ23xzJNtYitmzZFXtds39exYTgVcj9MfDSlxlfMqBWMOKe7k6o73gia1W5GLQOmoqxgnxexNDR5Ob3Ot2XlKz6tQD1CsRLvYiWvmf9mAZcqkBDzy3Df%2FsFjWpED7Q4EHqFmFdvyumEgmUo%2Fw5%2B6hPCa7tmMldVd4IgGeecp8ZM8ekimGjOCKpIO3t%2FQcYbPnGzdxfCxfn1NaPoTtO6S9m%2BtU4Y4R8Q0sDMX6MIMXOrAVI7z%2FeNuLifupJj575GohYw63tqBrigX97LelqiRsi%2Bei0aOmhbOWNKroTC8Puj%2FeKDszF8Jw5BeG2xhA2GzX4bZoIQDtUhG8O0rmNrgWZKFtXRJIsF4p7oYzV%2BB8MnEB6hTTKRr8AnRfYTORUgcKN1oTlyd7x3N3q3oa1bUYRk2blRMHOvnemolPQgM8C8MstMkJKeoy8LZDhccjYJFcka8R3mImwN7Jgz6nc6Ltr6lXiuYizkt9eTCs%2BHAT1wFepmpLxOSk0yGWUKFejEwnBbQHog902iNlTCyeHAOWKDvqcWmO8XFGRKM7Bfgu%2BaSKcckf59yyFUwitfi0QY6pgFdZSDMvJgH776iK2QTaDfRvdvJ6%2BmnE7%2B3c1sp3QSNvXJs54uNWDZhMoMrA6w3VeTR%2BP5qslruGuZhyNp2V7AJxEVSm%2BGqizcLfiyZcfjdyYqu0OYwDyBz%2FYqPwqBU0o3P8ZpKjGChuRQtt84%2BKIrPIKMluXgmCOeQbjA2VzmsM1IUgAs2EuZHNbvpe1o4ZgUgmxbNmxpAACmeGosx4BnOlNpzmqzO&X-Amz-Signature=d4dd9293bc93578555c18b198cd39b63523184ee2f90bedaf30bc97c5e62a5d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRY7L6X%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC%2FafdrZwLGQ3k6OMh%2FeZLeZ7yyIWPiIr4H2YuyY99j6wIgNZE9Q5gQrOh5YfaD28yWurxP1qIYYY60xoqEJziB4vIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuiAg4T4JXDC%2Fd3MircA4wmga0N2zJmIrZO7JEi8Lx7b8%2F7vngmqMEXwSXjkB1GpQR3j2qk4FmEGLxvPNMJecPrAFIfXyDJMfMLZlnIcR8QmfSqmbU5idvZkZyDJZi9C64zuEjeKesbOZa6RosT8gboR37oyYlqhS83fk%2BHrk8QLYWU3D5FHMCEK8%2FLb%2B5uk65yARXx%2Fe55UOp01pk%2FgVYiYoOV60r6o4Fupkurs%2BygKhkH20V1bFH4%2Fr6uHEU3l1lEsQiyIQARGcQjzhGKPDBN0s65VFUIy7ZUJn9KLJdCYlVMFC695ZwbqUHs5zIjLVVcTwK4%2FjFmeWjeAcz9o0s6Ojm%2BvCxSMg%2BNHB2IxlV87QCNyiJ1NEQlkoF2hOzmjQWlMerCRJ1ffxk8PsegrbKaTslp2AGmn8zpOWh0LjtwzMSssKhKPhXt%2ByeWYXiLe2peuKkc4On4pDTI2ilEbK8oaLCdESooMzNNw5xJV42J7nl%2FtbXSgifEJGtP08be8d6kn%2BoYDqu5XekhVWM%2Fr6ErQceN1KkL9zXJ7LZ9ObY54AzUDIIRDMOyrV2MTU65CqAVIMlwCuPRMfMbeCEi9EEO46EEJ8xsP%2BwutrnLRS98HxuVH%2BkvZ8p3WUwZQM2D%2BNf8%2BDlzNB9BEr4WMLnX4tEGOqUBhl4%2FTu7Ttk6%2BQy40t1%2Fo795qzbxrEa%2Bh9%2BuaHSLnVOAp3mw6owqY6ftqco8Qvy73MacYQZZseTEhmh9cDPuNeI%2FBJXMQ5dJ6T3kN4DTc82YaRMghAPM9ChVMRHFE60iEbiOnrx%2FI56mIEG1%2FqUCwg5mSTilA%2FugoLDpii3gkuJ3NtxjS75NnYFp2m2GKq%2Bm2pvZgQ2A%2BZAWBN3U97bHjWSM%2Bfld6&X-Amz-Signature=277b520cbb84b246fe88df05c6dc6c1677abb0dbe8d2fccfd66bec64b379fefb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STZ7JP6G%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCID%2BLz3XQWhuYRgHjlh9bYv5rutxJwc5DUnIK6ab35UciAiAUbzN2Za4Tqx4qVxWv3QX3c2%2F7VhH4lIpNlV%2BB%2FWLf%2ByqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYhdO7OhHlpd%2FtUr4KtwDYxMEdXJdAXRuBY3IN1m8cNNti4M%2Fcd2nTGjaOMzr9tQbP1JBVzvnruJtn5pmbTLftELFGQuJyte1ULOSiAmVOvRPmymA6wxcRMOdiy7WPkFiHvfcKxEgEGOSoPNZA7VPfqw1gAJCqw0HaEuuZ5QNrLRFnlp0Nw6zWRCgvSYfzKYW5CoP6AqaieGdBgEQFZugtwO09jQ3aESXRKLTHtI9sw7PN5J%2B9BMJxx7WFSygBr%2BfJrJdVN%2FNxVy9lTf4LLanqXGuBYAyHmRoUYkyh3ZpqL7JhPlxFMNuldyINVnYjW0qy91pdzdph%2Bn%2FHclWrznEtT8iKxS4%2FHoaIOy7MQ7AqAtJuzYE71MPKoOYd93jE6HAcHpiXsFzQHwXJp9hZQj2A5WnsyGmwiJNHXQB7rrLY4vb8KLX2MdvTGJq4dBsJaLCjXQ30qxu0j1CTqJZOMEStpPJxxXValTT9yKyv64xkdpFxtjnzBQwv3zYT%2BlHL5QMO5kRglikYIghIT9Jz4QKIF9MV%2Bb9vljdwWt9LRKLc9FOvEQS4v%2FA3MGQ%2BqomaDGvzgcAWd6i7Q0tsMlJrM8LOoEn5CnViuSSJgSknR9n83dVwSJjHu7bYrR9JQBj9XQF2b3sq7jbNted3GMwnNni0QY6pgGQpSLCBfZOF68p65VeAg3NEzI2KJv%2F%2BOV3jw2Puj9QMhDfG98nfv0oh7K9H9TyfTFxx0%2Bp%2Bxn0yj0N8MCLZLQqnOreivkg8YTfGFQq%2F1mGETl2oMXOvWMQyDjmR5pSjdSJttWo06tTZV4OWji2PIuXx7bmnHKz53Od8Q558w7IITxvo%2BkVLgOCLynlMgOq9XzoGd6KEoGmtD%2BfCTtw4Mer6K8jrjay&X-Amz-Signature=a748bc3d8eb7e2ad2fc23e1f87282757da373ee8d3ebaef8e4061db0136684fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRY7L6X%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC%2FafdrZwLGQ3k6OMh%2FeZLeZ7yyIWPiIr4H2YuyY99j6wIgNZE9Q5gQrOh5YfaD28yWurxP1qIYYY60xoqEJziB4vIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuiAg4T4JXDC%2Fd3MircA4wmga0N2zJmIrZO7JEi8Lx7b8%2F7vngmqMEXwSXjkB1GpQR3j2qk4FmEGLxvPNMJecPrAFIfXyDJMfMLZlnIcR8QmfSqmbU5idvZkZyDJZi9C64zuEjeKesbOZa6RosT8gboR37oyYlqhS83fk%2BHrk8QLYWU3D5FHMCEK8%2FLb%2B5uk65yARXx%2Fe55UOp01pk%2FgVYiYoOV60r6o4Fupkurs%2BygKhkH20V1bFH4%2Fr6uHEU3l1lEsQiyIQARGcQjzhGKPDBN0s65VFUIy7ZUJn9KLJdCYlVMFC695ZwbqUHs5zIjLVVcTwK4%2FjFmeWjeAcz9o0s6Ojm%2BvCxSMg%2BNHB2IxlV87QCNyiJ1NEQlkoF2hOzmjQWlMerCRJ1ffxk8PsegrbKaTslp2AGmn8zpOWh0LjtwzMSssKhKPhXt%2ByeWYXiLe2peuKkc4On4pDTI2ilEbK8oaLCdESooMzNNw5xJV42J7nl%2FtbXSgifEJGtP08be8d6kn%2BoYDqu5XekhVWM%2Fr6ErQceN1KkL9zXJ7LZ9ObY54AzUDIIRDMOyrV2MTU65CqAVIMlwCuPRMfMbeCEi9EEO46EEJ8xsP%2BwutrnLRS98HxuVH%2BkvZ8p3WUwZQM2D%2BNf8%2BDlzNB9BEr4WMLnX4tEGOqUBhl4%2FTu7Ttk6%2BQy40t1%2Fo795qzbxrEa%2Bh9%2BuaHSLnVOAp3mw6owqY6ftqco8Qvy73MacYQZZseTEhmh9cDPuNeI%2FBJXMQ5dJ6T3kN4DTc82YaRMghAPM9ChVMRHFE60iEbiOnrx%2FI56mIEG1%2FqUCwg5mSTilA%2FugoLDpii3gkuJ3NtxjS75NnYFp2m2GKq%2Bm2pvZgQ2A%2BZAWBN3U97bHjWSM%2Bfld6&X-Amz-Signature=2dda0d58a35ccca8377ffb47e74f6ea64fecd4f8f9ae8f2c0d9e9579a9fdf3dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CXS3MOL%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHlu2mKGDgPqN35y%2FTt6w9Bmk96mz7qKI3ekh5KNB5%2FRAiEA5CuMbtuFLwHfA5UKgS6%2BbSBG76N3R2X7SicSUR4p8cMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5rmEBUBkC96UPH8SrcA6%2BmTB6TLghhDJkHbh9UKGJQQgzTBFFr83%2BjWZJs1mGsZX%2FtRGtqIyT2wqGihS16DYGKE4LeTQCaFOa2%2FEz3veDHhcj0wuvUz8IBMaGann5UmyofH6deR%2F47v4GNhng5rf4WeBBuWzRG%2BTPVisNllcFiXlRz4NJPaxTYk5GAjQ4MlFPPG%2BXXiVd1Zu4OS4jMx0Egse%2BfuA1LyT8etnt2FN9GdhkmCTym6DNp7%2BKJgo16ekmUVFW4Z5Ld0oquBsmBkGmB6aZZCG8YGqmzcEMoTYZ4npoBWRvwWlrDSRhjQ4EP8IslFsl7b3gF%2FYsbG36Aa7oyZpCTPKCDgjtGtggHxZ19KYk6%2BmNycas0VEEW%2BF6rO5gn%2FwEUyp61e7bHbj%2Frm%2B%2FIM5K%2BTLoXVV4FeUKAJIcMEkzPhFaP4te0iJNROxUbFZOGTB%2FuD2pxR1oWEYMbR21i4x6SDy3TR%2BhBAU32U6WOhsNRpLHjZOcS2Fum6Vmpj3J7ZRF1RpO0uxI%2Fxp6Pm3DWtl69sCuTSoE5LWLPpwRn%2BLMOCOHruFG5262ImpJ1clClf8koDCzd%2BNiwD2SjLjkaCT3oUQY8y4Hkb5QxKJ48jQzxpQIuQA6PxKa%2BivdLzwzfwbqv%2BX4NLYm%2BMNbX4tEGOqUBH%2BZT2X1eFGWZXYbcAL7GAVydCz1GI10CuF668IbqO2L4FTiIeQR1QF4Dx%2FSJJFfJECHBaAFul%2Bq3xC13thiM5JW7trbQkpqd9kpckvJ3Ah4ThAxUju6i4HW7y3QwNqpS0lp4yNNS4XuWwJfcUr7oRlSeprnsVZJKXbmYVQP2xSDoj4d1PqM%2FE2CGYwP6NVzJjsC%2FBrCBh39SOzjjqsD8Y5kZ%2F9oE&X-Amz-Signature=9c58670b5260cc4b20623178de4b4787a4d0d8c4a50d61bb96aba70b045bad6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRY7L6X%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC%2FafdrZwLGQ3k6OMh%2FeZLeZ7yyIWPiIr4H2YuyY99j6wIgNZE9Q5gQrOh5YfaD28yWurxP1qIYYY60xoqEJziB4vIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuiAg4T4JXDC%2Fd3MircA4wmga0N2zJmIrZO7JEi8Lx7b8%2F7vngmqMEXwSXjkB1GpQR3j2qk4FmEGLxvPNMJecPrAFIfXyDJMfMLZlnIcR8QmfSqmbU5idvZkZyDJZi9C64zuEjeKesbOZa6RosT8gboR37oyYlqhS83fk%2BHrk8QLYWU3D5FHMCEK8%2FLb%2B5uk65yARXx%2Fe55UOp01pk%2FgVYiYoOV60r6o4Fupkurs%2BygKhkH20V1bFH4%2Fr6uHEU3l1lEsQiyIQARGcQjzhGKPDBN0s65VFUIy7ZUJn9KLJdCYlVMFC695ZwbqUHs5zIjLVVcTwK4%2FjFmeWjeAcz9o0s6Ojm%2BvCxSMg%2BNHB2IxlV87QCNyiJ1NEQlkoF2hOzmjQWlMerCRJ1ffxk8PsegrbKaTslp2AGmn8zpOWh0LjtwzMSssKhKPhXt%2ByeWYXiLe2peuKkc4On4pDTI2ilEbK8oaLCdESooMzNNw5xJV42J7nl%2FtbXSgifEJGtP08be8d6kn%2BoYDqu5XekhVWM%2Fr6ErQceN1KkL9zXJ7LZ9ObY54AzUDIIRDMOyrV2MTU65CqAVIMlwCuPRMfMbeCEi9EEO46EEJ8xsP%2BwutrnLRS98HxuVH%2BkvZ8p3WUwZQM2D%2BNf8%2BDlzNB9BEr4WMLnX4tEGOqUBhl4%2FTu7Ttk6%2BQy40t1%2Fo795qzbxrEa%2Bh9%2BuaHSLnVOAp3mw6owqY6ftqco8Qvy73MacYQZZseTEhmh9cDPuNeI%2FBJXMQ5dJ6T3kN4DTc82YaRMghAPM9ChVMRHFE60iEbiOnrx%2FI56mIEG1%2FqUCwg5mSTilA%2FugoLDpii3gkuJ3NtxjS75NnYFp2m2GKq%2Bm2pvZgQ2A%2BZAWBN3U97bHjWSM%2Bfld6&X-Amz-Signature=c2b7bdcd82a48dbe494daa41d649180e5087ac2f1cfda0d5845879ded9d297ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QKQRZEH%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAl3o5EFUUbUJP6cpxgWgQAgyfnawhxSlMK%2FrV%2BbV%2FoZAiB2Cqpg8I%2F1b9DPVTdycml93LsYwuUnPE9PnIrwpMr1biqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZvnEbD3vpoL3zZXFKtwDi5x9OMlFTTJ8iWqHKriJt3l3W%2FE81IwCz3Z6i3ULVv7vn5UKOzY%2BEvkfOJIzZT6mxIUDP7rTK7V37oAt%2B%2B2c9hBM2Tnr5xzcfGoIr1voKifQsSuywuodDfRefRr9rBwqniX0xv%2BJ0BHgI%2BwKIBD7kNotYTaJS%2B0wyVgdykNvvPoONO93aAwWJc4obhSfQ50vvt6L9VYakPGHvLyUyct7iQd5Dxln0qJogg%2FlHkjRA3Gj0syThesloHr9nE7z12YFhNe%2Fb%2FvhC0JUgNLz9iWcOqMJy52aUTyWc%2FN%2FRnMTuDi%2BYQJtLciLYQKiSUv9ZpEzIIsIjkEGPRqMh8l%2Fs4SCZcGlgh%2F%2BJhT1sQPQx3RaOcRvOFXW%2BqSupYMH2%2FBWbuGnhS4oclgFs3MatcehVi03TpJdd01iuMQuWTI5Ndd%2Fhbm4eSr8TXqjMps%2BZQgZclT0ZftRust2cNPLzmNSnNaRRr0iyBch9YX5Ys7Qkv%2B8OMZLNPKNinJ8z7AJer7MVJFh3SPjLVyCts9Ehq5v9E8Ida4I41fuEaJI79dsq8r%2FKJQQRPZEn7xOOdDzFzWOtEhZzSM%2FAFWTjCrtk8lhJbTIqK%2B27kgOg6wvwE8jxDqLOdZ1QRIyJXP%2B3WopuCkwj9ni0QY6pgH3XnV0Ncub%2Bgq5Aq7VdjyjqrIBdKQeeG%2BSdNm2TcZYD5ig5oceuTnLtCM3jALl1pUFpKlpKgVc8I%2FUzgiRD6kA1P7BMbT23weVhlVfw6oK5bIlvDsNtN3lNeQPY7ZzisSkW6dlFNDrJyO25p5FvC8KzpR0w1kOvC5kcOKcYpJojvVz4LG%2Byy3wrjzlHI5gIhLRTEZvTwDd9F9C8T8GRDf9dQvUN9Q7&X-Amz-Signature=a063eb1a8e2b4ab69b84bf55381c539f95b5858c9673f282e684bed125912294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRY7L6X%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC%2FafdrZwLGQ3k6OMh%2FeZLeZ7yyIWPiIr4H2YuyY99j6wIgNZE9Q5gQrOh5YfaD28yWurxP1qIYYY60xoqEJziB4vIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuiAg4T4JXDC%2Fd3MircA4wmga0N2zJmIrZO7JEi8Lx7b8%2F7vngmqMEXwSXjkB1GpQR3j2qk4FmEGLxvPNMJecPrAFIfXyDJMfMLZlnIcR8QmfSqmbU5idvZkZyDJZi9C64zuEjeKesbOZa6RosT8gboR37oyYlqhS83fk%2BHrk8QLYWU3D5FHMCEK8%2FLb%2B5uk65yARXx%2Fe55UOp01pk%2FgVYiYoOV60r6o4Fupkurs%2BygKhkH20V1bFH4%2Fr6uHEU3l1lEsQiyIQARGcQjzhGKPDBN0s65VFUIy7ZUJn9KLJdCYlVMFC695ZwbqUHs5zIjLVVcTwK4%2FjFmeWjeAcz9o0s6Ojm%2BvCxSMg%2BNHB2IxlV87QCNyiJ1NEQlkoF2hOzmjQWlMerCRJ1ffxk8PsegrbKaTslp2AGmn8zpOWh0LjtwzMSssKhKPhXt%2ByeWYXiLe2peuKkc4On4pDTI2ilEbK8oaLCdESooMzNNw5xJV42J7nl%2FtbXSgifEJGtP08be8d6kn%2BoYDqu5XekhVWM%2Fr6ErQceN1KkL9zXJ7LZ9ObY54AzUDIIRDMOyrV2MTU65CqAVIMlwCuPRMfMbeCEi9EEO46EEJ8xsP%2BwutrnLRS98HxuVH%2BkvZ8p3WUwZQM2D%2BNf8%2BDlzNB9BEr4WMLnX4tEGOqUBhl4%2FTu7Ttk6%2BQy40t1%2Fo795qzbxrEa%2Bh9%2BuaHSLnVOAp3mw6owqY6ftqco8Qvy73MacYQZZseTEhmh9cDPuNeI%2FBJXMQ5dJ6T3kN4DTc82YaRMghAPM9ChVMRHFE60iEbiOnrx%2FI56mIEG1%2FqUCwg5mSTilA%2FugoLDpii3gkuJ3NtxjS75NnYFp2m2GKq%2Bm2pvZgQ2A%2BZAWBN3U97bHjWSM%2Bfld6&X-Amz-Signature=680e7ba5d9605225b438f913626a072a4e842d1118201f87a21f455a79727360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z6CYPL5%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIGrEYVxhK6g0JEHEg7VruflWJwN90BAMKwDB%2BGQ1mQ4WAiBZkCJYmNs7WjTL4ZZx4UD3jokd7NOVqWTA5ZpegJBiciqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLDh74JTJEpPfoz%2B7KtwDXJN9Wq%2BltbNi1e3md8K1mtrkHJSnButR97vEHpSt0EwoTPr1FLdF74Hwi%2BBkcjjScsLIQOt9BX73KGuppilhtejeXguTyYUJVpAMA6AiHXot8eDkBsGmg%2FzmpYSADSYUmyqDDx7u7JRTrZSxpSSILu%2FHi1zYMVFkJNffmCCUG6oCt9JVEcJdKKNHpbR5xy7%2FTTSu%2FLS4%2BIsh5nEHTkeW8VGWvHwZufR51sJWYywo2eUwM06pZ00BzE1z%2BlHS1J2gaWAB%2BqmjiV29YLIPCNyROqYSKURuG9Mcn%2F%2F7kCGULJB4VsSHLupCMc5%2F89LHKIsiJv96YPgrW9RiXgK2j2iSFlTLrDss0SZl1%2FuWpft1zKnRJzRM3AgZCdCzGay%2FBpdvwneB6u%2BBCnv1v4RWTtjiwF%2B4BUZ80gER9iqdLdcHq49Nq%2BSag9td5nXHm%2FZ6dSxMMQs5ouqzxWth5bqkSJVnz2A8p34Fk%2BFtF4XJnfm4dirnX8uzpJYBcWQ2l65aS0or9%2F5qwOxUQybZpeqA8lFXeB80By2xM%2B5EaY%2BPaqj8VGFVbBuUevujPkllc3AcB2%2FOF9R0HSawLit0Uul%2FNJZpjz78UPbM6qP1oM80Kqm5t1lfcrGF%2BGYxUiFPx1ww%2F9fi0QY6pgG34qVGjnVi1ZmJlcKDvofwkgWCcapw0Ql01rWQRFi1gXD1UZ881JEbv5Y01YotPkBNnu59zo%2BZnNyvnXJ40p1KKSj4iJhWVpLVa6iLVw3LJbzgRFGIuHGqlcvDR4uXC4rWngEXyqL9SaCWQwkaddG2E1HRDXz5v%2FJPHKfmLsDuFORhE%2Ftd9B%2Fp8%2BbJu21tMQTaEwwFprcQBOPiOzzvEDgonr4%2Bl5zw&X-Amz-Signature=5755bf179f8dfb65d3191329b7226d5dbefca2781f115ff8d610b0122e76181e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4IBIC7D%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCdzcSWWmDPg9jO2CYoBvQt6foEdm1xRTJETX5KzJcGZwIgG1WeKcBDIC90Xv5pMEzuwY38Z0Gvq8r303O2iMWmvcEqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsyhQa2ERXJy%2FvCoyrcAyDX5ey7Niw0cB6WyTDHy1JQGL0IJAkIdAmC1tl17PnY2jmWhqamUqp%2FUa138IkXn98arNsbp2ItkZR1HIIByHDHqdcXLsl86GXHu4UQwRU%2Bdcbq9d17aaZNMrJ42Q0%2FeQ6gkvEr%2FTzV4LZyefUN81nE%2FODhHgbLyM%2BzhuAeFz2Ee%2FygfpLHN9%2F8%2BCIEkbRQzjVh%2BLFHQ4kKzPRenaupPcib%2FEkEJQ16ZuV%2B9ZwF%2F7osota1fnl9v6dixN6js%2BC7ekz7RPaoh0oUjgZkV04O2cnlLR5xYeLjWE99In9m7FVa0MhLoM7cJpySu%2Fg3fssDF6SuOpvJ9Eb8dELgglzGTYCLf4MdxSgGOYGUOVxjgWWPq8kEdlsnMhN5%2FmeU%2BPGyR30a8TTR3hFmtsM9G0dOsAlj9CEXs4Svji7JtAbkkQTLpE1anATm7S0lguNlU22RGf1BpJoOyUJMw%2F%2F%2B%2FTSgAsIsezgvi8Bxc1uQ0zMrzEH44hOEkvGYMun3ngrXFFIxcAzYthNBDHn2pqTBJY2OzLMXsrQIV%2BVitfIfS%2F%2FmPdNGQcoO7X1hHD3CVmIUb2cVr6vv9q%2BneDy1YAyhb1am9PM2WNuPU16cVXX5dmrD4iSC4NinPX3UJwp3ecJ%2BMMbY4tEGOqUBTb3X6%2F2TRHvWT%2FijVhwwqwTu8vcjCmDV8FsfC%2FY0syADVpEULkWqYd1SB3JVCgP2eOH9pTRQQNTDs3r6pK1%2BLgug7vCFnjopVpDPhyA3IWiwvckVkUwBt4SORXC7c%2Bi8iyOgmi%2F2JQJuG3Xt8QEZ6AsLmHAXb8yC8A5AB3jugcaTgZgrGHPXqTENSWk7r2DmLtoCD%2BhaJX5zu4P98lxrPneQiXj7&X-Amz-Signature=da830ed834f8ba99fc4a32fd6f11dda322d47103e09c82ddc806462c00799b83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOT7ABDN%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCjoRU8PKrd1gor6wC2nlL27fJ3O5y1ZZUfnLeqGoYTZQIgOyzcBJbunDKsmytomYSla%2BXiaICJRAVUD%2Begrh54IwMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7F5a%2BfHocFHF0UoCrcA7Ur0KFHtUH%2FfOPpfbL%2BnhzWInPmE539tZAy3AbvJSZ6aRIX3CkhrcWMwIm0%2FsFk%2FRiKtVZVPqySzo1s4UDIrjnBC4Ak%2BmVSM0oDJKLftdL5q4AEqjla8EKZjHTv6xONDeHGW656ilKOSrHNO%2F5vw%2B4QSx6B7AMF9Aj5QPOuU3pwbCmuNwnVdAkaacftOu%2B69aYZo1G5KgRakCi%2B3i9u6lJSve%2BDDjSPG7XJXYW3SEMgclTsEQE7fi7CiM5Bm6WlrLI9q0S7SV3fgRqdgn9EbgQyAP%2BQEru%2BDomAInCQCq%2BKwJTQKJU71MVG33ntiNhTI2sxgk9fQm1M6Hhm0m2K3P9mLG1wSFmzVcPkwQSQBVa%2FHkETX5pdOg9k9vj5ofAaMrAdsWr4mO01YWBbv9q0DQW%2BG%2Fh4jfc1UaJas6sQ%2FlZrvzR2u%2F5jNUC%2FvZBlY1RBAcV881xchYXODSOGDCbu4Mj1Df4fl4EGh%2F1SK30VPj7fObP6QxVvn9Fl4lB7c61byUWsbnDCUP6V4M1s2Uo6BHWvMxRnhNlOfemNk5uQRlU3Rj%2FOvtSiiHBnJsPBHguG1Rsp3MljYAVbePMjAn4K3TW1bjGKJsokfmyPaPZk2N6qfMZhdBfkXcUx7qx7MMfX4tEGOqUB%2FTpTRhfNxx9FBxAmalrL7n1fLIDbu%2FIbja%2FbIAR28w5XCI48NWphHuuCW1NLeCocfth1%2FNVOhNa26usImjat6jR%2BDT2aKPRML0lT0UyLIwPQHFpwn6pnyTVD2Q0FXa5wZ8X%2BkmV3aF5fsj1ToRQBbqfZe3xWyZyw6hUC1Hpy3jNbSGbqsh10fNIJTjytscqRyf4QzwVG9%2Ffbv15qKJreRWSyTXZ5&X-Amz-Signature=beb1ea826eda8c6b4eda275a8cbbe99c8c6c24d9a140465e8eceeb2ab9690d57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRY7L6X%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC%2FafdrZwLGQ3k6OMh%2FeZLeZ7yyIWPiIr4H2YuyY99j6wIgNZE9Q5gQrOh5YfaD28yWurxP1qIYYY60xoqEJziB4vIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuiAg4T4JXDC%2Fd3MircA4wmga0N2zJmIrZO7JEi8Lx7b8%2F7vngmqMEXwSXjkB1GpQR3j2qk4FmEGLxvPNMJecPrAFIfXyDJMfMLZlnIcR8QmfSqmbU5idvZkZyDJZi9C64zuEjeKesbOZa6RosT8gboR37oyYlqhS83fk%2BHrk8QLYWU3D5FHMCEK8%2FLb%2B5uk65yARXx%2Fe55UOp01pk%2FgVYiYoOV60r6o4Fupkurs%2BygKhkH20V1bFH4%2Fr6uHEU3l1lEsQiyIQARGcQjzhGKPDBN0s65VFUIy7ZUJn9KLJdCYlVMFC695ZwbqUHs5zIjLVVcTwK4%2FjFmeWjeAcz9o0s6Ojm%2BvCxSMg%2BNHB2IxlV87QCNyiJ1NEQlkoF2hOzmjQWlMerCRJ1ffxk8PsegrbKaTslp2AGmn8zpOWh0LjtwzMSssKhKPhXt%2ByeWYXiLe2peuKkc4On4pDTI2ilEbK8oaLCdESooMzNNw5xJV42J7nl%2FtbXSgifEJGtP08be8d6kn%2BoYDqu5XekhVWM%2Fr6ErQceN1KkL9zXJ7LZ9ObY54AzUDIIRDMOyrV2MTU65CqAVIMlwCuPRMfMbeCEi9EEO46EEJ8xsP%2BwutrnLRS98HxuVH%2BkvZ8p3WUwZQM2D%2BNf8%2BDlzNB9BEr4WMLnX4tEGOqUBhl4%2FTu7Ttk6%2BQy40t1%2Fo795qzbxrEa%2Bh9%2BuaHSLnVOAp3mw6owqY6ftqco8Qvy73MacYQZZseTEhmh9cDPuNeI%2FBJXMQ5dJ6T3kN4DTc82YaRMghAPM9ChVMRHFE60iEbiOnrx%2FI56mIEG1%2FqUCwg5mSTilA%2FugoLDpii3gkuJ3NtxjS75NnYFp2m2GKq%2Bm2pvZgQ2A%2BZAWBN3U97bHjWSM%2Bfld6&X-Amz-Signature=c054f3007c4f903d8a2eda606d0a35c1c2f7f342af5d898ce20be3d71a4f5c82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRY7L6X%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC%2FafdrZwLGQ3k6OMh%2FeZLeZ7yyIWPiIr4H2YuyY99j6wIgNZE9Q5gQrOh5YfaD28yWurxP1qIYYY60xoqEJziB4vIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuiAg4T4JXDC%2Fd3MircA4wmga0N2zJmIrZO7JEi8Lx7b8%2F7vngmqMEXwSXjkB1GpQR3j2qk4FmEGLxvPNMJecPrAFIfXyDJMfMLZlnIcR8QmfSqmbU5idvZkZyDJZi9C64zuEjeKesbOZa6RosT8gboR37oyYlqhS83fk%2BHrk8QLYWU3D5FHMCEK8%2FLb%2B5uk65yARXx%2Fe55UOp01pk%2FgVYiYoOV60r6o4Fupkurs%2BygKhkH20V1bFH4%2Fr6uHEU3l1lEsQiyIQARGcQjzhGKPDBN0s65VFUIy7ZUJn9KLJdCYlVMFC695ZwbqUHs5zIjLVVcTwK4%2FjFmeWjeAcz9o0s6Ojm%2BvCxSMg%2BNHB2IxlV87QCNyiJ1NEQlkoF2hOzmjQWlMerCRJ1ffxk8PsegrbKaTslp2AGmn8zpOWh0LjtwzMSssKhKPhXt%2ByeWYXiLe2peuKkc4On4pDTI2ilEbK8oaLCdESooMzNNw5xJV42J7nl%2FtbXSgifEJGtP08be8d6kn%2BoYDqu5XekhVWM%2Fr6ErQceN1KkL9zXJ7LZ9ObY54AzUDIIRDMOyrV2MTU65CqAVIMlwCuPRMfMbeCEi9EEO46EEJ8xsP%2BwutrnLRS98HxuVH%2BkvZ8p3WUwZQM2D%2BNf8%2BDlzNB9BEr4WMLnX4tEGOqUBhl4%2FTu7Ttk6%2BQy40t1%2Fo795qzbxrEa%2Bh9%2BuaHSLnVOAp3mw6owqY6ftqco8Qvy73MacYQZZseTEhmh9cDPuNeI%2FBJXMQ5dJ6T3kN4DTc82YaRMghAPM9ChVMRHFE60iEbiOnrx%2FI56mIEG1%2FqUCwg5mSTilA%2FugoLDpii3gkuJ3NtxjS75NnYFp2m2GKq%2Bm2pvZgQ2A%2BZAWBN3U97bHjWSM%2Bfld6&X-Amz-Signature=645c6516d68d169329a9d81668e2e7b77ce550e24db09ade8f76f024149363b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673ZYW5HF%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAd9UJnrdd63Oq7r4mJYVL7tpgafxL2rwPsyiFQMrcMTAiAuQm5F73CO2Uvv3353OIsxg4VbBcJW0cmzRopv5PfuPiqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsKSQDq24eHTCPm8HKtwD6IquINIHQGj%2BhH7adQro8jVnVPi12JRBIArwwKnQI56fX9vL8gkrN4yGaVHKSmeh2FlOhSayhDe1VMiCVfxGhnXHWjBiUj5zKF%2FilQ8CSRtkQckcnFr5BQvCFNF2G8a7jf%2FL0pFcWmvuYQzi%2BqHIBxVEwZPTCJaqjtsCGemZwwbc7kG8GD%2FOvg%2Bm%2BIFmityEggV0sYBhXOgAPOyolndjCsceEns7pdWJ8mV%2Fdf9P9jnNIDh4Cue%2FOisAwhObd6rmxi6ytBU5h8io2%2BTWqAmfHtv0nqdTipNqmWR4Dew6u8vcxDE8r2mSM%2ByTqv0dVEkfLGOyXlYdqW5dixqDoaFwZgwXpvGpuvyd8IB3cPM0VDKUw2Cge8rc2G2Uk%2Ft%2Bvczq0%2B5QRwmcq0xn6umS%2B%2FjnvuOIsNyBc4qM25JPhKoq4GgbHMXRl3HrBbY7kEH6La0FMe6VuUbe7KroF0B7ZiPv33R3izpssRmw6LkuSFbAxAUke77y%2FOxipqY8b4C0OUuuSyWlcexG28QyyuJ9lB5XGQ9hMW%2BA77tkcpuneDUqPRfHHkZDPZzXgDmifNC2OcvHcVge8KCD1thlsjWTOBz5PfEvYWlm19AO6%2Bw13dW2XLWOhNas4adiAp%2FoXLMwi9fi0QY6pgFYgUuUtLmzDvqKqATqfts2GgZDN0euC7U%2BnITnf41ghUEz6t1b8lasYwc6ipUy%2FPjFAyRUbh0BXUfiQZ3Af2NqCOGEWOpLbcjYFHC5bueat8YMXcB7m4xkgbORq2lh9reyJmg08U7n1jIBcTb3iAvIyNKKD9k34%2BA%2BSJ6B0ivXpcv%2F6qM0bcML8IUdwN4dAtOM8TKrxt4QYUfvGDrFqH%2BivskxCA%2BZ&X-Amz-Signature=7041f553df1f7d241a9dfce0bf182bf4cc201ca5a117610874d708df04c501ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673ZYW5HF%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAd9UJnrdd63Oq7r4mJYVL7tpgafxL2rwPsyiFQMrcMTAiAuQm5F73CO2Uvv3353OIsxg4VbBcJW0cmzRopv5PfuPiqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsKSQDq24eHTCPm8HKtwD6IquINIHQGj%2BhH7adQro8jVnVPi12JRBIArwwKnQI56fX9vL8gkrN4yGaVHKSmeh2FlOhSayhDe1VMiCVfxGhnXHWjBiUj5zKF%2FilQ8CSRtkQckcnFr5BQvCFNF2G8a7jf%2FL0pFcWmvuYQzi%2BqHIBxVEwZPTCJaqjtsCGemZwwbc7kG8GD%2FOvg%2Bm%2BIFmityEggV0sYBhXOgAPOyolndjCsceEns7pdWJ8mV%2Fdf9P9jnNIDh4Cue%2FOisAwhObd6rmxi6ytBU5h8io2%2BTWqAmfHtv0nqdTipNqmWR4Dew6u8vcxDE8r2mSM%2ByTqv0dVEkfLGOyXlYdqW5dixqDoaFwZgwXpvGpuvyd8IB3cPM0VDKUw2Cge8rc2G2Uk%2Ft%2Bvczq0%2B5QRwmcq0xn6umS%2B%2FjnvuOIsNyBc4qM25JPhKoq4GgbHMXRl3HrBbY7kEH6La0FMe6VuUbe7KroF0B7ZiPv33R3izpssRmw6LkuSFbAxAUke77y%2FOxipqY8b4C0OUuuSyWlcexG28QyyuJ9lB5XGQ9hMW%2BA77tkcpuneDUqPRfHHkZDPZzXgDmifNC2OcvHcVge8KCD1thlsjWTOBz5PfEvYWlm19AO6%2Bw13dW2XLWOhNas4adiAp%2FoXLMwi9fi0QY6pgFYgUuUtLmzDvqKqATqfts2GgZDN0euC7U%2BnITnf41ghUEz6t1b8lasYwc6ipUy%2FPjFAyRUbh0BXUfiQZ3Af2NqCOGEWOpLbcjYFHC5bueat8YMXcB7m4xkgbORq2lh9reyJmg08U7n1jIBcTb3iAvIyNKKD9k34%2BA%2BSJ6B0ivXpcv%2F6qM0bcML8IUdwN4dAtOM8TKrxt4QYUfvGDrFqH%2BivskxCA%2BZ&X-Amz-Signature=7c7e44b85e3c1191d6d722ac2d956eb4ac868e655dce839de6b2186d7a62498a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673ZYW5HF%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAd9UJnrdd63Oq7r4mJYVL7tpgafxL2rwPsyiFQMrcMTAiAuQm5F73CO2Uvv3353OIsxg4VbBcJW0cmzRopv5PfuPiqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsKSQDq24eHTCPm8HKtwD6IquINIHQGj%2BhH7adQro8jVnVPi12JRBIArwwKnQI56fX9vL8gkrN4yGaVHKSmeh2FlOhSayhDe1VMiCVfxGhnXHWjBiUj5zKF%2FilQ8CSRtkQckcnFr5BQvCFNF2G8a7jf%2FL0pFcWmvuYQzi%2BqHIBxVEwZPTCJaqjtsCGemZwwbc7kG8GD%2FOvg%2Bm%2BIFmityEggV0sYBhXOgAPOyolndjCsceEns7pdWJ8mV%2Fdf9P9jnNIDh4Cue%2FOisAwhObd6rmxi6ytBU5h8io2%2BTWqAmfHtv0nqdTipNqmWR4Dew6u8vcxDE8r2mSM%2ByTqv0dVEkfLGOyXlYdqW5dixqDoaFwZgwXpvGpuvyd8IB3cPM0VDKUw2Cge8rc2G2Uk%2Ft%2Bvczq0%2B5QRwmcq0xn6umS%2B%2FjnvuOIsNyBc4qM25JPhKoq4GgbHMXRl3HrBbY7kEH6La0FMe6VuUbe7KroF0B7ZiPv33R3izpssRmw6LkuSFbAxAUke77y%2FOxipqY8b4C0OUuuSyWlcexG28QyyuJ9lB5XGQ9hMW%2BA77tkcpuneDUqPRfHHkZDPZzXgDmifNC2OcvHcVge8KCD1thlsjWTOBz5PfEvYWlm19AO6%2Bw13dW2XLWOhNas4adiAp%2FoXLMwi9fi0QY6pgFYgUuUtLmzDvqKqATqfts2GgZDN0euC7U%2BnITnf41ghUEz6t1b8lasYwc6ipUy%2FPjFAyRUbh0BXUfiQZ3Af2NqCOGEWOpLbcjYFHC5bueat8YMXcB7m4xkgbORq2lh9reyJmg08U7n1jIBcTb3iAvIyNKKD9k34%2BA%2BSJ6B0ivXpcv%2F6qM0bcML8IUdwN4dAtOM8TKrxt4QYUfvGDrFqH%2BivskxCA%2BZ&X-Amz-Signature=ae9b1cac4be076b81ab33f7d5c01aeeaa1de5c6c8951269307126cf4d9b97e7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673ZYW5HF%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAd9UJnrdd63Oq7r4mJYVL7tpgafxL2rwPsyiFQMrcMTAiAuQm5F73CO2Uvv3353OIsxg4VbBcJW0cmzRopv5PfuPiqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsKSQDq24eHTCPm8HKtwD6IquINIHQGj%2BhH7adQro8jVnVPi12JRBIArwwKnQI56fX9vL8gkrN4yGaVHKSmeh2FlOhSayhDe1VMiCVfxGhnXHWjBiUj5zKF%2FilQ8CSRtkQckcnFr5BQvCFNF2G8a7jf%2FL0pFcWmvuYQzi%2BqHIBxVEwZPTCJaqjtsCGemZwwbc7kG8GD%2FOvg%2Bm%2BIFmityEggV0sYBhXOgAPOyolndjCsceEns7pdWJ8mV%2Fdf9P9jnNIDh4Cue%2FOisAwhObd6rmxi6ytBU5h8io2%2BTWqAmfHtv0nqdTipNqmWR4Dew6u8vcxDE8r2mSM%2ByTqv0dVEkfLGOyXlYdqW5dixqDoaFwZgwXpvGpuvyd8IB3cPM0VDKUw2Cge8rc2G2Uk%2Ft%2Bvczq0%2B5QRwmcq0xn6umS%2B%2FjnvuOIsNyBc4qM25JPhKoq4GgbHMXRl3HrBbY7kEH6La0FMe6VuUbe7KroF0B7ZiPv33R3izpssRmw6LkuSFbAxAUke77y%2FOxipqY8b4C0OUuuSyWlcexG28QyyuJ9lB5XGQ9hMW%2BA77tkcpuneDUqPRfHHkZDPZzXgDmifNC2OcvHcVge8KCD1thlsjWTOBz5PfEvYWlm19AO6%2Bw13dW2XLWOhNas4adiAp%2FoXLMwi9fi0QY6pgFYgUuUtLmzDvqKqATqfts2GgZDN0euC7U%2BnITnf41ghUEz6t1b8lasYwc6ipUy%2FPjFAyRUbh0BXUfiQZ3Af2NqCOGEWOpLbcjYFHC5bueat8YMXcB7m4xkgbORq2lh9reyJmg08U7n1jIBcTb3iAvIyNKKD9k34%2BA%2BSJ6B0ivXpcv%2F6qM0bcML8IUdwN4dAtOM8TKrxt4QYUfvGDrFqH%2BivskxCA%2BZ&X-Amz-Signature=75b80ac55fb3917ff67d903c646e08dd540a2d76b781fa56e8880084436150e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY7FZPWO%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIDk3xEaz3Syg9%2FgkdTmzGa7oLtnG0oqjfKbOP4y1Sm91AiA6gGkodfupjbgcZ7BrnxgBP5Kl2H722%2FRfeYVUQn0opyqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG0IvjusoJIWexkh8KtwDv8WlGU6XmONhCeSH3BJy5ZqIloyBaDWmWgSSmZeKzLHGy6WNgPSz7%2FSptJTVJgvQHX1hy0RpvFz6canTb%2B2hfH1WtJktqKHLGsu8h1V7toDKbiaMasap4wq3U3srMzyvoJnCjN7tZ%2BHvaomvl9S8AqthGJ4BQCKPbAn4BI63qcqrszkTU4fk9DTR0bjN87V%2Bt8%2FapM7MZ316UK9EVOfctrBxb5oZbIH3bpHGyx1LGvEOL%2Fahsu2VG25UYCR4N6YLScvXjg1GO6TAUBfiVlmSAHSEmKYoKxyd5mWZ7LJv8mHnQoorEOlWdYRdppy9NMo42vIpQzqcayYtMmZ2iY1jfTMhCzo0kJIS0dFc9jPB%2BDevCcnOCipOJo8GRJckzo5C0B%2FoiDJSR2lK4myegdODOuDHlgFUtaEKgl1j%2FvdD8ATa4aJRSmsVdu8j1YP2lgrqlEvYvB7Yr5aK%2F6kmepporiN79nMdRXiPqSGOFL8AaXP4QaafQqXlxksgefIze4QcS%2BPbnYZxu%2B9%2FUNCsSkVLfoq%2BRu%2Fh4GzUv9oamKlfC4OZnILG%2BMOeu%2FzWL8iUMUt0ZkifZFLuc611u34X8df5SGUMrBTFYcKD%2FORXyAXy91GpZ1oIDqHjm5utmaAw99fi0QY6pgFV0Th5hF%2BfwUm7Ht2609UjwMzU9QMauu5tSThrVgZiplruJIK0Btg91orIxS8l%2BavmMWNWhIPMhPnYpYCRaB%2Fkm680VpOJgShbasgTQlcFn7dwOU5NopQwmKAXZKVY5Mvs2EJp1c%2F4GW0uRFSYWbZyFlRThT%2Bi64bb1vc57h65pQBpZEZVqH%2FJzhEIm7LAPvN6OHhZuP0Wz22TFYpsqDFhrs60L8e7&X-Amz-Signature=001b55800fe55c7bb5a889836905b3d09d2039d7de3f0d9f7ee29239ba75cc4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673ZYW5HF%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAd9UJnrdd63Oq7r4mJYVL7tpgafxL2rwPsyiFQMrcMTAiAuQm5F73CO2Uvv3353OIsxg4VbBcJW0cmzRopv5PfuPiqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsKSQDq24eHTCPm8HKtwD6IquINIHQGj%2BhH7adQro8jVnVPi12JRBIArwwKnQI56fX9vL8gkrN4yGaVHKSmeh2FlOhSayhDe1VMiCVfxGhnXHWjBiUj5zKF%2FilQ8CSRtkQckcnFr5BQvCFNF2G8a7jf%2FL0pFcWmvuYQzi%2BqHIBxVEwZPTCJaqjtsCGemZwwbc7kG8GD%2FOvg%2Bm%2BIFmityEggV0sYBhXOgAPOyolndjCsceEns7pdWJ8mV%2Fdf9P9jnNIDh4Cue%2FOisAwhObd6rmxi6ytBU5h8io2%2BTWqAmfHtv0nqdTipNqmWR4Dew6u8vcxDE8r2mSM%2ByTqv0dVEkfLGOyXlYdqW5dixqDoaFwZgwXpvGpuvyd8IB3cPM0VDKUw2Cge8rc2G2Uk%2Ft%2Bvczq0%2B5QRwmcq0xn6umS%2B%2FjnvuOIsNyBc4qM25JPhKoq4GgbHMXRl3HrBbY7kEH6La0FMe6VuUbe7KroF0B7ZiPv33R3izpssRmw6LkuSFbAxAUke77y%2FOxipqY8b4C0OUuuSyWlcexG28QyyuJ9lB5XGQ9hMW%2BA77tkcpuneDUqPRfHHkZDPZzXgDmifNC2OcvHcVge8KCD1thlsjWTOBz5PfEvYWlm19AO6%2Bw13dW2XLWOhNas4adiAp%2FoXLMwi9fi0QY6pgFYgUuUtLmzDvqKqATqfts2GgZDN0euC7U%2BnITnf41ghUEz6t1b8lasYwc6ipUy%2FPjFAyRUbh0BXUfiQZ3Af2NqCOGEWOpLbcjYFHC5bueat8YMXcB7m4xkgbORq2lh9reyJmg08U7n1jIBcTb3iAvIyNKKD9k34%2BA%2BSJ6B0ivXpcv%2F6qM0bcML8IUdwN4dAtOM8TKrxt4QYUfvGDrFqH%2BivskxCA%2BZ&X-Amz-Signature=85c811f31c8ce02e0b3e8d87e3f4bef13de1a8340c17d39fcbc1116001df6840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673ZYW5HF%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAd9UJnrdd63Oq7r4mJYVL7tpgafxL2rwPsyiFQMrcMTAiAuQm5F73CO2Uvv3353OIsxg4VbBcJW0cmzRopv5PfuPiqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsKSQDq24eHTCPm8HKtwD6IquINIHQGj%2BhH7adQro8jVnVPi12JRBIArwwKnQI56fX9vL8gkrN4yGaVHKSmeh2FlOhSayhDe1VMiCVfxGhnXHWjBiUj5zKF%2FilQ8CSRtkQckcnFr5BQvCFNF2G8a7jf%2FL0pFcWmvuYQzi%2BqHIBxVEwZPTCJaqjtsCGemZwwbc7kG8GD%2FOvg%2Bm%2BIFmityEggV0sYBhXOgAPOyolndjCsceEns7pdWJ8mV%2Fdf9P9jnNIDh4Cue%2FOisAwhObd6rmxi6ytBU5h8io2%2BTWqAmfHtv0nqdTipNqmWR4Dew6u8vcxDE8r2mSM%2ByTqv0dVEkfLGOyXlYdqW5dixqDoaFwZgwXpvGpuvyd8IB3cPM0VDKUw2Cge8rc2G2Uk%2Ft%2Bvczq0%2B5QRwmcq0xn6umS%2B%2FjnvuOIsNyBc4qM25JPhKoq4GgbHMXRl3HrBbY7kEH6La0FMe6VuUbe7KroF0B7ZiPv33R3izpssRmw6LkuSFbAxAUke77y%2FOxipqY8b4C0OUuuSyWlcexG28QyyuJ9lB5XGQ9hMW%2BA77tkcpuneDUqPRfHHkZDPZzXgDmifNC2OcvHcVge8KCD1thlsjWTOBz5PfEvYWlm19AO6%2Bw13dW2XLWOhNas4adiAp%2FoXLMwi9fi0QY6pgFYgUuUtLmzDvqKqATqfts2GgZDN0euC7U%2BnITnf41ghUEz6t1b8lasYwc6ipUy%2FPjFAyRUbh0BXUfiQZ3Af2NqCOGEWOpLbcjYFHC5bueat8YMXcB7m4xkgbORq2lh9reyJmg08U7n1jIBcTb3iAvIyNKKD9k34%2BA%2BSJ6B0ivXpcv%2F6qM0bcML8IUdwN4dAtOM8TKrxt4QYUfvGDrFqH%2BivskxCA%2BZ&X-Amz-Signature=28fd02c5be9e926510cb74a963eca29a1098d4636798b341fbfb6cdb3ac44ba2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673ZYW5HF%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAd9UJnrdd63Oq7r4mJYVL7tpgafxL2rwPsyiFQMrcMTAiAuQm5F73CO2Uvv3353OIsxg4VbBcJW0cmzRopv5PfuPiqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsKSQDq24eHTCPm8HKtwD6IquINIHQGj%2BhH7adQro8jVnVPi12JRBIArwwKnQI56fX9vL8gkrN4yGaVHKSmeh2FlOhSayhDe1VMiCVfxGhnXHWjBiUj5zKF%2FilQ8CSRtkQckcnFr5BQvCFNF2G8a7jf%2FL0pFcWmvuYQzi%2BqHIBxVEwZPTCJaqjtsCGemZwwbc7kG8GD%2FOvg%2Bm%2BIFmityEggV0sYBhXOgAPOyolndjCsceEns7pdWJ8mV%2Fdf9P9jnNIDh4Cue%2FOisAwhObd6rmxi6ytBU5h8io2%2BTWqAmfHtv0nqdTipNqmWR4Dew6u8vcxDE8r2mSM%2ByTqv0dVEkfLGOyXlYdqW5dixqDoaFwZgwXpvGpuvyd8IB3cPM0VDKUw2Cge8rc2G2Uk%2Ft%2Bvczq0%2B5QRwmcq0xn6umS%2B%2FjnvuOIsNyBc4qM25JPhKoq4GgbHMXRl3HrBbY7kEH6La0FMe6VuUbe7KroF0B7ZiPv33R3izpssRmw6LkuSFbAxAUke77y%2FOxipqY8b4C0OUuuSyWlcexG28QyyuJ9lB5XGQ9hMW%2BA77tkcpuneDUqPRfHHkZDPZzXgDmifNC2OcvHcVge8KCD1thlsjWTOBz5PfEvYWlm19AO6%2Bw13dW2XLWOhNas4adiAp%2FoXLMwi9fi0QY6pgFYgUuUtLmzDvqKqATqfts2GgZDN0euC7U%2BnITnf41ghUEz6t1b8lasYwc6ipUy%2FPjFAyRUbh0BXUfiQZ3Af2NqCOGEWOpLbcjYFHC5bueat8YMXcB7m4xkgbORq2lh9reyJmg08U7n1jIBcTb3iAvIyNKKD9k34%2BA%2BSJ6B0ivXpcv%2F6qM0bcML8IUdwN4dAtOM8TKrxt4QYUfvGDrFqH%2BivskxCA%2BZ&X-Amz-Signature=7075c58c74910229581c27b3e6307deba0f3fe52cf894d78fc6298ddaa25b0b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673ZYW5HF%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAd9UJnrdd63Oq7r4mJYVL7tpgafxL2rwPsyiFQMrcMTAiAuQm5F73CO2Uvv3353OIsxg4VbBcJW0cmzRopv5PfuPiqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsKSQDq24eHTCPm8HKtwD6IquINIHQGj%2BhH7adQro8jVnVPi12JRBIArwwKnQI56fX9vL8gkrN4yGaVHKSmeh2FlOhSayhDe1VMiCVfxGhnXHWjBiUj5zKF%2FilQ8CSRtkQckcnFr5BQvCFNF2G8a7jf%2FL0pFcWmvuYQzi%2BqHIBxVEwZPTCJaqjtsCGemZwwbc7kG8GD%2FOvg%2Bm%2BIFmityEggV0sYBhXOgAPOyolndjCsceEns7pdWJ8mV%2Fdf9P9jnNIDh4Cue%2FOisAwhObd6rmxi6ytBU5h8io2%2BTWqAmfHtv0nqdTipNqmWR4Dew6u8vcxDE8r2mSM%2ByTqv0dVEkfLGOyXlYdqW5dixqDoaFwZgwXpvGpuvyd8IB3cPM0VDKUw2Cge8rc2G2Uk%2Ft%2Bvczq0%2B5QRwmcq0xn6umS%2B%2FjnvuOIsNyBc4qM25JPhKoq4GgbHMXRl3HrBbY7kEH6La0FMe6VuUbe7KroF0B7ZiPv33R3izpssRmw6LkuSFbAxAUke77y%2FOxipqY8b4C0OUuuSyWlcexG28QyyuJ9lB5XGQ9hMW%2BA77tkcpuneDUqPRfHHkZDPZzXgDmifNC2OcvHcVge8KCD1thlsjWTOBz5PfEvYWlm19AO6%2Bw13dW2XLWOhNas4adiAp%2FoXLMwi9fi0QY6pgFYgUuUtLmzDvqKqATqfts2GgZDN0euC7U%2BnITnf41ghUEz6t1b8lasYwc6ipUy%2FPjFAyRUbh0BXUfiQZ3Af2NqCOGEWOpLbcjYFHC5bueat8YMXcB7m4xkgbORq2lh9reyJmg08U7n1jIBcTb3iAvIyNKKD9k34%2BA%2BSJ6B0ivXpcv%2F6qM0bcML8IUdwN4dAtOM8TKrxt4QYUfvGDrFqH%2BivskxCA%2BZ&X-Amz-Signature=9ac9655b4c72fcc4b0b326b323d601ed2aeae49dacf7eca2db5716eec7ed5f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673ZYW5HF%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAd9UJnrdd63Oq7r4mJYVL7tpgafxL2rwPsyiFQMrcMTAiAuQm5F73CO2Uvv3353OIsxg4VbBcJW0cmzRopv5PfuPiqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsKSQDq24eHTCPm8HKtwD6IquINIHQGj%2BhH7adQro8jVnVPi12JRBIArwwKnQI56fX9vL8gkrN4yGaVHKSmeh2FlOhSayhDe1VMiCVfxGhnXHWjBiUj5zKF%2FilQ8CSRtkQckcnFr5BQvCFNF2G8a7jf%2FL0pFcWmvuYQzi%2BqHIBxVEwZPTCJaqjtsCGemZwwbc7kG8GD%2FOvg%2Bm%2BIFmityEggV0sYBhXOgAPOyolndjCsceEns7pdWJ8mV%2Fdf9P9jnNIDh4Cue%2FOisAwhObd6rmxi6ytBU5h8io2%2BTWqAmfHtv0nqdTipNqmWR4Dew6u8vcxDE8r2mSM%2ByTqv0dVEkfLGOyXlYdqW5dixqDoaFwZgwXpvGpuvyd8IB3cPM0VDKUw2Cge8rc2G2Uk%2Ft%2Bvczq0%2B5QRwmcq0xn6umS%2B%2FjnvuOIsNyBc4qM25JPhKoq4GgbHMXRl3HrBbY7kEH6La0FMe6VuUbe7KroF0B7ZiPv33R3izpssRmw6LkuSFbAxAUke77y%2FOxipqY8b4C0OUuuSyWlcexG28QyyuJ9lB5XGQ9hMW%2BA77tkcpuneDUqPRfHHkZDPZzXgDmifNC2OcvHcVge8KCD1thlsjWTOBz5PfEvYWlm19AO6%2Bw13dW2XLWOhNas4adiAp%2FoXLMwi9fi0QY6pgFYgUuUtLmzDvqKqATqfts2GgZDN0euC7U%2BnITnf41ghUEz6t1b8lasYwc6ipUy%2FPjFAyRUbh0BXUfiQZ3Af2NqCOGEWOpLbcjYFHC5bueat8YMXcB7m4xkgbORq2lh9reyJmg08U7n1jIBcTb3iAvIyNKKD9k34%2BA%2BSJ6B0ivXpcv%2F6qM0bcML8IUdwN4dAtOM8TKrxt4QYUfvGDrFqH%2BivskxCA%2BZ&X-Amz-Signature=72c1b57967cefd79d9f9e55034b265369e7337533ae4851a561f1aac7bf52618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673ZYW5HF%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAd9UJnrdd63Oq7r4mJYVL7tpgafxL2rwPsyiFQMrcMTAiAuQm5F73CO2Uvv3353OIsxg4VbBcJW0cmzRopv5PfuPiqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsKSQDq24eHTCPm8HKtwD6IquINIHQGj%2BhH7adQro8jVnVPi12JRBIArwwKnQI56fX9vL8gkrN4yGaVHKSmeh2FlOhSayhDe1VMiCVfxGhnXHWjBiUj5zKF%2FilQ8CSRtkQckcnFr5BQvCFNF2G8a7jf%2FL0pFcWmvuYQzi%2BqHIBxVEwZPTCJaqjtsCGemZwwbc7kG8GD%2FOvg%2Bm%2BIFmityEggV0sYBhXOgAPOyolndjCsceEns7pdWJ8mV%2Fdf9P9jnNIDh4Cue%2FOisAwhObd6rmxi6ytBU5h8io2%2BTWqAmfHtv0nqdTipNqmWR4Dew6u8vcxDE8r2mSM%2ByTqv0dVEkfLGOyXlYdqW5dixqDoaFwZgwXpvGpuvyd8IB3cPM0VDKUw2Cge8rc2G2Uk%2Ft%2Bvczq0%2B5QRwmcq0xn6umS%2B%2FjnvuOIsNyBc4qM25JPhKoq4GgbHMXRl3HrBbY7kEH6La0FMe6VuUbe7KroF0B7ZiPv33R3izpssRmw6LkuSFbAxAUke77y%2FOxipqY8b4C0OUuuSyWlcexG28QyyuJ9lB5XGQ9hMW%2BA77tkcpuneDUqPRfHHkZDPZzXgDmifNC2OcvHcVge8KCD1thlsjWTOBz5PfEvYWlm19AO6%2Bw13dW2XLWOhNas4adiAp%2FoXLMwi9fi0QY6pgFYgUuUtLmzDvqKqATqfts2GgZDN0euC7U%2BnITnf41ghUEz6t1b8lasYwc6ipUy%2FPjFAyRUbh0BXUfiQZ3Af2NqCOGEWOpLbcjYFHC5bueat8YMXcB7m4xkgbORq2lh9reyJmg08U7n1jIBcTb3iAvIyNKKD9k34%2BA%2BSJ6B0ivXpcv%2F6qM0bcML8IUdwN4dAtOM8TKrxt4QYUfvGDrFqH%2BivskxCA%2BZ&X-Amz-Signature=24026400c679cd58fa78f0474cd927c0e575bbcd38395bb584044e83e1a05c32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


