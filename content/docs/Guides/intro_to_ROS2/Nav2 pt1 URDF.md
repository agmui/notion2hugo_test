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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTVAYLR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyZcoR16NqdP5Ey8xICmNLKfrb1Y%2FWLCKj1e41nXCpGQIgAiIXoMiQOimoZvO2253sz6V2VT4trJgsmxjDOy2UPeoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGUJ9Q3MqHSAFN7BqyrcA1VT6XGetIsRzB%2FTuEOS2Z7dw1unkeuH3J3d6sUs%2FLLxBrJ7kDMtHbesADjGs8%2BgZYLlWLRdm%2FyMVJxRTCu8UNTb8BOclEloNk1Yjl0tgOCJQNtBCWqwPayygEZ24oogv8%2BI%2BmXeTDsF8HTXCluP8pwQP47doo%2FeP3Q6L%2FiKxQnWkg4Nd133kkM7ZQWh5EQWF364iUGOdwQ9XFLHIE%2FUk7iNdpUDqX4hxEkfL06FOkgKLDBdMsPT2n7rHkacQHNVmJcVlN4lmXGR3PjcY%2B0YH5JjnRkLa6bbtCS705QOjggAMISmi3KUWYJe6u8O%2FVOWMGLZaEaG5k7mKeKvaJIbW4a44FJpVTmMPKHmb83TtGaRPKRD%2B1Uz4xBelhyKyDeR%2FRNM77K1O7ixK5wky9krqEy8EN9JJd6QffhrhJ6jLLdFqNLb724KORbiAYOjYEYDNLP5ISbkLZJRy2ZADd17%2Fz7Cpl4dNuN79P1rpXOmqNEo9yWi9vJKmLFPHTn%2FTIRjfOKofzKw4kAF25uDr%2BlfKepRpZqyWcvj1nlx4Pw%2B%2F85DxglJGJQwiHJUNHt4TxfXmOKH2Vj1bdvLo9DcIJFps33Lq7NaD2UNcuKp0dbf0Dn3aYznVCRHxF8M7MFIMMGcu8QGOqUBtgRunm5JY5Yk2pxo6LlWwU6%2FOUKxCSIVKucTkhtepIBojW%2Fx3ScwwJ%2FP8%2BKGLLhMoWCWlt%2FaTPD2dw3F7QAN65UYUB0tfr91Ia85lLDPCigJTXDhIWeuUAWbw%2FhFRFJap0OnbS5b%2Fl6nE%2FVoh6ITopyklw2DjzeZNs6n5BWFepq5WdTlMsefoRr0vteaJ9ZRczsAWFR8iUHb9L%2FUnMqco1Yo0doP&X-Amz-Signature=ba8a02e1be461652ea3397f4451bd4dcd623ca0fee2b8c7c9fb399ab7a681981&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTVAYLR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyZcoR16NqdP5Ey8xICmNLKfrb1Y%2FWLCKj1e41nXCpGQIgAiIXoMiQOimoZvO2253sz6V2VT4trJgsmxjDOy2UPeoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGUJ9Q3MqHSAFN7BqyrcA1VT6XGetIsRzB%2FTuEOS2Z7dw1unkeuH3J3d6sUs%2FLLxBrJ7kDMtHbesADjGs8%2BgZYLlWLRdm%2FyMVJxRTCu8UNTb8BOclEloNk1Yjl0tgOCJQNtBCWqwPayygEZ24oogv8%2BI%2BmXeTDsF8HTXCluP8pwQP47doo%2FeP3Q6L%2FiKxQnWkg4Nd133kkM7ZQWh5EQWF364iUGOdwQ9XFLHIE%2FUk7iNdpUDqX4hxEkfL06FOkgKLDBdMsPT2n7rHkacQHNVmJcVlN4lmXGR3PjcY%2B0YH5JjnRkLa6bbtCS705QOjggAMISmi3KUWYJe6u8O%2FVOWMGLZaEaG5k7mKeKvaJIbW4a44FJpVTmMPKHmb83TtGaRPKRD%2B1Uz4xBelhyKyDeR%2FRNM77K1O7ixK5wky9krqEy8EN9JJd6QffhrhJ6jLLdFqNLb724KORbiAYOjYEYDNLP5ISbkLZJRy2ZADd17%2Fz7Cpl4dNuN79P1rpXOmqNEo9yWi9vJKmLFPHTn%2FTIRjfOKofzKw4kAF25uDr%2BlfKepRpZqyWcvj1nlx4Pw%2B%2F85DxglJGJQwiHJUNHt4TxfXmOKH2Vj1bdvLo9DcIJFps33Lq7NaD2UNcuKp0dbf0Dn3aYznVCRHxF8M7MFIMMGcu8QGOqUBtgRunm5JY5Yk2pxo6LlWwU6%2FOUKxCSIVKucTkhtepIBojW%2Fx3ScwwJ%2FP8%2BKGLLhMoWCWlt%2FaTPD2dw3F7QAN65UYUB0tfr91Ia85lLDPCigJTXDhIWeuUAWbw%2FhFRFJap0OnbS5b%2Fl6nE%2FVoh6ITopyklw2DjzeZNs6n5BWFepq5WdTlMsefoRr0vteaJ9ZRczsAWFR8iUHb9L%2FUnMqco1Yo0doP&X-Amz-Signature=0e423bb9f07ceb9749844346d7fc6625b83e1cd9775fb51f1f5a7a34a82cdb08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTVAYLR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyZcoR16NqdP5Ey8xICmNLKfrb1Y%2FWLCKj1e41nXCpGQIgAiIXoMiQOimoZvO2253sz6V2VT4trJgsmxjDOy2UPeoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGUJ9Q3MqHSAFN7BqyrcA1VT6XGetIsRzB%2FTuEOS2Z7dw1unkeuH3J3d6sUs%2FLLxBrJ7kDMtHbesADjGs8%2BgZYLlWLRdm%2FyMVJxRTCu8UNTb8BOclEloNk1Yjl0tgOCJQNtBCWqwPayygEZ24oogv8%2BI%2BmXeTDsF8HTXCluP8pwQP47doo%2FeP3Q6L%2FiKxQnWkg4Nd133kkM7ZQWh5EQWF364iUGOdwQ9XFLHIE%2FUk7iNdpUDqX4hxEkfL06FOkgKLDBdMsPT2n7rHkacQHNVmJcVlN4lmXGR3PjcY%2B0YH5JjnRkLa6bbtCS705QOjggAMISmi3KUWYJe6u8O%2FVOWMGLZaEaG5k7mKeKvaJIbW4a44FJpVTmMPKHmb83TtGaRPKRD%2B1Uz4xBelhyKyDeR%2FRNM77K1O7ixK5wky9krqEy8EN9JJd6QffhrhJ6jLLdFqNLb724KORbiAYOjYEYDNLP5ISbkLZJRy2ZADd17%2Fz7Cpl4dNuN79P1rpXOmqNEo9yWi9vJKmLFPHTn%2FTIRjfOKofzKw4kAF25uDr%2BlfKepRpZqyWcvj1nlx4Pw%2B%2F85DxglJGJQwiHJUNHt4TxfXmOKH2Vj1bdvLo9DcIJFps33Lq7NaD2UNcuKp0dbf0Dn3aYznVCRHxF8M7MFIMMGcu8QGOqUBtgRunm5JY5Yk2pxo6LlWwU6%2FOUKxCSIVKucTkhtepIBojW%2Fx3ScwwJ%2FP8%2BKGLLhMoWCWlt%2FaTPD2dw3F7QAN65UYUB0tfr91Ia85lLDPCigJTXDhIWeuUAWbw%2FhFRFJap0OnbS5b%2Fl6nE%2FVoh6ITopyklw2DjzeZNs6n5BWFepq5WdTlMsefoRr0vteaJ9ZRczsAWFR8iUHb9L%2FUnMqco1Yo0doP&X-Amz-Signature=f3c69d4a2960eefe146ea6c998bc54d90168daeb1ccc66deeba6e12426b8b74b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTVAYLR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyZcoR16NqdP5Ey8xICmNLKfrb1Y%2FWLCKj1e41nXCpGQIgAiIXoMiQOimoZvO2253sz6V2VT4trJgsmxjDOy2UPeoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGUJ9Q3MqHSAFN7BqyrcA1VT6XGetIsRzB%2FTuEOS2Z7dw1unkeuH3J3d6sUs%2FLLxBrJ7kDMtHbesADjGs8%2BgZYLlWLRdm%2FyMVJxRTCu8UNTb8BOclEloNk1Yjl0tgOCJQNtBCWqwPayygEZ24oogv8%2BI%2BmXeTDsF8HTXCluP8pwQP47doo%2FeP3Q6L%2FiKxQnWkg4Nd133kkM7ZQWh5EQWF364iUGOdwQ9XFLHIE%2FUk7iNdpUDqX4hxEkfL06FOkgKLDBdMsPT2n7rHkacQHNVmJcVlN4lmXGR3PjcY%2B0YH5JjnRkLa6bbtCS705QOjggAMISmi3KUWYJe6u8O%2FVOWMGLZaEaG5k7mKeKvaJIbW4a44FJpVTmMPKHmb83TtGaRPKRD%2B1Uz4xBelhyKyDeR%2FRNM77K1O7ixK5wky9krqEy8EN9JJd6QffhrhJ6jLLdFqNLb724KORbiAYOjYEYDNLP5ISbkLZJRy2ZADd17%2Fz7Cpl4dNuN79P1rpXOmqNEo9yWi9vJKmLFPHTn%2FTIRjfOKofzKw4kAF25uDr%2BlfKepRpZqyWcvj1nlx4Pw%2B%2F85DxglJGJQwiHJUNHt4TxfXmOKH2Vj1bdvLo9DcIJFps33Lq7NaD2UNcuKp0dbf0Dn3aYznVCRHxF8M7MFIMMGcu8QGOqUBtgRunm5JY5Yk2pxo6LlWwU6%2FOUKxCSIVKucTkhtepIBojW%2Fx3ScwwJ%2FP8%2BKGLLhMoWCWlt%2FaTPD2dw3F7QAN65UYUB0tfr91Ia85lLDPCigJTXDhIWeuUAWbw%2FhFRFJap0OnbS5b%2Fl6nE%2FVoh6ITopyklw2DjzeZNs6n5BWFepq5WdTlMsefoRr0vteaJ9ZRczsAWFR8iUHb9L%2FUnMqco1Yo0doP&X-Amz-Signature=83a12c2901ffb4d65c4bbbad163bf54f2d9a7dd64b62fdce9c5ddbeb88fea61a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTVAYLR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyZcoR16NqdP5Ey8xICmNLKfrb1Y%2FWLCKj1e41nXCpGQIgAiIXoMiQOimoZvO2253sz6V2VT4trJgsmxjDOy2UPeoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGUJ9Q3MqHSAFN7BqyrcA1VT6XGetIsRzB%2FTuEOS2Z7dw1unkeuH3J3d6sUs%2FLLxBrJ7kDMtHbesADjGs8%2BgZYLlWLRdm%2FyMVJxRTCu8UNTb8BOclEloNk1Yjl0tgOCJQNtBCWqwPayygEZ24oogv8%2BI%2BmXeTDsF8HTXCluP8pwQP47doo%2FeP3Q6L%2FiKxQnWkg4Nd133kkM7ZQWh5EQWF364iUGOdwQ9XFLHIE%2FUk7iNdpUDqX4hxEkfL06FOkgKLDBdMsPT2n7rHkacQHNVmJcVlN4lmXGR3PjcY%2B0YH5JjnRkLa6bbtCS705QOjggAMISmi3KUWYJe6u8O%2FVOWMGLZaEaG5k7mKeKvaJIbW4a44FJpVTmMPKHmb83TtGaRPKRD%2B1Uz4xBelhyKyDeR%2FRNM77K1O7ixK5wky9krqEy8EN9JJd6QffhrhJ6jLLdFqNLb724KORbiAYOjYEYDNLP5ISbkLZJRy2ZADd17%2Fz7Cpl4dNuN79P1rpXOmqNEo9yWi9vJKmLFPHTn%2FTIRjfOKofzKw4kAF25uDr%2BlfKepRpZqyWcvj1nlx4Pw%2B%2F85DxglJGJQwiHJUNHt4TxfXmOKH2Vj1bdvLo9DcIJFps33Lq7NaD2UNcuKp0dbf0Dn3aYznVCRHxF8M7MFIMMGcu8QGOqUBtgRunm5JY5Yk2pxo6LlWwU6%2FOUKxCSIVKucTkhtepIBojW%2Fx3ScwwJ%2FP8%2BKGLLhMoWCWlt%2FaTPD2dw3F7QAN65UYUB0tfr91Ia85lLDPCigJTXDhIWeuUAWbw%2FhFRFJap0OnbS5b%2Fl6nE%2FVoh6ITopyklw2DjzeZNs6n5BWFepq5WdTlMsefoRr0vteaJ9ZRczsAWFR8iUHb9L%2FUnMqco1Yo0doP&X-Amz-Signature=661e1e54b5251c13f3b6f834ba38a97e1be04a612aa4f8c54148f443642dd390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTVAYLR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyZcoR16NqdP5Ey8xICmNLKfrb1Y%2FWLCKj1e41nXCpGQIgAiIXoMiQOimoZvO2253sz6V2VT4trJgsmxjDOy2UPeoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGUJ9Q3MqHSAFN7BqyrcA1VT6XGetIsRzB%2FTuEOS2Z7dw1unkeuH3J3d6sUs%2FLLxBrJ7kDMtHbesADjGs8%2BgZYLlWLRdm%2FyMVJxRTCu8UNTb8BOclEloNk1Yjl0tgOCJQNtBCWqwPayygEZ24oogv8%2BI%2BmXeTDsF8HTXCluP8pwQP47doo%2FeP3Q6L%2FiKxQnWkg4Nd133kkM7ZQWh5EQWF364iUGOdwQ9XFLHIE%2FUk7iNdpUDqX4hxEkfL06FOkgKLDBdMsPT2n7rHkacQHNVmJcVlN4lmXGR3PjcY%2B0YH5JjnRkLa6bbtCS705QOjggAMISmi3KUWYJe6u8O%2FVOWMGLZaEaG5k7mKeKvaJIbW4a44FJpVTmMPKHmb83TtGaRPKRD%2B1Uz4xBelhyKyDeR%2FRNM77K1O7ixK5wky9krqEy8EN9JJd6QffhrhJ6jLLdFqNLb724KORbiAYOjYEYDNLP5ISbkLZJRy2ZADd17%2Fz7Cpl4dNuN79P1rpXOmqNEo9yWi9vJKmLFPHTn%2FTIRjfOKofzKw4kAF25uDr%2BlfKepRpZqyWcvj1nlx4Pw%2B%2F85DxglJGJQwiHJUNHt4TxfXmOKH2Vj1bdvLo9DcIJFps33Lq7NaD2UNcuKp0dbf0Dn3aYznVCRHxF8M7MFIMMGcu8QGOqUBtgRunm5JY5Yk2pxo6LlWwU6%2FOUKxCSIVKucTkhtepIBojW%2Fx3ScwwJ%2FP8%2BKGLLhMoWCWlt%2FaTPD2dw3F7QAN65UYUB0tfr91Ia85lLDPCigJTXDhIWeuUAWbw%2FhFRFJap0OnbS5b%2Fl6nE%2FVoh6ITopyklw2DjzeZNs6n5BWFepq5WdTlMsefoRr0vteaJ9ZRczsAWFR8iUHb9L%2FUnMqco1Yo0doP&X-Amz-Signature=0295361ab2579106e04094fce9318d2755232ed98327dfe013a694bd6e49c078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTVAYLR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyZcoR16NqdP5Ey8xICmNLKfrb1Y%2FWLCKj1e41nXCpGQIgAiIXoMiQOimoZvO2253sz6V2VT4trJgsmxjDOy2UPeoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGUJ9Q3MqHSAFN7BqyrcA1VT6XGetIsRzB%2FTuEOS2Z7dw1unkeuH3J3d6sUs%2FLLxBrJ7kDMtHbesADjGs8%2BgZYLlWLRdm%2FyMVJxRTCu8UNTb8BOclEloNk1Yjl0tgOCJQNtBCWqwPayygEZ24oogv8%2BI%2BmXeTDsF8HTXCluP8pwQP47doo%2FeP3Q6L%2FiKxQnWkg4Nd133kkM7ZQWh5EQWF364iUGOdwQ9XFLHIE%2FUk7iNdpUDqX4hxEkfL06FOkgKLDBdMsPT2n7rHkacQHNVmJcVlN4lmXGR3PjcY%2B0YH5JjnRkLa6bbtCS705QOjggAMISmi3KUWYJe6u8O%2FVOWMGLZaEaG5k7mKeKvaJIbW4a44FJpVTmMPKHmb83TtGaRPKRD%2B1Uz4xBelhyKyDeR%2FRNM77K1O7ixK5wky9krqEy8EN9JJd6QffhrhJ6jLLdFqNLb724KORbiAYOjYEYDNLP5ISbkLZJRy2ZADd17%2Fz7Cpl4dNuN79P1rpXOmqNEo9yWi9vJKmLFPHTn%2FTIRjfOKofzKw4kAF25uDr%2BlfKepRpZqyWcvj1nlx4Pw%2B%2F85DxglJGJQwiHJUNHt4TxfXmOKH2Vj1bdvLo9DcIJFps33Lq7NaD2UNcuKp0dbf0Dn3aYznVCRHxF8M7MFIMMGcu8QGOqUBtgRunm5JY5Yk2pxo6LlWwU6%2FOUKxCSIVKucTkhtepIBojW%2Fx3ScwwJ%2FP8%2BKGLLhMoWCWlt%2FaTPD2dw3F7QAN65UYUB0tfr91Ia85lLDPCigJTXDhIWeuUAWbw%2FhFRFJap0OnbS5b%2Fl6nE%2FVoh6ITopyklw2DjzeZNs6n5BWFepq5WdTlMsefoRr0vteaJ9ZRczsAWFR8iUHb9L%2FUnMqco1Yo0doP&X-Amz-Signature=aa723a0f47c04c2c84e96b9235346da329d37ae21c6600c3b0a8ee9feb600d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTVAYLR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyZcoR16NqdP5Ey8xICmNLKfrb1Y%2FWLCKj1e41nXCpGQIgAiIXoMiQOimoZvO2253sz6V2VT4trJgsmxjDOy2UPeoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGUJ9Q3MqHSAFN7BqyrcA1VT6XGetIsRzB%2FTuEOS2Z7dw1unkeuH3J3d6sUs%2FLLxBrJ7kDMtHbesADjGs8%2BgZYLlWLRdm%2FyMVJxRTCu8UNTb8BOclEloNk1Yjl0tgOCJQNtBCWqwPayygEZ24oogv8%2BI%2BmXeTDsF8HTXCluP8pwQP47doo%2FeP3Q6L%2FiKxQnWkg4Nd133kkM7ZQWh5EQWF364iUGOdwQ9XFLHIE%2FUk7iNdpUDqX4hxEkfL06FOkgKLDBdMsPT2n7rHkacQHNVmJcVlN4lmXGR3PjcY%2B0YH5JjnRkLa6bbtCS705QOjggAMISmi3KUWYJe6u8O%2FVOWMGLZaEaG5k7mKeKvaJIbW4a44FJpVTmMPKHmb83TtGaRPKRD%2B1Uz4xBelhyKyDeR%2FRNM77K1O7ixK5wky9krqEy8EN9JJd6QffhrhJ6jLLdFqNLb724KORbiAYOjYEYDNLP5ISbkLZJRy2ZADd17%2Fz7Cpl4dNuN79P1rpXOmqNEo9yWi9vJKmLFPHTn%2FTIRjfOKofzKw4kAF25uDr%2BlfKepRpZqyWcvj1nlx4Pw%2B%2F85DxglJGJQwiHJUNHt4TxfXmOKH2Vj1bdvLo9DcIJFps33Lq7NaD2UNcuKp0dbf0Dn3aYznVCRHxF8M7MFIMMGcu8QGOqUBtgRunm5JY5Yk2pxo6LlWwU6%2FOUKxCSIVKucTkhtepIBojW%2Fx3ScwwJ%2FP8%2BKGLLhMoWCWlt%2FaTPD2dw3F7QAN65UYUB0tfr91Ia85lLDPCigJTXDhIWeuUAWbw%2FhFRFJap0OnbS5b%2Fl6nE%2FVoh6ITopyklw2DjzeZNs6n5BWFepq5WdTlMsefoRr0vteaJ9ZRczsAWFR8iUHb9L%2FUnMqco1Yo0doP&X-Amz-Signature=a27aaef31a9f8202597842816ae5969a83c8f7e87be66014176841515b45a468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTVAYLR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyZcoR16NqdP5Ey8xICmNLKfrb1Y%2FWLCKj1e41nXCpGQIgAiIXoMiQOimoZvO2253sz6V2VT4trJgsmxjDOy2UPeoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGUJ9Q3MqHSAFN7BqyrcA1VT6XGetIsRzB%2FTuEOS2Z7dw1unkeuH3J3d6sUs%2FLLxBrJ7kDMtHbesADjGs8%2BgZYLlWLRdm%2FyMVJxRTCu8UNTb8BOclEloNk1Yjl0tgOCJQNtBCWqwPayygEZ24oogv8%2BI%2BmXeTDsF8HTXCluP8pwQP47doo%2FeP3Q6L%2FiKxQnWkg4Nd133kkM7ZQWh5EQWF364iUGOdwQ9XFLHIE%2FUk7iNdpUDqX4hxEkfL06FOkgKLDBdMsPT2n7rHkacQHNVmJcVlN4lmXGR3PjcY%2B0YH5JjnRkLa6bbtCS705QOjggAMISmi3KUWYJe6u8O%2FVOWMGLZaEaG5k7mKeKvaJIbW4a44FJpVTmMPKHmb83TtGaRPKRD%2B1Uz4xBelhyKyDeR%2FRNM77K1O7ixK5wky9krqEy8EN9JJd6QffhrhJ6jLLdFqNLb724KORbiAYOjYEYDNLP5ISbkLZJRy2ZADd17%2Fz7Cpl4dNuN79P1rpXOmqNEo9yWi9vJKmLFPHTn%2FTIRjfOKofzKw4kAF25uDr%2BlfKepRpZqyWcvj1nlx4Pw%2B%2F85DxglJGJQwiHJUNHt4TxfXmOKH2Vj1bdvLo9DcIJFps33Lq7NaD2UNcuKp0dbf0Dn3aYznVCRHxF8M7MFIMMGcu8QGOqUBtgRunm5JY5Yk2pxo6LlWwU6%2FOUKxCSIVKucTkhtepIBojW%2Fx3ScwwJ%2FP8%2BKGLLhMoWCWlt%2FaTPD2dw3F7QAN65UYUB0tfr91Ia85lLDPCigJTXDhIWeuUAWbw%2FhFRFJap0OnbS5b%2Fl6nE%2FVoh6ITopyklw2DjzeZNs6n5BWFepq5WdTlMsefoRr0vteaJ9ZRczsAWFR8iUHb9L%2FUnMqco1Yo0doP&X-Amz-Signature=2284b6e09e4c9f990bd83eab69b3a76df4780589fe25fe3a68c807be81e46c2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTVAYLR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyZcoR16NqdP5Ey8xICmNLKfrb1Y%2FWLCKj1e41nXCpGQIgAiIXoMiQOimoZvO2253sz6V2VT4trJgsmxjDOy2UPeoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGUJ9Q3MqHSAFN7BqyrcA1VT6XGetIsRzB%2FTuEOS2Z7dw1unkeuH3J3d6sUs%2FLLxBrJ7kDMtHbesADjGs8%2BgZYLlWLRdm%2FyMVJxRTCu8UNTb8BOclEloNk1Yjl0tgOCJQNtBCWqwPayygEZ24oogv8%2BI%2BmXeTDsF8HTXCluP8pwQP47doo%2FeP3Q6L%2FiKxQnWkg4Nd133kkM7ZQWh5EQWF364iUGOdwQ9XFLHIE%2FUk7iNdpUDqX4hxEkfL06FOkgKLDBdMsPT2n7rHkacQHNVmJcVlN4lmXGR3PjcY%2B0YH5JjnRkLa6bbtCS705QOjggAMISmi3KUWYJe6u8O%2FVOWMGLZaEaG5k7mKeKvaJIbW4a44FJpVTmMPKHmb83TtGaRPKRD%2B1Uz4xBelhyKyDeR%2FRNM77K1O7ixK5wky9krqEy8EN9JJd6QffhrhJ6jLLdFqNLb724KORbiAYOjYEYDNLP5ISbkLZJRy2ZADd17%2Fz7Cpl4dNuN79P1rpXOmqNEo9yWi9vJKmLFPHTn%2FTIRjfOKofzKw4kAF25uDr%2BlfKepRpZqyWcvj1nlx4Pw%2B%2F85DxglJGJQwiHJUNHt4TxfXmOKH2Vj1bdvLo9DcIJFps33Lq7NaD2UNcuKp0dbf0Dn3aYznVCRHxF8M7MFIMMGcu8QGOqUBtgRunm5JY5Yk2pxo6LlWwU6%2FOUKxCSIVKucTkhtepIBojW%2Fx3ScwwJ%2FP8%2BKGLLhMoWCWlt%2FaTPD2dw3F7QAN65UYUB0tfr91Ia85lLDPCigJTXDhIWeuUAWbw%2FhFRFJap0OnbS5b%2Fl6nE%2FVoh6ITopyklw2DjzeZNs6n5BWFepq5WdTlMsefoRr0vteaJ9ZRczsAWFR8iUHb9L%2FUnMqco1Yo0doP&X-Amz-Signature=abe38ece6b61dd739f7f3474d795f6ecab6735417fe2b8876b19a06e3ee74297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNBOBWVM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzkKYCv2TQN%2FGvJbo5olgxDibmOI9Wi7yLMVvbJkLMnAiEA%2FmzlYryKUHDXo1ue10HETLR5XfwYKGZdynDfb7VKa0Mq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJDl0B8DkAcm7%2B%2BdFyrcA%2BM2UUnYbSspzbaxgKVpbIzDkN7y25u8QtwYynwvk2bYAtGVyI8kLV5dsOVh%2BdGuaoL0mYvru%2Bs9BpN4LlhXNNqIlfoSIIU%2F7BAJlgQ7aPVteOWXyrjz68PdTnM9Zy0dj66QTOw6Q73Yub1ntpb5OD4NPhyHVosXUUkS0iEjU4fj%2F2RFJVhD8I%2FwfBptFuC%2FD9pfrnyQ5IPCpHW5VSqSrAe6E8ksqejciwetnTsLhDmoN4X3o0O6wOfTxCFQLp7wwBU9syL%2Fn3uXicPi2Z82OKuQh5htGZicMLjBOSR9zY2Owltq%2F5f63kULJFMbe3ux2CnpUHzyENOO%2FcJG7up6Y1P5fe2YHbLZFjqHgjvbBSkQI%2F%2F88fmds%2FpO3aYGdBCDv0OLopYj%2BtRxKnWXJDfK83VXNrpM6zIT2xHtkvu5WLEv8pKx04JxT%2B1xwKDLCgzFiZ4fnDMvsWbsEJoKeRJBHa7qfefvhrtTPmJK1kPj1jRQ13yIZC%2BR92KCLLskxnDTVV96DdPjWwv1LvPujMuDUBSZ4GG86Dfux8Qa%2Blc5SsIjbizNMU%2B1RSE3W%2B5f8v%2F%2Fu6dhNMWFUmvQ9zejqGkE3TbbTruPa5MtpFsoq5hg81%2F2I7%2FXNb2DKDfBAGriMLqeu8QGOqUBsCz2hsY%2F72kZhGfELNNhb%2FpgX5gbEZwI%2FBsTm7H89QDYnBtSFCv0StQzElIefZ1IJDKxWdEtDLT1BcTwJZ6J%2B6hKZi8y%2Bj0AzKfJ6nGpJymXGyKbcWQPgkNnDMGymzK41J0rk%2FbGMvZSsjeKuIVkwxrqn3o7ksGO8HV2s616v2Ge55R3ojUOQ%2B4IaNRa94w1ddoPq%2FHSZUpNBvZYZByQVGHvJOEr&X-Amz-Signature=2cba3481f3d549a1d03d301533bff1d0345e8af7c1077e05dca6dcf84a13c205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A25JKBC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB50LTTQMankr4S8gF%2FmaHk3LhpZ00tq%2BB0VXE5Juq%2B2AiA8%2BzHlq08tdws5c7%2FJfHOpYyvj3tw3tG7hePzQ6wXlJyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMSYpZt2hPFUPEMhRVKtwDLx2JkwXINeLVCjnjSgQ30yIJCJxjrhXTRtYmh4uPunmYXkY3SBeoxegFO0n4q6PgXn%2F8BTxDMIC6pCCwqW0l5r8yjErsBBjyIpdGcDrqrEVP1XF%2BOVsIXMIG26uWZ2PXPmy9i9zCYS5U2rA44QwifV9MBzNhDywgoqABionW04JlthUWx60yE79e16v48xBupCditfxz8%2B%2B0G9E2YQu267upS2SxRdEY0eS0NjVQOwPNRjpGeGK0BnIaSPW8VO3uGI6itIUMg6osg3P4w1W1jbKNUeYHsbpBeNzHoU0iJx%2BLrv2v%2FM3vvMswl8a1X16qcnRM5s4wc28JYS4Mcv4Ypxz6UBVVFTOfZn7hkm2ZIAPZdONMinAK%2FbdT9IO1zCP1Yy4BZVa2ymKExOOwH%2BmH4c4goHG0fiqkba3zM2J%2BRypIhFYFl8jIJ6J1F8h4I0p%2BooAs42vn7WLIc2GfUjBbfwzKuJ%2FcNwi8AbNK3hcSnbABz%2BdX%2F2TK7pPWvNDzwWgtVz%2F7VltE7e%2FK4r4IIjy0g3CkwXabSPbGCEyXo%2BEE9eEj%2BFiGtXMVhaYn9ShkLI6b13gHkTdl%2BwOOztciDZ4yGAcQ%2B6SGh%2F2YrXDr8sdfalw%2FtpG52dMrQY5%2F8jwwwKK7xAY6pgGtVqrw4NZfVJl9%2F33KQ1nqB%2FSH5SLZOh7P8sKMtC1TLrTIOFyG%2F86UV6uX4HiiL7FGbMjXBEmB9UYNkwCuqCtPiZFuDI5IfAdsQUgZgHkruUbhTyqY5jpiAH0BKJmk3TDPPazNw0DHmz%2BxdwUNQdJXoJtCSZQTYbO5SVpH4Iw1fWkYUGB3poIU29hpwrE315XjlWiHwHFc0vr3QDJ%2F1mlAXv0lWIJE&X-Amz-Signature=27281ce1a63f3cecb4b630eb9ada2f6f2ea42c2a7c263bbb801f05e4c0dfb431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRTBHB45%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDEpur3iRcaZzGPBbbUPZv2ymkYUWuIA%2Bq5e1JcEQ%2B9wIhANJ6jn%2F93D4fGDlBllKkIfvNomMi%2F2hen4oCVFJC%2B2dIKv8DCCQQABoMNjM3NDIzMTgzODA1IgwTVEGbwb%2Fh9HoDibAq3ANp9mV1nsSiqddtmtmeU9BiAMVMBwWGkR1Bc%2BTr3n7NIRlwgc7K5ryJOcdFge4RDgH0wTnmgEGmuTGowYQecYIRKVn4khtoghsqdUjz4EpZNnRJOAnPQimXB%2F0wF7UGQzCdYpN2odBFeSrDkKrG1mV3ZSg8uwV5Oqg%2FpeEVm5U3TLI3b1nQbmh2%2FRa63M%2B0eSiBlXixYTnIQ4CvZF6jRDOgyPEQr%2B41ekvZol2E09cYO9NlH7IM1i%2BuFkavX5h8HRia3KpQyw0ytBNF%2BW5ObvfQJAqFuOe7YdxXgDUwikv8A%2BzRDq2uEA6f8EmZCkyxih0g91cUKDhAHPtXLBUU4BJ1CRHeTE8ZObMXi5Yvjyt%2BZnzrGQBbXg5K0sMCLbZ%2FW7NwQivDvfoFjN%2Fk6RkUYY44u032dpyDDt%2BubVU2VNaNIgctFk4pu16EMZ%2Fb13y9OtalKDRC1iJlyCb4L0q4u97RTpAu5uyxgv2NEAOVtRtpWQkguYSeyqzuVEexGsWZQPrapnWTtDph0lcQPd1m7vPXLzK7kCgxbdR%2B15BOju3FznT8HZxnWPvoRwc4azBRZYMUrRyMrpxPKcWdtryJYWXoFA48J7Bh0WziU7uUzssB8dP8t4wVeoWocFUBMjCgorvEBjqkAXDqJXDK2lWX3F6%2Basg8ciHwkI24M0CDTCN93oxcBpYLSmK7XCJXSC13O%2FY%2FSLtsM6d45QRRJrEkcFOdcr7QzIc%2BvASB%2FOqwL2iAC4hLNlgUm57s3muKKlSYPeJA0uWwtViwXCgdmBV%2FZ2iaDxwcNA%2BPZNTl85u7IKnvcBb6YdXtcY8L9fYlBzbrU4pfoxFPgu04ckEhjRTHdrZairvudGLH%2Fv0q&X-Amz-Signature=96d1e771d0dee50f12153fff4f7a43dc46a99b39b769ecc173e166a3d347bd04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTVAYLR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyZcoR16NqdP5Ey8xICmNLKfrb1Y%2FWLCKj1e41nXCpGQIgAiIXoMiQOimoZvO2253sz6V2VT4trJgsmxjDOy2UPeoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGUJ9Q3MqHSAFN7BqyrcA1VT6XGetIsRzB%2FTuEOS2Z7dw1unkeuH3J3d6sUs%2FLLxBrJ7kDMtHbesADjGs8%2BgZYLlWLRdm%2FyMVJxRTCu8UNTb8BOclEloNk1Yjl0tgOCJQNtBCWqwPayygEZ24oogv8%2BI%2BmXeTDsF8HTXCluP8pwQP47doo%2FeP3Q6L%2FiKxQnWkg4Nd133kkM7ZQWh5EQWF364iUGOdwQ9XFLHIE%2FUk7iNdpUDqX4hxEkfL06FOkgKLDBdMsPT2n7rHkacQHNVmJcVlN4lmXGR3PjcY%2B0YH5JjnRkLa6bbtCS705QOjggAMISmi3KUWYJe6u8O%2FVOWMGLZaEaG5k7mKeKvaJIbW4a44FJpVTmMPKHmb83TtGaRPKRD%2B1Uz4xBelhyKyDeR%2FRNM77K1O7ixK5wky9krqEy8EN9JJd6QffhrhJ6jLLdFqNLb724KORbiAYOjYEYDNLP5ISbkLZJRy2ZADd17%2Fz7Cpl4dNuN79P1rpXOmqNEo9yWi9vJKmLFPHTn%2FTIRjfOKofzKw4kAF25uDr%2BlfKepRpZqyWcvj1nlx4Pw%2B%2F85DxglJGJQwiHJUNHt4TxfXmOKH2Vj1bdvLo9DcIJFps33Lq7NaD2UNcuKp0dbf0Dn3aYznVCRHxF8M7MFIMMGcu8QGOqUBtgRunm5JY5Yk2pxo6LlWwU6%2FOUKxCSIVKucTkhtepIBojW%2Fx3ScwwJ%2FP8%2BKGLLhMoWCWlt%2FaTPD2dw3F7QAN65UYUB0tfr91Ia85lLDPCigJTXDhIWeuUAWbw%2FhFRFJap0OnbS5b%2Fl6nE%2FVoh6ITopyklw2DjzeZNs6n5BWFepq5WdTlMsefoRr0vteaJ9ZRczsAWFR8iUHb9L%2FUnMqco1Yo0doP&X-Amz-Signature=46d68355317953586695f1be992a6f7ba29dcf2933eb803f79a41d8039a6b666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCY5L3MM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2B1lE%2BdYWuu7E%2Bn3Y%2BebBwBULv%2Bb563eeLpGyEdesORAiAkSxBCfvBaeyBS5N4HcqvLyI8ZmWY6I6FNzwfuSCFAqir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMRzSo4VreMaAvuSITKtwDGH6Uw3X%2FxDGNolmX%2FgB8cqbbs3plYWIoh%2BBWIvmhn8hZKSVzbiF5Q0WU4nKgzkVcFKnAmTWg7kGzN2uAA%2BbTpsU%2BzXj1BIcmXVZSfF6DsoudnbPwIv4CRmJUrBAU3TQrC7SEGAJQj8fTN2XYZstk8IicqMA7b%2BnqmQv5IDNl7kbY0l19SxbI6%2FBhkplktGZri7w4ZpdavIQ13IVnjxIp87tn1luWL6YhRhC%2FkEPc80mARggh8kAme3%2B01qz6C2BM3uEbfkDk176VvLKV5rh6oYqfmF8t41LBawP%2BviM130szlix9TTJCKie%2B7rdxT5nOuNztUyCZl2eoaPtkJokNzcWuuC2MqKIhdtikhpNKPHxIuHWeE2R8AynFpoGf3RnIkUzuNZolINpi%2Bqb4yHN8VmL889btZmArlxFj8qYqsyZCmMjxaIFYQldZlDBAiXK0aKZocdxiHBHEw9i%2FKbvogiRS%2FqfdMFhakCpPkboLryrrDRmEcQoFq5Yy6jceXfBwqnPQ2%2FB93Kk%2Bz1DTKyRHOuL3em4PleHfHFaujhUP3ijouDd5S%2FWRnHUMcqjzKQY0eDtTbgbcxyLMDZJeTvY2zW4iNrXmKnR9k6WGTAlbmBMT7YLh6ujmS8a6degw1Nq7xAY6pgG1n5qe%2BGPXQy%2FSMOzcbsoNaiklv3VJB9TP3ZmOuBZjLbo1Y96QM4OGYpnpdivS6CrfOPDEgXsbE6PA1pPvjtHPI3LNEFHyg1TFo2pQlBdAXvqiNueHc2Mnpw7uXBgplXZKVAnpGIyqHcXLlZ9i4G7%2BOkIeRt6n%2FJLNbGT4LLHKyeaQADDaYxEoxHOovOqUFOLY43R3KtJNTgQbVhkQ2bnNg6HIQyV5&X-Amz-Signature=29445c8328a3a43c4c882c16586a4e9c2a88b0144b915699a54cb68cca9b3561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTVAYLR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyZcoR16NqdP5Ey8xICmNLKfrb1Y%2FWLCKj1e41nXCpGQIgAiIXoMiQOimoZvO2253sz6V2VT4trJgsmxjDOy2UPeoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGUJ9Q3MqHSAFN7BqyrcA1VT6XGetIsRzB%2FTuEOS2Z7dw1unkeuH3J3d6sUs%2FLLxBrJ7kDMtHbesADjGs8%2BgZYLlWLRdm%2FyMVJxRTCu8UNTb8BOclEloNk1Yjl0tgOCJQNtBCWqwPayygEZ24oogv8%2BI%2BmXeTDsF8HTXCluP8pwQP47doo%2FeP3Q6L%2FiKxQnWkg4Nd133kkM7ZQWh5EQWF364iUGOdwQ9XFLHIE%2FUk7iNdpUDqX4hxEkfL06FOkgKLDBdMsPT2n7rHkacQHNVmJcVlN4lmXGR3PjcY%2B0YH5JjnRkLa6bbtCS705QOjggAMISmi3KUWYJe6u8O%2FVOWMGLZaEaG5k7mKeKvaJIbW4a44FJpVTmMPKHmb83TtGaRPKRD%2B1Uz4xBelhyKyDeR%2FRNM77K1O7ixK5wky9krqEy8EN9JJd6QffhrhJ6jLLdFqNLb724KORbiAYOjYEYDNLP5ISbkLZJRy2ZADd17%2Fz7Cpl4dNuN79P1rpXOmqNEo9yWi9vJKmLFPHTn%2FTIRjfOKofzKw4kAF25uDr%2BlfKepRpZqyWcvj1nlx4Pw%2B%2F85DxglJGJQwiHJUNHt4TxfXmOKH2Vj1bdvLo9DcIJFps33Lq7NaD2UNcuKp0dbf0Dn3aYznVCRHxF8M7MFIMMGcu8QGOqUBtgRunm5JY5Yk2pxo6LlWwU6%2FOUKxCSIVKucTkhtepIBojW%2Fx3ScwwJ%2FP8%2BKGLLhMoWCWlt%2FaTPD2dw3F7QAN65UYUB0tfr91Ia85lLDPCigJTXDhIWeuUAWbw%2FhFRFJap0OnbS5b%2Fl6nE%2FVoh6ITopyklw2DjzeZNs6n5BWFepq5WdTlMsefoRr0vteaJ9ZRczsAWFR8iUHb9L%2FUnMqco1Yo0doP&X-Amz-Signature=fd2f0897b24a32864053f401a1785a0f41190b64c11c2b173593d1f9970530b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LCJYKI4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRnRDRufK5Zl60Eus5USguaYyVQTT23w458zlJoWlCUQIhANWzTjMiI5DBOtYW1H5H2NN%2FA2tc6nVX7egZKVofLAmBKv8DCCQQABoMNjM3NDIzMTgzODA1IgzH45HyHirU4NN4ziAq3APEk9eH16MOqIHqo815X%2FO8SaS%2BJQZKxvA5UZvgK7fxs2YKzkCPGZr1mRUOBFISnxOuqNh0USjQqolyGrKoYwzEFksBSJ7qrwAx2YVTmSDeWpvCVqEIJQWNwI2E21WyiNZL4gNCrYwmEWs2%2FVE%2FNPvipkA5lp%2FH5cJAfloyzE%2FO0sNk2L9ArDjkBkpFo%2BnZr0w69KAn3zcGRhzdwjIziqaqw4bAz%2BWqjwxX2gcmYIVs2UIkMl4olYLATtFF%2Bq6p4zwY2bxeIF2hXIO27AV%2BD3hY5otKpNVKq8iriIjZFfkkXoDsJevObLJqV%2BIjJuSfKtuUMbbmSI1KfYPKORhV%2FrI%2BmH8YlMJuJAyuTqRj9xaEyQvATzgLYa1pr22tpxefb5ibQoAVuJYRPcGk0h8xo5DK1eOqT8cwhTOS7mAH7WADBFz3yXi6TbtHZATQm2RkH5dH6voeJdVo3umMp44y21tMynsDaglydTA43xtejfb8qoeg%2Fe2sm6lmogN%2FtBA1lJCbIhj4AjRGYc2DxJt6OMxuVArVfjJzFh7mnGraUEmLTneNaUThwGNykKHDNcPNA7hqsFmujFtPM6H39L3PC7P%2FT7MjRJyxD3Yigd2WFH1r79i7RR%2B01W2qV210ZjDQo7vEBjqkAadqmyYbx7NBFUsM9dOdR6WHjfw5%2F8d%2FR32PVz%2FNn7cL4Pj3e7JcWQrmbz%2BKU8ngG4KQG9tO49Hbfjli8IwNctBo3uB2buejUUM324MwVrftJxOkjQJrq71lkCkGgOC3JeRL8piBX1oG1VzG%2Bwq6ruvlwoGUOubueg4mUu4rdP1hfvtX1vepE1Qzbb2EggE5cGZGCf0dRtVqNfKGIJuFgn%2FGnCwU&X-Amz-Signature=653d1b4896f5bd97bcf875f63dcbe96612b7cda9f364f796746dd186f2417e9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTVAYLR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyZcoR16NqdP5Ey8xICmNLKfrb1Y%2FWLCKj1e41nXCpGQIgAiIXoMiQOimoZvO2253sz6V2VT4trJgsmxjDOy2UPeoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGUJ9Q3MqHSAFN7BqyrcA1VT6XGetIsRzB%2FTuEOS2Z7dw1unkeuH3J3d6sUs%2FLLxBrJ7kDMtHbesADjGs8%2BgZYLlWLRdm%2FyMVJxRTCu8UNTb8BOclEloNk1Yjl0tgOCJQNtBCWqwPayygEZ24oogv8%2BI%2BmXeTDsF8HTXCluP8pwQP47doo%2FeP3Q6L%2FiKxQnWkg4Nd133kkM7ZQWh5EQWF364iUGOdwQ9XFLHIE%2FUk7iNdpUDqX4hxEkfL06FOkgKLDBdMsPT2n7rHkacQHNVmJcVlN4lmXGR3PjcY%2B0YH5JjnRkLa6bbtCS705QOjggAMISmi3KUWYJe6u8O%2FVOWMGLZaEaG5k7mKeKvaJIbW4a44FJpVTmMPKHmb83TtGaRPKRD%2B1Uz4xBelhyKyDeR%2FRNM77K1O7ixK5wky9krqEy8EN9JJd6QffhrhJ6jLLdFqNLb724KORbiAYOjYEYDNLP5ISbkLZJRy2ZADd17%2Fz7Cpl4dNuN79P1rpXOmqNEo9yWi9vJKmLFPHTn%2FTIRjfOKofzKw4kAF25uDr%2BlfKepRpZqyWcvj1nlx4Pw%2B%2F85DxglJGJQwiHJUNHt4TxfXmOKH2Vj1bdvLo9DcIJFps33Lq7NaD2UNcuKp0dbf0Dn3aYznVCRHxF8M7MFIMMGcu8QGOqUBtgRunm5JY5Yk2pxo6LlWwU6%2FOUKxCSIVKucTkhtepIBojW%2Fx3ScwwJ%2FP8%2BKGLLhMoWCWlt%2FaTPD2dw3F7QAN65UYUB0tfr91Ia85lLDPCigJTXDhIWeuUAWbw%2FhFRFJap0OnbS5b%2Fl6nE%2FVoh6ITopyklw2DjzeZNs6n5BWFepq5WdTlMsefoRr0vteaJ9ZRczsAWFR8iUHb9L%2FUnMqco1Yo0doP&X-Amz-Signature=ea08fd0947da139b1583d664a16dd2d031297cfb3ae7d271f17bbd7a8fd67047&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2QMZTLE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbDmM5TVuosBScBlhSuS8R5x7MWphQ0eUng1iO%2BPVpsAiBdrr9NdeKOIqm1ZZf0nsei%2BnoVM0%2F%2BQxWxM0E7MxVvgCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMwJuWLjwy%2Fl8709kIKtwDizy2FeQQiZ8zZVtnv2MKUqyqGlDZyeOacNYYfee6ofQnJYgbcRswAxRjdExj7eZWnj91F45O7o0x5TEEVyjLsQWQMi43oWsq6IBs7PFoi1TggTDsZg6H5LfDHIQRHwCHFzWFscZya94IWWd%2BNFEKoIPeUyuD1WM6bjOsayqSfXYeCEN%2FSX2pQBHZ0ZfB6h6u334MCF%2BHM1WVp89tcIFs4pylFORkBGnWU9Pz2x15q1DAkOdkRYJGfPtYS0lqzi7F8EgrjrY1kZhVx92Qgw1mFa5fq9kxlGFp%2BgdlNogi2BfhXbB8Zd0qDwGTb%2BKJR2VhKMMvVntoi4uqUjOoaUHsZab1Tfv42ulmjZjpFk3UjhZ8%2BWDzVPfZBYtCG8%2BxtSBzCqduOxbgHibtsY2%2BKGg0%2B%2BYka%2F2ct6eLKDU%2Bz4A7YykqJM9EVB1X6d1zid8t%2Bpi3ov1ygt4lIFBVmU3%2Bl5ZRqHsa%2FIxPurrGT88foPpLOVrqYIg%2FN1lNBFZhRiJ%2Foo27aRrtx7hMqlVRhiAMwex%2FHxIe%2Bq7Y6lXK9U%2BS%2BF6ULG4vy3RLJg%2BAlDjvXKCz1MBHqv2KJMVI96l3EmaZHmeL9%2F9U6MftpoeDd5TMQfqnUEpBrwXa3QTskI5zAXAwkqC7xAY6pgGo1G9LQgGanW%2F7Pu1M%2BT0wmweCS7CzTdJPL4PM%2B7zEVzTCz%2BNlxcWVRdMlNlrLKdemccPppR%2FlBBphkzUx%2Bj7vO1tl2463HT5rYTgkj1k7zPMp03NZOdh%2FOw59Vmq01iLvPBfI8eqFY9EYsRBwn9o%2BJPKmGqJnTKNFMWA7%2ByVeQCoRpuOEEptiRTsVe2Lzdcvu%2FJW89O%2BYyGMcQyswTfLaGljHHbHR&X-Amz-Signature=4147b31b789a7f03410388154c664cf2009c44ff3e45d3391245e782117dfc79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTVAYLR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyZcoR16NqdP5Ey8xICmNLKfrb1Y%2FWLCKj1e41nXCpGQIgAiIXoMiQOimoZvO2253sz6V2VT4trJgsmxjDOy2UPeoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGUJ9Q3MqHSAFN7BqyrcA1VT6XGetIsRzB%2FTuEOS2Z7dw1unkeuH3J3d6sUs%2FLLxBrJ7kDMtHbesADjGs8%2BgZYLlWLRdm%2FyMVJxRTCu8UNTb8BOclEloNk1Yjl0tgOCJQNtBCWqwPayygEZ24oogv8%2BI%2BmXeTDsF8HTXCluP8pwQP47doo%2FeP3Q6L%2FiKxQnWkg4Nd133kkM7ZQWh5EQWF364iUGOdwQ9XFLHIE%2FUk7iNdpUDqX4hxEkfL06FOkgKLDBdMsPT2n7rHkacQHNVmJcVlN4lmXGR3PjcY%2B0YH5JjnRkLa6bbtCS705QOjggAMISmi3KUWYJe6u8O%2FVOWMGLZaEaG5k7mKeKvaJIbW4a44FJpVTmMPKHmb83TtGaRPKRD%2B1Uz4xBelhyKyDeR%2FRNM77K1O7ixK5wky9krqEy8EN9JJd6QffhrhJ6jLLdFqNLb724KORbiAYOjYEYDNLP5ISbkLZJRy2ZADd17%2Fz7Cpl4dNuN79P1rpXOmqNEo9yWi9vJKmLFPHTn%2FTIRjfOKofzKw4kAF25uDr%2BlfKepRpZqyWcvj1nlx4Pw%2B%2F85DxglJGJQwiHJUNHt4TxfXmOKH2Vj1bdvLo9DcIJFps33Lq7NaD2UNcuKp0dbf0Dn3aYznVCRHxF8M7MFIMMGcu8QGOqUBtgRunm5JY5Yk2pxo6LlWwU6%2FOUKxCSIVKucTkhtepIBojW%2Fx3ScwwJ%2FP8%2BKGLLhMoWCWlt%2FaTPD2dw3F7QAN65UYUB0tfr91Ia85lLDPCigJTXDhIWeuUAWbw%2FhFRFJap0OnbS5b%2Fl6nE%2FVoh6ITopyklw2DjzeZNs6n5BWFepq5WdTlMsefoRr0vteaJ9ZRczsAWFR8iUHb9L%2FUnMqco1Yo0doP&X-Amz-Signature=09e7811694bd6de30bed5e924fa9a15638dc6468678661ef48df6abb5837964a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UQN3UPD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFCPmDHWdw9l%2BfPQxJHFMyJDSRT613VvI1%2BC4uwmxX6AiBCq3v2qBPrsPjCDfMxwk2fnd6%2FJfKIkmk0lfdQfFMx3Sr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMq3zN%2BKKK4gaWBzvbKtwDah%2FDcBOeXzqnP0LZexU6S6tZedgVjwshY%2BnGQe8f7aVqi%2FVGPYS5065YNs4dQFAxfPJo4oj3B3wyWElE4LARotWLr7Ja4Y5VUpJ5Di%2B3t4iA6uuPTsnq8tHzdg3X6dZPK%2FsU3V7GAp2X5uiO9IqLU%2BIsqFusUGUh2wUmBFr4dKStaF71zLgLZlRYf1q6PX8owJ5bn4MUul%2Fec%2BNT300XY8yMXTuAg7iApVoHhblph0T%2BrKv8Fc4GcLDAZ9H4%2BAs1urIMjK%2Bul1fRtjUt2Z%2F9MRoqZDMsq5aovXFEMRp4AUAuprxl4lf8YrP56k9hD5zsAaBZ6782mnQ75eKU%2FF%2FlFeXRh5i4by85fWkKznso73iYb7sfq1x6ZkJbgl761PL%2BNu%2BmoVPWLzdzK%2FMZz64URbkjYeGQCUpAOHWt0tIgANbpVItwdXKGddrsqUNVeFKcI7xWdEyKmpob4Ah%2Fpm83GYcB1KzgtXecWtEV8Ewcuq5fkhPWkr1czV%2BCQ88DB34H8DQuvnk7Y80vi98SqJsmmmyxhTDL%2FfX5hvUhRUKmqGcIv9SP5AMcIfnqZfjNv94oa00%2F0R15%2F6MBLbo%2BMSPuS1NLbxfOS4cT6e9Mc6IaBOx5YTZPgYJ5fMym3QEwxJ67xAY6pgEAQUBWc0LoumGyRXfcROK4bIn4FbmiHSPYdM9rX6gr0z8%2F%2B7SaRjuYYaZrEcZu5QR6dYfPZ7YLcnU4qIU2AztpMsCNwS4om2naoOPM9aA84G%2BtDidrZL1KvKVOXp7OXCT%2FmDqRjuoCL3yfGLwYqPROEXh9IsLwIIJ4bGKRg3sTKH4SOkFkQBIpg6xuyWXvM1Ehn4YxUFMqhI2Q3a%2BNI2wuX9CXPPx9&X-Amz-Signature=18e7128b74d22a102a63fd768d0606d9485c359e660456cefbfd37cd94e44b85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q2635PJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3OipSPkBLAPexvagw4%2B7tV6DpZTPLui9Zs9DvFJwDvQIgQo5x9NVcpY%2F8JR47pAcCYc1rCubN4zSg5nl8bIUCloQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDE1%2FzZ3GBjgCAyZ5HCrcA30P2H6eXeC3tSlXt27Ean04n7XRXUzartI0EaKgu%2BJ81siE2Y2cHIUI0gTgCdRsXPM8mZdKz%2Bfa1VozFDsbXG1l8s7OJHuCZ%2FVyuqNIiZu6XUGrJbqRvGAvXpccWAMlEKI4PnDNwZDpro1HnELOJq71cEidIDdWygCi9BPOXov%2BMzK3ozk%2FoKaeqHRT8EjOLl4kVuR%2FDRqsRupGFgo17rNc4jLPUz%2BsMT0E7qVUzdRaKvEmo6szAMzpdn88PqK24uL1C50Xb4soP3DY60%2FeVCmM%2B78R70k%2B27TkgJip28R2k0m24JLtmWq3m%2BdQu8FX3XUbawdIB5WA7rFzDlBjifIfhY3RPSohE0XGfla%2BiLDmzW%2FBI5pw0PslRjtiK%2BWR%2FPic7G%2BnGQDODYrganAWBQSzIR3q7qWhXpREvDXB78LTmeQR1tSlJyhfkhxZwVrm%2FfpUYaKsEwHl36zjTQMZOTl94DdvR2xfVh8yUWFOnjaTmdzK%2BmE3SR3gXAWIFDCDNBUnmD7UYoPZkXjJUdKKnrphkhnDKtBvlQ7%2BQ%2BENGk7jZpoCHSfw%2Bqo42oIsfg9QNDfcnwXHe%2FB%2F1luCCU60b1ZIQ7GxVZ0Jg0u10txceRhrkuPUDsCGFDMLpjvLMKSju8QGOqUBPfIIfClY7aquOeUuFEq4rc2%2FeVjlDlVTH8u6VOVco9iuwNqdHLvCqeek8vENJNiTIyKc5Kre4lT0qEjCEuPoubr7qdqiXhE2PbV9Dcd9dY%2BBY%2FiMuLoXhA1KrRvYWspA%2BfwdomJTxGjZjxyX1qg%2FiDJhzhGOFZQFJM2OCwM7S%2FofSBmketgpjKNMCjp%2BKu%2FxMAZCw8wKgW42Bl338WzWBLFtY1s%2B&X-Amz-Signature=7222d2b11f3fd93430b5f069fbb8d14f618884d19f85f870ffc49d8b6c9c32fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTDOKPOV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjvenvsT%2BXFaps4HcqykXi8PHi3LDyF8MaaUE2xKhQLAiEAhvm%2FuJVB3M6oolOE4jNub%2B3MWr%2BUFiOZvXLwT9vEsM0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIdFkGzw14aXQE7%2FQSrcAwMzYivBRnGF6H2d9ZMuTgWaX0aM%2BRJQtJSLCs0JiMjX9GQcP2EtyMW6OI3%2Bdlq77CJ7GCCpIRUib0L%2FEyfn%2BS%2Fkjl5GVY8HB9xbKsciCPg5nXjJTRA%2FUyCCyj9TRWxfQoFg0SQ87HCu4qfLTZ7gZWgO%2Bc56VoGFzm5ToXsOCri4K%2Fmf8Rvzlso4nEjjWWq8MjG3g9z%2BzoTT%2FirQi%2FRxkZTOC%2F0DL3EJ3tlBVDk98tO8eNsC%2Bl68Zn54Fut8rw0I%2FgjRXZDwZFoIQRshz48IFUuXO6syYPtkNHXWTWyJUzSHBzSmN99uQOBp%2B9eAH2TPByJeh1fyv%2B077aHEjaJKPtwqQuTpC%2Fyr2UVKerrPv3zpCdGIfSp5ICATEGlKL9DiNMj8%2BK%2Bb%2FOX04cSmRu3J%2F9gkuDj36GCjPacx9mDuLU2XZSyACoaFmUL%2Be%2FqMcCrTSylLOm2UvZ3q72h8LHh6te%2F6U7E9IHQ%2B71HnhNjksBbWjwddzuxfjt65%2BBoNFxNRUMZaf7bdgIRdTqdnTpSkob%2Fno8tHs00wzumCeihilRgw6aOKwky1Z5J3J7nXUnctaMKjeVHIiHmBTCkkzDTACUl7WLlWUVt9vncYiA8ILrI%2FtiEZMDrCd0j8y9cTMJGiu8QGOqUBG50pXndWq1yLmLId1b2%2F9ngct%2F7VurcvP2BX5wAPVCkHERMzC%2FdyZc1knhN7aJfLlylsDGeOJ2ZptiiTilIi3zyEKPyUszFSDoyBdaaa%2BsH42OiI323wa0E37bPpe0xrQ69jvDW0syQUP3K1umuWfMCzAJ8ezduXC1%2Bpm0g%2Fr0zq%2BqroQb8IFxtKEE9Mftt%2B2qmNw6%2FZ0esTO%2Fwm8aYtVWnXIPVL&X-Amz-Signature=398464e09e4e65925283a79783ea0764151ba6c57a141dd323616211fa76ec8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V23AB7P6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXzhxv6dWfdx1rbBVOEwcDAMTbaa30hI0OQyK8SdsbsAiAql6AHL%2BwXaFVFjxDh75%2F7QNJODAJ0pOCOTRbueir%2BzSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM0LSKnFjEus0cVdWXKtwDMeMONiQeHojtJ8V%2BxS2i%2FBQ2tivhPgQujXzXviO8vrK1YCtNsesUD7sOOlnwYAiZQ%2B1Hx4XL6bzNBF1kWLEgG9075VZhn0RfvqcipzcE1AJR95qc0u%2F1HkR4sJA4jhePAT6rNuRkBy%2FfpP6Ji6vYKNJT9KTVe4t4AewPJuAsqy2fTqtMNCCMxARmzvRgM2DNqDBmZEF7D%2Fph%2BNZUj%2BLK8Enw1praFiC2ih4DGNd9cyBfto2RDrBfcN0qZZRLOnO6Zza%2BUwJh7LSP6qIWjRC0ZcxLkm69GHMDdmJDDI3%2FVZYxI5fq1i4Fq5byWLLNQXJ4mHDzTz9ldev7%2BU1Id3l9aCzlDN77cjQDecUkwWM1c8UTugFgNgC1cTtZWjFHNL9TrnxXIPrq0tV9OGFQ6i0Fyf0Pxm4hAoslgk20ped6McmfrN7vYhouNBYOfOXMW%2BXY%2BCcqoqJSdtFiCpKEpDzWtZVh1lnsJs74MXNI1gxEWf8E7Enrw4JyllyxVjYTMfFFy%2F8GV1r7xTFVch9aCxr1AJYxeWTP4vDbiUSYjIO1yIKT8dI3EubjkizKiJzq6BwgkdJhD6g3MmOoCuw3Scwvwk%2BUgPOSK4ilEH%2Fd%2BQTFMkgZInG7%2Fo7B0TCT8qcw2Z27xAY6pgH%2FNSt6EnjH84tUI7rciYKvtLlJ6OMgG8OMQpaFEK9hJoj%2FrYxESC9hKAfQ1zI5CM8hewxlOP1e1NwJ1CcskLhufmJUZlgoZZAGG6tjRgaq6AWBLQcL4CFRaEuOEfA48RCkJwbDgVfuzrEOGAxiDRjNbM0RW3nkWJqTDARAdfjzcfwGMXp3Woy4EGGBP8AHOCdjVmiHQRzWkGbgGYXhex0gD492Bodp&X-Amz-Signature=e873136fcf2e72d467071d5b6d550649aeb30a7e3d7961822e3d5abb51e3df2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEPJW65F%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5cRTDy73tDNJ9GWyRe0%2BwU4bg0S8ZjzbzK%2F9owTUNqQIgTtuDW2yUkSsin3Xv%2B0t%2BF287L8XmJEKQQoQFKm%2BcnZIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOjodo6%2B3IfSdkM6zyrcA7TYAPqPYiyEWAFvXA4tHC3o5M5K4Ys9oU2C74sVlMCE6XwT0qfSzy9HmdjXaG0aj62KGRm2DqvmgPbXARi%2BvnFnD%2BZtJowq%2BCKGxiK8bcLmuWcCwasUP5pfQFj%2B3FEPn1ry0iyElyDwB6GVzWO4d0q0e4p7cskxSOm35kQXrwgHr%2FBza7Lpqwn6wZPmA0Ps8ZnqRtnECA0BjT76tUzPwi3SZEs42d1XwduFbx1XRUYJpbRU32BffzueNjKSPVJ8bOXZlVCNWYGTkE44FAWBnRNcpA2bk1iYMVz1p2qvb7lP%2FCQY3lxMNImeslUWziicbTqxzTPLHpXVHM0uMMJaY9rONO4r2Huv2X7TSw0VShXUI6i1PkjTNea24sYDwg%2Bf0H98rtKQytjTvWpcjsBDfe1zZXjhfXrKCSk9oc68836kgY7HAhw8%2BL5nYZ4FsCkhkvvtIyalNGo0Odid8P0UjgZa1EqPjTxvSJqG%2BLZZtZ87Wg0%2Bmz9HM%2FsRhLWYsinPX742QM0aNEaivJ51uQ%2FfG2kPbIwjRmUm6DK5LmmatqYbOaibvcFaHN40VT2Fo7K%2FAG6Bxt4hn9HhVfJD9%2BnhDgyvY%2BJJUmH3oS7b4oh1k7N5N%2BE9XsH%2B7yTPBJdpMJ2mu8QGOqUBIL%2FKBsFKIuy7WfQDeLsLGLbOHWFgRh1uFPndnJoB6iI1Sana%2FqVHHhrzXp%2FEMn5mQOidOYU5ZGiaLdLhA3FUW46cMDDGb3imdBAztiX%2Fii1apvi37RS4%2FY29yL5jKt0dP%2B88VWyYPqH0PlwjrdUX4TyUha4SLTHDjt8nfGS7fbQPHgVv6piy1qw0qD9%2FOn8QEDUCH43PQavrwkdtjf%2FcZjY9GI1H&X-Amz-Signature=06279058f90fc79635736b0028be7b0c04326cc74c7d582b0c780de6c5b1637b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTVAYLR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyZcoR16NqdP5Ey8xICmNLKfrb1Y%2FWLCKj1e41nXCpGQIgAiIXoMiQOimoZvO2253sz6V2VT4trJgsmxjDOy2UPeoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGUJ9Q3MqHSAFN7BqyrcA1VT6XGetIsRzB%2FTuEOS2Z7dw1unkeuH3J3d6sUs%2FLLxBrJ7kDMtHbesADjGs8%2BgZYLlWLRdm%2FyMVJxRTCu8UNTb8BOclEloNk1Yjl0tgOCJQNtBCWqwPayygEZ24oogv8%2BI%2BmXeTDsF8HTXCluP8pwQP47doo%2FeP3Q6L%2FiKxQnWkg4Nd133kkM7ZQWh5EQWF364iUGOdwQ9XFLHIE%2FUk7iNdpUDqX4hxEkfL06FOkgKLDBdMsPT2n7rHkacQHNVmJcVlN4lmXGR3PjcY%2B0YH5JjnRkLa6bbtCS705QOjggAMISmi3KUWYJe6u8O%2FVOWMGLZaEaG5k7mKeKvaJIbW4a44FJpVTmMPKHmb83TtGaRPKRD%2B1Uz4xBelhyKyDeR%2FRNM77K1O7ixK5wky9krqEy8EN9JJd6QffhrhJ6jLLdFqNLb724KORbiAYOjYEYDNLP5ISbkLZJRy2ZADd17%2Fz7Cpl4dNuN79P1rpXOmqNEo9yWi9vJKmLFPHTn%2FTIRjfOKofzKw4kAF25uDr%2BlfKepRpZqyWcvj1nlx4Pw%2B%2F85DxglJGJQwiHJUNHt4TxfXmOKH2Vj1bdvLo9DcIJFps33Lq7NaD2UNcuKp0dbf0Dn3aYznVCRHxF8M7MFIMMGcu8QGOqUBtgRunm5JY5Yk2pxo6LlWwU6%2FOUKxCSIVKucTkhtepIBojW%2Fx3ScwwJ%2FP8%2BKGLLhMoWCWlt%2FaTPD2dw3F7QAN65UYUB0tfr91Ia85lLDPCigJTXDhIWeuUAWbw%2FhFRFJap0OnbS5b%2Fl6nE%2FVoh6ITopyklw2DjzeZNs6n5BWFepq5WdTlMsefoRr0vteaJ9ZRczsAWFR8iUHb9L%2FUnMqco1Yo0doP&X-Amz-Signature=2a242dceead5a251a13b304d28d13b0b18a7665e4dc037117f5d2698b302e2c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTVAYLR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyZcoR16NqdP5Ey8xICmNLKfrb1Y%2FWLCKj1e41nXCpGQIgAiIXoMiQOimoZvO2253sz6V2VT4trJgsmxjDOy2UPeoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGUJ9Q3MqHSAFN7BqyrcA1VT6XGetIsRzB%2FTuEOS2Z7dw1unkeuH3J3d6sUs%2FLLxBrJ7kDMtHbesADjGs8%2BgZYLlWLRdm%2FyMVJxRTCu8UNTb8BOclEloNk1Yjl0tgOCJQNtBCWqwPayygEZ24oogv8%2BI%2BmXeTDsF8HTXCluP8pwQP47doo%2FeP3Q6L%2FiKxQnWkg4Nd133kkM7ZQWh5EQWF364iUGOdwQ9XFLHIE%2FUk7iNdpUDqX4hxEkfL06FOkgKLDBdMsPT2n7rHkacQHNVmJcVlN4lmXGR3PjcY%2B0YH5JjnRkLa6bbtCS705QOjggAMISmi3KUWYJe6u8O%2FVOWMGLZaEaG5k7mKeKvaJIbW4a44FJpVTmMPKHmb83TtGaRPKRD%2B1Uz4xBelhyKyDeR%2FRNM77K1O7ixK5wky9krqEy8EN9JJd6QffhrhJ6jLLdFqNLb724KORbiAYOjYEYDNLP5ISbkLZJRy2ZADd17%2Fz7Cpl4dNuN79P1rpXOmqNEo9yWi9vJKmLFPHTn%2FTIRjfOKofzKw4kAF25uDr%2BlfKepRpZqyWcvj1nlx4Pw%2B%2F85DxglJGJQwiHJUNHt4TxfXmOKH2Vj1bdvLo9DcIJFps33Lq7NaD2UNcuKp0dbf0Dn3aYznVCRHxF8M7MFIMMGcu8QGOqUBtgRunm5JY5Yk2pxo6LlWwU6%2FOUKxCSIVKucTkhtepIBojW%2Fx3ScwwJ%2FP8%2BKGLLhMoWCWlt%2FaTPD2dw3F7QAN65UYUB0tfr91Ia85lLDPCigJTXDhIWeuUAWbw%2FhFRFJap0OnbS5b%2Fl6nE%2FVoh6ITopyklw2DjzeZNs6n5BWFepq5WdTlMsefoRr0vteaJ9ZRczsAWFR8iUHb9L%2FUnMqco1Yo0doP&X-Amz-Signature=71006b5186b81a939f08eb13902a1c79b01c0cddfe7fbd1710885e139617a8ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU6K3YQD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKJzc0sAl8vaDby6qPxvYYkxSzWSQHyGd%2FV10sz312JgIhAItY6nhtDrUdlh9RThYlkkwyJaZhaLKI8FIOx4UtPazqKv8DCCQQABoMNjM3NDIzMTgzODA1IgzbsU1FIg9ZhFtXuNgq3ANZjT%2BHgJHy%2F6ZESN8Ai%2Bi4zS%2FJAKGyyYawoGdjq8fROECOvfwThOxh3DYFhyocn3vM%2BAuBAOrJN0cPgakBkIbnnnPKGB0xvIVjijWr2pLLYbSUR97OcLQTYVQjfjERTkgj2Y2vG%2BXGY8%2BsiU1YXkpDaXqX7UXVsFUxVF5sawDjYWO3HgeDERSd2KqRezVpl5Bs48JBw3gpvrhWEFs64RnoyN83xax34tNwFabBRfR1wLgdZDbvulGIGEFoQdLq4Kg0tbhAlfaVxRsnY%2FG0PqL90frVDdhpscoSLVrB87adVXu6qyWCitR8qN310fr%2FelgW5w8LNS4JAqj4xxQRJInJkbuFLSeIWLYe0CggJSt70%2Ba5wiiQXXxkAe2n4PWCEA6qgrvj3d2rZlDKaTpGUZot9kwqkL6zmUYPERZ4I9MjdsoeZVTqaWhzBRWZ%2FlS3oWYf0LJD9FjrKPbIS6IOCGE0GSs9AIcgqS7nPBqG3Wp%2BfAB1k7uZ91btvunSInd59ACang65lGH5zJQmZFBbDW95FMxc41kKqPIr5G1Ns9Bn8wHAaVEwEvVU%2FFA6Dr9QGvhuDBCQWY6VGfeRmx%2Fj4BLIsCgVrUsJa4cjxMzagwftQJTsApCt%2Fkklcc7PFjC%2Bo7vEBjqkAXydhs2RnK%2F5xXIjis%2Ft%2F%2FcUEklD%2Frt%2FnBlpwLOJC6YQiqu9w5vwvqyczD%2BOa2Vt9QP8COUyGKFgWsZkrhs8J1JzUbioTi5T3QqWm%2FCAAwYV32FrHmS4c15J%2FEV8%2FGwz42%2FhTNADSCIVoA%2BpIunwJMidMvnt%2F1IZekCxpFHiliNTvNjWoB%2Bxnuq1XCyxtr5xr7ocxVSQua2w6xLzMiC2cQ8ZGB0H&X-Amz-Signature=0aafb3adf5f83049e7806b7030958337a9ed3a80983874518cd5eb558fad0504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU6K3YQD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKJzc0sAl8vaDby6qPxvYYkxSzWSQHyGd%2FV10sz312JgIhAItY6nhtDrUdlh9RThYlkkwyJaZhaLKI8FIOx4UtPazqKv8DCCQQABoMNjM3NDIzMTgzODA1IgzbsU1FIg9ZhFtXuNgq3ANZjT%2BHgJHy%2F6ZESN8Ai%2Bi4zS%2FJAKGyyYawoGdjq8fROECOvfwThOxh3DYFhyocn3vM%2BAuBAOrJN0cPgakBkIbnnnPKGB0xvIVjijWr2pLLYbSUR97OcLQTYVQjfjERTkgj2Y2vG%2BXGY8%2BsiU1YXkpDaXqX7UXVsFUxVF5sawDjYWO3HgeDERSd2KqRezVpl5Bs48JBw3gpvrhWEFs64RnoyN83xax34tNwFabBRfR1wLgdZDbvulGIGEFoQdLq4Kg0tbhAlfaVxRsnY%2FG0PqL90frVDdhpscoSLVrB87adVXu6qyWCitR8qN310fr%2FelgW5w8LNS4JAqj4xxQRJInJkbuFLSeIWLYe0CggJSt70%2Ba5wiiQXXxkAe2n4PWCEA6qgrvj3d2rZlDKaTpGUZot9kwqkL6zmUYPERZ4I9MjdsoeZVTqaWhzBRWZ%2FlS3oWYf0LJD9FjrKPbIS6IOCGE0GSs9AIcgqS7nPBqG3Wp%2BfAB1k7uZ91btvunSInd59ACang65lGH5zJQmZFBbDW95FMxc41kKqPIr5G1Ns9Bn8wHAaVEwEvVU%2FFA6Dr9QGvhuDBCQWY6VGfeRmx%2Fj4BLIsCgVrUsJa4cjxMzagwftQJTsApCt%2Fkklcc7PFjC%2Bo7vEBjqkAXydhs2RnK%2F5xXIjis%2Ft%2F%2FcUEklD%2Frt%2FnBlpwLOJC6YQiqu9w5vwvqyczD%2BOa2Vt9QP8COUyGKFgWsZkrhs8J1JzUbioTi5T3QqWm%2FCAAwYV32FrHmS4c15J%2FEV8%2FGwz42%2FhTNADSCIVoA%2BpIunwJMidMvnt%2F1IZekCxpFHiliNTvNjWoB%2Bxnuq1XCyxtr5xr7ocxVSQua2w6xLzMiC2cQ8ZGB0H&X-Amz-Signature=c24ac779d31a8c444eab0dd4c4e949d72f8fccfda48b5c6230888245f4b9d812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU6K3YQD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKJzc0sAl8vaDby6qPxvYYkxSzWSQHyGd%2FV10sz312JgIhAItY6nhtDrUdlh9RThYlkkwyJaZhaLKI8FIOx4UtPazqKv8DCCQQABoMNjM3NDIzMTgzODA1IgzbsU1FIg9ZhFtXuNgq3ANZjT%2BHgJHy%2F6ZESN8Ai%2Bi4zS%2FJAKGyyYawoGdjq8fROECOvfwThOxh3DYFhyocn3vM%2BAuBAOrJN0cPgakBkIbnnnPKGB0xvIVjijWr2pLLYbSUR97OcLQTYVQjfjERTkgj2Y2vG%2BXGY8%2BsiU1YXkpDaXqX7UXVsFUxVF5sawDjYWO3HgeDERSd2KqRezVpl5Bs48JBw3gpvrhWEFs64RnoyN83xax34tNwFabBRfR1wLgdZDbvulGIGEFoQdLq4Kg0tbhAlfaVxRsnY%2FG0PqL90frVDdhpscoSLVrB87adVXu6qyWCitR8qN310fr%2FelgW5w8LNS4JAqj4xxQRJInJkbuFLSeIWLYe0CggJSt70%2Ba5wiiQXXxkAe2n4PWCEA6qgrvj3d2rZlDKaTpGUZot9kwqkL6zmUYPERZ4I9MjdsoeZVTqaWhzBRWZ%2FlS3oWYf0LJD9FjrKPbIS6IOCGE0GSs9AIcgqS7nPBqG3Wp%2BfAB1k7uZ91btvunSInd59ACang65lGH5zJQmZFBbDW95FMxc41kKqPIr5G1Ns9Bn8wHAaVEwEvVU%2FFA6Dr9QGvhuDBCQWY6VGfeRmx%2Fj4BLIsCgVrUsJa4cjxMzagwftQJTsApCt%2Fkklcc7PFjC%2Bo7vEBjqkAXydhs2RnK%2F5xXIjis%2Ft%2F%2FcUEklD%2Frt%2FnBlpwLOJC6YQiqu9w5vwvqyczD%2BOa2Vt9QP8COUyGKFgWsZkrhs8J1JzUbioTi5T3QqWm%2FCAAwYV32FrHmS4c15J%2FEV8%2FGwz42%2FhTNADSCIVoA%2BpIunwJMidMvnt%2F1IZekCxpFHiliNTvNjWoB%2Bxnuq1XCyxtr5xr7ocxVSQua2w6xLzMiC2cQ8ZGB0H&X-Amz-Signature=b79d3c993e1e3637684a2370f7fffc1d50aad1b60740a4bd05b23a375a2c12be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU6K3YQD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKJzc0sAl8vaDby6qPxvYYkxSzWSQHyGd%2FV10sz312JgIhAItY6nhtDrUdlh9RThYlkkwyJaZhaLKI8FIOx4UtPazqKv8DCCQQABoMNjM3NDIzMTgzODA1IgzbsU1FIg9ZhFtXuNgq3ANZjT%2BHgJHy%2F6ZESN8Ai%2Bi4zS%2FJAKGyyYawoGdjq8fROECOvfwThOxh3DYFhyocn3vM%2BAuBAOrJN0cPgakBkIbnnnPKGB0xvIVjijWr2pLLYbSUR97OcLQTYVQjfjERTkgj2Y2vG%2BXGY8%2BsiU1YXkpDaXqX7UXVsFUxVF5sawDjYWO3HgeDERSd2KqRezVpl5Bs48JBw3gpvrhWEFs64RnoyN83xax34tNwFabBRfR1wLgdZDbvulGIGEFoQdLq4Kg0tbhAlfaVxRsnY%2FG0PqL90frVDdhpscoSLVrB87adVXu6qyWCitR8qN310fr%2FelgW5w8LNS4JAqj4xxQRJInJkbuFLSeIWLYe0CggJSt70%2Ba5wiiQXXxkAe2n4PWCEA6qgrvj3d2rZlDKaTpGUZot9kwqkL6zmUYPERZ4I9MjdsoeZVTqaWhzBRWZ%2FlS3oWYf0LJD9FjrKPbIS6IOCGE0GSs9AIcgqS7nPBqG3Wp%2BfAB1k7uZ91btvunSInd59ACang65lGH5zJQmZFBbDW95FMxc41kKqPIr5G1Ns9Bn8wHAaVEwEvVU%2FFA6Dr9QGvhuDBCQWY6VGfeRmx%2Fj4BLIsCgVrUsJa4cjxMzagwftQJTsApCt%2Fkklcc7PFjC%2Bo7vEBjqkAXydhs2RnK%2F5xXIjis%2Ft%2F%2FcUEklD%2Frt%2FnBlpwLOJC6YQiqu9w5vwvqyczD%2BOa2Vt9QP8COUyGKFgWsZkrhs8J1JzUbioTi5T3QqWm%2FCAAwYV32FrHmS4c15J%2FEV8%2FGwz42%2FhTNADSCIVoA%2BpIunwJMidMvnt%2F1IZekCxpFHiliNTvNjWoB%2Bxnuq1XCyxtr5xr7ocxVSQua2w6xLzMiC2cQ8ZGB0H&X-Amz-Signature=22503fd5d4a300e9747896b111cad278870c469e9797e3bb0102fc726e453ad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU6K3YQD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKJzc0sAl8vaDby6qPxvYYkxSzWSQHyGd%2FV10sz312JgIhAItY6nhtDrUdlh9RThYlkkwyJaZhaLKI8FIOx4UtPazqKv8DCCQQABoMNjM3NDIzMTgzODA1IgzbsU1FIg9ZhFtXuNgq3ANZjT%2BHgJHy%2F6ZESN8Ai%2Bi4zS%2FJAKGyyYawoGdjq8fROECOvfwThOxh3DYFhyocn3vM%2BAuBAOrJN0cPgakBkIbnnnPKGB0xvIVjijWr2pLLYbSUR97OcLQTYVQjfjERTkgj2Y2vG%2BXGY8%2BsiU1YXkpDaXqX7UXVsFUxVF5sawDjYWO3HgeDERSd2KqRezVpl5Bs48JBw3gpvrhWEFs64RnoyN83xax34tNwFabBRfR1wLgdZDbvulGIGEFoQdLq4Kg0tbhAlfaVxRsnY%2FG0PqL90frVDdhpscoSLVrB87adVXu6qyWCitR8qN310fr%2FelgW5w8LNS4JAqj4xxQRJInJkbuFLSeIWLYe0CggJSt70%2Ba5wiiQXXxkAe2n4PWCEA6qgrvj3d2rZlDKaTpGUZot9kwqkL6zmUYPERZ4I9MjdsoeZVTqaWhzBRWZ%2FlS3oWYf0LJD9FjrKPbIS6IOCGE0GSs9AIcgqS7nPBqG3Wp%2BfAB1k7uZ91btvunSInd59ACang65lGH5zJQmZFBbDW95FMxc41kKqPIr5G1Ns9Bn8wHAaVEwEvVU%2FFA6Dr9QGvhuDBCQWY6VGfeRmx%2Fj4BLIsCgVrUsJa4cjxMzagwftQJTsApCt%2Fkklcc7PFjC%2Bo7vEBjqkAXydhs2RnK%2F5xXIjis%2Ft%2F%2FcUEklD%2Frt%2FnBlpwLOJC6YQiqu9w5vwvqyczD%2BOa2Vt9QP8COUyGKFgWsZkrhs8J1JzUbioTi5T3QqWm%2FCAAwYV32FrHmS4c15J%2FEV8%2FGwz42%2FhTNADSCIVoA%2BpIunwJMidMvnt%2F1IZekCxpFHiliNTvNjWoB%2Bxnuq1XCyxtr5xr7ocxVSQua2w6xLzMiC2cQ8ZGB0H&X-Amz-Signature=18e9c822ceace870bfd6555edff2f502b0d669d71f3706d792a11defc001dd9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU6K3YQD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKJzc0sAl8vaDby6qPxvYYkxSzWSQHyGd%2FV10sz312JgIhAItY6nhtDrUdlh9RThYlkkwyJaZhaLKI8FIOx4UtPazqKv8DCCQQABoMNjM3NDIzMTgzODA1IgzbsU1FIg9ZhFtXuNgq3ANZjT%2BHgJHy%2F6ZESN8Ai%2Bi4zS%2FJAKGyyYawoGdjq8fROECOvfwThOxh3DYFhyocn3vM%2BAuBAOrJN0cPgakBkIbnnnPKGB0xvIVjijWr2pLLYbSUR97OcLQTYVQjfjERTkgj2Y2vG%2BXGY8%2BsiU1YXkpDaXqX7UXVsFUxVF5sawDjYWO3HgeDERSd2KqRezVpl5Bs48JBw3gpvrhWEFs64RnoyN83xax34tNwFabBRfR1wLgdZDbvulGIGEFoQdLq4Kg0tbhAlfaVxRsnY%2FG0PqL90frVDdhpscoSLVrB87adVXu6qyWCitR8qN310fr%2FelgW5w8LNS4JAqj4xxQRJInJkbuFLSeIWLYe0CggJSt70%2Ba5wiiQXXxkAe2n4PWCEA6qgrvj3d2rZlDKaTpGUZot9kwqkL6zmUYPERZ4I9MjdsoeZVTqaWhzBRWZ%2FlS3oWYf0LJD9FjrKPbIS6IOCGE0GSs9AIcgqS7nPBqG3Wp%2BfAB1k7uZ91btvunSInd59ACang65lGH5zJQmZFBbDW95FMxc41kKqPIr5G1Ns9Bn8wHAaVEwEvVU%2FFA6Dr9QGvhuDBCQWY6VGfeRmx%2Fj4BLIsCgVrUsJa4cjxMzagwftQJTsApCt%2Fkklcc7PFjC%2Bo7vEBjqkAXydhs2RnK%2F5xXIjis%2Ft%2F%2FcUEklD%2Frt%2FnBlpwLOJC6YQiqu9w5vwvqyczD%2BOa2Vt9QP8COUyGKFgWsZkrhs8J1JzUbioTi5T3QqWm%2FCAAwYV32FrHmS4c15J%2FEV8%2FGwz42%2FhTNADSCIVoA%2BpIunwJMidMvnt%2F1IZekCxpFHiliNTvNjWoB%2Bxnuq1XCyxtr5xr7ocxVSQua2w6xLzMiC2cQ8ZGB0H&X-Amz-Signature=fb21f1f28efce77d9760675ea261502ce7624715a4d0144200d55b5a3ee7c7cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU6K3YQD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKJzc0sAl8vaDby6qPxvYYkxSzWSQHyGd%2FV10sz312JgIhAItY6nhtDrUdlh9RThYlkkwyJaZhaLKI8FIOx4UtPazqKv8DCCQQABoMNjM3NDIzMTgzODA1IgzbsU1FIg9ZhFtXuNgq3ANZjT%2BHgJHy%2F6ZESN8Ai%2Bi4zS%2FJAKGyyYawoGdjq8fROECOvfwThOxh3DYFhyocn3vM%2BAuBAOrJN0cPgakBkIbnnnPKGB0xvIVjijWr2pLLYbSUR97OcLQTYVQjfjERTkgj2Y2vG%2BXGY8%2BsiU1YXkpDaXqX7UXVsFUxVF5sawDjYWO3HgeDERSd2KqRezVpl5Bs48JBw3gpvrhWEFs64RnoyN83xax34tNwFabBRfR1wLgdZDbvulGIGEFoQdLq4Kg0tbhAlfaVxRsnY%2FG0PqL90frVDdhpscoSLVrB87adVXu6qyWCitR8qN310fr%2FelgW5w8LNS4JAqj4xxQRJInJkbuFLSeIWLYe0CggJSt70%2Ba5wiiQXXxkAe2n4PWCEA6qgrvj3d2rZlDKaTpGUZot9kwqkL6zmUYPERZ4I9MjdsoeZVTqaWhzBRWZ%2FlS3oWYf0LJD9FjrKPbIS6IOCGE0GSs9AIcgqS7nPBqG3Wp%2BfAB1k7uZ91btvunSInd59ACang65lGH5zJQmZFBbDW95FMxc41kKqPIr5G1Ns9Bn8wHAaVEwEvVU%2FFA6Dr9QGvhuDBCQWY6VGfeRmx%2Fj4BLIsCgVrUsJa4cjxMzagwftQJTsApCt%2Fkklcc7PFjC%2Bo7vEBjqkAXydhs2RnK%2F5xXIjis%2Ft%2F%2FcUEklD%2Frt%2FnBlpwLOJC6YQiqu9w5vwvqyczD%2BOa2Vt9QP8COUyGKFgWsZkrhs8J1JzUbioTi5T3QqWm%2FCAAwYV32FrHmS4c15J%2FEV8%2FGwz42%2FhTNADSCIVoA%2BpIunwJMidMvnt%2F1IZekCxpFHiliNTvNjWoB%2Bxnuq1XCyxtr5xr7ocxVSQua2w6xLzMiC2cQ8ZGB0H&X-Amz-Signature=b79d3c993e1e3637684a2370f7fffc1d50aad1b60740a4bd05b23a375a2c12be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU6K3YQD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKJzc0sAl8vaDby6qPxvYYkxSzWSQHyGd%2FV10sz312JgIhAItY6nhtDrUdlh9RThYlkkwyJaZhaLKI8FIOx4UtPazqKv8DCCQQABoMNjM3NDIzMTgzODA1IgzbsU1FIg9ZhFtXuNgq3ANZjT%2BHgJHy%2F6ZESN8Ai%2Bi4zS%2FJAKGyyYawoGdjq8fROECOvfwThOxh3DYFhyocn3vM%2BAuBAOrJN0cPgakBkIbnnnPKGB0xvIVjijWr2pLLYbSUR97OcLQTYVQjfjERTkgj2Y2vG%2BXGY8%2BsiU1YXkpDaXqX7UXVsFUxVF5sawDjYWO3HgeDERSd2KqRezVpl5Bs48JBw3gpvrhWEFs64RnoyN83xax34tNwFabBRfR1wLgdZDbvulGIGEFoQdLq4Kg0tbhAlfaVxRsnY%2FG0PqL90frVDdhpscoSLVrB87adVXu6qyWCitR8qN310fr%2FelgW5w8LNS4JAqj4xxQRJInJkbuFLSeIWLYe0CggJSt70%2Ba5wiiQXXxkAe2n4PWCEA6qgrvj3d2rZlDKaTpGUZot9kwqkL6zmUYPERZ4I9MjdsoeZVTqaWhzBRWZ%2FlS3oWYf0LJD9FjrKPbIS6IOCGE0GSs9AIcgqS7nPBqG3Wp%2BfAB1k7uZ91btvunSInd59ACang65lGH5zJQmZFBbDW95FMxc41kKqPIr5G1Ns9Bn8wHAaVEwEvVU%2FFA6Dr9QGvhuDBCQWY6VGfeRmx%2Fj4BLIsCgVrUsJa4cjxMzagwftQJTsApCt%2Fkklcc7PFjC%2Bo7vEBjqkAXydhs2RnK%2F5xXIjis%2Ft%2F%2FcUEklD%2Frt%2FnBlpwLOJC6YQiqu9w5vwvqyczD%2BOa2Vt9QP8COUyGKFgWsZkrhs8J1JzUbioTi5T3QqWm%2FCAAwYV32FrHmS4c15J%2FEV8%2FGwz42%2FhTNADSCIVoA%2BpIunwJMidMvnt%2F1IZekCxpFHiliNTvNjWoB%2Bxnuq1XCyxtr5xr7ocxVSQua2w6xLzMiC2cQ8ZGB0H&X-Amz-Signature=cf3893edfb21b9e826bebdd5ae41d1672eeb7dd6a02173214e12df92cd067437&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU6K3YQD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKJzc0sAl8vaDby6qPxvYYkxSzWSQHyGd%2FV10sz312JgIhAItY6nhtDrUdlh9RThYlkkwyJaZhaLKI8FIOx4UtPazqKv8DCCQQABoMNjM3NDIzMTgzODA1IgzbsU1FIg9ZhFtXuNgq3ANZjT%2BHgJHy%2F6ZESN8Ai%2Bi4zS%2FJAKGyyYawoGdjq8fROECOvfwThOxh3DYFhyocn3vM%2BAuBAOrJN0cPgakBkIbnnnPKGB0xvIVjijWr2pLLYbSUR97OcLQTYVQjfjERTkgj2Y2vG%2BXGY8%2BsiU1YXkpDaXqX7UXVsFUxVF5sawDjYWO3HgeDERSd2KqRezVpl5Bs48JBw3gpvrhWEFs64RnoyN83xax34tNwFabBRfR1wLgdZDbvulGIGEFoQdLq4Kg0tbhAlfaVxRsnY%2FG0PqL90frVDdhpscoSLVrB87adVXu6qyWCitR8qN310fr%2FelgW5w8LNS4JAqj4xxQRJInJkbuFLSeIWLYe0CggJSt70%2Ba5wiiQXXxkAe2n4PWCEA6qgrvj3d2rZlDKaTpGUZot9kwqkL6zmUYPERZ4I9MjdsoeZVTqaWhzBRWZ%2FlS3oWYf0LJD9FjrKPbIS6IOCGE0GSs9AIcgqS7nPBqG3Wp%2BfAB1k7uZ91btvunSInd59ACang65lGH5zJQmZFBbDW95FMxc41kKqPIr5G1Ns9Bn8wHAaVEwEvVU%2FFA6Dr9QGvhuDBCQWY6VGfeRmx%2Fj4BLIsCgVrUsJa4cjxMzagwftQJTsApCt%2Fkklcc7PFjC%2Bo7vEBjqkAXydhs2RnK%2F5xXIjis%2Ft%2F%2FcUEklD%2Frt%2FnBlpwLOJC6YQiqu9w5vwvqyczD%2BOa2Vt9QP8COUyGKFgWsZkrhs8J1JzUbioTi5T3QqWm%2FCAAwYV32FrHmS4c15J%2FEV8%2FGwz42%2FhTNADSCIVoA%2BpIunwJMidMvnt%2F1IZekCxpFHiliNTvNjWoB%2Bxnuq1XCyxtr5xr7ocxVSQua2w6xLzMiC2cQ8ZGB0H&X-Amz-Signature=12379999dd658d71c930b3ea762f1690ccac7d046d8b28e2373d06473bbe5947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU6K3YQD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKJzc0sAl8vaDby6qPxvYYkxSzWSQHyGd%2FV10sz312JgIhAItY6nhtDrUdlh9RThYlkkwyJaZhaLKI8FIOx4UtPazqKv8DCCQQABoMNjM3NDIzMTgzODA1IgzbsU1FIg9ZhFtXuNgq3ANZjT%2BHgJHy%2F6ZESN8Ai%2Bi4zS%2FJAKGyyYawoGdjq8fROECOvfwThOxh3DYFhyocn3vM%2BAuBAOrJN0cPgakBkIbnnnPKGB0xvIVjijWr2pLLYbSUR97OcLQTYVQjfjERTkgj2Y2vG%2BXGY8%2BsiU1YXkpDaXqX7UXVsFUxVF5sawDjYWO3HgeDERSd2KqRezVpl5Bs48JBw3gpvrhWEFs64RnoyN83xax34tNwFabBRfR1wLgdZDbvulGIGEFoQdLq4Kg0tbhAlfaVxRsnY%2FG0PqL90frVDdhpscoSLVrB87adVXu6qyWCitR8qN310fr%2FelgW5w8LNS4JAqj4xxQRJInJkbuFLSeIWLYe0CggJSt70%2Ba5wiiQXXxkAe2n4PWCEA6qgrvj3d2rZlDKaTpGUZot9kwqkL6zmUYPERZ4I9MjdsoeZVTqaWhzBRWZ%2FlS3oWYf0LJD9FjrKPbIS6IOCGE0GSs9AIcgqS7nPBqG3Wp%2BfAB1k7uZ91btvunSInd59ACang65lGH5zJQmZFBbDW95FMxc41kKqPIr5G1Ns9Bn8wHAaVEwEvVU%2FFA6Dr9QGvhuDBCQWY6VGfeRmx%2Fj4BLIsCgVrUsJa4cjxMzagwftQJTsApCt%2Fkklcc7PFjC%2Bo7vEBjqkAXydhs2RnK%2F5xXIjis%2Ft%2F%2FcUEklD%2Frt%2FnBlpwLOJC6YQiqu9w5vwvqyczD%2BOa2Vt9QP8COUyGKFgWsZkrhs8J1JzUbioTi5T3QqWm%2FCAAwYV32FrHmS4c15J%2FEV8%2FGwz42%2FhTNADSCIVoA%2BpIunwJMidMvnt%2F1IZekCxpFHiliNTvNjWoB%2Bxnuq1XCyxtr5xr7ocxVSQua2w6xLzMiC2cQ8ZGB0H&X-Amz-Signature=dee2052665df5ad16dddbc1abf53315f35df3b557a3fd4104bdce14871d04d70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
