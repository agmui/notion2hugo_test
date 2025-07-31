---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-30T10:15:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-30T10:15:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUWOPDOO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Q%2Ft5oPTRGqOwnO%2FPM6JaHWsJ%2F9II4Tx8ko1lsc7DYQIge%2BUb0hSz4OfZ%2BSci%2BEgyTAzxhq91t8iRcNL1JM%2BrOSwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbluYuYHj4UdmErXircA1qWlE%2BXG9lCxTiaQ9tTYboMsMl7lhN9Vfbty8gnYDpYyaRSE1DcrbdAZuv09XlfF6Rh0in9xHBHlFR0k7DAwXraj3znfZs%2F5S5PiPSrWPsDJ0Jync6lb1Iyv5%2BoXyuKwfrr7%2B9OKQWlPviptlEB0Il5qVnGVY2FyGyRzT3eSygNw0%2BTWqi5BbouLTEk9mAO15EZSGs%2BsTNtuN5FCuRgDZEjBFJub%2BRg5nUAhLT2Ovtx4pJgikQKe5YQtQNn8Buu5xj7Qnx%2FeqWrWQPkJrEAkIjZ0BhYkixlUSqGij1p0YofXmt4PSJnd7QjvrEuAMXynPMe4zf6iQiFp9h7HFz%2F7xY%2B3dzCsST6MRrJC4BuvcNgnmRV1afPq7duJR26dUK9f81LtC6euEYrtwyQyoCgEZGUuaqtQLa4cw7aGk5vY4KUg53VQtrQaBzvl4b2dhRTl19loQeV9HN8uvP81nU2AprGACDiczVzqjDmBI32rElJRc89og1qGYJWKkBzuelTcOgWPUfuOPvZQR7BptLwU5glksnU65eD6z5dOCw0d%2BSwHyVtXlP9gOqN2DY7hQHfebqV9Em%2Bwyrjb7l8C9Azq4ifJOw%2FJGfQnC1eCDMlv9%2BfuW4X5Lobflxvu7GrMIS4rsQGOqUBqUF4aPHW8PNx5MgrfL2h%2BnzjptyKs%2BLmWLc39V9FxqAOiOBFkSTtJ6OyLoMwmXTcpoYQ69ZwXpgSpD8Uhb9AQKwjXBaHEnqmWFr%2FWaWkiE71gT0e77wsFQWytVhwbrI2BZ5YB1R8AgeadNyJZF1bwLZMK987rFvEb%2Fegv2EPto4HNHsTE%2FbDO7zNaPrAIiycITmb8vv4FZ7j3UGV8WOuZYKrHPdG&X-Amz-Signature=9afbb8f5ffd50b621f896ac1f91773a11e0673b96f1b2320d2e23f873cf995bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUWOPDOO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Q%2Ft5oPTRGqOwnO%2FPM6JaHWsJ%2F9II4Tx8ko1lsc7DYQIge%2BUb0hSz4OfZ%2BSci%2BEgyTAzxhq91t8iRcNL1JM%2BrOSwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbluYuYHj4UdmErXircA1qWlE%2BXG9lCxTiaQ9tTYboMsMl7lhN9Vfbty8gnYDpYyaRSE1DcrbdAZuv09XlfF6Rh0in9xHBHlFR0k7DAwXraj3znfZs%2F5S5PiPSrWPsDJ0Jync6lb1Iyv5%2BoXyuKwfrr7%2B9OKQWlPviptlEB0Il5qVnGVY2FyGyRzT3eSygNw0%2BTWqi5BbouLTEk9mAO15EZSGs%2BsTNtuN5FCuRgDZEjBFJub%2BRg5nUAhLT2Ovtx4pJgikQKe5YQtQNn8Buu5xj7Qnx%2FeqWrWQPkJrEAkIjZ0BhYkixlUSqGij1p0YofXmt4PSJnd7QjvrEuAMXynPMe4zf6iQiFp9h7HFz%2F7xY%2B3dzCsST6MRrJC4BuvcNgnmRV1afPq7duJR26dUK9f81LtC6euEYrtwyQyoCgEZGUuaqtQLa4cw7aGk5vY4KUg53VQtrQaBzvl4b2dhRTl19loQeV9HN8uvP81nU2AprGACDiczVzqjDmBI32rElJRc89og1qGYJWKkBzuelTcOgWPUfuOPvZQR7BptLwU5glksnU65eD6z5dOCw0d%2BSwHyVtXlP9gOqN2DY7hQHfebqV9Em%2Bwyrjb7l8C9Azq4ifJOw%2FJGfQnC1eCDMlv9%2BfuW4X5Lobflxvu7GrMIS4rsQGOqUBqUF4aPHW8PNx5MgrfL2h%2BnzjptyKs%2BLmWLc39V9FxqAOiOBFkSTtJ6OyLoMwmXTcpoYQ69ZwXpgSpD8Uhb9AQKwjXBaHEnqmWFr%2FWaWkiE71gT0e77wsFQWytVhwbrI2BZ5YB1R8AgeadNyJZF1bwLZMK987rFvEb%2Fegv2EPto4HNHsTE%2FbDO7zNaPrAIiycITmb8vv4FZ7j3UGV8WOuZYKrHPdG&X-Amz-Signature=86e00a33c8722f16c104624df081a59f1a5821b7df0d848ac0bff50954bf97fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUWOPDOO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Q%2Ft5oPTRGqOwnO%2FPM6JaHWsJ%2F9II4Tx8ko1lsc7DYQIge%2BUb0hSz4OfZ%2BSci%2BEgyTAzxhq91t8iRcNL1JM%2BrOSwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbluYuYHj4UdmErXircA1qWlE%2BXG9lCxTiaQ9tTYboMsMl7lhN9Vfbty8gnYDpYyaRSE1DcrbdAZuv09XlfF6Rh0in9xHBHlFR0k7DAwXraj3znfZs%2F5S5PiPSrWPsDJ0Jync6lb1Iyv5%2BoXyuKwfrr7%2B9OKQWlPviptlEB0Il5qVnGVY2FyGyRzT3eSygNw0%2BTWqi5BbouLTEk9mAO15EZSGs%2BsTNtuN5FCuRgDZEjBFJub%2BRg5nUAhLT2Ovtx4pJgikQKe5YQtQNn8Buu5xj7Qnx%2FeqWrWQPkJrEAkIjZ0BhYkixlUSqGij1p0YofXmt4PSJnd7QjvrEuAMXynPMe4zf6iQiFp9h7HFz%2F7xY%2B3dzCsST6MRrJC4BuvcNgnmRV1afPq7duJR26dUK9f81LtC6euEYrtwyQyoCgEZGUuaqtQLa4cw7aGk5vY4KUg53VQtrQaBzvl4b2dhRTl19loQeV9HN8uvP81nU2AprGACDiczVzqjDmBI32rElJRc89og1qGYJWKkBzuelTcOgWPUfuOPvZQR7BptLwU5glksnU65eD6z5dOCw0d%2BSwHyVtXlP9gOqN2DY7hQHfebqV9Em%2Bwyrjb7l8C9Azq4ifJOw%2FJGfQnC1eCDMlv9%2BfuW4X5Lobflxvu7GrMIS4rsQGOqUBqUF4aPHW8PNx5MgrfL2h%2BnzjptyKs%2BLmWLc39V9FxqAOiOBFkSTtJ6OyLoMwmXTcpoYQ69ZwXpgSpD8Uhb9AQKwjXBaHEnqmWFr%2FWaWkiE71gT0e77wsFQWytVhwbrI2BZ5YB1R8AgeadNyJZF1bwLZMK987rFvEb%2Fegv2EPto4HNHsTE%2FbDO7zNaPrAIiycITmb8vv4FZ7j3UGV8WOuZYKrHPdG&X-Amz-Signature=aaf3ab6be5a85b73cc653c92c2e183891adfd8968a572af52c51916a150bbf46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUWOPDOO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Q%2Ft5oPTRGqOwnO%2FPM6JaHWsJ%2F9II4Tx8ko1lsc7DYQIge%2BUb0hSz4OfZ%2BSci%2BEgyTAzxhq91t8iRcNL1JM%2BrOSwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbluYuYHj4UdmErXircA1qWlE%2BXG9lCxTiaQ9tTYboMsMl7lhN9Vfbty8gnYDpYyaRSE1DcrbdAZuv09XlfF6Rh0in9xHBHlFR0k7DAwXraj3znfZs%2F5S5PiPSrWPsDJ0Jync6lb1Iyv5%2BoXyuKwfrr7%2B9OKQWlPviptlEB0Il5qVnGVY2FyGyRzT3eSygNw0%2BTWqi5BbouLTEk9mAO15EZSGs%2BsTNtuN5FCuRgDZEjBFJub%2BRg5nUAhLT2Ovtx4pJgikQKe5YQtQNn8Buu5xj7Qnx%2FeqWrWQPkJrEAkIjZ0BhYkixlUSqGij1p0YofXmt4PSJnd7QjvrEuAMXynPMe4zf6iQiFp9h7HFz%2F7xY%2B3dzCsST6MRrJC4BuvcNgnmRV1afPq7duJR26dUK9f81LtC6euEYrtwyQyoCgEZGUuaqtQLa4cw7aGk5vY4KUg53VQtrQaBzvl4b2dhRTl19loQeV9HN8uvP81nU2AprGACDiczVzqjDmBI32rElJRc89og1qGYJWKkBzuelTcOgWPUfuOPvZQR7BptLwU5glksnU65eD6z5dOCw0d%2BSwHyVtXlP9gOqN2DY7hQHfebqV9Em%2Bwyrjb7l8C9Azq4ifJOw%2FJGfQnC1eCDMlv9%2BfuW4X5Lobflxvu7GrMIS4rsQGOqUBqUF4aPHW8PNx5MgrfL2h%2BnzjptyKs%2BLmWLc39V9FxqAOiOBFkSTtJ6OyLoMwmXTcpoYQ69ZwXpgSpD8Uhb9AQKwjXBaHEnqmWFr%2FWaWkiE71gT0e77wsFQWytVhwbrI2BZ5YB1R8AgeadNyJZF1bwLZMK987rFvEb%2Fegv2EPto4HNHsTE%2FbDO7zNaPrAIiycITmb8vv4FZ7j3UGV8WOuZYKrHPdG&X-Amz-Signature=3165edc3d55bb1cead9ce06a1d1af1a23f54ed840974a5e997e36b3909e98250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUWOPDOO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Q%2Ft5oPTRGqOwnO%2FPM6JaHWsJ%2F9II4Tx8ko1lsc7DYQIge%2BUb0hSz4OfZ%2BSci%2BEgyTAzxhq91t8iRcNL1JM%2BrOSwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbluYuYHj4UdmErXircA1qWlE%2BXG9lCxTiaQ9tTYboMsMl7lhN9Vfbty8gnYDpYyaRSE1DcrbdAZuv09XlfF6Rh0in9xHBHlFR0k7DAwXraj3znfZs%2F5S5PiPSrWPsDJ0Jync6lb1Iyv5%2BoXyuKwfrr7%2B9OKQWlPviptlEB0Il5qVnGVY2FyGyRzT3eSygNw0%2BTWqi5BbouLTEk9mAO15EZSGs%2BsTNtuN5FCuRgDZEjBFJub%2BRg5nUAhLT2Ovtx4pJgikQKe5YQtQNn8Buu5xj7Qnx%2FeqWrWQPkJrEAkIjZ0BhYkixlUSqGij1p0YofXmt4PSJnd7QjvrEuAMXynPMe4zf6iQiFp9h7HFz%2F7xY%2B3dzCsST6MRrJC4BuvcNgnmRV1afPq7duJR26dUK9f81LtC6euEYrtwyQyoCgEZGUuaqtQLa4cw7aGk5vY4KUg53VQtrQaBzvl4b2dhRTl19loQeV9HN8uvP81nU2AprGACDiczVzqjDmBI32rElJRc89og1qGYJWKkBzuelTcOgWPUfuOPvZQR7BptLwU5glksnU65eD6z5dOCw0d%2BSwHyVtXlP9gOqN2DY7hQHfebqV9Em%2Bwyrjb7l8C9Azq4ifJOw%2FJGfQnC1eCDMlv9%2BfuW4X5Lobflxvu7GrMIS4rsQGOqUBqUF4aPHW8PNx5MgrfL2h%2BnzjptyKs%2BLmWLc39V9FxqAOiOBFkSTtJ6OyLoMwmXTcpoYQ69ZwXpgSpD8Uhb9AQKwjXBaHEnqmWFr%2FWaWkiE71gT0e77wsFQWytVhwbrI2BZ5YB1R8AgeadNyJZF1bwLZMK987rFvEb%2Fegv2EPto4HNHsTE%2FbDO7zNaPrAIiycITmb8vv4FZ7j3UGV8WOuZYKrHPdG&X-Amz-Signature=38d336ae6400602c3514736ec33ef47ae73d9ebfaca44cd2806acef934bfe2c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUWOPDOO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Q%2Ft5oPTRGqOwnO%2FPM6JaHWsJ%2F9II4Tx8ko1lsc7DYQIge%2BUb0hSz4OfZ%2BSci%2BEgyTAzxhq91t8iRcNL1JM%2BrOSwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbluYuYHj4UdmErXircA1qWlE%2BXG9lCxTiaQ9tTYboMsMl7lhN9Vfbty8gnYDpYyaRSE1DcrbdAZuv09XlfF6Rh0in9xHBHlFR0k7DAwXraj3znfZs%2F5S5PiPSrWPsDJ0Jync6lb1Iyv5%2BoXyuKwfrr7%2B9OKQWlPviptlEB0Il5qVnGVY2FyGyRzT3eSygNw0%2BTWqi5BbouLTEk9mAO15EZSGs%2BsTNtuN5FCuRgDZEjBFJub%2BRg5nUAhLT2Ovtx4pJgikQKe5YQtQNn8Buu5xj7Qnx%2FeqWrWQPkJrEAkIjZ0BhYkixlUSqGij1p0YofXmt4PSJnd7QjvrEuAMXynPMe4zf6iQiFp9h7HFz%2F7xY%2B3dzCsST6MRrJC4BuvcNgnmRV1afPq7duJR26dUK9f81LtC6euEYrtwyQyoCgEZGUuaqtQLa4cw7aGk5vY4KUg53VQtrQaBzvl4b2dhRTl19loQeV9HN8uvP81nU2AprGACDiczVzqjDmBI32rElJRc89og1qGYJWKkBzuelTcOgWPUfuOPvZQR7BptLwU5glksnU65eD6z5dOCw0d%2BSwHyVtXlP9gOqN2DY7hQHfebqV9Em%2Bwyrjb7l8C9Azq4ifJOw%2FJGfQnC1eCDMlv9%2BfuW4X5Lobflxvu7GrMIS4rsQGOqUBqUF4aPHW8PNx5MgrfL2h%2BnzjptyKs%2BLmWLc39V9FxqAOiOBFkSTtJ6OyLoMwmXTcpoYQ69ZwXpgSpD8Uhb9AQKwjXBaHEnqmWFr%2FWaWkiE71gT0e77wsFQWytVhwbrI2BZ5YB1R8AgeadNyJZF1bwLZMK987rFvEb%2Fegv2EPto4HNHsTE%2FbDO7zNaPrAIiycITmb8vv4FZ7j3UGV8WOuZYKrHPdG&X-Amz-Signature=5d4b31847d97c78f588a2f97eff2f117b30f9435e2248e9152f9342dcafc1ec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUWOPDOO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Q%2Ft5oPTRGqOwnO%2FPM6JaHWsJ%2F9II4Tx8ko1lsc7DYQIge%2BUb0hSz4OfZ%2BSci%2BEgyTAzxhq91t8iRcNL1JM%2BrOSwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbluYuYHj4UdmErXircA1qWlE%2BXG9lCxTiaQ9tTYboMsMl7lhN9Vfbty8gnYDpYyaRSE1DcrbdAZuv09XlfF6Rh0in9xHBHlFR0k7DAwXraj3znfZs%2F5S5PiPSrWPsDJ0Jync6lb1Iyv5%2BoXyuKwfrr7%2B9OKQWlPviptlEB0Il5qVnGVY2FyGyRzT3eSygNw0%2BTWqi5BbouLTEk9mAO15EZSGs%2BsTNtuN5FCuRgDZEjBFJub%2BRg5nUAhLT2Ovtx4pJgikQKe5YQtQNn8Buu5xj7Qnx%2FeqWrWQPkJrEAkIjZ0BhYkixlUSqGij1p0YofXmt4PSJnd7QjvrEuAMXynPMe4zf6iQiFp9h7HFz%2F7xY%2B3dzCsST6MRrJC4BuvcNgnmRV1afPq7duJR26dUK9f81LtC6euEYrtwyQyoCgEZGUuaqtQLa4cw7aGk5vY4KUg53VQtrQaBzvl4b2dhRTl19loQeV9HN8uvP81nU2AprGACDiczVzqjDmBI32rElJRc89og1qGYJWKkBzuelTcOgWPUfuOPvZQR7BptLwU5glksnU65eD6z5dOCw0d%2BSwHyVtXlP9gOqN2DY7hQHfebqV9Em%2Bwyrjb7l8C9Azq4ifJOw%2FJGfQnC1eCDMlv9%2BfuW4X5Lobflxvu7GrMIS4rsQGOqUBqUF4aPHW8PNx5MgrfL2h%2BnzjptyKs%2BLmWLc39V9FxqAOiOBFkSTtJ6OyLoMwmXTcpoYQ69ZwXpgSpD8Uhb9AQKwjXBaHEnqmWFr%2FWaWkiE71gT0e77wsFQWytVhwbrI2BZ5YB1R8AgeadNyJZF1bwLZMK987rFvEb%2Fegv2EPto4HNHsTE%2FbDO7zNaPrAIiycITmb8vv4FZ7j3UGV8WOuZYKrHPdG&X-Amz-Signature=04a11a04ed48fe79b18c85d05b9384abbd74abf73f61cdcd0b3a8ef5efd32101&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUWOPDOO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Q%2Ft5oPTRGqOwnO%2FPM6JaHWsJ%2F9II4Tx8ko1lsc7DYQIge%2BUb0hSz4OfZ%2BSci%2BEgyTAzxhq91t8iRcNL1JM%2BrOSwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbluYuYHj4UdmErXircA1qWlE%2BXG9lCxTiaQ9tTYboMsMl7lhN9Vfbty8gnYDpYyaRSE1DcrbdAZuv09XlfF6Rh0in9xHBHlFR0k7DAwXraj3znfZs%2F5S5PiPSrWPsDJ0Jync6lb1Iyv5%2BoXyuKwfrr7%2B9OKQWlPviptlEB0Il5qVnGVY2FyGyRzT3eSygNw0%2BTWqi5BbouLTEk9mAO15EZSGs%2BsTNtuN5FCuRgDZEjBFJub%2BRg5nUAhLT2Ovtx4pJgikQKe5YQtQNn8Buu5xj7Qnx%2FeqWrWQPkJrEAkIjZ0BhYkixlUSqGij1p0YofXmt4PSJnd7QjvrEuAMXynPMe4zf6iQiFp9h7HFz%2F7xY%2B3dzCsST6MRrJC4BuvcNgnmRV1afPq7duJR26dUK9f81LtC6euEYrtwyQyoCgEZGUuaqtQLa4cw7aGk5vY4KUg53VQtrQaBzvl4b2dhRTl19loQeV9HN8uvP81nU2AprGACDiczVzqjDmBI32rElJRc89og1qGYJWKkBzuelTcOgWPUfuOPvZQR7BptLwU5glksnU65eD6z5dOCw0d%2BSwHyVtXlP9gOqN2DY7hQHfebqV9Em%2Bwyrjb7l8C9Azq4ifJOw%2FJGfQnC1eCDMlv9%2BfuW4X5Lobflxvu7GrMIS4rsQGOqUBqUF4aPHW8PNx5MgrfL2h%2BnzjptyKs%2BLmWLc39V9FxqAOiOBFkSTtJ6OyLoMwmXTcpoYQ69ZwXpgSpD8Uhb9AQKwjXBaHEnqmWFr%2FWaWkiE71gT0e77wsFQWytVhwbrI2BZ5YB1R8AgeadNyJZF1bwLZMK987rFvEb%2Fegv2EPto4HNHsTE%2FbDO7zNaPrAIiycITmb8vv4FZ7j3UGV8WOuZYKrHPdG&X-Amz-Signature=9410494fd52d38c258059dbb725587acab308d0c91558df8bf0aecc01eb5e9e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUWOPDOO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Q%2Ft5oPTRGqOwnO%2FPM6JaHWsJ%2F9II4Tx8ko1lsc7DYQIge%2BUb0hSz4OfZ%2BSci%2BEgyTAzxhq91t8iRcNL1JM%2BrOSwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbluYuYHj4UdmErXircA1qWlE%2BXG9lCxTiaQ9tTYboMsMl7lhN9Vfbty8gnYDpYyaRSE1DcrbdAZuv09XlfF6Rh0in9xHBHlFR0k7DAwXraj3znfZs%2F5S5PiPSrWPsDJ0Jync6lb1Iyv5%2BoXyuKwfrr7%2B9OKQWlPviptlEB0Il5qVnGVY2FyGyRzT3eSygNw0%2BTWqi5BbouLTEk9mAO15EZSGs%2BsTNtuN5FCuRgDZEjBFJub%2BRg5nUAhLT2Ovtx4pJgikQKe5YQtQNn8Buu5xj7Qnx%2FeqWrWQPkJrEAkIjZ0BhYkixlUSqGij1p0YofXmt4PSJnd7QjvrEuAMXynPMe4zf6iQiFp9h7HFz%2F7xY%2B3dzCsST6MRrJC4BuvcNgnmRV1afPq7duJR26dUK9f81LtC6euEYrtwyQyoCgEZGUuaqtQLa4cw7aGk5vY4KUg53VQtrQaBzvl4b2dhRTl19loQeV9HN8uvP81nU2AprGACDiczVzqjDmBI32rElJRc89og1qGYJWKkBzuelTcOgWPUfuOPvZQR7BptLwU5glksnU65eD6z5dOCw0d%2BSwHyVtXlP9gOqN2DY7hQHfebqV9Em%2Bwyrjb7l8C9Azq4ifJOw%2FJGfQnC1eCDMlv9%2BfuW4X5Lobflxvu7GrMIS4rsQGOqUBqUF4aPHW8PNx5MgrfL2h%2BnzjptyKs%2BLmWLc39V9FxqAOiOBFkSTtJ6OyLoMwmXTcpoYQ69ZwXpgSpD8Uhb9AQKwjXBaHEnqmWFr%2FWaWkiE71gT0e77wsFQWytVhwbrI2BZ5YB1R8AgeadNyJZF1bwLZMK987rFvEb%2Fegv2EPto4HNHsTE%2FbDO7zNaPrAIiycITmb8vv4FZ7j3UGV8WOuZYKrHPdG&X-Amz-Signature=95b0c3e0d9cf4ac7c663f48fc25ad50efabcb37f9c2a3b242850079cd85e6f9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUWOPDOO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Q%2Ft5oPTRGqOwnO%2FPM6JaHWsJ%2F9II4Tx8ko1lsc7DYQIge%2BUb0hSz4OfZ%2BSci%2BEgyTAzxhq91t8iRcNL1JM%2BrOSwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbluYuYHj4UdmErXircA1qWlE%2BXG9lCxTiaQ9tTYboMsMl7lhN9Vfbty8gnYDpYyaRSE1DcrbdAZuv09XlfF6Rh0in9xHBHlFR0k7DAwXraj3znfZs%2F5S5PiPSrWPsDJ0Jync6lb1Iyv5%2BoXyuKwfrr7%2B9OKQWlPviptlEB0Il5qVnGVY2FyGyRzT3eSygNw0%2BTWqi5BbouLTEk9mAO15EZSGs%2BsTNtuN5FCuRgDZEjBFJub%2BRg5nUAhLT2Ovtx4pJgikQKe5YQtQNn8Buu5xj7Qnx%2FeqWrWQPkJrEAkIjZ0BhYkixlUSqGij1p0YofXmt4PSJnd7QjvrEuAMXynPMe4zf6iQiFp9h7HFz%2F7xY%2B3dzCsST6MRrJC4BuvcNgnmRV1afPq7duJR26dUK9f81LtC6euEYrtwyQyoCgEZGUuaqtQLa4cw7aGk5vY4KUg53VQtrQaBzvl4b2dhRTl19loQeV9HN8uvP81nU2AprGACDiczVzqjDmBI32rElJRc89og1qGYJWKkBzuelTcOgWPUfuOPvZQR7BptLwU5glksnU65eD6z5dOCw0d%2BSwHyVtXlP9gOqN2DY7hQHfebqV9Em%2Bwyrjb7l8C9Azq4ifJOw%2FJGfQnC1eCDMlv9%2BfuW4X5Lobflxvu7GrMIS4rsQGOqUBqUF4aPHW8PNx5MgrfL2h%2BnzjptyKs%2BLmWLc39V9FxqAOiOBFkSTtJ6OyLoMwmXTcpoYQ69ZwXpgSpD8Uhb9AQKwjXBaHEnqmWFr%2FWaWkiE71gT0e77wsFQWytVhwbrI2BZ5YB1R8AgeadNyJZF1bwLZMK987rFvEb%2Fegv2EPto4HNHsTE%2FbDO7zNaPrAIiycITmb8vv4FZ7j3UGV8WOuZYKrHPdG&X-Amz-Signature=dccd13c59ea2afd50f92e05b16d1f52fda44c3312c5c78284bd580941a74e864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

Types of blocks in URDF:

- robot
- vars/Properties
- macros
- link:
	- visual
		- geometry
		- material
	- collision
		- origin
		- geometry
		- friction
	- inertial
- joint:
	- parent
	- child
	- origin

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUWOPDOO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Q%2Ft5oPTRGqOwnO%2FPM6JaHWsJ%2F9II4Tx8ko1lsc7DYQIge%2BUb0hSz4OfZ%2BSci%2BEgyTAzxhq91t8iRcNL1JM%2BrOSwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbluYuYHj4UdmErXircA1qWlE%2BXG9lCxTiaQ9tTYboMsMl7lhN9Vfbty8gnYDpYyaRSE1DcrbdAZuv09XlfF6Rh0in9xHBHlFR0k7DAwXraj3znfZs%2F5S5PiPSrWPsDJ0Jync6lb1Iyv5%2BoXyuKwfrr7%2B9OKQWlPviptlEB0Il5qVnGVY2FyGyRzT3eSygNw0%2BTWqi5BbouLTEk9mAO15EZSGs%2BsTNtuN5FCuRgDZEjBFJub%2BRg5nUAhLT2Ovtx4pJgikQKe5YQtQNn8Buu5xj7Qnx%2FeqWrWQPkJrEAkIjZ0BhYkixlUSqGij1p0YofXmt4PSJnd7QjvrEuAMXynPMe4zf6iQiFp9h7HFz%2F7xY%2B3dzCsST6MRrJC4BuvcNgnmRV1afPq7duJR26dUK9f81LtC6euEYrtwyQyoCgEZGUuaqtQLa4cw7aGk5vY4KUg53VQtrQaBzvl4b2dhRTl19loQeV9HN8uvP81nU2AprGACDiczVzqjDmBI32rElJRc89og1qGYJWKkBzuelTcOgWPUfuOPvZQR7BptLwU5glksnU65eD6z5dOCw0d%2BSwHyVtXlP9gOqN2DY7hQHfebqV9Em%2Bwyrjb7l8C9Azq4ifJOw%2FJGfQnC1eCDMlv9%2BfuW4X5Lobflxvu7GrMIS4rsQGOqUBqUF4aPHW8PNx5MgrfL2h%2BnzjptyKs%2BLmWLc39V9FxqAOiOBFkSTtJ6OyLoMwmXTcpoYQ69ZwXpgSpD8Uhb9AQKwjXBaHEnqmWFr%2FWaWkiE71gT0e77wsFQWytVhwbrI2BZ5YB1R8AgeadNyJZF1bwLZMK987rFvEb%2Fegv2EPto4HNHsTE%2FbDO7zNaPrAIiycITmb8vv4FZ7j3UGV8WOuZYKrHPdG&X-Amz-Signature=90a2ef583bef37e3d3a349518d3f294990a5f4b2f50da31a1e6e34beb72746ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUWOPDOO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Q%2Ft5oPTRGqOwnO%2FPM6JaHWsJ%2F9II4Tx8ko1lsc7DYQIge%2BUb0hSz4OfZ%2BSci%2BEgyTAzxhq91t8iRcNL1JM%2BrOSwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbluYuYHj4UdmErXircA1qWlE%2BXG9lCxTiaQ9tTYboMsMl7lhN9Vfbty8gnYDpYyaRSE1DcrbdAZuv09XlfF6Rh0in9xHBHlFR0k7DAwXraj3znfZs%2F5S5PiPSrWPsDJ0Jync6lb1Iyv5%2BoXyuKwfrr7%2B9OKQWlPviptlEB0Il5qVnGVY2FyGyRzT3eSygNw0%2BTWqi5BbouLTEk9mAO15EZSGs%2BsTNtuN5FCuRgDZEjBFJub%2BRg5nUAhLT2Ovtx4pJgikQKe5YQtQNn8Buu5xj7Qnx%2FeqWrWQPkJrEAkIjZ0BhYkixlUSqGij1p0YofXmt4PSJnd7QjvrEuAMXynPMe4zf6iQiFp9h7HFz%2F7xY%2B3dzCsST6MRrJC4BuvcNgnmRV1afPq7duJR26dUK9f81LtC6euEYrtwyQyoCgEZGUuaqtQLa4cw7aGk5vY4KUg53VQtrQaBzvl4b2dhRTl19loQeV9HN8uvP81nU2AprGACDiczVzqjDmBI32rElJRc89og1qGYJWKkBzuelTcOgWPUfuOPvZQR7BptLwU5glksnU65eD6z5dOCw0d%2BSwHyVtXlP9gOqN2DY7hQHfebqV9Em%2Bwyrjb7l8C9Azq4ifJOw%2FJGfQnC1eCDMlv9%2BfuW4X5Lobflxvu7GrMIS4rsQGOqUBqUF4aPHW8PNx5MgrfL2h%2BnzjptyKs%2BLmWLc39V9FxqAOiOBFkSTtJ6OyLoMwmXTcpoYQ69ZwXpgSpD8Uhb9AQKwjXBaHEnqmWFr%2FWaWkiE71gT0e77wsFQWytVhwbrI2BZ5YB1R8AgeadNyJZF1bwLZMK987rFvEb%2Fegv2EPto4HNHsTE%2FbDO7zNaPrAIiycITmb8vv4FZ7j3UGV8WOuZYKrHPdG&X-Amz-Signature=25aa36118883022c9ffcadc3dac278949814df156acc4230917c240ea38b24d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUWOPDOO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Q%2Ft5oPTRGqOwnO%2FPM6JaHWsJ%2F9II4Tx8ko1lsc7DYQIge%2BUb0hSz4OfZ%2BSci%2BEgyTAzxhq91t8iRcNL1JM%2BrOSwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbluYuYHj4UdmErXircA1qWlE%2BXG9lCxTiaQ9tTYboMsMl7lhN9Vfbty8gnYDpYyaRSE1DcrbdAZuv09XlfF6Rh0in9xHBHlFR0k7DAwXraj3znfZs%2F5S5PiPSrWPsDJ0Jync6lb1Iyv5%2BoXyuKwfrr7%2B9OKQWlPviptlEB0Il5qVnGVY2FyGyRzT3eSygNw0%2BTWqi5BbouLTEk9mAO15EZSGs%2BsTNtuN5FCuRgDZEjBFJub%2BRg5nUAhLT2Ovtx4pJgikQKe5YQtQNn8Buu5xj7Qnx%2FeqWrWQPkJrEAkIjZ0BhYkixlUSqGij1p0YofXmt4PSJnd7QjvrEuAMXynPMe4zf6iQiFp9h7HFz%2F7xY%2B3dzCsST6MRrJC4BuvcNgnmRV1afPq7duJR26dUK9f81LtC6euEYrtwyQyoCgEZGUuaqtQLa4cw7aGk5vY4KUg53VQtrQaBzvl4b2dhRTl19loQeV9HN8uvP81nU2AprGACDiczVzqjDmBI32rElJRc89og1qGYJWKkBzuelTcOgWPUfuOPvZQR7BptLwU5glksnU65eD6z5dOCw0d%2BSwHyVtXlP9gOqN2DY7hQHfebqV9Em%2Bwyrjb7l8C9Azq4ifJOw%2FJGfQnC1eCDMlv9%2BfuW4X5Lobflxvu7GrMIS4rsQGOqUBqUF4aPHW8PNx5MgrfL2h%2BnzjptyKs%2BLmWLc39V9FxqAOiOBFkSTtJ6OyLoMwmXTcpoYQ69ZwXpgSpD8Uhb9AQKwjXBaHEnqmWFr%2FWaWkiE71gT0e77wsFQWytVhwbrI2BZ5YB1R8AgeadNyJZF1bwLZMK987rFvEb%2Fegv2EPto4HNHsTE%2FbDO7zNaPrAIiycITmb8vv4FZ7j3UGV8WOuZYKrHPdG&X-Amz-Signature=8f9e8e3d7c57e1d64a3ffdac25d9ee18fce6f16ce4e1b812ae4717b7f6c0f513&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643LWJRBA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzPbfF4p1osSU8sSnwdx7Ud7vOIOJdwEPte6RiIX5jMAiEAzIBQ7MDID1%2Fa8imXcuaSY%2Frc%2BZL3mEnV%2FeLaMMGydLUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcqhAaWH5fcveCKGircA9IPQsQBm9nB6%2B5JgJVb3qVUkUfVUrNjkEiJny6P1BBdkMbJQpy1hLwXosDR5SAPFXSZXqxAoCgJ8kEss%2F07B1QPgRIHeaJXZN677q78gTVxXxQUjESD89MXKQLbEQ9TSgy4H0093obfc01peTE79btn9I5spDC6qhMIlBlWa9id35xJORf60Buprh2b5%2BlBjBuyOkZQ3XJz4eNiflpGZ5pV1A6g1EufAwDXNsZ28zcBamurclrnpaFfdeOmZc9j7rYfNAi8%2F1ApiIOh3iD1blK3mLth60JkWfa6aJOL5xKr6JjlEg8MkWtgDvoUjLZc9RApb%2B87HgKbgvXbBLskJ6TPJyqp44PWKZqnxw%2BkAVcudgiP40%2BhXSa3NFrneiM1w8fMPL7%2FEsCk5r6mDwlJMacZVTMs3KJSgxgFcwl5ejBo8%2FXPFW3b46KWiin8O7WYradug4BMMHpRREbhVNY05Pp078S%2BrdmYvfI60%2B3JHaX9haM4MPI%2FCFeW9qF4CRJqT4vjzYtElSMlj9MfX%2F0FbBInltBdTlTq16jiK5L1L%2FXS9DpyGwwYhIc87MR2boaM9LEcXbxMtTgKia%2F4A1yxbUacnru1PoqFYe5E92dHR%2F1OiHFdgYDnLbxWHoR3MJq4rsQGOqUBZx3Fa%2F0WbWWWve4Zj8DDMe0dtVP%2FnzWeuhmi3izRRyKOYRUVUGUQK6lHRbkS1T5aN5uRFiuooLts%2B%2FUwcATpxDkPiihXl8wpBW52L%2FIxMzLpNP%2BRr56r23AA8ak6LGvbMyeJXyVVflAVjZcVZHrbJ7zcKQ426dsxnhNRrJitB6GcjgDECDnjxCgYL8K7yDGTP8wdTCP11otBGubptUsKZpHyXwoD&X-Amz-Signature=7a49f1eedd3827085614df4e732acf81548dc3705198bcbd77250dcf9c8a7939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643LWJRBA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzPbfF4p1osSU8sSnwdx7Ud7vOIOJdwEPte6RiIX5jMAiEAzIBQ7MDID1%2Fa8imXcuaSY%2Frc%2BZL3mEnV%2FeLaMMGydLUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcqhAaWH5fcveCKGircA9IPQsQBm9nB6%2B5JgJVb3qVUkUfVUrNjkEiJny6P1BBdkMbJQpy1hLwXosDR5SAPFXSZXqxAoCgJ8kEss%2F07B1QPgRIHeaJXZN677q78gTVxXxQUjESD89MXKQLbEQ9TSgy4H0093obfc01peTE79btn9I5spDC6qhMIlBlWa9id35xJORf60Buprh2b5%2BlBjBuyOkZQ3XJz4eNiflpGZ5pV1A6g1EufAwDXNsZ28zcBamurclrnpaFfdeOmZc9j7rYfNAi8%2F1ApiIOh3iD1blK3mLth60JkWfa6aJOL5xKr6JjlEg8MkWtgDvoUjLZc9RApb%2B87HgKbgvXbBLskJ6TPJyqp44PWKZqnxw%2BkAVcudgiP40%2BhXSa3NFrneiM1w8fMPL7%2FEsCk5r6mDwlJMacZVTMs3KJSgxgFcwl5ejBo8%2FXPFW3b46KWiin8O7WYradug4BMMHpRREbhVNY05Pp078S%2BrdmYvfI60%2B3JHaX9haM4MPI%2FCFeW9qF4CRJqT4vjzYtElSMlj9MfX%2F0FbBInltBdTlTq16jiK5L1L%2FXS9DpyGwwYhIc87MR2boaM9LEcXbxMtTgKia%2F4A1yxbUacnru1PoqFYe5E92dHR%2F1OiHFdgYDnLbxWHoR3MJq4rsQGOqUBZx3Fa%2F0WbWWWve4Zj8DDMe0dtVP%2FnzWeuhmi3izRRyKOYRUVUGUQK6lHRbkS1T5aN5uRFiuooLts%2B%2FUwcATpxDkPiihXl8wpBW52L%2FIxMzLpNP%2BRr56r23AA8ak6LGvbMyeJXyVVflAVjZcVZHrbJ7zcKQ426dsxnhNRrJitB6GcjgDECDnjxCgYL8K7yDGTP8wdTCP11otBGubptUsKZpHyXwoD&X-Amz-Signature=c413c08547d9d22fcc67050e9908ae64c6af28ceb885b93e7c771e2739770cf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643LWJRBA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzPbfF4p1osSU8sSnwdx7Ud7vOIOJdwEPte6RiIX5jMAiEAzIBQ7MDID1%2Fa8imXcuaSY%2Frc%2BZL3mEnV%2FeLaMMGydLUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcqhAaWH5fcveCKGircA9IPQsQBm9nB6%2B5JgJVb3qVUkUfVUrNjkEiJny6P1BBdkMbJQpy1hLwXosDR5SAPFXSZXqxAoCgJ8kEss%2F07B1QPgRIHeaJXZN677q78gTVxXxQUjESD89MXKQLbEQ9TSgy4H0093obfc01peTE79btn9I5spDC6qhMIlBlWa9id35xJORf60Buprh2b5%2BlBjBuyOkZQ3XJz4eNiflpGZ5pV1A6g1EufAwDXNsZ28zcBamurclrnpaFfdeOmZc9j7rYfNAi8%2F1ApiIOh3iD1blK3mLth60JkWfa6aJOL5xKr6JjlEg8MkWtgDvoUjLZc9RApb%2B87HgKbgvXbBLskJ6TPJyqp44PWKZqnxw%2BkAVcudgiP40%2BhXSa3NFrneiM1w8fMPL7%2FEsCk5r6mDwlJMacZVTMs3KJSgxgFcwl5ejBo8%2FXPFW3b46KWiin8O7WYradug4BMMHpRREbhVNY05Pp078S%2BrdmYvfI60%2B3JHaX9haM4MPI%2FCFeW9qF4CRJqT4vjzYtElSMlj9MfX%2F0FbBInltBdTlTq16jiK5L1L%2FXS9DpyGwwYhIc87MR2boaM9LEcXbxMtTgKia%2F4A1yxbUacnru1PoqFYe5E92dHR%2F1OiHFdgYDnLbxWHoR3MJq4rsQGOqUBZx3Fa%2F0WbWWWve4Zj8DDMe0dtVP%2FnzWeuhmi3izRRyKOYRUVUGUQK6lHRbkS1T5aN5uRFiuooLts%2B%2FUwcATpxDkPiihXl8wpBW52L%2FIxMzLpNP%2BRr56r23AA8ak6LGvbMyeJXyVVflAVjZcVZHrbJ7zcKQ426dsxnhNRrJitB6GcjgDECDnjxCgYL8K7yDGTP8wdTCP11otBGubptUsKZpHyXwoD&X-Amz-Signature=23040be57eb908de6f6b3ea496d469868a0e5cd6f152ca246be1d0bdb7d89449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643LWJRBA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzPbfF4p1osSU8sSnwdx7Ud7vOIOJdwEPte6RiIX5jMAiEAzIBQ7MDID1%2Fa8imXcuaSY%2Frc%2BZL3mEnV%2FeLaMMGydLUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcqhAaWH5fcveCKGircA9IPQsQBm9nB6%2B5JgJVb3qVUkUfVUrNjkEiJny6P1BBdkMbJQpy1hLwXosDR5SAPFXSZXqxAoCgJ8kEss%2F07B1QPgRIHeaJXZN677q78gTVxXxQUjESD89MXKQLbEQ9TSgy4H0093obfc01peTE79btn9I5spDC6qhMIlBlWa9id35xJORf60Buprh2b5%2BlBjBuyOkZQ3XJz4eNiflpGZ5pV1A6g1EufAwDXNsZ28zcBamurclrnpaFfdeOmZc9j7rYfNAi8%2F1ApiIOh3iD1blK3mLth60JkWfa6aJOL5xKr6JjlEg8MkWtgDvoUjLZc9RApb%2B87HgKbgvXbBLskJ6TPJyqp44PWKZqnxw%2BkAVcudgiP40%2BhXSa3NFrneiM1w8fMPL7%2FEsCk5r6mDwlJMacZVTMs3KJSgxgFcwl5ejBo8%2FXPFW3b46KWiin8O7WYradug4BMMHpRREbhVNY05Pp078S%2BrdmYvfI60%2B3JHaX9haM4MPI%2FCFeW9qF4CRJqT4vjzYtElSMlj9MfX%2F0FbBInltBdTlTq16jiK5L1L%2FXS9DpyGwwYhIc87MR2boaM9LEcXbxMtTgKia%2F4A1yxbUacnru1PoqFYe5E92dHR%2F1OiHFdgYDnLbxWHoR3MJq4rsQGOqUBZx3Fa%2F0WbWWWve4Zj8DDMe0dtVP%2FnzWeuhmi3izRRyKOYRUVUGUQK6lHRbkS1T5aN5uRFiuooLts%2B%2FUwcATpxDkPiihXl8wpBW52L%2FIxMzLpNP%2BRr56r23AA8ak6LGvbMyeJXyVVflAVjZcVZHrbJ7zcKQ426dsxnhNRrJitB6GcjgDECDnjxCgYL8K7yDGTP8wdTCP11otBGubptUsKZpHyXwoD&X-Amz-Signature=82dff06bfc890e8e1b6b1de9a9c2220f9074463f47294d0001a766e590654263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643LWJRBA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzPbfF4p1osSU8sSnwdx7Ud7vOIOJdwEPte6RiIX5jMAiEAzIBQ7MDID1%2Fa8imXcuaSY%2Frc%2BZL3mEnV%2FeLaMMGydLUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcqhAaWH5fcveCKGircA9IPQsQBm9nB6%2B5JgJVb3qVUkUfVUrNjkEiJny6P1BBdkMbJQpy1hLwXosDR5SAPFXSZXqxAoCgJ8kEss%2F07B1QPgRIHeaJXZN677q78gTVxXxQUjESD89MXKQLbEQ9TSgy4H0093obfc01peTE79btn9I5spDC6qhMIlBlWa9id35xJORf60Buprh2b5%2BlBjBuyOkZQ3XJz4eNiflpGZ5pV1A6g1EufAwDXNsZ28zcBamurclrnpaFfdeOmZc9j7rYfNAi8%2F1ApiIOh3iD1blK3mLth60JkWfa6aJOL5xKr6JjlEg8MkWtgDvoUjLZc9RApb%2B87HgKbgvXbBLskJ6TPJyqp44PWKZqnxw%2BkAVcudgiP40%2BhXSa3NFrneiM1w8fMPL7%2FEsCk5r6mDwlJMacZVTMs3KJSgxgFcwl5ejBo8%2FXPFW3b46KWiin8O7WYradug4BMMHpRREbhVNY05Pp078S%2BrdmYvfI60%2B3JHaX9haM4MPI%2FCFeW9qF4CRJqT4vjzYtElSMlj9MfX%2F0FbBInltBdTlTq16jiK5L1L%2FXS9DpyGwwYhIc87MR2boaM9LEcXbxMtTgKia%2F4A1yxbUacnru1PoqFYe5E92dHR%2F1OiHFdgYDnLbxWHoR3MJq4rsQGOqUBZx3Fa%2F0WbWWWve4Zj8DDMe0dtVP%2FnzWeuhmi3izRRyKOYRUVUGUQK6lHRbkS1T5aN5uRFiuooLts%2B%2FUwcATpxDkPiihXl8wpBW52L%2FIxMzLpNP%2BRr56r23AA8ak6LGvbMyeJXyVVflAVjZcVZHrbJ7zcKQ426dsxnhNRrJitB6GcjgDECDnjxCgYL8K7yDGTP8wdTCP11otBGubptUsKZpHyXwoD&X-Amz-Signature=d4e4f7275306744fdd5213408641247f8d17369806e11c37d39f777daf17b3d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643LWJRBA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzPbfF4p1osSU8sSnwdx7Ud7vOIOJdwEPte6RiIX5jMAiEAzIBQ7MDID1%2Fa8imXcuaSY%2Frc%2BZL3mEnV%2FeLaMMGydLUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcqhAaWH5fcveCKGircA9IPQsQBm9nB6%2B5JgJVb3qVUkUfVUrNjkEiJny6P1BBdkMbJQpy1hLwXosDR5SAPFXSZXqxAoCgJ8kEss%2F07B1QPgRIHeaJXZN677q78gTVxXxQUjESD89MXKQLbEQ9TSgy4H0093obfc01peTE79btn9I5spDC6qhMIlBlWa9id35xJORf60Buprh2b5%2BlBjBuyOkZQ3XJz4eNiflpGZ5pV1A6g1EufAwDXNsZ28zcBamurclrnpaFfdeOmZc9j7rYfNAi8%2F1ApiIOh3iD1blK3mLth60JkWfa6aJOL5xKr6JjlEg8MkWtgDvoUjLZc9RApb%2B87HgKbgvXbBLskJ6TPJyqp44PWKZqnxw%2BkAVcudgiP40%2BhXSa3NFrneiM1w8fMPL7%2FEsCk5r6mDwlJMacZVTMs3KJSgxgFcwl5ejBo8%2FXPFW3b46KWiin8O7WYradug4BMMHpRREbhVNY05Pp078S%2BrdmYvfI60%2B3JHaX9haM4MPI%2FCFeW9qF4CRJqT4vjzYtElSMlj9MfX%2F0FbBInltBdTlTq16jiK5L1L%2FXS9DpyGwwYhIc87MR2boaM9LEcXbxMtTgKia%2F4A1yxbUacnru1PoqFYe5E92dHR%2F1OiHFdgYDnLbxWHoR3MJq4rsQGOqUBZx3Fa%2F0WbWWWve4Zj8DDMe0dtVP%2FnzWeuhmi3izRRyKOYRUVUGUQK6lHRbkS1T5aN5uRFiuooLts%2B%2FUwcATpxDkPiihXl8wpBW52L%2FIxMzLpNP%2BRr56r23AA8ak6LGvbMyeJXyVVflAVjZcVZHrbJ7zcKQ426dsxnhNRrJitB6GcjgDECDnjxCgYL8K7yDGTP8wdTCP11otBGubptUsKZpHyXwoD&X-Amz-Signature=8cbfa6e1b488ebd979c62c304b2466e077e9efbd3b62f36b256cf6a93cf2b89b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643LWJRBA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzPbfF4p1osSU8sSnwdx7Ud7vOIOJdwEPte6RiIX5jMAiEAzIBQ7MDID1%2Fa8imXcuaSY%2Frc%2BZL3mEnV%2FeLaMMGydLUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcqhAaWH5fcveCKGircA9IPQsQBm9nB6%2B5JgJVb3qVUkUfVUrNjkEiJny6P1BBdkMbJQpy1hLwXosDR5SAPFXSZXqxAoCgJ8kEss%2F07B1QPgRIHeaJXZN677q78gTVxXxQUjESD89MXKQLbEQ9TSgy4H0093obfc01peTE79btn9I5spDC6qhMIlBlWa9id35xJORf60Buprh2b5%2BlBjBuyOkZQ3XJz4eNiflpGZ5pV1A6g1EufAwDXNsZ28zcBamurclrnpaFfdeOmZc9j7rYfNAi8%2F1ApiIOh3iD1blK3mLth60JkWfa6aJOL5xKr6JjlEg8MkWtgDvoUjLZc9RApb%2B87HgKbgvXbBLskJ6TPJyqp44PWKZqnxw%2BkAVcudgiP40%2BhXSa3NFrneiM1w8fMPL7%2FEsCk5r6mDwlJMacZVTMs3KJSgxgFcwl5ejBo8%2FXPFW3b46KWiin8O7WYradug4BMMHpRREbhVNY05Pp078S%2BrdmYvfI60%2B3JHaX9haM4MPI%2FCFeW9qF4CRJqT4vjzYtElSMlj9MfX%2F0FbBInltBdTlTq16jiK5L1L%2FXS9DpyGwwYhIc87MR2boaM9LEcXbxMtTgKia%2F4A1yxbUacnru1PoqFYe5E92dHR%2F1OiHFdgYDnLbxWHoR3MJq4rsQGOqUBZx3Fa%2F0WbWWWve4Zj8DDMe0dtVP%2FnzWeuhmi3izRRyKOYRUVUGUQK6lHRbkS1T5aN5uRFiuooLts%2B%2FUwcATpxDkPiihXl8wpBW52L%2FIxMzLpNP%2BRr56r23AA8ak6LGvbMyeJXyVVflAVjZcVZHrbJ7zcKQ426dsxnhNRrJitB6GcjgDECDnjxCgYL8K7yDGTP8wdTCP11otBGubptUsKZpHyXwoD&X-Amz-Signature=7daa74f2956b0dddccd8453e7e1b62b5635ea0c6a5f70c6d114197c2da983181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
