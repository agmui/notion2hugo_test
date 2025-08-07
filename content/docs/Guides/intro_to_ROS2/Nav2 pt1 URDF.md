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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4I6L2NO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIG2nNoRGQdgx9UR52ejPfTICzZ8D8L%2FLtBOK0jf%2FvOVsAiBqSMU%2B%2BkgJZeqP06glf7YZekSQNG78VLVkIq2bmuP23CqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAW%2BzIMDZqxaZNT0yKtwDYIDR4jOR%2Fv2%2FQGdXUCUzNHTwV5CGOcu4SGqUm8muJnYc2TThtIQsOfjHs%2BDZFAGRc6zvkT6P4Au1wXjzUxCzG%2FkYJvypCCEaSM29NXPePt3AgoHMGr3JFEp7KuVF4%2Bhl%2B9S1GkOnODJkmmB4IL4wEI%2FNfq%2Fx8LdfYbmBdczW65OZOmS60fSFXObiLI9myhkdQmxrnB02Z3r3GxYSqMpK4puz7DWtUdm6dovasWyUJLS%2BR7Ds6xj5v4emkH4g3rfL6U8AYZXfcLOLYAijP76vG3JV6JcJmboMDp82zYx5oZSwDGupLYwnIo1tluiROJDDaMUByo8GgA2jiGO5Zl09yXYWEDy2iJowOZFXMeDFFqbNdiBL7yplRKatJ%2Bc%2BLy9l9Q7FRz8ecOCpYbzhLM1odFypWzZd89Qhl4GFrkgH7GGNmB%2BmqtUF7CMISMkk%2BQKkPY6ERfLqZOWgA5zVnI8LFEzZZn%2FPLWUFAnghDUTO3VX4mSmtB4twlYcDE0taND4W6lN7oa%2BKvzewfTTfm8566i9xuJfzaL2dZV3ed%2FtHmU0r%2FD78jsg1NdW2ZMKcwnENLFh%2BfuiBGqxkvzHh0HJiePYbH7PRfvDM0ZupY5pfwxmF9ncDgAS1LQtjAFsw%2BcjQxAY6pgH7mfv%2F9XfBy98XjzBN3BgjujtDswzg5S9CNlzrCF2rf9Ak79tzkTW%2FOguAcpMK24lxnD99Dxlx5ve0JaicaTyLMuJZSeZ7aZGai2DerBaI3JJir91JnvOEGgDmzjf7BypLG0iJ0BM2bMBzFqz8mIeIj%2FjGZw4rjVLvPKtn1x%2FIxmXwWdP6EeDEA%2Bko0AqyvIJ%2FMEAG%2Bsofq3bvjskFg1arDHFMdcgK&X-Amz-Signature=f1dcac6387061a4ea70177f81d8eeea9458d13c0ea58d94aedb7de86dc51607d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4I6L2NO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIG2nNoRGQdgx9UR52ejPfTICzZ8D8L%2FLtBOK0jf%2FvOVsAiBqSMU%2B%2BkgJZeqP06glf7YZekSQNG78VLVkIq2bmuP23CqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAW%2BzIMDZqxaZNT0yKtwDYIDR4jOR%2Fv2%2FQGdXUCUzNHTwV5CGOcu4SGqUm8muJnYc2TThtIQsOfjHs%2BDZFAGRc6zvkT6P4Au1wXjzUxCzG%2FkYJvypCCEaSM29NXPePt3AgoHMGr3JFEp7KuVF4%2Bhl%2B9S1GkOnODJkmmB4IL4wEI%2FNfq%2Fx8LdfYbmBdczW65OZOmS60fSFXObiLI9myhkdQmxrnB02Z3r3GxYSqMpK4puz7DWtUdm6dovasWyUJLS%2BR7Ds6xj5v4emkH4g3rfL6U8AYZXfcLOLYAijP76vG3JV6JcJmboMDp82zYx5oZSwDGupLYwnIo1tluiROJDDaMUByo8GgA2jiGO5Zl09yXYWEDy2iJowOZFXMeDFFqbNdiBL7yplRKatJ%2Bc%2BLy9l9Q7FRz8ecOCpYbzhLM1odFypWzZd89Qhl4GFrkgH7GGNmB%2BmqtUF7CMISMkk%2BQKkPY6ERfLqZOWgA5zVnI8LFEzZZn%2FPLWUFAnghDUTO3VX4mSmtB4twlYcDE0taND4W6lN7oa%2BKvzewfTTfm8566i9xuJfzaL2dZV3ed%2FtHmU0r%2FD78jsg1NdW2ZMKcwnENLFh%2BfuiBGqxkvzHh0HJiePYbH7PRfvDM0ZupY5pfwxmF9ncDgAS1LQtjAFsw%2BcjQxAY6pgH7mfv%2F9XfBy98XjzBN3BgjujtDswzg5S9CNlzrCF2rf9Ak79tzkTW%2FOguAcpMK24lxnD99Dxlx5ve0JaicaTyLMuJZSeZ7aZGai2DerBaI3JJir91JnvOEGgDmzjf7BypLG0iJ0BM2bMBzFqz8mIeIj%2FjGZw4rjVLvPKtn1x%2FIxmXwWdP6EeDEA%2Bko0AqyvIJ%2FMEAG%2Bsofq3bvjskFg1arDHFMdcgK&X-Amz-Signature=74d11c9444aaaa181c4a1b6cc3f267bad378247f808da0f9f3928e0511ef1d5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4I6L2NO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIG2nNoRGQdgx9UR52ejPfTICzZ8D8L%2FLtBOK0jf%2FvOVsAiBqSMU%2B%2BkgJZeqP06glf7YZekSQNG78VLVkIq2bmuP23CqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAW%2BzIMDZqxaZNT0yKtwDYIDR4jOR%2Fv2%2FQGdXUCUzNHTwV5CGOcu4SGqUm8muJnYc2TThtIQsOfjHs%2BDZFAGRc6zvkT6P4Au1wXjzUxCzG%2FkYJvypCCEaSM29NXPePt3AgoHMGr3JFEp7KuVF4%2Bhl%2B9S1GkOnODJkmmB4IL4wEI%2FNfq%2Fx8LdfYbmBdczW65OZOmS60fSFXObiLI9myhkdQmxrnB02Z3r3GxYSqMpK4puz7DWtUdm6dovasWyUJLS%2BR7Ds6xj5v4emkH4g3rfL6U8AYZXfcLOLYAijP76vG3JV6JcJmboMDp82zYx5oZSwDGupLYwnIo1tluiROJDDaMUByo8GgA2jiGO5Zl09yXYWEDy2iJowOZFXMeDFFqbNdiBL7yplRKatJ%2Bc%2BLy9l9Q7FRz8ecOCpYbzhLM1odFypWzZd89Qhl4GFrkgH7GGNmB%2BmqtUF7CMISMkk%2BQKkPY6ERfLqZOWgA5zVnI8LFEzZZn%2FPLWUFAnghDUTO3VX4mSmtB4twlYcDE0taND4W6lN7oa%2BKvzewfTTfm8566i9xuJfzaL2dZV3ed%2FtHmU0r%2FD78jsg1NdW2ZMKcwnENLFh%2BfuiBGqxkvzHh0HJiePYbH7PRfvDM0ZupY5pfwxmF9ncDgAS1LQtjAFsw%2BcjQxAY6pgH7mfv%2F9XfBy98XjzBN3BgjujtDswzg5S9CNlzrCF2rf9Ak79tzkTW%2FOguAcpMK24lxnD99Dxlx5ve0JaicaTyLMuJZSeZ7aZGai2DerBaI3JJir91JnvOEGgDmzjf7BypLG0iJ0BM2bMBzFqz8mIeIj%2FjGZw4rjVLvPKtn1x%2FIxmXwWdP6EeDEA%2Bko0AqyvIJ%2FMEAG%2Bsofq3bvjskFg1arDHFMdcgK&X-Amz-Signature=0981cfaca320fff4cfdd6b2e0cad1045b04d50d45140b583f43405ea4d9d6ed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4I6L2NO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIG2nNoRGQdgx9UR52ejPfTICzZ8D8L%2FLtBOK0jf%2FvOVsAiBqSMU%2B%2BkgJZeqP06glf7YZekSQNG78VLVkIq2bmuP23CqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAW%2BzIMDZqxaZNT0yKtwDYIDR4jOR%2Fv2%2FQGdXUCUzNHTwV5CGOcu4SGqUm8muJnYc2TThtIQsOfjHs%2BDZFAGRc6zvkT6P4Au1wXjzUxCzG%2FkYJvypCCEaSM29NXPePt3AgoHMGr3JFEp7KuVF4%2Bhl%2B9S1GkOnODJkmmB4IL4wEI%2FNfq%2Fx8LdfYbmBdczW65OZOmS60fSFXObiLI9myhkdQmxrnB02Z3r3GxYSqMpK4puz7DWtUdm6dovasWyUJLS%2BR7Ds6xj5v4emkH4g3rfL6U8AYZXfcLOLYAijP76vG3JV6JcJmboMDp82zYx5oZSwDGupLYwnIo1tluiROJDDaMUByo8GgA2jiGO5Zl09yXYWEDy2iJowOZFXMeDFFqbNdiBL7yplRKatJ%2Bc%2BLy9l9Q7FRz8ecOCpYbzhLM1odFypWzZd89Qhl4GFrkgH7GGNmB%2BmqtUF7CMISMkk%2BQKkPY6ERfLqZOWgA5zVnI8LFEzZZn%2FPLWUFAnghDUTO3VX4mSmtB4twlYcDE0taND4W6lN7oa%2BKvzewfTTfm8566i9xuJfzaL2dZV3ed%2FtHmU0r%2FD78jsg1NdW2ZMKcwnENLFh%2BfuiBGqxkvzHh0HJiePYbH7PRfvDM0ZupY5pfwxmF9ncDgAS1LQtjAFsw%2BcjQxAY6pgH7mfv%2F9XfBy98XjzBN3BgjujtDswzg5S9CNlzrCF2rf9Ak79tzkTW%2FOguAcpMK24lxnD99Dxlx5ve0JaicaTyLMuJZSeZ7aZGai2DerBaI3JJir91JnvOEGgDmzjf7BypLG0iJ0BM2bMBzFqz8mIeIj%2FjGZw4rjVLvPKtn1x%2FIxmXwWdP6EeDEA%2Bko0AqyvIJ%2FMEAG%2Bsofq3bvjskFg1arDHFMdcgK&X-Amz-Signature=167c67004f6b260046890b89627f03274e944d95fbd96e45dd5ff87c908ba225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4I6L2NO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIG2nNoRGQdgx9UR52ejPfTICzZ8D8L%2FLtBOK0jf%2FvOVsAiBqSMU%2B%2BkgJZeqP06glf7YZekSQNG78VLVkIq2bmuP23CqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAW%2BzIMDZqxaZNT0yKtwDYIDR4jOR%2Fv2%2FQGdXUCUzNHTwV5CGOcu4SGqUm8muJnYc2TThtIQsOfjHs%2BDZFAGRc6zvkT6P4Au1wXjzUxCzG%2FkYJvypCCEaSM29NXPePt3AgoHMGr3JFEp7KuVF4%2Bhl%2B9S1GkOnODJkmmB4IL4wEI%2FNfq%2Fx8LdfYbmBdczW65OZOmS60fSFXObiLI9myhkdQmxrnB02Z3r3GxYSqMpK4puz7DWtUdm6dovasWyUJLS%2BR7Ds6xj5v4emkH4g3rfL6U8AYZXfcLOLYAijP76vG3JV6JcJmboMDp82zYx5oZSwDGupLYwnIo1tluiROJDDaMUByo8GgA2jiGO5Zl09yXYWEDy2iJowOZFXMeDFFqbNdiBL7yplRKatJ%2Bc%2BLy9l9Q7FRz8ecOCpYbzhLM1odFypWzZd89Qhl4GFrkgH7GGNmB%2BmqtUF7CMISMkk%2BQKkPY6ERfLqZOWgA5zVnI8LFEzZZn%2FPLWUFAnghDUTO3VX4mSmtB4twlYcDE0taND4W6lN7oa%2BKvzewfTTfm8566i9xuJfzaL2dZV3ed%2FtHmU0r%2FD78jsg1NdW2ZMKcwnENLFh%2BfuiBGqxkvzHh0HJiePYbH7PRfvDM0ZupY5pfwxmF9ncDgAS1LQtjAFsw%2BcjQxAY6pgH7mfv%2F9XfBy98XjzBN3BgjujtDswzg5S9CNlzrCF2rf9Ak79tzkTW%2FOguAcpMK24lxnD99Dxlx5ve0JaicaTyLMuJZSeZ7aZGai2DerBaI3JJir91JnvOEGgDmzjf7BypLG0iJ0BM2bMBzFqz8mIeIj%2FjGZw4rjVLvPKtn1x%2FIxmXwWdP6EeDEA%2Bko0AqyvIJ%2FMEAG%2Bsofq3bvjskFg1arDHFMdcgK&X-Amz-Signature=0c7d563816f822762f1c7017ca432bbfabdb65ce6b82ccaa6c88b002c84d63a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4I6L2NO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIG2nNoRGQdgx9UR52ejPfTICzZ8D8L%2FLtBOK0jf%2FvOVsAiBqSMU%2B%2BkgJZeqP06glf7YZekSQNG78VLVkIq2bmuP23CqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAW%2BzIMDZqxaZNT0yKtwDYIDR4jOR%2Fv2%2FQGdXUCUzNHTwV5CGOcu4SGqUm8muJnYc2TThtIQsOfjHs%2BDZFAGRc6zvkT6P4Au1wXjzUxCzG%2FkYJvypCCEaSM29NXPePt3AgoHMGr3JFEp7KuVF4%2Bhl%2B9S1GkOnODJkmmB4IL4wEI%2FNfq%2Fx8LdfYbmBdczW65OZOmS60fSFXObiLI9myhkdQmxrnB02Z3r3GxYSqMpK4puz7DWtUdm6dovasWyUJLS%2BR7Ds6xj5v4emkH4g3rfL6U8AYZXfcLOLYAijP76vG3JV6JcJmboMDp82zYx5oZSwDGupLYwnIo1tluiROJDDaMUByo8GgA2jiGO5Zl09yXYWEDy2iJowOZFXMeDFFqbNdiBL7yplRKatJ%2Bc%2BLy9l9Q7FRz8ecOCpYbzhLM1odFypWzZd89Qhl4GFrkgH7GGNmB%2BmqtUF7CMISMkk%2BQKkPY6ERfLqZOWgA5zVnI8LFEzZZn%2FPLWUFAnghDUTO3VX4mSmtB4twlYcDE0taND4W6lN7oa%2BKvzewfTTfm8566i9xuJfzaL2dZV3ed%2FtHmU0r%2FD78jsg1NdW2ZMKcwnENLFh%2BfuiBGqxkvzHh0HJiePYbH7PRfvDM0ZupY5pfwxmF9ncDgAS1LQtjAFsw%2BcjQxAY6pgH7mfv%2F9XfBy98XjzBN3BgjujtDswzg5S9CNlzrCF2rf9Ak79tzkTW%2FOguAcpMK24lxnD99Dxlx5ve0JaicaTyLMuJZSeZ7aZGai2DerBaI3JJir91JnvOEGgDmzjf7BypLG0iJ0BM2bMBzFqz8mIeIj%2FjGZw4rjVLvPKtn1x%2FIxmXwWdP6EeDEA%2Bko0AqyvIJ%2FMEAG%2Bsofq3bvjskFg1arDHFMdcgK&X-Amz-Signature=f16ad88e029bdbcdcdf64e45ec6d35b09edbd0d926ced5735ea08219a40026b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4I6L2NO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIG2nNoRGQdgx9UR52ejPfTICzZ8D8L%2FLtBOK0jf%2FvOVsAiBqSMU%2B%2BkgJZeqP06glf7YZekSQNG78VLVkIq2bmuP23CqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAW%2BzIMDZqxaZNT0yKtwDYIDR4jOR%2Fv2%2FQGdXUCUzNHTwV5CGOcu4SGqUm8muJnYc2TThtIQsOfjHs%2BDZFAGRc6zvkT6P4Au1wXjzUxCzG%2FkYJvypCCEaSM29NXPePt3AgoHMGr3JFEp7KuVF4%2Bhl%2B9S1GkOnODJkmmB4IL4wEI%2FNfq%2Fx8LdfYbmBdczW65OZOmS60fSFXObiLI9myhkdQmxrnB02Z3r3GxYSqMpK4puz7DWtUdm6dovasWyUJLS%2BR7Ds6xj5v4emkH4g3rfL6U8AYZXfcLOLYAijP76vG3JV6JcJmboMDp82zYx5oZSwDGupLYwnIo1tluiROJDDaMUByo8GgA2jiGO5Zl09yXYWEDy2iJowOZFXMeDFFqbNdiBL7yplRKatJ%2Bc%2BLy9l9Q7FRz8ecOCpYbzhLM1odFypWzZd89Qhl4GFrkgH7GGNmB%2BmqtUF7CMISMkk%2BQKkPY6ERfLqZOWgA5zVnI8LFEzZZn%2FPLWUFAnghDUTO3VX4mSmtB4twlYcDE0taND4W6lN7oa%2BKvzewfTTfm8566i9xuJfzaL2dZV3ed%2FtHmU0r%2FD78jsg1NdW2ZMKcwnENLFh%2BfuiBGqxkvzHh0HJiePYbH7PRfvDM0ZupY5pfwxmF9ncDgAS1LQtjAFsw%2BcjQxAY6pgH7mfv%2F9XfBy98XjzBN3BgjujtDswzg5S9CNlzrCF2rf9Ak79tzkTW%2FOguAcpMK24lxnD99Dxlx5ve0JaicaTyLMuJZSeZ7aZGai2DerBaI3JJir91JnvOEGgDmzjf7BypLG0iJ0BM2bMBzFqz8mIeIj%2FjGZw4rjVLvPKtn1x%2FIxmXwWdP6EeDEA%2Bko0AqyvIJ%2FMEAG%2Bsofq3bvjskFg1arDHFMdcgK&X-Amz-Signature=ffd00f12430ebb4a5916eab3ff545add64c7a71191f6b5032fd763b9500794a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4I6L2NO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIG2nNoRGQdgx9UR52ejPfTICzZ8D8L%2FLtBOK0jf%2FvOVsAiBqSMU%2B%2BkgJZeqP06glf7YZekSQNG78VLVkIq2bmuP23CqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAW%2BzIMDZqxaZNT0yKtwDYIDR4jOR%2Fv2%2FQGdXUCUzNHTwV5CGOcu4SGqUm8muJnYc2TThtIQsOfjHs%2BDZFAGRc6zvkT6P4Au1wXjzUxCzG%2FkYJvypCCEaSM29NXPePt3AgoHMGr3JFEp7KuVF4%2Bhl%2B9S1GkOnODJkmmB4IL4wEI%2FNfq%2Fx8LdfYbmBdczW65OZOmS60fSFXObiLI9myhkdQmxrnB02Z3r3GxYSqMpK4puz7DWtUdm6dovasWyUJLS%2BR7Ds6xj5v4emkH4g3rfL6U8AYZXfcLOLYAijP76vG3JV6JcJmboMDp82zYx5oZSwDGupLYwnIo1tluiROJDDaMUByo8GgA2jiGO5Zl09yXYWEDy2iJowOZFXMeDFFqbNdiBL7yplRKatJ%2Bc%2BLy9l9Q7FRz8ecOCpYbzhLM1odFypWzZd89Qhl4GFrkgH7GGNmB%2BmqtUF7CMISMkk%2BQKkPY6ERfLqZOWgA5zVnI8LFEzZZn%2FPLWUFAnghDUTO3VX4mSmtB4twlYcDE0taND4W6lN7oa%2BKvzewfTTfm8566i9xuJfzaL2dZV3ed%2FtHmU0r%2FD78jsg1NdW2ZMKcwnENLFh%2BfuiBGqxkvzHh0HJiePYbH7PRfvDM0ZupY5pfwxmF9ncDgAS1LQtjAFsw%2BcjQxAY6pgH7mfv%2F9XfBy98XjzBN3BgjujtDswzg5S9CNlzrCF2rf9Ak79tzkTW%2FOguAcpMK24lxnD99Dxlx5ve0JaicaTyLMuJZSeZ7aZGai2DerBaI3JJir91JnvOEGgDmzjf7BypLG0iJ0BM2bMBzFqz8mIeIj%2FjGZw4rjVLvPKtn1x%2FIxmXwWdP6EeDEA%2Bko0AqyvIJ%2FMEAG%2Bsofq3bvjskFg1arDHFMdcgK&X-Amz-Signature=94df5f33eb3a8458fd819b98a3a12a445b6d6d52d27d55d0928cfbee25a64314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4I6L2NO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIG2nNoRGQdgx9UR52ejPfTICzZ8D8L%2FLtBOK0jf%2FvOVsAiBqSMU%2B%2BkgJZeqP06glf7YZekSQNG78VLVkIq2bmuP23CqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAW%2BzIMDZqxaZNT0yKtwDYIDR4jOR%2Fv2%2FQGdXUCUzNHTwV5CGOcu4SGqUm8muJnYc2TThtIQsOfjHs%2BDZFAGRc6zvkT6P4Au1wXjzUxCzG%2FkYJvypCCEaSM29NXPePt3AgoHMGr3JFEp7KuVF4%2Bhl%2B9S1GkOnODJkmmB4IL4wEI%2FNfq%2Fx8LdfYbmBdczW65OZOmS60fSFXObiLI9myhkdQmxrnB02Z3r3GxYSqMpK4puz7DWtUdm6dovasWyUJLS%2BR7Ds6xj5v4emkH4g3rfL6U8AYZXfcLOLYAijP76vG3JV6JcJmboMDp82zYx5oZSwDGupLYwnIo1tluiROJDDaMUByo8GgA2jiGO5Zl09yXYWEDy2iJowOZFXMeDFFqbNdiBL7yplRKatJ%2Bc%2BLy9l9Q7FRz8ecOCpYbzhLM1odFypWzZd89Qhl4GFrkgH7GGNmB%2BmqtUF7CMISMkk%2BQKkPY6ERfLqZOWgA5zVnI8LFEzZZn%2FPLWUFAnghDUTO3VX4mSmtB4twlYcDE0taND4W6lN7oa%2BKvzewfTTfm8566i9xuJfzaL2dZV3ed%2FtHmU0r%2FD78jsg1NdW2ZMKcwnENLFh%2BfuiBGqxkvzHh0HJiePYbH7PRfvDM0ZupY5pfwxmF9ncDgAS1LQtjAFsw%2BcjQxAY6pgH7mfv%2F9XfBy98XjzBN3BgjujtDswzg5S9CNlzrCF2rf9Ak79tzkTW%2FOguAcpMK24lxnD99Dxlx5ve0JaicaTyLMuJZSeZ7aZGai2DerBaI3JJir91JnvOEGgDmzjf7BypLG0iJ0BM2bMBzFqz8mIeIj%2FjGZw4rjVLvPKtn1x%2FIxmXwWdP6EeDEA%2Bko0AqyvIJ%2FMEAG%2Bsofq3bvjskFg1arDHFMdcgK&X-Amz-Signature=8c9c8ba70b0c99b384fe8685c3429694c91aac8925228ce0a0092d5bb8f5a7a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4I6L2NO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIG2nNoRGQdgx9UR52ejPfTICzZ8D8L%2FLtBOK0jf%2FvOVsAiBqSMU%2B%2BkgJZeqP06glf7YZekSQNG78VLVkIq2bmuP23CqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAW%2BzIMDZqxaZNT0yKtwDYIDR4jOR%2Fv2%2FQGdXUCUzNHTwV5CGOcu4SGqUm8muJnYc2TThtIQsOfjHs%2BDZFAGRc6zvkT6P4Au1wXjzUxCzG%2FkYJvypCCEaSM29NXPePt3AgoHMGr3JFEp7KuVF4%2Bhl%2B9S1GkOnODJkmmB4IL4wEI%2FNfq%2Fx8LdfYbmBdczW65OZOmS60fSFXObiLI9myhkdQmxrnB02Z3r3GxYSqMpK4puz7DWtUdm6dovasWyUJLS%2BR7Ds6xj5v4emkH4g3rfL6U8AYZXfcLOLYAijP76vG3JV6JcJmboMDp82zYx5oZSwDGupLYwnIo1tluiROJDDaMUByo8GgA2jiGO5Zl09yXYWEDy2iJowOZFXMeDFFqbNdiBL7yplRKatJ%2Bc%2BLy9l9Q7FRz8ecOCpYbzhLM1odFypWzZd89Qhl4GFrkgH7GGNmB%2BmqtUF7CMISMkk%2BQKkPY6ERfLqZOWgA5zVnI8LFEzZZn%2FPLWUFAnghDUTO3VX4mSmtB4twlYcDE0taND4W6lN7oa%2BKvzewfTTfm8566i9xuJfzaL2dZV3ed%2FtHmU0r%2FD78jsg1NdW2ZMKcwnENLFh%2BfuiBGqxkvzHh0HJiePYbH7PRfvDM0ZupY5pfwxmF9ncDgAS1LQtjAFsw%2BcjQxAY6pgH7mfv%2F9XfBy98XjzBN3BgjujtDswzg5S9CNlzrCF2rf9Ak79tzkTW%2FOguAcpMK24lxnD99Dxlx5ve0JaicaTyLMuJZSeZ7aZGai2DerBaI3JJir91JnvOEGgDmzjf7BypLG0iJ0BM2bMBzFqz8mIeIj%2FjGZw4rjVLvPKtn1x%2FIxmXwWdP6EeDEA%2Bko0AqyvIJ%2FMEAG%2Bsofq3bvjskFg1arDHFMdcgK&X-Amz-Signature=6872d49d86f04925b994d0b169f0a00fcd294a081bef5ea53846a4ece02566e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQJMIBB7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDffKE4snSll%2FoKs8uY%2BlkccxhMtbadKD5GSx0exlcaxAIgIR7KdQUNeh47QA0EKztVQgOhCPWhmu5BG2tAF4I7POIqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHXfvu2n0MMcL3TdCrcA0By8xYjpjMjObCesEKInq8Lr1STRbf0lo6hry%2FDq2ylk1Mx5u2Ibv%2FkYulivEqUS%2B9UkJEbpNm81QNtonxu059Tr7pYGRiOxpmWexegnImVDx%2F9gl8BMF5hNIWzaN8mwgMhCtDXLkZ66%2F4gzWEroJECDOtyJuVbgH4uTu8PNA8iVsiOuWoSoXh%2BpfYamUC2WYSB%2F41t1ITevflkTYTCoem0BzA%2BWpk4KyfyOmsFxohfE0zrhEeLt69GRxgs2MxB8Yk1n%2FLDfA0gIZNm2xsRhS3HWbef%2FXQdih%2BWEropZ%2F%2FVZAapQy15jpOoCmErPhu1QrS6sM00E5xQfBcP%2BcpDcZCirWaw6xSHX24%2FPRHciHI6o%2FAj2%2B%2BprVKoaxf4Ylww8GTXQFLZtZ5pomGFlLFw4rIo7bZxekGM8TGyceHtAGQkO8dqZZ7npqSzhPVabiE%2FJ37EOR2QY4mS%2B6K4n6MA1Su8g95P9YpoQNMhibJj%2FEMdd3jX6QaDjL25xYNjw8NeCmAmz2wbVH20AH234qfw6DdegtTENb3h1unR9f%2Bc1vChmC8QQTpDJ9Sz41go%2BiGOE%2B9sabPnE1ovzN2VXoDFKkJlKpQkfw%2B%2BrTglPAYkM79VvFh1et3VX6qeaXxrMODI0MQGOqUB%2Bu6RIMjuljf7eW9r5ruNvE%2BGR1wSEptjg%2Ft4%2F9HKM8Yj4fPuq4nDYBpQ9SM%2BcoQfffZmzn%2Fh40WAQQPOqn8nqmjASj8V4UvrQxrcw0t63t0SgbzNMqrbFfbI8RZbw1OUCzErm8Mc0DEtEi07baIAjJSb2nLh8JiShjngaeiTwJ11PaH6woW%2BO6Qke7tKV2P8n29NQOKqIquDYOdckAGRkrRdPbW0&X-Amz-Signature=c78d0a927d5eccd7955510531f79893c676fd90932f9c089a809c7244399eb36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIYNCGAJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIDOtTqtOrpvjVwt%2B0bEZ5oGe2k%2FjISINGw2ggHMhu2HtAiAvQi8MbXkFjumiYsyHH27wVXM6HHlJ3c779p9gIAtANiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrPDDAllQ%2FrGOcj1kKtwDJ96%2FzENUeuibXuO59Yvh9JiZqUGE9umU82daQRd0f%2BPmE9iveZg3Bt6WYWsqyjYQO%2FTQpEN5NIDJpEc2kSKi%2FprIlkzriomEoqOQDOeth53P%2BYRCWuUnOajYu6YuA4hQHUwwoOgxtxAruKjTwBU6LTULvrkVM%2Bem4VqC2HtTBeIXABkLR15qUCG0g6QnqgbWGCny%2Bw6pzbEG5Wz%2BzEqTABuCCPyBmXuWUNiLLKQLPsU6L1EzAcPHqV1Vk2kidVvCh12KNOmWSMruZjRKetfYklmXVGF1dmE4NP4F%2FmqPpLZ7Esuftdb6mnLJ6Y5vp%2BgFlIhSlmy2Tha8n5S4z7gT4UHAtibgKbfFcSc6%2FlTtUZH%2F%2BGrC86INuGCf5qRaAJb%2B7VXqfTEo4anYOl9MrEVmsnClhx2HsAZdBwW9%2Bn%2BfYEuyXnViKpaGla7awX7pOJbnP9NF4V5lViwzwXprhR%2BG19K3wKKD3zmlBfo%2FM4ldAN3miPCYg8fmPZ0w%2BdT1ELZh3j6DknkBZp1T6weLZG3D405dUaPPB%2Fvw5RKqEqxJHOBRlt4rKqoDyyue0NVQ6myHf9a21RHDOoPdPtHRV0TvlzTXrnVtOFr6dT5GLE6PB3bWZe9qUcR72vBWcJow48jQxAY6pgHwzjtnB%2FDZDiKuKL%2FX0OZi0c%2FguzRWY6ADqUTfIgVLbiYyCTfPZehOb6b73iKZTTaMVpuk0HjFopBvorygWHtBQX5GILuGztmrRubjoceEpz%2BZIUnaCMSUs3Q0ySqdHGl4%2FTwrDXiqYvde3phfeHsTCwzmqvWubJ%2Bp%2FKGQCrC3j52YQabX8z3fpKad5SxLPJuge%2FqHg8lrSFqWo3D5nRyPj8DWrWYk&X-Amz-Signature=580261af647d105d63ad1077671e08cb0607dbdc7495ba1ed72b9fe22c984924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6PEJ3NN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIB%2FqRpYQ%2BLR8l8fX%2BhM9cGCfxp8jKMKfDZc2dcs7Wu1iAiBHecpqSnZdpXqCRQ1byoYFLsAt%2F2igL9B%2B98b8G%2Bf1KCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhyFBgbvesxhz9LG5KtwDUpoUoz8tbpRcwA%2FYi4ub6DiT0uacVUDReCAL0oPZIr83wGYqU1it9MxOOLFomMInvBZjgqgNe%2BGKviq%2B%2BinMMRnkSAtSdBkfuTbqYdmSoyCmYw%2Bh%2FPakX%2FGGwYw9Oz75mfoPXFRqNpQCXo67TPbahaD0cfZrLe%2Feq4pq4phbkkiVxF%2BpADCMZQQjAWDm9H98ogRka5UwzTPAYc1S6sdb8%2BiFZ4QsrjhWd5XopS9lb3PSgxAogwis%2BAMXDUyNRr5tS0MQJaz0lSnwhFroH2YJRW%2BYh25qJ7aoV3NUCgEb6M%2FVtB9d9PuFsWvFrs1iLMf1B1%2F1vhX%2B3bjU9nWIy5hGJMXkGRSn7ciaRqdKm6jOQP19Gp%2FEojnSe0HKy2YSXr%2FBJVujoMjUf3gV35t1y50PgdahkcyzY%2BBaB2I9uhEDVtc0VTjlqoDWadWHqqQcaEVOSz6%2BMHiQIWIzHGFlNHCDadfiLV8fibfCFhPk7jurdm%2F78l0Ui7g4jZxN96Eymld%2B0RqwYqOH27luTp%2B0%2BuOwh6eoH6akIIEbbD6nAezL%2F7JhJrj9GepynvKHD3zyrr%2BeqYLHhGl6O8yaMHXsWW5a7vq0LyhNA8wi2jLqtWY5s7wtP1lotcG%2BeltmOb8w%2FMjQxAY6pgG0X3HfPRqZcQtfXwzc1hX9zs7JPR9466r3cBOAPlt2jAdMknq09zc4y0lY4gPsy9vIGBQGWSb99NARcEHdHVoEvhqVmClQqT95S0rDsG4t0P4zuNmxCJqOT7x0thPhiUTyBdW0ImGWHybAlQm0NfLsLdqG03xYff3uKpBl0VLKsD9uJtQoQK6Pvx%2BeoPi%2BePXjJo6XDH1vlDziPD3swAjuNf%2BhqJcV&X-Amz-Signature=4c9fce1462865dfd98c509693bbefc858b87b87f237be68284deacfd79451216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4I6L2NO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIG2nNoRGQdgx9UR52ejPfTICzZ8D8L%2FLtBOK0jf%2FvOVsAiBqSMU%2B%2BkgJZeqP06glf7YZekSQNG78VLVkIq2bmuP23CqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAW%2BzIMDZqxaZNT0yKtwDYIDR4jOR%2Fv2%2FQGdXUCUzNHTwV5CGOcu4SGqUm8muJnYc2TThtIQsOfjHs%2BDZFAGRc6zvkT6P4Au1wXjzUxCzG%2FkYJvypCCEaSM29NXPePt3AgoHMGr3JFEp7KuVF4%2Bhl%2B9S1GkOnODJkmmB4IL4wEI%2FNfq%2Fx8LdfYbmBdczW65OZOmS60fSFXObiLI9myhkdQmxrnB02Z3r3GxYSqMpK4puz7DWtUdm6dovasWyUJLS%2BR7Ds6xj5v4emkH4g3rfL6U8AYZXfcLOLYAijP76vG3JV6JcJmboMDp82zYx5oZSwDGupLYwnIo1tluiROJDDaMUByo8GgA2jiGO5Zl09yXYWEDy2iJowOZFXMeDFFqbNdiBL7yplRKatJ%2Bc%2BLy9l9Q7FRz8ecOCpYbzhLM1odFypWzZd89Qhl4GFrkgH7GGNmB%2BmqtUF7CMISMkk%2BQKkPY6ERfLqZOWgA5zVnI8LFEzZZn%2FPLWUFAnghDUTO3VX4mSmtB4twlYcDE0taND4W6lN7oa%2BKvzewfTTfm8566i9xuJfzaL2dZV3ed%2FtHmU0r%2FD78jsg1NdW2ZMKcwnENLFh%2BfuiBGqxkvzHh0HJiePYbH7PRfvDM0ZupY5pfwxmF9ncDgAS1LQtjAFsw%2BcjQxAY6pgH7mfv%2F9XfBy98XjzBN3BgjujtDswzg5S9CNlzrCF2rf9Ak79tzkTW%2FOguAcpMK24lxnD99Dxlx5ve0JaicaTyLMuJZSeZ7aZGai2DerBaI3JJir91JnvOEGgDmzjf7BypLG0iJ0BM2bMBzFqz8mIeIj%2FjGZw4rjVLvPKtn1x%2FIxmXwWdP6EeDEA%2Bko0AqyvIJ%2FMEAG%2Bsofq3bvjskFg1arDHFMdcgK&X-Amz-Signature=cdce781009e181cae09319ff7a2078a6daa3039e20abdce34f368f07d2818500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNW5FSSS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIATo0QA6pQfJDRUkWJnw6fuSFbiZSEVhn%2FxMRrmBIRHkAiBUsdHxteU8boQMkzXd%2Bm6%2FyIbgdivVBup7z4DW%2Fd0FkSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyh%2FP8ST99KpAdc4nKtwDGk9NPtOGnaGHNZgBK%2BGDhK5%2FFO3Zl0y%2FmFDv%2B9jMemZx6XUaR1hh2d8ZVe%2BUibsJzz0yaCDLet3obRks7njReXZbXLi6ud4CXl%2BH7w29042qpYHJWaes1H76WPi0pLQArxLEscqZ4KobyEQg6CMPQPxjcGq3tiYbIQqSeyTPxp2pldlS97Uwf1CJpBqmkVq%2F%2FYeRficzeAPuIbhhIRnWD0p%2F%2F%2B6pYEKeZzNnchI17e1PdvTJWEEsDjV%2F1zmJtjLv4ovxzdcWn%2FQFoHK9X%2Bvc9PIpk%2BuS%2BfiwebZGC3pT8xboLWdLUexM3JLJX88umLc%2Bv0g876ldyLBJf61CKNe9KcbbAJmbycJbGJpcannp5AyZcAjrbGYE2s7QTRengfqsLYIv3ymtwBYoUWZpOGAlNT4ser%2BmmWZE1M2TAmlYYiHX6gtIiw07vYOiIXwWM2Gx6DiHpTP0anojYq0s%2Bbp68cJeza2p77MU4GI5V5WP%2BX0UyZf%2F2%2FcM4QTChneS4mNe5r%2FMUikhuWcymKvIW4aikWjSCY64os%2BRnTCT6zOZxsl3%2FIdgBvO3mHhWzOkvd3ggZOJc8CqZtFQn15Pg7iyWCWCdL1XLDLQHMux4mciBkp7fV69iD8o8TIj%2FGVowncjQxAY6pgE%2FsUHHj4aSGICqyXAbNWUByI6OLpkSYfJT%2BfhX%2FdE6ABK%2BvlKSBhoeXdcfu9hLwiIlVpnFQRyG2i59IweYLz%2F4ZL%2FcsSfZRaQIj62X7ZqXEIkrTO6%2BcCkZ%2FRWgHqFOTYqIbTG5CYDenSFJ6Xe6FPiYPyBw%2BcZ8ekYNYBDou%2BbF0c0MpyJgrF3aZiRKLnZBdoEbBW%2FOUhVNY7xF2LPuDWVhM1mbqjD7&X-Amz-Signature=2a61618e2849e3243eaf454bde91844ec1c130f50e95e32c3fd8b30323f32f58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4I6L2NO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIG2nNoRGQdgx9UR52ejPfTICzZ8D8L%2FLtBOK0jf%2FvOVsAiBqSMU%2B%2BkgJZeqP06glf7YZekSQNG78VLVkIq2bmuP23CqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAW%2BzIMDZqxaZNT0yKtwDYIDR4jOR%2Fv2%2FQGdXUCUzNHTwV5CGOcu4SGqUm8muJnYc2TThtIQsOfjHs%2BDZFAGRc6zvkT6P4Au1wXjzUxCzG%2FkYJvypCCEaSM29NXPePt3AgoHMGr3JFEp7KuVF4%2Bhl%2B9S1GkOnODJkmmB4IL4wEI%2FNfq%2Fx8LdfYbmBdczW65OZOmS60fSFXObiLI9myhkdQmxrnB02Z3r3GxYSqMpK4puz7DWtUdm6dovasWyUJLS%2BR7Ds6xj5v4emkH4g3rfL6U8AYZXfcLOLYAijP76vG3JV6JcJmboMDp82zYx5oZSwDGupLYwnIo1tluiROJDDaMUByo8GgA2jiGO5Zl09yXYWEDy2iJowOZFXMeDFFqbNdiBL7yplRKatJ%2Bc%2BLy9l9Q7FRz8ecOCpYbzhLM1odFypWzZd89Qhl4GFrkgH7GGNmB%2BmqtUF7CMISMkk%2BQKkPY6ERfLqZOWgA5zVnI8LFEzZZn%2FPLWUFAnghDUTO3VX4mSmtB4twlYcDE0taND4W6lN7oa%2BKvzewfTTfm8566i9xuJfzaL2dZV3ed%2FtHmU0r%2FD78jsg1NdW2ZMKcwnENLFh%2BfuiBGqxkvzHh0HJiePYbH7PRfvDM0ZupY5pfwxmF9ncDgAS1LQtjAFsw%2BcjQxAY6pgH7mfv%2F9XfBy98XjzBN3BgjujtDswzg5S9CNlzrCF2rf9Ak79tzkTW%2FOguAcpMK24lxnD99Dxlx5ve0JaicaTyLMuJZSeZ7aZGai2DerBaI3JJir91JnvOEGgDmzjf7BypLG0iJ0BM2bMBzFqz8mIeIj%2FjGZw4rjVLvPKtn1x%2FIxmXwWdP6EeDEA%2Bko0AqyvIJ%2FMEAG%2Bsofq3bvjskFg1arDHFMdcgK&X-Amz-Signature=d10878cc3c40f53cbccd66f667516194fc377b38ef42bade23b5f86697144260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W76UNAAP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIDWsVyxCEvVzLAtrIpQRQXuF%2BrJHtqVLjGuHwXyxA2VOAiBnK%2FQhSef5roJnBvkPQUy4kJoVFEpAoAajh2osIvyoZyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV9P7cNXBz4VraF%2BqKtwDlim9hGwl70aejo5OuWZ09iykWe5xlvydDWidPpTWncv2nDtprlCtXPOoXvBl38eV2MYKfjGZfVq8uvjc6Zmv06zPWOInSFabBR9p5EG4B%2BFIOpjKY%2BkRWfTVP%2BQdKZziYARF6sLKgoeHGfW0yhoC78Bn3Rki%2BNnU62Z40CQCZcRU6zhqIOXzdUwNjrs%2F4BriFBjokom9sfqF5rgi0jr%2B4KQEuzHkeWAA8vPECJvU4Yf4COLeiS95fG3AbVKhoQ3Q6wlq4g99Z5Kj02eQN0US3bM7H1ofi06ZGQePIUbWzX%2FTKBj3JflwQglWR%2BvPrXoMbUDDGE0gnYInaZapO4pqGH0qTZOPGCTca1Qhf3ohYqPohulZUS%2FwjFU0K9spSAhMfcUYDdrNGn3VbH0I22qzdL1QDu3BytNLFGXvhHkOX49X5DeRH%2FImI4V1WjXQ1SOassPDw3UTRcUKySbKlzB4bZw537SwXolWxVsHwa5DyXpt86FkdZXRrzbz5eOC9khfGXcFNBlrHU5YecWQ0z6js6qrlPtpivIblZazSmZgn2OoTa9o2loQYb9lK0aqGJxO5wBGEmaH8AcuZJHGtr3WB7YZthCuiB3hZtivLIrBq5X9rs%2BII%2F7ePU5GMF0w%2BMjQxAY6pgGkVZAcTBYBj63vJhvrSHCNvhHkPRDBPUmDsvvoqqmMcaYJyosISMDEm6s26anWAmhmzNvPgGrUlaMlhZ0zpc8sHM%2BhLWz%2FNY0RcjlKcbjiW6De7gcmhJ4lvm9%2B1%2FHq0jf5OW6MENlSLjExFVS7zwskLibIvvge9Q%2BG%2FLmM%2FhcXgG%2F4a%2FDvFk0hRwq4Hq5aO5TnPsJ3rJPy4CXpSenqb7MYjIs7gJyn&X-Amz-Signature=6909cc042fb4dbe7b8fb4ea0ee4cbe52c6073f59c21502fd19411327569215e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4I6L2NO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIG2nNoRGQdgx9UR52ejPfTICzZ8D8L%2FLtBOK0jf%2FvOVsAiBqSMU%2B%2BkgJZeqP06glf7YZekSQNG78VLVkIq2bmuP23CqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAW%2BzIMDZqxaZNT0yKtwDYIDR4jOR%2Fv2%2FQGdXUCUzNHTwV5CGOcu4SGqUm8muJnYc2TThtIQsOfjHs%2BDZFAGRc6zvkT6P4Au1wXjzUxCzG%2FkYJvypCCEaSM29NXPePt3AgoHMGr3JFEp7KuVF4%2Bhl%2B9S1GkOnODJkmmB4IL4wEI%2FNfq%2Fx8LdfYbmBdczW65OZOmS60fSFXObiLI9myhkdQmxrnB02Z3r3GxYSqMpK4puz7DWtUdm6dovasWyUJLS%2BR7Ds6xj5v4emkH4g3rfL6U8AYZXfcLOLYAijP76vG3JV6JcJmboMDp82zYx5oZSwDGupLYwnIo1tluiROJDDaMUByo8GgA2jiGO5Zl09yXYWEDy2iJowOZFXMeDFFqbNdiBL7yplRKatJ%2Bc%2BLy9l9Q7FRz8ecOCpYbzhLM1odFypWzZd89Qhl4GFrkgH7GGNmB%2BmqtUF7CMISMkk%2BQKkPY6ERfLqZOWgA5zVnI8LFEzZZn%2FPLWUFAnghDUTO3VX4mSmtB4twlYcDE0taND4W6lN7oa%2BKvzewfTTfm8566i9xuJfzaL2dZV3ed%2FtHmU0r%2FD78jsg1NdW2ZMKcwnENLFh%2BfuiBGqxkvzHh0HJiePYbH7PRfvDM0ZupY5pfwxmF9ncDgAS1LQtjAFsw%2BcjQxAY6pgH7mfv%2F9XfBy98XjzBN3BgjujtDswzg5S9CNlzrCF2rf9Ak79tzkTW%2FOguAcpMK24lxnD99Dxlx5ve0JaicaTyLMuJZSeZ7aZGai2DerBaI3JJir91JnvOEGgDmzjf7BypLG0iJ0BM2bMBzFqz8mIeIj%2FjGZw4rjVLvPKtn1x%2FIxmXwWdP6EeDEA%2Bko0AqyvIJ%2FMEAG%2Bsofq3bvjskFg1arDHFMdcgK&X-Amz-Signature=aaae9f8fbdce1b59621d19b160c36f5238b55d1eaecba764a6774697d6fa9c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TZAO5I4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIAujNnOPwq0KlAlehNBWnX5QchSPLUHWGVVg4jngp%2BsiAiEA1o%2Fo4%2F30em%2BFO829nzVeR41aSh6YqiM38PbDwmdCn%2BAqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTEcAqVN%2Fs%2F3BhiFSrcAxPuEP0l5vwwZ9gTKDXM%2BbOMA6TwyJX2%2B%2BzBIpYcWL7oKGj%2BB90iu5lVcClKtv6qu74BWhaoobDVcqNiugCvW22awIeNqo6tGc75Q9b%2F5D06WeoFU8Az5kuREVZlrbNPGix%2B7A9rxHcr%2FI7Ola93F3HERB1yT2mLH4TeanEOg1dWv0fXJKbn0iyxuzyHS7S7xNLGIRXr3kaMsERQituVZY%2FfnZA8R%2FZ2GdZy5seJ7tQQm3g62S77oCJBkOjIJ3FSdzWOREcmdPtTNr3heoyVMsLa%2B9lSIRcF2HJduckczNBtxGyicoE0N7FjoBkl19qD0m%2FiR4njXSJy0PneR0K4sRmCZjY7IG8QZfmY9TlQuZLG8FjuugOopd4QcMEuDR6zpN%2BD1qQb3Hn1qdCuu7cYzu4Ba8F30Wo%2FJcUKOnhRgB8lDyrz8K85doVr867rM7JWcUujH0%2F5vjaxuyoNttSQP9jR6QgOLBy1ZWDnvBj%2BNjfEBm%2B56OeZTKXB6%2FpqWn8IwQ0bLDZSRI5Y4HRwQLqDDz3MUKj0mg5AWZcVELBI7MrvUldmku4yQ70R92bnElJy455aQm2yqfz%2BCFN5aCNihbQEMDlNdODlr%2FZHKE0eA04sa1tHWEqdqt5PUYngMK%2FI0MQGOqUBONDKBBW3B%2FElCxBlTlGMKsyX5CZKOGEyoU147kWo%2B53Db2Wq0Iu27BAw6nK6%2BlD9jjjNx%2FHIHJ4SyROXqVPupHj7Y1uVt6fXBo0aQBY5uBGEs%2F%2BDNz0EKXkRZrAft82BBIT8DBY3wH6K75VqCdPSwNBTBd0W60upqGMZT6y5ZpSRhZX4gH8n1agoHvJreYTqEfwNs%2BorIYRTPUw%2Fy6tY5suarkgy&X-Amz-Signature=b85a7a20a308871f541c999e86b42301d711431e77f5a33707bf829c0190bd6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4I6L2NO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIG2nNoRGQdgx9UR52ejPfTICzZ8D8L%2FLtBOK0jf%2FvOVsAiBqSMU%2B%2BkgJZeqP06glf7YZekSQNG78VLVkIq2bmuP23CqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAW%2BzIMDZqxaZNT0yKtwDYIDR4jOR%2Fv2%2FQGdXUCUzNHTwV5CGOcu4SGqUm8muJnYc2TThtIQsOfjHs%2BDZFAGRc6zvkT6P4Au1wXjzUxCzG%2FkYJvypCCEaSM29NXPePt3AgoHMGr3JFEp7KuVF4%2Bhl%2B9S1GkOnODJkmmB4IL4wEI%2FNfq%2Fx8LdfYbmBdczW65OZOmS60fSFXObiLI9myhkdQmxrnB02Z3r3GxYSqMpK4puz7DWtUdm6dovasWyUJLS%2BR7Ds6xj5v4emkH4g3rfL6U8AYZXfcLOLYAijP76vG3JV6JcJmboMDp82zYx5oZSwDGupLYwnIo1tluiROJDDaMUByo8GgA2jiGO5Zl09yXYWEDy2iJowOZFXMeDFFqbNdiBL7yplRKatJ%2Bc%2BLy9l9Q7FRz8ecOCpYbzhLM1odFypWzZd89Qhl4GFrkgH7GGNmB%2BmqtUF7CMISMkk%2BQKkPY6ERfLqZOWgA5zVnI8LFEzZZn%2FPLWUFAnghDUTO3VX4mSmtB4twlYcDE0taND4W6lN7oa%2BKvzewfTTfm8566i9xuJfzaL2dZV3ed%2FtHmU0r%2FD78jsg1NdW2ZMKcwnENLFh%2BfuiBGqxkvzHh0HJiePYbH7PRfvDM0ZupY5pfwxmF9ncDgAS1LQtjAFsw%2BcjQxAY6pgH7mfv%2F9XfBy98XjzBN3BgjujtDswzg5S9CNlzrCF2rf9Ak79tzkTW%2FOguAcpMK24lxnD99Dxlx5ve0JaicaTyLMuJZSeZ7aZGai2DerBaI3JJir91JnvOEGgDmzjf7BypLG0iJ0BM2bMBzFqz8mIeIj%2FjGZw4rjVLvPKtn1x%2FIxmXwWdP6EeDEA%2Bko0AqyvIJ%2FMEAG%2Bsofq3bvjskFg1arDHFMdcgK&X-Amz-Signature=b29e4ca5a384870bc21232090b0f3cb9e469751094058e2068f5902b70a9e554&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHI57565%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDuBqNa0Yp8iaD2Ne6lQ18fAD15SjAij4odev6rr80RywIhAKK28mNxDzBtU%2FMY925jfd6ueY179UtL2IMPtwVivo09KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8alICkqMLUAb5n%2F4q3APsFKgsY6V%2F0HsS4fHLxI%2FOEYy6t7U1VnlzddBNndUq0mIFgK9iW%2Bd2UGTzyBNoUbUk5PhldruFHjV4%2FsaOc5XNdj27ZnpdU%2FrZy41SYXvB0HUoKya8iVaLQFZzTsddcf5b9G2wY2NIkcYvcu0Oaj%2FWOkiUzUc5vy06fNiaLN7AL4iXLXMDQpZQdHERF3GfBUP%2BTQjgd8LnwQ%2B9SZdzVlnyBFpZBIAZfJApcaNSTf1Hr%2Bd9PqM8rxFufxnmyK6SSql5F%2B9apChYsADvaUCDXuZg6GXZXmh8M4a6jmWfheizMcx6bU0751HldlX32cp%2BHLncQnxKCcAUnPJSZYzcXKyGU41FQ4iyZFBBlmU8T1M3Iwhniyg6eiIBkS%2F0mLh3DCkj8Nwf7TV1GAyWJRMYgCom7tCkN16xQVJ8zbSCDbuQMos0eHxCzP6ME9oB9LUPJyO6slErsTk9DR4XToz7t1R43HkpgOBpCiHUOUOK8jQ9cy0HlZZcf1RptrLDGA15gIPW8i4gXPXfE7znRZgM6ReoQ03gTLSrimsAjfa904Rwlwn%2FZjhl%2BxjqKHL%2F8KCQnDC5LkmcYoCNDZ7YnlNUYpJtfKNtVrFz3017gynJl7I5AQq7rmN3N%2FkDk7iHNDDXyNDEBjqkAYpgX%2BK3fpxl8LbDCWVgTCo%2BJgOWcgVaeieuOhaByUgCyzp7ulbcNkfcTy7XyEOzFmE9py4xBVC2mmzQLlN%2FIMWEZDuqUm37lsU4%2BEavwEahcG5o%2FVT6S5Jp8wPVT%2F5Hkaqbm6PWC%2Fb0LZ2gkoU%2BC0AwISkA12YcdTNSPVtZVY4GbhptNLtVaPmi%2F0fHUqUa2At0EjB0RUf8uD8zoO5HZuYMvMD0&X-Amz-Signature=4fa9728bd92ba7244e77ab53ce309ccbc1e2a597762616d925b21cd6e3a9503a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663RHXZPT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIF1oMR6lZGg%2BXOCShzD28xVB0LW%2FL22tHhQg8pqBb7H4AiBj2c%2F%2FV41vVjttvJFIo2k7%2BPNCWr5MYSG%2Fd77Taw96diqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTbzQNfqYifDlwzsKKtwDh2LPetq0x9J%2B3M3rZ3QMJ2HGqM972O%2Brz7llIUEYC6aOC6ev5na6ZAvH2Bx9JGjBG6sq6QByAjraW%2BRRNjWhBk2pud6v8LliiIGMLWlIP4Jw1nbPWRqhwTvE%2FqAZ62%2BixMKfV21w9QUykNnQFeIGsYN59%2FwCMGxvsDOOQdAAx4JC0uLZ47%2Fl6D%2FcTDRsLYKj68Xgw%2BtETTiApat1t0eQ%2F2GSgRI4gvnkasrRPoanHJvUWGOE5EfYqcFb5QCNDy%2F64tcywohmWa3k0VLG0lhvnoGi2z%2Bawx6w%2BmWsR71stEK1H3z84ARAEldx%2BvKKOUfQArlkEaY0cAjaYRmpLmymlIq7YehfPP8bVOaG1dsqoZ%2BxDlSuZddR0OEc7%2Fyuw8xOwSO0PbPmjeuMB5%2BlONBgFzvqqRwYdbY61qBbzEYrzqjsy6NJiocy5efcnqSTah0KT5yYwbSoBqzQlyItKjjwZHguo9TMbuJ7PnHO%2BpFEe2ltUkh1mBKKbL405fKGY0iczUkyelXWTd6Q2PbclLYC7zLy9iQXipmDPHjjHDXUaJJeOJsyG3TFDeLdNfM97hOAbXGfxqQwIsVxU59fRFIJgbaVhz1ro95c3DeAXUtQRN7K6MZbJkmZnAxf7LAwssjQxAY6pgHWiGV%2BeMM1ntFRoRgGBBvjZPfGLAPdS5QAJIdWwCbnJGdkMJogdKSaYwUTho%2FO1ZV5YzoZ076xxu%2Ft9qHmrJ2dQhaqSA8o61Yd8%2B0vqrXwrekuvOACCCnT2xABTds28vjlQ6B7u1lh0IYch8eNicumM4EJgNYh117u2cgo0e4ba9c7OlxrT%2Ba5Pk8eR1Fgo6PBvdcwBTSPrMdx%2FwSBBBo%2BxWzItuFp&X-Amz-Signature=79d018f6496b9fc3b2cdf10166af84f0f9732919754b204e73ed991c97e0bcb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X257UCWG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCv11sRqvhLB1EdWMbXZ4adqr0OhQyV7VUP9FMFClu97wIgH8vwJ00HkHnuEn0Ys4taprj%2BLLALJ2%2BmXhk9MztQCSQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWUs76SVaXsjoy7OircA1hnd3o4ZPRHwF9E%2BzStwF0p6lgY7hwVKLMRKMZY5sosjby72uGqGpJlglkJVBB7mSvZ6z8lwz1FsW98UKCcdqs%2F3tDWhdbhpJmvBO5j8p3%2BeY6KrXVCDK%2Fjqak56S2aLFnPUvdAX7dZOX0Mw561Vy6SDZBCMZL2yjOYdyar9Qa79MjVREDsdgUVdzbYEOOtU3GCSgm40o6X3OrYwp6o%2F6TvgmfEG8lnkGlCF1wECHvblN2cnNIbNnC9zUKNdzCVNjMuLshHMej3h2t2GRvTtBo1VcqiqNvrxnEb9XFjAe6DSp1U6%2Fy8A49mG7PbMSpzwR01Eu53y8creifBMJ1g18pDKeofgrYoLdbrNptD73wA8aRvaRtbCsHmi%2FFqju2qw20DlQeWrI%2Fc6tBrf094GLz%2Fq%2BhQWSPSGB%2BWC2kc0Bc8QULcg9pyJIwSjho%2BEz0zjIf2M0O3O332qwssJYLD05S0CTj%2FYBPjIYDeM3lzQ5iM9YuRMzX%2BdzUQTum4IIxoVneUZ7BB6N5%2FPz4u06XqkkoVNi5nXglfUKvG%2BX5huu1iCTs80Cw6qAxEgPkJwRc%2B3OeqQEIZeZNQL0ipDVj4XVk2P%2BIfMsDgvKeCFEDspVx8ADd0rMXK7osI1pMBMJHI0MQGOqUBBOdf6b%2F3W3LsO8GdR2hkqdheUX822dWPX5RLmqD21KPB1FtvRR6jn6MiSDhx8YukWGiZbWtGm%2FEp4Ez0C6%2FCxRWP6bGzCY58bvh0mkj%2FtqntnxC%2BcMQZdA3yn5dt3xUys3j9d2nU0ps%2B1VFdf7mAkYQAa3DZ64Z3dWzsTogGjbR0ObFlcPeLUZ0rFjsEpgcg5kpjn4rpKF2KGDS9OQ8xxT069Y2G&X-Amz-Signature=528a27f3f5abe59a5e05525acdb9af1bbbb154781766d31896dc4e42395b9704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C2ZRHPJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIFVjzeO%2By0KTduOBMOM2MvX8sRUV3AjQkVj2aU%2FetFTIAiEAj3mf0D%2BlpCp8yu%2F6ffAaMhDOc9PqfxVq9JOAsJo5DlgqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMRPhlt68jwp2mLgXircA1GDTF80xiMgqzWc2c90rMr23vRLxUGBPG5%2FklLa5OqB%2Farxs39P1nEYSlNCqs5blXL%2BHenPRAdhEy1BwXPo4SsYUZZACd0Wgxv93LYu%2BQ7Vcl8jVGsoRFvbeS%2F8OalV0hwmjYvnlqZix2g69PrUjaQs8ei%2BbcEs%2BUzNUbMfqmahX3KosRXwt4iv3L2z%2B9WXbiG5uZCnc6Hv05l9d3%2Fa5QzYkWPT54yweK5FXBphHwtJDP2dJRh12iMwOyVITCdDGcW8Ogzt5beUru53VD40otOg5huT8%2BD%2FuYDD%2F0693uGaRiYiW4gjRKJWvCJ%2FXsrEPNu6hXaykX%2FKdNL3MecGzBD7UuOngOHQqtw%2FdBbFSvpoVDjcBGOTCY%2FQhMhnGolx15rnvvtYvaTQBtPtBvJz2oDK70svhiI2sc%2BIYFSZB7qIbJgRMgaICtR%2B8NhgQzPHyKr%2Bxs%2FI%2B8MBwxyr2ewuR49jSiKr1WKu4Bc0Dx5iQZIKlw7T4vHzuJzsIvGEELmqm8QkAfOvHYN1ECanTX%2B0I7M4khnbAiMKwcjDyqJB0XH0T0pc7fTHqe4IFijFQROIi0g0D2FJu%2F0qB8vCL8D15CiKk40cn58mr7vC%2BZK%2F9Sd38Fup6lzHP7sGH1pgMIbJ0MQGOqUB06fs93cpRWKRejooSpD6O9xyTdd%2ByRNxEFUFMIHXy9HCaZwgpbm8TCQfeDiUJ7Adg6lIG9ezB2OIG0bWnIN3RhICGVKq1o5FY8S%2B6qgS92iPwPrDsx22lnqQdzSBSVkEN32cDAvyo4vak2GRW1gqFaR0E5zKOjBHU9%2FZVXQTZwsq2sTgy0ErFZIJ6m5WptQTTyoC3Jtulr%2FTKK6bIrT50X0gbmB5&X-Amz-Signature=04fedbdb31e06114d4aca49677c0c6f117f85dedb9323107f0162eac5b28ae08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFJTEK4Z%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIAKqbvZz5HuInawVXSVpZRMdjcX8iM4Z1FHYlS9LsmVZAiAfJ%2FEl%2BVSm8%2F7orPmP6jDtar1mc%2F8jMp6LEkZG5eTmYCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFqwzZAquH7ULbLJgKtwDXjZbdLxW%2FBcOyCRzmsaDhMvPsRkSpf6KdiHjFVy2tW7o3gl5hvuhN%2B7ik1g1eY00fBP0z0upr2bBaukCKMC6zeKdhVxpn%2BB6EGKVMUFrlq7g53bw1fiU4l%2F59cw%2BC7l2oxOuBDkhMUbRrIyYH76wVy%2BB%2BURnuGkCQO539%2FABLJSIVTNL262NViG1zyJmcOBlhzMuiUBEu1ZoJuQ%2F3IX6nCFI4ow12pDEyiJ1BX2%2FtuPoLbxBCXuEX7zc%2BiuvQeX4GwCfC4y%2BQ7FnRbR97YRsIDTDilmj9rwNDMnkjWcPAXCPecZjrrZB69GHQ5mul%2ByUWhk01HQwibeuGj3QA83Tc%2FnKQortqkvkAVY2%2FFSeubDzCdY%2FTy5kVYArpg90F5NQ2hScnEHHBj6tf%2F4Vrb0o4YaxxcAzWgZcT92GDTO0YEF3NZlKLD8%2FeDVocHkQg1emnoHcZFno%2FdEkLl%2BJTX%2FI0TdYOx%2FPs%2FmllrCHWKXQrJv6L9yXbkbFOxvVkZAm9Es99H6hu3QkMH7vb5QRmpghHj0n%2FCjJsd4ddw1kLCCgU%2BK4oFIgZkoFL4K1fEbLdFxkepPBRjQyoqzmqrev%2F3AjTZWk4tL1x0PJtgFzpn9Ne%2BxcLzPB7SHc1WESTF4w7cjQxAY6pgENmlaQVq7v0rZA06iuTS53cpW5iW4N5CqXEBBfc4PJhztxAwUgNLfvZalmKd2dzlXCV9J4F7hAI0MsKCa7Mgm0079vvOYZIIbgDzJ2EHBL1L9zliQezoB8hbTsZc5s9ymUwMj3osfOe3dSSeQqHyhaDaeYyb3xwIDnGrsewwtUtA5U2WoKEgebwJwCkRCYm40B9jtapwQNQ6S03pzFy0DX8B10pR4L&X-Amz-Signature=b4a785f076befae9d14dfb8d31a1440388eca28092624eb78ce675993ec5969d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4I6L2NO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIG2nNoRGQdgx9UR52ejPfTICzZ8D8L%2FLtBOK0jf%2FvOVsAiBqSMU%2B%2BkgJZeqP06glf7YZekSQNG78VLVkIq2bmuP23CqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAW%2BzIMDZqxaZNT0yKtwDYIDR4jOR%2Fv2%2FQGdXUCUzNHTwV5CGOcu4SGqUm8muJnYc2TThtIQsOfjHs%2BDZFAGRc6zvkT6P4Au1wXjzUxCzG%2FkYJvypCCEaSM29NXPePt3AgoHMGr3JFEp7KuVF4%2Bhl%2B9S1GkOnODJkmmB4IL4wEI%2FNfq%2Fx8LdfYbmBdczW65OZOmS60fSFXObiLI9myhkdQmxrnB02Z3r3GxYSqMpK4puz7DWtUdm6dovasWyUJLS%2BR7Ds6xj5v4emkH4g3rfL6U8AYZXfcLOLYAijP76vG3JV6JcJmboMDp82zYx5oZSwDGupLYwnIo1tluiROJDDaMUByo8GgA2jiGO5Zl09yXYWEDy2iJowOZFXMeDFFqbNdiBL7yplRKatJ%2Bc%2BLy9l9Q7FRz8ecOCpYbzhLM1odFypWzZd89Qhl4GFrkgH7GGNmB%2BmqtUF7CMISMkk%2BQKkPY6ERfLqZOWgA5zVnI8LFEzZZn%2FPLWUFAnghDUTO3VX4mSmtB4twlYcDE0taND4W6lN7oa%2BKvzewfTTfm8566i9xuJfzaL2dZV3ed%2FtHmU0r%2FD78jsg1NdW2ZMKcwnENLFh%2BfuiBGqxkvzHh0HJiePYbH7PRfvDM0ZupY5pfwxmF9ncDgAS1LQtjAFsw%2BcjQxAY6pgH7mfv%2F9XfBy98XjzBN3BgjujtDswzg5S9CNlzrCF2rf9Ak79tzkTW%2FOguAcpMK24lxnD99Dxlx5ve0JaicaTyLMuJZSeZ7aZGai2DerBaI3JJir91JnvOEGgDmzjf7BypLG0iJ0BM2bMBzFqz8mIeIj%2FjGZw4rjVLvPKtn1x%2FIxmXwWdP6EeDEA%2Bko0AqyvIJ%2FMEAG%2Bsofq3bvjskFg1arDHFMdcgK&X-Amz-Signature=0d61eb998b411430ab810f5d6b62268f16c5d3af1229377161531ddfc239a8a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4I6L2NO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIG2nNoRGQdgx9UR52ejPfTICzZ8D8L%2FLtBOK0jf%2FvOVsAiBqSMU%2B%2BkgJZeqP06glf7YZekSQNG78VLVkIq2bmuP23CqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAW%2BzIMDZqxaZNT0yKtwDYIDR4jOR%2Fv2%2FQGdXUCUzNHTwV5CGOcu4SGqUm8muJnYc2TThtIQsOfjHs%2BDZFAGRc6zvkT6P4Au1wXjzUxCzG%2FkYJvypCCEaSM29NXPePt3AgoHMGr3JFEp7KuVF4%2Bhl%2B9S1GkOnODJkmmB4IL4wEI%2FNfq%2Fx8LdfYbmBdczW65OZOmS60fSFXObiLI9myhkdQmxrnB02Z3r3GxYSqMpK4puz7DWtUdm6dovasWyUJLS%2BR7Ds6xj5v4emkH4g3rfL6U8AYZXfcLOLYAijP76vG3JV6JcJmboMDp82zYx5oZSwDGupLYwnIo1tluiROJDDaMUByo8GgA2jiGO5Zl09yXYWEDy2iJowOZFXMeDFFqbNdiBL7yplRKatJ%2Bc%2BLy9l9Q7FRz8ecOCpYbzhLM1odFypWzZd89Qhl4GFrkgH7GGNmB%2BmqtUF7CMISMkk%2BQKkPY6ERfLqZOWgA5zVnI8LFEzZZn%2FPLWUFAnghDUTO3VX4mSmtB4twlYcDE0taND4W6lN7oa%2BKvzewfTTfm8566i9xuJfzaL2dZV3ed%2FtHmU0r%2FD78jsg1NdW2ZMKcwnENLFh%2BfuiBGqxkvzHh0HJiePYbH7PRfvDM0ZupY5pfwxmF9ncDgAS1LQtjAFsw%2BcjQxAY6pgH7mfv%2F9XfBy98XjzBN3BgjujtDswzg5S9CNlzrCF2rf9Ak79tzkTW%2FOguAcpMK24lxnD99Dxlx5ve0JaicaTyLMuJZSeZ7aZGai2DerBaI3JJir91JnvOEGgDmzjf7BypLG0iJ0BM2bMBzFqz8mIeIj%2FjGZw4rjVLvPKtn1x%2FIxmXwWdP6EeDEA%2Bko0AqyvIJ%2FMEAG%2Bsofq3bvjskFg1arDHFMdcgK&X-Amz-Signature=4e95a9e7bc6cd9eb0a626d3ecfecd5860cc20563b3cdba24360828cceda02fb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX6W7CSQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIEcbzealzhSN3a96%2FgUIIATjLrwV8%2F5yQObFA3Vm7q22AiB%2BvlUR82H3lUTd6gbrDKThNDBYABvWcOEyg%2F7qVoVaqSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2kDgTrBitflmKZ8vKtwDFmZWRy89t2SkIyH0kdr7A%2BomuCXTRNt4dwLxKf0IqQ3xM6Eif0aJmlXFhFjqZbsgfGH7PiPwJraiwqHTd1mKhXk2K7%2BLrP2B365DlqUdp0PplWUrsWy8o8SKZCgsNSuzP1v7%2FGhihFZCPIZ5sDUIbf9HlmrzSIWFfNHI1cF6x3zG0mwpipKilpmzlwGd8ULj629UJ8WhrBKflm5rgBo%2FqUjimhXpIPCuLaBKWF7ZDkGe31eYbExQQVQUmUO2ZQylb%2F9Lmga240KySSJudBiHELsddDLYbiZblSEpzgNaxv79qASNRmrwI%2BkuwvIxKYbYXdZfdZGG2%2BDM0%2BdyrNL0tf3ysAX%2FqGgKB1YhP%2FyHmqmYqTO%2FJ9%2Bx1KyhMEqnbhev6CwLIkpT%2B6pakFZ5j15BPB9EAAPZHBMPGkWS%2Bwri7rLn6oO1wt%2BsQSm%2F3XHHMgquxPABCVUDVAgu1bnkaZ1pgCyZttqYH5GKEKvac66xLnprrMncu0Q84BwkCLoechIcNOoEj3LQbb7gau%2FHVKfrisa0cYAVsh3VQPXzvrGX%2ByLpqXIFQoHRa4KIc3HhGQ7FaSpTXi7gDG9yaT9hkLcaxnnktdTzWTrNp0QheiUbPIP4lKDbKf2dO12DxYEw7sjQxAY6pgFDmGMQpyxXwc1rS3pGENTNUO2gTdcs8hUrronwK%2B5k9r8gMcOEImSJbjIQCo94Czs%2Fw8EY%2FnZa8OL5sS0uHB6B%2FbSm%2B94oNHZ5VdpPJ2YSdc0im%2BrbzRLmwtKyivt21z86XgsEwEIoVQ%2Bl9nqBPS4PsAl2OY8WISZDfQxJmjFyOL9xikEmJjqWdFmMk0y8ku64kYxc%2Bl5VVG6YH3%2FCCpT%2FiNdrVC%2Ff&X-Amz-Signature=22099cceab1a6a83efdeafdec2726295e5b8c3460e058a663e60dc9e2d237dfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX6W7CSQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIEcbzealzhSN3a96%2FgUIIATjLrwV8%2F5yQObFA3Vm7q22AiB%2BvlUR82H3lUTd6gbrDKThNDBYABvWcOEyg%2F7qVoVaqSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2kDgTrBitflmKZ8vKtwDFmZWRy89t2SkIyH0kdr7A%2BomuCXTRNt4dwLxKf0IqQ3xM6Eif0aJmlXFhFjqZbsgfGH7PiPwJraiwqHTd1mKhXk2K7%2BLrP2B365DlqUdp0PplWUrsWy8o8SKZCgsNSuzP1v7%2FGhihFZCPIZ5sDUIbf9HlmrzSIWFfNHI1cF6x3zG0mwpipKilpmzlwGd8ULj629UJ8WhrBKflm5rgBo%2FqUjimhXpIPCuLaBKWF7ZDkGe31eYbExQQVQUmUO2ZQylb%2F9Lmga240KySSJudBiHELsddDLYbiZblSEpzgNaxv79qASNRmrwI%2BkuwvIxKYbYXdZfdZGG2%2BDM0%2BdyrNL0tf3ysAX%2FqGgKB1YhP%2FyHmqmYqTO%2FJ9%2Bx1KyhMEqnbhev6CwLIkpT%2B6pakFZ5j15BPB9EAAPZHBMPGkWS%2Bwri7rLn6oO1wt%2BsQSm%2F3XHHMgquxPABCVUDVAgu1bnkaZ1pgCyZttqYH5GKEKvac66xLnprrMncu0Q84BwkCLoechIcNOoEj3LQbb7gau%2FHVKfrisa0cYAVsh3VQPXzvrGX%2ByLpqXIFQoHRa4KIc3HhGQ7FaSpTXi7gDG9yaT9hkLcaxnnktdTzWTrNp0QheiUbPIP4lKDbKf2dO12DxYEw7sjQxAY6pgFDmGMQpyxXwc1rS3pGENTNUO2gTdcs8hUrronwK%2B5k9r8gMcOEImSJbjIQCo94Czs%2Fw8EY%2FnZa8OL5sS0uHB6B%2FbSm%2B94oNHZ5VdpPJ2YSdc0im%2BrbzRLmwtKyivt21z86XgsEwEIoVQ%2Bl9nqBPS4PsAl2OY8WISZDfQxJmjFyOL9xikEmJjqWdFmMk0y8ku64kYxc%2Bl5VVG6YH3%2FCCpT%2FiNdrVC%2Ff&X-Amz-Signature=7b99d648b41c3a2dec3a1af7b8eb6510f76b4156d34fbbe3e86bb786644244e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX6W7CSQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIEcbzealzhSN3a96%2FgUIIATjLrwV8%2F5yQObFA3Vm7q22AiB%2BvlUR82H3lUTd6gbrDKThNDBYABvWcOEyg%2F7qVoVaqSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2kDgTrBitflmKZ8vKtwDFmZWRy89t2SkIyH0kdr7A%2BomuCXTRNt4dwLxKf0IqQ3xM6Eif0aJmlXFhFjqZbsgfGH7PiPwJraiwqHTd1mKhXk2K7%2BLrP2B365DlqUdp0PplWUrsWy8o8SKZCgsNSuzP1v7%2FGhihFZCPIZ5sDUIbf9HlmrzSIWFfNHI1cF6x3zG0mwpipKilpmzlwGd8ULj629UJ8WhrBKflm5rgBo%2FqUjimhXpIPCuLaBKWF7ZDkGe31eYbExQQVQUmUO2ZQylb%2F9Lmga240KySSJudBiHELsddDLYbiZblSEpzgNaxv79qASNRmrwI%2BkuwvIxKYbYXdZfdZGG2%2BDM0%2BdyrNL0tf3ysAX%2FqGgKB1YhP%2FyHmqmYqTO%2FJ9%2Bx1KyhMEqnbhev6CwLIkpT%2B6pakFZ5j15BPB9EAAPZHBMPGkWS%2Bwri7rLn6oO1wt%2BsQSm%2F3XHHMgquxPABCVUDVAgu1bnkaZ1pgCyZttqYH5GKEKvac66xLnprrMncu0Q84BwkCLoechIcNOoEj3LQbb7gau%2FHVKfrisa0cYAVsh3VQPXzvrGX%2ByLpqXIFQoHRa4KIc3HhGQ7FaSpTXi7gDG9yaT9hkLcaxnnktdTzWTrNp0QheiUbPIP4lKDbKf2dO12DxYEw7sjQxAY6pgFDmGMQpyxXwc1rS3pGENTNUO2gTdcs8hUrronwK%2B5k9r8gMcOEImSJbjIQCo94Czs%2Fw8EY%2FnZa8OL5sS0uHB6B%2FbSm%2B94oNHZ5VdpPJ2YSdc0im%2BrbzRLmwtKyivt21z86XgsEwEIoVQ%2Bl9nqBPS4PsAl2OY8WISZDfQxJmjFyOL9xikEmJjqWdFmMk0y8ku64kYxc%2Bl5VVG6YH3%2FCCpT%2FiNdrVC%2Ff&X-Amz-Signature=ad4cf8675629d6a7fdbbb6dbf9a85d9fe01b546dfc15bb13db85425d19fbab73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX6W7CSQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIEcbzealzhSN3a96%2FgUIIATjLrwV8%2F5yQObFA3Vm7q22AiB%2BvlUR82H3lUTd6gbrDKThNDBYABvWcOEyg%2F7qVoVaqSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2kDgTrBitflmKZ8vKtwDFmZWRy89t2SkIyH0kdr7A%2BomuCXTRNt4dwLxKf0IqQ3xM6Eif0aJmlXFhFjqZbsgfGH7PiPwJraiwqHTd1mKhXk2K7%2BLrP2B365DlqUdp0PplWUrsWy8o8SKZCgsNSuzP1v7%2FGhihFZCPIZ5sDUIbf9HlmrzSIWFfNHI1cF6x3zG0mwpipKilpmzlwGd8ULj629UJ8WhrBKflm5rgBo%2FqUjimhXpIPCuLaBKWF7ZDkGe31eYbExQQVQUmUO2ZQylb%2F9Lmga240KySSJudBiHELsddDLYbiZblSEpzgNaxv79qASNRmrwI%2BkuwvIxKYbYXdZfdZGG2%2BDM0%2BdyrNL0tf3ysAX%2FqGgKB1YhP%2FyHmqmYqTO%2FJ9%2Bx1KyhMEqnbhev6CwLIkpT%2B6pakFZ5j15BPB9EAAPZHBMPGkWS%2Bwri7rLn6oO1wt%2BsQSm%2F3XHHMgquxPABCVUDVAgu1bnkaZ1pgCyZttqYH5GKEKvac66xLnprrMncu0Q84BwkCLoechIcNOoEj3LQbb7gau%2FHVKfrisa0cYAVsh3VQPXzvrGX%2ByLpqXIFQoHRa4KIc3HhGQ7FaSpTXi7gDG9yaT9hkLcaxnnktdTzWTrNp0QheiUbPIP4lKDbKf2dO12DxYEw7sjQxAY6pgFDmGMQpyxXwc1rS3pGENTNUO2gTdcs8hUrronwK%2B5k9r8gMcOEImSJbjIQCo94Czs%2Fw8EY%2FnZa8OL5sS0uHB6B%2FbSm%2B94oNHZ5VdpPJ2YSdc0im%2BrbzRLmwtKyivt21z86XgsEwEIoVQ%2Bl9nqBPS4PsAl2OY8WISZDfQxJmjFyOL9xikEmJjqWdFmMk0y8ku64kYxc%2Bl5VVG6YH3%2FCCpT%2FiNdrVC%2Ff&X-Amz-Signature=af4fa1c4a03096127dcef32bf749c7c34f186176b6ef503231b2b3ec48041d5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX6W7CSQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIEcbzealzhSN3a96%2FgUIIATjLrwV8%2F5yQObFA3Vm7q22AiB%2BvlUR82H3lUTd6gbrDKThNDBYABvWcOEyg%2F7qVoVaqSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2kDgTrBitflmKZ8vKtwDFmZWRy89t2SkIyH0kdr7A%2BomuCXTRNt4dwLxKf0IqQ3xM6Eif0aJmlXFhFjqZbsgfGH7PiPwJraiwqHTd1mKhXk2K7%2BLrP2B365DlqUdp0PplWUrsWy8o8SKZCgsNSuzP1v7%2FGhihFZCPIZ5sDUIbf9HlmrzSIWFfNHI1cF6x3zG0mwpipKilpmzlwGd8ULj629UJ8WhrBKflm5rgBo%2FqUjimhXpIPCuLaBKWF7ZDkGe31eYbExQQVQUmUO2ZQylb%2F9Lmga240KySSJudBiHELsddDLYbiZblSEpzgNaxv79qASNRmrwI%2BkuwvIxKYbYXdZfdZGG2%2BDM0%2BdyrNL0tf3ysAX%2FqGgKB1YhP%2FyHmqmYqTO%2FJ9%2Bx1KyhMEqnbhev6CwLIkpT%2B6pakFZ5j15BPB9EAAPZHBMPGkWS%2Bwri7rLn6oO1wt%2BsQSm%2F3XHHMgquxPABCVUDVAgu1bnkaZ1pgCyZttqYH5GKEKvac66xLnprrMncu0Q84BwkCLoechIcNOoEj3LQbb7gau%2FHVKfrisa0cYAVsh3VQPXzvrGX%2ByLpqXIFQoHRa4KIc3HhGQ7FaSpTXi7gDG9yaT9hkLcaxnnktdTzWTrNp0QheiUbPIP4lKDbKf2dO12DxYEw7sjQxAY6pgFDmGMQpyxXwc1rS3pGENTNUO2gTdcs8hUrronwK%2B5k9r8gMcOEImSJbjIQCo94Czs%2Fw8EY%2FnZa8OL5sS0uHB6B%2FbSm%2B94oNHZ5VdpPJ2YSdc0im%2BrbzRLmwtKyivt21z86XgsEwEIoVQ%2Bl9nqBPS4PsAl2OY8WISZDfQxJmjFyOL9xikEmJjqWdFmMk0y8ku64kYxc%2Bl5VVG6YH3%2FCCpT%2FiNdrVC%2Ff&X-Amz-Signature=45269d9dace5b97f20282f6514972323b5db0e7b4e5aeb288a221474fdf144d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX6W7CSQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIEcbzealzhSN3a96%2FgUIIATjLrwV8%2F5yQObFA3Vm7q22AiB%2BvlUR82H3lUTd6gbrDKThNDBYABvWcOEyg%2F7qVoVaqSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2kDgTrBitflmKZ8vKtwDFmZWRy89t2SkIyH0kdr7A%2BomuCXTRNt4dwLxKf0IqQ3xM6Eif0aJmlXFhFjqZbsgfGH7PiPwJraiwqHTd1mKhXk2K7%2BLrP2B365DlqUdp0PplWUrsWy8o8SKZCgsNSuzP1v7%2FGhihFZCPIZ5sDUIbf9HlmrzSIWFfNHI1cF6x3zG0mwpipKilpmzlwGd8ULj629UJ8WhrBKflm5rgBo%2FqUjimhXpIPCuLaBKWF7ZDkGe31eYbExQQVQUmUO2ZQylb%2F9Lmga240KySSJudBiHELsddDLYbiZblSEpzgNaxv79qASNRmrwI%2BkuwvIxKYbYXdZfdZGG2%2BDM0%2BdyrNL0tf3ysAX%2FqGgKB1YhP%2FyHmqmYqTO%2FJ9%2Bx1KyhMEqnbhev6CwLIkpT%2B6pakFZ5j15BPB9EAAPZHBMPGkWS%2Bwri7rLn6oO1wt%2BsQSm%2F3XHHMgquxPABCVUDVAgu1bnkaZ1pgCyZttqYH5GKEKvac66xLnprrMncu0Q84BwkCLoechIcNOoEj3LQbb7gau%2FHVKfrisa0cYAVsh3VQPXzvrGX%2ByLpqXIFQoHRa4KIc3HhGQ7FaSpTXi7gDG9yaT9hkLcaxnnktdTzWTrNp0QheiUbPIP4lKDbKf2dO12DxYEw7sjQxAY6pgFDmGMQpyxXwc1rS3pGENTNUO2gTdcs8hUrronwK%2B5k9r8gMcOEImSJbjIQCo94Czs%2Fw8EY%2FnZa8OL5sS0uHB6B%2FbSm%2B94oNHZ5VdpPJ2YSdc0im%2BrbzRLmwtKyivt21z86XgsEwEIoVQ%2Bl9nqBPS4PsAl2OY8WISZDfQxJmjFyOL9xikEmJjqWdFmMk0y8ku64kYxc%2Bl5VVG6YH3%2FCCpT%2FiNdrVC%2Ff&X-Amz-Signature=8d81b4d56cd2e7c64f97c4de0b916a09c2648dc76fd679f8cf659be787e8c2dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX6W7CSQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIEcbzealzhSN3a96%2FgUIIATjLrwV8%2F5yQObFA3Vm7q22AiB%2BvlUR82H3lUTd6gbrDKThNDBYABvWcOEyg%2F7qVoVaqSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2kDgTrBitflmKZ8vKtwDFmZWRy89t2SkIyH0kdr7A%2BomuCXTRNt4dwLxKf0IqQ3xM6Eif0aJmlXFhFjqZbsgfGH7PiPwJraiwqHTd1mKhXk2K7%2BLrP2B365DlqUdp0PplWUrsWy8o8SKZCgsNSuzP1v7%2FGhihFZCPIZ5sDUIbf9HlmrzSIWFfNHI1cF6x3zG0mwpipKilpmzlwGd8ULj629UJ8WhrBKflm5rgBo%2FqUjimhXpIPCuLaBKWF7ZDkGe31eYbExQQVQUmUO2ZQylb%2F9Lmga240KySSJudBiHELsddDLYbiZblSEpzgNaxv79qASNRmrwI%2BkuwvIxKYbYXdZfdZGG2%2BDM0%2BdyrNL0tf3ysAX%2FqGgKB1YhP%2FyHmqmYqTO%2FJ9%2Bx1KyhMEqnbhev6CwLIkpT%2B6pakFZ5j15BPB9EAAPZHBMPGkWS%2Bwri7rLn6oO1wt%2BsQSm%2F3XHHMgquxPABCVUDVAgu1bnkaZ1pgCyZttqYH5GKEKvac66xLnprrMncu0Q84BwkCLoechIcNOoEj3LQbb7gau%2FHVKfrisa0cYAVsh3VQPXzvrGX%2ByLpqXIFQoHRa4KIc3HhGQ7FaSpTXi7gDG9yaT9hkLcaxnnktdTzWTrNp0QheiUbPIP4lKDbKf2dO12DxYEw7sjQxAY6pgFDmGMQpyxXwc1rS3pGENTNUO2gTdcs8hUrronwK%2B5k9r8gMcOEImSJbjIQCo94Czs%2Fw8EY%2FnZa8OL5sS0uHB6B%2FbSm%2B94oNHZ5VdpPJ2YSdc0im%2BrbzRLmwtKyivt21z86XgsEwEIoVQ%2Bl9nqBPS4PsAl2OY8WISZDfQxJmjFyOL9xikEmJjqWdFmMk0y8ku64kYxc%2Bl5VVG6YH3%2FCCpT%2FiNdrVC%2Ff&X-Amz-Signature=ad4cf8675629d6a7fdbbb6dbf9a85d9fe01b546dfc15bb13db85425d19fbab73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX6W7CSQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIEcbzealzhSN3a96%2FgUIIATjLrwV8%2F5yQObFA3Vm7q22AiB%2BvlUR82H3lUTd6gbrDKThNDBYABvWcOEyg%2F7qVoVaqSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2kDgTrBitflmKZ8vKtwDFmZWRy89t2SkIyH0kdr7A%2BomuCXTRNt4dwLxKf0IqQ3xM6Eif0aJmlXFhFjqZbsgfGH7PiPwJraiwqHTd1mKhXk2K7%2BLrP2B365DlqUdp0PplWUrsWy8o8SKZCgsNSuzP1v7%2FGhihFZCPIZ5sDUIbf9HlmrzSIWFfNHI1cF6x3zG0mwpipKilpmzlwGd8ULj629UJ8WhrBKflm5rgBo%2FqUjimhXpIPCuLaBKWF7ZDkGe31eYbExQQVQUmUO2ZQylb%2F9Lmga240KySSJudBiHELsddDLYbiZblSEpzgNaxv79qASNRmrwI%2BkuwvIxKYbYXdZfdZGG2%2BDM0%2BdyrNL0tf3ysAX%2FqGgKB1YhP%2FyHmqmYqTO%2FJ9%2Bx1KyhMEqnbhev6CwLIkpT%2B6pakFZ5j15BPB9EAAPZHBMPGkWS%2Bwri7rLn6oO1wt%2BsQSm%2F3XHHMgquxPABCVUDVAgu1bnkaZ1pgCyZttqYH5GKEKvac66xLnprrMncu0Q84BwkCLoechIcNOoEj3LQbb7gau%2FHVKfrisa0cYAVsh3VQPXzvrGX%2ByLpqXIFQoHRa4KIc3HhGQ7FaSpTXi7gDG9yaT9hkLcaxnnktdTzWTrNp0QheiUbPIP4lKDbKf2dO12DxYEw7sjQxAY6pgFDmGMQpyxXwc1rS3pGENTNUO2gTdcs8hUrronwK%2B5k9r8gMcOEImSJbjIQCo94Czs%2Fw8EY%2FnZa8OL5sS0uHB6B%2FbSm%2B94oNHZ5VdpPJ2YSdc0im%2BrbzRLmwtKyivt21z86XgsEwEIoVQ%2Bl9nqBPS4PsAl2OY8WISZDfQxJmjFyOL9xikEmJjqWdFmMk0y8ku64kYxc%2Bl5VVG6YH3%2FCCpT%2FiNdrVC%2Ff&X-Amz-Signature=929d5bd502743a96f1437f2b83232ca004b8affb0c765c270ec19bd7b60e375a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX6W7CSQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIEcbzealzhSN3a96%2FgUIIATjLrwV8%2F5yQObFA3Vm7q22AiB%2BvlUR82H3lUTd6gbrDKThNDBYABvWcOEyg%2F7qVoVaqSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2kDgTrBitflmKZ8vKtwDFmZWRy89t2SkIyH0kdr7A%2BomuCXTRNt4dwLxKf0IqQ3xM6Eif0aJmlXFhFjqZbsgfGH7PiPwJraiwqHTd1mKhXk2K7%2BLrP2B365DlqUdp0PplWUrsWy8o8SKZCgsNSuzP1v7%2FGhihFZCPIZ5sDUIbf9HlmrzSIWFfNHI1cF6x3zG0mwpipKilpmzlwGd8ULj629UJ8WhrBKflm5rgBo%2FqUjimhXpIPCuLaBKWF7ZDkGe31eYbExQQVQUmUO2ZQylb%2F9Lmga240KySSJudBiHELsddDLYbiZblSEpzgNaxv79qASNRmrwI%2BkuwvIxKYbYXdZfdZGG2%2BDM0%2BdyrNL0tf3ysAX%2FqGgKB1YhP%2FyHmqmYqTO%2FJ9%2Bx1KyhMEqnbhev6CwLIkpT%2B6pakFZ5j15BPB9EAAPZHBMPGkWS%2Bwri7rLn6oO1wt%2BsQSm%2F3XHHMgquxPABCVUDVAgu1bnkaZ1pgCyZttqYH5GKEKvac66xLnprrMncu0Q84BwkCLoechIcNOoEj3LQbb7gau%2FHVKfrisa0cYAVsh3VQPXzvrGX%2ByLpqXIFQoHRa4KIc3HhGQ7FaSpTXi7gDG9yaT9hkLcaxnnktdTzWTrNp0QheiUbPIP4lKDbKf2dO12DxYEw7sjQxAY6pgFDmGMQpyxXwc1rS3pGENTNUO2gTdcs8hUrronwK%2B5k9r8gMcOEImSJbjIQCo94Czs%2Fw8EY%2FnZa8OL5sS0uHB6B%2FbSm%2B94oNHZ5VdpPJ2YSdc0im%2BrbzRLmwtKyivt21z86XgsEwEIoVQ%2Bl9nqBPS4PsAl2OY8WISZDfQxJmjFyOL9xikEmJjqWdFmMk0y8ku64kYxc%2Bl5VVG6YH3%2FCCpT%2FiNdrVC%2Ff&X-Amz-Signature=0152fa7bb2d1c03749e76554ab22903f9265468779a42a5d00b6cea221215893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX6W7CSQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIEcbzealzhSN3a96%2FgUIIATjLrwV8%2F5yQObFA3Vm7q22AiB%2BvlUR82H3lUTd6gbrDKThNDBYABvWcOEyg%2F7qVoVaqSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2kDgTrBitflmKZ8vKtwDFmZWRy89t2SkIyH0kdr7A%2BomuCXTRNt4dwLxKf0IqQ3xM6Eif0aJmlXFhFjqZbsgfGH7PiPwJraiwqHTd1mKhXk2K7%2BLrP2B365DlqUdp0PplWUrsWy8o8SKZCgsNSuzP1v7%2FGhihFZCPIZ5sDUIbf9HlmrzSIWFfNHI1cF6x3zG0mwpipKilpmzlwGd8ULj629UJ8WhrBKflm5rgBo%2FqUjimhXpIPCuLaBKWF7ZDkGe31eYbExQQVQUmUO2ZQylb%2F9Lmga240KySSJudBiHELsddDLYbiZblSEpzgNaxv79qASNRmrwI%2BkuwvIxKYbYXdZfdZGG2%2BDM0%2BdyrNL0tf3ysAX%2FqGgKB1YhP%2FyHmqmYqTO%2FJ9%2Bx1KyhMEqnbhev6CwLIkpT%2B6pakFZ5j15BPB9EAAPZHBMPGkWS%2Bwri7rLn6oO1wt%2BsQSm%2F3XHHMgquxPABCVUDVAgu1bnkaZ1pgCyZttqYH5GKEKvac66xLnprrMncu0Q84BwkCLoechIcNOoEj3LQbb7gau%2FHVKfrisa0cYAVsh3VQPXzvrGX%2ByLpqXIFQoHRa4KIc3HhGQ7FaSpTXi7gDG9yaT9hkLcaxnnktdTzWTrNp0QheiUbPIP4lKDbKf2dO12DxYEw7sjQxAY6pgFDmGMQpyxXwc1rS3pGENTNUO2gTdcs8hUrronwK%2B5k9r8gMcOEImSJbjIQCo94Czs%2Fw8EY%2FnZa8OL5sS0uHB6B%2FbSm%2B94oNHZ5VdpPJ2YSdc0im%2BrbzRLmwtKyivt21z86XgsEwEIoVQ%2Bl9nqBPS4PsAl2OY8WISZDfQxJmjFyOL9xikEmJjqWdFmMk0y8ku64kYxc%2Bl5VVG6YH3%2FCCpT%2FiNdrVC%2Ff&X-Amz-Signature=ccc1bc8250ea0339d19b0f92181285507c2cb3c8821fdf39b985680a57ce4c6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
