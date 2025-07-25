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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZCGA6KF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICHIpM%2FENCradAZ00I66cRzrL%2F1NlQNDZ9LGtRchWHteAiEAwkiimWBmMivoa50wsLpmACUYvDQpXSy6SeORUgQ1Qecq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGQ1Px7SF5Q3u9AKLSrcA1TYc544zdze6hppjCufW05EnogE0wQFTWQYQ%2F0DvWnD%2BpP8kgwOwjz15x8DBwDlVySm7lPfRLMWF0TCaJl1cxpDOMb0IPR4h2ZXqvuPp245WALJXRD44IUuGJnqTstsSyi2iC0iCac6kX5JpX4ovUi4wyRk6s0dulu8M%2FqUfAGB001c9O6uTXJXs9td7Y1rfvluKvgR1kepAEaV5LwGY05ph98EgFu1urLqWWE8PenZylDCNNJBVur3T8AgLRRUjNEA28k8swAC1L9Lh2mPU8S0fn6F%2F7%2F6Ams7SxXyiKYGZx%2B8S%2FjmLR451TIUmldoPglnzSIDVU949F8a65A%2FIs18KcsJoQ%2BBuxr3piZ95dQdi06VGv3W7KEb8rOqVBIi0vFiC%2FeUVYCYGH0UWt7g74sR2QIEn%2BlOsft4lfPiHg3%2BzOzzpK8Cl1SOAj0B2ehf0jJ8z2W2PeqluinHXYD1fqa%2BzjQrREGcGoT3SgxkzMHaj5m9AkCSZh830yvNUjCSZWTS0n2ZonNrkJ0%2BshgEzdSSSyAtx%2B4taAsFEaghnhJl9RU8yu%2B03dWoDPbdZ00erWI7tSNEhj9nhGdjLaM1648QEKXGNs%2F7xjx%2F0wiLCfH5NBu0BGVtJ2jCmLadMNi8jcQGOqUBYGRY0zCH%2B02F10xPkIzN%2B2v8EzjfMqnyZ6CtalCW8v6W9RCqCdEwjHyoxWRSkDsb14%2BwiEC9hECFoOU%2B1O%2BCoUpfncxGWVJP90MJtnezoCX0tQMhOgLAYt2zet9UYZVIOLyBmigEpe4mFt9Kb3OnXw0ZbzkN3VfXUhLi98JpXh3mE%2F%2FM8asEDVQe%2BWPPz7s03vaP7MSQltSyvvUBRZpw118Z2pzm&X-Amz-Signature=1fda5199efa8c51cd544a507d788bde5c687154b59876bddcfeff6d2010222cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZCGA6KF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICHIpM%2FENCradAZ00I66cRzrL%2F1NlQNDZ9LGtRchWHteAiEAwkiimWBmMivoa50wsLpmACUYvDQpXSy6SeORUgQ1Qecq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGQ1Px7SF5Q3u9AKLSrcA1TYc544zdze6hppjCufW05EnogE0wQFTWQYQ%2F0DvWnD%2BpP8kgwOwjz15x8DBwDlVySm7lPfRLMWF0TCaJl1cxpDOMb0IPR4h2ZXqvuPp245WALJXRD44IUuGJnqTstsSyi2iC0iCac6kX5JpX4ovUi4wyRk6s0dulu8M%2FqUfAGB001c9O6uTXJXs9td7Y1rfvluKvgR1kepAEaV5LwGY05ph98EgFu1urLqWWE8PenZylDCNNJBVur3T8AgLRRUjNEA28k8swAC1L9Lh2mPU8S0fn6F%2F7%2F6Ams7SxXyiKYGZx%2B8S%2FjmLR451TIUmldoPglnzSIDVU949F8a65A%2FIs18KcsJoQ%2BBuxr3piZ95dQdi06VGv3W7KEb8rOqVBIi0vFiC%2FeUVYCYGH0UWt7g74sR2QIEn%2BlOsft4lfPiHg3%2BzOzzpK8Cl1SOAj0B2ehf0jJ8z2W2PeqluinHXYD1fqa%2BzjQrREGcGoT3SgxkzMHaj5m9AkCSZh830yvNUjCSZWTS0n2ZonNrkJ0%2BshgEzdSSSyAtx%2B4taAsFEaghnhJl9RU8yu%2B03dWoDPbdZ00erWI7tSNEhj9nhGdjLaM1648QEKXGNs%2F7xjx%2F0wiLCfH5NBu0BGVtJ2jCmLadMNi8jcQGOqUBYGRY0zCH%2B02F10xPkIzN%2B2v8EzjfMqnyZ6CtalCW8v6W9RCqCdEwjHyoxWRSkDsb14%2BwiEC9hECFoOU%2B1O%2BCoUpfncxGWVJP90MJtnezoCX0tQMhOgLAYt2zet9UYZVIOLyBmigEpe4mFt9Kb3OnXw0ZbzkN3VfXUhLi98JpXh3mE%2F%2FM8asEDVQe%2BWPPz7s03vaP7MSQltSyvvUBRZpw118Z2pzm&X-Amz-Signature=0297eebfafbbd8811a69a9db28557690eb44897d4c86d71e1bb42c457f095c14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZCGA6KF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICHIpM%2FENCradAZ00I66cRzrL%2F1NlQNDZ9LGtRchWHteAiEAwkiimWBmMivoa50wsLpmACUYvDQpXSy6SeORUgQ1Qecq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGQ1Px7SF5Q3u9AKLSrcA1TYc544zdze6hppjCufW05EnogE0wQFTWQYQ%2F0DvWnD%2BpP8kgwOwjz15x8DBwDlVySm7lPfRLMWF0TCaJl1cxpDOMb0IPR4h2ZXqvuPp245WALJXRD44IUuGJnqTstsSyi2iC0iCac6kX5JpX4ovUi4wyRk6s0dulu8M%2FqUfAGB001c9O6uTXJXs9td7Y1rfvluKvgR1kepAEaV5LwGY05ph98EgFu1urLqWWE8PenZylDCNNJBVur3T8AgLRRUjNEA28k8swAC1L9Lh2mPU8S0fn6F%2F7%2F6Ams7SxXyiKYGZx%2B8S%2FjmLR451TIUmldoPglnzSIDVU949F8a65A%2FIs18KcsJoQ%2BBuxr3piZ95dQdi06VGv3W7KEb8rOqVBIi0vFiC%2FeUVYCYGH0UWt7g74sR2QIEn%2BlOsft4lfPiHg3%2BzOzzpK8Cl1SOAj0B2ehf0jJ8z2W2PeqluinHXYD1fqa%2BzjQrREGcGoT3SgxkzMHaj5m9AkCSZh830yvNUjCSZWTS0n2ZonNrkJ0%2BshgEzdSSSyAtx%2B4taAsFEaghnhJl9RU8yu%2B03dWoDPbdZ00erWI7tSNEhj9nhGdjLaM1648QEKXGNs%2F7xjx%2F0wiLCfH5NBu0BGVtJ2jCmLadMNi8jcQGOqUBYGRY0zCH%2B02F10xPkIzN%2B2v8EzjfMqnyZ6CtalCW8v6W9RCqCdEwjHyoxWRSkDsb14%2BwiEC9hECFoOU%2B1O%2BCoUpfncxGWVJP90MJtnezoCX0tQMhOgLAYt2zet9UYZVIOLyBmigEpe4mFt9Kb3OnXw0ZbzkN3VfXUhLi98JpXh3mE%2F%2FM8asEDVQe%2BWPPz7s03vaP7MSQltSyvvUBRZpw118Z2pzm&X-Amz-Signature=2978797683f7a2d608ea490d258dd74ba4d28e01db51e39d98c2e16479e77384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZCGA6KF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICHIpM%2FENCradAZ00I66cRzrL%2F1NlQNDZ9LGtRchWHteAiEAwkiimWBmMivoa50wsLpmACUYvDQpXSy6SeORUgQ1Qecq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGQ1Px7SF5Q3u9AKLSrcA1TYc544zdze6hppjCufW05EnogE0wQFTWQYQ%2F0DvWnD%2BpP8kgwOwjz15x8DBwDlVySm7lPfRLMWF0TCaJl1cxpDOMb0IPR4h2ZXqvuPp245WALJXRD44IUuGJnqTstsSyi2iC0iCac6kX5JpX4ovUi4wyRk6s0dulu8M%2FqUfAGB001c9O6uTXJXs9td7Y1rfvluKvgR1kepAEaV5LwGY05ph98EgFu1urLqWWE8PenZylDCNNJBVur3T8AgLRRUjNEA28k8swAC1L9Lh2mPU8S0fn6F%2F7%2F6Ams7SxXyiKYGZx%2B8S%2FjmLR451TIUmldoPglnzSIDVU949F8a65A%2FIs18KcsJoQ%2BBuxr3piZ95dQdi06VGv3W7KEb8rOqVBIi0vFiC%2FeUVYCYGH0UWt7g74sR2QIEn%2BlOsft4lfPiHg3%2BzOzzpK8Cl1SOAj0B2ehf0jJ8z2W2PeqluinHXYD1fqa%2BzjQrREGcGoT3SgxkzMHaj5m9AkCSZh830yvNUjCSZWTS0n2ZonNrkJ0%2BshgEzdSSSyAtx%2B4taAsFEaghnhJl9RU8yu%2B03dWoDPbdZ00erWI7tSNEhj9nhGdjLaM1648QEKXGNs%2F7xjx%2F0wiLCfH5NBu0BGVtJ2jCmLadMNi8jcQGOqUBYGRY0zCH%2B02F10xPkIzN%2B2v8EzjfMqnyZ6CtalCW8v6W9RCqCdEwjHyoxWRSkDsb14%2BwiEC9hECFoOU%2B1O%2BCoUpfncxGWVJP90MJtnezoCX0tQMhOgLAYt2zet9UYZVIOLyBmigEpe4mFt9Kb3OnXw0ZbzkN3VfXUhLi98JpXh3mE%2F%2FM8asEDVQe%2BWPPz7s03vaP7MSQltSyvvUBRZpw118Z2pzm&X-Amz-Signature=597c52e769918b10c16656f96fd3ec904df313d34db3914cd94931ed3c0aace2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZCGA6KF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICHIpM%2FENCradAZ00I66cRzrL%2F1NlQNDZ9LGtRchWHteAiEAwkiimWBmMivoa50wsLpmACUYvDQpXSy6SeORUgQ1Qecq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGQ1Px7SF5Q3u9AKLSrcA1TYc544zdze6hppjCufW05EnogE0wQFTWQYQ%2F0DvWnD%2BpP8kgwOwjz15x8DBwDlVySm7lPfRLMWF0TCaJl1cxpDOMb0IPR4h2ZXqvuPp245WALJXRD44IUuGJnqTstsSyi2iC0iCac6kX5JpX4ovUi4wyRk6s0dulu8M%2FqUfAGB001c9O6uTXJXs9td7Y1rfvluKvgR1kepAEaV5LwGY05ph98EgFu1urLqWWE8PenZylDCNNJBVur3T8AgLRRUjNEA28k8swAC1L9Lh2mPU8S0fn6F%2F7%2F6Ams7SxXyiKYGZx%2B8S%2FjmLR451TIUmldoPglnzSIDVU949F8a65A%2FIs18KcsJoQ%2BBuxr3piZ95dQdi06VGv3W7KEb8rOqVBIi0vFiC%2FeUVYCYGH0UWt7g74sR2QIEn%2BlOsft4lfPiHg3%2BzOzzpK8Cl1SOAj0B2ehf0jJ8z2W2PeqluinHXYD1fqa%2BzjQrREGcGoT3SgxkzMHaj5m9AkCSZh830yvNUjCSZWTS0n2ZonNrkJ0%2BshgEzdSSSyAtx%2B4taAsFEaghnhJl9RU8yu%2B03dWoDPbdZ00erWI7tSNEhj9nhGdjLaM1648QEKXGNs%2F7xjx%2F0wiLCfH5NBu0BGVtJ2jCmLadMNi8jcQGOqUBYGRY0zCH%2B02F10xPkIzN%2B2v8EzjfMqnyZ6CtalCW8v6W9RCqCdEwjHyoxWRSkDsb14%2BwiEC9hECFoOU%2B1O%2BCoUpfncxGWVJP90MJtnezoCX0tQMhOgLAYt2zet9UYZVIOLyBmigEpe4mFt9Kb3OnXw0ZbzkN3VfXUhLi98JpXh3mE%2F%2FM8asEDVQe%2BWPPz7s03vaP7MSQltSyvvUBRZpw118Z2pzm&X-Amz-Signature=1a36a5da17a29e9c5fe91f12730613a6d15b4ac9a631c0f4142ac2c809ec2c5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZCGA6KF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICHIpM%2FENCradAZ00I66cRzrL%2F1NlQNDZ9LGtRchWHteAiEAwkiimWBmMivoa50wsLpmACUYvDQpXSy6SeORUgQ1Qecq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGQ1Px7SF5Q3u9AKLSrcA1TYc544zdze6hppjCufW05EnogE0wQFTWQYQ%2F0DvWnD%2BpP8kgwOwjz15x8DBwDlVySm7lPfRLMWF0TCaJl1cxpDOMb0IPR4h2ZXqvuPp245WALJXRD44IUuGJnqTstsSyi2iC0iCac6kX5JpX4ovUi4wyRk6s0dulu8M%2FqUfAGB001c9O6uTXJXs9td7Y1rfvluKvgR1kepAEaV5LwGY05ph98EgFu1urLqWWE8PenZylDCNNJBVur3T8AgLRRUjNEA28k8swAC1L9Lh2mPU8S0fn6F%2F7%2F6Ams7SxXyiKYGZx%2B8S%2FjmLR451TIUmldoPglnzSIDVU949F8a65A%2FIs18KcsJoQ%2BBuxr3piZ95dQdi06VGv3W7KEb8rOqVBIi0vFiC%2FeUVYCYGH0UWt7g74sR2QIEn%2BlOsft4lfPiHg3%2BzOzzpK8Cl1SOAj0B2ehf0jJ8z2W2PeqluinHXYD1fqa%2BzjQrREGcGoT3SgxkzMHaj5m9AkCSZh830yvNUjCSZWTS0n2ZonNrkJ0%2BshgEzdSSSyAtx%2B4taAsFEaghnhJl9RU8yu%2B03dWoDPbdZ00erWI7tSNEhj9nhGdjLaM1648QEKXGNs%2F7xjx%2F0wiLCfH5NBu0BGVtJ2jCmLadMNi8jcQGOqUBYGRY0zCH%2B02F10xPkIzN%2B2v8EzjfMqnyZ6CtalCW8v6W9RCqCdEwjHyoxWRSkDsb14%2BwiEC9hECFoOU%2B1O%2BCoUpfncxGWVJP90MJtnezoCX0tQMhOgLAYt2zet9UYZVIOLyBmigEpe4mFt9Kb3OnXw0ZbzkN3VfXUhLi98JpXh3mE%2F%2FM8asEDVQe%2BWPPz7s03vaP7MSQltSyvvUBRZpw118Z2pzm&X-Amz-Signature=d239f3325c8babe4805637481e9589e0a5e7517f8346ef9e911cda25dc31230d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZCGA6KF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICHIpM%2FENCradAZ00I66cRzrL%2F1NlQNDZ9LGtRchWHteAiEAwkiimWBmMivoa50wsLpmACUYvDQpXSy6SeORUgQ1Qecq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGQ1Px7SF5Q3u9AKLSrcA1TYc544zdze6hppjCufW05EnogE0wQFTWQYQ%2F0DvWnD%2BpP8kgwOwjz15x8DBwDlVySm7lPfRLMWF0TCaJl1cxpDOMb0IPR4h2ZXqvuPp245WALJXRD44IUuGJnqTstsSyi2iC0iCac6kX5JpX4ovUi4wyRk6s0dulu8M%2FqUfAGB001c9O6uTXJXs9td7Y1rfvluKvgR1kepAEaV5LwGY05ph98EgFu1urLqWWE8PenZylDCNNJBVur3T8AgLRRUjNEA28k8swAC1L9Lh2mPU8S0fn6F%2F7%2F6Ams7SxXyiKYGZx%2B8S%2FjmLR451TIUmldoPglnzSIDVU949F8a65A%2FIs18KcsJoQ%2BBuxr3piZ95dQdi06VGv3W7KEb8rOqVBIi0vFiC%2FeUVYCYGH0UWt7g74sR2QIEn%2BlOsft4lfPiHg3%2BzOzzpK8Cl1SOAj0B2ehf0jJ8z2W2PeqluinHXYD1fqa%2BzjQrREGcGoT3SgxkzMHaj5m9AkCSZh830yvNUjCSZWTS0n2ZonNrkJ0%2BshgEzdSSSyAtx%2B4taAsFEaghnhJl9RU8yu%2B03dWoDPbdZ00erWI7tSNEhj9nhGdjLaM1648QEKXGNs%2F7xjx%2F0wiLCfH5NBu0BGVtJ2jCmLadMNi8jcQGOqUBYGRY0zCH%2B02F10xPkIzN%2B2v8EzjfMqnyZ6CtalCW8v6W9RCqCdEwjHyoxWRSkDsb14%2BwiEC9hECFoOU%2B1O%2BCoUpfncxGWVJP90MJtnezoCX0tQMhOgLAYt2zet9UYZVIOLyBmigEpe4mFt9Kb3OnXw0ZbzkN3VfXUhLi98JpXh3mE%2F%2FM8asEDVQe%2BWPPz7s03vaP7MSQltSyvvUBRZpw118Z2pzm&X-Amz-Signature=e86ef31ead86e75c1952ce0072d438256baf0d3825910c67bd46f6aee4e7f52f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZCGA6KF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICHIpM%2FENCradAZ00I66cRzrL%2F1NlQNDZ9LGtRchWHteAiEAwkiimWBmMivoa50wsLpmACUYvDQpXSy6SeORUgQ1Qecq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGQ1Px7SF5Q3u9AKLSrcA1TYc544zdze6hppjCufW05EnogE0wQFTWQYQ%2F0DvWnD%2BpP8kgwOwjz15x8DBwDlVySm7lPfRLMWF0TCaJl1cxpDOMb0IPR4h2ZXqvuPp245WALJXRD44IUuGJnqTstsSyi2iC0iCac6kX5JpX4ovUi4wyRk6s0dulu8M%2FqUfAGB001c9O6uTXJXs9td7Y1rfvluKvgR1kepAEaV5LwGY05ph98EgFu1urLqWWE8PenZylDCNNJBVur3T8AgLRRUjNEA28k8swAC1L9Lh2mPU8S0fn6F%2F7%2F6Ams7SxXyiKYGZx%2B8S%2FjmLR451TIUmldoPglnzSIDVU949F8a65A%2FIs18KcsJoQ%2BBuxr3piZ95dQdi06VGv3W7KEb8rOqVBIi0vFiC%2FeUVYCYGH0UWt7g74sR2QIEn%2BlOsft4lfPiHg3%2BzOzzpK8Cl1SOAj0B2ehf0jJ8z2W2PeqluinHXYD1fqa%2BzjQrREGcGoT3SgxkzMHaj5m9AkCSZh830yvNUjCSZWTS0n2ZonNrkJ0%2BshgEzdSSSyAtx%2B4taAsFEaghnhJl9RU8yu%2B03dWoDPbdZ00erWI7tSNEhj9nhGdjLaM1648QEKXGNs%2F7xjx%2F0wiLCfH5NBu0BGVtJ2jCmLadMNi8jcQGOqUBYGRY0zCH%2B02F10xPkIzN%2B2v8EzjfMqnyZ6CtalCW8v6W9RCqCdEwjHyoxWRSkDsb14%2BwiEC9hECFoOU%2B1O%2BCoUpfncxGWVJP90MJtnezoCX0tQMhOgLAYt2zet9UYZVIOLyBmigEpe4mFt9Kb3OnXw0ZbzkN3VfXUhLi98JpXh3mE%2F%2FM8asEDVQe%2BWPPz7s03vaP7MSQltSyvvUBRZpw118Z2pzm&X-Amz-Signature=b9688b8e668552fb72a8b338cc031e0c91195f9e0d30a91ca5f8c12235af1fc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZCGA6KF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICHIpM%2FENCradAZ00I66cRzrL%2F1NlQNDZ9LGtRchWHteAiEAwkiimWBmMivoa50wsLpmACUYvDQpXSy6SeORUgQ1Qecq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGQ1Px7SF5Q3u9AKLSrcA1TYc544zdze6hppjCufW05EnogE0wQFTWQYQ%2F0DvWnD%2BpP8kgwOwjz15x8DBwDlVySm7lPfRLMWF0TCaJl1cxpDOMb0IPR4h2ZXqvuPp245WALJXRD44IUuGJnqTstsSyi2iC0iCac6kX5JpX4ovUi4wyRk6s0dulu8M%2FqUfAGB001c9O6uTXJXs9td7Y1rfvluKvgR1kepAEaV5LwGY05ph98EgFu1urLqWWE8PenZylDCNNJBVur3T8AgLRRUjNEA28k8swAC1L9Lh2mPU8S0fn6F%2F7%2F6Ams7SxXyiKYGZx%2B8S%2FjmLR451TIUmldoPglnzSIDVU949F8a65A%2FIs18KcsJoQ%2BBuxr3piZ95dQdi06VGv3W7KEb8rOqVBIi0vFiC%2FeUVYCYGH0UWt7g74sR2QIEn%2BlOsft4lfPiHg3%2BzOzzpK8Cl1SOAj0B2ehf0jJ8z2W2PeqluinHXYD1fqa%2BzjQrREGcGoT3SgxkzMHaj5m9AkCSZh830yvNUjCSZWTS0n2ZonNrkJ0%2BshgEzdSSSyAtx%2B4taAsFEaghnhJl9RU8yu%2B03dWoDPbdZ00erWI7tSNEhj9nhGdjLaM1648QEKXGNs%2F7xjx%2F0wiLCfH5NBu0BGVtJ2jCmLadMNi8jcQGOqUBYGRY0zCH%2B02F10xPkIzN%2B2v8EzjfMqnyZ6CtalCW8v6W9RCqCdEwjHyoxWRSkDsb14%2BwiEC9hECFoOU%2B1O%2BCoUpfncxGWVJP90MJtnezoCX0tQMhOgLAYt2zet9UYZVIOLyBmigEpe4mFt9Kb3OnXw0ZbzkN3VfXUhLi98JpXh3mE%2F%2FM8asEDVQe%2BWPPz7s03vaP7MSQltSyvvUBRZpw118Z2pzm&X-Amz-Signature=ee6a20871cf565668706c53bf1f89c7706e460ff43da8da79b04625c7fc174e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZCGA6KF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICHIpM%2FENCradAZ00I66cRzrL%2F1NlQNDZ9LGtRchWHteAiEAwkiimWBmMivoa50wsLpmACUYvDQpXSy6SeORUgQ1Qecq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGQ1Px7SF5Q3u9AKLSrcA1TYc544zdze6hppjCufW05EnogE0wQFTWQYQ%2F0DvWnD%2BpP8kgwOwjz15x8DBwDlVySm7lPfRLMWF0TCaJl1cxpDOMb0IPR4h2ZXqvuPp245WALJXRD44IUuGJnqTstsSyi2iC0iCac6kX5JpX4ovUi4wyRk6s0dulu8M%2FqUfAGB001c9O6uTXJXs9td7Y1rfvluKvgR1kepAEaV5LwGY05ph98EgFu1urLqWWE8PenZylDCNNJBVur3T8AgLRRUjNEA28k8swAC1L9Lh2mPU8S0fn6F%2F7%2F6Ams7SxXyiKYGZx%2B8S%2FjmLR451TIUmldoPglnzSIDVU949F8a65A%2FIs18KcsJoQ%2BBuxr3piZ95dQdi06VGv3W7KEb8rOqVBIi0vFiC%2FeUVYCYGH0UWt7g74sR2QIEn%2BlOsft4lfPiHg3%2BzOzzpK8Cl1SOAj0B2ehf0jJ8z2W2PeqluinHXYD1fqa%2BzjQrREGcGoT3SgxkzMHaj5m9AkCSZh830yvNUjCSZWTS0n2ZonNrkJ0%2BshgEzdSSSyAtx%2B4taAsFEaghnhJl9RU8yu%2B03dWoDPbdZ00erWI7tSNEhj9nhGdjLaM1648QEKXGNs%2F7xjx%2F0wiLCfH5NBu0BGVtJ2jCmLadMNi8jcQGOqUBYGRY0zCH%2B02F10xPkIzN%2B2v8EzjfMqnyZ6CtalCW8v6W9RCqCdEwjHyoxWRSkDsb14%2BwiEC9hECFoOU%2B1O%2BCoUpfncxGWVJP90MJtnezoCX0tQMhOgLAYt2zet9UYZVIOLyBmigEpe4mFt9Kb3OnXw0ZbzkN3VfXUhLi98JpXh3mE%2F%2FM8asEDVQe%2BWPPz7s03vaP7MSQltSyvvUBRZpw118Z2pzm&X-Amz-Signature=4548ab8c9a711c69a8fa9fffc6e490c9c5ccc6154a7bb696b719e591ab7b0f6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZCGA6KF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICHIpM%2FENCradAZ00I66cRzrL%2F1NlQNDZ9LGtRchWHteAiEAwkiimWBmMivoa50wsLpmACUYvDQpXSy6SeORUgQ1Qecq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGQ1Px7SF5Q3u9AKLSrcA1TYc544zdze6hppjCufW05EnogE0wQFTWQYQ%2F0DvWnD%2BpP8kgwOwjz15x8DBwDlVySm7lPfRLMWF0TCaJl1cxpDOMb0IPR4h2ZXqvuPp245WALJXRD44IUuGJnqTstsSyi2iC0iCac6kX5JpX4ovUi4wyRk6s0dulu8M%2FqUfAGB001c9O6uTXJXs9td7Y1rfvluKvgR1kepAEaV5LwGY05ph98EgFu1urLqWWE8PenZylDCNNJBVur3T8AgLRRUjNEA28k8swAC1L9Lh2mPU8S0fn6F%2F7%2F6Ams7SxXyiKYGZx%2B8S%2FjmLR451TIUmldoPglnzSIDVU949F8a65A%2FIs18KcsJoQ%2BBuxr3piZ95dQdi06VGv3W7KEb8rOqVBIi0vFiC%2FeUVYCYGH0UWt7g74sR2QIEn%2BlOsft4lfPiHg3%2BzOzzpK8Cl1SOAj0B2ehf0jJ8z2W2PeqluinHXYD1fqa%2BzjQrREGcGoT3SgxkzMHaj5m9AkCSZh830yvNUjCSZWTS0n2ZonNrkJ0%2BshgEzdSSSyAtx%2B4taAsFEaghnhJl9RU8yu%2B03dWoDPbdZ00erWI7tSNEhj9nhGdjLaM1648QEKXGNs%2F7xjx%2F0wiLCfH5NBu0BGVtJ2jCmLadMNi8jcQGOqUBYGRY0zCH%2B02F10xPkIzN%2B2v8EzjfMqnyZ6CtalCW8v6W9RCqCdEwjHyoxWRSkDsb14%2BwiEC9hECFoOU%2B1O%2BCoUpfncxGWVJP90MJtnezoCX0tQMhOgLAYt2zet9UYZVIOLyBmigEpe4mFt9Kb3OnXw0ZbzkN3VfXUhLi98JpXh3mE%2F%2FM8asEDVQe%2BWPPz7s03vaP7MSQltSyvvUBRZpw118Z2pzm&X-Amz-Signature=59214a44c9225673f96c010f235f6e628d38ddba893f58918896614f1fd358ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZCGA6KF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICHIpM%2FENCradAZ00I66cRzrL%2F1NlQNDZ9LGtRchWHteAiEAwkiimWBmMivoa50wsLpmACUYvDQpXSy6SeORUgQ1Qecq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGQ1Px7SF5Q3u9AKLSrcA1TYc544zdze6hppjCufW05EnogE0wQFTWQYQ%2F0DvWnD%2BpP8kgwOwjz15x8DBwDlVySm7lPfRLMWF0TCaJl1cxpDOMb0IPR4h2ZXqvuPp245WALJXRD44IUuGJnqTstsSyi2iC0iCac6kX5JpX4ovUi4wyRk6s0dulu8M%2FqUfAGB001c9O6uTXJXs9td7Y1rfvluKvgR1kepAEaV5LwGY05ph98EgFu1urLqWWE8PenZylDCNNJBVur3T8AgLRRUjNEA28k8swAC1L9Lh2mPU8S0fn6F%2F7%2F6Ams7SxXyiKYGZx%2B8S%2FjmLR451TIUmldoPglnzSIDVU949F8a65A%2FIs18KcsJoQ%2BBuxr3piZ95dQdi06VGv3W7KEb8rOqVBIi0vFiC%2FeUVYCYGH0UWt7g74sR2QIEn%2BlOsft4lfPiHg3%2BzOzzpK8Cl1SOAj0B2ehf0jJ8z2W2PeqluinHXYD1fqa%2BzjQrREGcGoT3SgxkzMHaj5m9AkCSZh830yvNUjCSZWTS0n2ZonNrkJ0%2BshgEzdSSSyAtx%2B4taAsFEaghnhJl9RU8yu%2B03dWoDPbdZ00erWI7tSNEhj9nhGdjLaM1648QEKXGNs%2F7xjx%2F0wiLCfH5NBu0BGVtJ2jCmLadMNi8jcQGOqUBYGRY0zCH%2B02F10xPkIzN%2B2v8EzjfMqnyZ6CtalCW8v6W9RCqCdEwjHyoxWRSkDsb14%2BwiEC9hECFoOU%2B1O%2BCoUpfncxGWVJP90MJtnezoCX0tQMhOgLAYt2zet9UYZVIOLyBmigEpe4mFt9Kb3OnXw0ZbzkN3VfXUhLi98JpXh3mE%2F%2FM8asEDVQe%2BWPPz7s03vaP7MSQltSyvvUBRZpw118Z2pzm&X-Amz-Signature=50414488c376da5c71459462085418c839729e790ad960bf1ef8b5a4fdec5793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZCGA6KF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICHIpM%2FENCradAZ00I66cRzrL%2F1NlQNDZ9LGtRchWHteAiEAwkiimWBmMivoa50wsLpmACUYvDQpXSy6SeORUgQ1Qecq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGQ1Px7SF5Q3u9AKLSrcA1TYc544zdze6hppjCufW05EnogE0wQFTWQYQ%2F0DvWnD%2BpP8kgwOwjz15x8DBwDlVySm7lPfRLMWF0TCaJl1cxpDOMb0IPR4h2ZXqvuPp245WALJXRD44IUuGJnqTstsSyi2iC0iCac6kX5JpX4ovUi4wyRk6s0dulu8M%2FqUfAGB001c9O6uTXJXs9td7Y1rfvluKvgR1kepAEaV5LwGY05ph98EgFu1urLqWWE8PenZylDCNNJBVur3T8AgLRRUjNEA28k8swAC1L9Lh2mPU8S0fn6F%2F7%2F6Ams7SxXyiKYGZx%2B8S%2FjmLR451TIUmldoPglnzSIDVU949F8a65A%2FIs18KcsJoQ%2BBuxr3piZ95dQdi06VGv3W7KEb8rOqVBIi0vFiC%2FeUVYCYGH0UWt7g74sR2QIEn%2BlOsft4lfPiHg3%2BzOzzpK8Cl1SOAj0B2ehf0jJ8z2W2PeqluinHXYD1fqa%2BzjQrREGcGoT3SgxkzMHaj5m9AkCSZh830yvNUjCSZWTS0n2ZonNrkJ0%2BshgEzdSSSyAtx%2B4taAsFEaghnhJl9RU8yu%2B03dWoDPbdZ00erWI7tSNEhj9nhGdjLaM1648QEKXGNs%2F7xjx%2F0wiLCfH5NBu0BGVtJ2jCmLadMNi8jcQGOqUBYGRY0zCH%2B02F10xPkIzN%2B2v8EzjfMqnyZ6CtalCW8v6W9RCqCdEwjHyoxWRSkDsb14%2BwiEC9hECFoOU%2B1O%2BCoUpfncxGWVJP90MJtnezoCX0tQMhOgLAYt2zet9UYZVIOLyBmigEpe4mFt9Kb3OnXw0ZbzkN3VfXUhLi98JpXh3mE%2F%2FM8asEDVQe%2BWPPz7s03vaP7MSQltSyvvUBRZpw118Z2pzm&X-Amz-Signature=53d664ddabbfd39ccf0e287fbcb1e57c618b374c91bdefc94455042db985405a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZCGA6KF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICHIpM%2FENCradAZ00I66cRzrL%2F1NlQNDZ9LGtRchWHteAiEAwkiimWBmMivoa50wsLpmACUYvDQpXSy6SeORUgQ1Qecq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGQ1Px7SF5Q3u9AKLSrcA1TYc544zdze6hppjCufW05EnogE0wQFTWQYQ%2F0DvWnD%2BpP8kgwOwjz15x8DBwDlVySm7lPfRLMWF0TCaJl1cxpDOMb0IPR4h2ZXqvuPp245WALJXRD44IUuGJnqTstsSyi2iC0iCac6kX5JpX4ovUi4wyRk6s0dulu8M%2FqUfAGB001c9O6uTXJXs9td7Y1rfvluKvgR1kepAEaV5LwGY05ph98EgFu1urLqWWE8PenZylDCNNJBVur3T8AgLRRUjNEA28k8swAC1L9Lh2mPU8S0fn6F%2F7%2F6Ams7SxXyiKYGZx%2B8S%2FjmLR451TIUmldoPglnzSIDVU949F8a65A%2FIs18KcsJoQ%2BBuxr3piZ95dQdi06VGv3W7KEb8rOqVBIi0vFiC%2FeUVYCYGH0UWt7g74sR2QIEn%2BlOsft4lfPiHg3%2BzOzzpK8Cl1SOAj0B2ehf0jJ8z2W2PeqluinHXYD1fqa%2BzjQrREGcGoT3SgxkzMHaj5m9AkCSZh830yvNUjCSZWTS0n2ZonNrkJ0%2BshgEzdSSSyAtx%2B4taAsFEaghnhJl9RU8yu%2B03dWoDPbdZ00erWI7tSNEhj9nhGdjLaM1648QEKXGNs%2F7xjx%2F0wiLCfH5NBu0BGVtJ2jCmLadMNi8jcQGOqUBYGRY0zCH%2B02F10xPkIzN%2B2v8EzjfMqnyZ6CtalCW8v6W9RCqCdEwjHyoxWRSkDsb14%2BwiEC9hECFoOU%2B1O%2BCoUpfncxGWVJP90MJtnezoCX0tQMhOgLAYt2zet9UYZVIOLyBmigEpe4mFt9Kb3OnXw0ZbzkN3VfXUhLi98JpXh3mE%2F%2FM8asEDVQe%2BWPPz7s03vaP7MSQltSyvvUBRZpw118Z2pzm&X-Amz-Signature=392aa77dca5e2e4a68fa9b06dd329dccc5c695f8dae98cceec6243146583d81a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WIECJY7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIFIO8mSmaLjNanAP8NRWB1TApVkIIKl09mQOJ5psWTJLAiBklOaCaxJsEQrrU9vv3MQbLYzp1vHn3TNYdyip5bH%2BBSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMxko%2FYLTK12DTAJLeKtwDpHfKVtjfK7VHgHTJn3w1wI%2FB9rUT4JTEAqMNEv22PMKSWVD01SQarFUE7Xpo%2B5ItCTNWqOp5NMo0ILJhkwOt%2BDnoVmPjjUwaLep4rLQkQVVFsncT0G1NvjxJk8zGx0kFZj2QAOMd7xqPful3JqX5Huk%2B4Vl9Wkj%2Bgti0g930wK2dQmAC0ZdCr%2F8NR%2FSJM5XdQYwSbj%2BkhHvuLyce9w0k2QzN%2FhX77boz8eegMtW8aoGbXztyAsRdEUt5P%2FaIeKT0eTY1FB17MK9b8Ym156MR4iCqr%2Fz%2BOo1elk7q4%2BMN8avziEqzPL30IhUH91QphEH3b5iDDCwKE6%2BjxivO1G4j%2F8UOMsc3yCOjrFCDemtBxaDd%2B%2BDkOs8rYein6%2F5nmGfBJy1yuBoeaQhuHWNZGeMw%2BbFnygxPShUh%2FiKjfcmqmcwm7Y5hDG4Sc3ykHVSQzS6bqK1NLcJit5gsLPknO5Cf292JsHfF2wN2itGqjSH2kvakvwz0mvqyYNPf5H11y2BSKleyaf9t2W9BnH5yoh2Z0TsV2C6dPNDKbpztDptRU7I62eEs4iUIGeeenYTpRxA2hlD%2BSA71e38jnNwG4RVHnJDK45Sb5%2F83ZTQaeHVov7M25bceHOveXASYW3Uw6LyNxAY6pgH8HrdhRASwUDA0CNa%2F4iJZ2JqRvOOfvZdauf3KCZA1PKfCbwzB7OyhpfIjWDbiL2ZB%2BjIgvgG6o%2FOYQNt4A%2F9CFS6UpoQRUMg2%2BvhEc%2BVIRwKapiWJJ00dDIp8jeIi06TpHS4oxE1j6gYD7dwjskX9olqyal2558alx7ePMBViKf3ztkzGVpoULFYC8EHeOW6QYnhIAzw0QFCOBBgT9WU7Ywj3l4M%2F&X-Amz-Signature=4ae2498550511f08cc38f7c7b573237e535c9c3694b860ca990686ec261b7e0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WIECJY7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIFIO8mSmaLjNanAP8NRWB1TApVkIIKl09mQOJ5psWTJLAiBklOaCaxJsEQrrU9vv3MQbLYzp1vHn3TNYdyip5bH%2BBSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMxko%2FYLTK12DTAJLeKtwDpHfKVtjfK7VHgHTJn3w1wI%2FB9rUT4JTEAqMNEv22PMKSWVD01SQarFUE7Xpo%2B5ItCTNWqOp5NMo0ILJhkwOt%2BDnoVmPjjUwaLep4rLQkQVVFsncT0G1NvjxJk8zGx0kFZj2QAOMd7xqPful3JqX5Huk%2B4Vl9Wkj%2Bgti0g930wK2dQmAC0ZdCr%2F8NR%2FSJM5XdQYwSbj%2BkhHvuLyce9w0k2QzN%2FhX77boz8eegMtW8aoGbXztyAsRdEUt5P%2FaIeKT0eTY1FB17MK9b8Ym156MR4iCqr%2Fz%2BOo1elk7q4%2BMN8avziEqzPL30IhUH91QphEH3b5iDDCwKE6%2BjxivO1G4j%2F8UOMsc3yCOjrFCDemtBxaDd%2B%2BDkOs8rYein6%2F5nmGfBJy1yuBoeaQhuHWNZGeMw%2BbFnygxPShUh%2FiKjfcmqmcwm7Y5hDG4Sc3ykHVSQzS6bqK1NLcJit5gsLPknO5Cf292JsHfF2wN2itGqjSH2kvakvwz0mvqyYNPf5H11y2BSKleyaf9t2W9BnH5yoh2Z0TsV2C6dPNDKbpztDptRU7I62eEs4iUIGeeenYTpRxA2hlD%2BSA71e38jnNwG4RVHnJDK45Sb5%2F83ZTQaeHVov7M25bceHOveXASYW3Uw6LyNxAY6pgH8HrdhRASwUDA0CNa%2F4iJZ2JqRvOOfvZdauf3KCZA1PKfCbwzB7OyhpfIjWDbiL2ZB%2BjIgvgG6o%2FOYQNt4A%2F9CFS6UpoQRUMg2%2BvhEc%2BVIRwKapiWJJ00dDIp8jeIi06TpHS4oxE1j6gYD7dwjskX9olqyal2558alx7ePMBViKf3ztkzGVpoULFYC8EHeOW6QYnhIAzw0QFCOBBgT9WU7Ywj3l4M%2F&X-Amz-Signature=dab1527b90e412f447482fe11549f408ee1b4c156bcab673314e373a5a29c931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WIECJY7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIFIO8mSmaLjNanAP8NRWB1TApVkIIKl09mQOJ5psWTJLAiBklOaCaxJsEQrrU9vv3MQbLYzp1vHn3TNYdyip5bH%2BBSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMxko%2FYLTK12DTAJLeKtwDpHfKVtjfK7VHgHTJn3w1wI%2FB9rUT4JTEAqMNEv22PMKSWVD01SQarFUE7Xpo%2B5ItCTNWqOp5NMo0ILJhkwOt%2BDnoVmPjjUwaLep4rLQkQVVFsncT0G1NvjxJk8zGx0kFZj2QAOMd7xqPful3JqX5Huk%2B4Vl9Wkj%2Bgti0g930wK2dQmAC0ZdCr%2F8NR%2FSJM5XdQYwSbj%2BkhHvuLyce9w0k2QzN%2FhX77boz8eegMtW8aoGbXztyAsRdEUt5P%2FaIeKT0eTY1FB17MK9b8Ym156MR4iCqr%2Fz%2BOo1elk7q4%2BMN8avziEqzPL30IhUH91QphEH3b5iDDCwKE6%2BjxivO1G4j%2F8UOMsc3yCOjrFCDemtBxaDd%2B%2BDkOs8rYein6%2F5nmGfBJy1yuBoeaQhuHWNZGeMw%2BbFnygxPShUh%2FiKjfcmqmcwm7Y5hDG4Sc3ykHVSQzS6bqK1NLcJit5gsLPknO5Cf292JsHfF2wN2itGqjSH2kvakvwz0mvqyYNPf5H11y2BSKleyaf9t2W9BnH5yoh2Z0TsV2C6dPNDKbpztDptRU7I62eEs4iUIGeeenYTpRxA2hlD%2BSA71e38jnNwG4RVHnJDK45Sb5%2F83ZTQaeHVov7M25bceHOveXASYW3Uw6LyNxAY6pgH8HrdhRASwUDA0CNa%2F4iJZ2JqRvOOfvZdauf3KCZA1PKfCbwzB7OyhpfIjWDbiL2ZB%2BjIgvgG6o%2FOYQNt4A%2F9CFS6UpoQRUMg2%2BvhEc%2BVIRwKapiWJJ00dDIp8jeIi06TpHS4oxE1j6gYD7dwjskX9olqyal2558alx7ePMBViKf3ztkzGVpoULFYC8EHeOW6QYnhIAzw0QFCOBBgT9WU7Ywj3l4M%2F&X-Amz-Signature=4f34c783b23548c7f734be8006c117465c3ce8ab32fda860f9f758ada444460b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WIECJY7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIFIO8mSmaLjNanAP8NRWB1TApVkIIKl09mQOJ5psWTJLAiBklOaCaxJsEQrrU9vv3MQbLYzp1vHn3TNYdyip5bH%2BBSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMxko%2FYLTK12DTAJLeKtwDpHfKVtjfK7VHgHTJn3w1wI%2FB9rUT4JTEAqMNEv22PMKSWVD01SQarFUE7Xpo%2B5ItCTNWqOp5NMo0ILJhkwOt%2BDnoVmPjjUwaLep4rLQkQVVFsncT0G1NvjxJk8zGx0kFZj2QAOMd7xqPful3JqX5Huk%2B4Vl9Wkj%2Bgti0g930wK2dQmAC0ZdCr%2F8NR%2FSJM5XdQYwSbj%2BkhHvuLyce9w0k2QzN%2FhX77boz8eegMtW8aoGbXztyAsRdEUt5P%2FaIeKT0eTY1FB17MK9b8Ym156MR4iCqr%2Fz%2BOo1elk7q4%2BMN8avziEqzPL30IhUH91QphEH3b5iDDCwKE6%2BjxivO1G4j%2F8UOMsc3yCOjrFCDemtBxaDd%2B%2BDkOs8rYein6%2F5nmGfBJy1yuBoeaQhuHWNZGeMw%2BbFnygxPShUh%2FiKjfcmqmcwm7Y5hDG4Sc3ykHVSQzS6bqK1NLcJit5gsLPknO5Cf292JsHfF2wN2itGqjSH2kvakvwz0mvqyYNPf5H11y2BSKleyaf9t2W9BnH5yoh2Z0TsV2C6dPNDKbpztDptRU7I62eEs4iUIGeeenYTpRxA2hlD%2BSA71e38jnNwG4RVHnJDK45Sb5%2F83ZTQaeHVov7M25bceHOveXASYW3Uw6LyNxAY6pgH8HrdhRASwUDA0CNa%2F4iJZ2JqRvOOfvZdauf3KCZA1PKfCbwzB7OyhpfIjWDbiL2ZB%2BjIgvgG6o%2FOYQNt4A%2F9CFS6UpoQRUMg2%2BvhEc%2BVIRwKapiWJJ00dDIp8jeIi06TpHS4oxE1j6gYD7dwjskX9olqyal2558alx7ePMBViKf3ztkzGVpoULFYC8EHeOW6QYnhIAzw0QFCOBBgT9WU7Ywj3l4M%2F&X-Amz-Signature=7bbe602f668fd81a33c9ead54c7209efae1131210b289ad4da1e665caa40c4e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WIECJY7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIFIO8mSmaLjNanAP8NRWB1TApVkIIKl09mQOJ5psWTJLAiBklOaCaxJsEQrrU9vv3MQbLYzp1vHn3TNYdyip5bH%2BBSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMxko%2FYLTK12DTAJLeKtwDpHfKVtjfK7VHgHTJn3w1wI%2FB9rUT4JTEAqMNEv22PMKSWVD01SQarFUE7Xpo%2B5ItCTNWqOp5NMo0ILJhkwOt%2BDnoVmPjjUwaLep4rLQkQVVFsncT0G1NvjxJk8zGx0kFZj2QAOMd7xqPful3JqX5Huk%2B4Vl9Wkj%2Bgti0g930wK2dQmAC0ZdCr%2F8NR%2FSJM5XdQYwSbj%2BkhHvuLyce9w0k2QzN%2FhX77boz8eegMtW8aoGbXztyAsRdEUt5P%2FaIeKT0eTY1FB17MK9b8Ym156MR4iCqr%2Fz%2BOo1elk7q4%2BMN8avziEqzPL30IhUH91QphEH3b5iDDCwKE6%2BjxivO1G4j%2F8UOMsc3yCOjrFCDemtBxaDd%2B%2BDkOs8rYein6%2F5nmGfBJy1yuBoeaQhuHWNZGeMw%2BbFnygxPShUh%2FiKjfcmqmcwm7Y5hDG4Sc3ykHVSQzS6bqK1NLcJit5gsLPknO5Cf292JsHfF2wN2itGqjSH2kvakvwz0mvqyYNPf5H11y2BSKleyaf9t2W9BnH5yoh2Z0TsV2C6dPNDKbpztDptRU7I62eEs4iUIGeeenYTpRxA2hlD%2BSA71e38jnNwG4RVHnJDK45Sb5%2F83ZTQaeHVov7M25bceHOveXASYW3Uw6LyNxAY6pgH8HrdhRASwUDA0CNa%2F4iJZ2JqRvOOfvZdauf3KCZA1PKfCbwzB7OyhpfIjWDbiL2ZB%2BjIgvgG6o%2FOYQNt4A%2F9CFS6UpoQRUMg2%2BvhEc%2BVIRwKapiWJJ00dDIp8jeIi06TpHS4oxE1j6gYD7dwjskX9olqyal2558alx7ePMBViKf3ztkzGVpoULFYC8EHeOW6QYnhIAzw0QFCOBBgT9WU7Ywj3l4M%2F&X-Amz-Signature=9dc4e89c0aa4c13ebbe3fe11991d4090ec69626dfa3d0ef74262980886e14791&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WIECJY7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIFIO8mSmaLjNanAP8NRWB1TApVkIIKl09mQOJ5psWTJLAiBklOaCaxJsEQrrU9vv3MQbLYzp1vHn3TNYdyip5bH%2BBSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMxko%2FYLTK12DTAJLeKtwDpHfKVtjfK7VHgHTJn3w1wI%2FB9rUT4JTEAqMNEv22PMKSWVD01SQarFUE7Xpo%2B5ItCTNWqOp5NMo0ILJhkwOt%2BDnoVmPjjUwaLep4rLQkQVVFsncT0G1NvjxJk8zGx0kFZj2QAOMd7xqPful3JqX5Huk%2B4Vl9Wkj%2Bgti0g930wK2dQmAC0ZdCr%2F8NR%2FSJM5XdQYwSbj%2BkhHvuLyce9w0k2QzN%2FhX77boz8eegMtW8aoGbXztyAsRdEUt5P%2FaIeKT0eTY1FB17MK9b8Ym156MR4iCqr%2Fz%2BOo1elk7q4%2BMN8avziEqzPL30IhUH91QphEH3b5iDDCwKE6%2BjxivO1G4j%2F8UOMsc3yCOjrFCDemtBxaDd%2B%2BDkOs8rYein6%2F5nmGfBJy1yuBoeaQhuHWNZGeMw%2BbFnygxPShUh%2FiKjfcmqmcwm7Y5hDG4Sc3ykHVSQzS6bqK1NLcJit5gsLPknO5Cf292JsHfF2wN2itGqjSH2kvakvwz0mvqyYNPf5H11y2BSKleyaf9t2W9BnH5yoh2Z0TsV2C6dPNDKbpztDptRU7I62eEs4iUIGeeenYTpRxA2hlD%2BSA71e38jnNwG4RVHnJDK45Sb5%2F83ZTQaeHVov7M25bceHOveXASYW3Uw6LyNxAY6pgH8HrdhRASwUDA0CNa%2F4iJZ2JqRvOOfvZdauf3KCZA1PKfCbwzB7OyhpfIjWDbiL2ZB%2BjIgvgG6o%2FOYQNt4A%2F9CFS6UpoQRUMg2%2BvhEc%2BVIRwKapiWJJ00dDIp8jeIi06TpHS4oxE1j6gYD7dwjskX9olqyal2558alx7ePMBViKf3ztkzGVpoULFYC8EHeOW6QYnhIAzw0QFCOBBgT9WU7Ywj3l4M%2F&X-Amz-Signature=59a516aee4274a9b1d8f085af1585d2a0dbc0d37e39d7cabc0021b28086a5126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
