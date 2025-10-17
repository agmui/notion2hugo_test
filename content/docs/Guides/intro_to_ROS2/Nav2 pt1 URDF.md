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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DONGL6C%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqq%2FtzJ%2B1%2Fz43tSvKeKPiheF0uQalDSqDAwEI5xd7%2FIAiEA5%2Fy1IyPqWIjsCKnjhaKzdYtQpxrBmUILCuae87AP7NMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFipkuI%2FhtIAIqaK%2ByrcA9xy0NiF%2F8Tw22xDYqX9730MVbmeghZlGRIzEIJeMZspSZcKOR%2FA1%2FY8VhOy6AjLFDdPoVMt7T%2BGtduXOQzFJJ%2F3I4qkoYXvZRh%2B3zC0Fh6njIlggUHnH827gkvGxiR454vLmfLcT3qzOxe1%2Bp5zf%2B33Zu29wXxpg3Bssop3GRxEAh5ZWgXSZqA5ut85kJyTqUjNojSytgM6mDLEIZQREkd6uTawbuOomHWD3LAulyAoHSvS43Ge65hFe3dOax7aKEbzKtfwnOTQFdH65UgMnfsKGhQEa7DSYI3qBQ97W3XxhWXqwND7mh6QWa%2B9xOuF462ILfVDM728gw8s21dCoFsUUGZlJAbQd5Qymabb9BPZ%2FHgB4TGeeiGtCM%2B2D7Kffo5eDCWzNF3AUOIrka9JXNsAHZrqqkxK0nGgKikkWURthYVlZ4LAwe9vcv%2BapGN44mTrCwkmSAsB4VpUXV5QEMxis1iGLiVCYt6YIT1fcT1GK%2BrgCY3FR%2FtvwZjEyoQh%2FEQkgtufd0XnzCKUEJpapkvGg773%2FNzU%2FzZG6Pwy24r%2Fl4JqazuJxjMgAa3FPZZHc3o4b3FsJ%2FtUyBDkWGQyY2xUt3ISj6EzH6vfG2g%2F9zXRk8l2CKFC1rNuxaczMO%2BPxscGOqUBnoaYQjQSKo42TnmJdqB6q%2Bzyvd3UBugloEn0cW8hudtTutFw6NOBSpJYYVL9Lai3xnVvGCdTBNnl8L%2FL3uJQNtlKCKUsfdly5JCMgsl4fvP36OipRf5GoIFgh8OxagxklxeK3epoHPCoQvBgR5uNGS5%2BiT%2FYyRIr5zao8YYL0O8E4F93FEiC7HLtBTDXC%2Fj4%2FQV05CDjlQfGySoaXeN4Oh1BlPZ5&X-Amz-Signature=4caf0ddf4890278b42845715437395b59e1bfc2cf5e698a7cd313993e82304ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DONGL6C%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqq%2FtzJ%2B1%2Fz43tSvKeKPiheF0uQalDSqDAwEI5xd7%2FIAiEA5%2Fy1IyPqWIjsCKnjhaKzdYtQpxrBmUILCuae87AP7NMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFipkuI%2FhtIAIqaK%2ByrcA9xy0NiF%2F8Tw22xDYqX9730MVbmeghZlGRIzEIJeMZspSZcKOR%2FA1%2FY8VhOy6AjLFDdPoVMt7T%2BGtduXOQzFJJ%2F3I4qkoYXvZRh%2B3zC0Fh6njIlggUHnH827gkvGxiR454vLmfLcT3qzOxe1%2Bp5zf%2B33Zu29wXxpg3Bssop3GRxEAh5ZWgXSZqA5ut85kJyTqUjNojSytgM6mDLEIZQREkd6uTawbuOomHWD3LAulyAoHSvS43Ge65hFe3dOax7aKEbzKtfwnOTQFdH65UgMnfsKGhQEa7DSYI3qBQ97W3XxhWXqwND7mh6QWa%2B9xOuF462ILfVDM728gw8s21dCoFsUUGZlJAbQd5Qymabb9BPZ%2FHgB4TGeeiGtCM%2B2D7Kffo5eDCWzNF3AUOIrka9JXNsAHZrqqkxK0nGgKikkWURthYVlZ4LAwe9vcv%2BapGN44mTrCwkmSAsB4VpUXV5QEMxis1iGLiVCYt6YIT1fcT1GK%2BrgCY3FR%2FtvwZjEyoQh%2FEQkgtufd0XnzCKUEJpapkvGg773%2FNzU%2FzZG6Pwy24r%2Fl4JqazuJxjMgAa3FPZZHc3o4b3FsJ%2FtUyBDkWGQyY2xUt3ISj6EzH6vfG2g%2F9zXRk8l2CKFC1rNuxaczMO%2BPxscGOqUBnoaYQjQSKo42TnmJdqB6q%2Bzyvd3UBugloEn0cW8hudtTutFw6NOBSpJYYVL9Lai3xnVvGCdTBNnl8L%2FL3uJQNtlKCKUsfdly5JCMgsl4fvP36OipRf5GoIFgh8OxagxklxeK3epoHPCoQvBgR5uNGS5%2BiT%2FYyRIr5zao8YYL0O8E4F93FEiC7HLtBTDXC%2Fj4%2FQV05CDjlQfGySoaXeN4Oh1BlPZ5&X-Amz-Signature=243d0a979fb5d6c0025987f6624da7d5b29fbfb8ce9318285b94c03831ddb4c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DONGL6C%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqq%2FtzJ%2B1%2Fz43tSvKeKPiheF0uQalDSqDAwEI5xd7%2FIAiEA5%2Fy1IyPqWIjsCKnjhaKzdYtQpxrBmUILCuae87AP7NMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFipkuI%2FhtIAIqaK%2ByrcA9xy0NiF%2F8Tw22xDYqX9730MVbmeghZlGRIzEIJeMZspSZcKOR%2FA1%2FY8VhOy6AjLFDdPoVMt7T%2BGtduXOQzFJJ%2F3I4qkoYXvZRh%2B3zC0Fh6njIlggUHnH827gkvGxiR454vLmfLcT3qzOxe1%2Bp5zf%2B33Zu29wXxpg3Bssop3GRxEAh5ZWgXSZqA5ut85kJyTqUjNojSytgM6mDLEIZQREkd6uTawbuOomHWD3LAulyAoHSvS43Ge65hFe3dOax7aKEbzKtfwnOTQFdH65UgMnfsKGhQEa7DSYI3qBQ97W3XxhWXqwND7mh6QWa%2B9xOuF462ILfVDM728gw8s21dCoFsUUGZlJAbQd5Qymabb9BPZ%2FHgB4TGeeiGtCM%2B2D7Kffo5eDCWzNF3AUOIrka9JXNsAHZrqqkxK0nGgKikkWURthYVlZ4LAwe9vcv%2BapGN44mTrCwkmSAsB4VpUXV5QEMxis1iGLiVCYt6YIT1fcT1GK%2BrgCY3FR%2FtvwZjEyoQh%2FEQkgtufd0XnzCKUEJpapkvGg773%2FNzU%2FzZG6Pwy24r%2Fl4JqazuJxjMgAa3FPZZHc3o4b3FsJ%2FtUyBDkWGQyY2xUt3ISj6EzH6vfG2g%2F9zXRk8l2CKFC1rNuxaczMO%2BPxscGOqUBnoaYQjQSKo42TnmJdqB6q%2Bzyvd3UBugloEn0cW8hudtTutFw6NOBSpJYYVL9Lai3xnVvGCdTBNnl8L%2FL3uJQNtlKCKUsfdly5JCMgsl4fvP36OipRf5GoIFgh8OxagxklxeK3epoHPCoQvBgR5uNGS5%2BiT%2FYyRIr5zao8YYL0O8E4F93FEiC7HLtBTDXC%2Fj4%2FQV05CDjlQfGySoaXeN4Oh1BlPZ5&X-Amz-Signature=06f6070c1d53b241ab112d8ed598bdaedafdfe38354cd06b758caa593709349b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DONGL6C%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqq%2FtzJ%2B1%2Fz43tSvKeKPiheF0uQalDSqDAwEI5xd7%2FIAiEA5%2Fy1IyPqWIjsCKnjhaKzdYtQpxrBmUILCuae87AP7NMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFipkuI%2FhtIAIqaK%2ByrcA9xy0NiF%2F8Tw22xDYqX9730MVbmeghZlGRIzEIJeMZspSZcKOR%2FA1%2FY8VhOy6AjLFDdPoVMt7T%2BGtduXOQzFJJ%2F3I4qkoYXvZRh%2B3zC0Fh6njIlggUHnH827gkvGxiR454vLmfLcT3qzOxe1%2Bp5zf%2B33Zu29wXxpg3Bssop3GRxEAh5ZWgXSZqA5ut85kJyTqUjNojSytgM6mDLEIZQREkd6uTawbuOomHWD3LAulyAoHSvS43Ge65hFe3dOax7aKEbzKtfwnOTQFdH65UgMnfsKGhQEa7DSYI3qBQ97W3XxhWXqwND7mh6QWa%2B9xOuF462ILfVDM728gw8s21dCoFsUUGZlJAbQd5Qymabb9BPZ%2FHgB4TGeeiGtCM%2B2D7Kffo5eDCWzNF3AUOIrka9JXNsAHZrqqkxK0nGgKikkWURthYVlZ4LAwe9vcv%2BapGN44mTrCwkmSAsB4VpUXV5QEMxis1iGLiVCYt6YIT1fcT1GK%2BrgCY3FR%2FtvwZjEyoQh%2FEQkgtufd0XnzCKUEJpapkvGg773%2FNzU%2FzZG6Pwy24r%2Fl4JqazuJxjMgAa3FPZZHc3o4b3FsJ%2FtUyBDkWGQyY2xUt3ISj6EzH6vfG2g%2F9zXRk8l2CKFC1rNuxaczMO%2BPxscGOqUBnoaYQjQSKo42TnmJdqB6q%2Bzyvd3UBugloEn0cW8hudtTutFw6NOBSpJYYVL9Lai3xnVvGCdTBNnl8L%2FL3uJQNtlKCKUsfdly5JCMgsl4fvP36OipRf5GoIFgh8OxagxklxeK3epoHPCoQvBgR5uNGS5%2BiT%2FYyRIr5zao8YYL0O8E4F93FEiC7HLtBTDXC%2Fj4%2FQV05CDjlQfGySoaXeN4Oh1BlPZ5&X-Amz-Signature=494da60d8e1db456b216e7ef312ebc28d0cfc8df61fccb243f43548d3fcb0907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DONGL6C%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqq%2FtzJ%2B1%2Fz43tSvKeKPiheF0uQalDSqDAwEI5xd7%2FIAiEA5%2Fy1IyPqWIjsCKnjhaKzdYtQpxrBmUILCuae87AP7NMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFipkuI%2FhtIAIqaK%2ByrcA9xy0NiF%2F8Tw22xDYqX9730MVbmeghZlGRIzEIJeMZspSZcKOR%2FA1%2FY8VhOy6AjLFDdPoVMt7T%2BGtduXOQzFJJ%2F3I4qkoYXvZRh%2B3zC0Fh6njIlggUHnH827gkvGxiR454vLmfLcT3qzOxe1%2Bp5zf%2B33Zu29wXxpg3Bssop3GRxEAh5ZWgXSZqA5ut85kJyTqUjNojSytgM6mDLEIZQREkd6uTawbuOomHWD3LAulyAoHSvS43Ge65hFe3dOax7aKEbzKtfwnOTQFdH65UgMnfsKGhQEa7DSYI3qBQ97W3XxhWXqwND7mh6QWa%2B9xOuF462ILfVDM728gw8s21dCoFsUUGZlJAbQd5Qymabb9BPZ%2FHgB4TGeeiGtCM%2B2D7Kffo5eDCWzNF3AUOIrka9JXNsAHZrqqkxK0nGgKikkWURthYVlZ4LAwe9vcv%2BapGN44mTrCwkmSAsB4VpUXV5QEMxis1iGLiVCYt6YIT1fcT1GK%2BrgCY3FR%2FtvwZjEyoQh%2FEQkgtufd0XnzCKUEJpapkvGg773%2FNzU%2FzZG6Pwy24r%2Fl4JqazuJxjMgAa3FPZZHc3o4b3FsJ%2FtUyBDkWGQyY2xUt3ISj6EzH6vfG2g%2F9zXRk8l2CKFC1rNuxaczMO%2BPxscGOqUBnoaYQjQSKo42TnmJdqB6q%2Bzyvd3UBugloEn0cW8hudtTutFw6NOBSpJYYVL9Lai3xnVvGCdTBNnl8L%2FL3uJQNtlKCKUsfdly5JCMgsl4fvP36OipRf5GoIFgh8OxagxklxeK3epoHPCoQvBgR5uNGS5%2BiT%2FYyRIr5zao8YYL0O8E4F93FEiC7HLtBTDXC%2Fj4%2FQV05CDjlQfGySoaXeN4Oh1BlPZ5&X-Amz-Signature=35710c9e1dc577cf5c1b16a0faff36d3a2f5180db8ff6375480f3c15faece668&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DONGL6C%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqq%2FtzJ%2B1%2Fz43tSvKeKPiheF0uQalDSqDAwEI5xd7%2FIAiEA5%2Fy1IyPqWIjsCKnjhaKzdYtQpxrBmUILCuae87AP7NMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFipkuI%2FhtIAIqaK%2ByrcA9xy0NiF%2F8Tw22xDYqX9730MVbmeghZlGRIzEIJeMZspSZcKOR%2FA1%2FY8VhOy6AjLFDdPoVMt7T%2BGtduXOQzFJJ%2F3I4qkoYXvZRh%2B3zC0Fh6njIlggUHnH827gkvGxiR454vLmfLcT3qzOxe1%2Bp5zf%2B33Zu29wXxpg3Bssop3GRxEAh5ZWgXSZqA5ut85kJyTqUjNojSytgM6mDLEIZQREkd6uTawbuOomHWD3LAulyAoHSvS43Ge65hFe3dOax7aKEbzKtfwnOTQFdH65UgMnfsKGhQEa7DSYI3qBQ97W3XxhWXqwND7mh6QWa%2B9xOuF462ILfVDM728gw8s21dCoFsUUGZlJAbQd5Qymabb9BPZ%2FHgB4TGeeiGtCM%2B2D7Kffo5eDCWzNF3AUOIrka9JXNsAHZrqqkxK0nGgKikkWURthYVlZ4LAwe9vcv%2BapGN44mTrCwkmSAsB4VpUXV5QEMxis1iGLiVCYt6YIT1fcT1GK%2BrgCY3FR%2FtvwZjEyoQh%2FEQkgtufd0XnzCKUEJpapkvGg773%2FNzU%2FzZG6Pwy24r%2Fl4JqazuJxjMgAa3FPZZHc3o4b3FsJ%2FtUyBDkWGQyY2xUt3ISj6EzH6vfG2g%2F9zXRk8l2CKFC1rNuxaczMO%2BPxscGOqUBnoaYQjQSKo42TnmJdqB6q%2Bzyvd3UBugloEn0cW8hudtTutFw6NOBSpJYYVL9Lai3xnVvGCdTBNnl8L%2FL3uJQNtlKCKUsfdly5JCMgsl4fvP36OipRf5GoIFgh8OxagxklxeK3epoHPCoQvBgR5uNGS5%2BiT%2FYyRIr5zao8YYL0O8E4F93FEiC7HLtBTDXC%2Fj4%2FQV05CDjlQfGySoaXeN4Oh1BlPZ5&X-Amz-Signature=e325a91bb601c5d93404c963af1064df082e11403db701a59b4a721e831b04e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DONGL6C%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqq%2FtzJ%2B1%2Fz43tSvKeKPiheF0uQalDSqDAwEI5xd7%2FIAiEA5%2Fy1IyPqWIjsCKnjhaKzdYtQpxrBmUILCuae87AP7NMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFipkuI%2FhtIAIqaK%2ByrcA9xy0NiF%2F8Tw22xDYqX9730MVbmeghZlGRIzEIJeMZspSZcKOR%2FA1%2FY8VhOy6AjLFDdPoVMt7T%2BGtduXOQzFJJ%2F3I4qkoYXvZRh%2B3zC0Fh6njIlggUHnH827gkvGxiR454vLmfLcT3qzOxe1%2Bp5zf%2B33Zu29wXxpg3Bssop3GRxEAh5ZWgXSZqA5ut85kJyTqUjNojSytgM6mDLEIZQREkd6uTawbuOomHWD3LAulyAoHSvS43Ge65hFe3dOax7aKEbzKtfwnOTQFdH65UgMnfsKGhQEa7DSYI3qBQ97W3XxhWXqwND7mh6QWa%2B9xOuF462ILfVDM728gw8s21dCoFsUUGZlJAbQd5Qymabb9BPZ%2FHgB4TGeeiGtCM%2B2D7Kffo5eDCWzNF3AUOIrka9JXNsAHZrqqkxK0nGgKikkWURthYVlZ4LAwe9vcv%2BapGN44mTrCwkmSAsB4VpUXV5QEMxis1iGLiVCYt6YIT1fcT1GK%2BrgCY3FR%2FtvwZjEyoQh%2FEQkgtufd0XnzCKUEJpapkvGg773%2FNzU%2FzZG6Pwy24r%2Fl4JqazuJxjMgAa3FPZZHc3o4b3FsJ%2FtUyBDkWGQyY2xUt3ISj6EzH6vfG2g%2F9zXRk8l2CKFC1rNuxaczMO%2BPxscGOqUBnoaYQjQSKo42TnmJdqB6q%2Bzyvd3UBugloEn0cW8hudtTutFw6NOBSpJYYVL9Lai3xnVvGCdTBNnl8L%2FL3uJQNtlKCKUsfdly5JCMgsl4fvP36OipRf5GoIFgh8OxagxklxeK3epoHPCoQvBgR5uNGS5%2BiT%2FYyRIr5zao8YYL0O8E4F93FEiC7HLtBTDXC%2Fj4%2FQV05CDjlQfGySoaXeN4Oh1BlPZ5&X-Amz-Signature=d4853d5d9719ed92321fafc8c5c520edd1376b14ca3fde78be6e1077031352fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DONGL6C%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqq%2FtzJ%2B1%2Fz43tSvKeKPiheF0uQalDSqDAwEI5xd7%2FIAiEA5%2Fy1IyPqWIjsCKnjhaKzdYtQpxrBmUILCuae87AP7NMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFipkuI%2FhtIAIqaK%2ByrcA9xy0NiF%2F8Tw22xDYqX9730MVbmeghZlGRIzEIJeMZspSZcKOR%2FA1%2FY8VhOy6AjLFDdPoVMt7T%2BGtduXOQzFJJ%2F3I4qkoYXvZRh%2B3zC0Fh6njIlggUHnH827gkvGxiR454vLmfLcT3qzOxe1%2Bp5zf%2B33Zu29wXxpg3Bssop3GRxEAh5ZWgXSZqA5ut85kJyTqUjNojSytgM6mDLEIZQREkd6uTawbuOomHWD3LAulyAoHSvS43Ge65hFe3dOax7aKEbzKtfwnOTQFdH65UgMnfsKGhQEa7DSYI3qBQ97W3XxhWXqwND7mh6QWa%2B9xOuF462ILfVDM728gw8s21dCoFsUUGZlJAbQd5Qymabb9BPZ%2FHgB4TGeeiGtCM%2B2D7Kffo5eDCWzNF3AUOIrka9JXNsAHZrqqkxK0nGgKikkWURthYVlZ4LAwe9vcv%2BapGN44mTrCwkmSAsB4VpUXV5QEMxis1iGLiVCYt6YIT1fcT1GK%2BrgCY3FR%2FtvwZjEyoQh%2FEQkgtufd0XnzCKUEJpapkvGg773%2FNzU%2FzZG6Pwy24r%2Fl4JqazuJxjMgAa3FPZZHc3o4b3FsJ%2FtUyBDkWGQyY2xUt3ISj6EzH6vfG2g%2F9zXRk8l2CKFC1rNuxaczMO%2BPxscGOqUBnoaYQjQSKo42TnmJdqB6q%2Bzyvd3UBugloEn0cW8hudtTutFw6NOBSpJYYVL9Lai3xnVvGCdTBNnl8L%2FL3uJQNtlKCKUsfdly5JCMgsl4fvP36OipRf5GoIFgh8OxagxklxeK3epoHPCoQvBgR5uNGS5%2BiT%2FYyRIr5zao8YYL0O8E4F93FEiC7HLtBTDXC%2Fj4%2FQV05CDjlQfGySoaXeN4Oh1BlPZ5&X-Amz-Signature=066140de548e4c4514973b77b9a338a37180323dd14b7baaee40670d3e3f8c39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DONGL6C%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqq%2FtzJ%2B1%2Fz43tSvKeKPiheF0uQalDSqDAwEI5xd7%2FIAiEA5%2Fy1IyPqWIjsCKnjhaKzdYtQpxrBmUILCuae87AP7NMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFipkuI%2FhtIAIqaK%2ByrcA9xy0NiF%2F8Tw22xDYqX9730MVbmeghZlGRIzEIJeMZspSZcKOR%2FA1%2FY8VhOy6AjLFDdPoVMt7T%2BGtduXOQzFJJ%2F3I4qkoYXvZRh%2B3zC0Fh6njIlggUHnH827gkvGxiR454vLmfLcT3qzOxe1%2Bp5zf%2B33Zu29wXxpg3Bssop3GRxEAh5ZWgXSZqA5ut85kJyTqUjNojSytgM6mDLEIZQREkd6uTawbuOomHWD3LAulyAoHSvS43Ge65hFe3dOax7aKEbzKtfwnOTQFdH65UgMnfsKGhQEa7DSYI3qBQ97W3XxhWXqwND7mh6QWa%2B9xOuF462ILfVDM728gw8s21dCoFsUUGZlJAbQd5Qymabb9BPZ%2FHgB4TGeeiGtCM%2B2D7Kffo5eDCWzNF3AUOIrka9JXNsAHZrqqkxK0nGgKikkWURthYVlZ4LAwe9vcv%2BapGN44mTrCwkmSAsB4VpUXV5QEMxis1iGLiVCYt6YIT1fcT1GK%2BrgCY3FR%2FtvwZjEyoQh%2FEQkgtufd0XnzCKUEJpapkvGg773%2FNzU%2FzZG6Pwy24r%2Fl4JqazuJxjMgAa3FPZZHc3o4b3FsJ%2FtUyBDkWGQyY2xUt3ISj6EzH6vfG2g%2F9zXRk8l2CKFC1rNuxaczMO%2BPxscGOqUBnoaYQjQSKo42TnmJdqB6q%2Bzyvd3UBugloEn0cW8hudtTutFw6NOBSpJYYVL9Lai3xnVvGCdTBNnl8L%2FL3uJQNtlKCKUsfdly5JCMgsl4fvP36OipRf5GoIFgh8OxagxklxeK3epoHPCoQvBgR5uNGS5%2BiT%2FYyRIr5zao8YYL0O8E4F93FEiC7HLtBTDXC%2Fj4%2FQV05CDjlQfGySoaXeN4Oh1BlPZ5&X-Amz-Signature=6427994c8e60d62e8ed8c73286c613f8e4db8645d0a0a15470666b37c4407390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DONGL6C%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqq%2FtzJ%2B1%2Fz43tSvKeKPiheF0uQalDSqDAwEI5xd7%2FIAiEA5%2Fy1IyPqWIjsCKnjhaKzdYtQpxrBmUILCuae87AP7NMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFipkuI%2FhtIAIqaK%2ByrcA9xy0NiF%2F8Tw22xDYqX9730MVbmeghZlGRIzEIJeMZspSZcKOR%2FA1%2FY8VhOy6AjLFDdPoVMt7T%2BGtduXOQzFJJ%2F3I4qkoYXvZRh%2B3zC0Fh6njIlggUHnH827gkvGxiR454vLmfLcT3qzOxe1%2Bp5zf%2B33Zu29wXxpg3Bssop3GRxEAh5ZWgXSZqA5ut85kJyTqUjNojSytgM6mDLEIZQREkd6uTawbuOomHWD3LAulyAoHSvS43Ge65hFe3dOax7aKEbzKtfwnOTQFdH65UgMnfsKGhQEa7DSYI3qBQ97W3XxhWXqwND7mh6QWa%2B9xOuF462ILfVDM728gw8s21dCoFsUUGZlJAbQd5Qymabb9BPZ%2FHgB4TGeeiGtCM%2B2D7Kffo5eDCWzNF3AUOIrka9JXNsAHZrqqkxK0nGgKikkWURthYVlZ4LAwe9vcv%2BapGN44mTrCwkmSAsB4VpUXV5QEMxis1iGLiVCYt6YIT1fcT1GK%2BrgCY3FR%2FtvwZjEyoQh%2FEQkgtufd0XnzCKUEJpapkvGg773%2FNzU%2FzZG6Pwy24r%2Fl4JqazuJxjMgAa3FPZZHc3o4b3FsJ%2FtUyBDkWGQyY2xUt3ISj6EzH6vfG2g%2F9zXRk8l2CKFC1rNuxaczMO%2BPxscGOqUBnoaYQjQSKo42TnmJdqB6q%2Bzyvd3UBugloEn0cW8hudtTutFw6NOBSpJYYVL9Lai3xnVvGCdTBNnl8L%2FL3uJQNtlKCKUsfdly5JCMgsl4fvP36OipRf5GoIFgh8OxagxklxeK3epoHPCoQvBgR5uNGS5%2BiT%2FYyRIr5zao8YYL0O8E4F93FEiC7HLtBTDXC%2Fj4%2FQV05CDjlQfGySoaXeN4Oh1BlPZ5&X-Amz-Signature=05abc984fa9754693428786c4a39f12f40ad25d71e39def90d918c7b28a3322d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665P2DO5E%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfBsV4Yu0BUKZNqtfjBFoJDSLCIYAV2ljnqBUzXq28pAiBIi73MxiGU8NoGrLekMBwQ9AGTEKofk071aXVTmiBUNCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEsTStGcWSfyVBKFuKtwDbb2PpOxEoqEZ4S0mI5Ffp8hajEL9FCS%2B5m0zkxdLZ4PTT3Nx2pUFGJ90TMKTgT0c5p%2BaF8WadTnQ64IGz37w0TrOwqSwaYbRnSM9oEAor9UHsOTW46uA7MsY57K4OmOCwVJFAbdeQg44hZosXmQ4O0BwuuVpjBpj3rd%2FyYu310%2F3f0u%2BNZ%2BYpWkcTWZz%2BUFD8NKOmbFaqj%2FBDU%2BE8gogG4GLoaDp6HUXIx5PtrMlyUfKq1fFhEo8DFPW1H5U1oh5BMmd%2Bj4Acpv7uyCpuMawAgjDsQjvh5XEohodJFjkU6Broe3mn42FEEH4%2F0B4hokWoE5gSduINprEcCEgSETF8sqd4Y9gcNwq49RFQ1yE2N76S4a0Cn0fGL8eUF2FIQLI8%2FebsFpiNXKhXLHVVkr5RGVHqiv%2B63tqceOuVL51bcMD3honGyEWqZpXVV9AI3u3A3RfbputFa%2Flbd863Eg2RI6Lux4JE17J9HwD9W2blIjBvgB2%2F4THS5ak6igE72TmMZwYR1blB%2BipLFquqLPWsCVx%2BQ4X4kipFt8ZPdvJPK0VjUwlmdDKSqQQ4oeO2P%2Fne2o4N30Q1CaJlaR6sAAwNPCEMUw7upg50IDqX43V6pKIXiwrhrX7u9R%2B%2FzIwpbTGxwY6pgENPD4O5eT0mO0q5Yf%2FMuABnP8Jq7imxKmxyXzRZYAaDGlhbJOUnJPgAto07DBgpBkzhmhPwQVM%2FPwWKR8CqVTOtvma7GtOQBiR7Ol8p3O32jKjDRnXOV5TWhF0Isj6m7czuIwN0w%2BUlxAguABYCoaw0Se7tVKckUMA3tyOyjrtHwuoSW%2BqFpkqZbhqPFJtd3IFon83%2BCUwphiqgK4sYFypeT2AJ%2Fm7&X-Amz-Signature=66422abaca4d0fae8e600412710e76b48d6f0af0c73ae4b5f019f9ef07371199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI4J32NU%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX6qKVxLZyi6sV%2F55O3kySuNTGD%2BahAZvt9uuIJ%2BCH%2FQIhAL0ojfTkO3mLWtLFGdOC9aGfvTjjPAKQsUKJeVeApsySKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNAxTmRemMxPOANW0q3ANfbbwGoa%2B8c7w3ycINaeSq5b5LizmgPuiednQsNBPPUn4OMmoSvz6vTkHF%2FlierNWuaNiRz6ez9hlvEGqaTEnaGMwIUho5QrMaKPxxw%2FjFp9qttX2enWiKLg%2B%2FdwVHbo9entUlMPPP8g%2FZSfvpQ7uYe8OPW0iv9qTrNx9HCTFZ6xCG8aQtyvMRmYBB7nZIecst9hlIS02m4RYkMgUlLFrlLBhSr5rkuPKAaY55q38xWq1qU73%2FNHHzzqUqN5ft5zd6364hJFi4UazYUzMLv4xc601ihunHW9Ipb%2BatPxX4Q04hjMTyNCnn4GAX5wO5%2Bpa5f1gK71%2FE5h8QLvuDknDnSOXfv%2BNBh7eyG8oOCGeW0xSxb0cJh8DL6E8sKYrbkcTyz1ZIyWoIsUKc%2BRnT2ezcQqv90SkYcRwEVaUuVGJlE9PE7lBZh17XxmmhJ4qBdN%2Fo6IigU9ShO7VbBU31Hmdi5v%2B0ZkQeN74NRvjv1xrijZhunKtvXXRypvi4ipia%2F%2BoCC9nI8bwClXAAhzC3BygOIRZtq6IAm3otXFXrgr8%2Fs2hfNgtZSgMIpwVoW7ZeWlezTGRC0Z3oIvp8ZLhMx8vawFYPsW6kLZTIHsy2UiRK8UtbiSGTk8h%2B%2BlRuJDDCtMbHBjqkAaswea12k5kP1QBf6mzXd6CqMcY4UHg1Jq4R4HZkZ2w3oYpcOEaNCz6XzTZvoROthc00wdHt%2Fmy3nSiMjQ2%2BsFdXFNJjWGVo0pLh37OlI9pPZ94tEKaUEium7DBVGDfMHN5ShrKd3RXEpabnS4tN%2FdSeW2rFFQ9OMuqPnzfWQcfqsFTuTRWWX3ZKzTtY5JR%2FjCqdpbM0kMU6WIFPjzLMotjGFERB&X-Amz-Signature=aab527da64d4105a09773be3132a2e04db8b79637bd095e1a1a05effa37fab90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466767KXSN5%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDClvnDJpZ%2Fli3P4dXio1PwUajfpH5A2eNkwSGxjaSx6wIhAJYsxHpKWf%2BGksYguX06XOhQ%2FjYcZkxwmDfGYyV4YEeAKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyu9tdOzKHu5JevaIUq3AN2JsP6gPoR5N%2FUnZNgul8fT%2FzZlv6i%2FYYJXbzCCSqQM26j18kbgajNepu2ZlsmgO8oWJw5aJqv6aAkvaDocu2tj9zeBtWLiXx62T%2BT7HUTgnv4Ca8zl1RHg9SDfUySZUzFg8PMrbZOGwIeBy8wGl97PvegfqwFnRA3T5ANQinYQRTC8YUp5C%2BYEneISxsVjmP4ElHMjuguT3BEsrxQxXufbV9gZciKbomo6TJdwhTlzBqJwBaryADttlkpDyPRJa2H9hYKo%2B8I9asRdT%2FCL33mwgPBuC%2FufDvBkERJtyO1mzlLnATiS8k7sKVp7qjw%2B6i10ViLElnGdh%2FmAL%2BScYpQrhRXLAJxbtDkbM%2BMXSRN5qb9rp5qPD1%2FWsLTPSZTu2pxyKataGq2zRQpv4Jj1yxiHmAd1hApmnnj6JfcKhSvfHbZ%2FCFzYiO9pLgjhbr9RtckIbdGNLakIK43%2FyfW7RRBpUVOU%2FMPFiw05r92WuDC82CEFlx9YZn6TI%2FFunUlrsEDVtaxqt2lr7OCvF7a1Exij4WbqaAvsBjJw0rbGWbObH86vBXuRMVYxtGUqP1tC6YvuOKbwNrEJbpZPmZtAyKS7gOzx3F5NdZt%2FOnrgVameu%2BV7yXHamavbzqqGTC7s8bHBjqkAZHNMXTuXt2aurAHHzwCYV8mBoC%2BIordn%2Bu9xIF1A7cuiG0YTxyN64q132rVWXD%2F0zQVmHhn%2BxrHAXd3eDA1LgGxfEdykWb3UkEqbSey9mHAtB2jFGyqorhUxvgYmu3pF1RwxtvwHftqxfxneYXuKKI2HRM2EpmW2jrb0%2BHVjK04zVEbPtSHdhGj3q1m7XY5%2Fnsu9IwGQdxkwxbZbCUe3KCrNYKA&X-Amz-Signature=fc58c535556b40b4649681ddb95767d078a5efdab06f7055d6d075efde073032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DONGL6C%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqq%2FtzJ%2B1%2Fz43tSvKeKPiheF0uQalDSqDAwEI5xd7%2FIAiEA5%2Fy1IyPqWIjsCKnjhaKzdYtQpxrBmUILCuae87AP7NMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFipkuI%2FhtIAIqaK%2ByrcA9xy0NiF%2F8Tw22xDYqX9730MVbmeghZlGRIzEIJeMZspSZcKOR%2FA1%2FY8VhOy6AjLFDdPoVMt7T%2BGtduXOQzFJJ%2F3I4qkoYXvZRh%2B3zC0Fh6njIlggUHnH827gkvGxiR454vLmfLcT3qzOxe1%2Bp5zf%2B33Zu29wXxpg3Bssop3GRxEAh5ZWgXSZqA5ut85kJyTqUjNojSytgM6mDLEIZQREkd6uTawbuOomHWD3LAulyAoHSvS43Ge65hFe3dOax7aKEbzKtfwnOTQFdH65UgMnfsKGhQEa7DSYI3qBQ97W3XxhWXqwND7mh6QWa%2B9xOuF462ILfVDM728gw8s21dCoFsUUGZlJAbQd5Qymabb9BPZ%2FHgB4TGeeiGtCM%2B2D7Kffo5eDCWzNF3AUOIrka9JXNsAHZrqqkxK0nGgKikkWURthYVlZ4LAwe9vcv%2BapGN44mTrCwkmSAsB4VpUXV5QEMxis1iGLiVCYt6YIT1fcT1GK%2BrgCY3FR%2FtvwZjEyoQh%2FEQkgtufd0XnzCKUEJpapkvGg773%2FNzU%2FzZG6Pwy24r%2Fl4JqazuJxjMgAa3FPZZHc3o4b3FsJ%2FtUyBDkWGQyY2xUt3ISj6EzH6vfG2g%2F9zXRk8l2CKFC1rNuxaczMO%2BPxscGOqUBnoaYQjQSKo42TnmJdqB6q%2Bzyvd3UBugloEn0cW8hudtTutFw6NOBSpJYYVL9Lai3xnVvGCdTBNnl8L%2FL3uJQNtlKCKUsfdly5JCMgsl4fvP36OipRf5GoIFgh8OxagxklxeK3epoHPCoQvBgR5uNGS5%2BiT%2FYyRIr5zao8YYL0O8E4F93FEiC7HLtBTDXC%2Fj4%2FQV05CDjlQfGySoaXeN4Oh1BlPZ5&X-Amz-Signature=579f6432a43781ae6cf1824c0aacb1fe87a1e1d8a94709517a15b722733f1374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVEX4BZN%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVUfPcNaa4KBWeRMkz3uBAe4PcE4y1i35DnXQobjQgMwIhAPb8oVbxT99IMmPvAhqaZutQ2tpMfPPyhL19D0sjhOdRKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FjxytoLIpkVek%2FsQq3AMPb8up7V%2BdXJVO5UiR4fhDm94vXhaM%2B852aJIat50%2FbOp6QRHPUSvyizpaLTulzUrbgxGDUnww19NE3zCCZwPKi5XWJgReNBEqVyHR1AgAmQN7blXWqMUkm30ehhelJgrbA%2FEsGDWnPqJGw7Cmx0h5jEgia2zX1HAHYHXAolNegAzkwXmzAeEnP%2FXNN4XEROoNg3rjfgEhN%2BKDJ5gR3Yk4rv8j9WJgI2c%2Ff9HDjSPUa8jl83mqT%2BeZHtphANjQkvx%2BdZjoTQznFn5kafOvckEJpofHsR8WG1UkWeAyW3GFmvwdoxRZYJ0hLA8Vb3s6t1Pio1dU%2BH3C0ZAHTcs%2F%2BjxBp6PvmV7y3nF%2FlopucHODWIYFG9DWnMYEGqVQxTbZK%2BfTV2fZTfmQf%2Bk1%2BFfm0sK3v%2BQ0Ky0v4bmeWNUL%2FVy0MW6B2LdrCVZxCINrx%2BxzPp0mgLEVPLjDRKBs9ZqcspKE8uOozHfBoBQACUDJ%2B%2F62bwfACjlwQsRRIe7YVmb8wy5vkqI1d65kv52xYt8x40M%2F7PG8WWFOkiuV1A6wzx27w%2F56e2BwVwEBZ9Sbdv1VCaXUmkRA%2FoSa10KL1Gxs9RlXcQ9GEPs7IS%2FQtpYm7RWRGLebm662CzCufwc2KjDks8bHBjqkAUpfoRUMKDBFNk9ZaC1pRXdJSQgd0p1s88S%2BCPvz3mx1yMoLs0cxAE2oQTrNmfT%2F3UbfAQ95XRpXcD1Jh4yZBHf8HVSgRrXClppNAi7w4NCkeJ15rNDenJoVkYot9357FOG0v8ZembNJZ5Vw83xt58%2BHxXxuadB0vZEgKHG4Pfq33jPaIND%2F%2FNKXapg5HF4WMib3IwvzdtpBI4z64nSN6xQInbBX&X-Amz-Signature=1ffc64952369e62309c8fde2afb59b8b54a8a946081ad88e76471e863cf32e44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DONGL6C%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqq%2FtzJ%2B1%2Fz43tSvKeKPiheF0uQalDSqDAwEI5xd7%2FIAiEA5%2Fy1IyPqWIjsCKnjhaKzdYtQpxrBmUILCuae87AP7NMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFipkuI%2FhtIAIqaK%2ByrcA9xy0NiF%2F8Tw22xDYqX9730MVbmeghZlGRIzEIJeMZspSZcKOR%2FA1%2FY8VhOy6AjLFDdPoVMt7T%2BGtduXOQzFJJ%2F3I4qkoYXvZRh%2B3zC0Fh6njIlggUHnH827gkvGxiR454vLmfLcT3qzOxe1%2Bp5zf%2B33Zu29wXxpg3Bssop3GRxEAh5ZWgXSZqA5ut85kJyTqUjNojSytgM6mDLEIZQREkd6uTawbuOomHWD3LAulyAoHSvS43Ge65hFe3dOax7aKEbzKtfwnOTQFdH65UgMnfsKGhQEa7DSYI3qBQ97W3XxhWXqwND7mh6QWa%2B9xOuF462ILfVDM728gw8s21dCoFsUUGZlJAbQd5Qymabb9BPZ%2FHgB4TGeeiGtCM%2B2D7Kffo5eDCWzNF3AUOIrka9JXNsAHZrqqkxK0nGgKikkWURthYVlZ4LAwe9vcv%2BapGN44mTrCwkmSAsB4VpUXV5QEMxis1iGLiVCYt6YIT1fcT1GK%2BrgCY3FR%2FtvwZjEyoQh%2FEQkgtufd0XnzCKUEJpapkvGg773%2FNzU%2FzZG6Pwy24r%2Fl4JqazuJxjMgAa3FPZZHc3o4b3FsJ%2FtUyBDkWGQyY2xUt3ISj6EzH6vfG2g%2F9zXRk8l2CKFC1rNuxaczMO%2BPxscGOqUBnoaYQjQSKo42TnmJdqB6q%2Bzyvd3UBugloEn0cW8hudtTutFw6NOBSpJYYVL9Lai3xnVvGCdTBNnl8L%2FL3uJQNtlKCKUsfdly5JCMgsl4fvP36OipRf5GoIFgh8OxagxklxeK3epoHPCoQvBgR5uNGS5%2BiT%2FYyRIr5zao8YYL0O8E4F93FEiC7HLtBTDXC%2Fj4%2FQV05CDjlQfGySoaXeN4Oh1BlPZ5&X-Amz-Signature=bffa6e3e77ff7d3e8669c9187ccdc03629aeaa45e44553da19302487e38a19e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJTDN6YF%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEn7KKexZ49D7QXZ5xmfrFmtJBmkc84koUSeo2EfHEIPAiBeplDPjwZxTTj7m3HBy%2BQk%2Fx4IF8Y%2BRxRt3C8vhF%2Fl%2FiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQyhK8kP6vrIU0yCVKtwDRu6N7PxXeEBAd46RtJLw%2BgdQD6HoOBDxF2M6zVRcy%2BJ1o4cCOK2v%2BZK0pbfLN1ZJJDrLIaOiz5BCck7sWJUmHKjLC92x0Otz0wO5v75%2FLaVklBxnBrNGN7fBQDoFxV%2F%2FJTpzUOXvWO3FdbpaKndjKHKnGk91Xxuj%2FFKq7H3Ln1q4nxM2EI%2BWoiet846L6R%2BDU0C3wOJphtmpsT9Szl5YMkWAFRY7DTIIGPLWm0pYuwZBSLOQp6oPctWe2LXpAKzlIJdUvl0DP09cx%2BW%2BvoqQqeeGdpY86RBSCJfAVZ1VelaGpKBrF%2FrcudoNc%2FhjMTnatVG%2B8Edklecf17h6GkFcXfa52v0QnbSiaJCyHMyJDEBixtbILr2JGdpIkKrKoLKkGjEF%2BNrOvr2k9Un%2B3g3ZyQYyp2ngb1Y%2BJV6hHlX4gD0FhnOLWBaNXt86NkX6f24tFoNgbEyq%2Fyo9Hdlzki1NZTpoivgcElX3yQIPuagn0e6mKBwOpXop7Cv%2BuQluTOCy5mXiug%2B2vFB%2FfypwA4S7LIwlbUB2Basec6FfEYtpAM47ldmkMvrS49WdVnQ7qwmGwAypEn8nJdsDSkcKEeMdSNVmPn%2BzxQJNXC%2BFokNcHSIyTVfGCPejUAvuur8wgZLGxwY6pgF8tF8PGtQOh3IptWVAYwrPlYGbXOmLk3AQTviuS65jw38vzj9nygeR9UI3b6WsCL6u1f7gDy4ZtbXUi7KiVKzqHx67YLYF%2FdCUwzevQeJb0wnSttF2KKgNJETYr3I4MBtMVHnE6aHZjq4NbCMJLsRisqsB1U%2B6%2FhxvgySln3MpGflQmK9hVcSGwx3CDWkf2uMKYoj5UcEgu4iEcMOeaBCcPpy%2BXnV1&X-Amz-Signature=49b520c5c57e7958352131a01c2dc7e2eb2d6644633ee7d4fd64cafbce2544eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DONGL6C%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqq%2FtzJ%2B1%2Fz43tSvKeKPiheF0uQalDSqDAwEI5xd7%2FIAiEA5%2Fy1IyPqWIjsCKnjhaKzdYtQpxrBmUILCuae87AP7NMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFipkuI%2FhtIAIqaK%2ByrcA9xy0NiF%2F8Tw22xDYqX9730MVbmeghZlGRIzEIJeMZspSZcKOR%2FA1%2FY8VhOy6AjLFDdPoVMt7T%2BGtduXOQzFJJ%2F3I4qkoYXvZRh%2B3zC0Fh6njIlggUHnH827gkvGxiR454vLmfLcT3qzOxe1%2Bp5zf%2B33Zu29wXxpg3Bssop3GRxEAh5ZWgXSZqA5ut85kJyTqUjNojSytgM6mDLEIZQREkd6uTawbuOomHWD3LAulyAoHSvS43Ge65hFe3dOax7aKEbzKtfwnOTQFdH65UgMnfsKGhQEa7DSYI3qBQ97W3XxhWXqwND7mh6QWa%2B9xOuF462ILfVDM728gw8s21dCoFsUUGZlJAbQd5Qymabb9BPZ%2FHgB4TGeeiGtCM%2B2D7Kffo5eDCWzNF3AUOIrka9JXNsAHZrqqkxK0nGgKikkWURthYVlZ4LAwe9vcv%2BapGN44mTrCwkmSAsB4VpUXV5QEMxis1iGLiVCYt6YIT1fcT1GK%2BrgCY3FR%2FtvwZjEyoQh%2FEQkgtufd0XnzCKUEJpapkvGg773%2FNzU%2FzZG6Pwy24r%2Fl4JqazuJxjMgAa3FPZZHc3o4b3FsJ%2FtUyBDkWGQyY2xUt3ISj6EzH6vfG2g%2F9zXRk8l2CKFC1rNuxaczMO%2BPxscGOqUBnoaYQjQSKo42TnmJdqB6q%2Bzyvd3UBugloEn0cW8hudtTutFw6NOBSpJYYVL9Lai3xnVvGCdTBNnl8L%2FL3uJQNtlKCKUsfdly5JCMgsl4fvP36OipRf5GoIFgh8OxagxklxeK3epoHPCoQvBgR5uNGS5%2BiT%2FYyRIr5zao8YYL0O8E4F93FEiC7HLtBTDXC%2Fj4%2FQV05CDjlQfGySoaXeN4Oh1BlPZ5&X-Amz-Signature=cb166519d665f73a272c82b42ae33840dd5bc85b69434078560e168b32fddb57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3M7K5LS%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FkI2W65hyD%2B8jVX6uLlM7soQyNyKerm96TqxddxrAlAiAhVWq%2BaxMK%2FOMmpJ44Dl5TKaT45u36rJJfPmbUOwoblyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuMCCr9G1oipp61KYKtwDLQHdOb7ksY6kXM19JgLqB0kZpDmgYgNoza47%2BPW%2BCsmhAl58iXjOIGbdhF5Rus07zQQl%2BSTdMVHFLrBXXJCmd5ctJLCXSWq%2FafEgLsIs98R4PB6SvNnngppyyrm2dH3waCv9DOfkO5jQHWOcVenFaPNvsGxzoaZmwbn7geTLx%2FvJBakCEL85hP72wJBTpeduLHRZl3NWyHZ0c%2F21U6Pn4LXjctUnfAg0X99m75p3pmoew28f1ruvxP7HdZRJWqq5B6IX5l%2FgbuMZmUlhxKzD%2FetSpwZwz80GOMzUlMAagTTbN4qgKmZVxnGK7YRVhxmv4vboSBGs4wRsKJS6bfL2RpJTetqgznnmHZKZXSHtmEkItWro9M%2BZmT%2BjsSf5Og3fl96Cbv%2FZ%2BnQ1%2FJFk%2ByzHl6YC1c4Gk7jXBDrAA2jWyrPzgZbNKmAtBl%2BilGFSOebikVOrDkUAJEHHyOH2%2BzWfdQIjXcuac0k%2BxBXllA0jhQPqeh9EIFnFGlSQLYLSXSsb129Mi%2Beu8WRKnWb3eUyauP6P0ywASRAr7amE5%2FqbWOWsVBrstlUWlm%2BLR91Bcg1EUbbp2Hxv9Hl5CztNsvkoexmU2jZ1%2BRu2QXmuj20%2Be4xi0HJ7KOFpEm8aeFAwv7PGxwY6pgGwoziYa%2FVK1o4O8vlEZ1tBS0LckRwHWpQ6bMi44oZv1%2F0M0cexSj0fXCdeX%2FqmkbphkSXNP9IRh9tia4qKZ0PhYN9jLf4QcWzFaUaxLwgvYeGi2VXuMv4AvWdVnl452Qs0wfQTJxaMzRaAcLhT8C%2BT8scTKRtSXkrtezBwNG3bT7XI89nHzFpDULbzZHlHSfLdYDYHN1Q%2B8sc7mYuicUrcLP0D4as%2F&X-Amz-Signature=f0567335fe587f31d3eb91e6420676afbb510c40cd1ca7a9e7cea7b622bd1859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DONGL6C%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqq%2FtzJ%2B1%2Fz43tSvKeKPiheF0uQalDSqDAwEI5xd7%2FIAiEA5%2Fy1IyPqWIjsCKnjhaKzdYtQpxrBmUILCuae87AP7NMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFipkuI%2FhtIAIqaK%2ByrcA9xy0NiF%2F8Tw22xDYqX9730MVbmeghZlGRIzEIJeMZspSZcKOR%2FA1%2FY8VhOy6AjLFDdPoVMt7T%2BGtduXOQzFJJ%2F3I4qkoYXvZRh%2B3zC0Fh6njIlggUHnH827gkvGxiR454vLmfLcT3qzOxe1%2Bp5zf%2B33Zu29wXxpg3Bssop3GRxEAh5ZWgXSZqA5ut85kJyTqUjNojSytgM6mDLEIZQREkd6uTawbuOomHWD3LAulyAoHSvS43Ge65hFe3dOax7aKEbzKtfwnOTQFdH65UgMnfsKGhQEa7DSYI3qBQ97W3XxhWXqwND7mh6QWa%2B9xOuF462ILfVDM728gw8s21dCoFsUUGZlJAbQd5Qymabb9BPZ%2FHgB4TGeeiGtCM%2B2D7Kffo5eDCWzNF3AUOIrka9JXNsAHZrqqkxK0nGgKikkWURthYVlZ4LAwe9vcv%2BapGN44mTrCwkmSAsB4VpUXV5QEMxis1iGLiVCYt6YIT1fcT1GK%2BrgCY3FR%2FtvwZjEyoQh%2FEQkgtufd0XnzCKUEJpapkvGg773%2FNzU%2FzZG6Pwy24r%2Fl4JqazuJxjMgAa3FPZZHc3o4b3FsJ%2FtUyBDkWGQyY2xUt3ISj6EzH6vfG2g%2F9zXRk8l2CKFC1rNuxaczMO%2BPxscGOqUBnoaYQjQSKo42TnmJdqB6q%2Bzyvd3UBugloEn0cW8hudtTutFw6NOBSpJYYVL9Lai3xnVvGCdTBNnl8L%2FL3uJQNtlKCKUsfdly5JCMgsl4fvP36OipRf5GoIFgh8OxagxklxeK3epoHPCoQvBgR5uNGS5%2BiT%2FYyRIr5zao8YYL0O8E4F93FEiC7HLtBTDXC%2Fj4%2FQV05CDjlQfGySoaXeN4Oh1BlPZ5&X-Amz-Signature=c7e56d12f9903bbf76584efe74ef33880f6722431bc82d6cb4b64d56646231ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466425POD4W%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENvFqNBuf5lRwShr02ngHKtfQqAdEbPscFN7Lb5%2Fe0hAiEA%2FB%2BX80PGUiGPATYbrEUEnDUJHlhrT7hK7N%2F%2BIe7bZ7MqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoXceN7%2FXZM3%2BuUzircA6D09YLTtl6Ow0IEnhYA7jnhKM8mF9zzcF%2Brb1azKkvMjt2f6OMJ0vP%2BnmBnxgcmisJyFF8dt%2BDZdqP7qLj%2BHhtieBCD2CJ156WUveNoA9wk2b5qdfid3m1VAXBg%2F8DPHXqontaYQZmVMp%2B9Ds16ehESQZLO9z1PHG27qAVVK9g3KmfXqx%2FBNhBIdbMC4fUzyCvZBadLvGYDsO8kHzKBONxYHYNXbeO67v10IKAtXO5nRRirwCDCiyetdC%2F%2FuA2zUKdpHjEfcCBqHDRYU0tBehMWX3gYL%2BJ8N%2B%2FMh4yUW%2F%2FObMtqIlUthiLnUMGPxSqtCw8a7HebiLP9NVlVbKDS%2BdVaaYb3Z3rQIpMW%2B5cKrr00U1llO88PqMkvR42Gnxkn2hIHG%2FqA2Rr9TcH4EYXuZj6so2OS6LvvZ3QVrBnMsQCSnzHYkvks%2FcgXc0qSFqV0I95fJg413RSrqOV06JKkkUpGuk5t7lnpKJFJ6Wh%2BS6YipW94X7a0xToQ8KcZkbK536%2B6TcjlzY%2B23WNTmO2LsytYmfPGnJdM9OpRz7Y7XmmkMRxU5lIMwKfdL9byXsU1m1PCB%2BuS4TTAObDNBm%2Fo2m1B7UHnOEmJoElN%2FEMiydzCtTOf1bJGAV9A1%2BZSMJWRxscGOqUBDaAKUBASwFkiXFyivQ3oUjq8MTG1ctweQpnFQ10oP6CeHk6ejTwPJqt4%2FHOvLFV1Avp2wdJH%2B151Z0P8tVn5OSGf74pseGy6527ml%2BSJaB%2B4R5f3WQ0QpNvzk%2B%2BHAVL%2BN1q3kt0dLFZnIeWtvQemyN7Jt80ZKLP88rK%2Fyo%2BgF%2BU%2FphP8I%2BJ86q1SBFL0NNfsMG%2BaKAikKoqzS%2B%2FzcUJ5CR0pEqYd&X-Amz-Signature=4fccd5c539bd6d097c3f5d20c56fb39855321daf486e9e17a6d48716f47de15c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DONGL6C%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqq%2FtzJ%2B1%2Fz43tSvKeKPiheF0uQalDSqDAwEI5xd7%2FIAiEA5%2Fy1IyPqWIjsCKnjhaKzdYtQpxrBmUILCuae87AP7NMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFipkuI%2FhtIAIqaK%2ByrcA9xy0NiF%2F8Tw22xDYqX9730MVbmeghZlGRIzEIJeMZspSZcKOR%2FA1%2FY8VhOy6AjLFDdPoVMt7T%2BGtduXOQzFJJ%2F3I4qkoYXvZRh%2B3zC0Fh6njIlggUHnH827gkvGxiR454vLmfLcT3qzOxe1%2Bp5zf%2B33Zu29wXxpg3Bssop3GRxEAh5ZWgXSZqA5ut85kJyTqUjNojSytgM6mDLEIZQREkd6uTawbuOomHWD3LAulyAoHSvS43Ge65hFe3dOax7aKEbzKtfwnOTQFdH65UgMnfsKGhQEa7DSYI3qBQ97W3XxhWXqwND7mh6QWa%2B9xOuF462ILfVDM728gw8s21dCoFsUUGZlJAbQd5Qymabb9BPZ%2FHgB4TGeeiGtCM%2B2D7Kffo5eDCWzNF3AUOIrka9JXNsAHZrqqkxK0nGgKikkWURthYVlZ4LAwe9vcv%2BapGN44mTrCwkmSAsB4VpUXV5QEMxis1iGLiVCYt6YIT1fcT1GK%2BrgCY3FR%2FtvwZjEyoQh%2FEQkgtufd0XnzCKUEJpapkvGg773%2FNzU%2FzZG6Pwy24r%2Fl4JqazuJxjMgAa3FPZZHc3o4b3FsJ%2FtUyBDkWGQyY2xUt3ISj6EzH6vfG2g%2F9zXRk8l2CKFC1rNuxaczMO%2BPxscGOqUBnoaYQjQSKo42TnmJdqB6q%2Bzyvd3UBugloEn0cW8hudtTutFw6NOBSpJYYVL9Lai3xnVvGCdTBNnl8L%2FL3uJQNtlKCKUsfdly5JCMgsl4fvP36OipRf5GoIFgh8OxagxklxeK3epoHPCoQvBgR5uNGS5%2BiT%2FYyRIr5zao8YYL0O8E4F93FEiC7HLtBTDXC%2Fj4%2FQV05CDjlQfGySoaXeN4Oh1BlPZ5&X-Amz-Signature=09fc91ebfecaaaf13788385c9baf264027c3a4c525fa4be83d53a681e140c5a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GF6WIUI%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICusfNuhyYgEYdpy5GBU7uUzjcR4OPep%2BM78oDW6TOtaAiAUD1%2BwYAWGEcXhtzMr6sxmmcCtB6ULfaAawTB7wrjsQSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlXy0PYTd7ddJKRVwKtwDbl6icfcEsSdB3Mzs4zL4SDs0QqvpW3J3H05s%2BYzS8X85cG%2B%2BYC9LaS%2FEzoKAwzwvMTsy4KL03XHzabhWIJ8OBBeHlthHPkN2ey79THinlyPaYiLdAQaWvW%2FaMVr%2BniqJlRBWbrRw710JSmVrUU6YNPGa%2BFHER7sjrzJ9mKMwsGfaZwZvaJ6jONGqc%2Fu7HmPm5nnCtztpMkQ9Y3LEPII1WR5RPGK4eBeI0On0R9RlYim1C6X79Xcdp%2F9foTFdx%2Fsg8nKMoZ%2BlYXf2FZoUkpeoo4QO6a9ZOfddqpA1x9%2B6Ef0vyZj7KF%2Fn4q2%2BhCuaD5U5FOiDG73ZfNyF%2FKQasS5BwgmRvkKGIH5hCdT14eJR1wQ13Y1zTtvofcAsz8wlakFD%2BTnpH%2B0ZNubhPpFMmZPIVPjO1HO1MXyjxydHuqLtTUmQKmRKAMnqFOLlK055hWzf3Ny2I4P1SdSddt%2F%2FyEesq1T5OYqojdPFnSYq9aT73IBI4YMxOJOvN5%2FAD5qLcTefxWWJ5NLXdW1mu1fzcgg%2FKa2oRK%2FbEaf8nR5ee%2FEvvNlhICCt3sbzolDWWNp0XeXOBQJjKpFQVtXLsFYxAPl2i5CEsdos3rhuG5IEPDXuNLuLe7JuQi4WSmA6llIw5LTGxwY6pgGq81Xz2zNshR76HRO4Hg2fUlNHsGpx%2FMqtTL0V07aZ6RNxgfJGNfscCYYjq%2BayQ1%2BFuXOjACE30PlESvPFQxpctqCuzb9CVZc5KEbK5heOdSkBcHsUbadw3%2BvqBtnoDxzK3p0qkPNP4J9GGm5XufrWU6gS5YMWRTwNvYPjod%2BpcTTMFSu2mJkRIW9FLnHVXrduYrvdkvEX%2BzjxoJY3Gj%2Fd4YrRidQH&X-Amz-Signature=319068567b27fa2a638a318478263cd8dadeaff602ced8c950b3fb636e7dfea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROWWNDZQ%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCm%2Bd1cKL2C6APiqrFXTi521wcvB6oOuGO8SGDg0LjcgIhAKKTCndsJpna4EcHHAgoHERVHKtNPc25AtK3nJ%2Flfv1fKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfZfKCfw%2BYXS5dfOQq3ANeuDz3ozfEGNfrfTqd%2FqdwqzvvNjDYkN98DXhhvu8JTSQ9UTFz97Gb90s0jlhmcmwmv4JIW1CP%2BaMM44mmvAV1l2DSGlR2P3xPhQvRxHOdRMQmsIKQhJ8M0QxuMML5ib1OXqd9uarD%2FNge2JUg09Rixvl5GG08qZJOO5T4fHR%2ByCFBV9Cuq0%2FgPLplWzMmLGGyo1YZbzAq3m%2F7Ym1AchcIKYU9vNhoapsZ0kLxwbjfFdUa8jfbPNxTlU8sck12WW%2FM0arzR1TJwvSZcCe0fQubXQxCoBcNXkA35zVGUzTGekWii5F545ezvxAqssusXYy7kMN0TttAENKzVxpvBTl4SAIlGKWue2xEx%2FcVgz0ygWn8kEAXNP6%2FLJiVlS4d6ewO%2BYAPh%2FIRExMmTAL5GIyg3sw8Ygv91sg%2F06qD0ir%2BtT6wGO8vDNAoUv%2By%2FZPXljDJQS11TbRDyAYLwqp50Nj9pphootMbvg55912Y%2Br0un5WlITuwOG20v%2BdM1H9WxcD7CRrq55Rs4k25W%2FHvdEqTqJphE5i0ZiPlljv4WFuE%2BdIT95%2F9aOwhbhyi0g8AYMRVrDAiVYwv2MDgW0600pKdvZdGlyCNL8NKH9vC8pV1Cpi0TgRN%2BjLUkXyXwjC4tMbHBjqkAc7gnFCCOK41o1cgfQ93YLvUV%2FQtkR1Jw8OFYZT1ynHMvWxgArKTQ9bt5jKcmFYbNBB7vQfzKqDjFRFPKiFpjzdgcMh0J7kqiu9KT5zVM05PQqUemTtOpaY4v3rjP68quarym98H8%2FGYwAZF7BiAVHiq8UYDfMMqOVTGabFqf33EMyqb4vXiuS2M44KKMz2wTpqtA2e6RdZji2jjeg4%2B3hFYncJ5&X-Amz-Signature=536c84d8a50566827aecfb0549217e7f8250947c89c4444262c871efb4cae1c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJKNXWWL%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa5pnr2YzsphzoF%2BX7b4QRVKRDqM9yOOKqQWDlTBCW0AIgOS98xrv%2F2hf8Zhh48kSVtmjnw0VxzN2K9zUJRkpOIBMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGi6ez8Gt%2FnSbhJWCrcA27ek6PYK6kRIVtuZ3N4HQRInyudXe%2Bvq%2FI%2Fkd5i8IKlE8%2FHXUX6jVxvPJ1zr5XBbY3raJWwRa8XGUwn90zfquHx%2Bmpu2uV8v96%2BU0TkUmuwiQwnG%2FO5JatscYMyM7Z8o3Q1r8T%2FuLrHMhSPWTDi1mUtgbSjXVHchZNHzJn5ZQ61EkDz5oj%2BCZ7PLbhwkoZrqWmRkTrlAE1lI3udUt%2B5ClIhORVW27cnwiveEGoZ7cqvXjYhMzqA6DVf0WXIhUyc5pYkvCwUKjMHw2hER5Q5vNBRts72NJsCuWpK67EFdwkc1enUaJN3vitInHq83Rr%2BbaUWyBN4pnZUlUKSTjhVhQklc8155vSJmYIfF4km5ViD0SzFc9SCmY5glVkw6sLoK%2Bte8agWe5jCBcWUl4A9Eo7s28kdwY7oRuHAroPqDI0ogFmc9%2FEE8r6f9zBz96V7sk0FgyXtZhnf0WNipRckm%2BjYw9QB%2Bos3jxvP1g0EGWlcQXEQMf%2BSYdwuCAiVOSxdObpulDsTMJYC%2B3ZEIhLKExVPAWPO8%2BRrmc%2FEB04Lg22IK%2FjKMXrK9uQdmE8Pj0%2BQ6juk7y2Yau3takAaHJrS8WOwvg6qBMVigIpKH%2Bj5t97yrOnb7O%2Bt57GqLdvDMK2QxscGOqUBSQx%2FYWZ%2BIyzuOfAXAL%2B1c1yirODApid%2BBP%2FtG4A2%2BBkGvZ4JlTihL2paDq2LBUfad6emlTOuV7N%2BrJZqVOdSwgHlky155xDVvVqTQeGxJxfLdhonrsn4NWsoA3cu1sMPfFWrrww%2BAu%2BltJd1ooBc06vJsBz2EFjmrpfE0zJ9c8OOYqTp%2B%2FxfhYjVumC6cSmIOJvQFmc9%2FR0ujELKy7%2FHGilM6Ocp&X-Amz-Signature=9d3e3cd6f98336b34cfab179f1837f9fac42e871afd5327f1fb7ac288cde1561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DONGL6C%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqq%2FtzJ%2B1%2Fz43tSvKeKPiheF0uQalDSqDAwEI5xd7%2FIAiEA5%2Fy1IyPqWIjsCKnjhaKzdYtQpxrBmUILCuae87AP7NMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFipkuI%2FhtIAIqaK%2ByrcA9xy0NiF%2F8Tw22xDYqX9730MVbmeghZlGRIzEIJeMZspSZcKOR%2FA1%2FY8VhOy6AjLFDdPoVMt7T%2BGtduXOQzFJJ%2F3I4qkoYXvZRh%2B3zC0Fh6njIlggUHnH827gkvGxiR454vLmfLcT3qzOxe1%2Bp5zf%2B33Zu29wXxpg3Bssop3GRxEAh5ZWgXSZqA5ut85kJyTqUjNojSytgM6mDLEIZQREkd6uTawbuOomHWD3LAulyAoHSvS43Ge65hFe3dOax7aKEbzKtfwnOTQFdH65UgMnfsKGhQEa7DSYI3qBQ97W3XxhWXqwND7mh6QWa%2B9xOuF462ILfVDM728gw8s21dCoFsUUGZlJAbQd5Qymabb9BPZ%2FHgB4TGeeiGtCM%2B2D7Kffo5eDCWzNF3AUOIrka9JXNsAHZrqqkxK0nGgKikkWURthYVlZ4LAwe9vcv%2BapGN44mTrCwkmSAsB4VpUXV5QEMxis1iGLiVCYt6YIT1fcT1GK%2BrgCY3FR%2FtvwZjEyoQh%2FEQkgtufd0XnzCKUEJpapkvGg773%2FNzU%2FzZG6Pwy24r%2Fl4JqazuJxjMgAa3FPZZHc3o4b3FsJ%2FtUyBDkWGQyY2xUt3ISj6EzH6vfG2g%2F9zXRk8l2CKFC1rNuxaczMO%2BPxscGOqUBnoaYQjQSKo42TnmJdqB6q%2Bzyvd3UBugloEn0cW8hudtTutFw6NOBSpJYYVL9Lai3xnVvGCdTBNnl8L%2FL3uJQNtlKCKUsfdly5JCMgsl4fvP36OipRf5GoIFgh8OxagxklxeK3epoHPCoQvBgR5uNGS5%2BiT%2FYyRIr5zao8YYL0O8E4F93FEiC7HLtBTDXC%2Fj4%2FQV05CDjlQfGySoaXeN4Oh1BlPZ5&X-Amz-Signature=727dedb7a4f0f6cc6b6ad31cb305d1a21d0f24628ec43af8e34f7382cd7f23bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DONGL6C%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqq%2FtzJ%2B1%2Fz43tSvKeKPiheF0uQalDSqDAwEI5xd7%2FIAiEA5%2Fy1IyPqWIjsCKnjhaKzdYtQpxrBmUILCuae87AP7NMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFipkuI%2FhtIAIqaK%2ByrcA9xy0NiF%2F8Tw22xDYqX9730MVbmeghZlGRIzEIJeMZspSZcKOR%2FA1%2FY8VhOy6AjLFDdPoVMt7T%2BGtduXOQzFJJ%2F3I4qkoYXvZRh%2B3zC0Fh6njIlggUHnH827gkvGxiR454vLmfLcT3qzOxe1%2Bp5zf%2B33Zu29wXxpg3Bssop3GRxEAh5ZWgXSZqA5ut85kJyTqUjNojSytgM6mDLEIZQREkd6uTawbuOomHWD3LAulyAoHSvS43Ge65hFe3dOax7aKEbzKtfwnOTQFdH65UgMnfsKGhQEa7DSYI3qBQ97W3XxhWXqwND7mh6QWa%2B9xOuF462ILfVDM728gw8s21dCoFsUUGZlJAbQd5Qymabb9BPZ%2FHgB4TGeeiGtCM%2B2D7Kffo5eDCWzNF3AUOIrka9JXNsAHZrqqkxK0nGgKikkWURthYVlZ4LAwe9vcv%2BapGN44mTrCwkmSAsB4VpUXV5QEMxis1iGLiVCYt6YIT1fcT1GK%2BrgCY3FR%2FtvwZjEyoQh%2FEQkgtufd0XnzCKUEJpapkvGg773%2FNzU%2FzZG6Pwy24r%2Fl4JqazuJxjMgAa3FPZZHc3o4b3FsJ%2FtUyBDkWGQyY2xUt3ISj6EzH6vfG2g%2F9zXRk8l2CKFC1rNuxaczMO%2BPxscGOqUBnoaYQjQSKo42TnmJdqB6q%2Bzyvd3UBugloEn0cW8hudtTutFw6NOBSpJYYVL9Lai3xnVvGCdTBNnl8L%2FL3uJQNtlKCKUsfdly5JCMgsl4fvP36OipRf5GoIFgh8OxagxklxeK3epoHPCoQvBgR5uNGS5%2BiT%2FYyRIr5zao8YYL0O8E4F93FEiC7HLtBTDXC%2Fj4%2FQV05CDjlQfGySoaXeN4Oh1BlPZ5&X-Amz-Signature=fb2339936a8ed4e905db5621bc2152f574de86737fe6c6adab20faf75c6988c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4C6YIR7%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBh8vIsqeRrgVbmJ7Vk8fAbOBM69wdWgAiFCYb0rkiO0AiAStt4tsCm0KyxZrk%2BwCvQxLl11V2vSE8OXQZT9qQOUsCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtSlWj45v08kdYGBDKtwD7RN0fF5MeIFAMd%2FuZ4Rw1JNEE%2FhX0qq7qhgD8exSw%2F2fp%2Fij3HvDZsJJTCesIbvgQ5KuUyFTEYgDWq%2FelBrduNiPdpPAHv64ITcivSGgytDopxflEJ4r%2Ftlfq6r3OBCeIqjQcqtu8%2FDOQbZOMRP%2FtdfZWd3Xaruqo%2FqLVwpBFFRvml%2BwwEQUfnGUdsUQmKMCvUt0fHj5UatPS3MtsJ6oFhPpgdRY06RZJ6Z61rDXINJt3vydLZFGFdjEL3z3OtuelvYuRg4NIyI1sJA9kwG6MQFNWeX5fJUoNr6xk%2Foo1VvonDWz3v57g8aiuP4USnXjCM2vWRXceklBNaBO1Dviz2Fc8yiMpLe3pYuJOd8gKCl11G%2FlC4EafszPnHq6dtmwN9qhsolln5e3B1%2BmBR5y4SX4H%2Fk5S6fqrbefjjT%2Fu8Hiz2Te9ZBYgmTHOwtyDw9BO5tBayWajBj3gb0G4iGKr%2B1AqSNFLXtA3g04hWM421sla5T7EqAAd7txnQ8BqvsYN6Z0%2FpUgnxDCB46dRJXFqJTcMaYVuNnfVpnGnnVP6GkVMPpAAx8PLtx%2BP2gR4WTYhVsG%2FnCsIR6H15qmrfQNCmKIRTQY6yMEly0cb%2FuS4tEsEJo6ezYXKih3q5cwzZDGxwY6pgEFnVb3tjzmSswtjVvp%2F83SeJTydz1XQiDZBBtBNaxBmZi01zwdm1kJpBcCTwwWPWJZIpYv4m6DTUEb4YQEDgCDwqtu7%2FAehVoVce7nAR5vZqi%2FIfhm%2Bl1gE6IYS49C5hGshIqneMtOCO4SI6euBQupLknMNbAD8mX1v%2BeSV4rDUMMBklgLnW0txZw1T9fpe2ZZnsEN3QEz0G7b5E6uPvpY83Bq48S5&X-Amz-Signature=fadacbfd3042a157c92e3d8129931b19a017814c952fba512c517e0ef2950bdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4C6YIR7%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBh8vIsqeRrgVbmJ7Vk8fAbOBM69wdWgAiFCYb0rkiO0AiAStt4tsCm0KyxZrk%2BwCvQxLl11V2vSE8OXQZT9qQOUsCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtSlWj45v08kdYGBDKtwD7RN0fF5MeIFAMd%2FuZ4Rw1JNEE%2FhX0qq7qhgD8exSw%2F2fp%2Fij3HvDZsJJTCesIbvgQ5KuUyFTEYgDWq%2FelBrduNiPdpPAHv64ITcivSGgytDopxflEJ4r%2Ftlfq6r3OBCeIqjQcqtu8%2FDOQbZOMRP%2FtdfZWd3Xaruqo%2FqLVwpBFFRvml%2BwwEQUfnGUdsUQmKMCvUt0fHj5UatPS3MtsJ6oFhPpgdRY06RZJ6Z61rDXINJt3vydLZFGFdjEL3z3OtuelvYuRg4NIyI1sJA9kwG6MQFNWeX5fJUoNr6xk%2Foo1VvonDWz3v57g8aiuP4USnXjCM2vWRXceklBNaBO1Dviz2Fc8yiMpLe3pYuJOd8gKCl11G%2FlC4EafszPnHq6dtmwN9qhsolln5e3B1%2BmBR5y4SX4H%2Fk5S6fqrbefjjT%2Fu8Hiz2Te9ZBYgmTHOwtyDw9BO5tBayWajBj3gb0G4iGKr%2B1AqSNFLXtA3g04hWM421sla5T7EqAAd7txnQ8BqvsYN6Z0%2FpUgnxDCB46dRJXFqJTcMaYVuNnfVpnGnnVP6GkVMPpAAx8PLtx%2BP2gR4WTYhVsG%2FnCsIR6H15qmrfQNCmKIRTQY6yMEly0cb%2FuS4tEsEJo6ezYXKih3q5cwzZDGxwY6pgEFnVb3tjzmSswtjVvp%2F83SeJTydz1XQiDZBBtBNaxBmZi01zwdm1kJpBcCTwwWPWJZIpYv4m6DTUEb4YQEDgCDwqtu7%2FAehVoVce7nAR5vZqi%2FIfhm%2Bl1gE6IYS49C5hGshIqneMtOCO4SI6euBQupLknMNbAD8mX1v%2BeSV4rDUMMBklgLnW0txZw1T9fpe2ZZnsEN3QEz0G7b5E6uPvpY83Bq48S5&X-Amz-Signature=a7e40736b72d896aa80d6710f79326a8f2688bf9f09e23334ff2d479ef61fe6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4C6YIR7%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBh8vIsqeRrgVbmJ7Vk8fAbOBM69wdWgAiFCYb0rkiO0AiAStt4tsCm0KyxZrk%2BwCvQxLl11V2vSE8OXQZT9qQOUsCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtSlWj45v08kdYGBDKtwD7RN0fF5MeIFAMd%2FuZ4Rw1JNEE%2FhX0qq7qhgD8exSw%2F2fp%2Fij3HvDZsJJTCesIbvgQ5KuUyFTEYgDWq%2FelBrduNiPdpPAHv64ITcivSGgytDopxflEJ4r%2Ftlfq6r3OBCeIqjQcqtu8%2FDOQbZOMRP%2FtdfZWd3Xaruqo%2FqLVwpBFFRvml%2BwwEQUfnGUdsUQmKMCvUt0fHj5UatPS3MtsJ6oFhPpgdRY06RZJ6Z61rDXINJt3vydLZFGFdjEL3z3OtuelvYuRg4NIyI1sJA9kwG6MQFNWeX5fJUoNr6xk%2Foo1VvonDWz3v57g8aiuP4USnXjCM2vWRXceklBNaBO1Dviz2Fc8yiMpLe3pYuJOd8gKCl11G%2FlC4EafszPnHq6dtmwN9qhsolln5e3B1%2BmBR5y4SX4H%2Fk5S6fqrbefjjT%2Fu8Hiz2Te9ZBYgmTHOwtyDw9BO5tBayWajBj3gb0G4iGKr%2B1AqSNFLXtA3g04hWM421sla5T7EqAAd7txnQ8BqvsYN6Z0%2FpUgnxDCB46dRJXFqJTcMaYVuNnfVpnGnnVP6GkVMPpAAx8PLtx%2BP2gR4WTYhVsG%2FnCsIR6H15qmrfQNCmKIRTQY6yMEly0cb%2FuS4tEsEJo6ezYXKih3q5cwzZDGxwY6pgEFnVb3tjzmSswtjVvp%2F83SeJTydz1XQiDZBBtBNaxBmZi01zwdm1kJpBcCTwwWPWJZIpYv4m6DTUEb4YQEDgCDwqtu7%2FAehVoVce7nAR5vZqi%2FIfhm%2Bl1gE6IYS49C5hGshIqneMtOCO4SI6euBQupLknMNbAD8mX1v%2BeSV4rDUMMBklgLnW0txZw1T9fpe2ZZnsEN3QEz0G7b5E6uPvpY83Bq48S5&X-Amz-Signature=65af7c32b2ba95aaa26ffb60e7210ee1b6a9f72f8401d515527e611d658e46bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4C6YIR7%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBh8vIsqeRrgVbmJ7Vk8fAbOBM69wdWgAiFCYb0rkiO0AiAStt4tsCm0KyxZrk%2BwCvQxLl11V2vSE8OXQZT9qQOUsCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtSlWj45v08kdYGBDKtwD7RN0fF5MeIFAMd%2FuZ4Rw1JNEE%2FhX0qq7qhgD8exSw%2F2fp%2Fij3HvDZsJJTCesIbvgQ5KuUyFTEYgDWq%2FelBrduNiPdpPAHv64ITcivSGgytDopxflEJ4r%2Ftlfq6r3OBCeIqjQcqtu8%2FDOQbZOMRP%2FtdfZWd3Xaruqo%2FqLVwpBFFRvml%2BwwEQUfnGUdsUQmKMCvUt0fHj5UatPS3MtsJ6oFhPpgdRY06RZJ6Z61rDXINJt3vydLZFGFdjEL3z3OtuelvYuRg4NIyI1sJA9kwG6MQFNWeX5fJUoNr6xk%2Foo1VvonDWz3v57g8aiuP4USnXjCM2vWRXceklBNaBO1Dviz2Fc8yiMpLe3pYuJOd8gKCl11G%2FlC4EafszPnHq6dtmwN9qhsolln5e3B1%2BmBR5y4SX4H%2Fk5S6fqrbefjjT%2Fu8Hiz2Te9ZBYgmTHOwtyDw9BO5tBayWajBj3gb0G4iGKr%2B1AqSNFLXtA3g04hWM421sla5T7EqAAd7txnQ8BqvsYN6Z0%2FpUgnxDCB46dRJXFqJTcMaYVuNnfVpnGnnVP6GkVMPpAAx8PLtx%2BP2gR4WTYhVsG%2FnCsIR6H15qmrfQNCmKIRTQY6yMEly0cb%2FuS4tEsEJo6ezYXKih3q5cwzZDGxwY6pgEFnVb3tjzmSswtjVvp%2F83SeJTydz1XQiDZBBtBNaxBmZi01zwdm1kJpBcCTwwWPWJZIpYv4m6DTUEb4YQEDgCDwqtu7%2FAehVoVce7nAR5vZqi%2FIfhm%2Bl1gE6IYS49C5hGshIqneMtOCO4SI6euBQupLknMNbAD8mX1v%2BeSV4rDUMMBklgLnW0txZw1T9fpe2ZZnsEN3QEz0G7b5E6uPvpY83Bq48S5&X-Amz-Signature=6ad38ef68477e076e46be95fdadec1297dcf912de7fa1524e41ac3f89cc71d41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPJ4N2Q5%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyUcxt%2BiF5nn501cR1VMZ%2FcURV9Dq0%2Bi2eb%2BR3kZ%2BOdAiAvDvxjUu3je9qJ%2F3k62GhcP9lxP%2FUo8GvjF9EYiyPmTiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbk0trZkDsPLRsUyyKtwDOIi2JGOhrlTnnZ3BlQj5pvzXuTOmMKAwOICq9HBHNzU7V5s8AB9vSSPHY74T%2FhA%2Bs5pcWPL%2FwunO0ygCAHt4tBKLiBJbiVQK5VxJK%2BJ0JZ0vYbfFfAUyhNhfTRLa4auWoBn40zNgPtEkPST8aN1a4LHS2b2NlTvKXEGa%2BvilAza1NIZP8vZ5ONMfwPFm0VVtHEOvcFi8L03qOmjM8JwKIRaPYy526qsthCiD%2BoKwKXNNo0EZ2cRfHiLGKAHtiBiGPv2zF5%2Fctr3PlbN%2B5OfjreHWRAv5kgNWky%2FbvqDYpEMzmC3imPQcEm17DSEldApneOTlzzLomU7aSQ1xf%2F8%2BVxeURHWS6AgZpMmKoJ2HPL0fnCF7ADofzgiSNJDFr2jggs9QFf5AWSeJ02rbDM%2BafiHhLJGXWFXrwHnujMX9e44PmmURa3OTB0B38VsgAg1npjQc63aTqjC%2BsiARWH8mTTrjzyRmNb7HOEl8Gj6Et6aFP1gvAghd22ROnAKsUCosqgftJsa6UTOz6NUpZT1vLt1pOXoygLJdqnQBwxY2PMiNslxKAXV7lDJ02t7NjjhWmX%2BiE9QU09nVcUFKyrH7lnrUgXkHVUf3XKiL7MpQC4JKsa%2FhhWSV9vSTJpQwvLPGxwY6pgHoWP5wIv0WayyeUPBo%2BCDmLm96i1zQ%2BVP%2B3jv47I7Mo%2FiKI0lh4L%2BaC22m8VgPcix9WFW3xDDBRUmt45Ep3bGRNQTxdf5zw6lF28CP3i0xCWm%2Be7aiN22OXJt9cf6iJsvfLdIDm9j0BJWwvCqKtSoozLZ%2B9x4lEJtZCBfCyNJaxWWM2URHhxGzDKRI2Mt93LnnhpZ%2FtvgYjnRA2x4MgsL12ynVnkIT&X-Amz-Signature=d212c18cbdf09b5ddd2a77b35d52e7d75b318c2a1f4e1498ae9838112ec1eae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4C6YIR7%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBh8vIsqeRrgVbmJ7Vk8fAbOBM69wdWgAiFCYb0rkiO0AiAStt4tsCm0KyxZrk%2BwCvQxLl11V2vSE8OXQZT9qQOUsCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtSlWj45v08kdYGBDKtwD7RN0fF5MeIFAMd%2FuZ4Rw1JNEE%2FhX0qq7qhgD8exSw%2F2fp%2Fij3HvDZsJJTCesIbvgQ5KuUyFTEYgDWq%2FelBrduNiPdpPAHv64ITcivSGgytDopxflEJ4r%2Ftlfq6r3OBCeIqjQcqtu8%2FDOQbZOMRP%2FtdfZWd3Xaruqo%2FqLVwpBFFRvml%2BwwEQUfnGUdsUQmKMCvUt0fHj5UatPS3MtsJ6oFhPpgdRY06RZJ6Z61rDXINJt3vydLZFGFdjEL3z3OtuelvYuRg4NIyI1sJA9kwG6MQFNWeX5fJUoNr6xk%2Foo1VvonDWz3v57g8aiuP4USnXjCM2vWRXceklBNaBO1Dviz2Fc8yiMpLe3pYuJOd8gKCl11G%2FlC4EafszPnHq6dtmwN9qhsolln5e3B1%2BmBR5y4SX4H%2Fk5S6fqrbefjjT%2Fu8Hiz2Te9ZBYgmTHOwtyDw9BO5tBayWajBj3gb0G4iGKr%2B1AqSNFLXtA3g04hWM421sla5T7EqAAd7txnQ8BqvsYN6Z0%2FpUgnxDCB46dRJXFqJTcMaYVuNnfVpnGnnVP6GkVMPpAAx8PLtx%2BP2gR4WTYhVsG%2FnCsIR6H15qmrfQNCmKIRTQY6yMEly0cb%2FuS4tEsEJo6ezYXKih3q5cwzZDGxwY6pgEFnVb3tjzmSswtjVvp%2F83SeJTydz1XQiDZBBtBNaxBmZi01zwdm1kJpBcCTwwWPWJZIpYv4m6DTUEb4YQEDgCDwqtu7%2FAehVoVce7nAR5vZqi%2FIfhm%2Bl1gE6IYS49C5hGshIqneMtOCO4SI6euBQupLknMNbAD8mX1v%2BeSV4rDUMMBklgLnW0txZw1T9fpe2ZZnsEN3QEz0G7b5E6uPvpY83Bq48S5&X-Amz-Signature=b7b0e93499451526eabafd12866d7c783b33b5424194a1c4ba7fea8b87431880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4C6YIR7%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBh8vIsqeRrgVbmJ7Vk8fAbOBM69wdWgAiFCYb0rkiO0AiAStt4tsCm0KyxZrk%2BwCvQxLl11V2vSE8OXQZT9qQOUsCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtSlWj45v08kdYGBDKtwD7RN0fF5MeIFAMd%2FuZ4Rw1JNEE%2FhX0qq7qhgD8exSw%2F2fp%2Fij3HvDZsJJTCesIbvgQ5KuUyFTEYgDWq%2FelBrduNiPdpPAHv64ITcivSGgytDopxflEJ4r%2Ftlfq6r3OBCeIqjQcqtu8%2FDOQbZOMRP%2FtdfZWd3Xaruqo%2FqLVwpBFFRvml%2BwwEQUfnGUdsUQmKMCvUt0fHj5UatPS3MtsJ6oFhPpgdRY06RZJ6Z61rDXINJt3vydLZFGFdjEL3z3OtuelvYuRg4NIyI1sJA9kwG6MQFNWeX5fJUoNr6xk%2Foo1VvonDWz3v57g8aiuP4USnXjCM2vWRXceklBNaBO1Dviz2Fc8yiMpLe3pYuJOd8gKCl11G%2FlC4EafszPnHq6dtmwN9qhsolln5e3B1%2BmBR5y4SX4H%2Fk5S6fqrbefjjT%2Fu8Hiz2Te9ZBYgmTHOwtyDw9BO5tBayWajBj3gb0G4iGKr%2B1AqSNFLXtA3g04hWM421sla5T7EqAAd7txnQ8BqvsYN6Z0%2FpUgnxDCB46dRJXFqJTcMaYVuNnfVpnGnnVP6GkVMPpAAx8PLtx%2BP2gR4WTYhVsG%2FnCsIR6H15qmrfQNCmKIRTQY6yMEly0cb%2FuS4tEsEJo6ezYXKih3q5cwzZDGxwY6pgEFnVb3tjzmSswtjVvp%2F83SeJTydz1XQiDZBBtBNaxBmZi01zwdm1kJpBcCTwwWPWJZIpYv4m6DTUEb4YQEDgCDwqtu7%2FAehVoVce7nAR5vZqi%2FIfhm%2Bl1gE6IYS49C5hGshIqneMtOCO4SI6euBQupLknMNbAD8mX1v%2BeSV4rDUMMBklgLnW0txZw1T9fpe2ZZnsEN3QEz0G7b5E6uPvpY83Bq48S5&X-Amz-Signature=1507aab141a8367cfa1dc3483eb46dd019ea34d2305e43e4972ad2eac2a1d48b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4C6YIR7%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBh8vIsqeRrgVbmJ7Vk8fAbOBM69wdWgAiFCYb0rkiO0AiAStt4tsCm0KyxZrk%2BwCvQxLl11V2vSE8OXQZT9qQOUsCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtSlWj45v08kdYGBDKtwD7RN0fF5MeIFAMd%2FuZ4Rw1JNEE%2FhX0qq7qhgD8exSw%2F2fp%2Fij3HvDZsJJTCesIbvgQ5KuUyFTEYgDWq%2FelBrduNiPdpPAHv64ITcivSGgytDopxflEJ4r%2Ftlfq6r3OBCeIqjQcqtu8%2FDOQbZOMRP%2FtdfZWd3Xaruqo%2FqLVwpBFFRvml%2BwwEQUfnGUdsUQmKMCvUt0fHj5UatPS3MtsJ6oFhPpgdRY06RZJ6Z61rDXINJt3vydLZFGFdjEL3z3OtuelvYuRg4NIyI1sJA9kwG6MQFNWeX5fJUoNr6xk%2Foo1VvonDWz3v57g8aiuP4USnXjCM2vWRXceklBNaBO1Dviz2Fc8yiMpLe3pYuJOd8gKCl11G%2FlC4EafszPnHq6dtmwN9qhsolln5e3B1%2BmBR5y4SX4H%2Fk5S6fqrbefjjT%2Fu8Hiz2Te9ZBYgmTHOwtyDw9BO5tBayWajBj3gb0G4iGKr%2B1AqSNFLXtA3g04hWM421sla5T7EqAAd7txnQ8BqvsYN6Z0%2FpUgnxDCB46dRJXFqJTcMaYVuNnfVpnGnnVP6GkVMPpAAx8PLtx%2BP2gR4WTYhVsG%2FnCsIR6H15qmrfQNCmKIRTQY6yMEly0cb%2FuS4tEsEJo6ezYXKih3q5cwzZDGxwY6pgEFnVb3tjzmSswtjVvp%2F83SeJTydz1XQiDZBBtBNaxBmZi01zwdm1kJpBcCTwwWPWJZIpYv4m6DTUEb4YQEDgCDwqtu7%2FAehVoVce7nAR5vZqi%2FIfhm%2Bl1gE6IYS49C5hGshIqneMtOCO4SI6euBQupLknMNbAD8mX1v%2BeSV4rDUMMBklgLnW0txZw1T9fpe2ZZnsEN3QEz0G7b5E6uPvpY83Bq48S5&X-Amz-Signature=65af7c32b2ba95aaa26ffb60e7210ee1b6a9f72f8401d515527e611d658e46bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4C6YIR7%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBh8vIsqeRrgVbmJ7Vk8fAbOBM69wdWgAiFCYb0rkiO0AiAStt4tsCm0KyxZrk%2BwCvQxLl11V2vSE8OXQZT9qQOUsCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtSlWj45v08kdYGBDKtwD7RN0fF5MeIFAMd%2FuZ4Rw1JNEE%2FhX0qq7qhgD8exSw%2F2fp%2Fij3HvDZsJJTCesIbvgQ5KuUyFTEYgDWq%2FelBrduNiPdpPAHv64ITcivSGgytDopxflEJ4r%2Ftlfq6r3OBCeIqjQcqtu8%2FDOQbZOMRP%2FtdfZWd3Xaruqo%2FqLVwpBFFRvml%2BwwEQUfnGUdsUQmKMCvUt0fHj5UatPS3MtsJ6oFhPpgdRY06RZJ6Z61rDXINJt3vydLZFGFdjEL3z3OtuelvYuRg4NIyI1sJA9kwG6MQFNWeX5fJUoNr6xk%2Foo1VvonDWz3v57g8aiuP4USnXjCM2vWRXceklBNaBO1Dviz2Fc8yiMpLe3pYuJOd8gKCl11G%2FlC4EafszPnHq6dtmwN9qhsolln5e3B1%2BmBR5y4SX4H%2Fk5S6fqrbefjjT%2Fu8Hiz2Te9ZBYgmTHOwtyDw9BO5tBayWajBj3gb0G4iGKr%2B1AqSNFLXtA3g04hWM421sla5T7EqAAd7txnQ8BqvsYN6Z0%2FpUgnxDCB46dRJXFqJTcMaYVuNnfVpnGnnVP6GkVMPpAAx8PLtx%2BP2gR4WTYhVsG%2FnCsIR6H15qmrfQNCmKIRTQY6yMEly0cb%2FuS4tEsEJo6ezYXKih3q5cwzZDGxwY6pgEFnVb3tjzmSswtjVvp%2F83SeJTydz1XQiDZBBtBNaxBmZi01zwdm1kJpBcCTwwWPWJZIpYv4m6DTUEb4YQEDgCDwqtu7%2FAehVoVce7nAR5vZqi%2FIfhm%2Bl1gE6IYS49C5hGshIqneMtOCO4SI6euBQupLknMNbAD8mX1v%2BeSV4rDUMMBklgLnW0txZw1T9fpe2ZZnsEN3QEz0G7b5E6uPvpY83Bq48S5&X-Amz-Signature=90d5f0a92f8dd3cab4d1a6fbde302010d8434d73c77513b2ff39a6de7a3bded2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4C6YIR7%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBh8vIsqeRrgVbmJ7Vk8fAbOBM69wdWgAiFCYb0rkiO0AiAStt4tsCm0KyxZrk%2BwCvQxLl11V2vSE8OXQZT9qQOUsCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtSlWj45v08kdYGBDKtwD7RN0fF5MeIFAMd%2FuZ4Rw1JNEE%2FhX0qq7qhgD8exSw%2F2fp%2Fij3HvDZsJJTCesIbvgQ5KuUyFTEYgDWq%2FelBrduNiPdpPAHv64ITcivSGgytDopxflEJ4r%2Ftlfq6r3OBCeIqjQcqtu8%2FDOQbZOMRP%2FtdfZWd3Xaruqo%2FqLVwpBFFRvml%2BwwEQUfnGUdsUQmKMCvUt0fHj5UatPS3MtsJ6oFhPpgdRY06RZJ6Z61rDXINJt3vydLZFGFdjEL3z3OtuelvYuRg4NIyI1sJA9kwG6MQFNWeX5fJUoNr6xk%2Foo1VvonDWz3v57g8aiuP4USnXjCM2vWRXceklBNaBO1Dviz2Fc8yiMpLe3pYuJOd8gKCl11G%2FlC4EafszPnHq6dtmwN9qhsolln5e3B1%2BmBR5y4SX4H%2Fk5S6fqrbefjjT%2Fu8Hiz2Te9ZBYgmTHOwtyDw9BO5tBayWajBj3gb0G4iGKr%2B1AqSNFLXtA3g04hWM421sla5T7EqAAd7txnQ8BqvsYN6Z0%2FpUgnxDCB46dRJXFqJTcMaYVuNnfVpnGnnVP6GkVMPpAAx8PLtx%2BP2gR4WTYhVsG%2FnCsIR6H15qmrfQNCmKIRTQY6yMEly0cb%2FuS4tEsEJo6ezYXKih3q5cwzZDGxwY6pgEFnVb3tjzmSswtjVvp%2F83SeJTydz1XQiDZBBtBNaxBmZi01zwdm1kJpBcCTwwWPWJZIpYv4m6DTUEb4YQEDgCDwqtu7%2FAehVoVce7nAR5vZqi%2FIfhm%2Bl1gE6IYS49C5hGshIqneMtOCO4SI6euBQupLknMNbAD8mX1v%2BeSV4rDUMMBklgLnW0txZw1T9fpe2ZZnsEN3QEz0G7b5E6uPvpY83Bq48S5&X-Amz-Signature=f2287f95140037299f38ad7aa014d10d4e0b32491e37f145d3945808c23b6e82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4C6YIR7%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBh8vIsqeRrgVbmJ7Vk8fAbOBM69wdWgAiFCYb0rkiO0AiAStt4tsCm0KyxZrk%2BwCvQxLl11V2vSE8OXQZT9qQOUsCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtSlWj45v08kdYGBDKtwD7RN0fF5MeIFAMd%2FuZ4Rw1JNEE%2FhX0qq7qhgD8exSw%2F2fp%2Fij3HvDZsJJTCesIbvgQ5KuUyFTEYgDWq%2FelBrduNiPdpPAHv64ITcivSGgytDopxflEJ4r%2Ftlfq6r3OBCeIqjQcqtu8%2FDOQbZOMRP%2FtdfZWd3Xaruqo%2FqLVwpBFFRvml%2BwwEQUfnGUdsUQmKMCvUt0fHj5UatPS3MtsJ6oFhPpgdRY06RZJ6Z61rDXINJt3vydLZFGFdjEL3z3OtuelvYuRg4NIyI1sJA9kwG6MQFNWeX5fJUoNr6xk%2Foo1VvonDWz3v57g8aiuP4USnXjCM2vWRXceklBNaBO1Dviz2Fc8yiMpLe3pYuJOd8gKCl11G%2FlC4EafszPnHq6dtmwN9qhsolln5e3B1%2BmBR5y4SX4H%2Fk5S6fqrbefjjT%2Fu8Hiz2Te9ZBYgmTHOwtyDw9BO5tBayWajBj3gb0G4iGKr%2B1AqSNFLXtA3g04hWM421sla5T7EqAAd7txnQ8BqvsYN6Z0%2FpUgnxDCB46dRJXFqJTcMaYVuNnfVpnGnnVP6GkVMPpAAx8PLtx%2BP2gR4WTYhVsG%2FnCsIR6H15qmrfQNCmKIRTQY6yMEly0cb%2FuS4tEsEJo6ezYXKih3q5cwzZDGxwY6pgEFnVb3tjzmSswtjVvp%2F83SeJTydz1XQiDZBBtBNaxBmZi01zwdm1kJpBcCTwwWPWJZIpYv4m6DTUEb4YQEDgCDwqtu7%2FAehVoVce7nAR5vZqi%2FIfhm%2Bl1gE6IYS49C5hGshIqneMtOCO4SI6euBQupLknMNbAD8mX1v%2BeSV4rDUMMBklgLnW0txZw1T9fpe2ZZnsEN3QEz0G7b5E6uPvpY83Bq48S5&X-Amz-Signature=f485d3b76d85d07a20126184a5c7e077d1548db02cc786db5f32d8780bdaa911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


