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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635QRFA6Y%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIDk%2F82eekkNDyW6KbfrEkd6T%2BmcCWy2%2FbmAm6ymXq9sMAiEA1i8HOHw2PfCeeVlKR0U%2BGo%2FdkIQVKU9p9OMPcL6scJwqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdaBgkdcZ0o3IBWzircA7SJAmtqfRTQ%2F9firielYNXm2WWDLIniiKAX2rcgT593VNNqVuNrH6q1E34IJx5bwej0RM4NNAGncarFiLuSZgme8htsn3cAJF0cZxurQTk94nVQZellhAO%2BQ7TDoz9cuP6iYWzfQ2A88TW4bWxkovHI03WpKwjfLW%2FRjOjd4jnPVhnyNasUcTKU5NxFJ58XJ9GhaHvbypxq9J4vMLiI5Tsr8UOF7Y6qIkyQ0Gwmm9FFhqGsf0f8Qw7aAyJIRPQtypSXLpzoHGrSak%2BsQFE9D8jGIDwozTqh12NWH7DJp43L2h2v1C8SM0xAtVwSIreBSkl48zMxHjwkXlwrB3URbogeWN2bXEikN80HjT8qSwROARaJxLGjG%2B9k0FGRwGAINXLJ6CrRgbMeF7U6gjiLYQSkp37%2FsjHYMgBCQI6rDFN5oDXPIplfI7mCJjFdTr%2F4yAmQ9RL14IRsPDEjs%2FLNUwZ83oKEqheaDVctJOIBgHa56QHfdSW5O%2FnIIUNJSo6yCyRknUBMxg%2B2afXI%2FVBeicjN8RDL0upVNqlq9Z0Rcpd7mOiOFikpBO30xeSqoY0hOsDntGprlzFVVZPcsCYJtDlFnQoOgAHvE5C%2FcW96BJW9vX6yEwhQ2Pvd0tlvMMXy%2FcUGOqUByc2ZGoX8g4wMN%2BTiMHD6%2FVM8Xih45GxdLgwvv2mgjeHTLR35OoQ%2FEIGJFB9VK6B5I3mOk9JCHBB5O%2BdedcjFTnKTBZMSzlxtgMQUspYiHH8lxBawY3D%2FRodwOk97GfcDxEGbW0Xv60PXxtYMkQfUgfw16a5%2B4o5MrLlLlaQHNeS9jmdC1Hj6jQgrlagubl%2FtYUZsiFZ9ChxRmHgyTNpaPspUJ%2Bud&X-Amz-Signature=838b809cdae294bfa88e581360a80f6c3513b6b6a65eda7ad89f157df14fb6a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635QRFA6Y%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIDk%2F82eekkNDyW6KbfrEkd6T%2BmcCWy2%2FbmAm6ymXq9sMAiEA1i8HOHw2PfCeeVlKR0U%2BGo%2FdkIQVKU9p9OMPcL6scJwqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdaBgkdcZ0o3IBWzircA7SJAmtqfRTQ%2F9firielYNXm2WWDLIniiKAX2rcgT593VNNqVuNrH6q1E34IJx5bwej0RM4NNAGncarFiLuSZgme8htsn3cAJF0cZxurQTk94nVQZellhAO%2BQ7TDoz9cuP6iYWzfQ2A88TW4bWxkovHI03WpKwjfLW%2FRjOjd4jnPVhnyNasUcTKU5NxFJ58XJ9GhaHvbypxq9J4vMLiI5Tsr8UOF7Y6qIkyQ0Gwmm9FFhqGsf0f8Qw7aAyJIRPQtypSXLpzoHGrSak%2BsQFE9D8jGIDwozTqh12NWH7DJp43L2h2v1C8SM0xAtVwSIreBSkl48zMxHjwkXlwrB3URbogeWN2bXEikN80HjT8qSwROARaJxLGjG%2B9k0FGRwGAINXLJ6CrRgbMeF7U6gjiLYQSkp37%2FsjHYMgBCQI6rDFN5oDXPIplfI7mCJjFdTr%2F4yAmQ9RL14IRsPDEjs%2FLNUwZ83oKEqheaDVctJOIBgHa56QHfdSW5O%2FnIIUNJSo6yCyRknUBMxg%2B2afXI%2FVBeicjN8RDL0upVNqlq9Z0Rcpd7mOiOFikpBO30xeSqoY0hOsDntGprlzFVVZPcsCYJtDlFnQoOgAHvE5C%2FcW96BJW9vX6yEwhQ2Pvd0tlvMMXy%2FcUGOqUByc2ZGoX8g4wMN%2BTiMHD6%2FVM8Xih45GxdLgwvv2mgjeHTLR35OoQ%2FEIGJFB9VK6B5I3mOk9JCHBB5O%2BdedcjFTnKTBZMSzlxtgMQUspYiHH8lxBawY3D%2FRodwOk97GfcDxEGbW0Xv60PXxtYMkQfUgfw16a5%2B4o5MrLlLlaQHNeS9jmdC1Hj6jQgrlagubl%2FtYUZsiFZ9ChxRmHgyTNpaPspUJ%2Bud&X-Amz-Signature=c7cb5caccd80ec4f64be15767719af251bbb91042c5da13584582b11da7284d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635QRFA6Y%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIDk%2F82eekkNDyW6KbfrEkd6T%2BmcCWy2%2FbmAm6ymXq9sMAiEA1i8HOHw2PfCeeVlKR0U%2BGo%2FdkIQVKU9p9OMPcL6scJwqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdaBgkdcZ0o3IBWzircA7SJAmtqfRTQ%2F9firielYNXm2WWDLIniiKAX2rcgT593VNNqVuNrH6q1E34IJx5bwej0RM4NNAGncarFiLuSZgme8htsn3cAJF0cZxurQTk94nVQZellhAO%2BQ7TDoz9cuP6iYWzfQ2A88TW4bWxkovHI03WpKwjfLW%2FRjOjd4jnPVhnyNasUcTKU5NxFJ58XJ9GhaHvbypxq9J4vMLiI5Tsr8UOF7Y6qIkyQ0Gwmm9FFhqGsf0f8Qw7aAyJIRPQtypSXLpzoHGrSak%2BsQFE9D8jGIDwozTqh12NWH7DJp43L2h2v1C8SM0xAtVwSIreBSkl48zMxHjwkXlwrB3URbogeWN2bXEikN80HjT8qSwROARaJxLGjG%2B9k0FGRwGAINXLJ6CrRgbMeF7U6gjiLYQSkp37%2FsjHYMgBCQI6rDFN5oDXPIplfI7mCJjFdTr%2F4yAmQ9RL14IRsPDEjs%2FLNUwZ83oKEqheaDVctJOIBgHa56QHfdSW5O%2FnIIUNJSo6yCyRknUBMxg%2B2afXI%2FVBeicjN8RDL0upVNqlq9Z0Rcpd7mOiOFikpBO30xeSqoY0hOsDntGprlzFVVZPcsCYJtDlFnQoOgAHvE5C%2FcW96BJW9vX6yEwhQ2Pvd0tlvMMXy%2FcUGOqUByc2ZGoX8g4wMN%2BTiMHD6%2FVM8Xih45GxdLgwvv2mgjeHTLR35OoQ%2FEIGJFB9VK6B5I3mOk9JCHBB5O%2BdedcjFTnKTBZMSzlxtgMQUspYiHH8lxBawY3D%2FRodwOk97GfcDxEGbW0Xv60PXxtYMkQfUgfw16a5%2B4o5MrLlLlaQHNeS9jmdC1Hj6jQgrlagubl%2FtYUZsiFZ9ChxRmHgyTNpaPspUJ%2Bud&X-Amz-Signature=b30f6aab30394e578d881361947f498e2bb9a56720c452fdcf07122d2c5ef6be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635QRFA6Y%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIDk%2F82eekkNDyW6KbfrEkd6T%2BmcCWy2%2FbmAm6ymXq9sMAiEA1i8HOHw2PfCeeVlKR0U%2BGo%2FdkIQVKU9p9OMPcL6scJwqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdaBgkdcZ0o3IBWzircA7SJAmtqfRTQ%2F9firielYNXm2WWDLIniiKAX2rcgT593VNNqVuNrH6q1E34IJx5bwej0RM4NNAGncarFiLuSZgme8htsn3cAJF0cZxurQTk94nVQZellhAO%2BQ7TDoz9cuP6iYWzfQ2A88TW4bWxkovHI03WpKwjfLW%2FRjOjd4jnPVhnyNasUcTKU5NxFJ58XJ9GhaHvbypxq9J4vMLiI5Tsr8UOF7Y6qIkyQ0Gwmm9FFhqGsf0f8Qw7aAyJIRPQtypSXLpzoHGrSak%2BsQFE9D8jGIDwozTqh12NWH7DJp43L2h2v1C8SM0xAtVwSIreBSkl48zMxHjwkXlwrB3URbogeWN2bXEikN80HjT8qSwROARaJxLGjG%2B9k0FGRwGAINXLJ6CrRgbMeF7U6gjiLYQSkp37%2FsjHYMgBCQI6rDFN5oDXPIplfI7mCJjFdTr%2F4yAmQ9RL14IRsPDEjs%2FLNUwZ83oKEqheaDVctJOIBgHa56QHfdSW5O%2FnIIUNJSo6yCyRknUBMxg%2B2afXI%2FVBeicjN8RDL0upVNqlq9Z0Rcpd7mOiOFikpBO30xeSqoY0hOsDntGprlzFVVZPcsCYJtDlFnQoOgAHvE5C%2FcW96BJW9vX6yEwhQ2Pvd0tlvMMXy%2FcUGOqUByc2ZGoX8g4wMN%2BTiMHD6%2FVM8Xih45GxdLgwvv2mgjeHTLR35OoQ%2FEIGJFB9VK6B5I3mOk9JCHBB5O%2BdedcjFTnKTBZMSzlxtgMQUspYiHH8lxBawY3D%2FRodwOk97GfcDxEGbW0Xv60PXxtYMkQfUgfw16a5%2B4o5MrLlLlaQHNeS9jmdC1Hj6jQgrlagubl%2FtYUZsiFZ9ChxRmHgyTNpaPspUJ%2Bud&X-Amz-Signature=4720da1fc341a10c508b868543698c54e08874a94be1a9317e9cebac71638279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635QRFA6Y%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIDk%2F82eekkNDyW6KbfrEkd6T%2BmcCWy2%2FbmAm6ymXq9sMAiEA1i8HOHw2PfCeeVlKR0U%2BGo%2FdkIQVKU9p9OMPcL6scJwqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdaBgkdcZ0o3IBWzircA7SJAmtqfRTQ%2F9firielYNXm2WWDLIniiKAX2rcgT593VNNqVuNrH6q1E34IJx5bwej0RM4NNAGncarFiLuSZgme8htsn3cAJF0cZxurQTk94nVQZellhAO%2BQ7TDoz9cuP6iYWzfQ2A88TW4bWxkovHI03WpKwjfLW%2FRjOjd4jnPVhnyNasUcTKU5NxFJ58XJ9GhaHvbypxq9J4vMLiI5Tsr8UOF7Y6qIkyQ0Gwmm9FFhqGsf0f8Qw7aAyJIRPQtypSXLpzoHGrSak%2BsQFE9D8jGIDwozTqh12NWH7DJp43L2h2v1C8SM0xAtVwSIreBSkl48zMxHjwkXlwrB3URbogeWN2bXEikN80HjT8qSwROARaJxLGjG%2B9k0FGRwGAINXLJ6CrRgbMeF7U6gjiLYQSkp37%2FsjHYMgBCQI6rDFN5oDXPIplfI7mCJjFdTr%2F4yAmQ9RL14IRsPDEjs%2FLNUwZ83oKEqheaDVctJOIBgHa56QHfdSW5O%2FnIIUNJSo6yCyRknUBMxg%2B2afXI%2FVBeicjN8RDL0upVNqlq9Z0Rcpd7mOiOFikpBO30xeSqoY0hOsDntGprlzFVVZPcsCYJtDlFnQoOgAHvE5C%2FcW96BJW9vX6yEwhQ2Pvd0tlvMMXy%2FcUGOqUByc2ZGoX8g4wMN%2BTiMHD6%2FVM8Xih45GxdLgwvv2mgjeHTLR35OoQ%2FEIGJFB9VK6B5I3mOk9JCHBB5O%2BdedcjFTnKTBZMSzlxtgMQUspYiHH8lxBawY3D%2FRodwOk97GfcDxEGbW0Xv60PXxtYMkQfUgfw16a5%2B4o5MrLlLlaQHNeS9jmdC1Hj6jQgrlagubl%2FtYUZsiFZ9ChxRmHgyTNpaPspUJ%2Bud&X-Amz-Signature=966a7d21d4c45599ed95e09a7b8f25ce8d9479befb8d8ea21f1209ecaf1fae9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635QRFA6Y%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIDk%2F82eekkNDyW6KbfrEkd6T%2BmcCWy2%2FbmAm6ymXq9sMAiEA1i8HOHw2PfCeeVlKR0U%2BGo%2FdkIQVKU9p9OMPcL6scJwqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdaBgkdcZ0o3IBWzircA7SJAmtqfRTQ%2F9firielYNXm2WWDLIniiKAX2rcgT593VNNqVuNrH6q1E34IJx5bwej0RM4NNAGncarFiLuSZgme8htsn3cAJF0cZxurQTk94nVQZellhAO%2BQ7TDoz9cuP6iYWzfQ2A88TW4bWxkovHI03WpKwjfLW%2FRjOjd4jnPVhnyNasUcTKU5NxFJ58XJ9GhaHvbypxq9J4vMLiI5Tsr8UOF7Y6qIkyQ0Gwmm9FFhqGsf0f8Qw7aAyJIRPQtypSXLpzoHGrSak%2BsQFE9D8jGIDwozTqh12NWH7DJp43L2h2v1C8SM0xAtVwSIreBSkl48zMxHjwkXlwrB3URbogeWN2bXEikN80HjT8qSwROARaJxLGjG%2B9k0FGRwGAINXLJ6CrRgbMeF7U6gjiLYQSkp37%2FsjHYMgBCQI6rDFN5oDXPIplfI7mCJjFdTr%2F4yAmQ9RL14IRsPDEjs%2FLNUwZ83oKEqheaDVctJOIBgHa56QHfdSW5O%2FnIIUNJSo6yCyRknUBMxg%2B2afXI%2FVBeicjN8RDL0upVNqlq9Z0Rcpd7mOiOFikpBO30xeSqoY0hOsDntGprlzFVVZPcsCYJtDlFnQoOgAHvE5C%2FcW96BJW9vX6yEwhQ2Pvd0tlvMMXy%2FcUGOqUByc2ZGoX8g4wMN%2BTiMHD6%2FVM8Xih45GxdLgwvv2mgjeHTLR35OoQ%2FEIGJFB9VK6B5I3mOk9JCHBB5O%2BdedcjFTnKTBZMSzlxtgMQUspYiHH8lxBawY3D%2FRodwOk97GfcDxEGbW0Xv60PXxtYMkQfUgfw16a5%2B4o5MrLlLlaQHNeS9jmdC1Hj6jQgrlagubl%2FtYUZsiFZ9ChxRmHgyTNpaPspUJ%2Bud&X-Amz-Signature=e931d174fb42633199975e4292d56c6ec748faac7958784ff695156f3c3a8b75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635QRFA6Y%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIDk%2F82eekkNDyW6KbfrEkd6T%2BmcCWy2%2FbmAm6ymXq9sMAiEA1i8HOHw2PfCeeVlKR0U%2BGo%2FdkIQVKU9p9OMPcL6scJwqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdaBgkdcZ0o3IBWzircA7SJAmtqfRTQ%2F9firielYNXm2WWDLIniiKAX2rcgT593VNNqVuNrH6q1E34IJx5bwej0RM4NNAGncarFiLuSZgme8htsn3cAJF0cZxurQTk94nVQZellhAO%2BQ7TDoz9cuP6iYWzfQ2A88TW4bWxkovHI03WpKwjfLW%2FRjOjd4jnPVhnyNasUcTKU5NxFJ58XJ9GhaHvbypxq9J4vMLiI5Tsr8UOF7Y6qIkyQ0Gwmm9FFhqGsf0f8Qw7aAyJIRPQtypSXLpzoHGrSak%2BsQFE9D8jGIDwozTqh12NWH7DJp43L2h2v1C8SM0xAtVwSIreBSkl48zMxHjwkXlwrB3URbogeWN2bXEikN80HjT8qSwROARaJxLGjG%2B9k0FGRwGAINXLJ6CrRgbMeF7U6gjiLYQSkp37%2FsjHYMgBCQI6rDFN5oDXPIplfI7mCJjFdTr%2F4yAmQ9RL14IRsPDEjs%2FLNUwZ83oKEqheaDVctJOIBgHa56QHfdSW5O%2FnIIUNJSo6yCyRknUBMxg%2B2afXI%2FVBeicjN8RDL0upVNqlq9Z0Rcpd7mOiOFikpBO30xeSqoY0hOsDntGprlzFVVZPcsCYJtDlFnQoOgAHvE5C%2FcW96BJW9vX6yEwhQ2Pvd0tlvMMXy%2FcUGOqUByc2ZGoX8g4wMN%2BTiMHD6%2FVM8Xih45GxdLgwvv2mgjeHTLR35OoQ%2FEIGJFB9VK6B5I3mOk9JCHBB5O%2BdedcjFTnKTBZMSzlxtgMQUspYiHH8lxBawY3D%2FRodwOk97GfcDxEGbW0Xv60PXxtYMkQfUgfw16a5%2B4o5MrLlLlaQHNeS9jmdC1Hj6jQgrlagubl%2FtYUZsiFZ9ChxRmHgyTNpaPspUJ%2Bud&X-Amz-Signature=6fb33bd7a4d9e628f37157c2c7a6de6670efdb05f6cf4c255e48ebd3279f48c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635QRFA6Y%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIDk%2F82eekkNDyW6KbfrEkd6T%2BmcCWy2%2FbmAm6ymXq9sMAiEA1i8HOHw2PfCeeVlKR0U%2BGo%2FdkIQVKU9p9OMPcL6scJwqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdaBgkdcZ0o3IBWzircA7SJAmtqfRTQ%2F9firielYNXm2WWDLIniiKAX2rcgT593VNNqVuNrH6q1E34IJx5bwej0RM4NNAGncarFiLuSZgme8htsn3cAJF0cZxurQTk94nVQZellhAO%2BQ7TDoz9cuP6iYWzfQ2A88TW4bWxkovHI03WpKwjfLW%2FRjOjd4jnPVhnyNasUcTKU5NxFJ58XJ9GhaHvbypxq9J4vMLiI5Tsr8UOF7Y6qIkyQ0Gwmm9FFhqGsf0f8Qw7aAyJIRPQtypSXLpzoHGrSak%2BsQFE9D8jGIDwozTqh12NWH7DJp43L2h2v1C8SM0xAtVwSIreBSkl48zMxHjwkXlwrB3URbogeWN2bXEikN80HjT8qSwROARaJxLGjG%2B9k0FGRwGAINXLJ6CrRgbMeF7U6gjiLYQSkp37%2FsjHYMgBCQI6rDFN5oDXPIplfI7mCJjFdTr%2F4yAmQ9RL14IRsPDEjs%2FLNUwZ83oKEqheaDVctJOIBgHa56QHfdSW5O%2FnIIUNJSo6yCyRknUBMxg%2B2afXI%2FVBeicjN8RDL0upVNqlq9Z0Rcpd7mOiOFikpBO30xeSqoY0hOsDntGprlzFVVZPcsCYJtDlFnQoOgAHvE5C%2FcW96BJW9vX6yEwhQ2Pvd0tlvMMXy%2FcUGOqUByc2ZGoX8g4wMN%2BTiMHD6%2FVM8Xih45GxdLgwvv2mgjeHTLR35OoQ%2FEIGJFB9VK6B5I3mOk9JCHBB5O%2BdedcjFTnKTBZMSzlxtgMQUspYiHH8lxBawY3D%2FRodwOk97GfcDxEGbW0Xv60PXxtYMkQfUgfw16a5%2B4o5MrLlLlaQHNeS9jmdC1Hj6jQgrlagubl%2FtYUZsiFZ9ChxRmHgyTNpaPspUJ%2Bud&X-Amz-Signature=35f42b00a9ab97ffe42d34378767836c493ab15b8f1061aac494a9cbe1e52397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635QRFA6Y%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIDk%2F82eekkNDyW6KbfrEkd6T%2BmcCWy2%2FbmAm6ymXq9sMAiEA1i8HOHw2PfCeeVlKR0U%2BGo%2FdkIQVKU9p9OMPcL6scJwqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdaBgkdcZ0o3IBWzircA7SJAmtqfRTQ%2F9firielYNXm2WWDLIniiKAX2rcgT593VNNqVuNrH6q1E34IJx5bwej0RM4NNAGncarFiLuSZgme8htsn3cAJF0cZxurQTk94nVQZellhAO%2BQ7TDoz9cuP6iYWzfQ2A88TW4bWxkovHI03WpKwjfLW%2FRjOjd4jnPVhnyNasUcTKU5NxFJ58XJ9GhaHvbypxq9J4vMLiI5Tsr8UOF7Y6qIkyQ0Gwmm9FFhqGsf0f8Qw7aAyJIRPQtypSXLpzoHGrSak%2BsQFE9D8jGIDwozTqh12NWH7DJp43L2h2v1C8SM0xAtVwSIreBSkl48zMxHjwkXlwrB3URbogeWN2bXEikN80HjT8qSwROARaJxLGjG%2B9k0FGRwGAINXLJ6CrRgbMeF7U6gjiLYQSkp37%2FsjHYMgBCQI6rDFN5oDXPIplfI7mCJjFdTr%2F4yAmQ9RL14IRsPDEjs%2FLNUwZ83oKEqheaDVctJOIBgHa56QHfdSW5O%2FnIIUNJSo6yCyRknUBMxg%2B2afXI%2FVBeicjN8RDL0upVNqlq9Z0Rcpd7mOiOFikpBO30xeSqoY0hOsDntGprlzFVVZPcsCYJtDlFnQoOgAHvE5C%2FcW96BJW9vX6yEwhQ2Pvd0tlvMMXy%2FcUGOqUByc2ZGoX8g4wMN%2BTiMHD6%2FVM8Xih45GxdLgwvv2mgjeHTLR35OoQ%2FEIGJFB9VK6B5I3mOk9JCHBB5O%2BdedcjFTnKTBZMSzlxtgMQUspYiHH8lxBawY3D%2FRodwOk97GfcDxEGbW0Xv60PXxtYMkQfUgfw16a5%2B4o5MrLlLlaQHNeS9jmdC1Hj6jQgrlagubl%2FtYUZsiFZ9ChxRmHgyTNpaPspUJ%2Bud&X-Amz-Signature=ea93cef1ca370394510e9ef578625bde22566d3f2785c903d47c2e73faf33015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635QRFA6Y%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIDk%2F82eekkNDyW6KbfrEkd6T%2BmcCWy2%2FbmAm6ymXq9sMAiEA1i8HOHw2PfCeeVlKR0U%2BGo%2FdkIQVKU9p9OMPcL6scJwqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdaBgkdcZ0o3IBWzircA7SJAmtqfRTQ%2F9firielYNXm2WWDLIniiKAX2rcgT593VNNqVuNrH6q1E34IJx5bwej0RM4NNAGncarFiLuSZgme8htsn3cAJF0cZxurQTk94nVQZellhAO%2BQ7TDoz9cuP6iYWzfQ2A88TW4bWxkovHI03WpKwjfLW%2FRjOjd4jnPVhnyNasUcTKU5NxFJ58XJ9GhaHvbypxq9J4vMLiI5Tsr8UOF7Y6qIkyQ0Gwmm9FFhqGsf0f8Qw7aAyJIRPQtypSXLpzoHGrSak%2BsQFE9D8jGIDwozTqh12NWH7DJp43L2h2v1C8SM0xAtVwSIreBSkl48zMxHjwkXlwrB3URbogeWN2bXEikN80HjT8qSwROARaJxLGjG%2B9k0FGRwGAINXLJ6CrRgbMeF7U6gjiLYQSkp37%2FsjHYMgBCQI6rDFN5oDXPIplfI7mCJjFdTr%2F4yAmQ9RL14IRsPDEjs%2FLNUwZ83oKEqheaDVctJOIBgHa56QHfdSW5O%2FnIIUNJSo6yCyRknUBMxg%2B2afXI%2FVBeicjN8RDL0upVNqlq9Z0Rcpd7mOiOFikpBO30xeSqoY0hOsDntGprlzFVVZPcsCYJtDlFnQoOgAHvE5C%2FcW96BJW9vX6yEwhQ2Pvd0tlvMMXy%2FcUGOqUByc2ZGoX8g4wMN%2BTiMHD6%2FVM8Xih45GxdLgwvv2mgjeHTLR35OoQ%2FEIGJFB9VK6B5I3mOk9JCHBB5O%2BdedcjFTnKTBZMSzlxtgMQUspYiHH8lxBawY3D%2FRodwOk97GfcDxEGbW0Xv60PXxtYMkQfUgfw16a5%2B4o5MrLlLlaQHNeS9jmdC1Hj6jQgrlagubl%2FtYUZsiFZ9ChxRmHgyTNpaPspUJ%2Bud&X-Amz-Signature=3a6e941b7ffb1b725c4491fe67596fe73c0151fd5dc024525558fa1eaab559db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJOH36L%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIDGz22XjbHdS6ww5VdcKWFCcWlaH1glnZ4is87lo3cDmAiEAx9TSAIIGD3BEsU9iGeQYQgHC9fAzwMEjA1fgp9vLPBMqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAREuSHcxb%2B32VK6CrcA8gwUjrwSwNu51khfuObyM%2B0JV5VYiUhEoZTvp1nAYnnjJeptRJJlecnFv0gugteCW3EAYFqSmwwJyflrmLFWbrgPXjQyIA%2B19Z%2FJLunQsQhniBduVdmllTwW0iqqOd2TxzUdoW5fCEqVK1ouBz7%2Bdv3Lajs39deSt02vvbJMXJ51RzeXPm1eH8jm5WXYvs%2BkQLB6GRewH%2FcXy1awA7bsBbwGfilfuSmwy7ZvUicGZ4RrAoM%2F%2FNjH5eqMV0g%2Fy0wYDiSbO5PeqRV7uxebqo0xNqQIdPe2wqKa2MoJ2CfJszYE%2FetTY58zN3PUfmbLdvlszupkSH70SpXXp9Vc%2B7Cjpk7JF79m1dhG5%2FCU6ysFHsLkmQx8MHiDC1OoEAmzG81uQPwa0jYrcRQhe%2B8xnBXGSahhX92uE5FvLwA%2Fn7MuRXM8t%2BNmXrsOe6pBMGX%2FDyKwBX3BBTLLO%2Fpln%2F8g0i8YfnUPaopBHQndUnTrRSKAUuNb8eM7ivmTLpeqybeI4X4N09QcaTR4BC2%2FkQ8AUm26Tk6ITq4B3hrv6l1UkBKc6GPKRDKPZDE7ttLEJDWBgPj5xxaa7G9Ehq1sbTYyxZ2aDww%2B%2BBM2%2FR0wx%2FItE8s3%2BusOMmpoZj%2FMl8R7r3qMPry%2FcUGOqUBYs1gIsJPyaepsaKIhcshjuN2Iuab9iFhqyXOK0BA4wuqgXVMCILWMyAJ%2Bg8URcM3ajiPiemiyMqETP2%2FSY3lJgReAHnAZuQIaXjnU%2BmD7rQLdCTaCYPm%2FWVGh4uPoJ1vX8qYD9Ic4VW96F483qd1o12y2BhipPxOOQ64O8IMqrsSBBGTm9UfMXRfPIXWiiPVvWqwqP%2B0eYEvMiofsx9NrL%2FrZE%2FA&X-Amz-Signature=4f1fbce7fb863a64bd4bddc4f5df952a2fdcd1d9c97cf7b2b5b4b7313e206935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI7TTVCC%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICPQcIgXPU4rk1wwYr9OTFQQHVmBf0AaAKvSqHKtVRcjAiEA2XHQwdx8EsYC%2BpVlliuXJvYhNVbdXg9idMyI0EnSsAMqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJlPknUq9WXJnlMyircAxnBQMI%2Blv7hnpDIT7mV6SsUY7LtEXKzgjEOTlDZ82b4m6RDmbbfNoImBWDRzXS9FL0ASktYVlAOAhi4TmxOuwmJyNCs6ThpOI6Okd9d8v%2FRJwDZTWOKW%2BSyIQpZ5RXTl3RfXE7G3OlVMLvqUaZh4h75Sk5H5ED59DlHCRow0CnrizFTdJO3hkOEV3c9Ync%2B%2B7BDLxyDe4MeG0CXzPG%2FfF8xJmdleRQWqQbjE%2BeHEqjOMiAvQRNj4JUbHPdjxXYpXp2WrqnHrBgQv2XHD9pkrjZUDwrDZJRsU1sk4Q6ekZaO038LSPhkbpax2hOrlW8APczNdzu8nHaQAGob7bLbYe1IWt53csk%2BgO2LR%2FzQ3JdX6Vn5ah%2BmCBGoZgRQpVnRgBZdB4KWLpkgiVntFaDw0sCOBGoC2Bz0Ogag%2Fd5euENQLdlzILcTJp7odG6oOFfeT3argL%2BRBas9r7NS6TjCpZOPooXnf4LUCuy1BmGh7%2FOie9CZam3apJSY9hV%2FTq5HMUKef15A7R9YCZFt1v1NEXbzVbh9xViTCHVI9iopoSIJOzO71tDDHKKd6rox7ZYIHAhsQfr%2BByaj7sZFaW8mv3sFdPssMHbT4ttSZ69WeEfNQxKUlv8Mqos5DGm%2BMPry%2FcUGOqUBUwsAZ7BWPsQ4%2BJL8wSIO4%2FTRNwkWwGpphh9Wc6juaQcF7dLUne9xbSsS9uxhHkuRKJV90nK50w00rF0ADy6HT4THjiHp9b%2BzPMth77gU0C4sU3ihL9xGEk6OPKlUoTRjflURlNFXaZWp1RiKK6CMsDy1Qc4GhPOup42umypzbRBS2qXs%2BOh5FLZHRmYosHgCmdD70HkxZSug7q5rP2kY1akGomtK&X-Amz-Signature=e1a5e58ac90c490f622d25e27e9d4b7c3125285cad392cec1243aab5c7b897c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLYCFDXJ%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIE24Mr6Qk96%2Fwrm1hsBb%2Bc3ddHH%2BMyLxGElHdPwTw0GKAiEAoi7tvq5ZBR0fr3oR02CjVkfuupnrmXubepTedw7CEyUqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPAe3JlhnAh9xKh9ircA34Ewjcn7E5LBMbf28PhgQrOgepNWnNLTmR%2B%2BwjBQHw5JJWI2Mvb97ctlnP56LpCDof8xjigKbbBP7GyTHHHBzsQq5R1G56YcRakbneTehpI9Pj7OBnH5E2X4SSKEYOlr9XrIa5RF%2F2%2FhV2%2FL7%2BugCozxQ6yJZ%2BRfSggjHk8sHrz5I%2B4xgguXuruVb5pOGN9BDN6ucBASZGG430O7Pu79YAdF2fLr3KMQoGj54A4sYiHhYjjaI38MxJaOvSU2vsJpbyFwvb4lF3b%2FZRLSaWLIZA48MmNsn9iEz%2FDKVMozZgxD9BqjCp%2FTwyXiZeR%2B%2FWSg3vc3%2FeqiV5XacQcMhdbViNca%2FuSur3sRT%2B7EjIbrCf7TD9KrHyYJVMfwXTwM7NqixV%2BQK5wNhm8TQtThKp3QUFnmvr9K249YxnqDcPB4P7ecCHtYTqZD0GhjjAeWJIaxftLmN2rUFUnsPVrndvImVUvj0ri3F1Tj%2BdRXR4SDgCraNso1NwWINX4qmVqmg%2Fxm8h%2F6vh7d1azfY84z%2Br7DwgLVYWh8ZUjr%2B3S0z1UMTSbO8qLVPJtfeOjt9HVs4FP6e%2BwZhcsbVZ8GcKVXs56oz0mkvxYZxzdkLA%2BOB5ghsw%2FTfbZPXSy8n%2BO5tbzMNny%2FcUGOqUB6YrOjzTMqT3GIon58KoMzOMputEkVTlE3hhuZIaN%2Blr6Jt4%2B9I9cawqeY88rN0kLJ%2F0%2BFn4fursBVOAqdhT64BU3ykiupFul%2F8xzMfVktMnvLSoL%2FMLp%2Bmu91G1iwxRI3laGr2dNHhY61QwU1jmdIqa3g2TwjgB8t7zhFkzoRKa37eHaGssLKH5Q9Go56cHDgU3oIkV5yhLfDhAwNZWxJgf%2FeIjO&X-Amz-Signature=3dcbe0111ff0b342b1ba06932c7cce0080ca9a3f2d2b8826dcb6ca26a656b0a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635QRFA6Y%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIDk%2F82eekkNDyW6KbfrEkd6T%2BmcCWy2%2FbmAm6ymXq9sMAiEA1i8HOHw2PfCeeVlKR0U%2BGo%2FdkIQVKU9p9OMPcL6scJwqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdaBgkdcZ0o3IBWzircA7SJAmtqfRTQ%2F9firielYNXm2WWDLIniiKAX2rcgT593VNNqVuNrH6q1E34IJx5bwej0RM4NNAGncarFiLuSZgme8htsn3cAJF0cZxurQTk94nVQZellhAO%2BQ7TDoz9cuP6iYWzfQ2A88TW4bWxkovHI03WpKwjfLW%2FRjOjd4jnPVhnyNasUcTKU5NxFJ58XJ9GhaHvbypxq9J4vMLiI5Tsr8UOF7Y6qIkyQ0Gwmm9FFhqGsf0f8Qw7aAyJIRPQtypSXLpzoHGrSak%2BsQFE9D8jGIDwozTqh12NWH7DJp43L2h2v1C8SM0xAtVwSIreBSkl48zMxHjwkXlwrB3URbogeWN2bXEikN80HjT8qSwROARaJxLGjG%2B9k0FGRwGAINXLJ6CrRgbMeF7U6gjiLYQSkp37%2FsjHYMgBCQI6rDFN5oDXPIplfI7mCJjFdTr%2F4yAmQ9RL14IRsPDEjs%2FLNUwZ83oKEqheaDVctJOIBgHa56QHfdSW5O%2FnIIUNJSo6yCyRknUBMxg%2B2afXI%2FVBeicjN8RDL0upVNqlq9Z0Rcpd7mOiOFikpBO30xeSqoY0hOsDntGprlzFVVZPcsCYJtDlFnQoOgAHvE5C%2FcW96BJW9vX6yEwhQ2Pvd0tlvMMXy%2FcUGOqUByc2ZGoX8g4wMN%2BTiMHD6%2FVM8Xih45GxdLgwvv2mgjeHTLR35OoQ%2FEIGJFB9VK6B5I3mOk9JCHBB5O%2BdedcjFTnKTBZMSzlxtgMQUspYiHH8lxBawY3D%2FRodwOk97GfcDxEGbW0Xv60PXxtYMkQfUgfw16a5%2B4o5MrLlLlaQHNeS9jmdC1Hj6jQgrlagubl%2FtYUZsiFZ9ChxRmHgyTNpaPspUJ%2Bud&X-Amz-Signature=47293b6f12c716b7b8a4e9b6fccfcf85c03fe38acaacdf2feb4cc1261b5130c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H2IZIG4%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICJ%2BTfC%2Beoh92KcYLGVMPNN6CPRpwx%2BySZ5Lo4S4J3YXAiEAkn9dubXt1Dz99t1d%2FOtGZhHchGa5j3LjwZaL%2B3DQu4gqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKHWOexZ%2BDAWORk2SrcA2dwZ86%2BF2y2xQidjUhoDnyLhdK2qhCnMsTeMAnqUVNSMXn8n08N0Dk0JLWjQ%2FjwWSIdDrSn0mZIv5HXB5C56ku%2BaZrhRAP1SH0aZU%2BnIzdiDBYzmsd9usczGkR5Iv420YEFnwy%2F69tVYpdaSrNPRdx3teglzMrpy2kS3ZldciHP17n%2Fuk%2FrBsuyg1zbzlm3BmBBmtbRQ%2BDz5oUdzg039xD%2BhZTtVi%2BGF3my%2FRlWmxuX5ziji1JZgnCbcvdAM3MfQQu2XWusazv9ZL27wEKJwOVE7bN8O1TP27d5iw80pCibErjK89ICIL%2Fd%2B1XYg6ojZKv9IXjq8l6fh8XR2gxs1vhW5R0L0FoLND81YcUT%2FCZo0yBWSHbfMJUWvhgiYotQ%2BOmrkrie5u%2BYIQJfx%2BRR%2F7DByYmB9Ehh%2BjIrPgpLwzrJ5kp3aQ6cUuykV5KwEdKVA0oZv7QvbSbA1qdOdKWPWcXl1htqHn9rPU3O9jyLWZteIM%2Bsz06KjtZhsmWSfM6oCuQZa9gLRLyOxR%2BA6SE0l8aw%2BYcfVcgm0GpRMBYho88gQE9d5%2BCH%2B%2BbDnfGilLmFPXSmzI30jwVs76Tpcd2sLAv%2Bbw4dTTCEcyRI9goXgxM59hqAIPGuwz4XAbSgMJjy%2FcUGOqUBMIUj4IvvxpxGi%2FPLWlvuMb0kse9qLTFVyGYrl4I48WvdRw9FDNSSCNXUWxOqGRR8q9iWLGX92b3ytLGOK9Mh61%2BaVRmSEC%2BLZvuqs7%2BbPMrAx8q%2B1k9MtYkpuXMAvCiWwTDr9l9OmF8QtLOEuIjfgzwBxN%2FqhBUG%2Fl%2FVdBDQPsVwjTNsd4jeLhU%2F%2Fd1F8eyEJ4GeGfZWiDnkmSY9Z4PT8FoU%2BIOm&X-Amz-Signature=1aea36a660f633fc94432e2a22c88de1d3ce21d2d183db891572a3cd86b9cd04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635QRFA6Y%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIDk%2F82eekkNDyW6KbfrEkd6T%2BmcCWy2%2FbmAm6ymXq9sMAiEA1i8HOHw2PfCeeVlKR0U%2BGo%2FdkIQVKU9p9OMPcL6scJwqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdaBgkdcZ0o3IBWzircA7SJAmtqfRTQ%2F9firielYNXm2WWDLIniiKAX2rcgT593VNNqVuNrH6q1E34IJx5bwej0RM4NNAGncarFiLuSZgme8htsn3cAJF0cZxurQTk94nVQZellhAO%2BQ7TDoz9cuP6iYWzfQ2A88TW4bWxkovHI03WpKwjfLW%2FRjOjd4jnPVhnyNasUcTKU5NxFJ58XJ9GhaHvbypxq9J4vMLiI5Tsr8UOF7Y6qIkyQ0Gwmm9FFhqGsf0f8Qw7aAyJIRPQtypSXLpzoHGrSak%2BsQFE9D8jGIDwozTqh12NWH7DJp43L2h2v1C8SM0xAtVwSIreBSkl48zMxHjwkXlwrB3URbogeWN2bXEikN80HjT8qSwROARaJxLGjG%2B9k0FGRwGAINXLJ6CrRgbMeF7U6gjiLYQSkp37%2FsjHYMgBCQI6rDFN5oDXPIplfI7mCJjFdTr%2F4yAmQ9RL14IRsPDEjs%2FLNUwZ83oKEqheaDVctJOIBgHa56QHfdSW5O%2FnIIUNJSo6yCyRknUBMxg%2B2afXI%2FVBeicjN8RDL0upVNqlq9Z0Rcpd7mOiOFikpBO30xeSqoY0hOsDntGprlzFVVZPcsCYJtDlFnQoOgAHvE5C%2FcW96BJW9vX6yEwhQ2Pvd0tlvMMXy%2FcUGOqUByc2ZGoX8g4wMN%2BTiMHD6%2FVM8Xih45GxdLgwvv2mgjeHTLR35OoQ%2FEIGJFB9VK6B5I3mOk9JCHBB5O%2BdedcjFTnKTBZMSzlxtgMQUspYiHH8lxBawY3D%2FRodwOk97GfcDxEGbW0Xv60PXxtYMkQfUgfw16a5%2B4o5MrLlLlaQHNeS9jmdC1Hj6jQgrlagubl%2FtYUZsiFZ9ChxRmHgyTNpaPspUJ%2Bud&X-Amz-Signature=868e84f0bae20b41b19d14ee128a19cbc4b5323877ac37d4958a950fd376cbbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7NPW6QI%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIB3Xws9O7yD3qGQoFd%2BN62gjKVX1Hs1vrPSZUrBfExdtAiEAq0cMyxDo0g7aW0v%2FEod5ZJM9V1L%2BygpAyXMSsYwpIpEqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIWBm67pO%2BZAvXuFyrcA3xkEO9pYfv95pgY1tcDmX4bFNAxvZNqfYZIA5neD5AMmr02667k1YZ7xX%2FI6TiM8TRu95Xps4GZV28bhsKNuzzgb6%2BAr%2B%2FrvGemaupHZM8InGmAtUySwOdv549L9zLfH42EkGBoGecjalmKO%2FrqMLkihGyMGXIYBGO1lGsSWJBbinoN6LOoKAoxM0wDjglAIVjWJdIBWVtSC2yGih8pqpr2imcs5NzFyDKJLXA8aZErivqVvn%2B7rhldXDTXZ8OkC%2F3GDDOS0IZcp1x7p24OYEVjG7NbBz5s4Za9a61MDv9xFxl75webE4mdFUZM7EopZtTL8i0yqhPIHdpkLMLIlCeH%2BEn7phTCUCKugTkYkjWhEmO1sB5rjILff%2Fw2g7xqbavHpI2jrW%2FoRj%2BGNqatOchnQT8vBllhlXMrvRGSSVk%2FhMJlcge3tdZhJhjRzC2lyut4Fy5KjiF9msCqc0C%2FHcWqnTZ7SLeV8WByMFn%2FdXRTZe751bajrAYkNORPQfzNnl5yGTE8Fm05%2FK9S5%2FzHYgdvViRdniYJvAyYg8eMVi3JVRut0GPFRAhAAQ4AX%2Bt52CHv0izc5gIV1MgO9rn%2BiYE9e8IsFEUE1Y4sYNo0G3OfDG38Und2Q5Jmm2IEMJzy%2FcUGOqUBkNZSPJcds6l2j6Cduv3IsHvT3D7tEtyILNFMXRhTeMqy0ZIUNyOLr3zTa%2BZT3SRGQTVx%2F1FJ6tXlBOZjylYl5yHz7jo1G8a3ywuzyiZelB94yVD27NK8Y%2BhAPTdLeS3SyJRaQZipVihiVIEmazXHF5xd5oQm%2F7TYCr3Tbzf1FUzzoAKsMDZrCGv1fhN6gbFw9JW9K%2Fmhj0N9h6LcxDmM5kOrhwCW&X-Amz-Signature=fe83bdaeebc9fabf6184cd5479a2e039ad6a0a743840d9282126caab24e2d08c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635QRFA6Y%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIDk%2F82eekkNDyW6KbfrEkd6T%2BmcCWy2%2FbmAm6ymXq9sMAiEA1i8HOHw2PfCeeVlKR0U%2BGo%2FdkIQVKU9p9OMPcL6scJwqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdaBgkdcZ0o3IBWzircA7SJAmtqfRTQ%2F9firielYNXm2WWDLIniiKAX2rcgT593VNNqVuNrH6q1E34IJx5bwej0RM4NNAGncarFiLuSZgme8htsn3cAJF0cZxurQTk94nVQZellhAO%2BQ7TDoz9cuP6iYWzfQ2A88TW4bWxkovHI03WpKwjfLW%2FRjOjd4jnPVhnyNasUcTKU5NxFJ58XJ9GhaHvbypxq9J4vMLiI5Tsr8UOF7Y6qIkyQ0Gwmm9FFhqGsf0f8Qw7aAyJIRPQtypSXLpzoHGrSak%2BsQFE9D8jGIDwozTqh12NWH7DJp43L2h2v1C8SM0xAtVwSIreBSkl48zMxHjwkXlwrB3URbogeWN2bXEikN80HjT8qSwROARaJxLGjG%2B9k0FGRwGAINXLJ6CrRgbMeF7U6gjiLYQSkp37%2FsjHYMgBCQI6rDFN5oDXPIplfI7mCJjFdTr%2F4yAmQ9RL14IRsPDEjs%2FLNUwZ83oKEqheaDVctJOIBgHa56QHfdSW5O%2FnIIUNJSo6yCyRknUBMxg%2B2afXI%2FVBeicjN8RDL0upVNqlq9Z0Rcpd7mOiOFikpBO30xeSqoY0hOsDntGprlzFVVZPcsCYJtDlFnQoOgAHvE5C%2FcW96BJW9vX6yEwhQ2Pvd0tlvMMXy%2FcUGOqUByc2ZGoX8g4wMN%2BTiMHD6%2FVM8Xih45GxdLgwvv2mgjeHTLR35OoQ%2FEIGJFB9VK6B5I3mOk9JCHBB5O%2BdedcjFTnKTBZMSzlxtgMQUspYiHH8lxBawY3D%2FRodwOk97GfcDxEGbW0Xv60PXxtYMkQfUgfw16a5%2B4o5MrLlLlaQHNeS9jmdC1Hj6jQgrlagubl%2FtYUZsiFZ9ChxRmHgyTNpaPspUJ%2Bud&X-Amz-Signature=82f2a8bedc0b7fb975cae21f16e681b76ee872081ae3a153104eb71daa02ed28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YADCVOR%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDt%2FQQJ7n90zdcZ4Z4JQ6NA%2F8h%2B5fbTxGWabwfORpefugIgBewaGuC9CxUH%2BuTy%2F8qmtNyZnaeW9BmJZx%2Fp8DUv9I8qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrNoY%2F%2FXyWTTlB%2FNCrcA0SUdAHEig36bEX2F50rTawn6WQXsrYw7s1cSl5ZjC3w8CRrXFrp903DENJDrzNaNqSE6m6lnvQ7Sb5zOzLD1vc7EbkCfCiUB48g2t3Wg0iubcnXyjIBH1iGL6BuwayEwbkUy6nySw2ocFRAGyfWnpURAiS8jpLt4iMqQYFaDBZ%2Fr4URKoADB4U40ltOAu5S%2BHefAuJa7GPOyfk4h5b%2FshsQu1kMn1296U7do0%2FXgteT19VO3cQpPqTmBxYaHExYjxW3gIvl7tpRTiMKynLeiBvKpihEXTGVp5T859XG4OXIaflod%2FqIrTlPLirp9hDWFcaZ82pSr88i2RG9ogaTqa7Rf4JkKsJcdMgFUiejOA8eVFYQp2HuliLjESwQ5xh5d4puaA%2FLer%2FvJMrkxivrhsclbPpLJOgXiA40m3Z93jYFuasQv%2BmyFcmQIQ9Q2KCgF9l7v6i52MUXxCX8KCLycWt0CSc6O%2F%2Bf3L14rvkdwM%2Bx%2B0U0J2PJoS8S3LL%2BMcJVYGf5tfHquhYbXcO88vfwx74yvlVZnlnTyiWgm90%2FV4cehzPknPY%2BHqc9%2BK5qsEMkIoiAc90WuGEJXGgqzE5t5zLeoBXnMiYw7EOtagV7cH3NPtwEH87pdcNhSCopMNXz%2FcUGOqUB8GUGvc9NgVcvInF7ls7vjgJ%2FLpRQoJJyY1ubNbG0oR3%2BSc1mp2rIVZ8lMfVXy0S2RlCx5LoV1zq0xqSUUp77EZkpDnYgs53KhV5XYMdfimEC6zSUrMG7VsFQjmPAOzZ6FB2JAvdustChE9ByuICZIIa151FDm1s6lwrrcdRr9oZnhdwVOu%2FEJWmZv8evElchC6RVVvrNp7XikeZfHhQ%2FcKUUrRuJ&X-Amz-Signature=3c3ffc5205f5c0b2bf1a0fc7ecec50dfcc43d081793bf8ab549880de573fede9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635QRFA6Y%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIDk%2F82eekkNDyW6KbfrEkd6T%2BmcCWy2%2FbmAm6ymXq9sMAiEA1i8HOHw2PfCeeVlKR0U%2BGo%2FdkIQVKU9p9OMPcL6scJwqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdaBgkdcZ0o3IBWzircA7SJAmtqfRTQ%2F9firielYNXm2WWDLIniiKAX2rcgT593VNNqVuNrH6q1E34IJx5bwej0RM4NNAGncarFiLuSZgme8htsn3cAJF0cZxurQTk94nVQZellhAO%2BQ7TDoz9cuP6iYWzfQ2A88TW4bWxkovHI03WpKwjfLW%2FRjOjd4jnPVhnyNasUcTKU5NxFJ58XJ9GhaHvbypxq9J4vMLiI5Tsr8UOF7Y6qIkyQ0Gwmm9FFhqGsf0f8Qw7aAyJIRPQtypSXLpzoHGrSak%2BsQFE9D8jGIDwozTqh12NWH7DJp43L2h2v1C8SM0xAtVwSIreBSkl48zMxHjwkXlwrB3URbogeWN2bXEikN80HjT8qSwROARaJxLGjG%2B9k0FGRwGAINXLJ6CrRgbMeF7U6gjiLYQSkp37%2FsjHYMgBCQI6rDFN5oDXPIplfI7mCJjFdTr%2F4yAmQ9RL14IRsPDEjs%2FLNUwZ83oKEqheaDVctJOIBgHa56QHfdSW5O%2FnIIUNJSo6yCyRknUBMxg%2B2afXI%2FVBeicjN8RDL0upVNqlq9Z0Rcpd7mOiOFikpBO30xeSqoY0hOsDntGprlzFVVZPcsCYJtDlFnQoOgAHvE5C%2FcW96BJW9vX6yEwhQ2Pvd0tlvMMXy%2FcUGOqUByc2ZGoX8g4wMN%2BTiMHD6%2FVM8Xih45GxdLgwvv2mgjeHTLR35OoQ%2FEIGJFB9VK6B5I3mOk9JCHBB5O%2BdedcjFTnKTBZMSzlxtgMQUspYiHH8lxBawY3D%2FRodwOk97GfcDxEGbW0Xv60PXxtYMkQfUgfw16a5%2B4o5MrLlLlaQHNeS9jmdC1Hj6jQgrlagubl%2FtYUZsiFZ9ChxRmHgyTNpaPspUJ%2Bud&X-Amz-Signature=9d5badf43e2d1a6f70a1bcadce0359f14d01ec3e85ad214e3013a66f289ffd6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466243GEOVM%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFsvCos8ZUv3kpkktiEP6uEj4RyxCGFKHDRc5ruIhTKiAiBmztAvYTjKqOfLcya7P6bRVYVZUfPaeGtdbenottnQ9CqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD6fGw7d2bw8LPhD%2BKtwDcsbcLP6lgX%2FsVDqzmE4QJiLuXvWZ3fNJjiXnn1EU7nS5DNFyMpbQRGaqm5u2QokUhDmSqfICouWIDV%2F9w3xu4o2AeGovTLyvhyq4OxUxYiFq6WXFOg1W9XsYYPYyDLLlkgKdqD%2BLQHqMdXvGvVnH8GhzX4XykqGSRuCK5%2FFIdSgjeZaOrA8moSUzA5%2BgumoCJwOqLKjea5fieXf2kAWRBJq53UFgxvBoRvFyR%2B9RfGXtXv%2BP8%2BHQr0yKKEjsgTx631npAxQeEiZqqRMMwHwrJQC03XunN7MZwjnrU%2BrDnK8i0dsMmKl9OzWLIZnrnlDATZFEYwgm8AWI%2B%2Bv7nXRlWb3ZCT3vLM7qIaz8IrzQnPm4%2BJcMU44BbNMNqbRVIFUa7Q672gZ8dqLbI%2B%2B0qYjAQ3h0LiiOCcJ8ruem7nY7xO1OOpG%2FQi5kE6W1%2BxpgxsEqUfTLmNg6igdyLviPBlYZuEEy7Mxt2zQvI2p3yzqcBqv7Jw%2BTJcwnkoED476gMSO%2BaYUUFhrCAK44obcUAFmXr4OhxiX8mKhTqY2vxrKyHEvX%2FycJ6urR6Tc43yyeIJ%2FlLs6SZA8sUMJdiaHeI5DXaVla29cr8GPsYZ8viYm45slUStPeIBxWjh%2BSQFIwr%2FL9xQY6pgHq6RxsyZyTT3S5DzKKVgyXswkeUyhe3o0kU8Xr3qIt%2FSpF0DZ%2BHsDxXQXJ6luctA3wEL6BkUsZtel0ep0IhLecB%2FNR9LVAOuqS6EDps2g6h%2Fb7sxXTRlKPx611UBVDqZalI2DfAyUdkGUyfIaUWhq0l4E4dy3mQTSkVWp5rH%2Bm%2F87Jac8Gv%2BdMWzB%2BqqtZul4EEd4cC9sJosjuKR767Uy7v0MBbjKR&X-Amz-Signature=8b1a27bc494848122e8d205d0b806db8acc33df87a0455bc341157a6bb1b488f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635QRFA6Y%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIDk%2F82eekkNDyW6KbfrEkd6T%2BmcCWy2%2FbmAm6ymXq9sMAiEA1i8HOHw2PfCeeVlKR0U%2BGo%2FdkIQVKU9p9OMPcL6scJwqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdaBgkdcZ0o3IBWzircA7SJAmtqfRTQ%2F9firielYNXm2WWDLIniiKAX2rcgT593VNNqVuNrH6q1E34IJx5bwej0RM4NNAGncarFiLuSZgme8htsn3cAJF0cZxurQTk94nVQZellhAO%2BQ7TDoz9cuP6iYWzfQ2A88TW4bWxkovHI03WpKwjfLW%2FRjOjd4jnPVhnyNasUcTKU5NxFJ58XJ9GhaHvbypxq9J4vMLiI5Tsr8UOF7Y6qIkyQ0Gwmm9FFhqGsf0f8Qw7aAyJIRPQtypSXLpzoHGrSak%2BsQFE9D8jGIDwozTqh12NWH7DJp43L2h2v1C8SM0xAtVwSIreBSkl48zMxHjwkXlwrB3URbogeWN2bXEikN80HjT8qSwROARaJxLGjG%2B9k0FGRwGAINXLJ6CrRgbMeF7U6gjiLYQSkp37%2FsjHYMgBCQI6rDFN5oDXPIplfI7mCJjFdTr%2F4yAmQ9RL14IRsPDEjs%2FLNUwZ83oKEqheaDVctJOIBgHa56QHfdSW5O%2FnIIUNJSo6yCyRknUBMxg%2B2afXI%2FVBeicjN8RDL0upVNqlq9Z0Rcpd7mOiOFikpBO30xeSqoY0hOsDntGprlzFVVZPcsCYJtDlFnQoOgAHvE5C%2FcW96BJW9vX6yEwhQ2Pvd0tlvMMXy%2FcUGOqUByc2ZGoX8g4wMN%2BTiMHD6%2FVM8Xih45GxdLgwvv2mgjeHTLR35OoQ%2FEIGJFB9VK6B5I3mOk9JCHBB5O%2BdedcjFTnKTBZMSzlxtgMQUspYiHH8lxBawY3D%2FRodwOk97GfcDxEGbW0Xv60PXxtYMkQfUgfw16a5%2B4o5MrLlLlaQHNeS9jmdC1Hj6jQgrlagubl%2FtYUZsiFZ9ChxRmHgyTNpaPspUJ%2Bud&X-Amz-Signature=cf95e0fc00155f9899be930d8a8c460c9f77bc076a79b5d0c75562f0b8df3a8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRI7KUMF%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIELCeqYM3Wi60CnXl8LWowr1BeKFzt%2FcCzmVlAnvawj5AiEAni6RbcHgU9cUc3jyzOMjb1iXD4KJhpkA1U1CM%2BXdVIQqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7SfcvPt1NwO63%2FgSrcA0H3FBMdWKIvVdvhFgbuaOtShuqBE%2B%2F7UPbcnA2LO%2BkgwQJHI7Ug4AZ3uPurjiN6tIOQxJoOJn8SaNz0u8703c2noiT%2BQacSRRqKR0cgjvXgUVIW4w12BHJ7bFKFWjhPWV%2FosL2HiISTF5bs%2Bq69vhCd200o7IE3oLbPEHqC%2FL2XCYyhjaEqaUw75uyKPT3DrpepvbGiBrD2k9%2Fe9MEEPHpcsZzE8AEvw%2FH9zzLJcKKpeWoZAF53u%2BNFvhMGHQTTF5hRr7ls3qsunsSivxL1PAlc9d1qTE9Mc5IBbCRa3O25GXoaMCe2uhZCbRisI51EZOshtfHzs5Wf%2B85jGKoJm9b6W4%2Bjh3MC3S8EJIHmA%2Fau%2Fzf%2FRwhK58n9MbPOvFVWDjK6GP3AADmxkGGKzPdr2hsjSAaZifQRFsmjyhX62y%2FsNEoPBvTHTWnXFtAg9e2NMz1XfmwkwkBVKnGRNikhTISm8tYUcyG9Qe6klq0UJQC%2FuC5Q0aowFQWplqsHPnyflx7lQntKnsjsM3VXQV9rzIRCe6CE0JkUAM%2BBXrQiS9qQ6HwNE1e9yx9%2BuRrOVV3zHMD%2BydivGLWuwTPmdbqjTB64Q7NngpW8srPNdV1TIoVHygXXk6uPO9D86oOKMJXy%2FcUGOqUBR%2B4h1yO40vkLXX6CrRjWM8Uwa53vhSVcJrn29EcvEeg4ay9c2uk9rZs8WT4JURM03BioEa5ap04hnuvYHKlKsEzuBEjlfIlj4z%2BO1ohk3V3RUf72W9Aoman8ejSfq%2Bzqxg5NyNKadKXlmqXnrz%2FORmTPvO4UQG0IWL1ZQi5d0HQpVGHkMsT8EXolHFwjEmZF1aHIl%2Ft3gEhGRaQZl2%2By52iFVsEr&X-Amz-Signature=f001207ffb50ac462cf15f41d962080d95f863f6c023358ffe452b14d45013c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFMY7LND%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIDoLN3sOlM%2F8RSSl%2FzDAGrfynuY47NMMMLlxiX6iaMavAiEA50nWb1SqP2YmrGj7UAvkNr2px2af5VH9WKCJviNEk1MqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYJ1AxB3WEtEhF4FyrcA7xmFjZHa0I0PfHkxXIx2tJyz8mopcpqQWOOTJHjynaW%2Fhi0bO%2F%2BE5ovmGtX1SpX%2BklZRNeUszUDBqOXMkcT0fofkzYftyOjVmhy7NzX81OkhmFyOBxTQP0G5gOiX3jqFe1mEvM5C9UDYiQgxVrDnmX%2FuuoYaeGXfAhIoIqmjZqOlWZ49jSqMXi4K%2BVsVbhCO7E4dPkkanoqAq2CFUYqrUvz9fujqy9hFMcqwNOWCbAhJBzmwDR3KNkn%2BfePopUii3mkHulQkDSOUMAik9EmM%2FMkv1NbdBSZDsCeXpWUbGhPe5xjZ7ONJyMI%2BfSy7CS2w1OVFIcqeZN4wU%2FGlnT%2BUje2y6x622jym3FPlKmbPEfOm31t%2BLp6nQlfYW3%2Bmt1y8%2FIMk1Zj84jHgm%2FT6zTYGbc3fYG0FyQ3OCqptrlhDXza8cdTu2%2Bkp3aTXYFCI%2FsdJsBf4Lc1Cj1jlLBPcAjjjx5MFnfPoucaplAFYb6zUxARcYw7j5UM6nqfHnFFE82n%2BL5SAkSh6zT2rlc%2BAZPSU8Atdud%2FsVJmXtgld%2B1cTO5TTGDYqL8hm%2F2SITyLF2WsK1VAXxCjJMgfJtelr9KOy%2FgTlHNCcIFDkP53j1gie7%2FwVEQyIuq5YOG2gmthMO%2Fy%2FcUGOqUB7gvfaxbds8E7Ms5y971axc6n0FHB8lHHwnj1MWDc2z9E3s5Ys9ThvmRvANsUadF8KL%2BcJWkMecxzZoUDqdxp1Jors%2BbwNBwAEHLbUeBBJor%2FxkNHB9u3SL%2B6XCdstFW4Xt60IOKrTkcnvq1OGLIJASRxCp3kYeqWdnhi0vAr6Xqy3vCn98rK6%2FpxLE6Z0QT2Mju%2BqsGcDLpVOF2cPy6yjADS6yA%2F&X-Amz-Signature=59ed7623ce72e1b29b4c449f4a83a37e2db072e34d84fe6d47256fe58cbf483a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3C6JP44%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC%2BNcHWVJ86nQprZn%2FR5MWjhMiGvF1DMsRL%2BHMpM70hSAIgPCtfhVovIFKLIMgHUALfO1LX5q%2FEMumSVtdCzwyyDccqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIFXfz4hK50len3JyrcA2ONtXamFQ%2BNcEJsHrPVq26on8nxIbrVt%2BCIMQ5TDjJh7GVbbwG%2FolloExWw1GUJHCYYQ66bgMMlw5b5XC7ntQhIIy%2Bkgls5oa%2FkEX1FwAXUryMJ37N5gvdMGiMeB8O%2BhEhNBb8ro9UXVk4llisYMURhrY6Nfpy3Vf%2F%2FFhTKuGiJA0rhSCipd9I%2FNHqGyapsdl3N%2Bjow1hdd4rORQgi0W6qZMambUmpGZj1Ro8KOYKajv%2B%2FntPfVw0VLE5bAVlieq%2BT1OhXRlh8jzaP%2B40X2VXHscH%2FvkPE4u9HpzU4qy5vY1c%2BwT0gESmgBr54PypfOPXYtM%2FZK6BHsFJ%2F54QccZzmys5XS0MIWFwCBjXfIhpF7ChQ5hM5hlafWtQGhyIMj44NnPrz3LhObDKc9xnKgEMwST8XJyazSWrNqVUS20rL6du5HZlCpV0MABZbBF2q9JnJSGIGgNvZyhmhqaBBI3db%2Bza19PWUYZNxYjAlttR8hV4oFJTJF%2FtKXjSqz1zQ0bIiiKTYaRpJF5wCg5DWNwGhltBhRBJWxWqGrZhEEYcE0WJnPrbvf%2BwlmWsZzhzJJVMFbKVyAdDPSbsIg6Qfvdvtgv5PujpxFLQmcZgUZlAZmOK%2BphGTgdeHe914fMJDz%2FcUGOqUBtCH2EIA3W8x9YWF1VkAANlhc8zBbEtnK%2BfElPg2LfcxP8XWRU5EP6TZEmQoLtRViuJOS3PT2LZ3NWz3hsufEk4nyye3Ylkk%2FdCxPSlxEO0OChKpfiqCaCnWA%2B15UMoTrrMCy%2Bss2akxPaOIXv62iY6ZKa7jEFYE8QY8jfY%2BjTOmGFAGT42xA5ulYC0VslSf54EJMl81z%2FQe96I15VKYlba2651IN&X-Amz-Signature=caac767732d7f7752a822abc1c137e5dc1d5bad52b703f22f6504b926828aa23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635QRFA6Y%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIDk%2F82eekkNDyW6KbfrEkd6T%2BmcCWy2%2FbmAm6ymXq9sMAiEA1i8HOHw2PfCeeVlKR0U%2BGo%2FdkIQVKU9p9OMPcL6scJwqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdaBgkdcZ0o3IBWzircA7SJAmtqfRTQ%2F9firielYNXm2WWDLIniiKAX2rcgT593VNNqVuNrH6q1E34IJx5bwej0RM4NNAGncarFiLuSZgme8htsn3cAJF0cZxurQTk94nVQZellhAO%2BQ7TDoz9cuP6iYWzfQ2A88TW4bWxkovHI03WpKwjfLW%2FRjOjd4jnPVhnyNasUcTKU5NxFJ58XJ9GhaHvbypxq9J4vMLiI5Tsr8UOF7Y6qIkyQ0Gwmm9FFhqGsf0f8Qw7aAyJIRPQtypSXLpzoHGrSak%2BsQFE9D8jGIDwozTqh12NWH7DJp43L2h2v1C8SM0xAtVwSIreBSkl48zMxHjwkXlwrB3URbogeWN2bXEikN80HjT8qSwROARaJxLGjG%2B9k0FGRwGAINXLJ6CrRgbMeF7U6gjiLYQSkp37%2FsjHYMgBCQI6rDFN5oDXPIplfI7mCJjFdTr%2F4yAmQ9RL14IRsPDEjs%2FLNUwZ83oKEqheaDVctJOIBgHa56QHfdSW5O%2FnIIUNJSo6yCyRknUBMxg%2B2afXI%2FVBeicjN8RDL0upVNqlq9Z0Rcpd7mOiOFikpBO30xeSqoY0hOsDntGprlzFVVZPcsCYJtDlFnQoOgAHvE5C%2FcW96BJW9vX6yEwhQ2Pvd0tlvMMXy%2FcUGOqUByc2ZGoX8g4wMN%2BTiMHD6%2FVM8Xih45GxdLgwvv2mgjeHTLR35OoQ%2FEIGJFB9VK6B5I3mOk9JCHBB5O%2BdedcjFTnKTBZMSzlxtgMQUspYiHH8lxBawY3D%2FRodwOk97GfcDxEGbW0Xv60PXxtYMkQfUgfw16a5%2B4o5MrLlLlaQHNeS9jmdC1Hj6jQgrlagubl%2FtYUZsiFZ9ChxRmHgyTNpaPspUJ%2Bud&X-Amz-Signature=13366c2d98a359df3530c59d155e579db19bbc5d809a8f0f117994f38ce7677f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635QRFA6Y%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIDk%2F82eekkNDyW6KbfrEkd6T%2BmcCWy2%2FbmAm6ymXq9sMAiEA1i8HOHw2PfCeeVlKR0U%2BGo%2FdkIQVKU9p9OMPcL6scJwqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdaBgkdcZ0o3IBWzircA7SJAmtqfRTQ%2F9firielYNXm2WWDLIniiKAX2rcgT593VNNqVuNrH6q1E34IJx5bwej0RM4NNAGncarFiLuSZgme8htsn3cAJF0cZxurQTk94nVQZellhAO%2BQ7TDoz9cuP6iYWzfQ2A88TW4bWxkovHI03WpKwjfLW%2FRjOjd4jnPVhnyNasUcTKU5NxFJ58XJ9GhaHvbypxq9J4vMLiI5Tsr8UOF7Y6qIkyQ0Gwmm9FFhqGsf0f8Qw7aAyJIRPQtypSXLpzoHGrSak%2BsQFE9D8jGIDwozTqh12NWH7DJp43L2h2v1C8SM0xAtVwSIreBSkl48zMxHjwkXlwrB3URbogeWN2bXEikN80HjT8qSwROARaJxLGjG%2B9k0FGRwGAINXLJ6CrRgbMeF7U6gjiLYQSkp37%2FsjHYMgBCQI6rDFN5oDXPIplfI7mCJjFdTr%2F4yAmQ9RL14IRsPDEjs%2FLNUwZ83oKEqheaDVctJOIBgHa56QHfdSW5O%2FnIIUNJSo6yCyRknUBMxg%2B2afXI%2FVBeicjN8RDL0upVNqlq9Z0Rcpd7mOiOFikpBO30xeSqoY0hOsDntGprlzFVVZPcsCYJtDlFnQoOgAHvE5C%2FcW96BJW9vX6yEwhQ2Pvd0tlvMMXy%2FcUGOqUByc2ZGoX8g4wMN%2BTiMHD6%2FVM8Xih45GxdLgwvv2mgjeHTLR35OoQ%2FEIGJFB9VK6B5I3mOk9JCHBB5O%2BdedcjFTnKTBZMSzlxtgMQUspYiHH8lxBawY3D%2FRodwOk97GfcDxEGbW0Xv60PXxtYMkQfUgfw16a5%2B4o5MrLlLlaQHNeS9jmdC1Hj6jQgrlagubl%2FtYUZsiFZ9ChxRmHgyTNpaPspUJ%2Bud&X-Amz-Signature=f414db06d764268ebc7b3c021cdd8702c3081d7b471088633d09b5c61777ab03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKPVUE2P%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDwNjEyFqFiXi9DQW9E18F4RkqeUCbpuRVKI4MN6AyfbgIhAMRFqDG8IpL%2F%2BmNzZ1D9vK7AN9%2FxT%2F1yjAETlx4HztWYKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9nBdDLByHUgCaZmgq3AMUZVpyo9mrYkwQayQB16MDOYLG4ORJMi%2BnKrBkMibwVYuA6J3RUIhSc%2B%2FFaDjNId3EySOJW3CWWB3ImKruSHaMf%2FvCPxOA1yl3f7fqiFwlNs6e4h%2F7NtBn1L9dIcfyo%2FofCt%2F1TnExdXtmLVj%2B2oNAZFMYJdTsceDthb1Oyc1XBxff%2FzGWdNdAkPWe1qbBguiDenwEEBgmsAgskGVjy%2FLcsE15eu%2F4ShDOtij1iJ0QfoJ688wS45PAl%2BTXaRtbl7HItYbEO0yw4%2FtKvYzALdDARBFpIkTleAD%2BApF4reO2QNimaufcPs2873lrz%2F7Ig%2F%2BAtsJnD56fneOzlj6h9R%2B5vKcciEJAwaGR53CqVcNJA43xh3jD5vVomDG%2BNXY%2BZlvtLdFkpgrtZMemBQD6S4jz2qfhvfjX9LXcLFqFxry7%2FrdM4Kbnjm6YgQt6dl%2F%2F7Heqp2dwL4q3agpfysGBLsTv3SPNq82Q1r0iL3LEUXap0rJgXfaTzKz10I2Fw%2FKtCTtJSQYa8yZw4c0juHUQr57RAnYK1mG%2Ft1ZTwfLCMuHMGRV1Mbg0nW1CMKLOAvi9rKBc8PdDzlgQmVV3XuiIg9KQUYLrSoQIp46vFUg4R4WEWF2JQF9a7XqGEpBQBTDB8v3FBjqkAezPkLgsmX5ZE0cl5MvFogkVx6qJ8OhTjs4bufT%2BnmxBCqtRJgQWn%2FMvV90RHkzk1uMlQ7Q886bsD3gakZn3vWsBlZ9OXsRMo8H9%2Fg7or%2Fb8%2BepP5Cy3Vv9axb1RdPNQxIlt50LbKpYiQGhef65PePi52y42z9c6S3uALRwi1hu%2F5lnz0B%2BGvnr%2FphGOkXJZvYqiGFa2XNP4R4TMcDYpjGEp3%2Fnb&X-Amz-Signature=bd947ce2b18094d3b6bfbf024a7b3a4180e795a2ea652943f968f4973c08aacc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKPVUE2P%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDwNjEyFqFiXi9DQW9E18F4RkqeUCbpuRVKI4MN6AyfbgIhAMRFqDG8IpL%2F%2BmNzZ1D9vK7AN9%2FxT%2F1yjAETlx4HztWYKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9nBdDLByHUgCaZmgq3AMUZVpyo9mrYkwQayQB16MDOYLG4ORJMi%2BnKrBkMibwVYuA6J3RUIhSc%2B%2FFaDjNId3EySOJW3CWWB3ImKruSHaMf%2FvCPxOA1yl3f7fqiFwlNs6e4h%2F7NtBn1L9dIcfyo%2FofCt%2F1TnExdXtmLVj%2B2oNAZFMYJdTsceDthb1Oyc1XBxff%2FzGWdNdAkPWe1qbBguiDenwEEBgmsAgskGVjy%2FLcsE15eu%2F4ShDOtij1iJ0QfoJ688wS45PAl%2BTXaRtbl7HItYbEO0yw4%2FtKvYzALdDARBFpIkTleAD%2BApF4reO2QNimaufcPs2873lrz%2F7Ig%2F%2BAtsJnD56fneOzlj6h9R%2B5vKcciEJAwaGR53CqVcNJA43xh3jD5vVomDG%2BNXY%2BZlvtLdFkpgrtZMemBQD6S4jz2qfhvfjX9LXcLFqFxry7%2FrdM4Kbnjm6YgQt6dl%2F%2F7Heqp2dwL4q3agpfysGBLsTv3SPNq82Q1r0iL3LEUXap0rJgXfaTzKz10I2Fw%2FKtCTtJSQYa8yZw4c0juHUQr57RAnYK1mG%2Ft1ZTwfLCMuHMGRV1Mbg0nW1CMKLOAvi9rKBc8PdDzlgQmVV3XuiIg9KQUYLrSoQIp46vFUg4R4WEWF2JQF9a7XqGEpBQBTDB8v3FBjqkAezPkLgsmX5ZE0cl5MvFogkVx6qJ8OhTjs4bufT%2BnmxBCqtRJgQWn%2FMvV90RHkzk1uMlQ7Q886bsD3gakZn3vWsBlZ9OXsRMo8H9%2Fg7or%2Fb8%2BepP5Cy3Vv9axb1RdPNQxIlt50LbKpYiQGhef65PePi52y42z9c6S3uALRwi1hu%2F5lnz0B%2BGvnr%2FphGOkXJZvYqiGFa2XNP4R4TMcDYpjGEp3%2Fnb&X-Amz-Signature=eef016d9c85ed0b68cc3232f8c20823b3a37b1ddd07d11acf35463b19c61cc68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKPVUE2P%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDwNjEyFqFiXi9DQW9E18F4RkqeUCbpuRVKI4MN6AyfbgIhAMRFqDG8IpL%2F%2BmNzZ1D9vK7AN9%2FxT%2F1yjAETlx4HztWYKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9nBdDLByHUgCaZmgq3AMUZVpyo9mrYkwQayQB16MDOYLG4ORJMi%2BnKrBkMibwVYuA6J3RUIhSc%2B%2FFaDjNId3EySOJW3CWWB3ImKruSHaMf%2FvCPxOA1yl3f7fqiFwlNs6e4h%2F7NtBn1L9dIcfyo%2FofCt%2F1TnExdXtmLVj%2B2oNAZFMYJdTsceDthb1Oyc1XBxff%2FzGWdNdAkPWe1qbBguiDenwEEBgmsAgskGVjy%2FLcsE15eu%2F4ShDOtij1iJ0QfoJ688wS45PAl%2BTXaRtbl7HItYbEO0yw4%2FtKvYzALdDARBFpIkTleAD%2BApF4reO2QNimaufcPs2873lrz%2F7Ig%2F%2BAtsJnD56fneOzlj6h9R%2B5vKcciEJAwaGR53CqVcNJA43xh3jD5vVomDG%2BNXY%2BZlvtLdFkpgrtZMemBQD6S4jz2qfhvfjX9LXcLFqFxry7%2FrdM4Kbnjm6YgQt6dl%2F%2F7Heqp2dwL4q3agpfysGBLsTv3SPNq82Q1r0iL3LEUXap0rJgXfaTzKz10I2Fw%2FKtCTtJSQYa8yZw4c0juHUQr57RAnYK1mG%2Ft1ZTwfLCMuHMGRV1Mbg0nW1CMKLOAvi9rKBc8PdDzlgQmVV3XuiIg9KQUYLrSoQIp46vFUg4R4WEWF2JQF9a7XqGEpBQBTDB8v3FBjqkAezPkLgsmX5ZE0cl5MvFogkVx6qJ8OhTjs4bufT%2BnmxBCqtRJgQWn%2FMvV90RHkzk1uMlQ7Q886bsD3gakZn3vWsBlZ9OXsRMo8H9%2Fg7or%2Fb8%2BepP5Cy3Vv9axb1RdPNQxIlt50LbKpYiQGhef65PePi52y42z9c6S3uALRwi1hu%2F5lnz0B%2BGvnr%2FphGOkXJZvYqiGFa2XNP4R4TMcDYpjGEp3%2Fnb&X-Amz-Signature=4561a697fb9a3f91b6d20e557ba87e1c7076fa85fb5529dc1e985e202e8965ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKPVUE2P%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDwNjEyFqFiXi9DQW9E18F4RkqeUCbpuRVKI4MN6AyfbgIhAMRFqDG8IpL%2F%2BmNzZ1D9vK7AN9%2FxT%2F1yjAETlx4HztWYKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9nBdDLByHUgCaZmgq3AMUZVpyo9mrYkwQayQB16MDOYLG4ORJMi%2BnKrBkMibwVYuA6J3RUIhSc%2B%2FFaDjNId3EySOJW3CWWB3ImKruSHaMf%2FvCPxOA1yl3f7fqiFwlNs6e4h%2F7NtBn1L9dIcfyo%2FofCt%2F1TnExdXtmLVj%2B2oNAZFMYJdTsceDthb1Oyc1XBxff%2FzGWdNdAkPWe1qbBguiDenwEEBgmsAgskGVjy%2FLcsE15eu%2F4ShDOtij1iJ0QfoJ688wS45PAl%2BTXaRtbl7HItYbEO0yw4%2FtKvYzALdDARBFpIkTleAD%2BApF4reO2QNimaufcPs2873lrz%2F7Ig%2F%2BAtsJnD56fneOzlj6h9R%2B5vKcciEJAwaGR53CqVcNJA43xh3jD5vVomDG%2BNXY%2BZlvtLdFkpgrtZMemBQD6S4jz2qfhvfjX9LXcLFqFxry7%2FrdM4Kbnjm6YgQt6dl%2F%2F7Heqp2dwL4q3agpfysGBLsTv3SPNq82Q1r0iL3LEUXap0rJgXfaTzKz10I2Fw%2FKtCTtJSQYa8yZw4c0juHUQr57RAnYK1mG%2Ft1ZTwfLCMuHMGRV1Mbg0nW1CMKLOAvi9rKBc8PdDzlgQmVV3XuiIg9KQUYLrSoQIp46vFUg4R4WEWF2JQF9a7XqGEpBQBTDB8v3FBjqkAezPkLgsmX5ZE0cl5MvFogkVx6qJ8OhTjs4bufT%2BnmxBCqtRJgQWn%2FMvV90RHkzk1uMlQ7Q886bsD3gakZn3vWsBlZ9OXsRMo8H9%2Fg7or%2Fb8%2BepP5Cy3Vv9axb1RdPNQxIlt50LbKpYiQGhef65PePi52y42z9c6S3uALRwi1hu%2F5lnz0B%2BGvnr%2FphGOkXJZvYqiGFa2XNP4R4TMcDYpjGEp3%2Fnb&X-Amz-Signature=e58287bdf4f3d262dc4947f7c6235b46a3eff3fc1d7a0c1d6ad57ae8dad482fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS5CRJ6J%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCNOitE%2BdTDde6rnU6yYQFSCyfU3876GX04OCt3UwKKQgIgR2HmjWHdIM7p5bTuqan4fTfWVIa6AT5nYv%2Fi7kqEfSoqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvDngYvGPBjPjmSQyrcA2Z6zF5yTdqgZ61D6WtqaJ2xh4DgxgSUVmkZi8XKka0EbTs0rEvCfWnrwsMpzjCD%2BYjnqo9wbUy%2FRd09u4Qfq4%2BCvYGIytQYY7SnPxXKhmhekTZTyBacCzFn5V2y9QsgmtjCLtQVbXBX%2BK3R4iGL19VwXfRs4fUyamRMKJn2DVUoPX9cvc3MLHOM13kJXMHRffqEc4Wqs9r7DVqwLMq4MRKMqxBF%2FDCmy2eMrW3wd%2F9UvK5gWDmL3YyiKluN8FkxiQoX%2B7t5zkxNTdC2vzNcL9QxMEtZ4GOM4CxrYniE%2FwmSczKxlF7OZ3TJWazqOGawQgyNvorOQJhG8KuGxbDuul8w6aj1EC9h2K3IO1PpDoZ4lrEXJut6Hajp2iKwtD%2B07hxhiMc90mmku9T5DJVE2gbFH6PUSB8mbUZv5Jbc35iWkq%2BBqakGdXwx%2BQv%2FkZxKsKcKmlTycj7p4U4hCEtl1XnDfrnR%2Bw7wj%2BGFWzHpNHUsIiHQOpC0qG3cg5%2FV1o3faiBAlmShiJ%2FzZsoJmV1F35YTgfMUCTmRiLqY5bdom%2FN9LyYYYDJy35DQg%2BV9JYaSMoNuuI0a20pw%2BH5onOJbb3sRRBuIdLA7AiIVabt7VwUzII1SSYi2M4xwCf2tMMbz%2FcUGOqUBIxXq0ntCUTeSHIcNoZwpmu5LHS8bTkNkS4NRFO1xrg89S5sT1aPDqBZRby0EJc7L%2BI%2FIHKey1vsRmG95O8H%2FKBiDo27Qy2CMWwHPigFHxRBr2zNJd4alEe%2F8czWITNHpWpL4jy8FRGLLeQH%2FfbwuTpu3o30ET0rRelr%2BVsv5Ok%2FV3gBEFguQfDf0o9q0LGyKT%2BtLexr7LQBwIRI4e3qrILif96S0&X-Amz-Signature=90c16c7124106f502ef077643b39eb0553e9f381a5f4bdc5541b755d8dc90119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKPVUE2P%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDwNjEyFqFiXi9DQW9E18F4RkqeUCbpuRVKI4MN6AyfbgIhAMRFqDG8IpL%2F%2BmNzZ1D9vK7AN9%2FxT%2F1yjAETlx4HztWYKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9nBdDLByHUgCaZmgq3AMUZVpyo9mrYkwQayQB16MDOYLG4ORJMi%2BnKrBkMibwVYuA6J3RUIhSc%2B%2FFaDjNId3EySOJW3CWWB3ImKruSHaMf%2FvCPxOA1yl3f7fqiFwlNs6e4h%2F7NtBn1L9dIcfyo%2FofCt%2F1TnExdXtmLVj%2B2oNAZFMYJdTsceDthb1Oyc1XBxff%2FzGWdNdAkPWe1qbBguiDenwEEBgmsAgskGVjy%2FLcsE15eu%2F4ShDOtij1iJ0QfoJ688wS45PAl%2BTXaRtbl7HItYbEO0yw4%2FtKvYzALdDARBFpIkTleAD%2BApF4reO2QNimaufcPs2873lrz%2F7Ig%2F%2BAtsJnD56fneOzlj6h9R%2B5vKcciEJAwaGR53CqVcNJA43xh3jD5vVomDG%2BNXY%2BZlvtLdFkpgrtZMemBQD6S4jz2qfhvfjX9LXcLFqFxry7%2FrdM4Kbnjm6YgQt6dl%2F%2F7Heqp2dwL4q3agpfysGBLsTv3SPNq82Q1r0iL3LEUXap0rJgXfaTzKz10I2Fw%2FKtCTtJSQYa8yZw4c0juHUQr57RAnYK1mG%2Ft1ZTwfLCMuHMGRV1Mbg0nW1CMKLOAvi9rKBc8PdDzlgQmVV3XuiIg9KQUYLrSoQIp46vFUg4R4WEWF2JQF9a7XqGEpBQBTDB8v3FBjqkAezPkLgsmX5ZE0cl5MvFogkVx6qJ8OhTjs4bufT%2BnmxBCqtRJgQWn%2FMvV90RHkzk1uMlQ7Q886bsD3gakZn3vWsBlZ9OXsRMo8H9%2Fg7or%2Fb8%2BepP5Cy3Vv9axb1RdPNQxIlt50LbKpYiQGhef65PePi52y42z9c6S3uALRwi1hu%2F5lnz0B%2BGvnr%2FphGOkXJZvYqiGFa2XNP4R4TMcDYpjGEp3%2Fnb&X-Amz-Signature=93f3221dd629d1bc0b94df3452cca6278cdea1bf0dc899b8513a3480647c8ccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKPVUE2P%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDwNjEyFqFiXi9DQW9E18F4RkqeUCbpuRVKI4MN6AyfbgIhAMRFqDG8IpL%2F%2BmNzZ1D9vK7AN9%2FxT%2F1yjAETlx4HztWYKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9nBdDLByHUgCaZmgq3AMUZVpyo9mrYkwQayQB16MDOYLG4ORJMi%2BnKrBkMibwVYuA6J3RUIhSc%2B%2FFaDjNId3EySOJW3CWWB3ImKruSHaMf%2FvCPxOA1yl3f7fqiFwlNs6e4h%2F7NtBn1L9dIcfyo%2FofCt%2F1TnExdXtmLVj%2B2oNAZFMYJdTsceDthb1Oyc1XBxff%2FzGWdNdAkPWe1qbBguiDenwEEBgmsAgskGVjy%2FLcsE15eu%2F4ShDOtij1iJ0QfoJ688wS45PAl%2BTXaRtbl7HItYbEO0yw4%2FtKvYzALdDARBFpIkTleAD%2BApF4reO2QNimaufcPs2873lrz%2F7Ig%2F%2BAtsJnD56fneOzlj6h9R%2B5vKcciEJAwaGR53CqVcNJA43xh3jD5vVomDG%2BNXY%2BZlvtLdFkpgrtZMemBQD6S4jz2qfhvfjX9LXcLFqFxry7%2FrdM4Kbnjm6YgQt6dl%2F%2F7Heqp2dwL4q3agpfysGBLsTv3SPNq82Q1r0iL3LEUXap0rJgXfaTzKz10I2Fw%2FKtCTtJSQYa8yZw4c0juHUQr57RAnYK1mG%2Ft1ZTwfLCMuHMGRV1Mbg0nW1CMKLOAvi9rKBc8PdDzlgQmVV3XuiIg9KQUYLrSoQIp46vFUg4R4WEWF2JQF9a7XqGEpBQBTDB8v3FBjqkAezPkLgsmX5ZE0cl5MvFogkVx6qJ8OhTjs4bufT%2BnmxBCqtRJgQWn%2FMvV90RHkzk1uMlQ7Q886bsD3gakZn3vWsBlZ9OXsRMo8H9%2Fg7or%2Fb8%2BepP5Cy3Vv9axb1RdPNQxIlt50LbKpYiQGhef65PePi52y42z9c6S3uALRwi1hu%2F5lnz0B%2BGvnr%2FphGOkXJZvYqiGFa2XNP4R4TMcDYpjGEp3%2Fnb&X-Amz-Signature=9d5c3c3ac4d4edaae05f7c0c0180749d0830552f8997410fad4852ab3c314391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKPVUE2P%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDwNjEyFqFiXi9DQW9E18F4RkqeUCbpuRVKI4MN6AyfbgIhAMRFqDG8IpL%2F%2BmNzZ1D9vK7AN9%2FxT%2F1yjAETlx4HztWYKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9nBdDLByHUgCaZmgq3AMUZVpyo9mrYkwQayQB16MDOYLG4ORJMi%2BnKrBkMibwVYuA6J3RUIhSc%2B%2FFaDjNId3EySOJW3CWWB3ImKruSHaMf%2FvCPxOA1yl3f7fqiFwlNs6e4h%2F7NtBn1L9dIcfyo%2FofCt%2F1TnExdXtmLVj%2B2oNAZFMYJdTsceDthb1Oyc1XBxff%2FzGWdNdAkPWe1qbBguiDenwEEBgmsAgskGVjy%2FLcsE15eu%2F4ShDOtij1iJ0QfoJ688wS45PAl%2BTXaRtbl7HItYbEO0yw4%2FtKvYzALdDARBFpIkTleAD%2BApF4reO2QNimaufcPs2873lrz%2F7Ig%2F%2BAtsJnD56fneOzlj6h9R%2B5vKcciEJAwaGR53CqVcNJA43xh3jD5vVomDG%2BNXY%2BZlvtLdFkpgrtZMemBQD6S4jz2qfhvfjX9LXcLFqFxry7%2FrdM4Kbnjm6YgQt6dl%2F%2F7Heqp2dwL4q3agpfysGBLsTv3SPNq82Q1r0iL3LEUXap0rJgXfaTzKz10I2Fw%2FKtCTtJSQYa8yZw4c0juHUQr57RAnYK1mG%2Ft1ZTwfLCMuHMGRV1Mbg0nW1CMKLOAvi9rKBc8PdDzlgQmVV3XuiIg9KQUYLrSoQIp46vFUg4R4WEWF2JQF9a7XqGEpBQBTDB8v3FBjqkAezPkLgsmX5ZE0cl5MvFogkVx6qJ8OhTjs4bufT%2BnmxBCqtRJgQWn%2FMvV90RHkzk1uMlQ7Q886bsD3gakZn3vWsBlZ9OXsRMo8H9%2Fg7or%2Fb8%2BepP5Cy3Vv9axb1RdPNQxIlt50LbKpYiQGhef65PePi52y42z9c6S3uALRwi1hu%2F5lnz0B%2BGvnr%2FphGOkXJZvYqiGFa2XNP4R4TMcDYpjGEp3%2Fnb&X-Amz-Signature=4561a697fb9a3f91b6d20e557ba87e1c7076fa85fb5529dc1e985e202e8965ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKPVUE2P%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDwNjEyFqFiXi9DQW9E18F4RkqeUCbpuRVKI4MN6AyfbgIhAMRFqDG8IpL%2F%2BmNzZ1D9vK7AN9%2FxT%2F1yjAETlx4HztWYKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9nBdDLByHUgCaZmgq3AMUZVpyo9mrYkwQayQB16MDOYLG4ORJMi%2BnKrBkMibwVYuA6J3RUIhSc%2B%2FFaDjNId3EySOJW3CWWB3ImKruSHaMf%2FvCPxOA1yl3f7fqiFwlNs6e4h%2F7NtBn1L9dIcfyo%2FofCt%2F1TnExdXtmLVj%2B2oNAZFMYJdTsceDthb1Oyc1XBxff%2FzGWdNdAkPWe1qbBguiDenwEEBgmsAgskGVjy%2FLcsE15eu%2F4ShDOtij1iJ0QfoJ688wS45PAl%2BTXaRtbl7HItYbEO0yw4%2FtKvYzALdDARBFpIkTleAD%2BApF4reO2QNimaufcPs2873lrz%2F7Ig%2F%2BAtsJnD56fneOzlj6h9R%2B5vKcciEJAwaGR53CqVcNJA43xh3jD5vVomDG%2BNXY%2BZlvtLdFkpgrtZMemBQD6S4jz2qfhvfjX9LXcLFqFxry7%2FrdM4Kbnjm6YgQt6dl%2F%2F7Heqp2dwL4q3agpfysGBLsTv3SPNq82Q1r0iL3LEUXap0rJgXfaTzKz10I2Fw%2FKtCTtJSQYa8yZw4c0juHUQr57RAnYK1mG%2Ft1ZTwfLCMuHMGRV1Mbg0nW1CMKLOAvi9rKBc8PdDzlgQmVV3XuiIg9KQUYLrSoQIp46vFUg4R4WEWF2JQF9a7XqGEpBQBTDB8v3FBjqkAezPkLgsmX5ZE0cl5MvFogkVx6qJ8OhTjs4bufT%2BnmxBCqtRJgQWn%2FMvV90RHkzk1uMlQ7Q886bsD3gakZn3vWsBlZ9OXsRMo8H9%2Fg7or%2Fb8%2BepP5Cy3Vv9axb1RdPNQxIlt50LbKpYiQGhef65PePi52y42z9c6S3uALRwi1hu%2F5lnz0B%2BGvnr%2FphGOkXJZvYqiGFa2XNP4R4TMcDYpjGEp3%2Fnb&X-Amz-Signature=b7b58091a6c27800d9153d4f97bcfeaa3e2f2245eaad497d8fcbf72d0299e2f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKPVUE2P%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDwNjEyFqFiXi9DQW9E18F4RkqeUCbpuRVKI4MN6AyfbgIhAMRFqDG8IpL%2F%2BmNzZ1D9vK7AN9%2FxT%2F1yjAETlx4HztWYKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9nBdDLByHUgCaZmgq3AMUZVpyo9mrYkwQayQB16MDOYLG4ORJMi%2BnKrBkMibwVYuA6J3RUIhSc%2B%2FFaDjNId3EySOJW3CWWB3ImKruSHaMf%2FvCPxOA1yl3f7fqiFwlNs6e4h%2F7NtBn1L9dIcfyo%2FofCt%2F1TnExdXtmLVj%2B2oNAZFMYJdTsceDthb1Oyc1XBxff%2FzGWdNdAkPWe1qbBguiDenwEEBgmsAgskGVjy%2FLcsE15eu%2F4ShDOtij1iJ0QfoJ688wS45PAl%2BTXaRtbl7HItYbEO0yw4%2FtKvYzALdDARBFpIkTleAD%2BApF4reO2QNimaufcPs2873lrz%2F7Ig%2F%2BAtsJnD56fneOzlj6h9R%2B5vKcciEJAwaGR53CqVcNJA43xh3jD5vVomDG%2BNXY%2BZlvtLdFkpgrtZMemBQD6S4jz2qfhvfjX9LXcLFqFxry7%2FrdM4Kbnjm6YgQt6dl%2F%2F7Heqp2dwL4q3agpfysGBLsTv3SPNq82Q1r0iL3LEUXap0rJgXfaTzKz10I2Fw%2FKtCTtJSQYa8yZw4c0juHUQr57RAnYK1mG%2Ft1ZTwfLCMuHMGRV1Mbg0nW1CMKLOAvi9rKBc8PdDzlgQmVV3XuiIg9KQUYLrSoQIp46vFUg4R4WEWF2JQF9a7XqGEpBQBTDB8v3FBjqkAezPkLgsmX5ZE0cl5MvFogkVx6qJ8OhTjs4bufT%2BnmxBCqtRJgQWn%2FMvV90RHkzk1uMlQ7Q886bsD3gakZn3vWsBlZ9OXsRMo8H9%2Fg7or%2Fb8%2BepP5Cy3Vv9axb1RdPNQxIlt50LbKpYiQGhef65PePi52y42z9c6S3uALRwi1hu%2F5lnz0B%2BGvnr%2FphGOkXJZvYqiGFa2XNP4R4TMcDYpjGEp3%2Fnb&X-Amz-Signature=329424894939b1c95bf97ab19d6873f79e146afde063d3bc028770704a2edea1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKPVUE2P%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDwNjEyFqFiXi9DQW9E18F4RkqeUCbpuRVKI4MN6AyfbgIhAMRFqDG8IpL%2F%2BmNzZ1D9vK7AN9%2FxT%2F1yjAETlx4HztWYKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9nBdDLByHUgCaZmgq3AMUZVpyo9mrYkwQayQB16MDOYLG4ORJMi%2BnKrBkMibwVYuA6J3RUIhSc%2B%2FFaDjNId3EySOJW3CWWB3ImKruSHaMf%2FvCPxOA1yl3f7fqiFwlNs6e4h%2F7NtBn1L9dIcfyo%2FofCt%2F1TnExdXtmLVj%2B2oNAZFMYJdTsceDthb1Oyc1XBxff%2FzGWdNdAkPWe1qbBguiDenwEEBgmsAgskGVjy%2FLcsE15eu%2F4ShDOtij1iJ0QfoJ688wS45PAl%2BTXaRtbl7HItYbEO0yw4%2FtKvYzALdDARBFpIkTleAD%2BApF4reO2QNimaufcPs2873lrz%2F7Ig%2F%2BAtsJnD56fneOzlj6h9R%2B5vKcciEJAwaGR53CqVcNJA43xh3jD5vVomDG%2BNXY%2BZlvtLdFkpgrtZMemBQD6S4jz2qfhvfjX9LXcLFqFxry7%2FrdM4Kbnjm6YgQt6dl%2F%2F7Heqp2dwL4q3agpfysGBLsTv3SPNq82Q1r0iL3LEUXap0rJgXfaTzKz10I2Fw%2FKtCTtJSQYa8yZw4c0juHUQr57RAnYK1mG%2Ft1ZTwfLCMuHMGRV1Mbg0nW1CMKLOAvi9rKBc8PdDzlgQmVV3XuiIg9KQUYLrSoQIp46vFUg4R4WEWF2JQF9a7XqGEpBQBTDB8v3FBjqkAezPkLgsmX5ZE0cl5MvFogkVx6qJ8OhTjs4bufT%2BnmxBCqtRJgQWn%2FMvV90RHkzk1uMlQ7Q886bsD3gakZn3vWsBlZ9OXsRMo8H9%2Fg7or%2Fb8%2BepP5Cy3Vv9axb1RdPNQxIlt50LbKpYiQGhef65PePi52y42z9c6S3uALRwi1hu%2F5lnz0B%2BGvnr%2FphGOkXJZvYqiGFa2XNP4R4TMcDYpjGEp3%2Fnb&X-Amz-Signature=1b012841f6ae63e1affae05e2372c68d0d38427ed2c9b5757020e6e51383018b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


