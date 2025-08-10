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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636UUJZJV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BObPf4Yh0ZdBJkUXd%2Bw0kCg0VdWIHOUBLTYNvcunfnAiEA5FpOSWgK6%2FzGdcGsubcedcpRdCaz8IBQMKT2GWjRxVwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbWD%2BCJdkUB1JjQ0CrcA57lzfeyqeX8EpaBR7K6J1XOqP1xZ6r9%2Bn70Ud8bOY7RKOK4fFWPe%2B%2FNqj6mo3RkOChXmNTqkbvGvObqG3yF2t2T8jgUclt0PazEU9I490lD8c41RYgrLuoxzMTNKKvJwze2LpJSfMk7RNYj%2BYZtov0oWND68t7FHZQCxwvlrArFGXubfCrbcOUksUa15riBEm%2Fa0L8lsSqRBPSuj%2FGCds8LmxBVcaaZLizj3WTkr%2FjSCwojXP0iW5jJ7sMqsPKs5eSmpkXJzgWT66pMoTxb%2BN9elMlBXvI%2BO9%2FbHyA%2FQaNLfpaFvYL8EyyA7awPciO3qp%2FgwLl44uzvwr7rMArJ0%2Bqzf%2FV%2FAWZcLt34ZGeofQYRSGMw46QyO6WhLPxbg%2Fs3v3F%2BEf3IxrD2NfXNfLLozB6m7MZcycKHwQ11Y85szgc9gnAlu5cBwyoQz4VNlNUzcrh5RCC4VVB5KigS94lnWgulV%2FSOawzVMDcribyr3r7wLRM2laAxZV22PAX8ErQGn%2FLpAtQ5Up3ocBk1h%2FvhVufsrXbe%2FpGG0SUMf2%2BAivxA1BH5KyjQ3%2FYFXchuYNZ7spNiCQcKoNLKdVqI2m6dP1eYbJCugkU6Cam9jMXPjjOoC7WD83WvwhP%2FbTllMMyy38QGOqUBWkRGUo46VuozNFIX1UbXg8qm%2FwHXEBIZDcyZUUyLJIPMMeK2u%2FJpjIclF8SKeaH18xXojPtRc8JhOab%2BtmQaBqiR1i4Bp1zOKcPQR8t64kj4nj8uNRohhFlkrVVi%2BibdrIbF%2BMvrgFsq4654jt5CBaF%2F%2F258VPoo9IVi%2F%2BgtQw6cHRdEOgq1271XDXv8m43Ifx7S99a1ki7AkETv3ky1IgQqoiD8&X-Amz-Signature=9a717a0d97b8a5ea86cc20b96387e0a20936566869e9fd51aacf90d06a620571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636UUJZJV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BObPf4Yh0ZdBJkUXd%2Bw0kCg0VdWIHOUBLTYNvcunfnAiEA5FpOSWgK6%2FzGdcGsubcedcpRdCaz8IBQMKT2GWjRxVwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbWD%2BCJdkUB1JjQ0CrcA57lzfeyqeX8EpaBR7K6J1XOqP1xZ6r9%2Bn70Ud8bOY7RKOK4fFWPe%2B%2FNqj6mo3RkOChXmNTqkbvGvObqG3yF2t2T8jgUclt0PazEU9I490lD8c41RYgrLuoxzMTNKKvJwze2LpJSfMk7RNYj%2BYZtov0oWND68t7FHZQCxwvlrArFGXubfCrbcOUksUa15riBEm%2Fa0L8lsSqRBPSuj%2FGCds8LmxBVcaaZLizj3WTkr%2FjSCwojXP0iW5jJ7sMqsPKs5eSmpkXJzgWT66pMoTxb%2BN9elMlBXvI%2BO9%2FbHyA%2FQaNLfpaFvYL8EyyA7awPciO3qp%2FgwLl44uzvwr7rMArJ0%2Bqzf%2FV%2FAWZcLt34ZGeofQYRSGMw46QyO6WhLPxbg%2Fs3v3F%2BEf3IxrD2NfXNfLLozB6m7MZcycKHwQ11Y85szgc9gnAlu5cBwyoQz4VNlNUzcrh5RCC4VVB5KigS94lnWgulV%2FSOawzVMDcribyr3r7wLRM2laAxZV22PAX8ErQGn%2FLpAtQ5Up3ocBk1h%2FvhVufsrXbe%2FpGG0SUMf2%2BAivxA1BH5KyjQ3%2FYFXchuYNZ7spNiCQcKoNLKdVqI2m6dP1eYbJCugkU6Cam9jMXPjjOoC7WD83WvwhP%2FbTllMMyy38QGOqUBWkRGUo46VuozNFIX1UbXg8qm%2FwHXEBIZDcyZUUyLJIPMMeK2u%2FJpjIclF8SKeaH18xXojPtRc8JhOab%2BtmQaBqiR1i4Bp1zOKcPQR8t64kj4nj8uNRohhFlkrVVi%2BibdrIbF%2BMvrgFsq4654jt5CBaF%2F%2F258VPoo9IVi%2F%2BgtQw6cHRdEOgq1271XDXv8m43Ifx7S99a1ki7AkETv3ky1IgQqoiD8&X-Amz-Signature=9c9173c0856c886aab410c938fd7477be80db3cadd361cea0d80e91ed98efe4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636UUJZJV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BObPf4Yh0ZdBJkUXd%2Bw0kCg0VdWIHOUBLTYNvcunfnAiEA5FpOSWgK6%2FzGdcGsubcedcpRdCaz8IBQMKT2GWjRxVwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbWD%2BCJdkUB1JjQ0CrcA57lzfeyqeX8EpaBR7K6J1XOqP1xZ6r9%2Bn70Ud8bOY7RKOK4fFWPe%2B%2FNqj6mo3RkOChXmNTqkbvGvObqG3yF2t2T8jgUclt0PazEU9I490lD8c41RYgrLuoxzMTNKKvJwze2LpJSfMk7RNYj%2BYZtov0oWND68t7FHZQCxwvlrArFGXubfCrbcOUksUa15riBEm%2Fa0L8lsSqRBPSuj%2FGCds8LmxBVcaaZLizj3WTkr%2FjSCwojXP0iW5jJ7sMqsPKs5eSmpkXJzgWT66pMoTxb%2BN9elMlBXvI%2BO9%2FbHyA%2FQaNLfpaFvYL8EyyA7awPciO3qp%2FgwLl44uzvwr7rMArJ0%2Bqzf%2FV%2FAWZcLt34ZGeofQYRSGMw46QyO6WhLPxbg%2Fs3v3F%2BEf3IxrD2NfXNfLLozB6m7MZcycKHwQ11Y85szgc9gnAlu5cBwyoQz4VNlNUzcrh5RCC4VVB5KigS94lnWgulV%2FSOawzVMDcribyr3r7wLRM2laAxZV22PAX8ErQGn%2FLpAtQ5Up3ocBk1h%2FvhVufsrXbe%2FpGG0SUMf2%2BAivxA1BH5KyjQ3%2FYFXchuYNZ7spNiCQcKoNLKdVqI2m6dP1eYbJCugkU6Cam9jMXPjjOoC7WD83WvwhP%2FbTllMMyy38QGOqUBWkRGUo46VuozNFIX1UbXg8qm%2FwHXEBIZDcyZUUyLJIPMMeK2u%2FJpjIclF8SKeaH18xXojPtRc8JhOab%2BtmQaBqiR1i4Bp1zOKcPQR8t64kj4nj8uNRohhFlkrVVi%2BibdrIbF%2BMvrgFsq4654jt5CBaF%2F%2F258VPoo9IVi%2F%2BgtQw6cHRdEOgq1271XDXv8m43Ifx7S99a1ki7AkETv3ky1IgQqoiD8&X-Amz-Signature=bf33f04160ba79f28d2f90c38aff31730fb2f1a1126d11d484e94f0ea6e4ac4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636UUJZJV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BObPf4Yh0ZdBJkUXd%2Bw0kCg0VdWIHOUBLTYNvcunfnAiEA5FpOSWgK6%2FzGdcGsubcedcpRdCaz8IBQMKT2GWjRxVwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbWD%2BCJdkUB1JjQ0CrcA57lzfeyqeX8EpaBR7K6J1XOqP1xZ6r9%2Bn70Ud8bOY7RKOK4fFWPe%2B%2FNqj6mo3RkOChXmNTqkbvGvObqG3yF2t2T8jgUclt0PazEU9I490lD8c41RYgrLuoxzMTNKKvJwze2LpJSfMk7RNYj%2BYZtov0oWND68t7FHZQCxwvlrArFGXubfCrbcOUksUa15riBEm%2Fa0L8lsSqRBPSuj%2FGCds8LmxBVcaaZLizj3WTkr%2FjSCwojXP0iW5jJ7sMqsPKs5eSmpkXJzgWT66pMoTxb%2BN9elMlBXvI%2BO9%2FbHyA%2FQaNLfpaFvYL8EyyA7awPciO3qp%2FgwLl44uzvwr7rMArJ0%2Bqzf%2FV%2FAWZcLt34ZGeofQYRSGMw46QyO6WhLPxbg%2Fs3v3F%2BEf3IxrD2NfXNfLLozB6m7MZcycKHwQ11Y85szgc9gnAlu5cBwyoQz4VNlNUzcrh5RCC4VVB5KigS94lnWgulV%2FSOawzVMDcribyr3r7wLRM2laAxZV22PAX8ErQGn%2FLpAtQ5Up3ocBk1h%2FvhVufsrXbe%2FpGG0SUMf2%2BAivxA1BH5KyjQ3%2FYFXchuYNZ7spNiCQcKoNLKdVqI2m6dP1eYbJCugkU6Cam9jMXPjjOoC7WD83WvwhP%2FbTllMMyy38QGOqUBWkRGUo46VuozNFIX1UbXg8qm%2FwHXEBIZDcyZUUyLJIPMMeK2u%2FJpjIclF8SKeaH18xXojPtRc8JhOab%2BtmQaBqiR1i4Bp1zOKcPQR8t64kj4nj8uNRohhFlkrVVi%2BibdrIbF%2BMvrgFsq4654jt5CBaF%2F%2F258VPoo9IVi%2F%2BgtQw6cHRdEOgq1271XDXv8m43Ifx7S99a1ki7AkETv3ky1IgQqoiD8&X-Amz-Signature=0845522130fe595ba2cc92b5f266fb8739ec8870e92d919387304b7e4a49c771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636UUJZJV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BObPf4Yh0ZdBJkUXd%2Bw0kCg0VdWIHOUBLTYNvcunfnAiEA5FpOSWgK6%2FzGdcGsubcedcpRdCaz8IBQMKT2GWjRxVwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbWD%2BCJdkUB1JjQ0CrcA57lzfeyqeX8EpaBR7K6J1XOqP1xZ6r9%2Bn70Ud8bOY7RKOK4fFWPe%2B%2FNqj6mo3RkOChXmNTqkbvGvObqG3yF2t2T8jgUclt0PazEU9I490lD8c41RYgrLuoxzMTNKKvJwze2LpJSfMk7RNYj%2BYZtov0oWND68t7FHZQCxwvlrArFGXubfCrbcOUksUa15riBEm%2Fa0L8lsSqRBPSuj%2FGCds8LmxBVcaaZLizj3WTkr%2FjSCwojXP0iW5jJ7sMqsPKs5eSmpkXJzgWT66pMoTxb%2BN9elMlBXvI%2BO9%2FbHyA%2FQaNLfpaFvYL8EyyA7awPciO3qp%2FgwLl44uzvwr7rMArJ0%2Bqzf%2FV%2FAWZcLt34ZGeofQYRSGMw46QyO6WhLPxbg%2Fs3v3F%2BEf3IxrD2NfXNfLLozB6m7MZcycKHwQ11Y85szgc9gnAlu5cBwyoQz4VNlNUzcrh5RCC4VVB5KigS94lnWgulV%2FSOawzVMDcribyr3r7wLRM2laAxZV22PAX8ErQGn%2FLpAtQ5Up3ocBk1h%2FvhVufsrXbe%2FpGG0SUMf2%2BAivxA1BH5KyjQ3%2FYFXchuYNZ7spNiCQcKoNLKdVqI2m6dP1eYbJCugkU6Cam9jMXPjjOoC7WD83WvwhP%2FbTllMMyy38QGOqUBWkRGUo46VuozNFIX1UbXg8qm%2FwHXEBIZDcyZUUyLJIPMMeK2u%2FJpjIclF8SKeaH18xXojPtRc8JhOab%2BtmQaBqiR1i4Bp1zOKcPQR8t64kj4nj8uNRohhFlkrVVi%2BibdrIbF%2BMvrgFsq4654jt5CBaF%2F%2F258VPoo9IVi%2F%2BgtQw6cHRdEOgq1271XDXv8m43Ifx7S99a1ki7AkETv3ky1IgQqoiD8&X-Amz-Signature=5579955b960abb677911cb0cf5df88661ef42993fb8dce85f8b8a8e4b9ad97a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636UUJZJV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BObPf4Yh0ZdBJkUXd%2Bw0kCg0VdWIHOUBLTYNvcunfnAiEA5FpOSWgK6%2FzGdcGsubcedcpRdCaz8IBQMKT2GWjRxVwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbWD%2BCJdkUB1JjQ0CrcA57lzfeyqeX8EpaBR7K6J1XOqP1xZ6r9%2Bn70Ud8bOY7RKOK4fFWPe%2B%2FNqj6mo3RkOChXmNTqkbvGvObqG3yF2t2T8jgUclt0PazEU9I490lD8c41RYgrLuoxzMTNKKvJwze2LpJSfMk7RNYj%2BYZtov0oWND68t7FHZQCxwvlrArFGXubfCrbcOUksUa15riBEm%2Fa0L8lsSqRBPSuj%2FGCds8LmxBVcaaZLizj3WTkr%2FjSCwojXP0iW5jJ7sMqsPKs5eSmpkXJzgWT66pMoTxb%2BN9elMlBXvI%2BO9%2FbHyA%2FQaNLfpaFvYL8EyyA7awPciO3qp%2FgwLl44uzvwr7rMArJ0%2Bqzf%2FV%2FAWZcLt34ZGeofQYRSGMw46QyO6WhLPxbg%2Fs3v3F%2BEf3IxrD2NfXNfLLozB6m7MZcycKHwQ11Y85szgc9gnAlu5cBwyoQz4VNlNUzcrh5RCC4VVB5KigS94lnWgulV%2FSOawzVMDcribyr3r7wLRM2laAxZV22PAX8ErQGn%2FLpAtQ5Up3ocBk1h%2FvhVufsrXbe%2FpGG0SUMf2%2BAivxA1BH5KyjQ3%2FYFXchuYNZ7spNiCQcKoNLKdVqI2m6dP1eYbJCugkU6Cam9jMXPjjOoC7WD83WvwhP%2FbTllMMyy38QGOqUBWkRGUo46VuozNFIX1UbXg8qm%2FwHXEBIZDcyZUUyLJIPMMeK2u%2FJpjIclF8SKeaH18xXojPtRc8JhOab%2BtmQaBqiR1i4Bp1zOKcPQR8t64kj4nj8uNRohhFlkrVVi%2BibdrIbF%2BMvrgFsq4654jt5CBaF%2F%2F258VPoo9IVi%2F%2BgtQw6cHRdEOgq1271XDXv8m43Ifx7S99a1ki7AkETv3ky1IgQqoiD8&X-Amz-Signature=e829239f67fbbfe9f0dc5ef2d5087bb6ff8a030d4cdbdebdf64d042f28caaad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636UUJZJV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BObPf4Yh0ZdBJkUXd%2Bw0kCg0VdWIHOUBLTYNvcunfnAiEA5FpOSWgK6%2FzGdcGsubcedcpRdCaz8IBQMKT2GWjRxVwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbWD%2BCJdkUB1JjQ0CrcA57lzfeyqeX8EpaBR7K6J1XOqP1xZ6r9%2Bn70Ud8bOY7RKOK4fFWPe%2B%2FNqj6mo3RkOChXmNTqkbvGvObqG3yF2t2T8jgUclt0PazEU9I490lD8c41RYgrLuoxzMTNKKvJwze2LpJSfMk7RNYj%2BYZtov0oWND68t7FHZQCxwvlrArFGXubfCrbcOUksUa15riBEm%2Fa0L8lsSqRBPSuj%2FGCds8LmxBVcaaZLizj3WTkr%2FjSCwojXP0iW5jJ7sMqsPKs5eSmpkXJzgWT66pMoTxb%2BN9elMlBXvI%2BO9%2FbHyA%2FQaNLfpaFvYL8EyyA7awPciO3qp%2FgwLl44uzvwr7rMArJ0%2Bqzf%2FV%2FAWZcLt34ZGeofQYRSGMw46QyO6WhLPxbg%2Fs3v3F%2BEf3IxrD2NfXNfLLozB6m7MZcycKHwQ11Y85szgc9gnAlu5cBwyoQz4VNlNUzcrh5RCC4VVB5KigS94lnWgulV%2FSOawzVMDcribyr3r7wLRM2laAxZV22PAX8ErQGn%2FLpAtQ5Up3ocBk1h%2FvhVufsrXbe%2FpGG0SUMf2%2BAivxA1BH5KyjQ3%2FYFXchuYNZ7spNiCQcKoNLKdVqI2m6dP1eYbJCugkU6Cam9jMXPjjOoC7WD83WvwhP%2FbTllMMyy38QGOqUBWkRGUo46VuozNFIX1UbXg8qm%2FwHXEBIZDcyZUUyLJIPMMeK2u%2FJpjIclF8SKeaH18xXojPtRc8JhOab%2BtmQaBqiR1i4Bp1zOKcPQR8t64kj4nj8uNRohhFlkrVVi%2BibdrIbF%2BMvrgFsq4654jt5CBaF%2F%2F258VPoo9IVi%2F%2BgtQw6cHRdEOgq1271XDXv8m43Ifx7S99a1ki7AkETv3ky1IgQqoiD8&X-Amz-Signature=146fc2b4e9b16936360547ea227ceedb9932f5d6083cb495b2b8638b33bfb861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636UUJZJV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BObPf4Yh0ZdBJkUXd%2Bw0kCg0VdWIHOUBLTYNvcunfnAiEA5FpOSWgK6%2FzGdcGsubcedcpRdCaz8IBQMKT2GWjRxVwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbWD%2BCJdkUB1JjQ0CrcA57lzfeyqeX8EpaBR7K6J1XOqP1xZ6r9%2Bn70Ud8bOY7RKOK4fFWPe%2B%2FNqj6mo3RkOChXmNTqkbvGvObqG3yF2t2T8jgUclt0PazEU9I490lD8c41RYgrLuoxzMTNKKvJwze2LpJSfMk7RNYj%2BYZtov0oWND68t7FHZQCxwvlrArFGXubfCrbcOUksUa15riBEm%2Fa0L8lsSqRBPSuj%2FGCds8LmxBVcaaZLizj3WTkr%2FjSCwojXP0iW5jJ7sMqsPKs5eSmpkXJzgWT66pMoTxb%2BN9elMlBXvI%2BO9%2FbHyA%2FQaNLfpaFvYL8EyyA7awPciO3qp%2FgwLl44uzvwr7rMArJ0%2Bqzf%2FV%2FAWZcLt34ZGeofQYRSGMw46QyO6WhLPxbg%2Fs3v3F%2BEf3IxrD2NfXNfLLozB6m7MZcycKHwQ11Y85szgc9gnAlu5cBwyoQz4VNlNUzcrh5RCC4VVB5KigS94lnWgulV%2FSOawzVMDcribyr3r7wLRM2laAxZV22PAX8ErQGn%2FLpAtQ5Up3ocBk1h%2FvhVufsrXbe%2FpGG0SUMf2%2BAivxA1BH5KyjQ3%2FYFXchuYNZ7spNiCQcKoNLKdVqI2m6dP1eYbJCugkU6Cam9jMXPjjOoC7WD83WvwhP%2FbTllMMyy38QGOqUBWkRGUo46VuozNFIX1UbXg8qm%2FwHXEBIZDcyZUUyLJIPMMeK2u%2FJpjIclF8SKeaH18xXojPtRc8JhOab%2BtmQaBqiR1i4Bp1zOKcPQR8t64kj4nj8uNRohhFlkrVVi%2BibdrIbF%2BMvrgFsq4654jt5CBaF%2F%2F258VPoo9IVi%2F%2BgtQw6cHRdEOgq1271XDXv8m43Ifx7S99a1ki7AkETv3ky1IgQqoiD8&X-Amz-Signature=a57ce8862b9f97570909f5a2476a181789210bf8260af3024af82255ed8c9284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636UUJZJV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BObPf4Yh0ZdBJkUXd%2Bw0kCg0VdWIHOUBLTYNvcunfnAiEA5FpOSWgK6%2FzGdcGsubcedcpRdCaz8IBQMKT2GWjRxVwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbWD%2BCJdkUB1JjQ0CrcA57lzfeyqeX8EpaBR7K6J1XOqP1xZ6r9%2Bn70Ud8bOY7RKOK4fFWPe%2B%2FNqj6mo3RkOChXmNTqkbvGvObqG3yF2t2T8jgUclt0PazEU9I490lD8c41RYgrLuoxzMTNKKvJwze2LpJSfMk7RNYj%2BYZtov0oWND68t7FHZQCxwvlrArFGXubfCrbcOUksUa15riBEm%2Fa0L8lsSqRBPSuj%2FGCds8LmxBVcaaZLizj3WTkr%2FjSCwojXP0iW5jJ7sMqsPKs5eSmpkXJzgWT66pMoTxb%2BN9elMlBXvI%2BO9%2FbHyA%2FQaNLfpaFvYL8EyyA7awPciO3qp%2FgwLl44uzvwr7rMArJ0%2Bqzf%2FV%2FAWZcLt34ZGeofQYRSGMw46QyO6WhLPxbg%2Fs3v3F%2BEf3IxrD2NfXNfLLozB6m7MZcycKHwQ11Y85szgc9gnAlu5cBwyoQz4VNlNUzcrh5RCC4VVB5KigS94lnWgulV%2FSOawzVMDcribyr3r7wLRM2laAxZV22PAX8ErQGn%2FLpAtQ5Up3ocBk1h%2FvhVufsrXbe%2FpGG0SUMf2%2BAivxA1BH5KyjQ3%2FYFXchuYNZ7spNiCQcKoNLKdVqI2m6dP1eYbJCugkU6Cam9jMXPjjOoC7WD83WvwhP%2FbTllMMyy38QGOqUBWkRGUo46VuozNFIX1UbXg8qm%2FwHXEBIZDcyZUUyLJIPMMeK2u%2FJpjIclF8SKeaH18xXojPtRc8JhOab%2BtmQaBqiR1i4Bp1zOKcPQR8t64kj4nj8uNRohhFlkrVVi%2BibdrIbF%2BMvrgFsq4654jt5CBaF%2F%2F258VPoo9IVi%2F%2BgtQw6cHRdEOgq1271XDXv8m43Ifx7S99a1ki7AkETv3ky1IgQqoiD8&X-Amz-Signature=e34aec50e8d7fb4b1888a23e3c29d77955253903c9b2eff58460028fc2e31f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636UUJZJV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BObPf4Yh0ZdBJkUXd%2Bw0kCg0VdWIHOUBLTYNvcunfnAiEA5FpOSWgK6%2FzGdcGsubcedcpRdCaz8IBQMKT2GWjRxVwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbWD%2BCJdkUB1JjQ0CrcA57lzfeyqeX8EpaBR7K6J1XOqP1xZ6r9%2Bn70Ud8bOY7RKOK4fFWPe%2B%2FNqj6mo3RkOChXmNTqkbvGvObqG3yF2t2T8jgUclt0PazEU9I490lD8c41RYgrLuoxzMTNKKvJwze2LpJSfMk7RNYj%2BYZtov0oWND68t7FHZQCxwvlrArFGXubfCrbcOUksUa15riBEm%2Fa0L8lsSqRBPSuj%2FGCds8LmxBVcaaZLizj3WTkr%2FjSCwojXP0iW5jJ7sMqsPKs5eSmpkXJzgWT66pMoTxb%2BN9elMlBXvI%2BO9%2FbHyA%2FQaNLfpaFvYL8EyyA7awPciO3qp%2FgwLl44uzvwr7rMArJ0%2Bqzf%2FV%2FAWZcLt34ZGeofQYRSGMw46QyO6WhLPxbg%2Fs3v3F%2BEf3IxrD2NfXNfLLozB6m7MZcycKHwQ11Y85szgc9gnAlu5cBwyoQz4VNlNUzcrh5RCC4VVB5KigS94lnWgulV%2FSOawzVMDcribyr3r7wLRM2laAxZV22PAX8ErQGn%2FLpAtQ5Up3ocBk1h%2FvhVufsrXbe%2FpGG0SUMf2%2BAivxA1BH5KyjQ3%2FYFXchuYNZ7spNiCQcKoNLKdVqI2m6dP1eYbJCugkU6Cam9jMXPjjOoC7WD83WvwhP%2FbTllMMyy38QGOqUBWkRGUo46VuozNFIX1UbXg8qm%2FwHXEBIZDcyZUUyLJIPMMeK2u%2FJpjIclF8SKeaH18xXojPtRc8JhOab%2BtmQaBqiR1i4Bp1zOKcPQR8t64kj4nj8uNRohhFlkrVVi%2BibdrIbF%2BMvrgFsq4654jt5CBaF%2F%2F258VPoo9IVi%2F%2BgtQw6cHRdEOgq1271XDXv8m43Ifx7S99a1ki7AkETv3ky1IgQqoiD8&X-Amz-Signature=7a31c39af238202abc82a3404ee0ee3fdd9d3c7b7b1ebfdb37e45704d17edca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V23TR565%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FLl7hsRrj7vz7tYlpuJWnT5PH13f48i%2BRclu10tjoKAiBVcYHwUelDRyaa0gH7lUn3kFqux2%2BIUYnQkZw9y8TeTiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKlo1rMucOzYVTUWGKtwDLPMqwUpL8wZVEBexZ8Ath5bYkwbOyN0MnIiI0AON7tBrVTgH0HVIDkbWbfDGYoxSC1nREC0eyQ%2Bm61shrGYe%2F6kHP1Wgb%2BEx0vS6HheiQGd5l3%2BoTye6Z7kJtD4Qma6%2FkVQMDmsWVgRtSAHq7mhWHzeQfW0kkeovmdp4b6%2FwdYSr3uFWoGsoCU7yGtN3R8qMrr2HQ2kVudwWY0hXljtK2T18AkN1KTEsnZDi8YU959DX0ohPtjDwwR0M0RoirCTbTa1tGez0Zi%2BNc7GBiAsq2oghLRkobfitIisX2C8Dcvfm82OXjagt9eA%2BO09kqoCfXXX64dt%2BuxIrgaHipmILK0IXZghJ2vTaUAXfrZDCH4WxtgUTu8EUMf0hTQtJFxizaSG%2B%2FO%2FMVZnAYQ3VjZOkVXytoXCZ%2B167bIngL%2Fkrco546YDErCMEMJIP0W828Ob9xTt1FZ7yww5ZZczaAUDI3%2BDNrrfpQURRGr1gGY3Pyv74UGLpfrFxpnQ2v4KgoElJAaZ5hDVRIr9oO5JjY%2FVSTicjJgiGQSiry09JbBr4AvoNZDjdW9NBadQL8FSkVRUyGKTEZRH0ylrB1RB%2Frrns4eSs8cRwsZaJWQAlstIo3l5r4ZISzlRsZvhTraMw6rLfxAY6pgFfHslF4Jy9dWlwyvO3gKdMPGCF0ssajR9WNfg5EY2MIlHQHMHtEYqNlLJM6RPgds%2BRmxyJ2GR2eW2JSaub%2BVLwMO8UhQSOZbWw8h%2Bwm%2F4IE7eFTw%2FiZ%2B00G6civRjsS18RZ5i%2BYdMETUap81bIVQyM%2F9Iq%2Fi5MtPp5%2FiKaVb4w1y8iw80KoyUF5viERImoJLBfnUhikuDBwTUdbuYhh1182f56gCON&X-Amz-Signature=4d2e64b1a45f05f9888c9e95d098eb284ae459495d1cdfc978d8bd7a20294015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGF7SGIT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDl%2Fh375ELh6BERIPkIStEwKG%2B1ZYWvY4O1nFd78wgDwIgWgI7CFl1QF2jLDffAn4rBE4VXTZ4L8wg3bwlKVLhDr0qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhxNh0KV%2Bd9Q%2BL7dCrcA54I7E5QBg6rInzQajO2u8S%2Basj2RmcCFAm95H9BbddrTFn527NWFg4J%2FEIUT9nrJdN2k9%2Bb9vmX23zR3X0jOfL1of3vbrZz4dnDfZ3hOeePLQheDi97u29zJajAhswy1fF1GD3%2BspRpNFmlbzyKMoyB0zklK9A4FNhNbZ%2FRNck1IjK5JAdexmebsL%2FUSEDua65PdvbFa4tg0lZD3ccntrxAissUZxmCNLMsrOtfL9Sq0AROVd69j4BfGVj31NX8mAJ9KCAyL0TPBZgpVO2rQj1u64pFqQeZgktU8DSfh3D3Mdb7CWtzYfqqeVkJX00d9x4Xx8fgz711Dkn5l43zVAgswisxWwcsjdZjyJ8bzMgLkIi1IprW1WJYS6kLRQBTIPWetY1Hr6AJlCqqMFrPSVtQTTITubkHL7t1fkYetb%2FeMgJt9xlKeYKcPeaVWQBpQ3xbCB1tgnNC9i5nh8%2FQxw57FDzOTG%2B5J02bfdRlf%2Fj1K3Ete0kbEMFe9jIcds9yThpRSaJ6y4dHEJodOdHmV4X3LIhsIXZx14ZlSO97XWwgoYKgs%2FdQWluQ84XoXBaX0e98P%2B%2FTmRyqR9Wj331bmNtxhB5Kv4%2FPqVhzZmqlXGC1GRAimVisaQNCwlZCMJiz38QGOqUBPBXFKSu4k%2BxMX53MgGOq%2FUkLYWEDV8%2B4SRdj%2BmILyPVYBGg2Kix%2FID8IaPswO3NEoE%2B%2Fqp10WEXQ%2FIFThDvb2GZR%2FpfXYIcrBMB%2Fg1Ehww2RnZAeVFs9TrMIT7MneiRKdFGAi%2FQnLmG0l29LHEff5xbPCyODIR7yyWOdhhpgsrfC%2FxtMbBJzeZd8lbgtkUbSw6OXc%2F510qA5usT%2BVGkIQ%2F6K2awz&X-Amz-Signature=dc142b2a5f890a0af02367a68e5f4c687c1a990808cc55e959aad952d5a31312&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NKTWGK6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2EHkld7kLiTKbQgZ4OaRP9i7EHjaFXm7IORaXuqvEVAiA%2Fm1n6%2BdCeD1XB3sk1G3aSU2N9V53R7xoIhnNHR5yrKiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnjNbpl3HAJusXkIeKtwDh2KjoEDhQyySrcKLLJmjwu4AyJLf95bxuElw93JuPMt2vTBpHFxSaipDpHON9tvADQufPkJxk9NNLOoe5hBJE3CAcL7jumz1wkTq7hgd8RwHP6XHS4O7FMgH5KNcgH46Rgsx4tqF9oD0iKEeopNhh0JaCCEy6sFi%2B3JWiQcAhtjyYs8sODQibmVRpRZoqdCeTfI%2BUGcaY94liZqyxXLQlCW2vlCswBSv3qEvD7YNyDdJtMNLkYl08y3OQ4j7AG0i9jjtM2dZnybcX9N5tpezKH23CfgqMzNUURvDonTkSe5foHA4hWhVC3eTFS%2FPQvNK0WsvETNc0GIiFcUnvPqjEerTdg9Fqf10OeXaWipp5IPgifOmSfF1u2Ji%2FU60OM%2BojmPJ26YGF6IDrDe7gWFqgfJaQVOnksF%2FyUbULObW%2FwpBj7UjYQoISp11FM%2F%2B1Bj8yu4dBbiOpSWxWDqNKRIb6Bs6H8MD17pSnkhQywMGcbCPEW7AZQ88zEWvFFhTyc8JmB%2BS4rtlN2zB66eD4YUUs22ImjFC%2Brgrpor96WWPU5SM9ynYBNNJrQAd4nV4Nhec%2BoZs0SJNVh2dXI2d%2FvMRsuwG1%2F%2FRc0VS%2FGIEQKdZIOCQO7YIaJOTZZmqsn4wr7LfxAY6pgG4xdMyfRPNwrzxNzfhy2B82A1eC4PKs%2FRGHKqtOLJG9qSoJbgTwpY%2Fyd%2F5FLE3BrId%2BCbm4Ulnjk7EHwxkmAcsEPNZIv9mbS8Ec6zWNqTzCRtqOFYTPcF99duOu2yDSUn77ka7FG1HwBvm5Q0r75I91JnRrkRwK8FtKKqyzz0ZgQZhQwy%2BY%2BUbS2oUFMQSULarKX0NJScYWGckawAaTa2T3BjfnaAA&X-Amz-Signature=ae2781f91f7bcb90abc510d0ed1b537583fdcfe6ab2740c8af9572936b1eca42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636UUJZJV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BObPf4Yh0ZdBJkUXd%2Bw0kCg0VdWIHOUBLTYNvcunfnAiEA5FpOSWgK6%2FzGdcGsubcedcpRdCaz8IBQMKT2GWjRxVwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbWD%2BCJdkUB1JjQ0CrcA57lzfeyqeX8EpaBR7K6J1XOqP1xZ6r9%2Bn70Ud8bOY7RKOK4fFWPe%2B%2FNqj6mo3RkOChXmNTqkbvGvObqG3yF2t2T8jgUclt0PazEU9I490lD8c41RYgrLuoxzMTNKKvJwze2LpJSfMk7RNYj%2BYZtov0oWND68t7FHZQCxwvlrArFGXubfCrbcOUksUa15riBEm%2Fa0L8lsSqRBPSuj%2FGCds8LmxBVcaaZLizj3WTkr%2FjSCwojXP0iW5jJ7sMqsPKs5eSmpkXJzgWT66pMoTxb%2BN9elMlBXvI%2BO9%2FbHyA%2FQaNLfpaFvYL8EyyA7awPciO3qp%2FgwLl44uzvwr7rMArJ0%2Bqzf%2FV%2FAWZcLt34ZGeofQYRSGMw46QyO6WhLPxbg%2Fs3v3F%2BEf3IxrD2NfXNfLLozB6m7MZcycKHwQ11Y85szgc9gnAlu5cBwyoQz4VNlNUzcrh5RCC4VVB5KigS94lnWgulV%2FSOawzVMDcribyr3r7wLRM2laAxZV22PAX8ErQGn%2FLpAtQ5Up3ocBk1h%2FvhVufsrXbe%2FpGG0SUMf2%2BAivxA1BH5KyjQ3%2FYFXchuYNZ7spNiCQcKoNLKdVqI2m6dP1eYbJCugkU6Cam9jMXPjjOoC7WD83WvwhP%2FbTllMMyy38QGOqUBWkRGUo46VuozNFIX1UbXg8qm%2FwHXEBIZDcyZUUyLJIPMMeK2u%2FJpjIclF8SKeaH18xXojPtRc8JhOab%2BtmQaBqiR1i4Bp1zOKcPQR8t64kj4nj8uNRohhFlkrVVi%2BibdrIbF%2BMvrgFsq4654jt5CBaF%2F%2F258VPoo9IVi%2F%2BgtQw6cHRdEOgq1271XDXv8m43Ifx7S99a1ki7AkETv3ky1IgQqoiD8&X-Amz-Signature=49c6e3d785879eb97aba7ac0cf026dba036c2ce5ab45e472f149d135c36f4901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKUFOIYV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdwRkiDoaO6x20SIRfVx4MkFGZud6bnzDS%2F7A9NtkLwQIhAPzQnPjucMWqVu9mHBEnQMdyei4tPbNyYfQkR00ClDRlKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx71VFfSZAU1vPsRhAq3APXAqYaa35S5Wji5LTB%2FYr2DeLajQX32mW5z3pl778xOne4XU%2FMjy95%2Fk1Hx7qvAXypF3Sh%2FkKsIBTq7LwTmhmEXfyDrvoE9dIoniTLpoewItDPwAMww3uOunIAJ9N4yB9nHWAuwKeHNBBci1CSGhm3nOtCbL1G5ug%2BGXus6Z1kCihw9JN1UcUg93ca0FV1vl9rE88%2FT%2FlCg0sq6ASLbPVAqiQvRgtu2XDkmbmN7TiGzufI9J18AzTq5KbDQBlmsZKStNiEJF4Ipop1Kp%2FH9cQjqwZJb9ZBv0KJv0U8s4JbSHMifXC86O1wuk6aGFUofdnOQXPTV%2B2%2FpvC0GXLlD8lS5wKJ2rvS3SzaH3EUV2uoLrD6lAkaqN%2F7yZIhtE3hb0K4kl%2BKfTWrfgxqIs89k9WMJFWGSDwK8p2GwM%2B3jfKwfXQW3I73qy%2BC5Imeq8spRts0aVlO1CjJ5aG4j6xPSZxH2585KZEzs%2BK6j3nz4OCUbo%2FJE%2BYQhWE5xDbc5lAyOmeaPrFKLG1EbV0U4GqJVCnaeH6slxR1lK5yi%2Bukat86eJXftI9v0dtbh3GyaqtrywHRS32UZcYlxXkpbvAO53TZlX1KyBqvTi0DOXFTwwAH8BVNxnM9K2M4keR7rjCAs9%2FEBjqkASkD1qY%2Fsfzika6QDdQrf9RfdTdYwuNwxi0wheI5EbexZEtX2FCZ0qOlZrmetMhK4KEmHBDToE7lf6%2BnXwP%2FT5xHudOI2qM6ZbuRGAG3qSsIdcXftfSQr%2FXMzj5zF6GwSMPEhBhzvqv%2BJ%2Bt0KTuQrXK5cHTbkYuqq6GgIHhCKjqygs76PB%2Fc%2FhYmczafgnUSjVPeALz2jmg4wT6QhXjOBqF3PwHs&X-Amz-Signature=975140c66ae74a7ec31db3bad3f0804a8ae2f1de3e5510ff57fab1c54b3b2d5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636UUJZJV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BObPf4Yh0ZdBJkUXd%2Bw0kCg0VdWIHOUBLTYNvcunfnAiEA5FpOSWgK6%2FzGdcGsubcedcpRdCaz8IBQMKT2GWjRxVwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbWD%2BCJdkUB1JjQ0CrcA57lzfeyqeX8EpaBR7K6J1XOqP1xZ6r9%2Bn70Ud8bOY7RKOK4fFWPe%2B%2FNqj6mo3RkOChXmNTqkbvGvObqG3yF2t2T8jgUclt0PazEU9I490lD8c41RYgrLuoxzMTNKKvJwze2LpJSfMk7RNYj%2BYZtov0oWND68t7FHZQCxwvlrArFGXubfCrbcOUksUa15riBEm%2Fa0L8lsSqRBPSuj%2FGCds8LmxBVcaaZLizj3WTkr%2FjSCwojXP0iW5jJ7sMqsPKs5eSmpkXJzgWT66pMoTxb%2BN9elMlBXvI%2BO9%2FbHyA%2FQaNLfpaFvYL8EyyA7awPciO3qp%2FgwLl44uzvwr7rMArJ0%2Bqzf%2FV%2FAWZcLt34ZGeofQYRSGMw46QyO6WhLPxbg%2Fs3v3F%2BEf3IxrD2NfXNfLLozB6m7MZcycKHwQ11Y85szgc9gnAlu5cBwyoQz4VNlNUzcrh5RCC4VVB5KigS94lnWgulV%2FSOawzVMDcribyr3r7wLRM2laAxZV22PAX8ErQGn%2FLpAtQ5Up3ocBk1h%2FvhVufsrXbe%2FpGG0SUMf2%2BAivxA1BH5KyjQ3%2FYFXchuYNZ7spNiCQcKoNLKdVqI2m6dP1eYbJCugkU6Cam9jMXPjjOoC7WD83WvwhP%2FbTllMMyy38QGOqUBWkRGUo46VuozNFIX1UbXg8qm%2FwHXEBIZDcyZUUyLJIPMMeK2u%2FJpjIclF8SKeaH18xXojPtRc8JhOab%2BtmQaBqiR1i4Bp1zOKcPQR8t64kj4nj8uNRohhFlkrVVi%2BibdrIbF%2BMvrgFsq4654jt5CBaF%2F%2F258VPoo9IVi%2F%2BgtQw6cHRdEOgq1271XDXv8m43Ifx7S99a1ki7AkETv3ky1IgQqoiD8&X-Amz-Signature=94414a7e69dfef74dd339484f87365687c886888c80978e403a8402d300de7e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NGVZYIF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7N%2B6j1D0RFciK9HKDELwSG0MwSXpSspyqtHUNqihQBAiAJrKOYNyCjVhspNWbq6rOlwzJiNAAu8JYbbgXddvWT%2ByqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHYQQCn2sRO2m7OIEKtwDoLf8Lk3tIzzCWybHdh080iq2HyS630NBSfSqj9%2Fbq99sQC2VvKBVYCEDM9ewiCclpncARPzxfccg%2FmcbGoSZNMEk%2BJEdCuRPsOP75K1IB1ooRN7p5wNu3jOG9VyS5wg9P1WVmczCcQ0v0JSSGLZJ%2BLmIwuALZqJoK5DW1zIGQPD0Cu%2BECQWR22Ar0wNwPZ0KKtYcDKWRJmkolaWflqHnObEn9kX9%2FyzwwYAcGUnlmvTrnwZ07bfCE1d3lEDQyCvUEhmtD8rcMz%2FXvvIAYDSNEbzs4JcmkKsARIYh0jak4CB%2FwlZmNFAKfAhqeexCl9I%2B0u3xE8CtHbhmF%2FRNPmQDBY%2Fd0UGjEeXoAeeNC35NT%2FJdd5q2FY1DtHVcwoAjXLOCe9ztBIxnoYUkn0g17fn%2F1n4JDxhKkxJTJ69aUysv5i%2FmYi45zffBmJwdEoDfdj2i%2BthSIhp0PA%2BJPfzFsdqCFzKc6NJL3Qm%2FskEYPFb7ZA8ZhF4phGFjUbWOjqSRLrocBgxvJDng%2FDKd6f4KlWuVR5nG1RjU43YWb2d3G59hUPaKe8gwWAT%2BoyuMpfobI1otQQL16AjbY5nHipPSMiLpEriiSs8f%2FstqxveBi8Orp6dh3CSQr1UqNufsj%2BkwlrPfxAY6pgGraoGI%2BlH%2F%2FpjKaHnPxCoLAizcTBLCZAMA5lt9RuBx7%2FpN3PIJ%2B6Hly672pPpWJR8YySf0GGZmqT%2FCQmAfnS27pIwFtw76FJtXzoGY1DeK4Ihz%2FRn%2BNzNLuPHXpWxdOr84FgRY8QaHlbQdINKDJDuyvk%2BnR33dKsjEYDcVq2ecx%2BZcX%2FhLs0D8gmz2sT7jC6VFqh7SxMeREjQtj7D1aC5fpK9KHC5Z&X-Amz-Signature=97be858170f3118b49b00947d2ab9f98fc552698390d78aa23f5a15e1e1ad7e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636UUJZJV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BObPf4Yh0ZdBJkUXd%2Bw0kCg0VdWIHOUBLTYNvcunfnAiEA5FpOSWgK6%2FzGdcGsubcedcpRdCaz8IBQMKT2GWjRxVwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbWD%2BCJdkUB1JjQ0CrcA57lzfeyqeX8EpaBR7K6J1XOqP1xZ6r9%2Bn70Ud8bOY7RKOK4fFWPe%2B%2FNqj6mo3RkOChXmNTqkbvGvObqG3yF2t2T8jgUclt0PazEU9I490lD8c41RYgrLuoxzMTNKKvJwze2LpJSfMk7RNYj%2BYZtov0oWND68t7FHZQCxwvlrArFGXubfCrbcOUksUa15riBEm%2Fa0L8lsSqRBPSuj%2FGCds8LmxBVcaaZLizj3WTkr%2FjSCwojXP0iW5jJ7sMqsPKs5eSmpkXJzgWT66pMoTxb%2BN9elMlBXvI%2BO9%2FbHyA%2FQaNLfpaFvYL8EyyA7awPciO3qp%2FgwLl44uzvwr7rMArJ0%2Bqzf%2FV%2FAWZcLt34ZGeofQYRSGMw46QyO6WhLPxbg%2Fs3v3F%2BEf3IxrD2NfXNfLLozB6m7MZcycKHwQ11Y85szgc9gnAlu5cBwyoQz4VNlNUzcrh5RCC4VVB5KigS94lnWgulV%2FSOawzVMDcribyr3r7wLRM2laAxZV22PAX8ErQGn%2FLpAtQ5Up3ocBk1h%2FvhVufsrXbe%2FpGG0SUMf2%2BAivxA1BH5KyjQ3%2FYFXchuYNZ7spNiCQcKoNLKdVqI2m6dP1eYbJCugkU6Cam9jMXPjjOoC7WD83WvwhP%2FbTllMMyy38QGOqUBWkRGUo46VuozNFIX1UbXg8qm%2FwHXEBIZDcyZUUyLJIPMMeK2u%2FJpjIclF8SKeaH18xXojPtRc8JhOab%2BtmQaBqiR1i4Bp1zOKcPQR8t64kj4nj8uNRohhFlkrVVi%2BibdrIbF%2BMvrgFsq4654jt5CBaF%2F%2F258VPoo9IVi%2F%2BgtQw6cHRdEOgq1271XDXv8m43Ifx7S99a1ki7AkETv3ky1IgQqoiD8&X-Amz-Signature=d0f12e5e1638c559ecfea3dedb25c197bf4c2c49eb9c5bc7588ecf6e0e6982b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VND7JQQF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHY6bbkeKIflZ5rc1ZJNru%2BypKe0l4v%2F9D%2BdZ4mbf2RWAiEAj%2FYyLGBQhFFuqNdFxBaAMW4AP2QeLr4Yd%2BzAnPAkF%2FYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4PtqqkZ0pUUN131ircA2ZLtCpoiCIOhttaKWpoewq3P0FC855Wzxxj1p17pjqQoTsS8YYkcd4vOxlXjiAnwFzPDJJ73pydFW27RKWd%2F3EMfnjOzKQRPfL2HIU87%2BhqZVymSPnAGDWANTr0K8OT3B%2BFaQGnL4hOMki5pNrFJ82QSOrd7wpR9n5awrRMYxYYcx4YiQzMnUTw%2BkUQdvS9JZYpK%2ByRVTqzfpAaBghD3qtpVl74oss0EEgTgHPPG0jw1bUvAyZWir9TaFrIqY%2BjZjVyw47eoSOiaSqd1u%2Fyr%2Fw3Nn75cI8c9a%2BB8i%2FJmhUJkrOWiuZkbaWc2sB4zXh4IpS8AVFbR7s58UuDMdM1a8wVfQ%2F54F496wbYkKG%2FEk7sgBNaQ9ZYUl%2BLm3taWcfFyROrvzwA7Cx5HaBI9U%2Fr1YeadNYOTANYNKn%2Fuz%2B%2F1TzmDIuluzHTUWr1efQEb7zCISJAMQ1pUHw5EeX1w4F7tY70ocGnJ1kuUM9BomBgbXWrDAEW%2BnR%2BBQ1yb8cjG0gew62eOiawGcpRmfGOTZ0vvRduJO%2F%2FAqIFX0s7gmIRZNutClhW3SwS15MNTpK2PpcQ4cpggb4qq4WtK31Kih7FPZ6nUJ9HSeR6law%2FktuLrM5xFW4YaTvgufrU5oPiMOWy38QGOqUBF3F749l7m8HSS9iOnFucUXyVAeODQcba0AjoAi%2BRnJDkiviWU3ueWoqwh2Zm0iB0PFartDATcrmjMAwdrvHwdzAODZ4185maTtSoAbuMyrCpmy4KTbyGSKD%2FYWuSBaCc%2Fj4FrcHp8GV3E%2FzbfIxuShLzhBSN05gTkIR9meu9nlYJ4Q3jweJGZMg%2Fjb0CEaIqA8hlIQw3901zyNO7bSkw%2B4TK9REr&X-Amz-Signature=dd00ac1e99918329ad40ff96fb8a9904559d0f8fd533f679eb91fbe7073231f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636UUJZJV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BObPf4Yh0ZdBJkUXd%2Bw0kCg0VdWIHOUBLTYNvcunfnAiEA5FpOSWgK6%2FzGdcGsubcedcpRdCaz8IBQMKT2GWjRxVwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbWD%2BCJdkUB1JjQ0CrcA57lzfeyqeX8EpaBR7K6J1XOqP1xZ6r9%2Bn70Ud8bOY7RKOK4fFWPe%2B%2FNqj6mo3RkOChXmNTqkbvGvObqG3yF2t2T8jgUclt0PazEU9I490lD8c41RYgrLuoxzMTNKKvJwze2LpJSfMk7RNYj%2BYZtov0oWND68t7FHZQCxwvlrArFGXubfCrbcOUksUa15riBEm%2Fa0L8lsSqRBPSuj%2FGCds8LmxBVcaaZLizj3WTkr%2FjSCwojXP0iW5jJ7sMqsPKs5eSmpkXJzgWT66pMoTxb%2BN9elMlBXvI%2BO9%2FbHyA%2FQaNLfpaFvYL8EyyA7awPciO3qp%2FgwLl44uzvwr7rMArJ0%2Bqzf%2FV%2FAWZcLt34ZGeofQYRSGMw46QyO6WhLPxbg%2Fs3v3F%2BEf3IxrD2NfXNfLLozB6m7MZcycKHwQ11Y85szgc9gnAlu5cBwyoQz4VNlNUzcrh5RCC4VVB5KigS94lnWgulV%2FSOawzVMDcribyr3r7wLRM2laAxZV22PAX8ErQGn%2FLpAtQ5Up3ocBk1h%2FvhVufsrXbe%2FpGG0SUMf2%2BAivxA1BH5KyjQ3%2FYFXchuYNZ7spNiCQcKoNLKdVqI2m6dP1eYbJCugkU6Cam9jMXPjjOoC7WD83WvwhP%2FbTllMMyy38QGOqUBWkRGUo46VuozNFIX1UbXg8qm%2FwHXEBIZDcyZUUyLJIPMMeK2u%2FJpjIclF8SKeaH18xXojPtRc8JhOab%2BtmQaBqiR1i4Bp1zOKcPQR8t64kj4nj8uNRohhFlkrVVi%2BibdrIbF%2BMvrgFsq4654jt5CBaF%2F%2F258VPoo9IVi%2F%2BgtQw6cHRdEOgq1271XDXv8m43Ifx7S99a1ki7AkETv3ky1IgQqoiD8&X-Amz-Signature=af1c39b056b21659bb487381686ba61d0de8180b44c4e38824d107830cc1e5e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDYGXSPR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSCyroitByxpxjpOgA18vxjdt0dbPr0ybdJ8uozmuxhAiA57TOaHofW41WG2z%2FzpAvcezsImaeF3B4UhiCwAdqFYCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcAFlJN17qa00tmq%2FKtwDWg1rcUlxQ%2FFJYxJAPx2mf9D8HLsThbw2Yb%2BzFejfaNghQ0a8%2BOnDSsiBW6Zcfeu0QnLWzNzS6zyYDADkx3aM6GOg%2FGRCR%2BgXcU9V2jU38JY1XEbsvrTcJnsOtyHN0388ATWOvyVrZnshOrKiX3MYFAOwvsXkRnL%2FX1%2FXW%2FlqbKF4lxxO6x9MCjKlIVzcFTzbwbNZfem4krFnu2WzfAtTupR0f3LeAyAjEMKQsaJ8Mtqchstlo0cYwtQc9nSdFMkLX8Q6wfKUahh0fgLR%2FBlzc%2FaVAXi%2F3g9zPHWHcmihOtab1SU7FcnXQ4rcbQ1Q%2FZgMhAxwQNKKdJDlQlXPuoqoY87zd3LQQFVUNBTw9Hr%2F97fDHaoRYnqp%2FFLGMeXefdWFqFmyzHxhLPSvQ3hDMNhter8ZgZ0S3%2F0OKeRYAT6VyhcKhY4xb65JCl4gcc1L0yvASnhxc8CPdUj2qXth03E2cdI%2BIw0rkvBZ9ED4j0FVOqWNACHBaxUImO3mp7aiIC3c5w4MCc8sJxkmbnDqMrirKj72jxW23713mpAReTpwpCX18HJfcpWbQYfgsXOZHuWkNqCODjnQPLxZwNYtapyf0fsZrzfQcOls8Uohd%2FsiRPKeZQihJ217slDoDYAwy7LfxAY6pgFd35P0736aFHzBEv5asdStA3GknCDvxB83%2BiyBVIGxb2Y17kzLmM%2BnzfScV%2F%2Fz%2F9yAAeW4QqUdx6kKGq6iBrGCAxyfW15fbW5ICzJMR1TxSZ7ut1jQVeV02uTqsi4g7gbZeIOsPQOo0IySqtwZbOJ48xdhisrbMdrBIBBzpauvfrObRLN2BUgV%2F7l7XcyPAIhvE3yB2ZoJ9u52udtTXEoyfqzPI06O&X-Amz-Signature=b02a983d766c0d967391f9280da2665fd0c15105beace3a2e7a493b36a403a8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM46VBDQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo%2F09h%2F1NQQBZRbsex9bqs5YuyGtKmSFMlftRglPYQWQIgTo7EUA0IxkBhQbgaPPoZfSFjlr7rDlsVOllpDoQAL5MqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJa57v9CmwA3tNeklircA7xr2QJkL3S85mBWFgyEojrZ0hFxn%2F4fgPqorhqjjxglk3BvgUKb8qyCOLwoE8i0Hf4cy5Gn71ttfN6Gc25dcHpGnFRG3ECdlQSmW7YvRX1KsYABxB4Jcyg4nkgOQXeeg%2F%2BUJdanmpV4C9bp11%2Bcw0zkKJrJi5F1xXM5gHNz0QzYrtegJIn4ayRIgsTbY9vnQzZGwp58yUbQEf9mGb8D%2FmeNM8oCZ%2BU%2BIXY90t5v84hiKIOeqGXi0ZxjlsRPbLmRkewfNjCbMUiD8sKKQkS834Q2XpmafYrkvpXgQk6o4xJZOB96TcqpcNfFcZ6%2BVEW4oELtAzLrLLF8cR35ZnhM8JfPt4vwLLu1WGTc2lD4ixJfIwBf6%2FVsBTwDnG%2Ftf5KauLhzU2LO59JfYZL9EpJGyyWVrd7jCyEVqLAOWxB9exWE0kbvJwUzHMxUyywIsX2wVkbk1%2FKKDnLhpIXhS9YOGEoQd%2FVaUZENS9%2FBeDR2SKXcMOO2M5M8nkrftGmgUjF60nMMDNX1I859rWAwBTmp7KIvupmGhF%2FGPyW%2FOZd%2BtY9Y6py6EhmNTV8tf2%2B47FWXesVR3xLgVe9DFRRb1roqYOVBSxvjp3Abqh7x%2F%2BQOb8hB6maINl4gLu95LCJRMLey38QGOqUBcas%2Bc%2FaQsagovkXtKMQnIFAPwwVWtSePoc0geSOEQ26smn%2FialzaqHppu5vKVwvvbonqpmdEZlc2pKVFMnwGgQXWnw5SL4EDtyKqhF9aEJTRAgABs5EUjSAF2vmASxBAlgVNKazStqMPWeZYLvS4NeI3kEHkMZ8jpgCw4v5idE7rNGTHqOdusyd1fHPUdpfH7PO33ag9iAeS%2FmaPR%2B9QzfpcFCDk&X-Amz-Signature=9f8ee701d787c43a89e91874ee28700aaf4624efa917f84dfa7a9b3ac493f6e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEMBFXF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSPqTVaX010d5TeLoQAdt9K1ILJoctpkC0Ua3EFpPdqAiEAuSUXceoSgvWPklHbcxjPOHM1PFXcFUnXzk%2Bzbo8xnykqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuR4gibZabDxru%2BMyrcA2LwQw5GRzE%2BDVz4kUtigfwGYEfOjKlclZJhYFEBcXnhyygKQwjpq%2BkYBRiZm%2F%2BrJ12AgZOLwiI60BlBquKai%2FTqw5tu0heOGdyabjdu7rtZA0xMITvSs9dQwndiaRiyIrAl%2FmPcGaflPbX6vIsuMkjn8X3AhSt8VFIdXI1jT5Kax7SK5u5RxvAW0GdHj3e%2FfgssuKWuN4MtT2r6c%2BHlCkvryX1JhLEY7cU2qxJC9Rp1tLY1HYG4nOun7j32iJFwQw5Wlr6q7TiGh0NrSzZkJu%2F8OtTGkMeL%2B5gSAXY8r2gMrMGoekQRXYJUN4yKZQqHLeONmenQrX5W4ij2tdQ2O%2B4%2B8uRrFGatLpSKj4rQrL%2BZZZp%2BW7xZmcjohi9DHyXtHFWtDGaBU1vEV%2FmytuPdClhL15dAlEBH%2BDgAR2Xg4uoo6RzLj1m%2F%2F6rRCnSu7fi90kjNQeeU%2FBlVJhL8AGUPB0NT6TXjDsxRksAW6nfQvt90BuEIaLPVDJo66fT%2FIaIP%2F%2BcsskXbJyeFkazM4oxwkMavV9tJakKnKBK1X2ZJJ0EyknRFfjfTUKy%2Fb3KIstrccmA5CqVXmbTbafiiCgaK9gBzjtUhOMAz2yjDNnKzA6EPPL35RzrghFYHUX3xMMGy38QGOqUBduds0uGWVe7c4hcPmNbqE0tEh0ZSwMZUTK1VQvRdenhAbmgzm7%2B%2BbLREfnfBmnwCsOjQVd%2F4JCWuKSU2tGnw9wS5bhz%2F40%2FdF2tOQ1XOuPzju3SJE3MTOcO22jtw4v024hMchKgFmJJRS6oUu5VxPC%2B8S45DIAanpqIKvGkSOdkE2snTbkBBXM1PCGiPPwAPLf9nIzeTRHrldcsvWELjHu5FRTNj&X-Amz-Signature=6b479026ff453ec39f111ef846cd25cd7779603aedd9f904ab2318bc7cfd2a61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIC4IC5B%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgoJfuqDC2lNKhymBL6gAHzT1wKyge87VPsCw78ABH2AiBRyAAYMQgJb4yEYuzU9ul2MWp47FLmxVkTS6GG47qVpyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUjArfG5rbSyNXxQuKtwDEXBFCFJaTrRqL5aemOGPcEDVBKj1bvwnPuLvVuxfY27JGaY2CeFw%2F2GS6Q5QD2YVOzaPwQjAUnoiXXPLH0u%2BjHJt7Gu%2FlCFpbyujzo5EI2iW%2By1wYvuPO9oj3yfL3qB3GaIBibZJyC1Nkp5VODytSVP%2BXMxfCeoGgTLPZHxv7AG%2Fg9vhm8dmTTRO4YMaAx%2FNe0sOkL7jRUBX5VrcWCS8cJfV6p5C6ysjU3N%2FEv1hVHaYqxOGq3Wnn5Olq5uB8dE6fI82Vgnu%2FCghtnl80KggIFMrygABuRyne13ND0LDsKs7IsBcPPOTk9pEFMLCPqwPghap4LHOGOEGXsfZ%2BVSYQDHnafZ8rMG1JazK4c3%2B8Wcm8rkM0mK0MkgylMg7M8FicpWRb0tugshwaDrgyjGOQObpm4WOWXUYV3utBveEy4tSosICuRbetOITi3L%2FtypKZwzDpOB7fGyWEprADC3IzOifvXS921izehVi71jSCIvYtWTDITe%2Bl%2BrRZ2B5hEEApmEAC4BLI2l6o2Rtmfia%2B8F6kPeuuddDJ4ld%2BcP%2BWZuN7GxuMJLuFUgcp17T8YfR%2FaUvG%2BabRFRFBKTyuY8FmXEWfxWhADazYDMsW3wVaQ83H446sozqDSCzF2Ywv7LfxAY6pgFFm1iCifJd%2Fs%2B67%2B4Y2Jmf4Tl%2B8TR%2FwkQRRsCOoEIUub%2BatCn60dTNj2ufOgN2W7V8veS0LliuHcqEtp%2Fe31AD01atf95OrWNBU2T9s4yCD2kSFQiVbIvmlobIPWktTJ0C5e%2BWYe8iuYBF3o4jtLrgwTRdlxr0%2BU%2FluNnwjTerPvOCyE7CDmR0J2sCaoMOtrQqMgJjeJ775PXM9ji%2FB8jG3CkA53Yn&X-Amz-Signature=1e63a4b5ebb134427af412ca99875c5546be70151086d90f5c7a3ddffcb72996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IG6JBWR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTpSEYQxm6WpHuFUV%2Ffg%2BezY13jIBNiUs3AWD7T1xjmwIgQuV%2BcMXEeKgeoAuZUOKbQVVKB9cAzbnJmwvL7dnrVssqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyEyaFOKY6iItPyIircA34lld79R6dfvxcdQ1%2FN2wvpLp%2FkEPddLRX9O%2BesGCb7%2BCjcAuNu%2Bh9Y9VMWQeCP8EqgSbBHCQdkpHsfRmbwWI6qmpwJUFrcQ6DfA%2FHAPTtN5qhtp2pR3mudXxdCxBQQrii8be2GUb9ONwWfaJNgNBoxeMYOf2XmxZQa%2F87F6AiwMTSDxCyNAoQmVyhnWGveof3scejgvFTrZzC352DtpWP98JU6tfubVYdkpCzXvPFuLTE47hWbkuNDysM2rMdF0Ib3p7ySAo58jv46BDcM99n5i9M8iB3vnImRoVYkDecHq2qCgZRTkbJGqEF3Lzd752POMC2I5oDc8gLXDhhlA9wdie2gZ7FXxxHd0IBLUaZ9E5FNfuaI8mX8oSJtj2pMOjJn9GZqeIR%2FdhqpbHslkLsbssS07R%2FQ9bnfWSoqUnniIuZl28NLjKDG3shAER9rE7tETCcGHQ5neP%2BIbfyf5EutMGQa2VLNgbGYqiDVVb3Ya0M8606uC83PKmJfvOuExDK5g6EVRMmo2pCJsotZ36ukW0fiQTFKEcDBBhPErWffoMflqUtCLaIx4CcIProJzGrEIyTMlfNcttErVkr77VnHowLZ9mr0pRiQYW7oINk%2BGo7wwIUjDiQSU2WXMMGy38QGOqUB4lskwkdw0TfPcmWbRNXLGpv%2BwnVg5BHJ4kSIyfX%2F4%2BnJy2X%2F%2FQpQQwAyW9FPxnx83E2FSaGQJ6cbsv4GcU43UWvB%2BJf9UzNZY12nrp67NG4yJUQVNTGhWYAx1zZ%2BhrWsGhviMNkW%2F8ojGfV7Lgj%2Fpq7l0gczLudSoypyZ0Aidxmd1BeLFoQokgsrGz8uRIOTUvV3U33Y1sdi9RVXsboqa%2BoEPMNk&X-Amz-Signature=164fefd080dc7e0fd953abeca04325ce33152b07dce19be56c9e8e8e01329d1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636UUJZJV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BObPf4Yh0ZdBJkUXd%2Bw0kCg0VdWIHOUBLTYNvcunfnAiEA5FpOSWgK6%2FzGdcGsubcedcpRdCaz8IBQMKT2GWjRxVwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbWD%2BCJdkUB1JjQ0CrcA57lzfeyqeX8EpaBR7K6J1XOqP1xZ6r9%2Bn70Ud8bOY7RKOK4fFWPe%2B%2FNqj6mo3RkOChXmNTqkbvGvObqG3yF2t2T8jgUclt0PazEU9I490lD8c41RYgrLuoxzMTNKKvJwze2LpJSfMk7RNYj%2BYZtov0oWND68t7FHZQCxwvlrArFGXubfCrbcOUksUa15riBEm%2Fa0L8lsSqRBPSuj%2FGCds8LmxBVcaaZLizj3WTkr%2FjSCwojXP0iW5jJ7sMqsPKs5eSmpkXJzgWT66pMoTxb%2BN9elMlBXvI%2BO9%2FbHyA%2FQaNLfpaFvYL8EyyA7awPciO3qp%2FgwLl44uzvwr7rMArJ0%2Bqzf%2FV%2FAWZcLt34ZGeofQYRSGMw46QyO6WhLPxbg%2Fs3v3F%2BEf3IxrD2NfXNfLLozB6m7MZcycKHwQ11Y85szgc9gnAlu5cBwyoQz4VNlNUzcrh5RCC4VVB5KigS94lnWgulV%2FSOawzVMDcribyr3r7wLRM2laAxZV22PAX8ErQGn%2FLpAtQ5Up3ocBk1h%2FvhVufsrXbe%2FpGG0SUMf2%2BAivxA1BH5KyjQ3%2FYFXchuYNZ7spNiCQcKoNLKdVqI2m6dP1eYbJCugkU6Cam9jMXPjjOoC7WD83WvwhP%2FbTllMMyy38QGOqUBWkRGUo46VuozNFIX1UbXg8qm%2FwHXEBIZDcyZUUyLJIPMMeK2u%2FJpjIclF8SKeaH18xXojPtRc8JhOab%2BtmQaBqiR1i4Bp1zOKcPQR8t64kj4nj8uNRohhFlkrVVi%2BibdrIbF%2BMvrgFsq4654jt5CBaF%2F%2F258VPoo9IVi%2F%2BgtQw6cHRdEOgq1271XDXv8m43Ifx7S99a1ki7AkETv3ky1IgQqoiD8&X-Amz-Signature=71139bd3775b19acea0469d9d6e8c2081a4906acb9714d76f2098cd62b8de308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636UUJZJV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BObPf4Yh0ZdBJkUXd%2Bw0kCg0VdWIHOUBLTYNvcunfnAiEA5FpOSWgK6%2FzGdcGsubcedcpRdCaz8IBQMKT2GWjRxVwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbWD%2BCJdkUB1JjQ0CrcA57lzfeyqeX8EpaBR7K6J1XOqP1xZ6r9%2Bn70Ud8bOY7RKOK4fFWPe%2B%2FNqj6mo3RkOChXmNTqkbvGvObqG3yF2t2T8jgUclt0PazEU9I490lD8c41RYgrLuoxzMTNKKvJwze2LpJSfMk7RNYj%2BYZtov0oWND68t7FHZQCxwvlrArFGXubfCrbcOUksUa15riBEm%2Fa0L8lsSqRBPSuj%2FGCds8LmxBVcaaZLizj3WTkr%2FjSCwojXP0iW5jJ7sMqsPKs5eSmpkXJzgWT66pMoTxb%2BN9elMlBXvI%2BO9%2FbHyA%2FQaNLfpaFvYL8EyyA7awPciO3qp%2FgwLl44uzvwr7rMArJ0%2Bqzf%2FV%2FAWZcLt34ZGeofQYRSGMw46QyO6WhLPxbg%2Fs3v3F%2BEf3IxrD2NfXNfLLozB6m7MZcycKHwQ11Y85szgc9gnAlu5cBwyoQz4VNlNUzcrh5RCC4VVB5KigS94lnWgulV%2FSOawzVMDcribyr3r7wLRM2laAxZV22PAX8ErQGn%2FLpAtQ5Up3ocBk1h%2FvhVufsrXbe%2FpGG0SUMf2%2BAivxA1BH5KyjQ3%2FYFXchuYNZ7spNiCQcKoNLKdVqI2m6dP1eYbJCugkU6Cam9jMXPjjOoC7WD83WvwhP%2FbTllMMyy38QGOqUBWkRGUo46VuozNFIX1UbXg8qm%2FwHXEBIZDcyZUUyLJIPMMeK2u%2FJpjIclF8SKeaH18xXojPtRc8JhOab%2BtmQaBqiR1i4Bp1zOKcPQR8t64kj4nj8uNRohhFlkrVVi%2BibdrIbF%2BMvrgFsq4654jt5CBaF%2F%2F258VPoo9IVi%2F%2BgtQw6cHRdEOgq1271XDXv8m43Ifx7S99a1ki7AkETv3ky1IgQqoiD8&X-Amz-Signature=4e96a9c5613f387f0904c4804a11da4ff12b38f0398d258c55307c5c2c09847e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7SL5VJN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIg%2BxJdmtictyS%2F1nL012N9wt8S7CC9k7I%2FgDwM1jpXAiB8aHPdrahGktFPDOFDmopDXog2sE%2BcNwWYc3u23Q4XuCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUM8LMpynYYjJYJGMKtwD%2Fx0E9L343HQ3SUE%2F0ayV4q7IGpOEn8QZmg1DSiHZGzcU4gl9KRju8OX3I%2BFF8aSdE97W%2FVomIKDJiEm1r9rF3oGBzosYD5kowYe2Tc1j%2FlUo8%2Fgwh7kccSgJ%2BrTWG97eB8Yaq0tC4Sbnunn9aGNYfwE%2F0ZAjZegD2%2FeIh5UrUpKs8IMrWAkN8ap5TBsXWQyjsOB3fGoYilTOwklBjiAktxn4taccFJc%2BkNrz3QQRQ9xqJ0hnlGM6UM4WTh7HLljmffFJT6v5nTgbjlFb0nGRskBTIgtNLCplQda2vVeaHA%2BsGDmgJQZrT4Rggz82kStaRVOBibwVMVpToqSmX3Gfj3adSb6iBh%2FTNiNywWM9leCK4tzZHkCXCR6s4SMUviUHlLZN%2B0strvkR69LKVnFeON5wjA1XihHnYyglG8tHrQkF4eiSzf1SmZ%2Blvc3TDMpBUBXq%2BJ5E%2BoVSf6XVsbr7FZhUtWBcO9r65b7ZR%2B1iPQ4s9iYPzQAqzezS9wv20u6rlEJeMR%2B24RDgN6PecQyWLOOc3UTDuKzldPs1QaP8sOIwQX6LBWwePmWfphiR646Du3owA53k6Olom8bBOK9B56yqLXrrv5dg0Bzl58bNI0r9nwhzgTOODSuKRjMwvLPfxAY6pgF7QuJ9rX7zn7fLTDlowtW3bD6IxA3ktTps24EEkhg5i%2FbfCAtlt718lp8MHsNHKvKTU%2FZmQ%2FA8aWh0UplKdq3Edj9LMqZ2eWRZgofGFxR%2Bdgc0m9HI9PRBZZsZTLLVIeusdnu%2B8YtxGIr2Gw3NefpxbtSIiyxxeK0NA2Ex5Boa%2FGMvO%2BI5RNFs%2FBnFmi0OksJZIkxcPWp4epwvGv4YuF50HuD6SqP4&X-Amz-Signature=d3da9b77f86dcb9db9e339020e983b80ad222a6666f7b7ae73bdb33e2609410c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7SL5VJN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIg%2BxJdmtictyS%2F1nL012N9wt8S7CC9k7I%2FgDwM1jpXAiB8aHPdrahGktFPDOFDmopDXog2sE%2BcNwWYc3u23Q4XuCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUM8LMpynYYjJYJGMKtwD%2Fx0E9L343HQ3SUE%2F0ayV4q7IGpOEn8QZmg1DSiHZGzcU4gl9KRju8OX3I%2BFF8aSdE97W%2FVomIKDJiEm1r9rF3oGBzosYD5kowYe2Tc1j%2FlUo8%2Fgwh7kccSgJ%2BrTWG97eB8Yaq0tC4Sbnunn9aGNYfwE%2F0ZAjZegD2%2FeIh5UrUpKs8IMrWAkN8ap5TBsXWQyjsOB3fGoYilTOwklBjiAktxn4taccFJc%2BkNrz3QQRQ9xqJ0hnlGM6UM4WTh7HLljmffFJT6v5nTgbjlFb0nGRskBTIgtNLCplQda2vVeaHA%2BsGDmgJQZrT4Rggz82kStaRVOBibwVMVpToqSmX3Gfj3adSb6iBh%2FTNiNywWM9leCK4tzZHkCXCR6s4SMUviUHlLZN%2B0strvkR69LKVnFeON5wjA1XihHnYyglG8tHrQkF4eiSzf1SmZ%2Blvc3TDMpBUBXq%2BJ5E%2BoVSf6XVsbr7FZhUtWBcO9r65b7ZR%2B1iPQ4s9iYPzQAqzezS9wv20u6rlEJeMR%2B24RDgN6PecQyWLOOc3UTDuKzldPs1QaP8sOIwQX6LBWwePmWfphiR646Du3owA53k6Olom8bBOK9B56yqLXrrv5dg0Bzl58bNI0r9nwhzgTOODSuKRjMwvLPfxAY6pgF7QuJ9rX7zn7fLTDlowtW3bD6IxA3ktTps24EEkhg5i%2FbfCAtlt718lp8MHsNHKvKTU%2FZmQ%2FA8aWh0UplKdq3Edj9LMqZ2eWRZgofGFxR%2Bdgc0m9HI9PRBZZsZTLLVIeusdnu%2B8YtxGIr2Gw3NefpxbtSIiyxxeK0NA2Ex5Boa%2FGMvO%2BI5RNFs%2FBnFmi0OksJZIkxcPWp4epwvGv4YuF50HuD6SqP4&X-Amz-Signature=c22f77be663e5b72a16b8b6d5256d16ea3fd427ba1542f0d019b95e5b6aeb4de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7SL5VJN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIg%2BxJdmtictyS%2F1nL012N9wt8S7CC9k7I%2FgDwM1jpXAiB8aHPdrahGktFPDOFDmopDXog2sE%2BcNwWYc3u23Q4XuCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUM8LMpynYYjJYJGMKtwD%2Fx0E9L343HQ3SUE%2F0ayV4q7IGpOEn8QZmg1DSiHZGzcU4gl9KRju8OX3I%2BFF8aSdE97W%2FVomIKDJiEm1r9rF3oGBzosYD5kowYe2Tc1j%2FlUo8%2Fgwh7kccSgJ%2BrTWG97eB8Yaq0tC4Sbnunn9aGNYfwE%2F0ZAjZegD2%2FeIh5UrUpKs8IMrWAkN8ap5TBsXWQyjsOB3fGoYilTOwklBjiAktxn4taccFJc%2BkNrz3QQRQ9xqJ0hnlGM6UM4WTh7HLljmffFJT6v5nTgbjlFb0nGRskBTIgtNLCplQda2vVeaHA%2BsGDmgJQZrT4Rggz82kStaRVOBibwVMVpToqSmX3Gfj3adSb6iBh%2FTNiNywWM9leCK4tzZHkCXCR6s4SMUviUHlLZN%2B0strvkR69LKVnFeON5wjA1XihHnYyglG8tHrQkF4eiSzf1SmZ%2Blvc3TDMpBUBXq%2BJ5E%2BoVSf6XVsbr7FZhUtWBcO9r65b7ZR%2B1iPQ4s9iYPzQAqzezS9wv20u6rlEJeMR%2B24RDgN6PecQyWLOOc3UTDuKzldPs1QaP8sOIwQX6LBWwePmWfphiR646Du3owA53k6Olom8bBOK9B56yqLXrrv5dg0Bzl58bNI0r9nwhzgTOODSuKRjMwvLPfxAY6pgF7QuJ9rX7zn7fLTDlowtW3bD6IxA3ktTps24EEkhg5i%2FbfCAtlt718lp8MHsNHKvKTU%2FZmQ%2FA8aWh0UplKdq3Edj9LMqZ2eWRZgofGFxR%2Bdgc0m9HI9PRBZZsZTLLVIeusdnu%2B8YtxGIr2Gw3NefpxbtSIiyxxeK0NA2Ex5Boa%2FGMvO%2BI5RNFs%2FBnFmi0OksJZIkxcPWp4epwvGv4YuF50HuD6SqP4&X-Amz-Signature=78eab7c19f19b74f069d25f5b609c3d6f7ed3984c6a72833110c99fc98764d2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7SL5VJN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIg%2BxJdmtictyS%2F1nL012N9wt8S7CC9k7I%2FgDwM1jpXAiB8aHPdrahGktFPDOFDmopDXog2sE%2BcNwWYc3u23Q4XuCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUM8LMpynYYjJYJGMKtwD%2Fx0E9L343HQ3SUE%2F0ayV4q7IGpOEn8QZmg1DSiHZGzcU4gl9KRju8OX3I%2BFF8aSdE97W%2FVomIKDJiEm1r9rF3oGBzosYD5kowYe2Tc1j%2FlUo8%2Fgwh7kccSgJ%2BrTWG97eB8Yaq0tC4Sbnunn9aGNYfwE%2F0ZAjZegD2%2FeIh5UrUpKs8IMrWAkN8ap5TBsXWQyjsOB3fGoYilTOwklBjiAktxn4taccFJc%2BkNrz3QQRQ9xqJ0hnlGM6UM4WTh7HLljmffFJT6v5nTgbjlFb0nGRskBTIgtNLCplQda2vVeaHA%2BsGDmgJQZrT4Rggz82kStaRVOBibwVMVpToqSmX3Gfj3adSb6iBh%2FTNiNywWM9leCK4tzZHkCXCR6s4SMUviUHlLZN%2B0strvkR69LKVnFeON5wjA1XihHnYyglG8tHrQkF4eiSzf1SmZ%2Blvc3TDMpBUBXq%2BJ5E%2BoVSf6XVsbr7FZhUtWBcO9r65b7ZR%2B1iPQ4s9iYPzQAqzezS9wv20u6rlEJeMR%2B24RDgN6PecQyWLOOc3UTDuKzldPs1QaP8sOIwQX6LBWwePmWfphiR646Du3owA53k6Olom8bBOK9B56yqLXrrv5dg0Bzl58bNI0r9nwhzgTOODSuKRjMwvLPfxAY6pgF7QuJ9rX7zn7fLTDlowtW3bD6IxA3ktTps24EEkhg5i%2FbfCAtlt718lp8MHsNHKvKTU%2FZmQ%2FA8aWh0UplKdq3Edj9LMqZ2eWRZgofGFxR%2Bdgc0m9HI9PRBZZsZTLLVIeusdnu%2B8YtxGIr2Gw3NefpxbtSIiyxxeK0NA2Ex5Boa%2FGMvO%2BI5RNFs%2FBnFmi0OksJZIkxcPWp4epwvGv4YuF50HuD6SqP4&X-Amz-Signature=f464b5cce5ea6d779bb80d8d7a066cffb06c2b16e0456ab44d5447b3b7d14192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7SL5VJN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIg%2BxJdmtictyS%2F1nL012N9wt8S7CC9k7I%2FgDwM1jpXAiB8aHPdrahGktFPDOFDmopDXog2sE%2BcNwWYc3u23Q4XuCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUM8LMpynYYjJYJGMKtwD%2Fx0E9L343HQ3SUE%2F0ayV4q7IGpOEn8QZmg1DSiHZGzcU4gl9KRju8OX3I%2BFF8aSdE97W%2FVomIKDJiEm1r9rF3oGBzosYD5kowYe2Tc1j%2FlUo8%2Fgwh7kccSgJ%2BrTWG97eB8Yaq0tC4Sbnunn9aGNYfwE%2F0ZAjZegD2%2FeIh5UrUpKs8IMrWAkN8ap5TBsXWQyjsOB3fGoYilTOwklBjiAktxn4taccFJc%2BkNrz3QQRQ9xqJ0hnlGM6UM4WTh7HLljmffFJT6v5nTgbjlFb0nGRskBTIgtNLCplQda2vVeaHA%2BsGDmgJQZrT4Rggz82kStaRVOBibwVMVpToqSmX3Gfj3adSb6iBh%2FTNiNywWM9leCK4tzZHkCXCR6s4SMUviUHlLZN%2B0strvkR69LKVnFeON5wjA1XihHnYyglG8tHrQkF4eiSzf1SmZ%2Blvc3TDMpBUBXq%2BJ5E%2BoVSf6XVsbr7FZhUtWBcO9r65b7ZR%2B1iPQ4s9iYPzQAqzezS9wv20u6rlEJeMR%2B24RDgN6PecQyWLOOc3UTDuKzldPs1QaP8sOIwQX6LBWwePmWfphiR646Du3owA53k6Olom8bBOK9B56yqLXrrv5dg0Bzl58bNI0r9nwhzgTOODSuKRjMwvLPfxAY6pgF7QuJ9rX7zn7fLTDlowtW3bD6IxA3ktTps24EEkhg5i%2FbfCAtlt718lp8MHsNHKvKTU%2FZmQ%2FA8aWh0UplKdq3Edj9LMqZ2eWRZgofGFxR%2Bdgc0m9HI9PRBZZsZTLLVIeusdnu%2B8YtxGIr2Gw3NefpxbtSIiyxxeK0NA2Ex5Boa%2FGMvO%2BI5RNFs%2FBnFmi0OksJZIkxcPWp4epwvGv4YuF50HuD6SqP4&X-Amz-Signature=fcc02c7b5c7030610d1caf34769407bdd42589de02ed1a870011fd668247a6c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7SL5VJN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIg%2BxJdmtictyS%2F1nL012N9wt8S7CC9k7I%2FgDwM1jpXAiB8aHPdrahGktFPDOFDmopDXog2sE%2BcNwWYc3u23Q4XuCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUM8LMpynYYjJYJGMKtwD%2Fx0E9L343HQ3SUE%2F0ayV4q7IGpOEn8QZmg1DSiHZGzcU4gl9KRju8OX3I%2BFF8aSdE97W%2FVomIKDJiEm1r9rF3oGBzosYD5kowYe2Tc1j%2FlUo8%2Fgwh7kccSgJ%2BrTWG97eB8Yaq0tC4Sbnunn9aGNYfwE%2F0ZAjZegD2%2FeIh5UrUpKs8IMrWAkN8ap5TBsXWQyjsOB3fGoYilTOwklBjiAktxn4taccFJc%2BkNrz3QQRQ9xqJ0hnlGM6UM4WTh7HLljmffFJT6v5nTgbjlFb0nGRskBTIgtNLCplQda2vVeaHA%2BsGDmgJQZrT4Rggz82kStaRVOBibwVMVpToqSmX3Gfj3adSb6iBh%2FTNiNywWM9leCK4tzZHkCXCR6s4SMUviUHlLZN%2B0strvkR69LKVnFeON5wjA1XihHnYyglG8tHrQkF4eiSzf1SmZ%2Blvc3TDMpBUBXq%2BJ5E%2BoVSf6XVsbr7FZhUtWBcO9r65b7ZR%2B1iPQ4s9iYPzQAqzezS9wv20u6rlEJeMR%2B24RDgN6PecQyWLOOc3UTDuKzldPs1QaP8sOIwQX6LBWwePmWfphiR646Du3owA53k6Olom8bBOK9B56yqLXrrv5dg0Bzl58bNI0r9nwhzgTOODSuKRjMwvLPfxAY6pgF7QuJ9rX7zn7fLTDlowtW3bD6IxA3ktTps24EEkhg5i%2FbfCAtlt718lp8MHsNHKvKTU%2FZmQ%2FA8aWh0UplKdq3Edj9LMqZ2eWRZgofGFxR%2Bdgc0m9HI9PRBZZsZTLLVIeusdnu%2B8YtxGIr2Gw3NefpxbtSIiyxxeK0NA2Ex5Boa%2FGMvO%2BI5RNFs%2FBnFmi0OksJZIkxcPWp4epwvGv4YuF50HuD6SqP4&X-Amz-Signature=122169d653a4168f0cd0153549b0eb1633802976e31d1b88a7f3a20336bf8264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7SL5VJN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIg%2BxJdmtictyS%2F1nL012N9wt8S7CC9k7I%2FgDwM1jpXAiB8aHPdrahGktFPDOFDmopDXog2sE%2BcNwWYc3u23Q4XuCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUM8LMpynYYjJYJGMKtwD%2Fx0E9L343HQ3SUE%2F0ayV4q7IGpOEn8QZmg1DSiHZGzcU4gl9KRju8OX3I%2BFF8aSdE97W%2FVomIKDJiEm1r9rF3oGBzosYD5kowYe2Tc1j%2FlUo8%2Fgwh7kccSgJ%2BrTWG97eB8Yaq0tC4Sbnunn9aGNYfwE%2F0ZAjZegD2%2FeIh5UrUpKs8IMrWAkN8ap5TBsXWQyjsOB3fGoYilTOwklBjiAktxn4taccFJc%2BkNrz3QQRQ9xqJ0hnlGM6UM4WTh7HLljmffFJT6v5nTgbjlFb0nGRskBTIgtNLCplQda2vVeaHA%2BsGDmgJQZrT4Rggz82kStaRVOBibwVMVpToqSmX3Gfj3adSb6iBh%2FTNiNywWM9leCK4tzZHkCXCR6s4SMUviUHlLZN%2B0strvkR69LKVnFeON5wjA1XihHnYyglG8tHrQkF4eiSzf1SmZ%2Blvc3TDMpBUBXq%2BJ5E%2BoVSf6XVsbr7FZhUtWBcO9r65b7ZR%2B1iPQ4s9iYPzQAqzezS9wv20u6rlEJeMR%2B24RDgN6PecQyWLOOc3UTDuKzldPs1QaP8sOIwQX6LBWwePmWfphiR646Du3owA53k6Olom8bBOK9B56yqLXrrv5dg0Bzl58bNI0r9nwhzgTOODSuKRjMwvLPfxAY6pgF7QuJ9rX7zn7fLTDlowtW3bD6IxA3ktTps24EEkhg5i%2FbfCAtlt718lp8MHsNHKvKTU%2FZmQ%2FA8aWh0UplKdq3Edj9LMqZ2eWRZgofGFxR%2Bdgc0m9HI9PRBZZsZTLLVIeusdnu%2B8YtxGIr2Gw3NefpxbtSIiyxxeK0NA2Ex5Boa%2FGMvO%2BI5RNFs%2FBnFmi0OksJZIkxcPWp4epwvGv4YuF50HuD6SqP4&X-Amz-Signature=78eab7c19f19b74f069d25f5b609c3d6f7ed3984c6a72833110c99fc98764d2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7SL5VJN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIg%2BxJdmtictyS%2F1nL012N9wt8S7CC9k7I%2FgDwM1jpXAiB8aHPdrahGktFPDOFDmopDXog2sE%2BcNwWYc3u23Q4XuCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUM8LMpynYYjJYJGMKtwD%2Fx0E9L343HQ3SUE%2F0ayV4q7IGpOEn8QZmg1DSiHZGzcU4gl9KRju8OX3I%2BFF8aSdE97W%2FVomIKDJiEm1r9rF3oGBzosYD5kowYe2Tc1j%2FlUo8%2Fgwh7kccSgJ%2BrTWG97eB8Yaq0tC4Sbnunn9aGNYfwE%2F0ZAjZegD2%2FeIh5UrUpKs8IMrWAkN8ap5TBsXWQyjsOB3fGoYilTOwklBjiAktxn4taccFJc%2BkNrz3QQRQ9xqJ0hnlGM6UM4WTh7HLljmffFJT6v5nTgbjlFb0nGRskBTIgtNLCplQda2vVeaHA%2BsGDmgJQZrT4Rggz82kStaRVOBibwVMVpToqSmX3Gfj3adSb6iBh%2FTNiNywWM9leCK4tzZHkCXCR6s4SMUviUHlLZN%2B0strvkR69LKVnFeON5wjA1XihHnYyglG8tHrQkF4eiSzf1SmZ%2Blvc3TDMpBUBXq%2BJ5E%2BoVSf6XVsbr7FZhUtWBcO9r65b7ZR%2B1iPQ4s9iYPzQAqzezS9wv20u6rlEJeMR%2B24RDgN6PecQyWLOOc3UTDuKzldPs1QaP8sOIwQX6LBWwePmWfphiR646Du3owA53k6Olom8bBOK9B56yqLXrrv5dg0Bzl58bNI0r9nwhzgTOODSuKRjMwvLPfxAY6pgF7QuJ9rX7zn7fLTDlowtW3bD6IxA3ktTps24EEkhg5i%2FbfCAtlt718lp8MHsNHKvKTU%2FZmQ%2FA8aWh0UplKdq3Edj9LMqZ2eWRZgofGFxR%2Bdgc0m9HI9PRBZZsZTLLVIeusdnu%2B8YtxGIr2Gw3NefpxbtSIiyxxeK0NA2Ex5Boa%2FGMvO%2BI5RNFs%2FBnFmi0OksJZIkxcPWp4epwvGv4YuF50HuD6SqP4&X-Amz-Signature=fb00ef605a6dfd305bee5fcb1303e3f3b2d089a86c8bdfc32c49e9fddb1ca9c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7SL5VJN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIg%2BxJdmtictyS%2F1nL012N9wt8S7CC9k7I%2FgDwM1jpXAiB8aHPdrahGktFPDOFDmopDXog2sE%2BcNwWYc3u23Q4XuCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUM8LMpynYYjJYJGMKtwD%2Fx0E9L343HQ3SUE%2F0ayV4q7IGpOEn8QZmg1DSiHZGzcU4gl9KRju8OX3I%2BFF8aSdE97W%2FVomIKDJiEm1r9rF3oGBzosYD5kowYe2Tc1j%2FlUo8%2Fgwh7kccSgJ%2BrTWG97eB8Yaq0tC4Sbnunn9aGNYfwE%2F0ZAjZegD2%2FeIh5UrUpKs8IMrWAkN8ap5TBsXWQyjsOB3fGoYilTOwklBjiAktxn4taccFJc%2BkNrz3QQRQ9xqJ0hnlGM6UM4WTh7HLljmffFJT6v5nTgbjlFb0nGRskBTIgtNLCplQda2vVeaHA%2BsGDmgJQZrT4Rggz82kStaRVOBibwVMVpToqSmX3Gfj3adSb6iBh%2FTNiNywWM9leCK4tzZHkCXCR6s4SMUviUHlLZN%2B0strvkR69LKVnFeON5wjA1XihHnYyglG8tHrQkF4eiSzf1SmZ%2Blvc3TDMpBUBXq%2BJ5E%2BoVSf6XVsbr7FZhUtWBcO9r65b7ZR%2B1iPQ4s9iYPzQAqzezS9wv20u6rlEJeMR%2B24RDgN6PecQyWLOOc3UTDuKzldPs1QaP8sOIwQX6LBWwePmWfphiR646Du3owA53k6Olom8bBOK9B56yqLXrrv5dg0Bzl58bNI0r9nwhzgTOODSuKRjMwvLPfxAY6pgF7QuJ9rX7zn7fLTDlowtW3bD6IxA3ktTps24EEkhg5i%2FbfCAtlt718lp8MHsNHKvKTU%2FZmQ%2FA8aWh0UplKdq3Edj9LMqZ2eWRZgofGFxR%2Bdgc0m9HI9PRBZZsZTLLVIeusdnu%2B8YtxGIr2Gw3NefpxbtSIiyxxeK0NA2Ex5Boa%2FGMvO%2BI5RNFs%2FBnFmi0OksJZIkxcPWp4epwvGv4YuF50HuD6SqP4&X-Amz-Signature=06fb28b75fc4eea5dcc2ca21e93ca8639f3de732e7249f258cb2d6ac211997a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7SL5VJN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIg%2BxJdmtictyS%2F1nL012N9wt8S7CC9k7I%2FgDwM1jpXAiB8aHPdrahGktFPDOFDmopDXog2sE%2BcNwWYc3u23Q4XuCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUM8LMpynYYjJYJGMKtwD%2Fx0E9L343HQ3SUE%2F0ayV4q7IGpOEn8QZmg1DSiHZGzcU4gl9KRju8OX3I%2BFF8aSdE97W%2FVomIKDJiEm1r9rF3oGBzosYD5kowYe2Tc1j%2FlUo8%2Fgwh7kccSgJ%2BrTWG97eB8Yaq0tC4Sbnunn9aGNYfwE%2F0ZAjZegD2%2FeIh5UrUpKs8IMrWAkN8ap5TBsXWQyjsOB3fGoYilTOwklBjiAktxn4taccFJc%2BkNrz3QQRQ9xqJ0hnlGM6UM4WTh7HLljmffFJT6v5nTgbjlFb0nGRskBTIgtNLCplQda2vVeaHA%2BsGDmgJQZrT4Rggz82kStaRVOBibwVMVpToqSmX3Gfj3adSb6iBh%2FTNiNywWM9leCK4tzZHkCXCR6s4SMUviUHlLZN%2B0strvkR69LKVnFeON5wjA1XihHnYyglG8tHrQkF4eiSzf1SmZ%2Blvc3TDMpBUBXq%2BJ5E%2BoVSf6XVsbr7FZhUtWBcO9r65b7ZR%2B1iPQ4s9iYPzQAqzezS9wv20u6rlEJeMR%2B24RDgN6PecQyWLOOc3UTDuKzldPs1QaP8sOIwQX6LBWwePmWfphiR646Du3owA53k6Olom8bBOK9B56yqLXrrv5dg0Bzl58bNI0r9nwhzgTOODSuKRjMwvLPfxAY6pgF7QuJ9rX7zn7fLTDlowtW3bD6IxA3ktTps24EEkhg5i%2FbfCAtlt718lp8MHsNHKvKTU%2FZmQ%2FA8aWh0UplKdq3Edj9LMqZ2eWRZgofGFxR%2Bdgc0m9HI9PRBZZsZTLLVIeusdnu%2B8YtxGIr2Gw3NefpxbtSIiyxxeK0NA2Ex5Boa%2FGMvO%2BI5RNFs%2FBnFmi0OksJZIkxcPWp4epwvGv4YuF50HuD6SqP4&X-Amz-Signature=cecb6d8d0cc0f66e57d163c3775ff481ae1d286a01174db05d43fbc92b915b8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
