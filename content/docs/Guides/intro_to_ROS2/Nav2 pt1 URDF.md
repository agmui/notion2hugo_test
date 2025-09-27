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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646RIPXNZ%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIANSvwbukuDdRULjNJvTyf5jxCKRSodCp5KqRiVOOeRaAiEApqzqBnpNfIiluzudPBazCIt2RVEN8Vztx1TuH0YySl4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNnTVpl6fSQ83PaUircAy62oochF4D8ik5UMuvxhZG6RW2yo%2F%2F4Bi6SXQono8ahIMw6UCOg6TjtztT9Y01sr9iIP842s1hCVUqgtgCfjF0t7VO3QbGdJ0afCNRYbfQkAJxxvu7l08wVuxo8j65%2BRP5eQ0Ji%2Fpm0Z56dg12%2F9NCmDBmu0V7zt%2FSrfSPlTGrbzkKwsQ%2FMvKHHMg0YLRr87HhAOgbcjnDI4CFWjbBF55Kw%2FwlNIaWl%2FXxQoQ7GZTqns%2F9MJSm6x5uc9V%2Bp%2BT%2FyU5HNNerEttyOAkz42MF8f4YCVQZxKGHbwBtF78hC65HRNRPUmfPUZhYmNSle8sZrD14zQA2eQacTa6x4Wxofl6v4OFVnbvCsd%2Bpot8PTTOEsShAKACkU61nBEv0nNBdgIjJVMjSD3%2F%2BC7iFcqQefZMDddorot3w4c0oc5IQ54wCfij78SQklTyYcJ3FXzFAw6lH0xAhYKZ30DoCfOQwD9wiiIHnKqCj5wHGZrmWJzmhN2obeqESjSIr0%2FUzKXVZwcEcnbAut3ICft%2B2gnn4%2F5gxix6sPAt%2BPupyd%2BzkpKEF1FU9OM7JNmluWgCHob7HqtSPh7BZ18JN6J2%2FtA5WrTwiR36eZpWlej7K4IUGa95PGJwWVDHUPLx2Ru1bOMOTn3MYGOqUBaglLXMb%2FX2RuzkjBr00u1w51eqv50K227sqA9jVIf%2BKs8Qz2iAECTLPRVcYzYkAWegqHZFaBp2rduAGto1IA2abPIcT3k5qcoUWhKmQt79PE2UDH%2BSwnISnB7695ChmDRZPUEMVSD8P6dM5vOfrV%2FZWjRjWrXwmOfsijTt8JLLtTzIJj7EUhiA4oN6KmlGOTBzH6mcMwK9QvjEVYPLj4n5wM%2FaqT&X-Amz-Signature=93e15c8a67cf9e40e1fae3689f283363bce620b1ed738392e119c8f2c5b2806d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646RIPXNZ%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIANSvwbukuDdRULjNJvTyf5jxCKRSodCp5KqRiVOOeRaAiEApqzqBnpNfIiluzudPBazCIt2RVEN8Vztx1TuH0YySl4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNnTVpl6fSQ83PaUircAy62oochF4D8ik5UMuvxhZG6RW2yo%2F%2F4Bi6SXQono8ahIMw6UCOg6TjtztT9Y01sr9iIP842s1hCVUqgtgCfjF0t7VO3QbGdJ0afCNRYbfQkAJxxvu7l08wVuxo8j65%2BRP5eQ0Ji%2Fpm0Z56dg12%2F9NCmDBmu0V7zt%2FSrfSPlTGrbzkKwsQ%2FMvKHHMg0YLRr87HhAOgbcjnDI4CFWjbBF55Kw%2FwlNIaWl%2FXxQoQ7GZTqns%2F9MJSm6x5uc9V%2Bp%2BT%2FyU5HNNerEttyOAkz42MF8f4YCVQZxKGHbwBtF78hC65HRNRPUmfPUZhYmNSle8sZrD14zQA2eQacTa6x4Wxofl6v4OFVnbvCsd%2Bpot8PTTOEsShAKACkU61nBEv0nNBdgIjJVMjSD3%2F%2BC7iFcqQefZMDddorot3w4c0oc5IQ54wCfij78SQklTyYcJ3FXzFAw6lH0xAhYKZ30DoCfOQwD9wiiIHnKqCj5wHGZrmWJzmhN2obeqESjSIr0%2FUzKXVZwcEcnbAut3ICft%2B2gnn4%2F5gxix6sPAt%2BPupyd%2BzkpKEF1FU9OM7JNmluWgCHob7HqtSPh7BZ18JN6J2%2FtA5WrTwiR36eZpWlej7K4IUGa95PGJwWVDHUPLx2Ru1bOMOTn3MYGOqUBaglLXMb%2FX2RuzkjBr00u1w51eqv50K227sqA9jVIf%2BKs8Qz2iAECTLPRVcYzYkAWegqHZFaBp2rduAGto1IA2abPIcT3k5qcoUWhKmQt79PE2UDH%2BSwnISnB7695ChmDRZPUEMVSD8P6dM5vOfrV%2FZWjRjWrXwmOfsijTt8JLLtTzIJj7EUhiA4oN6KmlGOTBzH6mcMwK9QvjEVYPLj4n5wM%2FaqT&X-Amz-Signature=e93db5132039c3a73e8e324ff9efb63fc19cf5633a94d4eadc2c94a1b84eeb3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646RIPXNZ%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIANSvwbukuDdRULjNJvTyf5jxCKRSodCp5KqRiVOOeRaAiEApqzqBnpNfIiluzudPBazCIt2RVEN8Vztx1TuH0YySl4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNnTVpl6fSQ83PaUircAy62oochF4D8ik5UMuvxhZG6RW2yo%2F%2F4Bi6SXQono8ahIMw6UCOg6TjtztT9Y01sr9iIP842s1hCVUqgtgCfjF0t7VO3QbGdJ0afCNRYbfQkAJxxvu7l08wVuxo8j65%2BRP5eQ0Ji%2Fpm0Z56dg12%2F9NCmDBmu0V7zt%2FSrfSPlTGrbzkKwsQ%2FMvKHHMg0YLRr87HhAOgbcjnDI4CFWjbBF55Kw%2FwlNIaWl%2FXxQoQ7GZTqns%2F9MJSm6x5uc9V%2Bp%2BT%2FyU5HNNerEttyOAkz42MF8f4YCVQZxKGHbwBtF78hC65HRNRPUmfPUZhYmNSle8sZrD14zQA2eQacTa6x4Wxofl6v4OFVnbvCsd%2Bpot8PTTOEsShAKACkU61nBEv0nNBdgIjJVMjSD3%2F%2BC7iFcqQefZMDddorot3w4c0oc5IQ54wCfij78SQklTyYcJ3FXzFAw6lH0xAhYKZ30DoCfOQwD9wiiIHnKqCj5wHGZrmWJzmhN2obeqESjSIr0%2FUzKXVZwcEcnbAut3ICft%2B2gnn4%2F5gxix6sPAt%2BPupyd%2BzkpKEF1FU9OM7JNmluWgCHob7HqtSPh7BZ18JN6J2%2FtA5WrTwiR36eZpWlej7K4IUGa95PGJwWVDHUPLx2Ru1bOMOTn3MYGOqUBaglLXMb%2FX2RuzkjBr00u1w51eqv50K227sqA9jVIf%2BKs8Qz2iAECTLPRVcYzYkAWegqHZFaBp2rduAGto1IA2abPIcT3k5qcoUWhKmQt79PE2UDH%2BSwnISnB7695ChmDRZPUEMVSD8P6dM5vOfrV%2FZWjRjWrXwmOfsijTt8JLLtTzIJj7EUhiA4oN6KmlGOTBzH6mcMwK9QvjEVYPLj4n5wM%2FaqT&X-Amz-Signature=edfbb69e6c36cc7266e8f10ab39961dd0caa0fdc61a920512a7e472f0f3e8a89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646RIPXNZ%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIANSvwbukuDdRULjNJvTyf5jxCKRSodCp5KqRiVOOeRaAiEApqzqBnpNfIiluzudPBazCIt2RVEN8Vztx1TuH0YySl4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNnTVpl6fSQ83PaUircAy62oochF4D8ik5UMuvxhZG6RW2yo%2F%2F4Bi6SXQono8ahIMw6UCOg6TjtztT9Y01sr9iIP842s1hCVUqgtgCfjF0t7VO3QbGdJ0afCNRYbfQkAJxxvu7l08wVuxo8j65%2BRP5eQ0Ji%2Fpm0Z56dg12%2F9NCmDBmu0V7zt%2FSrfSPlTGrbzkKwsQ%2FMvKHHMg0YLRr87HhAOgbcjnDI4CFWjbBF55Kw%2FwlNIaWl%2FXxQoQ7GZTqns%2F9MJSm6x5uc9V%2Bp%2BT%2FyU5HNNerEttyOAkz42MF8f4YCVQZxKGHbwBtF78hC65HRNRPUmfPUZhYmNSle8sZrD14zQA2eQacTa6x4Wxofl6v4OFVnbvCsd%2Bpot8PTTOEsShAKACkU61nBEv0nNBdgIjJVMjSD3%2F%2BC7iFcqQefZMDddorot3w4c0oc5IQ54wCfij78SQklTyYcJ3FXzFAw6lH0xAhYKZ30DoCfOQwD9wiiIHnKqCj5wHGZrmWJzmhN2obeqESjSIr0%2FUzKXVZwcEcnbAut3ICft%2B2gnn4%2F5gxix6sPAt%2BPupyd%2BzkpKEF1FU9OM7JNmluWgCHob7HqtSPh7BZ18JN6J2%2FtA5WrTwiR36eZpWlej7K4IUGa95PGJwWVDHUPLx2Ru1bOMOTn3MYGOqUBaglLXMb%2FX2RuzkjBr00u1w51eqv50K227sqA9jVIf%2BKs8Qz2iAECTLPRVcYzYkAWegqHZFaBp2rduAGto1IA2abPIcT3k5qcoUWhKmQt79PE2UDH%2BSwnISnB7695ChmDRZPUEMVSD8P6dM5vOfrV%2FZWjRjWrXwmOfsijTt8JLLtTzIJj7EUhiA4oN6KmlGOTBzH6mcMwK9QvjEVYPLj4n5wM%2FaqT&X-Amz-Signature=c509033d7ea606b3a658d1b0ced9d108bab2cd971b865cafd24801fda5452b2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646RIPXNZ%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIANSvwbukuDdRULjNJvTyf5jxCKRSodCp5KqRiVOOeRaAiEApqzqBnpNfIiluzudPBazCIt2RVEN8Vztx1TuH0YySl4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNnTVpl6fSQ83PaUircAy62oochF4D8ik5UMuvxhZG6RW2yo%2F%2F4Bi6SXQono8ahIMw6UCOg6TjtztT9Y01sr9iIP842s1hCVUqgtgCfjF0t7VO3QbGdJ0afCNRYbfQkAJxxvu7l08wVuxo8j65%2BRP5eQ0Ji%2Fpm0Z56dg12%2F9NCmDBmu0V7zt%2FSrfSPlTGrbzkKwsQ%2FMvKHHMg0YLRr87HhAOgbcjnDI4CFWjbBF55Kw%2FwlNIaWl%2FXxQoQ7GZTqns%2F9MJSm6x5uc9V%2Bp%2BT%2FyU5HNNerEttyOAkz42MF8f4YCVQZxKGHbwBtF78hC65HRNRPUmfPUZhYmNSle8sZrD14zQA2eQacTa6x4Wxofl6v4OFVnbvCsd%2Bpot8PTTOEsShAKACkU61nBEv0nNBdgIjJVMjSD3%2F%2BC7iFcqQefZMDddorot3w4c0oc5IQ54wCfij78SQklTyYcJ3FXzFAw6lH0xAhYKZ30DoCfOQwD9wiiIHnKqCj5wHGZrmWJzmhN2obeqESjSIr0%2FUzKXVZwcEcnbAut3ICft%2B2gnn4%2F5gxix6sPAt%2BPupyd%2BzkpKEF1FU9OM7JNmluWgCHob7HqtSPh7BZ18JN6J2%2FtA5WrTwiR36eZpWlej7K4IUGa95PGJwWVDHUPLx2Ru1bOMOTn3MYGOqUBaglLXMb%2FX2RuzkjBr00u1w51eqv50K227sqA9jVIf%2BKs8Qz2iAECTLPRVcYzYkAWegqHZFaBp2rduAGto1IA2abPIcT3k5qcoUWhKmQt79PE2UDH%2BSwnISnB7695ChmDRZPUEMVSD8P6dM5vOfrV%2FZWjRjWrXwmOfsijTt8JLLtTzIJj7EUhiA4oN6KmlGOTBzH6mcMwK9QvjEVYPLj4n5wM%2FaqT&X-Amz-Signature=8fe872f35b8097a11c4ce72b9999e2b6d1f315c2d73f1217ba647470b959c584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646RIPXNZ%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIANSvwbukuDdRULjNJvTyf5jxCKRSodCp5KqRiVOOeRaAiEApqzqBnpNfIiluzudPBazCIt2RVEN8Vztx1TuH0YySl4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNnTVpl6fSQ83PaUircAy62oochF4D8ik5UMuvxhZG6RW2yo%2F%2F4Bi6SXQono8ahIMw6UCOg6TjtztT9Y01sr9iIP842s1hCVUqgtgCfjF0t7VO3QbGdJ0afCNRYbfQkAJxxvu7l08wVuxo8j65%2BRP5eQ0Ji%2Fpm0Z56dg12%2F9NCmDBmu0V7zt%2FSrfSPlTGrbzkKwsQ%2FMvKHHMg0YLRr87HhAOgbcjnDI4CFWjbBF55Kw%2FwlNIaWl%2FXxQoQ7GZTqns%2F9MJSm6x5uc9V%2Bp%2BT%2FyU5HNNerEttyOAkz42MF8f4YCVQZxKGHbwBtF78hC65HRNRPUmfPUZhYmNSle8sZrD14zQA2eQacTa6x4Wxofl6v4OFVnbvCsd%2Bpot8PTTOEsShAKACkU61nBEv0nNBdgIjJVMjSD3%2F%2BC7iFcqQefZMDddorot3w4c0oc5IQ54wCfij78SQklTyYcJ3FXzFAw6lH0xAhYKZ30DoCfOQwD9wiiIHnKqCj5wHGZrmWJzmhN2obeqESjSIr0%2FUzKXVZwcEcnbAut3ICft%2B2gnn4%2F5gxix6sPAt%2BPupyd%2BzkpKEF1FU9OM7JNmluWgCHob7HqtSPh7BZ18JN6J2%2FtA5WrTwiR36eZpWlej7K4IUGa95PGJwWVDHUPLx2Ru1bOMOTn3MYGOqUBaglLXMb%2FX2RuzkjBr00u1w51eqv50K227sqA9jVIf%2BKs8Qz2iAECTLPRVcYzYkAWegqHZFaBp2rduAGto1IA2abPIcT3k5qcoUWhKmQt79PE2UDH%2BSwnISnB7695ChmDRZPUEMVSD8P6dM5vOfrV%2FZWjRjWrXwmOfsijTt8JLLtTzIJj7EUhiA4oN6KmlGOTBzH6mcMwK9QvjEVYPLj4n5wM%2FaqT&X-Amz-Signature=830320723c7a6b6bc6bcd47d81a2386569fa1e5d6905b015b87fc0d4fc1eeb30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646RIPXNZ%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIANSvwbukuDdRULjNJvTyf5jxCKRSodCp5KqRiVOOeRaAiEApqzqBnpNfIiluzudPBazCIt2RVEN8Vztx1TuH0YySl4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNnTVpl6fSQ83PaUircAy62oochF4D8ik5UMuvxhZG6RW2yo%2F%2F4Bi6SXQono8ahIMw6UCOg6TjtztT9Y01sr9iIP842s1hCVUqgtgCfjF0t7VO3QbGdJ0afCNRYbfQkAJxxvu7l08wVuxo8j65%2BRP5eQ0Ji%2Fpm0Z56dg12%2F9NCmDBmu0V7zt%2FSrfSPlTGrbzkKwsQ%2FMvKHHMg0YLRr87HhAOgbcjnDI4CFWjbBF55Kw%2FwlNIaWl%2FXxQoQ7GZTqns%2F9MJSm6x5uc9V%2Bp%2BT%2FyU5HNNerEttyOAkz42MF8f4YCVQZxKGHbwBtF78hC65HRNRPUmfPUZhYmNSle8sZrD14zQA2eQacTa6x4Wxofl6v4OFVnbvCsd%2Bpot8PTTOEsShAKACkU61nBEv0nNBdgIjJVMjSD3%2F%2BC7iFcqQefZMDddorot3w4c0oc5IQ54wCfij78SQklTyYcJ3FXzFAw6lH0xAhYKZ30DoCfOQwD9wiiIHnKqCj5wHGZrmWJzmhN2obeqESjSIr0%2FUzKXVZwcEcnbAut3ICft%2B2gnn4%2F5gxix6sPAt%2BPupyd%2BzkpKEF1FU9OM7JNmluWgCHob7HqtSPh7BZ18JN6J2%2FtA5WrTwiR36eZpWlej7K4IUGa95PGJwWVDHUPLx2Ru1bOMOTn3MYGOqUBaglLXMb%2FX2RuzkjBr00u1w51eqv50K227sqA9jVIf%2BKs8Qz2iAECTLPRVcYzYkAWegqHZFaBp2rduAGto1IA2abPIcT3k5qcoUWhKmQt79PE2UDH%2BSwnISnB7695ChmDRZPUEMVSD8P6dM5vOfrV%2FZWjRjWrXwmOfsijTt8JLLtTzIJj7EUhiA4oN6KmlGOTBzH6mcMwK9QvjEVYPLj4n5wM%2FaqT&X-Amz-Signature=9a2b07d8e0c22462db23b7253c1d71d94cbdcd2d8822b65953c50bc308495eb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646RIPXNZ%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIANSvwbukuDdRULjNJvTyf5jxCKRSodCp5KqRiVOOeRaAiEApqzqBnpNfIiluzudPBazCIt2RVEN8Vztx1TuH0YySl4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNnTVpl6fSQ83PaUircAy62oochF4D8ik5UMuvxhZG6RW2yo%2F%2F4Bi6SXQono8ahIMw6UCOg6TjtztT9Y01sr9iIP842s1hCVUqgtgCfjF0t7VO3QbGdJ0afCNRYbfQkAJxxvu7l08wVuxo8j65%2BRP5eQ0Ji%2Fpm0Z56dg12%2F9NCmDBmu0V7zt%2FSrfSPlTGrbzkKwsQ%2FMvKHHMg0YLRr87HhAOgbcjnDI4CFWjbBF55Kw%2FwlNIaWl%2FXxQoQ7GZTqns%2F9MJSm6x5uc9V%2Bp%2BT%2FyU5HNNerEttyOAkz42MF8f4YCVQZxKGHbwBtF78hC65HRNRPUmfPUZhYmNSle8sZrD14zQA2eQacTa6x4Wxofl6v4OFVnbvCsd%2Bpot8PTTOEsShAKACkU61nBEv0nNBdgIjJVMjSD3%2F%2BC7iFcqQefZMDddorot3w4c0oc5IQ54wCfij78SQklTyYcJ3FXzFAw6lH0xAhYKZ30DoCfOQwD9wiiIHnKqCj5wHGZrmWJzmhN2obeqESjSIr0%2FUzKXVZwcEcnbAut3ICft%2B2gnn4%2F5gxix6sPAt%2BPupyd%2BzkpKEF1FU9OM7JNmluWgCHob7HqtSPh7BZ18JN6J2%2FtA5WrTwiR36eZpWlej7K4IUGa95PGJwWVDHUPLx2Ru1bOMOTn3MYGOqUBaglLXMb%2FX2RuzkjBr00u1w51eqv50K227sqA9jVIf%2BKs8Qz2iAECTLPRVcYzYkAWegqHZFaBp2rduAGto1IA2abPIcT3k5qcoUWhKmQt79PE2UDH%2BSwnISnB7695ChmDRZPUEMVSD8P6dM5vOfrV%2FZWjRjWrXwmOfsijTt8JLLtTzIJj7EUhiA4oN6KmlGOTBzH6mcMwK9QvjEVYPLj4n5wM%2FaqT&X-Amz-Signature=69a801ec2336d9ac1ade7805f84d2074c51adcfaec424e93d3ef010e7df3bb52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646RIPXNZ%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIANSvwbukuDdRULjNJvTyf5jxCKRSodCp5KqRiVOOeRaAiEApqzqBnpNfIiluzudPBazCIt2RVEN8Vztx1TuH0YySl4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNnTVpl6fSQ83PaUircAy62oochF4D8ik5UMuvxhZG6RW2yo%2F%2F4Bi6SXQono8ahIMw6UCOg6TjtztT9Y01sr9iIP842s1hCVUqgtgCfjF0t7VO3QbGdJ0afCNRYbfQkAJxxvu7l08wVuxo8j65%2BRP5eQ0Ji%2Fpm0Z56dg12%2F9NCmDBmu0V7zt%2FSrfSPlTGrbzkKwsQ%2FMvKHHMg0YLRr87HhAOgbcjnDI4CFWjbBF55Kw%2FwlNIaWl%2FXxQoQ7GZTqns%2F9MJSm6x5uc9V%2Bp%2BT%2FyU5HNNerEttyOAkz42MF8f4YCVQZxKGHbwBtF78hC65HRNRPUmfPUZhYmNSle8sZrD14zQA2eQacTa6x4Wxofl6v4OFVnbvCsd%2Bpot8PTTOEsShAKACkU61nBEv0nNBdgIjJVMjSD3%2F%2BC7iFcqQefZMDddorot3w4c0oc5IQ54wCfij78SQklTyYcJ3FXzFAw6lH0xAhYKZ30DoCfOQwD9wiiIHnKqCj5wHGZrmWJzmhN2obeqESjSIr0%2FUzKXVZwcEcnbAut3ICft%2B2gnn4%2F5gxix6sPAt%2BPupyd%2BzkpKEF1FU9OM7JNmluWgCHob7HqtSPh7BZ18JN6J2%2FtA5WrTwiR36eZpWlej7K4IUGa95PGJwWVDHUPLx2Ru1bOMOTn3MYGOqUBaglLXMb%2FX2RuzkjBr00u1w51eqv50K227sqA9jVIf%2BKs8Qz2iAECTLPRVcYzYkAWegqHZFaBp2rduAGto1IA2abPIcT3k5qcoUWhKmQt79PE2UDH%2BSwnISnB7695ChmDRZPUEMVSD8P6dM5vOfrV%2FZWjRjWrXwmOfsijTt8JLLtTzIJj7EUhiA4oN6KmlGOTBzH6mcMwK9QvjEVYPLj4n5wM%2FaqT&X-Amz-Signature=f895327fc3480b90ae7bdc325a6c9e2b670f4511d615a62100262d2c8de3eeb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646RIPXNZ%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIANSvwbukuDdRULjNJvTyf5jxCKRSodCp5KqRiVOOeRaAiEApqzqBnpNfIiluzudPBazCIt2RVEN8Vztx1TuH0YySl4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNnTVpl6fSQ83PaUircAy62oochF4D8ik5UMuvxhZG6RW2yo%2F%2F4Bi6SXQono8ahIMw6UCOg6TjtztT9Y01sr9iIP842s1hCVUqgtgCfjF0t7VO3QbGdJ0afCNRYbfQkAJxxvu7l08wVuxo8j65%2BRP5eQ0Ji%2Fpm0Z56dg12%2F9NCmDBmu0V7zt%2FSrfSPlTGrbzkKwsQ%2FMvKHHMg0YLRr87HhAOgbcjnDI4CFWjbBF55Kw%2FwlNIaWl%2FXxQoQ7GZTqns%2F9MJSm6x5uc9V%2Bp%2BT%2FyU5HNNerEttyOAkz42MF8f4YCVQZxKGHbwBtF78hC65HRNRPUmfPUZhYmNSle8sZrD14zQA2eQacTa6x4Wxofl6v4OFVnbvCsd%2Bpot8PTTOEsShAKACkU61nBEv0nNBdgIjJVMjSD3%2F%2BC7iFcqQefZMDddorot3w4c0oc5IQ54wCfij78SQklTyYcJ3FXzFAw6lH0xAhYKZ30DoCfOQwD9wiiIHnKqCj5wHGZrmWJzmhN2obeqESjSIr0%2FUzKXVZwcEcnbAut3ICft%2B2gnn4%2F5gxix6sPAt%2BPupyd%2BzkpKEF1FU9OM7JNmluWgCHob7HqtSPh7BZ18JN6J2%2FtA5WrTwiR36eZpWlej7K4IUGa95PGJwWVDHUPLx2Ru1bOMOTn3MYGOqUBaglLXMb%2FX2RuzkjBr00u1w51eqv50K227sqA9jVIf%2BKs8Qz2iAECTLPRVcYzYkAWegqHZFaBp2rduAGto1IA2abPIcT3k5qcoUWhKmQt79PE2UDH%2BSwnISnB7695ChmDRZPUEMVSD8P6dM5vOfrV%2FZWjRjWrXwmOfsijTt8JLLtTzIJj7EUhiA4oN6KmlGOTBzH6mcMwK9QvjEVYPLj4n5wM%2FaqT&X-Amz-Signature=3753ea80f04cab7054a12734e973f29a435b82345e8bb7f33167b121e08d15b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCI3WXGN%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCICZLGViloKXL9U0dDuNpUVwEf2OkMjYR84drizO1Ls8LAiBq7hVmfCp7L5SN14MSrZvyU8gF7VSS0slwAifbmnK3SSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhBhMxponTBySxdDiKtwD24tBfBUESXTeFR3z6xUb5Dnj2YORg2wPNOhk74oJGkB6oNR2UfVSb83Y0MjfhcJR9%2By5M6fb9wPh2NBVe38H7iKv7CjMX9riZwWapp%2FPNRSH0CXN2%2BeQyo1mq2YpQJoZDrMm2VF75ZAJ3605ebn0jwevcK8wc8dPEqK4sZ81%2Fy8hS7CaiHPlmzgZLbOXmww1R1K1nsko3MaE4DQ9k4LWue%2B6jZCKH9H4yKClvYsonnyTFRsMDuaSN%2Fmyg%2Bxaahsir1hI2obrfnjedNldx13%2FAjbHLJYp11X2hh6HjlLs5NIlOHbQgGGyzeyTlKVhiUFWgnmQhr23FiM7j3oy8L4DPEYRe2dFjzjZ%2BG43H8%2BoyWtgDonD%2F04SIx1wL5MO0es6xY%2FjQjv9yMWWcH0cvBe79ZwtOlWyunqJMIF3DIijJWlp7AswF%2BLV%2Bqm4vbiv5KufrBEl%2FxI9%2BWDgmCef0LMTXM4UJCpfKJstNCjUV3visYyIeB3j7YAbdpJw2Bo78VOJy81clRGtUixVrcKfkYoYRl59qLUHDpolVvMqJIYmqb41jBzdJiftlfqO1NeQjMxCGPRIANLBhLTF0OaOCAXl85tZfUBr4WUaodqBi7eoK8UGDSTc7jq0XPVqJLUw7ufcxgY6pgG0hFeuVBvfbDKfh9GCncVJlC6HnygKytSLCgGAOmL9eNx3QTRqFfOU4W%2FYnznCZV9BRKCMGpg9qC8Cu68N6av%2BKtekZSrPPgM0Xnd3gp8lkYKKR4Pu3h3d0iNdgNvvNN%2BvZIgETh8CK3tidsOzUnJ0RRSv080rS2k0ANVzRuyeQeVv4dMOxMRQVD7cP2hgvdYu56yMz061muqq5InpUGFpeNLE95Oa&X-Amz-Signature=cce16ce32380be640977c35ca65af4feccd1bd869ce99c9c0ba2dd5b3510128e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKUGGVA7%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCICbm41v1pNJGZZNhR6i2z%2BqQ%2F98yyJvn3%2FH47Oa66RziAiBv39s1EdqEaxJ0aOHGBCOR0PS6s82VD6h1Dzdipeb60CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlaLepDvDXyxhYnydKtwDx%2B5fkA6VzDNsxzGm77kgt8Z8kJ51PfUl%2FvwP6xEY42e9ghopybkzj0kXLKlk7QZOGyMRZLyeCCiKcV8C4CTWpFsVgsMIJy5JiPea6SywYDIVmdUtoC0rAxDHpR2zYX7RGx%2FEMh%2Bqm4bp23DL4eQywLZ22lQ2VDrRIJoiMQrNnm5VPt87z%2FV%2BTScOBXjqisDpZPB0nhmP44upjFGiTHoZzYg%2Bb%2FRyJ4oLOcdER%2FP5BCG4FxVShrOzsBi9uL1hV1SUu5Lp%2FNMez7DY4UZTtsRhxv4RflrMBWZuBQU1fQXgObFZFEZdLuc33tY4a4c7GNSPCWK5GTuPjUNji8d6lAWcnaDhUBZTvaaZt2yGqUD5OPjU8sUdwcVZlAoj%2B%2F6nU1PfB8jtGqjoKFtIhKXHDVyLg%2Fu8muKd0uLf4HwVRrSWfdBPrrB3oINQVOzgKtXipzMTpt0t0EGjzIBNi62v3GdkmMxoAZbzrpgfQxbneKlGzrAQA14lMkT18ivzyRwK4PvMHExHcDrZyEyqeqfX2aSsNXUIZlQgYvKF79QMX17ilhB0AJJBFW4vz%2BqxF7i1u1a3AkhlumXHYC1N8k4bkU%2FsWyiEUt91TlDOPrXeDA9hppPdYhRhIP0OZjSbhGkwqefcxgY6pgFHDuIYesmhOUQ%2Ft49heGl4RD6NgRv%2FUu9%2FfqdfNnht5kkuziqo34Dztv1P8orAqXvoTyYKO%2FJsGujbVg9OhhkkimGtmdMTwMtQzf6ILM9Tqt18wTCwGfvun%2FtUGIuAn66lJNZSHHCPCz39IdvS4l4haw%2F40wYoaDUn2IgyMyS7YFixuox%2FFlRLnhfNNf2g5pBKnnASbkEpslL75OMDHJjqYaASqsge&X-Amz-Signature=1ac49541d1a1827c55e76ce84b0e4b153159f3db9c5dd76a30d9430b33dda2b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SL7OFBF%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIEgH2086eVhdYdzDQxBGlnCjLHsTtjeqc5JbRVeeNAg7AiEAi0f5CEo26J4V%2FZpx9%2B0xR9d1zUnJce7PxHw%2BfhHChP0qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkRHcaS5fV%2FdK79fircA8gYhDu4CDWwRKYGdOzhaqkMIXUvF65dFgRF4zTu4CM6BxeMgB04LkbegpAwKjJbbBlrgyhTZGZa2l1xiTVaPFm%2FWheU6o6XGitcCNEsXPgvaR3T%2BXl3aU9i85RFEDvwXrjzkUab3qSwxsN1XIKptI729Wts%2BnkDS4AdykkYTPrmgOeZiWzVTy2uqzUG9dTm5lm2ltxqTPf1wn%2Fd28uimLFz0o%2ByOAyQl00Jp99VRL5TcPjh4uLzOeeQEGDCUFoQSIPWWRfrDo6boJD7xz%2FNOvgHVkqIXfxQ0Mm39f5uYxEyin1cL6fd72k1Mu5Bxm%2BBegQD9uo9Ou4rJivuBZJSIFg5m36%2B42P%2F6cnDV7ph1jyEs4c4YpLnovshdsxOtiXHW1Im222FaHS7d%2F%2FNy7xRDxALinnHq4KlmMmw9qXXzlwYN5YvARB1O3MepGxips8KZV2u%2B6NLwsMdChxu8Ph%2BJFigQy2156cHf78fVUKCNcxkcFLRskc8%2FuansisP1CI4RuPH4wvgPKgG6XTS%2BTCwwcQ47ac9URZb3fusTaKpRbl67tkYBKtXgcDqVHR3JOU%2F1dsMeh9qMvdSLENnrMZAHyzsohI6gMTvJtt6VlJHLcRa5R5GaLc10ekD89BUMO3n3MYGOqUBgpQXqd1dv7IT6gYlkOwSZn%2F4HflPftD%2FE68uSbTCjST2bBLAHPEMY%2BvadryEkTjAlbIS0pPOAIdQmiR1xT2jTnz37HZuX23CX3wu6MM4sE3jIUfj%2BdZZILDNCjDgFUN%2Bm%2BcBY9A4x%2Bz9Kafw6nwiPFC5NxvW3ZIPEyq24lbmk6CFVz6Eg6i99602Wov71Qs1YTAV3oSQWNgz3C%2Fh%2FeklcMkkAKV8&X-Amz-Signature=6486444bb93b78246ca3e047be20417a606fc576c3faa24c7d971f041a9a783a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646RIPXNZ%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIANSvwbukuDdRULjNJvTyf5jxCKRSodCp5KqRiVOOeRaAiEApqzqBnpNfIiluzudPBazCIt2RVEN8Vztx1TuH0YySl4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNnTVpl6fSQ83PaUircAy62oochF4D8ik5UMuvxhZG6RW2yo%2F%2F4Bi6SXQono8ahIMw6UCOg6TjtztT9Y01sr9iIP842s1hCVUqgtgCfjF0t7VO3QbGdJ0afCNRYbfQkAJxxvu7l08wVuxo8j65%2BRP5eQ0Ji%2Fpm0Z56dg12%2F9NCmDBmu0V7zt%2FSrfSPlTGrbzkKwsQ%2FMvKHHMg0YLRr87HhAOgbcjnDI4CFWjbBF55Kw%2FwlNIaWl%2FXxQoQ7GZTqns%2F9MJSm6x5uc9V%2Bp%2BT%2FyU5HNNerEttyOAkz42MF8f4YCVQZxKGHbwBtF78hC65HRNRPUmfPUZhYmNSle8sZrD14zQA2eQacTa6x4Wxofl6v4OFVnbvCsd%2Bpot8PTTOEsShAKACkU61nBEv0nNBdgIjJVMjSD3%2F%2BC7iFcqQefZMDddorot3w4c0oc5IQ54wCfij78SQklTyYcJ3FXzFAw6lH0xAhYKZ30DoCfOQwD9wiiIHnKqCj5wHGZrmWJzmhN2obeqESjSIr0%2FUzKXVZwcEcnbAut3ICft%2B2gnn4%2F5gxix6sPAt%2BPupyd%2BzkpKEF1FU9OM7JNmluWgCHob7HqtSPh7BZ18JN6J2%2FtA5WrTwiR36eZpWlej7K4IUGa95PGJwWVDHUPLx2Ru1bOMOTn3MYGOqUBaglLXMb%2FX2RuzkjBr00u1w51eqv50K227sqA9jVIf%2BKs8Qz2iAECTLPRVcYzYkAWegqHZFaBp2rduAGto1IA2abPIcT3k5qcoUWhKmQt79PE2UDH%2BSwnISnB7695ChmDRZPUEMVSD8P6dM5vOfrV%2FZWjRjWrXwmOfsijTt8JLLtTzIJj7EUhiA4oN6KmlGOTBzH6mcMwK9QvjEVYPLj4n5wM%2FaqT&X-Amz-Signature=09c9ff276fe32569d6c2a9225842e96fe8e569df498e3aeb4ee5863576450e29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ULD3EOQ%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCICoRYJPRSbaT45CzKe6d2YNvlNebpEI74%2BVpgZo23HX3AiBJenY5njZaQh1pjzx%2BWvorMR8a4%2FyfKxVTQYi51sR2nyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMjcEIordiLmR%2FpocKtwDxvyuM9lcImrfwoExFRVPc8BR1xNbOc3zg%2FGiHQ22oFTekqjBrlMviVnW8SsXZ1YxTIWIyKpkpeV05Iq6VjugUFJvUYEIWbjb1Xx%2BH9TSinw%2B2t2U3dfnAtCqKTXxRhZK0B5%2B%2F4V6MyVDqhZbHi7b4Oxn26eaXWkochF2HIbdQZFS3A0d3h081iKWWVscOuh9n1iSW3yrY1uJ64KhBLQnEd8Ysc7vahNaPemuOQhQ2lVjc3CWbg%2Bf%2F9vKvuKNFIwXNe9BEIEv2lDWWJKv8YXDRllRfMx6T%2FX7TTFx4h33XsC77GTcNwT5kGTcBZcaAwMejfyhq3KLrUbwX%2FXorJxWyrZHuG8XQXX0EIgmcGEFj5TQ2YWDXX4S9ZB6B6UkE2c2lvlMW%2BrukOScSIYAS2ohLwzIpahBY3m4UuZ3xbSb5EC5cz0hycE%2FQRaMdi2juMdOY9IUgRO2pd1IC4%2B4gg04Kr7tocsrkYPa%2FW3yK%2F9pUHMDMVXbV68DKmkAJGWvDkG9xrUVrNjFAEBjBPUE%2FT8zOcj7%2BmQBYFxtOdAcajKQQV8h6m%2BTWeE7fBAp8cKHe4u5MDc1kZKxAB7HRY3Mid5DJMbLQO%2B9N%2F%2Blqsj8lspWITK3fecTfrvuf7k22%2FAw%2BOfcxgY6pgHal867EksQQjh5Yqlst4ESCrfOCQyYaz2IMLwhNNSuB7qNvuqg3QBcRLASLlp13LIHsltpWvoKSR0ve32V%2F%2F9qYpvh0v8q2db9p4Ba9%2FbUvZUTmfYv5GROpD%2FHi8Bi884vrSBZhIe2p3ijXaoESZqTZCgni%2F2bk53xXNqWScji3FvBP9Ca2FNgGYKuFxw5gIgIzTvTgNq575GW6gUTeBEWNLn31sBf&X-Amz-Signature=f126e763f7fa1c334e69d1813fbfbf6ccb5a88400d3dd79b2f5f4f70df49f6a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646RIPXNZ%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIANSvwbukuDdRULjNJvTyf5jxCKRSodCp5KqRiVOOeRaAiEApqzqBnpNfIiluzudPBazCIt2RVEN8Vztx1TuH0YySl4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNnTVpl6fSQ83PaUircAy62oochF4D8ik5UMuvxhZG6RW2yo%2F%2F4Bi6SXQono8ahIMw6UCOg6TjtztT9Y01sr9iIP842s1hCVUqgtgCfjF0t7VO3QbGdJ0afCNRYbfQkAJxxvu7l08wVuxo8j65%2BRP5eQ0Ji%2Fpm0Z56dg12%2F9NCmDBmu0V7zt%2FSrfSPlTGrbzkKwsQ%2FMvKHHMg0YLRr87HhAOgbcjnDI4CFWjbBF55Kw%2FwlNIaWl%2FXxQoQ7GZTqns%2F9MJSm6x5uc9V%2Bp%2BT%2FyU5HNNerEttyOAkz42MF8f4YCVQZxKGHbwBtF78hC65HRNRPUmfPUZhYmNSle8sZrD14zQA2eQacTa6x4Wxofl6v4OFVnbvCsd%2Bpot8PTTOEsShAKACkU61nBEv0nNBdgIjJVMjSD3%2F%2BC7iFcqQefZMDddorot3w4c0oc5IQ54wCfij78SQklTyYcJ3FXzFAw6lH0xAhYKZ30DoCfOQwD9wiiIHnKqCj5wHGZrmWJzmhN2obeqESjSIr0%2FUzKXVZwcEcnbAut3ICft%2B2gnn4%2F5gxix6sPAt%2BPupyd%2BzkpKEF1FU9OM7JNmluWgCHob7HqtSPh7BZ18JN6J2%2FtA5WrTwiR36eZpWlej7K4IUGa95PGJwWVDHUPLx2Ru1bOMOTn3MYGOqUBaglLXMb%2FX2RuzkjBr00u1w51eqv50K227sqA9jVIf%2BKs8Qz2iAECTLPRVcYzYkAWegqHZFaBp2rduAGto1IA2abPIcT3k5qcoUWhKmQt79PE2UDH%2BSwnISnB7695ChmDRZPUEMVSD8P6dM5vOfrV%2FZWjRjWrXwmOfsijTt8JLLtTzIJj7EUhiA4oN6KmlGOTBzH6mcMwK9QvjEVYPLj4n5wM%2FaqT&X-Amz-Signature=e36439bd7774d990e3eddbf0342f89f2385bd2bbb99d99487acb937c6b9e8bfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N3YBM2K%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIGpIHbkpTZcLRxliUaxmuNe5RmA7X9LAziiBPFEC0FCbAiAsq90tbGcYMzqN8grlIhM32ULnr%2FtUvVpcQs0nRaPraiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2swZ4JNoULzGIDm8KtwDkDtm9e8XZ4zxqmmuozfsTwx7CbtYLSEA2SF7EQaDxRBgXpEnnMn6NFmS64JYb2VAZszvuL9gE2tkUZ5%2BU43QGesVBVJcMnNVn32U%2FuVEk2E0tWnYi%2BITF9fXzvk3ycBQec3G%2BWxoA%2Fm57w2OCOYVRnXQZRYoOm1%2Fe5kKGuPoT4fq5h8dpoqkYI8oEVGXWYNhj9sN1FeIfjsH54u2ms8Euqlo%2FDrvmi9hIDVQUc5sOv0GVOabMCfF10Ut%2BsICqwe7y%2BZTQ1Andk%2FhoEGNeE8rJ%2FgVqTOURDwhUbU99slaSTfWKj4lxkB4%2B39wLIvlTHzFvtaPefSNJn6lVQEJCk4ohTpMTn%2BYcYBQ3ySK34fyqQZKCBam22fQ%2FrCRqeLqi8SMxelXtccukRH1hxpdPrkk%2FERRhVG9ulWudvPj%2F5IPFZTtOrumWEoT%2BEf%2FVuCQRTOWcfBbxCfKzvhwmRWvirJ4iiMvZ7ttYDdr1nX0qcxXOYDYcUVYtXI9npcpPoZc3d9RfLpmp1clXll168KNCtgNJXuPxST9FgVpMBgFaumcGRR0RF%2BlI2rYylPcFtwc5h7azWLZ85UwIJcdi1za75HUDlQMcXpW0Uc4C9U3ddh3gqYllUlVy1FTmjiM%2FDgwgejcxgY6pgGjYqddm9eTqIhUCgeGkYNVYGm01nEn9Ytpu6nx4NeSTGYL7sq4lC7Kig5kJGKPugTRzFDoleHEUz5Jkk42GzEBeWyQJi0y%2FVQQT3yxACsaEl8d2G5%2BsAqcP5uX7aCzqy8MrWNWTt7NUtAaFiHbwRAtDKsv8TLwU5HNLorxgd2HY49r4OmPAoY9uY9j%2BqP8HVOtT05ohlL7PHuKGslRle%2Fr7%2BxijrFh&X-Amz-Signature=4ab98302bf381bd1c46ad7398579464deb733b10968c8e314fd7bc82bc3cbfc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646RIPXNZ%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIANSvwbukuDdRULjNJvTyf5jxCKRSodCp5KqRiVOOeRaAiEApqzqBnpNfIiluzudPBazCIt2RVEN8Vztx1TuH0YySl4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNnTVpl6fSQ83PaUircAy62oochF4D8ik5UMuvxhZG6RW2yo%2F%2F4Bi6SXQono8ahIMw6UCOg6TjtztT9Y01sr9iIP842s1hCVUqgtgCfjF0t7VO3QbGdJ0afCNRYbfQkAJxxvu7l08wVuxo8j65%2BRP5eQ0Ji%2Fpm0Z56dg12%2F9NCmDBmu0V7zt%2FSrfSPlTGrbzkKwsQ%2FMvKHHMg0YLRr87HhAOgbcjnDI4CFWjbBF55Kw%2FwlNIaWl%2FXxQoQ7GZTqns%2F9MJSm6x5uc9V%2Bp%2BT%2FyU5HNNerEttyOAkz42MF8f4YCVQZxKGHbwBtF78hC65HRNRPUmfPUZhYmNSle8sZrD14zQA2eQacTa6x4Wxofl6v4OFVnbvCsd%2Bpot8PTTOEsShAKACkU61nBEv0nNBdgIjJVMjSD3%2F%2BC7iFcqQefZMDddorot3w4c0oc5IQ54wCfij78SQklTyYcJ3FXzFAw6lH0xAhYKZ30DoCfOQwD9wiiIHnKqCj5wHGZrmWJzmhN2obeqESjSIr0%2FUzKXVZwcEcnbAut3ICft%2B2gnn4%2F5gxix6sPAt%2BPupyd%2BzkpKEF1FU9OM7JNmluWgCHob7HqtSPh7BZ18JN6J2%2FtA5WrTwiR36eZpWlej7K4IUGa95PGJwWVDHUPLx2Ru1bOMOTn3MYGOqUBaglLXMb%2FX2RuzkjBr00u1w51eqv50K227sqA9jVIf%2BKs8Qz2iAECTLPRVcYzYkAWegqHZFaBp2rduAGto1IA2abPIcT3k5qcoUWhKmQt79PE2UDH%2BSwnISnB7695ChmDRZPUEMVSD8P6dM5vOfrV%2FZWjRjWrXwmOfsijTt8JLLtTzIJj7EUhiA4oN6KmlGOTBzH6mcMwK9QvjEVYPLj4n5wM%2FaqT&X-Amz-Signature=8159bd452b0f003113c8b8505282a595bdf2d91deb3a5097f11fe76695a2cd90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD4ONYOS%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIC7l4VlLy%2F9KHCHdKMyLvhuVQ%2Fck4fAjFlLUCH0eIHRtAiEAhX44x%2FxjbPISJWhEN%2BOt0p8G0%2F8Pukbg1YXiG9ViLooqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0rFJTga3TiNZazOSrcAw5leW%2FHGjKuleRp0qWVYCT9f1NFBEcKLMlGT8wXaEz6NQDcsxkRcdmHl2uuJ45d7wbeKeeXIt6JmrdT5rdmcBF8uC8%2F0ccViLkMPp31aiZeaTRCmVw4mw4XDxMksbYHJJUxdrlxpe3uiZH3lRck88VB7HZVgkqawaDvYlhmzYYwcdp5EDO%2BjQcsFo7QUsA4Q%2BU0s04qLmOCnl%2F6pRFW2pHe%2BxPmm1dpliVFI%2BNxShH8yUO8e5gal3YbjWxX9sK6rWPEpQkBKFQn3ChmJ3g9sseY1Lhy4OwJVjtAvc8%2F4s4pfBBBnVVYun5WZ8k1%2B1iB2ZXmRwXEbGPQlfWVEaDojofveKHGNk%2F1zaez3onZf2u%2FsrmCRA0wHs5jaCqeFHgPtkyYzQW8%2FkEoUa3vGHyhMh23OxBGkT8eArygECgXGW5JE8zlPNym9wEhyLvUG09p%2FDVMO%2BCgMYVnJ%2FjtsNxS8YWbCo1F78L62pMrZ9huaFfXO126I2py2CwGPEvFfTBfGE%2B6dqw1aMrjNoKd6aCOF4tmpmP0TLLSWTz9HpemZ87UQFOtWW2%2BalEAVJNjlSOv4tWBfd6YcurDgmVyYh3nR%2FzZLKJVvcBn5Fx%2Fud2Ka9J3qvxSA1cTrjpl7KMKMM%2Fn3MYGOqUB8xWS0jDaXi%2BH0hyIUN2SQueepA%2BuAa3gBa48kBqWcSXwBqiJFwVons3DcoxVijcdLm3G%2FPzuYjFKFtnfNzz5fieqe%2FxjrYWWOO3ymAyg%2BAQ6JtEngilyXelrJZ0VWxcZQROPvaQ5xFn4%2B2MVUZtMlE646zFaumkjBqAMh%2BRAX8k7nvM1O00g9TSInmkflXgY5YpTUecicb2mTjm1J%2FSmkvSKLxYT&X-Amz-Signature=4f10cab70779a1bd60d3bcd87e328caa39c6761ec4919abbaf00354987818040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646RIPXNZ%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIANSvwbukuDdRULjNJvTyf5jxCKRSodCp5KqRiVOOeRaAiEApqzqBnpNfIiluzudPBazCIt2RVEN8Vztx1TuH0YySl4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNnTVpl6fSQ83PaUircAy62oochF4D8ik5UMuvxhZG6RW2yo%2F%2F4Bi6SXQono8ahIMw6UCOg6TjtztT9Y01sr9iIP842s1hCVUqgtgCfjF0t7VO3QbGdJ0afCNRYbfQkAJxxvu7l08wVuxo8j65%2BRP5eQ0Ji%2Fpm0Z56dg12%2F9NCmDBmu0V7zt%2FSrfSPlTGrbzkKwsQ%2FMvKHHMg0YLRr87HhAOgbcjnDI4CFWjbBF55Kw%2FwlNIaWl%2FXxQoQ7GZTqns%2F9MJSm6x5uc9V%2Bp%2BT%2FyU5HNNerEttyOAkz42MF8f4YCVQZxKGHbwBtF78hC65HRNRPUmfPUZhYmNSle8sZrD14zQA2eQacTa6x4Wxofl6v4OFVnbvCsd%2Bpot8PTTOEsShAKACkU61nBEv0nNBdgIjJVMjSD3%2F%2BC7iFcqQefZMDddorot3w4c0oc5IQ54wCfij78SQklTyYcJ3FXzFAw6lH0xAhYKZ30DoCfOQwD9wiiIHnKqCj5wHGZrmWJzmhN2obeqESjSIr0%2FUzKXVZwcEcnbAut3ICft%2B2gnn4%2F5gxix6sPAt%2BPupyd%2BzkpKEF1FU9OM7JNmluWgCHob7HqtSPh7BZ18JN6J2%2FtA5WrTwiR36eZpWlej7K4IUGa95PGJwWVDHUPLx2Ru1bOMOTn3MYGOqUBaglLXMb%2FX2RuzkjBr00u1w51eqv50K227sqA9jVIf%2BKs8Qz2iAECTLPRVcYzYkAWegqHZFaBp2rduAGto1IA2abPIcT3k5qcoUWhKmQt79PE2UDH%2BSwnISnB7695ChmDRZPUEMVSD8P6dM5vOfrV%2FZWjRjWrXwmOfsijTt8JLLtTzIJj7EUhiA4oN6KmlGOTBzH6mcMwK9QvjEVYPLj4n5wM%2FaqT&X-Amz-Signature=f13ad76218aedcfa217edaf6d6254fab84d2c5c67c7196a4c9dbb6a90d2556b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYPZIDN3%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD2Lh3gpiqq4EPkI4j9%2B%2Bu%2F2KbPyLvuX0A6A5YOKUqVugIhANYFF8Ptr4I%2FIbR4kL2SIyAn8Vf%2BDTA66sLM5To3ekJ%2FKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyS62jdzYh4vqJ8ekoq3AP9zTO0vY5uKlTxeAv4PM26oeB1jakBD44ckBe0gsAfW%2BtzeAgqUimo4%2B5azkmfGNuVIjSGGwu1LhlINqFHvQ%2FE5fgOKiKXdOB0MXUAe9s2KHgTe7VUYWRydgXAnTu8PlK4UK4cLdjAwWv5TMh5VJKNYUuRaNo96bZmhiBgACa6O%2BI6nR6CDBlvG0b8kgM%2Blf6565rX7MkHVlHQYi5yMDizTjSGAGJr96gsxSIwAhxV%2FU1sQOGfwZ8b1VpFNqqbTs2VZqE2q%2FCO7NieMSmdfQEMTnewPJB66WxdzL1ySbPC%2FJ44QutaQvIjiT3aLAfMazvwFMRXNPQWstS5FNLa%2BWx%2FvkOCXZfCdGVGjNideNORLzMtmLD09TLiWcqaRcG%2BW2ffxP%2BWK%2BlyPBQxYMp%2B5Y7wUwZ4%2Bjestp9x%2Bc3AHa32pCaakmJARvyt6u7U8NW4zLbCeXvn%2Fv8NnN%2B%2Fp0tI6RX8I6w6KkIIBilkYBis2xxinZvOL8yncVZMbER3LmNoH4%2F7NGntf6Gl%2FMchwnv56Z15%2FEGtB8lcTf0ZbTlENAEIVG%2Fvm21rPxM%2FMo7oDmTueiR8ChClUILvJ14T36vsKP1zl2rhBgxfP8HECPxpz2%2BzTxACE9pYeAUyPGgEcDDJ59zGBjqkAdmfzNW8fFRDVWUq3dXVxbCQQ%2Fo%2Bs2ilFm53e37Alorhn9oBAcG2WNLBg12Crg6t0v%2BMreF4rjhVTEcnwGHwAoaY9llLGK9HYk%2Ff4fwB4dTezm4OlGqssFwj8pOHNGdAzQa6ZLmQHesrcwiG%2FpPwjbt1yqjbv%2BqxtbVlVd3RqoYyPofpLzJaTtXFCputBJAVQ%2BiTkvvMGFOR6vpi8kjCSRMvuthT&X-Amz-Signature=6920e05f2f826307712ce325f02dda1a33e24b76dcb37ca9bc17c8e0a84be168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646RIPXNZ%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIANSvwbukuDdRULjNJvTyf5jxCKRSodCp5KqRiVOOeRaAiEApqzqBnpNfIiluzudPBazCIt2RVEN8Vztx1TuH0YySl4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNnTVpl6fSQ83PaUircAy62oochF4D8ik5UMuvxhZG6RW2yo%2F%2F4Bi6SXQono8ahIMw6UCOg6TjtztT9Y01sr9iIP842s1hCVUqgtgCfjF0t7VO3QbGdJ0afCNRYbfQkAJxxvu7l08wVuxo8j65%2BRP5eQ0Ji%2Fpm0Z56dg12%2F9NCmDBmu0V7zt%2FSrfSPlTGrbzkKwsQ%2FMvKHHMg0YLRr87HhAOgbcjnDI4CFWjbBF55Kw%2FwlNIaWl%2FXxQoQ7GZTqns%2F9MJSm6x5uc9V%2Bp%2BT%2FyU5HNNerEttyOAkz42MF8f4YCVQZxKGHbwBtF78hC65HRNRPUmfPUZhYmNSle8sZrD14zQA2eQacTa6x4Wxofl6v4OFVnbvCsd%2Bpot8PTTOEsShAKACkU61nBEv0nNBdgIjJVMjSD3%2F%2BC7iFcqQefZMDddorot3w4c0oc5IQ54wCfij78SQklTyYcJ3FXzFAw6lH0xAhYKZ30DoCfOQwD9wiiIHnKqCj5wHGZrmWJzmhN2obeqESjSIr0%2FUzKXVZwcEcnbAut3ICft%2B2gnn4%2F5gxix6sPAt%2BPupyd%2BzkpKEF1FU9OM7JNmluWgCHob7HqtSPh7BZ18JN6J2%2FtA5WrTwiR36eZpWlej7K4IUGa95PGJwWVDHUPLx2Ru1bOMOTn3MYGOqUBaglLXMb%2FX2RuzkjBr00u1w51eqv50K227sqA9jVIf%2BKs8Qz2iAECTLPRVcYzYkAWegqHZFaBp2rduAGto1IA2abPIcT3k5qcoUWhKmQt79PE2UDH%2BSwnISnB7695ChmDRZPUEMVSD8P6dM5vOfrV%2FZWjRjWrXwmOfsijTt8JLLtTzIJj7EUhiA4oN6KmlGOTBzH6mcMwK9QvjEVYPLj4n5wM%2FaqT&X-Amz-Signature=9ecb79c85477e58b86ca115ce58c40d82df007156d808f106c290020c469822b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EYAR4XC%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDv%2BPBg6SNH1%2BRyRNvAqnpfQdI%2FQ0vdzQuuS02WePj%2BmQIgFuJMjTeNtyHe5zW%2Bjk4skAE6an1pfpU7w8w7xLz5vfUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvQvDnxrUjzlDJLRCrcA06aUQVFmzHRk49yibNGu0C8r39ZAQh2%2FDOF3hWhce8DIMW%2BkD5wsa1fnBhP%2Fm5CAajxhuTz5%2FC5dfkHO4PDbqySKmWmWVYVRHfEs7nbxJ161BXBmckdJ3QRDEYrBcuYLuQY%2BdR%2BT%2BdRXdtj4CROMDUMF4DpVAy9OXXpyklfSL045s4dz%2BcLsAgM6QMUhaEiCknFMDoG%2B%2FSQ55KAHn5mau2xyi1297mfciQXPsCFrGU6Nuu3WFAm0VOyU%2Bk0ROXXbjRV12WnksMtakZyek1OPB5FS4efKOg9YVkN%2B1eugUHhVptKxQYPfH%2BL%2FX3qFwnphhN1qzWaX0Ll%2BnXG8JF7M%2Bp2bnJYox%2BysnBzyjPTRenX2kLHO1RHfg%2FZbUGLuCiM7vQVK%2FgHhbBIsLef3wsAIgnSmuKMcrzLDvHpZGsspb7Ho9Dr95nzs3o%2FEBr4W0pGPs8M91yxMh%2BuRuXYlJVbTNuqbXatG%2FTtwF%2BjJ9CEFiEbI2Nf6i13otJyDZrlg%2FV3BLhYyTdZiqus0vBYy65ristnvJVEg%2BEBNp43wRWrjxQsITiCGGoCKaLwZ%2F6ieRrTgNXFTIUyOiNcS3Gj%2BWqBVcAVEWYUzyeNrYVCwQ5Dna9Ab49FO2GhtYYDmGzWMLjn3MYGOqUBv3bcpArw5IjHfSvG%2BWne2cQ1bsCKqYcYPMS6mn52i6XvUhPKHB7zwls4S2jkiqs6pVu9zjqZGzXUwLiYAedNKYuh4vlGaYdrXjP4CcWJq%2FNg7LNTQzWFzF%2FeFrMg6Npz%2F9I1lQOORbs890Aqw7gLQs2fXG63k1Jws0tDddCepsyQjNS86gzjNGZyRKLSEdUh%2Bzki2A0CRtWXNIpNJCMQ6TEp0Q%2Bk&X-Amz-Signature=a2bb8c5dbdb0a21a5e7afca2d4673d546db50c5dc5aa71d08b070e238457f48e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIOT5IP6%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCeD7dBWe2H6M%2FZiW5OFOQvgdWiSXF6NlWXl74oaJCp8wIgQVYXpA346eIEGJ2gcdjk8G%2BkETijlRwiSuHpnGl%2Fq8IqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsgp%2FeoeWhB9YCesCrcAwh7eEv4Mjs67zVUyoEIhakDGRf5KFhDScwzbtFoTk0SwMn3mHQFA%2Bcz%2Bv%2Fx%2FyF2VcRT%2FYHD8BLoa1YguAjMjd%2FP%2FuhneoqQ%2FKHxapDNCGzteQvRenSTIWpnxuJlxDFSk472DvqEJjelQps2mbojIbLfcbDEEnD8ypxPmNTW%2F7srrWfPWyDPWPJPJM%2BcPEHi9jSDdrpUZvLMP8zu0jW5ex%2BTNlCu%2FFabI9JNbROTjojhbIcEco7xa27OODcha5zsryax%2BoNJxNjQkWTBl%2FIQT%2FX9t3HmT9M1RNl9wZGT2mL096pN3Svj39c7d%2F31mDgCN3HAa3s7Q9GDtzZ1JGh3vl52594eWNb1VoiuCMO2mi%2FyaDnzNy%2FepyDG4uk43aixI33IxPbRqe7ekJG0rh4dqDoR432e%2FmCI2oh2bflpdlqMnu5jMNXt5oilyQhNQs0TD6gHxVj9xtEVO2lzDYK3sj8vveWarK3u%2BUpqwY%2BS4gNC5uBwyq3o%2FOAV3U9oZXmsMNEEqDUlLYJzlFV46oai62gH5VJgc0bkbj9lkGcMvIUwRCHGgd8hWeogUJ4HcD8wCOa%2BPkKcscPdK3L2XlyTQtDEvJllX%2BBNCCwhk8SEeLy5xTWxBVwluOsqjteNMPvn3MYGOqUBob%2FUIbkZ3bVr26blPLFHL%2FzJby3BzdebWpc6S9KN%2FDpZPnt1vvxvsBbc1T2sRE99oqLtAkKQEeByFB7Rqmrl%2FTvxDaBwqIkEJzcxkS3XylGWDr4KHIyKn7%2BN2MJiaQPK1%2FoVIG85FVki6jfvpUCZ9l%2B3kGQ0st4JIpondn1rr%2BAVZevqnXUoP2nhM%2FGGZcdNLCyasgXfnT8TLSegyvkwJbEQWAqe&X-Amz-Signature=13fd36d9a1d198d933ff02fba3714f7fd8699cfd87f86b82162e59ada4d02908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XJERHK2%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC06p5VPgo7VD2zHoj5eB2gZ4XKBhiF%2Fjofg4Q6Kt47cwIgTlKlqfHvh2n3fXTYmVlOdTh3%2BEaH%2FJe4PN7xVmcjuv4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOUq8Qtr3FwwUa6aSrcA%2FlyTvfAuLhtlwb1R6%2FZUe0lM%2BMuJh4pdyMPn1lf73C8y8u1E6TAshReqVB%2BqlAbOXYam1YitfFiEVFxWcIZkgWrJv7sj9boLWeCQl6hgrHMCGsF4ZduO4GF9FQx%2BTmwjTA9i%2FnTzYTeJppuZAUh9dZMGTEEoBiYUfDvvbit1fV%2BeDIQPVAwhedfV1Xip6cQtpyvmvEKFszGlFTRDj6EGSfc5srsp5wcuLz8X8%2BEkweRsOnlZdsn2l3XacV%2BWyU2aP6O%2BQV%2F9%2BBqNK%2FVBfGAqouy76pUUDGXiWII%2BNQSnam5b5fOt3fH6B7leJXZVdTOZHaWtOTPG3yRv94ky5y5q8cm%2F%2Bw6PfiDIvjy%2BSeTIIHkssyzXTk8R4e7UeBzRqeux6QutAd6SYHhB7S%2F1YBWT6smh2TAiy0MhcLDAf5KtOs1BhTheKtos5wh6i41qeGKCH2GOt6VT4H7IVCDZ%2BGYvVshTbTiDZP7MNhv2iktn%2FGAvn8Rtv8Tj3jhr%2B5Z6ZmPeTrIQsF6KDUcVjj%2BDO%2BnaqapyXSDYQt%2BmWG6XrmAvk3X%2BXm2ScBLvF0euYJtXpsMkxnz3J5KIWLUIqbK1fbjNLwhEnUVNz4fTLIGJrNlXmfdotHN9ippxgBpTP9rMJzo3MYGOqUBTEi5cZTkGSRR8BiNPUO4NYKub5B9zWSSAfCmX39KWocefKxb8ZL7KivC%2Bk3PyZnRHpc7D8IGFwN32MgGQD7OxXdiceopWBPpT%2FKOGt97VNNyI%2BjuxSuQ0J9jlGOeIU89hQy1ebyh6a5JWebu9zihjxlXQPM33C2GUsMnFKnMz1huump%2BoB7JMsvfKO4G%2BXTMFxuPonZ3IjiL8ACkoB2F%2BkhPQo%2FZ&X-Amz-Signature=1f5601a9786551313fb4ffca231341083f6ea94050f3df57899a25c6245c894e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646RIPXNZ%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIANSvwbukuDdRULjNJvTyf5jxCKRSodCp5KqRiVOOeRaAiEApqzqBnpNfIiluzudPBazCIt2RVEN8Vztx1TuH0YySl4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNnTVpl6fSQ83PaUircAy62oochF4D8ik5UMuvxhZG6RW2yo%2F%2F4Bi6SXQono8ahIMw6UCOg6TjtztT9Y01sr9iIP842s1hCVUqgtgCfjF0t7VO3QbGdJ0afCNRYbfQkAJxxvu7l08wVuxo8j65%2BRP5eQ0Ji%2Fpm0Z56dg12%2F9NCmDBmu0V7zt%2FSrfSPlTGrbzkKwsQ%2FMvKHHMg0YLRr87HhAOgbcjnDI4CFWjbBF55Kw%2FwlNIaWl%2FXxQoQ7GZTqns%2F9MJSm6x5uc9V%2Bp%2BT%2FyU5HNNerEttyOAkz42MF8f4YCVQZxKGHbwBtF78hC65HRNRPUmfPUZhYmNSle8sZrD14zQA2eQacTa6x4Wxofl6v4OFVnbvCsd%2Bpot8PTTOEsShAKACkU61nBEv0nNBdgIjJVMjSD3%2F%2BC7iFcqQefZMDddorot3w4c0oc5IQ54wCfij78SQklTyYcJ3FXzFAw6lH0xAhYKZ30DoCfOQwD9wiiIHnKqCj5wHGZrmWJzmhN2obeqESjSIr0%2FUzKXVZwcEcnbAut3ICft%2B2gnn4%2F5gxix6sPAt%2BPupyd%2BzkpKEF1FU9OM7JNmluWgCHob7HqtSPh7BZ18JN6J2%2FtA5WrTwiR36eZpWlej7K4IUGa95PGJwWVDHUPLx2Ru1bOMOTn3MYGOqUBaglLXMb%2FX2RuzkjBr00u1w51eqv50K227sqA9jVIf%2BKs8Qz2iAECTLPRVcYzYkAWegqHZFaBp2rduAGto1IA2abPIcT3k5qcoUWhKmQt79PE2UDH%2BSwnISnB7695ChmDRZPUEMVSD8P6dM5vOfrV%2FZWjRjWrXwmOfsijTt8JLLtTzIJj7EUhiA4oN6KmlGOTBzH6mcMwK9QvjEVYPLj4n5wM%2FaqT&X-Amz-Signature=6ab997556bac129c0a155ac9d95b8e9d99cddd3d9d2ac34721a7e440b7ecaca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646RIPXNZ%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIANSvwbukuDdRULjNJvTyf5jxCKRSodCp5KqRiVOOeRaAiEApqzqBnpNfIiluzudPBazCIt2RVEN8Vztx1TuH0YySl4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNnTVpl6fSQ83PaUircAy62oochF4D8ik5UMuvxhZG6RW2yo%2F%2F4Bi6SXQono8ahIMw6UCOg6TjtztT9Y01sr9iIP842s1hCVUqgtgCfjF0t7VO3QbGdJ0afCNRYbfQkAJxxvu7l08wVuxo8j65%2BRP5eQ0Ji%2Fpm0Z56dg12%2F9NCmDBmu0V7zt%2FSrfSPlTGrbzkKwsQ%2FMvKHHMg0YLRr87HhAOgbcjnDI4CFWjbBF55Kw%2FwlNIaWl%2FXxQoQ7GZTqns%2F9MJSm6x5uc9V%2Bp%2BT%2FyU5HNNerEttyOAkz42MF8f4YCVQZxKGHbwBtF78hC65HRNRPUmfPUZhYmNSle8sZrD14zQA2eQacTa6x4Wxofl6v4OFVnbvCsd%2Bpot8PTTOEsShAKACkU61nBEv0nNBdgIjJVMjSD3%2F%2BC7iFcqQefZMDddorot3w4c0oc5IQ54wCfij78SQklTyYcJ3FXzFAw6lH0xAhYKZ30DoCfOQwD9wiiIHnKqCj5wHGZrmWJzmhN2obeqESjSIr0%2FUzKXVZwcEcnbAut3ICft%2B2gnn4%2F5gxix6sPAt%2BPupyd%2BzkpKEF1FU9OM7JNmluWgCHob7HqtSPh7BZ18JN6J2%2FtA5WrTwiR36eZpWlej7K4IUGa95PGJwWVDHUPLx2Ru1bOMOTn3MYGOqUBaglLXMb%2FX2RuzkjBr00u1w51eqv50K227sqA9jVIf%2BKs8Qz2iAECTLPRVcYzYkAWegqHZFaBp2rduAGto1IA2abPIcT3k5qcoUWhKmQt79PE2UDH%2BSwnISnB7695ChmDRZPUEMVSD8P6dM5vOfrV%2FZWjRjWrXwmOfsijTt8JLLtTzIJj7EUhiA4oN6KmlGOTBzH6mcMwK9QvjEVYPLj4n5wM%2FaqT&X-Amz-Signature=73eae15f76cfc3377b8de5e66abe56c7e6a518e29dff3c36796617f04a3069f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632BMFDS5%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDcIItP9uoBrA1gKQ3dvNPdsNp5jehiDQlnOu4NiUWtcQIgIEMlZJEhOPwIb6WqDh3fhudmvbmhr0qwHnaA3GRr7pYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDML%2BvmHP%2F21O8r%2B2RCrcAxdRrTRful2oR64HCuBAHYgJykFhwnLQFk1PIlgkeo7fNs%2BJNMR%2FncwmA5gXN%2FRYgjNT895XY%2BB2kbfmLc8Tucbls%2B3I5fYbH0RfMbLuTlUpg8RZtyGCBihOmPcQTgJXWAFpJR0PK54%2BCTqllPCQsB3y9uUpVPcIodk1YiDz%2FJGsnxlqKHqWLl2MBrZMJOvwskOEd%2FQ0KDQMexv4ezn4LGYxGvpqn9%2BqpDTYjtrfd3ycIph7E4i3LkHHDWvhXWe%2BYmPfLm4GmANamJGdR4pbSfOOTFehEob6zRTS0%2FdxiGnSZ7w4w6dKCqsSAKYKvDlNZefoiGO22tsx7Q84KKN3vdRWpB1B%2F4g4eBFRXrEDS8PbEqp61klip%2FEXvyFYHPtoXpXoBGIu7YTDVoZovtxl78UerEfnCEcBqv1TN33jG%2FaD6ay8rEXjZmpYSLgeEYA%2Fsiur9GbhzUc%2B7lDH2HArGpX6cO%2F3uQj6db3%2B5onn1AJTopFeeZ5WoRJq1x%2FEOfXc0qA%2BF5CshVVzC1c%2Fn8JC9aWbHZHt6Ghs7xLphmJwzIhIYAg5thTlSM88vlMId91ib6FYGMW6mckKXiP56JM8vT0FwpKEYyRcs0Sq3w6ZTaUNXMP9nTnSlQREqgKPMIHo3MYGOqUBH14pNzonQcrtXvDdGZe3xSzh6I1UP6xPeK5dR9PnKFLshEozRLIaPcSk67AgPKKSpIY3FWx1bRKWvbuM9Qc8WHw1n8ClM%2FWKKPJs9pIzvTqdqrNWZsRBix5W4EHeSd2nXNNAcUlabwRBp8MnmvQ3QIE90aImxrRDmPCBWU7zFYWZrlDYyekfuGlcTM1dvL%2BcQjQounbl2s4Kknl%2FsXZiFEkCz7ON&X-Amz-Signature=c4f09c1b27bd4c4aa17b1bb08a2dd075689b7411796d68a54c2c2842a071e785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632BMFDS5%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDcIItP9uoBrA1gKQ3dvNPdsNp5jehiDQlnOu4NiUWtcQIgIEMlZJEhOPwIb6WqDh3fhudmvbmhr0qwHnaA3GRr7pYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDML%2BvmHP%2F21O8r%2B2RCrcAxdRrTRful2oR64HCuBAHYgJykFhwnLQFk1PIlgkeo7fNs%2BJNMR%2FncwmA5gXN%2FRYgjNT895XY%2BB2kbfmLc8Tucbls%2B3I5fYbH0RfMbLuTlUpg8RZtyGCBihOmPcQTgJXWAFpJR0PK54%2BCTqllPCQsB3y9uUpVPcIodk1YiDz%2FJGsnxlqKHqWLl2MBrZMJOvwskOEd%2FQ0KDQMexv4ezn4LGYxGvpqn9%2BqpDTYjtrfd3ycIph7E4i3LkHHDWvhXWe%2BYmPfLm4GmANamJGdR4pbSfOOTFehEob6zRTS0%2FdxiGnSZ7w4w6dKCqsSAKYKvDlNZefoiGO22tsx7Q84KKN3vdRWpB1B%2F4g4eBFRXrEDS8PbEqp61klip%2FEXvyFYHPtoXpXoBGIu7YTDVoZovtxl78UerEfnCEcBqv1TN33jG%2FaD6ay8rEXjZmpYSLgeEYA%2Fsiur9GbhzUc%2B7lDH2HArGpX6cO%2F3uQj6db3%2B5onn1AJTopFeeZ5WoRJq1x%2FEOfXc0qA%2BF5CshVVzC1c%2Fn8JC9aWbHZHt6Ghs7xLphmJwzIhIYAg5thTlSM88vlMId91ib6FYGMW6mckKXiP56JM8vT0FwpKEYyRcs0Sq3w6ZTaUNXMP9nTnSlQREqgKPMIHo3MYGOqUBH14pNzonQcrtXvDdGZe3xSzh6I1UP6xPeK5dR9PnKFLshEozRLIaPcSk67AgPKKSpIY3FWx1bRKWvbuM9Qc8WHw1n8ClM%2FWKKPJs9pIzvTqdqrNWZsRBix5W4EHeSd2nXNNAcUlabwRBp8MnmvQ3QIE90aImxrRDmPCBWU7zFYWZrlDYyekfuGlcTM1dvL%2BcQjQounbl2s4Kknl%2FsXZiFEkCz7ON&X-Amz-Signature=181f175329085de338b644182d4f4f30cb4e89481f76505500ba2f509e32d5a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632BMFDS5%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDcIItP9uoBrA1gKQ3dvNPdsNp5jehiDQlnOu4NiUWtcQIgIEMlZJEhOPwIb6WqDh3fhudmvbmhr0qwHnaA3GRr7pYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDML%2BvmHP%2F21O8r%2B2RCrcAxdRrTRful2oR64HCuBAHYgJykFhwnLQFk1PIlgkeo7fNs%2BJNMR%2FncwmA5gXN%2FRYgjNT895XY%2BB2kbfmLc8Tucbls%2B3I5fYbH0RfMbLuTlUpg8RZtyGCBihOmPcQTgJXWAFpJR0PK54%2BCTqllPCQsB3y9uUpVPcIodk1YiDz%2FJGsnxlqKHqWLl2MBrZMJOvwskOEd%2FQ0KDQMexv4ezn4LGYxGvpqn9%2BqpDTYjtrfd3ycIph7E4i3LkHHDWvhXWe%2BYmPfLm4GmANamJGdR4pbSfOOTFehEob6zRTS0%2FdxiGnSZ7w4w6dKCqsSAKYKvDlNZefoiGO22tsx7Q84KKN3vdRWpB1B%2F4g4eBFRXrEDS8PbEqp61klip%2FEXvyFYHPtoXpXoBGIu7YTDVoZovtxl78UerEfnCEcBqv1TN33jG%2FaD6ay8rEXjZmpYSLgeEYA%2Fsiur9GbhzUc%2B7lDH2HArGpX6cO%2F3uQj6db3%2B5onn1AJTopFeeZ5WoRJq1x%2FEOfXc0qA%2BF5CshVVzC1c%2Fn8JC9aWbHZHt6Ghs7xLphmJwzIhIYAg5thTlSM88vlMId91ib6FYGMW6mckKXiP56JM8vT0FwpKEYyRcs0Sq3w6ZTaUNXMP9nTnSlQREqgKPMIHo3MYGOqUBH14pNzonQcrtXvDdGZe3xSzh6I1UP6xPeK5dR9PnKFLshEozRLIaPcSk67AgPKKSpIY3FWx1bRKWvbuM9Qc8WHw1n8ClM%2FWKKPJs9pIzvTqdqrNWZsRBix5W4EHeSd2nXNNAcUlabwRBp8MnmvQ3QIE90aImxrRDmPCBWU7zFYWZrlDYyekfuGlcTM1dvL%2BcQjQounbl2s4Kknl%2FsXZiFEkCz7ON&X-Amz-Signature=d7775b4d672edb872b9a8ea021fcd9989bfaa9edd4d156afe5ba8eede90253f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632BMFDS5%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDcIItP9uoBrA1gKQ3dvNPdsNp5jehiDQlnOu4NiUWtcQIgIEMlZJEhOPwIb6WqDh3fhudmvbmhr0qwHnaA3GRr7pYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDML%2BvmHP%2F21O8r%2B2RCrcAxdRrTRful2oR64HCuBAHYgJykFhwnLQFk1PIlgkeo7fNs%2BJNMR%2FncwmA5gXN%2FRYgjNT895XY%2BB2kbfmLc8Tucbls%2B3I5fYbH0RfMbLuTlUpg8RZtyGCBihOmPcQTgJXWAFpJR0PK54%2BCTqllPCQsB3y9uUpVPcIodk1YiDz%2FJGsnxlqKHqWLl2MBrZMJOvwskOEd%2FQ0KDQMexv4ezn4LGYxGvpqn9%2BqpDTYjtrfd3ycIph7E4i3LkHHDWvhXWe%2BYmPfLm4GmANamJGdR4pbSfOOTFehEob6zRTS0%2FdxiGnSZ7w4w6dKCqsSAKYKvDlNZefoiGO22tsx7Q84KKN3vdRWpB1B%2F4g4eBFRXrEDS8PbEqp61klip%2FEXvyFYHPtoXpXoBGIu7YTDVoZovtxl78UerEfnCEcBqv1TN33jG%2FaD6ay8rEXjZmpYSLgeEYA%2Fsiur9GbhzUc%2B7lDH2HArGpX6cO%2F3uQj6db3%2B5onn1AJTopFeeZ5WoRJq1x%2FEOfXc0qA%2BF5CshVVzC1c%2Fn8JC9aWbHZHt6Ghs7xLphmJwzIhIYAg5thTlSM88vlMId91ib6FYGMW6mckKXiP56JM8vT0FwpKEYyRcs0Sq3w6ZTaUNXMP9nTnSlQREqgKPMIHo3MYGOqUBH14pNzonQcrtXvDdGZe3xSzh6I1UP6xPeK5dR9PnKFLshEozRLIaPcSk67AgPKKSpIY3FWx1bRKWvbuM9Qc8WHw1n8ClM%2FWKKPJs9pIzvTqdqrNWZsRBix5W4EHeSd2nXNNAcUlabwRBp8MnmvQ3QIE90aImxrRDmPCBWU7zFYWZrlDYyekfuGlcTM1dvL%2BcQjQounbl2s4Kknl%2FsXZiFEkCz7ON&X-Amz-Signature=6befdf652419b188c50c3171cd3a05f603163cfe146ba59dbae35544e27f3e24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O4QFFKN%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCLa7%2B7rDdymhJy45Qv3oeVcgGIcXbluVH54wEFc2g8AAIhAOCLfgmCSPyfx0znkQO%2F3bUGFXmM1ZL%2BvQ%2FJg5SGsN6JKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYZ0yCGc0GRH3JhiQq3AO3V3kTxmRA%2FAkWdes3ojBXqod0ZinY1tmia2TVfnPatW6RV%2Bij8T3rqPy9P0v0rtCV4l6YyffAmqCBcncYucQgLZqboIkquKdOPqdm4AnnfHZroVTvB0vWp7Spe%2FCyAvtTYFvY%2FuTZGcqD5KmqRUjCLPAPhpwJLN%2B75fikwetEKwTBCOdTosOMjzHXhOeIq6qbgmbnAa2WGJTChKGHzXb3Ho1FiwBR1pYvR0aBBZr0dRCP8inXvhZ%2B8KU%2BM%2FGOm5jSZKPGVJKt1hw7sv1c9kDku7Z%2FZbEVxylwzcJktkiJaFO9u4bEx5huGZGwMFAuZ5Sc9jCFpT7spPbJgWnRIHkFCD4XuxUyknbraE%2BVA88iPlURH4w7d0MjvQRcWjRZzCZ0LR1lcosFSfM%2FJH%2FAiqc8HRKcu%2BrMPKJwdUIc9Lq2R8%2FE5ZlV2cj83JxHgFaoY9BL20KyQhCP%2BCd7VJy2ZhZaOsUDX4BMW5ZPisrvOU7ebKNaAdZRLaLpqPz3MOMnYtlDXTPLOrsOPXfnfNUqFRB8GppJhPiZdDkwjb4jMpqKstK5pmvv4XyQ1Ox1jq2iGHi65QzX9pUoWdtiopLuKoYjLj0AWVuDiDihekQXRW0NQ6rCacoKKx2mrbio%2FDCf59zGBjqkAdHemSHuhe4XWBEaYnxu6Y5UtuPKqQq%2BIOfR0qmgE7Rea%2BXKoowAHEmdyUX%2FLo0cQzgibYPgyfa%2BkmEXSnTSbZIHqquanHQFb9%2FehxkZkbpgNAgOXNHV3DMKwlDUFxAMbQUKwklBZGTRytRoz3vLX3w0nmrg5cjefFJF%2BSuAvX0FreiWwT%2BHVbwCVfhEIRtHGpurr40TOqeMXWAgjkwY8%2FikPo4J&X-Amz-Signature=efc2c4e3fc2d3926d8b3b5873b7bd8cddc37267310b3265a7e2d50244c576fa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632BMFDS5%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDcIItP9uoBrA1gKQ3dvNPdsNp5jehiDQlnOu4NiUWtcQIgIEMlZJEhOPwIb6WqDh3fhudmvbmhr0qwHnaA3GRr7pYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDML%2BvmHP%2F21O8r%2B2RCrcAxdRrTRful2oR64HCuBAHYgJykFhwnLQFk1PIlgkeo7fNs%2BJNMR%2FncwmA5gXN%2FRYgjNT895XY%2BB2kbfmLc8Tucbls%2B3I5fYbH0RfMbLuTlUpg8RZtyGCBihOmPcQTgJXWAFpJR0PK54%2BCTqllPCQsB3y9uUpVPcIodk1YiDz%2FJGsnxlqKHqWLl2MBrZMJOvwskOEd%2FQ0KDQMexv4ezn4LGYxGvpqn9%2BqpDTYjtrfd3ycIph7E4i3LkHHDWvhXWe%2BYmPfLm4GmANamJGdR4pbSfOOTFehEob6zRTS0%2FdxiGnSZ7w4w6dKCqsSAKYKvDlNZefoiGO22tsx7Q84KKN3vdRWpB1B%2F4g4eBFRXrEDS8PbEqp61klip%2FEXvyFYHPtoXpXoBGIu7YTDVoZovtxl78UerEfnCEcBqv1TN33jG%2FaD6ay8rEXjZmpYSLgeEYA%2Fsiur9GbhzUc%2B7lDH2HArGpX6cO%2F3uQj6db3%2B5onn1AJTopFeeZ5WoRJq1x%2FEOfXc0qA%2BF5CshVVzC1c%2Fn8JC9aWbHZHt6Ghs7xLphmJwzIhIYAg5thTlSM88vlMId91ib6FYGMW6mckKXiP56JM8vT0FwpKEYyRcs0Sq3w6ZTaUNXMP9nTnSlQREqgKPMIHo3MYGOqUBH14pNzonQcrtXvDdGZe3xSzh6I1UP6xPeK5dR9PnKFLshEozRLIaPcSk67AgPKKSpIY3FWx1bRKWvbuM9Qc8WHw1n8ClM%2FWKKPJs9pIzvTqdqrNWZsRBix5W4EHeSd2nXNNAcUlabwRBp8MnmvQ3QIE90aImxrRDmPCBWU7zFYWZrlDYyekfuGlcTM1dvL%2BcQjQounbl2s4Kknl%2FsXZiFEkCz7ON&X-Amz-Signature=40fd9acac54dd8d923b7761d0955d3d1073151210ced57e0314ed2d080ef24d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632BMFDS5%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDcIItP9uoBrA1gKQ3dvNPdsNp5jehiDQlnOu4NiUWtcQIgIEMlZJEhOPwIb6WqDh3fhudmvbmhr0qwHnaA3GRr7pYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDML%2BvmHP%2F21O8r%2B2RCrcAxdRrTRful2oR64HCuBAHYgJykFhwnLQFk1PIlgkeo7fNs%2BJNMR%2FncwmA5gXN%2FRYgjNT895XY%2BB2kbfmLc8Tucbls%2B3I5fYbH0RfMbLuTlUpg8RZtyGCBihOmPcQTgJXWAFpJR0PK54%2BCTqllPCQsB3y9uUpVPcIodk1YiDz%2FJGsnxlqKHqWLl2MBrZMJOvwskOEd%2FQ0KDQMexv4ezn4LGYxGvpqn9%2BqpDTYjtrfd3ycIph7E4i3LkHHDWvhXWe%2BYmPfLm4GmANamJGdR4pbSfOOTFehEob6zRTS0%2FdxiGnSZ7w4w6dKCqsSAKYKvDlNZefoiGO22tsx7Q84KKN3vdRWpB1B%2F4g4eBFRXrEDS8PbEqp61klip%2FEXvyFYHPtoXpXoBGIu7YTDVoZovtxl78UerEfnCEcBqv1TN33jG%2FaD6ay8rEXjZmpYSLgeEYA%2Fsiur9GbhzUc%2B7lDH2HArGpX6cO%2F3uQj6db3%2B5onn1AJTopFeeZ5WoRJq1x%2FEOfXc0qA%2BF5CshVVzC1c%2Fn8JC9aWbHZHt6Ghs7xLphmJwzIhIYAg5thTlSM88vlMId91ib6FYGMW6mckKXiP56JM8vT0FwpKEYyRcs0Sq3w6ZTaUNXMP9nTnSlQREqgKPMIHo3MYGOqUBH14pNzonQcrtXvDdGZe3xSzh6I1UP6xPeK5dR9PnKFLshEozRLIaPcSk67AgPKKSpIY3FWx1bRKWvbuM9Qc8WHw1n8ClM%2FWKKPJs9pIzvTqdqrNWZsRBix5W4EHeSd2nXNNAcUlabwRBp8MnmvQ3QIE90aImxrRDmPCBWU7zFYWZrlDYyekfuGlcTM1dvL%2BcQjQounbl2s4Kknl%2FsXZiFEkCz7ON&X-Amz-Signature=a87e8d5836748d56d0cdeca6ea7c623cc8099be22c71d4156d1ef3fc053617fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632BMFDS5%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDcIItP9uoBrA1gKQ3dvNPdsNp5jehiDQlnOu4NiUWtcQIgIEMlZJEhOPwIb6WqDh3fhudmvbmhr0qwHnaA3GRr7pYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDML%2BvmHP%2F21O8r%2B2RCrcAxdRrTRful2oR64HCuBAHYgJykFhwnLQFk1PIlgkeo7fNs%2BJNMR%2FncwmA5gXN%2FRYgjNT895XY%2BB2kbfmLc8Tucbls%2B3I5fYbH0RfMbLuTlUpg8RZtyGCBihOmPcQTgJXWAFpJR0PK54%2BCTqllPCQsB3y9uUpVPcIodk1YiDz%2FJGsnxlqKHqWLl2MBrZMJOvwskOEd%2FQ0KDQMexv4ezn4LGYxGvpqn9%2BqpDTYjtrfd3ycIph7E4i3LkHHDWvhXWe%2BYmPfLm4GmANamJGdR4pbSfOOTFehEob6zRTS0%2FdxiGnSZ7w4w6dKCqsSAKYKvDlNZefoiGO22tsx7Q84KKN3vdRWpB1B%2F4g4eBFRXrEDS8PbEqp61klip%2FEXvyFYHPtoXpXoBGIu7YTDVoZovtxl78UerEfnCEcBqv1TN33jG%2FaD6ay8rEXjZmpYSLgeEYA%2Fsiur9GbhzUc%2B7lDH2HArGpX6cO%2F3uQj6db3%2B5onn1AJTopFeeZ5WoRJq1x%2FEOfXc0qA%2BF5CshVVzC1c%2Fn8JC9aWbHZHt6Ghs7xLphmJwzIhIYAg5thTlSM88vlMId91ib6FYGMW6mckKXiP56JM8vT0FwpKEYyRcs0Sq3w6ZTaUNXMP9nTnSlQREqgKPMIHo3MYGOqUBH14pNzonQcrtXvDdGZe3xSzh6I1UP6xPeK5dR9PnKFLshEozRLIaPcSk67AgPKKSpIY3FWx1bRKWvbuM9Qc8WHw1n8ClM%2FWKKPJs9pIzvTqdqrNWZsRBix5W4EHeSd2nXNNAcUlabwRBp8MnmvQ3QIE90aImxrRDmPCBWU7zFYWZrlDYyekfuGlcTM1dvL%2BcQjQounbl2s4Kknl%2FsXZiFEkCz7ON&X-Amz-Signature=d7775b4d672edb872b9a8ea021fcd9989bfaa9edd4d156afe5ba8eede90253f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632BMFDS5%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDcIItP9uoBrA1gKQ3dvNPdsNp5jehiDQlnOu4NiUWtcQIgIEMlZJEhOPwIb6WqDh3fhudmvbmhr0qwHnaA3GRr7pYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDML%2BvmHP%2F21O8r%2B2RCrcAxdRrTRful2oR64HCuBAHYgJykFhwnLQFk1PIlgkeo7fNs%2BJNMR%2FncwmA5gXN%2FRYgjNT895XY%2BB2kbfmLc8Tucbls%2B3I5fYbH0RfMbLuTlUpg8RZtyGCBihOmPcQTgJXWAFpJR0PK54%2BCTqllPCQsB3y9uUpVPcIodk1YiDz%2FJGsnxlqKHqWLl2MBrZMJOvwskOEd%2FQ0KDQMexv4ezn4LGYxGvpqn9%2BqpDTYjtrfd3ycIph7E4i3LkHHDWvhXWe%2BYmPfLm4GmANamJGdR4pbSfOOTFehEob6zRTS0%2FdxiGnSZ7w4w6dKCqsSAKYKvDlNZefoiGO22tsx7Q84KKN3vdRWpB1B%2F4g4eBFRXrEDS8PbEqp61klip%2FEXvyFYHPtoXpXoBGIu7YTDVoZovtxl78UerEfnCEcBqv1TN33jG%2FaD6ay8rEXjZmpYSLgeEYA%2Fsiur9GbhzUc%2B7lDH2HArGpX6cO%2F3uQj6db3%2B5onn1AJTopFeeZ5WoRJq1x%2FEOfXc0qA%2BF5CshVVzC1c%2Fn8JC9aWbHZHt6Ghs7xLphmJwzIhIYAg5thTlSM88vlMId91ib6FYGMW6mckKXiP56JM8vT0FwpKEYyRcs0Sq3w6ZTaUNXMP9nTnSlQREqgKPMIHo3MYGOqUBH14pNzonQcrtXvDdGZe3xSzh6I1UP6xPeK5dR9PnKFLshEozRLIaPcSk67AgPKKSpIY3FWx1bRKWvbuM9Qc8WHw1n8ClM%2FWKKPJs9pIzvTqdqrNWZsRBix5W4EHeSd2nXNNAcUlabwRBp8MnmvQ3QIE90aImxrRDmPCBWU7zFYWZrlDYyekfuGlcTM1dvL%2BcQjQounbl2s4Kknl%2FsXZiFEkCz7ON&X-Amz-Signature=b446a407d3a8b534f5eb4a18d8155e5eae917f4cd9deb3159796ffc412cb69d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632BMFDS5%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDcIItP9uoBrA1gKQ3dvNPdsNp5jehiDQlnOu4NiUWtcQIgIEMlZJEhOPwIb6WqDh3fhudmvbmhr0qwHnaA3GRr7pYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDML%2BvmHP%2F21O8r%2B2RCrcAxdRrTRful2oR64HCuBAHYgJykFhwnLQFk1PIlgkeo7fNs%2BJNMR%2FncwmA5gXN%2FRYgjNT895XY%2BB2kbfmLc8Tucbls%2B3I5fYbH0RfMbLuTlUpg8RZtyGCBihOmPcQTgJXWAFpJR0PK54%2BCTqllPCQsB3y9uUpVPcIodk1YiDz%2FJGsnxlqKHqWLl2MBrZMJOvwskOEd%2FQ0KDQMexv4ezn4LGYxGvpqn9%2BqpDTYjtrfd3ycIph7E4i3LkHHDWvhXWe%2BYmPfLm4GmANamJGdR4pbSfOOTFehEob6zRTS0%2FdxiGnSZ7w4w6dKCqsSAKYKvDlNZefoiGO22tsx7Q84KKN3vdRWpB1B%2F4g4eBFRXrEDS8PbEqp61klip%2FEXvyFYHPtoXpXoBGIu7YTDVoZovtxl78UerEfnCEcBqv1TN33jG%2FaD6ay8rEXjZmpYSLgeEYA%2Fsiur9GbhzUc%2B7lDH2HArGpX6cO%2F3uQj6db3%2B5onn1AJTopFeeZ5WoRJq1x%2FEOfXc0qA%2BF5CshVVzC1c%2Fn8JC9aWbHZHt6Ghs7xLphmJwzIhIYAg5thTlSM88vlMId91ib6FYGMW6mckKXiP56JM8vT0FwpKEYyRcs0Sq3w6ZTaUNXMP9nTnSlQREqgKPMIHo3MYGOqUBH14pNzonQcrtXvDdGZe3xSzh6I1UP6xPeK5dR9PnKFLshEozRLIaPcSk67AgPKKSpIY3FWx1bRKWvbuM9Qc8WHw1n8ClM%2FWKKPJs9pIzvTqdqrNWZsRBix5W4EHeSd2nXNNAcUlabwRBp8MnmvQ3QIE90aImxrRDmPCBWU7zFYWZrlDYyekfuGlcTM1dvL%2BcQjQounbl2s4Kknl%2FsXZiFEkCz7ON&X-Amz-Signature=7b5c847a8b93ae3a0b72aa0d57f1d15f6649e238b34727657b152c8ab8e40b11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632BMFDS5%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDcIItP9uoBrA1gKQ3dvNPdsNp5jehiDQlnOu4NiUWtcQIgIEMlZJEhOPwIb6WqDh3fhudmvbmhr0qwHnaA3GRr7pYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDML%2BvmHP%2F21O8r%2B2RCrcAxdRrTRful2oR64HCuBAHYgJykFhwnLQFk1PIlgkeo7fNs%2BJNMR%2FncwmA5gXN%2FRYgjNT895XY%2BB2kbfmLc8Tucbls%2B3I5fYbH0RfMbLuTlUpg8RZtyGCBihOmPcQTgJXWAFpJR0PK54%2BCTqllPCQsB3y9uUpVPcIodk1YiDz%2FJGsnxlqKHqWLl2MBrZMJOvwskOEd%2FQ0KDQMexv4ezn4LGYxGvpqn9%2BqpDTYjtrfd3ycIph7E4i3LkHHDWvhXWe%2BYmPfLm4GmANamJGdR4pbSfOOTFehEob6zRTS0%2FdxiGnSZ7w4w6dKCqsSAKYKvDlNZefoiGO22tsx7Q84KKN3vdRWpB1B%2F4g4eBFRXrEDS8PbEqp61klip%2FEXvyFYHPtoXpXoBGIu7YTDVoZovtxl78UerEfnCEcBqv1TN33jG%2FaD6ay8rEXjZmpYSLgeEYA%2Fsiur9GbhzUc%2B7lDH2HArGpX6cO%2F3uQj6db3%2B5onn1AJTopFeeZ5WoRJq1x%2FEOfXc0qA%2BF5CshVVzC1c%2Fn8JC9aWbHZHt6Ghs7xLphmJwzIhIYAg5thTlSM88vlMId91ib6FYGMW6mckKXiP56JM8vT0FwpKEYyRcs0Sq3w6ZTaUNXMP9nTnSlQREqgKPMIHo3MYGOqUBH14pNzonQcrtXvDdGZe3xSzh6I1UP6xPeK5dR9PnKFLshEozRLIaPcSk67AgPKKSpIY3FWx1bRKWvbuM9Qc8WHw1n8ClM%2FWKKPJs9pIzvTqdqrNWZsRBix5W4EHeSd2nXNNAcUlabwRBp8MnmvQ3QIE90aImxrRDmPCBWU7zFYWZrlDYyekfuGlcTM1dvL%2BcQjQounbl2s4Kknl%2FsXZiFEkCz7ON&X-Amz-Signature=a323cd6b71d10097a311b8db3a004586386efe0a90cf42bd9b8cc4c6c4633c3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


