---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-01T21:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-01T21:06:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRG7SPT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPjHxnizwNCVOi7YieCiyfwJre9hiFJqMCee4CuzXbLQIgGN3dLf74ynb9Os%2FQx3L2GIkMNzHhO3TyxeHtK0XdQ2gqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvpzPnoo2ge36jlAyrcA%2FEu%2FwnvWjvPUq6zmOlyZIjwgoMBFQnUS9Js1kJ7oub6Na6s5jLWfyyTd%2BcrXpm6X14IMVjrqU%2FdJvsxRei%2Baw8VgJWwJIpflQcw3fbot68p1ueXZHdGaHP1Qovsdm4PMrsJPYiun9jWeOwx89YRuHVvpyaVBSd60W9tb2yMQYsMG8nVyoAm18w3QM0BhSnrPwzQSslpsvLzXeanm3pBF%2BJpV3YnlW4X6rOxwK%2BS%2BKYbukUK2G8mv3iZyShcgyLwBpb8K307x%2B%2F4IMNF47s9RZC17eJbriVVrX46sr%2FszedJQxYSJ6YxNinIdTTNkcp5PrhkQ77ghf9XsiIjJkpeRMQOx7DXnF3LwJkEt9UFcHzgmuGszorVkcYZ6omy465ur51KqjBAXcPXUmW0LTrScYhhZXPkWOfa%2FJB7L7iO41lEDJmxsjtx%2B%2BFteDaubqVlsigeXR7Pb1k2e0imKq2rZ4JFkPB8lybHMXFA9GJbLg%2Fzv288npD9Xsk0incRORc6uhJ1TsRwuA6IOuZhlZ916NLQTrWRGVGL7ylJmaS%2Fp1zHVWv5I6BXcb84u210zcxmsN71w4RnX3c7lqoI0LfnQdVUNuCuud5ggYUfx6O6RehTdogysNfxNX4v2pt5MOnttMQGOqUBglmG7NZgJWSKlwPVQUXQ%2Bb1q9LHqjRPH%2Fw9hiapYkSXOpkTrLg9GCfRCp7yScOPo2gR9%2BfTvqKR5zBd37slrNroE3bo6TSW7lkJWqDj2LHuc7sYQnXIKyMNW3YNefG8Th6BdrAC%2FsXaSYwTCxukW1o76sNndqlqJj0ygZLp8tQz9IcqxDMROtxjXAqGb3woqCx76oHZCswx1IzkPvPwu8aERFU%2F0&X-Amz-Signature=e4d57feb184ada8c56949ab9d9d31ca61bcc36895f6a57f4442ccf622ee90528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRG7SPT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPjHxnizwNCVOi7YieCiyfwJre9hiFJqMCee4CuzXbLQIgGN3dLf74ynb9Os%2FQx3L2GIkMNzHhO3TyxeHtK0XdQ2gqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvpzPnoo2ge36jlAyrcA%2FEu%2FwnvWjvPUq6zmOlyZIjwgoMBFQnUS9Js1kJ7oub6Na6s5jLWfyyTd%2BcrXpm6X14IMVjrqU%2FdJvsxRei%2Baw8VgJWwJIpflQcw3fbot68p1ueXZHdGaHP1Qovsdm4PMrsJPYiun9jWeOwx89YRuHVvpyaVBSd60W9tb2yMQYsMG8nVyoAm18w3QM0BhSnrPwzQSslpsvLzXeanm3pBF%2BJpV3YnlW4X6rOxwK%2BS%2BKYbukUK2G8mv3iZyShcgyLwBpb8K307x%2B%2F4IMNF47s9RZC17eJbriVVrX46sr%2FszedJQxYSJ6YxNinIdTTNkcp5PrhkQ77ghf9XsiIjJkpeRMQOx7DXnF3LwJkEt9UFcHzgmuGszorVkcYZ6omy465ur51KqjBAXcPXUmW0LTrScYhhZXPkWOfa%2FJB7L7iO41lEDJmxsjtx%2B%2BFteDaubqVlsigeXR7Pb1k2e0imKq2rZ4JFkPB8lybHMXFA9GJbLg%2Fzv288npD9Xsk0incRORc6uhJ1TsRwuA6IOuZhlZ916NLQTrWRGVGL7ylJmaS%2Fp1zHVWv5I6BXcb84u210zcxmsN71w4RnX3c7lqoI0LfnQdVUNuCuud5ggYUfx6O6RehTdogysNfxNX4v2pt5MOnttMQGOqUBglmG7NZgJWSKlwPVQUXQ%2Bb1q9LHqjRPH%2Fw9hiapYkSXOpkTrLg9GCfRCp7yScOPo2gR9%2BfTvqKR5zBd37slrNroE3bo6TSW7lkJWqDj2LHuc7sYQnXIKyMNW3YNefG8Th6BdrAC%2FsXaSYwTCxukW1o76sNndqlqJj0ygZLp8tQz9IcqxDMROtxjXAqGb3woqCx76oHZCswx1IzkPvPwu8aERFU%2F0&X-Amz-Signature=ecb4c76e5d6aac23686dddd551997fdefaff435233eab58c51bfecfe91543f93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRG7SPT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPjHxnizwNCVOi7YieCiyfwJre9hiFJqMCee4CuzXbLQIgGN3dLf74ynb9Os%2FQx3L2GIkMNzHhO3TyxeHtK0XdQ2gqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvpzPnoo2ge36jlAyrcA%2FEu%2FwnvWjvPUq6zmOlyZIjwgoMBFQnUS9Js1kJ7oub6Na6s5jLWfyyTd%2BcrXpm6X14IMVjrqU%2FdJvsxRei%2Baw8VgJWwJIpflQcw3fbot68p1ueXZHdGaHP1Qovsdm4PMrsJPYiun9jWeOwx89YRuHVvpyaVBSd60W9tb2yMQYsMG8nVyoAm18w3QM0BhSnrPwzQSslpsvLzXeanm3pBF%2BJpV3YnlW4X6rOxwK%2BS%2BKYbukUK2G8mv3iZyShcgyLwBpb8K307x%2B%2F4IMNF47s9RZC17eJbriVVrX46sr%2FszedJQxYSJ6YxNinIdTTNkcp5PrhkQ77ghf9XsiIjJkpeRMQOx7DXnF3LwJkEt9UFcHzgmuGszorVkcYZ6omy465ur51KqjBAXcPXUmW0LTrScYhhZXPkWOfa%2FJB7L7iO41lEDJmxsjtx%2B%2BFteDaubqVlsigeXR7Pb1k2e0imKq2rZ4JFkPB8lybHMXFA9GJbLg%2Fzv288npD9Xsk0incRORc6uhJ1TsRwuA6IOuZhlZ916NLQTrWRGVGL7ylJmaS%2Fp1zHVWv5I6BXcb84u210zcxmsN71w4RnX3c7lqoI0LfnQdVUNuCuud5ggYUfx6O6RehTdogysNfxNX4v2pt5MOnttMQGOqUBglmG7NZgJWSKlwPVQUXQ%2Bb1q9LHqjRPH%2Fw9hiapYkSXOpkTrLg9GCfRCp7yScOPo2gR9%2BfTvqKR5zBd37slrNroE3bo6TSW7lkJWqDj2LHuc7sYQnXIKyMNW3YNefG8Th6BdrAC%2FsXaSYwTCxukW1o76sNndqlqJj0ygZLp8tQz9IcqxDMROtxjXAqGb3woqCx76oHZCswx1IzkPvPwu8aERFU%2F0&X-Amz-Signature=a353ac46acb3f537e63bebcc90b6618677d188cb547a8d87886d26f651b7919e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRG7SPT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPjHxnizwNCVOi7YieCiyfwJre9hiFJqMCee4CuzXbLQIgGN3dLf74ynb9Os%2FQx3L2GIkMNzHhO3TyxeHtK0XdQ2gqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvpzPnoo2ge36jlAyrcA%2FEu%2FwnvWjvPUq6zmOlyZIjwgoMBFQnUS9Js1kJ7oub6Na6s5jLWfyyTd%2BcrXpm6X14IMVjrqU%2FdJvsxRei%2Baw8VgJWwJIpflQcw3fbot68p1ueXZHdGaHP1Qovsdm4PMrsJPYiun9jWeOwx89YRuHVvpyaVBSd60W9tb2yMQYsMG8nVyoAm18w3QM0BhSnrPwzQSslpsvLzXeanm3pBF%2BJpV3YnlW4X6rOxwK%2BS%2BKYbukUK2G8mv3iZyShcgyLwBpb8K307x%2B%2F4IMNF47s9RZC17eJbriVVrX46sr%2FszedJQxYSJ6YxNinIdTTNkcp5PrhkQ77ghf9XsiIjJkpeRMQOx7DXnF3LwJkEt9UFcHzgmuGszorVkcYZ6omy465ur51KqjBAXcPXUmW0LTrScYhhZXPkWOfa%2FJB7L7iO41lEDJmxsjtx%2B%2BFteDaubqVlsigeXR7Pb1k2e0imKq2rZ4JFkPB8lybHMXFA9GJbLg%2Fzv288npD9Xsk0incRORc6uhJ1TsRwuA6IOuZhlZ916NLQTrWRGVGL7ylJmaS%2Fp1zHVWv5I6BXcb84u210zcxmsN71w4RnX3c7lqoI0LfnQdVUNuCuud5ggYUfx6O6RehTdogysNfxNX4v2pt5MOnttMQGOqUBglmG7NZgJWSKlwPVQUXQ%2Bb1q9LHqjRPH%2Fw9hiapYkSXOpkTrLg9GCfRCp7yScOPo2gR9%2BfTvqKR5zBd37slrNroE3bo6TSW7lkJWqDj2LHuc7sYQnXIKyMNW3YNefG8Th6BdrAC%2FsXaSYwTCxukW1o76sNndqlqJj0ygZLp8tQz9IcqxDMROtxjXAqGb3woqCx76oHZCswx1IzkPvPwu8aERFU%2F0&X-Amz-Signature=4667325d5301fe40f10d80295b397f178c41a8cb149b162ed36857cdc8361ede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRG7SPT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPjHxnizwNCVOi7YieCiyfwJre9hiFJqMCee4CuzXbLQIgGN3dLf74ynb9Os%2FQx3L2GIkMNzHhO3TyxeHtK0XdQ2gqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvpzPnoo2ge36jlAyrcA%2FEu%2FwnvWjvPUq6zmOlyZIjwgoMBFQnUS9Js1kJ7oub6Na6s5jLWfyyTd%2BcrXpm6X14IMVjrqU%2FdJvsxRei%2Baw8VgJWwJIpflQcw3fbot68p1ueXZHdGaHP1Qovsdm4PMrsJPYiun9jWeOwx89YRuHVvpyaVBSd60W9tb2yMQYsMG8nVyoAm18w3QM0BhSnrPwzQSslpsvLzXeanm3pBF%2BJpV3YnlW4X6rOxwK%2BS%2BKYbukUK2G8mv3iZyShcgyLwBpb8K307x%2B%2F4IMNF47s9RZC17eJbriVVrX46sr%2FszedJQxYSJ6YxNinIdTTNkcp5PrhkQ77ghf9XsiIjJkpeRMQOx7DXnF3LwJkEt9UFcHzgmuGszorVkcYZ6omy465ur51KqjBAXcPXUmW0LTrScYhhZXPkWOfa%2FJB7L7iO41lEDJmxsjtx%2B%2BFteDaubqVlsigeXR7Pb1k2e0imKq2rZ4JFkPB8lybHMXFA9GJbLg%2Fzv288npD9Xsk0incRORc6uhJ1TsRwuA6IOuZhlZ916NLQTrWRGVGL7ylJmaS%2Fp1zHVWv5I6BXcb84u210zcxmsN71w4RnX3c7lqoI0LfnQdVUNuCuud5ggYUfx6O6RehTdogysNfxNX4v2pt5MOnttMQGOqUBglmG7NZgJWSKlwPVQUXQ%2Bb1q9LHqjRPH%2Fw9hiapYkSXOpkTrLg9GCfRCp7yScOPo2gR9%2BfTvqKR5zBd37slrNroE3bo6TSW7lkJWqDj2LHuc7sYQnXIKyMNW3YNefG8Th6BdrAC%2FsXaSYwTCxukW1o76sNndqlqJj0ygZLp8tQz9IcqxDMROtxjXAqGb3woqCx76oHZCswx1IzkPvPwu8aERFU%2F0&X-Amz-Signature=4e63388f615362c80f54fe01177b7c490374374d48116e5e9e955c9d0ec4fc3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRG7SPT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPjHxnizwNCVOi7YieCiyfwJre9hiFJqMCee4CuzXbLQIgGN3dLf74ynb9Os%2FQx3L2GIkMNzHhO3TyxeHtK0XdQ2gqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvpzPnoo2ge36jlAyrcA%2FEu%2FwnvWjvPUq6zmOlyZIjwgoMBFQnUS9Js1kJ7oub6Na6s5jLWfyyTd%2BcrXpm6X14IMVjrqU%2FdJvsxRei%2Baw8VgJWwJIpflQcw3fbot68p1ueXZHdGaHP1Qovsdm4PMrsJPYiun9jWeOwx89YRuHVvpyaVBSd60W9tb2yMQYsMG8nVyoAm18w3QM0BhSnrPwzQSslpsvLzXeanm3pBF%2BJpV3YnlW4X6rOxwK%2BS%2BKYbukUK2G8mv3iZyShcgyLwBpb8K307x%2B%2F4IMNF47s9RZC17eJbriVVrX46sr%2FszedJQxYSJ6YxNinIdTTNkcp5PrhkQ77ghf9XsiIjJkpeRMQOx7DXnF3LwJkEt9UFcHzgmuGszorVkcYZ6omy465ur51KqjBAXcPXUmW0LTrScYhhZXPkWOfa%2FJB7L7iO41lEDJmxsjtx%2B%2BFteDaubqVlsigeXR7Pb1k2e0imKq2rZ4JFkPB8lybHMXFA9GJbLg%2Fzv288npD9Xsk0incRORc6uhJ1TsRwuA6IOuZhlZ916NLQTrWRGVGL7ylJmaS%2Fp1zHVWv5I6BXcb84u210zcxmsN71w4RnX3c7lqoI0LfnQdVUNuCuud5ggYUfx6O6RehTdogysNfxNX4v2pt5MOnttMQGOqUBglmG7NZgJWSKlwPVQUXQ%2Bb1q9LHqjRPH%2Fw9hiapYkSXOpkTrLg9GCfRCp7yScOPo2gR9%2BfTvqKR5zBd37slrNroE3bo6TSW7lkJWqDj2LHuc7sYQnXIKyMNW3YNefG8Th6BdrAC%2FsXaSYwTCxukW1o76sNndqlqJj0ygZLp8tQz9IcqxDMROtxjXAqGb3woqCx76oHZCswx1IzkPvPwu8aERFU%2F0&X-Amz-Signature=83292621abc7ea29c1d7f6478fa9f6a3e1125570f25c0e7daef0eb108e78d008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRG7SPT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPjHxnizwNCVOi7YieCiyfwJre9hiFJqMCee4CuzXbLQIgGN3dLf74ynb9Os%2FQx3L2GIkMNzHhO3TyxeHtK0XdQ2gqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvpzPnoo2ge36jlAyrcA%2FEu%2FwnvWjvPUq6zmOlyZIjwgoMBFQnUS9Js1kJ7oub6Na6s5jLWfyyTd%2BcrXpm6X14IMVjrqU%2FdJvsxRei%2Baw8VgJWwJIpflQcw3fbot68p1ueXZHdGaHP1Qovsdm4PMrsJPYiun9jWeOwx89YRuHVvpyaVBSd60W9tb2yMQYsMG8nVyoAm18w3QM0BhSnrPwzQSslpsvLzXeanm3pBF%2BJpV3YnlW4X6rOxwK%2BS%2BKYbukUK2G8mv3iZyShcgyLwBpb8K307x%2B%2F4IMNF47s9RZC17eJbriVVrX46sr%2FszedJQxYSJ6YxNinIdTTNkcp5PrhkQ77ghf9XsiIjJkpeRMQOx7DXnF3LwJkEt9UFcHzgmuGszorVkcYZ6omy465ur51KqjBAXcPXUmW0LTrScYhhZXPkWOfa%2FJB7L7iO41lEDJmxsjtx%2B%2BFteDaubqVlsigeXR7Pb1k2e0imKq2rZ4JFkPB8lybHMXFA9GJbLg%2Fzv288npD9Xsk0incRORc6uhJ1TsRwuA6IOuZhlZ916NLQTrWRGVGL7ylJmaS%2Fp1zHVWv5I6BXcb84u210zcxmsN71w4RnX3c7lqoI0LfnQdVUNuCuud5ggYUfx6O6RehTdogysNfxNX4v2pt5MOnttMQGOqUBglmG7NZgJWSKlwPVQUXQ%2Bb1q9LHqjRPH%2Fw9hiapYkSXOpkTrLg9GCfRCp7yScOPo2gR9%2BfTvqKR5zBd37slrNroE3bo6TSW7lkJWqDj2LHuc7sYQnXIKyMNW3YNefG8Th6BdrAC%2FsXaSYwTCxukW1o76sNndqlqJj0ygZLp8tQz9IcqxDMROtxjXAqGb3woqCx76oHZCswx1IzkPvPwu8aERFU%2F0&X-Amz-Signature=222f7dfacf2cb36b23d9ff1dae45fbaa291ca98b45c62afdec49747b77981bb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRG7SPT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPjHxnizwNCVOi7YieCiyfwJre9hiFJqMCee4CuzXbLQIgGN3dLf74ynb9Os%2FQx3L2GIkMNzHhO3TyxeHtK0XdQ2gqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvpzPnoo2ge36jlAyrcA%2FEu%2FwnvWjvPUq6zmOlyZIjwgoMBFQnUS9Js1kJ7oub6Na6s5jLWfyyTd%2BcrXpm6X14IMVjrqU%2FdJvsxRei%2Baw8VgJWwJIpflQcw3fbot68p1ueXZHdGaHP1Qovsdm4PMrsJPYiun9jWeOwx89YRuHVvpyaVBSd60W9tb2yMQYsMG8nVyoAm18w3QM0BhSnrPwzQSslpsvLzXeanm3pBF%2BJpV3YnlW4X6rOxwK%2BS%2BKYbukUK2G8mv3iZyShcgyLwBpb8K307x%2B%2F4IMNF47s9RZC17eJbriVVrX46sr%2FszedJQxYSJ6YxNinIdTTNkcp5PrhkQ77ghf9XsiIjJkpeRMQOx7DXnF3LwJkEt9UFcHzgmuGszorVkcYZ6omy465ur51KqjBAXcPXUmW0LTrScYhhZXPkWOfa%2FJB7L7iO41lEDJmxsjtx%2B%2BFteDaubqVlsigeXR7Pb1k2e0imKq2rZ4JFkPB8lybHMXFA9GJbLg%2Fzv288npD9Xsk0incRORc6uhJ1TsRwuA6IOuZhlZ916NLQTrWRGVGL7ylJmaS%2Fp1zHVWv5I6BXcb84u210zcxmsN71w4RnX3c7lqoI0LfnQdVUNuCuud5ggYUfx6O6RehTdogysNfxNX4v2pt5MOnttMQGOqUBglmG7NZgJWSKlwPVQUXQ%2Bb1q9LHqjRPH%2Fw9hiapYkSXOpkTrLg9GCfRCp7yScOPo2gR9%2BfTvqKR5zBd37slrNroE3bo6TSW7lkJWqDj2LHuc7sYQnXIKyMNW3YNefG8Th6BdrAC%2FsXaSYwTCxukW1o76sNndqlqJj0ygZLp8tQz9IcqxDMROtxjXAqGb3woqCx76oHZCswx1IzkPvPwu8aERFU%2F0&X-Amz-Signature=bae0109b42f42b5822fd9a86dd9191c6388baafcc790f5c916484f8fa3f1558c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRG7SPT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPjHxnizwNCVOi7YieCiyfwJre9hiFJqMCee4CuzXbLQIgGN3dLf74ynb9Os%2FQx3L2GIkMNzHhO3TyxeHtK0XdQ2gqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvpzPnoo2ge36jlAyrcA%2FEu%2FwnvWjvPUq6zmOlyZIjwgoMBFQnUS9Js1kJ7oub6Na6s5jLWfyyTd%2BcrXpm6X14IMVjrqU%2FdJvsxRei%2Baw8VgJWwJIpflQcw3fbot68p1ueXZHdGaHP1Qovsdm4PMrsJPYiun9jWeOwx89YRuHVvpyaVBSd60W9tb2yMQYsMG8nVyoAm18w3QM0BhSnrPwzQSslpsvLzXeanm3pBF%2BJpV3YnlW4X6rOxwK%2BS%2BKYbukUK2G8mv3iZyShcgyLwBpb8K307x%2B%2F4IMNF47s9RZC17eJbriVVrX46sr%2FszedJQxYSJ6YxNinIdTTNkcp5PrhkQ77ghf9XsiIjJkpeRMQOx7DXnF3LwJkEt9UFcHzgmuGszorVkcYZ6omy465ur51KqjBAXcPXUmW0LTrScYhhZXPkWOfa%2FJB7L7iO41lEDJmxsjtx%2B%2BFteDaubqVlsigeXR7Pb1k2e0imKq2rZ4JFkPB8lybHMXFA9GJbLg%2Fzv288npD9Xsk0incRORc6uhJ1TsRwuA6IOuZhlZ916NLQTrWRGVGL7ylJmaS%2Fp1zHVWv5I6BXcb84u210zcxmsN71w4RnX3c7lqoI0LfnQdVUNuCuud5ggYUfx6O6RehTdogysNfxNX4v2pt5MOnttMQGOqUBglmG7NZgJWSKlwPVQUXQ%2Bb1q9LHqjRPH%2Fw9hiapYkSXOpkTrLg9GCfRCp7yScOPo2gR9%2BfTvqKR5zBd37slrNroE3bo6TSW7lkJWqDj2LHuc7sYQnXIKyMNW3YNefG8Th6BdrAC%2FsXaSYwTCxukW1o76sNndqlqJj0ygZLp8tQz9IcqxDMROtxjXAqGb3woqCx76oHZCswx1IzkPvPwu8aERFU%2F0&X-Amz-Signature=357893bcd21db0555b83ba5cb6e578144251e7d9a363d48215ea84321ab113fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

TODO: preview of robot we r going make

urdf can get complex to look at so I will be putting a “_scratch”_ like equivalent next to each example I put down.

To start must all urdf have these tags:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
**<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">



</robot>**
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7RIUPA4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWgyvi6vQ4ZDB%2F%2F8dPHJ1PvRwtf3q8c6ufCg7BD6FBuwIgGs3rxVhOLcwXjnfUEqnOpMpVmLvKCcSDSWfTsrFdWGIqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6LjErRMNGVNil5VCrcA89zSUnUpGYekx6Jl6x%2BIH0QpjjRZrZqxljl%2BrivDa4FmJHZSCYT4eVFo4ZvFQyq1kZ%2Fe44HXhEOAOoEg9AtOkQdqMFJT0230czozLt2nfT4Wh6b4irtwqopZ9Yw7ExUOA7n68jJXt9vaKvVzVyRHPAPyjYCM%2BJF3%2B2kVSJJvHBsgL57ARKEpHcg9mbalWTRVLc%2FU4Ed2mbvJfTUFpossPJ486CgQeOz7Se4ch4cxnWlNLBD%2B4yt6lipOc8aZ6pffQwiPzVrPmHXwgqC1GoJssD4phprrKNOZTdAao43mV9UHV9DOiF5mpkhFliv5Ps8laMf7dRkvN6NQxJZiH%2FCSupUiXSLDa8xyKyjLAKY%2FECgJRJjg8FGvKIoyUOi7cHPI83EYLcxJoYH9WtqGqRleuRmGWcHkhL3yAUpbbLGWm4neX0IbrKFVrUgPOw7ecoftCcgAMxHMB%2Fv5VzEK2mSXhf4uyRVR0kQ9QqRuQiRj7iuPeWl38Oo%2BWvngY2NvObczBBCrKxMyaJV8QU65JKHXlccy6CReh2zjOV7om438Pfb8zybDYXCYiNfe8WLIA7UbNnNIBWMvUmjK66RLtMIDG9R%2Fup%2FsxCJbRiNlW8iepITYegwuwr3jbK2ioqmMNXttMQGOqUB6V9%2FL3vVVbJ7sIMEKq9OTN9JVbDSlANRfqw16B%2Bj7cSky9jxJa9mox4ACfAQ8HLuy31cUKJIQNpZ7u%2F%2BNNQicJP50sXL6jJZG5Cu2AN6P6KvWyUt0qg5UuP93jJA4P%2B6dsj1cU5FHpRzVIluALAXhzy2%2Fc0eIsANwthYGXbCHUYmsbCYsVf8UgcObJlMPgDz1XazWuHY4XrKUvdllnJq7U6vZ1jx&X-Amz-Signature=653fa7889f2801ab779eff4be670bebf58fa046e3e8fa99b4ff23c68289b0ae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

All of our code will go in between the `<robot>` tags 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K243NCT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJShnacSAaO44WAKiT4RWkUb9J%2FehZ15FhSOgSdEn%2FWAIgV9LZ8jJx4jrz%2BK9xIQL86WvfVSVCGJCWCbp8AMTNYwwqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMXCaTMVLf4xOSfKircAxGKKVPvooEa4ELVLJVInrPrlDSqhNJnueB4EGgTXNWg4ROOTD%2BcFoPQI6QslywZg%2BJcJqoi3w%2Fasbkjq%2BWRC0RJwj2FlcoDeIXaDdT9ikHkXPE%2FarP9js16sE024fjAhWJNgluI7TdqF9khe5amazwM5NZZjsbqHy91M55GmTKH7Y3uHmVuqlVKoIUq2OtXuIvnRC3th9%2BVYaBMAVa4jGNMVO8ESEOg64y9pTTVhzpwebOFTcz2e5G5pWpqFQBUJGu7GiqfhYceasFX6w%2BdzxDDlqhcSPr%2FGIoA9oac%2F%2FVGqbuYRf2ofg3HKhizm8g0aRThVhLfYM1ctScx5EHGegLJ%2BxDmQ%2F5tu2uMClUlaccZxcHlxh3S1ug16qq4qM%2FkBJ4Wy%2B44d0Ri%2FS00Uirtd7P2lYTrkJGXK7e63XGAzq1V6nC9A03444WBWEr4yyUg9hECFLsDJUrLFam6YgPaBk6xW4y5pDOFw4DSOC1%2FvCsDeq07J%2BtG7IgNEENfvS%2FGLQYn3P2%2FVQP3dhBvd7GXuOkCEOkuFIAFi9oyPMdP31hVEpeG9pdYuzDGjiiu0b479EVR%2BGoenltmaz3ZVER9%2FURz4V74umY3tw1k%2FKRjHRmdv5%2FuE2AeBgoKN9gTMPHttMQGOqUB%2BjEfytoZ6M0Z2yJK1aBRWeGwncsXQolxFbtkIH4IDtIcVsGfXIniTDXk1UomIgi9GkjyZO7bafWOq%2FXirun5Q1V%2FjNsKpe3PrctvV58ulY4fRDjBmdzZi6tMpPo0CxT%2BzJt%2BdQsDZ5JWN0rAyUwvtSUE1c7pvYgjc5b6UT1kBTJF%2BLX%2FkaIe%2F0Oad%2BvIBv86rJmKiNRaMJMnUL71GwNz2fcg0HjO&X-Amz-Signature=1289f13d8113015c4f052085ae65da3482046ef368dbe8bd25ac451c5a397ef7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

You can think of these as **variables** but in the xacro language

<details>
      <summary>What do the variables represent?</summary>
      TODO:
  </details>

Lets now make a link for the body of the robot

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYMUEGRD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFx6rFw1nZxI%2BBZ%2BBJtfBpsEym2zOsVYnkFbZAz%2BdPeTAiEA0A91AmvJlmxyp7A40I6YiBrnTYDgcS0uM0dJ%2BN6BGXYqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpN1fNBZQ5Jd3Ro5SrcA73lXYYaVx6VfoYCV9MOhFbQMGzh%2F1U2cqHjctxCLEN6g9kNIJ0vGPd8OeJXXejScp0WGa%2FBVjg%2FmZ9NGA3bgelp7wJ276OJu1JsBwBUVnumr%2BYjMe24CgJS3Lj5KVwT9oFJcqT5D76d%2FL090I1iXmcc3mV0LOOsh1HVJlNgcUQjFnhl%2FplduXFzHQF3qlSHAj09mfNVg2RsGVOFf7HMmr29i%2BQ01sG%2FLLwN7cUcHwzyU85845QN7QuGNxgX9lrWXBPgm9Bno2sN%2FBFBgOGvEyCMV0GuUUkkcdtcj%2FLlZo%2FpwuIj5%2F8wKxhC3VVd9SuAVV0kuPmM1NkNTzUnbRm%2BaXSf5Kg4DdU%2BkO%2FonLHSmYqZRX%2BqgqaMQmAe7Wi2uht4EHhyK5qCUC88MSRulcBkekWj%2BY2h1uE%2BOv6a8RPxRq7nvE8LhEwSdwuKZ0t%2FGOjF1ydjFL3xk38aPvH8N0X1V3bTEVwBZRbr4dkBlnt6wXI8CZ45dS4cQ096RH7MzOWJyV0%2F4o1BTi6NQvGaJH1Ur1%2Bke5VK6scYAK3bP3zErx8bp%2FVW9YTQT%2FzBypQ1GNehV%2B68Xlsp6TBk5oaHroOJ%2FVEhNqRDGsW5ulnWty4%2Bshv%2Bld1lO6msg5asmUEcMPTttMQGOqUBVTrPVsVh2LBdMbR5PyVS2RW4%2FJqP50IuCpzZnzHVfF9V9fbqoDnGc1Ua7h5lzOwdQo0VCrc1%2FrmXs0poIG9%2F%2FU7Hp41m3Xo06g9U2fBQtHLOG21CRJnWzDHR4%2FWaLpRCvw0KSL3OkLFj586kS7o1rtQ02JJNYo%2FiXs8m%2FkYLEuFHafXBRr%2B6q9P3GV3GmIrlRe2CnHVGIRYifbFnvqhJgxVmXJ9b&X-Amz-Signature=3015dc20635441984e037ecde76dd918677603ecfd0f9a887faa28896764885a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRG7SPT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPjHxnizwNCVOi7YieCiyfwJre9hiFJqMCee4CuzXbLQIgGN3dLf74ynb9Os%2FQx3L2GIkMNzHhO3TyxeHtK0XdQ2gqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvpzPnoo2ge36jlAyrcA%2FEu%2FwnvWjvPUq6zmOlyZIjwgoMBFQnUS9Js1kJ7oub6Na6s5jLWfyyTd%2BcrXpm6X14IMVjrqU%2FdJvsxRei%2Baw8VgJWwJIpflQcw3fbot68p1ueXZHdGaHP1Qovsdm4PMrsJPYiun9jWeOwx89YRuHVvpyaVBSd60W9tb2yMQYsMG8nVyoAm18w3QM0BhSnrPwzQSslpsvLzXeanm3pBF%2BJpV3YnlW4X6rOxwK%2BS%2BKYbukUK2G8mv3iZyShcgyLwBpb8K307x%2B%2F4IMNF47s9RZC17eJbriVVrX46sr%2FszedJQxYSJ6YxNinIdTTNkcp5PrhkQ77ghf9XsiIjJkpeRMQOx7DXnF3LwJkEt9UFcHzgmuGszorVkcYZ6omy465ur51KqjBAXcPXUmW0LTrScYhhZXPkWOfa%2FJB7L7iO41lEDJmxsjtx%2B%2BFteDaubqVlsigeXR7Pb1k2e0imKq2rZ4JFkPB8lybHMXFA9GJbLg%2Fzv288npD9Xsk0incRORc6uhJ1TsRwuA6IOuZhlZ916NLQTrWRGVGL7ylJmaS%2Fp1zHVWv5I6BXcb84u210zcxmsN71w4RnX3c7lqoI0LfnQdVUNuCuud5ggYUfx6O6RehTdogysNfxNX4v2pt5MOnttMQGOqUBglmG7NZgJWSKlwPVQUXQ%2Bb1q9LHqjRPH%2Fw9hiapYkSXOpkTrLg9GCfRCp7yScOPo2gR9%2BfTvqKR5zBd37slrNroE3bo6TSW7lkJWqDj2LHuc7sYQnXIKyMNW3YNefG8Th6BdrAC%2FsXaSYwTCxukW1o76sNndqlqJj0ygZLp8tQz9IcqxDMROtxjXAqGb3woqCx76oHZCswx1IzkPvPwu8aERFU%2F0&X-Amz-Signature=e29224aaa112c4033bb77c6aa5a1f640af99e6dd5be5d0a8e6dd181a9399117f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BCXKRNV%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbHtQ9Bkap969ZEDRaQehTaHL%2BjPm8PEMuqk%2FKw%2BU7hwIgR3kfQvWft2Cz2Px3AvqfFMWYvG1kM8ElOEc5SOjYcZMqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHu330yhUmB8nz9rVircA5lPKQKWsaNJCiMNXgmSudXngmf1dqevuxlID2uyFNpwua5IfSWEeTQxFBxc9Re2FP2hBBj3kFFW8a4t%2Bv3GHU%2BXRTgnf%2Bxt%2FVLrY4sjSHf0ZJFjeBg36GPxeRBq9E0Qe02B%2FqhaM9BtvSglzoP%2FoROYMza%2B%2BA5qLmRmhPnDwDM6pFKkVs2bNUsfjMFtTQ6oNnxcTkSOC%2F07%2B3QdLgh0VrehaAkedzK7FaRGA09rXiJMdM5jLH19tkv%2FEWthZYgUwQ0IH0Bjv3XLRoVAR3iVjwW67lB5ktiL30t%2BkyXyna2Y%2Fu9yPurEDMAqpBQ2sdcJmMl%2FlyRhSz9EHQFf5%2FmGs4tkFBn8kf1iWi4K2ve2p88d5WbKwpLdbVcqVouN30EXqTlVBMajB7%2FpBBsfI5LH%2B6ky34mH2Z5n%2Bh46te%2BaKIXr%2Btgd5GMO17qaTHGO%2BzBTvAxHFyC5JcAr6VM22DEcjQSqohvV3nZfP6t6J9zGb%2F365nZF3%2Bd%2BXv27bovNZW5e%2Fuaknkv0rIm%2FNInXo%2BmV4Z5gt4%2B8iXnB57nPPLq1ENfAvNKYCBwfRGXaQ3yC%2BFOpqwLtXhqw8F07pTyoijn%2BIhFJcIfFK4MdeP1h%2BMnoZjNjuapuxKm2Si%2Flqn5IMPXttMQGOqUBG6d%2By6aJiD0TtKUKL7UtzT2%2Bwhdw%2B%2Bu58mwnHaQUFhTqa1DCsyqfd2vlVH%2FvDsxDcQH3r6e6dXO7IlP6Njollkyljqv7okxhUTaR3TdtlUYPumyISQU1Qdg78%2FZlkwwH43BTUvRFUTbGjR40%2BkTOHy8WXK5gh6plAo3PeZZtxQsEVTWqJnf1EbY2FyKvOsjUFtKcJqIA2ATpl46oAEpNkvunH2Qq&X-Amz-Signature=1cd186cb518cec41e820e2c3fb80297eb4954fd3dca20b1997a06c5b8762fa5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRG7SPT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPjHxnizwNCVOi7YieCiyfwJre9hiFJqMCee4CuzXbLQIgGN3dLf74ynb9Os%2FQx3L2GIkMNzHhO3TyxeHtK0XdQ2gqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvpzPnoo2ge36jlAyrcA%2FEu%2FwnvWjvPUq6zmOlyZIjwgoMBFQnUS9Js1kJ7oub6Na6s5jLWfyyTd%2BcrXpm6X14IMVjrqU%2FdJvsxRei%2Baw8VgJWwJIpflQcw3fbot68p1ueXZHdGaHP1Qovsdm4PMrsJPYiun9jWeOwx89YRuHVvpyaVBSd60W9tb2yMQYsMG8nVyoAm18w3QM0BhSnrPwzQSslpsvLzXeanm3pBF%2BJpV3YnlW4X6rOxwK%2BS%2BKYbukUK2G8mv3iZyShcgyLwBpb8K307x%2B%2F4IMNF47s9RZC17eJbriVVrX46sr%2FszedJQxYSJ6YxNinIdTTNkcp5PrhkQ77ghf9XsiIjJkpeRMQOx7DXnF3LwJkEt9UFcHzgmuGszorVkcYZ6omy465ur51KqjBAXcPXUmW0LTrScYhhZXPkWOfa%2FJB7L7iO41lEDJmxsjtx%2B%2BFteDaubqVlsigeXR7Pb1k2e0imKq2rZ4JFkPB8lybHMXFA9GJbLg%2Fzv288npD9Xsk0incRORc6uhJ1TsRwuA6IOuZhlZ916NLQTrWRGVGL7ylJmaS%2Fp1zHVWv5I6BXcb84u210zcxmsN71w4RnX3c7lqoI0LfnQdVUNuCuud5ggYUfx6O6RehTdogysNfxNX4v2pt5MOnttMQGOqUBglmG7NZgJWSKlwPVQUXQ%2Bb1q9LHqjRPH%2Fw9hiapYkSXOpkTrLg9GCfRCp7yScOPo2gR9%2BfTvqKR5zBd37slrNroE3bo6TSW7lkJWqDj2LHuc7sYQnXIKyMNW3YNefG8Th6BdrAC%2FsXaSYwTCxukW1o76sNndqlqJj0ygZLp8tQz9IcqxDMROtxjXAqGb3woqCx76oHZCswx1IzkPvPwu8aERFU%2F0&X-Amz-Signature=a130c4916d9ff3eab72e2607909f97e536d30e5b3168908682aa23fb4098a434&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2EKUQA6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSX7TZPVyzq6HLfjAsy9zqWknAd8DCxigcR2voMug5mAiEA29aYMMmjqMwstS%2FJfzC66n5d03fvMMOjvnf5IDr2USoqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAXszDNtuAS8NSlKircA8SoB4WB3movPJIEpTJyFDD%2Fjbfm3WAoxeIO3e5elgiKDqjOKBl%2Br2pOozkuGAl3kjgK3FTMXdcuJU5ybZQyi7gNAA9uX4dhhlAhHToSHrWhlzNUVIPKGT34GcdmpwRVyCad4DP7Zsy6esoBUhbpzUPXGEpv0tjD5PWEIrfrmNDPMPaUmCw38lCu%2F95sugWmLJEAfcWraDUsvi1RmZ%2B0Dh9fEII11DX5zDKFsmH3O67fPoxUPQqHgsgVWwkZUqfdmeycXsodsX7TAjrzgZ9z7Wp9RsW5SsbA4u9%2FOdSXePz1scgudS9qdC422vewA9X2k7MLn1uzMZN%2Fx2BH6e2jjDysbGBLeM7STZAtEs5qDMJnzU74LY%2FsXvM8c8BCAukfOyWsYHBuyaGtcePVnrfX6Z0mGXmnDIZHASNsxhE%2Fg%2FCgQU0xoraRmpJId6oYxiWCNPk0Ndpevt7vSy6HPuHwW869IyxAgRPVv0%2BjHpoRpr%2F%2BRr%2FFIKwzi8hmXymOi8pRWaMac27a3MKBnu%2FNflg6i7YPkDIyydOHkx7ClfrO%2FsP1QIfUqHRe%2B14omGt%2Faq2pKjwUpBtz48w1TrLE2PuAGe8g8g%2BTFFes5sC3bbmZs4NRNYV%2BnwtiESEMB0k5MNPttMQGOqUBul5n%2FAxc4wqN2wHClM9a%2F%2FRHs6H9gPQaOiurwNv0ChcvH%2BofsZEnwU7WRxUUrhEK2%2FPw8zdw4TAw13dkxj13HvuSw%2BCJFA2TMrd9SkqEjzsI9XedJQWe7q130aQwssje8iTSfsyS9Jjyre65p5r4gIg79m2BiedZ1ymB6oxdYLZQ68k6Vd9ws%2FDAuaF01mmWWchHiEUNttwiTzI6w4tC5Z5vded0&X-Amz-Signature=e0c1f890cb71ffd8d61cf974fb2e219f17de49ceb49645537109b0fab3bc5d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRG7SPT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPjHxnizwNCVOi7YieCiyfwJre9hiFJqMCee4CuzXbLQIgGN3dLf74ynb9Os%2FQx3L2GIkMNzHhO3TyxeHtK0XdQ2gqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvpzPnoo2ge36jlAyrcA%2FEu%2FwnvWjvPUq6zmOlyZIjwgoMBFQnUS9Js1kJ7oub6Na6s5jLWfyyTd%2BcrXpm6X14IMVjrqU%2FdJvsxRei%2Baw8VgJWwJIpflQcw3fbot68p1ueXZHdGaHP1Qovsdm4PMrsJPYiun9jWeOwx89YRuHVvpyaVBSd60W9tb2yMQYsMG8nVyoAm18w3QM0BhSnrPwzQSslpsvLzXeanm3pBF%2BJpV3YnlW4X6rOxwK%2BS%2BKYbukUK2G8mv3iZyShcgyLwBpb8K307x%2B%2F4IMNF47s9RZC17eJbriVVrX46sr%2FszedJQxYSJ6YxNinIdTTNkcp5PrhkQ77ghf9XsiIjJkpeRMQOx7DXnF3LwJkEt9UFcHzgmuGszorVkcYZ6omy465ur51KqjBAXcPXUmW0LTrScYhhZXPkWOfa%2FJB7L7iO41lEDJmxsjtx%2B%2BFteDaubqVlsigeXR7Pb1k2e0imKq2rZ4JFkPB8lybHMXFA9GJbLg%2Fzv288npD9Xsk0incRORc6uhJ1TsRwuA6IOuZhlZ916NLQTrWRGVGL7ylJmaS%2Fp1zHVWv5I6BXcb84u210zcxmsN71w4RnX3c7lqoI0LfnQdVUNuCuud5ggYUfx6O6RehTdogysNfxNX4v2pt5MOnttMQGOqUBglmG7NZgJWSKlwPVQUXQ%2Bb1q9LHqjRPH%2Fw9hiapYkSXOpkTrLg9GCfRCp7yScOPo2gR9%2BfTvqKR5zBd37slrNroE3bo6TSW7lkJWqDj2LHuc7sYQnXIKyMNW3YNefG8Th6BdrAC%2FsXaSYwTCxukW1o76sNndqlqJj0ygZLp8tQz9IcqxDMROtxjXAqGb3woqCx76oHZCswx1IzkPvPwu8aERFU%2F0&X-Amz-Signature=ace5943ba4ef3e42643a482d38c1d791cdafd140a0432b31fa74893cca564f5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BURMSSD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3mXg8Ku5aETxSggpxt5rx9AzjB5oAwHDjtMJxfxLsTAiA6fCAi9idQn79DjVQqfuxLY9MhYDubsbZJ3SDGncCXWCqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIoaP0xEm1Fu6Rt8pKtwD7SqmpzLSy%2FeBtj60S0ueeRnPZEBhPtaTpjl71s5sXCf9KXMykrpO3Rk9QXBf0h3R1nDCOBCdeeGw%2BJ7G5wwPzGUhi4dgpO5oL1j80X0swrjbT0evqkDwYJL0ghUjyG0MUNlMigPX%2FjXUYLcPaxKRV83j9mNEwhltDaEgg204Fs0%2FhKwKV6DgFFuzzEUMKEZK6iRnwUUxiPxzJO4UxhO6nJBJHyzfTFKwrReZZw3mdXqdGynqWrVrcOI9E2pjOUcTE4BihhoAm74sfmTQBaaoaZRTX9YwqRYtHiHR4cqYAe1OWgKyhqz0QwuvHtUBhm7j6WOyr6%2BbuILDjPGL0%2BqdGEQqsbouGOjyX2QTQ0Y0R42FUJpnHOz4uCy5RRDwTsdGRmCyHRWNglPAjSsoPBrZZbVuCBvMsvYythALX0IQMeWeU5ZNyE3SqHK9jtCjUvZZM9Pl4gYobu1S2ctV4qwRQozcXfHOwLPEBZFQ2cqCJhLHywVEp9BD4NVCVjOmBb0Ku0eVGTyS2lj4iNLE0kBoeHfWmJqKjMQZHRCSmoAyJB9%2FeXkk9lJThsQHNtPQ1xrsmmxpPK8nOTmIVrPAGDPEvGSf9EDohg2piekD%2BKkAFwAtkxzkC4HxkJvtG6EwwO20xAY6pgG5rA1vyqbukduz9j8o1556UgB%2FmVbwgIAqK4iOj6xycTeUd1ZbRH5BuqaV9RvCY3%2BwPq%2B8nFlRpffnEStmel4O8N6qH3exue1pkuEU3OMK0S%2FeP6ilHyfWz3TZOjTRhlVIu8iFIo7kB6Fj4k0rOelkD0%2BFisIuz%2Bwsc1Vvxk6LS%2BUtP0SOVrqBt1o5KJtNLHuvvfrjbhTfAmrxGlYW1J%2FriADrPsCl&X-Amz-Signature=0d738f31979ec20436a2a7c98fb528212eeac4a98dba7568fce4c153e519358a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRG7SPT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPjHxnizwNCVOi7YieCiyfwJre9hiFJqMCee4CuzXbLQIgGN3dLf74ynb9Os%2FQx3L2GIkMNzHhO3TyxeHtK0XdQ2gqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvpzPnoo2ge36jlAyrcA%2FEu%2FwnvWjvPUq6zmOlyZIjwgoMBFQnUS9Js1kJ7oub6Na6s5jLWfyyTd%2BcrXpm6X14IMVjrqU%2FdJvsxRei%2Baw8VgJWwJIpflQcw3fbot68p1ueXZHdGaHP1Qovsdm4PMrsJPYiun9jWeOwx89YRuHVvpyaVBSd60W9tb2yMQYsMG8nVyoAm18w3QM0BhSnrPwzQSslpsvLzXeanm3pBF%2BJpV3YnlW4X6rOxwK%2BS%2BKYbukUK2G8mv3iZyShcgyLwBpb8K307x%2B%2F4IMNF47s9RZC17eJbriVVrX46sr%2FszedJQxYSJ6YxNinIdTTNkcp5PrhkQ77ghf9XsiIjJkpeRMQOx7DXnF3LwJkEt9UFcHzgmuGszorVkcYZ6omy465ur51KqjBAXcPXUmW0LTrScYhhZXPkWOfa%2FJB7L7iO41lEDJmxsjtx%2B%2BFteDaubqVlsigeXR7Pb1k2e0imKq2rZ4JFkPB8lybHMXFA9GJbLg%2Fzv288npD9Xsk0incRORc6uhJ1TsRwuA6IOuZhlZ916NLQTrWRGVGL7ylJmaS%2Fp1zHVWv5I6BXcb84u210zcxmsN71w4RnX3c7lqoI0LfnQdVUNuCuud5ggYUfx6O6RehTdogysNfxNX4v2pt5MOnttMQGOqUBglmG7NZgJWSKlwPVQUXQ%2Bb1q9LHqjRPH%2Fw9hiapYkSXOpkTrLg9GCfRCp7yScOPo2gR9%2BfTvqKR5zBd37slrNroE3bo6TSW7lkJWqDj2LHuc7sYQnXIKyMNW3YNefG8Th6BdrAC%2FsXaSYwTCxukW1o76sNndqlqJj0ygZLp8tQz9IcqxDMROtxjXAqGb3woqCx76oHZCswx1IzkPvPwu8aERFU%2F0&X-Amz-Signature=ccbae0fb4d663dfe655bb49f1bf3a982b141af9d48d9b0a1cd4fbf7d7c4bbd92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XQHKZWL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T221000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2Bhsv3YMlsA1Qx04GnV1QKofD6dI4tAZJBq%2BUR%2BTnC4AiEAnw3tazbFcj8%2FzLo%2B2N7L3JQizP7%2F3bIIiyE6ej7c4pgqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMr7y61t18dis8tThSrcA%2FT59q9kjZfN1lmTuBAWELfu%2F8FZFx81Sq5dplHWmBilq5mdsQimk5mE1dM5AF9DzajHMKWmElx1YSGKSH5JpOXk0jL%2FaF4%2FYM1iw7rU4PEaENT3oEqulkehbGYIbyOP6sIo7Ke1rX%2FWGl6zbWV%2Br6b0s5RHgfMsb0riYfedxaV5j%2FhwIstZhtvSuekqMYi3f%2FXsk%2F5HlcjNf49CjpC9ZPT0oyH6SqKEJeM173joRBsKMJObO4egAWQceRHnWEUZee1Lx9OhMSKHt0dHjU%2BTEEAoepqXSU4z4cimjs48Ss4ZYKqL8Lf7ji4wLpaRME%2BdNCk9%2Bakg7sjlsVFHCg%2B8WHUanmFjjU1PqQmMHW%2B0MbuZzBWSAidMVNCE7J353g25iZHN5AKE06IEHHXSlPGHOQpHAiTdVk%2BVUZUDW4A432JaqUSImIAzf%2BWW4bRYAcdSABTO60sR4KlomCiGUqCm3Mk9A6ZUf9Qy7yCYQ4iEBNV72TVgTXeyz80e0%2Bt472fYWhp7BJeCf1sQivLDMQ5DVS1natdmryp4A3AM10zJa8S8c562362arfpDvfTv%2FjwHiReZqJ1aZiUO9Iwz13tRL4RVtxhIgabWjz9kE6LWzLxDAu5VPbEUg5Wjj%2BwPMPXttMQGOqUB8NaBLWKwJAwr%2BOTK5Am36LoTMTl1J7EqtrD4ybZpvkrUukA4MPjBJ0gCerhFYBpw%2Fgd%2BhPUZ0gSlUazIdMD1y71QJHjS%2Bo5EyKlYs%2Bj0RxO8eX6sQzvn%2B92IIhVvIVpnS3RCFxEMViUjjtN8NJbCoeKMmRfi8mN9qtIQtiBn4R1aRqKk8okZbxZgD0tTbxvze5MiGzLgLVrEuiSpNc2Cdkd1yYSC&X-Amz-Signature=a9689d9a5d1d6bc800efc6f790878726926d70f8f6ae34242eeeb4d7c8cb4fe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>
  </details>

### Adding Collision and Inertia

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRG7SPT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPjHxnizwNCVOi7YieCiyfwJre9hiFJqMCee4CuzXbLQIgGN3dLf74ynb9Os%2FQx3L2GIkMNzHhO3TyxeHtK0XdQ2gqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvpzPnoo2ge36jlAyrcA%2FEu%2FwnvWjvPUq6zmOlyZIjwgoMBFQnUS9Js1kJ7oub6Na6s5jLWfyyTd%2BcrXpm6X14IMVjrqU%2FdJvsxRei%2Baw8VgJWwJIpflQcw3fbot68p1ueXZHdGaHP1Qovsdm4PMrsJPYiun9jWeOwx89YRuHVvpyaVBSd60W9tb2yMQYsMG8nVyoAm18w3QM0BhSnrPwzQSslpsvLzXeanm3pBF%2BJpV3YnlW4X6rOxwK%2BS%2BKYbukUK2G8mv3iZyShcgyLwBpb8K307x%2B%2F4IMNF47s9RZC17eJbriVVrX46sr%2FszedJQxYSJ6YxNinIdTTNkcp5PrhkQ77ghf9XsiIjJkpeRMQOx7DXnF3LwJkEt9UFcHzgmuGszorVkcYZ6omy465ur51KqjBAXcPXUmW0LTrScYhhZXPkWOfa%2FJB7L7iO41lEDJmxsjtx%2B%2BFteDaubqVlsigeXR7Pb1k2e0imKq2rZ4JFkPB8lybHMXFA9GJbLg%2Fzv288npD9Xsk0incRORc6uhJ1TsRwuA6IOuZhlZ916NLQTrWRGVGL7ylJmaS%2Fp1zHVWv5I6BXcb84u210zcxmsN71w4RnX3c7lqoI0LfnQdVUNuCuud5ggYUfx6O6RehTdogysNfxNX4v2pt5MOnttMQGOqUBglmG7NZgJWSKlwPVQUXQ%2Bb1q9LHqjRPH%2Fw9hiapYkSXOpkTrLg9GCfRCp7yScOPo2gR9%2BfTvqKR5zBd37slrNroE3bo6TSW7lkJWqDj2LHuc7sYQnXIKyMNW3YNefG8Th6BdrAC%2FsXaSYwTCxukW1o76sNndqlqJj0ygZLp8tQz9IcqxDMROtxjXAqGb3woqCx76oHZCswx1IzkPvPwu8aERFU%2F0&X-Amz-Signature=c9a14fc0c8681f93ae2a58e5731e4473ce7ea4a08ba7c67cdf7007a89786a0aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKAWCAVI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClkB8IfYvGMK%2Fo3epH4y%2BtHWM1gc4o6WpKYiAecltofQIgW2D37h%2FsTIYuBOcERBiry5yuIilUs7l0zmTyKjhZVUQqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeIYkRZmRJNqvg8rCrcA%2FnOaKo52O38km7O5JWMDLq0jVmu71TlNIGhkks0Kz7m5e695i4%2BHBSWAI7pAUa%2FuAE3f100YDHPMz1FnLsLD%2BNlD3%2FVuP%2BQkP6fCronZa2tIFzTpM5fK6xnYE%2F1g%2BYGk59qp4gT9B%2B8xHSJaTKFukWCHwHAHPWVqajc%2FlJJ2TZfE2jD0k0e6%2Frn5rCypNokrUoWHLnciawRB9zIlacIX%2FDllXs6tAbr2vgr%2F%2FQucUHe2sjmWZjsUq6UEJTDWIjuV7Rt6fGjWXw6A8oPfQfBSG8nBMDA44Edic%2B8nj5ru5XVvCk%2F67XRbiTaoq%2BjYcNhUAgRvLx8Mvos8JJ%2FXFap%2Bvv22Y2u0%2BVA0BQE5HCnsj9X67PMKue7uUUB5diV6tfPGX2wZQXhHKe41QAN95LgLl%2BBJm%2BJHDlHggb9tF6oH95a%2FxU3D5Ro6uoiVufTHr03UsftMvzCie9Is96mH6ojDchaS7KyB91TcO93NReU%2FZNH2FJTxQkcV8f8lwFWcrH796DTWvnVQjtTqFIG3sLHT6rfmJgeCK1YDyBZwgqb6FiqUuwi71x6BrcbPP95I%2FAErss%2FZoYo9%2BMbeSneWdlooyKMZLf43N4ymfece3ZaPGEuQ6HJayrDhdna4o5cMOrttMQGOqUBtBEaD7lbRXlEqOQfoJNBeOAB3uAb0euwKERH8QM%2B6ocaqrgrv1eytRQIv%2F%2FVyEzmkI0hzZbpsvcA8y5L0qT7r0vqVShG%2FQEe4teSXWJgSX1Lo06xJmTGb%2B6OyHUaHY4wA3Kde%2FLnRIn6zvbbHNBT2Loh9WzxYK6crKPhy0dxMppujedeRSgazoiN%2BZgsJ4neZgscdMfB0gF8T64qL8IG%2B07pkiOg&X-Amz-Signature=8dc58ddaf270ecf7943fb17c37eb2008e97578d96ed064ba6b3a50a1b41b2352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKAWCAVI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClkB8IfYvGMK%2Fo3epH4y%2BtHWM1gc4o6WpKYiAecltofQIgW2D37h%2FsTIYuBOcERBiry5yuIilUs7l0zmTyKjhZVUQqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeIYkRZmRJNqvg8rCrcA%2FnOaKo52O38km7O5JWMDLq0jVmu71TlNIGhkks0Kz7m5e695i4%2BHBSWAI7pAUa%2FuAE3f100YDHPMz1FnLsLD%2BNlD3%2FVuP%2BQkP6fCronZa2tIFzTpM5fK6xnYE%2F1g%2BYGk59qp4gT9B%2B8xHSJaTKFukWCHwHAHPWVqajc%2FlJJ2TZfE2jD0k0e6%2Frn5rCypNokrUoWHLnciawRB9zIlacIX%2FDllXs6tAbr2vgr%2F%2FQucUHe2sjmWZjsUq6UEJTDWIjuV7Rt6fGjWXw6A8oPfQfBSG8nBMDA44Edic%2B8nj5ru5XVvCk%2F67XRbiTaoq%2BjYcNhUAgRvLx8Mvos8JJ%2FXFap%2Bvv22Y2u0%2BVA0BQE5HCnsj9X67PMKue7uUUB5diV6tfPGX2wZQXhHKe41QAN95LgLl%2BBJm%2BJHDlHggb9tF6oH95a%2FxU3D5Ro6uoiVufTHr03UsftMvzCie9Is96mH6ojDchaS7KyB91TcO93NReU%2FZNH2FJTxQkcV8f8lwFWcrH796DTWvnVQjtTqFIG3sLHT6rfmJgeCK1YDyBZwgqb6FiqUuwi71x6BrcbPP95I%2FAErss%2FZoYo9%2BMbeSneWdlooyKMZLf43N4ymfece3ZaPGEuQ6HJayrDhdna4o5cMOrttMQGOqUBtBEaD7lbRXlEqOQfoJNBeOAB3uAb0euwKERH8QM%2B6ocaqrgrv1eytRQIv%2F%2FVyEzmkI0hzZbpsvcA8y5L0qT7r0vqVShG%2FQEe4teSXWJgSX1Lo06xJmTGb%2B6OyHUaHY4wA3Kde%2FLnRIn6zvbbHNBT2Loh9WzxYK6crKPhy0dxMppujedeRSgazoiN%2BZgsJ4neZgscdMfB0gF8T64qL8IG%2B07pkiOg&X-Amz-Signature=1aeff557e3845b6b22331043770539823ba463771eef5c970e158b45f7acaf87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKAWCAVI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClkB8IfYvGMK%2Fo3epH4y%2BtHWM1gc4o6WpKYiAecltofQIgW2D37h%2FsTIYuBOcERBiry5yuIilUs7l0zmTyKjhZVUQqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeIYkRZmRJNqvg8rCrcA%2FnOaKo52O38km7O5JWMDLq0jVmu71TlNIGhkks0Kz7m5e695i4%2BHBSWAI7pAUa%2FuAE3f100YDHPMz1FnLsLD%2BNlD3%2FVuP%2BQkP6fCronZa2tIFzTpM5fK6xnYE%2F1g%2BYGk59qp4gT9B%2B8xHSJaTKFukWCHwHAHPWVqajc%2FlJJ2TZfE2jD0k0e6%2Frn5rCypNokrUoWHLnciawRB9zIlacIX%2FDllXs6tAbr2vgr%2F%2FQucUHe2sjmWZjsUq6UEJTDWIjuV7Rt6fGjWXw6A8oPfQfBSG8nBMDA44Edic%2B8nj5ru5XVvCk%2F67XRbiTaoq%2BjYcNhUAgRvLx8Mvos8JJ%2FXFap%2Bvv22Y2u0%2BVA0BQE5HCnsj9X67PMKue7uUUB5diV6tfPGX2wZQXhHKe41QAN95LgLl%2BBJm%2BJHDlHggb9tF6oH95a%2FxU3D5Ro6uoiVufTHr03UsftMvzCie9Is96mH6ojDchaS7KyB91TcO93NReU%2FZNH2FJTxQkcV8f8lwFWcrH796DTWvnVQjtTqFIG3sLHT6rfmJgeCK1YDyBZwgqb6FiqUuwi71x6BrcbPP95I%2FAErss%2FZoYo9%2BMbeSneWdlooyKMZLf43N4ymfece3ZaPGEuQ6HJayrDhdna4o5cMOrttMQGOqUBtBEaD7lbRXlEqOQfoJNBeOAB3uAb0euwKERH8QM%2B6ocaqrgrv1eytRQIv%2F%2FVyEzmkI0hzZbpsvcA8y5L0qT7r0vqVShG%2FQEe4teSXWJgSX1Lo06xJmTGb%2B6OyHUaHY4wA3Kde%2FLnRIn6zvbbHNBT2Loh9WzxYK6crKPhy0dxMppujedeRSgazoiN%2BZgsJ4neZgscdMfB0gF8T64qL8IG%2B07pkiOg&X-Amz-Signature=3942f0e9bae00c3ecfd581f44604be17cc10157d30a58f26493f725a3cb8d28f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKAWCAVI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClkB8IfYvGMK%2Fo3epH4y%2BtHWM1gc4o6WpKYiAecltofQIgW2D37h%2FsTIYuBOcERBiry5yuIilUs7l0zmTyKjhZVUQqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeIYkRZmRJNqvg8rCrcA%2FnOaKo52O38km7O5JWMDLq0jVmu71TlNIGhkks0Kz7m5e695i4%2BHBSWAI7pAUa%2FuAE3f100YDHPMz1FnLsLD%2BNlD3%2FVuP%2BQkP6fCronZa2tIFzTpM5fK6xnYE%2F1g%2BYGk59qp4gT9B%2B8xHSJaTKFukWCHwHAHPWVqajc%2FlJJ2TZfE2jD0k0e6%2Frn5rCypNokrUoWHLnciawRB9zIlacIX%2FDllXs6tAbr2vgr%2F%2FQucUHe2sjmWZjsUq6UEJTDWIjuV7Rt6fGjWXw6A8oPfQfBSG8nBMDA44Edic%2B8nj5ru5XVvCk%2F67XRbiTaoq%2BjYcNhUAgRvLx8Mvos8JJ%2FXFap%2Bvv22Y2u0%2BVA0BQE5HCnsj9X67PMKue7uUUB5diV6tfPGX2wZQXhHKe41QAN95LgLl%2BBJm%2BJHDlHggb9tF6oH95a%2FxU3D5Ro6uoiVufTHr03UsftMvzCie9Is96mH6ojDchaS7KyB91TcO93NReU%2FZNH2FJTxQkcV8f8lwFWcrH796DTWvnVQjtTqFIG3sLHT6rfmJgeCK1YDyBZwgqb6FiqUuwi71x6BrcbPP95I%2FAErss%2FZoYo9%2BMbeSneWdlooyKMZLf43N4ymfece3ZaPGEuQ6HJayrDhdna4o5cMOrttMQGOqUBtBEaD7lbRXlEqOQfoJNBeOAB3uAb0euwKERH8QM%2B6ocaqrgrv1eytRQIv%2F%2FVyEzmkI0hzZbpsvcA8y5L0qT7r0vqVShG%2FQEe4teSXWJgSX1Lo06xJmTGb%2B6OyHUaHY4wA3Kde%2FLnRIn6zvbbHNBT2Loh9WzxYK6crKPhy0dxMppujedeRSgazoiN%2BZgsJ4neZgscdMfB0gF8T64qL8IG%2B07pkiOg&X-Amz-Signature=50687f8527a99fc4146e0ecb9a9c18b6349a93f514b3577e55fed480b66ceb85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKAWCAVI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClkB8IfYvGMK%2Fo3epH4y%2BtHWM1gc4o6WpKYiAecltofQIgW2D37h%2FsTIYuBOcERBiry5yuIilUs7l0zmTyKjhZVUQqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeIYkRZmRJNqvg8rCrcA%2FnOaKo52O38km7O5JWMDLq0jVmu71TlNIGhkks0Kz7m5e695i4%2BHBSWAI7pAUa%2FuAE3f100YDHPMz1FnLsLD%2BNlD3%2FVuP%2BQkP6fCronZa2tIFzTpM5fK6xnYE%2F1g%2BYGk59qp4gT9B%2B8xHSJaTKFukWCHwHAHPWVqajc%2FlJJ2TZfE2jD0k0e6%2Frn5rCypNokrUoWHLnciawRB9zIlacIX%2FDllXs6tAbr2vgr%2F%2FQucUHe2sjmWZjsUq6UEJTDWIjuV7Rt6fGjWXw6A8oPfQfBSG8nBMDA44Edic%2B8nj5ru5XVvCk%2F67XRbiTaoq%2BjYcNhUAgRvLx8Mvos8JJ%2FXFap%2Bvv22Y2u0%2BVA0BQE5HCnsj9X67PMKue7uUUB5diV6tfPGX2wZQXhHKe41QAN95LgLl%2BBJm%2BJHDlHggb9tF6oH95a%2FxU3D5Ro6uoiVufTHr03UsftMvzCie9Is96mH6ojDchaS7KyB91TcO93NReU%2FZNH2FJTxQkcV8f8lwFWcrH796DTWvnVQjtTqFIG3sLHT6rfmJgeCK1YDyBZwgqb6FiqUuwi71x6BrcbPP95I%2FAErss%2FZoYo9%2BMbeSneWdlooyKMZLf43N4ymfece3ZaPGEuQ6HJayrDhdna4o5cMOrttMQGOqUBtBEaD7lbRXlEqOQfoJNBeOAB3uAb0euwKERH8QM%2B6ocaqrgrv1eytRQIv%2F%2FVyEzmkI0hzZbpsvcA8y5L0qT7r0vqVShG%2FQEe4teSXWJgSX1Lo06xJmTGb%2B6OyHUaHY4wA3Kde%2FLnRIn6zvbbHNBT2Loh9WzxYK6crKPhy0dxMppujedeRSgazoiN%2BZgsJ4neZgscdMfB0gF8T64qL8IG%2B07pkiOg&X-Amz-Signature=e5deb464482e08b1ffaf4c9d17783eccdcdb94e95b47cd9163126ee86946499f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKAWCAVI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClkB8IfYvGMK%2Fo3epH4y%2BtHWM1gc4o6WpKYiAecltofQIgW2D37h%2FsTIYuBOcERBiry5yuIilUs7l0zmTyKjhZVUQqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeIYkRZmRJNqvg8rCrcA%2FnOaKo52O38km7O5JWMDLq0jVmu71TlNIGhkks0Kz7m5e695i4%2BHBSWAI7pAUa%2FuAE3f100YDHPMz1FnLsLD%2BNlD3%2FVuP%2BQkP6fCronZa2tIFzTpM5fK6xnYE%2F1g%2BYGk59qp4gT9B%2B8xHSJaTKFukWCHwHAHPWVqajc%2FlJJ2TZfE2jD0k0e6%2Frn5rCypNokrUoWHLnciawRB9zIlacIX%2FDllXs6tAbr2vgr%2F%2FQucUHe2sjmWZjsUq6UEJTDWIjuV7Rt6fGjWXw6A8oPfQfBSG8nBMDA44Edic%2B8nj5ru5XVvCk%2F67XRbiTaoq%2BjYcNhUAgRvLx8Mvos8JJ%2FXFap%2Bvv22Y2u0%2BVA0BQE5HCnsj9X67PMKue7uUUB5diV6tfPGX2wZQXhHKe41QAN95LgLl%2BBJm%2BJHDlHggb9tF6oH95a%2FxU3D5Ro6uoiVufTHr03UsftMvzCie9Is96mH6ojDchaS7KyB91TcO93NReU%2FZNH2FJTxQkcV8f8lwFWcrH796DTWvnVQjtTqFIG3sLHT6rfmJgeCK1YDyBZwgqb6FiqUuwi71x6BrcbPP95I%2FAErss%2FZoYo9%2BMbeSneWdlooyKMZLf43N4ymfece3ZaPGEuQ6HJayrDhdna4o5cMOrttMQGOqUBtBEaD7lbRXlEqOQfoJNBeOAB3uAb0euwKERH8QM%2B6ocaqrgrv1eytRQIv%2F%2FVyEzmkI0hzZbpsvcA8y5L0qT7r0vqVShG%2FQEe4teSXWJgSX1Lo06xJmTGb%2B6OyHUaHY4wA3Kde%2FLnRIn6zvbbHNBT2Loh9WzxYK6crKPhy0dxMppujedeRSgazoiN%2BZgsJ4neZgscdMfB0gF8T64qL8IG%2B07pkiOg&X-Amz-Signature=d6ba94122dc82b08e24d5db57d3296ae918b0f5c6fdd23d6b4e3b5cfdd12bff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKAWCAVI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClkB8IfYvGMK%2Fo3epH4y%2BtHWM1gc4o6WpKYiAecltofQIgW2D37h%2FsTIYuBOcERBiry5yuIilUs7l0zmTyKjhZVUQqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeIYkRZmRJNqvg8rCrcA%2FnOaKo52O38km7O5JWMDLq0jVmu71TlNIGhkks0Kz7m5e695i4%2BHBSWAI7pAUa%2FuAE3f100YDHPMz1FnLsLD%2BNlD3%2FVuP%2BQkP6fCronZa2tIFzTpM5fK6xnYE%2F1g%2BYGk59qp4gT9B%2B8xHSJaTKFukWCHwHAHPWVqajc%2FlJJ2TZfE2jD0k0e6%2Frn5rCypNokrUoWHLnciawRB9zIlacIX%2FDllXs6tAbr2vgr%2F%2FQucUHe2sjmWZjsUq6UEJTDWIjuV7Rt6fGjWXw6A8oPfQfBSG8nBMDA44Edic%2B8nj5ru5XVvCk%2F67XRbiTaoq%2BjYcNhUAgRvLx8Mvos8JJ%2FXFap%2Bvv22Y2u0%2BVA0BQE5HCnsj9X67PMKue7uUUB5diV6tfPGX2wZQXhHKe41QAN95LgLl%2BBJm%2BJHDlHggb9tF6oH95a%2FxU3D5Ro6uoiVufTHr03UsftMvzCie9Is96mH6ojDchaS7KyB91TcO93NReU%2FZNH2FJTxQkcV8f8lwFWcrH796DTWvnVQjtTqFIG3sLHT6rfmJgeCK1YDyBZwgqb6FiqUuwi71x6BrcbPP95I%2FAErss%2FZoYo9%2BMbeSneWdlooyKMZLf43N4ymfece3ZaPGEuQ6HJayrDhdna4o5cMOrttMQGOqUBtBEaD7lbRXlEqOQfoJNBeOAB3uAb0euwKERH8QM%2B6ocaqrgrv1eytRQIv%2F%2FVyEzmkI0hzZbpsvcA8y5L0qT7r0vqVShG%2FQEe4teSXWJgSX1Lo06xJmTGb%2B6OyHUaHY4wA3Kde%2FLnRIn6zvbbHNBT2Loh9WzxYK6crKPhy0dxMppujedeRSgazoiN%2BZgsJ4neZgscdMfB0gF8T64qL8IG%2B07pkiOg&X-Amz-Signature=0df70499ae988cf40fdeb4c4189786d074381ff5a5a6ab56bc979dd34ccd52b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKAWCAVI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClkB8IfYvGMK%2Fo3epH4y%2BtHWM1gc4o6WpKYiAecltofQIgW2D37h%2FsTIYuBOcERBiry5yuIilUs7l0zmTyKjhZVUQqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeIYkRZmRJNqvg8rCrcA%2FnOaKo52O38km7O5JWMDLq0jVmu71TlNIGhkks0Kz7m5e695i4%2BHBSWAI7pAUa%2FuAE3f100YDHPMz1FnLsLD%2BNlD3%2FVuP%2BQkP6fCronZa2tIFzTpM5fK6xnYE%2F1g%2BYGk59qp4gT9B%2B8xHSJaTKFukWCHwHAHPWVqajc%2FlJJ2TZfE2jD0k0e6%2Frn5rCypNokrUoWHLnciawRB9zIlacIX%2FDllXs6tAbr2vgr%2F%2FQucUHe2sjmWZjsUq6UEJTDWIjuV7Rt6fGjWXw6A8oPfQfBSG8nBMDA44Edic%2B8nj5ru5XVvCk%2F67XRbiTaoq%2BjYcNhUAgRvLx8Mvos8JJ%2FXFap%2Bvv22Y2u0%2BVA0BQE5HCnsj9X67PMKue7uUUB5diV6tfPGX2wZQXhHKe41QAN95LgLl%2BBJm%2BJHDlHggb9tF6oH95a%2FxU3D5Ro6uoiVufTHr03UsftMvzCie9Is96mH6ojDchaS7KyB91TcO93NReU%2FZNH2FJTxQkcV8f8lwFWcrH796DTWvnVQjtTqFIG3sLHT6rfmJgeCK1YDyBZwgqb6FiqUuwi71x6BrcbPP95I%2FAErss%2FZoYo9%2BMbeSneWdlooyKMZLf43N4ymfece3ZaPGEuQ6HJayrDhdna4o5cMOrttMQGOqUBtBEaD7lbRXlEqOQfoJNBeOAB3uAb0euwKERH8QM%2B6ocaqrgrv1eytRQIv%2F%2FVyEzmkI0hzZbpsvcA8y5L0qT7r0vqVShG%2FQEe4teSXWJgSX1Lo06xJmTGb%2B6OyHUaHY4wA3Kde%2FLnRIn6zvbbHNBT2Loh9WzxYK6crKPhy0dxMppujedeRSgazoiN%2BZgsJ4neZgscdMfB0gF8T64qL8IG%2B07pkiOg&X-Amz-Signature=5d4cd4b444a5a4791559829aedb138763fe15f5034858f4fe8aff5e01e100604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKAWCAVI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClkB8IfYvGMK%2Fo3epH4y%2BtHWM1gc4o6WpKYiAecltofQIgW2D37h%2FsTIYuBOcERBiry5yuIilUs7l0zmTyKjhZVUQqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeIYkRZmRJNqvg8rCrcA%2FnOaKo52O38km7O5JWMDLq0jVmu71TlNIGhkks0Kz7m5e695i4%2BHBSWAI7pAUa%2FuAE3f100YDHPMz1FnLsLD%2BNlD3%2FVuP%2BQkP6fCronZa2tIFzTpM5fK6xnYE%2F1g%2BYGk59qp4gT9B%2B8xHSJaTKFukWCHwHAHPWVqajc%2FlJJ2TZfE2jD0k0e6%2Frn5rCypNokrUoWHLnciawRB9zIlacIX%2FDllXs6tAbr2vgr%2F%2FQucUHe2sjmWZjsUq6UEJTDWIjuV7Rt6fGjWXw6A8oPfQfBSG8nBMDA44Edic%2B8nj5ru5XVvCk%2F67XRbiTaoq%2BjYcNhUAgRvLx8Mvos8JJ%2FXFap%2Bvv22Y2u0%2BVA0BQE5HCnsj9X67PMKue7uUUB5diV6tfPGX2wZQXhHKe41QAN95LgLl%2BBJm%2BJHDlHggb9tF6oH95a%2FxU3D5Ro6uoiVufTHr03UsftMvzCie9Is96mH6ojDchaS7KyB91TcO93NReU%2FZNH2FJTxQkcV8f8lwFWcrH796DTWvnVQjtTqFIG3sLHT6rfmJgeCK1YDyBZwgqb6FiqUuwi71x6BrcbPP95I%2FAErss%2FZoYo9%2BMbeSneWdlooyKMZLf43N4ymfece3ZaPGEuQ6HJayrDhdna4o5cMOrttMQGOqUBtBEaD7lbRXlEqOQfoJNBeOAB3uAb0euwKERH8QM%2B6ocaqrgrv1eytRQIv%2F%2FVyEzmkI0hzZbpsvcA8y5L0qT7r0vqVShG%2FQEe4teSXWJgSX1Lo06xJmTGb%2B6OyHUaHY4wA3Kde%2FLnRIn6zvbbHNBT2Loh9WzxYK6crKPhy0dxMppujedeRSgazoiN%2BZgsJ4neZgscdMfB0gF8T64qL8IG%2B07pkiOg&X-Amz-Signature=47d0b82d5059c26cf89afa0c4becbb0930ca2dbad0cce7d22ce4031963d29f85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
