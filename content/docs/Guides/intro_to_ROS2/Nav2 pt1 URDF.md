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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EH7WH2G%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKj8JGQpWcWp3y6kVh03qNq4OmiCokV%2ByH3pf51grikAIgPUcdKjrhemK%2FmkSWWg9s9JlnERZO9FGbQ6v9EDDitMcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDK4IdqgY9NOBT8LmXCrcA0FUn2JB0XmkabylpUiaAjksHFtmibb2sGokK3ex6q02DwyEC7cF3RDL1L%2BEC29QuzzUJlyoMH3Lic9yWGi67sZF%2FCvR4qpwvx2Nqgd43Suw9J319hd47sgorjZGaNOpOBB%2Be7zZ76%2BGVmRNDvC4QU96J34mBhYbgVegpAUOgVqSmEVkHxIZNGzeevicGwS2y5uotO%2BL5Bi%2B%2B10FwmfFcvQL3NZ%2BqCZjhz8W9vTy%2BYj5Q8bau0CKyaC9pAZYm06RBjyQdMKcd1dix2XMKLskARYLSwsXa83j%2F5RO821hQ2kwUu3HyFvhW9kRuRukaPvSt2GzOn%2Fgmt%2BJbL1Sm2tA3ZLrPtzN6I8OC8CDgNZTeihQoWdAp2jQ5l9B6EfZHaSbuGIgAld9QV2PRO%2BJpSbuTGmDYgQpzbQFDpZ4JtywYGESxZn0ruqABp%2Fg7rNgQjH5NCgokLERyMctjuc4fLFtNpOt5m1ySzJgd1PRQHaJnSqDIcW%2FF%2BzLymLyfppaUaND8NZPXiE1frz7SUilX2fQB5w50ZVHgT9AB8Suu74urOMpR2XBePHj%2FKA0H06ivO1XLDpp4tcENgGhrfUzYXiUVwUBQ2YaTJMroepv945uiBswcsTLe4CYzASMIV%2F9MI%2BOuMQGOqUB3UaROw4cj5luSiceEgWyiXnKoINYJqeb%2FMMGDkPAjrCYXOZATPq0f%2Bwq5jWICR%2BxJW2O5ikMBeaU9C5Dp2PCYxVYvhsGX9SUHMu1PQAgb7VKfg0j3Z9OaTMnrPqvsy5qrUcyljTCqKJTPPpkvZoIAyZlpnEklqHAJSeXuNawXYYzjGPqAlZyY4LbqURl3BjCj%2FlCpWhf2hyfkX9wNwpWSfVQDUd1&X-Amz-Signature=a20e2774e15c50e2c27d43615e22e15bc5e07a3e3a2253132d1e05f2c2070c41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EH7WH2G%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKj8JGQpWcWp3y6kVh03qNq4OmiCokV%2ByH3pf51grikAIgPUcdKjrhemK%2FmkSWWg9s9JlnERZO9FGbQ6v9EDDitMcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDK4IdqgY9NOBT8LmXCrcA0FUn2JB0XmkabylpUiaAjksHFtmibb2sGokK3ex6q02DwyEC7cF3RDL1L%2BEC29QuzzUJlyoMH3Lic9yWGi67sZF%2FCvR4qpwvx2Nqgd43Suw9J319hd47sgorjZGaNOpOBB%2Be7zZ76%2BGVmRNDvC4QU96J34mBhYbgVegpAUOgVqSmEVkHxIZNGzeevicGwS2y5uotO%2BL5Bi%2B%2B10FwmfFcvQL3NZ%2BqCZjhz8W9vTy%2BYj5Q8bau0CKyaC9pAZYm06RBjyQdMKcd1dix2XMKLskARYLSwsXa83j%2F5RO821hQ2kwUu3HyFvhW9kRuRukaPvSt2GzOn%2Fgmt%2BJbL1Sm2tA3ZLrPtzN6I8OC8CDgNZTeihQoWdAp2jQ5l9B6EfZHaSbuGIgAld9QV2PRO%2BJpSbuTGmDYgQpzbQFDpZ4JtywYGESxZn0ruqABp%2Fg7rNgQjH5NCgokLERyMctjuc4fLFtNpOt5m1ySzJgd1PRQHaJnSqDIcW%2FF%2BzLymLyfppaUaND8NZPXiE1frz7SUilX2fQB5w50ZVHgT9AB8Suu74urOMpR2XBePHj%2FKA0H06ivO1XLDpp4tcENgGhrfUzYXiUVwUBQ2YaTJMroepv945uiBswcsTLe4CYzASMIV%2F9MI%2BOuMQGOqUB3UaROw4cj5luSiceEgWyiXnKoINYJqeb%2FMMGDkPAjrCYXOZATPq0f%2Bwq5jWICR%2BxJW2O5ikMBeaU9C5Dp2PCYxVYvhsGX9SUHMu1PQAgb7VKfg0j3Z9OaTMnrPqvsy5qrUcyljTCqKJTPPpkvZoIAyZlpnEklqHAJSeXuNawXYYzjGPqAlZyY4LbqURl3BjCj%2FlCpWhf2hyfkX9wNwpWSfVQDUd1&X-Amz-Signature=f93e62a8fd4a1ab5389eb16ccc0084fad67c15c811a72a2c1f1d37a0fd0bf625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EH7WH2G%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKj8JGQpWcWp3y6kVh03qNq4OmiCokV%2ByH3pf51grikAIgPUcdKjrhemK%2FmkSWWg9s9JlnERZO9FGbQ6v9EDDitMcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDK4IdqgY9NOBT8LmXCrcA0FUn2JB0XmkabylpUiaAjksHFtmibb2sGokK3ex6q02DwyEC7cF3RDL1L%2BEC29QuzzUJlyoMH3Lic9yWGi67sZF%2FCvR4qpwvx2Nqgd43Suw9J319hd47sgorjZGaNOpOBB%2Be7zZ76%2BGVmRNDvC4QU96J34mBhYbgVegpAUOgVqSmEVkHxIZNGzeevicGwS2y5uotO%2BL5Bi%2B%2B10FwmfFcvQL3NZ%2BqCZjhz8W9vTy%2BYj5Q8bau0CKyaC9pAZYm06RBjyQdMKcd1dix2XMKLskARYLSwsXa83j%2F5RO821hQ2kwUu3HyFvhW9kRuRukaPvSt2GzOn%2Fgmt%2BJbL1Sm2tA3ZLrPtzN6I8OC8CDgNZTeihQoWdAp2jQ5l9B6EfZHaSbuGIgAld9QV2PRO%2BJpSbuTGmDYgQpzbQFDpZ4JtywYGESxZn0ruqABp%2Fg7rNgQjH5NCgokLERyMctjuc4fLFtNpOt5m1ySzJgd1PRQHaJnSqDIcW%2FF%2BzLymLyfppaUaND8NZPXiE1frz7SUilX2fQB5w50ZVHgT9AB8Suu74urOMpR2XBePHj%2FKA0H06ivO1XLDpp4tcENgGhrfUzYXiUVwUBQ2YaTJMroepv945uiBswcsTLe4CYzASMIV%2F9MI%2BOuMQGOqUB3UaROw4cj5luSiceEgWyiXnKoINYJqeb%2FMMGDkPAjrCYXOZATPq0f%2Bwq5jWICR%2BxJW2O5ikMBeaU9C5Dp2PCYxVYvhsGX9SUHMu1PQAgb7VKfg0j3Z9OaTMnrPqvsy5qrUcyljTCqKJTPPpkvZoIAyZlpnEklqHAJSeXuNawXYYzjGPqAlZyY4LbqURl3BjCj%2FlCpWhf2hyfkX9wNwpWSfVQDUd1&X-Amz-Signature=c211f2566a44182b14c8d6efde4f72140cb509b37d58fd94cc7987253f774d53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EH7WH2G%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKj8JGQpWcWp3y6kVh03qNq4OmiCokV%2ByH3pf51grikAIgPUcdKjrhemK%2FmkSWWg9s9JlnERZO9FGbQ6v9EDDitMcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDK4IdqgY9NOBT8LmXCrcA0FUn2JB0XmkabylpUiaAjksHFtmibb2sGokK3ex6q02DwyEC7cF3RDL1L%2BEC29QuzzUJlyoMH3Lic9yWGi67sZF%2FCvR4qpwvx2Nqgd43Suw9J319hd47sgorjZGaNOpOBB%2Be7zZ76%2BGVmRNDvC4QU96J34mBhYbgVegpAUOgVqSmEVkHxIZNGzeevicGwS2y5uotO%2BL5Bi%2B%2B10FwmfFcvQL3NZ%2BqCZjhz8W9vTy%2BYj5Q8bau0CKyaC9pAZYm06RBjyQdMKcd1dix2XMKLskARYLSwsXa83j%2F5RO821hQ2kwUu3HyFvhW9kRuRukaPvSt2GzOn%2Fgmt%2BJbL1Sm2tA3ZLrPtzN6I8OC8CDgNZTeihQoWdAp2jQ5l9B6EfZHaSbuGIgAld9QV2PRO%2BJpSbuTGmDYgQpzbQFDpZ4JtywYGESxZn0ruqABp%2Fg7rNgQjH5NCgokLERyMctjuc4fLFtNpOt5m1ySzJgd1PRQHaJnSqDIcW%2FF%2BzLymLyfppaUaND8NZPXiE1frz7SUilX2fQB5w50ZVHgT9AB8Suu74urOMpR2XBePHj%2FKA0H06ivO1XLDpp4tcENgGhrfUzYXiUVwUBQ2YaTJMroepv945uiBswcsTLe4CYzASMIV%2F9MI%2BOuMQGOqUB3UaROw4cj5luSiceEgWyiXnKoINYJqeb%2FMMGDkPAjrCYXOZATPq0f%2Bwq5jWICR%2BxJW2O5ikMBeaU9C5Dp2PCYxVYvhsGX9SUHMu1PQAgb7VKfg0j3Z9OaTMnrPqvsy5qrUcyljTCqKJTPPpkvZoIAyZlpnEklqHAJSeXuNawXYYzjGPqAlZyY4LbqURl3BjCj%2FlCpWhf2hyfkX9wNwpWSfVQDUd1&X-Amz-Signature=e1610af89376b183a43931d53b850bf5248c3ba9632cc539e1140b70b3ccb491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EH7WH2G%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKj8JGQpWcWp3y6kVh03qNq4OmiCokV%2ByH3pf51grikAIgPUcdKjrhemK%2FmkSWWg9s9JlnERZO9FGbQ6v9EDDitMcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDK4IdqgY9NOBT8LmXCrcA0FUn2JB0XmkabylpUiaAjksHFtmibb2sGokK3ex6q02DwyEC7cF3RDL1L%2BEC29QuzzUJlyoMH3Lic9yWGi67sZF%2FCvR4qpwvx2Nqgd43Suw9J319hd47sgorjZGaNOpOBB%2Be7zZ76%2BGVmRNDvC4QU96J34mBhYbgVegpAUOgVqSmEVkHxIZNGzeevicGwS2y5uotO%2BL5Bi%2B%2B10FwmfFcvQL3NZ%2BqCZjhz8W9vTy%2BYj5Q8bau0CKyaC9pAZYm06RBjyQdMKcd1dix2XMKLskARYLSwsXa83j%2F5RO821hQ2kwUu3HyFvhW9kRuRukaPvSt2GzOn%2Fgmt%2BJbL1Sm2tA3ZLrPtzN6I8OC8CDgNZTeihQoWdAp2jQ5l9B6EfZHaSbuGIgAld9QV2PRO%2BJpSbuTGmDYgQpzbQFDpZ4JtywYGESxZn0ruqABp%2Fg7rNgQjH5NCgokLERyMctjuc4fLFtNpOt5m1ySzJgd1PRQHaJnSqDIcW%2FF%2BzLymLyfppaUaND8NZPXiE1frz7SUilX2fQB5w50ZVHgT9AB8Suu74urOMpR2XBePHj%2FKA0H06ivO1XLDpp4tcENgGhrfUzYXiUVwUBQ2YaTJMroepv945uiBswcsTLe4CYzASMIV%2F9MI%2BOuMQGOqUB3UaROw4cj5luSiceEgWyiXnKoINYJqeb%2FMMGDkPAjrCYXOZATPq0f%2Bwq5jWICR%2BxJW2O5ikMBeaU9C5Dp2PCYxVYvhsGX9SUHMu1PQAgb7VKfg0j3Z9OaTMnrPqvsy5qrUcyljTCqKJTPPpkvZoIAyZlpnEklqHAJSeXuNawXYYzjGPqAlZyY4LbqURl3BjCj%2FlCpWhf2hyfkX9wNwpWSfVQDUd1&X-Amz-Signature=0dadbef286ce33d695d3916d27c6fcc8d6b48f2c58486c3a63af81d84715d7af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EH7WH2G%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKj8JGQpWcWp3y6kVh03qNq4OmiCokV%2ByH3pf51grikAIgPUcdKjrhemK%2FmkSWWg9s9JlnERZO9FGbQ6v9EDDitMcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDK4IdqgY9NOBT8LmXCrcA0FUn2JB0XmkabylpUiaAjksHFtmibb2sGokK3ex6q02DwyEC7cF3RDL1L%2BEC29QuzzUJlyoMH3Lic9yWGi67sZF%2FCvR4qpwvx2Nqgd43Suw9J319hd47sgorjZGaNOpOBB%2Be7zZ76%2BGVmRNDvC4QU96J34mBhYbgVegpAUOgVqSmEVkHxIZNGzeevicGwS2y5uotO%2BL5Bi%2B%2B10FwmfFcvQL3NZ%2BqCZjhz8W9vTy%2BYj5Q8bau0CKyaC9pAZYm06RBjyQdMKcd1dix2XMKLskARYLSwsXa83j%2F5RO821hQ2kwUu3HyFvhW9kRuRukaPvSt2GzOn%2Fgmt%2BJbL1Sm2tA3ZLrPtzN6I8OC8CDgNZTeihQoWdAp2jQ5l9B6EfZHaSbuGIgAld9QV2PRO%2BJpSbuTGmDYgQpzbQFDpZ4JtywYGESxZn0ruqABp%2Fg7rNgQjH5NCgokLERyMctjuc4fLFtNpOt5m1ySzJgd1PRQHaJnSqDIcW%2FF%2BzLymLyfppaUaND8NZPXiE1frz7SUilX2fQB5w50ZVHgT9AB8Suu74urOMpR2XBePHj%2FKA0H06ivO1XLDpp4tcENgGhrfUzYXiUVwUBQ2YaTJMroepv945uiBswcsTLe4CYzASMIV%2F9MI%2BOuMQGOqUB3UaROw4cj5luSiceEgWyiXnKoINYJqeb%2FMMGDkPAjrCYXOZATPq0f%2Bwq5jWICR%2BxJW2O5ikMBeaU9C5Dp2PCYxVYvhsGX9SUHMu1PQAgb7VKfg0j3Z9OaTMnrPqvsy5qrUcyljTCqKJTPPpkvZoIAyZlpnEklqHAJSeXuNawXYYzjGPqAlZyY4LbqURl3BjCj%2FlCpWhf2hyfkX9wNwpWSfVQDUd1&X-Amz-Signature=f87470f5578a0aa9a7010e78a3f400f1a45d826df18fb904934374b465ee02a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EH7WH2G%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKj8JGQpWcWp3y6kVh03qNq4OmiCokV%2ByH3pf51grikAIgPUcdKjrhemK%2FmkSWWg9s9JlnERZO9FGbQ6v9EDDitMcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDK4IdqgY9NOBT8LmXCrcA0FUn2JB0XmkabylpUiaAjksHFtmibb2sGokK3ex6q02DwyEC7cF3RDL1L%2BEC29QuzzUJlyoMH3Lic9yWGi67sZF%2FCvR4qpwvx2Nqgd43Suw9J319hd47sgorjZGaNOpOBB%2Be7zZ76%2BGVmRNDvC4QU96J34mBhYbgVegpAUOgVqSmEVkHxIZNGzeevicGwS2y5uotO%2BL5Bi%2B%2B10FwmfFcvQL3NZ%2BqCZjhz8W9vTy%2BYj5Q8bau0CKyaC9pAZYm06RBjyQdMKcd1dix2XMKLskARYLSwsXa83j%2F5RO821hQ2kwUu3HyFvhW9kRuRukaPvSt2GzOn%2Fgmt%2BJbL1Sm2tA3ZLrPtzN6I8OC8CDgNZTeihQoWdAp2jQ5l9B6EfZHaSbuGIgAld9QV2PRO%2BJpSbuTGmDYgQpzbQFDpZ4JtywYGESxZn0ruqABp%2Fg7rNgQjH5NCgokLERyMctjuc4fLFtNpOt5m1ySzJgd1PRQHaJnSqDIcW%2FF%2BzLymLyfppaUaND8NZPXiE1frz7SUilX2fQB5w50ZVHgT9AB8Suu74urOMpR2XBePHj%2FKA0H06ivO1XLDpp4tcENgGhrfUzYXiUVwUBQ2YaTJMroepv945uiBswcsTLe4CYzASMIV%2F9MI%2BOuMQGOqUB3UaROw4cj5luSiceEgWyiXnKoINYJqeb%2FMMGDkPAjrCYXOZATPq0f%2Bwq5jWICR%2BxJW2O5ikMBeaU9C5Dp2PCYxVYvhsGX9SUHMu1PQAgb7VKfg0j3Z9OaTMnrPqvsy5qrUcyljTCqKJTPPpkvZoIAyZlpnEklqHAJSeXuNawXYYzjGPqAlZyY4LbqURl3BjCj%2FlCpWhf2hyfkX9wNwpWSfVQDUd1&X-Amz-Signature=cac2fcdd366610d3dd25084b0d6feef54a211dc85949f222d94fb44539b9516f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EH7WH2G%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKj8JGQpWcWp3y6kVh03qNq4OmiCokV%2ByH3pf51grikAIgPUcdKjrhemK%2FmkSWWg9s9JlnERZO9FGbQ6v9EDDitMcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDK4IdqgY9NOBT8LmXCrcA0FUn2JB0XmkabylpUiaAjksHFtmibb2sGokK3ex6q02DwyEC7cF3RDL1L%2BEC29QuzzUJlyoMH3Lic9yWGi67sZF%2FCvR4qpwvx2Nqgd43Suw9J319hd47sgorjZGaNOpOBB%2Be7zZ76%2BGVmRNDvC4QU96J34mBhYbgVegpAUOgVqSmEVkHxIZNGzeevicGwS2y5uotO%2BL5Bi%2B%2B10FwmfFcvQL3NZ%2BqCZjhz8W9vTy%2BYj5Q8bau0CKyaC9pAZYm06RBjyQdMKcd1dix2XMKLskARYLSwsXa83j%2F5RO821hQ2kwUu3HyFvhW9kRuRukaPvSt2GzOn%2Fgmt%2BJbL1Sm2tA3ZLrPtzN6I8OC8CDgNZTeihQoWdAp2jQ5l9B6EfZHaSbuGIgAld9QV2PRO%2BJpSbuTGmDYgQpzbQFDpZ4JtywYGESxZn0ruqABp%2Fg7rNgQjH5NCgokLERyMctjuc4fLFtNpOt5m1ySzJgd1PRQHaJnSqDIcW%2FF%2BzLymLyfppaUaND8NZPXiE1frz7SUilX2fQB5w50ZVHgT9AB8Suu74urOMpR2XBePHj%2FKA0H06ivO1XLDpp4tcENgGhrfUzYXiUVwUBQ2YaTJMroepv945uiBswcsTLe4CYzASMIV%2F9MI%2BOuMQGOqUB3UaROw4cj5luSiceEgWyiXnKoINYJqeb%2FMMGDkPAjrCYXOZATPq0f%2Bwq5jWICR%2BxJW2O5ikMBeaU9C5Dp2PCYxVYvhsGX9SUHMu1PQAgb7VKfg0j3Z9OaTMnrPqvsy5qrUcyljTCqKJTPPpkvZoIAyZlpnEklqHAJSeXuNawXYYzjGPqAlZyY4LbqURl3BjCj%2FlCpWhf2hyfkX9wNwpWSfVQDUd1&X-Amz-Signature=6a588bf21acc119bbb17da88f68ebda8868201e5391f44196a5412c1b77f5c18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EH7WH2G%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKj8JGQpWcWp3y6kVh03qNq4OmiCokV%2ByH3pf51grikAIgPUcdKjrhemK%2FmkSWWg9s9JlnERZO9FGbQ6v9EDDitMcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDK4IdqgY9NOBT8LmXCrcA0FUn2JB0XmkabylpUiaAjksHFtmibb2sGokK3ex6q02DwyEC7cF3RDL1L%2BEC29QuzzUJlyoMH3Lic9yWGi67sZF%2FCvR4qpwvx2Nqgd43Suw9J319hd47sgorjZGaNOpOBB%2Be7zZ76%2BGVmRNDvC4QU96J34mBhYbgVegpAUOgVqSmEVkHxIZNGzeevicGwS2y5uotO%2BL5Bi%2B%2B10FwmfFcvQL3NZ%2BqCZjhz8W9vTy%2BYj5Q8bau0CKyaC9pAZYm06RBjyQdMKcd1dix2XMKLskARYLSwsXa83j%2F5RO821hQ2kwUu3HyFvhW9kRuRukaPvSt2GzOn%2Fgmt%2BJbL1Sm2tA3ZLrPtzN6I8OC8CDgNZTeihQoWdAp2jQ5l9B6EfZHaSbuGIgAld9QV2PRO%2BJpSbuTGmDYgQpzbQFDpZ4JtywYGESxZn0ruqABp%2Fg7rNgQjH5NCgokLERyMctjuc4fLFtNpOt5m1ySzJgd1PRQHaJnSqDIcW%2FF%2BzLymLyfppaUaND8NZPXiE1frz7SUilX2fQB5w50ZVHgT9AB8Suu74urOMpR2XBePHj%2FKA0H06ivO1XLDpp4tcENgGhrfUzYXiUVwUBQ2YaTJMroepv945uiBswcsTLe4CYzASMIV%2F9MI%2BOuMQGOqUB3UaROw4cj5luSiceEgWyiXnKoINYJqeb%2FMMGDkPAjrCYXOZATPq0f%2Bwq5jWICR%2BxJW2O5ikMBeaU9C5Dp2PCYxVYvhsGX9SUHMu1PQAgb7VKfg0j3Z9OaTMnrPqvsy5qrUcyljTCqKJTPPpkvZoIAyZlpnEklqHAJSeXuNawXYYzjGPqAlZyY4LbqURl3BjCj%2FlCpWhf2hyfkX9wNwpWSfVQDUd1&X-Amz-Signature=fc0e5c324cbec0d3bb53a0e2e3352a9c9be0e56fd0df51dde64fdbd0ebd67213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EH7WH2G%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKj8JGQpWcWp3y6kVh03qNq4OmiCokV%2ByH3pf51grikAIgPUcdKjrhemK%2FmkSWWg9s9JlnERZO9FGbQ6v9EDDitMcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDK4IdqgY9NOBT8LmXCrcA0FUn2JB0XmkabylpUiaAjksHFtmibb2sGokK3ex6q02DwyEC7cF3RDL1L%2BEC29QuzzUJlyoMH3Lic9yWGi67sZF%2FCvR4qpwvx2Nqgd43Suw9J319hd47sgorjZGaNOpOBB%2Be7zZ76%2BGVmRNDvC4QU96J34mBhYbgVegpAUOgVqSmEVkHxIZNGzeevicGwS2y5uotO%2BL5Bi%2B%2B10FwmfFcvQL3NZ%2BqCZjhz8W9vTy%2BYj5Q8bau0CKyaC9pAZYm06RBjyQdMKcd1dix2XMKLskARYLSwsXa83j%2F5RO821hQ2kwUu3HyFvhW9kRuRukaPvSt2GzOn%2Fgmt%2BJbL1Sm2tA3ZLrPtzN6I8OC8CDgNZTeihQoWdAp2jQ5l9B6EfZHaSbuGIgAld9QV2PRO%2BJpSbuTGmDYgQpzbQFDpZ4JtywYGESxZn0ruqABp%2Fg7rNgQjH5NCgokLERyMctjuc4fLFtNpOt5m1ySzJgd1PRQHaJnSqDIcW%2FF%2BzLymLyfppaUaND8NZPXiE1frz7SUilX2fQB5w50ZVHgT9AB8Suu74urOMpR2XBePHj%2FKA0H06ivO1XLDpp4tcENgGhrfUzYXiUVwUBQ2YaTJMroepv945uiBswcsTLe4CYzASMIV%2F9MI%2BOuMQGOqUB3UaROw4cj5luSiceEgWyiXnKoINYJqeb%2FMMGDkPAjrCYXOZATPq0f%2Bwq5jWICR%2BxJW2O5ikMBeaU9C5Dp2PCYxVYvhsGX9SUHMu1PQAgb7VKfg0j3Z9OaTMnrPqvsy5qrUcyljTCqKJTPPpkvZoIAyZlpnEklqHAJSeXuNawXYYzjGPqAlZyY4LbqURl3BjCj%2FlCpWhf2hyfkX9wNwpWSfVQDUd1&X-Amz-Signature=0721bcd25283f7352cc7cff640b43352246d0a68153ece1b5ab5e26510c629fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXGI5R7H%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu3txyiwqxyJBd8iqmYBfRjUUQrWnVv4VngWUq6UvI6wIgWverl4IB%2FFp4SixhltsN42%2FzwPLrYJl%2FhlAVsn9uIs0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDISMW2xC4Y1L0Gg5kircA8ZevHVkGqZGdCGYb4megoQXYDVH8iyWZiVg8SK5ULS7cL6zKRoCoO8jSumF640A49GIP3QK3Qoamp47AeDoTldNtjS9o0JM5uCUTl5IgLVDdiV%2FH5qkt6fbbrKWhx4RTsZYl49iJh%2FNfym%2F5aUfEyDqfvdxZgs9mDFDY%2B5473QFxjaLoWzhnKlXbjLLif2876SoSVUETE%2B1uhpN6W00Afwqu7pibtGgsBJ%2B2HV2dux6NDuORCoolPJjWZLX5ioig4GBSuU4cae0j9CPZpvAh6mB4QMZhlgZoO8Sm%2B8W%2FccbngLe5DdP0C5jmPmuJIBw6azOfm23BEsdf8w5agIAwqGAM1atM2XsFxtqQIkadbEyRknGuCfEtKh1XK9XDL6EPLfoqDSPnwXLNoR2p7ZbFACW4KSFN4Ib7n0aJPk2KS4snYwyHB2irvPubEhB1Oss7iYRHSs3VPDfgzj1SaFT08yV45SoUChQspy7wMK86vgbcj9aNZVQzMJek0aiDqaUyHArD0NKh5ZCLn%2BZKsT%2BXikO9t%2BE86EXk3w61o5LhH4ab9Br3nc9KbAF295SVyIfGvX35b4kwnqQ7gSbAGf2G261X%2Fs1Xhr6sG2F350eUyLKwxKhNboV011eI34mMK2UuMQGOqUBqv4cur6QcbbKtPebVZ7c7RoK9Z8gnEJHe9OXgwwvEo6P72Un8vnHdhO5QuEHoxZ4CzdHH3dMM9iEPbIWft0D0cP8Xh7FrgQQyztW%2F0VfiGZVPyl1pRARyg%2B5ZrNSzhjKmjvbs0K5TLG%2BuBjQbHN8SfAxvs%2BFkjthEiNoi3DpQDApYVgFY%2F95fdzk6d8PkxVK6cQ3VdhrwEUeJ5HNDd%2FL8QktGJ3H&X-Amz-Signature=557279c5dea2a8d4520ecf50e524a2f8a27ece19cebdc24cd2c2d0ca5616735a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657J5LPH2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5pQRNMn0KGjcrMzO%2F1MTapoC4vHTLC13jGyVbDaLQZAiEAr6OWvqX%2FYzSnePwpue0h8ThnQPdS6EovH9E3EKp%2BLZAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNUujSa9XqrxLgnTJircA58%2BiDVlYIplI3Ml0ZANTLodMm3eJPO%2FAg%2BfpdYujpRWoP%2FqKlVR3XYBDlBgYKskeSTrFxWzj85HBvzBlNmZGSMm5oaLsAdJzhrrU6Q7zzfogDnKHrdUE8Sd8dUjviVihmjnSGunLCru%2F5hGYjnhP3yQubDQR0NXNTFCxEk8UW3NRyAWB0qK8mwJdVlToWdCcav1VIZc5SIpdrF%2F3%2FhAyuga0WHNAfyG5d%2BhqzQ79N3ptXIGLdVIXEWtt7NQyTXMmsk0QabPUe3CZLIsgznXq364iyAUTFceMago67o1qWQK7tfI3W9mWHUGLlNSZaGcgt4XjAwgXTVcQG1ChPHZ08FhfoMQ2KjrP%2B%2FEnb57aSP6HhYZxNWLqlCnWTBc22Gzgi56lQQ1D19FUBVj971NBB4%2FMIKBARY9bn5KzYG7PY3o2qaNd7EScDXIVLNr7wdB6ar8QpYMakQBJ%2BfJmZXoceLvUF04u%2FNDTDbitFtNIT6ZB0lFnBmh2UwXk4%2FSGcNqRl9TTozUV03DULHB5RewMxjHgQu%2F4wDgscaB0ArAds3OtoOSAwxw8eM4LJ%2FKNkHEw1HFRumSfwTkd7x71U%2FOp2oowEe%2BVFauYNNZW5%2FL4mDFAy%2F6RHd0jshQajsjMMuSuMQGOqUBpU6w4kja%2F13OAhXqTwiDowXLF5K5AHpPNMlxPd7Oq%2B6ZfGhVEB0uuDtMveV4RTntyTzya%2BEmb6L%2FJNgvO9qyGfETpucBBJBbpdqMqREk1%2Bd5hLKxbPzpUWDM5Gx%2BkLEXNGbVRXLPfI7EyI3QkTsATEQiMY2HJE3Ap8JomzIHgzqZUPvRhE1T%2Bp%2BWquvWH95d%2BwgWSoBmktJlPHSat5Uqtcc9yH%2BW&X-Amz-Signature=d4d2c60907d084a668d550ec85fa7d7a3746d51a1912c70a76aaed500463830b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPJ6CHUG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi9J5IpKFz1bxyxPAE2c%2F8%2Fe0N0Xm4Srox%2FZZifFNxhwIgVT2EL%2BHFAwRwlBQ9gJjOi6YN1Y%2BlzlGPli1tbSCAjrkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDFC3HJv5RcQjeB8kpircA6KUdxbW7ryQomHCuMe1Ilr59byLHejw9rpqhLyMMawn7flvzSK0ziZsVvTrWSmUAmfJJI3BMXaW5IEqy2ATIaa2TW4gxxZ3RgV0WNVLbfuST5Lvlb0fkrRKhg6breJXEcSZOKNC4QU82P8TEbRcWzFWpuZ0%2B5afwIMNtAkdUTdEDb9uI%2FwoUTFOANovKX9aaSd35E%2F0EqEal1aBVOHVFGU60V%2Bdvw6%2FfvpY3sDMN4pkjJREW38ahipGIXFevzXRrqa4qZUiDd%2BDhP5NgP4kl7lOV%2BBHVoyGMoWC%2BWngFaiHsaajr1ELitcx6UeiJxHO5pMNANJyPmaLNSue8h13cxXwpStPgamW%2BdAz77tXJ7NQqoH9WAE1ZsbMCdoV6cW%2BeHz98c64tXX91RVbhmvdt%2BN%2Ffacn6g5uq6G9REt2XM86Txweht1w%2BewXyKqLP91OPa%2Fwm%2FVoCw4SFqMAXjfBjgLPL4voNjVN4UDWqUxKbGC%2B5Vk9i5%2BFnMoy7E07aWj3ja%2F4xO2rWO7itp2eMxP8xToxY3WYqHlrkupVN%2B2bL8BiAHDMqyJFcAkdubLIEn7LhWclbGkHqj9ODPOKhCGWgmE6ktqtxV0a%2Fz5cjEzoXOzZ1PQXACFHhXj1l6E5MNmUuMQGOqUBNNktBN%2B8bUZ99VUIGJyHtEMW%2BvMNtUsfk9tynVixZObNoN6gUufcMEo3zSdUJRiFns4es1zMp4trPKpcBr6ylLV2zsGgtwwzqgwt7Bt7AzfVUx7mtHeFpznqAGICteEWDueHSybsCyY3olBtYk%2Bz%2FjcKJ4e2SaWl7II8ART%2B0IB2e2K61u%2F%2FgVOiLvddd6f4ZOwZpUixxa6NYp8%2FYMtNKLh9wcBW&X-Amz-Signature=54f8b1cdcc605fae91490cf395f240792adb42eb6469f291406df06b8535837d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EH7WH2G%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKj8JGQpWcWp3y6kVh03qNq4OmiCokV%2ByH3pf51grikAIgPUcdKjrhemK%2FmkSWWg9s9JlnERZO9FGbQ6v9EDDitMcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDK4IdqgY9NOBT8LmXCrcA0FUn2JB0XmkabylpUiaAjksHFtmibb2sGokK3ex6q02DwyEC7cF3RDL1L%2BEC29QuzzUJlyoMH3Lic9yWGi67sZF%2FCvR4qpwvx2Nqgd43Suw9J319hd47sgorjZGaNOpOBB%2Be7zZ76%2BGVmRNDvC4QU96J34mBhYbgVegpAUOgVqSmEVkHxIZNGzeevicGwS2y5uotO%2BL5Bi%2B%2B10FwmfFcvQL3NZ%2BqCZjhz8W9vTy%2BYj5Q8bau0CKyaC9pAZYm06RBjyQdMKcd1dix2XMKLskARYLSwsXa83j%2F5RO821hQ2kwUu3HyFvhW9kRuRukaPvSt2GzOn%2Fgmt%2BJbL1Sm2tA3ZLrPtzN6I8OC8CDgNZTeihQoWdAp2jQ5l9B6EfZHaSbuGIgAld9QV2PRO%2BJpSbuTGmDYgQpzbQFDpZ4JtywYGESxZn0ruqABp%2Fg7rNgQjH5NCgokLERyMctjuc4fLFtNpOt5m1ySzJgd1PRQHaJnSqDIcW%2FF%2BzLymLyfppaUaND8NZPXiE1frz7SUilX2fQB5w50ZVHgT9AB8Suu74urOMpR2XBePHj%2FKA0H06ivO1XLDpp4tcENgGhrfUzYXiUVwUBQ2YaTJMroepv945uiBswcsTLe4CYzASMIV%2F9MI%2BOuMQGOqUB3UaROw4cj5luSiceEgWyiXnKoINYJqeb%2FMMGDkPAjrCYXOZATPq0f%2Bwq5jWICR%2BxJW2O5ikMBeaU9C5Dp2PCYxVYvhsGX9SUHMu1PQAgb7VKfg0j3Z9OaTMnrPqvsy5qrUcyljTCqKJTPPpkvZoIAyZlpnEklqHAJSeXuNawXYYzjGPqAlZyY4LbqURl3BjCj%2FlCpWhf2hyfkX9wNwpWSfVQDUd1&X-Amz-Signature=f67efcaae1e605896e2a895b0e5e293908c5762e8ec2d6544918696bd9ae0de2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTU2GE2H%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFUv792qVXnjp71j%2BM93Oza79vlr4GZP%2FZ6qwQjBcTZwIhAKBuJLV%2BUPV2IbW9vPyyPJtTCfl%2BL1m9QrZfkaQ%2FVFymKv8DCBYQABoMNjM3NDIzMTgzODA1IgxMzW9IYSBygOWqC2cq3AOn4sEelXyAK7aMiL5oRi94bJZz%2B12GK6uVEHTpzDXrR5VqpWRvOHTVosva0WIzwJ5Jwx%2BWMA%2FVQQ9J3Wb6P1OGvvwIEYR8yioyIDA5GEjXwp%2FQF7NQgdf6TurWlY0gS1zWezF1IgOpvkOFz2ltatuJ%2FsK%2B3lEsUSpMZ0OVfyAIN5J8C0aaSUd%2FpKmF83A0Ea5tgn2VjbvGwfmNKx7mAw7rT6Lxf6avvrnd2sFe2asE0jeySZYrXd4w1LHxpGMdHG7oQgwA3klvT9AaqiSCtd0H%2F9V%2FexxXQyJbskVVpbbARfZRusP2XVO6uZJWrYvPiSUA0J8QKn5J7f6OdUotqAUKlgrC%2BGYR8J3hBi3gFegttNSpibpQr0%2FyOMM0iA3S11u4XSgg48TL8fDGjn1DOLCTxIrBlK5EJGsizkz%2BXw0CJAkjaEYkLBP9gitwZq%2F59vRJl66JKBBGKzMnRoVA3M6fmgWY4mrqkx76ysU49IePLLhET6Fm6%2F8mOtoTsgFVNBfE%2FxUtYiw6ywfNEgZD3u8S9rpzWGYiLqXd%2FI0WKxOPOp5yR%2BbTWVwOcS2qbOSv4lTPb4U5GtahvzF4V%2FvFZqafUsgmqk6Wg3bQocwvL6M1PuDKg7ItUkh9uhrNzDDXkbjEBjqkAdx9VXsqAyCKD9pbV63%2BywWPBUICSt1ZyqL2VUiCiMqWmS%2Bx6EpHYKgxi2X%2BQzLsqilYK9otYPHKoirfKGlud%2B%2B%2BKc%2FRb1ISZlndPB%2BayGUEVNKrflPDtpkVJzIh6UU6elAllNz%2Bp3ua1HPjuKFPobMxZnKaMAXJxfUWsIOaOzPvlfehW9tInfA15Hr2b046mL7G%2FkZ%2Bihz8k%2F6mM0cq%2BD8l%2Fx%2BQ&X-Amz-Signature=a7e92904239b10497d949bb9ac6eab974bb955da60a7bf44ef3e976f35c95246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EH7WH2G%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKj8JGQpWcWp3y6kVh03qNq4OmiCokV%2ByH3pf51grikAIgPUcdKjrhemK%2FmkSWWg9s9JlnERZO9FGbQ6v9EDDitMcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDK4IdqgY9NOBT8LmXCrcA0FUn2JB0XmkabylpUiaAjksHFtmibb2sGokK3ex6q02DwyEC7cF3RDL1L%2BEC29QuzzUJlyoMH3Lic9yWGi67sZF%2FCvR4qpwvx2Nqgd43Suw9J319hd47sgorjZGaNOpOBB%2Be7zZ76%2BGVmRNDvC4QU96J34mBhYbgVegpAUOgVqSmEVkHxIZNGzeevicGwS2y5uotO%2BL5Bi%2B%2B10FwmfFcvQL3NZ%2BqCZjhz8W9vTy%2BYj5Q8bau0CKyaC9pAZYm06RBjyQdMKcd1dix2XMKLskARYLSwsXa83j%2F5RO821hQ2kwUu3HyFvhW9kRuRukaPvSt2GzOn%2Fgmt%2BJbL1Sm2tA3ZLrPtzN6I8OC8CDgNZTeihQoWdAp2jQ5l9B6EfZHaSbuGIgAld9QV2PRO%2BJpSbuTGmDYgQpzbQFDpZ4JtywYGESxZn0ruqABp%2Fg7rNgQjH5NCgokLERyMctjuc4fLFtNpOt5m1ySzJgd1PRQHaJnSqDIcW%2FF%2BzLymLyfppaUaND8NZPXiE1frz7SUilX2fQB5w50ZVHgT9AB8Suu74urOMpR2XBePHj%2FKA0H06ivO1XLDpp4tcENgGhrfUzYXiUVwUBQ2YaTJMroepv945uiBswcsTLe4CYzASMIV%2F9MI%2BOuMQGOqUB3UaROw4cj5luSiceEgWyiXnKoINYJqeb%2FMMGDkPAjrCYXOZATPq0f%2Bwq5jWICR%2BxJW2O5ikMBeaU9C5Dp2PCYxVYvhsGX9SUHMu1PQAgb7VKfg0j3Z9OaTMnrPqvsy5qrUcyljTCqKJTPPpkvZoIAyZlpnEklqHAJSeXuNawXYYzjGPqAlZyY4LbqURl3BjCj%2FlCpWhf2hyfkX9wNwpWSfVQDUd1&X-Amz-Signature=d3a5f361ce381c85991d6575589d7224883aa30a2d5479d13f820b262b02e948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EOOIUMV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgRpEdWoRD1C25ZA%2FQiL7ny2k5E9v4QJLdmh6VGv19mAiEA3nsEC%2BIEWdGm8FjMUoQusk%2FQjjtNKJowac0iCsytgogq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDILO6ZYg%2FfvZ%2BmYrtSrcA4AU4O1wlnBOBPxdoFN6fqeGphT2mwxilxiGRRbVn2A5ZpPbRGeiAE6l9EZK1LtqJqxOib18jm4uvvQUkrZ7M5jr2KHH7aIKSCfVcgIk8SC%2FKPoVZQQFU%2F767e3oXwhcywq5HbXntBeA1DdSrLdFcn6HIKUUHJ318k7lpoxNIdg92B35EvyK1L8oOWhq7IV7VQcct9qLbxCI1s752cJVIGwAE8fA5vMjWLnAUKK55%2FrGSnoXgJ2dIgKKemeoJX2fKHjh7gGjjLbg%2FdQvcGJ496tDOf8iVwGi7fCds4qAFQCJnk%2F%2BWDHupMzkU7cFWSt07SzUeD%2BcCMgAuUQTFGyncSFQGHaewzrG5TSNoavPQCV5SXOA5kz7ERRVFMiCgWTjaUVvWTr8fJWqbG3vr8%2F6%2BmP3sqTKhwYiJXakmubzECMsxPFdMRLFKlhDfFcintVqoQxXo%2Bog9MfbIdGi0z1HqvQdr4pVNnexdAOruNCk6WL36RuHCs4u44m9rMwYZCHyG3ZeG9nBQP%2BzdOjWRpmNdE4jFSz2nDKlvLpL5Rhw%2FNnv%2BnmDKkfDAouFd%2FIWnyCONbJ5N%2BrUGI%2B1id8xPWv%2F9Gp2yT2utVI7z2P7bSxPAoVBzKFUGYbqd6BkLAv%2BMOeOuMQGOqUBszjDc1eMgUaWlpK8x7uZBOmii%2B%2Fwef5luTQmBE9lpw%2F9KNhKhZFeIX4Jwy8vNdhzLPz6YfQJWMcRB2LHx5Be62vZI%2BBSx95cwG%2F5GY7Gcjv5WKBrbCUOxGcHWKVBaVPyF4%2FhtQWGiglAGZGDT%2BNIP0jFAHjO%2BV26oHizqBHInfZkfb4JiCa80qVraQ1JRNe5JpIHak9F0NlmKac%2Fezm45Pcdeg08&X-Amz-Signature=e7e814e95c3f8d17b8f164e9c5ddd3d73267f9dd4e1a7731c33fdc1a45872637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EH7WH2G%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKj8JGQpWcWp3y6kVh03qNq4OmiCokV%2ByH3pf51grikAIgPUcdKjrhemK%2FmkSWWg9s9JlnERZO9FGbQ6v9EDDitMcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDK4IdqgY9NOBT8LmXCrcA0FUn2JB0XmkabylpUiaAjksHFtmibb2sGokK3ex6q02DwyEC7cF3RDL1L%2BEC29QuzzUJlyoMH3Lic9yWGi67sZF%2FCvR4qpwvx2Nqgd43Suw9J319hd47sgorjZGaNOpOBB%2Be7zZ76%2BGVmRNDvC4QU96J34mBhYbgVegpAUOgVqSmEVkHxIZNGzeevicGwS2y5uotO%2BL5Bi%2B%2B10FwmfFcvQL3NZ%2BqCZjhz8W9vTy%2BYj5Q8bau0CKyaC9pAZYm06RBjyQdMKcd1dix2XMKLskARYLSwsXa83j%2F5RO821hQ2kwUu3HyFvhW9kRuRukaPvSt2GzOn%2Fgmt%2BJbL1Sm2tA3ZLrPtzN6I8OC8CDgNZTeihQoWdAp2jQ5l9B6EfZHaSbuGIgAld9QV2PRO%2BJpSbuTGmDYgQpzbQFDpZ4JtywYGESxZn0ruqABp%2Fg7rNgQjH5NCgokLERyMctjuc4fLFtNpOt5m1ySzJgd1PRQHaJnSqDIcW%2FF%2BzLymLyfppaUaND8NZPXiE1frz7SUilX2fQB5w50ZVHgT9AB8Suu74urOMpR2XBePHj%2FKA0H06ivO1XLDpp4tcENgGhrfUzYXiUVwUBQ2YaTJMroepv945uiBswcsTLe4CYzASMIV%2F9MI%2BOuMQGOqUB3UaROw4cj5luSiceEgWyiXnKoINYJqeb%2FMMGDkPAjrCYXOZATPq0f%2Bwq5jWICR%2BxJW2O5ikMBeaU9C5Dp2PCYxVYvhsGX9SUHMu1PQAgb7VKfg0j3Z9OaTMnrPqvsy5qrUcyljTCqKJTPPpkvZoIAyZlpnEklqHAJSeXuNawXYYzjGPqAlZyY4LbqURl3BjCj%2FlCpWhf2hyfkX9wNwpWSfVQDUd1&X-Amz-Signature=66989d82041a9652c61cedee87424900440e4059d7538345276118e2a9491623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5HBGKOR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMU8Xk%2B3%2BRQxNSxU4PR4BCZthH34WXHDKKwCkljBO%2BfAIhANaV%2FOr1qQlBF3k2R3b3ilEV3fkxYbIYoCMvJv7Ps0xHKv8DCBYQABoMNjM3NDIzMTgzODA1IgyJSBvWJzLsrM8Ddlcq3APkdt8plH9OvucqyUAycPTg1qmvwVwqcFAG2Vn3V%2BOY3oLxtMLIsbbFjXTqirlCVefS4VwTVJk5pv0WtEzWP2hQ3%2FKOffw0oaC%2F0VGE%2F5haT4jFU5dtCjoxxnpbe4fpdpSYUPKnre9mCNTU7ghXGCJjNecxJ7NDyvwO3jHi5BPcRIu%2BFFJ%2Fw17Z697vc9k%2FcYn3zrTRNWhQbs7F4kh%2BQRD4NWY%2FwEZ35qBdBrI2KDjUY8vK4%2Br2uu%2FpNBik%2F295HwC0%2BP8UuQ2oKsyK0kp0W96%2FyGhdyspuRxOg9wnVC1GQnDJLhLx%2F%2B4oU70KLA%2F%2FLvk10D7OClA7Pl0EMIBXe1ZOTtGQCuVTzKsRskBLn%2FSbKABP8rZRu2Ld7ElV8Xz%2FU5X8i3aTldLsYz%2FYz5ZaChXiLphfv6yJ1n6j0ak6BZ8i0LuYwwpO1tCXPxLB2CSFfJoiOQPtnTvVrthIvkgpdGK4PLwbMowFYfncXMETrBNpSJ5PksaH40ZKM3iqKP02mUtlfMOxPjhZNpSIxSjhRu9kGtwACjORpo8Iq9B6BnljIwZmrhBzN20b65TElL9vkeaEzrpLC5c0w1cOd1YkEdfuw0bN4hDyj75q63WBP7RAclBzXn5y0M0J0C0WxjTDrkrjEBjqkAVVuLQPOyqNP%2BQaJ2CIqgnZiISA8xQWY3X23h6LRlWjb%2FHyC0X16GA7WcM5rGwKNM90ABGwymRQ0gCd0GoTih4hzEjJtriYtjCeHdp2s4AQdFbEcdeiFWcb3%2BX6XAj80TQOoic9qYKV9u9%2FgK9CfrkVrze3LIlIpNMTDxiyS3jpv96BeStZ5cnXyoAbIZCgotAJiQXBmEKe%2B%2FU4GtBKn2GPs3xu3&X-Amz-Signature=a3518a5b5cb35c564b82c3202bd44fe9a1e31094ef6c769604d1a9d2188bbf88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EH7WH2G%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKj8JGQpWcWp3y6kVh03qNq4OmiCokV%2ByH3pf51grikAIgPUcdKjrhemK%2FmkSWWg9s9JlnERZO9FGbQ6v9EDDitMcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDK4IdqgY9NOBT8LmXCrcA0FUn2JB0XmkabylpUiaAjksHFtmibb2sGokK3ex6q02DwyEC7cF3RDL1L%2BEC29QuzzUJlyoMH3Lic9yWGi67sZF%2FCvR4qpwvx2Nqgd43Suw9J319hd47sgorjZGaNOpOBB%2Be7zZ76%2BGVmRNDvC4QU96J34mBhYbgVegpAUOgVqSmEVkHxIZNGzeevicGwS2y5uotO%2BL5Bi%2B%2B10FwmfFcvQL3NZ%2BqCZjhz8W9vTy%2BYj5Q8bau0CKyaC9pAZYm06RBjyQdMKcd1dix2XMKLskARYLSwsXa83j%2F5RO821hQ2kwUu3HyFvhW9kRuRukaPvSt2GzOn%2Fgmt%2BJbL1Sm2tA3ZLrPtzN6I8OC8CDgNZTeihQoWdAp2jQ5l9B6EfZHaSbuGIgAld9QV2PRO%2BJpSbuTGmDYgQpzbQFDpZ4JtywYGESxZn0ruqABp%2Fg7rNgQjH5NCgokLERyMctjuc4fLFtNpOt5m1ySzJgd1PRQHaJnSqDIcW%2FF%2BzLymLyfppaUaND8NZPXiE1frz7SUilX2fQB5w50ZVHgT9AB8Suu74urOMpR2XBePHj%2FKA0H06ivO1XLDpp4tcENgGhrfUzYXiUVwUBQ2YaTJMroepv945uiBswcsTLe4CYzASMIV%2F9MI%2BOuMQGOqUB3UaROw4cj5luSiceEgWyiXnKoINYJqeb%2FMMGDkPAjrCYXOZATPq0f%2Bwq5jWICR%2BxJW2O5ikMBeaU9C5Dp2PCYxVYvhsGX9SUHMu1PQAgb7VKfg0j3Z9OaTMnrPqvsy5qrUcyljTCqKJTPPpkvZoIAyZlpnEklqHAJSeXuNawXYYzjGPqAlZyY4LbqURl3BjCj%2FlCpWhf2hyfkX9wNwpWSfVQDUd1&X-Amz-Signature=efec529f313b00ccea5940e62b9f48d9518f5f4dccf8e25d83cdf3dbf623a268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B6D7MXV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4f4y4%2BPhi0qmJQcLzKBchqcEgdRBmsyStrIY4iKL4yAiA%2FAOefHCIh%2FPnBL6YZW8E%2F3dbRcvibVfkLC8NtBq5Jeir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM%2BTOyDHI%2BbTHhxwCqKtwDm%2FytwB8lyV8su1iqN2L4c3IRx4xOrV80%2BiSi6ZDt%2FNNMMmiNZsbOi2qYxNsRvWLO6VIhnNM9GQFH5M3Vsr%2F%2BjNQewgWF7nWYG0uElVvv63chS7s8wIftUpnfL1DcYH2fK41eUJK1Y5tD8fODlQfUoOG2yyL6tTnCu1l1T0qqUtVkfjgYVaVxcuBfFwxXQ9xl5ZFbdCvqvo%2BwjxJ3fKVd0TEzzbVLA0ejOjjrqrTR9HFHYLYS%2B7KTGj3hMv7jxSde4ruJfQjZ4IHTcDbHA9DUHHpTuvfyrp%2BxllllKXSq4pgUXOtMSbU5fTM2zshk6UrHvDZpS2Q%2BR5w%2FMcvH7%2BbX3ghRCTeMvk7mWtnUO8rEknaYYB%2BwU7956%2FTNz%2FiGToFU7ft5BQ%2FfMotDL73hploaiA2aKm22lSLoHiFTghQ2OKY9mMAwUH7OAuuFTJxWhQU4FyL0Dz5oW3DP5OBuSNTg47Ba3bTud8v6mM7n5Oa0FIRFSYWIzWtYx4CQjO%2FroE%2F%2BA4QhL6IyyvQAFa0Jglk1Q47QAbDFMSvJpN3l5AfNz3k%2FuZ2%2FSnW8jDVYbKZt4G5vqxbeWzXHxbEe2U8Cz6yRUr7%2FvLKRLJxnFOK1Gy8qk%2FfqooydrTqiKxjGr%2B4wwpK4xAY6pgEVx0M%2Bs0Y9y2KYKacFo%2Fwp%2FHE0KWr5HFTGqFJeRHHXfL%2FMVzI%2F31NhXg%2FyDIT9M3QV7uXMPjeafAz2JM9nVM72YwWXY%2FHeLQKy2x5aLWXzfNko2J2rQo0DibUL2zD6PDmr6LklbAqJQxvkMoBquowA2UO6KaRn0hy3Rzn3NharrXciMhcqzSDSAUKHqnGs8vtaVqOZAJoFHiw2XYIkaam0vtlSQFWQ&X-Amz-Signature=35b154abe027fe42144416f2f7096e894d125cab7302b90df3882018b948214b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAFTHFX3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRB85aGJqwn7jcMjJjgr4cK%2FSLmpjjl8ARUb4Ia7sz4AiAsjqCQUs6H3LiXHrHQ87p%2BBx4JTvZTMtx8KrJ0GTKisSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMAGp3mAYx0km62KlUKtwDVRKiX8TxMT0z%2B%2F8VlKTIZm%2FNztRGLKUlOUUmMDJNUkGRrwQfx2B03KXKPAmUrurXEo5S90YzKqJeeulyQtPh4c6GecySSZMQ4g4j3Ofs6227BVvbBEDem2bYfflSJnldC28W1gNws0seLYJn%2BAouj0NYip8d%2F0J4xSg7WseyxhPCdfVGpdhq5sst7X3WEaW0lM8HMxaNOVDCUfFZbBtB9Nn%2BatRIPiijhhdNI95GHmfaXJzzv7TmdnYG%2FdB8bIkXYyZ96vVXmFTLm5qZ2FwALpQFNvOc%2BZKIgR8sZB6VyOQZQAWjokWvEe%2FwLT9lNmRltD8YBf%2B4gyorJmyZo8Pp1ZFcWeM%2Fbk%2FGsrDqYeipEqsjoIQ8b3G%2FE51ijb199YJ973YSTjfX7n8VK1MZAuPOH3PqL4gBvgRJ%2B5XqnYrJpOGvN9R3dKR0BFGNR3HXdBe1EVIyH9%2B%2B8oGF9kg2J3ijk%2F7Nk7URa%2Ftm9dd%2BO5i0ytrbOsAjZfOUFhV4yF5jUIrMuR8cwqp4YW6kmeFFf3%2BNmRNMINZIxXIww39ZNTsmFosj86pqRvdS6AQUJuqSpccYXt0EUn3jpz6cu3RwyDYtji%2BNCeN4t4Q6Ee7ORQrye2FRjDvPEOWCJ95N3B0wnou4xAY6pgGuL1JGgEsw%2BxqCmJyfd%2BtWa%2FceHfEJlsm9qvwzwK2tu6t68RsZxBLs0mQPU3z4MetR9TpiWuhJlswZ5WrNwz3LNnqQz8MFWcQkzlNPL5NRBQNOr8gMOplS%2BKkXvxVz5WeZ27i45%2FDN7E9olR0A7eKHsRINwsmnTyIPuWgg92ea1PCPtyH3BNvgE4lf69DCB2F1MwGyydla0z9aa66VQYzzRARbF4L1&X-Amz-Signature=47da36d5b47099911855efb4d960359118fb71a168775af9e61671bbfeaa0a63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LLHH6UX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDlZUpE64GumHgN12ckzn65XWRv57xLCxXG10KbfY6YAiBHcwa72rvdVfN2SmN%2BfZwOgzsJfaaSmhO1qXuIS9Adjyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMKZDywzq4qORN%2FHuHKtwDqzlBhNOumLvpDF%2FAZgBroLmN7cPvDlYbt8P8he26JfOAXfjyydPbi%2Fqx08IsH4UcG2U5lyEPPODnoSFgMkRlVdpKTz8GTo8VJsJe%2BJsALkQhHXyPGywgaAoBCo6MpfTcNy11r52pyxtOuZCqV%2B6lneZOruNNHEXwgooaiRjPi%2B6BcKIhomBGx0uOPitbjNaZ7IMtxl8%2FiANF40%2FjvObniUVuLhgNNJZPy5sQekhYWkhGFBeMUpo2mvNlHwKkNx6JU325Kfxfp75nCMeS0L8hNbSscxFEoGfMk7bYw9hPZKlhRGEY6CQhLqYtLHovYcxG3gSmpIH6J7dx5uKcrSNK32UYKFwjT6TzCXdlkT0cuKNFGCP9LVid0jQAlBmrt2bgOUVw4uJwGY6OcPkaJSyGvZgaf0d%2FpaQXc4dLLgyXDpt5GbqmhqK7x9Co%2BvAYnSmc8SE1Z%2FSi71X1T2pQ9Ku6tFZf9Fp5Tbhj9y6sZdPXW3MnJM0REUMDHq1HzHZxuXeJdN4ZbdUs%2FZSh874MTA7%2FM%2BROqqEyAk4BI5NIsLY1lyTwSnIaGq1kxbvxJXl5cCaXc%2F%2BXFVy2NT2qAchXdKAXkVXmw7ahISv2QOszz%2FdP9%2BhXJDc88tWRzF55VM8wrpS4xAY6pgFqxVC4tGUaCBX401yWZsL%2FnalBO1GJDMM7NYuWfS2RbKHY7jwC5PA4BPTuIAmVxWipI6512ARyKrLfeg9Hex4y%2BgDcN%2Fimu9sQ%2Bp0THmO8oDaI6l1Vs8tHovFFuXuvkVUgB7CDAuUEuIvKzXK%2FzDrat9jjBUgKTR2HPsTeebPCaPnDGOuHGYCE2IjU1uoHLhwMbh3RsVT2morkpIt%2B5YBCeCW21FnS&X-Amz-Signature=c038aaf13f85f2a45010b22903a7b466621dbe4b04d0e623d4c61a4a48d8ecfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NAKR2FZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMRg2zFh1oLIjbeRkLsl8rq2g4xmk2Z24rVpBs%2FtQ%2F%2BgIhAIvYkVlmpz74f0DpAE5K8%2FzdPlBoQ5u%2BDBP0ZPPMIehVKv8DCBYQABoMNjM3NDIzMTgzODA1IgyZWJRmBbkgwgveyH4q3ANFDGGWSh4tpxS3qXzHaTevlBuufhwnmEk6UMenB3yAEaarNKDx3sBCJSz8MMZL5i8kO86gEhwEOwBNbrC%2FmxTQNQQphByHL5%2BWWCB9tYW6WtDiIl14DWv7dvBd7Je79ohuXvcMr%2B5Izvl0GYtVmKovcPbY8s0%2FWGbfU99pK221I9fYKVQ0669Zr%2Ff66gtR57H1qT9MPS72kHo9jN7JBqR2j06FQ0liVuDMVuO3wda8vF0X7PK0exwxUw9Jz%2BbqCHd%2B6nYkE1UpsHuxO34oo4%2BcjP%2FFbHOVMPQzJo33l03GmTPdMG6gv6DW49oumimxg5t063iR8a5H6rd5tdwAyh1QRXKo4Tz07IfRaoop3lg5ndcfrohrGXjl8oKgaN1VCUAtWHu%2BmN374pDbAVDlsDYchbhUKW4fGW62mG7MrBPmaDrUxIYhoFDrK8Md5kKaAjUL%2BHs5M9wThDryielbO3CMI3VLl%2BOFgrl5pFNmX8QHDeIYnaTxuSaD3xw%2FP%2Bn8BbygVI1tiiLcSpNBVCl2ZEZCmqKdtb%2FTcRyIUgpv%2F%2F1qyx3P%2BkdIlydGhxESdVYN39ONmqb2XqyK6iMgkGwQO4AiuCUbkMQVZGuOVKbmuP7rVH10kqLZewo6YJXH1TCOlLjEBjqkAfphXrD9mGtXd0AmsFndrmAzjl%2FFK6y9mc5X2iW7Who6TmjM2cqGI8259PCgSrd6QMnpEB8fge9fJ%2F624cLvdRgYkhNZhv1K04cERuqpXIcXbBP9abC3bk6aICbXUv5VH49MMFNtig43oj7wfarB%2BF50l3Cd2UbBvX1iDtqC56o6wKTuPcHGgpWRbZ4AG75bp%2BQ9PzpJReoHxi5Y71DbUqNXQ0R9&X-Amz-Signature=803a94a6023f2498a7d3fdbee8c1c546bd72e8e4eb8b03ec9cb203dad3a972c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOGMG53W%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxxRRVuDm02gnmyap%2FcDbxP8jyk64Xkrkipgm%2Fg4BpOAiEA6DDbvMWGjoKxtx6kepC3iA%2FUt9gsdyQXJ108KXH%2BbvYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDA%2Bu54T%2FiPK%2F8bVGfCrcA7iT9RLZM5QQUN7YY9BPCbZLR3bCzmmBpt284%2BrmHv1RGZwa3uWfSxuM3GAq5Bt%2BMYoKDelpvZCSyv6r1td0qMVB%2FPQpBOruzRCI8O63jRgt82tRo07w3BjxuRWLqv%2FXXKrTpzJa8HUPGD4rGunFDigHj%2B%2BINjROBjwaTj9wkAe1QP0lxSBL9w7cRQXJdXzhMDcOib3QYlz4wzLQA4wxVvG3rRYz7Axq2kdIwwjU4nvzU3HImDX8ARRvhgaZTm8EXg3x8f5pOItV1d1A6ivBaWG6uXFJ7k64cGv55hWfbIwPNhorXzkrTl1Vehatt5MFC7HXXxGeImjdPNqhmkEdjxZNXJX8QmHVZ4woiJS5YiKVoTI%2FrGGXN1zjqpv4J%2FiPGQwJdec1iZOE4P01CTNuznWaGSsMgWkvyXDr%2By1NS8vr0agHS1%2BNH%2BEaTIzrlInlJnESLcp%2FGgtvFTz4U%2B5Jh4kbkpCSvvkpDeHTsOJsVSE1THwAM69cThKL%2BWOKAa48F8btUzU7dSkKIdkCso1ilnl8Kcca%2FBtNE8VH00%2F7hVbLX1Z0Hp3diqUj5KmZhZQOshoEv4xGn34C20owyede8rgtmPZElm7zMg0shf3uCmkCqYnR09C%2FlRrE75lIMNiRuMQGOqUBHDLtW0CtWZvhnrJ6SHh7a2r5wQkEx%2B315ILKaWeD05QcpdCco96nxTlZOPpt5yli27u%2BEfcvgGtokPe6NSOFYJvdtsTDPtiOQMH4n%2FWsHxSU%2Fbb5S6Y2rmYRrDuDV0JOpHUW0zb3uxI8naF101FRvvRf7Pk%2BnI6up9P9rYJSI%2Bd2ZYXYyfJngQh8z%2FFg2Gk3E0JoMbXFQmyzQzhHQBYA3IW5j32T&X-Amz-Signature=7065b8573f6768bc22fba78f835b91679e18dedbebb811f9242ed267d6536bb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EH7WH2G%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKj8JGQpWcWp3y6kVh03qNq4OmiCokV%2ByH3pf51grikAIgPUcdKjrhemK%2FmkSWWg9s9JlnERZO9FGbQ6v9EDDitMcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDK4IdqgY9NOBT8LmXCrcA0FUn2JB0XmkabylpUiaAjksHFtmibb2sGokK3ex6q02DwyEC7cF3RDL1L%2BEC29QuzzUJlyoMH3Lic9yWGi67sZF%2FCvR4qpwvx2Nqgd43Suw9J319hd47sgorjZGaNOpOBB%2Be7zZ76%2BGVmRNDvC4QU96J34mBhYbgVegpAUOgVqSmEVkHxIZNGzeevicGwS2y5uotO%2BL5Bi%2B%2B10FwmfFcvQL3NZ%2BqCZjhz8W9vTy%2BYj5Q8bau0CKyaC9pAZYm06RBjyQdMKcd1dix2XMKLskARYLSwsXa83j%2F5RO821hQ2kwUu3HyFvhW9kRuRukaPvSt2GzOn%2Fgmt%2BJbL1Sm2tA3ZLrPtzN6I8OC8CDgNZTeihQoWdAp2jQ5l9B6EfZHaSbuGIgAld9QV2PRO%2BJpSbuTGmDYgQpzbQFDpZ4JtywYGESxZn0ruqABp%2Fg7rNgQjH5NCgokLERyMctjuc4fLFtNpOt5m1ySzJgd1PRQHaJnSqDIcW%2FF%2BzLymLyfppaUaND8NZPXiE1frz7SUilX2fQB5w50ZVHgT9AB8Suu74urOMpR2XBePHj%2FKA0H06ivO1XLDpp4tcENgGhrfUzYXiUVwUBQ2YaTJMroepv945uiBswcsTLe4CYzASMIV%2F9MI%2BOuMQGOqUB3UaROw4cj5luSiceEgWyiXnKoINYJqeb%2FMMGDkPAjrCYXOZATPq0f%2Bwq5jWICR%2BxJW2O5ikMBeaU9C5Dp2PCYxVYvhsGX9SUHMu1PQAgb7VKfg0j3Z9OaTMnrPqvsy5qrUcyljTCqKJTPPpkvZoIAyZlpnEklqHAJSeXuNawXYYzjGPqAlZyY4LbqURl3BjCj%2FlCpWhf2hyfkX9wNwpWSfVQDUd1&X-Amz-Signature=dca4c8468df6570e6916a95cde56998bdaa4e7160e3fb3be02322befe54dc3d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EH7WH2G%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKj8JGQpWcWp3y6kVh03qNq4OmiCokV%2ByH3pf51grikAIgPUcdKjrhemK%2FmkSWWg9s9JlnERZO9FGbQ6v9EDDitMcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDK4IdqgY9NOBT8LmXCrcA0FUn2JB0XmkabylpUiaAjksHFtmibb2sGokK3ex6q02DwyEC7cF3RDL1L%2BEC29QuzzUJlyoMH3Lic9yWGi67sZF%2FCvR4qpwvx2Nqgd43Suw9J319hd47sgorjZGaNOpOBB%2Be7zZ76%2BGVmRNDvC4QU96J34mBhYbgVegpAUOgVqSmEVkHxIZNGzeevicGwS2y5uotO%2BL5Bi%2B%2B10FwmfFcvQL3NZ%2BqCZjhz8W9vTy%2BYj5Q8bau0CKyaC9pAZYm06RBjyQdMKcd1dix2XMKLskARYLSwsXa83j%2F5RO821hQ2kwUu3HyFvhW9kRuRukaPvSt2GzOn%2Fgmt%2BJbL1Sm2tA3ZLrPtzN6I8OC8CDgNZTeihQoWdAp2jQ5l9B6EfZHaSbuGIgAld9QV2PRO%2BJpSbuTGmDYgQpzbQFDpZ4JtywYGESxZn0ruqABp%2Fg7rNgQjH5NCgokLERyMctjuc4fLFtNpOt5m1ySzJgd1PRQHaJnSqDIcW%2FF%2BzLymLyfppaUaND8NZPXiE1frz7SUilX2fQB5w50ZVHgT9AB8Suu74urOMpR2XBePHj%2FKA0H06ivO1XLDpp4tcENgGhrfUzYXiUVwUBQ2YaTJMroepv945uiBswcsTLe4CYzASMIV%2F9MI%2BOuMQGOqUB3UaROw4cj5luSiceEgWyiXnKoINYJqeb%2FMMGDkPAjrCYXOZATPq0f%2Bwq5jWICR%2BxJW2O5ikMBeaU9C5Dp2PCYxVYvhsGX9SUHMu1PQAgb7VKfg0j3Z9OaTMnrPqvsy5qrUcyljTCqKJTPPpkvZoIAyZlpnEklqHAJSeXuNawXYYzjGPqAlZyY4LbqURl3BjCj%2FlCpWhf2hyfkX9wNwpWSfVQDUd1&X-Amz-Signature=70312df6b61c24f589c5ebeed5ed687c4b44a9f04bb21e933ccbd969acf92dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MC5LMJ3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtOGxcPLIEH5Lf5w%2Bos7GI%2BuhmDeZMXt1CyaaXelv5KAiEAhmQI9ZvW4Bnf18I89jmq4Rg63f9WSGFhhV0zvxuHMuMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEHy4bjwHE3jdox%2BoSrcA3Z98Cq0biQOVr05OvV%2Fv0uERycgrLroGbZdKTIGN9WORhyuLwYSgl7vm4vZ8tWzZYF2Z8rpjGLiuCE6QnfG5EGekTlhRXdVRLXUZzBJt6Id4OnI%2FPOwm77uFnlPF%2F596n7SSdvPff4qkIn6XOzEOEXyB2BLq6a8hbM%2BwHW%2BvjzPWZcKDsD2O4EgnBXLWExcPvMfzwGFpDomopc0hlslSGeNIKj2KeYGLGFp4HGy1D7CsFdw6YWDjgAVXP07x67g75RcCN1aw9BDqjHHtmrpKA8aOZso%2FEdRp3QjgYtyiHpOQBYGO0lK3Ts8Y4PUFtVIO%2FuYBkdgJ3gtg1nqcyqxdfiLoxFCgWNhLMAV9ysqDhOvzi12bHQY2YpKR6NFn39c%2BIuB4n7TPNf4v6tyBv97gT5oWwGSJp9%2BkhuQLh0%2FEqi9Urp55fe99U1pGAA5xavjbFeghixwmjrly0IGePALBxbUv0cQlyV%2Bmk1GAo9x3D5f8KnZIApmr6wiiHRf%2BK1Vxsf1gEvBkwjPJWA3exU%2BgiybQgkTP%2BIJF5kdoo2rKvlyCsRtU6Gw%2FfG%2Bg%2F9XqC5oOZQibhL%2BWz5THUU1jMph8m46uQGHp4aLdptGkLa0wUD1VKtGEYINULPCgPh3MNSJuMQGOqUBxXNfdJQ0D%2BQFL1aqFhaAVE7z5ChJzx8knPE88adYQTMPsJN1rddmlizoM%2FNPntSdFJbkzI%2Bb%2FYyh8jApMWE3ekr7T%2BfgOkgMTRkwFVt3WMial6w8LUryFJ8mpHxi2VpPjya2zNZoaK91GWVktoH5fwR6ILYFYpKoIEJBO%2BJtOjKmbd7ttfjih3Apf1vYRFLO1NVvwlUQqJPEp%2FPwzW2JQ1hBvYUz&X-Amz-Signature=495fa7fdaf55751c23cd67d6a90774971c684e3cdf1e646206943acd6e5b3c3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MC5LMJ3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtOGxcPLIEH5Lf5w%2Bos7GI%2BuhmDeZMXt1CyaaXelv5KAiEAhmQI9ZvW4Bnf18I89jmq4Rg63f9WSGFhhV0zvxuHMuMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEHy4bjwHE3jdox%2BoSrcA3Z98Cq0biQOVr05OvV%2Fv0uERycgrLroGbZdKTIGN9WORhyuLwYSgl7vm4vZ8tWzZYF2Z8rpjGLiuCE6QnfG5EGekTlhRXdVRLXUZzBJt6Id4OnI%2FPOwm77uFnlPF%2F596n7SSdvPff4qkIn6XOzEOEXyB2BLq6a8hbM%2BwHW%2BvjzPWZcKDsD2O4EgnBXLWExcPvMfzwGFpDomopc0hlslSGeNIKj2KeYGLGFp4HGy1D7CsFdw6YWDjgAVXP07x67g75RcCN1aw9BDqjHHtmrpKA8aOZso%2FEdRp3QjgYtyiHpOQBYGO0lK3Ts8Y4PUFtVIO%2FuYBkdgJ3gtg1nqcyqxdfiLoxFCgWNhLMAV9ysqDhOvzi12bHQY2YpKR6NFn39c%2BIuB4n7TPNf4v6tyBv97gT5oWwGSJp9%2BkhuQLh0%2FEqi9Urp55fe99U1pGAA5xavjbFeghixwmjrly0IGePALBxbUv0cQlyV%2Bmk1GAo9x3D5f8KnZIApmr6wiiHRf%2BK1Vxsf1gEvBkwjPJWA3exU%2BgiybQgkTP%2BIJF5kdoo2rKvlyCsRtU6Gw%2FfG%2Bg%2F9XqC5oOZQibhL%2BWz5THUU1jMph8m46uQGHp4aLdptGkLa0wUD1VKtGEYINULPCgPh3MNSJuMQGOqUBxXNfdJQ0D%2BQFL1aqFhaAVE7z5ChJzx8knPE88adYQTMPsJN1rddmlizoM%2FNPntSdFJbkzI%2Bb%2FYyh8jApMWE3ekr7T%2BfgOkgMTRkwFVt3WMial6w8LUryFJ8mpHxi2VpPjya2zNZoaK91GWVktoH5fwR6ILYFYpKoIEJBO%2BJtOjKmbd7ttfjih3Apf1vYRFLO1NVvwlUQqJPEp%2FPwzW2JQ1hBvYUz&X-Amz-Signature=324622192dbd8fb01242dcf9c5c8d396ab49ef3038312cc5fc885add771521c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MC5LMJ3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtOGxcPLIEH5Lf5w%2Bos7GI%2BuhmDeZMXt1CyaaXelv5KAiEAhmQI9ZvW4Bnf18I89jmq4Rg63f9WSGFhhV0zvxuHMuMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEHy4bjwHE3jdox%2BoSrcA3Z98Cq0biQOVr05OvV%2Fv0uERycgrLroGbZdKTIGN9WORhyuLwYSgl7vm4vZ8tWzZYF2Z8rpjGLiuCE6QnfG5EGekTlhRXdVRLXUZzBJt6Id4OnI%2FPOwm77uFnlPF%2F596n7SSdvPff4qkIn6XOzEOEXyB2BLq6a8hbM%2BwHW%2BvjzPWZcKDsD2O4EgnBXLWExcPvMfzwGFpDomopc0hlslSGeNIKj2KeYGLGFp4HGy1D7CsFdw6YWDjgAVXP07x67g75RcCN1aw9BDqjHHtmrpKA8aOZso%2FEdRp3QjgYtyiHpOQBYGO0lK3Ts8Y4PUFtVIO%2FuYBkdgJ3gtg1nqcyqxdfiLoxFCgWNhLMAV9ysqDhOvzi12bHQY2YpKR6NFn39c%2BIuB4n7TPNf4v6tyBv97gT5oWwGSJp9%2BkhuQLh0%2FEqi9Urp55fe99U1pGAA5xavjbFeghixwmjrly0IGePALBxbUv0cQlyV%2Bmk1GAo9x3D5f8KnZIApmr6wiiHRf%2BK1Vxsf1gEvBkwjPJWA3exU%2BgiybQgkTP%2BIJF5kdoo2rKvlyCsRtU6Gw%2FfG%2Bg%2F9XqC5oOZQibhL%2BWz5THUU1jMph8m46uQGHp4aLdptGkLa0wUD1VKtGEYINULPCgPh3MNSJuMQGOqUBxXNfdJQ0D%2BQFL1aqFhaAVE7z5ChJzx8knPE88adYQTMPsJN1rddmlizoM%2FNPntSdFJbkzI%2Bb%2FYyh8jApMWE3ekr7T%2BfgOkgMTRkwFVt3WMial6w8LUryFJ8mpHxi2VpPjya2zNZoaK91GWVktoH5fwR6ILYFYpKoIEJBO%2BJtOjKmbd7ttfjih3Apf1vYRFLO1NVvwlUQqJPEp%2FPwzW2JQ1hBvYUz&X-Amz-Signature=aa6622df68749a11b6acf6130b6c09f7b025bea8531d42e6878e71ca21546245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MC5LMJ3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtOGxcPLIEH5Lf5w%2Bos7GI%2BuhmDeZMXt1CyaaXelv5KAiEAhmQI9ZvW4Bnf18I89jmq4Rg63f9WSGFhhV0zvxuHMuMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEHy4bjwHE3jdox%2BoSrcA3Z98Cq0biQOVr05OvV%2Fv0uERycgrLroGbZdKTIGN9WORhyuLwYSgl7vm4vZ8tWzZYF2Z8rpjGLiuCE6QnfG5EGekTlhRXdVRLXUZzBJt6Id4OnI%2FPOwm77uFnlPF%2F596n7SSdvPff4qkIn6XOzEOEXyB2BLq6a8hbM%2BwHW%2BvjzPWZcKDsD2O4EgnBXLWExcPvMfzwGFpDomopc0hlslSGeNIKj2KeYGLGFp4HGy1D7CsFdw6YWDjgAVXP07x67g75RcCN1aw9BDqjHHtmrpKA8aOZso%2FEdRp3QjgYtyiHpOQBYGO0lK3Ts8Y4PUFtVIO%2FuYBkdgJ3gtg1nqcyqxdfiLoxFCgWNhLMAV9ysqDhOvzi12bHQY2YpKR6NFn39c%2BIuB4n7TPNf4v6tyBv97gT5oWwGSJp9%2BkhuQLh0%2FEqi9Urp55fe99U1pGAA5xavjbFeghixwmjrly0IGePALBxbUv0cQlyV%2Bmk1GAo9x3D5f8KnZIApmr6wiiHRf%2BK1Vxsf1gEvBkwjPJWA3exU%2BgiybQgkTP%2BIJF5kdoo2rKvlyCsRtU6Gw%2FfG%2Bg%2F9XqC5oOZQibhL%2BWz5THUU1jMph8m46uQGHp4aLdptGkLa0wUD1VKtGEYINULPCgPh3MNSJuMQGOqUBxXNfdJQ0D%2BQFL1aqFhaAVE7z5ChJzx8knPE88adYQTMPsJN1rddmlizoM%2FNPntSdFJbkzI%2Bb%2FYyh8jApMWE3ekr7T%2BfgOkgMTRkwFVt3WMial6w8LUryFJ8mpHxi2VpPjya2zNZoaK91GWVktoH5fwR6ILYFYpKoIEJBO%2BJtOjKmbd7ttfjih3Apf1vYRFLO1NVvwlUQqJPEp%2FPwzW2JQ1hBvYUz&X-Amz-Signature=5c329fc2c1ecc284249a365415303dee62a9b615a2699814f410c15f209929d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MC5LMJ3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtOGxcPLIEH5Lf5w%2Bos7GI%2BuhmDeZMXt1CyaaXelv5KAiEAhmQI9ZvW4Bnf18I89jmq4Rg63f9WSGFhhV0zvxuHMuMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEHy4bjwHE3jdox%2BoSrcA3Z98Cq0biQOVr05OvV%2Fv0uERycgrLroGbZdKTIGN9WORhyuLwYSgl7vm4vZ8tWzZYF2Z8rpjGLiuCE6QnfG5EGekTlhRXdVRLXUZzBJt6Id4OnI%2FPOwm77uFnlPF%2F596n7SSdvPff4qkIn6XOzEOEXyB2BLq6a8hbM%2BwHW%2BvjzPWZcKDsD2O4EgnBXLWExcPvMfzwGFpDomopc0hlslSGeNIKj2KeYGLGFp4HGy1D7CsFdw6YWDjgAVXP07x67g75RcCN1aw9BDqjHHtmrpKA8aOZso%2FEdRp3QjgYtyiHpOQBYGO0lK3Ts8Y4PUFtVIO%2FuYBkdgJ3gtg1nqcyqxdfiLoxFCgWNhLMAV9ysqDhOvzi12bHQY2YpKR6NFn39c%2BIuB4n7TPNf4v6tyBv97gT5oWwGSJp9%2BkhuQLh0%2FEqi9Urp55fe99U1pGAA5xavjbFeghixwmjrly0IGePALBxbUv0cQlyV%2Bmk1GAo9x3D5f8KnZIApmr6wiiHRf%2BK1Vxsf1gEvBkwjPJWA3exU%2BgiybQgkTP%2BIJF5kdoo2rKvlyCsRtU6Gw%2FfG%2Bg%2F9XqC5oOZQibhL%2BWz5THUU1jMph8m46uQGHp4aLdptGkLa0wUD1VKtGEYINULPCgPh3MNSJuMQGOqUBxXNfdJQ0D%2BQFL1aqFhaAVE7z5ChJzx8knPE88adYQTMPsJN1rddmlizoM%2FNPntSdFJbkzI%2Bb%2FYyh8jApMWE3ekr7T%2BfgOkgMTRkwFVt3WMial6w8LUryFJ8mpHxi2VpPjya2zNZoaK91GWVktoH5fwR6ILYFYpKoIEJBO%2BJtOjKmbd7ttfjih3Apf1vYRFLO1NVvwlUQqJPEp%2FPwzW2JQ1hBvYUz&X-Amz-Signature=f1151aa9697de9549bab7e32574bbaa61962ed71d12a61138db0a6022a7c369e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MC5LMJ3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtOGxcPLIEH5Lf5w%2Bos7GI%2BuhmDeZMXt1CyaaXelv5KAiEAhmQI9ZvW4Bnf18I89jmq4Rg63f9WSGFhhV0zvxuHMuMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEHy4bjwHE3jdox%2BoSrcA3Z98Cq0biQOVr05OvV%2Fv0uERycgrLroGbZdKTIGN9WORhyuLwYSgl7vm4vZ8tWzZYF2Z8rpjGLiuCE6QnfG5EGekTlhRXdVRLXUZzBJt6Id4OnI%2FPOwm77uFnlPF%2F596n7SSdvPff4qkIn6XOzEOEXyB2BLq6a8hbM%2BwHW%2BvjzPWZcKDsD2O4EgnBXLWExcPvMfzwGFpDomopc0hlslSGeNIKj2KeYGLGFp4HGy1D7CsFdw6YWDjgAVXP07x67g75RcCN1aw9BDqjHHtmrpKA8aOZso%2FEdRp3QjgYtyiHpOQBYGO0lK3Ts8Y4PUFtVIO%2FuYBkdgJ3gtg1nqcyqxdfiLoxFCgWNhLMAV9ysqDhOvzi12bHQY2YpKR6NFn39c%2BIuB4n7TPNf4v6tyBv97gT5oWwGSJp9%2BkhuQLh0%2FEqi9Urp55fe99U1pGAA5xavjbFeghixwmjrly0IGePALBxbUv0cQlyV%2Bmk1GAo9x3D5f8KnZIApmr6wiiHRf%2BK1Vxsf1gEvBkwjPJWA3exU%2BgiybQgkTP%2BIJF5kdoo2rKvlyCsRtU6Gw%2FfG%2Bg%2F9XqC5oOZQibhL%2BWz5THUU1jMph8m46uQGHp4aLdptGkLa0wUD1VKtGEYINULPCgPh3MNSJuMQGOqUBxXNfdJQ0D%2BQFL1aqFhaAVE7z5ChJzx8knPE88adYQTMPsJN1rddmlizoM%2FNPntSdFJbkzI%2Bb%2FYyh8jApMWE3ekr7T%2BfgOkgMTRkwFVt3WMial6w8LUryFJ8mpHxi2VpPjya2zNZoaK91GWVktoH5fwR6ILYFYpKoIEJBO%2BJtOjKmbd7ttfjih3Apf1vYRFLO1NVvwlUQqJPEp%2FPwzW2JQ1hBvYUz&X-Amz-Signature=89ba4285b79e200b4944e363ca02b3c3c46f41bbccb7e70ee1d44663295f15b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MC5LMJ3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtOGxcPLIEH5Lf5w%2Bos7GI%2BuhmDeZMXt1CyaaXelv5KAiEAhmQI9ZvW4Bnf18I89jmq4Rg63f9WSGFhhV0zvxuHMuMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEHy4bjwHE3jdox%2BoSrcA3Z98Cq0biQOVr05OvV%2Fv0uERycgrLroGbZdKTIGN9WORhyuLwYSgl7vm4vZ8tWzZYF2Z8rpjGLiuCE6QnfG5EGekTlhRXdVRLXUZzBJt6Id4OnI%2FPOwm77uFnlPF%2F596n7SSdvPff4qkIn6XOzEOEXyB2BLq6a8hbM%2BwHW%2BvjzPWZcKDsD2O4EgnBXLWExcPvMfzwGFpDomopc0hlslSGeNIKj2KeYGLGFp4HGy1D7CsFdw6YWDjgAVXP07x67g75RcCN1aw9BDqjHHtmrpKA8aOZso%2FEdRp3QjgYtyiHpOQBYGO0lK3Ts8Y4PUFtVIO%2FuYBkdgJ3gtg1nqcyqxdfiLoxFCgWNhLMAV9ysqDhOvzi12bHQY2YpKR6NFn39c%2BIuB4n7TPNf4v6tyBv97gT5oWwGSJp9%2BkhuQLh0%2FEqi9Urp55fe99U1pGAA5xavjbFeghixwmjrly0IGePALBxbUv0cQlyV%2Bmk1GAo9x3D5f8KnZIApmr6wiiHRf%2BK1Vxsf1gEvBkwjPJWA3exU%2BgiybQgkTP%2BIJF5kdoo2rKvlyCsRtU6Gw%2FfG%2Bg%2F9XqC5oOZQibhL%2BWz5THUU1jMph8m46uQGHp4aLdptGkLa0wUD1VKtGEYINULPCgPh3MNSJuMQGOqUBxXNfdJQ0D%2BQFL1aqFhaAVE7z5ChJzx8knPE88adYQTMPsJN1rddmlizoM%2FNPntSdFJbkzI%2Bb%2FYyh8jApMWE3ekr7T%2BfgOkgMTRkwFVt3WMial6w8LUryFJ8mpHxi2VpPjya2zNZoaK91GWVktoH5fwR6ILYFYpKoIEJBO%2BJtOjKmbd7ttfjih3Apf1vYRFLO1NVvwlUQqJPEp%2FPwzW2JQ1hBvYUz&X-Amz-Signature=aa6622df68749a11b6acf6130b6c09f7b025bea8531d42e6878e71ca21546245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MC5LMJ3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtOGxcPLIEH5Lf5w%2Bos7GI%2BuhmDeZMXt1CyaaXelv5KAiEAhmQI9ZvW4Bnf18I89jmq4Rg63f9WSGFhhV0zvxuHMuMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEHy4bjwHE3jdox%2BoSrcA3Z98Cq0biQOVr05OvV%2Fv0uERycgrLroGbZdKTIGN9WORhyuLwYSgl7vm4vZ8tWzZYF2Z8rpjGLiuCE6QnfG5EGekTlhRXdVRLXUZzBJt6Id4OnI%2FPOwm77uFnlPF%2F596n7SSdvPff4qkIn6XOzEOEXyB2BLq6a8hbM%2BwHW%2BvjzPWZcKDsD2O4EgnBXLWExcPvMfzwGFpDomopc0hlslSGeNIKj2KeYGLGFp4HGy1D7CsFdw6YWDjgAVXP07x67g75RcCN1aw9BDqjHHtmrpKA8aOZso%2FEdRp3QjgYtyiHpOQBYGO0lK3Ts8Y4PUFtVIO%2FuYBkdgJ3gtg1nqcyqxdfiLoxFCgWNhLMAV9ysqDhOvzi12bHQY2YpKR6NFn39c%2BIuB4n7TPNf4v6tyBv97gT5oWwGSJp9%2BkhuQLh0%2FEqi9Urp55fe99U1pGAA5xavjbFeghixwmjrly0IGePALBxbUv0cQlyV%2Bmk1GAo9x3D5f8KnZIApmr6wiiHRf%2BK1Vxsf1gEvBkwjPJWA3exU%2BgiybQgkTP%2BIJF5kdoo2rKvlyCsRtU6Gw%2FfG%2Bg%2F9XqC5oOZQibhL%2BWz5THUU1jMph8m46uQGHp4aLdptGkLa0wUD1VKtGEYINULPCgPh3MNSJuMQGOqUBxXNfdJQ0D%2BQFL1aqFhaAVE7z5ChJzx8knPE88adYQTMPsJN1rddmlizoM%2FNPntSdFJbkzI%2Bb%2FYyh8jApMWE3ekr7T%2BfgOkgMTRkwFVt3WMial6w8LUryFJ8mpHxi2VpPjya2zNZoaK91GWVktoH5fwR6ILYFYpKoIEJBO%2BJtOjKmbd7ttfjih3Apf1vYRFLO1NVvwlUQqJPEp%2FPwzW2JQ1hBvYUz&X-Amz-Signature=78c7fb7ec5d0253af7bb5ab3372d3661cf8ad6592ad1459710a1eb9304d63634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MC5LMJ3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtOGxcPLIEH5Lf5w%2Bos7GI%2BuhmDeZMXt1CyaaXelv5KAiEAhmQI9ZvW4Bnf18I89jmq4Rg63f9WSGFhhV0zvxuHMuMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEHy4bjwHE3jdox%2BoSrcA3Z98Cq0biQOVr05OvV%2Fv0uERycgrLroGbZdKTIGN9WORhyuLwYSgl7vm4vZ8tWzZYF2Z8rpjGLiuCE6QnfG5EGekTlhRXdVRLXUZzBJt6Id4OnI%2FPOwm77uFnlPF%2F596n7SSdvPff4qkIn6XOzEOEXyB2BLq6a8hbM%2BwHW%2BvjzPWZcKDsD2O4EgnBXLWExcPvMfzwGFpDomopc0hlslSGeNIKj2KeYGLGFp4HGy1D7CsFdw6YWDjgAVXP07x67g75RcCN1aw9BDqjHHtmrpKA8aOZso%2FEdRp3QjgYtyiHpOQBYGO0lK3Ts8Y4PUFtVIO%2FuYBkdgJ3gtg1nqcyqxdfiLoxFCgWNhLMAV9ysqDhOvzi12bHQY2YpKR6NFn39c%2BIuB4n7TPNf4v6tyBv97gT5oWwGSJp9%2BkhuQLh0%2FEqi9Urp55fe99U1pGAA5xavjbFeghixwmjrly0IGePALBxbUv0cQlyV%2Bmk1GAo9x3D5f8KnZIApmr6wiiHRf%2BK1Vxsf1gEvBkwjPJWA3exU%2BgiybQgkTP%2BIJF5kdoo2rKvlyCsRtU6Gw%2FfG%2Bg%2F9XqC5oOZQibhL%2BWz5THUU1jMph8m46uQGHp4aLdptGkLa0wUD1VKtGEYINULPCgPh3MNSJuMQGOqUBxXNfdJQ0D%2BQFL1aqFhaAVE7z5ChJzx8knPE88adYQTMPsJN1rddmlizoM%2FNPntSdFJbkzI%2Bb%2FYyh8jApMWE3ekr7T%2BfgOkgMTRkwFVt3WMial6w8LUryFJ8mpHxi2VpPjya2zNZoaK91GWVktoH5fwR6ILYFYpKoIEJBO%2BJtOjKmbd7ttfjih3Apf1vYRFLO1NVvwlUQqJPEp%2FPwzW2JQ1hBvYUz&X-Amz-Signature=b08488ec8db54dcb6417201dc015c11e048c20a8ca618d57e65511e79de0036b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MC5LMJ3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtOGxcPLIEH5Lf5w%2Bos7GI%2BuhmDeZMXt1CyaaXelv5KAiEAhmQI9ZvW4Bnf18I89jmq4Rg63f9WSGFhhV0zvxuHMuMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEHy4bjwHE3jdox%2BoSrcA3Z98Cq0biQOVr05OvV%2Fv0uERycgrLroGbZdKTIGN9WORhyuLwYSgl7vm4vZ8tWzZYF2Z8rpjGLiuCE6QnfG5EGekTlhRXdVRLXUZzBJt6Id4OnI%2FPOwm77uFnlPF%2F596n7SSdvPff4qkIn6XOzEOEXyB2BLq6a8hbM%2BwHW%2BvjzPWZcKDsD2O4EgnBXLWExcPvMfzwGFpDomopc0hlslSGeNIKj2KeYGLGFp4HGy1D7CsFdw6YWDjgAVXP07x67g75RcCN1aw9BDqjHHtmrpKA8aOZso%2FEdRp3QjgYtyiHpOQBYGO0lK3Ts8Y4PUFtVIO%2FuYBkdgJ3gtg1nqcyqxdfiLoxFCgWNhLMAV9ysqDhOvzi12bHQY2YpKR6NFn39c%2BIuB4n7TPNf4v6tyBv97gT5oWwGSJp9%2BkhuQLh0%2FEqi9Urp55fe99U1pGAA5xavjbFeghixwmjrly0IGePALBxbUv0cQlyV%2Bmk1GAo9x3D5f8KnZIApmr6wiiHRf%2BK1Vxsf1gEvBkwjPJWA3exU%2BgiybQgkTP%2BIJF5kdoo2rKvlyCsRtU6Gw%2FfG%2Bg%2F9XqC5oOZQibhL%2BWz5THUU1jMph8m46uQGHp4aLdptGkLa0wUD1VKtGEYINULPCgPh3MNSJuMQGOqUBxXNfdJQ0D%2BQFL1aqFhaAVE7z5ChJzx8knPE88adYQTMPsJN1rddmlizoM%2FNPntSdFJbkzI%2Bb%2FYyh8jApMWE3ekr7T%2BfgOkgMTRkwFVt3WMial6w8LUryFJ8mpHxi2VpPjya2zNZoaK91GWVktoH5fwR6ILYFYpKoIEJBO%2BJtOjKmbd7ttfjih3Apf1vYRFLO1NVvwlUQqJPEp%2FPwzW2JQ1hBvYUz&X-Amz-Signature=51cdb81bae82aa53830743d72e94f3eebc40387324666d0604c60d30dfeceea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
