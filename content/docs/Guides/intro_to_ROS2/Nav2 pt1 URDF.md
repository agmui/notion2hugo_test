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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCLPIDBP%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDQBwSUKB%2Fw4LOI32bTW49G%2BSP%2Bhp3MU%2F3%2B4yu%2BKbPqQgIhAMbIadq0JjYbyPRIZJgWdP6yMHMmr5j8YtUDn6yEgTMpKv8DCAkQABoMNjM3NDIzMTgzODA1Igz1ZimqCBV6b1H5UZwq3APlYC2p4WGLfZ9%2BKyH%2FQ7Z0Vk7JvCO2VXBaf%2BYVhEJapxhUp95xl%2F8gah44pqfa8oyi24xrvYht0sAFsn6XaaA2NmH94kitl3czbbvF3MxZuS15Qq%2BPYzVXfERz5HnnZvUjS2i45uqcgiePgtHg0aqB5kHZJo4HEb1QjgIMXcslK%2BNUAnw8hRTbnEKNena1sdSTo4Eb%2BK62xmnkVEPVgSyKDDvSjPNBYGrk%2FspDC31Mumw5mDOgj%2F0G8ncCbG3sFj%2BRebNrxQGCwKSFyP3GIzwu8eE7nuoMHU8BH6%2BfN8tDQCXRUe%2FdPmjA5RMIUlHlWU0pJ%2B05MZVwe1PpbJdssjnimpZyzLh%2BiOySBiukMk8e6gHEZOqh9np5%2B%2F%2BRvnOHDOB6tQJp0z%2FbKgDVtB%2BkBwaMO00domcLH6FyQhXkX9aw1UDrZy9fnnBzf70Or77PSTlumEMyo4lCmE64ZYAaDyhJQ20UT4509ufblI%2F%2FUOAysLLkho1Sfu0H31mmucbvnbnI8TF8a7uhy%2FbLueW9t0KJPX6eyv5inlZS1zGr6HCUIv1drzAJxUPvFYbkR5BoXfjSMoHuCy9nuTvQbiy1rKfyV7zSOYvFDngQVOJAKcCP%2BQnrUdeAvubsd3tsbjCI3rjJBjqkAU7vL439ClgEpEG%2BNCucO3V4GZZKig6iZZzwxJcu7GK2%2F6yc7upHQ03DFGjiHy5qbMCCdAgOzkB6YBQIaX3O%2Fydyn1Fc3DfgzuxZEfa0QTOKpNEG3oUzXUeOGC4qPFPKwziCG3esErSaVRRSqn33PLOkaelK7qFRRWh7hOoZ4TgfNBaHxods5NUjcNSgpI1OzzqqNJ68oKnpTT%2BGR1waPWXW8wtS&X-Amz-Signature=0e3d25e00e536633c0d91e930e1b307fae5b96e0dff8993506c3852408f60d89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCLPIDBP%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDQBwSUKB%2Fw4LOI32bTW49G%2BSP%2Bhp3MU%2F3%2B4yu%2BKbPqQgIhAMbIadq0JjYbyPRIZJgWdP6yMHMmr5j8YtUDn6yEgTMpKv8DCAkQABoMNjM3NDIzMTgzODA1Igz1ZimqCBV6b1H5UZwq3APlYC2p4WGLfZ9%2BKyH%2FQ7Z0Vk7JvCO2VXBaf%2BYVhEJapxhUp95xl%2F8gah44pqfa8oyi24xrvYht0sAFsn6XaaA2NmH94kitl3czbbvF3MxZuS15Qq%2BPYzVXfERz5HnnZvUjS2i45uqcgiePgtHg0aqB5kHZJo4HEb1QjgIMXcslK%2BNUAnw8hRTbnEKNena1sdSTo4Eb%2BK62xmnkVEPVgSyKDDvSjPNBYGrk%2FspDC31Mumw5mDOgj%2F0G8ncCbG3sFj%2BRebNrxQGCwKSFyP3GIzwu8eE7nuoMHU8BH6%2BfN8tDQCXRUe%2FdPmjA5RMIUlHlWU0pJ%2B05MZVwe1PpbJdssjnimpZyzLh%2BiOySBiukMk8e6gHEZOqh9np5%2B%2F%2BRvnOHDOB6tQJp0z%2FbKgDVtB%2BkBwaMO00domcLH6FyQhXkX9aw1UDrZy9fnnBzf70Or77PSTlumEMyo4lCmE64ZYAaDyhJQ20UT4509ufblI%2F%2FUOAysLLkho1Sfu0H31mmucbvnbnI8TF8a7uhy%2FbLueW9t0KJPX6eyv5inlZS1zGr6HCUIv1drzAJxUPvFYbkR5BoXfjSMoHuCy9nuTvQbiy1rKfyV7zSOYvFDngQVOJAKcCP%2BQnrUdeAvubsd3tsbjCI3rjJBjqkAU7vL439ClgEpEG%2BNCucO3V4GZZKig6iZZzwxJcu7GK2%2F6yc7upHQ03DFGjiHy5qbMCCdAgOzkB6YBQIaX3O%2Fydyn1Fc3DfgzuxZEfa0QTOKpNEG3oUzXUeOGC4qPFPKwziCG3esErSaVRRSqn33PLOkaelK7qFRRWh7hOoZ4TgfNBaHxods5NUjcNSgpI1OzzqqNJ68oKnpTT%2BGR1waPWXW8wtS&X-Amz-Signature=de6c9a60d5c1ecbc9cbde98428e48ca25b2de25b6d42f8bd1790c68bcc54d041&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCLPIDBP%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDQBwSUKB%2Fw4LOI32bTW49G%2BSP%2Bhp3MU%2F3%2B4yu%2BKbPqQgIhAMbIadq0JjYbyPRIZJgWdP6yMHMmr5j8YtUDn6yEgTMpKv8DCAkQABoMNjM3NDIzMTgzODA1Igz1ZimqCBV6b1H5UZwq3APlYC2p4WGLfZ9%2BKyH%2FQ7Z0Vk7JvCO2VXBaf%2BYVhEJapxhUp95xl%2F8gah44pqfa8oyi24xrvYht0sAFsn6XaaA2NmH94kitl3czbbvF3MxZuS15Qq%2BPYzVXfERz5HnnZvUjS2i45uqcgiePgtHg0aqB5kHZJo4HEb1QjgIMXcslK%2BNUAnw8hRTbnEKNena1sdSTo4Eb%2BK62xmnkVEPVgSyKDDvSjPNBYGrk%2FspDC31Mumw5mDOgj%2F0G8ncCbG3sFj%2BRebNrxQGCwKSFyP3GIzwu8eE7nuoMHU8BH6%2BfN8tDQCXRUe%2FdPmjA5RMIUlHlWU0pJ%2B05MZVwe1PpbJdssjnimpZyzLh%2BiOySBiukMk8e6gHEZOqh9np5%2B%2F%2BRvnOHDOB6tQJp0z%2FbKgDVtB%2BkBwaMO00domcLH6FyQhXkX9aw1UDrZy9fnnBzf70Or77PSTlumEMyo4lCmE64ZYAaDyhJQ20UT4509ufblI%2F%2FUOAysLLkho1Sfu0H31mmucbvnbnI8TF8a7uhy%2FbLueW9t0KJPX6eyv5inlZS1zGr6HCUIv1drzAJxUPvFYbkR5BoXfjSMoHuCy9nuTvQbiy1rKfyV7zSOYvFDngQVOJAKcCP%2BQnrUdeAvubsd3tsbjCI3rjJBjqkAU7vL439ClgEpEG%2BNCucO3V4GZZKig6iZZzwxJcu7GK2%2F6yc7upHQ03DFGjiHy5qbMCCdAgOzkB6YBQIaX3O%2Fydyn1Fc3DfgzuxZEfa0QTOKpNEG3oUzXUeOGC4qPFPKwziCG3esErSaVRRSqn33PLOkaelK7qFRRWh7hOoZ4TgfNBaHxods5NUjcNSgpI1OzzqqNJ68oKnpTT%2BGR1waPWXW8wtS&X-Amz-Signature=c523a7074c046e86ed26a4461fec64cac9dd849f0be6f7deb361cb3681b003db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCLPIDBP%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDQBwSUKB%2Fw4LOI32bTW49G%2BSP%2Bhp3MU%2F3%2B4yu%2BKbPqQgIhAMbIadq0JjYbyPRIZJgWdP6yMHMmr5j8YtUDn6yEgTMpKv8DCAkQABoMNjM3NDIzMTgzODA1Igz1ZimqCBV6b1H5UZwq3APlYC2p4WGLfZ9%2BKyH%2FQ7Z0Vk7JvCO2VXBaf%2BYVhEJapxhUp95xl%2F8gah44pqfa8oyi24xrvYht0sAFsn6XaaA2NmH94kitl3czbbvF3MxZuS15Qq%2BPYzVXfERz5HnnZvUjS2i45uqcgiePgtHg0aqB5kHZJo4HEb1QjgIMXcslK%2BNUAnw8hRTbnEKNena1sdSTo4Eb%2BK62xmnkVEPVgSyKDDvSjPNBYGrk%2FspDC31Mumw5mDOgj%2F0G8ncCbG3sFj%2BRebNrxQGCwKSFyP3GIzwu8eE7nuoMHU8BH6%2BfN8tDQCXRUe%2FdPmjA5RMIUlHlWU0pJ%2B05MZVwe1PpbJdssjnimpZyzLh%2BiOySBiukMk8e6gHEZOqh9np5%2B%2F%2BRvnOHDOB6tQJp0z%2FbKgDVtB%2BkBwaMO00domcLH6FyQhXkX9aw1UDrZy9fnnBzf70Or77PSTlumEMyo4lCmE64ZYAaDyhJQ20UT4509ufblI%2F%2FUOAysLLkho1Sfu0H31mmucbvnbnI8TF8a7uhy%2FbLueW9t0KJPX6eyv5inlZS1zGr6HCUIv1drzAJxUPvFYbkR5BoXfjSMoHuCy9nuTvQbiy1rKfyV7zSOYvFDngQVOJAKcCP%2BQnrUdeAvubsd3tsbjCI3rjJBjqkAU7vL439ClgEpEG%2BNCucO3V4GZZKig6iZZzwxJcu7GK2%2F6yc7upHQ03DFGjiHy5qbMCCdAgOzkB6YBQIaX3O%2Fydyn1Fc3DfgzuxZEfa0QTOKpNEG3oUzXUeOGC4qPFPKwziCG3esErSaVRRSqn33PLOkaelK7qFRRWh7hOoZ4TgfNBaHxods5NUjcNSgpI1OzzqqNJ68oKnpTT%2BGR1waPWXW8wtS&X-Amz-Signature=55e7f4854be2f31a9bb2e3bb81a980a31f98328dfc02ea963ec25589e585464e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCLPIDBP%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDQBwSUKB%2Fw4LOI32bTW49G%2BSP%2Bhp3MU%2F3%2B4yu%2BKbPqQgIhAMbIadq0JjYbyPRIZJgWdP6yMHMmr5j8YtUDn6yEgTMpKv8DCAkQABoMNjM3NDIzMTgzODA1Igz1ZimqCBV6b1H5UZwq3APlYC2p4WGLfZ9%2BKyH%2FQ7Z0Vk7JvCO2VXBaf%2BYVhEJapxhUp95xl%2F8gah44pqfa8oyi24xrvYht0sAFsn6XaaA2NmH94kitl3czbbvF3MxZuS15Qq%2BPYzVXfERz5HnnZvUjS2i45uqcgiePgtHg0aqB5kHZJo4HEb1QjgIMXcslK%2BNUAnw8hRTbnEKNena1sdSTo4Eb%2BK62xmnkVEPVgSyKDDvSjPNBYGrk%2FspDC31Mumw5mDOgj%2F0G8ncCbG3sFj%2BRebNrxQGCwKSFyP3GIzwu8eE7nuoMHU8BH6%2BfN8tDQCXRUe%2FdPmjA5RMIUlHlWU0pJ%2B05MZVwe1PpbJdssjnimpZyzLh%2BiOySBiukMk8e6gHEZOqh9np5%2B%2F%2BRvnOHDOB6tQJp0z%2FbKgDVtB%2BkBwaMO00domcLH6FyQhXkX9aw1UDrZy9fnnBzf70Or77PSTlumEMyo4lCmE64ZYAaDyhJQ20UT4509ufblI%2F%2FUOAysLLkho1Sfu0H31mmucbvnbnI8TF8a7uhy%2FbLueW9t0KJPX6eyv5inlZS1zGr6HCUIv1drzAJxUPvFYbkR5BoXfjSMoHuCy9nuTvQbiy1rKfyV7zSOYvFDngQVOJAKcCP%2BQnrUdeAvubsd3tsbjCI3rjJBjqkAU7vL439ClgEpEG%2BNCucO3V4GZZKig6iZZzwxJcu7GK2%2F6yc7upHQ03DFGjiHy5qbMCCdAgOzkB6YBQIaX3O%2Fydyn1Fc3DfgzuxZEfa0QTOKpNEG3oUzXUeOGC4qPFPKwziCG3esErSaVRRSqn33PLOkaelK7qFRRWh7hOoZ4TgfNBaHxods5NUjcNSgpI1OzzqqNJ68oKnpTT%2BGR1waPWXW8wtS&X-Amz-Signature=8594484d6ea78becf8c9c3e6c85d79fb94c3f4e5b46f6a8c131d47363acc8916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCLPIDBP%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDQBwSUKB%2Fw4LOI32bTW49G%2BSP%2Bhp3MU%2F3%2B4yu%2BKbPqQgIhAMbIadq0JjYbyPRIZJgWdP6yMHMmr5j8YtUDn6yEgTMpKv8DCAkQABoMNjM3NDIzMTgzODA1Igz1ZimqCBV6b1H5UZwq3APlYC2p4WGLfZ9%2BKyH%2FQ7Z0Vk7JvCO2VXBaf%2BYVhEJapxhUp95xl%2F8gah44pqfa8oyi24xrvYht0sAFsn6XaaA2NmH94kitl3czbbvF3MxZuS15Qq%2BPYzVXfERz5HnnZvUjS2i45uqcgiePgtHg0aqB5kHZJo4HEb1QjgIMXcslK%2BNUAnw8hRTbnEKNena1sdSTo4Eb%2BK62xmnkVEPVgSyKDDvSjPNBYGrk%2FspDC31Mumw5mDOgj%2F0G8ncCbG3sFj%2BRebNrxQGCwKSFyP3GIzwu8eE7nuoMHU8BH6%2BfN8tDQCXRUe%2FdPmjA5RMIUlHlWU0pJ%2B05MZVwe1PpbJdssjnimpZyzLh%2BiOySBiukMk8e6gHEZOqh9np5%2B%2F%2BRvnOHDOB6tQJp0z%2FbKgDVtB%2BkBwaMO00domcLH6FyQhXkX9aw1UDrZy9fnnBzf70Or77PSTlumEMyo4lCmE64ZYAaDyhJQ20UT4509ufblI%2F%2FUOAysLLkho1Sfu0H31mmucbvnbnI8TF8a7uhy%2FbLueW9t0KJPX6eyv5inlZS1zGr6HCUIv1drzAJxUPvFYbkR5BoXfjSMoHuCy9nuTvQbiy1rKfyV7zSOYvFDngQVOJAKcCP%2BQnrUdeAvubsd3tsbjCI3rjJBjqkAU7vL439ClgEpEG%2BNCucO3V4GZZKig6iZZzwxJcu7GK2%2F6yc7upHQ03DFGjiHy5qbMCCdAgOzkB6YBQIaX3O%2Fydyn1Fc3DfgzuxZEfa0QTOKpNEG3oUzXUeOGC4qPFPKwziCG3esErSaVRRSqn33PLOkaelK7qFRRWh7hOoZ4TgfNBaHxods5NUjcNSgpI1OzzqqNJ68oKnpTT%2BGR1waPWXW8wtS&X-Amz-Signature=a1a5911d734c280c3a9f8ffafbcbba292cda9ec385ea3d0009cbc609547e3d90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCLPIDBP%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDQBwSUKB%2Fw4LOI32bTW49G%2BSP%2Bhp3MU%2F3%2B4yu%2BKbPqQgIhAMbIadq0JjYbyPRIZJgWdP6yMHMmr5j8YtUDn6yEgTMpKv8DCAkQABoMNjM3NDIzMTgzODA1Igz1ZimqCBV6b1H5UZwq3APlYC2p4WGLfZ9%2BKyH%2FQ7Z0Vk7JvCO2VXBaf%2BYVhEJapxhUp95xl%2F8gah44pqfa8oyi24xrvYht0sAFsn6XaaA2NmH94kitl3czbbvF3MxZuS15Qq%2BPYzVXfERz5HnnZvUjS2i45uqcgiePgtHg0aqB5kHZJo4HEb1QjgIMXcslK%2BNUAnw8hRTbnEKNena1sdSTo4Eb%2BK62xmnkVEPVgSyKDDvSjPNBYGrk%2FspDC31Mumw5mDOgj%2F0G8ncCbG3sFj%2BRebNrxQGCwKSFyP3GIzwu8eE7nuoMHU8BH6%2BfN8tDQCXRUe%2FdPmjA5RMIUlHlWU0pJ%2B05MZVwe1PpbJdssjnimpZyzLh%2BiOySBiukMk8e6gHEZOqh9np5%2B%2F%2BRvnOHDOB6tQJp0z%2FbKgDVtB%2BkBwaMO00domcLH6FyQhXkX9aw1UDrZy9fnnBzf70Or77PSTlumEMyo4lCmE64ZYAaDyhJQ20UT4509ufblI%2F%2FUOAysLLkho1Sfu0H31mmucbvnbnI8TF8a7uhy%2FbLueW9t0KJPX6eyv5inlZS1zGr6HCUIv1drzAJxUPvFYbkR5BoXfjSMoHuCy9nuTvQbiy1rKfyV7zSOYvFDngQVOJAKcCP%2BQnrUdeAvubsd3tsbjCI3rjJBjqkAU7vL439ClgEpEG%2BNCucO3V4GZZKig6iZZzwxJcu7GK2%2F6yc7upHQ03DFGjiHy5qbMCCdAgOzkB6YBQIaX3O%2Fydyn1Fc3DfgzuxZEfa0QTOKpNEG3oUzXUeOGC4qPFPKwziCG3esErSaVRRSqn33PLOkaelK7qFRRWh7hOoZ4TgfNBaHxods5NUjcNSgpI1OzzqqNJ68oKnpTT%2BGR1waPWXW8wtS&X-Amz-Signature=b3236a5f3e274e2d8e8f72a89ef17cda40e8e84e35ccfb1a7d74825751af5000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCLPIDBP%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDQBwSUKB%2Fw4LOI32bTW49G%2BSP%2Bhp3MU%2F3%2B4yu%2BKbPqQgIhAMbIadq0JjYbyPRIZJgWdP6yMHMmr5j8YtUDn6yEgTMpKv8DCAkQABoMNjM3NDIzMTgzODA1Igz1ZimqCBV6b1H5UZwq3APlYC2p4WGLfZ9%2BKyH%2FQ7Z0Vk7JvCO2VXBaf%2BYVhEJapxhUp95xl%2F8gah44pqfa8oyi24xrvYht0sAFsn6XaaA2NmH94kitl3czbbvF3MxZuS15Qq%2BPYzVXfERz5HnnZvUjS2i45uqcgiePgtHg0aqB5kHZJo4HEb1QjgIMXcslK%2BNUAnw8hRTbnEKNena1sdSTo4Eb%2BK62xmnkVEPVgSyKDDvSjPNBYGrk%2FspDC31Mumw5mDOgj%2F0G8ncCbG3sFj%2BRebNrxQGCwKSFyP3GIzwu8eE7nuoMHU8BH6%2BfN8tDQCXRUe%2FdPmjA5RMIUlHlWU0pJ%2B05MZVwe1PpbJdssjnimpZyzLh%2BiOySBiukMk8e6gHEZOqh9np5%2B%2F%2BRvnOHDOB6tQJp0z%2FbKgDVtB%2BkBwaMO00domcLH6FyQhXkX9aw1UDrZy9fnnBzf70Or77PSTlumEMyo4lCmE64ZYAaDyhJQ20UT4509ufblI%2F%2FUOAysLLkho1Sfu0H31mmucbvnbnI8TF8a7uhy%2FbLueW9t0KJPX6eyv5inlZS1zGr6HCUIv1drzAJxUPvFYbkR5BoXfjSMoHuCy9nuTvQbiy1rKfyV7zSOYvFDngQVOJAKcCP%2BQnrUdeAvubsd3tsbjCI3rjJBjqkAU7vL439ClgEpEG%2BNCucO3V4GZZKig6iZZzwxJcu7GK2%2F6yc7upHQ03DFGjiHy5qbMCCdAgOzkB6YBQIaX3O%2Fydyn1Fc3DfgzuxZEfa0QTOKpNEG3oUzXUeOGC4qPFPKwziCG3esErSaVRRSqn33PLOkaelK7qFRRWh7hOoZ4TgfNBaHxods5NUjcNSgpI1OzzqqNJ68oKnpTT%2BGR1waPWXW8wtS&X-Amz-Signature=1d97f6dc0f23668b740f7bb5ad15c5dc056c3a15dbad7cba47681842a2239e89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCLPIDBP%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDQBwSUKB%2Fw4LOI32bTW49G%2BSP%2Bhp3MU%2F3%2B4yu%2BKbPqQgIhAMbIadq0JjYbyPRIZJgWdP6yMHMmr5j8YtUDn6yEgTMpKv8DCAkQABoMNjM3NDIzMTgzODA1Igz1ZimqCBV6b1H5UZwq3APlYC2p4WGLfZ9%2BKyH%2FQ7Z0Vk7JvCO2VXBaf%2BYVhEJapxhUp95xl%2F8gah44pqfa8oyi24xrvYht0sAFsn6XaaA2NmH94kitl3czbbvF3MxZuS15Qq%2BPYzVXfERz5HnnZvUjS2i45uqcgiePgtHg0aqB5kHZJo4HEb1QjgIMXcslK%2BNUAnw8hRTbnEKNena1sdSTo4Eb%2BK62xmnkVEPVgSyKDDvSjPNBYGrk%2FspDC31Mumw5mDOgj%2F0G8ncCbG3sFj%2BRebNrxQGCwKSFyP3GIzwu8eE7nuoMHU8BH6%2BfN8tDQCXRUe%2FdPmjA5RMIUlHlWU0pJ%2B05MZVwe1PpbJdssjnimpZyzLh%2BiOySBiukMk8e6gHEZOqh9np5%2B%2F%2BRvnOHDOB6tQJp0z%2FbKgDVtB%2BkBwaMO00domcLH6FyQhXkX9aw1UDrZy9fnnBzf70Or77PSTlumEMyo4lCmE64ZYAaDyhJQ20UT4509ufblI%2F%2FUOAysLLkho1Sfu0H31mmucbvnbnI8TF8a7uhy%2FbLueW9t0KJPX6eyv5inlZS1zGr6HCUIv1drzAJxUPvFYbkR5BoXfjSMoHuCy9nuTvQbiy1rKfyV7zSOYvFDngQVOJAKcCP%2BQnrUdeAvubsd3tsbjCI3rjJBjqkAU7vL439ClgEpEG%2BNCucO3V4GZZKig6iZZzwxJcu7GK2%2F6yc7upHQ03DFGjiHy5qbMCCdAgOzkB6YBQIaX3O%2Fydyn1Fc3DfgzuxZEfa0QTOKpNEG3oUzXUeOGC4qPFPKwziCG3esErSaVRRSqn33PLOkaelK7qFRRWh7hOoZ4TgfNBaHxods5NUjcNSgpI1OzzqqNJ68oKnpTT%2BGR1waPWXW8wtS&X-Amz-Signature=84792b81756965ad5932ce20a8fe828b6d3a34cb2996258f126df21aae2a2a04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCLPIDBP%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDQBwSUKB%2Fw4LOI32bTW49G%2BSP%2Bhp3MU%2F3%2B4yu%2BKbPqQgIhAMbIadq0JjYbyPRIZJgWdP6yMHMmr5j8YtUDn6yEgTMpKv8DCAkQABoMNjM3NDIzMTgzODA1Igz1ZimqCBV6b1H5UZwq3APlYC2p4WGLfZ9%2BKyH%2FQ7Z0Vk7JvCO2VXBaf%2BYVhEJapxhUp95xl%2F8gah44pqfa8oyi24xrvYht0sAFsn6XaaA2NmH94kitl3czbbvF3MxZuS15Qq%2BPYzVXfERz5HnnZvUjS2i45uqcgiePgtHg0aqB5kHZJo4HEb1QjgIMXcslK%2BNUAnw8hRTbnEKNena1sdSTo4Eb%2BK62xmnkVEPVgSyKDDvSjPNBYGrk%2FspDC31Mumw5mDOgj%2F0G8ncCbG3sFj%2BRebNrxQGCwKSFyP3GIzwu8eE7nuoMHU8BH6%2BfN8tDQCXRUe%2FdPmjA5RMIUlHlWU0pJ%2B05MZVwe1PpbJdssjnimpZyzLh%2BiOySBiukMk8e6gHEZOqh9np5%2B%2F%2BRvnOHDOB6tQJp0z%2FbKgDVtB%2BkBwaMO00domcLH6FyQhXkX9aw1UDrZy9fnnBzf70Or77PSTlumEMyo4lCmE64ZYAaDyhJQ20UT4509ufblI%2F%2FUOAysLLkho1Sfu0H31mmucbvnbnI8TF8a7uhy%2FbLueW9t0KJPX6eyv5inlZS1zGr6HCUIv1drzAJxUPvFYbkR5BoXfjSMoHuCy9nuTvQbiy1rKfyV7zSOYvFDngQVOJAKcCP%2BQnrUdeAvubsd3tsbjCI3rjJBjqkAU7vL439ClgEpEG%2BNCucO3V4GZZKig6iZZzwxJcu7GK2%2F6yc7upHQ03DFGjiHy5qbMCCdAgOzkB6YBQIaX3O%2Fydyn1Fc3DfgzuxZEfa0QTOKpNEG3oUzXUeOGC4qPFPKwziCG3esErSaVRRSqn33PLOkaelK7qFRRWh7hOoZ4TgfNBaHxods5NUjcNSgpI1OzzqqNJ68oKnpTT%2BGR1waPWXW8wtS&X-Amz-Signature=774cd15011d5c38d378602d97deae1bf3c388cb5c4adbf658a31380b94b1c338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BLWE3VK%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIF1GLyMN99ugcwL%2Bk8BSsaQpEOyAr0v%2B7e%2FBXJwyKGsoAiEAqxmMZhgaee%2FjResAe1iNIbj9H1%2FHcxvLeF%2ByedLtGaMq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDJ%2BLductBVTByd3%2FKCrcAwwKPrXhNEKQvpXR3WuCaPyY3nGq2gbVgcwU8o7%2FV%2FzKhl7eJzR%2BivP5Z8Ms8WsRRcq0Se5iztccJn5LDgY29e2rjjVnJqLxyHNzIpLNEAa6R5PFZLkjvgk9orOP7D1eCdzFCTrf6mnIfAraie7HN1Iyw26CGSiJpK4HTGr3tsWVdC7cXaM7SPxHMTCEBlmEwa9ITFV7bSD%2FAw3Vp44qeewgLz4PufxRvIo27r8QmQKLkRMoZhhJvSX0B6RaLXE0yljT93fwMaldBP6Ej54hi%2BlCoSX%2BkP1i4oNrJoWdeROf0hTUjZuX6JJPqpcUpL3NyPJGYehRzsCZ0qqq1%2BER%2B9nRzS%2F0O%2BdpXiLe3pFyf%2FbEREuDnT%2F%2FmnOarvS5N1kWzelpkpR6JoKiEF%2FZjgvcYZt3Yyopl9kw5Sy1F0JX5gK1wC9mYUiIQmGMUqJOc9uae7%2B3a6h9qmKq0g5pXH%2B0fbCJB%2BtPD5nMF0%2FhjjzLvN7vDWT%2FXrhpAZ2euuIpl5L7Y6oy0HsVS916vQFvdrtdUAb1ZJA%2B%2BdSW4cjDJyuUi2lbK8Q8mtCViWzUQWKtZ040iVQdiCGINoogY7DHgxBewhvfEE2glt2VsNFLdb2jr5Hznc3gAgc%2F7l56oB5xMObfuMkGOqUBLsXWSl1Af7NFa5tv1jic5tQvhUE3ZYqCavf5C4abBjU9owaHwGXn4mS6fwuGUZDIZgijXeDQtcg5GAUhAbJTgeoQRAh%2F99fjC718R%2BCXyOSdWs4hm3Fh2vLurZ9btJaVboGH19cN9KjdtvBWWRk9ZtyUTpRxiMPzXYomR19ioqf68pYmbIYye9VAhM9pmau3%2B7Q2rJZyKssWwj2DpgXkXWZKTZV2&X-Amz-Signature=ef4dcd49341ca598ac9649f056f32a19c551102c8ede5c5bc3782cec85d63ec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIICAI6Z%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDCd2H41UQDEULbvPCp4Lvf4EmpYXb9kUJsMTMxEKb2mAIgL6FUSkFr2aCrWXCXzTX65uxyraBJBlmnZ4PtRK28xbsq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDNuOkwA7hcLgoPZRyircA0TfIWJ6N2QL7XJH%2BF7H9vjyHrIVy1yUNRX%2B1wyWmfHaZ4qcO5EQAQE4JpLkAdGen1QrhaXffHH7isNmrZWkPo2q2dWhJ5h6OgeaQoz61L2Y0Ei4jm0QgewCNXk0UaHk3Z%2BqummeJo6qet9jxNa2t1PoY6yHm%2Bsbmqqb6m7QjGCVbeXErKMl1DbaBtd%2FzR2Ll55skWyI478j75avQ5dxDmZncpYoo3QW3ZyTRU%2Fg0wr90bSjgojdeGt3oyR2faJLbuQ5vuo%2FbYUed8gB8B96CSDQNEnA3BtZCrXSqkEzpkNjfa2VHhNYF7UeO7nKktGW4KjwQ9d69U4xBa1TJS%2B6S9w4dy2ge5%2FB0z1J3zkPjVZXwpQMmyRonsc4ENDGoFo%2BhOXjuU1dVyFRNdTAqumhZhmavByIh9Kdop5lybF9YZNhrpS5TTp5RIbf7UI61ITrJ%2BKOlIDifsXPJDyP%2B2DIIMh%2BlnQFZGYG8efmIc%2B8P%2BhPnaYo8tJlELawd5s%2FJfTHgcA6Vt4ipOn4QgSnjr0nt7eJ7rTSe2dyuYQ1dCeZthZMIi%2BesjZNWq4RhjSSL9apoceM6HsK7emXZ3BT7jrN1KGFvG98i7OfIOxtLk7giv4%2Bo5DOBKOWWUnqWQyxMKfeuMkGOqUB6w%2F6ir8xmYp1dh3Nngvv9pwVtUGEGiCMJF5Plm0rY0MOB7Iett9VPxW%2F1%2FGXmicf9KzZPjJVM16k4acUOonGSUxlFGiOSjrAx9kxEOdGSkgf1SsJAgJZDfQV4%2Fn8X1iaIfvSCj8jF%2FxOEp0PXsA%2Br0QkfIDyWIB5O%2B%2BPyNz6UDRvyrr5ru4qHkyA8f6RNH2kzoQlwdNMcYtv24Qy5x2nduUSgMOz&X-Amz-Signature=0748bd0aa54f4093f8d4e2b16e28914dc7f2982bbf2ced14ff43114c42fc2abf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBHRB2YZ%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIEicivxb4wO8MxO3Xfz30WvIw73PRDFmEYSBG%2Fu31hUpAiEAztr4a0WjLy%2F6UwEzMGYuHW%2FHN6%2Bd3gLAO9kFq4U%2B%2F7sq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDIP4ud2er7pEppZeoCrcA5gbR8OLokipsJEgtlKvA64pl9ZusFlbTxF8Asy4o6Wb8ZUC1sXc2y0yFSCq85%2Ff1OviLf%2F6KW4L53QNij%2Fqhab9FX5lT0tinLGeh98%2BW1ycOFcmuqZUb8TBwPqeex5E1b7EX097ITD%2FAERt%2FjFpnKTzs4lZGzsGwKYa71SlZUa0IlG69FAjV2VQMJ25ihqZ%2F75rb%2Fwen2YLSlK6aF%2FI%2FG00nrg9TTHkwwpTRJQM7t9DU5X6wkhOCpAPNHYMX5Vj7FahRN9gx2QDxVddsRqorw%2FQugcNzQU8rW77yXke3Nbiz0fx15fs3UDFub5gQvwhIIkMXdWNTfwt%2FSnDi%2FEcCLbtWqk8qqhNbFUIYByNt%2BRqkMElI5pYFefISdi%2FACw0g%2BtuUmA%2BYZWtfwmoSxLsfVdhlDicIvcEqzxCP%2B8IaDutrU77YmYExe3LWkzcCp6rVFPqq7z%2F2HL%2F%2FV30TIlcUYBTy8%2Bc%2Bg%2BuR4gXnGst%2FvUXYmDedeRGY%2FAQ48sWDNb0eSLd5tHbhJsIsb%2F8RWB1h0tjy7Vlhc4di9kiTeM%2BuRxpTeP5SlIy9v8luJGAnUOEak6QVbh3Ryb2zWd7g%2B2Z71yZK%2B1PmHhLYbUIBB6hYCGd%2BLbZMnqzUOsydVKhMKfguMkGOqUB9aYoytuQeGz9zqWOkfXAlGDbbuXZbkXt5JM5Klyu7z%2FEkTDBmn%2BXX2dtuAMPNuxjnSfSm1BQOxzgbOCHnHa%2FZcEBCJ5xSHpTtspf0lVo8k8l3G39SV2x%2FF%2B8wzgv9%2FeK9T3Jgu6se1OnJ67HGplIyRVuZfHLWlg7Z%2BjsO4hP1QPK8f2v%2BqbjoT%2F%2BQkOEGlOgpUAt4DCscREgPAooN80cuLt0S4mx&X-Amz-Signature=d0e45800a145a22723691ba11bf45ff489e763708a530a00133f4cabfe3afae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCLPIDBP%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDQBwSUKB%2Fw4LOI32bTW49G%2BSP%2Bhp3MU%2F3%2B4yu%2BKbPqQgIhAMbIadq0JjYbyPRIZJgWdP6yMHMmr5j8YtUDn6yEgTMpKv8DCAkQABoMNjM3NDIzMTgzODA1Igz1ZimqCBV6b1H5UZwq3APlYC2p4WGLfZ9%2BKyH%2FQ7Z0Vk7JvCO2VXBaf%2BYVhEJapxhUp95xl%2F8gah44pqfa8oyi24xrvYht0sAFsn6XaaA2NmH94kitl3czbbvF3MxZuS15Qq%2BPYzVXfERz5HnnZvUjS2i45uqcgiePgtHg0aqB5kHZJo4HEb1QjgIMXcslK%2BNUAnw8hRTbnEKNena1sdSTo4Eb%2BK62xmnkVEPVgSyKDDvSjPNBYGrk%2FspDC31Mumw5mDOgj%2F0G8ncCbG3sFj%2BRebNrxQGCwKSFyP3GIzwu8eE7nuoMHU8BH6%2BfN8tDQCXRUe%2FdPmjA5RMIUlHlWU0pJ%2B05MZVwe1PpbJdssjnimpZyzLh%2BiOySBiukMk8e6gHEZOqh9np5%2B%2F%2BRvnOHDOB6tQJp0z%2FbKgDVtB%2BkBwaMO00domcLH6FyQhXkX9aw1UDrZy9fnnBzf70Or77PSTlumEMyo4lCmE64ZYAaDyhJQ20UT4509ufblI%2F%2FUOAysLLkho1Sfu0H31mmucbvnbnI8TF8a7uhy%2FbLueW9t0KJPX6eyv5inlZS1zGr6HCUIv1drzAJxUPvFYbkR5BoXfjSMoHuCy9nuTvQbiy1rKfyV7zSOYvFDngQVOJAKcCP%2BQnrUdeAvubsd3tsbjCI3rjJBjqkAU7vL439ClgEpEG%2BNCucO3V4GZZKig6iZZzwxJcu7GK2%2F6yc7upHQ03DFGjiHy5qbMCCdAgOzkB6YBQIaX3O%2Fydyn1Fc3DfgzuxZEfa0QTOKpNEG3oUzXUeOGC4qPFPKwziCG3esErSaVRRSqn33PLOkaelK7qFRRWh7hOoZ4TgfNBaHxods5NUjcNSgpI1OzzqqNJ68oKnpTT%2BGR1waPWXW8wtS&X-Amz-Signature=a23ece5481ef2dd4ca1b3ddc110fb02f52feafbf3fb202a2c8165ff46f57727e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRRQPJLH%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCPwd79XLiay%2BlP1AbOETKzVuXySOqLC6qCCFju5fBREQIgbIlNKjE31lFUlPoS409HPwSeUx1oSn89X46W0KrWZTsq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDAuX%2F06w5%2B%2Bfx%2Bcn2SrcA4hGz7tjrdE0f4m5n9mMj4ihqVTnUHdMuvfOmTWLW3Iz5d5PIVUM3WTtTYxs%2FnLF1LLmkSxvULrhjTVkceMe3%2B%2FhqfEDjCeCYOLAdNAx4oVy%2FFnLk11n24EzR5EqhYZpgKyQLgpW%2Bih1XExq8jzrsSCRD%2BD4sXe9oSinyPFtWWVp1I%2F0AZebh2EITizNQVtYdPZkL%2F%2BnCLXgWC7k2pi4p%2BaW9%2FkX16Qkl4xNIsY6ahxlzV7vWzqUFGEgS0NdIVHbMd2MJJ7yMKnKHlcuCYKdzEBb3jZvm%2BLFD3Rrh6Z53%2FWXl0d04B7ICYilHanQOj03toKo%2BokGTS%2BU30w4%2BSBP4hXiyM0wEPPfrAiO2xTH1rCLToIP3eg%2BrIvto3Mjk4G7QvvdUoBacYkp2WM7vD%2BEZtzd0%2Bm6GKOgCkDIkuiIfPNNR%2Bnn8uye5Lp5jjOB5lMqZZXNe%2BNj7IbNq%2FHay0KBUKHSe7Kziub3HelE3pmrW78fi13rsxczOYCe2K6YLTQ80QyFox1mtKkjq1oD%2BokDTlQ2gjvq3u9d%2Fq%2BiS8ip4VyH%2FY19466%2B6sy9idwJ4EHbMylIl87l94Awxtd7ssGQOa11YpeTKt%2FSdXt622vJCszhesJOt0lbTGdbqMR6MKTguMkGOqUBhf3%2Fx6%2F32QIb69dVa7tp8KUA2imOOopfzm3wXJ5qnB39HPYTtLBukhP74UaBmd5kOpOvfYfjxqqaZcpXV68K0MooYNi1XziRDrkzVOINHIiSBG9tCCtEdlvXRtIPtqVr%2FF%2Fgh8FSUbgor1slTKohlbcNR%2BbE4EGpiMdI%2BW%2FjMe8VjHcii6AbezigPXtRmosSdHgcNwP0fOJGqTE53zO8bnlWIg54&X-Amz-Signature=44b9242a3ec56ee04bdcaab360b05cd1ee19bacfac176b15b1ec2d5a359943b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCLPIDBP%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDQBwSUKB%2Fw4LOI32bTW49G%2BSP%2Bhp3MU%2F3%2B4yu%2BKbPqQgIhAMbIadq0JjYbyPRIZJgWdP6yMHMmr5j8YtUDn6yEgTMpKv8DCAkQABoMNjM3NDIzMTgzODA1Igz1ZimqCBV6b1H5UZwq3APlYC2p4WGLfZ9%2BKyH%2FQ7Z0Vk7JvCO2VXBaf%2BYVhEJapxhUp95xl%2F8gah44pqfa8oyi24xrvYht0sAFsn6XaaA2NmH94kitl3czbbvF3MxZuS15Qq%2BPYzVXfERz5HnnZvUjS2i45uqcgiePgtHg0aqB5kHZJo4HEb1QjgIMXcslK%2BNUAnw8hRTbnEKNena1sdSTo4Eb%2BK62xmnkVEPVgSyKDDvSjPNBYGrk%2FspDC31Mumw5mDOgj%2F0G8ncCbG3sFj%2BRebNrxQGCwKSFyP3GIzwu8eE7nuoMHU8BH6%2BfN8tDQCXRUe%2FdPmjA5RMIUlHlWU0pJ%2B05MZVwe1PpbJdssjnimpZyzLh%2BiOySBiukMk8e6gHEZOqh9np5%2B%2F%2BRvnOHDOB6tQJp0z%2FbKgDVtB%2BkBwaMO00domcLH6FyQhXkX9aw1UDrZy9fnnBzf70Or77PSTlumEMyo4lCmE64ZYAaDyhJQ20UT4509ufblI%2F%2FUOAysLLkho1Sfu0H31mmucbvnbnI8TF8a7uhy%2FbLueW9t0KJPX6eyv5inlZS1zGr6HCUIv1drzAJxUPvFYbkR5BoXfjSMoHuCy9nuTvQbiy1rKfyV7zSOYvFDngQVOJAKcCP%2BQnrUdeAvubsd3tsbjCI3rjJBjqkAU7vL439ClgEpEG%2BNCucO3V4GZZKig6iZZzwxJcu7GK2%2F6yc7upHQ03DFGjiHy5qbMCCdAgOzkB6YBQIaX3O%2Fydyn1Fc3DfgzuxZEfa0QTOKpNEG3oUzXUeOGC4qPFPKwziCG3esErSaVRRSqn33PLOkaelK7qFRRWh7hOoZ4TgfNBaHxods5NUjcNSgpI1OzzqqNJ68oKnpTT%2BGR1waPWXW8wtS&X-Amz-Signature=0cadbabc11d86ab6b152f64fa46708cb2da9bce384687b59c990d299c3765fdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ4HSH7M%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC%2FECZ3%2F9GJZ7%2Fu4RKzG70GemQsRV6pe8gx0Lht8RE42QIhAIW11Mnv2Ge2DVdXYuCrWpBscgFQ5emfkqhNvaq5akTLKv8DCAkQABoMNjM3NDIzMTgzODA1IgwJu69xwXF%2FfcPEL9wq3AMbzeNgEOMn6OeprQdqklQc8q3ilvCsx1OaDXMsvwn%2B%2BISy70Y%2BlezKSUjRfA4KZZAvtZehFHkPXPq6GFpX%2By9ruWUiTaUO4OqvGBXyhUUM%2BHGqkGHd5PwuwMCF%2BKn4oJ4xZ27nucJTMdO4T4plrGJSmZsyHVmC6GMfdbQjKfi%2F9Zl%2FKD3EoLjvWCiUDBsCu3eDf6GrpILV5pFekyopxU83%2BVkUZItMd5a1aLoPSk%2BHgLXSPRzfNiM%2FIUI5haTkq9CDfrBhKwM9Y6qmbHKPmrlTP9mS2KqvlEx6Wwapb8SiQU6O1WfzM2sSiJC5z412xZs6HU28KGFYi9WUthIgwIEZLIJbxMNgNrTVror7jB%2F933rgxD37mN7%2Fq2bcGn8h6rHtHcH3MT6y4tlnorugTTjOJQno1%2Bsh5oziKi2T4BSJKum4uzKZEPFrt6OOd190z%2F1uiSpl2AE7BwAbe2P8X4WrUecoJ7mymHpBHVgY4QWhKjEo2e%2Fj6agVCWgq3t9y25ra6Jlp7236pwWWsUNSCjOtVlmnyzy7hgm1VHKVIVKijX1KiMNfFAOrJIcWRdPdWffuzDr9NOHIC%2B5vaxeB5n4kcqbMog73g0z1I0UmKuguujNwOXK4Ug7olX5uXDDV3rjJBjqkAdz9Ky7LiHs7DZT9iiht138YE%2BAzzVLE3KrDgXZLRuqbYwt3%2FywVnlZ0KKKFBPQGQ5N7PcpHQBRQTU%2F7DptB3cwkSPmTDxsz2LcS%2BFVIrZORqKg2upR4QyIIeQC%2BxFwVFdiuHNYmwRIAKDFv1dcO4hlYeASnimXZsrHjUiw828sMTy7GgtFtvWB%2BvETfIGY0h5WhJjqFtG6hI4bBnjgUAddS7c3F&X-Amz-Signature=1075cc3554b9e08acf072f6eead54e1b41707e39c38f9276e5e23cfd1c00ec32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCLPIDBP%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDQBwSUKB%2Fw4LOI32bTW49G%2BSP%2Bhp3MU%2F3%2B4yu%2BKbPqQgIhAMbIadq0JjYbyPRIZJgWdP6yMHMmr5j8YtUDn6yEgTMpKv8DCAkQABoMNjM3NDIzMTgzODA1Igz1ZimqCBV6b1H5UZwq3APlYC2p4WGLfZ9%2BKyH%2FQ7Z0Vk7JvCO2VXBaf%2BYVhEJapxhUp95xl%2F8gah44pqfa8oyi24xrvYht0sAFsn6XaaA2NmH94kitl3czbbvF3MxZuS15Qq%2BPYzVXfERz5HnnZvUjS2i45uqcgiePgtHg0aqB5kHZJo4HEb1QjgIMXcslK%2BNUAnw8hRTbnEKNena1sdSTo4Eb%2BK62xmnkVEPVgSyKDDvSjPNBYGrk%2FspDC31Mumw5mDOgj%2F0G8ncCbG3sFj%2BRebNrxQGCwKSFyP3GIzwu8eE7nuoMHU8BH6%2BfN8tDQCXRUe%2FdPmjA5RMIUlHlWU0pJ%2B05MZVwe1PpbJdssjnimpZyzLh%2BiOySBiukMk8e6gHEZOqh9np5%2B%2F%2BRvnOHDOB6tQJp0z%2FbKgDVtB%2BkBwaMO00domcLH6FyQhXkX9aw1UDrZy9fnnBzf70Or77PSTlumEMyo4lCmE64ZYAaDyhJQ20UT4509ufblI%2F%2FUOAysLLkho1Sfu0H31mmucbvnbnI8TF8a7uhy%2FbLueW9t0KJPX6eyv5inlZS1zGr6HCUIv1drzAJxUPvFYbkR5BoXfjSMoHuCy9nuTvQbiy1rKfyV7zSOYvFDngQVOJAKcCP%2BQnrUdeAvubsd3tsbjCI3rjJBjqkAU7vL439ClgEpEG%2BNCucO3V4GZZKig6iZZzwxJcu7GK2%2F6yc7upHQ03DFGjiHy5qbMCCdAgOzkB6YBQIaX3O%2Fydyn1Fc3DfgzuxZEfa0QTOKpNEG3oUzXUeOGC4qPFPKwziCG3esErSaVRRSqn33PLOkaelK7qFRRWh7hOoZ4TgfNBaHxods5NUjcNSgpI1OzzqqNJ68oKnpTT%2BGR1waPWXW8wtS&X-Amz-Signature=240029141f9fdac06eee06ad97cf3b07419eadf881a4989da8d71e845582dbfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CUA4P3W%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIDdJpVeiOkU25l5mpwVggnI1wPy3y%2BJ3UKP1%2BSPu0Np4AiEAhyDJXt5zypERcqzD6hrvDCNQNpVMoNFO3d7DIU1tej0q%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDMvoygU6v7IDpl9rkircAx2UUZv9w%2F2RtMOyUmfcyCZNGozL4cWbZLkdiv0bKOwZEUtt6fkq9AwQI4V5J%2FtjPbqSNxlTA4IPCJibYo5FDMvxf1Vm5%2BXOgND60xVoJwYM4tngsqR5ZXBkGvpLWchnIQRCgNUinX303CjLJDXNEWJ7CiQ0DXOXawWX3uVWtGsrGqaLSjh0f7N%2BKIz2cdp0lLzRuCH%2FX9q%2FRqXYMmmtEVKfBCW5ztwh3ZlbdmZudS%2BTNcj8qqE26eA%2FkvPVBvmH78crU%2BpXUFA72sqwubDAitF14qhOiDwwuQrRD42l0AYA1qP5Z8V4LdafO8HPoffKBPebZ5FzCaZtnV5GW66LKbNk0HKjrGRBb%2BuZGMHtH1eDoZ%2BhtKhLu6%2B6jQi%2FU1KZfQ0jEchWgBqUSXCZ3kae01NDE2GpL%2FUPxPbF%2FmZcP%2FiNbm61PPayIOnVUqc9pBdYh%2B4AkVgRzZRYAFDnJ9%2B75pRubpDAE4B1Hgmj1Z9QOp5MJ%2BGbOhAeZXvuX5eJD0dqgEh5NSgZKBcJ5pecbu1hvl0r9uQHXGFuqhpK6uIajZVu2CPhf8KtJikTwryOGQfXzgCSFiTOOX0b3NOwOAsr9%2BI4hP5JtsGhtw1oWkk9yzbs01SIlzTeuW%2BA3aDZMI%2FeuMkGOqUBKhMq8dz7Df0Q%2B3IwcA87FAisaaMMny2l5aGr%2BzIIM2PGYhd5zpDmKNqIkaHwe5t0NqLU6wxUinBZrq2tXGX1BzuCQ90453Yv47C7XI8WnsNLcGHoTnksCAI9FNRa8h%2Bp1snC08m%2FwxGWE805G3KG5KrgwtwJ%2FAPbWet%2B%2F8%2BXWZD81H%2BQr77PUcAVDCt%2FBdSN9FjdPzQHnc3NuoROswOdGAQk56YN&X-Amz-Signature=c0a2ed5eef3b58ebb3e78636485f105d1802c5e77fd4d03a8fd47e4878d09554&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCLPIDBP%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDQBwSUKB%2Fw4LOI32bTW49G%2BSP%2Bhp3MU%2F3%2B4yu%2BKbPqQgIhAMbIadq0JjYbyPRIZJgWdP6yMHMmr5j8YtUDn6yEgTMpKv8DCAkQABoMNjM3NDIzMTgzODA1Igz1ZimqCBV6b1H5UZwq3APlYC2p4WGLfZ9%2BKyH%2FQ7Z0Vk7JvCO2VXBaf%2BYVhEJapxhUp95xl%2F8gah44pqfa8oyi24xrvYht0sAFsn6XaaA2NmH94kitl3czbbvF3MxZuS15Qq%2BPYzVXfERz5HnnZvUjS2i45uqcgiePgtHg0aqB5kHZJo4HEb1QjgIMXcslK%2BNUAnw8hRTbnEKNena1sdSTo4Eb%2BK62xmnkVEPVgSyKDDvSjPNBYGrk%2FspDC31Mumw5mDOgj%2F0G8ncCbG3sFj%2BRebNrxQGCwKSFyP3GIzwu8eE7nuoMHU8BH6%2BfN8tDQCXRUe%2FdPmjA5RMIUlHlWU0pJ%2B05MZVwe1PpbJdssjnimpZyzLh%2BiOySBiukMk8e6gHEZOqh9np5%2B%2F%2BRvnOHDOB6tQJp0z%2FbKgDVtB%2BkBwaMO00domcLH6FyQhXkX9aw1UDrZy9fnnBzf70Or77PSTlumEMyo4lCmE64ZYAaDyhJQ20UT4509ufblI%2F%2FUOAysLLkho1Sfu0H31mmucbvnbnI8TF8a7uhy%2FbLueW9t0KJPX6eyv5inlZS1zGr6HCUIv1drzAJxUPvFYbkR5BoXfjSMoHuCy9nuTvQbiy1rKfyV7zSOYvFDngQVOJAKcCP%2BQnrUdeAvubsd3tsbjCI3rjJBjqkAU7vL439ClgEpEG%2BNCucO3V4GZZKig6iZZzwxJcu7GK2%2F6yc7upHQ03DFGjiHy5qbMCCdAgOzkB6YBQIaX3O%2Fydyn1Fc3DfgzuxZEfa0QTOKpNEG3oUzXUeOGC4qPFPKwziCG3esErSaVRRSqn33PLOkaelK7qFRRWh7hOoZ4TgfNBaHxods5NUjcNSgpI1OzzqqNJ68oKnpTT%2BGR1waPWXW8wtS&X-Amz-Signature=a235c5e8922adc6c2fc2887313c64e5e3abc4928e3788e5fdaa5dd9d2abbf854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRDSTPQL%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCKsHUHxN1oNXZQznXSKaGuklkmE0vlzGelrihOrtx%2BZgIgN88dU40AW5upILcFivhlFthNb%2BfxxoSeAPQLeEG1HKAq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDPBo%2FHzwIcr%2FNmEvbircA2fnVIWsNX4O8L%2FBBIPeDvYLmFWK%2FOsqQHBmnlFqccRvRJXUAcuKDMsKunzXXpdJ%2BIkXo3xVMBLfrIqbAzr9loYJ2dZ3sRcC5SYaAM5lTJOcsEEO8eHCYVnT5WXhy4GUXcvaUxc7p0a6iG23RUuurXmklU6%2Bg7i3rJNUKJf%2Fud5IqgCSeNhbbbzEz15%2Bck5PTG3KXF9sN2ztIw222OJXA%2BDkyzHMMhGtHhDmF3dhgcV0lQ8p%2FnuiAVZFR28V1qQpCk6E5pGfcPrdf5ODo6WJ%2FBhULV%2BgNYk%2FdoJD2NeStvO1mUC%2FM8wF4yDeCcvHv%2FxH2jOnozRhbh0faJoLRlW9fFyVXcdNDoc%2FEvXVOYd7muFUch6IULVGGFS%2By2KtYbbJVnoLyoNJsullxV0GRzjkjaWiUswsgkXDngZtOUHzyiQiwa%2FpWV1v5hanamhDLneHSTPLGhP7nx5Ius35lriuFaP9YS1k9ofrbcyeP5Juts5rPuAEPzJO%2FLyUWY3oIlZNwdkjfCxJn9DTIfBKiPxuzJ%2FCnoXfir5QgpxKEZis8kiFvwyHRzEpfCGMVWVbVzec52kuyDGcJ6cKOeHnjIbO8wplQ5xt8rLH%2BYtYDQfuJX2x5LWORS5s3hiQZppJMLjeuMkGOqUBftJNBkK7eQvuxarUbnoLoJlgFhYqwFx9VnQsssVCAupAeg%2F3%2F23wqAbsTb%2BZktfYS6TB31Oo1FGEh5UTpSytqOD4DTuh%2BT1prE2dPDyhPLjg%2B5vuv73NEKGIiJ3Pt2Z0P5ZTgwz8XLYlwg6ZVQLhscIWbKRJFpBkU283v351lSkiDnmaWBKTMIenTtHEYcCr%2F6jfmBSmkBRPBRPLo1cg%2FnY%2BxFe0&X-Amz-Signature=4cb18eaaf6e86d3a9936f7f263adceb61ce312977fd92a7c9ce0ad9f3bf84f29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCLPIDBP%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDQBwSUKB%2Fw4LOI32bTW49G%2BSP%2Bhp3MU%2F3%2B4yu%2BKbPqQgIhAMbIadq0JjYbyPRIZJgWdP6yMHMmr5j8YtUDn6yEgTMpKv8DCAkQABoMNjM3NDIzMTgzODA1Igz1ZimqCBV6b1H5UZwq3APlYC2p4WGLfZ9%2BKyH%2FQ7Z0Vk7JvCO2VXBaf%2BYVhEJapxhUp95xl%2F8gah44pqfa8oyi24xrvYht0sAFsn6XaaA2NmH94kitl3czbbvF3MxZuS15Qq%2BPYzVXfERz5HnnZvUjS2i45uqcgiePgtHg0aqB5kHZJo4HEb1QjgIMXcslK%2BNUAnw8hRTbnEKNena1sdSTo4Eb%2BK62xmnkVEPVgSyKDDvSjPNBYGrk%2FspDC31Mumw5mDOgj%2F0G8ncCbG3sFj%2BRebNrxQGCwKSFyP3GIzwu8eE7nuoMHU8BH6%2BfN8tDQCXRUe%2FdPmjA5RMIUlHlWU0pJ%2B05MZVwe1PpbJdssjnimpZyzLh%2BiOySBiukMk8e6gHEZOqh9np5%2B%2F%2BRvnOHDOB6tQJp0z%2FbKgDVtB%2BkBwaMO00domcLH6FyQhXkX9aw1UDrZy9fnnBzf70Or77PSTlumEMyo4lCmE64ZYAaDyhJQ20UT4509ufblI%2F%2FUOAysLLkho1Sfu0H31mmucbvnbnI8TF8a7uhy%2FbLueW9t0KJPX6eyv5inlZS1zGr6HCUIv1drzAJxUPvFYbkR5BoXfjSMoHuCy9nuTvQbiy1rKfyV7zSOYvFDngQVOJAKcCP%2BQnrUdeAvubsd3tsbjCI3rjJBjqkAU7vL439ClgEpEG%2BNCucO3V4GZZKig6iZZzwxJcu7GK2%2F6yc7upHQ03DFGjiHy5qbMCCdAgOzkB6YBQIaX3O%2Fydyn1Fc3DfgzuxZEfa0QTOKpNEG3oUzXUeOGC4qPFPKwziCG3esErSaVRRSqn33PLOkaelK7qFRRWh7hOoZ4TgfNBaHxods5NUjcNSgpI1OzzqqNJ68oKnpTT%2BGR1waPWXW8wtS&X-Amz-Signature=4f091458dc7b0c6f89107931db63e1fd60c751d23635ff02ae170b673011dc1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YZMX7VC%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCuteIHDg2272ueK%2BZpelbp1T74R9PPyqNf1O1N4QKmAQIhAOttAwcjdxHEaPsIzKgyzdV72BgJyKj%2Fjgnqg9pyt5w2Kv8DCAkQABoMNjM3NDIzMTgzODA1Igy4CgsrHK7b7v91B%2Bkq3ANjC9S7vC%2BSIrGCumfM4a0ikvTp8xIxpOcouevZ6FuXTyw%2BiwaeCIxGhks5%2FvrteHJeFnJ8hHJSfP2%2B9HLoTD%2BKwTkPdsVW8OkU8zxjrfKNQ804%2FaIq%2BbrZYMt2DRLYVHk0GLYR7yCeozWmS1%2B5iFWOFieiF9CnGMiEQclLLHfyLT9qBBLUkgYvHFctTZzDsGxAP6wBHLPyuDgbbGo052nU5glOYkuK1YEx6OV7787KP9UjtN386F5r2ne5IJPvXZsSMcElwaCKfY8EPH9r6zYmY8O0AkzIC%2BJp2NlKWTvDmmTVFl7WHUrHo%2BWQX6tMiWB6xRdBbQpaky7rdMenYEBy23Unw6eEUBs0LrHj5NF%2F8UGWVh7jCiuAFKKN37z2C3B97cifaVYxeGfubQUa5QeMpEok36BTXeU1ENXPzrTEfkQ%2BSNZOmYK5EeqNDEIQKkEA19cKW4Z5YhoxPHypsP%2FmTh7Qc4ODUBF9CroWZ94ovo01lIPkFEL1g7NWQyItoOomAkqbDkWfPcUQfLp4zmThtngSY5oQbd20rqiLYhUaZWfTQhNN70VhF7PLekBNLVMsRjdYlQSLbi8p35RUrepO%2BlzBRLy18Nl%2Fy0Yv8As6P3ONt%2BClbN4QVlHqEjDx37jJBjqkAcrql2CXx2bQeBPoAf4G9VNOJvo06kYlHaLwn7l9Q9rjpkk4n8bbavMyKYKaTud%2BGlFwg6eahmGXVitGYkQWDUFIhxlTOSUU78Ne%2FIAQGTzyTbyftjP4Vs9HZAw0z2fHJZniFaV8V%2FGidVj21TJpCsM%2Betr%2FMBkTMSor4qaoTh9Zc8GamnlmMyWLIqdwlkoDVCcZtCJRCFExICkYH1BPeqFOSTFM&X-Amz-Signature=2bf127a4614323c4b3338e4bcf6c34f1796cfe3b6dd2a713964a2f3ef72f922e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHPWZ3DU%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIF7E9xMWXDjKPYPx0TsJ1Pz%2BpBVeuwOdkuz5W%2BZu5QJPAiBFhiComn7HosFB3z1Hi3SKNcnah5%2BaW0v2wlJM3IJIayr%2FAwgJEAAaDDYzNzQyMzE4MzgwNSIMQ57qE6LPHBSCYifEKtwDXOWi0cAMT0%2FlZlXOgCwg3LyKKNgCW6rY2EIeimL7iMGE0Sg8sbPIjhNz7T7NuSv75fLv7JFBON5y2HLrIhVAF9B7wR3eKSo481Lb637tKUBSSpzpN%2FXyWq3tqWLIxIHPSLwlwQdIjd2dUeiiPWqnrMGxyyMHMiMP2St7I36A6CkJFrCCxsw294H0%2B6UueRKyHtTslTAJ%2BJFzJIuRt%2BdUpmMYzIeW3JI2nOG%2FpCodshFGzXVE7dOPNwh8auOvaHU354KBxbEQovmIa5DpUX88eivOKGz4z9UimVtTA5KKA1mXDC3yL6hwImyaADpmL7Rx6j83s49uhDnbMA%2Fv2pqk1Ts3qe93lKPGNWkZBBXrNqIwnOoME0iNrBd8NMuuXqNEneviI8iZsyyJMwYC6kWYJFQT1WPqL3romObZJt79pAMA5rWS78OJE1V5XiFD6Vgfjgr%2B2zDk5Fk%2BFMGZJ9nB9uaOz72QE6%2Fs%2FBe57CKmXSRhVUlBAq7in6heqZ2Vz3S7KZuK2j3qFfBMMDFFrKHjzuQFlFZBNca8wMYeYLIgdL5lrrHjfKSkvg3tSBdFwcrM2PrjAZI3y%2BhytAJXIz76FQLOhJsTP8VuY8tsgZAfZOggddgxTnzhOg%2BKiFYwjN24yQY6pgFaWdQ%2B7lBceBNQoAp5FAkHLqYO32eu%2FmYbUxC3ZnqTI0GujrtHkFtaiBHqW9XBvYCZu3B0sXyryqpFYdfsGoFfE86KyfNXBhFf%2FHl66pLxt%2Bip64C1qKH2XKDhlzmtb%2BX0AtSFxepOUgvy87BuBdIRGRp27r%2FQZmimEbK1DnhCtZ1ExiihmH9Y%2F59gkZoEWZgBpUeV6r96Gy72hSLu%2BCbeMTerPw6n&X-Amz-Signature=cccea8d6007c9ce16e03f9d8237bed33890d7d686628cef2a5ecd91254389b12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO4JGY7Q%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIDSHyYOousf%2BmGnXFCu%2BkhNPdrONc46JGRtHf%2F5ntckUAiBfm8dUbGEU08zQ2G1%2FZOZsy0r3LVomOftXD%2BFylLXqBir%2FAwgJEAAaDDYzNzQyMzE4MzgwNSIMRFgrMvtNjJI5rVANKtwDWnIhNNC4mfWjDCPw%2BIWPbzeHteWYQVbT5RkP%2FfFj5z8PvzFjWvFDkjM04C7WRS0MYseYH1dkE60%2Fv7xaozhmVXdliIiR4GtHLiXwVZOQ%2Bzo275xHbESwdizWPlMupA%2B6wsuoz74DQbBkHexyPpgYvwHResmTeBV5l3B2hiUfxZiJjfLZZgiapp4yJh7q0AeKj%2F1Y%2F6hjvUugsSClOO7OqQDOHGi61i0fLXHj1QA2KRXYI%2F9vJFrZFmIMoU9YTv2R4F%2Fx%2B4LP3Ek7zsJw%2FonSOWCCRcwZXwX3MwMcqSwpBqn6MnvZnlSLSTGzpTcykXIfd8%2BCZaRWzjh0VlXhqPfhnX7OkeElkzE9GSkSme6C8l7VerkIqN%2FBTwF6kETkrO6Ov2ge63GPH40kItAMVZnnnmany%2BkbiVN54dc27viVTQ6OqRY4Ck4lUe5QJHrZFBwbVDg%2FIlM0k5TP1SokRShYbR50BBmIfoZPIkrn%2BjhC8P0i8zHQzpZuBrj%2B7ZNFN%2BwrHkG%2B7QlFW75szfsWMLugUxiNpu3nx15DoMHp4TazZeSqCDkohntpmCdc3WgFVnjNf2kafyPLos%2Bti0dcXhghQpwby6K0bb%2BrSlHDK2k1%2F1aKOqEEx6Jb5VZLfIAwsd24yQY6pgHVUgxoB7RToWX6ZEkU1smR9u4YuEU5jsA4Bj4MRXDMk%2FSOsyuWBMAqEhCm%2Ba4Npj0K1Io9%2BFjFgHIoVyHd1kDk2oH0DIItk7DpZujyhrBLawdvbU4C6086tjRkcslDWfs4OZxBMkLAfzrfxGrnGfz2SLTS3YY78PPlbShAq8IbePyVkU9zkagZxmiKJtHqHEkSp2xEhcnkjrmEJGGo3eBkwi1k0Po5&X-Amz-Signature=f4e18e4d67d41c5358c07fd7e2c1dbfc97229ef0821a9cf271c05c11acde0d9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCLPIDBP%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDQBwSUKB%2Fw4LOI32bTW49G%2BSP%2Bhp3MU%2F3%2B4yu%2BKbPqQgIhAMbIadq0JjYbyPRIZJgWdP6yMHMmr5j8YtUDn6yEgTMpKv8DCAkQABoMNjM3NDIzMTgzODA1Igz1ZimqCBV6b1H5UZwq3APlYC2p4WGLfZ9%2BKyH%2FQ7Z0Vk7JvCO2VXBaf%2BYVhEJapxhUp95xl%2F8gah44pqfa8oyi24xrvYht0sAFsn6XaaA2NmH94kitl3czbbvF3MxZuS15Qq%2BPYzVXfERz5HnnZvUjS2i45uqcgiePgtHg0aqB5kHZJo4HEb1QjgIMXcslK%2BNUAnw8hRTbnEKNena1sdSTo4Eb%2BK62xmnkVEPVgSyKDDvSjPNBYGrk%2FspDC31Mumw5mDOgj%2F0G8ncCbG3sFj%2BRebNrxQGCwKSFyP3GIzwu8eE7nuoMHU8BH6%2BfN8tDQCXRUe%2FdPmjA5RMIUlHlWU0pJ%2B05MZVwe1PpbJdssjnimpZyzLh%2BiOySBiukMk8e6gHEZOqh9np5%2B%2F%2BRvnOHDOB6tQJp0z%2FbKgDVtB%2BkBwaMO00domcLH6FyQhXkX9aw1UDrZy9fnnBzf70Or77PSTlumEMyo4lCmE64ZYAaDyhJQ20UT4509ufblI%2F%2FUOAysLLkho1Sfu0H31mmucbvnbnI8TF8a7uhy%2FbLueW9t0KJPX6eyv5inlZS1zGr6HCUIv1drzAJxUPvFYbkR5BoXfjSMoHuCy9nuTvQbiy1rKfyV7zSOYvFDngQVOJAKcCP%2BQnrUdeAvubsd3tsbjCI3rjJBjqkAU7vL439ClgEpEG%2BNCucO3V4GZZKig6iZZzwxJcu7GK2%2F6yc7upHQ03DFGjiHy5qbMCCdAgOzkB6YBQIaX3O%2Fydyn1Fc3DfgzuxZEfa0QTOKpNEG3oUzXUeOGC4qPFPKwziCG3esErSaVRRSqn33PLOkaelK7qFRRWh7hOoZ4TgfNBaHxods5NUjcNSgpI1OzzqqNJ68oKnpTT%2BGR1waPWXW8wtS&X-Amz-Signature=50503d58c70e76f351ea68fcb32ab8ab1874cc8ff133e6a3a20e588bea2dade6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCLPIDBP%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDQBwSUKB%2Fw4LOI32bTW49G%2BSP%2Bhp3MU%2F3%2B4yu%2BKbPqQgIhAMbIadq0JjYbyPRIZJgWdP6yMHMmr5j8YtUDn6yEgTMpKv8DCAkQABoMNjM3NDIzMTgzODA1Igz1ZimqCBV6b1H5UZwq3APlYC2p4WGLfZ9%2BKyH%2FQ7Z0Vk7JvCO2VXBaf%2BYVhEJapxhUp95xl%2F8gah44pqfa8oyi24xrvYht0sAFsn6XaaA2NmH94kitl3czbbvF3MxZuS15Qq%2BPYzVXfERz5HnnZvUjS2i45uqcgiePgtHg0aqB5kHZJo4HEb1QjgIMXcslK%2BNUAnw8hRTbnEKNena1sdSTo4Eb%2BK62xmnkVEPVgSyKDDvSjPNBYGrk%2FspDC31Mumw5mDOgj%2F0G8ncCbG3sFj%2BRebNrxQGCwKSFyP3GIzwu8eE7nuoMHU8BH6%2BfN8tDQCXRUe%2FdPmjA5RMIUlHlWU0pJ%2B05MZVwe1PpbJdssjnimpZyzLh%2BiOySBiukMk8e6gHEZOqh9np5%2B%2F%2BRvnOHDOB6tQJp0z%2FbKgDVtB%2BkBwaMO00domcLH6FyQhXkX9aw1UDrZy9fnnBzf70Or77PSTlumEMyo4lCmE64ZYAaDyhJQ20UT4509ufblI%2F%2FUOAysLLkho1Sfu0H31mmucbvnbnI8TF8a7uhy%2FbLueW9t0KJPX6eyv5inlZS1zGr6HCUIv1drzAJxUPvFYbkR5BoXfjSMoHuCy9nuTvQbiy1rKfyV7zSOYvFDngQVOJAKcCP%2BQnrUdeAvubsd3tsbjCI3rjJBjqkAU7vL439ClgEpEG%2BNCucO3V4GZZKig6iZZzwxJcu7GK2%2F6yc7upHQ03DFGjiHy5qbMCCdAgOzkB6YBQIaX3O%2Fydyn1Fc3DfgzuxZEfa0QTOKpNEG3oUzXUeOGC4qPFPKwziCG3esErSaVRRSqn33PLOkaelK7qFRRWh7hOoZ4TgfNBaHxods5NUjcNSgpI1OzzqqNJ68oKnpTT%2BGR1waPWXW8wtS&X-Amz-Signature=36a00d9fd2158e5051ae68cddbc1f902e998414cf364467c8df614fa0464e165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJV5D2UQ%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCYbB8jWP%2B997zTCKS8NnrakjZbcvTBR43LgJdWBbS6xwIhAJhWBjU%2FQVDmqr3TDKr8jxJH6LROq1ooa2xwyKOaBCTJKv8DCAkQABoMNjM3NDIzMTgzODA1IgxzMKaqRCXD16UsBewq3ANBUQ5NOwdib5TC%2BuQQY270eImHEG%2FUl23fzgRPDbWVdpqF6%2Bl7Vab%2FoBuuAw35smsjtEiP9hf2%2Bi595xZOlzAK87dZNijk0iJ0QIOs%2FgbTTKJKqIABZcc1uBUsSTPbvLnzEV648g7JdU1pTa5CjFWqM6dEbMVREgfkh0JwHT3Zxzq5cMkzO389akrc%2BA%2F%2F7GvK%2BLWJteQRhhSfRza9hP6c3H1rmuBHv198ON72MKytY0k7g62vVdaZ9rFKfxI5vE045l7F73VIrjKf7C1qxKy94375TLmS2u6UZmDbN9o%2BNGSUnWvVWWOvR7bFc%2FS4JDWe00fpWHV2Su9gBFe9CBlf%2FMOf1kRNbiXBQ16meM7tCK4F%2BNQkHkwV9zzxYUE4YBRzncZ6vgnLFmQ76rmbG%2FDd3hBaTkC07f%2BwrpyFkt8Bh9V6XSlCBkDY5UWrssG5dhSAp%2FDGLiff1jBsr9nVPEPhB2LgkwJt5%2BXXaNGv3RS6m%2FBYraRiudaldyh85PkDFxQqylgIUQEYus2FyqfzPPM7WUXyRbitVKQAjKuGB2iVChu4sInAErtZYfjjwEJgq4%2BwOsbb8v9hxEt03tfEt7YEG2pyOYren8WUkFlC2cCcZGsXuxGhOzZi5znOnTCV3rjJBjqkAZ8m3wR9YTqVWuTBjwEiJ9Do7RyZ8l94e1hGx29gMvknRpwFg3zwlc7Opiu4yS5%2BlTGtocSozC%2Byx4zzPe6vMTR1iKJoj0DdWp3PDp3vwa1mMPyDCwZt3CrxVD2FI10rOQ6EuUOOCHd%2BidgwqStRQOVDg2fToUWwyeDjpT9su%2BTcAJLDoBfZxNlq0Mxv%2Fk4UzcgPWEtqAz2tm2Pi50pLFbRewEOT&X-Amz-Signature=902a6f0c8b64565781b961b04cb510434625d640ae3dc1a00bf164b04db6d6bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJV5D2UQ%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCYbB8jWP%2B997zTCKS8NnrakjZbcvTBR43LgJdWBbS6xwIhAJhWBjU%2FQVDmqr3TDKr8jxJH6LROq1ooa2xwyKOaBCTJKv8DCAkQABoMNjM3NDIzMTgzODA1IgxzMKaqRCXD16UsBewq3ANBUQ5NOwdib5TC%2BuQQY270eImHEG%2FUl23fzgRPDbWVdpqF6%2Bl7Vab%2FoBuuAw35smsjtEiP9hf2%2Bi595xZOlzAK87dZNijk0iJ0QIOs%2FgbTTKJKqIABZcc1uBUsSTPbvLnzEV648g7JdU1pTa5CjFWqM6dEbMVREgfkh0JwHT3Zxzq5cMkzO389akrc%2BA%2F%2F7GvK%2BLWJteQRhhSfRza9hP6c3H1rmuBHv198ON72MKytY0k7g62vVdaZ9rFKfxI5vE045l7F73VIrjKf7C1qxKy94375TLmS2u6UZmDbN9o%2BNGSUnWvVWWOvR7bFc%2FS4JDWe00fpWHV2Su9gBFe9CBlf%2FMOf1kRNbiXBQ16meM7tCK4F%2BNQkHkwV9zzxYUE4YBRzncZ6vgnLFmQ76rmbG%2FDd3hBaTkC07f%2BwrpyFkt8Bh9V6XSlCBkDY5UWrssG5dhSAp%2FDGLiff1jBsr9nVPEPhB2LgkwJt5%2BXXaNGv3RS6m%2FBYraRiudaldyh85PkDFxQqylgIUQEYus2FyqfzPPM7WUXyRbitVKQAjKuGB2iVChu4sInAErtZYfjjwEJgq4%2BwOsbb8v9hxEt03tfEt7YEG2pyOYren8WUkFlC2cCcZGsXuxGhOzZi5znOnTCV3rjJBjqkAZ8m3wR9YTqVWuTBjwEiJ9Do7RyZ8l94e1hGx29gMvknRpwFg3zwlc7Opiu4yS5%2BlTGtocSozC%2Byx4zzPe6vMTR1iKJoj0DdWp3PDp3vwa1mMPyDCwZt3CrxVD2FI10rOQ6EuUOOCHd%2BidgwqStRQOVDg2fToUWwyeDjpT9su%2BTcAJLDoBfZxNlq0Mxv%2Fk4UzcgPWEtqAz2tm2Pi50pLFbRewEOT&X-Amz-Signature=60bf72bbe2b12f9ecb06c7d5e60ce13387912a319a932861e6a7c78983b00574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJV5D2UQ%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCYbB8jWP%2B997zTCKS8NnrakjZbcvTBR43LgJdWBbS6xwIhAJhWBjU%2FQVDmqr3TDKr8jxJH6LROq1ooa2xwyKOaBCTJKv8DCAkQABoMNjM3NDIzMTgzODA1IgxzMKaqRCXD16UsBewq3ANBUQ5NOwdib5TC%2BuQQY270eImHEG%2FUl23fzgRPDbWVdpqF6%2Bl7Vab%2FoBuuAw35smsjtEiP9hf2%2Bi595xZOlzAK87dZNijk0iJ0QIOs%2FgbTTKJKqIABZcc1uBUsSTPbvLnzEV648g7JdU1pTa5CjFWqM6dEbMVREgfkh0JwHT3Zxzq5cMkzO389akrc%2BA%2F%2F7GvK%2BLWJteQRhhSfRza9hP6c3H1rmuBHv198ON72MKytY0k7g62vVdaZ9rFKfxI5vE045l7F73VIrjKf7C1qxKy94375TLmS2u6UZmDbN9o%2BNGSUnWvVWWOvR7bFc%2FS4JDWe00fpWHV2Su9gBFe9CBlf%2FMOf1kRNbiXBQ16meM7tCK4F%2BNQkHkwV9zzxYUE4YBRzncZ6vgnLFmQ76rmbG%2FDd3hBaTkC07f%2BwrpyFkt8Bh9V6XSlCBkDY5UWrssG5dhSAp%2FDGLiff1jBsr9nVPEPhB2LgkwJt5%2BXXaNGv3RS6m%2FBYraRiudaldyh85PkDFxQqylgIUQEYus2FyqfzPPM7WUXyRbitVKQAjKuGB2iVChu4sInAErtZYfjjwEJgq4%2BwOsbb8v9hxEt03tfEt7YEG2pyOYren8WUkFlC2cCcZGsXuxGhOzZi5znOnTCV3rjJBjqkAZ8m3wR9YTqVWuTBjwEiJ9Do7RyZ8l94e1hGx29gMvknRpwFg3zwlc7Opiu4yS5%2BlTGtocSozC%2Byx4zzPe6vMTR1iKJoj0DdWp3PDp3vwa1mMPyDCwZt3CrxVD2FI10rOQ6EuUOOCHd%2BidgwqStRQOVDg2fToUWwyeDjpT9su%2BTcAJLDoBfZxNlq0Mxv%2Fk4UzcgPWEtqAz2tm2Pi50pLFbRewEOT&X-Amz-Signature=aeaa989a63b79801041b50de21f5edd9462ab65e66c8ccc2f10c1a45686172ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJV5D2UQ%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCYbB8jWP%2B997zTCKS8NnrakjZbcvTBR43LgJdWBbS6xwIhAJhWBjU%2FQVDmqr3TDKr8jxJH6LROq1ooa2xwyKOaBCTJKv8DCAkQABoMNjM3NDIzMTgzODA1IgxzMKaqRCXD16UsBewq3ANBUQ5NOwdib5TC%2BuQQY270eImHEG%2FUl23fzgRPDbWVdpqF6%2Bl7Vab%2FoBuuAw35smsjtEiP9hf2%2Bi595xZOlzAK87dZNijk0iJ0QIOs%2FgbTTKJKqIABZcc1uBUsSTPbvLnzEV648g7JdU1pTa5CjFWqM6dEbMVREgfkh0JwHT3Zxzq5cMkzO389akrc%2BA%2F%2F7GvK%2BLWJteQRhhSfRza9hP6c3H1rmuBHv198ON72MKytY0k7g62vVdaZ9rFKfxI5vE045l7F73VIrjKf7C1qxKy94375TLmS2u6UZmDbN9o%2BNGSUnWvVWWOvR7bFc%2FS4JDWe00fpWHV2Su9gBFe9CBlf%2FMOf1kRNbiXBQ16meM7tCK4F%2BNQkHkwV9zzxYUE4YBRzncZ6vgnLFmQ76rmbG%2FDd3hBaTkC07f%2BwrpyFkt8Bh9V6XSlCBkDY5UWrssG5dhSAp%2FDGLiff1jBsr9nVPEPhB2LgkwJt5%2BXXaNGv3RS6m%2FBYraRiudaldyh85PkDFxQqylgIUQEYus2FyqfzPPM7WUXyRbitVKQAjKuGB2iVChu4sInAErtZYfjjwEJgq4%2BwOsbb8v9hxEt03tfEt7YEG2pyOYren8WUkFlC2cCcZGsXuxGhOzZi5znOnTCV3rjJBjqkAZ8m3wR9YTqVWuTBjwEiJ9Do7RyZ8l94e1hGx29gMvknRpwFg3zwlc7Opiu4yS5%2BlTGtocSozC%2Byx4zzPe6vMTR1iKJoj0DdWp3PDp3vwa1mMPyDCwZt3CrxVD2FI10rOQ6EuUOOCHd%2BidgwqStRQOVDg2fToUWwyeDjpT9su%2BTcAJLDoBfZxNlq0Mxv%2Fk4UzcgPWEtqAz2tm2Pi50pLFbRewEOT&X-Amz-Signature=fa4fb99f6a8ce9475ac797ddec6aaca5e0fb082a08986e2b20c8b22f700d5bb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H2GYGN6%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIAIpmEXGauUp7YsvpizBr0o3Y5r6XJAh0DjNLsgZAaOvAiAVke7UtWb%2FcNK1x%2FdOeVJyanqEWFM937sjL6RN3xdbOSr%2FAwgJEAAaDDYzNzQyMzE4MzgwNSIMJeZTOJExOEi%2FLLvDKtwDy9sp2pMbLMnvDhmIfVzOsHO1jg%2FYFo1s6QTwLm5kwAg3GWMm2rLf9st0PMw311cB33BcZm%2FOuKdvjeib7hRMWqyIoRj%2FCB0fBFwgLt4t%2B1IUpDsb5GJTz0CDKjlv%2FoLMHbvd5QIfMOmN3r7U6Jq5fBdfbIojIsIwIbCbz6yzmvgVXVekp%2BkSq1isQw6v9sZpoYiyox8DLTxwiogWU2rQQ9EmusL0sFDJ4ztKNZWNa0%2BxoC14AaHGOAusK3RYEXgPSyRqRSDgeBvwsr0dcFoxiRn%2Fr2uaUq8K89eSS1XCgbT%2B%2BDG0VHFDLTSDyDR9G7lk8XzW1vV%2FrqBOQVnV6TDVYWNZL7JX%2FY3mcGSI2kWATQTaZsWceI37dJzgJEJnXQivCcH%2FFwr1Vi%2BR2S6artkpK8rz2cJg4sOB7CLFruJvXqxae5y%2BiMaJW6akWf6ddLWDbnB0JnhvwJo1F%2FXoscbSYvHAylr%2BBPIQqrs%2F%2FaZ%2Bn5YGGCTmlmtb%2BJfilCIDQ4MqPmJaM3qMXBr3QHbqAYmT4aP5ESYIwrERCQkAoy4jhpDwgDu%2Bpbf9o%2BV7bDCqlP3zHd4AUPAncbOgqYNq24U4828hDQA0amZvc4nv%2Fk9%2BxgxWwkU%2BUTbAB3Bn9QYwsN64yQY6pgEuMsCEdCjzPUItP0wjt%2F5C7GjkYsrBwrQoj0S6LdvUfHXN%2BAQMRH%2B5xlNhKyE1lZw5yJePFid06n38C%2F2Tk4b20bPamezrMRJXFS48FYPXe12PU1OJLKSH%2BOGiQ3wM2Tb%2B72kJcFdHP5rc7zDM95LR7%2FQ5h1JigrbYHaujcmbsRSnZCwsznJGPFoN0KBXvTKadsbSmwKlK%2FvmQpj79k0A3%2FEoBl8S%2F&X-Amz-Signature=61eb1c7884de386a9a302755b9de77e634b4e3827d4c945456356a62fe002d4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJV5D2UQ%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCYbB8jWP%2B997zTCKS8NnrakjZbcvTBR43LgJdWBbS6xwIhAJhWBjU%2FQVDmqr3TDKr8jxJH6LROq1ooa2xwyKOaBCTJKv8DCAkQABoMNjM3NDIzMTgzODA1IgxzMKaqRCXD16UsBewq3ANBUQ5NOwdib5TC%2BuQQY270eImHEG%2FUl23fzgRPDbWVdpqF6%2Bl7Vab%2FoBuuAw35smsjtEiP9hf2%2Bi595xZOlzAK87dZNijk0iJ0QIOs%2FgbTTKJKqIABZcc1uBUsSTPbvLnzEV648g7JdU1pTa5CjFWqM6dEbMVREgfkh0JwHT3Zxzq5cMkzO389akrc%2BA%2F%2F7GvK%2BLWJteQRhhSfRza9hP6c3H1rmuBHv198ON72MKytY0k7g62vVdaZ9rFKfxI5vE045l7F73VIrjKf7C1qxKy94375TLmS2u6UZmDbN9o%2BNGSUnWvVWWOvR7bFc%2FS4JDWe00fpWHV2Su9gBFe9CBlf%2FMOf1kRNbiXBQ16meM7tCK4F%2BNQkHkwV9zzxYUE4YBRzncZ6vgnLFmQ76rmbG%2FDd3hBaTkC07f%2BwrpyFkt8Bh9V6XSlCBkDY5UWrssG5dhSAp%2FDGLiff1jBsr9nVPEPhB2LgkwJt5%2BXXaNGv3RS6m%2FBYraRiudaldyh85PkDFxQqylgIUQEYus2FyqfzPPM7WUXyRbitVKQAjKuGB2iVChu4sInAErtZYfjjwEJgq4%2BwOsbb8v9hxEt03tfEt7YEG2pyOYren8WUkFlC2cCcZGsXuxGhOzZi5znOnTCV3rjJBjqkAZ8m3wR9YTqVWuTBjwEiJ9Do7RyZ8l94e1hGx29gMvknRpwFg3zwlc7Opiu4yS5%2BlTGtocSozC%2Byx4zzPe6vMTR1iKJoj0DdWp3PDp3vwa1mMPyDCwZt3CrxVD2FI10rOQ6EuUOOCHd%2BidgwqStRQOVDg2fToUWwyeDjpT9su%2BTcAJLDoBfZxNlq0Mxv%2Fk4UzcgPWEtqAz2tm2Pi50pLFbRewEOT&X-Amz-Signature=9ca6296fc0a626b3376abb16a39974f2f2a6c771b646590612db6dbf10e1089d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJV5D2UQ%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCYbB8jWP%2B997zTCKS8NnrakjZbcvTBR43LgJdWBbS6xwIhAJhWBjU%2FQVDmqr3TDKr8jxJH6LROq1ooa2xwyKOaBCTJKv8DCAkQABoMNjM3NDIzMTgzODA1IgxzMKaqRCXD16UsBewq3ANBUQ5NOwdib5TC%2BuQQY270eImHEG%2FUl23fzgRPDbWVdpqF6%2Bl7Vab%2FoBuuAw35smsjtEiP9hf2%2Bi595xZOlzAK87dZNijk0iJ0QIOs%2FgbTTKJKqIABZcc1uBUsSTPbvLnzEV648g7JdU1pTa5CjFWqM6dEbMVREgfkh0JwHT3Zxzq5cMkzO389akrc%2BA%2F%2F7GvK%2BLWJteQRhhSfRza9hP6c3H1rmuBHv198ON72MKytY0k7g62vVdaZ9rFKfxI5vE045l7F73VIrjKf7C1qxKy94375TLmS2u6UZmDbN9o%2BNGSUnWvVWWOvR7bFc%2FS4JDWe00fpWHV2Su9gBFe9CBlf%2FMOf1kRNbiXBQ16meM7tCK4F%2BNQkHkwV9zzxYUE4YBRzncZ6vgnLFmQ76rmbG%2FDd3hBaTkC07f%2BwrpyFkt8Bh9V6XSlCBkDY5UWrssG5dhSAp%2FDGLiff1jBsr9nVPEPhB2LgkwJt5%2BXXaNGv3RS6m%2FBYraRiudaldyh85PkDFxQqylgIUQEYus2FyqfzPPM7WUXyRbitVKQAjKuGB2iVChu4sInAErtZYfjjwEJgq4%2BwOsbb8v9hxEt03tfEt7YEG2pyOYren8WUkFlC2cCcZGsXuxGhOzZi5znOnTCV3rjJBjqkAZ8m3wR9YTqVWuTBjwEiJ9Do7RyZ8l94e1hGx29gMvknRpwFg3zwlc7Opiu4yS5%2BlTGtocSozC%2Byx4zzPe6vMTR1iKJoj0DdWp3PDp3vwa1mMPyDCwZt3CrxVD2FI10rOQ6EuUOOCHd%2BidgwqStRQOVDg2fToUWwyeDjpT9su%2BTcAJLDoBfZxNlq0Mxv%2Fk4UzcgPWEtqAz2tm2Pi50pLFbRewEOT&X-Amz-Signature=ab1ae5e10d2e2a74d231d8ed71e2b5c04a088a88f5abd7c3a5a8bace3bcac890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJV5D2UQ%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCYbB8jWP%2B997zTCKS8NnrakjZbcvTBR43LgJdWBbS6xwIhAJhWBjU%2FQVDmqr3TDKr8jxJH6LROq1ooa2xwyKOaBCTJKv8DCAkQABoMNjM3NDIzMTgzODA1IgxzMKaqRCXD16UsBewq3ANBUQ5NOwdib5TC%2BuQQY270eImHEG%2FUl23fzgRPDbWVdpqF6%2Bl7Vab%2FoBuuAw35smsjtEiP9hf2%2Bi595xZOlzAK87dZNijk0iJ0QIOs%2FgbTTKJKqIABZcc1uBUsSTPbvLnzEV648g7JdU1pTa5CjFWqM6dEbMVREgfkh0JwHT3Zxzq5cMkzO389akrc%2BA%2F%2F7GvK%2BLWJteQRhhSfRza9hP6c3H1rmuBHv198ON72MKytY0k7g62vVdaZ9rFKfxI5vE045l7F73VIrjKf7C1qxKy94375TLmS2u6UZmDbN9o%2BNGSUnWvVWWOvR7bFc%2FS4JDWe00fpWHV2Su9gBFe9CBlf%2FMOf1kRNbiXBQ16meM7tCK4F%2BNQkHkwV9zzxYUE4YBRzncZ6vgnLFmQ76rmbG%2FDd3hBaTkC07f%2BwrpyFkt8Bh9V6XSlCBkDY5UWrssG5dhSAp%2FDGLiff1jBsr9nVPEPhB2LgkwJt5%2BXXaNGv3RS6m%2FBYraRiudaldyh85PkDFxQqylgIUQEYus2FyqfzPPM7WUXyRbitVKQAjKuGB2iVChu4sInAErtZYfjjwEJgq4%2BwOsbb8v9hxEt03tfEt7YEG2pyOYren8WUkFlC2cCcZGsXuxGhOzZi5znOnTCV3rjJBjqkAZ8m3wR9YTqVWuTBjwEiJ9Do7RyZ8l94e1hGx29gMvknRpwFg3zwlc7Opiu4yS5%2BlTGtocSozC%2Byx4zzPe6vMTR1iKJoj0DdWp3PDp3vwa1mMPyDCwZt3CrxVD2FI10rOQ6EuUOOCHd%2BidgwqStRQOVDg2fToUWwyeDjpT9su%2BTcAJLDoBfZxNlq0Mxv%2Fk4UzcgPWEtqAz2tm2Pi50pLFbRewEOT&X-Amz-Signature=aeaa989a63b79801041b50de21f5edd9462ab65e66c8ccc2f10c1a45686172ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJV5D2UQ%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCYbB8jWP%2B997zTCKS8NnrakjZbcvTBR43LgJdWBbS6xwIhAJhWBjU%2FQVDmqr3TDKr8jxJH6LROq1ooa2xwyKOaBCTJKv8DCAkQABoMNjM3NDIzMTgzODA1IgxzMKaqRCXD16UsBewq3ANBUQ5NOwdib5TC%2BuQQY270eImHEG%2FUl23fzgRPDbWVdpqF6%2Bl7Vab%2FoBuuAw35smsjtEiP9hf2%2Bi595xZOlzAK87dZNijk0iJ0QIOs%2FgbTTKJKqIABZcc1uBUsSTPbvLnzEV648g7JdU1pTa5CjFWqM6dEbMVREgfkh0JwHT3Zxzq5cMkzO389akrc%2BA%2F%2F7GvK%2BLWJteQRhhSfRza9hP6c3H1rmuBHv198ON72MKytY0k7g62vVdaZ9rFKfxI5vE045l7F73VIrjKf7C1qxKy94375TLmS2u6UZmDbN9o%2BNGSUnWvVWWOvR7bFc%2FS4JDWe00fpWHV2Su9gBFe9CBlf%2FMOf1kRNbiXBQ16meM7tCK4F%2BNQkHkwV9zzxYUE4YBRzncZ6vgnLFmQ76rmbG%2FDd3hBaTkC07f%2BwrpyFkt8Bh9V6XSlCBkDY5UWrssG5dhSAp%2FDGLiff1jBsr9nVPEPhB2LgkwJt5%2BXXaNGv3RS6m%2FBYraRiudaldyh85PkDFxQqylgIUQEYus2FyqfzPPM7WUXyRbitVKQAjKuGB2iVChu4sInAErtZYfjjwEJgq4%2BwOsbb8v9hxEt03tfEt7YEG2pyOYren8WUkFlC2cCcZGsXuxGhOzZi5znOnTCV3rjJBjqkAZ8m3wR9YTqVWuTBjwEiJ9Do7RyZ8l94e1hGx29gMvknRpwFg3zwlc7Opiu4yS5%2BlTGtocSozC%2Byx4zzPe6vMTR1iKJoj0DdWp3PDp3vwa1mMPyDCwZt3CrxVD2FI10rOQ6EuUOOCHd%2BidgwqStRQOVDg2fToUWwyeDjpT9su%2BTcAJLDoBfZxNlq0Mxv%2Fk4UzcgPWEtqAz2tm2Pi50pLFbRewEOT&X-Amz-Signature=a9b92ac899846f84b8ff3885fe4a34837b9fc569cce06c23fe07414b87be52be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJV5D2UQ%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCYbB8jWP%2B997zTCKS8NnrakjZbcvTBR43LgJdWBbS6xwIhAJhWBjU%2FQVDmqr3TDKr8jxJH6LROq1ooa2xwyKOaBCTJKv8DCAkQABoMNjM3NDIzMTgzODA1IgxzMKaqRCXD16UsBewq3ANBUQ5NOwdib5TC%2BuQQY270eImHEG%2FUl23fzgRPDbWVdpqF6%2Bl7Vab%2FoBuuAw35smsjtEiP9hf2%2Bi595xZOlzAK87dZNijk0iJ0QIOs%2FgbTTKJKqIABZcc1uBUsSTPbvLnzEV648g7JdU1pTa5CjFWqM6dEbMVREgfkh0JwHT3Zxzq5cMkzO389akrc%2BA%2F%2F7GvK%2BLWJteQRhhSfRza9hP6c3H1rmuBHv198ON72MKytY0k7g62vVdaZ9rFKfxI5vE045l7F73VIrjKf7C1qxKy94375TLmS2u6UZmDbN9o%2BNGSUnWvVWWOvR7bFc%2FS4JDWe00fpWHV2Su9gBFe9CBlf%2FMOf1kRNbiXBQ16meM7tCK4F%2BNQkHkwV9zzxYUE4YBRzncZ6vgnLFmQ76rmbG%2FDd3hBaTkC07f%2BwrpyFkt8Bh9V6XSlCBkDY5UWrssG5dhSAp%2FDGLiff1jBsr9nVPEPhB2LgkwJt5%2BXXaNGv3RS6m%2FBYraRiudaldyh85PkDFxQqylgIUQEYus2FyqfzPPM7WUXyRbitVKQAjKuGB2iVChu4sInAErtZYfjjwEJgq4%2BwOsbb8v9hxEt03tfEt7YEG2pyOYren8WUkFlC2cCcZGsXuxGhOzZi5znOnTCV3rjJBjqkAZ8m3wR9YTqVWuTBjwEiJ9Do7RyZ8l94e1hGx29gMvknRpwFg3zwlc7Opiu4yS5%2BlTGtocSozC%2Byx4zzPe6vMTR1iKJoj0DdWp3PDp3vwa1mMPyDCwZt3CrxVD2FI10rOQ6EuUOOCHd%2BidgwqStRQOVDg2fToUWwyeDjpT9su%2BTcAJLDoBfZxNlq0Mxv%2Fk4UzcgPWEtqAz2tm2Pi50pLFbRewEOT&X-Amz-Signature=9b255e943767bd6c5c0dfa3d3328fac794889a95fee58580f223af70519152cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJV5D2UQ%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCYbB8jWP%2B997zTCKS8NnrakjZbcvTBR43LgJdWBbS6xwIhAJhWBjU%2FQVDmqr3TDKr8jxJH6LROq1ooa2xwyKOaBCTJKv8DCAkQABoMNjM3NDIzMTgzODA1IgxzMKaqRCXD16UsBewq3ANBUQ5NOwdib5TC%2BuQQY270eImHEG%2FUl23fzgRPDbWVdpqF6%2Bl7Vab%2FoBuuAw35smsjtEiP9hf2%2Bi595xZOlzAK87dZNijk0iJ0QIOs%2FgbTTKJKqIABZcc1uBUsSTPbvLnzEV648g7JdU1pTa5CjFWqM6dEbMVREgfkh0JwHT3Zxzq5cMkzO389akrc%2BA%2F%2F7GvK%2BLWJteQRhhSfRza9hP6c3H1rmuBHv198ON72MKytY0k7g62vVdaZ9rFKfxI5vE045l7F73VIrjKf7C1qxKy94375TLmS2u6UZmDbN9o%2BNGSUnWvVWWOvR7bFc%2FS4JDWe00fpWHV2Su9gBFe9CBlf%2FMOf1kRNbiXBQ16meM7tCK4F%2BNQkHkwV9zzxYUE4YBRzncZ6vgnLFmQ76rmbG%2FDd3hBaTkC07f%2BwrpyFkt8Bh9V6XSlCBkDY5UWrssG5dhSAp%2FDGLiff1jBsr9nVPEPhB2LgkwJt5%2BXXaNGv3RS6m%2FBYraRiudaldyh85PkDFxQqylgIUQEYus2FyqfzPPM7WUXyRbitVKQAjKuGB2iVChu4sInAErtZYfjjwEJgq4%2BwOsbb8v9hxEt03tfEt7YEG2pyOYren8WUkFlC2cCcZGsXuxGhOzZi5znOnTCV3rjJBjqkAZ8m3wR9YTqVWuTBjwEiJ9Do7RyZ8l94e1hGx29gMvknRpwFg3zwlc7Opiu4yS5%2BlTGtocSozC%2Byx4zzPe6vMTR1iKJoj0DdWp3PDp3vwa1mMPyDCwZt3CrxVD2FI10rOQ6EuUOOCHd%2BidgwqStRQOVDg2fToUWwyeDjpT9su%2BTcAJLDoBfZxNlq0Mxv%2Fk4UzcgPWEtqAz2tm2Pi50pLFbRewEOT&X-Amz-Signature=46bf2edd2863859c27ff6b75a9fcbeabd754eb30d6bb9938a01aa3189b59790d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


