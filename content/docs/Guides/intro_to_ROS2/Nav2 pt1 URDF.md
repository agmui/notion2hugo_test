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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HXFQSHW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBrQGrfPH5BaymEPj8yVIwLlt8229NWodzW324PW4knwIgXoDEhrOdd5sYKpWenGp8Qu9DoZgpXpyAA%2B9LMnAUMrEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFKXsc0WliZWJcWX7ircA81X48G2xn%2FdBAjYgKyPrenMRsv5DQpHM1QxWbzZgcF%2FTpWymuoFePKDw9CBJLpIIWG43A1zBl6%2FnsQ1U5d7iD3QIxLstugT%2BbqncSPxANNG%2BEOwSsBRGnkpycMxf4AjljJe6zk%2BTK4cZ3EZC0uaiQnJHP9RcVxIjIPvVovdaesScGvYbWvqAa1lo%2BXyzQK11NmlBjN75dPlZLQCqykZRH0HWOFJ%2BeRrafmUdGleKg%2BS90nr8ebaG55tMUQ84hwGNJFysvQvGMnkHXHLoO3EIwQuUz8d913%2Bae8esGXfEHfxM5Vy5mnZ%2BxqOy%2Bqr985IcpACg77BEXHs1SauBGg4uP2UBNH8wTCgOhJaXCRoQ%2F8%2BJaSkOs9XyFEp5jl65v7ph2J4OHCTYB5LSjlXt%2FcNak0cTxWEIiGEWquYUaS7q9gZWC9%2FMfKTsfJaFXXKi3y3T3w4ki7pOZPC3vt48U%2BsP8hWIaJHU%2FgKEU0Qkifu5zn0rKFPqJr2sz5Z3yTprEYcxMI4nGIIvml75ylRjoQBaOR0o1BUeZMIcDUrOCHHMtTojG1KOY1W19II91%2FNwNKg2gh9ykBWemuvAsplTl%2FlJXOSseCOvsD6jK3FwTeaE%2FYInH6UqE%2FiEGNoz4YgMIWu9sQGOqUBsS%2FDPoRb7ZP3kvhrs8PVrhArseSdRJENYouCSXQ1AG%2FclK93fkRORWKijixiL31LQM0uWmx7J7OlZb7IlgstBxSMA%2BiuxAuebNOSPEsgdpZD%2Fa6bJ3vqQhNPFz6pBeqLGLSlkGX%2BrJAu14KOlCfvNUOCsXAvogwk6KLg0DJnoNEPXx09HLSAcjJngGm1YGtS22t%2B%2By%2BisSKKXz7u3EMigtl2dfJG&X-Amz-Signature=3939fa4b3450ac587d90013b27e0abf67e007178cfbff1802db09facd9852faf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HXFQSHW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBrQGrfPH5BaymEPj8yVIwLlt8229NWodzW324PW4knwIgXoDEhrOdd5sYKpWenGp8Qu9DoZgpXpyAA%2B9LMnAUMrEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFKXsc0WliZWJcWX7ircA81X48G2xn%2FdBAjYgKyPrenMRsv5DQpHM1QxWbzZgcF%2FTpWymuoFePKDw9CBJLpIIWG43A1zBl6%2FnsQ1U5d7iD3QIxLstugT%2BbqncSPxANNG%2BEOwSsBRGnkpycMxf4AjljJe6zk%2BTK4cZ3EZC0uaiQnJHP9RcVxIjIPvVovdaesScGvYbWvqAa1lo%2BXyzQK11NmlBjN75dPlZLQCqykZRH0HWOFJ%2BeRrafmUdGleKg%2BS90nr8ebaG55tMUQ84hwGNJFysvQvGMnkHXHLoO3EIwQuUz8d913%2Bae8esGXfEHfxM5Vy5mnZ%2BxqOy%2Bqr985IcpACg77BEXHs1SauBGg4uP2UBNH8wTCgOhJaXCRoQ%2F8%2BJaSkOs9XyFEp5jl65v7ph2J4OHCTYB5LSjlXt%2FcNak0cTxWEIiGEWquYUaS7q9gZWC9%2FMfKTsfJaFXXKi3y3T3w4ki7pOZPC3vt48U%2BsP8hWIaJHU%2FgKEU0Qkifu5zn0rKFPqJr2sz5Z3yTprEYcxMI4nGIIvml75ylRjoQBaOR0o1BUeZMIcDUrOCHHMtTojG1KOY1W19II91%2FNwNKg2gh9ykBWemuvAsplTl%2FlJXOSseCOvsD6jK3FwTeaE%2FYInH6UqE%2FiEGNoz4YgMIWu9sQGOqUBsS%2FDPoRb7ZP3kvhrs8PVrhArseSdRJENYouCSXQ1AG%2FclK93fkRORWKijixiL31LQM0uWmx7J7OlZb7IlgstBxSMA%2BiuxAuebNOSPEsgdpZD%2Fa6bJ3vqQhNPFz6pBeqLGLSlkGX%2BrJAu14KOlCfvNUOCsXAvogwk6KLg0DJnoNEPXx09HLSAcjJngGm1YGtS22t%2B%2By%2BisSKKXz7u3EMigtl2dfJG&X-Amz-Signature=680e51227c30faba402d4a751986f372945f1108bf5e29d554a824019b2051d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HXFQSHW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBrQGrfPH5BaymEPj8yVIwLlt8229NWodzW324PW4knwIgXoDEhrOdd5sYKpWenGp8Qu9DoZgpXpyAA%2B9LMnAUMrEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFKXsc0WliZWJcWX7ircA81X48G2xn%2FdBAjYgKyPrenMRsv5DQpHM1QxWbzZgcF%2FTpWymuoFePKDw9CBJLpIIWG43A1zBl6%2FnsQ1U5d7iD3QIxLstugT%2BbqncSPxANNG%2BEOwSsBRGnkpycMxf4AjljJe6zk%2BTK4cZ3EZC0uaiQnJHP9RcVxIjIPvVovdaesScGvYbWvqAa1lo%2BXyzQK11NmlBjN75dPlZLQCqykZRH0HWOFJ%2BeRrafmUdGleKg%2BS90nr8ebaG55tMUQ84hwGNJFysvQvGMnkHXHLoO3EIwQuUz8d913%2Bae8esGXfEHfxM5Vy5mnZ%2BxqOy%2Bqr985IcpACg77BEXHs1SauBGg4uP2UBNH8wTCgOhJaXCRoQ%2F8%2BJaSkOs9XyFEp5jl65v7ph2J4OHCTYB5LSjlXt%2FcNak0cTxWEIiGEWquYUaS7q9gZWC9%2FMfKTsfJaFXXKi3y3T3w4ki7pOZPC3vt48U%2BsP8hWIaJHU%2FgKEU0Qkifu5zn0rKFPqJr2sz5Z3yTprEYcxMI4nGIIvml75ylRjoQBaOR0o1BUeZMIcDUrOCHHMtTojG1KOY1W19II91%2FNwNKg2gh9ykBWemuvAsplTl%2FlJXOSseCOvsD6jK3FwTeaE%2FYInH6UqE%2FiEGNoz4YgMIWu9sQGOqUBsS%2FDPoRb7ZP3kvhrs8PVrhArseSdRJENYouCSXQ1AG%2FclK93fkRORWKijixiL31LQM0uWmx7J7OlZb7IlgstBxSMA%2BiuxAuebNOSPEsgdpZD%2Fa6bJ3vqQhNPFz6pBeqLGLSlkGX%2BrJAu14KOlCfvNUOCsXAvogwk6KLg0DJnoNEPXx09HLSAcjJngGm1YGtS22t%2B%2By%2BisSKKXz7u3EMigtl2dfJG&X-Amz-Signature=3f7dc95048a735aec8dfd72630b4242aff695df75413298b4ef32dc5eadb205d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HXFQSHW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBrQGrfPH5BaymEPj8yVIwLlt8229NWodzW324PW4knwIgXoDEhrOdd5sYKpWenGp8Qu9DoZgpXpyAA%2B9LMnAUMrEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFKXsc0WliZWJcWX7ircA81X48G2xn%2FdBAjYgKyPrenMRsv5DQpHM1QxWbzZgcF%2FTpWymuoFePKDw9CBJLpIIWG43A1zBl6%2FnsQ1U5d7iD3QIxLstugT%2BbqncSPxANNG%2BEOwSsBRGnkpycMxf4AjljJe6zk%2BTK4cZ3EZC0uaiQnJHP9RcVxIjIPvVovdaesScGvYbWvqAa1lo%2BXyzQK11NmlBjN75dPlZLQCqykZRH0HWOFJ%2BeRrafmUdGleKg%2BS90nr8ebaG55tMUQ84hwGNJFysvQvGMnkHXHLoO3EIwQuUz8d913%2Bae8esGXfEHfxM5Vy5mnZ%2BxqOy%2Bqr985IcpACg77BEXHs1SauBGg4uP2UBNH8wTCgOhJaXCRoQ%2F8%2BJaSkOs9XyFEp5jl65v7ph2J4OHCTYB5LSjlXt%2FcNak0cTxWEIiGEWquYUaS7q9gZWC9%2FMfKTsfJaFXXKi3y3T3w4ki7pOZPC3vt48U%2BsP8hWIaJHU%2FgKEU0Qkifu5zn0rKFPqJr2sz5Z3yTprEYcxMI4nGIIvml75ylRjoQBaOR0o1BUeZMIcDUrOCHHMtTojG1KOY1W19II91%2FNwNKg2gh9ykBWemuvAsplTl%2FlJXOSseCOvsD6jK3FwTeaE%2FYInH6UqE%2FiEGNoz4YgMIWu9sQGOqUBsS%2FDPoRb7ZP3kvhrs8PVrhArseSdRJENYouCSXQ1AG%2FclK93fkRORWKijixiL31LQM0uWmx7J7OlZb7IlgstBxSMA%2BiuxAuebNOSPEsgdpZD%2Fa6bJ3vqQhNPFz6pBeqLGLSlkGX%2BrJAu14KOlCfvNUOCsXAvogwk6KLg0DJnoNEPXx09HLSAcjJngGm1YGtS22t%2B%2By%2BisSKKXz7u3EMigtl2dfJG&X-Amz-Signature=ef60f368a7ce4ab96511be9fc4c9b8484cee5a20d24ec4a30f04f0970bc3b9d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HXFQSHW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBrQGrfPH5BaymEPj8yVIwLlt8229NWodzW324PW4knwIgXoDEhrOdd5sYKpWenGp8Qu9DoZgpXpyAA%2B9LMnAUMrEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFKXsc0WliZWJcWX7ircA81X48G2xn%2FdBAjYgKyPrenMRsv5DQpHM1QxWbzZgcF%2FTpWymuoFePKDw9CBJLpIIWG43A1zBl6%2FnsQ1U5d7iD3QIxLstugT%2BbqncSPxANNG%2BEOwSsBRGnkpycMxf4AjljJe6zk%2BTK4cZ3EZC0uaiQnJHP9RcVxIjIPvVovdaesScGvYbWvqAa1lo%2BXyzQK11NmlBjN75dPlZLQCqykZRH0HWOFJ%2BeRrafmUdGleKg%2BS90nr8ebaG55tMUQ84hwGNJFysvQvGMnkHXHLoO3EIwQuUz8d913%2Bae8esGXfEHfxM5Vy5mnZ%2BxqOy%2Bqr985IcpACg77BEXHs1SauBGg4uP2UBNH8wTCgOhJaXCRoQ%2F8%2BJaSkOs9XyFEp5jl65v7ph2J4OHCTYB5LSjlXt%2FcNak0cTxWEIiGEWquYUaS7q9gZWC9%2FMfKTsfJaFXXKi3y3T3w4ki7pOZPC3vt48U%2BsP8hWIaJHU%2FgKEU0Qkifu5zn0rKFPqJr2sz5Z3yTprEYcxMI4nGIIvml75ylRjoQBaOR0o1BUeZMIcDUrOCHHMtTojG1KOY1W19II91%2FNwNKg2gh9ykBWemuvAsplTl%2FlJXOSseCOvsD6jK3FwTeaE%2FYInH6UqE%2FiEGNoz4YgMIWu9sQGOqUBsS%2FDPoRb7ZP3kvhrs8PVrhArseSdRJENYouCSXQ1AG%2FclK93fkRORWKijixiL31LQM0uWmx7J7OlZb7IlgstBxSMA%2BiuxAuebNOSPEsgdpZD%2Fa6bJ3vqQhNPFz6pBeqLGLSlkGX%2BrJAu14KOlCfvNUOCsXAvogwk6KLg0DJnoNEPXx09HLSAcjJngGm1YGtS22t%2B%2By%2BisSKKXz7u3EMigtl2dfJG&X-Amz-Signature=793d7d04939cd2e96112e535507fdcbec3bccda30ec919c4d355d1cb3ab4bd0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HXFQSHW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBrQGrfPH5BaymEPj8yVIwLlt8229NWodzW324PW4knwIgXoDEhrOdd5sYKpWenGp8Qu9DoZgpXpyAA%2B9LMnAUMrEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFKXsc0WliZWJcWX7ircA81X48G2xn%2FdBAjYgKyPrenMRsv5DQpHM1QxWbzZgcF%2FTpWymuoFePKDw9CBJLpIIWG43A1zBl6%2FnsQ1U5d7iD3QIxLstugT%2BbqncSPxANNG%2BEOwSsBRGnkpycMxf4AjljJe6zk%2BTK4cZ3EZC0uaiQnJHP9RcVxIjIPvVovdaesScGvYbWvqAa1lo%2BXyzQK11NmlBjN75dPlZLQCqykZRH0HWOFJ%2BeRrafmUdGleKg%2BS90nr8ebaG55tMUQ84hwGNJFysvQvGMnkHXHLoO3EIwQuUz8d913%2Bae8esGXfEHfxM5Vy5mnZ%2BxqOy%2Bqr985IcpACg77BEXHs1SauBGg4uP2UBNH8wTCgOhJaXCRoQ%2F8%2BJaSkOs9XyFEp5jl65v7ph2J4OHCTYB5LSjlXt%2FcNak0cTxWEIiGEWquYUaS7q9gZWC9%2FMfKTsfJaFXXKi3y3T3w4ki7pOZPC3vt48U%2BsP8hWIaJHU%2FgKEU0Qkifu5zn0rKFPqJr2sz5Z3yTprEYcxMI4nGIIvml75ylRjoQBaOR0o1BUeZMIcDUrOCHHMtTojG1KOY1W19II91%2FNwNKg2gh9ykBWemuvAsplTl%2FlJXOSseCOvsD6jK3FwTeaE%2FYInH6UqE%2FiEGNoz4YgMIWu9sQGOqUBsS%2FDPoRb7ZP3kvhrs8PVrhArseSdRJENYouCSXQ1AG%2FclK93fkRORWKijixiL31LQM0uWmx7J7OlZb7IlgstBxSMA%2BiuxAuebNOSPEsgdpZD%2Fa6bJ3vqQhNPFz6pBeqLGLSlkGX%2BrJAu14KOlCfvNUOCsXAvogwk6KLg0DJnoNEPXx09HLSAcjJngGm1YGtS22t%2B%2By%2BisSKKXz7u3EMigtl2dfJG&X-Amz-Signature=91d885861d53eea771e3a6d73cdd293a54c6c226f2290ab988af083371a0eb2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HXFQSHW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBrQGrfPH5BaymEPj8yVIwLlt8229NWodzW324PW4knwIgXoDEhrOdd5sYKpWenGp8Qu9DoZgpXpyAA%2B9LMnAUMrEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFKXsc0WliZWJcWX7ircA81X48G2xn%2FdBAjYgKyPrenMRsv5DQpHM1QxWbzZgcF%2FTpWymuoFePKDw9CBJLpIIWG43A1zBl6%2FnsQ1U5d7iD3QIxLstugT%2BbqncSPxANNG%2BEOwSsBRGnkpycMxf4AjljJe6zk%2BTK4cZ3EZC0uaiQnJHP9RcVxIjIPvVovdaesScGvYbWvqAa1lo%2BXyzQK11NmlBjN75dPlZLQCqykZRH0HWOFJ%2BeRrafmUdGleKg%2BS90nr8ebaG55tMUQ84hwGNJFysvQvGMnkHXHLoO3EIwQuUz8d913%2Bae8esGXfEHfxM5Vy5mnZ%2BxqOy%2Bqr985IcpACg77BEXHs1SauBGg4uP2UBNH8wTCgOhJaXCRoQ%2F8%2BJaSkOs9XyFEp5jl65v7ph2J4OHCTYB5LSjlXt%2FcNak0cTxWEIiGEWquYUaS7q9gZWC9%2FMfKTsfJaFXXKi3y3T3w4ki7pOZPC3vt48U%2BsP8hWIaJHU%2FgKEU0Qkifu5zn0rKFPqJr2sz5Z3yTprEYcxMI4nGIIvml75ylRjoQBaOR0o1BUeZMIcDUrOCHHMtTojG1KOY1W19II91%2FNwNKg2gh9ykBWemuvAsplTl%2FlJXOSseCOvsD6jK3FwTeaE%2FYInH6UqE%2FiEGNoz4YgMIWu9sQGOqUBsS%2FDPoRb7ZP3kvhrs8PVrhArseSdRJENYouCSXQ1AG%2FclK93fkRORWKijixiL31LQM0uWmx7J7OlZb7IlgstBxSMA%2BiuxAuebNOSPEsgdpZD%2Fa6bJ3vqQhNPFz6pBeqLGLSlkGX%2BrJAu14KOlCfvNUOCsXAvogwk6KLg0DJnoNEPXx09HLSAcjJngGm1YGtS22t%2B%2By%2BisSKKXz7u3EMigtl2dfJG&X-Amz-Signature=ab334c6a94f15babd50f339791800f41cac27dae4c6e0ba9f49d4c22896e25ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HXFQSHW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBrQGrfPH5BaymEPj8yVIwLlt8229NWodzW324PW4knwIgXoDEhrOdd5sYKpWenGp8Qu9DoZgpXpyAA%2B9LMnAUMrEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFKXsc0WliZWJcWX7ircA81X48G2xn%2FdBAjYgKyPrenMRsv5DQpHM1QxWbzZgcF%2FTpWymuoFePKDw9CBJLpIIWG43A1zBl6%2FnsQ1U5d7iD3QIxLstugT%2BbqncSPxANNG%2BEOwSsBRGnkpycMxf4AjljJe6zk%2BTK4cZ3EZC0uaiQnJHP9RcVxIjIPvVovdaesScGvYbWvqAa1lo%2BXyzQK11NmlBjN75dPlZLQCqykZRH0HWOFJ%2BeRrafmUdGleKg%2BS90nr8ebaG55tMUQ84hwGNJFysvQvGMnkHXHLoO3EIwQuUz8d913%2Bae8esGXfEHfxM5Vy5mnZ%2BxqOy%2Bqr985IcpACg77BEXHs1SauBGg4uP2UBNH8wTCgOhJaXCRoQ%2F8%2BJaSkOs9XyFEp5jl65v7ph2J4OHCTYB5LSjlXt%2FcNak0cTxWEIiGEWquYUaS7q9gZWC9%2FMfKTsfJaFXXKi3y3T3w4ki7pOZPC3vt48U%2BsP8hWIaJHU%2FgKEU0Qkifu5zn0rKFPqJr2sz5Z3yTprEYcxMI4nGIIvml75ylRjoQBaOR0o1BUeZMIcDUrOCHHMtTojG1KOY1W19II91%2FNwNKg2gh9ykBWemuvAsplTl%2FlJXOSseCOvsD6jK3FwTeaE%2FYInH6UqE%2FiEGNoz4YgMIWu9sQGOqUBsS%2FDPoRb7ZP3kvhrs8PVrhArseSdRJENYouCSXQ1AG%2FclK93fkRORWKijixiL31LQM0uWmx7J7OlZb7IlgstBxSMA%2BiuxAuebNOSPEsgdpZD%2Fa6bJ3vqQhNPFz6pBeqLGLSlkGX%2BrJAu14KOlCfvNUOCsXAvogwk6KLg0DJnoNEPXx09HLSAcjJngGm1YGtS22t%2B%2By%2BisSKKXz7u3EMigtl2dfJG&X-Amz-Signature=62d449c7f98960561040fa5af160552d6ef0ef229dcb00c8359a97884660b17f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HXFQSHW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBrQGrfPH5BaymEPj8yVIwLlt8229NWodzW324PW4knwIgXoDEhrOdd5sYKpWenGp8Qu9DoZgpXpyAA%2B9LMnAUMrEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFKXsc0WliZWJcWX7ircA81X48G2xn%2FdBAjYgKyPrenMRsv5DQpHM1QxWbzZgcF%2FTpWymuoFePKDw9CBJLpIIWG43A1zBl6%2FnsQ1U5d7iD3QIxLstugT%2BbqncSPxANNG%2BEOwSsBRGnkpycMxf4AjljJe6zk%2BTK4cZ3EZC0uaiQnJHP9RcVxIjIPvVovdaesScGvYbWvqAa1lo%2BXyzQK11NmlBjN75dPlZLQCqykZRH0HWOFJ%2BeRrafmUdGleKg%2BS90nr8ebaG55tMUQ84hwGNJFysvQvGMnkHXHLoO3EIwQuUz8d913%2Bae8esGXfEHfxM5Vy5mnZ%2BxqOy%2Bqr985IcpACg77BEXHs1SauBGg4uP2UBNH8wTCgOhJaXCRoQ%2F8%2BJaSkOs9XyFEp5jl65v7ph2J4OHCTYB5LSjlXt%2FcNak0cTxWEIiGEWquYUaS7q9gZWC9%2FMfKTsfJaFXXKi3y3T3w4ki7pOZPC3vt48U%2BsP8hWIaJHU%2FgKEU0Qkifu5zn0rKFPqJr2sz5Z3yTprEYcxMI4nGIIvml75ylRjoQBaOR0o1BUeZMIcDUrOCHHMtTojG1KOY1W19II91%2FNwNKg2gh9ykBWemuvAsplTl%2FlJXOSseCOvsD6jK3FwTeaE%2FYInH6UqE%2FiEGNoz4YgMIWu9sQGOqUBsS%2FDPoRb7ZP3kvhrs8PVrhArseSdRJENYouCSXQ1AG%2FclK93fkRORWKijixiL31LQM0uWmx7J7OlZb7IlgstBxSMA%2BiuxAuebNOSPEsgdpZD%2Fa6bJ3vqQhNPFz6pBeqLGLSlkGX%2BrJAu14KOlCfvNUOCsXAvogwk6KLg0DJnoNEPXx09HLSAcjJngGm1YGtS22t%2B%2By%2BisSKKXz7u3EMigtl2dfJG&X-Amz-Signature=b277d667f82f29c068fa8f3e9cc693d21f43d105c85456326075c5850bafec2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HXFQSHW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBrQGrfPH5BaymEPj8yVIwLlt8229NWodzW324PW4knwIgXoDEhrOdd5sYKpWenGp8Qu9DoZgpXpyAA%2B9LMnAUMrEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFKXsc0WliZWJcWX7ircA81X48G2xn%2FdBAjYgKyPrenMRsv5DQpHM1QxWbzZgcF%2FTpWymuoFePKDw9CBJLpIIWG43A1zBl6%2FnsQ1U5d7iD3QIxLstugT%2BbqncSPxANNG%2BEOwSsBRGnkpycMxf4AjljJe6zk%2BTK4cZ3EZC0uaiQnJHP9RcVxIjIPvVovdaesScGvYbWvqAa1lo%2BXyzQK11NmlBjN75dPlZLQCqykZRH0HWOFJ%2BeRrafmUdGleKg%2BS90nr8ebaG55tMUQ84hwGNJFysvQvGMnkHXHLoO3EIwQuUz8d913%2Bae8esGXfEHfxM5Vy5mnZ%2BxqOy%2Bqr985IcpACg77BEXHs1SauBGg4uP2UBNH8wTCgOhJaXCRoQ%2F8%2BJaSkOs9XyFEp5jl65v7ph2J4OHCTYB5LSjlXt%2FcNak0cTxWEIiGEWquYUaS7q9gZWC9%2FMfKTsfJaFXXKi3y3T3w4ki7pOZPC3vt48U%2BsP8hWIaJHU%2FgKEU0Qkifu5zn0rKFPqJr2sz5Z3yTprEYcxMI4nGIIvml75ylRjoQBaOR0o1BUeZMIcDUrOCHHMtTojG1KOY1W19II91%2FNwNKg2gh9ykBWemuvAsplTl%2FlJXOSseCOvsD6jK3FwTeaE%2FYInH6UqE%2FiEGNoz4YgMIWu9sQGOqUBsS%2FDPoRb7ZP3kvhrs8PVrhArseSdRJENYouCSXQ1AG%2FclK93fkRORWKijixiL31LQM0uWmx7J7OlZb7IlgstBxSMA%2BiuxAuebNOSPEsgdpZD%2Fa6bJ3vqQhNPFz6pBeqLGLSlkGX%2BrJAu14KOlCfvNUOCsXAvogwk6KLg0DJnoNEPXx09HLSAcjJngGm1YGtS22t%2B%2By%2BisSKKXz7u3EMigtl2dfJG&X-Amz-Signature=ae8a53f373c466e47c61911a4b22b46387424ae72c0559eb370dc287b4536e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GD3WJIL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbuOLgh4Ag6IrXyOb1z%2FdldttIWm8BMBftScbmRWvPPgIhAPjhkd6fjI12QfrEZegsaseMXgai9DHSxsWeJoOsDEOnKv8DCEEQABoMNjM3NDIzMTgzODA1IgzCl8JlCI30Ksl%2BVN0q3APoNJIwhofL2v3BX1k8Yz4fPFXlmU%2BHygyn5yDfwRVj%2Bt2vLpU9%2BQ5f4HQJ5irQlFAhc8j21tYsdzIRDTxj0n6c0vyH%2BWXsLmOJ%2Bk1cNrD6V4qAEE%2BjGAczrmeLuzs%2FMlL5P65PYl5GrO2wEM5XNZkVfugc5hXIz47FKhfduMholusvyn7aBlSlB%2Fcm%2BbXAr5C6gmiS4UFrX7PO34Qzoab0cKVmGwnTEUwK07IiZKyVS8Cw0yr1NV7n8MOFXa83GgNb8Oo4ttCEJ1YiKFWOKrSIo2nWTgRwZ5RIsJJ9ot1UoCIUhPL5A%2BRfxAvzNuYa11TZUD1LGYyf0qKx2LxS0GF%2FfT1MwHUgDVLo1StPEJOqS1dGo0k3exItEAQ1ofVsxVHPwkMAo3z5Tvof0VXFd0y78B5v%2BUkBxJkGJrNsMm5Pyn9NdmRbyXCbVJw0N%2FwWyXSeWxh3iF11b%2BAeqcHUmcT08C2snk4Wt7h%2FJxBg5oEkwyw%2BYJfKF6wiPj9wkjByyp3WsoBfrtdPCYXvpcWOKQ7Bu1fzuFDqc1c6D4a5AMx%2FNVqfz6Qh4AQQL7Z1MMZXpChPATcHkXN7Cmm%2FojF1oybsCcYmMGfoW0IzImHSFyEQ9PG%2FDrp8%2FUiBCZFuvTD2r%2FbEBjqkAQa%2Fqr%2BpKJJd7gRE6V4JIiIPXGGey%2Fx7eRg%2Bf1nZt60Xi%2FOE8CHCebquJT4oTTvQcQN8LryXW9l3ZFZH74jTXan2Qu4fQrGrZ%2FoSH64BhVqE38heWEs4U0Fn0jpT7AsLYLquTDNIqu8oqNjasPNG4wwhI7I440q%2BVlx4pEk0TBixQLUaT3AisNGZbRCSd4fKVvvKS9SyoAmSAwKReLuS10sNzjMx&X-Amz-Signature=d42bc0d18f0989ced6cee55ac3296580d6a1b48978017a0c6506619a0bf95502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CAMC2JH%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ1PGDR1UTk5t0mqt2ko%2Fomfx1FRyeFEpDMukGHUQ81AIhAP1Xpmi418W2jgXCBgGGVFiGJB9FEX1ydmFcGdmZYewkKv8DCEEQABoMNjM3NDIzMTgzODA1IgyGeBkjNWd6BIKMVMgq3ANcgBoGTveDhcO9fZ1Ogx5KRPXwmEx4HJe9F9RQWv1zxLeKJ0JzDNERfCH67IMaukxw8L9%2Ff57KQGFLIieWp2dRmtmBMCGa90WbqtfgmwzW1Xq56HTyw%2FhN5xpC6o3hZv30UArSaSyzeN9iLSvlmvNQunEbgS6Fba8dypnNPw2AeDWBYWfFrf8viAo7lkC%2Blba6T8uTDJDD%2BVIawpLmZJrabXPAHkqZws3xlgBAei69RlkHCqydrFkuWHP58OY1T1N5pptpFBedCs0tuXx%2B4rp93DuvnSeYXK1CEFgI3UqknME4aLkZspN73EdNSa8YH0wMJfwLPT5pOCaMIgrtyhZwDR1%2BpfMW9gJ5F6ViWrV4i%2FGyvgJwChwG7JFkDI1IPlPqjJkJZRHoz3rOReI4fmg40nv2jVk8GUzK4r5rR022jiyfO8BKhV5xQeqcdfakwofD%2FokaUB3gAbXdx%2B%2FhOnl%2BM2q1QMOT%2FWhYX8fqnlrOWz8MTBldUI8Ezi2ojkUENQip8EkTel93pGRhK5HolQu01%2BCjFY4WBb1zRxjbpYWD2zCIS%2Frh%2Fv8kvSC0ZFMXHqDHnxJD9xkN%2BC3O%2B0fSiX6LynXUt0guEYv1T%2Fn%2FK%2Fvv%2FWdsgkVHTKsJsYw8ATCFrvbEBjqkARPVkm3URzo9CfbhHcNWYXzYxQA6wVCDNgGTkMJQ1oRmDYAe6lqfc5oxZEgLBYmQu01eZ2PHyAyAWSr9o%2FqR3%2FNNCrtW0jfnsUJxLS8o5%2FTpsuj775GOPagxBnMkV4xcA%2B7zRYHd9AIBZ8VSOtA7A%2B61ik4cGISe7RZJYatRNlRivz%2Fs9GlzfUA%2BE7p0acICRERUjB6nmsWxEkhw4yAOPwlQicj%2B&X-Amz-Signature=ac1324b31073f20c994e99668bb39b44794a9754cdc6bca2d28b0dd91a01bd6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KOXASZX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Hg5KoVXFHk%2FwnlLn5SpWvIyHY8eIePfEDiakaL993gIgdPQBvws%2BDEj%2FUN8sq87jJk5JNCD7UROWjFyD41O2INcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDM4B1plWZyO%2BYj9XSyrcA0k%2BvnSlvB2tdUGFD8%2F%2BJP5u3lBITLBHBVWVgIX4LCt9DagsGBTlKjnlAJ22f6tfwnjHiuqbdA2StXJuUIPmrDLP%2FYW25UI12NWTJEBqGUndzd3z7qQxFM9fVbVf0cRcEPiOe8EevlpFg2NThTlnyPm2EsxiQRC%2FR49KU%2FC%2FEWcQZf6Enyflyqjp%2Bu405%2B5K6fKnpAC9%2FKEEaY6swIXKb7ig9irYhISx%2FrZ8NEOYvCXoB737bMzzXX2HOmimwe%2Bcb%2FPY0h9jCEGA2sX97XiIqnjphzofr4OLRTsHSD%2BcvNsH2lhiHbLbxH2Dx7yZCl8R04%2BACf8YGFLn4Qup7GwSouPTbYHMpSHvSy%2BH7QLo%2FfIk6LzUmOCLAsrj9MHRqEPvqg3vPjtJXBU27ZS%2FTyYVISXR3EQLaPLud6g030FSTxWWRFlKPzM3xDjZJ0%2Bz2PcgW2tknOPw5QdQQ91HBLYAkmfa9vvvQncSBoQPKquAQaIrP5uLQKfY1gP6ziS9NehlfBCczVBJc49mBg1gkkJK3g41d31nrpEFuz0CLiAjDZViT0cKMypQeGmLgQPnc0MthT1C3ew1y43kSPiy0zS%2FZBMyG4LrlWS1dQH1jpPkWRkBfcjIJIyoR3ywvbPkMLKv9sQGOqUBfIEYle8KGRvqPofI3AtmttrgUfV565szp65cqWhb0u%2BX5Ty4JSuYUw1uTcoEKVBIEZzJUhsIYuCdGSRrPt4YsJyHXf4RGua2YzNqLfEgl%2Bx6H2wpU1%2FXwzAyHLYo9vhhxbZpUt%2F%2F3v3KcGNtEWWK0AaqvRbZ2kG9yMagEcew3yyXgEYZR8oc3HelSKujJK7Q1WQQl8q0ow1X0OYCKKMkbPAiu%2Bnt&X-Amz-Signature=326f2d95fe11592b78a4b27ce6f4a6e6907cb02d03c0fdfbd30d014d83c75848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HXFQSHW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBrQGrfPH5BaymEPj8yVIwLlt8229NWodzW324PW4knwIgXoDEhrOdd5sYKpWenGp8Qu9DoZgpXpyAA%2B9LMnAUMrEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFKXsc0WliZWJcWX7ircA81X48G2xn%2FdBAjYgKyPrenMRsv5DQpHM1QxWbzZgcF%2FTpWymuoFePKDw9CBJLpIIWG43A1zBl6%2FnsQ1U5d7iD3QIxLstugT%2BbqncSPxANNG%2BEOwSsBRGnkpycMxf4AjljJe6zk%2BTK4cZ3EZC0uaiQnJHP9RcVxIjIPvVovdaesScGvYbWvqAa1lo%2BXyzQK11NmlBjN75dPlZLQCqykZRH0HWOFJ%2BeRrafmUdGleKg%2BS90nr8ebaG55tMUQ84hwGNJFysvQvGMnkHXHLoO3EIwQuUz8d913%2Bae8esGXfEHfxM5Vy5mnZ%2BxqOy%2Bqr985IcpACg77BEXHs1SauBGg4uP2UBNH8wTCgOhJaXCRoQ%2F8%2BJaSkOs9XyFEp5jl65v7ph2J4OHCTYB5LSjlXt%2FcNak0cTxWEIiGEWquYUaS7q9gZWC9%2FMfKTsfJaFXXKi3y3T3w4ki7pOZPC3vt48U%2BsP8hWIaJHU%2FgKEU0Qkifu5zn0rKFPqJr2sz5Z3yTprEYcxMI4nGIIvml75ylRjoQBaOR0o1BUeZMIcDUrOCHHMtTojG1KOY1W19II91%2FNwNKg2gh9ykBWemuvAsplTl%2FlJXOSseCOvsD6jK3FwTeaE%2FYInH6UqE%2FiEGNoz4YgMIWu9sQGOqUBsS%2FDPoRb7ZP3kvhrs8PVrhArseSdRJENYouCSXQ1AG%2FclK93fkRORWKijixiL31LQM0uWmx7J7OlZb7IlgstBxSMA%2BiuxAuebNOSPEsgdpZD%2Fa6bJ3vqQhNPFz6pBeqLGLSlkGX%2BrJAu14KOlCfvNUOCsXAvogwk6KLg0DJnoNEPXx09HLSAcjJngGm1YGtS22t%2B%2By%2BisSKKXz7u3EMigtl2dfJG&X-Amz-Signature=7f18c172f931a97cd1a8319778ece8f0911e61faece86a80f4ca5c4a341bc65e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RORLWS3U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLPpxCxhWQoZ1kbsOWE4uuXo%2FTYApDVr%2FeKc8tGZDBEAIgKQSexLX9lL5xVNmYMuuDTd%2FnpQL%2BLfgujIL%2FElq%2FJkUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDE6kA73PaIPQuWe5gyrcA7bbF8z8Sw1vIFzXjTwXM2nXCmfTDIKgeOGym3qZxhHkj1kfZkzGSUR4zW1Tm13rBBqvoHcj69jyMkGAk45%2B0ItUBe%2FubbSPby8p8kOThxsQMZsDWLe1amM%2BEAgE6Y7ek9Iih6GOrWY3HrZkl0C6TIEf7F8KVokQiQdXEs5d7ToVjK7yIS%2FFqc20eDtrDPmdtBbB2DaRRFFPLvcwlWR1n8hVplP8uqD1F6WE0mmTcS5P6oMmTG9GYTbyqvoDEV%2FNoaO1N2slb3PdA4tk8TsA22E3Rb2Q0J6XRMQYSItUz9j43YEUbSqZf8qUvuwZYrmeYVYZarb6MwqonVl8ZL4T%2Fj%2Fx%2BAt6mZMwl6ZbAFrSOWIoZ4D1oddqefDFRVysaeFj9NOLliHJFmF466JO2mWUfmpwtPvn7qGlggKY6d9Uqxf2XGhuFNJJli%2BwwpwamMkvDuHfmp5HmzIfX7gC%2FqM3E0MZ6tZPD48TrmdezRss9P3bizY1FWVH1O%2FIaoo6bvKD%2F1YhVgXlohbyOr9IgYnm4epXzQVXEXCBYh5JQnEOCYWQ3Mar0ELnJPWeC6UPbrn2mSg7o%2B%2B0BvVsnJ%2F2jasVGTRGJNEaXMh1XNW7yfwHfAvQFo07Z6Y1TEuqMOFIMNiv9sQGOqUBRgYwC2osnv1AlyEdDvGM1na0CRQPbqBNPhITLt%2BvoAkF0P8ghmlZ3cKYbWNMDmZnllPUWx5iLTK4zF1EWiyt8GnfSyWjahlTg8%2F3etwdvtVvCxFyjw8bbc4swjsvoegpINE23z5Bzr1kq%2FSaC%2BrnFw5pZl0XJIqTmRQsTadCbx0p6kFPo692c4UqzQwuoQ2yJyZxDp2J2fxrvu9Igq8f81xQ%2BPgG&X-Amz-Signature=92c73598f176eac4c25a3e6c6a1248eeeba8aebb0a2d3ff593fe43e4367b63c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HXFQSHW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBrQGrfPH5BaymEPj8yVIwLlt8229NWodzW324PW4knwIgXoDEhrOdd5sYKpWenGp8Qu9DoZgpXpyAA%2B9LMnAUMrEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFKXsc0WliZWJcWX7ircA81X48G2xn%2FdBAjYgKyPrenMRsv5DQpHM1QxWbzZgcF%2FTpWymuoFePKDw9CBJLpIIWG43A1zBl6%2FnsQ1U5d7iD3QIxLstugT%2BbqncSPxANNG%2BEOwSsBRGnkpycMxf4AjljJe6zk%2BTK4cZ3EZC0uaiQnJHP9RcVxIjIPvVovdaesScGvYbWvqAa1lo%2BXyzQK11NmlBjN75dPlZLQCqykZRH0HWOFJ%2BeRrafmUdGleKg%2BS90nr8ebaG55tMUQ84hwGNJFysvQvGMnkHXHLoO3EIwQuUz8d913%2Bae8esGXfEHfxM5Vy5mnZ%2BxqOy%2Bqr985IcpACg77BEXHs1SauBGg4uP2UBNH8wTCgOhJaXCRoQ%2F8%2BJaSkOs9XyFEp5jl65v7ph2J4OHCTYB5LSjlXt%2FcNak0cTxWEIiGEWquYUaS7q9gZWC9%2FMfKTsfJaFXXKi3y3T3w4ki7pOZPC3vt48U%2BsP8hWIaJHU%2FgKEU0Qkifu5zn0rKFPqJr2sz5Z3yTprEYcxMI4nGIIvml75ylRjoQBaOR0o1BUeZMIcDUrOCHHMtTojG1KOY1W19II91%2FNwNKg2gh9ykBWemuvAsplTl%2FlJXOSseCOvsD6jK3FwTeaE%2FYInH6UqE%2FiEGNoz4YgMIWu9sQGOqUBsS%2FDPoRb7ZP3kvhrs8PVrhArseSdRJENYouCSXQ1AG%2FclK93fkRORWKijixiL31LQM0uWmx7J7OlZb7IlgstBxSMA%2BiuxAuebNOSPEsgdpZD%2Fa6bJ3vqQhNPFz6pBeqLGLSlkGX%2BrJAu14KOlCfvNUOCsXAvogwk6KLg0DJnoNEPXx09HLSAcjJngGm1YGtS22t%2B%2By%2BisSKKXz7u3EMigtl2dfJG&X-Amz-Signature=81b09fd31b9be1a62743a9144fe75499706dc778296d93f570defa0c018ad2df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TXZZILY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGRBMMiJrfZm6po7jl9BRoNtcO7FJcfAxDZTnATXizDAIhANE%2FpSks6KMo32Wnz8vuFacAhgUo74%2BSCPLOA3A2MyPBKv8DCEEQABoMNjM3NDIzMTgzODA1Igw%2FALkgd8g27SDdjuEq3AMvo4d9IDfutOQksSct4hBVqXUOKZb2uxwudCENWO%2FctaiINSER9GFvZVMNCpPis%2F%2BPSG%2BzONtX%2FMPGnPac5cNWBgoiwhdRaJ1GHRMtZTxdkp%2BYjTpZ9VfPo%2B6ydoS668Te4HIsuyElv9KNIYOlvBty%2FUaJG%2F9tCR3wx%2Fj1GYvXwhSmDa7LmGCKFMmmHjMkpyQQJwYaaw0JMr6n16Za0dmoOh2LV8Z75UyaSE4vIVqVWXeblj67cx98HvenHjGKqzsvKUro2TMXccGoZtofK6ITmqTEGFkTRB8W3rBdVjwiEnbxgB8qf8Q1u%2BMwANqJtev3xlZguqNAMvHc5rrFfAMyzbxBF2T4IodvAjLZN45%2FF7lrDx8o9mSwd7t%2FgdZtpHUVq26CVKRa9Gy%2F6noE2AVNl%2FPotlv93cTqkKPzQe2ODVPG7QG%2BKkfvthNsMTjPXEh6HeTxRM7ffrqK5qNaUvX%2F4KxnHUkPDov165IKkYAAc1AWZtbRkx280FmcKJzPvmNdRXxIiUi%2F44cn09fZXgDKkTlJTqLZ7BUKAmPckZBJiLXGOy0sA6lBvmYB6T4c3lBNZF5Ob2mffkhoXsHJnIVrhoELphVRg2WEj%2Bq2TNwUauWYorzLTHHzXUBtoTCqrvbEBjqkAYuwEzMvin62EJ6CSUXgkPrNvlYPvvRMVKCyQYS8KrghEpOs66kkB8dj1WwzQ%2Fd7O3WzqRtHZkF66qFA83LlGI41qAGCtCXFN8NRfW0%2BtkG0o3my9DBGMlGABDzHDXuUWQilOvx58v5AzVFvkYUcGR6BUX8Yg5IktJnBLQLR9g%2F2fEsReyuptgQ9K8A0530fXCSfideAyTP%2BjFbxswFYsSzZ99oy&X-Amz-Signature=bdd768eee5139334aa0758dce0b19197fbad4b2119c4cc7646e878708a598283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HXFQSHW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBrQGrfPH5BaymEPj8yVIwLlt8229NWodzW324PW4knwIgXoDEhrOdd5sYKpWenGp8Qu9DoZgpXpyAA%2B9LMnAUMrEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFKXsc0WliZWJcWX7ircA81X48G2xn%2FdBAjYgKyPrenMRsv5DQpHM1QxWbzZgcF%2FTpWymuoFePKDw9CBJLpIIWG43A1zBl6%2FnsQ1U5d7iD3QIxLstugT%2BbqncSPxANNG%2BEOwSsBRGnkpycMxf4AjljJe6zk%2BTK4cZ3EZC0uaiQnJHP9RcVxIjIPvVovdaesScGvYbWvqAa1lo%2BXyzQK11NmlBjN75dPlZLQCqykZRH0HWOFJ%2BeRrafmUdGleKg%2BS90nr8ebaG55tMUQ84hwGNJFysvQvGMnkHXHLoO3EIwQuUz8d913%2Bae8esGXfEHfxM5Vy5mnZ%2BxqOy%2Bqr985IcpACg77BEXHs1SauBGg4uP2UBNH8wTCgOhJaXCRoQ%2F8%2BJaSkOs9XyFEp5jl65v7ph2J4OHCTYB5LSjlXt%2FcNak0cTxWEIiGEWquYUaS7q9gZWC9%2FMfKTsfJaFXXKi3y3T3w4ki7pOZPC3vt48U%2BsP8hWIaJHU%2FgKEU0Qkifu5zn0rKFPqJr2sz5Z3yTprEYcxMI4nGIIvml75ylRjoQBaOR0o1BUeZMIcDUrOCHHMtTojG1KOY1W19II91%2FNwNKg2gh9ykBWemuvAsplTl%2FlJXOSseCOvsD6jK3FwTeaE%2FYInH6UqE%2FiEGNoz4YgMIWu9sQGOqUBsS%2FDPoRb7ZP3kvhrs8PVrhArseSdRJENYouCSXQ1AG%2FclK93fkRORWKijixiL31LQM0uWmx7J7OlZb7IlgstBxSMA%2BiuxAuebNOSPEsgdpZD%2Fa6bJ3vqQhNPFz6pBeqLGLSlkGX%2BrJAu14KOlCfvNUOCsXAvogwk6KLg0DJnoNEPXx09HLSAcjJngGm1YGtS22t%2B%2By%2BisSKKXz7u3EMigtl2dfJG&X-Amz-Signature=a85f4071598ba2e9ae485d27c3b9417d9bd2a07380c9a0f30ee2fc1e1559d8ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WLPHDLP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJlu5ExdKUrLGm71SRwDddL6qOTjxIbW4zqYO4fSzXiQIhAPMCbt7jEoUrYKGsQoqfxK3U5%2BeAjT7A4tWRq2Mxs%2B6QKv8DCEEQABoMNjM3NDIzMTgzODA1IgxRrCcPHnt6VebfYX4q3APICmCN1qeCKfbcClHFvofK%2F9a8HiRo8bprR%2FAzdE6FEAfTWuJlXnJwPpUvpY7j%2FjGex3V9K0EuPsTB61px2Y0c0PARNJ%2B5qvhu8N5TZ0ToJFSMk%2FLoQq4BdEa2tsWH7gAxYD9vZPP1EKj8aqgwkIV9P5g8wo8OgtnS5xl99P3eZE3czl8lcWF7MtbyRi1nxUlohAinqk98Kdw91ZW98qJvpoghnWFDqLMCeVPAE%2F%2FAbUUNyDdTCvromM5eOc9i1vcLzuRL0ZlL0iuQM6Isv6Shi5Wl2Ox2Qy0WIzOIfobARncpaDkmzgY1Uk7myGXzrrdc%2F8ZkIFOAoLPztj0LGU9VeM3sjJP06nWf%2BJX2G3F02qGq1%2FBasJjATDYgpFA3BBFYPeWexIYlHRjZf7mQvBmmgbm52phTdpBIAJ%2B6cQRAlUOIiPU%2B7taBeNnCJWy3xTM9ZuNbzjoHzKd6Ho1DBznU8lXkh4XaNFbSUw1gOJCdlUYXfPERsJbpWtnK34PxNv5FqUweN3%2BMP1JtttBgrgfJh1ANK7bKTMx%2BV0RyuVckQVbl%2FlnRjuY4kb%2FxR3VdX5U71d3MUIldPNr4RwSSUTMV8xpPPLC7%2FgmJkMbFIzvwy3nfIQm54ktceklfUDDwrvbEBjqkAfceqobE5kyFSpO7n24ttG6t2dpJxuL5sjKX5jzRSVtNsEa8VLhTX0s2KVCo6012IYuc%2FwM80vUgrOx8fTUDYJiwsIM3IsSQcN7Ka6fztyBXE4x4l%2FfYYF75FbpLNr4UUdgTEdIHhL0n4dKqelEZhZ7yUljZSvoJ9UoDhJcRd6Abu8uB6o7RZTfO9Fx4716C0bwxsST0%2Fey3TtRGDaQll%2BCT%2Fl9t&X-Amz-Signature=719fdee3e3c2ceae1c82545f740b5a78c2b2c578cf229448577cc5511c48f733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HXFQSHW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBrQGrfPH5BaymEPj8yVIwLlt8229NWodzW324PW4knwIgXoDEhrOdd5sYKpWenGp8Qu9DoZgpXpyAA%2B9LMnAUMrEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFKXsc0WliZWJcWX7ircA81X48G2xn%2FdBAjYgKyPrenMRsv5DQpHM1QxWbzZgcF%2FTpWymuoFePKDw9CBJLpIIWG43A1zBl6%2FnsQ1U5d7iD3QIxLstugT%2BbqncSPxANNG%2BEOwSsBRGnkpycMxf4AjljJe6zk%2BTK4cZ3EZC0uaiQnJHP9RcVxIjIPvVovdaesScGvYbWvqAa1lo%2BXyzQK11NmlBjN75dPlZLQCqykZRH0HWOFJ%2BeRrafmUdGleKg%2BS90nr8ebaG55tMUQ84hwGNJFysvQvGMnkHXHLoO3EIwQuUz8d913%2Bae8esGXfEHfxM5Vy5mnZ%2BxqOy%2Bqr985IcpACg77BEXHs1SauBGg4uP2UBNH8wTCgOhJaXCRoQ%2F8%2BJaSkOs9XyFEp5jl65v7ph2J4OHCTYB5LSjlXt%2FcNak0cTxWEIiGEWquYUaS7q9gZWC9%2FMfKTsfJaFXXKi3y3T3w4ki7pOZPC3vt48U%2BsP8hWIaJHU%2FgKEU0Qkifu5zn0rKFPqJr2sz5Z3yTprEYcxMI4nGIIvml75ylRjoQBaOR0o1BUeZMIcDUrOCHHMtTojG1KOY1W19II91%2FNwNKg2gh9ykBWemuvAsplTl%2FlJXOSseCOvsD6jK3FwTeaE%2FYInH6UqE%2FiEGNoz4YgMIWu9sQGOqUBsS%2FDPoRb7ZP3kvhrs8PVrhArseSdRJENYouCSXQ1AG%2FclK93fkRORWKijixiL31LQM0uWmx7J7OlZb7IlgstBxSMA%2BiuxAuebNOSPEsgdpZD%2Fa6bJ3vqQhNPFz6pBeqLGLSlkGX%2BrJAu14KOlCfvNUOCsXAvogwk6KLg0DJnoNEPXx09HLSAcjJngGm1YGtS22t%2B%2By%2BisSKKXz7u3EMigtl2dfJG&X-Amz-Signature=02747db1972b54211e0546943781e868dcb7691f159204388976b4a8a4b46907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQDUII5T%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCzLNR4XnLoduTyMWQ5ZQdDi4DCu1g9TfjciXFlu9vIOgIfHasQOEqSayxKXIMvggP8CQBtxrf9aLhYc2%2F4zegBtyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMq6LYoIQSfRqj4RxrKtwDyqn4YD16SmDWAF1VByOkAfK6lBoiXjeCH67ktV4JpmaJUZdS76GSSwCzaw%2ByJZhLd2jRaa%2Fu8JJp29oVtDWONGzhLBPSCGFfUqa3vj6AVZwiiUd%2BMDEaLGbvoTjpqfsqu1ONMUDbkL7pYMtmqXo%2FJbJNMPBj44nU6x48A%2BWMdonQAJQ8pb%2FyRVkWafHIsuoXJk9%2BIkcKcyjBAhu52cEfXZHqASSQhHPmpOIckINlcxOJJ8mh%2FnQpF7FQqNjoGswdtVaf054EuKB%2BeU9PifOera4AKr%2BRBIcdLc6fRp%2FE2qWHImLSiYCQNonhsvPBNg4b6uvavwe6Hj%2FFuFkxpEKcg4jYWIUGWGs4n1GFd4GO2EGpIom%2BPcIPv6enPbgxdfkxp89qerHrK1sEP4y8jP6slBxBDOnNhVk9OvEFXNjYW0FuxIQPKQ%2BRJbutvKIkIJLkXJl5c4P8mWZ48G%2BPjnzdaNDtOf3Am%2BRIywhePsFuQwp%2F0Hi0GpuGmOdGQm0in4doy1tXiEzMtfEhAZMD0u0r3Tit3qOSuukQxCVgH98npqZmJxwtEPjrGE%2FS5%2FlOGt2RiHa%2BVMNLuC8O3nrrdzqY80W6Np7V02yz4jKssJoVdTg0MCSEAvDHYENq1EUwhrH2xAY6pgECdPQglJaOrurUltAB9eAE0M%2FeFW0IwarefpPrYELD2qGCk9SfNJBDEfpV2YnLocHAlzPmlnQdrHGeekn42nFryAHnknZKfzDw%2FGiwp4mBVmLjeTXcJnfSzGHEE4oyTzuB7%2BZBA%2Bi2PB1TA1c99a5nkFY7q7DCEDTh%2BRZfWYqLXn4AeJiNzT0AkAihGS8%2FykJXO%2B04QRVCu9bFDMjy7iDm5ZsSIlun&X-Amz-Signature=a64096edb786b48cf01578fb9d56fbf406d229244b1a877ae2ee919b0fb4329c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REDGY7JH%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkBni4S7sP%2BYrzJcZ8JjIqRo2hdx66mHDvYKcdD%2B05twIhAP%2Flw60k7vEv8DvUNh5%2BQtZTVcYGrm2Euo8zChIsETCnKv8DCEEQABoMNjM3NDIzMTgzODA1IgyFwjAHgqdMZgDpVOgq3ANpTSs9r7xG%2FbQPp1yKkl3HbrTL9mRTSMh0DI7Ne9IlrOTTlX2K4y8VThOji9f5CKasgANmCpaYaLvtHaevDgdS%2Bh2jj32DYHf3DlusUO7o6htxVBg3QNi%2B6GgSDG8VZSWClN0uewW%2FkeAhU7zDsmhNOYAlOLEZFClood%2BYnMhmVPCxxaDsxzdzavHkymgHwZFmdHIt7N8Zs%2BX6BPKIwUNtKsecNyuDtI%2Bzm4RG0ghpsx%2F8MKgrVmUXNQ7ts8VYdzUDXrvfWRlwhRJEZjcBEV0ek1eUaR%2BeIgmQXSducPUW53z0r5hb2H3u%2BYASdcgggiEg1hZZhdm5hGfUyLrnTtTHwU5fxECdJvU7Rms1Cp1QEq9Bfk%2B6AD4y2xMR0eFKP%2BBEOA6JfflrLWxjd3cVeFwUAm%2FIYDgPO1qUNVAJ41Fr%2F5rure3Zrk7v7y%2FTvl6y1IfrAgyq9lZhbZunq4I98vTqtK4Swlp8287MY6CK86RkQOYwZhgMd0%2BHDu6qldgVWAF0VsQHzyNEFSMHppvBhPBD5D2hAJxElH7UrOBHZ5ZaznPIltSJQswlxR7F7ltpjWof1lLSqDqoRVB8PRn%2BCrRpPsg2Y5aJ8oaWdJWBNmA0dr%2FlUdHu7hiO%2Bn%2FMpjCBrvbEBjqkAQELumscv4KUadAmfKJiKDAZGCUHlVLKSqTmKOGEbnmh6rjYMMZByQY%2BUn%2B9Js%2Fyt%2BnwH9GUgxyBiCG6g7eh%2FeMHRHBKoahurVVJCD5rMBQEZ7o3hWc1jYP5m0RBtaVM5eTUUva1I1JjW9QZaDDETW2uGbr3BuYkxmrZ5FrI86UOjpIRjPTgYi%2BC8Xxse6uYdVLHtUrTDgTLQ%2Bx7QkVydGbHh70A&X-Amz-Signature=d5d7532afd1019552b1f28bab3b1b7919db35df9cd90238f1b7b7bfcc05eccae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667PYA67R%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD68h5C%2F2f74ae6T8hQ4NUZnlG863CrePvq4Zdwfnp%2BQwIgNUc48VuSchzuDoPA8A%2FGgQ0PdyFFDrOZoKJ2gxoy9jwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDN2nsSRMLfYQpcvl4yrcAw9TN8eH3oV1WzmHeyZjImFnPPk5l1ET5Zb3kFQvQpaTp%2B%2FgJPw9hKyxGYFFEwvGn6%2FtZBTXGmEezroV0yDBu9Ceg8kggoikJeudedjHI8pBaPijCzMPDErOTfQE5TQ8K7NNribiwkTZeqOUVtL1H6bnhpxfcVXXbiM3gIAHZoY7OVq4tYSS9RVmADHaL5pRlyDdD8dEFNzT2Wo3iSp9c3rdDjlhzCqSso6ZHEBbOUvFpKPJBWxBPGMoRJjL7JtZiwuC6QmcprPLUPuYR%2BFd%2Fpz%2BEtv7dBE4RiHQu35XuUO7lUCUVgnjk8vDxwallu4GjGDIfcrMu5hi8ePOYagc%2F9%2F6FzYpuARNNiLj4%2FcxEHzqMLHXyZkT4Kkr17dSFODwRNUi6jLunDcBmsHly6nso1YosZG0oqdwEUKnUqNjtFdQsyCRP0fbzZANggQ0bgBiCmXtzPApTHUI4Pc%2Fj0e03PRGaKqdtx2EOxtNedwHuH0eraBYDsm%2FTFSCcvQtpmJXKuixzp9vVM2wYSC9OMn7UPrRs3qIHa5Cg0KEfY0UGOyEbUvb0AOGO9jlDf6gLbgZpEGkhPG7bsDelYYNhQdoi3jCZb2462BZgL3DwMezU0BNwMJVjwtl7UpErEkJMO2u9sQGOqUB72d3U6sMK89%2FUr3EqCeEak%2FquiRtuDjL62lLnp%2FpKI%2F2mJe2Vw2JmSHlEzR%2F%2B458QAWf689Q1c7Gehd7gHjQIC%2Bzhakwkdwuah0XehLuxtsrtne7OucNwoK%2F5Ta2IJMs9qTVFow92A0g1NTbK995x%2F4Nto2mtZTj45gWqJb7D27l59Q%2FPFrhUvdAcjEuncMzscidgQbYsY9aLE3buKO6KFYkmaD7&X-Amz-Signature=30a5a833e3323f7f23828825c7d5c4936bd780b35c45d297ac522b9bf23389d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652NQ2XUW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICoTRXb63FXJICLwwq1J77fqcDToWn%2B6ygvmot9mJaTbAiEAh97SBN4o9swt1weBRyD0YDwCpZDhVToU4s4oGVlHISAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDB3VjJtcOV3SJEnMcyrcA95nxBYx7BNn0gwtu0I%2BtHMb%2BX7q7u9GAQt3IOrd8UXIogtuGPR0P93z9Ns8qxH8C9TDFOT03ToSM9L2mQQqHCpc6PS7pN0VhGXYUQRydyhECmMTGLanLE389%2FyD1fxw6nm2NZtzOl8ot5QVL1IdTiYwyL6kpdgu%2BewuAtU5R%2FWUPZlkUPbguNfOklce8S3T6xiR88iOLwc%2FI0CmJgusc%2BjbHPiKKjXnLwpSsGCW6ee52S4xfOVThSfXdR%2FtEPn33dqPSpHc%2BZ%2BHZW06ErL9sQNtedNDUgwePvZuP%2FJ%2F83ms0snWkCDWVUPF2WoA51rXgXPOeG5PJQDOMaORt02LYi%2FuyJWPo7O0pYR%2FCaL05H1mb4fiLjYp8fT9Os1DJV8Y7lzvBo5Y0q4mn5%2FLmweZT7hlx51T3M7Q5%2F4%2BiWUw1iYPkIKH%2FJWbfHJRPWJbB3DZe2qTE7LwUs2LdShmDNIAh%2FyzVRqjwwZ6rKuJ04AU0zPqZGU841lEqIXiD%2FjVGc5wlh%2B3a%2FOGigWBsK0uPfnTsr4ol7UjwDrOgds889EhZCRGOu1gXa3W9M%2Fvy5YDJL0hDL3lJoNoM7V%2FJskNrwfIAHDVBfuZkEc6LWGnE1Uu9lVP7I7zOeu0zeBOa60AMPqv9sQGOqUBpNbA2c8aj5cwgYsInR9u4p0cNOY8DSm9blbzHoDajgI5l2LGIuGLsjmH19YGETCvunxoEZ3KzJMZUGBN7ONktGDnCaEfn%2BIY7DZqaNsTy4NPhZcC5TTMCAUx5n4qmPF1UsTT8doY5s9Y7eKGhKc8hlS9DBbVFyW9SkYCvvaeKyPa3QBXd5Bm0WQYYQ5Gla2BVPJ8QMXhXhI%2Bzn0olckBFduQsUff&X-Amz-Signature=b5e23e6e4e679b7d9583d6e5991ed44ae56ece14ce1a709012df3d8a9ed6291a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6I3CIEU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA09xspNWADvvGCfBy6P8UMI4Jaa3Aufm2Nmpw5LKWMwIgQlkiR3RJlqaZjDYra9KAG%2FLUX7F3m4Kp3P58LAyWgfkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBvEHjhZwl0caFJ%2BjircA1sOIIJxS9w%2FSubq%2BGvnuBkfkJdCXjZgFa%2BoakoI%2BCMgIJ920887ZRfUzzHFAYI1or8erMWOkVmLysrMLtN0aq2fzPMgGVAMMrGF%2BjF%2F6isDsYOEp9P57KEo541YKnATvr%2F5SSOeOqW2J4sIrTbuCU1vkUKOPaWrX%2FGK0enN1pIs0clHYseUK7oe7nsIniIKw8RmmbbwpgGAgWngl0F9cRXneP7NogYTJk6OcnLRAszxxMktgX58%2F1XIjCbxMfc2yODaxwxJYUFXnIyS5j0Bt3CK3OmRigDeejItu426JZFTYUbEdHQ2pfYV1533Y%2FS5i34%2BuOFDg5aSHeC0BMSP3N9Hs%2BJ7ewrvszdzm6ll2cNzoh6SvMkQuXyv4DECOjU3tFOkjPp%2BMfT%2FeJLYa4EHujG88CKF1qcWqRTt40XH1lUtNWtB6qtXCPNqFflVoBi3sngkXzfiE2Lg%2F%2FmFHvY5yglJr3ArSUqiaoqzY9T%2BfTiUczOjqq6Mwnr6kJtUXmhdhtqgeiH9vlUOBY6uvT3u4CRVqv%2BDF2BLugAz60UXLDHoNGLt7whEHanY7wJ9p8AnTz8k6bmC0YQqK1VVIoVHtLGWFJacskR6X%2FuCt%2Fi3QdH5p80CNcHI1QmnEY1YMPuu9sQGOqUBhe8rA11JnLDoYO0KBQlT%2FhrRrIwt0A1r9c%2BonISrVNTG5shZcUTQIYpORVSZqXI3FmHIathHTzGBTI3z6H%2ByqFA33Ifg8LAj6Jf%2BmWnJ9RofOZEfiWDiYiOY%2FjzhUeBCPQKVmS9rvVhk3G7VZANLwxniyww1JnLVmt%2B0sqvpGzpQQbGHt35r3hqecNQcu5iBXWcG%2BvDxgbeEpnjfJ7M%2F7gWGYgms&X-Amz-Signature=12ff8af673ba078fc18f170901d3f21da5687cfc2be517c405a675341840be45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HXFQSHW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBrQGrfPH5BaymEPj8yVIwLlt8229NWodzW324PW4knwIgXoDEhrOdd5sYKpWenGp8Qu9DoZgpXpyAA%2B9LMnAUMrEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFKXsc0WliZWJcWX7ircA81X48G2xn%2FdBAjYgKyPrenMRsv5DQpHM1QxWbzZgcF%2FTpWymuoFePKDw9CBJLpIIWG43A1zBl6%2FnsQ1U5d7iD3QIxLstugT%2BbqncSPxANNG%2BEOwSsBRGnkpycMxf4AjljJe6zk%2BTK4cZ3EZC0uaiQnJHP9RcVxIjIPvVovdaesScGvYbWvqAa1lo%2BXyzQK11NmlBjN75dPlZLQCqykZRH0HWOFJ%2BeRrafmUdGleKg%2BS90nr8ebaG55tMUQ84hwGNJFysvQvGMnkHXHLoO3EIwQuUz8d913%2Bae8esGXfEHfxM5Vy5mnZ%2BxqOy%2Bqr985IcpACg77BEXHs1SauBGg4uP2UBNH8wTCgOhJaXCRoQ%2F8%2BJaSkOs9XyFEp5jl65v7ph2J4OHCTYB5LSjlXt%2FcNak0cTxWEIiGEWquYUaS7q9gZWC9%2FMfKTsfJaFXXKi3y3T3w4ki7pOZPC3vt48U%2BsP8hWIaJHU%2FgKEU0Qkifu5zn0rKFPqJr2sz5Z3yTprEYcxMI4nGIIvml75ylRjoQBaOR0o1BUeZMIcDUrOCHHMtTojG1KOY1W19II91%2FNwNKg2gh9ykBWemuvAsplTl%2FlJXOSseCOvsD6jK3FwTeaE%2FYInH6UqE%2FiEGNoz4YgMIWu9sQGOqUBsS%2FDPoRb7ZP3kvhrs8PVrhArseSdRJENYouCSXQ1AG%2FclK93fkRORWKijixiL31LQM0uWmx7J7OlZb7IlgstBxSMA%2BiuxAuebNOSPEsgdpZD%2Fa6bJ3vqQhNPFz6pBeqLGLSlkGX%2BrJAu14KOlCfvNUOCsXAvogwk6KLg0DJnoNEPXx09HLSAcjJngGm1YGtS22t%2B%2By%2BisSKKXz7u3EMigtl2dfJG&X-Amz-Signature=7b6ffb737e7efeb692d7822ef10d561cdab465b26612546f6be2f9bcdaab1b94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HXFQSHW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBrQGrfPH5BaymEPj8yVIwLlt8229NWodzW324PW4knwIgXoDEhrOdd5sYKpWenGp8Qu9DoZgpXpyAA%2B9LMnAUMrEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFKXsc0WliZWJcWX7ircA81X48G2xn%2FdBAjYgKyPrenMRsv5DQpHM1QxWbzZgcF%2FTpWymuoFePKDw9CBJLpIIWG43A1zBl6%2FnsQ1U5d7iD3QIxLstugT%2BbqncSPxANNG%2BEOwSsBRGnkpycMxf4AjljJe6zk%2BTK4cZ3EZC0uaiQnJHP9RcVxIjIPvVovdaesScGvYbWvqAa1lo%2BXyzQK11NmlBjN75dPlZLQCqykZRH0HWOFJ%2BeRrafmUdGleKg%2BS90nr8ebaG55tMUQ84hwGNJFysvQvGMnkHXHLoO3EIwQuUz8d913%2Bae8esGXfEHfxM5Vy5mnZ%2BxqOy%2Bqr985IcpACg77BEXHs1SauBGg4uP2UBNH8wTCgOhJaXCRoQ%2F8%2BJaSkOs9XyFEp5jl65v7ph2J4OHCTYB5LSjlXt%2FcNak0cTxWEIiGEWquYUaS7q9gZWC9%2FMfKTsfJaFXXKi3y3T3w4ki7pOZPC3vt48U%2BsP8hWIaJHU%2FgKEU0Qkifu5zn0rKFPqJr2sz5Z3yTprEYcxMI4nGIIvml75ylRjoQBaOR0o1BUeZMIcDUrOCHHMtTojG1KOY1W19II91%2FNwNKg2gh9ykBWemuvAsplTl%2FlJXOSseCOvsD6jK3FwTeaE%2FYInH6UqE%2FiEGNoz4YgMIWu9sQGOqUBsS%2FDPoRb7ZP3kvhrs8PVrhArseSdRJENYouCSXQ1AG%2FclK93fkRORWKijixiL31LQM0uWmx7J7OlZb7IlgstBxSMA%2BiuxAuebNOSPEsgdpZD%2Fa6bJ3vqQhNPFz6pBeqLGLSlkGX%2BrJAu14KOlCfvNUOCsXAvogwk6KLg0DJnoNEPXx09HLSAcjJngGm1YGtS22t%2B%2By%2BisSKKXz7u3EMigtl2dfJG&X-Amz-Signature=8f0f0e483314845a4d1e38c2f553516dfc6c690047a2f12197ae62ff4acb2929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAVXIQ7E%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTBUymcxR5jI3ud3XPFvDR63EebU1GDwxmWc3hloyv2AiA6R9ofXXjqQv947NEYIyTEwp%2FcxBEAZTqXFWUI8TVpPCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMwHCEmstP18WJuF0TKtwDfguvzr8zVkRf9%2BhOo89A4zjf6XFJZSsSRMQfhX0N0wU6XLUxJOzbe%2Ba5%2FDZHLN%2BYgxEHTDP9qFfmMJvdhSaVJVkfjy45y6vIGEEqrJKLMElvc6DJXOYh6p2t%2FHW27AlIe%2FIXL2Xj3iH69CL3xkkKsinmRYKO9Q62le6ncwsudiGrZzykNZfZJPjFlE%2FkrilAOV0xPnJxNWoUhoaJYeYDxEAvqjZM8O8ZNaMHYi2qqmR%2F1t1%2B%2Fuy1A9Iod%2FU9TMVxaXCKfe2mp4qb2I%2BC2CmFJjxoeUNNEOwgBD8pPugT%2BQoysY0U78Cc3wzzgnrxJN%2BD0EwyIE4epBvRoluhKvESOiaAmavBL6IVhcUREh9lagGTmKVf65tb3%2BxcIzM9X62W5Lc2ArWXwloJ0x6q9sHuhVkNkk0BbCU6M7nf3aw4qIEMHsVB1CaJFLFioHxI%2F9kIFFlzB6lVYOzoc11siISLYLypvoMmbDWiXZf9w42zs43Al8C7cBlZbQo3T%2F8wpXjc5%2FjE%2B0UIb8T2va1ay7ilf9W53az03%2FEwBWw3Srh2xP3OLvqNo0PJqgpSbB6G8TPb8fGwX32dX4%2FTH5wXoce1Wt9CBwjskiMsIg80RgeNKidvxXtcpCPPgv8TNmYw%2FK32xAY6pgF%2BxIRKSvI2Lp4QMHBxpiR8eINXlQVwVpR1YEXiuI62dZ65LgBdp%2FjEpXkYyGR499VmMH0SVSiaSPtcWgLHuQq5xG2r8KBdetWOv3zq%2BUk%2BQUdbE8i9sBjgrNyjGL9JY27sIET8Sp6mS9kVwoNzH8j3xbcYAmeBqXfQXC51X9E482W52mmekwFsZTawPcRcvlY8uEC1DB7HVcQZYi346fnJvvS07kny&X-Amz-Signature=71361ba4f54fe1c9c1aafa269c92f06cf330caadc001d2290f796fd2ff3244fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAVXIQ7E%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTBUymcxR5jI3ud3XPFvDR63EebU1GDwxmWc3hloyv2AiA6R9ofXXjqQv947NEYIyTEwp%2FcxBEAZTqXFWUI8TVpPCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMwHCEmstP18WJuF0TKtwDfguvzr8zVkRf9%2BhOo89A4zjf6XFJZSsSRMQfhX0N0wU6XLUxJOzbe%2Ba5%2FDZHLN%2BYgxEHTDP9qFfmMJvdhSaVJVkfjy45y6vIGEEqrJKLMElvc6DJXOYh6p2t%2FHW27AlIe%2FIXL2Xj3iH69CL3xkkKsinmRYKO9Q62le6ncwsudiGrZzykNZfZJPjFlE%2FkrilAOV0xPnJxNWoUhoaJYeYDxEAvqjZM8O8ZNaMHYi2qqmR%2F1t1%2B%2Fuy1A9Iod%2FU9TMVxaXCKfe2mp4qb2I%2BC2CmFJjxoeUNNEOwgBD8pPugT%2BQoysY0U78Cc3wzzgnrxJN%2BD0EwyIE4epBvRoluhKvESOiaAmavBL6IVhcUREh9lagGTmKVf65tb3%2BxcIzM9X62W5Lc2ArWXwloJ0x6q9sHuhVkNkk0BbCU6M7nf3aw4qIEMHsVB1CaJFLFioHxI%2F9kIFFlzB6lVYOzoc11siISLYLypvoMmbDWiXZf9w42zs43Al8C7cBlZbQo3T%2F8wpXjc5%2FjE%2B0UIb8T2va1ay7ilf9W53az03%2FEwBWw3Srh2xP3OLvqNo0PJqgpSbB6G8TPb8fGwX32dX4%2FTH5wXoce1Wt9CBwjskiMsIg80RgeNKidvxXtcpCPPgv8TNmYw%2FK32xAY6pgF%2BxIRKSvI2Lp4QMHBxpiR8eINXlQVwVpR1YEXiuI62dZ65LgBdp%2FjEpXkYyGR499VmMH0SVSiaSPtcWgLHuQq5xG2r8KBdetWOv3zq%2BUk%2BQUdbE8i9sBjgrNyjGL9JY27sIET8Sp6mS9kVwoNzH8j3xbcYAmeBqXfQXC51X9E482W52mmekwFsZTawPcRcvlY8uEC1DB7HVcQZYi346fnJvvS07kny&X-Amz-Signature=5ad256154da1a51ea055e64f9de62d413b4b57f7fd8020992fdc4f0bc4b775f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAVXIQ7E%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTBUymcxR5jI3ud3XPFvDR63EebU1GDwxmWc3hloyv2AiA6R9ofXXjqQv947NEYIyTEwp%2FcxBEAZTqXFWUI8TVpPCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMwHCEmstP18WJuF0TKtwDfguvzr8zVkRf9%2BhOo89A4zjf6XFJZSsSRMQfhX0N0wU6XLUxJOzbe%2Ba5%2FDZHLN%2BYgxEHTDP9qFfmMJvdhSaVJVkfjy45y6vIGEEqrJKLMElvc6DJXOYh6p2t%2FHW27AlIe%2FIXL2Xj3iH69CL3xkkKsinmRYKO9Q62le6ncwsudiGrZzykNZfZJPjFlE%2FkrilAOV0xPnJxNWoUhoaJYeYDxEAvqjZM8O8ZNaMHYi2qqmR%2F1t1%2B%2Fuy1A9Iod%2FU9TMVxaXCKfe2mp4qb2I%2BC2CmFJjxoeUNNEOwgBD8pPugT%2BQoysY0U78Cc3wzzgnrxJN%2BD0EwyIE4epBvRoluhKvESOiaAmavBL6IVhcUREh9lagGTmKVf65tb3%2BxcIzM9X62W5Lc2ArWXwloJ0x6q9sHuhVkNkk0BbCU6M7nf3aw4qIEMHsVB1CaJFLFioHxI%2F9kIFFlzB6lVYOzoc11siISLYLypvoMmbDWiXZf9w42zs43Al8C7cBlZbQo3T%2F8wpXjc5%2FjE%2B0UIb8T2va1ay7ilf9W53az03%2FEwBWw3Srh2xP3OLvqNo0PJqgpSbB6G8TPb8fGwX32dX4%2FTH5wXoce1Wt9CBwjskiMsIg80RgeNKidvxXtcpCPPgv8TNmYw%2FK32xAY6pgF%2BxIRKSvI2Lp4QMHBxpiR8eINXlQVwVpR1YEXiuI62dZ65LgBdp%2FjEpXkYyGR499VmMH0SVSiaSPtcWgLHuQq5xG2r8KBdetWOv3zq%2BUk%2BQUdbE8i9sBjgrNyjGL9JY27sIET8Sp6mS9kVwoNzH8j3xbcYAmeBqXfQXC51X9E482W52mmekwFsZTawPcRcvlY8uEC1DB7HVcQZYi346fnJvvS07kny&X-Amz-Signature=93ca2877f7d5aa429ff6a831c4146928943b313e8a6f2cdb8c320e7013bb5ddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAVXIQ7E%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTBUymcxR5jI3ud3XPFvDR63EebU1GDwxmWc3hloyv2AiA6R9ofXXjqQv947NEYIyTEwp%2FcxBEAZTqXFWUI8TVpPCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMwHCEmstP18WJuF0TKtwDfguvzr8zVkRf9%2BhOo89A4zjf6XFJZSsSRMQfhX0N0wU6XLUxJOzbe%2Ba5%2FDZHLN%2BYgxEHTDP9qFfmMJvdhSaVJVkfjy45y6vIGEEqrJKLMElvc6DJXOYh6p2t%2FHW27AlIe%2FIXL2Xj3iH69CL3xkkKsinmRYKO9Q62le6ncwsudiGrZzykNZfZJPjFlE%2FkrilAOV0xPnJxNWoUhoaJYeYDxEAvqjZM8O8ZNaMHYi2qqmR%2F1t1%2B%2Fuy1A9Iod%2FU9TMVxaXCKfe2mp4qb2I%2BC2CmFJjxoeUNNEOwgBD8pPugT%2BQoysY0U78Cc3wzzgnrxJN%2BD0EwyIE4epBvRoluhKvESOiaAmavBL6IVhcUREh9lagGTmKVf65tb3%2BxcIzM9X62W5Lc2ArWXwloJ0x6q9sHuhVkNkk0BbCU6M7nf3aw4qIEMHsVB1CaJFLFioHxI%2F9kIFFlzB6lVYOzoc11siISLYLypvoMmbDWiXZf9w42zs43Al8C7cBlZbQo3T%2F8wpXjc5%2FjE%2B0UIb8T2va1ay7ilf9W53az03%2FEwBWw3Srh2xP3OLvqNo0PJqgpSbB6G8TPb8fGwX32dX4%2FTH5wXoce1Wt9CBwjskiMsIg80RgeNKidvxXtcpCPPgv8TNmYw%2FK32xAY6pgF%2BxIRKSvI2Lp4QMHBxpiR8eINXlQVwVpR1YEXiuI62dZ65LgBdp%2FjEpXkYyGR499VmMH0SVSiaSPtcWgLHuQq5xG2r8KBdetWOv3zq%2BUk%2BQUdbE8i9sBjgrNyjGL9JY27sIET8Sp6mS9kVwoNzH8j3xbcYAmeBqXfQXC51X9E482W52mmekwFsZTawPcRcvlY8uEC1DB7HVcQZYi346fnJvvS07kny&X-Amz-Signature=81eb46063762349499af0d19184cfabf5b230ae5364626f21718b31e6e569664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAVXIQ7E%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTBUymcxR5jI3ud3XPFvDR63EebU1GDwxmWc3hloyv2AiA6R9ofXXjqQv947NEYIyTEwp%2FcxBEAZTqXFWUI8TVpPCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMwHCEmstP18WJuF0TKtwDfguvzr8zVkRf9%2BhOo89A4zjf6XFJZSsSRMQfhX0N0wU6XLUxJOzbe%2Ba5%2FDZHLN%2BYgxEHTDP9qFfmMJvdhSaVJVkfjy45y6vIGEEqrJKLMElvc6DJXOYh6p2t%2FHW27AlIe%2FIXL2Xj3iH69CL3xkkKsinmRYKO9Q62le6ncwsudiGrZzykNZfZJPjFlE%2FkrilAOV0xPnJxNWoUhoaJYeYDxEAvqjZM8O8ZNaMHYi2qqmR%2F1t1%2B%2Fuy1A9Iod%2FU9TMVxaXCKfe2mp4qb2I%2BC2CmFJjxoeUNNEOwgBD8pPugT%2BQoysY0U78Cc3wzzgnrxJN%2BD0EwyIE4epBvRoluhKvESOiaAmavBL6IVhcUREh9lagGTmKVf65tb3%2BxcIzM9X62W5Lc2ArWXwloJ0x6q9sHuhVkNkk0BbCU6M7nf3aw4qIEMHsVB1CaJFLFioHxI%2F9kIFFlzB6lVYOzoc11siISLYLypvoMmbDWiXZf9w42zs43Al8C7cBlZbQo3T%2F8wpXjc5%2FjE%2B0UIb8T2va1ay7ilf9W53az03%2FEwBWw3Srh2xP3OLvqNo0PJqgpSbB6G8TPb8fGwX32dX4%2FTH5wXoce1Wt9CBwjskiMsIg80RgeNKidvxXtcpCPPgv8TNmYw%2FK32xAY6pgF%2BxIRKSvI2Lp4QMHBxpiR8eINXlQVwVpR1YEXiuI62dZ65LgBdp%2FjEpXkYyGR499VmMH0SVSiaSPtcWgLHuQq5xG2r8KBdetWOv3zq%2BUk%2BQUdbE8i9sBjgrNyjGL9JY27sIET8Sp6mS9kVwoNzH8j3xbcYAmeBqXfQXC51X9E482W52mmekwFsZTawPcRcvlY8uEC1DB7HVcQZYi346fnJvvS07kny&X-Amz-Signature=407c12947559bd995236eb0b029d1f2805a06654005380ef92843e025c24b340&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAVXIQ7E%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTBUymcxR5jI3ud3XPFvDR63EebU1GDwxmWc3hloyv2AiA6R9ofXXjqQv947NEYIyTEwp%2FcxBEAZTqXFWUI8TVpPCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMwHCEmstP18WJuF0TKtwDfguvzr8zVkRf9%2BhOo89A4zjf6XFJZSsSRMQfhX0N0wU6XLUxJOzbe%2Ba5%2FDZHLN%2BYgxEHTDP9qFfmMJvdhSaVJVkfjy45y6vIGEEqrJKLMElvc6DJXOYh6p2t%2FHW27AlIe%2FIXL2Xj3iH69CL3xkkKsinmRYKO9Q62le6ncwsudiGrZzykNZfZJPjFlE%2FkrilAOV0xPnJxNWoUhoaJYeYDxEAvqjZM8O8ZNaMHYi2qqmR%2F1t1%2B%2Fuy1A9Iod%2FU9TMVxaXCKfe2mp4qb2I%2BC2CmFJjxoeUNNEOwgBD8pPugT%2BQoysY0U78Cc3wzzgnrxJN%2BD0EwyIE4epBvRoluhKvESOiaAmavBL6IVhcUREh9lagGTmKVf65tb3%2BxcIzM9X62W5Lc2ArWXwloJ0x6q9sHuhVkNkk0BbCU6M7nf3aw4qIEMHsVB1CaJFLFioHxI%2F9kIFFlzB6lVYOzoc11siISLYLypvoMmbDWiXZf9w42zs43Al8C7cBlZbQo3T%2F8wpXjc5%2FjE%2B0UIb8T2va1ay7ilf9W53az03%2FEwBWw3Srh2xP3OLvqNo0PJqgpSbB6G8TPb8fGwX32dX4%2FTH5wXoce1Wt9CBwjskiMsIg80RgeNKidvxXtcpCPPgv8TNmYw%2FK32xAY6pgF%2BxIRKSvI2Lp4QMHBxpiR8eINXlQVwVpR1YEXiuI62dZ65LgBdp%2FjEpXkYyGR499VmMH0SVSiaSPtcWgLHuQq5xG2r8KBdetWOv3zq%2BUk%2BQUdbE8i9sBjgrNyjGL9JY27sIET8Sp6mS9kVwoNzH8j3xbcYAmeBqXfQXC51X9E482W52mmekwFsZTawPcRcvlY8uEC1DB7HVcQZYi346fnJvvS07kny&X-Amz-Signature=b403cd9c02358a38e8c446a10bce8ec9d3fa44d2b57776ca069b7583fcd7beae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAVXIQ7E%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTBUymcxR5jI3ud3XPFvDR63EebU1GDwxmWc3hloyv2AiA6R9ofXXjqQv947NEYIyTEwp%2FcxBEAZTqXFWUI8TVpPCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMwHCEmstP18WJuF0TKtwDfguvzr8zVkRf9%2BhOo89A4zjf6XFJZSsSRMQfhX0N0wU6XLUxJOzbe%2Ba5%2FDZHLN%2BYgxEHTDP9qFfmMJvdhSaVJVkfjy45y6vIGEEqrJKLMElvc6DJXOYh6p2t%2FHW27AlIe%2FIXL2Xj3iH69CL3xkkKsinmRYKO9Q62le6ncwsudiGrZzykNZfZJPjFlE%2FkrilAOV0xPnJxNWoUhoaJYeYDxEAvqjZM8O8ZNaMHYi2qqmR%2F1t1%2B%2Fuy1A9Iod%2FU9TMVxaXCKfe2mp4qb2I%2BC2CmFJjxoeUNNEOwgBD8pPugT%2BQoysY0U78Cc3wzzgnrxJN%2BD0EwyIE4epBvRoluhKvESOiaAmavBL6IVhcUREh9lagGTmKVf65tb3%2BxcIzM9X62W5Lc2ArWXwloJ0x6q9sHuhVkNkk0BbCU6M7nf3aw4qIEMHsVB1CaJFLFioHxI%2F9kIFFlzB6lVYOzoc11siISLYLypvoMmbDWiXZf9w42zs43Al8C7cBlZbQo3T%2F8wpXjc5%2FjE%2B0UIb8T2va1ay7ilf9W53az03%2FEwBWw3Srh2xP3OLvqNo0PJqgpSbB6G8TPb8fGwX32dX4%2FTH5wXoce1Wt9CBwjskiMsIg80RgeNKidvxXtcpCPPgv8TNmYw%2FK32xAY6pgF%2BxIRKSvI2Lp4QMHBxpiR8eINXlQVwVpR1YEXiuI62dZ65LgBdp%2FjEpXkYyGR499VmMH0SVSiaSPtcWgLHuQq5xG2r8KBdetWOv3zq%2BUk%2BQUdbE8i9sBjgrNyjGL9JY27sIET8Sp6mS9kVwoNzH8j3xbcYAmeBqXfQXC51X9E482W52mmekwFsZTawPcRcvlY8uEC1DB7HVcQZYi346fnJvvS07kny&X-Amz-Signature=93ca2877f7d5aa429ff6a831c4146928943b313e8a6f2cdb8c320e7013bb5ddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAVXIQ7E%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTBUymcxR5jI3ud3XPFvDR63EebU1GDwxmWc3hloyv2AiA6R9ofXXjqQv947NEYIyTEwp%2FcxBEAZTqXFWUI8TVpPCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMwHCEmstP18WJuF0TKtwDfguvzr8zVkRf9%2BhOo89A4zjf6XFJZSsSRMQfhX0N0wU6XLUxJOzbe%2Ba5%2FDZHLN%2BYgxEHTDP9qFfmMJvdhSaVJVkfjy45y6vIGEEqrJKLMElvc6DJXOYh6p2t%2FHW27AlIe%2FIXL2Xj3iH69CL3xkkKsinmRYKO9Q62le6ncwsudiGrZzykNZfZJPjFlE%2FkrilAOV0xPnJxNWoUhoaJYeYDxEAvqjZM8O8ZNaMHYi2qqmR%2F1t1%2B%2Fuy1A9Iod%2FU9TMVxaXCKfe2mp4qb2I%2BC2CmFJjxoeUNNEOwgBD8pPugT%2BQoysY0U78Cc3wzzgnrxJN%2BD0EwyIE4epBvRoluhKvESOiaAmavBL6IVhcUREh9lagGTmKVf65tb3%2BxcIzM9X62W5Lc2ArWXwloJ0x6q9sHuhVkNkk0BbCU6M7nf3aw4qIEMHsVB1CaJFLFioHxI%2F9kIFFlzB6lVYOzoc11siISLYLypvoMmbDWiXZf9w42zs43Al8C7cBlZbQo3T%2F8wpXjc5%2FjE%2B0UIb8T2va1ay7ilf9W53az03%2FEwBWw3Srh2xP3OLvqNo0PJqgpSbB6G8TPb8fGwX32dX4%2FTH5wXoce1Wt9CBwjskiMsIg80RgeNKidvxXtcpCPPgv8TNmYw%2FK32xAY6pgF%2BxIRKSvI2Lp4QMHBxpiR8eINXlQVwVpR1YEXiuI62dZ65LgBdp%2FjEpXkYyGR499VmMH0SVSiaSPtcWgLHuQq5xG2r8KBdetWOv3zq%2BUk%2BQUdbE8i9sBjgrNyjGL9JY27sIET8Sp6mS9kVwoNzH8j3xbcYAmeBqXfQXC51X9E482W52mmekwFsZTawPcRcvlY8uEC1DB7HVcQZYi346fnJvvS07kny&X-Amz-Signature=3f9d177997884f6c1c131acb6916a2a9785565e66bf6fa8e5c72d80e46295f11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAVXIQ7E%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTBUymcxR5jI3ud3XPFvDR63EebU1GDwxmWc3hloyv2AiA6R9ofXXjqQv947NEYIyTEwp%2FcxBEAZTqXFWUI8TVpPCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMwHCEmstP18WJuF0TKtwDfguvzr8zVkRf9%2BhOo89A4zjf6XFJZSsSRMQfhX0N0wU6XLUxJOzbe%2Ba5%2FDZHLN%2BYgxEHTDP9qFfmMJvdhSaVJVkfjy45y6vIGEEqrJKLMElvc6DJXOYh6p2t%2FHW27AlIe%2FIXL2Xj3iH69CL3xkkKsinmRYKO9Q62le6ncwsudiGrZzykNZfZJPjFlE%2FkrilAOV0xPnJxNWoUhoaJYeYDxEAvqjZM8O8ZNaMHYi2qqmR%2F1t1%2B%2Fuy1A9Iod%2FU9TMVxaXCKfe2mp4qb2I%2BC2CmFJjxoeUNNEOwgBD8pPugT%2BQoysY0U78Cc3wzzgnrxJN%2BD0EwyIE4epBvRoluhKvESOiaAmavBL6IVhcUREh9lagGTmKVf65tb3%2BxcIzM9X62W5Lc2ArWXwloJ0x6q9sHuhVkNkk0BbCU6M7nf3aw4qIEMHsVB1CaJFLFioHxI%2F9kIFFlzB6lVYOzoc11siISLYLypvoMmbDWiXZf9w42zs43Al8C7cBlZbQo3T%2F8wpXjc5%2FjE%2B0UIb8T2va1ay7ilf9W53az03%2FEwBWw3Srh2xP3OLvqNo0PJqgpSbB6G8TPb8fGwX32dX4%2FTH5wXoce1Wt9CBwjskiMsIg80RgeNKidvxXtcpCPPgv8TNmYw%2FK32xAY6pgF%2BxIRKSvI2Lp4QMHBxpiR8eINXlQVwVpR1YEXiuI62dZ65LgBdp%2FjEpXkYyGR499VmMH0SVSiaSPtcWgLHuQq5xG2r8KBdetWOv3zq%2BUk%2BQUdbE8i9sBjgrNyjGL9JY27sIET8Sp6mS9kVwoNzH8j3xbcYAmeBqXfQXC51X9E482W52mmekwFsZTawPcRcvlY8uEC1DB7HVcQZYi346fnJvvS07kny&X-Amz-Signature=90c3713d12e27724edf00dc56d6cde399b03c91b70263be06dfd1c4d3900651d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAVXIQ7E%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTBUymcxR5jI3ud3XPFvDR63EebU1GDwxmWc3hloyv2AiA6R9ofXXjqQv947NEYIyTEwp%2FcxBEAZTqXFWUI8TVpPCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMwHCEmstP18WJuF0TKtwDfguvzr8zVkRf9%2BhOo89A4zjf6XFJZSsSRMQfhX0N0wU6XLUxJOzbe%2Ba5%2FDZHLN%2BYgxEHTDP9qFfmMJvdhSaVJVkfjy45y6vIGEEqrJKLMElvc6DJXOYh6p2t%2FHW27AlIe%2FIXL2Xj3iH69CL3xkkKsinmRYKO9Q62le6ncwsudiGrZzykNZfZJPjFlE%2FkrilAOV0xPnJxNWoUhoaJYeYDxEAvqjZM8O8ZNaMHYi2qqmR%2F1t1%2B%2Fuy1A9Iod%2FU9TMVxaXCKfe2mp4qb2I%2BC2CmFJjxoeUNNEOwgBD8pPugT%2BQoysY0U78Cc3wzzgnrxJN%2BD0EwyIE4epBvRoluhKvESOiaAmavBL6IVhcUREh9lagGTmKVf65tb3%2BxcIzM9X62W5Lc2ArWXwloJ0x6q9sHuhVkNkk0BbCU6M7nf3aw4qIEMHsVB1CaJFLFioHxI%2F9kIFFlzB6lVYOzoc11siISLYLypvoMmbDWiXZf9w42zs43Al8C7cBlZbQo3T%2F8wpXjc5%2FjE%2B0UIb8T2va1ay7ilf9W53az03%2FEwBWw3Srh2xP3OLvqNo0PJqgpSbB6G8TPb8fGwX32dX4%2FTH5wXoce1Wt9CBwjskiMsIg80RgeNKidvxXtcpCPPgv8TNmYw%2FK32xAY6pgF%2BxIRKSvI2Lp4QMHBxpiR8eINXlQVwVpR1YEXiuI62dZ65LgBdp%2FjEpXkYyGR499VmMH0SVSiaSPtcWgLHuQq5xG2r8KBdetWOv3zq%2BUk%2BQUdbE8i9sBjgrNyjGL9JY27sIET8Sp6mS9kVwoNzH8j3xbcYAmeBqXfQXC51X9E482W52mmekwFsZTawPcRcvlY8uEC1DB7HVcQZYi346fnJvvS07kny&X-Amz-Signature=57c57af0abe1cafb801e96fc5a5a04f08d142d49ef067d255f080f57076e9620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
