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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTF5TKY3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCgqyen5OnZSN7MOTtN9vqfn2Gu2Ca3X59jp1LgBrPRnwIgYfIBc6eFM5%2BKnAGZDI7G0srrAF52OFtrkyBIymERRN4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDK8j3OSmeSLh4fZLXSrcA1GJL7oZp2jyCPk50zQ4QkkjPQyASTKgqRBh7l0yLDEPB6siYMPLmutXO1mBaum2vnrmxch1jLopZxxEwl3N%2B%2FEEeFaPmbYp1BePyQBfgGD6Wo7dLFn7cScmLF%2FQJOmFeVUOBDX2FNcg%2B5lhjB0WQXeErqN2Sgwm6rpwz9eLi13dV2cyLehrGva3HM53t%2Bz22frpoUQW%2FG1hWvWeq5GuDUhtENltsr4ZxUkzmy71GeI3CrXHaUwQ4cP5%2BpPg34L93tC55gOh4%2FE6diU392BBLSVnRxI5myEMXaXjku01AxLQaQCzef2NZHYpdBc4t2n0H%2F5nDZuw2NzcEbYdbpREtj%2F%2BpkGl4aOn3nANGRrpJ%2FEm7oeEtjJ4eVhNE%2F8slLgJQLznevEUaHg2xf8ybVP2oKQHNqmod9x1KF7%2Fvwbd%2BSzH2BSl1XMk2Rzihlx%2BBt5GZraVBDq2HaxQQmPRMlG1cDwbFwTEtf%2Bzfvu2GHnbqoh5ux7pv63uwbGurMK1C844q5UHD8Lz6Eoy6091Lccc2eqmJ7E64FFTqhOyv6q%2FZfRnqrrRq2%2BRduH9SsyIUWbNxsGRgNsmNZaOesN3PRYcfLBxTJHMoEFUchWcsLdqRUU89RWvIoUH%2BI4hJRaSMIfT980GOqUB2cbYk7SunTwSZ5O38yTq1dGa1WTD1NTZrIz8BoTYD5avd%2BMnN6WZrmgBzDlf%2FcgDrBoxeDxg5kKHaw%2BYdB5JG%2Fc5JzLt51FoTLbFjWXPPGC4NaAzFFqJgv49td90pzFJ0Q5qPRWo5TB32vwp7F5PvXHfsngqPEtoz%2FuT7aSHqV%2By0gnk32pBgdTF4eKYh4wEJ4nicveIGqB7dvM4Dpv6Qyzf6Pll&X-Amz-Signature=77ff54ebf0256e1ed366005f0b3ba41c7edd721f1cf8b7810c79032a70b2fdee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTF5TKY3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCgqyen5OnZSN7MOTtN9vqfn2Gu2Ca3X59jp1LgBrPRnwIgYfIBc6eFM5%2BKnAGZDI7G0srrAF52OFtrkyBIymERRN4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDK8j3OSmeSLh4fZLXSrcA1GJL7oZp2jyCPk50zQ4QkkjPQyASTKgqRBh7l0yLDEPB6siYMPLmutXO1mBaum2vnrmxch1jLopZxxEwl3N%2B%2FEEeFaPmbYp1BePyQBfgGD6Wo7dLFn7cScmLF%2FQJOmFeVUOBDX2FNcg%2B5lhjB0WQXeErqN2Sgwm6rpwz9eLi13dV2cyLehrGva3HM53t%2Bz22frpoUQW%2FG1hWvWeq5GuDUhtENltsr4ZxUkzmy71GeI3CrXHaUwQ4cP5%2BpPg34L93tC55gOh4%2FE6diU392BBLSVnRxI5myEMXaXjku01AxLQaQCzef2NZHYpdBc4t2n0H%2F5nDZuw2NzcEbYdbpREtj%2F%2BpkGl4aOn3nANGRrpJ%2FEm7oeEtjJ4eVhNE%2F8slLgJQLznevEUaHg2xf8ybVP2oKQHNqmod9x1KF7%2Fvwbd%2BSzH2BSl1XMk2Rzihlx%2BBt5GZraVBDq2HaxQQmPRMlG1cDwbFwTEtf%2Bzfvu2GHnbqoh5ux7pv63uwbGurMK1C844q5UHD8Lz6Eoy6091Lccc2eqmJ7E64FFTqhOyv6q%2FZfRnqrrRq2%2BRduH9SsyIUWbNxsGRgNsmNZaOesN3PRYcfLBxTJHMoEFUchWcsLdqRUU89RWvIoUH%2BI4hJRaSMIfT980GOqUB2cbYk7SunTwSZ5O38yTq1dGa1WTD1NTZrIz8BoTYD5avd%2BMnN6WZrmgBzDlf%2FcgDrBoxeDxg5kKHaw%2BYdB5JG%2Fc5JzLt51FoTLbFjWXPPGC4NaAzFFqJgv49td90pzFJ0Q5qPRWo5TB32vwp7F5PvXHfsngqPEtoz%2FuT7aSHqV%2By0gnk32pBgdTF4eKYh4wEJ4nicveIGqB7dvM4Dpv6Qyzf6Pll&X-Amz-Signature=4092fe95142d5518c9820429c9c1f09104acc8844607561a813f9106501416b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTF5TKY3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCgqyen5OnZSN7MOTtN9vqfn2Gu2Ca3X59jp1LgBrPRnwIgYfIBc6eFM5%2BKnAGZDI7G0srrAF52OFtrkyBIymERRN4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDK8j3OSmeSLh4fZLXSrcA1GJL7oZp2jyCPk50zQ4QkkjPQyASTKgqRBh7l0yLDEPB6siYMPLmutXO1mBaum2vnrmxch1jLopZxxEwl3N%2B%2FEEeFaPmbYp1BePyQBfgGD6Wo7dLFn7cScmLF%2FQJOmFeVUOBDX2FNcg%2B5lhjB0WQXeErqN2Sgwm6rpwz9eLi13dV2cyLehrGva3HM53t%2Bz22frpoUQW%2FG1hWvWeq5GuDUhtENltsr4ZxUkzmy71GeI3CrXHaUwQ4cP5%2BpPg34L93tC55gOh4%2FE6diU392BBLSVnRxI5myEMXaXjku01AxLQaQCzef2NZHYpdBc4t2n0H%2F5nDZuw2NzcEbYdbpREtj%2F%2BpkGl4aOn3nANGRrpJ%2FEm7oeEtjJ4eVhNE%2F8slLgJQLznevEUaHg2xf8ybVP2oKQHNqmod9x1KF7%2Fvwbd%2BSzH2BSl1XMk2Rzihlx%2BBt5GZraVBDq2HaxQQmPRMlG1cDwbFwTEtf%2Bzfvu2GHnbqoh5ux7pv63uwbGurMK1C844q5UHD8Lz6Eoy6091Lccc2eqmJ7E64FFTqhOyv6q%2FZfRnqrrRq2%2BRduH9SsyIUWbNxsGRgNsmNZaOesN3PRYcfLBxTJHMoEFUchWcsLdqRUU89RWvIoUH%2BI4hJRaSMIfT980GOqUB2cbYk7SunTwSZ5O38yTq1dGa1WTD1NTZrIz8BoTYD5avd%2BMnN6WZrmgBzDlf%2FcgDrBoxeDxg5kKHaw%2BYdB5JG%2Fc5JzLt51FoTLbFjWXPPGC4NaAzFFqJgv49td90pzFJ0Q5qPRWo5TB32vwp7F5PvXHfsngqPEtoz%2FuT7aSHqV%2By0gnk32pBgdTF4eKYh4wEJ4nicveIGqB7dvM4Dpv6Qyzf6Pll&X-Amz-Signature=fadaa06b8e4b8682fd94e14fee3225b36bc37619f11f8f46c94210f7f66cb51d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTF5TKY3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCgqyen5OnZSN7MOTtN9vqfn2Gu2Ca3X59jp1LgBrPRnwIgYfIBc6eFM5%2BKnAGZDI7G0srrAF52OFtrkyBIymERRN4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDK8j3OSmeSLh4fZLXSrcA1GJL7oZp2jyCPk50zQ4QkkjPQyASTKgqRBh7l0yLDEPB6siYMPLmutXO1mBaum2vnrmxch1jLopZxxEwl3N%2B%2FEEeFaPmbYp1BePyQBfgGD6Wo7dLFn7cScmLF%2FQJOmFeVUOBDX2FNcg%2B5lhjB0WQXeErqN2Sgwm6rpwz9eLi13dV2cyLehrGva3HM53t%2Bz22frpoUQW%2FG1hWvWeq5GuDUhtENltsr4ZxUkzmy71GeI3CrXHaUwQ4cP5%2BpPg34L93tC55gOh4%2FE6diU392BBLSVnRxI5myEMXaXjku01AxLQaQCzef2NZHYpdBc4t2n0H%2F5nDZuw2NzcEbYdbpREtj%2F%2BpkGl4aOn3nANGRrpJ%2FEm7oeEtjJ4eVhNE%2F8slLgJQLznevEUaHg2xf8ybVP2oKQHNqmod9x1KF7%2Fvwbd%2BSzH2BSl1XMk2Rzihlx%2BBt5GZraVBDq2HaxQQmPRMlG1cDwbFwTEtf%2Bzfvu2GHnbqoh5ux7pv63uwbGurMK1C844q5UHD8Lz6Eoy6091Lccc2eqmJ7E64FFTqhOyv6q%2FZfRnqrrRq2%2BRduH9SsyIUWbNxsGRgNsmNZaOesN3PRYcfLBxTJHMoEFUchWcsLdqRUU89RWvIoUH%2BI4hJRaSMIfT980GOqUB2cbYk7SunTwSZ5O38yTq1dGa1WTD1NTZrIz8BoTYD5avd%2BMnN6WZrmgBzDlf%2FcgDrBoxeDxg5kKHaw%2BYdB5JG%2Fc5JzLt51FoTLbFjWXPPGC4NaAzFFqJgv49td90pzFJ0Q5qPRWo5TB32vwp7F5PvXHfsngqPEtoz%2FuT7aSHqV%2By0gnk32pBgdTF4eKYh4wEJ4nicveIGqB7dvM4Dpv6Qyzf6Pll&X-Amz-Signature=afb4082e29dfe1d957b67e0bf47c38c3d0bbdff8a5ad22f2fcef197da5612e98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTF5TKY3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCgqyen5OnZSN7MOTtN9vqfn2Gu2Ca3X59jp1LgBrPRnwIgYfIBc6eFM5%2BKnAGZDI7G0srrAF52OFtrkyBIymERRN4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDK8j3OSmeSLh4fZLXSrcA1GJL7oZp2jyCPk50zQ4QkkjPQyASTKgqRBh7l0yLDEPB6siYMPLmutXO1mBaum2vnrmxch1jLopZxxEwl3N%2B%2FEEeFaPmbYp1BePyQBfgGD6Wo7dLFn7cScmLF%2FQJOmFeVUOBDX2FNcg%2B5lhjB0WQXeErqN2Sgwm6rpwz9eLi13dV2cyLehrGva3HM53t%2Bz22frpoUQW%2FG1hWvWeq5GuDUhtENltsr4ZxUkzmy71GeI3CrXHaUwQ4cP5%2BpPg34L93tC55gOh4%2FE6diU392BBLSVnRxI5myEMXaXjku01AxLQaQCzef2NZHYpdBc4t2n0H%2F5nDZuw2NzcEbYdbpREtj%2F%2BpkGl4aOn3nANGRrpJ%2FEm7oeEtjJ4eVhNE%2F8slLgJQLznevEUaHg2xf8ybVP2oKQHNqmod9x1KF7%2Fvwbd%2BSzH2BSl1XMk2Rzihlx%2BBt5GZraVBDq2HaxQQmPRMlG1cDwbFwTEtf%2Bzfvu2GHnbqoh5ux7pv63uwbGurMK1C844q5UHD8Lz6Eoy6091Lccc2eqmJ7E64FFTqhOyv6q%2FZfRnqrrRq2%2BRduH9SsyIUWbNxsGRgNsmNZaOesN3PRYcfLBxTJHMoEFUchWcsLdqRUU89RWvIoUH%2BI4hJRaSMIfT980GOqUB2cbYk7SunTwSZ5O38yTq1dGa1WTD1NTZrIz8BoTYD5avd%2BMnN6WZrmgBzDlf%2FcgDrBoxeDxg5kKHaw%2BYdB5JG%2Fc5JzLt51FoTLbFjWXPPGC4NaAzFFqJgv49td90pzFJ0Q5qPRWo5TB32vwp7F5PvXHfsngqPEtoz%2FuT7aSHqV%2By0gnk32pBgdTF4eKYh4wEJ4nicveIGqB7dvM4Dpv6Qyzf6Pll&X-Amz-Signature=0e382064a1b644126e69159fac7c4f681ef9d343642c8b9e074e790206ad309d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTF5TKY3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCgqyen5OnZSN7MOTtN9vqfn2Gu2Ca3X59jp1LgBrPRnwIgYfIBc6eFM5%2BKnAGZDI7G0srrAF52OFtrkyBIymERRN4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDK8j3OSmeSLh4fZLXSrcA1GJL7oZp2jyCPk50zQ4QkkjPQyASTKgqRBh7l0yLDEPB6siYMPLmutXO1mBaum2vnrmxch1jLopZxxEwl3N%2B%2FEEeFaPmbYp1BePyQBfgGD6Wo7dLFn7cScmLF%2FQJOmFeVUOBDX2FNcg%2B5lhjB0WQXeErqN2Sgwm6rpwz9eLi13dV2cyLehrGva3HM53t%2Bz22frpoUQW%2FG1hWvWeq5GuDUhtENltsr4ZxUkzmy71GeI3CrXHaUwQ4cP5%2BpPg34L93tC55gOh4%2FE6diU392BBLSVnRxI5myEMXaXjku01AxLQaQCzef2NZHYpdBc4t2n0H%2F5nDZuw2NzcEbYdbpREtj%2F%2BpkGl4aOn3nANGRrpJ%2FEm7oeEtjJ4eVhNE%2F8slLgJQLznevEUaHg2xf8ybVP2oKQHNqmod9x1KF7%2Fvwbd%2BSzH2BSl1XMk2Rzihlx%2BBt5GZraVBDq2HaxQQmPRMlG1cDwbFwTEtf%2Bzfvu2GHnbqoh5ux7pv63uwbGurMK1C844q5UHD8Lz6Eoy6091Lccc2eqmJ7E64FFTqhOyv6q%2FZfRnqrrRq2%2BRduH9SsyIUWbNxsGRgNsmNZaOesN3PRYcfLBxTJHMoEFUchWcsLdqRUU89RWvIoUH%2BI4hJRaSMIfT980GOqUB2cbYk7SunTwSZ5O38yTq1dGa1WTD1NTZrIz8BoTYD5avd%2BMnN6WZrmgBzDlf%2FcgDrBoxeDxg5kKHaw%2BYdB5JG%2Fc5JzLt51FoTLbFjWXPPGC4NaAzFFqJgv49td90pzFJ0Q5qPRWo5TB32vwp7F5PvXHfsngqPEtoz%2FuT7aSHqV%2By0gnk32pBgdTF4eKYh4wEJ4nicveIGqB7dvM4Dpv6Qyzf6Pll&X-Amz-Signature=a2f1023dccff1b061ec6eab3088f3a408b0c15d44b1e014ccee17c1b51c70cc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTF5TKY3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCgqyen5OnZSN7MOTtN9vqfn2Gu2Ca3X59jp1LgBrPRnwIgYfIBc6eFM5%2BKnAGZDI7G0srrAF52OFtrkyBIymERRN4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDK8j3OSmeSLh4fZLXSrcA1GJL7oZp2jyCPk50zQ4QkkjPQyASTKgqRBh7l0yLDEPB6siYMPLmutXO1mBaum2vnrmxch1jLopZxxEwl3N%2B%2FEEeFaPmbYp1BePyQBfgGD6Wo7dLFn7cScmLF%2FQJOmFeVUOBDX2FNcg%2B5lhjB0WQXeErqN2Sgwm6rpwz9eLi13dV2cyLehrGva3HM53t%2Bz22frpoUQW%2FG1hWvWeq5GuDUhtENltsr4ZxUkzmy71GeI3CrXHaUwQ4cP5%2BpPg34L93tC55gOh4%2FE6diU392BBLSVnRxI5myEMXaXjku01AxLQaQCzef2NZHYpdBc4t2n0H%2F5nDZuw2NzcEbYdbpREtj%2F%2BpkGl4aOn3nANGRrpJ%2FEm7oeEtjJ4eVhNE%2F8slLgJQLznevEUaHg2xf8ybVP2oKQHNqmod9x1KF7%2Fvwbd%2BSzH2BSl1XMk2Rzihlx%2BBt5GZraVBDq2HaxQQmPRMlG1cDwbFwTEtf%2Bzfvu2GHnbqoh5ux7pv63uwbGurMK1C844q5UHD8Lz6Eoy6091Lccc2eqmJ7E64FFTqhOyv6q%2FZfRnqrrRq2%2BRduH9SsyIUWbNxsGRgNsmNZaOesN3PRYcfLBxTJHMoEFUchWcsLdqRUU89RWvIoUH%2BI4hJRaSMIfT980GOqUB2cbYk7SunTwSZ5O38yTq1dGa1WTD1NTZrIz8BoTYD5avd%2BMnN6WZrmgBzDlf%2FcgDrBoxeDxg5kKHaw%2BYdB5JG%2Fc5JzLt51FoTLbFjWXPPGC4NaAzFFqJgv49td90pzFJ0Q5qPRWo5TB32vwp7F5PvXHfsngqPEtoz%2FuT7aSHqV%2By0gnk32pBgdTF4eKYh4wEJ4nicveIGqB7dvM4Dpv6Qyzf6Pll&X-Amz-Signature=cb76b6126fad863c7e78c2c953ef7e8f562baeb3e8ae72870dd452973ec0e579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTF5TKY3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCgqyen5OnZSN7MOTtN9vqfn2Gu2Ca3X59jp1LgBrPRnwIgYfIBc6eFM5%2BKnAGZDI7G0srrAF52OFtrkyBIymERRN4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDK8j3OSmeSLh4fZLXSrcA1GJL7oZp2jyCPk50zQ4QkkjPQyASTKgqRBh7l0yLDEPB6siYMPLmutXO1mBaum2vnrmxch1jLopZxxEwl3N%2B%2FEEeFaPmbYp1BePyQBfgGD6Wo7dLFn7cScmLF%2FQJOmFeVUOBDX2FNcg%2B5lhjB0WQXeErqN2Sgwm6rpwz9eLi13dV2cyLehrGva3HM53t%2Bz22frpoUQW%2FG1hWvWeq5GuDUhtENltsr4ZxUkzmy71GeI3CrXHaUwQ4cP5%2BpPg34L93tC55gOh4%2FE6diU392BBLSVnRxI5myEMXaXjku01AxLQaQCzef2NZHYpdBc4t2n0H%2F5nDZuw2NzcEbYdbpREtj%2F%2BpkGl4aOn3nANGRrpJ%2FEm7oeEtjJ4eVhNE%2F8slLgJQLznevEUaHg2xf8ybVP2oKQHNqmod9x1KF7%2Fvwbd%2BSzH2BSl1XMk2Rzihlx%2BBt5GZraVBDq2HaxQQmPRMlG1cDwbFwTEtf%2Bzfvu2GHnbqoh5ux7pv63uwbGurMK1C844q5UHD8Lz6Eoy6091Lccc2eqmJ7E64FFTqhOyv6q%2FZfRnqrrRq2%2BRduH9SsyIUWbNxsGRgNsmNZaOesN3PRYcfLBxTJHMoEFUchWcsLdqRUU89RWvIoUH%2BI4hJRaSMIfT980GOqUB2cbYk7SunTwSZ5O38yTq1dGa1WTD1NTZrIz8BoTYD5avd%2BMnN6WZrmgBzDlf%2FcgDrBoxeDxg5kKHaw%2BYdB5JG%2Fc5JzLt51FoTLbFjWXPPGC4NaAzFFqJgv49td90pzFJ0Q5qPRWo5TB32vwp7F5PvXHfsngqPEtoz%2FuT7aSHqV%2By0gnk32pBgdTF4eKYh4wEJ4nicveIGqB7dvM4Dpv6Qyzf6Pll&X-Amz-Signature=e67466b9fb22740de3d5817c080a317dedc3b058507404fa1396013770f5ecbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTF5TKY3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCgqyen5OnZSN7MOTtN9vqfn2Gu2Ca3X59jp1LgBrPRnwIgYfIBc6eFM5%2BKnAGZDI7G0srrAF52OFtrkyBIymERRN4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDK8j3OSmeSLh4fZLXSrcA1GJL7oZp2jyCPk50zQ4QkkjPQyASTKgqRBh7l0yLDEPB6siYMPLmutXO1mBaum2vnrmxch1jLopZxxEwl3N%2B%2FEEeFaPmbYp1BePyQBfgGD6Wo7dLFn7cScmLF%2FQJOmFeVUOBDX2FNcg%2B5lhjB0WQXeErqN2Sgwm6rpwz9eLi13dV2cyLehrGva3HM53t%2Bz22frpoUQW%2FG1hWvWeq5GuDUhtENltsr4ZxUkzmy71GeI3CrXHaUwQ4cP5%2BpPg34L93tC55gOh4%2FE6diU392BBLSVnRxI5myEMXaXjku01AxLQaQCzef2NZHYpdBc4t2n0H%2F5nDZuw2NzcEbYdbpREtj%2F%2BpkGl4aOn3nANGRrpJ%2FEm7oeEtjJ4eVhNE%2F8slLgJQLznevEUaHg2xf8ybVP2oKQHNqmod9x1KF7%2Fvwbd%2BSzH2BSl1XMk2Rzihlx%2BBt5GZraVBDq2HaxQQmPRMlG1cDwbFwTEtf%2Bzfvu2GHnbqoh5ux7pv63uwbGurMK1C844q5UHD8Lz6Eoy6091Lccc2eqmJ7E64FFTqhOyv6q%2FZfRnqrrRq2%2BRduH9SsyIUWbNxsGRgNsmNZaOesN3PRYcfLBxTJHMoEFUchWcsLdqRUU89RWvIoUH%2BI4hJRaSMIfT980GOqUB2cbYk7SunTwSZ5O38yTq1dGa1WTD1NTZrIz8BoTYD5avd%2BMnN6WZrmgBzDlf%2FcgDrBoxeDxg5kKHaw%2BYdB5JG%2Fc5JzLt51FoTLbFjWXPPGC4NaAzFFqJgv49td90pzFJ0Q5qPRWo5TB32vwp7F5PvXHfsngqPEtoz%2FuT7aSHqV%2By0gnk32pBgdTF4eKYh4wEJ4nicveIGqB7dvM4Dpv6Qyzf6Pll&X-Amz-Signature=01a2d4d2ca39515f2caf3b6a6be23dfcfe97f32be1fb7dbadd8848b5ab17be23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTF5TKY3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCgqyen5OnZSN7MOTtN9vqfn2Gu2Ca3X59jp1LgBrPRnwIgYfIBc6eFM5%2BKnAGZDI7G0srrAF52OFtrkyBIymERRN4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDK8j3OSmeSLh4fZLXSrcA1GJL7oZp2jyCPk50zQ4QkkjPQyASTKgqRBh7l0yLDEPB6siYMPLmutXO1mBaum2vnrmxch1jLopZxxEwl3N%2B%2FEEeFaPmbYp1BePyQBfgGD6Wo7dLFn7cScmLF%2FQJOmFeVUOBDX2FNcg%2B5lhjB0WQXeErqN2Sgwm6rpwz9eLi13dV2cyLehrGva3HM53t%2Bz22frpoUQW%2FG1hWvWeq5GuDUhtENltsr4ZxUkzmy71GeI3CrXHaUwQ4cP5%2BpPg34L93tC55gOh4%2FE6diU392BBLSVnRxI5myEMXaXjku01AxLQaQCzef2NZHYpdBc4t2n0H%2F5nDZuw2NzcEbYdbpREtj%2F%2BpkGl4aOn3nANGRrpJ%2FEm7oeEtjJ4eVhNE%2F8slLgJQLznevEUaHg2xf8ybVP2oKQHNqmod9x1KF7%2Fvwbd%2BSzH2BSl1XMk2Rzihlx%2BBt5GZraVBDq2HaxQQmPRMlG1cDwbFwTEtf%2Bzfvu2GHnbqoh5ux7pv63uwbGurMK1C844q5UHD8Lz6Eoy6091Lccc2eqmJ7E64FFTqhOyv6q%2FZfRnqrrRq2%2BRduH9SsyIUWbNxsGRgNsmNZaOesN3PRYcfLBxTJHMoEFUchWcsLdqRUU89RWvIoUH%2BI4hJRaSMIfT980GOqUB2cbYk7SunTwSZ5O38yTq1dGa1WTD1NTZrIz8BoTYD5avd%2BMnN6WZrmgBzDlf%2FcgDrBoxeDxg5kKHaw%2BYdB5JG%2Fc5JzLt51FoTLbFjWXPPGC4NaAzFFqJgv49td90pzFJ0Q5qPRWo5TB32vwp7F5PvXHfsngqPEtoz%2FuT7aSHqV%2By0gnk32pBgdTF4eKYh4wEJ4nicveIGqB7dvM4Dpv6Qyzf6Pll&X-Amz-Signature=8d303e985d2ce8a22d20712ec08eecb253c78a0a596ab5a337240084819f879c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEZRQS3Z%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQD5rqDIO79BaBetMc06lOIkrNUB%2FsiLhSelGybYB%2BHwGAIgWwWoizrfvs%2F2gXRryyULRig0nt%2FO7BkFb1iEAFzlC7sq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDI7CCnBlIcqjhg2TxSrcAwVO%2BPDqLjTSmJcew3YeIhEFslGJj7QYxUfJ8N9jM4zRJ2BG78MuaAMCqPVoKV2mAwfb2bbLqNDtrXC7BNbUyG7yf00rqfyMbWecHZgMhceORNTVQlWCEJuIPYvIx4aK9mZo%2FPar1G%2BpB1Qb45vUxyXW6ImU96%2FPK5o4VRZafUtBjjHeZ11J1zUiW%2FONr8fDX3Fk65dPDUemQVANZIrZbpkDcF2B0pnEV%2FaSsJrxIJGIjMfF5FF23N06uhhAjBS65lDD5bJ1ZKwjG9FjQlBLK65YfORZQr65nneec6t2BTELgl8txRO%2B9OYXyUBp9nljfQvQqe7UPx2cKIuTQDFxStJ5MFbBjDhrQZTg6LDUISROMgrdgZbAEMhCnoTZICq5LqVIkjg6xSejl3yZeo8sKYdtYFcPccYXS2oVwlbTYh%2BkStH4cB1hpPXQ9pHZzoxn74xSyx8r%2BjNsvgns6TITezioVt2Pu0qCvBAzF6oFywzN6vyVNFvOhC7dHJNp%2B4f6wuxcFbSBRsNHgim%2FZ20KpLa3O4yAZakaJ8mhYXnAr8JC1JoCgchDflxzftUMfe0ASWh2Lo4nCcli%2BZA%2BDqKKllLZwfzMc34EATjjr10NOt%2BnQYRaNy%2FqR5mJJQgmMKLd9s0GOqUBNmTCG4fjWg11irnilJszkerZPf3yNKGk%2Bsopr1VtFBMcVbA%2BBqC0Oz1MQOQNq0qFIdiSLiuJVjFUJRO7xa7PZKLdXPb%2FhB2Hy6HWPkKpLvLG2RAJEjYx5BteB%2F3V%2Ft5JRucOPcYOT4X8ds4Z6HvOeacZBGa3GW6HasKzFLyYG4UhMC8JngU%2BxXgtBBJyEfGWxbsZYcqi5PsH%2Fg9wgHT9fOhN0LOu&X-Amz-Signature=b441993332720953474c22b1472d156028f6b4a167dd0ab05ccaa8c8c5569434&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZQR6WFE%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEusnzngm9pl5igXyy1MH1pfNk7szyrCR1BHjEauZcBUAiEA2Z0kjQ%2Bt2PCczlZox3%2BdX0bdE1qonj%2BBx8khRjM6gyQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDOsCM%2BbF2JjrEZq4JCrcA%2BSK6VG8Yj58a%2FTwU%2FHYmpRLvwHSDhcFZj5uCvLJXWhdsr7d1baSGXwcSpkDDSiLDEAABJUHOlb76m%2BF1oe9cwB%2FJKXOhGB9SHbNpZAH0YrveV7OKeC%2Be2io3nme8Xp0iZJS%2FPcE%2BXOugkWum0MjLxC2%2BRFbT10GnJTfX%2FTxf4T1bEEFEp4nKrQk8aGK%2FuF6MPfkX9JUcTi0YrnFKsZBdRvDF7WYqI5%2FE8kg1XJMXwgGqG3YuKl9Eyu2XokLSJfxR8o0vLGXWsztC7QdipycsoYavY6O3FKZ5UxKKD8wOnv6kwA7vcBVmJ5YwPttwY9p6o5O286kHjSV0zkYjDhRjPy%2BnAFmdIfEWP9xTKmNECDn%2FwZU0uDh1I9sBzIlwTnvjeMQlPJnCuTXlXNVSwNAoxzsz1p7cgLeGrt%2FS5v0sDeK0vffDOwFhSZWA6NwI5mGxmqXG3nQmAmsHXt3meX8rGmX%2Fqf%2BVPfN3qvCGM0QvMPXtPU9N3wjVbqSMEinnC6UJ1AccNMOcUWMdQ%2BcOu1o87UoWg0IUdGPViUQnW810XHHyzCEI%2BPipMLImJCbllWK%2FNtKfhBiLmD%2BYhRWI6AtIyi6mVR8xzxvRmTrk0aO1WAhg%2BBRseRiz0N28vgWMIuE980GOqUBV%2F66XnpI%2BPXN%2Bqwn7jeU3UwXSsCYp73V1SHiShrB2z83dcRgYk4dyOlvIwVdrJGuOIgHxVCsOU9pIgHpkGiooKtb8Jlh7NNumg%2FVwngHsLagqTnsrANhB6iiHgaNfxd%2B34atP21nuDNIc1OE3y0D64p7VGmwau2MSsP7pR1%2BcXAwtHF5D5UTEwYCYsTbhFPOt5nSYS%2BVpcqK6rHCycRJ7xUuHKEE&X-Amz-Signature=988eea54b779a233f8c3b2b1366706bb5027ad70ec99f861eab467c8ed165bb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXHMNM56%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCOcRTOT0vZrOtMkVR66zwCVU8SBGsrhmKWh8wiXXBGBwIhAOu1RLhCLbVrTV3u83rwfUfDTc8Isr%2Bh1zbVO9x5hrwLKv8DCD4QABoMNjM3NDIzMTgzODA1Igy0Xjb21ndL8UjuMvcq3AO%2FZDkVZFnWOH4zX%2FGOYuX%2B8lxIYEjAwLtU3CbthzTk%2Bg2h44ibhT92LbDHcyt961zEGENTAa2s36hK2LjRkSugmNj175STGiWxq1O69DmXAjK80AwkPdeEmaoMmjV9kOdtzh%2FxHvgHK%2By4emmd5zGdKL6F5A3l8ktgWmqgwg2%2Bv%2BfqO9cbkwtPXLAP1%2FsrlkwsIEA%2Fpp6B%2Bcnd3ItB9l7CN434U2Hqh8VTrm%2FBTI3jvSi1wCLcWH2CLHqlUSPDWSOYjRavFg9YaRpGWAwkyx38DH%2F6ey8M%2BYuGTrhYpGZySJO3HCPWaAqBFtSPCRR8%2B2W79%2B%2BnJ%2BcqzNESrHDAK%2FHTO6E3f%2FtI3H9VQy3hOEuO8QyFaTv1bpjQvUGe82TIbWK9MNJRUusSuFfpfhUUABN%2FormN7bHJWQqJ6BZV%2FAdPsle4Uk%2B2evHDQ1M%2FNRwoiufJZlksfHmnvgKtbT%2B37MaWVkd%2F%2F4BARjenGa9KcgIQhqa5O3NtFX%2BV%2BSU6NpriRF3p73rj03gBfPVJMWw4NWhMsPT23GHs8nNk6rXYphoQyT7evAx555WUHlxmPZ7dzofUNQs0%2BSnt4FHo6QI6uUcKcCSVZ%2BM2LN7VoIPAebRpodzRB6RJmt48TTjZzDCE3vbNBjqkARx%2BLv2hpyTwcxJTgTVNA%2B84gU9ha3HVciniHz%2BHESBtq2J0dzM8ndMu9GonGVOal43LtjxeoHd50pzga02sEJtO%2BYVH%2Bw5ghIu7UNzHECmy1%2FNxlGVTrMfAH6P8pBhFPeKXoebmAzJKd6qkfw4bNHdvb7tzuGL1m%2FzbNABQEcQ1AkjxOzyHxp1JQRAtH%2BGh8uKcHBvNqEwg7s0xTr%2FDn%2FqBK7qt&X-Amz-Signature=57f362abd912013e8345462ae8b1a2b9d3d652746b527c3b921baa7c02ab7428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTF5TKY3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCgqyen5OnZSN7MOTtN9vqfn2Gu2Ca3X59jp1LgBrPRnwIgYfIBc6eFM5%2BKnAGZDI7G0srrAF52OFtrkyBIymERRN4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDK8j3OSmeSLh4fZLXSrcA1GJL7oZp2jyCPk50zQ4QkkjPQyASTKgqRBh7l0yLDEPB6siYMPLmutXO1mBaum2vnrmxch1jLopZxxEwl3N%2B%2FEEeFaPmbYp1BePyQBfgGD6Wo7dLFn7cScmLF%2FQJOmFeVUOBDX2FNcg%2B5lhjB0WQXeErqN2Sgwm6rpwz9eLi13dV2cyLehrGva3HM53t%2Bz22frpoUQW%2FG1hWvWeq5GuDUhtENltsr4ZxUkzmy71GeI3CrXHaUwQ4cP5%2BpPg34L93tC55gOh4%2FE6diU392BBLSVnRxI5myEMXaXjku01AxLQaQCzef2NZHYpdBc4t2n0H%2F5nDZuw2NzcEbYdbpREtj%2F%2BpkGl4aOn3nANGRrpJ%2FEm7oeEtjJ4eVhNE%2F8slLgJQLznevEUaHg2xf8ybVP2oKQHNqmod9x1KF7%2Fvwbd%2BSzH2BSl1XMk2Rzihlx%2BBt5GZraVBDq2HaxQQmPRMlG1cDwbFwTEtf%2Bzfvu2GHnbqoh5ux7pv63uwbGurMK1C844q5UHD8Lz6Eoy6091Lccc2eqmJ7E64FFTqhOyv6q%2FZfRnqrrRq2%2BRduH9SsyIUWbNxsGRgNsmNZaOesN3PRYcfLBxTJHMoEFUchWcsLdqRUU89RWvIoUH%2BI4hJRaSMIfT980GOqUB2cbYk7SunTwSZ5O38yTq1dGa1WTD1NTZrIz8BoTYD5avd%2BMnN6WZrmgBzDlf%2FcgDrBoxeDxg5kKHaw%2BYdB5JG%2Fc5JzLt51FoTLbFjWXPPGC4NaAzFFqJgv49td90pzFJ0Q5qPRWo5TB32vwp7F5PvXHfsngqPEtoz%2FuT7aSHqV%2By0gnk32pBgdTF4eKYh4wEJ4nicveIGqB7dvM4Dpv6Qyzf6Pll&X-Amz-Signature=446034dca2ba035c46a70a71bdccf6f35b905758b07f6204793c4d8b535fe911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SONR7RHH%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQD3eh1mnCo%2Fr1FuuTVf47DV6hT%2FRajeMfb%2FFYkgfMM%2F0gIhAIae8sQkIrgrbaMZQZQoN4NJkz4wGYqZG5RQLNhp8UYgKv8DCD4QABoMNjM3NDIzMTgzODA1Igzx6376cRBtlmVJSWAq3APdTuXlOIOO1ii5VCaLDXJVRGLTYVcMyCgiU%2FhZuDHZzeMmwplKLfkmBM3Ey6K3GHBFHjufDI4gm3XygkPFEMu1zI0ZtL0UdMRB%2F6KU7B0gs%2B0nfHUYE4iVYCpoqWNRTfw%2FiQp%2FQlh87B1sAq0Ol7i8LufMQSXobW1HfFzIWeyEbz%2B5VnlEoenl2hUXYzWwrPrEwpl%2F4dATWOMfrSQbW5rEHzU8FHtzMQWNruJPcuzMHEgLdqaMSIqWbou4FeRaYJ0cd3C8eTq6srNDXvYootHSJd2aCyups1BBGE%2F5KSfC2TYxNRM6Q7yCQF0sSyrHg9KHpO4C%2Fhbvzi3ouoxwuLCQVrz4NFBmYFXnKGdrn4xhjWrUbV8E0zGeJRxRw5RbcmfhjhA8bcDXneLrb4o8mHxUyMq08P5aMBoKfMIysD70RZETiLo4iBWHY8jjC71Ar5hWjrS%2B2uXUDWzZ%2F4sSIm6KH5lQFEV%2BJnK9fkOaczUUN2y9D3yEodu%2F4gNcOmIY0KHRozXJoT%2BxUH9RX04xTxtbR2RV5m9NfJuY80jdEh00owP%2Bjm9NuiMN%2BQzEOJmgz4YqgjjMxDrsmDtrbFLhRaWHwV7DPDyVw9hKASfIVN%2FsLh1vF2petzcLCK0sIDDX3vbNBjqkAYRtgoj%2FYYXY650TZGzHwNinI0TOn0Wmk2EEFb%2BKR2EP1DqRg1iOPjxYBc9V%2FRJo3et07SeHATI9tdsa%2Feb25NMlLujnltFRhzziX9SqeKcaqohtJgaDSSjcyNIcPWWlZgSA%2BJnJ72s5Y7LHkCIENAe4KUjRpa4k7%2BlMBb4q%2FhqVNMHpC9fnQCOikujPjmfF4P2Zc2oIMgpzrqVLwGRRQBrlezyy&X-Amz-Signature=69076dbd1bac6ed79c65aad5c0ff59683a83366ab6fee66ab9e2033d007ae73b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTF5TKY3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCgqyen5OnZSN7MOTtN9vqfn2Gu2Ca3X59jp1LgBrPRnwIgYfIBc6eFM5%2BKnAGZDI7G0srrAF52OFtrkyBIymERRN4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDK8j3OSmeSLh4fZLXSrcA1GJL7oZp2jyCPk50zQ4QkkjPQyASTKgqRBh7l0yLDEPB6siYMPLmutXO1mBaum2vnrmxch1jLopZxxEwl3N%2B%2FEEeFaPmbYp1BePyQBfgGD6Wo7dLFn7cScmLF%2FQJOmFeVUOBDX2FNcg%2B5lhjB0WQXeErqN2Sgwm6rpwz9eLi13dV2cyLehrGva3HM53t%2Bz22frpoUQW%2FG1hWvWeq5GuDUhtENltsr4ZxUkzmy71GeI3CrXHaUwQ4cP5%2BpPg34L93tC55gOh4%2FE6diU392BBLSVnRxI5myEMXaXjku01AxLQaQCzef2NZHYpdBc4t2n0H%2F5nDZuw2NzcEbYdbpREtj%2F%2BpkGl4aOn3nANGRrpJ%2FEm7oeEtjJ4eVhNE%2F8slLgJQLznevEUaHg2xf8ybVP2oKQHNqmod9x1KF7%2Fvwbd%2BSzH2BSl1XMk2Rzihlx%2BBt5GZraVBDq2HaxQQmPRMlG1cDwbFwTEtf%2Bzfvu2GHnbqoh5ux7pv63uwbGurMK1C844q5UHD8Lz6Eoy6091Lccc2eqmJ7E64FFTqhOyv6q%2FZfRnqrrRq2%2BRduH9SsyIUWbNxsGRgNsmNZaOesN3PRYcfLBxTJHMoEFUchWcsLdqRUU89RWvIoUH%2BI4hJRaSMIfT980GOqUB2cbYk7SunTwSZ5O38yTq1dGa1WTD1NTZrIz8BoTYD5avd%2BMnN6WZrmgBzDlf%2FcgDrBoxeDxg5kKHaw%2BYdB5JG%2Fc5JzLt51FoTLbFjWXPPGC4NaAzFFqJgv49td90pzFJ0Q5qPRWo5TB32vwp7F5PvXHfsngqPEtoz%2FuT7aSHqV%2By0gnk32pBgdTF4eKYh4wEJ4nicveIGqB7dvM4Dpv6Qyzf6Pll&X-Amz-Signature=a19ed2c0caba2530f8270f2d017505c6e6c57d77cb75e2e4811245ee0f15ed2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SDOO3A6%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIA%2FmApWECJLx%2F7veIfeYVvvYlkS0YaGv3%2FiHcM87%2BlOuAiBQFK2cR%2Ff96gqh76VytyP%2F%2FyCnG%2BMbSKZgYz3zv5li%2Fyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMAmZnDbLidvlYwlqYKtwDu5DK%2BbexHQzNjpMekhO%2FzQWBU%2Frq9ni4hS93oo39lUpikh%2BaFuzYkUHjCFrdYTUXL9t3ml9DnaKY3ughhsli9119ptySVf0leqSqcaMJFba8fOTUn1DMnCNnWgTgHmvtpn%2BRMMeZYCS6mRcbXXpWmP2ARNJmHld8Lm77CpqKqyrICFUtlzqg0dgukRQiq3EzlfFRpGersfLcLwD44rcufF0G81v5RZajWfVi4ZlzTsb3fCWlpKOnACiqVN6Llf7MiwR5uGff4Kx%2BR0Bv0vFH5bUafy%2FMwSg3hAPLto5PJIrHWxeYEuL6c%2BOtSnZ0H0MqGHKRLOZBosPLKoshyfXvUCv3lwhWFTMInaLt%2FEOP6q3OCXzOuZ10ilA67jOcGdJFKEvBDZCvc9tGcQ8vOvnUgoIi%2FXYIx2zMkGpmGqnnekXwFFixKvXU6Vg1nVRxE7mdj8qZ7k8YJVcDlDw4dbp2oBWUrQ%2FkOqlZ4Lk7FVmUli8TZaalO3%2F8BYQWiRsROzYxioxl5xhLWjIzjPmnXNDvoncAvmJsiDVA%2FcYbdylQPDRN%2BJHByZ8Qo4zsLj3roEpl7owok%2BdHbprdH4Syc4Bd2qlFoO4OQdgDCkr7Bz55vZQ3qmNwLxPymnzSkJow7dz2zQY6pgHTw6lI%2BRv2ZM1R2cjZBMUq2OkD7qc70jyLujvc13fHGiT6cCI%2B3zZABih6rWUSFqprNgeIMHxfbKxCbBEoNI%2FI%2FU1m4lmxhfzWaxLFIJ7GKzHPN9HTYkG%2BPezBrSAFgUP1onRabl2R91nhim4YZmk9zXW0U9yvguKo4V9TAxMThivhbyGSnbfefod9NgE5pf6TrLyRcqENjrZdisp3g1yU4WBwbpNI&X-Amz-Signature=c5155dcfbbcc564c72edd7b98e9429652fb38fee559f002233977f5d7dd4f2cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTF5TKY3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCgqyen5OnZSN7MOTtN9vqfn2Gu2Ca3X59jp1LgBrPRnwIgYfIBc6eFM5%2BKnAGZDI7G0srrAF52OFtrkyBIymERRN4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDK8j3OSmeSLh4fZLXSrcA1GJL7oZp2jyCPk50zQ4QkkjPQyASTKgqRBh7l0yLDEPB6siYMPLmutXO1mBaum2vnrmxch1jLopZxxEwl3N%2B%2FEEeFaPmbYp1BePyQBfgGD6Wo7dLFn7cScmLF%2FQJOmFeVUOBDX2FNcg%2B5lhjB0WQXeErqN2Sgwm6rpwz9eLi13dV2cyLehrGva3HM53t%2Bz22frpoUQW%2FG1hWvWeq5GuDUhtENltsr4ZxUkzmy71GeI3CrXHaUwQ4cP5%2BpPg34L93tC55gOh4%2FE6diU392BBLSVnRxI5myEMXaXjku01AxLQaQCzef2NZHYpdBc4t2n0H%2F5nDZuw2NzcEbYdbpREtj%2F%2BpkGl4aOn3nANGRrpJ%2FEm7oeEtjJ4eVhNE%2F8slLgJQLznevEUaHg2xf8ybVP2oKQHNqmod9x1KF7%2Fvwbd%2BSzH2BSl1XMk2Rzihlx%2BBt5GZraVBDq2HaxQQmPRMlG1cDwbFwTEtf%2Bzfvu2GHnbqoh5ux7pv63uwbGurMK1C844q5UHD8Lz6Eoy6091Lccc2eqmJ7E64FFTqhOyv6q%2FZfRnqrrRq2%2BRduH9SsyIUWbNxsGRgNsmNZaOesN3PRYcfLBxTJHMoEFUchWcsLdqRUU89RWvIoUH%2BI4hJRaSMIfT980GOqUB2cbYk7SunTwSZ5O38yTq1dGa1WTD1NTZrIz8BoTYD5avd%2BMnN6WZrmgBzDlf%2FcgDrBoxeDxg5kKHaw%2BYdB5JG%2Fc5JzLt51FoTLbFjWXPPGC4NaAzFFqJgv49td90pzFJ0Q5qPRWo5TB32vwp7F5PvXHfsngqPEtoz%2FuT7aSHqV%2By0gnk32pBgdTF4eKYh4wEJ4nicveIGqB7dvM4Dpv6Qyzf6Pll&X-Amz-Signature=b4e0f8c52e26c15daa50d5c9c4c66dab341a022c14e7e2d33f7897b36c5f0a77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5K6FXA5%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCM0WjTXCofJidlGU%2FIr3QyPnKy0iY0EMrFmMnIs4JaHAIhAIlMd3ygCwXT54B5TFWi5RqEjTT4vR%2FRws%2Fwxp2N9mRFKv8DCD4QABoMNjM3NDIzMTgzODA1Igya70R5KkUa1Uf1NlIq3AOrX%2FxCO7qEUS1ohu34S1yNrgfQ5pvWaqJV8hjLwz3zVbir9TdCWoy4DKniBTRznNJuczjgcfWFUf%2FeqEPbdZb3wJmCLgHjwyShsM2AjxzQuJu%2FhjD%2BttZvyBKQXKnFWJkEHhVbNu6DeNtx3mJuS9ZLjQKOne2pihCabcBYw5PY46YwDOK47%2B7CEa8pfNccpFx5SmKLIOuMcLYvaAJxFpg0vmr214nVCt2k1%2Fqe2s5%2Bfh53%2FvzVLwfxSifnGSwzZXPtk7bUs5%2BOyGtN1d1wSnQaMge1MZNWLj%2FqVVP4cWk8icH8odwuighXMBUPeLUjftp%2FKCY2JkWkGJ%2FYj6WBmyHhh2FzLyCQZjy%2Bz%2B8IDFXlRvzBBjKkklqMWeG5TYksdxbhztY0K0M9AAlC9X0j2zsIITVPpuMVZYvnMWp1F%2FpgCOqpE%2Bqmys1k1NrFcu07xuvsEm0NSwlCCvFkuiR0iVQGFLvxX58qoVn5i5FAmGos9NWTS%2Bb9cBFbbOVG8HW0KDW1iaSqW08vRgDE394fAf8QiYkYl8y2GBIa%2Fvm7vuJgJW9A3GzisSOVHklsqyVWUmYQOdDkbC6SXKB3roWru5Mp4n5k7VoncF%2BoT%2FnEL0w6j9b3Dom4ROqqaf6cCjCh3fbNBjqkAZQNRyl5DYD0ALiy8hUYEmzVvsBEZdpPMRDEN58NkbbnJw88m%2Fn06lZ7SDj1eMxKhVowGU8qt%2FovsE42eFk49rBgX0e66Tk1D%2BYyAI8%2FOaCL2WTSF%2BGZdETl3EA2YjQlRqe1C4I9YzgOOdKm7I%2BVgBUnXaxVcm%2BzJN7fOnnaBY0juSOKTyEBgqn88u%2B1s%2BwBoTXEN%2BpgH6VxelkxvX59k3Lmt2cZ&X-Amz-Signature=aacf280ff22cfe41a62e2d0606d3d83d298d0c9f86e44c5c8bb091ec4a5ef811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTF5TKY3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCgqyen5OnZSN7MOTtN9vqfn2Gu2Ca3X59jp1LgBrPRnwIgYfIBc6eFM5%2BKnAGZDI7G0srrAF52OFtrkyBIymERRN4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDK8j3OSmeSLh4fZLXSrcA1GJL7oZp2jyCPk50zQ4QkkjPQyASTKgqRBh7l0yLDEPB6siYMPLmutXO1mBaum2vnrmxch1jLopZxxEwl3N%2B%2FEEeFaPmbYp1BePyQBfgGD6Wo7dLFn7cScmLF%2FQJOmFeVUOBDX2FNcg%2B5lhjB0WQXeErqN2Sgwm6rpwz9eLi13dV2cyLehrGva3HM53t%2Bz22frpoUQW%2FG1hWvWeq5GuDUhtENltsr4ZxUkzmy71GeI3CrXHaUwQ4cP5%2BpPg34L93tC55gOh4%2FE6diU392BBLSVnRxI5myEMXaXjku01AxLQaQCzef2NZHYpdBc4t2n0H%2F5nDZuw2NzcEbYdbpREtj%2F%2BpkGl4aOn3nANGRrpJ%2FEm7oeEtjJ4eVhNE%2F8slLgJQLznevEUaHg2xf8ybVP2oKQHNqmod9x1KF7%2Fvwbd%2BSzH2BSl1XMk2Rzihlx%2BBt5GZraVBDq2HaxQQmPRMlG1cDwbFwTEtf%2Bzfvu2GHnbqoh5ux7pv63uwbGurMK1C844q5UHD8Lz6Eoy6091Lccc2eqmJ7E64FFTqhOyv6q%2FZfRnqrrRq2%2BRduH9SsyIUWbNxsGRgNsmNZaOesN3PRYcfLBxTJHMoEFUchWcsLdqRUU89RWvIoUH%2BI4hJRaSMIfT980GOqUB2cbYk7SunTwSZ5O38yTq1dGa1WTD1NTZrIz8BoTYD5avd%2BMnN6WZrmgBzDlf%2FcgDrBoxeDxg5kKHaw%2BYdB5JG%2Fc5JzLt51FoTLbFjWXPPGC4NaAzFFqJgv49td90pzFJ0Q5qPRWo5TB32vwp7F5PvXHfsngqPEtoz%2FuT7aSHqV%2By0gnk32pBgdTF4eKYh4wEJ4nicveIGqB7dvM4Dpv6Qyzf6Pll&X-Amz-Signature=226656bd8aed00534fa84dfc53d68eec0cab75a112f7dda0a1fb7e75fb3bbe13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VBCYA4C%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIEMPV1VW8G%2FmXwyMSKfqf92KpOHYr66KqJGqFM781bXDAiEA2IA97oW0RKQF7jiXCx%2BIgAxboG%2FPIN8rg77q%2FYa8oSgq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHUTjtE0LNoJviQYaircA%2FI%2F9muDnyk7%2Fv1ROOcyJZ18HxVcn%2BsVNO9Vc1pFdBE2lZ5kua9%2FCyMA5FEnFL6FaJvOJG%2Bf%2BPiRVqbdxE2AnqwMSjZJb1fH2foSv5EfXCqonr%2F5DdW4NT1u5B3kXV6Nu2OfuBFCTCdb2uWPLllenxCI2tutaVKc7bbdB75omQKYL1YP7xAjISVzy8d0g%2Bzah3muzcyHr3mP3X4RPMaO5N0z0GUdabKgYEdT1Tn6txfJXjaRG3OGJvvv%2FNParOJKM1G%2BmLGF02kZQ7JPybN1xbXh5YXGUaKoK949tU90M2homVwmkgUKzW5vqFCndA8wmzfgaty1xNeDyF8l7Sw9SbAGwNRgxdJbXejKdeu2Vs3yPQZ4PDDIXdmRuzD7m8FyrQUPnpU%2F2Fn86wHocMgJGAOcAwDWrZaj0PyFCnt0dcuKqe7C2DOHAyEcB4O1gGI0uy5anGW4Lr2vZALzSA5tAbXorCEYgns9qHY5WQ3abxAOHRU3J1bpWo%2BKAIYU4zzokCZYECAF%2FxgaNR1ujPic816ppAyq9SdlkDyAZqyFIrZkAiJMe%2BN0PUsQF%2BD3RyNNv1q1P6jds8cJljBBZHmMCDHLJJOG9MkhI9TNNuc1fNzgnMgxFHitOAPEBDB%2FMKTd9s0GOqUBv7QcCkubMEQbOQdxKkv3JzxtSu9gi32QKhlEktgJ4jCCONDZlbxjjqEzVitiAg6mMmIHswuNIWwJ0Yf8RWc%2F4sCj0TQyDG9etBp%2FgjWobaCtigeg7zdf8e9ioACT95%2Fw97%2B7%2BZ%2FwpLBGLdWl3DuzD2MnSU0NbGh6qGCY0NtUddedD7L16m0C%2FEFxaxgt8Mmgd0Z556fg36w%2F6314L8qnt39SwT1E&X-Amz-Signature=020405955e541c8c4553a204dcdc900057239406c24887e18162ef84499f4111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTF5TKY3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCgqyen5OnZSN7MOTtN9vqfn2Gu2Ca3X59jp1LgBrPRnwIgYfIBc6eFM5%2BKnAGZDI7G0srrAF52OFtrkyBIymERRN4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDK8j3OSmeSLh4fZLXSrcA1GJL7oZp2jyCPk50zQ4QkkjPQyASTKgqRBh7l0yLDEPB6siYMPLmutXO1mBaum2vnrmxch1jLopZxxEwl3N%2B%2FEEeFaPmbYp1BePyQBfgGD6Wo7dLFn7cScmLF%2FQJOmFeVUOBDX2FNcg%2B5lhjB0WQXeErqN2Sgwm6rpwz9eLi13dV2cyLehrGva3HM53t%2Bz22frpoUQW%2FG1hWvWeq5GuDUhtENltsr4ZxUkzmy71GeI3CrXHaUwQ4cP5%2BpPg34L93tC55gOh4%2FE6diU392BBLSVnRxI5myEMXaXjku01AxLQaQCzef2NZHYpdBc4t2n0H%2F5nDZuw2NzcEbYdbpREtj%2F%2BpkGl4aOn3nANGRrpJ%2FEm7oeEtjJ4eVhNE%2F8slLgJQLznevEUaHg2xf8ybVP2oKQHNqmod9x1KF7%2Fvwbd%2BSzH2BSl1XMk2Rzihlx%2BBt5GZraVBDq2HaxQQmPRMlG1cDwbFwTEtf%2Bzfvu2GHnbqoh5ux7pv63uwbGurMK1C844q5UHD8Lz6Eoy6091Lccc2eqmJ7E64FFTqhOyv6q%2FZfRnqrrRq2%2BRduH9SsyIUWbNxsGRgNsmNZaOesN3PRYcfLBxTJHMoEFUchWcsLdqRUU89RWvIoUH%2BI4hJRaSMIfT980GOqUB2cbYk7SunTwSZ5O38yTq1dGa1WTD1NTZrIz8BoTYD5avd%2BMnN6WZrmgBzDlf%2FcgDrBoxeDxg5kKHaw%2BYdB5JG%2Fc5JzLt51FoTLbFjWXPPGC4NaAzFFqJgv49td90pzFJ0Q5qPRWo5TB32vwp7F5PvXHfsngqPEtoz%2FuT7aSHqV%2By0gnk32pBgdTF4eKYh4wEJ4nicveIGqB7dvM4Dpv6Qyzf6Pll&X-Amz-Signature=4d6218f9f7ae02aa7bb7f832714999a6420ac91ea3e50ebadea9fdf43a008441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XEPEQRI%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIC3ypA%2FH78wgaD3pLA0hlob7Ex%2BehJyEke5psC3ltbU5AiEAjZPE7fKidcAy5hH9Q78BSXzVNGlET1csdO%2BObMPfX9Iq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDARRmlEg5azAK4ytyCrcA5n%2Bp0o5FkHj%2Fz9HgDtBR0%2Bc8xsw3fXJMKpDCUvupLJiYFQ4QqXhhheJpS0iqFmG9Osx4%2BO261qQsw4CLX6s%2F3%2F7ei3nmKLy4b%2Bb165hZLi5rOHJZl2JMGcwWPwwzv7eqRpaCHbM1VDXSayXzcP6rzNeY%2BfHkLpZwd1UUA%2B14XR1nqN8iDd3aLuTCNbNTTqqYVPZNh1fXPm7wbsnk7YN2CUPj6PNlzZbQSZDDYuShAE9Eam60mTu6jw%2BgZFToTtodwOM6ZNlCnMyh9YB49lH3SipE6u99IjTYVtMN8GzFpXkC9nYCOa%2FPNnrJIW7tjfiMCcvNBcihlNnq0HXyoxBERMwr4bQMKt4i3ul5oidI9xPqcyO00HH9WyZ2XJdRkb7fEZx7XrHmrpPuLLotkdgQyaKL2p3AZQxtHgwot6rGYeUd36wxVq%2BkFYXe11GApCu3CbTq0ZBicjvukqOZzpURhOR4gyrbmUWAZQxs4%2FqDFneLjqAm8VNIVLu9vILKlR9efS%2FEurA2bfP8QdZocmfue5DroCMC81mblwl3Iu4GQmkeMMtESsVJlGXawPyHK%2BrytmqOxWcrnFBj7aK0Oh59Go4cvMLfxdKNvDwJncjBjz4rzBRuMSvmtNyGl2fMJXe9s0GOqUBxPXE2ocngXQXlX37k6godSgqKhATKsYlpyPx4%2BlCExxb%2BFjuxunFc%2Bq6O%2B7Mg877YBoPM2LcVtwn3WU0Wup5BepYGuRKF90tsxrLXz3m%2BxxeL6a3%2Fa%2B5abHs5eG%2FVujxe3kBjCukWxzfFiQTkK0p0uP2wdtt7JlCPGQzMTZ%2Bkb%2BCcrpLsZuRVekmwJl3xJt%2BauDveiwSBYVXGdXvDwpD10T52%2FOQ&X-Amz-Signature=b8ed162c58bcbb3abf51179b0f0e9a6a51c7bff5ba25f420960af73fc57742cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUCNYHHZ%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIBGRM58PbJBxfKwOfdZX7s%2BCI362AnajV7hoTXVt5QXbAiEA34YXtNe9FpWIpfqQrZ9Dv2l2ta%2FzxxuY6pROAFxNgToq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHMeFe2LfuIjKbWpIircA%2BrCczNLLL98bxlXHnJN%2BNlC2yecgRdRIuc%2BxQjtux%2FU5KlXuMRuwCTKM66ke3eLHNoavH5xNVUqxbqPK09j7wxuWNfI8bBio%2Fd2iPth%2Fs8w8d8ecFZWnS5jn7S521ZlrgCMtRkPJFPZHjiE1Fd1NhXJCPKZZmvLXNFOm8AoXmaXhqyYBrjxvCDRGboHZtct5mAIq2ZmLsHa5M5YW1Zi3EgI0CZOrJzN43Qz6Ld6q9kXTqNEjI%2BU2DznXlLloOiRmyiloh0GZFgoQNchR7G9P8CHFeOVQnS0SJCPK%2BpIE7hEVdexwKEo%2F9Ilzte5Y6Nih7ohC5hD6seiPG4tURXGvPZ4dqOEvPzHxU%2FTtFvKCcY%2B5jdzb4YndUmhb5o1GTSuKp6EPI%2FCXiwfqCdMyZHWISpxEQznSZLNY9UcS9HJWIuI9me0t437BQ5M34UUIVU9EsokskKGik%2By72CNGDZkOzRHhi33Lo%2F5etng9crDctDFQMdehZc%2Fsphk9Oi%2BeHsYFGMKw3Cecj7VdVViW6FCfCpdm1GpbztKIOSWHuZ4128RlVAmYmsHbg6J1G6GO2w2Vv1NYyxC0vqv3dfQHuR3P4jY9ewd26iLd2evxVdzqhWKijz%2FMuuoaBUSfOg%2FMLTe9s0GOqUBLnZJvsXqTII%2BBeSJkRGzyYA3ARukiHraQtncZQLVv4JJZjF8hyi9VzS%2BVka8L7dqPtoFWEvMtuTVqv96eJ1VRjlOI6bHP7lirynlokYRJqgbp34nrxHVhDfVCmik6Ndvf%2FUwXQqsiy4B3%2Bf5vmzM1hZJ8cufZhOrWE2rxl8%2Fhz7y7K6qFIwBE%2BYz34LdQUrjmNT3d6KNgfQ7xcVC2M9ucKAPeqDj&X-Amz-Signature=01e9de1013ea5d6ad1a7a738271d4779a369b04c84ec78acdbc50a8d2a3629cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVWNAQJP%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCeLpoodZjtjXPGzj%2Bu438dUCeFME08LboDfmIIy6j3VwIgBqaGS19iWQfMdTYP%2FkQd63iPuvFPJFsxGTO%2Bcsh2dv0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBrH2bhYf7nPnrteXSrcA6QKhqXTSeYJZTupUr88Meg7qQwykXm5Hdh3kMd4cXzxEagPTuuN%2BhpqdNje432iqr7fJXBubhUb00QJVx4AYt4fUC7WqVDHrcwUJcmoqxxlzZ89n4DSkiWNKE1y1gayBklseHg%2BK8D6R6YCJgJlHuN5eIWKIBKalLW%2Bp8XWm8UagXUEHNOKtLMdeyRe7ok%2F6Xwm7c4lDuSB3Hqx%2BpS0N55NyBxbwQM8lgTl9SViFJx6pKJd%2BN8DXVnc6ZZQ%2B3Hx6CDecvq7k1pQp4EgCUthnT67nRHBpir14iMZfgZWBObVIaCHrgDo%2B5SMu83t2%2Bluy2NlDcZz%2B5EKVWLkbBeG2nVBQ%2B0Lvy3sSYywc9b0OZSdjUUe%2BPEsK3Kj3UFKUbvUR4YdmWr%2BL4oLMAq4IHMa%2F9gsSjgQM%2B%2BXW%2FQuymNzAtconVpPdmBZtq5rBFySsuOz5NUx%2Bkobl9xWrEHXHGcPVXUWsOt8S6fI25Qrk5uuRezkhYBkCiACJE%2BQA1CO4Fehl1plE5ptWQbvkaBx%2BVENNX3EzzjouNdecC0t3M%2B4b6247jVOzMFD5ewFO%2FtRtAD3RIS2FJlSfplDicixclW5CndwdUz3LCqTJjJ56cQUq1jJRnA9zuNc%2FnsPTJE3MOuy980GOqUBnxl5uN96CSAnchrGNQUnYJxpgWEuZ2tJLWLLrSFe4edI2Fi1qCQ3NaR1PUt36urkFe0dJi1vb4cx2Ft7Cwfm0w5JbTY6Hh9kjsJGIQ6hJJMCYBF%2BXjBkxFcwiskR%2BUu5Gi0SCkke6ltEa5bpzzhofDq2YT%2BrBy263A8KkQYBPC9RsqCpkzd9oSYR2bVAWaTnUmo%2BeMHYMe0eU6wnjBGiz%2FmyBDhk&X-Amz-Signature=245397814cfc2a6ea61d00751fdcd8317c2cfc563dbfd77d995eb9ad3aae5850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTF5TKY3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCgqyen5OnZSN7MOTtN9vqfn2Gu2Ca3X59jp1LgBrPRnwIgYfIBc6eFM5%2BKnAGZDI7G0srrAF52OFtrkyBIymERRN4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDK8j3OSmeSLh4fZLXSrcA1GJL7oZp2jyCPk50zQ4QkkjPQyASTKgqRBh7l0yLDEPB6siYMPLmutXO1mBaum2vnrmxch1jLopZxxEwl3N%2B%2FEEeFaPmbYp1BePyQBfgGD6Wo7dLFn7cScmLF%2FQJOmFeVUOBDX2FNcg%2B5lhjB0WQXeErqN2Sgwm6rpwz9eLi13dV2cyLehrGva3HM53t%2Bz22frpoUQW%2FG1hWvWeq5GuDUhtENltsr4ZxUkzmy71GeI3CrXHaUwQ4cP5%2BpPg34L93tC55gOh4%2FE6diU392BBLSVnRxI5myEMXaXjku01AxLQaQCzef2NZHYpdBc4t2n0H%2F5nDZuw2NzcEbYdbpREtj%2F%2BpkGl4aOn3nANGRrpJ%2FEm7oeEtjJ4eVhNE%2F8slLgJQLznevEUaHg2xf8ybVP2oKQHNqmod9x1KF7%2Fvwbd%2BSzH2BSl1XMk2Rzihlx%2BBt5GZraVBDq2HaxQQmPRMlG1cDwbFwTEtf%2Bzfvu2GHnbqoh5ux7pv63uwbGurMK1C844q5UHD8Lz6Eoy6091Lccc2eqmJ7E64FFTqhOyv6q%2FZfRnqrrRq2%2BRduH9SsyIUWbNxsGRgNsmNZaOesN3PRYcfLBxTJHMoEFUchWcsLdqRUU89RWvIoUH%2BI4hJRaSMIfT980GOqUB2cbYk7SunTwSZ5O38yTq1dGa1WTD1NTZrIz8BoTYD5avd%2BMnN6WZrmgBzDlf%2FcgDrBoxeDxg5kKHaw%2BYdB5JG%2Fc5JzLt51FoTLbFjWXPPGC4NaAzFFqJgv49td90pzFJ0Q5qPRWo5TB32vwp7F5PvXHfsngqPEtoz%2FuT7aSHqV%2By0gnk32pBgdTF4eKYh4wEJ4nicveIGqB7dvM4Dpv6Qyzf6Pll&X-Amz-Signature=640d36fdaf72aa9d3243e83737a67b983ad62511345c82f44264adf5ebea197e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTF5TKY3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCgqyen5OnZSN7MOTtN9vqfn2Gu2Ca3X59jp1LgBrPRnwIgYfIBc6eFM5%2BKnAGZDI7G0srrAF52OFtrkyBIymERRN4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDK8j3OSmeSLh4fZLXSrcA1GJL7oZp2jyCPk50zQ4QkkjPQyASTKgqRBh7l0yLDEPB6siYMPLmutXO1mBaum2vnrmxch1jLopZxxEwl3N%2B%2FEEeFaPmbYp1BePyQBfgGD6Wo7dLFn7cScmLF%2FQJOmFeVUOBDX2FNcg%2B5lhjB0WQXeErqN2Sgwm6rpwz9eLi13dV2cyLehrGva3HM53t%2Bz22frpoUQW%2FG1hWvWeq5GuDUhtENltsr4ZxUkzmy71GeI3CrXHaUwQ4cP5%2BpPg34L93tC55gOh4%2FE6diU392BBLSVnRxI5myEMXaXjku01AxLQaQCzef2NZHYpdBc4t2n0H%2F5nDZuw2NzcEbYdbpREtj%2F%2BpkGl4aOn3nANGRrpJ%2FEm7oeEtjJ4eVhNE%2F8slLgJQLznevEUaHg2xf8ybVP2oKQHNqmod9x1KF7%2Fvwbd%2BSzH2BSl1XMk2Rzihlx%2BBt5GZraVBDq2HaxQQmPRMlG1cDwbFwTEtf%2Bzfvu2GHnbqoh5ux7pv63uwbGurMK1C844q5UHD8Lz6Eoy6091Lccc2eqmJ7E64FFTqhOyv6q%2FZfRnqrrRq2%2BRduH9SsyIUWbNxsGRgNsmNZaOesN3PRYcfLBxTJHMoEFUchWcsLdqRUU89RWvIoUH%2BI4hJRaSMIfT980GOqUB2cbYk7SunTwSZ5O38yTq1dGa1WTD1NTZrIz8BoTYD5avd%2BMnN6WZrmgBzDlf%2FcgDrBoxeDxg5kKHaw%2BYdB5JG%2Fc5JzLt51FoTLbFjWXPPGC4NaAzFFqJgv49td90pzFJ0Q5qPRWo5TB32vwp7F5PvXHfsngqPEtoz%2FuT7aSHqV%2By0gnk32pBgdTF4eKYh4wEJ4nicveIGqB7dvM4Dpv6Qyzf6Pll&X-Amz-Signature=76af7676386eaaae41ddc8f2490ba8c782d355ae93606d374e2443fc9330a8ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBTDOUY%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQD8WPfgY%2FkLWm4yxuM49EpkLb5%2BpeuKK8R6J2XeBKkRawIhAIAXcOToV5sMZYt9H5ujuQiv9bHGFqEIdCcuidgOUl23Kv8DCD4QABoMNjM3NDIzMTgzODA1IgwB2DGdsNfEaiClJPMq3APbOEaA51dQkpeoYvg%2F%2B%2BFG6N4YPQRLevmzhKVs4stoKFD3E96v3WZLdtZ18N94n%2BLScF9a4N71MgudmXh7MCIeQ9OSeLIfZ7e4797Do2vXYPCR1SeXB0k3rdXwMACssNky%2BTUlzar%2BGfCIiRUr9mCePobRCLUL6TbpcD1Yuxo8yFGo3r5tJLN5y8NZMqZ1F3m3DIYOYkfaQKH8sLpbvAiXml1xv63NPw5%2B5%2FMerBHKd8ESbmZVq06%2Be%2BdUaTscBM4cSdlgEIbR0kAaEZJOAEGaNvxRiLR6ZkuNSULy7pjy1sGzTV36A94wt6JDvQV%2FQoVmkxb8Fc5aireKSCBcXVak0FNjzlpc%2B4zktJH3f0qxmR1MtcbXlRr%2Bbv2PXcL%2BydoQpVa%2FHKG2mmuGlyrwZoXzmaQlCiVUvLLiuJ6mTBe1JS4I0ckmqk2npkGoa72sPM5aolEnzCzR%2FfOgOjd5QcfEpTJDfI0ehhXW00nezBxXzGkXlsrEeUXgsnYWdVoJwxL%2FVK%2BwNM46TR4Z19GAqJzUEC7H6%2Bpbyc0sAUPnG93wE0gN5OaAv9k7FGXivZWhFjZI2MB4jax01INaNx5Luygrvvdo8ckMPtt7C%2B4AdX3oNTaifenj2%2FEOybSHazC13vbNBjqkATvT8F6mYqLIKyRCYF8u3yIf83h7IXFth0BiOP37c%2BdOjCHCJwlHSSfOvfeVsCAXNi1MRMwTRhj0GXItAm4WlkOrsH1RyadbhEwL0279NtFEg%2BHoXwifPOswfqEvt7V7hU0FJS73zoPCVJ9DmecB88NaZlofSyNCcQzyZvSHiszcocik0yoKQG8h8VUNMxtB%2Bffrbjh%2FkovYkAFFtcGGgjHfKOLO&X-Amz-Signature=292fcef7dc385063d145e9f746869dd7c13045efedd0450807d7ff9d80621da4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBTDOUY%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQD8WPfgY%2FkLWm4yxuM49EpkLb5%2BpeuKK8R6J2XeBKkRawIhAIAXcOToV5sMZYt9H5ujuQiv9bHGFqEIdCcuidgOUl23Kv8DCD4QABoMNjM3NDIzMTgzODA1IgwB2DGdsNfEaiClJPMq3APbOEaA51dQkpeoYvg%2F%2B%2BFG6N4YPQRLevmzhKVs4stoKFD3E96v3WZLdtZ18N94n%2BLScF9a4N71MgudmXh7MCIeQ9OSeLIfZ7e4797Do2vXYPCR1SeXB0k3rdXwMACssNky%2BTUlzar%2BGfCIiRUr9mCePobRCLUL6TbpcD1Yuxo8yFGo3r5tJLN5y8NZMqZ1F3m3DIYOYkfaQKH8sLpbvAiXml1xv63NPw5%2B5%2FMerBHKd8ESbmZVq06%2Be%2BdUaTscBM4cSdlgEIbR0kAaEZJOAEGaNvxRiLR6ZkuNSULy7pjy1sGzTV36A94wt6JDvQV%2FQoVmkxb8Fc5aireKSCBcXVak0FNjzlpc%2B4zktJH3f0qxmR1MtcbXlRr%2Bbv2PXcL%2BydoQpVa%2FHKG2mmuGlyrwZoXzmaQlCiVUvLLiuJ6mTBe1JS4I0ckmqk2npkGoa72sPM5aolEnzCzR%2FfOgOjd5QcfEpTJDfI0ehhXW00nezBxXzGkXlsrEeUXgsnYWdVoJwxL%2FVK%2BwNM46TR4Z19GAqJzUEC7H6%2Bpbyc0sAUPnG93wE0gN5OaAv9k7FGXivZWhFjZI2MB4jax01INaNx5Luygrvvdo8ckMPtt7C%2B4AdX3oNTaifenj2%2FEOybSHazC13vbNBjqkATvT8F6mYqLIKyRCYF8u3yIf83h7IXFth0BiOP37c%2BdOjCHCJwlHSSfOvfeVsCAXNi1MRMwTRhj0GXItAm4WlkOrsH1RyadbhEwL0279NtFEg%2BHoXwifPOswfqEvt7V7hU0FJS73zoPCVJ9DmecB88NaZlofSyNCcQzyZvSHiszcocik0yoKQG8h8VUNMxtB%2Bffrbjh%2FkovYkAFFtcGGgjHfKOLO&X-Amz-Signature=0a7dfc01cfbd4705ed788ce599b7bb2d957b83efb3e752aeeee305831d3b1b06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBTDOUY%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQD8WPfgY%2FkLWm4yxuM49EpkLb5%2BpeuKK8R6J2XeBKkRawIhAIAXcOToV5sMZYt9H5ujuQiv9bHGFqEIdCcuidgOUl23Kv8DCD4QABoMNjM3NDIzMTgzODA1IgwB2DGdsNfEaiClJPMq3APbOEaA51dQkpeoYvg%2F%2B%2BFG6N4YPQRLevmzhKVs4stoKFD3E96v3WZLdtZ18N94n%2BLScF9a4N71MgudmXh7MCIeQ9OSeLIfZ7e4797Do2vXYPCR1SeXB0k3rdXwMACssNky%2BTUlzar%2BGfCIiRUr9mCePobRCLUL6TbpcD1Yuxo8yFGo3r5tJLN5y8NZMqZ1F3m3DIYOYkfaQKH8sLpbvAiXml1xv63NPw5%2B5%2FMerBHKd8ESbmZVq06%2Be%2BdUaTscBM4cSdlgEIbR0kAaEZJOAEGaNvxRiLR6ZkuNSULy7pjy1sGzTV36A94wt6JDvQV%2FQoVmkxb8Fc5aireKSCBcXVak0FNjzlpc%2B4zktJH3f0qxmR1MtcbXlRr%2Bbv2PXcL%2BydoQpVa%2FHKG2mmuGlyrwZoXzmaQlCiVUvLLiuJ6mTBe1JS4I0ckmqk2npkGoa72sPM5aolEnzCzR%2FfOgOjd5QcfEpTJDfI0ehhXW00nezBxXzGkXlsrEeUXgsnYWdVoJwxL%2FVK%2BwNM46TR4Z19GAqJzUEC7H6%2Bpbyc0sAUPnG93wE0gN5OaAv9k7FGXivZWhFjZI2MB4jax01INaNx5Luygrvvdo8ckMPtt7C%2B4AdX3oNTaifenj2%2FEOybSHazC13vbNBjqkATvT8F6mYqLIKyRCYF8u3yIf83h7IXFth0BiOP37c%2BdOjCHCJwlHSSfOvfeVsCAXNi1MRMwTRhj0GXItAm4WlkOrsH1RyadbhEwL0279NtFEg%2BHoXwifPOswfqEvt7V7hU0FJS73zoPCVJ9DmecB88NaZlofSyNCcQzyZvSHiszcocik0yoKQG8h8VUNMxtB%2Bffrbjh%2FkovYkAFFtcGGgjHfKOLO&X-Amz-Signature=1efc3d54df4a5a74886afd23f76d407200530a1d7a0edc0bd52a2063c17c16a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBTDOUY%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQD8WPfgY%2FkLWm4yxuM49EpkLb5%2BpeuKK8R6J2XeBKkRawIhAIAXcOToV5sMZYt9H5ujuQiv9bHGFqEIdCcuidgOUl23Kv8DCD4QABoMNjM3NDIzMTgzODA1IgwB2DGdsNfEaiClJPMq3APbOEaA51dQkpeoYvg%2F%2B%2BFG6N4YPQRLevmzhKVs4stoKFD3E96v3WZLdtZ18N94n%2BLScF9a4N71MgudmXh7MCIeQ9OSeLIfZ7e4797Do2vXYPCR1SeXB0k3rdXwMACssNky%2BTUlzar%2BGfCIiRUr9mCePobRCLUL6TbpcD1Yuxo8yFGo3r5tJLN5y8NZMqZ1F3m3DIYOYkfaQKH8sLpbvAiXml1xv63NPw5%2B5%2FMerBHKd8ESbmZVq06%2Be%2BdUaTscBM4cSdlgEIbR0kAaEZJOAEGaNvxRiLR6ZkuNSULy7pjy1sGzTV36A94wt6JDvQV%2FQoVmkxb8Fc5aireKSCBcXVak0FNjzlpc%2B4zktJH3f0qxmR1MtcbXlRr%2Bbv2PXcL%2BydoQpVa%2FHKG2mmuGlyrwZoXzmaQlCiVUvLLiuJ6mTBe1JS4I0ckmqk2npkGoa72sPM5aolEnzCzR%2FfOgOjd5QcfEpTJDfI0ehhXW00nezBxXzGkXlsrEeUXgsnYWdVoJwxL%2FVK%2BwNM46TR4Z19GAqJzUEC7H6%2Bpbyc0sAUPnG93wE0gN5OaAv9k7FGXivZWhFjZI2MB4jax01INaNx5Luygrvvdo8ckMPtt7C%2B4AdX3oNTaifenj2%2FEOybSHazC13vbNBjqkATvT8F6mYqLIKyRCYF8u3yIf83h7IXFth0BiOP37c%2BdOjCHCJwlHSSfOvfeVsCAXNi1MRMwTRhj0GXItAm4WlkOrsH1RyadbhEwL0279NtFEg%2BHoXwifPOswfqEvt7V7hU0FJS73zoPCVJ9DmecB88NaZlofSyNCcQzyZvSHiszcocik0yoKQG8h8VUNMxtB%2Bffrbjh%2FkovYkAFFtcGGgjHfKOLO&X-Amz-Signature=36bab37932eb99da6ded56700879e9ff215d4b04b8047d6d6fa3876e3a90b432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZJV7GHY%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCTJYfFPiJN4J50utxYdF2EiNebbJwl%2F7oA58Em0wy0awIhAPMc%2Bh1ZBIl6IHVGs%2FSSbhNDgHM6xxiFWpVSo1I0vJkFKv8DCD4QABoMNjM3NDIzMTgzODA1IgwuJ5z7sLPF7yTFLq0q3ANcu3%2Bfyr5fKIMWUXuey9OlKWvFRP5HiajHhzoVyu60XRUjgQ8QYln8umhg3UfK1LAwqF4uIfNCG8pHiI3%2FLhmI%2FQb0i528yFDnIlyQymxz2%2Fj8WP6GsFAz7142MRG78ZSt14ukBeUQVgmGzJ8OButDdiLmjxuSddMU%2B5BaJRsR1j5q2A8OsKjHXF%2BjJDNRcXiLG25p9dULXy5x76Z%2FUCAbOrq8WTqINODTfi6Ls6FOIkVMwhQzXXBs4DbL6BoWVk79W8GCIQAb0L%2B%2BKCDbcK7T1dOUAP%2Fk3Oc%2BcvvQiZ4yBZxsN%2Bmux9p%2FXIPOHMlj3epjPf%2FR0Wm%2B1wbfEskX51Ur3BzX1dA6TBU28E223QczVki0c4G2Scdj3ND9yJAAGpd2z8p1ENiNorXbwgwueCzBDH%2F2YoNEeoGIEz6Bf5Zt1E9uLQJj1P3jABYVogL2JtF9M5r2wVeNhOeYAcuVnYrI61zB6uyjKppkWSheDZs%2Bsmyx1hNcY5H7MN5alSHR0hQGVHWPqfHsTFaY5vSycypIes6gAjhJpGqIAT6eugB1V7LlOnwJoQ6Kg%2BsbZXZ1SFWt3EPONDWzHfAoXR%2Bpb5ajoE8%2BLHulVcZ0m7ctPKAhw%2BH1e7trq2A28WdyQDCY3vbNBjqkAU7uGfNaXnVG7RT0naPLWgqeux8Hw3EeNIq%2FKddXtTjhO0K6aojidGDRBm2z4mS8ArqICh3J3kThl7VsBWzjSKHwQQiHZUO0%2B%2Bhqu%2F3WRWgWZwqojfUh3leuHYigKLfnbgmJt7qo5fBz14%2BvGfL8bi3St9fl%2F6HANtylAjM%2BUkwoRckvELFCy%2BoP3gmSVHfGui%2B%2B3r55kNrBsxr0t2m5J0JQ8S3V&X-Amz-Signature=2723e56e36d17283997513d18933054a3a86d4251f68930cf5bd250ad8d2c21f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBTDOUY%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQD8WPfgY%2FkLWm4yxuM49EpkLb5%2BpeuKK8R6J2XeBKkRawIhAIAXcOToV5sMZYt9H5ujuQiv9bHGFqEIdCcuidgOUl23Kv8DCD4QABoMNjM3NDIzMTgzODA1IgwB2DGdsNfEaiClJPMq3APbOEaA51dQkpeoYvg%2F%2B%2BFG6N4YPQRLevmzhKVs4stoKFD3E96v3WZLdtZ18N94n%2BLScF9a4N71MgudmXh7MCIeQ9OSeLIfZ7e4797Do2vXYPCR1SeXB0k3rdXwMACssNky%2BTUlzar%2BGfCIiRUr9mCePobRCLUL6TbpcD1Yuxo8yFGo3r5tJLN5y8NZMqZ1F3m3DIYOYkfaQKH8sLpbvAiXml1xv63NPw5%2B5%2FMerBHKd8ESbmZVq06%2Be%2BdUaTscBM4cSdlgEIbR0kAaEZJOAEGaNvxRiLR6ZkuNSULy7pjy1sGzTV36A94wt6JDvQV%2FQoVmkxb8Fc5aireKSCBcXVak0FNjzlpc%2B4zktJH3f0qxmR1MtcbXlRr%2Bbv2PXcL%2BydoQpVa%2FHKG2mmuGlyrwZoXzmaQlCiVUvLLiuJ6mTBe1JS4I0ckmqk2npkGoa72sPM5aolEnzCzR%2FfOgOjd5QcfEpTJDfI0ehhXW00nezBxXzGkXlsrEeUXgsnYWdVoJwxL%2FVK%2BwNM46TR4Z19GAqJzUEC7H6%2Bpbyc0sAUPnG93wE0gN5OaAv9k7FGXivZWhFjZI2MB4jax01INaNx5Luygrvvdo8ckMPtt7C%2B4AdX3oNTaifenj2%2FEOybSHazC13vbNBjqkATvT8F6mYqLIKyRCYF8u3yIf83h7IXFth0BiOP37c%2BdOjCHCJwlHSSfOvfeVsCAXNi1MRMwTRhj0GXItAm4WlkOrsH1RyadbhEwL0279NtFEg%2BHoXwifPOswfqEvt7V7hU0FJS73zoPCVJ9DmecB88NaZlofSyNCcQzyZvSHiszcocik0yoKQG8h8VUNMxtB%2Bffrbjh%2FkovYkAFFtcGGgjHfKOLO&X-Amz-Signature=26dd131251376f61eeb440d0f974d87b2519a8058d266e88f1613c53bfc35d62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBTDOUY%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQD8WPfgY%2FkLWm4yxuM49EpkLb5%2BpeuKK8R6J2XeBKkRawIhAIAXcOToV5sMZYt9H5ujuQiv9bHGFqEIdCcuidgOUl23Kv8DCD4QABoMNjM3NDIzMTgzODA1IgwB2DGdsNfEaiClJPMq3APbOEaA51dQkpeoYvg%2F%2B%2BFG6N4YPQRLevmzhKVs4stoKFD3E96v3WZLdtZ18N94n%2BLScF9a4N71MgudmXh7MCIeQ9OSeLIfZ7e4797Do2vXYPCR1SeXB0k3rdXwMACssNky%2BTUlzar%2BGfCIiRUr9mCePobRCLUL6TbpcD1Yuxo8yFGo3r5tJLN5y8NZMqZ1F3m3DIYOYkfaQKH8sLpbvAiXml1xv63NPw5%2B5%2FMerBHKd8ESbmZVq06%2Be%2BdUaTscBM4cSdlgEIbR0kAaEZJOAEGaNvxRiLR6ZkuNSULy7pjy1sGzTV36A94wt6JDvQV%2FQoVmkxb8Fc5aireKSCBcXVak0FNjzlpc%2B4zktJH3f0qxmR1MtcbXlRr%2Bbv2PXcL%2BydoQpVa%2FHKG2mmuGlyrwZoXzmaQlCiVUvLLiuJ6mTBe1JS4I0ckmqk2npkGoa72sPM5aolEnzCzR%2FfOgOjd5QcfEpTJDfI0ehhXW00nezBxXzGkXlsrEeUXgsnYWdVoJwxL%2FVK%2BwNM46TR4Z19GAqJzUEC7H6%2Bpbyc0sAUPnG93wE0gN5OaAv9k7FGXivZWhFjZI2MB4jax01INaNx5Luygrvvdo8ckMPtt7C%2B4AdX3oNTaifenj2%2FEOybSHazC13vbNBjqkATvT8F6mYqLIKyRCYF8u3yIf83h7IXFth0BiOP37c%2BdOjCHCJwlHSSfOvfeVsCAXNi1MRMwTRhj0GXItAm4WlkOrsH1RyadbhEwL0279NtFEg%2BHoXwifPOswfqEvt7V7hU0FJS73zoPCVJ9DmecB88NaZlofSyNCcQzyZvSHiszcocik0yoKQG8h8VUNMxtB%2Bffrbjh%2FkovYkAFFtcGGgjHfKOLO&X-Amz-Signature=17951d7ece0381199ec9881e1590873f6790a40813d32f7dff00303367296828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBTDOUY%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQD8WPfgY%2FkLWm4yxuM49EpkLb5%2BpeuKK8R6J2XeBKkRawIhAIAXcOToV5sMZYt9H5ujuQiv9bHGFqEIdCcuidgOUl23Kv8DCD4QABoMNjM3NDIzMTgzODA1IgwB2DGdsNfEaiClJPMq3APbOEaA51dQkpeoYvg%2F%2B%2BFG6N4YPQRLevmzhKVs4stoKFD3E96v3WZLdtZ18N94n%2BLScF9a4N71MgudmXh7MCIeQ9OSeLIfZ7e4797Do2vXYPCR1SeXB0k3rdXwMACssNky%2BTUlzar%2BGfCIiRUr9mCePobRCLUL6TbpcD1Yuxo8yFGo3r5tJLN5y8NZMqZ1F3m3DIYOYkfaQKH8sLpbvAiXml1xv63NPw5%2B5%2FMerBHKd8ESbmZVq06%2Be%2BdUaTscBM4cSdlgEIbR0kAaEZJOAEGaNvxRiLR6ZkuNSULy7pjy1sGzTV36A94wt6JDvQV%2FQoVmkxb8Fc5aireKSCBcXVak0FNjzlpc%2B4zktJH3f0qxmR1MtcbXlRr%2Bbv2PXcL%2BydoQpVa%2FHKG2mmuGlyrwZoXzmaQlCiVUvLLiuJ6mTBe1JS4I0ckmqk2npkGoa72sPM5aolEnzCzR%2FfOgOjd5QcfEpTJDfI0ehhXW00nezBxXzGkXlsrEeUXgsnYWdVoJwxL%2FVK%2BwNM46TR4Z19GAqJzUEC7H6%2Bpbyc0sAUPnG93wE0gN5OaAv9k7FGXivZWhFjZI2MB4jax01INaNx5Luygrvvdo8ckMPtt7C%2B4AdX3oNTaifenj2%2FEOybSHazC13vbNBjqkATvT8F6mYqLIKyRCYF8u3yIf83h7IXFth0BiOP37c%2BdOjCHCJwlHSSfOvfeVsCAXNi1MRMwTRhj0GXItAm4WlkOrsH1RyadbhEwL0279NtFEg%2BHoXwifPOswfqEvt7V7hU0FJS73zoPCVJ9DmecB88NaZlofSyNCcQzyZvSHiszcocik0yoKQG8h8VUNMxtB%2Bffrbjh%2FkovYkAFFtcGGgjHfKOLO&X-Amz-Signature=1efc3d54df4a5a74886afd23f76d407200530a1d7a0edc0bd52a2063c17c16a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBTDOUY%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQD8WPfgY%2FkLWm4yxuM49EpkLb5%2BpeuKK8R6J2XeBKkRawIhAIAXcOToV5sMZYt9H5ujuQiv9bHGFqEIdCcuidgOUl23Kv8DCD4QABoMNjM3NDIzMTgzODA1IgwB2DGdsNfEaiClJPMq3APbOEaA51dQkpeoYvg%2F%2B%2BFG6N4YPQRLevmzhKVs4stoKFD3E96v3WZLdtZ18N94n%2BLScF9a4N71MgudmXh7MCIeQ9OSeLIfZ7e4797Do2vXYPCR1SeXB0k3rdXwMACssNky%2BTUlzar%2BGfCIiRUr9mCePobRCLUL6TbpcD1Yuxo8yFGo3r5tJLN5y8NZMqZ1F3m3DIYOYkfaQKH8sLpbvAiXml1xv63NPw5%2B5%2FMerBHKd8ESbmZVq06%2Be%2BdUaTscBM4cSdlgEIbR0kAaEZJOAEGaNvxRiLR6ZkuNSULy7pjy1sGzTV36A94wt6JDvQV%2FQoVmkxb8Fc5aireKSCBcXVak0FNjzlpc%2B4zktJH3f0qxmR1MtcbXlRr%2Bbv2PXcL%2BydoQpVa%2FHKG2mmuGlyrwZoXzmaQlCiVUvLLiuJ6mTBe1JS4I0ckmqk2npkGoa72sPM5aolEnzCzR%2FfOgOjd5QcfEpTJDfI0ehhXW00nezBxXzGkXlsrEeUXgsnYWdVoJwxL%2FVK%2BwNM46TR4Z19GAqJzUEC7H6%2Bpbyc0sAUPnG93wE0gN5OaAv9k7FGXivZWhFjZI2MB4jax01INaNx5Luygrvvdo8ckMPtt7C%2B4AdX3oNTaifenj2%2FEOybSHazC13vbNBjqkATvT8F6mYqLIKyRCYF8u3yIf83h7IXFth0BiOP37c%2BdOjCHCJwlHSSfOvfeVsCAXNi1MRMwTRhj0GXItAm4WlkOrsH1RyadbhEwL0279NtFEg%2BHoXwifPOswfqEvt7V7hU0FJS73zoPCVJ9DmecB88NaZlofSyNCcQzyZvSHiszcocik0yoKQG8h8VUNMxtB%2Bffrbjh%2FkovYkAFFtcGGgjHfKOLO&X-Amz-Signature=cbaa93e6a8c5b3ec320200fda791265e230a79ad7b7a604ad87f6cfc6714b302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBTDOUY%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQD8WPfgY%2FkLWm4yxuM49EpkLb5%2BpeuKK8R6J2XeBKkRawIhAIAXcOToV5sMZYt9H5ujuQiv9bHGFqEIdCcuidgOUl23Kv8DCD4QABoMNjM3NDIzMTgzODA1IgwB2DGdsNfEaiClJPMq3APbOEaA51dQkpeoYvg%2F%2B%2BFG6N4YPQRLevmzhKVs4stoKFD3E96v3WZLdtZ18N94n%2BLScF9a4N71MgudmXh7MCIeQ9OSeLIfZ7e4797Do2vXYPCR1SeXB0k3rdXwMACssNky%2BTUlzar%2BGfCIiRUr9mCePobRCLUL6TbpcD1Yuxo8yFGo3r5tJLN5y8NZMqZ1F3m3DIYOYkfaQKH8sLpbvAiXml1xv63NPw5%2B5%2FMerBHKd8ESbmZVq06%2Be%2BdUaTscBM4cSdlgEIbR0kAaEZJOAEGaNvxRiLR6ZkuNSULy7pjy1sGzTV36A94wt6JDvQV%2FQoVmkxb8Fc5aireKSCBcXVak0FNjzlpc%2B4zktJH3f0qxmR1MtcbXlRr%2Bbv2PXcL%2BydoQpVa%2FHKG2mmuGlyrwZoXzmaQlCiVUvLLiuJ6mTBe1JS4I0ckmqk2npkGoa72sPM5aolEnzCzR%2FfOgOjd5QcfEpTJDfI0ehhXW00nezBxXzGkXlsrEeUXgsnYWdVoJwxL%2FVK%2BwNM46TR4Z19GAqJzUEC7H6%2Bpbyc0sAUPnG93wE0gN5OaAv9k7FGXivZWhFjZI2MB4jax01INaNx5Luygrvvdo8ckMPtt7C%2B4AdX3oNTaifenj2%2FEOybSHazC13vbNBjqkATvT8F6mYqLIKyRCYF8u3yIf83h7IXFth0BiOP37c%2BdOjCHCJwlHSSfOvfeVsCAXNi1MRMwTRhj0GXItAm4WlkOrsH1RyadbhEwL0279NtFEg%2BHoXwifPOswfqEvt7V7hU0FJS73zoPCVJ9DmecB88NaZlofSyNCcQzyZvSHiszcocik0yoKQG8h8VUNMxtB%2Bffrbjh%2FkovYkAFFtcGGgjHfKOLO&X-Amz-Signature=5919799996d11411e074e6c96fa31032a5526305dd508d39919f95c2942e65fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBTDOUY%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQD8WPfgY%2FkLWm4yxuM49EpkLb5%2BpeuKK8R6J2XeBKkRawIhAIAXcOToV5sMZYt9H5ujuQiv9bHGFqEIdCcuidgOUl23Kv8DCD4QABoMNjM3NDIzMTgzODA1IgwB2DGdsNfEaiClJPMq3APbOEaA51dQkpeoYvg%2F%2B%2BFG6N4YPQRLevmzhKVs4stoKFD3E96v3WZLdtZ18N94n%2BLScF9a4N71MgudmXh7MCIeQ9OSeLIfZ7e4797Do2vXYPCR1SeXB0k3rdXwMACssNky%2BTUlzar%2BGfCIiRUr9mCePobRCLUL6TbpcD1Yuxo8yFGo3r5tJLN5y8NZMqZ1F3m3DIYOYkfaQKH8sLpbvAiXml1xv63NPw5%2B5%2FMerBHKd8ESbmZVq06%2Be%2BdUaTscBM4cSdlgEIbR0kAaEZJOAEGaNvxRiLR6ZkuNSULy7pjy1sGzTV36A94wt6JDvQV%2FQoVmkxb8Fc5aireKSCBcXVak0FNjzlpc%2B4zktJH3f0qxmR1MtcbXlRr%2Bbv2PXcL%2BydoQpVa%2FHKG2mmuGlyrwZoXzmaQlCiVUvLLiuJ6mTBe1JS4I0ckmqk2npkGoa72sPM5aolEnzCzR%2FfOgOjd5QcfEpTJDfI0ehhXW00nezBxXzGkXlsrEeUXgsnYWdVoJwxL%2FVK%2BwNM46TR4Z19GAqJzUEC7H6%2Bpbyc0sAUPnG93wE0gN5OaAv9k7FGXivZWhFjZI2MB4jax01INaNx5Luygrvvdo8ckMPtt7C%2B4AdX3oNTaifenj2%2FEOybSHazC13vbNBjqkATvT8F6mYqLIKyRCYF8u3yIf83h7IXFth0BiOP37c%2BdOjCHCJwlHSSfOvfeVsCAXNi1MRMwTRhj0GXItAm4WlkOrsH1RyadbhEwL0279NtFEg%2BHoXwifPOswfqEvt7V7hU0FJS73zoPCVJ9DmecB88NaZlofSyNCcQzyZvSHiszcocik0yoKQG8h8VUNMxtB%2Bffrbjh%2FkovYkAFFtcGGgjHfKOLO&X-Amz-Signature=b18ab851616d18f6ed36bd0891c614fbaa25d098deab9e1100402742c0aa143d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


