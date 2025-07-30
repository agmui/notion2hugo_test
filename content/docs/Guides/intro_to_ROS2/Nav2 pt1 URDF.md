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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQYQ6QBU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbMUF%2FLiubegmwYdfIveupYYJZO2x23t6PQKiVuijsLwIhAPIJanvihWdvHl%2F4lt5GO1WoZtFk%2B8%2FC3DjgMHEUZr5zKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJEy4%2Bf55uiy7rIkMq3ANWGsnWB0MFsJJv9fbVLlA75YqLfmS8NYXyaJW9pO5xvltSc%2BnjGJCTYHm1yFpTPsCO7iLqK5vqVNQUZxMiArbO8Ns27mAk%2FMC5LUQfQiymcRjQ8ZlPb0ndT4LYQI49kjfEj86UGbSX%2BCJ5ergrtsmQqbt7Zyp2mCJQcE9JF68Xp0SnG%2B1D%2FHhVYsvjG%2BS0lIMpJZ%2B2aDclTcUus3WP9mnpooAZG3QBFC9ciekQr52248ixJgkfhSAToDW72dsb1sQ%2BvneGi6ln5uoKCeedSR%2BIBU4rtk1mpdRewRd94FYEJBn0ejhH48Gl%2BxCeCz55NqwSlaymggTHm6jJ7vF8ubacVmmL%2B3v8EQ9gFLGEf%2Bp7XGxUOLgHu6hrwVm%2FipnIk238v02P0i7OpR9ppYuww%2FWST0uxu9by%2FMziMP7Op%2FS%2BfoqVKjXBCobGBQIxi7A9SBk0HWGl3cO9Yk%2FPR%2Fd1uJWz5jt5dpNcPmFWHJGmAuCbRzupfc6%2FExp4sHGubwNTWy4U2IYcE1NBl8uzEBuE9JzEl474RCWUcCjDV64Jt8crO4ucMedo%2BiD8dgeicY7wOFWnlN6YgR9M94slXCNEgHKYQBglVIkOV4woctQauy0A0yoFU7RO6rZAAPDjczCOoqjEBjqkAYSWPg60mCUwzjJk6u1V8xxc7L5OZDN%2F9fL7o%2BTtDrPKQu2UpbISew4rxLH2GVGK6UxeUbB8OFgJ2aUFZr2RXG00hMVm%2F2L1qB%2BeukBLJdo6JNE0b5hf6vHZ8%2BuNSMVId35O67EEWBZmGj%2BIDZOvwbN7Jf4nKCjxbpsHbV7Bfn%2BTILlo7wVdkw84gOcRwbF%2BATvDZrHbn2AWxCdPPEpOjIrqi3xZ&X-Amz-Signature=3695a7efc01a9ddbf0ee8371f95a832bd3893d0f9fead8bf7e04ab736651e307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQYQ6QBU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbMUF%2FLiubegmwYdfIveupYYJZO2x23t6PQKiVuijsLwIhAPIJanvihWdvHl%2F4lt5GO1WoZtFk%2B8%2FC3DjgMHEUZr5zKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJEy4%2Bf55uiy7rIkMq3ANWGsnWB0MFsJJv9fbVLlA75YqLfmS8NYXyaJW9pO5xvltSc%2BnjGJCTYHm1yFpTPsCO7iLqK5vqVNQUZxMiArbO8Ns27mAk%2FMC5LUQfQiymcRjQ8ZlPb0ndT4LYQI49kjfEj86UGbSX%2BCJ5ergrtsmQqbt7Zyp2mCJQcE9JF68Xp0SnG%2B1D%2FHhVYsvjG%2BS0lIMpJZ%2B2aDclTcUus3WP9mnpooAZG3QBFC9ciekQr52248ixJgkfhSAToDW72dsb1sQ%2BvneGi6ln5uoKCeedSR%2BIBU4rtk1mpdRewRd94FYEJBn0ejhH48Gl%2BxCeCz55NqwSlaymggTHm6jJ7vF8ubacVmmL%2B3v8EQ9gFLGEf%2Bp7XGxUOLgHu6hrwVm%2FipnIk238v02P0i7OpR9ppYuww%2FWST0uxu9by%2FMziMP7Op%2FS%2BfoqVKjXBCobGBQIxi7A9SBk0HWGl3cO9Yk%2FPR%2Fd1uJWz5jt5dpNcPmFWHJGmAuCbRzupfc6%2FExp4sHGubwNTWy4U2IYcE1NBl8uzEBuE9JzEl474RCWUcCjDV64Jt8crO4ucMedo%2BiD8dgeicY7wOFWnlN6YgR9M94slXCNEgHKYQBglVIkOV4woctQauy0A0yoFU7RO6rZAAPDjczCOoqjEBjqkAYSWPg60mCUwzjJk6u1V8xxc7L5OZDN%2F9fL7o%2BTtDrPKQu2UpbISew4rxLH2GVGK6UxeUbB8OFgJ2aUFZr2RXG00hMVm%2F2L1qB%2BeukBLJdo6JNE0b5hf6vHZ8%2BuNSMVId35O67EEWBZmGj%2BIDZOvwbN7Jf4nKCjxbpsHbV7Bfn%2BTILlo7wVdkw84gOcRwbF%2BATvDZrHbn2AWxCdPPEpOjIrqi3xZ&X-Amz-Signature=1492fcad4e759fa4bb040d7d91580bf02214648c648a394a293f5e105ffbfe93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQYQ6QBU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbMUF%2FLiubegmwYdfIveupYYJZO2x23t6PQKiVuijsLwIhAPIJanvihWdvHl%2F4lt5GO1WoZtFk%2B8%2FC3DjgMHEUZr5zKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJEy4%2Bf55uiy7rIkMq3ANWGsnWB0MFsJJv9fbVLlA75YqLfmS8NYXyaJW9pO5xvltSc%2BnjGJCTYHm1yFpTPsCO7iLqK5vqVNQUZxMiArbO8Ns27mAk%2FMC5LUQfQiymcRjQ8ZlPb0ndT4LYQI49kjfEj86UGbSX%2BCJ5ergrtsmQqbt7Zyp2mCJQcE9JF68Xp0SnG%2B1D%2FHhVYsvjG%2BS0lIMpJZ%2B2aDclTcUus3WP9mnpooAZG3QBFC9ciekQr52248ixJgkfhSAToDW72dsb1sQ%2BvneGi6ln5uoKCeedSR%2BIBU4rtk1mpdRewRd94FYEJBn0ejhH48Gl%2BxCeCz55NqwSlaymggTHm6jJ7vF8ubacVmmL%2B3v8EQ9gFLGEf%2Bp7XGxUOLgHu6hrwVm%2FipnIk238v02P0i7OpR9ppYuww%2FWST0uxu9by%2FMziMP7Op%2FS%2BfoqVKjXBCobGBQIxi7A9SBk0HWGl3cO9Yk%2FPR%2Fd1uJWz5jt5dpNcPmFWHJGmAuCbRzupfc6%2FExp4sHGubwNTWy4U2IYcE1NBl8uzEBuE9JzEl474RCWUcCjDV64Jt8crO4ucMedo%2BiD8dgeicY7wOFWnlN6YgR9M94slXCNEgHKYQBglVIkOV4woctQauy0A0yoFU7RO6rZAAPDjczCOoqjEBjqkAYSWPg60mCUwzjJk6u1V8xxc7L5OZDN%2F9fL7o%2BTtDrPKQu2UpbISew4rxLH2GVGK6UxeUbB8OFgJ2aUFZr2RXG00hMVm%2F2L1qB%2BeukBLJdo6JNE0b5hf6vHZ8%2BuNSMVId35O67EEWBZmGj%2BIDZOvwbN7Jf4nKCjxbpsHbV7Bfn%2BTILlo7wVdkw84gOcRwbF%2BATvDZrHbn2AWxCdPPEpOjIrqi3xZ&X-Amz-Signature=444e1f882bbb119a7b7abdd970154ecf4cf0f1a949358c97fdd08d0cc35b38ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQYQ6QBU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbMUF%2FLiubegmwYdfIveupYYJZO2x23t6PQKiVuijsLwIhAPIJanvihWdvHl%2F4lt5GO1WoZtFk%2B8%2FC3DjgMHEUZr5zKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJEy4%2Bf55uiy7rIkMq3ANWGsnWB0MFsJJv9fbVLlA75YqLfmS8NYXyaJW9pO5xvltSc%2BnjGJCTYHm1yFpTPsCO7iLqK5vqVNQUZxMiArbO8Ns27mAk%2FMC5LUQfQiymcRjQ8ZlPb0ndT4LYQI49kjfEj86UGbSX%2BCJ5ergrtsmQqbt7Zyp2mCJQcE9JF68Xp0SnG%2B1D%2FHhVYsvjG%2BS0lIMpJZ%2B2aDclTcUus3WP9mnpooAZG3QBFC9ciekQr52248ixJgkfhSAToDW72dsb1sQ%2BvneGi6ln5uoKCeedSR%2BIBU4rtk1mpdRewRd94FYEJBn0ejhH48Gl%2BxCeCz55NqwSlaymggTHm6jJ7vF8ubacVmmL%2B3v8EQ9gFLGEf%2Bp7XGxUOLgHu6hrwVm%2FipnIk238v02P0i7OpR9ppYuww%2FWST0uxu9by%2FMziMP7Op%2FS%2BfoqVKjXBCobGBQIxi7A9SBk0HWGl3cO9Yk%2FPR%2Fd1uJWz5jt5dpNcPmFWHJGmAuCbRzupfc6%2FExp4sHGubwNTWy4U2IYcE1NBl8uzEBuE9JzEl474RCWUcCjDV64Jt8crO4ucMedo%2BiD8dgeicY7wOFWnlN6YgR9M94slXCNEgHKYQBglVIkOV4woctQauy0A0yoFU7RO6rZAAPDjczCOoqjEBjqkAYSWPg60mCUwzjJk6u1V8xxc7L5OZDN%2F9fL7o%2BTtDrPKQu2UpbISew4rxLH2GVGK6UxeUbB8OFgJ2aUFZr2RXG00hMVm%2F2L1qB%2BeukBLJdo6JNE0b5hf6vHZ8%2BuNSMVId35O67EEWBZmGj%2BIDZOvwbN7Jf4nKCjxbpsHbV7Bfn%2BTILlo7wVdkw84gOcRwbF%2BATvDZrHbn2AWxCdPPEpOjIrqi3xZ&X-Amz-Signature=92bbbb228f41d81fa0e007f293c5d62fe78ca65ac53302392e3e70e3e97e669d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQYQ6QBU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbMUF%2FLiubegmwYdfIveupYYJZO2x23t6PQKiVuijsLwIhAPIJanvihWdvHl%2F4lt5GO1WoZtFk%2B8%2FC3DjgMHEUZr5zKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJEy4%2Bf55uiy7rIkMq3ANWGsnWB0MFsJJv9fbVLlA75YqLfmS8NYXyaJW9pO5xvltSc%2BnjGJCTYHm1yFpTPsCO7iLqK5vqVNQUZxMiArbO8Ns27mAk%2FMC5LUQfQiymcRjQ8ZlPb0ndT4LYQI49kjfEj86UGbSX%2BCJ5ergrtsmQqbt7Zyp2mCJQcE9JF68Xp0SnG%2B1D%2FHhVYsvjG%2BS0lIMpJZ%2B2aDclTcUus3WP9mnpooAZG3QBFC9ciekQr52248ixJgkfhSAToDW72dsb1sQ%2BvneGi6ln5uoKCeedSR%2BIBU4rtk1mpdRewRd94FYEJBn0ejhH48Gl%2BxCeCz55NqwSlaymggTHm6jJ7vF8ubacVmmL%2B3v8EQ9gFLGEf%2Bp7XGxUOLgHu6hrwVm%2FipnIk238v02P0i7OpR9ppYuww%2FWST0uxu9by%2FMziMP7Op%2FS%2BfoqVKjXBCobGBQIxi7A9SBk0HWGl3cO9Yk%2FPR%2Fd1uJWz5jt5dpNcPmFWHJGmAuCbRzupfc6%2FExp4sHGubwNTWy4U2IYcE1NBl8uzEBuE9JzEl474RCWUcCjDV64Jt8crO4ucMedo%2BiD8dgeicY7wOFWnlN6YgR9M94slXCNEgHKYQBglVIkOV4woctQauy0A0yoFU7RO6rZAAPDjczCOoqjEBjqkAYSWPg60mCUwzjJk6u1V8xxc7L5OZDN%2F9fL7o%2BTtDrPKQu2UpbISew4rxLH2GVGK6UxeUbB8OFgJ2aUFZr2RXG00hMVm%2F2L1qB%2BeukBLJdo6JNE0b5hf6vHZ8%2BuNSMVId35O67EEWBZmGj%2BIDZOvwbN7Jf4nKCjxbpsHbV7Bfn%2BTILlo7wVdkw84gOcRwbF%2BATvDZrHbn2AWxCdPPEpOjIrqi3xZ&X-Amz-Signature=82424ce9630ea2f686653b9b9e015ca0df54cec8ccb63299844b757ae8ff3503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQYQ6QBU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbMUF%2FLiubegmwYdfIveupYYJZO2x23t6PQKiVuijsLwIhAPIJanvihWdvHl%2F4lt5GO1WoZtFk%2B8%2FC3DjgMHEUZr5zKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJEy4%2Bf55uiy7rIkMq3ANWGsnWB0MFsJJv9fbVLlA75YqLfmS8NYXyaJW9pO5xvltSc%2BnjGJCTYHm1yFpTPsCO7iLqK5vqVNQUZxMiArbO8Ns27mAk%2FMC5LUQfQiymcRjQ8ZlPb0ndT4LYQI49kjfEj86UGbSX%2BCJ5ergrtsmQqbt7Zyp2mCJQcE9JF68Xp0SnG%2B1D%2FHhVYsvjG%2BS0lIMpJZ%2B2aDclTcUus3WP9mnpooAZG3QBFC9ciekQr52248ixJgkfhSAToDW72dsb1sQ%2BvneGi6ln5uoKCeedSR%2BIBU4rtk1mpdRewRd94FYEJBn0ejhH48Gl%2BxCeCz55NqwSlaymggTHm6jJ7vF8ubacVmmL%2B3v8EQ9gFLGEf%2Bp7XGxUOLgHu6hrwVm%2FipnIk238v02P0i7OpR9ppYuww%2FWST0uxu9by%2FMziMP7Op%2FS%2BfoqVKjXBCobGBQIxi7A9SBk0HWGl3cO9Yk%2FPR%2Fd1uJWz5jt5dpNcPmFWHJGmAuCbRzupfc6%2FExp4sHGubwNTWy4U2IYcE1NBl8uzEBuE9JzEl474RCWUcCjDV64Jt8crO4ucMedo%2BiD8dgeicY7wOFWnlN6YgR9M94slXCNEgHKYQBglVIkOV4woctQauy0A0yoFU7RO6rZAAPDjczCOoqjEBjqkAYSWPg60mCUwzjJk6u1V8xxc7L5OZDN%2F9fL7o%2BTtDrPKQu2UpbISew4rxLH2GVGK6UxeUbB8OFgJ2aUFZr2RXG00hMVm%2F2L1qB%2BeukBLJdo6JNE0b5hf6vHZ8%2BuNSMVId35O67EEWBZmGj%2BIDZOvwbN7Jf4nKCjxbpsHbV7Bfn%2BTILlo7wVdkw84gOcRwbF%2BATvDZrHbn2AWxCdPPEpOjIrqi3xZ&X-Amz-Signature=f04299ff34ff6e0832ce598241f2ce1fdb90b141bd6bc0e56a94c92cba8b7ba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQYQ6QBU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbMUF%2FLiubegmwYdfIveupYYJZO2x23t6PQKiVuijsLwIhAPIJanvihWdvHl%2F4lt5GO1WoZtFk%2B8%2FC3DjgMHEUZr5zKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJEy4%2Bf55uiy7rIkMq3ANWGsnWB0MFsJJv9fbVLlA75YqLfmS8NYXyaJW9pO5xvltSc%2BnjGJCTYHm1yFpTPsCO7iLqK5vqVNQUZxMiArbO8Ns27mAk%2FMC5LUQfQiymcRjQ8ZlPb0ndT4LYQI49kjfEj86UGbSX%2BCJ5ergrtsmQqbt7Zyp2mCJQcE9JF68Xp0SnG%2B1D%2FHhVYsvjG%2BS0lIMpJZ%2B2aDclTcUus3WP9mnpooAZG3QBFC9ciekQr52248ixJgkfhSAToDW72dsb1sQ%2BvneGi6ln5uoKCeedSR%2BIBU4rtk1mpdRewRd94FYEJBn0ejhH48Gl%2BxCeCz55NqwSlaymggTHm6jJ7vF8ubacVmmL%2B3v8EQ9gFLGEf%2Bp7XGxUOLgHu6hrwVm%2FipnIk238v02P0i7OpR9ppYuww%2FWST0uxu9by%2FMziMP7Op%2FS%2BfoqVKjXBCobGBQIxi7A9SBk0HWGl3cO9Yk%2FPR%2Fd1uJWz5jt5dpNcPmFWHJGmAuCbRzupfc6%2FExp4sHGubwNTWy4U2IYcE1NBl8uzEBuE9JzEl474RCWUcCjDV64Jt8crO4ucMedo%2BiD8dgeicY7wOFWnlN6YgR9M94slXCNEgHKYQBglVIkOV4woctQauy0A0yoFU7RO6rZAAPDjczCOoqjEBjqkAYSWPg60mCUwzjJk6u1V8xxc7L5OZDN%2F9fL7o%2BTtDrPKQu2UpbISew4rxLH2GVGK6UxeUbB8OFgJ2aUFZr2RXG00hMVm%2F2L1qB%2BeukBLJdo6JNE0b5hf6vHZ8%2BuNSMVId35O67EEWBZmGj%2BIDZOvwbN7Jf4nKCjxbpsHbV7Bfn%2BTILlo7wVdkw84gOcRwbF%2BATvDZrHbn2AWxCdPPEpOjIrqi3xZ&X-Amz-Signature=851a617c85595144ae9b20989f5010b9705f26c80d2d75acbd1a6057a0d81de0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQYQ6QBU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbMUF%2FLiubegmwYdfIveupYYJZO2x23t6PQKiVuijsLwIhAPIJanvihWdvHl%2F4lt5GO1WoZtFk%2B8%2FC3DjgMHEUZr5zKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJEy4%2Bf55uiy7rIkMq3ANWGsnWB0MFsJJv9fbVLlA75YqLfmS8NYXyaJW9pO5xvltSc%2BnjGJCTYHm1yFpTPsCO7iLqK5vqVNQUZxMiArbO8Ns27mAk%2FMC5LUQfQiymcRjQ8ZlPb0ndT4LYQI49kjfEj86UGbSX%2BCJ5ergrtsmQqbt7Zyp2mCJQcE9JF68Xp0SnG%2B1D%2FHhVYsvjG%2BS0lIMpJZ%2B2aDclTcUus3WP9mnpooAZG3QBFC9ciekQr52248ixJgkfhSAToDW72dsb1sQ%2BvneGi6ln5uoKCeedSR%2BIBU4rtk1mpdRewRd94FYEJBn0ejhH48Gl%2BxCeCz55NqwSlaymggTHm6jJ7vF8ubacVmmL%2B3v8EQ9gFLGEf%2Bp7XGxUOLgHu6hrwVm%2FipnIk238v02P0i7OpR9ppYuww%2FWST0uxu9by%2FMziMP7Op%2FS%2BfoqVKjXBCobGBQIxi7A9SBk0HWGl3cO9Yk%2FPR%2Fd1uJWz5jt5dpNcPmFWHJGmAuCbRzupfc6%2FExp4sHGubwNTWy4U2IYcE1NBl8uzEBuE9JzEl474RCWUcCjDV64Jt8crO4ucMedo%2BiD8dgeicY7wOFWnlN6YgR9M94slXCNEgHKYQBglVIkOV4woctQauy0A0yoFU7RO6rZAAPDjczCOoqjEBjqkAYSWPg60mCUwzjJk6u1V8xxc7L5OZDN%2F9fL7o%2BTtDrPKQu2UpbISew4rxLH2GVGK6UxeUbB8OFgJ2aUFZr2RXG00hMVm%2F2L1qB%2BeukBLJdo6JNE0b5hf6vHZ8%2BuNSMVId35O67EEWBZmGj%2BIDZOvwbN7Jf4nKCjxbpsHbV7Bfn%2BTILlo7wVdkw84gOcRwbF%2BATvDZrHbn2AWxCdPPEpOjIrqi3xZ&X-Amz-Signature=ad831c196c252db74629bdb94231bcc56114dd01a99ea43521dee7878681e8c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQYQ6QBU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbMUF%2FLiubegmwYdfIveupYYJZO2x23t6PQKiVuijsLwIhAPIJanvihWdvHl%2F4lt5GO1WoZtFk%2B8%2FC3DjgMHEUZr5zKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJEy4%2Bf55uiy7rIkMq3ANWGsnWB0MFsJJv9fbVLlA75YqLfmS8NYXyaJW9pO5xvltSc%2BnjGJCTYHm1yFpTPsCO7iLqK5vqVNQUZxMiArbO8Ns27mAk%2FMC5LUQfQiymcRjQ8ZlPb0ndT4LYQI49kjfEj86UGbSX%2BCJ5ergrtsmQqbt7Zyp2mCJQcE9JF68Xp0SnG%2B1D%2FHhVYsvjG%2BS0lIMpJZ%2B2aDclTcUus3WP9mnpooAZG3QBFC9ciekQr52248ixJgkfhSAToDW72dsb1sQ%2BvneGi6ln5uoKCeedSR%2BIBU4rtk1mpdRewRd94FYEJBn0ejhH48Gl%2BxCeCz55NqwSlaymggTHm6jJ7vF8ubacVmmL%2B3v8EQ9gFLGEf%2Bp7XGxUOLgHu6hrwVm%2FipnIk238v02P0i7OpR9ppYuww%2FWST0uxu9by%2FMziMP7Op%2FS%2BfoqVKjXBCobGBQIxi7A9SBk0HWGl3cO9Yk%2FPR%2Fd1uJWz5jt5dpNcPmFWHJGmAuCbRzupfc6%2FExp4sHGubwNTWy4U2IYcE1NBl8uzEBuE9JzEl474RCWUcCjDV64Jt8crO4ucMedo%2BiD8dgeicY7wOFWnlN6YgR9M94slXCNEgHKYQBglVIkOV4woctQauy0A0yoFU7RO6rZAAPDjczCOoqjEBjqkAYSWPg60mCUwzjJk6u1V8xxc7L5OZDN%2F9fL7o%2BTtDrPKQu2UpbISew4rxLH2GVGK6UxeUbB8OFgJ2aUFZr2RXG00hMVm%2F2L1qB%2BeukBLJdo6JNE0b5hf6vHZ8%2BuNSMVId35O67EEWBZmGj%2BIDZOvwbN7Jf4nKCjxbpsHbV7Bfn%2BTILlo7wVdkw84gOcRwbF%2BATvDZrHbn2AWxCdPPEpOjIrqi3xZ&X-Amz-Signature=f0c12a7550d41e0f82324e9d2c30b7a0bf08c7a60dd8d0a31193e743619073e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQYQ6QBU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbMUF%2FLiubegmwYdfIveupYYJZO2x23t6PQKiVuijsLwIhAPIJanvihWdvHl%2F4lt5GO1WoZtFk%2B8%2FC3DjgMHEUZr5zKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJEy4%2Bf55uiy7rIkMq3ANWGsnWB0MFsJJv9fbVLlA75YqLfmS8NYXyaJW9pO5xvltSc%2BnjGJCTYHm1yFpTPsCO7iLqK5vqVNQUZxMiArbO8Ns27mAk%2FMC5LUQfQiymcRjQ8ZlPb0ndT4LYQI49kjfEj86UGbSX%2BCJ5ergrtsmQqbt7Zyp2mCJQcE9JF68Xp0SnG%2B1D%2FHhVYsvjG%2BS0lIMpJZ%2B2aDclTcUus3WP9mnpooAZG3QBFC9ciekQr52248ixJgkfhSAToDW72dsb1sQ%2BvneGi6ln5uoKCeedSR%2BIBU4rtk1mpdRewRd94FYEJBn0ejhH48Gl%2BxCeCz55NqwSlaymggTHm6jJ7vF8ubacVmmL%2B3v8EQ9gFLGEf%2Bp7XGxUOLgHu6hrwVm%2FipnIk238v02P0i7OpR9ppYuww%2FWST0uxu9by%2FMziMP7Op%2FS%2BfoqVKjXBCobGBQIxi7A9SBk0HWGl3cO9Yk%2FPR%2Fd1uJWz5jt5dpNcPmFWHJGmAuCbRzupfc6%2FExp4sHGubwNTWy4U2IYcE1NBl8uzEBuE9JzEl474RCWUcCjDV64Jt8crO4ucMedo%2BiD8dgeicY7wOFWnlN6YgR9M94slXCNEgHKYQBglVIkOV4woctQauy0A0yoFU7RO6rZAAPDjczCOoqjEBjqkAYSWPg60mCUwzjJk6u1V8xxc7L5OZDN%2F9fL7o%2BTtDrPKQu2UpbISew4rxLH2GVGK6UxeUbB8OFgJ2aUFZr2RXG00hMVm%2F2L1qB%2BeukBLJdo6JNE0b5hf6vHZ8%2BuNSMVId35O67EEWBZmGj%2BIDZOvwbN7Jf4nKCjxbpsHbV7Bfn%2BTILlo7wVdkw84gOcRwbF%2BATvDZrHbn2AWxCdPPEpOjIrqi3xZ&X-Amz-Signature=a0359cdadb6b92d28fa2a26540ab358fb08c49219c0e6b9bebdffd0091050cef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQYQ6QBU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbMUF%2FLiubegmwYdfIveupYYJZO2x23t6PQKiVuijsLwIhAPIJanvihWdvHl%2F4lt5GO1WoZtFk%2B8%2FC3DjgMHEUZr5zKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJEy4%2Bf55uiy7rIkMq3ANWGsnWB0MFsJJv9fbVLlA75YqLfmS8NYXyaJW9pO5xvltSc%2BnjGJCTYHm1yFpTPsCO7iLqK5vqVNQUZxMiArbO8Ns27mAk%2FMC5LUQfQiymcRjQ8ZlPb0ndT4LYQI49kjfEj86UGbSX%2BCJ5ergrtsmQqbt7Zyp2mCJQcE9JF68Xp0SnG%2B1D%2FHhVYsvjG%2BS0lIMpJZ%2B2aDclTcUus3WP9mnpooAZG3QBFC9ciekQr52248ixJgkfhSAToDW72dsb1sQ%2BvneGi6ln5uoKCeedSR%2BIBU4rtk1mpdRewRd94FYEJBn0ejhH48Gl%2BxCeCz55NqwSlaymggTHm6jJ7vF8ubacVmmL%2B3v8EQ9gFLGEf%2Bp7XGxUOLgHu6hrwVm%2FipnIk238v02P0i7OpR9ppYuww%2FWST0uxu9by%2FMziMP7Op%2FS%2BfoqVKjXBCobGBQIxi7A9SBk0HWGl3cO9Yk%2FPR%2Fd1uJWz5jt5dpNcPmFWHJGmAuCbRzupfc6%2FExp4sHGubwNTWy4U2IYcE1NBl8uzEBuE9JzEl474RCWUcCjDV64Jt8crO4ucMedo%2BiD8dgeicY7wOFWnlN6YgR9M94slXCNEgHKYQBglVIkOV4woctQauy0A0yoFU7RO6rZAAPDjczCOoqjEBjqkAYSWPg60mCUwzjJk6u1V8xxc7L5OZDN%2F9fL7o%2BTtDrPKQu2UpbISew4rxLH2GVGK6UxeUbB8OFgJ2aUFZr2RXG00hMVm%2F2L1qB%2BeukBLJdo6JNE0b5hf6vHZ8%2BuNSMVId35O67EEWBZmGj%2BIDZOvwbN7Jf4nKCjxbpsHbV7Bfn%2BTILlo7wVdkw84gOcRwbF%2BATvDZrHbn2AWxCdPPEpOjIrqi3xZ&X-Amz-Signature=6205881c821adb08231c32e382057c7b1666e28175f7b28a873140f0557dafdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQYQ6QBU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbMUF%2FLiubegmwYdfIveupYYJZO2x23t6PQKiVuijsLwIhAPIJanvihWdvHl%2F4lt5GO1WoZtFk%2B8%2FC3DjgMHEUZr5zKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJEy4%2Bf55uiy7rIkMq3ANWGsnWB0MFsJJv9fbVLlA75YqLfmS8NYXyaJW9pO5xvltSc%2BnjGJCTYHm1yFpTPsCO7iLqK5vqVNQUZxMiArbO8Ns27mAk%2FMC5LUQfQiymcRjQ8ZlPb0ndT4LYQI49kjfEj86UGbSX%2BCJ5ergrtsmQqbt7Zyp2mCJQcE9JF68Xp0SnG%2B1D%2FHhVYsvjG%2BS0lIMpJZ%2B2aDclTcUus3WP9mnpooAZG3QBFC9ciekQr52248ixJgkfhSAToDW72dsb1sQ%2BvneGi6ln5uoKCeedSR%2BIBU4rtk1mpdRewRd94FYEJBn0ejhH48Gl%2BxCeCz55NqwSlaymggTHm6jJ7vF8ubacVmmL%2B3v8EQ9gFLGEf%2Bp7XGxUOLgHu6hrwVm%2FipnIk238v02P0i7OpR9ppYuww%2FWST0uxu9by%2FMziMP7Op%2FS%2BfoqVKjXBCobGBQIxi7A9SBk0HWGl3cO9Yk%2FPR%2Fd1uJWz5jt5dpNcPmFWHJGmAuCbRzupfc6%2FExp4sHGubwNTWy4U2IYcE1NBl8uzEBuE9JzEl474RCWUcCjDV64Jt8crO4ucMedo%2BiD8dgeicY7wOFWnlN6YgR9M94slXCNEgHKYQBglVIkOV4woctQauy0A0yoFU7RO6rZAAPDjczCOoqjEBjqkAYSWPg60mCUwzjJk6u1V8xxc7L5OZDN%2F9fL7o%2BTtDrPKQu2UpbISew4rxLH2GVGK6UxeUbB8OFgJ2aUFZr2RXG00hMVm%2F2L1qB%2BeukBLJdo6JNE0b5hf6vHZ8%2BuNSMVId35O67EEWBZmGj%2BIDZOvwbN7Jf4nKCjxbpsHbV7Bfn%2BTILlo7wVdkw84gOcRwbF%2BATvDZrHbn2AWxCdPPEpOjIrqi3xZ&X-Amz-Signature=fe63125f394afa456cb4179d0dfc375a3bd2b7c622a79f42098fe945826fb0df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQYQ6QBU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbMUF%2FLiubegmwYdfIveupYYJZO2x23t6PQKiVuijsLwIhAPIJanvihWdvHl%2F4lt5GO1WoZtFk%2B8%2FC3DjgMHEUZr5zKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJEy4%2Bf55uiy7rIkMq3ANWGsnWB0MFsJJv9fbVLlA75YqLfmS8NYXyaJW9pO5xvltSc%2BnjGJCTYHm1yFpTPsCO7iLqK5vqVNQUZxMiArbO8Ns27mAk%2FMC5LUQfQiymcRjQ8ZlPb0ndT4LYQI49kjfEj86UGbSX%2BCJ5ergrtsmQqbt7Zyp2mCJQcE9JF68Xp0SnG%2B1D%2FHhVYsvjG%2BS0lIMpJZ%2B2aDclTcUus3WP9mnpooAZG3QBFC9ciekQr52248ixJgkfhSAToDW72dsb1sQ%2BvneGi6ln5uoKCeedSR%2BIBU4rtk1mpdRewRd94FYEJBn0ejhH48Gl%2BxCeCz55NqwSlaymggTHm6jJ7vF8ubacVmmL%2B3v8EQ9gFLGEf%2Bp7XGxUOLgHu6hrwVm%2FipnIk238v02P0i7OpR9ppYuww%2FWST0uxu9by%2FMziMP7Op%2FS%2BfoqVKjXBCobGBQIxi7A9SBk0HWGl3cO9Yk%2FPR%2Fd1uJWz5jt5dpNcPmFWHJGmAuCbRzupfc6%2FExp4sHGubwNTWy4U2IYcE1NBl8uzEBuE9JzEl474RCWUcCjDV64Jt8crO4ucMedo%2BiD8dgeicY7wOFWnlN6YgR9M94slXCNEgHKYQBglVIkOV4woctQauy0A0yoFU7RO6rZAAPDjczCOoqjEBjqkAYSWPg60mCUwzjJk6u1V8xxc7L5OZDN%2F9fL7o%2BTtDrPKQu2UpbISew4rxLH2GVGK6UxeUbB8OFgJ2aUFZr2RXG00hMVm%2F2L1qB%2BeukBLJdo6JNE0b5hf6vHZ8%2BuNSMVId35O67EEWBZmGj%2BIDZOvwbN7Jf4nKCjxbpsHbV7Bfn%2BTILlo7wVdkw84gOcRwbF%2BATvDZrHbn2AWxCdPPEpOjIrqi3xZ&X-Amz-Signature=28d647fcb10eb5f14620cd812b037a87ab246bb615767d6638828004137c4b8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRTHGXDX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8MPoOzhNPlGzYgdrDSuDPA0wmcRPR8wjpygI4rIJSpwIgL2TRLIJoPm98bcpPlmez6c6VGsRwLjh521PRM%2BXwcl4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHq4apqnOIp4YJfZCrcA%2BvgKn2qX3g2CcLkkgax%2F7X5eeBCzsX%2FDWbnUy6pAN9Fc2lIc8kgPeMfpWluZGJSSdmQtHfWR14lz4sCricnTyUcLBbOVBw4ftd2hZ4kg3ALDY1bO2b7cFcRX6vq6%2BzLJMJUuriQP9BwKIGWdyESBrlJX7QtbeUfRsqnp585QPnBE5UP93jiKeKw79NDyu0BxwGJapFC30FXV6WAKneSkItaxbd4IJ231c43LXR%2B7qv0pE3QAjNJVjmcv%2Fr%2FPp5mL5A49dQpt6Mck2e8ez6KRmWie8Ax9hz8Z4hJ7mkPvASuvTS78USH%2B%2FUcchJvmgpUPm8ReRrmnGGnvYWYb7KjP6d8N5b5xlYE110xB8SnQXpEhrARI0LUg6RM%2B0kGmVdzG%2BUqKU4bD%2F82Q3Wm14s2tDUnOevsl5K6ASiu22xrngkt%2FlucEZUVTKpGQSpImS%2F6DJZDWVu8ax675oXM0xf4LgYt%2BdDT7njB7v5I10xZy4V5M2S1tjVG%2FLWpimpLJMJfyVzb5WtytF6YEMKc4KsT15ihgRw%2BXFlCI36LrzlOf8dNsFgkjrTcLTfoxCsC0gwSGtAAlb3BLmGwup1q0NiWvqG%2FaJ8q8iLwFrbBsAefI5vAEmmJOq9wr6CL1CA3MJSiqMQGOqUBQZVBU%2Fk6yElvLibb8INTWeqpXoydCdZfzFPFCQXLhUO8zxM%2BeBDfZLy6YImqNgcNkirKhBmkWkI7XxwFHyZ%2FhG19cR02JzGOK90v0URWsjymh2w7N6S84CdN%2BDtIQjFdcT%2FNPQLIbSL9SHWooOxQyNtlgQn4r8gt5%2FWr9yOGJJ6OsEkpl4BExQDq6X%2FuJE9eXv3p5fHmpba57%2FWSkMiN5Iv%2F9EOI&X-Amz-Signature=22874fb35954e697e7d8e1023be9aa5c1c6308ad5301c09b40b56f228fbb98da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRTHGXDX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8MPoOzhNPlGzYgdrDSuDPA0wmcRPR8wjpygI4rIJSpwIgL2TRLIJoPm98bcpPlmez6c6VGsRwLjh521PRM%2BXwcl4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHq4apqnOIp4YJfZCrcA%2BvgKn2qX3g2CcLkkgax%2F7X5eeBCzsX%2FDWbnUy6pAN9Fc2lIc8kgPeMfpWluZGJSSdmQtHfWR14lz4sCricnTyUcLBbOVBw4ftd2hZ4kg3ALDY1bO2b7cFcRX6vq6%2BzLJMJUuriQP9BwKIGWdyESBrlJX7QtbeUfRsqnp585QPnBE5UP93jiKeKw79NDyu0BxwGJapFC30FXV6WAKneSkItaxbd4IJ231c43LXR%2B7qv0pE3QAjNJVjmcv%2Fr%2FPp5mL5A49dQpt6Mck2e8ez6KRmWie8Ax9hz8Z4hJ7mkPvASuvTS78USH%2B%2FUcchJvmgpUPm8ReRrmnGGnvYWYb7KjP6d8N5b5xlYE110xB8SnQXpEhrARI0LUg6RM%2B0kGmVdzG%2BUqKU4bD%2F82Q3Wm14s2tDUnOevsl5K6ASiu22xrngkt%2FlucEZUVTKpGQSpImS%2F6DJZDWVu8ax675oXM0xf4LgYt%2BdDT7njB7v5I10xZy4V5M2S1tjVG%2FLWpimpLJMJfyVzb5WtytF6YEMKc4KsT15ihgRw%2BXFlCI36LrzlOf8dNsFgkjrTcLTfoxCsC0gwSGtAAlb3BLmGwup1q0NiWvqG%2FaJ8q8iLwFrbBsAefI5vAEmmJOq9wr6CL1CA3MJSiqMQGOqUBQZVBU%2Fk6yElvLibb8INTWeqpXoydCdZfzFPFCQXLhUO8zxM%2BeBDfZLy6YImqNgcNkirKhBmkWkI7XxwFHyZ%2FhG19cR02JzGOK90v0URWsjymh2w7N6S84CdN%2BDtIQjFdcT%2FNPQLIbSL9SHWooOxQyNtlgQn4r8gt5%2FWr9yOGJJ6OsEkpl4BExQDq6X%2FuJE9eXv3p5fHmpba57%2FWSkMiN5Iv%2F9EOI&X-Amz-Signature=d635eefe1068a47513cdf447b1d78b25b873cb48065b2dae1d90ce21921f5daa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRTHGXDX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8MPoOzhNPlGzYgdrDSuDPA0wmcRPR8wjpygI4rIJSpwIgL2TRLIJoPm98bcpPlmez6c6VGsRwLjh521PRM%2BXwcl4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHq4apqnOIp4YJfZCrcA%2BvgKn2qX3g2CcLkkgax%2F7X5eeBCzsX%2FDWbnUy6pAN9Fc2lIc8kgPeMfpWluZGJSSdmQtHfWR14lz4sCricnTyUcLBbOVBw4ftd2hZ4kg3ALDY1bO2b7cFcRX6vq6%2BzLJMJUuriQP9BwKIGWdyESBrlJX7QtbeUfRsqnp585QPnBE5UP93jiKeKw79NDyu0BxwGJapFC30FXV6WAKneSkItaxbd4IJ231c43LXR%2B7qv0pE3QAjNJVjmcv%2Fr%2FPp5mL5A49dQpt6Mck2e8ez6KRmWie8Ax9hz8Z4hJ7mkPvASuvTS78USH%2B%2FUcchJvmgpUPm8ReRrmnGGnvYWYb7KjP6d8N5b5xlYE110xB8SnQXpEhrARI0LUg6RM%2B0kGmVdzG%2BUqKU4bD%2F82Q3Wm14s2tDUnOevsl5K6ASiu22xrngkt%2FlucEZUVTKpGQSpImS%2F6DJZDWVu8ax675oXM0xf4LgYt%2BdDT7njB7v5I10xZy4V5M2S1tjVG%2FLWpimpLJMJfyVzb5WtytF6YEMKc4KsT15ihgRw%2BXFlCI36LrzlOf8dNsFgkjrTcLTfoxCsC0gwSGtAAlb3BLmGwup1q0NiWvqG%2FaJ8q8iLwFrbBsAefI5vAEmmJOq9wr6CL1CA3MJSiqMQGOqUBQZVBU%2Fk6yElvLibb8INTWeqpXoydCdZfzFPFCQXLhUO8zxM%2BeBDfZLy6YImqNgcNkirKhBmkWkI7XxwFHyZ%2FhG19cR02JzGOK90v0URWsjymh2w7N6S84CdN%2BDtIQjFdcT%2FNPQLIbSL9SHWooOxQyNtlgQn4r8gt5%2FWr9yOGJJ6OsEkpl4BExQDq6X%2FuJE9eXv3p5fHmpba57%2FWSkMiN5Iv%2F9EOI&X-Amz-Signature=79b8e461e0b44815ebfb15d6931ccb078b832cc11f3d9927ef89aaa856b1d7c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRTHGXDX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8MPoOzhNPlGzYgdrDSuDPA0wmcRPR8wjpygI4rIJSpwIgL2TRLIJoPm98bcpPlmez6c6VGsRwLjh521PRM%2BXwcl4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHq4apqnOIp4YJfZCrcA%2BvgKn2qX3g2CcLkkgax%2F7X5eeBCzsX%2FDWbnUy6pAN9Fc2lIc8kgPeMfpWluZGJSSdmQtHfWR14lz4sCricnTyUcLBbOVBw4ftd2hZ4kg3ALDY1bO2b7cFcRX6vq6%2BzLJMJUuriQP9BwKIGWdyESBrlJX7QtbeUfRsqnp585QPnBE5UP93jiKeKw79NDyu0BxwGJapFC30FXV6WAKneSkItaxbd4IJ231c43LXR%2B7qv0pE3QAjNJVjmcv%2Fr%2FPp5mL5A49dQpt6Mck2e8ez6KRmWie8Ax9hz8Z4hJ7mkPvASuvTS78USH%2B%2FUcchJvmgpUPm8ReRrmnGGnvYWYb7KjP6d8N5b5xlYE110xB8SnQXpEhrARI0LUg6RM%2B0kGmVdzG%2BUqKU4bD%2F82Q3Wm14s2tDUnOevsl5K6ASiu22xrngkt%2FlucEZUVTKpGQSpImS%2F6DJZDWVu8ax675oXM0xf4LgYt%2BdDT7njB7v5I10xZy4V5M2S1tjVG%2FLWpimpLJMJfyVzb5WtytF6YEMKc4KsT15ihgRw%2BXFlCI36LrzlOf8dNsFgkjrTcLTfoxCsC0gwSGtAAlb3BLmGwup1q0NiWvqG%2FaJ8q8iLwFrbBsAefI5vAEmmJOq9wr6CL1CA3MJSiqMQGOqUBQZVBU%2Fk6yElvLibb8INTWeqpXoydCdZfzFPFCQXLhUO8zxM%2BeBDfZLy6YImqNgcNkirKhBmkWkI7XxwFHyZ%2FhG19cR02JzGOK90v0URWsjymh2w7N6S84CdN%2BDtIQjFdcT%2FNPQLIbSL9SHWooOxQyNtlgQn4r8gt5%2FWr9yOGJJ6OsEkpl4BExQDq6X%2FuJE9eXv3p5fHmpba57%2FWSkMiN5Iv%2F9EOI&X-Amz-Signature=6b073ba1804f7953e840410544b09fbb2f60f2507fea7d73f369f8e75241d55b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRTHGXDX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8MPoOzhNPlGzYgdrDSuDPA0wmcRPR8wjpygI4rIJSpwIgL2TRLIJoPm98bcpPlmez6c6VGsRwLjh521PRM%2BXwcl4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHq4apqnOIp4YJfZCrcA%2BvgKn2qX3g2CcLkkgax%2F7X5eeBCzsX%2FDWbnUy6pAN9Fc2lIc8kgPeMfpWluZGJSSdmQtHfWR14lz4sCricnTyUcLBbOVBw4ftd2hZ4kg3ALDY1bO2b7cFcRX6vq6%2BzLJMJUuriQP9BwKIGWdyESBrlJX7QtbeUfRsqnp585QPnBE5UP93jiKeKw79NDyu0BxwGJapFC30FXV6WAKneSkItaxbd4IJ231c43LXR%2B7qv0pE3QAjNJVjmcv%2Fr%2FPp5mL5A49dQpt6Mck2e8ez6KRmWie8Ax9hz8Z4hJ7mkPvASuvTS78USH%2B%2FUcchJvmgpUPm8ReRrmnGGnvYWYb7KjP6d8N5b5xlYE110xB8SnQXpEhrARI0LUg6RM%2B0kGmVdzG%2BUqKU4bD%2F82Q3Wm14s2tDUnOevsl5K6ASiu22xrngkt%2FlucEZUVTKpGQSpImS%2F6DJZDWVu8ax675oXM0xf4LgYt%2BdDT7njB7v5I10xZy4V5M2S1tjVG%2FLWpimpLJMJfyVzb5WtytF6YEMKc4KsT15ihgRw%2BXFlCI36LrzlOf8dNsFgkjrTcLTfoxCsC0gwSGtAAlb3BLmGwup1q0NiWvqG%2FaJ8q8iLwFrbBsAefI5vAEmmJOq9wr6CL1CA3MJSiqMQGOqUBQZVBU%2Fk6yElvLibb8INTWeqpXoydCdZfzFPFCQXLhUO8zxM%2BeBDfZLy6YImqNgcNkirKhBmkWkI7XxwFHyZ%2FhG19cR02JzGOK90v0URWsjymh2w7N6S84CdN%2BDtIQjFdcT%2FNPQLIbSL9SHWooOxQyNtlgQn4r8gt5%2FWr9yOGJJ6OsEkpl4BExQDq6X%2FuJE9eXv3p5fHmpba57%2FWSkMiN5Iv%2F9EOI&X-Amz-Signature=33d91375c531d8dadae299844361eae18e48a1f23d8315254bcc858534d50dcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRTHGXDX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8MPoOzhNPlGzYgdrDSuDPA0wmcRPR8wjpygI4rIJSpwIgL2TRLIJoPm98bcpPlmez6c6VGsRwLjh521PRM%2BXwcl4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHq4apqnOIp4YJfZCrcA%2BvgKn2qX3g2CcLkkgax%2F7X5eeBCzsX%2FDWbnUy6pAN9Fc2lIc8kgPeMfpWluZGJSSdmQtHfWR14lz4sCricnTyUcLBbOVBw4ftd2hZ4kg3ALDY1bO2b7cFcRX6vq6%2BzLJMJUuriQP9BwKIGWdyESBrlJX7QtbeUfRsqnp585QPnBE5UP93jiKeKw79NDyu0BxwGJapFC30FXV6WAKneSkItaxbd4IJ231c43LXR%2B7qv0pE3QAjNJVjmcv%2Fr%2FPp5mL5A49dQpt6Mck2e8ez6KRmWie8Ax9hz8Z4hJ7mkPvASuvTS78USH%2B%2FUcchJvmgpUPm8ReRrmnGGnvYWYb7KjP6d8N5b5xlYE110xB8SnQXpEhrARI0LUg6RM%2B0kGmVdzG%2BUqKU4bD%2F82Q3Wm14s2tDUnOevsl5K6ASiu22xrngkt%2FlucEZUVTKpGQSpImS%2F6DJZDWVu8ax675oXM0xf4LgYt%2BdDT7njB7v5I10xZy4V5M2S1tjVG%2FLWpimpLJMJfyVzb5WtytF6YEMKc4KsT15ihgRw%2BXFlCI36LrzlOf8dNsFgkjrTcLTfoxCsC0gwSGtAAlb3BLmGwup1q0NiWvqG%2FaJ8q8iLwFrbBsAefI5vAEmmJOq9wr6CL1CA3MJSiqMQGOqUBQZVBU%2Fk6yElvLibb8INTWeqpXoydCdZfzFPFCQXLhUO8zxM%2BeBDfZLy6YImqNgcNkirKhBmkWkI7XxwFHyZ%2FhG19cR02JzGOK90v0URWsjymh2w7N6S84CdN%2BDtIQjFdcT%2FNPQLIbSL9SHWooOxQyNtlgQn4r8gt5%2FWr9yOGJJ6OsEkpl4BExQDq6X%2FuJE9eXv3p5fHmpba57%2FWSkMiN5Iv%2F9EOI&X-Amz-Signature=9c794cfb68da4c3d38310020a3b31458552ec916fff79e437fe9f3f82ff5cfdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRTHGXDX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8MPoOzhNPlGzYgdrDSuDPA0wmcRPR8wjpygI4rIJSpwIgL2TRLIJoPm98bcpPlmez6c6VGsRwLjh521PRM%2BXwcl4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHq4apqnOIp4YJfZCrcA%2BvgKn2qX3g2CcLkkgax%2F7X5eeBCzsX%2FDWbnUy6pAN9Fc2lIc8kgPeMfpWluZGJSSdmQtHfWR14lz4sCricnTyUcLBbOVBw4ftd2hZ4kg3ALDY1bO2b7cFcRX6vq6%2BzLJMJUuriQP9BwKIGWdyESBrlJX7QtbeUfRsqnp585QPnBE5UP93jiKeKw79NDyu0BxwGJapFC30FXV6WAKneSkItaxbd4IJ231c43LXR%2B7qv0pE3QAjNJVjmcv%2Fr%2FPp5mL5A49dQpt6Mck2e8ez6KRmWie8Ax9hz8Z4hJ7mkPvASuvTS78USH%2B%2FUcchJvmgpUPm8ReRrmnGGnvYWYb7KjP6d8N5b5xlYE110xB8SnQXpEhrARI0LUg6RM%2B0kGmVdzG%2BUqKU4bD%2F82Q3Wm14s2tDUnOevsl5K6ASiu22xrngkt%2FlucEZUVTKpGQSpImS%2F6DJZDWVu8ax675oXM0xf4LgYt%2BdDT7njB7v5I10xZy4V5M2S1tjVG%2FLWpimpLJMJfyVzb5WtytF6YEMKc4KsT15ihgRw%2BXFlCI36LrzlOf8dNsFgkjrTcLTfoxCsC0gwSGtAAlb3BLmGwup1q0NiWvqG%2FaJ8q8iLwFrbBsAefI5vAEmmJOq9wr6CL1CA3MJSiqMQGOqUBQZVBU%2Fk6yElvLibb8INTWeqpXoydCdZfzFPFCQXLhUO8zxM%2BeBDfZLy6YImqNgcNkirKhBmkWkI7XxwFHyZ%2FhG19cR02JzGOK90v0URWsjymh2w7N6S84CdN%2BDtIQjFdcT%2FNPQLIbSL9SHWooOxQyNtlgQn4r8gt5%2FWr9yOGJJ6OsEkpl4BExQDq6X%2FuJE9eXv3p5fHmpba57%2FWSkMiN5Iv%2F9EOI&X-Amz-Signature=95799d2d205c0014c312af9cd598d0b801fb891ec5d8a1c4662e2d583eb0ccf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
