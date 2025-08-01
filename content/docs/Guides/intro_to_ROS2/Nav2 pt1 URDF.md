---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-01T02:02:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-01T02:02:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PFJKFLD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfOx5lgFaPfOHoBS2oT7h%2FcLH9lF7TNC9Gt8kzKXljWwIgCEJXZh9jNGhCQK8CZ55KoGi2jqwYHjBJDayU6x4uNdwqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2F5JvEu15D2IgbQ%2ByrcA0ODwSbYbzgl25NxckdtFNLXQWDiQZsdymvEP8eF2H2IQ7Jgk45uMR7tKPF9vpv0cQy%2BLtOqNy9x%2F4E3QSlixFt69pToXY4cYBfdRjzPhVy1AWWw2oVcOflkkCyCheS2QKUIgsA3xwbtj670OupYVdjmgOmurNXOsHjJ0ZTN4NjY0eI9kh9Qu%2BoE99XZnvIb34X%2FOMjCSs189u1iQssJqvVz0a7vPcqlHGFq9ysJvIXy4YrM%2Fm0ONzGjK7xTCUMeqA0YUcZEsVy1Amb0kerN%2Bw9Gqa2IilnVrFEnxePa%2F4gl0dFVyeRMw%2FgP3Xs%2FtibnRkkMbesZADMhDE40cDhqiH3C5loM%2FoTVViTn5Tkmw4QyQEIisnOkqSYcP1cID7lnEJVxASzuUDeuuvww0LjEgNO%2FAzIV%2FPKXHUTu4W6SyZvRezlDfZnsaEiqFJa1OMoq5kxagGMq2W2k7aYiTbzpj34m%2FJBuDEe%2F9BRtU6Fvcfhd2vZ7aPVyZ2gHzMk70y2sGQnnAzyS8EzU3Zs8LthAXZcichfFPSGWfT%2BH1ZR2ch2QTo6fLutNq60Et37Pxt7YLDc9nGCKgy5KHIr%2ByhGBgCfDXgxe%2BVCtPXhRAIPxqqJee7oN%2Bvvbf0Ot2cHUML70sMQGOqUB%2BAT7EZUcUhBZtu%2FW2OLNLPtEkQYgraa0B2fc2X%2F8jhKpuztbCXdOI9EavFCAC1z0CDUm6xfBuKNf7%2Bc%2FEglzD1EYUXXy6d%2FWpODifnlT2MeOL2fPNGioOPNE2POdSJL6Mflio%2BFPUhtDfBeKbaE74ShNHHdH4O%2FcCB7U4evYvFkkX%2BzJOgRIWutxMuRvy8Sg8ZFZMHprX4CkGbf8J0jhLzBiaZhy&X-Amz-Signature=8bfa4df2827d4c466ce26ac79bb3491870aef03c263ebbf6057566928b022875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PFJKFLD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfOx5lgFaPfOHoBS2oT7h%2FcLH9lF7TNC9Gt8kzKXljWwIgCEJXZh9jNGhCQK8CZ55KoGi2jqwYHjBJDayU6x4uNdwqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2F5JvEu15D2IgbQ%2ByrcA0ODwSbYbzgl25NxckdtFNLXQWDiQZsdymvEP8eF2H2IQ7Jgk45uMR7tKPF9vpv0cQy%2BLtOqNy9x%2F4E3QSlixFt69pToXY4cYBfdRjzPhVy1AWWw2oVcOflkkCyCheS2QKUIgsA3xwbtj670OupYVdjmgOmurNXOsHjJ0ZTN4NjY0eI9kh9Qu%2BoE99XZnvIb34X%2FOMjCSs189u1iQssJqvVz0a7vPcqlHGFq9ysJvIXy4YrM%2Fm0ONzGjK7xTCUMeqA0YUcZEsVy1Amb0kerN%2Bw9Gqa2IilnVrFEnxePa%2F4gl0dFVyeRMw%2FgP3Xs%2FtibnRkkMbesZADMhDE40cDhqiH3C5loM%2FoTVViTn5Tkmw4QyQEIisnOkqSYcP1cID7lnEJVxASzuUDeuuvww0LjEgNO%2FAzIV%2FPKXHUTu4W6SyZvRezlDfZnsaEiqFJa1OMoq5kxagGMq2W2k7aYiTbzpj34m%2FJBuDEe%2F9BRtU6Fvcfhd2vZ7aPVyZ2gHzMk70y2sGQnnAzyS8EzU3Zs8LthAXZcichfFPSGWfT%2BH1ZR2ch2QTo6fLutNq60Et37Pxt7YLDc9nGCKgy5KHIr%2ByhGBgCfDXgxe%2BVCtPXhRAIPxqqJee7oN%2Bvvbf0Ot2cHUML70sMQGOqUB%2BAT7EZUcUhBZtu%2FW2OLNLPtEkQYgraa0B2fc2X%2F8jhKpuztbCXdOI9EavFCAC1z0CDUm6xfBuKNf7%2Bc%2FEglzD1EYUXXy6d%2FWpODifnlT2MeOL2fPNGioOPNE2POdSJL6Mflio%2BFPUhtDfBeKbaE74ShNHHdH4O%2FcCB7U4evYvFkkX%2BzJOgRIWutxMuRvy8Sg8ZFZMHprX4CkGbf8J0jhLzBiaZhy&X-Amz-Signature=d092fd2423d7dfd665e3d4de8d2c6b7fd462479da155b377d2f5a2811af161ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PFJKFLD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfOx5lgFaPfOHoBS2oT7h%2FcLH9lF7TNC9Gt8kzKXljWwIgCEJXZh9jNGhCQK8CZ55KoGi2jqwYHjBJDayU6x4uNdwqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2F5JvEu15D2IgbQ%2ByrcA0ODwSbYbzgl25NxckdtFNLXQWDiQZsdymvEP8eF2H2IQ7Jgk45uMR7tKPF9vpv0cQy%2BLtOqNy9x%2F4E3QSlixFt69pToXY4cYBfdRjzPhVy1AWWw2oVcOflkkCyCheS2QKUIgsA3xwbtj670OupYVdjmgOmurNXOsHjJ0ZTN4NjY0eI9kh9Qu%2BoE99XZnvIb34X%2FOMjCSs189u1iQssJqvVz0a7vPcqlHGFq9ysJvIXy4YrM%2Fm0ONzGjK7xTCUMeqA0YUcZEsVy1Amb0kerN%2Bw9Gqa2IilnVrFEnxePa%2F4gl0dFVyeRMw%2FgP3Xs%2FtibnRkkMbesZADMhDE40cDhqiH3C5loM%2FoTVViTn5Tkmw4QyQEIisnOkqSYcP1cID7lnEJVxASzuUDeuuvww0LjEgNO%2FAzIV%2FPKXHUTu4W6SyZvRezlDfZnsaEiqFJa1OMoq5kxagGMq2W2k7aYiTbzpj34m%2FJBuDEe%2F9BRtU6Fvcfhd2vZ7aPVyZ2gHzMk70y2sGQnnAzyS8EzU3Zs8LthAXZcichfFPSGWfT%2BH1ZR2ch2QTo6fLutNq60Et37Pxt7YLDc9nGCKgy5KHIr%2ByhGBgCfDXgxe%2BVCtPXhRAIPxqqJee7oN%2Bvvbf0Ot2cHUML70sMQGOqUB%2BAT7EZUcUhBZtu%2FW2OLNLPtEkQYgraa0B2fc2X%2F8jhKpuztbCXdOI9EavFCAC1z0CDUm6xfBuKNf7%2Bc%2FEglzD1EYUXXy6d%2FWpODifnlT2MeOL2fPNGioOPNE2POdSJL6Mflio%2BFPUhtDfBeKbaE74ShNHHdH4O%2FcCB7U4evYvFkkX%2BzJOgRIWutxMuRvy8Sg8ZFZMHprX4CkGbf8J0jhLzBiaZhy&X-Amz-Signature=b4a33af285d5c2beffde4d29eb5934977d5c270ba58f822ca71e02e472602dfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PFJKFLD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfOx5lgFaPfOHoBS2oT7h%2FcLH9lF7TNC9Gt8kzKXljWwIgCEJXZh9jNGhCQK8CZ55KoGi2jqwYHjBJDayU6x4uNdwqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2F5JvEu15D2IgbQ%2ByrcA0ODwSbYbzgl25NxckdtFNLXQWDiQZsdymvEP8eF2H2IQ7Jgk45uMR7tKPF9vpv0cQy%2BLtOqNy9x%2F4E3QSlixFt69pToXY4cYBfdRjzPhVy1AWWw2oVcOflkkCyCheS2QKUIgsA3xwbtj670OupYVdjmgOmurNXOsHjJ0ZTN4NjY0eI9kh9Qu%2BoE99XZnvIb34X%2FOMjCSs189u1iQssJqvVz0a7vPcqlHGFq9ysJvIXy4YrM%2Fm0ONzGjK7xTCUMeqA0YUcZEsVy1Amb0kerN%2Bw9Gqa2IilnVrFEnxePa%2F4gl0dFVyeRMw%2FgP3Xs%2FtibnRkkMbesZADMhDE40cDhqiH3C5loM%2FoTVViTn5Tkmw4QyQEIisnOkqSYcP1cID7lnEJVxASzuUDeuuvww0LjEgNO%2FAzIV%2FPKXHUTu4W6SyZvRezlDfZnsaEiqFJa1OMoq5kxagGMq2W2k7aYiTbzpj34m%2FJBuDEe%2F9BRtU6Fvcfhd2vZ7aPVyZ2gHzMk70y2sGQnnAzyS8EzU3Zs8LthAXZcichfFPSGWfT%2BH1ZR2ch2QTo6fLutNq60Et37Pxt7YLDc9nGCKgy5KHIr%2ByhGBgCfDXgxe%2BVCtPXhRAIPxqqJee7oN%2Bvvbf0Ot2cHUML70sMQGOqUB%2BAT7EZUcUhBZtu%2FW2OLNLPtEkQYgraa0B2fc2X%2F8jhKpuztbCXdOI9EavFCAC1z0CDUm6xfBuKNf7%2Bc%2FEglzD1EYUXXy6d%2FWpODifnlT2MeOL2fPNGioOPNE2POdSJL6Mflio%2BFPUhtDfBeKbaE74ShNHHdH4O%2FcCB7U4evYvFkkX%2BzJOgRIWutxMuRvy8Sg8ZFZMHprX4CkGbf8J0jhLzBiaZhy&X-Amz-Signature=1877b5bc2f42d2f685c7178e6605226c13e2343ae6771a2b2fbafafccc0fec8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PFJKFLD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfOx5lgFaPfOHoBS2oT7h%2FcLH9lF7TNC9Gt8kzKXljWwIgCEJXZh9jNGhCQK8CZ55KoGi2jqwYHjBJDayU6x4uNdwqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2F5JvEu15D2IgbQ%2ByrcA0ODwSbYbzgl25NxckdtFNLXQWDiQZsdymvEP8eF2H2IQ7Jgk45uMR7tKPF9vpv0cQy%2BLtOqNy9x%2F4E3QSlixFt69pToXY4cYBfdRjzPhVy1AWWw2oVcOflkkCyCheS2QKUIgsA3xwbtj670OupYVdjmgOmurNXOsHjJ0ZTN4NjY0eI9kh9Qu%2BoE99XZnvIb34X%2FOMjCSs189u1iQssJqvVz0a7vPcqlHGFq9ysJvIXy4YrM%2Fm0ONzGjK7xTCUMeqA0YUcZEsVy1Amb0kerN%2Bw9Gqa2IilnVrFEnxePa%2F4gl0dFVyeRMw%2FgP3Xs%2FtibnRkkMbesZADMhDE40cDhqiH3C5loM%2FoTVViTn5Tkmw4QyQEIisnOkqSYcP1cID7lnEJVxASzuUDeuuvww0LjEgNO%2FAzIV%2FPKXHUTu4W6SyZvRezlDfZnsaEiqFJa1OMoq5kxagGMq2W2k7aYiTbzpj34m%2FJBuDEe%2F9BRtU6Fvcfhd2vZ7aPVyZ2gHzMk70y2sGQnnAzyS8EzU3Zs8LthAXZcichfFPSGWfT%2BH1ZR2ch2QTo6fLutNq60Et37Pxt7YLDc9nGCKgy5KHIr%2ByhGBgCfDXgxe%2BVCtPXhRAIPxqqJee7oN%2Bvvbf0Ot2cHUML70sMQGOqUB%2BAT7EZUcUhBZtu%2FW2OLNLPtEkQYgraa0B2fc2X%2F8jhKpuztbCXdOI9EavFCAC1z0CDUm6xfBuKNf7%2Bc%2FEglzD1EYUXXy6d%2FWpODifnlT2MeOL2fPNGioOPNE2POdSJL6Mflio%2BFPUhtDfBeKbaE74ShNHHdH4O%2FcCB7U4evYvFkkX%2BzJOgRIWutxMuRvy8Sg8ZFZMHprX4CkGbf8J0jhLzBiaZhy&X-Amz-Signature=4d6e24177e98227b6a2951a1c56ad7985f8c10c58e5f61d86d1c37cdda1bfdc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PFJKFLD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfOx5lgFaPfOHoBS2oT7h%2FcLH9lF7TNC9Gt8kzKXljWwIgCEJXZh9jNGhCQK8CZ55KoGi2jqwYHjBJDayU6x4uNdwqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2F5JvEu15D2IgbQ%2ByrcA0ODwSbYbzgl25NxckdtFNLXQWDiQZsdymvEP8eF2H2IQ7Jgk45uMR7tKPF9vpv0cQy%2BLtOqNy9x%2F4E3QSlixFt69pToXY4cYBfdRjzPhVy1AWWw2oVcOflkkCyCheS2QKUIgsA3xwbtj670OupYVdjmgOmurNXOsHjJ0ZTN4NjY0eI9kh9Qu%2BoE99XZnvIb34X%2FOMjCSs189u1iQssJqvVz0a7vPcqlHGFq9ysJvIXy4YrM%2Fm0ONzGjK7xTCUMeqA0YUcZEsVy1Amb0kerN%2Bw9Gqa2IilnVrFEnxePa%2F4gl0dFVyeRMw%2FgP3Xs%2FtibnRkkMbesZADMhDE40cDhqiH3C5loM%2FoTVViTn5Tkmw4QyQEIisnOkqSYcP1cID7lnEJVxASzuUDeuuvww0LjEgNO%2FAzIV%2FPKXHUTu4W6SyZvRezlDfZnsaEiqFJa1OMoq5kxagGMq2W2k7aYiTbzpj34m%2FJBuDEe%2F9BRtU6Fvcfhd2vZ7aPVyZ2gHzMk70y2sGQnnAzyS8EzU3Zs8LthAXZcichfFPSGWfT%2BH1ZR2ch2QTo6fLutNq60Et37Pxt7YLDc9nGCKgy5KHIr%2ByhGBgCfDXgxe%2BVCtPXhRAIPxqqJee7oN%2Bvvbf0Ot2cHUML70sMQGOqUB%2BAT7EZUcUhBZtu%2FW2OLNLPtEkQYgraa0B2fc2X%2F8jhKpuztbCXdOI9EavFCAC1z0CDUm6xfBuKNf7%2Bc%2FEglzD1EYUXXy6d%2FWpODifnlT2MeOL2fPNGioOPNE2POdSJL6Mflio%2BFPUhtDfBeKbaE74ShNHHdH4O%2FcCB7U4evYvFkkX%2BzJOgRIWutxMuRvy8Sg8ZFZMHprX4CkGbf8J0jhLzBiaZhy&X-Amz-Signature=6898131ad251d1787eb965f02e5ef21da73fc07e3465e47f0b45ab7a59ac6bd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PFJKFLD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfOx5lgFaPfOHoBS2oT7h%2FcLH9lF7TNC9Gt8kzKXljWwIgCEJXZh9jNGhCQK8CZ55KoGi2jqwYHjBJDayU6x4uNdwqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2F5JvEu15D2IgbQ%2ByrcA0ODwSbYbzgl25NxckdtFNLXQWDiQZsdymvEP8eF2H2IQ7Jgk45uMR7tKPF9vpv0cQy%2BLtOqNy9x%2F4E3QSlixFt69pToXY4cYBfdRjzPhVy1AWWw2oVcOflkkCyCheS2QKUIgsA3xwbtj670OupYVdjmgOmurNXOsHjJ0ZTN4NjY0eI9kh9Qu%2BoE99XZnvIb34X%2FOMjCSs189u1iQssJqvVz0a7vPcqlHGFq9ysJvIXy4YrM%2Fm0ONzGjK7xTCUMeqA0YUcZEsVy1Amb0kerN%2Bw9Gqa2IilnVrFEnxePa%2F4gl0dFVyeRMw%2FgP3Xs%2FtibnRkkMbesZADMhDE40cDhqiH3C5loM%2FoTVViTn5Tkmw4QyQEIisnOkqSYcP1cID7lnEJVxASzuUDeuuvww0LjEgNO%2FAzIV%2FPKXHUTu4W6SyZvRezlDfZnsaEiqFJa1OMoq5kxagGMq2W2k7aYiTbzpj34m%2FJBuDEe%2F9BRtU6Fvcfhd2vZ7aPVyZ2gHzMk70y2sGQnnAzyS8EzU3Zs8LthAXZcichfFPSGWfT%2BH1ZR2ch2QTo6fLutNq60Et37Pxt7YLDc9nGCKgy5KHIr%2ByhGBgCfDXgxe%2BVCtPXhRAIPxqqJee7oN%2Bvvbf0Ot2cHUML70sMQGOqUB%2BAT7EZUcUhBZtu%2FW2OLNLPtEkQYgraa0B2fc2X%2F8jhKpuztbCXdOI9EavFCAC1z0CDUm6xfBuKNf7%2Bc%2FEglzD1EYUXXy6d%2FWpODifnlT2MeOL2fPNGioOPNE2POdSJL6Mflio%2BFPUhtDfBeKbaE74ShNHHdH4O%2FcCB7U4evYvFkkX%2BzJOgRIWutxMuRvy8Sg8ZFZMHprX4CkGbf8J0jhLzBiaZhy&X-Amz-Signature=0cfd2e8f0cab27c9d53e382c0d2bcf4d778ddf9ed94226c9e4633372ecd17f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PFJKFLD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfOx5lgFaPfOHoBS2oT7h%2FcLH9lF7TNC9Gt8kzKXljWwIgCEJXZh9jNGhCQK8CZ55KoGi2jqwYHjBJDayU6x4uNdwqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2F5JvEu15D2IgbQ%2ByrcA0ODwSbYbzgl25NxckdtFNLXQWDiQZsdymvEP8eF2H2IQ7Jgk45uMR7tKPF9vpv0cQy%2BLtOqNy9x%2F4E3QSlixFt69pToXY4cYBfdRjzPhVy1AWWw2oVcOflkkCyCheS2QKUIgsA3xwbtj670OupYVdjmgOmurNXOsHjJ0ZTN4NjY0eI9kh9Qu%2BoE99XZnvIb34X%2FOMjCSs189u1iQssJqvVz0a7vPcqlHGFq9ysJvIXy4YrM%2Fm0ONzGjK7xTCUMeqA0YUcZEsVy1Amb0kerN%2Bw9Gqa2IilnVrFEnxePa%2F4gl0dFVyeRMw%2FgP3Xs%2FtibnRkkMbesZADMhDE40cDhqiH3C5loM%2FoTVViTn5Tkmw4QyQEIisnOkqSYcP1cID7lnEJVxASzuUDeuuvww0LjEgNO%2FAzIV%2FPKXHUTu4W6SyZvRezlDfZnsaEiqFJa1OMoq5kxagGMq2W2k7aYiTbzpj34m%2FJBuDEe%2F9BRtU6Fvcfhd2vZ7aPVyZ2gHzMk70y2sGQnnAzyS8EzU3Zs8LthAXZcichfFPSGWfT%2BH1ZR2ch2QTo6fLutNq60Et37Pxt7YLDc9nGCKgy5KHIr%2ByhGBgCfDXgxe%2BVCtPXhRAIPxqqJee7oN%2Bvvbf0Ot2cHUML70sMQGOqUB%2BAT7EZUcUhBZtu%2FW2OLNLPtEkQYgraa0B2fc2X%2F8jhKpuztbCXdOI9EavFCAC1z0CDUm6xfBuKNf7%2Bc%2FEglzD1EYUXXy6d%2FWpODifnlT2MeOL2fPNGioOPNE2POdSJL6Mflio%2BFPUhtDfBeKbaE74ShNHHdH4O%2FcCB7U4evYvFkkX%2BzJOgRIWutxMuRvy8Sg8ZFZMHprX4CkGbf8J0jhLzBiaZhy&X-Amz-Signature=78f8e93225016285d37260cf6b6f379e6e09e576dde1a92dd1fafd664ec83607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PFJKFLD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfOx5lgFaPfOHoBS2oT7h%2FcLH9lF7TNC9Gt8kzKXljWwIgCEJXZh9jNGhCQK8CZ55KoGi2jqwYHjBJDayU6x4uNdwqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2F5JvEu15D2IgbQ%2ByrcA0ODwSbYbzgl25NxckdtFNLXQWDiQZsdymvEP8eF2H2IQ7Jgk45uMR7tKPF9vpv0cQy%2BLtOqNy9x%2F4E3QSlixFt69pToXY4cYBfdRjzPhVy1AWWw2oVcOflkkCyCheS2QKUIgsA3xwbtj670OupYVdjmgOmurNXOsHjJ0ZTN4NjY0eI9kh9Qu%2BoE99XZnvIb34X%2FOMjCSs189u1iQssJqvVz0a7vPcqlHGFq9ysJvIXy4YrM%2Fm0ONzGjK7xTCUMeqA0YUcZEsVy1Amb0kerN%2Bw9Gqa2IilnVrFEnxePa%2F4gl0dFVyeRMw%2FgP3Xs%2FtibnRkkMbesZADMhDE40cDhqiH3C5loM%2FoTVViTn5Tkmw4QyQEIisnOkqSYcP1cID7lnEJVxASzuUDeuuvww0LjEgNO%2FAzIV%2FPKXHUTu4W6SyZvRezlDfZnsaEiqFJa1OMoq5kxagGMq2W2k7aYiTbzpj34m%2FJBuDEe%2F9BRtU6Fvcfhd2vZ7aPVyZ2gHzMk70y2sGQnnAzyS8EzU3Zs8LthAXZcichfFPSGWfT%2BH1ZR2ch2QTo6fLutNq60Et37Pxt7YLDc9nGCKgy5KHIr%2ByhGBgCfDXgxe%2BVCtPXhRAIPxqqJee7oN%2Bvvbf0Ot2cHUML70sMQGOqUB%2BAT7EZUcUhBZtu%2FW2OLNLPtEkQYgraa0B2fc2X%2F8jhKpuztbCXdOI9EavFCAC1z0CDUm6xfBuKNf7%2Bc%2FEglzD1EYUXXy6d%2FWpODifnlT2MeOL2fPNGioOPNE2POdSJL6Mflio%2BFPUhtDfBeKbaE74ShNHHdH4O%2FcCB7U4evYvFkkX%2BzJOgRIWutxMuRvy8Sg8ZFZMHprX4CkGbf8J0jhLzBiaZhy&X-Amz-Signature=ad8ced8e567141a48197c33fc1649ae3613b748a8df4d41a439713b1c86730f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PFJKFLD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfOx5lgFaPfOHoBS2oT7h%2FcLH9lF7TNC9Gt8kzKXljWwIgCEJXZh9jNGhCQK8CZ55KoGi2jqwYHjBJDayU6x4uNdwqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2F5JvEu15D2IgbQ%2ByrcA0ODwSbYbzgl25NxckdtFNLXQWDiQZsdymvEP8eF2H2IQ7Jgk45uMR7tKPF9vpv0cQy%2BLtOqNy9x%2F4E3QSlixFt69pToXY4cYBfdRjzPhVy1AWWw2oVcOflkkCyCheS2QKUIgsA3xwbtj670OupYVdjmgOmurNXOsHjJ0ZTN4NjY0eI9kh9Qu%2BoE99XZnvIb34X%2FOMjCSs189u1iQssJqvVz0a7vPcqlHGFq9ysJvIXy4YrM%2Fm0ONzGjK7xTCUMeqA0YUcZEsVy1Amb0kerN%2Bw9Gqa2IilnVrFEnxePa%2F4gl0dFVyeRMw%2FgP3Xs%2FtibnRkkMbesZADMhDE40cDhqiH3C5loM%2FoTVViTn5Tkmw4QyQEIisnOkqSYcP1cID7lnEJVxASzuUDeuuvww0LjEgNO%2FAzIV%2FPKXHUTu4W6SyZvRezlDfZnsaEiqFJa1OMoq5kxagGMq2W2k7aYiTbzpj34m%2FJBuDEe%2F9BRtU6Fvcfhd2vZ7aPVyZ2gHzMk70y2sGQnnAzyS8EzU3Zs8LthAXZcichfFPSGWfT%2BH1ZR2ch2QTo6fLutNq60Et37Pxt7YLDc9nGCKgy5KHIr%2ByhGBgCfDXgxe%2BVCtPXhRAIPxqqJee7oN%2Bvvbf0Ot2cHUML70sMQGOqUB%2BAT7EZUcUhBZtu%2FW2OLNLPtEkQYgraa0B2fc2X%2F8jhKpuztbCXdOI9EavFCAC1z0CDUm6xfBuKNf7%2Bc%2FEglzD1EYUXXy6d%2FWpODifnlT2MeOL2fPNGioOPNE2POdSJL6Mflio%2BFPUhtDfBeKbaE74ShNHHdH4O%2FcCB7U4evYvFkkX%2BzJOgRIWutxMuRvy8Sg8ZFZMHprX4CkGbf8J0jhLzBiaZhy&X-Amz-Signature=053e06634c13e6ccf2c26847bf306681ce516e7184097798e2b83e23375e480b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PFJKFLD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfOx5lgFaPfOHoBS2oT7h%2FcLH9lF7TNC9Gt8kzKXljWwIgCEJXZh9jNGhCQK8CZ55KoGi2jqwYHjBJDayU6x4uNdwqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2F5JvEu15D2IgbQ%2ByrcA0ODwSbYbzgl25NxckdtFNLXQWDiQZsdymvEP8eF2H2IQ7Jgk45uMR7tKPF9vpv0cQy%2BLtOqNy9x%2F4E3QSlixFt69pToXY4cYBfdRjzPhVy1AWWw2oVcOflkkCyCheS2QKUIgsA3xwbtj670OupYVdjmgOmurNXOsHjJ0ZTN4NjY0eI9kh9Qu%2BoE99XZnvIb34X%2FOMjCSs189u1iQssJqvVz0a7vPcqlHGFq9ysJvIXy4YrM%2Fm0ONzGjK7xTCUMeqA0YUcZEsVy1Amb0kerN%2Bw9Gqa2IilnVrFEnxePa%2F4gl0dFVyeRMw%2FgP3Xs%2FtibnRkkMbesZADMhDE40cDhqiH3C5loM%2FoTVViTn5Tkmw4QyQEIisnOkqSYcP1cID7lnEJVxASzuUDeuuvww0LjEgNO%2FAzIV%2FPKXHUTu4W6SyZvRezlDfZnsaEiqFJa1OMoq5kxagGMq2W2k7aYiTbzpj34m%2FJBuDEe%2F9BRtU6Fvcfhd2vZ7aPVyZ2gHzMk70y2sGQnnAzyS8EzU3Zs8LthAXZcichfFPSGWfT%2BH1ZR2ch2QTo6fLutNq60Et37Pxt7YLDc9nGCKgy5KHIr%2ByhGBgCfDXgxe%2BVCtPXhRAIPxqqJee7oN%2Bvvbf0Ot2cHUML70sMQGOqUB%2BAT7EZUcUhBZtu%2FW2OLNLPtEkQYgraa0B2fc2X%2F8jhKpuztbCXdOI9EavFCAC1z0CDUm6xfBuKNf7%2Bc%2FEglzD1EYUXXy6d%2FWpODifnlT2MeOL2fPNGioOPNE2POdSJL6Mflio%2BFPUhtDfBeKbaE74ShNHHdH4O%2FcCB7U4evYvFkkX%2BzJOgRIWutxMuRvy8Sg8ZFZMHprX4CkGbf8J0jhLzBiaZhy&X-Amz-Signature=4ce719f6e8ab1f944873f760af4c98be67277df67bbd912f71c6dd0a98e8c26a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PFJKFLD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfOx5lgFaPfOHoBS2oT7h%2FcLH9lF7TNC9Gt8kzKXljWwIgCEJXZh9jNGhCQK8CZ55KoGi2jqwYHjBJDayU6x4uNdwqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2F5JvEu15D2IgbQ%2ByrcA0ODwSbYbzgl25NxckdtFNLXQWDiQZsdymvEP8eF2H2IQ7Jgk45uMR7tKPF9vpv0cQy%2BLtOqNy9x%2F4E3QSlixFt69pToXY4cYBfdRjzPhVy1AWWw2oVcOflkkCyCheS2QKUIgsA3xwbtj670OupYVdjmgOmurNXOsHjJ0ZTN4NjY0eI9kh9Qu%2BoE99XZnvIb34X%2FOMjCSs189u1iQssJqvVz0a7vPcqlHGFq9ysJvIXy4YrM%2Fm0ONzGjK7xTCUMeqA0YUcZEsVy1Amb0kerN%2Bw9Gqa2IilnVrFEnxePa%2F4gl0dFVyeRMw%2FgP3Xs%2FtibnRkkMbesZADMhDE40cDhqiH3C5loM%2FoTVViTn5Tkmw4QyQEIisnOkqSYcP1cID7lnEJVxASzuUDeuuvww0LjEgNO%2FAzIV%2FPKXHUTu4W6SyZvRezlDfZnsaEiqFJa1OMoq5kxagGMq2W2k7aYiTbzpj34m%2FJBuDEe%2F9BRtU6Fvcfhd2vZ7aPVyZ2gHzMk70y2sGQnnAzyS8EzU3Zs8LthAXZcichfFPSGWfT%2BH1ZR2ch2QTo6fLutNq60Et37Pxt7YLDc9nGCKgy5KHIr%2ByhGBgCfDXgxe%2BVCtPXhRAIPxqqJee7oN%2Bvvbf0Ot2cHUML70sMQGOqUB%2BAT7EZUcUhBZtu%2FW2OLNLPtEkQYgraa0B2fc2X%2F8jhKpuztbCXdOI9EavFCAC1z0CDUm6xfBuKNf7%2Bc%2FEglzD1EYUXXy6d%2FWpODifnlT2MeOL2fPNGioOPNE2POdSJL6Mflio%2BFPUhtDfBeKbaE74ShNHHdH4O%2FcCB7U4evYvFkkX%2BzJOgRIWutxMuRvy8Sg8ZFZMHprX4CkGbf8J0jhLzBiaZhy&X-Amz-Signature=c73190d32423e68aa127344d98150aa260cd64e4633ef9663f64ce4102bd03a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PFJKFLD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfOx5lgFaPfOHoBS2oT7h%2FcLH9lF7TNC9Gt8kzKXljWwIgCEJXZh9jNGhCQK8CZ55KoGi2jqwYHjBJDayU6x4uNdwqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2F5JvEu15D2IgbQ%2ByrcA0ODwSbYbzgl25NxckdtFNLXQWDiQZsdymvEP8eF2H2IQ7Jgk45uMR7tKPF9vpv0cQy%2BLtOqNy9x%2F4E3QSlixFt69pToXY4cYBfdRjzPhVy1AWWw2oVcOflkkCyCheS2QKUIgsA3xwbtj670OupYVdjmgOmurNXOsHjJ0ZTN4NjY0eI9kh9Qu%2BoE99XZnvIb34X%2FOMjCSs189u1iQssJqvVz0a7vPcqlHGFq9ysJvIXy4YrM%2Fm0ONzGjK7xTCUMeqA0YUcZEsVy1Amb0kerN%2Bw9Gqa2IilnVrFEnxePa%2F4gl0dFVyeRMw%2FgP3Xs%2FtibnRkkMbesZADMhDE40cDhqiH3C5loM%2FoTVViTn5Tkmw4QyQEIisnOkqSYcP1cID7lnEJVxASzuUDeuuvww0LjEgNO%2FAzIV%2FPKXHUTu4W6SyZvRezlDfZnsaEiqFJa1OMoq5kxagGMq2W2k7aYiTbzpj34m%2FJBuDEe%2F9BRtU6Fvcfhd2vZ7aPVyZ2gHzMk70y2sGQnnAzyS8EzU3Zs8LthAXZcichfFPSGWfT%2BH1ZR2ch2QTo6fLutNq60Et37Pxt7YLDc9nGCKgy5KHIr%2ByhGBgCfDXgxe%2BVCtPXhRAIPxqqJee7oN%2Bvvbf0Ot2cHUML70sMQGOqUB%2BAT7EZUcUhBZtu%2FW2OLNLPtEkQYgraa0B2fc2X%2F8jhKpuztbCXdOI9EavFCAC1z0CDUm6xfBuKNf7%2Bc%2FEglzD1EYUXXy6d%2FWpODifnlT2MeOL2fPNGioOPNE2POdSJL6Mflio%2BFPUhtDfBeKbaE74ShNHHdH4O%2FcCB7U4evYvFkkX%2BzJOgRIWutxMuRvy8Sg8ZFZMHprX4CkGbf8J0jhLzBiaZhy&X-Amz-Signature=641f353acc004c4cd84c680880b255ff663767deb8d64bc1f0d93fe454c25723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAKEHZLU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzupiZwz3utxe%2FVKiLKPqGnKaAozichpk7AHvWVHc3dAiBJVwftL1N2cpYdD3pPEmTFC8dxx48IdHgXtOfZtv7KkiqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSpokcxlrAReP1Ha1KtwDO5TvMkxv2HoCstdvRxIc0xUKgufy3N%2FVNL5ej49M12ZVlyC5wuTBL%2BPTDd8zYk13XndaaI726zztW9i1otn1HtcVxfWY8frReZF0rs17NwleHJu951ibjCjZfk7b4tRLKnJmTx2nmCUJr%2Fqp6mqAPD8kyUlY%2BhTQnzJas3TPKkV2iqQ0%2FdbQkBk1CRyiNYKP70I0pMrzSfzHGbyiHj4q7vtA%2Fag4DWDH2ebDGm0WHdpDJMV1uBqhbndEWn97ZHYUv0Vsi6bxhuKNGpkV66yd1YOFx2980Vvex7HkByR0z4aldGDMKuP7eif79XuD7cCxjW4KypwR8Hv07qiICYQNlc8ITtM0UHfB0PS%2BWYkET4QneAHZRmG5zK9tx%2B9ZHPpp7LNohioxHlSM5mS%2FHFqw%2Bsl3CN6YERnCcngCaqzjPRVEHjxCzQfjVMwTl0aJSK%2FOsBP5sOjFv8iV882Z%2BseSY9YdjLypzyBeGT4ttLwoCyqRRF%2Fo79nPWslxFEXjc2di%2FR4vIKj0k2V4EsMr5eicAPRoxkRl%2Bq5RGYPfhVVqBFdyQoHT6rFDzCbd703QMXdOt0k%2BxmOr1hclzm8dbUwtc4sq7VYp7P%2Be9Uz89f5ZB2uGm0npNUNvdpCdwQAwkvSwxAY6pgGU2BhoF581mH62K0fNQxflUUTVPqoW7HCHoD4M5o6cvdntOl49OJDdJ8G5Xq86h7IILpMu4G0Fif6zOrBSjSzalOlsRJFXQcvIOp9t%2B313dFmp8cArdB5UCeXEAQYwu70NHXqW9rSC7FnsLiodkak3EMxS538O%2Fa6a83AltG4OZmbhfUDkR2FtQmmZeOSNr7KENj9Nm%2BJhV00Lq9Nn58S0QS3Jo3%2FY&X-Amz-Signature=9dabb4465b8f6ac1f77738dcf4654817f6cb3cf6d8ee5169a4f8d36a1edb82d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAKEHZLU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzupiZwz3utxe%2FVKiLKPqGnKaAozichpk7AHvWVHc3dAiBJVwftL1N2cpYdD3pPEmTFC8dxx48IdHgXtOfZtv7KkiqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSpokcxlrAReP1Ha1KtwDO5TvMkxv2HoCstdvRxIc0xUKgufy3N%2FVNL5ej49M12ZVlyC5wuTBL%2BPTDd8zYk13XndaaI726zztW9i1otn1HtcVxfWY8frReZF0rs17NwleHJu951ibjCjZfk7b4tRLKnJmTx2nmCUJr%2Fqp6mqAPD8kyUlY%2BhTQnzJas3TPKkV2iqQ0%2FdbQkBk1CRyiNYKP70I0pMrzSfzHGbyiHj4q7vtA%2Fag4DWDH2ebDGm0WHdpDJMV1uBqhbndEWn97ZHYUv0Vsi6bxhuKNGpkV66yd1YOFx2980Vvex7HkByR0z4aldGDMKuP7eif79XuD7cCxjW4KypwR8Hv07qiICYQNlc8ITtM0UHfB0PS%2BWYkET4QneAHZRmG5zK9tx%2B9ZHPpp7LNohioxHlSM5mS%2FHFqw%2Bsl3CN6YERnCcngCaqzjPRVEHjxCzQfjVMwTl0aJSK%2FOsBP5sOjFv8iV882Z%2BseSY9YdjLypzyBeGT4ttLwoCyqRRF%2Fo79nPWslxFEXjc2di%2FR4vIKj0k2V4EsMr5eicAPRoxkRl%2Bq5RGYPfhVVqBFdyQoHT6rFDzCbd703QMXdOt0k%2BxmOr1hclzm8dbUwtc4sq7VYp7P%2Be9Uz89f5ZB2uGm0npNUNvdpCdwQAwkvSwxAY6pgGU2BhoF581mH62K0fNQxflUUTVPqoW7HCHoD4M5o6cvdntOl49OJDdJ8G5Xq86h7IILpMu4G0Fif6zOrBSjSzalOlsRJFXQcvIOp9t%2B313dFmp8cArdB5UCeXEAQYwu70NHXqW9rSC7FnsLiodkak3EMxS538O%2Fa6a83AltG4OZmbhfUDkR2FtQmmZeOSNr7KENj9Nm%2BJhV00Lq9Nn58S0QS3Jo3%2FY&X-Amz-Signature=dbbc2e71617116b5c1057a2fa86a675bf2b9c7f248efe6a3603e74f19e1342dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAKEHZLU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzupiZwz3utxe%2FVKiLKPqGnKaAozichpk7AHvWVHc3dAiBJVwftL1N2cpYdD3pPEmTFC8dxx48IdHgXtOfZtv7KkiqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSpokcxlrAReP1Ha1KtwDO5TvMkxv2HoCstdvRxIc0xUKgufy3N%2FVNL5ej49M12ZVlyC5wuTBL%2BPTDd8zYk13XndaaI726zztW9i1otn1HtcVxfWY8frReZF0rs17NwleHJu951ibjCjZfk7b4tRLKnJmTx2nmCUJr%2Fqp6mqAPD8kyUlY%2BhTQnzJas3TPKkV2iqQ0%2FdbQkBk1CRyiNYKP70I0pMrzSfzHGbyiHj4q7vtA%2Fag4DWDH2ebDGm0WHdpDJMV1uBqhbndEWn97ZHYUv0Vsi6bxhuKNGpkV66yd1YOFx2980Vvex7HkByR0z4aldGDMKuP7eif79XuD7cCxjW4KypwR8Hv07qiICYQNlc8ITtM0UHfB0PS%2BWYkET4QneAHZRmG5zK9tx%2B9ZHPpp7LNohioxHlSM5mS%2FHFqw%2Bsl3CN6YERnCcngCaqzjPRVEHjxCzQfjVMwTl0aJSK%2FOsBP5sOjFv8iV882Z%2BseSY9YdjLypzyBeGT4ttLwoCyqRRF%2Fo79nPWslxFEXjc2di%2FR4vIKj0k2V4EsMr5eicAPRoxkRl%2Bq5RGYPfhVVqBFdyQoHT6rFDzCbd703QMXdOt0k%2BxmOr1hclzm8dbUwtc4sq7VYp7P%2Be9Uz89f5ZB2uGm0npNUNvdpCdwQAwkvSwxAY6pgGU2BhoF581mH62K0fNQxflUUTVPqoW7HCHoD4M5o6cvdntOl49OJDdJ8G5Xq86h7IILpMu4G0Fif6zOrBSjSzalOlsRJFXQcvIOp9t%2B313dFmp8cArdB5UCeXEAQYwu70NHXqW9rSC7FnsLiodkak3EMxS538O%2Fa6a83AltG4OZmbhfUDkR2FtQmmZeOSNr7KENj9Nm%2BJhV00Lq9Nn58S0QS3Jo3%2FY&X-Amz-Signature=52a5d1740a8016e29d9ffd485488c31107f152b4330d68a18400bc3e933cbab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAKEHZLU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzupiZwz3utxe%2FVKiLKPqGnKaAozichpk7AHvWVHc3dAiBJVwftL1N2cpYdD3pPEmTFC8dxx48IdHgXtOfZtv7KkiqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSpokcxlrAReP1Ha1KtwDO5TvMkxv2HoCstdvRxIc0xUKgufy3N%2FVNL5ej49M12ZVlyC5wuTBL%2BPTDd8zYk13XndaaI726zztW9i1otn1HtcVxfWY8frReZF0rs17NwleHJu951ibjCjZfk7b4tRLKnJmTx2nmCUJr%2Fqp6mqAPD8kyUlY%2BhTQnzJas3TPKkV2iqQ0%2FdbQkBk1CRyiNYKP70I0pMrzSfzHGbyiHj4q7vtA%2Fag4DWDH2ebDGm0WHdpDJMV1uBqhbndEWn97ZHYUv0Vsi6bxhuKNGpkV66yd1YOFx2980Vvex7HkByR0z4aldGDMKuP7eif79XuD7cCxjW4KypwR8Hv07qiICYQNlc8ITtM0UHfB0PS%2BWYkET4QneAHZRmG5zK9tx%2B9ZHPpp7LNohioxHlSM5mS%2FHFqw%2Bsl3CN6YERnCcngCaqzjPRVEHjxCzQfjVMwTl0aJSK%2FOsBP5sOjFv8iV882Z%2BseSY9YdjLypzyBeGT4ttLwoCyqRRF%2Fo79nPWslxFEXjc2di%2FR4vIKj0k2V4EsMr5eicAPRoxkRl%2Bq5RGYPfhVVqBFdyQoHT6rFDzCbd703QMXdOt0k%2BxmOr1hclzm8dbUwtc4sq7VYp7P%2Be9Uz89f5ZB2uGm0npNUNvdpCdwQAwkvSwxAY6pgGU2BhoF581mH62K0fNQxflUUTVPqoW7HCHoD4M5o6cvdntOl49OJDdJ8G5Xq86h7IILpMu4G0Fif6zOrBSjSzalOlsRJFXQcvIOp9t%2B313dFmp8cArdB5UCeXEAQYwu70NHXqW9rSC7FnsLiodkak3EMxS538O%2Fa6a83AltG4OZmbhfUDkR2FtQmmZeOSNr7KENj9Nm%2BJhV00Lq9Nn58S0QS3Jo3%2FY&X-Amz-Signature=41c117c036bfe3b65d24455444e2e21f86b6b63f10ef883d875d37d810b5e335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAKEHZLU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzupiZwz3utxe%2FVKiLKPqGnKaAozichpk7AHvWVHc3dAiBJVwftL1N2cpYdD3pPEmTFC8dxx48IdHgXtOfZtv7KkiqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSpokcxlrAReP1Ha1KtwDO5TvMkxv2HoCstdvRxIc0xUKgufy3N%2FVNL5ej49M12ZVlyC5wuTBL%2BPTDd8zYk13XndaaI726zztW9i1otn1HtcVxfWY8frReZF0rs17NwleHJu951ibjCjZfk7b4tRLKnJmTx2nmCUJr%2Fqp6mqAPD8kyUlY%2BhTQnzJas3TPKkV2iqQ0%2FdbQkBk1CRyiNYKP70I0pMrzSfzHGbyiHj4q7vtA%2Fag4DWDH2ebDGm0WHdpDJMV1uBqhbndEWn97ZHYUv0Vsi6bxhuKNGpkV66yd1YOFx2980Vvex7HkByR0z4aldGDMKuP7eif79XuD7cCxjW4KypwR8Hv07qiICYQNlc8ITtM0UHfB0PS%2BWYkET4QneAHZRmG5zK9tx%2B9ZHPpp7LNohioxHlSM5mS%2FHFqw%2Bsl3CN6YERnCcngCaqzjPRVEHjxCzQfjVMwTl0aJSK%2FOsBP5sOjFv8iV882Z%2BseSY9YdjLypzyBeGT4ttLwoCyqRRF%2Fo79nPWslxFEXjc2di%2FR4vIKj0k2V4EsMr5eicAPRoxkRl%2Bq5RGYPfhVVqBFdyQoHT6rFDzCbd703QMXdOt0k%2BxmOr1hclzm8dbUwtc4sq7VYp7P%2Be9Uz89f5ZB2uGm0npNUNvdpCdwQAwkvSwxAY6pgGU2BhoF581mH62K0fNQxflUUTVPqoW7HCHoD4M5o6cvdntOl49OJDdJ8G5Xq86h7IILpMu4G0Fif6zOrBSjSzalOlsRJFXQcvIOp9t%2B313dFmp8cArdB5UCeXEAQYwu70NHXqW9rSC7FnsLiodkak3EMxS538O%2Fa6a83AltG4OZmbhfUDkR2FtQmmZeOSNr7KENj9Nm%2BJhV00Lq9Nn58S0QS3Jo3%2FY&X-Amz-Signature=bb2f731d65933d644cded549b696971053e1a9f0e0113b6b7657cb555c80ff0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAKEHZLU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzupiZwz3utxe%2FVKiLKPqGnKaAozichpk7AHvWVHc3dAiBJVwftL1N2cpYdD3pPEmTFC8dxx48IdHgXtOfZtv7KkiqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSpokcxlrAReP1Ha1KtwDO5TvMkxv2HoCstdvRxIc0xUKgufy3N%2FVNL5ej49M12ZVlyC5wuTBL%2BPTDd8zYk13XndaaI726zztW9i1otn1HtcVxfWY8frReZF0rs17NwleHJu951ibjCjZfk7b4tRLKnJmTx2nmCUJr%2Fqp6mqAPD8kyUlY%2BhTQnzJas3TPKkV2iqQ0%2FdbQkBk1CRyiNYKP70I0pMrzSfzHGbyiHj4q7vtA%2Fag4DWDH2ebDGm0WHdpDJMV1uBqhbndEWn97ZHYUv0Vsi6bxhuKNGpkV66yd1YOFx2980Vvex7HkByR0z4aldGDMKuP7eif79XuD7cCxjW4KypwR8Hv07qiICYQNlc8ITtM0UHfB0PS%2BWYkET4QneAHZRmG5zK9tx%2B9ZHPpp7LNohioxHlSM5mS%2FHFqw%2Bsl3CN6YERnCcngCaqzjPRVEHjxCzQfjVMwTl0aJSK%2FOsBP5sOjFv8iV882Z%2BseSY9YdjLypzyBeGT4ttLwoCyqRRF%2Fo79nPWslxFEXjc2di%2FR4vIKj0k2V4EsMr5eicAPRoxkRl%2Bq5RGYPfhVVqBFdyQoHT6rFDzCbd703QMXdOt0k%2BxmOr1hclzm8dbUwtc4sq7VYp7P%2Be9Uz89f5ZB2uGm0npNUNvdpCdwQAwkvSwxAY6pgGU2BhoF581mH62K0fNQxflUUTVPqoW7HCHoD4M5o6cvdntOl49OJDdJ8G5Xq86h7IILpMu4G0Fif6zOrBSjSzalOlsRJFXQcvIOp9t%2B313dFmp8cArdB5UCeXEAQYwu70NHXqW9rSC7FnsLiodkak3EMxS538O%2Fa6a83AltG4OZmbhfUDkR2FtQmmZeOSNr7KENj9Nm%2BJhV00Lq9Nn58S0QS3Jo3%2FY&X-Amz-Signature=ae54ace0febce1d403186dab3cf4f904716652f23b8725d9c83955e286bd146e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAKEHZLU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzupiZwz3utxe%2FVKiLKPqGnKaAozichpk7AHvWVHc3dAiBJVwftL1N2cpYdD3pPEmTFC8dxx48IdHgXtOfZtv7KkiqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSpokcxlrAReP1Ha1KtwDO5TvMkxv2HoCstdvRxIc0xUKgufy3N%2FVNL5ej49M12ZVlyC5wuTBL%2BPTDd8zYk13XndaaI726zztW9i1otn1HtcVxfWY8frReZF0rs17NwleHJu951ibjCjZfk7b4tRLKnJmTx2nmCUJr%2Fqp6mqAPD8kyUlY%2BhTQnzJas3TPKkV2iqQ0%2FdbQkBk1CRyiNYKP70I0pMrzSfzHGbyiHj4q7vtA%2Fag4DWDH2ebDGm0WHdpDJMV1uBqhbndEWn97ZHYUv0Vsi6bxhuKNGpkV66yd1YOFx2980Vvex7HkByR0z4aldGDMKuP7eif79XuD7cCxjW4KypwR8Hv07qiICYQNlc8ITtM0UHfB0PS%2BWYkET4QneAHZRmG5zK9tx%2B9ZHPpp7LNohioxHlSM5mS%2FHFqw%2Bsl3CN6YERnCcngCaqzjPRVEHjxCzQfjVMwTl0aJSK%2FOsBP5sOjFv8iV882Z%2BseSY9YdjLypzyBeGT4ttLwoCyqRRF%2Fo79nPWslxFEXjc2di%2FR4vIKj0k2V4EsMr5eicAPRoxkRl%2Bq5RGYPfhVVqBFdyQoHT6rFDzCbd703QMXdOt0k%2BxmOr1hclzm8dbUwtc4sq7VYp7P%2Be9Uz89f5ZB2uGm0npNUNvdpCdwQAwkvSwxAY6pgGU2BhoF581mH62K0fNQxflUUTVPqoW7HCHoD4M5o6cvdntOl49OJDdJ8G5Xq86h7IILpMu4G0Fif6zOrBSjSzalOlsRJFXQcvIOp9t%2B313dFmp8cArdB5UCeXEAQYwu70NHXqW9rSC7FnsLiodkak3EMxS538O%2Fa6a83AltG4OZmbhfUDkR2FtQmmZeOSNr7KENj9Nm%2BJhV00Lq9Nn58S0QS3Jo3%2FY&X-Amz-Signature=1db7f54250f32ed3be216c4ece66b360bb4029bb185e8ad2b0292aee032bbb6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
