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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2GA4WE%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKfeVDX%2Fdkb%2BPub5lU%2BCmDCQEK5CUt5zYIPqpSwfeL2wIhALmKwg6GoAq45OLP27M%2BSCCd%2BX9cVL2CSn43jSMvqEfzKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvuYnTXkOApC%2B5T7gq3APs4LVD1ZsPhqv2joRNzYQKcbVrvrxUNMOPF3bj0s7rblfZj9I%2BQFOqxMfnIno9so1X%2FIwcOzkn8E3kwEQSDdavp87FIwCyjc2XIs1RX0NUwk9TAxwQox03xIhFcHcdohXRGrnm9hSZVa0ADAKMzZhU%2FjO8hIz6p%2FlwxUTxjy%2BFI7d7quTNd2rhE6zxKAlZMYAnMAe5UtatZPvFgsyMzriSno%2BgIywype3tGDX%2BhikkHbZ7d3MnwdKDjPkvJ8tg4s0DY56ftddcc%2B%2Bo8Fa6lcvgMPfmVxvPijy4xF7n2qv69NaVPnBmR2iLCtrYlVxkqMU7dcrzR2URrknh%2FDJ6mloWkVcqV4Rnjk9WzCGkODsQYyBbDvQ8bM3qKHyIEaT5K0mF0o2xO7I%2FiN99wdqIaoHNhLp%2B8QHM7U1HO3Qyj99ynNwuUmxlhF4%2B%2FaWL%2FBQX%2BBSLyWPmi7%2BnxgimuoaPqcJ2bgYfrD6pLmHp7F6PYpKUL9lGbJTE%2FiOiRiLddnXJ5ywuL0%2BlwUz6NFrUv1d3VJgbQk1U%2Fl7expH6eW%2FhPPV%2FiGhVGLgKxSOyfTZ7TrcbKDDxGM%2FgEL7tHYzfzIEc3EFu%2F55QHmcdVZD6ye7Wcb0LnLq3zezayB9%2BZ5jFvDDN9IzOBjqkAX5ylNuvmY8w8HURXwKh%2FeFn9NsQ3PshwX3SShspnbtjU4Kf3DhUdqLMPM2Hd4sPziGeh2wrEVLPDvJ2B5TFwVrlxdrKg7W3KdOKtqfE%2Fee3Sj88YeF%2B9jJtmTbSN9PWWXlMge0QJoF1V4j0iQtOzU0xcyJCEdnyu32tAzJ8XnqRv0zqf%2B1kYIz2g4GZYSldiCuSpTEfiOogZCvF5pLIFO%2FVb2rE&X-Amz-Signature=3fc909b58ab2c4e0727881fe813e6431f42e160b7153d1f320cdaedca6d5b6f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2GA4WE%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKfeVDX%2Fdkb%2BPub5lU%2BCmDCQEK5CUt5zYIPqpSwfeL2wIhALmKwg6GoAq45OLP27M%2BSCCd%2BX9cVL2CSn43jSMvqEfzKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvuYnTXkOApC%2B5T7gq3APs4LVD1ZsPhqv2joRNzYQKcbVrvrxUNMOPF3bj0s7rblfZj9I%2BQFOqxMfnIno9so1X%2FIwcOzkn8E3kwEQSDdavp87FIwCyjc2XIs1RX0NUwk9TAxwQox03xIhFcHcdohXRGrnm9hSZVa0ADAKMzZhU%2FjO8hIz6p%2FlwxUTxjy%2BFI7d7quTNd2rhE6zxKAlZMYAnMAe5UtatZPvFgsyMzriSno%2BgIywype3tGDX%2BhikkHbZ7d3MnwdKDjPkvJ8tg4s0DY56ftddcc%2B%2Bo8Fa6lcvgMPfmVxvPijy4xF7n2qv69NaVPnBmR2iLCtrYlVxkqMU7dcrzR2URrknh%2FDJ6mloWkVcqV4Rnjk9WzCGkODsQYyBbDvQ8bM3qKHyIEaT5K0mF0o2xO7I%2FiN99wdqIaoHNhLp%2B8QHM7U1HO3Qyj99ynNwuUmxlhF4%2B%2FaWL%2FBQX%2BBSLyWPmi7%2BnxgimuoaPqcJ2bgYfrD6pLmHp7F6PYpKUL9lGbJTE%2FiOiRiLddnXJ5ywuL0%2BlwUz6NFrUv1d3VJgbQk1U%2Fl7expH6eW%2FhPPV%2FiGhVGLgKxSOyfTZ7TrcbKDDxGM%2FgEL7tHYzfzIEc3EFu%2F55QHmcdVZD6ye7Wcb0LnLq3zezayB9%2BZ5jFvDDN9IzOBjqkAX5ylNuvmY8w8HURXwKh%2FeFn9NsQ3PshwX3SShspnbtjU4Kf3DhUdqLMPM2Hd4sPziGeh2wrEVLPDvJ2B5TFwVrlxdrKg7W3KdOKtqfE%2Fee3Sj88YeF%2B9jJtmTbSN9PWWXlMge0QJoF1V4j0iQtOzU0xcyJCEdnyu32tAzJ8XnqRv0zqf%2B1kYIz2g4GZYSldiCuSpTEfiOogZCvF5pLIFO%2FVb2rE&X-Amz-Signature=0979c16d7c3f663453259c39da26829bbbea1527804a939a292758ace80990e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2GA4WE%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKfeVDX%2Fdkb%2BPub5lU%2BCmDCQEK5CUt5zYIPqpSwfeL2wIhALmKwg6GoAq45OLP27M%2BSCCd%2BX9cVL2CSn43jSMvqEfzKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvuYnTXkOApC%2B5T7gq3APs4LVD1ZsPhqv2joRNzYQKcbVrvrxUNMOPF3bj0s7rblfZj9I%2BQFOqxMfnIno9so1X%2FIwcOzkn8E3kwEQSDdavp87FIwCyjc2XIs1RX0NUwk9TAxwQox03xIhFcHcdohXRGrnm9hSZVa0ADAKMzZhU%2FjO8hIz6p%2FlwxUTxjy%2BFI7d7quTNd2rhE6zxKAlZMYAnMAe5UtatZPvFgsyMzriSno%2BgIywype3tGDX%2BhikkHbZ7d3MnwdKDjPkvJ8tg4s0DY56ftddcc%2B%2Bo8Fa6lcvgMPfmVxvPijy4xF7n2qv69NaVPnBmR2iLCtrYlVxkqMU7dcrzR2URrknh%2FDJ6mloWkVcqV4Rnjk9WzCGkODsQYyBbDvQ8bM3qKHyIEaT5K0mF0o2xO7I%2FiN99wdqIaoHNhLp%2B8QHM7U1HO3Qyj99ynNwuUmxlhF4%2B%2FaWL%2FBQX%2BBSLyWPmi7%2BnxgimuoaPqcJ2bgYfrD6pLmHp7F6PYpKUL9lGbJTE%2FiOiRiLddnXJ5ywuL0%2BlwUz6NFrUv1d3VJgbQk1U%2Fl7expH6eW%2FhPPV%2FiGhVGLgKxSOyfTZ7TrcbKDDxGM%2FgEL7tHYzfzIEc3EFu%2F55QHmcdVZD6ye7Wcb0LnLq3zezayB9%2BZ5jFvDDN9IzOBjqkAX5ylNuvmY8w8HURXwKh%2FeFn9NsQ3PshwX3SShspnbtjU4Kf3DhUdqLMPM2Hd4sPziGeh2wrEVLPDvJ2B5TFwVrlxdrKg7W3KdOKtqfE%2Fee3Sj88YeF%2B9jJtmTbSN9PWWXlMge0QJoF1V4j0iQtOzU0xcyJCEdnyu32tAzJ8XnqRv0zqf%2B1kYIz2g4GZYSldiCuSpTEfiOogZCvF5pLIFO%2FVb2rE&X-Amz-Signature=4abd1b54ea978319bbf7ea4b6b319b9b550a0223f4671087391e30fe5fb311cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2GA4WE%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKfeVDX%2Fdkb%2BPub5lU%2BCmDCQEK5CUt5zYIPqpSwfeL2wIhALmKwg6GoAq45OLP27M%2BSCCd%2BX9cVL2CSn43jSMvqEfzKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvuYnTXkOApC%2B5T7gq3APs4LVD1ZsPhqv2joRNzYQKcbVrvrxUNMOPF3bj0s7rblfZj9I%2BQFOqxMfnIno9so1X%2FIwcOzkn8E3kwEQSDdavp87FIwCyjc2XIs1RX0NUwk9TAxwQox03xIhFcHcdohXRGrnm9hSZVa0ADAKMzZhU%2FjO8hIz6p%2FlwxUTxjy%2BFI7d7quTNd2rhE6zxKAlZMYAnMAe5UtatZPvFgsyMzriSno%2BgIywype3tGDX%2BhikkHbZ7d3MnwdKDjPkvJ8tg4s0DY56ftddcc%2B%2Bo8Fa6lcvgMPfmVxvPijy4xF7n2qv69NaVPnBmR2iLCtrYlVxkqMU7dcrzR2URrknh%2FDJ6mloWkVcqV4Rnjk9WzCGkODsQYyBbDvQ8bM3qKHyIEaT5K0mF0o2xO7I%2FiN99wdqIaoHNhLp%2B8QHM7U1HO3Qyj99ynNwuUmxlhF4%2B%2FaWL%2FBQX%2BBSLyWPmi7%2BnxgimuoaPqcJ2bgYfrD6pLmHp7F6PYpKUL9lGbJTE%2FiOiRiLddnXJ5ywuL0%2BlwUz6NFrUv1d3VJgbQk1U%2Fl7expH6eW%2FhPPV%2FiGhVGLgKxSOyfTZ7TrcbKDDxGM%2FgEL7tHYzfzIEc3EFu%2F55QHmcdVZD6ye7Wcb0LnLq3zezayB9%2BZ5jFvDDN9IzOBjqkAX5ylNuvmY8w8HURXwKh%2FeFn9NsQ3PshwX3SShspnbtjU4Kf3DhUdqLMPM2Hd4sPziGeh2wrEVLPDvJ2B5TFwVrlxdrKg7W3KdOKtqfE%2Fee3Sj88YeF%2B9jJtmTbSN9PWWXlMge0QJoF1V4j0iQtOzU0xcyJCEdnyu32tAzJ8XnqRv0zqf%2B1kYIz2g4GZYSldiCuSpTEfiOogZCvF5pLIFO%2FVb2rE&X-Amz-Signature=5a7a3ee9718fc3c694a836f126959a8fa0fff394ee9e7ef8268ffe21cbd6a1fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2GA4WE%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKfeVDX%2Fdkb%2BPub5lU%2BCmDCQEK5CUt5zYIPqpSwfeL2wIhALmKwg6GoAq45OLP27M%2BSCCd%2BX9cVL2CSn43jSMvqEfzKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvuYnTXkOApC%2B5T7gq3APs4LVD1ZsPhqv2joRNzYQKcbVrvrxUNMOPF3bj0s7rblfZj9I%2BQFOqxMfnIno9so1X%2FIwcOzkn8E3kwEQSDdavp87FIwCyjc2XIs1RX0NUwk9TAxwQox03xIhFcHcdohXRGrnm9hSZVa0ADAKMzZhU%2FjO8hIz6p%2FlwxUTxjy%2BFI7d7quTNd2rhE6zxKAlZMYAnMAe5UtatZPvFgsyMzriSno%2BgIywype3tGDX%2BhikkHbZ7d3MnwdKDjPkvJ8tg4s0DY56ftddcc%2B%2Bo8Fa6lcvgMPfmVxvPijy4xF7n2qv69NaVPnBmR2iLCtrYlVxkqMU7dcrzR2URrknh%2FDJ6mloWkVcqV4Rnjk9WzCGkODsQYyBbDvQ8bM3qKHyIEaT5K0mF0o2xO7I%2FiN99wdqIaoHNhLp%2B8QHM7U1HO3Qyj99ynNwuUmxlhF4%2B%2FaWL%2FBQX%2BBSLyWPmi7%2BnxgimuoaPqcJ2bgYfrD6pLmHp7F6PYpKUL9lGbJTE%2FiOiRiLddnXJ5ywuL0%2BlwUz6NFrUv1d3VJgbQk1U%2Fl7expH6eW%2FhPPV%2FiGhVGLgKxSOyfTZ7TrcbKDDxGM%2FgEL7tHYzfzIEc3EFu%2F55QHmcdVZD6ye7Wcb0LnLq3zezayB9%2BZ5jFvDDN9IzOBjqkAX5ylNuvmY8w8HURXwKh%2FeFn9NsQ3PshwX3SShspnbtjU4Kf3DhUdqLMPM2Hd4sPziGeh2wrEVLPDvJ2B5TFwVrlxdrKg7W3KdOKtqfE%2Fee3Sj88YeF%2B9jJtmTbSN9PWWXlMge0QJoF1V4j0iQtOzU0xcyJCEdnyu32tAzJ8XnqRv0zqf%2B1kYIz2g4GZYSldiCuSpTEfiOogZCvF5pLIFO%2FVb2rE&X-Amz-Signature=fa1dba04125266cb8d9dfb5ac325b7ced945673d649065bdbb79f7b66f4befdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2GA4WE%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKfeVDX%2Fdkb%2BPub5lU%2BCmDCQEK5CUt5zYIPqpSwfeL2wIhALmKwg6GoAq45OLP27M%2BSCCd%2BX9cVL2CSn43jSMvqEfzKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvuYnTXkOApC%2B5T7gq3APs4LVD1ZsPhqv2joRNzYQKcbVrvrxUNMOPF3bj0s7rblfZj9I%2BQFOqxMfnIno9so1X%2FIwcOzkn8E3kwEQSDdavp87FIwCyjc2XIs1RX0NUwk9TAxwQox03xIhFcHcdohXRGrnm9hSZVa0ADAKMzZhU%2FjO8hIz6p%2FlwxUTxjy%2BFI7d7quTNd2rhE6zxKAlZMYAnMAe5UtatZPvFgsyMzriSno%2BgIywype3tGDX%2BhikkHbZ7d3MnwdKDjPkvJ8tg4s0DY56ftddcc%2B%2Bo8Fa6lcvgMPfmVxvPijy4xF7n2qv69NaVPnBmR2iLCtrYlVxkqMU7dcrzR2URrknh%2FDJ6mloWkVcqV4Rnjk9WzCGkODsQYyBbDvQ8bM3qKHyIEaT5K0mF0o2xO7I%2FiN99wdqIaoHNhLp%2B8QHM7U1HO3Qyj99ynNwuUmxlhF4%2B%2FaWL%2FBQX%2BBSLyWPmi7%2BnxgimuoaPqcJ2bgYfrD6pLmHp7F6PYpKUL9lGbJTE%2FiOiRiLddnXJ5ywuL0%2BlwUz6NFrUv1d3VJgbQk1U%2Fl7expH6eW%2FhPPV%2FiGhVGLgKxSOyfTZ7TrcbKDDxGM%2FgEL7tHYzfzIEc3EFu%2F55QHmcdVZD6ye7Wcb0LnLq3zezayB9%2BZ5jFvDDN9IzOBjqkAX5ylNuvmY8w8HURXwKh%2FeFn9NsQ3PshwX3SShspnbtjU4Kf3DhUdqLMPM2Hd4sPziGeh2wrEVLPDvJ2B5TFwVrlxdrKg7W3KdOKtqfE%2Fee3Sj88YeF%2B9jJtmTbSN9PWWXlMge0QJoF1V4j0iQtOzU0xcyJCEdnyu32tAzJ8XnqRv0zqf%2B1kYIz2g4GZYSldiCuSpTEfiOogZCvF5pLIFO%2FVb2rE&X-Amz-Signature=a8d98f669052e2cad6d173ca23f55ae084fdf9875c2381e9d64a7b9c36e353ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2GA4WE%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKfeVDX%2Fdkb%2BPub5lU%2BCmDCQEK5CUt5zYIPqpSwfeL2wIhALmKwg6GoAq45OLP27M%2BSCCd%2BX9cVL2CSn43jSMvqEfzKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvuYnTXkOApC%2B5T7gq3APs4LVD1ZsPhqv2joRNzYQKcbVrvrxUNMOPF3bj0s7rblfZj9I%2BQFOqxMfnIno9so1X%2FIwcOzkn8E3kwEQSDdavp87FIwCyjc2XIs1RX0NUwk9TAxwQox03xIhFcHcdohXRGrnm9hSZVa0ADAKMzZhU%2FjO8hIz6p%2FlwxUTxjy%2BFI7d7quTNd2rhE6zxKAlZMYAnMAe5UtatZPvFgsyMzriSno%2BgIywype3tGDX%2BhikkHbZ7d3MnwdKDjPkvJ8tg4s0DY56ftddcc%2B%2Bo8Fa6lcvgMPfmVxvPijy4xF7n2qv69NaVPnBmR2iLCtrYlVxkqMU7dcrzR2URrknh%2FDJ6mloWkVcqV4Rnjk9WzCGkODsQYyBbDvQ8bM3qKHyIEaT5K0mF0o2xO7I%2FiN99wdqIaoHNhLp%2B8QHM7U1HO3Qyj99ynNwuUmxlhF4%2B%2FaWL%2FBQX%2BBSLyWPmi7%2BnxgimuoaPqcJ2bgYfrD6pLmHp7F6PYpKUL9lGbJTE%2FiOiRiLddnXJ5ywuL0%2BlwUz6NFrUv1d3VJgbQk1U%2Fl7expH6eW%2FhPPV%2FiGhVGLgKxSOyfTZ7TrcbKDDxGM%2FgEL7tHYzfzIEc3EFu%2F55QHmcdVZD6ye7Wcb0LnLq3zezayB9%2BZ5jFvDDN9IzOBjqkAX5ylNuvmY8w8HURXwKh%2FeFn9NsQ3PshwX3SShspnbtjU4Kf3DhUdqLMPM2Hd4sPziGeh2wrEVLPDvJ2B5TFwVrlxdrKg7W3KdOKtqfE%2Fee3Sj88YeF%2B9jJtmTbSN9PWWXlMge0QJoF1V4j0iQtOzU0xcyJCEdnyu32tAzJ8XnqRv0zqf%2B1kYIz2g4GZYSldiCuSpTEfiOogZCvF5pLIFO%2FVb2rE&X-Amz-Signature=4a9dbab666df4d1c84d1f1f07211f5bb65edccddd1f40d814648730912dd535a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2GA4WE%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKfeVDX%2Fdkb%2BPub5lU%2BCmDCQEK5CUt5zYIPqpSwfeL2wIhALmKwg6GoAq45OLP27M%2BSCCd%2BX9cVL2CSn43jSMvqEfzKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvuYnTXkOApC%2B5T7gq3APs4LVD1ZsPhqv2joRNzYQKcbVrvrxUNMOPF3bj0s7rblfZj9I%2BQFOqxMfnIno9so1X%2FIwcOzkn8E3kwEQSDdavp87FIwCyjc2XIs1RX0NUwk9TAxwQox03xIhFcHcdohXRGrnm9hSZVa0ADAKMzZhU%2FjO8hIz6p%2FlwxUTxjy%2BFI7d7quTNd2rhE6zxKAlZMYAnMAe5UtatZPvFgsyMzriSno%2BgIywype3tGDX%2BhikkHbZ7d3MnwdKDjPkvJ8tg4s0DY56ftddcc%2B%2Bo8Fa6lcvgMPfmVxvPijy4xF7n2qv69NaVPnBmR2iLCtrYlVxkqMU7dcrzR2URrknh%2FDJ6mloWkVcqV4Rnjk9WzCGkODsQYyBbDvQ8bM3qKHyIEaT5K0mF0o2xO7I%2FiN99wdqIaoHNhLp%2B8QHM7U1HO3Qyj99ynNwuUmxlhF4%2B%2FaWL%2FBQX%2BBSLyWPmi7%2BnxgimuoaPqcJ2bgYfrD6pLmHp7F6PYpKUL9lGbJTE%2FiOiRiLddnXJ5ywuL0%2BlwUz6NFrUv1d3VJgbQk1U%2Fl7expH6eW%2FhPPV%2FiGhVGLgKxSOyfTZ7TrcbKDDxGM%2FgEL7tHYzfzIEc3EFu%2F55QHmcdVZD6ye7Wcb0LnLq3zezayB9%2BZ5jFvDDN9IzOBjqkAX5ylNuvmY8w8HURXwKh%2FeFn9NsQ3PshwX3SShspnbtjU4Kf3DhUdqLMPM2Hd4sPziGeh2wrEVLPDvJ2B5TFwVrlxdrKg7W3KdOKtqfE%2Fee3Sj88YeF%2B9jJtmTbSN9PWWXlMge0QJoF1V4j0iQtOzU0xcyJCEdnyu32tAzJ8XnqRv0zqf%2B1kYIz2g4GZYSldiCuSpTEfiOogZCvF5pLIFO%2FVb2rE&X-Amz-Signature=76756ea5c3758b7e145628a15e31a1ce8d285e4044e29e24e4afda62bcf4a6d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2GA4WE%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKfeVDX%2Fdkb%2BPub5lU%2BCmDCQEK5CUt5zYIPqpSwfeL2wIhALmKwg6GoAq45OLP27M%2BSCCd%2BX9cVL2CSn43jSMvqEfzKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvuYnTXkOApC%2B5T7gq3APs4LVD1ZsPhqv2joRNzYQKcbVrvrxUNMOPF3bj0s7rblfZj9I%2BQFOqxMfnIno9so1X%2FIwcOzkn8E3kwEQSDdavp87FIwCyjc2XIs1RX0NUwk9TAxwQox03xIhFcHcdohXRGrnm9hSZVa0ADAKMzZhU%2FjO8hIz6p%2FlwxUTxjy%2BFI7d7quTNd2rhE6zxKAlZMYAnMAe5UtatZPvFgsyMzriSno%2BgIywype3tGDX%2BhikkHbZ7d3MnwdKDjPkvJ8tg4s0DY56ftddcc%2B%2Bo8Fa6lcvgMPfmVxvPijy4xF7n2qv69NaVPnBmR2iLCtrYlVxkqMU7dcrzR2URrknh%2FDJ6mloWkVcqV4Rnjk9WzCGkODsQYyBbDvQ8bM3qKHyIEaT5K0mF0o2xO7I%2FiN99wdqIaoHNhLp%2B8QHM7U1HO3Qyj99ynNwuUmxlhF4%2B%2FaWL%2FBQX%2BBSLyWPmi7%2BnxgimuoaPqcJ2bgYfrD6pLmHp7F6PYpKUL9lGbJTE%2FiOiRiLddnXJ5ywuL0%2BlwUz6NFrUv1d3VJgbQk1U%2Fl7expH6eW%2FhPPV%2FiGhVGLgKxSOyfTZ7TrcbKDDxGM%2FgEL7tHYzfzIEc3EFu%2F55QHmcdVZD6ye7Wcb0LnLq3zezayB9%2BZ5jFvDDN9IzOBjqkAX5ylNuvmY8w8HURXwKh%2FeFn9NsQ3PshwX3SShspnbtjU4Kf3DhUdqLMPM2Hd4sPziGeh2wrEVLPDvJ2B5TFwVrlxdrKg7W3KdOKtqfE%2Fee3Sj88YeF%2B9jJtmTbSN9PWWXlMge0QJoF1V4j0iQtOzU0xcyJCEdnyu32tAzJ8XnqRv0zqf%2B1kYIz2g4GZYSldiCuSpTEfiOogZCvF5pLIFO%2FVb2rE&X-Amz-Signature=fb40cfb0b244ada100a85d233b11cebd89f9f5211dcc806871b9e4186bb5ba16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2GA4WE%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKfeVDX%2Fdkb%2BPub5lU%2BCmDCQEK5CUt5zYIPqpSwfeL2wIhALmKwg6GoAq45OLP27M%2BSCCd%2BX9cVL2CSn43jSMvqEfzKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvuYnTXkOApC%2B5T7gq3APs4LVD1ZsPhqv2joRNzYQKcbVrvrxUNMOPF3bj0s7rblfZj9I%2BQFOqxMfnIno9so1X%2FIwcOzkn8E3kwEQSDdavp87FIwCyjc2XIs1RX0NUwk9TAxwQox03xIhFcHcdohXRGrnm9hSZVa0ADAKMzZhU%2FjO8hIz6p%2FlwxUTxjy%2BFI7d7quTNd2rhE6zxKAlZMYAnMAe5UtatZPvFgsyMzriSno%2BgIywype3tGDX%2BhikkHbZ7d3MnwdKDjPkvJ8tg4s0DY56ftddcc%2B%2Bo8Fa6lcvgMPfmVxvPijy4xF7n2qv69NaVPnBmR2iLCtrYlVxkqMU7dcrzR2URrknh%2FDJ6mloWkVcqV4Rnjk9WzCGkODsQYyBbDvQ8bM3qKHyIEaT5K0mF0o2xO7I%2FiN99wdqIaoHNhLp%2B8QHM7U1HO3Qyj99ynNwuUmxlhF4%2B%2FaWL%2FBQX%2BBSLyWPmi7%2BnxgimuoaPqcJ2bgYfrD6pLmHp7F6PYpKUL9lGbJTE%2FiOiRiLddnXJ5ywuL0%2BlwUz6NFrUv1d3VJgbQk1U%2Fl7expH6eW%2FhPPV%2FiGhVGLgKxSOyfTZ7TrcbKDDxGM%2FgEL7tHYzfzIEc3EFu%2F55QHmcdVZD6ye7Wcb0LnLq3zezayB9%2BZ5jFvDDN9IzOBjqkAX5ylNuvmY8w8HURXwKh%2FeFn9NsQ3PshwX3SShspnbtjU4Kf3DhUdqLMPM2Hd4sPziGeh2wrEVLPDvJ2B5TFwVrlxdrKg7W3KdOKtqfE%2Fee3Sj88YeF%2B9jJtmTbSN9PWWXlMge0QJoF1V4j0iQtOzU0xcyJCEdnyu32tAzJ8XnqRv0zqf%2B1kYIz2g4GZYSldiCuSpTEfiOogZCvF5pLIFO%2FVb2rE&X-Amz-Signature=12ff847bb42080545a7ef5b974e9239dc31a735668d09d2e96a545c41a2a8d90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5ICIOLG%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEL%2BIiEyGjo%2B4Mco5r5w6r%2FCKR3fGV1YjuMS6aAjsP62AiAgc5KTF94eJYBS%2FMl8By0h%2BK%2BGH5g%2F%2BKq%2FGLWmzAvKsCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM71e7f3xwK9XCCUlZKtwDZLoWRrRDF38H4NcateKhHVA37i9mvf91gJHURjLQ70o0yHSFNG4QzwxCZTUQtZw7wCmIgg0HCjFi%2FvZCNHkjC674gNChmVUPCMXjiuocwl3vBaZ2tjr0jTGh3a6SYcEcHQKXbFXPp7F6UVKPO0v6zHDApnpUf6qgARmdECH196682TZpWwFI9YZckO%2F3cxJyDZplirgRAIhM6RSssHhwUbGqQXZPSfzVZa9mvtZcT97ZRcK1n4nDPiiD3uO%2BWFZEoFKim7t9Gg2oyxoKdnFkpV%2Bl6Z6xzq0D9mWvzNYMae%2BkGzHontMWratRBidK9qKWlxUvKhSkp0gOihULWpxtrS5t%2FC8gJgIHlzFaZIOsXse1mMtfVg2jRg4K7V30qlgGgdurH4TdG9xKDlrW1wKDpKJX0SpdH4H7qAYYn5sUF8A3YilFUpqNwlgTtKv5Bjap9rwmt043eeEQtVoiByifxQ136OP0WGTeQABqstzOw6Mbgq9spebmsJawzJOcMAT4WynMwOxKBuhP8NArEPpVaGdCCStQGEsfovx70sRGeX2Jn0fvkBIqAblhVMmetxb4tue4BmRfhPx%2BsR6Mf4syxQ%2B90mVVZ6P%2BsSEJkzG0DfvbCz%2FMzDoNg4OBNsIw4fSMzgY6pgHc3h8rGcjyieRE6vqYd8xSRRRU5hJXS7aM2g5b2g1Uk3pi%2FDMMXZsQVk6DMX2d5R9ggE6htfXjJUwlwLiSZ%2FvT63puvezNZEe1i9V%2FNssa91fD34HzKiuAs0EczcULb%2BMS9GkU2hbyoMgnfFCJDvhMfyXApXpBa80FfhtW%2B0RRCa%2F%2FNeLyKokrkdLVUWjDVsEdh9xy4HHKNl%2FHMijuB%2B%2F9QARbc7cY&X-Amz-Signature=e64486f25c03b30617a29e545910bb4e5aaa4b962b532b4642bab7d762343d6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJQUEONM%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1zXJSGwMj4MSZhA0xlCdwQVWzWFqGedmr7WOmWgfwTwIhAMwGRNW4%2F7clFAYY1dwxjkf37w%2BCXlkstxku66adjNjsKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxz2U5HyADlMmNfdYYq3AMvs21JVu4TobqETylrt51Q05s%2FB63IufPhXDArJiTarFk7qN4pT28gsCYtYyyT9u36mRQNcDKMiPibF50tKC3kCHsC5WxJSyDSUPXwurMObQMRNziqB%2FiJ3TOaCb1o9lP6IQVJZJTIAdvI9E53uBFZASeVXhcYW0iKTfN5C7%2F9tO5aQO3MX1Q9qdT%2Bh1p2u%2BDEZ4ImE%2B7YULm1qdRrshJlXpiuWZGSfyzC6g9s%2BC9gSR3xmS2KLIKhYKEYMwQVZWsEKjkaZ7yVmS7ZUu8I4lHYN5r3Dn0Z%2BPOgWO25vxMVtjerfWCvqaDaKd35FHivTOSMBNNFxJYXSSILTNJTkgJZOBijPBmqpFv7OGixn4oyiErGG0LTLcHBm36tozfMKA111%2BO5%2F9HqYRYb%2BSO34VwLlzYTcJSMwfTriLX1VCmt%2FUCRNIitCR8odjsWxN%2FdegcxZXB6m3%2FNv%2FNi%2BXpGJEYpNS1TgNswsD%2F6BljwXLlwrEo59mWYguoYFwR9%2BOzD0G%2BiyQtCqAlXAl4TPBf2TQEiTVlj3yMoNi2LSKiwLTkqctxFFsR3QvqjI7tjbeVnKilC5fboaLruH4ehhD0%2FVZYgqDSGf9z4q3tCTTWsVdfPzrsGFkX6LdZi3mjwyTCT9YzOBjqkAU6GK4llXRKDM1ezQEOzECB3ON%2FTuweTeG%2ByH2x92cg%2FNEbni2obSd50GhXWp4F%2Bf9Ja5C3vqhiq%2FatuRuXfTfUJx4TH5VhY0PgVwro8LbAI7bLS9EskAEFDvISs65kRCqNIqIoXdXkycdfxaD2LMwksLzXQSzB%2FDShhqyZwiGe%2BuadWoXcfsBUBHWRvgVg91j7WzeqH6QuhyKjMTNHuoRpxPBLZ&X-Amz-Signature=c76e2984d765855c18f86c9508163d0bceb11021a1d81cde5d7fe9513182acca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KKJMEI3%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPcyRLGAiuUfK7pShmGBUeNydHIkRY%2FRPNevqHWlJvfwIhAJu9mjpbSho%2F7LQpFY0A114W2rHp%2FV5q%2F6Y0xKLtFGqpKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycMomEui5eJI92kFEq3AP5D5OKWknNiFlej%2B%2F4cKepS65gLgew6iIokzD0o1LYZYMhomRl99R3w9Y3xbM1srM6%2BiypBbDrVBobMw39rGThkDSI9U5t2lgLxmdjFGZeu5bG7zA1jWsSzXSkVI7TOf%2BEkWhnkxeyZ8Gnnq1T4GvQSh6traTRSwDFtsuKKwyzC3Va%2Fnw80IWBtzKYqkEJXtfGnU2V%2BmuR6K89E31TRBkQjothcJkDOa1%2BQQnQI2ZDwuYfNcSz%2FC7nKl3nkMoHyXXOYMnlBo%2F9B9Knih4zIfr2jrBkRvWTLGDatnkbocxPmQAFXadKgiHHDNYAiX1s%2BbSLujcGwCqciNNA3zjVqtF52y8A%2BJka64YTwX%2B%2B2%2BXIJUaXYAYDbIzNx4wO0EPZbUIj3jsnjWqbQsIyWKG2Mp42F5Gf8AunGISrG6Ou1Df4KDG31dwwCAc11hAHGBRzAxbb8sR5OeUNNuGskqir5lZVW2SXCvgMwd811Sw1yNYbfbEjHrkcyzIA8AHqX8S81Bwp9jgTEGC3uATJQxjBgh611h2NEz%2FjILB0uqDvJWLX95FiUUDx%2B25Elfrv2JJCEdoYx%2FGmU1OPdhWqGcqO0GXuql4cYSxeb0agSf1HuIv3bx1WzGw1NjIMkqPbejCB9IzOBjqkAdpKdDcrtHKDzNvUXvtj5%2Fm7l%2BLKn2bueNmpw%2FK9%2F0mGqH87i8dGm%2FPAwrUEHMQBo4Yy72Sc%2BBbTJoN5pFx4U9lO34t%2BuZh40luufbOS4JZxOYLmTRGCBe0cJAn7OXLheuCNgl%2FFkjDYuCHO84%2FCN5wYVU3IM1Z1EJB2jBVbfDpcKdEtMNb8LHPsYtAI8DoRWCsB094ufUb%2Fx9MqmJO67m3vDyP%2F&X-Amz-Signature=50964ecd974f79acf191780c7bc529b90d18071f3b3417006d430294e004ee52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2GA4WE%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKfeVDX%2Fdkb%2BPub5lU%2BCmDCQEK5CUt5zYIPqpSwfeL2wIhALmKwg6GoAq45OLP27M%2BSCCd%2BX9cVL2CSn43jSMvqEfzKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvuYnTXkOApC%2B5T7gq3APs4LVD1ZsPhqv2joRNzYQKcbVrvrxUNMOPF3bj0s7rblfZj9I%2BQFOqxMfnIno9so1X%2FIwcOzkn8E3kwEQSDdavp87FIwCyjc2XIs1RX0NUwk9TAxwQox03xIhFcHcdohXRGrnm9hSZVa0ADAKMzZhU%2FjO8hIz6p%2FlwxUTxjy%2BFI7d7quTNd2rhE6zxKAlZMYAnMAe5UtatZPvFgsyMzriSno%2BgIywype3tGDX%2BhikkHbZ7d3MnwdKDjPkvJ8tg4s0DY56ftddcc%2B%2Bo8Fa6lcvgMPfmVxvPijy4xF7n2qv69NaVPnBmR2iLCtrYlVxkqMU7dcrzR2URrknh%2FDJ6mloWkVcqV4Rnjk9WzCGkODsQYyBbDvQ8bM3qKHyIEaT5K0mF0o2xO7I%2FiN99wdqIaoHNhLp%2B8QHM7U1HO3Qyj99ynNwuUmxlhF4%2B%2FaWL%2FBQX%2BBSLyWPmi7%2BnxgimuoaPqcJ2bgYfrD6pLmHp7F6PYpKUL9lGbJTE%2FiOiRiLddnXJ5ywuL0%2BlwUz6NFrUv1d3VJgbQk1U%2Fl7expH6eW%2FhPPV%2FiGhVGLgKxSOyfTZ7TrcbKDDxGM%2FgEL7tHYzfzIEc3EFu%2F55QHmcdVZD6ye7Wcb0LnLq3zezayB9%2BZ5jFvDDN9IzOBjqkAX5ylNuvmY8w8HURXwKh%2FeFn9NsQ3PshwX3SShspnbtjU4Kf3DhUdqLMPM2Hd4sPziGeh2wrEVLPDvJ2B5TFwVrlxdrKg7W3KdOKtqfE%2Fee3Sj88YeF%2B9jJtmTbSN9PWWXlMge0QJoF1V4j0iQtOzU0xcyJCEdnyu32tAzJ8XnqRv0zqf%2B1kYIz2g4GZYSldiCuSpTEfiOogZCvF5pLIFO%2FVb2rE&X-Amz-Signature=118123d9012be71500e2bc15f3b4a89cc3991c8e63938b8634074762179ce11d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIMONDMI%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjHLk8n3G%2BW9QK%2FOYxYA3o763gwfeyCqFdBNqxDSS1MwIgKbcl6R4G2CGdcZvsUOu3clFj8uC9iz2XN8W2sR0oTrsqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUzHQfNNLzv%2Fs6bsSrcA%2BzlikSBPEDGgT6uRD7UI4gBJfji1iMtTjkNP22wUA%2BtHDXbTpbg%2BC5uPkDiiMPMpUjPjG5gzgJ1595Valz8sWgGKC45ZcvgmOMjSPrCdg%2FA2onD2VwtvVUPM86HGjTsFXTTCd0DiEbadlNXKDXZef6grEz%2FgBCi98toFTpVDdBfxEZ9G6PC%2Fk%2FAcaxeNh0%2BO7il8JXy8J9sd3byYw2%2Bn242YRNlrBiCPMkhJ9a1YW3qrMDlI6S82djgiTrv1afEh2IGRrMslanxEKbgvdJlzvU1ckU8ZwFPotVCf%2FBqCjJdyw7X%2F9d8GRunilHH8XRSFj2w%2FUjEAOE2T4pQRpA1sC3cNXThHr2%2B2sH7kakSqq0VpacKg8PapCZruSLHXrw084hN08hZnO3PcAtD%2BFUvW8Wno1%2FXQLyMULpY5a1fxv0dxbBY7N0tB8MjVMscqSrCt2ZT0kJxmhLBBFE2gydgdTNrOWEPRVWOi1Fv3ZF%2FEK7CPkMdBvV3%2B1wCY%2FGM3f0PPCFdLR8J9j%2BaJ8htAaPiopc9LUzwy0K7Qj8%2FxvuccR%2B%2BnzZlqRR2gJrVKM3lX7OSP9q7zB2o4XTFemOX258qpYEyMNxtLqf24PxO3K1lNAl4l7Awd67BfF%2FbrZ0RMJL1jM4GOqUBQQkmCEV%2FyCk%2FHS7vnrmEVvsYiczzy7ToOU75Bv3YObZtY8uq328ytrsGNqlV0mmOF8O6vFfUDDZ5Rg1Xxkr3lIstLU3zCeypftt5qsgKXp2YgSpcS0%2Fzka95MtVPNofSbW1fJw7JJLLDQDakAjkbgHDAQpMn3sJ542jOygr8XACktkLzAT1nPqVjfugcNUEFIW3vCMPfg9KyyrtBCfdqeW1Qb36g&X-Amz-Signature=d14bf795295cfa8a269e748f65b70ba91abcc0e030e83ee7c0af95b7fc5eb910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2GA4WE%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKfeVDX%2Fdkb%2BPub5lU%2BCmDCQEK5CUt5zYIPqpSwfeL2wIhALmKwg6GoAq45OLP27M%2BSCCd%2BX9cVL2CSn43jSMvqEfzKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvuYnTXkOApC%2B5T7gq3APs4LVD1ZsPhqv2joRNzYQKcbVrvrxUNMOPF3bj0s7rblfZj9I%2BQFOqxMfnIno9so1X%2FIwcOzkn8E3kwEQSDdavp87FIwCyjc2XIs1RX0NUwk9TAxwQox03xIhFcHcdohXRGrnm9hSZVa0ADAKMzZhU%2FjO8hIz6p%2FlwxUTxjy%2BFI7d7quTNd2rhE6zxKAlZMYAnMAe5UtatZPvFgsyMzriSno%2BgIywype3tGDX%2BhikkHbZ7d3MnwdKDjPkvJ8tg4s0DY56ftddcc%2B%2Bo8Fa6lcvgMPfmVxvPijy4xF7n2qv69NaVPnBmR2iLCtrYlVxkqMU7dcrzR2URrknh%2FDJ6mloWkVcqV4Rnjk9WzCGkODsQYyBbDvQ8bM3qKHyIEaT5K0mF0o2xO7I%2FiN99wdqIaoHNhLp%2B8QHM7U1HO3Qyj99ynNwuUmxlhF4%2B%2FaWL%2FBQX%2BBSLyWPmi7%2BnxgimuoaPqcJ2bgYfrD6pLmHp7F6PYpKUL9lGbJTE%2FiOiRiLddnXJ5ywuL0%2BlwUz6NFrUv1d3VJgbQk1U%2Fl7expH6eW%2FhPPV%2FiGhVGLgKxSOyfTZ7TrcbKDDxGM%2FgEL7tHYzfzIEc3EFu%2F55QHmcdVZD6ye7Wcb0LnLq3zezayB9%2BZ5jFvDDN9IzOBjqkAX5ylNuvmY8w8HURXwKh%2FeFn9NsQ3PshwX3SShspnbtjU4Kf3DhUdqLMPM2Hd4sPziGeh2wrEVLPDvJ2B5TFwVrlxdrKg7W3KdOKtqfE%2Fee3Sj88YeF%2B9jJtmTbSN9PWWXlMge0QJoF1V4j0iQtOzU0xcyJCEdnyu32tAzJ8XnqRv0zqf%2B1kYIz2g4GZYSldiCuSpTEfiOogZCvF5pLIFO%2FVb2rE&X-Amz-Signature=934f2a1d90a0078406d6309bc403d6512cba6d0b293d71a60a2c1acda22f3431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TOCXIPR%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTtkhIfv8WEta5buEqU2ZYantbfwSeOFL0%2BjmBfhxvIAiEA3r1QeJbj9mUlX1NMQJpj7FbRCa8VLgMPqBwEbDP1qiQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRDFCqqEPqvTtIYOCrcA22UPkewGhzkKMDIYD4TCVCjT0x3hKE6vt5EmUqIuZQcUyOetwdkZSpFacdo%2FlGqN%2BEvubx4PTmXcpinJjIx7gMnXT7rpOCLYAIqsWDcQR6npFaYtxPB5kawOr7r4fXtPQZnAIRFKVemdUJzPrxBsRUdK%2B4JLfcWv3hOZYwLOpHNFVr6oOWsMxxxU7tt%2BfFvj4efhsyB5%2FU5B1nfIfWOi%2FXlZMNmMhoiL0DOach47XteJ0RGwrfgXiPiQOqJHFPTkYU%2BijdLxuV7Biha1U9lgCQi4RBwwcrw11Odpb0XPfkWaxLlTd4aGbhu9LfEPVZlRfJNRzxeYGA4F%2FBhHTQMDEqLTCx41P1%2FdUUvL1f2xwCuYdRZdxpM2fipvtCR%2Bmhl2IkJ1TipbmM%2FL5aFh3YYrdIBt39KjyV1%2FMZ%2B60c8XXoybvFbQUi1tRv8x22lHEMhI4yL93P43AwXFNPVxg%2Br0lVcVYuANAQiAbPLGspX2O%2FVRJLazYZMzhZX6yehrDqCEKoeyaxbX6ArCW4b4KrfF8ddkeWNaoliZYPRtlS%2B8%2FHbryEL%2FsteO%2B%2FrRC749H3yhtVILFIcp6wgdkGQWFDhVapsLDnguqGo0v78S2zVqjSCjWq%2B%2Bqhc2JPT5%2BRlMLL1jM4GOqUB7UgQ%2FOowad5udksW%2BZi4pOisjCkj4bUOuUMdAMPn2ss9IpuT9kVb%2FxE9t1Y2sMWD9JnLC5z%2BoFk162q9gh8IHx9wl2JjOPqzaxCIFH2WqCqeNWr2%2BGOqcH98cenJtG%2BCzKRkUzrwrnG6xn7a%2FvmK9x9v5InZRuHvd8Xb3G7u3f9qIfRkqcJSpvG6g9rdozBmrhwG1f42dEx5igSNPKtjx%2FADOtDu&X-Amz-Signature=59971c34271f05fb0ffd2a0ee87c697360148a78210b357d26d17a567c8a43be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2GA4WE%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKfeVDX%2Fdkb%2BPub5lU%2BCmDCQEK5CUt5zYIPqpSwfeL2wIhALmKwg6GoAq45OLP27M%2BSCCd%2BX9cVL2CSn43jSMvqEfzKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvuYnTXkOApC%2B5T7gq3APs4LVD1ZsPhqv2joRNzYQKcbVrvrxUNMOPF3bj0s7rblfZj9I%2BQFOqxMfnIno9so1X%2FIwcOzkn8E3kwEQSDdavp87FIwCyjc2XIs1RX0NUwk9TAxwQox03xIhFcHcdohXRGrnm9hSZVa0ADAKMzZhU%2FjO8hIz6p%2FlwxUTxjy%2BFI7d7quTNd2rhE6zxKAlZMYAnMAe5UtatZPvFgsyMzriSno%2BgIywype3tGDX%2BhikkHbZ7d3MnwdKDjPkvJ8tg4s0DY56ftddcc%2B%2Bo8Fa6lcvgMPfmVxvPijy4xF7n2qv69NaVPnBmR2iLCtrYlVxkqMU7dcrzR2URrknh%2FDJ6mloWkVcqV4Rnjk9WzCGkODsQYyBbDvQ8bM3qKHyIEaT5K0mF0o2xO7I%2FiN99wdqIaoHNhLp%2B8QHM7U1HO3Qyj99ynNwuUmxlhF4%2B%2FaWL%2FBQX%2BBSLyWPmi7%2BnxgimuoaPqcJ2bgYfrD6pLmHp7F6PYpKUL9lGbJTE%2FiOiRiLddnXJ5ywuL0%2BlwUz6NFrUv1d3VJgbQk1U%2Fl7expH6eW%2FhPPV%2FiGhVGLgKxSOyfTZ7TrcbKDDxGM%2FgEL7tHYzfzIEc3EFu%2F55QHmcdVZD6ye7Wcb0LnLq3zezayB9%2BZ5jFvDDN9IzOBjqkAX5ylNuvmY8w8HURXwKh%2FeFn9NsQ3PshwX3SShspnbtjU4Kf3DhUdqLMPM2Hd4sPziGeh2wrEVLPDvJ2B5TFwVrlxdrKg7W3KdOKtqfE%2Fee3Sj88YeF%2B9jJtmTbSN9PWWXlMge0QJoF1V4j0iQtOzU0xcyJCEdnyu32tAzJ8XnqRv0zqf%2B1kYIz2g4GZYSldiCuSpTEfiOogZCvF5pLIFO%2FVb2rE&X-Amz-Signature=fa8566a1bf2686f2cce8c75a650bb541646116ba3a21b154170c0d1ef06744b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHONKDOI%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfMVdbNhW7bZZ72zKLQWn1gA46A2AlgCRRQbehBuGM%2BAIgddLo1Qix0P8K42EnOi9v%2BFPStfeP%2B5rPl1ij4%2FAsh68qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOE7l%2FldshmxpZ9kCrcA%2FftWUZvf%2FBuSV8s2JPm5UyPbeILqGvtLu7o%2FtGKpdoqh96L8LUTsKG0WVpJsWlTyVnRVqnaBxZY4fjlCN9Q%2BIvmLUsNLifXv00qYvFrZhmGNDqa35Tz0hIZLcJWvbDAYwRyUocES1JMUELZhK5gexEUwhxvGmYWGliP2AEIsWZt2tiOD9pEqDOSHmwoy28E1ugoqIgSNm9X%2BdKQx5vWktNzI2eCHCId789Q3Sk%2F%2BL8AomWO9X91VB4fkfA%2FFb28GbTpLX30JRd0Q9rKc6JoL8oYOXbQwz3v1XK%2BiTXtew4IstCanVuB3YX9Sy%2BGNB%2BefP0ClrExHtF16awTDxZjq473yI1RzGNVz%2BYQ1xA1%2BY%2BvsKUF0JHcIv7oMufB4rVfsJtvtE8wCNG9C5mL%2FFcuv4daBB9q8Y2QqmeX0OgcdUE%2FebpR99BW%2B8jzGO90vS3vF04Jdi3rrjRzyR1eAzZtkq9EsDq9%2Bk%2BguC%2BMXLJF238MvP5Lkf1CUQi0kGFirfSBJpImmlO0EfFG2zl%2FFrop9%2BltdUJRN1viNmIBwQGLGUZk44B8E13fBaTcVX32xLGMkaA33p9WkPVcKXwHN6fgx9oRQBiUtWieLpnhqOdyWvAsflA4UJGv2JDFZExQMKP1jM4GOqUB3k9dykx6K4Sfb3H2IxKg3h0PO0lgt3bh4AnQPBqjWGGcQe%2Bo5JFdA%2BuDKF2JGgDEX61G%2B8f27SF7lE4RB%2FAgAP%2B2rb31GHk1Ret8WcmTQbBDEQDZxTtC9mYTzJ6Sznubk5JM4jc0KcaBDfIEEX%2FPzyMPC6wAcmyMLQNXj2IKVCemkoeT0VCVAh5gGCiKxR66p%2Fln2ePf0g9avJnue%2FuRl%2B6XxYxj&X-Amz-Signature=da2fada053ba613c29cf9d0c726ddf8fd7d6da4c6fe70f2798a6ea22909b5d7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2GA4WE%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKfeVDX%2Fdkb%2BPub5lU%2BCmDCQEK5CUt5zYIPqpSwfeL2wIhALmKwg6GoAq45OLP27M%2BSCCd%2BX9cVL2CSn43jSMvqEfzKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvuYnTXkOApC%2B5T7gq3APs4LVD1ZsPhqv2joRNzYQKcbVrvrxUNMOPF3bj0s7rblfZj9I%2BQFOqxMfnIno9so1X%2FIwcOzkn8E3kwEQSDdavp87FIwCyjc2XIs1RX0NUwk9TAxwQox03xIhFcHcdohXRGrnm9hSZVa0ADAKMzZhU%2FjO8hIz6p%2FlwxUTxjy%2BFI7d7quTNd2rhE6zxKAlZMYAnMAe5UtatZPvFgsyMzriSno%2BgIywype3tGDX%2BhikkHbZ7d3MnwdKDjPkvJ8tg4s0DY56ftddcc%2B%2Bo8Fa6lcvgMPfmVxvPijy4xF7n2qv69NaVPnBmR2iLCtrYlVxkqMU7dcrzR2URrknh%2FDJ6mloWkVcqV4Rnjk9WzCGkODsQYyBbDvQ8bM3qKHyIEaT5K0mF0o2xO7I%2FiN99wdqIaoHNhLp%2B8QHM7U1HO3Qyj99ynNwuUmxlhF4%2B%2FaWL%2FBQX%2BBSLyWPmi7%2BnxgimuoaPqcJ2bgYfrD6pLmHp7F6PYpKUL9lGbJTE%2FiOiRiLddnXJ5ywuL0%2BlwUz6NFrUv1d3VJgbQk1U%2Fl7expH6eW%2FhPPV%2FiGhVGLgKxSOyfTZ7TrcbKDDxGM%2FgEL7tHYzfzIEc3EFu%2F55QHmcdVZD6ye7Wcb0LnLq3zezayB9%2BZ5jFvDDN9IzOBjqkAX5ylNuvmY8w8HURXwKh%2FeFn9NsQ3PshwX3SShspnbtjU4Kf3DhUdqLMPM2Hd4sPziGeh2wrEVLPDvJ2B5TFwVrlxdrKg7W3KdOKtqfE%2Fee3Sj88YeF%2B9jJtmTbSN9PWWXlMge0QJoF1V4j0iQtOzU0xcyJCEdnyu32tAzJ8XnqRv0zqf%2B1kYIz2g4GZYSldiCuSpTEfiOogZCvF5pLIFO%2FVb2rE&X-Amz-Signature=c5e072eb928463e4d70426b4c31c648ba8ab277441810bf0be350be070623d27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T2RIPM4%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlr3uNDca8OMC%2FSYS%2FAkIo%2FdvMiHUhF1gvSBfNlCTQtAiEA3xXHAk60oLTmQio8e2KVEjxRCg7zjwuZPDjjWYBGGEgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdD7Fl%2FSS9LUd65yyrcA8vFmmu0RmQmRENjfgTr16VqiodFAj92yEWNi%2FheUlrGk2tK55YOauySuVjU9bTDEPBrHfZFMdT%2BLysRv%2Fh7peGL%2FY31XAJJ24myMNAlYKQekQ50FDogAIv36VsXALGDV6puttmFIZ7zrOY2dCLIkK1E2UXCkFW3sR0k%2B%2F7e2hLMbdE%2F3qaGDeuPby8bnhRnZNyQIyzYn%2FskXTmVbdFZMZafMR3LN1NdD6W2hlf%2BsBgFm6k2sTR4YunHAnhG8MnBgnpxqpyoukhuSbm8NOiHaCFy7U5Tav0l0RAultlBpDtYE7YxZZ5o1VncTw9xevNLBh4WJbYmyWUMMJsLi%2BJCjsrxBfaeVirFUuVMa9nLq0QtkEchqw26bkZeoBTBXh5%2BAbE23BaxmWj0xeMq3DPOe5NSf9GGXKtu4way%2F1%2FMZeac%2FUBcYy7wgqHzuKmdyIYtI4wqVOMIrME5JG04bE5i2Qj0lAuArZISHcHnVXuc2LAlC1g8wDl1b2HRYfDgLlvWP1na8pIRgb78zhYrzM9wyIvV0bjh%2BNoNfp6FCrZGLaPcqIpfiOC3eFLasxgmx%2Fpy%2FBD0WVSuzWJsoThUQm3bR49%2FnEh4ZNaCd3tnHWBjS63PotDxSv8ss%2FqZi1InMPr0jM4GOqUBRhxcPCUwY9RYCvzNLdq0WVFXf8csqI8Ih95h4pPvdwoXy23hLOMkQG2imWvGKwLhVf2ayjXP0xdjT7VthuKtoTFUFWnBJHFNWXzxg8tum6Lz9QrhvWFYjAmdzT3L%2BNVw2%2FAh7YOKK1yI%2FPNN3RoAXD2D0lgTlxRgfWuYrc89SUyrj2yd1%2FuajkyGu0fk%2FSxSlv1NX%2Flby%2BgcAIF1zh%2BcAak9RiQv&X-Amz-Signature=6b705980f26d6b91a9a2eec086723d128f7a520c454ddfb651d26b9dfc1161a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2GA4WE%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKfeVDX%2Fdkb%2BPub5lU%2BCmDCQEK5CUt5zYIPqpSwfeL2wIhALmKwg6GoAq45OLP27M%2BSCCd%2BX9cVL2CSn43jSMvqEfzKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvuYnTXkOApC%2B5T7gq3APs4LVD1ZsPhqv2joRNzYQKcbVrvrxUNMOPF3bj0s7rblfZj9I%2BQFOqxMfnIno9so1X%2FIwcOzkn8E3kwEQSDdavp87FIwCyjc2XIs1RX0NUwk9TAxwQox03xIhFcHcdohXRGrnm9hSZVa0ADAKMzZhU%2FjO8hIz6p%2FlwxUTxjy%2BFI7d7quTNd2rhE6zxKAlZMYAnMAe5UtatZPvFgsyMzriSno%2BgIywype3tGDX%2BhikkHbZ7d3MnwdKDjPkvJ8tg4s0DY56ftddcc%2B%2Bo8Fa6lcvgMPfmVxvPijy4xF7n2qv69NaVPnBmR2iLCtrYlVxkqMU7dcrzR2URrknh%2FDJ6mloWkVcqV4Rnjk9WzCGkODsQYyBbDvQ8bM3qKHyIEaT5K0mF0o2xO7I%2FiN99wdqIaoHNhLp%2B8QHM7U1HO3Qyj99ynNwuUmxlhF4%2B%2FaWL%2FBQX%2BBSLyWPmi7%2BnxgimuoaPqcJ2bgYfrD6pLmHp7F6PYpKUL9lGbJTE%2FiOiRiLddnXJ5ywuL0%2BlwUz6NFrUv1d3VJgbQk1U%2Fl7expH6eW%2FhPPV%2FiGhVGLgKxSOyfTZ7TrcbKDDxGM%2FgEL7tHYzfzIEc3EFu%2F55QHmcdVZD6ye7Wcb0LnLq3zezayB9%2BZ5jFvDDN9IzOBjqkAX5ylNuvmY8w8HURXwKh%2FeFn9NsQ3PshwX3SShspnbtjU4Kf3DhUdqLMPM2Hd4sPziGeh2wrEVLPDvJ2B5TFwVrlxdrKg7W3KdOKtqfE%2Fee3Sj88YeF%2B9jJtmTbSN9PWWXlMge0QJoF1V4j0iQtOzU0xcyJCEdnyu32tAzJ8XnqRv0zqf%2B1kYIz2g4GZYSldiCuSpTEfiOogZCvF5pLIFO%2FVb2rE&X-Amz-Signature=39692fc11ac12a442f2820a521b5a8fd8b54c53dae7c2fdf1c152b47e4a3286a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NYM4HUO%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV%2FvHJosT8QP9LaowBXpXCedxlMGJt0xW9noLqUF6q7gIgAodQa2ajU5IU7wYjppwj9j3n6BVoRxzUoypYN43wT%2BgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkUFg7rdV%2FMiRHvkSrcA1mNqatF2IwX0cZDIRSWiewoEf3EwyMt6a4Pm%2F8YxJb4P4GwUWMya87%2FLi77jb%2BWEQ96AMRhQKiga0oVjVsZbYmXYeup5cbJNtL1h0iMXz15UZ7RDk0Fq9kVyGccZ3i8YIhqLXpPt3iUDj%2Bstk1fxgu425spNbJEXu%2B8JzGzJKMiGrieKuh4jjdGLys0BAQq2A84%2F%2FiXi8rI4AxtQ186abT1W%2BmWfSHwAuC%2BIpEUN9bIw4TFJlqVSZmUKKPLie3nEtsIZ3p5umOVS2O5jF7KgjYGeZg%2Bkoc3QlNndjXDk74BcaHhqghxBDfGyrxqz9NJqm2mIqnufEowxBYCZZZWv56TRS5CnrlLsEaaGpTdXLFxGvFAJZaipbBqX3XeQRflL1ed0vm%2B5yGb6aAR5BSBHYXuq3pMg6I25fkcHG8A5gLIfv%2FJCBjzQAk%2Be45%2BgWmDSL8ttfhZvcZyavCn%2F%2FCy7HV4rVi%2BKk3UfS%2BW7SHOIfOlpPnkxic%2FApA1%2Fu5VYeeDraPz2dDVY7yKDno5DLkH%2FLfq3nq7wnFwoRgIrAuozwT73Pn5vUC8xFgtk9VU1evy0htd6TmPg0PptI%2FmHpT9tVAxNGdaUsgidHmG32rw0aRNs%2B1tMDrLeJp0PeI1MKL1jM4GOqUBB3YrGV1N999E9CFmjMHJepVCAfWwVCxuK9ZLpZs9OaNay2s1Z%2B21%2BgRNXRKSLs1WFYIur6mqpa1w2KKe98tdQIsMaai1G%2Bg2Wwd7fJuOMJ6PCPzhuWQDM08kb7hSzc6zWIk%2BWZdsLUOrMKOHRTEzWWvHYnzpoWPBed%2BX%2F9pct%2FudCFI6KIItPJ7A56nSNvkYFbyOCziqEGRfsVXaNoJ7rhjD%2FN9K&X-Amz-Signature=116d347bfc5b8c31463fc4d3e3164c6da12edc91583d75bc1ab198d22f77f620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQUX77R7%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwJV3S0arpKcKXQoKD9AMa0edjYWIKh%2Fde2QCWLztn8AIgVoGxrVWA4kfvTvHeR8S%2BEPK5ouDyiAIqxS9NLwU2xGoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1p5sXsgizr9ZGX1ircA6KbisO98Uu%2BifahDjRzYt5y0bRj0iGqmxGk6wuBTY1kTKfAmF015o61Gyb%2B0lG8E5JI89zNXFfhhiX8q0FYZmAQOycWMaF4xZAcxKGmXcbSA3OFn8l2p2SrJy0rlo3aqbyliNTniFj8AFk8J1VSvCAIUy%2FPRA2GHNWL3r3waUArnWNM5PZ4okhCTRiiT7nQ1qHURUozTQnz0Wmtx1AO6W8abP%2BqpbP7nWfRNZS9Z36zxzg0iHd0Ow%2BQOEtvJZGCI8n5sTXBclpkwVtCFH%2BdJyncwTcc1tYv7kCrX%2BbA4llCvU4KAjqSNTSte7mu5zPNULbOw87l0w2US2ZxVzrKpGnRjQi%2FhSGuS70QulYg89DE3P5HbahR7v6DzLOY5Irf5B0tNML7BqC%2BMm5yjFUx8bzYgssPPyyc8iNGnuPiFeI7ihb6leodpCdvMFMVHymlyE%2Fb0NMg1NZWXaDHvEZguGHZzmg0N%2FXeqBZE4XVmnaJDApkq5Qr4%2BLVPKsWNTITyt9fPFIRWP%2FCPSOns57XDzjv%2FJYCTd1eEzgy3SDgPIqvFZ%2BGFFlHKuT5D%2Ft0TxfKjac1N5KrzqjYYk0QBB7ols0V9egR879CmdVlmseSEM6qD79Z6u8Oq5hsKroqqMO31jM4GOqUBXdUsbyRKJhWwldMBXtFc%2BiVMTpjbKt%2BwRmxNLkRI5GyCOk1PrNa2WPwWDApOP2fVHrOe6OYDnfgR2d%2FsGBYg%2Bkdpp60YaRGLhTmAh6WjfYWmtxY9eZV%2B%2FXL3JrXe04jtX1LNryvOxiEBWr%2F9R4Ft5hWpFvh6dwQJdHktcPnU3i5H2338NR7W8fdZhj51hTyRfVbgEDrmtplGxRgB6N8V3vGoabl9&X-Amz-Signature=67b2b6691cf5c0497ab9d673dacaa841d4401e814d5c1b2e6b9325266133308c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKPANMG5%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClwihAs%2BVlBNxKJcINJvgRMIZS%2B41Y739N3CcqBqL8rAiEA5q8JZweX%2BrDnlizL00aUPAfZZxHb0e3%2FdSJfzxHhhq4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5TOgZwS8gheaxIWyrcA2xmQfa14mJsye6%2FoDY7TpcZ6hPfF2Lupm%2FZo0Ko30G8xj2oFNGq0yuslE2A8weUcyIqIhZBVtZTOf5hRwAIwrbwBwfqBNnCUUfZSpKUNxYMCFgBKVFiSruwM8Kj%2Ft5KreIu7YwwRawvMqTYeKjXOhyhPfGeqExHph6qsqri61AVSk6Cs8dfS1oo0qn7wmm4YY%2Fq%2F5fM6WqIrpbR%2FLCA0wTiYBy4dJ3IpzyQ2403ZwZv%2Bfz2RaOyGrZl3WTRuSTKro6CmeSqPtTQIwie6byhk6LqkB7egta%2BYzeSJkQNIq%2FE%2BBQOBea22rl2lA1q8eLOm7KyCo%2F6ZZQka%2BiO9HkVEtCr3hw%2B5v7d0myUSHronp9%2BtxsvKyGPXeKg4zQLMG%2B66Nm5HatJnuXsw%2B05O5R2Y3GAW9SudWDZKCv%2BMT2HRMsPRRmUROiElz%2FIarLzFIDTKlXJqFBgfmTJcX4A4Oh4pudxLTB4HYEfNnXnAKD0tRDoRR3TfWpwsTswQ5bJS9810OP%2Bcrzz1%2Bkmr5CHa6fsp5%2Bklz8uhSWzuYRan%2F%2FzWl1gN8U%2FcV7FfbM8ohyLjqirQ6oTZnRU0YZ6AIORS1CERroPP3tmGRHL8gCDQhA9jcuxyKcx5PJbfIimrQuGMPP0jM4GOqUBVlJwwPpubDufOIcTCvnzbFdGtJgt77LkYlJl9WBHtEFnMTIdGzuDNMDsbcmelwQVi8wgYso9MbiJ%2B1%2Bc5hsxOwpO6Y4atUoOiyOLhGceRizjrgFEovclS7Y4hxNKO%2B%2F4IhWxlA2bTmhFBDXcvSzhBf9rSec2MJ5l3mEWKAwvTfoQTIowDDqFDGtZRjKqVVLYaB9eOj56Y2Whl2vCEkYuH8e9rAQL&X-Amz-Signature=3a0741e63aca44a7846905c4b73bb27bc9950356a3806c225dd10e5ad16e021a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2GA4WE%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKfeVDX%2Fdkb%2BPub5lU%2BCmDCQEK5CUt5zYIPqpSwfeL2wIhALmKwg6GoAq45OLP27M%2BSCCd%2BX9cVL2CSn43jSMvqEfzKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvuYnTXkOApC%2B5T7gq3APs4LVD1ZsPhqv2joRNzYQKcbVrvrxUNMOPF3bj0s7rblfZj9I%2BQFOqxMfnIno9so1X%2FIwcOzkn8E3kwEQSDdavp87FIwCyjc2XIs1RX0NUwk9TAxwQox03xIhFcHcdohXRGrnm9hSZVa0ADAKMzZhU%2FjO8hIz6p%2FlwxUTxjy%2BFI7d7quTNd2rhE6zxKAlZMYAnMAe5UtatZPvFgsyMzriSno%2BgIywype3tGDX%2BhikkHbZ7d3MnwdKDjPkvJ8tg4s0DY56ftddcc%2B%2Bo8Fa6lcvgMPfmVxvPijy4xF7n2qv69NaVPnBmR2iLCtrYlVxkqMU7dcrzR2URrknh%2FDJ6mloWkVcqV4Rnjk9WzCGkODsQYyBbDvQ8bM3qKHyIEaT5K0mF0o2xO7I%2FiN99wdqIaoHNhLp%2B8QHM7U1HO3Qyj99ynNwuUmxlhF4%2B%2FaWL%2FBQX%2BBSLyWPmi7%2BnxgimuoaPqcJ2bgYfrD6pLmHp7F6PYpKUL9lGbJTE%2FiOiRiLddnXJ5ywuL0%2BlwUz6NFrUv1d3VJgbQk1U%2Fl7expH6eW%2FhPPV%2FiGhVGLgKxSOyfTZ7TrcbKDDxGM%2FgEL7tHYzfzIEc3EFu%2F55QHmcdVZD6ye7Wcb0LnLq3zezayB9%2BZ5jFvDDN9IzOBjqkAX5ylNuvmY8w8HURXwKh%2FeFn9NsQ3PshwX3SShspnbtjU4Kf3DhUdqLMPM2Hd4sPziGeh2wrEVLPDvJ2B5TFwVrlxdrKg7W3KdOKtqfE%2Fee3Sj88YeF%2B9jJtmTbSN9PWWXlMge0QJoF1V4j0iQtOzU0xcyJCEdnyu32tAzJ8XnqRv0zqf%2B1kYIz2g4GZYSldiCuSpTEfiOogZCvF5pLIFO%2FVb2rE&X-Amz-Signature=e33251bf6f840633de78584d21e0e7b85183c8fc89ecc808275de0f68b1c841e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2GA4WE%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKfeVDX%2Fdkb%2BPub5lU%2BCmDCQEK5CUt5zYIPqpSwfeL2wIhALmKwg6GoAq45OLP27M%2BSCCd%2BX9cVL2CSn43jSMvqEfzKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvuYnTXkOApC%2B5T7gq3APs4LVD1ZsPhqv2joRNzYQKcbVrvrxUNMOPF3bj0s7rblfZj9I%2BQFOqxMfnIno9so1X%2FIwcOzkn8E3kwEQSDdavp87FIwCyjc2XIs1RX0NUwk9TAxwQox03xIhFcHcdohXRGrnm9hSZVa0ADAKMzZhU%2FjO8hIz6p%2FlwxUTxjy%2BFI7d7quTNd2rhE6zxKAlZMYAnMAe5UtatZPvFgsyMzriSno%2BgIywype3tGDX%2BhikkHbZ7d3MnwdKDjPkvJ8tg4s0DY56ftddcc%2B%2Bo8Fa6lcvgMPfmVxvPijy4xF7n2qv69NaVPnBmR2iLCtrYlVxkqMU7dcrzR2URrknh%2FDJ6mloWkVcqV4Rnjk9WzCGkODsQYyBbDvQ8bM3qKHyIEaT5K0mF0o2xO7I%2FiN99wdqIaoHNhLp%2B8QHM7U1HO3Qyj99ynNwuUmxlhF4%2B%2FaWL%2FBQX%2BBSLyWPmi7%2BnxgimuoaPqcJ2bgYfrD6pLmHp7F6PYpKUL9lGbJTE%2FiOiRiLddnXJ5ywuL0%2BlwUz6NFrUv1d3VJgbQk1U%2Fl7expH6eW%2FhPPV%2FiGhVGLgKxSOyfTZ7TrcbKDDxGM%2FgEL7tHYzfzIEc3EFu%2F55QHmcdVZD6ye7Wcb0LnLq3zezayB9%2BZ5jFvDDN9IzOBjqkAX5ylNuvmY8w8HURXwKh%2FeFn9NsQ3PshwX3SShspnbtjU4Kf3DhUdqLMPM2Hd4sPziGeh2wrEVLPDvJ2B5TFwVrlxdrKg7W3KdOKtqfE%2Fee3Sj88YeF%2B9jJtmTbSN9PWWXlMge0QJoF1V4j0iQtOzU0xcyJCEdnyu32tAzJ8XnqRv0zqf%2B1kYIz2g4GZYSldiCuSpTEfiOogZCvF5pLIFO%2FVb2rE&X-Amz-Signature=475d40d4700fd79f0530b399c20b9870025e822225eb93c83954f352c1312472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA7PTKBY%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOagAd5dPXxzdwHSei4NVTkevWn9wA5WEbx0%2FDBDKRbwIgdUJEc5AlLXowkyn%2FZ5t7XfNkyfUiHNThyssYj%2F4v4jgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdrKwZFhhD%2BmY68qyrcAwW%2BptCqtP3ENMEOgGXKkvFAp86zfbLgkKGgHTGmK7aaK5ke7UsuixwpgW2wzVBOgHx0i56F4XdJ0A5pgVLb81eEc7MzjFHs5XUQ9NsipnZ56q8KoeebBREPHaFfYn8rFrmVD%2FNqQE8iLkDxcDgKGXobre747kxs%2BBeQJluu4q2Bur7aQUl9rgklAtTyZAvSJU2lcii%2BhaF%2Fofsf91qWFt%2FroaS8j95IF551BT43h%2FCyd5PNY81%2Brff9Tbf7dw8z99korGd3uqFHLBthaC3gPWz%2FopENTIr3YT21FYo8gXxVPlk88w8g%2BXfOURp2WUdyN1Wt9AkK9Hc6aUUqbsOCtY2ysjsjBYk7G59AvU76nUTkPnkNBOpT5TinsXxz%2F2EGVWxPuDEDrbKB%2B46bY%2Bmbepn73AS1Ju8aJLSlkkEFJUbIxHjWepdqO4rtNYRDkKMHyixrDZwdoEJaoQT3cMcAoNPktRXKsqjDqu0O9ODcR3ieLdoVus2QXSdCwaArdbSVyX8e1IrDCh3rfkm5V4ZMFLimMr2wvumr7sidbmIm5ZwDzraVfNROajUeQ6A7F%2FYfq%2F4ngrvvI%2BOjOgZLFECG%2Bc87qhwD4iOCjhHeJsakjjceY57jhTQdot5S3uLQMK71jM4GOqUBvmeL5mvx4AfLEun0wl1ostw%2FlI%2F%2FtYAoiImtHrVj1inq8kfcHJ3H1jcBcu8qEjQwJMFMBUpyY%2BcpJwu7asTmw65O6ZobSU%2FEJFN19uRvCk0YUilV%2FdQbYApfV3%2Boji9hXoooElZNmDyWNd8e5lcI7K0ETRGMiGfUg2AObzBa9RgpVTSUoHk2O9TvzLFOwMet5TbdNuIXfQ4FF%2BAhKEOYSD9m0Mzd&X-Amz-Signature=38aacd072023a05038fc688dc523bda56f0a698a1a60691c759bc045f7210365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA7PTKBY%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOagAd5dPXxzdwHSei4NVTkevWn9wA5WEbx0%2FDBDKRbwIgdUJEc5AlLXowkyn%2FZ5t7XfNkyfUiHNThyssYj%2F4v4jgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdrKwZFhhD%2BmY68qyrcAwW%2BptCqtP3ENMEOgGXKkvFAp86zfbLgkKGgHTGmK7aaK5ke7UsuixwpgW2wzVBOgHx0i56F4XdJ0A5pgVLb81eEc7MzjFHs5XUQ9NsipnZ56q8KoeebBREPHaFfYn8rFrmVD%2FNqQE8iLkDxcDgKGXobre747kxs%2BBeQJluu4q2Bur7aQUl9rgklAtTyZAvSJU2lcii%2BhaF%2Fofsf91qWFt%2FroaS8j95IF551BT43h%2FCyd5PNY81%2Brff9Tbf7dw8z99korGd3uqFHLBthaC3gPWz%2FopENTIr3YT21FYo8gXxVPlk88w8g%2BXfOURp2WUdyN1Wt9AkK9Hc6aUUqbsOCtY2ysjsjBYk7G59AvU76nUTkPnkNBOpT5TinsXxz%2F2EGVWxPuDEDrbKB%2B46bY%2Bmbepn73AS1Ju8aJLSlkkEFJUbIxHjWepdqO4rtNYRDkKMHyixrDZwdoEJaoQT3cMcAoNPktRXKsqjDqu0O9ODcR3ieLdoVus2QXSdCwaArdbSVyX8e1IrDCh3rfkm5V4ZMFLimMr2wvumr7sidbmIm5ZwDzraVfNROajUeQ6A7F%2FYfq%2F4ngrvvI%2BOjOgZLFECG%2Bc87qhwD4iOCjhHeJsakjjceY57jhTQdot5S3uLQMK71jM4GOqUBvmeL5mvx4AfLEun0wl1ostw%2FlI%2F%2FtYAoiImtHrVj1inq8kfcHJ3H1jcBcu8qEjQwJMFMBUpyY%2BcpJwu7asTmw65O6ZobSU%2FEJFN19uRvCk0YUilV%2FdQbYApfV3%2Boji9hXoooElZNmDyWNd8e5lcI7K0ETRGMiGfUg2AObzBa9RgpVTSUoHk2O9TvzLFOwMet5TbdNuIXfQ4FF%2BAhKEOYSD9m0Mzd&X-Amz-Signature=9ebba44aba12fb4c83c4fbc529abeb7e1325763e59a07ebd2c2446c235d6e622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA7PTKBY%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOagAd5dPXxzdwHSei4NVTkevWn9wA5WEbx0%2FDBDKRbwIgdUJEc5AlLXowkyn%2FZ5t7XfNkyfUiHNThyssYj%2F4v4jgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdrKwZFhhD%2BmY68qyrcAwW%2BptCqtP3ENMEOgGXKkvFAp86zfbLgkKGgHTGmK7aaK5ke7UsuixwpgW2wzVBOgHx0i56F4XdJ0A5pgVLb81eEc7MzjFHs5XUQ9NsipnZ56q8KoeebBREPHaFfYn8rFrmVD%2FNqQE8iLkDxcDgKGXobre747kxs%2BBeQJluu4q2Bur7aQUl9rgklAtTyZAvSJU2lcii%2BhaF%2Fofsf91qWFt%2FroaS8j95IF551BT43h%2FCyd5PNY81%2Brff9Tbf7dw8z99korGd3uqFHLBthaC3gPWz%2FopENTIr3YT21FYo8gXxVPlk88w8g%2BXfOURp2WUdyN1Wt9AkK9Hc6aUUqbsOCtY2ysjsjBYk7G59AvU76nUTkPnkNBOpT5TinsXxz%2F2EGVWxPuDEDrbKB%2B46bY%2Bmbepn73AS1Ju8aJLSlkkEFJUbIxHjWepdqO4rtNYRDkKMHyixrDZwdoEJaoQT3cMcAoNPktRXKsqjDqu0O9ODcR3ieLdoVus2QXSdCwaArdbSVyX8e1IrDCh3rfkm5V4ZMFLimMr2wvumr7sidbmIm5ZwDzraVfNROajUeQ6A7F%2FYfq%2F4ngrvvI%2BOjOgZLFECG%2Bc87qhwD4iOCjhHeJsakjjceY57jhTQdot5S3uLQMK71jM4GOqUBvmeL5mvx4AfLEun0wl1ostw%2FlI%2F%2FtYAoiImtHrVj1inq8kfcHJ3H1jcBcu8qEjQwJMFMBUpyY%2BcpJwu7asTmw65O6ZobSU%2FEJFN19uRvCk0YUilV%2FdQbYApfV3%2Boji9hXoooElZNmDyWNd8e5lcI7K0ETRGMiGfUg2AObzBa9RgpVTSUoHk2O9TvzLFOwMet5TbdNuIXfQ4FF%2BAhKEOYSD9m0Mzd&X-Amz-Signature=3340aeeaaec09db960194d69b452ce6b543b3c638bb07be662603e4470f8665c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA7PTKBY%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOagAd5dPXxzdwHSei4NVTkevWn9wA5WEbx0%2FDBDKRbwIgdUJEc5AlLXowkyn%2FZ5t7XfNkyfUiHNThyssYj%2F4v4jgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdrKwZFhhD%2BmY68qyrcAwW%2BptCqtP3ENMEOgGXKkvFAp86zfbLgkKGgHTGmK7aaK5ke7UsuixwpgW2wzVBOgHx0i56F4XdJ0A5pgVLb81eEc7MzjFHs5XUQ9NsipnZ56q8KoeebBREPHaFfYn8rFrmVD%2FNqQE8iLkDxcDgKGXobre747kxs%2BBeQJluu4q2Bur7aQUl9rgklAtTyZAvSJU2lcii%2BhaF%2Fofsf91qWFt%2FroaS8j95IF551BT43h%2FCyd5PNY81%2Brff9Tbf7dw8z99korGd3uqFHLBthaC3gPWz%2FopENTIr3YT21FYo8gXxVPlk88w8g%2BXfOURp2WUdyN1Wt9AkK9Hc6aUUqbsOCtY2ysjsjBYk7G59AvU76nUTkPnkNBOpT5TinsXxz%2F2EGVWxPuDEDrbKB%2B46bY%2Bmbepn73AS1Ju8aJLSlkkEFJUbIxHjWepdqO4rtNYRDkKMHyixrDZwdoEJaoQT3cMcAoNPktRXKsqjDqu0O9ODcR3ieLdoVus2QXSdCwaArdbSVyX8e1IrDCh3rfkm5V4ZMFLimMr2wvumr7sidbmIm5ZwDzraVfNROajUeQ6A7F%2FYfq%2F4ngrvvI%2BOjOgZLFECG%2Bc87qhwD4iOCjhHeJsakjjceY57jhTQdot5S3uLQMK71jM4GOqUBvmeL5mvx4AfLEun0wl1ostw%2FlI%2F%2FtYAoiImtHrVj1inq8kfcHJ3H1jcBcu8qEjQwJMFMBUpyY%2BcpJwu7asTmw65O6ZobSU%2FEJFN19uRvCk0YUilV%2FdQbYApfV3%2Boji9hXoooElZNmDyWNd8e5lcI7K0ETRGMiGfUg2AObzBa9RgpVTSUoHk2O9TvzLFOwMet5TbdNuIXfQ4FF%2BAhKEOYSD9m0Mzd&X-Amz-Signature=2d2ad481237b235954c7e898355694b6e12bab872187a6af50584deb6e3b37af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOUDDHPR%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW4vGYK%2F7%2Bp38XqjRAAZYcqKQTqJ6NioUW989BFovhYQIhALd2R5%2BpUI0Ry5Qb28fBtD3o2Oz41AwznJreuagpL%2BC8KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqIb8UgfqG8M44Vxkq3AMh2hztNOSrV%2FH9suThh%2BR8kNVs%2BtNAHHh7%2FBx6If0ZfY%2BKAQ1T6P%2FXfnl5uhHkEmSRF6no%2FsAwXdRzUFTqhZMz7xhC7X9%2BcDpwWST6AJ19ND0LxQfjWPnPp%2BUYzA78%2BrQRHcjEDpUQb2Chuf%2F3L8wbCY1hvYM%2B8jLCVZ6yU%2B6RhGJttXdd5X2D%2BMeIbMbLtcKybrZy%2FmvX%2Fir2kICOdopcrx9uNTAGIj4EJhTGGwiRwsC5hj1TKeHDpr64g7Zy137Fh3be%2B5roY%2B458WDF0wGj%2FfewydMdrHKqUaGsKPC%2BkekC99LYweVjcSBS2Mn8UGwHMFv70Xhxcm7vl0uoXPL%2BdRc8FwDCJ5J9i%2BTyQRawLhd6rFJuYRdSLwDA8QizjnZdIaWUm0jHfXSSD9K6MBrkiaDW5cpJePHg4xeh3acgYevhLoVlF1zjHl6BQ60kIfC66xzOAD1XlPG6jJwQDYnVw8Gbu0MnJnMuYES8%2BtY%2FD1mmTkGf12ihv2layHvqGS2wioxRuCaTq0USgrnLGDfBdq63lEjAmD9rArL%2BxSXdHiYEKDijkKv5v1TLBbDC8Ba09TdQlsr5zqVCSlFp0j0KppleeOwXaEysEE%2FNWY%2FEoPtOtlEo8qStl3SODDDt9YzOBjqkATdH5pRdfDddNG0clqM7%2FRswASIFQQZzmQYG8H4EMY%2FAyO%2Bgo%2B4Vbt6hHlFhfQQcCeuSn8EkMU5K%2F%2F%2Bop5q90fiy8WSFxFv6oH4GybLSnVr9mEJ7yP8HXpM4Wc%2FW78y3DtM5ZTRYAV9BY%2BGhHh6lbkx%2B9PQh5geK1S8FF%2Fbt71OA5ow3SsTMYEfa8Sm2dyKoQUAlb6tmKec%2BgCIc8llbVEKnn%2FrE&X-Amz-Signature=c99861f86b584cbc8d11752a5849509a624711b2aa941cb91cd096f39d912565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA7PTKBY%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOagAd5dPXxzdwHSei4NVTkevWn9wA5WEbx0%2FDBDKRbwIgdUJEc5AlLXowkyn%2FZ5t7XfNkyfUiHNThyssYj%2F4v4jgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdrKwZFhhD%2BmY68qyrcAwW%2BptCqtP3ENMEOgGXKkvFAp86zfbLgkKGgHTGmK7aaK5ke7UsuixwpgW2wzVBOgHx0i56F4XdJ0A5pgVLb81eEc7MzjFHs5XUQ9NsipnZ56q8KoeebBREPHaFfYn8rFrmVD%2FNqQE8iLkDxcDgKGXobre747kxs%2BBeQJluu4q2Bur7aQUl9rgklAtTyZAvSJU2lcii%2BhaF%2Fofsf91qWFt%2FroaS8j95IF551BT43h%2FCyd5PNY81%2Brff9Tbf7dw8z99korGd3uqFHLBthaC3gPWz%2FopENTIr3YT21FYo8gXxVPlk88w8g%2BXfOURp2WUdyN1Wt9AkK9Hc6aUUqbsOCtY2ysjsjBYk7G59AvU76nUTkPnkNBOpT5TinsXxz%2F2EGVWxPuDEDrbKB%2B46bY%2Bmbepn73AS1Ju8aJLSlkkEFJUbIxHjWepdqO4rtNYRDkKMHyixrDZwdoEJaoQT3cMcAoNPktRXKsqjDqu0O9ODcR3ieLdoVus2QXSdCwaArdbSVyX8e1IrDCh3rfkm5V4ZMFLimMr2wvumr7sidbmIm5ZwDzraVfNROajUeQ6A7F%2FYfq%2F4ngrvvI%2BOjOgZLFECG%2Bc87qhwD4iOCjhHeJsakjjceY57jhTQdot5S3uLQMK71jM4GOqUBvmeL5mvx4AfLEun0wl1ostw%2FlI%2F%2FtYAoiImtHrVj1inq8kfcHJ3H1jcBcu8qEjQwJMFMBUpyY%2BcpJwu7asTmw65O6ZobSU%2FEJFN19uRvCk0YUilV%2FdQbYApfV3%2Boji9hXoooElZNmDyWNd8e5lcI7K0ETRGMiGfUg2AObzBa9RgpVTSUoHk2O9TvzLFOwMet5TbdNuIXfQ4FF%2BAhKEOYSD9m0Mzd&X-Amz-Signature=d3c3461451371a3f34f7dd39cee935af57f687d1913abc43f17954af2ed99368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA7PTKBY%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOagAd5dPXxzdwHSei4NVTkevWn9wA5WEbx0%2FDBDKRbwIgdUJEc5AlLXowkyn%2FZ5t7XfNkyfUiHNThyssYj%2F4v4jgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdrKwZFhhD%2BmY68qyrcAwW%2BptCqtP3ENMEOgGXKkvFAp86zfbLgkKGgHTGmK7aaK5ke7UsuixwpgW2wzVBOgHx0i56F4XdJ0A5pgVLb81eEc7MzjFHs5XUQ9NsipnZ56q8KoeebBREPHaFfYn8rFrmVD%2FNqQE8iLkDxcDgKGXobre747kxs%2BBeQJluu4q2Bur7aQUl9rgklAtTyZAvSJU2lcii%2BhaF%2Fofsf91qWFt%2FroaS8j95IF551BT43h%2FCyd5PNY81%2Brff9Tbf7dw8z99korGd3uqFHLBthaC3gPWz%2FopENTIr3YT21FYo8gXxVPlk88w8g%2BXfOURp2WUdyN1Wt9AkK9Hc6aUUqbsOCtY2ysjsjBYk7G59AvU76nUTkPnkNBOpT5TinsXxz%2F2EGVWxPuDEDrbKB%2B46bY%2Bmbepn73AS1Ju8aJLSlkkEFJUbIxHjWepdqO4rtNYRDkKMHyixrDZwdoEJaoQT3cMcAoNPktRXKsqjDqu0O9ODcR3ieLdoVus2QXSdCwaArdbSVyX8e1IrDCh3rfkm5V4ZMFLimMr2wvumr7sidbmIm5ZwDzraVfNROajUeQ6A7F%2FYfq%2F4ngrvvI%2BOjOgZLFECG%2Bc87qhwD4iOCjhHeJsakjjceY57jhTQdot5S3uLQMK71jM4GOqUBvmeL5mvx4AfLEun0wl1ostw%2FlI%2F%2FtYAoiImtHrVj1inq8kfcHJ3H1jcBcu8qEjQwJMFMBUpyY%2BcpJwu7asTmw65O6ZobSU%2FEJFN19uRvCk0YUilV%2FdQbYApfV3%2Boji9hXoooElZNmDyWNd8e5lcI7K0ETRGMiGfUg2AObzBa9RgpVTSUoHk2O9TvzLFOwMet5TbdNuIXfQ4FF%2BAhKEOYSD9m0Mzd&X-Amz-Signature=6b3fcd317a590efd64c1e7bdc6855317e5b5b4c0923ff6bb480f66dcd632eeb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA7PTKBY%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOagAd5dPXxzdwHSei4NVTkevWn9wA5WEbx0%2FDBDKRbwIgdUJEc5AlLXowkyn%2FZ5t7XfNkyfUiHNThyssYj%2F4v4jgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdrKwZFhhD%2BmY68qyrcAwW%2BptCqtP3ENMEOgGXKkvFAp86zfbLgkKGgHTGmK7aaK5ke7UsuixwpgW2wzVBOgHx0i56F4XdJ0A5pgVLb81eEc7MzjFHs5XUQ9NsipnZ56q8KoeebBREPHaFfYn8rFrmVD%2FNqQE8iLkDxcDgKGXobre747kxs%2BBeQJluu4q2Bur7aQUl9rgklAtTyZAvSJU2lcii%2BhaF%2Fofsf91qWFt%2FroaS8j95IF551BT43h%2FCyd5PNY81%2Brff9Tbf7dw8z99korGd3uqFHLBthaC3gPWz%2FopENTIr3YT21FYo8gXxVPlk88w8g%2BXfOURp2WUdyN1Wt9AkK9Hc6aUUqbsOCtY2ysjsjBYk7G59AvU76nUTkPnkNBOpT5TinsXxz%2F2EGVWxPuDEDrbKB%2B46bY%2Bmbepn73AS1Ju8aJLSlkkEFJUbIxHjWepdqO4rtNYRDkKMHyixrDZwdoEJaoQT3cMcAoNPktRXKsqjDqu0O9ODcR3ieLdoVus2QXSdCwaArdbSVyX8e1IrDCh3rfkm5V4ZMFLimMr2wvumr7sidbmIm5ZwDzraVfNROajUeQ6A7F%2FYfq%2F4ngrvvI%2BOjOgZLFECG%2Bc87qhwD4iOCjhHeJsakjjceY57jhTQdot5S3uLQMK71jM4GOqUBvmeL5mvx4AfLEun0wl1ostw%2FlI%2F%2FtYAoiImtHrVj1inq8kfcHJ3H1jcBcu8qEjQwJMFMBUpyY%2BcpJwu7asTmw65O6ZobSU%2FEJFN19uRvCk0YUilV%2FdQbYApfV3%2Boji9hXoooElZNmDyWNd8e5lcI7K0ETRGMiGfUg2AObzBa9RgpVTSUoHk2O9TvzLFOwMet5TbdNuIXfQ4FF%2BAhKEOYSD9m0Mzd&X-Amz-Signature=94f7a4352700549d90a829b034262bf1565bd9430d6ccaecd6e8aa7b646f8dd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA7PTKBY%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOagAd5dPXxzdwHSei4NVTkevWn9wA5WEbx0%2FDBDKRbwIgdUJEc5AlLXowkyn%2FZ5t7XfNkyfUiHNThyssYj%2F4v4jgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdrKwZFhhD%2BmY68qyrcAwW%2BptCqtP3ENMEOgGXKkvFAp86zfbLgkKGgHTGmK7aaK5ke7UsuixwpgW2wzVBOgHx0i56F4XdJ0A5pgVLb81eEc7MzjFHs5XUQ9NsipnZ56q8KoeebBREPHaFfYn8rFrmVD%2FNqQE8iLkDxcDgKGXobre747kxs%2BBeQJluu4q2Bur7aQUl9rgklAtTyZAvSJU2lcii%2BhaF%2Fofsf91qWFt%2FroaS8j95IF551BT43h%2FCyd5PNY81%2Brff9Tbf7dw8z99korGd3uqFHLBthaC3gPWz%2FopENTIr3YT21FYo8gXxVPlk88w8g%2BXfOURp2WUdyN1Wt9AkK9Hc6aUUqbsOCtY2ysjsjBYk7G59AvU76nUTkPnkNBOpT5TinsXxz%2F2EGVWxPuDEDrbKB%2B46bY%2Bmbepn73AS1Ju8aJLSlkkEFJUbIxHjWepdqO4rtNYRDkKMHyixrDZwdoEJaoQT3cMcAoNPktRXKsqjDqu0O9ODcR3ieLdoVus2QXSdCwaArdbSVyX8e1IrDCh3rfkm5V4ZMFLimMr2wvumr7sidbmIm5ZwDzraVfNROajUeQ6A7F%2FYfq%2F4ngrvvI%2BOjOgZLFECG%2Bc87qhwD4iOCjhHeJsakjjceY57jhTQdot5S3uLQMK71jM4GOqUBvmeL5mvx4AfLEun0wl1ostw%2FlI%2F%2FtYAoiImtHrVj1inq8kfcHJ3H1jcBcu8qEjQwJMFMBUpyY%2BcpJwu7asTmw65O6ZobSU%2FEJFN19uRvCk0YUilV%2FdQbYApfV3%2Boji9hXoooElZNmDyWNd8e5lcI7K0ETRGMiGfUg2AObzBa9RgpVTSUoHk2O9TvzLFOwMet5TbdNuIXfQ4FF%2BAhKEOYSD9m0Mzd&X-Amz-Signature=057b5cce9650932b674f9833bab4b329cd444c37588251e76d91fd834ac74eef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA7PTKBY%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOagAd5dPXxzdwHSei4NVTkevWn9wA5WEbx0%2FDBDKRbwIgdUJEc5AlLXowkyn%2FZ5t7XfNkyfUiHNThyssYj%2F4v4jgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdrKwZFhhD%2BmY68qyrcAwW%2BptCqtP3ENMEOgGXKkvFAp86zfbLgkKGgHTGmK7aaK5ke7UsuixwpgW2wzVBOgHx0i56F4XdJ0A5pgVLb81eEc7MzjFHs5XUQ9NsipnZ56q8KoeebBREPHaFfYn8rFrmVD%2FNqQE8iLkDxcDgKGXobre747kxs%2BBeQJluu4q2Bur7aQUl9rgklAtTyZAvSJU2lcii%2BhaF%2Fofsf91qWFt%2FroaS8j95IF551BT43h%2FCyd5PNY81%2Brff9Tbf7dw8z99korGd3uqFHLBthaC3gPWz%2FopENTIr3YT21FYo8gXxVPlk88w8g%2BXfOURp2WUdyN1Wt9AkK9Hc6aUUqbsOCtY2ysjsjBYk7G59AvU76nUTkPnkNBOpT5TinsXxz%2F2EGVWxPuDEDrbKB%2B46bY%2Bmbepn73AS1Ju8aJLSlkkEFJUbIxHjWepdqO4rtNYRDkKMHyixrDZwdoEJaoQT3cMcAoNPktRXKsqjDqu0O9ODcR3ieLdoVus2QXSdCwaArdbSVyX8e1IrDCh3rfkm5V4ZMFLimMr2wvumr7sidbmIm5ZwDzraVfNROajUeQ6A7F%2FYfq%2F4ngrvvI%2BOjOgZLFECG%2Bc87qhwD4iOCjhHeJsakjjceY57jhTQdot5S3uLQMK71jM4GOqUBvmeL5mvx4AfLEun0wl1ostw%2FlI%2F%2FtYAoiImtHrVj1inq8kfcHJ3H1jcBcu8qEjQwJMFMBUpyY%2BcpJwu7asTmw65O6ZobSU%2FEJFN19uRvCk0YUilV%2FdQbYApfV3%2Boji9hXoooElZNmDyWNd8e5lcI7K0ETRGMiGfUg2AObzBa9RgpVTSUoHk2O9TvzLFOwMet5TbdNuIXfQ4FF%2BAhKEOYSD9m0Mzd&X-Amz-Signature=311b725e0cdf4dcebbf1f160191e5d65f84e0100b0d189a4fb7a4d21fa5814df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA7PTKBY%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOagAd5dPXxzdwHSei4NVTkevWn9wA5WEbx0%2FDBDKRbwIgdUJEc5AlLXowkyn%2FZ5t7XfNkyfUiHNThyssYj%2F4v4jgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdrKwZFhhD%2BmY68qyrcAwW%2BptCqtP3ENMEOgGXKkvFAp86zfbLgkKGgHTGmK7aaK5ke7UsuixwpgW2wzVBOgHx0i56F4XdJ0A5pgVLb81eEc7MzjFHs5XUQ9NsipnZ56q8KoeebBREPHaFfYn8rFrmVD%2FNqQE8iLkDxcDgKGXobre747kxs%2BBeQJluu4q2Bur7aQUl9rgklAtTyZAvSJU2lcii%2BhaF%2Fofsf91qWFt%2FroaS8j95IF551BT43h%2FCyd5PNY81%2Brff9Tbf7dw8z99korGd3uqFHLBthaC3gPWz%2FopENTIr3YT21FYo8gXxVPlk88w8g%2BXfOURp2WUdyN1Wt9AkK9Hc6aUUqbsOCtY2ysjsjBYk7G59AvU76nUTkPnkNBOpT5TinsXxz%2F2EGVWxPuDEDrbKB%2B46bY%2Bmbepn73AS1Ju8aJLSlkkEFJUbIxHjWepdqO4rtNYRDkKMHyixrDZwdoEJaoQT3cMcAoNPktRXKsqjDqu0O9ODcR3ieLdoVus2QXSdCwaArdbSVyX8e1IrDCh3rfkm5V4ZMFLimMr2wvumr7sidbmIm5ZwDzraVfNROajUeQ6A7F%2FYfq%2F4ngrvvI%2BOjOgZLFECG%2Bc87qhwD4iOCjhHeJsakjjceY57jhTQdot5S3uLQMK71jM4GOqUBvmeL5mvx4AfLEun0wl1ostw%2FlI%2F%2FtYAoiImtHrVj1inq8kfcHJ3H1jcBcu8qEjQwJMFMBUpyY%2BcpJwu7asTmw65O6ZobSU%2FEJFN19uRvCk0YUilV%2FdQbYApfV3%2Boji9hXoooElZNmDyWNd8e5lcI7K0ETRGMiGfUg2AObzBa9RgpVTSUoHk2O9TvzLFOwMet5TbdNuIXfQ4FF%2BAhKEOYSD9m0Mzd&X-Amz-Signature=c2f2144f7a63c97e22291669e3af112797ee55c3ed669b41006d03406b8ac8da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


