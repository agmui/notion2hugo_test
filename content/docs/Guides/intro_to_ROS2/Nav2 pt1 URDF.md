---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T23:33:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T23:33:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JTR735R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIC3EmLzr%2FSo6VSIA2h76ucmL59vTmgiwg5DbCRMAOIxXAiBk69lM8NtVlFVOD2rO4ryK2J3rSZ1%2B0up4bbnr7avY1CqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbOYD%2FVe%2FKSo%2BKAiTKtwDmQgeIheaXuNh8Jupz7bVhTNLG7q2xup0I8iCQGErN6S7zeQCs7TecDwLkk33bIPIpSmw5%2Bi5M110BzZRYKF2Hkn5%2BgrMXgiWw174CA1ioKaOQcZ7DDw4waPieH%2FBkzBGOKr91XOM7nV%2Fu9779h5Qc7RpnO%2FhpfGP7N6XqBfgK2QyVdb581vsh%2BtVMBbYXUBvKLKY0SZgte%2FZYKDqI57fycnan9xSp8lNN%2BfGeIOUua1w5EQFGWv%2FimV3pLqvukdmmXocPbuy6LyM%2FrutjiF3LkAFAt%2FM8Isu5A4kt3LQQGpglgwgT5IFmhgEoVcHpZmdv27nK9h%2BchNDl6ArPlRtxt%2BnbTRg86gajDxVNBrHKzXDcvwYs9YjpVBxkeriNM2G5p%2BzWsSCfChfdJ8ywn%2FafwfgjVF%2B6oRjerKGV26QoHgSdf9S73YeCX1V4EtQTXEGe%2F2krwpyMEMJ5bkh5yrUUJRl7Mw7srVojSYpSYUZZgXE42eHpqe3%2FjFDswb1rxnZLH3h0qQibZNgn28Yz4fiLSXnUqRftPzQW8RArBOVh%2BFbEfZ6DA0jAacC%2B%2FOpOs6LCdJRJ3OB7knqr1p2Ba%2BbpxGPAa7iQZaHNgyxsVnEXJWeCGp5KfFSx8hzJCQwm%2BqcxAY6pgFMDfwx1YElP8pX477mkXf9vKbdGeP3BB0yQBZmqaf250L269yBhvpT0Mh4niraiVLNq0f8FGebVmfp%2B7Mo6Oo27EDILc8bXTna34onFAS7ejEnoAIWjXzWrIK57G3ooKXQW8diKesRCGGpouOkRb5WXF7tyVRPhYE8h2IE3cC%2FMDqn%2F9ymOVhgZWimB2325h6fpIB%2BzvZsv%2FPjIDgx%2B8yf46DFkkT5&X-Amz-Signature=bd712759ded7989dd75fb414d126602510707b53dd3c92160b759f4d979b0613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JTR735R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIC3EmLzr%2FSo6VSIA2h76ucmL59vTmgiwg5DbCRMAOIxXAiBk69lM8NtVlFVOD2rO4ryK2J3rSZ1%2B0up4bbnr7avY1CqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbOYD%2FVe%2FKSo%2BKAiTKtwDmQgeIheaXuNh8Jupz7bVhTNLG7q2xup0I8iCQGErN6S7zeQCs7TecDwLkk33bIPIpSmw5%2Bi5M110BzZRYKF2Hkn5%2BgrMXgiWw174CA1ioKaOQcZ7DDw4waPieH%2FBkzBGOKr91XOM7nV%2Fu9779h5Qc7RpnO%2FhpfGP7N6XqBfgK2QyVdb581vsh%2BtVMBbYXUBvKLKY0SZgte%2FZYKDqI57fycnan9xSp8lNN%2BfGeIOUua1w5EQFGWv%2FimV3pLqvukdmmXocPbuy6LyM%2FrutjiF3LkAFAt%2FM8Isu5A4kt3LQQGpglgwgT5IFmhgEoVcHpZmdv27nK9h%2BchNDl6ArPlRtxt%2BnbTRg86gajDxVNBrHKzXDcvwYs9YjpVBxkeriNM2G5p%2BzWsSCfChfdJ8ywn%2FafwfgjVF%2B6oRjerKGV26QoHgSdf9S73YeCX1V4EtQTXEGe%2F2krwpyMEMJ5bkh5yrUUJRl7Mw7srVojSYpSYUZZgXE42eHpqe3%2FjFDswb1rxnZLH3h0qQibZNgn28Yz4fiLSXnUqRftPzQW8RArBOVh%2BFbEfZ6DA0jAacC%2B%2FOpOs6LCdJRJ3OB7knqr1p2Ba%2BbpxGPAa7iQZaHNgyxsVnEXJWeCGp5KfFSx8hzJCQwm%2BqcxAY6pgFMDfwx1YElP8pX477mkXf9vKbdGeP3BB0yQBZmqaf250L269yBhvpT0Mh4niraiVLNq0f8FGebVmfp%2B7Mo6Oo27EDILc8bXTna34onFAS7ejEnoAIWjXzWrIK57G3ooKXQW8diKesRCGGpouOkRb5WXF7tyVRPhYE8h2IE3cC%2FMDqn%2F9ymOVhgZWimB2325h6fpIB%2BzvZsv%2FPjIDgx%2B8yf46DFkkT5&X-Amz-Signature=70e6c93fb1499bcf11c5ba51e4ca6ba93f442e6bdd17fa81c5dd2d1869856d2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JTR735R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIC3EmLzr%2FSo6VSIA2h76ucmL59vTmgiwg5DbCRMAOIxXAiBk69lM8NtVlFVOD2rO4ryK2J3rSZ1%2B0up4bbnr7avY1CqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbOYD%2FVe%2FKSo%2BKAiTKtwDmQgeIheaXuNh8Jupz7bVhTNLG7q2xup0I8iCQGErN6S7zeQCs7TecDwLkk33bIPIpSmw5%2Bi5M110BzZRYKF2Hkn5%2BgrMXgiWw174CA1ioKaOQcZ7DDw4waPieH%2FBkzBGOKr91XOM7nV%2Fu9779h5Qc7RpnO%2FhpfGP7N6XqBfgK2QyVdb581vsh%2BtVMBbYXUBvKLKY0SZgte%2FZYKDqI57fycnan9xSp8lNN%2BfGeIOUua1w5EQFGWv%2FimV3pLqvukdmmXocPbuy6LyM%2FrutjiF3LkAFAt%2FM8Isu5A4kt3LQQGpglgwgT5IFmhgEoVcHpZmdv27nK9h%2BchNDl6ArPlRtxt%2BnbTRg86gajDxVNBrHKzXDcvwYs9YjpVBxkeriNM2G5p%2BzWsSCfChfdJ8ywn%2FafwfgjVF%2B6oRjerKGV26QoHgSdf9S73YeCX1V4EtQTXEGe%2F2krwpyMEMJ5bkh5yrUUJRl7Mw7srVojSYpSYUZZgXE42eHpqe3%2FjFDswb1rxnZLH3h0qQibZNgn28Yz4fiLSXnUqRftPzQW8RArBOVh%2BFbEfZ6DA0jAacC%2B%2FOpOs6LCdJRJ3OB7knqr1p2Ba%2BbpxGPAa7iQZaHNgyxsVnEXJWeCGp5KfFSx8hzJCQwm%2BqcxAY6pgFMDfwx1YElP8pX477mkXf9vKbdGeP3BB0yQBZmqaf250L269yBhvpT0Mh4niraiVLNq0f8FGebVmfp%2B7Mo6Oo27EDILc8bXTna34onFAS7ejEnoAIWjXzWrIK57G3ooKXQW8diKesRCGGpouOkRb5WXF7tyVRPhYE8h2IE3cC%2FMDqn%2F9ymOVhgZWimB2325h6fpIB%2BzvZsv%2FPjIDgx%2B8yf46DFkkT5&X-Amz-Signature=38a1960daaca0c838039bb44f0d7ce2c125d70e215b340cfeffae59cf46dada3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JTR735R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIC3EmLzr%2FSo6VSIA2h76ucmL59vTmgiwg5DbCRMAOIxXAiBk69lM8NtVlFVOD2rO4ryK2J3rSZ1%2B0up4bbnr7avY1CqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbOYD%2FVe%2FKSo%2BKAiTKtwDmQgeIheaXuNh8Jupz7bVhTNLG7q2xup0I8iCQGErN6S7zeQCs7TecDwLkk33bIPIpSmw5%2Bi5M110BzZRYKF2Hkn5%2BgrMXgiWw174CA1ioKaOQcZ7DDw4waPieH%2FBkzBGOKr91XOM7nV%2Fu9779h5Qc7RpnO%2FhpfGP7N6XqBfgK2QyVdb581vsh%2BtVMBbYXUBvKLKY0SZgte%2FZYKDqI57fycnan9xSp8lNN%2BfGeIOUua1w5EQFGWv%2FimV3pLqvukdmmXocPbuy6LyM%2FrutjiF3LkAFAt%2FM8Isu5A4kt3LQQGpglgwgT5IFmhgEoVcHpZmdv27nK9h%2BchNDl6ArPlRtxt%2BnbTRg86gajDxVNBrHKzXDcvwYs9YjpVBxkeriNM2G5p%2BzWsSCfChfdJ8ywn%2FafwfgjVF%2B6oRjerKGV26QoHgSdf9S73YeCX1V4EtQTXEGe%2F2krwpyMEMJ5bkh5yrUUJRl7Mw7srVojSYpSYUZZgXE42eHpqe3%2FjFDswb1rxnZLH3h0qQibZNgn28Yz4fiLSXnUqRftPzQW8RArBOVh%2BFbEfZ6DA0jAacC%2B%2FOpOs6LCdJRJ3OB7knqr1p2Ba%2BbpxGPAa7iQZaHNgyxsVnEXJWeCGp5KfFSx8hzJCQwm%2BqcxAY6pgFMDfwx1YElP8pX477mkXf9vKbdGeP3BB0yQBZmqaf250L269yBhvpT0Mh4niraiVLNq0f8FGebVmfp%2B7Mo6Oo27EDILc8bXTna34onFAS7ejEnoAIWjXzWrIK57G3ooKXQW8diKesRCGGpouOkRb5WXF7tyVRPhYE8h2IE3cC%2FMDqn%2F9ymOVhgZWimB2325h6fpIB%2BzvZsv%2FPjIDgx%2B8yf46DFkkT5&X-Amz-Signature=d0bf2ce7521c5f68ed445ff0c40e2cab8ca67232f81ec9079f162da508bbd4e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JTR735R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIC3EmLzr%2FSo6VSIA2h76ucmL59vTmgiwg5DbCRMAOIxXAiBk69lM8NtVlFVOD2rO4ryK2J3rSZ1%2B0up4bbnr7avY1CqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbOYD%2FVe%2FKSo%2BKAiTKtwDmQgeIheaXuNh8Jupz7bVhTNLG7q2xup0I8iCQGErN6S7zeQCs7TecDwLkk33bIPIpSmw5%2Bi5M110BzZRYKF2Hkn5%2BgrMXgiWw174CA1ioKaOQcZ7DDw4waPieH%2FBkzBGOKr91XOM7nV%2Fu9779h5Qc7RpnO%2FhpfGP7N6XqBfgK2QyVdb581vsh%2BtVMBbYXUBvKLKY0SZgte%2FZYKDqI57fycnan9xSp8lNN%2BfGeIOUua1w5EQFGWv%2FimV3pLqvukdmmXocPbuy6LyM%2FrutjiF3LkAFAt%2FM8Isu5A4kt3LQQGpglgwgT5IFmhgEoVcHpZmdv27nK9h%2BchNDl6ArPlRtxt%2BnbTRg86gajDxVNBrHKzXDcvwYs9YjpVBxkeriNM2G5p%2BzWsSCfChfdJ8ywn%2FafwfgjVF%2B6oRjerKGV26QoHgSdf9S73YeCX1V4EtQTXEGe%2F2krwpyMEMJ5bkh5yrUUJRl7Mw7srVojSYpSYUZZgXE42eHpqe3%2FjFDswb1rxnZLH3h0qQibZNgn28Yz4fiLSXnUqRftPzQW8RArBOVh%2BFbEfZ6DA0jAacC%2B%2FOpOs6LCdJRJ3OB7knqr1p2Ba%2BbpxGPAa7iQZaHNgyxsVnEXJWeCGp5KfFSx8hzJCQwm%2BqcxAY6pgFMDfwx1YElP8pX477mkXf9vKbdGeP3BB0yQBZmqaf250L269yBhvpT0Mh4niraiVLNq0f8FGebVmfp%2B7Mo6Oo27EDILc8bXTna34onFAS7ejEnoAIWjXzWrIK57G3ooKXQW8diKesRCGGpouOkRb5WXF7tyVRPhYE8h2IE3cC%2FMDqn%2F9ymOVhgZWimB2325h6fpIB%2BzvZsv%2FPjIDgx%2B8yf46DFkkT5&X-Amz-Signature=57a31ae39c790aa5d11892d5ca08f7f4807d6839484f1888e3d400b8071f1697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JTR735R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIC3EmLzr%2FSo6VSIA2h76ucmL59vTmgiwg5DbCRMAOIxXAiBk69lM8NtVlFVOD2rO4ryK2J3rSZ1%2B0up4bbnr7avY1CqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbOYD%2FVe%2FKSo%2BKAiTKtwDmQgeIheaXuNh8Jupz7bVhTNLG7q2xup0I8iCQGErN6S7zeQCs7TecDwLkk33bIPIpSmw5%2Bi5M110BzZRYKF2Hkn5%2BgrMXgiWw174CA1ioKaOQcZ7DDw4waPieH%2FBkzBGOKr91XOM7nV%2Fu9779h5Qc7RpnO%2FhpfGP7N6XqBfgK2QyVdb581vsh%2BtVMBbYXUBvKLKY0SZgte%2FZYKDqI57fycnan9xSp8lNN%2BfGeIOUua1w5EQFGWv%2FimV3pLqvukdmmXocPbuy6LyM%2FrutjiF3LkAFAt%2FM8Isu5A4kt3LQQGpglgwgT5IFmhgEoVcHpZmdv27nK9h%2BchNDl6ArPlRtxt%2BnbTRg86gajDxVNBrHKzXDcvwYs9YjpVBxkeriNM2G5p%2BzWsSCfChfdJ8ywn%2FafwfgjVF%2B6oRjerKGV26QoHgSdf9S73YeCX1V4EtQTXEGe%2F2krwpyMEMJ5bkh5yrUUJRl7Mw7srVojSYpSYUZZgXE42eHpqe3%2FjFDswb1rxnZLH3h0qQibZNgn28Yz4fiLSXnUqRftPzQW8RArBOVh%2BFbEfZ6DA0jAacC%2B%2FOpOs6LCdJRJ3OB7knqr1p2Ba%2BbpxGPAa7iQZaHNgyxsVnEXJWeCGp5KfFSx8hzJCQwm%2BqcxAY6pgFMDfwx1YElP8pX477mkXf9vKbdGeP3BB0yQBZmqaf250L269yBhvpT0Mh4niraiVLNq0f8FGebVmfp%2B7Mo6Oo27EDILc8bXTna34onFAS7ejEnoAIWjXzWrIK57G3ooKXQW8diKesRCGGpouOkRb5WXF7tyVRPhYE8h2IE3cC%2FMDqn%2F9ymOVhgZWimB2325h6fpIB%2BzvZsv%2FPjIDgx%2B8yf46DFkkT5&X-Amz-Signature=ab13ff8a0ced9f15a069a19360930a5b48a13dc2c49e3b0b78081eb71104648c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JTR735R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIC3EmLzr%2FSo6VSIA2h76ucmL59vTmgiwg5DbCRMAOIxXAiBk69lM8NtVlFVOD2rO4ryK2J3rSZ1%2B0up4bbnr7avY1CqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbOYD%2FVe%2FKSo%2BKAiTKtwDmQgeIheaXuNh8Jupz7bVhTNLG7q2xup0I8iCQGErN6S7zeQCs7TecDwLkk33bIPIpSmw5%2Bi5M110BzZRYKF2Hkn5%2BgrMXgiWw174CA1ioKaOQcZ7DDw4waPieH%2FBkzBGOKr91XOM7nV%2Fu9779h5Qc7RpnO%2FhpfGP7N6XqBfgK2QyVdb581vsh%2BtVMBbYXUBvKLKY0SZgte%2FZYKDqI57fycnan9xSp8lNN%2BfGeIOUua1w5EQFGWv%2FimV3pLqvukdmmXocPbuy6LyM%2FrutjiF3LkAFAt%2FM8Isu5A4kt3LQQGpglgwgT5IFmhgEoVcHpZmdv27nK9h%2BchNDl6ArPlRtxt%2BnbTRg86gajDxVNBrHKzXDcvwYs9YjpVBxkeriNM2G5p%2BzWsSCfChfdJ8ywn%2FafwfgjVF%2B6oRjerKGV26QoHgSdf9S73YeCX1V4EtQTXEGe%2F2krwpyMEMJ5bkh5yrUUJRl7Mw7srVojSYpSYUZZgXE42eHpqe3%2FjFDswb1rxnZLH3h0qQibZNgn28Yz4fiLSXnUqRftPzQW8RArBOVh%2BFbEfZ6DA0jAacC%2B%2FOpOs6LCdJRJ3OB7knqr1p2Ba%2BbpxGPAa7iQZaHNgyxsVnEXJWeCGp5KfFSx8hzJCQwm%2BqcxAY6pgFMDfwx1YElP8pX477mkXf9vKbdGeP3BB0yQBZmqaf250L269yBhvpT0Mh4niraiVLNq0f8FGebVmfp%2B7Mo6Oo27EDILc8bXTna34onFAS7ejEnoAIWjXzWrIK57G3ooKXQW8diKesRCGGpouOkRb5WXF7tyVRPhYE8h2IE3cC%2FMDqn%2F9ymOVhgZWimB2325h6fpIB%2BzvZsv%2FPjIDgx%2B8yf46DFkkT5&X-Amz-Signature=d0a5bea38c0b1fc0c77450cbee67253b4e0512d53d5e7afd944f2e286175307c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JTR735R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIC3EmLzr%2FSo6VSIA2h76ucmL59vTmgiwg5DbCRMAOIxXAiBk69lM8NtVlFVOD2rO4ryK2J3rSZ1%2B0up4bbnr7avY1CqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbOYD%2FVe%2FKSo%2BKAiTKtwDmQgeIheaXuNh8Jupz7bVhTNLG7q2xup0I8iCQGErN6S7zeQCs7TecDwLkk33bIPIpSmw5%2Bi5M110BzZRYKF2Hkn5%2BgrMXgiWw174CA1ioKaOQcZ7DDw4waPieH%2FBkzBGOKr91XOM7nV%2Fu9779h5Qc7RpnO%2FhpfGP7N6XqBfgK2QyVdb581vsh%2BtVMBbYXUBvKLKY0SZgte%2FZYKDqI57fycnan9xSp8lNN%2BfGeIOUua1w5EQFGWv%2FimV3pLqvukdmmXocPbuy6LyM%2FrutjiF3LkAFAt%2FM8Isu5A4kt3LQQGpglgwgT5IFmhgEoVcHpZmdv27nK9h%2BchNDl6ArPlRtxt%2BnbTRg86gajDxVNBrHKzXDcvwYs9YjpVBxkeriNM2G5p%2BzWsSCfChfdJ8ywn%2FafwfgjVF%2B6oRjerKGV26QoHgSdf9S73YeCX1V4EtQTXEGe%2F2krwpyMEMJ5bkh5yrUUJRl7Mw7srVojSYpSYUZZgXE42eHpqe3%2FjFDswb1rxnZLH3h0qQibZNgn28Yz4fiLSXnUqRftPzQW8RArBOVh%2BFbEfZ6DA0jAacC%2B%2FOpOs6LCdJRJ3OB7knqr1p2Ba%2BbpxGPAa7iQZaHNgyxsVnEXJWeCGp5KfFSx8hzJCQwm%2BqcxAY6pgFMDfwx1YElP8pX477mkXf9vKbdGeP3BB0yQBZmqaf250L269yBhvpT0Mh4niraiVLNq0f8FGebVmfp%2B7Mo6Oo27EDILc8bXTna34onFAS7ejEnoAIWjXzWrIK57G3ooKXQW8diKesRCGGpouOkRb5WXF7tyVRPhYE8h2IE3cC%2FMDqn%2F9ymOVhgZWimB2325h6fpIB%2BzvZsv%2FPjIDgx%2B8yf46DFkkT5&X-Amz-Signature=d6e04696a2f016b90df2adb75a81d744a90529934fc3d7dde34695cc5515ef42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JTR735R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIC3EmLzr%2FSo6VSIA2h76ucmL59vTmgiwg5DbCRMAOIxXAiBk69lM8NtVlFVOD2rO4ryK2J3rSZ1%2B0up4bbnr7avY1CqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbOYD%2FVe%2FKSo%2BKAiTKtwDmQgeIheaXuNh8Jupz7bVhTNLG7q2xup0I8iCQGErN6S7zeQCs7TecDwLkk33bIPIpSmw5%2Bi5M110BzZRYKF2Hkn5%2BgrMXgiWw174CA1ioKaOQcZ7DDw4waPieH%2FBkzBGOKr91XOM7nV%2Fu9779h5Qc7RpnO%2FhpfGP7N6XqBfgK2QyVdb581vsh%2BtVMBbYXUBvKLKY0SZgte%2FZYKDqI57fycnan9xSp8lNN%2BfGeIOUua1w5EQFGWv%2FimV3pLqvukdmmXocPbuy6LyM%2FrutjiF3LkAFAt%2FM8Isu5A4kt3LQQGpglgwgT5IFmhgEoVcHpZmdv27nK9h%2BchNDl6ArPlRtxt%2BnbTRg86gajDxVNBrHKzXDcvwYs9YjpVBxkeriNM2G5p%2BzWsSCfChfdJ8ywn%2FafwfgjVF%2B6oRjerKGV26QoHgSdf9S73YeCX1V4EtQTXEGe%2F2krwpyMEMJ5bkh5yrUUJRl7Mw7srVojSYpSYUZZgXE42eHpqe3%2FjFDswb1rxnZLH3h0qQibZNgn28Yz4fiLSXnUqRftPzQW8RArBOVh%2BFbEfZ6DA0jAacC%2B%2FOpOs6LCdJRJ3OB7knqr1p2Ba%2BbpxGPAa7iQZaHNgyxsVnEXJWeCGp5KfFSx8hzJCQwm%2BqcxAY6pgFMDfwx1YElP8pX477mkXf9vKbdGeP3BB0yQBZmqaf250L269yBhvpT0Mh4niraiVLNq0f8FGebVmfp%2B7Mo6Oo27EDILc8bXTna34onFAS7ejEnoAIWjXzWrIK57G3ooKXQW8diKesRCGGpouOkRb5WXF7tyVRPhYE8h2IE3cC%2FMDqn%2F9ymOVhgZWimB2325h6fpIB%2BzvZsv%2FPjIDgx%2B8yf46DFkkT5&X-Amz-Signature=96ab1582afcf62a1bb8bc58f17386a99a0419c9c4a92f472ff47b2b0f8e348f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JTR735R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIC3EmLzr%2FSo6VSIA2h76ucmL59vTmgiwg5DbCRMAOIxXAiBk69lM8NtVlFVOD2rO4ryK2J3rSZ1%2B0up4bbnr7avY1CqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbOYD%2FVe%2FKSo%2BKAiTKtwDmQgeIheaXuNh8Jupz7bVhTNLG7q2xup0I8iCQGErN6S7zeQCs7TecDwLkk33bIPIpSmw5%2Bi5M110BzZRYKF2Hkn5%2BgrMXgiWw174CA1ioKaOQcZ7DDw4waPieH%2FBkzBGOKr91XOM7nV%2Fu9779h5Qc7RpnO%2FhpfGP7N6XqBfgK2QyVdb581vsh%2BtVMBbYXUBvKLKY0SZgte%2FZYKDqI57fycnan9xSp8lNN%2BfGeIOUua1w5EQFGWv%2FimV3pLqvukdmmXocPbuy6LyM%2FrutjiF3LkAFAt%2FM8Isu5A4kt3LQQGpglgwgT5IFmhgEoVcHpZmdv27nK9h%2BchNDl6ArPlRtxt%2BnbTRg86gajDxVNBrHKzXDcvwYs9YjpVBxkeriNM2G5p%2BzWsSCfChfdJ8ywn%2FafwfgjVF%2B6oRjerKGV26QoHgSdf9S73YeCX1V4EtQTXEGe%2F2krwpyMEMJ5bkh5yrUUJRl7Mw7srVojSYpSYUZZgXE42eHpqe3%2FjFDswb1rxnZLH3h0qQibZNgn28Yz4fiLSXnUqRftPzQW8RArBOVh%2BFbEfZ6DA0jAacC%2B%2FOpOs6LCdJRJ3OB7knqr1p2Ba%2BbpxGPAa7iQZaHNgyxsVnEXJWeCGp5KfFSx8hzJCQwm%2BqcxAY6pgFMDfwx1YElP8pX477mkXf9vKbdGeP3BB0yQBZmqaf250L269yBhvpT0Mh4niraiVLNq0f8FGebVmfp%2B7Mo6Oo27EDILc8bXTna34onFAS7ejEnoAIWjXzWrIK57G3ooKXQW8diKesRCGGpouOkRb5WXF7tyVRPhYE8h2IE3cC%2FMDqn%2F9ymOVhgZWimB2325h6fpIB%2BzvZsv%2FPjIDgx%2B8yf46DFkkT5&X-Amz-Signature=ed824866d444cd8f0ff914c2ef5ed037caea344d4bb2dc4dcf29fe476098f8b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

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
      
      <collision>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
      </collision>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JTR735R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIC3EmLzr%2FSo6VSIA2h76ucmL59vTmgiwg5DbCRMAOIxXAiBk69lM8NtVlFVOD2rO4ryK2J3rSZ1%2B0up4bbnr7avY1CqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbOYD%2FVe%2FKSo%2BKAiTKtwDmQgeIheaXuNh8Jupz7bVhTNLG7q2xup0I8iCQGErN6S7zeQCs7TecDwLkk33bIPIpSmw5%2Bi5M110BzZRYKF2Hkn5%2BgrMXgiWw174CA1ioKaOQcZ7DDw4waPieH%2FBkzBGOKr91XOM7nV%2Fu9779h5Qc7RpnO%2FhpfGP7N6XqBfgK2QyVdb581vsh%2BtVMBbYXUBvKLKY0SZgte%2FZYKDqI57fycnan9xSp8lNN%2BfGeIOUua1w5EQFGWv%2FimV3pLqvukdmmXocPbuy6LyM%2FrutjiF3LkAFAt%2FM8Isu5A4kt3LQQGpglgwgT5IFmhgEoVcHpZmdv27nK9h%2BchNDl6ArPlRtxt%2BnbTRg86gajDxVNBrHKzXDcvwYs9YjpVBxkeriNM2G5p%2BzWsSCfChfdJ8ywn%2FafwfgjVF%2B6oRjerKGV26QoHgSdf9S73YeCX1V4EtQTXEGe%2F2krwpyMEMJ5bkh5yrUUJRl7Mw7srVojSYpSYUZZgXE42eHpqe3%2FjFDswb1rxnZLH3h0qQibZNgn28Yz4fiLSXnUqRftPzQW8RArBOVh%2BFbEfZ6DA0jAacC%2B%2FOpOs6LCdJRJ3OB7knqr1p2Ba%2BbpxGPAa7iQZaHNgyxsVnEXJWeCGp5KfFSx8hzJCQwm%2BqcxAY6pgFMDfwx1YElP8pX477mkXf9vKbdGeP3BB0yQBZmqaf250L269yBhvpT0Mh4niraiVLNq0f8FGebVmfp%2B7Mo6Oo27EDILc8bXTna34onFAS7ejEnoAIWjXzWrIK57G3ooKXQW8diKesRCGGpouOkRb5WXF7tyVRPhYE8h2IE3cC%2FMDqn%2F9ymOVhgZWimB2325h6fpIB%2BzvZsv%2FPjIDgx%2B8yf46DFkkT5&X-Amz-Signature=97d835f4368265abaf3034f09254f0afb58413ec34511d9c4f261f97fc57833e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JTR735R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIC3EmLzr%2FSo6VSIA2h76ucmL59vTmgiwg5DbCRMAOIxXAiBk69lM8NtVlFVOD2rO4ryK2J3rSZ1%2B0up4bbnr7avY1CqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbOYD%2FVe%2FKSo%2BKAiTKtwDmQgeIheaXuNh8Jupz7bVhTNLG7q2xup0I8iCQGErN6S7zeQCs7TecDwLkk33bIPIpSmw5%2Bi5M110BzZRYKF2Hkn5%2BgrMXgiWw174CA1ioKaOQcZ7DDw4waPieH%2FBkzBGOKr91XOM7nV%2Fu9779h5Qc7RpnO%2FhpfGP7N6XqBfgK2QyVdb581vsh%2BtVMBbYXUBvKLKY0SZgte%2FZYKDqI57fycnan9xSp8lNN%2BfGeIOUua1w5EQFGWv%2FimV3pLqvukdmmXocPbuy6LyM%2FrutjiF3LkAFAt%2FM8Isu5A4kt3LQQGpglgwgT5IFmhgEoVcHpZmdv27nK9h%2BchNDl6ArPlRtxt%2BnbTRg86gajDxVNBrHKzXDcvwYs9YjpVBxkeriNM2G5p%2BzWsSCfChfdJ8ywn%2FafwfgjVF%2B6oRjerKGV26QoHgSdf9S73YeCX1V4EtQTXEGe%2F2krwpyMEMJ5bkh5yrUUJRl7Mw7srVojSYpSYUZZgXE42eHpqe3%2FjFDswb1rxnZLH3h0qQibZNgn28Yz4fiLSXnUqRftPzQW8RArBOVh%2BFbEfZ6DA0jAacC%2B%2FOpOs6LCdJRJ3OB7knqr1p2Ba%2BbpxGPAa7iQZaHNgyxsVnEXJWeCGp5KfFSx8hzJCQwm%2BqcxAY6pgFMDfwx1YElP8pX477mkXf9vKbdGeP3BB0yQBZmqaf250L269yBhvpT0Mh4niraiVLNq0f8FGebVmfp%2B7Mo6Oo27EDILc8bXTna34onFAS7ejEnoAIWjXzWrIK57G3ooKXQW8diKesRCGGpouOkRb5WXF7tyVRPhYE8h2IE3cC%2FMDqn%2F9ymOVhgZWimB2325h6fpIB%2BzvZsv%2FPjIDgx%2B8yf46DFkkT5&X-Amz-Signature=05de3fb8c1ced3686435458313e0e7e4cde925ea5e0ebb97d5ce345c440117de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JTR735R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIC3EmLzr%2FSo6VSIA2h76ucmL59vTmgiwg5DbCRMAOIxXAiBk69lM8NtVlFVOD2rO4ryK2J3rSZ1%2B0up4bbnr7avY1CqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbOYD%2FVe%2FKSo%2BKAiTKtwDmQgeIheaXuNh8Jupz7bVhTNLG7q2xup0I8iCQGErN6S7zeQCs7TecDwLkk33bIPIpSmw5%2Bi5M110BzZRYKF2Hkn5%2BgrMXgiWw174CA1ioKaOQcZ7DDw4waPieH%2FBkzBGOKr91XOM7nV%2Fu9779h5Qc7RpnO%2FhpfGP7N6XqBfgK2QyVdb581vsh%2BtVMBbYXUBvKLKY0SZgte%2FZYKDqI57fycnan9xSp8lNN%2BfGeIOUua1w5EQFGWv%2FimV3pLqvukdmmXocPbuy6LyM%2FrutjiF3LkAFAt%2FM8Isu5A4kt3LQQGpglgwgT5IFmhgEoVcHpZmdv27nK9h%2BchNDl6ArPlRtxt%2BnbTRg86gajDxVNBrHKzXDcvwYs9YjpVBxkeriNM2G5p%2BzWsSCfChfdJ8ywn%2FafwfgjVF%2B6oRjerKGV26QoHgSdf9S73YeCX1V4EtQTXEGe%2F2krwpyMEMJ5bkh5yrUUJRl7Mw7srVojSYpSYUZZgXE42eHpqe3%2FjFDswb1rxnZLH3h0qQibZNgn28Yz4fiLSXnUqRftPzQW8RArBOVh%2BFbEfZ6DA0jAacC%2B%2FOpOs6LCdJRJ3OB7knqr1p2Ba%2BbpxGPAa7iQZaHNgyxsVnEXJWeCGp5KfFSx8hzJCQwm%2BqcxAY6pgFMDfwx1YElP8pX477mkXf9vKbdGeP3BB0yQBZmqaf250L269yBhvpT0Mh4niraiVLNq0f8FGebVmfp%2B7Mo6Oo27EDILc8bXTna34onFAS7ejEnoAIWjXzWrIK57G3ooKXQW8diKesRCGGpouOkRb5WXF7tyVRPhYE8h2IE3cC%2FMDqn%2F9ymOVhgZWimB2325h6fpIB%2BzvZsv%2FPjIDgx%2B8yf46DFkkT5&X-Amz-Signature=47dcefe8eee4758d33194461076c4b03ac93eb150d0ac5909a73eab8d359171a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JTR735R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIC3EmLzr%2FSo6VSIA2h76ucmL59vTmgiwg5DbCRMAOIxXAiBk69lM8NtVlFVOD2rO4ryK2J3rSZ1%2B0up4bbnr7avY1CqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbOYD%2FVe%2FKSo%2BKAiTKtwDmQgeIheaXuNh8Jupz7bVhTNLG7q2xup0I8iCQGErN6S7zeQCs7TecDwLkk33bIPIpSmw5%2Bi5M110BzZRYKF2Hkn5%2BgrMXgiWw174CA1ioKaOQcZ7DDw4waPieH%2FBkzBGOKr91XOM7nV%2Fu9779h5Qc7RpnO%2FhpfGP7N6XqBfgK2QyVdb581vsh%2BtVMBbYXUBvKLKY0SZgte%2FZYKDqI57fycnan9xSp8lNN%2BfGeIOUua1w5EQFGWv%2FimV3pLqvukdmmXocPbuy6LyM%2FrutjiF3LkAFAt%2FM8Isu5A4kt3LQQGpglgwgT5IFmhgEoVcHpZmdv27nK9h%2BchNDl6ArPlRtxt%2BnbTRg86gajDxVNBrHKzXDcvwYs9YjpVBxkeriNM2G5p%2BzWsSCfChfdJ8ywn%2FafwfgjVF%2B6oRjerKGV26QoHgSdf9S73YeCX1V4EtQTXEGe%2F2krwpyMEMJ5bkh5yrUUJRl7Mw7srVojSYpSYUZZgXE42eHpqe3%2FjFDswb1rxnZLH3h0qQibZNgn28Yz4fiLSXnUqRftPzQW8RArBOVh%2BFbEfZ6DA0jAacC%2B%2FOpOs6LCdJRJ3OB7knqr1p2Ba%2BbpxGPAa7iQZaHNgyxsVnEXJWeCGp5KfFSx8hzJCQwm%2BqcxAY6pgFMDfwx1YElP8pX477mkXf9vKbdGeP3BB0yQBZmqaf250L269yBhvpT0Mh4niraiVLNq0f8FGebVmfp%2B7Mo6Oo27EDILc8bXTna34onFAS7ejEnoAIWjXzWrIK57G3ooKXQW8diKesRCGGpouOkRb5WXF7tyVRPhYE8h2IE3cC%2FMDqn%2F9ymOVhgZWimB2325h6fpIB%2BzvZsv%2FPjIDgx%2B8yf46DFkkT5&X-Amz-Signature=cdd1a59d437418e4983c8e1c3b260e4e65557b373bfea3e065b800e581a2d259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6LDL755%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIC%2FcUOkdp6ZO9tjATSmK6Yrvnx90qiX5abgOSdYo%2BMmcAiBuYSXYJ4dEEL75pQ3fhnLPsai%2FZkhgAQcnJOnv6egA5SqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5E06zu8lbkT%2FZHN9KtwDvL%2BJxcKeWno443Pc3q91h2k7O4t0TiqhlPQD5ODSWqCh%2Fdxdsb5cKh%2BsPBj1GN2JRH9WX%2BEd9mlBp%2FwW3l8P0vAMAxV084duixkFRTX40GBzYlTxFcbpZImx0kgAz8Qbo%2FRJCkOBSDYwPEWQPciGKa%2FqH9tX5ybc8S%2BQAJPLSFbJpAaM7EVDiWxfIevKprRb0fZRCxzLLF2pjF3n%2B55L71IFt02RF2SZ9sQ%2BfwQJgYlYTxFRa6GpFNrHZ6UJmDGtph2pjetDd4ooWEHW8tYch2aT%2BvrMEGcDMJH9pXkw4GUPI%2FkDaewM47XDh%2F2HWlqbqveo0sUhwmw05JZuitiCactya4GJn8fBzXeBUMFj%2B6ye2%2FDUZJwUViuDGTeLKGxNzxRDFgaHt0hB864h%2FacLqfmod7fZoIHCfazDzXxzKtowNy9o0mf4SORIshbzWtZkHPGyPelLCD3p%2BomyrJGe%2FGC6gH79aKNRkiKBZ8HfPM8ZVgibXaMSZSIcLwqOflMeCRmNpuqysKwcsdh6r9D%2FquBe1VD4ZDr%2BvPfp5jyZCkrjn30iik2YfRU%2B6dmg04gIyxWSDeMeXZIlhKHNQGuKyCg%2FcH3pLecaY6%2BsaAoBoJDS%2BZyanwzHY%2F2sYHUwluqcxAY6pgFLnlx2Yw81qsia7QeHQN%2B6jaS1VqCZXeAW4mUA%2FRLMD6DU%2FC%2B32CVu9%2BzWN9F5jmkG3MDRq2eTBVCfYSemQAzlPn8bDT%2B9OVMVog2m8dM5%2BoCPzdq2Rn7GSWQTH%2FLETpY%2FEYWwsR7dqJjMUR9g39sqPnIhgbMRCRUCoJoS60Ir1mg9xrhv7utNypDjxqNz%2B40YOINbVvPUUYFczr%2B4o44QyPzfQ4we&X-Amz-Signature=47867ea5d2ec7747fa5e1075216346afeed4b9b21c7635f532fc38c5add4fb8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6LDL755%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIC%2FcUOkdp6ZO9tjATSmK6Yrvnx90qiX5abgOSdYo%2BMmcAiBuYSXYJ4dEEL75pQ3fhnLPsai%2FZkhgAQcnJOnv6egA5SqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5E06zu8lbkT%2FZHN9KtwDvL%2BJxcKeWno443Pc3q91h2k7O4t0TiqhlPQD5ODSWqCh%2Fdxdsb5cKh%2BsPBj1GN2JRH9WX%2BEd9mlBp%2FwW3l8P0vAMAxV084duixkFRTX40GBzYlTxFcbpZImx0kgAz8Qbo%2FRJCkOBSDYwPEWQPciGKa%2FqH9tX5ybc8S%2BQAJPLSFbJpAaM7EVDiWxfIevKprRb0fZRCxzLLF2pjF3n%2B55L71IFt02RF2SZ9sQ%2BfwQJgYlYTxFRa6GpFNrHZ6UJmDGtph2pjetDd4ooWEHW8tYch2aT%2BvrMEGcDMJH9pXkw4GUPI%2FkDaewM47XDh%2F2HWlqbqveo0sUhwmw05JZuitiCactya4GJn8fBzXeBUMFj%2B6ye2%2FDUZJwUViuDGTeLKGxNzxRDFgaHt0hB864h%2FacLqfmod7fZoIHCfazDzXxzKtowNy9o0mf4SORIshbzWtZkHPGyPelLCD3p%2BomyrJGe%2FGC6gH79aKNRkiKBZ8HfPM8ZVgibXaMSZSIcLwqOflMeCRmNpuqysKwcsdh6r9D%2FquBe1VD4ZDr%2BvPfp5jyZCkrjn30iik2YfRU%2B6dmg04gIyxWSDeMeXZIlhKHNQGuKyCg%2FcH3pLecaY6%2BsaAoBoJDS%2BZyanwzHY%2F2sYHUwluqcxAY6pgFLnlx2Yw81qsia7QeHQN%2B6jaS1VqCZXeAW4mUA%2FRLMD6DU%2FC%2B32CVu9%2BzWN9F5jmkG3MDRq2eTBVCfYSemQAzlPn8bDT%2B9OVMVog2m8dM5%2BoCPzdq2Rn7GSWQTH%2FLETpY%2FEYWwsR7dqJjMUR9g39sqPnIhgbMRCRUCoJoS60Ir1mg9xrhv7utNypDjxqNz%2B40YOINbVvPUUYFczr%2B4o44QyPzfQ4we&X-Amz-Signature=c9018f5521dc8e68c593eb3f877e0edd41d38b4f59fc10e8782d01afdac6b702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6LDL755%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIC%2FcUOkdp6ZO9tjATSmK6Yrvnx90qiX5abgOSdYo%2BMmcAiBuYSXYJ4dEEL75pQ3fhnLPsai%2FZkhgAQcnJOnv6egA5SqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5E06zu8lbkT%2FZHN9KtwDvL%2BJxcKeWno443Pc3q91h2k7O4t0TiqhlPQD5ODSWqCh%2Fdxdsb5cKh%2BsPBj1GN2JRH9WX%2BEd9mlBp%2FwW3l8P0vAMAxV084duixkFRTX40GBzYlTxFcbpZImx0kgAz8Qbo%2FRJCkOBSDYwPEWQPciGKa%2FqH9tX5ybc8S%2BQAJPLSFbJpAaM7EVDiWxfIevKprRb0fZRCxzLLF2pjF3n%2B55L71IFt02RF2SZ9sQ%2BfwQJgYlYTxFRa6GpFNrHZ6UJmDGtph2pjetDd4ooWEHW8tYch2aT%2BvrMEGcDMJH9pXkw4GUPI%2FkDaewM47XDh%2F2HWlqbqveo0sUhwmw05JZuitiCactya4GJn8fBzXeBUMFj%2B6ye2%2FDUZJwUViuDGTeLKGxNzxRDFgaHt0hB864h%2FacLqfmod7fZoIHCfazDzXxzKtowNy9o0mf4SORIshbzWtZkHPGyPelLCD3p%2BomyrJGe%2FGC6gH79aKNRkiKBZ8HfPM8ZVgibXaMSZSIcLwqOflMeCRmNpuqysKwcsdh6r9D%2FquBe1VD4ZDr%2BvPfp5jyZCkrjn30iik2YfRU%2B6dmg04gIyxWSDeMeXZIlhKHNQGuKyCg%2FcH3pLecaY6%2BsaAoBoJDS%2BZyanwzHY%2F2sYHUwluqcxAY6pgFLnlx2Yw81qsia7QeHQN%2B6jaS1VqCZXeAW4mUA%2FRLMD6DU%2FC%2B32CVu9%2BzWN9F5jmkG3MDRq2eTBVCfYSemQAzlPn8bDT%2B9OVMVog2m8dM5%2BoCPzdq2Rn7GSWQTH%2FLETpY%2FEYWwsR7dqJjMUR9g39sqPnIhgbMRCRUCoJoS60Ir1mg9xrhv7utNypDjxqNz%2B40YOINbVvPUUYFczr%2B4o44QyPzfQ4we&X-Amz-Signature=db8581884f66947bd1dbdf730724402e4f3f1b1c936b44c4a8431fa6443947da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6LDL755%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIC%2FcUOkdp6ZO9tjATSmK6Yrvnx90qiX5abgOSdYo%2BMmcAiBuYSXYJ4dEEL75pQ3fhnLPsai%2FZkhgAQcnJOnv6egA5SqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5E06zu8lbkT%2FZHN9KtwDvL%2BJxcKeWno443Pc3q91h2k7O4t0TiqhlPQD5ODSWqCh%2Fdxdsb5cKh%2BsPBj1GN2JRH9WX%2BEd9mlBp%2FwW3l8P0vAMAxV084duixkFRTX40GBzYlTxFcbpZImx0kgAz8Qbo%2FRJCkOBSDYwPEWQPciGKa%2FqH9tX5ybc8S%2BQAJPLSFbJpAaM7EVDiWxfIevKprRb0fZRCxzLLF2pjF3n%2B55L71IFt02RF2SZ9sQ%2BfwQJgYlYTxFRa6GpFNrHZ6UJmDGtph2pjetDd4ooWEHW8tYch2aT%2BvrMEGcDMJH9pXkw4GUPI%2FkDaewM47XDh%2F2HWlqbqveo0sUhwmw05JZuitiCactya4GJn8fBzXeBUMFj%2B6ye2%2FDUZJwUViuDGTeLKGxNzxRDFgaHt0hB864h%2FacLqfmod7fZoIHCfazDzXxzKtowNy9o0mf4SORIshbzWtZkHPGyPelLCD3p%2BomyrJGe%2FGC6gH79aKNRkiKBZ8HfPM8ZVgibXaMSZSIcLwqOflMeCRmNpuqysKwcsdh6r9D%2FquBe1VD4ZDr%2BvPfp5jyZCkrjn30iik2YfRU%2B6dmg04gIyxWSDeMeXZIlhKHNQGuKyCg%2FcH3pLecaY6%2BsaAoBoJDS%2BZyanwzHY%2F2sYHUwluqcxAY6pgFLnlx2Yw81qsia7QeHQN%2B6jaS1VqCZXeAW4mUA%2FRLMD6DU%2FC%2B32CVu9%2BzWN9F5jmkG3MDRq2eTBVCfYSemQAzlPn8bDT%2B9OVMVog2m8dM5%2BoCPzdq2Rn7GSWQTH%2FLETpY%2FEYWwsR7dqJjMUR9g39sqPnIhgbMRCRUCoJoS60Ir1mg9xrhv7utNypDjxqNz%2B40YOINbVvPUUYFczr%2B4o44QyPzfQ4we&X-Amz-Signature=b947fe6a83800b7fbf8016cfcf8ea9a44f10357c2ab532856e971e3ecbb9fd17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6LDL755%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIC%2FcUOkdp6ZO9tjATSmK6Yrvnx90qiX5abgOSdYo%2BMmcAiBuYSXYJ4dEEL75pQ3fhnLPsai%2FZkhgAQcnJOnv6egA5SqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5E06zu8lbkT%2FZHN9KtwDvL%2BJxcKeWno443Pc3q91h2k7O4t0TiqhlPQD5ODSWqCh%2Fdxdsb5cKh%2BsPBj1GN2JRH9WX%2BEd9mlBp%2FwW3l8P0vAMAxV084duixkFRTX40GBzYlTxFcbpZImx0kgAz8Qbo%2FRJCkOBSDYwPEWQPciGKa%2FqH9tX5ybc8S%2BQAJPLSFbJpAaM7EVDiWxfIevKprRb0fZRCxzLLF2pjF3n%2B55L71IFt02RF2SZ9sQ%2BfwQJgYlYTxFRa6GpFNrHZ6UJmDGtph2pjetDd4ooWEHW8tYch2aT%2BvrMEGcDMJH9pXkw4GUPI%2FkDaewM47XDh%2F2HWlqbqveo0sUhwmw05JZuitiCactya4GJn8fBzXeBUMFj%2B6ye2%2FDUZJwUViuDGTeLKGxNzxRDFgaHt0hB864h%2FacLqfmod7fZoIHCfazDzXxzKtowNy9o0mf4SORIshbzWtZkHPGyPelLCD3p%2BomyrJGe%2FGC6gH79aKNRkiKBZ8HfPM8ZVgibXaMSZSIcLwqOflMeCRmNpuqysKwcsdh6r9D%2FquBe1VD4ZDr%2BvPfp5jyZCkrjn30iik2YfRU%2B6dmg04gIyxWSDeMeXZIlhKHNQGuKyCg%2FcH3pLecaY6%2BsaAoBoJDS%2BZyanwzHY%2F2sYHUwluqcxAY6pgFLnlx2Yw81qsia7QeHQN%2B6jaS1VqCZXeAW4mUA%2FRLMD6DU%2FC%2B32CVu9%2BzWN9F5jmkG3MDRq2eTBVCfYSemQAzlPn8bDT%2B9OVMVog2m8dM5%2BoCPzdq2Rn7GSWQTH%2FLETpY%2FEYWwsR7dqJjMUR9g39sqPnIhgbMRCRUCoJoS60Ir1mg9xrhv7utNypDjxqNz%2B40YOINbVvPUUYFczr%2B4o44QyPzfQ4we&X-Amz-Signature=786a08552cc6b4746dd41bb48e7e98aa66789075605ccef9faceb3574fc97571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6LDL755%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIC%2FcUOkdp6ZO9tjATSmK6Yrvnx90qiX5abgOSdYo%2BMmcAiBuYSXYJ4dEEL75pQ3fhnLPsai%2FZkhgAQcnJOnv6egA5SqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5E06zu8lbkT%2FZHN9KtwDvL%2BJxcKeWno443Pc3q91h2k7O4t0TiqhlPQD5ODSWqCh%2Fdxdsb5cKh%2BsPBj1GN2JRH9WX%2BEd9mlBp%2FwW3l8P0vAMAxV084duixkFRTX40GBzYlTxFcbpZImx0kgAz8Qbo%2FRJCkOBSDYwPEWQPciGKa%2FqH9tX5ybc8S%2BQAJPLSFbJpAaM7EVDiWxfIevKprRb0fZRCxzLLF2pjF3n%2B55L71IFt02RF2SZ9sQ%2BfwQJgYlYTxFRa6GpFNrHZ6UJmDGtph2pjetDd4ooWEHW8tYch2aT%2BvrMEGcDMJH9pXkw4GUPI%2FkDaewM47XDh%2F2HWlqbqveo0sUhwmw05JZuitiCactya4GJn8fBzXeBUMFj%2B6ye2%2FDUZJwUViuDGTeLKGxNzxRDFgaHt0hB864h%2FacLqfmod7fZoIHCfazDzXxzKtowNy9o0mf4SORIshbzWtZkHPGyPelLCD3p%2BomyrJGe%2FGC6gH79aKNRkiKBZ8HfPM8ZVgibXaMSZSIcLwqOflMeCRmNpuqysKwcsdh6r9D%2FquBe1VD4ZDr%2BvPfp5jyZCkrjn30iik2YfRU%2B6dmg04gIyxWSDeMeXZIlhKHNQGuKyCg%2FcH3pLecaY6%2BsaAoBoJDS%2BZyanwzHY%2F2sYHUwluqcxAY6pgFLnlx2Yw81qsia7QeHQN%2B6jaS1VqCZXeAW4mUA%2FRLMD6DU%2FC%2B32CVu9%2BzWN9F5jmkG3MDRq2eTBVCfYSemQAzlPn8bDT%2B9OVMVog2m8dM5%2BoCPzdq2Rn7GSWQTH%2FLETpY%2FEYWwsR7dqJjMUR9g39sqPnIhgbMRCRUCoJoS60Ir1mg9xrhv7utNypDjxqNz%2B40YOINbVvPUUYFczr%2B4o44QyPzfQ4we&X-Amz-Signature=8d056660008ea239d241d6dde8b24d83bfe9112c75df0fb6c648dd30d6a9dcde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
