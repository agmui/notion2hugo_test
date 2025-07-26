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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5ARID3W%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGU109HTnS256J4XJEsmIjpsTeG7XJ89IoKU5mUlkY7qAiAFuY5SeSDXNYLDOeKbyvlKFrawuFUQsZGpHKR6i44%2BMSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMm0tHf5qBmmia%2B3j5KtwDRh%2Bjki0hgvbI3z0hc7eUDVcrOzieRP5Oiq4Lra9dqsQfEyiKzvFD7rcaXuGExus25CaUaQZlj0y3hsRCz%2BPrhZR0R51dZQV43NZ4nRxv8R87X9229ynOT2x4zLyGazs5PlWZMHrVE9PtxpXCviyjn8WORHMf4BRuN0u2Rzrc%2Bmv5rPeezLkEsEXGkab9PsNdz8I%2F%2BPtdhQYqARdHzv3954q0B418PzZQbOept7Eq4rfZm7Jc3munx3RGKT4uQjQ%2BK5fs8%2BPAx1y1MfpeFKWPpVQt%2FQYN7o74yV9jji%2FiGqWgxBaqCTokaJ5xXGt6t7myUkVogza8uERT4m7Ykd2gjU9wc0wjRHvbod3hoRBjJhZ8hmdGW%2FRXfs9m3KrFSq8ya%2BLpdI3py7wrua1QUKi8dR%2BibuiZVGVm5LYQEh5wln84Djk7Y3EHg1p4sTNsaeXQ4%2FI2%2B3oPLrcuLIwj3yFiKWrYRPrs23wNkG65MPIYQB4EcezktilKCIoza%2F2zBXCldoYRbAwZycU4IBgaDRxRLWo0C3Iz%2BiQFGjQvhcef56HxpVn2peZRTv6iPDcgmBEa%2BXEcWf%2FkgigNJvrEEnjM1nTrddi%2FjQhI74LdIGBzi8%2F6PnRCXydYZhRlB%2F4w7cCTxAY6pgEPTOY8UFFg5eVcYDsyL7dei5ugBjz8ATBHrUvEThTVWa4JrAiW0Y8JaVEPaySDiS8zfoXWwFtCVSxw1jF1amwC5tn%2FDTIXsIbwb7bk%2Bs%2FRVTf77ncfOZUvvq%2FJs7jiqBsp7xdZXCe67eKODPh6%2Bhu4beYu1HV%2Fna6ELMFT%2B93dAXyfPatk40PCh7xuDzow8g4jtoRBRK7mWNFVYyNn5VKfuZRqac7O&X-Amz-Signature=4807bd9397b19dbff0abd0706ecc1966585d5480ba59e79f81d5da2c2d445cf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5ARID3W%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGU109HTnS256J4XJEsmIjpsTeG7XJ89IoKU5mUlkY7qAiAFuY5SeSDXNYLDOeKbyvlKFrawuFUQsZGpHKR6i44%2BMSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMm0tHf5qBmmia%2B3j5KtwDRh%2Bjki0hgvbI3z0hc7eUDVcrOzieRP5Oiq4Lra9dqsQfEyiKzvFD7rcaXuGExus25CaUaQZlj0y3hsRCz%2BPrhZR0R51dZQV43NZ4nRxv8R87X9229ynOT2x4zLyGazs5PlWZMHrVE9PtxpXCviyjn8WORHMf4BRuN0u2Rzrc%2Bmv5rPeezLkEsEXGkab9PsNdz8I%2F%2BPtdhQYqARdHzv3954q0B418PzZQbOept7Eq4rfZm7Jc3munx3RGKT4uQjQ%2BK5fs8%2BPAx1y1MfpeFKWPpVQt%2FQYN7o74yV9jji%2FiGqWgxBaqCTokaJ5xXGt6t7myUkVogza8uERT4m7Ykd2gjU9wc0wjRHvbod3hoRBjJhZ8hmdGW%2FRXfs9m3KrFSq8ya%2BLpdI3py7wrua1QUKi8dR%2BibuiZVGVm5LYQEh5wln84Djk7Y3EHg1p4sTNsaeXQ4%2FI2%2B3oPLrcuLIwj3yFiKWrYRPrs23wNkG65MPIYQB4EcezktilKCIoza%2F2zBXCldoYRbAwZycU4IBgaDRxRLWo0C3Iz%2BiQFGjQvhcef56HxpVn2peZRTv6iPDcgmBEa%2BXEcWf%2FkgigNJvrEEnjM1nTrddi%2FjQhI74LdIGBzi8%2F6PnRCXydYZhRlB%2F4w7cCTxAY6pgEPTOY8UFFg5eVcYDsyL7dei5ugBjz8ATBHrUvEThTVWa4JrAiW0Y8JaVEPaySDiS8zfoXWwFtCVSxw1jF1amwC5tn%2FDTIXsIbwb7bk%2Bs%2FRVTf77ncfOZUvvq%2FJs7jiqBsp7xdZXCe67eKODPh6%2Bhu4beYu1HV%2Fna6ELMFT%2B93dAXyfPatk40PCh7xuDzow8g4jtoRBRK7mWNFVYyNn5VKfuZRqac7O&X-Amz-Signature=fbac607d4a05034d3344768fa43c8c582aa91af5236634a99030d8c947aeb054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5ARID3W%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGU109HTnS256J4XJEsmIjpsTeG7XJ89IoKU5mUlkY7qAiAFuY5SeSDXNYLDOeKbyvlKFrawuFUQsZGpHKR6i44%2BMSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMm0tHf5qBmmia%2B3j5KtwDRh%2Bjki0hgvbI3z0hc7eUDVcrOzieRP5Oiq4Lra9dqsQfEyiKzvFD7rcaXuGExus25CaUaQZlj0y3hsRCz%2BPrhZR0R51dZQV43NZ4nRxv8R87X9229ynOT2x4zLyGazs5PlWZMHrVE9PtxpXCviyjn8WORHMf4BRuN0u2Rzrc%2Bmv5rPeezLkEsEXGkab9PsNdz8I%2F%2BPtdhQYqARdHzv3954q0B418PzZQbOept7Eq4rfZm7Jc3munx3RGKT4uQjQ%2BK5fs8%2BPAx1y1MfpeFKWPpVQt%2FQYN7o74yV9jji%2FiGqWgxBaqCTokaJ5xXGt6t7myUkVogza8uERT4m7Ykd2gjU9wc0wjRHvbod3hoRBjJhZ8hmdGW%2FRXfs9m3KrFSq8ya%2BLpdI3py7wrua1QUKi8dR%2BibuiZVGVm5LYQEh5wln84Djk7Y3EHg1p4sTNsaeXQ4%2FI2%2B3oPLrcuLIwj3yFiKWrYRPrs23wNkG65MPIYQB4EcezktilKCIoza%2F2zBXCldoYRbAwZycU4IBgaDRxRLWo0C3Iz%2BiQFGjQvhcef56HxpVn2peZRTv6iPDcgmBEa%2BXEcWf%2FkgigNJvrEEnjM1nTrddi%2FjQhI74LdIGBzi8%2F6PnRCXydYZhRlB%2F4w7cCTxAY6pgEPTOY8UFFg5eVcYDsyL7dei5ugBjz8ATBHrUvEThTVWa4JrAiW0Y8JaVEPaySDiS8zfoXWwFtCVSxw1jF1amwC5tn%2FDTIXsIbwb7bk%2Bs%2FRVTf77ncfOZUvvq%2FJs7jiqBsp7xdZXCe67eKODPh6%2Bhu4beYu1HV%2Fna6ELMFT%2B93dAXyfPatk40PCh7xuDzow8g4jtoRBRK7mWNFVYyNn5VKfuZRqac7O&X-Amz-Signature=b1e3d4b62ac70b3c41949b888ebc68bea4e76571423e7b2a0395baea962d2484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5ARID3W%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGU109HTnS256J4XJEsmIjpsTeG7XJ89IoKU5mUlkY7qAiAFuY5SeSDXNYLDOeKbyvlKFrawuFUQsZGpHKR6i44%2BMSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMm0tHf5qBmmia%2B3j5KtwDRh%2Bjki0hgvbI3z0hc7eUDVcrOzieRP5Oiq4Lra9dqsQfEyiKzvFD7rcaXuGExus25CaUaQZlj0y3hsRCz%2BPrhZR0R51dZQV43NZ4nRxv8R87X9229ynOT2x4zLyGazs5PlWZMHrVE9PtxpXCviyjn8WORHMf4BRuN0u2Rzrc%2Bmv5rPeezLkEsEXGkab9PsNdz8I%2F%2BPtdhQYqARdHzv3954q0B418PzZQbOept7Eq4rfZm7Jc3munx3RGKT4uQjQ%2BK5fs8%2BPAx1y1MfpeFKWPpVQt%2FQYN7o74yV9jji%2FiGqWgxBaqCTokaJ5xXGt6t7myUkVogza8uERT4m7Ykd2gjU9wc0wjRHvbod3hoRBjJhZ8hmdGW%2FRXfs9m3KrFSq8ya%2BLpdI3py7wrua1QUKi8dR%2BibuiZVGVm5LYQEh5wln84Djk7Y3EHg1p4sTNsaeXQ4%2FI2%2B3oPLrcuLIwj3yFiKWrYRPrs23wNkG65MPIYQB4EcezktilKCIoza%2F2zBXCldoYRbAwZycU4IBgaDRxRLWo0C3Iz%2BiQFGjQvhcef56HxpVn2peZRTv6iPDcgmBEa%2BXEcWf%2FkgigNJvrEEnjM1nTrddi%2FjQhI74LdIGBzi8%2F6PnRCXydYZhRlB%2F4w7cCTxAY6pgEPTOY8UFFg5eVcYDsyL7dei5ugBjz8ATBHrUvEThTVWa4JrAiW0Y8JaVEPaySDiS8zfoXWwFtCVSxw1jF1amwC5tn%2FDTIXsIbwb7bk%2Bs%2FRVTf77ncfOZUvvq%2FJs7jiqBsp7xdZXCe67eKODPh6%2Bhu4beYu1HV%2Fna6ELMFT%2B93dAXyfPatk40PCh7xuDzow8g4jtoRBRK7mWNFVYyNn5VKfuZRqac7O&X-Amz-Signature=9ab34b8dd114a7f68cd7fbe39ac466af4432fbae0643bdea434b1044d501afea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5ARID3W%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGU109HTnS256J4XJEsmIjpsTeG7XJ89IoKU5mUlkY7qAiAFuY5SeSDXNYLDOeKbyvlKFrawuFUQsZGpHKR6i44%2BMSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMm0tHf5qBmmia%2B3j5KtwDRh%2Bjki0hgvbI3z0hc7eUDVcrOzieRP5Oiq4Lra9dqsQfEyiKzvFD7rcaXuGExus25CaUaQZlj0y3hsRCz%2BPrhZR0R51dZQV43NZ4nRxv8R87X9229ynOT2x4zLyGazs5PlWZMHrVE9PtxpXCviyjn8WORHMf4BRuN0u2Rzrc%2Bmv5rPeezLkEsEXGkab9PsNdz8I%2F%2BPtdhQYqARdHzv3954q0B418PzZQbOept7Eq4rfZm7Jc3munx3RGKT4uQjQ%2BK5fs8%2BPAx1y1MfpeFKWPpVQt%2FQYN7o74yV9jji%2FiGqWgxBaqCTokaJ5xXGt6t7myUkVogza8uERT4m7Ykd2gjU9wc0wjRHvbod3hoRBjJhZ8hmdGW%2FRXfs9m3KrFSq8ya%2BLpdI3py7wrua1QUKi8dR%2BibuiZVGVm5LYQEh5wln84Djk7Y3EHg1p4sTNsaeXQ4%2FI2%2B3oPLrcuLIwj3yFiKWrYRPrs23wNkG65MPIYQB4EcezktilKCIoza%2F2zBXCldoYRbAwZycU4IBgaDRxRLWo0C3Iz%2BiQFGjQvhcef56HxpVn2peZRTv6iPDcgmBEa%2BXEcWf%2FkgigNJvrEEnjM1nTrddi%2FjQhI74LdIGBzi8%2F6PnRCXydYZhRlB%2F4w7cCTxAY6pgEPTOY8UFFg5eVcYDsyL7dei5ugBjz8ATBHrUvEThTVWa4JrAiW0Y8JaVEPaySDiS8zfoXWwFtCVSxw1jF1amwC5tn%2FDTIXsIbwb7bk%2Bs%2FRVTf77ncfOZUvvq%2FJs7jiqBsp7xdZXCe67eKODPh6%2Bhu4beYu1HV%2Fna6ELMFT%2B93dAXyfPatk40PCh7xuDzow8g4jtoRBRK7mWNFVYyNn5VKfuZRqac7O&X-Amz-Signature=d34cde326182ca632ddbd1a01916d26cb29d775124b87f015174df34a04d2ce9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5ARID3W%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGU109HTnS256J4XJEsmIjpsTeG7XJ89IoKU5mUlkY7qAiAFuY5SeSDXNYLDOeKbyvlKFrawuFUQsZGpHKR6i44%2BMSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMm0tHf5qBmmia%2B3j5KtwDRh%2Bjki0hgvbI3z0hc7eUDVcrOzieRP5Oiq4Lra9dqsQfEyiKzvFD7rcaXuGExus25CaUaQZlj0y3hsRCz%2BPrhZR0R51dZQV43NZ4nRxv8R87X9229ynOT2x4zLyGazs5PlWZMHrVE9PtxpXCviyjn8WORHMf4BRuN0u2Rzrc%2Bmv5rPeezLkEsEXGkab9PsNdz8I%2F%2BPtdhQYqARdHzv3954q0B418PzZQbOept7Eq4rfZm7Jc3munx3RGKT4uQjQ%2BK5fs8%2BPAx1y1MfpeFKWPpVQt%2FQYN7o74yV9jji%2FiGqWgxBaqCTokaJ5xXGt6t7myUkVogza8uERT4m7Ykd2gjU9wc0wjRHvbod3hoRBjJhZ8hmdGW%2FRXfs9m3KrFSq8ya%2BLpdI3py7wrua1QUKi8dR%2BibuiZVGVm5LYQEh5wln84Djk7Y3EHg1p4sTNsaeXQ4%2FI2%2B3oPLrcuLIwj3yFiKWrYRPrs23wNkG65MPIYQB4EcezktilKCIoza%2F2zBXCldoYRbAwZycU4IBgaDRxRLWo0C3Iz%2BiQFGjQvhcef56HxpVn2peZRTv6iPDcgmBEa%2BXEcWf%2FkgigNJvrEEnjM1nTrddi%2FjQhI74LdIGBzi8%2F6PnRCXydYZhRlB%2F4w7cCTxAY6pgEPTOY8UFFg5eVcYDsyL7dei5ugBjz8ATBHrUvEThTVWa4JrAiW0Y8JaVEPaySDiS8zfoXWwFtCVSxw1jF1amwC5tn%2FDTIXsIbwb7bk%2Bs%2FRVTf77ncfOZUvvq%2FJs7jiqBsp7xdZXCe67eKODPh6%2Bhu4beYu1HV%2Fna6ELMFT%2B93dAXyfPatk40PCh7xuDzow8g4jtoRBRK7mWNFVYyNn5VKfuZRqac7O&X-Amz-Signature=f571f2d55ea28c985dc87dfb75f57b17e67a9de751e68d2ae292ded3c2164eb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5ARID3W%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGU109HTnS256J4XJEsmIjpsTeG7XJ89IoKU5mUlkY7qAiAFuY5SeSDXNYLDOeKbyvlKFrawuFUQsZGpHKR6i44%2BMSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMm0tHf5qBmmia%2B3j5KtwDRh%2Bjki0hgvbI3z0hc7eUDVcrOzieRP5Oiq4Lra9dqsQfEyiKzvFD7rcaXuGExus25CaUaQZlj0y3hsRCz%2BPrhZR0R51dZQV43NZ4nRxv8R87X9229ynOT2x4zLyGazs5PlWZMHrVE9PtxpXCviyjn8WORHMf4BRuN0u2Rzrc%2Bmv5rPeezLkEsEXGkab9PsNdz8I%2F%2BPtdhQYqARdHzv3954q0B418PzZQbOept7Eq4rfZm7Jc3munx3RGKT4uQjQ%2BK5fs8%2BPAx1y1MfpeFKWPpVQt%2FQYN7o74yV9jji%2FiGqWgxBaqCTokaJ5xXGt6t7myUkVogza8uERT4m7Ykd2gjU9wc0wjRHvbod3hoRBjJhZ8hmdGW%2FRXfs9m3KrFSq8ya%2BLpdI3py7wrua1QUKi8dR%2BibuiZVGVm5LYQEh5wln84Djk7Y3EHg1p4sTNsaeXQ4%2FI2%2B3oPLrcuLIwj3yFiKWrYRPrs23wNkG65MPIYQB4EcezktilKCIoza%2F2zBXCldoYRbAwZycU4IBgaDRxRLWo0C3Iz%2BiQFGjQvhcef56HxpVn2peZRTv6iPDcgmBEa%2BXEcWf%2FkgigNJvrEEnjM1nTrddi%2FjQhI74LdIGBzi8%2F6PnRCXydYZhRlB%2F4w7cCTxAY6pgEPTOY8UFFg5eVcYDsyL7dei5ugBjz8ATBHrUvEThTVWa4JrAiW0Y8JaVEPaySDiS8zfoXWwFtCVSxw1jF1amwC5tn%2FDTIXsIbwb7bk%2Bs%2FRVTf77ncfOZUvvq%2FJs7jiqBsp7xdZXCe67eKODPh6%2Bhu4beYu1HV%2Fna6ELMFT%2B93dAXyfPatk40PCh7xuDzow8g4jtoRBRK7mWNFVYyNn5VKfuZRqac7O&X-Amz-Signature=53f9a993936bf6f808df958a959da4fabcf1d8f239df60fc4e5189b62648ea24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5ARID3W%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGU109HTnS256J4XJEsmIjpsTeG7XJ89IoKU5mUlkY7qAiAFuY5SeSDXNYLDOeKbyvlKFrawuFUQsZGpHKR6i44%2BMSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMm0tHf5qBmmia%2B3j5KtwDRh%2Bjki0hgvbI3z0hc7eUDVcrOzieRP5Oiq4Lra9dqsQfEyiKzvFD7rcaXuGExus25CaUaQZlj0y3hsRCz%2BPrhZR0R51dZQV43NZ4nRxv8R87X9229ynOT2x4zLyGazs5PlWZMHrVE9PtxpXCviyjn8WORHMf4BRuN0u2Rzrc%2Bmv5rPeezLkEsEXGkab9PsNdz8I%2F%2BPtdhQYqARdHzv3954q0B418PzZQbOept7Eq4rfZm7Jc3munx3RGKT4uQjQ%2BK5fs8%2BPAx1y1MfpeFKWPpVQt%2FQYN7o74yV9jji%2FiGqWgxBaqCTokaJ5xXGt6t7myUkVogza8uERT4m7Ykd2gjU9wc0wjRHvbod3hoRBjJhZ8hmdGW%2FRXfs9m3KrFSq8ya%2BLpdI3py7wrua1QUKi8dR%2BibuiZVGVm5LYQEh5wln84Djk7Y3EHg1p4sTNsaeXQ4%2FI2%2B3oPLrcuLIwj3yFiKWrYRPrs23wNkG65MPIYQB4EcezktilKCIoza%2F2zBXCldoYRbAwZycU4IBgaDRxRLWo0C3Iz%2BiQFGjQvhcef56HxpVn2peZRTv6iPDcgmBEa%2BXEcWf%2FkgigNJvrEEnjM1nTrddi%2FjQhI74LdIGBzi8%2F6PnRCXydYZhRlB%2F4w7cCTxAY6pgEPTOY8UFFg5eVcYDsyL7dei5ugBjz8ATBHrUvEThTVWa4JrAiW0Y8JaVEPaySDiS8zfoXWwFtCVSxw1jF1amwC5tn%2FDTIXsIbwb7bk%2Bs%2FRVTf77ncfOZUvvq%2FJs7jiqBsp7xdZXCe67eKODPh6%2Bhu4beYu1HV%2Fna6ELMFT%2B93dAXyfPatk40PCh7xuDzow8g4jtoRBRK7mWNFVYyNn5VKfuZRqac7O&X-Amz-Signature=8087b57528e5cde2a0a81bccd26a6ced42d194fb9d994840511007c6c83b3a42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5ARID3W%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGU109HTnS256J4XJEsmIjpsTeG7XJ89IoKU5mUlkY7qAiAFuY5SeSDXNYLDOeKbyvlKFrawuFUQsZGpHKR6i44%2BMSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMm0tHf5qBmmia%2B3j5KtwDRh%2Bjki0hgvbI3z0hc7eUDVcrOzieRP5Oiq4Lra9dqsQfEyiKzvFD7rcaXuGExus25CaUaQZlj0y3hsRCz%2BPrhZR0R51dZQV43NZ4nRxv8R87X9229ynOT2x4zLyGazs5PlWZMHrVE9PtxpXCviyjn8WORHMf4BRuN0u2Rzrc%2Bmv5rPeezLkEsEXGkab9PsNdz8I%2F%2BPtdhQYqARdHzv3954q0B418PzZQbOept7Eq4rfZm7Jc3munx3RGKT4uQjQ%2BK5fs8%2BPAx1y1MfpeFKWPpVQt%2FQYN7o74yV9jji%2FiGqWgxBaqCTokaJ5xXGt6t7myUkVogza8uERT4m7Ykd2gjU9wc0wjRHvbod3hoRBjJhZ8hmdGW%2FRXfs9m3KrFSq8ya%2BLpdI3py7wrua1QUKi8dR%2BibuiZVGVm5LYQEh5wln84Djk7Y3EHg1p4sTNsaeXQ4%2FI2%2B3oPLrcuLIwj3yFiKWrYRPrs23wNkG65MPIYQB4EcezktilKCIoza%2F2zBXCldoYRbAwZycU4IBgaDRxRLWo0C3Iz%2BiQFGjQvhcef56HxpVn2peZRTv6iPDcgmBEa%2BXEcWf%2FkgigNJvrEEnjM1nTrddi%2FjQhI74LdIGBzi8%2F6PnRCXydYZhRlB%2F4w7cCTxAY6pgEPTOY8UFFg5eVcYDsyL7dei5ugBjz8ATBHrUvEThTVWa4JrAiW0Y8JaVEPaySDiS8zfoXWwFtCVSxw1jF1amwC5tn%2FDTIXsIbwb7bk%2Bs%2FRVTf77ncfOZUvvq%2FJs7jiqBsp7xdZXCe67eKODPh6%2Bhu4beYu1HV%2Fna6ELMFT%2B93dAXyfPatk40PCh7xuDzow8g4jtoRBRK7mWNFVYyNn5VKfuZRqac7O&X-Amz-Signature=a4d91aaa5c0bc4807405593343a0f1b784fe04cc6a9b0000e610a685084739bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5ARID3W%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGU109HTnS256J4XJEsmIjpsTeG7XJ89IoKU5mUlkY7qAiAFuY5SeSDXNYLDOeKbyvlKFrawuFUQsZGpHKR6i44%2BMSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMm0tHf5qBmmia%2B3j5KtwDRh%2Bjki0hgvbI3z0hc7eUDVcrOzieRP5Oiq4Lra9dqsQfEyiKzvFD7rcaXuGExus25CaUaQZlj0y3hsRCz%2BPrhZR0R51dZQV43NZ4nRxv8R87X9229ynOT2x4zLyGazs5PlWZMHrVE9PtxpXCviyjn8WORHMf4BRuN0u2Rzrc%2Bmv5rPeezLkEsEXGkab9PsNdz8I%2F%2BPtdhQYqARdHzv3954q0B418PzZQbOept7Eq4rfZm7Jc3munx3RGKT4uQjQ%2BK5fs8%2BPAx1y1MfpeFKWPpVQt%2FQYN7o74yV9jji%2FiGqWgxBaqCTokaJ5xXGt6t7myUkVogza8uERT4m7Ykd2gjU9wc0wjRHvbod3hoRBjJhZ8hmdGW%2FRXfs9m3KrFSq8ya%2BLpdI3py7wrua1QUKi8dR%2BibuiZVGVm5LYQEh5wln84Djk7Y3EHg1p4sTNsaeXQ4%2FI2%2B3oPLrcuLIwj3yFiKWrYRPrs23wNkG65MPIYQB4EcezktilKCIoza%2F2zBXCldoYRbAwZycU4IBgaDRxRLWo0C3Iz%2BiQFGjQvhcef56HxpVn2peZRTv6iPDcgmBEa%2BXEcWf%2FkgigNJvrEEnjM1nTrddi%2FjQhI74LdIGBzi8%2F6PnRCXydYZhRlB%2F4w7cCTxAY6pgEPTOY8UFFg5eVcYDsyL7dei5ugBjz8ATBHrUvEThTVWa4JrAiW0Y8JaVEPaySDiS8zfoXWwFtCVSxw1jF1amwC5tn%2FDTIXsIbwb7bk%2Bs%2FRVTf77ncfOZUvvq%2FJs7jiqBsp7xdZXCe67eKODPh6%2Bhu4beYu1HV%2Fna6ELMFT%2B93dAXyfPatk40PCh7xuDzow8g4jtoRBRK7mWNFVYyNn5VKfuZRqac7O&X-Amz-Signature=726ed4c773daa0432a32497111443c60679cc7c814ee7ef5fa2a134ecfac162b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5ARID3W%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGU109HTnS256J4XJEsmIjpsTeG7XJ89IoKU5mUlkY7qAiAFuY5SeSDXNYLDOeKbyvlKFrawuFUQsZGpHKR6i44%2BMSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMm0tHf5qBmmia%2B3j5KtwDRh%2Bjki0hgvbI3z0hc7eUDVcrOzieRP5Oiq4Lra9dqsQfEyiKzvFD7rcaXuGExus25CaUaQZlj0y3hsRCz%2BPrhZR0R51dZQV43NZ4nRxv8R87X9229ynOT2x4zLyGazs5PlWZMHrVE9PtxpXCviyjn8WORHMf4BRuN0u2Rzrc%2Bmv5rPeezLkEsEXGkab9PsNdz8I%2F%2BPtdhQYqARdHzv3954q0B418PzZQbOept7Eq4rfZm7Jc3munx3RGKT4uQjQ%2BK5fs8%2BPAx1y1MfpeFKWPpVQt%2FQYN7o74yV9jji%2FiGqWgxBaqCTokaJ5xXGt6t7myUkVogza8uERT4m7Ykd2gjU9wc0wjRHvbod3hoRBjJhZ8hmdGW%2FRXfs9m3KrFSq8ya%2BLpdI3py7wrua1QUKi8dR%2BibuiZVGVm5LYQEh5wln84Djk7Y3EHg1p4sTNsaeXQ4%2FI2%2B3oPLrcuLIwj3yFiKWrYRPrs23wNkG65MPIYQB4EcezktilKCIoza%2F2zBXCldoYRbAwZycU4IBgaDRxRLWo0C3Iz%2BiQFGjQvhcef56HxpVn2peZRTv6iPDcgmBEa%2BXEcWf%2FkgigNJvrEEnjM1nTrddi%2FjQhI74LdIGBzi8%2F6PnRCXydYZhRlB%2F4w7cCTxAY6pgEPTOY8UFFg5eVcYDsyL7dei5ugBjz8ATBHrUvEThTVWa4JrAiW0Y8JaVEPaySDiS8zfoXWwFtCVSxw1jF1amwC5tn%2FDTIXsIbwb7bk%2Bs%2FRVTf77ncfOZUvvq%2FJs7jiqBsp7xdZXCe67eKODPh6%2Bhu4beYu1HV%2Fna6ELMFT%2B93dAXyfPatk40PCh7xuDzow8g4jtoRBRK7mWNFVYyNn5VKfuZRqac7O&X-Amz-Signature=ce468ce341f4b8f4fb42202991e3f7483962d6310f60811800fa413255dda558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5ARID3W%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGU109HTnS256J4XJEsmIjpsTeG7XJ89IoKU5mUlkY7qAiAFuY5SeSDXNYLDOeKbyvlKFrawuFUQsZGpHKR6i44%2BMSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMm0tHf5qBmmia%2B3j5KtwDRh%2Bjki0hgvbI3z0hc7eUDVcrOzieRP5Oiq4Lra9dqsQfEyiKzvFD7rcaXuGExus25CaUaQZlj0y3hsRCz%2BPrhZR0R51dZQV43NZ4nRxv8R87X9229ynOT2x4zLyGazs5PlWZMHrVE9PtxpXCviyjn8WORHMf4BRuN0u2Rzrc%2Bmv5rPeezLkEsEXGkab9PsNdz8I%2F%2BPtdhQYqARdHzv3954q0B418PzZQbOept7Eq4rfZm7Jc3munx3RGKT4uQjQ%2BK5fs8%2BPAx1y1MfpeFKWPpVQt%2FQYN7o74yV9jji%2FiGqWgxBaqCTokaJ5xXGt6t7myUkVogza8uERT4m7Ykd2gjU9wc0wjRHvbod3hoRBjJhZ8hmdGW%2FRXfs9m3KrFSq8ya%2BLpdI3py7wrua1QUKi8dR%2BibuiZVGVm5LYQEh5wln84Djk7Y3EHg1p4sTNsaeXQ4%2FI2%2B3oPLrcuLIwj3yFiKWrYRPrs23wNkG65MPIYQB4EcezktilKCIoza%2F2zBXCldoYRbAwZycU4IBgaDRxRLWo0C3Iz%2BiQFGjQvhcef56HxpVn2peZRTv6iPDcgmBEa%2BXEcWf%2FkgigNJvrEEnjM1nTrddi%2FjQhI74LdIGBzi8%2F6PnRCXydYZhRlB%2F4w7cCTxAY6pgEPTOY8UFFg5eVcYDsyL7dei5ugBjz8ATBHrUvEThTVWa4JrAiW0Y8JaVEPaySDiS8zfoXWwFtCVSxw1jF1amwC5tn%2FDTIXsIbwb7bk%2Bs%2FRVTf77ncfOZUvvq%2FJs7jiqBsp7xdZXCe67eKODPh6%2Bhu4beYu1HV%2Fna6ELMFT%2B93dAXyfPatk40PCh7xuDzow8g4jtoRBRK7mWNFVYyNn5VKfuZRqac7O&X-Amz-Signature=579d8c6b11a9800c989f3fbe6331ad06724cdbe228cd9d79514e589a895f2744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5ARID3W%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGU109HTnS256J4XJEsmIjpsTeG7XJ89IoKU5mUlkY7qAiAFuY5SeSDXNYLDOeKbyvlKFrawuFUQsZGpHKR6i44%2BMSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMm0tHf5qBmmia%2B3j5KtwDRh%2Bjki0hgvbI3z0hc7eUDVcrOzieRP5Oiq4Lra9dqsQfEyiKzvFD7rcaXuGExus25CaUaQZlj0y3hsRCz%2BPrhZR0R51dZQV43NZ4nRxv8R87X9229ynOT2x4zLyGazs5PlWZMHrVE9PtxpXCviyjn8WORHMf4BRuN0u2Rzrc%2Bmv5rPeezLkEsEXGkab9PsNdz8I%2F%2BPtdhQYqARdHzv3954q0B418PzZQbOept7Eq4rfZm7Jc3munx3RGKT4uQjQ%2BK5fs8%2BPAx1y1MfpeFKWPpVQt%2FQYN7o74yV9jji%2FiGqWgxBaqCTokaJ5xXGt6t7myUkVogza8uERT4m7Ykd2gjU9wc0wjRHvbod3hoRBjJhZ8hmdGW%2FRXfs9m3KrFSq8ya%2BLpdI3py7wrua1QUKi8dR%2BibuiZVGVm5LYQEh5wln84Djk7Y3EHg1p4sTNsaeXQ4%2FI2%2B3oPLrcuLIwj3yFiKWrYRPrs23wNkG65MPIYQB4EcezktilKCIoza%2F2zBXCldoYRbAwZycU4IBgaDRxRLWo0C3Iz%2BiQFGjQvhcef56HxpVn2peZRTv6iPDcgmBEa%2BXEcWf%2FkgigNJvrEEnjM1nTrddi%2FjQhI74LdIGBzi8%2F6PnRCXydYZhRlB%2F4w7cCTxAY6pgEPTOY8UFFg5eVcYDsyL7dei5ugBjz8ATBHrUvEThTVWa4JrAiW0Y8JaVEPaySDiS8zfoXWwFtCVSxw1jF1amwC5tn%2FDTIXsIbwb7bk%2Bs%2FRVTf77ncfOZUvvq%2FJs7jiqBsp7xdZXCe67eKODPh6%2Bhu4beYu1HV%2Fna6ELMFT%2B93dAXyfPatk40PCh7xuDzow8g4jtoRBRK7mWNFVYyNn5VKfuZRqac7O&X-Amz-Signature=72c21c979a675095b77c006dc7bc0c7e91427b94e78b035d15d0b1df0238278f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5ARID3W%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGU109HTnS256J4XJEsmIjpsTeG7XJ89IoKU5mUlkY7qAiAFuY5SeSDXNYLDOeKbyvlKFrawuFUQsZGpHKR6i44%2BMSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMm0tHf5qBmmia%2B3j5KtwDRh%2Bjki0hgvbI3z0hc7eUDVcrOzieRP5Oiq4Lra9dqsQfEyiKzvFD7rcaXuGExus25CaUaQZlj0y3hsRCz%2BPrhZR0R51dZQV43NZ4nRxv8R87X9229ynOT2x4zLyGazs5PlWZMHrVE9PtxpXCviyjn8WORHMf4BRuN0u2Rzrc%2Bmv5rPeezLkEsEXGkab9PsNdz8I%2F%2BPtdhQYqARdHzv3954q0B418PzZQbOept7Eq4rfZm7Jc3munx3RGKT4uQjQ%2BK5fs8%2BPAx1y1MfpeFKWPpVQt%2FQYN7o74yV9jji%2FiGqWgxBaqCTokaJ5xXGt6t7myUkVogza8uERT4m7Ykd2gjU9wc0wjRHvbod3hoRBjJhZ8hmdGW%2FRXfs9m3KrFSq8ya%2BLpdI3py7wrua1QUKi8dR%2BibuiZVGVm5LYQEh5wln84Djk7Y3EHg1p4sTNsaeXQ4%2FI2%2B3oPLrcuLIwj3yFiKWrYRPrs23wNkG65MPIYQB4EcezktilKCIoza%2F2zBXCldoYRbAwZycU4IBgaDRxRLWo0C3Iz%2BiQFGjQvhcef56HxpVn2peZRTv6iPDcgmBEa%2BXEcWf%2FkgigNJvrEEnjM1nTrddi%2FjQhI74LdIGBzi8%2F6PnRCXydYZhRlB%2F4w7cCTxAY6pgEPTOY8UFFg5eVcYDsyL7dei5ugBjz8ATBHrUvEThTVWa4JrAiW0Y8JaVEPaySDiS8zfoXWwFtCVSxw1jF1amwC5tn%2FDTIXsIbwb7bk%2Bs%2FRVTf77ncfOZUvvq%2FJs7jiqBsp7xdZXCe67eKODPh6%2Bhu4beYu1HV%2Fna6ELMFT%2B93dAXyfPatk40PCh7xuDzow8g4jtoRBRK7mWNFVYyNn5VKfuZRqac7O&X-Amz-Signature=c99f25ea54af85c14938695a162ab98201d1d16f4d1ea3f3a5a9ff61b87fac82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAZLHRM4%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDsrsGqvxBfzz2NnRs%2FCECdJUz%2B7jxQ0%2FINtTdmvMpM5wIgFKdxqXaIw4re%2BEhi642rCVwTLgu%2FOoyKnjXAfHnIsLYq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDALv%2FRXWOA0P2unbCSrcA4cbNClHkpPUW9jxHjyI6QrPAhVkiiJBkMoRr03jGJInj1KTsFWGOZ%2F6jzSe9SExJ2bcc96H9inrulHqVW34mQFmp23uwOnF%2B4SMkeJ%2BwiDN04LZJ3m%2B4CQSDKPzpwsg9bm3GH7%2BrfNfrWRYZQV4R0AqcyZFgbLKqEvWZ9Ylc%2B8nWkB52aezwPnohOH98sq6NksUbtb7jBlTX8VACA2Ddn27vwpWyxoTQtXlxHOGeXX8XAZqhb48PpCAchJgt%2FqLBjTHeJCBn%2BdpbfijqhwwxfApWHEIRsuWZcWGwKlHAz7H0PNEXVVKkpf%2BnnEiCcSx4hU6NdYQDpwlIYj7EgB3sDtJBpoHG4%2Fzo2d26XgTUByVm6a1G0qNmM4PcqkwKIO%2BZQyNGp9wRIc0dNoTsek7uBFI7T6npClDeNmm964XoPguUPqvTtSap4K%2FjdR%2FlIiL9DXLnNC097cSbghNUDi%2FgcLodm2JbQuTc8Ukh4jlxg6lJBH8oduvAcf6G9j%2BH8ohk8ORClwnE8v%2BgPWQjiin%2FUMR4OktunvYq%2FTz%2Fb4tXk9FFOK8C6BnGwszKxx7v%2F2xu6QrQaXsxpi4%2Bu0gQvrGb33YsN%2FIi3eg7Ejl3o2KvTTQxxvq5%2FVP0kFJgUKJMK3Bk8QGOqUBYTK8Uc%2BeFKl2vyw8NkSB7NrCgGlvEcP1dRUaOFIt8MI2OoA7nAm8pQRzFzCPJFDGv7bXE5LzQDRgu4g%2FMOh%2Fg3%2FL4InAohj%2B1ZkNJO5TvJyhCu7gVvnSGeemSv%2Fb7K2EuoDA3I33xGUysrt74g4xRNRNQZQFsLlm%2FU%2BjWhurosLbfNlDYNq4s1NgELugE8LoweFTTI4LodOLSPKJoLWpA9oZXpuu&X-Amz-Signature=cbab17ab95746293c26528bc0b18220f10b1d952cd01719d3cd53557dfde49fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAZLHRM4%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDsrsGqvxBfzz2NnRs%2FCECdJUz%2B7jxQ0%2FINtTdmvMpM5wIgFKdxqXaIw4re%2BEhi642rCVwTLgu%2FOoyKnjXAfHnIsLYq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDALv%2FRXWOA0P2unbCSrcA4cbNClHkpPUW9jxHjyI6QrPAhVkiiJBkMoRr03jGJInj1KTsFWGOZ%2F6jzSe9SExJ2bcc96H9inrulHqVW34mQFmp23uwOnF%2B4SMkeJ%2BwiDN04LZJ3m%2B4CQSDKPzpwsg9bm3GH7%2BrfNfrWRYZQV4R0AqcyZFgbLKqEvWZ9Ylc%2B8nWkB52aezwPnohOH98sq6NksUbtb7jBlTX8VACA2Ddn27vwpWyxoTQtXlxHOGeXX8XAZqhb48PpCAchJgt%2FqLBjTHeJCBn%2BdpbfijqhwwxfApWHEIRsuWZcWGwKlHAz7H0PNEXVVKkpf%2BnnEiCcSx4hU6NdYQDpwlIYj7EgB3sDtJBpoHG4%2Fzo2d26XgTUByVm6a1G0qNmM4PcqkwKIO%2BZQyNGp9wRIc0dNoTsek7uBFI7T6npClDeNmm964XoPguUPqvTtSap4K%2FjdR%2FlIiL9DXLnNC097cSbghNUDi%2FgcLodm2JbQuTc8Ukh4jlxg6lJBH8oduvAcf6G9j%2BH8ohk8ORClwnE8v%2BgPWQjiin%2FUMR4OktunvYq%2FTz%2Fb4tXk9FFOK8C6BnGwszKxx7v%2F2xu6QrQaXsxpi4%2Bu0gQvrGb33YsN%2FIi3eg7Ejl3o2KvTTQxxvq5%2FVP0kFJgUKJMK3Bk8QGOqUBYTK8Uc%2BeFKl2vyw8NkSB7NrCgGlvEcP1dRUaOFIt8MI2OoA7nAm8pQRzFzCPJFDGv7bXE5LzQDRgu4g%2FMOh%2Fg3%2FL4InAohj%2B1ZkNJO5TvJyhCu7gVvnSGeemSv%2Fb7K2EuoDA3I33xGUysrt74g4xRNRNQZQFsLlm%2FU%2BjWhurosLbfNlDYNq4s1NgELugE8LoweFTTI4LodOLSPKJoLWpA9oZXpuu&X-Amz-Signature=69cec37538b3354b573f36fc297c542842cad65aff64c943afa3e100944dc789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAZLHRM4%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDsrsGqvxBfzz2NnRs%2FCECdJUz%2B7jxQ0%2FINtTdmvMpM5wIgFKdxqXaIw4re%2BEhi642rCVwTLgu%2FOoyKnjXAfHnIsLYq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDALv%2FRXWOA0P2unbCSrcA4cbNClHkpPUW9jxHjyI6QrPAhVkiiJBkMoRr03jGJInj1KTsFWGOZ%2F6jzSe9SExJ2bcc96H9inrulHqVW34mQFmp23uwOnF%2B4SMkeJ%2BwiDN04LZJ3m%2B4CQSDKPzpwsg9bm3GH7%2BrfNfrWRYZQV4R0AqcyZFgbLKqEvWZ9Ylc%2B8nWkB52aezwPnohOH98sq6NksUbtb7jBlTX8VACA2Ddn27vwpWyxoTQtXlxHOGeXX8XAZqhb48PpCAchJgt%2FqLBjTHeJCBn%2BdpbfijqhwwxfApWHEIRsuWZcWGwKlHAz7H0PNEXVVKkpf%2BnnEiCcSx4hU6NdYQDpwlIYj7EgB3sDtJBpoHG4%2Fzo2d26XgTUByVm6a1G0qNmM4PcqkwKIO%2BZQyNGp9wRIc0dNoTsek7uBFI7T6npClDeNmm964XoPguUPqvTtSap4K%2FjdR%2FlIiL9DXLnNC097cSbghNUDi%2FgcLodm2JbQuTc8Ukh4jlxg6lJBH8oduvAcf6G9j%2BH8ohk8ORClwnE8v%2BgPWQjiin%2FUMR4OktunvYq%2FTz%2Fb4tXk9FFOK8C6BnGwszKxx7v%2F2xu6QrQaXsxpi4%2Bu0gQvrGb33YsN%2FIi3eg7Ejl3o2KvTTQxxvq5%2FVP0kFJgUKJMK3Bk8QGOqUBYTK8Uc%2BeFKl2vyw8NkSB7NrCgGlvEcP1dRUaOFIt8MI2OoA7nAm8pQRzFzCPJFDGv7bXE5LzQDRgu4g%2FMOh%2Fg3%2FL4InAohj%2B1ZkNJO5TvJyhCu7gVvnSGeemSv%2Fb7K2EuoDA3I33xGUysrt74g4xRNRNQZQFsLlm%2FU%2BjWhurosLbfNlDYNq4s1NgELugE8LoweFTTI4LodOLSPKJoLWpA9oZXpuu&X-Amz-Signature=66a65aea2386de3e797e3f1a848dae9dc15a9497501e4bf81ab407c532f4058d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAZLHRM4%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDsrsGqvxBfzz2NnRs%2FCECdJUz%2B7jxQ0%2FINtTdmvMpM5wIgFKdxqXaIw4re%2BEhi642rCVwTLgu%2FOoyKnjXAfHnIsLYq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDALv%2FRXWOA0P2unbCSrcA4cbNClHkpPUW9jxHjyI6QrPAhVkiiJBkMoRr03jGJInj1KTsFWGOZ%2F6jzSe9SExJ2bcc96H9inrulHqVW34mQFmp23uwOnF%2B4SMkeJ%2BwiDN04LZJ3m%2B4CQSDKPzpwsg9bm3GH7%2BrfNfrWRYZQV4R0AqcyZFgbLKqEvWZ9Ylc%2B8nWkB52aezwPnohOH98sq6NksUbtb7jBlTX8VACA2Ddn27vwpWyxoTQtXlxHOGeXX8XAZqhb48PpCAchJgt%2FqLBjTHeJCBn%2BdpbfijqhwwxfApWHEIRsuWZcWGwKlHAz7H0PNEXVVKkpf%2BnnEiCcSx4hU6NdYQDpwlIYj7EgB3sDtJBpoHG4%2Fzo2d26XgTUByVm6a1G0qNmM4PcqkwKIO%2BZQyNGp9wRIc0dNoTsek7uBFI7T6npClDeNmm964XoPguUPqvTtSap4K%2FjdR%2FlIiL9DXLnNC097cSbghNUDi%2FgcLodm2JbQuTc8Ukh4jlxg6lJBH8oduvAcf6G9j%2BH8ohk8ORClwnE8v%2BgPWQjiin%2FUMR4OktunvYq%2FTz%2Fb4tXk9FFOK8C6BnGwszKxx7v%2F2xu6QrQaXsxpi4%2Bu0gQvrGb33YsN%2FIi3eg7Ejl3o2KvTTQxxvq5%2FVP0kFJgUKJMK3Bk8QGOqUBYTK8Uc%2BeFKl2vyw8NkSB7NrCgGlvEcP1dRUaOFIt8MI2OoA7nAm8pQRzFzCPJFDGv7bXE5LzQDRgu4g%2FMOh%2Fg3%2FL4InAohj%2B1ZkNJO5TvJyhCu7gVvnSGeemSv%2Fb7K2EuoDA3I33xGUysrt74g4xRNRNQZQFsLlm%2FU%2BjWhurosLbfNlDYNq4s1NgELugE8LoweFTTI4LodOLSPKJoLWpA9oZXpuu&X-Amz-Signature=649dcc98d860144fa3f49ffdaa89e7f71505a615ddd2922483917e0b20a43a71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAZLHRM4%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDsrsGqvxBfzz2NnRs%2FCECdJUz%2B7jxQ0%2FINtTdmvMpM5wIgFKdxqXaIw4re%2BEhi642rCVwTLgu%2FOoyKnjXAfHnIsLYq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDALv%2FRXWOA0P2unbCSrcA4cbNClHkpPUW9jxHjyI6QrPAhVkiiJBkMoRr03jGJInj1KTsFWGOZ%2F6jzSe9SExJ2bcc96H9inrulHqVW34mQFmp23uwOnF%2B4SMkeJ%2BwiDN04LZJ3m%2B4CQSDKPzpwsg9bm3GH7%2BrfNfrWRYZQV4R0AqcyZFgbLKqEvWZ9Ylc%2B8nWkB52aezwPnohOH98sq6NksUbtb7jBlTX8VACA2Ddn27vwpWyxoTQtXlxHOGeXX8XAZqhb48PpCAchJgt%2FqLBjTHeJCBn%2BdpbfijqhwwxfApWHEIRsuWZcWGwKlHAz7H0PNEXVVKkpf%2BnnEiCcSx4hU6NdYQDpwlIYj7EgB3sDtJBpoHG4%2Fzo2d26XgTUByVm6a1G0qNmM4PcqkwKIO%2BZQyNGp9wRIc0dNoTsek7uBFI7T6npClDeNmm964XoPguUPqvTtSap4K%2FjdR%2FlIiL9DXLnNC097cSbghNUDi%2FgcLodm2JbQuTc8Ukh4jlxg6lJBH8oduvAcf6G9j%2BH8ohk8ORClwnE8v%2BgPWQjiin%2FUMR4OktunvYq%2FTz%2Fb4tXk9FFOK8C6BnGwszKxx7v%2F2xu6QrQaXsxpi4%2Bu0gQvrGb33YsN%2FIi3eg7Ejl3o2KvTTQxxvq5%2FVP0kFJgUKJMK3Bk8QGOqUBYTK8Uc%2BeFKl2vyw8NkSB7NrCgGlvEcP1dRUaOFIt8MI2OoA7nAm8pQRzFzCPJFDGv7bXE5LzQDRgu4g%2FMOh%2Fg3%2FL4InAohj%2B1ZkNJO5TvJyhCu7gVvnSGeemSv%2Fb7K2EuoDA3I33xGUysrt74g4xRNRNQZQFsLlm%2FU%2BjWhurosLbfNlDYNq4s1NgELugE8LoweFTTI4LodOLSPKJoLWpA9oZXpuu&X-Amz-Signature=30865feb6d244936d7428a39a5db06c53d5a687e471566c0b69e52a46059e62d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAZLHRM4%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDsrsGqvxBfzz2NnRs%2FCECdJUz%2B7jxQ0%2FINtTdmvMpM5wIgFKdxqXaIw4re%2BEhi642rCVwTLgu%2FOoyKnjXAfHnIsLYq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDALv%2FRXWOA0P2unbCSrcA4cbNClHkpPUW9jxHjyI6QrPAhVkiiJBkMoRr03jGJInj1KTsFWGOZ%2F6jzSe9SExJ2bcc96H9inrulHqVW34mQFmp23uwOnF%2B4SMkeJ%2BwiDN04LZJ3m%2B4CQSDKPzpwsg9bm3GH7%2BrfNfrWRYZQV4R0AqcyZFgbLKqEvWZ9Ylc%2B8nWkB52aezwPnohOH98sq6NksUbtb7jBlTX8VACA2Ddn27vwpWyxoTQtXlxHOGeXX8XAZqhb48PpCAchJgt%2FqLBjTHeJCBn%2BdpbfijqhwwxfApWHEIRsuWZcWGwKlHAz7H0PNEXVVKkpf%2BnnEiCcSx4hU6NdYQDpwlIYj7EgB3sDtJBpoHG4%2Fzo2d26XgTUByVm6a1G0qNmM4PcqkwKIO%2BZQyNGp9wRIc0dNoTsek7uBFI7T6npClDeNmm964XoPguUPqvTtSap4K%2FjdR%2FlIiL9DXLnNC097cSbghNUDi%2FgcLodm2JbQuTc8Ukh4jlxg6lJBH8oduvAcf6G9j%2BH8ohk8ORClwnE8v%2BgPWQjiin%2FUMR4OktunvYq%2FTz%2Fb4tXk9FFOK8C6BnGwszKxx7v%2F2xu6QrQaXsxpi4%2Bu0gQvrGb33YsN%2FIi3eg7Ejl3o2KvTTQxxvq5%2FVP0kFJgUKJMK3Bk8QGOqUBYTK8Uc%2BeFKl2vyw8NkSB7NrCgGlvEcP1dRUaOFIt8MI2OoA7nAm8pQRzFzCPJFDGv7bXE5LzQDRgu4g%2FMOh%2Fg3%2FL4InAohj%2B1ZkNJO5TvJyhCu7gVvnSGeemSv%2Fb7K2EuoDA3I33xGUysrt74g4xRNRNQZQFsLlm%2FU%2BjWhurosLbfNlDYNq4s1NgELugE8LoweFTTI4LodOLSPKJoLWpA9oZXpuu&X-Amz-Signature=d378f457c7dc4c9bc2a041fefd39a251795c51dcb6f560029086e7bc0e232339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
