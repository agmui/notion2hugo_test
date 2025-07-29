---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-28T21:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-28T21:43:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEU7H6MO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDbofJZ6ZClpLEklJANfoju65jjFOZXgXLMbvVvkdN%2FSgIgExLD9%2F96WurTn6ykWTpf3zrZtjaJlq7nFZ3SdbfCmCwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDASet9Rd1laUOrnDircA9fmGQLadJieyDuC%2FanUtrqFV71RjqeC46p8F0s%2FRG%2Fcozh6bJLarybPueeR6rRzCbTq0AhZ5FPDqx6woGHu8Del0HT0LuyHawgPW5kVFj54QBhD5G39u9QCBBi6gQCKippF6B2qaQtqKbuzEPs5cruE%2B7FZefpXJHZoDJM6OB1mGaFnuDu2ErV3GRwEB75Zd6DsyNbvkzsRXHHTJE7DM8ZmOpkyXmlJ%2BrevEBB06ztbMZE7F4PJ91Hd6bohuY3YLk3m1aFCV%2BFilzgGRv3ypZxT7wLoVnt1CAYsi9bevsL%2FGxpOQp59W0d84fIj2Bv2f5Cj67zcddflqB4TVD3aq9%2B00yTRfu%2B8SQ6tEzPkD3yEIycBG%2F70tlZ%2BPmONnvrmlE8NoEXNSQ4IXrTXFXlH8GfCA66iSBU6229cQ0QjlwhZBG5v6PaVvmizKQYvqCl2WA%2FT7rHPZypSIAFWKB07ckEl1aNXcRiIse4Z0JS8IUbPs38y72MJ1cHK5tj2vfXK%2BnutL%2FIDYNc%2FRWsJ2i4fKfCbVRBURpY0tsLaSD5yjETiRH2S3e7wplIvzuef%2F0RpPpJxScfXzIEu6mc2H3E8zK5%2FfoEJr0NPY7Pt7KSLcFcrYA9Kj28x7FKsYTOOMLuZo8QGOqUBZBQtUdlzanyTuS5nkDa2umJFvRCwBJjeGSOt6JzUDu0nd0kRpUzQm5emo8EBZX4sSk8VsVjdIR1xdSHQNcRSd23gy5%2BLRdpaaZQAolc15J2jMG5Qc9KlX6Bk9lL6X1wdH%2BZVA0U7Sn86TiwdN%2FOzV5oK9UOqscRduWI%2FEgXL%2FMJeHTipSC0kh5vorjQuUkIM1hOFB%2FBOv74Wuc7boyictuODhaJk&X-Amz-Signature=0b8700f21759ee39ea2091feea5b9fd7fa4c6c3f4b35bd47d23cb7d628e725f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEU7H6MO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDbofJZ6ZClpLEklJANfoju65jjFOZXgXLMbvVvkdN%2FSgIgExLD9%2F96WurTn6ykWTpf3zrZtjaJlq7nFZ3SdbfCmCwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDASet9Rd1laUOrnDircA9fmGQLadJieyDuC%2FanUtrqFV71RjqeC46p8F0s%2FRG%2Fcozh6bJLarybPueeR6rRzCbTq0AhZ5FPDqx6woGHu8Del0HT0LuyHawgPW5kVFj54QBhD5G39u9QCBBi6gQCKippF6B2qaQtqKbuzEPs5cruE%2B7FZefpXJHZoDJM6OB1mGaFnuDu2ErV3GRwEB75Zd6DsyNbvkzsRXHHTJE7DM8ZmOpkyXmlJ%2BrevEBB06ztbMZE7F4PJ91Hd6bohuY3YLk3m1aFCV%2BFilzgGRv3ypZxT7wLoVnt1CAYsi9bevsL%2FGxpOQp59W0d84fIj2Bv2f5Cj67zcddflqB4TVD3aq9%2B00yTRfu%2B8SQ6tEzPkD3yEIycBG%2F70tlZ%2BPmONnvrmlE8NoEXNSQ4IXrTXFXlH8GfCA66iSBU6229cQ0QjlwhZBG5v6PaVvmizKQYvqCl2WA%2FT7rHPZypSIAFWKB07ckEl1aNXcRiIse4Z0JS8IUbPs38y72MJ1cHK5tj2vfXK%2BnutL%2FIDYNc%2FRWsJ2i4fKfCbVRBURpY0tsLaSD5yjETiRH2S3e7wplIvzuef%2F0RpPpJxScfXzIEu6mc2H3E8zK5%2FfoEJr0NPY7Pt7KSLcFcrYA9Kj28x7FKsYTOOMLuZo8QGOqUBZBQtUdlzanyTuS5nkDa2umJFvRCwBJjeGSOt6JzUDu0nd0kRpUzQm5emo8EBZX4sSk8VsVjdIR1xdSHQNcRSd23gy5%2BLRdpaaZQAolc15J2jMG5Qc9KlX6Bk9lL6X1wdH%2BZVA0U7Sn86TiwdN%2FOzV5oK9UOqscRduWI%2FEgXL%2FMJeHTipSC0kh5vorjQuUkIM1hOFB%2FBOv74Wuc7boyictuODhaJk&X-Amz-Signature=9a445889de4f6ca90af5c0be31d072aa1eb4260382e348f9c75e7d015241b8eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEU7H6MO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDbofJZ6ZClpLEklJANfoju65jjFOZXgXLMbvVvkdN%2FSgIgExLD9%2F96WurTn6ykWTpf3zrZtjaJlq7nFZ3SdbfCmCwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDASet9Rd1laUOrnDircA9fmGQLadJieyDuC%2FanUtrqFV71RjqeC46p8F0s%2FRG%2Fcozh6bJLarybPueeR6rRzCbTq0AhZ5FPDqx6woGHu8Del0HT0LuyHawgPW5kVFj54QBhD5G39u9QCBBi6gQCKippF6B2qaQtqKbuzEPs5cruE%2B7FZefpXJHZoDJM6OB1mGaFnuDu2ErV3GRwEB75Zd6DsyNbvkzsRXHHTJE7DM8ZmOpkyXmlJ%2BrevEBB06ztbMZE7F4PJ91Hd6bohuY3YLk3m1aFCV%2BFilzgGRv3ypZxT7wLoVnt1CAYsi9bevsL%2FGxpOQp59W0d84fIj2Bv2f5Cj67zcddflqB4TVD3aq9%2B00yTRfu%2B8SQ6tEzPkD3yEIycBG%2F70tlZ%2BPmONnvrmlE8NoEXNSQ4IXrTXFXlH8GfCA66iSBU6229cQ0QjlwhZBG5v6PaVvmizKQYvqCl2WA%2FT7rHPZypSIAFWKB07ckEl1aNXcRiIse4Z0JS8IUbPs38y72MJ1cHK5tj2vfXK%2BnutL%2FIDYNc%2FRWsJ2i4fKfCbVRBURpY0tsLaSD5yjETiRH2S3e7wplIvzuef%2F0RpPpJxScfXzIEu6mc2H3E8zK5%2FfoEJr0NPY7Pt7KSLcFcrYA9Kj28x7FKsYTOOMLuZo8QGOqUBZBQtUdlzanyTuS5nkDa2umJFvRCwBJjeGSOt6JzUDu0nd0kRpUzQm5emo8EBZX4sSk8VsVjdIR1xdSHQNcRSd23gy5%2BLRdpaaZQAolc15J2jMG5Qc9KlX6Bk9lL6X1wdH%2BZVA0U7Sn86TiwdN%2FOzV5oK9UOqscRduWI%2FEgXL%2FMJeHTipSC0kh5vorjQuUkIM1hOFB%2FBOv74Wuc7boyictuODhaJk&X-Amz-Signature=18ec2be614804f0829e85904eef4b2498f8aad9734582be3678e27a6d3767c4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEU7H6MO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDbofJZ6ZClpLEklJANfoju65jjFOZXgXLMbvVvkdN%2FSgIgExLD9%2F96WurTn6ykWTpf3zrZtjaJlq7nFZ3SdbfCmCwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDASet9Rd1laUOrnDircA9fmGQLadJieyDuC%2FanUtrqFV71RjqeC46p8F0s%2FRG%2Fcozh6bJLarybPueeR6rRzCbTq0AhZ5FPDqx6woGHu8Del0HT0LuyHawgPW5kVFj54QBhD5G39u9QCBBi6gQCKippF6B2qaQtqKbuzEPs5cruE%2B7FZefpXJHZoDJM6OB1mGaFnuDu2ErV3GRwEB75Zd6DsyNbvkzsRXHHTJE7DM8ZmOpkyXmlJ%2BrevEBB06ztbMZE7F4PJ91Hd6bohuY3YLk3m1aFCV%2BFilzgGRv3ypZxT7wLoVnt1CAYsi9bevsL%2FGxpOQp59W0d84fIj2Bv2f5Cj67zcddflqB4TVD3aq9%2B00yTRfu%2B8SQ6tEzPkD3yEIycBG%2F70tlZ%2BPmONnvrmlE8NoEXNSQ4IXrTXFXlH8GfCA66iSBU6229cQ0QjlwhZBG5v6PaVvmizKQYvqCl2WA%2FT7rHPZypSIAFWKB07ckEl1aNXcRiIse4Z0JS8IUbPs38y72MJ1cHK5tj2vfXK%2BnutL%2FIDYNc%2FRWsJ2i4fKfCbVRBURpY0tsLaSD5yjETiRH2S3e7wplIvzuef%2F0RpPpJxScfXzIEu6mc2H3E8zK5%2FfoEJr0NPY7Pt7KSLcFcrYA9Kj28x7FKsYTOOMLuZo8QGOqUBZBQtUdlzanyTuS5nkDa2umJFvRCwBJjeGSOt6JzUDu0nd0kRpUzQm5emo8EBZX4sSk8VsVjdIR1xdSHQNcRSd23gy5%2BLRdpaaZQAolc15J2jMG5Qc9KlX6Bk9lL6X1wdH%2BZVA0U7Sn86TiwdN%2FOzV5oK9UOqscRduWI%2FEgXL%2FMJeHTipSC0kh5vorjQuUkIM1hOFB%2FBOv74Wuc7boyictuODhaJk&X-Amz-Signature=da6b1a3c7c438f34c5fef73a9120f2b5b746f3e048a2dfa7b6b1dbd68067e133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEU7H6MO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDbofJZ6ZClpLEklJANfoju65jjFOZXgXLMbvVvkdN%2FSgIgExLD9%2F96WurTn6ykWTpf3zrZtjaJlq7nFZ3SdbfCmCwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDASet9Rd1laUOrnDircA9fmGQLadJieyDuC%2FanUtrqFV71RjqeC46p8F0s%2FRG%2Fcozh6bJLarybPueeR6rRzCbTq0AhZ5FPDqx6woGHu8Del0HT0LuyHawgPW5kVFj54QBhD5G39u9QCBBi6gQCKippF6B2qaQtqKbuzEPs5cruE%2B7FZefpXJHZoDJM6OB1mGaFnuDu2ErV3GRwEB75Zd6DsyNbvkzsRXHHTJE7DM8ZmOpkyXmlJ%2BrevEBB06ztbMZE7F4PJ91Hd6bohuY3YLk3m1aFCV%2BFilzgGRv3ypZxT7wLoVnt1CAYsi9bevsL%2FGxpOQp59W0d84fIj2Bv2f5Cj67zcddflqB4TVD3aq9%2B00yTRfu%2B8SQ6tEzPkD3yEIycBG%2F70tlZ%2BPmONnvrmlE8NoEXNSQ4IXrTXFXlH8GfCA66iSBU6229cQ0QjlwhZBG5v6PaVvmizKQYvqCl2WA%2FT7rHPZypSIAFWKB07ckEl1aNXcRiIse4Z0JS8IUbPs38y72MJ1cHK5tj2vfXK%2BnutL%2FIDYNc%2FRWsJ2i4fKfCbVRBURpY0tsLaSD5yjETiRH2S3e7wplIvzuef%2F0RpPpJxScfXzIEu6mc2H3E8zK5%2FfoEJr0NPY7Pt7KSLcFcrYA9Kj28x7FKsYTOOMLuZo8QGOqUBZBQtUdlzanyTuS5nkDa2umJFvRCwBJjeGSOt6JzUDu0nd0kRpUzQm5emo8EBZX4sSk8VsVjdIR1xdSHQNcRSd23gy5%2BLRdpaaZQAolc15J2jMG5Qc9KlX6Bk9lL6X1wdH%2BZVA0U7Sn86TiwdN%2FOzV5oK9UOqscRduWI%2FEgXL%2FMJeHTipSC0kh5vorjQuUkIM1hOFB%2FBOv74Wuc7boyictuODhaJk&X-Amz-Signature=4ffccc0f6b6dd5c4e9c55bd69d952537a61be81740088de480a25bc75745937c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEU7H6MO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDbofJZ6ZClpLEklJANfoju65jjFOZXgXLMbvVvkdN%2FSgIgExLD9%2F96WurTn6ykWTpf3zrZtjaJlq7nFZ3SdbfCmCwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDASet9Rd1laUOrnDircA9fmGQLadJieyDuC%2FanUtrqFV71RjqeC46p8F0s%2FRG%2Fcozh6bJLarybPueeR6rRzCbTq0AhZ5FPDqx6woGHu8Del0HT0LuyHawgPW5kVFj54QBhD5G39u9QCBBi6gQCKippF6B2qaQtqKbuzEPs5cruE%2B7FZefpXJHZoDJM6OB1mGaFnuDu2ErV3GRwEB75Zd6DsyNbvkzsRXHHTJE7DM8ZmOpkyXmlJ%2BrevEBB06ztbMZE7F4PJ91Hd6bohuY3YLk3m1aFCV%2BFilzgGRv3ypZxT7wLoVnt1CAYsi9bevsL%2FGxpOQp59W0d84fIj2Bv2f5Cj67zcddflqB4TVD3aq9%2B00yTRfu%2B8SQ6tEzPkD3yEIycBG%2F70tlZ%2BPmONnvrmlE8NoEXNSQ4IXrTXFXlH8GfCA66iSBU6229cQ0QjlwhZBG5v6PaVvmizKQYvqCl2WA%2FT7rHPZypSIAFWKB07ckEl1aNXcRiIse4Z0JS8IUbPs38y72MJ1cHK5tj2vfXK%2BnutL%2FIDYNc%2FRWsJ2i4fKfCbVRBURpY0tsLaSD5yjETiRH2S3e7wplIvzuef%2F0RpPpJxScfXzIEu6mc2H3E8zK5%2FfoEJr0NPY7Pt7KSLcFcrYA9Kj28x7FKsYTOOMLuZo8QGOqUBZBQtUdlzanyTuS5nkDa2umJFvRCwBJjeGSOt6JzUDu0nd0kRpUzQm5emo8EBZX4sSk8VsVjdIR1xdSHQNcRSd23gy5%2BLRdpaaZQAolc15J2jMG5Qc9KlX6Bk9lL6X1wdH%2BZVA0U7Sn86TiwdN%2FOzV5oK9UOqscRduWI%2FEgXL%2FMJeHTipSC0kh5vorjQuUkIM1hOFB%2FBOv74Wuc7boyictuODhaJk&X-Amz-Signature=240167eb0e2991ed1e5c45eb1ce413473ff9e5cf9c6800663d615ca9004d1cd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEU7H6MO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDbofJZ6ZClpLEklJANfoju65jjFOZXgXLMbvVvkdN%2FSgIgExLD9%2F96WurTn6ykWTpf3zrZtjaJlq7nFZ3SdbfCmCwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDASet9Rd1laUOrnDircA9fmGQLadJieyDuC%2FanUtrqFV71RjqeC46p8F0s%2FRG%2Fcozh6bJLarybPueeR6rRzCbTq0AhZ5FPDqx6woGHu8Del0HT0LuyHawgPW5kVFj54QBhD5G39u9QCBBi6gQCKippF6B2qaQtqKbuzEPs5cruE%2B7FZefpXJHZoDJM6OB1mGaFnuDu2ErV3GRwEB75Zd6DsyNbvkzsRXHHTJE7DM8ZmOpkyXmlJ%2BrevEBB06ztbMZE7F4PJ91Hd6bohuY3YLk3m1aFCV%2BFilzgGRv3ypZxT7wLoVnt1CAYsi9bevsL%2FGxpOQp59W0d84fIj2Bv2f5Cj67zcddflqB4TVD3aq9%2B00yTRfu%2B8SQ6tEzPkD3yEIycBG%2F70tlZ%2BPmONnvrmlE8NoEXNSQ4IXrTXFXlH8GfCA66iSBU6229cQ0QjlwhZBG5v6PaVvmizKQYvqCl2WA%2FT7rHPZypSIAFWKB07ckEl1aNXcRiIse4Z0JS8IUbPs38y72MJ1cHK5tj2vfXK%2BnutL%2FIDYNc%2FRWsJ2i4fKfCbVRBURpY0tsLaSD5yjETiRH2S3e7wplIvzuef%2F0RpPpJxScfXzIEu6mc2H3E8zK5%2FfoEJr0NPY7Pt7KSLcFcrYA9Kj28x7FKsYTOOMLuZo8QGOqUBZBQtUdlzanyTuS5nkDa2umJFvRCwBJjeGSOt6JzUDu0nd0kRpUzQm5emo8EBZX4sSk8VsVjdIR1xdSHQNcRSd23gy5%2BLRdpaaZQAolc15J2jMG5Qc9KlX6Bk9lL6X1wdH%2BZVA0U7Sn86TiwdN%2FOzV5oK9UOqscRduWI%2FEgXL%2FMJeHTipSC0kh5vorjQuUkIM1hOFB%2FBOv74Wuc7boyictuODhaJk&X-Amz-Signature=fb5ddce3e6b7c5f36995b9571619f5b6f705a507a79d6421b17e02a472a892be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEU7H6MO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDbofJZ6ZClpLEklJANfoju65jjFOZXgXLMbvVvkdN%2FSgIgExLD9%2F96WurTn6ykWTpf3zrZtjaJlq7nFZ3SdbfCmCwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDASet9Rd1laUOrnDircA9fmGQLadJieyDuC%2FanUtrqFV71RjqeC46p8F0s%2FRG%2Fcozh6bJLarybPueeR6rRzCbTq0AhZ5FPDqx6woGHu8Del0HT0LuyHawgPW5kVFj54QBhD5G39u9QCBBi6gQCKippF6B2qaQtqKbuzEPs5cruE%2B7FZefpXJHZoDJM6OB1mGaFnuDu2ErV3GRwEB75Zd6DsyNbvkzsRXHHTJE7DM8ZmOpkyXmlJ%2BrevEBB06ztbMZE7F4PJ91Hd6bohuY3YLk3m1aFCV%2BFilzgGRv3ypZxT7wLoVnt1CAYsi9bevsL%2FGxpOQp59W0d84fIj2Bv2f5Cj67zcddflqB4TVD3aq9%2B00yTRfu%2B8SQ6tEzPkD3yEIycBG%2F70tlZ%2BPmONnvrmlE8NoEXNSQ4IXrTXFXlH8GfCA66iSBU6229cQ0QjlwhZBG5v6PaVvmizKQYvqCl2WA%2FT7rHPZypSIAFWKB07ckEl1aNXcRiIse4Z0JS8IUbPs38y72MJ1cHK5tj2vfXK%2BnutL%2FIDYNc%2FRWsJ2i4fKfCbVRBURpY0tsLaSD5yjETiRH2S3e7wplIvzuef%2F0RpPpJxScfXzIEu6mc2H3E8zK5%2FfoEJr0NPY7Pt7KSLcFcrYA9Kj28x7FKsYTOOMLuZo8QGOqUBZBQtUdlzanyTuS5nkDa2umJFvRCwBJjeGSOt6JzUDu0nd0kRpUzQm5emo8EBZX4sSk8VsVjdIR1xdSHQNcRSd23gy5%2BLRdpaaZQAolc15J2jMG5Qc9KlX6Bk9lL6X1wdH%2BZVA0U7Sn86TiwdN%2FOzV5oK9UOqscRduWI%2FEgXL%2FMJeHTipSC0kh5vorjQuUkIM1hOFB%2FBOv74Wuc7boyictuODhaJk&X-Amz-Signature=f9af250308cf8955e9380428e407a5d3151fdad786c5b388b85c3fbe778485f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEU7H6MO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDbofJZ6ZClpLEklJANfoju65jjFOZXgXLMbvVvkdN%2FSgIgExLD9%2F96WurTn6ykWTpf3zrZtjaJlq7nFZ3SdbfCmCwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDASet9Rd1laUOrnDircA9fmGQLadJieyDuC%2FanUtrqFV71RjqeC46p8F0s%2FRG%2Fcozh6bJLarybPueeR6rRzCbTq0AhZ5FPDqx6woGHu8Del0HT0LuyHawgPW5kVFj54QBhD5G39u9QCBBi6gQCKippF6B2qaQtqKbuzEPs5cruE%2B7FZefpXJHZoDJM6OB1mGaFnuDu2ErV3GRwEB75Zd6DsyNbvkzsRXHHTJE7DM8ZmOpkyXmlJ%2BrevEBB06ztbMZE7F4PJ91Hd6bohuY3YLk3m1aFCV%2BFilzgGRv3ypZxT7wLoVnt1CAYsi9bevsL%2FGxpOQp59W0d84fIj2Bv2f5Cj67zcddflqB4TVD3aq9%2B00yTRfu%2B8SQ6tEzPkD3yEIycBG%2F70tlZ%2BPmONnvrmlE8NoEXNSQ4IXrTXFXlH8GfCA66iSBU6229cQ0QjlwhZBG5v6PaVvmizKQYvqCl2WA%2FT7rHPZypSIAFWKB07ckEl1aNXcRiIse4Z0JS8IUbPs38y72MJ1cHK5tj2vfXK%2BnutL%2FIDYNc%2FRWsJ2i4fKfCbVRBURpY0tsLaSD5yjETiRH2S3e7wplIvzuef%2F0RpPpJxScfXzIEu6mc2H3E8zK5%2FfoEJr0NPY7Pt7KSLcFcrYA9Kj28x7FKsYTOOMLuZo8QGOqUBZBQtUdlzanyTuS5nkDa2umJFvRCwBJjeGSOt6JzUDu0nd0kRpUzQm5emo8EBZX4sSk8VsVjdIR1xdSHQNcRSd23gy5%2BLRdpaaZQAolc15J2jMG5Qc9KlX6Bk9lL6X1wdH%2BZVA0U7Sn86TiwdN%2FOzV5oK9UOqscRduWI%2FEgXL%2FMJeHTipSC0kh5vorjQuUkIM1hOFB%2FBOv74Wuc7boyictuODhaJk&X-Amz-Signature=850e84e3761bb416313c824e81aeb56559a2ee9c32943d74d1832d433c7a76e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEU7H6MO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDbofJZ6ZClpLEklJANfoju65jjFOZXgXLMbvVvkdN%2FSgIgExLD9%2F96WurTn6ykWTpf3zrZtjaJlq7nFZ3SdbfCmCwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDASet9Rd1laUOrnDircA9fmGQLadJieyDuC%2FanUtrqFV71RjqeC46p8F0s%2FRG%2Fcozh6bJLarybPueeR6rRzCbTq0AhZ5FPDqx6woGHu8Del0HT0LuyHawgPW5kVFj54QBhD5G39u9QCBBi6gQCKippF6B2qaQtqKbuzEPs5cruE%2B7FZefpXJHZoDJM6OB1mGaFnuDu2ErV3GRwEB75Zd6DsyNbvkzsRXHHTJE7DM8ZmOpkyXmlJ%2BrevEBB06ztbMZE7F4PJ91Hd6bohuY3YLk3m1aFCV%2BFilzgGRv3ypZxT7wLoVnt1CAYsi9bevsL%2FGxpOQp59W0d84fIj2Bv2f5Cj67zcddflqB4TVD3aq9%2B00yTRfu%2B8SQ6tEzPkD3yEIycBG%2F70tlZ%2BPmONnvrmlE8NoEXNSQ4IXrTXFXlH8GfCA66iSBU6229cQ0QjlwhZBG5v6PaVvmizKQYvqCl2WA%2FT7rHPZypSIAFWKB07ckEl1aNXcRiIse4Z0JS8IUbPs38y72MJ1cHK5tj2vfXK%2BnutL%2FIDYNc%2FRWsJ2i4fKfCbVRBURpY0tsLaSD5yjETiRH2S3e7wplIvzuef%2F0RpPpJxScfXzIEu6mc2H3E8zK5%2FfoEJr0NPY7Pt7KSLcFcrYA9Kj28x7FKsYTOOMLuZo8QGOqUBZBQtUdlzanyTuS5nkDa2umJFvRCwBJjeGSOt6JzUDu0nd0kRpUzQm5emo8EBZX4sSk8VsVjdIR1xdSHQNcRSd23gy5%2BLRdpaaZQAolc15J2jMG5Qc9KlX6Bk9lL6X1wdH%2BZVA0U7Sn86TiwdN%2FOzV5oK9UOqscRduWI%2FEgXL%2FMJeHTipSC0kh5vorjQuUkIM1hOFB%2FBOv74Wuc7boyictuODhaJk&X-Amz-Signature=2da41be45e8446ad3ae055e816e26a1d9c0a0976e1a9c956c462e804d5f8fb3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
   
    <collision>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
    </collision>

    <xacro:box_inertia m="15" w="${base_width}" d="${base_length}" h="${base_height}"/>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEU7H6MO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDbofJZ6ZClpLEklJANfoju65jjFOZXgXLMbvVvkdN%2FSgIgExLD9%2F96WurTn6ykWTpf3zrZtjaJlq7nFZ3SdbfCmCwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDASet9Rd1laUOrnDircA9fmGQLadJieyDuC%2FanUtrqFV71RjqeC46p8F0s%2FRG%2Fcozh6bJLarybPueeR6rRzCbTq0AhZ5FPDqx6woGHu8Del0HT0LuyHawgPW5kVFj54QBhD5G39u9QCBBi6gQCKippF6B2qaQtqKbuzEPs5cruE%2B7FZefpXJHZoDJM6OB1mGaFnuDu2ErV3GRwEB75Zd6DsyNbvkzsRXHHTJE7DM8ZmOpkyXmlJ%2BrevEBB06ztbMZE7F4PJ91Hd6bohuY3YLk3m1aFCV%2BFilzgGRv3ypZxT7wLoVnt1CAYsi9bevsL%2FGxpOQp59W0d84fIj2Bv2f5Cj67zcddflqB4TVD3aq9%2B00yTRfu%2B8SQ6tEzPkD3yEIycBG%2F70tlZ%2BPmONnvrmlE8NoEXNSQ4IXrTXFXlH8GfCA66iSBU6229cQ0QjlwhZBG5v6PaVvmizKQYvqCl2WA%2FT7rHPZypSIAFWKB07ckEl1aNXcRiIse4Z0JS8IUbPs38y72MJ1cHK5tj2vfXK%2BnutL%2FIDYNc%2FRWsJ2i4fKfCbVRBURpY0tsLaSD5yjETiRH2S3e7wplIvzuef%2F0RpPpJxScfXzIEu6mc2H3E8zK5%2FfoEJr0NPY7Pt7KSLcFcrYA9Kj28x7FKsYTOOMLuZo8QGOqUBZBQtUdlzanyTuS5nkDa2umJFvRCwBJjeGSOt6JzUDu0nd0kRpUzQm5emo8EBZX4sSk8VsVjdIR1xdSHQNcRSd23gy5%2BLRdpaaZQAolc15J2jMG5Qc9KlX6Bk9lL6X1wdH%2BZVA0U7Sn86TiwdN%2FOzV5oK9UOqscRduWI%2FEgXL%2FMJeHTipSC0kh5vorjQuUkIM1hOFB%2FBOv74Wuc7boyictuODhaJk&X-Amz-Signature=8771d4b4b1ee7ab1c4317124d7d4fa75b66e967bfecb48450f6ffb29daf1317c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEU7H6MO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDbofJZ6ZClpLEklJANfoju65jjFOZXgXLMbvVvkdN%2FSgIgExLD9%2F96WurTn6ykWTpf3zrZtjaJlq7nFZ3SdbfCmCwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDASet9Rd1laUOrnDircA9fmGQLadJieyDuC%2FanUtrqFV71RjqeC46p8F0s%2FRG%2Fcozh6bJLarybPueeR6rRzCbTq0AhZ5FPDqx6woGHu8Del0HT0LuyHawgPW5kVFj54QBhD5G39u9QCBBi6gQCKippF6B2qaQtqKbuzEPs5cruE%2B7FZefpXJHZoDJM6OB1mGaFnuDu2ErV3GRwEB75Zd6DsyNbvkzsRXHHTJE7DM8ZmOpkyXmlJ%2BrevEBB06ztbMZE7F4PJ91Hd6bohuY3YLk3m1aFCV%2BFilzgGRv3ypZxT7wLoVnt1CAYsi9bevsL%2FGxpOQp59W0d84fIj2Bv2f5Cj67zcddflqB4TVD3aq9%2B00yTRfu%2B8SQ6tEzPkD3yEIycBG%2F70tlZ%2BPmONnvrmlE8NoEXNSQ4IXrTXFXlH8GfCA66iSBU6229cQ0QjlwhZBG5v6PaVvmizKQYvqCl2WA%2FT7rHPZypSIAFWKB07ckEl1aNXcRiIse4Z0JS8IUbPs38y72MJ1cHK5tj2vfXK%2BnutL%2FIDYNc%2FRWsJ2i4fKfCbVRBURpY0tsLaSD5yjETiRH2S3e7wplIvzuef%2F0RpPpJxScfXzIEu6mc2H3E8zK5%2FfoEJr0NPY7Pt7KSLcFcrYA9Kj28x7FKsYTOOMLuZo8QGOqUBZBQtUdlzanyTuS5nkDa2umJFvRCwBJjeGSOt6JzUDu0nd0kRpUzQm5emo8EBZX4sSk8VsVjdIR1xdSHQNcRSd23gy5%2BLRdpaaZQAolc15J2jMG5Qc9KlX6Bk9lL6X1wdH%2BZVA0U7Sn86TiwdN%2FOzV5oK9UOqscRduWI%2FEgXL%2FMJeHTipSC0kh5vorjQuUkIM1hOFB%2FBOv74Wuc7boyictuODhaJk&X-Amz-Signature=1d1b03a51fe6cacacb50bb534d39b57ef11b6d6ac352bccd06dff63561d75d77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEU7H6MO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDbofJZ6ZClpLEklJANfoju65jjFOZXgXLMbvVvkdN%2FSgIgExLD9%2F96WurTn6ykWTpf3zrZtjaJlq7nFZ3SdbfCmCwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDASet9Rd1laUOrnDircA9fmGQLadJieyDuC%2FanUtrqFV71RjqeC46p8F0s%2FRG%2Fcozh6bJLarybPueeR6rRzCbTq0AhZ5FPDqx6woGHu8Del0HT0LuyHawgPW5kVFj54QBhD5G39u9QCBBi6gQCKippF6B2qaQtqKbuzEPs5cruE%2B7FZefpXJHZoDJM6OB1mGaFnuDu2ErV3GRwEB75Zd6DsyNbvkzsRXHHTJE7DM8ZmOpkyXmlJ%2BrevEBB06ztbMZE7F4PJ91Hd6bohuY3YLk3m1aFCV%2BFilzgGRv3ypZxT7wLoVnt1CAYsi9bevsL%2FGxpOQp59W0d84fIj2Bv2f5Cj67zcddflqB4TVD3aq9%2B00yTRfu%2B8SQ6tEzPkD3yEIycBG%2F70tlZ%2BPmONnvrmlE8NoEXNSQ4IXrTXFXlH8GfCA66iSBU6229cQ0QjlwhZBG5v6PaVvmizKQYvqCl2WA%2FT7rHPZypSIAFWKB07ckEl1aNXcRiIse4Z0JS8IUbPs38y72MJ1cHK5tj2vfXK%2BnutL%2FIDYNc%2FRWsJ2i4fKfCbVRBURpY0tsLaSD5yjETiRH2S3e7wplIvzuef%2F0RpPpJxScfXzIEu6mc2H3E8zK5%2FfoEJr0NPY7Pt7KSLcFcrYA9Kj28x7FKsYTOOMLuZo8QGOqUBZBQtUdlzanyTuS5nkDa2umJFvRCwBJjeGSOt6JzUDu0nd0kRpUzQm5emo8EBZX4sSk8VsVjdIR1xdSHQNcRSd23gy5%2BLRdpaaZQAolc15J2jMG5Qc9KlX6Bk9lL6X1wdH%2BZVA0U7Sn86TiwdN%2FOzV5oK9UOqscRduWI%2FEgXL%2FMJeHTipSC0kh5vorjQuUkIM1hOFB%2FBOv74Wuc7boyictuODhaJk&X-Amz-Signature=0e90bb38454e5ae0b88401a931d218798f35fcdc195a80d10bad060fdfb95d5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEU7H6MO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDbofJZ6ZClpLEklJANfoju65jjFOZXgXLMbvVvkdN%2FSgIgExLD9%2F96WurTn6ykWTpf3zrZtjaJlq7nFZ3SdbfCmCwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDASet9Rd1laUOrnDircA9fmGQLadJieyDuC%2FanUtrqFV71RjqeC46p8F0s%2FRG%2Fcozh6bJLarybPueeR6rRzCbTq0AhZ5FPDqx6woGHu8Del0HT0LuyHawgPW5kVFj54QBhD5G39u9QCBBi6gQCKippF6B2qaQtqKbuzEPs5cruE%2B7FZefpXJHZoDJM6OB1mGaFnuDu2ErV3GRwEB75Zd6DsyNbvkzsRXHHTJE7DM8ZmOpkyXmlJ%2BrevEBB06ztbMZE7F4PJ91Hd6bohuY3YLk3m1aFCV%2BFilzgGRv3ypZxT7wLoVnt1CAYsi9bevsL%2FGxpOQp59W0d84fIj2Bv2f5Cj67zcddflqB4TVD3aq9%2B00yTRfu%2B8SQ6tEzPkD3yEIycBG%2F70tlZ%2BPmONnvrmlE8NoEXNSQ4IXrTXFXlH8GfCA66iSBU6229cQ0QjlwhZBG5v6PaVvmizKQYvqCl2WA%2FT7rHPZypSIAFWKB07ckEl1aNXcRiIse4Z0JS8IUbPs38y72MJ1cHK5tj2vfXK%2BnutL%2FIDYNc%2FRWsJ2i4fKfCbVRBURpY0tsLaSD5yjETiRH2S3e7wplIvzuef%2F0RpPpJxScfXzIEu6mc2H3E8zK5%2FfoEJr0NPY7Pt7KSLcFcrYA9Kj28x7FKsYTOOMLuZo8QGOqUBZBQtUdlzanyTuS5nkDa2umJFvRCwBJjeGSOt6JzUDu0nd0kRpUzQm5emo8EBZX4sSk8VsVjdIR1xdSHQNcRSd23gy5%2BLRdpaaZQAolc15J2jMG5Qc9KlX6Bk9lL6X1wdH%2BZVA0U7Sn86TiwdN%2FOzV5oK9UOqscRduWI%2FEgXL%2FMJeHTipSC0kh5vorjQuUkIM1hOFB%2FBOv74Wuc7boyictuODhaJk&X-Amz-Signature=fe4f3970eb3f4b17b6153b33460c2d0dca206b032d6ff8e14596c52c6edcdd83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JNULKGY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCSivWssfJCPC4W55%2BUcTmLMPTEmutGyeHQo%2BaP6uyZkAIhAMvHA13e1R5SUZsF8%2FgE5ZxFo6F9zWGLVGkm%2FehVvQaVKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxsp4QAh%2BId3VInhbMq3APmnuQ5QoMYF%2FplkG7wInt9tc2vU8hrSgzj74iUJ2CHWq3T%2B0VTTNeinVy99qt2wqZfeU6G5t4eEZYBmkrgmDXtGlXAaxcibv35e4tf6FRA8WHeuKEGD7s7n9O3xYej%2FFaiUZ%2Bo8foSK%2B9DLoxIW3mRZFUu567pz%2Bx3dyHErHKWjYl0c0lTnzYx%2Fv6bf1Ekb1fI2Mfx3%2FU9ezU4EVBXGbiLeIoOpGOkYPu2v%2BIucINPwBLPZMqKkR8TKz9RChNcm9%2Bc9woZvs1JUHCz529cIyboq7mngrxfHV7VgC3GBVqHiOhwtQ4Kyib5E5pq6ztu873mG1pOKi31B2WbhJLgANFL5ylPHa171%2BzjsoRe7Ppj0UUCDVpNBSmjhu1T6ZvnCH2zLO6K9VVXoA3Gka7YUQFeLKhUVe1AF3ylYE5HVlGP7NtK2bFFW9IqpYxvvkaAaTD%2FJxfJuGledjJaBr0TFprHXkWhXvWT9XYkc7oFZcSQw9ztzKTx1wVXOMtLeGNrGZlk6YodLdXzFjD4ylmF2255a1%2B99nHU2vRb%2FkiUhTjfz1M61hHEeGELFEoSfBubWUD%2B3US2hc2tjL%2FCiemu1AF%2FgM0zZ%2B4TPN%2B4abOdft4HlFv0JJF%2BkNO50h5vYjCAmKPEBjqkARPFEvDn%2FU2%2Bz%2BRyXsgcgmGb0vNlRZ390Y1uicCzQ5piGKFwTpzqX3AMMq6nGtZ%2Fn6zKroskY4hFwtxFmnK5OdQrK3THt%2BXPJh8Orx833FAzK%2B46XpVvO7U9hX0K13FLiXZ4z7%2FAtIE9us0x5xKuRvQaQS610VeJO79Rc2JolDhxxA31uoB4ygnj5E%2FyjfWqnJ8gxvjlC%2FGK46ss6iI9ezPjB0U1&X-Amz-Signature=bd1535dd5e318727ba2d469e8b94779bcdd80a92699b357487a1d486f59f3cef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JNULKGY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCSivWssfJCPC4W55%2BUcTmLMPTEmutGyeHQo%2BaP6uyZkAIhAMvHA13e1R5SUZsF8%2FgE5ZxFo6F9zWGLVGkm%2FehVvQaVKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxsp4QAh%2BId3VInhbMq3APmnuQ5QoMYF%2FplkG7wInt9tc2vU8hrSgzj74iUJ2CHWq3T%2B0VTTNeinVy99qt2wqZfeU6G5t4eEZYBmkrgmDXtGlXAaxcibv35e4tf6FRA8WHeuKEGD7s7n9O3xYej%2FFaiUZ%2Bo8foSK%2B9DLoxIW3mRZFUu567pz%2Bx3dyHErHKWjYl0c0lTnzYx%2Fv6bf1Ekb1fI2Mfx3%2FU9ezU4EVBXGbiLeIoOpGOkYPu2v%2BIucINPwBLPZMqKkR8TKz9RChNcm9%2Bc9woZvs1JUHCz529cIyboq7mngrxfHV7VgC3GBVqHiOhwtQ4Kyib5E5pq6ztu873mG1pOKi31B2WbhJLgANFL5ylPHa171%2BzjsoRe7Ppj0UUCDVpNBSmjhu1T6ZvnCH2zLO6K9VVXoA3Gka7YUQFeLKhUVe1AF3ylYE5HVlGP7NtK2bFFW9IqpYxvvkaAaTD%2FJxfJuGledjJaBr0TFprHXkWhXvWT9XYkc7oFZcSQw9ztzKTx1wVXOMtLeGNrGZlk6YodLdXzFjD4ylmF2255a1%2B99nHU2vRb%2FkiUhTjfz1M61hHEeGELFEoSfBubWUD%2B3US2hc2tjL%2FCiemu1AF%2FgM0zZ%2B4TPN%2B4abOdft4HlFv0JJF%2BkNO50h5vYjCAmKPEBjqkARPFEvDn%2FU2%2Bz%2BRyXsgcgmGb0vNlRZ390Y1uicCzQ5piGKFwTpzqX3AMMq6nGtZ%2Fn6zKroskY4hFwtxFmnK5OdQrK3THt%2BXPJh8Orx833FAzK%2B46XpVvO7U9hX0K13FLiXZ4z7%2FAtIE9us0x5xKuRvQaQS610VeJO79Rc2JolDhxxA31uoB4ygnj5E%2FyjfWqnJ8gxvjlC%2FGK46ss6iI9ezPjB0U1&X-Amz-Signature=d8d46e7d4a232df526ff22466cf6620cbc8e2552dffabad3e10b3c9bcf11312b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JNULKGY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCSivWssfJCPC4W55%2BUcTmLMPTEmutGyeHQo%2BaP6uyZkAIhAMvHA13e1R5SUZsF8%2FgE5ZxFo6F9zWGLVGkm%2FehVvQaVKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxsp4QAh%2BId3VInhbMq3APmnuQ5QoMYF%2FplkG7wInt9tc2vU8hrSgzj74iUJ2CHWq3T%2B0VTTNeinVy99qt2wqZfeU6G5t4eEZYBmkrgmDXtGlXAaxcibv35e4tf6FRA8WHeuKEGD7s7n9O3xYej%2FFaiUZ%2Bo8foSK%2B9DLoxIW3mRZFUu567pz%2Bx3dyHErHKWjYl0c0lTnzYx%2Fv6bf1Ekb1fI2Mfx3%2FU9ezU4EVBXGbiLeIoOpGOkYPu2v%2BIucINPwBLPZMqKkR8TKz9RChNcm9%2Bc9woZvs1JUHCz529cIyboq7mngrxfHV7VgC3GBVqHiOhwtQ4Kyib5E5pq6ztu873mG1pOKi31B2WbhJLgANFL5ylPHa171%2BzjsoRe7Ppj0UUCDVpNBSmjhu1T6ZvnCH2zLO6K9VVXoA3Gka7YUQFeLKhUVe1AF3ylYE5HVlGP7NtK2bFFW9IqpYxvvkaAaTD%2FJxfJuGledjJaBr0TFprHXkWhXvWT9XYkc7oFZcSQw9ztzKTx1wVXOMtLeGNrGZlk6YodLdXzFjD4ylmF2255a1%2B99nHU2vRb%2FkiUhTjfz1M61hHEeGELFEoSfBubWUD%2B3US2hc2tjL%2FCiemu1AF%2FgM0zZ%2B4TPN%2B4abOdft4HlFv0JJF%2BkNO50h5vYjCAmKPEBjqkARPFEvDn%2FU2%2Bz%2BRyXsgcgmGb0vNlRZ390Y1uicCzQ5piGKFwTpzqX3AMMq6nGtZ%2Fn6zKroskY4hFwtxFmnK5OdQrK3THt%2BXPJh8Orx833FAzK%2B46XpVvO7U9hX0K13FLiXZ4z7%2FAtIE9us0x5xKuRvQaQS610VeJO79Rc2JolDhxxA31uoB4ygnj5E%2FyjfWqnJ8gxvjlC%2FGK46ss6iI9ezPjB0U1&X-Amz-Signature=98a707e0ff36f7792c85bc8429a192a17dce34ef88adba6c63111eebf7bbf22b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JNULKGY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCSivWssfJCPC4W55%2BUcTmLMPTEmutGyeHQo%2BaP6uyZkAIhAMvHA13e1R5SUZsF8%2FgE5ZxFo6F9zWGLVGkm%2FehVvQaVKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxsp4QAh%2BId3VInhbMq3APmnuQ5QoMYF%2FplkG7wInt9tc2vU8hrSgzj74iUJ2CHWq3T%2B0VTTNeinVy99qt2wqZfeU6G5t4eEZYBmkrgmDXtGlXAaxcibv35e4tf6FRA8WHeuKEGD7s7n9O3xYej%2FFaiUZ%2Bo8foSK%2B9DLoxIW3mRZFUu567pz%2Bx3dyHErHKWjYl0c0lTnzYx%2Fv6bf1Ekb1fI2Mfx3%2FU9ezU4EVBXGbiLeIoOpGOkYPu2v%2BIucINPwBLPZMqKkR8TKz9RChNcm9%2Bc9woZvs1JUHCz529cIyboq7mngrxfHV7VgC3GBVqHiOhwtQ4Kyib5E5pq6ztu873mG1pOKi31B2WbhJLgANFL5ylPHa171%2BzjsoRe7Ppj0UUCDVpNBSmjhu1T6ZvnCH2zLO6K9VVXoA3Gka7YUQFeLKhUVe1AF3ylYE5HVlGP7NtK2bFFW9IqpYxvvkaAaTD%2FJxfJuGledjJaBr0TFprHXkWhXvWT9XYkc7oFZcSQw9ztzKTx1wVXOMtLeGNrGZlk6YodLdXzFjD4ylmF2255a1%2B99nHU2vRb%2FkiUhTjfz1M61hHEeGELFEoSfBubWUD%2B3US2hc2tjL%2FCiemu1AF%2FgM0zZ%2B4TPN%2B4abOdft4HlFv0JJF%2BkNO50h5vYjCAmKPEBjqkARPFEvDn%2FU2%2Bz%2BRyXsgcgmGb0vNlRZ390Y1uicCzQ5piGKFwTpzqX3AMMq6nGtZ%2Fn6zKroskY4hFwtxFmnK5OdQrK3THt%2BXPJh8Orx833FAzK%2B46XpVvO7U9hX0K13FLiXZ4z7%2FAtIE9us0x5xKuRvQaQS610VeJO79Rc2JolDhxxA31uoB4ygnj5E%2FyjfWqnJ8gxvjlC%2FGK46ss6iI9ezPjB0U1&X-Amz-Signature=00d8c4aea8d5d503ac9d6545de921b8ba774dce3eca4583e577f5393890df52b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JNULKGY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCSivWssfJCPC4W55%2BUcTmLMPTEmutGyeHQo%2BaP6uyZkAIhAMvHA13e1R5SUZsF8%2FgE5ZxFo6F9zWGLVGkm%2FehVvQaVKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxsp4QAh%2BId3VInhbMq3APmnuQ5QoMYF%2FplkG7wInt9tc2vU8hrSgzj74iUJ2CHWq3T%2B0VTTNeinVy99qt2wqZfeU6G5t4eEZYBmkrgmDXtGlXAaxcibv35e4tf6FRA8WHeuKEGD7s7n9O3xYej%2FFaiUZ%2Bo8foSK%2B9DLoxIW3mRZFUu567pz%2Bx3dyHErHKWjYl0c0lTnzYx%2Fv6bf1Ekb1fI2Mfx3%2FU9ezU4EVBXGbiLeIoOpGOkYPu2v%2BIucINPwBLPZMqKkR8TKz9RChNcm9%2Bc9woZvs1JUHCz529cIyboq7mngrxfHV7VgC3GBVqHiOhwtQ4Kyib5E5pq6ztu873mG1pOKi31B2WbhJLgANFL5ylPHa171%2BzjsoRe7Ppj0UUCDVpNBSmjhu1T6ZvnCH2zLO6K9VVXoA3Gka7YUQFeLKhUVe1AF3ylYE5HVlGP7NtK2bFFW9IqpYxvvkaAaTD%2FJxfJuGledjJaBr0TFprHXkWhXvWT9XYkc7oFZcSQw9ztzKTx1wVXOMtLeGNrGZlk6YodLdXzFjD4ylmF2255a1%2B99nHU2vRb%2FkiUhTjfz1M61hHEeGELFEoSfBubWUD%2B3US2hc2tjL%2FCiemu1AF%2FgM0zZ%2B4TPN%2B4abOdft4HlFv0JJF%2BkNO50h5vYjCAmKPEBjqkARPFEvDn%2FU2%2Bz%2BRyXsgcgmGb0vNlRZ390Y1uicCzQ5piGKFwTpzqX3AMMq6nGtZ%2Fn6zKroskY4hFwtxFmnK5OdQrK3THt%2BXPJh8Orx833FAzK%2B46XpVvO7U9hX0K13FLiXZ4z7%2FAtIE9us0x5xKuRvQaQS610VeJO79Rc2JolDhxxA31uoB4ygnj5E%2FyjfWqnJ8gxvjlC%2FGK46ss6iI9ezPjB0U1&X-Amz-Signature=40e3ee893610235910be2b15ba5edcb85e6a599cf936d8256167db2b86e23ed5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JNULKGY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCSivWssfJCPC4W55%2BUcTmLMPTEmutGyeHQo%2BaP6uyZkAIhAMvHA13e1R5SUZsF8%2FgE5ZxFo6F9zWGLVGkm%2FehVvQaVKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxsp4QAh%2BId3VInhbMq3APmnuQ5QoMYF%2FplkG7wInt9tc2vU8hrSgzj74iUJ2CHWq3T%2B0VTTNeinVy99qt2wqZfeU6G5t4eEZYBmkrgmDXtGlXAaxcibv35e4tf6FRA8WHeuKEGD7s7n9O3xYej%2FFaiUZ%2Bo8foSK%2B9DLoxIW3mRZFUu567pz%2Bx3dyHErHKWjYl0c0lTnzYx%2Fv6bf1Ekb1fI2Mfx3%2FU9ezU4EVBXGbiLeIoOpGOkYPu2v%2BIucINPwBLPZMqKkR8TKz9RChNcm9%2Bc9woZvs1JUHCz529cIyboq7mngrxfHV7VgC3GBVqHiOhwtQ4Kyib5E5pq6ztu873mG1pOKi31B2WbhJLgANFL5ylPHa171%2BzjsoRe7Ppj0UUCDVpNBSmjhu1T6ZvnCH2zLO6K9VVXoA3Gka7YUQFeLKhUVe1AF3ylYE5HVlGP7NtK2bFFW9IqpYxvvkaAaTD%2FJxfJuGledjJaBr0TFprHXkWhXvWT9XYkc7oFZcSQw9ztzKTx1wVXOMtLeGNrGZlk6YodLdXzFjD4ylmF2255a1%2B99nHU2vRb%2FkiUhTjfz1M61hHEeGELFEoSfBubWUD%2B3US2hc2tjL%2FCiemu1AF%2FgM0zZ%2B4TPN%2B4abOdft4HlFv0JJF%2BkNO50h5vYjCAmKPEBjqkARPFEvDn%2FU2%2Bz%2BRyXsgcgmGb0vNlRZ390Y1uicCzQ5piGKFwTpzqX3AMMq6nGtZ%2Fn6zKroskY4hFwtxFmnK5OdQrK3THt%2BXPJh8Orx833FAzK%2B46XpVvO7U9hX0K13FLiXZ4z7%2FAtIE9us0x5xKuRvQaQS610VeJO79Rc2JolDhxxA31uoB4ygnj5E%2FyjfWqnJ8gxvjlC%2FGK46ss6iI9ezPjB0U1&X-Amz-Signature=57919971b8b15e59c9abc8383f6590745e5cc6e3f1869bcb27c88bfc2c4587e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
