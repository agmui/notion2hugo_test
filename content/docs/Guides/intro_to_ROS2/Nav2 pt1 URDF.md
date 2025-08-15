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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ7SKQOH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCWl%2Fcz9ojM57gnjfTxXhRM9oqMtmGZa1NoS7cZ30yrZgIhALwY2nM32rDKmlosOfHKPROptkbQUz2q1rs7asqjr18XKv8DCGcQABoMNjM3NDIzMTgzODA1Igz0AEW2ufeE93lc1f8q3AMMBpGmNq6wF0%2B4GPKpM4d9uVg%2Fon21jnRaBLfG3KvSGVkLdHJmsyo5zlMe1RbRTMdcGllkalZOjgsvUlxAUWAogu%2F5h1VjQbWsnmTuCYjo4lvFhHT0qmfPsp%2BihWmw77YUEa18QKfK%2BDbauF4V8PjFV8h7hL051W5MYIvd1QM0JzNgVQe%2FAoaS1QWtfB6OhxGteO%2FOm%2BE8BfTVhL0hOJHxmk421s69wzY5vQkbfhqDWruMads0OVwYLNepZL%2BRb%2BQbwmbvpt%2B8BuCroz5n2kfYgJotfkuV3gxpwzehpsgh9eJI8V5UWQ%2FUDuldtkHcFqDT9BN1EY7hBh25s48e4hZ4jKC%2Fo8cEFJPTViYl89gs5cHc7NkNuh8Hb7AVOzjbgolW6C6wB6CUyuUIMl8FRB%2FEgYVbHT%2FhgE4FxwLrZxe7nyiNnIH%2B5xJj2BpfnzBlFe5YY7NFFhLVaPFeEQs1JHb0aR7UG7irtZqF6DKh7e8lPFpQjatbnbmwDU3gt3T78MNhJ7Hvz6jU45%2FWznrNcsyTGuOhGnoNlShv%2BwE2aBBgyBAyNU66XQX63GfWGLe%2Fnz8uhNPXsSna7TBu49AlOIL9mYLkmzrjjiSkuBY%2B2QO608gRQg%2FysDSOgU4E6jDH2f7EBjqkAR8%2FeV004qDJDfPVXMlQILL48v7rHoCxZNCqogUbo3J1pnCHP8AoDf9V986Bjc5uFBBGCTxcYikld7GwM4Zq04qPeL0DcQpALVhjAf5bdJK4isdTQp2pYx8tgKLvhYH2UiPldIDLKF0A37%2FG6qa5sCm%2BjYPoiaS%2BMudfRtQjAuedXYGZE5CMVJck%2FX2%2Fr%2BIHI3FLUk17pPePQyWWb7F13Xdtikay&X-Amz-Signature=b7d2a7b58d5e05edd00e95eef788a42ff12006cced65e042879350124f353283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ7SKQOH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCWl%2Fcz9ojM57gnjfTxXhRM9oqMtmGZa1NoS7cZ30yrZgIhALwY2nM32rDKmlosOfHKPROptkbQUz2q1rs7asqjr18XKv8DCGcQABoMNjM3NDIzMTgzODA1Igz0AEW2ufeE93lc1f8q3AMMBpGmNq6wF0%2B4GPKpM4d9uVg%2Fon21jnRaBLfG3KvSGVkLdHJmsyo5zlMe1RbRTMdcGllkalZOjgsvUlxAUWAogu%2F5h1VjQbWsnmTuCYjo4lvFhHT0qmfPsp%2BihWmw77YUEa18QKfK%2BDbauF4V8PjFV8h7hL051W5MYIvd1QM0JzNgVQe%2FAoaS1QWtfB6OhxGteO%2FOm%2BE8BfTVhL0hOJHxmk421s69wzY5vQkbfhqDWruMads0OVwYLNepZL%2BRb%2BQbwmbvpt%2B8BuCroz5n2kfYgJotfkuV3gxpwzehpsgh9eJI8V5UWQ%2FUDuldtkHcFqDT9BN1EY7hBh25s48e4hZ4jKC%2Fo8cEFJPTViYl89gs5cHc7NkNuh8Hb7AVOzjbgolW6C6wB6CUyuUIMl8FRB%2FEgYVbHT%2FhgE4FxwLrZxe7nyiNnIH%2B5xJj2BpfnzBlFe5YY7NFFhLVaPFeEQs1JHb0aR7UG7irtZqF6DKh7e8lPFpQjatbnbmwDU3gt3T78MNhJ7Hvz6jU45%2FWznrNcsyTGuOhGnoNlShv%2BwE2aBBgyBAyNU66XQX63GfWGLe%2Fnz8uhNPXsSna7TBu49AlOIL9mYLkmzrjjiSkuBY%2B2QO608gRQg%2FysDSOgU4E6jDH2f7EBjqkAR8%2FeV004qDJDfPVXMlQILL48v7rHoCxZNCqogUbo3J1pnCHP8AoDf9V986Bjc5uFBBGCTxcYikld7GwM4Zq04qPeL0DcQpALVhjAf5bdJK4isdTQp2pYx8tgKLvhYH2UiPldIDLKF0A37%2FG6qa5sCm%2BjYPoiaS%2BMudfRtQjAuedXYGZE5CMVJck%2FX2%2Fr%2BIHI3FLUk17pPePQyWWb7F13Xdtikay&X-Amz-Signature=d5fe00955ab838a55ebeabd0abd9c60c04e01809a99b7d2aa4e8e167dca2cefe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ7SKQOH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCWl%2Fcz9ojM57gnjfTxXhRM9oqMtmGZa1NoS7cZ30yrZgIhALwY2nM32rDKmlosOfHKPROptkbQUz2q1rs7asqjr18XKv8DCGcQABoMNjM3NDIzMTgzODA1Igz0AEW2ufeE93lc1f8q3AMMBpGmNq6wF0%2B4GPKpM4d9uVg%2Fon21jnRaBLfG3KvSGVkLdHJmsyo5zlMe1RbRTMdcGllkalZOjgsvUlxAUWAogu%2F5h1VjQbWsnmTuCYjo4lvFhHT0qmfPsp%2BihWmw77YUEa18QKfK%2BDbauF4V8PjFV8h7hL051W5MYIvd1QM0JzNgVQe%2FAoaS1QWtfB6OhxGteO%2FOm%2BE8BfTVhL0hOJHxmk421s69wzY5vQkbfhqDWruMads0OVwYLNepZL%2BRb%2BQbwmbvpt%2B8BuCroz5n2kfYgJotfkuV3gxpwzehpsgh9eJI8V5UWQ%2FUDuldtkHcFqDT9BN1EY7hBh25s48e4hZ4jKC%2Fo8cEFJPTViYl89gs5cHc7NkNuh8Hb7AVOzjbgolW6C6wB6CUyuUIMl8FRB%2FEgYVbHT%2FhgE4FxwLrZxe7nyiNnIH%2B5xJj2BpfnzBlFe5YY7NFFhLVaPFeEQs1JHb0aR7UG7irtZqF6DKh7e8lPFpQjatbnbmwDU3gt3T78MNhJ7Hvz6jU45%2FWznrNcsyTGuOhGnoNlShv%2BwE2aBBgyBAyNU66XQX63GfWGLe%2Fnz8uhNPXsSna7TBu49AlOIL9mYLkmzrjjiSkuBY%2B2QO608gRQg%2FysDSOgU4E6jDH2f7EBjqkAR8%2FeV004qDJDfPVXMlQILL48v7rHoCxZNCqogUbo3J1pnCHP8AoDf9V986Bjc5uFBBGCTxcYikld7GwM4Zq04qPeL0DcQpALVhjAf5bdJK4isdTQp2pYx8tgKLvhYH2UiPldIDLKF0A37%2FG6qa5sCm%2BjYPoiaS%2BMudfRtQjAuedXYGZE5CMVJck%2FX2%2Fr%2BIHI3FLUk17pPePQyWWb7F13Xdtikay&X-Amz-Signature=981092310ff45d86d96a1af3e47e66ab63eef097f0d9f13d2c7339d82481a03f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ7SKQOH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCWl%2Fcz9ojM57gnjfTxXhRM9oqMtmGZa1NoS7cZ30yrZgIhALwY2nM32rDKmlosOfHKPROptkbQUz2q1rs7asqjr18XKv8DCGcQABoMNjM3NDIzMTgzODA1Igz0AEW2ufeE93lc1f8q3AMMBpGmNq6wF0%2B4GPKpM4d9uVg%2Fon21jnRaBLfG3KvSGVkLdHJmsyo5zlMe1RbRTMdcGllkalZOjgsvUlxAUWAogu%2F5h1VjQbWsnmTuCYjo4lvFhHT0qmfPsp%2BihWmw77YUEa18QKfK%2BDbauF4V8PjFV8h7hL051W5MYIvd1QM0JzNgVQe%2FAoaS1QWtfB6OhxGteO%2FOm%2BE8BfTVhL0hOJHxmk421s69wzY5vQkbfhqDWruMads0OVwYLNepZL%2BRb%2BQbwmbvpt%2B8BuCroz5n2kfYgJotfkuV3gxpwzehpsgh9eJI8V5UWQ%2FUDuldtkHcFqDT9BN1EY7hBh25s48e4hZ4jKC%2Fo8cEFJPTViYl89gs5cHc7NkNuh8Hb7AVOzjbgolW6C6wB6CUyuUIMl8FRB%2FEgYVbHT%2FhgE4FxwLrZxe7nyiNnIH%2B5xJj2BpfnzBlFe5YY7NFFhLVaPFeEQs1JHb0aR7UG7irtZqF6DKh7e8lPFpQjatbnbmwDU3gt3T78MNhJ7Hvz6jU45%2FWznrNcsyTGuOhGnoNlShv%2BwE2aBBgyBAyNU66XQX63GfWGLe%2Fnz8uhNPXsSna7TBu49AlOIL9mYLkmzrjjiSkuBY%2B2QO608gRQg%2FysDSOgU4E6jDH2f7EBjqkAR8%2FeV004qDJDfPVXMlQILL48v7rHoCxZNCqogUbo3J1pnCHP8AoDf9V986Bjc5uFBBGCTxcYikld7GwM4Zq04qPeL0DcQpALVhjAf5bdJK4isdTQp2pYx8tgKLvhYH2UiPldIDLKF0A37%2FG6qa5sCm%2BjYPoiaS%2BMudfRtQjAuedXYGZE5CMVJck%2FX2%2Fr%2BIHI3FLUk17pPePQyWWb7F13Xdtikay&X-Amz-Signature=24be24cae0d58e665317378dec02bf14af69e41bdf5a6837179f4aa212886e3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ7SKQOH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCWl%2Fcz9ojM57gnjfTxXhRM9oqMtmGZa1NoS7cZ30yrZgIhALwY2nM32rDKmlosOfHKPROptkbQUz2q1rs7asqjr18XKv8DCGcQABoMNjM3NDIzMTgzODA1Igz0AEW2ufeE93lc1f8q3AMMBpGmNq6wF0%2B4GPKpM4d9uVg%2Fon21jnRaBLfG3KvSGVkLdHJmsyo5zlMe1RbRTMdcGllkalZOjgsvUlxAUWAogu%2F5h1VjQbWsnmTuCYjo4lvFhHT0qmfPsp%2BihWmw77YUEa18QKfK%2BDbauF4V8PjFV8h7hL051W5MYIvd1QM0JzNgVQe%2FAoaS1QWtfB6OhxGteO%2FOm%2BE8BfTVhL0hOJHxmk421s69wzY5vQkbfhqDWruMads0OVwYLNepZL%2BRb%2BQbwmbvpt%2B8BuCroz5n2kfYgJotfkuV3gxpwzehpsgh9eJI8V5UWQ%2FUDuldtkHcFqDT9BN1EY7hBh25s48e4hZ4jKC%2Fo8cEFJPTViYl89gs5cHc7NkNuh8Hb7AVOzjbgolW6C6wB6CUyuUIMl8FRB%2FEgYVbHT%2FhgE4FxwLrZxe7nyiNnIH%2B5xJj2BpfnzBlFe5YY7NFFhLVaPFeEQs1JHb0aR7UG7irtZqF6DKh7e8lPFpQjatbnbmwDU3gt3T78MNhJ7Hvz6jU45%2FWznrNcsyTGuOhGnoNlShv%2BwE2aBBgyBAyNU66XQX63GfWGLe%2Fnz8uhNPXsSna7TBu49AlOIL9mYLkmzrjjiSkuBY%2B2QO608gRQg%2FysDSOgU4E6jDH2f7EBjqkAR8%2FeV004qDJDfPVXMlQILL48v7rHoCxZNCqogUbo3J1pnCHP8AoDf9V986Bjc5uFBBGCTxcYikld7GwM4Zq04qPeL0DcQpALVhjAf5bdJK4isdTQp2pYx8tgKLvhYH2UiPldIDLKF0A37%2FG6qa5sCm%2BjYPoiaS%2BMudfRtQjAuedXYGZE5CMVJck%2FX2%2Fr%2BIHI3FLUk17pPePQyWWb7F13Xdtikay&X-Amz-Signature=a5f6466deba6b43732e452db22358ef4cc25d506a3625e26c960a3b60fb8a2d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ7SKQOH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCWl%2Fcz9ojM57gnjfTxXhRM9oqMtmGZa1NoS7cZ30yrZgIhALwY2nM32rDKmlosOfHKPROptkbQUz2q1rs7asqjr18XKv8DCGcQABoMNjM3NDIzMTgzODA1Igz0AEW2ufeE93lc1f8q3AMMBpGmNq6wF0%2B4GPKpM4d9uVg%2Fon21jnRaBLfG3KvSGVkLdHJmsyo5zlMe1RbRTMdcGllkalZOjgsvUlxAUWAogu%2F5h1VjQbWsnmTuCYjo4lvFhHT0qmfPsp%2BihWmw77YUEa18QKfK%2BDbauF4V8PjFV8h7hL051W5MYIvd1QM0JzNgVQe%2FAoaS1QWtfB6OhxGteO%2FOm%2BE8BfTVhL0hOJHxmk421s69wzY5vQkbfhqDWruMads0OVwYLNepZL%2BRb%2BQbwmbvpt%2B8BuCroz5n2kfYgJotfkuV3gxpwzehpsgh9eJI8V5UWQ%2FUDuldtkHcFqDT9BN1EY7hBh25s48e4hZ4jKC%2Fo8cEFJPTViYl89gs5cHc7NkNuh8Hb7AVOzjbgolW6C6wB6CUyuUIMl8FRB%2FEgYVbHT%2FhgE4FxwLrZxe7nyiNnIH%2B5xJj2BpfnzBlFe5YY7NFFhLVaPFeEQs1JHb0aR7UG7irtZqF6DKh7e8lPFpQjatbnbmwDU3gt3T78MNhJ7Hvz6jU45%2FWznrNcsyTGuOhGnoNlShv%2BwE2aBBgyBAyNU66XQX63GfWGLe%2Fnz8uhNPXsSna7TBu49AlOIL9mYLkmzrjjiSkuBY%2B2QO608gRQg%2FysDSOgU4E6jDH2f7EBjqkAR8%2FeV004qDJDfPVXMlQILL48v7rHoCxZNCqogUbo3J1pnCHP8AoDf9V986Bjc5uFBBGCTxcYikld7GwM4Zq04qPeL0DcQpALVhjAf5bdJK4isdTQp2pYx8tgKLvhYH2UiPldIDLKF0A37%2FG6qa5sCm%2BjYPoiaS%2BMudfRtQjAuedXYGZE5CMVJck%2FX2%2Fr%2BIHI3FLUk17pPePQyWWb7F13Xdtikay&X-Amz-Signature=427b55bd6b5541164eb6dcff7aab5f87226d3fe64495a041badf9dde2017e9fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ7SKQOH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCWl%2Fcz9ojM57gnjfTxXhRM9oqMtmGZa1NoS7cZ30yrZgIhALwY2nM32rDKmlosOfHKPROptkbQUz2q1rs7asqjr18XKv8DCGcQABoMNjM3NDIzMTgzODA1Igz0AEW2ufeE93lc1f8q3AMMBpGmNq6wF0%2B4GPKpM4d9uVg%2Fon21jnRaBLfG3KvSGVkLdHJmsyo5zlMe1RbRTMdcGllkalZOjgsvUlxAUWAogu%2F5h1VjQbWsnmTuCYjo4lvFhHT0qmfPsp%2BihWmw77YUEa18QKfK%2BDbauF4V8PjFV8h7hL051W5MYIvd1QM0JzNgVQe%2FAoaS1QWtfB6OhxGteO%2FOm%2BE8BfTVhL0hOJHxmk421s69wzY5vQkbfhqDWruMads0OVwYLNepZL%2BRb%2BQbwmbvpt%2B8BuCroz5n2kfYgJotfkuV3gxpwzehpsgh9eJI8V5UWQ%2FUDuldtkHcFqDT9BN1EY7hBh25s48e4hZ4jKC%2Fo8cEFJPTViYl89gs5cHc7NkNuh8Hb7AVOzjbgolW6C6wB6CUyuUIMl8FRB%2FEgYVbHT%2FhgE4FxwLrZxe7nyiNnIH%2B5xJj2BpfnzBlFe5YY7NFFhLVaPFeEQs1JHb0aR7UG7irtZqF6DKh7e8lPFpQjatbnbmwDU3gt3T78MNhJ7Hvz6jU45%2FWznrNcsyTGuOhGnoNlShv%2BwE2aBBgyBAyNU66XQX63GfWGLe%2Fnz8uhNPXsSna7TBu49AlOIL9mYLkmzrjjiSkuBY%2B2QO608gRQg%2FysDSOgU4E6jDH2f7EBjqkAR8%2FeV004qDJDfPVXMlQILL48v7rHoCxZNCqogUbo3J1pnCHP8AoDf9V986Bjc5uFBBGCTxcYikld7GwM4Zq04qPeL0DcQpALVhjAf5bdJK4isdTQp2pYx8tgKLvhYH2UiPldIDLKF0A37%2FG6qa5sCm%2BjYPoiaS%2BMudfRtQjAuedXYGZE5CMVJck%2FX2%2Fr%2BIHI3FLUk17pPePQyWWb7F13Xdtikay&X-Amz-Signature=cb6c70a6c92048bba71df62f9b333741b69d6ea98a69a1aa52477282626254de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ7SKQOH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCWl%2Fcz9ojM57gnjfTxXhRM9oqMtmGZa1NoS7cZ30yrZgIhALwY2nM32rDKmlosOfHKPROptkbQUz2q1rs7asqjr18XKv8DCGcQABoMNjM3NDIzMTgzODA1Igz0AEW2ufeE93lc1f8q3AMMBpGmNq6wF0%2B4GPKpM4d9uVg%2Fon21jnRaBLfG3KvSGVkLdHJmsyo5zlMe1RbRTMdcGllkalZOjgsvUlxAUWAogu%2F5h1VjQbWsnmTuCYjo4lvFhHT0qmfPsp%2BihWmw77YUEa18QKfK%2BDbauF4V8PjFV8h7hL051W5MYIvd1QM0JzNgVQe%2FAoaS1QWtfB6OhxGteO%2FOm%2BE8BfTVhL0hOJHxmk421s69wzY5vQkbfhqDWruMads0OVwYLNepZL%2BRb%2BQbwmbvpt%2B8BuCroz5n2kfYgJotfkuV3gxpwzehpsgh9eJI8V5UWQ%2FUDuldtkHcFqDT9BN1EY7hBh25s48e4hZ4jKC%2Fo8cEFJPTViYl89gs5cHc7NkNuh8Hb7AVOzjbgolW6C6wB6CUyuUIMl8FRB%2FEgYVbHT%2FhgE4FxwLrZxe7nyiNnIH%2B5xJj2BpfnzBlFe5YY7NFFhLVaPFeEQs1JHb0aR7UG7irtZqF6DKh7e8lPFpQjatbnbmwDU3gt3T78MNhJ7Hvz6jU45%2FWznrNcsyTGuOhGnoNlShv%2BwE2aBBgyBAyNU66XQX63GfWGLe%2Fnz8uhNPXsSna7TBu49AlOIL9mYLkmzrjjiSkuBY%2B2QO608gRQg%2FysDSOgU4E6jDH2f7EBjqkAR8%2FeV004qDJDfPVXMlQILL48v7rHoCxZNCqogUbo3J1pnCHP8AoDf9V986Bjc5uFBBGCTxcYikld7GwM4Zq04qPeL0DcQpALVhjAf5bdJK4isdTQp2pYx8tgKLvhYH2UiPldIDLKF0A37%2FG6qa5sCm%2BjYPoiaS%2BMudfRtQjAuedXYGZE5CMVJck%2FX2%2Fr%2BIHI3FLUk17pPePQyWWb7F13Xdtikay&X-Amz-Signature=736b14def1381408b17bd544b5245c62537a8a031f0c474659a0f862466a76b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ7SKQOH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCWl%2Fcz9ojM57gnjfTxXhRM9oqMtmGZa1NoS7cZ30yrZgIhALwY2nM32rDKmlosOfHKPROptkbQUz2q1rs7asqjr18XKv8DCGcQABoMNjM3NDIzMTgzODA1Igz0AEW2ufeE93lc1f8q3AMMBpGmNq6wF0%2B4GPKpM4d9uVg%2Fon21jnRaBLfG3KvSGVkLdHJmsyo5zlMe1RbRTMdcGllkalZOjgsvUlxAUWAogu%2F5h1VjQbWsnmTuCYjo4lvFhHT0qmfPsp%2BihWmw77YUEa18QKfK%2BDbauF4V8PjFV8h7hL051W5MYIvd1QM0JzNgVQe%2FAoaS1QWtfB6OhxGteO%2FOm%2BE8BfTVhL0hOJHxmk421s69wzY5vQkbfhqDWruMads0OVwYLNepZL%2BRb%2BQbwmbvpt%2B8BuCroz5n2kfYgJotfkuV3gxpwzehpsgh9eJI8V5UWQ%2FUDuldtkHcFqDT9BN1EY7hBh25s48e4hZ4jKC%2Fo8cEFJPTViYl89gs5cHc7NkNuh8Hb7AVOzjbgolW6C6wB6CUyuUIMl8FRB%2FEgYVbHT%2FhgE4FxwLrZxe7nyiNnIH%2B5xJj2BpfnzBlFe5YY7NFFhLVaPFeEQs1JHb0aR7UG7irtZqF6DKh7e8lPFpQjatbnbmwDU3gt3T78MNhJ7Hvz6jU45%2FWznrNcsyTGuOhGnoNlShv%2BwE2aBBgyBAyNU66XQX63GfWGLe%2Fnz8uhNPXsSna7TBu49AlOIL9mYLkmzrjjiSkuBY%2B2QO608gRQg%2FysDSOgU4E6jDH2f7EBjqkAR8%2FeV004qDJDfPVXMlQILL48v7rHoCxZNCqogUbo3J1pnCHP8AoDf9V986Bjc5uFBBGCTxcYikld7GwM4Zq04qPeL0DcQpALVhjAf5bdJK4isdTQp2pYx8tgKLvhYH2UiPldIDLKF0A37%2FG6qa5sCm%2BjYPoiaS%2BMudfRtQjAuedXYGZE5CMVJck%2FX2%2Fr%2BIHI3FLUk17pPePQyWWb7F13Xdtikay&X-Amz-Signature=6b3dcedf70402ae8137b5ca747f4e18ddcd789929ec5ac7b9c4bef2164106b7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ7SKQOH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCWl%2Fcz9ojM57gnjfTxXhRM9oqMtmGZa1NoS7cZ30yrZgIhALwY2nM32rDKmlosOfHKPROptkbQUz2q1rs7asqjr18XKv8DCGcQABoMNjM3NDIzMTgzODA1Igz0AEW2ufeE93lc1f8q3AMMBpGmNq6wF0%2B4GPKpM4d9uVg%2Fon21jnRaBLfG3KvSGVkLdHJmsyo5zlMe1RbRTMdcGllkalZOjgsvUlxAUWAogu%2F5h1VjQbWsnmTuCYjo4lvFhHT0qmfPsp%2BihWmw77YUEa18QKfK%2BDbauF4V8PjFV8h7hL051W5MYIvd1QM0JzNgVQe%2FAoaS1QWtfB6OhxGteO%2FOm%2BE8BfTVhL0hOJHxmk421s69wzY5vQkbfhqDWruMads0OVwYLNepZL%2BRb%2BQbwmbvpt%2B8BuCroz5n2kfYgJotfkuV3gxpwzehpsgh9eJI8V5UWQ%2FUDuldtkHcFqDT9BN1EY7hBh25s48e4hZ4jKC%2Fo8cEFJPTViYl89gs5cHc7NkNuh8Hb7AVOzjbgolW6C6wB6CUyuUIMl8FRB%2FEgYVbHT%2FhgE4FxwLrZxe7nyiNnIH%2B5xJj2BpfnzBlFe5YY7NFFhLVaPFeEQs1JHb0aR7UG7irtZqF6DKh7e8lPFpQjatbnbmwDU3gt3T78MNhJ7Hvz6jU45%2FWznrNcsyTGuOhGnoNlShv%2BwE2aBBgyBAyNU66XQX63GfWGLe%2Fnz8uhNPXsSna7TBu49AlOIL9mYLkmzrjjiSkuBY%2B2QO608gRQg%2FysDSOgU4E6jDH2f7EBjqkAR8%2FeV004qDJDfPVXMlQILL48v7rHoCxZNCqogUbo3J1pnCHP8AoDf9V986Bjc5uFBBGCTxcYikld7GwM4Zq04qPeL0DcQpALVhjAf5bdJK4isdTQp2pYx8tgKLvhYH2UiPldIDLKF0A37%2FG6qa5sCm%2BjYPoiaS%2BMudfRtQjAuedXYGZE5CMVJck%2FX2%2Fr%2BIHI3FLUk17pPePQyWWb7F13Xdtikay&X-Amz-Signature=47b90f5779a9fb821f4924f3edec99098a64e1aeaaff3c1437a3c7a8fa16d35f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JZW3MPO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDpcAYpmuDzTFA%2Fzdj86fQDu%2FCQGYkH%2FAIElqOsa4DSrQIgUqrqHoHPMfsLcErW6shka7NqkVDecs5gN0YXzZ16Miwq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMzmjWybSzNRnSpMQircAx1KZWY9OnoBMPARa9NHdyGrsOdHvdw3%2BJH4yW6EvBfpFF1xm0eJTuL89m2U6R3E123w0%2B9LB3Sy6YtmtVGzoGW9nZCiP2jlSCCraKYCQeOAF3VbCtrMT2FygSupzQ3eeVeBUzNxmtuPY3umRD9F0FJ5cMwFUhz1WnWaYAea%2FEkAKce%2FBW45ei%2FQ%2FAa6gMF8AlXvvp6aPYTMeJhwQjYQxqWs1VTHK86Wz7bS9%2B6HzlX7G%2ByDm%2BatpegZaQnS511RRbGWUmzcSX7a88i1eZJw74Ie58910vvBqAK4X8afRj5k%2BdJEAcutXpQrEGqaQYMw7O55k3X0IFjdLhH4QrkGaTeI7%2FaHmAggYmL3Ley%2FoP09ytXjtkitSaPGwFLPTBVzf49BohH%2FRpoevntuuSRcztzXdZZxWAbPEiMNeNjLyEs7S7T44r7P%2B44aNILOQmCQVX9rd4HsvrlliNqAVZVMevyUGE7rkSqkyckmWiZGKm1VL8mNfxdtIxtysj3iuTJ2iL%2BKON3aezUIfsmGzcOoNpCa8t77t8aA5GV8sc%2FJwo2oZsSieNtVvyIvlhOo9jPNuBdA4%2BOyDoxlTnrmxMJETZ%2FjhsHg9TC5wL4GntFkL4g7vQBQPR%2FaxGf0FW6NMM3Y%2FsQGOqUB23m54Jd%2BXQQvH1%2Bdn%2FVQgh7nHZDxKgW%2Fco8cTihWlDNZ501lj%2Bvk9PJvzj2Qpzd%2BXiSWzPdRNoBiHB%2B0Xir%2F7R0He%2B6oRI8w7y49NQGNLa7z8cuyj02dTISBfhUvxhkESWFCifN6dcWUpQq3xFQpzcfEzZK2ycAtVV16%2F1xsaMG%2FENj27C3lx3xUkz4aWs2wYezl7dn93hxtUxIVUVCE%2BFAvAgJo&X-Amz-Signature=947b81c3203befb146974a16cca14e06a290a3f76e737817a96cc9a6a5c73061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M5FKIEW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIBjUp8stCPs54gnwvHLGQWXy2Gev3kODcLmd73ujpR%2FwAiEA0mwO75ApEoky8j9pw5SGTe8UTw%2FkULShBA60x4ucnbQq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNByZx55Qn4H78xosSrcAytTXhePW2TpfsQkXc1kEDvVWqVmvhgRbjZGxWnWo4e%2BIPJ1a0lBsVDWgjICrFolR7q7lvYuealxgz4t1gLUczvYtzvPgkFs4xvV8CCQe%2Fs3um3tswhOMQD%2FT1UUcV3C7oitQmA%2BvM8INWo%2FaRuymuLr1h7xyR4Mc3OHYX3J5JjuCGiqcpjLkT2AVmOiPQaEU4Rvcj2ueDQG7vZXlE6mvIZjjO9Fmd14AAILfixFc%2FUiAou81JMllIOFMqW%2FjseVV5JFtiiqQjza%2Fi6aAjDUuI5jTLHkZgKBzafsL4BR%2FhY8m70%2FU4hJbCwsbMbPMV%2BaNMbc4Ip2bKE3csFP%2B4c4iUKsTDE2bIE3GFmjm6qsHwduihU6LgHf0CZs2OYh0U7gC74tE6tFzsyvWvjetZPr0vtFu0ZU6K5J2FV4nx8475fDrdaaM5ExrvEU7WqKtCyYOtKGeZZ43xaF5%2BNqtuRQBxxPyYPKOaIB4o%2BVRdoStzOgLfjFXc5OWTOhlPEXxUwkr7cDw%2FN0RYRmCVfObvLgHh3vCgv36xu7JaB%2FP94xtM3rk8rq3Sbaup8e2AR2XDf6xJ3RLg7iYi9d3tXtN8QyCu8faD3CLahlQsyrnmWvT9PeBsvKdNfT2%2FQMQpGYMPnX%2FsQGOqUBrUmxynttTq6RngWgN40TaZBCJ%2FUSrv6Ah78KJlZyNdPu755q7NVnSBsY%2BrCvrgzgA6UeoSLWFvXhSH%2BYqUZRHzGyS3yC3Tdrv94Ji%2BS2SARoP1j%2BUoAYEPFRUIYg%2FvxuV9%2FmmolTa9wxQkJRte0TFmlhlkSLdj5v3JvgePfzvVrKw6fRu1MeuOYEu5dGTo9gmnSPvMsUWAWmHJgYUzEvrT1RmLQX&X-Amz-Signature=56a270ed94353aa7d86352376cfa5767a4339503868f22494c85ce23208f1028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUM4Q6GQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T231007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDZ9kUUBYTNZYje0aPVDcKnXQEFG%2BmhNXwJqtvcg9MIPgIhAKjdnOaOnneAKo369Wl8g6PpZ2TnrYd1z8MwN8zi8TPLKv8DCGcQABoMNjM3NDIzMTgzODA1Igx2zMTASBiAdMmMi0sq3AOuwU7kqnXEs4M7ruhGlkUbDrMadu%2B8pBO%2BMGHNROJ%2BZE%2FA%2FpDybUD64Y5B6r2HWVwj9qlclXHT4sTWE%2F6uhLMjz1kqiwFN8aOvRbtieZe%2FNE9FsgvLcJIpGIw1%2F8MeoZSe4hlBsrOf7euwibAOKi%2BqeCmro0709tdF0jEc5TMXTMX7Ya45gnWHVbgxbc6WIGiBdpONPIlRWZ9H0aeaL1DoDwJ3EN%2BZIl0JGOsAHcu7sfcWKtKYvdwONBCbRK7J3t7Ok1f5QaBjz7nH%2F9uHOmcs2IXq%2BSYV95Z4OvGPhdEKvBsD9VbrHs4mVTIRUR4N7U00nAbvsg9CqJ%2FA1Q%2Fb2Tpc4AwSetUSA4fSlkoe4%2BqbHPs%2Fwdy4iiy5d%2FaKv3%2FncSWtNuqY8aC1aU4pwdCwdc0QBbo%2Fd301e190dY2%2FC2tipoLmItoFxdUkq9SQB4KJdtMwUtwbsaMPH173EalZlFWpba35XeLCgzRLalF%2FUwSqpeF1YEUs5mSLrGsHiBt6yk3hN3%2BXv8oycR%2Bio6JLXzsVv%2B4YJ8lGZfLDE%2B9bZxcDoTGkgyuGNRSgWRN%2BtmosLXG5Cy8NVPL6SapgU9RFvnZQZv61qhztBCgQvDNCnXlZRjM2lisAcHsG87KPgTCv2P7EBjqkAafKs2A02qX9OKjdiFYGgZN1TfupKFbmzOvcCfokFtThmfsrPUcO2v9BoIYHK9%2Bc7Ij7RZKSa9CUA6PO50gQ9I2yoEkDYVdzfiLsEHcBsY%2FLLoE5spzlPInFP%2BzdpgJjG%2BtWvL10n6dibvD2Y94BIEJwKMjsV%2FTd5BjeJnEgVHKGLQ9Kg8FqKipGuixpwhhd5hmBa03Gh4qtsIiCtedIHRgwYh5z&X-Amz-Signature=108b9a2a230d226acda4e8c693ae0be9244251aaef696f758c394f9f5519b116&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ7SKQOH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCWl%2Fcz9ojM57gnjfTxXhRM9oqMtmGZa1NoS7cZ30yrZgIhALwY2nM32rDKmlosOfHKPROptkbQUz2q1rs7asqjr18XKv8DCGcQABoMNjM3NDIzMTgzODA1Igz0AEW2ufeE93lc1f8q3AMMBpGmNq6wF0%2B4GPKpM4d9uVg%2Fon21jnRaBLfG3KvSGVkLdHJmsyo5zlMe1RbRTMdcGllkalZOjgsvUlxAUWAogu%2F5h1VjQbWsnmTuCYjo4lvFhHT0qmfPsp%2BihWmw77YUEa18QKfK%2BDbauF4V8PjFV8h7hL051W5MYIvd1QM0JzNgVQe%2FAoaS1QWtfB6OhxGteO%2FOm%2BE8BfTVhL0hOJHxmk421s69wzY5vQkbfhqDWruMads0OVwYLNepZL%2BRb%2BQbwmbvpt%2B8BuCroz5n2kfYgJotfkuV3gxpwzehpsgh9eJI8V5UWQ%2FUDuldtkHcFqDT9BN1EY7hBh25s48e4hZ4jKC%2Fo8cEFJPTViYl89gs5cHc7NkNuh8Hb7AVOzjbgolW6C6wB6CUyuUIMl8FRB%2FEgYVbHT%2FhgE4FxwLrZxe7nyiNnIH%2B5xJj2BpfnzBlFe5YY7NFFhLVaPFeEQs1JHb0aR7UG7irtZqF6DKh7e8lPFpQjatbnbmwDU3gt3T78MNhJ7Hvz6jU45%2FWznrNcsyTGuOhGnoNlShv%2BwE2aBBgyBAyNU66XQX63GfWGLe%2Fnz8uhNPXsSna7TBu49AlOIL9mYLkmzrjjiSkuBY%2B2QO608gRQg%2FysDSOgU4E6jDH2f7EBjqkAR8%2FeV004qDJDfPVXMlQILL48v7rHoCxZNCqogUbo3J1pnCHP8AoDf9V986Bjc5uFBBGCTxcYikld7GwM4Zq04qPeL0DcQpALVhjAf5bdJK4isdTQp2pYx8tgKLvhYH2UiPldIDLKF0A37%2FG6qa5sCm%2BjYPoiaS%2BMudfRtQjAuedXYGZE5CMVJck%2FX2%2Fr%2BIHI3FLUk17pPePQyWWb7F13Xdtikay&X-Amz-Signature=b7189b240b0c738b554b2c22067d696ea357595c61cc8de2e1d4d4deb056352b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMOKIN3P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T231015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCYFTji7wRDZ3Rsr2XEp6GeOae70HIERCLUoxGNyVodCAIgJMFrz5IzqtKcYyWTEgiQG8gwmNO1e16TqYj2kTy1Ri0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDKnqTWyeEYO%2FuEAPKyrcA%2FjgSA9C2G0LiUc6HY0YgfRm18xWyfyTfmtRVQlYHO0SMy%2B59yweJyyPpa3iVABHaHD9h%2BfrRy0uZ6WEFK8wDoV3LPH5FirRcRiud91gGiw4IwIo%2FJCySatMOcVvsb2uZhy784Y9acwVX3d4wVMYzsMo8LNbsoUFlXQB%2BORC6tY5ycYRJh17k%2F7xPR5hvF%2BuUtleyacMyeWBaeE22Mbm8zAC%2FTSItHbQqmvDyeY%2B2s7pOIuJxftUWlrQ3OOjO6t6DMbVN2bp%2BB4XcbEHLN9LzkWMzAK7HyxBlTaNEGfX7CJd0EIcQEI%2F7lydsZzk8SZI0Dncslmamc5w%2F6lgSNT%2FI3WlVVox%2B2f2uDLOW9D8KNDqxZmAuUpPG4lj9lT1i6vhnj2YtlmhLyXOxXSnP3Xw0blbIwhEH9SeLWVbq2dA6qBg8Lx07xn3PKR9nTD6v33eWGpM%2F6IAVeHtrEPKR1qeTwD5ziFIUgf7ITLc5aeftkd1C4bL1hrro7pPhthY959cHdTphfjS4wmaM6GzWD208esM6J7BGeIvZ01o8KT2lecGD7XVcp1ya0%2FSj9jKnacTXQz4l3E8CjU7cZ1H4K4h%2FkQdr8uwaMyf9%2B6MmTPc31CdDQ2otAWjrgIePbRHMJLY%2FsQGOqUBNEX6eMadcTkWR7fL9UMi%2FAUPpURhRg5wjTR2QPeKH3h2xUmH%2F5etUp7abBn9qSOK0DW4fsxzO%2F3HvfF2OTB2wUiOKXlJCcRe4egMdqKL7HPW7%2FUowLFjiyrRSB%2BKfyuQs8fMIRfrA0w8LoLtSZ1aHlaNZ6kws8lqbH3VP2UPwFj2a5pY9YQJsoZSJa%2FaNEIQXzOpP83C2sLGwnWsQsm1jvplz5ix&X-Amz-Signature=2902456015b0b108bfe4db93853c2416f178d1b8f229f9e02dce0277023f4faa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ7SKQOH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCWl%2Fcz9ojM57gnjfTxXhRM9oqMtmGZa1NoS7cZ30yrZgIhALwY2nM32rDKmlosOfHKPROptkbQUz2q1rs7asqjr18XKv8DCGcQABoMNjM3NDIzMTgzODA1Igz0AEW2ufeE93lc1f8q3AMMBpGmNq6wF0%2B4GPKpM4d9uVg%2Fon21jnRaBLfG3KvSGVkLdHJmsyo5zlMe1RbRTMdcGllkalZOjgsvUlxAUWAogu%2F5h1VjQbWsnmTuCYjo4lvFhHT0qmfPsp%2BihWmw77YUEa18QKfK%2BDbauF4V8PjFV8h7hL051W5MYIvd1QM0JzNgVQe%2FAoaS1QWtfB6OhxGteO%2FOm%2BE8BfTVhL0hOJHxmk421s69wzY5vQkbfhqDWruMads0OVwYLNepZL%2BRb%2BQbwmbvpt%2B8BuCroz5n2kfYgJotfkuV3gxpwzehpsgh9eJI8V5UWQ%2FUDuldtkHcFqDT9BN1EY7hBh25s48e4hZ4jKC%2Fo8cEFJPTViYl89gs5cHc7NkNuh8Hb7AVOzjbgolW6C6wB6CUyuUIMl8FRB%2FEgYVbHT%2FhgE4FxwLrZxe7nyiNnIH%2B5xJj2BpfnzBlFe5YY7NFFhLVaPFeEQs1JHb0aR7UG7irtZqF6DKh7e8lPFpQjatbnbmwDU3gt3T78MNhJ7Hvz6jU45%2FWznrNcsyTGuOhGnoNlShv%2BwE2aBBgyBAyNU66XQX63GfWGLe%2Fnz8uhNPXsSna7TBu49AlOIL9mYLkmzrjjiSkuBY%2B2QO608gRQg%2FysDSOgU4E6jDH2f7EBjqkAR8%2FeV004qDJDfPVXMlQILL48v7rHoCxZNCqogUbo3J1pnCHP8AoDf9V986Bjc5uFBBGCTxcYikld7GwM4Zq04qPeL0DcQpALVhjAf5bdJK4isdTQp2pYx8tgKLvhYH2UiPldIDLKF0A37%2FG6qa5sCm%2BjYPoiaS%2BMudfRtQjAuedXYGZE5CMVJck%2FX2%2Fr%2BIHI3FLUk17pPePQyWWb7F13Xdtikay&X-Amz-Signature=457c437168f5f06c4b8a7dd01c99a048bfbbbca31a401850f2da99ebb08f0e5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNGHD2Y7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T231019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCID4R9Ijg%2BMr6WuthGld6U2iAphDb0W%2FE9wKaoOBz49qbAiBNRFwfNU%2B0xKpsKOzNiRvVqeS8HAlU0CR21ijw%2Fh9F2Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM7NZ3eKW7AWH57uSZKtwDZE4nY69gnf7hUn12hhVqzNLvLKFHGcDVG4W52FAYhcqgfFf2xB1eMpQEcVWq8HZ0V5W6jdAH9U%2Bon2rfP8J5xfE9y%2BmCfu2D2dbPWO5U3k6Gev1UISHrOHiXW5TX9r5LKjniAff2jI7APn%2FTnmwIns6cGgr2CR9d6ZZTAHyAUsDe8tB6mvW5ZpSFSrizfdZvB%2BTlMlraWl%2FN%2BelKXJLgXz2Q5yG5lf7tL3olME%2BBr60fEyjWijBnK3wFIhMojIyyR9ICPXgsateIN4wVL8WdJ6q0Byn3Xs2RT6q3mX%2BCiuf7OHweBg8Z%2FLPjLIt4tL2pfLswztrp0uxwKW%2BjxnhJ%2BP4xKhgFAT4pPlqos%2FAjB5tSa19HD5qTA2TxkC3o5JiTEgBwSvU8pr0ZvRGQgcrFiPOySsB8G7nj%2FD2uqnvuiy%2Br%2FlRKTOjieKR0aIjR5ceqohHSb5cXPuE%2By2nlpT7kFc9tyhq9NDVRvs6UxnhfxXzYX0UZ8D6vESQH218GMVm2St27KNskXhba6hZWpc91yyiocLHMpabsaJ2uMRZBLmUKXTtBQg91YHj7wVtmu4HkeeNxZBzwAMas5Fkr4EL6mAzQI6LLkq3uw9Z2xHrg1p9bFwPEzdnk1h7Kjv0w9df%2BxAY6pgGLI4kBxYE3KLJrJGy3et722nVUbcsNs1FMV7qi2VUrj5RnXV%2FWpqRkOSX9gJhTYXRLbcMz7o6w57k8c%2Fh9ONijSkyFe%2Br0ulvtIUNT5dpUBzd2qQtCgo9rVFKdnu%2FtHkE%2FR3IUmag1g6wYsjZWn3U%2F3Sdzj8nPvLpEBYgHYY%2Ba9YDx7icudKUjh7RwKZxPMXVozGa4Ei77g%2BZaTMBiks6tSfXVdMgL&X-Amz-Signature=addc6d9bd8819d1dd590571f90bff87c6bfa06f33f97c75d3c19561e29bbbc7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ7SKQOH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCWl%2Fcz9ojM57gnjfTxXhRM9oqMtmGZa1NoS7cZ30yrZgIhALwY2nM32rDKmlosOfHKPROptkbQUz2q1rs7asqjr18XKv8DCGcQABoMNjM3NDIzMTgzODA1Igz0AEW2ufeE93lc1f8q3AMMBpGmNq6wF0%2B4GPKpM4d9uVg%2Fon21jnRaBLfG3KvSGVkLdHJmsyo5zlMe1RbRTMdcGllkalZOjgsvUlxAUWAogu%2F5h1VjQbWsnmTuCYjo4lvFhHT0qmfPsp%2BihWmw77YUEa18QKfK%2BDbauF4V8PjFV8h7hL051W5MYIvd1QM0JzNgVQe%2FAoaS1QWtfB6OhxGteO%2FOm%2BE8BfTVhL0hOJHxmk421s69wzY5vQkbfhqDWruMads0OVwYLNepZL%2BRb%2BQbwmbvpt%2B8BuCroz5n2kfYgJotfkuV3gxpwzehpsgh9eJI8V5UWQ%2FUDuldtkHcFqDT9BN1EY7hBh25s48e4hZ4jKC%2Fo8cEFJPTViYl89gs5cHc7NkNuh8Hb7AVOzjbgolW6C6wB6CUyuUIMl8FRB%2FEgYVbHT%2FhgE4FxwLrZxe7nyiNnIH%2B5xJj2BpfnzBlFe5YY7NFFhLVaPFeEQs1JHb0aR7UG7irtZqF6DKh7e8lPFpQjatbnbmwDU3gt3T78MNhJ7Hvz6jU45%2FWznrNcsyTGuOhGnoNlShv%2BwE2aBBgyBAyNU66XQX63GfWGLe%2Fnz8uhNPXsSna7TBu49AlOIL9mYLkmzrjjiSkuBY%2B2QO608gRQg%2FysDSOgU4E6jDH2f7EBjqkAR8%2FeV004qDJDfPVXMlQILL48v7rHoCxZNCqogUbo3J1pnCHP8AoDf9V986Bjc5uFBBGCTxcYikld7GwM4Zq04qPeL0DcQpALVhjAf5bdJK4isdTQp2pYx8tgKLvhYH2UiPldIDLKF0A37%2FG6qa5sCm%2BjYPoiaS%2BMudfRtQjAuedXYGZE5CMVJck%2FX2%2Fr%2BIHI3FLUk17pPePQyWWb7F13Xdtikay&X-Amz-Signature=fd57070e61fb1caeba405c098acff730979f3c8dc23878ec308d7160ad3ca3c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OUWQ4CB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T231021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICyxfGfoHWMYLJZMWPa%2FF5e7UeGXZML9KzR81quHOeGQAiBngnoSFsZ8hQiXyh4wb%2FzUoLQwEC2PPh1xDsQ5hjsTBCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMrwW24hMzt9YAY2YlKtwDTt4i3aiLHNTNNRp7L3r%2BzgTJQ29nnXNmgpiQ3ESdFYydDFxqD58aRITAwe7em%2BloP04ZUsFuxXvQ%2BWMjhhzDSnuaaIFy2baOOeh7gvinEm3CTee18F2sx8F8471Q41SsX8icGJdVLj9WYiUVUdFEBe7k%2FT%2F9IAwW4SSFfkfGMF%2B75SajDmCpA0rUjFq3j5TKNQgoedDqd9sc7bwET8uMJO32hBR96LaQqHGEuQjF4NYKD0FLoWyZma2t4QgfFnmJp6%2FJxNjB0jUZP3LM1dIOdBUIRrQiVQC4%2BpeNypNHysdFPO%2FFMgB5tGpdHdi%2FvblFWuY3vqlTXulYUbM4zr4g%2FMnPz%2BtsxADHa4HWCTnWZ5Ho4jkCddfBKlXAiXRYhHEwiQ%2FHqzDhxN6Sot0o49OAvgW5%2Fco7a2xFS4VewKxv7PMc3iSFcdabM6ZOmlUtWAOeCL%2FRuVR%2F4W85WxRXbct4h2HRPz96Lx8HGmlzqu0miIdNKqxxyKGuyFYg3UC3vDoP9WF5eBkD0WmVDj6gErTgkGyxBssiLOuXFMWKiS%2B3x%2FL21dpkDA26y4FF0hDqiJUKsoOom5m5%2BR5GcU8GDG9i%2Fp%2FsBvzuRN76q%2BCRMPCr5on4sOLlVj3iS4vbc8Uw59f%2BxAY6pgHS%2FDekehXqQ4SBPpGe6q%2FCyM2aisQnQvPiyiEX6hUH0NsxJujguhah0kTNPF%2BNqZx5w9ia2lG5XMNb249QTcmxQLa9FznQA6GSxr5reUr74qHfwIqdZYHUi3dOXfWskq5Pwu2ZtBbMeVyMV4Pry%2BW3WsqqChHh4kUdo8qdYgF92SyuW%2FIOaSyIjL8oGwAwL9FdKdB58etrNPrHjQmYK4um13T4ohDD&X-Amz-Signature=6ab0335b76ba1d2f2b1dc4ce67e2240651758891d1ab8f516c6727102c5ae5e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ7SKQOH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCWl%2Fcz9ojM57gnjfTxXhRM9oqMtmGZa1NoS7cZ30yrZgIhALwY2nM32rDKmlosOfHKPROptkbQUz2q1rs7asqjr18XKv8DCGcQABoMNjM3NDIzMTgzODA1Igz0AEW2ufeE93lc1f8q3AMMBpGmNq6wF0%2B4GPKpM4d9uVg%2Fon21jnRaBLfG3KvSGVkLdHJmsyo5zlMe1RbRTMdcGllkalZOjgsvUlxAUWAogu%2F5h1VjQbWsnmTuCYjo4lvFhHT0qmfPsp%2BihWmw77YUEa18QKfK%2BDbauF4V8PjFV8h7hL051W5MYIvd1QM0JzNgVQe%2FAoaS1QWtfB6OhxGteO%2FOm%2BE8BfTVhL0hOJHxmk421s69wzY5vQkbfhqDWruMads0OVwYLNepZL%2BRb%2BQbwmbvpt%2B8BuCroz5n2kfYgJotfkuV3gxpwzehpsgh9eJI8V5UWQ%2FUDuldtkHcFqDT9BN1EY7hBh25s48e4hZ4jKC%2Fo8cEFJPTViYl89gs5cHc7NkNuh8Hb7AVOzjbgolW6C6wB6CUyuUIMl8FRB%2FEgYVbHT%2FhgE4FxwLrZxe7nyiNnIH%2B5xJj2BpfnzBlFe5YY7NFFhLVaPFeEQs1JHb0aR7UG7irtZqF6DKh7e8lPFpQjatbnbmwDU3gt3T78MNhJ7Hvz6jU45%2FWznrNcsyTGuOhGnoNlShv%2BwE2aBBgyBAyNU66XQX63GfWGLe%2Fnz8uhNPXsSna7TBu49AlOIL9mYLkmzrjjiSkuBY%2B2QO608gRQg%2FysDSOgU4E6jDH2f7EBjqkAR8%2FeV004qDJDfPVXMlQILL48v7rHoCxZNCqogUbo3J1pnCHP8AoDf9V986Bjc5uFBBGCTxcYikld7GwM4Zq04qPeL0DcQpALVhjAf5bdJK4isdTQp2pYx8tgKLvhYH2UiPldIDLKF0A37%2FG6qa5sCm%2BjYPoiaS%2BMudfRtQjAuedXYGZE5CMVJck%2FX2%2Fr%2BIHI3FLUk17pPePQyWWb7F13Xdtikay&X-Amz-Signature=8519e2193e10e21dbd919ae146fb1eedccc2534d73c10cb9422fdb3956d9e222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE6KV5LB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T231029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIEfDSK%2FgsOjZO3Kq2o1%2Bizb5Xq3Q7G2VFKsOPK%2Fhgv0zAiAOJKSt%2FxgrSwHigFO%2BGgUHioU%2B%2B4A8lqXmdq7uDbQDqSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMtfDoebohYcjduE%2BUKtwDjOl%2BJZYhu0MY%2Bn%2B2gyWUOyrm%2FLgEKP%2FzAdhJiuFwmmtAUYKCzCfGXIiYP%2FklW%2B7fkkIq35JCbtPfou6zffGNYFC7srxJ%2FpGLCPC4LqaJjZGdNcyO9CNnllG8MnSGRW4C55Mdxrl%2FLba55eOuu1sJ49NBT%2F1jvUpfFeZDybo2IwDD3K%2BVLorvlkUK8AeeTTQC9%2BQHRT67xGZQzefvSmMnlZ%2BFosbShqdM17j3D8EFjbz5dYzvAvtQVDeGZ3DG0plarElkyO73lB3l4081Fhv6%2FjpH8B4tAOB%2BRtMR7FEcul5sy3zMxGuLsN9r5lAvz3pAVRPwhKCOYc7v8AEDt0mi4wxQJKqZQaBDKZA0%2BO5X3r86ytWs5ceDTZppRQnh7v7vLz%2F3a47k5AaJh4CIsz8%2FR%2BhNQLw5rTHxQ92nsZ%2B8y%2F2mhikUhf5JbimmLwfTXmSFvvffKsxLbVoycONWrp7S6pX387TUNphovhJrP%2Bst9%2FCNCl9aw1bRMS9LYiQKZUb4nBVUY%2FNzUrQi5OzEaJkalWBmV3nv7t9abSn%2BJPOdF22%2BMMyv3f9x22erJvy4ESH%2BQJNcVDaeaHKbWZDzY3RSKWC1P4jGlUBUvkIE5Pid%2FAAzZ7i%2FDayZq1bKbC0wrNj%2BxAY6pgFIC9EgI5RWDk%2BdMJi4WRFGN1kK01msEy6zhEdIh7q903LSRC1oJBXpvJYT%2FxhCdZp5tTv3AaotHcZyza%2FgviKMSlFrqnWxbUZsomoPx%2FUHq%2BifrJ5QsOqvEzZ24pW7AVp9Ikw%2B29Tg7EBzjkUQLnixqJdOfVglNbn6w7wbPzg8pTCII%2BZLnGZYKDUzUxOH4pO44YO23v18GkWcvxPfYlQ6edk8ChDM&X-Amz-Signature=40fd6858269da64bf9e1b828f990c82f54ce0a1f8c0435a19204d3f24ee3860b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TPTXXZ6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T231031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAPsL%2Brtz6N7X0x91EsJkrp%2B%2FALuGI43Yxi5xAQdfYljAiEA%2B7TkmLSZI9Sie%2BQO0DBKSi%2BU2yb%2F9lwjV9t3KwcWveIq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDBCLZWjLInxmgnYkwCrcAyVNcoqCr5u9Xn3piRuiJI4A3A0N2E5CyOYhDoC%2BgkMVoRn17sQZJhxaCsWibAVxUBxSd%2FueHPuVeA6SFz8yio48ZXQX2L7ZbTvgWeL4xTA%2BzOTI8io8UFtBvALc%2FvJzKQC%2FaN%2B4vMc00sbazJ9L6e%2BhdYc6nxAW5GNyi9ncP%2FDFan%2Bs5EQeJ2dd%2FXO8nzUu%2BZJmSyo3cinj2Ktt0y7mZn4yZPWkBFyzXMGNXpFA%2Fbi%2F0eEPr%2FKg8Huj86VBv3Rr9hS6LOznQykRzKjlQy%2F7CBuoQN%2FLZjXRBESPsh5kkCsZnvbmOE5qaLDDIHrt76C1eIb3sPBM8l4D3R4Nq07IVYAnetvSh%2Blvm49z12ZAa%2Fyomg5dYoDeK5T466GLfGjwWDxgbg2OzOEZ9hLj6%2B36%2BDQRa27kzuU8ALzlRMBDHXDjMObfWIElPfACdXOVkUoOWL5zELtsZtOHxeKB1HLO4vReZ%2F9X04PNpFefFhbvyfZgtrnWwXWvpY1ZF5RRsQOIJ8Woe1mCj90AMKE08aEl%2Forec7kqzkl0pLvuuBeuO9%2BFVFvw0CMjvr71tkQiqJSti4k19ugJFq4zGn%2FPhScVTx5x8tey4%2BoHgoHka8XDU7eyr%2BAsIoXk8ZYOflJjML%2FY%2FsQGOqUBFin05EF18FSlyWPlCPnhEEHHMYusk9UwEZSMJ5wbPWq2ynYm9csXQGtHFCuN9TpBiNtZySey8fEu3kpPw15ZwPlHR1o9fYnh3LO6aqCbpgpTAAHSfl7rVrKOU5NTZJjSdW21Ble0%2FIqQGWR4z1pcw9s988iSofy5QeYbXthn959BxFWOD00TFByhF%2FEgx%2FzansIrsHQ9Gh11mK0QWXOeXLI9nkxA&X-Amz-Signature=855f4406aa9d14f531ddd1b4771ae6c77bd04ba2b9d54b070e632457759826a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656VQ3JJ2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T231035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIG1rIJE5e09vNsy594pMqZmozsZ%2FlAQVF%2FqytcvoaDcxAiBaC18UWIx7Wrixi%2Bfch2XozaL%2F21xVG159fQfnrQBY2yr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM%2F5rC5MJ8egtNPVEMKtwDgfI6ds6ztPTY14J2kpUTHSaA9h15HCsx5Atl%2FaXEzr9CxH5wyRmL5%2Fv7Wd0Woj%2F0bUJKX4eK8k%2FLXbeXrzQPa5bkjs66XI0iv1S9Iybkdku3bUiwIPQwp9X%2FJm%2FvrZb0iY12Ob55a5vwq%2BEgu79ow2tMxGuhB8wbgNNJNnKla84%2FUEAm8v7Ehh29N6lQ04kIC3NQIiWH8RRh8%2FI9UOh70lgPh%2F3T5FPdYcYUAgTj%2B0GAYvAYVbyEelfrMG9NvCpa%2FNEC957HcisaA80QmVqCKqVjh786VXhytKb%2FJbYDKU%2F5gUI0klF%2B81qfqryQb24esNRDPM4V2JYHkqSWUYq1LU7fq%2FTkv%2BdTukHIijsd3D%2BH5d69ZOpzNmHLqiKceKfUvG70nPgs5xVuzulGOsE7ZF2yGDYwcIdd8KZRNx0a0lmT%2BCV%2FUvdvjjbSkQaMlgR%2FrnGaE2TpmJch2KJr5WS8zQ2%2BYSqdKLmSMknY%2Fl7G%2FFBd6QvWE2%2Bq5%2BdMJZ%2Bx6MfTu%2FjExZijB8mNuZuF12tzx2Ri11JKAVKtihsxkARnu%2BlFapkFPaRIPeBbPJfVx0TPcRwD0x9UR7Ka8%2BAUccvDdoLufB4KOzm1eJ9MYAEbOfkGIeDsgoFgZsm9Kmgw9df%2BxAY6pgFNkGNrxUQi2b1G86oKJYYqwsvD4offR7MmlKtJIOaCPzRGEWcDFYScZcfqSmfpq0snMBs3c%2BKxcqvSgkK10pceVAgVvoHgHnKdKBrOIHNeuk0LjkPL4F2y3DG1Ij959%2FFlTlBKcbIhRfg9c%2F0HX%2BLuVPV0X55nun0W2Phx26G8HHGX7CjVUsdMFSmOehsPSi8%2FwjpMOYaZYlNY1zgS6S6mGPMG%2BW%2FU&X-Amz-Signature=a58535997d61db15ccb1be63b5b9465d51bf46c572d0ca48cdc5f3145871b1a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6SGRSRM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T231038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIBetN%2B52qEsuPLgvLH0ZaF3%2BHFLjcySkVmPTXiHjiwf0AiEAhOluaHbVS3Pmh83GH%2BKGy0dhVuIJClCGkYJXesAeWoAq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNndJa9%2FQ%2FmrP5TVfCrcA4ZdL25pJ8C2A6U4SCpyXUa5HAD%2FagAOO5eIBuuNC2qBGAOL7WEhQXPceuAlzcw3%2BwV23RYoM1RZamWpk6i8xxKhN7YpzrK1bdEiKXkxXQLPO5F%2B9l%2FaNm9yV4IJgFxpQmh3J7EcSdpQC0YJsSb7HAdKqSj76Yfwtcd%2BxFl3VsRpkLb%2B3QMzK7FYwLOt9fFtD8iUtIYSIRRG0BCUwQ8ZcirwhWzaCwhLLv1sAwHrBhwhpi1M9uRGLn742%2FAxdkWJojh90I3O%2Fu1y91IlXMpVBdTgXV5%2BImyF0yOs5qtgYjR8dwC6pvc%2FUqSPA8X4BYXvxL4PoiBYVN9HXZLOLXcgyheNRV5b%2FBj6cxIZ8npRNJMTY%2F0UIN39G2YwG5eiRpOVyMSTWSR6P44pcEx3xv9dNDvzN3wJqVB%2FMfNHe4f98ZMk1eJQxiforqIUonzPm0QwhgNHi3KwNQgu%2BjBQNiEydg8nCeUL9WfPjpEi5YjW3gZaIx0zaM0keJRAO8WMH7ZKE2QkOMcvTWXnLpm4aGqAq2zCAHZbehjZ8CIyoVRhb59JSvQJkw4UVAPZuPfpXmrlazP4PhmUibYelorXohY2VSAFppM6xQa7m9DTS7FAcxthzXh0xmWG1Fnhw3CMMKXY%2FsQGOqUBS49YOaYkOYKKsqhv9HdYRQHlhKL5cX4eFNQ2SdrkFI%2FukDBtxRTFb1sNY4IUqPuI8wRSIgaBBo9UyyACBfleWC9hGw%2FOUatLWgHgF600HBCb78gBB4FcAccGZsB6T6%2FPBBE3p4TPAcab5r9d0U8gBfhDub4FwHNZMZ5Eem5ukoSjzNnUiTYbjzNGJhfFaSO3RQ4XxM9dhIswx%2Fr%2BCMvegXOO9uS2&X-Amz-Signature=5caf8fff365a6a454c9d924901ce357b8ead01b56a36f840eceb7823b2d0e318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q2QL2E5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T231045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIDVSS6A2NDrvP4cWXbrhAmzQQqh50RazzQPTM9IlYONHAiEA5cV%2F7WAnw%2BmIN8xjDo71WBZqnPZKckHkZgjvJ7eqGngq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDPkZ05h2qzVEMdg5wSrcA1kgCOb4jkQy0H35e3Hm20M7%2B%2FIsEiMOTRH61dd2qLAiUaW3TLNqMtQgWpndgnDBvi9G3ybKQ41mDd4yHp5v673fM2tiuAHuedQszeXmKcIT8Gi7kAr2vgXLtGHG4zE4k1Q2kF%2Bd9nEQGM9rxYcm72BgqsD%2FHXX%2F0dLMgtJZOx1zoMwI5LaWuUZpqYqlH6M8C%2BDJrgtTjdCi8aJwU%2FDAEV1V6%2Ft3lH%2FYhprR858SR6j8AreOvQKWWG3FxODRlCNvEZtFTKqzkK2WGQYC8CxUAVa5Wx5qCnhg2l2%2Bsyvi5tPqESIfqVDaaT4OTwtT9IVyR1xtjauXSfODagcdYJ7VuqYW1SLZvg3RmAr68bJMj%2BapR4AsQ5IwubNtvYbzK8p%2FI2wKZSDRzkqo1sTNk%2FP64PunTC2gWWu1dDVOrkKBvuBaLh1sAUHOgTacJw8t4r5FIpN0mUZ8%2BYSKunPKN6wM2MRAzR5F1%2BSak5rwoVtqMnvWYHX5aEfn2wdH5AFJkE%2FfAeL%2Bf6hdg8MIWyqQFie%2F6bmZ8inwcADGHxEMz3bUwG1ZFvtKfPXpLo8lxuUFEWUezN04q9SA86xz%2FD1VGA26fgTXfq1jntl%2B0SMpbP1hR%2FGL%2B5jQb8twXxRs4vS2MJ7Y%2FsQGOqUBvkbVb4qVQe8GiQQYgRiD%2BWkj4A3oKNgJp8WojeK6w8B0xN%2FvM%2BFK7S7CT4KwxGQvfaMPrStepMbGTkC6Cb%2FXH%2F5ta19yakYNKefiySDcXGdLMT7e64omMTQZEWLVwbOf%2Fki7N89Q2%2F4kMtMiW3Tn1NldX%2BJcuY%2FrMsCnO9nw%2FHK6fU0XKavh990yd0mM2SYz46sZFq6oOwgp%2F%2FkwBmQjRv2KMR5T&X-Amz-Signature=412fd43fe713abfd192b5fa26125b1be8072813a1728786f8f8a9d5149ac8a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ7SKQOH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCWl%2Fcz9ojM57gnjfTxXhRM9oqMtmGZa1NoS7cZ30yrZgIhALwY2nM32rDKmlosOfHKPROptkbQUz2q1rs7asqjr18XKv8DCGcQABoMNjM3NDIzMTgzODA1Igz0AEW2ufeE93lc1f8q3AMMBpGmNq6wF0%2B4GPKpM4d9uVg%2Fon21jnRaBLfG3KvSGVkLdHJmsyo5zlMe1RbRTMdcGllkalZOjgsvUlxAUWAogu%2F5h1VjQbWsnmTuCYjo4lvFhHT0qmfPsp%2BihWmw77YUEa18QKfK%2BDbauF4V8PjFV8h7hL051W5MYIvd1QM0JzNgVQe%2FAoaS1QWtfB6OhxGteO%2FOm%2BE8BfTVhL0hOJHxmk421s69wzY5vQkbfhqDWruMads0OVwYLNepZL%2BRb%2BQbwmbvpt%2B8BuCroz5n2kfYgJotfkuV3gxpwzehpsgh9eJI8V5UWQ%2FUDuldtkHcFqDT9BN1EY7hBh25s48e4hZ4jKC%2Fo8cEFJPTViYl89gs5cHc7NkNuh8Hb7AVOzjbgolW6C6wB6CUyuUIMl8FRB%2FEgYVbHT%2FhgE4FxwLrZxe7nyiNnIH%2B5xJj2BpfnzBlFe5YY7NFFhLVaPFeEQs1JHb0aR7UG7irtZqF6DKh7e8lPFpQjatbnbmwDU3gt3T78MNhJ7Hvz6jU45%2FWznrNcsyTGuOhGnoNlShv%2BwE2aBBgyBAyNU66XQX63GfWGLe%2Fnz8uhNPXsSna7TBu49AlOIL9mYLkmzrjjiSkuBY%2B2QO608gRQg%2FysDSOgU4E6jDH2f7EBjqkAR8%2FeV004qDJDfPVXMlQILL48v7rHoCxZNCqogUbo3J1pnCHP8AoDf9V986Bjc5uFBBGCTxcYikld7GwM4Zq04qPeL0DcQpALVhjAf5bdJK4isdTQp2pYx8tgKLvhYH2UiPldIDLKF0A37%2FG6qa5sCm%2BjYPoiaS%2BMudfRtQjAuedXYGZE5CMVJck%2FX2%2Fr%2BIHI3FLUk17pPePQyWWb7F13Xdtikay&X-Amz-Signature=e950374259dd7e7f512a465fc7d83978eab4b1b28d4f89c0842bac721e0c89bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ7SKQOH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCWl%2Fcz9ojM57gnjfTxXhRM9oqMtmGZa1NoS7cZ30yrZgIhALwY2nM32rDKmlosOfHKPROptkbQUz2q1rs7asqjr18XKv8DCGcQABoMNjM3NDIzMTgzODA1Igz0AEW2ufeE93lc1f8q3AMMBpGmNq6wF0%2B4GPKpM4d9uVg%2Fon21jnRaBLfG3KvSGVkLdHJmsyo5zlMe1RbRTMdcGllkalZOjgsvUlxAUWAogu%2F5h1VjQbWsnmTuCYjo4lvFhHT0qmfPsp%2BihWmw77YUEa18QKfK%2BDbauF4V8PjFV8h7hL051W5MYIvd1QM0JzNgVQe%2FAoaS1QWtfB6OhxGteO%2FOm%2BE8BfTVhL0hOJHxmk421s69wzY5vQkbfhqDWruMads0OVwYLNepZL%2BRb%2BQbwmbvpt%2B8BuCroz5n2kfYgJotfkuV3gxpwzehpsgh9eJI8V5UWQ%2FUDuldtkHcFqDT9BN1EY7hBh25s48e4hZ4jKC%2Fo8cEFJPTViYl89gs5cHc7NkNuh8Hb7AVOzjbgolW6C6wB6CUyuUIMl8FRB%2FEgYVbHT%2FhgE4FxwLrZxe7nyiNnIH%2B5xJj2BpfnzBlFe5YY7NFFhLVaPFeEQs1JHb0aR7UG7irtZqF6DKh7e8lPFpQjatbnbmwDU3gt3T78MNhJ7Hvz6jU45%2FWznrNcsyTGuOhGnoNlShv%2BwE2aBBgyBAyNU66XQX63GfWGLe%2Fnz8uhNPXsSna7TBu49AlOIL9mYLkmzrjjiSkuBY%2B2QO608gRQg%2FysDSOgU4E6jDH2f7EBjqkAR8%2FeV004qDJDfPVXMlQILL48v7rHoCxZNCqogUbo3J1pnCHP8AoDf9V986Bjc5uFBBGCTxcYikld7GwM4Zq04qPeL0DcQpALVhjAf5bdJK4isdTQp2pYx8tgKLvhYH2UiPldIDLKF0A37%2FG6qa5sCm%2BjYPoiaS%2BMudfRtQjAuedXYGZE5CMVJck%2FX2%2Fr%2BIHI3FLUk17pPePQyWWb7F13Xdtikay&X-Amz-Signature=9b09ef43ba6d30e0f4ef79b7b351ad2c35f34a2e134307f4e810fef48a41ca21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O532UST%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAFXY5sJl5Fg3cfFWpqIs1CwWpVLepTHzH8lZaIhzon1AiA0JeQLs6ZvROmjriTAVW4hXWufboPD3yZvoiFoZUkdCir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMh9%2FhlN6SNpcry04jKtwDvHjE5AIyi3OZXEZQOYc%2BGglm9CaNgQq6AySt9oQmBtoisU88rFgAt8z19rMzwPRRz2b6kBl4V2SLjIP%2BuQFyNoYzRdSaBCho0JCFp5a5NaxeOCsPtkj9%2FvKId371tRYxogrWW5KQfccdROQd9lrDyAipkpSbg39Qb0FtADplTIDNpzo%2Fv6QYhntEhrC93MjdbctKZE8vdzPT%2FC%2BFApfeJYv1NCnVAd68d3X9wR%2Bfvl6Dk07o%2FYmlMuN2vHrXnGiWUyYZ%2B3eotbRRt32ELsIWIMSwZyIOhNjHxEl4Cj%2B059VkddkBdf1P2dNYph81pJsfwyKWhjpSlsUGkSBX0mWSQdIR2XINZaxCTTx3%2Bf0Y53dx8t%2BZVB98t3dtc9ZsbmPvebIYiISfdG1eT9zzja1EO%2BOgiHQEon50183nNYh8FA9DJDyWQGIohh6sAeFzFeZTdbwFdmmodSTAQ8thqeNX3sXnm%2FCe0tUziOisAXDQNMB%2B1ilRiJ00vNEY5GX0vmsTy%2BG6grStFQ%2FFues5uFrMZQGm%2BejoIlig9Du%2BjkpT3gxEHq1XwNj0I5d6mntYySKTwS0krm2QXOvr8y%2FUR3qWn7xGMmRsCi%2FR42NZ4fWK%2BbV%2FaeCsbY4vVSWZ8HwwgNj%2BxAY6pgHUAmDqIKbUhwj4TDeHk1KyfniZQa0GY16x8jQKnlIozeLnhzNEUVHDh3a7tzLUkPatkL0NFfevlaNXWbAQu5UrNBk%2BkXe1LlUXI9za%2FU7rSsgHqK%2FV26FxuXl4HatqOi98d4K%2Fpr8Vy8s8NeOmUYlR9gOaQaz0ZMy6vqThS8H9aOdV127TzJdbXg6uFiT6ePaAxfxiUTvhEbn1c4gSSboFBp6anf75&X-Amz-Signature=bee0efa36e80fa58dabff9289177eb0691cf464cec9b445bb13b14a8fc2c06e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O532UST%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAFXY5sJl5Fg3cfFWpqIs1CwWpVLepTHzH8lZaIhzon1AiA0JeQLs6ZvROmjriTAVW4hXWufboPD3yZvoiFoZUkdCir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMh9%2FhlN6SNpcry04jKtwDvHjE5AIyi3OZXEZQOYc%2BGglm9CaNgQq6AySt9oQmBtoisU88rFgAt8z19rMzwPRRz2b6kBl4V2SLjIP%2BuQFyNoYzRdSaBCho0JCFp5a5NaxeOCsPtkj9%2FvKId371tRYxogrWW5KQfccdROQd9lrDyAipkpSbg39Qb0FtADplTIDNpzo%2Fv6QYhntEhrC93MjdbctKZE8vdzPT%2FC%2BFApfeJYv1NCnVAd68d3X9wR%2Bfvl6Dk07o%2FYmlMuN2vHrXnGiWUyYZ%2B3eotbRRt32ELsIWIMSwZyIOhNjHxEl4Cj%2B059VkddkBdf1P2dNYph81pJsfwyKWhjpSlsUGkSBX0mWSQdIR2XINZaxCTTx3%2Bf0Y53dx8t%2BZVB98t3dtc9ZsbmPvebIYiISfdG1eT9zzja1EO%2BOgiHQEon50183nNYh8FA9DJDyWQGIohh6sAeFzFeZTdbwFdmmodSTAQ8thqeNX3sXnm%2FCe0tUziOisAXDQNMB%2B1ilRiJ00vNEY5GX0vmsTy%2BG6grStFQ%2FFues5uFrMZQGm%2BejoIlig9Du%2BjkpT3gxEHq1XwNj0I5d6mntYySKTwS0krm2QXOvr8y%2FUR3qWn7xGMmRsCi%2FR42NZ4fWK%2BbV%2FaeCsbY4vVSWZ8HwwgNj%2BxAY6pgHUAmDqIKbUhwj4TDeHk1KyfniZQa0GY16x8jQKnlIozeLnhzNEUVHDh3a7tzLUkPatkL0NFfevlaNXWbAQu5UrNBk%2BkXe1LlUXI9za%2FU7rSsgHqK%2FV26FxuXl4HatqOi98d4K%2Fpr8Vy8s8NeOmUYlR9gOaQaz0ZMy6vqThS8H9aOdV127TzJdbXg6uFiT6ePaAxfxiUTvhEbn1c4gSSboFBp6anf75&X-Amz-Signature=3fa83d56d69b806a068a5397e1b3f0dbd4d99bdeb2d7ecef1268710fe6936249&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O532UST%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAFXY5sJl5Fg3cfFWpqIs1CwWpVLepTHzH8lZaIhzon1AiA0JeQLs6ZvROmjriTAVW4hXWufboPD3yZvoiFoZUkdCir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMh9%2FhlN6SNpcry04jKtwDvHjE5AIyi3OZXEZQOYc%2BGglm9CaNgQq6AySt9oQmBtoisU88rFgAt8z19rMzwPRRz2b6kBl4V2SLjIP%2BuQFyNoYzRdSaBCho0JCFp5a5NaxeOCsPtkj9%2FvKId371tRYxogrWW5KQfccdROQd9lrDyAipkpSbg39Qb0FtADplTIDNpzo%2Fv6QYhntEhrC93MjdbctKZE8vdzPT%2FC%2BFApfeJYv1NCnVAd68d3X9wR%2Bfvl6Dk07o%2FYmlMuN2vHrXnGiWUyYZ%2B3eotbRRt32ELsIWIMSwZyIOhNjHxEl4Cj%2B059VkddkBdf1P2dNYph81pJsfwyKWhjpSlsUGkSBX0mWSQdIR2XINZaxCTTx3%2Bf0Y53dx8t%2BZVB98t3dtc9ZsbmPvebIYiISfdG1eT9zzja1EO%2BOgiHQEon50183nNYh8FA9DJDyWQGIohh6sAeFzFeZTdbwFdmmodSTAQ8thqeNX3sXnm%2FCe0tUziOisAXDQNMB%2B1ilRiJ00vNEY5GX0vmsTy%2BG6grStFQ%2FFues5uFrMZQGm%2BejoIlig9Du%2BjkpT3gxEHq1XwNj0I5d6mntYySKTwS0krm2QXOvr8y%2FUR3qWn7xGMmRsCi%2FR42NZ4fWK%2BbV%2FaeCsbY4vVSWZ8HwwgNj%2BxAY6pgHUAmDqIKbUhwj4TDeHk1KyfniZQa0GY16x8jQKnlIozeLnhzNEUVHDh3a7tzLUkPatkL0NFfevlaNXWbAQu5UrNBk%2BkXe1LlUXI9za%2FU7rSsgHqK%2FV26FxuXl4HatqOi98d4K%2Fpr8Vy8s8NeOmUYlR9gOaQaz0ZMy6vqThS8H9aOdV127TzJdbXg6uFiT6ePaAxfxiUTvhEbn1c4gSSboFBp6anf75&X-Amz-Signature=55dee7020aaabdfa4f592219e075662857b1485cdd2873a44e57cef2f74ab541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O532UST%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAFXY5sJl5Fg3cfFWpqIs1CwWpVLepTHzH8lZaIhzon1AiA0JeQLs6ZvROmjriTAVW4hXWufboPD3yZvoiFoZUkdCir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMh9%2FhlN6SNpcry04jKtwDvHjE5AIyi3OZXEZQOYc%2BGglm9CaNgQq6AySt9oQmBtoisU88rFgAt8z19rMzwPRRz2b6kBl4V2SLjIP%2BuQFyNoYzRdSaBCho0JCFp5a5NaxeOCsPtkj9%2FvKId371tRYxogrWW5KQfccdROQd9lrDyAipkpSbg39Qb0FtADplTIDNpzo%2Fv6QYhntEhrC93MjdbctKZE8vdzPT%2FC%2BFApfeJYv1NCnVAd68d3X9wR%2Bfvl6Dk07o%2FYmlMuN2vHrXnGiWUyYZ%2B3eotbRRt32ELsIWIMSwZyIOhNjHxEl4Cj%2B059VkddkBdf1P2dNYph81pJsfwyKWhjpSlsUGkSBX0mWSQdIR2XINZaxCTTx3%2Bf0Y53dx8t%2BZVB98t3dtc9ZsbmPvebIYiISfdG1eT9zzja1EO%2BOgiHQEon50183nNYh8FA9DJDyWQGIohh6sAeFzFeZTdbwFdmmodSTAQ8thqeNX3sXnm%2FCe0tUziOisAXDQNMB%2B1ilRiJ00vNEY5GX0vmsTy%2BG6grStFQ%2FFues5uFrMZQGm%2BejoIlig9Du%2BjkpT3gxEHq1XwNj0I5d6mntYySKTwS0krm2QXOvr8y%2FUR3qWn7xGMmRsCi%2FR42NZ4fWK%2BbV%2FaeCsbY4vVSWZ8HwwgNj%2BxAY6pgHUAmDqIKbUhwj4TDeHk1KyfniZQa0GY16x8jQKnlIozeLnhzNEUVHDh3a7tzLUkPatkL0NFfevlaNXWbAQu5UrNBk%2BkXe1LlUXI9za%2FU7rSsgHqK%2FV26FxuXl4HatqOi98d4K%2Fpr8Vy8s8NeOmUYlR9gOaQaz0ZMy6vqThS8H9aOdV127TzJdbXg6uFiT6ePaAxfxiUTvhEbn1c4gSSboFBp6anf75&X-Amz-Signature=840a2214b4632488cfac3f4a0d38803fc15448b679aa0028c9cd31707428e283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O532UST%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAFXY5sJl5Fg3cfFWpqIs1CwWpVLepTHzH8lZaIhzon1AiA0JeQLs6ZvROmjriTAVW4hXWufboPD3yZvoiFoZUkdCir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMh9%2FhlN6SNpcry04jKtwDvHjE5AIyi3OZXEZQOYc%2BGglm9CaNgQq6AySt9oQmBtoisU88rFgAt8z19rMzwPRRz2b6kBl4V2SLjIP%2BuQFyNoYzRdSaBCho0JCFp5a5NaxeOCsPtkj9%2FvKId371tRYxogrWW5KQfccdROQd9lrDyAipkpSbg39Qb0FtADplTIDNpzo%2Fv6QYhntEhrC93MjdbctKZE8vdzPT%2FC%2BFApfeJYv1NCnVAd68d3X9wR%2Bfvl6Dk07o%2FYmlMuN2vHrXnGiWUyYZ%2B3eotbRRt32ELsIWIMSwZyIOhNjHxEl4Cj%2B059VkddkBdf1P2dNYph81pJsfwyKWhjpSlsUGkSBX0mWSQdIR2XINZaxCTTx3%2Bf0Y53dx8t%2BZVB98t3dtc9ZsbmPvebIYiISfdG1eT9zzja1EO%2BOgiHQEon50183nNYh8FA9DJDyWQGIohh6sAeFzFeZTdbwFdmmodSTAQ8thqeNX3sXnm%2FCe0tUziOisAXDQNMB%2B1ilRiJ00vNEY5GX0vmsTy%2BG6grStFQ%2FFues5uFrMZQGm%2BejoIlig9Du%2BjkpT3gxEHq1XwNj0I5d6mntYySKTwS0krm2QXOvr8y%2FUR3qWn7xGMmRsCi%2FR42NZ4fWK%2BbV%2FaeCsbY4vVSWZ8HwwgNj%2BxAY6pgHUAmDqIKbUhwj4TDeHk1KyfniZQa0GY16x8jQKnlIozeLnhzNEUVHDh3a7tzLUkPatkL0NFfevlaNXWbAQu5UrNBk%2BkXe1LlUXI9za%2FU7rSsgHqK%2FV26FxuXl4HatqOi98d4K%2Fpr8Vy8s8NeOmUYlR9gOaQaz0ZMy6vqThS8H9aOdV127TzJdbXg6uFiT6ePaAxfxiUTvhEbn1c4gSSboFBp6anf75&X-Amz-Signature=33a6754351d20cfe961210688da7db4db69d59c9473f1f3c64ff983eb710b94e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O532UST%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAFXY5sJl5Fg3cfFWpqIs1CwWpVLepTHzH8lZaIhzon1AiA0JeQLs6ZvROmjriTAVW4hXWufboPD3yZvoiFoZUkdCir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMh9%2FhlN6SNpcry04jKtwDvHjE5AIyi3OZXEZQOYc%2BGglm9CaNgQq6AySt9oQmBtoisU88rFgAt8z19rMzwPRRz2b6kBl4V2SLjIP%2BuQFyNoYzRdSaBCho0JCFp5a5NaxeOCsPtkj9%2FvKId371tRYxogrWW5KQfccdROQd9lrDyAipkpSbg39Qb0FtADplTIDNpzo%2Fv6QYhntEhrC93MjdbctKZE8vdzPT%2FC%2BFApfeJYv1NCnVAd68d3X9wR%2Bfvl6Dk07o%2FYmlMuN2vHrXnGiWUyYZ%2B3eotbRRt32ELsIWIMSwZyIOhNjHxEl4Cj%2B059VkddkBdf1P2dNYph81pJsfwyKWhjpSlsUGkSBX0mWSQdIR2XINZaxCTTx3%2Bf0Y53dx8t%2BZVB98t3dtc9ZsbmPvebIYiISfdG1eT9zzja1EO%2BOgiHQEon50183nNYh8FA9DJDyWQGIohh6sAeFzFeZTdbwFdmmodSTAQ8thqeNX3sXnm%2FCe0tUziOisAXDQNMB%2B1ilRiJ00vNEY5GX0vmsTy%2BG6grStFQ%2FFues5uFrMZQGm%2BejoIlig9Du%2BjkpT3gxEHq1XwNj0I5d6mntYySKTwS0krm2QXOvr8y%2FUR3qWn7xGMmRsCi%2FR42NZ4fWK%2BbV%2FaeCsbY4vVSWZ8HwwgNj%2BxAY6pgHUAmDqIKbUhwj4TDeHk1KyfniZQa0GY16x8jQKnlIozeLnhzNEUVHDh3a7tzLUkPatkL0NFfevlaNXWbAQu5UrNBk%2BkXe1LlUXI9za%2FU7rSsgHqK%2FV26FxuXl4HatqOi98d4K%2Fpr8Vy8s8NeOmUYlR9gOaQaz0ZMy6vqThS8H9aOdV127TzJdbXg6uFiT6ePaAxfxiUTvhEbn1c4gSSboFBp6anf75&X-Amz-Signature=0dde41c01d233199478391dcafe5fc91e9ebae8b94a7f376201ce39289a468a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O532UST%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAFXY5sJl5Fg3cfFWpqIs1CwWpVLepTHzH8lZaIhzon1AiA0JeQLs6ZvROmjriTAVW4hXWufboPD3yZvoiFoZUkdCir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMh9%2FhlN6SNpcry04jKtwDvHjE5AIyi3OZXEZQOYc%2BGglm9CaNgQq6AySt9oQmBtoisU88rFgAt8z19rMzwPRRz2b6kBl4V2SLjIP%2BuQFyNoYzRdSaBCho0JCFp5a5NaxeOCsPtkj9%2FvKId371tRYxogrWW5KQfccdROQd9lrDyAipkpSbg39Qb0FtADplTIDNpzo%2Fv6QYhntEhrC93MjdbctKZE8vdzPT%2FC%2BFApfeJYv1NCnVAd68d3X9wR%2Bfvl6Dk07o%2FYmlMuN2vHrXnGiWUyYZ%2B3eotbRRt32ELsIWIMSwZyIOhNjHxEl4Cj%2B059VkddkBdf1P2dNYph81pJsfwyKWhjpSlsUGkSBX0mWSQdIR2XINZaxCTTx3%2Bf0Y53dx8t%2BZVB98t3dtc9ZsbmPvebIYiISfdG1eT9zzja1EO%2BOgiHQEon50183nNYh8FA9DJDyWQGIohh6sAeFzFeZTdbwFdmmodSTAQ8thqeNX3sXnm%2FCe0tUziOisAXDQNMB%2B1ilRiJ00vNEY5GX0vmsTy%2BG6grStFQ%2FFues5uFrMZQGm%2BejoIlig9Du%2BjkpT3gxEHq1XwNj0I5d6mntYySKTwS0krm2QXOvr8y%2FUR3qWn7xGMmRsCi%2FR42NZ4fWK%2BbV%2FaeCsbY4vVSWZ8HwwgNj%2BxAY6pgHUAmDqIKbUhwj4TDeHk1KyfniZQa0GY16x8jQKnlIozeLnhzNEUVHDh3a7tzLUkPatkL0NFfevlaNXWbAQu5UrNBk%2BkXe1LlUXI9za%2FU7rSsgHqK%2FV26FxuXl4HatqOi98d4K%2Fpr8Vy8s8NeOmUYlR9gOaQaz0ZMy6vqThS8H9aOdV127TzJdbXg6uFiT6ePaAxfxiUTvhEbn1c4gSSboFBp6anf75&X-Amz-Signature=0dc37f6abf6326269e454f0cc286d9d18f2b697f5ea44e98f9002c3e27f2261e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O532UST%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAFXY5sJl5Fg3cfFWpqIs1CwWpVLepTHzH8lZaIhzon1AiA0JeQLs6ZvROmjriTAVW4hXWufboPD3yZvoiFoZUkdCir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMh9%2FhlN6SNpcry04jKtwDvHjE5AIyi3OZXEZQOYc%2BGglm9CaNgQq6AySt9oQmBtoisU88rFgAt8z19rMzwPRRz2b6kBl4V2SLjIP%2BuQFyNoYzRdSaBCho0JCFp5a5NaxeOCsPtkj9%2FvKId371tRYxogrWW5KQfccdROQd9lrDyAipkpSbg39Qb0FtADplTIDNpzo%2Fv6QYhntEhrC93MjdbctKZE8vdzPT%2FC%2BFApfeJYv1NCnVAd68d3X9wR%2Bfvl6Dk07o%2FYmlMuN2vHrXnGiWUyYZ%2B3eotbRRt32ELsIWIMSwZyIOhNjHxEl4Cj%2B059VkddkBdf1P2dNYph81pJsfwyKWhjpSlsUGkSBX0mWSQdIR2XINZaxCTTx3%2Bf0Y53dx8t%2BZVB98t3dtc9ZsbmPvebIYiISfdG1eT9zzja1EO%2BOgiHQEon50183nNYh8FA9DJDyWQGIohh6sAeFzFeZTdbwFdmmodSTAQ8thqeNX3sXnm%2FCe0tUziOisAXDQNMB%2B1ilRiJ00vNEY5GX0vmsTy%2BG6grStFQ%2FFues5uFrMZQGm%2BejoIlig9Du%2BjkpT3gxEHq1XwNj0I5d6mntYySKTwS0krm2QXOvr8y%2FUR3qWn7xGMmRsCi%2FR42NZ4fWK%2BbV%2FaeCsbY4vVSWZ8HwwgNj%2BxAY6pgHUAmDqIKbUhwj4TDeHk1KyfniZQa0GY16x8jQKnlIozeLnhzNEUVHDh3a7tzLUkPatkL0NFfevlaNXWbAQu5UrNBk%2BkXe1LlUXI9za%2FU7rSsgHqK%2FV26FxuXl4HatqOi98d4K%2Fpr8Vy8s8NeOmUYlR9gOaQaz0ZMy6vqThS8H9aOdV127TzJdbXg6uFiT6ePaAxfxiUTvhEbn1c4gSSboFBp6anf75&X-Amz-Signature=a5fdc4cbd9db7e849f4d82a9889bd37c05fe764ac3519c50d408c283132c1084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O532UST%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAFXY5sJl5Fg3cfFWpqIs1CwWpVLepTHzH8lZaIhzon1AiA0JeQLs6ZvROmjriTAVW4hXWufboPD3yZvoiFoZUkdCir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMh9%2FhlN6SNpcry04jKtwDvHjE5AIyi3OZXEZQOYc%2BGglm9CaNgQq6AySt9oQmBtoisU88rFgAt8z19rMzwPRRz2b6kBl4V2SLjIP%2BuQFyNoYzRdSaBCho0JCFp5a5NaxeOCsPtkj9%2FvKId371tRYxogrWW5KQfccdROQd9lrDyAipkpSbg39Qb0FtADplTIDNpzo%2Fv6QYhntEhrC93MjdbctKZE8vdzPT%2FC%2BFApfeJYv1NCnVAd68d3X9wR%2Bfvl6Dk07o%2FYmlMuN2vHrXnGiWUyYZ%2B3eotbRRt32ELsIWIMSwZyIOhNjHxEl4Cj%2B059VkddkBdf1P2dNYph81pJsfwyKWhjpSlsUGkSBX0mWSQdIR2XINZaxCTTx3%2Bf0Y53dx8t%2BZVB98t3dtc9ZsbmPvebIYiISfdG1eT9zzja1EO%2BOgiHQEon50183nNYh8FA9DJDyWQGIohh6sAeFzFeZTdbwFdmmodSTAQ8thqeNX3sXnm%2FCe0tUziOisAXDQNMB%2B1ilRiJ00vNEY5GX0vmsTy%2BG6grStFQ%2FFues5uFrMZQGm%2BejoIlig9Du%2BjkpT3gxEHq1XwNj0I5d6mntYySKTwS0krm2QXOvr8y%2FUR3qWn7xGMmRsCi%2FR42NZ4fWK%2BbV%2FaeCsbY4vVSWZ8HwwgNj%2BxAY6pgHUAmDqIKbUhwj4TDeHk1KyfniZQa0GY16x8jQKnlIozeLnhzNEUVHDh3a7tzLUkPatkL0NFfevlaNXWbAQu5UrNBk%2BkXe1LlUXI9za%2FU7rSsgHqK%2FV26FxuXl4HatqOi98d4K%2Fpr8Vy8s8NeOmUYlR9gOaQaz0ZMy6vqThS8H9aOdV127TzJdbXg6uFiT6ePaAxfxiUTvhEbn1c4gSSboFBp6anf75&X-Amz-Signature=d07573f1c5663622795ef006e8f71d3ca8dd519863211c29ec68f00acacb4fb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O532UST%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAFXY5sJl5Fg3cfFWpqIs1CwWpVLepTHzH8lZaIhzon1AiA0JeQLs6ZvROmjriTAVW4hXWufboPD3yZvoiFoZUkdCir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMh9%2FhlN6SNpcry04jKtwDvHjE5AIyi3OZXEZQOYc%2BGglm9CaNgQq6AySt9oQmBtoisU88rFgAt8z19rMzwPRRz2b6kBl4V2SLjIP%2BuQFyNoYzRdSaBCho0JCFp5a5NaxeOCsPtkj9%2FvKId371tRYxogrWW5KQfccdROQd9lrDyAipkpSbg39Qb0FtADplTIDNpzo%2Fv6QYhntEhrC93MjdbctKZE8vdzPT%2FC%2BFApfeJYv1NCnVAd68d3X9wR%2Bfvl6Dk07o%2FYmlMuN2vHrXnGiWUyYZ%2B3eotbRRt32ELsIWIMSwZyIOhNjHxEl4Cj%2B059VkddkBdf1P2dNYph81pJsfwyKWhjpSlsUGkSBX0mWSQdIR2XINZaxCTTx3%2Bf0Y53dx8t%2BZVB98t3dtc9ZsbmPvebIYiISfdG1eT9zzja1EO%2BOgiHQEon50183nNYh8FA9DJDyWQGIohh6sAeFzFeZTdbwFdmmodSTAQ8thqeNX3sXnm%2FCe0tUziOisAXDQNMB%2B1ilRiJ00vNEY5GX0vmsTy%2BG6grStFQ%2FFues5uFrMZQGm%2BejoIlig9Du%2BjkpT3gxEHq1XwNj0I5d6mntYySKTwS0krm2QXOvr8y%2FUR3qWn7xGMmRsCi%2FR42NZ4fWK%2BbV%2FaeCsbY4vVSWZ8HwwgNj%2BxAY6pgHUAmDqIKbUhwj4TDeHk1KyfniZQa0GY16x8jQKnlIozeLnhzNEUVHDh3a7tzLUkPatkL0NFfevlaNXWbAQu5UrNBk%2BkXe1LlUXI9za%2FU7rSsgHqK%2FV26FxuXl4HatqOi98d4K%2Fpr8Vy8s8NeOmUYlR9gOaQaz0ZMy6vqThS8H9aOdV127TzJdbXg6uFiT6ePaAxfxiUTvhEbn1c4gSSboFBp6anf75&X-Amz-Signature=ca0217062aafca1d4e391f6c083f13d690fa6fbc26369fd5358f5065c732fd4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
