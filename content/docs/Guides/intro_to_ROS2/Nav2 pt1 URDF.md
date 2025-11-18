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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CRPYCU%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgrljDEwdi5X5JgeQ92ayI0tg0Edkz45X%2BMetvehU0KAiBuNWwOjk0RIC8SKRxU3Go%2FyQoeji90Qqy9CLpsB4aSYiqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMePxZYmD%2B5M4VRpHdKtwDBQDM0H3HVUEF3NvqGsrbpzqPR2ymZSMzLRwOtbFW%2FD328PfLRxyO9Hzbi6qk53Xm8G%2BdLM32KqKdQ5lNF%2Ff6i6oo0JRQs5StybIOgRv8GRG1AaVMzzTZyqdiJ0e2SVkVABfqc2oDPzylnk91IgnPet5%2BCY%2BbeQMVMIAqY1%2F6lBfpJRHnHf70A%2Fx2xqcTRFbiln7RrCwg%2FsRnfaBrAKIYfELtU7QFq7OLLllzr8jpMVt7mYEHeq97e7xchX5xgr4%2BLlAPaZFtqhcvNyfATe0DuZMVm2MSO7cxM4FUL0Zg4PvFaPSFsIpcQWJRE9E5gelK4nyNxBsBapuzqGe%2B5uiIgZTTkcj6Rw6Z%2FF0wNA8zK7QUYsfWTBuG4szHDV%2By9SknS%2FzxDT%2BMf3pS9p3k00tFAm0Ql4QASnoBykCkWrDs9BmpIciOeJd2kREtRO55sWE0i0OA1OKhQEy%2BvfoLBjHg%2BIBQ5rI7nNPbMPWjJug9iNH9CuID%2BrdqZvPWakkhJRQPNA2zgovHiXqQFpShQIr8rYPO1UausU4xW8IY3A4JqRw1ribWVThvBWdwLo%2Bw%2BidNV%2B8EUmHq9SoO7Zxw2BIut87SICR16R5XO1AZaZQzBbPRN7e57oULd9pT1rQwqZnvyAY6pgG2utEl5RC6webgv85Vrl7cdGCMGZEbttrHccmyVLOIQZ9VxUfeLq6%2BsmBYnJMTbSTYgh3Etce1f28qsLk6RsIywkTOCvkv8WEOQaDQ9ba%2BpJOdhyPrKZRKqZGsKZ0sV6OriHr61WosrcS1vADRUMQQ3r1lcGY67r0jvsNqn9RUbVp7KKoIq3%2F6Cl%2BWzwdTlRtxc2Wa7WeRXeyDae%2Fun1NnsGhma%2FcE&X-Amz-Signature=44413c5339d01294495d9c0a9b113d9c749784469881a2fc8c92a176f8d9958e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CRPYCU%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgrljDEwdi5X5JgeQ92ayI0tg0Edkz45X%2BMetvehU0KAiBuNWwOjk0RIC8SKRxU3Go%2FyQoeji90Qqy9CLpsB4aSYiqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMePxZYmD%2B5M4VRpHdKtwDBQDM0H3HVUEF3NvqGsrbpzqPR2ymZSMzLRwOtbFW%2FD328PfLRxyO9Hzbi6qk53Xm8G%2BdLM32KqKdQ5lNF%2Ff6i6oo0JRQs5StybIOgRv8GRG1AaVMzzTZyqdiJ0e2SVkVABfqc2oDPzylnk91IgnPet5%2BCY%2BbeQMVMIAqY1%2F6lBfpJRHnHf70A%2Fx2xqcTRFbiln7RrCwg%2FsRnfaBrAKIYfELtU7QFq7OLLllzr8jpMVt7mYEHeq97e7xchX5xgr4%2BLlAPaZFtqhcvNyfATe0DuZMVm2MSO7cxM4FUL0Zg4PvFaPSFsIpcQWJRE9E5gelK4nyNxBsBapuzqGe%2B5uiIgZTTkcj6Rw6Z%2FF0wNA8zK7QUYsfWTBuG4szHDV%2By9SknS%2FzxDT%2BMf3pS9p3k00tFAm0Ql4QASnoBykCkWrDs9BmpIciOeJd2kREtRO55sWE0i0OA1OKhQEy%2BvfoLBjHg%2BIBQ5rI7nNPbMPWjJug9iNH9CuID%2BrdqZvPWakkhJRQPNA2zgovHiXqQFpShQIr8rYPO1UausU4xW8IY3A4JqRw1ribWVThvBWdwLo%2Bw%2BidNV%2B8EUmHq9SoO7Zxw2BIut87SICR16R5XO1AZaZQzBbPRN7e57oULd9pT1rQwqZnvyAY6pgG2utEl5RC6webgv85Vrl7cdGCMGZEbttrHccmyVLOIQZ9VxUfeLq6%2BsmBYnJMTbSTYgh3Etce1f28qsLk6RsIywkTOCvkv8WEOQaDQ9ba%2BpJOdhyPrKZRKqZGsKZ0sV6OriHr61WosrcS1vADRUMQQ3r1lcGY67r0jvsNqn9RUbVp7KKoIq3%2F6Cl%2BWzwdTlRtxc2Wa7WeRXeyDae%2Fun1NnsGhma%2FcE&X-Amz-Signature=342a23e3ecdbd57befb5eb75e337b6667c757dce64183c51eb887dad86a998aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CRPYCU%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgrljDEwdi5X5JgeQ92ayI0tg0Edkz45X%2BMetvehU0KAiBuNWwOjk0RIC8SKRxU3Go%2FyQoeji90Qqy9CLpsB4aSYiqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMePxZYmD%2B5M4VRpHdKtwDBQDM0H3HVUEF3NvqGsrbpzqPR2ymZSMzLRwOtbFW%2FD328PfLRxyO9Hzbi6qk53Xm8G%2BdLM32KqKdQ5lNF%2Ff6i6oo0JRQs5StybIOgRv8GRG1AaVMzzTZyqdiJ0e2SVkVABfqc2oDPzylnk91IgnPet5%2BCY%2BbeQMVMIAqY1%2F6lBfpJRHnHf70A%2Fx2xqcTRFbiln7RrCwg%2FsRnfaBrAKIYfELtU7QFq7OLLllzr8jpMVt7mYEHeq97e7xchX5xgr4%2BLlAPaZFtqhcvNyfATe0DuZMVm2MSO7cxM4FUL0Zg4PvFaPSFsIpcQWJRE9E5gelK4nyNxBsBapuzqGe%2B5uiIgZTTkcj6Rw6Z%2FF0wNA8zK7QUYsfWTBuG4szHDV%2By9SknS%2FzxDT%2BMf3pS9p3k00tFAm0Ql4QASnoBykCkWrDs9BmpIciOeJd2kREtRO55sWE0i0OA1OKhQEy%2BvfoLBjHg%2BIBQ5rI7nNPbMPWjJug9iNH9CuID%2BrdqZvPWakkhJRQPNA2zgovHiXqQFpShQIr8rYPO1UausU4xW8IY3A4JqRw1ribWVThvBWdwLo%2Bw%2BidNV%2B8EUmHq9SoO7Zxw2BIut87SICR16R5XO1AZaZQzBbPRN7e57oULd9pT1rQwqZnvyAY6pgG2utEl5RC6webgv85Vrl7cdGCMGZEbttrHccmyVLOIQZ9VxUfeLq6%2BsmBYnJMTbSTYgh3Etce1f28qsLk6RsIywkTOCvkv8WEOQaDQ9ba%2BpJOdhyPrKZRKqZGsKZ0sV6OriHr61WosrcS1vADRUMQQ3r1lcGY67r0jvsNqn9RUbVp7KKoIq3%2F6Cl%2BWzwdTlRtxc2Wa7WeRXeyDae%2Fun1NnsGhma%2FcE&X-Amz-Signature=10243ffd53bb49b2df92d1e786419ce3d2d983db9a848b4cd51937d056d161e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CRPYCU%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgrljDEwdi5X5JgeQ92ayI0tg0Edkz45X%2BMetvehU0KAiBuNWwOjk0RIC8SKRxU3Go%2FyQoeji90Qqy9CLpsB4aSYiqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMePxZYmD%2B5M4VRpHdKtwDBQDM0H3HVUEF3NvqGsrbpzqPR2ymZSMzLRwOtbFW%2FD328PfLRxyO9Hzbi6qk53Xm8G%2BdLM32KqKdQ5lNF%2Ff6i6oo0JRQs5StybIOgRv8GRG1AaVMzzTZyqdiJ0e2SVkVABfqc2oDPzylnk91IgnPet5%2BCY%2BbeQMVMIAqY1%2F6lBfpJRHnHf70A%2Fx2xqcTRFbiln7RrCwg%2FsRnfaBrAKIYfELtU7QFq7OLLllzr8jpMVt7mYEHeq97e7xchX5xgr4%2BLlAPaZFtqhcvNyfATe0DuZMVm2MSO7cxM4FUL0Zg4PvFaPSFsIpcQWJRE9E5gelK4nyNxBsBapuzqGe%2B5uiIgZTTkcj6Rw6Z%2FF0wNA8zK7QUYsfWTBuG4szHDV%2By9SknS%2FzxDT%2BMf3pS9p3k00tFAm0Ql4QASnoBykCkWrDs9BmpIciOeJd2kREtRO55sWE0i0OA1OKhQEy%2BvfoLBjHg%2BIBQ5rI7nNPbMPWjJug9iNH9CuID%2BrdqZvPWakkhJRQPNA2zgovHiXqQFpShQIr8rYPO1UausU4xW8IY3A4JqRw1ribWVThvBWdwLo%2Bw%2BidNV%2B8EUmHq9SoO7Zxw2BIut87SICR16R5XO1AZaZQzBbPRN7e57oULd9pT1rQwqZnvyAY6pgG2utEl5RC6webgv85Vrl7cdGCMGZEbttrHccmyVLOIQZ9VxUfeLq6%2BsmBYnJMTbSTYgh3Etce1f28qsLk6RsIywkTOCvkv8WEOQaDQ9ba%2BpJOdhyPrKZRKqZGsKZ0sV6OriHr61WosrcS1vADRUMQQ3r1lcGY67r0jvsNqn9RUbVp7KKoIq3%2F6Cl%2BWzwdTlRtxc2Wa7WeRXeyDae%2Fun1NnsGhma%2FcE&X-Amz-Signature=32f6f7f1b8e3672fed6f0a2d7a366b31346c9fb19e81c2bca6a94d0c6df8767d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CRPYCU%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgrljDEwdi5X5JgeQ92ayI0tg0Edkz45X%2BMetvehU0KAiBuNWwOjk0RIC8SKRxU3Go%2FyQoeji90Qqy9CLpsB4aSYiqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMePxZYmD%2B5M4VRpHdKtwDBQDM0H3HVUEF3NvqGsrbpzqPR2ymZSMzLRwOtbFW%2FD328PfLRxyO9Hzbi6qk53Xm8G%2BdLM32KqKdQ5lNF%2Ff6i6oo0JRQs5StybIOgRv8GRG1AaVMzzTZyqdiJ0e2SVkVABfqc2oDPzylnk91IgnPet5%2BCY%2BbeQMVMIAqY1%2F6lBfpJRHnHf70A%2Fx2xqcTRFbiln7RrCwg%2FsRnfaBrAKIYfELtU7QFq7OLLllzr8jpMVt7mYEHeq97e7xchX5xgr4%2BLlAPaZFtqhcvNyfATe0DuZMVm2MSO7cxM4FUL0Zg4PvFaPSFsIpcQWJRE9E5gelK4nyNxBsBapuzqGe%2B5uiIgZTTkcj6Rw6Z%2FF0wNA8zK7QUYsfWTBuG4szHDV%2By9SknS%2FzxDT%2BMf3pS9p3k00tFAm0Ql4QASnoBykCkWrDs9BmpIciOeJd2kREtRO55sWE0i0OA1OKhQEy%2BvfoLBjHg%2BIBQ5rI7nNPbMPWjJug9iNH9CuID%2BrdqZvPWakkhJRQPNA2zgovHiXqQFpShQIr8rYPO1UausU4xW8IY3A4JqRw1ribWVThvBWdwLo%2Bw%2BidNV%2B8EUmHq9SoO7Zxw2BIut87SICR16R5XO1AZaZQzBbPRN7e57oULd9pT1rQwqZnvyAY6pgG2utEl5RC6webgv85Vrl7cdGCMGZEbttrHccmyVLOIQZ9VxUfeLq6%2BsmBYnJMTbSTYgh3Etce1f28qsLk6RsIywkTOCvkv8WEOQaDQ9ba%2BpJOdhyPrKZRKqZGsKZ0sV6OriHr61WosrcS1vADRUMQQ3r1lcGY67r0jvsNqn9RUbVp7KKoIq3%2F6Cl%2BWzwdTlRtxc2Wa7WeRXeyDae%2Fun1NnsGhma%2FcE&X-Amz-Signature=e5aa8e9ac62f2c85a83b11da0039638f0750dd2c30dd2f5229ca0da822d121b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CRPYCU%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgrljDEwdi5X5JgeQ92ayI0tg0Edkz45X%2BMetvehU0KAiBuNWwOjk0RIC8SKRxU3Go%2FyQoeji90Qqy9CLpsB4aSYiqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMePxZYmD%2B5M4VRpHdKtwDBQDM0H3HVUEF3NvqGsrbpzqPR2ymZSMzLRwOtbFW%2FD328PfLRxyO9Hzbi6qk53Xm8G%2BdLM32KqKdQ5lNF%2Ff6i6oo0JRQs5StybIOgRv8GRG1AaVMzzTZyqdiJ0e2SVkVABfqc2oDPzylnk91IgnPet5%2BCY%2BbeQMVMIAqY1%2F6lBfpJRHnHf70A%2Fx2xqcTRFbiln7RrCwg%2FsRnfaBrAKIYfELtU7QFq7OLLllzr8jpMVt7mYEHeq97e7xchX5xgr4%2BLlAPaZFtqhcvNyfATe0DuZMVm2MSO7cxM4FUL0Zg4PvFaPSFsIpcQWJRE9E5gelK4nyNxBsBapuzqGe%2B5uiIgZTTkcj6Rw6Z%2FF0wNA8zK7QUYsfWTBuG4szHDV%2By9SknS%2FzxDT%2BMf3pS9p3k00tFAm0Ql4QASnoBykCkWrDs9BmpIciOeJd2kREtRO55sWE0i0OA1OKhQEy%2BvfoLBjHg%2BIBQ5rI7nNPbMPWjJug9iNH9CuID%2BrdqZvPWakkhJRQPNA2zgovHiXqQFpShQIr8rYPO1UausU4xW8IY3A4JqRw1ribWVThvBWdwLo%2Bw%2BidNV%2B8EUmHq9SoO7Zxw2BIut87SICR16R5XO1AZaZQzBbPRN7e57oULd9pT1rQwqZnvyAY6pgG2utEl5RC6webgv85Vrl7cdGCMGZEbttrHccmyVLOIQZ9VxUfeLq6%2BsmBYnJMTbSTYgh3Etce1f28qsLk6RsIywkTOCvkv8WEOQaDQ9ba%2BpJOdhyPrKZRKqZGsKZ0sV6OriHr61WosrcS1vADRUMQQ3r1lcGY67r0jvsNqn9RUbVp7KKoIq3%2F6Cl%2BWzwdTlRtxc2Wa7WeRXeyDae%2Fun1NnsGhma%2FcE&X-Amz-Signature=52410dd267da5fe4b0cb7f71b4edf6fb79d729c53ce89e801759c798d18f54f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CRPYCU%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgrljDEwdi5X5JgeQ92ayI0tg0Edkz45X%2BMetvehU0KAiBuNWwOjk0RIC8SKRxU3Go%2FyQoeji90Qqy9CLpsB4aSYiqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMePxZYmD%2B5M4VRpHdKtwDBQDM0H3HVUEF3NvqGsrbpzqPR2ymZSMzLRwOtbFW%2FD328PfLRxyO9Hzbi6qk53Xm8G%2BdLM32KqKdQ5lNF%2Ff6i6oo0JRQs5StybIOgRv8GRG1AaVMzzTZyqdiJ0e2SVkVABfqc2oDPzylnk91IgnPet5%2BCY%2BbeQMVMIAqY1%2F6lBfpJRHnHf70A%2Fx2xqcTRFbiln7RrCwg%2FsRnfaBrAKIYfELtU7QFq7OLLllzr8jpMVt7mYEHeq97e7xchX5xgr4%2BLlAPaZFtqhcvNyfATe0DuZMVm2MSO7cxM4FUL0Zg4PvFaPSFsIpcQWJRE9E5gelK4nyNxBsBapuzqGe%2B5uiIgZTTkcj6Rw6Z%2FF0wNA8zK7QUYsfWTBuG4szHDV%2By9SknS%2FzxDT%2BMf3pS9p3k00tFAm0Ql4QASnoBykCkWrDs9BmpIciOeJd2kREtRO55sWE0i0OA1OKhQEy%2BvfoLBjHg%2BIBQ5rI7nNPbMPWjJug9iNH9CuID%2BrdqZvPWakkhJRQPNA2zgovHiXqQFpShQIr8rYPO1UausU4xW8IY3A4JqRw1ribWVThvBWdwLo%2Bw%2BidNV%2B8EUmHq9SoO7Zxw2BIut87SICR16R5XO1AZaZQzBbPRN7e57oULd9pT1rQwqZnvyAY6pgG2utEl5RC6webgv85Vrl7cdGCMGZEbttrHccmyVLOIQZ9VxUfeLq6%2BsmBYnJMTbSTYgh3Etce1f28qsLk6RsIywkTOCvkv8WEOQaDQ9ba%2BpJOdhyPrKZRKqZGsKZ0sV6OriHr61WosrcS1vADRUMQQ3r1lcGY67r0jvsNqn9RUbVp7KKoIq3%2F6Cl%2BWzwdTlRtxc2Wa7WeRXeyDae%2Fun1NnsGhma%2FcE&X-Amz-Signature=b3aa5f0e6ba83d1b64649a13c273093c4b13975ddc748a573dfad47891ab2d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CRPYCU%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgrljDEwdi5X5JgeQ92ayI0tg0Edkz45X%2BMetvehU0KAiBuNWwOjk0RIC8SKRxU3Go%2FyQoeji90Qqy9CLpsB4aSYiqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMePxZYmD%2B5M4VRpHdKtwDBQDM0H3HVUEF3NvqGsrbpzqPR2ymZSMzLRwOtbFW%2FD328PfLRxyO9Hzbi6qk53Xm8G%2BdLM32KqKdQ5lNF%2Ff6i6oo0JRQs5StybIOgRv8GRG1AaVMzzTZyqdiJ0e2SVkVABfqc2oDPzylnk91IgnPet5%2BCY%2BbeQMVMIAqY1%2F6lBfpJRHnHf70A%2Fx2xqcTRFbiln7RrCwg%2FsRnfaBrAKIYfELtU7QFq7OLLllzr8jpMVt7mYEHeq97e7xchX5xgr4%2BLlAPaZFtqhcvNyfATe0DuZMVm2MSO7cxM4FUL0Zg4PvFaPSFsIpcQWJRE9E5gelK4nyNxBsBapuzqGe%2B5uiIgZTTkcj6Rw6Z%2FF0wNA8zK7QUYsfWTBuG4szHDV%2By9SknS%2FzxDT%2BMf3pS9p3k00tFAm0Ql4QASnoBykCkWrDs9BmpIciOeJd2kREtRO55sWE0i0OA1OKhQEy%2BvfoLBjHg%2BIBQ5rI7nNPbMPWjJug9iNH9CuID%2BrdqZvPWakkhJRQPNA2zgovHiXqQFpShQIr8rYPO1UausU4xW8IY3A4JqRw1ribWVThvBWdwLo%2Bw%2BidNV%2B8EUmHq9SoO7Zxw2BIut87SICR16R5XO1AZaZQzBbPRN7e57oULd9pT1rQwqZnvyAY6pgG2utEl5RC6webgv85Vrl7cdGCMGZEbttrHccmyVLOIQZ9VxUfeLq6%2BsmBYnJMTbSTYgh3Etce1f28qsLk6RsIywkTOCvkv8WEOQaDQ9ba%2BpJOdhyPrKZRKqZGsKZ0sV6OriHr61WosrcS1vADRUMQQ3r1lcGY67r0jvsNqn9RUbVp7KKoIq3%2F6Cl%2BWzwdTlRtxc2Wa7WeRXeyDae%2Fun1NnsGhma%2FcE&X-Amz-Signature=285c51307c12c4a6de70fad93c1e41a4681b2228034da8d99b287a120cb62d40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CRPYCU%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgrljDEwdi5X5JgeQ92ayI0tg0Edkz45X%2BMetvehU0KAiBuNWwOjk0RIC8SKRxU3Go%2FyQoeji90Qqy9CLpsB4aSYiqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMePxZYmD%2B5M4VRpHdKtwDBQDM0H3HVUEF3NvqGsrbpzqPR2ymZSMzLRwOtbFW%2FD328PfLRxyO9Hzbi6qk53Xm8G%2BdLM32KqKdQ5lNF%2Ff6i6oo0JRQs5StybIOgRv8GRG1AaVMzzTZyqdiJ0e2SVkVABfqc2oDPzylnk91IgnPet5%2BCY%2BbeQMVMIAqY1%2F6lBfpJRHnHf70A%2Fx2xqcTRFbiln7RrCwg%2FsRnfaBrAKIYfELtU7QFq7OLLllzr8jpMVt7mYEHeq97e7xchX5xgr4%2BLlAPaZFtqhcvNyfATe0DuZMVm2MSO7cxM4FUL0Zg4PvFaPSFsIpcQWJRE9E5gelK4nyNxBsBapuzqGe%2B5uiIgZTTkcj6Rw6Z%2FF0wNA8zK7QUYsfWTBuG4szHDV%2By9SknS%2FzxDT%2BMf3pS9p3k00tFAm0Ql4QASnoBykCkWrDs9BmpIciOeJd2kREtRO55sWE0i0OA1OKhQEy%2BvfoLBjHg%2BIBQ5rI7nNPbMPWjJug9iNH9CuID%2BrdqZvPWakkhJRQPNA2zgovHiXqQFpShQIr8rYPO1UausU4xW8IY3A4JqRw1ribWVThvBWdwLo%2Bw%2BidNV%2B8EUmHq9SoO7Zxw2BIut87SICR16R5XO1AZaZQzBbPRN7e57oULd9pT1rQwqZnvyAY6pgG2utEl5RC6webgv85Vrl7cdGCMGZEbttrHccmyVLOIQZ9VxUfeLq6%2BsmBYnJMTbSTYgh3Etce1f28qsLk6RsIywkTOCvkv8WEOQaDQ9ba%2BpJOdhyPrKZRKqZGsKZ0sV6OriHr61WosrcS1vADRUMQQ3r1lcGY67r0jvsNqn9RUbVp7KKoIq3%2F6Cl%2BWzwdTlRtxc2Wa7WeRXeyDae%2Fun1NnsGhma%2FcE&X-Amz-Signature=010b3a35b8e8377c157d8ec91f70ceb910c66bc06b581b37aa609d2f12ee665a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CRPYCU%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgrljDEwdi5X5JgeQ92ayI0tg0Edkz45X%2BMetvehU0KAiBuNWwOjk0RIC8SKRxU3Go%2FyQoeji90Qqy9CLpsB4aSYiqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMePxZYmD%2B5M4VRpHdKtwDBQDM0H3HVUEF3NvqGsrbpzqPR2ymZSMzLRwOtbFW%2FD328PfLRxyO9Hzbi6qk53Xm8G%2BdLM32KqKdQ5lNF%2Ff6i6oo0JRQs5StybIOgRv8GRG1AaVMzzTZyqdiJ0e2SVkVABfqc2oDPzylnk91IgnPet5%2BCY%2BbeQMVMIAqY1%2F6lBfpJRHnHf70A%2Fx2xqcTRFbiln7RrCwg%2FsRnfaBrAKIYfELtU7QFq7OLLllzr8jpMVt7mYEHeq97e7xchX5xgr4%2BLlAPaZFtqhcvNyfATe0DuZMVm2MSO7cxM4FUL0Zg4PvFaPSFsIpcQWJRE9E5gelK4nyNxBsBapuzqGe%2B5uiIgZTTkcj6Rw6Z%2FF0wNA8zK7QUYsfWTBuG4szHDV%2By9SknS%2FzxDT%2BMf3pS9p3k00tFAm0Ql4QASnoBykCkWrDs9BmpIciOeJd2kREtRO55sWE0i0OA1OKhQEy%2BvfoLBjHg%2BIBQ5rI7nNPbMPWjJug9iNH9CuID%2BrdqZvPWakkhJRQPNA2zgovHiXqQFpShQIr8rYPO1UausU4xW8IY3A4JqRw1ribWVThvBWdwLo%2Bw%2BidNV%2B8EUmHq9SoO7Zxw2BIut87SICR16R5XO1AZaZQzBbPRN7e57oULd9pT1rQwqZnvyAY6pgG2utEl5RC6webgv85Vrl7cdGCMGZEbttrHccmyVLOIQZ9VxUfeLq6%2BsmBYnJMTbSTYgh3Etce1f28qsLk6RsIywkTOCvkv8WEOQaDQ9ba%2BpJOdhyPrKZRKqZGsKZ0sV6OriHr61WosrcS1vADRUMQQ3r1lcGY67r0jvsNqn9RUbVp7KKoIq3%2F6Cl%2BWzwdTlRtxc2Wa7WeRXeyDae%2Fun1NnsGhma%2FcE&X-Amz-Signature=6187b3d75bfcbc9682a21648e51aaf5081e0f471934441933051b3834ef727cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5LBXTK6%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCevMigNIFyefX%2B7jGA3kafW01B8Pt%2FNssyi0mYM9JptQIgKWUoeWwpgmFwIyOI9FY2ltbJM3%2B4IKTToK5JwqD%2BlUAqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuNm5Ue6qPvkNAndCrcA2h6D9r5cebjbFoT90zYWiEdDNqD%2F4x4m1hEpl%2FuutxKkgih8EhvOKvhSfcZDemtxHuetlkF1pZkEIjKZSTz%2FFMEC2Pa9D2qAemYgsuZWCymazKqLUSLzaSDnlrpNqnK2vMMgOzbSWE%2BdXfUdf9MHUPMXxKpBU%2B9BLE%2BkCZn6aqHtEs%2FwTXXH4lnGN0ahJgYiUonHwrJSSBT723m%2F1x53gVgV%2F%2BXZ0tf67KuioAiJXR%2FAWIpq41niNPN5JolL8BgZW9bi6hFTJdmATV5eRtHS2g9jocwETd3cjLdzIis2%2BPg3hk0iOR8T3aPoHE1dk6DS8baFz3MowQ%2F92xwIJiLQWY7jy8jRV4WwcnqhFHvRH%2FAN9p46jTd8AcE2YMt4XBT54WVAf3v0Yc3CcqNGpbXe1jgqcxZA55O0KRLa2l8KhCXZ8J97wsyJNyL%2BjNDd8cwFSeQ%2Bi0moWTLNha7KDpThQpGwA26VHzyuD4wMQD1P0RFWda2EtHfl0JldOS9t%2FKDyaf2mIBM3IehrjkBJElPwK57i6sOhhUTvLwitlx9YwlxRGSBUioopvAXQa1V4EihD78Rlr9TZTlBHszOij0V63anLKmrlfDp6%2FAVtmuEZMsArRFgn7ydfhwVAG6CMIqY78gGOqUBbIy7ycLqsDnjl2WPr8VEJmdkaHgn9xgVwHMV3nn2OrlplgkwEh%2FfR8EaheuPTf3NhAH2lUUVdtDtV%2FQRH71A6lvEt1MaJDF0nono3a4WybLeuex6zlKR1bVyAWmAB1c19LOivynaD1XBYjx3e5hxMCwgSTcdNSdSrbzguzSkEwlCXvhaT7VBbhUDVyx5pqMwVjAvnCZwMOCuGOmqT2Kp17zAMUyw&X-Amz-Signature=2a54fa4fb58e127d5027096fe98479901cb2a9c57f5b8a32726a4fe590873194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E6AZZCV%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZCVzTOb4lQjYux3%2FpWbOrul%2BYmip4cJCMvth30bjJPAiEAlDG6A1xsiyrX0t%2B91TqvGKxxR2wdx8%2BjpQyqt%2Fml%2BRUqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCF36kU0PDdQ47jMDSrcA5SdHy%2FMhOUOaTihAGRBMnyeEyTA4F3AUD3HeO84yos%2BLHioAic26Q%2FoxKCHU5qsXs%2FR8VIUjV0Q4Xx8EhDZ2TlOrxoibx1Ur7kMqLt0KGccd9lWHLrWRW1rh3QLDezL6KXeMPa14vtjmCz%2F%2BrwtcaFRkSxwVe5N%2BkqIphhdElXQgY3Prkh5BJxTjXVx%2BBdWmyMRZeSwuoql%2BMy5fsU24cmgTzP79D2kg0h5M1EqzPA9Z3IiTG9Swna9srz57vBQec4GB9qJiMj4gz2Tk3YizJMsSN4SLlAx71yhOmje6My%2Bqw1VBsPk4axhUAtPS%2FQG6wRjGvPHDd0ZQfltTuulJo6fs77e2KwqzrXMAWNhF9RuxTSVa3X2uyDJ8ogqhsK09KhpdSXduZ5paJiQvmdt2ZZZn1LSiogbnX1W6fKMot6DyQ4UqRnBGpsKaYeN%2B6gBkS%2B%2BFNOvLjspKlQxWy3Sxm%2BdB4s%2BhOVKkumvyCeiZAyOGR%2FCgeXJNjnmtcqS%2ByCf8iOYYbqv1bR3uKFFJtAOe1VHWkOJUxV%2B3auxv%2BiQf4bXNMqkToM3MnQ54TaiYwC2Qb7z%2BKYH78OSy6e390Vw2I4dRVfDbZGLxcMyQCTKGwVGxvujn%2B7em%2FMknluQMKGZ78gGOqUBOnDP%2FLmPbw1DtrDIgZaWjjFO86Iy7ini7gJ00gjufKRvgjRgAH45ee8zQSIJf6NU8CKHTWh7oU05O89sHDAO2%2FkYvfk%2BB2I7V4C2C3rB2CloGW%2Bqfi%2Fq3bilKk3v45gn1OtByDM1pbC4Uje8cTmkw1K2SdY9KApeBxk859m9p07rljqypzCdRpnwKCKOuinpftDiH0jwHBg%2BmMx3mgc9dmdJrqYG&X-Amz-Signature=97e7b30ad44ff6b3920b8688c5c7ae7fb532d7ab2f15244bddfd7b6b8b8a5e4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YYF6GO4%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7FhRYV72Cloj7BSJx9lKEN2ylKfzC7X1Oe2bz2gFmdAiA5bdIEh0SaeMAr6HBcHjCsPuJtvUqQ7V%2B%2FwhqH%2FHRq4CqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMght1mIFvlcYKt9xqKtwDYz35bgKVaSGs59tVcwXM0RiAHv9MZHgz%2BnnINBPQXFk4b%2FhglLr81sRjRn2mZZYQAJ2iOmnkEc74TO7Ukzhgh9oKEBmhqVs%2F1lAd4lhQuZ7fYVAvEg745hKshdC9ie%2FwQh4CFWVuJzgMict44U3cBhsRyITe2UMSfG1BGHyImR3ZBrc4kmUFNd%2BqPnLFZGeif0iMuWOR8Mi969A57garkFl4bBRC71z0L2TVLHf6C1xOU%2BIJsj6%2FWl7A27CHD%2BT63zwaKIHkmQuZs795iEbB258yLL4ZqOMxXAzWEx0dAy6TLQfqT5zzBfwIDKo8ne%2F2fPglqRskTmaoOOJHBHw3ruAgUudMgJKnD0trtSwKcGXM1zc%2FVqClaVDXa1EZcMGp5hQme9JengYIJgLcwSTIo0UwRhMaDiI2MIBoi0C%2F8g5xlw%2Bjh2Bvq1A5GklrMqLabDMdHNpFLEtxiw%2BscJi27ckjan6htUtk%2BnXx4eCVsrEu5zgOfrVL7%2B7633rE4CUGPnzUVgmmD3kSFRpTwk6N%2F8wQkxNDa2fmtFvUy8JqLGGx23DYTS4hMr16bzhape41BpMtrKx9%2BAsUTkJHTnpMhnLgZ3QdI%2FKU5Gbj51OEWHIzhVAQ14y6Sy7%2BdiQw7JfvyAY6pgHIPGUWn1PZ7CJztu7ljqP85jK%2Bpe4Siyii8RJrTr2idWCC7XjTxscoCbZDqHOqV%2FunfZ92%2FqTocRue%2FYA5aLf9QIKIibXjgswQ1IAmXx2lmHWt4WFo8aE%2Fkv%2BRoieLtyKEiI5bb2bbF%2F0BZcN9a7BlVH6FxU%2FurbeiGXY6EmmgsebC850u%2BK1126xZ2M0xVhIYrnNFro%2FZomiiQ9uEF%2BHJlvIyxO%2FL&X-Amz-Signature=ab8c1c68bca77e271498a30e690be75b3be7c4028183cc3adc6ed796d8a7e6d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CRPYCU%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgrljDEwdi5X5JgeQ92ayI0tg0Edkz45X%2BMetvehU0KAiBuNWwOjk0RIC8SKRxU3Go%2FyQoeji90Qqy9CLpsB4aSYiqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMePxZYmD%2B5M4VRpHdKtwDBQDM0H3HVUEF3NvqGsrbpzqPR2ymZSMzLRwOtbFW%2FD328PfLRxyO9Hzbi6qk53Xm8G%2BdLM32KqKdQ5lNF%2Ff6i6oo0JRQs5StybIOgRv8GRG1AaVMzzTZyqdiJ0e2SVkVABfqc2oDPzylnk91IgnPet5%2BCY%2BbeQMVMIAqY1%2F6lBfpJRHnHf70A%2Fx2xqcTRFbiln7RrCwg%2FsRnfaBrAKIYfELtU7QFq7OLLllzr8jpMVt7mYEHeq97e7xchX5xgr4%2BLlAPaZFtqhcvNyfATe0DuZMVm2MSO7cxM4FUL0Zg4PvFaPSFsIpcQWJRE9E5gelK4nyNxBsBapuzqGe%2B5uiIgZTTkcj6Rw6Z%2FF0wNA8zK7QUYsfWTBuG4szHDV%2By9SknS%2FzxDT%2BMf3pS9p3k00tFAm0Ql4QASnoBykCkWrDs9BmpIciOeJd2kREtRO55sWE0i0OA1OKhQEy%2BvfoLBjHg%2BIBQ5rI7nNPbMPWjJug9iNH9CuID%2BrdqZvPWakkhJRQPNA2zgovHiXqQFpShQIr8rYPO1UausU4xW8IY3A4JqRw1ribWVThvBWdwLo%2Bw%2BidNV%2B8EUmHq9SoO7Zxw2BIut87SICR16R5XO1AZaZQzBbPRN7e57oULd9pT1rQwqZnvyAY6pgG2utEl5RC6webgv85Vrl7cdGCMGZEbttrHccmyVLOIQZ9VxUfeLq6%2BsmBYnJMTbSTYgh3Etce1f28qsLk6RsIywkTOCvkv8WEOQaDQ9ba%2BpJOdhyPrKZRKqZGsKZ0sV6OriHr61WosrcS1vADRUMQQ3r1lcGY67r0jvsNqn9RUbVp7KKoIq3%2F6Cl%2BWzwdTlRtxc2Wa7WeRXeyDae%2Fun1NnsGhma%2FcE&X-Amz-Signature=76eb13a497869e5706060bad04f26b88a4c01eebb47a176204c4f0331ebdc69b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB6J7KC4%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAVoRuWI9v0h4LvZC%2FwKVTFz2%2BiwVk0rGzQ7S5OrqdQAiEA%2F9IyFOBngRIFP6BopMzKiewd%2FIvGfqLNcg6NzVIQ7XAqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHhGk6KqWoxkSU0PircAy%2FZHi0AYeeOI4XDpkDRmFa5mn%2Bmak%2F%2F15yINzY3A7SJ8rB%2BI%2B9XPk%2FjaHvC3SjQXIzclHDAcSlyWp%2BcWMmjDg2w00aurNlAKqK2M0u%2FlkVm0jgmDXDIQHvPVGNSfsyF5BxlVQLwOqbAX1v3tx3yeGqTbBxfTvwbw%2FymoLpyVM15%2B2alQx299tMTH0S83gTYhDpxp4EzRHkJH5QecQAb95i3KnJm%2F1CmFTC7zJXLTIIrfkyCTztfNnYl1npnlssWnRhvrkSbl0q0x9Q7jP2cZEx%2FMbLtlWiWb7A1V9R%2F8N5n5BLHxiBDGZetz25vxT2r1Zbygsu0bNwFOoiDd1f07kfhf3EpOaWR7Ta160J9AKHXyLS3Zw3naE2qrFwDwcWpgdimXgTEnU2OQ51oIuiBjuOXDsA%2FbgTJP3J74TRfPd%2BPcpEjou%2FvhxvIMGSxExIpxuETRT%2Bfx1s%2FolnrAtT%2BDf7S9J1Gj%2BPxyek%2FnAxJ8LbgCp3wbiFs4112Dcz4hW6pWJTBZU%2FVmfU0C8JTGxH%2B6jfTvHKC96IHp9%2BX9RpOo6RhWII4Fgiooi%2BhwOLK%2FFFhd8O2V57OxuTlDG5mpY1kGqX9sChEhZWOJrWmDKTHdsDS0HspZR2GdI39vmraMN2Y78gGOqUBPvNXDJVnFGNex9huFx916CSGoDO8FTKxUzkKkC7DjaFgXj7jSyBSMAaewv3q4oFgl07ZPRcxxh7HbVWv%2FqQHqmBAcb5j119c2akTB3O4%2Fxxhfg0arznhr8Js6Py4oOR8Nv765Q3egjyBX5qhdkz5Tp8uQc%2Fx2o2w6qtMEUuqg9FNTBVgbruLAxn1Cd3oBdEbEFWLYqfLEaPojbe1f4kdOn%2BReeEw&X-Amz-Signature=93deadbcf61520e7ec3171e08ca2e12910ac994c52cc6bc37dc434eda01936f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CRPYCU%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgrljDEwdi5X5JgeQ92ayI0tg0Edkz45X%2BMetvehU0KAiBuNWwOjk0RIC8SKRxU3Go%2FyQoeji90Qqy9CLpsB4aSYiqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMePxZYmD%2B5M4VRpHdKtwDBQDM0H3HVUEF3NvqGsrbpzqPR2ymZSMzLRwOtbFW%2FD328PfLRxyO9Hzbi6qk53Xm8G%2BdLM32KqKdQ5lNF%2Ff6i6oo0JRQs5StybIOgRv8GRG1AaVMzzTZyqdiJ0e2SVkVABfqc2oDPzylnk91IgnPet5%2BCY%2BbeQMVMIAqY1%2F6lBfpJRHnHf70A%2Fx2xqcTRFbiln7RrCwg%2FsRnfaBrAKIYfELtU7QFq7OLLllzr8jpMVt7mYEHeq97e7xchX5xgr4%2BLlAPaZFtqhcvNyfATe0DuZMVm2MSO7cxM4FUL0Zg4PvFaPSFsIpcQWJRE9E5gelK4nyNxBsBapuzqGe%2B5uiIgZTTkcj6Rw6Z%2FF0wNA8zK7QUYsfWTBuG4szHDV%2By9SknS%2FzxDT%2BMf3pS9p3k00tFAm0Ql4QASnoBykCkWrDs9BmpIciOeJd2kREtRO55sWE0i0OA1OKhQEy%2BvfoLBjHg%2BIBQ5rI7nNPbMPWjJug9iNH9CuID%2BrdqZvPWakkhJRQPNA2zgovHiXqQFpShQIr8rYPO1UausU4xW8IY3A4JqRw1ribWVThvBWdwLo%2Bw%2BidNV%2B8EUmHq9SoO7Zxw2BIut87SICR16R5XO1AZaZQzBbPRN7e57oULd9pT1rQwqZnvyAY6pgG2utEl5RC6webgv85Vrl7cdGCMGZEbttrHccmyVLOIQZ9VxUfeLq6%2BsmBYnJMTbSTYgh3Etce1f28qsLk6RsIywkTOCvkv8WEOQaDQ9ba%2BpJOdhyPrKZRKqZGsKZ0sV6OriHr61WosrcS1vADRUMQQ3r1lcGY67r0jvsNqn9RUbVp7KKoIq3%2F6Cl%2BWzwdTlRtxc2Wa7WeRXeyDae%2Fun1NnsGhma%2FcE&X-Amz-Signature=1f7ac5993bc185881d685bc5e894136d3c38d1a643086e9fb2313a2fe73ecf38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVOWLXW%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCECqROR3FrzU39ebBY2HsCMV3x%2BlcKvdK5HXWcEUS36QIhAOBMSPCwC7nzKKXYOqX40YNZ5D%2Fw%2Fqo8rAHgdTzcdOc0KogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaTlYdyofSQRAaAIcq3ANrvvMz%2BAGUtIxECCavG%2BmKARfYQ04u2y7Fr9bFELC%2FrLzdhLvzKEWlieFkAQl%2BKGx6CCqD0BD8u8BHdehgkV8jrZl2plnMCxE1evRhsC6DzdYMNoP%2B%2FAQP%2Bf1a3hkttKyCulRsrtkC%2BjaxxoLiIA5RcdZn%2BUmbkwcp9BBcVmJ3gQDU8G8IVHUGs%2BcsF3IffxtAgdvOzM1RWXnp2VhF2FwHS8lWAZBCrehecN8nZcfIDcO%2BI2dGWI337e%2FWEsfJLPTN6Bn0gL2ohp1OaZJAT3sCc3q9WNryWb2IgJNjUHpOwzlsf2Qi5%2Fnmnrwqb3rO9goc7buk3Lkm0krgNIUgvHB9%2FOpwCJ6BRdgOEVowO8pdAoKETZwJ2%2Bh1MOEmNf8Y86z%2BDYYGY9KX2O9E15blHI9NOCP2KdvVsHvknTWe5gdWoywcRbSis7PUUA07%2BSp%2FWbFtkOWCW%2F%2FAvP%2Br9212xsSz%2BQXaLiSAmrJH37TRdwT3W%2FVL6XLZOVc5%2F6atq8myK8%2BnXNI%2BwaM%2BigaPaiJKqK5URTZDN%2B5IWxL0C8ndLvXIMnwKTwHTlL925qa4xoBCs3iCOSCOa8a5GOIqow29nNEdNhXDfxWmajyrNbHbaf32KMHF4csITLOigP%2BBGzDdmO%2FIBjqkAQ3icj1HQknpOaj7vomukG8zqtHfDbmMQ8eftRYZVODqjyTiMYbVLlu0yEyLs1gOBbKEiFbrlGl%2BQ5Zi5Gspc9GZC8V96QXnlAsAQEBVI75drnpPNMQgslJX2Xz1WS%2ByUeqZtU5mhbs0s7UzuPwgHKbdPbcQ4L%2FGVeedX%2BplmkTjMtxDG1fdis%2FCXLli%2BjAqf2eoNIjzqcQdHMwhYlPCstItUMys&X-Amz-Signature=f3a35b6906be66485fd9b0a2b6a6f6139fc1fc01e9fc7777c8d8d207b2422961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CRPYCU%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgrljDEwdi5X5JgeQ92ayI0tg0Edkz45X%2BMetvehU0KAiBuNWwOjk0RIC8SKRxU3Go%2FyQoeji90Qqy9CLpsB4aSYiqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMePxZYmD%2B5M4VRpHdKtwDBQDM0H3HVUEF3NvqGsrbpzqPR2ymZSMzLRwOtbFW%2FD328PfLRxyO9Hzbi6qk53Xm8G%2BdLM32KqKdQ5lNF%2Ff6i6oo0JRQs5StybIOgRv8GRG1AaVMzzTZyqdiJ0e2SVkVABfqc2oDPzylnk91IgnPet5%2BCY%2BbeQMVMIAqY1%2F6lBfpJRHnHf70A%2Fx2xqcTRFbiln7RrCwg%2FsRnfaBrAKIYfELtU7QFq7OLLllzr8jpMVt7mYEHeq97e7xchX5xgr4%2BLlAPaZFtqhcvNyfATe0DuZMVm2MSO7cxM4FUL0Zg4PvFaPSFsIpcQWJRE9E5gelK4nyNxBsBapuzqGe%2B5uiIgZTTkcj6Rw6Z%2FF0wNA8zK7QUYsfWTBuG4szHDV%2By9SknS%2FzxDT%2BMf3pS9p3k00tFAm0Ql4QASnoBykCkWrDs9BmpIciOeJd2kREtRO55sWE0i0OA1OKhQEy%2BvfoLBjHg%2BIBQ5rI7nNPbMPWjJug9iNH9CuID%2BrdqZvPWakkhJRQPNA2zgovHiXqQFpShQIr8rYPO1UausU4xW8IY3A4JqRw1ribWVThvBWdwLo%2Bw%2BidNV%2B8EUmHq9SoO7Zxw2BIut87SICR16R5XO1AZaZQzBbPRN7e57oULd9pT1rQwqZnvyAY6pgG2utEl5RC6webgv85Vrl7cdGCMGZEbttrHccmyVLOIQZ9VxUfeLq6%2BsmBYnJMTbSTYgh3Etce1f28qsLk6RsIywkTOCvkv8WEOQaDQ9ba%2BpJOdhyPrKZRKqZGsKZ0sV6OriHr61WosrcS1vADRUMQQ3r1lcGY67r0jvsNqn9RUbVp7KKoIq3%2F6Cl%2BWzwdTlRtxc2Wa7WeRXeyDae%2Fun1NnsGhma%2FcE&X-Amz-Signature=341d7ebd1813fdd9c7c7b3d3234114b571970bbb9c029168c7f3d2f5ec30a34d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEAI64NU%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmVhpZcZHPBMTc1LXMdIqJkHdCwsx6EPYuDrg%2FykyW2QIhAJkshdse0cb7ZJUtgttkkC8o1UVOxhNcK%2Fc8nmO18AV1KogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTP5GFUtVy2C6TH3Mq3APaFHcbX%2FKKnlxAUd5AlWloVOEjJgx%2Bes1hqLtyTkeXbgtjsUVzCD1kUIfQ%2BdsTNdSgCqfJhweZb8NS8fRkcfwDPEDHd1EfIvoRyM7jXrLWq902BzQ0FIp6MmnQSFsQTHjvJ%2By8vziaK25ICQMYH27GnXA%2B88pA8XFrHa7gDMzLEEHrVGT6kI06bwp%2BJM%2Bcn1y7MrSMHPIFS1Vg%2F8qL0Bjdv4IP2bhHG1KeEJ2eOhxfW%2Fduvjhay2to54H5RncKh8MZL%2BiKZl2n7%2BbvKv1Q30nodrudk3SathPggqESMu7VtOsgYrzDhKJPC5cfKH2Z5cCI6v6iYPoDGL7%2FU72nddU1RLAK5mD3RA5sE8irf9nEPROJaaZ%2FFaAR9v%2F%2BRBpZhKIjGEDv7fHaGfGrcC8Ouy2rKKCT9mOqnHLrb3V%2B9RwY6XV7Ud2WqZ8s56SOp7xuSEszfUzgrnyRYJUdEBEyzJ%2FVM4gtqJt9oKx2Pdrtp2CZjnVN%2FZGXlc16tIuaESGAuC2n1iEDmaYKYOwXaEDndWj2AonPuMELMjc49CezDxWm6ddGc8CHTAhVRW%2FBHhE02qk0lLyD6Bq07d0g0jsB3R8S7fN%2FUYjB7OupCXwgNX9BKZBMYG5rb43tD7K4CzD2mO%2FIBjqkAaiA%2BXxOoeXRhCwDwxLnYlZjJc7rqLp3MipWjLRBGBsmiVKVeMtC37Kc6sKl2PS0ZGncrv9UtCJYOv%2FcciB8hNOQL9ieC90DCMbX4XDexUrCT43YdchUI8rfdhUruqC%2BVHlAuPyGM6udO8Vx9c5y9FI1xLm242REg4OhUxIl%2FCCOh%2BTynbLieEGdt%2BZNgGqmpUbiKUlsbr7AMTtgDRregE06edEi&X-Amz-Signature=83cd7b8732beea8956db7f6f558f38e5af5848554c075dd2880fa4e1a35a4d86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CRPYCU%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgrljDEwdi5X5JgeQ92ayI0tg0Edkz45X%2BMetvehU0KAiBuNWwOjk0RIC8SKRxU3Go%2FyQoeji90Qqy9CLpsB4aSYiqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMePxZYmD%2B5M4VRpHdKtwDBQDM0H3HVUEF3NvqGsrbpzqPR2ymZSMzLRwOtbFW%2FD328PfLRxyO9Hzbi6qk53Xm8G%2BdLM32KqKdQ5lNF%2Ff6i6oo0JRQs5StybIOgRv8GRG1AaVMzzTZyqdiJ0e2SVkVABfqc2oDPzylnk91IgnPet5%2BCY%2BbeQMVMIAqY1%2F6lBfpJRHnHf70A%2Fx2xqcTRFbiln7RrCwg%2FsRnfaBrAKIYfELtU7QFq7OLLllzr8jpMVt7mYEHeq97e7xchX5xgr4%2BLlAPaZFtqhcvNyfATe0DuZMVm2MSO7cxM4FUL0Zg4PvFaPSFsIpcQWJRE9E5gelK4nyNxBsBapuzqGe%2B5uiIgZTTkcj6Rw6Z%2FF0wNA8zK7QUYsfWTBuG4szHDV%2By9SknS%2FzxDT%2BMf3pS9p3k00tFAm0Ql4QASnoBykCkWrDs9BmpIciOeJd2kREtRO55sWE0i0OA1OKhQEy%2BvfoLBjHg%2BIBQ5rI7nNPbMPWjJug9iNH9CuID%2BrdqZvPWakkhJRQPNA2zgovHiXqQFpShQIr8rYPO1UausU4xW8IY3A4JqRw1ribWVThvBWdwLo%2Bw%2BidNV%2B8EUmHq9SoO7Zxw2BIut87SICR16R5XO1AZaZQzBbPRN7e57oULd9pT1rQwqZnvyAY6pgG2utEl5RC6webgv85Vrl7cdGCMGZEbttrHccmyVLOIQZ9VxUfeLq6%2BsmBYnJMTbSTYgh3Etce1f28qsLk6RsIywkTOCvkv8WEOQaDQ9ba%2BpJOdhyPrKZRKqZGsKZ0sV6OriHr61WosrcS1vADRUMQQ3r1lcGY67r0jvsNqn9RUbVp7KKoIq3%2F6Cl%2BWzwdTlRtxc2Wa7WeRXeyDae%2Fun1NnsGhma%2FcE&X-Amz-Signature=e839d2baf0ea9236381d4772f4eb4663dd11bb5177d588316f85cadba8ca576d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S7XLG6N%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bz3%2FE3esaGK7UTLEWDIkLWalzmWVpFHPpEFu6Zf3CvwIgeunQUH%2BdPZiFAKUlmnd4N0BIMc%2BlyWEex7HH85QU86wqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdUQjG4QLNSSbMzwCrcA4JzAAKqENboXWSBKmsNE0T7NpgHxfJEAywHes75YeoqkSW%2FWEAGkCXDsNLCRZv54eIWnqUK7OtRF0%2BqJ8JtBo81vLuE3ClC25O5Wyfu4dL7yxLNaB1siE4eLqUvB28pZUbdrZiUpqftYkU6Pp8AHf9I8%2B1g7%2FxMtABUf9LZsu8cQnJ3eedYWsq%2BTtOJ8KAcSFzhj5mrO1HvhStmdFbvbKh0lppfCRoAvqWHUoAyi05oVqyeQanL2vXjegctUuE0ofW2mpxsRc3Zq3EWzNZc4en2x6NXfhlV7NZbEblZnT7txYgoG7C0Gy%2FMUrDNY8CxN%2FbY09xK7lDYfyNrWWAqINWIB0HkxBWIP7RKUoeRO4V3%2BfDPplhXTCPs0ZN8dRMnToMoMDtuIR77hqQs%2FP6rxwAKlqC43SgRRfgvN0lr15oOP1Vqyx5505I4%2BSx4Z5CgmZiKvh%2B9Owc9DCkqZxls1D2Ucohx%2B3valplyttaYGJZTKF39NE%2B6ylXoaFhdh4llDETYJhzzsw4uteBni3hcII2VlUXK7AgdVOA0N1ueYZBwjqb1gc65zeSN%2Fy2te72vqP%2Bb%2BaFQS3YOHd9sL9eS8qxv7%2FJ1cqMveh%2FCRGcCEV2nOzqPZ%2FqX5DbPLHrVMNeY78gGOqUB2%2FcYk%2B%2FAtri0N5E0ymPYKXWVvTKc2upQZWebkbfkRjd4FPigsgKPFJmveuoIoOzw60JiKdwCg2vtJEi2sdWER2nCp8LbHxsK8b5MDlNrHLZAl%2B38b7X5OC7DyQKyl6frqZxLQG2PIW3w7aSJtsqQ7ligKuCqoykQQqOwVTGK%2B7NuZHvCoeUVmxUAXN%2BesYABHN%2FmrnZcKShtaVTuJqf%2F94iQYvJ8&X-Amz-Signature=7b9a6f66fe95a8f89c0b533e87f96b30b4365df254c2d009e24643a9697cd2a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CRPYCU%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgrljDEwdi5X5JgeQ92ayI0tg0Edkz45X%2BMetvehU0KAiBuNWwOjk0RIC8SKRxU3Go%2FyQoeji90Qqy9CLpsB4aSYiqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMePxZYmD%2B5M4VRpHdKtwDBQDM0H3HVUEF3NvqGsrbpzqPR2ymZSMzLRwOtbFW%2FD328PfLRxyO9Hzbi6qk53Xm8G%2BdLM32KqKdQ5lNF%2Ff6i6oo0JRQs5StybIOgRv8GRG1AaVMzzTZyqdiJ0e2SVkVABfqc2oDPzylnk91IgnPet5%2BCY%2BbeQMVMIAqY1%2F6lBfpJRHnHf70A%2Fx2xqcTRFbiln7RrCwg%2FsRnfaBrAKIYfELtU7QFq7OLLllzr8jpMVt7mYEHeq97e7xchX5xgr4%2BLlAPaZFtqhcvNyfATe0DuZMVm2MSO7cxM4FUL0Zg4PvFaPSFsIpcQWJRE9E5gelK4nyNxBsBapuzqGe%2B5uiIgZTTkcj6Rw6Z%2FF0wNA8zK7QUYsfWTBuG4szHDV%2By9SknS%2FzxDT%2BMf3pS9p3k00tFAm0Ql4QASnoBykCkWrDs9BmpIciOeJd2kREtRO55sWE0i0OA1OKhQEy%2BvfoLBjHg%2BIBQ5rI7nNPbMPWjJug9iNH9CuID%2BrdqZvPWakkhJRQPNA2zgovHiXqQFpShQIr8rYPO1UausU4xW8IY3A4JqRw1ribWVThvBWdwLo%2Bw%2BidNV%2B8EUmHq9SoO7Zxw2BIut87SICR16R5XO1AZaZQzBbPRN7e57oULd9pT1rQwqZnvyAY6pgG2utEl5RC6webgv85Vrl7cdGCMGZEbttrHccmyVLOIQZ9VxUfeLq6%2BsmBYnJMTbSTYgh3Etce1f28qsLk6RsIywkTOCvkv8WEOQaDQ9ba%2BpJOdhyPrKZRKqZGsKZ0sV6OriHr61WosrcS1vADRUMQQ3r1lcGY67r0jvsNqn9RUbVp7KKoIq3%2F6Cl%2BWzwdTlRtxc2Wa7WeRXeyDae%2Fun1NnsGhma%2FcE&X-Amz-Signature=8547f17fde99bcc06efbf0ef5cde50c75a190d1e3524d68d9cfc4139a4c3fa04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPUB4ZQS%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKmWbArBNuUVQ5crIs6Biq2m76R4qKM1Msj%2BXkAKtqqQIgVgCXcbAH2E%2FbheWd1a2RFq6VKNgGjIAKgT8fZswPjGIqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8jfZJIhxCIUZtheSrcA7S1x87l%2B9%2FT0NjmG71DEWF26c2fISg%2Bv5qg1FJn0HC1NUCC0R3J8ovtfj33RdsNPvkwOMIEMp%2BgnHPlRh2DGrcC5c3t7mEsFHxX8qmdU3dYvVM4gHGZGuPG4wv%2BqAHN%2BCx2Y5S%2FBVHv4nPFh1xdj%2F%2FsSayMegubfx60Vj2egtHz2OtySgWWpqP5kE47WcmNNl1i7eUHBRaGZITXk6gjByisjPun87IwU55qgb4y3kQPxcCJIMLryNzLypi9jhw92S22y6JOGAoOv%2B5kRW251C8ovam8h5C7ZuUES8GxBx9wDh3ng1yvvx5%2BjQDVnCXmR2rQud2EUzkpilEAXAUdSlXzhssDunsq47t%2BRTLBS0rhC4hItXCQyw2ctIM%2FuEOquwSQWL9AHvM0NN9EINcFaNpvk25oUj11dQGU2iE9fNCMzXFflPU0TRxqE9%2F3nWpZoTGLeUHDhzZQT5vOD87OUwwHyofKVnWTqhp8g%2FzpHdQIJyeptddefl9%2Ff4W1y%2B9ssEkBIz5vGmwAP0RfyYI%2FWLtUYfZM2VFUGY4EBhK%2FgTZejqxHcEUHtmJM3xLrh7w8nN0WNzVgQHpS1ZXenWWqKN73Ya5w9ogqWg6Bv1Ndnk5X5zpJXJtYrR9xsrtgMPiY78gGOqUBhn7kxctrlsTUynqQcTrf%2B9id9U2FsbSIrZyaBd4W%2FodrSISDdq7eSI3s9moffl62lng4XGnpOqxs56pNcWCI0R2IENZ%2FjsxeN8J7b8oACV4nuMjkb2%2BBoVcWdOwLGXsnQ2Q5nVrs%2FZ8vIbFnhv2%2F1jj%2FVnP%2Fa4R3nlJqW0x%2FMeHCfmH819aeoR6tbdR7ESHL9Bg2OgMICnlMRr%2FDGLbRyzdkehsp&X-Amz-Signature=39dde0e6aee8d3542ea9bf16afce641bc6c1c5883e42375d3078e85022cece10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RETOH2QF%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPH9h8Z%2Ba1GIYCzlerJTmbRN2OBW7MDzvI0aG7J%2BgnuAiBjsnjp9m%2BbgL%2Fs%2FDolITGiBbvIgXgPhF%2FpgH2J3UVH4SqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDSbU4UAxJy9zuF2OKtwDSc7qXd8vD6XVAYZUahC5Q%2BMlg6n93%2B25XEHn5QszIUAubO61lybIe2a0Qqst1iI1HBC8kM9PWK6UKBiqRtLZGzdCxCC%2FsqZsrjsZoO89O4P17RzDKbiefKEPmBxTKcgfHNzrhY76XTi08AiQkUV6MigqMHk%2FSYylINBFu%2FhjMu0Bv%2FUaUlJVO9qYN3AknhftdyYE%2BYd86vdfofTj9IT4DBgQjgMBB7kGzoIxx2MEKeJVA6MUPkPLwJyS4vvGKoTE79cPnkj%2BDlvyQ3BhRBr7QdLS8HW6Jqez2OMHbPGCDa8m%2BQsELCDlL%2BYRLCrg3Ibe6b5MzLi66oEk%2Fe3nsaniMQukfSFvjT622Lvc%2B6xdAV88r5fLycijgoaRM3T29E1kSG55VzR17KpW7kUbj8J6TQRo6GsoqgYbstvqBtE5yIwFzqSoVq92ViQ85oFuPvj%2BUH9qGmGie0Jakt38YmsK3%2BUeXfX1qrS7hcDnHRSvEp%2F1Gm%2FF310KXUZKwzz0v4WR%2F1CAo2lsIODIh9CYzXsjG7%2FH6%2B%2Bm%2BIVqHHBnAqmClJXR5M6BZ5lkveToU38fe9zGG7XSs0u56jm7mB4fTrofakXiFv0UIH3okVzOatviLtxhG7Dnx45WXCvhZHEw1ZjvyAY6pgGJwbbGKVD%2BjNDPJ%2BaGONEPard%2BBKMeSYBIXb4FidZD8bM3Vh9BHvs0jcOJd%2FlIDtX%2BaFbzAU%2BuUhWy5IpHARfD%2Fu88yUEV2EiDHRsyyeb3BDWzkPUB8Ky7e%2FXqhGVaSRH2RyxYk3xpSz0ACV1dmMnGm107VN3Oy%2Fr2lDo9Y8sy34lyMJ%2Bs3WNOghQZ5kVsqnxKxWCCIv3d7G8QPEIt%2Bl6dTWwn%2BCIP&X-Amz-Signature=9de0ad507db66f07e97e58e6a5c597a1b86db89fedd4564b4fa7d67af51b795a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C37KROW%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2pCv0BeRjW3sQ967s0DoktzAZlQQEQKsHnua59KK4ZgIhAICCerOYPr%2FrsUwWgGX%2Fdym9vFu91aTPRq%2BJBPGfsXW6KogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEC7Zu0vMgFhE9%2Fd0q3AMPK50uARwLhvE8tVra8YGyuBFCN%2FExAAzk3ydAzWsUrFS06F7pSeTBWqSr%2FaZwUMreYxVP2MgKBikk%2Fp%2F38O5FsGDi1LOiCwqRxKyuv0qlfutyexdu8X2cxG3EQEfUd1Vd0A5MVqsVknvJFMN6TvvpGh5mo%2BJKvrFM9t8ll%2B48nB5dk%2Bf3frxUBgMX2l48m0u%2FM8sYBh1%2F6uLx7aKSacSB23Z44ESKWQyvgb1h%2F5i1qTXDN4mcDV5Xko7e0GdEtX2Y27x2BXxXhGyvex%2FoSi%2FkvGZGo8VK4pRp1LjaqI63Ni%2F8fXdq40J%2BLb%2Ff9fEZ9LWIMntv2C0%2F7J%2FgKTxDuv9xk4OFuDQ1Ao5ogKqzt59PewUbskaPll24KMiXQCCHhpVrYeWFTb7KM3AbOvXWgnY9JAji9ExVNGtqveij2r4ZGNS2lOB00CvhN8l2cKDz2DH9%2Fl1hhPBVHMdHZHXMzbUqji%2B0tQlD%2BUmxT8N5E58y4KZqMpO2UGKLziNNe%2BaO%2BHpnk%2B9UTijW%2BLTg4XadMuRP0yDAMzteVzytzO%2BiQoTi1YL6pfwkO7nqLK5MwYpXaykQ6XVV2xy6gP3TpcLqr7yiMwDMkuyjuCBZzSAyq%2BO3vKQ9xrsYiFvRN7R6PjDrl%2B%2FIBjqkAXhH%2F78W%2BFZ53Y47l4m6ePil%2FvO%2BcxvENl%2F%2B85PihvRn97IcMhGzjTwH46P95le%2BRDuFGaRiUfc7uz0xUu43rz8uwFqiStO5LOvMkj3w9K%2BkLPtmRxcCqi7UP8WJ4ro8tzOPCjnkSOD4sdWQcY0b2eZTtrzMcxQH4IDX4nzDT81lnJNsPl%2FAcfge%2FzuPoXomEO8g1rFnOZn49PlefW9Bn3ZN6Zwj&X-Amz-Signature=8f9b5148baa70966e4061e70ec724a2022e7449a5973ccfaec76aceb67cd524c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CRPYCU%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgrljDEwdi5X5JgeQ92ayI0tg0Edkz45X%2BMetvehU0KAiBuNWwOjk0RIC8SKRxU3Go%2FyQoeji90Qqy9CLpsB4aSYiqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMePxZYmD%2B5M4VRpHdKtwDBQDM0H3HVUEF3NvqGsrbpzqPR2ymZSMzLRwOtbFW%2FD328PfLRxyO9Hzbi6qk53Xm8G%2BdLM32KqKdQ5lNF%2Ff6i6oo0JRQs5StybIOgRv8GRG1AaVMzzTZyqdiJ0e2SVkVABfqc2oDPzylnk91IgnPet5%2BCY%2BbeQMVMIAqY1%2F6lBfpJRHnHf70A%2Fx2xqcTRFbiln7RrCwg%2FsRnfaBrAKIYfELtU7QFq7OLLllzr8jpMVt7mYEHeq97e7xchX5xgr4%2BLlAPaZFtqhcvNyfATe0DuZMVm2MSO7cxM4FUL0Zg4PvFaPSFsIpcQWJRE9E5gelK4nyNxBsBapuzqGe%2B5uiIgZTTkcj6Rw6Z%2FF0wNA8zK7QUYsfWTBuG4szHDV%2By9SknS%2FzxDT%2BMf3pS9p3k00tFAm0Ql4QASnoBykCkWrDs9BmpIciOeJd2kREtRO55sWE0i0OA1OKhQEy%2BvfoLBjHg%2BIBQ5rI7nNPbMPWjJug9iNH9CuID%2BrdqZvPWakkhJRQPNA2zgovHiXqQFpShQIr8rYPO1UausU4xW8IY3A4JqRw1ribWVThvBWdwLo%2Bw%2BidNV%2B8EUmHq9SoO7Zxw2BIut87SICR16R5XO1AZaZQzBbPRN7e57oULd9pT1rQwqZnvyAY6pgG2utEl5RC6webgv85Vrl7cdGCMGZEbttrHccmyVLOIQZ9VxUfeLq6%2BsmBYnJMTbSTYgh3Etce1f28qsLk6RsIywkTOCvkv8WEOQaDQ9ba%2BpJOdhyPrKZRKqZGsKZ0sV6OriHr61WosrcS1vADRUMQQ3r1lcGY67r0jvsNqn9RUbVp7KKoIq3%2F6Cl%2BWzwdTlRtxc2Wa7WeRXeyDae%2Fun1NnsGhma%2FcE&X-Amz-Signature=b7a59adf5e7c6239c74f3d7ff0a90590d384a7e66245f736baa9143115a6555b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CRPYCU%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgrljDEwdi5X5JgeQ92ayI0tg0Edkz45X%2BMetvehU0KAiBuNWwOjk0RIC8SKRxU3Go%2FyQoeji90Qqy9CLpsB4aSYiqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMePxZYmD%2B5M4VRpHdKtwDBQDM0H3HVUEF3NvqGsrbpzqPR2ymZSMzLRwOtbFW%2FD328PfLRxyO9Hzbi6qk53Xm8G%2BdLM32KqKdQ5lNF%2Ff6i6oo0JRQs5StybIOgRv8GRG1AaVMzzTZyqdiJ0e2SVkVABfqc2oDPzylnk91IgnPet5%2BCY%2BbeQMVMIAqY1%2F6lBfpJRHnHf70A%2Fx2xqcTRFbiln7RrCwg%2FsRnfaBrAKIYfELtU7QFq7OLLllzr8jpMVt7mYEHeq97e7xchX5xgr4%2BLlAPaZFtqhcvNyfATe0DuZMVm2MSO7cxM4FUL0Zg4PvFaPSFsIpcQWJRE9E5gelK4nyNxBsBapuzqGe%2B5uiIgZTTkcj6Rw6Z%2FF0wNA8zK7QUYsfWTBuG4szHDV%2By9SknS%2FzxDT%2BMf3pS9p3k00tFAm0Ql4QASnoBykCkWrDs9BmpIciOeJd2kREtRO55sWE0i0OA1OKhQEy%2BvfoLBjHg%2BIBQ5rI7nNPbMPWjJug9iNH9CuID%2BrdqZvPWakkhJRQPNA2zgovHiXqQFpShQIr8rYPO1UausU4xW8IY3A4JqRw1ribWVThvBWdwLo%2Bw%2BidNV%2B8EUmHq9SoO7Zxw2BIut87SICR16R5XO1AZaZQzBbPRN7e57oULd9pT1rQwqZnvyAY6pgG2utEl5RC6webgv85Vrl7cdGCMGZEbttrHccmyVLOIQZ9VxUfeLq6%2BsmBYnJMTbSTYgh3Etce1f28qsLk6RsIywkTOCvkv8WEOQaDQ9ba%2BpJOdhyPrKZRKqZGsKZ0sV6OriHr61WosrcS1vADRUMQQ3r1lcGY67r0jvsNqn9RUbVp7KKoIq3%2F6Cl%2BWzwdTlRtxc2Wa7WeRXeyDae%2Fun1NnsGhma%2FcE&X-Amz-Signature=edd81e0ab0cd445e902f699368423449b70572114045a5e64be40067e8e94f0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RAQHECV%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLco3pb6o8dDgEksg%2Fp0koBNYjjnnFjeRg5bEmNB%2By%2FAiAOHD7V0BU7ic8jdXUY84c9ifBY89yodRAPliQyC1KRHCqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD5LAR1%2FXOcUTcFL0KtwDOfTCDprPmF2h0A5rMPvCT8yaaubf2dPfk07AT8FKUZjL1Fb9cYoQFbYcufeSLdfVu5r9T7DgALfyCIic8oZvaUd39zE4PMN08VqqEMb9q6jFEhrY6MVOqVsRc4qaEB8b50YgfVTFGAAW%2FRX%2F3r8KJhzeJidAqdu6KB%2FP%2FFVwRCRZqGvMmKyrQB%2B%2B%2FbhtJT9H15bKqGKvjgIa9Zi1XINErm0v3zmhVosMjbcQsBTVt1vfQBUGauDR4HrEsHZiJYzj5CDWpVtDuykedgNdrg%2Ba58rMMl62FuhwA7j%2F%2FlG7Zk8kwzXbylRC%2BdxTCzTm0r3XC%2FmaF0DIIxbE0tLSV5%2FzmZTlfpF7P2bM4P2utzfnMHYR3hnZ4BepS9TLm%2FLsGR2wLd5IzYDphzgJ7ON2cBcJfYqs8AVzVsJXzGzy1tUWd41s2huvzamLQSIcWGKpj%2BV7R%2B0eMBVD0agBvXfPLZBfQF4bZVxASgmV%2FLUNML7hF9Ketbw4V1ZfUQnwKAV9037nqMKJ4mNsm0T%2BtU0S7BZdD3xjDwgnC%2FsMf%2BcobMP5pC%2FbTVQNaX%2BkS5ee6jFOuiTeNQFvPEU62L5TZZr6AzZTA%2BAgwNC5RIUasfT387Hnq5Ba5D0Mqb3w7iiXv%2FswyJjvyAY6pgEmJcTbO4xul%2FPisX%2BTShd9TqaX%2B3QFMCuge3yp448jDXCLRFcPOyGumHfhssYE01PrFAb1EUIGK%2FHMcSsw6XZrehXTM1qo6F5cyiDC6H8hbX%2Bm6FEiOc3obS6GkrUgrm5Z4xh2gzi4pk9k1QFRkXYk8YzVXKu9ROKwz6%2FMLcRsx%2FAxya0AWC3RbMsVsXGN%2BENUFtPDyUN7do55rUvTZjhlxh0hHn8e&X-Amz-Signature=df24db6edf5fe9874765a6d50186b10f1786460ebbf75ac5ecfedf4696af65d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RAQHECV%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLco3pb6o8dDgEksg%2Fp0koBNYjjnnFjeRg5bEmNB%2By%2FAiAOHD7V0BU7ic8jdXUY84c9ifBY89yodRAPliQyC1KRHCqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD5LAR1%2FXOcUTcFL0KtwDOfTCDprPmF2h0A5rMPvCT8yaaubf2dPfk07AT8FKUZjL1Fb9cYoQFbYcufeSLdfVu5r9T7DgALfyCIic8oZvaUd39zE4PMN08VqqEMb9q6jFEhrY6MVOqVsRc4qaEB8b50YgfVTFGAAW%2FRX%2F3r8KJhzeJidAqdu6KB%2FP%2FFVwRCRZqGvMmKyrQB%2B%2B%2FbhtJT9H15bKqGKvjgIa9Zi1XINErm0v3zmhVosMjbcQsBTVt1vfQBUGauDR4HrEsHZiJYzj5CDWpVtDuykedgNdrg%2Ba58rMMl62FuhwA7j%2F%2FlG7Zk8kwzXbylRC%2BdxTCzTm0r3XC%2FmaF0DIIxbE0tLSV5%2FzmZTlfpF7P2bM4P2utzfnMHYR3hnZ4BepS9TLm%2FLsGR2wLd5IzYDphzgJ7ON2cBcJfYqs8AVzVsJXzGzy1tUWd41s2huvzamLQSIcWGKpj%2BV7R%2B0eMBVD0agBvXfPLZBfQF4bZVxASgmV%2FLUNML7hF9Ketbw4V1ZfUQnwKAV9037nqMKJ4mNsm0T%2BtU0S7BZdD3xjDwgnC%2FsMf%2BcobMP5pC%2FbTVQNaX%2BkS5ee6jFOuiTeNQFvPEU62L5TZZr6AzZTA%2BAgwNC5RIUasfT387Hnq5Ba5D0Mqb3w7iiXv%2FswyJjvyAY6pgEmJcTbO4xul%2FPisX%2BTShd9TqaX%2B3QFMCuge3yp448jDXCLRFcPOyGumHfhssYE01PrFAb1EUIGK%2FHMcSsw6XZrehXTM1qo6F5cyiDC6H8hbX%2Bm6FEiOc3obS6GkrUgrm5Z4xh2gzi4pk9k1QFRkXYk8YzVXKu9ROKwz6%2FMLcRsx%2FAxya0AWC3RbMsVsXGN%2BENUFtPDyUN7do55rUvTZjhlxh0hHn8e&X-Amz-Signature=195cc857bd1ea7dc32dda6a0ab4917fd1fc06fe401730848c54f6c7a118926bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RAQHECV%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLco3pb6o8dDgEksg%2Fp0koBNYjjnnFjeRg5bEmNB%2By%2FAiAOHD7V0BU7ic8jdXUY84c9ifBY89yodRAPliQyC1KRHCqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD5LAR1%2FXOcUTcFL0KtwDOfTCDprPmF2h0A5rMPvCT8yaaubf2dPfk07AT8FKUZjL1Fb9cYoQFbYcufeSLdfVu5r9T7DgALfyCIic8oZvaUd39zE4PMN08VqqEMb9q6jFEhrY6MVOqVsRc4qaEB8b50YgfVTFGAAW%2FRX%2F3r8KJhzeJidAqdu6KB%2FP%2FFVwRCRZqGvMmKyrQB%2B%2B%2FbhtJT9H15bKqGKvjgIa9Zi1XINErm0v3zmhVosMjbcQsBTVt1vfQBUGauDR4HrEsHZiJYzj5CDWpVtDuykedgNdrg%2Ba58rMMl62FuhwA7j%2F%2FlG7Zk8kwzXbylRC%2BdxTCzTm0r3XC%2FmaF0DIIxbE0tLSV5%2FzmZTlfpF7P2bM4P2utzfnMHYR3hnZ4BepS9TLm%2FLsGR2wLd5IzYDphzgJ7ON2cBcJfYqs8AVzVsJXzGzy1tUWd41s2huvzamLQSIcWGKpj%2BV7R%2B0eMBVD0agBvXfPLZBfQF4bZVxASgmV%2FLUNML7hF9Ketbw4V1ZfUQnwKAV9037nqMKJ4mNsm0T%2BtU0S7BZdD3xjDwgnC%2FsMf%2BcobMP5pC%2FbTVQNaX%2BkS5ee6jFOuiTeNQFvPEU62L5TZZr6AzZTA%2BAgwNC5RIUasfT387Hnq5Ba5D0Mqb3w7iiXv%2FswyJjvyAY6pgEmJcTbO4xul%2FPisX%2BTShd9TqaX%2B3QFMCuge3yp448jDXCLRFcPOyGumHfhssYE01PrFAb1EUIGK%2FHMcSsw6XZrehXTM1qo6F5cyiDC6H8hbX%2Bm6FEiOc3obS6GkrUgrm5Z4xh2gzi4pk9k1QFRkXYk8YzVXKu9ROKwz6%2FMLcRsx%2FAxya0AWC3RbMsVsXGN%2BENUFtPDyUN7do55rUvTZjhlxh0hHn8e&X-Amz-Signature=b15405dadea1a4c7488a31c65b4e97c7565b72a99ac08e02a7c52557a3d0c250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RAQHECV%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLco3pb6o8dDgEksg%2Fp0koBNYjjnnFjeRg5bEmNB%2By%2FAiAOHD7V0BU7ic8jdXUY84c9ifBY89yodRAPliQyC1KRHCqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD5LAR1%2FXOcUTcFL0KtwDOfTCDprPmF2h0A5rMPvCT8yaaubf2dPfk07AT8FKUZjL1Fb9cYoQFbYcufeSLdfVu5r9T7DgALfyCIic8oZvaUd39zE4PMN08VqqEMb9q6jFEhrY6MVOqVsRc4qaEB8b50YgfVTFGAAW%2FRX%2F3r8KJhzeJidAqdu6KB%2FP%2FFVwRCRZqGvMmKyrQB%2B%2B%2FbhtJT9H15bKqGKvjgIa9Zi1XINErm0v3zmhVosMjbcQsBTVt1vfQBUGauDR4HrEsHZiJYzj5CDWpVtDuykedgNdrg%2Ba58rMMl62FuhwA7j%2F%2FlG7Zk8kwzXbylRC%2BdxTCzTm0r3XC%2FmaF0DIIxbE0tLSV5%2FzmZTlfpF7P2bM4P2utzfnMHYR3hnZ4BepS9TLm%2FLsGR2wLd5IzYDphzgJ7ON2cBcJfYqs8AVzVsJXzGzy1tUWd41s2huvzamLQSIcWGKpj%2BV7R%2B0eMBVD0agBvXfPLZBfQF4bZVxASgmV%2FLUNML7hF9Ketbw4V1ZfUQnwKAV9037nqMKJ4mNsm0T%2BtU0S7BZdD3xjDwgnC%2FsMf%2BcobMP5pC%2FbTVQNaX%2BkS5ee6jFOuiTeNQFvPEU62L5TZZr6AzZTA%2BAgwNC5RIUasfT387Hnq5Ba5D0Mqb3w7iiXv%2FswyJjvyAY6pgEmJcTbO4xul%2FPisX%2BTShd9TqaX%2B3QFMCuge3yp448jDXCLRFcPOyGumHfhssYE01PrFAb1EUIGK%2FHMcSsw6XZrehXTM1qo6F5cyiDC6H8hbX%2Bm6FEiOc3obS6GkrUgrm5Z4xh2gzi4pk9k1QFRkXYk8YzVXKu9ROKwz6%2FMLcRsx%2FAxya0AWC3RbMsVsXGN%2BENUFtPDyUN7do55rUvTZjhlxh0hHn8e&X-Amz-Signature=e5663b34d1ae8ea3d23d6d67d539b8498c231d86eaaa9ac089385babd31c9aee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEFGJ6ZY%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVVt%2B%2Fx1N9KpyxeaYhnmGfDGFwk0Qb31Vp%2BPSVmyaLRAIgE9n%2Fx2RbJlJHOmF1VFnTO4YxcHCjZXMaO4A98tdbx3cqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKf1mQNuHpqG8N5y%2FircA%2FGem%2F1foSGD6zzXeTiwcdfI3tHkwyNJFzzFrVlSTe1M05Ac398q7T4MxJqKjj4Atdl20M1bup6rA62dWfW%2FhjrGqTeeVekk7Yl4jcBucnBtaUwoSPjpPYqbcLdPa%2FLvw2JaraGFLuDlP6wBe5o5HMyDYIs6LMYbt0o5uJDByeQ%2FkwEkEsODimNUPeukSUVK%2FCHeFoimPIVPkcu5deYMX5PE4M1XjwPbuEhXi2sYpAuXS7nkOyT7VHHbEwkWs8ZAXhtc8alt9Vij58YzgfujU8pKJ41JfeOfx92D6sE0xjZMZp2BNRmkk9OAGZVyHpRNlw%2FSv1afJNZFoX2nSg7W9ZkejMEFadriGJw5kTqoJRSSnGvWULSrDxHzplrgka9sSAw5ADJ%2Bs3ce2PsHPwqD6b966OS6HexRFQcFAveKJUChcqkJ06okdfCU%2F%2BV3q1SSkFPt%2F%2FeNHldhGlIwSnPuqGTa7KJSiqYsEf2ntjgi%2BfIKwWpn%2F7XEwqMxJQKae2gh0r1MyDI0d%2BZt%2BA2bmbVjuPlZGYa8Mg8xA1F8qKM0RfSbyAws22L42MraqLj%2BvnjfrhH8c3xEx71iiBj39Wz4SrCKH0OoZA2shDJc5Lm11cErXMbFxWHY1raCKfNRMJqY78gGOqUBtfAEtJ5isHiG9QsQLDQIcvulyWkoP%2BH7CFgmXcSCE9Psz9XY60619WjpUP8tGOiTrCULahHq1P33KKU%2FOco1L%2BDIGFCjrriSS8NbQBf7F4Vr14haOfSMHsNuK33UVRO%2BqhN377TGdGxRcgk2cfrp%2B2jqFJjvDhM6rRFqx2lhiWwgtz1OQX2j%2BcImzsXa4ycq41qswt0LT678nSI%2Fj3fl45GJ5e6%2B&X-Amz-Signature=23af6adee68d84eb576253ab348939f5ee1f484a007d2d8adf4894c5fc381b7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RAQHECV%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLco3pb6o8dDgEksg%2Fp0koBNYjjnnFjeRg5bEmNB%2By%2FAiAOHD7V0BU7ic8jdXUY84c9ifBY89yodRAPliQyC1KRHCqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD5LAR1%2FXOcUTcFL0KtwDOfTCDprPmF2h0A5rMPvCT8yaaubf2dPfk07AT8FKUZjL1Fb9cYoQFbYcufeSLdfVu5r9T7DgALfyCIic8oZvaUd39zE4PMN08VqqEMb9q6jFEhrY6MVOqVsRc4qaEB8b50YgfVTFGAAW%2FRX%2F3r8KJhzeJidAqdu6KB%2FP%2FFVwRCRZqGvMmKyrQB%2B%2B%2FbhtJT9H15bKqGKvjgIa9Zi1XINErm0v3zmhVosMjbcQsBTVt1vfQBUGauDR4HrEsHZiJYzj5CDWpVtDuykedgNdrg%2Ba58rMMl62FuhwA7j%2F%2FlG7Zk8kwzXbylRC%2BdxTCzTm0r3XC%2FmaF0DIIxbE0tLSV5%2FzmZTlfpF7P2bM4P2utzfnMHYR3hnZ4BepS9TLm%2FLsGR2wLd5IzYDphzgJ7ON2cBcJfYqs8AVzVsJXzGzy1tUWd41s2huvzamLQSIcWGKpj%2BV7R%2B0eMBVD0agBvXfPLZBfQF4bZVxASgmV%2FLUNML7hF9Ketbw4V1ZfUQnwKAV9037nqMKJ4mNsm0T%2BtU0S7BZdD3xjDwgnC%2FsMf%2BcobMP5pC%2FbTVQNaX%2BkS5ee6jFOuiTeNQFvPEU62L5TZZr6AzZTA%2BAgwNC5RIUasfT387Hnq5Ba5D0Mqb3w7iiXv%2FswyJjvyAY6pgEmJcTbO4xul%2FPisX%2BTShd9TqaX%2B3QFMCuge3yp448jDXCLRFcPOyGumHfhssYE01PrFAb1EUIGK%2FHMcSsw6XZrehXTM1qo6F5cyiDC6H8hbX%2Bm6FEiOc3obS6GkrUgrm5Z4xh2gzi4pk9k1QFRkXYk8YzVXKu9ROKwz6%2FMLcRsx%2FAxya0AWC3RbMsVsXGN%2BENUFtPDyUN7do55rUvTZjhlxh0hHn8e&X-Amz-Signature=77471ea6c1faa237862d2d92bb04b7674492939000aafc3233f33573ab94be65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RAQHECV%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLco3pb6o8dDgEksg%2Fp0koBNYjjnnFjeRg5bEmNB%2By%2FAiAOHD7V0BU7ic8jdXUY84c9ifBY89yodRAPliQyC1KRHCqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD5LAR1%2FXOcUTcFL0KtwDOfTCDprPmF2h0A5rMPvCT8yaaubf2dPfk07AT8FKUZjL1Fb9cYoQFbYcufeSLdfVu5r9T7DgALfyCIic8oZvaUd39zE4PMN08VqqEMb9q6jFEhrY6MVOqVsRc4qaEB8b50YgfVTFGAAW%2FRX%2F3r8KJhzeJidAqdu6KB%2FP%2FFVwRCRZqGvMmKyrQB%2B%2B%2FbhtJT9H15bKqGKvjgIa9Zi1XINErm0v3zmhVosMjbcQsBTVt1vfQBUGauDR4HrEsHZiJYzj5CDWpVtDuykedgNdrg%2Ba58rMMl62FuhwA7j%2F%2FlG7Zk8kwzXbylRC%2BdxTCzTm0r3XC%2FmaF0DIIxbE0tLSV5%2FzmZTlfpF7P2bM4P2utzfnMHYR3hnZ4BepS9TLm%2FLsGR2wLd5IzYDphzgJ7ON2cBcJfYqs8AVzVsJXzGzy1tUWd41s2huvzamLQSIcWGKpj%2BV7R%2B0eMBVD0agBvXfPLZBfQF4bZVxASgmV%2FLUNML7hF9Ketbw4V1ZfUQnwKAV9037nqMKJ4mNsm0T%2BtU0S7BZdD3xjDwgnC%2FsMf%2BcobMP5pC%2FbTVQNaX%2BkS5ee6jFOuiTeNQFvPEU62L5TZZr6AzZTA%2BAgwNC5RIUasfT387Hnq5Ba5D0Mqb3w7iiXv%2FswyJjvyAY6pgEmJcTbO4xul%2FPisX%2BTShd9TqaX%2B3QFMCuge3yp448jDXCLRFcPOyGumHfhssYE01PrFAb1EUIGK%2FHMcSsw6XZrehXTM1qo6F5cyiDC6H8hbX%2Bm6FEiOc3obS6GkrUgrm5Z4xh2gzi4pk9k1QFRkXYk8YzVXKu9ROKwz6%2FMLcRsx%2FAxya0AWC3RbMsVsXGN%2BENUFtPDyUN7do55rUvTZjhlxh0hHn8e&X-Amz-Signature=481dcb843b7751ead786580d0ecd85f29a13dfc5a4b85b7f4477ca701532745c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RAQHECV%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLco3pb6o8dDgEksg%2Fp0koBNYjjnnFjeRg5bEmNB%2By%2FAiAOHD7V0BU7ic8jdXUY84c9ifBY89yodRAPliQyC1KRHCqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD5LAR1%2FXOcUTcFL0KtwDOfTCDprPmF2h0A5rMPvCT8yaaubf2dPfk07AT8FKUZjL1Fb9cYoQFbYcufeSLdfVu5r9T7DgALfyCIic8oZvaUd39zE4PMN08VqqEMb9q6jFEhrY6MVOqVsRc4qaEB8b50YgfVTFGAAW%2FRX%2F3r8KJhzeJidAqdu6KB%2FP%2FFVwRCRZqGvMmKyrQB%2B%2B%2FbhtJT9H15bKqGKvjgIa9Zi1XINErm0v3zmhVosMjbcQsBTVt1vfQBUGauDR4HrEsHZiJYzj5CDWpVtDuykedgNdrg%2Ba58rMMl62FuhwA7j%2F%2FlG7Zk8kwzXbylRC%2BdxTCzTm0r3XC%2FmaF0DIIxbE0tLSV5%2FzmZTlfpF7P2bM4P2utzfnMHYR3hnZ4BepS9TLm%2FLsGR2wLd5IzYDphzgJ7ON2cBcJfYqs8AVzVsJXzGzy1tUWd41s2huvzamLQSIcWGKpj%2BV7R%2B0eMBVD0agBvXfPLZBfQF4bZVxASgmV%2FLUNML7hF9Ketbw4V1ZfUQnwKAV9037nqMKJ4mNsm0T%2BtU0S7BZdD3xjDwgnC%2FsMf%2BcobMP5pC%2FbTVQNaX%2BkS5ee6jFOuiTeNQFvPEU62L5TZZr6AzZTA%2BAgwNC5RIUasfT387Hnq5Ba5D0Mqb3w7iiXv%2FswyJjvyAY6pgEmJcTbO4xul%2FPisX%2BTShd9TqaX%2B3QFMCuge3yp448jDXCLRFcPOyGumHfhssYE01PrFAb1EUIGK%2FHMcSsw6XZrehXTM1qo6F5cyiDC6H8hbX%2Bm6FEiOc3obS6GkrUgrm5Z4xh2gzi4pk9k1QFRkXYk8YzVXKu9ROKwz6%2FMLcRsx%2FAxya0AWC3RbMsVsXGN%2BENUFtPDyUN7do55rUvTZjhlxh0hHn8e&X-Amz-Signature=b15405dadea1a4c7488a31c65b4e97c7565b72a99ac08e02a7c52557a3d0c250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RAQHECV%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLco3pb6o8dDgEksg%2Fp0koBNYjjnnFjeRg5bEmNB%2By%2FAiAOHD7V0BU7ic8jdXUY84c9ifBY89yodRAPliQyC1KRHCqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD5LAR1%2FXOcUTcFL0KtwDOfTCDprPmF2h0A5rMPvCT8yaaubf2dPfk07AT8FKUZjL1Fb9cYoQFbYcufeSLdfVu5r9T7DgALfyCIic8oZvaUd39zE4PMN08VqqEMb9q6jFEhrY6MVOqVsRc4qaEB8b50YgfVTFGAAW%2FRX%2F3r8KJhzeJidAqdu6KB%2FP%2FFVwRCRZqGvMmKyrQB%2B%2B%2FbhtJT9H15bKqGKvjgIa9Zi1XINErm0v3zmhVosMjbcQsBTVt1vfQBUGauDR4HrEsHZiJYzj5CDWpVtDuykedgNdrg%2Ba58rMMl62FuhwA7j%2F%2FlG7Zk8kwzXbylRC%2BdxTCzTm0r3XC%2FmaF0DIIxbE0tLSV5%2FzmZTlfpF7P2bM4P2utzfnMHYR3hnZ4BepS9TLm%2FLsGR2wLd5IzYDphzgJ7ON2cBcJfYqs8AVzVsJXzGzy1tUWd41s2huvzamLQSIcWGKpj%2BV7R%2B0eMBVD0agBvXfPLZBfQF4bZVxASgmV%2FLUNML7hF9Ketbw4V1ZfUQnwKAV9037nqMKJ4mNsm0T%2BtU0S7BZdD3xjDwgnC%2FsMf%2BcobMP5pC%2FbTVQNaX%2BkS5ee6jFOuiTeNQFvPEU62L5TZZr6AzZTA%2BAgwNC5RIUasfT387Hnq5Ba5D0Mqb3w7iiXv%2FswyJjvyAY6pgEmJcTbO4xul%2FPisX%2BTShd9TqaX%2B3QFMCuge3yp448jDXCLRFcPOyGumHfhssYE01PrFAb1EUIGK%2FHMcSsw6XZrehXTM1qo6F5cyiDC6H8hbX%2Bm6FEiOc3obS6GkrUgrm5Z4xh2gzi4pk9k1QFRkXYk8YzVXKu9ROKwz6%2FMLcRsx%2FAxya0AWC3RbMsVsXGN%2BENUFtPDyUN7do55rUvTZjhlxh0hHn8e&X-Amz-Signature=b0904b0710ef730ca5840dea963d37ba52e64630baf8d9b1860ea7d81d113e6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RAQHECV%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLco3pb6o8dDgEksg%2Fp0koBNYjjnnFjeRg5bEmNB%2By%2FAiAOHD7V0BU7ic8jdXUY84c9ifBY89yodRAPliQyC1KRHCqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD5LAR1%2FXOcUTcFL0KtwDOfTCDprPmF2h0A5rMPvCT8yaaubf2dPfk07AT8FKUZjL1Fb9cYoQFbYcufeSLdfVu5r9T7DgALfyCIic8oZvaUd39zE4PMN08VqqEMb9q6jFEhrY6MVOqVsRc4qaEB8b50YgfVTFGAAW%2FRX%2F3r8KJhzeJidAqdu6KB%2FP%2FFVwRCRZqGvMmKyrQB%2B%2B%2FbhtJT9H15bKqGKvjgIa9Zi1XINErm0v3zmhVosMjbcQsBTVt1vfQBUGauDR4HrEsHZiJYzj5CDWpVtDuykedgNdrg%2Ba58rMMl62FuhwA7j%2F%2FlG7Zk8kwzXbylRC%2BdxTCzTm0r3XC%2FmaF0DIIxbE0tLSV5%2FzmZTlfpF7P2bM4P2utzfnMHYR3hnZ4BepS9TLm%2FLsGR2wLd5IzYDphzgJ7ON2cBcJfYqs8AVzVsJXzGzy1tUWd41s2huvzamLQSIcWGKpj%2BV7R%2B0eMBVD0agBvXfPLZBfQF4bZVxASgmV%2FLUNML7hF9Ketbw4V1ZfUQnwKAV9037nqMKJ4mNsm0T%2BtU0S7BZdD3xjDwgnC%2FsMf%2BcobMP5pC%2FbTVQNaX%2BkS5ee6jFOuiTeNQFvPEU62L5TZZr6AzZTA%2BAgwNC5RIUasfT387Hnq5Ba5D0Mqb3w7iiXv%2FswyJjvyAY6pgEmJcTbO4xul%2FPisX%2BTShd9TqaX%2B3QFMCuge3yp448jDXCLRFcPOyGumHfhssYE01PrFAb1EUIGK%2FHMcSsw6XZrehXTM1qo6F5cyiDC6H8hbX%2Bm6FEiOc3obS6GkrUgrm5Z4xh2gzi4pk9k1QFRkXYk8YzVXKu9ROKwz6%2FMLcRsx%2FAxya0AWC3RbMsVsXGN%2BENUFtPDyUN7do55rUvTZjhlxh0hHn8e&X-Amz-Signature=5b43e6acbbc5f48a1b9d976c22f3edf77ded09726e3bf56cea5b7ac5459781bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RAQHECV%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLco3pb6o8dDgEksg%2Fp0koBNYjjnnFjeRg5bEmNB%2By%2FAiAOHD7V0BU7ic8jdXUY84c9ifBY89yodRAPliQyC1KRHCqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD5LAR1%2FXOcUTcFL0KtwDOfTCDprPmF2h0A5rMPvCT8yaaubf2dPfk07AT8FKUZjL1Fb9cYoQFbYcufeSLdfVu5r9T7DgALfyCIic8oZvaUd39zE4PMN08VqqEMb9q6jFEhrY6MVOqVsRc4qaEB8b50YgfVTFGAAW%2FRX%2F3r8KJhzeJidAqdu6KB%2FP%2FFVwRCRZqGvMmKyrQB%2B%2B%2FbhtJT9H15bKqGKvjgIa9Zi1XINErm0v3zmhVosMjbcQsBTVt1vfQBUGauDR4HrEsHZiJYzj5CDWpVtDuykedgNdrg%2Ba58rMMl62FuhwA7j%2F%2FlG7Zk8kwzXbylRC%2BdxTCzTm0r3XC%2FmaF0DIIxbE0tLSV5%2FzmZTlfpF7P2bM4P2utzfnMHYR3hnZ4BepS9TLm%2FLsGR2wLd5IzYDphzgJ7ON2cBcJfYqs8AVzVsJXzGzy1tUWd41s2huvzamLQSIcWGKpj%2BV7R%2B0eMBVD0agBvXfPLZBfQF4bZVxASgmV%2FLUNML7hF9Ketbw4V1ZfUQnwKAV9037nqMKJ4mNsm0T%2BtU0S7BZdD3xjDwgnC%2FsMf%2BcobMP5pC%2FbTVQNaX%2BkS5ee6jFOuiTeNQFvPEU62L5TZZr6AzZTA%2BAgwNC5RIUasfT387Hnq5Ba5D0Mqb3w7iiXv%2FswyJjvyAY6pgEmJcTbO4xul%2FPisX%2BTShd9TqaX%2B3QFMCuge3yp448jDXCLRFcPOyGumHfhssYE01PrFAb1EUIGK%2FHMcSsw6XZrehXTM1qo6F5cyiDC6H8hbX%2Bm6FEiOc3obS6GkrUgrm5Z4xh2gzi4pk9k1QFRkXYk8YzVXKu9ROKwz6%2FMLcRsx%2FAxya0AWC3RbMsVsXGN%2BENUFtPDyUN7do55rUvTZjhlxh0hHn8e&X-Amz-Signature=d18487d2bd677c0f0e87afa6ccec136710c5fa34d0d61f870f89dd1c1427eb4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


