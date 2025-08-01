---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-01T18:13:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-01T18:13:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G35DEHG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANFfdmbDDR0UytG4ttotUup4fA3GXnAxrlR3VMbtyLPAiEA4yVRqWQ8VnwhauYgM74B%2FFUDApvWIXDSy5I%2F9R4NEHQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZ0Fd%2B00sHU6EEN%2BSrcA4Yh9ldjMJWpu0J0Wkb3Jmudll9ZlAt2bgQzmItNVU00HDDxin8s%2BMbSOMDQaCtXyzfSkc80UZIHauQp38yNJIwdmY%2F79DXukGz3BkDqfdZB4vPocA6D8V%2BnVA3jrg37uwyLvDVRUr2xfboIgeira7%2FaSUgSEwSwiEbbnQ7NbPEFz2m0oUitl4%2BKQabaiSnB2uOQP5AR%2BS8NJugQr%2Bke6ZwWLQPCU5Nd1nKRi0dE1LND6Rle2o40Gu1GudY9%2BiAzIeJuEvKdjjePbxyUI3JSmueHZYibX%2FPOjgCuZxw%2F%2FFzQkFUgzAFJRrfYN8MTBFPSX4cz6ZcSbtW6%2FZkbUcsYQbMCIcDCpxEJ2zlfgjwuDtK9ua8%2Fqo0nVg4LwoNbkeDaOCUMDVayb0C%2F3ux0berwfY9IzKgq6hFSfU1BxkgmC%2FnEoyq3oFyZB7RgZvHBBotBev3G8HhRbWlqIu7yQzkpn%2B%2BzPEaxWr4rdtOKwCKpZIcGIWjRwGaWyfLcd%2BePxbKvfkjWm%2F2ba72M18dolvuDNpaY33Y%2BJT%2FMFo5rVEMS60XlFHs%2BTq5zse7j%2FgmDfXIpaTHoNkFe8KhySn59o2EqN%2FgFp6AUJd4x3nfSRjkKs9OyXo476dMrl%2BtBxxxqMPv6s8QGOqUBPGdBnmj1TkOnYW0xt1lZ8maE%2BKrNY8aB6pfwotoDpfqOpL4HqezVlqQ5rCDgYsSbeT6DnnFo9YdSYdlziIS%2BtPMn61GWvX5ZMYaELpkKHQRVvnBHsFlFcxQ8ktGDxF%2B2y4Xpv4gvOP3DOlfiC62UKp%2FuglnjJkHoLEGOe8Mov1DFBYhsKDFA1HnyzMNAG%2FC9ikGwuYRq3zxglpW0TqRDBsu6KTME&X-Amz-Signature=5f5faa86d466fdd323ae796a6d51504654415048b67067d5917b251ff2e37cd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G35DEHG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANFfdmbDDR0UytG4ttotUup4fA3GXnAxrlR3VMbtyLPAiEA4yVRqWQ8VnwhauYgM74B%2FFUDApvWIXDSy5I%2F9R4NEHQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZ0Fd%2B00sHU6EEN%2BSrcA4Yh9ldjMJWpu0J0Wkb3Jmudll9ZlAt2bgQzmItNVU00HDDxin8s%2BMbSOMDQaCtXyzfSkc80UZIHauQp38yNJIwdmY%2F79DXukGz3BkDqfdZB4vPocA6D8V%2BnVA3jrg37uwyLvDVRUr2xfboIgeira7%2FaSUgSEwSwiEbbnQ7NbPEFz2m0oUitl4%2BKQabaiSnB2uOQP5AR%2BS8NJugQr%2Bke6ZwWLQPCU5Nd1nKRi0dE1LND6Rle2o40Gu1GudY9%2BiAzIeJuEvKdjjePbxyUI3JSmueHZYibX%2FPOjgCuZxw%2F%2FFzQkFUgzAFJRrfYN8MTBFPSX4cz6ZcSbtW6%2FZkbUcsYQbMCIcDCpxEJ2zlfgjwuDtK9ua8%2Fqo0nVg4LwoNbkeDaOCUMDVayb0C%2F3ux0berwfY9IzKgq6hFSfU1BxkgmC%2FnEoyq3oFyZB7RgZvHBBotBev3G8HhRbWlqIu7yQzkpn%2B%2BzPEaxWr4rdtOKwCKpZIcGIWjRwGaWyfLcd%2BePxbKvfkjWm%2F2ba72M18dolvuDNpaY33Y%2BJT%2FMFo5rVEMS60XlFHs%2BTq5zse7j%2FgmDfXIpaTHoNkFe8KhySn59o2EqN%2FgFp6AUJd4x3nfSRjkKs9OyXo476dMrl%2BtBxxxqMPv6s8QGOqUBPGdBnmj1TkOnYW0xt1lZ8maE%2BKrNY8aB6pfwotoDpfqOpL4HqezVlqQ5rCDgYsSbeT6DnnFo9YdSYdlziIS%2BtPMn61GWvX5ZMYaELpkKHQRVvnBHsFlFcxQ8ktGDxF%2B2y4Xpv4gvOP3DOlfiC62UKp%2FuglnjJkHoLEGOe8Mov1DFBYhsKDFA1HnyzMNAG%2FC9ikGwuYRq3zxglpW0TqRDBsu6KTME&X-Amz-Signature=dec679c3f48752a13471a2cfefe3765d739e3b8c232424b3b95adbed2df21c92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G35DEHG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANFfdmbDDR0UytG4ttotUup4fA3GXnAxrlR3VMbtyLPAiEA4yVRqWQ8VnwhauYgM74B%2FFUDApvWIXDSy5I%2F9R4NEHQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZ0Fd%2B00sHU6EEN%2BSrcA4Yh9ldjMJWpu0J0Wkb3Jmudll9ZlAt2bgQzmItNVU00HDDxin8s%2BMbSOMDQaCtXyzfSkc80UZIHauQp38yNJIwdmY%2F79DXukGz3BkDqfdZB4vPocA6D8V%2BnVA3jrg37uwyLvDVRUr2xfboIgeira7%2FaSUgSEwSwiEbbnQ7NbPEFz2m0oUitl4%2BKQabaiSnB2uOQP5AR%2BS8NJugQr%2Bke6ZwWLQPCU5Nd1nKRi0dE1LND6Rle2o40Gu1GudY9%2BiAzIeJuEvKdjjePbxyUI3JSmueHZYibX%2FPOjgCuZxw%2F%2FFzQkFUgzAFJRrfYN8MTBFPSX4cz6ZcSbtW6%2FZkbUcsYQbMCIcDCpxEJ2zlfgjwuDtK9ua8%2Fqo0nVg4LwoNbkeDaOCUMDVayb0C%2F3ux0berwfY9IzKgq6hFSfU1BxkgmC%2FnEoyq3oFyZB7RgZvHBBotBev3G8HhRbWlqIu7yQzkpn%2B%2BzPEaxWr4rdtOKwCKpZIcGIWjRwGaWyfLcd%2BePxbKvfkjWm%2F2ba72M18dolvuDNpaY33Y%2BJT%2FMFo5rVEMS60XlFHs%2BTq5zse7j%2FgmDfXIpaTHoNkFe8KhySn59o2EqN%2FgFp6AUJd4x3nfSRjkKs9OyXo476dMrl%2BtBxxxqMPv6s8QGOqUBPGdBnmj1TkOnYW0xt1lZ8maE%2BKrNY8aB6pfwotoDpfqOpL4HqezVlqQ5rCDgYsSbeT6DnnFo9YdSYdlziIS%2BtPMn61GWvX5ZMYaELpkKHQRVvnBHsFlFcxQ8ktGDxF%2B2y4Xpv4gvOP3DOlfiC62UKp%2FuglnjJkHoLEGOe8Mov1DFBYhsKDFA1HnyzMNAG%2FC9ikGwuYRq3zxglpW0TqRDBsu6KTME&X-Amz-Signature=b11ce03ad9c044ea5b13b75468e03732944fea4d00d89d2c06b2bd70b3ab4c39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G35DEHG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANFfdmbDDR0UytG4ttotUup4fA3GXnAxrlR3VMbtyLPAiEA4yVRqWQ8VnwhauYgM74B%2FFUDApvWIXDSy5I%2F9R4NEHQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZ0Fd%2B00sHU6EEN%2BSrcA4Yh9ldjMJWpu0J0Wkb3Jmudll9ZlAt2bgQzmItNVU00HDDxin8s%2BMbSOMDQaCtXyzfSkc80UZIHauQp38yNJIwdmY%2F79DXukGz3BkDqfdZB4vPocA6D8V%2BnVA3jrg37uwyLvDVRUr2xfboIgeira7%2FaSUgSEwSwiEbbnQ7NbPEFz2m0oUitl4%2BKQabaiSnB2uOQP5AR%2BS8NJugQr%2Bke6ZwWLQPCU5Nd1nKRi0dE1LND6Rle2o40Gu1GudY9%2BiAzIeJuEvKdjjePbxyUI3JSmueHZYibX%2FPOjgCuZxw%2F%2FFzQkFUgzAFJRrfYN8MTBFPSX4cz6ZcSbtW6%2FZkbUcsYQbMCIcDCpxEJ2zlfgjwuDtK9ua8%2Fqo0nVg4LwoNbkeDaOCUMDVayb0C%2F3ux0berwfY9IzKgq6hFSfU1BxkgmC%2FnEoyq3oFyZB7RgZvHBBotBev3G8HhRbWlqIu7yQzkpn%2B%2BzPEaxWr4rdtOKwCKpZIcGIWjRwGaWyfLcd%2BePxbKvfkjWm%2F2ba72M18dolvuDNpaY33Y%2BJT%2FMFo5rVEMS60XlFHs%2BTq5zse7j%2FgmDfXIpaTHoNkFe8KhySn59o2EqN%2FgFp6AUJd4x3nfSRjkKs9OyXo476dMrl%2BtBxxxqMPv6s8QGOqUBPGdBnmj1TkOnYW0xt1lZ8maE%2BKrNY8aB6pfwotoDpfqOpL4HqezVlqQ5rCDgYsSbeT6DnnFo9YdSYdlziIS%2BtPMn61GWvX5ZMYaELpkKHQRVvnBHsFlFcxQ8ktGDxF%2B2y4Xpv4gvOP3DOlfiC62UKp%2FuglnjJkHoLEGOe8Mov1DFBYhsKDFA1HnyzMNAG%2FC9ikGwuYRq3zxglpW0TqRDBsu6KTME&X-Amz-Signature=32839b8b7f8c7e2104421b0a4fa0cc57f56b47d814e267aea9ac0b829331026d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G35DEHG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANFfdmbDDR0UytG4ttotUup4fA3GXnAxrlR3VMbtyLPAiEA4yVRqWQ8VnwhauYgM74B%2FFUDApvWIXDSy5I%2F9R4NEHQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZ0Fd%2B00sHU6EEN%2BSrcA4Yh9ldjMJWpu0J0Wkb3Jmudll9ZlAt2bgQzmItNVU00HDDxin8s%2BMbSOMDQaCtXyzfSkc80UZIHauQp38yNJIwdmY%2F79DXukGz3BkDqfdZB4vPocA6D8V%2BnVA3jrg37uwyLvDVRUr2xfboIgeira7%2FaSUgSEwSwiEbbnQ7NbPEFz2m0oUitl4%2BKQabaiSnB2uOQP5AR%2BS8NJugQr%2Bke6ZwWLQPCU5Nd1nKRi0dE1LND6Rle2o40Gu1GudY9%2BiAzIeJuEvKdjjePbxyUI3JSmueHZYibX%2FPOjgCuZxw%2F%2FFzQkFUgzAFJRrfYN8MTBFPSX4cz6ZcSbtW6%2FZkbUcsYQbMCIcDCpxEJ2zlfgjwuDtK9ua8%2Fqo0nVg4LwoNbkeDaOCUMDVayb0C%2F3ux0berwfY9IzKgq6hFSfU1BxkgmC%2FnEoyq3oFyZB7RgZvHBBotBev3G8HhRbWlqIu7yQzkpn%2B%2BzPEaxWr4rdtOKwCKpZIcGIWjRwGaWyfLcd%2BePxbKvfkjWm%2F2ba72M18dolvuDNpaY33Y%2BJT%2FMFo5rVEMS60XlFHs%2BTq5zse7j%2FgmDfXIpaTHoNkFe8KhySn59o2EqN%2FgFp6AUJd4x3nfSRjkKs9OyXo476dMrl%2BtBxxxqMPv6s8QGOqUBPGdBnmj1TkOnYW0xt1lZ8maE%2BKrNY8aB6pfwotoDpfqOpL4HqezVlqQ5rCDgYsSbeT6DnnFo9YdSYdlziIS%2BtPMn61GWvX5ZMYaELpkKHQRVvnBHsFlFcxQ8ktGDxF%2B2y4Xpv4gvOP3DOlfiC62UKp%2FuglnjJkHoLEGOe8Mov1DFBYhsKDFA1HnyzMNAG%2FC9ikGwuYRq3zxglpW0TqRDBsu6KTME&X-Amz-Signature=5109be7bc2931686acc457d759dd438802f8d24deda5f38e711108ae4db9f9c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G35DEHG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANFfdmbDDR0UytG4ttotUup4fA3GXnAxrlR3VMbtyLPAiEA4yVRqWQ8VnwhauYgM74B%2FFUDApvWIXDSy5I%2F9R4NEHQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZ0Fd%2B00sHU6EEN%2BSrcA4Yh9ldjMJWpu0J0Wkb3Jmudll9ZlAt2bgQzmItNVU00HDDxin8s%2BMbSOMDQaCtXyzfSkc80UZIHauQp38yNJIwdmY%2F79DXukGz3BkDqfdZB4vPocA6D8V%2BnVA3jrg37uwyLvDVRUr2xfboIgeira7%2FaSUgSEwSwiEbbnQ7NbPEFz2m0oUitl4%2BKQabaiSnB2uOQP5AR%2BS8NJugQr%2Bke6ZwWLQPCU5Nd1nKRi0dE1LND6Rle2o40Gu1GudY9%2BiAzIeJuEvKdjjePbxyUI3JSmueHZYibX%2FPOjgCuZxw%2F%2FFzQkFUgzAFJRrfYN8MTBFPSX4cz6ZcSbtW6%2FZkbUcsYQbMCIcDCpxEJ2zlfgjwuDtK9ua8%2Fqo0nVg4LwoNbkeDaOCUMDVayb0C%2F3ux0berwfY9IzKgq6hFSfU1BxkgmC%2FnEoyq3oFyZB7RgZvHBBotBev3G8HhRbWlqIu7yQzkpn%2B%2BzPEaxWr4rdtOKwCKpZIcGIWjRwGaWyfLcd%2BePxbKvfkjWm%2F2ba72M18dolvuDNpaY33Y%2BJT%2FMFo5rVEMS60XlFHs%2BTq5zse7j%2FgmDfXIpaTHoNkFe8KhySn59o2EqN%2FgFp6AUJd4x3nfSRjkKs9OyXo476dMrl%2BtBxxxqMPv6s8QGOqUBPGdBnmj1TkOnYW0xt1lZ8maE%2BKrNY8aB6pfwotoDpfqOpL4HqezVlqQ5rCDgYsSbeT6DnnFo9YdSYdlziIS%2BtPMn61GWvX5ZMYaELpkKHQRVvnBHsFlFcxQ8ktGDxF%2B2y4Xpv4gvOP3DOlfiC62UKp%2FuglnjJkHoLEGOe8Mov1DFBYhsKDFA1HnyzMNAG%2FC9ikGwuYRq3zxglpW0TqRDBsu6KTME&X-Amz-Signature=10a341d47303af97de6e3f02693088cb388e4cadae349ad2d0533e5b268f426e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G35DEHG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANFfdmbDDR0UytG4ttotUup4fA3GXnAxrlR3VMbtyLPAiEA4yVRqWQ8VnwhauYgM74B%2FFUDApvWIXDSy5I%2F9R4NEHQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZ0Fd%2B00sHU6EEN%2BSrcA4Yh9ldjMJWpu0J0Wkb3Jmudll9ZlAt2bgQzmItNVU00HDDxin8s%2BMbSOMDQaCtXyzfSkc80UZIHauQp38yNJIwdmY%2F79DXukGz3BkDqfdZB4vPocA6D8V%2BnVA3jrg37uwyLvDVRUr2xfboIgeira7%2FaSUgSEwSwiEbbnQ7NbPEFz2m0oUitl4%2BKQabaiSnB2uOQP5AR%2BS8NJugQr%2Bke6ZwWLQPCU5Nd1nKRi0dE1LND6Rle2o40Gu1GudY9%2BiAzIeJuEvKdjjePbxyUI3JSmueHZYibX%2FPOjgCuZxw%2F%2FFzQkFUgzAFJRrfYN8MTBFPSX4cz6ZcSbtW6%2FZkbUcsYQbMCIcDCpxEJ2zlfgjwuDtK9ua8%2Fqo0nVg4LwoNbkeDaOCUMDVayb0C%2F3ux0berwfY9IzKgq6hFSfU1BxkgmC%2FnEoyq3oFyZB7RgZvHBBotBev3G8HhRbWlqIu7yQzkpn%2B%2BzPEaxWr4rdtOKwCKpZIcGIWjRwGaWyfLcd%2BePxbKvfkjWm%2F2ba72M18dolvuDNpaY33Y%2BJT%2FMFo5rVEMS60XlFHs%2BTq5zse7j%2FgmDfXIpaTHoNkFe8KhySn59o2EqN%2FgFp6AUJd4x3nfSRjkKs9OyXo476dMrl%2BtBxxxqMPv6s8QGOqUBPGdBnmj1TkOnYW0xt1lZ8maE%2BKrNY8aB6pfwotoDpfqOpL4HqezVlqQ5rCDgYsSbeT6DnnFo9YdSYdlziIS%2BtPMn61GWvX5ZMYaELpkKHQRVvnBHsFlFcxQ8ktGDxF%2B2y4Xpv4gvOP3DOlfiC62UKp%2FuglnjJkHoLEGOe8Mov1DFBYhsKDFA1HnyzMNAG%2FC9ikGwuYRq3zxglpW0TqRDBsu6KTME&X-Amz-Signature=e30302b3e1304a2d6d1d85404a3ee012566d41cacb5845462a042aa57fd88b07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G35DEHG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANFfdmbDDR0UytG4ttotUup4fA3GXnAxrlR3VMbtyLPAiEA4yVRqWQ8VnwhauYgM74B%2FFUDApvWIXDSy5I%2F9R4NEHQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZ0Fd%2B00sHU6EEN%2BSrcA4Yh9ldjMJWpu0J0Wkb3Jmudll9ZlAt2bgQzmItNVU00HDDxin8s%2BMbSOMDQaCtXyzfSkc80UZIHauQp38yNJIwdmY%2F79DXukGz3BkDqfdZB4vPocA6D8V%2BnVA3jrg37uwyLvDVRUr2xfboIgeira7%2FaSUgSEwSwiEbbnQ7NbPEFz2m0oUitl4%2BKQabaiSnB2uOQP5AR%2BS8NJugQr%2Bke6ZwWLQPCU5Nd1nKRi0dE1LND6Rle2o40Gu1GudY9%2BiAzIeJuEvKdjjePbxyUI3JSmueHZYibX%2FPOjgCuZxw%2F%2FFzQkFUgzAFJRrfYN8MTBFPSX4cz6ZcSbtW6%2FZkbUcsYQbMCIcDCpxEJ2zlfgjwuDtK9ua8%2Fqo0nVg4LwoNbkeDaOCUMDVayb0C%2F3ux0berwfY9IzKgq6hFSfU1BxkgmC%2FnEoyq3oFyZB7RgZvHBBotBev3G8HhRbWlqIu7yQzkpn%2B%2BzPEaxWr4rdtOKwCKpZIcGIWjRwGaWyfLcd%2BePxbKvfkjWm%2F2ba72M18dolvuDNpaY33Y%2BJT%2FMFo5rVEMS60XlFHs%2BTq5zse7j%2FgmDfXIpaTHoNkFe8KhySn59o2EqN%2FgFp6AUJd4x3nfSRjkKs9OyXo476dMrl%2BtBxxxqMPv6s8QGOqUBPGdBnmj1TkOnYW0xt1lZ8maE%2BKrNY8aB6pfwotoDpfqOpL4HqezVlqQ5rCDgYsSbeT6DnnFo9YdSYdlziIS%2BtPMn61GWvX5ZMYaELpkKHQRVvnBHsFlFcxQ8ktGDxF%2B2y4Xpv4gvOP3DOlfiC62UKp%2FuglnjJkHoLEGOe8Mov1DFBYhsKDFA1HnyzMNAG%2FC9ikGwuYRq3zxglpW0TqRDBsu6KTME&X-Amz-Signature=2496eaf5a8fe91408a3e2af1d5efc9132aaac2e96ad67c1cfabfd8df2add2559&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G35DEHG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANFfdmbDDR0UytG4ttotUup4fA3GXnAxrlR3VMbtyLPAiEA4yVRqWQ8VnwhauYgM74B%2FFUDApvWIXDSy5I%2F9R4NEHQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZ0Fd%2B00sHU6EEN%2BSrcA4Yh9ldjMJWpu0J0Wkb3Jmudll9ZlAt2bgQzmItNVU00HDDxin8s%2BMbSOMDQaCtXyzfSkc80UZIHauQp38yNJIwdmY%2F79DXukGz3BkDqfdZB4vPocA6D8V%2BnVA3jrg37uwyLvDVRUr2xfboIgeira7%2FaSUgSEwSwiEbbnQ7NbPEFz2m0oUitl4%2BKQabaiSnB2uOQP5AR%2BS8NJugQr%2Bke6ZwWLQPCU5Nd1nKRi0dE1LND6Rle2o40Gu1GudY9%2BiAzIeJuEvKdjjePbxyUI3JSmueHZYibX%2FPOjgCuZxw%2F%2FFzQkFUgzAFJRrfYN8MTBFPSX4cz6ZcSbtW6%2FZkbUcsYQbMCIcDCpxEJ2zlfgjwuDtK9ua8%2Fqo0nVg4LwoNbkeDaOCUMDVayb0C%2F3ux0berwfY9IzKgq6hFSfU1BxkgmC%2FnEoyq3oFyZB7RgZvHBBotBev3G8HhRbWlqIu7yQzkpn%2B%2BzPEaxWr4rdtOKwCKpZIcGIWjRwGaWyfLcd%2BePxbKvfkjWm%2F2ba72M18dolvuDNpaY33Y%2BJT%2FMFo5rVEMS60XlFHs%2BTq5zse7j%2FgmDfXIpaTHoNkFe8KhySn59o2EqN%2FgFp6AUJd4x3nfSRjkKs9OyXo476dMrl%2BtBxxxqMPv6s8QGOqUBPGdBnmj1TkOnYW0xt1lZ8maE%2BKrNY8aB6pfwotoDpfqOpL4HqezVlqQ5rCDgYsSbeT6DnnFo9YdSYdlziIS%2BtPMn61GWvX5ZMYaELpkKHQRVvnBHsFlFcxQ8ktGDxF%2B2y4Xpv4gvOP3DOlfiC62UKp%2FuglnjJkHoLEGOe8Mov1DFBYhsKDFA1HnyzMNAG%2FC9ikGwuYRq3zxglpW0TqRDBsu6KTME&X-Amz-Signature=96ef89f46db90a20a1abf363bdb08e7a1616c7caa752a8ccc438df3a1b8164c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

urdf can get complex to look at so I will be putting a “_scratch”_ like equivalent next to each example I put down.

To

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G35DEHG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANFfdmbDDR0UytG4ttotUup4fA3GXnAxrlR3VMbtyLPAiEA4yVRqWQ8VnwhauYgM74B%2FFUDApvWIXDSy5I%2F9R4NEHQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZ0Fd%2B00sHU6EEN%2BSrcA4Yh9ldjMJWpu0J0Wkb3Jmudll9ZlAt2bgQzmItNVU00HDDxin8s%2BMbSOMDQaCtXyzfSkc80UZIHauQp38yNJIwdmY%2F79DXukGz3BkDqfdZB4vPocA6D8V%2BnVA3jrg37uwyLvDVRUr2xfboIgeira7%2FaSUgSEwSwiEbbnQ7NbPEFz2m0oUitl4%2BKQabaiSnB2uOQP5AR%2BS8NJugQr%2Bke6ZwWLQPCU5Nd1nKRi0dE1LND6Rle2o40Gu1GudY9%2BiAzIeJuEvKdjjePbxyUI3JSmueHZYibX%2FPOjgCuZxw%2F%2FFzQkFUgzAFJRrfYN8MTBFPSX4cz6ZcSbtW6%2FZkbUcsYQbMCIcDCpxEJ2zlfgjwuDtK9ua8%2Fqo0nVg4LwoNbkeDaOCUMDVayb0C%2F3ux0berwfY9IzKgq6hFSfU1BxkgmC%2FnEoyq3oFyZB7RgZvHBBotBev3G8HhRbWlqIu7yQzkpn%2B%2BzPEaxWr4rdtOKwCKpZIcGIWjRwGaWyfLcd%2BePxbKvfkjWm%2F2ba72M18dolvuDNpaY33Y%2BJT%2FMFo5rVEMS60XlFHs%2BTq5zse7j%2FgmDfXIpaTHoNkFe8KhySn59o2EqN%2FgFp6AUJd4x3nfSRjkKs9OyXo476dMrl%2BtBxxxqMPv6s8QGOqUBPGdBnmj1TkOnYW0xt1lZ8maE%2BKrNY8aB6pfwotoDpfqOpL4HqezVlqQ5rCDgYsSbeT6DnnFo9YdSYdlziIS%2BtPMn61GWvX5ZMYaELpkKHQRVvnBHsFlFcxQ8ktGDxF%2B2y4Xpv4gvOP3DOlfiC62UKp%2FuglnjJkHoLEGOe8Mov1DFBYhsKDFA1HnyzMNAG%2FC9ikGwuYRq3zxglpW0TqRDBsu6KTME&X-Amz-Signature=2a6a76a61d654f89f13ac262640e17f17c5c936188e3910593ba3f5bf1657e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

Types of blocks in URDF:

- robot
- vars/Properties
- macros
	- inertial
		- origin
		- mass
		- inertia
- link:
	- visual
		- geometry
			- box
			- cylinder
			- sphere
		- material
			- color
	- collision
		- ~~origin~~
		- geometry
		- friction
	- xacro:box_inertia
	- xacro:cylinder_inertia
	- xacro:sphere_inertia
- joint:
	- parent
	- child
	- ~~origin~~
	- axis
- xacro:wheel

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
        <surface><friction><ode>
          <mu>1.0</mu>
          <mu2>1.0</mu2>
          <fdir1>1 0 0</fdir1>
        </ode></friction></surface>
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

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G35DEHG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANFfdmbDDR0UytG4ttotUup4fA3GXnAxrlR3VMbtyLPAiEA4yVRqWQ8VnwhauYgM74B%2FFUDApvWIXDSy5I%2F9R4NEHQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZ0Fd%2B00sHU6EEN%2BSrcA4Yh9ldjMJWpu0J0Wkb3Jmudll9ZlAt2bgQzmItNVU00HDDxin8s%2BMbSOMDQaCtXyzfSkc80UZIHauQp38yNJIwdmY%2F79DXukGz3BkDqfdZB4vPocA6D8V%2BnVA3jrg37uwyLvDVRUr2xfboIgeira7%2FaSUgSEwSwiEbbnQ7NbPEFz2m0oUitl4%2BKQabaiSnB2uOQP5AR%2BS8NJugQr%2Bke6ZwWLQPCU5Nd1nKRi0dE1LND6Rle2o40Gu1GudY9%2BiAzIeJuEvKdjjePbxyUI3JSmueHZYibX%2FPOjgCuZxw%2F%2FFzQkFUgzAFJRrfYN8MTBFPSX4cz6ZcSbtW6%2FZkbUcsYQbMCIcDCpxEJ2zlfgjwuDtK9ua8%2Fqo0nVg4LwoNbkeDaOCUMDVayb0C%2F3ux0berwfY9IzKgq6hFSfU1BxkgmC%2FnEoyq3oFyZB7RgZvHBBotBev3G8HhRbWlqIu7yQzkpn%2B%2BzPEaxWr4rdtOKwCKpZIcGIWjRwGaWyfLcd%2BePxbKvfkjWm%2F2ba72M18dolvuDNpaY33Y%2BJT%2FMFo5rVEMS60XlFHs%2BTq5zse7j%2FgmDfXIpaTHoNkFe8KhySn59o2EqN%2FgFp6AUJd4x3nfSRjkKs9OyXo476dMrl%2BtBxxxqMPv6s8QGOqUBPGdBnmj1TkOnYW0xt1lZ8maE%2BKrNY8aB6pfwotoDpfqOpL4HqezVlqQ5rCDgYsSbeT6DnnFo9YdSYdlziIS%2BtPMn61GWvX5ZMYaELpkKHQRVvnBHsFlFcxQ8ktGDxF%2B2y4Xpv4gvOP3DOlfiC62UKp%2FuglnjJkHoLEGOe8Mov1DFBYhsKDFA1HnyzMNAG%2FC9ikGwuYRq3zxglpW0TqRDBsu6KTME&X-Amz-Signature=345e3b51e5ab06f5f850d088b228a923fb6dfa33f9c15f7a84a07292d8c97367&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G35DEHG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANFfdmbDDR0UytG4ttotUup4fA3GXnAxrlR3VMbtyLPAiEA4yVRqWQ8VnwhauYgM74B%2FFUDApvWIXDSy5I%2F9R4NEHQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZ0Fd%2B00sHU6EEN%2BSrcA4Yh9ldjMJWpu0J0Wkb3Jmudll9ZlAt2bgQzmItNVU00HDDxin8s%2BMbSOMDQaCtXyzfSkc80UZIHauQp38yNJIwdmY%2F79DXukGz3BkDqfdZB4vPocA6D8V%2BnVA3jrg37uwyLvDVRUr2xfboIgeira7%2FaSUgSEwSwiEbbnQ7NbPEFz2m0oUitl4%2BKQabaiSnB2uOQP5AR%2BS8NJugQr%2Bke6ZwWLQPCU5Nd1nKRi0dE1LND6Rle2o40Gu1GudY9%2BiAzIeJuEvKdjjePbxyUI3JSmueHZYibX%2FPOjgCuZxw%2F%2FFzQkFUgzAFJRrfYN8MTBFPSX4cz6ZcSbtW6%2FZkbUcsYQbMCIcDCpxEJ2zlfgjwuDtK9ua8%2Fqo0nVg4LwoNbkeDaOCUMDVayb0C%2F3ux0berwfY9IzKgq6hFSfU1BxkgmC%2FnEoyq3oFyZB7RgZvHBBotBev3G8HhRbWlqIu7yQzkpn%2B%2BzPEaxWr4rdtOKwCKpZIcGIWjRwGaWyfLcd%2BePxbKvfkjWm%2F2ba72M18dolvuDNpaY33Y%2BJT%2FMFo5rVEMS60XlFHs%2BTq5zse7j%2FgmDfXIpaTHoNkFe8KhySn59o2EqN%2FgFp6AUJd4x3nfSRjkKs9OyXo476dMrl%2BtBxxxqMPv6s8QGOqUBPGdBnmj1TkOnYW0xt1lZ8maE%2BKrNY8aB6pfwotoDpfqOpL4HqezVlqQ5rCDgYsSbeT6DnnFo9YdSYdlziIS%2BtPMn61GWvX5ZMYaELpkKHQRVvnBHsFlFcxQ8ktGDxF%2B2y4Xpv4gvOP3DOlfiC62UKp%2FuglnjJkHoLEGOe8Mov1DFBYhsKDFA1HnyzMNAG%2FC9ikGwuYRq3zxglpW0TqRDBsu6KTME&X-Amz-Signature=a58d0e90d9a2f334dcb8380c7fb0473ff494d46f9d338e7539a6959cb767e406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G35DEHG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANFfdmbDDR0UytG4ttotUup4fA3GXnAxrlR3VMbtyLPAiEA4yVRqWQ8VnwhauYgM74B%2FFUDApvWIXDSy5I%2F9R4NEHQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZ0Fd%2B00sHU6EEN%2BSrcA4Yh9ldjMJWpu0J0Wkb3Jmudll9ZlAt2bgQzmItNVU00HDDxin8s%2BMbSOMDQaCtXyzfSkc80UZIHauQp38yNJIwdmY%2F79DXukGz3BkDqfdZB4vPocA6D8V%2BnVA3jrg37uwyLvDVRUr2xfboIgeira7%2FaSUgSEwSwiEbbnQ7NbPEFz2m0oUitl4%2BKQabaiSnB2uOQP5AR%2BS8NJugQr%2Bke6ZwWLQPCU5Nd1nKRi0dE1LND6Rle2o40Gu1GudY9%2BiAzIeJuEvKdjjePbxyUI3JSmueHZYibX%2FPOjgCuZxw%2F%2FFzQkFUgzAFJRrfYN8MTBFPSX4cz6ZcSbtW6%2FZkbUcsYQbMCIcDCpxEJ2zlfgjwuDtK9ua8%2Fqo0nVg4LwoNbkeDaOCUMDVayb0C%2F3ux0berwfY9IzKgq6hFSfU1BxkgmC%2FnEoyq3oFyZB7RgZvHBBotBev3G8HhRbWlqIu7yQzkpn%2B%2BzPEaxWr4rdtOKwCKpZIcGIWjRwGaWyfLcd%2BePxbKvfkjWm%2F2ba72M18dolvuDNpaY33Y%2BJT%2FMFo5rVEMS60XlFHs%2BTq5zse7j%2FgmDfXIpaTHoNkFe8KhySn59o2EqN%2FgFp6AUJd4x3nfSRjkKs9OyXo476dMrl%2BtBxxxqMPv6s8QGOqUBPGdBnmj1TkOnYW0xt1lZ8maE%2BKrNY8aB6pfwotoDpfqOpL4HqezVlqQ5rCDgYsSbeT6DnnFo9YdSYdlziIS%2BtPMn61GWvX5ZMYaELpkKHQRVvnBHsFlFcxQ8ktGDxF%2B2y4Xpv4gvOP3DOlfiC62UKp%2FuglnjJkHoLEGOe8Mov1DFBYhsKDFA1HnyzMNAG%2FC9ikGwuYRq3zxglpW0TqRDBsu6KTME&X-Amz-Signature=d77c29f4050e321863c080f92998fc80157335066a0646ba387ac50b4331e58d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJRWY2S%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDowPqA7p7Y6XksPwqEgjPYkBwUpYkOvmZX%2FbQOJmAZ2AiEAwC5OXk63tORLZdqJoymZhVzkjgCaR9jbspeGXE17SC8qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPud8Gw6594wVGGlCrcA8F864zUFT7S30KpLmm0K3fNKZAZKR0%2BLTPpxcPeKX6WM%2BW1L1sZPS%2BY4OuNfoa9EFyqa26iiJ4VURpP2wwePzuHYSGLoHmAUFpMKxRybYcrwCqnveS0%2BDHoxAPPWKdqAglPDJQU2b5mE6NdET%2B1S0ojVlzoM70R22l9mEyz50a4RaDgvC3OB18UzLZD34uHC4e21EO6sKBnkNYtMdAsRoBo%2Fr8WZb7r9jpXpC1aC67iFjF5Gk7wzWHCKddGqxKNhY6qTz%2B1%2FyVeSb9174KTwdh095MsDNngDEUmoHpfYAy1SpAINpS3Qx8rC2pnrXIc4%2FtArlb1o%2F1kfG%2BO%2F1a%2BIn9o4DjEQerW%2FPz3d4QYmKXucVjspz0b1CLaio10%2FqIRI%2B0Fwunjg4d%2FPh%2FTHn%2FPK1GEqPb5EOWN55AcbbKOtzNgo%2Bvwh%2F5Q%2Fr0VxSmudwUrvobk3qPV1wERZqFtosSwKlHCTZS04bDyqjGYrpYXTHklY63vAoPa%2FG4xd131CN%2FinkYSt5g9BOlGiyC4mDNy3S13i2Optj9Ld%2FHfXUzvnQ1UEQ1xuP6T7I3U5jMT61oAJ7G1p28CBSZrlP2IQSRpRGUx5rxB3XNINRP4jyNo8oL5kDrbwoRSA4ldl6v%2FMKP6s8QGOqUBNvvvCxSZwK3yaTuiEYhdvCCyJr7lEkt283XSiqb8QqzWZVP1Eg7rN7l%2Ffk%2Bqw8t3LPfbYNDfsAHB6VvoT48CyxojHAo3XGbcfiN3DSBcQGXdOlFNNczwZRMQYDunEwdetpbjSdOaiD7XD6yHpqauLsdPzgpaEKFqIQ%2FLBr%2BRxkWCGd3cHgaFcuW8jgCms%2FNmt825A5W4uiJL%2FnahAswFWj36C6uO&X-Amz-Signature=f5d34894991465c7049a5f3a4263a2d37cc5291cf5f38aeeae3a6e9a8baa7505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJRWY2S%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDowPqA7p7Y6XksPwqEgjPYkBwUpYkOvmZX%2FbQOJmAZ2AiEAwC5OXk63tORLZdqJoymZhVzkjgCaR9jbspeGXE17SC8qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPud8Gw6594wVGGlCrcA8F864zUFT7S30KpLmm0K3fNKZAZKR0%2BLTPpxcPeKX6WM%2BW1L1sZPS%2BY4OuNfoa9EFyqa26iiJ4VURpP2wwePzuHYSGLoHmAUFpMKxRybYcrwCqnveS0%2BDHoxAPPWKdqAglPDJQU2b5mE6NdET%2B1S0ojVlzoM70R22l9mEyz50a4RaDgvC3OB18UzLZD34uHC4e21EO6sKBnkNYtMdAsRoBo%2Fr8WZb7r9jpXpC1aC67iFjF5Gk7wzWHCKddGqxKNhY6qTz%2B1%2FyVeSb9174KTwdh095MsDNngDEUmoHpfYAy1SpAINpS3Qx8rC2pnrXIc4%2FtArlb1o%2F1kfG%2BO%2F1a%2BIn9o4DjEQerW%2FPz3d4QYmKXucVjspz0b1CLaio10%2FqIRI%2B0Fwunjg4d%2FPh%2FTHn%2FPK1GEqPb5EOWN55AcbbKOtzNgo%2Bvwh%2F5Q%2Fr0VxSmudwUrvobk3qPV1wERZqFtosSwKlHCTZS04bDyqjGYrpYXTHklY63vAoPa%2FG4xd131CN%2FinkYSt5g9BOlGiyC4mDNy3S13i2Optj9Ld%2FHfXUzvnQ1UEQ1xuP6T7I3U5jMT61oAJ7G1p28CBSZrlP2IQSRpRGUx5rxB3XNINRP4jyNo8oL5kDrbwoRSA4ldl6v%2FMKP6s8QGOqUBNvvvCxSZwK3yaTuiEYhdvCCyJr7lEkt283XSiqb8QqzWZVP1Eg7rN7l%2Ffk%2Bqw8t3LPfbYNDfsAHB6VvoT48CyxojHAo3XGbcfiN3DSBcQGXdOlFNNczwZRMQYDunEwdetpbjSdOaiD7XD6yHpqauLsdPzgpaEKFqIQ%2FLBr%2BRxkWCGd3cHgaFcuW8jgCms%2FNmt825A5W4uiJL%2FnahAswFWj36C6uO&X-Amz-Signature=4c3db6659c3d41f5fd0ba84777576ce8d6a3b2e88c0cce9dc10254f87122b85f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJRWY2S%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDowPqA7p7Y6XksPwqEgjPYkBwUpYkOvmZX%2FbQOJmAZ2AiEAwC5OXk63tORLZdqJoymZhVzkjgCaR9jbspeGXE17SC8qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPud8Gw6594wVGGlCrcA8F864zUFT7S30KpLmm0K3fNKZAZKR0%2BLTPpxcPeKX6WM%2BW1L1sZPS%2BY4OuNfoa9EFyqa26iiJ4VURpP2wwePzuHYSGLoHmAUFpMKxRybYcrwCqnveS0%2BDHoxAPPWKdqAglPDJQU2b5mE6NdET%2B1S0ojVlzoM70R22l9mEyz50a4RaDgvC3OB18UzLZD34uHC4e21EO6sKBnkNYtMdAsRoBo%2Fr8WZb7r9jpXpC1aC67iFjF5Gk7wzWHCKddGqxKNhY6qTz%2B1%2FyVeSb9174KTwdh095MsDNngDEUmoHpfYAy1SpAINpS3Qx8rC2pnrXIc4%2FtArlb1o%2F1kfG%2BO%2F1a%2BIn9o4DjEQerW%2FPz3d4QYmKXucVjspz0b1CLaio10%2FqIRI%2B0Fwunjg4d%2FPh%2FTHn%2FPK1GEqPb5EOWN55AcbbKOtzNgo%2Bvwh%2F5Q%2Fr0VxSmudwUrvobk3qPV1wERZqFtosSwKlHCTZS04bDyqjGYrpYXTHklY63vAoPa%2FG4xd131CN%2FinkYSt5g9BOlGiyC4mDNy3S13i2Optj9Ld%2FHfXUzvnQ1UEQ1xuP6T7I3U5jMT61oAJ7G1p28CBSZrlP2IQSRpRGUx5rxB3XNINRP4jyNo8oL5kDrbwoRSA4ldl6v%2FMKP6s8QGOqUBNvvvCxSZwK3yaTuiEYhdvCCyJr7lEkt283XSiqb8QqzWZVP1Eg7rN7l%2Ffk%2Bqw8t3LPfbYNDfsAHB6VvoT48CyxojHAo3XGbcfiN3DSBcQGXdOlFNNczwZRMQYDunEwdetpbjSdOaiD7XD6yHpqauLsdPzgpaEKFqIQ%2FLBr%2BRxkWCGd3cHgaFcuW8jgCms%2FNmt825A5W4uiJL%2FnahAswFWj36C6uO&X-Amz-Signature=cb654c193e3feab1f6855659f794bfa4104d22eb33179da1ef3d04691448d06c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Launch file

<details>
      <summary>What is in this launch file?</summary>
      TODO:
  </details>

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

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJRWY2S%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDowPqA7p7Y6XksPwqEgjPYkBwUpYkOvmZX%2FbQOJmAZ2AiEAwC5OXk63tORLZdqJoymZhVzkjgCaR9jbspeGXE17SC8qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPud8Gw6594wVGGlCrcA8F864zUFT7S30KpLmm0K3fNKZAZKR0%2BLTPpxcPeKX6WM%2BW1L1sZPS%2BY4OuNfoa9EFyqa26iiJ4VURpP2wwePzuHYSGLoHmAUFpMKxRybYcrwCqnveS0%2BDHoxAPPWKdqAglPDJQU2b5mE6NdET%2B1S0ojVlzoM70R22l9mEyz50a4RaDgvC3OB18UzLZD34uHC4e21EO6sKBnkNYtMdAsRoBo%2Fr8WZb7r9jpXpC1aC67iFjF5Gk7wzWHCKddGqxKNhY6qTz%2B1%2FyVeSb9174KTwdh095MsDNngDEUmoHpfYAy1SpAINpS3Qx8rC2pnrXIc4%2FtArlb1o%2F1kfG%2BO%2F1a%2BIn9o4DjEQerW%2FPz3d4QYmKXucVjspz0b1CLaio10%2FqIRI%2B0Fwunjg4d%2FPh%2FTHn%2FPK1GEqPb5EOWN55AcbbKOtzNgo%2Bvwh%2F5Q%2Fr0VxSmudwUrvobk3qPV1wERZqFtosSwKlHCTZS04bDyqjGYrpYXTHklY63vAoPa%2FG4xd131CN%2FinkYSt5g9BOlGiyC4mDNy3S13i2Optj9Ld%2FHfXUzvnQ1UEQ1xuP6T7I3U5jMT61oAJ7G1p28CBSZrlP2IQSRpRGUx5rxB3XNINRP4jyNo8oL5kDrbwoRSA4ldl6v%2FMKP6s8QGOqUBNvvvCxSZwK3yaTuiEYhdvCCyJr7lEkt283XSiqb8QqzWZVP1Eg7rN7l%2Ffk%2Bqw8t3LPfbYNDfsAHB6VvoT48CyxojHAo3XGbcfiN3DSBcQGXdOlFNNczwZRMQYDunEwdetpbjSdOaiD7XD6yHpqauLsdPzgpaEKFqIQ%2FLBr%2BRxkWCGd3cHgaFcuW8jgCms%2FNmt825A5W4uiJL%2FnahAswFWj36C6uO&X-Amz-Signature=cd58bebc168b3bd86b640857c014c83b4a7a8f6a64cf643cddb79ab169ec80da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJRWY2S%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDowPqA7p7Y6XksPwqEgjPYkBwUpYkOvmZX%2FbQOJmAZ2AiEAwC5OXk63tORLZdqJoymZhVzkjgCaR9jbspeGXE17SC8qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPud8Gw6594wVGGlCrcA8F864zUFT7S30KpLmm0K3fNKZAZKR0%2BLTPpxcPeKX6WM%2BW1L1sZPS%2BY4OuNfoa9EFyqa26iiJ4VURpP2wwePzuHYSGLoHmAUFpMKxRybYcrwCqnveS0%2BDHoxAPPWKdqAglPDJQU2b5mE6NdET%2B1S0ojVlzoM70R22l9mEyz50a4RaDgvC3OB18UzLZD34uHC4e21EO6sKBnkNYtMdAsRoBo%2Fr8WZb7r9jpXpC1aC67iFjF5Gk7wzWHCKddGqxKNhY6qTz%2B1%2FyVeSb9174KTwdh095MsDNngDEUmoHpfYAy1SpAINpS3Qx8rC2pnrXIc4%2FtArlb1o%2F1kfG%2BO%2F1a%2BIn9o4DjEQerW%2FPz3d4QYmKXucVjspz0b1CLaio10%2FqIRI%2B0Fwunjg4d%2FPh%2FTHn%2FPK1GEqPb5EOWN55AcbbKOtzNgo%2Bvwh%2F5Q%2Fr0VxSmudwUrvobk3qPV1wERZqFtosSwKlHCTZS04bDyqjGYrpYXTHklY63vAoPa%2FG4xd131CN%2FinkYSt5g9BOlGiyC4mDNy3S13i2Optj9Ld%2FHfXUzvnQ1UEQ1xuP6T7I3U5jMT61oAJ7G1p28CBSZrlP2IQSRpRGUx5rxB3XNINRP4jyNo8oL5kDrbwoRSA4ldl6v%2FMKP6s8QGOqUBNvvvCxSZwK3yaTuiEYhdvCCyJr7lEkt283XSiqb8QqzWZVP1Eg7rN7l%2Ffk%2Bqw8t3LPfbYNDfsAHB6VvoT48CyxojHAo3XGbcfiN3DSBcQGXdOlFNNczwZRMQYDunEwdetpbjSdOaiD7XD6yHpqauLsdPzgpaEKFqIQ%2FLBr%2BRxkWCGd3cHgaFcuW8jgCms%2FNmt825A5W4uiJL%2FnahAswFWj36C6uO&X-Amz-Signature=f987e8ff4a31eca5868f49fc17a4b2f7f1f27225e923132c7615fb18c4e262de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJRWY2S%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDowPqA7p7Y6XksPwqEgjPYkBwUpYkOvmZX%2FbQOJmAZ2AiEAwC5OXk63tORLZdqJoymZhVzkjgCaR9jbspeGXE17SC8qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPud8Gw6594wVGGlCrcA8F864zUFT7S30KpLmm0K3fNKZAZKR0%2BLTPpxcPeKX6WM%2BW1L1sZPS%2BY4OuNfoa9EFyqa26iiJ4VURpP2wwePzuHYSGLoHmAUFpMKxRybYcrwCqnveS0%2BDHoxAPPWKdqAglPDJQU2b5mE6NdET%2B1S0ojVlzoM70R22l9mEyz50a4RaDgvC3OB18UzLZD34uHC4e21EO6sKBnkNYtMdAsRoBo%2Fr8WZb7r9jpXpC1aC67iFjF5Gk7wzWHCKddGqxKNhY6qTz%2B1%2FyVeSb9174KTwdh095MsDNngDEUmoHpfYAy1SpAINpS3Qx8rC2pnrXIc4%2FtArlb1o%2F1kfG%2BO%2F1a%2BIn9o4DjEQerW%2FPz3d4QYmKXucVjspz0b1CLaio10%2FqIRI%2B0Fwunjg4d%2FPh%2FTHn%2FPK1GEqPb5EOWN55AcbbKOtzNgo%2Bvwh%2F5Q%2Fr0VxSmudwUrvobk3qPV1wERZqFtosSwKlHCTZS04bDyqjGYrpYXTHklY63vAoPa%2FG4xd131CN%2FinkYSt5g9BOlGiyC4mDNy3S13i2Optj9Ld%2FHfXUzvnQ1UEQ1xuP6T7I3U5jMT61oAJ7G1p28CBSZrlP2IQSRpRGUx5rxB3XNINRP4jyNo8oL5kDrbwoRSA4ldl6v%2FMKP6s8QGOqUBNvvvCxSZwK3yaTuiEYhdvCCyJr7lEkt283XSiqb8QqzWZVP1Eg7rN7l%2Ffk%2Bqw8t3LPfbYNDfsAHB6VvoT48CyxojHAo3XGbcfiN3DSBcQGXdOlFNNczwZRMQYDunEwdetpbjSdOaiD7XD6yHpqauLsdPzgpaEKFqIQ%2FLBr%2BRxkWCGd3cHgaFcuW8jgCms%2FNmt825A5W4uiJL%2FnahAswFWj36C6uO&X-Amz-Signature=c53309cf30ab51299b2d8fdc3403878e8a5b7740ae7f48739d1e25e4767c1aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJRWY2S%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDowPqA7p7Y6XksPwqEgjPYkBwUpYkOvmZX%2FbQOJmAZ2AiEAwC5OXk63tORLZdqJoymZhVzkjgCaR9jbspeGXE17SC8qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPud8Gw6594wVGGlCrcA8F864zUFT7S30KpLmm0K3fNKZAZKR0%2BLTPpxcPeKX6WM%2BW1L1sZPS%2BY4OuNfoa9EFyqa26iiJ4VURpP2wwePzuHYSGLoHmAUFpMKxRybYcrwCqnveS0%2BDHoxAPPWKdqAglPDJQU2b5mE6NdET%2B1S0ojVlzoM70R22l9mEyz50a4RaDgvC3OB18UzLZD34uHC4e21EO6sKBnkNYtMdAsRoBo%2Fr8WZb7r9jpXpC1aC67iFjF5Gk7wzWHCKddGqxKNhY6qTz%2B1%2FyVeSb9174KTwdh095MsDNngDEUmoHpfYAy1SpAINpS3Qx8rC2pnrXIc4%2FtArlb1o%2F1kfG%2BO%2F1a%2BIn9o4DjEQerW%2FPz3d4QYmKXucVjspz0b1CLaio10%2FqIRI%2B0Fwunjg4d%2FPh%2FTHn%2FPK1GEqPb5EOWN55AcbbKOtzNgo%2Bvwh%2F5Q%2Fr0VxSmudwUrvobk3qPV1wERZqFtosSwKlHCTZS04bDyqjGYrpYXTHklY63vAoPa%2FG4xd131CN%2FinkYSt5g9BOlGiyC4mDNy3S13i2Optj9Ld%2FHfXUzvnQ1UEQ1xuP6T7I3U5jMT61oAJ7G1p28CBSZrlP2IQSRpRGUx5rxB3XNINRP4jyNo8oL5kDrbwoRSA4ldl6v%2FMKP6s8QGOqUBNvvvCxSZwK3yaTuiEYhdvCCyJr7lEkt283XSiqb8QqzWZVP1Eg7rN7l%2Ffk%2Bqw8t3LPfbYNDfsAHB6VvoT48CyxojHAo3XGbcfiN3DSBcQGXdOlFNNczwZRMQYDunEwdetpbjSdOaiD7XD6yHpqauLsdPzgpaEKFqIQ%2FLBr%2BRxkWCGd3cHgaFcuW8jgCms%2FNmt825A5W4uiJL%2FnahAswFWj36C6uO&X-Amz-Signature=c907fccd1da5e1babbde16d262c19b8a04752fcae45417fa0fbf47fbe4f8d25c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
