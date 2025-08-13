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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEZVG5AF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETAjerTl%2B4R8BDukzGRS6%2BCOfIV8GGkWNm21pBmsc6bAiACL047tTHeJzrMQ%2BPzvL3dJTtjc4irPuWkpBi5thxSlyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMESaJF2eONZVZOnUCKtwDVlO8ZY8p0YMZGk2TzGnN9lTQ0J08Uj7aQun0%2Fn5fbRyY12buxVIQ8dsmUHpeA8FK7dv2tKwSEKoDiWbNaj0%2Fgiz96QHBwFgM8ySVSyqFZEgFY0itoPh2hO6aJKdX5KuHkyhu0YVEUegGlQqJvz87fz3AcXO1grwLdXgc1weXzxIwgzDj0jX7IpnPn%2F5898X%2BG8h1Yh5hIMdB3J%2B%2BLfV5Hf15rdLfHPJrJeyDxBhkEXre2aNjZ10UKH2exoTeEZY5qZdXoJwFNV9EC2KNEj9Ic5RqR2qcwLn70D8R%2BVfstQk2zDVPj2YP6zU5hwKOXmb642TayrmQw7HKoeNB2sNfnKP7wzWqWXIC1uMrRxdVg%2BUTn%2F3fJGogfxMc6io5e2P9HfXzEYj61Ezffqx5%2BvOK1CL%2BPL7CCU4g6dzzeHCSPS%2BhX0qajyIoaPToI%2BmEN%2FnPr21xOailSWjtYmq1U%2FBMTn173yT2mO%2F%2By4n8Rg6kNjkpQK8ZtUle4C4dFfCpAtEN3FqzffGURM6VcthP5WNF%2FggM89UCbcwE5J1eysz6PwBCjBodxOJjvZlSHCDsESLEYDh3UwaesGj713jI%2B2GVkEpOB58WQdbyiHhSt%2FaNF0xL6Fj4h%2Fklpw6hMhgwxNDwxAY6pgFJQgrDJSW8wIlq%2BGi7zhfy%2FUY6QsjGP8cHNIu77%2FYjGZjxLUuuMmChQreYKdzGGk68qJkteDpH4dkel53El7k0wQ9xEaR09qKojfl4Ex5GyPnyNGBxqVdy1xcfnDT9DIvJtMdVoUzBwf1AHAM8LfvbWoEejhIEu8r9yZHPzPLmEZQx%2BcaJbhkVwIOgNfcfTJHi5w69eAVPQNuAIc57mVjd841PpvHn&X-Amz-Signature=bd64da76a9ffa5c007499bfbca744becb7eddd804d871d825a9f8cae86ba01d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEZVG5AF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETAjerTl%2B4R8BDukzGRS6%2BCOfIV8GGkWNm21pBmsc6bAiACL047tTHeJzrMQ%2BPzvL3dJTtjc4irPuWkpBi5thxSlyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMESaJF2eONZVZOnUCKtwDVlO8ZY8p0YMZGk2TzGnN9lTQ0J08Uj7aQun0%2Fn5fbRyY12buxVIQ8dsmUHpeA8FK7dv2tKwSEKoDiWbNaj0%2Fgiz96QHBwFgM8ySVSyqFZEgFY0itoPh2hO6aJKdX5KuHkyhu0YVEUegGlQqJvz87fz3AcXO1grwLdXgc1weXzxIwgzDj0jX7IpnPn%2F5898X%2BG8h1Yh5hIMdB3J%2B%2BLfV5Hf15rdLfHPJrJeyDxBhkEXre2aNjZ10UKH2exoTeEZY5qZdXoJwFNV9EC2KNEj9Ic5RqR2qcwLn70D8R%2BVfstQk2zDVPj2YP6zU5hwKOXmb642TayrmQw7HKoeNB2sNfnKP7wzWqWXIC1uMrRxdVg%2BUTn%2F3fJGogfxMc6io5e2P9HfXzEYj61Ezffqx5%2BvOK1CL%2BPL7CCU4g6dzzeHCSPS%2BhX0qajyIoaPToI%2BmEN%2FnPr21xOailSWjtYmq1U%2FBMTn173yT2mO%2F%2By4n8Rg6kNjkpQK8ZtUle4C4dFfCpAtEN3FqzffGURM6VcthP5WNF%2FggM89UCbcwE5J1eysz6PwBCjBodxOJjvZlSHCDsESLEYDh3UwaesGj713jI%2B2GVkEpOB58WQdbyiHhSt%2FaNF0xL6Fj4h%2Fklpw6hMhgwxNDwxAY6pgFJQgrDJSW8wIlq%2BGi7zhfy%2FUY6QsjGP8cHNIu77%2FYjGZjxLUuuMmChQreYKdzGGk68qJkteDpH4dkel53El7k0wQ9xEaR09qKojfl4Ex5GyPnyNGBxqVdy1xcfnDT9DIvJtMdVoUzBwf1AHAM8LfvbWoEejhIEu8r9yZHPzPLmEZQx%2BcaJbhkVwIOgNfcfTJHi5w69eAVPQNuAIc57mVjd841PpvHn&X-Amz-Signature=3f7e2a1de6b47233a10601405421358e4612bb24cc2bec29b6751d1e7d364bcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEZVG5AF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETAjerTl%2B4R8BDukzGRS6%2BCOfIV8GGkWNm21pBmsc6bAiACL047tTHeJzrMQ%2BPzvL3dJTtjc4irPuWkpBi5thxSlyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMESaJF2eONZVZOnUCKtwDVlO8ZY8p0YMZGk2TzGnN9lTQ0J08Uj7aQun0%2Fn5fbRyY12buxVIQ8dsmUHpeA8FK7dv2tKwSEKoDiWbNaj0%2Fgiz96QHBwFgM8ySVSyqFZEgFY0itoPh2hO6aJKdX5KuHkyhu0YVEUegGlQqJvz87fz3AcXO1grwLdXgc1weXzxIwgzDj0jX7IpnPn%2F5898X%2BG8h1Yh5hIMdB3J%2B%2BLfV5Hf15rdLfHPJrJeyDxBhkEXre2aNjZ10UKH2exoTeEZY5qZdXoJwFNV9EC2KNEj9Ic5RqR2qcwLn70D8R%2BVfstQk2zDVPj2YP6zU5hwKOXmb642TayrmQw7HKoeNB2sNfnKP7wzWqWXIC1uMrRxdVg%2BUTn%2F3fJGogfxMc6io5e2P9HfXzEYj61Ezffqx5%2BvOK1CL%2BPL7CCU4g6dzzeHCSPS%2BhX0qajyIoaPToI%2BmEN%2FnPr21xOailSWjtYmq1U%2FBMTn173yT2mO%2F%2By4n8Rg6kNjkpQK8ZtUle4C4dFfCpAtEN3FqzffGURM6VcthP5WNF%2FggM89UCbcwE5J1eysz6PwBCjBodxOJjvZlSHCDsESLEYDh3UwaesGj713jI%2B2GVkEpOB58WQdbyiHhSt%2FaNF0xL6Fj4h%2Fklpw6hMhgwxNDwxAY6pgFJQgrDJSW8wIlq%2BGi7zhfy%2FUY6QsjGP8cHNIu77%2FYjGZjxLUuuMmChQreYKdzGGk68qJkteDpH4dkel53El7k0wQ9xEaR09qKojfl4Ex5GyPnyNGBxqVdy1xcfnDT9DIvJtMdVoUzBwf1AHAM8LfvbWoEejhIEu8r9yZHPzPLmEZQx%2BcaJbhkVwIOgNfcfTJHi5w69eAVPQNuAIc57mVjd841PpvHn&X-Amz-Signature=6875a30fa3afcc70d4ca992676dd4f7c2edadf7e97aa6b7abc378965d2b4e988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEZVG5AF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETAjerTl%2B4R8BDukzGRS6%2BCOfIV8GGkWNm21pBmsc6bAiACL047tTHeJzrMQ%2BPzvL3dJTtjc4irPuWkpBi5thxSlyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMESaJF2eONZVZOnUCKtwDVlO8ZY8p0YMZGk2TzGnN9lTQ0J08Uj7aQun0%2Fn5fbRyY12buxVIQ8dsmUHpeA8FK7dv2tKwSEKoDiWbNaj0%2Fgiz96QHBwFgM8ySVSyqFZEgFY0itoPh2hO6aJKdX5KuHkyhu0YVEUegGlQqJvz87fz3AcXO1grwLdXgc1weXzxIwgzDj0jX7IpnPn%2F5898X%2BG8h1Yh5hIMdB3J%2B%2BLfV5Hf15rdLfHPJrJeyDxBhkEXre2aNjZ10UKH2exoTeEZY5qZdXoJwFNV9EC2KNEj9Ic5RqR2qcwLn70D8R%2BVfstQk2zDVPj2YP6zU5hwKOXmb642TayrmQw7HKoeNB2sNfnKP7wzWqWXIC1uMrRxdVg%2BUTn%2F3fJGogfxMc6io5e2P9HfXzEYj61Ezffqx5%2BvOK1CL%2BPL7CCU4g6dzzeHCSPS%2BhX0qajyIoaPToI%2BmEN%2FnPr21xOailSWjtYmq1U%2FBMTn173yT2mO%2F%2By4n8Rg6kNjkpQK8ZtUle4C4dFfCpAtEN3FqzffGURM6VcthP5WNF%2FggM89UCbcwE5J1eysz6PwBCjBodxOJjvZlSHCDsESLEYDh3UwaesGj713jI%2B2GVkEpOB58WQdbyiHhSt%2FaNF0xL6Fj4h%2Fklpw6hMhgwxNDwxAY6pgFJQgrDJSW8wIlq%2BGi7zhfy%2FUY6QsjGP8cHNIu77%2FYjGZjxLUuuMmChQreYKdzGGk68qJkteDpH4dkel53El7k0wQ9xEaR09qKojfl4Ex5GyPnyNGBxqVdy1xcfnDT9DIvJtMdVoUzBwf1AHAM8LfvbWoEejhIEu8r9yZHPzPLmEZQx%2BcaJbhkVwIOgNfcfTJHi5w69eAVPQNuAIc57mVjd841PpvHn&X-Amz-Signature=504543d3014d5cefff281bd39eb732082b67140bfa2297bee6e9c454729d87dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEZVG5AF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETAjerTl%2B4R8BDukzGRS6%2BCOfIV8GGkWNm21pBmsc6bAiACL047tTHeJzrMQ%2BPzvL3dJTtjc4irPuWkpBi5thxSlyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMESaJF2eONZVZOnUCKtwDVlO8ZY8p0YMZGk2TzGnN9lTQ0J08Uj7aQun0%2Fn5fbRyY12buxVIQ8dsmUHpeA8FK7dv2tKwSEKoDiWbNaj0%2Fgiz96QHBwFgM8ySVSyqFZEgFY0itoPh2hO6aJKdX5KuHkyhu0YVEUegGlQqJvz87fz3AcXO1grwLdXgc1weXzxIwgzDj0jX7IpnPn%2F5898X%2BG8h1Yh5hIMdB3J%2B%2BLfV5Hf15rdLfHPJrJeyDxBhkEXre2aNjZ10UKH2exoTeEZY5qZdXoJwFNV9EC2KNEj9Ic5RqR2qcwLn70D8R%2BVfstQk2zDVPj2YP6zU5hwKOXmb642TayrmQw7HKoeNB2sNfnKP7wzWqWXIC1uMrRxdVg%2BUTn%2F3fJGogfxMc6io5e2P9HfXzEYj61Ezffqx5%2BvOK1CL%2BPL7CCU4g6dzzeHCSPS%2BhX0qajyIoaPToI%2BmEN%2FnPr21xOailSWjtYmq1U%2FBMTn173yT2mO%2F%2By4n8Rg6kNjkpQK8ZtUle4C4dFfCpAtEN3FqzffGURM6VcthP5WNF%2FggM89UCbcwE5J1eysz6PwBCjBodxOJjvZlSHCDsESLEYDh3UwaesGj713jI%2B2GVkEpOB58WQdbyiHhSt%2FaNF0xL6Fj4h%2Fklpw6hMhgwxNDwxAY6pgFJQgrDJSW8wIlq%2BGi7zhfy%2FUY6QsjGP8cHNIu77%2FYjGZjxLUuuMmChQreYKdzGGk68qJkteDpH4dkel53El7k0wQ9xEaR09qKojfl4Ex5GyPnyNGBxqVdy1xcfnDT9DIvJtMdVoUzBwf1AHAM8LfvbWoEejhIEu8r9yZHPzPLmEZQx%2BcaJbhkVwIOgNfcfTJHi5w69eAVPQNuAIc57mVjd841PpvHn&X-Amz-Signature=3cb0ad036a9b6dd097bddf67d7c8b6341251d23af09ee9035902f7c144ac4381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEZVG5AF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETAjerTl%2B4R8BDukzGRS6%2BCOfIV8GGkWNm21pBmsc6bAiACL047tTHeJzrMQ%2BPzvL3dJTtjc4irPuWkpBi5thxSlyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMESaJF2eONZVZOnUCKtwDVlO8ZY8p0YMZGk2TzGnN9lTQ0J08Uj7aQun0%2Fn5fbRyY12buxVIQ8dsmUHpeA8FK7dv2tKwSEKoDiWbNaj0%2Fgiz96QHBwFgM8ySVSyqFZEgFY0itoPh2hO6aJKdX5KuHkyhu0YVEUegGlQqJvz87fz3AcXO1grwLdXgc1weXzxIwgzDj0jX7IpnPn%2F5898X%2BG8h1Yh5hIMdB3J%2B%2BLfV5Hf15rdLfHPJrJeyDxBhkEXre2aNjZ10UKH2exoTeEZY5qZdXoJwFNV9EC2KNEj9Ic5RqR2qcwLn70D8R%2BVfstQk2zDVPj2YP6zU5hwKOXmb642TayrmQw7HKoeNB2sNfnKP7wzWqWXIC1uMrRxdVg%2BUTn%2F3fJGogfxMc6io5e2P9HfXzEYj61Ezffqx5%2BvOK1CL%2BPL7CCU4g6dzzeHCSPS%2BhX0qajyIoaPToI%2BmEN%2FnPr21xOailSWjtYmq1U%2FBMTn173yT2mO%2F%2By4n8Rg6kNjkpQK8ZtUle4C4dFfCpAtEN3FqzffGURM6VcthP5WNF%2FggM89UCbcwE5J1eysz6PwBCjBodxOJjvZlSHCDsESLEYDh3UwaesGj713jI%2B2GVkEpOB58WQdbyiHhSt%2FaNF0xL6Fj4h%2Fklpw6hMhgwxNDwxAY6pgFJQgrDJSW8wIlq%2BGi7zhfy%2FUY6QsjGP8cHNIu77%2FYjGZjxLUuuMmChQreYKdzGGk68qJkteDpH4dkel53El7k0wQ9xEaR09qKojfl4Ex5GyPnyNGBxqVdy1xcfnDT9DIvJtMdVoUzBwf1AHAM8LfvbWoEejhIEu8r9yZHPzPLmEZQx%2BcaJbhkVwIOgNfcfTJHi5w69eAVPQNuAIc57mVjd841PpvHn&X-Amz-Signature=851bb48d0c10e57edaf07502f59fd074fb4b68c8c9e194a6c04ddb6786884c5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEZVG5AF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETAjerTl%2B4R8BDukzGRS6%2BCOfIV8GGkWNm21pBmsc6bAiACL047tTHeJzrMQ%2BPzvL3dJTtjc4irPuWkpBi5thxSlyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMESaJF2eONZVZOnUCKtwDVlO8ZY8p0YMZGk2TzGnN9lTQ0J08Uj7aQun0%2Fn5fbRyY12buxVIQ8dsmUHpeA8FK7dv2tKwSEKoDiWbNaj0%2Fgiz96QHBwFgM8ySVSyqFZEgFY0itoPh2hO6aJKdX5KuHkyhu0YVEUegGlQqJvz87fz3AcXO1grwLdXgc1weXzxIwgzDj0jX7IpnPn%2F5898X%2BG8h1Yh5hIMdB3J%2B%2BLfV5Hf15rdLfHPJrJeyDxBhkEXre2aNjZ10UKH2exoTeEZY5qZdXoJwFNV9EC2KNEj9Ic5RqR2qcwLn70D8R%2BVfstQk2zDVPj2YP6zU5hwKOXmb642TayrmQw7HKoeNB2sNfnKP7wzWqWXIC1uMrRxdVg%2BUTn%2F3fJGogfxMc6io5e2P9HfXzEYj61Ezffqx5%2BvOK1CL%2BPL7CCU4g6dzzeHCSPS%2BhX0qajyIoaPToI%2BmEN%2FnPr21xOailSWjtYmq1U%2FBMTn173yT2mO%2F%2By4n8Rg6kNjkpQK8ZtUle4C4dFfCpAtEN3FqzffGURM6VcthP5WNF%2FggM89UCbcwE5J1eysz6PwBCjBodxOJjvZlSHCDsESLEYDh3UwaesGj713jI%2B2GVkEpOB58WQdbyiHhSt%2FaNF0xL6Fj4h%2Fklpw6hMhgwxNDwxAY6pgFJQgrDJSW8wIlq%2BGi7zhfy%2FUY6QsjGP8cHNIu77%2FYjGZjxLUuuMmChQreYKdzGGk68qJkteDpH4dkel53El7k0wQ9xEaR09qKojfl4Ex5GyPnyNGBxqVdy1xcfnDT9DIvJtMdVoUzBwf1AHAM8LfvbWoEejhIEu8r9yZHPzPLmEZQx%2BcaJbhkVwIOgNfcfTJHi5w69eAVPQNuAIc57mVjd841PpvHn&X-Amz-Signature=6413e9defd4285716f397511f091c6ec8effcf31e80d141c5acc08f108d07b4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEZVG5AF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETAjerTl%2B4R8BDukzGRS6%2BCOfIV8GGkWNm21pBmsc6bAiACL047tTHeJzrMQ%2BPzvL3dJTtjc4irPuWkpBi5thxSlyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMESaJF2eONZVZOnUCKtwDVlO8ZY8p0YMZGk2TzGnN9lTQ0J08Uj7aQun0%2Fn5fbRyY12buxVIQ8dsmUHpeA8FK7dv2tKwSEKoDiWbNaj0%2Fgiz96QHBwFgM8ySVSyqFZEgFY0itoPh2hO6aJKdX5KuHkyhu0YVEUegGlQqJvz87fz3AcXO1grwLdXgc1weXzxIwgzDj0jX7IpnPn%2F5898X%2BG8h1Yh5hIMdB3J%2B%2BLfV5Hf15rdLfHPJrJeyDxBhkEXre2aNjZ10UKH2exoTeEZY5qZdXoJwFNV9EC2KNEj9Ic5RqR2qcwLn70D8R%2BVfstQk2zDVPj2YP6zU5hwKOXmb642TayrmQw7HKoeNB2sNfnKP7wzWqWXIC1uMrRxdVg%2BUTn%2F3fJGogfxMc6io5e2P9HfXzEYj61Ezffqx5%2BvOK1CL%2BPL7CCU4g6dzzeHCSPS%2BhX0qajyIoaPToI%2BmEN%2FnPr21xOailSWjtYmq1U%2FBMTn173yT2mO%2F%2By4n8Rg6kNjkpQK8ZtUle4C4dFfCpAtEN3FqzffGURM6VcthP5WNF%2FggM89UCbcwE5J1eysz6PwBCjBodxOJjvZlSHCDsESLEYDh3UwaesGj713jI%2B2GVkEpOB58WQdbyiHhSt%2FaNF0xL6Fj4h%2Fklpw6hMhgwxNDwxAY6pgFJQgrDJSW8wIlq%2BGi7zhfy%2FUY6QsjGP8cHNIu77%2FYjGZjxLUuuMmChQreYKdzGGk68qJkteDpH4dkel53El7k0wQ9xEaR09qKojfl4Ex5GyPnyNGBxqVdy1xcfnDT9DIvJtMdVoUzBwf1AHAM8LfvbWoEejhIEu8r9yZHPzPLmEZQx%2BcaJbhkVwIOgNfcfTJHi5w69eAVPQNuAIc57mVjd841PpvHn&X-Amz-Signature=ec056069a60c0b213aa86e32ba75135d447f808f11c0e03f19daec3c33cdf3fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEZVG5AF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETAjerTl%2B4R8BDukzGRS6%2BCOfIV8GGkWNm21pBmsc6bAiACL047tTHeJzrMQ%2BPzvL3dJTtjc4irPuWkpBi5thxSlyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMESaJF2eONZVZOnUCKtwDVlO8ZY8p0YMZGk2TzGnN9lTQ0J08Uj7aQun0%2Fn5fbRyY12buxVIQ8dsmUHpeA8FK7dv2tKwSEKoDiWbNaj0%2Fgiz96QHBwFgM8ySVSyqFZEgFY0itoPh2hO6aJKdX5KuHkyhu0YVEUegGlQqJvz87fz3AcXO1grwLdXgc1weXzxIwgzDj0jX7IpnPn%2F5898X%2BG8h1Yh5hIMdB3J%2B%2BLfV5Hf15rdLfHPJrJeyDxBhkEXre2aNjZ10UKH2exoTeEZY5qZdXoJwFNV9EC2KNEj9Ic5RqR2qcwLn70D8R%2BVfstQk2zDVPj2YP6zU5hwKOXmb642TayrmQw7HKoeNB2sNfnKP7wzWqWXIC1uMrRxdVg%2BUTn%2F3fJGogfxMc6io5e2P9HfXzEYj61Ezffqx5%2BvOK1CL%2BPL7CCU4g6dzzeHCSPS%2BhX0qajyIoaPToI%2BmEN%2FnPr21xOailSWjtYmq1U%2FBMTn173yT2mO%2F%2By4n8Rg6kNjkpQK8ZtUle4C4dFfCpAtEN3FqzffGURM6VcthP5WNF%2FggM89UCbcwE5J1eysz6PwBCjBodxOJjvZlSHCDsESLEYDh3UwaesGj713jI%2B2GVkEpOB58WQdbyiHhSt%2FaNF0xL6Fj4h%2Fklpw6hMhgwxNDwxAY6pgFJQgrDJSW8wIlq%2BGi7zhfy%2FUY6QsjGP8cHNIu77%2FYjGZjxLUuuMmChQreYKdzGGk68qJkteDpH4dkel53El7k0wQ9xEaR09qKojfl4Ex5GyPnyNGBxqVdy1xcfnDT9DIvJtMdVoUzBwf1AHAM8LfvbWoEejhIEu8r9yZHPzPLmEZQx%2BcaJbhkVwIOgNfcfTJHi5w69eAVPQNuAIc57mVjd841PpvHn&X-Amz-Signature=21cdb6911ef9976bf03fe937d6215803bc603176c00cf6ec6fbaec57046fd86b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEZVG5AF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETAjerTl%2B4R8BDukzGRS6%2BCOfIV8GGkWNm21pBmsc6bAiACL047tTHeJzrMQ%2BPzvL3dJTtjc4irPuWkpBi5thxSlyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMESaJF2eONZVZOnUCKtwDVlO8ZY8p0YMZGk2TzGnN9lTQ0J08Uj7aQun0%2Fn5fbRyY12buxVIQ8dsmUHpeA8FK7dv2tKwSEKoDiWbNaj0%2Fgiz96QHBwFgM8ySVSyqFZEgFY0itoPh2hO6aJKdX5KuHkyhu0YVEUegGlQqJvz87fz3AcXO1grwLdXgc1weXzxIwgzDj0jX7IpnPn%2F5898X%2BG8h1Yh5hIMdB3J%2B%2BLfV5Hf15rdLfHPJrJeyDxBhkEXre2aNjZ10UKH2exoTeEZY5qZdXoJwFNV9EC2KNEj9Ic5RqR2qcwLn70D8R%2BVfstQk2zDVPj2YP6zU5hwKOXmb642TayrmQw7HKoeNB2sNfnKP7wzWqWXIC1uMrRxdVg%2BUTn%2F3fJGogfxMc6io5e2P9HfXzEYj61Ezffqx5%2BvOK1CL%2BPL7CCU4g6dzzeHCSPS%2BhX0qajyIoaPToI%2BmEN%2FnPr21xOailSWjtYmq1U%2FBMTn173yT2mO%2F%2By4n8Rg6kNjkpQK8ZtUle4C4dFfCpAtEN3FqzffGURM6VcthP5WNF%2FggM89UCbcwE5J1eysz6PwBCjBodxOJjvZlSHCDsESLEYDh3UwaesGj713jI%2B2GVkEpOB58WQdbyiHhSt%2FaNF0xL6Fj4h%2Fklpw6hMhgwxNDwxAY6pgFJQgrDJSW8wIlq%2BGi7zhfy%2FUY6QsjGP8cHNIu77%2FYjGZjxLUuuMmChQreYKdzGGk68qJkteDpH4dkel53El7k0wQ9xEaR09qKojfl4Ex5GyPnyNGBxqVdy1xcfnDT9DIvJtMdVoUzBwf1AHAM8LfvbWoEejhIEu8r9yZHPzPLmEZQx%2BcaJbhkVwIOgNfcfTJHi5w69eAVPQNuAIc57mVjd841PpvHn&X-Amz-Signature=a5d1cb668e3412db5f3615195661c7be7e0be3b3352fda9bf992db3be53b8c17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX3LOPCW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHOVYwZTVI96vdI6Kb4vvbep4vvhC6ZID0Na%2F4hFzU%2FwIhAIRwfnbmQjCt%2Bhu5nr1nay7FBUxa%2BgdLq%2FNRjGOTyorXKv8DCCcQABoMNjM3NDIzMTgzODA1Igxi7jXxn5w6CYMxrA0q3APOqJeP7zzKfWpZkxiUC9IDRnAUyW3Bgbqo3ciMuScFEemxL9haG7mtXcdh%2B%2FbXu2%2FqHX9tEtcG8iAHlz%2FyKfwD8IaxoR9uTir1AmICragisoluFU%2BEtKgD3OxlbqZXK%2FD636slTuZ1kkUFLsZ%2FbOe6qwogvMguOOoU7qqrUIOHMGc%2BNfXa3KFmyQwz5scQeU%2BbvpkN0gXsiGaW8AUcXPZTx96og3ASxB1SkD4E76lva1EQTph2WtCBEGvq7PFNddFgs8wXB2Mygi1XYD%2Fz%2Fc%2B4FQQEhwyHFbuWezisG%2FwfiHgtAt5l1k4TxRIxY1orx1E7w%2Byj6ADVO5x1Q8y%2FewMOZB2GTQMY8BlJSYwuOi0OYslNGZ4SgwqNwTssTreqnF4Jv88%2BrnbFsvnOu2W%2FFtDfNQyqoVj47Fa%2BuhyW2AC9LI%2FOxrf3WYM2vK9jr3qwaBZMvhbTVSmqNNg8Zc6VJSglVrbn4cvLUeoxO2z35HkA7Ad2gYmnqKyIfA3Y6U358Ez%2BBKRsLcu6dGR8qq%2FTi23OUnQCI6c3ksHp7eQldcpftNzMTjbHkm7I8JicYPz6ad3lZfsT7GlfAXPpQ5tsYoAi16uarfTKuCyPMtUHGM%2Foncaf7zGkH8ZEIQ1f0TDp0PDEBjqkAb1Z0V4B%2F4fMmWhoUNuyt%2BkH9GxgFw%2Fe9ns3fx7TvpvL6pU%2F%2FQSjQU1gaC9I93yC74%2BO4O%2FE4MP1fAGqyddGd%2Fs3k15QNHEnBfN6dsKZI3JIFgINYT%2F2jqzjlchmLQR1MuYEmIDS4JI%2FxsCulOHfppP4t3WZr1LilTE5zUf%2BfjbAcvztdcgWFADsq0wnS2hvdpALZ5yOCxuDP7Nd8WvcMk84GwFS&X-Amz-Signature=5de663c551adbf08c994a78cdcf58fafdc654b54268d97f586bfc739bb81eda1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VCONOQ3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiL66fqWTzr60k%2Fk2hGWUZc8DuMnmuEqRB6nHgUJrBgwIgGTFsJzZQ0lqPBkuv3ZTdrSqfEi7CKyGFMQD6tBSlpAsq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMLGVgB%2Fw4hldQkCXyrcA8jUMf6uxAwmNYBG%2F%2F7Yyw1hSI8HWRm45O8UlGvFaAWsfOFWh9ICMcKs5R6co1z1MKujlhoEvXBGYC9n%2Fi5V5sUdVICk0wJxSjHCuM53R0veL4QbkJb5jeBieucBkbRhK5lWthyiVhoEZwVzplbpOWgI%2BbZF%2BfROUuu39pXcEi%2BW8BrL5mWDg7OoUl6qJxw2nNMbmi%2Fy6HK8sajnLTl%2F5t3zgBPoF9JclGkUSYihcnTXDzavr%2BZmRayP8z96Vj9%2BWSPKjl2pApkoj3HtqCbbFMq2I9gbH6uURd5J65srytHE3xsDbIsH%2FJgZYBR8G2%2BM%2FC1Rgod8ppwFC6i6O8uSJt2iAspgicFe89lAWNUW0n8Aoqh4ccPhoi5OWVeLEVQc3CfC6%2F7R%2BxtR6kYmKiVuNFhP3iOei47jdeDQnJbhGMdZMaP1ywQnnv9KaH0MmQPNX7jfJXosToWJ4qHWN4mAmLDbiu9a8YDzjj5IsUjPORUqEbeZ61akmXNrzOkG0nurJdxdnDp0ecfZ3ygNbUhy0zN%2FImf%2BzFNF%2Fxqf1S8EG3vtKIv2HFk2S1ulLZCroCGzv3uhQ4ApYKCUgmz8Fmhm%2F6NgY%2FdwGebnu3g0WrFsy3w5zAsarJGond1zWAjaMJvR8MQGOqUBwOjo%2BgWiGijMgCbVcLPrreUO3K8YDu13KpSQPHg1ir3k7SPbd1BCpHv8svvGndvZvoheWenlq53ikSpMeScxfpGuFsaPnuRoPLpbZ8F2JeRpK9r%2BPn4oS0lcPGGJRU7iDyhzJxxXXnQTA%2BM8Ey%2F3bHERSx4Y3zwKHNLc8O14%2F7ehG6naXCni03mooOZkye%2FFyO0yVHAVKaUnEKgNrxB2eJbYMDDy&X-Amz-Signature=560788c601a660097b41ef50fcb36411c7f10e720b90ea71c790cb4e64bc77dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USSUPJN3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqaMdSiflqYOSgBr7RrX4TdYyO24VBGgxWZIh9ViAy5AiBsS%2BzBvi1A810uquI6j2wLrYTDrk2unB%2FEmXYzlJbRDir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMnFPgTNnqBvYDeyCaKtwDZnvtmlYJKIk9GWr4mgBrqu7ozEm9aTkTibQzzyGBHjEmC6o9Vy%2Bi0AlY4ttiGQRhPwsNls%2BOKUIF1gABvYFTy6E8hPmyLOgP6ABXxgYY45fxEnrFHJo%2BR%2BXNB9RPaC9DaEGHBMR9HJ5ZCZ6hrJ01XS2C%2BJgzo8c9%2FnjXHpidUskXqeHcJ1CgQAr3qJ4wR6AFclTCy%2BEtzjwO1NrreICEiIwzpbFV%2FlkpFM2zkUID1jKK8%2Bs%2BoSZDBAyOGoDioueK7I81lP7hASviIFP7ABxDrQEG7iIuxFZB2URyWmVYKhLMZqRWVURKfIE15YQr7Dr5i1rUYnggvnaMLqu1N91FXGiQbYJsW8okv5eqVMC1brCjjAKbGG7SQOIa0JsOARwxhdBwOCQGnreNj%2FjCMCxLnvDsa%2BWlmnJw3HrHTANiEpm4u4Kge0rPZfslr6sZo9BVym5BbPCA%2BFCrsRjNFLxZt9wmR9TPnU4FNKHdDr%2B5pldRDnrTGjj%2Fg5fErRAaFuvd%2FKi757mR7%2Fih1QH6y9Xavhu7ksjz6W6YqM7KMYSMTajfunHkbltuupyMjny6jItVtTTaAAzpzan%2B66yAynxxSQzxm4PCW3i2OxCKr7StYFpPChFW92t2raTJfecwztDwxAY6pgERLW9KwdKvrVQGqDQuk8eHsLVe75I0O0QQz7sFSO1LMQlC67EE%2B7bxX4RIilvNRk7WyGkCZEVehufdwnV5w5CCQyXP%2B2w3rcGYWPt6EeUNIfEAaCyptpD52Z24HR%2FUdvIrtTuBiDDUS%2FP6obRY4CWCmSCMlXqOEDLMGI3ENLwSSxXLN9qZse6RSx0I6u58wHYDS33Jsy3XpxezapWgp%2FB1hd%2FBdVWS&X-Amz-Signature=416e3352d371566d58b3407465b9aa9f3042dbe28d9a2af62a179cf06d50d764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEZVG5AF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETAjerTl%2B4R8BDukzGRS6%2BCOfIV8GGkWNm21pBmsc6bAiACL047tTHeJzrMQ%2BPzvL3dJTtjc4irPuWkpBi5thxSlyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMESaJF2eONZVZOnUCKtwDVlO8ZY8p0YMZGk2TzGnN9lTQ0J08Uj7aQun0%2Fn5fbRyY12buxVIQ8dsmUHpeA8FK7dv2tKwSEKoDiWbNaj0%2Fgiz96QHBwFgM8ySVSyqFZEgFY0itoPh2hO6aJKdX5KuHkyhu0YVEUegGlQqJvz87fz3AcXO1grwLdXgc1weXzxIwgzDj0jX7IpnPn%2F5898X%2BG8h1Yh5hIMdB3J%2B%2BLfV5Hf15rdLfHPJrJeyDxBhkEXre2aNjZ10UKH2exoTeEZY5qZdXoJwFNV9EC2KNEj9Ic5RqR2qcwLn70D8R%2BVfstQk2zDVPj2YP6zU5hwKOXmb642TayrmQw7HKoeNB2sNfnKP7wzWqWXIC1uMrRxdVg%2BUTn%2F3fJGogfxMc6io5e2P9HfXzEYj61Ezffqx5%2BvOK1CL%2BPL7CCU4g6dzzeHCSPS%2BhX0qajyIoaPToI%2BmEN%2FnPr21xOailSWjtYmq1U%2FBMTn173yT2mO%2F%2By4n8Rg6kNjkpQK8ZtUle4C4dFfCpAtEN3FqzffGURM6VcthP5WNF%2FggM89UCbcwE5J1eysz6PwBCjBodxOJjvZlSHCDsESLEYDh3UwaesGj713jI%2B2GVkEpOB58WQdbyiHhSt%2FaNF0xL6Fj4h%2Fklpw6hMhgwxNDwxAY6pgFJQgrDJSW8wIlq%2BGi7zhfy%2FUY6QsjGP8cHNIu77%2FYjGZjxLUuuMmChQreYKdzGGk68qJkteDpH4dkel53El7k0wQ9xEaR09qKojfl4Ex5GyPnyNGBxqVdy1xcfnDT9DIvJtMdVoUzBwf1AHAM8LfvbWoEejhIEu8r9yZHPzPLmEZQx%2BcaJbhkVwIOgNfcfTJHi5w69eAVPQNuAIc57mVjd841PpvHn&X-Amz-Signature=b0f39b41077a669868ff203788f9ed292751b4e15ef2cbf0bad3da2cba4006c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU2DIC7S%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjs2q2669I3J20ArGXjxDnW%2BUHDZNQWS4RkMnsnCqNQAIgeDqCCW%2BFPpvUAp3ohiHYjpmC6KBOEkm%2B6F91Yp4TKUYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMOsR9ITk42MzDGp7CrcA24XzqtLj3kA54fYvtfY1HPF1e1dTYiT%2FClnQAn7JLkYRAiwlm67IpTrEj%2BBRw7pFaj5OGleAZ2%2Fr0pMGvrYd0rC2lw3Gb8K4BmpiS7Sk62u%2F%2BbZ5zcoXntBlLuOo5SCwZv3yh6OlhUu0CreyzBLA2vfszIJ564k4A0ujb%2B7W6EjA4jsUeiHajS%2FYQ2SoRzVbrWh7MVc0gHoRAzmZpsQYcAgThLIuks9NnOCiMC7ejB%2FV%2FXBexLtKrlrfs5rCIicJiLFhYVel0RwCObEZu2wepd9RWrmxfZdnD0s7IZOb1ZtVjIIswGShi%2F5SL3KAq4GACh2k7mNZFQATjEBUcHkCQWCtkbJLQF5Cvb%2F7A%2FKy45BHBhs479vFV7hNhzkFS0yjzidWOBmzD%2FV0cCPg7K2%2F0CRkuH6otkIPiZOeSzu9pGGTiCJS%2FTPMjcsP4tFvspYij%2FFg0B6SxkPbipQHHq5%2FZJX%2BAuYbO2pgGyl86hD9dvZAPXd55cdcy3XzXsb0qLTIjoM03byqgfw1%2Bqy2vEFhqotk9UVNyIUaqkHo2kvRB2bwA7ZgR11Ozg4iA6RvKJ7xwAmZw7B49%2FrUVv4Ye9IARSC4x0S1sd9JrV9MfHmYNuyU5PbkP8zPcO73V3HMNjQ8MQGOqUBSirXovgaeU%2FhAj86P1QmCQfddQhOJvdsfe87VzjUP6cU%2Fo1c%2FESGWggxur%2FKUn5MB7usfIGMSoHEZ%2FEORs2inroKfTwbSJYFAB%2BORyZHZpswQTVxuNZsv%2BXcXF%2B9mQ9W8qHz5lZUIQYWFAYjqqh%2B8ZvpwTViwruGx6TrvpX85H35ne2yvSEyz0AkaLQW9VKhEgWDVQStkUaz8NEnPk%2FaalZnZtXf&X-Amz-Signature=d2561e55a35f7b5c70894c2328cd55509b65c97dba3d84d096394d9ea7ca1dca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEZVG5AF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETAjerTl%2B4R8BDukzGRS6%2BCOfIV8GGkWNm21pBmsc6bAiACL047tTHeJzrMQ%2BPzvL3dJTtjc4irPuWkpBi5thxSlyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMESaJF2eONZVZOnUCKtwDVlO8ZY8p0YMZGk2TzGnN9lTQ0J08Uj7aQun0%2Fn5fbRyY12buxVIQ8dsmUHpeA8FK7dv2tKwSEKoDiWbNaj0%2Fgiz96QHBwFgM8ySVSyqFZEgFY0itoPh2hO6aJKdX5KuHkyhu0YVEUegGlQqJvz87fz3AcXO1grwLdXgc1weXzxIwgzDj0jX7IpnPn%2F5898X%2BG8h1Yh5hIMdB3J%2B%2BLfV5Hf15rdLfHPJrJeyDxBhkEXre2aNjZ10UKH2exoTeEZY5qZdXoJwFNV9EC2KNEj9Ic5RqR2qcwLn70D8R%2BVfstQk2zDVPj2YP6zU5hwKOXmb642TayrmQw7HKoeNB2sNfnKP7wzWqWXIC1uMrRxdVg%2BUTn%2F3fJGogfxMc6io5e2P9HfXzEYj61Ezffqx5%2BvOK1CL%2BPL7CCU4g6dzzeHCSPS%2BhX0qajyIoaPToI%2BmEN%2FnPr21xOailSWjtYmq1U%2FBMTn173yT2mO%2F%2By4n8Rg6kNjkpQK8ZtUle4C4dFfCpAtEN3FqzffGURM6VcthP5WNF%2FggM89UCbcwE5J1eysz6PwBCjBodxOJjvZlSHCDsESLEYDh3UwaesGj713jI%2B2GVkEpOB58WQdbyiHhSt%2FaNF0xL6Fj4h%2Fklpw6hMhgwxNDwxAY6pgFJQgrDJSW8wIlq%2BGi7zhfy%2FUY6QsjGP8cHNIu77%2FYjGZjxLUuuMmChQreYKdzGGk68qJkteDpH4dkel53El7k0wQ9xEaR09qKojfl4Ex5GyPnyNGBxqVdy1xcfnDT9DIvJtMdVoUzBwf1AHAM8LfvbWoEejhIEu8r9yZHPzPLmEZQx%2BcaJbhkVwIOgNfcfTJHi5w69eAVPQNuAIc57mVjd841PpvHn&X-Amz-Signature=67f5f3c83a8a5a49ad9df072709e3fd617d5a102fa47b6571d0ee756163fb104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QET6R52F%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsm9n1Ao6C0qzT7BGMkl28U1fxsu5Zvzx%2Fyf6fvLRKEAiBYwrXrX4MV4I3cja%2BdUrStUCRUkNprQQmgF6ULGuyM7yr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM9R7spXU6QliJOFE%2FKtwDkXRYwj4iyk4gXA9SGlWwfPlDk1hKJtaKV87OI896rNM45TerpPt%2BotdDimhTDpxaIB9ARl7ISITQ%2Fhn8Hysw6qSTuUSJl0Vs4Mn7C6YxAVWVEgFLPWIDnxo%2F%2Fu%2Fx4VZf4xi9jUUUjLfawrQnZIUxV5%2BsRHL5WMIOP4G071BrsoYIuTqhZIorjoGmnhIQNqvVJHN7won5RvxASwpzR1adi2fs6i01usfOcI2CII7b8qva7JQJDConyB9tioFm2ghaOwqyQ%2FJA2EDD%2F17eDspLpclStdBVLxN9oLm99l8LzcfrUFNMl729IpeTZjgP8qtIDKG%2FWp6g4%2BWAdqfccDDfDos709SsvBrIBj7mcgfXXLBj%2B0fPu4Umt92U%2Bmns%2Fa7HZwKkdLyon1EIpveE77vCmRLsEZjt1%2B1HptywBOasnFiOuMDcvrlOCliJ28Eh5XHIvYuQUipdg2kXzgM51EH5JRA0Z2Ik0KA%2BIVGB6cL2altxZr%2BoFV4lk6VW4bjXfgNMMhIHTLW%2FTj6atbpjx8rDnuHO7fDef2x4UEeCvCP%2FpzTD3%2FwTtgvcPH8t%2FaTnrcepjLJeYpC433n4t%2BjH5rA79c51BVw5f1%2BV2q22ieS9apdbmjJ8ymMs1at5UwgwytHwxAY6pgG%2FD96snh6s4WjaACbiQl%2Bc%2FinjnHDoz9QGxzFyGJXe01rFBhjJryh2Gkf%2FXIb9mhL3KikSgeiII76is2cTUPGJ4T2feQkwM4OKyNwj99f2PrhuP7rgNuvptMkHYJ0uwCFx1%2Fwp2%2F3TYQJY0MWMJPtozWqOC9q%2FD698FaN1pGkMaXElBV4hf23x55rnrhhj4WXt2Jn8gGPRncubQASsU5o4HXXcGFYN&X-Amz-Signature=5114220011551e52294362e3f8aab26b2d5c1c26666e17b53124dca864d1aa97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEZVG5AF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETAjerTl%2B4R8BDukzGRS6%2BCOfIV8GGkWNm21pBmsc6bAiACL047tTHeJzrMQ%2BPzvL3dJTtjc4irPuWkpBi5thxSlyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMESaJF2eONZVZOnUCKtwDVlO8ZY8p0YMZGk2TzGnN9lTQ0J08Uj7aQun0%2Fn5fbRyY12buxVIQ8dsmUHpeA8FK7dv2tKwSEKoDiWbNaj0%2Fgiz96QHBwFgM8ySVSyqFZEgFY0itoPh2hO6aJKdX5KuHkyhu0YVEUegGlQqJvz87fz3AcXO1grwLdXgc1weXzxIwgzDj0jX7IpnPn%2F5898X%2BG8h1Yh5hIMdB3J%2B%2BLfV5Hf15rdLfHPJrJeyDxBhkEXre2aNjZ10UKH2exoTeEZY5qZdXoJwFNV9EC2KNEj9Ic5RqR2qcwLn70D8R%2BVfstQk2zDVPj2YP6zU5hwKOXmb642TayrmQw7HKoeNB2sNfnKP7wzWqWXIC1uMrRxdVg%2BUTn%2F3fJGogfxMc6io5e2P9HfXzEYj61Ezffqx5%2BvOK1CL%2BPL7CCU4g6dzzeHCSPS%2BhX0qajyIoaPToI%2BmEN%2FnPr21xOailSWjtYmq1U%2FBMTn173yT2mO%2F%2By4n8Rg6kNjkpQK8ZtUle4C4dFfCpAtEN3FqzffGURM6VcthP5WNF%2FggM89UCbcwE5J1eysz6PwBCjBodxOJjvZlSHCDsESLEYDh3UwaesGj713jI%2B2GVkEpOB58WQdbyiHhSt%2FaNF0xL6Fj4h%2Fklpw6hMhgwxNDwxAY6pgFJQgrDJSW8wIlq%2BGi7zhfy%2FUY6QsjGP8cHNIu77%2FYjGZjxLUuuMmChQreYKdzGGk68qJkteDpH4dkel53El7k0wQ9xEaR09qKojfl4Ex5GyPnyNGBxqVdy1xcfnDT9DIvJtMdVoUzBwf1AHAM8LfvbWoEejhIEu8r9yZHPzPLmEZQx%2BcaJbhkVwIOgNfcfTJHi5w69eAVPQNuAIc57mVjd841PpvHn&X-Amz-Signature=96947423344cfdcc4f87df9e80ea9ccf7de69426cb25b0b0fc396490daff3d04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666L6NXWU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy0HRu3595sAG94DWJhQAEPKwqmvIXhvyWDQKJ5rl5NAIgDYzSi52JhYE220PnYBn6i%2BgLeLYw9cBxkhdH3OjrJLkq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDIOOu0sMqQvGh6xloCrcA7n%2B4sGkZx8mlCYAh3Oekl3Fw4dlmt0ToMAdmlrtfhKfEDjpPN5Or6sg9SOgSRVw%2BZ5RLOFw%2BGmg4FkxMEYfG%2BagxZF2jYz5%2F92i0QVnkSx4dfJ%2FcPzMp3Yma85nSlsKaHslQtkp0%2Boj%2FeG9lB2wEAyuA3wI4mH7vNCEKsa5JTQEhehW3C%2FXJ%2BNBqgMSqLHdVAKT8kLzJYCUblsjdBFAfIOOZx4%2BY3yHjhUrQbKeOi0WRLuxA%2FdhRdrWnnyHBA28tMlKgdC7WJX6p59dH6XkDBaOidAfPVtb9AhS76bAOb%2F1UtA4hqP4QQMtF1WxnEIg44%2FpIXxEj018Ccao%2Fcx7lkI78WF5reFX9FLooQ%2BIxNHyjQcSQyqFqqk2lgJ9d4n0yKFSjl3YUgkLLZelv86fy9YoJ9v5LgvZ4WecnFdMxt7A0Jg9p9%2FByENusqJUKYsTZjPXLzmdRk6nmMddAPgcjbnoQZRsX1QS14sETW8HZVnZuyFEFv4S9VfADj882q%2Baft3IqB0grmhxKTqGvlON54Ibmf%2Ftor0Bxxig3cX8MQB0Jndb%2BoHaLf67gWcEQz%2FOgMRvnlDqyQxm%2Fbo31XgrklbRZfKSTqxjgKIV8GvX5Yl6TirSjO%2FZfJuBm8raMLzR8MQGOqUBeKknL18RJgrkng4jzJKb9%2F%2BimDcOMZAX388riPd8WJNeUf1yJWRGNFZB9mzx910UvpFHXVM%2FP7pOr8ac%2BYzdcWu8elgXrXfkwAZT%2FXNplMaTVQHgOrEaaV4KZD3vTnlvimXCAU%2FxfJVM5o3blKn6XMw8qx%2BDRU50OwfhyMsdqM1ohMl7ImDtPYfhyMp6asYvXYPqL32Mudl3737rQRQRRZEgGQvc&X-Amz-Signature=ebf381ef06d80154189e2f93f200eb48aa80e450216501485407d434c1bf134e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEZVG5AF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETAjerTl%2B4R8BDukzGRS6%2BCOfIV8GGkWNm21pBmsc6bAiACL047tTHeJzrMQ%2BPzvL3dJTtjc4irPuWkpBi5thxSlyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMESaJF2eONZVZOnUCKtwDVlO8ZY8p0YMZGk2TzGnN9lTQ0J08Uj7aQun0%2Fn5fbRyY12buxVIQ8dsmUHpeA8FK7dv2tKwSEKoDiWbNaj0%2Fgiz96QHBwFgM8ySVSyqFZEgFY0itoPh2hO6aJKdX5KuHkyhu0YVEUegGlQqJvz87fz3AcXO1grwLdXgc1weXzxIwgzDj0jX7IpnPn%2F5898X%2BG8h1Yh5hIMdB3J%2B%2BLfV5Hf15rdLfHPJrJeyDxBhkEXre2aNjZ10UKH2exoTeEZY5qZdXoJwFNV9EC2KNEj9Ic5RqR2qcwLn70D8R%2BVfstQk2zDVPj2YP6zU5hwKOXmb642TayrmQw7HKoeNB2sNfnKP7wzWqWXIC1uMrRxdVg%2BUTn%2F3fJGogfxMc6io5e2P9HfXzEYj61Ezffqx5%2BvOK1CL%2BPL7CCU4g6dzzeHCSPS%2BhX0qajyIoaPToI%2BmEN%2FnPr21xOailSWjtYmq1U%2FBMTn173yT2mO%2F%2By4n8Rg6kNjkpQK8ZtUle4C4dFfCpAtEN3FqzffGURM6VcthP5WNF%2FggM89UCbcwE5J1eysz6PwBCjBodxOJjvZlSHCDsESLEYDh3UwaesGj713jI%2B2GVkEpOB58WQdbyiHhSt%2FaNF0xL6Fj4h%2Fklpw6hMhgwxNDwxAY6pgFJQgrDJSW8wIlq%2BGi7zhfy%2FUY6QsjGP8cHNIu77%2FYjGZjxLUuuMmChQreYKdzGGk68qJkteDpH4dkel53El7k0wQ9xEaR09qKojfl4Ex5GyPnyNGBxqVdy1xcfnDT9DIvJtMdVoUzBwf1AHAM8LfvbWoEejhIEu8r9yZHPzPLmEZQx%2BcaJbhkVwIOgNfcfTJHi5w69eAVPQNuAIc57mVjd841PpvHn&X-Amz-Signature=98066317f6e6f20e2afac45c67754311698b1cc9a2768fb37921de8d9a11116c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXKJDV6Z%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6H8PCSlAGoxcp65HGV6Sh8HGclIegGsfi97%2F6LBvtWAiBkRfp5%2FnPNNktAElzfU1W4W015%2BEKVABph53kNNzEpQir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMyWHhKKYHnP0JgWu3KtwD7Q4PDamo4tPqyBSDJGwlIE2MYmQEExBikOWJFEHaXvFftR5M2IB1FaXVt5LdD1jT104GWs37qIUzA5SMXR75WOZsfHbCM6k6f2y9SAcJouQCT0thRuq%2FcA1Nqu5ng7x4glJa1jILDfs6WxWF2BZ3LBXwDjE2cTsuhHm9%2BBOihp7gpeENsaOD3QhRzKuxyf0cQlz4emcfCA%2B%2BYydBlPMegRnX2xHY9zDZjmTDsjbtgKQMi2SJt4poAfPCQLoZ%2FL3HutkiZPPf0kNlGNxbTinaLDZimMeW861jfvDcQDFyoVYWXk81EptoZ3zCQdm1zSTowp2%2BLbg5PXTXteEm%2FQCT2McfQuZLedAJNZsOjQRzHTgFrP1SSC%2Bhd8SZtdWMjeV2M9%2FNgj%2BKUkIgTrZAuK6ekMO7KjtkzG6q7v%2BcOeXQdvBq8v%2FF9p9MuAENAUNIRcMWHGpDM7QHer9XtlMXJzcS5%2Fw5Pe1m7EB48vh2Sm00mQ7DsklCcWKrhEBTNXxzJCKVMYrWmD9HrITX%2FvKxsDyG5jR9%2B%2BklA82Q1%2FfiEz%2FBXEhNqIDV2J%2FsCMi7Tj00BYNAmJ0JusUojypD1xG4n08vmFyt2EyOQCOKhbdLnohSMKa2dGbmPlsk122ekIww9tDwxAY6pgFeWSADuYQM1t9oQuam2Zvd7uB8oIjYpS76RF4vYJ1bTGsyyGsh8STVsLA9w6eh6x2z3IfHXYg96rFNpEWrOLFc6Kd0yv4q3YYlc0Z0Q%2FYQSmpXzhFjPn2zWeZEobD6ouJqGhofIuTUhSnkXnaXcrQP1A7NwILjUVUcnN6ngO%2Ba32JdS6MazjsR6yigZxpgS4QBl%2FtSDbM3FLc2x%2BuDN%2Fti2HQaxFay&X-Amz-Signature=66bfd4f91669e43c208490432c9c87adb230b51d2b34dbc17845d95ecb904cfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3VJC7IP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7usaavm65IVm8atIjVVM0BsCo7akxYfzO2sDgHhtaWgIhAPO6DAu9yn0bB%2FrfMv04XXd8gdoa0uGMrKGWaqEC98hrKv8DCCcQABoMNjM3NDIzMTgzODA1IgwYxYtbil0IPnCEM0Uq3AO6S%2Fxt8TpRb6aCT5TyGPsYyEEKZyBL6KKuILTYvOJPQs3W1e7mtkVPZmnomFgVwLhFKkabXfe7Yqwe1RcawrhcYHOlyz7cNnLammvWk%2BoN7WZkw%2FaKb8hZZxvd6W6Jpc9fYKuQ3R5WSHalEKyHUA%2BtPHqQkV4CDD%2B5urnWenZfE0QgjtBRbBwavEAA3IdxG9%2FoQlj1GvD%2FbKewL4I%2BSQhTOPLqKqTtfubnsoxk0jNGAPY8ZN9q5AUr2N4EkrivEB7C%2BsP1U1uMQezfD%2BQsDuOHtrM9wia04kElCEzkb%2BZcrj%2FiL2f%2FR4ndC3yeQk3acZG0%2BfWCwWa7nzGztrelzZIaf%2BL8UfQh26vjRzg1aGQw08JoHsjfX%2FpnkTXZlatC9giHM5AwOnxXYzZFhFo0rGrQ3bj54KkZ1n%2FuRbV4WZ7JRSneCSf9hJiKwiy8PpXdBPAeFZiXiZcmiSy27itnzdKZSFrlGRv5yzkXFo6VvNElQawgg3jn07QWR%2BNdmzanX3fhnXKkIQ9HZB5GFcbByFvMwSBIxm5rOPyfmuu8LNadefmoM4PRQ%2FFhm57sSKw4FeORtBVYAuPyT0UqMpstbOOs4b5wfU8x9%2FbhpYmIk5m%2F7JTfhjwMZrq%2FwwBAzDC60fDEBjqkAQNYghjKDjtTrgkFLLeDxe709w4V101uUFCLDJyhKvUU%2BfQ%2BdAonxM5z6BSTeEoM2cEpq%2Bh%2FlTM%2B5qYj8OGnaR2sxsZNhsoIRgIz39mcCkwBb0PCS5yofL1Ul9eaNb0H%2FEPyuiDHsHcRKMEjDpkXYHsxZaPAJkQmfZ7K6ATyE2LgvdijZWbPUxXtQ5VrcRE%2FWfDYFeTozibM%2FkAXFmCcrXqVXrk3&X-Amz-Signature=d43046b038bd3d03ec247c3e029185cb227ec5e8d67a12b5a3f3974a6dbf8450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBYO5HTE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD90GwH1F6LnGXi3FXd23U72Kt%2BGLEdJI4oYlj5CRCUWAIgDiYeH9WeGWZMM9Lq0APK2nxu%2F8KOw48IK2jU8PbfEjgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDKlTAVNTRz9Yf3REgSrcA%2FnQnQb%2B9Iv6aqCSarsAxi72sV%2B4E2keU5SCS9IQnBIHJBS%2BbyyfP9C%2FJBfd71a5n91hOOyf6sz4BCXaD%2Bzag99C0RsQoawo6u9eJ1HAMorgWel8i8EnOKimNud0a1B98dDiZS1EEkfhGjDx53eM3KBCie73DEsOIhZorIP2Ek57UQqfZWG0vV5svTJoKbfFUUJindzgII600lCZ117rJUwgNqSdo6exXWcswCAt9b4odXfaKZNSF52uVVm4FXGYt0PyKnWnGNfuNbQIPtYhYxGmPohbmNyWEe6Wn4XsDMpPzO2VjrhiUxE0gbDU2bj0rDT1RMNa2QKRHuHKQ3Js3OSdBXYlSlEqySzt4g%2Fc2rs%2BiEF5VjJRnNKjdTOe3cKZBnneflpiSjhugtleUB%2FUm0Xg1zRIvTMWPXGI9jKfzSmN4SD87wfWmDu%2Bf18%2FbmFqU0aYq4Yh988Ix4ETA%2B3ixCD7xS4QnrDe2tq3h39E1K%2FoCUgCA6KPXIZQtJOXlS3UMdNhK4MBSR7302vX5COCHd09OPDOR7GNngv82%2FaBmKp5EqMBSQCf6oGlaXnv00AqoYKzOLT22YZqouadIbaWM8ejlaxk0iD3YH2dr%2BG60x64Kr6yJiEaRzktOs9nMJTR8MQGOqUB4VJWbeToibaXTnH8Cw5dDgx%2FI9cetksatgOBj1W2WinaPiiRqnjO2hRl7ebuhtjmiy9onD4CcSI6ZTF1y9DjHjgiqO3bQ1p8t0t0IVergJlBMz1y9ZrR4DWFE2azTL%2BdOdDb9M3U1i%2Fi2056PADojLcTiEV4fKcg3w64fGkV%2F0%2F%2FTa0o%2FCbamE2sFk94ORtDMbX90u0QZdjATrmLJ5WabaTL1sRh&X-Amz-Signature=9486fb8dcf8502bf4c8bf0bdbdb03ec665e271640f61d7f7c67bd0041b7f9b89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DUJMJHA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXYxiuON5OV4BpC%2FaVRgNWRjUNEeB2qHWxC3SSo%2FwJwQIgCUVUTfH4R69W3FG1dkbTV%2Fb4Ea6%2FqG9sTNHz%2FTosoLAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBNi5xeM%2BDjHeY2GjSrcA2IWEyz97QcIPoaQPxs6i0fWNJmRj4VUlM2yh8KJ24NU4Ocq2e%2F2uxsIFcEKqGNESoPUtAwADrpEBw0frx03meFyiIt3qREYV2g0ilSPdZHJglwNxgGRVF4ACvMlY8O1Weaddak%2Foakyj3EbOE4hCo6yNQ2whQrCuA%2Bd0Gq%2FT9AhY3K7iYzBtYUv1%2BhYRuyJDhwz643XJoNgXhAm%2FZZfTOCw4a%2B2gKmi21iTceSbb3%2BDRIkacskFCYVXnuDcWrHKjS%2Fvfs2aex96P5PDdulAOC2Rx78h2vL%2FkKVaS27377BWuP%2FooobtKn0Htv3srybgfcKOR2vrE2D1lO869C8SVEoeuTAmbZUzgIODnKRJc%2FBLUf9uxhjchs3ARuBxR%2BmxNoS7y6iMSMEFBTMt5bBxssUi7KqFRjcOtCYCPqV44Q%2BQHCLztw8O%2BOVbqpaVqfLHWtV7e%2B6oHXblzqErxSPGQyNTMNZ%2FSqSw4IJnbwuG2IP0b8rSuFXL%2BvWnf3CH15Jiwg585AENGGOqAcENaIxLlOa4OoCfYTVpPa9%2Bad4eeSAHvBNvdJu9gNqn5mk0T8ppKeCY1EFqgp6kJHg3xMu46ffq%2FEvVU9sfN0zlF%2BFBHYwyqRQDz7CkUri%2BVDwvMIrR8MQGOqUByHp5R7oW35z%2BbD1AUgNCNXrk%2F6oPMSE9EY3FevffTl%2BpJ%2Bto5HSo%2BZ28Pooq5R1Cn3gsijNWylixDhi3kkXC34PVoHLgCoVieUgYFfQr1ygENfoP1Cb9cORklFoOS%2BAdNQbye5dt2JvNg8d7T7W2%2FH5a7XONX4%2Bnel5KFLB2QDqD%2BRIOaO%2Fk9071LOXt9h2IC0oBwgCLfZP0Q18wTHPg%2FUbivFmy&X-Amz-Signature=8a9c14e7d7bff01a2a344d89ac5e447379c5fc696dc5f3e03c73c00dbf7d5df4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWQIF5L7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqC7UIhShjSFso0rqEuQviMFVqY9MzBqAr5HZd75GptwIgZpvppK2q%2Fr6F%2B6fS90hxYp14%2FdMSSHTRGW9PU4fiTKEq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDKEXqdsftRLAKN4%2B9ircAx3pXHNtWxt3p%2FDs6aGRmB2%2B%2FybnjSbsUovU831T4xbRPgD7U4jC%2FLI6iedasthU9QOvXpz8RwZqGFImmJGjdY8nKE655lkEmK9gc2BflHxaKdd7ehwJ7WpgOD9OGdky8n191mlbNeiRWa2oAV0y8RfX2p2EoOjLlhqkJiU3v0Vsxo46LlyNmDxtYQyuyUDG9m3HAFkU2abkYZxZE13HXVgzTAhZxGqUx2aHwARYPeXIBA3FE9OZ9ZJqmN1JZ0lA8ercnfdExHMi9%2FwyFowR3OQIsFvtbAn1D7%2Ft01U6HRFo1YOGhJbtoJQOIMaGNIpOS%2FKk%2FJnQnubelqOPQLdclZUhUwNY%2BWt7Pf15a6YD5dd6rWq4oY%2FphnfFIctuE4qVQSvNmurtbARxltqETPY3z6MiAFBoTzI7W2oomrGA6xKG3bvxvXlPaCfsa2vbFhbRteG%2BKl1%2F6ogDHHUntEtuhN%2FaoXHE8VLoODMFx8NofG6HA44PmpMdqgaz5m85Dxpfl9S71lL7Q7Z63%2FkACsD4PgZmK9HkHY4SBSJtbPDNiaRBQNLFxsXtPHkSJzkhGgXUYCmk3tirfG4TES%2F82ltOVOVGVBzS0XymkqUfaThRVM9Y%2F7ZuWli5u%2Bl6BnREMMHR8MQGOqUB5UpkuW76s34Uzc345vAN6D3rw6ueC7xXDBc3r1WZT0PH9kemSHEKrb9eDCck5q3FWc4J2FQsq%2FKaheAlaUPN5%2F9yHXe5eUXNDib1Sl%2FWedDSnU6ZEdixRR3gPIaooXCWnxeXTs3ZLt4hqIKDHCW156QzLDH%2BgcUuN%2FvCRytXFY9tJBUPKkd3%2BuRGVu2kPw2KWlSv5nqTA8ij2WvlRgjuadVZo5j7&X-Amz-Signature=8b3693e5ed1a0aa6a562ce426863b1d581395d0a023a5f547f0f288e9779b5e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEZVG5AF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETAjerTl%2B4R8BDukzGRS6%2BCOfIV8GGkWNm21pBmsc6bAiACL047tTHeJzrMQ%2BPzvL3dJTtjc4irPuWkpBi5thxSlyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMESaJF2eONZVZOnUCKtwDVlO8ZY8p0YMZGk2TzGnN9lTQ0J08Uj7aQun0%2Fn5fbRyY12buxVIQ8dsmUHpeA8FK7dv2tKwSEKoDiWbNaj0%2Fgiz96QHBwFgM8ySVSyqFZEgFY0itoPh2hO6aJKdX5KuHkyhu0YVEUegGlQqJvz87fz3AcXO1grwLdXgc1weXzxIwgzDj0jX7IpnPn%2F5898X%2BG8h1Yh5hIMdB3J%2B%2BLfV5Hf15rdLfHPJrJeyDxBhkEXre2aNjZ10UKH2exoTeEZY5qZdXoJwFNV9EC2KNEj9Ic5RqR2qcwLn70D8R%2BVfstQk2zDVPj2YP6zU5hwKOXmb642TayrmQw7HKoeNB2sNfnKP7wzWqWXIC1uMrRxdVg%2BUTn%2F3fJGogfxMc6io5e2P9HfXzEYj61Ezffqx5%2BvOK1CL%2BPL7CCU4g6dzzeHCSPS%2BhX0qajyIoaPToI%2BmEN%2FnPr21xOailSWjtYmq1U%2FBMTn173yT2mO%2F%2By4n8Rg6kNjkpQK8ZtUle4C4dFfCpAtEN3FqzffGURM6VcthP5WNF%2FggM89UCbcwE5J1eysz6PwBCjBodxOJjvZlSHCDsESLEYDh3UwaesGj713jI%2B2GVkEpOB58WQdbyiHhSt%2FaNF0xL6Fj4h%2Fklpw6hMhgwxNDwxAY6pgFJQgrDJSW8wIlq%2BGi7zhfy%2FUY6QsjGP8cHNIu77%2FYjGZjxLUuuMmChQreYKdzGGk68qJkteDpH4dkel53El7k0wQ9xEaR09qKojfl4Ex5GyPnyNGBxqVdy1xcfnDT9DIvJtMdVoUzBwf1AHAM8LfvbWoEejhIEu8r9yZHPzPLmEZQx%2BcaJbhkVwIOgNfcfTJHi5w69eAVPQNuAIc57mVjd841PpvHn&X-Amz-Signature=bd45cf891846a606797389fcc0cb7d1c1242c2dbcc82650c34cc920fc6a463b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEZVG5AF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETAjerTl%2B4R8BDukzGRS6%2BCOfIV8GGkWNm21pBmsc6bAiACL047tTHeJzrMQ%2BPzvL3dJTtjc4irPuWkpBi5thxSlyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMESaJF2eONZVZOnUCKtwDVlO8ZY8p0YMZGk2TzGnN9lTQ0J08Uj7aQun0%2Fn5fbRyY12buxVIQ8dsmUHpeA8FK7dv2tKwSEKoDiWbNaj0%2Fgiz96QHBwFgM8ySVSyqFZEgFY0itoPh2hO6aJKdX5KuHkyhu0YVEUegGlQqJvz87fz3AcXO1grwLdXgc1weXzxIwgzDj0jX7IpnPn%2F5898X%2BG8h1Yh5hIMdB3J%2B%2BLfV5Hf15rdLfHPJrJeyDxBhkEXre2aNjZ10UKH2exoTeEZY5qZdXoJwFNV9EC2KNEj9Ic5RqR2qcwLn70D8R%2BVfstQk2zDVPj2YP6zU5hwKOXmb642TayrmQw7HKoeNB2sNfnKP7wzWqWXIC1uMrRxdVg%2BUTn%2F3fJGogfxMc6io5e2P9HfXzEYj61Ezffqx5%2BvOK1CL%2BPL7CCU4g6dzzeHCSPS%2BhX0qajyIoaPToI%2BmEN%2FnPr21xOailSWjtYmq1U%2FBMTn173yT2mO%2F%2By4n8Rg6kNjkpQK8ZtUle4C4dFfCpAtEN3FqzffGURM6VcthP5WNF%2FggM89UCbcwE5J1eysz6PwBCjBodxOJjvZlSHCDsESLEYDh3UwaesGj713jI%2B2GVkEpOB58WQdbyiHhSt%2FaNF0xL6Fj4h%2Fklpw6hMhgwxNDwxAY6pgFJQgrDJSW8wIlq%2BGi7zhfy%2FUY6QsjGP8cHNIu77%2FYjGZjxLUuuMmChQreYKdzGGk68qJkteDpH4dkel53El7k0wQ9xEaR09qKojfl4Ex5GyPnyNGBxqVdy1xcfnDT9DIvJtMdVoUzBwf1AHAM8LfvbWoEejhIEu8r9yZHPzPLmEZQx%2BcaJbhkVwIOgNfcfTJHi5w69eAVPQNuAIc57mVjd841PpvHn&X-Amz-Signature=a4c3e3dec0c08850b3f0b026a463858c8e94b491488193646132c47c5a327039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XG2Z5OE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHg00MZtMwXiFeESnbQ0ariQktCHVmCb91MFz0TXQi9FAiB8Du2rjxDjYMuISwcE0QX32FvsbcPcCQK%2FmN8682YG0ir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMN3zMm%2FjZP0Ps7i%2FkKtwDXQxsX6L%2Fc2EL%2BnEMcZop34JvN2SKKguDER1Zla9LefXie%2FYx6kknAL%2BZvMWWYL0%2FjjGkyAsqe3shFCobUwBp8vjNzmpgCMoevGDUcNJltn2KXLDZEFLLgFjpWogNTiftqXAihJBvgRSyUsBUfJfep9xG%2Bub9%2B7rdEr02gHcp%2BJNDSXdoCeoONle%2BD3TsDs3amAXT%2BJzPa%2BrsZngMIPFQtPYXyYDizCioY82%2B452xZdUHS8KkKAKn%2FynU94Is107a4qcW%2FNabpTgFwJ1eV%2BzD%2BgxgJLaz4Cx%2BB26z28hBOfyFcGSerlAUyHkEEArmMQ2PJAi51RM7bUrOGa5CRg4mimCwMZ0bZohFH7BA1CvViTWqUjJSDnCUNeXXJcnj%2BfgL3eyoa4kjsAQuJe6hVjUE9ZWzo7VxzxdHjhj8U1m7YCs1z9CsrXcYpPmRYu1BUmUTUKxMlOaTDHi1jAmDLPLbgxsRtqmj%2Fl02TCl6tFlaLtj1TRaDsu%2FqO1UkEsoypKsZoirT%2FYpkGn7rJ9yazOZwUtseF5kPAfnybVI20Ge9IpgpYac1I0IQlFYrancByYoHiMklZya6oqA%2B%2BkfzP2cANsF7YT0IekSkNeHDcwEK1BwtPjiHpR9UOD1R5MowitHwxAY6pgHAuajL6AfzyoXnnM4rBNUyBS5yhj%2BGRyzoAy08g94rk8tFWAs3sW%2FggNBLwoblyzvynyCgIoADB6%2F6gQA1KTKXwjMMVVRoLKAD%2FNqBSbuXNoC31jUwcZXPDINXNxFjbUVP%2FiPnKbOVhHQHn%2FADPl%2FOggn2oKr2GoL4LJKIfG4N1Tm4dSIZG4Whe%2BXf5DVPctLrBbiwg5AjDL5InMZTcyNzEvmuZzEy&X-Amz-Signature=2a7386ce46c1012f0de4c4f6414a26f39a475b250f7292b4ed0e8a66eef1f9c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XG2Z5OE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHg00MZtMwXiFeESnbQ0ariQktCHVmCb91MFz0TXQi9FAiB8Du2rjxDjYMuISwcE0QX32FvsbcPcCQK%2FmN8682YG0ir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMN3zMm%2FjZP0Ps7i%2FkKtwDXQxsX6L%2Fc2EL%2BnEMcZop34JvN2SKKguDER1Zla9LefXie%2FYx6kknAL%2BZvMWWYL0%2FjjGkyAsqe3shFCobUwBp8vjNzmpgCMoevGDUcNJltn2KXLDZEFLLgFjpWogNTiftqXAihJBvgRSyUsBUfJfep9xG%2Bub9%2B7rdEr02gHcp%2BJNDSXdoCeoONle%2BD3TsDs3amAXT%2BJzPa%2BrsZngMIPFQtPYXyYDizCioY82%2B452xZdUHS8KkKAKn%2FynU94Is107a4qcW%2FNabpTgFwJ1eV%2BzD%2BgxgJLaz4Cx%2BB26z28hBOfyFcGSerlAUyHkEEArmMQ2PJAi51RM7bUrOGa5CRg4mimCwMZ0bZohFH7BA1CvViTWqUjJSDnCUNeXXJcnj%2BfgL3eyoa4kjsAQuJe6hVjUE9ZWzo7VxzxdHjhj8U1m7YCs1z9CsrXcYpPmRYu1BUmUTUKxMlOaTDHi1jAmDLPLbgxsRtqmj%2Fl02TCl6tFlaLtj1TRaDsu%2FqO1UkEsoypKsZoirT%2FYpkGn7rJ9yazOZwUtseF5kPAfnybVI20Ge9IpgpYac1I0IQlFYrancByYoHiMklZya6oqA%2B%2BkfzP2cANsF7YT0IekSkNeHDcwEK1BwtPjiHpR9UOD1R5MowitHwxAY6pgHAuajL6AfzyoXnnM4rBNUyBS5yhj%2BGRyzoAy08g94rk8tFWAs3sW%2FggNBLwoblyzvynyCgIoADB6%2F6gQA1KTKXwjMMVVRoLKAD%2FNqBSbuXNoC31jUwcZXPDINXNxFjbUVP%2FiPnKbOVhHQHn%2FADPl%2FOggn2oKr2GoL4LJKIfG4N1Tm4dSIZG4Whe%2BXf5DVPctLrBbiwg5AjDL5InMZTcyNzEvmuZzEy&X-Amz-Signature=a3fd64d084681bf87666d356c1a57290a871900ab9ce4b37bd5d3c0fb712cf6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XG2Z5OE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHg00MZtMwXiFeESnbQ0ariQktCHVmCb91MFz0TXQi9FAiB8Du2rjxDjYMuISwcE0QX32FvsbcPcCQK%2FmN8682YG0ir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMN3zMm%2FjZP0Ps7i%2FkKtwDXQxsX6L%2Fc2EL%2BnEMcZop34JvN2SKKguDER1Zla9LefXie%2FYx6kknAL%2BZvMWWYL0%2FjjGkyAsqe3shFCobUwBp8vjNzmpgCMoevGDUcNJltn2KXLDZEFLLgFjpWogNTiftqXAihJBvgRSyUsBUfJfep9xG%2Bub9%2B7rdEr02gHcp%2BJNDSXdoCeoONle%2BD3TsDs3amAXT%2BJzPa%2BrsZngMIPFQtPYXyYDizCioY82%2B452xZdUHS8KkKAKn%2FynU94Is107a4qcW%2FNabpTgFwJ1eV%2BzD%2BgxgJLaz4Cx%2BB26z28hBOfyFcGSerlAUyHkEEArmMQ2PJAi51RM7bUrOGa5CRg4mimCwMZ0bZohFH7BA1CvViTWqUjJSDnCUNeXXJcnj%2BfgL3eyoa4kjsAQuJe6hVjUE9ZWzo7VxzxdHjhj8U1m7YCs1z9CsrXcYpPmRYu1BUmUTUKxMlOaTDHi1jAmDLPLbgxsRtqmj%2Fl02TCl6tFlaLtj1TRaDsu%2FqO1UkEsoypKsZoirT%2FYpkGn7rJ9yazOZwUtseF5kPAfnybVI20Ge9IpgpYac1I0IQlFYrancByYoHiMklZya6oqA%2B%2BkfzP2cANsF7YT0IekSkNeHDcwEK1BwtPjiHpR9UOD1R5MowitHwxAY6pgHAuajL6AfzyoXnnM4rBNUyBS5yhj%2BGRyzoAy08g94rk8tFWAs3sW%2FggNBLwoblyzvynyCgIoADB6%2F6gQA1KTKXwjMMVVRoLKAD%2FNqBSbuXNoC31jUwcZXPDINXNxFjbUVP%2FiPnKbOVhHQHn%2FADPl%2FOggn2oKr2GoL4LJKIfG4N1Tm4dSIZG4Whe%2BXf5DVPctLrBbiwg5AjDL5InMZTcyNzEvmuZzEy&X-Amz-Signature=1880850b35ec05fe9260c23975911b94814f21db8a2f828b4f351913e6822763&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XG2Z5OE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHg00MZtMwXiFeESnbQ0ariQktCHVmCb91MFz0TXQi9FAiB8Du2rjxDjYMuISwcE0QX32FvsbcPcCQK%2FmN8682YG0ir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMN3zMm%2FjZP0Ps7i%2FkKtwDXQxsX6L%2Fc2EL%2BnEMcZop34JvN2SKKguDER1Zla9LefXie%2FYx6kknAL%2BZvMWWYL0%2FjjGkyAsqe3shFCobUwBp8vjNzmpgCMoevGDUcNJltn2KXLDZEFLLgFjpWogNTiftqXAihJBvgRSyUsBUfJfep9xG%2Bub9%2B7rdEr02gHcp%2BJNDSXdoCeoONle%2BD3TsDs3amAXT%2BJzPa%2BrsZngMIPFQtPYXyYDizCioY82%2B452xZdUHS8KkKAKn%2FynU94Is107a4qcW%2FNabpTgFwJ1eV%2BzD%2BgxgJLaz4Cx%2BB26z28hBOfyFcGSerlAUyHkEEArmMQ2PJAi51RM7bUrOGa5CRg4mimCwMZ0bZohFH7BA1CvViTWqUjJSDnCUNeXXJcnj%2BfgL3eyoa4kjsAQuJe6hVjUE9ZWzo7VxzxdHjhj8U1m7YCs1z9CsrXcYpPmRYu1BUmUTUKxMlOaTDHi1jAmDLPLbgxsRtqmj%2Fl02TCl6tFlaLtj1TRaDsu%2FqO1UkEsoypKsZoirT%2FYpkGn7rJ9yazOZwUtseF5kPAfnybVI20Ge9IpgpYac1I0IQlFYrancByYoHiMklZya6oqA%2B%2BkfzP2cANsF7YT0IekSkNeHDcwEK1BwtPjiHpR9UOD1R5MowitHwxAY6pgHAuajL6AfzyoXnnM4rBNUyBS5yhj%2BGRyzoAy08g94rk8tFWAs3sW%2FggNBLwoblyzvynyCgIoADB6%2F6gQA1KTKXwjMMVVRoLKAD%2FNqBSbuXNoC31jUwcZXPDINXNxFjbUVP%2FiPnKbOVhHQHn%2FADPl%2FOggn2oKr2GoL4LJKIfG4N1Tm4dSIZG4Whe%2BXf5DVPctLrBbiwg5AjDL5InMZTcyNzEvmuZzEy&X-Amz-Signature=746d9e5275c7e40527c0a8831cbaf7063d1a83bd656e1c60d4bb364ec704877f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XG2Z5OE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHg00MZtMwXiFeESnbQ0ariQktCHVmCb91MFz0TXQi9FAiB8Du2rjxDjYMuISwcE0QX32FvsbcPcCQK%2FmN8682YG0ir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMN3zMm%2FjZP0Ps7i%2FkKtwDXQxsX6L%2Fc2EL%2BnEMcZop34JvN2SKKguDER1Zla9LefXie%2FYx6kknAL%2BZvMWWYL0%2FjjGkyAsqe3shFCobUwBp8vjNzmpgCMoevGDUcNJltn2KXLDZEFLLgFjpWogNTiftqXAihJBvgRSyUsBUfJfep9xG%2Bub9%2B7rdEr02gHcp%2BJNDSXdoCeoONle%2BD3TsDs3amAXT%2BJzPa%2BrsZngMIPFQtPYXyYDizCioY82%2B452xZdUHS8KkKAKn%2FynU94Is107a4qcW%2FNabpTgFwJ1eV%2BzD%2BgxgJLaz4Cx%2BB26z28hBOfyFcGSerlAUyHkEEArmMQ2PJAi51RM7bUrOGa5CRg4mimCwMZ0bZohFH7BA1CvViTWqUjJSDnCUNeXXJcnj%2BfgL3eyoa4kjsAQuJe6hVjUE9ZWzo7VxzxdHjhj8U1m7YCs1z9CsrXcYpPmRYu1BUmUTUKxMlOaTDHi1jAmDLPLbgxsRtqmj%2Fl02TCl6tFlaLtj1TRaDsu%2FqO1UkEsoypKsZoirT%2FYpkGn7rJ9yazOZwUtseF5kPAfnybVI20Ge9IpgpYac1I0IQlFYrancByYoHiMklZya6oqA%2B%2BkfzP2cANsF7YT0IekSkNeHDcwEK1BwtPjiHpR9UOD1R5MowitHwxAY6pgHAuajL6AfzyoXnnM4rBNUyBS5yhj%2BGRyzoAy08g94rk8tFWAs3sW%2FggNBLwoblyzvynyCgIoADB6%2F6gQA1KTKXwjMMVVRoLKAD%2FNqBSbuXNoC31jUwcZXPDINXNxFjbUVP%2FiPnKbOVhHQHn%2FADPl%2FOggn2oKr2GoL4LJKIfG4N1Tm4dSIZG4Whe%2BXf5DVPctLrBbiwg5AjDL5InMZTcyNzEvmuZzEy&X-Amz-Signature=6232af31b5a28726bce58bc5da786872b81f287b8e9727bc0bff48bff07fa2f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XG2Z5OE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHg00MZtMwXiFeESnbQ0ariQktCHVmCb91MFz0TXQi9FAiB8Du2rjxDjYMuISwcE0QX32FvsbcPcCQK%2FmN8682YG0ir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMN3zMm%2FjZP0Ps7i%2FkKtwDXQxsX6L%2Fc2EL%2BnEMcZop34JvN2SKKguDER1Zla9LefXie%2FYx6kknAL%2BZvMWWYL0%2FjjGkyAsqe3shFCobUwBp8vjNzmpgCMoevGDUcNJltn2KXLDZEFLLgFjpWogNTiftqXAihJBvgRSyUsBUfJfep9xG%2Bub9%2B7rdEr02gHcp%2BJNDSXdoCeoONle%2BD3TsDs3amAXT%2BJzPa%2BrsZngMIPFQtPYXyYDizCioY82%2B452xZdUHS8KkKAKn%2FynU94Is107a4qcW%2FNabpTgFwJ1eV%2BzD%2BgxgJLaz4Cx%2BB26z28hBOfyFcGSerlAUyHkEEArmMQ2PJAi51RM7bUrOGa5CRg4mimCwMZ0bZohFH7BA1CvViTWqUjJSDnCUNeXXJcnj%2BfgL3eyoa4kjsAQuJe6hVjUE9ZWzo7VxzxdHjhj8U1m7YCs1z9CsrXcYpPmRYu1BUmUTUKxMlOaTDHi1jAmDLPLbgxsRtqmj%2Fl02TCl6tFlaLtj1TRaDsu%2FqO1UkEsoypKsZoirT%2FYpkGn7rJ9yazOZwUtseF5kPAfnybVI20Ge9IpgpYac1I0IQlFYrancByYoHiMklZya6oqA%2B%2BkfzP2cANsF7YT0IekSkNeHDcwEK1BwtPjiHpR9UOD1R5MowitHwxAY6pgHAuajL6AfzyoXnnM4rBNUyBS5yhj%2BGRyzoAy08g94rk8tFWAs3sW%2FggNBLwoblyzvynyCgIoADB6%2F6gQA1KTKXwjMMVVRoLKAD%2FNqBSbuXNoC31jUwcZXPDINXNxFjbUVP%2FiPnKbOVhHQHn%2FADPl%2FOggn2oKr2GoL4LJKIfG4N1Tm4dSIZG4Whe%2BXf5DVPctLrBbiwg5AjDL5InMZTcyNzEvmuZzEy&X-Amz-Signature=0c24c9369b706e0dc0feaa7c17624917962401691c2a66164d46ea777c115561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XG2Z5OE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHg00MZtMwXiFeESnbQ0ariQktCHVmCb91MFz0TXQi9FAiB8Du2rjxDjYMuISwcE0QX32FvsbcPcCQK%2FmN8682YG0ir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMN3zMm%2FjZP0Ps7i%2FkKtwDXQxsX6L%2Fc2EL%2BnEMcZop34JvN2SKKguDER1Zla9LefXie%2FYx6kknAL%2BZvMWWYL0%2FjjGkyAsqe3shFCobUwBp8vjNzmpgCMoevGDUcNJltn2KXLDZEFLLgFjpWogNTiftqXAihJBvgRSyUsBUfJfep9xG%2Bub9%2B7rdEr02gHcp%2BJNDSXdoCeoONle%2BD3TsDs3amAXT%2BJzPa%2BrsZngMIPFQtPYXyYDizCioY82%2B452xZdUHS8KkKAKn%2FynU94Is107a4qcW%2FNabpTgFwJ1eV%2BzD%2BgxgJLaz4Cx%2BB26z28hBOfyFcGSerlAUyHkEEArmMQ2PJAi51RM7bUrOGa5CRg4mimCwMZ0bZohFH7BA1CvViTWqUjJSDnCUNeXXJcnj%2BfgL3eyoa4kjsAQuJe6hVjUE9ZWzo7VxzxdHjhj8U1m7YCs1z9CsrXcYpPmRYu1BUmUTUKxMlOaTDHi1jAmDLPLbgxsRtqmj%2Fl02TCl6tFlaLtj1TRaDsu%2FqO1UkEsoypKsZoirT%2FYpkGn7rJ9yazOZwUtseF5kPAfnybVI20Ge9IpgpYac1I0IQlFYrancByYoHiMklZya6oqA%2B%2BkfzP2cANsF7YT0IekSkNeHDcwEK1BwtPjiHpR9UOD1R5MowitHwxAY6pgHAuajL6AfzyoXnnM4rBNUyBS5yhj%2BGRyzoAy08g94rk8tFWAs3sW%2FggNBLwoblyzvynyCgIoADB6%2F6gQA1KTKXwjMMVVRoLKAD%2FNqBSbuXNoC31jUwcZXPDINXNxFjbUVP%2FiPnKbOVhHQHn%2FADPl%2FOggn2oKr2GoL4LJKIfG4N1Tm4dSIZG4Whe%2BXf5DVPctLrBbiwg5AjDL5InMZTcyNzEvmuZzEy&X-Amz-Signature=1880850b35ec05fe9260c23975911b94814f21db8a2f828b4f351913e6822763&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XG2Z5OE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHg00MZtMwXiFeESnbQ0ariQktCHVmCb91MFz0TXQi9FAiB8Du2rjxDjYMuISwcE0QX32FvsbcPcCQK%2FmN8682YG0ir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMN3zMm%2FjZP0Ps7i%2FkKtwDXQxsX6L%2Fc2EL%2BnEMcZop34JvN2SKKguDER1Zla9LefXie%2FYx6kknAL%2BZvMWWYL0%2FjjGkyAsqe3shFCobUwBp8vjNzmpgCMoevGDUcNJltn2KXLDZEFLLgFjpWogNTiftqXAihJBvgRSyUsBUfJfep9xG%2Bub9%2B7rdEr02gHcp%2BJNDSXdoCeoONle%2BD3TsDs3amAXT%2BJzPa%2BrsZngMIPFQtPYXyYDizCioY82%2B452xZdUHS8KkKAKn%2FynU94Is107a4qcW%2FNabpTgFwJ1eV%2BzD%2BgxgJLaz4Cx%2BB26z28hBOfyFcGSerlAUyHkEEArmMQ2PJAi51RM7bUrOGa5CRg4mimCwMZ0bZohFH7BA1CvViTWqUjJSDnCUNeXXJcnj%2BfgL3eyoa4kjsAQuJe6hVjUE9ZWzo7VxzxdHjhj8U1m7YCs1z9CsrXcYpPmRYu1BUmUTUKxMlOaTDHi1jAmDLPLbgxsRtqmj%2Fl02TCl6tFlaLtj1TRaDsu%2FqO1UkEsoypKsZoirT%2FYpkGn7rJ9yazOZwUtseF5kPAfnybVI20Ge9IpgpYac1I0IQlFYrancByYoHiMklZya6oqA%2B%2BkfzP2cANsF7YT0IekSkNeHDcwEK1BwtPjiHpR9UOD1R5MowitHwxAY6pgHAuajL6AfzyoXnnM4rBNUyBS5yhj%2BGRyzoAy08g94rk8tFWAs3sW%2FggNBLwoblyzvynyCgIoADB6%2F6gQA1KTKXwjMMVVRoLKAD%2FNqBSbuXNoC31jUwcZXPDINXNxFjbUVP%2FiPnKbOVhHQHn%2FADPl%2FOggn2oKr2GoL4LJKIfG4N1Tm4dSIZG4Whe%2BXf5DVPctLrBbiwg5AjDL5InMZTcyNzEvmuZzEy&X-Amz-Signature=2967dd0b0f544c34f313d8f64bb22257c3c5b9cbbc67ce536405d764aa64f70b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XG2Z5OE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHg00MZtMwXiFeESnbQ0ariQktCHVmCb91MFz0TXQi9FAiB8Du2rjxDjYMuISwcE0QX32FvsbcPcCQK%2FmN8682YG0ir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMN3zMm%2FjZP0Ps7i%2FkKtwDXQxsX6L%2Fc2EL%2BnEMcZop34JvN2SKKguDER1Zla9LefXie%2FYx6kknAL%2BZvMWWYL0%2FjjGkyAsqe3shFCobUwBp8vjNzmpgCMoevGDUcNJltn2KXLDZEFLLgFjpWogNTiftqXAihJBvgRSyUsBUfJfep9xG%2Bub9%2B7rdEr02gHcp%2BJNDSXdoCeoONle%2BD3TsDs3amAXT%2BJzPa%2BrsZngMIPFQtPYXyYDizCioY82%2B452xZdUHS8KkKAKn%2FynU94Is107a4qcW%2FNabpTgFwJ1eV%2BzD%2BgxgJLaz4Cx%2BB26z28hBOfyFcGSerlAUyHkEEArmMQ2PJAi51RM7bUrOGa5CRg4mimCwMZ0bZohFH7BA1CvViTWqUjJSDnCUNeXXJcnj%2BfgL3eyoa4kjsAQuJe6hVjUE9ZWzo7VxzxdHjhj8U1m7YCs1z9CsrXcYpPmRYu1BUmUTUKxMlOaTDHi1jAmDLPLbgxsRtqmj%2Fl02TCl6tFlaLtj1TRaDsu%2FqO1UkEsoypKsZoirT%2FYpkGn7rJ9yazOZwUtseF5kPAfnybVI20Ge9IpgpYac1I0IQlFYrancByYoHiMklZya6oqA%2B%2BkfzP2cANsF7YT0IekSkNeHDcwEK1BwtPjiHpR9UOD1R5MowitHwxAY6pgHAuajL6AfzyoXnnM4rBNUyBS5yhj%2BGRyzoAy08g94rk8tFWAs3sW%2FggNBLwoblyzvynyCgIoADB6%2F6gQA1KTKXwjMMVVRoLKAD%2FNqBSbuXNoC31jUwcZXPDINXNxFjbUVP%2FiPnKbOVhHQHn%2FADPl%2FOggn2oKr2GoL4LJKIfG4N1Tm4dSIZG4Whe%2BXf5DVPctLrBbiwg5AjDL5InMZTcyNzEvmuZzEy&X-Amz-Signature=45be2c1e2312a06d6f95b90eb68b79b08e6b4e0d351afe1a45a33acda69cf031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XG2Z5OE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHg00MZtMwXiFeESnbQ0ariQktCHVmCb91MFz0TXQi9FAiB8Du2rjxDjYMuISwcE0QX32FvsbcPcCQK%2FmN8682YG0ir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMN3zMm%2FjZP0Ps7i%2FkKtwDXQxsX6L%2Fc2EL%2BnEMcZop34JvN2SKKguDER1Zla9LefXie%2FYx6kknAL%2BZvMWWYL0%2FjjGkyAsqe3shFCobUwBp8vjNzmpgCMoevGDUcNJltn2KXLDZEFLLgFjpWogNTiftqXAihJBvgRSyUsBUfJfep9xG%2Bub9%2B7rdEr02gHcp%2BJNDSXdoCeoONle%2BD3TsDs3amAXT%2BJzPa%2BrsZngMIPFQtPYXyYDizCioY82%2B452xZdUHS8KkKAKn%2FynU94Is107a4qcW%2FNabpTgFwJ1eV%2BzD%2BgxgJLaz4Cx%2BB26z28hBOfyFcGSerlAUyHkEEArmMQ2PJAi51RM7bUrOGa5CRg4mimCwMZ0bZohFH7BA1CvViTWqUjJSDnCUNeXXJcnj%2BfgL3eyoa4kjsAQuJe6hVjUE9ZWzo7VxzxdHjhj8U1m7YCs1z9CsrXcYpPmRYu1BUmUTUKxMlOaTDHi1jAmDLPLbgxsRtqmj%2Fl02TCl6tFlaLtj1TRaDsu%2FqO1UkEsoypKsZoirT%2FYpkGn7rJ9yazOZwUtseF5kPAfnybVI20Ge9IpgpYac1I0IQlFYrancByYoHiMklZya6oqA%2B%2BkfzP2cANsF7YT0IekSkNeHDcwEK1BwtPjiHpR9UOD1R5MowitHwxAY6pgHAuajL6AfzyoXnnM4rBNUyBS5yhj%2BGRyzoAy08g94rk8tFWAs3sW%2FggNBLwoblyzvynyCgIoADB6%2F6gQA1KTKXwjMMVVRoLKAD%2FNqBSbuXNoC31jUwcZXPDINXNxFjbUVP%2FiPnKbOVhHQHn%2FADPl%2FOggn2oKr2GoL4LJKIfG4N1Tm4dSIZG4Whe%2BXf5DVPctLrBbiwg5AjDL5InMZTcyNzEvmuZzEy&X-Amz-Signature=6a8a2b485d60dc1d1a967358e3a2880969a09d576607c05ec36db21fec46fe9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
