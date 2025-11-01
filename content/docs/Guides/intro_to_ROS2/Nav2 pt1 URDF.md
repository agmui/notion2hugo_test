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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2JJ6FGJ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQD8V7%2BCRTlgPbJ%2BRG5R5aIT3munFRWNRotgQVKMOQC%2FzAIgYeLf2OrfoIHvHybR%2BoIxWRx7KYXl0VosC8aLYYgCpFUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFSNq9c47rdfFOnDhyrcA2S%2FMUXbQNSnqmc2lAPt7BhIliMx7AdJA7pZhCUaIV2DczHC5%2Fh6PIIAUloDq8sqSdDqXOAIfLKGxKifjbsq9uJ9N8k4iP0LsBoI6I3ObSvjlYwoujcTE3z%2FK6U5%2BJLjlPmZ%2FYHp%2Fv53bZOQtLqbwdvoy%2F12125BremBVI7WszmKzOEPXxUOF7pqSwoa3XJQ1ZCotV60HSl0nD6ZZfwALxYSr3CA8kt%2BCt%2BR0aIgOOukWyatfzEUlsXka06MAcPMgiXZJgpE%2FyMfewbqZt0MZCW%2Fcdz3yWxSoXCHi5PVwdrvJhP%2B3D62%2BI%2FQzpguhi%2BCkH4YJmxHX64sWocPFD94r5iP57qSDx6lxIjNFBr0ZnNBi9Ry49sb63HlpgyMnooB%2BoLS1Px%2BGFPb0KhV2UDo1ke0m2Uue1cMKwVcxaB%2FG32v7VFpGFuLFW9YA0p%2B7HuAIsCOPzYJBAwfyiBJeYcRfiicmw97J5qZC2XH9mIAxjKXD5tvBVODov3%2BnjUW9MYHP3ALxdGJ501GazLXZbrz0D25UpNizfyFNyvYZjZxzxAbZhJunxJHTtlMJr%2BUPK0TwWnNlkcysXHDzFxlsVvf%2FaR7bx7eMZsO7HU4EtKcIRmIZqeeCYl%2B2Tzqqk4oML6BlcgGOqUB4h%2BmpIuiOZlz0Uf3laWpmgME7sCZrA9R3YzgyeYhzyYVBDpBPJKEOQTf0kGEIt3Hyr1NDmB4iqdG%2Blzmi8lPdCFhBA6skzHVJuI7RWLWoQOHBPNzw5bOwYqSW56uBkWZzK0LdssUAC8YU8A7U%2FnPkH4XIefz2yMYCI4fMJNwXlJ7nhS6o4Vi5IOk%2BAHh4QOn6ZpyJg0ip9BmAnaW%2F2UaLY%2FLN2Nf&X-Amz-Signature=83e347bb07483b0ef0badc88b388ed2e05e896d16f87c8b55a0f058bb8461557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2JJ6FGJ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQD8V7%2BCRTlgPbJ%2BRG5R5aIT3munFRWNRotgQVKMOQC%2FzAIgYeLf2OrfoIHvHybR%2BoIxWRx7KYXl0VosC8aLYYgCpFUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFSNq9c47rdfFOnDhyrcA2S%2FMUXbQNSnqmc2lAPt7BhIliMx7AdJA7pZhCUaIV2DczHC5%2Fh6PIIAUloDq8sqSdDqXOAIfLKGxKifjbsq9uJ9N8k4iP0LsBoI6I3ObSvjlYwoujcTE3z%2FK6U5%2BJLjlPmZ%2FYHp%2Fv53bZOQtLqbwdvoy%2F12125BremBVI7WszmKzOEPXxUOF7pqSwoa3XJQ1ZCotV60HSl0nD6ZZfwALxYSr3CA8kt%2BCt%2BR0aIgOOukWyatfzEUlsXka06MAcPMgiXZJgpE%2FyMfewbqZt0MZCW%2Fcdz3yWxSoXCHi5PVwdrvJhP%2B3D62%2BI%2FQzpguhi%2BCkH4YJmxHX64sWocPFD94r5iP57qSDx6lxIjNFBr0ZnNBi9Ry49sb63HlpgyMnooB%2BoLS1Px%2BGFPb0KhV2UDo1ke0m2Uue1cMKwVcxaB%2FG32v7VFpGFuLFW9YA0p%2B7HuAIsCOPzYJBAwfyiBJeYcRfiicmw97J5qZC2XH9mIAxjKXD5tvBVODov3%2BnjUW9MYHP3ALxdGJ501GazLXZbrz0D25UpNizfyFNyvYZjZxzxAbZhJunxJHTtlMJr%2BUPK0TwWnNlkcysXHDzFxlsVvf%2FaR7bx7eMZsO7HU4EtKcIRmIZqeeCYl%2B2Tzqqk4oML6BlcgGOqUB4h%2BmpIuiOZlz0Uf3laWpmgME7sCZrA9R3YzgyeYhzyYVBDpBPJKEOQTf0kGEIt3Hyr1NDmB4iqdG%2Blzmi8lPdCFhBA6skzHVJuI7RWLWoQOHBPNzw5bOwYqSW56uBkWZzK0LdssUAC8YU8A7U%2FnPkH4XIefz2yMYCI4fMJNwXlJ7nhS6o4Vi5IOk%2BAHh4QOn6ZpyJg0ip9BmAnaW%2F2UaLY%2FLN2Nf&X-Amz-Signature=3d586a2a5f818ed6c24c4a8eb19992ace632b3993fd8a0fb4fba7c56ac246ed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2JJ6FGJ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQD8V7%2BCRTlgPbJ%2BRG5R5aIT3munFRWNRotgQVKMOQC%2FzAIgYeLf2OrfoIHvHybR%2BoIxWRx7KYXl0VosC8aLYYgCpFUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFSNq9c47rdfFOnDhyrcA2S%2FMUXbQNSnqmc2lAPt7BhIliMx7AdJA7pZhCUaIV2DczHC5%2Fh6PIIAUloDq8sqSdDqXOAIfLKGxKifjbsq9uJ9N8k4iP0LsBoI6I3ObSvjlYwoujcTE3z%2FK6U5%2BJLjlPmZ%2FYHp%2Fv53bZOQtLqbwdvoy%2F12125BremBVI7WszmKzOEPXxUOF7pqSwoa3XJQ1ZCotV60HSl0nD6ZZfwALxYSr3CA8kt%2BCt%2BR0aIgOOukWyatfzEUlsXka06MAcPMgiXZJgpE%2FyMfewbqZt0MZCW%2Fcdz3yWxSoXCHi5PVwdrvJhP%2B3D62%2BI%2FQzpguhi%2BCkH4YJmxHX64sWocPFD94r5iP57qSDx6lxIjNFBr0ZnNBi9Ry49sb63HlpgyMnooB%2BoLS1Px%2BGFPb0KhV2UDo1ke0m2Uue1cMKwVcxaB%2FG32v7VFpGFuLFW9YA0p%2B7HuAIsCOPzYJBAwfyiBJeYcRfiicmw97J5qZC2XH9mIAxjKXD5tvBVODov3%2BnjUW9MYHP3ALxdGJ501GazLXZbrz0D25UpNizfyFNyvYZjZxzxAbZhJunxJHTtlMJr%2BUPK0TwWnNlkcysXHDzFxlsVvf%2FaR7bx7eMZsO7HU4EtKcIRmIZqeeCYl%2B2Tzqqk4oML6BlcgGOqUB4h%2BmpIuiOZlz0Uf3laWpmgME7sCZrA9R3YzgyeYhzyYVBDpBPJKEOQTf0kGEIt3Hyr1NDmB4iqdG%2Blzmi8lPdCFhBA6skzHVJuI7RWLWoQOHBPNzw5bOwYqSW56uBkWZzK0LdssUAC8YU8A7U%2FnPkH4XIefz2yMYCI4fMJNwXlJ7nhS6o4Vi5IOk%2BAHh4QOn6ZpyJg0ip9BmAnaW%2F2UaLY%2FLN2Nf&X-Amz-Signature=3a4e03bb6930c2eadc1472a2c0f7c78d31409bfbe66e7a3b9a7b4516dff07814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2JJ6FGJ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQD8V7%2BCRTlgPbJ%2BRG5R5aIT3munFRWNRotgQVKMOQC%2FzAIgYeLf2OrfoIHvHybR%2BoIxWRx7KYXl0VosC8aLYYgCpFUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFSNq9c47rdfFOnDhyrcA2S%2FMUXbQNSnqmc2lAPt7BhIliMx7AdJA7pZhCUaIV2DczHC5%2Fh6PIIAUloDq8sqSdDqXOAIfLKGxKifjbsq9uJ9N8k4iP0LsBoI6I3ObSvjlYwoujcTE3z%2FK6U5%2BJLjlPmZ%2FYHp%2Fv53bZOQtLqbwdvoy%2F12125BremBVI7WszmKzOEPXxUOF7pqSwoa3XJQ1ZCotV60HSl0nD6ZZfwALxYSr3CA8kt%2BCt%2BR0aIgOOukWyatfzEUlsXka06MAcPMgiXZJgpE%2FyMfewbqZt0MZCW%2Fcdz3yWxSoXCHi5PVwdrvJhP%2B3D62%2BI%2FQzpguhi%2BCkH4YJmxHX64sWocPFD94r5iP57qSDx6lxIjNFBr0ZnNBi9Ry49sb63HlpgyMnooB%2BoLS1Px%2BGFPb0KhV2UDo1ke0m2Uue1cMKwVcxaB%2FG32v7VFpGFuLFW9YA0p%2B7HuAIsCOPzYJBAwfyiBJeYcRfiicmw97J5qZC2XH9mIAxjKXD5tvBVODov3%2BnjUW9MYHP3ALxdGJ501GazLXZbrz0D25UpNizfyFNyvYZjZxzxAbZhJunxJHTtlMJr%2BUPK0TwWnNlkcysXHDzFxlsVvf%2FaR7bx7eMZsO7HU4EtKcIRmIZqeeCYl%2B2Tzqqk4oML6BlcgGOqUB4h%2BmpIuiOZlz0Uf3laWpmgME7sCZrA9R3YzgyeYhzyYVBDpBPJKEOQTf0kGEIt3Hyr1NDmB4iqdG%2Blzmi8lPdCFhBA6skzHVJuI7RWLWoQOHBPNzw5bOwYqSW56uBkWZzK0LdssUAC8YU8A7U%2FnPkH4XIefz2yMYCI4fMJNwXlJ7nhS6o4Vi5IOk%2BAHh4QOn6ZpyJg0ip9BmAnaW%2F2UaLY%2FLN2Nf&X-Amz-Signature=67da52b26d8c9c5d10d059dee76f560f5eb085b9b8806e65cf3e12bce561fd2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2JJ6FGJ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQD8V7%2BCRTlgPbJ%2BRG5R5aIT3munFRWNRotgQVKMOQC%2FzAIgYeLf2OrfoIHvHybR%2BoIxWRx7KYXl0VosC8aLYYgCpFUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFSNq9c47rdfFOnDhyrcA2S%2FMUXbQNSnqmc2lAPt7BhIliMx7AdJA7pZhCUaIV2DczHC5%2Fh6PIIAUloDq8sqSdDqXOAIfLKGxKifjbsq9uJ9N8k4iP0LsBoI6I3ObSvjlYwoujcTE3z%2FK6U5%2BJLjlPmZ%2FYHp%2Fv53bZOQtLqbwdvoy%2F12125BremBVI7WszmKzOEPXxUOF7pqSwoa3XJQ1ZCotV60HSl0nD6ZZfwALxYSr3CA8kt%2BCt%2BR0aIgOOukWyatfzEUlsXka06MAcPMgiXZJgpE%2FyMfewbqZt0MZCW%2Fcdz3yWxSoXCHi5PVwdrvJhP%2B3D62%2BI%2FQzpguhi%2BCkH4YJmxHX64sWocPFD94r5iP57qSDx6lxIjNFBr0ZnNBi9Ry49sb63HlpgyMnooB%2BoLS1Px%2BGFPb0KhV2UDo1ke0m2Uue1cMKwVcxaB%2FG32v7VFpGFuLFW9YA0p%2B7HuAIsCOPzYJBAwfyiBJeYcRfiicmw97J5qZC2XH9mIAxjKXD5tvBVODov3%2BnjUW9MYHP3ALxdGJ501GazLXZbrz0D25UpNizfyFNyvYZjZxzxAbZhJunxJHTtlMJr%2BUPK0TwWnNlkcysXHDzFxlsVvf%2FaR7bx7eMZsO7HU4EtKcIRmIZqeeCYl%2B2Tzqqk4oML6BlcgGOqUB4h%2BmpIuiOZlz0Uf3laWpmgME7sCZrA9R3YzgyeYhzyYVBDpBPJKEOQTf0kGEIt3Hyr1NDmB4iqdG%2Blzmi8lPdCFhBA6skzHVJuI7RWLWoQOHBPNzw5bOwYqSW56uBkWZzK0LdssUAC8YU8A7U%2FnPkH4XIefz2yMYCI4fMJNwXlJ7nhS6o4Vi5IOk%2BAHh4QOn6ZpyJg0ip9BmAnaW%2F2UaLY%2FLN2Nf&X-Amz-Signature=2c71754a3992e11be5729cb8ea1c2c0c15ecd8d2df2776bd5f909e96db14fa5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2JJ6FGJ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQD8V7%2BCRTlgPbJ%2BRG5R5aIT3munFRWNRotgQVKMOQC%2FzAIgYeLf2OrfoIHvHybR%2BoIxWRx7KYXl0VosC8aLYYgCpFUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFSNq9c47rdfFOnDhyrcA2S%2FMUXbQNSnqmc2lAPt7BhIliMx7AdJA7pZhCUaIV2DczHC5%2Fh6PIIAUloDq8sqSdDqXOAIfLKGxKifjbsq9uJ9N8k4iP0LsBoI6I3ObSvjlYwoujcTE3z%2FK6U5%2BJLjlPmZ%2FYHp%2Fv53bZOQtLqbwdvoy%2F12125BremBVI7WszmKzOEPXxUOF7pqSwoa3XJQ1ZCotV60HSl0nD6ZZfwALxYSr3CA8kt%2BCt%2BR0aIgOOukWyatfzEUlsXka06MAcPMgiXZJgpE%2FyMfewbqZt0MZCW%2Fcdz3yWxSoXCHi5PVwdrvJhP%2B3D62%2BI%2FQzpguhi%2BCkH4YJmxHX64sWocPFD94r5iP57qSDx6lxIjNFBr0ZnNBi9Ry49sb63HlpgyMnooB%2BoLS1Px%2BGFPb0KhV2UDo1ke0m2Uue1cMKwVcxaB%2FG32v7VFpGFuLFW9YA0p%2B7HuAIsCOPzYJBAwfyiBJeYcRfiicmw97J5qZC2XH9mIAxjKXD5tvBVODov3%2BnjUW9MYHP3ALxdGJ501GazLXZbrz0D25UpNizfyFNyvYZjZxzxAbZhJunxJHTtlMJr%2BUPK0TwWnNlkcysXHDzFxlsVvf%2FaR7bx7eMZsO7HU4EtKcIRmIZqeeCYl%2B2Tzqqk4oML6BlcgGOqUB4h%2BmpIuiOZlz0Uf3laWpmgME7sCZrA9R3YzgyeYhzyYVBDpBPJKEOQTf0kGEIt3Hyr1NDmB4iqdG%2Blzmi8lPdCFhBA6skzHVJuI7RWLWoQOHBPNzw5bOwYqSW56uBkWZzK0LdssUAC8YU8A7U%2FnPkH4XIefz2yMYCI4fMJNwXlJ7nhS6o4Vi5IOk%2BAHh4QOn6ZpyJg0ip9BmAnaW%2F2UaLY%2FLN2Nf&X-Amz-Signature=1f3bfeedd3a0393e020cddd9d320b37b5ede1040b4e2701d50ad909f44144fd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2JJ6FGJ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQD8V7%2BCRTlgPbJ%2BRG5R5aIT3munFRWNRotgQVKMOQC%2FzAIgYeLf2OrfoIHvHybR%2BoIxWRx7KYXl0VosC8aLYYgCpFUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFSNq9c47rdfFOnDhyrcA2S%2FMUXbQNSnqmc2lAPt7BhIliMx7AdJA7pZhCUaIV2DczHC5%2Fh6PIIAUloDq8sqSdDqXOAIfLKGxKifjbsq9uJ9N8k4iP0LsBoI6I3ObSvjlYwoujcTE3z%2FK6U5%2BJLjlPmZ%2FYHp%2Fv53bZOQtLqbwdvoy%2F12125BremBVI7WszmKzOEPXxUOF7pqSwoa3XJQ1ZCotV60HSl0nD6ZZfwALxYSr3CA8kt%2BCt%2BR0aIgOOukWyatfzEUlsXka06MAcPMgiXZJgpE%2FyMfewbqZt0MZCW%2Fcdz3yWxSoXCHi5PVwdrvJhP%2B3D62%2BI%2FQzpguhi%2BCkH4YJmxHX64sWocPFD94r5iP57qSDx6lxIjNFBr0ZnNBi9Ry49sb63HlpgyMnooB%2BoLS1Px%2BGFPb0KhV2UDo1ke0m2Uue1cMKwVcxaB%2FG32v7VFpGFuLFW9YA0p%2B7HuAIsCOPzYJBAwfyiBJeYcRfiicmw97J5qZC2XH9mIAxjKXD5tvBVODov3%2BnjUW9MYHP3ALxdGJ501GazLXZbrz0D25UpNizfyFNyvYZjZxzxAbZhJunxJHTtlMJr%2BUPK0TwWnNlkcysXHDzFxlsVvf%2FaR7bx7eMZsO7HU4EtKcIRmIZqeeCYl%2B2Tzqqk4oML6BlcgGOqUB4h%2BmpIuiOZlz0Uf3laWpmgME7sCZrA9R3YzgyeYhzyYVBDpBPJKEOQTf0kGEIt3Hyr1NDmB4iqdG%2Blzmi8lPdCFhBA6skzHVJuI7RWLWoQOHBPNzw5bOwYqSW56uBkWZzK0LdssUAC8YU8A7U%2FnPkH4XIefz2yMYCI4fMJNwXlJ7nhS6o4Vi5IOk%2BAHh4QOn6ZpyJg0ip9BmAnaW%2F2UaLY%2FLN2Nf&X-Amz-Signature=f61bf22e46ceddf67a241135e0d444c6755e1c75f76a79651dd87c569a42af46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2JJ6FGJ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQD8V7%2BCRTlgPbJ%2BRG5R5aIT3munFRWNRotgQVKMOQC%2FzAIgYeLf2OrfoIHvHybR%2BoIxWRx7KYXl0VosC8aLYYgCpFUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFSNq9c47rdfFOnDhyrcA2S%2FMUXbQNSnqmc2lAPt7BhIliMx7AdJA7pZhCUaIV2DczHC5%2Fh6PIIAUloDq8sqSdDqXOAIfLKGxKifjbsq9uJ9N8k4iP0LsBoI6I3ObSvjlYwoujcTE3z%2FK6U5%2BJLjlPmZ%2FYHp%2Fv53bZOQtLqbwdvoy%2F12125BremBVI7WszmKzOEPXxUOF7pqSwoa3XJQ1ZCotV60HSl0nD6ZZfwALxYSr3CA8kt%2BCt%2BR0aIgOOukWyatfzEUlsXka06MAcPMgiXZJgpE%2FyMfewbqZt0MZCW%2Fcdz3yWxSoXCHi5PVwdrvJhP%2B3D62%2BI%2FQzpguhi%2BCkH4YJmxHX64sWocPFD94r5iP57qSDx6lxIjNFBr0ZnNBi9Ry49sb63HlpgyMnooB%2BoLS1Px%2BGFPb0KhV2UDo1ke0m2Uue1cMKwVcxaB%2FG32v7VFpGFuLFW9YA0p%2B7HuAIsCOPzYJBAwfyiBJeYcRfiicmw97J5qZC2XH9mIAxjKXD5tvBVODov3%2BnjUW9MYHP3ALxdGJ501GazLXZbrz0D25UpNizfyFNyvYZjZxzxAbZhJunxJHTtlMJr%2BUPK0TwWnNlkcysXHDzFxlsVvf%2FaR7bx7eMZsO7HU4EtKcIRmIZqeeCYl%2B2Tzqqk4oML6BlcgGOqUB4h%2BmpIuiOZlz0Uf3laWpmgME7sCZrA9R3YzgyeYhzyYVBDpBPJKEOQTf0kGEIt3Hyr1NDmB4iqdG%2Blzmi8lPdCFhBA6skzHVJuI7RWLWoQOHBPNzw5bOwYqSW56uBkWZzK0LdssUAC8YU8A7U%2FnPkH4XIefz2yMYCI4fMJNwXlJ7nhS6o4Vi5IOk%2BAHh4QOn6ZpyJg0ip9BmAnaW%2F2UaLY%2FLN2Nf&X-Amz-Signature=b5375cb8098734171f852e0eb7392b135c55ee588b44f2f5c525014a4e02d670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2JJ6FGJ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQD8V7%2BCRTlgPbJ%2BRG5R5aIT3munFRWNRotgQVKMOQC%2FzAIgYeLf2OrfoIHvHybR%2BoIxWRx7KYXl0VosC8aLYYgCpFUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFSNq9c47rdfFOnDhyrcA2S%2FMUXbQNSnqmc2lAPt7BhIliMx7AdJA7pZhCUaIV2DczHC5%2Fh6PIIAUloDq8sqSdDqXOAIfLKGxKifjbsq9uJ9N8k4iP0LsBoI6I3ObSvjlYwoujcTE3z%2FK6U5%2BJLjlPmZ%2FYHp%2Fv53bZOQtLqbwdvoy%2F12125BremBVI7WszmKzOEPXxUOF7pqSwoa3XJQ1ZCotV60HSl0nD6ZZfwALxYSr3CA8kt%2BCt%2BR0aIgOOukWyatfzEUlsXka06MAcPMgiXZJgpE%2FyMfewbqZt0MZCW%2Fcdz3yWxSoXCHi5PVwdrvJhP%2B3D62%2BI%2FQzpguhi%2BCkH4YJmxHX64sWocPFD94r5iP57qSDx6lxIjNFBr0ZnNBi9Ry49sb63HlpgyMnooB%2BoLS1Px%2BGFPb0KhV2UDo1ke0m2Uue1cMKwVcxaB%2FG32v7VFpGFuLFW9YA0p%2B7HuAIsCOPzYJBAwfyiBJeYcRfiicmw97J5qZC2XH9mIAxjKXD5tvBVODov3%2BnjUW9MYHP3ALxdGJ501GazLXZbrz0D25UpNizfyFNyvYZjZxzxAbZhJunxJHTtlMJr%2BUPK0TwWnNlkcysXHDzFxlsVvf%2FaR7bx7eMZsO7HU4EtKcIRmIZqeeCYl%2B2Tzqqk4oML6BlcgGOqUB4h%2BmpIuiOZlz0Uf3laWpmgME7sCZrA9R3YzgyeYhzyYVBDpBPJKEOQTf0kGEIt3Hyr1NDmB4iqdG%2Blzmi8lPdCFhBA6skzHVJuI7RWLWoQOHBPNzw5bOwYqSW56uBkWZzK0LdssUAC8YU8A7U%2FnPkH4XIefz2yMYCI4fMJNwXlJ7nhS6o4Vi5IOk%2BAHh4QOn6ZpyJg0ip9BmAnaW%2F2UaLY%2FLN2Nf&X-Amz-Signature=1181a0bb61db916599b932007381c81c214dae248256dcdcfba9863adc7bcbaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2JJ6FGJ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQD8V7%2BCRTlgPbJ%2BRG5R5aIT3munFRWNRotgQVKMOQC%2FzAIgYeLf2OrfoIHvHybR%2BoIxWRx7KYXl0VosC8aLYYgCpFUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFSNq9c47rdfFOnDhyrcA2S%2FMUXbQNSnqmc2lAPt7BhIliMx7AdJA7pZhCUaIV2DczHC5%2Fh6PIIAUloDq8sqSdDqXOAIfLKGxKifjbsq9uJ9N8k4iP0LsBoI6I3ObSvjlYwoujcTE3z%2FK6U5%2BJLjlPmZ%2FYHp%2Fv53bZOQtLqbwdvoy%2F12125BremBVI7WszmKzOEPXxUOF7pqSwoa3XJQ1ZCotV60HSl0nD6ZZfwALxYSr3CA8kt%2BCt%2BR0aIgOOukWyatfzEUlsXka06MAcPMgiXZJgpE%2FyMfewbqZt0MZCW%2Fcdz3yWxSoXCHi5PVwdrvJhP%2B3D62%2BI%2FQzpguhi%2BCkH4YJmxHX64sWocPFD94r5iP57qSDx6lxIjNFBr0ZnNBi9Ry49sb63HlpgyMnooB%2BoLS1Px%2BGFPb0KhV2UDo1ke0m2Uue1cMKwVcxaB%2FG32v7VFpGFuLFW9YA0p%2B7HuAIsCOPzYJBAwfyiBJeYcRfiicmw97J5qZC2XH9mIAxjKXD5tvBVODov3%2BnjUW9MYHP3ALxdGJ501GazLXZbrz0D25UpNizfyFNyvYZjZxzxAbZhJunxJHTtlMJr%2BUPK0TwWnNlkcysXHDzFxlsVvf%2FaR7bx7eMZsO7HU4EtKcIRmIZqeeCYl%2B2Tzqqk4oML6BlcgGOqUB4h%2BmpIuiOZlz0Uf3laWpmgME7sCZrA9R3YzgyeYhzyYVBDpBPJKEOQTf0kGEIt3Hyr1NDmB4iqdG%2Blzmi8lPdCFhBA6skzHVJuI7RWLWoQOHBPNzw5bOwYqSW56uBkWZzK0LdssUAC8YU8A7U%2FnPkH4XIefz2yMYCI4fMJNwXlJ7nhS6o4Vi5IOk%2BAHh4QOn6ZpyJg0ip9BmAnaW%2F2UaLY%2FLN2Nf&X-Amz-Signature=372c6129efd03733b9cbd731bc15b3b1679c7f16dd69d13cd8b00784b45ba767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OA7SN47%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIAOxY0v%2B33dCj%2FW6IPUUt3sAvZdvPxBamSkCxDzBlfvBAiEAyvhtJX7mEQL9YD9J44inycu54vWfT5NC78NFpqC6CJsq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDOQS1Uu4D%2BiYC71G6CrcA4w0kc%2FkJkX9LHCb0XvXZjgvpGvNjf4hJ1DCihFa%2B9OAzWdosIObBq%2BxN6xhk4J4C3wcOAikB1gmNzi3xA0HUdw1aZqlVCC264%2BGYD1%2Bm%2Fd2lUdbmwmS75qkWSIG3o5YLuGs%2FUNOoOLwqcXA1Rl8mVnK1J00zXd56ppR0uhWYPHloDlwfPp%2FhhDadMKLCO2gqgWNJ7wwAIu3AMIohzjbrGjPgbaVCuvJNyNxZJCl53BxzeM6VF%2Ftp0rWkrmVGMAuAS86IAPcCp1uNTsXImaPpXayHBt5L2CvGgwE3L5nYMihrs4b0hMGhzcWk60DzIWl2wnx%2Fpwt6fRF%2BmSlPNskfX6JGZIq2sAQhRIAoPJ4WnXiAfybMP6pPbb6Ep7%2F0YQtQ7fdJ8lpNTAhIfLx67ucW3qS7pXRxc9Af0xODW0XOZ673vSArTG7%2FJhHMRA4t7HsDZ4Hfk2gOTo9QPPYvYg%2FODryCcA0MOQbdxAEz1dkRZTmPOZl162fbB6QGsvb3LzcOi%2FdSmlO4XdsLCymOkZJG3ZvRCLACtCDRLdDKocUiPRDhcmnzlZX16fchhqtEHf%2FORALgO7%2FwBPwls5dGCzF%2FZh5fDiJYscG24TRqKPEJpNlslsTRnkCRxofGBJsMM%2F6lMgGOqUBHLGLNJ9yQ0m8nrLg1xP1WE0qyIrWNrdUym7fuwB2w743lJaBTDEqNGsUkZVpoElv0Hc8AZhEYq1ETltxMe%2FAxpq229plhWscwImtFsBIXqFaEzgFPMwYXilaQiIrgMkqW%2BLXdxWpyHMk0vXfnNAfAsTf0V00TSVXf%2F8wIC4BW9ShIcjaafQ%2B6ysk3HkW8RQtc41QAbxg4%2BVct%2FTbey6eIYcCw4bN&X-Amz-Signature=88fb81d07adb2a52b72cb30692ca65ff21c6843849c84cf2089e62cfbbac1558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4AKCTKO%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCID2ioPI2Xpq%2B4RR671aN7nFe%2FTPlnMDRuUVqvOopVPEZAiEA1%2BhJQaQZfZjnXJkQLsxEhv5bxtjqgsm4jQaFjR4VR8Mq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDERQn7jPjp6zzGcShCrcA4EG1L0yqdgjx1qMxIg67dYlE0OjLWuwVIOv9VzgftOW1gxZddvYl%2Bjd1yuB3UTsKO2fGnYvEODVGpkZjb%2BSS54eNpEaWlzfWl1g0eDEeYksGoskHzzAjI36OfTPaZbY%2FyRAsED3SKdgNYE0fU7gXBFEGJO%2B%2FoGcBshFDk7qfKzd%2FfWA04aJg%2BX%2Fh0FumaL6O2Oo5Jq7einyecRsU63wJTvAy4hN%2FanQUc8vhmjLPd6qG1kVfIEYNjObxotLDg8yq8J%2Fbn1J9KAgHSaC31FcppU3LcaIiznh9acS2ek3KrMqQdl%2BCIKTqGjvmBtWZjUpHQgW5IpujyXx%2FzoPDLhNKtGVEG6PtkCPhTw0KTTBocpq%2BwKoydima90LpQ%2BCgSyQ873ilFL2vwqqYXbGplK5VinVLsTMn12O%2B4%2F2Je9bQGUV3Ogp1SGpIqt2DRY0ovo08vwtF9EaM%2BC6AZFAEvEmTAhm3TA8S04cFa1jG6YKEmpp2Hcyvj4WsqIEzJWUuGRcu4atJDdRD2y2CTQVLchyX6ss0nW4%2F%2BFn8jmwTgVc1zWWDg63Jk538t4ErJxq%2FVjaajVBlOx9eSWobexdQpELUTMBCv%2B9HrhwhfAdG5Xk1O3TnOiLRi0rSY0u%2Fk01MLuBlcgGOqUB2jwd6808R%2BoJpyw4mnek%2FMcogRZJjtMTMhp8PT3Ylq84q%2BPYOGee8%2FVBRo8MP1tM9T4%2FlFzy9WC7AKxsI%2BpFnZE9fKyFeHNRIXICtjmj3%2FUJsXGXZH3mTSXo49HpBzcHWPzVuXnFHTj0O2fz0z1lsC7VKRxAIPy3k5TmUMrS%2BQa1i0dmf2AfJiQYCmeO0EbRhzp16n3K%2BKHTZZh03bITx9I0Vbmt&X-Amz-Signature=c30b26a470e818b9ffd2dca7ba461b4332a7ada5b72df6dd2f3c023bb670b2ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5IRIWOV%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIBb7of2tyGpRJlk6%2BrXgLUQVJMp6jSSEyyRVniHDAQn7AiB2L26KWBDvvgZw4dfyJjnfAbxLxeSZyInSps5DyuS5VSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMXLeeg6BZJCYC7pePKtwDLl5zQVf6sDYRYMP%2BRcs6LbKaAO9D5BLQRnmfR3uNiX1DuqCMF2uzhrH3RjdgQjN6TRlJMp6zU91WtmDu8crTdsSYLZ%2BLyDsY%2B32lpqk%2BrbRC%2BAjhz%2FaWrQ5S2FnARqVoqyWCYx6kX9iLQGkNF2Qqv8Pqm4rNd9AGxBv9%2B8HRCYURfgdMT%2Bwt2P6YI1ichsurFuTcLoOVbvOFYgonqCemki6hGRz33NydjdnBMaN%2BVsHVv618V24uVZFR7qXMEv%2Fi%2BAlEUX10cnPf3zaoi%2By7nqRKp3K61kIg9tgATZnimKMDuEcokwRLoQsj6Er5kPBJP4dMBzIbZXjtpui6%2F%2BB%2F%2BvF2XAopPkapVGGlsj6vQwqjsoks9NJ2m23AvpwyY8BxhijmsJ0VdEwg60jaOezXKx61Q5BUswyv1dnfIJq8JJ9QPjAMpe0m9mku3G3JlCtxUbmRSh33qVwUEVkVV5G6QGyNMRbVLxE7hqzQwKp4ebkp6MSYd4j0IcxLKOUS4mlEPt%2FhGp9Lhjb%2FZNZRW8EyKuwAsiC6smI0uWtrzj%2B%2FxckZ9uo1dS5Av2eR0zszPzCJLH7NVsSvbCHGQAjDCJp9Gsb7EVF5AiL8K%2BdXVjfv0Pk%2BUQ7GQnPF6Uu%2B7KwwpvqUyAY6pgGSd9HbJ9brivlbr3IgkyJ1UQeAhLRnEEMWh%2Ftb37AiNsRdPnPGS6KbS%2BuGCjL681%2FTsi5Fl7IFV6WivGQps%2F%2Bfa9G27iBzypB3exLMUqeP3kCXX7GMU11u%2BiWHBl%2BCU0gBzoOigReRS4tecn3WxUMzwro8bnumAlitHJi6furegoi%2BwU5%2Fe6FERZMYD8TXcIhtJh96XSeLHkukmJVvf7zYEjn0XGSM&X-Amz-Signature=e17686ea607c03acd992441401bcdeac47cf21fba8a168989d11b39536568647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2JJ6FGJ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQD8V7%2BCRTlgPbJ%2BRG5R5aIT3munFRWNRotgQVKMOQC%2FzAIgYeLf2OrfoIHvHybR%2BoIxWRx7KYXl0VosC8aLYYgCpFUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFSNq9c47rdfFOnDhyrcA2S%2FMUXbQNSnqmc2lAPt7BhIliMx7AdJA7pZhCUaIV2DczHC5%2Fh6PIIAUloDq8sqSdDqXOAIfLKGxKifjbsq9uJ9N8k4iP0LsBoI6I3ObSvjlYwoujcTE3z%2FK6U5%2BJLjlPmZ%2FYHp%2Fv53bZOQtLqbwdvoy%2F12125BremBVI7WszmKzOEPXxUOF7pqSwoa3XJQ1ZCotV60HSl0nD6ZZfwALxYSr3CA8kt%2BCt%2BR0aIgOOukWyatfzEUlsXka06MAcPMgiXZJgpE%2FyMfewbqZt0MZCW%2Fcdz3yWxSoXCHi5PVwdrvJhP%2B3D62%2BI%2FQzpguhi%2BCkH4YJmxHX64sWocPFD94r5iP57qSDx6lxIjNFBr0ZnNBi9Ry49sb63HlpgyMnooB%2BoLS1Px%2BGFPb0KhV2UDo1ke0m2Uue1cMKwVcxaB%2FG32v7VFpGFuLFW9YA0p%2B7HuAIsCOPzYJBAwfyiBJeYcRfiicmw97J5qZC2XH9mIAxjKXD5tvBVODov3%2BnjUW9MYHP3ALxdGJ501GazLXZbrz0D25UpNizfyFNyvYZjZxzxAbZhJunxJHTtlMJr%2BUPK0TwWnNlkcysXHDzFxlsVvf%2FaR7bx7eMZsO7HU4EtKcIRmIZqeeCYl%2B2Tzqqk4oML6BlcgGOqUB4h%2BmpIuiOZlz0Uf3laWpmgME7sCZrA9R3YzgyeYhzyYVBDpBPJKEOQTf0kGEIt3Hyr1NDmB4iqdG%2Blzmi8lPdCFhBA6skzHVJuI7RWLWoQOHBPNzw5bOwYqSW56uBkWZzK0LdssUAC8YU8A7U%2FnPkH4XIefz2yMYCI4fMJNwXlJ7nhS6o4Vi5IOk%2BAHh4QOn6ZpyJg0ip9BmAnaW%2F2UaLY%2FLN2Nf&X-Amz-Signature=e8b556d702db2adbef9582f4babd6404be30d39357f5e6b5391d669ecb7f7135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXO7Y6UL%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIHV6p8%2Fr89APZrEjDVHyHHcPIF2b978hmV8yu3fcn3G4AiEA6C%2FSv0p4Z1PVqY8MZ3YRucpRLOssJQthSDuBP4YTFtwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDNMWIhSiE1QYG%2FRbsyrcA75nauSliV60%2FFr5qHWHXo59sD4WZDoJdj7omR28GiAWCeJcKhjr38RyZBSx4d4KnygzL2f7SFYZ4vPW4FoYjs%2FwaAd6QCzwLMBTsrQWUPNTMYOZhMQAcIvOlvG4UlJR4LZAybUlPuko4Siptn71Wo4D1L5J5KM9xWJkB%2FJcYUhsbI27B41P3kuVFKt1uqotGxN7wDAisJTqVcOODBgOxAVzMLmddf15Zf0PvPKtXKO%2Bz1mQFfQd%2BJucYptm4OrrmoYtAgXkYIPbqDPFdcMP5wt3qtDrCZcP%2BkkDTCWe2qxyeto5%2Fg422INyZnq5aoV3T5Zi1MfbMxfkh8snQlT8v27srJcTuaSnr%2BdWsiZiL1KrSLoObI3O%2FEjCqi%2FzDmfV0gEGVQ45TpuozZOj5ALHwkdo196VwIrzl%2FTy9ftt6jXbMBsic1mMXtvtUhxhg%2FwCVdjNzXEIi0oc5PAGAl%2B1rbMYcAL4I66YQ1DEL9HnYG4chYWiKyI5QKvy5XiXq16HVv2ZLKwl46rYd7tbscm3LLSBrurAE09qFGc0If1XWPvsmHzrnWmsMwa4qOWf1uPk39ymXlC76r4XjYPTFMQvYIfySGgez62GBDG3Xgc67VrVbbvdchHskrIh0XjTMPD6lMgGOqUBCf6TzTBGyHQzQihQz0swuOWv8R2nA%2BnYgIjIlrPEQlG6P%2FMbmvCiBfrbcLEs4eOaFie%2BC9g%2FUa7qiiD0iFkwdq3JVgMZkfb8tdxgQyvT2DFC0UPh8g8tBj9I4ijm2P8UHxdYxYeye3r45aOvD6EZKsZA%2BRhOpuvxILY0sa%2BeypWjwAG%2BYs1sDOvqPXWRkUz7gPyT%2FPDGrWDe1kNBv6Kv1rikg9jI&X-Amz-Signature=0425fddd161ad47d2fb0820fd2094e5af3cb5a291f690f3e69349a530fe688a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2JJ6FGJ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQD8V7%2BCRTlgPbJ%2BRG5R5aIT3munFRWNRotgQVKMOQC%2FzAIgYeLf2OrfoIHvHybR%2BoIxWRx7KYXl0VosC8aLYYgCpFUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFSNq9c47rdfFOnDhyrcA2S%2FMUXbQNSnqmc2lAPt7BhIliMx7AdJA7pZhCUaIV2DczHC5%2Fh6PIIAUloDq8sqSdDqXOAIfLKGxKifjbsq9uJ9N8k4iP0LsBoI6I3ObSvjlYwoujcTE3z%2FK6U5%2BJLjlPmZ%2FYHp%2Fv53bZOQtLqbwdvoy%2F12125BremBVI7WszmKzOEPXxUOF7pqSwoa3XJQ1ZCotV60HSl0nD6ZZfwALxYSr3CA8kt%2BCt%2BR0aIgOOukWyatfzEUlsXka06MAcPMgiXZJgpE%2FyMfewbqZt0MZCW%2Fcdz3yWxSoXCHi5PVwdrvJhP%2B3D62%2BI%2FQzpguhi%2BCkH4YJmxHX64sWocPFD94r5iP57qSDx6lxIjNFBr0ZnNBi9Ry49sb63HlpgyMnooB%2BoLS1Px%2BGFPb0KhV2UDo1ke0m2Uue1cMKwVcxaB%2FG32v7VFpGFuLFW9YA0p%2B7HuAIsCOPzYJBAwfyiBJeYcRfiicmw97J5qZC2XH9mIAxjKXD5tvBVODov3%2BnjUW9MYHP3ALxdGJ501GazLXZbrz0D25UpNizfyFNyvYZjZxzxAbZhJunxJHTtlMJr%2BUPK0TwWnNlkcysXHDzFxlsVvf%2FaR7bx7eMZsO7HU4EtKcIRmIZqeeCYl%2B2Tzqqk4oML6BlcgGOqUB4h%2BmpIuiOZlz0Uf3laWpmgME7sCZrA9R3YzgyeYhzyYVBDpBPJKEOQTf0kGEIt3Hyr1NDmB4iqdG%2Blzmi8lPdCFhBA6skzHVJuI7RWLWoQOHBPNzw5bOwYqSW56uBkWZzK0LdssUAC8YU8A7U%2FnPkH4XIefz2yMYCI4fMJNwXlJ7nhS6o4Vi5IOk%2BAHh4QOn6ZpyJg0ip9BmAnaW%2F2UaLY%2FLN2Nf&X-Amz-Signature=593946202e191a88bee5080b6cf1fb4fcd7209772e5022b698972c513f414e11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC5TEPIQ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBCbbClWLxXGVuEfiUTpXhUMsU%2BeN8ZAGAiGpOljUEldAiEA9XiKWNB36RNZrIqtWY6uPEGeKRduvel22ANs%2F%2Btkpdcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDCsCGtWovJBQ0fGCtircA1v3tGgrsSxw4D1%2B9SkzMqr4eIFvkzL3Lck3iNS%2B9pLE4aHV9pOw4xFl0nfgGVCGzqb0VCL867JGzuIQy18Tg7erLnhQjR4%2BwWFcrKrMaAzGHnjK5EeKJDCKnHO2fjjYaTL%2F6LanPbqEuHdBtw3ScF8gjGOh9R40MHqLNjWwaBj7OkT%2BOKROLb58clKNh9OV7XWQNmkDNUAh25E%2Fuy6%2BQEaHdhYSgj3mPbbkSCeeCLw3uJ%2BKKXLBhfiUJbkHc57qYBybE9A0fz1zHMXmE3KRRlo7gU22olOfXJANn%2BO2DcBerrCq1S%2FRx8WUiwJrbcvYz8Z7W4HQXvcoH62X%2BPYGf%2B3Y3RvUrnN2K78PUxyMOpNZQQYByTDhIn83Y06210rfh3ES235WtMwdSwMDcgPP3rHkFBmTiLw0fN%2BJA7GThJYAvotLvMK0im1gcRZk4j0%2FWX7RA4lPYWHrzt2MIcur4p1hLyeaHAl%2BOrT4vMC2WYmPXtoKszGefFuFKwyzxVaGS43cu3pjnD42UK5%2BHlP7VuDaVsPvoJ2eKuR%2BQxtO9CURtg7xvZMEFW8IOcNM1letUpv5gN6EQ%2B133xM9tpWyyNqr4jatp7tBCKPRbsV7WWqfBZWowvtZvKl9mCorML6BlcgGOqUBtHmJsCrheuTvtfCqmPEbuWPmvxyH1o01XFp8ir4Q2AajnQEPdjqLvvtFRMamurm1nvlycQKg%2BzuR04n%2BvwaMqA2IIovr3CIbUk5%2BkBc%2B3VTeB%2FiCRS1BlPOFMT4veTu98kbOLsYlQF%2FyVuUdMenxU4UQ1I0CKWOwxwZZ8lrZyV9dBLC7XPh3zFUU%2BzuehC95Pc2uHGxnOHEuOLZd0NEY1xXKObBb&X-Amz-Signature=ac5801a151a3bd36b5eade61e07119b106fa4ceec5f0ac9359796de4626afa48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2JJ6FGJ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQD8V7%2BCRTlgPbJ%2BRG5R5aIT3munFRWNRotgQVKMOQC%2FzAIgYeLf2OrfoIHvHybR%2BoIxWRx7KYXl0VosC8aLYYgCpFUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFSNq9c47rdfFOnDhyrcA2S%2FMUXbQNSnqmc2lAPt7BhIliMx7AdJA7pZhCUaIV2DczHC5%2Fh6PIIAUloDq8sqSdDqXOAIfLKGxKifjbsq9uJ9N8k4iP0LsBoI6I3ObSvjlYwoujcTE3z%2FK6U5%2BJLjlPmZ%2FYHp%2Fv53bZOQtLqbwdvoy%2F12125BremBVI7WszmKzOEPXxUOF7pqSwoa3XJQ1ZCotV60HSl0nD6ZZfwALxYSr3CA8kt%2BCt%2BR0aIgOOukWyatfzEUlsXka06MAcPMgiXZJgpE%2FyMfewbqZt0MZCW%2Fcdz3yWxSoXCHi5PVwdrvJhP%2B3D62%2BI%2FQzpguhi%2BCkH4YJmxHX64sWocPFD94r5iP57qSDx6lxIjNFBr0ZnNBi9Ry49sb63HlpgyMnooB%2BoLS1Px%2BGFPb0KhV2UDo1ke0m2Uue1cMKwVcxaB%2FG32v7VFpGFuLFW9YA0p%2B7HuAIsCOPzYJBAwfyiBJeYcRfiicmw97J5qZC2XH9mIAxjKXD5tvBVODov3%2BnjUW9MYHP3ALxdGJ501GazLXZbrz0D25UpNizfyFNyvYZjZxzxAbZhJunxJHTtlMJr%2BUPK0TwWnNlkcysXHDzFxlsVvf%2FaR7bx7eMZsO7HU4EtKcIRmIZqeeCYl%2B2Tzqqk4oML6BlcgGOqUB4h%2BmpIuiOZlz0Uf3laWpmgME7sCZrA9R3YzgyeYhzyYVBDpBPJKEOQTf0kGEIt3Hyr1NDmB4iqdG%2Blzmi8lPdCFhBA6skzHVJuI7RWLWoQOHBPNzw5bOwYqSW56uBkWZzK0LdssUAC8YU8A7U%2FnPkH4XIefz2yMYCI4fMJNwXlJ7nhS6o4Vi5IOk%2BAHh4QOn6ZpyJg0ip9BmAnaW%2F2UaLY%2FLN2Nf&X-Amz-Signature=631afc98b48cc7c09d1d9a577f1e7d2a5976052443580699c145b659b6c99983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5JYV6S5%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDYsZgtFfwhQnOq4EjRSdMXhRC9RAm5jOMRtno0XfQxVgIhAJS%2F25E3zkjim4laPqjoQnnACWvEjZ7rpTXQ4JxRfId2Kv8DCCAQABoMNjM3NDIzMTgzODA1IgzahbYdItM1lOmOhsgq3AOWRMXWrZ1LbcvtEsYZGbXDuZmsBnVpy1CsmiIPtEBJqfss6bbk%2BzWA%2BiF2hhqYtgQUdGfCsbd1o9%2FANN6WQWWN63xxzI0KbhveKJWuHuH6ANNcScE1lvpZtdPHcT%2Bq5WfPPSEroet9nnsrJWAYMmAyPHB9aOCkSwdZ0E9c0WNpkL2mVXvvOTUqKypXudIFqWhPQqWwYVYkLLBQlLONfVH1sj2jN%2BWM0kBu2w6dDDPLPc1szRv06nNDGUyTB25Na6VcmoMO%2FsX3753cJEXy%2FLhCTN8UUcPi6W237%2F%2BSs5zl%2BcNsbVlSCMoZ2vgwEd46Vkt4SUEigZJO1DDQKjmA%2BfJWTGZ9x%2BAjzOQkCs%2F2Bju5JpuGSRS0HYYMXik%2BKQMjGAdGnvnJfO1VbDkVoVf0gys0q0YvW5H7YUJ%2F3Y9Ctnxqr04%2Ff7YOszFWTzlIRKe8spJ%2BZt1DPQOgBl3Aa4XlfuSuyjLnwTZw5vGqG%2B1pgYEwvD6yyc8A%2Bcw5e5j%2F5L7S%2BD8NM6eT2No5hpdpjMdrl89OgUVu1nbM7Qfa7BHhuww9lhx4hLeoJ3mWNj31tfa9hHGh%2FxLsl%2FEhuyUE1dtPDLbqbXHkJ9ozMXOOg%2FP%2Buw9vBpZZ1Am3CrXnLMpI1zC7%2BpTIBjqkAXuXXuj5tzEZtysEv%2BgMB4fAK4epYcWxPBxkCnGsl3CtTquPVQGRgdcLz4okxqqRCHbjvLyCKaxMPlSTYiz%2BgkwhS36hbU18Hf0MouNqwnI1l31i0IiE8WQzoYr1a9gW74O0mzGhKdkYP0Sbrr8L%2F7IZNyQNZXSHn5S%2B8cTI0hSZF3MovgCptRMsAgMIZjCfUtkkTNuXscfyTo5Wu%2Bs%2BFLRVh9Mu&X-Amz-Signature=62f428c93b99ee92b6ee7c580d8493778837c2edf30fb7a27334a221aada82df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2JJ6FGJ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQD8V7%2BCRTlgPbJ%2BRG5R5aIT3munFRWNRotgQVKMOQC%2FzAIgYeLf2OrfoIHvHybR%2BoIxWRx7KYXl0VosC8aLYYgCpFUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFSNq9c47rdfFOnDhyrcA2S%2FMUXbQNSnqmc2lAPt7BhIliMx7AdJA7pZhCUaIV2DczHC5%2Fh6PIIAUloDq8sqSdDqXOAIfLKGxKifjbsq9uJ9N8k4iP0LsBoI6I3ObSvjlYwoujcTE3z%2FK6U5%2BJLjlPmZ%2FYHp%2Fv53bZOQtLqbwdvoy%2F12125BremBVI7WszmKzOEPXxUOF7pqSwoa3XJQ1ZCotV60HSl0nD6ZZfwALxYSr3CA8kt%2BCt%2BR0aIgOOukWyatfzEUlsXka06MAcPMgiXZJgpE%2FyMfewbqZt0MZCW%2Fcdz3yWxSoXCHi5PVwdrvJhP%2B3D62%2BI%2FQzpguhi%2BCkH4YJmxHX64sWocPFD94r5iP57qSDx6lxIjNFBr0ZnNBi9Ry49sb63HlpgyMnooB%2BoLS1Px%2BGFPb0KhV2UDo1ke0m2Uue1cMKwVcxaB%2FG32v7VFpGFuLFW9YA0p%2B7HuAIsCOPzYJBAwfyiBJeYcRfiicmw97J5qZC2XH9mIAxjKXD5tvBVODov3%2BnjUW9MYHP3ALxdGJ501GazLXZbrz0D25UpNizfyFNyvYZjZxzxAbZhJunxJHTtlMJr%2BUPK0TwWnNlkcysXHDzFxlsVvf%2FaR7bx7eMZsO7HU4EtKcIRmIZqeeCYl%2B2Tzqqk4oML6BlcgGOqUB4h%2BmpIuiOZlz0Uf3laWpmgME7sCZrA9R3YzgyeYhzyYVBDpBPJKEOQTf0kGEIt3Hyr1NDmB4iqdG%2Blzmi8lPdCFhBA6skzHVJuI7RWLWoQOHBPNzw5bOwYqSW56uBkWZzK0LdssUAC8YU8A7U%2FnPkH4XIefz2yMYCI4fMJNwXlJ7nhS6o4Vi5IOk%2BAHh4QOn6ZpyJg0ip9BmAnaW%2F2UaLY%2FLN2Nf&X-Amz-Signature=d35e55f77231e99e71b286adbc1df4a4333f467b8ba185ade5afa76bc625013d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLMSKAGY%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGhNut3UY23HAEdOlZhZL%2BcP%2BrBxOfhokVwc585TMFx6AiEA5AOgHeiZDemY3MatIxkcnWmhyLxD9hCKUI6bzoaAvmcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJS2tVWTsPf%2BT8%2FI8yrcA17LqMG05PCBrBTdfkP72yliDK9a1NFQSNoonG9xdLyjPtJQsfwtrXycxokZcNyr80YbCtH5iSZqphAkzQHBNN%2Fes%2FFpcXmAGN6R1gf8F0T5cHsy%2Fa7kpomyHTB25Ay9jlO9tVc1iEGrdrS4TGaelFJGqTmn6Tx6ZmtqLYHRsYkDft%2FJiYZAizn5iCU%2BjwLD%2FgzCescawLKnGvFxqa9KvyDEWYv6UnTteALCASpdvItukoZd%2BypKc1oBlF%2BECbhb5b%2F6m%2FD9VRcE%2F8qlFm7BPdNm9BomBkydJBPlNvs4S8GGfZCukSZpyCuLb2ns12ntRxZIa7xCOWqtwVxarss45OgJBZpXytn6Jtvs%2Bt3hemWvcm%2B%2BH234hSk5uAmxI9GDwwuP4JWauMhg0RpKYonoDDJvCzN8dtNYPkFTHz7F7SP5ClOLP3f6j81DpUh3Qp7EzLkyYLNWCCWD13yN%2BcEQoppT%2FWdiZOOobIhpaFvTVm91hp%2FSTtcy4pxST%2BBkv%2B%2Figok6ncix67DViLgsx3bA60cMijBQxeQWO9N5obo9OFoc1cDjc0hztCHWdimjD7VYUbrs5Wb19xaspG%2FXRKkkes%2BvFTOCPkVnETH0XQXSVE%2BW%2BZOVF0ugmwbqgUPgMJ36lMgGOqUBjCrAsy2oLX%2FLBZp6liWK%2FnjtoMo9bl0TYawSgGmDu9sD2y%2F5MbLR6aRJQvvaAweV1FQdOshPnv1%2FTH%2BY2iBRf0JGO8L8ism%2FHXg%2F%2BDw3oVzaTSvVtw%2FV6Pq2Z%2BcWlx%2BuppmPyvzL7eKyi9TNbIMW6DBqbJA5H94E3BX8fObQ1RdmglD5qZR5pLv%2Bp1hegPOO9FE6NdtxvaAa6Tto2xw5zphrelrT&X-Amz-Signature=448ebaf9c3b9bf6759772f5b91f661c721db3f7753350d8f73caeb86b4d902f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2JJ6FGJ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQD8V7%2BCRTlgPbJ%2BRG5R5aIT3munFRWNRotgQVKMOQC%2FzAIgYeLf2OrfoIHvHybR%2BoIxWRx7KYXl0VosC8aLYYgCpFUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFSNq9c47rdfFOnDhyrcA2S%2FMUXbQNSnqmc2lAPt7BhIliMx7AdJA7pZhCUaIV2DczHC5%2Fh6PIIAUloDq8sqSdDqXOAIfLKGxKifjbsq9uJ9N8k4iP0LsBoI6I3ObSvjlYwoujcTE3z%2FK6U5%2BJLjlPmZ%2FYHp%2Fv53bZOQtLqbwdvoy%2F12125BremBVI7WszmKzOEPXxUOF7pqSwoa3XJQ1ZCotV60HSl0nD6ZZfwALxYSr3CA8kt%2BCt%2BR0aIgOOukWyatfzEUlsXka06MAcPMgiXZJgpE%2FyMfewbqZt0MZCW%2Fcdz3yWxSoXCHi5PVwdrvJhP%2B3D62%2BI%2FQzpguhi%2BCkH4YJmxHX64sWocPFD94r5iP57qSDx6lxIjNFBr0ZnNBi9Ry49sb63HlpgyMnooB%2BoLS1Px%2BGFPb0KhV2UDo1ke0m2Uue1cMKwVcxaB%2FG32v7VFpGFuLFW9YA0p%2B7HuAIsCOPzYJBAwfyiBJeYcRfiicmw97J5qZC2XH9mIAxjKXD5tvBVODov3%2BnjUW9MYHP3ALxdGJ501GazLXZbrz0D25UpNizfyFNyvYZjZxzxAbZhJunxJHTtlMJr%2BUPK0TwWnNlkcysXHDzFxlsVvf%2FaR7bx7eMZsO7HU4EtKcIRmIZqeeCYl%2B2Tzqqk4oML6BlcgGOqUB4h%2BmpIuiOZlz0Uf3laWpmgME7sCZrA9R3YzgyeYhzyYVBDpBPJKEOQTf0kGEIt3Hyr1NDmB4iqdG%2Blzmi8lPdCFhBA6skzHVJuI7RWLWoQOHBPNzw5bOwYqSW56uBkWZzK0LdssUAC8YU8A7U%2FnPkH4XIefz2yMYCI4fMJNwXlJ7nhS6o4Vi5IOk%2BAHh4QOn6ZpyJg0ip9BmAnaW%2F2UaLY%2FLN2Nf&X-Amz-Signature=24c9ec88327752cbcda929e8920d27b71058faa4ab6d07c65872b4fc63cbd28b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LMMTN2Y%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIFOYuCGbqiianjlmS3uWdnKaQcynNhuJbzSJ5Z%2B%2F3oQEAiEA5HKNKG72Z51U7qK5hb3sssbapGIKgsTVQjZfsPEhyP4q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDIkSh76Rr6vfixJm3SrcAx9havhKAcQmnWXNOjbgO1x%2FpL2kQx1w0IBQwPmPJV%2BXKxDxUWp1z2X2Ml0SYOyUO973yKh8dbOU9lhlwxWgzxQqgrGz50rsf0FV5842CXSD6RWoc8owgagXLHwBa2BBgbJgS4Va5%2FFiGPL4NGsHujUWh6rqyV7aeghp3NNgtcYWai9SPUp%2BIQ4vWeAYFtWFbob6wxkA2yOVcPXrZ5VCiMrPoremqHTJbpx%2BRCOIj7XZQvBIoRmE%2BHIHkO7N9wg5WY9Al6tE2wI66Ia8Eb4WB771lkN2YP%2FnAlj2WY1NLf7qiRmeFeEyLXcKGAT4MMXJFB27bBd%2FtMfMyPFH6auJSc6jWO1BivXaEvauorxNcTEmjd2JyVKZDnLIntUCSOar4rGlBEXQrH64CHegjDuN7Jp01Z4hgGYKAv90Hi3OeAlv23RlpQZynQxv%2BfODvizza3CXpTt9KUuNAnCWeRhz8uNPF8BSe5TPcu7qvu3gnWPBIk%2BtVHr8wJJ%2BupXyQ0hLb2n8lddh8OJ9bvL%2FCa16XMtrocEcmqoB7FC1Vm4j%2BTXbD8M0LL6kGB5n2rsfowP8Mpjppa2Bw6y4Y8KoLmoKk3RqbjwXuJilO0UKeExh%2B8bLnVh1WfYULCYnXFJXMPP6lMgGOqUBMAT16LSf3kD%2B7b7bRMCWApmJ8hWl7LLp8cbYP8Esf%2Fb5E7FqSRIyX4oA4iCiCTTu9e16vWIgd8r814WCfAdgxhoixbv7nw%2BUaCYiL8twDKmEbtC8Fc58M%2FaK2C1PEmhbumR7Vx3TE5SQEEc4OSTXph5cST1iPMPJzH72%2BgcgAkHolkjr6SOgg22vLH0AzUbkboPPmUiW%2BwpBcjaANmXiu1yGGClo&X-Amz-Signature=eb183ddf5860588f0b8addaf79d838b8085a4ae88efa00f2498e30d384577f1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M337XSE%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCNbRSW389nUwIaLQzLH%2BVBRCJBYbqNw4fYRfOYhzDaJAIhANQ7EiZIXR68zS%2FIu53yky7QP8GxJMoFIkpjNt5HExfWKv8DCCAQABoMNjM3NDIzMTgzODA1IgyKLrIT0t7rzWgG9ekq3AOPKdDOdZEiicYMw93CEH5MldzDZ7ZpTZPbjQKra3MbFSKyShmX6szYjqcxVi5MSHUgFSWYRy2%2FNhFoKMNzN25qaB8E4OuKX0aEP5RKUD5Z43%2BQmMZyCl25Ayrc2zCnK5IApHyyvxD9CIyjMSKtypUMCtwYBUP8Zlq07fYHEH11rXtOr5hR6r1CdK%2Fex6DrpHBOGXCSZOa%2B8gcyZoEHqq0o1Ey72UuVwZ10Sr6O%2BMe2JTfJz9tGgO4jSWflw2auMCjp3NxuyTmaNyyjvpqEUBYthHH%2BdF2Hi4yK%2F3l2Z8Q%2BH4yZRDEZ6YDc2Nk9%2BfgFGIX%2BliCTQzdNiT976n6VPOvs%2B1sKyV84QNpxwaWhQW3Qj%2Fc0RQy9NmiMEm%2BZcSaRy5O2BQxRoa0MC3LRA%2B%2B86ZsbWRdO60LtdLmADG5G6k02tdrLHgjhtEruhLILLu7QjJH%2FWJEPY7opY765lL%2BKFTkpyjOKypax0MMZkrgBZr%2B5%2B4Gyv07d2wh5gInT%2BYpBYXeMfnARWSkrJyInOG2RbLggzuoY7Ej9AIAbcWomBv4P50exaIe%2B%2BuRgAjuYp8tauJXw%2BGSeGW6hTyNPYG%2FbJg%2B22IuYJurcvZqzof%2FFJL4wiMWzTHiYsQpiN5UV%2FzD8%2BpTIBjqkAZnBFlJGCxKwRKI%2BGlpmqY1f4eopSUrNzm4PfN%2Fpw7dHkIwJm9%2BrwimMAnpJU%2FXPWr2H%2ButN1V1HN89ta4fqye4R65dyTtbsGcoxQJtVgJJ%2FyNZnuL9evSXaTYM5YT2YusDW1uW56hgzS0TgHr5GubPW8oLMj3xLkTuTutCXn7LQNEIzWDKdHRnyKH%2BPXmW6S6BgzWqSnpKwX7lWGGxPOlhpICeA&X-Amz-Signature=f7ce56aa3fc6d7b921c1f2baa97efe09b8d6d69355f2b0552ab138b9b6726003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YPVGFS2%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAukh9%2B%2FXKgeuT%2B6dzDz8aDTjQlaXwpc9RdoXTaGcJ8AAiBhSh5YkkbFgRk%2FMFnan2a2PViFrGpB4i3%2BHtSAGPpNDSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMGLFcQrk92hRdtaYYKtwDqcC%2BtHU1Q6NYr8%2Fiiu9S6GvVazkGIYcabBe0ja%2BA1Vh52AkS%2B1tDGcYMuaHloJgMBL%2FECBW75l35U41z7K4r%2FeWyLDG1l4KrcBlQT0SoNfZEjJIIBwgiZdLq9GfhZr%2Fs%2BWYF6nZqTbvn5n0ydfinAgr1P4HVAqOKXmKoXY94%2BFgzz1mmurVU4vwH3GCEJfQFSmZbBHFf6cMCAZrShmhTfGA10J9aM53Iqfw88B21XtYj%2BBPyLp82g1%2B6PMDbDK8QxMozhI4lLyjRvEtLphJoea%2FI4PMMBBP5SIBZWY9VVChBnqTu5Q44OFmVCanuOwNqTGkUyJ6h2h9JV0LR0wtAfbm7kX977iSt8V4m3eZ2ObWnl%2BLhEgW9z96riPFgxQ4dM2YcNVVRMxCeEt84fyR6618acdYPSC2AugjWv%2FEQ43k8jfn5AO11uBAfWkyLeTy10D4N6aD57JJYEER7oObJa350zG7r4D5J7vYgPsVrKtt7X7p3awv3w5qJd%2B9LogGLtYEwa4oO3UJN98TxIgRwyCO%2FSOhW8UBBtB83qwYU2NDAv%2BT07l6zu9YJ4fI3gaIGo0XWY%2BDWtvOqt6a1e06DgtJi7AjV1WmoHd9vVlKA2VwPNZBRB7WYt4jwXy0w4%2FqUyAY6pgGT%2Ft71KsDaYgnbOjk8lCtRPylnQl7rEmrLkza%2BpWiLzwssG0nlf8QaQWlwYnRyOhB3P6EaPPROZA6k%2BADWRl16b6TqRR2D5KgXTWQsDi1oonrrFLUROs0ZhaJZ4X30Ict1lffzcF92kppUYP%2BCtz8HFqiL3%2FH3S5z6H9%2BzwOltS4LXZVEI7Y7nxZB4hGjLoaPDxkkQfODHwSkhjxCj8nLVSl6qHVir&X-Amz-Signature=e5b03ab6c84d77d3393b2994abd1862bc6b1f6ab65954dc50ed00ed90959c50d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2JJ6FGJ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQD8V7%2BCRTlgPbJ%2BRG5R5aIT3munFRWNRotgQVKMOQC%2FzAIgYeLf2OrfoIHvHybR%2BoIxWRx7KYXl0VosC8aLYYgCpFUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFSNq9c47rdfFOnDhyrcA2S%2FMUXbQNSnqmc2lAPt7BhIliMx7AdJA7pZhCUaIV2DczHC5%2Fh6PIIAUloDq8sqSdDqXOAIfLKGxKifjbsq9uJ9N8k4iP0LsBoI6I3ObSvjlYwoujcTE3z%2FK6U5%2BJLjlPmZ%2FYHp%2Fv53bZOQtLqbwdvoy%2F12125BremBVI7WszmKzOEPXxUOF7pqSwoa3XJQ1ZCotV60HSl0nD6ZZfwALxYSr3CA8kt%2BCt%2BR0aIgOOukWyatfzEUlsXka06MAcPMgiXZJgpE%2FyMfewbqZt0MZCW%2Fcdz3yWxSoXCHi5PVwdrvJhP%2B3D62%2BI%2FQzpguhi%2BCkH4YJmxHX64sWocPFD94r5iP57qSDx6lxIjNFBr0ZnNBi9Ry49sb63HlpgyMnooB%2BoLS1Px%2BGFPb0KhV2UDo1ke0m2Uue1cMKwVcxaB%2FG32v7VFpGFuLFW9YA0p%2B7HuAIsCOPzYJBAwfyiBJeYcRfiicmw97J5qZC2XH9mIAxjKXD5tvBVODov3%2BnjUW9MYHP3ALxdGJ501GazLXZbrz0D25UpNizfyFNyvYZjZxzxAbZhJunxJHTtlMJr%2BUPK0TwWnNlkcysXHDzFxlsVvf%2FaR7bx7eMZsO7HU4EtKcIRmIZqeeCYl%2B2Tzqqk4oML6BlcgGOqUB4h%2BmpIuiOZlz0Uf3laWpmgME7sCZrA9R3YzgyeYhzyYVBDpBPJKEOQTf0kGEIt3Hyr1NDmB4iqdG%2Blzmi8lPdCFhBA6skzHVJuI7RWLWoQOHBPNzw5bOwYqSW56uBkWZzK0LdssUAC8YU8A7U%2FnPkH4XIefz2yMYCI4fMJNwXlJ7nhS6o4Vi5IOk%2BAHh4QOn6ZpyJg0ip9BmAnaW%2F2UaLY%2FLN2Nf&X-Amz-Signature=3fee233e6dfc84113690b437cc9ad96a3eb55fc8e23f255e1ddc0355a997dae5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2JJ6FGJ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQD8V7%2BCRTlgPbJ%2BRG5R5aIT3munFRWNRotgQVKMOQC%2FzAIgYeLf2OrfoIHvHybR%2BoIxWRx7KYXl0VosC8aLYYgCpFUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFSNq9c47rdfFOnDhyrcA2S%2FMUXbQNSnqmc2lAPt7BhIliMx7AdJA7pZhCUaIV2DczHC5%2Fh6PIIAUloDq8sqSdDqXOAIfLKGxKifjbsq9uJ9N8k4iP0LsBoI6I3ObSvjlYwoujcTE3z%2FK6U5%2BJLjlPmZ%2FYHp%2Fv53bZOQtLqbwdvoy%2F12125BremBVI7WszmKzOEPXxUOF7pqSwoa3XJQ1ZCotV60HSl0nD6ZZfwALxYSr3CA8kt%2BCt%2BR0aIgOOukWyatfzEUlsXka06MAcPMgiXZJgpE%2FyMfewbqZt0MZCW%2Fcdz3yWxSoXCHi5PVwdrvJhP%2B3D62%2BI%2FQzpguhi%2BCkH4YJmxHX64sWocPFD94r5iP57qSDx6lxIjNFBr0ZnNBi9Ry49sb63HlpgyMnooB%2BoLS1Px%2BGFPb0KhV2UDo1ke0m2Uue1cMKwVcxaB%2FG32v7VFpGFuLFW9YA0p%2B7HuAIsCOPzYJBAwfyiBJeYcRfiicmw97J5qZC2XH9mIAxjKXD5tvBVODov3%2BnjUW9MYHP3ALxdGJ501GazLXZbrz0D25UpNizfyFNyvYZjZxzxAbZhJunxJHTtlMJr%2BUPK0TwWnNlkcysXHDzFxlsVvf%2FaR7bx7eMZsO7HU4EtKcIRmIZqeeCYl%2B2Tzqqk4oML6BlcgGOqUB4h%2BmpIuiOZlz0Uf3laWpmgME7sCZrA9R3YzgyeYhzyYVBDpBPJKEOQTf0kGEIt3Hyr1NDmB4iqdG%2Blzmi8lPdCFhBA6skzHVJuI7RWLWoQOHBPNzw5bOwYqSW56uBkWZzK0LdssUAC8YU8A7U%2FnPkH4XIefz2yMYCI4fMJNwXlJ7nhS6o4Vi5IOk%2BAHh4QOn6ZpyJg0ip9BmAnaW%2F2UaLY%2FLN2Nf&X-Amz-Signature=17b85e3a0fe271658191cf467eb1f709a8439306425b9fddcfccfb60dc26336a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ZTOILQ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCXfLlza387UT7brMZOS%2BYwl5qP3FQR6WAQ1Ba4oTHP%2FwIhANILfu1Yhn9IVbgEIiZVFtEa0n1fYsticelqensTJoyZKv8DCCAQABoMNjM3NDIzMTgzODA1Igxxen5nLUI73Z8psCEq3APsjDmHFxba5w23OCZrgovpKmCVxwr501zbLvva9MHgzB9S8qM2fL1BKp5cy2cdnTGX2raAHxluamfrTcKnnQ8on%2B3%2FmYfGB%2BMHQ7VKCIdcL1vNPLeGrU9ibG3mkxeyD13gjBejAWuLBQPuy0SVoN3IxHD5qtyQtxOehZ1sKxrPTyMxHaPN5JQGmQPsz7rq0%2FMDHfPSfX2FZS%2FfFZeWsPC8YlJrU8n%2BauT4OzaZ9nX5fjkfQKeCei%2Bj8k%2BSiHdXrgdVvKCN%2FGLT96owFJ5F%2FPfQpaYLe2TWTeBa5GSlLj4qEBEKaXdn9m0SFoQzn9fYW60dmOsX8UvfJtQJLcYNcid1ovbCGx3Yx9x9%2FJipuYcXxt1YM6E0xb3eXF%2FVexpY3HTVlDCmJe7v8FHfg8nB9U7TwgPMX2b2Rw5veaj%2BCVXR9HgZfvKFwQLQScaS9I3buwdgQsoVTOWhthNiYngurhVSBiOHFLRfaR0%2BWFTE9UMNMiEndi1%2F4LsgkwFDaPKYYD0Hx4STWwSddWU2%2FJRWqyVLZK%2BgaDX%2Bb8xZ5SjrrXqna82M0hQX7MLuPj8eVTY3jfqNMveZXw%2Fv6VPEcslKSP39fPZhrVa2FGoNSQ66OrmDimTbzajRcOyzAZ0PkTDD%2BpTIBjqkAYedrlKrP9SlNJ8G1ac0hHsDB2WmbtD%2F2Zz5jKuWUfTWzfQqsrhGTbOi5QJw4PF%2Fik2bGeRSCdANnO12Eymnk5G%2BcphRjnetMOnZaS0NzuM%2Bm3k7Ua0afyEf5GO%2BYLkjDF%2F8GUQfQJXFjnSBIs3dUYL6We2xcwKuzJAbTJM5Ljrz%2BkgsKJN28a%2Fgihy8%2BdxpG0zCwFdRQ4C30HSevhWRJ0NkIs4c&X-Amz-Signature=1c31980a94228d4e4921952fd4289f73c5fc99e80d0306405ce64e44ccda5aa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ZTOILQ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCXfLlza387UT7brMZOS%2BYwl5qP3FQR6WAQ1Ba4oTHP%2FwIhANILfu1Yhn9IVbgEIiZVFtEa0n1fYsticelqensTJoyZKv8DCCAQABoMNjM3NDIzMTgzODA1Igxxen5nLUI73Z8psCEq3APsjDmHFxba5w23OCZrgovpKmCVxwr501zbLvva9MHgzB9S8qM2fL1BKp5cy2cdnTGX2raAHxluamfrTcKnnQ8on%2B3%2FmYfGB%2BMHQ7VKCIdcL1vNPLeGrU9ibG3mkxeyD13gjBejAWuLBQPuy0SVoN3IxHD5qtyQtxOehZ1sKxrPTyMxHaPN5JQGmQPsz7rq0%2FMDHfPSfX2FZS%2FfFZeWsPC8YlJrU8n%2BauT4OzaZ9nX5fjkfQKeCei%2Bj8k%2BSiHdXrgdVvKCN%2FGLT96owFJ5F%2FPfQpaYLe2TWTeBa5GSlLj4qEBEKaXdn9m0SFoQzn9fYW60dmOsX8UvfJtQJLcYNcid1ovbCGx3Yx9x9%2FJipuYcXxt1YM6E0xb3eXF%2FVexpY3HTVlDCmJe7v8FHfg8nB9U7TwgPMX2b2Rw5veaj%2BCVXR9HgZfvKFwQLQScaS9I3buwdgQsoVTOWhthNiYngurhVSBiOHFLRfaR0%2BWFTE9UMNMiEndi1%2F4LsgkwFDaPKYYD0Hx4STWwSddWU2%2FJRWqyVLZK%2BgaDX%2Bb8xZ5SjrrXqna82M0hQX7MLuPj8eVTY3jfqNMveZXw%2Fv6VPEcslKSP39fPZhrVa2FGoNSQ66OrmDimTbzajRcOyzAZ0PkTDD%2BpTIBjqkAYedrlKrP9SlNJ8G1ac0hHsDB2WmbtD%2F2Zz5jKuWUfTWzfQqsrhGTbOi5QJw4PF%2Fik2bGeRSCdANnO12Eymnk5G%2BcphRjnetMOnZaS0NzuM%2Bm3k7Ua0afyEf5GO%2BYLkjDF%2F8GUQfQJXFjnSBIs3dUYL6We2xcwKuzJAbTJM5Ljrz%2BkgsKJN28a%2Fgihy8%2BdxpG0zCwFdRQ4C30HSevhWRJ0NkIs4c&X-Amz-Signature=66bfad2122f475164e17846c88a476dc4e72250598eea34b103156e60fe20456&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ZTOILQ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCXfLlza387UT7brMZOS%2BYwl5qP3FQR6WAQ1Ba4oTHP%2FwIhANILfu1Yhn9IVbgEIiZVFtEa0n1fYsticelqensTJoyZKv8DCCAQABoMNjM3NDIzMTgzODA1Igxxen5nLUI73Z8psCEq3APsjDmHFxba5w23OCZrgovpKmCVxwr501zbLvva9MHgzB9S8qM2fL1BKp5cy2cdnTGX2raAHxluamfrTcKnnQ8on%2B3%2FmYfGB%2BMHQ7VKCIdcL1vNPLeGrU9ibG3mkxeyD13gjBejAWuLBQPuy0SVoN3IxHD5qtyQtxOehZ1sKxrPTyMxHaPN5JQGmQPsz7rq0%2FMDHfPSfX2FZS%2FfFZeWsPC8YlJrU8n%2BauT4OzaZ9nX5fjkfQKeCei%2Bj8k%2BSiHdXrgdVvKCN%2FGLT96owFJ5F%2FPfQpaYLe2TWTeBa5GSlLj4qEBEKaXdn9m0SFoQzn9fYW60dmOsX8UvfJtQJLcYNcid1ovbCGx3Yx9x9%2FJipuYcXxt1YM6E0xb3eXF%2FVexpY3HTVlDCmJe7v8FHfg8nB9U7TwgPMX2b2Rw5veaj%2BCVXR9HgZfvKFwQLQScaS9I3buwdgQsoVTOWhthNiYngurhVSBiOHFLRfaR0%2BWFTE9UMNMiEndi1%2F4LsgkwFDaPKYYD0Hx4STWwSddWU2%2FJRWqyVLZK%2BgaDX%2Bb8xZ5SjrrXqna82M0hQX7MLuPj8eVTY3jfqNMveZXw%2Fv6VPEcslKSP39fPZhrVa2FGoNSQ66OrmDimTbzajRcOyzAZ0PkTDD%2BpTIBjqkAYedrlKrP9SlNJ8G1ac0hHsDB2WmbtD%2F2Zz5jKuWUfTWzfQqsrhGTbOi5QJw4PF%2Fik2bGeRSCdANnO12Eymnk5G%2BcphRjnetMOnZaS0NzuM%2Bm3k7Ua0afyEf5GO%2BYLkjDF%2F8GUQfQJXFjnSBIs3dUYL6We2xcwKuzJAbTJM5Ljrz%2BkgsKJN28a%2Fgihy8%2BdxpG0zCwFdRQ4C30HSevhWRJ0NkIs4c&X-Amz-Signature=457f7cd9beb7b7d1d11461639cc7319d88d37790625c79fbc41950265da19882&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ZTOILQ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCXfLlza387UT7brMZOS%2BYwl5qP3FQR6WAQ1Ba4oTHP%2FwIhANILfu1Yhn9IVbgEIiZVFtEa0n1fYsticelqensTJoyZKv8DCCAQABoMNjM3NDIzMTgzODA1Igxxen5nLUI73Z8psCEq3APsjDmHFxba5w23OCZrgovpKmCVxwr501zbLvva9MHgzB9S8qM2fL1BKp5cy2cdnTGX2raAHxluamfrTcKnnQ8on%2B3%2FmYfGB%2BMHQ7VKCIdcL1vNPLeGrU9ibG3mkxeyD13gjBejAWuLBQPuy0SVoN3IxHD5qtyQtxOehZ1sKxrPTyMxHaPN5JQGmQPsz7rq0%2FMDHfPSfX2FZS%2FfFZeWsPC8YlJrU8n%2BauT4OzaZ9nX5fjkfQKeCei%2Bj8k%2BSiHdXrgdVvKCN%2FGLT96owFJ5F%2FPfQpaYLe2TWTeBa5GSlLj4qEBEKaXdn9m0SFoQzn9fYW60dmOsX8UvfJtQJLcYNcid1ovbCGx3Yx9x9%2FJipuYcXxt1YM6E0xb3eXF%2FVexpY3HTVlDCmJe7v8FHfg8nB9U7TwgPMX2b2Rw5veaj%2BCVXR9HgZfvKFwQLQScaS9I3buwdgQsoVTOWhthNiYngurhVSBiOHFLRfaR0%2BWFTE9UMNMiEndi1%2F4LsgkwFDaPKYYD0Hx4STWwSddWU2%2FJRWqyVLZK%2BgaDX%2Bb8xZ5SjrrXqna82M0hQX7MLuPj8eVTY3jfqNMveZXw%2Fv6VPEcslKSP39fPZhrVa2FGoNSQ66OrmDimTbzajRcOyzAZ0PkTDD%2BpTIBjqkAYedrlKrP9SlNJ8G1ac0hHsDB2WmbtD%2F2Zz5jKuWUfTWzfQqsrhGTbOi5QJw4PF%2Fik2bGeRSCdANnO12Eymnk5G%2BcphRjnetMOnZaS0NzuM%2Bm3k7Ua0afyEf5GO%2BYLkjDF%2F8GUQfQJXFjnSBIs3dUYL6We2xcwKuzJAbTJM5Ljrz%2BkgsKJN28a%2Fgihy8%2BdxpG0zCwFdRQ4C30HSevhWRJ0NkIs4c&X-Amz-Signature=ddd6e8d431df66c773088cfe8e61b59d0113afb4cfa27ecd8ea89d2c41842553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYCCCLQE%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGCEKxuzDUwV0sPuSXZCDWUvWpp0B3T3K91zqu9ht0DVAiEAz5mEPhWGOH7WjnclFN%2BELQFAA0HWetaZn2f01ZYTE6Qq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDKQrVoSB%2FCVmesJJkyrcA0wyKTPV8Lx7thnO79mgQOY%2BK2FbJ5kub49sNzPJ1TQnCLBzsfjhAgD1qD5Hyc6ZkEQCPFjV5RZ6qgXpi6io0GqeR8B512BM3iNTt5YKjR4oTTy4ZcoiDyApVOa130zWUHJY%2BPCqLz38jXRDjOvnRdTSQlf5uErI75qmkVvKxeHXPMXX61GGdPkoiZAhhScnlPAkxfOVYSc5aLjgcc%2FDGjrSBhRnjxuxYxLhZ%2B1VI7XJSzGKvMyXw7A0jD%2BzkM1hJC5ysMqJncJJPT2LvaMpBkmesS%2BtkG%2FKtMXywgCPUMjnUIIY6HPXGGyTUdjeY84UAJyaVqiRWfdl2wZOKCY%2FCpSzbOlBWh9grHztCUXMxOz3ZSh974BJm7sKBJao6PgPIe0SgDaE7rA2eOqTB9TCpiB5LqEReqCHS77s6ODrVR1wu9OSNf1f0C83ekUx2kQcV7%2FwYfYsgo5ssHjVn%2BKvyzSSDchbs1VZ5sE%2FCwdphJqJN0dFtzqeTeeBXWSw8I3Ji3LqAR8m2Q3RFmAod6o5cZOLOmj6p5YYg3d7%2FO4E0sfTOu1vbJSRTaj%2FbsZyrGoKZlwPTWzvHwFMKAvoGwFwWGXfs45MbZo%2BSPT5AC2TkUetIaO8lTOnagEBAZTyMO36lMgGOqUBlg%2FCqzHSIPeVRBSLElzLfMtcnBICJCQT%2F1e7Yh1n3l%2F0cr1sG74L%2F6Rlls5KNZPZ4cFdpLd2AoxsruJyDow5bqbyjH1fXwG1goIv0NqPSYEDXVleIiXFmDE0OLrkoHHyGHxEHByoV8W0%2Fo80qQpQXYqk%2BQjVzaI%2FVarAYQKJHqHmSWZSfUZVG6XpLIs%2BWrb4%2B3TT8J%2FyyP5DEBQzKBaWtU1KDUVv&X-Amz-Signature=03f5cf6f50dce41d8766fe9b371abb1d11fd30a19f4f71a3191d510dd845d9aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ZTOILQ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCXfLlza387UT7brMZOS%2BYwl5qP3FQR6WAQ1Ba4oTHP%2FwIhANILfu1Yhn9IVbgEIiZVFtEa0n1fYsticelqensTJoyZKv8DCCAQABoMNjM3NDIzMTgzODA1Igxxen5nLUI73Z8psCEq3APsjDmHFxba5w23OCZrgovpKmCVxwr501zbLvva9MHgzB9S8qM2fL1BKp5cy2cdnTGX2raAHxluamfrTcKnnQ8on%2B3%2FmYfGB%2BMHQ7VKCIdcL1vNPLeGrU9ibG3mkxeyD13gjBejAWuLBQPuy0SVoN3IxHD5qtyQtxOehZ1sKxrPTyMxHaPN5JQGmQPsz7rq0%2FMDHfPSfX2FZS%2FfFZeWsPC8YlJrU8n%2BauT4OzaZ9nX5fjkfQKeCei%2Bj8k%2BSiHdXrgdVvKCN%2FGLT96owFJ5F%2FPfQpaYLe2TWTeBa5GSlLj4qEBEKaXdn9m0SFoQzn9fYW60dmOsX8UvfJtQJLcYNcid1ovbCGx3Yx9x9%2FJipuYcXxt1YM6E0xb3eXF%2FVexpY3HTVlDCmJe7v8FHfg8nB9U7TwgPMX2b2Rw5veaj%2BCVXR9HgZfvKFwQLQScaS9I3buwdgQsoVTOWhthNiYngurhVSBiOHFLRfaR0%2BWFTE9UMNMiEndi1%2F4LsgkwFDaPKYYD0Hx4STWwSddWU2%2FJRWqyVLZK%2BgaDX%2Bb8xZ5SjrrXqna82M0hQX7MLuPj8eVTY3jfqNMveZXw%2Fv6VPEcslKSP39fPZhrVa2FGoNSQ66OrmDimTbzajRcOyzAZ0PkTDD%2BpTIBjqkAYedrlKrP9SlNJ8G1ac0hHsDB2WmbtD%2F2Zz5jKuWUfTWzfQqsrhGTbOi5QJw4PF%2Fik2bGeRSCdANnO12Eymnk5G%2BcphRjnetMOnZaS0NzuM%2Bm3k7Ua0afyEf5GO%2BYLkjDF%2F8GUQfQJXFjnSBIs3dUYL6We2xcwKuzJAbTJM5Ljrz%2BkgsKJN28a%2Fgihy8%2BdxpG0zCwFdRQ4C30HSevhWRJ0NkIs4c&X-Amz-Signature=26de81b8c0139c943e01dacfefbda10e1ebbb1f2f7c7c8879482d5e02be03adf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ZTOILQ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCXfLlza387UT7brMZOS%2BYwl5qP3FQR6WAQ1Ba4oTHP%2FwIhANILfu1Yhn9IVbgEIiZVFtEa0n1fYsticelqensTJoyZKv8DCCAQABoMNjM3NDIzMTgzODA1Igxxen5nLUI73Z8psCEq3APsjDmHFxba5w23OCZrgovpKmCVxwr501zbLvva9MHgzB9S8qM2fL1BKp5cy2cdnTGX2raAHxluamfrTcKnnQ8on%2B3%2FmYfGB%2BMHQ7VKCIdcL1vNPLeGrU9ibG3mkxeyD13gjBejAWuLBQPuy0SVoN3IxHD5qtyQtxOehZ1sKxrPTyMxHaPN5JQGmQPsz7rq0%2FMDHfPSfX2FZS%2FfFZeWsPC8YlJrU8n%2BauT4OzaZ9nX5fjkfQKeCei%2Bj8k%2BSiHdXrgdVvKCN%2FGLT96owFJ5F%2FPfQpaYLe2TWTeBa5GSlLj4qEBEKaXdn9m0SFoQzn9fYW60dmOsX8UvfJtQJLcYNcid1ovbCGx3Yx9x9%2FJipuYcXxt1YM6E0xb3eXF%2FVexpY3HTVlDCmJe7v8FHfg8nB9U7TwgPMX2b2Rw5veaj%2BCVXR9HgZfvKFwQLQScaS9I3buwdgQsoVTOWhthNiYngurhVSBiOHFLRfaR0%2BWFTE9UMNMiEndi1%2F4LsgkwFDaPKYYD0Hx4STWwSddWU2%2FJRWqyVLZK%2BgaDX%2Bb8xZ5SjrrXqna82M0hQX7MLuPj8eVTY3jfqNMveZXw%2Fv6VPEcslKSP39fPZhrVa2FGoNSQ66OrmDimTbzajRcOyzAZ0PkTDD%2BpTIBjqkAYedrlKrP9SlNJ8G1ac0hHsDB2WmbtD%2F2Zz5jKuWUfTWzfQqsrhGTbOi5QJw4PF%2Fik2bGeRSCdANnO12Eymnk5G%2BcphRjnetMOnZaS0NzuM%2Bm3k7Ua0afyEf5GO%2BYLkjDF%2F8GUQfQJXFjnSBIs3dUYL6We2xcwKuzJAbTJM5Ljrz%2BkgsKJN28a%2Fgihy8%2BdxpG0zCwFdRQ4C30HSevhWRJ0NkIs4c&X-Amz-Signature=9f925d91092f8c9791109348d8aff720862e68697d53d9f52f42d905cfb61cab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ZTOILQ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCXfLlza387UT7brMZOS%2BYwl5qP3FQR6WAQ1Ba4oTHP%2FwIhANILfu1Yhn9IVbgEIiZVFtEa0n1fYsticelqensTJoyZKv8DCCAQABoMNjM3NDIzMTgzODA1Igxxen5nLUI73Z8psCEq3APsjDmHFxba5w23OCZrgovpKmCVxwr501zbLvva9MHgzB9S8qM2fL1BKp5cy2cdnTGX2raAHxluamfrTcKnnQ8on%2B3%2FmYfGB%2BMHQ7VKCIdcL1vNPLeGrU9ibG3mkxeyD13gjBejAWuLBQPuy0SVoN3IxHD5qtyQtxOehZ1sKxrPTyMxHaPN5JQGmQPsz7rq0%2FMDHfPSfX2FZS%2FfFZeWsPC8YlJrU8n%2BauT4OzaZ9nX5fjkfQKeCei%2Bj8k%2BSiHdXrgdVvKCN%2FGLT96owFJ5F%2FPfQpaYLe2TWTeBa5GSlLj4qEBEKaXdn9m0SFoQzn9fYW60dmOsX8UvfJtQJLcYNcid1ovbCGx3Yx9x9%2FJipuYcXxt1YM6E0xb3eXF%2FVexpY3HTVlDCmJe7v8FHfg8nB9U7TwgPMX2b2Rw5veaj%2BCVXR9HgZfvKFwQLQScaS9I3buwdgQsoVTOWhthNiYngurhVSBiOHFLRfaR0%2BWFTE9UMNMiEndi1%2F4LsgkwFDaPKYYD0Hx4STWwSddWU2%2FJRWqyVLZK%2BgaDX%2Bb8xZ5SjrrXqna82M0hQX7MLuPj8eVTY3jfqNMveZXw%2Fv6VPEcslKSP39fPZhrVa2FGoNSQ66OrmDimTbzajRcOyzAZ0PkTDD%2BpTIBjqkAYedrlKrP9SlNJ8G1ac0hHsDB2WmbtD%2F2Zz5jKuWUfTWzfQqsrhGTbOi5QJw4PF%2Fik2bGeRSCdANnO12Eymnk5G%2BcphRjnetMOnZaS0NzuM%2Bm3k7Ua0afyEf5GO%2BYLkjDF%2F8GUQfQJXFjnSBIs3dUYL6We2xcwKuzJAbTJM5Ljrz%2BkgsKJN28a%2Fgihy8%2BdxpG0zCwFdRQ4C30HSevhWRJ0NkIs4c&X-Amz-Signature=4f5bd1baba2654ea7db94c58c50398f8536266458ef2f6aff12911a9f42934a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ZTOILQ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCXfLlza387UT7brMZOS%2BYwl5qP3FQR6WAQ1Ba4oTHP%2FwIhANILfu1Yhn9IVbgEIiZVFtEa0n1fYsticelqensTJoyZKv8DCCAQABoMNjM3NDIzMTgzODA1Igxxen5nLUI73Z8psCEq3APsjDmHFxba5w23OCZrgovpKmCVxwr501zbLvva9MHgzB9S8qM2fL1BKp5cy2cdnTGX2raAHxluamfrTcKnnQ8on%2B3%2FmYfGB%2BMHQ7VKCIdcL1vNPLeGrU9ibG3mkxeyD13gjBejAWuLBQPuy0SVoN3IxHD5qtyQtxOehZ1sKxrPTyMxHaPN5JQGmQPsz7rq0%2FMDHfPSfX2FZS%2FfFZeWsPC8YlJrU8n%2BauT4OzaZ9nX5fjkfQKeCei%2Bj8k%2BSiHdXrgdVvKCN%2FGLT96owFJ5F%2FPfQpaYLe2TWTeBa5GSlLj4qEBEKaXdn9m0SFoQzn9fYW60dmOsX8UvfJtQJLcYNcid1ovbCGx3Yx9x9%2FJipuYcXxt1YM6E0xb3eXF%2FVexpY3HTVlDCmJe7v8FHfg8nB9U7TwgPMX2b2Rw5veaj%2BCVXR9HgZfvKFwQLQScaS9I3buwdgQsoVTOWhthNiYngurhVSBiOHFLRfaR0%2BWFTE9UMNMiEndi1%2F4LsgkwFDaPKYYD0Hx4STWwSddWU2%2FJRWqyVLZK%2BgaDX%2Bb8xZ5SjrrXqna82M0hQX7MLuPj8eVTY3jfqNMveZXw%2Fv6VPEcslKSP39fPZhrVa2FGoNSQ66OrmDimTbzajRcOyzAZ0PkTDD%2BpTIBjqkAYedrlKrP9SlNJ8G1ac0hHsDB2WmbtD%2F2Zz5jKuWUfTWzfQqsrhGTbOi5QJw4PF%2Fik2bGeRSCdANnO12Eymnk5G%2BcphRjnetMOnZaS0NzuM%2Bm3k7Ua0afyEf5GO%2BYLkjDF%2F8GUQfQJXFjnSBIs3dUYL6We2xcwKuzJAbTJM5Ljrz%2BkgsKJN28a%2Fgihy8%2BdxpG0zCwFdRQ4C30HSevhWRJ0NkIs4c&X-Amz-Signature=28eeec4b5d58bd6aab5960198c0925645a5e50b7452292881af6d52ccd90a48a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ZTOILQ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCXfLlza387UT7brMZOS%2BYwl5qP3FQR6WAQ1Ba4oTHP%2FwIhANILfu1Yhn9IVbgEIiZVFtEa0n1fYsticelqensTJoyZKv8DCCAQABoMNjM3NDIzMTgzODA1Igxxen5nLUI73Z8psCEq3APsjDmHFxba5w23OCZrgovpKmCVxwr501zbLvva9MHgzB9S8qM2fL1BKp5cy2cdnTGX2raAHxluamfrTcKnnQ8on%2B3%2FmYfGB%2BMHQ7VKCIdcL1vNPLeGrU9ibG3mkxeyD13gjBejAWuLBQPuy0SVoN3IxHD5qtyQtxOehZ1sKxrPTyMxHaPN5JQGmQPsz7rq0%2FMDHfPSfX2FZS%2FfFZeWsPC8YlJrU8n%2BauT4OzaZ9nX5fjkfQKeCei%2Bj8k%2BSiHdXrgdVvKCN%2FGLT96owFJ5F%2FPfQpaYLe2TWTeBa5GSlLj4qEBEKaXdn9m0SFoQzn9fYW60dmOsX8UvfJtQJLcYNcid1ovbCGx3Yx9x9%2FJipuYcXxt1YM6E0xb3eXF%2FVexpY3HTVlDCmJe7v8FHfg8nB9U7TwgPMX2b2Rw5veaj%2BCVXR9HgZfvKFwQLQScaS9I3buwdgQsoVTOWhthNiYngurhVSBiOHFLRfaR0%2BWFTE9UMNMiEndi1%2F4LsgkwFDaPKYYD0Hx4STWwSddWU2%2FJRWqyVLZK%2BgaDX%2Bb8xZ5SjrrXqna82M0hQX7MLuPj8eVTY3jfqNMveZXw%2Fv6VPEcslKSP39fPZhrVa2FGoNSQ66OrmDimTbzajRcOyzAZ0PkTDD%2BpTIBjqkAYedrlKrP9SlNJ8G1ac0hHsDB2WmbtD%2F2Zz5jKuWUfTWzfQqsrhGTbOi5QJw4PF%2Fik2bGeRSCdANnO12Eymnk5G%2BcphRjnetMOnZaS0NzuM%2Bm3k7Ua0afyEf5GO%2BYLkjDF%2F8GUQfQJXFjnSBIs3dUYL6We2xcwKuzJAbTJM5Ljrz%2BkgsKJN28a%2Fgihy8%2BdxpG0zCwFdRQ4C30HSevhWRJ0NkIs4c&X-Amz-Signature=77a10f704577cb0cafedc9d37c3d2bf0c2e7434b62bf24f46356f93c9b3f6162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ZTOILQ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCXfLlza387UT7brMZOS%2BYwl5qP3FQR6WAQ1Ba4oTHP%2FwIhANILfu1Yhn9IVbgEIiZVFtEa0n1fYsticelqensTJoyZKv8DCCAQABoMNjM3NDIzMTgzODA1Igxxen5nLUI73Z8psCEq3APsjDmHFxba5w23OCZrgovpKmCVxwr501zbLvva9MHgzB9S8qM2fL1BKp5cy2cdnTGX2raAHxluamfrTcKnnQ8on%2B3%2FmYfGB%2BMHQ7VKCIdcL1vNPLeGrU9ibG3mkxeyD13gjBejAWuLBQPuy0SVoN3IxHD5qtyQtxOehZ1sKxrPTyMxHaPN5JQGmQPsz7rq0%2FMDHfPSfX2FZS%2FfFZeWsPC8YlJrU8n%2BauT4OzaZ9nX5fjkfQKeCei%2Bj8k%2BSiHdXrgdVvKCN%2FGLT96owFJ5F%2FPfQpaYLe2TWTeBa5GSlLj4qEBEKaXdn9m0SFoQzn9fYW60dmOsX8UvfJtQJLcYNcid1ovbCGx3Yx9x9%2FJipuYcXxt1YM6E0xb3eXF%2FVexpY3HTVlDCmJe7v8FHfg8nB9U7TwgPMX2b2Rw5veaj%2BCVXR9HgZfvKFwQLQScaS9I3buwdgQsoVTOWhthNiYngurhVSBiOHFLRfaR0%2BWFTE9UMNMiEndi1%2F4LsgkwFDaPKYYD0Hx4STWwSddWU2%2FJRWqyVLZK%2BgaDX%2Bb8xZ5SjrrXqna82M0hQX7MLuPj8eVTY3jfqNMveZXw%2Fv6VPEcslKSP39fPZhrVa2FGoNSQ66OrmDimTbzajRcOyzAZ0PkTDD%2BpTIBjqkAYedrlKrP9SlNJ8G1ac0hHsDB2WmbtD%2F2Zz5jKuWUfTWzfQqsrhGTbOi5QJw4PF%2Fik2bGeRSCdANnO12Eymnk5G%2BcphRjnetMOnZaS0NzuM%2Bm3k7Ua0afyEf5GO%2BYLkjDF%2F8GUQfQJXFjnSBIs3dUYL6We2xcwKuzJAbTJM5Ljrz%2BkgsKJN28a%2Fgihy8%2BdxpG0zCwFdRQ4C30HSevhWRJ0NkIs4c&X-Amz-Signature=6eeecb931028ee85b70551977f4a6f821cb9cd991aef73b6da367df2631c0e17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


