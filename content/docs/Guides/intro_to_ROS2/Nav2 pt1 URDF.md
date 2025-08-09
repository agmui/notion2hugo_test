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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643DZ56PK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEHfaso9Dp6IVb4fkWDjXvAj59tFhBjOl1sP765zYnfhAiEA2Zj1Qm%2FeumkP5GxA2%2FRPS1foMCXWIc2cYzq55d8wy%2FsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMQa2BxhcZIHlNUBircA4tW%2FuXZW2jfS%2B06pCMkvaSaJ5iMYGlyFhw2We7ohm74ygqAkYoCrLwptvhEIos3pbu8elQgOzCaU3EHBXq7y2VLGpAAEC32wmk1pd8XzTYso7qyzHG3Jc2sPQWFwk%2Fq08mhRrLGwiSozBzTIO8QmdP2uMFWaFBynC9%2FWY4Yl04kuZhX4M8QRmqn9eHF1%2FiTesqUsJqyoWc2kxmehzT8bAXz8UEOmPiCrVTMhsBP8%2FrM5V0FaLNVcrcXAHxHWmtvV44qXx5INSrjKjPTLjcfHu1yu%2Bbc4MhYNJE7SgU0X%2FJ3lfbpnkHEwI%2BE%2FShYdNpuv%2F%2FigHMC6vWRjmHrbJPlR8%2FD3z4uRu58NK7qLuua7RqBgpTT%2FsNrdkyr6ZSuiQDNNeSrCbeBHYoS9mTE2%2BjuQywg6l1qVEdD6HOXUTGiqGEUyJnbo%2B0OrjPGuMV8s9EFPnW8h6crzCgwXDrXoc4Q%2BQOBBWEJWUnwbUGqgkHoHYDW5yvukQLlSH%2FH7Yy4pc0c1hIb9ELZ5aHZC9j4RTS0ZFuJpz3OGR0v4j4TGBtknsQg%2Bri0ry6f0rWHOpRseQXPn4TaSR6LZD%2Bqt57DK7NA1nrUbRpznKdfVdZ4OhLhjdXl7M3PO0OhEjICwxc4MKHQ2sQGOqUBzcNNbbuQNUpaLJ9mhX36Nf6vT71Lsi0Ad%2BeZ%2BzTAi65dF%2BqK2O%2BBd3O7IaNAXln4BLd8ujn4%2B%2BiU5labfVRzgaMA8m2P9fYuJzsRU7TML9F4ytgECY%2Bw04FBPmC5ktJgD4sCOTel3riRTRxBzASmjCd1ygKBE9gdoao3GuTd6SvUoZKJ3ZFkvkaQ%2F4UlLukmY4XwedFAJ5USewlkrWacrifNSxLR&X-Amz-Signature=7528794981e9050818cb25062247b7524354aeade4d1877bf8b7e099355ea32b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643DZ56PK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEHfaso9Dp6IVb4fkWDjXvAj59tFhBjOl1sP765zYnfhAiEA2Zj1Qm%2FeumkP5GxA2%2FRPS1foMCXWIc2cYzq55d8wy%2FsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMQa2BxhcZIHlNUBircA4tW%2FuXZW2jfS%2B06pCMkvaSaJ5iMYGlyFhw2We7ohm74ygqAkYoCrLwptvhEIos3pbu8elQgOzCaU3EHBXq7y2VLGpAAEC32wmk1pd8XzTYso7qyzHG3Jc2sPQWFwk%2Fq08mhRrLGwiSozBzTIO8QmdP2uMFWaFBynC9%2FWY4Yl04kuZhX4M8QRmqn9eHF1%2FiTesqUsJqyoWc2kxmehzT8bAXz8UEOmPiCrVTMhsBP8%2FrM5V0FaLNVcrcXAHxHWmtvV44qXx5INSrjKjPTLjcfHu1yu%2Bbc4MhYNJE7SgU0X%2FJ3lfbpnkHEwI%2BE%2FShYdNpuv%2F%2FigHMC6vWRjmHrbJPlR8%2FD3z4uRu58NK7qLuua7RqBgpTT%2FsNrdkyr6ZSuiQDNNeSrCbeBHYoS9mTE2%2BjuQywg6l1qVEdD6HOXUTGiqGEUyJnbo%2B0OrjPGuMV8s9EFPnW8h6crzCgwXDrXoc4Q%2BQOBBWEJWUnwbUGqgkHoHYDW5yvukQLlSH%2FH7Yy4pc0c1hIb9ELZ5aHZC9j4RTS0ZFuJpz3OGR0v4j4TGBtknsQg%2Bri0ry6f0rWHOpRseQXPn4TaSR6LZD%2Bqt57DK7NA1nrUbRpznKdfVdZ4OhLhjdXl7M3PO0OhEjICwxc4MKHQ2sQGOqUBzcNNbbuQNUpaLJ9mhX36Nf6vT71Lsi0Ad%2BeZ%2BzTAi65dF%2BqK2O%2BBd3O7IaNAXln4BLd8ujn4%2B%2BiU5labfVRzgaMA8m2P9fYuJzsRU7TML9F4ytgECY%2Bw04FBPmC5ktJgD4sCOTel3riRTRxBzASmjCd1ygKBE9gdoao3GuTd6SvUoZKJ3ZFkvkaQ%2F4UlLukmY4XwedFAJ5USewlkrWacrifNSxLR&X-Amz-Signature=2205877b35b271e3aa3f84de74e7ab6335047deda949b2f0d81254752d3e4129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643DZ56PK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEHfaso9Dp6IVb4fkWDjXvAj59tFhBjOl1sP765zYnfhAiEA2Zj1Qm%2FeumkP5GxA2%2FRPS1foMCXWIc2cYzq55d8wy%2FsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMQa2BxhcZIHlNUBircA4tW%2FuXZW2jfS%2B06pCMkvaSaJ5iMYGlyFhw2We7ohm74ygqAkYoCrLwptvhEIos3pbu8elQgOzCaU3EHBXq7y2VLGpAAEC32wmk1pd8XzTYso7qyzHG3Jc2sPQWFwk%2Fq08mhRrLGwiSozBzTIO8QmdP2uMFWaFBynC9%2FWY4Yl04kuZhX4M8QRmqn9eHF1%2FiTesqUsJqyoWc2kxmehzT8bAXz8UEOmPiCrVTMhsBP8%2FrM5V0FaLNVcrcXAHxHWmtvV44qXx5INSrjKjPTLjcfHu1yu%2Bbc4MhYNJE7SgU0X%2FJ3lfbpnkHEwI%2BE%2FShYdNpuv%2F%2FigHMC6vWRjmHrbJPlR8%2FD3z4uRu58NK7qLuua7RqBgpTT%2FsNrdkyr6ZSuiQDNNeSrCbeBHYoS9mTE2%2BjuQywg6l1qVEdD6HOXUTGiqGEUyJnbo%2B0OrjPGuMV8s9EFPnW8h6crzCgwXDrXoc4Q%2BQOBBWEJWUnwbUGqgkHoHYDW5yvukQLlSH%2FH7Yy4pc0c1hIb9ELZ5aHZC9j4RTS0ZFuJpz3OGR0v4j4TGBtknsQg%2Bri0ry6f0rWHOpRseQXPn4TaSR6LZD%2Bqt57DK7NA1nrUbRpznKdfVdZ4OhLhjdXl7M3PO0OhEjICwxc4MKHQ2sQGOqUBzcNNbbuQNUpaLJ9mhX36Nf6vT71Lsi0Ad%2BeZ%2BzTAi65dF%2BqK2O%2BBd3O7IaNAXln4BLd8ujn4%2B%2BiU5labfVRzgaMA8m2P9fYuJzsRU7TML9F4ytgECY%2Bw04FBPmC5ktJgD4sCOTel3riRTRxBzASmjCd1ygKBE9gdoao3GuTd6SvUoZKJ3ZFkvkaQ%2F4UlLukmY4XwedFAJ5USewlkrWacrifNSxLR&X-Amz-Signature=e19ee0d1293adac5f5d6d335001a84a42669c9a5c1c1773defa2fbd25305fd9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643DZ56PK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEHfaso9Dp6IVb4fkWDjXvAj59tFhBjOl1sP765zYnfhAiEA2Zj1Qm%2FeumkP5GxA2%2FRPS1foMCXWIc2cYzq55d8wy%2FsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMQa2BxhcZIHlNUBircA4tW%2FuXZW2jfS%2B06pCMkvaSaJ5iMYGlyFhw2We7ohm74ygqAkYoCrLwptvhEIos3pbu8elQgOzCaU3EHBXq7y2VLGpAAEC32wmk1pd8XzTYso7qyzHG3Jc2sPQWFwk%2Fq08mhRrLGwiSozBzTIO8QmdP2uMFWaFBynC9%2FWY4Yl04kuZhX4M8QRmqn9eHF1%2FiTesqUsJqyoWc2kxmehzT8bAXz8UEOmPiCrVTMhsBP8%2FrM5V0FaLNVcrcXAHxHWmtvV44qXx5INSrjKjPTLjcfHu1yu%2Bbc4MhYNJE7SgU0X%2FJ3lfbpnkHEwI%2BE%2FShYdNpuv%2F%2FigHMC6vWRjmHrbJPlR8%2FD3z4uRu58NK7qLuua7RqBgpTT%2FsNrdkyr6ZSuiQDNNeSrCbeBHYoS9mTE2%2BjuQywg6l1qVEdD6HOXUTGiqGEUyJnbo%2B0OrjPGuMV8s9EFPnW8h6crzCgwXDrXoc4Q%2BQOBBWEJWUnwbUGqgkHoHYDW5yvukQLlSH%2FH7Yy4pc0c1hIb9ELZ5aHZC9j4RTS0ZFuJpz3OGR0v4j4TGBtknsQg%2Bri0ry6f0rWHOpRseQXPn4TaSR6LZD%2Bqt57DK7NA1nrUbRpznKdfVdZ4OhLhjdXl7M3PO0OhEjICwxc4MKHQ2sQGOqUBzcNNbbuQNUpaLJ9mhX36Nf6vT71Lsi0Ad%2BeZ%2BzTAi65dF%2BqK2O%2BBd3O7IaNAXln4BLd8ujn4%2B%2BiU5labfVRzgaMA8m2P9fYuJzsRU7TML9F4ytgECY%2Bw04FBPmC5ktJgD4sCOTel3riRTRxBzASmjCd1ygKBE9gdoao3GuTd6SvUoZKJ3ZFkvkaQ%2F4UlLukmY4XwedFAJ5USewlkrWacrifNSxLR&X-Amz-Signature=3ae43c83c1292af2ff68fe72bb2501d27d19e89ec5ea3e99d1232a2e0bae2099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643DZ56PK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEHfaso9Dp6IVb4fkWDjXvAj59tFhBjOl1sP765zYnfhAiEA2Zj1Qm%2FeumkP5GxA2%2FRPS1foMCXWIc2cYzq55d8wy%2FsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMQa2BxhcZIHlNUBircA4tW%2FuXZW2jfS%2B06pCMkvaSaJ5iMYGlyFhw2We7ohm74ygqAkYoCrLwptvhEIos3pbu8elQgOzCaU3EHBXq7y2VLGpAAEC32wmk1pd8XzTYso7qyzHG3Jc2sPQWFwk%2Fq08mhRrLGwiSozBzTIO8QmdP2uMFWaFBynC9%2FWY4Yl04kuZhX4M8QRmqn9eHF1%2FiTesqUsJqyoWc2kxmehzT8bAXz8UEOmPiCrVTMhsBP8%2FrM5V0FaLNVcrcXAHxHWmtvV44qXx5INSrjKjPTLjcfHu1yu%2Bbc4MhYNJE7SgU0X%2FJ3lfbpnkHEwI%2BE%2FShYdNpuv%2F%2FigHMC6vWRjmHrbJPlR8%2FD3z4uRu58NK7qLuua7RqBgpTT%2FsNrdkyr6ZSuiQDNNeSrCbeBHYoS9mTE2%2BjuQywg6l1qVEdD6HOXUTGiqGEUyJnbo%2B0OrjPGuMV8s9EFPnW8h6crzCgwXDrXoc4Q%2BQOBBWEJWUnwbUGqgkHoHYDW5yvukQLlSH%2FH7Yy4pc0c1hIb9ELZ5aHZC9j4RTS0ZFuJpz3OGR0v4j4TGBtknsQg%2Bri0ry6f0rWHOpRseQXPn4TaSR6LZD%2Bqt57DK7NA1nrUbRpznKdfVdZ4OhLhjdXl7M3PO0OhEjICwxc4MKHQ2sQGOqUBzcNNbbuQNUpaLJ9mhX36Nf6vT71Lsi0Ad%2BeZ%2BzTAi65dF%2BqK2O%2BBd3O7IaNAXln4BLd8ujn4%2B%2BiU5labfVRzgaMA8m2P9fYuJzsRU7TML9F4ytgECY%2Bw04FBPmC5ktJgD4sCOTel3riRTRxBzASmjCd1ygKBE9gdoao3GuTd6SvUoZKJ3ZFkvkaQ%2F4UlLukmY4XwedFAJ5USewlkrWacrifNSxLR&X-Amz-Signature=d1506dc9cbf86dd12ee19fdb518a2b6a577c6d09eaea012293c9f12a5a7b1c28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643DZ56PK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEHfaso9Dp6IVb4fkWDjXvAj59tFhBjOl1sP765zYnfhAiEA2Zj1Qm%2FeumkP5GxA2%2FRPS1foMCXWIc2cYzq55d8wy%2FsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMQa2BxhcZIHlNUBircA4tW%2FuXZW2jfS%2B06pCMkvaSaJ5iMYGlyFhw2We7ohm74ygqAkYoCrLwptvhEIos3pbu8elQgOzCaU3EHBXq7y2VLGpAAEC32wmk1pd8XzTYso7qyzHG3Jc2sPQWFwk%2Fq08mhRrLGwiSozBzTIO8QmdP2uMFWaFBynC9%2FWY4Yl04kuZhX4M8QRmqn9eHF1%2FiTesqUsJqyoWc2kxmehzT8bAXz8UEOmPiCrVTMhsBP8%2FrM5V0FaLNVcrcXAHxHWmtvV44qXx5INSrjKjPTLjcfHu1yu%2Bbc4MhYNJE7SgU0X%2FJ3lfbpnkHEwI%2BE%2FShYdNpuv%2F%2FigHMC6vWRjmHrbJPlR8%2FD3z4uRu58NK7qLuua7RqBgpTT%2FsNrdkyr6ZSuiQDNNeSrCbeBHYoS9mTE2%2BjuQywg6l1qVEdD6HOXUTGiqGEUyJnbo%2B0OrjPGuMV8s9EFPnW8h6crzCgwXDrXoc4Q%2BQOBBWEJWUnwbUGqgkHoHYDW5yvukQLlSH%2FH7Yy4pc0c1hIb9ELZ5aHZC9j4RTS0ZFuJpz3OGR0v4j4TGBtknsQg%2Bri0ry6f0rWHOpRseQXPn4TaSR6LZD%2Bqt57DK7NA1nrUbRpznKdfVdZ4OhLhjdXl7M3PO0OhEjICwxc4MKHQ2sQGOqUBzcNNbbuQNUpaLJ9mhX36Nf6vT71Lsi0Ad%2BeZ%2BzTAi65dF%2BqK2O%2BBd3O7IaNAXln4BLd8ujn4%2B%2BiU5labfVRzgaMA8m2P9fYuJzsRU7TML9F4ytgECY%2Bw04FBPmC5ktJgD4sCOTel3riRTRxBzASmjCd1ygKBE9gdoao3GuTd6SvUoZKJ3ZFkvkaQ%2F4UlLukmY4XwedFAJ5USewlkrWacrifNSxLR&X-Amz-Signature=d0ed8117eca359bf679eb1ec7a378599e1334db525e5f785dce3791ad263fe7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643DZ56PK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEHfaso9Dp6IVb4fkWDjXvAj59tFhBjOl1sP765zYnfhAiEA2Zj1Qm%2FeumkP5GxA2%2FRPS1foMCXWIc2cYzq55d8wy%2FsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMQa2BxhcZIHlNUBircA4tW%2FuXZW2jfS%2B06pCMkvaSaJ5iMYGlyFhw2We7ohm74ygqAkYoCrLwptvhEIos3pbu8elQgOzCaU3EHBXq7y2VLGpAAEC32wmk1pd8XzTYso7qyzHG3Jc2sPQWFwk%2Fq08mhRrLGwiSozBzTIO8QmdP2uMFWaFBynC9%2FWY4Yl04kuZhX4M8QRmqn9eHF1%2FiTesqUsJqyoWc2kxmehzT8bAXz8UEOmPiCrVTMhsBP8%2FrM5V0FaLNVcrcXAHxHWmtvV44qXx5INSrjKjPTLjcfHu1yu%2Bbc4MhYNJE7SgU0X%2FJ3lfbpnkHEwI%2BE%2FShYdNpuv%2F%2FigHMC6vWRjmHrbJPlR8%2FD3z4uRu58NK7qLuua7RqBgpTT%2FsNrdkyr6ZSuiQDNNeSrCbeBHYoS9mTE2%2BjuQywg6l1qVEdD6HOXUTGiqGEUyJnbo%2B0OrjPGuMV8s9EFPnW8h6crzCgwXDrXoc4Q%2BQOBBWEJWUnwbUGqgkHoHYDW5yvukQLlSH%2FH7Yy4pc0c1hIb9ELZ5aHZC9j4RTS0ZFuJpz3OGR0v4j4TGBtknsQg%2Bri0ry6f0rWHOpRseQXPn4TaSR6LZD%2Bqt57DK7NA1nrUbRpznKdfVdZ4OhLhjdXl7M3PO0OhEjICwxc4MKHQ2sQGOqUBzcNNbbuQNUpaLJ9mhX36Nf6vT71Lsi0Ad%2BeZ%2BzTAi65dF%2BqK2O%2BBd3O7IaNAXln4BLd8ujn4%2B%2BiU5labfVRzgaMA8m2P9fYuJzsRU7TML9F4ytgECY%2Bw04FBPmC5ktJgD4sCOTel3riRTRxBzASmjCd1ygKBE9gdoao3GuTd6SvUoZKJ3ZFkvkaQ%2F4UlLukmY4XwedFAJ5USewlkrWacrifNSxLR&X-Amz-Signature=78cd02268d8d80b1d33ab9d343d44f2eeaae1e8caa34b0f915993c9cccf8586f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643DZ56PK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEHfaso9Dp6IVb4fkWDjXvAj59tFhBjOl1sP765zYnfhAiEA2Zj1Qm%2FeumkP5GxA2%2FRPS1foMCXWIc2cYzq55d8wy%2FsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMQa2BxhcZIHlNUBircA4tW%2FuXZW2jfS%2B06pCMkvaSaJ5iMYGlyFhw2We7ohm74ygqAkYoCrLwptvhEIos3pbu8elQgOzCaU3EHBXq7y2VLGpAAEC32wmk1pd8XzTYso7qyzHG3Jc2sPQWFwk%2Fq08mhRrLGwiSozBzTIO8QmdP2uMFWaFBynC9%2FWY4Yl04kuZhX4M8QRmqn9eHF1%2FiTesqUsJqyoWc2kxmehzT8bAXz8UEOmPiCrVTMhsBP8%2FrM5V0FaLNVcrcXAHxHWmtvV44qXx5INSrjKjPTLjcfHu1yu%2Bbc4MhYNJE7SgU0X%2FJ3lfbpnkHEwI%2BE%2FShYdNpuv%2F%2FigHMC6vWRjmHrbJPlR8%2FD3z4uRu58NK7qLuua7RqBgpTT%2FsNrdkyr6ZSuiQDNNeSrCbeBHYoS9mTE2%2BjuQywg6l1qVEdD6HOXUTGiqGEUyJnbo%2B0OrjPGuMV8s9EFPnW8h6crzCgwXDrXoc4Q%2BQOBBWEJWUnwbUGqgkHoHYDW5yvukQLlSH%2FH7Yy4pc0c1hIb9ELZ5aHZC9j4RTS0ZFuJpz3OGR0v4j4TGBtknsQg%2Bri0ry6f0rWHOpRseQXPn4TaSR6LZD%2Bqt57DK7NA1nrUbRpznKdfVdZ4OhLhjdXl7M3PO0OhEjICwxc4MKHQ2sQGOqUBzcNNbbuQNUpaLJ9mhX36Nf6vT71Lsi0Ad%2BeZ%2BzTAi65dF%2BqK2O%2BBd3O7IaNAXln4BLd8ujn4%2B%2BiU5labfVRzgaMA8m2P9fYuJzsRU7TML9F4ytgECY%2Bw04FBPmC5ktJgD4sCOTel3riRTRxBzASmjCd1ygKBE9gdoao3GuTd6SvUoZKJ3ZFkvkaQ%2F4UlLukmY4XwedFAJ5USewlkrWacrifNSxLR&X-Amz-Signature=4c4cd4ed33d9fdd9418d04f0f239b4e0a8d2ec8c897329827f06bbde7245299b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643DZ56PK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEHfaso9Dp6IVb4fkWDjXvAj59tFhBjOl1sP765zYnfhAiEA2Zj1Qm%2FeumkP5GxA2%2FRPS1foMCXWIc2cYzq55d8wy%2FsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMQa2BxhcZIHlNUBircA4tW%2FuXZW2jfS%2B06pCMkvaSaJ5iMYGlyFhw2We7ohm74ygqAkYoCrLwptvhEIos3pbu8elQgOzCaU3EHBXq7y2VLGpAAEC32wmk1pd8XzTYso7qyzHG3Jc2sPQWFwk%2Fq08mhRrLGwiSozBzTIO8QmdP2uMFWaFBynC9%2FWY4Yl04kuZhX4M8QRmqn9eHF1%2FiTesqUsJqyoWc2kxmehzT8bAXz8UEOmPiCrVTMhsBP8%2FrM5V0FaLNVcrcXAHxHWmtvV44qXx5INSrjKjPTLjcfHu1yu%2Bbc4MhYNJE7SgU0X%2FJ3lfbpnkHEwI%2BE%2FShYdNpuv%2F%2FigHMC6vWRjmHrbJPlR8%2FD3z4uRu58NK7qLuua7RqBgpTT%2FsNrdkyr6ZSuiQDNNeSrCbeBHYoS9mTE2%2BjuQywg6l1qVEdD6HOXUTGiqGEUyJnbo%2B0OrjPGuMV8s9EFPnW8h6crzCgwXDrXoc4Q%2BQOBBWEJWUnwbUGqgkHoHYDW5yvukQLlSH%2FH7Yy4pc0c1hIb9ELZ5aHZC9j4RTS0ZFuJpz3OGR0v4j4TGBtknsQg%2Bri0ry6f0rWHOpRseQXPn4TaSR6LZD%2Bqt57DK7NA1nrUbRpznKdfVdZ4OhLhjdXl7M3PO0OhEjICwxc4MKHQ2sQGOqUBzcNNbbuQNUpaLJ9mhX36Nf6vT71Lsi0Ad%2BeZ%2BzTAi65dF%2BqK2O%2BBd3O7IaNAXln4BLd8ujn4%2B%2BiU5labfVRzgaMA8m2P9fYuJzsRU7TML9F4ytgECY%2Bw04FBPmC5ktJgD4sCOTel3riRTRxBzASmjCd1ygKBE9gdoao3GuTd6SvUoZKJ3ZFkvkaQ%2F4UlLukmY4XwedFAJ5USewlkrWacrifNSxLR&X-Amz-Signature=ddeec512cb4778dd6aec7fb00de7cb7c9772efc584be7e6e4ce6c855e3f99bed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643DZ56PK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEHfaso9Dp6IVb4fkWDjXvAj59tFhBjOl1sP765zYnfhAiEA2Zj1Qm%2FeumkP5GxA2%2FRPS1foMCXWIc2cYzq55d8wy%2FsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMQa2BxhcZIHlNUBircA4tW%2FuXZW2jfS%2B06pCMkvaSaJ5iMYGlyFhw2We7ohm74ygqAkYoCrLwptvhEIos3pbu8elQgOzCaU3EHBXq7y2VLGpAAEC32wmk1pd8XzTYso7qyzHG3Jc2sPQWFwk%2Fq08mhRrLGwiSozBzTIO8QmdP2uMFWaFBynC9%2FWY4Yl04kuZhX4M8QRmqn9eHF1%2FiTesqUsJqyoWc2kxmehzT8bAXz8UEOmPiCrVTMhsBP8%2FrM5V0FaLNVcrcXAHxHWmtvV44qXx5INSrjKjPTLjcfHu1yu%2Bbc4MhYNJE7SgU0X%2FJ3lfbpnkHEwI%2BE%2FShYdNpuv%2F%2FigHMC6vWRjmHrbJPlR8%2FD3z4uRu58NK7qLuua7RqBgpTT%2FsNrdkyr6ZSuiQDNNeSrCbeBHYoS9mTE2%2BjuQywg6l1qVEdD6HOXUTGiqGEUyJnbo%2B0OrjPGuMV8s9EFPnW8h6crzCgwXDrXoc4Q%2BQOBBWEJWUnwbUGqgkHoHYDW5yvukQLlSH%2FH7Yy4pc0c1hIb9ELZ5aHZC9j4RTS0ZFuJpz3OGR0v4j4TGBtknsQg%2Bri0ry6f0rWHOpRseQXPn4TaSR6LZD%2Bqt57DK7NA1nrUbRpznKdfVdZ4OhLhjdXl7M3PO0OhEjICwxc4MKHQ2sQGOqUBzcNNbbuQNUpaLJ9mhX36Nf6vT71Lsi0Ad%2BeZ%2BzTAi65dF%2BqK2O%2BBd3O7IaNAXln4BLd8ujn4%2B%2BiU5labfVRzgaMA8m2P9fYuJzsRU7TML9F4ytgECY%2Bw04FBPmC5ktJgD4sCOTel3riRTRxBzASmjCd1ygKBE9gdoao3GuTd6SvUoZKJ3ZFkvkaQ%2F4UlLukmY4XwedFAJ5USewlkrWacrifNSxLR&X-Amz-Signature=dafb742478b6606beeab84972d7d7a2611362614f1a021161d23b0f99cc40069&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WILJLYAA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICtpKysLntlAtprhBRnNjbiTjbp9x9DQE%2BCJ5hGvGl%2BoAiEA%2BHkEXFDpchVulTwxP5iUVdLeATILwljWuLLjTMaJm3kqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYQYYmznr2XngssdircAy6W7aw%2B%2BLLpHwd0MzURkKa2UJplFMzCjUgDobtGwtOXOtGBeb9Hg0SUW5DNvZOVUwQqLj%2F%2FBN8PVzfxkA8KTz%2BqVUrLLHr92pSMvyyTDaTWTRSPIX4Z8rDAvpJKJMsYiFKB81rZCAmsXnDRikgf7t9Q%2FEOxFA5AVLIkfFJsUevpVBWecWMfeUyzN68INbYMYn2na30cGzZ51RQE3xsf5i9P5bNM4bF%2Bvx6ZKGUEAsjfHv4lx0C2F0FqeltyLONZBxw1yX9NOfQ3DQPi7hYACz73X%2FPbpzXPy6Qhl8EGTEBuGt60OQBag319uLjDzii%2Fo6QwEuaQOo82Lhyv9ve4SwsMT1c4nqL%2BH32J3s9lvqFVsCW3m1FGdWwcsih%2FcbCivksUvbBRDVE1zpkyoIKGZ5bkKIMyvFrNLhiHTTV4QMP48nPDpTTPqSUErmyv%2ByJ3zEUwhGF%2B9s6hsDmnJXHttdmlLIJgazuRYVS4qAuYI%2B%2B4hq89jAZmkOK22yMfnFFo%2F%2BETxY79%2FC45PVODYQEwx4U51ot0MewXnCb5uJoZunjuDSmRn3mWZcFKr3gfKimnfPDtPykZJ%2FVCMmZIa9CZSzbt3ah7nFAqkp9PKAs1g82ExQC8yQVE2UHhfGMBMNbQ2sQGOqUBon7BaHX9slInmb5sjode%2FZrLGU129J8oQKblf97Td1W5QRjOKk3mPX%2FUw0irunA7ANxeByHa9tSRXpnSiIsgp4Q9H6fDJkXTa5rLf1v574n13x1c%2Fo8u5Qhf8PzQSsVwqtEXDnFlj0U%2F6QbYYFzW84c%2FTAUe4E2ktdja4gTfjbkDvXcH1Xl05Cbe3m3QWnk9O0M8v8K6y0h1ysrAx0luH5YQYEY5&X-Amz-Signature=26618e32f9e3ce3cd24dc5051a9b7e4b9d93c24e4a9551ed56a239bd1b0f85a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BMBALI3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDGub%2F2Hv7gwRDETOAVEQJwXaU1pkRsGloX67HL%2BhFU5AIhANmoD4MrBthKqKznRC%2BmzCX7qiwQAVxINRZIqhX3ouyXKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNdn9YL%2FtUmtPwezMq3AMM1ViplH99TKbEaMo8WyyW7gV%2F2oUfTQTTy8JuohECIWn%2BdKGwMvE648v4MDuuMY39T4oHy71vTWXYncOm8ziwR2GO8pSrUb4nIvGxZJh9%2BcSRJ3FdADphUyX6umKUyl63dg2W%2BMuku7KXP8iELSbcEegNsWG1%2FDQGIj6wbF%2F9zlyjERs5rb9Se3A%2B8FpmCEQK1vtR1K07R%2B%2BjF22U527vjpxiG1bOY68adwIzDX%2FbbbEkMhBlBbc5gRNNfQMkroKaJuuu9TgzTaTWiNMTah1kceaw%2B%2FwvMt84sgI3R5T7%2BiXXzXmYetbUgVyWCypXqfTMnBWncqbHIlj2WVu0RV1tIQLNkLZs5sH3n8vCn8bGSJmqz2Eh%2B9BB6UD%2B9Sytz4LsFQjQbygDHSze%2BhK0bo7yR0dU%2BDANxGSueGawlasBegzo%2FzndxkCYcRAYSofr7gwWEf4Q1Swk0IprIs20M1UaTsiTCBuF5yqi%2BllXKqoifEXFb3KAR05gkWpkof564T5tDtR8ACZSbNE3JKYgApKkOmWwEX4p2tIZ2KRrLkC7MbLbMciGUJHkONJA6jvucnoYLvneyqgy9Vw8HZLgws5dEF9MdgvobM62u8GlFocZ7se16TP9lLoUuIADITCE0drEBjqkAV3ZwhYpaEqhGYBkNbg8mSS3PtJI%2BitNGMh32aa8ybiiKJ8wqguxHk0tFOSEm5jygMBeWmZDuPm%2F75Wj0Wnd1ovoOdvnufPb0wVMuxwSUhxlynYV%2B5AvTsMawqF4GFL9VOYiHjsZc%2BKomZ%2Fj3HQnRYxZ1vEPFqKxEkqKMr%2BO5ppqOs5K5CtBt4FEruEkatzFLkaIhOq1IL%2FMQcMpLY3yKAnr9hmW&X-Amz-Signature=e486eeb08bd8be393905175009ab58a6ce20907d7118020cb0da8ecee54e7db7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEHR47NX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCQ0JaCuw%2FlmuVWgUGO52qN5Ac4aKGj%2Be1dj5tvMv%2B5HAIhAKcDwzBbXd03Dd6TWax%2FH7Nbb%2FIqQmzWNfY1c9jOreqUKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUR7DiC6yxOiJqt6Aq3APF5ypTzDQKouOpoQctEl3I3Iz5x8PbUxAZuipThqEEIynRMRzzIGcHhSuf%2FKek%2Fv0tSoU4aEmI1sMDQxdwZG8ycaZWR0cyBnqOQbS4hOIKoQyeao0uxDBRwVClpbfvsIL2Bz3tKDSqJovsHZWo1UgJKqd7SDc%2BgFctRGYVNXNimjhqCsOrIVFKl3hMq8h5kGDpTfyNPcfD8%2F04%2F5pA2MYpizlUL%2BEjzLDQXh9H%2FmkkF9peltXmtX84pTgbu7bpEC9uALK1ZhwLXHge4W1OAc4Zvkfb4tAyoBcdMxYhH4mIrP2PR84y%2FCi%2FJ5%2Be4myToVFZVVscvSkPexW%2F8G7sBkbBGerjFkBhiZUdoJptA4zlBgde0PyXyKFQeGudi7zcDT6Zz7%2FrWMgLlGs5bQeJgIEqLdI6ebbiqRqY2Ihaddy8RnKfbBORkKVCtJEVdqALka8tp22N5xoLWYGrehrlb7VB%2BIj2ObgG7be1Cjn4pPAF3Y1UNhbjXB4hg90KfaVVFaEFrgTsJrEpSbCbfaeTYpo3fWuZDHAc6UmGE3f1mdvzmSLHiKNNZn%2Fv%2Fn3BvUKwSMEuJQzYveC02tMJezCoF7DAnCwU9cmiprGL%2Bn28jv7G3Ui1PTKZ%2BobKG%2BUNKTDr0NrEBjqkAW0xqeaf4bd2TfSFYp8NGT4iPzIt%2FBC62i4oKnA146uCdgHkEbFtH8EYa1Jgm5JPA9NbL7QKU5yAjpUEXwBve9yKNQ0OFTutKhjM0%2FS4wujrmItHVNrcZSCvj6aQWfJOwoeLwfsQJK1j7Vb5O0QYSnpV3zCtnm8RQevgFZmgHOARP%2BEXNV%2BlXJBaQVjkvgsGae4nqOFFH55S1D3HyZvpXprEyyrE&X-Amz-Signature=5d558fa182cd61c89a0cfb51881d622b8a0fad48d9e216fede599431b0a6e005&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643DZ56PK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEHfaso9Dp6IVb4fkWDjXvAj59tFhBjOl1sP765zYnfhAiEA2Zj1Qm%2FeumkP5GxA2%2FRPS1foMCXWIc2cYzq55d8wy%2FsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMQa2BxhcZIHlNUBircA4tW%2FuXZW2jfS%2B06pCMkvaSaJ5iMYGlyFhw2We7ohm74ygqAkYoCrLwptvhEIos3pbu8elQgOzCaU3EHBXq7y2VLGpAAEC32wmk1pd8XzTYso7qyzHG3Jc2sPQWFwk%2Fq08mhRrLGwiSozBzTIO8QmdP2uMFWaFBynC9%2FWY4Yl04kuZhX4M8QRmqn9eHF1%2FiTesqUsJqyoWc2kxmehzT8bAXz8UEOmPiCrVTMhsBP8%2FrM5V0FaLNVcrcXAHxHWmtvV44qXx5INSrjKjPTLjcfHu1yu%2Bbc4MhYNJE7SgU0X%2FJ3lfbpnkHEwI%2BE%2FShYdNpuv%2F%2FigHMC6vWRjmHrbJPlR8%2FD3z4uRu58NK7qLuua7RqBgpTT%2FsNrdkyr6ZSuiQDNNeSrCbeBHYoS9mTE2%2BjuQywg6l1qVEdD6HOXUTGiqGEUyJnbo%2B0OrjPGuMV8s9EFPnW8h6crzCgwXDrXoc4Q%2BQOBBWEJWUnwbUGqgkHoHYDW5yvukQLlSH%2FH7Yy4pc0c1hIb9ELZ5aHZC9j4RTS0ZFuJpz3OGR0v4j4TGBtknsQg%2Bri0ry6f0rWHOpRseQXPn4TaSR6LZD%2Bqt57DK7NA1nrUbRpznKdfVdZ4OhLhjdXl7M3PO0OhEjICwxc4MKHQ2sQGOqUBzcNNbbuQNUpaLJ9mhX36Nf6vT71Lsi0Ad%2BeZ%2BzTAi65dF%2BqK2O%2BBd3O7IaNAXln4BLd8ujn4%2B%2BiU5labfVRzgaMA8m2P9fYuJzsRU7TML9F4ytgECY%2Bw04FBPmC5ktJgD4sCOTel3riRTRxBzASmjCd1ygKBE9gdoao3GuTd6SvUoZKJ3ZFkvkaQ%2F4UlLukmY4XwedFAJ5USewlkrWacrifNSxLR&X-Amz-Signature=9416ea9fedb3022285af61815ee081d0307508069cb625730a9ca7d5c491dffd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VD2R5RF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDecfy7qFKlJy8Z2BrU2rdzBIR1LguABzTPxP7Enss5UAiEAzq4NvZegn36Fk2nqAEHHcAof%2FjuGNn73NSuzNg4rmzwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKr%2B25pprVeywOa3dSrcAwFQBJdgFnwmtKgpZ2%2B0XwMkK06kINS2SgCE0bRTG5z5OzlME0VHhsDiByV9rIODJ8sXL7NCGJkeVS9G6yvII4cpeathL9kYnutxnsEMy04CBVlL6t8w4mNsywWYvRNEpIroDb7blz%2F0AwxW%2FMjDz07XzrJiRe3pztthrMOK%2Bdcb4nGPv8Hy6Ory%2FsKBUjbtbaDBEfJJ7AtxkiIMIXxMFAQekX1OZq7CNDaS%2FzGFbx9jnLgPcZL2t7VlUGA9X7iUbfMtO6p7nmWlsq6DjzRzDXWeUceV2UkY5P1erFI7ivDhh8I6h9TQx68tHExrfKKqZNItohpk5XpsattJU2xsfO9GGaF1LMJxGU4%2BdlsrFxxsCPA%2F4hedOPy8waKsqnLUgFKNM1dzjedCx4SSjroKtE%2FroSsCriH7AuVH1s5CnH6LbFsNKg4iGDNBq9wYFnfbIv%2FG8bz6c9P7b4QPubndPQz%2FZKgjcUD1lsrIcq7BeVf8LAZz4gqE5pUvKuZNmIcDrzHlFvENB5oastUjoHpWCMwM6WSZ4N7aV9ooZDhHnjHMjiFMaqaKmn5it2SgKstX1aj%2FUSKlG5RDc%2BCzpR%2BZSAwAdTp0aY9HCOUJtdmekBiKqi%2BX%2FB1fyTjQZP6bMKHR2sQGOqUBIf78MqRtWwIuZfRYcoqr1WukB8gLZhLWqpmb7PSRYELHqSyGtsvV6tzNm%2FZCzHnKV%2B1u1xnnr5R2r6U2AaFcEoOwqa9CPHgLNJ%2FBffuPSUSfEDc4OpFcATg0hhPUJ3aAHXNWmbMKVqZEs%2FnF7lLeWA%2BezsSFYSKkfdRMZCIm9X5S%2B4AF75T%2FMO2daLN7EWZBxetNJVOZUCdsBxra56Nc%2BtvIR%2BiN&X-Amz-Signature=d7f9c7371e9a22217caa7f5491cf8a46b1759b8604f54b55a5a75741d5746ec7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643DZ56PK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEHfaso9Dp6IVb4fkWDjXvAj59tFhBjOl1sP765zYnfhAiEA2Zj1Qm%2FeumkP5GxA2%2FRPS1foMCXWIc2cYzq55d8wy%2FsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMQa2BxhcZIHlNUBircA4tW%2FuXZW2jfS%2B06pCMkvaSaJ5iMYGlyFhw2We7ohm74ygqAkYoCrLwptvhEIos3pbu8elQgOzCaU3EHBXq7y2VLGpAAEC32wmk1pd8XzTYso7qyzHG3Jc2sPQWFwk%2Fq08mhRrLGwiSozBzTIO8QmdP2uMFWaFBynC9%2FWY4Yl04kuZhX4M8QRmqn9eHF1%2FiTesqUsJqyoWc2kxmehzT8bAXz8UEOmPiCrVTMhsBP8%2FrM5V0FaLNVcrcXAHxHWmtvV44qXx5INSrjKjPTLjcfHu1yu%2Bbc4MhYNJE7SgU0X%2FJ3lfbpnkHEwI%2BE%2FShYdNpuv%2F%2FigHMC6vWRjmHrbJPlR8%2FD3z4uRu58NK7qLuua7RqBgpTT%2FsNrdkyr6ZSuiQDNNeSrCbeBHYoS9mTE2%2BjuQywg6l1qVEdD6HOXUTGiqGEUyJnbo%2B0OrjPGuMV8s9EFPnW8h6crzCgwXDrXoc4Q%2BQOBBWEJWUnwbUGqgkHoHYDW5yvukQLlSH%2FH7Yy4pc0c1hIb9ELZ5aHZC9j4RTS0ZFuJpz3OGR0v4j4TGBtknsQg%2Bri0ry6f0rWHOpRseQXPn4TaSR6LZD%2Bqt57DK7NA1nrUbRpznKdfVdZ4OhLhjdXl7M3PO0OhEjICwxc4MKHQ2sQGOqUBzcNNbbuQNUpaLJ9mhX36Nf6vT71Lsi0Ad%2BeZ%2BzTAi65dF%2BqK2O%2BBd3O7IaNAXln4BLd8ujn4%2B%2BiU5labfVRzgaMA8m2P9fYuJzsRU7TML9F4ytgECY%2Bw04FBPmC5ktJgD4sCOTel3riRTRxBzASmjCd1ygKBE9gdoao3GuTd6SvUoZKJ3ZFkvkaQ%2F4UlLukmY4XwedFAJ5USewlkrWacrifNSxLR&X-Amz-Signature=04491a1af484997e7acfcede436f0d240e16ccc87b39b25c1bea22fdc8851a3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGMXJB5B%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIHyWFOCtGGoRLvcrooRy2E1GuW6oM3%2FEqAonjprOiZTGAiAosEyZpkjkbVeBi%2F5Kpxa%2BmP08ngl%2FQmptR6Dz8hH%2BzSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcRetXhBSRTCmx737KtwDbMxyV0ie5xMQtbLu4ZgY%2BkUGjs1jwT%2Fnt4aQ09656mnQ8FA0ySosnQAE8Yj%2FzksoJ8kIegEgdnzJXm1XIrb8Yam1oSqVIyuAMbtFjFzKXbcSKnkyTfbRbE%2FQH1vglewwvxm0Oi5kcu7ODnFvGNVaraxDzzso4RBQ1IMF21G%2FrgYw8PH97JPKh1kWMKqWd%2BipK0E1HXLwJH%2BWr%2FiNTm7mSwLQ79bc2D4RNsydT2hDuFCuvF4TSpAYpfpYC%2BpvoIhZFJmSpvg%2F23db8lR68PxX1bfp%2FnuV%2F4AyzGUhLcvbK7%2BIEYhrpvTlWHeFsSZOa00jTdZC9tkmgTl%2BofOfMd%2BpANfUsYxOmf3ECkGgy1Jo%2Fh2Yhme8wnf9a3sarZmi3%2FxoZ09o4HZWi9qXZvXFse2bLlmWBZJih%2BDSniLSOOInlFKWlPqeaZiNLJVOvZUgwRJjcWYrJtcO064PBL7NWpBpoRK%2BCtd7pR8WEOsqN3MWKOEZVm5PQoD7F1WbAxOQuObbjSO8lNu23enwJoBmxj2Y%2BWyL9exHAPPFbpDW6SpeE4NGveVQE7NvEJd67ZeT3eUTT6WkYXkxtvgq10LsiOD%2B5mKJrKs2WKsz1AGey%2F6hF7p7z8zaAE%2BW6VkwOzkw39DaxAY6pgE27g2vMqHuGV9n3mulub32gotwahfTqzRpI3RY175YCWRQONQR2VGC9JXHte0o0SuFA%2BSuO9YpZzz93XsC44NXQeJH6ZPHaSXaTACdQ9WnqS0iISO5VIS29lFwx7l8Zj9z6A7dVplR2PoYdNDkjwJFb2Ms7cMEv9qGtORgJYFX7hnkpTL9eOxTiSwivPM61iKt4S3rNYiOPooHZFLk3TmK9lHKJz%2Bm&X-Amz-Signature=f044e6d182129450aae136de05f6fb45f56e935ad36f85e3efa7e4919f153f58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643DZ56PK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEHfaso9Dp6IVb4fkWDjXvAj59tFhBjOl1sP765zYnfhAiEA2Zj1Qm%2FeumkP5GxA2%2FRPS1foMCXWIc2cYzq55d8wy%2FsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMQa2BxhcZIHlNUBircA4tW%2FuXZW2jfS%2B06pCMkvaSaJ5iMYGlyFhw2We7ohm74ygqAkYoCrLwptvhEIos3pbu8elQgOzCaU3EHBXq7y2VLGpAAEC32wmk1pd8XzTYso7qyzHG3Jc2sPQWFwk%2Fq08mhRrLGwiSozBzTIO8QmdP2uMFWaFBynC9%2FWY4Yl04kuZhX4M8QRmqn9eHF1%2FiTesqUsJqyoWc2kxmehzT8bAXz8UEOmPiCrVTMhsBP8%2FrM5V0FaLNVcrcXAHxHWmtvV44qXx5INSrjKjPTLjcfHu1yu%2Bbc4MhYNJE7SgU0X%2FJ3lfbpnkHEwI%2BE%2FShYdNpuv%2F%2FigHMC6vWRjmHrbJPlR8%2FD3z4uRu58NK7qLuua7RqBgpTT%2FsNrdkyr6ZSuiQDNNeSrCbeBHYoS9mTE2%2BjuQywg6l1qVEdD6HOXUTGiqGEUyJnbo%2B0OrjPGuMV8s9EFPnW8h6crzCgwXDrXoc4Q%2BQOBBWEJWUnwbUGqgkHoHYDW5yvukQLlSH%2FH7Yy4pc0c1hIb9ELZ5aHZC9j4RTS0ZFuJpz3OGR0v4j4TGBtknsQg%2Bri0ry6f0rWHOpRseQXPn4TaSR6LZD%2Bqt57DK7NA1nrUbRpznKdfVdZ4OhLhjdXl7M3PO0OhEjICwxc4MKHQ2sQGOqUBzcNNbbuQNUpaLJ9mhX36Nf6vT71Lsi0Ad%2BeZ%2BzTAi65dF%2BqK2O%2BBd3O7IaNAXln4BLd8ujn4%2B%2BiU5labfVRzgaMA8m2P9fYuJzsRU7TML9F4ytgECY%2Bw04FBPmC5ktJgD4sCOTel3riRTRxBzASmjCd1ygKBE9gdoao3GuTd6SvUoZKJ3ZFkvkaQ%2F4UlLukmY4XwedFAJ5USewlkrWacrifNSxLR&X-Amz-Signature=00fff93f4fb6c9d49bc39631fc91069eddea43824e8dcda13476650cf0d0ac55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D7DTGVY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIH6FAOyUzdQbTSJ9r395uNHfVVzbGvKw4eYk8FEktaG6AiAPKZFKpXpesqe%2B3i1c4icxvq1dmElTQKMhu%2BAg99iN2yqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTRuLF5q1Zcxf%2BajyKtwDUAnBpTb86MvJFhEhZywjL%2FL2uyfn0bQ7TdfY6tWz%2F2aEwq5jfXJRPopf3gjhHCAI8j3zBpoOU5D6Vyjs2ka4Hu5%2FuY8DafKGdKK2MSgFhHn851mP%2FsTGHp%2FeF3vLE6QcpLyhxWn3GJqzT9KBXP4%2FUZCSifTVzmrCq6GO31C0qZfi6imrJL4CfmTvVI%2Bxpe%2FX0qrAhS%2BSB7e3Ho7wBWwpzG9Ikc0jXMOw1FXI%2Big5xcaBBY9CJowyGjWX0gZWExmNuVmBEa%2F53oUeT8hJF9R2%2Bcb8eMVE02gK1pJuDn57tAzdCHL2zMAoYV0M%2FFLO%2FvLa3Rnaxm%2BzNwElG4sKdVfqSvf4bmhtReFCYqWxonhr2t4dGK3N%2BlIQZk8U0FEuHvdmgvezO8%2F864XXQcc9m9BDq546aaUyRBWet14r5L54%2B%2F8wVw9VO6IqU%2Fu2DtdPJSO%2Fvg3%2FQEu%2BnJLv8vYn6SCMZQVUrvUaW0Ox7Hcs9T7vn5T1CGSiDuDGCPDaYaiUNVWeqLdIk8YrMorUgC8wQG45RRNGsTeOi4F3SWRRansSSJdr6YEKio5yP2LC%2FxT4luwcr5nHcGX8KXDIF62PZivEIus2AxeVZufpD2H96mAgOKQWbBAp9wZIE5o0tLQw39DaxAY6pgFLvGd5xF9VtlqgaLFjZfPPvfS2xpImLpQ0bTKzu9887rVnOUPGA2iuBMJNmK%2B7SwL%2F5ow8IFxsj8In5LFPFrSDeZv1nfCcgKXq6XDpnBSYDglQgzhC1XhTPkvCHMkiu6L26xWBnuzyRoP1E18DaowZWQv3hXx8XwiOQlLiuzyFOvhXBu2MDNNyNiD0Z5X2gWgm61Ch18Fs%2BnbbiaFtWDldXdp3iIT%2B&X-Amz-Signature=1b51b358dc91adb7e0c3a9e2d02c743af37e23e99bb1d140a20544f40ded463a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643DZ56PK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEHfaso9Dp6IVb4fkWDjXvAj59tFhBjOl1sP765zYnfhAiEA2Zj1Qm%2FeumkP5GxA2%2FRPS1foMCXWIc2cYzq55d8wy%2FsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMQa2BxhcZIHlNUBircA4tW%2FuXZW2jfS%2B06pCMkvaSaJ5iMYGlyFhw2We7ohm74ygqAkYoCrLwptvhEIos3pbu8elQgOzCaU3EHBXq7y2VLGpAAEC32wmk1pd8XzTYso7qyzHG3Jc2sPQWFwk%2Fq08mhRrLGwiSozBzTIO8QmdP2uMFWaFBynC9%2FWY4Yl04kuZhX4M8QRmqn9eHF1%2FiTesqUsJqyoWc2kxmehzT8bAXz8UEOmPiCrVTMhsBP8%2FrM5V0FaLNVcrcXAHxHWmtvV44qXx5INSrjKjPTLjcfHu1yu%2Bbc4MhYNJE7SgU0X%2FJ3lfbpnkHEwI%2BE%2FShYdNpuv%2F%2FigHMC6vWRjmHrbJPlR8%2FD3z4uRu58NK7qLuua7RqBgpTT%2FsNrdkyr6ZSuiQDNNeSrCbeBHYoS9mTE2%2BjuQywg6l1qVEdD6HOXUTGiqGEUyJnbo%2B0OrjPGuMV8s9EFPnW8h6crzCgwXDrXoc4Q%2BQOBBWEJWUnwbUGqgkHoHYDW5yvukQLlSH%2FH7Yy4pc0c1hIb9ELZ5aHZC9j4RTS0ZFuJpz3OGR0v4j4TGBtknsQg%2Bri0ry6f0rWHOpRseQXPn4TaSR6LZD%2Bqt57DK7NA1nrUbRpznKdfVdZ4OhLhjdXl7M3PO0OhEjICwxc4MKHQ2sQGOqUBzcNNbbuQNUpaLJ9mhX36Nf6vT71Lsi0Ad%2BeZ%2BzTAi65dF%2BqK2O%2BBd3O7IaNAXln4BLd8ujn4%2B%2BiU5labfVRzgaMA8m2P9fYuJzsRU7TML9F4ytgECY%2Bw04FBPmC5ktJgD4sCOTel3riRTRxBzASmjCd1ygKBE9gdoao3GuTd6SvUoZKJ3ZFkvkaQ%2F4UlLukmY4XwedFAJ5USewlkrWacrifNSxLR&X-Amz-Signature=a26bc50e8c75ad0122849271f4a3d0608c7d33134c1be62afde65d1dacf1e87a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF6DRTEB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCk48VoMiqls1r8oI9RYJjxHyYZwh9gumz7JJXxaxqqtAIgbST2%2FG%2BcHOMfsgxjpVfriQRUzd1lZhCfPrlk5Y33%2FY0qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJUQUWZNOZ0Y6aWZxSrcAzHLouuErBk4%2FPS3JfiuiQxcoHDhWi2vfghVHwN3WNf1BQW9ObodPGhYtGersCxYmOaTJuAo6ZTa6JBajvuMdBtsteS8WG6PXjKFJmYwNo7lVI8swjbuIZ8eC4KrJ7iihJcRcDwY5yI8a4NBP1YYyF%2BN56wtExFCyPVDdmQfqDrHa%2Ble7y8iIlf6HPE14W2BvcSydJ3%2FOSbO3%2BOTf9b2WJrRWo0y3Mkr7OSwEBx8kKDs4Jm1iGnlPxJJAHd6vRwXQYva3seK8ALp5Hp4Wy6mmkOUKD4imyDKPAjLkpX7i5Oj%2F36KhThhgDNbu7tz5sfwU3o62GHDSaowgTWpyCbQ9lVGJDJFh72KrAfGpEVj%2BPb0kIIanT%2FEQ4j0TYRX4rq0a%2FAwx7vGlVY8BK9JpjsF0hDw2vzU9CGKrBE9l46qUL%2BIL6AXF6qrUONbHyDD8HbnsF0Wr4vMja8GHvX%2BjIu525g5IuvPxLtb7NaMG0p54wTCeF95kai9944UyYOX8JN69X1DuJLgQxp2%2BkzzEDGZlDzgLiVMHAvTAqb0JR%2FfFkpslGJP76bPUEc69grGixrzlBZCZU7Fi54m6ayTiz7qH8%2FdYayVNM7HZrZxzYCuQ7nPLdNM24BvsoK9OquGMMrQ2sQGOqUBuuYVAODh7a2fZE1w4MYTRuHpSr%2BEsdTrCkKd5SfRqSvtMFeIhZZfPsw2tCQc3UcC9lx8igkLIkiyEplobWDz2QzBWADyfuMfdc9YumNgVZVDSpBVSnhJOeaHsJci4Cqvjq1LIuOHkeAOn5opj%2F17deYJYqbKaj65PHGVlR6LQFm85mftL57RL490qaLIFHcSNawGT%2BKaPmQVtJb%2B4PV3u%2BnXlVDT&X-Amz-Signature=3cb687cb1476a8d1ef5c47e82049310d285ac014d35564f2808787e7f1576fe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZRCVALB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDUelI0x%2B2cgyQxhFSmSYfyLDY2zhmoopjlOqXrbspxkQIhAOMdT1XbrXtdySmQL3oJFZt6P1dG7WbIE3TxZaNj2Ow0KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9NhTsqpuaLgTOUgEq3AMk8ThQiVIrUviN339Ih6%2FeCcK4en5tz%2Fk4V9GXDgRiXnWvd4F%2FErp5KtrFvmjpS7H7q3RIoRbX9K6QeySswowHj6e2dXw9pnSTUAYrE6oXk5%2BMc7UJNJ34EqORzpYXC6MFTXNhDkuO1beAmAkuOMEEJ9wI4O2tgZ1y2GmwUAEbKWwv020FeTcllsFf7dY8rQlneVjhODBUAKVI1u1tzk%2FL%2B1RUrK6Xd7OTc7x8DRbz9Ja0Sxg0aJcDqndzYkh0J%2BrERF09G5mXKUdh2jgFn92nBdYDMYHZO5ustCt1HtEbmtO8GqKkrjR19OUHCuEdj1I6GKpAAQ54fWjAik2V9EfLo0Gd8XyCYj74LpPjle4AIq3%2FWcDpb2C3jOpwLuVZWxEM0TnkicETX9l3IyP9iaSBcX4ni4XtbtouJVS2Jb3I1dHW5vkPX%2Fh%2FjpbB1US%2B4orJ3Z5EepVkGaT%2Bk6DJ0Hj85vHTKE6OUsO2nVWKI1GGTzRZwkvo8umrljvHxLGp8LI0ptRHqYmzkTva0EVxgg9RAXJpT5qEJg6KmtcGf6jtcPRihRul8hswldDmcMNsONdoCXMX7O2aQs5DmS3qSBRursYmc5c4bctp1BrPiQdB1KspTHlAcTRzXrHzaTC50NrEBjqkAbCWHggRU1VOzxUyJe5nq8juNiexeuHCElA80KCJhqzng4M6C8GK1ia2YvzN9QJVGUt1QVJgV21TwnETdmlaT9OwJCRnx0QV9xoYkM2t1YIV%2FD8vRSfHRPgwOsgIiLqeprNijBfALNSysYEylEgqTGH4oT0rv1FVcbTiAZdwKLdbPZFqPSaCZiazJPYy6k5AREF5XNaTXYumfVHEem36zjaDT8tJ&X-Amz-Signature=c27d9318f09886516bcf180a25d77cca1c4731e0da6f6cea4dce73518e1337db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP6MMSI7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIA2JCjTtMg9ngzAgHAQxPMcIsuv6o41f%2F5Mr%2FIZHUYYAAiEAlEZplTdRGgvcpvQiLiYy3LD%2BZDWbkshwHSVOzxeKHosqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3QcGAPp7ihy43ClircA3NrryfgkJOZFUJPOwXPPH4Matkf4LX4FcRZ7ZVv5wohDGI6ZN2SSkm7Og7gq3G4SGBO1x2PgoGK0lw7tj1NRN0eduGSA4C2JLhXrlLIPV98aGHYRrV1rHoozjESFBkd5%2FWTzVkJWIMSW5%2FgHWRxofrPUVqbY6PiHXeylQy4XuiPxrWJwQA%2FiFS1rfIWdhTrGwTUGLrvfsVe7ItjZx2p3u8%2BJrzMPp4BOzB%2Bf6WJ1THpvSrv16wsvrbjYkZacl5M3TDGJYlACnuXN%2BilWvTySufCAHzyy3sWeou34TGXYJjzOEngNKRQY2%2FRlIqoZqEiIGeXkSq84W0g2mFn%2FLKZrq1zadwnZG2XeoHUXhgkVfNOXe178pt3oSn6u8aaHq5xxNVPy2Y8oNQ1McOfjvpi1uKQWhNRdTm7MFVqi1QJwBpvVfd9qTPAFl0GTCIUu5Cw7BbaXLZ7kX%2FwNLG7n13RTCDl2TwxpfQ8%2FnmgCfSlzCRMApWij97UUMXS6HU5RqbgHeQvNQd99hdQwzWRZwbfrH7Wulqd4DIMaEhyfDDDbmFyo%2BBkq0Im86iOnCF8DZr1Ek3E676ARK7gyofInPnlKeyURKYo715eGjMMaj6L1d%2FKgJEce0Qcv7RUZRKOMMrQ2sQGOqUBW5ZEDJyQNCuSNWMcLI2tJDsPl%2BiL0QqaEaDeTIxUl2CpGpS5HgJGqzDj6JfW3ikqJKg32vz040y%2FCBz6NOCM671odRWjReyd1Fo52prPNvKeVOM%2BcMAxtvtbsqrK5ql2b2ub7jdOk3DbcN1eHSGdzX%2B%2FYNth9lqMCDtKaM7Y8EJ1PSRI%2Bp%2BDj1J%2F9jIRos3L%2B1T63XG2kGiI%2FbCpHokjjj6zxZDy&X-Amz-Signature=9ce0bfef41759e3a6a0efed34ac220238802dfd06d094cb81fc4d639ff0cc28c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYZZIYMG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBcrAE2SCdWpwfK6e6dcMvqPzuCDVM0qAiEKTWEXAMflAiBweiiT75sVhdKCQifSYlE3P2SOvVTBdXQLXqiO%2BgiBiSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZLVCxePGjzkzy6%2BHKtwDrQWauxm1mbPEU13XGibmLWYzpbXJ8WF6XHNW3Arn0TlK5QUyTwnmWzctagio%2B0JMQiGxUzpu3guK7y%2BEom%2B82EQOVR16M3TN35s%2BVTFga67zvMe7XuS9iS70UlxkDFJVJCH4HEYB9MIF%2B0VxDBk2BTRZecJt15AdZlRZrRsWG4qUdkDPZux7vPA%2Fa4x3xhXt2RFFd7LyIEDXytvZKnSVzqxVBLW1ipPeHM%2BTvzGAdfiIRYKipYHfNB2BGcmXU7loyg2GiFrLFT9OlR%2F18x9L0Hpyh%2FTwRuizb3g4CS398%2FoDTZC6Un7Fhu0A6u8xvqmpGsuuvtFFolreqFCvvMQyL0dVP8z2t8IlVdcqdFLs8ubK3qVnBs2fPBaVhqRiKBqCxfczIwQDhls4PX4SzZPzBB9JU82dDK4L%2FqvUr6ubbbxStRgrDGXpW7EXLKQr1pk2s9bEV4l%2FJAcjvAuRjKnxDi8%2B97Qf5uR%2Bw1sCC%2FPGVfegMTI6pcxJUepL9KEhAj3n3HYF9YWIqtc7gXQ508aOQOvaX%2FuaRAkvDjGrhRUJEidkDdVASkSX4bsY%2F8I7Q5hm0NZcRe9cxnQWh2k8Z%2Bi81uEE6prcpiql4ZlBYfgt2vHZgH3vD%2BsQyBDQeyAwxdDaxAY6pgEg1KlA%2BT9jONHt756tNrwPzd9NwoCxuC3%2B2eRb%2BfWzTCETDsV2SXhaaf3AAywaHe8P8zPn4FcjqxOx%2FjD6pRTpSK%2FfoulI4EzCw%2F5LmTeSBc7N94K2XY6BiP%2Fn2xd%2BhRIC2FufPN1zKXbI2TIu%2FniOUAobVb22xI2Mf4Yhs1yCLiCub9sjwUvb0RUGpy%2BrMSypo8rlXvilGQOlYNQSY8fCcwHoSd%2FT&X-Amz-Signature=d95371582d78c6cb23553aadbed0f0557258e864aa611e6a6c4eb3f7044956a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673AHC2VW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDsVBgdjbet5vXbo86KDW4qi93nWJfWdwyW8bcZB4TpdgIhAIzbODvIM1O%2B8RIFX8%2BnPkVcxOaspHDcGNo%2BiJ2kHTYAKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXtGxTLhJzcFLoGO0q3AOEVZs67uilnY5DjIMoEmxINtj%2FW74P9SDJP8vWhNONbHK8flTK7iltl3tkFYs1jzYf5i%2BkxkyGQyPojqcaVG%2FvQoIjYBF2JvQKD9u%2BZyk54gw2Xso7AuBNeC%2FDtJ34nvna2vkzTYRznc%2BJc%2Fdg%2FN217QYoD9bge2hkAaJyg1qgGS5St5%2FU%2BVo0LFLZqVVhAZHeaEtFt4sxiUqxo%2B6JSfpxbqeNIDITP2NBAwRY1wUD5KkNXPOrjbAyax62Y9%2BvNoFpdcbryssxFVPsuFe2lFHGDcYLktPfXNPur969AadNNQy3knHFkZTnQrOVueLCvPv%2FVLBjYXYxt2PBEPPM9V8czg2j%2FeQbkcQcG6MFDzfjfEL9u2DS%2F%2B4kYhmBuNrQYuqwAWxITSjmFwmhA5FAsKhS%2BiryQBWM4C7%2FmZPjrUG8VjWEkZGyRjiBx8KlroNIKiqrZnYNlUPjiEdQL7QeUjc9dZn6fMev9SugcBAASbXzBRqoS8Aag5y%2FbVKwGelOXygJuWQuqQVuCcbDnkpEognfPcrdAEoeX72TPyjj8koXc4w%2F%2BDyZ6aPaKbEDsH%2FfUm2oMFA0wGVG3YNLztMCGAgCrqt%2FTPVLn%2B5fkHuxdaoZfyGd2G4boFwXi1dy4DC%2F0NrEBjqkAfpjbzrFCFG4ja%2F4bv6uYZA8zKlSVL7iQNTXaJzDD%2FJhUnLNqGKQ8TLFGDVr%2F01UE4FkGTY03bGsVAZOnapkBxatJkgIeYa7dK0vMuxOh8ikolHeT5RYR5%2Bd6P9jqy7A2dIfSWRERugqGj5jqEuacmFVa%2BWLOuXxSBXEvRFOiyrBOV8kIcTf2jmjLdlZHYw3YXXIy866Y5AtuLMM3fMu%2FbgxzbUb&X-Amz-Signature=caab64df9028249f6f54a50a18cc94e16f9b405836b331b92cd1f1f0163f8076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643DZ56PK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEHfaso9Dp6IVb4fkWDjXvAj59tFhBjOl1sP765zYnfhAiEA2Zj1Qm%2FeumkP5GxA2%2FRPS1foMCXWIc2cYzq55d8wy%2FsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMQa2BxhcZIHlNUBircA4tW%2FuXZW2jfS%2B06pCMkvaSaJ5iMYGlyFhw2We7ohm74ygqAkYoCrLwptvhEIos3pbu8elQgOzCaU3EHBXq7y2VLGpAAEC32wmk1pd8XzTYso7qyzHG3Jc2sPQWFwk%2Fq08mhRrLGwiSozBzTIO8QmdP2uMFWaFBynC9%2FWY4Yl04kuZhX4M8QRmqn9eHF1%2FiTesqUsJqyoWc2kxmehzT8bAXz8UEOmPiCrVTMhsBP8%2FrM5V0FaLNVcrcXAHxHWmtvV44qXx5INSrjKjPTLjcfHu1yu%2Bbc4MhYNJE7SgU0X%2FJ3lfbpnkHEwI%2BE%2FShYdNpuv%2F%2FigHMC6vWRjmHrbJPlR8%2FD3z4uRu58NK7qLuua7RqBgpTT%2FsNrdkyr6ZSuiQDNNeSrCbeBHYoS9mTE2%2BjuQywg6l1qVEdD6HOXUTGiqGEUyJnbo%2B0OrjPGuMV8s9EFPnW8h6crzCgwXDrXoc4Q%2BQOBBWEJWUnwbUGqgkHoHYDW5yvukQLlSH%2FH7Yy4pc0c1hIb9ELZ5aHZC9j4RTS0ZFuJpz3OGR0v4j4TGBtknsQg%2Bri0ry6f0rWHOpRseQXPn4TaSR6LZD%2Bqt57DK7NA1nrUbRpznKdfVdZ4OhLhjdXl7M3PO0OhEjICwxc4MKHQ2sQGOqUBzcNNbbuQNUpaLJ9mhX36Nf6vT71Lsi0Ad%2BeZ%2BzTAi65dF%2BqK2O%2BBd3O7IaNAXln4BLd8ujn4%2B%2BiU5labfVRzgaMA8m2P9fYuJzsRU7TML9F4ytgECY%2Bw04FBPmC5ktJgD4sCOTel3riRTRxBzASmjCd1ygKBE9gdoao3GuTd6SvUoZKJ3ZFkvkaQ%2F4UlLukmY4XwedFAJ5USewlkrWacrifNSxLR&X-Amz-Signature=30854e5fa8f49ea8182a1ab7fd32017753e72201d2e22fd284c1268ce8eda144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643DZ56PK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEHfaso9Dp6IVb4fkWDjXvAj59tFhBjOl1sP765zYnfhAiEA2Zj1Qm%2FeumkP5GxA2%2FRPS1foMCXWIc2cYzq55d8wy%2FsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMQa2BxhcZIHlNUBircA4tW%2FuXZW2jfS%2B06pCMkvaSaJ5iMYGlyFhw2We7ohm74ygqAkYoCrLwptvhEIos3pbu8elQgOzCaU3EHBXq7y2VLGpAAEC32wmk1pd8XzTYso7qyzHG3Jc2sPQWFwk%2Fq08mhRrLGwiSozBzTIO8QmdP2uMFWaFBynC9%2FWY4Yl04kuZhX4M8QRmqn9eHF1%2FiTesqUsJqyoWc2kxmehzT8bAXz8UEOmPiCrVTMhsBP8%2FrM5V0FaLNVcrcXAHxHWmtvV44qXx5INSrjKjPTLjcfHu1yu%2Bbc4MhYNJE7SgU0X%2FJ3lfbpnkHEwI%2BE%2FShYdNpuv%2F%2FigHMC6vWRjmHrbJPlR8%2FD3z4uRu58NK7qLuua7RqBgpTT%2FsNrdkyr6ZSuiQDNNeSrCbeBHYoS9mTE2%2BjuQywg6l1qVEdD6HOXUTGiqGEUyJnbo%2B0OrjPGuMV8s9EFPnW8h6crzCgwXDrXoc4Q%2BQOBBWEJWUnwbUGqgkHoHYDW5yvukQLlSH%2FH7Yy4pc0c1hIb9ELZ5aHZC9j4RTS0ZFuJpz3OGR0v4j4TGBtknsQg%2Bri0ry6f0rWHOpRseQXPn4TaSR6LZD%2Bqt57DK7NA1nrUbRpznKdfVdZ4OhLhjdXl7M3PO0OhEjICwxc4MKHQ2sQGOqUBzcNNbbuQNUpaLJ9mhX36Nf6vT71Lsi0Ad%2BeZ%2BzTAi65dF%2BqK2O%2BBd3O7IaNAXln4BLd8ujn4%2B%2BiU5labfVRzgaMA8m2P9fYuJzsRU7TML9F4ytgECY%2Bw04FBPmC5ktJgD4sCOTel3riRTRxBzASmjCd1ygKBE9gdoao3GuTd6SvUoZKJ3ZFkvkaQ%2F4UlLukmY4XwedFAJ5USewlkrWacrifNSxLR&X-Amz-Signature=9fdb214b5c17b86927b935f755390bf9af9a0cbc95380ded6bb7203bf59ec4ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMU32CVK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCLOQa4nN4LcboEcGFTqfDl4khqbAVXGdZw6pv60%2FwTxwIhAIgxr8QKnuY5brAeg8Sm3s7ssDCEAKAhFM4hrKxbpl4oKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igye6WZDz0coP%2FnpfN8q3ANwxxEHvz%2FM3EzebKT4o5oZVFPTJS5JSxDMffzHb4ipIngaUUb8O3rYaflgW3U8U%2BlzJe%2BQIo6FHD2DbIKyRLIvkTxTCDImGpJipFyBl%2F%2BovfncPZVSdaSIdvyKklfe6kX5oAvz4bL%2B9AxHwUayn%2B6HecDfM3T5xDrYrRJ1ObpuA6e1b9jueGN4s6dSRNt4gtbEHoWWSuPITmLyC5WwZNtZUSLy8sP38xJkqb%2FO3FvgsZ25SBJg9OBsktpAp50lE1UIswVeMPUT2mCoe3n3vqHODJZFjghK3V%2BhwAOU5Ie6a5QJE8%2BYuChR%2FTypuRY1yhWEBC0APjDrwemmNBLp76ZwkCCp9PVhJP1FBmHvnsAs%2FswlnPA%2BHKxiqgDGwALwqw4WZzFCbuZd85MtqL95vpTp34Z5m9Ucvq%2B1NrcHr3u4TEVrx9BZAC3aq75xCnUwLxlTxvHQuJmCKnvEtEXqk6103pjwaiH0Q77rytkLGQOZkgOhtjGof%2BYyfQspMeU8Rq8giiAQCkY1GMwbHIqfP37FpntU6gpFr3bDVZ127S9Bm4Cs%2BMn7NNzK8yWYhKrawyyYX6Fqi1SVDXI9boSufDoA%2BZrhrz99r5Mir6Q%2BXIKL%2F7r0AwEYucPtIsr%2BaTC50NrEBjqkARGPUNyhDWMGvfWby0B38hZCuYy1LUKFiAH3%2F20cuDa4Og9Lk%2FDf6b%2Fs4VwqGQrzFLQitDv8e0kA3YBrEjMnUXMJXDOBH%2BABJgZJmemtBRp4fMM%2Fe%2FTMD8TG3hOO4%2FtfhdMJ9fgxjeEm33TSD8dMwc9TRyYMxEGwrRAdup%2Ftj7IMmDR8LY1CA2mPe%2FieAhGNE2khqMEJkWMlkF08Ch53PbwHKseV&X-Amz-Signature=d17cf5028a3470b8e8f6fd6f98e04eabd6a8615ce55a7fb7471a430a4d0a648c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMU32CVK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCLOQa4nN4LcboEcGFTqfDl4khqbAVXGdZw6pv60%2FwTxwIhAIgxr8QKnuY5brAeg8Sm3s7ssDCEAKAhFM4hrKxbpl4oKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igye6WZDz0coP%2FnpfN8q3ANwxxEHvz%2FM3EzebKT4o5oZVFPTJS5JSxDMffzHb4ipIngaUUb8O3rYaflgW3U8U%2BlzJe%2BQIo6FHD2DbIKyRLIvkTxTCDImGpJipFyBl%2F%2BovfncPZVSdaSIdvyKklfe6kX5oAvz4bL%2B9AxHwUayn%2B6HecDfM3T5xDrYrRJ1ObpuA6e1b9jueGN4s6dSRNt4gtbEHoWWSuPITmLyC5WwZNtZUSLy8sP38xJkqb%2FO3FvgsZ25SBJg9OBsktpAp50lE1UIswVeMPUT2mCoe3n3vqHODJZFjghK3V%2BhwAOU5Ie6a5QJE8%2BYuChR%2FTypuRY1yhWEBC0APjDrwemmNBLp76ZwkCCp9PVhJP1FBmHvnsAs%2FswlnPA%2BHKxiqgDGwALwqw4WZzFCbuZd85MtqL95vpTp34Z5m9Ucvq%2B1NrcHr3u4TEVrx9BZAC3aq75xCnUwLxlTxvHQuJmCKnvEtEXqk6103pjwaiH0Q77rytkLGQOZkgOhtjGof%2BYyfQspMeU8Rq8giiAQCkY1GMwbHIqfP37FpntU6gpFr3bDVZ127S9Bm4Cs%2BMn7NNzK8yWYhKrawyyYX6Fqi1SVDXI9boSufDoA%2BZrhrz99r5Mir6Q%2BXIKL%2F7r0AwEYucPtIsr%2BaTC50NrEBjqkARGPUNyhDWMGvfWby0B38hZCuYy1LUKFiAH3%2F20cuDa4Og9Lk%2FDf6b%2Fs4VwqGQrzFLQitDv8e0kA3YBrEjMnUXMJXDOBH%2BABJgZJmemtBRp4fMM%2Fe%2FTMD8TG3hOO4%2FtfhdMJ9fgxjeEm33TSD8dMwc9TRyYMxEGwrRAdup%2Ftj7IMmDR8LY1CA2mPe%2FieAhGNE2khqMEJkWMlkF08Ch53PbwHKseV&X-Amz-Signature=3ee3ee108c8903b6ad601244a8dbdfba1dcd265dc1f1720aa3238940d2c7e6d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMU32CVK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCLOQa4nN4LcboEcGFTqfDl4khqbAVXGdZw6pv60%2FwTxwIhAIgxr8QKnuY5brAeg8Sm3s7ssDCEAKAhFM4hrKxbpl4oKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igye6WZDz0coP%2FnpfN8q3ANwxxEHvz%2FM3EzebKT4o5oZVFPTJS5JSxDMffzHb4ipIngaUUb8O3rYaflgW3U8U%2BlzJe%2BQIo6FHD2DbIKyRLIvkTxTCDImGpJipFyBl%2F%2BovfncPZVSdaSIdvyKklfe6kX5oAvz4bL%2B9AxHwUayn%2B6HecDfM3T5xDrYrRJ1ObpuA6e1b9jueGN4s6dSRNt4gtbEHoWWSuPITmLyC5WwZNtZUSLy8sP38xJkqb%2FO3FvgsZ25SBJg9OBsktpAp50lE1UIswVeMPUT2mCoe3n3vqHODJZFjghK3V%2BhwAOU5Ie6a5QJE8%2BYuChR%2FTypuRY1yhWEBC0APjDrwemmNBLp76ZwkCCp9PVhJP1FBmHvnsAs%2FswlnPA%2BHKxiqgDGwALwqw4WZzFCbuZd85MtqL95vpTp34Z5m9Ucvq%2B1NrcHr3u4TEVrx9BZAC3aq75xCnUwLxlTxvHQuJmCKnvEtEXqk6103pjwaiH0Q77rytkLGQOZkgOhtjGof%2BYyfQspMeU8Rq8giiAQCkY1GMwbHIqfP37FpntU6gpFr3bDVZ127S9Bm4Cs%2BMn7NNzK8yWYhKrawyyYX6Fqi1SVDXI9boSufDoA%2BZrhrz99r5Mir6Q%2BXIKL%2F7r0AwEYucPtIsr%2BaTC50NrEBjqkARGPUNyhDWMGvfWby0B38hZCuYy1LUKFiAH3%2F20cuDa4Og9Lk%2FDf6b%2Fs4VwqGQrzFLQitDv8e0kA3YBrEjMnUXMJXDOBH%2BABJgZJmemtBRp4fMM%2Fe%2FTMD8TG3hOO4%2FtfhdMJ9fgxjeEm33TSD8dMwc9TRyYMxEGwrRAdup%2Ftj7IMmDR8LY1CA2mPe%2FieAhGNE2khqMEJkWMlkF08Ch53PbwHKseV&X-Amz-Signature=b03e0eee7c04adcb76f16216c781eff28c6b0d68c1da8b1091e920aae46a26f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMU32CVK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCLOQa4nN4LcboEcGFTqfDl4khqbAVXGdZw6pv60%2FwTxwIhAIgxr8QKnuY5brAeg8Sm3s7ssDCEAKAhFM4hrKxbpl4oKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igye6WZDz0coP%2FnpfN8q3ANwxxEHvz%2FM3EzebKT4o5oZVFPTJS5JSxDMffzHb4ipIngaUUb8O3rYaflgW3U8U%2BlzJe%2BQIo6FHD2DbIKyRLIvkTxTCDImGpJipFyBl%2F%2BovfncPZVSdaSIdvyKklfe6kX5oAvz4bL%2B9AxHwUayn%2B6HecDfM3T5xDrYrRJ1ObpuA6e1b9jueGN4s6dSRNt4gtbEHoWWSuPITmLyC5WwZNtZUSLy8sP38xJkqb%2FO3FvgsZ25SBJg9OBsktpAp50lE1UIswVeMPUT2mCoe3n3vqHODJZFjghK3V%2BhwAOU5Ie6a5QJE8%2BYuChR%2FTypuRY1yhWEBC0APjDrwemmNBLp76ZwkCCp9PVhJP1FBmHvnsAs%2FswlnPA%2BHKxiqgDGwALwqw4WZzFCbuZd85MtqL95vpTp34Z5m9Ucvq%2B1NrcHr3u4TEVrx9BZAC3aq75xCnUwLxlTxvHQuJmCKnvEtEXqk6103pjwaiH0Q77rytkLGQOZkgOhtjGof%2BYyfQspMeU8Rq8giiAQCkY1GMwbHIqfP37FpntU6gpFr3bDVZ127S9Bm4Cs%2BMn7NNzK8yWYhKrawyyYX6Fqi1SVDXI9boSufDoA%2BZrhrz99r5Mir6Q%2BXIKL%2F7r0AwEYucPtIsr%2BaTC50NrEBjqkARGPUNyhDWMGvfWby0B38hZCuYy1LUKFiAH3%2F20cuDa4Og9Lk%2FDf6b%2Fs4VwqGQrzFLQitDv8e0kA3YBrEjMnUXMJXDOBH%2BABJgZJmemtBRp4fMM%2Fe%2FTMD8TG3hOO4%2FtfhdMJ9fgxjeEm33TSD8dMwc9TRyYMxEGwrRAdup%2Ftj7IMmDR8LY1CA2mPe%2FieAhGNE2khqMEJkWMlkF08Ch53PbwHKseV&X-Amz-Signature=3566ed0b4c492df2a113a7bbe112ed924ea97e6d9aaaa267ca73180dd84f7981&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMU32CVK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCLOQa4nN4LcboEcGFTqfDl4khqbAVXGdZw6pv60%2FwTxwIhAIgxr8QKnuY5brAeg8Sm3s7ssDCEAKAhFM4hrKxbpl4oKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igye6WZDz0coP%2FnpfN8q3ANwxxEHvz%2FM3EzebKT4o5oZVFPTJS5JSxDMffzHb4ipIngaUUb8O3rYaflgW3U8U%2BlzJe%2BQIo6FHD2DbIKyRLIvkTxTCDImGpJipFyBl%2F%2BovfncPZVSdaSIdvyKklfe6kX5oAvz4bL%2B9AxHwUayn%2B6HecDfM3T5xDrYrRJ1ObpuA6e1b9jueGN4s6dSRNt4gtbEHoWWSuPITmLyC5WwZNtZUSLy8sP38xJkqb%2FO3FvgsZ25SBJg9OBsktpAp50lE1UIswVeMPUT2mCoe3n3vqHODJZFjghK3V%2BhwAOU5Ie6a5QJE8%2BYuChR%2FTypuRY1yhWEBC0APjDrwemmNBLp76ZwkCCp9PVhJP1FBmHvnsAs%2FswlnPA%2BHKxiqgDGwALwqw4WZzFCbuZd85MtqL95vpTp34Z5m9Ucvq%2B1NrcHr3u4TEVrx9BZAC3aq75xCnUwLxlTxvHQuJmCKnvEtEXqk6103pjwaiH0Q77rytkLGQOZkgOhtjGof%2BYyfQspMeU8Rq8giiAQCkY1GMwbHIqfP37FpntU6gpFr3bDVZ127S9Bm4Cs%2BMn7NNzK8yWYhKrawyyYX6Fqi1SVDXI9boSufDoA%2BZrhrz99r5Mir6Q%2BXIKL%2F7r0AwEYucPtIsr%2BaTC50NrEBjqkARGPUNyhDWMGvfWby0B38hZCuYy1LUKFiAH3%2F20cuDa4Og9Lk%2FDf6b%2Fs4VwqGQrzFLQitDv8e0kA3YBrEjMnUXMJXDOBH%2BABJgZJmemtBRp4fMM%2Fe%2FTMD8TG3hOO4%2FtfhdMJ9fgxjeEm33TSD8dMwc9TRyYMxEGwrRAdup%2Ftj7IMmDR8LY1CA2mPe%2FieAhGNE2khqMEJkWMlkF08Ch53PbwHKseV&X-Amz-Signature=7dc52f2d88d9f4a66d70a827d0d654e94b874474c15d8f6422aa762e86fa4e70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMU32CVK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCLOQa4nN4LcboEcGFTqfDl4khqbAVXGdZw6pv60%2FwTxwIhAIgxr8QKnuY5brAeg8Sm3s7ssDCEAKAhFM4hrKxbpl4oKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igye6WZDz0coP%2FnpfN8q3ANwxxEHvz%2FM3EzebKT4o5oZVFPTJS5JSxDMffzHb4ipIngaUUb8O3rYaflgW3U8U%2BlzJe%2BQIo6FHD2DbIKyRLIvkTxTCDImGpJipFyBl%2F%2BovfncPZVSdaSIdvyKklfe6kX5oAvz4bL%2B9AxHwUayn%2B6HecDfM3T5xDrYrRJ1ObpuA6e1b9jueGN4s6dSRNt4gtbEHoWWSuPITmLyC5WwZNtZUSLy8sP38xJkqb%2FO3FvgsZ25SBJg9OBsktpAp50lE1UIswVeMPUT2mCoe3n3vqHODJZFjghK3V%2BhwAOU5Ie6a5QJE8%2BYuChR%2FTypuRY1yhWEBC0APjDrwemmNBLp76ZwkCCp9PVhJP1FBmHvnsAs%2FswlnPA%2BHKxiqgDGwALwqw4WZzFCbuZd85MtqL95vpTp34Z5m9Ucvq%2B1NrcHr3u4TEVrx9BZAC3aq75xCnUwLxlTxvHQuJmCKnvEtEXqk6103pjwaiH0Q77rytkLGQOZkgOhtjGof%2BYyfQspMeU8Rq8giiAQCkY1GMwbHIqfP37FpntU6gpFr3bDVZ127S9Bm4Cs%2BMn7NNzK8yWYhKrawyyYX6Fqi1SVDXI9boSufDoA%2BZrhrz99r5Mir6Q%2BXIKL%2F7r0AwEYucPtIsr%2BaTC50NrEBjqkARGPUNyhDWMGvfWby0B38hZCuYy1LUKFiAH3%2F20cuDa4Og9Lk%2FDf6b%2Fs4VwqGQrzFLQitDv8e0kA3YBrEjMnUXMJXDOBH%2BABJgZJmemtBRp4fMM%2Fe%2FTMD8TG3hOO4%2FtfhdMJ9fgxjeEm33TSD8dMwc9TRyYMxEGwrRAdup%2Ftj7IMmDR8LY1CA2mPe%2FieAhGNE2khqMEJkWMlkF08Ch53PbwHKseV&X-Amz-Signature=cbf7be8e1eb3c672c22c8c4f6d915888330e4cb4069e0c54e006a7e481b3259c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMU32CVK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCLOQa4nN4LcboEcGFTqfDl4khqbAVXGdZw6pv60%2FwTxwIhAIgxr8QKnuY5brAeg8Sm3s7ssDCEAKAhFM4hrKxbpl4oKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igye6WZDz0coP%2FnpfN8q3ANwxxEHvz%2FM3EzebKT4o5oZVFPTJS5JSxDMffzHb4ipIngaUUb8O3rYaflgW3U8U%2BlzJe%2BQIo6FHD2DbIKyRLIvkTxTCDImGpJipFyBl%2F%2BovfncPZVSdaSIdvyKklfe6kX5oAvz4bL%2B9AxHwUayn%2B6HecDfM3T5xDrYrRJ1ObpuA6e1b9jueGN4s6dSRNt4gtbEHoWWSuPITmLyC5WwZNtZUSLy8sP38xJkqb%2FO3FvgsZ25SBJg9OBsktpAp50lE1UIswVeMPUT2mCoe3n3vqHODJZFjghK3V%2BhwAOU5Ie6a5QJE8%2BYuChR%2FTypuRY1yhWEBC0APjDrwemmNBLp76ZwkCCp9PVhJP1FBmHvnsAs%2FswlnPA%2BHKxiqgDGwALwqw4WZzFCbuZd85MtqL95vpTp34Z5m9Ucvq%2B1NrcHr3u4TEVrx9BZAC3aq75xCnUwLxlTxvHQuJmCKnvEtEXqk6103pjwaiH0Q77rytkLGQOZkgOhtjGof%2BYyfQspMeU8Rq8giiAQCkY1GMwbHIqfP37FpntU6gpFr3bDVZ127S9Bm4Cs%2BMn7NNzK8yWYhKrawyyYX6Fqi1SVDXI9boSufDoA%2BZrhrz99r5Mir6Q%2BXIKL%2F7r0AwEYucPtIsr%2BaTC50NrEBjqkARGPUNyhDWMGvfWby0B38hZCuYy1LUKFiAH3%2F20cuDa4Og9Lk%2FDf6b%2Fs4VwqGQrzFLQitDv8e0kA3YBrEjMnUXMJXDOBH%2BABJgZJmemtBRp4fMM%2Fe%2FTMD8TG3hOO4%2FtfhdMJ9fgxjeEm33TSD8dMwc9TRyYMxEGwrRAdup%2Ftj7IMmDR8LY1CA2mPe%2FieAhGNE2khqMEJkWMlkF08Ch53PbwHKseV&X-Amz-Signature=b03e0eee7c04adcb76f16216c781eff28c6b0d68c1da8b1091e920aae46a26f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMU32CVK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCLOQa4nN4LcboEcGFTqfDl4khqbAVXGdZw6pv60%2FwTxwIhAIgxr8QKnuY5brAeg8Sm3s7ssDCEAKAhFM4hrKxbpl4oKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igye6WZDz0coP%2FnpfN8q3ANwxxEHvz%2FM3EzebKT4o5oZVFPTJS5JSxDMffzHb4ipIngaUUb8O3rYaflgW3U8U%2BlzJe%2BQIo6FHD2DbIKyRLIvkTxTCDImGpJipFyBl%2F%2BovfncPZVSdaSIdvyKklfe6kX5oAvz4bL%2B9AxHwUayn%2B6HecDfM3T5xDrYrRJ1ObpuA6e1b9jueGN4s6dSRNt4gtbEHoWWSuPITmLyC5WwZNtZUSLy8sP38xJkqb%2FO3FvgsZ25SBJg9OBsktpAp50lE1UIswVeMPUT2mCoe3n3vqHODJZFjghK3V%2BhwAOU5Ie6a5QJE8%2BYuChR%2FTypuRY1yhWEBC0APjDrwemmNBLp76ZwkCCp9PVhJP1FBmHvnsAs%2FswlnPA%2BHKxiqgDGwALwqw4WZzFCbuZd85MtqL95vpTp34Z5m9Ucvq%2B1NrcHr3u4TEVrx9BZAC3aq75xCnUwLxlTxvHQuJmCKnvEtEXqk6103pjwaiH0Q77rytkLGQOZkgOhtjGof%2BYyfQspMeU8Rq8giiAQCkY1GMwbHIqfP37FpntU6gpFr3bDVZ127S9Bm4Cs%2BMn7NNzK8yWYhKrawyyYX6Fqi1SVDXI9boSufDoA%2BZrhrz99r5Mir6Q%2BXIKL%2F7r0AwEYucPtIsr%2BaTC50NrEBjqkARGPUNyhDWMGvfWby0B38hZCuYy1LUKFiAH3%2F20cuDa4Og9Lk%2FDf6b%2Fs4VwqGQrzFLQitDv8e0kA3YBrEjMnUXMJXDOBH%2BABJgZJmemtBRp4fMM%2Fe%2FTMD8TG3hOO4%2FtfhdMJ9fgxjeEm33TSD8dMwc9TRyYMxEGwrRAdup%2Ftj7IMmDR8LY1CA2mPe%2FieAhGNE2khqMEJkWMlkF08Ch53PbwHKseV&X-Amz-Signature=ce0b9266d1b05c8ce468335f4852cd3724bee0f35dbbcc6dd6f085e534b9780d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMU32CVK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCLOQa4nN4LcboEcGFTqfDl4khqbAVXGdZw6pv60%2FwTxwIhAIgxr8QKnuY5brAeg8Sm3s7ssDCEAKAhFM4hrKxbpl4oKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igye6WZDz0coP%2FnpfN8q3ANwxxEHvz%2FM3EzebKT4o5oZVFPTJS5JSxDMffzHb4ipIngaUUb8O3rYaflgW3U8U%2BlzJe%2BQIo6FHD2DbIKyRLIvkTxTCDImGpJipFyBl%2F%2BovfncPZVSdaSIdvyKklfe6kX5oAvz4bL%2B9AxHwUayn%2B6HecDfM3T5xDrYrRJ1ObpuA6e1b9jueGN4s6dSRNt4gtbEHoWWSuPITmLyC5WwZNtZUSLy8sP38xJkqb%2FO3FvgsZ25SBJg9OBsktpAp50lE1UIswVeMPUT2mCoe3n3vqHODJZFjghK3V%2BhwAOU5Ie6a5QJE8%2BYuChR%2FTypuRY1yhWEBC0APjDrwemmNBLp76ZwkCCp9PVhJP1FBmHvnsAs%2FswlnPA%2BHKxiqgDGwALwqw4WZzFCbuZd85MtqL95vpTp34Z5m9Ucvq%2B1NrcHr3u4TEVrx9BZAC3aq75xCnUwLxlTxvHQuJmCKnvEtEXqk6103pjwaiH0Q77rytkLGQOZkgOhtjGof%2BYyfQspMeU8Rq8giiAQCkY1GMwbHIqfP37FpntU6gpFr3bDVZ127S9Bm4Cs%2BMn7NNzK8yWYhKrawyyYX6Fqi1SVDXI9boSufDoA%2BZrhrz99r5Mir6Q%2BXIKL%2F7r0AwEYucPtIsr%2BaTC50NrEBjqkARGPUNyhDWMGvfWby0B38hZCuYy1LUKFiAH3%2F20cuDa4Og9Lk%2FDf6b%2Fs4VwqGQrzFLQitDv8e0kA3YBrEjMnUXMJXDOBH%2BABJgZJmemtBRp4fMM%2Fe%2FTMD8TG3hOO4%2FtfhdMJ9fgxjeEm33TSD8dMwc9TRyYMxEGwrRAdup%2Ftj7IMmDR8LY1CA2mPe%2FieAhGNE2khqMEJkWMlkF08Ch53PbwHKseV&X-Amz-Signature=3489d3a8d06ad517fc0d5b1f25362ab26a76bbe7bda06e2716ead5690dd067ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMU32CVK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCLOQa4nN4LcboEcGFTqfDl4khqbAVXGdZw6pv60%2FwTxwIhAIgxr8QKnuY5brAeg8Sm3s7ssDCEAKAhFM4hrKxbpl4oKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igye6WZDz0coP%2FnpfN8q3ANwxxEHvz%2FM3EzebKT4o5oZVFPTJS5JSxDMffzHb4ipIngaUUb8O3rYaflgW3U8U%2BlzJe%2BQIo6FHD2DbIKyRLIvkTxTCDImGpJipFyBl%2F%2BovfncPZVSdaSIdvyKklfe6kX5oAvz4bL%2B9AxHwUayn%2B6HecDfM3T5xDrYrRJ1ObpuA6e1b9jueGN4s6dSRNt4gtbEHoWWSuPITmLyC5WwZNtZUSLy8sP38xJkqb%2FO3FvgsZ25SBJg9OBsktpAp50lE1UIswVeMPUT2mCoe3n3vqHODJZFjghK3V%2BhwAOU5Ie6a5QJE8%2BYuChR%2FTypuRY1yhWEBC0APjDrwemmNBLp76ZwkCCp9PVhJP1FBmHvnsAs%2FswlnPA%2BHKxiqgDGwALwqw4WZzFCbuZd85MtqL95vpTp34Z5m9Ucvq%2B1NrcHr3u4TEVrx9BZAC3aq75xCnUwLxlTxvHQuJmCKnvEtEXqk6103pjwaiH0Q77rytkLGQOZkgOhtjGof%2BYyfQspMeU8Rq8giiAQCkY1GMwbHIqfP37FpntU6gpFr3bDVZ127S9Bm4Cs%2BMn7NNzK8yWYhKrawyyYX6Fqi1SVDXI9boSufDoA%2BZrhrz99r5Mir6Q%2BXIKL%2F7r0AwEYucPtIsr%2BaTC50NrEBjqkARGPUNyhDWMGvfWby0B38hZCuYy1LUKFiAH3%2F20cuDa4Og9Lk%2FDf6b%2Fs4VwqGQrzFLQitDv8e0kA3YBrEjMnUXMJXDOBH%2BABJgZJmemtBRp4fMM%2Fe%2FTMD8TG3hOO4%2FtfhdMJ9fgxjeEm33TSD8dMwc9TRyYMxEGwrRAdup%2Ftj7IMmDR8LY1CA2mPe%2FieAhGNE2khqMEJkWMlkF08Ch53PbwHKseV&X-Amz-Signature=9e553fb657e01e1650a5c9a9989465b66197d73f9c6371cd8daad18bb69ba8fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
