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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXTQK2Y%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAC78WaMU4lakx%2FN0DSAvSiKSpEJ7wAdGnxZfp4AzboiAiA4aoXIsEJjIWoP5U9h0VTNZLvQKuWJYAg%2FLSsdvRBoDSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCa6e41uNNTBHjcxAKtwDtP2UU024uynu%2Fx%2FGTSxsW9xe5PvJCpvaHYDfwVZbnpSpYN2uOkztcRZ%2B96miVPvowgeEPXy9WuT%2FzaIuVYHgqN0Njd5BVlszjk0XRBpkCJZdIDxUYVK0X4UMLfLKf0%2FY8CG0PdR%2F7mzuex0ZF5x72jZd%2FMAVD45m9EewkufZP%2FW9qdxgGnkKIajS5kfQLn8iMDLBXcK%2FvwChWWt2QXmblCtuHvjR90xdqK0K1b3tIW9c9cUhHQlJkntdR6kAWrqNCfUcmnmEuQllqEMSn2TD0VXqQC12v7uCLDCU4sZymeH0WRl9Gk67UzMFtIzzF%2Bp%2B5Uw19Wdbz53G5qJxxBn37WJsXofyAkzK6PUMCQqgIN7aKLx5kvzw6NKKF5VD7DKmjpfoNE42s5H0JyYVLLwlq5uz10GHS%2BtKbbYt8TF9aH5QGLVLaJ6opMpbMZf7GjYo16oQxLpta9gK4l1WWNK%2BYmYhufVY5KdaA%2B6hRdMPpP5fhX7fRJmH%2B%2B9AFjBRPZSQzg7PzXpOnHjqfH0otsDs%2FGXpmhLy3hADeGdPta7nhsyrCVjGvFAxT3Rw3M00BJ5TEsBQh3x%2FcH9r5DbDjlKNnygC5SbzXjUUgrV2l9vDViBTuEluYPwdYgDG2wwww8PiyQY6pgH%2Fa%2BNo84QX3eejp7EUe%2FbealT3p0FtHJVkqLvGilcEsIOwXDVK6BzJM9HAxpZSC212lS2Kf%2F1FrOwKwi%2B6mRH1nVM2UgigVjuXtQSZ%2FTOQUgNJT3lLYWJUqiNhRu4jsyjEX6v9ZkaFZ1SzlLmhr6IoRkEGkdGL%2FfJ%2BNSAG5DikKKsnBmCYdIUfF%2F2W2uerI1FLedjocwB0aHBQhE1Pmjouaj0roSuH&X-Amz-Signature=e26d3d493c4702083d2ea7fb7e78fb125519bec4a75aedafbca0b7f436fb6f75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXTQK2Y%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAC78WaMU4lakx%2FN0DSAvSiKSpEJ7wAdGnxZfp4AzboiAiA4aoXIsEJjIWoP5U9h0VTNZLvQKuWJYAg%2FLSsdvRBoDSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCa6e41uNNTBHjcxAKtwDtP2UU024uynu%2Fx%2FGTSxsW9xe5PvJCpvaHYDfwVZbnpSpYN2uOkztcRZ%2B96miVPvowgeEPXy9WuT%2FzaIuVYHgqN0Njd5BVlszjk0XRBpkCJZdIDxUYVK0X4UMLfLKf0%2FY8CG0PdR%2F7mzuex0ZF5x72jZd%2FMAVD45m9EewkufZP%2FW9qdxgGnkKIajS5kfQLn8iMDLBXcK%2FvwChWWt2QXmblCtuHvjR90xdqK0K1b3tIW9c9cUhHQlJkntdR6kAWrqNCfUcmnmEuQllqEMSn2TD0VXqQC12v7uCLDCU4sZymeH0WRl9Gk67UzMFtIzzF%2Bp%2B5Uw19Wdbz53G5qJxxBn37WJsXofyAkzK6PUMCQqgIN7aKLx5kvzw6NKKF5VD7DKmjpfoNE42s5H0JyYVLLwlq5uz10GHS%2BtKbbYt8TF9aH5QGLVLaJ6opMpbMZf7GjYo16oQxLpta9gK4l1WWNK%2BYmYhufVY5KdaA%2B6hRdMPpP5fhX7fRJmH%2B%2B9AFjBRPZSQzg7PzXpOnHjqfH0otsDs%2FGXpmhLy3hADeGdPta7nhsyrCVjGvFAxT3Rw3M00BJ5TEsBQh3x%2FcH9r5DbDjlKNnygC5SbzXjUUgrV2l9vDViBTuEluYPwdYgDG2wwww8PiyQY6pgH%2Fa%2BNo84QX3eejp7EUe%2FbealT3p0FtHJVkqLvGilcEsIOwXDVK6BzJM9HAxpZSC212lS2Kf%2F1FrOwKwi%2B6mRH1nVM2UgigVjuXtQSZ%2FTOQUgNJT3lLYWJUqiNhRu4jsyjEX6v9ZkaFZ1SzlLmhr6IoRkEGkdGL%2FfJ%2BNSAG5DikKKsnBmCYdIUfF%2F2W2uerI1FLedjocwB0aHBQhE1Pmjouaj0roSuH&X-Amz-Signature=b281d3f2b9867e71b52e3e6d4272ea999f386ccceb46cdf62bca6d01b303ac6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXTQK2Y%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAC78WaMU4lakx%2FN0DSAvSiKSpEJ7wAdGnxZfp4AzboiAiA4aoXIsEJjIWoP5U9h0VTNZLvQKuWJYAg%2FLSsdvRBoDSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCa6e41uNNTBHjcxAKtwDtP2UU024uynu%2Fx%2FGTSxsW9xe5PvJCpvaHYDfwVZbnpSpYN2uOkztcRZ%2B96miVPvowgeEPXy9WuT%2FzaIuVYHgqN0Njd5BVlszjk0XRBpkCJZdIDxUYVK0X4UMLfLKf0%2FY8CG0PdR%2F7mzuex0ZF5x72jZd%2FMAVD45m9EewkufZP%2FW9qdxgGnkKIajS5kfQLn8iMDLBXcK%2FvwChWWt2QXmblCtuHvjR90xdqK0K1b3tIW9c9cUhHQlJkntdR6kAWrqNCfUcmnmEuQllqEMSn2TD0VXqQC12v7uCLDCU4sZymeH0WRl9Gk67UzMFtIzzF%2Bp%2B5Uw19Wdbz53G5qJxxBn37WJsXofyAkzK6PUMCQqgIN7aKLx5kvzw6NKKF5VD7DKmjpfoNE42s5H0JyYVLLwlq5uz10GHS%2BtKbbYt8TF9aH5QGLVLaJ6opMpbMZf7GjYo16oQxLpta9gK4l1WWNK%2BYmYhufVY5KdaA%2B6hRdMPpP5fhX7fRJmH%2B%2B9AFjBRPZSQzg7PzXpOnHjqfH0otsDs%2FGXpmhLy3hADeGdPta7nhsyrCVjGvFAxT3Rw3M00BJ5TEsBQh3x%2FcH9r5DbDjlKNnygC5SbzXjUUgrV2l9vDViBTuEluYPwdYgDG2wwww8PiyQY6pgH%2Fa%2BNo84QX3eejp7EUe%2FbealT3p0FtHJVkqLvGilcEsIOwXDVK6BzJM9HAxpZSC212lS2Kf%2F1FrOwKwi%2B6mRH1nVM2UgigVjuXtQSZ%2FTOQUgNJT3lLYWJUqiNhRu4jsyjEX6v9ZkaFZ1SzlLmhr6IoRkEGkdGL%2FfJ%2BNSAG5DikKKsnBmCYdIUfF%2F2W2uerI1FLedjocwB0aHBQhE1Pmjouaj0roSuH&X-Amz-Signature=db69dd2161529bcf3ffd39782d697a6629154bbb8822de871fdf9f131332e19b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXTQK2Y%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAC78WaMU4lakx%2FN0DSAvSiKSpEJ7wAdGnxZfp4AzboiAiA4aoXIsEJjIWoP5U9h0VTNZLvQKuWJYAg%2FLSsdvRBoDSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCa6e41uNNTBHjcxAKtwDtP2UU024uynu%2Fx%2FGTSxsW9xe5PvJCpvaHYDfwVZbnpSpYN2uOkztcRZ%2B96miVPvowgeEPXy9WuT%2FzaIuVYHgqN0Njd5BVlszjk0XRBpkCJZdIDxUYVK0X4UMLfLKf0%2FY8CG0PdR%2F7mzuex0ZF5x72jZd%2FMAVD45m9EewkufZP%2FW9qdxgGnkKIajS5kfQLn8iMDLBXcK%2FvwChWWt2QXmblCtuHvjR90xdqK0K1b3tIW9c9cUhHQlJkntdR6kAWrqNCfUcmnmEuQllqEMSn2TD0VXqQC12v7uCLDCU4sZymeH0WRl9Gk67UzMFtIzzF%2Bp%2B5Uw19Wdbz53G5qJxxBn37WJsXofyAkzK6PUMCQqgIN7aKLx5kvzw6NKKF5VD7DKmjpfoNE42s5H0JyYVLLwlq5uz10GHS%2BtKbbYt8TF9aH5QGLVLaJ6opMpbMZf7GjYo16oQxLpta9gK4l1WWNK%2BYmYhufVY5KdaA%2B6hRdMPpP5fhX7fRJmH%2B%2B9AFjBRPZSQzg7PzXpOnHjqfH0otsDs%2FGXpmhLy3hADeGdPta7nhsyrCVjGvFAxT3Rw3M00BJ5TEsBQh3x%2FcH9r5DbDjlKNnygC5SbzXjUUgrV2l9vDViBTuEluYPwdYgDG2wwww8PiyQY6pgH%2Fa%2BNo84QX3eejp7EUe%2FbealT3p0FtHJVkqLvGilcEsIOwXDVK6BzJM9HAxpZSC212lS2Kf%2F1FrOwKwi%2B6mRH1nVM2UgigVjuXtQSZ%2FTOQUgNJT3lLYWJUqiNhRu4jsyjEX6v9ZkaFZ1SzlLmhr6IoRkEGkdGL%2FfJ%2BNSAG5DikKKsnBmCYdIUfF%2F2W2uerI1FLedjocwB0aHBQhE1Pmjouaj0roSuH&X-Amz-Signature=32dfccf9a725b7f1f90bee72b4eaafddf1bc9d411a4d97b588bf7685742ed7b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXTQK2Y%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAC78WaMU4lakx%2FN0DSAvSiKSpEJ7wAdGnxZfp4AzboiAiA4aoXIsEJjIWoP5U9h0VTNZLvQKuWJYAg%2FLSsdvRBoDSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCa6e41uNNTBHjcxAKtwDtP2UU024uynu%2Fx%2FGTSxsW9xe5PvJCpvaHYDfwVZbnpSpYN2uOkztcRZ%2B96miVPvowgeEPXy9WuT%2FzaIuVYHgqN0Njd5BVlszjk0XRBpkCJZdIDxUYVK0X4UMLfLKf0%2FY8CG0PdR%2F7mzuex0ZF5x72jZd%2FMAVD45m9EewkufZP%2FW9qdxgGnkKIajS5kfQLn8iMDLBXcK%2FvwChWWt2QXmblCtuHvjR90xdqK0K1b3tIW9c9cUhHQlJkntdR6kAWrqNCfUcmnmEuQllqEMSn2TD0VXqQC12v7uCLDCU4sZymeH0WRl9Gk67UzMFtIzzF%2Bp%2B5Uw19Wdbz53G5qJxxBn37WJsXofyAkzK6PUMCQqgIN7aKLx5kvzw6NKKF5VD7DKmjpfoNE42s5H0JyYVLLwlq5uz10GHS%2BtKbbYt8TF9aH5QGLVLaJ6opMpbMZf7GjYo16oQxLpta9gK4l1WWNK%2BYmYhufVY5KdaA%2B6hRdMPpP5fhX7fRJmH%2B%2B9AFjBRPZSQzg7PzXpOnHjqfH0otsDs%2FGXpmhLy3hADeGdPta7nhsyrCVjGvFAxT3Rw3M00BJ5TEsBQh3x%2FcH9r5DbDjlKNnygC5SbzXjUUgrV2l9vDViBTuEluYPwdYgDG2wwww8PiyQY6pgH%2Fa%2BNo84QX3eejp7EUe%2FbealT3p0FtHJVkqLvGilcEsIOwXDVK6BzJM9HAxpZSC212lS2Kf%2F1FrOwKwi%2B6mRH1nVM2UgigVjuXtQSZ%2FTOQUgNJT3lLYWJUqiNhRu4jsyjEX6v9ZkaFZ1SzlLmhr6IoRkEGkdGL%2FfJ%2BNSAG5DikKKsnBmCYdIUfF%2F2W2uerI1FLedjocwB0aHBQhE1Pmjouaj0roSuH&X-Amz-Signature=bf15376184151b13aa16f0f261829ce8a93870700305c0fa9b5f868ac1dbe7a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXTQK2Y%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAC78WaMU4lakx%2FN0DSAvSiKSpEJ7wAdGnxZfp4AzboiAiA4aoXIsEJjIWoP5U9h0VTNZLvQKuWJYAg%2FLSsdvRBoDSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCa6e41uNNTBHjcxAKtwDtP2UU024uynu%2Fx%2FGTSxsW9xe5PvJCpvaHYDfwVZbnpSpYN2uOkztcRZ%2B96miVPvowgeEPXy9WuT%2FzaIuVYHgqN0Njd5BVlszjk0XRBpkCJZdIDxUYVK0X4UMLfLKf0%2FY8CG0PdR%2F7mzuex0ZF5x72jZd%2FMAVD45m9EewkufZP%2FW9qdxgGnkKIajS5kfQLn8iMDLBXcK%2FvwChWWt2QXmblCtuHvjR90xdqK0K1b3tIW9c9cUhHQlJkntdR6kAWrqNCfUcmnmEuQllqEMSn2TD0VXqQC12v7uCLDCU4sZymeH0WRl9Gk67UzMFtIzzF%2Bp%2B5Uw19Wdbz53G5qJxxBn37WJsXofyAkzK6PUMCQqgIN7aKLx5kvzw6NKKF5VD7DKmjpfoNE42s5H0JyYVLLwlq5uz10GHS%2BtKbbYt8TF9aH5QGLVLaJ6opMpbMZf7GjYo16oQxLpta9gK4l1WWNK%2BYmYhufVY5KdaA%2B6hRdMPpP5fhX7fRJmH%2B%2B9AFjBRPZSQzg7PzXpOnHjqfH0otsDs%2FGXpmhLy3hADeGdPta7nhsyrCVjGvFAxT3Rw3M00BJ5TEsBQh3x%2FcH9r5DbDjlKNnygC5SbzXjUUgrV2l9vDViBTuEluYPwdYgDG2wwww8PiyQY6pgH%2Fa%2BNo84QX3eejp7EUe%2FbealT3p0FtHJVkqLvGilcEsIOwXDVK6BzJM9HAxpZSC212lS2Kf%2F1FrOwKwi%2B6mRH1nVM2UgigVjuXtQSZ%2FTOQUgNJT3lLYWJUqiNhRu4jsyjEX6v9ZkaFZ1SzlLmhr6IoRkEGkdGL%2FfJ%2BNSAG5DikKKsnBmCYdIUfF%2F2W2uerI1FLedjocwB0aHBQhE1Pmjouaj0roSuH&X-Amz-Signature=73e89a8ee3a8f996d77940ea103154610b67d2d6b53050e7c92e6a64c73e7c3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXTQK2Y%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAC78WaMU4lakx%2FN0DSAvSiKSpEJ7wAdGnxZfp4AzboiAiA4aoXIsEJjIWoP5U9h0VTNZLvQKuWJYAg%2FLSsdvRBoDSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCa6e41uNNTBHjcxAKtwDtP2UU024uynu%2Fx%2FGTSxsW9xe5PvJCpvaHYDfwVZbnpSpYN2uOkztcRZ%2B96miVPvowgeEPXy9WuT%2FzaIuVYHgqN0Njd5BVlszjk0XRBpkCJZdIDxUYVK0X4UMLfLKf0%2FY8CG0PdR%2F7mzuex0ZF5x72jZd%2FMAVD45m9EewkufZP%2FW9qdxgGnkKIajS5kfQLn8iMDLBXcK%2FvwChWWt2QXmblCtuHvjR90xdqK0K1b3tIW9c9cUhHQlJkntdR6kAWrqNCfUcmnmEuQllqEMSn2TD0VXqQC12v7uCLDCU4sZymeH0WRl9Gk67UzMFtIzzF%2Bp%2B5Uw19Wdbz53G5qJxxBn37WJsXofyAkzK6PUMCQqgIN7aKLx5kvzw6NKKF5VD7DKmjpfoNE42s5H0JyYVLLwlq5uz10GHS%2BtKbbYt8TF9aH5QGLVLaJ6opMpbMZf7GjYo16oQxLpta9gK4l1WWNK%2BYmYhufVY5KdaA%2B6hRdMPpP5fhX7fRJmH%2B%2B9AFjBRPZSQzg7PzXpOnHjqfH0otsDs%2FGXpmhLy3hADeGdPta7nhsyrCVjGvFAxT3Rw3M00BJ5TEsBQh3x%2FcH9r5DbDjlKNnygC5SbzXjUUgrV2l9vDViBTuEluYPwdYgDG2wwww8PiyQY6pgH%2Fa%2BNo84QX3eejp7EUe%2FbealT3p0FtHJVkqLvGilcEsIOwXDVK6BzJM9HAxpZSC212lS2Kf%2F1FrOwKwi%2B6mRH1nVM2UgigVjuXtQSZ%2FTOQUgNJT3lLYWJUqiNhRu4jsyjEX6v9ZkaFZ1SzlLmhr6IoRkEGkdGL%2FfJ%2BNSAG5DikKKsnBmCYdIUfF%2F2W2uerI1FLedjocwB0aHBQhE1Pmjouaj0roSuH&X-Amz-Signature=5a19669c9f8804a621d367e46c5c5663fa48af049488f89cf03d3646962ee2c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXTQK2Y%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAC78WaMU4lakx%2FN0DSAvSiKSpEJ7wAdGnxZfp4AzboiAiA4aoXIsEJjIWoP5U9h0VTNZLvQKuWJYAg%2FLSsdvRBoDSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCa6e41uNNTBHjcxAKtwDtP2UU024uynu%2Fx%2FGTSxsW9xe5PvJCpvaHYDfwVZbnpSpYN2uOkztcRZ%2B96miVPvowgeEPXy9WuT%2FzaIuVYHgqN0Njd5BVlszjk0XRBpkCJZdIDxUYVK0X4UMLfLKf0%2FY8CG0PdR%2F7mzuex0ZF5x72jZd%2FMAVD45m9EewkufZP%2FW9qdxgGnkKIajS5kfQLn8iMDLBXcK%2FvwChWWt2QXmblCtuHvjR90xdqK0K1b3tIW9c9cUhHQlJkntdR6kAWrqNCfUcmnmEuQllqEMSn2TD0VXqQC12v7uCLDCU4sZymeH0WRl9Gk67UzMFtIzzF%2Bp%2B5Uw19Wdbz53G5qJxxBn37WJsXofyAkzK6PUMCQqgIN7aKLx5kvzw6NKKF5VD7DKmjpfoNE42s5H0JyYVLLwlq5uz10GHS%2BtKbbYt8TF9aH5QGLVLaJ6opMpbMZf7GjYo16oQxLpta9gK4l1WWNK%2BYmYhufVY5KdaA%2B6hRdMPpP5fhX7fRJmH%2B%2B9AFjBRPZSQzg7PzXpOnHjqfH0otsDs%2FGXpmhLy3hADeGdPta7nhsyrCVjGvFAxT3Rw3M00BJ5TEsBQh3x%2FcH9r5DbDjlKNnygC5SbzXjUUgrV2l9vDViBTuEluYPwdYgDG2wwww8PiyQY6pgH%2Fa%2BNo84QX3eejp7EUe%2FbealT3p0FtHJVkqLvGilcEsIOwXDVK6BzJM9HAxpZSC212lS2Kf%2F1FrOwKwi%2B6mRH1nVM2UgigVjuXtQSZ%2FTOQUgNJT3lLYWJUqiNhRu4jsyjEX6v9ZkaFZ1SzlLmhr6IoRkEGkdGL%2FfJ%2BNSAG5DikKKsnBmCYdIUfF%2F2W2uerI1FLedjocwB0aHBQhE1Pmjouaj0roSuH&X-Amz-Signature=e0fbe465daa0b5bcd91f876151077797e12ae01a50804fd88edf521741b95417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXTQK2Y%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAC78WaMU4lakx%2FN0DSAvSiKSpEJ7wAdGnxZfp4AzboiAiA4aoXIsEJjIWoP5U9h0VTNZLvQKuWJYAg%2FLSsdvRBoDSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCa6e41uNNTBHjcxAKtwDtP2UU024uynu%2Fx%2FGTSxsW9xe5PvJCpvaHYDfwVZbnpSpYN2uOkztcRZ%2B96miVPvowgeEPXy9WuT%2FzaIuVYHgqN0Njd5BVlszjk0XRBpkCJZdIDxUYVK0X4UMLfLKf0%2FY8CG0PdR%2F7mzuex0ZF5x72jZd%2FMAVD45m9EewkufZP%2FW9qdxgGnkKIajS5kfQLn8iMDLBXcK%2FvwChWWt2QXmblCtuHvjR90xdqK0K1b3tIW9c9cUhHQlJkntdR6kAWrqNCfUcmnmEuQllqEMSn2TD0VXqQC12v7uCLDCU4sZymeH0WRl9Gk67UzMFtIzzF%2Bp%2B5Uw19Wdbz53G5qJxxBn37WJsXofyAkzK6PUMCQqgIN7aKLx5kvzw6NKKF5VD7DKmjpfoNE42s5H0JyYVLLwlq5uz10GHS%2BtKbbYt8TF9aH5QGLVLaJ6opMpbMZf7GjYo16oQxLpta9gK4l1WWNK%2BYmYhufVY5KdaA%2B6hRdMPpP5fhX7fRJmH%2B%2B9AFjBRPZSQzg7PzXpOnHjqfH0otsDs%2FGXpmhLy3hADeGdPta7nhsyrCVjGvFAxT3Rw3M00BJ5TEsBQh3x%2FcH9r5DbDjlKNnygC5SbzXjUUgrV2l9vDViBTuEluYPwdYgDG2wwww8PiyQY6pgH%2Fa%2BNo84QX3eejp7EUe%2FbealT3p0FtHJVkqLvGilcEsIOwXDVK6BzJM9HAxpZSC212lS2Kf%2F1FrOwKwi%2B6mRH1nVM2UgigVjuXtQSZ%2FTOQUgNJT3lLYWJUqiNhRu4jsyjEX6v9ZkaFZ1SzlLmhr6IoRkEGkdGL%2FfJ%2BNSAG5DikKKsnBmCYdIUfF%2F2W2uerI1FLedjocwB0aHBQhE1Pmjouaj0roSuH&X-Amz-Signature=e63f3cad8315b571cdfa08f6f74e0fc3fc739e81ff883c48350387b2d024a556&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXTQK2Y%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAC78WaMU4lakx%2FN0DSAvSiKSpEJ7wAdGnxZfp4AzboiAiA4aoXIsEJjIWoP5U9h0VTNZLvQKuWJYAg%2FLSsdvRBoDSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCa6e41uNNTBHjcxAKtwDtP2UU024uynu%2Fx%2FGTSxsW9xe5PvJCpvaHYDfwVZbnpSpYN2uOkztcRZ%2B96miVPvowgeEPXy9WuT%2FzaIuVYHgqN0Njd5BVlszjk0XRBpkCJZdIDxUYVK0X4UMLfLKf0%2FY8CG0PdR%2F7mzuex0ZF5x72jZd%2FMAVD45m9EewkufZP%2FW9qdxgGnkKIajS5kfQLn8iMDLBXcK%2FvwChWWt2QXmblCtuHvjR90xdqK0K1b3tIW9c9cUhHQlJkntdR6kAWrqNCfUcmnmEuQllqEMSn2TD0VXqQC12v7uCLDCU4sZymeH0WRl9Gk67UzMFtIzzF%2Bp%2B5Uw19Wdbz53G5qJxxBn37WJsXofyAkzK6PUMCQqgIN7aKLx5kvzw6NKKF5VD7DKmjpfoNE42s5H0JyYVLLwlq5uz10GHS%2BtKbbYt8TF9aH5QGLVLaJ6opMpbMZf7GjYo16oQxLpta9gK4l1WWNK%2BYmYhufVY5KdaA%2B6hRdMPpP5fhX7fRJmH%2B%2B9AFjBRPZSQzg7PzXpOnHjqfH0otsDs%2FGXpmhLy3hADeGdPta7nhsyrCVjGvFAxT3Rw3M00BJ5TEsBQh3x%2FcH9r5DbDjlKNnygC5SbzXjUUgrV2l9vDViBTuEluYPwdYgDG2wwww8PiyQY6pgH%2Fa%2BNo84QX3eejp7EUe%2FbealT3p0FtHJVkqLvGilcEsIOwXDVK6BzJM9HAxpZSC212lS2Kf%2F1FrOwKwi%2B6mRH1nVM2UgigVjuXtQSZ%2FTOQUgNJT3lLYWJUqiNhRu4jsyjEX6v9ZkaFZ1SzlLmhr6IoRkEGkdGL%2FfJ%2BNSAG5DikKKsnBmCYdIUfF%2F2W2uerI1FLedjocwB0aHBQhE1Pmjouaj0roSuH&X-Amz-Signature=e8b2371d83aa30a341d43ba8ccf1ad176a7589e66ec2d9a8a5061ecd4d4915d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKOL37MV%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBueYd2sTLup33GN2A%2BEC4T4yT3JGUimyfKit3dXrcqKAiAqeKZ2vpYBU4L9pmgUHtMf74z6LgduSX5HKBmKgkK91SqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs6uug3lABrerUXUCKtwDh1QlLtGfm9L8Xb5YDhHoazziAzyMwavbsTYXdmpWizOUSjkhSJJpcl%2F%2Ft8jL9VXUociLEG903NrGXotv%2BhG%2BDyUS7nrblP%2FfhMPbqbmjtApiGOEA5hSqFm5V8M4PeS%2FXMWe1gb%2FsNOqLwpmHDXx59l%2BXpelrjHXQTpiqkvDomRdiujIA7y0pmWz%2BLD%2FsdyBZUFx04kgXWuTLE%2B6gs7379DrTRkXUfOoS2bxxiMJ6%2BD364kcRpgL4ik4%2FSGjkdK47oMLYUI%2F65OPrL03WAOnu3sXbEdmxxzKH2b6b0O0M36ZYWrACzei8aFt1f015F4HG35lbaMVgI2yAdK%2FI98GYFmhbnCQAA%2BOoeybtmu4YATsacpj3U615n9hGyG0xCRuvWfoUPl0JmHHZWVRGwztHiWTYqQRswJcsvedo7vSmNuhTCJhDFjfI96vRaTOe6Xvfzmb241uiKCv0LYrvoRCMzEeNZhuOSCg4Y3HFP%2F%2FIklwAK8%2FpwTRWgAVXR8jfcKfaEmystNAr2ile0sg3qSjt3R%2FG1dT8uSCPlc5JYAN4s6MIwGPkBDxIyStkEy2FPUYpwcG8brquekj64Pl%2BWxq8aCiPZqpsuvtx7iXwRiWJDJLO7c5hopp%2Fm1yeIwkwkcTiyQY6pgHq1oby%2F5JcxNpZ0trC5FBneole6zoSLt3L7YQo3U3HJMGvotI648iBc%2BvlaNOKlyzJfToqPFZ0y73jBgxDkrml5r9Nwojtgv45o5w1Hg4UJBzYU%2FFMiOTAnUsSwzeM6Ul8cYCB4Jrt2UoaGz%2BQYrdQpKpZt70sBl4AdB5x0%2BCTisA9qlPy94Dni4%2FihieNE7uKmrBOEeR9fqt6eCu1m%2BuAGC8nqZvx&X-Amz-Signature=eb87fdaed5485ebaaa87086a495b99b1a159fd2d097c7cdd3dee12facec43af1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVEZDXQP%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUvLEfdEkLxfNtYgVDmtcW2b7AHgvcejgm2hZKfyLvDAiEAoBeyRh4QkZhwL%2FbYoY3lEptFgIXW4MmuI26Rt0KPZCYqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIBgrdoDkxmWBvPhircAy8S5ns%2BTbY2BviNfeggnEkx06iMLOGzdajmqdzLd4N4zZ%2B4CIHnOyLJCGRUFiZHkKPWH9cTJ1KSn74kQcQqd0mlHkz0U2JAWLiRVAAG7CQiyLRLYHbRwCrlXhbflu2BxG32xjtQPnMpy7i8BjEpROWVtb%2Br9gQawhs3fUtknTr%2Be%2FWYhpeNTV%2B3vSHKReLpwShWkS5p%2FVdzCv97qY4qxt%2B61KHj2xtpoJJOF8UvEN3PfEkvfdkXvNnu5%2Fpe3UEvuOqMYzBs44qdNbPAhavFDuHRb1h6BPWDfzvM8pED17o3TM%2B6qi4yBqw65d8ABor8q%2FHHZooRg2p%2FfxSaJNYLJX1%2F%2FPCDdj7yr0cVD9mG2rGGBN2F6Lkp%2FHD8K0Na0gyv1klj981jqGBTnE4CVKCHLpWkVBZFUl5JmjrYKDzGf%2BtPYG5mzSE%2FEhVCe%2FeHyOd9ZMkBiUbE%2Bd7SxeEPTPmCM9X%2FOU5pPQZBynoJZBE9d2OXgJS4Wdedzodj9zCEDRmHIKhAwe3kdOhyMcs8dQNHk4rAQaax%2FPzqOiUfrPluyEhE8XTr3PFJukcDI%2BotpXKVWipjBlmWlorXIgJlEnRtuJVhtIz%2BoKm6XkcArQcTbfCkLIi9zVzIyIQUYyqzMOjD4skGOqUBFBn%2FyLk0%2B7fZbk9OF3ifhSNoyEhaQrpBxwkcdpcFIrNNDbX3zusXkgP9gt8lMi34%2FKE8nbebfG0uJyERep%2FhIvKd4JngkXWEJOEH91Dx6G1IdB3m7JxqLXal9XI5uVpkPGjComlaOYakHJluX9nmFvpdqM10uPiJWS4Ml7i1w4Mo%2FXkBvzgalvuiUuePohdfPFbMC2gHLKBYhthCqGg14SZtlNm6&X-Amz-Signature=9ee4880b684d4b2bbf5107bf3f2079c24c94a1c55d36797edbd0c2d0ab061569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PE7U5G2%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQsYzcrCN2eex0kmsOIyvAsgFFzUuQRwxHwsRsOSSyJwIhAKtKyLHF5mXH5615kxmoB9GbmA%2BFpnPnKsofPu97LC7rKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeB6QvjLKv8NMmu18q3APTwGwk6oKDF7JmooD9rE3R4zn8titybDProOXS2uAQmq%2FL5RjgdNgjoa%2BuzH%2BpByFFu2YqHWiNgWepurBCXKTRxgpN0QcazBoVk%2Bh2lmL4O%2FdgBSg6kbv%2FhsYzdBlgotTf0sB%2B3MPbEzxXYwLOT%2B5TrHIv5KsD8xK3YbrKlvpMysyEoUR%2BbzrGx%2FMMCS7vR04KXe2FqjTGpezr0wpjEZraArXtvZE%2B%2BhWzwjn38zNN5gKfPVo7Dvh5KHGN8gVUXsRAAPKjTCEPXHPEAdiOTJcHWRDEovN1%2F7TqQMLmXLUR8zpQ0Zmslyaaq5JfzSUCIjTYIdIaOrEeRzn54jK1ch%2FyvVCvJy4VtttaQLd1a7NNc4tnkfC9oMpP01e3Otduh1fAw8i7XQuguBL9nmjPT6x8amOrCOc2ZdeuHT8eBb3BH%2BlXa9DfNM2VoEMnNuwhc7NWOjiz48SYNdSndyeCkn6Pt0A3xf2KOtp5vrY8kL9MNUpP843BJs%2FL3owRsRWAoncE7ozfx2aEN%2FBuor8LFPyyjGufJDKu73PIpBN11I%2BRhpADZVuE%2Bs7sa4kCFUwMnp20gIIwgqsNDFIrgIn48VFlNcnnhtweOUBYYNgLhjvHkMSsXeLxkG9RkU5i1DCPw%2BLJBjqkAUvk97zkZdaK5E%2BCx7gy1%2F2vS8nqjbzjiLBrxZeAcceXelHWmxDs2ECzFiz9ECr8rOr9oVJxKbtas1rT66zVz8qJCboTR2OmelJjHxjCS0WeVtzdfVOCXsdH%2FHHUaDLW4QcZCA%2FwY8iQ2Gp5T8qsIGdGB2YFyjIqB64soe0Or5ZwyfabF5B4cnYgAgfEjcT1l6lhz3PxjRn3pHUJ4KxUux1t4S7u&X-Amz-Signature=e3b32528da118fe703bd3fa167a4c1e13ef5d9d5b5d9f37aa4c40209de9f6d80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXTQK2Y%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAC78WaMU4lakx%2FN0DSAvSiKSpEJ7wAdGnxZfp4AzboiAiA4aoXIsEJjIWoP5U9h0VTNZLvQKuWJYAg%2FLSsdvRBoDSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCa6e41uNNTBHjcxAKtwDtP2UU024uynu%2Fx%2FGTSxsW9xe5PvJCpvaHYDfwVZbnpSpYN2uOkztcRZ%2B96miVPvowgeEPXy9WuT%2FzaIuVYHgqN0Njd5BVlszjk0XRBpkCJZdIDxUYVK0X4UMLfLKf0%2FY8CG0PdR%2F7mzuex0ZF5x72jZd%2FMAVD45m9EewkufZP%2FW9qdxgGnkKIajS5kfQLn8iMDLBXcK%2FvwChWWt2QXmblCtuHvjR90xdqK0K1b3tIW9c9cUhHQlJkntdR6kAWrqNCfUcmnmEuQllqEMSn2TD0VXqQC12v7uCLDCU4sZymeH0WRl9Gk67UzMFtIzzF%2Bp%2B5Uw19Wdbz53G5qJxxBn37WJsXofyAkzK6PUMCQqgIN7aKLx5kvzw6NKKF5VD7DKmjpfoNE42s5H0JyYVLLwlq5uz10GHS%2BtKbbYt8TF9aH5QGLVLaJ6opMpbMZf7GjYo16oQxLpta9gK4l1WWNK%2BYmYhufVY5KdaA%2B6hRdMPpP5fhX7fRJmH%2B%2B9AFjBRPZSQzg7PzXpOnHjqfH0otsDs%2FGXpmhLy3hADeGdPta7nhsyrCVjGvFAxT3Rw3M00BJ5TEsBQh3x%2FcH9r5DbDjlKNnygC5SbzXjUUgrV2l9vDViBTuEluYPwdYgDG2wwww8PiyQY6pgH%2Fa%2BNo84QX3eejp7EUe%2FbealT3p0FtHJVkqLvGilcEsIOwXDVK6BzJM9HAxpZSC212lS2Kf%2F1FrOwKwi%2B6mRH1nVM2UgigVjuXtQSZ%2FTOQUgNJT3lLYWJUqiNhRu4jsyjEX6v9ZkaFZ1SzlLmhr6IoRkEGkdGL%2FfJ%2BNSAG5DikKKsnBmCYdIUfF%2F2W2uerI1FLedjocwB0aHBQhE1Pmjouaj0roSuH&X-Amz-Signature=2d4e9bf04f8b436e5cf75630f403b0f794ef48d88d0b533d5b9a5d542e727078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAIMW7GY%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJeNsqgvleZ4gAbJaqlRMGHDLDAaIMBZ5pq6yJAxHazAiEAh3uomuibvEvzde3KjC7sW76fy0xm8v%2BTCRzIy4%2BXyGsqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJCfziUeKQCzQIQiYCrcA3qaGQoSDyYGY8NkQAGpZ%2BQBDZC7Z15ELJo8BTmlcgZw2Yc7vuuyT1VpfDxb9SJbizE327%2BYWTUUdRoWo48mGGjs0ss%2BCpayCC6Q0Ljj2Bw0noQ1Z%2FEWXlLXoFsrIqsy56beH3PSA8nMMtPKSVGcaVY92zVFz9o%2BG%2BBXMjAUwanG7dKZBSTefncRTaMnLbWQ2K5gRvND%2F9hWMRCBb9g1wfulTWU0lF3Pn5jSkvBIHLYFI7G%2B11wDtne4tj3bVV2L0n1E%2BYBodefTB57S9i2XrwdSvHC%2Bw4BHX4XD76ddxrDaNmRQTv0MkhrRffpKaHl8F%2F4ossgm3sJXcbScIQikCAuDolcIFnWxkogTnDvfIps%2FLgkDDolv8F2l1MsMmxSOuQXzrY5YVib7y4vvzcrwt5ZSJX4%2BVcJBblrLdYSXGOC%2Fs8%2FhYJbjN9rp6v0ZpcsJMXnFbnzuWUrrnOP2QiBfHUHuPIH%2FIV5eCzhDuC1YR1jqnc4wsD3Lup59XR6ZbmOn7XJmgEn%2BGQ%2F8%2FAIEsGBAydyUf%2BeX9AzYe3BHiuxBVss8gQ1VImFokbkp3f8EOIRxPisURSETKe5%2B98HFbI2jMA5Dn5elBTNGQAikwuAxWP4nOGkHQG%2F02fshXmOkMM7D4skGOqUBClJYSaad6vjxzJglu1mFXV8EWhmTbp4i15mvr0tRUmXzmAJ7kbjwclRNO7%2FTQn4MIJc7RPDggGiDiqlEfwH08DYlMH8SNjuScr%2FYZSeHcq3Bq9CPJVdm3nHEFcVq%2B9BVUhSnVriojmK4QLQ8CILHpr8E9wgUdUpc3RDQOweAVyRho48UKjM20iQ%2FQ8n1SYvniXhWCWn61PaUm9O7t9QPy9RK7r2P&X-Amz-Signature=ef86864c8ff58b70fcb3336d5c4105f92acfb9c16d4efe9ee8a7ffd54a793f09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXTQK2Y%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAC78WaMU4lakx%2FN0DSAvSiKSpEJ7wAdGnxZfp4AzboiAiA4aoXIsEJjIWoP5U9h0VTNZLvQKuWJYAg%2FLSsdvRBoDSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCa6e41uNNTBHjcxAKtwDtP2UU024uynu%2Fx%2FGTSxsW9xe5PvJCpvaHYDfwVZbnpSpYN2uOkztcRZ%2B96miVPvowgeEPXy9WuT%2FzaIuVYHgqN0Njd5BVlszjk0XRBpkCJZdIDxUYVK0X4UMLfLKf0%2FY8CG0PdR%2F7mzuex0ZF5x72jZd%2FMAVD45m9EewkufZP%2FW9qdxgGnkKIajS5kfQLn8iMDLBXcK%2FvwChWWt2QXmblCtuHvjR90xdqK0K1b3tIW9c9cUhHQlJkntdR6kAWrqNCfUcmnmEuQllqEMSn2TD0VXqQC12v7uCLDCU4sZymeH0WRl9Gk67UzMFtIzzF%2Bp%2B5Uw19Wdbz53G5qJxxBn37WJsXofyAkzK6PUMCQqgIN7aKLx5kvzw6NKKF5VD7DKmjpfoNE42s5H0JyYVLLwlq5uz10GHS%2BtKbbYt8TF9aH5QGLVLaJ6opMpbMZf7GjYo16oQxLpta9gK4l1WWNK%2BYmYhufVY5KdaA%2B6hRdMPpP5fhX7fRJmH%2B%2B9AFjBRPZSQzg7PzXpOnHjqfH0otsDs%2FGXpmhLy3hADeGdPta7nhsyrCVjGvFAxT3Rw3M00BJ5TEsBQh3x%2FcH9r5DbDjlKNnygC5SbzXjUUgrV2l9vDViBTuEluYPwdYgDG2wwww8PiyQY6pgH%2Fa%2BNo84QX3eejp7EUe%2FbealT3p0FtHJVkqLvGilcEsIOwXDVK6BzJM9HAxpZSC212lS2Kf%2F1FrOwKwi%2B6mRH1nVM2UgigVjuXtQSZ%2FTOQUgNJT3lLYWJUqiNhRu4jsyjEX6v9ZkaFZ1SzlLmhr6IoRkEGkdGL%2FfJ%2BNSAG5DikKKsnBmCYdIUfF%2F2W2uerI1FLedjocwB0aHBQhE1Pmjouaj0roSuH&X-Amz-Signature=257402c703409e64b72fd218f97315c59d1acfadc22971d56aa1a1fcc748c2ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675P2VZPK%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCjL8VfQLdjgSsA1U0TEZhP7H%2F2twPtVkgeQZBIk%2F5%2FAiAZ%2B%2BmwJpoYCnOnf8yV%2Fn6tibdxTuRfT7Paq8DBxJbvAyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTln7Usy63lCr6bbEKtwDlmdajDMJCZazYaYeyX4Wf8LDpd4fQ%2BBRe8VIeiypRzz1ZdIMTwvO2mG%2FExqGLNiSQgvN7FCdS8yJJbBglFyeRWi0WRCHPDAx95OFB1wlN65ft9FIOsDESUMcSFXfRI0YnwJ1z5H9BseTbcLnVni7HxmmGLiti5fXivQZ1NhDiOowOJlYINxKMKMJtuxX2aaWc072USum3arvEnI3i1REJV5lucJEI3GRPGCSU%2Bgl6fKcMPCXcfceJvJYPBJm5CBZlB%2FIgPs4LWPlClD%2BxXY4FDVrcBRyJTLMI6BsjQzxH%2Fi9MyIaqv%2FsFDtg6671toHjNhIfm6abdHSJB7ipDjPr4wIIxbyRVvf3kG68XFxOOangV0eK9byfWnGmQUaGiTwS8flbDqK67bDMAa7X9798wFZw1TNHDBzpYfmS%2BFYzRJBWcVCC2hGJ4bF9rFcHM4D%2BCkLXN561%2B22kEyyM8HSEvFwLIyR4lG04WUUnbCG59g8cuqULsiNgm1XEo7HZiqNOCwa7WYl0g6Qh3CpDVuERT4jJnbiNEKiY6b0b1HXzHSCewRDnmsvscGsc0IQx5PC%2BCF37z8sns2k4Orvh4ZrNRTGHYzl32kX6z4wVQvpes2nHKaUXg2lcGL3R2isw6sPiyQY6pgEyn2k5tCBDqoxHfFW1d5%2BzTxvwkDProRnX2qCxqVf6kXb22Sr8KjFEVCkyHpK%2BFqEY8DmmhuS8AGcT0CkVeBHswD3PoRcIHTvWNK%2Bf1psvEwSMft2mEIlpX3oeRPnMWiKWeiMtWV4sem4GsPWIf8pEHl0YzXOgeTMgVh82NJ1TbClb1wY1WJEL5eoDKhoyKmFNU2qU7QNKt%2BCI1R6XlqC5RG4BZekm&X-Amz-Signature=d900ff3e20ed02c0671cd7616f2948e7f92126fd302f6ca2de15f757fbb9f0a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXTQK2Y%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAC78WaMU4lakx%2FN0DSAvSiKSpEJ7wAdGnxZfp4AzboiAiA4aoXIsEJjIWoP5U9h0VTNZLvQKuWJYAg%2FLSsdvRBoDSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCa6e41uNNTBHjcxAKtwDtP2UU024uynu%2Fx%2FGTSxsW9xe5PvJCpvaHYDfwVZbnpSpYN2uOkztcRZ%2B96miVPvowgeEPXy9WuT%2FzaIuVYHgqN0Njd5BVlszjk0XRBpkCJZdIDxUYVK0X4UMLfLKf0%2FY8CG0PdR%2F7mzuex0ZF5x72jZd%2FMAVD45m9EewkufZP%2FW9qdxgGnkKIajS5kfQLn8iMDLBXcK%2FvwChWWt2QXmblCtuHvjR90xdqK0K1b3tIW9c9cUhHQlJkntdR6kAWrqNCfUcmnmEuQllqEMSn2TD0VXqQC12v7uCLDCU4sZymeH0WRl9Gk67UzMFtIzzF%2Bp%2B5Uw19Wdbz53G5qJxxBn37WJsXofyAkzK6PUMCQqgIN7aKLx5kvzw6NKKF5VD7DKmjpfoNE42s5H0JyYVLLwlq5uz10GHS%2BtKbbYt8TF9aH5QGLVLaJ6opMpbMZf7GjYo16oQxLpta9gK4l1WWNK%2BYmYhufVY5KdaA%2B6hRdMPpP5fhX7fRJmH%2B%2B9AFjBRPZSQzg7PzXpOnHjqfH0otsDs%2FGXpmhLy3hADeGdPta7nhsyrCVjGvFAxT3Rw3M00BJ5TEsBQh3x%2FcH9r5DbDjlKNnygC5SbzXjUUgrV2l9vDViBTuEluYPwdYgDG2wwww8PiyQY6pgH%2Fa%2BNo84QX3eejp7EUe%2FbealT3p0FtHJVkqLvGilcEsIOwXDVK6BzJM9HAxpZSC212lS2Kf%2F1FrOwKwi%2B6mRH1nVM2UgigVjuXtQSZ%2FTOQUgNJT3lLYWJUqiNhRu4jsyjEX6v9ZkaFZ1SzlLmhr6IoRkEGkdGL%2FfJ%2BNSAG5DikKKsnBmCYdIUfF%2F2W2uerI1FLedjocwB0aHBQhE1Pmjouaj0roSuH&X-Amz-Signature=d8288340311997029094da2c03ae11e60a7d9822c340336a598ef7c58cc22488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MSBLKPZ%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAtR%2FhDm1B9SeJBPdYFpGEToraWomUXa35bzXURDO4cQIhAI6xUfDglvu8vLukwzDj36SZfHlKX1sXjNV2K6Vi41gZKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXXMwjdeig%2Bs%2FHnawq3AM4LO4IDigzIRDBt8HLyiiS3GOWHsc2Ui7xD3Y4YdNvM3oMt54eYL8LS%2Fexzph0DBu0ccJcwk0jYWYhJk%2BlpFjRD5Uck79USNYXdCXYWy%2BfA%2BdviJyQO7UHzgoiv7WuYbe37OtX8YZRmNdp%2FTGcysIKu1Bukugtt%2FXEDGceDnGoeX0B2XXmmcM0C27N9rJdoq1H2BzsEp2lKGYlaeMvsEfCxgAdtM6tVeCvygH0a2CggZ4juDsdhSQ%2B4msazXJterHjBLJGLAziGftWI235AceeLW2Pj9W07tgCCzccvMHTnEyehis0uGzTKFSOnuqUIWo9awxlEpPf7C3Frt9RgTBmTeACYqDBOVL1cOxQUsFQIDAGWHNqa3hmWjHm0YGp86AtzmDv7SXJXDi2VtBKF851k47AN78kHCpwwe70tol23%2FkP%2Bddfyk5Qa6iyyqK0fJdsIlYENQBS1hCpfXuxN6kagRp3aLLxC7ZQzIujPwAGzhBAJ0emT8uFc3JXA4enmq6Fvx1AEbI40QBewg2w17Nqhiwsc1XdE3sU8tUQwS4N7lLiMZmW2Y3UCGEpTISwCANNWHRt1%2F2%2BA3zQsupoMsCaoRlNI4wkc3xQgjPy9iy4p3q6xAn%2BFcwhrIG6NDCnxOLJBjqkAfiBmW67jQtLUmMd8wsfqjMsn0OvMfC8dN12LKgsCYG4GyUA%2BLTL7gJZtdwPq9G%2FIHtxrV8KwBZRR4Kng0N9z6CeeSQlLLJuRzIrv6D0gafCWbcSkX2ML6BlbZ1RCefCe5jlEoADvREwLMO7KKcyztNorJNwOayK5dl6l%2BbWWhlilLLXer8XfxXrX21WCg0CCl%2F4SC9orCRZsH1svxMrhuODkn9g&X-Amz-Signature=8b3f3ebf29223b50e71a627056b67cc9d2194fa8ee85a10dfb27851544de2110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXTQK2Y%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAC78WaMU4lakx%2FN0DSAvSiKSpEJ7wAdGnxZfp4AzboiAiA4aoXIsEJjIWoP5U9h0VTNZLvQKuWJYAg%2FLSsdvRBoDSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCa6e41uNNTBHjcxAKtwDtP2UU024uynu%2Fx%2FGTSxsW9xe5PvJCpvaHYDfwVZbnpSpYN2uOkztcRZ%2B96miVPvowgeEPXy9WuT%2FzaIuVYHgqN0Njd5BVlszjk0XRBpkCJZdIDxUYVK0X4UMLfLKf0%2FY8CG0PdR%2F7mzuex0ZF5x72jZd%2FMAVD45m9EewkufZP%2FW9qdxgGnkKIajS5kfQLn8iMDLBXcK%2FvwChWWt2QXmblCtuHvjR90xdqK0K1b3tIW9c9cUhHQlJkntdR6kAWrqNCfUcmnmEuQllqEMSn2TD0VXqQC12v7uCLDCU4sZymeH0WRl9Gk67UzMFtIzzF%2Bp%2B5Uw19Wdbz53G5qJxxBn37WJsXofyAkzK6PUMCQqgIN7aKLx5kvzw6NKKF5VD7DKmjpfoNE42s5H0JyYVLLwlq5uz10GHS%2BtKbbYt8TF9aH5QGLVLaJ6opMpbMZf7GjYo16oQxLpta9gK4l1WWNK%2BYmYhufVY5KdaA%2B6hRdMPpP5fhX7fRJmH%2B%2B9AFjBRPZSQzg7PzXpOnHjqfH0otsDs%2FGXpmhLy3hADeGdPta7nhsyrCVjGvFAxT3Rw3M00BJ5TEsBQh3x%2FcH9r5DbDjlKNnygC5SbzXjUUgrV2l9vDViBTuEluYPwdYgDG2wwww8PiyQY6pgH%2Fa%2BNo84QX3eejp7EUe%2FbealT3p0FtHJVkqLvGilcEsIOwXDVK6BzJM9HAxpZSC212lS2Kf%2F1FrOwKwi%2B6mRH1nVM2UgigVjuXtQSZ%2FTOQUgNJT3lLYWJUqiNhRu4jsyjEX6v9ZkaFZ1SzlLmhr6IoRkEGkdGL%2FfJ%2BNSAG5DikKKsnBmCYdIUfF%2F2W2uerI1FLedjocwB0aHBQhE1Pmjouaj0roSuH&X-Amz-Signature=dbadf564097494a1e012e9e27afff46f8bf44c9ac90597f7524e64c724157898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4XVDTX6%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqfq6O61JlSTgOR6s7l3psR%2B4RLaHYWCQGhHjI%2B08RGAiBFLfLcGY33Jv83h%2BgmSqXdDoODNgGndVLbNBsNjT1f%2BSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7ljisWyn9DxW7wzSKtwDS%2BB%2FUx%2FRfatStu9uqp2aSqmk1IaMWG985o74KeSMyXD2EXcqPFpNcYjgM3k%2Bz2s9Qv28ao6wEXXJRgYd1lNhgTJBgkFYQ1krcfKc%2B4Y91WwhlXCO%2F0lywyfMdHO0wAEzgVwOZDPTZsXtmDS8yhFyR9cy79WoxLU1JrotiHFjJYmuavBfvawx%2FcxfddlosPILgamMGmVzcLpvKgS4qnfXk1wAm3UwQB9yCRwbENKsD2wOhu2CLMDhHXHrUwUSbl%2F%2FTU4zMtDMpEA6AmMCPmg8%2B%2B1QY1Z8cUj5VmSbaE8seBYGyTIaDXfud8NitMVp2BB8VOiYHB%2FpFRUL1TzGceAvtNPsgKDd%2BEvijgVbW5IT1L5w84zUekPr0ThZ1NqapdGCOKSeeaf0eqV9YpHzFX2xDY9KxWRMRl9xw6%2BGL5pkuJmU1Q%2FxpCURvXAlAriMXpG9sZNj4oDvw%2Btwtfglr8Uv32zTfUc3Vpm%2Bf8LY0K1f9EVIzX0moLlOzCb%2FQOk%2F1xShaAvyT9P5x97i2GhwVCUlRgKcHg%2FHSt4tOAnHK%2BQi5tElBqgcKUkHGKFk4QP1Yuqmv8qppkVJNoVi5f6LS9%2Fy06dcnFvwUTM2345Oqgh9hfIlzlAY4DC08nRzX1kwnMTiyQY6pgH%2Fmz585VCyYG1fuHQm%2Fu5VemIa2c9VQm5ARm9IERbFF5XWAwIUbM6Gk0nwBZc4uBCbD%2Fm143B02Bk3QeWx%2F7gMABsl9eZsRcNLtqYACjlVU3RYOqQ9n%2BuqT5QqV9K22z9IiEwLkjY6bzcC4T%2BD7%2Bx1y6yBE2K5bFDiM0vbxjdapFM9cDubVqsnlHClyAsX%2FFKcl2LdMGj95aUQ1%2F7WwA%2FCmeAwdvl4&X-Amz-Signature=c80d6e577b12302d12653dd9b82e361c9fe7b0d48dcb1d5c9532e3f90dddb385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXTQK2Y%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAC78WaMU4lakx%2FN0DSAvSiKSpEJ7wAdGnxZfp4AzboiAiA4aoXIsEJjIWoP5U9h0VTNZLvQKuWJYAg%2FLSsdvRBoDSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCa6e41uNNTBHjcxAKtwDtP2UU024uynu%2Fx%2FGTSxsW9xe5PvJCpvaHYDfwVZbnpSpYN2uOkztcRZ%2B96miVPvowgeEPXy9WuT%2FzaIuVYHgqN0Njd5BVlszjk0XRBpkCJZdIDxUYVK0X4UMLfLKf0%2FY8CG0PdR%2F7mzuex0ZF5x72jZd%2FMAVD45m9EewkufZP%2FW9qdxgGnkKIajS5kfQLn8iMDLBXcK%2FvwChWWt2QXmblCtuHvjR90xdqK0K1b3tIW9c9cUhHQlJkntdR6kAWrqNCfUcmnmEuQllqEMSn2TD0VXqQC12v7uCLDCU4sZymeH0WRl9Gk67UzMFtIzzF%2Bp%2B5Uw19Wdbz53G5qJxxBn37WJsXofyAkzK6PUMCQqgIN7aKLx5kvzw6NKKF5VD7DKmjpfoNE42s5H0JyYVLLwlq5uz10GHS%2BtKbbYt8TF9aH5QGLVLaJ6opMpbMZf7GjYo16oQxLpta9gK4l1WWNK%2BYmYhufVY5KdaA%2B6hRdMPpP5fhX7fRJmH%2B%2B9AFjBRPZSQzg7PzXpOnHjqfH0otsDs%2FGXpmhLy3hADeGdPta7nhsyrCVjGvFAxT3Rw3M00BJ5TEsBQh3x%2FcH9r5DbDjlKNnygC5SbzXjUUgrV2l9vDViBTuEluYPwdYgDG2wwww8PiyQY6pgH%2Fa%2BNo84QX3eejp7EUe%2FbealT3p0FtHJVkqLvGilcEsIOwXDVK6BzJM9HAxpZSC212lS2Kf%2F1FrOwKwi%2B6mRH1nVM2UgigVjuXtQSZ%2FTOQUgNJT3lLYWJUqiNhRu4jsyjEX6v9ZkaFZ1SzlLmhr6IoRkEGkdGL%2FfJ%2BNSAG5DikKKsnBmCYdIUfF%2F2W2uerI1FLedjocwB0aHBQhE1Pmjouaj0roSuH&X-Amz-Signature=2ba7a873029cbfbdcb52240e66f508294640781a42d3687d4cda461d15e75939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675P2VZPK%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCjL8VfQLdjgSsA1U0TEZhP7H%2F2twPtVkgeQZBIk%2F5%2FAiAZ%2B%2BmwJpoYCnOnf8yV%2Fn6tibdxTuRfT7Paq8DBxJbvAyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTln7Usy63lCr6bbEKtwDlmdajDMJCZazYaYeyX4Wf8LDpd4fQ%2BBRe8VIeiypRzz1ZdIMTwvO2mG%2FExqGLNiSQgvN7FCdS8yJJbBglFyeRWi0WRCHPDAx95OFB1wlN65ft9FIOsDESUMcSFXfRI0YnwJ1z5H9BseTbcLnVni7HxmmGLiti5fXivQZ1NhDiOowOJlYINxKMKMJtuxX2aaWc072USum3arvEnI3i1REJV5lucJEI3GRPGCSU%2Bgl6fKcMPCXcfceJvJYPBJm5CBZlB%2FIgPs4LWPlClD%2BxXY4FDVrcBRyJTLMI6BsjQzxH%2Fi9MyIaqv%2FsFDtg6671toHjNhIfm6abdHSJB7ipDjPr4wIIxbyRVvf3kG68XFxOOangV0eK9byfWnGmQUaGiTwS8flbDqK67bDMAa7X9798wFZw1TNHDBzpYfmS%2BFYzRJBWcVCC2hGJ4bF9rFcHM4D%2BCkLXN561%2B22kEyyM8HSEvFwLIyR4lG04WUUnbCG59g8cuqULsiNgm1XEo7HZiqNOCwa7WYl0g6Qh3CpDVuERT4jJnbiNEKiY6b0b1HXzHSCewRDnmsvscGsc0IQx5PC%2BCF37z8sns2k4Orvh4ZrNRTGHYzl32kX6z4wVQvpes2nHKaUXg2lcGL3R2isw6sPiyQY6pgEyn2k5tCBDqoxHfFW1d5%2BzTxvwkDProRnX2qCxqVf6kXb22Sr8KjFEVCkyHpK%2BFqEY8DmmhuS8AGcT0CkVeBHswD3PoRcIHTvWNK%2Bf1psvEwSMft2mEIlpX3oeRPnMWiKWeiMtWV4sem4GsPWIf8pEHl0YzXOgeTMgVh82NJ1TbClb1wY1WJEL5eoDKhoyKmFNU2qU7QNKt%2BCI1R6XlqC5RG4BZekm&X-Amz-Signature=dcf97b167e2c0b545721c83741bd5d74e8c8a664ccc5a514123454fd23aaff3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FT4ZXM%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4e%2FLprgEIXAdjRbpnDQ8JPl1hpMXluYCQw5WGZE%2BWsAiEAodokM6viesdjRoiF4DX%2Fjq1UqTX3hUH%2FSZIFPOPQlOMqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGaAa9GdlimMq1lASrcA2FQuU2cLiuvE0nIG6EAJOHauVQxs9ZHFmupsi0yxAN6EAADWXTZ5l%2FktKqohfqcWsrEagWviIX4oVA%2FkMsoMC2rHbPP3YZLNzLiFQCcOotLwK8krJyi5CG%2BMBwWeuVC2bg15wCGVUOieC6034K%2FsL5cMkqwvkqMpr%2FU%2F1fXok2LHgD5soImGz4o63j6JpMtB8XgoNcm0PG%2BuQy8vzFiOrQoUo6xwd8Q4c5M8ZloBMCjM4AN2J%2BqRsWqjv00Hh%2BQrhcN3JeBdJaixaHjL32MlSUZ4qMe5YR8OtjWeMp7waO0sd%2By%2FNx%2B97uzfZA6W9nKWuCZZOWEW9nly6r7qycRFyZ5k9CDK0oRcG83wdjQAYJGDHQYitZAOL50Lkfl%2Fk7MVY3jOg59utNS0D84tMOao8upqQ5L7M%2FM8ZdEj4bgCyk4CzKSqbwLIJEAIep9fgWYwoWs9n1cJ4vPP%2Bau2cVsHdd1CCDO8e2rge%2FStDuSm3KpH14bJbdDAdJLSizM9WJmVv45c4XkMYJ4B8D4ZCxiwY%2B%2F1SQbgditcsIsKTFsTM23dy8YFAw9i3Y%2BwvWmP5hc9ggh%2FpJRG1pgFknJHDtlsOEkPkMo1GLR%2BUEdjZDi7l4UGpWaFD91k49V%2F3%2BkMNbD4skGOqUBGiqWT5TwEVm%2FCWPCdl6k0RYyu6WNrzJynlXyrMoOKU0MvGXh26q1KEPZPjSnQqYF8lBZXZrrEoWOlIMgMAfvc3xReE16FQfBWeo%2B5xAqo3W1KVhD1EBuToHG4PhoUzvfE%2BkaOTsTzsONhX%2FC9HJHrufBqwZEsyRpdA7%2FBvTK8FNAIgdnSTSa%2BOBARAVjFMinB3BbFkMUgG5%2FlIYJQqV4UwkDg0qT&X-Amz-Signature=8ae7fc0ad2600cfb93991d19cec4d03b37fe15e29f26a0d72bad5f62af3b16bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNLEONDM%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsRQfU2X45EcKjk%2F%2Bae3RUTSuVXI%2Fc8JdeGbF4kNiWygIhAPh21d0JoJhyf00WMZnC6ZdE%2FOmS9LhuOmv9DZpcofgRKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzymKuL%2F5ua9t%2Fbo6Iq3APOwU1VZJo0rFS4pe5TlrqDFkoceEutAHNAQuYdewEtOgYNg7boTpVwRnBVAkySzQJ%2BWGqZHPPhY6wLMZcsa48%2BssX%2B0%2F%2BBt4z6S38lgLyVg3p%2FV5Lhu8D%2Bto%2FuR5M7jxmd%2FxvDaCkXGk3a5Hlft8R9nTfVLMO1AlH3JqG9GUDtv96r0bjPuqNaCxDdebDkR6GpLPpF0VcPDdgbcYIhDKuVYr5IuqjrxhN%2FGABV%2FBfKnpyAdViYo6RbXo0s06nsxfwjS9SWV6WhVBow04lBEt%2Fx7Ow%2BQ%2BJMvoJd6eT26MrmX7M%2FZW7yaHrdfu7Ed186CC8hqcza%2FBeTtnxp%2Bgnj9mrb%2FPRbBxm9b%2FurXh7ZH2xBatZjVdAh5ucF5T6nqI7IjO%2FHCXrAaR4Qmxp2lU3VwjKAvmVwfyIzq%2F7RyDrC2W41N4PBC8WiNf7smfqFodaANft0OAsJEFraLpW1dTguSHhNX%2BupPnsB1ZHjV1yX5Gow1GO5p01BoH1Hnq0zus3UhXSkb4tDfozL1%2BVBs%2BrfmL2OZajIVF5DdxNYgV1GDIHO1hd1bQB2nlKNweSxnLN4IO32FnnaPwnByPImiOVNWTNdIx%2BUce1r2TximZZryANuqvpXA2fBI7dMZOlumDC7w%2BLJBjqkAeHtrnn3%2F%2FdLTB1Aq9j6Of5EmumS1ZDN8sP0YVaQjaxflVVej2PsBBg9bSwPBhth74zJO8zwAeP%2BFQHydw0lmtNJ0gN7y3LPDuUMwp%2BqOtYShb6kg5WT1qFrzBiXpzeNPOwaHpjX6XtYbtCOXSyy%2FSF30GjfddsHHvEteOaz%2BaYsYmq9lf43S6OA40sqA0%2FoblL4SHo8216%2BRKLKQ485Cwr%2FsVBx&X-Amz-Signature=9cc0737278f1473142eaf23233eec70ecddabaa991aa2e38e7fce4b0a9b48121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXTQK2Y%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAC78WaMU4lakx%2FN0DSAvSiKSpEJ7wAdGnxZfp4AzboiAiA4aoXIsEJjIWoP5U9h0VTNZLvQKuWJYAg%2FLSsdvRBoDSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCa6e41uNNTBHjcxAKtwDtP2UU024uynu%2Fx%2FGTSxsW9xe5PvJCpvaHYDfwVZbnpSpYN2uOkztcRZ%2B96miVPvowgeEPXy9WuT%2FzaIuVYHgqN0Njd5BVlszjk0XRBpkCJZdIDxUYVK0X4UMLfLKf0%2FY8CG0PdR%2F7mzuex0ZF5x72jZd%2FMAVD45m9EewkufZP%2FW9qdxgGnkKIajS5kfQLn8iMDLBXcK%2FvwChWWt2QXmblCtuHvjR90xdqK0K1b3tIW9c9cUhHQlJkntdR6kAWrqNCfUcmnmEuQllqEMSn2TD0VXqQC12v7uCLDCU4sZymeH0WRl9Gk67UzMFtIzzF%2Bp%2B5Uw19Wdbz53G5qJxxBn37WJsXofyAkzK6PUMCQqgIN7aKLx5kvzw6NKKF5VD7DKmjpfoNE42s5H0JyYVLLwlq5uz10GHS%2BtKbbYt8TF9aH5QGLVLaJ6opMpbMZf7GjYo16oQxLpta9gK4l1WWNK%2BYmYhufVY5KdaA%2B6hRdMPpP5fhX7fRJmH%2B%2B9AFjBRPZSQzg7PzXpOnHjqfH0otsDs%2FGXpmhLy3hADeGdPta7nhsyrCVjGvFAxT3Rw3M00BJ5TEsBQh3x%2FcH9r5DbDjlKNnygC5SbzXjUUgrV2l9vDViBTuEluYPwdYgDG2wwww8PiyQY6pgH%2Fa%2BNo84QX3eejp7EUe%2FbealT3p0FtHJVkqLvGilcEsIOwXDVK6BzJM9HAxpZSC212lS2Kf%2F1FrOwKwi%2B6mRH1nVM2UgigVjuXtQSZ%2FTOQUgNJT3lLYWJUqiNhRu4jsyjEX6v9ZkaFZ1SzlLmhr6IoRkEGkdGL%2FfJ%2BNSAG5DikKKsnBmCYdIUfF%2F2W2uerI1FLedjocwB0aHBQhE1Pmjouaj0roSuH&X-Amz-Signature=9772748ba1374e02b4836a986ac075fb03f40e298fbce959e72cdbfdf2cb3046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXTQK2Y%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAC78WaMU4lakx%2FN0DSAvSiKSpEJ7wAdGnxZfp4AzboiAiA4aoXIsEJjIWoP5U9h0VTNZLvQKuWJYAg%2FLSsdvRBoDSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCa6e41uNNTBHjcxAKtwDtP2UU024uynu%2Fx%2FGTSxsW9xe5PvJCpvaHYDfwVZbnpSpYN2uOkztcRZ%2B96miVPvowgeEPXy9WuT%2FzaIuVYHgqN0Njd5BVlszjk0XRBpkCJZdIDxUYVK0X4UMLfLKf0%2FY8CG0PdR%2F7mzuex0ZF5x72jZd%2FMAVD45m9EewkufZP%2FW9qdxgGnkKIajS5kfQLn8iMDLBXcK%2FvwChWWt2QXmblCtuHvjR90xdqK0K1b3tIW9c9cUhHQlJkntdR6kAWrqNCfUcmnmEuQllqEMSn2TD0VXqQC12v7uCLDCU4sZymeH0WRl9Gk67UzMFtIzzF%2Bp%2B5Uw19Wdbz53G5qJxxBn37WJsXofyAkzK6PUMCQqgIN7aKLx5kvzw6NKKF5VD7DKmjpfoNE42s5H0JyYVLLwlq5uz10GHS%2BtKbbYt8TF9aH5QGLVLaJ6opMpbMZf7GjYo16oQxLpta9gK4l1WWNK%2BYmYhufVY5KdaA%2B6hRdMPpP5fhX7fRJmH%2B%2B9AFjBRPZSQzg7PzXpOnHjqfH0otsDs%2FGXpmhLy3hADeGdPta7nhsyrCVjGvFAxT3Rw3M00BJ5TEsBQh3x%2FcH9r5DbDjlKNnygC5SbzXjUUgrV2l9vDViBTuEluYPwdYgDG2wwww8PiyQY6pgH%2Fa%2BNo84QX3eejp7EUe%2FbealT3p0FtHJVkqLvGilcEsIOwXDVK6BzJM9HAxpZSC212lS2Kf%2F1FrOwKwi%2B6mRH1nVM2UgigVjuXtQSZ%2FTOQUgNJT3lLYWJUqiNhRu4jsyjEX6v9ZkaFZ1SzlLmhr6IoRkEGkdGL%2FfJ%2BNSAG5DikKKsnBmCYdIUfF%2F2W2uerI1FLedjocwB0aHBQhE1Pmjouaj0roSuH&X-Amz-Signature=77c4de936104fe0b28c19bd7b1a4beeda323b1b53e15274a44955b3509461852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEXLK6YM%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa%2FO0307vFIW3p7TW%2B8K7CSXFnClCWQOw8YN1%2FKXWlBgIhAJvZe6maa8MBtQDqbefxFdYzAMHLCGeNalE5NSMFy3sEKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbvjpAPrSVkU02HNQq3APk4GkYD0aaYhxoD2vb1JEQAACuvTlfyvCkk1XkVAfmyqwXJXmqJpsD45bOuCenPDekiTdaJK9Otd8IXb1AXKMFwc%2FfrfLewc0f36x4Fb%2FYrzEq8Wdca40Eu4do82Y067BtgQgVp6yUEjYXX1oRxe2AVzeOh38wJiwJiml5bPp3cgJS0WDv1a3HWJEJpn2XXkCSe%2F2%2B4uL71lZidjBcBedIgiehlgQvxEIGHHfq1J1XqlCXiSe9NFQXZxAskn%2F6zzv%2Bj2CoLnLiwLRLXQ4B%2FGmbY%2Fo%2BalEkm0o0zPKCff8%2B7y85M4IJV94QDPZH8AqQPB8Y6D8wdUls7ifPxZHzFYtVFUXjZkZ3McXe%2F5QRU4zt%2BavZPpqOFVuLA6w6SgUSGRSblQEZkRecVl0YDaJjLekFQgABoof2d6PSEQe809uuQvNa4pgugqXdsGsbhD%2Bu39qQWgAhx6AHEwmbVRABXp6AJdxou50Yf55%2Bktt05lHwgpriVkVY%2BDHeOr4yWqSXtHbBWChyAZuIMRoBZpyP3Dn3ujqU41GlZ1w%2BzHHufXxL2KFQcvX4F2taY%2Bd56s2Rg%2Bqn89DgBO2eAe6NzB9FMs5wnKnZJeYjqf7HYi3VgpSysl3aBoOPnPDXLEOaKTCIw%2BLJBjqkAWX6a6SoJ1Clq1HPOEB7kOrXUv1XbKXjvwn%2BO8glPE8RkQLs4CHzKYYhsNilD2%2FYDpdEW3C5loVW4bXlXw1%2BuhndGw5RYmXBveenjXvOzZEYxVckNjXoeEh3VxZ3zirdzy4u4CM0MGvh4tw7tERvKSHqwXq4V84VDRo2oLhb6Pz5I9FdBoIGJVTbZ1A2b%2BYQRRh8wWicOkPJb7oAf%2Bx7Y4WMuSMu&X-Amz-Signature=4e6b74e9dd46c12e3df19a7a322168d06028805843661cee05dafb17aca0181b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEXLK6YM%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa%2FO0307vFIW3p7TW%2B8K7CSXFnClCWQOw8YN1%2FKXWlBgIhAJvZe6maa8MBtQDqbefxFdYzAMHLCGeNalE5NSMFy3sEKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbvjpAPrSVkU02HNQq3APk4GkYD0aaYhxoD2vb1JEQAACuvTlfyvCkk1XkVAfmyqwXJXmqJpsD45bOuCenPDekiTdaJK9Otd8IXb1AXKMFwc%2FfrfLewc0f36x4Fb%2FYrzEq8Wdca40Eu4do82Y067BtgQgVp6yUEjYXX1oRxe2AVzeOh38wJiwJiml5bPp3cgJS0WDv1a3HWJEJpn2XXkCSe%2F2%2B4uL71lZidjBcBedIgiehlgQvxEIGHHfq1J1XqlCXiSe9NFQXZxAskn%2F6zzv%2Bj2CoLnLiwLRLXQ4B%2FGmbY%2Fo%2BalEkm0o0zPKCff8%2B7y85M4IJV94QDPZH8AqQPB8Y6D8wdUls7ifPxZHzFYtVFUXjZkZ3McXe%2F5QRU4zt%2BavZPpqOFVuLA6w6SgUSGRSblQEZkRecVl0YDaJjLekFQgABoof2d6PSEQe809uuQvNa4pgugqXdsGsbhD%2Bu39qQWgAhx6AHEwmbVRABXp6AJdxou50Yf55%2Bktt05lHwgpriVkVY%2BDHeOr4yWqSXtHbBWChyAZuIMRoBZpyP3Dn3ujqU41GlZ1w%2BzHHufXxL2KFQcvX4F2taY%2Bd56s2Rg%2Bqn89DgBO2eAe6NzB9FMs5wnKnZJeYjqf7HYi3VgpSysl3aBoOPnPDXLEOaKTCIw%2BLJBjqkAWX6a6SoJ1Clq1HPOEB7kOrXUv1XbKXjvwn%2BO8glPE8RkQLs4CHzKYYhsNilD2%2FYDpdEW3C5loVW4bXlXw1%2BuhndGw5RYmXBveenjXvOzZEYxVckNjXoeEh3VxZ3zirdzy4u4CM0MGvh4tw7tERvKSHqwXq4V84VDRo2oLhb6Pz5I9FdBoIGJVTbZ1A2b%2BYQRRh8wWicOkPJb7oAf%2Bx7Y4WMuSMu&X-Amz-Signature=5e83e587f4cb747c64f2ee5ca7da382fe3b6f84ef02303cd395a7a3c42024a04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEXLK6YM%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa%2FO0307vFIW3p7TW%2B8K7CSXFnClCWQOw8YN1%2FKXWlBgIhAJvZe6maa8MBtQDqbefxFdYzAMHLCGeNalE5NSMFy3sEKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbvjpAPrSVkU02HNQq3APk4GkYD0aaYhxoD2vb1JEQAACuvTlfyvCkk1XkVAfmyqwXJXmqJpsD45bOuCenPDekiTdaJK9Otd8IXb1AXKMFwc%2FfrfLewc0f36x4Fb%2FYrzEq8Wdca40Eu4do82Y067BtgQgVp6yUEjYXX1oRxe2AVzeOh38wJiwJiml5bPp3cgJS0WDv1a3HWJEJpn2XXkCSe%2F2%2B4uL71lZidjBcBedIgiehlgQvxEIGHHfq1J1XqlCXiSe9NFQXZxAskn%2F6zzv%2Bj2CoLnLiwLRLXQ4B%2FGmbY%2Fo%2BalEkm0o0zPKCff8%2B7y85M4IJV94QDPZH8AqQPB8Y6D8wdUls7ifPxZHzFYtVFUXjZkZ3McXe%2F5QRU4zt%2BavZPpqOFVuLA6w6SgUSGRSblQEZkRecVl0YDaJjLekFQgABoof2d6PSEQe809uuQvNa4pgugqXdsGsbhD%2Bu39qQWgAhx6AHEwmbVRABXp6AJdxou50Yf55%2Bktt05lHwgpriVkVY%2BDHeOr4yWqSXtHbBWChyAZuIMRoBZpyP3Dn3ujqU41GlZ1w%2BzHHufXxL2KFQcvX4F2taY%2Bd56s2Rg%2Bqn89DgBO2eAe6NzB9FMs5wnKnZJeYjqf7HYi3VgpSysl3aBoOPnPDXLEOaKTCIw%2BLJBjqkAWX6a6SoJ1Clq1HPOEB7kOrXUv1XbKXjvwn%2BO8glPE8RkQLs4CHzKYYhsNilD2%2FYDpdEW3C5loVW4bXlXw1%2BuhndGw5RYmXBveenjXvOzZEYxVckNjXoeEh3VxZ3zirdzy4u4CM0MGvh4tw7tERvKSHqwXq4V84VDRo2oLhb6Pz5I9FdBoIGJVTbZ1A2b%2BYQRRh8wWicOkPJb7oAf%2Bx7Y4WMuSMu&X-Amz-Signature=f58cf43eb5a6660c0208d2d21b71fd0802e2bda8b158175aae49569f8c3035c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEXLK6YM%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa%2FO0307vFIW3p7TW%2B8K7CSXFnClCWQOw8YN1%2FKXWlBgIhAJvZe6maa8MBtQDqbefxFdYzAMHLCGeNalE5NSMFy3sEKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbvjpAPrSVkU02HNQq3APk4GkYD0aaYhxoD2vb1JEQAACuvTlfyvCkk1XkVAfmyqwXJXmqJpsD45bOuCenPDekiTdaJK9Otd8IXb1AXKMFwc%2FfrfLewc0f36x4Fb%2FYrzEq8Wdca40Eu4do82Y067BtgQgVp6yUEjYXX1oRxe2AVzeOh38wJiwJiml5bPp3cgJS0WDv1a3HWJEJpn2XXkCSe%2F2%2B4uL71lZidjBcBedIgiehlgQvxEIGHHfq1J1XqlCXiSe9NFQXZxAskn%2F6zzv%2Bj2CoLnLiwLRLXQ4B%2FGmbY%2Fo%2BalEkm0o0zPKCff8%2B7y85M4IJV94QDPZH8AqQPB8Y6D8wdUls7ifPxZHzFYtVFUXjZkZ3McXe%2F5QRU4zt%2BavZPpqOFVuLA6w6SgUSGRSblQEZkRecVl0YDaJjLekFQgABoof2d6PSEQe809uuQvNa4pgugqXdsGsbhD%2Bu39qQWgAhx6AHEwmbVRABXp6AJdxou50Yf55%2Bktt05lHwgpriVkVY%2BDHeOr4yWqSXtHbBWChyAZuIMRoBZpyP3Dn3ujqU41GlZ1w%2BzHHufXxL2KFQcvX4F2taY%2Bd56s2Rg%2Bqn89DgBO2eAe6NzB9FMs5wnKnZJeYjqf7HYi3VgpSysl3aBoOPnPDXLEOaKTCIw%2BLJBjqkAWX6a6SoJ1Clq1HPOEB7kOrXUv1XbKXjvwn%2BO8glPE8RkQLs4CHzKYYhsNilD2%2FYDpdEW3C5loVW4bXlXw1%2BuhndGw5RYmXBveenjXvOzZEYxVckNjXoeEh3VxZ3zirdzy4u4CM0MGvh4tw7tERvKSHqwXq4V84VDRo2oLhb6Pz5I9FdBoIGJVTbZ1A2b%2BYQRRh8wWicOkPJb7oAf%2Bx7Y4WMuSMu&X-Amz-Signature=2e97440e53b70ad7de7ad9abe7b0c4d097ab0ff6f82c897ff5ec5f05980e0d12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3T4QTYC%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTrH2UHdUuJ%2F1Iqs0Y8SCSn4oH126VRQ94iKYV6jGL6AiBPGCHCZATN9KK%2B9cbJoxI8qi6O1c6dfry%2BBjsIY8RswiqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPoIfpTlT5wP7Lar%2BKtwDeLFGkH4Yu8P9nbycH550piHIjVbp6D56NQg2Rgf0T1ENTr3AANdLgkvgom2BnfhfhJ7t0aXz17P8BfmklT42a9ffSrWWxHwS3qt18GzuMHYPn%2BmRP%2BemWsCOYevhfTGJWdXtfkZicDpB1gsOJ0lcem2%2FPHZ4VZVLt0UP0Me%2BWpXDM3mlr74rjjTa2bkg26xGW7OvmrPsdDNg%2B8IXqAfnyXSrSI4lv6O9Vsl3C3BvaKB7UNTaIoo40WfJJpA%2BS7iZebogUjOj1ddWexf3T3C4qIEoRf7qYK8na1Ojm8E3pOrkc8gT%2FDRuWV%2F5jCTqf4OFVyKhXrjorlQX5%2BDHTNQxgiUDL8s2uMUnGtPRdbMwda22whrl0aI97vvzPmK3PYfxDpRskuEJbFRLRA3MjnNAr%2FjEPc%2BajjpL%2FDVQwndmaR0OVU7H9pillMdJe00CB9kAnwmZXT1Ypln3MUrlzv4Q2E7nxPToAOVFehGD6q6BlIhv7mWVKrba04HTFqKThXtBPtPyzRavFPxp%2BQVK0LldWimJrrTvsM8TuxrmSTMF6FE2JD5D4moBdM5Xa4P4pPUsIFWBhQ3BI%2FUKqSwQohjA7Pa3aC9X6u4CLHNGiu8xO4t3qCOYnk4Z5Jo1sjEw98PiyQY6pgHtZSN8D5hhxqYbdY5fjQ6vdafn4sM7tu0%2Bcb%2FYx1EJc0vi9dHp9s0XhWu%2BOEh3Iiknloui5A%2F9PujjeE%2BgvY%2Fxb09Jk2uQdmSFkz%2Bv9s6w5nif4v%2FttE6ouESMkj3rVu08wmgTytz%2FATMWmGFhO5I9ro1IBsqo11cUpWv2TyYdFe4E%2BfjrA7uwbVE6mlr4bZjDMKk5CKICOAG2uYvHdt0rNDvYiIJk&X-Amz-Signature=9ef77b4e8fee672b9c41fb59f16ca5d899fa3730fe0ea9a0a3994abc9c0b9388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEXLK6YM%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa%2FO0307vFIW3p7TW%2B8K7CSXFnClCWQOw8YN1%2FKXWlBgIhAJvZe6maa8MBtQDqbefxFdYzAMHLCGeNalE5NSMFy3sEKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbvjpAPrSVkU02HNQq3APk4GkYD0aaYhxoD2vb1JEQAACuvTlfyvCkk1XkVAfmyqwXJXmqJpsD45bOuCenPDekiTdaJK9Otd8IXb1AXKMFwc%2FfrfLewc0f36x4Fb%2FYrzEq8Wdca40Eu4do82Y067BtgQgVp6yUEjYXX1oRxe2AVzeOh38wJiwJiml5bPp3cgJS0WDv1a3HWJEJpn2XXkCSe%2F2%2B4uL71lZidjBcBedIgiehlgQvxEIGHHfq1J1XqlCXiSe9NFQXZxAskn%2F6zzv%2Bj2CoLnLiwLRLXQ4B%2FGmbY%2Fo%2BalEkm0o0zPKCff8%2B7y85M4IJV94QDPZH8AqQPB8Y6D8wdUls7ifPxZHzFYtVFUXjZkZ3McXe%2F5QRU4zt%2BavZPpqOFVuLA6w6SgUSGRSblQEZkRecVl0YDaJjLekFQgABoof2d6PSEQe809uuQvNa4pgugqXdsGsbhD%2Bu39qQWgAhx6AHEwmbVRABXp6AJdxou50Yf55%2Bktt05lHwgpriVkVY%2BDHeOr4yWqSXtHbBWChyAZuIMRoBZpyP3Dn3ujqU41GlZ1w%2BzHHufXxL2KFQcvX4F2taY%2Bd56s2Rg%2Bqn89DgBO2eAe6NzB9FMs5wnKnZJeYjqf7HYi3VgpSysl3aBoOPnPDXLEOaKTCIw%2BLJBjqkAWX6a6SoJ1Clq1HPOEB7kOrXUv1XbKXjvwn%2BO8glPE8RkQLs4CHzKYYhsNilD2%2FYDpdEW3C5loVW4bXlXw1%2BuhndGw5RYmXBveenjXvOzZEYxVckNjXoeEh3VxZ3zirdzy4u4CM0MGvh4tw7tERvKSHqwXq4V84VDRo2oLhb6Pz5I9FdBoIGJVTbZ1A2b%2BYQRRh8wWicOkPJb7oAf%2Bx7Y4WMuSMu&X-Amz-Signature=133ceab97c5fc8f168a6719177c4e3512c6f90341fd0cc0f31b5fcc7262dcfab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEXLK6YM%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa%2FO0307vFIW3p7TW%2B8K7CSXFnClCWQOw8YN1%2FKXWlBgIhAJvZe6maa8MBtQDqbefxFdYzAMHLCGeNalE5NSMFy3sEKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbvjpAPrSVkU02HNQq3APk4GkYD0aaYhxoD2vb1JEQAACuvTlfyvCkk1XkVAfmyqwXJXmqJpsD45bOuCenPDekiTdaJK9Otd8IXb1AXKMFwc%2FfrfLewc0f36x4Fb%2FYrzEq8Wdca40Eu4do82Y067BtgQgVp6yUEjYXX1oRxe2AVzeOh38wJiwJiml5bPp3cgJS0WDv1a3HWJEJpn2XXkCSe%2F2%2B4uL71lZidjBcBedIgiehlgQvxEIGHHfq1J1XqlCXiSe9NFQXZxAskn%2F6zzv%2Bj2CoLnLiwLRLXQ4B%2FGmbY%2Fo%2BalEkm0o0zPKCff8%2B7y85M4IJV94QDPZH8AqQPB8Y6D8wdUls7ifPxZHzFYtVFUXjZkZ3McXe%2F5QRU4zt%2BavZPpqOFVuLA6w6SgUSGRSblQEZkRecVl0YDaJjLekFQgABoof2d6PSEQe809uuQvNa4pgugqXdsGsbhD%2Bu39qQWgAhx6AHEwmbVRABXp6AJdxou50Yf55%2Bktt05lHwgpriVkVY%2BDHeOr4yWqSXtHbBWChyAZuIMRoBZpyP3Dn3ujqU41GlZ1w%2BzHHufXxL2KFQcvX4F2taY%2Bd56s2Rg%2Bqn89DgBO2eAe6NzB9FMs5wnKnZJeYjqf7HYi3VgpSysl3aBoOPnPDXLEOaKTCIw%2BLJBjqkAWX6a6SoJ1Clq1HPOEB7kOrXUv1XbKXjvwn%2BO8glPE8RkQLs4CHzKYYhsNilD2%2FYDpdEW3C5loVW4bXlXw1%2BuhndGw5RYmXBveenjXvOzZEYxVckNjXoeEh3VxZ3zirdzy4u4CM0MGvh4tw7tERvKSHqwXq4V84VDRo2oLhb6Pz5I9FdBoIGJVTbZ1A2b%2BYQRRh8wWicOkPJb7oAf%2Bx7Y4WMuSMu&X-Amz-Signature=0da405f6f7dbe29c356086afef9a9900a33bd3c1bf5c02678912be76a52ea4b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEXLK6YM%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa%2FO0307vFIW3p7TW%2B8K7CSXFnClCWQOw8YN1%2FKXWlBgIhAJvZe6maa8MBtQDqbefxFdYzAMHLCGeNalE5NSMFy3sEKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbvjpAPrSVkU02HNQq3APk4GkYD0aaYhxoD2vb1JEQAACuvTlfyvCkk1XkVAfmyqwXJXmqJpsD45bOuCenPDekiTdaJK9Otd8IXb1AXKMFwc%2FfrfLewc0f36x4Fb%2FYrzEq8Wdca40Eu4do82Y067BtgQgVp6yUEjYXX1oRxe2AVzeOh38wJiwJiml5bPp3cgJS0WDv1a3HWJEJpn2XXkCSe%2F2%2B4uL71lZidjBcBedIgiehlgQvxEIGHHfq1J1XqlCXiSe9NFQXZxAskn%2F6zzv%2Bj2CoLnLiwLRLXQ4B%2FGmbY%2Fo%2BalEkm0o0zPKCff8%2B7y85M4IJV94QDPZH8AqQPB8Y6D8wdUls7ifPxZHzFYtVFUXjZkZ3McXe%2F5QRU4zt%2BavZPpqOFVuLA6w6SgUSGRSblQEZkRecVl0YDaJjLekFQgABoof2d6PSEQe809uuQvNa4pgugqXdsGsbhD%2Bu39qQWgAhx6AHEwmbVRABXp6AJdxou50Yf55%2Bktt05lHwgpriVkVY%2BDHeOr4yWqSXtHbBWChyAZuIMRoBZpyP3Dn3ujqU41GlZ1w%2BzHHufXxL2KFQcvX4F2taY%2Bd56s2Rg%2Bqn89DgBO2eAe6NzB9FMs5wnKnZJeYjqf7HYi3VgpSysl3aBoOPnPDXLEOaKTCIw%2BLJBjqkAWX6a6SoJ1Clq1HPOEB7kOrXUv1XbKXjvwn%2BO8glPE8RkQLs4CHzKYYhsNilD2%2FYDpdEW3C5loVW4bXlXw1%2BuhndGw5RYmXBveenjXvOzZEYxVckNjXoeEh3VxZ3zirdzy4u4CM0MGvh4tw7tERvKSHqwXq4V84VDRo2oLhb6Pz5I9FdBoIGJVTbZ1A2b%2BYQRRh8wWicOkPJb7oAf%2Bx7Y4WMuSMu&X-Amz-Signature=f58cf43eb5a6660c0208d2d21b71fd0802e2bda8b158175aae49569f8c3035c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEXLK6YM%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa%2FO0307vFIW3p7TW%2B8K7CSXFnClCWQOw8YN1%2FKXWlBgIhAJvZe6maa8MBtQDqbefxFdYzAMHLCGeNalE5NSMFy3sEKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbvjpAPrSVkU02HNQq3APk4GkYD0aaYhxoD2vb1JEQAACuvTlfyvCkk1XkVAfmyqwXJXmqJpsD45bOuCenPDekiTdaJK9Otd8IXb1AXKMFwc%2FfrfLewc0f36x4Fb%2FYrzEq8Wdca40Eu4do82Y067BtgQgVp6yUEjYXX1oRxe2AVzeOh38wJiwJiml5bPp3cgJS0WDv1a3HWJEJpn2XXkCSe%2F2%2B4uL71lZidjBcBedIgiehlgQvxEIGHHfq1J1XqlCXiSe9NFQXZxAskn%2F6zzv%2Bj2CoLnLiwLRLXQ4B%2FGmbY%2Fo%2BalEkm0o0zPKCff8%2B7y85M4IJV94QDPZH8AqQPB8Y6D8wdUls7ifPxZHzFYtVFUXjZkZ3McXe%2F5QRU4zt%2BavZPpqOFVuLA6w6SgUSGRSblQEZkRecVl0YDaJjLekFQgABoof2d6PSEQe809uuQvNa4pgugqXdsGsbhD%2Bu39qQWgAhx6AHEwmbVRABXp6AJdxou50Yf55%2Bktt05lHwgpriVkVY%2BDHeOr4yWqSXtHbBWChyAZuIMRoBZpyP3Dn3ujqU41GlZ1w%2BzHHufXxL2KFQcvX4F2taY%2Bd56s2Rg%2Bqn89DgBO2eAe6NzB9FMs5wnKnZJeYjqf7HYi3VgpSysl3aBoOPnPDXLEOaKTCIw%2BLJBjqkAWX6a6SoJ1Clq1HPOEB7kOrXUv1XbKXjvwn%2BO8glPE8RkQLs4CHzKYYhsNilD2%2FYDpdEW3C5loVW4bXlXw1%2BuhndGw5RYmXBveenjXvOzZEYxVckNjXoeEh3VxZ3zirdzy4u4CM0MGvh4tw7tERvKSHqwXq4V84VDRo2oLhb6Pz5I9FdBoIGJVTbZ1A2b%2BYQRRh8wWicOkPJb7oAf%2Bx7Y4WMuSMu&X-Amz-Signature=95a8a61cfb657862e8a8cd4c4c7730c144b77484233d0e334f526781694915e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEXLK6YM%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa%2FO0307vFIW3p7TW%2B8K7CSXFnClCWQOw8YN1%2FKXWlBgIhAJvZe6maa8MBtQDqbefxFdYzAMHLCGeNalE5NSMFy3sEKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbvjpAPrSVkU02HNQq3APk4GkYD0aaYhxoD2vb1JEQAACuvTlfyvCkk1XkVAfmyqwXJXmqJpsD45bOuCenPDekiTdaJK9Otd8IXb1AXKMFwc%2FfrfLewc0f36x4Fb%2FYrzEq8Wdca40Eu4do82Y067BtgQgVp6yUEjYXX1oRxe2AVzeOh38wJiwJiml5bPp3cgJS0WDv1a3HWJEJpn2XXkCSe%2F2%2B4uL71lZidjBcBedIgiehlgQvxEIGHHfq1J1XqlCXiSe9NFQXZxAskn%2F6zzv%2Bj2CoLnLiwLRLXQ4B%2FGmbY%2Fo%2BalEkm0o0zPKCff8%2B7y85M4IJV94QDPZH8AqQPB8Y6D8wdUls7ifPxZHzFYtVFUXjZkZ3McXe%2F5QRU4zt%2BavZPpqOFVuLA6w6SgUSGRSblQEZkRecVl0YDaJjLekFQgABoof2d6PSEQe809uuQvNa4pgugqXdsGsbhD%2Bu39qQWgAhx6AHEwmbVRABXp6AJdxou50Yf55%2Bktt05lHwgpriVkVY%2BDHeOr4yWqSXtHbBWChyAZuIMRoBZpyP3Dn3ujqU41GlZ1w%2BzHHufXxL2KFQcvX4F2taY%2Bd56s2Rg%2Bqn89DgBO2eAe6NzB9FMs5wnKnZJeYjqf7HYi3VgpSysl3aBoOPnPDXLEOaKTCIw%2BLJBjqkAWX6a6SoJ1Clq1HPOEB7kOrXUv1XbKXjvwn%2BO8glPE8RkQLs4CHzKYYhsNilD2%2FYDpdEW3C5loVW4bXlXw1%2BuhndGw5RYmXBveenjXvOzZEYxVckNjXoeEh3VxZ3zirdzy4u4CM0MGvh4tw7tERvKSHqwXq4V84VDRo2oLhb6Pz5I9FdBoIGJVTbZ1A2b%2BYQRRh8wWicOkPJb7oAf%2Bx7Y4WMuSMu&X-Amz-Signature=f9868669ca5a57e180bb253128f1afa221cdc9d7fb72ca311e2b20c965f13792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEXLK6YM%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa%2FO0307vFIW3p7TW%2B8K7CSXFnClCWQOw8YN1%2FKXWlBgIhAJvZe6maa8MBtQDqbefxFdYzAMHLCGeNalE5NSMFy3sEKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbvjpAPrSVkU02HNQq3APk4GkYD0aaYhxoD2vb1JEQAACuvTlfyvCkk1XkVAfmyqwXJXmqJpsD45bOuCenPDekiTdaJK9Otd8IXb1AXKMFwc%2FfrfLewc0f36x4Fb%2FYrzEq8Wdca40Eu4do82Y067BtgQgVp6yUEjYXX1oRxe2AVzeOh38wJiwJiml5bPp3cgJS0WDv1a3HWJEJpn2XXkCSe%2F2%2B4uL71lZidjBcBedIgiehlgQvxEIGHHfq1J1XqlCXiSe9NFQXZxAskn%2F6zzv%2Bj2CoLnLiwLRLXQ4B%2FGmbY%2Fo%2BalEkm0o0zPKCff8%2B7y85M4IJV94QDPZH8AqQPB8Y6D8wdUls7ifPxZHzFYtVFUXjZkZ3McXe%2F5QRU4zt%2BavZPpqOFVuLA6w6SgUSGRSblQEZkRecVl0YDaJjLekFQgABoof2d6PSEQe809uuQvNa4pgugqXdsGsbhD%2Bu39qQWgAhx6AHEwmbVRABXp6AJdxou50Yf55%2Bktt05lHwgpriVkVY%2BDHeOr4yWqSXtHbBWChyAZuIMRoBZpyP3Dn3ujqU41GlZ1w%2BzHHufXxL2KFQcvX4F2taY%2Bd56s2Rg%2Bqn89DgBO2eAe6NzB9FMs5wnKnZJeYjqf7HYi3VgpSysl3aBoOPnPDXLEOaKTCIw%2BLJBjqkAWX6a6SoJ1Clq1HPOEB7kOrXUv1XbKXjvwn%2BO8glPE8RkQLs4CHzKYYhsNilD2%2FYDpdEW3C5loVW4bXlXw1%2BuhndGw5RYmXBveenjXvOzZEYxVckNjXoeEh3VxZ3zirdzy4u4CM0MGvh4tw7tERvKSHqwXq4V84VDRo2oLhb6Pz5I9FdBoIGJVTbZ1A2b%2BYQRRh8wWicOkPJb7oAf%2Bx7Y4WMuSMu&X-Amz-Signature=2bc21e5835e063c145982dcea3be174094999d0748b5443d8296f09086c44e42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


