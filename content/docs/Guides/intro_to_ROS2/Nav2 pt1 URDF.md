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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H3ABCC2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0kSyYyLd1c0gdOfB4DTVbcAcMFHO3pNEbrMOTd3wW6AiBM2tdh9bd%2FCMitxTWzpn5%2BjgV8rpdQQTiHNfJChYaj6Cr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMXV9lPY64L3IChHv2KtwDGHTjshwF9OUboKIJGKDN4G2fYEYDgHUTGOmKOSXxIXGdpDoO55U6d90asMgGIwAoDynw4KOiZcDt1Uz%2FZnJ2Wg5Saj6PspaIUcHx0BDnFs%2BlCxqfkjx8txAGZjtUkhqnsHO%2FcwPsTjSE0YmmlS%2B0Y6ZanaBEoEH98pHUAGc9inz91ZZB2tCH90h5yJ%2B5MQRnl6XY4xDfmZzd4SbSTXtCr6InLlwUTQDbiRLoKPuklM6U6NmVrElROfn7kbz4wVwW9WUWWNxZeB9nc4HM5TU%2FaQUhRaUp1owmMh%2FyIczHzH2oZ7hNReOEbQKx2kd1psLESWxqzM94Y%2BeDWIWQzTMYtIv0cDAqNCNKjIBblxZazHUXMontF8P58V5vJemGF4eYWvOeF53IH6u6CBpAC4IxGejucKtbAQGcEXMm2PNNVwwjSCnwYKtSQ2pBc2a61oVcvUfzY91hPBW6oD%2FhgDNBABd0S9zVl0fT8Kg%2F%2F4MsXdQ7v0Ceq2%2FT96%2B2IBKS0cCAyNosAYlafDJzZYl5h5hEqddCTUKGbCtsHo1PVMYZMWf2BBiArshcAJrExxhGgQW%2BxU27qS%2FAFDG5Ymg5Xm9hBHmiBTeDKoeH%2FETS3f3E4YV1%2FD2B0ZQuklJIeXowuoC6xAY6pgGPw%2Bg0yND2RvzfPJ2vGBlzl8GE2ESMHCbzKx90tE3QEW4uHzoG2uTUxHT3L5Ba3HeBwHcR%2FRjUkyptSfa8g3bE%2Fz49ZbTfUvGAdX%2B3hXjvjSKDE%2Ffkjoak7DS7CAvB2ID5zFdaL%2FGALUfW%2FAN91U8o1kTQgh1eKW%2F%2FG8ktzGGoxQNKCHE654PVs61MHGZPZ%2FchfCDNlmfZpy2gNH2nTI9xiNP8NiLr&X-Amz-Signature=e13a83104d6ee9577b784990dc18c463edef0b8cf933999034e149a2952eceff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H3ABCC2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0kSyYyLd1c0gdOfB4DTVbcAcMFHO3pNEbrMOTd3wW6AiBM2tdh9bd%2FCMitxTWzpn5%2BjgV8rpdQQTiHNfJChYaj6Cr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMXV9lPY64L3IChHv2KtwDGHTjshwF9OUboKIJGKDN4G2fYEYDgHUTGOmKOSXxIXGdpDoO55U6d90asMgGIwAoDynw4KOiZcDt1Uz%2FZnJ2Wg5Saj6PspaIUcHx0BDnFs%2BlCxqfkjx8txAGZjtUkhqnsHO%2FcwPsTjSE0YmmlS%2B0Y6ZanaBEoEH98pHUAGc9inz91ZZB2tCH90h5yJ%2B5MQRnl6XY4xDfmZzd4SbSTXtCr6InLlwUTQDbiRLoKPuklM6U6NmVrElROfn7kbz4wVwW9WUWWNxZeB9nc4HM5TU%2FaQUhRaUp1owmMh%2FyIczHzH2oZ7hNReOEbQKx2kd1psLESWxqzM94Y%2BeDWIWQzTMYtIv0cDAqNCNKjIBblxZazHUXMontF8P58V5vJemGF4eYWvOeF53IH6u6CBpAC4IxGejucKtbAQGcEXMm2PNNVwwjSCnwYKtSQ2pBc2a61oVcvUfzY91hPBW6oD%2FhgDNBABd0S9zVl0fT8Kg%2F%2F4MsXdQ7v0Ceq2%2FT96%2B2IBKS0cCAyNosAYlafDJzZYl5h5hEqddCTUKGbCtsHo1PVMYZMWf2BBiArshcAJrExxhGgQW%2BxU27qS%2FAFDG5Ymg5Xm9hBHmiBTeDKoeH%2FETS3f3E4YV1%2FD2B0ZQuklJIeXowuoC6xAY6pgGPw%2Bg0yND2RvzfPJ2vGBlzl8GE2ESMHCbzKx90tE3QEW4uHzoG2uTUxHT3L5Ba3HeBwHcR%2FRjUkyptSfa8g3bE%2Fz49ZbTfUvGAdX%2B3hXjvjSKDE%2Ffkjoak7DS7CAvB2ID5zFdaL%2FGALUfW%2FAN91U8o1kTQgh1eKW%2F%2FG8ktzGGoxQNKCHE654PVs61MHGZPZ%2FchfCDNlmfZpy2gNH2nTI9xiNP8NiLr&X-Amz-Signature=be6003d6022a2597cb33d7268ceea09c5f2999a93a3ea49a91b542d6fc2d970c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H3ABCC2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0kSyYyLd1c0gdOfB4DTVbcAcMFHO3pNEbrMOTd3wW6AiBM2tdh9bd%2FCMitxTWzpn5%2BjgV8rpdQQTiHNfJChYaj6Cr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMXV9lPY64L3IChHv2KtwDGHTjshwF9OUboKIJGKDN4G2fYEYDgHUTGOmKOSXxIXGdpDoO55U6d90asMgGIwAoDynw4KOiZcDt1Uz%2FZnJ2Wg5Saj6PspaIUcHx0BDnFs%2BlCxqfkjx8txAGZjtUkhqnsHO%2FcwPsTjSE0YmmlS%2B0Y6ZanaBEoEH98pHUAGc9inz91ZZB2tCH90h5yJ%2B5MQRnl6XY4xDfmZzd4SbSTXtCr6InLlwUTQDbiRLoKPuklM6U6NmVrElROfn7kbz4wVwW9WUWWNxZeB9nc4HM5TU%2FaQUhRaUp1owmMh%2FyIczHzH2oZ7hNReOEbQKx2kd1psLESWxqzM94Y%2BeDWIWQzTMYtIv0cDAqNCNKjIBblxZazHUXMontF8P58V5vJemGF4eYWvOeF53IH6u6CBpAC4IxGejucKtbAQGcEXMm2PNNVwwjSCnwYKtSQ2pBc2a61oVcvUfzY91hPBW6oD%2FhgDNBABd0S9zVl0fT8Kg%2F%2F4MsXdQ7v0Ceq2%2FT96%2B2IBKS0cCAyNosAYlafDJzZYl5h5hEqddCTUKGbCtsHo1PVMYZMWf2BBiArshcAJrExxhGgQW%2BxU27qS%2FAFDG5Ymg5Xm9hBHmiBTeDKoeH%2FETS3f3E4YV1%2FD2B0ZQuklJIeXowuoC6xAY6pgGPw%2Bg0yND2RvzfPJ2vGBlzl8GE2ESMHCbzKx90tE3QEW4uHzoG2uTUxHT3L5Ba3HeBwHcR%2FRjUkyptSfa8g3bE%2Fz49ZbTfUvGAdX%2B3hXjvjSKDE%2Ffkjoak7DS7CAvB2ID5zFdaL%2FGALUfW%2FAN91U8o1kTQgh1eKW%2F%2FG8ktzGGoxQNKCHE654PVs61MHGZPZ%2FchfCDNlmfZpy2gNH2nTI9xiNP8NiLr&X-Amz-Signature=6a81a8839a79598b5da8aa9eddcaba48bc1588ef67c29b196d8a2e1a7936ac75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H3ABCC2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0kSyYyLd1c0gdOfB4DTVbcAcMFHO3pNEbrMOTd3wW6AiBM2tdh9bd%2FCMitxTWzpn5%2BjgV8rpdQQTiHNfJChYaj6Cr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMXV9lPY64L3IChHv2KtwDGHTjshwF9OUboKIJGKDN4G2fYEYDgHUTGOmKOSXxIXGdpDoO55U6d90asMgGIwAoDynw4KOiZcDt1Uz%2FZnJ2Wg5Saj6PspaIUcHx0BDnFs%2BlCxqfkjx8txAGZjtUkhqnsHO%2FcwPsTjSE0YmmlS%2B0Y6ZanaBEoEH98pHUAGc9inz91ZZB2tCH90h5yJ%2B5MQRnl6XY4xDfmZzd4SbSTXtCr6InLlwUTQDbiRLoKPuklM6U6NmVrElROfn7kbz4wVwW9WUWWNxZeB9nc4HM5TU%2FaQUhRaUp1owmMh%2FyIczHzH2oZ7hNReOEbQKx2kd1psLESWxqzM94Y%2BeDWIWQzTMYtIv0cDAqNCNKjIBblxZazHUXMontF8P58V5vJemGF4eYWvOeF53IH6u6CBpAC4IxGejucKtbAQGcEXMm2PNNVwwjSCnwYKtSQ2pBc2a61oVcvUfzY91hPBW6oD%2FhgDNBABd0S9zVl0fT8Kg%2F%2F4MsXdQ7v0Ceq2%2FT96%2B2IBKS0cCAyNosAYlafDJzZYl5h5hEqddCTUKGbCtsHo1PVMYZMWf2BBiArshcAJrExxhGgQW%2BxU27qS%2FAFDG5Ymg5Xm9hBHmiBTeDKoeH%2FETS3f3E4YV1%2FD2B0ZQuklJIeXowuoC6xAY6pgGPw%2Bg0yND2RvzfPJ2vGBlzl8GE2ESMHCbzKx90tE3QEW4uHzoG2uTUxHT3L5Ba3HeBwHcR%2FRjUkyptSfa8g3bE%2Fz49ZbTfUvGAdX%2B3hXjvjSKDE%2Ffkjoak7DS7CAvB2ID5zFdaL%2FGALUfW%2FAN91U8o1kTQgh1eKW%2F%2FG8ktzGGoxQNKCHE654PVs61MHGZPZ%2FchfCDNlmfZpy2gNH2nTI9xiNP8NiLr&X-Amz-Signature=13d8f5e51a455f7a7f14916db6996b77ffb4d21f3da94a796f751f2ee8682b68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H3ABCC2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0kSyYyLd1c0gdOfB4DTVbcAcMFHO3pNEbrMOTd3wW6AiBM2tdh9bd%2FCMitxTWzpn5%2BjgV8rpdQQTiHNfJChYaj6Cr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMXV9lPY64L3IChHv2KtwDGHTjshwF9OUboKIJGKDN4G2fYEYDgHUTGOmKOSXxIXGdpDoO55U6d90asMgGIwAoDynw4KOiZcDt1Uz%2FZnJ2Wg5Saj6PspaIUcHx0BDnFs%2BlCxqfkjx8txAGZjtUkhqnsHO%2FcwPsTjSE0YmmlS%2B0Y6ZanaBEoEH98pHUAGc9inz91ZZB2tCH90h5yJ%2B5MQRnl6XY4xDfmZzd4SbSTXtCr6InLlwUTQDbiRLoKPuklM6U6NmVrElROfn7kbz4wVwW9WUWWNxZeB9nc4HM5TU%2FaQUhRaUp1owmMh%2FyIczHzH2oZ7hNReOEbQKx2kd1psLESWxqzM94Y%2BeDWIWQzTMYtIv0cDAqNCNKjIBblxZazHUXMontF8P58V5vJemGF4eYWvOeF53IH6u6CBpAC4IxGejucKtbAQGcEXMm2PNNVwwjSCnwYKtSQ2pBc2a61oVcvUfzY91hPBW6oD%2FhgDNBABd0S9zVl0fT8Kg%2F%2F4MsXdQ7v0Ceq2%2FT96%2B2IBKS0cCAyNosAYlafDJzZYl5h5hEqddCTUKGbCtsHo1PVMYZMWf2BBiArshcAJrExxhGgQW%2BxU27qS%2FAFDG5Ymg5Xm9hBHmiBTeDKoeH%2FETS3f3E4YV1%2FD2B0ZQuklJIeXowuoC6xAY6pgGPw%2Bg0yND2RvzfPJ2vGBlzl8GE2ESMHCbzKx90tE3QEW4uHzoG2uTUxHT3L5Ba3HeBwHcR%2FRjUkyptSfa8g3bE%2Fz49ZbTfUvGAdX%2B3hXjvjSKDE%2Ffkjoak7DS7CAvB2ID5zFdaL%2FGALUfW%2FAN91U8o1kTQgh1eKW%2F%2FG8ktzGGoxQNKCHE654PVs61MHGZPZ%2FchfCDNlmfZpy2gNH2nTI9xiNP8NiLr&X-Amz-Signature=b664e1d35e30eae0bc82b692a0d282f32c37fef649ebb74a57f35867872a7306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H3ABCC2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0kSyYyLd1c0gdOfB4DTVbcAcMFHO3pNEbrMOTd3wW6AiBM2tdh9bd%2FCMitxTWzpn5%2BjgV8rpdQQTiHNfJChYaj6Cr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMXV9lPY64L3IChHv2KtwDGHTjshwF9OUboKIJGKDN4G2fYEYDgHUTGOmKOSXxIXGdpDoO55U6d90asMgGIwAoDynw4KOiZcDt1Uz%2FZnJ2Wg5Saj6PspaIUcHx0BDnFs%2BlCxqfkjx8txAGZjtUkhqnsHO%2FcwPsTjSE0YmmlS%2B0Y6ZanaBEoEH98pHUAGc9inz91ZZB2tCH90h5yJ%2B5MQRnl6XY4xDfmZzd4SbSTXtCr6InLlwUTQDbiRLoKPuklM6U6NmVrElROfn7kbz4wVwW9WUWWNxZeB9nc4HM5TU%2FaQUhRaUp1owmMh%2FyIczHzH2oZ7hNReOEbQKx2kd1psLESWxqzM94Y%2BeDWIWQzTMYtIv0cDAqNCNKjIBblxZazHUXMontF8P58V5vJemGF4eYWvOeF53IH6u6CBpAC4IxGejucKtbAQGcEXMm2PNNVwwjSCnwYKtSQ2pBc2a61oVcvUfzY91hPBW6oD%2FhgDNBABd0S9zVl0fT8Kg%2F%2F4MsXdQ7v0Ceq2%2FT96%2B2IBKS0cCAyNosAYlafDJzZYl5h5hEqddCTUKGbCtsHo1PVMYZMWf2BBiArshcAJrExxhGgQW%2BxU27qS%2FAFDG5Ymg5Xm9hBHmiBTeDKoeH%2FETS3f3E4YV1%2FD2B0ZQuklJIeXowuoC6xAY6pgGPw%2Bg0yND2RvzfPJ2vGBlzl8GE2ESMHCbzKx90tE3QEW4uHzoG2uTUxHT3L5Ba3HeBwHcR%2FRjUkyptSfa8g3bE%2Fz49ZbTfUvGAdX%2B3hXjvjSKDE%2Ffkjoak7DS7CAvB2ID5zFdaL%2FGALUfW%2FAN91U8o1kTQgh1eKW%2F%2FG8ktzGGoxQNKCHE654PVs61MHGZPZ%2FchfCDNlmfZpy2gNH2nTI9xiNP8NiLr&X-Amz-Signature=93dc535459e844055b59d78f1984cf4b13d3777e9e1fe7e9b73b2c6a2ed41b15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H3ABCC2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0kSyYyLd1c0gdOfB4DTVbcAcMFHO3pNEbrMOTd3wW6AiBM2tdh9bd%2FCMitxTWzpn5%2BjgV8rpdQQTiHNfJChYaj6Cr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMXV9lPY64L3IChHv2KtwDGHTjshwF9OUboKIJGKDN4G2fYEYDgHUTGOmKOSXxIXGdpDoO55U6d90asMgGIwAoDynw4KOiZcDt1Uz%2FZnJ2Wg5Saj6PspaIUcHx0BDnFs%2BlCxqfkjx8txAGZjtUkhqnsHO%2FcwPsTjSE0YmmlS%2B0Y6ZanaBEoEH98pHUAGc9inz91ZZB2tCH90h5yJ%2B5MQRnl6XY4xDfmZzd4SbSTXtCr6InLlwUTQDbiRLoKPuklM6U6NmVrElROfn7kbz4wVwW9WUWWNxZeB9nc4HM5TU%2FaQUhRaUp1owmMh%2FyIczHzH2oZ7hNReOEbQKx2kd1psLESWxqzM94Y%2BeDWIWQzTMYtIv0cDAqNCNKjIBblxZazHUXMontF8P58V5vJemGF4eYWvOeF53IH6u6CBpAC4IxGejucKtbAQGcEXMm2PNNVwwjSCnwYKtSQ2pBc2a61oVcvUfzY91hPBW6oD%2FhgDNBABd0S9zVl0fT8Kg%2F%2F4MsXdQ7v0Ceq2%2FT96%2B2IBKS0cCAyNosAYlafDJzZYl5h5hEqddCTUKGbCtsHo1PVMYZMWf2BBiArshcAJrExxhGgQW%2BxU27qS%2FAFDG5Ymg5Xm9hBHmiBTeDKoeH%2FETS3f3E4YV1%2FD2B0ZQuklJIeXowuoC6xAY6pgGPw%2Bg0yND2RvzfPJ2vGBlzl8GE2ESMHCbzKx90tE3QEW4uHzoG2uTUxHT3L5Ba3HeBwHcR%2FRjUkyptSfa8g3bE%2Fz49ZbTfUvGAdX%2B3hXjvjSKDE%2Ffkjoak7DS7CAvB2ID5zFdaL%2FGALUfW%2FAN91U8o1kTQgh1eKW%2F%2FG8ktzGGoxQNKCHE654PVs61MHGZPZ%2FchfCDNlmfZpy2gNH2nTI9xiNP8NiLr&X-Amz-Signature=8064599034175695837094ac2a2c654783829ee6436896b6f0ec1dd46ec098e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H3ABCC2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0kSyYyLd1c0gdOfB4DTVbcAcMFHO3pNEbrMOTd3wW6AiBM2tdh9bd%2FCMitxTWzpn5%2BjgV8rpdQQTiHNfJChYaj6Cr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMXV9lPY64L3IChHv2KtwDGHTjshwF9OUboKIJGKDN4G2fYEYDgHUTGOmKOSXxIXGdpDoO55U6d90asMgGIwAoDynw4KOiZcDt1Uz%2FZnJ2Wg5Saj6PspaIUcHx0BDnFs%2BlCxqfkjx8txAGZjtUkhqnsHO%2FcwPsTjSE0YmmlS%2B0Y6ZanaBEoEH98pHUAGc9inz91ZZB2tCH90h5yJ%2B5MQRnl6XY4xDfmZzd4SbSTXtCr6InLlwUTQDbiRLoKPuklM6U6NmVrElROfn7kbz4wVwW9WUWWNxZeB9nc4HM5TU%2FaQUhRaUp1owmMh%2FyIczHzH2oZ7hNReOEbQKx2kd1psLESWxqzM94Y%2BeDWIWQzTMYtIv0cDAqNCNKjIBblxZazHUXMontF8P58V5vJemGF4eYWvOeF53IH6u6CBpAC4IxGejucKtbAQGcEXMm2PNNVwwjSCnwYKtSQ2pBc2a61oVcvUfzY91hPBW6oD%2FhgDNBABd0S9zVl0fT8Kg%2F%2F4MsXdQ7v0Ceq2%2FT96%2B2IBKS0cCAyNosAYlafDJzZYl5h5hEqddCTUKGbCtsHo1PVMYZMWf2BBiArshcAJrExxhGgQW%2BxU27qS%2FAFDG5Ymg5Xm9hBHmiBTeDKoeH%2FETS3f3E4YV1%2FD2B0ZQuklJIeXowuoC6xAY6pgGPw%2Bg0yND2RvzfPJ2vGBlzl8GE2ESMHCbzKx90tE3QEW4uHzoG2uTUxHT3L5Ba3HeBwHcR%2FRjUkyptSfa8g3bE%2Fz49ZbTfUvGAdX%2B3hXjvjSKDE%2Ffkjoak7DS7CAvB2ID5zFdaL%2FGALUfW%2FAN91U8o1kTQgh1eKW%2F%2FG8ktzGGoxQNKCHE654PVs61MHGZPZ%2FchfCDNlmfZpy2gNH2nTI9xiNP8NiLr&X-Amz-Signature=358d2a8067dce39d0d8f22a2623a8655c600ab0d840d1f4736b8ea12efadebc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H3ABCC2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0kSyYyLd1c0gdOfB4DTVbcAcMFHO3pNEbrMOTd3wW6AiBM2tdh9bd%2FCMitxTWzpn5%2BjgV8rpdQQTiHNfJChYaj6Cr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMXV9lPY64L3IChHv2KtwDGHTjshwF9OUboKIJGKDN4G2fYEYDgHUTGOmKOSXxIXGdpDoO55U6d90asMgGIwAoDynw4KOiZcDt1Uz%2FZnJ2Wg5Saj6PspaIUcHx0BDnFs%2BlCxqfkjx8txAGZjtUkhqnsHO%2FcwPsTjSE0YmmlS%2B0Y6ZanaBEoEH98pHUAGc9inz91ZZB2tCH90h5yJ%2B5MQRnl6XY4xDfmZzd4SbSTXtCr6InLlwUTQDbiRLoKPuklM6U6NmVrElROfn7kbz4wVwW9WUWWNxZeB9nc4HM5TU%2FaQUhRaUp1owmMh%2FyIczHzH2oZ7hNReOEbQKx2kd1psLESWxqzM94Y%2BeDWIWQzTMYtIv0cDAqNCNKjIBblxZazHUXMontF8P58V5vJemGF4eYWvOeF53IH6u6CBpAC4IxGejucKtbAQGcEXMm2PNNVwwjSCnwYKtSQ2pBc2a61oVcvUfzY91hPBW6oD%2FhgDNBABd0S9zVl0fT8Kg%2F%2F4MsXdQ7v0Ceq2%2FT96%2B2IBKS0cCAyNosAYlafDJzZYl5h5hEqddCTUKGbCtsHo1PVMYZMWf2BBiArshcAJrExxhGgQW%2BxU27qS%2FAFDG5Ymg5Xm9hBHmiBTeDKoeH%2FETS3f3E4YV1%2FD2B0ZQuklJIeXowuoC6xAY6pgGPw%2Bg0yND2RvzfPJ2vGBlzl8GE2ESMHCbzKx90tE3QEW4uHzoG2uTUxHT3L5Ba3HeBwHcR%2FRjUkyptSfa8g3bE%2Fz49ZbTfUvGAdX%2B3hXjvjSKDE%2Ffkjoak7DS7CAvB2ID5zFdaL%2FGALUfW%2FAN91U8o1kTQgh1eKW%2F%2FG8ktzGGoxQNKCHE654PVs61MHGZPZ%2FchfCDNlmfZpy2gNH2nTI9xiNP8NiLr&X-Amz-Signature=f343322a9406de285cd08f19ea43b827767933d61bad7218a720d1de0a2fb52b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H3ABCC2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0kSyYyLd1c0gdOfB4DTVbcAcMFHO3pNEbrMOTd3wW6AiBM2tdh9bd%2FCMitxTWzpn5%2BjgV8rpdQQTiHNfJChYaj6Cr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMXV9lPY64L3IChHv2KtwDGHTjshwF9OUboKIJGKDN4G2fYEYDgHUTGOmKOSXxIXGdpDoO55U6d90asMgGIwAoDynw4KOiZcDt1Uz%2FZnJ2Wg5Saj6PspaIUcHx0BDnFs%2BlCxqfkjx8txAGZjtUkhqnsHO%2FcwPsTjSE0YmmlS%2B0Y6ZanaBEoEH98pHUAGc9inz91ZZB2tCH90h5yJ%2B5MQRnl6XY4xDfmZzd4SbSTXtCr6InLlwUTQDbiRLoKPuklM6U6NmVrElROfn7kbz4wVwW9WUWWNxZeB9nc4HM5TU%2FaQUhRaUp1owmMh%2FyIczHzH2oZ7hNReOEbQKx2kd1psLESWxqzM94Y%2BeDWIWQzTMYtIv0cDAqNCNKjIBblxZazHUXMontF8P58V5vJemGF4eYWvOeF53IH6u6CBpAC4IxGejucKtbAQGcEXMm2PNNVwwjSCnwYKtSQ2pBc2a61oVcvUfzY91hPBW6oD%2FhgDNBABd0S9zVl0fT8Kg%2F%2F4MsXdQ7v0Ceq2%2FT96%2B2IBKS0cCAyNosAYlafDJzZYl5h5hEqddCTUKGbCtsHo1PVMYZMWf2BBiArshcAJrExxhGgQW%2BxU27qS%2FAFDG5Ymg5Xm9hBHmiBTeDKoeH%2FETS3f3E4YV1%2FD2B0ZQuklJIeXowuoC6xAY6pgGPw%2Bg0yND2RvzfPJ2vGBlzl8GE2ESMHCbzKx90tE3QEW4uHzoG2uTUxHT3L5Ba3HeBwHcR%2FRjUkyptSfa8g3bE%2Fz49ZbTfUvGAdX%2B3hXjvjSKDE%2Ffkjoak7DS7CAvB2ID5zFdaL%2FGALUfW%2FAN91U8o1kTQgh1eKW%2F%2FG8ktzGGoxQNKCHE654PVs61MHGZPZ%2FchfCDNlmfZpy2gNH2nTI9xiNP8NiLr&X-Amz-Signature=2230d18a8ee5a338927b25c9739659f6c66affd847af95cb413aa598cf13fd17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YORBF6A3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmA250EfCQEgiGA8TNUsl6VIV1MQrfA0d%2B80klJZBapAiEAwXGCt3dU%2F9pfQF7jvGU53A8vTSOAu1ybJcwo9V5TIR0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDCDpIrwGqrDmf3hKkyrcA6sdxYAxNDc6HG4VhYDnLf32cnu4AUNxjh9ClwSQfgzcWiViZU1rdl0Q2X6vicAyh7RrDQ0ayHhbOQRVrkNIpIOAYvDFZwo%2Bu8LXrtVvGf2EVSJBWYZguXLqxD%2BVWh7dYEFP2S%2B4DGK2NUbydVN%2BlkXWXs9sJf0xTRqyV7KBr2DndtL55YmKVejFueVagDVP1ktgi%2BNsvt%2FQ4NDh%2FcFwX5k76IthTSF09GiIJ0MFEmzjQ70Uh02BRjZogGbn%2Fz7AwSU6LmyLjVuyYhpUiOyxK3UCz5Tktz7Ik%2FGRt5DO24u6dSNDGMsdQmXKRf0zP2jmydjLk2WU1EclbBcEJKC7MBjUmkotZ5hpIVl6ObsF%2FDMmTI4uHRddzdDBPmHcO8Xcc2M9j8EAklrwfbLCYT39nrC9BTW9S8%2FFPRHxL4zlcOPGT3L%2Fp85qCTEy20y3w1OK5XR%2BgMfLX%2FI5gcBWLbHzT%2FqRGdiqFBbE1BZa8hvvIUbiYcxwD3vejt882aV7eUmrqrHRGptHRyuegeff7B0FdFFDd3gsGdl5scVb%2FvhEU%2Bq30UxBHvP1ey9lFfQ4Jjvg5TIRKjWXajws6mzvqsYkfLosEMsDXaOdcDDR6xdoIE5rXrXSkIo%2BfzjOtPxdMPCAusQGOqUBywXShWhipE%2BIgpKz%2BSmFq6haZWWqwSAnmJL12v%2BmAn4EHYbC7bkN3zCqqK3MYISkQP%2FrwgGhuCoosWHGPBbX7RkNcHGl%2BvN6NWe2c7fy%2Fv%2F%2B6kAM3i9kTSCDw7C8Yv%2BMjN2w039BVINeZe04rZMZxPxqW4cjRQEPbPzy%2F4xIa%2FjSyab4YvZ2opKOea44G1vRXUONPVgd5rxAC2ok9UdViCgkNKKV&X-Amz-Signature=db2be84be4566a84545a3109c7536b164798ccd592ab0c8fcaa81179b689f143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653JD3ITD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFtigKyb%2BgcA4UftxXAvg6AK2DNvgCiD1ArQpbJ8hOVAiEArD7C0owK3B6rFncmxliLH46tnQ7EEVOUnf05uNf8Utsq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDOX6dBPJvROoaskDnCrcA3MaSknDDlUif4cztyM5zJrXVwpqC6TCukXZ4%2BUQ%2BWYlz3QPneoPtnGmuMgPlCafk4C60luj1qZFpG9DHu4UnjvdVPvj4%2FHboTNlTlPALWzBDU4t0XPvqOHLepHYSqTCwRltqD%2FuHA1ynSFCL%2FqCQDTkeDZ8ntnYtewlC96HsXG%2Fmb6aLqO5CTlghLDgAzw2o3woSu0DPtHcCNPrqddzLpt%2BtR2Aa8gXLqM4mN6LEGUyMWPYtpdyc95hccAvmn52vuCdcAgzdXDCDqSD7XVmV3O%2FB7IuPYbYPYEJwK%2F5skycnZPfXC62n9Pl7kk5nFQ30pRwgTHWoNqtclS3kjykX9cGmKexLv%2FtcW29SCTQ%2FuBAcmO%2FVzZoch3Qh8h6AJtLi3UTLDasZRzOvj1XAzU71hGHeJsgkkpJEZwt0a06qGNPXsFoPxpwguRq0TxxkH2EadUO3zU5eITPGjMhmiYT3aANXHyBnVQWvC%2BLWzq%2B1PytO%2FugnUitAu8Npgv7x9iwooYqHm%2BK6P%2BmNcxMAU4PTTXDKBunTXMrekYZW7LfY5iH9u1oM%2FylAdKLSpEh%2FMreGh1ymVPmaS8fIHHQM8D%2FX5EXmssDE2YF3%2F1E0iPmYeZ%2B7Dgz%2BZbE30QO2ByqMP6AusQGOqUB9elZRShh%2FTSSt9vP32XxTVQXMAyaTXWL6WqNTVn5Lj%2Fdfo73KjxrqQ5w%2B5QydOyhDBkNdNkbaLzbWD27cacg%2Bfi916gdsAqZ8L9fgoOL7VmtZfdlSlvCMCEiYGWJjZllg%2BidLPd0kpQpZHDYZ%2BdKCSowAs8U266OvjFb1NWVgR5OF515%2FPn1MU6GC8vOkIXqImSG%2BaKOsaT98qbs6N52qDuRCCFr&X-Amz-Signature=4248451b08201d4a3ef6554f765b2d9f810f5aee0cab93081b61f9eca509358d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663LMEMSG%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BL7r9iq4zyEeOJ15ZFZZd7vtILZ%2Fhwv6ggD16TTYlCAiEAyON4ehavuDKVZRayIomrz%2FMRxLLlWj6wWxT%2BEehl8zkq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJ0G%2Ffv7x0RNKuWFpCrcA5jCboWrwUYTusq81GAnQf7eVhrXXVJkPurr75elUGLmM81lW7xA%2BSpWcKA%2B3c%2F%2Bw0fe71L81BFseTD86%2B6KU9vEl8kBaht0bcVJnZcA%2BE5y64%2Bc1QMq5fxghlspQEtIOF%2BzkWvxAIuYLvalWoVJ0mchhnXSu5tpwx3F5W%2F56bc9sjBjp1r2XfsaZj4EQ3wqEy%2BJxUVooobu8UwJR7KKBsyAnY82wigc7P9Z4PSZoP5U403rT2J6yhbn9ezCPeVp55uIh5vDDMhvc8gd%2Ftp2RPPe5353nSo2ITkueD1Wqi8wnIxQYVMQTQSVY7AIwWaPAc0z4bd1w0qlPKJ4%2BCKaZuipvjBaDEa1Bgw2GwAoSA4gMvBio8qGp3Ja6Mxbz3PSsQbR5jvOaqJL54zynAfEHnmW8BviKOMC22jPAhMfnvmPSLPK2M98j9zGZcSp4MUKBpFzbDyB7TXRJPqs%2BqP7jPGbWhYghlj3eVsHBtVc2cq07CmxlKHZGvQoTacmg94dBWeyQHNF6qA9S%2FVmG03PTRRYhQgdz02I70hHTKy%2BeJ9ojgqZ8dR2M7RY6xOGQSn%2F1nHMiYynfEqAszjCjoUjenjsx49mqlLslNtqsiRx84quaSKbrwF1dnauBVHcMKqAusQGOqUB3tgk%2FbCxdoP8pomTkZzQZZFfdTq0w6r5Xkc9OgjybqmB9%2BBAfYzKKd2qgLb5Akp2cLNiyRIAFtdpuJt2V2COBoU2IZv%2B7fbUnvaxolKAvS5GeD5zdN1mGdY7VJiwDfyRi7utB46bvgU%2BHcclQ1Ax30zTNjhY0%2F9fGY6sEl8MT1TXlEsRATKine5xaLP1epuiRMXXcvtDQ8nOGTW5pj30Z48dhkmX&X-Amz-Signature=753f0af0b36b2930bbdea4479c1335c1cb48cac363814d7a32b16333b431e697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H3ABCC2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0kSyYyLd1c0gdOfB4DTVbcAcMFHO3pNEbrMOTd3wW6AiBM2tdh9bd%2FCMitxTWzpn5%2BjgV8rpdQQTiHNfJChYaj6Cr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMXV9lPY64L3IChHv2KtwDGHTjshwF9OUboKIJGKDN4G2fYEYDgHUTGOmKOSXxIXGdpDoO55U6d90asMgGIwAoDynw4KOiZcDt1Uz%2FZnJ2Wg5Saj6PspaIUcHx0BDnFs%2BlCxqfkjx8txAGZjtUkhqnsHO%2FcwPsTjSE0YmmlS%2B0Y6ZanaBEoEH98pHUAGc9inz91ZZB2tCH90h5yJ%2B5MQRnl6XY4xDfmZzd4SbSTXtCr6InLlwUTQDbiRLoKPuklM6U6NmVrElROfn7kbz4wVwW9WUWWNxZeB9nc4HM5TU%2FaQUhRaUp1owmMh%2FyIczHzH2oZ7hNReOEbQKx2kd1psLESWxqzM94Y%2BeDWIWQzTMYtIv0cDAqNCNKjIBblxZazHUXMontF8P58V5vJemGF4eYWvOeF53IH6u6CBpAC4IxGejucKtbAQGcEXMm2PNNVwwjSCnwYKtSQ2pBc2a61oVcvUfzY91hPBW6oD%2FhgDNBABd0S9zVl0fT8Kg%2F%2F4MsXdQ7v0Ceq2%2FT96%2B2IBKS0cCAyNosAYlafDJzZYl5h5hEqddCTUKGbCtsHo1PVMYZMWf2BBiArshcAJrExxhGgQW%2BxU27qS%2FAFDG5Ymg5Xm9hBHmiBTeDKoeH%2FETS3f3E4YV1%2FD2B0ZQuklJIeXowuoC6xAY6pgGPw%2Bg0yND2RvzfPJ2vGBlzl8GE2ESMHCbzKx90tE3QEW4uHzoG2uTUxHT3L5Ba3HeBwHcR%2FRjUkyptSfa8g3bE%2Fz49ZbTfUvGAdX%2B3hXjvjSKDE%2Ffkjoak7DS7CAvB2ID5zFdaL%2FGALUfW%2FAN91U8o1kTQgh1eKW%2F%2FG8ktzGGoxQNKCHE654PVs61MHGZPZ%2FchfCDNlmfZpy2gNH2nTI9xiNP8NiLr&X-Amz-Signature=ddb418715f51cd29d64f9df12bbcaebfdd3206d65e72e96e90391ba3c11a6283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPKSKRP3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8wE2tSNlV3ZIU6EJuXPUGA1lfuCg1Bwyb4fY04sQTEAiEA2yt4k2V55j8LBVcH%2F1CzD1%2FOT%2BKU7R18OK%2F2ceGYtcYq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDCqSL8GU%2Fz3dmFWotCrcAzNvYQYorSfo2x6iSX1Ol410UsdQHbztjbO%2BF1y5cP9590ZIsTTOMU8WQjIZCQEEZuPq5KBPLflUMUDx0%2FSSNMGE4yZ8EsHFCfo2ntHDkuTOgicTttxXgVisEoT3SOZOgdVpu2wnxE%2FcNd7OUjCSvxV4cOpJfOTTESpmuQ6WaccNcUBsaY%2FQlnNsyXr4JSqOGubvuS26ShOAjZgNMVD%2BDC7AuR10f0FkoYVNHOzkXTzCfCR4YF%2BdM5SgObGqZMBkArIl%2BPJjka7JAW6FwGvbF1HIqbkb5jtmM3g3g1QVNenc4KTi5SFISdkC%2B%2B99HqHNb86E6Xh1xqI9iYv7gex3CgauBVA4MIo3kKcRYzryy9schF4EdP21IA9fqk%2BiWgiTGsYxaKSuMM%2Fbndd1SUDVfndFX6nxDJuRjBhRAi%2FMt%2B1LfP%2BE2lTPTaCVGKaPU1ecMzNGzGIIhFTq8UefQflDLFF4ByqOtRDUQdH9dIHXy3B7iZySuZZAcx0U2hSnwAIt%2B%2F7k8LaysN0W9t%2FQ9VoUqPXBCYZpceJ62rT4OtLkZmeufSc9yH7cSAqMd8CtJIWkLLhotm4W0lE91QsGZFp2YUqLZAHD%2BHRNT0DfwrNihee%2F6hmMBfjwiQAQeVxPMMKAusQGOqUBe3%2BntVnpJNkKT225JK6tuaizsYesHzvwXNAGamNay1uahN3Fb5HCognE21VPrvGWlOqgbHe0srB7D2k3YwT9kS0iu6AlCzAOplUuczxRiXUx0DZfYm7xlLnByCuxo%2BrNf2acfrF9vvzXtllcqMKxQ0VpFZl29qq9rLMccaILrE3rrrMQydejFeZk99%2BrJi0B79BJZ5lfUSr%2BtJwNqZa9q0kT2VV1&X-Amz-Signature=4fd9b016856bf9dfcbedcd012c8d5519b2aa2038064aea87dd2818e2025dea72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H3ABCC2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0kSyYyLd1c0gdOfB4DTVbcAcMFHO3pNEbrMOTd3wW6AiBM2tdh9bd%2FCMitxTWzpn5%2BjgV8rpdQQTiHNfJChYaj6Cr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMXV9lPY64L3IChHv2KtwDGHTjshwF9OUboKIJGKDN4G2fYEYDgHUTGOmKOSXxIXGdpDoO55U6d90asMgGIwAoDynw4KOiZcDt1Uz%2FZnJ2Wg5Saj6PspaIUcHx0BDnFs%2BlCxqfkjx8txAGZjtUkhqnsHO%2FcwPsTjSE0YmmlS%2B0Y6ZanaBEoEH98pHUAGc9inz91ZZB2tCH90h5yJ%2B5MQRnl6XY4xDfmZzd4SbSTXtCr6InLlwUTQDbiRLoKPuklM6U6NmVrElROfn7kbz4wVwW9WUWWNxZeB9nc4HM5TU%2FaQUhRaUp1owmMh%2FyIczHzH2oZ7hNReOEbQKx2kd1psLESWxqzM94Y%2BeDWIWQzTMYtIv0cDAqNCNKjIBblxZazHUXMontF8P58V5vJemGF4eYWvOeF53IH6u6CBpAC4IxGejucKtbAQGcEXMm2PNNVwwjSCnwYKtSQ2pBc2a61oVcvUfzY91hPBW6oD%2FhgDNBABd0S9zVl0fT8Kg%2F%2F4MsXdQ7v0Ceq2%2FT96%2B2IBKS0cCAyNosAYlafDJzZYl5h5hEqddCTUKGbCtsHo1PVMYZMWf2BBiArshcAJrExxhGgQW%2BxU27qS%2FAFDG5Ymg5Xm9hBHmiBTeDKoeH%2FETS3f3E4YV1%2FD2B0ZQuklJIeXowuoC6xAY6pgGPw%2Bg0yND2RvzfPJ2vGBlzl8GE2ESMHCbzKx90tE3QEW4uHzoG2uTUxHT3L5Ba3HeBwHcR%2FRjUkyptSfa8g3bE%2Fz49ZbTfUvGAdX%2B3hXjvjSKDE%2Ffkjoak7DS7CAvB2ID5zFdaL%2FGALUfW%2FAN91U8o1kTQgh1eKW%2F%2FG8ktzGGoxQNKCHE654PVs61MHGZPZ%2FchfCDNlmfZpy2gNH2nTI9xiNP8NiLr&X-Amz-Signature=6ae62e7e19035c8f1fe585899b3962f89650dee8e41c51d7df93a602d97f1efb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMPGLZYT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDgclwRT6B2GUXZH3ctNcT7VenVh%2FeAQz2g%2FUFG0smDwIhAPH1faMiN8UUXsQeIUsgzA78I3yinc5MgESllHsy%2BD%2FnKv8DCB4QABoMNjM3NDIzMTgzODA1IgxLiQWbivT9KRfeZdQq3AO59BaXcPdFoldaJNGJkQu0kZqE%2BnpB24%2BMUS%2BorX8%2FUhDi4CQw6v0Siurnux3RtIHzMAL9ObBglKoPlZG8CabY3l4e2sy8eKoBRhYFM9mp8MxyYrJH994VWQU7BWMITtGzufh4lqt1wM1lpZIredcSeQGrQKB%2BRpvUzoTkHLNKQXdFBpk6edvCW28dH%2Bko5kF%2B60MLc48JLN4lombMRcNaadspjqO7aSKesHdgNB2Di%2BNxMecLkezj94LRSdE0c7%2FZHxB7Tj1orVmda4YtOPSLKNsk3VIxk2ScLKZsasUZFUQgBRe7LRrfVxdwlSZ8%2Fs%2Bp4YBXwodB5pZEFVsN1%2BdUALnAnyOCjp1mm5VSdUJgn4YNzV%2FkKrWU38LZEY7UpujfwdeBbUbzbCR3FNaRnI3Pml1dYvxtsR9W7PrANWaZ0Bi5qnrPlZjAODmuafR2gFW%2FP3%2FoNWet01%2BR7PshAq8ygusNUEIb7cmhZ2SBJYp2o3Pu62kskft5d%2BfeZXNMcm%2FKY%2Fg8xS4%2ByZUgBiGUdMx71xNrk4ZkI%2BCV22%2Bvr9QRQ2diFeduxCYdvgrx87HJfRc7ei1xwU3u1FqhJGbYju%2F%2BC4ZzGq%2FJkfHIGUsndy%2BejfOt9rcPUjNjOu3faDCrgLrEBjqkATvOtdmZV5%2BauGSlLJ8uIAyFwJhk9FhCLBl1zjnxp4Ak0PDtOJX5o%2BFmi%2B4Ewc1NTk8AqJQ8qQ2LVBvVD4fBq9OUAk1Cs2hJGkO0LOyEB01NkGqpfUO%2F9onaRb9XhSpeWePUM3sty1Jzqyhp0S8%2BIO2YL6SB2o6tjUWVpnM6Gl8W27%2Bulqv7qxKDdAaymcmt%2Bz5RguuqQrFvJklrzlHvBnsWylAT&X-Amz-Signature=2a06c1cab0c110d25670673f233ac2d75011ba013a8393c550879af2282cce02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H3ABCC2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0kSyYyLd1c0gdOfB4DTVbcAcMFHO3pNEbrMOTd3wW6AiBM2tdh9bd%2FCMitxTWzpn5%2BjgV8rpdQQTiHNfJChYaj6Cr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMXV9lPY64L3IChHv2KtwDGHTjshwF9OUboKIJGKDN4G2fYEYDgHUTGOmKOSXxIXGdpDoO55U6d90asMgGIwAoDynw4KOiZcDt1Uz%2FZnJ2Wg5Saj6PspaIUcHx0BDnFs%2BlCxqfkjx8txAGZjtUkhqnsHO%2FcwPsTjSE0YmmlS%2B0Y6ZanaBEoEH98pHUAGc9inz91ZZB2tCH90h5yJ%2B5MQRnl6XY4xDfmZzd4SbSTXtCr6InLlwUTQDbiRLoKPuklM6U6NmVrElROfn7kbz4wVwW9WUWWNxZeB9nc4HM5TU%2FaQUhRaUp1owmMh%2FyIczHzH2oZ7hNReOEbQKx2kd1psLESWxqzM94Y%2BeDWIWQzTMYtIv0cDAqNCNKjIBblxZazHUXMontF8P58V5vJemGF4eYWvOeF53IH6u6CBpAC4IxGejucKtbAQGcEXMm2PNNVwwjSCnwYKtSQ2pBc2a61oVcvUfzY91hPBW6oD%2FhgDNBABd0S9zVl0fT8Kg%2F%2F4MsXdQ7v0Ceq2%2FT96%2B2IBKS0cCAyNosAYlafDJzZYl5h5hEqddCTUKGbCtsHo1PVMYZMWf2BBiArshcAJrExxhGgQW%2BxU27qS%2FAFDG5Ymg5Xm9hBHmiBTeDKoeH%2FETS3f3E4YV1%2FD2B0ZQuklJIeXowuoC6xAY6pgGPw%2Bg0yND2RvzfPJ2vGBlzl8GE2ESMHCbzKx90tE3QEW4uHzoG2uTUxHT3L5Ba3HeBwHcR%2FRjUkyptSfa8g3bE%2Fz49ZbTfUvGAdX%2B3hXjvjSKDE%2Ffkjoak7DS7CAvB2ID5zFdaL%2FGALUfW%2FAN91U8o1kTQgh1eKW%2F%2FG8ktzGGoxQNKCHE654PVs61MHGZPZ%2FchfCDNlmfZpy2gNH2nTI9xiNP8NiLr&X-Amz-Signature=e982542e50972c9b1608d57581049decf2f16caf2e11acf86d0aae49077e4068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4QSPAEO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd7vEGwvxSxYFiaFilxFJK3X07JSd6fE6n5AcvMGWG%2FAIhAMEHLIfEIts6nKOrFEaWONMMdbgbRVrVYG0WdZ8sQ8EXKv8DCB4QABoMNjM3NDIzMTgzODA1Igw9w1Jn8YssJZxl44wq3AM%2F3ZfSXgL48MHqDVWIK%2Ft1%2F%2BwHqm8zuO417HIRW5QTBzc%2BxF%2B4cUqmTjeWd0omarjrwEYNFFf%2BvGcEoHi1LB34jK0EiNmfGqf2e1RLwaDViv6brWL42KTE%2BJ6MLIDvIyA%2Fm9NgXw7B%2BDERnKLaQrIZ5cP3MMzA0Css9iHfOWrbcTxiTClchHF5cY9JOfzYzMYuIzr%2BO%2FgU4hmCck6nTWFg6durOtB532eg%2B%2FYIJ2uQA%2B8pDH2TMuMnAjlh2XRum0X9CcYk8%2BSdRmoIHPWYLpDVV1mYJieLwGM8ZIiWPUI6W4eTwP6w4HdxxrO%2FcAZavK%2FE89a9FnW7fbZPb9X0gHOu%2FHgIFluyJXzpIRpXpzcdyc97dlcqrvk5jHkaXFnX06beGlyHfJJTmEXs2aOjm4LynxCIJ7tSpWHenxTG%2F4nINlz6p%2FyCVmkuFxKlfWrghvb7%2BNPWrQJJsdM7gBlqLl5JNemuggF57gNmFaDBFVoqEKM7MIv%2FTDfs2LtER%2BKKQsn5wMffEWqR7EB%2BJJD3Z7curWdX1aznF%2Fh0E7ANugs8TAuOmpbIOs5C7F07LK5CVF0jwASnLqDTrKz4NBvGuPzRfli5en9j9t0sh2zoSRaCl8gSDKU24QBXnz8FUTDCgLrEBjqkAev3Zuqem3NPWZ7RXbbXQP%2FY7Z33TWtw39HZdfxNkzj1t8PR4p%2FBe5K4%2BLexiSgm7fYJm%2FRIPau1kTcI%2F843qWzf6%2BZ0yPLYiknE%2BdcrdFufXa3U6tp5tZWYVRYO7QtPmOSpTv0KwqdFqxTtzyU5YelPrKeaPppQLnHzrZyC5DBQ5JbWo6l7vB4p0kdtBh19JxQQLmMfm0Q75NR1rznFPSG4IPB0&X-Amz-Signature=f7682f7c2b2b752df1c5e6b322cf9810d1474a323adc999f3a1e4cce1737a235&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H3ABCC2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0kSyYyLd1c0gdOfB4DTVbcAcMFHO3pNEbrMOTd3wW6AiBM2tdh9bd%2FCMitxTWzpn5%2BjgV8rpdQQTiHNfJChYaj6Cr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMXV9lPY64L3IChHv2KtwDGHTjshwF9OUboKIJGKDN4G2fYEYDgHUTGOmKOSXxIXGdpDoO55U6d90asMgGIwAoDynw4KOiZcDt1Uz%2FZnJ2Wg5Saj6PspaIUcHx0BDnFs%2BlCxqfkjx8txAGZjtUkhqnsHO%2FcwPsTjSE0YmmlS%2B0Y6ZanaBEoEH98pHUAGc9inz91ZZB2tCH90h5yJ%2B5MQRnl6XY4xDfmZzd4SbSTXtCr6InLlwUTQDbiRLoKPuklM6U6NmVrElROfn7kbz4wVwW9WUWWNxZeB9nc4HM5TU%2FaQUhRaUp1owmMh%2FyIczHzH2oZ7hNReOEbQKx2kd1psLESWxqzM94Y%2BeDWIWQzTMYtIv0cDAqNCNKjIBblxZazHUXMontF8P58V5vJemGF4eYWvOeF53IH6u6CBpAC4IxGejucKtbAQGcEXMm2PNNVwwjSCnwYKtSQ2pBc2a61oVcvUfzY91hPBW6oD%2FhgDNBABd0S9zVl0fT8Kg%2F%2F4MsXdQ7v0Ceq2%2FT96%2B2IBKS0cCAyNosAYlafDJzZYl5h5hEqddCTUKGbCtsHo1PVMYZMWf2BBiArshcAJrExxhGgQW%2BxU27qS%2FAFDG5Ymg5Xm9hBHmiBTeDKoeH%2FETS3f3E4YV1%2FD2B0ZQuklJIeXowuoC6xAY6pgGPw%2Bg0yND2RvzfPJ2vGBlzl8GE2ESMHCbzKx90tE3QEW4uHzoG2uTUxHT3L5Ba3HeBwHcR%2FRjUkyptSfa8g3bE%2Fz49ZbTfUvGAdX%2B3hXjvjSKDE%2Ffkjoak7DS7CAvB2ID5zFdaL%2FGALUfW%2FAN91U8o1kTQgh1eKW%2F%2FG8ktzGGoxQNKCHE654PVs61MHGZPZ%2FchfCDNlmfZpy2gNH2nTI9xiNP8NiLr&X-Amz-Signature=14ee99b05e38a57268e911a2f31124bde3144d09af9ae39d9c54e37f39258fe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ER5NJJ6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFPriMxh5dujkrCpLkb0HQkSRhEVRAJ4ZwAZQbcvog2AiAXJzqzxj1OKJ4REhdPn5Jg4HgbKLA8Tv5bJwNjwdJ3kyr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMIxetZ4aDnooqwAUBKtwDhbGnqx3Kca%2FjQ68mOlDV9LdrHz5HS3VgkGbvbhfTG7drImAimQOal4WHbY3%2B5muWubd7Lg0L8IwwNKXaQPiOU%2F1rDJTsA30oOhawSxkx%2F4hadlVX9nnfCX49kyS1hF8Xcwbg4f2EGJFh%2FGDqYIPr2I%2FbYXByUcQ8DZ2xxCaQxCDFfO%2BbU9w6NAEqBKwQ1uOnTp%2FOtQrS5BQWj1sZnwnSk%2BWCX9bSKgtk1fATbTEcaFWlyn3OQe5zhaYzjpLVQXGDyVyDbjmnIXwhArPl%2FBHSjreJwKgE2ZB4FzNJOBO2xmq4mZjF386jH4ej8vBizPBthOAaVH%2F5bKyYkWCEatiAn6RsPHhw36am6CLbYndpUUET3ZHWvx0NsrrIgXdjo2%2BQFWyKgkCmnLW1TBb68Mg6IIMHxGRS0vmiAnqSq60EzfT2kBuh%2FAxmn74gebNLC4y%2Bf00N850zz3pmaxFgnB7dIxIS0UO28KwY5keQ6FIfvOmh%2FKSpiWII89YMzv08tuWzqDHeFMGTW1UrW%2FKQMv2oou8WWsy%2FYXnFihyOq40LvvPUeK8K3%2FQtJckuSUBHFVgwRgeWa0%2FOx8pBayPBe2Rz2N0dQXZM95%2F3KhG9%2BNCtAqRXcEDFV897AfSH2Hkw4YC6xAY6pgFfcN%2BzP1FudC2JsSUpjmG5E0ryguc6T4GN019DT3tziDRfOCSP6bCD4ascUL7CfryfiyYCG2HDzN%2B9KOXEIhXJFHWPFs4k%2B8PcFiQgBNo6Z8mfdwWcUQKifAiuIZXJLCivq4gRUkbFWeSvPdw1GvF1FNOruX4b0n%2FSmJ9806EQ2rC%2FMoq%2FmStEAmTaALSUQcEDNG9e3Ysk4a7%2FDb5OKfLCAex7vLPP&X-Amz-Signature=76a517f6ef8aaf07bb09c7293332bdac5fd6be7ec25435b8e5b45c15dc1b9905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7H4DOQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnX4ZuLhiHJ%2BeDHjgzU37uuHxgUPvsAbhbpSwYAbUk%2FgIgc9A4JRTu%2FCk5giAJSES7JZWHgIbv1E1CLLuBxrQaCf8q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDCUWzeEi%2BvjcFoGieSrcAy3n6FSPHryjc%2FJoWHdT3ZbOVh%2FKHVDcZ%2BCIkE8ftgWlHNDDyzpN5NovnvcvHKasOGOuQAQ4ahxsRNXwf4eZ8%2FiaucAQeUayaPiHWJj1R86GqGWwe1lZVYTAtmMpHVZASxsDrROLjYvLTuRQlkBes86ppKHZvEVLN57WcGhEXAhtNAuuvOO8Yv%2BnVXR9e3dI42tP1DzRD73aCgseuzXUkneYh6PCoA7%2Bfss3F59ysSf4xiluxJrLzeJsi8dg0FPCeH%2FjPCkjtBGT3tHD6v%2F80rr%2FBD%2BUpFaF4lxJPFC2bhcInC1kceTy%2Boaukj4Qk2MbnwPHXBNfSo7MYmDzHVahKkWvzhDk7yAVqjKIkoio921h%2BK%2FfOanggPBZPfnHW0tCWxwfOf4nXRgpHkLGipPmBVOhPEzG1Anz4MTgHW2jzRERgk5LdO%2FOa0fOFyOrwrAVRasfj7CLqLwQFHY1MEEzHxW5WxmS3yrZ1O83GqWVXtREG2fMjgm%2BPEb5MPad%2B2CwpVnvbzKyuz1Rlpg8o2HX9KNtmQIerKbhI88EfIUCbLJGi9s8jp5uHiVDCOfCfOD5Le8ERygTU0gjSJpgE9s22h5ICELyLh%2BfGFq3ly5RcDxBMKcqs%2F5XlD6u7bM8MIiBusQGOqUBn08oG9xQH0lEKKMw%2FHYF0kxjMsR0kTJCeD85b8zVrTJ49gK%2FpsTpKpStJDrar2UCBPUr4qyD73%2FqqqVXmktKQtzkenvPfcDE4SMvyNipgKTzCfZq8gYye4lptOHFZNGUE5FKT9e4p1C7uOk0PhXnDe%2BRWTlW0exNWnh36laFUC6lwwbSzC0%2FSFLURcgzCr17C6nb8tIdb17oJX5m08g3MyHweTsz&X-Amz-Signature=eda8abfdb5ce83c5fe1161d531fdc018297189d1bf5c5a43280eb6115d76694e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4JADZ5C%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGUa3d2DIit2Q6kncpCUOwvhTzDqioTeRNgjarf7aASAiBzJs8VaKFWFWI%2FkcQD72Yeijh%2FzZRN86CqQNVxg1Y4yyr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMb9itw0fAiFlDz5kHKtwDjWxxo7yZHCfWUkj4BKLktz8dCLZs1sc33PmV0cu9veqNakHMf8wydfgfyDv8g1ZSk%2FQATKRWRG32lo8Ciu1vvl2hwU2IQ0GHwwwfKdVgRuuFTfPHNCiWrO5LwQgSYOEsxajhhm2%2BTS%2Fojf2BjHrBvGsUpkLnemiETszJ630bOvBTi%2BWAkGyNhY7NH%2FzL44Q5aI%2B39hTqqHM4sOqYJidg2yXChXiHXZFn0okWbGkmI9IobYXVdohubrHqvrDzeF6sxnC950gUh5xWRBsjUQlOJwmdPyey4Wgipb8OgBw4mcJTizlgEIMC0ElXKHGj5edANR6vzGsdaKNyVr4fFiuH49e6NFztP5vo3Lrdte2kVGHFoklnmE3RY6szimwpxE8VIZ0SvW1m7xGaue6B8tSQx3pS4XRRX920CveXBvz5N1Mx6SQBzcRzZcXUrks3pA1mOwGcwejM2nmW7jpImJdD6biuG6XkPrcymM3zkIu4ChD288lTKPMsEfxwFxm4mqvwYZ1qlZBPFKa2%2FMCZhMOsQdPL4XfzWzCQlk1ArUaI536zBP3h4eekx8FQOgEs5ebFEO99GGGnMqUGB3WCM87LSEoUgzuaRoxzYoWlgZ3WQCb8DIc35bTP2KCXZ2ww0YC6xAY6pgFwN8x1gi%2FmoChX8x%2B47FvhcG1VLjykuYVGMOnp5AdhQBM4bCVejEt0DsGzYUWqjspeBSiDiwREQal99YXZfJjU9OApKgg1UN1LVAKIvLsNoywB%2FxbPn0QM%2BopYx7Pl8SBy7cFZeV8WzHXJQ6VTTg8mbDYUFdIi3BceWOEj%2FYLmGoXrg8gcHY9LODIHnA1aGoaOVrzUggHApLlHFzO2vKD6zUgh7BNw&X-Amz-Signature=f19d8b7b473b9ef9b6a5d49373f483e8db9926e968473d3cfea83f845c09250d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG34SWSV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkxgmkgAnn4DaRBpferitRcrp8%2FrfAzdjw74X1JZQSXAIhAK2o8uH9H6wgQl72ECMPel%2F1K7mc7%2FnTL7SR537%2Fa8CQKv8DCB4QABoMNjM3NDIzMTgzODA1Igy6XLZhXycU7WVSSeIq3AMs%2Bxfu9syLIzR%2FQUgUsmocKPEgsTeKqnSyk1tVMHHPzXGDL806Fj%2FbcvXRlm%2FdIGKLeZzFIm2Tt2XRV2SprNDZ4bKn92XNsBUvPUf%2BFK23UfeB89X%2BQ2Yy%2FKR0Rqf35z698wp2b7BwRhDUlb9CKOqoXeNMXeZTGF9kvd8%2F3drROK4mlv3Jp7Lvy4CtSJugsPn7NaSKa9LD9SEG1Swv1%2BbyyWJKtUnV122TxeO%2FLUyshrRDWsOAln3LbZXMykRyLI51UoZJQw0WOv0BCh%2B%2FYdZOgHtg9HtrHUaAMWeYNJj32gnhE8ODjGdglE43M5fsmPN%2Bw%2FaDP5D1FAr477TI%2Fm2Q%2Bg63kaaSmvw5K8lnq5u4Et22b33D8NLZSrTB9qpEoA5X6qgiwk4EPfSJ0qnbn%2BKhHZ2HI1oyQQqolduEVoxZGsV9s7WYwY8grWiPZaQqzhm%2FjvO011ORgKGk8Pxrgz61qCw3B43kgBgZ5xXfFnI%2FICm4Jp5eQ3eY1NF3B7KCZ1fr%2B0G8D%2Bexc%2FK0ejLnQszQIiIR5KFtADIcvG1pLFD614%2Bbl636dDiXruourdnqQFyWI1HPrbR%2Bkv16%2BEgZ4FVvpKDEXa4lT7VvYJfvLS9LtMhZAE6OBIkgM7UIyTCBgbrEBjqkAXpxEXbgobEh7EjHE4VEbtkjTghMNxNkqRo86%2F9ZWUPyNkps79hpvQk0U930Eqh2rrie7rHwSx6mlZD3%2Fn7e6Er3BMC8veO7x1xhjR7zhiaJ8Z%2BTKP61gdgtA4Lu%2Bmn8ESy72iVboqtrFCRL2aH708VCIt53VURgt0Q%2BaYC9QEdVlb86yIyR%2BpKCTCom2ObuY88N1tZKKX60Pe4Ch3BhEsd4Lg2E&X-Amz-Signature=58f17e4a5fd9c61eefaff63939c26cfe35bb660548529db4a19f1ed06fecd2f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JHUK64J%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSmqYoXXzELuTR5rz%2BWaIpOrFyHhwJ4h4BeQ94%2FIuXXAiBGiqPy11dZDO64HgyVMgoRDq4DQTDmYdNrpA%2BVhoJj%2FSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMtNV6XS1QYv96MF3MKtwDEo%2BEIKFDbNTFi71x7SGOBUiM0n32aIpILg3hNoyf1MVBkkOi4xGqCRY51zhdCgGgWmolcqaS%2FWwRtd9i8ZfzcV%2B%2BApvkkj0gibA3Lr36j5uft0Sww1utrKX19RjPaLYRxm6hnqtqfshca3lzscblMKbNiAWACy%2FcD%2F8HZpYoRtWGpgJ3WUFok0g23LVzoLGnVVgM1iGmwbdEjubff0kzHCwfAHxb55IFtgpWJcp8tIJuvBfrac%2BNynmvfMnf0WHkD5g0lZBLGG0uaU2kiHjMRjmjzpou3Gxi%2FyRujiuv1vhEVKTJJKUFbU6fAeD8XWLyMSZ2k2WSaV%2FZuuBeRHgfUR958IrCqUBTp%2BR3TjN4HedrJmZuNUWPkZwh0yMsDxKt%2FJnQEMZkbk973RC15nSL9w6hIQjACAEw0wM6SUx0u1ADeP8MqgCaO0k55JpEwUhzYKk%2F7Mm7QzpgZcypsYHAXBLsPmrOYDil%2BVnf%2B22pNHdwyCvY97YbTLQw4qiY9JYSaXAD35Om7Ys73eYILoQJUIJpM%2FmIFRogsuKXCc3oy82qiXoJ%2BcQxkVELS8DEkMJy%2BZ5qp0jZ50AgQd3pie47jgnM1coI8FJNnTV2zqgdbVhwoJgBPInGVr%2BDFsQwoYG6xAY6pgGVaSq0sjMOalu605e0cAIJMRhCLS5jWZ8NVWcw4g695Tz4mH%2FXmUzfcFPpqBZYSWHebaSeF70h5IYR04FwTo5uJNs%2FYqVU30XDD2%2B%2FGvRJKU74PuEUT1vaDljmIX0pGCDT4z1eM8gPAvOhBw%2Frk1blxQ7kyatbLPvyf7nZwxr0mpWvviwlszHppqaE60q0fQsAU2SgoJTmxlbaJ3VcmcZ7lBijygDL&X-Amz-Signature=d82210c178bdf0abb37d090309c556d1bc777e73360eeb2bd74621867a204eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H3ABCC2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0kSyYyLd1c0gdOfB4DTVbcAcMFHO3pNEbrMOTd3wW6AiBM2tdh9bd%2FCMitxTWzpn5%2BjgV8rpdQQTiHNfJChYaj6Cr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMXV9lPY64L3IChHv2KtwDGHTjshwF9OUboKIJGKDN4G2fYEYDgHUTGOmKOSXxIXGdpDoO55U6d90asMgGIwAoDynw4KOiZcDt1Uz%2FZnJ2Wg5Saj6PspaIUcHx0BDnFs%2BlCxqfkjx8txAGZjtUkhqnsHO%2FcwPsTjSE0YmmlS%2B0Y6ZanaBEoEH98pHUAGc9inz91ZZB2tCH90h5yJ%2B5MQRnl6XY4xDfmZzd4SbSTXtCr6InLlwUTQDbiRLoKPuklM6U6NmVrElROfn7kbz4wVwW9WUWWNxZeB9nc4HM5TU%2FaQUhRaUp1owmMh%2FyIczHzH2oZ7hNReOEbQKx2kd1psLESWxqzM94Y%2BeDWIWQzTMYtIv0cDAqNCNKjIBblxZazHUXMontF8P58V5vJemGF4eYWvOeF53IH6u6CBpAC4IxGejucKtbAQGcEXMm2PNNVwwjSCnwYKtSQ2pBc2a61oVcvUfzY91hPBW6oD%2FhgDNBABd0S9zVl0fT8Kg%2F%2F4MsXdQ7v0Ceq2%2FT96%2B2IBKS0cCAyNosAYlafDJzZYl5h5hEqddCTUKGbCtsHo1PVMYZMWf2BBiArshcAJrExxhGgQW%2BxU27qS%2FAFDG5Ymg5Xm9hBHmiBTeDKoeH%2FETS3f3E4YV1%2FD2B0ZQuklJIeXowuoC6xAY6pgGPw%2Bg0yND2RvzfPJ2vGBlzl8GE2ESMHCbzKx90tE3QEW4uHzoG2uTUxHT3L5Ba3HeBwHcR%2FRjUkyptSfa8g3bE%2Fz49ZbTfUvGAdX%2B3hXjvjSKDE%2Ffkjoak7DS7CAvB2ID5zFdaL%2FGALUfW%2FAN91U8o1kTQgh1eKW%2F%2FG8ktzGGoxQNKCHE654PVs61MHGZPZ%2FchfCDNlmfZpy2gNH2nTI9xiNP8NiLr&X-Amz-Signature=5cb3e0695fc4956bc90c789a97d5c84c9d0ca335835543536291b173e5281f9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H3ABCC2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0kSyYyLd1c0gdOfB4DTVbcAcMFHO3pNEbrMOTd3wW6AiBM2tdh9bd%2FCMitxTWzpn5%2BjgV8rpdQQTiHNfJChYaj6Cr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMXV9lPY64L3IChHv2KtwDGHTjshwF9OUboKIJGKDN4G2fYEYDgHUTGOmKOSXxIXGdpDoO55U6d90asMgGIwAoDynw4KOiZcDt1Uz%2FZnJ2Wg5Saj6PspaIUcHx0BDnFs%2BlCxqfkjx8txAGZjtUkhqnsHO%2FcwPsTjSE0YmmlS%2B0Y6ZanaBEoEH98pHUAGc9inz91ZZB2tCH90h5yJ%2B5MQRnl6XY4xDfmZzd4SbSTXtCr6InLlwUTQDbiRLoKPuklM6U6NmVrElROfn7kbz4wVwW9WUWWNxZeB9nc4HM5TU%2FaQUhRaUp1owmMh%2FyIczHzH2oZ7hNReOEbQKx2kd1psLESWxqzM94Y%2BeDWIWQzTMYtIv0cDAqNCNKjIBblxZazHUXMontF8P58V5vJemGF4eYWvOeF53IH6u6CBpAC4IxGejucKtbAQGcEXMm2PNNVwwjSCnwYKtSQ2pBc2a61oVcvUfzY91hPBW6oD%2FhgDNBABd0S9zVl0fT8Kg%2F%2F4MsXdQ7v0Ceq2%2FT96%2B2IBKS0cCAyNosAYlafDJzZYl5h5hEqddCTUKGbCtsHo1PVMYZMWf2BBiArshcAJrExxhGgQW%2BxU27qS%2FAFDG5Ymg5Xm9hBHmiBTeDKoeH%2FETS3f3E4YV1%2FD2B0ZQuklJIeXowuoC6xAY6pgGPw%2Bg0yND2RvzfPJ2vGBlzl8GE2ESMHCbzKx90tE3QEW4uHzoG2uTUxHT3L5Ba3HeBwHcR%2FRjUkyptSfa8g3bE%2Fz49ZbTfUvGAdX%2B3hXjvjSKDE%2Ffkjoak7DS7CAvB2ID5zFdaL%2FGALUfW%2FAN91U8o1kTQgh1eKW%2F%2FG8ktzGGoxQNKCHE654PVs61MHGZPZ%2FchfCDNlmfZpy2gNH2nTI9xiNP8NiLr&X-Amz-Signature=3948aa01fb0ccdc2d5ae24376ab71adb525ab8e9516a38891fce4f5c8dc33289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CZFYTJE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvPMozC9vC2xJawnSs4MeqqEYz0KTM5LQTOvP%2Fi5e4zgIhANCfzOfC13MWhQLZ7UH9lU1tjIHpOmL8zYk2lG4VVkPGKv8DCB4QABoMNjM3NDIzMTgzODA1Igx2%2FXJaFRVPPKZXd1Qq3AOBsJF6VH0iUkQ%2FZSCMqtt%2Bvm9Th8DkY7bw5y1IQJ8a0wcwB0XQo3WlU1pVFXt7uuJhgquvhwrYn3WOtT6Z6V6TpTKBGToNITVBB1A%2BzIrG%2FaDXODgcY54HWik9IE8iKVwvle24r4MSBf8UjbEGXV7aY5P2FGJoBTYMPLYJPqyHMVwpiFDAecrXIHvOdtlLcUpmoKta4hhvrQ2uIjfaCnZEr%2FxIj%2FdO4qcXYPIzrqrt2xjC2%2FYBUb%2BstjVkggBYBV5Pi4hTwMU5ySysj%2BT1%2B3uH%2Bs8TAyeesRZzyJYk9C1Vuc4YUZ7O%2BrtGhsHVUiHqBe18EejTZhAL7BfQ9beic8a%2B07D7KWjPA%2FfoPJ0i72mTUt8WaXxc3OXmELk%2FuswFdwGkCCEWc5f28Jjri7MmhOCJNlVO1%2F4eFokZQDKVUZHrmP%2BlP3rhWipbSbPPc83AIlezY3Mewgn%2FDR4MdSf6d1aEKYaQmq4l8kyZ6I%2Bi%2FV3AGxWLpAuOsb4S26V%2FrAkt1WnixAOYuuZjQ63ARc%2F%2B1E8TS0W%2FfASkmsEJsdjlCzpU35Z05mWXt8PJ3RtOuFl8u8xvUvuIiDAooCTiLm21AizFpRsv2MMETNKpiCt%2BwowRGhJHAvHR6iS7FFOhnzDZgLrEBjqkAdskYh7D%2Bd7C045f8iQNtY2cruiAl8NO10lJuHDhNWn%2FjZMFRSJD1TwoL8VRtBpAjAZ472EdxKoQx8wPwfumWtjyF0TXJ6ZIsHXbmQu8M4EOB8w4tf3r1m4WNY653EtRp5CekVwLNxKvTbSKrvjcydJT1Wddr%2BOHGpq1ZvO84PV7eDjiv5YBojSvnEd5FZie2HbySRCL79hiGSUWy7mUjh482RTw&X-Amz-Signature=44174cf89c0a152601252a40df941e58a5ba47ca8da7aa5aee13ea3be43c7248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CZFYTJE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvPMozC9vC2xJawnSs4MeqqEYz0KTM5LQTOvP%2Fi5e4zgIhANCfzOfC13MWhQLZ7UH9lU1tjIHpOmL8zYk2lG4VVkPGKv8DCB4QABoMNjM3NDIzMTgzODA1Igx2%2FXJaFRVPPKZXd1Qq3AOBsJF6VH0iUkQ%2FZSCMqtt%2Bvm9Th8DkY7bw5y1IQJ8a0wcwB0XQo3WlU1pVFXt7uuJhgquvhwrYn3WOtT6Z6V6TpTKBGToNITVBB1A%2BzIrG%2FaDXODgcY54HWik9IE8iKVwvle24r4MSBf8UjbEGXV7aY5P2FGJoBTYMPLYJPqyHMVwpiFDAecrXIHvOdtlLcUpmoKta4hhvrQ2uIjfaCnZEr%2FxIj%2FdO4qcXYPIzrqrt2xjC2%2FYBUb%2BstjVkggBYBV5Pi4hTwMU5ySysj%2BT1%2B3uH%2Bs8TAyeesRZzyJYk9C1Vuc4YUZ7O%2BrtGhsHVUiHqBe18EejTZhAL7BfQ9beic8a%2B07D7KWjPA%2FfoPJ0i72mTUt8WaXxc3OXmELk%2FuswFdwGkCCEWc5f28Jjri7MmhOCJNlVO1%2F4eFokZQDKVUZHrmP%2BlP3rhWipbSbPPc83AIlezY3Mewgn%2FDR4MdSf6d1aEKYaQmq4l8kyZ6I%2Bi%2FV3AGxWLpAuOsb4S26V%2FrAkt1WnixAOYuuZjQ63ARc%2F%2B1E8TS0W%2FfASkmsEJsdjlCzpU35Z05mWXt8PJ3RtOuFl8u8xvUvuIiDAooCTiLm21AizFpRsv2MMETNKpiCt%2BwowRGhJHAvHR6iS7FFOhnzDZgLrEBjqkAdskYh7D%2Bd7C045f8iQNtY2cruiAl8NO10lJuHDhNWn%2FjZMFRSJD1TwoL8VRtBpAjAZ472EdxKoQx8wPwfumWtjyF0TXJ6ZIsHXbmQu8M4EOB8w4tf3r1m4WNY653EtRp5CekVwLNxKvTbSKrvjcydJT1Wddr%2BOHGpq1ZvO84PV7eDjiv5YBojSvnEd5FZie2HbySRCL79hiGSUWy7mUjh482RTw&X-Amz-Signature=144fd410f85ab68a92c30294b3618e641f5f00fb03e1b71a8f3f7dc1b18a7254&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CZFYTJE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvPMozC9vC2xJawnSs4MeqqEYz0KTM5LQTOvP%2Fi5e4zgIhANCfzOfC13MWhQLZ7UH9lU1tjIHpOmL8zYk2lG4VVkPGKv8DCB4QABoMNjM3NDIzMTgzODA1Igx2%2FXJaFRVPPKZXd1Qq3AOBsJF6VH0iUkQ%2FZSCMqtt%2Bvm9Th8DkY7bw5y1IQJ8a0wcwB0XQo3WlU1pVFXt7uuJhgquvhwrYn3WOtT6Z6V6TpTKBGToNITVBB1A%2BzIrG%2FaDXODgcY54HWik9IE8iKVwvle24r4MSBf8UjbEGXV7aY5P2FGJoBTYMPLYJPqyHMVwpiFDAecrXIHvOdtlLcUpmoKta4hhvrQ2uIjfaCnZEr%2FxIj%2FdO4qcXYPIzrqrt2xjC2%2FYBUb%2BstjVkggBYBV5Pi4hTwMU5ySysj%2BT1%2B3uH%2Bs8TAyeesRZzyJYk9C1Vuc4YUZ7O%2BrtGhsHVUiHqBe18EejTZhAL7BfQ9beic8a%2B07D7KWjPA%2FfoPJ0i72mTUt8WaXxc3OXmELk%2FuswFdwGkCCEWc5f28Jjri7MmhOCJNlVO1%2F4eFokZQDKVUZHrmP%2BlP3rhWipbSbPPc83AIlezY3Mewgn%2FDR4MdSf6d1aEKYaQmq4l8kyZ6I%2Bi%2FV3AGxWLpAuOsb4S26V%2FrAkt1WnixAOYuuZjQ63ARc%2F%2B1E8TS0W%2FfASkmsEJsdjlCzpU35Z05mWXt8PJ3RtOuFl8u8xvUvuIiDAooCTiLm21AizFpRsv2MMETNKpiCt%2BwowRGhJHAvHR6iS7FFOhnzDZgLrEBjqkAdskYh7D%2Bd7C045f8iQNtY2cruiAl8NO10lJuHDhNWn%2FjZMFRSJD1TwoL8VRtBpAjAZ472EdxKoQx8wPwfumWtjyF0TXJ6ZIsHXbmQu8M4EOB8w4tf3r1m4WNY653EtRp5CekVwLNxKvTbSKrvjcydJT1Wddr%2BOHGpq1ZvO84PV7eDjiv5YBojSvnEd5FZie2HbySRCL79hiGSUWy7mUjh482RTw&X-Amz-Signature=1ca9aa49a2a10bd81debec0e11ec09b1fca570ad73a1c1f6ebbf2cc95c4dc3c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CZFYTJE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvPMozC9vC2xJawnSs4MeqqEYz0KTM5LQTOvP%2Fi5e4zgIhANCfzOfC13MWhQLZ7UH9lU1tjIHpOmL8zYk2lG4VVkPGKv8DCB4QABoMNjM3NDIzMTgzODA1Igx2%2FXJaFRVPPKZXd1Qq3AOBsJF6VH0iUkQ%2FZSCMqtt%2Bvm9Th8DkY7bw5y1IQJ8a0wcwB0XQo3WlU1pVFXt7uuJhgquvhwrYn3WOtT6Z6V6TpTKBGToNITVBB1A%2BzIrG%2FaDXODgcY54HWik9IE8iKVwvle24r4MSBf8UjbEGXV7aY5P2FGJoBTYMPLYJPqyHMVwpiFDAecrXIHvOdtlLcUpmoKta4hhvrQ2uIjfaCnZEr%2FxIj%2FdO4qcXYPIzrqrt2xjC2%2FYBUb%2BstjVkggBYBV5Pi4hTwMU5ySysj%2BT1%2B3uH%2Bs8TAyeesRZzyJYk9C1Vuc4YUZ7O%2BrtGhsHVUiHqBe18EejTZhAL7BfQ9beic8a%2B07D7KWjPA%2FfoPJ0i72mTUt8WaXxc3OXmELk%2FuswFdwGkCCEWc5f28Jjri7MmhOCJNlVO1%2F4eFokZQDKVUZHrmP%2BlP3rhWipbSbPPc83AIlezY3Mewgn%2FDR4MdSf6d1aEKYaQmq4l8kyZ6I%2Bi%2FV3AGxWLpAuOsb4S26V%2FrAkt1WnixAOYuuZjQ63ARc%2F%2B1E8TS0W%2FfASkmsEJsdjlCzpU35Z05mWXt8PJ3RtOuFl8u8xvUvuIiDAooCTiLm21AizFpRsv2MMETNKpiCt%2BwowRGhJHAvHR6iS7FFOhnzDZgLrEBjqkAdskYh7D%2Bd7C045f8iQNtY2cruiAl8NO10lJuHDhNWn%2FjZMFRSJD1TwoL8VRtBpAjAZ472EdxKoQx8wPwfumWtjyF0TXJ6ZIsHXbmQu8M4EOB8w4tf3r1m4WNY653EtRp5CekVwLNxKvTbSKrvjcydJT1Wddr%2BOHGpq1ZvO84PV7eDjiv5YBojSvnEd5FZie2HbySRCL79hiGSUWy7mUjh482RTw&X-Amz-Signature=ab2cbafa7afd39c8dcdadeb0213cc893c6babda5c569618a854f0946fb42d320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CZFYTJE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvPMozC9vC2xJawnSs4MeqqEYz0KTM5LQTOvP%2Fi5e4zgIhANCfzOfC13MWhQLZ7UH9lU1tjIHpOmL8zYk2lG4VVkPGKv8DCB4QABoMNjM3NDIzMTgzODA1Igx2%2FXJaFRVPPKZXd1Qq3AOBsJF6VH0iUkQ%2FZSCMqtt%2Bvm9Th8DkY7bw5y1IQJ8a0wcwB0XQo3WlU1pVFXt7uuJhgquvhwrYn3WOtT6Z6V6TpTKBGToNITVBB1A%2BzIrG%2FaDXODgcY54HWik9IE8iKVwvle24r4MSBf8UjbEGXV7aY5P2FGJoBTYMPLYJPqyHMVwpiFDAecrXIHvOdtlLcUpmoKta4hhvrQ2uIjfaCnZEr%2FxIj%2FdO4qcXYPIzrqrt2xjC2%2FYBUb%2BstjVkggBYBV5Pi4hTwMU5ySysj%2BT1%2B3uH%2Bs8TAyeesRZzyJYk9C1Vuc4YUZ7O%2BrtGhsHVUiHqBe18EejTZhAL7BfQ9beic8a%2B07D7KWjPA%2FfoPJ0i72mTUt8WaXxc3OXmELk%2FuswFdwGkCCEWc5f28Jjri7MmhOCJNlVO1%2F4eFokZQDKVUZHrmP%2BlP3rhWipbSbPPc83AIlezY3Mewgn%2FDR4MdSf6d1aEKYaQmq4l8kyZ6I%2Bi%2FV3AGxWLpAuOsb4S26V%2FrAkt1WnixAOYuuZjQ63ARc%2F%2B1E8TS0W%2FfASkmsEJsdjlCzpU35Z05mWXt8PJ3RtOuFl8u8xvUvuIiDAooCTiLm21AizFpRsv2MMETNKpiCt%2BwowRGhJHAvHR6iS7FFOhnzDZgLrEBjqkAdskYh7D%2Bd7C045f8iQNtY2cruiAl8NO10lJuHDhNWn%2FjZMFRSJD1TwoL8VRtBpAjAZ472EdxKoQx8wPwfumWtjyF0TXJ6ZIsHXbmQu8M4EOB8w4tf3r1m4WNY653EtRp5CekVwLNxKvTbSKrvjcydJT1Wddr%2BOHGpq1ZvO84PV7eDjiv5YBojSvnEd5FZie2HbySRCL79hiGSUWy7mUjh482RTw&X-Amz-Signature=85e1f847563a8c3ffe9613141a1db0eed6e89af406bf59f6bccc8c226f982885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CZFYTJE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvPMozC9vC2xJawnSs4MeqqEYz0KTM5LQTOvP%2Fi5e4zgIhANCfzOfC13MWhQLZ7UH9lU1tjIHpOmL8zYk2lG4VVkPGKv8DCB4QABoMNjM3NDIzMTgzODA1Igx2%2FXJaFRVPPKZXd1Qq3AOBsJF6VH0iUkQ%2FZSCMqtt%2Bvm9Th8DkY7bw5y1IQJ8a0wcwB0XQo3WlU1pVFXt7uuJhgquvhwrYn3WOtT6Z6V6TpTKBGToNITVBB1A%2BzIrG%2FaDXODgcY54HWik9IE8iKVwvle24r4MSBf8UjbEGXV7aY5P2FGJoBTYMPLYJPqyHMVwpiFDAecrXIHvOdtlLcUpmoKta4hhvrQ2uIjfaCnZEr%2FxIj%2FdO4qcXYPIzrqrt2xjC2%2FYBUb%2BstjVkggBYBV5Pi4hTwMU5ySysj%2BT1%2B3uH%2Bs8TAyeesRZzyJYk9C1Vuc4YUZ7O%2BrtGhsHVUiHqBe18EejTZhAL7BfQ9beic8a%2B07D7KWjPA%2FfoPJ0i72mTUt8WaXxc3OXmELk%2FuswFdwGkCCEWc5f28Jjri7MmhOCJNlVO1%2F4eFokZQDKVUZHrmP%2BlP3rhWipbSbPPc83AIlezY3Mewgn%2FDR4MdSf6d1aEKYaQmq4l8kyZ6I%2Bi%2FV3AGxWLpAuOsb4S26V%2FrAkt1WnixAOYuuZjQ63ARc%2F%2B1E8TS0W%2FfASkmsEJsdjlCzpU35Z05mWXt8PJ3RtOuFl8u8xvUvuIiDAooCTiLm21AizFpRsv2MMETNKpiCt%2BwowRGhJHAvHR6iS7FFOhnzDZgLrEBjqkAdskYh7D%2Bd7C045f8iQNtY2cruiAl8NO10lJuHDhNWn%2FjZMFRSJD1TwoL8VRtBpAjAZ472EdxKoQx8wPwfumWtjyF0TXJ6ZIsHXbmQu8M4EOB8w4tf3r1m4WNY653EtRp5CekVwLNxKvTbSKrvjcydJT1Wddr%2BOHGpq1ZvO84PV7eDjiv5YBojSvnEd5FZie2HbySRCL79hiGSUWy7mUjh482RTw&X-Amz-Signature=cf276d4b32bc89becd7a02bfa5add921278f1c15341dbbc8234a2c29c09302b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CZFYTJE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvPMozC9vC2xJawnSs4MeqqEYz0KTM5LQTOvP%2Fi5e4zgIhANCfzOfC13MWhQLZ7UH9lU1tjIHpOmL8zYk2lG4VVkPGKv8DCB4QABoMNjM3NDIzMTgzODA1Igx2%2FXJaFRVPPKZXd1Qq3AOBsJF6VH0iUkQ%2FZSCMqtt%2Bvm9Th8DkY7bw5y1IQJ8a0wcwB0XQo3WlU1pVFXt7uuJhgquvhwrYn3WOtT6Z6V6TpTKBGToNITVBB1A%2BzIrG%2FaDXODgcY54HWik9IE8iKVwvle24r4MSBf8UjbEGXV7aY5P2FGJoBTYMPLYJPqyHMVwpiFDAecrXIHvOdtlLcUpmoKta4hhvrQ2uIjfaCnZEr%2FxIj%2FdO4qcXYPIzrqrt2xjC2%2FYBUb%2BstjVkggBYBV5Pi4hTwMU5ySysj%2BT1%2B3uH%2Bs8TAyeesRZzyJYk9C1Vuc4YUZ7O%2BrtGhsHVUiHqBe18EejTZhAL7BfQ9beic8a%2B07D7KWjPA%2FfoPJ0i72mTUt8WaXxc3OXmELk%2FuswFdwGkCCEWc5f28Jjri7MmhOCJNlVO1%2F4eFokZQDKVUZHrmP%2BlP3rhWipbSbPPc83AIlezY3Mewgn%2FDR4MdSf6d1aEKYaQmq4l8kyZ6I%2Bi%2FV3AGxWLpAuOsb4S26V%2FrAkt1WnixAOYuuZjQ63ARc%2F%2B1E8TS0W%2FfASkmsEJsdjlCzpU35Z05mWXt8PJ3RtOuFl8u8xvUvuIiDAooCTiLm21AizFpRsv2MMETNKpiCt%2BwowRGhJHAvHR6iS7FFOhnzDZgLrEBjqkAdskYh7D%2Bd7C045f8iQNtY2cruiAl8NO10lJuHDhNWn%2FjZMFRSJD1TwoL8VRtBpAjAZ472EdxKoQx8wPwfumWtjyF0TXJ6ZIsHXbmQu8M4EOB8w4tf3r1m4WNY653EtRp5CekVwLNxKvTbSKrvjcydJT1Wddr%2BOHGpq1ZvO84PV7eDjiv5YBojSvnEd5FZie2HbySRCL79hiGSUWy7mUjh482RTw&X-Amz-Signature=3da6089713f25f558b4326cda369a94789ee218c0cae4e6069bdd2b2a13e9604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CZFYTJE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvPMozC9vC2xJawnSs4MeqqEYz0KTM5LQTOvP%2Fi5e4zgIhANCfzOfC13MWhQLZ7UH9lU1tjIHpOmL8zYk2lG4VVkPGKv8DCB4QABoMNjM3NDIzMTgzODA1Igx2%2FXJaFRVPPKZXd1Qq3AOBsJF6VH0iUkQ%2FZSCMqtt%2Bvm9Th8DkY7bw5y1IQJ8a0wcwB0XQo3WlU1pVFXt7uuJhgquvhwrYn3WOtT6Z6V6TpTKBGToNITVBB1A%2BzIrG%2FaDXODgcY54HWik9IE8iKVwvle24r4MSBf8UjbEGXV7aY5P2FGJoBTYMPLYJPqyHMVwpiFDAecrXIHvOdtlLcUpmoKta4hhvrQ2uIjfaCnZEr%2FxIj%2FdO4qcXYPIzrqrt2xjC2%2FYBUb%2BstjVkggBYBV5Pi4hTwMU5ySysj%2BT1%2B3uH%2Bs8TAyeesRZzyJYk9C1Vuc4YUZ7O%2BrtGhsHVUiHqBe18EejTZhAL7BfQ9beic8a%2B07D7KWjPA%2FfoPJ0i72mTUt8WaXxc3OXmELk%2FuswFdwGkCCEWc5f28Jjri7MmhOCJNlVO1%2F4eFokZQDKVUZHrmP%2BlP3rhWipbSbPPc83AIlezY3Mewgn%2FDR4MdSf6d1aEKYaQmq4l8kyZ6I%2Bi%2FV3AGxWLpAuOsb4S26V%2FrAkt1WnixAOYuuZjQ63ARc%2F%2B1E8TS0W%2FfASkmsEJsdjlCzpU35Z05mWXt8PJ3RtOuFl8u8xvUvuIiDAooCTiLm21AizFpRsv2MMETNKpiCt%2BwowRGhJHAvHR6iS7FFOhnzDZgLrEBjqkAdskYh7D%2Bd7C045f8iQNtY2cruiAl8NO10lJuHDhNWn%2FjZMFRSJD1TwoL8VRtBpAjAZ472EdxKoQx8wPwfumWtjyF0TXJ6ZIsHXbmQu8M4EOB8w4tf3r1m4WNY653EtRp5CekVwLNxKvTbSKrvjcydJT1Wddr%2BOHGpq1ZvO84PV7eDjiv5YBojSvnEd5FZie2HbySRCL79hiGSUWy7mUjh482RTw&X-Amz-Signature=ca0be3bdd0db6bef9361565bfb915ceaea1df5baab2b1f0446a532215b798799&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CZFYTJE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvPMozC9vC2xJawnSs4MeqqEYz0KTM5LQTOvP%2Fi5e4zgIhANCfzOfC13MWhQLZ7UH9lU1tjIHpOmL8zYk2lG4VVkPGKv8DCB4QABoMNjM3NDIzMTgzODA1Igx2%2FXJaFRVPPKZXd1Qq3AOBsJF6VH0iUkQ%2FZSCMqtt%2Bvm9Th8DkY7bw5y1IQJ8a0wcwB0XQo3WlU1pVFXt7uuJhgquvhwrYn3WOtT6Z6V6TpTKBGToNITVBB1A%2BzIrG%2FaDXODgcY54HWik9IE8iKVwvle24r4MSBf8UjbEGXV7aY5P2FGJoBTYMPLYJPqyHMVwpiFDAecrXIHvOdtlLcUpmoKta4hhvrQ2uIjfaCnZEr%2FxIj%2FdO4qcXYPIzrqrt2xjC2%2FYBUb%2BstjVkggBYBV5Pi4hTwMU5ySysj%2BT1%2B3uH%2Bs8TAyeesRZzyJYk9C1Vuc4YUZ7O%2BrtGhsHVUiHqBe18EejTZhAL7BfQ9beic8a%2B07D7KWjPA%2FfoPJ0i72mTUt8WaXxc3OXmELk%2FuswFdwGkCCEWc5f28Jjri7MmhOCJNlVO1%2F4eFokZQDKVUZHrmP%2BlP3rhWipbSbPPc83AIlezY3Mewgn%2FDR4MdSf6d1aEKYaQmq4l8kyZ6I%2Bi%2FV3AGxWLpAuOsb4S26V%2FrAkt1WnixAOYuuZjQ63ARc%2F%2B1E8TS0W%2FfASkmsEJsdjlCzpU35Z05mWXt8PJ3RtOuFl8u8xvUvuIiDAooCTiLm21AizFpRsv2MMETNKpiCt%2BwowRGhJHAvHR6iS7FFOhnzDZgLrEBjqkAdskYh7D%2Bd7C045f8iQNtY2cruiAl8NO10lJuHDhNWn%2FjZMFRSJD1TwoL8VRtBpAjAZ472EdxKoQx8wPwfumWtjyF0TXJ6ZIsHXbmQu8M4EOB8w4tf3r1m4WNY653EtRp5CekVwLNxKvTbSKrvjcydJT1Wddr%2BOHGpq1ZvO84PV7eDjiv5YBojSvnEd5FZie2HbySRCL79hiGSUWy7mUjh482RTw&X-Amz-Signature=215802be156043acd7bea2aac4459d90b9401e912d5da57994397c502775794f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CZFYTJE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvPMozC9vC2xJawnSs4MeqqEYz0KTM5LQTOvP%2Fi5e4zgIhANCfzOfC13MWhQLZ7UH9lU1tjIHpOmL8zYk2lG4VVkPGKv8DCB4QABoMNjM3NDIzMTgzODA1Igx2%2FXJaFRVPPKZXd1Qq3AOBsJF6VH0iUkQ%2FZSCMqtt%2Bvm9Th8DkY7bw5y1IQJ8a0wcwB0XQo3WlU1pVFXt7uuJhgquvhwrYn3WOtT6Z6V6TpTKBGToNITVBB1A%2BzIrG%2FaDXODgcY54HWik9IE8iKVwvle24r4MSBf8UjbEGXV7aY5P2FGJoBTYMPLYJPqyHMVwpiFDAecrXIHvOdtlLcUpmoKta4hhvrQ2uIjfaCnZEr%2FxIj%2FdO4qcXYPIzrqrt2xjC2%2FYBUb%2BstjVkggBYBV5Pi4hTwMU5ySysj%2BT1%2B3uH%2Bs8TAyeesRZzyJYk9C1Vuc4YUZ7O%2BrtGhsHVUiHqBe18EejTZhAL7BfQ9beic8a%2B07D7KWjPA%2FfoPJ0i72mTUt8WaXxc3OXmELk%2FuswFdwGkCCEWc5f28Jjri7MmhOCJNlVO1%2F4eFokZQDKVUZHrmP%2BlP3rhWipbSbPPc83AIlezY3Mewgn%2FDR4MdSf6d1aEKYaQmq4l8kyZ6I%2Bi%2FV3AGxWLpAuOsb4S26V%2FrAkt1WnixAOYuuZjQ63ARc%2F%2B1E8TS0W%2FfASkmsEJsdjlCzpU35Z05mWXt8PJ3RtOuFl8u8xvUvuIiDAooCTiLm21AizFpRsv2MMETNKpiCt%2BwowRGhJHAvHR6iS7FFOhnzDZgLrEBjqkAdskYh7D%2Bd7C045f8iQNtY2cruiAl8NO10lJuHDhNWn%2FjZMFRSJD1TwoL8VRtBpAjAZ472EdxKoQx8wPwfumWtjyF0TXJ6ZIsHXbmQu8M4EOB8w4tf3r1m4WNY653EtRp5CekVwLNxKvTbSKrvjcydJT1Wddr%2BOHGpq1ZvO84PV7eDjiv5YBojSvnEd5FZie2HbySRCL79hiGSUWy7mUjh482RTw&X-Amz-Signature=92c86cce0712401478f9666e75439e41f880838bbf3bb7306738e28638992428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
