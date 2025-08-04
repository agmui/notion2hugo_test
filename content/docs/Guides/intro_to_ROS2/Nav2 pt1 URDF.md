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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKREF7CM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDOUQIhfWI%2BA5%2F%2Fn8U0vq%2FFl%2FY%2F%2F6znOh83KWKbhQpi3AIhAMfonWJ9agn5cfNNylCgk5lpz64uVpqprw2CV4k2FkAXKv8DCE4QABoMNjM3NDIzMTgzODA1IgzayI3Wfp1Q2%2Ft0xZAq3APsH9lJq3cO%2FSGDnmChga93%2Bnx8QrBIJVtjXABLS4GY6fLCGgc%2BJcSlbuRJnYdcMUpxgz6UzuAGGix2RrQDwCLxRWoq4W9j4F2g8yvBA2WzVR5M3MeR3brrhqaqiWYDWxu5u05fW61XiTtmHDj7W3uhZpK%2Bjrr6U8z5IA%2BxmHUs%2BTQxA1qXFyulKlYk%2BoSZY4PS72rQEnWTMHm1j8%2FTwq2Vpp0JXuB5VHakcWrGUCGTqAtVVpN11M5GVBJdNDgWXOeiZ7iIu2BR8Cs7FBXW8ADVZN0nJdBtiLtrafRxnnNp6SeHp1KdOi%2BcpUvGQ9KVkdzASvWYgQG3NbilQNGQ3jZTDvNFO6mvUixOMrEFR27l9MzxZS2F6FuEkcZ1YKAtXQhNkr2FUKX4G3NJeEYX153IEWwFZ%2FmzMmF%2FqbxQlgqEDwnRdI0fFWnZuDGEsK%2Foy1kBtsb%2FdFstWoGIdeYXX5PC8PkUKoXV170vIn2kKp%2Fh7vY05RpveXgS0Pbc04BKkTCI6UftciMwu%2BdR%2BmJRNlahNFeTNFjAFo2XWfbMuqBOnwQigR7%2Bu4IBsQwZEXO9g6b9qMdslHQzmKZVwoKFTKR1J43HVGZae5jq4TW8t%2Bz8rpLb6yCwLTZh24ud4zC%2FwMTEBjqkAQPd%2FuZWiffutX8tT1jy2d2RhE%2FiK7bplNQ6f%2FA%2BK8zKH%2BqWiU415O9fz%2FSmI2LrL3Z6Khudeoa6zz7lBzgPUaQSExHPxHSwYCfSyFbvozR9IipNM0Oab5zVIawQcTUx0uwcc8Zs96ybQFik8mcWlnBCSN0A16ZuBJ48aUFtFBO9U8QbL5garHJFJnioIswB6o76FttMFJyEpx%2BV1jxhX5SyxMrT&X-Amz-Signature=ae79cbfb1926df85064da298a31c9308a9cb12c73efbe45e59e8238d73289c74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKREF7CM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDOUQIhfWI%2BA5%2F%2Fn8U0vq%2FFl%2FY%2F%2F6znOh83KWKbhQpi3AIhAMfonWJ9agn5cfNNylCgk5lpz64uVpqprw2CV4k2FkAXKv8DCE4QABoMNjM3NDIzMTgzODA1IgzayI3Wfp1Q2%2Ft0xZAq3APsH9lJq3cO%2FSGDnmChga93%2Bnx8QrBIJVtjXABLS4GY6fLCGgc%2BJcSlbuRJnYdcMUpxgz6UzuAGGix2RrQDwCLxRWoq4W9j4F2g8yvBA2WzVR5M3MeR3brrhqaqiWYDWxu5u05fW61XiTtmHDj7W3uhZpK%2Bjrr6U8z5IA%2BxmHUs%2BTQxA1qXFyulKlYk%2BoSZY4PS72rQEnWTMHm1j8%2FTwq2Vpp0JXuB5VHakcWrGUCGTqAtVVpN11M5GVBJdNDgWXOeiZ7iIu2BR8Cs7FBXW8ADVZN0nJdBtiLtrafRxnnNp6SeHp1KdOi%2BcpUvGQ9KVkdzASvWYgQG3NbilQNGQ3jZTDvNFO6mvUixOMrEFR27l9MzxZS2F6FuEkcZ1YKAtXQhNkr2FUKX4G3NJeEYX153IEWwFZ%2FmzMmF%2FqbxQlgqEDwnRdI0fFWnZuDGEsK%2Foy1kBtsb%2FdFstWoGIdeYXX5PC8PkUKoXV170vIn2kKp%2Fh7vY05RpveXgS0Pbc04BKkTCI6UftciMwu%2BdR%2BmJRNlahNFeTNFjAFo2XWfbMuqBOnwQigR7%2Bu4IBsQwZEXO9g6b9qMdslHQzmKZVwoKFTKR1J43HVGZae5jq4TW8t%2Bz8rpLb6yCwLTZh24ud4zC%2FwMTEBjqkAQPd%2FuZWiffutX8tT1jy2d2RhE%2FiK7bplNQ6f%2FA%2BK8zKH%2BqWiU415O9fz%2FSmI2LrL3Z6Khudeoa6zz7lBzgPUaQSExHPxHSwYCfSyFbvozR9IipNM0Oab5zVIawQcTUx0uwcc8Zs96ybQFik8mcWlnBCSN0A16ZuBJ48aUFtFBO9U8QbL5garHJFJnioIswB6o76FttMFJyEpx%2BV1jxhX5SyxMrT&X-Amz-Signature=5ae0394c2282b23d40ef8e56f42d789498bc1670b57af13518235496a5cf690e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKREF7CM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDOUQIhfWI%2BA5%2F%2Fn8U0vq%2FFl%2FY%2F%2F6znOh83KWKbhQpi3AIhAMfonWJ9agn5cfNNylCgk5lpz64uVpqprw2CV4k2FkAXKv8DCE4QABoMNjM3NDIzMTgzODA1IgzayI3Wfp1Q2%2Ft0xZAq3APsH9lJq3cO%2FSGDnmChga93%2Bnx8QrBIJVtjXABLS4GY6fLCGgc%2BJcSlbuRJnYdcMUpxgz6UzuAGGix2RrQDwCLxRWoq4W9j4F2g8yvBA2WzVR5M3MeR3brrhqaqiWYDWxu5u05fW61XiTtmHDj7W3uhZpK%2Bjrr6U8z5IA%2BxmHUs%2BTQxA1qXFyulKlYk%2BoSZY4PS72rQEnWTMHm1j8%2FTwq2Vpp0JXuB5VHakcWrGUCGTqAtVVpN11M5GVBJdNDgWXOeiZ7iIu2BR8Cs7FBXW8ADVZN0nJdBtiLtrafRxnnNp6SeHp1KdOi%2BcpUvGQ9KVkdzASvWYgQG3NbilQNGQ3jZTDvNFO6mvUixOMrEFR27l9MzxZS2F6FuEkcZ1YKAtXQhNkr2FUKX4G3NJeEYX153IEWwFZ%2FmzMmF%2FqbxQlgqEDwnRdI0fFWnZuDGEsK%2Foy1kBtsb%2FdFstWoGIdeYXX5PC8PkUKoXV170vIn2kKp%2Fh7vY05RpveXgS0Pbc04BKkTCI6UftciMwu%2BdR%2BmJRNlahNFeTNFjAFo2XWfbMuqBOnwQigR7%2Bu4IBsQwZEXO9g6b9qMdslHQzmKZVwoKFTKR1J43HVGZae5jq4TW8t%2Bz8rpLb6yCwLTZh24ud4zC%2FwMTEBjqkAQPd%2FuZWiffutX8tT1jy2d2RhE%2FiK7bplNQ6f%2FA%2BK8zKH%2BqWiU415O9fz%2FSmI2LrL3Z6Khudeoa6zz7lBzgPUaQSExHPxHSwYCfSyFbvozR9IipNM0Oab5zVIawQcTUx0uwcc8Zs96ybQFik8mcWlnBCSN0A16ZuBJ48aUFtFBO9U8QbL5garHJFJnioIswB6o76FttMFJyEpx%2BV1jxhX5SyxMrT&X-Amz-Signature=76fa7ba883314936338b6236b634e502b6d501cc16ba93416fa54738e649c6d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKREF7CM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDOUQIhfWI%2BA5%2F%2Fn8U0vq%2FFl%2FY%2F%2F6znOh83KWKbhQpi3AIhAMfonWJ9agn5cfNNylCgk5lpz64uVpqprw2CV4k2FkAXKv8DCE4QABoMNjM3NDIzMTgzODA1IgzayI3Wfp1Q2%2Ft0xZAq3APsH9lJq3cO%2FSGDnmChga93%2Bnx8QrBIJVtjXABLS4GY6fLCGgc%2BJcSlbuRJnYdcMUpxgz6UzuAGGix2RrQDwCLxRWoq4W9j4F2g8yvBA2WzVR5M3MeR3brrhqaqiWYDWxu5u05fW61XiTtmHDj7W3uhZpK%2Bjrr6U8z5IA%2BxmHUs%2BTQxA1qXFyulKlYk%2BoSZY4PS72rQEnWTMHm1j8%2FTwq2Vpp0JXuB5VHakcWrGUCGTqAtVVpN11M5GVBJdNDgWXOeiZ7iIu2BR8Cs7FBXW8ADVZN0nJdBtiLtrafRxnnNp6SeHp1KdOi%2BcpUvGQ9KVkdzASvWYgQG3NbilQNGQ3jZTDvNFO6mvUixOMrEFR27l9MzxZS2F6FuEkcZ1YKAtXQhNkr2FUKX4G3NJeEYX153IEWwFZ%2FmzMmF%2FqbxQlgqEDwnRdI0fFWnZuDGEsK%2Foy1kBtsb%2FdFstWoGIdeYXX5PC8PkUKoXV170vIn2kKp%2Fh7vY05RpveXgS0Pbc04BKkTCI6UftciMwu%2BdR%2BmJRNlahNFeTNFjAFo2XWfbMuqBOnwQigR7%2Bu4IBsQwZEXO9g6b9qMdslHQzmKZVwoKFTKR1J43HVGZae5jq4TW8t%2Bz8rpLb6yCwLTZh24ud4zC%2FwMTEBjqkAQPd%2FuZWiffutX8tT1jy2d2RhE%2FiK7bplNQ6f%2FA%2BK8zKH%2BqWiU415O9fz%2FSmI2LrL3Z6Khudeoa6zz7lBzgPUaQSExHPxHSwYCfSyFbvozR9IipNM0Oab5zVIawQcTUx0uwcc8Zs96ybQFik8mcWlnBCSN0A16ZuBJ48aUFtFBO9U8QbL5garHJFJnioIswB6o76FttMFJyEpx%2BV1jxhX5SyxMrT&X-Amz-Signature=e5f7a2366030c0149ac859ab0fb42e67f0690ad77524603283a8a0974446b74d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKREF7CM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDOUQIhfWI%2BA5%2F%2Fn8U0vq%2FFl%2FY%2F%2F6znOh83KWKbhQpi3AIhAMfonWJ9agn5cfNNylCgk5lpz64uVpqprw2CV4k2FkAXKv8DCE4QABoMNjM3NDIzMTgzODA1IgzayI3Wfp1Q2%2Ft0xZAq3APsH9lJq3cO%2FSGDnmChga93%2Bnx8QrBIJVtjXABLS4GY6fLCGgc%2BJcSlbuRJnYdcMUpxgz6UzuAGGix2RrQDwCLxRWoq4W9j4F2g8yvBA2WzVR5M3MeR3brrhqaqiWYDWxu5u05fW61XiTtmHDj7W3uhZpK%2Bjrr6U8z5IA%2BxmHUs%2BTQxA1qXFyulKlYk%2BoSZY4PS72rQEnWTMHm1j8%2FTwq2Vpp0JXuB5VHakcWrGUCGTqAtVVpN11M5GVBJdNDgWXOeiZ7iIu2BR8Cs7FBXW8ADVZN0nJdBtiLtrafRxnnNp6SeHp1KdOi%2BcpUvGQ9KVkdzASvWYgQG3NbilQNGQ3jZTDvNFO6mvUixOMrEFR27l9MzxZS2F6FuEkcZ1YKAtXQhNkr2FUKX4G3NJeEYX153IEWwFZ%2FmzMmF%2FqbxQlgqEDwnRdI0fFWnZuDGEsK%2Foy1kBtsb%2FdFstWoGIdeYXX5PC8PkUKoXV170vIn2kKp%2Fh7vY05RpveXgS0Pbc04BKkTCI6UftciMwu%2BdR%2BmJRNlahNFeTNFjAFo2XWfbMuqBOnwQigR7%2Bu4IBsQwZEXO9g6b9qMdslHQzmKZVwoKFTKR1J43HVGZae5jq4TW8t%2Bz8rpLb6yCwLTZh24ud4zC%2FwMTEBjqkAQPd%2FuZWiffutX8tT1jy2d2RhE%2FiK7bplNQ6f%2FA%2BK8zKH%2BqWiU415O9fz%2FSmI2LrL3Z6Khudeoa6zz7lBzgPUaQSExHPxHSwYCfSyFbvozR9IipNM0Oab5zVIawQcTUx0uwcc8Zs96ybQFik8mcWlnBCSN0A16ZuBJ48aUFtFBO9U8QbL5garHJFJnioIswB6o76FttMFJyEpx%2BV1jxhX5SyxMrT&X-Amz-Signature=e32fc7aaa7cc03214ea7729ff0e8f1aa4309ec472924661b011b03e042e23b23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKREF7CM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDOUQIhfWI%2BA5%2F%2Fn8U0vq%2FFl%2FY%2F%2F6znOh83KWKbhQpi3AIhAMfonWJ9agn5cfNNylCgk5lpz64uVpqprw2CV4k2FkAXKv8DCE4QABoMNjM3NDIzMTgzODA1IgzayI3Wfp1Q2%2Ft0xZAq3APsH9lJq3cO%2FSGDnmChga93%2Bnx8QrBIJVtjXABLS4GY6fLCGgc%2BJcSlbuRJnYdcMUpxgz6UzuAGGix2RrQDwCLxRWoq4W9j4F2g8yvBA2WzVR5M3MeR3brrhqaqiWYDWxu5u05fW61XiTtmHDj7W3uhZpK%2Bjrr6U8z5IA%2BxmHUs%2BTQxA1qXFyulKlYk%2BoSZY4PS72rQEnWTMHm1j8%2FTwq2Vpp0JXuB5VHakcWrGUCGTqAtVVpN11M5GVBJdNDgWXOeiZ7iIu2BR8Cs7FBXW8ADVZN0nJdBtiLtrafRxnnNp6SeHp1KdOi%2BcpUvGQ9KVkdzASvWYgQG3NbilQNGQ3jZTDvNFO6mvUixOMrEFR27l9MzxZS2F6FuEkcZ1YKAtXQhNkr2FUKX4G3NJeEYX153IEWwFZ%2FmzMmF%2FqbxQlgqEDwnRdI0fFWnZuDGEsK%2Foy1kBtsb%2FdFstWoGIdeYXX5PC8PkUKoXV170vIn2kKp%2Fh7vY05RpveXgS0Pbc04BKkTCI6UftciMwu%2BdR%2BmJRNlahNFeTNFjAFo2XWfbMuqBOnwQigR7%2Bu4IBsQwZEXO9g6b9qMdslHQzmKZVwoKFTKR1J43HVGZae5jq4TW8t%2Bz8rpLb6yCwLTZh24ud4zC%2FwMTEBjqkAQPd%2FuZWiffutX8tT1jy2d2RhE%2FiK7bplNQ6f%2FA%2BK8zKH%2BqWiU415O9fz%2FSmI2LrL3Z6Khudeoa6zz7lBzgPUaQSExHPxHSwYCfSyFbvozR9IipNM0Oab5zVIawQcTUx0uwcc8Zs96ybQFik8mcWlnBCSN0A16ZuBJ48aUFtFBO9U8QbL5garHJFJnioIswB6o76FttMFJyEpx%2BV1jxhX5SyxMrT&X-Amz-Signature=e5bdc1f92d905b88486e5e1654e6a26c8ad1bc8f3637e5da7f7f93721078973d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKREF7CM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDOUQIhfWI%2BA5%2F%2Fn8U0vq%2FFl%2FY%2F%2F6znOh83KWKbhQpi3AIhAMfonWJ9agn5cfNNylCgk5lpz64uVpqprw2CV4k2FkAXKv8DCE4QABoMNjM3NDIzMTgzODA1IgzayI3Wfp1Q2%2Ft0xZAq3APsH9lJq3cO%2FSGDnmChga93%2Bnx8QrBIJVtjXABLS4GY6fLCGgc%2BJcSlbuRJnYdcMUpxgz6UzuAGGix2RrQDwCLxRWoq4W9j4F2g8yvBA2WzVR5M3MeR3brrhqaqiWYDWxu5u05fW61XiTtmHDj7W3uhZpK%2Bjrr6U8z5IA%2BxmHUs%2BTQxA1qXFyulKlYk%2BoSZY4PS72rQEnWTMHm1j8%2FTwq2Vpp0JXuB5VHakcWrGUCGTqAtVVpN11M5GVBJdNDgWXOeiZ7iIu2BR8Cs7FBXW8ADVZN0nJdBtiLtrafRxnnNp6SeHp1KdOi%2BcpUvGQ9KVkdzASvWYgQG3NbilQNGQ3jZTDvNFO6mvUixOMrEFR27l9MzxZS2F6FuEkcZ1YKAtXQhNkr2FUKX4G3NJeEYX153IEWwFZ%2FmzMmF%2FqbxQlgqEDwnRdI0fFWnZuDGEsK%2Foy1kBtsb%2FdFstWoGIdeYXX5PC8PkUKoXV170vIn2kKp%2Fh7vY05RpveXgS0Pbc04BKkTCI6UftciMwu%2BdR%2BmJRNlahNFeTNFjAFo2XWfbMuqBOnwQigR7%2Bu4IBsQwZEXO9g6b9qMdslHQzmKZVwoKFTKR1J43HVGZae5jq4TW8t%2Bz8rpLb6yCwLTZh24ud4zC%2FwMTEBjqkAQPd%2FuZWiffutX8tT1jy2d2RhE%2FiK7bplNQ6f%2FA%2BK8zKH%2BqWiU415O9fz%2FSmI2LrL3Z6Khudeoa6zz7lBzgPUaQSExHPxHSwYCfSyFbvozR9IipNM0Oab5zVIawQcTUx0uwcc8Zs96ybQFik8mcWlnBCSN0A16ZuBJ48aUFtFBO9U8QbL5garHJFJnioIswB6o76FttMFJyEpx%2BV1jxhX5SyxMrT&X-Amz-Signature=49851aeeee926126c888ada963f393255fed743c1e2c8e7b8826f8e6e171d032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKREF7CM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDOUQIhfWI%2BA5%2F%2Fn8U0vq%2FFl%2FY%2F%2F6znOh83KWKbhQpi3AIhAMfonWJ9agn5cfNNylCgk5lpz64uVpqprw2CV4k2FkAXKv8DCE4QABoMNjM3NDIzMTgzODA1IgzayI3Wfp1Q2%2Ft0xZAq3APsH9lJq3cO%2FSGDnmChga93%2Bnx8QrBIJVtjXABLS4GY6fLCGgc%2BJcSlbuRJnYdcMUpxgz6UzuAGGix2RrQDwCLxRWoq4W9j4F2g8yvBA2WzVR5M3MeR3brrhqaqiWYDWxu5u05fW61XiTtmHDj7W3uhZpK%2Bjrr6U8z5IA%2BxmHUs%2BTQxA1qXFyulKlYk%2BoSZY4PS72rQEnWTMHm1j8%2FTwq2Vpp0JXuB5VHakcWrGUCGTqAtVVpN11M5GVBJdNDgWXOeiZ7iIu2BR8Cs7FBXW8ADVZN0nJdBtiLtrafRxnnNp6SeHp1KdOi%2BcpUvGQ9KVkdzASvWYgQG3NbilQNGQ3jZTDvNFO6mvUixOMrEFR27l9MzxZS2F6FuEkcZ1YKAtXQhNkr2FUKX4G3NJeEYX153IEWwFZ%2FmzMmF%2FqbxQlgqEDwnRdI0fFWnZuDGEsK%2Foy1kBtsb%2FdFstWoGIdeYXX5PC8PkUKoXV170vIn2kKp%2Fh7vY05RpveXgS0Pbc04BKkTCI6UftciMwu%2BdR%2BmJRNlahNFeTNFjAFo2XWfbMuqBOnwQigR7%2Bu4IBsQwZEXO9g6b9qMdslHQzmKZVwoKFTKR1J43HVGZae5jq4TW8t%2Bz8rpLb6yCwLTZh24ud4zC%2FwMTEBjqkAQPd%2FuZWiffutX8tT1jy2d2RhE%2FiK7bplNQ6f%2FA%2BK8zKH%2BqWiU415O9fz%2FSmI2LrL3Z6Khudeoa6zz7lBzgPUaQSExHPxHSwYCfSyFbvozR9IipNM0Oab5zVIawQcTUx0uwcc8Zs96ybQFik8mcWlnBCSN0A16ZuBJ48aUFtFBO9U8QbL5garHJFJnioIswB6o76FttMFJyEpx%2BV1jxhX5SyxMrT&X-Amz-Signature=0a6b267b6ce0be559d4d263410d9150aa0b3e62b66abea40283cce3e4e0a719b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKREF7CM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDOUQIhfWI%2BA5%2F%2Fn8U0vq%2FFl%2FY%2F%2F6znOh83KWKbhQpi3AIhAMfonWJ9agn5cfNNylCgk5lpz64uVpqprw2CV4k2FkAXKv8DCE4QABoMNjM3NDIzMTgzODA1IgzayI3Wfp1Q2%2Ft0xZAq3APsH9lJq3cO%2FSGDnmChga93%2Bnx8QrBIJVtjXABLS4GY6fLCGgc%2BJcSlbuRJnYdcMUpxgz6UzuAGGix2RrQDwCLxRWoq4W9j4F2g8yvBA2WzVR5M3MeR3brrhqaqiWYDWxu5u05fW61XiTtmHDj7W3uhZpK%2Bjrr6U8z5IA%2BxmHUs%2BTQxA1qXFyulKlYk%2BoSZY4PS72rQEnWTMHm1j8%2FTwq2Vpp0JXuB5VHakcWrGUCGTqAtVVpN11M5GVBJdNDgWXOeiZ7iIu2BR8Cs7FBXW8ADVZN0nJdBtiLtrafRxnnNp6SeHp1KdOi%2BcpUvGQ9KVkdzASvWYgQG3NbilQNGQ3jZTDvNFO6mvUixOMrEFR27l9MzxZS2F6FuEkcZ1YKAtXQhNkr2FUKX4G3NJeEYX153IEWwFZ%2FmzMmF%2FqbxQlgqEDwnRdI0fFWnZuDGEsK%2Foy1kBtsb%2FdFstWoGIdeYXX5PC8PkUKoXV170vIn2kKp%2Fh7vY05RpveXgS0Pbc04BKkTCI6UftciMwu%2BdR%2BmJRNlahNFeTNFjAFo2XWfbMuqBOnwQigR7%2Bu4IBsQwZEXO9g6b9qMdslHQzmKZVwoKFTKR1J43HVGZae5jq4TW8t%2Bz8rpLb6yCwLTZh24ud4zC%2FwMTEBjqkAQPd%2FuZWiffutX8tT1jy2d2RhE%2FiK7bplNQ6f%2FA%2BK8zKH%2BqWiU415O9fz%2FSmI2LrL3Z6Khudeoa6zz7lBzgPUaQSExHPxHSwYCfSyFbvozR9IipNM0Oab5zVIawQcTUx0uwcc8Zs96ybQFik8mcWlnBCSN0A16ZuBJ48aUFtFBO9U8QbL5garHJFJnioIswB6o76FttMFJyEpx%2BV1jxhX5SyxMrT&X-Amz-Signature=2bf16caf8106ebfbe3004c9a99f230b851f37b40fc0fe5db53b5692de2ff27b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKREF7CM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDOUQIhfWI%2BA5%2F%2Fn8U0vq%2FFl%2FY%2F%2F6znOh83KWKbhQpi3AIhAMfonWJ9agn5cfNNylCgk5lpz64uVpqprw2CV4k2FkAXKv8DCE4QABoMNjM3NDIzMTgzODA1IgzayI3Wfp1Q2%2Ft0xZAq3APsH9lJq3cO%2FSGDnmChga93%2Bnx8QrBIJVtjXABLS4GY6fLCGgc%2BJcSlbuRJnYdcMUpxgz6UzuAGGix2RrQDwCLxRWoq4W9j4F2g8yvBA2WzVR5M3MeR3brrhqaqiWYDWxu5u05fW61XiTtmHDj7W3uhZpK%2Bjrr6U8z5IA%2BxmHUs%2BTQxA1qXFyulKlYk%2BoSZY4PS72rQEnWTMHm1j8%2FTwq2Vpp0JXuB5VHakcWrGUCGTqAtVVpN11M5GVBJdNDgWXOeiZ7iIu2BR8Cs7FBXW8ADVZN0nJdBtiLtrafRxnnNp6SeHp1KdOi%2BcpUvGQ9KVkdzASvWYgQG3NbilQNGQ3jZTDvNFO6mvUixOMrEFR27l9MzxZS2F6FuEkcZ1YKAtXQhNkr2FUKX4G3NJeEYX153IEWwFZ%2FmzMmF%2FqbxQlgqEDwnRdI0fFWnZuDGEsK%2Foy1kBtsb%2FdFstWoGIdeYXX5PC8PkUKoXV170vIn2kKp%2Fh7vY05RpveXgS0Pbc04BKkTCI6UftciMwu%2BdR%2BmJRNlahNFeTNFjAFo2XWfbMuqBOnwQigR7%2Bu4IBsQwZEXO9g6b9qMdslHQzmKZVwoKFTKR1J43HVGZae5jq4TW8t%2Bz8rpLb6yCwLTZh24ud4zC%2FwMTEBjqkAQPd%2FuZWiffutX8tT1jy2d2RhE%2FiK7bplNQ6f%2FA%2BK8zKH%2BqWiU415O9fz%2FSmI2LrL3Z6Khudeoa6zz7lBzgPUaQSExHPxHSwYCfSyFbvozR9IipNM0Oab5zVIawQcTUx0uwcc8Zs96ybQFik8mcWlnBCSN0A16ZuBJ48aUFtFBO9U8QbL5garHJFJnioIswB6o76FttMFJyEpx%2BV1jxhX5SyxMrT&X-Amz-Signature=24f590ab9b02ad9ec5625cebb49f233c859d524d9d348db36902fd5deda936a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CN373WF%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCqzzzBmml3I%2BVnxN%2FeEKF2cGYSlIU55nEpx8PpD%2FTZtAIhAKWeea3jolAsGacj72RfYlHLSWeYg1LqCAOrUN6RVYU8Kv8DCE4QABoMNjM3NDIzMTgzODA1IgzTBBsqXZr6cZngdo8q3ANAYfSY6h31vGHh0VOo4RunOWB5Poju%2FqSLm%2FP2L8k%2F8zrtvetqBGdCSkUsQegA3k9ROpFqynXBQnflqz%2BIL4kAhJez7YBypuUEeESmoIZY0%2BnFqSJ4XjeRHxDdiLlAC7HwLtjHwRUPI32HY5wNLvKi1cJPj%2BXFbi%2Fm1NOzLJFsYbYkAlIVxXfm6f8MPmwXxc8%2FhkaxT8eR3aHXnn5jMhkRbrl1sj%2FNsOTrL4U6fzqzetK6XTtTj9s8AUALVT2mcvnIxschcYoVV4i0z77NzSysHRVAFZC%2BgEMA5Bgi9Yxse7OX6knS7Uqt8e7YePQriDsk0hZvFrG8FdDxFui0xo1B4u2au0e%2FaUdhfCn3pQesdjxvETqdG%2Bm3dBGwenPxJdQYEGYnvuzpydHStKF2QflAJ%2Fma5LQFr52zgYRr3EZkOnnv%2FZRpQECJV8Z3bGtf4Zn9XtdbYf8hrznpHMvXqtb5EvIIAW%2BWrURhKEe%2Fp4oj3QglKxGcA0Wm5sfOzZdbjqw4tDFAqaRqcDX%2FxRg8fmKP3TvbOsoNltmtA5usH7Al1hxn9deNEldZVw7Ql%2FKBUBVqtXgrH5Q3CbSEvC9B9zaLU6ZmZzdOc7%2BwJ4A1ICngi4qU9Ox01S1ReIrYfjCiwMTEBjqkAYsZWWe%2FtaCHXIgFD%2FmXekIz3sH4JUcHpvZ4VD4KYDkXfMYG9lVx2U%2Bmgaw%2BFHOszRHTtGGp9nfucX3zQUs4WXrRF39ZlLoY2Kv4pgvwZktker60Iqyaf3B2CAcwD5yHPLiJpaOaZkJovYTPEZCnb3l0%2Bm27nCYWnR%2BnLrkqteJYKI9XgLZgXgkUuOI0yCgkDb7qWZDncs%2Bsk6WxkVexLpWNnTun&X-Amz-Signature=7e53a1462828ca8275759db0ea13604ac3907a001a21b7f558d9877f21dcf81f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XSAXBFI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T211002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCFSwbMMDZlTK1IYpKqUJzLIIW0aAXeamvWECEpD3I91AIhAPgT8G3SPx6DlU75UftpEWGmXC2wIxOTkTe%2F7SuS%2BV6YKv8DCE4QABoMNjM3NDIzMTgzODA1IgwJjaEYIUtWLVG%2FDRoq3ANGYfgR9TUi4XEmJWzMWK9Y3z6%2BQG84TyXzuSD0c9cONPNlTx9wC9yFwC1DXZiYEmwku2x0jN0PIwkW1fjWXTUElMBRlBIM20muiNpLCeTNYtPpVvNqHHRg0g1jCTRdgMVa6rj3vpqXs9vHZUk9HyNRP2Qy6s844Ym9z3ZchPqOBCH9bzcMltj6CBB0iK4iUaGH%2BTxP7Kl7bS1QZI2RLna3d%2BiYQaaPUrozWwDEpemU8JbIaPBBnTJrVXGgQbrxsEYk2JH9BWeeSf3eNpcG4eHdTR9SwEj4iTBkmCkX8lgEmggAaKeKaAlRfLkBlFcVnQ0V6cJG%2FzI7e2SDWvZSp9mABmpyYE%2F2KVAtew69qDi9GpyzpVMRIVaymiriIJ9Pn2EYiT%2F3GUrHTWs14snNsAUtzOkCqznDY7UEz%2B93Dr5c%2FzQYfNhNT%2FGwatYsrsvHN2IgzODB126%2B3apxQzJwEYZCVWiRp4lRg1p9x73PpGMK88HcbllkjEJpvXlkef6DRe852Z0j2%2F%2B8ugihyqrHUa1UBcRezqA8FSY%2FQAKCbmhrD7Sj523%2FWG1bBy8JS%2BhQ8Qrrgdzkse3M8UJCUrI9mt0kPUmHYW3XNB0QIIha3yB81MRNmyJaVZXk3sJrpDDhwMTEBjqkAUHvGw1pB%2F5ldR5w9%2FTfd6ItKPp1nFLXoAwAd2YWSQd%2Bk0FSyUuMEKO81G3hBT156pwYtQks1AN5SB%2BY6Nkpne0l2PmTGROt0xgNIBDtUmJLk3THMeQH%2B7RQdicdWRAeCyyygTUqXm9wsFwZv99kIPcALDNbuGY7s6GW4i3vxDHVEMam7I3tywUIe4nnc3CiGOb0KNplB1ggYqAKqvFBaWVaIvwN&X-Amz-Signature=4623121fd0a54ca42b22dd0cda46787726a144ba2fd214b04f0760d5cf4dbfd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMA24KAG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T211008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGUPMJGRg7dkhrSoYWLyjO58PKnXrzoulvrtfux2hsK6AiEA3pDn0RtyxU5R3gA%2F6RAfvBNvV%2FLZDwAHr82NWcEj5%2Fkq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDB1%2F4iLMEIrccqHsmCrcA0Qoom0kNPwFV1wvtYxIZrgjJcKfnxKROeXR1%2FTECLbDcBzjqQoPxKYkLeaGoyQIMKNkXvDVWFHBe3A1aY2BBG0cURS1q5YU9PAFrqp8Z1AHTD5iYhewp1uoJPv3%2FgESz8BMmcfDV%2B0opnklGg%2B6Cks4sXcu621fZNGajskOOEZANiXI3H7bHtDq9O9YuEDCCZ2ST2RzLup8DEoDdaBjRSIOQWx2RaLq6t1JawFmeTw84I%2B2BBLlQhG%2BTlv6NWvO6kNtQauTpPLMn8L5QgelZprGa9wv9xQfZtCggr9LQTx9FZc7blhH08wWm%2FspmJX7RodHgzngAIZsTNoBQZOuAoso%2BWcEuplu3g56Ar%2BJqt3xA9sfoWCwAWDlhXcZSICCL%2Fx3qtXHZHKDEg4UyvGFW6vIC2j3VyD4ICt1PxBddyc3cq7wCOxZ9DYrn20QYekpH081j%2BlXwQm4gSv5%2FjocFbniBXW6hv5Yt1YmFB4v8nu2RGK4ivDo3N5pUpuhJfOyBfYho3kadzctx%2FiMQL8kBxAh3ZmoHgNDgPCmoM3VrvP%2BQdvmQO0YeXNeWZfxc8Rh5CZj3%2BqS%2FfYdQqemaj3VjQrmUfVZdq%2FU716TlC5ZVZbfZNcz7eH59GNBoc8oMLPAxMQGOqUBI7uCHFCCQitOluWH8jEfnYGQbb3qGxcax58UqZJ2ZGK4%2BJODe8pj8PQUTuaL1xuLNj263yZyoxiaU%2BFosOJlIkL8mX%2BntlSTy7F8PusbiJYYaX4RhjHPz%2FBUYQqE4rTSeYKiyvgo22ixIvC8cPEyfAnTrY%2Beaf7vrfG9jUbrZSsPqZ01os90nFEOva2YeIe4W2Py0%2FnCUBEoPiPgBVStP3hqMNVb&X-Amz-Signature=ad3bf9abc438772ee6fdbcca0d0d110865c53830c0676557341b3f753ad82e2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKREF7CM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDOUQIhfWI%2BA5%2F%2Fn8U0vq%2FFl%2FY%2F%2F6znOh83KWKbhQpi3AIhAMfonWJ9agn5cfNNylCgk5lpz64uVpqprw2CV4k2FkAXKv8DCE4QABoMNjM3NDIzMTgzODA1IgzayI3Wfp1Q2%2Ft0xZAq3APsH9lJq3cO%2FSGDnmChga93%2Bnx8QrBIJVtjXABLS4GY6fLCGgc%2BJcSlbuRJnYdcMUpxgz6UzuAGGix2RrQDwCLxRWoq4W9j4F2g8yvBA2WzVR5M3MeR3brrhqaqiWYDWxu5u05fW61XiTtmHDj7W3uhZpK%2Bjrr6U8z5IA%2BxmHUs%2BTQxA1qXFyulKlYk%2BoSZY4PS72rQEnWTMHm1j8%2FTwq2Vpp0JXuB5VHakcWrGUCGTqAtVVpN11M5GVBJdNDgWXOeiZ7iIu2BR8Cs7FBXW8ADVZN0nJdBtiLtrafRxnnNp6SeHp1KdOi%2BcpUvGQ9KVkdzASvWYgQG3NbilQNGQ3jZTDvNFO6mvUixOMrEFR27l9MzxZS2F6FuEkcZ1YKAtXQhNkr2FUKX4G3NJeEYX153IEWwFZ%2FmzMmF%2FqbxQlgqEDwnRdI0fFWnZuDGEsK%2Foy1kBtsb%2FdFstWoGIdeYXX5PC8PkUKoXV170vIn2kKp%2Fh7vY05RpveXgS0Pbc04BKkTCI6UftciMwu%2BdR%2BmJRNlahNFeTNFjAFo2XWfbMuqBOnwQigR7%2Bu4IBsQwZEXO9g6b9qMdslHQzmKZVwoKFTKR1J43HVGZae5jq4TW8t%2Bz8rpLb6yCwLTZh24ud4zC%2FwMTEBjqkAQPd%2FuZWiffutX8tT1jy2d2RhE%2FiK7bplNQ6f%2FA%2BK8zKH%2BqWiU415O9fz%2FSmI2LrL3Z6Khudeoa6zz7lBzgPUaQSExHPxHSwYCfSyFbvozR9IipNM0Oab5zVIawQcTUx0uwcc8Zs96ybQFik8mcWlnBCSN0A16ZuBJ48aUFtFBO9U8QbL5garHJFJnioIswB6o76FttMFJyEpx%2BV1jxhX5SyxMrT&X-Amz-Signature=b07c452fba50b02d4488c282e99a7331a1e869b08b56089170f16c12c58f0543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656SG4DS7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T211010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBBjP%2Fhtm1p%2FlVpfIODv6s5x4nQ41svwENe%2FMlSzrTRTAiEAsk7phcLmXAqmZAQ8EsLMW2B1qVn0SxGMBAgoBofMS7Yq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIu8r9Ft%2FhNDCi1qbSrcA8n6viuzx435ilC1DHfOYd9Zw6PjZdXg7YNT4dMO2h7VF2LULcFfxwgewVMKFkHMjkvg2uFBmvLFRiqVaD9BQYRh7UeBjfa%2BU8l053gPskbqMgeNvt%2B6jDHB68K5FZw8%2BE%2F0EJgBhkk4kiiloW7jAxj2DfKWUbLGGlNtJ2QPPibZRq4vbO%2FEfgYHRr8OQC3QueA9K%2BNDyDPctr7rbwTDCJi5ZlZXsFoml5ImLXM%2FLpd%2FHLy2JbjFdLN6%2BOTgI9MZ3xqBT8lGGi%2B3859tAC9OxAORZegCFifWBMXeL6hkx98%2BSadKsgU70gp5bDQmu%2BAP1rKxGpcSpGE7uTiq7qvpTb9ZEbuoHyh26Tro%2B7vu%2BPG5YOaIGwz9wb3Z1n%2BSbBIqhsaKxkiOyPGtv9QhmXPP15l194p5JtwucjQdhXtF6TY2rkjgE6kYIeyDcvBogrkxkSTM%2B80UXnUbmeGa9ZQET9fWkTJrbs4ymCyg%2FH9jjtFjD9wUnVyyWHBkgnJvzREm4NLGq2lg4x%2BhI1mtT2HLTe%2FZ3udzzZPhnFfFxYWXJx22PDS2UX3SIT8jIHR0766BC9ukbpNcvZOyMhQD1E%2Fhp%2F1GkKabjfCZJ9NBmHZQWQTvZbuJfWsf4hSP%2Bt4LMN7AxMQGOqUBhrpU7pVqQ%2F4%2Fv%2BSv7%2F0X32B%2B1ysAPR%2BcqnelJ%2FkUQASSwJHqV5NvJamlE2dzK0kS9znyzastX4VIIaF6AcBi%2F5DqS1c%2BFKl%2BfqK%2BwVlru92Bne3zpmAgCiQL%2BMRHqLoSSbSVjfGqYtfiMaUwZPImjefFt%2FiGljI0DjxRdbClKZwxjlq14ydPInUrk0iZUeem6v5wfJ1Y1%2B7EztNDp%2BwZOUCIIAtJ&X-Amz-Signature=e5bc68185bc0a51c183e4277c5ed2673cd8009bdb7f4073194216391f3a985a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKREF7CM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDOUQIhfWI%2BA5%2F%2Fn8U0vq%2FFl%2FY%2F%2F6znOh83KWKbhQpi3AIhAMfonWJ9agn5cfNNylCgk5lpz64uVpqprw2CV4k2FkAXKv8DCE4QABoMNjM3NDIzMTgzODA1IgzayI3Wfp1Q2%2Ft0xZAq3APsH9lJq3cO%2FSGDnmChga93%2Bnx8QrBIJVtjXABLS4GY6fLCGgc%2BJcSlbuRJnYdcMUpxgz6UzuAGGix2RrQDwCLxRWoq4W9j4F2g8yvBA2WzVR5M3MeR3brrhqaqiWYDWxu5u05fW61XiTtmHDj7W3uhZpK%2Bjrr6U8z5IA%2BxmHUs%2BTQxA1qXFyulKlYk%2BoSZY4PS72rQEnWTMHm1j8%2FTwq2Vpp0JXuB5VHakcWrGUCGTqAtVVpN11M5GVBJdNDgWXOeiZ7iIu2BR8Cs7FBXW8ADVZN0nJdBtiLtrafRxnnNp6SeHp1KdOi%2BcpUvGQ9KVkdzASvWYgQG3NbilQNGQ3jZTDvNFO6mvUixOMrEFR27l9MzxZS2F6FuEkcZ1YKAtXQhNkr2FUKX4G3NJeEYX153IEWwFZ%2FmzMmF%2FqbxQlgqEDwnRdI0fFWnZuDGEsK%2Foy1kBtsb%2FdFstWoGIdeYXX5PC8PkUKoXV170vIn2kKp%2Fh7vY05RpveXgS0Pbc04BKkTCI6UftciMwu%2BdR%2BmJRNlahNFeTNFjAFo2XWfbMuqBOnwQigR7%2Bu4IBsQwZEXO9g6b9qMdslHQzmKZVwoKFTKR1J43HVGZae5jq4TW8t%2Bz8rpLb6yCwLTZh24ud4zC%2FwMTEBjqkAQPd%2FuZWiffutX8tT1jy2d2RhE%2FiK7bplNQ6f%2FA%2BK8zKH%2BqWiU415O9fz%2FSmI2LrL3Z6Khudeoa6zz7lBzgPUaQSExHPxHSwYCfSyFbvozR9IipNM0Oab5zVIawQcTUx0uwcc8Zs96ybQFik8mcWlnBCSN0A16ZuBJ48aUFtFBO9U8QbL5garHJFJnioIswB6o76FttMFJyEpx%2BV1jxhX5SyxMrT&X-Amz-Signature=162e15d06fd17a0b701ae66974fb7c5eb1cbe679127ba760f7c8560cb7e36aca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEH6FSZQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T211011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIBRBgbNGRzSS%2BmPKhjTUNHo%2F5BoWcMrMwsJC8Adj3sC5AiB4rC9Yazj3k5Vw2oHzLmv1BsOXS%2BQM4M6yloWG8Cqk4Cr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIM4Abr8rwILVVtqRirKtwD%2BckUy7193OQ4xQy4X%2BFq0S%2Fqig3Zpr4Wq7pmH1lZyyaiTiZwX2lXAGfvLK%2FsGzZhlaFAIvux%2BlUa3ml2yi2V4LrYv2rLt1r5vPDhKWbneoANRbRBY7%2Fxj1H%2FRuHCgO%2F56A06Vj8KNP%2Be4TgoL61zHpGgMt0cwxu6mJumQ55QNASzDcPn2%2Ftr8ZK8pnOx0RODmhx9DPNwMNKM2yYBUGOhTSO3Knfcm57mhVCCL3XNwq00%2F787AuKwdNBUP6PpT63v1aV83RCkTVvtwrHGCn2E4CyHN%2FLA4J9zC05rK%2FVmNlodwVdjnLmzjIdU1RSMLUp2wdXomcibL2z%2Bi6PEomF037cj%2BILSCl5f3x0JOkhord%2BXWhvAU0jFLobWPlQ4wCHWuyiApP0sPCHl1iwc9Mo4rl8eHcBL9XBqj5gXI%2BdI79s6MczOF6qRBzZEvvhD0ZDI7ggsVAMWY0hsTgQ2vdEV1YSRdztm1OSMPxlTCuYZew6skfrYwJDq5vWFFs0cmvveAT3M0Kwdx8HvsiuFJ3L%2FanTyXN3PqXQOXvpyT831dsjEp2YhllJLpxzz0m48kSdwj9aTjajPkR1FC%2FW7ONMAqJYJoCW0irLRxai6hF1LnXgoA79cH9SWY5geA9UwxsDExAY6pgFfrn7xP2ehzjAPM0pnzdd9HX5qX4idCcT2LndDnzOf%2BC1alqHFX%2B8o8%2Fe%2FX8rd0pW4Flo7OwczkADHWSIbYaC1zmZnSESlz9qF%2Fal5I9WDmBx%2BBegRGceTmpJDxDZ37HzAdm3aqvm6yXJNeZ1T3fS86VLQRpw1FbLzBg50JNB1ROcK0IWx48%2FQwnh5a%2FulPfrHNLqBN8oHTbkiDl%2FbN5czvYn4KzdB&X-Amz-Signature=21b3a326bc78a082b0261f03c8f37da0e4731f1dae286ce7dd8056cdc8f75d8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKREF7CM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDOUQIhfWI%2BA5%2F%2Fn8U0vq%2FFl%2FY%2F%2F6znOh83KWKbhQpi3AIhAMfonWJ9agn5cfNNylCgk5lpz64uVpqprw2CV4k2FkAXKv8DCE4QABoMNjM3NDIzMTgzODA1IgzayI3Wfp1Q2%2Ft0xZAq3APsH9lJq3cO%2FSGDnmChga93%2Bnx8QrBIJVtjXABLS4GY6fLCGgc%2BJcSlbuRJnYdcMUpxgz6UzuAGGix2RrQDwCLxRWoq4W9j4F2g8yvBA2WzVR5M3MeR3brrhqaqiWYDWxu5u05fW61XiTtmHDj7W3uhZpK%2Bjrr6U8z5IA%2BxmHUs%2BTQxA1qXFyulKlYk%2BoSZY4PS72rQEnWTMHm1j8%2FTwq2Vpp0JXuB5VHakcWrGUCGTqAtVVpN11M5GVBJdNDgWXOeiZ7iIu2BR8Cs7FBXW8ADVZN0nJdBtiLtrafRxnnNp6SeHp1KdOi%2BcpUvGQ9KVkdzASvWYgQG3NbilQNGQ3jZTDvNFO6mvUixOMrEFR27l9MzxZS2F6FuEkcZ1YKAtXQhNkr2FUKX4G3NJeEYX153IEWwFZ%2FmzMmF%2FqbxQlgqEDwnRdI0fFWnZuDGEsK%2Foy1kBtsb%2FdFstWoGIdeYXX5PC8PkUKoXV170vIn2kKp%2Fh7vY05RpveXgS0Pbc04BKkTCI6UftciMwu%2BdR%2BmJRNlahNFeTNFjAFo2XWfbMuqBOnwQigR7%2Bu4IBsQwZEXO9g6b9qMdslHQzmKZVwoKFTKR1J43HVGZae5jq4TW8t%2Bz8rpLb6yCwLTZh24ud4zC%2FwMTEBjqkAQPd%2FuZWiffutX8tT1jy2d2RhE%2FiK7bplNQ6f%2FA%2BK8zKH%2BqWiU415O9fz%2FSmI2LrL3Z6Khudeoa6zz7lBzgPUaQSExHPxHSwYCfSyFbvozR9IipNM0Oab5zVIawQcTUx0uwcc8Zs96ybQFik8mcWlnBCSN0A16ZuBJ48aUFtFBO9U8QbL5garHJFJnioIswB6o76FttMFJyEpx%2BV1jxhX5SyxMrT&X-Amz-Signature=33ad5510da238acac837c273105ce48e3c60728a7527194c34c11199dcdb3e05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DT5FTJ5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T211018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIEeOkBtYmKAZyVGV0awt0Q5wF4CPNMvhmUbeFJUm5Mf7AiA20sQfjoPSRG3i9dWDlwOVUOAemi3uhOCZw4GJei6SeCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMsiRvZlTdrtQG8LXNKtwDtlsdCAg3%2BaABvyy4CsEKlpnBkqtycia3LFPlzpxURGiAQCee7cvPc%2FcS2RzLr2TUSQK9kom9ubvt0vtukxPM2fMrSYzDUhqCDA0DwZG848CQK%2BlXlBCGzwlbS3jgEKdPuaG6HvAdnSz5s6m0Z4Oukpz2sLdXk4K1bLHYAQLhRtxCHBWoBJJfHINi3smWHng4EY%2Bh6jJ%2BkWCGHeKgaxULt8FRsN8UhuZWqnP8h6pxVRlbzg7ubupSnR1hQ4q3P1%2FyTzLiBwG46KdFRsFZ5IAzAb9%2FNg%2B4g0RkX7swfitqgW6ahjcaYdECmSY3K9zoTJ72yjxJwJSMMD2w6mdqw%2FfmTZMNdiqzvdaKDQSn89yysZANID6JJXVzW1hlmP2ROMnFBNdhlk7saK6PMlrZB5qMviQYnkseHvp4r7JGOFAOGC2S2KZaOoR19dL4m9PCxIWzTpWBcgEqvrJfXRbFG0rnGP4kefPEPrmDdQznJ2FYSx%2FZ3aboeyN5tVIZYpMV2pDtyRcEzUm6n2a7Jtpzr9Rf8Dej0hm8PunWye6k%2BA8rPvUw%2FnkZDKjsjmvQX4HJ5pCBAe%2BsBywPnXFedbKdOm80eJwciPKtPaxrO0%2BN%2BLn82wp50ketPWunXd4pv4Qw4cDExAY6pgHy47fCNmfvOE6LM1pDdPePu5qhaAp2DhSfD2dSmDmiksfWLn%2F1k4WN8O4XiPQiw5tW%2BlmnAcBnwr%2BaJzSDSmlZYwqrUGzrjh5FZUMP95DEKdFd%2FPFB5mxNb1KqCY5N1QzVcGZrEB%2FuaY5F0PZw%2F1OIZa7jG06XnUflzyrIA3lx5QfMqHModaw%2FhulpJsQT4%2BEOZUXw3yY1wc80DMcqTxIUtwXXeuo7&X-Amz-Signature=acc8af3736c1b3548643643d9f7390b433eb6d3f678683ddac4bf16bcd428167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKREF7CM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDOUQIhfWI%2BA5%2F%2Fn8U0vq%2FFl%2FY%2F%2F6znOh83KWKbhQpi3AIhAMfonWJ9agn5cfNNylCgk5lpz64uVpqprw2CV4k2FkAXKv8DCE4QABoMNjM3NDIzMTgzODA1IgzayI3Wfp1Q2%2Ft0xZAq3APsH9lJq3cO%2FSGDnmChga93%2Bnx8QrBIJVtjXABLS4GY6fLCGgc%2BJcSlbuRJnYdcMUpxgz6UzuAGGix2RrQDwCLxRWoq4W9j4F2g8yvBA2WzVR5M3MeR3brrhqaqiWYDWxu5u05fW61XiTtmHDj7W3uhZpK%2Bjrr6U8z5IA%2BxmHUs%2BTQxA1qXFyulKlYk%2BoSZY4PS72rQEnWTMHm1j8%2FTwq2Vpp0JXuB5VHakcWrGUCGTqAtVVpN11M5GVBJdNDgWXOeiZ7iIu2BR8Cs7FBXW8ADVZN0nJdBtiLtrafRxnnNp6SeHp1KdOi%2BcpUvGQ9KVkdzASvWYgQG3NbilQNGQ3jZTDvNFO6mvUixOMrEFR27l9MzxZS2F6FuEkcZ1YKAtXQhNkr2FUKX4G3NJeEYX153IEWwFZ%2FmzMmF%2FqbxQlgqEDwnRdI0fFWnZuDGEsK%2Foy1kBtsb%2FdFstWoGIdeYXX5PC8PkUKoXV170vIn2kKp%2Fh7vY05RpveXgS0Pbc04BKkTCI6UftciMwu%2BdR%2BmJRNlahNFeTNFjAFo2XWfbMuqBOnwQigR7%2Bu4IBsQwZEXO9g6b9qMdslHQzmKZVwoKFTKR1J43HVGZae5jq4TW8t%2Bz8rpLb6yCwLTZh24ud4zC%2FwMTEBjqkAQPd%2FuZWiffutX8tT1jy2d2RhE%2FiK7bplNQ6f%2FA%2BK8zKH%2BqWiU415O9fz%2FSmI2LrL3Z6Khudeoa6zz7lBzgPUaQSExHPxHSwYCfSyFbvozR9IipNM0Oab5zVIawQcTUx0uwcc8Zs96ybQFik8mcWlnBCSN0A16ZuBJ48aUFtFBO9U8QbL5garHJFJnioIswB6o76FttMFJyEpx%2BV1jxhX5SyxMrT&X-Amz-Signature=082c482095b4f25b5d81d8a82a92063d4528a84d7d3a895906729328dc58d745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYWM4HA5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T211020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIF0ohNR8gs4ZemVfjUwTGP9OCLRLcT4ibYuDvbfHTL2eAiASSA%2Bj0KJA%2BBwnn8HB093wlNyqNtfEC7ZtP2PKT%2BmMICr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMIdSwpq9WHE7yrxNHKtwD1i3mvb7n3Kp9hJVacTTmrdFskFfKGtoByrWF3JlZ2VTocgWIAQn3nuKxwGqHnqOxsxHl9wvVEu9DOvGAiXMO5kJBnZXlXhTH7KDaj2WkhBjvA4YMgbEhCRp4Y4fJ5FEPmmwwHDJAvaHT7DbvnQZQq3aqEyY7%2BxPLVX1l236D8pI7R%2BWfn%2F3NRisIcq22kQziODBZqLoqFkN2jgHEvP03mcWSRkML5RzLukatIptyrFp49aJOuk%2FgtNqs9dJeVcpTXCjof3g5aCcXfEVa3S8BndIvrv1ccnSwnsRVBIG2U6GlxHK6bFIXJYN0MoYLw0MNgDx0JAB5OdHHOVMjo3xe4Ig6HrFaEPN1lElydRWCx05DyvTIEiYLzQa8X6cY640iRUdS%2FFo1K9FzL5wda7K9SqmHTyqxplcdZTMtfPF5%2BuXdW0fURyihgQV6QIer2v%2BdDD9KQdnTuqmftj0UwMVojdIC3o1755qP60uwwMUmyRls7yKIiYlT7D5ClmGQ6pdRQy2fgNA3XkvtB0PA90VR%2FJy1EehWqiHvKVOyfVxKGhmY8n%2BheTVPPqnJCfG0FNfeb9EQlb%2BnabsjxEA%2BsDZepcEfcgv8RnMXJIzwVmy4sOHWF4jPUI2uBIiWDtIwp8DExAY6pgFUuMfPyopoqPJtDFhZNNscc%2B7Ljd4aOZ1hxvrb3WQGwBuoJY2B2%2F76%2F7pr7g%2B0%2B6RyNxuev1quNtIoVnl3wPSbUV8bSZoGmSxZRMzIsFbOmcxKm1RCOfNokm0MrYr7EiCVg12rsNslpi219rfYkkh4Ch0n6i2vvq3yAIUqb9%2FDCEXbs3sbgq2FZws6l8gkAt3BcpGhZXqQ2vtq%2Ff3kKbOf%2BO8cU9eH&X-Amz-Signature=ae940342615527b404c9b5599e1180279ab522f9ca95a43927d4c0f3565212b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLIT4JSW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T211023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCNXF1OEuDp0K%2FBwfJ5W%2FSp38tdUMVt2IbmFkIT6pHmUQIge4iYxd%2BVVsP0hOedWW0cQY6p0OLOkfxJMFkG4OXACqMq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDExeytFTGySie9Uf%2FCrcA9Yn0SGO0HviPHhY%2F0QWJfjMAJmAAi4r9F6vKo%2FL8AwzY%2BUdFBq14pOHdouUCevsdoMsdCDb036Un9cEX8Z4hGHTO7NwnIjM5YqGat%2F%2Bam%2Bluom0e8pyLD5I9OJyRB1e50ADIERQmeBeDHXP6aLOY9OpEQPDKPMvaYev85hZlpGRdLm%2FHK%2F9ZvlGcsQu9QNblxpPB9kyCrU%2FHx%2BABlNhtWWB79YgAKi%2B3WjrwZX2CY1zhfywbUk8N2abdF16JRHsWP4GIm1RwTvszk%2FSzcPTV7MCIrIC5qjO%2BiaYjmpAG07j4zRH4bV5Im6peYqLCz4EH%2FUj2KFJ2XWgLfiPshqWsAOCu6PKQpRAOlwNK6SBCGuHw0ohuuDW4%2BKOcvuM7U4DgNGvtKHORIyzLh%2BPBKQnhbZY5dNgl1m8AW81iMUw%2Fqh3rsxfRD4hapbHfT7mRJ0173RBB1fKvHGyBxCcfh%2FCVGM3jHvmztf10kru69dIcf9q%2FFh3sb%2Bf31Zb%2Fk78rCLQupdZTqhZ8ZyLf1yzWrOQoiwEJKmKQKUV9YSgf9G2LXXQrqMm1W8D8W9ADQGNVijMxp5HjKClxlMNguAjKJOJH0miZOzmGZv6GIgYZUh2MUJVH3JFdc1i4LWP9fh%2FMJjAxMQGOqUBWIiCC5KcHKoPYp046Wg25A53K1zaTrzslig3bW1AteVmndj%2B%2BaJeqUha%2BhzO13EUYg2WEh3ilrIKpeZXwfP5HIrEIxR83E%2FdoefwX1U7pCamK0qFDT19AalPWC520sneMoWEc8MaaXAhQSXhp%2FQXXa6kuctXVPmdBwbXEhpXzB7ASRjnCCcOhRQbM8l7bvb4GEtJP1kMqJK2sh%2B74VSdz1EfuAwz&X-Amz-Signature=666bb63e9456b1de10053064ead59e594a5995da54872e5914931bec45562c5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCQZVJHB%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T211028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCVtCbTMcqxd6yECs6gQd%2BoMFY0ri7IM%2Bs3S%2FIbUakeugIhAKUUCRrFQ8cR8%2FIPRp3HBrvliBY6nDqf%2Be%2BJ8b4oRzTrKv8DCE4QABoMNjM3NDIzMTgzODA1Igx17uqwAC1xE5K9KnIq3AMC%2FRngLo5Y3MPAXI1eosJ3QwWMnzvw7NNFFER4UwfMxmmRmGcmgMb5JRxB8yLKCH8EP7VxZ3NTIDYO%2FV2EQey5iMHdSUV6e%2FYWEw%2FrI7MEYRH94mpCEtNg%2BudFNKQXepu2ZYAyX2948a%2FotIBRseUIcoarH36JKSwQ8f69a8fUgXaFTXEtL1WIOOx2xH2QxpLkXRAxIRD96LwBCcHGk7kncNWnsKgPZJwHomuTTDBfpLmNyy0qCps1Dg%2BZuCVjH2Er1xkB3sh36asIDNwgykhck6FR2O5GOf%2FWckzJ73yNTjuzbrDBYVT%2Bwt2IhyKCIFx3lWPtTP4HuJh48%2FqHVipT3c%2Fk2lg%2F60bwwzhHmYfY%2BIe4203aQEf8tzRw%2FsUwsIotHH2h4lcXsmQszGft3WEhi%2BW%2BAGKJiU%2BLALWQzoZZBfRJlh4bSvoPDYL2Vc1V2kX7EtkfMEiD4ILMJj2p6iQoYLlF18kXjXhZ3mQvlKMg51reBn%2Bl5BkhvpnbgsGQiWkqMbBrNXEF%2FS2UMgJ4%2FZVNOwJB0rk5LMxgcBclLd9jXZWoJZJ6mjqa1JbBDAqVh1ZVOnWwmoP4LcbvaICSJflZ2kHBkvr8ZjHipCCwlp6RjrfpPuNKsVOn6a9UaTCfwMTEBjqkAZBsmPkpfiAWZshYytUmUby2bTopIcDafhGsE16jnvtquI6WX2L1Xl0kBcL0jnTCnbQPY9XH4KqWOwCvjji5coX4leEVGonkQxGOClJ6N%2Bm04pKuxQW9ote0K5ORafW6Gdz7k4f%2BrwbrvDjT9cQE6c%2FObO2YnXQQpkUwDGojBsuRRCGQWiofASM%2BdP7RAD0IDGDhJMQ4YMTph43ioBZDE9Nj46Mq&X-Amz-Signature=cf8932b408d9012e3c7cd424e1e24f3d21fd1abfe68bf015b2c337585cbb4ac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QLIBKFG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T211029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQD9oY1znuCgaM4W%2FME2ucvhIKdNR%2BNTAB9d6Ud2%2FH175AIhAPzykCYO2vkw946%2B6HOE%2B%2B3f6exe5H%2FXTb0Vn5OP3uXSKv8DCE4QABoMNjM3NDIzMTgzODA1IgzjbUekQe5vXeMlfXkq3AN1JbNh8FlyZPk3HZRd2rDYxMvLQlVYV8H2HFaOvCMzAPkcxuUdSk3kKMF9WyC8DRkMGhV1bvfw1S8aIUx2Wj21dk62v6wwchATndn3VgzVZAjHDj3ilBIgO3GsSsAKWhZaMJbkVvCIr1QH4HI7jFXOwgzydKrEjY8IHxGfMN%2FBzjgcE%2FsrLNuYZJKgDeJhZUYQwMOdAzX054Tn4L9sVm6hNzBVUHePH1JK21N7Qx5g9C5wFN5wZi1cDbS3LuM7eScvM%2FHhuiDoesdkQvLVol%2FSo2y4HrOGnhE%2Bycl6hWh1fEO028C5visRdxnSBotk8VS%2B4u1T59sRbYeKzUWJ1ftzdXlPtj3C0SqIaBLItUTmeZUpUEVefyjHgR%2BuJNy8FL3MCOtSAm8Sj%2FM5BsX6A7HMTiBihKIZY2c5LzL5OEQoU2wsFuWFRimdf0Ot6dLyQtu44tUH8XKcAT4Z1aQKQajLsDLb5NKnZarOhAsjOQL%2BuJNjZCjHlVNOG%2BJFUsPutIU9bu8q6XBhnX4j7596IwOlRYoL6f2RDyYiTmobTSoD%2B6s%2BopoHxQR8uyZgOScrtkIzbFFHqhcuWMmd0tvpGEPuEO2fTQg%2F2UCWBuoKS8zLkvnbGTFDfvwOnmsjIzCuwcTEBjqkAZS%2Bu8YkxzRoalwq4yfE8lTCCmTjItQPrfv5vlLBtfWg%2FydIKe064%2FQKmSQsNp02Bh0P%2FqwgI44J0uIYxwEotEOYlVa1tsN6HQ9BuQ0aGYfbw0%2FdTZNipKl3UyybY33R8QnLAuMdt37bxF8IziZpPHTbmumnLShnTiJJncko8by5NOYsMC0Xf2Ihp%2F8iIC493HSxw5U%2BALkKAJ%2F2Bk5BMZatlMW%2B&X-Amz-Signature=bc63b63c56187629835de08e569d4e9d6c91ec40aa11588a9b32e2cbdfd16acd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN2ISZX2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T211031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCI4zJhMRkE%2BZmrnj3Dlw%2BOUZ4mvs86qWg09%2FFCzoMvGwIhAPiR6AXwi%2F5DN%2BhUhln%2FQs0oITAD5ceHxVoqR5uQ7QtaKv8DCE4QABoMNjM3NDIzMTgzODA1Igztdgc%2FH5OI8%2F2mDJoq3AOY8deQm7SubxC13q8IAv1JPdvpKhh0dFCekopxD2zcxhm714W8Du3%2B0AXzRVJ%2Fznc2qcqlDDBB1SO1up397wD5OCAmcF7RFUqq01OzehkSw40Zr7QfIHXG1HQ35PqwEoWA3ljMSpc2q3TOvU%2FbFLOFjxx6j0CCIVZ6UPap%2B7006d93ITU8UnBPHkBE3ufi9C9EXlshGlQ4OUJE94MZSy6ZY2L1BOyIf5%2Bxof4Hg2TIe8wOYHtU%2Fo16vXJa%2FYTVN4Usi87xwprUc64h4%2F9UhT%2BtsfFcRt76iG3YYSqrpO6WGreVdi7LorAxWyqs%2BrNGrffYjg9R2uzZEJam7CpZFIxpKZtvC4QydvRbeSavVqAeivbkvarQ6aRbX2KMx8Lli7WPxhBtWgQzPxlIS68TxgSDAaD8lX6UcQXTMN0PYESmZkvbw3C8XZUewjwg78JK%2Btf0o%2FM89xxQqXm6LPz5TFyAJEpspgW6K0K6Y6B1K4dB%2FxPKUVzPL14UVBQrixGB3ccn213CJLzRS8Wc6903iKnu8Ui3IYABXvqyzBm0lmcWy9kToanD7J08RTTCux4cwwDXBusrP6BbqmU%2FbW%2BJfifuhjUMZ2wXdOkuXboAT6Dfo4azMjA%2BIQaRg4J8JjDvwMTEBjqkAaEdrluzKMLQqBhcskSneKIOX0w1Yx%2BiXfNcNIJ%2BXJSbzdPFghQFhTGqAKvot5GH%2BUpvC7tAhsuESMfNg1s0MKnuoCvvymUtiKS26X7E9utIC3Rdtl7aC8W1EguZV9b6h8JbuHZ9N17rR7HhO9USy3PdSC8BR%2FWoPQFRm6lVM%2BVGjehhULJOITk5ptoA5EVtQsVIuGU9UrwgWW5TeIV5T47kkGkP&X-Amz-Signature=53a0eb5281e1be0171bd2c2cd20a685f0eca7e59b7ddf8fe1c892c11df12c218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKREF7CM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDOUQIhfWI%2BA5%2F%2Fn8U0vq%2FFl%2FY%2F%2F6znOh83KWKbhQpi3AIhAMfonWJ9agn5cfNNylCgk5lpz64uVpqprw2CV4k2FkAXKv8DCE4QABoMNjM3NDIzMTgzODA1IgzayI3Wfp1Q2%2Ft0xZAq3APsH9lJq3cO%2FSGDnmChga93%2Bnx8QrBIJVtjXABLS4GY6fLCGgc%2BJcSlbuRJnYdcMUpxgz6UzuAGGix2RrQDwCLxRWoq4W9j4F2g8yvBA2WzVR5M3MeR3brrhqaqiWYDWxu5u05fW61XiTtmHDj7W3uhZpK%2Bjrr6U8z5IA%2BxmHUs%2BTQxA1qXFyulKlYk%2BoSZY4PS72rQEnWTMHm1j8%2FTwq2Vpp0JXuB5VHakcWrGUCGTqAtVVpN11M5GVBJdNDgWXOeiZ7iIu2BR8Cs7FBXW8ADVZN0nJdBtiLtrafRxnnNp6SeHp1KdOi%2BcpUvGQ9KVkdzASvWYgQG3NbilQNGQ3jZTDvNFO6mvUixOMrEFR27l9MzxZS2F6FuEkcZ1YKAtXQhNkr2FUKX4G3NJeEYX153IEWwFZ%2FmzMmF%2FqbxQlgqEDwnRdI0fFWnZuDGEsK%2Foy1kBtsb%2FdFstWoGIdeYXX5PC8PkUKoXV170vIn2kKp%2Fh7vY05RpveXgS0Pbc04BKkTCI6UftciMwu%2BdR%2BmJRNlahNFeTNFjAFo2XWfbMuqBOnwQigR7%2Bu4IBsQwZEXO9g6b9qMdslHQzmKZVwoKFTKR1J43HVGZae5jq4TW8t%2Bz8rpLb6yCwLTZh24ud4zC%2FwMTEBjqkAQPd%2FuZWiffutX8tT1jy2d2RhE%2FiK7bplNQ6f%2FA%2BK8zKH%2BqWiU415O9fz%2FSmI2LrL3Z6Khudeoa6zz7lBzgPUaQSExHPxHSwYCfSyFbvozR9IipNM0Oab5zVIawQcTUx0uwcc8Zs96ybQFik8mcWlnBCSN0A16ZuBJ48aUFtFBO9U8QbL5garHJFJnioIswB6o76FttMFJyEpx%2BV1jxhX5SyxMrT&X-Amz-Signature=1dad8967843a47030533c1942f5b07682617620db6367e63fada743df4e20bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKREF7CM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDOUQIhfWI%2BA5%2F%2Fn8U0vq%2FFl%2FY%2F%2F6znOh83KWKbhQpi3AIhAMfonWJ9agn5cfNNylCgk5lpz64uVpqprw2CV4k2FkAXKv8DCE4QABoMNjM3NDIzMTgzODA1IgzayI3Wfp1Q2%2Ft0xZAq3APsH9lJq3cO%2FSGDnmChga93%2Bnx8QrBIJVtjXABLS4GY6fLCGgc%2BJcSlbuRJnYdcMUpxgz6UzuAGGix2RrQDwCLxRWoq4W9j4F2g8yvBA2WzVR5M3MeR3brrhqaqiWYDWxu5u05fW61XiTtmHDj7W3uhZpK%2Bjrr6U8z5IA%2BxmHUs%2BTQxA1qXFyulKlYk%2BoSZY4PS72rQEnWTMHm1j8%2FTwq2Vpp0JXuB5VHakcWrGUCGTqAtVVpN11M5GVBJdNDgWXOeiZ7iIu2BR8Cs7FBXW8ADVZN0nJdBtiLtrafRxnnNp6SeHp1KdOi%2BcpUvGQ9KVkdzASvWYgQG3NbilQNGQ3jZTDvNFO6mvUixOMrEFR27l9MzxZS2F6FuEkcZ1YKAtXQhNkr2FUKX4G3NJeEYX153IEWwFZ%2FmzMmF%2FqbxQlgqEDwnRdI0fFWnZuDGEsK%2Foy1kBtsb%2FdFstWoGIdeYXX5PC8PkUKoXV170vIn2kKp%2Fh7vY05RpveXgS0Pbc04BKkTCI6UftciMwu%2BdR%2BmJRNlahNFeTNFjAFo2XWfbMuqBOnwQigR7%2Bu4IBsQwZEXO9g6b9qMdslHQzmKZVwoKFTKR1J43HVGZae5jq4TW8t%2Bz8rpLb6yCwLTZh24ud4zC%2FwMTEBjqkAQPd%2FuZWiffutX8tT1jy2d2RhE%2FiK7bplNQ6f%2FA%2BK8zKH%2BqWiU415O9fz%2FSmI2LrL3Z6Khudeoa6zz7lBzgPUaQSExHPxHSwYCfSyFbvozR9IipNM0Oab5zVIawQcTUx0uwcc8Zs96ybQFik8mcWlnBCSN0A16ZuBJ48aUFtFBO9U8QbL5garHJFJnioIswB6o76FttMFJyEpx%2BV1jxhX5SyxMrT&X-Amz-Signature=4838e24450591120cc0844487edcf2fe94293cefab84efc0ee359ea10f301f4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLBZKG2S%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDQNxNkCTBd3zZiSJxQBMbqRWe5o56liBvXiFtzfwnmWwIhAJD88dRnQgxZljeaXQ9yjfQG39HgayXbuBOXFdBTWJOtKv8DCE4QABoMNjM3NDIzMTgzODA1IgwNm2gWc9O804vX3FQq3AMsOuXE3QjpK3H4vu548uhfr6REFaEYRXPJMHgQrzTGy2BQaEnzF9REbUCUw2%2Fmrk61lEEEWKHAerR%2B6trahdf%2BWGY3ogFMdYxJ98NRdwhGWQRWkZa2wO2lXwG46UCGPa72OrXsiqxrytjnv41YrXiq1c3DUyzOMeYJA65oA1JpTVCey2FY4a2YU%2Bjd0yXhzHBIyCM1c%2BNg8V3RQ4fdZabTQh%2F8LP3IvnQCXJWLyqnnnCB2jkaMEqyQEf6%2FV%2FC6x7y%2Fqpfhm9seEZnMWQXXdESlx%2BDo8juI8UdPD684GJRpBbiUupARj8RhCsp9hac3waDb7oMXv7%2FZFUmuSoj6Z%2BeeSPSF1nhIXgrQ%2FeK2z%2FzxFsUAA68%2BFB%2BwjCjjUc%2FehxM5SLB93%2FD3mzVBhUuyBwN%2BvJOmgU8XhXvLzEMrXmpYv0IKRr%2B2QZmuHwNTqj6K26%2BMuyJ7MfCdqiGoctBiFGRZJiTXRoKnGDkCyKZH53REHK7nEC5rn6DvG5TwlJ1aGvajv4wYcJpqE1WQ5LpjAN%2FE5vUtcVfVBfDmE5XTYfyRmsjfvL4XwfCi6oy5OLpFtloB9Vi%2BfqAu2HlLs2P04QQQg3wOp86rTJOkQqMhX45vWaXB1O83DSXcTXmBljCrwMTEBjqkAaWNSk0vJ6nTJV%2BqlPguXZJd%2F4X2Pi3IposUBo7ZTRlm0v1rXmq1H87CSxpAVsJGLtr%2Bnvz%2BEQTInIJx9RypnBjyjEg5GxoVb40WXshY1vwtCVW0Sde0j3B8E5TtaxAStVu8M9WYhBFsImHGUJ%2FcklFOhuLm51cHIoVEeK%2FjwXiZgKF0wSxzVLE0C%2FeoOCAS24%2BJtjbnIL33rhvYDCsJAH9a6DuY&X-Amz-Signature=def68f5d32ee3baff0a6a8c4ee4a507bfd31c300989e884ef28216b3fed230e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLBZKG2S%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDQNxNkCTBd3zZiSJxQBMbqRWe5o56liBvXiFtzfwnmWwIhAJD88dRnQgxZljeaXQ9yjfQG39HgayXbuBOXFdBTWJOtKv8DCE4QABoMNjM3NDIzMTgzODA1IgwNm2gWc9O804vX3FQq3AMsOuXE3QjpK3H4vu548uhfr6REFaEYRXPJMHgQrzTGy2BQaEnzF9REbUCUw2%2Fmrk61lEEEWKHAerR%2B6trahdf%2BWGY3ogFMdYxJ98NRdwhGWQRWkZa2wO2lXwG46UCGPa72OrXsiqxrytjnv41YrXiq1c3DUyzOMeYJA65oA1JpTVCey2FY4a2YU%2Bjd0yXhzHBIyCM1c%2BNg8V3RQ4fdZabTQh%2F8LP3IvnQCXJWLyqnnnCB2jkaMEqyQEf6%2FV%2FC6x7y%2Fqpfhm9seEZnMWQXXdESlx%2BDo8juI8UdPD684GJRpBbiUupARj8RhCsp9hac3waDb7oMXv7%2FZFUmuSoj6Z%2BeeSPSF1nhIXgrQ%2FeK2z%2FzxFsUAA68%2BFB%2BwjCjjUc%2FehxM5SLB93%2FD3mzVBhUuyBwN%2BvJOmgU8XhXvLzEMrXmpYv0IKRr%2B2QZmuHwNTqj6K26%2BMuyJ7MfCdqiGoctBiFGRZJiTXRoKnGDkCyKZH53REHK7nEC5rn6DvG5TwlJ1aGvajv4wYcJpqE1WQ5LpjAN%2FE5vUtcVfVBfDmE5XTYfyRmsjfvL4XwfCi6oy5OLpFtloB9Vi%2BfqAu2HlLs2P04QQQg3wOp86rTJOkQqMhX45vWaXB1O83DSXcTXmBljCrwMTEBjqkAaWNSk0vJ6nTJV%2BqlPguXZJd%2F4X2Pi3IposUBo7ZTRlm0v1rXmq1H87CSxpAVsJGLtr%2Bnvz%2BEQTInIJx9RypnBjyjEg5GxoVb40WXshY1vwtCVW0Sde0j3B8E5TtaxAStVu8M9WYhBFsImHGUJ%2FcklFOhuLm51cHIoVEeK%2FjwXiZgKF0wSxzVLE0C%2FeoOCAS24%2BJtjbnIL33rhvYDCsJAH9a6DuY&X-Amz-Signature=d74f71ed1ce421351709d0620c2c1948aa812b4566c58e021e2c17e9f33098c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLBZKG2S%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDQNxNkCTBd3zZiSJxQBMbqRWe5o56liBvXiFtzfwnmWwIhAJD88dRnQgxZljeaXQ9yjfQG39HgayXbuBOXFdBTWJOtKv8DCE4QABoMNjM3NDIzMTgzODA1IgwNm2gWc9O804vX3FQq3AMsOuXE3QjpK3H4vu548uhfr6REFaEYRXPJMHgQrzTGy2BQaEnzF9REbUCUw2%2Fmrk61lEEEWKHAerR%2B6trahdf%2BWGY3ogFMdYxJ98NRdwhGWQRWkZa2wO2lXwG46UCGPa72OrXsiqxrytjnv41YrXiq1c3DUyzOMeYJA65oA1JpTVCey2FY4a2YU%2Bjd0yXhzHBIyCM1c%2BNg8V3RQ4fdZabTQh%2F8LP3IvnQCXJWLyqnnnCB2jkaMEqyQEf6%2FV%2FC6x7y%2Fqpfhm9seEZnMWQXXdESlx%2BDo8juI8UdPD684GJRpBbiUupARj8RhCsp9hac3waDb7oMXv7%2FZFUmuSoj6Z%2BeeSPSF1nhIXgrQ%2FeK2z%2FzxFsUAA68%2BFB%2BwjCjjUc%2FehxM5SLB93%2FD3mzVBhUuyBwN%2BvJOmgU8XhXvLzEMrXmpYv0IKRr%2B2QZmuHwNTqj6K26%2BMuyJ7MfCdqiGoctBiFGRZJiTXRoKnGDkCyKZH53REHK7nEC5rn6DvG5TwlJ1aGvajv4wYcJpqE1WQ5LpjAN%2FE5vUtcVfVBfDmE5XTYfyRmsjfvL4XwfCi6oy5OLpFtloB9Vi%2BfqAu2HlLs2P04QQQg3wOp86rTJOkQqMhX45vWaXB1O83DSXcTXmBljCrwMTEBjqkAaWNSk0vJ6nTJV%2BqlPguXZJd%2F4X2Pi3IposUBo7ZTRlm0v1rXmq1H87CSxpAVsJGLtr%2Bnvz%2BEQTInIJx9RypnBjyjEg5GxoVb40WXshY1vwtCVW0Sde0j3B8E5TtaxAStVu8M9WYhBFsImHGUJ%2FcklFOhuLm51cHIoVEeK%2FjwXiZgKF0wSxzVLE0C%2FeoOCAS24%2BJtjbnIL33rhvYDCsJAH9a6DuY&X-Amz-Signature=c5c0b34f8c499d57087134ff7362579a08755b89f10714e25d188226d34c00ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLBZKG2S%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDQNxNkCTBd3zZiSJxQBMbqRWe5o56liBvXiFtzfwnmWwIhAJD88dRnQgxZljeaXQ9yjfQG39HgayXbuBOXFdBTWJOtKv8DCE4QABoMNjM3NDIzMTgzODA1IgwNm2gWc9O804vX3FQq3AMsOuXE3QjpK3H4vu548uhfr6REFaEYRXPJMHgQrzTGy2BQaEnzF9REbUCUw2%2Fmrk61lEEEWKHAerR%2B6trahdf%2BWGY3ogFMdYxJ98NRdwhGWQRWkZa2wO2lXwG46UCGPa72OrXsiqxrytjnv41YrXiq1c3DUyzOMeYJA65oA1JpTVCey2FY4a2YU%2Bjd0yXhzHBIyCM1c%2BNg8V3RQ4fdZabTQh%2F8LP3IvnQCXJWLyqnnnCB2jkaMEqyQEf6%2FV%2FC6x7y%2Fqpfhm9seEZnMWQXXdESlx%2BDo8juI8UdPD684GJRpBbiUupARj8RhCsp9hac3waDb7oMXv7%2FZFUmuSoj6Z%2BeeSPSF1nhIXgrQ%2FeK2z%2FzxFsUAA68%2BFB%2BwjCjjUc%2FehxM5SLB93%2FD3mzVBhUuyBwN%2BvJOmgU8XhXvLzEMrXmpYv0IKRr%2B2QZmuHwNTqj6K26%2BMuyJ7MfCdqiGoctBiFGRZJiTXRoKnGDkCyKZH53REHK7nEC5rn6DvG5TwlJ1aGvajv4wYcJpqE1WQ5LpjAN%2FE5vUtcVfVBfDmE5XTYfyRmsjfvL4XwfCi6oy5OLpFtloB9Vi%2BfqAu2HlLs2P04QQQg3wOp86rTJOkQqMhX45vWaXB1O83DSXcTXmBljCrwMTEBjqkAaWNSk0vJ6nTJV%2BqlPguXZJd%2F4X2Pi3IposUBo7ZTRlm0v1rXmq1H87CSxpAVsJGLtr%2Bnvz%2BEQTInIJx9RypnBjyjEg5GxoVb40WXshY1vwtCVW0Sde0j3B8E5TtaxAStVu8M9WYhBFsImHGUJ%2FcklFOhuLm51cHIoVEeK%2FjwXiZgKF0wSxzVLE0C%2FeoOCAS24%2BJtjbnIL33rhvYDCsJAH9a6DuY&X-Amz-Signature=bb67f359311fb9ea3a17040232156250ef92473d7f176a645b4a503495146930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLBZKG2S%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDQNxNkCTBd3zZiSJxQBMbqRWe5o56liBvXiFtzfwnmWwIhAJD88dRnQgxZljeaXQ9yjfQG39HgayXbuBOXFdBTWJOtKv8DCE4QABoMNjM3NDIzMTgzODA1IgwNm2gWc9O804vX3FQq3AMsOuXE3QjpK3H4vu548uhfr6REFaEYRXPJMHgQrzTGy2BQaEnzF9REbUCUw2%2Fmrk61lEEEWKHAerR%2B6trahdf%2BWGY3ogFMdYxJ98NRdwhGWQRWkZa2wO2lXwG46UCGPa72OrXsiqxrytjnv41YrXiq1c3DUyzOMeYJA65oA1JpTVCey2FY4a2YU%2Bjd0yXhzHBIyCM1c%2BNg8V3RQ4fdZabTQh%2F8LP3IvnQCXJWLyqnnnCB2jkaMEqyQEf6%2FV%2FC6x7y%2Fqpfhm9seEZnMWQXXdESlx%2BDo8juI8UdPD684GJRpBbiUupARj8RhCsp9hac3waDb7oMXv7%2FZFUmuSoj6Z%2BeeSPSF1nhIXgrQ%2FeK2z%2FzxFsUAA68%2BFB%2BwjCjjUc%2FehxM5SLB93%2FD3mzVBhUuyBwN%2BvJOmgU8XhXvLzEMrXmpYv0IKRr%2B2QZmuHwNTqj6K26%2BMuyJ7MfCdqiGoctBiFGRZJiTXRoKnGDkCyKZH53REHK7nEC5rn6DvG5TwlJ1aGvajv4wYcJpqE1WQ5LpjAN%2FE5vUtcVfVBfDmE5XTYfyRmsjfvL4XwfCi6oy5OLpFtloB9Vi%2BfqAu2HlLs2P04QQQg3wOp86rTJOkQqMhX45vWaXB1O83DSXcTXmBljCrwMTEBjqkAaWNSk0vJ6nTJV%2BqlPguXZJd%2F4X2Pi3IposUBo7ZTRlm0v1rXmq1H87CSxpAVsJGLtr%2Bnvz%2BEQTInIJx9RypnBjyjEg5GxoVb40WXshY1vwtCVW0Sde0j3B8E5TtaxAStVu8M9WYhBFsImHGUJ%2FcklFOhuLm51cHIoVEeK%2FjwXiZgKF0wSxzVLE0C%2FeoOCAS24%2BJtjbnIL33rhvYDCsJAH9a6DuY&X-Amz-Signature=58ac943703cd6f01a3e976559cf6384c99cf2b2e0becc722c2b0dad71cf3a64e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLBZKG2S%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDQNxNkCTBd3zZiSJxQBMbqRWe5o56liBvXiFtzfwnmWwIhAJD88dRnQgxZljeaXQ9yjfQG39HgayXbuBOXFdBTWJOtKv8DCE4QABoMNjM3NDIzMTgzODA1IgwNm2gWc9O804vX3FQq3AMsOuXE3QjpK3H4vu548uhfr6REFaEYRXPJMHgQrzTGy2BQaEnzF9REbUCUw2%2Fmrk61lEEEWKHAerR%2B6trahdf%2BWGY3ogFMdYxJ98NRdwhGWQRWkZa2wO2lXwG46UCGPa72OrXsiqxrytjnv41YrXiq1c3DUyzOMeYJA65oA1JpTVCey2FY4a2YU%2Bjd0yXhzHBIyCM1c%2BNg8V3RQ4fdZabTQh%2F8LP3IvnQCXJWLyqnnnCB2jkaMEqyQEf6%2FV%2FC6x7y%2Fqpfhm9seEZnMWQXXdESlx%2BDo8juI8UdPD684GJRpBbiUupARj8RhCsp9hac3waDb7oMXv7%2FZFUmuSoj6Z%2BeeSPSF1nhIXgrQ%2FeK2z%2FzxFsUAA68%2BFB%2BwjCjjUc%2FehxM5SLB93%2FD3mzVBhUuyBwN%2BvJOmgU8XhXvLzEMrXmpYv0IKRr%2B2QZmuHwNTqj6K26%2BMuyJ7MfCdqiGoctBiFGRZJiTXRoKnGDkCyKZH53REHK7nEC5rn6DvG5TwlJ1aGvajv4wYcJpqE1WQ5LpjAN%2FE5vUtcVfVBfDmE5XTYfyRmsjfvL4XwfCi6oy5OLpFtloB9Vi%2BfqAu2HlLs2P04QQQg3wOp86rTJOkQqMhX45vWaXB1O83DSXcTXmBljCrwMTEBjqkAaWNSk0vJ6nTJV%2BqlPguXZJd%2F4X2Pi3IposUBo7ZTRlm0v1rXmq1H87CSxpAVsJGLtr%2Bnvz%2BEQTInIJx9RypnBjyjEg5GxoVb40WXshY1vwtCVW0Sde0j3B8E5TtaxAStVu8M9WYhBFsImHGUJ%2FcklFOhuLm51cHIoVEeK%2FjwXiZgKF0wSxzVLE0C%2FeoOCAS24%2BJtjbnIL33rhvYDCsJAH9a6DuY&X-Amz-Signature=fe9064a5b9a57d2a8e8d1aa7cf02c471a1390821a20032afc4d79f544dd2e4e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLBZKG2S%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDQNxNkCTBd3zZiSJxQBMbqRWe5o56liBvXiFtzfwnmWwIhAJD88dRnQgxZljeaXQ9yjfQG39HgayXbuBOXFdBTWJOtKv8DCE4QABoMNjM3NDIzMTgzODA1IgwNm2gWc9O804vX3FQq3AMsOuXE3QjpK3H4vu548uhfr6REFaEYRXPJMHgQrzTGy2BQaEnzF9REbUCUw2%2Fmrk61lEEEWKHAerR%2B6trahdf%2BWGY3ogFMdYxJ98NRdwhGWQRWkZa2wO2lXwG46UCGPa72OrXsiqxrytjnv41YrXiq1c3DUyzOMeYJA65oA1JpTVCey2FY4a2YU%2Bjd0yXhzHBIyCM1c%2BNg8V3RQ4fdZabTQh%2F8LP3IvnQCXJWLyqnnnCB2jkaMEqyQEf6%2FV%2FC6x7y%2Fqpfhm9seEZnMWQXXdESlx%2BDo8juI8UdPD684GJRpBbiUupARj8RhCsp9hac3waDb7oMXv7%2FZFUmuSoj6Z%2BeeSPSF1nhIXgrQ%2FeK2z%2FzxFsUAA68%2BFB%2BwjCjjUc%2FehxM5SLB93%2FD3mzVBhUuyBwN%2BvJOmgU8XhXvLzEMrXmpYv0IKRr%2B2QZmuHwNTqj6K26%2BMuyJ7MfCdqiGoctBiFGRZJiTXRoKnGDkCyKZH53REHK7nEC5rn6DvG5TwlJ1aGvajv4wYcJpqE1WQ5LpjAN%2FE5vUtcVfVBfDmE5XTYfyRmsjfvL4XwfCi6oy5OLpFtloB9Vi%2BfqAu2HlLs2P04QQQg3wOp86rTJOkQqMhX45vWaXB1O83DSXcTXmBljCrwMTEBjqkAaWNSk0vJ6nTJV%2BqlPguXZJd%2F4X2Pi3IposUBo7ZTRlm0v1rXmq1H87CSxpAVsJGLtr%2Bnvz%2BEQTInIJx9RypnBjyjEg5GxoVb40WXshY1vwtCVW0Sde0j3B8E5TtaxAStVu8M9WYhBFsImHGUJ%2FcklFOhuLm51cHIoVEeK%2FjwXiZgKF0wSxzVLE0C%2FeoOCAS24%2BJtjbnIL33rhvYDCsJAH9a6DuY&X-Amz-Signature=c5c0b34f8c499d57087134ff7362579a08755b89f10714e25d188226d34c00ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLBZKG2S%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDQNxNkCTBd3zZiSJxQBMbqRWe5o56liBvXiFtzfwnmWwIhAJD88dRnQgxZljeaXQ9yjfQG39HgayXbuBOXFdBTWJOtKv8DCE4QABoMNjM3NDIzMTgzODA1IgwNm2gWc9O804vX3FQq3AMsOuXE3QjpK3H4vu548uhfr6REFaEYRXPJMHgQrzTGy2BQaEnzF9REbUCUw2%2Fmrk61lEEEWKHAerR%2B6trahdf%2BWGY3ogFMdYxJ98NRdwhGWQRWkZa2wO2lXwG46UCGPa72OrXsiqxrytjnv41YrXiq1c3DUyzOMeYJA65oA1JpTVCey2FY4a2YU%2Bjd0yXhzHBIyCM1c%2BNg8V3RQ4fdZabTQh%2F8LP3IvnQCXJWLyqnnnCB2jkaMEqyQEf6%2FV%2FC6x7y%2Fqpfhm9seEZnMWQXXdESlx%2BDo8juI8UdPD684GJRpBbiUupARj8RhCsp9hac3waDb7oMXv7%2FZFUmuSoj6Z%2BeeSPSF1nhIXgrQ%2FeK2z%2FzxFsUAA68%2BFB%2BwjCjjUc%2FehxM5SLB93%2FD3mzVBhUuyBwN%2BvJOmgU8XhXvLzEMrXmpYv0IKRr%2B2QZmuHwNTqj6K26%2BMuyJ7MfCdqiGoctBiFGRZJiTXRoKnGDkCyKZH53REHK7nEC5rn6DvG5TwlJ1aGvajv4wYcJpqE1WQ5LpjAN%2FE5vUtcVfVBfDmE5XTYfyRmsjfvL4XwfCi6oy5OLpFtloB9Vi%2BfqAu2HlLs2P04QQQg3wOp86rTJOkQqMhX45vWaXB1O83DSXcTXmBljCrwMTEBjqkAaWNSk0vJ6nTJV%2BqlPguXZJd%2F4X2Pi3IposUBo7ZTRlm0v1rXmq1H87CSxpAVsJGLtr%2Bnvz%2BEQTInIJx9RypnBjyjEg5GxoVb40WXshY1vwtCVW0Sde0j3B8E5TtaxAStVu8M9WYhBFsImHGUJ%2FcklFOhuLm51cHIoVEeK%2FjwXiZgKF0wSxzVLE0C%2FeoOCAS24%2BJtjbnIL33rhvYDCsJAH9a6DuY&X-Amz-Signature=7c0e45ad8b120b24ff63673e722624e46f9e27c3b643d6c508376a1241f7093c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLBZKG2S%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDQNxNkCTBd3zZiSJxQBMbqRWe5o56liBvXiFtzfwnmWwIhAJD88dRnQgxZljeaXQ9yjfQG39HgayXbuBOXFdBTWJOtKv8DCE4QABoMNjM3NDIzMTgzODA1IgwNm2gWc9O804vX3FQq3AMsOuXE3QjpK3H4vu548uhfr6REFaEYRXPJMHgQrzTGy2BQaEnzF9REbUCUw2%2Fmrk61lEEEWKHAerR%2B6trahdf%2BWGY3ogFMdYxJ98NRdwhGWQRWkZa2wO2lXwG46UCGPa72OrXsiqxrytjnv41YrXiq1c3DUyzOMeYJA65oA1JpTVCey2FY4a2YU%2Bjd0yXhzHBIyCM1c%2BNg8V3RQ4fdZabTQh%2F8LP3IvnQCXJWLyqnnnCB2jkaMEqyQEf6%2FV%2FC6x7y%2Fqpfhm9seEZnMWQXXdESlx%2BDo8juI8UdPD684GJRpBbiUupARj8RhCsp9hac3waDb7oMXv7%2FZFUmuSoj6Z%2BeeSPSF1nhIXgrQ%2FeK2z%2FzxFsUAA68%2BFB%2BwjCjjUc%2FehxM5SLB93%2FD3mzVBhUuyBwN%2BvJOmgU8XhXvLzEMrXmpYv0IKRr%2B2QZmuHwNTqj6K26%2BMuyJ7MfCdqiGoctBiFGRZJiTXRoKnGDkCyKZH53REHK7nEC5rn6DvG5TwlJ1aGvajv4wYcJpqE1WQ5LpjAN%2FE5vUtcVfVBfDmE5XTYfyRmsjfvL4XwfCi6oy5OLpFtloB9Vi%2BfqAu2HlLs2P04QQQg3wOp86rTJOkQqMhX45vWaXB1O83DSXcTXmBljCrwMTEBjqkAaWNSk0vJ6nTJV%2BqlPguXZJd%2F4X2Pi3IposUBo7ZTRlm0v1rXmq1H87CSxpAVsJGLtr%2Bnvz%2BEQTInIJx9RypnBjyjEg5GxoVb40WXshY1vwtCVW0Sde0j3B8E5TtaxAStVu8M9WYhBFsImHGUJ%2FcklFOhuLm51cHIoVEeK%2FjwXiZgKF0wSxzVLE0C%2FeoOCAS24%2BJtjbnIL33rhvYDCsJAH9a6DuY&X-Amz-Signature=8c91ae6abc1293ad5f13652456371f4e8dd9dee26f1ed24a14be7634ebae23f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLBZKG2S%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDQNxNkCTBd3zZiSJxQBMbqRWe5o56liBvXiFtzfwnmWwIhAJD88dRnQgxZljeaXQ9yjfQG39HgayXbuBOXFdBTWJOtKv8DCE4QABoMNjM3NDIzMTgzODA1IgwNm2gWc9O804vX3FQq3AMsOuXE3QjpK3H4vu548uhfr6REFaEYRXPJMHgQrzTGy2BQaEnzF9REbUCUw2%2Fmrk61lEEEWKHAerR%2B6trahdf%2BWGY3ogFMdYxJ98NRdwhGWQRWkZa2wO2lXwG46UCGPa72OrXsiqxrytjnv41YrXiq1c3DUyzOMeYJA65oA1JpTVCey2FY4a2YU%2Bjd0yXhzHBIyCM1c%2BNg8V3RQ4fdZabTQh%2F8LP3IvnQCXJWLyqnnnCB2jkaMEqyQEf6%2FV%2FC6x7y%2Fqpfhm9seEZnMWQXXdESlx%2BDo8juI8UdPD684GJRpBbiUupARj8RhCsp9hac3waDb7oMXv7%2FZFUmuSoj6Z%2BeeSPSF1nhIXgrQ%2FeK2z%2FzxFsUAA68%2BFB%2BwjCjjUc%2FehxM5SLB93%2FD3mzVBhUuyBwN%2BvJOmgU8XhXvLzEMrXmpYv0IKRr%2B2QZmuHwNTqj6K26%2BMuyJ7MfCdqiGoctBiFGRZJiTXRoKnGDkCyKZH53REHK7nEC5rn6DvG5TwlJ1aGvajv4wYcJpqE1WQ5LpjAN%2FE5vUtcVfVBfDmE5XTYfyRmsjfvL4XwfCi6oy5OLpFtloB9Vi%2BfqAu2HlLs2P04QQQg3wOp86rTJOkQqMhX45vWaXB1O83DSXcTXmBljCrwMTEBjqkAaWNSk0vJ6nTJV%2BqlPguXZJd%2F4X2Pi3IposUBo7ZTRlm0v1rXmq1H87CSxpAVsJGLtr%2Bnvz%2BEQTInIJx9RypnBjyjEg5GxoVb40WXshY1vwtCVW0Sde0j3B8E5TtaxAStVu8M9WYhBFsImHGUJ%2FcklFOhuLm51cHIoVEeK%2FjwXiZgKF0wSxzVLE0C%2FeoOCAS24%2BJtjbnIL33rhvYDCsJAH9a6DuY&X-Amz-Signature=9f47dadad42639755622320a03fabfaac94e01f91a70582279bf0332319c391f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
