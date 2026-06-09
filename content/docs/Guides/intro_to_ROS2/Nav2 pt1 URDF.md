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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGMB4N3%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlce819FILFvvGI9yWNDyzi2iACNhEeNGk%2FLS3rclUcAiEAnNQ95Q1x5aMBaSjlZx%2FmahLS6ZO1iD3J3ZPbRNCDmvEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfYYiamdNQgysfJhCrcA0Vfw5hU7a7DyxMvXBKsGcgpnc4DyKhyCPO7unPR2fvNa%2FR3V6ta6zdXGUKnvbRX0mKlFTO1Ha%2Fc9F8cdwzk0%2BkyEpFS86RHqgMoTkSIO01gg59QwuRYEMapo6RluEgwWQe8%2Bb0z%2BPaia%2BfyS1lhqe4s9%2BNj7ciIK1i6O0MwOQIT0jjr5ioB6418PjJG3WXtYln3%2FeWHKD%2BUomkt5Qqu8%2B%2Bj6b4KqlTEtru856de8yS06RLH%2FZlz1WOOfKF2nf0xb0B74pvhFaGOZUcQ8BXIOokaWvH1i0HasYDRjRXZemtqt6WqSBPINTH5vJKDpPXCmGPfxQBikWyIlG9%2BwPLqWtYH1rjpEu14Nw7rQMcAY%2FBoDth4fqBGUkDuUUPe3P5ourG0ff%2FuXakHP9jglK6lo%2BMoPpHP3%2FjwVUQKMBcXXLfsaGr%2FRXuBuCCnGJB7ySB74CE8PocpPCXrPzxWH%2FJ%2Bk5mMRdPUEQodW4MIM28dPiEHzonjmuk%2BBPrTg%2Bi2qHhNcI3hft4JtYJQK8I4c91n4dA594NHrZo3GlA03KtE2liQpqvr35Aj6zo%2FMD7OoL%2BTDHXxKwLxf96%2BCLmQz%2B9fgqpUDDfTcGrvCbTcSuVjXiDq2fZe1KRgBZ8MNDbzMJmFntEGOqUBWPgOi434MGmdNy%2FAgmXy%2F29%2FFHMpRZa2EjiT9LWO%2BRHhBmV%2BNWG9K9qwk9KivQTyrna3U%2BTUG0X70OyrDK6fojrfe1mlZVH1y4Hs6luAEBckfwNfF6vo9%2Fhpg8u4sqIIK5tpf%2BLhI6fB5sHUkTc%2BZz9YzyVsIZaUjfQOVn4WoVIWaPA2q5%2BBX9UbBv%2Ba4y%2FZoMNiIm4jyaNE4vq8%2FoVpqd4z7iJ2&X-Amz-Signature=f8e4931086be1b61f4db875dbb686b46547e7daeadb94cb4f3dd81cd7be02d1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGMB4N3%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlce819FILFvvGI9yWNDyzi2iACNhEeNGk%2FLS3rclUcAiEAnNQ95Q1x5aMBaSjlZx%2FmahLS6ZO1iD3J3ZPbRNCDmvEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfYYiamdNQgysfJhCrcA0Vfw5hU7a7DyxMvXBKsGcgpnc4DyKhyCPO7unPR2fvNa%2FR3V6ta6zdXGUKnvbRX0mKlFTO1Ha%2Fc9F8cdwzk0%2BkyEpFS86RHqgMoTkSIO01gg59QwuRYEMapo6RluEgwWQe8%2Bb0z%2BPaia%2BfyS1lhqe4s9%2BNj7ciIK1i6O0MwOQIT0jjr5ioB6418PjJG3WXtYln3%2FeWHKD%2BUomkt5Qqu8%2B%2Bj6b4KqlTEtru856de8yS06RLH%2FZlz1WOOfKF2nf0xb0B74pvhFaGOZUcQ8BXIOokaWvH1i0HasYDRjRXZemtqt6WqSBPINTH5vJKDpPXCmGPfxQBikWyIlG9%2BwPLqWtYH1rjpEu14Nw7rQMcAY%2FBoDth4fqBGUkDuUUPe3P5ourG0ff%2FuXakHP9jglK6lo%2BMoPpHP3%2FjwVUQKMBcXXLfsaGr%2FRXuBuCCnGJB7ySB74CE8PocpPCXrPzxWH%2FJ%2Bk5mMRdPUEQodW4MIM28dPiEHzonjmuk%2BBPrTg%2Bi2qHhNcI3hft4JtYJQK8I4c91n4dA594NHrZo3GlA03KtE2liQpqvr35Aj6zo%2FMD7OoL%2BTDHXxKwLxf96%2BCLmQz%2B9fgqpUDDfTcGrvCbTcSuVjXiDq2fZe1KRgBZ8MNDbzMJmFntEGOqUBWPgOi434MGmdNy%2FAgmXy%2F29%2FFHMpRZa2EjiT9LWO%2BRHhBmV%2BNWG9K9qwk9KivQTyrna3U%2BTUG0X70OyrDK6fojrfe1mlZVH1y4Hs6luAEBckfwNfF6vo9%2Fhpg8u4sqIIK5tpf%2BLhI6fB5sHUkTc%2BZz9YzyVsIZaUjfQOVn4WoVIWaPA2q5%2BBX9UbBv%2Ba4y%2FZoMNiIm4jyaNE4vq8%2FoVpqd4z7iJ2&X-Amz-Signature=3caf0eb894ef667c295d1520afa131dcdd75d1d17efdeb365a2662f8e0c3a873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGMB4N3%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlce819FILFvvGI9yWNDyzi2iACNhEeNGk%2FLS3rclUcAiEAnNQ95Q1x5aMBaSjlZx%2FmahLS6ZO1iD3J3ZPbRNCDmvEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfYYiamdNQgysfJhCrcA0Vfw5hU7a7DyxMvXBKsGcgpnc4DyKhyCPO7unPR2fvNa%2FR3V6ta6zdXGUKnvbRX0mKlFTO1Ha%2Fc9F8cdwzk0%2BkyEpFS86RHqgMoTkSIO01gg59QwuRYEMapo6RluEgwWQe8%2Bb0z%2BPaia%2BfyS1lhqe4s9%2BNj7ciIK1i6O0MwOQIT0jjr5ioB6418PjJG3WXtYln3%2FeWHKD%2BUomkt5Qqu8%2B%2Bj6b4KqlTEtru856de8yS06RLH%2FZlz1WOOfKF2nf0xb0B74pvhFaGOZUcQ8BXIOokaWvH1i0HasYDRjRXZemtqt6WqSBPINTH5vJKDpPXCmGPfxQBikWyIlG9%2BwPLqWtYH1rjpEu14Nw7rQMcAY%2FBoDth4fqBGUkDuUUPe3P5ourG0ff%2FuXakHP9jglK6lo%2BMoPpHP3%2FjwVUQKMBcXXLfsaGr%2FRXuBuCCnGJB7ySB74CE8PocpPCXrPzxWH%2FJ%2Bk5mMRdPUEQodW4MIM28dPiEHzonjmuk%2BBPrTg%2Bi2qHhNcI3hft4JtYJQK8I4c91n4dA594NHrZo3GlA03KtE2liQpqvr35Aj6zo%2FMD7OoL%2BTDHXxKwLxf96%2BCLmQz%2B9fgqpUDDfTcGrvCbTcSuVjXiDq2fZe1KRgBZ8MNDbzMJmFntEGOqUBWPgOi434MGmdNy%2FAgmXy%2F29%2FFHMpRZa2EjiT9LWO%2BRHhBmV%2BNWG9K9qwk9KivQTyrna3U%2BTUG0X70OyrDK6fojrfe1mlZVH1y4Hs6luAEBckfwNfF6vo9%2Fhpg8u4sqIIK5tpf%2BLhI6fB5sHUkTc%2BZz9YzyVsIZaUjfQOVn4WoVIWaPA2q5%2BBX9UbBv%2Ba4y%2FZoMNiIm4jyaNE4vq8%2FoVpqd4z7iJ2&X-Amz-Signature=d68292724635d0964ac45109d80387194f9d5672d80f3e24cd70101d6d78d45a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGMB4N3%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlce819FILFvvGI9yWNDyzi2iACNhEeNGk%2FLS3rclUcAiEAnNQ95Q1x5aMBaSjlZx%2FmahLS6ZO1iD3J3ZPbRNCDmvEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfYYiamdNQgysfJhCrcA0Vfw5hU7a7DyxMvXBKsGcgpnc4DyKhyCPO7unPR2fvNa%2FR3V6ta6zdXGUKnvbRX0mKlFTO1Ha%2Fc9F8cdwzk0%2BkyEpFS86RHqgMoTkSIO01gg59QwuRYEMapo6RluEgwWQe8%2Bb0z%2BPaia%2BfyS1lhqe4s9%2BNj7ciIK1i6O0MwOQIT0jjr5ioB6418PjJG3WXtYln3%2FeWHKD%2BUomkt5Qqu8%2B%2Bj6b4KqlTEtru856de8yS06RLH%2FZlz1WOOfKF2nf0xb0B74pvhFaGOZUcQ8BXIOokaWvH1i0HasYDRjRXZemtqt6WqSBPINTH5vJKDpPXCmGPfxQBikWyIlG9%2BwPLqWtYH1rjpEu14Nw7rQMcAY%2FBoDth4fqBGUkDuUUPe3P5ourG0ff%2FuXakHP9jglK6lo%2BMoPpHP3%2FjwVUQKMBcXXLfsaGr%2FRXuBuCCnGJB7ySB74CE8PocpPCXrPzxWH%2FJ%2Bk5mMRdPUEQodW4MIM28dPiEHzonjmuk%2BBPrTg%2Bi2qHhNcI3hft4JtYJQK8I4c91n4dA594NHrZo3GlA03KtE2liQpqvr35Aj6zo%2FMD7OoL%2BTDHXxKwLxf96%2BCLmQz%2B9fgqpUDDfTcGrvCbTcSuVjXiDq2fZe1KRgBZ8MNDbzMJmFntEGOqUBWPgOi434MGmdNy%2FAgmXy%2F29%2FFHMpRZa2EjiT9LWO%2BRHhBmV%2BNWG9K9qwk9KivQTyrna3U%2BTUG0X70OyrDK6fojrfe1mlZVH1y4Hs6luAEBckfwNfF6vo9%2Fhpg8u4sqIIK5tpf%2BLhI6fB5sHUkTc%2BZz9YzyVsIZaUjfQOVn4WoVIWaPA2q5%2BBX9UbBv%2Ba4y%2FZoMNiIm4jyaNE4vq8%2FoVpqd4z7iJ2&X-Amz-Signature=85bba6d5263b57c64f853e3ce41ad2f763956a7c2d9382aa74609a763d856e7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGMB4N3%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlce819FILFvvGI9yWNDyzi2iACNhEeNGk%2FLS3rclUcAiEAnNQ95Q1x5aMBaSjlZx%2FmahLS6ZO1iD3J3ZPbRNCDmvEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfYYiamdNQgysfJhCrcA0Vfw5hU7a7DyxMvXBKsGcgpnc4DyKhyCPO7unPR2fvNa%2FR3V6ta6zdXGUKnvbRX0mKlFTO1Ha%2Fc9F8cdwzk0%2BkyEpFS86RHqgMoTkSIO01gg59QwuRYEMapo6RluEgwWQe8%2Bb0z%2BPaia%2BfyS1lhqe4s9%2BNj7ciIK1i6O0MwOQIT0jjr5ioB6418PjJG3WXtYln3%2FeWHKD%2BUomkt5Qqu8%2B%2Bj6b4KqlTEtru856de8yS06RLH%2FZlz1WOOfKF2nf0xb0B74pvhFaGOZUcQ8BXIOokaWvH1i0HasYDRjRXZemtqt6WqSBPINTH5vJKDpPXCmGPfxQBikWyIlG9%2BwPLqWtYH1rjpEu14Nw7rQMcAY%2FBoDth4fqBGUkDuUUPe3P5ourG0ff%2FuXakHP9jglK6lo%2BMoPpHP3%2FjwVUQKMBcXXLfsaGr%2FRXuBuCCnGJB7ySB74CE8PocpPCXrPzxWH%2FJ%2Bk5mMRdPUEQodW4MIM28dPiEHzonjmuk%2BBPrTg%2Bi2qHhNcI3hft4JtYJQK8I4c91n4dA594NHrZo3GlA03KtE2liQpqvr35Aj6zo%2FMD7OoL%2BTDHXxKwLxf96%2BCLmQz%2B9fgqpUDDfTcGrvCbTcSuVjXiDq2fZe1KRgBZ8MNDbzMJmFntEGOqUBWPgOi434MGmdNy%2FAgmXy%2F29%2FFHMpRZa2EjiT9LWO%2BRHhBmV%2BNWG9K9qwk9KivQTyrna3U%2BTUG0X70OyrDK6fojrfe1mlZVH1y4Hs6luAEBckfwNfF6vo9%2Fhpg8u4sqIIK5tpf%2BLhI6fB5sHUkTc%2BZz9YzyVsIZaUjfQOVn4WoVIWaPA2q5%2BBX9UbBv%2Ba4y%2FZoMNiIm4jyaNE4vq8%2FoVpqd4z7iJ2&X-Amz-Signature=c540ef9deedbfe4a27acabd8cabefa5c603d9044c08f7f1ad1f24d3cdaf92ec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGMB4N3%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlce819FILFvvGI9yWNDyzi2iACNhEeNGk%2FLS3rclUcAiEAnNQ95Q1x5aMBaSjlZx%2FmahLS6ZO1iD3J3ZPbRNCDmvEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfYYiamdNQgysfJhCrcA0Vfw5hU7a7DyxMvXBKsGcgpnc4DyKhyCPO7unPR2fvNa%2FR3V6ta6zdXGUKnvbRX0mKlFTO1Ha%2Fc9F8cdwzk0%2BkyEpFS86RHqgMoTkSIO01gg59QwuRYEMapo6RluEgwWQe8%2Bb0z%2BPaia%2BfyS1lhqe4s9%2BNj7ciIK1i6O0MwOQIT0jjr5ioB6418PjJG3WXtYln3%2FeWHKD%2BUomkt5Qqu8%2B%2Bj6b4KqlTEtru856de8yS06RLH%2FZlz1WOOfKF2nf0xb0B74pvhFaGOZUcQ8BXIOokaWvH1i0HasYDRjRXZemtqt6WqSBPINTH5vJKDpPXCmGPfxQBikWyIlG9%2BwPLqWtYH1rjpEu14Nw7rQMcAY%2FBoDth4fqBGUkDuUUPe3P5ourG0ff%2FuXakHP9jglK6lo%2BMoPpHP3%2FjwVUQKMBcXXLfsaGr%2FRXuBuCCnGJB7ySB74CE8PocpPCXrPzxWH%2FJ%2Bk5mMRdPUEQodW4MIM28dPiEHzonjmuk%2BBPrTg%2Bi2qHhNcI3hft4JtYJQK8I4c91n4dA594NHrZo3GlA03KtE2liQpqvr35Aj6zo%2FMD7OoL%2BTDHXxKwLxf96%2BCLmQz%2B9fgqpUDDfTcGrvCbTcSuVjXiDq2fZe1KRgBZ8MNDbzMJmFntEGOqUBWPgOi434MGmdNy%2FAgmXy%2F29%2FFHMpRZa2EjiT9LWO%2BRHhBmV%2BNWG9K9qwk9KivQTyrna3U%2BTUG0X70OyrDK6fojrfe1mlZVH1y4Hs6luAEBckfwNfF6vo9%2Fhpg8u4sqIIK5tpf%2BLhI6fB5sHUkTc%2BZz9YzyVsIZaUjfQOVn4WoVIWaPA2q5%2BBX9UbBv%2Ba4y%2FZoMNiIm4jyaNE4vq8%2FoVpqd4z7iJ2&X-Amz-Signature=9f3365e9abd1b227c73745c309c7799a6318d0c1edd97fe8e6e2a4cfd3796d37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGMB4N3%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlce819FILFvvGI9yWNDyzi2iACNhEeNGk%2FLS3rclUcAiEAnNQ95Q1x5aMBaSjlZx%2FmahLS6ZO1iD3J3ZPbRNCDmvEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfYYiamdNQgysfJhCrcA0Vfw5hU7a7DyxMvXBKsGcgpnc4DyKhyCPO7unPR2fvNa%2FR3V6ta6zdXGUKnvbRX0mKlFTO1Ha%2Fc9F8cdwzk0%2BkyEpFS86RHqgMoTkSIO01gg59QwuRYEMapo6RluEgwWQe8%2Bb0z%2BPaia%2BfyS1lhqe4s9%2BNj7ciIK1i6O0MwOQIT0jjr5ioB6418PjJG3WXtYln3%2FeWHKD%2BUomkt5Qqu8%2B%2Bj6b4KqlTEtru856de8yS06RLH%2FZlz1WOOfKF2nf0xb0B74pvhFaGOZUcQ8BXIOokaWvH1i0HasYDRjRXZemtqt6WqSBPINTH5vJKDpPXCmGPfxQBikWyIlG9%2BwPLqWtYH1rjpEu14Nw7rQMcAY%2FBoDth4fqBGUkDuUUPe3P5ourG0ff%2FuXakHP9jglK6lo%2BMoPpHP3%2FjwVUQKMBcXXLfsaGr%2FRXuBuCCnGJB7ySB74CE8PocpPCXrPzxWH%2FJ%2Bk5mMRdPUEQodW4MIM28dPiEHzonjmuk%2BBPrTg%2Bi2qHhNcI3hft4JtYJQK8I4c91n4dA594NHrZo3GlA03KtE2liQpqvr35Aj6zo%2FMD7OoL%2BTDHXxKwLxf96%2BCLmQz%2B9fgqpUDDfTcGrvCbTcSuVjXiDq2fZe1KRgBZ8MNDbzMJmFntEGOqUBWPgOi434MGmdNy%2FAgmXy%2F29%2FFHMpRZa2EjiT9LWO%2BRHhBmV%2BNWG9K9qwk9KivQTyrna3U%2BTUG0X70OyrDK6fojrfe1mlZVH1y4Hs6luAEBckfwNfF6vo9%2Fhpg8u4sqIIK5tpf%2BLhI6fB5sHUkTc%2BZz9YzyVsIZaUjfQOVn4WoVIWaPA2q5%2BBX9UbBv%2Ba4y%2FZoMNiIm4jyaNE4vq8%2FoVpqd4z7iJ2&X-Amz-Signature=7cfda634958d28e4d6a848bcb57252d5e0b3c13f51b7bca509227bf1ae9b306d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGMB4N3%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlce819FILFvvGI9yWNDyzi2iACNhEeNGk%2FLS3rclUcAiEAnNQ95Q1x5aMBaSjlZx%2FmahLS6ZO1iD3J3ZPbRNCDmvEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfYYiamdNQgysfJhCrcA0Vfw5hU7a7DyxMvXBKsGcgpnc4DyKhyCPO7unPR2fvNa%2FR3V6ta6zdXGUKnvbRX0mKlFTO1Ha%2Fc9F8cdwzk0%2BkyEpFS86RHqgMoTkSIO01gg59QwuRYEMapo6RluEgwWQe8%2Bb0z%2BPaia%2BfyS1lhqe4s9%2BNj7ciIK1i6O0MwOQIT0jjr5ioB6418PjJG3WXtYln3%2FeWHKD%2BUomkt5Qqu8%2B%2Bj6b4KqlTEtru856de8yS06RLH%2FZlz1WOOfKF2nf0xb0B74pvhFaGOZUcQ8BXIOokaWvH1i0HasYDRjRXZemtqt6WqSBPINTH5vJKDpPXCmGPfxQBikWyIlG9%2BwPLqWtYH1rjpEu14Nw7rQMcAY%2FBoDth4fqBGUkDuUUPe3P5ourG0ff%2FuXakHP9jglK6lo%2BMoPpHP3%2FjwVUQKMBcXXLfsaGr%2FRXuBuCCnGJB7ySB74CE8PocpPCXrPzxWH%2FJ%2Bk5mMRdPUEQodW4MIM28dPiEHzonjmuk%2BBPrTg%2Bi2qHhNcI3hft4JtYJQK8I4c91n4dA594NHrZo3GlA03KtE2liQpqvr35Aj6zo%2FMD7OoL%2BTDHXxKwLxf96%2BCLmQz%2B9fgqpUDDfTcGrvCbTcSuVjXiDq2fZe1KRgBZ8MNDbzMJmFntEGOqUBWPgOi434MGmdNy%2FAgmXy%2F29%2FFHMpRZa2EjiT9LWO%2BRHhBmV%2BNWG9K9qwk9KivQTyrna3U%2BTUG0X70OyrDK6fojrfe1mlZVH1y4Hs6luAEBckfwNfF6vo9%2Fhpg8u4sqIIK5tpf%2BLhI6fB5sHUkTc%2BZz9YzyVsIZaUjfQOVn4WoVIWaPA2q5%2BBX9UbBv%2Ba4y%2FZoMNiIm4jyaNE4vq8%2FoVpqd4z7iJ2&X-Amz-Signature=d3158aa43a2fa9d8fc99232bc4445c658fb49c4cdd44bbda620de2ad10337698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGMB4N3%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlce819FILFvvGI9yWNDyzi2iACNhEeNGk%2FLS3rclUcAiEAnNQ95Q1x5aMBaSjlZx%2FmahLS6ZO1iD3J3ZPbRNCDmvEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfYYiamdNQgysfJhCrcA0Vfw5hU7a7DyxMvXBKsGcgpnc4DyKhyCPO7unPR2fvNa%2FR3V6ta6zdXGUKnvbRX0mKlFTO1Ha%2Fc9F8cdwzk0%2BkyEpFS86RHqgMoTkSIO01gg59QwuRYEMapo6RluEgwWQe8%2Bb0z%2BPaia%2BfyS1lhqe4s9%2BNj7ciIK1i6O0MwOQIT0jjr5ioB6418PjJG3WXtYln3%2FeWHKD%2BUomkt5Qqu8%2B%2Bj6b4KqlTEtru856de8yS06RLH%2FZlz1WOOfKF2nf0xb0B74pvhFaGOZUcQ8BXIOokaWvH1i0HasYDRjRXZemtqt6WqSBPINTH5vJKDpPXCmGPfxQBikWyIlG9%2BwPLqWtYH1rjpEu14Nw7rQMcAY%2FBoDth4fqBGUkDuUUPe3P5ourG0ff%2FuXakHP9jglK6lo%2BMoPpHP3%2FjwVUQKMBcXXLfsaGr%2FRXuBuCCnGJB7ySB74CE8PocpPCXrPzxWH%2FJ%2Bk5mMRdPUEQodW4MIM28dPiEHzonjmuk%2BBPrTg%2Bi2qHhNcI3hft4JtYJQK8I4c91n4dA594NHrZo3GlA03KtE2liQpqvr35Aj6zo%2FMD7OoL%2BTDHXxKwLxf96%2BCLmQz%2B9fgqpUDDfTcGrvCbTcSuVjXiDq2fZe1KRgBZ8MNDbzMJmFntEGOqUBWPgOi434MGmdNy%2FAgmXy%2F29%2FFHMpRZa2EjiT9LWO%2BRHhBmV%2BNWG9K9qwk9KivQTyrna3U%2BTUG0X70OyrDK6fojrfe1mlZVH1y4Hs6luAEBckfwNfF6vo9%2Fhpg8u4sqIIK5tpf%2BLhI6fB5sHUkTc%2BZz9YzyVsIZaUjfQOVn4WoVIWaPA2q5%2BBX9UbBv%2Ba4y%2FZoMNiIm4jyaNE4vq8%2FoVpqd4z7iJ2&X-Amz-Signature=fe456eaf264307280a33c9ef9ab79bd906526bc3519381812e99cf37c6564ef5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGMB4N3%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlce819FILFvvGI9yWNDyzi2iACNhEeNGk%2FLS3rclUcAiEAnNQ95Q1x5aMBaSjlZx%2FmahLS6ZO1iD3J3ZPbRNCDmvEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfYYiamdNQgysfJhCrcA0Vfw5hU7a7DyxMvXBKsGcgpnc4DyKhyCPO7unPR2fvNa%2FR3V6ta6zdXGUKnvbRX0mKlFTO1Ha%2Fc9F8cdwzk0%2BkyEpFS86RHqgMoTkSIO01gg59QwuRYEMapo6RluEgwWQe8%2Bb0z%2BPaia%2BfyS1lhqe4s9%2BNj7ciIK1i6O0MwOQIT0jjr5ioB6418PjJG3WXtYln3%2FeWHKD%2BUomkt5Qqu8%2B%2Bj6b4KqlTEtru856de8yS06RLH%2FZlz1WOOfKF2nf0xb0B74pvhFaGOZUcQ8BXIOokaWvH1i0HasYDRjRXZemtqt6WqSBPINTH5vJKDpPXCmGPfxQBikWyIlG9%2BwPLqWtYH1rjpEu14Nw7rQMcAY%2FBoDth4fqBGUkDuUUPe3P5ourG0ff%2FuXakHP9jglK6lo%2BMoPpHP3%2FjwVUQKMBcXXLfsaGr%2FRXuBuCCnGJB7ySB74CE8PocpPCXrPzxWH%2FJ%2Bk5mMRdPUEQodW4MIM28dPiEHzonjmuk%2BBPrTg%2Bi2qHhNcI3hft4JtYJQK8I4c91n4dA594NHrZo3GlA03KtE2liQpqvr35Aj6zo%2FMD7OoL%2BTDHXxKwLxf96%2BCLmQz%2B9fgqpUDDfTcGrvCbTcSuVjXiDq2fZe1KRgBZ8MNDbzMJmFntEGOqUBWPgOi434MGmdNy%2FAgmXy%2F29%2FFHMpRZa2EjiT9LWO%2BRHhBmV%2BNWG9K9qwk9KivQTyrna3U%2BTUG0X70OyrDK6fojrfe1mlZVH1y4Hs6luAEBckfwNfF6vo9%2Fhpg8u4sqIIK5tpf%2BLhI6fB5sHUkTc%2BZz9YzyVsIZaUjfQOVn4WoVIWaPA2q5%2BBX9UbBv%2Ba4y%2FZoMNiIm4jyaNE4vq8%2FoVpqd4z7iJ2&X-Amz-Signature=6f4c2e39d376ace03568d0727cac02e5e51ae82121b61e65aa9db425d926077a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFPX7MKA%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqu2nclbxE%2BSI9RckCkT864Y6B1L5Ms9dfAE4TTWQ6EwIgM2ANsKzuD72sp3P7IW%2BTux4fAbUuQsNGkvsXHsl9%2FU0qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHUEt4JC9531QwjRHSrcA%2Ff30SDKO2xWkeFZX9w31pTdypdNG2MmlqIb0r8efox%2F%2BfoUHH%2F%2FXlL59K9CqiO%2FMJnzl%2BaoWn%2BY18hkTLcVe%2F0qSfCr8yQxQL4hTGGXVHdA6UNZgq57bEfPPWdc6oJGuIf1MK1ILOHC%2F%2Bebyu6QjUaPooXCdbBh6fZ2BvU%2BrYBETpBikPs6WJLC139m7OjxsXdnatFhXqLFr7HPmEVcVodOiaYfA%2FGi9Qyhd77Gaxz7kIxKcQIEV0vXU%2FW23grzngDNKkE%2FOeAPeSlmWqPS6OpSkEP8hsEOVyNa2BEI1sU0aVaEI8KZnEpD6BgR8YO2yqDJ%2BQftZLaVL3KyqwWtNITXiLvgpUg8seowLgtf2c%2FiJ2tbCepnlOZoijStnew0yY5Fm1pb9wPHneWW0KazRWs4RdPVsIkYZ9EQsb%2F8EP5HqUydrtcpJhulvoWR6iY%2B685KCCAiwulLBtxkprS18N6tod9XU89sh%2Fuwy%2FgRVvpuU2wBcJGzMt5OYBj3VsfNIxZvluHFpVkOlUl48eHVARKnW0Ugk7J7mWQ94bpYTmA4tJ9xEIx%2BFyzBYpu0QV%2FhwTV0DAVHlduSvD60DDlrsf75CwDOfWsqNM1mfKwiadoOs15uPvioJxtQZ%2FqzMIeGntEGOqUBdVFlkrJ9zH0l9F6JSbftD%2BDTPGkejhRKgkFDlKYghf271ZJUByjgYaa7ceHPPRc958oSir3izV7CX1UDZKdtU3JYky4uOcXYBXClxGDo%2F9P8gyCLGPPKHNXl9%2Bw%2F6frAVJjizjmcBJbzfHIXchAR8by4XE4cTCrO55jLLoKV6QcOF5PzQzViF3PnPhNuSonj%2B2KTffFt2RI3Re37lqoReUsw%2B%2FTg&X-Amz-Signature=233a5a7410a923b76f1eb974f1e67f44b5d298b6c36b7df3fe8b33fde30acaad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ6OBFPL%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV1TGyaHhBxPpnPbaxVq9rhSvggexycS2Bstr3U8RdnwIgVZv1B1W3w%2FTGaha3a2OJPUPFAxNjcKgqMNI2kPWceA8qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjwEfkfu5I%2Fz548NyrcA6u4f3ccGWYIc62LZwWp4WR4N2ccj7EAdNDrw2QeLOzkVuXf7wNS8ZDW9f3302dRWsyPxZtsZuHQnaKtrSOd9VlS%2FpCcWUeX%2FYWcnC5MjvZD5bMmALunGcRTLx3kHLPXY%2B0go2DeR221gmEvV%2BIeH2b0JMBfbmHRoZeB%2B89hyK3CxlGSj%2FDz57cLPAqsd1%2B6047qWBAbnxQAnGqpEbhP2Y7ItyhqKYQAiZE1TJ9aH%2BD7QZBcgr8D7SIXJd27OG6IdvqgQ3Tbp4U5a1%2BrfLgVu9vpxhVIjsk4p7O7LAGS1Ifu6mMuBRNhgrI7Bk3kJIdC8%2BpBIm9CoHh2CAKfDYFtX0cOEZsgNqSgpZJ%2ByXqwmNnOZEWsi%2F6SsRY3bEQulU7JGE7qRq51w053EYXmm4W3F4rAq0iENkBAkGOstUYp%2Bj7Zr5AI51eHyIkDfPNLEZzc754kKZ0f6woIfvKWBPriQy0AQrGEj%2F93oc4lcqJfvkjH0bQdxbxxAJGyNnygLWrzq7rnP9EJRAALRpl41w6eseLT02LNV3iVtQ3Io24iiXQXTdf8TOCXfaGI2KL3vm5gO%2FSzBp5e0%2FeGA27bBvtcanAQgpFpmEO79OqX5z6JKT6FYJ0noWlS%2Bi9HBdQ1MLKFntEGOqUBYRHNhBst5elEDa9NrSIj9j98Pe9O5uLrGahFzbNKfT4QGpT9j9F3E0PSg0w6p8zOsfS374ySghBCEq1S3GYyV4wQX2uNwBxy2VZaOKuw3yrGsKGgZMpq5A%2FXaoNErY687kcRlR9gjqYNQ4OdrHzKwML8bapL7PzWn1bagpP6pj0fomRaupy7XpobZF%2Bpju24mpV%2FFaG0z%2FImJkrKXpGTRq49i9VK&X-Amz-Signature=a6fae297e5a0f08246862634908f60318ffff5e98512a78dcaebceed43615e23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX4LRWX7%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbG%2F9LH%2BkeKRUvmHluliOaQXgu%2FWIKDQHrCD2th1mJIAiB12PdCgcg6f%2BFN0unSTCNirQPNAmFdsIqdhExCV31dwCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFX20en1BxZYwEP8KKtwD4CdTgh9EPqVg9TmaUFlthiuKy1yU54xWXSle0LqiFWM%2F9zZvo7%2BExIAc4IGC5j73OyMowRFhwm9LmaX6gLei7zPNoSvWO5Nx3pxOzN3OSTY7Tp2ZUvTrmc8nxF%2F017om8s7HRWdhiu%2BIBhsoxIeI23gHi8AgJlOSz0xeSw4Yg0cVLEhw82uQvM3Kyg%2F3LKOhI4jIXcBogV1Uuk%2BYI2mnJ9rmAQH2Cdh7aBU9w8RnGmy2HJSD0DcGirDbYTg0EVfw2Y1Zv0bcJ%2B4yn%2FWg7Ck6cUqxUNenIwRoY%2B2%2FZclECH0tLqf8DCvHsXZq8wvGzp%2BWT4Wot6HKT9NWo9gbTWAB7rt2DpjW2rLHKagIvfrGBchXJYN1SRUOcT6WnbDSN2taa9DRmPeCV1HKxv9PJporgz%2B%2BOnRW72kQmWORgJQEdWfaZmKWTbI7OL6bwG7ONHcvnLK2JnDn2HHOm3zmDVWXAgUFfsurF%2F9XmsGd0UD8dTw384Qnvu8GHAiKXL5jmlEL1lpXP3LRycqSi1DF%2BOp%2FcCrbAbcf1B%2Bgygxzhoah5H6npVvTyCKHwNMmNjMg%2FCth%2B1H3fRucJ1IYTZMyfz0%2BjAv5cf3EhyeAsTDg0TV%2B6LiuCOB2m6GJuImZnoYw9YSe0QY6pgFPszhm0OnXoYq3SZyOtr28XtzYFPqlGxdaXutrAUfSig80i6GwSfQR4Hzs6NIquhAHE8NDO1jy6nSG%2BnLonJD7Rly4GaVn6gElNv3ik2bqRDHwYVIkGIF5Ff1VZ4W3YwNFnn4%2BE17RHlF%2FtyAZZhNHDsd%2F%2FOxkJrbdlgg7VaMsbHw%2Bo%2BuqjdokUMYRDcziSPNFTjrGZv2equZy9hu4ye38vyV8CJMn&X-Amz-Signature=29c1762623c6bf052c85a3b07cab649bfd66730bf3b423a98d47312065cd61c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGMB4N3%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlce819FILFvvGI9yWNDyzi2iACNhEeNGk%2FLS3rclUcAiEAnNQ95Q1x5aMBaSjlZx%2FmahLS6ZO1iD3J3ZPbRNCDmvEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfYYiamdNQgysfJhCrcA0Vfw5hU7a7DyxMvXBKsGcgpnc4DyKhyCPO7unPR2fvNa%2FR3V6ta6zdXGUKnvbRX0mKlFTO1Ha%2Fc9F8cdwzk0%2BkyEpFS86RHqgMoTkSIO01gg59QwuRYEMapo6RluEgwWQe8%2Bb0z%2BPaia%2BfyS1lhqe4s9%2BNj7ciIK1i6O0MwOQIT0jjr5ioB6418PjJG3WXtYln3%2FeWHKD%2BUomkt5Qqu8%2B%2Bj6b4KqlTEtru856de8yS06RLH%2FZlz1WOOfKF2nf0xb0B74pvhFaGOZUcQ8BXIOokaWvH1i0HasYDRjRXZemtqt6WqSBPINTH5vJKDpPXCmGPfxQBikWyIlG9%2BwPLqWtYH1rjpEu14Nw7rQMcAY%2FBoDth4fqBGUkDuUUPe3P5ourG0ff%2FuXakHP9jglK6lo%2BMoPpHP3%2FjwVUQKMBcXXLfsaGr%2FRXuBuCCnGJB7ySB74CE8PocpPCXrPzxWH%2FJ%2Bk5mMRdPUEQodW4MIM28dPiEHzonjmuk%2BBPrTg%2Bi2qHhNcI3hft4JtYJQK8I4c91n4dA594NHrZo3GlA03KtE2liQpqvr35Aj6zo%2FMD7OoL%2BTDHXxKwLxf96%2BCLmQz%2B9fgqpUDDfTcGrvCbTcSuVjXiDq2fZe1KRgBZ8MNDbzMJmFntEGOqUBWPgOi434MGmdNy%2FAgmXy%2F29%2FFHMpRZa2EjiT9LWO%2BRHhBmV%2BNWG9K9qwk9KivQTyrna3U%2BTUG0X70OyrDK6fojrfe1mlZVH1y4Hs6luAEBckfwNfF6vo9%2Fhpg8u4sqIIK5tpf%2BLhI6fB5sHUkTc%2BZz9YzyVsIZaUjfQOVn4WoVIWaPA2q5%2BBX9UbBv%2Ba4y%2FZoMNiIm4jyaNE4vq8%2FoVpqd4z7iJ2&X-Amz-Signature=9704f162b4d2b2054bf6370b9fd59dfd6a8dc5e78502a62f3dabe30040c2ca7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646HLL26J%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKCUQsBMOORC1kMFeRcggAK6kCXmAIW9jetX%2FskOPBFAiEA2olGUcKk%2FaIlbiXuO1tMesLRJMrQLC6q0urNyN2IaSoqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjDUyEtJ6z9UrMPjyrcA%2FpBe%2B6wbaWA2mH7k9SEhMxKWQ%2FQ3UqBwJGjth9N4j01dMHoWoBJ8mT8BQbhFyyyxKCIN7etk2OaiLwkG6U%2FVt7HMTzCVun68kcWCTrpCLpVaoXj3WQQ3o3KAW68YN4ATOQzdZNyyfudtFmFpY0Ktdsl8W77Ul0yQT12dfNJWVONajkNcziw7kscspHwn8KqzjkSTPvioKUcyJZ9MmyNcSHZoiFQydPdmUfT3j4%2BNQ%2BQtq8Mfgl0MUSXCZHylAtBxcxa6k%2Fo4U32QApmzuUsH82DoGSd8WiadCePV0RkFjpd7H9QrNClT72dnAEn75CESBmOKrPgxNTPQWPNQGHFu1aj%2F9EupwXC5WvpJ2vYp3yyW%2BdX2kNjcywe8034K%2FyQNgBEFlfpRSTFwMpaK7uOqhFB4%2BSJwKxghsfhMldw8eixXIlI2gyNRcoywoG6kHDcK4Bm%2FNY0sJtXYkgRuzZI35Eue%2F3uqwvxmuNUJ%2FC%2FWZ3upPwvbvRR%2F1OXrl%2FrYay5Py6ZKDWeNymrnAuSEuYKArmDqd78zcvu%2FWNv9p89GpvLAI9PP%2FPJM%2BonaSoCt073nAAJGh%2B2sMirhTqd%2BtnsJncw9Z7B0F0OX4CA63zCqrOCaWCG%2BZcgyfsloCBLMM2HntEGOqUBUGDefN7Ulrqb50eErO2UwEpCHVo1q2x%2FriHf2J3UajiJpvrlAw8zCNM6nuTICKDagEAQy82YPRAmx9fcKMKgE1b34DBjIBvjswFhOvMtbphcZ%2FmOSvpiefkieyGkZXwffwdMPLUSMKGpUCsWUxC%2FG7lE0wBHviSgHostyPLAw%2FbH5CP%2Fb9ywE3vIKW0gVb3L19jNAS%2F%2BLgH85w9tmpFACyVwUjPH&X-Amz-Signature=8ae737d0e43f7f676fc302c99b19bdfaadcc5253b7d68c7f73dfc9cb590bb4c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGMB4N3%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlce819FILFvvGI9yWNDyzi2iACNhEeNGk%2FLS3rclUcAiEAnNQ95Q1x5aMBaSjlZx%2FmahLS6ZO1iD3J3ZPbRNCDmvEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfYYiamdNQgysfJhCrcA0Vfw5hU7a7DyxMvXBKsGcgpnc4DyKhyCPO7unPR2fvNa%2FR3V6ta6zdXGUKnvbRX0mKlFTO1Ha%2Fc9F8cdwzk0%2BkyEpFS86RHqgMoTkSIO01gg59QwuRYEMapo6RluEgwWQe8%2Bb0z%2BPaia%2BfyS1lhqe4s9%2BNj7ciIK1i6O0MwOQIT0jjr5ioB6418PjJG3WXtYln3%2FeWHKD%2BUomkt5Qqu8%2B%2Bj6b4KqlTEtru856de8yS06RLH%2FZlz1WOOfKF2nf0xb0B74pvhFaGOZUcQ8BXIOokaWvH1i0HasYDRjRXZemtqt6WqSBPINTH5vJKDpPXCmGPfxQBikWyIlG9%2BwPLqWtYH1rjpEu14Nw7rQMcAY%2FBoDth4fqBGUkDuUUPe3P5ourG0ff%2FuXakHP9jglK6lo%2BMoPpHP3%2FjwVUQKMBcXXLfsaGr%2FRXuBuCCnGJB7ySB74CE8PocpPCXrPzxWH%2FJ%2Bk5mMRdPUEQodW4MIM28dPiEHzonjmuk%2BBPrTg%2Bi2qHhNcI3hft4JtYJQK8I4c91n4dA594NHrZo3GlA03KtE2liQpqvr35Aj6zo%2FMD7OoL%2BTDHXxKwLxf96%2BCLmQz%2B9fgqpUDDfTcGrvCbTcSuVjXiDq2fZe1KRgBZ8MNDbzMJmFntEGOqUBWPgOi434MGmdNy%2FAgmXy%2F29%2FFHMpRZa2EjiT9LWO%2BRHhBmV%2BNWG9K9qwk9KivQTyrna3U%2BTUG0X70OyrDK6fojrfe1mlZVH1y4Hs6luAEBckfwNfF6vo9%2Fhpg8u4sqIIK5tpf%2BLhI6fB5sHUkTc%2BZz9YzyVsIZaUjfQOVn4WoVIWaPA2q5%2BBX9UbBv%2Ba4y%2FZoMNiIm4jyaNE4vq8%2FoVpqd4z7iJ2&X-Amz-Signature=230264eb95ef7ab464b3312cde931d61829df398c2e6554a884effad752c8fbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHOZV5YU%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyeQplrZJsDdoL0YTbwG2ZS9z0NVejKBuXBMJVD97pAAiEA%2BeAdF%2FxeU8Y1HALcAo8%2FpeHirw8L4qYUyjIHes04w%2BQqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpIO7Da5To96yVg6CrcAx7sdpsZlqjMUcI0ufoDvgIOZew7CAN9XMP681cz8S8vuZEI5EKIlzsuQdYJ4b%2FQ%2Bt2moY5KTi8ZU3j%2FMAuuUM%2F6noYMblCb6bJeQINzF20XqyO%2F4GX3zOAyTMw%2FrDwlP1s7JK2Ku8zBV6JrLsvFgH8ugT%2BhdOGn9HR%2FS0Dl8frRv7lhsZq5G0mJbKD36exv%2BIbImvVIUqpwTkehuzRMsI6pxqkUS%2Fibgus5%2BJvNZ%2FFySqwzBKW6YQyEuzfjEeLRRfm38vuD0G0KmPcslefU36XTjBfqdb9M12G%2FaMS6a8Za%2BPW2PMtK6nYNYYWdIwpH1ZvNGc0u6ptzad1gyhCdwChW8O%2FLUS30oPlbQlWEE5mGGSiUAzwv%2F5qIzeFBFf2KkuXKx7elUi6e0eWQKxZJxei1GXwotCDqJlTnBETFW1G8AZMh%2BrE3p3NWZZyseRLTsGXCxWIQIp%2Fqqh3gYwDYmvpYZEGU7R9C4rhmJAlq4RgyC%2F3QZAQ0GD7cVkMTOF77hjnahJ%2BKXoZN9QHGxSYEEH3syJ7qohrUkqywieebSE6375zS4sXdljgj%2Byn5Yg3sslE%2FvSH54R6b6waixuyydL4TCcpiyZsqKglohHj4X5k%2BsYcTwCrGQabOdNfjMLGGntEGOqUBkVTHPrGFtuoQPP1oywQRtnd9VzjYNe1j3e%2FNVWh%2FNZnIubxdx4kGOfDntURhvqpojMs9swJkwStm%2FHKBgTTwRBGAYtulX0J%2Bltf1gMYUq5hXhJ9LrR%2FFu%2BGrDPeeSBhelDEFd7kpOMyTPE2HFHMeZMA0tIqZKzes2eIxDRBVVuEelxpwXhf9GIa4pQ59lSRNWBBrTUdbvioqdUPxdsx1IybVKeZA&X-Amz-Signature=628cfbb789e9c97b259e2c7e42936c4b21896a8f8b9063b5da8841326b6599af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGMB4N3%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlce819FILFvvGI9yWNDyzi2iACNhEeNGk%2FLS3rclUcAiEAnNQ95Q1x5aMBaSjlZx%2FmahLS6ZO1iD3J3ZPbRNCDmvEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfYYiamdNQgysfJhCrcA0Vfw5hU7a7DyxMvXBKsGcgpnc4DyKhyCPO7unPR2fvNa%2FR3V6ta6zdXGUKnvbRX0mKlFTO1Ha%2Fc9F8cdwzk0%2BkyEpFS86RHqgMoTkSIO01gg59QwuRYEMapo6RluEgwWQe8%2Bb0z%2BPaia%2BfyS1lhqe4s9%2BNj7ciIK1i6O0MwOQIT0jjr5ioB6418PjJG3WXtYln3%2FeWHKD%2BUomkt5Qqu8%2B%2Bj6b4KqlTEtru856de8yS06RLH%2FZlz1WOOfKF2nf0xb0B74pvhFaGOZUcQ8BXIOokaWvH1i0HasYDRjRXZemtqt6WqSBPINTH5vJKDpPXCmGPfxQBikWyIlG9%2BwPLqWtYH1rjpEu14Nw7rQMcAY%2FBoDth4fqBGUkDuUUPe3P5ourG0ff%2FuXakHP9jglK6lo%2BMoPpHP3%2FjwVUQKMBcXXLfsaGr%2FRXuBuCCnGJB7ySB74CE8PocpPCXrPzxWH%2FJ%2Bk5mMRdPUEQodW4MIM28dPiEHzonjmuk%2BBPrTg%2Bi2qHhNcI3hft4JtYJQK8I4c91n4dA594NHrZo3GlA03KtE2liQpqvr35Aj6zo%2FMD7OoL%2BTDHXxKwLxf96%2BCLmQz%2B9fgqpUDDfTcGrvCbTcSuVjXiDq2fZe1KRgBZ8MNDbzMJmFntEGOqUBWPgOi434MGmdNy%2FAgmXy%2F29%2FFHMpRZa2EjiT9LWO%2BRHhBmV%2BNWG9K9qwk9KivQTyrna3U%2BTUG0X70OyrDK6fojrfe1mlZVH1y4Hs6luAEBckfwNfF6vo9%2Fhpg8u4sqIIK5tpf%2BLhI6fB5sHUkTc%2BZz9YzyVsIZaUjfQOVn4WoVIWaPA2q5%2BBX9UbBv%2Ba4y%2FZoMNiIm4jyaNE4vq8%2FoVpqd4z7iJ2&X-Amz-Signature=d1abefd424d43ba96c2fa4bd7437524de181959d9865735ccb746c8e8a6ec800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q4XOGUR%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0lwRrGPRSjXyOVriWojdF7JhxJ%2FfRBx2iQBqyLd%2Bf%2FwIgN%2BHtPPsGwoUO%2Bc6WuZq43wiKgeclPGIt8Z86bTI1VwUqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1rlNIuHm%2Fe5aDA3yrcA7BFLe7GRfZi4r80bKjKUbfoCdL9V7g3QZGUuTd7iSXmJndT5IgFiwaACgPMlRvB9b8owiZqxuYTMh1v6TXqRhAqMummKEhxbFub5VffShviCA0Yjm%2F9XVNyU%2F60etefi%2B9TNkcEUFcjdKmizbwQPCA9upa1yoQ2qSwEWuSkjhLDbwSriQZXe0hhDP91sjkTtF4Ao2RQV4F8UcTmnJZ%2BblsGhd6d4kAyYj%2B9ziSS4RGMBeuBBZNjSc%2Fny%2BdaQiPWIalWt36kuVmRAHb%2BrA7zrwj0lc%2FFLq7Byj42CZDh%2FYJf%2Brx6tXSq9wZpJjRnodY9LX0POtghD0F2eRa%2BE91g0KbCaRpR905em%2FBK1MiAASbq9LsREZWbFZo5Dwopjwj41gB0QHiT9t1kjlHCnflxQf1FTSf31BeTg2ZJuSS9%2F1euctu1Y5oQtegrS0I9W2xIEH6dIP0fUWl74lJPgmxp0bXM33VKEJAQVgYqSAW3mxxHC30uIe5v8XltM5u3fVhjdgrGUj7lwVINppD%2Bp9Q9zFXrBqRP8HfGrGIojKDqAd7vgXbA%2FmnoFrb30k5cJ%2BJFGEePzEE9OzYa1ccGdxloXa4ArGxfdIVwVbAL9n24gSsW%2BY1qQy%2FDM5TWe2etMJqFntEGOqUBMrv%2FnyrFa4uHHeLJCI1T6MZfSqJQrcPMLmBILpHJlW67DAeCZL7mQ4ZfPeCw76gxm5K99dBoItY3IO%2BG%2FsUVDSI0rG1jz8Ksk1CTy%2F20bKa0nDdQkGWJEhjP7HnxP3TOCvephc2J7LR6OgmAZt6aoiFZYTulLE816Nj9rWnZNiSN5C6Fg%2BfGRkj6zFu5tMDIRYG1BVccBHqs8DlXkZ1jKpm985sv&X-Amz-Signature=4d4b3948bd1f7f8db518b4a92480f422f0df229aa0863eca2c46fab66fe1327a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGMB4N3%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlce819FILFvvGI9yWNDyzi2iACNhEeNGk%2FLS3rclUcAiEAnNQ95Q1x5aMBaSjlZx%2FmahLS6ZO1iD3J3ZPbRNCDmvEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfYYiamdNQgysfJhCrcA0Vfw5hU7a7DyxMvXBKsGcgpnc4DyKhyCPO7unPR2fvNa%2FR3V6ta6zdXGUKnvbRX0mKlFTO1Ha%2Fc9F8cdwzk0%2BkyEpFS86RHqgMoTkSIO01gg59QwuRYEMapo6RluEgwWQe8%2Bb0z%2BPaia%2BfyS1lhqe4s9%2BNj7ciIK1i6O0MwOQIT0jjr5ioB6418PjJG3WXtYln3%2FeWHKD%2BUomkt5Qqu8%2B%2Bj6b4KqlTEtru856de8yS06RLH%2FZlz1WOOfKF2nf0xb0B74pvhFaGOZUcQ8BXIOokaWvH1i0HasYDRjRXZemtqt6WqSBPINTH5vJKDpPXCmGPfxQBikWyIlG9%2BwPLqWtYH1rjpEu14Nw7rQMcAY%2FBoDth4fqBGUkDuUUPe3P5ourG0ff%2FuXakHP9jglK6lo%2BMoPpHP3%2FjwVUQKMBcXXLfsaGr%2FRXuBuCCnGJB7ySB74CE8PocpPCXrPzxWH%2FJ%2Bk5mMRdPUEQodW4MIM28dPiEHzonjmuk%2BBPrTg%2Bi2qHhNcI3hft4JtYJQK8I4c91n4dA594NHrZo3GlA03KtE2liQpqvr35Aj6zo%2FMD7OoL%2BTDHXxKwLxf96%2BCLmQz%2B9fgqpUDDfTcGrvCbTcSuVjXiDq2fZe1KRgBZ8MNDbzMJmFntEGOqUBWPgOi434MGmdNy%2FAgmXy%2F29%2FFHMpRZa2EjiT9LWO%2BRHhBmV%2BNWG9K9qwk9KivQTyrna3U%2BTUG0X70OyrDK6fojrfe1mlZVH1y4Hs6luAEBckfwNfF6vo9%2Fhpg8u4sqIIK5tpf%2BLhI6fB5sHUkTc%2BZz9YzyVsIZaUjfQOVn4WoVIWaPA2q5%2BBX9UbBv%2Ba4y%2FZoMNiIm4jyaNE4vq8%2FoVpqd4z7iJ2&X-Amz-Signature=e75de305d1e71c44a9771ca93e0a10d1a07f1465403d214c512847451e5b1526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D37T2ZD%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxVDULKTdCAQTyKT0Lk7bjQPXSpFr%2FVDPxLfW%2Fza3dHwIhANH6axXwEdKxCKcyKz5ptwsJp%2FEzxnb1EobQktkKgOtZKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbKACqwjOHKu9OaOIq3AN%2BVfr7VOq0MVzPUSwNky5VGvLjMHZeZLBKmOD5UgsFZfMYrISJCQkoBeukEcsSoWLn2u3c5qrpRrOh%2BeWs8nFYlEBABqXo%2Flfc7K9nQ8gy2t41ZWqDyJT%2FjsHzd3MgoqUNxVkKB04MwMyVvG%2FgP3lYTtmMI%2FjlKk2wO5S%2BX82xXkt0EO7vcjAbQ8qgcY%2FZzJiDEE8UhGK7YfEN4qPwsvNz4xWFkFkDs%2BdSw1V9NBtFQAoDWZPfLWmat%2BPduuNynAK3r3oktUzgqaJPAH9QrvBM6fyrSiE51%2FfrurD5sSRckbaL%2BIyUlCfbqYwUwhhjyMn9WYGIACqBdwVgmY0J0NH7LrtsE9QdhvveMol5454PT7H2gwNKheb8ylB5iIUAmYCzPusd7wAhLvZQA8M00txCOPfcoyAjWqsV92fCLEkrbS9dDy9ifwWYcMle1ST33N5YOTBAbhwE2o2%2F4iI%2FSdDWsGDvdMAD8bI75As3pVEZLGHuOClFi7LffLcs9OgcfY4VA4vofiGygSEYFYL%2FKSKMyV4uGcFpnboVx01xPVwdeb4cr%2BOl%2BYGH5hOqgmuKrjXujNrvNmD049sO5ZhK93JxyUSpp1ThP0UnQbPStP2ZdirMBp6EDuVoN2F9mTCyhp7RBjqkAYPzKoJ5G2vN6T4gp9uPQ9V1WYtTBZpVZurYzJkVYQdkO3WIip4sKHt9PjHsisk0NGuvCT83opbHkO9G7uEUTpLARKq1T9Bgu1X8Xy0Gkyz6L0XiKgs%2BAKX2Hbv9NtbYPA87pzA6EI9yBZx3so9Boy%2BsnKQSWn1UittenlmsS9lTg5uGj3oCjQidh6BqBzWvXXgKOtgvJZERZblhmDdAJ85dkdSd&X-Amz-Signature=b022363af020085667bcb3b7ae941b2db3e971b6ed1256e94ebe0edaca8b7f1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGMB4N3%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlce819FILFvvGI9yWNDyzi2iACNhEeNGk%2FLS3rclUcAiEAnNQ95Q1x5aMBaSjlZx%2FmahLS6ZO1iD3J3ZPbRNCDmvEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfYYiamdNQgysfJhCrcA0Vfw5hU7a7DyxMvXBKsGcgpnc4DyKhyCPO7unPR2fvNa%2FR3V6ta6zdXGUKnvbRX0mKlFTO1Ha%2Fc9F8cdwzk0%2BkyEpFS86RHqgMoTkSIO01gg59QwuRYEMapo6RluEgwWQe8%2Bb0z%2BPaia%2BfyS1lhqe4s9%2BNj7ciIK1i6O0MwOQIT0jjr5ioB6418PjJG3WXtYln3%2FeWHKD%2BUomkt5Qqu8%2B%2Bj6b4KqlTEtru856de8yS06RLH%2FZlz1WOOfKF2nf0xb0B74pvhFaGOZUcQ8BXIOokaWvH1i0HasYDRjRXZemtqt6WqSBPINTH5vJKDpPXCmGPfxQBikWyIlG9%2BwPLqWtYH1rjpEu14Nw7rQMcAY%2FBoDth4fqBGUkDuUUPe3P5ourG0ff%2FuXakHP9jglK6lo%2BMoPpHP3%2FjwVUQKMBcXXLfsaGr%2FRXuBuCCnGJB7ySB74CE8PocpPCXrPzxWH%2FJ%2Bk5mMRdPUEQodW4MIM28dPiEHzonjmuk%2BBPrTg%2Bi2qHhNcI3hft4JtYJQK8I4c91n4dA594NHrZo3GlA03KtE2liQpqvr35Aj6zo%2FMD7OoL%2BTDHXxKwLxf96%2BCLmQz%2B9fgqpUDDfTcGrvCbTcSuVjXiDq2fZe1KRgBZ8MNDbzMJmFntEGOqUBWPgOi434MGmdNy%2FAgmXy%2F29%2FFHMpRZa2EjiT9LWO%2BRHhBmV%2BNWG9K9qwk9KivQTyrna3U%2BTUG0X70OyrDK6fojrfe1mlZVH1y4Hs6luAEBckfwNfF6vo9%2Fhpg8u4sqIIK5tpf%2BLhI6fB5sHUkTc%2BZz9YzyVsIZaUjfQOVn4WoVIWaPA2q5%2BBX9UbBv%2Ba4y%2FZoMNiIm4jyaNE4vq8%2FoVpqd4z7iJ2&X-Amz-Signature=60ed574bc26583b54833fa24344ca07a333245e542c61f92c0f66662b95c5aab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BSU6IIN%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7Wr1JD4lwGg3D0EPZ61c6AcanWspdsEb%2Bjeo59SnEJAiB1otq12Cf%2B94%2BUaIVHCJWAN7f1QZGCis8DSLuALoacviqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJNrAZ0v8QB5TGqtHKtwDbHz%2Fti8lpy6jo3W02T4d3Wz%2B5qve3nPlMcyOizK3j1d%2B09DVqz0calSIeaHbAaXG9vNn6bMhB5kdfO%2BUQUng5y56fI5CDAZknwi3u36pSMPMVJUG0RMuu9C1C4LjT%2BPHdbMDRRz6weSAjs6WEgNEliPewR9XuJRFdoF4Pma5TuluxrAmwpN9igkaUXMnHbcwgv6geLeA0%2FzrlVW%2BrBjOXH%2Bhq4JbEiJxe9TDHCvtzAr1bW5RtOfCSw0JABLcKF6Fi8iv%2FAPU4bP%2BUH8Rlvg3YXfyt5MAfjwAiWWuXWtoy92uEMmYrlE7OSS%2FQ%2Fr9BuXDCvMzzTbWpEg3v4dNslkaJLq62viEy8Nqa2jIFYx2G3rSsmxAnwN5ObeKsu5pKFqBtnUd6nhLycWUZv9sWajqbEyscuDGuhUqFtO3I6iVLBL8SpXrH9%2FxN2kl86KYAg4mCFWKgJAlz90P7kgbHXZVhEyUNPv%2FwEwlRYYHlsBwao%2Bn5Ntg1VTnLndUW%2FwTFveguwt7JIBZfoO2adQBPo4SWdn0ufH3XE2Pdy6H6sVUrwx%2F5KRpqZ1Pw1zGO3tN9B6jLbBVbE3%2FBLjLQXyzASIsZSK2v%2ByCwFjBrLvpT7%2B8oyH41HcNJFrFWbveLgowi4We0QY6pgGozlH%2FAkuxdALLJSlHsDSFJ%2BAHf%2FQJtabh2Nn0th%2Fd2j7SgQ4G89gs2bAHgOnW8ahVghr1ExXDSEfQMFb8Y8S4ivvZxdTvwvAWITWDRVtfw3QyJ5d2TzwPL8wkimUop%2FxHUrVhmaaq%2F%2B9ud76vnPNklHVYXvMg4WLAnjZynYDzaILx6VoLCFpn00OCftVCatvKp5c%2BFm0UEhZNAEUQ3eky7dqtC7AF&X-Amz-Signature=d5ebfe593adb006754a50facb6cbb7923a0bbfd0a19860e1714959a816c25f8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNKN6GVB%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2MKB%2FPeatKGnrnTnEe3zggbQZKPyCu13C3nOvkGLA8wIgSSYWo3wSLrq6gczOe4af4VFxdiF5oY5dSyuWLrRUpO8qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyieSVQMT6p4kiFhircA%2BR%2FvguCbngCt04%2FD6GdZBQRNUuRiAeno6sg0850PQ7aYgbQP62tvQvF7NmryLukpAV%2Bx%2B3sLh07OY8ymln8VPUmZYQB5KgVsW0Wxomdho8B%2FnVW64yvVPDs3gm7g1iM1JMEY3Cb3XjJ%2FJjWh3UGnYl%2FupdHvM96FpExMxR211M6lSuYk2UhzvhmT5RiWurDxoCem2TTwFFak%2FDmCzbyL6D2VcWGWf8R6Pu0%2B6JjFCaTy5Zpt4vxW0agmQ3%2FQ%2B9aNGsWTHEWC1N7wCecWp5Uhw19Psn4GL8QM15eZVfUXXaDwg0vDYBR3yWG5ntSGp%2BAodKPw5XSSg4aShPGy8BnB6ItAO658kPxY3VQDLlheWVF2%2Bql%2Fa3MDkhZmFIULsEMzvK4%2BMQahOvYNZNzMLa9BpI%2B3DV74hzofv2dVn%2F9rchjQB5erpYvoYYgasq1hBdNdJf8T5kJaNueh4AJNnd89FSIMuO5RjBx4ix9lj3K7AeGXTpoc2x6YRZgrLj5yAWzqFH9WBdLABbR%2FGRRw588IxyWxyrwDbIur8Y95yTUP1gqyku2y3gUR9L03JTy3j2udZE4%2BmWQQAcEhYNv4Dzo8JVXhqGPJ1rQgOHOVMODxS0xCjLXZfONiLrlg%2B1eMJuGntEGOqUB3eIKKDCX4WT052C0id3YH8Tu%2FgLy1XDL2qg1D%2BjpFx9i2S9xvfrprYBhPrD2qBJfi0XniwBaavmlRuX4c85mM91y8x2GAP1P%2FbU8uYvoZH63aEqtqx3cU7MBX8My5xnZqWrStnbyHV26VfxwHjzObkp6OSD9vU6epbrwsw4EvSMzurbmz2WQbjM4jbX3wtZvqc7pafPKnE9gDZS3VmxrZWTfz514&X-Amz-Signature=a54cbdeaa69f024f10a28cca3a4c3119928c66db6c9ab504ec21c3586bf4e8a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP5XHU77%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9SlxsopH%2Ffyk2GKtmNsEmXaupxT4UAOd7DeiLGhlWoAiBOnqaxASu3EGITjdiAQjEEDcfiMlyHj6PwgDdR%2Frvm0yqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN9vAxMi4wtWjxBNaKtwD7KwjQLpIwaZ4veen8O821GJaG6DP%2BLcsvJdvJLCtXFsI0Wlk8d9B1AtDEH%2BhepjAshpzD4P2hl6ZAfzvj5whPYf6HDUxTx3O5a4q7rAOZ1akoVCzxaLOAeKjVnV%2F4bZeOCmibNphs0bjIxIJf6GFARtjyBWW1TrnqqVHEt5S4SqYwgbEF1m6UTTh0qvBal6BjuBrScYqUjaKRSZl6m%2BDtu%2Btjptr6o7SI5n0WcA83HnWC1XjLAvgiVHTjEFaOq1GV3kkAPqxA%2BSa79XeaCDcCwhQH2Qzj3FxXP%2BBD8EQAVhuJxz3ErwJ0RxTfzm5O6xpN5f4N2MFR%2F9gZIf%2BJ%2FoAXqmC6Q8YWaJ4ZnjiMSSBTb7x22BMhpiG%2B07cNcbN3KtEhVQMOSAxMxu1pobPB70GtvvTjLWE7piOErmGttdSCpE5csm9QbB3KXb5oZm5eMhZpSb8nyaKPJh%2BZPElNU3Do6d98bS%2FGIWz6x5rkFwt3zL%2FqlWdXN1XIYu%2F12gIN%2Fd4iGok5hQrkz%2BMVC%2BDK4v1AWtw%2FwdBLmcPuCg7e6yT%2BET5Mydw05VfapIlLI4pdLPZkY8YPz5BdGf0oYUDYa2FBrQ63%2Bs94f33zyiuCQE4ZhAi%2FPBQru3aXZllyVIw%2F4Se0QY6pgHiuC5J1SV96GHaCC3YQy7PyjDa5kSi1TMn8HJPDimSXuVdlNW%2FhreGjta6A0ozkyeNAfmZ16gc6zT0iOgRqDdMbYgMYoZw2abByKpPMD241mMNpsYyKCItTE4SKRq0IfBeb7BS%2FErICoKFpXmHnDuhHkqnw41sV4yRxlmUkZhqWyHGU8iwJpiXrQHYWaNLdEiPoDanmqV9zzFvDYDUlqNO3xT%2BmvOq&X-Amz-Signature=86fd88cffcca1e56144f03e3dc95f31298c044e2f1fbdad030e8efd87d27a560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGMB4N3%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlce819FILFvvGI9yWNDyzi2iACNhEeNGk%2FLS3rclUcAiEAnNQ95Q1x5aMBaSjlZx%2FmahLS6ZO1iD3J3ZPbRNCDmvEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfYYiamdNQgysfJhCrcA0Vfw5hU7a7DyxMvXBKsGcgpnc4DyKhyCPO7unPR2fvNa%2FR3V6ta6zdXGUKnvbRX0mKlFTO1Ha%2Fc9F8cdwzk0%2BkyEpFS86RHqgMoTkSIO01gg59QwuRYEMapo6RluEgwWQe8%2Bb0z%2BPaia%2BfyS1lhqe4s9%2BNj7ciIK1i6O0MwOQIT0jjr5ioB6418PjJG3WXtYln3%2FeWHKD%2BUomkt5Qqu8%2B%2Bj6b4KqlTEtru856de8yS06RLH%2FZlz1WOOfKF2nf0xb0B74pvhFaGOZUcQ8BXIOokaWvH1i0HasYDRjRXZemtqt6WqSBPINTH5vJKDpPXCmGPfxQBikWyIlG9%2BwPLqWtYH1rjpEu14Nw7rQMcAY%2FBoDth4fqBGUkDuUUPe3P5ourG0ff%2FuXakHP9jglK6lo%2BMoPpHP3%2FjwVUQKMBcXXLfsaGr%2FRXuBuCCnGJB7ySB74CE8PocpPCXrPzxWH%2FJ%2Bk5mMRdPUEQodW4MIM28dPiEHzonjmuk%2BBPrTg%2Bi2qHhNcI3hft4JtYJQK8I4c91n4dA594NHrZo3GlA03KtE2liQpqvr35Aj6zo%2FMD7OoL%2BTDHXxKwLxf96%2BCLmQz%2B9fgqpUDDfTcGrvCbTcSuVjXiDq2fZe1KRgBZ8MNDbzMJmFntEGOqUBWPgOi434MGmdNy%2FAgmXy%2F29%2FFHMpRZa2EjiT9LWO%2BRHhBmV%2BNWG9K9qwk9KivQTyrna3U%2BTUG0X70OyrDK6fojrfe1mlZVH1y4Hs6luAEBckfwNfF6vo9%2Fhpg8u4sqIIK5tpf%2BLhI6fB5sHUkTc%2BZz9YzyVsIZaUjfQOVn4WoVIWaPA2q5%2BBX9UbBv%2Ba4y%2FZoMNiIm4jyaNE4vq8%2FoVpqd4z7iJ2&X-Amz-Signature=b2ac191ba587740d67875a97c5fc8e9b4b4567a7e7cd65c9be502e93ae9051c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGMB4N3%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlce819FILFvvGI9yWNDyzi2iACNhEeNGk%2FLS3rclUcAiEAnNQ95Q1x5aMBaSjlZx%2FmahLS6ZO1iD3J3ZPbRNCDmvEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfYYiamdNQgysfJhCrcA0Vfw5hU7a7DyxMvXBKsGcgpnc4DyKhyCPO7unPR2fvNa%2FR3V6ta6zdXGUKnvbRX0mKlFTO1Ha%2Fc9F8cdwzk0%2BkyEpFS86RHqgMoTkSIO01gg59QwuRYEMapo6RluEgwWQe8%2Bb0z%2BPaia%2BfyS1lhqe4s9%2BNj7ciIK1i6O0MwOQIT0jjr5ioB6418PjJG3WXtYln3%2FeWHKD%2BUomkt5Qqu8%2B%2Bj6b4KqlTEtru856de8yS06RLH%2FZlz1WOOfKF2nf0xb0B74pvhFaGOZUcQ8BXIOokaWvH1i0HasYDRjRXZemtqt6WqSBPINTH5vJKDpPXCmGPfxQBikWyIlG9%2BwPLqWtYH1rjpEu14Nw7rQMcAY%2FBoDth4fqBGUkDuUUPe3P5ourG0ff%2FuXakHP9jglK6lo%2BMoPpHP3%2FjwVUQKMBcXXLfsaGr%2FRXuBuCCnGJB7ySB74CE8PocpPCXrPzxWH%2FJ%2Bk5mMRdPUEQodW4MIM28dPiEHzonjmuk%2BBPrTg%2Bi2qHhNcI3hft4JtYJQK8I4c91n4dA594NHrZo3GlA03KtE2liQpqvr35Aj6zo%2FMD7OoL%2BTDHXxKwLxf96%2BCLmQz%2B9fgqpUDDfTcGrvCbTcSuVjXiDq2fZe1KRgBZ8MNDbzMJmFntEGOqUBWPgOi434MGmdNy%2FAgmXy%2F29%2FFHMpRZa2EjiT9LWO%2BRHhBmV%2BNWG9K9qwk9KivQTyrna3U%2BTUG0X70OyrDK6fojrfe1mlZVH1y4Hs6luAEBckfwNfF6vo9%2Fhpg8u4sqIIK5tpf%2BLhI6fB5sHUkTc%2BZz9YzyVsIZaUjfQOVn4WoVIWaPA2q5%2BBX9UbBv%2Ba4y%2FZoMNiIm4jyaNE4vq8%2FoVpqd4z7iJ2&X-Amz-Signature=bbd2563c10202732ea46f5ac07d4d0a2cf30f4640a6f9b7164bead5e9ead6a29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU2HXRPG%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYDBQy2x4rlAteevlsVOUbDNXGctUFt9mXlFso%2FOIo0AiEAgLdW3bSv3wpFOz%2BlKYoy9nsMzi4%2F%2BIo5ciUBIH%2FeSaEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnVMcfFQ39em504SCrcAx0R5IN0UW32gaTKmXHHCO82GTtVuF2pu1KV1zg%2FP%2B4UeFq8VwOqWyd00zleL5JpcTuRQm9D8A8V7qkLOlPp61Sdh7ZYOCqRb6bvUjR53sG7TSZGst5tilLEVB4MgwVD0%2FTUjthrEvHunGXKPGwqn96TX4Ps%2BvvedYQFMAyY%2FY7JnS8HHtaCT6Y0S0UKGdb7bWV9A1w3B%2FVA1hCQtQbJD5fi4UkYRbIJiqIyj6CI0EuNG8Uzs0NubvUe%2BZwVf%2F0nBWGBOgjwOk3ITJ8twmXcpJBndOLBA2qslVmgHHLmYRMNaf0ukAbFMHbNaYec68O4kiXxR%2B8V%2F%2B7IwLJ0qQytYN2fuVhJwy4piMrpzrDTxmmelvwShwjDPReq7uMYS%2BCRHk%2BtedKXHRvNAjXpz182Ag64AqduzJmc7bS0hoQcxdV9wvfzYxmztnXU8WZjJedARdsnvhJq9JwlWMgBR4hK%2B9YU0RpdD9fGYpfmZlcD2%2FBYYvjy5tVfUGQX7cShH7DirTSGArnwKFyTpX64a0ne48J7LuO6nj7Imi52xCYayoiVh9z7ADPHx3jHYLxEKC%2BA0flrawxAKsX0fmRAptOCUIMVmRyFgjSmVMJB3sl9MYig8S%2FNWWxXgnbPmg%2BvMJWHntEGOqUButtJ5o7BcQVWmTywlV%2BI9%2FjtQp1CURGsoM%2FhVFUy2R5WLy%2Bp7Zh0mFFqZN4l5mdgKcO%2F45tNtNDW%2BKEg9jU%2B%2FenqXhqI3u5KxPkab9U7e%2BBR0Ah6oUf1wXJSnbmof8mj9uq1KgycwgHt8TEk7JhSxQBTU8sBfCuTLSObXYjC%2BDL1b2RdmDR%2FcOC3qBwPeiedxcb9QGD8vJDjEbLPtOwyp2Yv7J9u&X-Amz-Signature=e61bf013863eb1c1a292af61ee08d0aa69fff953fb00737552933fb6b42bb9ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU2HXRPG%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYDBQy2x4rlAteevlsVOUbDNXGctUFt9mXlFso%2FOIo0AiEAgLdW3bSv3wpFOz%2BlKYoy9nsMzi4%2F%2BIo5ciUBIH%2FeSaEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnVMcfFQ39em504SCrcAx0R5IN0UW32gaTKmXHHCO82GTtVuF2pu1KV1zg%2FP%2B4UeFq8VwOqWyd00zleL5JpcTuRQm9D8A8V7qkLOlPp61Sdh7ZYOCqRb6bvUjR53sG7TSZGst5tilLEVB4MgwVD0%2FTUjthrEvHunGXKPGwqn96TX4Ps%2BvvedYQFMAyY%2FY7JnS8HHtaCT6Y0S0UKGdb7bWV9A1w3B%2FVA1hCQtQbJD5fi4UkYRbIJiqIyj6CI0EuNG8Uzs0NubvUe%2BZwVf%2F0nBWGBOgjwOk3ITJ8twmXcpJBndOLBA2qslVmgHHLmYRMNaf0ukAbFMHbNaYec68O4kiXxR%2B8V%2F%2B7IwLJ0qQytYN2fuVhJwy4piMrpzrDTxmmelvwShwjDPReq7uMYS%2BCRHk%2BtedKXHRvNAjXpz182Ag64AqduzJmc7bS0hoQcxdV9wvfzYxmztnXU8WZjJedARdsnvhJq9JwlWMgBR4hK%2B9YU0RpdD9fGYpfmZlcD2%2FBYYvjy5tVfUGQX7cShH7DirTSGArnwKFyTpX64a0ne48J7LuO6nj7Imi52xCYayoiVh9z7ADPHx3jHYLxEKC%2BA0flrawxAKsX0fmRAptOCUIMVmRyFgjSmVMJB3sl9MYig8S%2FNWWxXgnbPmg%2BvMJWHntEGOqUButtJ5o7BcQVWmTywlV%2BI9%2FjtQp1CURGsoM%2FhVFUy2R5WLy%2Bp7Zh0mFFqZN4l5mdgKcO%2F45tNtNDW%2BKEg9jU%2B%2FenqXhqI3u5KxPkab9U7e%2BBR0Ah6oUf1wXJSnbmof8mj9uq1KgycwgHt8TEk7JhSxQBTU8sBfCuTLSObXYjC%2BDL1b2RdmDR%2FcOC3qBwPeiedxcb9QGD8vJDjEbLPtOwyp2Yv7J9u&X-Amz-Signature=f92cba216d2b3408ac8617f6a5d00e3a1dbf9f9b858982f3ccfcb33f965ed3af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU2HXRPG%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYDBQy2x4rlAteevlsVOUbDNXGctUFt9mXlFso%2FOIo0AiEAgLdW3bSv3wpFOz%2BlKYoy9nsMzi4%2F%2BIo5ciUBIH%2FeSaEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnVMcfFQ39em504SCrcAx0R5IN0UW32gaTKmXHHCO82GTtVuF2pu1KV1zg%2FP%2B4UeFq8VwOqWyd00zleL5JpcTuRQm9D8A8V7qkLOlPp61Sdh7ZYOCqRb6bvUjR53sG7TSZGst5tilLEVB4MgwVD0%2FTUjthrEvHunGXKPGwqn96TX4Ps%2BvvedYQFMAyY%2FY7JnS8HHtaCT6Y0S0UKGdb7bWV9A1w3B%2FVA1hCQtQbJD5fi4UkYRbIJiqIyj6CI0EuNG8Uzs0NubvUe%2BZwVf%2F0nBWGBOgjwOk3ITJ8twmXcpJBndOLBA2qslVmgHHLmYRMNaf0ukAbFMHbNaYec68O4kiXxR%2B8V%2F%2B7IwLJ0qQytYN2fuVhJwy4piMrpzrDTxmmelvwShwjDPReq7uMYS%2BCRHk%2BtedKXHRvNAjXpz182Ag64AqduzJmc7bS0hoQcxdV9wvfzYxmztnXU8WZjJedARdsnvhJq9JwlWMgBR4hK%2B9YU0RpdD9fGYpfmZlcD2%2FBYYvjy5tVfUGQX7cShH7DirTSGArnwKFyTpX64a0ne48J7LuO6nj7Imi52xCYayoiVh9z7ADPHx3jHYLxEKC%2BA0flrawxAKsX0fmRAptOCUIMVmRyFgjSmVMJB3sl9MYig8S%2FNWWxXgnbPmg%2BvMJWHntEGOqUButtJ5o7BcQVWmTywlV%2BI9%2FjtQp1CURGsoM%2FhVFUy2R5WLy%2Bp7Zh0mFFqZN4l5mdgKcO%2F45tNtNDW%2BKEg9jU%2B%2FenqXhqI3u5KxPkab9U7e%2BBR0Ah6oUf1wXJSnbmof8mj9uq1KgycwgHt8TEk7JhSxQBTU8sBfCuTLSObXYjC%2BDL1b2RdmDR%2FcOC3qBwPeiedxcb9QGD8vJDjEbLPtOwyp2Yv7J9u&X-Amz-Signature=38a32be2c8f49c32d43cf22448406746e1f43a66d29f199c115f30323f1bd6f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU2HXRPG%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYDBQy2x4rlAteevlsVOUbDNXGctUFt9mXlFso%2FOIo0AiEAgLdW3bSv3wpFOz%2BlKYoy9nsMzi4%2F%2BIo5ciUBIH%2FeSaEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnVMcfFQ39em504SCrcAx0R5IN0UW32gaTKmXHHCO82GTtVuF2pu1KV1zg%2FP%2B4UeFq8VwOqWyd00zleL5JpcTuRQm9D8A8V7qkLOlPp61Sdh7ZYOCqRb6bvUjR53sG7TSZGst5tilLEVB4MgwVD0%2FTUjthrEvHunGXKPGwqn96TX4Ps%2BvvedYQFMAyY%2FY7JnS8HHtaCT6Y0S0UKGdb7bWV9A1w3B%2FVA1hCQtQbJD5fi4UkYRbIJiqIyj6CI0EuNG8Uzs0NubvUe%2BZwVf%2F0nBWGBOgjwOk3ITJ8twmXcpJBndOLBA2qslVmgHHLmYRMNaf0ukAbFMHbNaYec68O4kiXxR%2B8V%2F%2B7IwLJ0qQytYN2fuVhJwy4piMrpzrDTxmmelvwShwjDPReq7uMYS%2BCRHk%2BtedKXHRvNAjXpz182Ag64AqduzJmc7bS0hoQcxdV9wvfzYxmztnXU8WZjJedARdsnvhJq9JwlWMgBR4hK%2B9YU0RpdD9fGYpfmZlcD2%2FBYYvjy5tVfUGQX7cShH7DirTSGArnwKFyTpX64a0ne48J7LuO6nj7Imi52xCYayoiVh9z7ADPHx3jHYLxEKC%2BA0flrawxAKsX0fmRAptOCUIMVmRyFgjSmVMJB3sl9MYig8S%2FNWWxXgnbPmg%2BvMJWHntEGOqUButtJ5o7BcQVWmTywlV%2BI9%2FjtQp1CURGsoM%2FhVFUy2R5WLy%2Bp7Zh0mFFqZN4l5mdgKcO%2F45tNtNDW%2BKEg9jU%2B%2FenqXhqI3u5KxPkab9U7e%2BBR0Ah6oUf1wXJSnbmof8mj9uq1KgycwgHt8TEk7JhSxQBTU8sBfCuTLSObXYjC%2BDL1b2RdmDR%2FcOC3qBwPeiedxcb9QGD8vJDjEbLPtOwyp2Yv7J9u&X-Amz-Signature=86f728ef0d104ff90a83319f77af773b4ea3a7ca0abde92da7d7f3713b97259e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXBPYWAW%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAW7TmoHzGRq4WrWV4xY14mHMQkx6%2BUY4w3fommJik7mAiEAhpPz1su%2FCTQtmub0PBo2YLU1I99SrnYYc8WJ%2B4owgYAqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpY42N74MVtosQdtyrcA%2BRtmVyo27tzkOGcZ2rtAQQxRl9uPJm04nNT1JapnZywmINA650Ia8D1DXvBzzKquGYmB4FrLGOHOt3aaaD8cLQ9Qx0ncwuKOtY95G3zoOBkNcW4XRCFWX1NQ%2F1a8DVsh3lflNYC7DRvRXKtJiexlxZdksBqyykgAtye0xC7oSm%2FxpVVCSTOWyzTMxqvq9h10npPP%2BNBdQpngge2HmIiAq52JDsbFxHHbu8j%2FThl9q13Zcb4sgpEtaWIXqw4osYOV8DzKpgkBow96MrhxP40IkkTu0EVX1%2BwO4cW3R1sh7R1pHDBmr4Min76S1nuVn5Kw9jXnu8i2n1taPjlQ578jdHEZRIf6Yp528NCl%2BQYZpP4cRIogYpQht%2BpfYs%2BWNKq50se8ylNuDCavS1AnsiUBQBaLv0m3fHMo6%2FM8d1%2FEx%2BsZZWD7uDun6GrS0M4xBY%2FjKmTk%2BLU6lxhipjkfaSWfkF8m3Wh2RzGYJ9amY0rZCORd0AxFRRaZ%2Btyks%2FKgwuC5O8Q7kLnyOk39Ee03zyHVm4Uh1FwYsvziBErT4li8TwoNO%2FWjE7u0U7cklYyngwIW2zi%2FclNVbnKBC3DbEZ4%2BLD8QiuNse8x44%2FU2Q3xWgDmZOMCe7noF5GTXJcKMPOEntEGOqUBxYjTvBCP2hyREFCDCQ214qbXINexfrg2uci5E9JGRvsozi9R%2Boo3VHrAfK0%2BCVfmLoDHWtdFo11i9AdPpne%2BDzVpBDXtzhHHyZAFZHb2Qu6ueRDpiXz77L6CCdHKAqkgQKOFpoFkdi%2BwEA8QSwhoG1ioCdaUtyse39vBS%2FYJZ%2FrF%2Frcpq3dZakNIGoey99FsuD0lQi8FN8TZWu%2F4DUNMipboDtYO&X-Amz-Signature=a33662cc8441a6cd8f8f3a8a80a8f8020d7b90d3ae83be7aba27c300d1426dc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU2HXRPG%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYDBQy2x4rlAteevlsVOUbDNXGctUFt9mXlFso%2FOIo0AiEAgLdW3bSv3wpFOz%2BlKYoy9nsMzi4%2F%2BIo5ciUBIH%2FeSaEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnVMcfFQ39em504SCrcAx0R5IN0UW32gaTKmXHHCO82GTtVuF2pu1KV1zg%2FP%2B4UeFq8VwOqWyd00zleL5JpcTuRQm9D8A8V7qkLOlPp61Sdh7ZYOCqRb6bvUjR53sG7TSZGst5tilLEVB4MgwVD0%2FTUjthrEvHunGXKPGwqn96TX4Ps%2BvvedYQFMAyY%2FY7JnS8HHtaCT6Y0S0UKGdb7bWV9A1w3B%2FVA1hCQtQbJD5fi4UkYRbIJiqIyj6CI0EuNG8Uzs0NubvUe%2BZwVf%2F0nBWGBOgjwOk3ITJ8twmXcpJBndOLBA2qslVmgHHLmYRMNaf0ukAbFMHbNaYec68O4kiXxR%2B8V%2F%2B7IwLJ0qQytYN2fuVhJwy4piMrpzrDTxmmelvwShwjDPReq7uMYS%2BCRHk%2BtedKXHRvNAjXpz182Ag64AqduzJmc7bS0hoQcxdV9wvfzYxmztnXU8WZjJedARdsnvhJq9JwlWMgBR4hK%2B9YU0RpdD9fGYpfmZlcD2%2FBYYvjy5tVfUGQX7cShH7DirTSGArnwKFyTpX64a0ne48J7LuO6nj7Imi52xCYayoiVh9z7ADPHx3jHYLxEKC%2BA0flrawxAKsX0fmRAptOCUIMVmRyFgjSmVMJB3sl9MYig8S%2FNWWxXgnbPmg%2BvMJWHntEGOqUButtJ5o7BcQVWmTywlV%2BI9%2FjtQp1CURGsoM%2FhVFUy2R5WLy%2Bp7Zh0mFFqZN4l5mdgKcO%2F45tNtNDW%2BKEg9jU%2B%2FenqXhqI3u5KxPkab9U7e%2BBR0Ah6oUf1wXJSnbmof8mj9uq1KgycwgHt8TEk7JhSxQBTU8sBfCuTLSObXYjC%2BDL1b2RdmDR%2FcOC3qBwPeiedxcb9QGD8vJDjEbLPtOwyp2Yv7J9u&X-Amz-Signature=0db7a8653faa19f8812f959e0b147e837d2a65eef0ea1603e9885063098ac565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU2HXRPG%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYDBQy2x4rlAteevlsVOUbDNXGctUFt9mXlFso%2FOIo0AiEAgLdW3bSv3wpFOz%2BlKYoy9nsMzi4%2F%2BIo5ciUBIH%2FeSaEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnVMcfFQ39em504SCrcAx0R5IN0UW32gaTKmXHHCO82GTtVuF2pu1KV1zg%2FP%2B4UeFq8VwOqWyd00zleL5JpcTuRQm9D8A8V7qkLOlPp61Sdh7ZYOCqRb6bvUjR53sG7TSZGst5tilLEVB4MgwVD0%2FTUjthrEvHunGXKPGwqn96TX4Ps%2BvvedYQFMAyY%2FY7JnS8HHtaCT6Y0S0UKGdb7bWV9A1w3B%2FVA1hCQtQbJD5fi4UkYRbIJiqIyj6CI0EuNG8Uzs0NubvUe%2BZwVf%2F0nBWGBOgjwOk3ITJ8twmXcpJBndOLBA2qslVmgHHLmYRMNaf0ukAbFMHbNaYec68O4kiXxR%2B8V%2F%2B7IwLJ0qQytYN2fuVhJwy4piMrpzrDTxmmelvwShwjDPReq7uMYS%2BCRHk%2BtedKXHRvNAjXpz182Ag64AqduzJmc7bS0hoQcxdV9wvfzYxmztnXU8WZjJedARdsnvhJq9JwlWMgBR4hK%2B9YU0RpdD9fGYpfmZlcD2%2FBYYvjy5tVfUGQX7cShH7DirTSGArnwKFyTpX64a0ne48J7LuO6nj7Imi52xCYayoiVh9z7ADPHx3jHYLxEKC%2BA0flrawxAKsX0fmRAptOCUIMVmRyFgjSmVMJB3sl9MYig8S%2FNWWxXgnbPmg%2BvMJWHntEGOqUButtJ5o7BcQVWmTywlV%2BI9%2FjtQp1CURGsoM%2FhVFUy2R5WLy%2Bp7Zh0mFFqZN4l5mdgKcO%2F45tNtNDW%2BKEg9jU%2B%2FenqXhqI3u5KxPkab9U7e%2BBR0Ah6oUf1wXJSnbmof8mj9uq1KgycwgHt8TEk7JhSxQBTU8sBfCuTLSObXYjC%2BDL1b2RdmDR%2FcOC3qBwPeiedxcb9QGD8vJDjEbLPtOwyp2Yv7J9u&X-Amz-Signature=5b235d9d9d2ed24e1d1231814ae418952046db1d95e5840a94e2e315a470ad60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU2HXRPG%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYDBQy2x4rlAteevlsVOUbDNXGctUFt9mXlFso%2FOIo0AiEAgLdW3bSv3wpFOz%2BlKYoy9nsMzi4%2F%2BIo5ciUBIH%2FeSaEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnVMcfFQ39em504SCrcAx0R5IN0UW32gaTKmXHHCO82GTtVuF2pu1KV1zg%2FP%2B4UeFq8VwOqWyd00zleL5JpcTuRQm9D8A8V7qkLOlPp61Sdh7ZYOCqRb6bvUjR53sG7TSZGst5tilLEVB4MgwVD0%2FTUjthrEvHunGXKPGwqn96TX4Ps%2BvvedYQFMAyY%2FY7JnS8HHtaCT6Y0S0UKGdb7bWV9A1w3B%2FVA1hCQtQbJD5fi4UkYRbIJiqIyj6CI0EuNG8Uzs0NubvUe%2BZwVf%2F0nBWGBOgjwOk3ITJ8twmXcpJBndOLBA2qslVmgHHLmYRMNaf0ukAbFMHbNaYec68O4kiXxR%2B8V%2F%2B7IwLJ0qQytYN2fuVhJwy4piMrpzrDTxmmelvwShwjDPReq7uMYS%2BCRHk%2BtedKXHRvNAjXpz182Ag64AqduzJmc7bS0hoQcxdV9wvfzYxmztnXU8WZjJedARdsnvhJq9JwlWMgBR4hK%2B9YU0RpdD9fGYpfmZlcD2%2FBYYvjy5tVfUGQX7cShH7DirTSGArnwKFyTpX64a0ne48J7LuO6nj7Imi52xCYayoiVh9z7ADPHx3jHYLxEKC%2BA0flrawxAKsX0fmRAptOCUIMVmRyFgjSmVMJB3sl9MYig8S%2FNWWxXgnbPmg%2BvMJWHntEGOqUButtJ5o7BcQVWmTywlV%2BI9%2FjtQp1CURGsoM%2FhVFUy2R5WLy%2Bp7Zh0mFFqZN4l5mdgKcO%2F45tNtNDW%2BKEg9jU%2B%2FenqXhqI3u5KxPkab9U7e%2BBR0Ah6oUf1wXJSnbmof8mj9uq1KgycwgHt8TEk7JhSxQBTU8sBfCuTLSObXYjC%2BDL1b2RdmDR%2FcOC3qBwPeiedxcb9QGD8vJDjEbLPtOwyp2Yv7J9u&X-Amz-Signature=38a32be2c8f49c32d43cf22448406746e1f43a66d29f199c115f30323f1bd6f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU2HXRPG%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYDBQy2x4rlAteevlsVOUbDNXGctUFt9mXlFso%2FOIo0AiEAgLdW3bSv3wpFOz%2BlKYoy9nsMzi4%2F%2BIo5ciUBIH%2FeSaEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnVMcfFQ39em504SCrcAx0R5IN0UW32gaTKmXHHCO82GTtVuF2pu1KV1zg%2FP%2B4UeFq8VwOqWyd00zleL5JpcTuRQm9D8A8V7qkLOlPp61Sdh7ZYOCqRb6bvUjR53sG7TSZGst5tilLEVB4MgwVD0%2FTUjthrEvHunGXKPGwqn96TX4Ps%2BvvedYQFMAyY%2FY7JnS8HHtaCT6Y0S0UKGdb7bWV9A1w3B%2FVA1hCQtQbJD5fi4UkYRbIJiqIyj6CI0EuNG8Uzs0NubvUe%2BZwVf%2F0nBWGBOgjwOk3ITJ8twmXcpJBndOLBA2qslVmgHHLmYRMNaf0ukAbFMHbNaYec68O4kiXxR%2B8V%2F%2B7IwLJ0qQytYN2fuVhJwy4piMrpzrDTxmmelvwShwjDPReq7uMYS%2BCRHk%2BtedKXHRvNAjXpz182Ag64AqduzJmc7bS0hoQcxdV9wvfzYxmztnXU8WZjJedARdsnvhJq9JwlWMgBR4hK%2B9YU0RpdD9fGYpfmZlcD2%2FBYYvjy5tVfUGQX7cShH7DirTSGArnwKFyTpX64a0ne48J7LuO6nj7Imi52xCYayoiVh9z7ADPHx3jHYLxEKC%2BA0flrawxAKsX0fmRAptOCUIMVmRyFgjSmVMJB3sl9MYig8S%2FNWWxXgnbPmg%2BvMJWHntEGOqUButtJ5o7BcQVWmTywlV%2BI9%2FjtQp1CURGsoM%2FhVFUy2R5WLy%2Bp7Zh0mFFqZN4l5mdgKcO%2F45tNtNDW%2BKEg9jU%2B%2FenqXhqI3u5KxPkab9U7e%2BBR0Ah6oUf1wXJSnbmof8mj9uq1KgycwgHt8TEk7JhSxQBTU8sBfCuTLSObXYjC%2BDL1b2RdmDR%2FcOC3qBwPeiedxcb9QGD8vJDjEbLPtOwyp2Yv7J9u&X-Amz-Signature=089562727be067de42d50dc659d91b32c3d7955a30752133eb55fac21a8c497f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU2HXRPG%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYDBQy2x4rlAteevlsVOUbDNXGctUFt9mXlFso%2FOIo0AiEAgLdW3bSv3wpFOz%2BlKYoy9nsMzi4%2F%2BIo5ciUBIH%2FeSaEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnVMcfFQ39em504SCrcAx0R5IN0UW32gaTKmXHHCO82GTtVuF2pu1KV1zg%2FP%2B4UeFq8VwOqWyd00zleL5JpcTuRQm9D8A8V7qkLOlPp61Sdh7ZYOCqRb6bvUjR53sG7TSZGst5tilLEVB4MgwVD0%2FTUjthrEvHunGXKPGwqn96TX4Ps%2BvvedYQFMAyY%2FY7JnS8HHtaCT6Y0S0UKGdb7bWV9A1w3B%2FVA1hCQtQbJD5fi4UkYRbIJiqIyj6CI0EuNG8Uzs0NubvUe%2BZwVf%2F0nBWGBOgjwOk3ITJ8twmXcpJBndOLBA2qslVmgHHLmYRMNaf0ukAbFMHbNaYec68O4kiXxR%2B8V%2F%2B7IwLJ0qQytYN2fuVhJwy4piMrpzrDTxmmelvwShwjDPReq7uMYS%2BCRHk%2BtedKXHRvNAjXpz182Ag64AqduzJmc7bS0hoQcxdV9wvfzYxmztnXU8WZjJedARdsnvhJq9JwlWMgBR4hK%2B9YU0RpdD9fGYpfmZlcD2%2FBYYvjy5tVfUGQX7cShH7DirTSGArnwKFyTpX64a0ne48J7LuO6nj7Imi52xCYayoiVh9z7ADPHx3jHYLxEKC%2BA0flrawxAKsX0fmRAptOCUIMVmRyFgjSmVMJB3sl9MYig8S%2FNWWxXgnbPmg%2BvMJWHntEGOqUButtJ5o7BcQVWmTywlV%2BI9%2FjtQp1CURGsoM%2FhVFUy2R5WLy%2Bp7Zh0mFFqZN4l5mdgKcO%2F45tNtNDW%2BKEg9jU%2B%2FenqXhqI3u5KxPkab9U7e%2BBR0Ah6oUf1wXJSnbmof8mj9uq1KgycwgHt8TEk7JhSxQBTU8sBfCuTLSObXYjC%2BDL1b2RdmDR%2FcOC3qBwPeiedxcb9QGD8vJDjEbLPtOwyp2Yv7J9u&X-Amz-Signature=f7756621aca0e99da3130290635ec40b1037cf36873d9792917539fd0ee24624&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU2HXRPG%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYDBQy2x4rlAteevlsVOUbDNXGctUFt9mXlFso%2FOIo0AiEAgLdW3bSv3wpFOz%2BlKYoy9nsMzi4%2F%2BIo5ciUBIH%2FeSaEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnVMcfFQ39em504SCrcAx0R5IN0UW32gaTKmXHHCO82GTtVuF2pu1KV1zg%2FP%2B4UeFq8VwOqWyd00zleL5JpcTuRQm9D8A8V7qkLOlPp61Sdh7ZYOCqRb6bvUjR53sG7TSZGst5tilLEVB4MgwVD0%2FTUjthrEvHunGXKPGwqn96TX4Ps%2BvvedYQFMAyY%2FY7JnS8HHtaCT6Y0S0UKGdb7bWV9A1w3B%2FVA1hCQtQbJD5fi4UkYRbIJiqIyj6CI0EuNG8Uzs0NubvUe%2BZwVf%2F0nBWGBOgjwOk3ITJ8twmXcpJBndOLBA2qslVmgHHLmYRMNaf0ukAbFMHbNaYec68O4kiXxR%2B8V%2F%2B7IwLJ0qQytYN2fuVhJwy4piMrpzrDTxmmelvwShwjDPReq7uMYS%2BCRHk%2BtedKXHRvNAjXpz182Ag64AqduzJmc7bS0hoQcxdV9wvfzYxmztnXU8WZjJedARdsnvhJq9JwlWMgBR4hK%2B9YU0RpdD9fGYpfmZlcD2%2FBYYvjy5tVfUGQX7cShH7DirTSGArnwKFyTpX64a0ne48J7LuO6nj7Imi52xCYayoiVh9z7ADPHx3jHYLxEKC%2BA0flrawxAKsX0fmRAptOCUIMVmRyFgjSmVMJB3sl9MYig8S%2FNWWxXgnbPmg%2BvMJWHntEGOqUButtJ5o7BcQVWmTywlV%2BI9%2FjtQp1CURGsoM%2FhVFUy2R5WLy%2Bp7Zh0mFFqZN4l5mdgKcO%2F45tNtNDW%2BKEg9jU%2B%2FenqXhqI3u5KxPkab9U7e%2BBR0Ah6oUf1wXJSnbmof8mj9uq1KgycwgHt8TEk7JhSxQBTU8sBfCuTLSObXYjC%2BDL1b2RdmDR%2FcOC3qBwPeiedxcb9QGD8vJDjEbLPtOwyp2Yv7J9u&X-Amz-Signature=a33c5becdf91e4428db09646faff8780a0835237db94ebbe8ea1a0238eeb2c9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


