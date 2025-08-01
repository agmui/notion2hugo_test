---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-01T18:28:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-01T18:28:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVTT3GOI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDI9Ld4AyAKEHmLHzJ99wbJKrB2LXRV3wyKOgjAK01y%2FAiEAiR%2BGwv0PVpfaYMAtn4rToczQZbeLpxCMT6MbyobtUmgqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F8twCpf1bZ3QZ%2BcSrcA3q%2BJew30ANxoWYL%2Ffub19hdexDD1tpDVYYzcPv78FNm%2FGdq8fiLhJdUseU%2F0qHJ8mAqc6xefwf5HJUfrvS%2BRVKs1ZpVTq3qQlkSU8WM2reFZ9H9gflQS5tGS4crTbbd%2ByNc2TGSrd%2BsC1MZh%2BvbmKYX5UrevXs3LRqVL5Lz7wE1zgjsZef2a9%2BRGEJxl32whoOmJj%2BL%2BsHAaJMeIB1xKDJzvGexlW1qrmhaRVOFh4JMvVnEEO14u0VffHCCzti4i9yxezdMMBZjmHNwA3QdQ4rnbpMY99r2PnxvUNygfibpx5XuTwJgyVGnfhB6DJ8Lft9u19RygEL9xrR3wn0REH%2F2q2uqrG16kok2uM2LLOEq3LStV1oCd1GyenCsaie9OjPEyrcbxmsO9WaO9arApybOD6fy2L33cuwkqwU5XECP%2BTc5AkX%2FxQKpoQEcgmYauUdwwiv3wrmlReW565CXri1rLorueo0NzxP9b%2B0VHf2zXMotBNBqOvxC%2FhEp0XA4E%2BEo%2BQz%2BAokRqqqfxcK2PluSwczHjlmhqnEwmmr6OphbEJrTLe%2BARsty1HOryUvf0VZnsUSI38JLcFLxDVoXtQ3fRV21AMoIhipSuJU602qQvPWq%2Bli%2Bd1IP4SKHMKqhtMQGOqUBnxOSlspJSjIEfqJJj5igwUjXBM2v81B2cSjCdTsM4q%2F0PwjfhQw%2F4pv72QXRylhVh3XaE6d7o3wWN%2F9plGV5xDyMP%2B2PB44Iq%2Fok3LYeqpKFeHw9VqjhRL94KqfSzA4cnqlq1jdOTcRt2vde0LUmCQfVfsbpNl4z2ZY4Yv%2Fv7D2u4Tw5MhxCVmDMTqL1NDd%2FCl%2Fq97G4V2moBN3l%2FK4Hkw3qRM7B&X-Amz-Signature=497c474aebf2c5005d79cf15abe4e22a249ba05f346b5d63e6fc26511dba32e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVTT3GOI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDI9Ld4AyAKEHmLHzJ99wbJKrB2LXRV3wyKOgjAK01y%2FAiEAiR%2BGwv0PVpfaYMAtn4rToczQZbeLpxCMT6MbyobtUmgqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F8twCpf1bZ3QZ%2BcSrcA3q%2BJew30ANxoWYL%2Ffub19hdexDD1tpDVYYzcPv78FNm%2FGdq8fiLhJdUseU%2F0qHJ8mAqc6xefwf5HJUfrvS%2BRVKs1ZpVTq3qQlkSU8WM2reFZ9H9gflQS5tGS4crTbbd%2ByNc2TGSrd%2BsC1MZh%2BvbmKYX5UrevXs3LRqVL5Lz7wE1zgjsZef2a9%2BRGEJxl32whoOmJj%2BL%2BsHAaJMeIB1xKDJzvGexlW1qrmhaRVOFh4JMvVnEEO14u0VffHCCzti4i9yxezdMMBZjmHNwA3QdQ4rnbpMY99r2PnxvUNygfibpx5XuTwJgyVGnfhB6DJ8Lft9u19RygEL9xrR3wn0REH%2F2q2uqrG16kok2uM2LLOEq3LStV1oCd1GyenCsaie9OjPEyrcbxmsO9WaO9arApybOD6fy2L33cuwkqwU5XECP%2BTc5AkX%2FxQKpoQEcgmYauUdwwiv3wrmlReW565CXri1rLorueo0NzxP9b%2B0VHf2zXMotBNBqOvxC%2FhEp0XA4E%2BEo%2BQz%2BAokRqqqfxcK2PluSwczHjlmhqnEwmmr6OphbEJrTLe%2BARsty1HOryUvf0VZnsUSI38JLcFLxDVoXtQ3fRV21AMoIhipSuJU602qQvPWq%2Bli%2Bd1IP4SKHMKqhtMQGOqUBnxOSlspJSjIEfqJJj5igwUjXBM2v81B2cSjCdTsM4q%2F0PwjfhQw%2F4pv72QXRylhVh3XaE6d7o3wWN%2F9plGV5xDyMP%2B2PB44Iq%2Fok3LYeqpKFeHw9VqjhRL94KqfSzA4cnqlq1jdOTcRt2vde0LUmCQfVfsbpNl4z2ZY4Yv%2Fv7D2u4Tw5MhxCVmDMTqL1NDd%2FCl%2Fq97G4V2moBN3l%2FK4Hkw3qRM7B&X-Amz-Signature=e0b8f067bbf8b3184378922e62bc2b44f09c8a0c12abfa3ad40f9928f4424bda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVTT3GOI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDI9Ld4AyAKEHmLHzJ99wbJKrB2LXRV3wyKOgjAK01y%2FAiEAiR%2BGwv0PVpfaYMAtn4rToczQZbeLpxCMT6MbyobtUmgqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F8twCpf1bZ3QZ%2BcSrcA3q%2BJew30ANxoWYL%2Ffub19hdexDD1tpDVYYzcPv78FNm%2FGdq8fiLhJdUseU%2F0qHJ8mAqc6xefwf5HJUfrvS%2BRVKs1ZpVTq3qQlkSU8WM2reFZ9H9gflQS5tGS4crTbbd%2ByNc2TGSrd%2BsC1MZh%2BvbmKYX5UrevXs3LRqVL5Lz7wE1zgjsZef2a9%2BRGEJxl32whoOmJj%2BL%2BsHAaJMeIB1xKDJzvGexlW1qrmhaRVOFh4JMvVnEEO14u0VffHCCzti4i9yxezdMMBZjmHNwA3QdQ4rnbpMY99r2PnxvUNygfibpx5XuTwJgyVGnfhB6DJ8Lft9u19RygEL9xrR3wn0REH%2F2q2uqrG16kok2uM2LLOEq3LStV1oCd1GyenCsaie9OjPEyrcbxmsO9WaO9arApybOD6fy2L33cuwkqwU5XECP%2BTc5AkX%2FxQKpoQEcgmYauUdwwiv3wrmlReW565CXri1rLorueo0NzxP9b%2B0VHf2zXMotBNBqOvxC%2FhEp0XA4E%2BEo%2BQz%2BAokRqqqfxcK2PluSwczHjlmhqnEwmmr6OphbEJrTLe%2BARsty1HOryUvf0VZnsUSI38JLcFLxDVoXtQ3fRV21AMoIhipSuJU602qQvPWq%2Bli%2Bd1IP4SKHMKqhtMQGOqUBnxOSlspJSjIEfqJJj5igwUjXBM2v81B2cSjCdTsM4q%2F0PwjfhQw%2F4pv72QXRylhVh3XaE6d7o3wWN%2F9plGV5xDyMP%2B2PB44Iq%2Fok3LYeqpKFeHw9VqjhRL94KqfSzA4cnqlq1jdOTcRt2vde0LUmCQfVfsbpNl4z2ZY4Yv%2Fv7D2u4Tw5MhxCVmDMTqL1NDd%2FCl%2Fq97G4V2moBN3l%2FK4Hkw3qRM7B&X-Amz-Signature=77abc229b8b52500ea05c5b11b0448440093aeb7d70bf6937ef4e94fe489991d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVTT3GOI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDI9Ld4AyAKEHmLHzJ99wbJKrB2LXRV3wyKOgjAK01y%2FAiEAiR%2BGwv0PVpfaYMAtn4rToczQZbeLpxCMT6MbyobtUmgqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F8twCpf1bZ3QZ%2BcSrcA3q%2BJew30ANxoWYL%2Ffub19hdexDD1tpDVYYzcPv78FNm%2FGdq8fiLhJdUseU%2F0qHJ8mAqc6xefwf5HJUfrvS%2BRVKs1ZpVTq3qQlkSU8WM2reFZ9H9gflQS5tGS4crTbbd%2ByNc2TGSrd%2BsC1MZh%2BvbmKYX5UrevXs3LRqVL5Lz7wE1zgjsZef2a9%2BRGEJxl32whoOmJj%2BL%2BsHAaJMeIB1xKDJzvGexlW1qrmhaRVOFh4JMvVnEEO14u0VffHCCzti4i9yxezdMMBZjmHNwA3QdQ4rnbpMY99r2PnxvUNygfibpx5XuTwJgyVGnfhB6DJ8Lft9u19RygEL9xrR3wn0REH%2F2q2uqrG16kok2uM2LLOEq3LStV1oCd1GyenCsaie9OjPEyrcbxmsO9WaO9arApybOD6fy2L33cuwkqwU5XECP%2BTc5AkX%2FxQKpoQEcgmYauUdwwiv3wrmlReW565CXri1rLorueo0NzxP9b%2B0VHf2zXMotBNBqOvxC%2FhEp0XA4E%2BEo%2BQz%2BAokRqqqfxcK2PluSwczHjlmhqnEwmmr6OphbEJrTLe%2BARsty1HOryUvf0VZnsUSI38JLcFLxDVoXtQ3fRV21AMoIhipSuJU602qQvPWq%2Bli%2Bd1IP4SKHMKqhtMQGOqUBnxOSlspJSjIEfqJJj5igwUjXBM2v81B2cSjCdTsM4q%2F0PwjfhQw%2F4pv72QXRylhVh3XaE6d7o3wWN%2F9plGV5xDyMP%2B2PB44Iq%2Fok3LYeqpKFeHw9VqjhRL94KqfSzA4cnqlq1jdOTcRt2vde0LUmCQfVfsbpNl4z2ZY4Yv%2Fv7D2u4Tw5MhxCVmDMTqL1NDd%2FCl%2Fq97G4V2moBN3l%2FK4Hkw3qRM7B&X-Amz-Signature=f0343aba771a5d452131e7a05048fdd7e02fb15b581ffe5d5becf5373dd7526f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVTT3GOI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDI9Ld4AyAKEHmLHzJ99wbJKrB2LXRV3wyKOgjAK01y%2FAiEAiR%2BGwv0PVpfaYMAtn4rToczQZbeLpxCMT6MbyobtUmgqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F8twCpf1bZ3QZ%2BcSrcA3q%2BJew30ANxoWYL%2Ffub19hdexDD1tpDVYYzcPv78FNm%2FGdq8fiLhJdUseU%2F0qHJ8mAqc6xefwf5HJUfrvS%2BRVKs1ZpVTq3qQlkSU8WM2reFZ9H9gflQS5tGS4crTbbd%2ByNc2TGSrd%2BsC1MZh%2BvbmKYX5UrevXs3LRqVL5Lz7wE1zgjsZef2a9%2BRGEJxl32whoOmJj%2BL%2BsHAaJMeIB1xKDJzvGexlW1qrmhaRVOFh4JMvVnEEO14u0VffHCCzti4i9yxezdMMBZjmHNwA3QdQ4rnbpMY99r2PnxvUNygfibpx5XuTwJgyVGnfhB6DJ8Lft9u19RygEL9xrR3wn0REH%2F2q2uqrG16kok2uM2LLOEq3LStV1oCd1GyenCsaie9OjPEyrcbxmsO9WaO9arApybOD6fy2L33cuwkqwU5XECP%2BTc5AkX%2FxQKpoQEcgmYauUdwwiv3wrmlReW565CXri1rLorueo0NzxP9b%2B0VHf2zXMotBNBqOvxC%2FhEp0XA4E%2BEo%2BQz%2BAokRqqqfxcK2PluSwczHjlmhqnEwmmr6OphbEJrTLe%2BARsty1HOryUvf0VZnsUSI38JLcFLxDVoXtQ3fRV21AMoIhipSuJU602qQvPWq%2Bli%2Bd1IP4SKHMKqhtMQGOqUBnxOSlspJSjIEfqJJj5igwUjXBM2v81B2cSjCdTsM4q%2F0PwjfhQw%2F4pv72QXRylhVh3XaE6d7o3wWN%2F9plGV5xDyMP%2B2PB44Iq%2Fok3LYeqpKFeHw9VqjhRL94KqfSzA4cnqlq1jdOTcRt2vde0LUmCQfVfsbpNl4z2ZY4Yv%2Fv7D2u4Tw5MhxCVmDMTqL1NDd%2FCl%2Fq97G4V2moBN3l%2FK4Hkw3qRM7B&X-Amz-Signature=9827fc3da1271d430131bf299e938a0d87b6cd0e6b2b514fb24f074819402050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVTT3GOI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDI9Ld4AyAKEHmLHzJ99wbJKrB2LXRV3wyKOgjAK01y%2FAiEAiR%2BGwv0PVpfaYMAtn4rToczQZbeLpxCMT6MbyobtUmgqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F8twCpf1bZ3QZ%2BcSrcA3q%2BJew30ANxoWYL%2Ffub19hdexDD1tpDVYYzcPv78FNm%2FGdq8fiLhJdUseU%2F0qHJ8mAqc6xefwf5HJUfrvS%2BRVKs1ZpVTq3qQlkSU8WM2reFZ9H9gflQS5tGS4crTbbd%2ByNc2TGSrd%2BsC1MZh%2BvbmKYX5UrevXs3LRqVL5Lz7wE1zgjsZef2a9%2BRGEJxl32whoOmJj%2BL%2BsHAaJMeIB1xKDJzvGexlW1qrmhaRVOFh4JMvVnEEO14u0VffHCCzti4i9yxezdMMBZjmHNwA3QdQ4rnbpMY99r2PnxvUNygfibpx5XuTwJgyVGnfhB6DJ8Lft9u19RygEL9xrR3wn0REH%2F2q2uqrG16kok2uM2LLOEq3LStV1oCd1GyenCsaie9OjPEyrcbxmsO9WaO9arApybOD6fy2L33cuwkqwU5XECP%2BTc5AkX%2FxQKpoQEcgmYauUdwwiv3wrmlReW565CXri1rLorueo0NzxP9b%2B0VHf2zXMotBNBqOvxC%2FhEp0XA4E%2BEo%2BQz%2BAokRqqqfxcK2PluSwczHjlmhqnEwmmr6OphbEJrTLe%2BARsty1HOryUvf0VZnsUSI38JLcFLxDVoXtQ3fRV21AMoIhipSuJU602qQvPWq%2Bli%2Bd1IP4SKHMKqhtMQGOqUBnxOSlspJSjIEfqJJj5igwUjXBM2v81B2cSjCdTsM4q%2F0PwjfhQw%2F4pv72QXRylhVh3XaE6d7o3wWN%2F9plGV5xDyMP%2B2PB44Iq%2Fok3LYeqpKFeHw9VqjhRL94KqfSzA4cnqlq1jdOTcRt2vde0LUmCQfVfsbpNl4z2ZY4Yv%2Fv7D2u4Tw5MhxCVmDMTqL1NDd%2FCl%2Fq97G4V2moBN3l%2FK4Hkw3qRM7B&X-Amz-Signature=917a0af81ee13cf36b31c880dd0d8a6f685aa0a48c95cbe84abc14cf12e1ff3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVTT3GOI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDI9Ld4AyAKEHmLHzJ99wbJKrB2LXRV3wyKOgjAK01y%2FAiEAiR%2BGwv0PVpfaYMAtn4rToczQZbeLpxCMT6MbyobtUmgqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F8twCpf1bZ3QZ%2BcSrcA3q%2BJew30ANxoWYL%2Ffub19hdexDD1tpDVYYzcPv78FNm%2FGdq8fiLhJdUseU%2F0qHJ8mAqc6xefwf5HJUfrvS%2BRVKs1ZpVTq3qQlkSU8WM2reFZ9H9gflQS5tGS4crTbbd%2ByNc2TGSrd%2BsC1MZh%2BvbmKYX5UrevXs3LRqVL5Lz7wE1zgjsZef2a9%2BRGEJxl32whoOmJj%2BL%2BsHAaJMeIB1xKDJzvGexlW1qrmhaRVOFh4JMvVnEEO14u0VffHCCzti4i9yxezdMMBZjmHNwA3QdQ4rnbpMY99r2PnxvUNygfibpx5XuTwJgyVGnfhB6DJ8Lft9u19RygEL9xrR3wn0REH%2F2q2uqrG16kok2uM2LLOEq3LStV1oCd1GyenCsaie9OjPEyrcbxmsO9WaO9arApybOD6fy2L33cuwkqwU5XECP%2BTc5AkX%2FxQKpoQEcgmYauUdwwiv3wrmlReW565CXri1rLorueo0NzxP9b%2B0VHf2zXMotBNBqOvxC%2FhEp0XA4E%2BEo%2BQz%2BAokRqqqfxcK2PluSwczHjlmhqnEwmmr6OphbEJrTLe%2BARsty1HOryUvf0VZnsUSI38JLcFLxDVoXtQ3fRV21AMoIhipSuJU602qQvPWq%2Bli%2Bd1IP4SKHMKqhtMQGOqUBnxOSlspJSjIEfqJJj5igwUjXBM2v81B2cSjCdTsM4q%2F0PwjfhQw%2F4pv72QXRylhVh3XaE6d7o3wWN%2F9plGV5xDyMP%2B2PB44Iq%2Fok3LYeqpKFeHw9VqjhRL94KqfSzA4cnqlq1jdOTcRt2vde0LUmCQfVfsbpNl4z2ZY4Yv%2Fv7D2u4Tw5MhxCVmDMTqL1NDd%2FCl%2Fq97G4V2moBN3l%2FK4Hkw3qRM7B&X-Amz-Signature=7141f2d271ecfd09cde62aa82d0f246d45ed3a6ed8bb2f440bfcea54141bfd50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVTT3GOI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDI9Ld4AyAKEHmLHzJ99wbJKrB2LXRV3wyKOgjAK01y%2FAiEAiR%2BGwv0PVpfaYMAtn4rToczQZbeLpxCMT6MbyobtUmgqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F8twCpf1bZ3QZ%2BcSrcA3q%2BJew30ANxoWYL%2Ffub19hdexDD1tpDVYYzcPv78FNm%2FGdq8fiLhJdUseU%2F0qHJ8mAqc6xefwf5HJUfrvS%2BRVKs1ZpVTq3qQlkSU8WM2reFZ9H9gflQS5tGS4crTbbd%2ByNc2TGSrd%2BsC1MZh%2BvbmKYX5UrevXs3LRqVL5Lz7wE1zgjsZef2a9%2BRGEJxl32whoOmJj%2BL%2BsHAaJMeIB1xKDJzvGexlW1qrmhaRVOFh4JMvVnEEO14u0VffHCCzti4i9yxezdMMBZjmHNwA3QdQ4rnbpMY99r2PnxvUNygfibpx5XuTwJgyVGnfhB6DJ8Lft9u19RygEL9xrR3wn0REH%2F2q2uqrG16kok2uM2LLOEq3LStV1oCd1GyenCsaie9OjPEyrcbxmsO9WaO9arApybOD6fy2L33cuwkqwU5XECP%2BTc5AkX%2FxQKpoQEcgmYauUdwwiv3wrmlReW565CXri1rLorueo0NzxP9b%2B0VHf2zXMotBNBqOvxC%2FhEp0XA4E%2BEo%2BQz%2BAokRqqqfxcK2PluSwczHjlmhqnEwmmr6OphbEJrTLe%2BARsty1HOryUvf0VZnsUSI38JLcFLxDVoXtQ3fRV21AMoIhipSuJU602qQvPWq%2Bli%2Bd1IP4SKHMKqhtMQGOqUBnxOSlspJSjIEfqJJj5igwUjXBM2v81B2cSjCdTsM4q%2F0PwjfhQw%2F4pv72QXRylhVh3XaE6d7o3wWN%2F9plGV5xDyMP%2B2PB44Iq%2Fok3LYeqpKFeHw9VqjhRL94KqfSzA4cnqlq1jdOTcRt2vde0LUmCQfVfsbpNl4z2ZY4Yv%2Fv7D2u4Tw5MhxCVmDMTqL1NDd%2FCl%2Fq97G4V2moBN3l%2FK4Hkw3qRM7B&X-Amz-Signature=693f3fbccdd0482d3bcbb5a0adbee8199bc1d443b7be13c7d36324ca07c57cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVTT3GOI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDI9Ld4AyAKEHmLHzJ99wbJKrB2LXRV3wyKOgjAK01y%2FAiEAiR%2BGwv0PVpfaYMAtn4rToczQZbeLpxCMT6MbyobtUmgqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F8twCpf1bZ3QZ%2BcSrcA3q%2BJew30ANxoWYL%2Ffub19hdexDD1tpDVYYzcPv78FNm%2FGdq8fiLhJdUseU%2F0qHJ8mAqc6xefwf5HJUfrvS%2BRVKs1ZpVTq3qQlkSU8WM2reFZ9H9gflQS5tGS4crTbbd%2ByNc2TGSrd%2BsC1MZh%2BvbmKYX5UrevXs3LRqVL5Lz7wE1zgjsZef2a9%2BRGEJxl32whoOmJj%2BL%2BsHAaJMeIB1xKDJzvGexlW1qrmhaRVOFh4JMvVnEEO14u0VffHCCzti4i9yxezdMMBZjmHNwA3QdQ4rnbpMY99r2PnxvUNygfibpx5XuTwJgyVGnfhB6DJ8Lft9u19RygEL9xrR3wn0REH%2F2q2uqrG16kok2uM2LLOEq3LStV1oCd1GyenCsaie9OjPEyrcbxmsO9WaO9arApybOD6fy2L33cuwkqwU5XECP%2BTc5AkX%2FxQKpoQEcgmYauUdwwiv3wrmlReW565CXri1rLorueo0NzxP9b%2B0VHf2zXMotBNBqOvxC%2FhEp0XA4E%2BEo%2BQz%2BAokRqqqfxcK2PluSwczHjlmhqnEwmmr6OphbEJrTLe%2BARsty1HOryUvf0VZnsUSI38JLcFLxDVoXtQ3fRV21AMoIhipSuJU602qQvPWq%2Bli%2Bd1IP4SKHMKqhtMQGOqUBnxOSlspJSjIEfqJJj5igwUjXBM2v81B2cSjCdTsM4q%2F0PwjfhQw%2F4pv72QXRylhVh3XaE6d7o3wWN%2F9plGV5xDyMP%2B2PB44Iq%2Fok3LYeqpKFeHw9VqjhRL94KqfSzA4cnqlq1jdOTcRt2vde0LUmCQfVfsbpNl4z2ZY4Yv%2Fv7D2u4Tw5MhxCVmDMTqL1NDd%2FCl%2Fq97G4V2moBN3l%2FK4Hkw3qRM7B&X-Amz-Signature=d4e0d6ebd098db2a8ab85534f4096ecdc563f016795b65ea9ba2b03325cbe78b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

TODO: preview of robot we r going make

urdf can get complex to look at so I will be putting a “_scratch”_ like equivalent next to each example I put down.

To start must all urdf have these tags:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
**<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">



</robot>**
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDW7FVZT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr%2BvDoFo18oV6zVEvOEet%2FkEMJN6j1NhgXzrCodDqMGwIgEyAjIt7BJpGaR1757fTSxprljASocpXrmbaPxiTts%2BcqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQNmBs5u1ad7CgTxSrcA%2BzgrpK2UX054dsb4qNN7M3xyVWimFkZgtDkIylTAgbSR46tbW3ZklI2C9KzvPHLgr3oR3iPK4RN%2BWeppzku6J8frjE%2FlkWOq4lkeCSRH3iibgQ2n81qPy04kza48my9iQAl6qNQsUJ9Q3fythpOYEC3q398Q1SI43xpiTyHHojMYX2HuSJNsHvxmvNfxUyjr23%2BNBF5EBLvFwLXcgvc0xm2HTnW8Vyi6XAKWF22cC%2FdR6wI25sb5lluXSEKvcpvKzCZ%2FtT0U2SjBObMe9xWYGD1ZzYwasGVmErsWlmv4%2FQZm2YXx8UvWNjHmBH81ISYWTj2KHvceI9sfiiq1OoRQvwjhRYXGpWlMq4CDrCBrbk7CHzUgRBwBxmjADONgtTMh2FJ9i53ZHctfBx%2BUJkHML3B20DBMIj1KarBmqz3txtkMSS3UMcqPbMn4hCygJeaxcqdfGRVUocG1YMJRyS7dZF4uTMpTn%2BpuAJyPSzY3bXrwLV5h7CqkVajdGSru08Hr6qj3xcmCu%2FTfjBkuIAAHr7%2Bpe7%2BBkmVuaEf6cfwmjx0O7U7BTXLYibC202aZGvKgUFspaChPfgxIpTrrFWpkwM0r9pH%2FukkcU%2FLfYFcCoNhNIx1Mpm7t9SOrqxCMJ%2BhtMQGOqUBPwbXCQsxy2yVLUb2ZPCKozpX3FnuXNf8uBP0kmOduBQJ6T7OMl%2BRMAG%2B%2F%2BNx%2FWeOkCqnOPAx0S1l7wZ2Sn5NSnDSgzofCVogkF6vYxO9Q7tKRflAiRuSKRzrTZi2eGHPlcSp%2FjBpe%2BdxE14TX%2BwCfhMpnHIurvE5bkYmWzSmcaeAAYpjrAnazIog5rFzr%2Bq7bqENi3g8LRHJPWVeQ48HIPwYnoTY&X-Amz-Signature=691e05038f379e1a962bbea6755664aa4bd8420fd2ed561e47614eb4ec189190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

All of our code will go in between the `<robot>` tags 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFEHOC7Z%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbT615DRMNqHLnnD91FG7dK1eRzHkAMXpRW85UWBBcCQIhANgal1E4Y%2Fxa3Tjc%2B4BnmWvJRim8W3KKvsU8xYBXOmzuKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4j66bMnxxwooVI4Aq3AMK%2FaJmVMpMGgIYWANkxj23BvnbPS0qQ8SijvyMxE7OB8P1JyUpILX7ps7zmm9Z4%2FEYiOehIRh66NCdSrwiTP8G6l4WLHdSUnDuDJ%2BZehqdYNN3Otpmqv3gklwWQEHs%2BWp8MJkh6l9srluu3uRvYLrw0g3WYKBgB2cSYlk1b9vfBd4H2BBwX4j5O5SKMxoeLjXUXtPxv7jB14WQRh08SDHAjnN2ZgELCyJP%2FGcvnFij%2FIHk8U%2B%2BTXSa0Lz7Zmk0DQdiFnmsHCylSyAJw9r6gEdX395l4fWSdKjflCvp%2F8tbx2WmQS1dSiOVwVfSbEOJ%2Bw52UFLGRszHaAbOBOC60RFf%2BskUmsZk6lSkMj3LaHGniyowUV6aNnPZ8Y3usmQIEhh5ey9%2BIKFq0CTYW4sJn80LKgbU0JBsuyM5JaGgbs78CYWsUdXFYPgA0lDjGDo07gFAQWgeeD9BeSU%2FfnDtLrj1ro10goTqYVw9kY3SDezy6Shk8mL1HjSPDdT12cS2sbQG%2Bfeh2%2FBZ8iBc6huoec7f2tJyfbjn7Bcvb4IpfX6YsUeazbbNuK1DiNnBxkbuFOodrJGM3pm4libGkPnsVFy1Jk7uCuchTUlxV%2FT9nnx5P6PaQn31NAWdZPy7lDCyobTEBjqkAb%2Bb133tfC3xgH0bhmYWC%2FCQ31%2FYwdaC2hdNtjsJbshNmWiB72gIW%2B24s3jyxeADRLxakV%2BgCTOX8eTkc4t9KrX3%2FGG8BmTQkGhOf8nuE6DSm5Nh4bXVOKH%2F8b8MtdPdgUS7ipJyuWowEOcqviWF7suB3FSTvBKSyVF0KT6LHwI02wrFXEug8dicWRX8Ojt7oDHetsr%2FeI2W7BwwanvAL8EjGA%2BH&X-Amz-Signature=108351f283bdbc36611b9fb4580b810a1e8aac77d7d49bfc5c82b31d85244fff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

You can think of these as **variables** but in the xacro language

<details>
      <summary>What do the variables represent?</summary>
      TODO:
  </details>

Lets now make a link for the body of the robot

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O6MH34Z%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEpzzqvLJ2ANxvP8JikG14KAO7aeMbC2tnOKcFa%2BQN%2FAIgQPan1bT8pyv4KmjX9kTO%2BhlSJbB8aIW%2BJBwsGbn7eo0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9pzJuk8USzTUtA0SrcA8jLfqK7vk9EGf9l%2FmJRJ8jEsX4x6ikKREHWTXihNcQB%2BDuEOUOssnKXmpvC5wORV3Rhl%2F4lDSiV6atw4HruCMHBWOccSVH5xaDndav7xuHWnM4lXnKAM8s20NphC3SMoyts4tideXh03F5SKnH5CYSBFlSmsQhlPwMTw7SyqpnaeNoVxSVlxT3WeCE3DfMSCEs0oXrnx1rH9JKcaI9RPwB9ivxVXvfqHdmE5aOh%2BtrWk3bv8mEG1bK%2FSHCR4VuIzDMIh2zqyS4NJ8R0keSlQcv29joPwqGdpNnU9CXVJXM1MwR4J%2FYvAhlR6gKvTY2o9AC6jIVtriJkgkFpRyuSznimt4aZZCHZpY1I3mU2zLfKN7gNzqPdFtNAg1V4veK%2Fj6BIgsrx9OvnFiB5A9tanimLD9GCW4MJuXTFBRFH%2F9IhXOb2IC5Or1bZgnFVAthhcQkrF8p1wXh97MlWxCTRrGjwoPk27yEr1KuPzmU2IowN6SPaufTinMhneYiddKHN6SBDRN6OE8W9ZViyrFkwZDitRdt8ih1C5N327M3emO1qcDYR%2BINKKNfFErtj30rsDL9%2FTZSztNKFO5x9MZhwsZw3HrIVgo%2Bf5pc3bwrd%2Fkf5qJPdX3st6p1V3w59MKH6s8QGOqUBmWtZ8U6mKE1W59PWszjcil1MRABEaHQz%2FqBeVv65O%2BoacPeYh4BayRWJLwahp9yv5fSSCv3tRfPhFE9aT1o5emvzkOCynUYiP5BJOGN6mPkNUvZE9%2FdPUess8D%2FeQMubmKqkmkIyFKtY7i7UrboApIhGOtC7OOSXzwvH7riphaiqsL1Tikbmfu55v1AezwP1fF7KKH%2FU9szCPjyOajXO%2BoAEkDjC&X-Amz-Signature=6a6d31e3da20ce1dd673c56dfbcabe5eb16068bc9ef31431dfb5dd0f5400d1a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVTT3GOI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDI9Ld4AyAKEHmLHzJ99wbJKrB2LXRV3wyKOgjAK01y%2FAiEAiR%2BGwv0PVpfaYMAtn4rToczQZbeLpxCMT6MbyobtUmgqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F8twCpf1bZ3QZ%2BcSrcA3q%2BJew30ANxoWYL%2Ffub19hdexDD1tpDVYYzcPv78FNm%2FGdq8fiLhJdUseU%2F0qHJ8mAqc6xefwf5HJUfrvS%2BRVKs1ZpVTq3qQlkSU8WM2reFZ9H9gflQS5tGS4crTbbd%2ByNc2TGSrd%2BsC1MZh%2BvbmKYX5UrevXs3LRqVL5Lz7wE1zgjsZef2a9%2BRGEJxl32whoOmJj%2BL%2BsHAaJMeIB1xKDJzvGexlW1qrmhaRVOFh4JMvVnEEO14u0VffHCCzti4i9yxezdMMBZjmHNwA3QdQ4rnbpMY99r2PnxvUNygfibpx5XuTwJgyVGnfhB6DJ8Lft9u19RygEL9xrR3wn0REH%2F2q2uqrG16kok2uM2LLOEq3LStV1oCd1GyenCsaie9OjPEyrcbxmsO9WaO9arApybOD6fy2L33cuwkqwU5XECP%2BTc5AkX%2FxQKpoQEcgmYauUdwwiv3wrmlReW565CXri1rLorueo0NzxP9b%2B0VHf2zXMotBNBqOvxC%2FhEp0XA4E%2BEo%2BQz%2BAokRqqqfxcK2PluSwczHjlmhqnEwmmr6OphbEJrTLe%2BARsty1HOryUvf0VZnsUSI38JLcFLxDVoXtQ3fRV21AMoIhipSuJU602qQvPWq%2Bli%2Bd1IP4SKHMKqhtMQGOqUBnxOSlspJSjIEfqJJj5igwUjXBM2v81B2cSjCdTsM4q%2F0PwjfhQw%2F4pv72QXRylhVh3XaE6d7o3wWN%2F9plGV5xDyMP%2B2PB44Iq%2Fok3LYeqpKFeHw9VqjhRL94KqfSzA4cnqlq1jdOTcRt2vde0LUmCQfVfsbpNl4z2ZY4Yv%2Fv7D2u4Tw5MhxCVmDMTqL1NDd%2FCl%2Fq97G4V2moBN3l%2FK4Hkw3qRM7B&X-Amz-Signature=1ae707230fc13084e297a1227a1ab7fdf69cd6fc78b0b5458f01015e40a66288&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```xml
  <!-- Robot Footprint -->
  <link name="base_footprint"/>

  <joint name="base_joint" type="fixed">
    <parent link="base_link"/>
    <child link="base_footprint"/>
    <origin xyz="0.0 0.0 ${-(wheel_radius+wheel_zoff)}" rpy="0 0 0"/>
  </joint>
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVTT3GOI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDI9Ld4AyAKEHmLHzJ99wbJKrB2LXRV3wyKOgjAK01y%2FAiEAiR%2BGwv0PVpfaYMAtn4rToczQZbeLpxCMT6MbyobtUmgqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F8twCpf1bZ3QZ%2BcSrcA3q%2BJew30ANxoWYL%2Ffub19hdexDD1tpDVYYzcPv78FNm%2FGdq8fiLhJdUseU%2F0qHJ8mAqc6xefwf5HJUfrvS%2BRVKs1ZpVTq3qQlkSU8WM2reFZ9H9gflQS5tGS4crTbbd%2ByNc2TGSrd%2BsC1MZh%2BvbmKYX5UrevXs3LRqVL5Lz7wE1zgjsZef2a9%2BRGEJxl32whoOmJj%2BL%2BsHAaJMeIB1xKDJzvGexlW1qrmhaRVOFh4JMvVnEEO14u0VffHCCzti4i9yxezdMMBZjmHNwA3QdQ4rnbpMY99r2PnxvUNygfibpx5XuTwJgyVGnfhB6DJ8Lft9u19RygEL9xrR3wn0REH%2F2q2uqrG16kok2uM2LLOEq3LStV1oCd1GyenCsaie9OjPEyrcbxmsO9WaO9arApybOD6fy2L33cuwkqwU5XECP%2BTc5AkX%2FxQKpoQEcgmYauUdwwiv3wrmlReW565CXri1rLorueo0NzxP9b%2B0VHf2zXMotBNBqOvxC%2FhEp0XA4E%2BEo%2BQz%2BAokRqqqfxcK2PluSwczHjlmhqnEwmmr6OphbEJrTLe%2BARsty1HOryUvf0VZnsUSI38JLcFLxDVoXtQ3fRV21AMoIhipSuJU602qQvPWq%2Bli%2Bd1IP4SKHMKqhtMQGOqUBnxOSlspJSjIEfqJJj5igwUjXBM2v81B2cSjCdTsM4q%2F0PwjfhQw%2F4pv72QXRylhVh3XaE6d7o3wWN%2F9plGV5xDyMP%2B2PB44Iq%2Fok3LYeqpKFeHw9VqjhRL94KqfSzA4cnqlq1jdOTcRt2vde0LUmCQfVfsbpNl4z2ZY4Yv%2Fv7D2u4Tw5MhxCVmDMTqL1NDd%2FCl%2Fq97G4V2moBN3l%2FK4Hkw3qRM7B&X-Amz-Signature=e9dff880ea45181e53dac2e691009cd1d313f26968543ffd564414e987324e82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
	- axis
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVTT3GOI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDI9Ld4AyAKEHmLHzJ99wbJKrB2LXRV3wyKOgjAK01y%2FAiEAiR%2BGwv0PVpfaYMAtn4rToczQZbeLpxCMT6MbyobtUmgqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F8twCpf1bZ3QZ%2BcSrcA3q%2BJew30ANxoWYL%2Ffub19hdexDD1tpDVYYzcPv78FNm%2FGdq8fiLhJdUseU%2F0qHJ8mAqc6xefwf5HJUfrvS%2BRVKs1ZpVTq3qQlkSU8WM2reFZ9H9gflQS5tGS4crTbbd%2ByNc2TGSrd%2BsC1MZh%2BvbmKYX5UrevXs3LRqVL5Lz7wE1zgjsZef2a9%2BRGEJxl32whoOmJj%2BL%2BsHAaJMeIB1xKDJzvGexlW1qrmhaRVOFh4JMvVnEEO14u0VffHCCzti4i9yxezdMMBZjmHNwA3QdQ4rnbpMY99r2PnxvUNygfibpx5XuTwJgyVGnfhB6DJ8Lft9u19RygEL9xrR3wn0REH%2F2q2uqrG16kok2uM2LLOEq3LStV1oCd1GyenCsaie9OjPEyrcbxmsO9WaO9arApybOD6fy2L33cuwkqwU5XECP%2BTc5AkX%2FxQKpoQEcgmYauUdwwiv3wrmlReW565CXri1rLorueo0NzxP9b%2B0VHf2zXMotBNBqOvxC%2FhEp0XA4E%2BEo%2BQz%2BAokRqqqfxcK2PluSwczHjlmhqnEwmmr6OphbEJrTLe%2BARsty1HOryUvf0VZnsUSI38JLcFLxDVoXtQ3fRV21AMoIhipSuJU602qQvPWq%2Bli%2Bd1IP4SKHMKqhtMQGOqUBnxOSlspJSjIEfqJJj5igwUjXBM2v81B2cSjCdTsM4q%2F0PwjfhQw%2F4pv72QXRylhVh3XaE6d7o3wWN%2F9plGV5xDyMP%2B2PB44Iq%2Fok3LYeqpKFeHw9VqjhRL94KqfSzA4cnqlq1jdOTcRt2vde0LUmCQfVfsbpNl4z2ZY4Yv%2Fv7D2u4Tw5MhxCVmDMTqL1NDd%2FCl%2Fq97G4V2moBN3l%2FK4Hkw3qRM7B&X-Amz-Signature=af6bd4048611448fac84029a9223d0a4c6a02d1e39d0a8d2e25891afd8b01487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVTT3GOI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDI9Ld4AyAKEHmLHzJ99wbJKrB2LXRV3wyKOgjAK01y%2FAiEAiR%2BGwv0PVpfaYMAtn4rToczQZbeLpxCMT6MbyobtUmgqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F8twCpf1bZ3QZ%2BcSrcA3q%2BJew30ANxoWYL%2Ffub19hdexDD1tpDVYYzcPv78FNm%2FGdq8fiLhJdUseU%2F0qHJ8mAqc6xefwf5HJUfrvS%2BRVKs1ZpVTq3qQlkSU8WM2reFZ9H9gflQS5tGS4crTbbd%2ByNc2TGSrd%2BsC1MZh%2BvbmKYX5UrevXs3LRqVL5Lz7wE1zgjsZef2a9%2BRGEJxl32whoOmJj%2BL%2BsHAaJMeIB1xKDJzvGexlW1qrmhaRVOFh4JMvVnEEO14u0VffHCCzti4i9yxezdMMBZjmHNwA3QdQ4rnbpMY99r2PnxvUNygfibpx5XuTwJgyVGnfhB6DJ8Lft9u19RygEL9xrR3wn0REH%2F2q2uqrG16kok2uM2LLOEq3LStV1oCd1GyenCsaie9OjPEyrcbxmsO9WaO9arApybOD6fy2L33cuwkqwU5XECP%2BTc5AkX%2FxQKpoQEcgmYauUdwwiv3wrmlReW565CXri1rLorueo0NzxP9b%2B0VHf2zXMotBNBqOvxC%2FhEp0XA4E%2BEo%2BQz%2BAokRqqqfxcK2PluSwczHjlmhqnEwmmr6OphbEJrTLe%2BARsty1HOryUvf0VZnsUSI38JLcFLxDVoXtQ3fRV21AMoIhipSuJU602qQvPWq%2Bli%2Bd1IP4SKHMKqhtMQGOqUBnxOSlspJSjIEfqJJj5igwUjXBM2v81B2cSjCdTsM4q%2F0PwjfhQw%2F4pv72QXRylhVh3XaE6d7o3wWN%2F9plGV5xDyMP%2B2PB44Iq%2Fok3LYeqpKFeHw9VqjhRL94KqfSzA4cnqlq1jdOTcRt2vde0LUmCQfVfsbpNl4z2ZY4Yv%2Fv7D2u4Tw5MhxCVmDMTqL1NDd%2FCl%2Fq97G4V2moBN3l%2FK4Hkw3qRM7B&X-Amz-Signature=c5798d029bd263949f990f286d63fac32d4ef65ee139cc8c681b4181c78dfb74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYTOJCOY%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1sT4FdKmkWkjmzt%2Fiscsz%2BHnS698aBQbU7%2FTv6mPLhgIgPWQUo9vpEfGtmA5G5RO8HnwQ2teXmGe9YXh%2F1cxa6AsqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHp3zJjwMeMzOwhx7yrcA4l6Vnplh7CoJbwgpLFAh1T9et2UwpD8vRS8zWJRA2xFB4zHMnu9nVvD70lMjZLxgEJGtpMZfVHCaHnAwpRqpO5FFrweEnEar3DvAXC2fAW9SS1oP8%2FB%2BjdaKN0Th7aZveSFdQJ5SXULL9pjwXAFmiLdPOzB8ME3pObGI1z9HALHAeuiSnGGKDALzhIWyYLRo1hvsFbA8Hq7oa6zQj%2BsXeab3r4Dcs7XPyHn96Ydci7HXTumKqwq4nfUAUvT1cDSqRIipe4uiblQ5huMG%2Fr7SPnkXG1IlQYQ%2F8%2B1zRyL0UqgnQjeebbSYgbW3%2BS8MwsRFpeFOCNFd%2FjkTAwMdsATnpSVeS62xOK%2FjyJCVYLuXNB%2FEVjefA6p7Ufukzt%2B5xlO%2FTyL117PCyOCPW1Y8BZpC8YusIuhqmfwgPOYqGuh6E05QW%2FQPPVDtc5KdOsJJ7C36twHRmsc3X3z%2FAvxGfEvGOjZQQdxH%2FXgVdNLJAsUTvLwrrlFB1cAxYa2aGAM1xB6AKStOM2eoyxxPDSg%2FfkgWJwU7NTbo%2FotmytDDXuWavbPxxo8dR0REnXah1d02n1Ixaj3vod0zeYKSwdZMl3ni3shlXFCLMYanQLl0FINXDzNewkhdD7vgxFsg24yMPagtMQGOqUBbhuKiZlBhvoGky9%2BysZAG4J1%2BysiHldgYp6Ce3MW35GS0aBvnViCu%2B6RpEWq%2FlByHEW0JRzI26lbSnHnkkvCwcSP%2B5Kbj9n%2BihmnOGEredghIMHcjpI8KBRz8tSVny9Zc12vxLncQ1EHhFvBh296rzjqd8tLrPL731zM8oop%2F9Zq4RrpdNYJQPSblN%2Fqvluk58GjsEnX5uczoZaS1OVpK0LVLd1j&X-Amz-Signature=f888dbb9ae7a0e8c4324101022f6f1ddde0650fa9c22a8f3bf3fbfca04d46279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYTOJCOY%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1sT4FdKmkWkjmzt%2Fiscsz%2BHnS698aBQbU7%2FTv6mPLhgIgPWQUo9vpEfGtmA5G5RO8HnwQ2teXmGe9YXh%2F1cxa6AsqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHp3zJjwMeMzOwhx7yrcA4l6Vnplh7CoJbwgpLFAh1T9et2UwpD8vRS8zWJRA2xFB4zHMnu9nVvD70lMjZLxgEJGtpMZfVHCaHnAwpRqpO5FFrweEnEar3DvAXC2fAW9SS1oP8%2FB%2BjdaKN0Th7aZveSFdQJ5SXULL9pjwXAFmiLdPOzB8ME3pObGI1z9HALHAeuiSnGGKDALzhIWyYLRo1hvsFbA8Hq7oa6zQj%2BsXeab3r4Dcs7XPyHn96Ydci7HXTumKqwq4nfUAUvT1cDSqRIipe4uiblQ5huMG%2Fr7SPnkXG1IlQYQ%2F8%2B1zRyL0UqgnQjeebbSYgbW3%2BS8MwsRFpeFOCNFd%2FjkTAwMdsATnpSVeS62xOK%2FjyJCVYLuXNB%2FEVjefA6p7Ufukzt%2B5xlO%2FTyL117PCyOCPW1Y8BZpC8YusIuhqmfwgPOYqGuh6E05QW%2FQPPVDtc5KdOsJJ7C36twHRmsc3X3z%2FAvxGfEvGOjZQQdxH%2FXgVdNLJAsUTvLwrrlFB1cAxYa2aGAM1xB6AKStOM2eoyxxPDSg%2FfkgWJwU7NTbo%2FotmytDDXuWavbPxxo8dR0REnXah1d02n1Ixaj3vod0zeYKSwdZMl3ni3shlXFCLMYanQLl0FINXDzNewkhdD7vgxFsg24yMPagtMQGOqUBbhuKiZlBhvoGky9%2BysZAG4J1%2BysiHldgYp6Ce3MW35GS0aBvnViCu%2B6RpEWq%2FlByHEW0JRzI26lbSnHnkkvCwcSP%2B5Kbj9n%2BihmnOGEredghIMHcjpI8KBRz8tSVny9Zc12vxLncQ1EHhFvBh296rzjqd8tLrPL731zM8oop%2F9Zq4RrpdNYJQPSblN%2Fqvluk58GjsEnX5uczoZaS1OVpK0LVLd1j&X-Amz-Signature=cf224e2cfe2f0203c2a082b01da63b068ab1e632a3d480cee284e128fa33d6d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYTOJCOY%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1sT4FdKmkWkjmzt%2Fiscsz%2BHnS698aBQbU7%2FTv6mPLhgIgPWQUo9vpEfGtmA5G5RO8HnwQ2teXmGe9YXh%2F1cxa6AsqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHp3zJjwMeMzOwhx7yrcA4l6Vnplh7CoJbwgpLFAh1T9et2UwpD8vRS8zWJRA2xFB4zHMnu9nVvD70lMjZLxgEJGtpMZfVHCaHnAwpRqpO5FFrweEnEar3DvAXC2fAW9SS1oP8%2FB%2BjdaKN0Th7aZveSFdQJ5SXULL9pjwXAFmiLdPOzB8ME3pObGI1z9HALHAeuiSnGGKDALzhIWyYLRo1hvsFbA8Hq7oa6zQj%2BsXeab3r4Dcs7XPyHn96Ydci7HXTumKqwq4nfUAUvT1cDSqRIipe4uiblQ5huMG%2Fr7SPnkXG1IlQYQ%2F8%2B1zRyL0UqgnQjeebbSYgbW3%2BS8MwsRFpeFOCNFd%2FjkTAwMdsATnpSVeS62xOK%2FjyJCVYLuXNB%2FEVjefA6p7Ufukzt%2B5xlO%2FTyL117PCyOCPW1Y8BZpC8YusIuhqmfwgPOYqGuh6E05QW%2FQPPVDtc5KdOsJJ7C36twHRmsc3X3z%2FAvxGfEvGOjZQQdxH%2FXgVdNLJAsUTvLwrrlFB1cAxYa2aGAM1xB6AKStOM2eoyxxPDSg%2FfkgWJwU7NTbo%2FotmytDDXuWavbPxxo8dR0REnXah1d02n1Ixaj3vod0zeYKSwdZMl3ni3shlXFCLMYanQLl0FINXDzNewkhdD7vgxFsg24yMPagtMQGOqUBbhuKiZlBhvoGky9%2BysZAG4J1%2BysiHldgYp6Ce3MW35GS0aBvnViCu%2B6RpEWq%2FlByHEW0JRzI26lbSnHnkkvCwcSP%2B5Kbj9n%2BihmnOGEredghIMHcjpI8KBRz8tSVny9Zc12vxLncQ1EHhFvBh296rzjqd8tLrPL731zM8oop%2F9Zq4RrpdNYJQPSblN%2Fqvluk58GjsEnX5uczoZaS1OVpK0LVLd1j&X-Amz-Signature=0f6749317763877c4631a0a1522d1db6d245a257f208f719a6b984b70925cdfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYTOJCOY%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1sT4FdKmkWkjmzt%2Fiscsz%2BHnS698aBQbU7%2FTv6mPLhgIgPWQUo9vpEfGtmA5G5RO8HnwQ2teXmGe9YXh%2F1cxa6AsqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHp3zJjwMeMzOwhx7yrcA4l6Vnplh7CoJbwgpLFAh1T9et2UwpD8vRS8zWJRA2xFB4zHMnu9nVvD70lMjZLxgEJGtpMZfVHCaHnAwpRqpO5FFrweEnEar3DvAXC2fAW9SS1oP8%2FB%2BjdaKN0Th7aZveSFdQJ5SXULL9pjwXAFmiLdPOzB8ME3pObGI1z9HALHAeuiSnGGKDALzhIWyYLRo1hvsFbA8Hq7oa6zQj%2BsXeab3r4Dcs7XPyHn96Ydci7HXTumKqwq4nfUAUvT1cDSqRIipe4uiblQ5huMG%2Fr7SPnkXG1IlQYQ%2F8%2B1zRyL0UqgnQjeebbSYgbW3%2BS8MwsRFpeFOCNFd%2FjkTAwMdsATnpSVeS62xOK%2FjyJCVYLuXNB%2FEVjefA6p7Ufukzt%2B5xlO%2FTyL117PCyOCPW1Y8BZpC8YusIuhqmfwgPOYqGuh6E05QW%2FQPPVDtc5KdOsJJ7C36twHRmsc3X3z%2FAvxGfEvGOjZQQdxH%2FXgVdNLJAsUTvLwrrlFB1cAxYa2aGAM1xB6AKStOM2eoyxxPDSg%2FfkgWJwU7NTbo%2FotmytDDXuWavbPxxo8dR0REnXah1d02n1Ixaj3vod0zeYKSwdZMl3ni3shlXFCLMYanQLl0FINXDzNewkhdD7vgxFsg24yMPagtMQGOqUBbhuKiZlBhvoGky9%2BysZAG4J1%2BysiHldgYp6Ce3MW35GS0aBvnViCu%2B6RpEWq%2FlByHEW0JRzI26lbSnHnkkvCwcSP%2B5Kbj9n%2BihmnOGEredghIMHcjpI8KBRz8tSVny9Zc12vxLncQ1EHhFvBh296rzjqd8tLrPL731zM8oop%2F9Zq4RrpdNYJQPSblN%2Fqvluk58GjsEnX5uczoZaS1OVpK0LVLd1j&X-Amz-Signature=a7407d6836b0fcf965071864e4fb45f5746e499b81798a1effefea331a847179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYTOJCOY%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1sT4FdKmkWkjmzt%2Fiscsz%2BHnS698aBQbU7%2FTv6mPLhgIgPWQUo9vpEfGtmA5G5RO8HnwQ2teXmGe9YXh%2F1cxa6AsqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHp3zJjwMeMzOwhx7yrcA4l6Vnplh7CoJbwgpLFAh1T9et2UwpD8vRS8zWJRA2xFB4zHMnu9nVvD70lMjZLxgEJGtpMZfVHCaHnAwpRqpO5FFrweEnEar3DvAXC2fAW9SS1oP8%2FB%2BjdaKN0Th7aZveSFdQJ5SXULL9pjwXAFmiLdPOzB8ME3pObGI1z9HALHAeuiSnGGKDALzhIWyYLRo1hvsFbA8Hq7oa6zQj%2BsXeab3r4Dcs7XPyHn96Ydci7HXTumKqwq4nfUAUvT1cDSqRIipe4uiblQ5huMG%2Fr7SPnkXG1IlQYQ%2F8%2B1zRyL0UqgnQjeebbSYgbW3%2BS8MwsRFpeFOCNFd%2FjkTAwMdsATnpSVeS62xOK%2FjyJCVYLuXNB%2FEVjefA6p7Ufukzt%2B5xlO%2FTyL117PCyOCPW1Y8BZpC8YusIuhqmfwgPOYqGuh6E05QW%2FQPPVDtc5KdOsJJ7C36twHRmsc3X3z%2FAvxGfEvGOjZQQdxH%2FXgVdNLJAsUTvLwrrlFB1cAxYa2aGAM1xB6AKStOM2eoyxxPDSg%2FfkgWJwU7NTbo%2FotmytDDXuWavbPxxo8dR0REnXah1d02n1Ixaj3vod0zeYKSwdZMl3ni3shlXFCLMYanQLl0FINXDzNewkhdD7vgxFsg24yMPagtMQGOqUBbhuKiZlBhvoGky9%2BysZAG4J1%2BysiHldgYp6Ce3MW35GS0aBvnViCu%2B6RpEWq%2FlByHEW0JRzI26lbSnHnkkvCwcSP%2B5Kbj9n%2BihmnOGEredghIMHcjpI8KBRz8tSVny9Zc12vxLncQ1EHhFvBh296rzjqd8tLrPL731zM8oop%2F9Zq4RrpdNYJQPSblN%2Fqvluk58GjsEnX5uczoZaS1OVpK0LVLd1j&X-Amz-Signature=43ec4b3d0bda8e92a7c52c51facd17a0f29aab6ff21b943adbe71b39218ef126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYTOJCOY%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1sT4FdKmkWkjmzt%2Fiscsz%2BHnS698aBQbU7%2FTv6mPLhgIgPWQUo9vpEfGtmA5G5RO8HnwQ2teXmGe9YXh%2F1cxa6AsqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHp3zJjwMeMzOwhx7yrcA4l6Vnplh7CoJbwgpLFAh1T9et2UwpD8vRS8zWJRA2xFB4zHMnu9nVvD70lMjZLxgEJGtpMZfVHCaHnAwpRqpO5FFrweEnEar3DvAXC2fAW9SS1oP8%2FB%2BjdaKN0Th7aZveSFdQJ5SXULL9pjwXAFmiLdPOzB8ME3pObGI1z9HALHAeuiSnGGKDALzhIWyYLRo1hvsFbA8Hq7oa6zQj%2BsXeab3r4Dcs7XPyHn96Ydci7HXTumKqwq4nfUAUvT1cDSqRIipe4uiblQ5huMG%2Fr7SPnkXG1IlQYQ%2F8%2B1zRyL0UqgnQjeebbSYgbW3%2BS8MwsRFpeFOCNFd%2FjkTAwMdsATnpSVeS62xOK%2FjyJCVYLuXNB%2FEVjefA6p7Ufukzt%2B5xlO%2FTyL117PCyOCPW1Y8BZpC8YusIuhqmfwgPOYqGuh6E05QW%2FQPPVDtc5KdOsJJ7C36twHRmsc3X3z%2FAvxGfEvGOjZQQdxH%2FXgVdNLJAsUTvLwrrlFB1cAxYa2aGAM1xB6AKStOM2eoyxxPDSg%2FfkgWJwU7NTbo%2FotmytDDXuWavbPxxo8dR0REnXah1d02n1Ixaj3vod0zeYKSwdZMl3ni3shlXFCLMYanQLl0FINXDzNewkhdD7vgxFsg24yMPagtMQGOqUBbhuKiZlBhvoGky9%2BysZAG4J1%2BysiHldgYp6Ce3MW35GS0aBvnViCu%2B6RpEWq%2FlByHEW0JRzI26lbSnHnkkvCwcSP%2B5Kbj9n%2BihmnOGEredghIMHcjpI8KBRz8tSVny9Zc12vxLncQ1EHhFvBh296rzjqd8tLrPL731zM8oop%2F9Zq4RrpdNYJQPSblN%2Fqvluk58GjsEnX5uczoZaS1OVpK0LVLd1j&X-Amz-Signature=224fab6c2b84fb2945a1b15cdd34484494904634dabb3525cc20386e3d922e8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYTOJCOY%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1sT4FdKmkWkjmzt%2Fiscsz%2BHnS698aBQbU7%2FTv6mPLhgIgPWQUo9vpEfGtmA5G5RO8HnwQ2teXmGe9YXh%2F1cxa6AsqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHp3zJjwMeMzOwhx7yrcA4l6Vnplh7CoJbwgpLFAh1T9et2UwpD8vRS8zWJRA2xFB4zHMnu9nVvD70lMjZLxgEJGtpMZfVHCaHnAwpRqpO5FFrweEnEar3DvAXC2fAW9SS1oP8%2FB%2BjdaKN0Th7aZveSFdQJ5SXULL9pjwXAFmiLdPOzB8ME3pObGI1z9HALHAeuiSnGGKDALzhIWyYLRo1hvsFbA8Hq7oa6zQj%2BsXeab3r4Dcs7XPyHn96Ydci7HXTumKqwq4nfUAUvT1cDSqRIipe4uiblQ5huMG%2Fr7SPnkXG1IlQYQ%2F8%2B1zRyL0UqgnQjeebbSYgbW3%2BS8MwsRFpeFOCNFd%2FjkTAwMdsATnpSVeS62xOK%2FjyJCVYLuXNB%2FEVjefA6p7Ufukzt%2B5xlO%2FTyL117PCyOCPW1Y8BZpC8YusIuhqmfwgPOYqGuh6E05QW%2FQPPVDtc5KdOsJJ7C36twHRmsc3X3z%2FAvxGfEvGOjZQQdxH%2FXgVdNLJAsUTvLwrrlFB1cAxYa2aGAM1xB6AKStOM2eoyxxPDSg%2FfkgWJwU7NTbo%2FotmytDDXuWavbPxxo8dR0REnXah1d02n1Ixaj3vod0zeYKSwdZMl3ni3shlXFCLMYanQLl0FINXDzNewkhdD7vgxFsg24yMPagtMQGOqUBbhuKiZlBhvoGky9%2BysZAG4J1%2BysiHldgYp6Ce3MW35GS0aBvnViCu%2B6RpEWq%2FlByHEW0JRzI26lbSnHnkkvCwcSP%2B5Kbj9n%2BihmnOGEredghIMHcjpI8KBRz8tSVny9Zc12vxLncQ1EHhFvBh296rzjqd8tLrPL731zM8oop%2F9Zq4RrpdNYJQPSblN%2Fqvluk58GjsEnX5uczoZaS1OVpK0LVLd1j&X-Amz-Signature=f8ceafac5a6b15993381a6ac8821e5f26ebab9e324e9aae75de27c4e0fd560a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYTOJCOY%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1sT4FdKmkWkjmzt%2Fiscsz%2BHnS698aBQbU7%2FTv6mPLhgIgPWQUo9vpEfGtmA5G5RO8HnwQ2teXmGe9YXh%2F1cxa6AsqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHp3zJjwMeMzOwhx7yrcA4l6Vnplh7CoJbwgpLFAh1T9et2UwpD8vRS8zWJRA2xFB4zHMnu9nVvD70lMjZLxgEJGtpMZfVHCaHnAwpRqpO5FFrweEnEar3DvAXC2fAW9SS1oP8%2FB%2BjdaKN0Th7aZveSFdQJ5SXULL9pjwXAFmiLdPOzB8ME3pObGI1z9HALHAeuiSnGGKDALzhIWyYLRo1hvsFbA8Hq7oa6zQj%2BsXeab3r4Dcs7XPyHn96Ydci7HXTumKqwq4nfUAUvT1cDSqRIipe4uiblQ5huMG%2Fr7SPnkXG1IlQYQ%2F8%2B1zRyL0UqgnQjeebbSYgbW3%2BS8MwsRFpeFOCNFd%2FjkTAwMdsATnpSVeS62xOK%2FjyJCVYLuXNB%2FEVjefA6p7Ufukzt%2B5xlO%2FTyL117PCyOCPW1Y8BZpC8YusIuhqmfwgPOYqGuh6E05QW%2FQPPVDtc5KdOsJJ7C36twHRmsc3X3z%2FAvxGfEvGOjZQQdxH%2FXgVdNLJAsUTvLwrrlFB1cAxYa2aGAM1xB6AKStOM2eoyxxPDSg%2FfkgWJwU7NTbo%2FotmytDDXuWavbPxxo8dR0REnXah1d02n1Ixaj3vod0zeYKSwdZMl3ni3shlXFCLMYanQLl0FINXDzNewkhdD7vgxFsg24yMPagtMQGOqUBbhuKiZlBhvoGky9%2BysZAG4J1%2BysiHldgYp6Ce3MW35GS0aBvnViCu%2B6RpEWq%2FlByHEW0JRzI26lbSnHnkkvCwcSP%2B5Kbj9n%2BihmnOGEredghIMHcjpI8KBRz8tSVny9Zc12vxLncQ1EHhFvBh296rzjqd8tLrPL731zM8oop%2F9Zq4RrpdNYJQPSblN%2Fqvluk58GjsEnX5uczoZaS1OVpK0LVLd1j&X-Amz-Signature=ccc203f335a0533c6f0297d741b887e78e79c62cd1bc10952eb4d0b0e7d8cae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
