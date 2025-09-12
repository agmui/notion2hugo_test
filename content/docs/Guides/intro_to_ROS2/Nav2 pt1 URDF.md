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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTM7LI3%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGhusNeXyLcuWiJmtHSlj76YtZ7Lkw9mUSK6hjrXuR1AiAci8j89M2U3VkPTdCijQWKPT0NqOCAN2CQvImwpwlbOir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMQ6r1%2F4dbaaq51lsBKtwDSrkks1e5VDw39zlJgSH%2FFC988cdcUQ2vthSHEoRmicRv92R57%2FGeFrn0ms44mpUB3enn8LZWnUrA4XEbRaKC%2BoTqWjO6KSCrT%2BhgLup7349Gu%2FUrWD5yO5Xe8AuferzaBjs3W%2F39zFFxXt8DZO250iHm8D1xVSfi72yYVVW4W8J9vk5aj23W23hrk%2FQMq91nf4Y28XK4cOwl19dDfeu8bJcKIyjsksjcvquu5nlcXGkLjnTkQeMuNAjyj2ZfaDRElWTPzoSzMRp7Z6si8jrjrr1d2m98q4enlS%2BPx5Y7m8k4V63HELcxaz89RQCzEMf2XGpl8cZKqmA2MDy1BnUH5QCDYsdBhroizySW6tjp%2FmX27J9JPNbvrOOpq0jER6syJ5rw%2B2ZPL3Y0cj8zy%2B%2BEIbH1DXRVe4Tqez%2Fw1G4oOG6gUaRiz%2BsJd5xnXbAXGfIXr6m%2B7gXSU8QxwG39MGlJXIKU31o49BhdG9Uy1z0XcacTB1297wZdRCWwejpSgBeAWBBdoTzzEg9x2L8Rj3alQHSdl%2FEd%2FHsw%2FWdIigIg1mbcHF5GzCZrF6c299iNLcj2K62BP91slBVcj1oY8jypo4sEzGWhu8PoaXI8i7ohirQypJJ%2Bbo1GCSymqowwvtGNxgY6pgEZzxSC2I7wL1EfREM7d0x4wsqHPSTJ%2Bu8BQeqL4whLATWZTAmJbnifelr9TDUb%2FM6pkcXyioRdZSKt8yNpqdc8q7nq6yq%2BW4SRNymsQfhNGoKVGi%2BoiALZgAUQgkCyDmZa5zotR1AdL1OXs%2FqIrnTzWfDHgT8sXmHYjzRAeAzflT6zmARIZYPLI8kPKn9X%2FGyYrwgSYDZHobhRYONtdUvVLubTG4Qy&X-Amz-Signature=689ef6effa5d2f7a93facf0a6ed6336d5b82880c4634a02a6015363b6c01382e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTM7LI3%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGhusNeXyLcuWiJmtHSlj76YtZ7Lkw9mUSK6hjrXuR1AiAci8j89M2U3VkPTdCijQWKPT0NqOCAN2CQvImwpwlbOir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMQ6r1%2F4dbaaq51lsBKtwDSrkks1e5VDw39zlJgSH%2FFC988cdcUQ2vthSHEoRmicRv92R57%2FGeFrn0ms44mpUB3enn8LZWnUrA4XEbRaKC%2BoTqWjO6KSCrT%2BhgLup7349Gu%2FUrWD5yO5Xe8AuferzaBjs3W%2F39zFFxXt8DZO250iHm8D1xVSfi72yYVVW4W8J9vk5aj23W23hrk%2FQMq91nf4Y28XK4cOwl19dDfeu8bJcKIyjsksjcvquu5nlcXGkLjnTkQeMuNAjyj2ZfaDRElWTPzoSzMRp7Z6si8jrjrr1d2m98q4enlS%2BPx5Y7m8k4V63HELcxaz89RQCzEMf2XGpl8cZKqmA2MDy1BnUH5QCDYsdBhroizySW6tjp%2FmX27J9JPNbvrOOpq0jER6syJ5rw%2B2ZPL3Y0cj8zy%2B%2BEIbH1DXRVe4Tqez%2Fw1G4oOG6gUaRiz%2BsJd5xnXbAXGfIXr6m%2B7gXSU8QxwG39MGlJXIKU31o49BhdG9Uy1z0XcacTB1297wZdRCWwejpSgBeAWBBdoTzzEg9x2L8Rj3alQHSdl%2FEd%2FHsw%2FWdIigIg1mbcHF5GzCZrF6c299iNLcj2K62BP91slBVcj1oY8jypo4sEzGWhu8PoaXI8i7ohirQypJJ%2Bbo1GCSymqowwvtGNxgY6pgEZzxSC2I7wL1EfREM7d0x4wsqHPSTJ%2Bu8BQeqL4whLATWZTAmJbnifelr9TDUb%2FM6pkcXyioRdZSKt8yNpqdc8q7nq6yq%2BW4SRNymsQfhNGoKVGi%2BoiALZgAUQgkCyDmZa5zotR1AdL1OXs%2FqIrnTzWfDHgT8sXmHYjzRAeAzflT6zmARIZYPLI8kPKn9X%2FGyYrwgSYDZHobhRYONtdUvVLubTG4Qy&X-Amz-Signature=1bb718a35ca9db17a854a09e56ed804be4f1454f7a26a08b9d32e387f3d357e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTM7LI3%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGhusNeXyLcuWiJmtHSlj76YtZ7Lkw9mUSK6hjrXuR1AiAci8j89M2U3VkPTdCijQWKPT0NqOCAN2CQvImwpwlbOir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMQ6r1%2F4dbaaq51lsBKtwDSrkks1e5VDw39zlJgSH%2FFC988cdcUQ2vthSHEoRmicRv92R57%2FGeFrn0ms44mpUB3enn8LZWnUrA4XEbRaKC%2BoTqWjO6KSCrT%2BhgLup7349Gu%2FUrWD5yO5Xe8AuferzaBjs3W%2F39zFFxXt8DZO250iHm8D1xVSfi72yYVVW4W8J9vk5aj23W23hrk%2FQMq91nf4Y28XK4cOwl19dDfeu8bJcKIyjsksjcvquu5nlcXGkLjnTkQeMuNAjyj2ZfaDRElWTPzoSzMRp7Z6si8jrjrr1d2m98q4enlS%2BPx5Y7m8k4V63HELcxaz89RQCzEMf2XGpl8cZKqmA2MDy1BnUH5QCDYsdBhroizySW6tjp%2FmX27J9JPNbvrOOpq0jER6syJ5rw%2B2ZPL3Y0cj8zy%2B%2BEIbH1DXRVe4Tqez%2Fw1G4oOG6gUaRiz%2BsJd5xnXbAXGfIXr6m%2B7gXSU8QxwG39MGlJXIKU31o49BhdG9Uy1z0XcacTB1297wZdRCWwejpSgBeAWBBdoTzzEg9x2L8Rj3alQHSdl%2FEd%2FHsw%2FWdIigIg1mbcHF5GzCZrF6c299iNLcj2K62BP91slBVcj1oY8jypo4sEzGWhu8PoaXI8i7ohirQypJJ%2Bbo1GCSymqowwvtGNxgY6pgEZzxSC2I7wL1EfREM7d0x4wsqHPSTJ%2Bu8BQeqL4whLATWZTAmJbnifelr9TDUb%2FM6pkcXyioRdZSKt8yNpqdc8q7nq6yq%2BW4SRNymsQfhNGoKVGi%2BoiALZgAUQgkCyDmZa5zotR1AdL1OXs%2FqIrnTzWfDHgT8sXmHYjzRAeAzflT6zmARIZYPLI8kPKn9X%2FGyYrwgSYDZHobhRYONtdUvVLubTG4Qy&X-Amz-Signature=22b38075011ea02b5ee50b450d410e6bde5e4875f32dd5508659c19dc9d9bdf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTM7LI3%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGhusNeXyLcuWiJmtHSlj76YtZ7Lkw9mUSK6hjrXuR1AiAci8j89M2U3VkPTdCijQWKPT0NqOCAN2CQvImwpwlbOir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMQ6r1%2F4dbaaq51lsBKtwDSrkks1e5VDw39zlJgSH%2FFC988cdcUQ2vthSHEoRmicRv92R57%2FGeFrn0ms44mpUB3enn8LZWnUrA4XEbRaKC%2BoTqWjO6KSCrT%2BhgLup7349Gu%2FUrWD5yO5Xe8AuferzaBjs3W%2F39zFFxXt8DZO250iHm8D1xVSfi72yYVVW4W8J9vk5aj23W23hrk%2FQMq91nf4Y28XK4cOwl19dDfeu8bJcKIyjsksjcvquu5nlcXGkLjnTkQeMuNAjyj2ZfaDRElWTPzoSzMRp7Z6si8jrjrr1d2m98q4enlS%2BPx5Y7m8k4V63HELcxaz89RQCzEMf2XGpl8cZKqmA2MDy1BnUH5QCDYsdBhroizySW6tjp%2FmX27J9JPNbvrOOpq0jER6syJ5rw%2B2ZPL3Y0cj8zy%2B%2BEIbH1DXRVe4Tqez%2Fw1G4oOG6gUaRiz%2BsJd5xnXbAXGfIXr6m%2B7gXSU8QxwG39MGlJXIKU31o49BhdG9Uy1z0XcacTB1297wZdRCWwejpSgBeAWBBdoTzzEg9x2L8Rj3alQHSdl%2FEd%2FHsw%2FWdIigIg1mbcHF5GzCZrF6c299iNLcj2K62BP91slBVcj1oY8jypo4sEzGWhu8PoaXI8i7ohirQypJJ%2Bbo1GCSymqowwvtGNxgY6pgEZzxSC2I7wL1EfREM7d0x4wsqHPSTJ%2Bu8BQeqL4whLATWZTAmJbnifelr9TDUb%2FM6pkcXyioRdZSKt8yNpqdc8q7nq6yq%2BW4SRNymsQfhNGoKVGi%2BoiALZgAUQgkCyDmZa5zotR1AdL1OXs%2FqIrnTzWfDHgT8sXmHYjzRAeAzflT6zmARIZYPLI8kPKn9X%2FGyYrwgSYDZHobhRYONtdUvVLubTG4Qy&X-Amz-Signature=9a0f02263afc283e84079740a7a3a5197516bcfbe3a283ba6f8350df07360188&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTM7LI3%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGhusNeXyLcuWiJmtHSlj76YtZ7Lkw9mUSK6hjrXuR1AiAci8j89M2U3VkPTdCijQWKPT0NqOCAN2CQvImwpwlbOir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMQ6r1%2F4dbaaq51lsBKtwDSrkks1e5VDw39zlJgSH%2FFC988cdcUQ2vthSHEoRmicRv92R57%2FGeFrn0ms44mpUB3enn8LZWnUrA4XEbRaKC%2BoTqWjO6KSCrT%2BhgLup7349Gu%2FUrWD5yO5Xe8AuferzaBjs3W%2F39zFFxXt8DZO250iHm8D1xVSfi72yYVVW4W8J9vk5aj23W23hrk%2FQMq91nf4Y28XK4cOwl19dDfeu8bJcKIyjsksjcvquu5nlcXGkLjnTkQeMuNAjyj2ZfaDRElWTPzoSzMRp7Z6si8jrjrr1d2m98q4enlS%2BPx5Y7m8k4V63HELcxaz89RQCzEMf2XGpl8cZKqmA2MDy1BnUH5QCDYsdBhroizySW6tjp%2FmX27J9JPNbvrOOpq0jER6syJ5rw%2B2ZPL3Y0cj8zy%2B%2BEIbH1DXRVe4Tqez%2Fw1G4oOG6gUaRiz%2BsJd5xnXbAXGfIXr6m%2B7gXSU8QxwG39MGlJXIKU31o49BhdG9Uy1z0XcacTB1297wZdRCWwejpSgBeAWBBdoTzzEg9x2L8Rj3alQHSdl%2FEd%2FHsw%2FWdIigIg1mbcHF5GzCZrF6c299iNLcj2K62BP91slBVcj1oY8jypo4sEzGWhu8PoaXI8i7ohirQypJJ%2Bbo1GCSymqowwvtGNxgY6pgEZzxSC2I7wL1EfREM7d0x4wsqHPSTJ%2Bu8BQeqL4whLATWZTAmJbnifelr9TDUb%2FM6pkcXyioRdZSKt8yNpqdc8q7nq6yq%2BW4SRNymsQfhNGoKVGi%2BoiALZgAUQgkCyDmZa5zotR1AdL1OXs%2FqIrnTzWfDHgT8sXmHYjzRAeAzflT6zmARIZYPLI8kPKn9X%2FGyYrwgSYDZHobhRYONtdUvVLubTG4Qy&X-Amz-Signature=b85137b9b01d7595cb87a82fd3ca0d94b91f6611552eb75152b0bd750e527306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTM7LI3%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGhusNeXyLcuWiJmtHSlj76YtZ7Lkw9mUSK6hjrXuR1AiAci8j89M2U3VkPTdCijQWKPT0NqOCAN2CQvImwpwlbOir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMQ6r1%2F4dbaaq51lsBKtwDSrkks1e5VDw39zlJgSH%2FFC988cdcUQ2vthSHEoRmicRv92R57%2FGeFrn0ms44mpUB3enn8LZWnUrA4XEbRaKC%2BoTqWjO6KSCrT%2BhgLup7349Gu%2FUrWD5yO5Xe8AuferzaBjs3W%2F39zFFxXt8DZO250iHm8D1xVSfi72yYVVW4W8J9vk5aj23W23hrk%2FQMq91nf4Y28XK4cOwl19dDfeu8bJcKIyjsksjcvquu5nlcXGkLjnTkQeMuNAjyj2ZfaDRElWTPzoSzMRp7Z6si8jrjrr1d2m98q4enlS%2BPx5Y7m8k4V63HELcxaz89RQCzEMf2XGpl8cZKqmA2MDy1BnUH5QCDYsdBhroizySW6tjp%2FmX27J9JPNbvrOOpq0jER6syJ5rw%2B2ZPL3Y0cj8zy%2B%2BEIbH1DXRVe4Tqez%2Fw1G4oOG6gUaRiz%2BsJd5xnXbAXGfIXr6m%2B7gXSU8QxwG39MGlJXIKU31o49BhdG9Uy1z0XcacTB1297wZdRCWwejpSgBeAWBBdoTzzEg9x2L8Rj3alQHSdl%2FEd%2FHsw%2FWdIigIg1mbcHF5GzCZrF6c299iNLcj2K62BP91slBVcj1oY8jypo4sEzGWhu8PoaXI8i7ohirQypJJ%2Bbo1GCSymqowwvtGNxgY6pgEZzxSC2I7wL1EfREM7d0x4wsqHPSTJ%2Bu8BQeqL4whLATWZTAmJbnifelr9TDUb%2FM6pkcXyioRdZSKt8yNpqdc8q7nq6yq%2BW4SRNymsQfhNGoKVGi%2BoiALZgAUQgkCyDmZa5zotR1AdL1OXs%2FqIrnTzWfDHgT8sXmHYjzRAeAzflT6zmARIZYPLI8kPKn9X%2FGyYrwgSYDZHobhRYONtdUvVLubTG4Qy&X-Amz-Signature=68d2e7d331025b18db1802aced177eb1ba88faefaefafe2f7cd771430e527ff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTM7LI3%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGhusNeXyLcuWiJmtHSlj76YtZ7Lkw9mUSK6hjrXuR1AiAci8j89M2U3VkPTdCijQWKPT0NqOCAN2CQvImwpwlbOir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMQ6r1%2F4dbaaq51lsBKtwDSrkks1e5VDw39zlJgSH%2FFC988cdcUQ2vthSHEoRmicRv92R57%2FGeFrn0ms44mpUB3enn8LZWnUrA4XEbRaKC%2BoTqWjO6KSCrT%2BhgLup7349Gu%2FUrWD5yO5Xe8AuferzaBjs3W%2F39zFFxXt8DZO250iHm8D1xVSfi72yYVVW4W8J9vk5aj23W23hrk%2FQMq91nf4Y28XK4cOwl19dDfeu8bJcKIyjsksjcvquu5nlcXGkLjnTkQeMuNAjyj2ZfaDRElWTPzoSzMRp7Z6si8jrjrr1d2m98q4enlS%2BPx5Y7m8k4V63HELcxaz89RQCzEMf2XGpl8cZKqmA2MDy1BnUH5QCDYsdBhroizySW6tjp%2FmX27J9JPNbvrOOpq0jER6syJ5rw%2B2ZPL3Y0cj8zy%2B%2BEIbH1DXRVe4Tqez%2Fw1G4oOG6gUaRiz%2BsJd5xnXbAXGfIXr6m%2B7gXSU8QxwG39MGlJXIKU31o49BhdG9Uy1z0XcacTB1297wZdRCWwejpSgBeAWBBdoTzzEg9x2L8Rj3alQHSdl%2FEd%2FHsw%2FWdIigIg1mbcHF5GzCZrF6c299iNLcj2K62BP91slBVcj1oY8jypo4sEzGWhu8PoaXI8i7ohirQypJJ%2Bbo1GCSymqowwvtGNxgY6pgEZzxSC2I7wL1EfREM7d0x4wsqHPSTJ%2Bu8BQeqL4whLATWZTAmJbnifelr9TDUb%2FM6pkcXyioRdZSKt8yNpqdc8q7nq6yq%2BW4SRNymsQfhNGoKVGi%2BoiALZgAUQgkCyDmZa5zotR1AdL1OXs%2FqIrnTzWfDHgT8sXmHYjzRAeAzflT6zmARIZYPLI8kPKn9X%2FGyYrwgSYDZHobhRYONtdUvVLubTG4Qy&X-Amz-Signature=04e876d971bb0011eccffaaa4d61eb1458062341fc3511f567636b8f0d0f7e47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTM7LI3%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGhusNeXyLcuWiJmtHSlj76YtZ7Lkw9mUSK6hjrXuR1AiAci8j89M2U3VkPTdCijQWKPT0NqOCAN2CQvImwpwlbOir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMQ6r1%2F4dbaaq51lsBKtwDSrkks1e5VDw39zlJgSH%2FFC988cdcUQ2vthSHEoRmicRv92R57%2FGeFrn0ms44mpUB3enn8LZWnUrA4XEbRaKC%2BoTqWjO6KSCrT%2BhgLup7349Gu%2FUrWD5yO5Xe8AuferzaBjs3W%2F39zFFxXt8DZO250iHm8D1xVSfi72yYVVW4W8J9vk5aj23W23hrk%2FQMq91nf4Y28XK4cOwl19dDfeu8bJcKIyjsksjcvquu5nlcXGkLjnTkQeMuNAjyj2ZfaDRElWTPzoSzMRp7Z6si8jrjrr1d2m98q4enlS%2BPx5Y7m8k4V63HELcxaz89RQCzEMf2XGpl8cZKqmA2MDy1BnUH5QCDYsdBhroizySW6tjp%2FmX27J9JPNbvrOOpq0jER6syJ5rw%2B2ZPL3Y0cj8zy%2B%2BEIbH1DXRVe4Tqez%2Fw1G4oOG6gUaRiz%2BsJd5xnXbAXGfIXr6m%2B7gXSU8QxwG39MGlJXIKU31o49BhdG9Uy1z0XcacTB1297wZdRCWwejpSgBeAWBBdoTzzEg9x2L8Rj3alQHSdl%2FEd%2FHsw%2FWdIigIg1mbcHF5GzCZrF6c299iNLcj2K62BP91slBVcj1oY8jypo4sEzGWhu8PoaXI8i7ohirQypJJ%2Bbo1GCSymqowwvtGNxgY6pgEZzxSC2I7wL1EfREM7d0x4wsqHPSTJ%2Bu8BQeqL4whLATWZTAmJbnifelr9TDUb%2FM6pkcXyioRdZSKt8yNpqdc8q7nq6yq%2BW4SRNymsQfhNGoKVGi%2BoiALZgAUQgkCyDmZa5zotR1AdL1OXs%2FqIrnTzWfDHgT8sXmHYjzRAeAzflT6zmARIZYPLI8kPKn9X%2FGyYrwgSYDZHobhRYONtdUvVLubTG4Qy&X-Amz-Signature=0627a24eba5e96c2f2b2acfb5b9a75871c8bf5d6f030cfc72febcbef5f857bb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTM7LI3%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGhusNeXyLcuWiJmtHSlj76YtZ7Lkw9mUSK6hjrXuR1AiAci8j89M2U3VkPTdCijQWKPT0NqOCAN2CQvImwpwlbOir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMQ6r1%2F4dbaaq51lsBKtwDSrkks1e5VDw39zlJgSH%2FFC988cdcUQ2vthSHEoRmicRv92R57%2FGeFrn0ms44mpUB3enn8LZWnUrA4XEbRaKC%2BoTqWjO6KSCrT%2BhgLup7349Gu%2FUrWD5yO5Xe8AuferzaBjs3W%2F39zFFxXt8DZO250iHm8D1xVSfi72yYVVW4W8J9vk5aj23W23hrk%2FQMq91nf4Y28XK4cOwl19dDfeu8bJcKIyjsksjcvquu5nlcXGkLjnTkQeMuNAjyj2ZfaDRElWTPzoSzMRp7Z6si8jrjrr1d2m98q4enlS%2BPx5Y7m8k4V63HELcxaz89RQCzEMf2XGpl8cZKqmA2MDy1BnUH5QCDYsdBhroizySW6tjp%2FmX27J9JPNbvrOOpq0jER6syJ5rw%2B2ZPL3Y0cj8zy%2B%2BEIbH1DXRVe4Tqez%2Fw1G4oOG6gUaRiz%2BsJd5xnXbAXGfIXr6m%2B7gXSU8QxwG39MGlJXIKU31o49BhdG9Uy1z0XcacTB1297wZdRCWwejpSgBeAWBBdoTzzEg9x2L8Rj3alQHSdl%2FEd%2FHsw%2FWdIigIg1mbcHF5GzCZrF6c299iNLcj2K62BP91slBVcj1oY8jypo4sEzGWhu8PoaXI8i7ohirQypJJ%2Bbo1GCSymqowwvtGNxgY6pgEZzxSC2I7wL1EfREM7d0x4wsqHPSTJ%2Bu8BQeqL4whLATWZTAmJbnifelr9TDUb%2FM6pkcXyioRdZSKt8yNpqdc8q7nq6yq%2BW4SRNymsQfhNGoKVGi%2BoiALZgAUQgkCyDmZa5zotR1AdL1OXs%2FqIrnTzWfDHgT8sXmHYjzRAeAzflT6zmARIZYPLI8kPKn9X%2FGyYrwgSYDZHobhRYONtdUvVLubTG4Qy&X-Amz-Signature=d64cc49785366a3e47ea4be4a9a2ed683f2b8ac105aa59821b73382d7281b10f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTM7LI3%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGhusNeXyLcuWiJmtHSlj76YtZ7Lkw9mUSK6hjrXuR1AiAci8j89M2U3VkPTdCijQWKPT0NqOCAN2CQvImwpwlbOir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMQ6r1%2F4dbaaq51lsBKtwDSrkks1e5VDw39zlJgSH%2FFC988cdcUQ2vthSHEoRmicRv92R57%2FGeFrn0ms44mpUB3enn8LZWnUrA4XEbRaKC%2BoTqWjO6KSCrT%2BhgLup7349Gu%2FUrWD5yO5Xe8AuferzaBjs3W%2F39zFFxXt8DZO250iHm8D1xVSfi72yYVVW4W8J9vk5aj23W23hrk%2FQMq91nf4Y28XK4cOwl19dDfeu8bJcKIyjsksjcvquu5nlcXGkLjnTkQeMuNAjyj2ZfaDRElWTPzoSzMRp7Z6si8jrjrr1d2m98q4enlS%2BPx5Y7m8k4V63HELcxaz89RQCzEMf2XGpl8cZKqmA2MDy1BnUH5QCDYsdBhroizySW6tjp%2FmX27J9JPNbvrOOpq0jER6syJ5rw%2B2ZPL3Y0cj8zy%2B%2BEIbH1DXRVe4Tqez%2Fw1G4oOG6gUaRiz%2BsJd5xnXbAXGfIXr6m%2B7gXSU8QxwG39MGlJXIKU31o49BhdG9Uy1z0XcacTB1297wZdRCWwejpSgBeAWBBdoTzzEg9x2L8Rj3alQHSdl%2FEd%2FHsw%2FWdIigIg1mbcHF5GzCZrF6c299iNLcj2K62BP91slBVcj1oY8jypo4sEzGWhu8PoaXI8i7ohirQypJJ%2Bbo1GCSymqowwvtGNxgY6pgEZzxSC2I7wL1EfREM7d0x4wsqHPSTJ%2Bu8BQeqL4whLATWZTAmJbnifelr9TDUb%2FM6pkcXyioRdZSKt8yNpqdc8q7nq6yq%2BW4SRNymsQfhNGoKVGi%2BoiALZgAUQgkCyDmZa5zotR1AdL1OXs%2FqIrnTzWfDHgT8sXmHYjzRAeAzflT6zmARIZYPLI8kPKn9X%2FGyYrwgSYDZHobhRYONtdUvVLubTG4Qy&X-Amz-Signature=0a0cee9418789ed89b0b305e24559fa76818cc853133a68792876d1c1e116fde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCNTEHP5%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGonMY5yf4MKiLCA%2BDZZ9SgWjhQjG%2FBAjCZllyTjvgvwAiEA3cRNYMWEP24As0%2BZUp2nO6yAe6ouWstLSBTD7xu0D9kq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDOag5eqh5ikuCCinlyrcA0ukDFsT%2BIqpeAunSDWUytcRyIDzWUhqq4f4Q4MNQGcBj69MGILubgBZOpGJg0vI6TZxigdhwm3%2BWMxO3dvg5AuqWKlTSpIIQHP1kNFx7wNp8T6Ce5uPHwx1lgUo1GKslJeIqlesnQEaIWZssYYb6gN%2F7%2FzCZb4DhzsBIO9WPdiVHxf9uMqkRQ22jhyoFHHLuRYx9%2FiauXQoMUleQfBqQbDe73QXGLLLMhKKRUR9n76r6lZ%2Ft7Esv7bYc6%2B7MDeXbiIgkZIl5jRWLCofFURxm5lnOJCAWJ66GAReokAJHzCcImyNj3SVhqdZB06Oh0D%2FpniPmrVDHGCzmT6XxPD5i4e6TeqaCzmnH8ncW3hJ0z%2ByP8%2FxelzIPOVdM%2FPmPr8%2FdmJJFPcbhCLbLdiRAXqUPsABj8x1U7Ebfr%2FPFBcs%2Fut1y9EXMrIhxq%2FrDFIMfm9DQ31UpGM%2BPK3E6PvzZoMDL9VCiwNh0ZPoRvEscKps1mXMU7sh5IDXflCg7%2BrYQ7GaPGg3EcDqd209SWHMGB%2F6QxbiyUVQul6tMoGKM3IhBRq1PfgcU2AnvNaHcblwa1k4orxZCWgxJOZAMWvZibXWxuwYjVn8hujpaQrSNUxpvi3pIqcv3TEEtQq%2Buu83MInRjcYGOqUBLYSApoQS%2BL2etFh7PdFYyp1eCpcKC3E0VoEM4jzg8gPdM2mG661azdfweInie%2FhhNggrMih0WWBETPSNfD5w50AabajgGP8i88nN6RxlLzEuTHXj5Phiqf7NMpmdEAlrABeYl0D6B3z4Rfndv7q9eIOG05n20m%2BU8NVevfe2ZIEUv%2BxjB9XSnjhuo5s4W1HpgDG%2BF4pdFBrHDMYOMLJsmROXWwpl&X-Amz-Signature=a17cc2a110dde245d4fcee25d0b7db0b0d41175530bc9b4c5c6ab2b965c0b1d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVJHC46Z%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9RFgv5xZjtnJAU6%2BAWDcUy9DnZ2ncRNON7pQzZf5HiQIhAPUNDGv2tViH1I5En90jU3FFtIqB65izhkGp7fApKSSpKv8DCCIQABoMNjM3NDIzMTgzODA1Igwqjo9RxfgrUknBTgwq3ANaYLhLA4Kpl1YSSQh58o9lT1EVn7K%2B6wnYUUUKe4w8rHDSdaB8PU7C0%2B%2Fq%2BAOp7floo5z0hsZlRQaAFqlUxLfPHdrPASXAUzGxEZPvZUGIvW5l%2BmA9sDhXrWtluuuAAAiowcshaM4wpdXXttflMogzxpJPMn%2F7xuQ9YvtNplFDnqwyBCEPUd7vuiZCZSUWLlNcEGDze0weXsuAEaSjiM2jdkfWp4L4Ru3bVItVnv%2FzPt5dMXrV%2BHr8x4EtNW3NwY7yTxBQbIQz7WIbwVLma4nL2f1MYx%2BgHjSoXstjZzNWrK2rbN4hMj2WpGcMA%2Ft9FdQJX2JGIcy8m%2FuGIWfJxN2WJEDYvZGURwz5WTctH9CbFCucppQNVknjityUH%2Bej8aoZ6dK7pSM4aZ4jB2ix3vtPvr0onnPW5h5GEvcdF5O7z%2FORizFmx676gQRo0spSrIoCzN5za5DsMoekGfcT%2Fnmpb5Czm3Bxx7VCq%2FmLYXCTBUfs7021J0dSWrCXOb8hGGQbNXBLtAUhlEXshzsxO2nahBhZMqf1Z8d5id2ji1zabCNC80xri6UtUHBWjGULDv9uBP2R6ecNtk0CfO607UAyRHYPErb0VfBDHxYVX65r73FhRS2eDurxoMF8vDDM0I3GBjqkAb6tElCLUcR%2FUbWqT2PibkI7d5HR8egoTBpm6st8%2Fubvt1S0DRilYiPrW662rODm8s8TuRUYjVBawbGM7Sp1xrBG4RwerDs%2Fg1ukKUAyMjQswGXxtZ5YFasnS9jyhU7aE%2BZS0H9WwQLyI%2FCSmkDlg6PfiKai5iHAlcECvwb4zR%2BIOAw0BHiKVur1QG%2BQeCwXsdMJpg7WfiiA70PaN8yuuQ7%2FYR7J&X-Amz-Signature=cc45f0b8b7b73739dc0abc64b879ed6e32d4a5c23c77c7a4b1fd7194a4a7e1be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCL53FMC%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg2I7uI4%2FXTR70ryzOhrK5jICrTIqA9mJfacBM7sDdewIgTrwqoUGSqJV4x%2B8geflSFJNTp1oP%2FIwZrYM%2FRIw4bsEq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDPQB5g%2Bat7ekBjHtKyrcA1IAAlI0AlFv706tkGjWb6K29gbRLfHjllQBjNZqf2agk5GfMIBEAdPl7kQFnSTeeTBVz4CQevX%2BnDxY4q2tOYF1WIoRsxijE5%2Bhkp7mbp4Cl0qKV20Vg11MLVWsRAJbFCfYEYVpbCu4HGQK0H0UTsNJHt146xofSk5itnI739%2Bj36la0SC95WR1A6M%2FEljn7raQsOtcd4Ds%2BptK%2BEdoOXqX1t%2BJKTUiSMb5MZi2MIrqMKWzJdGEeNkqM18I8uR%2BjMp4Pp0%2Fp37MDG8bxsy4eKFeUJHxWBtx4O8%2Fbdmz%2B1gkiQ7IsCkxZ%2B7oI%2Fo9ACXHCr3SKQ6gwNEFHUq9mDHmMkvRd1K9LJjfB%2B7gCotQoN0rIJPZLH7XJ5CuchPtUs%2BkiHUGkEgC8fxSRaqzRBIjN%2Bm6hTSlNsW%2BWMDBhvhvrfDVqqZWq1TJvFCZUnRWjEE4WHsaW1xmGsSObt8sV7rgpMLMVY45GOiyTKd5QLTNzCNhvjrGbIQXLhk%2F6c2tQ2xr9wsirDXLrHzJ9xTigTGCz9k66oBrcVwBHXDwAHWPjKrzBWXusG8ZFJizW9Jh93dMxzkpYVV%2Bw8ARbBdtN%2BTlxF358sHmqLlSd%2FuCwYCzvAgYEIEoY7P2Awe7c%2BU7MOXRjcYGOqUBoi1rBOHGu%2FvrFClG1cK8d6QYaRvkUEgWQ11Dgo4EKXbAMNJr8UIds29k9iPmSZ%2BlY0tDxU0GaOEy0IhsRjHmnsYGdG6rOd%2FiAgeMm%2Bk9erOuwyieuCiOtDtCpiXPaScu90vw8xL3Yb5usiXX6z%2BpReTYNAkWnKHJ%2BdrmbjaUIng3571inlobVkq8kolEzmP0f7bjEXnhxVhOSIKrLVNglWHpyisf&X-Amz-Signature=9612daa233d30f533ad5e3cae219b59ff2d264cdc5af51f7bef6d483cf6795e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTM7LI3%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGhusNeXyLcuWiJmtHSlj76YtZ7Lkw9mUSK6hjrXuR1AiAci8j89M2U3VkPTdCijQWKPT0NqOCAN2CQvImwpwlbOir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMQ6r1%2F4dbaaq51lsBKtwDSrkks1e5VDw39zlJgSH%2FFC988cdcUQ2vthSHEoRmicRv92R57%2FGeFrn0ms44mpUB3enn8LZWnUrA4XEbRaKC%2BoTqWjO6KSCrT%2BhgLup7349Gu%2FUrWD5yO5Xe8AuferzaBjs3W%2F39zFFxXt8DZO250iHm8D1xVSfi72yYVVW4W8J9vk5aj23W23hrk%2FQMq91nf4Y28XK4cOwl19dDfeu8bJcKIyjsksjcvquu5nlcXGkLjnTkQeMuNAjyj2ZfaDRElWTPzoSzMRp7Z6si8jrjrr1d2m98q4enlS%2BPx5Y7m8k4V63HELcxaz89RQCzEMf2XGpl8cZKqmA2MDy1BnUH5QCDYsdBhroizySW6tjp%2FmX27J9JPNbvrOOpq0jER6syJ5rw%2B2ZPL3Y0cj8zy%2B%2BEIbH1DXRVe4Tqez%2Fw1G4oOG6gUaRiz%2BsJd5xnXbAXGfIXr6m%2B7gXSU8QxwG39MGlJXIKU31o49BhdG9Uy1z0XcacTB1297wZdRCWwejpSgBeAWBBdoTzzEg9x2L8Rj3alQHSdl%2FEd%2FHsw%2FWdIigIg1mbcHF5GzCZrF6c299iNLcj2K62BP91slBVcj1oY8jypo4sEzGWhu8PoaXI8i7ohirQypJJ%2Bbo1GCSymqowwvtGNxgY6pgEZzxSC2I7wL1EfREM7d0x4wsqHPSTJ%2Bu8BQeqL4whLATWZTAmJbnifelr9TDUb%2FM6pkcXyioRdZSKt8yNpqdc8q7nq6yq%2BW4SRNymsQfhNGoKVGi%2BoiALZgAUQgkCyDmZa5zotR1AdL1OXs%2FqIrnTzWfDHgT8sXmHYjzRAeAzflT6zmARIZYPLI8kPKn9X%2FGyYrwgSYDZHobhRYONtdUvVLubTG4Qy&X-Amz-Signature=b70c47f1997ded0d93a08065941e659f7dff6e2383edec12c68e8608095adba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHX7QPSN%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4TXZSXz9HOKbJ5Y8RWDRtBzbzch7VMZz7qTksYMLCogIgC5XptNqL%2FMgjeZnwSoZ3SallqptPS8Z4nMr%2F1lLrXMkq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDNTfN1Y%2Fyfqv9BCaJSrcAwY40RWvG8Y5aJmCLJLyR3SUJe9kecPRjTm8Ltr8WD3YhnJjydcopA0WePyfwd7vDpz%2FWPpqfpV2i1aXkGQZZE%2BoXF%2FJkEBjQCtOHMH3Tur9RmmJoSovwKvj%2BKbK%2FTRz1hurfGCYK2Fop2ldLLZh28Zd1Tb08%2ByGwXj948i7ILz50Gupj%2BHiuPJ8rYqVa65NtYUtgiUL0tf%2FJVBnqs8Kc%2FKIyZQ3lfcySythxvXNCix3AeAaFyUa4IKWrL6Jq1IvCAbvtsO%2BZ3s1uJHUQ3rPsrWDrW903dcV3W8V6ZRalsxXFkFw27VUf0tU3jT6sod1%2BmO7MkskITjbA7djhkliwYQ6ltFb%2FTX76752JbZyMpBij4y%2FzGRlxFVRxB2B%2FsVuCf1FVMX%2F9f%2BjR7qwjQkY4dviNuibbSGjtmM29rBPPN98mhFlHTlQ7xkZvCcd%2FMXSxaCauhmVFz4S4DhBkHVoa9xRgYcpqlOtLw%2BQBbLD23kU1O3peyiy420pr30USMav3%2FT3ltb4wZMeCGz8rMBXYAYlxD9ok3sJR%2FbLZAX8%2B0zonYLspqTfde80c%2BUm9lfFGPRT7gskbl72Apwf0BPSe9vSiTtIQI1j7u7E5C0AFNbOZPkA1CxRDuIzZxrPMOLRjcYGOqUBFqwuV8sApIX%2FoeX%2FgPkE%2Fcor4xE5yRlPGkcODgC25k7ovbYPZP3%2FA%2FY1k4nilGWxlVbicAQWyhwbIV%2FvaJCp9u7da%2BJmgEP1Q5pe9JwJp7OreaIZVPQMgtusmx8JtG6%2B33NvSsx%2BSmcd7P7EJf8VLNqbVkJ1AMc3QU%2FozEh5rCrkBk1Fc%2BaNarceavlbfueSP4cZxtrJ%2Ffq72H6pMKEPif1TjOqC&X-Amz-Signature=71725d665321d8cd28eeee53938818a5214c291267b59b6fe19e5f0eff754494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTM7LI3%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGhusNeXyLcuWiJmtHSlj76YtZ7Lkw9mUSK6hjrXuR1AiAci8j89M2U3VkPTdCijQWKPT0NqOCAN2CQvImwpwlbOir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMQ6r1%2F4dbaaq51lsBKtwDSrkks1e5VDw39zlJgSH%2FFC988cdcUQ2vthSHEoRmicRv92R57%2FGeFrn0ms44mpUB3enn8LZWnUrA4XEbRaKC%2BoTqWjO6KSCrT%2BhgLup7349Gu%2FUrWD5yO5Xe8AuferzaBjs3W%2F39zFFxXt8DZO250iHm8D1xVSfi72yYVVW4W8J9vk5aj23W23hrk%2FQMq91nf4Y28XK4cOwl19dDfeu8bJcKIyjsksjcvquu5nlcXGkLjnTkQeMuNAjyj2ZfaDRElWTPzoSzMRp7Z6si8jrjrr1d2m98q4enlS%2BPx5Y7m8k4V63HELcxaz89RQCzEMf2XGpl8cZKqmA2MDy1BnUH5QCDYsdBhroizySW6tjp%2FmX27J9JPNbvrOOpq0jER6syJ5rw%2B2ZPL3Y0cj8zy%2B%2BEIbH1DXRVe4Tqez%2Fw1G4oOG6gUaRiz%2BsJd5xnXbAXGfIXr6m%2B7gXSU8QxwG39MGlJXIKU31o49BhdG9Uy1z0XcacTB1297wZdRCWwejpSgBeAWBBdoTzzEg9x2L8Rj3alQHSdl%2FEd%2FHsw%2FWdIigIg1mbcHF5GzCZrF6c299iNLcj2K62BP91slBVcj1oY8jypo4sEzGWhu8PoaXI8i7ohirQypJJ%2Bbo1GCSymqowwvtGNxgY6pgEZzxSC2I7wL1EfREM7d0x4wsqHPSTJ%2Bu8BQeqL4whLATWZTAmJbnifelr9TDUb%2FM6pkcXyioRdZSKt8yNpqdc8q7nq6yq%2BW4SRNymsQfhNGoKVGi%2BoiALZgAUQgkCyDmZa5zotR1AdL1OXs%2FqIrnTzWfDHgT8sXmHYjzRAeAzflT6zmARIZYPLI8kPKn9X%2FGyYrwgSYDZHobhRYONtdUvVLubTG4Qy&X-Amz-Signature=c4465c20c6119c8f61368ccf1de1098cc04715a77e2dd6d1417b19abb1e40559&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S57JMINH%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW4zB%2B1P9qwtT92SDZgopYnctvQC9iDXX6NMv8U3Ja5QIgGbazxkbH1W5Y5GobLTAoj5Q4NX8C%2FUNVbJb47xKimTMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDE8lSqJG0o8rKPI%2BdyrcA8%2Fi2F7HeA4NysGV75GK4BCpUgzsE0ZFJepVbvLfTx%2BUITz33VQsMx9iaxibXc1KcOWqaWK%2F27AJJeDKdDfmZ12396o5QXOL2adXqHM%2FhAy12siYhGaM6N8BScT3dZa5bTQkvLd86ssfiJCKfUR8Jf2xr%2Bld%2FXEHuQSIKNY9R6R1cB1LoVLSWqgc39x4527k%2Bqnr1su6oEuyye7TOm%2FsZth19jTzvIEZ3NiYkZSWmuzRYI%2F8EtMnbDeTFYZ91BRzfZuDSyBSVU6W9VEXNJ5OSwRxozWpw3%2BeUL9H7Tci7Jv1OI8ZG9FRuccNsxLELAk7F2hZSWeqsespjEmaJ6hX04b2rT87mzEUlWMzMTjIOYVzPI%2FgsB%2BeNXcBvdvF4NftuxODzNF0fz508D6q64csU4vpiMDGmkpZJvp491Ys%2FrBnWa5UsUbUZeuRgK01z3ed9mQghOWqQaPPAxJFfF3AbYQCb03BZ5QBfwmT9F7GCZgAZdqwUv2VIPCg%2Fi2PFfRtauvCA4p%2Bmrm%2FIqIp2SKDKt2ZHPqxL83XZqe522YISMcQl9Pq5sO28vbtkb8FOFK2O8LSYQqrZx%2B9INWGz2s0qmUUhw7vPmkaeeZ9xp71uKShor8N4LNrsE0E9shkMJLRjcYGOqUB8NUas3qsQ8Otpjlp%2BO5fIpO5pls1tdp%2BozZYcgbpL10UG0PerleZdJIgWn9DjBz3vHT9E90ryYYhZ9WeyNc5OtSCO5u4fejroKWMNXkgNxDeGvt5eir9f6ciNVcUQkWwl%2F31kzbPg%2FcJqQhUbw77eu4jFGDVRwBNtLSke49KVEHSFkk8zgtOcPmwKTIKoVjou%2B61pJ%2F5983l%2B8LvIjZb%2Bz5zVd97&X-Amz-Signature=02286a41e6104c2057d11bd9231d19d4ddd2e5eca090fd76eb5e7a9a503a196e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTM7LI3%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGhusNeXyLcuWiJmtHSlj76YtZ7Lkw9mUSK6hjrXuR1AiAci8j89M2U3VkPTdCijQWKPT0NqOCAN2CQvImwpwlbOir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMQ6r1%2F4dbaaq51lsBKtwDSrkks1e5VDw39zlJgSH%2FFC988cdcUQ2vthSHEoRmicRv92R57%2FGeFrn0ms44mpUB3enn8LZWnUrA4XEbRaKC%2BoTqWjO6KSCrT%2BhgLup7349Gu%2FUrWD5yO5Xe8AuferzaBjs3W%2F39zFFxXt8DZO250iHm8D1xVSfi72yYVVW4W8J9vk5aj23W23hrk%2FQMq91nf4Y28XK4cOwl19dDfeu8bJcKIyjsksjcvquu5nlcXGkLjnTkQeMuNAjyj2ZfaDRElWTPzoSzMRp7Z6si8jrjrr1d2m98q4enlS%2BPx5Y7m8k4V63HELcxaz89RQCzEMf2XGpl8cZKqmA2MDy1BnUH5QCDYsdBhroizySW6tjp%2FmX27J9JPNbvrOOpq0jER6syJ5rw%2B2ZPL3Y0cj8zy%2B%2BEIbH1DXRVe4Tqez%2Fw1G4oOG6gUaRiz%2BsJd5xnXbAXGfIXr6m%2B7gXSU8QxwG39MGlJXIKU31o49BhdG9Uy1z0XcacTB1297wZdRCWwejpSgBeAWBBdoTzzEg9x2L8Rj3alQHSdl%2FEd%2FHsw%2FWdIigIg1mbcHF5GzCZrF6c299iNLcj2K62BP91slBVcj1oY8jypo4sEzGWhu8PoaXI8i7ohirQypJJ%2Bbo1GCSymqowwvtGNxgY6pgEZzxSC2I7wL1EfREM7d0x4wsqHPSTJ%2Bu8BQeqL4whLATWZTAmJbnifelr9TDUb%2FM6pkcXyioRdZSKt8yNpqdc8q7nq6yq%2BW4SRNymsQfhNGoKVGi%2BoiALZgAUQgkCyDmZa5zotR1AdL1OXs%2FqIrnTzWfDHgT8sXmHYjzRAeAzflT6zmARIZYPLI8kPKn9X%2FGyYrwgSYDZHobhRYONtdUvVLubTG4Qy&X-Amz-Signature=2db73becaec121beae5dbf16d279f076afac2cc633517e8f7022689c93dd83f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFTVMUI3%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBy49H3mwIlW8Tv59SSBmGlKgsUg%2FiwI8mKLQ0NsF48rAiEA6xRJzi3BzXcy7G91dAt7E3jibprfn6lhDF9cqbk049wq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDP6WeI0Cig6jh0IHXircA2yCBkUWHsZShMnOJFf4gBdyD4CbnJccpZV%2BAJvk4S4cWnn6JaaGs7uAeov0DL9YxoUeJrtehSSiXbWXZrndEK6kUVdFAgV%2FAVe0Ba%2Byj1QIhvUJnNRPX9gjg30xF%2BSnAISOxrPpy8zi1i7eM1IWgTZuHoe3bnqT4rD7DR2ReuxLDbyV1as86Fq7yWpp84ZYeqJ2hNXsjNJr7Q3Ym1U7Q9aMD%2BTdwqEn%2BqsCjuy82n%2Bpknmms%2BLWIa%2Fji17vmD6nt2GPc%2BJSYfhmxV2D0CSgTFG3XGMGCQiHs6hLslz1T7ckcjP06ojDNwUTdfpZhH%2FUu5qVHBU8oUUKNVAKX6dqPKF1o1YGufvGMYCQrLMpV%2BurW2pne4eV3i03nBp8tehvrVUObDyJIVmK0bNhzRrsuLuj2rj1VDF2iTr4Mjo7XAB7UWWBgUtRWcMFBuUbLS5D9GDLtbMvnsCZmpwacJ0kQ47hdh%2FWEozyfz%2F%2BcKVrO4N8vtU8aKc38HV34J%2BDfrbm39H2t%2FrSMzFfDVIPx6yDkl0IVcVFK8aa3pLRYnyTC7NemB1nzki0uvJkiXfENoVyQ%2FUOrz70B5%2FeY4n5D928g7OEAwccT55Dnjl9YQ9JNF4XQfTuwc%2BOmby8FBx6MLXRjcYGOqUB6O%2FLL7%2F6R9FYH9Zf6WgMKRvpsBvtDggohClFgmSVUsgVqNFj765ec2sjbtnsVMCZHBgedEljFFcstt3sNT3BK%2B8%2FhkB0SFxmJUaqJ1tK6hfj%2BhYZT4cyGZOmlIOYskeJbEyiRsTJo4ln%2FzERT27KQX7CbjwKZyZ37dUwQ1vMpQTUYGgUqRpphv08sC71YLI0Iyr%2BgAc74afJcPp3Pm0pFOP5PLag&X-Amz-Signature=e511b2e5c56d42d9416e2960cce1a1c81c8a49dbff7ee17b961ebd0733735b39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTM7LI3%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGhusNeXyLcuWiJmtHSlj76YtZ7Lkw9mUSK6hjrXuR1AiAci8j89M2U3VkPTdCijQWKPT0NqOCAN2CQvImwpwlbOir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMQ6r1%2F4dbaaq51lsBKtwDSrkks1e5VDw39zlJgSH%2FFC988cdcUQ2vthSHEoRmicRv92R57%2FGeFrn0ms44mpUB3enn8LZWnUrA4XEbRaKC%2BoTqWjO6KSCrT%2BhgLup7349Gu%2FUrWD5yO5Xe8AuferzaBjs3W%2F39zFFxXt8DZO250iHm8D1xVSfi72yYVVW4W8J9vk5aj23W23hrk%2FQMq91nf4Y28XK4cOwl19dDfeu8bJcKIyjsksjcvquu5nlcXGkLjnTkQeMuNAjyj2ZfaDRElWTPzoSzMRp7Z6si8jrjrr1d2m98q4enlS%2BPx5Y7m8k4V63HELcxaz89RQCzEMf2XGpl8cZKqmA2MDy1BnUH5QCDYsdBhroizySW6tjp%2FmX27J9JPNbvrOOpq0jER6syJ5rw%2B2ZPL3Y0cj8zy%2B%2BEIbH1DXRVe4Tqez%2Fw1G4oOG6gUaRiz%2BsJd5xnXbAXGfIXr6m%2B7gXSU8QxwG39MGlJXIKU31o49BhdG9Uy1z0XcacTB1297wZdRCWwejpSgBeAWBBdoTzzEg9x2L8Rj3alQHSdl%2FEd%2FHsw%2FWdIigIg1mbcHF5GzCZrF6c299iNLcj2K62BP91slBVcj1oY8jypo4sEzGWhu8PoaXI8i7ohirQypJJ%2Bbo1GCSymqowwvtGNxgY6pgEZzxSC2I7wL1EfREM7d0x4wsqHPSTJ%2Bu8BQeqL4whLATWZTAmJbnifelr9TDUb%2FM6pkcXyioRdZSKt8yNpqdc8q7nq6yq%2BW4SRNymsQfhNGoKVGi%2BoiALZgAUQgkCyDmZa5zotR1AdL1OXs%2FqIrnTzWfDHgT8sXmHYjzRAeAzflT6zmARIZYPLI8kPKn9X%2FGyYrwgSYDZHobhRYONtdUvVLubTG4Qy&X-Amz-Signature=8acd76846ec4eb04e1aa55e90e8ebbc58842caadd3ef80ac551a42877097b472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y76IVNFE%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfyNhXxQmKpHTZZi58BSRmA%2BetwHf4Cz1IAR2GpJrIXQIhALSQkLNbh1a0OvfiLTTeU9Q2en1YgzyEAxaUzLPpcoIoKv8DCCIQABoMNjM3NDIzMTgzODA1IgwbMFcbEdDS8Q%2BsucEq3AP8XFsKEr8ZocX9EXexdW2Yn74Z8KNfayGCOBXYCirrhReYy46pmsSMfnwQzkuVmuI884uK5IZdqC81SzlTZl62RPH3p0jLgJJHLrLaUbzeQA5IklUvP79pFF1WrNdTyrIRTRDL6vkAyuK0cf8fT3QBPvwp51BaESNc188drc0Oyj%2BV5pnC76kNfC%2BtcCFfilU9UHPjWHtphQLcMpKhaDV%2Fmw97KsYtLX0fBYuKwbkeNl1mxaCx1odisAoWlh%2BMgzNLPXFwjF0q5p1dIf4KPQ3OgV3AuSwhG5hW12b7GN%2BuUQugvXgMRENWwts4V1JzW0DmxcwSjgMxzlhqaoc%2B%2BqYH9u0C45AocY6G0r5YXQQrcPyhb4GT63xfweN6CxFXlQhJhf25nFNjy%2BLDxEJIT8ZpP3zRz3k64JvX8%2FmvzsgPobi2r5oxJ%2Fy%2BM5PLrbZ%2FDx6uNvNmoIFv%2FqfY7%2BwguFyCW5FQailjGuXNlqwezA9xRz6fOBfPtGMlKg4COdLl%2FXHUE3Q7OPbZU0jcqNj17caaLJ%2BuqXaGrGmFGbteKkjcXKGWa9BKkxCvEaFOWZeYf%2FZ7GBggZ08ljzXArPzqjNeP4RqFBW8kFI%2BIhF9GbjQev2D29Ac8fPS6uhD0HDCZ0Y3GBjqkAU8dLuPSK6ArvrBvXiA7Bd%2FUF%2F11BaHFN6iuayhDtrdfn%2BYmdtFTA6YLkvRvULdwH564IPdPegHn%2BXagZfmmd9M0rzTPWYumSONjgYpADkQCZwfFfXxsSpPnb0WoxozBSDZVjoHvR86%2FfKdKzr0l0nbDHCrZ1uqC4DyVuY1xIIhnFLJ8bEo1ne2SkO57FuHzZdQKAghDpg8qYb9E%2BIdzp4jku92g&X-Amz-Signature=c10632b568d49cd3073189cc80704e0625d215913c495563c131034bed786d9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTM7LI3%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGhusNeXyLcuWiJmtHSlj76YtZ7Lkw9mUSK6hjrXuR1AiAci8j89M2U3VkPTdCijQWKPT0NqOCAN2CQvImwpwlbOir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMQ6r1%2F4dbaaq51lsBKtwDSrkks1e5VDw39zlJgSH%2FFC988cdcUQ2vthSHEoRmicRv92R57%2FGeFrn0ms44mpUB3enn8LZWnUrA4XEbRaKC%2BoTqWjO6KSCrT%2BhgLup7349Gu%2FUrWD5yO5Xe8AuferzaBjs3W%2F39zFFxXt8DZO250iHm8D1xVSfi72yYVVW4W8J9vk5aj23W23hrk%2FQMq91nf4Y28XK4cOwl19dDfeu8bJcKIyjsksjcvquu5nlcXGkLjnTkQeMuNAjyj2ZfaDRElWTPzoSzMRp7Z6si8jrjrr1d2m98q4enlS%2BPx5Y7m8k4V63HELcxaz89RQCzEMf2XGpl8cZKqmA2MDy1BnUH5QCDYsdBhroizySW6tjp%2FmX27J9JPNbvrOOpq0jER6syJ5rw%2B2ZPL3Y0cj8zy%2B%2BEIbH1DXRVe4Tqez%2Fw1G4oOG6gUaRiz%2BsJd5xnXbAXGfIXr6m%2B7gXSU8QxwG39MGlJXIKU31o49BhdG9Uy1z0XcacTB1297wZdRCWwejpSgBeAWBBdoTzzEg9x2L8Rj3alQHSdl%2FEd%2FHsw%2FWdIigIg1mbcHF5GzCZrF6c299iNLcj2K62BP91slBVcj1oY8jypo4sEzGWhu8PoaXI8i7ohirQypJJ%2Bbo1GCSymqowwvtGNxgY6pgEZzxSC2I7wL1EfREM7d0x4wsqHPSTJ%2Bu8BQeqL4whLATWZTAmJbnifelr9TDUb%2FM6pkcXyioRdZSKt8yNpqdc8q7nq6yq%2BW4SRNymsQfhNGoKVGi%2BoiALZgAUQgkCyDmZa5zotR1AdL1OXs%2FqIrnTzWfDHgT8sXmHYjzRAeAzflT6zmARIZYPLI8kPKn9X%2FGyYrwgSYDZHobhRYONtdUvVLubTG4Qy&X-Amz-Signature=92e2187b16e43966e8a347f8cf429320af61adc96199bbaa7080196dc1e61828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNJT7GUO%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1v3Gw9PndWBgJfG0Tqhf9Chsld1YCb3Gvq8pD55nR%2BwIgXBycSdwUWWqyOYn5JtEwFUpZWoO6LS1Niaiv%2FITHgT8q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDIAQuMNc3cXnIlPa8ircA3lEBrlityZ0zcVl8bf1i6Bwr89G5nGP7%2FhoirwlzSB58rqQv%2FIFEwl7zHtyVz1aEvii4t4WVbbmTT1be9vvOT248lRrFmzoj6VDNVrlQkT6FWiudib2hzfqLxt%2Bn9G2p%2FarRXqml9J50uXS%2ByQrk5HTZmM1s8T9VVeCFOBLbX0CYtbIgMoV0AjsEBmVfolcF47NSiBh83ZWBZlkYw0ToPBXRZjTmc3FQ34nLPb8nJpl5PH%2BFM2rNdQAxcQ%2Bp6L8MEmeDb6epRPJP8PF%2FDKGPJu3Khbh3l%2FMn71CEDcCDA6JbW%2FKoTDA3rYMZM9RU6EinJkJYQyM6SgDJGTp4RG4zvyd4Ei5%2FSumvz2N2F5rIEjhDE%2BiS2ygWf3o2fn4ixBzM5%2FmpUPuXtHw8O0y7FpfTmq6myL1NVGaoHZdMJW8W7RoZD58smJE1UIxqjFxCMzEERFqQwHe4tHoezlBErCHEKQFhlPRT%2BvO23GqYeanzUmWAICQDswpt8U1xwd2H745FsCeAbh%2BFeAobOxr2J3G%2FSizXqmBo4XEgy3GepbftksPgfOWNdQReGyBFruhSqsCLUvHaDzTuSecGOxL8kGZ4Na4csgjJZgJdv6XiQ3MXey5fl9Zz%2FeIpCyxu7HHMJXRjcYGOqUBMS4fF3Vs8t%2FI9Q03Ko00IWk2Bz9iHVBXKLg4SMM%2B35yNwRcjChvDkPPN3NjTztRFbbGJTReQioTlIDyGMoO7%2FxYkgzek9cngX0z%2BG6suYCAUqw6PRraTRk%2Br%2FqHDY2D1gmdojjYLWXOybfO%2BBGp2GKkqyogGGQ%2FIfoPdt1RlfZBWOUdxVU3zG9sRaV3h681bzbb7bQmfS9gGHcWBAA1142xBps7t&X-Amz-Signature=ca05e6da00bc71942a327af39516c1ba977d3830c1e18b9c8524e2ec9afd98be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466274V2BYQ%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqD4h24kFdOiG94XS20ZaBJB0FU4EF5L6exSdfH3vHXwIhAMcLz23%2F3Igucru%2B5kMRA1F9mEhdKfwuRAnIReT%2FMbCmKv8DCCIQABoMNjM3NDIzMTgzODA1IgzxvGOpR41fx2DEw8sq3AO2QbHbkpCySgURND6ezFysbGjy%2FDiOD352kLbyKU5wbhFs%2Fzb9Ej7YFXecZxYTMOfezV7wvRkz7c5qsSSY5Q4q3GjhTiDQSFn6%2BO7Pq1MUc9S5yCv5HkQWT8fz2uSWildUyq0BHNC4eQGUouh9unx5AxzB3GjnGAdVp2pN58Z7RLb2HYVAZk1Mxpy9LuyvxhSbSCI3rOfbQRzExJkl7d8NT41RyQIburwQetk6c5rLcDA8ZY20RRLs5ADjdEWBA4ewjg3GRJaxsz3VfgwcLM5XjfZUNKIvNwEtIL8hT6hHoikUckJvwLVuf7gwGuU1xLdK3xQTCP5%2BBrz6uiLi7Xz4QzweMQgJaL3zXxgZPWz9WX%2FCLPqQnOy9PyS7WI6IX80kY7ADPLDnbCLDQJua5xW23lTflVTMovypB7YTc3Bwf16tpiFvwZ6MtQ3SSZpjYDdHzaolXknbVuCduTtMT%2B1PrRUdqIyiEAh%2BIlqDayhkDFFUDsS5CqSCgaQIuAhlOHmoqh%2BuHIXcG6PaH4lE2vt6PH7ctUwNahxrsd9itQhm6FeU3%2FHCmwfR0to%2F1UuFiE8t6YyqTZa2DigikOsPkbp0%2B%2FfvmSKlEgs%2F%2B63sQPVJ9%2B%2BG0gRUx9Gd0YEpnjCs0Y3GBjqkAazcIC7voodd89aCWi2h4IkWdlz%2Bv8I0QFcVM%2B6nFCL7Srqvyy2fI%2FBeCwkAx1skRLLBitFeuBEwvShXHMQZB%2BgUMbOjBOjUXV0HJ4ylYHbg44jkUjb6ZYH4oO9Za9JvZv44uPgMTqMlwJeJD%2Ft6JBpTBpW6Memf6rCKT%2BGOxkI87YVLfVBcQFpy%2BgZl4Qr5q6TqgVa3A6kYhWi2%2B28deRzSiIsB&X-Amz-Signature=c0d8954b894a595614c96e36592675399adc302bcf4e0ae507f108388e0f9a24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SQPKTW%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2MtSPCE%2F8F8Z5%2BD%2By3ltsPCxFSCfFLDUQuegzSM7kYgIhANIBU4amgPfQu%2Ftk%2BTC9zWzCuql0nALhgVdfBpvpA5n7Kv8DCCIQABoMNjM3NDIzMTgzODA1Igy1JvPI77v4o8XQtnoq3ANolscQ99AoHvGv7oFOhBK0DJt6Wto4JZsssqYoK3J7bUPfCmpeTA3Lp4EBG%2BRCbThh%2BhtX3l%2BurppARkFkcO0lx664FfO3yv4kUwA0eynTKkePGy4LxEtklXMRLr8ze9uOwCUN7zaFw1KYGvF2iQMzaBjAQ7oyC%2BCQkXHb2FAXhJCOpG2LN9atxlN5xXfBso08Xq2vYZ1wUxJ1AtHy7P3%2B4Im6Ptv%2BXGnikqYOO3CdcxJiE3j%2BVvsxaxLViOwTSePhaeikglcYq4aENM3CTHd6QVKsJtwENHqL269rOOI2f9Gka4ou0aRooejwJ7SeHOHHuBmhUWRZYySuG9H9pIBp5sgJRB6a8VORd6vIJSxeK347pkadJ%2F%2BpsUGYUkaJqWJYjoUHOlkBjEcNcUh1A0bNcSm6EpCZ%2BlGlEMXSvUb95OsjUGgiME0dDnXgF6pjNlhUNCS7Z%2F4aIHfUIsOJAPjexJCc7a3cA1RG%2BqJnAbRqVHF4%2FiQkLQWBcZFSzY752CZ4aP7EPYYVz16bS1oWdjldF%2BMkCurkWEbFUJZ9A%2B9Ncu3JK0e9%2FJtCRGzPGFF7rnVsfEt%2BUyxr1k%2FkITfppHGWdKZFwdl6PT6QkDm8UOZhNM%2BK1PIZgBU3GItRxDCs0Y3GBjqkAW3SsvnR6PhNVazykPebrWLC5jr9dFSyl3scwPaV%2FGaHenEwRCHYpJhCwpE3%2BGgfACgL6ULrMZczM2C3bijkIlhdHwocaLNkg8FRQ%2BWSxIbGFcVCwME40puEzBAOD582XWJ2aBntb2eSqw2yXYivVOHmjrzc5Ktd1TvoxQnO8SysA0vYlrXuMrKp1crdxWm9zGljUNmS1vtnzSRFwwwjKhdIjyqp&X-Amz-Signature=270a779d165bcf74610f5203877a7facd55f364f86059d96eb32dd714dcd0b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTM7LI3%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGhusNeXyLcuWiJmtHSlj76YtZ7Lkw9mUSK6hjrXuR1AiAci8j89M2U3VkPTdCijQWKPT0NqOCAN2CQvImwpwlbOir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMQ6r1%2F4dbaaq51lsBKtwDSrkks1e5VDw39zlJgSH%2FFC988cdcUQ2vthSHEoRmicRv92R57%2FGeFrn0ms44mpUB3enn8LZWnUrA4XEbRaKC%2BoTqWjO6KSCrT%2BhgLup7349Gu%2FUrWD5yO5Xe8AuferzaBjs3W%2F39zFFxXt8DZO250iHm8D1xVSfi72yYVVW4W8J9vk5aj23W23hrk%2FQMq91nf4Y28XK4cOwl19dDfeu8bJcKIyjsksjcvquu5nlcXGkLjnTkQeMuNAjyj2ZfaDRElWTPzoSzMRp7Z6si8jrjrr1d2m98q4enlS%2BPx5Y7m8k4V63HELcxaz89RQCzEMf2XGpl8cZKqmA2MDy1BnUH5QCDYsdBhroizySW6tjp%2FmX27J9JPNbvrOOpq0jER6syJ5rw%2B2ZPL3Y0cj8zy%2B%2BEIbH1DXRVe4Tqez%2Fw1G4oOG6gUaRiz%2BsJd5xnXbAXGfIXr6m%2B7gXSU8QxwG39MGlJXIKU31o49BhdG9Uy1z0XcacTB1297wZdRCWwejpSgBeAWBBdoTzzEg9x2L8Rj3alQHSdl%2FEd%2FHsw%2FWdIigIg1mbcHF5GzCZrF6c299iNLcj2K62BP91slBVcj1oY8jypo4sEzGWhu8PoaXI8i7ohirQypJJ%2Bbo1GCSymqowwvtGNxgY6pgEZzxSC2I7wL1EfREM7d0x4wsqHPSTJ%2Bu8BQeqL4whLATWZTAmJbnifelr9TDUb%2FM6pkcXyioRdZSKt8yNpqdc8q7nq6yq%2BW4SRNymsQfhNGoKVGi%2BoiALZgAUQgkCyDmZa5zotR1AdL1OXs%2FqIrnTzWfDHgT8sXmHYjzRAeAzflT6zmARIZYPLI8kPKn9X%2FGyYrwgSYDZHobhRYONtdUvVLubTG4Qy&X-Amz-Signature=d00fe15ec083a02fdccf92d458349ae938c01f57674443a446bf18c8897048db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTM7LI3%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGhusNeXyLcuWiJmtHSlj76YtZ7Lkw9mUSK6hjrXuR1AiAci8j89M2U3VkPTdCijQWKPT0NqOCAN2CQvImwpwlbOir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMQ6r1%2F4dbaaq51lsBKtwDSrkks1e5VDw39zlJgSH%2FFC988cdcUQ2vthSHEoRmicRv92R57%2FGeFrn0ms44mpUB3enn8LZWnUrA4XEbRaKC%2BoTqWjO6KSCrT%2BhgLup7349Gu%2FUrWD5yO5Xe8AuferzaBjs3W%2F39zFFxXt8DZO250iHm8D1xVSfi72yYVVW4W8J9vk5aj23W23hrk%2FQMq91nf4Y28XK4cOwl19dDfeu8bJcKIyjsksjcvquu5nlcXGkLjnTkQeMuNAjyj2ZfaDRElWTPzoSzMRp7Z6si8jrjrr1d2m98q4enlS%2BPx5Y7m8k4V63HELcxaz89RQCzEMf2XGpl8cZKqmA2MDy1BnUH5QCDYsdBhroizySW6tjp%2FmX27J9JPNbvrOOpq0jER6syJ5rw%2B2ZPL3Y0cj8zy%2B%2BEIbH1DXRVe4Tqez%2Fw1G4oOG6gUaRiz%2BsJd5xnXbAXGfIXr6m%2B7gXSU8QxwG39MGlJXIKU31o49BhdG9Uy1z0XcacTB1297wZdRCWwejpSgBeAWBBdoTzzEg9x2L8Rj3alQHSdl%2FEd%2FHsw%2FWdIigIg1mbcHF5GzCZrF6c299iNLcj2K62BP91slBVcj1oY8jypo4sEzGWhu8PoaXI8i7ohirQypJJ%2Bbo1GCSymqowwvtGNxgY6pgEZzxSC2I7wL1EfREM7d0x4wsqHPSTJ%2Bu8BQeqL4whLATWZTAmJbnifelr9TDUb%2FM6pkcXyioRdZSKt8yNpqdc8q7nq6yq%2BW4SRNymsQfhNGoKVGi%2BoiALZgAUQgkCyDmZa5zotR1AdL1OXs%2FqIrnTzWfDHgT8sXmHYjzRAeAzflT6zmARIZYPLI8kPKn9X%2FGyYrwgSYDZHobhRYONtdUvVLubTG4Qy&X-Amz-Signature=b9b5e1823f9a37f113ca680ba075e90a6851c2fe958bf65faee0e2a5b0b29869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674J4FG5W%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHT360mpj%2BEwDaWmMNbN6vvI0T1JtIOtO5SDijtkTGOAiEA3S7hBdbx%2BoimhTWcjEsz820d%2BER37lNBqO2cj6RrfNUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDNtU%2Fcy4upzEHHI56yrcAwwiaCoZLgKU7JRtAUE4WgDJAoQpRXNPmIleohx61VfDuCyBif2oNT7jrGMraBu2ZfeEBFJSbBi4o6goJi%2F65D%2F95srQjLAsRUWO87IW%2FJT0sBY%2BRVvja0RuuFuns%2FTfz0GbfGEU%2BrAX8QNSlAVAznXoKTXim%2BaIpj13xiE23pLsOnXlXht05SWEI4HxmoPuVbnK900i1PDYJnnKHuR4mpMg7QmjMTzPpnc%2FpiEhD3O5g%2B7GqZeeK%2BfY47kL2HnifhhSXcyWRvF%2B4SA%2FA2fE%2BqBkwrRqyNAA9sMft9MsUhvNKNLcwLQlZ6CrVq4QOYVRC2NYrmXQ8uVWsZFGidMKB3RYLlRViOTGwCZmKYJ3vH0wUENqwVmo4Nwyn5bqAhwH1wEeOURKd2A1hfjS50d3Ek5umtJ47rVBgQWIX9aKg0FANXsCCXsbou7Q2vvBt8nhgq64CSm3RNv%2FauRoyiITmQSBkf1M9D%2FxUtN%2BCWhb28%2B06nM9izUwJvH7mGm79xB83bXUuBI2tmDcWQlzBo%2BbCOrNGPRYkY4%2FRoMEPlRpc9mto%2FscdU8gleDgoBdcYdzHPm5dUukttdv8GQhALscmQq1fo7w7jKe8ptcmLusTTLI0R4QXwWpGAGPQkkumML7QjcYGOqUB0wwm64NHH8To5%2BVB8RD%2B3Q%2BfV%2Bxf3F1y3vBfnHSbgnqolPKUZCWZOwqRq%2FbI%2F6GqBtl4Qo5EHWVaUcgPASqplYTzV8P1m5TidgUuYtZ%2FLbEpfypqzz1QnzvXIOuPqc9UanG1iP3gwb%2BV%2BrBCpsp53vrGV01eBps7iFfxNeQIFA3%2FW8YbaQIoSiAX7wa87urch0O99r4UH7JMsazut0W3PzpqOP%2Fw&X-Amz-Signature=09d0a56433e5bd83de264c1da0dcaf9ad35a78b5d8449dbc0eaffb1087e909dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674J4FG5W%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHT360mpj%2BEwDaWmMNbN6vvI0T1JtIOtO5SDijtkTGOAiEA3S7hBdbx%2BoimhTWcjEsz820d%2BER37lNBqO2cj6RrfNUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDNtU%2Fcy4upzEHHI56yrcAwwiaCoZLgKU7JRtAUE4WgDJAoQpRXNPmIleohx61VfDuCyBif2oNT7jrGMraBu2ZfeEBFJSbBi4o6goJi%2F65D%2F95srQjLAsRUWO87IW%2FJT0sBY%2BRVvja0RuuFuns%2FTfz0GbfGEU%2BrAX8QNSlAVAznXoKTXim%2BaIpj13xiE23pLsOnXlXht05SWEI4HxmoPuVbnK900i1PDYJnnKHuR4mpMg7QmjMTzPpnc%2FpiEhD3O5g%2B7GqZeeK%2BfY47kL2HnifhhSXcyWRvF%2B4SA%2FA2fE%2BqBkwrRqyNAA9sMft9MsUhvNKNLcwLQlZ6CrVq4QOYVRC2NYrmXQ8uVWsZFGidMKB3RYLlRViOTGwCZmKYJ3vH0wUENqwVmo4Nwyn5bqAhwH1wEeOURKd2A1hfjS50d3Ek5umtJ47rVBgQWIX9aKg0FANXsCCXsbou7Q2vvBt8nhgq64CSm3RNv%2FauRoyiITmQSBkf1M9D%2FxUtN%2BCWhb28%2B06nM9izUwJvH7mGm79xB83bXUuBI2tmDcWQlzBo%2BbCOrNGPRYkY4%2FRoMEPlRpc9mto%2FscdU8gleDgoBdcYdzHPm5dUukttdv8GQhALscmQq1fo7w7jKe8ptcmLusTTLI0R4QXwWpGAGPQkkumML7QjcYGOqUB0wwm64NHH8To5%2BVB8RD%2B3Q%2BfV%2Bxf3F1y3vBfnHSbgnqolPKUZCWZOwqRq%2FbI%2F6GqBtl4Qo5EHWVaUcgPASqplYTzV8P1m5TidgUuYtZ%2FLbEpfypqzz1QnzvXIOuPqc9UanG1iP3gwb%2BV%2BrBCpsp53vrGV01eBps7iFfxNeQIFA3%2FW8YbaQIoSiAX7wa87urch0O99r4UH7JMsazut0W3PzpqOP%2Fw&X-Amz-Signature=edcd472a662efd04bf7af4e89410a55a94ad956032544d613f896be7131f4a2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674J4FG5W%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHT360mpj%2BEwDaWmMNbN6vvI0T1JtIOtO5SDijtkTGOAiEA3S7hBdbx%2BoimhTWcjEsz820d%2BER37lNBqO2cj6RrfNUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDNtU%2Fcy4upzEHHI56yrcAwwiaCoZLgKU7JRtAUE4WgDJAoQpRXNPmIleohx61VfDuCyBif2oNT7jrGMraBu2ZfeEBFJSbBi4o6goJi%2F65D%2F95srQjLAsRUWO87IW%2FJT0sBY%2BRVvja0RuuFuns%2FTfz0GbfGEU%2BrAX8QNSlAVAznXoKTXim%2BaIpj13xiE23pLsOnXlXht05SWEI4HxmoPuVbnK900i1PDYJnnKHuR4mpMg7QmjMTzPpnc%2FpiEhD3O5g%2B7GqZeeK%2BfY47kL2HnifhhSXcyWRvF%2B4SA%2FA2fE%2BqBkwrRqyNAA9sMft9MsUhvNKNLcwLQlZ6CrVq4QOYVRC2NYrmXQ8uVWsZFGidMKB3RYLlRViOTGwCZmKYJ3vH0wUENqwVmo4Nwyn5bqAhwH1wEeOURKd2A1hfjS50d3Ek5umtJ47rVBgQWIX9aKg0FANXsCCXsbou7Q2vvBt8nhgq64CSm3RNv%2FauRoyiITmQSBkf1M9D%2FxUtN%2BCWhb28%2B06nM9izUwJvH7mGm79xB83bXUuBI2tmDcWQlzBo%2BbCOrNGPRYkY4%2FRoMEPlRpc9mto%2FscdU8gleDgoBdcYdzHPm5dUukttdv8GQhALscmQq1fo7w7jKe8ptcmLusTTLI0R4QXwWpGAGPQkkumML7QjcYGOqUB0wwm64NHH8To5%2BVB8RD%2B3Q%2BfV%2Bxf3F1y3vBfnHSbgnqolPKUZCWZOwqRq%2FbI%2F6GqBtl4Qo5EHWVaUcgPASqplYTzV8P1m5TidgUuYtZ%2FLbEpfypqzz1QnzvXIOuPqc9UanG1iP3gwb%2BV%2BrBCpsp53vrGV01eBps7iFfxNeQIFA3%2FW8YbaQIoSiAX7wa87urch0O99r4UH7JMsazut0W3PzpqOP%2Fw&X-Amz-Signature=c4079b2ac098b69a35e69169fb939e8fd499d76545b2555eae38e9b3d096f528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674J4FG5W%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHT360mpj%2BEwDaWmMNbN6vvI0T1JtIOtO5SDijtkTGOAiEA3S7hBdbx%2BoimhTWcjEsz820d%2BER37lNBqO2cj6RrfNUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDNtU%2Fcy4upzEHHI56yrcAwwiaCoZLgKU7JRtAUE4WgDJAoQpRXNPmIleohx61VfDuCyBif2oNT7jrGMraBu2ZfeEBFJSbBi4o6goJi%2F65D%2F95srQjLAsRUWO87IW%2FJT0sBY%2BRVvja0RuuFuns%2FTfz0GbfGEU%2BrAX8QNSlAVAznXoKTXim%2BaIpj13xiE23pLsOnXlXht05SWEI4HxmoPuVbnK900i1PDYJnnKHuR4mpMg7QmjMTzPpnc%2FpiEhD3O5g%2B7GqZeeK%2BfY47kL2HnifhhSXcyWRvF%2B4SA%2FA2fE%2BqBkwrRqyNAA9sMft9MsUhvNKNLcwLQlZ6CrVq4QOYVRC2NYrmXQ8uVWsZFGidMKB3RYLlRViOTGwCZmKYJ3vH0wUENqwVmo4Nwyn5bqAhwH1wEeOURKd2A1hfjS50d3Ek5umtJ47rVBgQWIX9aKg0FANXsCCXsbou7Q2vvBt8nhgq64CSm3RNv%2FauRoyiITmQSBkf1M9D%2FxUtN%2BCWhb28%2B06nM9izUwJvH7mGm79xB83bXUuBI2tmDcWQlzBo%2BbCOrNGPRYkY4%2FRoMEPlRpc9mto%2FscdU8gleDgoBdcYdzHPm5dUukttdv8GQhALscmQq1fo7w7jKe8ptcmLusTTLI0R4QXwWpGAGPQkkumML7QjcYGOqUB0wwm64NHH8To5%2BVB8RD%2B3Q%2BfV%2Bxf3F1y3vBfnHSbgnqolPKUZCWZOwqRq%2FbI%2F6GqBtl4Qo5EHWVaUcgPASqplYTzV8P1m5TidgUuYtZ%2FLbEpfypqzz1QnzvXIOuPqc9UanG1iP3gwb%2BV%2BrBCpsp53vrGV01eBps7iFfxNeQIFA3%2FW8YbaQIoSiAX7wa87urch0O99r4UH7JMsazut0W3PzpqOP%2Fw&X-Amz-Signature=e3038b3faa329b716d423e954179595ac95d83119785b45cdb3ec70816ba8cd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFQVIJAF%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZJHirlz08QU%2BeV368z6O0v1sw1uWcklCcIHKIweAm%2BAiEA4jddQnJ5mPmyPNwp9hE7yJBUHY5eE1AzFrT8IRqCorYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAt8LF5UZ5vSXZ4PDSrcA4eBJiv%2BJvk0Zw2rtYFE%2B%2FfkYeQlBKzpurgY2nyPuf7OEQdXOHHegeBCBhGSHk7t79bgE7wHg8v1W2E9sKlpSsskwstLuce%2Bce8qAoDapAIOtcnRfAt4kZXfRRgYIEjNCZZOHU6jy9UsCGP9KW%2F769yMBEPGtfJ9R185O%2BIoxKAmLMyNYvrrIR6C5fxTZ0GGwvnGhQUub5bR%2FRD2GUJ40V0r8rpYxQZ%2BRWnzH6Bh8gy19Jus8VrqaxcgVP%2BgrTExtkh%2Fj0lm40N6OgxpqrwrmgLM4uZ7b7ECP5HbUPIMtbuI8efw2uL%2BfdFFXCXkNoeU7Q8NpuWEwCvXVW6Cqv25IcAwMzGiNBJ4jcAS4ZzgslrF5mUYvz09XNG4hv2cxqdDXeNW2KYXG2iaL5U5NG46g2%2BhYFWpl7BzrLKd1cKD3vRxUMqo0e6xTxZDVs7QeybyZENCBP1hOcOuP%2FvNbwlwOHDkpIvrhHyRo7A8x4Lycb3L%2Fm0dvS%2Fx6EXsMVV%2FHXCM%2FQIwkmlIVQPPn5zazH0SK6fGPjZ6FzE0NHj3VOkfL60svSGnQvDhxOXYuL0jO9SwUr4bbqxSmrFnPBx0tMiIYKZ4tKbZ9ax7Qgn3DPAaRTzTRjHYz6s2p5wHi0sJML%2FRjcYGOqUB%2B1SwagUxac%2BORVIExtlhapnPUALRKz4zDYxADimjbIwNR5Zck2dfl5C3PebWJHR1MxAuY81Tr9tMrj%2FX99drbP15u%2BmKmZJokgeaWEAaz7Ao2aGDDv1vcOX5uBCJxWcYzukwPptZeOLw%2BvLGp1tMNWM72esqcHJDyvWdcRTo3C42UH1mspOhj3J6UFfKcE%2FFvwKfwjYjOvcIgtSjS7X0zONE65iC&X-Amz-Signature=a43438f1272e22ef02585874b1a63979cc97de6d33577da88906745fc5225926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674J4FG5W%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHT360mpj%2BEwDaWmMNbN6vvI0T1JtIOtO5SDijtkTGOAiEA3S7hBdbx%2BoimhTWcjEsz820d%2BER37lNBqO2cj6RrfNUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDNtU%2Fcy4upzEHHI56yrcAwwiaCoZLgKU7JRtAUE4WgDJAoQpRXNPmIleohx61VfDuCyBif2oNT7jrGMraBu2ZfeEBFJSbBi4o6goJi%2F65D%2F95srQjLAsRUWO87IW%2FJT0sBY%2BRVvja0RuuFuns%2FTfz0GbfGEU%2BrAX8QNSlAVAznXoKTXim%2BaIpj13xiE23pLsOnXlXht05SWEI4HxmoPuVbnK900i1PDYJnnKHuR4mpMg7QmjMTzPpnc%2FpiEhD3O5g%2B7GqZeeK%2BfY47kL2HnifhhSXcyWRvF%2B4SA%2FA2fE%2BqBkwrRqyNAA9sMft9MsUhvNKNLcwLQlZ6CrVq4QOYVRC2NYrmXQ8uVWsZFGidMKB3RYLlRViOTGwCZmKYJ3vH0wUENqwVmo4Nwyn5bqAhwH1wEeOURKd2A1hfjS50d3Ek5umtJ47rVBgQWIX9aKg0FANXsCCXsbou7Q2vvBt8nhgq64CSm3RNv%2FauRoyiITmQSBkf1M9D%2FxUtN%2BCWhb28%2B06nM9izUwJvH7mGm79xB83bXUuBI2tmDcWQlzBo%2BbCOrNGPRYkY4%2FRoMEPlRpc9mto%2FscdU8gleDgoBdcYdzHPm5dUukttdv8GQhALscmQq1fo7w7jKe8ptcmLusTTLI0R4QXwWpGAGPQkkumML7QjcYGOqUB0wwm64NHH8To5%2BVB8RD%2B3Q%2BfV%2Bxf3F1y3vBfnHSbgnqolPKUZCWZOwqRq%2FbI%2F6GqBtl4Qo5EHWVaUcgPASqplYTzV8P1m5TidgUuYtZ%2FLbEpfypqzz1QnzvXIOuPqc9UanG1iP3gwb%2BV%2BrBCpsp53vrGV01eBps7iFfxNeQIFA3%2FW8YbaQIoSiAX7wa87urch0O99r4UH7JMsazut0W3PzpqOP%2Fw&X-Amz-Signature=db1d1e732cbf97ef32a3e3766494e3860a880ca893b78a86bbec349ffdc329ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674J4FG5W%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHT360mpj%2BEwDaWmMNbN6vvI0T1JtIOtO5SDijtkTGOAiEA3S7hBdbx%2BoimhTWcjEsz820d%2BER37lNBqO2cj6RrfNUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDNtU%2Fcy4upzEHHI56yrcAwwiaCoZLgKU7JRtAUE4WgDJAoQpRXNPmIleohx61VfDuCyBif2oNT7jrGMraBu2ZfeEBFJSbBi4o6goJi%2F65D%2F95srQjLAsRUWO87IW%2FJT0sBY%2BRVvja0RuuFuns%2FTfz0GbfGEU%2BrAX8QNSlAVAznXoKTXim%2BaIpj13xiE23pLsOnXlXht05SWEI4HxmoPuVbnK900i1PDYJnnKHuR4mpMg7QmjMTzPpnc%2FpiEhD3O5g%2B7GqZeeK%2BfY47kL2HnifhhSXcyWRvF%2B4SA%2FA2fE%2BqBkwrRqyNAA9sMft9MsUhvNKNLcwLQlZ6CrVq4QOYVRC2NYrmXQ8uVWsZFGidMKB3RYLlRViOTGwCZmKYJ3vH0wUENqwVmo4Nwyn5bqAhwH1wEeOURKd2A1hfjS50d3Ek5umtJ47rVBgQWIX9aKg0FANXsCCXsbou7Q2vvBt8nhgq64CSm3RNv%2FauRoyiITmQSBkf1M9D%2FxUtN%2BCWhb28%2B06nM9izUwJvH7mGm79xB83bXUuBI2tmDcWQlzBo%2BbCOrNGPRYkY4%2FRoMEPlRpc9mto%2FscdU8gleDgoBdcYdzHPm5dUukttdv8GQhALscmQq1fo7w7jKe8ptcmLusTTLI0R4QXwWpGAGPQkkumML7QjcYGOqUB0wwm64NHH8To5%2BVB8RD%2B3Q%2BfV%2Bxf3F1y3vBfnHSbgnqolPKUZCWZOwqRq%2FbI%2F6GqBtl4Qo5EHWVaUcgPASqplYTzV8P1m5TidgUuYtZ%2FLbEpfypqzz1QnzvXIOuPqc9UanG1iP3gwb%2BV%2BrBCpsp53vrGV01eBps7iFfxNeQIFA3%2FW8YbaQIoSiAX7wa87urch0O99r4UH7JMsazut0W3PzpqOP%2Fw&X-Amz-Signature=87f9cc1b7ac6bb9bf400e09e39fbefd02d9ac92241734dde3e02a7bdf02052a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674J4FG5W%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHT360mpj%2BEwDaWmMNbN6vvI0T1JtIOtO5SDijtkTGOAiEA3S7hBdbx%2BoimhTWcjEsz820d%2BER37lNBqO2cj6RrfNUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDNtU%2Fcy4upzEHHI56yrcAwwiaCoZLgKU7JRtAUE4WgDJAoQpRXNPmIleohx61VfDuCyBif2oNT7jrGMraBu2ZfeEBFJSbBi4o6goJi%2F65D%2F95srQjLAsRUWO87IW%2FJT0sBY%2BRVvja0RuuFuns%2FTfz0GbfGEU%2BrAX8QNSlAVAznXoKTXim%2BaIpj13xiE23pLsOnXlXht05SWEI4HxmoPuVbnK900i1PDYJnnKHuR4mpMg7QmjMTzPpnc%2FpiEhD3O5g%2B7GqZeeK%2BfY47kL2HnifhhSXcyWRvF%2B4SA%2FA2fE%2BqBkwrRqyNAA9sMft9MsUhvNKNLcwLQlZ6CrVq4QOYVRC2NYrmXQ8uVWsZFGidMKB3RYLlRViOTGwCZmKYJ3vH0wUENqwVmo4Nwyn5bqAhwH1wEeOURKd2A1hfjS50d3Ek5umtJ47rVBgQWIX9aKg0FANXsCCXsbou7Q2vvBt8nhgq64CSm3RNv%2FauRoyiITmQSBkf1M9D%2FxUtN%2BCWhb28%2B06nM9izUwJvH7mGm79xB83bXUuBI2tmDcWQlzBo%2BbCOrNGPRYkY4%2FRoMEPlRpc9mto%2FscdU8gleDgoBdcYdzHPm5dUukttdv8GQhALscmQq1fo7w7jKe8ptcmLusTTLI0R4QXwWpGAGPQkkumML7QjcYGOqUB0wwm64NHH8To5%2BVB8RD%2B3Q%2BfV%2Bxf3F1y3vBfnHSbgnqolPKUZCWZOwqRq%2FbI%2F6GqBtl4Qo5EHWVaUcgPASqplYTzV8P1m5TidgUuYtZ%2FLbEpfypqzz1QnzvXIOuPqc9UanG1iP3gwb%2BV%2BrBCpsp53vrGV01eBps7iFfxNeQIFA3%2FW8YbaQIoSiAX7wa87urch0O99r4UH7JMsazut0W3PzpqOP%2Fw&X-Amz-Signature=c4079b2ac098b69a35e69169fb939e8fd499d76545b2555eae38e9b3d096f528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674J4FG5W%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHT360mpj%2BEwDaWmMNbN6vvI0T1JtIOtO5SDijtkTGOAiEA3S7hBdbx%2BoimhTWcjEsz820d%2BER37lNBqO2cj6RrfNUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDNtU%2Fcy4upzEHHI56yrcAwwiaCoZLgKU7JRtAUE4WgDJAoQpRXNPmIleohx61VfDuCyBif2oNT7jrGMraBu2ZfeEBFJSbBi4o6goJi%2F65D%2F95srQjLAsRUWO87IW%2FJT0sBY%2BRVvja0RuuFuns%2FTfz0GbfGEU%2BrAX8QNSlAVAznXoKTXim%2BaIpj13xiE23pLsOnXlXht05SWEI4HxmoPuVbnK900i1PDYJnnKHuR4mpMg7QmjMTzPpnc%2FpiEhD3O5g%2B7GqZeeK%2BfY47kL2HnifhhSXcyWRvF%2B4SA%2FA2fE%2BqBkwrRqyNAA9sMft9MsUhvNKNLcwLQlZ6CrVq4QOYVRC2NYrmXQ8uVWsZFGidMKB3RYLlRViOTGwCZmKYJ3vH0wUENqwVmo4Nwyn5bqAhwH1wEeOURKd2A1hfjS50d3Ek5umtJ47rVBgQWIX9aKg0FANXsCCXsbou7Q2vvBt8nhgq64CSm3RNv%2FauRoyiITmQSBkf1M9D%2FxUtN%2BCWhb28%2B06nM9izUwJvH7mGm79xB83bXUuBI2tmDcWQlzBo%2BbCOrNGPRYkY4%2FRoMEPlRpc9mto%2FscdU8gleDgoBdcYdzHPm5dUukttdv8GQhALscmQq1fo7w7jKe8ptcmLusTTLI0R4QXwWpGAGPQkkumML7QjcYGOqUB0wwm64NHH8To5%2BVB8RD%2B3Q%2BfV%2Bxf3F1y3vBfnHSbgnqolPKUZCWZOwqRq%2FbI%2F6GqBtl4Qo5EHWVaUcgPASqplYTzV8P1m5TidgUuYtZ%2FLbEpfypqzz1QnzvXIOuPqc9UanG1iP3gwb%2BV%2BrBCpsp53vrGV01eBps7iFfxNeQIFA3%2FW8YbaQIoSiAX7wa87urch0O99r4UH7JMsazut0W3PzpqOP%2Fw&X-Amz-Signature=16add10228b91ceb5a7a8069f01ea0f1ae616c71bf7368e0f4ba913eafa0e6e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674J4FG5W%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHT360mpj%2BEwDaWmMNbN6vvI0T1JtIOtO5SDijtkTGOAiEA3S7hBdbx%2BoimhTWcjEsz820d%2BER37lNBqO2cj6RrfNUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDNtU%2Fcy4upzEHHI56yrcAwwiaCoZLgKU7JRtAUE4WgDJAoQpRXNPmIleohx61VfDuCyBif2oNT7jrGMraBu2ZfeEBFJSbBi4o6goJi%2F65D%2F95srQjLAsRUWO87IW%2FJT0sBY%2BRVvja0RuuFuns%2FTfz0GbfGEU%2BrAX8QNSlAVAznXoKTXim%2BaIpj13xiE23pLsOnXlXht05SWEI4HxmoPuVbnK900i1PDYJnnKHuR4mpMg7QmjMTzPpnc%2FpiEhD3O5g%2B7GqZeeK%2BfY47kL2HnifhhSXcyWRvF%2B4SA%2FA2fE%2BqBkwrRqyNAA9sMft9MsUhvNKNLcwLQlZ6CrVq4QOYVRC2NYrmXQ8uVWsZFGidMKB3RYLlRViOTGwCZmKYJ3vH0wUENqwVmo4Nwyn5bqAhwH1wEeOURKd2A1hfjS50d3Ek5umtJ47rVBgQWIX9aKg0FANXsCCXsbou7Q2vvBt8nhgq64CSm3RNv%2FauRoyiITmQSBkf1M9D%2FxUtN%2BCWhb28%2B06nM9izUwJvH7mGm79xB83bXUuBI2tmDcWQlzBo%2BbCOrNGPRYkY4%2FRoMEPlRpc9mto%2FscdU8gleDgoBdcYdzHPm5dUukttdv8GQhALscmQq1fo7w7jKe8ptcmLusTTLI0R4QXwWpGAGPQkkumML7QjcYGOqUB0wwm64NHH8To5%2BVB8RD%2B3Q%2BfV%2Bxf3F1y3vBfnHSbgnqolPKUZCWZOwqRq%2FbI%2F6GqBtl4Qo5EHWVaUcgPASqplYTzV8P1m5TidgUuYtZ%2FLbEpfypqzz1QnzvXIOuPqc9UanG1iP3gwb%2BV%2BrBCpsp53vrGV01eBps7iFfxNeQIFA3%2FW8YbaQIoSiAX7wa87urch0O99r4UH7JMsazut0W3PzpqOP%2Fw&X-Amz-Signature=f38c9a9cb74240ccdaf255005568fd45a3b4e711429e648180a1f22c19b0c251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674J4FG5W%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHT360mpj%2BEwDaWmMNbN6vvI0T1JtIOtO5SDijtkTGOAiEA3S7hBdbx%2BoimhTWcjEsz820d%2BER37lNBqO2cj6RrfNUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDNtU%2Fcy4upzEHHI56yrcAwwiaCoZLgKU7JRtAUE4WgDJAoQpRXNPmIleohx61VfDuCyBif2oNT7jrGMraBu2ZfeEBFJSbBi4o6goJi%2F65D%2F95srQjLAsRUWO87IW%2FJT0sBY%2BRVvja0RuuFuns%2FTfz0GbfGEU%2BrAX8QNSlAVAznXoKTXim%2BaIpj13xiE23pLsOnXlXht05SWEI4HxmoPuVbnK900i1PDYJnnKHuR4mpMg7QmjMTzPpnc%2FpiEhD3O5g%2B7GqZeeK%2BfY47kL2HnifhhSXcyWRvF%2B4SA%2FA2fE%2BqBkwrRqyNAA9sMft9MsUhvNKNLcwLQlZ6CrVq4QOYVRC2NYrmXQ8uVWsZFGidMKB3RYLlRViOTGwCZmKYJ3vH0wUENqwVmo4Nwyn5bqAhwH1wEeOURKd2A1hfjS50d3Ek5umtJ47rVBgQWIX9aKg0FANXsCCXsbou7Q2vvBt8nhgq64CSm3RNv%2FauRoyiITmQSBkf1M9D%2FxUtN%2BCWhb28%2B06nM9izUwJvH7mGm79xB83bXUuBI2tmDcWQlzBo%2BbCOrNGPRYkY4%2FRoMEPlRpc9mto%2FscdU8gleDgoBdcYdzHPm5dUukttdv8GQhALscmQq1fo7w7jKe8ptcmLusTTLI0R4QXwWpGAGPQkkumML7QjcYGOqUB0wwm64NHH8To5%2BVB8RD%2B3Q%2BfV%2Bxf3F1y3vBfnHSbgnqolPKUZCWZOwqRq%2FbI%2F6GqBtl4Qo5EHWVaUcgPASqplYTzV8P1m5TidgUuYtZ%2FLbEpfypqzz1QnzvXIOuPqc9UanG1iP3gwb%2BV%2BrBCpsp53vrGV01eBps7iFfxNeQIFA3%2FW8YbaQIoSiAX7wa87urch0O99r4UH7JMsazut0W3PzpqOP%2Fw&X-Amz-Signature=22d62dc96da85a3fa2743a71409e4e1884cd84fb4af86d2077d0fee15a00edcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


