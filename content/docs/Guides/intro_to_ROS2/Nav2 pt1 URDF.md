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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NWBTNN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2FcmiN%2F2X3G6aqNG2KhU%2FgGBninE%2FViWDzmfXDkvLFOAiEAhUZMYWeQAjvhx9q%2BvYsQ8N8RqFQuyI%2BIDPn9BnWopbsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDTyP991MXNtEfR79CrcAwbtqtnadLsSnDwab%2BjiCMNoEfTG7kyC0AgzZttdlx1bxcb435A3v4QAJXQ3z13jDw2teVWDQeOxvPMeiMcfJpw3HNvakuxdkrizv%2BnWTPoH4pagHoW1B5pcrk55LcKNuG4zsNykcohgru%2Bc6AuuRwcFsQ5EL%2FEpODtKYWRNdFIW4ZAcMpR4TLQCcelAy6%2FDOYadPYXXTEdjYb9FxwDkZMA3TVWu5fG84MJ%2FiRckl54U7foFTKkEpRc1g4mcZQ3b3VGjPu4x8BFPU2Vlsv3c0N4PE%2F2X5DP6aEXTBUuj9gOpj0o%2BLpx4IspMnzR6bZrSzqRA3WogfomCyYpyHugStLQo0HVWcAK5UCpflJsWbDEJAU2VfvLcACaJRJ23Q84RYHYFoJgqW3qluTyM7BdxMkllJDmHl87VcWXbivm2bmluuzQKvr%2FwZJxwIBMXtXyIhdFBCt4q5jsebCUeuBSLDp5%2BS1grYejdPpBqK83mvyzpTLOqM%2FxuUEy3YSfAqdVFoEEmyR2qoEaORuTOmlP5UrdD86nKf9FMXC1f%2FuQ7cyfIxR7Z%2FqcuvxYdSMpl71GPxFJuSz38125kPgWjUDXV3jeqptYvNghC3TgbVcL8%2FIsCdYSJU3wO%2BpI%2B6g%2B0MK7Ow8QGOqUBjyfx4Lg0a%2BwN6RG06YfadNFEZIIPZ9xMvoaW7EB3IB74a%2BrFuTbDfIJPfMN1A4pvIW6JlQRgunQCPEC3OfZcVS2HZ82D%2BenZ1yhatdJhCtK4bT5aAM%2F%2F6G0MbNJvWth9YqbUe5%2FKv9jbQ8Wd4Hxl7C2Oyr3qYPzOkoYPLZRaD%2B9Foz%2Bde22tNawnbIYIbX%2B0EX%2B%2F7adYCLkCmm9AFFJyb22cBgYG&X-Amz-Signature=a6d8ccbfd1a261dea6ceba790049efd8566d39c03ab74a56766845328ec53dbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NWBTNN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2FcmiN%2F2X3G6aqNG2KhU%2FgGBninE%2FViWDzmfXDkvLFOAiEAhUZMYWeQAjvhx9q%2BvYsQ8N8RqFQuyI%2BIDPn9BnWopbsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDTyP991MXNtEfR79CrcAwbtqtnadLsSnDwab%2BjiCMNoEfTG7kyC0AgzZttdlx1bxcb435A3v4QAJXQ3z13jDw2teVWDQeOxvPMeiMcfJpw3HNvakuxdkrizv%2BnWTPoH4pagHoW1B5pcrk55LcKNuG4zsNykcohgru%2Bc6AuuRwcFsQ5EL%2FEpODtKYWRNdFIW4ZAcMpR4TLQCcelAy6%2FDOYadPYXXTEdjYb9FxwDkZMA3TVWu5fG84MJ%2FiRckl54U7foFTKkEpRc1g4mcZQ3b3VGjPu4x8BFPU2Vlsv3c0N4PE%2F2X5DP6aEXTBUuj9gOpj0o%2BLpx4IspMnzR6bZrSzqRA3WogfomCyYpyHugStLQo0HVWcAK5UCpflJsWbDEJAU2VfvLcACaJRJ23Q84RYHYFoJgqW3qluTyM7BdxMkllJDmHl87VcWXbivm2bmluuzQKvr%2FwZJxwIBMXtXyIhdFBCt4q5jsebCUeuBSLDp5%2BS1grYejdPpBqK83mvyzpTLOqM%2FxuUEy3YSfAqdVFoEEmyR2qoEaORuTOmlP5UrdD86nKf9FMXC1f%2FuQ7cyfIxR7Z%2FqcuvxYdSMpl71GPxFJuSz38125kPgWjUDXV3jeqptYvNghC3TgbVcL8%2FIsCdYSJU3wO%2BpI%2B6g%2B0MK7Ow8QGOqUBjyfx4Lg0a%2BwN6RG06YfadNFEZIIPZ9xMvoaW7EB3IB74a%2BrFuTbDfIJPfMN1A4pvIW6JlQRgunQCPEC3OfZcVS2HZ82D%2BenZ1yhatdJhCtK4bT5aAM%2F%2F6G0MbNJvWth9YqbUe5%2FKv9jbQ8Wd4Hxl7C2Oyr3qYPzOkoYPLZRaD%2B9Foz%2Bde22tNawnbIYIbX%2B0EX%2B%2F7adYCLkCmm9AFFJyb22cBgYG&X-Amz-Signature=e14fd73af5e83c071601fa789a1d79dcc2e655998fac4548fc524e0b6b5526b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NWBTNN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2FcmiN%2F2X3G6aqNG2KhU%2FgGBninE%2FViWDzmfXDkvLFOAiEAhUZMYWeQAjvhx9q%2BvYsQ8N8RqFQuyI%2BIDPn9BnWopbsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDTyP991MXNtEfR79CrcAwbtqtnadLsSnDwab%2BjiCMNoEfTG7kyC0AgzZttdlx1bxcb435A3v4QAJXQ3z13jDw2teVWDQeOxvPMeiMcfJpw3HNvakuxdkrizv%2BnWTPoH4pagHoW1B5pcrk55LcKNuG4zsNykcohgru%2Bc6AuuRwcFsQ5EL%2FEpODtKYWRNdFIW4ZAcMpR4TLQCcelAy6%2FDOYadPYXXTEdjYb9FxwDkZMA3TVWu5fG84MJ%2FiRckl54U7foFTKkEpRc1g4mcZQ3b3VGjPu4x8BFPU2Vlsv3c0N4PE%2F2X5DP6aEXTBUuj9gOpj0o%2BLpx4IspMnzR6bZrSzqRA3WogfomCyYpyHugStLQo0HVWcAK5UCpflJsWbDEJAU2VfvLcACaJRJ23Q84RYHYFoJgqW3qluTyM7BdxMkllJDmHl87VcWXbivm2bmluuzQKvr%2FwZJxwIBMXtXyIhdFBCt4q5jsebCUeuBSLDp5%2BS1grYejdPpBqK83mvyzpTLOqM%2FxuUEy3YSfAqdVFoEEmyR2qoEaORuTOmlP5UrdD86nKf9FMXC1f%2FuQ7cyfIxR7Z%2FqcuvxYdSMpl71GPxFJuSz38125kPgWjUDXV3jeqptYvNghC3TgbVcL8%2FIsCdYSJU3wO%2BpI%2B6g%2B0MK7Ow8QGOqUBjyfx4Lg0a%2BwN6RG06YfadNFEZIIPZ9xMvoaW7EB3IB74a%2BrFuTbDfIJPfMN1A4pvIW6JlQRgunQCPEC3OfZcVS2HZ82D%2BenZ1yhatdJhCtK4bT5aAM%2F%2F6G0MbNJvWth9YqbUe5%2FKv9jbQ8Wd4Hxl7C2Oyr3qYPzOkoYPLZRaD%2B9Foz%2Bde22tNawnbIYIbX%2B0EX%2B%2F7adYCLkCmm9AFFJyb22cBgYG&X-Amz-Signature=ebe8f5eaad76af271472265b7a34ba4a2dca9e53b38d143262c7c0ff4c0566e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NWBTNN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2FcmiN%2F2X3G6aqNG2KhU%2FgGBninE%2FViWDzmfXDkvLFOAiEAhUZMYWeQAjvhx9q%2BvYsQ8N8RqFQuyI%2BIDPn9BnWopbsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDTyP991MXNtEfR79CrcAwbtqtnadLsSnDwab%2BjiCMNoEfTG7kyC0AgzZttdlx1bxcb435A3v4QAJXQ3z13jDw2teVWDQeOxvPMeiMcfJpw3HNvakuxdkrizv%2BnWTPoH4pagHoW1B5pcrk55LcKNuG4zsNykcohgru%2Bc6AuuRwcFsQ5EL%2FEpODtKYWRNdFIW4ZAcMpR4TLQCcelAy6%2FDOYadPYXXTEdjYb9FxwDkZMA3TVWu5fG84MJ%2FiRckl54U7foFTKkEpRc1g4mcZQ3b3VGjPu4x8BFPU2Vlsv3c0N4PE%2F2X5DP6aEXTBUuj9gOpj0o%2BLpx4IspMnzR6bZrSzqRA3WogfomCyYpyHugStLQo0HVWcAK5UCpflJsWbDEJAU2VfvLcACaJRJ23Q84RYHYFoJgqW3qluTyM7BdxMkllJDmHl87VcWXbivm2bmluuzQKvr%2FwZJxwIBMXtXyIhdFBCt4q5jsebCUeuBSLDp5%2BS1grYejdPpBqK83mvyzpTLOqM%2FxuUEy3YSfAqdVFoEEmyR2qoEaORuTOmlP5UrdD86nKf9FMXC1f%2FuQ7cyfIxR7Z%2FqcuvxYdSMpl71GPxFJuSz38125kPgWjUDXV3jeqptYvNghC3TgbVcL8%2FIsCdYSJU3wO%2BpI%2B6g%2B0MK7Ow8QGOqUBjyfx4Lg0a%2BwN6RG06YfadNFEZIIPZ9xMvoaW7EB3IB74a%2BrFuTbDfIJPfMN1A4pvIW6JlQRgunQCPEC3OfZcVS2HZ82D%2BenZ1yhatdJhCtK4bT5aAM%2F%2F6G0MbNJvWth9YqbUe5%2FKv9jbQ8Wd4Hxl7C2Oyr3qYPzOkoYPLZRaD%2B9Foz%2Bde22tNawnbIYIbX%2B0EX%2B%2F7adYCLkCmm9AFFJyb22cBgYG&X-Amz-Signature=59725ea5addd67b90b7cbf22c2481f8ea8495649074c765e7d4929dfea3efe48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NWBTNN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2FcmiN%2F2X3G6aqNG2KhU%2FgGBninE%2FViWDzmfXDkvLFOAiEAhUZMYWeQAjvhx9q%2BvYsQ8N8RqFQuyI%2BIDPn9BnWopbsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDTyP991MXNtEfR79CrcAwbtqtnadLsSnDwab%2BjiCMNoEfTG7kyC0AgzZttdlx1bxcb435A3v4QAJXQ3z13jDw2teVWDQeOxvPMeiMcfJpw3HNvakuxdkrizv%2BnWTPoH4pagHoW1B5pcrk55LcKNuG4zsNykcohgru%2Bc6AuuRwcFsQ5EL%2FEpODtKYWRNdFIW4ZAcMpR4TLQCcelAy6%2FDOYadPYXXTEdjYb9FxwDkZMA3TVWu5fG84MJ%2FiRckl54U7foFTKkEpRc1g4mcZQ3b3VGjPu4x8BFPU2Vlsv3c0N4PE%2F2X5DP6aEXTBUuj9gOpj0o%2BLpx4IspMnzR6bZrSzqRA3WogfomCyYpyHugStLQo0HVWcAK5UCpflJsWbDEJAU2VfvLcACaJRJ23Q84RYHYFoJgqW3qluTyM7BdxMkllJDmHl87VcWXbivm2bmluuzQKvr%2FwZJxwIBMXtXyIhdFBCt4q5jsebCUeuBSLDp5%2BS1grYejdPpBqK83mvyzpTLOqM%2FxuUEy3YSfAqdVFoEEmyR2qoEaORuTOmlP5UrdD86nKf9FMXC1f%2FuQ7cyfIxR7Z%2FqcuvxYdSMpl71GPxFJuSz38125kPgWjUDXV3jeqptYvNghC3TgbVcL8%2FIsCdYSJU3wO%2BpI%2B6g%2B0MK7Ow8QGOqUBjyfx4Lg0a%2BwN6RG06YfadNFEZIIPZ9xMvoaW7EB3IB74a%2BrFuTbDfIJPfMN1A4pvIW6JlQRgunQCPEC3OfZcVS2HZ82D%2BenZ1yhatdJhCtK4bT5aAM%2F%2F6G0MbNJvWth9YqbUe5%2FKv9jbQ8Wd4Hxl7C2Oyr3qYPzOkoYPLZRaD%2B9Foz%2Bde22tNawnbIYIbX%2B0EX%2B%2F7adYCLkCmm9AFFJyb22cBgYG&X-Amz-Signature=3aff7d12ed7adffba2040da954caab88d4aff1f4ff084ee7e94dd4be69515ea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NWBTNN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2FcmiN%2F2X3G6aqNG2KhU%2FgGBninE%2FViWDzmfXDkvLFOAiEAhUZMYWeQAjvhx9q%2BvYsQ8N8RqFQuyI%2BIDPn9BnWopbsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDTyP991MXNtEfR79CrcAwbtqtnadLsSnDwab%2BjiCMNoEfTG7kyC0AgzZttdlx1bxcb435A3v4QAJXQ3z13jDw2teVWDQeOxvPMeiMcfJpw3HNvakuxdkrizv%2BnWTPoH4pagHoW1B5pcrk55LcKNuG4zsNykcohgru%2Bc6AuuRwcFsQ5EL%2FEpODtKYWRNdFIW4ZAcMpR4TLQCcelAy6%2FDOYadPYXXTEdjYb9FxwDkZMA3TVWu5fG84MJ%2FiRckl54U7foFTKkEpRc1g4mcZQ3b3VGjPu4x8BFPU2Vlsv3c0N4PE%2F2X5DP6aEXTBUuj9gOpj0o%2BLpx4IspMnzR6bZrSzqRA3WogfomCyYpyHugStLQo0HVWcAK5UCpflJsWbDEJAU2VfvLcACaJRJ23Q84RYHYFoJgqW3qluTyM7BdxMkllJDmHl87VcWXbivm2bmluuzQKvr%2FwZJxwIBMXtXyIhdFBCt4q5jsebCUeuBSLDp5%2BS1grYejdPpBqK83mvyzpTLOqM%2FxuUEy3YSfAqdVFoEEmyR2qoEaORuTOmlP5UrdD86nKf9FMXC1f%2FuQ7cyfIxR7Z%2FqcuvxYdSMpl71GPxFJuSz38125kPgWjUDXV3jeqptYvNghC3TgbVcL8%2FIsCdYSJU3wO%2BpI%2B6g%2B0MK7Ow8QGOqUBjyfx4Lg0a%2BwN6RG06YfadNFEZIIPZ9xMvoaW7EB3IB74a%2BrFuTbDfIJPfMN1A4pvIW6JlQRgunQCPEC3OfZcVS2HZ82D%2BenZ1yhatdJhCtK4bT5aAM%2F%2F6G0MbNJvWth9YqbUe5%2FKv9jbQ8Wd4Hxl7C2Oyr3qYPzOkoYPLZRaD%2B9Foz%2Bde22tNawnbIYIbX%2B0EX%2B%2F7adYCLkCmm9AFFJyb22cBgYG&X-Amz-Signature=6e44898584db9ead12c16d2b1739f21793c742c97cc5119ed9456c4d13fcbff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NWBTNN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2FcmiN%2F2X3G6aqNG2KhU%2FgGBninE%2FViWDzmfXDkvLFOAiEAhUZMYWeQAjvhx9q%2BvYsQ8N8RqFQuyI%2BIDPn9BnWopbsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDTyP991MXNtEfR79CrcAwbtqtnadLsSnDwab%2BjiCMNoEfTG7kyC0AgzZttdlx1bxcb435A3v4QAJXQ3z13jDw2teVWDQeOxvPMeiMcfJpw3HNvakuxdkrizv%2BnWTPoH4pagHoW1B5pcrk55LcKNuG4zsNykcohgru%2Bc6AuuRwcFsQ5EL%2FEpODtKYWRNdFIW4ZAcMpR4TLQCcelAy6%2FDOYadPYXXTEdjYb9FxwDkZMA3TVWu5fG84MJ%2FiRckl54U7foFTKkEpRc1g4mcZQ3b3VGjPu4x8BFPU2Vlsv3c0N4PE%2F2X5DP6aEXTBUuj9gOpj0o%2BLpx4IspMnzR6bZrSzqRA3WogfomCyYpyHugStLQo0HVWcAK5UCpflJsWbDEJAU2VfvLcACaJRJ23Q84RYHYFoJgqW3qluTyM7BdxMkllJDmHl87VcWXbivm2bmluuzQKvr%2FwZJxwIBMXtXyIhdFBCt4q5jsebCUeuBSLDp5%2BS1grYejdPpBqK83mvyzpTLOqM%2FxuUEy3YSfAqdVFoEEmyR2qoEaORuTOmlP5UrdD86nKf9FMXC1f%2FuQ7cyfIxR7Z%2FqcuvxYdSMpl71GPxFJuSz38125kPgWjUDXV3jeqptYvNghC3TgbVcL8%2FIsCdYSJU3wO%2BpI%2B6g%2B0MK7Ow8QGOqUBjyfx4Lg0a%2BwN6RG06YfadNFEZIIPZ9xMvoaW7EB3IB74a%2BrFuTbDfIJPfMN1A4pvIW6JlQRgunQCPEC3OfZcVS2HZ82D%2BenZ1yhatdJhCtK4bT5aAM%2F%2F6G0MbNJvWth9YqbUe5%2FKv9jbQ8Wd4Hxl7C2Oyr3qYPzOkoYPLZRaD%2B9Foz%2Bde22tNawnbIYIbX%2B0EX%2B%2F7adYCLkCmm9AFFJyb22cBgYG&X-Amz-Signature=f4c3197f92b29da1790c77f10c31554ea8d8989df04fd055cfa14c0b4c8415e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NWBTNN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2FcmiN%2F2X3G6aqNG2KhU%2FgGBninE%2FViWDzmfXDkvLFOAiEAhUZMYWeQAjvhx9q%2BvYsQ8N8RqFQuyI%2BIDPn9BnWopbsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDTyP991MXNtEfR79CrcAwbtqtnadLsSnDwab%2BjiCMNoEfTG7kyC0AgzZttdlx1bxcb435A3v4QAJXQ3z13jDw2teVWDQeOxvPMeiMcfJpw3HNvakuxdkrizv%2BnWTPoH4pagHoW1B5pcrk55LcKNuG4zsNykcohgru%2Bc6AuuRwcFsQ5EL%2FEpODtKYWRNdFIW4ZAcMpR4TLQCcelAy6%2FDOYadPYXXTEdjYb9FxwDkZMA3TVWu5fG84MJ%2FiRckl54U7foFTKkEpRc1g4mcZQ3b3VGjPu4x8BFPU2Vlsv3c0N4PE%2F2X5DP6aEXTBUuj9gOpj0o%2BLpx4IspMnzR6bZrSzqRA3WogfomCyYpyHugStLQo0HVWcAK5UCpflJsWbDEJAU2VfvLcACaJRJ23Q84RYHYFoJgqW3qluTyM7BdxMkllJDmHl87VcWXbivm2bmluuzQKvr%2FwZJxwIBMXtXyIhdFBCt4q5jsebCUeuBSLDp5%2BS1grYejdPpBqK83mvyzpTLOqM%2FxuUEy3YSfAqdVFoEEmyR2qoEaORuTOmlP5UrdD86nKf9FMXC1f%2FuQ7cyfIxR7Z%2FqcuvxYdSMpl71GPxFJuSz38125kPgWjUDXV3jeqptYvNghC3TgbVcL8%2FIsCdYSJU3wO%2BpI%2B6g%2B0MK7Ow8QGOqUBjyfx4Lg0a%2BwN6RG06YfadNFEZIIPZ9xMvoaW7EB3IB74a%2BrFuTbDfIJPfMN1A4pvIW6JlQRgunQCPEC3OfZcVS2HZ82D%2BenZ1yhatdJhCtK4bT5aAM%2F%2F6G0MbNJvWth9YqbUe5%2FKv9jbQ8Wd4Hxl7C2Oyr3qYPzOkoYPLZRaD%2B9Foz%2Bde22tNawnbIYIbX%2B0EX%2B%2F7adYCLkCmm9AFFJyb22cBgYG&X-Amz-Signature=06c445f6846c5629dd74a3ecdf7d740b158ed8c704d6a9275e7d2a6f6b4e773a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NWBTNN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2FcmiN%2F2X3G6aqNG2KhU%2FgGBninE%2FViWDzmfXDkvLFOAiEAhUZMYWeQAjvhx9q%2BvYsQ8N8RqFQuyI%2BIDPn9BnWopbsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDTyP991MXNtEfR79CrcAwbtqtnadLsSnDwab%2BjiCMNoEfTG7kyC0AgzZttdlx1bxcb435A3v4QAJXQ3z13jDw2teVWDQeOxvPMeiMcfJpw3HNvakuxdkrizv%2BnWTPoH4pagHoW1B5pcrk55LcKNuG4zsNykcohgru%2Bc6AuuRwcFsQ5EL%2FEpODtKYWRNdFIW4ZAcMpR4TLQCcelAy6%2FDOYadPYXXTEdjYb9FxwDkZMA3TVWu5fG84MJ%2FiRckl54U7foFTKkEpRc1g4mcZQ3b3VGjPu4x8BFPU2Vlsv3c0N4PE%2F2X5DP6aEXTBUuj9gOpj0o%2BLpx4IspMnzR6bZrSzqRA3WogfomCyYpyHugStLQo0HVWcAK5UCpflJsWbDEJAU2VfvLcACaJRJ23Q84RYHYFoJgqW3qluTyM7BdxMkllJDmHl87VcWXbivm2bmluuzQKvr%2FwZJxwIBMXtXyIhdFBCt4q5jsebCUeuBSLDp5%2BS1grYejdPpBqK83mvyzpTLOqM%2FxuUEy3YSfAqdVFoEEmyR2qoEaORuTOmlP5UrdD86nKf9FMXC1f%2FuQ7cyfIxR7Z%2FqcuvxYdSMpl71GPxFJuSz38125kPgWjUDXV3jeqptYvNghC3TgbVcL8%2FIsCdYSJU3wO%2BpI%2B6g%2B0MK7Ow8QGOqUBjyfx4Lg0a%2BwN6RG06YfadNFEZIIPZ9xMvoaW7EB3IB74a%2BrFuTbDfIJPfMN1A4pvIW6JlQRgunQCPEC3OfZcVS2HZ82D%2BenZ1yhatdJhCtK4bT5aAM%2F%2F6G0MbNJvWth9YqbUe5%2FKv9jbQ8Wd4Hxl7C2Oyr3qYPzOkoYPLZRaD%2B9Foz%2Bde22tNawnbIYIbX%2B0EX%2B%2F7adYCLkCmm9AFFJyb22cBgYG&X-Amz-Signature=20fd22c93944bf25785283be169a9ca5001a5a1b54f84651dfeae8bd3211b8eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NWBTNN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2FcmiN%2F2X3G6aqNG2KhU%2FgGBninE%2FViWDzmfXDkvLFOAiEAhUZMYWeQAjvhx9q%2BvYsQ8N8RqFQuyI%2BIDPn9BnWopbsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDTyP991MXNtEfR79CrcAwbtqtnadLsSnDwab%2BjiCMNoEfTG7kyC0AgzZttdlx1bxcb435A3v4QAJXQ3z13jDw2teVWDQeOxvPMeiMcfJpw3HNvakuxdkrizv%2BnWTPoH4pagHoW1B5pcrk55LcKNuG4zsNykcohgru%2Bc6AuuRwcFsQ5EL%2FEpODtKYWRNdFIW4ZAcMpR4TLQCcelAy6%2FDOYadPYXXTEdjYb9FxwDkZMA3TVWu5fG84MJ%2FiRckl54U7foFTKkEpRc1g4mcZQ3b3VGjPu4x8BFPU2Vlsv3c0N4PE%2F2X5DP6aEXTBUuj9gOpj0o%2BLpx4IspMnzR6bZrSzqRA3WogfomCyYpyHugStLQo0HVWcAK5UCpflJsWbDEJAU2VfvLcACaJRJ23Q84RYHYFoJgqW3qluTyM7BdxMkllJDmHl87VcWXbivm2bmluuzQKvr%2FwZJxwIBMXtXyIhdFBCt4q5jsebCUeuBSLDp5%2BS1grYejdPpBqK83mvyzpTLOqM%2FxuUEy3YSfAqdVFoEEmyR2qoEaORuTOmlP5UrdD86nKf9FMXC1f%2FuQ7cyfIxR7Z%2FqcuvxYdSMpl71GPxFJuSz38125kPgWjUDXV3jeqptYvNghC3TgbVcL8%2FIsCdYSJU3wO%2BpI%2B6g%2B0MK7Ow8QGOqUBjyfx4Lg0a%2BwN6RG06YfadNFEZIIPZ9xMvoaW7EB3IB74a%2BrFuTbDfIJPfMN1A4pvIW6JlQRgunQCPEC3OfZcVS2HZ82D%2BenZ1yhatdJhCtK4bT5aAM%2F%2F6G0MbNJvWth9YqbUe5%2FKv9jbQ8Wd4Hxl7C2Oyr3qYPzOkoYPLZRaD%2B9Foz%2Bde22tNawnbIYIbX%2B0EX%2B%2F7adYCLkCmm9AFFJyb22cBgYG&X-Amz-Signature=7aba19b29d6d35938f9c6b94cd683a50c9894bacafcd1655de09f4abf90340b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUFLKPYS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFFetk98jYCDNBz632K%2BInrEVLmbDp2y6F8W1oa3oLoBAiEAu6dh%2BYXF%2FdJtLXry5QY3VO8zGDf3TgXtADlHBr37z9Uq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBR%2FrBatQhCb0i3CVircAwewxXrhkraPVYm96RgASANktWZ5Hxn8Fe53qJfkvRTfXf4TOExy029ZzZ1ea28n%2FsVwyhl7wVp6b9luefYGQPaZwxq6%2B3hkTc8Y69z0q%2FLfSvJ3sojaqWnRU%2Bs4DEEUlG8%2BZ1DWdIlBODnvkXrVdxft1Q9WpGyttsWawKziKpLtqneKTonRm6MBeeEUz5a%2F5zcZqfWauanuZN53NXvINBSvAY%2B1SdwqqqL6ILXBU9b8sNpNn14C6F0ZNEEMZVUByrIfPBDdPM4x3%2FgGzghWNVHtnqFPtUcz%2FdXIGQFCZN5wRfVK6HXr2fEfI8XgNlaEIzCdxgxYNs7hlkyL9%2BRsQ1x%2FIS3xE%2BmPxQpUdd7kTsg6XGh4OyapiBnv%2F5gBlk8UKSIEhhRcFiJv3kyNqnAP97hehsaEAm9F5Hp0A8lb0Y0%2BP6%2BlboDaH%2FS0d39yTbEXExu6xxTn8endwtvpIMY6HZs%2BEtacVNzkd8XaMu7a%2Fx0u3lLIYtTj5SknCMspO7Qed1qjxMzbWLa0X43%2FpliG1EfWz1UAePtl33jnukKgwIoNFe87ori55T1UPza9xGRtJ7%2BZCyNY0%2B8G3%2Bp8lgseu2x8nCWOdYhPdgOHeO%2F58dtKgczI6oRajY7Y5wZSMLzOw8QGOqUBKyzlt1nqvA%2FRKBcSoDBoQbpvQiDRhbVAhhNWt82mXzheoFBqLm5%2FLrMAAgLm1OI%2FYm06QbnotEUqpIFXUowXRbeS2VUgc0Wvnm0HVVfhZ3Kh7LlvcL1rNJLXc4FqAbN7gAqEz23G0N0xR7%2BUASZNS%2BY3dmG1MRTE2G1Rl2vRSDF6s8EUv2nKhRJ3CABw4ghNOZybrgKBuJNfeE5omUrmk2GbfRKT&X-Amz-Signature=43c0645b8ebe7881ebc94e5247a82fbb557d865cce1e05e6ed3a1101f86aba05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNIIV4L%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDhQxqp9joUqHGfGiPfAQMkGcvaAUrAQ9JgADsqthWCQAIhANf63m20E2U%2F7MAdAhmt9f0MVHjaKYXEq2CLRXHQre5bKv8DCEoQABoMNjM3NDIzMTgzODA1IgxTqOKHUvN09%2F4nZ6Mq3APBINRSgi%2F5N1%2B%2BWN1uwUR86pT5SdNMFPIsQC5FU9FhvM3zqhxdifGjma8A3PVzpgYLeK%2Bmcc2f0mtLAC4n%2B%2B3TBsFuRQsPMKUyDpVXzE7wvEcGyqzLewCXe%2F4YqOw7Fsym0gfQuacg52%2BFNZjRI0Bhqgc1Be54iVmK7h2LgkpRKjVZxXy0A23H4fEUAqancxjY8hpexpueIjC%2FsdT0Qq6CeBTm402RvRtahwl6CSZRbgpNuLW5u%2Fq8zdVgOyGJODY6aw3PivASndN6KgIPa5SBg5p%2BqsFfYWtNv9zmcw%2Fwqt1BHhVpHwvG1c1L4yoQwy1RVYxE7LaDj2QoC3RIXSQTFkh6Am5OpFzzF4C29HwWNyFg3OomtAExO1gjDz1eIOSwAGpYpk%2FWKbSJ1nTDdrEA3HOwjVpQ%2BA45E9CuCA62RQlBhAoqs7fEKZDr2HjBCSLzOAChXwNKRbNCYwTI9AlQAhM%2FNnM9Bsw%2FteqqbmJPxblJBS%2FaKMFidoKWnwmyoiscT6j6Q%2Bxx2Q6E0asvcwqd4EO8tD%2BIoQA86onN8n8TjH24S2nI49v77H8Fpc%2Fn4I6guQjhIsgLtmojZGFXh1xyg8ZUZXhCnNs7DffkAuA2irQM6D79ZEDq7VHtJTCwzsPEBjqkAaQeE1yAFMN0Yjf1E%2FDHQsDXWJmo9JObO4H7acNBhYyxSXmhvzt6CN713syuczBaUfh3pCrbrqnkVwZwq%2FT%2FCkGNg0XSWUpWbUT%2B%2BisVP%2FkrcbotfbzOHCUGN2qUI%2BfunP%2F60XAaSfBtfFqrEaGU1xJMozF%2FfhHHArxukcLcrOQv7DEAaLDSTvfjZvi8GlBHABT2JgBw1JtUx8vSPlTczON5xVND&X-Amz-Signature=d545f34188c64a633256ff3733c255e9720ffced10c540ffb1d7ec5401ed4188&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBAKZAIK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCV4yojodBdv8qgF%2B%2FlO1gAP6q%2Fxx5CTa66JWDYW9spfAIhANaAITBGbgZrB5Yr8xzOobN2029cZ3jpnAYfKQcgcScvKv8DCEoQABoMNjM3NDIzMTgzODA1Igwq9W59DPddzyXF9Twq3AOSjJmEA0MbKMkmCAECjLa%2BeoazEi40TV1rNpkwzbRxf14pAbZRANQhCtT7hHRB0k6N3zd2w2D6i7oX9%2BggU3u0kHSVaDtk%2BUSgwWAmvqvih5RZA6OE9Hpb2FMELN7rD%2F%2F7UWt9c8L0tjQDfdObAwJOWmCshZ2ywQexF7PR%2FJuPOn735Hylm%2BNTr4MHHGXcmkB%2BqxqhRogGn5DAA4V8scud%2BD11E1w1q4iKKmB0C%2FX3CtZKIGrG1HGqk7xkKBSCCEm8V8HyQZFDU9cIibK5ahqyWh0mjf0EFQitvqh0tW7kDBA9%2FnI5Am2TuSxdN0jtZDHI3KPEjt4XunVx8qLUrEBRjaw2lNoXH63NI5LcEf7AZYvUiQsAhRJmWPhmXIoh0zBl%2FObg6BBYxFU0ciiFAVotSnn%2BSuPj7MKD%2FpCqxiqmDBT%2FpEKHQfa9%2FDEwR1Pi2thsIrxSaKVCl75ggyGxRpNv34yqiKzQUhuahA8areK9zH%2F1AC5tI0HQaLh4Pkt76draf%2B2CQ3%2BrWiXSl%2FyJpotjMOkDZM1iUMZbLh9w357T3HSd5GBtBnwaw8aEfH2Sdi55%2BYa7Nz2Po8mh0yw9BoZkmwKJ9E%2BY6uTHiPCdaSqsUO%2FlASHmrmApzBeBijD3zsPEBjqkAT4D%2FqEQL9B1hYdoCTW6dGrUCN3e5TGkq4UMJrKsV5tX%2FCGugR%2F2KXWzmnODZURPY%2FA4CKnQPO1UXFLhLj2kjBZgznHo9nywAhtSgwhokIsGz4Pfrka9xO%2BNIxJ4ZFJashQcqg8PUmbt7B3Ok9IRei0B%2BS4%2BVw8%2FIiMzPf91lH7LWaClwMHhRNic%2FEa8LvCMn7aA0ynxaK58sIxOqjVaXkUvLx2m&X-Amz-Signature=bdadca20ee1b56ea6597be5ab39c55e5768ba4d7b0b483bdcc2fbce9570b5dc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NWBTNN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2FcmiN%2F2X3G6aqNG2KhU%2FgGBninE%2FViWDzmfXDkvLFOAiEAhUZMYWeQAjvhx9q%2BvYsQ8N8RqFQuyI%2BIDPn9BnWopbsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDTyP991MXNtEfR79CrcAwbtqtnadLsSnDwab%2BjiCMNoEfTG7kyC0AgzZttdlx1bxcb435A3v4QAJXQ3z13jDw2teVWDQeOxvPMeiMcfJpw3HNvakuxdkrizv%2BnWTPoH4pagHoW1B5pcrk55LcKNuG4zsNykcohgru%2Bc6AuuRwcFsQ5EL%2FEpODtKYWRNdFIW4ZAcMpR4TLQCcelAy6%2FDOYadPYXXTEdjYb9FxwDkZMA3TVWu5fG84MJ%2FiRckl54U7foFTKkEpRc1g4mcZQ3b3VGjPu4x8BFPU2Vlsv3c0N4PE%2F2X5DP6aEXTBUuj9gOpj0o%2BLpx4IspMnzR6bZrSzqRA3WogfomCyYpyHugStLQo0HVWcAK5UCpflJsWbDEJAU2VfvLcACaJRJ23Q84RYHYFoJgqW3qluTyM7BdxMkllJDmHl87VcWXbivm2bmluuzQKvr%2FwZJxwIBMXtXyIhdFBCt4q5jsebCUeuBSLDp5%2BS1grYejdPpBqK83mvyzpTLOqM%2FxuUEy3YSfAqdVFoEEmyR2qoEaORuTOmlP5UrdD86nKf9FMXC1f%2FuQ7cyfIxR7Z%2FqcuvxYdSMpl71GPxFJuSz38125kPgWjUDXV3jeqptYvNghC3TgbVcL8%2FIsCdYSJU3wO%2BpI%2B6g%2B0MK7Ow8QGOqUBjyfx4Lg0a%2BwN6RG06YfadNFEZIIPZ9xMvoaW7EB3IB74a%2BrFuTbDfIJPfMN1A4pvIW6JlQRgunQCPEC3OfZcVS2HZ82D%2BenZ1yhatdJhCtK4bT5aAM%2F%2F6G0MbNJvWth9YqbUe5%2FKv9jbQ8Wd4Hxl7C2Oyr3qYPzOkoYPLZRaD%2B9Foz%2Bde22tNawnbIYIbX%2B0EX%2B%2F7adYCLkCmm9AFFJyb22cBgYG&X-Amz-Signature=64c14e6dd14caff83f5febf1b49ed348634f0cfe8d20a43567d9abdeb16cf14e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVCYGW7D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIEkgHci0peb4wwEcqhV%2BAikbrK4rmBJ7BWvfwPcFYP2NAiBpkQPlA4TXE80KL7q%2BoFFeX2qOxXDbsO%2FFkh%2Fg0qs%2B5Sr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMi4esRtvFnyLJ0v71KtwD5ySVDMcxiSQPDmVC5%2FT44MXHpwhw1fkIXivmyoD0dvepjVu4O27xAOXW9%2Fdk1l17KeIDEczCOsRCmv0VxzZ7CjgF7Wwf8WfwHv%2F4ptu2E%2FO7XjgUcnoD2gYsgwGaSiwBxVseA07TueaEG5SUplzwhtw0kIQZMLW8N9xqfmBFl4y5whlZqFEZ8Zrm8P6c26HR6ZjCcfdHJOZl%2FImbO972icj%2B27A4RT%2FzD%2FmCx3Nrrg6kdWFLZoLZXqTOmJGIAbKjJA9gKXDt7DTY8GCewZguKee%2B4HnYsN5DUwWYXKLZt%2BEd0ttIutmI%2BqtHLdrR3%2Fe3ClvJsh7V6sMvyhs0iO%2Fm5MOpZ6vl0i%2BUcYUIYHIP2udeX9w6WuBfkrRSy6IvRXI4hM0b0dZx2hE%2F9gqv%2Ba68lIJI7DbY7pYD5T%2BofZcSVglm%2FrvRrv6STdnghtEriry1Aqw9j6fw71sAJUFeis3pQM%2FCyKAAlcW86KFeaaaA6I6PEZY5FSPanWB5Q3eG0TXimdP66jqi%2BUQhH2Ze6%2B1YeT7c4RhwgiiosfTuJ3wK5s7QdIAezIDPzwG4z0KEJFZ80JwJzzgjioWMn6l%2BIgrun9hr4JcWxEOxpiQwggA%2FGh0BV7jfNjFZbMxc2l8wtM7DxAY6pgFGOQRNNRW0m7JZ12BJyaLpp3vAim0gunhBIFUKTGm1ixC%2F5zDV34fGNP0YChyVjTUKTEg1K5x6uENn0Pw7MSFUIKQYFvMc4gQL1fczWxIb2xhJO%2F781KCC66wWbki1G4Lwi4SupVkK9LKl6Ardmr0YXAQBpN5BSILI2oaqnz3cGrKiFCYOxAoVOpsdorPQRJeFUjF93YTNT5wtOr99fXeloQgmyg%2Fu&X-Amz-Signature=9990d2d11e4a73e80ab559a8dc95b45cc97872383821434ae36b16a8dae21ac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NWBTNN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2FcmiN%2F2X3G6aqNG2KhU%2FgGBninE%2FViWDzmfXDkvLFOAiEAhUZMYWeQAjvhx9q%2BvYsQ8N8RqFQuyI%2BIDPn9BnWopbsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDTyP991MXNtEfR79CrcAwbtqtnadLsSnDwab%2BjiCMNoEfTG7kyC0AgzZttdlx1bxcb435A3v4QAJXQ3z13jDw2teVWDQeOxvPMeiMcfJpw3HNvakuxdkrizv%2BnWTPoH4pagHoW1B5pcrk55LcKNuG4zsNykcohgru%2Bc6AuuRwcFsQ5EL%2FEpODtKYWRNdFIW4ZAcMpR4TLQCcelAy6%2FDOYadPYXXTEdjYb9FxwDkZMA3TVWu5fG84MJ%2FiRckl54U7foFTKkEpRc1g4mcZQ3b3VGjPu4x8BFPU2Vlsv3c0N4PE%2F2X5DP6aEXTBUuj9gOpj0o%2BLpx4IspMnzR6bZrSzqRA3WogfomCyYpyHugStLQo0HVWcAK5UCpflJsWbDEJAU2VfvLcACaJRJ23Q84RYHYFoJgqW3qluTyM7BdxMkllJDmHl87VcWXbivm2bmluuzQKvr%2FwZJxwIBMXtXyIhdFBCt4q5jsebCUeuBSLDp5%2BS1grYejdPpBqK83mvyzpTLOqM%2FxuUEy3YSfAqdVFoEEmyR2qoEaORuTOmlP5UrdD86nKf9FMXC1f%2FuQ7cyfIxR7Z%2FqcuvxYdSMpl71GPxFJuSz38125kPgWjUDXV3jeqptYvNghC3TgbVcL8%2FIsCdYSJU3wO%2BpI%2B6g%2B0MK7Ow8QGOqUBjyfx4Lg0a%2BwN6RG06YfadNFEZIIPZ9xMvoaW7EB3IB74a%2BrFuTbDfIJPfMN1A4pvIW6JlQRgunQCPEC3OfZcVS2HZ82D%2BenZ1yhatdJhCtK4bT5aAM%2F%2F6G0MbNJvWth9YqbUe5%2FKv9jbQ8Wd4Hxl7C2Oyr3qYPzOkoYPLZRaD%2B9Foz%2Bde22tNawnbIYIbX%2B0EX%2B%2F7adYCLkCmm9AFFJyb22cBgYG&X-Amz-Signature=49ada9b9a21ce0f82fb00c465452c23b1a621cdc4b5d6564ab59233c628dbd41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX3FWUCX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCyfTug5hXFegsI4yiZWvREWeFfjbTXTadyJxbJznt%2BYQIgOp2W%2Fmx%2B1Dje10birLraNiRaKJYxJNY9WgKc9wbuC2wq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDFcpsKZ%2FMOcrNVgKeCrcA6YnfVNK2qiNB5xq7Y2TqN%2Fc7ztSntt%2BcYTKk1tZm2cdIvkTJxGcNd7i0I2sGeVHdK1ugA%2BBPE4do%2BQSsr6REQyO1PXOPuAYylg57P4ScrfiPy7DTTNbWc2oFz0jG%2FvDZZaglRnJkfiEoeR6LJoNAP3ROCVXuflMGJLjlEda3xVvW0fOGzTpUg%2Fg8JhqkPoHgXXgwcA70ts5vEgV8%2B92mlqBV%2BNDi8IQtMlaO2ilCPyVfooSiNMCZV%2Fa%2FYrHPK0Upu43j8Gci7OBjIKtUcyV5VQEmebFCv9Wi9iXA2seSLR9JcDn24rXgJAQO3GEQkCIXw3Ie%2FeZrBfB3o%2FDdlU39woehj1muEMdirobHTCNE3dzrDvImhWLHZ1AHyh36fsIKTeFgHaSz0Yovq5%2B2Zk69qLdQvr8ORZyhl8flATw2U26qJ1q5kBfAqIuZSam6AoxnGmSqkgmUizqeBuKOnZGZ3Gp7HqWcvpLOoDpkvxwr%2ByXtmrM9AykHW%2BunuAoQo6hlUV3iiYBywiVzmeiXsifUdVUj%2Fx6D20%2F3q0XiirBbNva9eLh0axRMs8PIlkd4LsNwkosxhYg5H9rg%2BXmBqCd%2FULn5O9Tc2Sv6z5TuNFh%2F3vFFIXBW6JVc%2B4FMhnhMLDOw8QGOqUBmgEYjT1JidyeGLLFEiF9QfDT71TG%2BfnCnsMkCvwPGv%2BiF1AJ29yc1EGTRKFNqEb%2BFDBeC3ZVFOcK2LB8DEVSHEIQzD%2B3VQAC8VhY3yUnkfNTxPRSQwVJJ%2FZED4ZGLRmgezxC7%2F4LhQkSLUdCt1hPFWFJPAkhgcQsQi%2B0n5i35yXa4mkasytD4GBOVYhosSsg2YuVP5Aja3wCOc7%2B4bfE9ddBdvWB&X-Amz-Signature=f62b099ab34ce3ff352a344f30b4afc7448b8b2ae62a4b1b033960654e53f295&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NWBTNN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2FcmiN%2F2X3G6aqNG2KhU%2FgGBninE%2FViWDzmfXDkvLFOAiEAhUZMYWeQAjvhx9q%2BvYsQ8N8RqFQuyI%2BIDPn9BnWopbsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDTyP991MXNtEfR79CrcAwbtqtnadLsSnDwab%2BjiCMNoEfTG7kyC0AgzZttdlx1bxcb435A3v4QAJXQ3z13jDw2teVWDQeOxvPMeiMcfJpw3HNvakuxdkrizv%2BnWTPoH4pagHoW1B5pcrk55LcKNuG4zsNykcohgru%2Bc6AuuRwcFsQ5EL%2FEpODtKYWRNdFIW4ZAcMpR4TLQCcelAy6%2FDOYadPYXXTEdjYb9FxwDkZMA3TVWu5fG84MJ%2FiRckl54U7foFTKkEpRc1g4mcZQ3b3VGjPu4x8BFPU2Vlsv3c0N4PE%2F2X5DP6aEXTBUuj9gOpj0o%2BLpx4IspMnzR6bZrSzqRA3WogfomCyYpyHugStLQo0HVWcAK5UCpflJsWbDEJAU2VfvLcACaJRJ23Q84RYHYFoJgqW3qluTyM7BdxMkllJDmHl87VcWXbivm2bmluuzQKvr%2FwZJxwIBMXtXyIhdFBCt4q5jsebCUeuBSLDp5%2BS1grYejdPpBqK83mvyzpTLOqM%2FxuUEy3YSfAqdVFoEEmyR2qoEaORuTOmlP5UrdD86nKf9FMXC1f%2FuQ7cyfIxR7Z%2FqcuvxYdSMpl71GPxFJuSz38125kPgWjUDXV3jeqptYvNghC3TgbVcL8%2FIsCdYSJU3wO%2BpI%2B6g%2B0MK7Ow8QGOqUBjyfx4Lg0a%2BwN6RG06YfadNFEZIIPZ9xMvoaW7EB3IB74a%2BrFuTbDfIJPfMN1A4pvIW6JlQRgunQCPEC3OfZcVS2HZ82D%2BenZ1yhatdJhCtK4bT5aAM%2F%2F6G0MbNJvWth9YqbUe5%2FKv9jbQ8Wd4Hxl7C2Oyr3qYPzOkoYPLZRaD%2B9Foz%2Bde22tNawnbIYIbX%2B0EX%2B%2F7adYCLkCmm9AFFJyb22cBgYG&X-Amz-Signature=540304902f408b0e84ef69caba87b46dffc8f4b22561a5797fc92614665606e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFOBF6BS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD21a%2FAnJAnkyJy30x6pS8RGxmX%2BksZk%2BH32wucKQwegwIhAKAaG4zsMJNh0YuyQPxD4qONzPmZWjkkc5A3CkMa5fQbKv8DCEoQABoMNjM3NDIzMTgzODA1IgyrkpziXmeZ9x%2FO3A0q3APkfm%2BnuOAPKT%2BPpmnSPkU13G2tDc5bd7Q%2BE%2BMeQoGn%2FXW0Bv5nkoBL0na3z84d%2Bu2%2FPOpJK5AwbimlHFMI1wmCcQjssY5cpqu0RxyLL3ymsrOKeb3GSqJ%2Fwxrmjt6UUCdOuhhSZ9wWA6v2dvMaMPULiOOWv1HZD0GEU7BZP4UKh5r4vLnrJs0oHlaRLJPQJ76x7fWjup8hW4lkbdqtiZ%2B3Adpt6NFcKyOq4R4TLUIOFfLN1zhvWj2VRTAV6L6gw3oar4UDDRduG2I9u4Ghvz6WPkXIsVnDm65QfRXsSWrudiBEmU00gAQo%2BKqRv7%2FfahDMTZxI0c2IfWCMjZNcxXsOLkdZyktfT2Ld%2F1tO3MHOCywy6I%2Bzb3GPB7ANTySJK84rA%2BNumXPmJ4Ww4PFJVv59fRFONNYwPejGFxYsd8hgNgDoPqW9ARWXqQQ8H4B1TJ6mq8W1UoBk%2F1yQSD8YLQzVEMEkJ0dNmiW92%2F1Z6Q8XnJqIwM%2BNMjAa2zraoiK7alN403CgkGgmI1J8DgMeoJHtVMiOCBYy3b2DGUngMkWtsojPdSmZn3FhSEgVkkcFXsnqwCYRGMAnwJDLcuPJlYJD1dm6qulSIeacArTSLswVb6snyrf7WIJ5gMCa1DCbz8PEBjqkAWrmcBcN7tW9p59W%2FnMB%2BFIKMd%2Fom8nIEkRrFanyI%2FB2EiErqGHTozTgsAvVst8G9qFhPKog97fmYIM7qcU4YsYL2gBHLtYWLPyppqTbPUKxUdR7pAF1BAGHR5wcsIU3%2BVv40VrqcuhN3BtcigX7RvZZ64XSY26p5j6DtzhnosbqwP%2FGO9QcPTkE9Tnh2dnWru9W1H7DkoOBx%2BGx33G5puf8WYSg&X-Amz-Signature=2f06eefd0e18c158d13074b3c3f9b20808d1fefaf879050cc8f764928d6540f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NWBTNN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2FcmiN%2F2X3G6aqNG2KhU%2FgGBninE%2FViWDzmfXDkvLFOAiEAhUZMYWeQAjvhx9q%2BvYsQ8N8RqFQuyI%2BIDPn9BnWopbsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDTyP991MXNtEfR79CrcAwbtqtnadLsSnDwab%2BjiCMNoEfTG7kyC0AgzZttdlx1bxcb435A3v4QAJXQ3z13jDw2teVWDQeOxvPMeiMcfJpw3HNvakuxdkrizv%2BnWTPoH4pagHoW1B5pcrk55LcKNuG4zsNykcohgru%2Bc6AuuRwcFsQ5EL%2FEpODtKYWRNdFIW4ZAcMpR4TLQCcelAy6%2FDOYadPYXXTEdjYb9FxwDkZMA3TVWu5fG84MJ%2FiRckl54U7foFTKkEpRc1g4mcZQ3b3VGjPu4x8BFPU2Vlsv3c0N4PE%2F2X5DP6aEXTBUuj9gOpj0o%2BLpx4IspMnzR6bZrSzqRA3WogfomCyYpyHugStLQo0HVWcAK5UCpflJsWbDEJAU2VfvLcACaJRJ23Q84RYHYFoJgqW3qluTyM7BdxMkllJDmHl87VcWXbivm2bmluuzQKvr%2FwZJxwIBMXtXyIhdFBCt4q5jsebCUeuBSLDp5%2BS1grYejdPpBqK83mvyzpTLOqM%2FxuUEy3YSfAqdVFoEEmyR2qoEaORuTOmlP5UrdD86nKf9FMXC1f%2FuQ7cyfIxR7Z%2FqcuvxYdSMpl71GPxFJuSz38125kPgWjUDXV3jeqptYvNghC3TgbVcL8%2FIsCdYSJU3wO%2BpI%2B6g%2B0MK7Ow8QGOqUBjyfx4Lg0a%2BwN6RG06YfadNFEZIIPZ9xMvoaW7EB3IB74a%2BrFuTbDfIJPfMN1A4pvIW6JlQRgunQCPEC3OfZcVS2HZ82D%2BenZ1yhatdJhCtK4bT5aAM%2F%2F6G0MbNJvWth9YqbUe5%2FKv9jbQ8Wd4Hxl7C2Oyr3qYPzOkoYPLZRaD%2B9Foz%2Bde22tNawnbIYIbX%2B0EX%2B%2F7adYCLkCmm9AFFJyb22cBgYG&X-Amz-Signature=6a657dcb8e808da9cfbbd872b4f95c629fd0d919044873b2d90027660b6000db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY5WCOZ7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDr6twsBG%2B3Rw0F2vgnr6DCmkdAGDIeCgfwbvjwL4S%2FOAIhAL5JO34N6bC41yNDaG2t5HH6sFEF2aBqBcJMh%2BW22BLDKv8DCEoQABoMNjM3NDIzMTgzODA1IgxYgOe1aGHDIQGPlB4q3AM8OiI8HLmLY2ZpQQw7S4tR%2BJQ%2FwVr2q%2FixrcaedY3d4HLyrSSIU%2FkylcWeNUJDl1V0my0JNkz9zOE9q%2Fmx%2FyaVQ67Use0Cb1YKYhXmDa9TVxHI06NHJ%2FPfkpr7pVe6xx1vPQLgY6KREepqTMFuu1GgNn%2FZyCAtet6x2EoBVQBYiu1MqHEajAdr6PUUL93Ds4Tp5M35OTNqn1z0z2BIy32vSCmWRmzn5oFrz4xH2iX4BiVVZMfkVuvwLaHTubICUCklbtmrdGj24JaihuK9d21zSPi4K3foADX37885mg8SQqhqblih5Js51UshOJVoxj3yI4dGmYk4LSxFU%2FfMLbrBdnDHrk17lQ62aO2aaMxNYIAZksnPMCet%2F%2BvOOp4TlZbfvROYDR5QRYtzAUcF8yW3DjPZrXXrvRrFDda4R3%2BDzqkD4KfqsMpSM2TvHOU%2F7GouHj4qN3SAUBuUjOGWnryp5clhfT266RLbouNgo9ZE3%2FpoyGyzJpM6D%2BXRZMt1CVg3JUTX6nP6JMLD11l5E%2F4arUEjGV9%2Ff7obUJEGrUbRgMpyjuQ3WFQAh%2Fdw9hYr%2BngXWXDouTzb1eHBmaLTHL3G%2FUNJqP26z32PBFiLKUtc9ykHDbWsf8Q9LxncMTDCzsPEBjqkAVo3yH9Lm4UjELE%2F34hDBCzTXeHyG30sAB5FBFaq8HUNXSoLmd0ROrzCO%2F2L8eAQL73dR%2Fuw5m1j%2Ffr9xBGAWzDKIkeXAMLFm9Np%2B4e5vkUsDZ3YiP6BBLSPaCeUBW%2BoDMYyzWGLNU3coy5lDPXfXaQ4hJyQQiuV4t6PyK2%2BfrOtuLvZwc5aoZDLaHoar1hdgzpB5owKQot6KVdwTThGb7kc7mld&X-Amz-Signature=e63ab2cb9699b3142214c0b163adb59fbda0be83b9a460db18f8ca85a12859a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZZ4VVK6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIC0hOKWCh%2FjGR9BFmKP5oKYSAzouUD0w%2FDUGlzX3DJ2UAiEAs2IHRaXbUpHBcrtKob7YF7chCpZ7WfGjjtT8V4mU9Ywq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOmgEfYMN1fdkqMueSrcA4hbkQjqbEu%2FUu5ohx99XCqhT79S7BbeRt5o6MBHT4BXiGOeXTXjuCK6nWURzpclgZOIX8nKAfZPmYoqZUkN658DiZhS%2FglLG8m4e1PWU9zPpdLccoLcGU8PijOZj%2ByzCsNyfd4QzUh09BWI2HVdLqtHyL%2FkEzMmgAFN%2FHfTk%2F27Q%2F4TQuQPmZr%2BJuePqmE%2FGrQgkJVQ8KPs6EElczf5AY%2BmMfK5gcOAJnmoRPTE1GISwPKdiZhZskLV6GzBvbCftfLmDeqt5YuIbbu%2FUj%2F9jT%2Bpj2%2FPvHJdtIgCMhQdvh%2FHYn%2BKdShL0LxoeNrxg%2F7e2SSdCZxPSp4J%2BzCWHu%2B%2Fn5XPTqHusf7tqiNgy3ZkAPzbcWuZROBVjneZg8VNaIv1KyFlQ2QriMctZ5JHZMkkv3ldYTIbs1nJ%2FctbuEMH%2F%2FsGEN7bmOHaQejvTKPtwVGfjeh2FR5eaHDaFlUQlOCsqV4yjYKf%2BI3yJdAZsS4EnX0aztHkSncQFmo79jHQhYwC%2BAmUGRu0EHIjU0XZqxEol7kXVp9wEOoF%2Bx9BoYR%2Bx9ACsc4DLGbiTd6KAJkGV3l6Y7ItKlhzwr4h7qqcDl0Twtq65XGuLaMA2KJZtrczlxO6%2BYtramB5wXwqwAhcMJDOw8QGOqUBQkCtgJ%2BcRMwv%2Bx2DbIzV5DfMHBm2wq3%2FNUUJg9TNhfOY%2BwQWsL1QITB0Q7us2Fi9tWwRvGh5Hc39u5rBbQaWyuPTGIEXmWphiHWT%2BgOH5cA%2FIYC1%2BY%2B7wGTwS%2B69pRE%2BjEBTpSd9XQmCEW5OLuZOGS0oJ4eXQl4snAorpC%2BxbI5zhUOg9rOFE7hUJJ3BzQhz%2Bxk4jYOttVptkucWgZwl9FAOVwII&X-Amz-Signature=23c74bc4d52bf5804bfd3ed42962f9c6e780bce594daa62bb5b1b1e4daa2c0e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SDVEPRM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDInhDaCEQg82JklAiye07EiyU8HPfJD8mvM05ydwsRugIhAMYylkZAP%2FAcVj%2FP1I8SwVDOh4n8yIhATOrOyDYWpo6OKv8DCEoQABoMNjM3NDIzMTgzODA1IgxFTmG9Wyx3W4fLrAYq3APl1%2FOz3b9zO8Tk2TmvAbFah1fgVQpccFudfm7bz4Dl0JJb2Cxo6xt1TMsB7C%2F%2BuqpQI31dMdfnz2o2UCEejdWXDO8jdPLT3eRm8LMv2SyyZwcchWmf%2FbVlub9YzdTV8xBII%2FH8G%2BjbqcyygwKx21mhJTDOVYY4J3kLd%2Fbnde0pK%2F%2BC%2Fvs8PNrTb6UULWyyaZ2VXjaYjUoRIWtQAqk2hwlxjH%2FjOuBNvAajoYsLRH8eQpRrPT2lwvG2aeXmmy3TRpAw%2FKFMTxurMJY9dIIVYxnSuMoXlQapT0ApNQcwlP%2BSesV3gJQIJtINkrOACGHEz3f3S4UZr0rycoUDJ5WRMulLWE6uQ%2BgSIflR67gwTTNQMfdJUI4iSTADFJc8%2FCd3o54aerZnA8CWLgzOKhyJBoV9Gw2oBYFkXlb4xqsYOFXGDsqqF5hVVkXHipPWOnZavcEEg9GLdHBIDG6rMXAnssQTm%2FraLRjoKh5CJaKCQrzK8ryaLb%2BMjj3Cj29EiErJt1QZno8rHaDCAXcBLS0%2Bvb7ASDwZ9X3aNjg2Z4dKtffh4173RpLO5IeQ7zKA%2B2Va9frdnTpZinuKF%2FdiWqXVlirIcPrkiHBPcBsBp0%2FJZMQ91gw2SgNnU7wIRYHKUTCxz8PEBjqkAXFk3D9PkC%2BftN4bmHLA8hn3vEHm0U5w6BGjWJdSSW2VcMZMBmc3qU7y0PFD3JWyt6FBggFl6HxgbW8M1%2F3CC1Fm4Smr7ugWkjPhMnuAQbu6AAz2ycxX0xKALVKYQvS%2FUmLHVqpESKWjIcR%2FyqzS2hKxYP8M1pegV2olIsMjW47kdZG0oyRzQyqmq0LExTbPEyAon5EkiA6JEOspIx0crluzReCo&X-Amz-Signature=7e2be885ac005bac75ad835a6368a39b70afeb03a43b5201e424ec2cf6834b8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBES2VQX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD%2FvgRtEjfMs9jKHR2sLcVWOKnkI1qbGzYRPBdyGxhAAgIhAPJuoI2Be0nuU7x7tDSH8F2FwOAyLFd2yKBUp8yIh1ICKv8DCEoQABoMNjM3NDIzMTgzODA1Igzcr8DS8xuhv3orLl4q3AMUmwdNQsuh7vGxJiB71WAR5OJ%2Ffv1ERG4nyBZjlEuF%2F435REf%2FSxrB1v%2BbX6bL3VfgVIc4ZK3s93F3cE5aFJAOfg3KS3F0yZP798Hbe6G94TtOypd3TG%2FzPlJjPk9nY9agy%2BbKM4NyjI9QtIke3x6g6lbzI77XRNgNyYHyaQulURuzN4k4RUVEorIN0Wti%2FDzG%2F%2FG4ImlGnk4b2GziF0QVW88oZgVjNkwEee%2F7pWMuit9io9ah3BwXInhtsMO4bMw%2F4ytchAjTB5TBGmyg%2FhOF6xhF52MtnzP3ZDaskVQT3Ian%2FhXqhk0Mk2QDP3kKdNGiUW5QxcFiIis9tqigu%2BZCNttZ6e13CuajMa2pj6V5ZomAHso7NqpFXSVZiUYzV9XB9DkvzfXHje8VycMN95vSt2MGzRaBlq2mDl5OwCy5Y8ceI6l3TA2kTPaBAsla0rHnvtmPbNo20dlH8OkRWQ7K5rYQss38ahvfXsrQjJ%2FhOVbzCely3RJrbN7EpIsLEGGtDBkYZZgBSKkFq5AqRTEn8MtxPH5rMD8%2B6QPqdKrYr3kX8a0tEMVOug5ZwJ4rB60BVJoXH5iKYRISd5L0qgkPuoP4OUS6KfJJTFlbNFzamTW7fb55hQ%2BjXHrYajCfzsPEBjqkAWF6TNkzC%2Bbc%2F34TF%2Ft6yLTa0RQ3a%2BT4%2BSn0cw8G8ujqdqKK05x5bD11fAkC%2FRlq4sPou5LAR%2B4OkFykA58y4YxqpK5193HmzNaQcRjydQtvFHgwcaML95ymO%2BFY82K%2FOko492UKO%2FefsERAJDrRcyVlOX8Cv00CalxUdmDJ4OTtN8btH1nHfP79QYxOr2XAUYBu49G8w78WzfFLwr2wrbGwZBut&X-Amz-Signature=694ce097e075fa07d75905ad212c5bc4ee129e5c7d6ebad216e660bc5e006b4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7GYBJRF%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGXOWhe9OfW3D2TTNXAZed8mF%2BpWrIGyVs81uuPfrtsTAiEAucPxOjUUCofHhIU%2BqwBBm1BFDlmfmcF7psDfmmzG%2B%2Fcq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMGPoADNsVI%2B9MjSBCrcA5iOuKCYZG4BiidI2yaZe3bz3PD4QUC%2FaHARRmEzjku%2F3AmoLpH%2FotISlEt3cHHimCU8%2F0LgueIy0KHowFCRhj2OunKSeX%2B9A74UxMIKYhrnuDXCmdYljLYEQOdhdpsIXv5RV1GuwY0TI4FRKj%2FqgQKgkzdCwfNRMzUhItVDvDyF%2FzVZsuRj8RladCrhCCf5PKnuu326xSq%2FmlM6JfwLY%2BHqZWf57XUBKtYfVHlCORtitisgRpb0xDOylPlgQ7k4Cc6fN5kVkdyevZiJci61kEbFl13hVlVQkyK1%2FHX43t9SYOx1GQNDm650MXi4zuCP0%2Bg02Qq%2FsRZN8snHtQL08LGSzm%2F0gxcjt4VdbdVP4zU26BQ7dpjOHCIGXlx3cKho75dNxvT6okmQo7hiBv1%2FJlpjjL5D0JsWSPwTn02aQALmNNyekKjT40KhWl9qgXq5nOfxxcgGIf5dPa%2FBp1cgaGT%2B6VmqRDM1sNWWOM1v8GtWz6JNmhBfgBrYLnpneV27%2BtT05U5iW%2BbgL5euMn6KZDExUAgtuXKVkddlWTpSJmumENuQNCFKJudJVO16SWH6wemSCp6XNwiu34JiYhDsO0mn%2FkvIw3U4%2BSJx0TwMQjeFTR5dAdM8kH8UvrLRMLrOw8QGOqUBA7cca2ThYGNdLssCUG%2FUh4XBq%2FhO9zZJ87pqvikfSWevS7%2BX5T0QO9b%2BGPoZbBR96rh82gMfYPGGMtvyC2kOcgUQq%2BD10fWxzvNcLQwJjtQiVVBQRTSdw1l0tnJjX0h8amb3kqDjEhnP%2FL9P%2F5KpVcCy4HUptPYqABfwxQMqiIuMQMMHKpYqjMRceucIXmK3eG%2F4zdaU3wFqJAh4y%2BVXA6SV9FIt&X-Amz-Signature=b9d79e9c9c262a5b4dc5931e51917f9d0f744d0f49d6159ab1611ee5381571f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NWBTNN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2FcmiN%2F2X3G6aqNG2KhU%2FgGBninE%2FViWDzmfXDkvLFOAiEAhUZMYWeQAjvhx9q%2BvYsQ8N8RqFQuyI%2BIDPn9BnWopbsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDTyP991MXNtEfR79CrcAwbtqtnadLsSnDwab%2BjiCMNoEfTG7kyC0AgzZttdlx1bxcb435A3v4QAJXQ3z13jDw2teVWDQeOxvPMeiMcfJpw3HNvakuxdkrizv%2BnWTPoH4pagHoW1B5pcrk55LcKNuG4zsNykcohgru%2Bc6AuuRwcFsQ5EL%2FEpODtKYWRNdFIW4ZAcMpR4TLQCcelAy6%2FDOYadPYXXTEdjYb9FxwDkZMA3TVWu5fG84MJ%2FiRckl54U7foFTKkEpRc1g4mcZQ3b3VGjPu4x8BFPU2Vlsv3c0N4PE%2F2X5DP6aEXTBUuj9gOpj0o%2BLpx4IspMnzR6bZrSzqRA3WogfomCyYpyHugStLQo0HVWcAK5UCpflJsWbDEJAU2VfvLcACaJRJ23Q84RYHYFoJgqW3qluTyM7BdxMkllJDmHl87VcWXbivm2bmluuzQKvr%2FwZJxwIBMXtXyIhdFBCt4q5jsebCUeuBSLDp5%2BS1grYejdPpBqK83mvyzpTLOqM%2FxuUEy3YSfAqdVFoEEmyR2qoEaORuTOmlP5UrdD86nKf9FMXC1f%2FuQ7cyfIxR7Z%2FqcuvxYdSMpl71GPxFJuSz38125kPgWjUDXV3jeqptYvNghC3TgbVcL8%2FIsCdYSJU3wO%2BpI%2B6g%2B0MK7Ow8QGOqUBjyfx4Lg0a%2BwN6RG06YfadNFEZIIPZ9xMvoaW7EB3IB74a%2BrFuTbDfIJPfMN1A4pvIW6JlQRgunQCPEC3OfZcVS2HZ82D%2BenZ1yhatdJhCtK4bT5aAM%2F%2F6G0MbNJvWth9YqbUe5%2FKv9jbQ8Wd4Hxl7C2Oyr3qYPzOkoYPLZRaD%2B9Foz%2Bde22tNawnbIYIbX%2B0EX%2B%2F7adYCLkCmm9AFFJyb22cBgYG&X-Amz-Signature=3a06a7760ffe4e4f9a5234e85d7371cabfadc0b4d2f3d5fd16b20853e5799c27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NWBTNN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2FcmiN%2F2X3G6aqNG2KhU%2FgGBninE%2FViWDzmfXDkvLFOAiEAhUZMYWeQAjvhx9q%2BvYsQ8N8RqFQuyI%2BIDPn9BnWopbsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDTyP991MXNtEfR79CrcAwbtqtnadLsSnDwab%2BjiCMNoEfTG7kyC0AgzZttdlx1bxcb435A3v4QAJXQ3z13jDw2teVWDQeOxvPMeiMcfJpw3HNvakuxdkrizv%2BnWTPoH4pagHoW1B5pcrk55LcKNuG4zsNykcohgru%2Bc6AuuRwcFsQ5EL%2FEpODtKYWRNdFIW4ZAcMpR4TLQCcelAy6%2FDOYadPYXXTEdjYb9FxwDkZMA3TVWu5fG84MJ%2FiRckl54U7foFTKkEpRc1g4mcZQ3b3VGjPu4x8BFPU2Vlsv3c0N4PE%2F2X5DP6aEXTBUuj9gOpj0o%2BLpx4IspMnzR6bZrSzqRA3WogfomCyYpyHugStLQo0HVWcAK5UCpflJsWbDEJAU2VfvLcACaJRJ23Q84RYHYFoJgqW3qluTyM7BdxMkllJDmHl87VcWXbivm2bmluuzQKvr%2FwZJxwIBMXtXyIhdFBCt4q5jsebCUeuBSLDp5%2BS1grYejdPpBqK83mvyzpTLOqM%2FxuUEy3YSfAqdVFoEEmyR2qoEaORuTOmlP5UrdD86nKf9FMXC1f%2FuQ7cyfIxR7Z%2FqcuvxYdSMpl71GPxFJuSz38125kPgWjUDXV3jeqptYvNghC3TgbVcL8%2FIsCdYSJU3wO%2BpI%2B6g%2B0MK7Ow8QGOqUBjyfx4Lg0a%2BwN6RG06YfadNFEZIIPZ9xMvoaW7EB3IB74a%2BrFuTbDfIJPfMN1A4pvIW6JlQRgunQCPEC3OfZcVS2HZ82D%2BenZ1yhatdJhCtK4bT5aAM%2F%2F6G0MbNJvWth9YqbUe5%2FKv9jbQ8Wd4Hxl7C2Oyr3qYPzOkoYPLZRaD%2B9Foz%2Bde22tNawnbIYIbX%2B0EX%2B%2F7adYCLkCmm9AFFJyb22cBgYG&X-Amz-Signature=b16a2fc89ce614bbce0431764a17753b7f0abf28f2b2dbf012a2df4824b7ad32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKEBRLDU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIHdS7YLagS%2FG1paLJSJJ4E4ZDaHwnooJiCwZs7BH9jIlAiAeixINXhyj27gRJkpAN7EMRmShXO6thyX1vORGHbBbBCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMQs5pd7V8raGJvHcOKtwD5dAXXTZLtgn1eX84OFD97Hx%2Fc7fQVLKCfAYXZIx%2FleSwpVZLtkxSuLmJjpVl%2BkmWi5e1nuoO4lQe%2FSfInJRkrFlyqovyhv46D709v7mNZt88MxtG8GVuIhi%2BXx2da9pfaUXbi7A%2B68bfcbCY2yfN9EKWk1f5knWhxy1F3Xfx6P0WrqLFOIlJZHG%2FrGEnWZM3ZgNyKyjFopVtUZTHCPfcNs5n%2FjVQRQELJlhDoVA42uXnsooqsRUvitAG4grglq0YOzUYv0b6pcOOOySjAvKyXAySHAw%2BwEirVZQQ8bYBGlOz%2FuKq3W3aucQnP2goOwsUBePvQQN00XohQa4jJj7FcUr1BZHnlfpW31JepltXI7QuVsKdpbxXloZ7AoLTTHSQl5svgt0hRWiizIssD%2FJ46rmyauMdoq86JAkQ79Pwu7TGDKy4Ze6vJmxBAAFq9B2fL2eVyucH%2FOdt%2F3TYy0F8R%2BiPIOGIJTzKL30p1DXEBJIPyhT6jPCaPwzdwHfzvUmbZqUQH53an1QjQUIF0uDZGc7MUmg%2FZq7dMD%2Br6TQuSxGdBIPa3Kz%2B1hAvvS3CdHu%2FKIhd5XlSRKOssv6hBbJIPIcXOSD4sOLtDUedg8OJWBh0DjN0eMuoYxa5NTgwms7DxAY6pgG7mPJ96HT1gBLKeeEi%2FisEQywTwlRdqOpuUpLtOksL4eGnM727U6ZsLAuuBxxdwFjeR6r%2FnCFrNqlngbNPjE8v6eTQUGtu0eEYJXxj7HBnZp218QrfAY7RARgaXd5Cej5W%2FjgydteRTl3nTBR1oRTrtsg668cU9M5EHO5JQyD8QRaMghn93l%2FYfTv%2FmtHkxVMl5jBMbaNTpx0ke%2BKzaC%2Bmn0hfKyOW&X-Amz-Signature=3d47280b72597683ed11ee31bacb8a627b379171508e7c442187e98448bfe984&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKEBRLDU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIHdS7YLagS%2FG1paLJSJJ4E4ZDaHwnooJiCwZs7BH9jIlAiAeixINXhyj27gRJkpAN7EMRmShXO6thyX1vORGHbBbBCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMQs5pd7V8raGJvHcOKtwD5dAXXTZLtgn1eX84OFD97Hx%2Fc7fQVLKCfAYXZIx%2FleSwpVZLtkxSuLmJjpVl%2BkmWi5e1nuoO4lQe%2FSfInJRkrFlyqovyhv46D709v7mNZt88MxtG8GVuIhi%2BXx2da9pfaUXbi7A%2B68bfcbCY2yfN9EKWk1f5knWhxy1F3Xfx6P0WrqLFOIlJZHG%2FrGEnWZM3ZgNyKyjFopVtUZTHCPfcNs5n%2FjVQRQELJlhDoVA42uXnsooqsRUvitAG4grglq0YOzUYv0b6pcOOOySjAvKyXAySHAw%2BwEirVZQQ8bYBGlOz%2FuKq3W3aucQnP2goOwsUBePvQQN00XohQa4jJj7FcUr1BZHnlfpW31JepltXI7QuVsKdpbxXloZ7AoLTTHSQl5svgt0hRWiizIssD%2FJ46rmyauMdoq86JAkQ79Pwu7TGDKy4Ze6vJmxBAAFq9B2fL2eVyucH%2FOdt%2F3TYy0F8R%2BiPIOGIJTzKL30p1DXEBJIPyhT6jPCaPwzdwHfzvUmbZqUQH53an1QjQUIF0uDZGc7MUmg%2FZq7dMD%2Br6TQuSxGdBIPa3Kz%2B1hAvvS3CdHu%2FKIhd5XlSRKOssv6hBbJIPIcXOSD4sOLtDUedg8OJWBh0DjN0eMuoYxa5NTgwms7DxAY6pgG7mPJ96HT1gBLKeeEi%2FisEQywTwlRdqOpuUpLtOksL4eGnM727U6ZsLAuuBxxdwFjeR6r%2FnCFrNqlngbNPjE8v6eTQUGtu0eEYJXxj7HBnZp218QrfAY7RARgaXd5Cej5W%2FjgydteRTl3nTBR1oRTrtsg668cU9M5EHO5JQyD8QRaMghn93l%2FYfTv%2FmtHkxVMl5jBMbaNTpx0ke%2BKzaC%2Bmn0hfKyOW&X-Amz-Signature=c02a6f0cd7b373055fd84711630b941ce0697a1a984de21314fc52f61fd49005&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKEBRLDU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIHdS7YLagS%2FG1paLJSJJ4E4ZDaHwnooJiCwZs7BH9jIlAiAeixINXhyj27gRJkpAN7EMRmShXO6thyX1vORGHbBbBCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMQs5pd7V8raGJvHcOKtwD5dAXXTZLtgn1eX84OFD97Hx%2Fc7fQVLKCfAYXZIx%2FleSwpVZLtkxSuLmJjpVl%2BkmWi5e1nuoO4lQe%2FSfInJRkrFlyqovyhv46D709v7mNZt88MxtG8GVuIhi%2BXx2da9pfaUXbi7A%2B68bfcbCY2yfN9EKWk1f5knWhxy1F3Xfx6P0WrqLFOIlJZHG%2FrGEnWZM3ZgNyKyjFopVtUZTHCPfcNs5n%2FjVQRQELJlhDoVA42uXnsooqsRUvitAG4grglq0YOzUYv0b6pcOOOySjAvKyXAySHAw%2BwEirVZQQ8bYBGlOz%2FuKq3W3aucQnP2goOwsUBePvQQN00XohQa4jJj7FcUr1BZHnlfpW31JepltXI7QuVsKdpbxXloZ7AoLTTHSQl5svgt0hRWiizIssD%2FJ46rmyauMdoq86JAkQ79Pwu7TGDKy4Ze6vJmxBAAFq9B2fL2eVyucH%2FOdt%2F3TYy0F8R%2BiPIOGIJTzKL30p1DXEBJIPyhT6jPCaPwzdwHfzvUmbZqUQH53an1QjQUIF0uDZGc7MUmg%2FZq7dMD%2Br6TQuSxGdBIPa3Kz%2B1hAvvS3CdHu%2FKIhd5XlSRKOssv6hBbJIPIcXOSD4sOLtDUedg8OJWBh0DjN0eMuoYxa5NTgwms7DxAY6pgG7mPJ96HT1gBLKeeEi%2FisEQywTwlRdqOpuUpLtOksL4eGnM727U6ZsLAuuBxxdwFjeR6r%2FnCFrNqlngbNPjE8v6eTQUGtu0eEYJXxj7HBnZp218QrfAY7RARgaXd5Cej5W%2FjgydteRTl3nTBR1oRTrtsg668cU9M5EHO5JQyD8QRaMghn93l%2FYfTv%2FmtHkxVMl5jBMbaNTpx0ke%2BKzaC%2Bmn0hfKyOW&X-Amz-Signature=66a9dd83e2da868817e329bf1b5a70d3210e0c99544d7a9ee610d0c324a1fd9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKEBRLDU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIHdS7YLagS%2FG1paLJSJJ4E4ZDaHwnooJiCwZs7BH9jIlAiAeixINXhyj27gRJkpAN7EMRmShXO6thyX1vORGHbBbBCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMQs5pd7V8raGJvHcOKtwD5dAXXTZLtgn1eX84OFD97Hx%2Fc7fQVLKCfAYXZIx%2FleSwpVZLtkxSuLmJjpVl%2BkmWi5e1nuoO4lQe%2FSfInJRkrFlyqovyhv46D709v7mNZt88MxtG8GVuIhi%2BXx2da9pfaUXbi7A%2B68bfcbCY2yfN9EKWk1f5knWhxy1F3Xfx6P0WrqLFOIlJZHG%2FrGEnWZM3ZgNyKyjFopVtUZTHCPfcNs5n%2FjVQRQELJlhDoVA42uXnsooqsRUvitAG4grglq0YOzUYv0b6pcOOOySjAvKyXAySHAw%2BwEirVZQQ8bYBGlOz%2FuKq3W3aucQnP2goOwsUBePvQQN00XohQa4jJj7FcUr1BZHnlfpW31JepltXI7QuVsKdpbxXloZ7AoLTTHSQl5svgt0hRWiizIssD%2FJ46rmyauMdoq86JAkQ79Pwu7TGDKy4Ze6vJmxBAAFq9B2fL2eVyucH%2FOdt%2F3TYy0F8R%2BiPIOGIJTzKL30p1DXEBJIPyhT6jPCaPwzdwHfzvUmbZqUQH53an1QjQUIF0uDZGc7MUmg%2FZq7dMD%2Br6TQuSxGdBIPa3Kz%2B1hAvvS3CdHu%2FKIhd5XlSRKOssv6hBbJIPIcXOSD4sOLtDUedg8OJWBh0DjN0eMuoYxa5NTgwms7DxAY6pgG7mPJ96HT1gBLKeeEi%2FisEQywTwlRdqOpuUpLtOksL4eGnM727U6ZsLAuuBxxdwFjeR6r%2FnCFrNqlngbNPjE8v6eTQUGtu0eEYJXxj7HBnZp218QrfAY7RARgaXd5Cej5W%2FjgydteRTl3nTBR1oRTrtsg668cU9M5EHO5JQyD8QRaMghn93l%2FYfTv%2FmtHkxVMl5jBMbaNTpx0ke%2BKzaC%2Bmn0hfKyOW&X-Amz-Signature=de3918b2db7b1bbfdd29f42c2ec6cbadfd4c6645396c6dec00b92d8158879db0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKEBRLDU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIHdS7YLagS%2FG1paLJSJJ4E4ZDaHwnooJiCwZs7BH9jIlAiAeixINXhyj27gRJkpAN7EMRmShXO6thyX1vORGHbBbBCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMQs5pd7V8raGJvHcOKtwD5dAXXTZLtgn1eX84OFD97Hx%2Fc7fQVLKCfAYXZIx%2FleSwpVZLtkxSuLmJjpVl%2BkmWi5e1nuoO4lQe%2FSfInJRkrFlyqovyhv46D709v7mNZt88MxtG8GVuIhi%2BXx2da9pfaUXbi7A%2B68bfcbCY2yfN9EKWk1f5knWhxy1F3Xfx6P0WrqLFOIlJZHG%2FrGEnWZM3ZgNyKyjFopVtUZTHCPfcNs5n%2FjVQRQELJlhDoVA42uXnsooqsRUvitAG4grglq0YOzUYv0b6pcOOOySjAvKyXAySHAw%2BwEirVZQQ8bYBGlOz%2FuKq3W3aucQnP2goOwsUBePvQQN00XohQa4jJj7FcUr1BZHnlfpW31JepltXI7QuVsKdpbxXloZ7AoLTTHSQl5svgt0hRWiizIssD%2FJ46rmyauMdoq86JAkQ79Pwu7TGDKy4Ze6vJmxBAAFq9B2fL2eVyucH%2FOdt%2F3TYy0F8R%2BiPIOGIJTzKL30p1DXEBJIPyhT6jPCaPwzdwHfzvUmbZqUQH53an1QjQUIF0uDZGc7MUmg%2FZq7dMD%2Br6TQuSxGdBIPa3Kz%2B1hAvvS3CdHu%2FKIhd5XlSRKOssv6hBbJIPIcXOSD4sOLtDUedg8OJWBh0DjN0eMuoYxa5NTgwms7DxAY6pgG7mPJ96HT1gBLKeeEi%2FisEQywTwlRdqOpuUpLtOksL4eGnM727U6ZsLAuuBxxdwFjeR6r%2FnCFrNqlngbNPjE8v6eTQUGtu0eEYJXxj7HBnZp218QrfAY7RARgaXd5Cej5W%2FjgydteRTl3nTBR1oRTrtsg668cU9M5EHO5JQyD8QRaMghn93l%2FYfTv%2FmtHkxVMl5jBMbaNTpx0ke%2BKzaC%2Bmn0hfKyOW&X-Amz-Signature=c47c9f5799ed4303187b9140f1ab8350f05eeb1102d13af373ed261c4fef75b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKEBRLDU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIHdS7YLagS%2FG1paLJSJJ4E4ZDaHwnooJiCwZs7BH9jIlAiAeixINXhyj27gRJkpAN7EMRmShXO6thyX1vORGHbBbBCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMQs5pd7V8raGJvHcOKtwD5dAXXTZLtgn1eX84OFD97Hx%2Fc7fQVLKCfAYXZIx%2FleSwpVZLtkxSuLmJjpVl%2BkmWi5e1nuoO4lQe%2FSfInJRkrFlyqovyhv46D709v7mNZt88MxtG8GVuIhi%2BXx2da9pfaUXbi7A%2B68bfcbCY2yfN9EKWk1f5knWhxy1F3Xfx6P0WrqLFOIlJZHG%2FrGEnWZM3ZgNyKyjFopVtUZTHCPfcNs5n%2FjVQRQELJlhDoVA42uXnsooqsRUvitAG4grglq0YOzUYv0b6pcOOOySjAvKyXAySHAw%2BwEirVZQQ8bYBGlOz%2FuKq3W3aucQnP2goOwsUBePvQQN00XohQa4jJj7FcUr1BZHnlfpW31JepltXI7QuVsKdpbxXloZ7AoLTTHSQl5svgt0hRWiizIssD%2FJ46rmyauMdoq86JAkQ79Pwu7TGDKy4Ze6vJmxBAAFq9B2fL2eVyucH%2FOdt%2F3TYy0F8R%2BiPIOGIJTzKL30p1DXEBJIPyhT6jPCaPwzdwHfzvUmbZqUQH53an1QjQUIF0uDZGc7MUmg%2FZq7dMD%2Br6TQuSxGdBIPa3Kz%2B1hAvvS3CdHu%2FKIhd5XlSRKOssv6hBbJIPIcXOSD4sOLtDUedg8OJWBh0DjN0eMuoYxa5NTgwms7DxAY6pgG7mPJ96HT1gBLKeeEi%2FisEQywTwlRdqOpuUpLtOksL4eGnM727U6ZsLAuuBxxdwFjeR6r%2FnCFrNqlngbNPjE8v6eTQUGtu0eEYJXxj7HBnZp218QrfAY7RARgaXd5Cej5W%2FjgydteRTl3nTBR1oRTrtsg668cU9M5EHO5JQyD8QRaMghn93l%2FYfTv%2FmtHkxVMl5jBMbaNTpx0ke%2BKzaC%2Bmn0hfKyOW&X-Amz-Signature=d8210cc9403c469578a042403b573a0f95235cf1a852e6f177b21d59935cf433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKEBRLDU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIHdS7YLagS%2FG1paLJSJJ4E4ZDaHwnooJiCwZs7BH9jIlAiAeixINXhyj27gRJkpAN7EMRmShXO6thyX1vORGHbBbBCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMQs5pd7V8raGJvHcOKtwD5dAXXTZLtgn1eX84OFD97Hx%2Fc7fQVLKCfAYXZIx%2FleSwpVZLtkxSuLmJjpVl%2BkmWi5e1nuoO4lQe%2FSfInJRkrFlyqovyhv46D709v7mNZt88MxtG8GVuIhi%2BXx2da9pfaUXbi7A%2B68bfcbCY2yfN9EKWk1f5knWhxy1F3Xfx6P0WrqLFOIlJZHG%2FrGEnWZM3ZgNyKyjFopVtUZTHCPfcNs5n%2FjVQRQELJlhDoVA42uXnsooqsRUvitAG4grglq0YOzUYv0b6pcOOOySjAvKyXAySHAw%2BwEirVZQQ8bYBGlOz%2FuKq3W3aucQnP2goOwsUBePvQQN00XohQa4jJj7FcUr1BZHnlfpW31JepltXI7QuVsKdpbxXloZ7AoLTTHSQl5svgt0hRWiizIssD%2FJ46rmyauMdoq86JAkQ79Pwu7TGDKy4Ze6vJmxBAAFq9B2fL2eVyucH%2FOdt%2F3TYy0F8R%2BiPIOGIJTzKL30p1DXEBJIPyhT6jPCaPwzdwHfzvUmbZqUQH53an1QjQUIF0uDZGc7MUmg%2FZq7dMD%2Br6TQuSxGdBIPa3Kz%2B1hAvvS3CdHu%2FKIhd5XlSRKOssv6hBbJIPIcXOSD4sOLtDUedg8OJWBh0DjN0eMuoYxa5NTgwms7DxAY6pgG7mPJ96HT1gBLKeeEi%2FisEQywTwlRdqOpuUpLtOksL4eGnM727U6ZsLAuuBxxdwFjeR6r%2FnCFrNqlngbNPjE8v6eTQUGtu0eEYJXxj7HBnZp218QrfAY7RARgaXd5Cej5W%2FjgydteRTl3nTBR1oRTrtsg668cU9M5EHO5JQyD8QRaMghn93l%2FYfTv%2FmtHkxVMl5jBMbaNTpx0ke%2BKzaC%2Bmn0hfKyOW&X-Amz-Signature=66a9dd83e2da868817e329bf1b5a70d3210e0c99544d7a9ee610d0c324a1fd9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKEBRLDU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIHdS7YLagS%2FG1paLJSJJ4E4ZDaHwnooJiCwZs7BH9jIlAiAeixINXhyj27gRJkpAN7EMRmShXO6thyX1vORGHbBbBCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMQs5pd7V8raGJvHcOKtwD5dAXXTZLtgn1eX84OFD97Hx%2Fc7fQVLKCfAYXZIx%2FleSwpVZLtkxSuLmJjpVl%2BkmWi5e1nuoO4lQe%2FSfInJRkrFlyqovyhv46D709v7mNZt88MxtG8GVuIhi%2BXx2da9pfaUXbi7A%2B68bfcbCY2yfN9EKWk1f5knWhxy1F3Xfx6P0WrqLFOIlJZHG%2FrGEnWZM3ZgNyKyjFopVtUZTHCPfcNs5n%2FjVQRQELJlhDoVA42uXnsooqsRUvitAG4grglq0YOzUYv0b6pcOOOySjAvKyXAySHAw%2BwEirVZQQ8bYBGlOz%2FuKq3W3aucQnP2goOwsUBePvQQN00XohQa4jJj7FcUr1BZHnlfpW31JepltXI7QuVsKdpbxXloZ7AoLTTHSQl5svgt0hRWiizIssD%2FJ46rmyauMdoq86JAkQ79Pwu7TGDKy4Ze6vJmxBAAFq9B2fL2eVyucH%2FOdt%2F3TYy0F8R%2BiPIOGIJTzKL30p1DXEBJIPyhT6jPCaPwzdwHfzvUmbZqUQH53an1QjQUIF0uDZGc7MUmg%2FZq7dMD%2Br6TQuSxGdBIPa3Kz%2B1hAvvS3CdHu%2FKIhd5XlSRKOssv6hBbJIPIcXOSD4sOLtDUedg8OJWBh0DjN0eMuoYxa5NTgwms7DxAY6pgG7mPJ96HT1gBLKeeEi%2FisEQywTwlRdqOpuUpLtOksL4eGnM727U6ZsLAuuBxxdwFjeR6r%2FnCFrNqlngbNPjE8v6eTQUGtu0eEYJXxj7HBnZp218QrfAY7RARgaXd5Cej5W%2FjgydteRTl3nTBR1oRTrtsg668cU9M5EHO5JQyD8QRaMghn93l%2FYfTv%2FmtHkxVMl5jBMbaNTpx0ke%2BKzaC%2Bmn0hfKyOW&X-Amz-Signature=2fb2e362a2b159dd77c7d89f77c99b220a79470610917e5b62227e31516188d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKEBRLDU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIHdS7YLagS%2FG1paLJSJJ4E4ZDaHwnooJiCwZs7BH9jIlAiAeixINXhyj27gRJkpAN7EMRmShXO6thyX1vORGHbBbBCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMQs5pd7V8raGJvHcOKtwD5dAXXTZLtgn1eX84OFD97Hx%2Fc7fQVLKCfAYXZIx%2FleSwpVZLtkxSuLmJjpVl%2BkmWi5e1nuoO4lQe%2FSfInJRkrFlyqovyhv46D709v7mNZt88MxtG8GVuIhi%2BXx2da9pfaUXbi7A%2B68bfcbCY2yfN9EKWk1f5knWhxy1F3Xfx6P0WrqLFOIlJZHG%2FrGEnWZM3ZgNyKyjFopVtUZTHCPfcNs5n%2FjVQRQELJlhDoVA42uXnsooqsRUvitAG4grglq0YOzUYv0b6pcOOOySjAvKyXAySHAw%2BwEirVZQQ8bYBGlOz%2FuKq3W3aucQnP2goOwsUBePvQQN00XohQa4jJj7FcUr1BZHnlfpW31JepltXI7QuVsKdpbxXloZ7AoLTTHSQl5svgt0hRWiizIssD%2FJ46rmyauMdoq86JAkQ79Pwu7TGDKy4Ze6vJmxBAAFq9B2fL2eVyucH%2FOdt%2F3TYy0F8R%2BiPIOGIJTzKL30p1DXEBJIPyhT6jPCaPwzdwHfzvUmbZqUQH53an1QjQUIF0uDZGc7MUmg%2FZq7dMD%2Br6TQuSxGdBIPa3Kz%2B1hAvvS3CdHu%2FKIhd5XlSRKOssv6hBbJIPIcXOSD4sOLtDUedg8OJWBh0DjN0eMuoYxa5NTgwms7DxAY6pgG7mPJ96HT1gBLKeeEi%2FisEQywTwlRdqOpuUpLtOksL4eGnM727U6ZsLAuuBxxdwFjeR6r%2FnCFrNqlngbNPjE8v6eTQUGtu0eEYJXxj7HBnZp218QrfAY7RARgaXd5Cej5W%2FjgydteRTl3nTBR1oRTrtsg668cU9M5EHO5JQyD8QRaMghn93l%2FYfTv%2FmtHkxVMl5jBMbaNTpx0ke%2BKzaC%2Bmn0hfKyOW&X-Amz-Signature=ca8531c78402fda67df2884d2697d091ee1a69494581d62e5a57c7b32e8231c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKEBRLDU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIHdS7YLagS%2FG1paLJSJJ4E4ZDaHwnooJiCwZs7BH9jIlAiAeixINXhyj27gRJkpAN7EMRmShXO6thyX1vORGHbBbBCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMQs5pd7V8raGJvHcOKtwD5dAXXTZLtgn1eX84OFD97Hx%2Fc7fQVLKCfAYXZIx%2FleSwpVZLtkxSuLmJjpVl%2BkmWi5e1nuoO4lQe%2FSfInJRkrFlyqovyhv46D709v7mNZt88MxtG8GVuIhi%2BXx2da9pfaUXbi7A%2B68bfcbCY2yfN9EKWk1f5knWhxy1F3Xfx6P0WrqLFOIlJZHG%2FrGEnWZM3ZgNyKyjFopVtUZTHCPfcNs5n%2FjVQRQELJlhDoVA42uXnsooqsRUvitAG4grglq0YOzUYv0b6pcOOOySjAvKyXAySHAw%2BwEirVZQQ8bYBGlOz%2FuKq3W3aucQnP2goOwsUBePvQQN00XohQa4jJj7FcUr1BZHnlfpW31JepltXI7QuVsKdpbxXloZ7AoLTTHSQl5svgt0hRWiizIssD%2FJ46rmyauMdoq86JAkQ79Pwu7TGDKy4Ze6vJmxBAAFq9B2fL2eVyucH%2FOdt%2F3TYy0F8R%2BiPIOGIJTzKL30p1DXEBJIPyhT6jPCaPwzdwHfzvUmbZqUQH53an1QjQUIF0uDZGc7MUmg%2FZq7dMD%2Br6TQuSxGdBIPa3Kz%2B1hAvvS3CdHu%2FKIhd5XlSRKOssv6hBbJIPIcXOSD4sOLtDUedg8OJWBh0DjN0eMuoYxa5NTgwms7DxAY6pgG7mPJ96HT1gBLKeeEi%2FisEQywTwlRdqOpuUpLtOksL4eGnM727U6ZsLAuuBxxdwFjeR6r%2FnCFrNqlngbNPjE8v6eTQUGtu0eEYJXxj7HBnZp218QrfAY7RARgaXd5Cej5W%2FjgydteRTl3nTBR1oRTrtsg668cU9M5EHO5JQyD8QRaMghn93l%2FYfTv%2FmtHkxVMl5jBMbaNTpx0ke%2BKzaC%2Bmn0hfKyOW&X-Amz-Signature=148c373441a5cdc52ea2e414e90da964b85c671b4735cdef6fef99f4c2104a79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
