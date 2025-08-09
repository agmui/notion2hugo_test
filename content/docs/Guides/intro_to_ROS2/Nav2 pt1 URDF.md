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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A3VL5OS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuBXzIHFQOdszxp2o2h0FDVH7CFtb9EinyjQcZN5Jh6AiEAzrc1QFUE%2FTSrjlXTu%2BZRCNyA3ipgfV%2Fyoi5O9xC33%2FAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJITy1yYnHITfFOujyrcAwZqLzlvKE5dCvHsT3JwoH556Fxpg9VqTkqj01kqImfJwIeHOgGjaaN%2BBxTAxPwNuhEdJ9DgRk9s0aKgUzJIykp0KZaiso8WrkIBru3gYuaWhZm63aFO2PXgupsEa1SidkwCvtrofcnsIoSa%2BBuWJtGmHkez9vRx7hyF%2BhwWXPol8OVt04CD2noIUZ2An4%2Fh7E3kv2Jpiju8Ujw1K4qxYkprVu5Yd6rmSRsUYpUFue55EMJDC%2B%2FP3sUjZlCFxvvoLPL6URHwQPKWlSv7iU2o6A1qdqrq3DCjt1a64QKaAMKzqj8aGcxAZwREN%2F9C0VFN7yEJeyuduHws%2BmdOL3IfOMbSqxUNV4SJLwZMcSc6lHPQzwFhs%2F3AEhdO8MQx%2FvVEiYOwBjBh%2FZk9WOcG2Ucbhgag%2BxTLZrxavnNBwOz%2BqeFo0jK0fSUjx%2B6Uo%2BYaqUkTKJG3%2BDRUbtX2B8DT7svhY8prlzeCIt3a9fr%2FrdTWJ4PvcY84Nd6O%2BtX0EFL91qxO%2BWE6j0jH1Ozzgu1plvbS5%2BkBHKlVFPXPd8%2FEsQVybXuU85NFJW7nI9tehxNDAmolXdLNfKjZUnVJX9i%2Ff6Vpdq02R0Dw5baq4k4FcKZB8Hg0wDX4aWQyNc3hUbdeMNPp3MQGOqUB7C79PEmIxtjXLZXPF3v4zcybAEd0GJx0C%2FDibdOjvtRK6S0qz1nu6EeZJzSKNd%2FyoNZy0vQxEcQH5bOZm1ZVQiWR1RY7tv4PKLBiF%2BBb6%2BZbGxrw3l5rS4gQlFA%2Bswc7%2FBfd0hDevBjKesal3eWqmhuNPV%2FA32ByIMfyQpjrmxud13xghzGBSBcB7e6O2oizLPJrVgVoNcKVGyfS2lHieBSgWt3p&X-Amz-Signature=2ba879a2f280cb9cb9e1c65c93cbdb37b1a1a85077977d8d1b6d3396ea991e6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A3VL5OS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuBXzIHFQOdszxp2o2h0FDVH7CFtb9EinyjQcZN5Jh6AiEAzrc1QFUE%2FTSrjlXTu%2BZRCNyA3ipgfV%2Fyoi5O9xC33%2FAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJITy1yYnHITfFOujyrcAwZqLzlvKE5dCvHsT3JwoH556Fxpg9VqTkqj01kqImfJwIeHOgGjaaN%2BBxTAxPwNuhEdJ9DgRk9s0aKgUzJIykp0KZaiso8WrkIBru3gYuaWhZm63aFO2PXgupsEa1SidkwCvtrofcnsIoSa%2BBuWJtGmHkez9vRx7hyF%2BhwWXPol8OVt04CD2noIUZ2An4%2Fh7E3kv2Jpiju8Ujw1K4qxYkprVu5Yd6rmSRsUYpUFue55EMJDC%2B%2FP3sUjZlCFxvvoLPL6URHwQPKWlSv7iU2o6A1qdqrq3DCjt1a64QKaAMKzqj8aGcxAZwREN%2F9C0VFN7yEJeyuduHws%2BmdOL3IfOMbSqxUNV4SJLwZMcSc6lHPQzwFhs%2F3AEhdO8MQx%2FvVEiYOwBjBh%2FZk9WOcG2Ucbhgag%2BxTLZrxavnNBwOz%2BqeFo0jK0fSUjx%2B6Uo%2BYaqUkTKJG3%2BDRUbtX2B8DT7svhY8prlzeCIt3a9fr%2FrdTWJ4PvcY84Nd6O%2BtX0EFL91qxO%2BWE6j0jH1Ozzgu1plvbS5%2BkBHKlVFPXPd8%2FEsQVybXuU85NFJW7nI9tehxNDAmolXdLNfKjZUnVJX9i%2Ff6Vpdq02R0Dw5baq4k4FcKZB8Hg0wDX4aWQyNc3hUbdeMNPp3MQGOqUB7C79PEmIxtjXLZXPF3v4zcybAEd0GJx0C%2FDibdOjvtRK6S0qz1nu6EeZJzSKNd%2FyoNZy0vQxEcQH5bOZm1ZVQiWR1RY7tv4PKLBiF%2BBb6%2BZbGxrw3l5rS4gQlFA%2Bswc7%2FBfd0hDevBjKesal3eWqmhuNPV%2FA32ByIMfyQpjrmxud13xghzGBSBcB7e6O2oizLPJrVgVoNcKVGyfS2lHieBSgWt3p&X-Amz-Signature=4e598f8fd7c27f01d68bdef58a88b4f7f56c240da4ccc4932646524a281eb77a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A3VL5OS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuBXzIHFQOdszxp2o2h0FDVH7CFtb9EinyjQcZN5Jh6AiEAzrc1QFUE%2FTSrjlXTu%2BZRCNyA3ipgfV%2Fyoi5O9xC33%2FAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJITy1yYnHITfFOujyrcAwZqLzlvKE5dCvHsT3JwoH556Fxpg9VqTkqj01kqImfJwIeHOgGjaaN%2BBxTAxPwNuhEdJ9DgRk9s0aKgUzJIykp0KZaiso8WrkIBru3gYuaWhZm63aFO2PXgupsEa1SidkwCvtrofcnsIoSa%2BBuWJtGmHkez9vRx7hyF%2BhwWXPol8OVt04CD2noIUZ2An4%2Fh7E3kv2Jpiju8Ujw1K4qxYkprVu5Yd6rmSRsUYpUFue55EMJDC%2B%2FP3sUjZlCFxvvoLPL6URHwQPKWlSv7iU2o6A1qdqrq3DCjt1a64QKaAMKzqj8aGcxAZwREN%2F9C0VFN7yEJeyuduHws%2BmdOL3IfOMbSqxUNV4SJLwZMcSc6lHPQzwFhs%2F3AEhdO8MQx%2FvVEiYOwBjBh%2FZk9WOcG2Ucbhgag%2BxTLZrxavnNBwOz%2BqeFo0jK0fSUjx%2B6Uo%2BYaqUkTKJG3%2BDRUbtX2B8DT7svhY8prlzeCIt3a9fr%2FrdTWJ4PvcY84Nd6O%2BtX0EFL91qxO%2BWE6j0jH1Ozzgu1plvbS5%2BkBHKlVFPXPd8%2FEsQVybXuU85NFJW7nI9tehxNDAmolXdLNfKjZUnVJX9i%2Ff6Vpdq02R0Dw5baq4k4FcKZB8Hg0wDX4aWQyNc3hUbdeMNPp3MQGOqUB7C79PEmIxtjXLZXPF3v4zcybAEd0GJx0C%2FDibdOjvtRK6S0qz1nu6EeZJzSKNd%2FyoNZy0vQxEcQH5bOZm1ZVQiWR1RY7tv4PKLBiF%2BBb6%2BZbGxrw3l5rS4gQlFA%2Bswc7%2FBfd0hDevBjKesal3eWqmhuNPV%2FA32ByIMfyQpjrmxud13xghzGBSBcB7e6O2oizLPJrVgVoNcKVGyfS2lHieBSgWt3p&X-Amz-Signature=e922873ff947804100daca11a06711dc2d60a71a6ed843d398396386c2af45d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A3VL5OS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuBXzIHFQOdszxp2o2h0FDVH7CFtb9EinyjQcZN5Jh6AiEAzrc1QFUE%2FTSrjlXTu%2BZRCNyA3ipgfV%2Fyoi5O9xC33%2FAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJITy1yYnHITfFOujyrcAwZqLzlvKE5dCvHsT3JwoH556Fxpg9VqTkqj01kqImfJwIeHOgGjaaN%2BBxTAxPwNuhEdJ9DgRk9s0aKgUzJIykp0KZaiso8WrkIBru3gYuaWhZm63aFO2PXgupsEa1SidkwCvtrofcnsIoSa%2BBuWJtGmHkez9vRx7hyF%2BhwWXPol8OVt04CD2noIUZ2An4%2Fh7E3kv2Jpiju8Ujw1K4qxYkprVu5Yd6rmSRsUYpUFue55EMJDC%2B%2FP3sUjZlCFxvvoLPL6URHwQPKWlSv7iU2o6A1qdqrq3DCjt1a64QKaAMKzqj8aGcxAZwREN%2F9C0VFN7yEJeyuduHws%2BmdOL3IfOMbSqxUNV4SJLwZMcSc6lHPQzwFhs%2F3AEhdO8MQx%2FvVEiYOwBjBh%2FZk9WOcG2Ucbhgag%2BxTLZrxavnNBwOz%2BqeFo0jK0fSUjx%2B6Uo%2BYaqUkTKJG3%2BDRUbtX2B8DT7svhY8prlzeCIt3a9fr%2FrdTWJ4PvcY84Nd6O%2BtX0EFL91qxO%2BWE6j0jH1Ozzgu1plvbS5%2BkBHKlVFPXPd8%2FEsQVybXuU85NFJW7nI9tehxNDAmolXdLNfKjZUnVJX9i%2Ff6Vpdq02R0Dw5baq4k4FcKZB8Hg0wDX4aWQyNc3hUbdeMNPp3MQGOqUB7C79PEmIxtjXLZXPF3v4zcybAEd0GJx0C%2FDibdOjvtRK6S0qz1nu6EeZJzSKNd%2FyoNZy0vQxEcQH5bOZm1ZVQiWR1RY7tv4PKLBiF%2BBb6%2BZbGxrw3l5rS4gQlFA%2Bswc7%2FBfd0hDevBjKesal3eWqmhuNPV%2FA32ByIMfyQpjrmxud13xghzGBSBcB7e6O2oizLPJrVgVoNcKVGyfS2lHieBSgWt3p&X-Amz-Signature=6e3266d6fb5cb53715a7669fb9a4b72a1b3adad2a53a4a89e90ff2d27da0d3e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A3VL5OS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuBXzIHFQOdszxp2o2h0FDVH7CFtb9EinyjQcZN5Jh6AiEAzrc1QFUE%2FTSrjlXTu%2BZRCNyA3ipgfV%2Fyoi5O9xC33%2FAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJITy1yYnHITfFOujyrcAwZqLzlvKE5dCvHsT3JwoH556Fxpg9VqTkqj01kqImfJwIeHOgGjaaN%2BBxTAxPwNuhEdJ9DgRk9s0aKgUzJIykp0KZaiso8WrkIBru3gYuaWhZm63aFO2PXgupsEa1SidkwCvtrofcnsIoSa%2BBuWJtGmHkez9vRx7hyF%2BhwWXPol8OVt04CD2noIUZ2An4%2Fh7E3kv2Jpiju8Ujw1K4qxYkprVu5Yd6rmSRsUYpUFue55EMJDC%2B%2FP3sUjZlCFxvvoLPL6URHwQPKWlSv7iU2o6A1qdqrq3DCjt1a64QKaAMKzqj8aGcxAZwREN%2F9C0VFN7yEJeyuduHws%2BmdOL3IfOMbSqxUNV4SJLwZMcSc6lHPQzwFhs%2F3AEhdO8MQx%2FvVEiYOwBjBh%2FZk9WOcG2Ucbhgag%2BxTLZrxavnNBwOz%2BqeFo0jK0fSUjx%2B6Uo%2BYaqUkTKJG3%2BDRUbtX2B8DT7svhY8prlzeCIt3a9fr%2FrdTWJ4PvcY84Nd6O%2BtX0EFL91qxO%2BWE6j0jH1Ozzgu1plvbS5%2BkBHKlVFPXPd8%2FEsQVybXuU85NFJW7nI9tehxNDAmolXdLNfKjZUnVJX9i%2Ff6Vpdq02R0Dw5baq4k4FcKZB8Hg0wDX4aWQyNc3hUbdeMNPp3MQGOqUB7C79PEmIxtjXLZXPF3v4zcybAEd0GJx0C%2FDibdOjvtRK6S0qz1nu6EeZJzSKNd%2FyoNZy0vQxEcQH5bOZm1ZVQiWR1RY7tv4PKLBiF%2BBb6%2BZbGxrw3l5rS4gQlFA%2Bswc7%2FBfd0hDevBjKesal3eWqmhuNPV%2FA32ByIMfyQpjrmxud13xghzGBSBcB7e6O2oizLPJrVgVoNcKVGyfS2lHieBSgWt3p&X-Amz-Signature=f1530a0df0d00351073f95c233329acc5427bda559725b272511b287496d2ab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A3VL5OS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuBXzIHFQOdszxp2o2h0FDVH7CFtb9EinyjQcZN5Jh6AiEAzrc1QFUE%2FTSrjlXTu%2BZRCNyA3ipgfV%2Fyoi5O9xC33%2FAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJITy1yYnHITfFOujyrcAwZqLzlvKE5dCvHsT3JwoH556Fxpg9VqTkqj01kqImfJwIeHOgGjaaN%2BBxTAxPwNuhEdJ9DgRk9s0aKgUzJIykp0KZaiso8WrkIBru3gYuaWhZm63aFO2PXgupsEa1SidkwCvtrofcnsIoSa%2BBuWJtGmHkez9vRx7hyF%2BhwWXPol8OVt04CD2noIUZ2An4%2Fh7E3kv2Jpiju8Ujw1K4qxYkprVu5Yd6rmSRsUYpUFue55EMJDC%2B%2FP3sUjZlCFxvvoLPL6URHwQPKWlSv7iU2o6A1qdqrq3DCjt1a64QKaAMKzqj8aGcxAZwREN%2F9C0VFN7yEJeyuduHws%2BmdOL3IfOMbSqxUNV4SJLwZMcSc6lHPQzwFhs%2F3AEhdO8MQx%2FvVEiYOwBjBh%2FZk9WOcG2Ucbhgag%2BxTLZrxavnNBwOz%2BqeFo0jK0fSUjx%2B6Uo%2BYaqUkTKJG3%2BDRUbtX2B8DT7svhY8prlzeCIt3a9fr%2FrdTWJ4PvcY84Nd6O%2BtX0EFL91qxO%2BWE6j0jH1Ozzgu1plvbS5%2BkBHKlVFPXPd8%2FEsQVybXuU85NFJW7nI9tehxNDAmolXdLNfKjZUnVJX9i%2Ff6Vpdq02R0Dw5baq4k4FcKZB8Hg0wDX4aWQyNc3hUbdeMNPp3MQGOqUB7C79PEmIxtjXLZXPF3v4zcybAEd0GJx0C%2FDibdOjvtRK6S0qz1nu6EeZJzSKNd%2FyoNZy0vQxEcQH5bOZm1ZVQiWR1RY7tv4PKLBiF%2BBb6%2BZbGxrw3l5rS4gQlFA%2Bswc7%2FBfd0hDevBjKesal3eWqmhuNPV%2FA32ByIMfyQpjrmxud13xghzGBSBcB7e6O2oizLPJrVgVoNcKVGyfS2lHieBSgWt3p&X-Amz-Signature=36df9fc14836b3716ea3efe89c259a29663593df5c0e6a100980c36c46fe861e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A3VL5OS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuBXzIHFQOdszxp2o2h0FDVH7CFtb9EinyjQcZN5Jh6AiEAzrc1QFUE%2FTSrjlXTu%2BZRCNyA3ipgfV%2Fyoi5O9xC33%2FAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJITy1yYnHITfFOujyrcAwZqLzlvKE5dCvHsT3JwoH556Fxpg9VqTkqj01kqImfJwIeHOgGjaaN%2BBxTAxPwNuhEdJ9DgRk9s0aKgUzJIykp0KZaiso8WrkIBru3gYuaWhZm63aFO2PXgupsEa1SidkwCvtrofcnsIoSa%2BBuWJtGmHkez9vRx7hyF%2BhwWXPol8OVt04CD2noIUZ2An4%2Fh7E3kv2Jpiju8Ujw1K4qxYkprVu5Yd6rmSRsUYpUFue55EMJDC%2B%2FP3sUjZlCFxvvoLPL6URHwQPKWlSv7iU2o6A1qdqrq3DCjt1a64QKaAMKzqj8aGcxAZwREN%2F9C0VFN7yEJeyuduHws%2BmdOL3IfOMbSqxUNV4SJLwZMcSc6lHPQzwFhs%2F3AEhdO8MQx%2FvVEiYOwBjBh%2FZk9WOcG2Ucbhgag%2BxTLZrxavnNBwOz%2BqeFo0jK0fSUjx%2B6Uo%2BYaqUkTKJG3%2BDRUbtX2B8DT7svhY8prlzeCIt3a9fr%2FrdTWJ4PvcY84Nd6O%2BtX0EFL91qxO%2BWE6j0jH1Ozzgu1plvbS5%2BkBHKlVFPXPd8%2FEsQVybXuU85NFJW7nI9tehxNDAmolXdLNfKjZUnVJX9i%2Ff6Vpdq02R0Dw5baq4k4FcKZB8Hg0wDX4aWQyNc3hUbdeMNPp3MQGOqUB7C79PEmIxtjXLZXPF3v4zcybAEd0GJx0C%2FDibdOjvtRK6S0qz1nu6EeZJzSKNd%2FyoNZy0vQxEcQH5bOZm1ZVQiWR1RY7tv4PKLBiF%2BBb6%2BZbGxrw3l5rS4gQlFA%2Bswc7%2FBfd0hDevBjKesal3eWqmhuNPV%2FA32ByIMfyQpjrmxud13xghzGBSBcB7e6O2oizLPJrVgVoNcKVGyfS2lHieBSgWt3p&X-Amz-Signature=a95211518f5b47c3cab640f95a3885e5245da7fe8d10025d8f397e460320dae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A3VL5OS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuBXzIHFQOdszxp2o2h0FDVH7CFtb9EinyjQcZN5Jh6AiEAzrc1QFUE%2FTSrjlXTu%2BZRCNyA3ipgfV%2Fyoi5O9xC33%2FAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJITy1yYnHITfFOujyrcAwZqLzlvKE5dCvHsT3JwoH556Fxpg9VqTkqj01kqImfJwIeHOgGjaaN%2BBxTAxPwNuhEdJ9DgRk9s0aKgUzJIykp0KZaiso8WrkIBru3gYuaWhZm63aFO2PXgupsEa1SidkwCvtrofcnsIoSa%2BBuWJtGmHkez9vRx7hyF%2BhwWXPol8OVt04CD2noIUZ2An4%2Fh7E3kv2Jpiju8Ujw1K4qxYkprVu5Yd6rmSRsUYpUFue55EMJDC%2B%2FP3sUjZlCFxvvoLPL6URHwQPKWlSv7iU2o6A1qdqrq3DCjt1a64QKaAMKzqj8aGcxAZwREN%2F9C0VFN7yEJeyuduHws%2BmdOL3IfOMbSqxUNV4SJLwZMcSc6lHPQzwFhs%2F3AEhdO8MQx%2FvVEiYOwBjBh%2FZk9WOcG2Ucbhgag%2BxTLZrxavnNBwOz%2BqeFo0jK0fSUjx%2B6Uo%2BYaqUkTKJG3%2BDRUbtX2B8DT7svhY8prlzeCIt3a9fr%2FrdTWJ4PvcY84Nd6O%2BtX0EFL91qxO%2BWE6j0jH1Ozzgu1plvbS5%2BkBHKlVFPXPd8%2FEsQVybXuU85NFJW7nI9tehxNDAmolXdLNfKjZUnVJX9i%2Ff6Vpdq02R0Dw5baq4k4FcKZB8Hg0wDX4aWQyNc3hUbdeMNPp3MQGOqUB7C79PEmIxtjXLZXPF3v4zcybAEd0GJx0C%2FDibdOjvtRK6S0qz1nu6EeZJzSKNd%2FyoNZy0vQxEcQH5bOZm1ZVQiWR1RY7tv4PKLBiF%2BBb6%2BZbGxrw3l5rS4gQlFA%2Bswc7%2FBfd0hDevBjKesal3eWqmhuNPV%2FA32ByIMfyQpjrmxud13xghzGBSBcB7e6O2oizLPJrVgVoNcKVGyfS2lHieBSgWt3p&X-Amz-Signature=30e4d6e0b4fcb29a96495aaca4bc158611effc185313fa3edb2cff33e225b860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A3VL5OS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuBXzIHFQOdszxp2o2h0FDVH7CFtb9EinyjQcZN5Jh6AiEAzrc1QFUE%2FTSrjlXTu%2BZRCNyA3ipgfV%2Fyoi5O9xC33%2FAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJITy1yYnHITfFOujyrcAwZqLzlvKE5dCvHsT3JwoH556Fxpg9VqTkqj01kqImfJwIeHOgGjaaN%2BBxTAxPwNuhEdJ9DgRk9s0aKgUzJIykp0KZaiso8WrkIBru3gYuaWhZm63aFO2PXgupsEa1SidkwCvtrofcnsIoSa%2BBuWJtGmHkez9vRx7hyF%2BhwWXPol8OVt04CD2noIUZ2An4%2Fh7E3kv2Jpiju8Ujw1K4qxYkprVu5Yd6rmSRsUYpUFue55EMJDC%2B%2FP3sUjZlCFxvvoLPL6URHwQPKWlSv7iU2o6A1qdqrq3DCjt1a64QKaAMKzqj8aGcxAZwREN%2F9C0VFN7yEJeyuduHws%2BmdOL3IfOMbSqxUNV4SJLwZMcSc6lHPQzwFhs%2F3AEhdO8MQx%2FvVEiYOwBjBh%2FZk9WOcG2Ucbhgag%2BxTLZrxavnNBwOz%2BqeFo0jK0fSUjx%2B6Uo%2BYaqUkTKJG3%2BDRUbtX2B8DT7svhY8prlzeCIt3a9fr%2FrdTWJ4PvcY84Nd6O%2BtX0EFL91qxO%2BWE6j0jH1Ozzgu1plvbS5%2BkBHKlVFPXPd8%2FEsQVybXuU85NFJW7nI9tehxNDAmolXdLNfKjZUnVJX9i%2Ff6Vpdq02R0Dw5baq4k4FcKZB8Hg0wDX4aWQyNc3hUbdeMNPp3MQGOqUB7C79PEmIxtjXLZXPF3v4zcybAEd0GJx0C%2FDibdOjvtRK6S0qz1nu6EeZJzSKNd%2FyoNZy0vQxEcQH5bOZm1ZVQiWR1RY7tv4PKLBiF%2BBb6%2BZbGxrw3l5rS4gQlFA%2Bswc7%2FBfd0hDevBjKesal3eWqmhuNPV%2FA32ByIMfyQpjrmxud13xghzGBSBcB7e6O2oizLPJrVgVoNcKVGyfS2lHieBSgWt3p&X-Amz-Signature=1aff55e21f0ae403ae090a08ccdbe59382fece15b7a6caee2af0229cb2a45a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A3VL5OS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuBXzIHFQOdszxp2o2h0FDVH7CFtb9EinyjQcZN5Jh6AiEAzrc1QFUE%2FTSrjlXTu%2BZRCNyA3ipgfV%2Fyoi5O9xC33%2FAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJITy1yYnHITfFOujyrcAwZqLzlvKE5dCvHsT3JwoH556Fxpg9VqTkqj01kqImfJwIeHOgGjaaN%2BBxTAxPwNuhEdJ9DgRk9s0aKgUzJIykp0KZaiso8WrkIBru3gYuaWhZm63aFO2PXgupsEa1SidkwCvtrofcnsIoSa%2BBuWJtGmHkez9vRx7hyF%2BhwWXPol8OVt04CD2noIUZ2An4%2Fh7E3kv2Jpiju8Ujw1K4qxYkprVu5Yd6rmSRsUYpUFue55EMJDC%2B%2FP3sUjZlCFxvvoLPL6URHwQPKWlSv7iU2o6A1qdqrq3DCjt1a64QKaAMKzqj8aGcxAZwREN%2F9C0VFN7yEJeyuduHws%2BmdOL3IfOMbSqxUNV4SJLwZMcSc6lHPQzwFhs%2F3AEhdO8MQx%2FvVEiYOwBjBh%2FZk9WOcG2Ucbhgag%2BxTLZrxavnNBwOz%2BqeFo0jK0fSUjx%2B6Uo%2BYaqUkTKJG3%2BDRUbtX2B8DT7svhY8prlzeCIt3a9fr%2FrdTWJ4PvcY84Nd6O%2BtX0EFL91qxO%2BWE6j0jH1Ozzgu1plvbS5%2BkBHKlVFPXPd8%2FEsQVybXuU85NFJW7nI9tehxNDAmolXdLNfKjZUnVJX9i%2Ff6Vpdq02R0Dw5baq4k4FcKZB8Hg0wDX4aWQyNc3hUbdeMNPp3MQGOqUB7C79PEmIxtjXLZXPF3v4zcybAEd0GJx0C%2FDibdOjvtRK6S0qz1nu6EeZJzSKNd%2FyoNZy0vQxEcQH5bOZm1ZVQiWR1RY7tv4PKLBiF%2BBb6%2BZbGxrw3l5rS4gQlFA%2Bswc7%2FBfd0hDevBjKesal3eWqmhuNPV%2FA32ByIMfyQpjrmxud13xghzGBSBcB7e6O2oizLPJrVgVoNcKVGyfS2lHieBSgWt3p&X-Amz-Signature=8cc7be4d27ead30dd11b061461032e43ceaa63e08efd613ed9a5708ba4867495&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSC53EX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGk6X59wgRKvb5yw%2BZYIG%2Bv4jjjxgOyRyT2c14mcT7wpAiEA54ygMpxJvMDZ0agmt9fb3j1qnwNmoBJaW%2FBCEfn34MwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLun%2BDlIum6BnTqRSrcA6JJKiVrgzwtk%2BWHrUzogb50Qdwc0Yw0WHmqKDMAhNDAyG07%2Fkcyh%2BEe6DZNIgBHPKd81LOoqp9eyIp9w8k8zGUsbUhxTYpUF4GetiGgMXkrKSkP%2FuO3gvUOTZCnEs6TekoNiOUCXoG%2BK8vwTBDBGueojI7hPIcVsab4ECtiv0C%2FLYddP2cdlNGIwRvWZ%2FPMBRCRdSAlPeecXZJlX2gsyL7%2BvmuyC86qScu%2F5MFSdoCqZtFXf%2FoVc5AhrYKXGnN2yXdIpIVs9e6SP4TiY7MQzrCPXjhtZ4nSfxIV9uZuAxEUv%2B%2FRG4hfTXqPtfTpk%2BdMRfVNRLgxr%2FZTiuAFqJM5kBdemtiwj%2FRoTcUjebuWTcnUgeOre5SLJjIg9bMo9djvCGsSPj7cyChnnZt2UdmEmwJz3ne82%2F4IQAqrmQpBUmEbktaOfA8t1Zi%2Br1XcJXpI9clI06n64tdJQaw5MnkF4IwSMntrTw3guFFYiYHTgzMO0OWVN2NqcGgMDmeC7kKntU%2BMaJFA8bUVOWF4RBFa6sQG5cE31FbXOGhGWZd8WpzvmbSRenq7QlgWH%2BIVbGi6RlgLDFX75%2Fl3ovCVyfOQzW5a0MMRoHyaKC8wA%2F08cFR6dbhXIRGFfg0A81ZnMKvq3MQGOqUBqtYPTbF5lumcDVsVKZoV9%2BukGdTx1xioP5nQQ0scWcDAqykepBOiNaQYe6fagF07E%2FywDALuPrOE0J3%2B6zHHMi9PTkp%2BgkAJFMzT9DdM0lqIHYYRIR5XVeiyYYBgPRAGjPDpsyogTy%2BDkaaOcbQlhM8OzB%2F7H4X1jZLVW%2F3fMTCyDENfisgSEoPc6l2fvyRs6PtW26OZE40k2vPVQf3kZnK2H3Rv&X-Amz-Signature=0f73b39bfd524329572d436f75c1c07b03798334bc576aed7d6d255f71c63dfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663A7RKF4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDguSRTEE78433%2FKlALo3O26ILiTiIIeNTcB4%2BprTUqBQIgZ6HLoSbKMdE9tdvGQ%2BYxcMDr0%2BB%2FcGUm1b2J3aGbL3sqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZIe7CjQGtFBowadSrcA9%2BLsYy7azEYbPzUJ5Ylz8Qq3KbrSgxZAuadHgrnoTVEkbF6cJ71poCQpG6qoiF6DFGb4p49d%2FTA%2F%2BB1m2fnbB01JwMukzb%2Fj44g%2FIQsPEqdEUQClxuA4XtpzLLkz%2FYDqm7zb8C9sWxXPPve398r86kowowBRLvBWjGfVJ2F0HqWUZiurjey73RNdwBwEMKVe%2FNOKsntSFMxyPBSqLb6vEPPTJC8p3h683q7FRo0BrxImAm%2B7c6zbthkJJFZZGwXqg3ooQvJAevYn5Jp8XI9oxvpzzPGJPpOiGq5c%2BI23KLEB8IpecwSSAlZicmG%2FzBIRUDXh8kH68u0zpIdU7YWfM7oN8h%2FxHXf%2FXdZf8Rq%2FOWE8z74XEbK17QAU%2FS%2BJyHwkY9NkrSzpDSO9L74q6WsX8IN9ACo05vDixNONOZH8ZmEnTUjrg9iINNL%2BDDpHCqwHa3IdCWJXDLIkWm%2BUHfYEBRiK6ZhOSUtCdJdNqa09LFUwHruvQBRvkMbnCcUTyKLjLRIFQeyjaEfKPmSuYUukZSiLynFDFGmyG0EvzluNCLVuYNtkzW4q%2B7IFrHhwAurmgNZOsxrwqwS2gwCzzN2NrA4zyPGOOBKFGioO38K54S24mBXFDVH3c4L%2B9tbMPHp3MQGOqUBv58lVit5EyK0zW6aB7M8WeFmyf6jqvvyo195WTX5X1EBECnyBhTEtOdTT1gTQZlqCPQ1H5RqLD15b52PU%2FYIP06qADtSHkA%2BObOQXmCRUOOgBDKg%2BiATbdtrcokAFWPNC3mXOCmBfXEN6KYItGAmuIPGxVkf4tq2uY941xxNkh9gP5voUZWUD3yvDcRAoWQyydfljsIw%2BHnOp%2FslszQoKYY%2Bsw%2Bj&X-Amz-Signature=580e12ac4a93ccaf37f24155609897124a937ad4b35cb8e640aa56bc2fe50456&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2BBMHEY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDErvU%2FpODhXn5knvXWlFcG4Bi0kg%2BVWgteBh51l6P%2BWAIhAPNXErOXdR%2BeFVKsewXkEeEbKQxuOom0jcpoI0CW%2F1i%2FKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwu0q%2BHdQPqeh6N97Aq3APzV993RQ45HDRp1ZNn8TggMp1m0ZA86kJBGUwOya7hjNudx84zwFDWcyUvfB4B14MUbi%2FO%2BOugcItTdVZJ8AWyjNJh0SDFlH64N9FREJEqHnUWoenQBmA%2FkLAyRr4ZGvKuMrJ%2FM0kwa%2BtyQF%2FKzL0PejAg0bBWchNp1HCDFcDdVSK4Pp59wrcuF1th3bGXEtT6tS0KIaCXvg0SFmUQXWC2yALJig338Gk7I9n6jFtpEF2oyF7WV1v8wz2BCsRsUt5c3HHTsP20G8JFpDYHMVh4wE4umWJwXDX0UXyU1R1vZVDBDcS%2BFgxSktFnkYuEHgDE4%2B7G89cwdb3FQWr9P0lI4dT0KWBQw%2BFXYr7AFRa8H7J9dtJmc%2FkEit8iq6v14JMgmQI3ZxQ9uXvlyJE%2FMr8JXX5zd3pF4ET%2FUkkc49YY3W69TG9kFID7RHNE2cIZDyNllDyDCpm0TSnVAZGt3Dfbx5PZVe6aXqTwJ7IbMXDNz6IN7DsjxRvIFYRxve4blLh1X5h4DKMKqhB0zUV%2FdvZIFeTW0Ro5rG6U1KaGJ6I4MPiVDuV1hbIOEo%2B%2BJarNeWA8v4gX90c9G8MTQcIuikHIbHFBe%2B8XCjYBIGuncY9guDFDQ06vVKkl0N8nDTCV4NzEBjqkAbKdNaMFe6%2FRh8c2ntvqoZUJ8rL9sCzIKQ%2B1HWdJEi0JHEucF9rXMCQOpsjeYDDxxNZjWckSuDHRkO3lAecz7Gu%2FrSpSMSCW4oRKQbjexo0NVcw9aDZXP%2BH9QohCTRCXygBsg7wXAz6t8al9GyivHf%2BAGFLbl793AkGf6xX8mX%2FVJKbi3MfcDvt31cTBR8nr43W2Ipgqw5NxId51HGP2y%2FaIGqgv&X-Amz-Signature=94bcad64d415d419eb00861b60a23e00458489f15680caf14e665878fca72655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A3VL5OS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuBXzIHFQOdszxp2o2h0FDVH7CFtb9EinyjQcZN5Jh6AiEAzrc1QFUE%2FTSrjlXTu%2BZRCNyA3ipgfV%2Fyoi5O9xC33%2FAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJITy1yYnHITfFOujyrcAwZqLzlvKE5dCvHsT3JwoH556Fxpg9VqTkqj01kqImfJwIeHOgGjaaN%2BBxTAxPwNuhEdJ9DgRk9s0aKgUzJIykp0KZaiso8WrkIBru3gYuaWhZm63aFO2PXgupsEa1SidkwCvtrofcnsIoSa%2BBuWJtGmHkez9vRx7hyF%2BhwWXPol8OVt04CD2noIUZ2An4%2Fh7E3kv2Jpiju8Ujw1K4qxYkprVu5Yd6rmSRsUYpUFue55EMJDC%2B%2FP3sUjZlCFxvvoLPL6URHwQPKWlSv7iU2o6A1qdqrq3DCjt1a64QKaAMKzqj8aGcxAZwREN%2F9C0VFN7yEJeyuduHws%2BmdOL3IfOMbSqxUNV4SJLwZMcSc6lHPQzwFhs%2F3AEhdO8MQx%2FvVEiYOwBjBh%2FZk9WOcG2Ucbhgag%2BxTLZrxavnNBwOz%2BqeFo0jK0fSUjx%2B6Uo%2BYaqUkTKJG3%2BDRUbtX2B8DT7svhY8prlzeCIt3a9fr%2FrdTWJ4PvcY84Nd6O%2BtX0EFL91qxO%2BWE6j0jH1Ozzgu1plvbS5%2BkBHKlVFPXPd8%2FEsQVybXuU85NFJW7nI9tehxNDAmolXdLNfKjZUnVJX9i%2Ff6Vpdq02R0Dw5baq4k4FcKZB8Hg0wDX4aWQyNc3hUbdeMNPp3MQGOqUB7C79PEmIxtjXLZXPF3v4zcybAEd0GJx0C%2FDibdOjvtRK6S0qz1nu6EeZJzSKNd%2FyoNZy0vQxEcQH5bOZm1ZVQiWR1RY7tv4PKLBiF%2BBb6%2BZbGxrw3l5rS4gQlFA%2Bswc7%2FBfd0hDevBjKesal3eWqmhuNPV%2FA32ByIMfyQpjrmxud13xghzGBSBcB7e6O2oizLPJrVgVoNcKVGyfS2lHieBSgWt3p&X-Amz-Signature=5fee50e94f6258e2e6bb8a44d416d89b6491f2275def768d9a103557cf51369b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZE27NKJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3H4tdA3ibi%2BWWvg1YFJFkA%2FJAl8lKvu546GOCfstuTAiEAgkfioRHKxT1kcQkdA0kvhZUL4i06Bh19Ma2wPU4srXsqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfIiKN5Xb3PzK6ElSrcA%2FGbz2dx%2BGYSE1hxqISLg0Ni8IuI7bnXc25nALdqixsPM9TEAlGGc9ynP8OBOueM94SAvQrVSaGoOdFjMbIi5i8vglmYVH81J8dSsXjHLN6U0ktt8udzia%2F%2FNLMvSPXZgOY9Dk%2BNhG5aQxvkvIvgC8W%2BtfD8UY4LjRCEOxVt4LzzBWlLoA87xvGUJdD6OFP1V46EAJshKc1PeLKK7pa%2BagZYIkH0AdcB5paM%2BG85zobmV8iuoxR18TW1njg%2F6k65C%2BxoBEL7SyYigPiP10PLgsi7zgSxzv9zXn690%2BKeMljBTLipHDAzgce8qFhZNpA0jCRNeIwhkq2nCHbe6Trk021yVeDRoL%2F6idSkimfcvKjABqZ3ZoLnCIIA6t%2FeZlN14ucJQzMxwUqYBRTsac9h0wAy5yNUzsWeqYmVINz2%2FNIjyxFcya8AEDkqRFXGItfI%2BnbfhHsmlzJ2HRnqQ75rb%2FP%2B0ejG1uJfO9Am3QwsFMnTsTCaXDOcWomoDC80OAWidFOrisPNMU1FV91Vg95ercY3aW%2BbmhJncc3AU7qOdcu4yJPvAEQIWLQKzOlgOXVqv4IbyvwWtT6SRwrVdHVnNgGacXNmIRweI06y%2BMy829Wr7z6in41jrhMoOTmSMKPg3MQGOqUBQhcG6jXF6IZfmMk3uWw5druZB6ovMTJIH%2BywZmebZfr1TCY76jKtbybcW13EuNrPYjhjTcfo3h6pf8YNcv8%2BD27UdrMU%2Fkjij%2FNotp3Qx0lNssqB61Lp2L5ECMWsV1P6NfkewBM5BqXfwQLLoT%2BuXdRCZBRMWwW1IUEO1SxtRhSdq8rc6VrO%2BkcoUMsJpWO0ZfthCQucVDat0T8XObB9D8qCzkFL&X-Amz-Signature=a8158c6c52080a05ef8f30a81f5a782b8200e0ffa228356f1888cf49e69aceed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A3VL5OS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuBXzIHFQOdszxp2o2h0FDVH7CFtb9EinyjQcZN5Jh6AiEAzrc1QFUE%2FTSrjlXTu%2BZRCNyA3ipgfV%2Fyoi5O9xC33%2FAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJITy1yYnHITfFOujyrcAwZqLzlvKE5dCvHsT3JwoH556Fxpg9VqTkqj01kqImfJwIeHOgGjaaN%2BBxTAxPwNuhEdJ9DgRk9s0aKgUzJIykp0KZaiso8WrkIBru3gYuaWhZm63aFO2PXgupsEa1SidkwCvtrofcnsIoSa%2BBuWJtGmHkez9vRx7hyF%2BhwWXPol8OVt04CD2noIUZ2An4%2Fh7E3kv2Jpiju8Ujw1K4qxYkprVu5Yd6rmSRsUYpUFue55EMJDC%2B%2FP3sUjZlCFxvvoLPL6URHwQPKWlSv7iU2o6A1qdqrq3DCjt1a64QKaAMKzqj8aGcxAZwREN%2F9C0VFN7yEJeyuduHws%2BmdOL3IfOMbSqxUNV4SJLwZMcSc6lHPQzwFhs%2F3AEhdO8MQx%2FvVEiYOwBjBh%2FZk9WOcG2Ucbhgag%2BxTLZrxavnNBwOz%2BqeFo0jK0fSUjx%2B6Uo%2BYaqUkTKJG3%2BDRUbtX2B8DT7svhY8prlzeCIt3a9fr%2FrdTWJ4PvcY84Nd6O%2BtX0EFL91qxO%2BWE6j0jH1Ozzgu1plvbS5%2BkBHKlVFPXPd8%2FEsQVybXuU85NFJW7nI9tehxNDAmolXdLNfKjZUnVJX9i%2Ff6Vpdq02R0Dw5baq4k4FcKZB8Hg0wDX4aWQyNc3hUbdeMNPp3MQGOqUB7C79PEmIxtjXLZXPF3v4zcybAEd0GJx0C%2FDibdOjvtRK6S0qz1nu6EeZJzSKNd%2FyoNZy0vQxEcQH5bOZm1ZVQiWR1RY7tv4PKLBiF%2BBb6%2BZbGxrw3l5rS4gQlFA%2Bswc7%2FBfd0hDevBjKesal3eWqmhuNPV%2FA32ByIMfyQpjrmxud13xghzGBSBcB7e6O2oizLPJrVgVoNcKVGyfS2lHieBSgWt3p&X-Amz-Signature=15397f8086d944b0b2a8e30a069a1b5683cf0ab96b5ed4f0be0421b36b04b3c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMFLU5XM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEKSzT6uLV%2FgYHMVIi%2BuSj4Qxw5qhzc%2ByEzPqiEHchuAiB3X7TAoEyM5M2wnHwS2yp06K%2BXzp0elmNj28dIP5gtBSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVj8JDrK9ixtX3jTKtwD6iGeAw01ZwUugwlabgsJHOTQxXZeA%2FuWEIpG79jrEc93DaTivAElV4cebkovNAHmzbu6iGlmvRFgYC8vuDU%2FblzsOENjAUSqbgyZAbkzSmVz6%2FPwfEwYSrCcu5CHnavYnHg6M4k%2B%2FLo%2Br3YPDONKDc0SF9DT%2B39x201CrKjUoSfbfdP%2F7i7RyyPgScIduRt6dud0k0Dh%2F9c%2BXFCZiGyovK2MvgpP%2BaMz3W7L2qvxkL2mkXQZbHUtl%2BTu8VkOr%2F2GqMbAa2eFYSTwjozuc72GLqNdg3FQ9hst9rWIKU74QUuByooZb7%2F7kEPkK6ASjoaN8g3ojK%2B52zfJFI%2F5nMW1Yda5rScC7p2SpxbOtUNzvO9RukH%2BttF1eFni1kfusR4%2FQcnUMxuwNgV7XaJq75viYYatzNjQmSjwn2roOBp2hWZeADC%2FCb7SvnKsnCF0pcqsZenebeWGn%2BHL26vPSYUECDoV7yWgJaJCBZ%2B%2Bw690YRKgmqtCwrKyoa3ukqJht0m9F5EnqT1zxFxoSO2qhhYUb2X30lg7s4sDWHWOEsJvK76V7lpvFf0FXjd6bzXEWhmp6HJk5jLckHAMP7HLG8Fjg9WudvCXTiHzL8XR9zdzm5fYS1IzDd08vPT6Bo4w3OTcxAY6pgH7KgQ29C41fMJiaazcmxJRx4tZoiJflyfU1BfGOyJlHa9W53lTF9M5ERSwANKMS0pPpla0o821%2FPVjZJ%2FdvHFTYEyt82%2B08d4Uu90dZDbqh%2FHdsDeSLIAapMV7p5YYvqUblo0jEdt8V0SEkIYl5EtelsPJA00TEDLtkC3VfB%2F53aKVAOfgH0K%2BKZQhRRdltr%2F5Mqrig1REqR2BHuTprf2MYnHNJfZd&X-Amz-Signature=fdc6433964d8d1b3bbe3d59ded59e4f6a8cc0d4e552162299735fe227c922238&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A3VL5OS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuBXzIHFQOdszxp2o2h0FDVH7CFtb9EinyjQcZN5Jh6AiEAzrc1QFUE%2FTSrjlXTu%2BZRCNyA3ipgfV%2Fyoi5O9xC33%2FAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJITy1yYnHITfFOujyrcAwZqLzlvKE5dCvHsT3JwoH556Fxpg9VqTkqj01kqImfJwIeHOgGjaaN%2BBxTAxPwNuhEdJ9DgRk9s0aKgUzJIykp0KZaiso8WrkIBru3gYuaWhZm63aFO2PXgupsEa1SidkwCvtrofcnsIoSa%2BBuWJtGmHkez9vRx7hyF%2BhwWXPol8OVt04CD2noIUZ2An4%2Fh7E3kv2Jpiju8Ujw1K4qxYkprVu5Yd6rmSRsUYpUFue55EMJDC%2B%2FP3sUjZlCFxvvoLPL6URHwQPKWlSv7iU2o6A1qdqrq3DCjt1a64QKaAMKzqj8aGcxAZwREN%2F9C0VFN7yEJeyuduHws%2BmdOL3IfOMbSqxUNV4SJLwZMcSc6lHPQzwFhs%2F3AEhdO8MQx%2FvVEiYOwBjBh%2FZk9WOcG2Ucbhgag%2BxTLZrxavnNBwOz%2BqeFo0jK0fSUjx%2B6Uo%2BYaqUkTKJG3%2BDRUbtX2B8DT7svhY8prlzeCIt3a9fr%2FrdTWJ4PvcY84Nd6O%2BtX0EFL91qxO%2BWE6j0jH1Ozzgu1plvbS5%2BkBHKlVFPXPd8%2FEsQVybXuU85NFJW7nI9tehxNDAmolXdLNfKjZUnVJX9i%2Ff6Vpdq02R0Dw5baq4k4FcKZB8Hg0wDX4aWQyNc3hUbdeMNPp3MQGOqUB7C79PEmIxtjXLZXPF3v4zcybAEd0GJx0C%2FDibdOjvtRK6S0qz1nu6EeZJzSKNd%2FyoNZy0vQxEcQH5bOZm1ZVQiWR1RY7tv4PKLBiF%2BBb6%2BZbGxrw3l5rS4gQlFA%2Bswc7%2FBfd0hDevBjKesal3eWqmhuNPV%2FA32ByIMfyQpjrmxud13xghzGBSBcB7e6O2oizLPJrVgVoNcKVGyfS2lHieBSgWt3p&X-Amz-Signature=d6995a9dfbd9ef9b821f9733e609c979e2a9bb3d3eab3795ea6daed17bbd41c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663URNMPCO%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCgNMn65eE2kcwzr0m%2FJHHHYHZGZvRacTBl%2BH4XcV1AAiAYJa6x6gsuf%2F%2F7pvlkEYk3mc3WRAfrnS2U3ju1h7tQYSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXkFVtb%2FBV5boOy4rKtwDUq1k%2FVwAtmoSemKDol7K1LfPaQ9HpNtqAk3UpILmx0VqKHROJXM3xkPHYsJx6XKDA9jH%2F%2FEAtzOEZCR5WZ7R83xunPpH3w7P3qShxAGY1mOccHE3O9anFZ7W8kOMTA%2BF5J7zhEKG6wZPeQy07v8LoxSz3JyO4jHUBnpUSfSJW0QysqPWX5PQpcf9Vcv8ZMksmxqLkihxLOh%2FuXrCfDGoVY120LCbyQknsMEMfzFdKoWtj0ttTuGPpu8cNaes2bMeUAF8NgwOGHowUYS7cjnHiO0P0PmFwn3iqrCQVP7iH5E8IcyQ%2FIck15PR2dAsuGvIRKYWQy6bJ41qtsqW7oE0MIrSX7HBl79QeApipHpp1AYJM88fo78grUtbTxXNKbhj46E1QmjgjJm0P%2BcHdG3K2zGyk0Cn%2FSCh1psF%2FvR9r4F12M%2FlvZsD%2FYisxuVyBiq7OA9SFyB9Ao26nWP2SeYBoSaN6UCK%2F%2Bh09ZGo6heKfWSBazgB4QGuxiww9RsgV91ZXS%2FP5fgLQ3gXd%2BxTEmuTtsyybIvXkYOx1fn2Hnfg%2BnDhJAsAorGmveZ5TnAP%2Fu2Yxdm93Ra3xj%2BIxAo348iryJDfc2omWrmgEP207gS98ykQqjbt3WBort6Va1swxuXcxAY6pgEqtZ4V9q%2F5IU2pI9i3tTwbfxagjVEKkbF1odlPhdKUZ00rzS1XoR%2BBbnbZFiCG5L%2BCzbtdKyD%2FV8xiYt7JNOE9joz9VfmLywLdqAB%2BI%2FW2Zj4FiD%2Fp18R21aekEOU7IPThhFHF%2F%2BBD8zB6Y4f1gf5eSOvJpVtnV2hcD5hQJDtNEv8o%2BgMSuxQTdnCwGmwhiJCSybH9qG87rhp9EzWBbb377GMOMIpO&X-Amz-Signature=5059e7bbdea69066c0a2753aff07faa86c060e2c2707e3865081e0f0099aef61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A3VL5OS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuBXzIHFQOdszxp2o2h0FDVH7CFtb9EinyjQcZN5Jh6AiEAzrc1QFUE%2FTSrjlXTu%2BZRCNyA3ipgfV%2Fyoi5O9xC33%2FAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJITy1yYnHITfFOujyrcAwZqLzlvKE5dCvHsT3JwoH556Fxpg9VqTkqj01kqImfJwIeHOgGjaaN%2BBxTAxPwNuhEdJ9DgRk9s0aKgUzJIykp0KZaiso8WrkIBru3gYuaWhZm63aFO2PXgupsEa1SidkwCvtrofcnsIoSa%2BBuWJtGmHkez9vRx7hyF%2BhwWXPol8OVt04CD2noIUZ2An4%2Fh7E3kv2Jpiju8Ujw1K4qxYkprVu5Yd6rmSRsUYpUFue55EMJDC%2B%2FP3sUjZlCFxvvoLPL6URHwQPKWlSv7iU2o6A1qdqrq3DCjt1a64QKaAMKzqj8aGcxAZwREN%2F9C0VFN7yEJeyuduHws%2BmdOL3IfOMbSqxUNV4SJLwZMcSc6lHPQzwFhs%2F3AEhdO8MQx%2FvVEiYOwBjBh%2FZk9WOcG2Ucbhgag%2BxTLZrxavnNBwOz%2BqeFo0jK0fSUjx%2B6Uo%2BYaqUkTKJG3%2BDRUbtX2B8DT7svhY8prlzeCIt3a9fr%2FrdTWJ4PvcY84Nd6O%2BtX0EFL91qxO%2BWE6j0jH1Ozzgu1plvbS5%2BkBHKlVFPXPd8%2FEsQVybXuU85NFJW7nI9tehxNDAmolXdLNfKjZUnVJX9i%2Ff6Vpdq02R0Dw5baq4k4FcKZB8Hg0wDX4aWQyNc3hUbdeMNPp3MQGOqUB7C79PEmIxtjXLZXPF3v4zcybAEd0GJx0C%2FDibdOjvtRK6S0qz1nu6EeZJzSKNd%2FyoNZy0vQxEcQH5bOZm1ZVQiWR1RY7tv4PKLBiF%2BBb6%2BZbGxrw3l5rS4gQlFA%2Bswc7%2FBfd0hDevBjKesal3eWqmhuNPV%2FA32ByIMfyQpjrmxud13xghzGBSBcB7e6O2oizLPJrVgVoNcKVGyfS2lHieBSgWt3p&X-Amz-Signature=af45aca81d110733e5c9437a41e858b11fc97bfcae1dce9721dba14fa0467c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2YSNOTE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUeLH9pgt6yAnbelUjKfJ%2FWmLX%2FuWxJtC8RA%2F4D6iI3AiEAjtktelloJ0aIjYHNVuVH7JlFbKVRRsQzptIGXrLazNYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKRX44ummJY6WrcTSrcA8d1guEQXF60beMe%2Bf%2FGwSbKDNio90omfFBe2y1ofH4IKwEP2DS5IGNL%2ByTMI6KetvlhP5QpiT%2FpvB8%2BJC771k4a%2Bxm1REAHiDwvcI4naxgtSssj%2BOgp0Bdku2YHP%2BaC5nKZoksYErl4jmndzkq026GURMf%2FDo1HdkNChk8mDGVl%2F767gNnbQk%2BTYp5g%2BgiFvBBeDn1NMyDA%2Bxtp1rQJ913AW7YwfeaTrdXKNVap%2FywEigibgACDEDi5tMoqP9K1y6qhRCnxRlGkqTj0V%2BqFVgj4g119vc8IJJMYuHIFTcMT1i4xx0HT6VFN5%2FB%2FW9ofsK3YEnYxIQ9z4uN9nVR1SZV3%2BalbyH%2FCS1exluaJUUM1vCUMLBMVD%2BbXQI4IipqlIOqSLiZZ%2FVLkcJNRIX4fjUxhtDVQizlMBespOot7dkxFDqsZGs8c1zPZ2ECYFn%2BU6LQISAv9EXNdftTHvBZWjKgvgNmBVyIXDRbbWzMlQ%2BCp5XEVqeWG2QKufia9gAMFlfCUqlhKMNiSdzwW6F2f3ENpkMG0aBY18a4kWKoQuC%2B%2BjhGIYnb5IBFXL9ifbg2Zby1TofBuCw%2FSE7wPGAomNphSPFgDHv4NpY0saqYQCS5XPc0Uirc77GlXrWQDMKTo3MQGOqUBEbumgKFOkwHNu822tQs5ZQkHMpvoZuLuPndBkeQCar%2BlKtV79HYVBE%2FrOD2IotCyRLDQP29qEnQ1hhz7wVt09EsDtXbUPVRpnq4%2FpvlqKPwg9dhM6pn5BrZLsVilXHEO%2B1Atr%2FvU2Iz38IL3gSFuj%2Fhdu8LCKq2ON2tRvVYdtzk3TxJXjopXkNQmN896xMZuK%2BKoauvtjEbicMF0bR3ZT%2F3S6PXM&X-Amz-Signature=0e3973cf1f5432e972012251529a7e9a74b7b574760617e23b407e9bd6c0249c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4QOVRMP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0jK3rt8uGjR37jRT94YjlYv1%2FP%2FTa1ybMRbJoBk84dAiEAjgx31G5ujU9fYMgneBfFiMPhQMiWTPo7DUZSOREDpY0qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXbmlBHt5%2BvTEOiGyrcA8iXdQ6KSfh%2ByOX80ejg7T1%2BSGA3n4hGoPNltcOypRgWtNfczgGGF8sLzOwq22o9ZqMQof3FQgePdy0YJdtmai4IPwhZEtZEO7fC7dlOdoia6EP2tado%2BM8hqtLHJhEL9E0HFao6Z8om0uQ0a3SQB%2BcON9nsJLEeeBj2C2%2B7P0eOt%2BIAbJxNUVVy2CHhThjjcZCT%2FIoMCaO9kbCkKKD9%2BbU8cOhMmCiwo1nkcvDmEsyaYRNUaHKR5bs1ZSQqF1cdT7tnUKN%2B0eIzyKWTWVGDcf%2Br9b1QnOSlhnPoZYQDvjdKqBWol5xOjtaVb8v9%2BR4g6x23vslmBdya8Yyn252Aj4OG3mp0OQw2aOMPUWarTUAJFulS1Z%2FtHh%2FFGftJqdEa%2Bkxy%2BT7RMUqzLLOeCFSOXTGBvrXz46d2RSygxiuqADj3iARG4p7%2FYNAYLHehxfC%2FLcLT%2BYM9AAvoTZCIb8tIEWxKhfQLYZYkMI0q3DJICgkeaOjcVyLL3PRjvypk1H1NDqM4PoqtOcRivP2h0NfoMnz3dJBlilzsKYhKxa7GyiAIk2H1aG7An2Uu3rkBNNXo94z8VMAvPsWhL9fUNMAUUwBzizD9zObwIgNy154uEaYC%2FGHwqzitFIdoZFKMMJjn3MQGOqUBZ%2F9tMNzZf4xaN2XYeUmo7%2FHtUJboqPVkR0hy97t%2FoULPEm%2For%2FodItTJLtAgFQa9%2B4mv3aUzVDrOJ4SkgXdQTLNBo25KLwsQBOFM8OngGw2XMEAJdkLfZUUNAWngkC6YpwtqnpcSdp%2FoIDBINvhosnkUsq4VW%2FpgOOAsyXz6KD9NrmmeVOntB1CxvnIJIWKJx%2FH1YEwm4Bu0G4DqVImXLDy0Yd3B&X-Amz-Signature=9028c344b4270f33e3289616a6e96887f3ca3597e1f1474387758b1bb11abd92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z55CXRBL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzAOVtrhcgUyvqDCAAcPFdHieTN2dEJU66WuelVM06vQIhALXMzVI%2Fars3HOn%2F6%2BCl8ofLCppjMiYDOGYG1tkwGZc%2BKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmfqdYWWhmkmb%2FKrsq3AOz5movD1o1D%2F1QoS7F6t2xSsLQ8kIU92oujHqZ4xkGoXLF1geCIrBhGQDPtgUtlk%2FJMIRraiXJ1Aj9qyQ9T7nd3gP1y3mFntmFjumOqSuGOkOxHTPt%2FoOqxWvQAVLfRNOIe4%2BDseF3kvrFxvMt8LfkqjeJekXfy370RtCD0YmuB6inpaJdm8epe6SosA1e5Uo%2FQo3m3QHzJxIshCh53GDa6QFXpQjGbe19vVg9yaOIlrkm%2FEtn0LwL09nZLGLiM3KljRUDrxkbhHQjhwn%2FYSBPVkjqP2bRCoPoKrdLphx6C7aLQy6QihG2La4AppbqqjJGZ6V%2BTZkR0AmecbyrP3uU7LSNyKZNBdAuCyZXQ4n8fc0r3RQ5QrRoNbl6wzkqPAPx01YH60ytUGHPSEfj41UJfzZg%2FH5IAGgRuwpgEWt886glWzbY%2Bcw9x%2FkCtXQLvOD5J4wCqhCV%2Feg%2BDJF48wQFUhsWl9ZKEt1j3ueNht0BDPotoyPEgWjdtYAz%2Bs6cJIQOQBvCKLQXy6y1xRPwQti32lWg4DzdaNlZG1%2BSKi15Yn6F9v%2FebCBWZ%2BVhdffl18%2FMtHUpMstK7WL78f7KsV4aBrZOBT9EkNQszthd4Kxv86DtTslaUpo8T%2F5cxTCs69zEBjqkAYKNbxj9CAhzhBlck1NAimBxZSAKuoyO8RLwDno4LUdzL4ioCwuugaQ1ubIL7a6ANZ4QoBoP38r31TRPqzb%2BNzfnVzQY8ZUjKzWiqFbBVYo2r1wEWrsk35%2F01%2FW20KSFdVQUQMj2Wss68atF9LlctQdJVcx2vYSvNLCQtgiJ1A2nwXprmrxDhWIiJdYu5avZ6KTM9P8fC4ly9pLtMFWzGtLBrtq0&X-Amz-Signature=682ff925e1757d41ce31038dcfc6c4cea4db9e2f391ca20241a7ae6c01b41ae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U73FEMKL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGZoQi7fshM9rxPMGpVWBsHF2OV0HHLgHYMhnCb9cbNQIhALEC2acCkm%2F258a48v0LuHoBP86f9BhGb0AMEDd5mWCVKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWbPCMkDrdw9lAk14q3APvTK5byRQox4kQg6zmbUaSa2jfSignbY%2FyCZIJ%2FSps0QgiGANamIBLai58uLnUlIP82IQRRMhcIn89OLuMHE7ewdMK8L9J2%2FW%2FmiAeJNzfx14GJBh32KJV0uS4srDTf7DumTcC4KamAMZoIGrrnF5lm4rjOJfs3gvZ2wqVB4MKVaKf1qBtB%2FO971IiHaWqSqh%2F2l%2FAfxirXb7kUjg76m%2B0xhBl5dWl6ftsyPgfBz6cGndn8gJ7qIEsiRx8tlX6r15SfroWprmV%2FOSLjbdw%2FN%2BrOEhdGhKgRpwZ2X4iHgNMBZIkU9lq4f0LPpveRkf1bGQoLB2N5YKhiQDbRf2O1ftJNAGg31DNyVQaMYG%2BNm5jChla89SqXwkRihbrV%2BJ0DleSOVXTRgrFbtTEluDU%2FyFBaimCDC2bN1ayRlisqXPUjIoZHXfuxi8HsUnaNjOnx9iui9u2qyXW2o51WRfIyfkMNb47zl3TJ1pD00e2LZfpeX61el2xWarJN3takdXkDQLHWzrDoLj%2BPEcYdbQEhsmNUl%2F07pd3UA0MRp83ovYYBW%2FBY7s1BNuZ%2FbVd3YnhxeHzUiP%2FxZjy9xVpiC%2FMGm9vEWPnx3DosF0hi9TeVIoszPoVhp8r32MG4fIeZTDc5NzEBjqkASYEoe8vtQ1sNTHpaQeZZg6ZQ3CDDlQ%2BwzDsNRbQRdD%2FSHH6UXre%2BiDAEc5We90gQPEYLw39JmJHTrgYuIXGpmaC%2FlYzp%2F3iicRMmMAB5iy3oKyPkoUVWyZKyZmL5gjWWjWu5yT0mlXNBC00DnNboyESGBW1TDpnJw%2BtXK7q15elKhcGhEHjEBDl716Ft95ZtSkIKgQy82TsM3dDvAI2sCP1nsFB&X-Amz-Signature=98c829291e7fe5191ec7f30c9086bd26d055b8d6a1566eba902e060f19fcf179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHU6X5YP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrgfWGoWH5KTiie75AmbXpT5ciotRy21OQL97mZnLSTAiEAms0CmiaCQD3HcQFwRT6Yi9JmGIKGyIHwb%2BDf0dJxEmgqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJku9IiVG7SyelOErCrcA7gASNNlTTmqxUNTo8mXANen%2BZt13Rq%2FrQ8LqfaUTv9PVVkgo8h0ldOdQEUkSr3eQfXcacN7Fg5dlJOWssEvcJncIK0IlM%2BTRLEoDfsDXcZNcMkgMnvXYm2P4vMKmxi93ZCz9Pkr6KhL1uwkh6BdEGOZ6YMQTa59WiOzHqoI%2FAyz23C0Yeb7DAL%2F6XxGzZ5IrcMJKx7hN2%2Bv5FK9WSw7QZ4McaOp7yRjgAf98c3PozhIANCwgmK6O5EbBlTyS5POdrpwfAqsaqNI3XsXA135RQtdwLTDlt4N5BcuinQJ9hXQdgCXPe5B4uVaRR3y2HCL5rP1JOLdeMqrJ29E47o21QDqMPcnIP8mlbJ4Fol0%2FD7YGmKobEp9vDofatOf8tTrwTNDH6%2F0JmdDNm1Rfchg4dsEAlI2TMRua%2FKTXbSxqAy5VPNn4Zo6IpzsMd6UxzHKZhOBmBKpv5kUQptxEketQheqaVfDr1yySrsASnGauK0LCzmuCSFnQxQs6Pi56XCUuHypbHGeykofWICZ3Th1AmFSaa55iK3YtW09PlYKvk4%2FjUz9qRO1lza0uJXDT8Zde5Susg1xisMtetpu6hohP1F%2Bp8EIewGXoPc%2FFNUCU%2BkYxijA1LMIW5KGcRG0MPvn3MQGOqUBNJ2s3z99DKYA%2FgSRSBLZj2UZ5x7aJTSRNxVkxp6SGl9dHKR2MLCDER10amEqNGAhLV2s7DHWkuab%2Bk9dz7RHW2olFTw9hI2T8oyH7hD0foSOSmcSVNrYUAW0yrADwF0SAhB9NhZGNfNgA0UrRMBHWNNL3cReRzA8%2FMdrhqSKhALl5YbrCpBCScfcI%2B9pnL2mlht4qqo7RFoxmK0mYSLgPEAEDgMT&X-Amz-Signature=9f742b3c3fed284dbe3f18f980fc416d5115599b3741d85c3bd67c860c078c92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A3VL5OS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuBXzIHFQOdszxp2o2h0FDVH7CFtb9EinyjQcZN5Jh6AiEAzrc1QFUE%2FTSrjlXTu%2BZRCNyA3ipgfV%2Fyoi5O9xC33%2FAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJITy1yYnHITfFOujyrcAwZqLzlvKE5dCvHsT3JwoH556Fxpg9VqTkqj01kqImfJwIeHOgGjaaN%2BBxTAxPwNuhEdJ9DgRk9s0aKgUzJIykp0KZaiso8WrkIBru3gYuaWhZm63aFO2PXgupsEa1SidkwCvtrofcnsIoSa%2BBuWJtGmHkez9vRx7hyF%2BhwWXPol8OVt04CD2noIUZ2An4%2Fh7E3kv2Jpiju8Ujw1K4qxYkprVu5Yd6rmSRsUYpUFue55EMJDC%2B%2FP3sUjZlCFxvvoLPL6URHwQPKWlSv7iU2o6A1qdqrq3DCjt1a64QKaAMKzqj8aGcxAZwREN%2F9C0VFN7yEJeyuduHws%2BmdOL3IfOMbSqxUNV4SJLwZMcSc6lHPQzwFhs%2F3AEhdO8MQx%2FvVEiYOwBjBh%2FZk9WOcG2Ucbhgag%2BxTLZrxavnNBwOz%2BqeFo0jK0fSUjx%2B6Uo%2BYaqUkTKJG3%2BDRUbtX2B8DT7svhY8prlzeCIt3a9fr%2FrdTWJ4PvcY84Nd6O%2BtX0EFL91qxO%2BWE6j0jH1Ozzgu1plvbS5%2BkBHKlVFPXPd8%2FEsQVybXuU85NFJW7nI9tehxNDAmolXdLNfKjZUnVJX9i%2Ff6Vpdq02R0Dw5baq4k4FcKZB8Hg0wDX4aWQyNc3hUbdeMNPp3MQGOqUB7C79PEmIxtjXLZXPF3v4zcybAEd0GJx0C%2FDibdOjvtRK6S0qz1nu6EeZJzSKNd%2FyoNZy0vQxEcQH5bOZm1ZVQiWR1RY7tv4PKLBiF%2BBb6%2BZbGxrw3l5rS4gQlFA%2Bswc7%2FBfd0hDevBjKesal3eWqmhuNPV%2FA32ByIMfyQpjrmxud13xghzGBSBcB7e6O2oizLPJrVgVoNcKVGyfS2lHieBSgWt3p&X-Amz-Signature=9f501f2894916904efbec9d94988b45eb7d77599ad219711580d5f949aa55227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A3VL5OS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuBXzIHFQOdszxp2o2h0FDVH7CFtb9EinyjQcZN5Jh6AiEAzrc1QFUE%2FTSrjlXTu%2BZRCNyA3ipgfV%2Fyoi5O9xC33%2FAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJITy1yYnHITfFOujyrcAwZqLzlvKE5dCvHsT3JwoH556Fxpg9VqTkqj01kqImfJwIeHOgGjaaN%2BBxTAxPwNuhEdJ9DgRk9s0aKgUzJIykp0KZaiso8WrkIBru3gYuaWhZm63aFO2PXgupsEa1SidkwCvtrofcnsIoSa%2BBuWJtGmHkez9vRx7hyF%2BhwWXPol8OVt04CD2noIUZ2An4%2Fh7E3kv2Jpiju8Ujw1K4qxYkprVu5Yd6rmSRsUYpUFue55EMJDC%2B%2FP3sUjZlCFxvvoLPL6URHwQPKWlSv7iU2o6A1qdqrq3DCjt1a64QKaAMKzqj8aGcxAZwREN%2F9C0VFN7yEJeyuduHws%2BmdOL3IfOMbSqxUNV4SJLwZMcSc6lHPQzwFhs%2F3AEhdO8MQx%2FvVEiYOwBjBh%2FZk9WOcG2Ucbhgag%2BxTLZrxavnNBwOz%2BqeFo0jK0fSUjx%2B6Uo%2BYaqUkTKJG3%2BDRUbtX2B8DT7svhY8prlzeCIt3a9fr%2FrdTWJ4PvcY84Nd6O%2BtX0EFL91qxO%2BWE6j0jH1Ozzgu1plvbS5%2BkBHKlVFPXPd8%2FEsQVybXuU85NFJW7nI9tehxNDAmolXdLNfKjZUnVJX9i%2Ff6Vpdq02R0Dw5baq4k4FcKZB8Hg0wDX4aWQyNc3hUbdeMNPp3MQGOqUB7C79PEmIxtjXLZXPF3v4zcybAEd0GJx0C%2FDibdOjvtRK6S0qz1nu6EeZJzSKNd%2FyoNZy0vQxEcQH5bOZm1ZVQiWR1RY7tv4PKLBiF%2BBb6%2BZbGxrw3l5rS4gQlFA%2Bswc7%2FBfd0hDevBjKesal3eWqmhuNPV%2FA32ByIMfyQpjrmxud13xghzGBSBcB7e6O2oizLPJrVgVoNcKVGyfS2lHieBSgWt3p&X-Amz-Signature=a4e0a2f225df6e2f1a6a0261b5e7c0fb24bba53a6fb4764f94bca97ad88f8e9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUSTSF4U%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0d4qAz26rlelTFPuk377m59kttuUdE0ewBG0zGtolXAIhAJl0vpYCXtVHnEJCemxR7ge%2FNyG8exz%2FhHq1C84hb8uJKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQfEOMWkqifWG7XXsq3AMMLjRALH9XCzRCW%2BFEyShdh1edAOeBph5F7IomhkcRZe6lAPRwK2IRjw5WMmgxooIPF3JaVhbKPOiVxQOZTwxtFckN%2BvnO7J0XDVTgl%2BAlufxYfgawiodxmSErKKiu1iT0lbvKc2QGM51Qo%2FwVYzdS940q%2B1Kb5Q7MuBuVxvLJfBznwb6TZmJSPToNWjSmfDcqjM7ToWiPUunFPlXKLj8TVlnBc8Ss9gACzySSepA3W4aYDd3PoRVUAWL3kbw%2B0WBJo8Z%2BWBHwXsrvIG9w1nN4Kknoyo6YY6I0jwi%2F1xXnkgJLEgFcaYVnNIvV7peyZf67rEc1D1%2BBCS70iBEFHFO%2F01ExZ8oYZebr2IJOQEpl0sEJLQUvku5JE211wmfLIOaDSZKPfi4Ey8OeVqqBeFZnFokPt0w32c08HSZ1pDMU7V0uH9OW6oSkVwD6PNgy9q%2BO3n68K72lfxxF3R1boPVfxlOt7r6v9mZwQ2Q6aSFYXQxphhGZSHijh8CwMDeKEVpVJVneZdcwqPBB6xSihFM2QOxYJQoET2xflmTX0ILR5V9kZuQkhCfy1pAmciBpaOG5lRBWauxtZy1myNU%2BBWoGd5%2BCKI9hHwGtJxzsBxKWla2b1f1tUkIodqhGeDCh6tzEBjqkAWqpnSmDtid1ZxTxTY4XbCuTAX0iXGF8gZwHBJfjEalToSQ7JdByFPZrsz3kU7EXutnu0pECX0KBt5bSK8vN4PtQ8Rhahzf2X8%2BZRQp2dzNx1FplfiQyEFuAlzUcMjZO8uYR0Nzfu2FsjZw5mjiSrqrJRdHmosHr2ScG5LzpvCV7TCzpL4HDTCuTeor%2FXQDG3Ltwm8rdXFAW7WUW688XBKg5WaVk&X-Amz-Signature=aed87696cea771d6a0573e02ccb0006bbaeb0932911c73325f65be568ae73f77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUSTSF4U%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0d4qAz26rlelTFPuk377m59kttuUdE0ewBG0zGtolXAIhAJl0vpYCXtVHnEJCemxR7ge%2FNyG8exz%2FhHq1C84hb8uJKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQfEOMWkqifWG7XXsq3AMMLjRALH9XCzRCW%2BFEyShdh1edAOeBph5F7IomhkcRZe6lAPRwK2IRjw5WMmgxooIPF3JaVhbKPOiVxQOZTwxtFckN%2BvnO7J0XDVTgl%2BAlufxYfgawiodxmSErKKiu1iT0lbvKc2QGM51Qo%2FwVYzdS940q%2B1Kb5Q7MuBuVxvLJfBznwb6TZmJSPToNWjSmfDcqjM7ToWiPUunFPlXKLj8TVlnBc8Ss9gACzySSepA3W4aYDd3PoRVUAWL3kbw%2B0WBJo8Z%2BWBHwXsrvIG9w1nN4Kknoyo6YY6I0jwi%2F1xXnkgJLEgFcaYVnNIvV7peyZf67rEc1D1%2BBCS70iBEFHFO%2F01ExZ8oYZebr2IJOQEpl0sEJLQUvku5JE211wmfLIOaDSZKPfi4Ey8OeVqqBeFZnFokPt0w32c08HSZ1pDMU7V0uH9OW6oSkVwD6PNgy9q%2BO3n68K72lfxxF3R1boPVfxlOt7r6v9mZwQ2Q6aSFYXQxphhGZSHijh8CwMDeKEVpVJVneZdcwqPBB6xSihFM2QOxYJQoET2xflmTX0ILR5V9kZuQkhCfy1pAmciBpaOG5lRBWauxtZy1myNU%2BBWoGd5%2BCKI9hHwGtJxzsBxKWla2b1f1tUkIodqhGeDCh6tzEBjqkAWqpnSmDtid1ZxTxTY4XbCuTAX0iXGF8gZwHBJfjEalToSQ7JdByFPZrsz3kU7EXutnu0pECX0KBt5bSK8vN4PtQ8Rhahzf2X8%2BZRQp2dzNx1FplfiQyEFuAlzUcMjZO8uYR0Nzfu2FsjZw5mjiSrqrJRdHmosHr2ScG5LzpvCV7TCzpL4HDTCuTeor%2FXQDG3Ltwm8rdXFAW7WUW688XBKg5WaVk&X-Amz-Signature=a4e9263a75d3c6cdbc4c572b34ac5c2b1bf2e55094094f190ae0ae98e2794632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUSTSF4U%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0d4qAz26rlelTFPuk377m59kttuUdE0ewBG0zGtolXAIhAJl0vpYCXtVHnEJCemxR7ge%2FNyG8exz%2FhHq1C84hb8uJKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQfEOMWkqifWG7XXsq3AMMLjRALH9XCzRCW%2BFEyShdh1edAOeBph5F7IomhkcRZe6lAPRwK2IRjw5WMmgxooIPF3JaVhbKPOiVxQOZTwxtFckN%2BvnO7J0XDVTgl%2BAlufxYfgawiodxmSErKKiu1iT0lbvKc2QGM51Qo%2FwVYzdS940q%2B1Kb5Q7MuBuVxvLJfBznwb6TZmJSPToNWjSmfDcqjM7ToWiPUunFPlXKLj8TVlnBc8Ss9gACzySSepA3W4aYDd3PoRVUAWL3kbw%2B0WBJo8Z%2BWBHwXsrvIG9w1nN4Kknoyo6YY6I0jwi%2F1xXnkgJLEgFcaYVnNIvV7peyZf67rEc1D1%2BBCS70iBEFHFO%2F01ExZ8oYZebr2IJOQEpl0sEJLQUvku5JE211wmfLIOaDSZKPfi4Ey8OeVqqBeFZnFokPt0w32c08HSZ1pDMU7V0uH9OW6oSkVwD6PNgy9q%2BO3n68K72lfxxF3R1boPVfxlOt7r6v9mZwQ2Q6aSFYXQxphhGZSHijh8CwMDeKEVpVJVneZdcwqPBB6xSihFM2QOxYJQoET2xflmTX0ILR5V9kZuQkhCfy1pAmciBpaOG5lRBWauxtZy1myNU%2BBWoGd5%2BCKI9hHwGtJxzsBxKWla2b1f1tUkIodqhGeDCh6tzEBjqkAWqpnSmDtid1ZxTxTY4XbCuTAX0iXGF8gZwHBJfjEalToSQ7JdByFPZrsz3kU7EXutnu0pECX0KBt5bSK8vN4PtQ8Rhahzf2X8%2BZRQp2dzNx1FplfiQyEFuAlzUcMjZO8uYR0Nzfu2FsjZw5mjiSrqrJRdHmosHr2ScG5LzpvCV7TCzpL4HDTCuTeor%2FXQDG3Ltwm8rdXFAW7WUW688XBKg5WaVk&X-Amz-Signature=39268cf29b4947d849f2d7c73faa59d04cc7f50b08cf250f2bfb642a7e543518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUSTSF4U%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0d4qAz26rlelTFPuk377m59kttuUdE0ewBG0zGtolXAIhAJl0vpYCXtVHnEJCemxR7ge%2FNyG8exz%2FhHq1C84hb8uJKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQfEOMWkqifWG7XXsq3AMMLjRALH9XCzRCW%2BFEyShdh1edAOeBph5F7IomhkcRZe6lAPRwK2IRjw5WMmgxooIPF3JaVhbKPOiVxQOZTwxtFckN%2BvnO7J0XDVTgl%2BAlufxYfgawiodxmSErKKiu1iT0lbvKc2QGM51Qo%2FwVYzdS940q%2B1Kb5Q7MuBuVxvLJfBznwb6TZmJSPToNWjSmfDcqjM7ToWiPUunFPlXKLj8TVlnBc8Ss9gACzySSepA3W4aYDd3PoRVUAWL3kbw%2B0WBJo8Z%2BWBHwXsrvIG9w1nN4Kknoyo6YY6I0jwi%2F1xXnkgJLEgFcaYVnNIvV7peyZf67rEc1D1%2BBCS70iBEFHFO%2F01ExZ8oYZebr2IJOQEpl0sEJLQUvku5JE211wmfLIOaDSZKPfi4Ey8OeVqqBeFZnFokPt0w32c08HSZ1pDMU7V0uH9OW6oSkVwD6PNgy9q%2BO3n68K72lfxxF3R1boPVfxlOt7r6v9mZwQ2Q6aSFYXQxphhGZSHijh8CwMDeKEVpVJVneZdcwqPBB6xSihFM2QOxYJQoET2xflmTX0ILR5V9kZuQkhCfy1pAmciBpaOG5lRBWauxtZy1myNU%2BBWoGd5%2BCKI9hHwGtJxzsBxKWla2b1f1tUkIodqhGeDCh6tzEBjqkAWqpnSmDtid1ZxTxTY4XbCuTAX0iXGF8gZwHBJfjEalToSQ7JdByFPZrsz3kU7EXutnu0pECX0KBt5bSK8vN4PtQ8Rhahzf2X8%2BZRQp2dzNx1FplfiQyEFuAlzUcMjZO8uYR0Nzfu2FsjZw5mjiSrqrJRdHmosHr2ScG5LzpvCV7TCzpL4HDTCuTeor%2FXQDG3Ltwm8rdXFAW7WUW688XBKg5WaVk&X-Amz-Signature=79807da2864d5b83ffb4b3285b4a0165a9c9de44b82a92abad493b04d341b0d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUSTSF4U%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0d4qAz26rlelTFPuk377m59kttuUdE0ewBG0zGtolXAIhAJl0vpYCXtVHnEJCemxR7ge%2FNyG8exz%2FhHq1C84hb8uJKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQfEOMWkqifWG7XXsq3AMMLjRALH9XCzRCW%2BFEyShdh1edAOeBph5F7IomhkcRZe6lAPRwK2IRjw5WMmgxooIPF3JaVhbKPOiVxQOZTwxtFckN%2BvnO7J0XDVTgl%2BAlufxYfgawiodxmSErKKiu1iT0lbvKc2QGM51Qo%2FwVYzdS940q%2B1Kb5Q7MuBuVxvLJfBznwb6TZmJSPToNWjSmfDcqjM7ToWiPUunFPlXKLj8TVlnBc8Ss9gACzySSepA3W4aYDd3PoRVUAWL3kbw%2B0WBJo8Z%2BWBHwXsrvIG9w1nN4Kknoyo6YY6I0jwi%2F1xXnkgJLEgFcaYVnNIvV7peyZf67rEc1D1%2BBCS70iBEFHFO%2F01ExZ8oYZebr2IJOQEpl0sEJLQUvku5JE211wmfLIOaDSZKPfi4Ey8OeVqqBeFZnFokPt0w32c08HSZ1pDMU7V0uH9OW6oSkVwD6PNgy9q%2BO3n68K72lfxxF3R1boPVfxlOt7r6v9mZwQ2Q6aSFYXQxphhGZSHijh8CwMDeKEVpVJVneZdcwqPBB6xSihFM2QOxYJQoET2xflmTX0ILR5V9kZuQkhCfy1pAmciBpaOG5lRBWauxtZy1myNU%2BBWoGd5%2BCKI9hHwGtJxzsBxKWla2b1f1tUkIodqhGeDCh6tzEBjqkAWqpnSmDtid1ZxTxTY4XbCuTAX0iXGF8gZwHBJfjEalToSQ7JdByFPZrsz3kU7EXutnu0pECX0KBt5bSK8vN4PtQ8Rhahzf2X8%2BZRQp2dzNx1FplfiQyEFuAlzUcMjZO8uYR0Nzfu2FsjZw5mjiSrqrJRdHmosHr2ScG5LzpvCV7TCzpL4HDTCuTeor%2FXQDG3Ltwm8rdXFAW7WUW688XBKg5WaVk&X-Amz-Signature=375fb27fe7cebb6e104c7df2938b1c27d14d6398163e508d6a8fec250712a36a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUSTSF4U%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0d4qAz26rlelTFPuk377m59kttuUdE0ewBG0zGtolXAIhAJl0vpYCXtVHnEJCemxR7ge%2FNyG8exz%2FhHq1C84hb8uJKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQfEOMWkqifWG7XXsq3AMMLjRALH9XCzRCW%2BFEyShdh1edAOeBph5F7IomhkcRZe6lAPRwK2IRjw5WMmgxooIPF3JaVhbKPOiVxQOZTwxtFckN%2BvnO7J0XDVTgl%2BAlufxYfgawiodxmSErKKiu1iT0lbvKc2QGM51Qo%2FwVYzdS940q%2B1Kb5Q7MuBuVxvLJfBznwb6TZmJSPToNWjSmfDcqjM7ToWiPUunFPlXKLj8TVlnBc8Ss9gACzySSepA3W4aYDd3PoRVUAWL3kbw%2B0WBJo8Z%2BWBHwXsrvIG9w1nN4Kknoyo6YY6I0jwi%2F1xXnkgJLEgFcaYVnNIvV7peyZf67rEc1D1%2BBCS70iBEFHFO%2F01ExZ8oYZebr2IJOQEpl0sEJLQUvku5JE211wmfLIOaDSZKPfi4Ey8OeVqqBeFZnFokPt0w32c08HSZ1pDMU7V0uH9OW6oSkVwD6PNgy9q%2BO3n68K72lfxxF3R1boPVfxlOt7r6v9mZwQ2Q6aSFYXQxphhGZSHijh8CwMDeKEVpVJVneZdcwqPBB6xSihFM2QOxYJQoET2xflmTX0ILR5V9kZuQkhCfy1pAmciBpaOG5lRBWauxtZy1myNU%2BBWoGd5%2BCKI9hHwGtJxzsBxKWla2b1f1tUkIodqhGeDCh6tzEBjqkAWqpnSmDtid1ZxTxTY4XbCuTAX0iXGF8gZwHBJfjEalToSQ7JdByFPZrsz3kU7EXutnu0pECX0KBt5bSK8vN4PtQ8Rhahzf2X8%2BZRQp2dzNx1FplfiQyEFuAlzUcMjZO8uYR0Nzfu2FsjZw5mjiSrqrJRdHmosHr2ScG5LzpvCV7TCzpL4HDTCuTeor%2FXQDG3Ltwm8rdXFAW7WUW688XBKg5WaVk&X-Amz-Signature=d6b0be56171990dec3e1f7d7976f81c863c78e4e55e2c6d742ea0a8ac08830ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUSTSF4U%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0d4qAz26rlelTFPuk377m59kttuUdE0ewBG0zGtolXAIhAJl0vpYCXtVHnEJCemxR7ge%2FNyG8exz%2FhHq1C84hb8uJKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQfEOMWkqifWG7XXsq3AMMLjRALH9XCzRCW%2BFEyShdh1edAOeBph5F7IomhkcRZe6lAPRwK2IRjw5WMmgxooIPF3JaVhbKPOiVxQOZTwxtFckN%2BvnO7J0XDVTgl%2BAlufxYfgawiodxmSErKKiu1iT0lbvKc2QGM51Qo%2FwVYzdS940q%2B1Kb5Q7MuBuVxvLJfBznwb6TZmJSPToNWjSmfDcqjM7ToWiPUunFPlXKLj8TVlnBc8Ss9gACzySSepA3W4aYDd3PoRVUAWL3kbw%2B0WBJo8Z%2BWBHwXsrvIG9w1nN4Kknoyo6YY6I0jwi%2F1xXnkgJLEgFcaYVnNIvV7peyZf67rEc1D1%2BBCS70iBEFHFO%2F01ExZ8oYZebr2IJOQEpl0sEJLQUvku5JE211wmfLIOaDSZKPfi4Ey8OeVqqBeFZnFokPt0w32c08HSZ1pDMU7V0uH9OW6oSkVwD6PNgy9q%2BO3n68K72lfxxF3R1boPVfxlOt7r6v9mZwQ2Q6aSFYXQxphhGZSHijh8CwMDeKEVpVJVneZdcwqPBB6xSihFM2QOxYJQoET2xflmTX0ILR5V9kZuQkhCfy1pAmciBpaOG5lRBWauxtZy1myNU%2BBWoGd5%2BCKI9hHwGtJxzsBxKWla2b1f1tUkIodqhGeDCh6tzEBjqkAWqpnSmDtid1ZxTxTY4XbCuTAX0iXGF8gZwHBJfjEalToSQ7JdByFPZrsz3kU7EXutnu0pECX0KBt5bSK8vN4PtQ8Rhahzf2X8%2BZRQp2dzNx1FplfiQyEFuAlzUcMjZO8uYR0Nzfu2FsjZw5mjiSrqrJRdHmosHr2ScG5LzpvCV7TCzpL4HDTCuTeor%2FXQDG3Ltwm8rdXFAW7WUW688XBKg5WaVk&X-Amz-Signature=39268cf29b4947d849f2d7c73faa59d04cc7f50b08cf250f2bfb642a7e543518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUSTSF4U%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0d4qAz26rlelTFPuk377m59kttuUdE0ewBG0zGtolXAIhAJl0vpYCXtVHnEJCemxR7ge%2FNyG8exz%2FhHq1C84hb8uJKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQfEOMWkqifWG7XXsq3AMMLjRALH9XCzRCW%2BFEyShdh1edAOeBph5F7IomhkcRZe6lAPRwK2IRjw5WMmgxooIPF3JaVhbKPOiVxQOZTwxtFckN%2BvnO7J0XDVTgl%2BAlufxYfgawiodxmSErKKiu1iT0lbvKc2QGM51Qo%2FwVYzdS940q%2B1Kb5Q7MuBuVxvLJfBznwb6TZmJSPToNWjSmfDcqjM7ToWiPUunFPlXKLj8TVlnBc8Ss9gACzySSepA3W4aYDd3PoRVUAWL3kbw%2B0WBJo8Z%2BWBHwXsrvIG9w1nN4Kknoyo6YY6I0jwi%2F1xXnkgJLEgFcaYVnNIvV7peyZf67rEc1D1%2BBCS70iBEFHFO%2F01ExZ8oYZebr2IJOQEpl0sEJLQUvku5JE211wmfLIOaDSZKPfi4Ey8OeVqqBeFZnFokPt0w32c08HSZ1pDMU7V0uH9OW6oSkVwD6PNgy9q%2BO3n68K72lfxxF3R1boPVfxlOt7r6v9mZwQ2Q6aSFYXQxphhGZSHijh8CwMDeKEVpVJVneZdcwqPBB6xSihFM2QOxYJQoET2xflmTX0ILR5V9kZuQkhCfy1pAmciBpaOG5lRBWauxtZy1myNU%2BBWoGd5%2BCKI9hHwGtJxzsBxKWla2b1f1tUkIodqhGeDCh6tzEBjqkAWqpnSmDtid1ZxTxTY4XbCuTAX0iXGF8gZwHBJfjEalToSQ7JdByFPZrsz3kU7EXutnu0pECX0KBt5bSK8vN4PtQ8Rhahzf2X8%2BZRQp2dzNx1FplfiQyEFuAlzUcMjZO8uYR0Nzfu2FsjZw5mjiSrqrJRdHmosHr2ScG5LzpvCV7TCzpL4HDTCuTeor%2FXQDG3Ltwm8rdXFAW7WUW688XBKg5WaVk&X-Amz-Signature=2f4e539a40ac38c165daa072104085e4c36b5799d57aab379d0ec7384ff9ebcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUSTSF4U%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0d4qAz26rlelTFPuk377m59kttuUdE0ewBG0zGtolXAIhAJl0vpYCXtVHnEJCemxR7ge%2FNyG8exz%2FhHq1C84hb8uJKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQfEOMWkqifWG7XXsq3AMMLjRALH9XCzRCW%2BFEyShdh1edAOeBph5F7IomhkcRZe6lAPRwK2IRjw5WMmgxooIPF3JaVhbKPOiVxQOZTwxtFckN%2BvnO7J0XDVTgl%2BAlufxYfgawiodxmSErKKiu1iT0lbvKc2QGM51Qo%2FwVYzdS940q%2B1Kb5Q7MuBuVxvLJfBznwb6TZmJSPToNWjSmfDcqjM7ToWiPUunFPlXKLj8TVlnBc8Ss9gACzySSepA3W4aYDd3PoRVUAWL3kbw%2B0WBJo8Z%2BWBHwXsrvIG9w1nN4Kknoyo6YY6I0jwi%2F1xXnkgJLEgFcaYVnNIvV7peyZf67rEc1D1%2BBCS70iBEFHFO%2F01ExZ8oYZebr2IJOQEpl0sEJLQUvku5JE211wmfLIOaDSZKPfi4Ey8OeVqqBeFZnFokPt0w32c08HSZ1pDMU7V0uH9OW6oSkVwD6PNgy9q%2BO3n68K72lfxxF3R1boPVfxlOt7r6v9mZwQ2Q6aSFYXQxphhGZSHijh8CwMDeKEVpVJVneZdcwqPBB6xSihFM2QOxYJQoET2xflmTX0ILR5V9kZuQkhCfy1pAmciBpaOG5lRBWauxtZy1myNU%2BBWoGd5%2BCKI9hHwGtJxzsBxKWla2b1f1tUkIodqhGeDCh6tzEBjqkAWqpnSmDtid1ZxTxTY4XbCuTAX0iXGF8gZwHBJfjEalToSQ7JdByFPZrsz3kU7EXutnu0pECX0KBt5bSK8vN4PtQ8Rhahzf2X8%2BZRQp2dzNx1FplfiQyEFuAlzUcMjZO8uYR0Nzfu2FsjZw5mjiSrqrJRdHmosHr2ScG5LzpvCV7TCzpL4HDTCuTeor%2FXQDG3Ltwm8rdXFAW7WUW688XBKg5WaVk&X-Amz-Signature=78d959060a4ec79bd46b5a91a709c569c7728005fb2b9973a7c762370bc7c9e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUSTSF4U%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0d4qAz26rlelTFPuk377m59kttuUdE0ewBG0zGtolXAIhAJl0vpYCXtVHnEJCemxR7ge%2FNyG8exz%2FhHq1C84hb8uJKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQfEOMWkqifWG7XXsq3AMMLjRALH9XCzRCW%2BFEyShdh1edAOeBph5F7IomhkcRZe6lAPRwK2IRjw5WMmgxooIPF3JaVhbKPOiVxQOZTwxtFckN%2BvnO7J0XDVTgl%2BAlufxYfgawiodxmSErKKiu1iT0lbvKc2QGM51Qo%2FwVYzdS940q%2B1Kb5Q7MuBuVxvLJfBznwb6TZmJSPToNWjSmfDcqjM7ToWiPUunFPlXKLj8TVlnBc8Ss9gACzySSepA3W4aYDd3PoRVUAWL3kbw%2B0WBJo8Z%2BWBHwXsrvIG9w1nN4Kknoyo6YY6I0jwi%2F1xXnkgJLEgFcaYVnNIvV7peyZf67rEc1D1%2BBCS70iBEFHFO%2F01ExZ8oYZebr2IJOQEpl0sEJLQUvku5JE211wmfLIOaDSZKPfi4Ey8OeVqqBeFZnFokPt0w32c08HSZ1pDMU7V0uH9OW6oSkVwD6PNgy9q%2BO3n68K72lfxxF3R1boPVfxlOt7r6v9mZwQ2Q6aSFYXQxphhGZSHijh8CwMDeKEVpVJVneZdcwqPBB6xSihFM2QOxYJQoET2xflmTX0ILR5V9kZuQkhCfy1pAmciBpaOG5lRBWauxtZy1myNU%2BBWoGd5%2BCKI9hHwGtJxzsBxKWla2b1f1tUkIodqhGeDCh6tzEBjqkAWqpnSmDtid1ZxTxTY4XbCuTAX0iXGF8gZwHBJfjEalToSQ7JdByFPZrsz3kU7EXutnu0pECX0KBt5bSK8vN4PtQ8Rhahzf2X8%2BZRQp2dzNx1FplfiQyEFuAlzUcMjZO8uYR0Nzfu2FsjZw5mjiSrqrJRdHmosHr2ScG5LzpvCV7TCzpL4HDTCuTeor%2FXQDG3Ltwm8rdXFAW7WUW688XBKg5WaVk&X-Amz-Signature=abe7e03e2e6e591d4c19f94bc0f34fbe1ddbba763e53ddc15a05037f56d31a4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
