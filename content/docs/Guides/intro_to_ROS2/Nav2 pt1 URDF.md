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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQ7YVE6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDr%2Bs1iLyKsOwlDSKdE21jwElzOWQsBN%2BbOVrBmNI3vsgIgUAYp5LR%2B3Gw57VJgEw9kuOFswUXLIFj4XaHhQItin2Eq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCLSdWvhAgGVu%2FD1FSrcA6sBwJ5PHQTJp%2FFRdUiYYdeXNfemrRCaN5WXWC1eaQA6mjHKHta20NRlyH%2ByDSmX%2FTC%2BemYj2lyfWcPUTClrPrhLF7V6DMaGC252qzeHnjjIJTC78f0Sy8W9DHmYDx6B7bk3MuRQHtBr%2B8YTbZ7qqXN020NopeZzPbPxaKu8sHTZNcVEVneFwyiPC0%2BFfoZc7gnXJPzMr%2FMMAKwvl24ZHWjEoSK00kgkAyX6xJgk3fsaUcPXpWTmGynR4GHJoZdUCrkoF5zAcEcewCtPyt2BC7a%2FLZimNUTlL00mFKuhITyRQJChQRkFxD6Y8OTKcqWtevMgzAxH1uS5TGnuzn3z6luj1JI3%2F%2BlBn7s2KkJyJQPg93jSecDnEzFxxZcOKV7nWTRL6uAwdWOoXiPZ0TL600E54l3qlDqE2%2BvmYvx%2BYXcFNpDq4jIyzraL42SohfWAu8Wo8Sxf92zO%2BkibRfxk%2BN%2BG0h0onAArryFkoaE5SNK%2B9tqDD7N55si0W7EP67PZS5XmzS1pjF9nXYi%2BOyTEG1BlDS0XJEzp7PkMLAkjuSgIw%2BhSHUA%2FQbfPbYNPerIFr10eEpGLmT1KKUcLQ3q53RZr%2BgBj5ctG8dpHBzmOInNKVXC0EZJX%2BLTeiRRmMJTOw8QGOqUBSZqN%2Bk96cEa18St%2Bf%2FT%2FD5bYEYLGZOJOJDoFRzh8gZeCi3jrmAJQGbWomSiluswI6fydba14n%2FBWcmwxClOG%2Bh8%2FcU2ehzMqJD6t%2BoaU1qVsiMWxqxhI0KlcXQxF1Jprbe5m4nsukD10zhX2j%2BARZmzRuyouTX3%2FW8W5oL0BLiCAktYpmi59Rv3OkZYUmdOip%2F1WA1MRVC5i24VsGnzXKHP%2BdYmz&X-Amz-Signature=bef9b1d60e6400fe6eb0b957f30a52cb36e1c4e2904ee029e180e58b3bc580c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQ7YVE6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDr%2Bs1iLyKsOwlDSKdE21jwElzOWQsBN%2BbOVrBmNI3vsgIgUAYp5LR%2B3Gw57VJgEw9kuOFswUXLIFj4XaHhQItin2Eq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCLSdWvhAgGVu%2FD1FSrcA6sBwJ5PHQTJp%2FFRdUiYYdeXNfemrRCaN5WXWC1eaQA6mjHKHta20NRlyH%2ByDSmX%2FTC%2BemYj2lyfWcPUTClrPrhLF7V6DMaGC252qzeHnjjIJTC78f0Sy8W9DHmYDx6B7bk3MuRQHtBr%2B8YTbZ7qqXN020NopeZzPbPxaKu8sHTZNcVEVneFwyiPC0%2BFfoZc7gnXJPzMr%2FMMAKwvl24ZHWjEoSK00kgkAyX6xJgk3fsaUcPXpWTmGynR4GHJoZdUCrkoF5zAcEcewCtPyt2BC7a%2FLZimNUTlL00mFKuhITyRQJChQRkFxD6Y8OTKcqWtevMgzAxH1uS5TGnuzn3z6luj1JI3%2F%2BlBn7s2KkJyJQPg93jSecDnEzFxxZcOKV7nWTRL6uAwdWOoXiPZ0TL600E54l3qlDqE2%2BvmYvx%2BYXcFNpDq4jIyzraL42SohfWAu8Wo8Sxf92zO%2BkibRfxk%2BN%2BG0h0onAArryFkoaE5SNK%2B9tqDD7N55si0W7EP67PZS5XmzS1pjF9nXYi%2BOyTEG1BlDS0XJEzp7PkMLAkjuSgIw%2BhSHUA%2FQbfPbYNPerIFr10eEpGLmT1KKUcLQ3q53RZr%2BgBj5ctG8dpHBzmOInNKVXC0EZJX%2BLTeiRRmMJTOw8QGOqUBSZqN%2Bk96cEa18St%2Bf%2FT%2FD5bYEYLGZOJOJDoFRzh8gZeCi3jrmAJQGbWomSiluswI6fydba14n%2FBWcmwxClOG%2Bh8%2FcU2ehzMqJD6t%2BoaU1qVsiMWxqxhI0KlcXQxF1Jprbe5m4nsukD10zhX2j%2BARZmzRuyouTX3%2FW8W5oL0BLiCAktYpmi59Rv3OkZYUmdOip%2F1WA1MRVC5i24VsGnzXKHP%2BdYmz&X-Amz-Signature=8d8a8d4ab0477cb9bd4d93a8bea704836571082e30c3487320434f6871bb7d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQ7YVE6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDr%2Bs1iLyKsOwlDSKdE21jwElzOWQsBN%2BbOVrBmNI3vsgIgUAYp5LR%2B3Gw57VJgEw9kuOFswUXLIFj4XaHhQItin2Eq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCLSdWvhAgGVu%2FD1FSrcA6sBwJ5PHQTJp%2FFRdUiYYdeXNfemrRCaN5WXWC1eaQA6mjHKHta20NRlyH%2ByDSmX%2FTC%2BemYj2lyfWcPUTClrPrhLF7V6DMaGC252qzeHnjjIJTC78f0Sy8W9DHmYDx6B7bk3MuRQHtBr%2B8YTbZ7qqXN020NopeZzPbPxaKu8sHTZNcVEVneFwyiPC0%2BFfoZc7gnXJPzMr%2FMMAKwvl24ZHWjEoSK00kgkAyX6xJgk3fsaUcPXpWTmGynR4GHJoZdUCrkoF5zAcEcewCtPyt2BC7a%2FLZimNUTlL00mFKuhITyRQJChQRkFxD6Y8OTKcqWtevMgzAxH1uS5TGnuzn3z6luj1JI3%2F%2BlBn7s2KkJyJQPg93jSecDnEzFxxZcOKV7nWTRL6uAwdWOoXiPZ0TL600E54l3qlDqE2%2BvmYvx%2BYXcFNpDq4jIyzraL42SohfWAu8Wo8Sxf92zO%2BkibRfxk%2BN%2BG0h0onAArryFkoaE5SNK%2B9tqDD7N55si0W7EP67PZS5XmzS1pjF9nXYi%2BOyTEG1BlDS0XJEzp7PkMLAkjuSgIw%2BhSHUA%2FQbfPbYNPerIFr10eEpGLmT1KKUcLQ3q53RZr%2BgBj5ctG8dpHBzmOInNKVXC0EZJX%2BLTeiRRmMJTOw8QGOqUBSZqN%2Bk96cEa18St%2Bf%2FT%2FD5bYEYLGZOJOJDoFRzh8gZeCi3jrmAJQGbWomSiluswI6fydba14n%2FBWcmwxClOG%2Bh8%2FcU2ehzMqJD6t%2BoaU1qVsiMWxqxhI0KlcXQxF1Jprbe5m4nsukD10zhX2j%2BARZmzRuyouTX3%2FW8W5oL0BLiCAktYpmi59Rv3OkZYUmdOip%2F1WA1MRVC5i24VsGnzXKHP%2BdYmz&X-Amz-Signature=4c4fd1dbc9b880b8741fa3e851b0bc6caea50cec639975833746f2e42e5c4893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQ7YVE6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDr%2Bs1iLyKsOwlDSKdE21jwElzOWQsBN%2BbOVrBmNI3vsgIgUAYp5LR%2B3Gw57VJgEw9kuOFswUXLIFj4XaHhQItin2Eq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCLSdWvhAgGVu%2FD1FSrcA6sBwJ5PHQTJp%2FFRdUiYYdeXNfemrRCaN5WXWC1eaQA6mjHKHta20NRlyH%2ByDSmX%2FTC%2BemYj2lyfWcPUTClrPrhLF7V6DMaGC252qzeHnjjIJTC78f0Sy8W9DHmYDx6B7bk3MuRQHtBr%2B8YTbZ7qqXN020NopeZzPbPxaKu8sHTZNcVEVneFwyiPC0%2BFfoZc7gnXJPzMr%2FMMAKwvl24ZHWjEoSK00kgkAyX6xJgk3fsaUcPXpWTmGynR4GHJoZdUCrkoF5zAcEcewCtPyt2BC7a%2FLZimNUTlL00mFKuhITyRQJChQRkFxD6Y8OTKcqWtevMgzAxH1uS5TGnuzn3z6luj1JI3%2F%2BlBn7s2KkJyJQPg93jSecDnEzFxxZcOKV7nWTRL6uAwdWOoXiPZ0TL600E54l3qlDqE2%2BvmYvx%2BYXcFNpDq4jIyzraL42SohfWAu8Wo8Sxf92zO%2BkibRfxk%2BN%2BG0h0onAArryFkoaE5SNK%2B9tqDD7N55si0W7EP67PZS5XmzS1pjF9nXYi%2BOyTEG1BlDS0XJEzp7PkMLAkjuSgIw%2BhSHUA%2FQbfPbYNPerIFr10eEpGLmT1KKUcLQ3q53RZr%2BgBj5ctG8dpHBzmOInNKVXC0EZJX%2BLTeiRRmMJTOw8QGOqUBSZqN%2Bk96cEa18St%2Bf%2FT%2FD5bYEYLGZOJOJDoFRzh8gZeCi3jrmAJQGbWomSiluswI6fydba14n%2FBWcmwxClOG%2Bh8%2FcU2ehzMqJD6t%2BoaU1qVsiMWxqxhI0KlcXQxF1Jprbe5m4nsukD10zhX2j%2BARZmzRuyouTX3%2FW8W5oL0BLiCAktYpmi59Rv3OkZYUmdOip%2F1WA1MRVC5i24VsGnzXKHP%2BdYmz&X-Amz-Signature=438560738e507e6b930b0234bbc3bced9ff8dbcb4440ebdf4d10b1dbdc762c26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQ7YVE6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDr%2Bs1iLyKsOwlDSKdE21jwElzOWQsBN%2BbOVrBmNI3vsgIgUAYp5LR%2B3Gw57VJgEw9kuOFswUXLIFj4XaHhQItin2Eq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCLSdWvhAgGVu%2FD1FSrcA6sBwJ5PHQTJp%2FFRdUiYYdeXNfemrRCaN5WXWC1eaQA6mjHKHta20NRlyH%2ByDSmX%2FTC%2BemYj2lyfWcPUTClrPrhLF7V6DMaGC252qzeHnjjIJTC78f0Sy8W9DHmYDx6B7bk3MuRQHtBr%2B8YTbZ7qqXN020NopeZzPbPxaKu8sHTZNcVEVneFwyiPC0%2BFfoZc7gnXJPzMr%2FMMAKwvl24ZHWjEoSK00kgkAyX6xJgk3fsaUcPXpWTmGynR4GHJoZdUCrkoF5zAcEcewCtPyt2BC7a%2FLZimNUTlL00mFKuhITyRQJChQRkFxD6Y8OTKcqWtevMgzAxH1uS5TGnuzn3z6luj1JI3%2F%2BlBn7s2KkJyJQPg93jSecDnEzFxxZcOKV7nWTRL6uAwdWOoXiPZ0TL600E54l3qlDqE2%2BvmYvx%2BYXcFNpDq4jIyzraL42SohfWAu8Wo8Sxf92zO%2BkibRfxk%2BN%2BG0h0onAArryFkoaE5SNK%2B9tqDD7N55si0W7EP67PZS5XmzS1pjF9nXYi%2BOyTEG1BlDS0XJEzp7PkMLAkjuSgIw%2BhSHUA%2FQbfPbYNPerIFr10eEpGLmT1KKUcLQ3q53RZr%2BgBj5ctG8dpHBzmOInNKVXC0EZJX%2BLTeiRRmMJTOw8QGOqUBSZqN%2Bk96cEa18St%2Bf%2FT%2FD5bYEYLGZOJOJDoFRzh8gZeCi3jrmAJQGbWomSiluswI6fydba14n%2FBWcmwxClOG%2Bh8%2FcU2ehzMqJD6t%2BoaU1qVsiMWxqxhI0KlcXQxF1Jprbe5m4nsukD10zhX2j%2BARZmzRuyouTX3%2FW8W5oL0BLiCAktYpmi59Rv3OkZYUmdOip%2F1WA1MRVC5i24VsGnzXKHP%2BdYmz&X-Amz-Signature=af5e683ed38ad7c602d5e222e0d389157783155b2849c889489bad02516522b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQ7YVE6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDr%2Bs1iLyKsOwlDSKdE21jwElzOWQsBN%2BbOVrBmNI3vsgIgUAYp5LR%2B3Gw57VJgEw9kuOFswUXLIFj4XaHhQItin2Eq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCLSdWvhAgGVu%2FD1FSrcA6sBwJ5PHQTJp%2FFRdUiYYdeXNfemrRCaN5WXWC1eaQA6mjHKHta20NRlyH%2ByDSmX%2FTC%2BemYj2lyfWcPUTClrPrhLF7V6DMaGC252qzeHnjjIJTC78f0Sy8W9DHmYDx6B7bk3MuRQHtBr%2B8YTbZ7qqXN020NopeZzPbPxaKu8sHTZNcVEVneFwyiPC0%2BFfoZc7gnXJPzMr%2FMMAKwvl24ZHWjEoSK00kgkAyX6xJgk3fsaUcPXpWTmGynR4GHJoZdUCrkoF5zAcEcewCtPyt2BC7a%2FLZimNUTlL00mFKuhITyRQJChQRkFxD6Y8OTKcqWtevMgzAxH1uS5TGnuzn3z6luj1JI3%2F%2BlBn7s2KkJyJQPg93jSecDnEzFxxZcOKV7nWTRL6uAwdWOoXiPZ0TL600E54l3qlDqE2%2BvmYvx%2BYXcFNpDq4jIyzraL42SohfWAu8Wo8Sxf92zO%2BkibRfxk%2BN%2BG0h0onAArryFkoaE5SNK%2B9tqDD7N55si0W7EP67PZS5XmzS1pjF9nXYi%2BOyTEG1BlDS0XJEzp7PkMLAkjuSgIw%2BhSHUA%2FQbfPbYNPerIFr10eEpGLmT1KKUcLQ3q53RZr%2BgBj5ctG8dpHBzmOInNKVXC0EZJX%2BLTeiRRmMJTOw8QGOqUBSZqN%2Bk96cEa18St%2Bf%2FT%2FD5bYEYLGZOJOJDoFRzh8gZeCi3jrmAJQGbWomSiluswI6fydba14n%2FBWcmwxClOG%2Bh8%2FcU2ehzMqJD6t%2BoaU1qVsiMWxqxhI0KlcXQxF1Jprbe5m4nsukD10zhX2j%2BARZmzRuyouTX3%2FW8W5oL0BLiCAktYpmi59Rv3OkZYUmdOip%2F1WA1MRVC5i24VsGnzXKHP%2BdYmz&X-Amz-Signature=2d5cd2e776535a8a3c563444ef83984f95df83f58f7683d0bba2af9cd9133f9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQ7YVE6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDr%2Bs1iLyKsOwlDSKdE21jwElzOWQsBN%2BbOVrBmNI3vsgIgUAYp5LR%2B3Gw57VJgEw9kuOFswUXLIFj4XaHhQItin2Eq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCLSdWvhAgGVu%2FD1FSrcA6sBwJ5PHQTJp%2FFRdUiYYdeXNfemrRCaN5WXWC1eaQA6mjHKHta20NRlyH%2ByDSmX%2FTC%2BemYj2lyfWcPUTClrPrhLF7V6DMaGC252qzeHnjjIJTC78f0Sy8W9DHmYDx6B7bk3MuRQHtBr%2B8YTbZ7qqXN020NopeZzPbPxaKu8sHTZNcVEVneFwyiPC0%2BFfoZc7gnXJPzMr%2FMMAKwvl24ZHWjEoSK00kgkAyX6xJgk3fsaUcPXpWTmGynR4GHJoZdUCrkoF5zAcEcewCtPyt2BC7a%2FLZimNUTlL00mFKuhITyRQJChQRkFxD6Y8OTKcqWtevMgzAxH1uS5TGnuzn3z6luj1JI3%2F%2BlBn7s2KkJyJQPg93jSecDnEzFxxZcOKV7nWTRL6uAwdWOoXiPZ0TL600E54l3qlDqE2%2BvmYvx%2BYXcFNpDq4jIyzraL42SohfWAu8Wo8Sxf92zO%2BkibRfxk%2BN%2BG0h0onAArryFkoaE5SNK%2B9tqDD7N55si0W7EP67PZS5XmzS1pjF9nXYi%2BOyTEG1BlDS0XJEzp7PkMLAkjuSgIw%2BhSHUA%2FQbfPbYNPerIFr10eEpGLmT1KKUcLQ3q53RZr%2BgBj5ctG8dpHBzmOInNKVXC0EZJX%2BLTeiRRmMJTOw8QGOqUBSZqN%2Bk96cEa18St%2Bf%2FT%2FD5bYEYLGZOJOJDoFRzh8gZeCi3jrmAJQGbWomSiluswI6fydba14n%2FBWcmwxClOG%2Bh8%2FcU2ehzMqJD6t%2BoaU1qVsiMWxqxhI0KlcXQxF1Jprbe5m4nsukD10zhX2j%2BARZmzRuyouTX3%2FW8W5oL0BLiCAktYpmi59Rv3OkZYUmdOip%2F1WA1MRVC5i24VsGnzXKHP%2BdYmz&X-Amz-Signature=8ac486209cd667ed8453f8e3524b834206813df2ef90b1556f5c64760833b4fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQ7YVE6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDr%2Bs1iLyKsOwlDSKdE21jwElzOWQsBN%2BbOVrBmNI3vsgIgUAYp5LR%2B3Gw57VJgEw9kuOFswUXLIFj4XaHhQItin2Eq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCLSdWvhAgGVu%2FD1FSrcA6sBwJ5PHQTJp%2FFRdUiYYdeXNfemrRCaN5WXWC1eaQA6mjHKHta20NRlyH%2ByDSmX%2FTC%2BemYj2lyfWcPUTClrPrhLF7V6DMaGC252qzeHnjjIJTC78f0Sy8W9DHmYDx6B7bk3MuRQHtBr%2B8YTbZ7qqXN020NopeZzPbPxaKu8sHTZNcVEVneFwyiPC0%2BFfoZc7gnXJPzMr%2FMMAKwvl24ZHWjEoSK00kgkAyX6xJgk3fsaUcPXpWTmGynR4GHJoZdUCrkoF5zAcEcewCtPyt2BC7a%2FLZimNUTlL00mFKuhITyRQJChQRkFxD6Y8OTKcqWtevMgzAxH1uS5TGnuzn3z6luj1JI3%2F%2BlBn7s2KkJyJQPg93jSecDnEzFxxZcOKV7nWTRL6uAwdWOoXiPZ0TL600E54l3qlDqE2%2BvmYvx%2BYXcFNpDq4jIyzraL42SohfWAu8Wo8Sxf92zO%2BkibRfxk%2BN%2BG0h0onAArryFkoaE5SNK%2B9tqDD7N55si0W7EP67PZS5XmzS1pjF9nXYi%2BOyTEG1BlDS0XJEzp7PkMLAkjuSgIw%2BhSHUA%2FQbfPbYNPerIFr10eEpGLmT1KKUcLQ3q53RZr%2BgBj5ctG8dpHBzmOInNKVXC0EZJX%2BLTeiRRmMJTOw8QGOqUBSZqN%2Bk96cEa18St%2Bf%2FT%2FD5bYEYLGZOJOJDoFRzh8gZeCi3jrmAJQGbWomSiluswI6fydba14n%2FBWcmwxClOG%2Bh8%2FcU2ehzMqJD6t%2BoaU1qVsiMWxqxhI0KlcXQxF1Jprbe5m4nsukD10zhX2j%2BARZmzRuyouTX3%2FW8W5oL0BLiCAktYpmi59Rv3OkZYUmdOip%2F1WA1MRVC5i24VsGnzXKHP%2BdYmz&X-Amz-Signature=ef383fbabfa4f0425b628c270ecba2ef781c1c60bab460a00e375e2b721347c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQ7YVE6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDr%2Bs1iLyKsOwlDSKdE21jwElzOWQsBN%2BbOVrBmNI3vsgIgUAYp5LR%2B3Gw57VJgEw9kuOFswUXLIFj4XaHhQItin2Eq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCLSdWvhAgGVu%2FD1FSrcA6sBwJ5PHQTJp%2FFRdUiYYdeXNfemrRCaN5WXWC1eaQA6mjHKHta20NRlyH%2ByDSmX%2FTC%2BemYj2lyfWcPUTClrPrhLF7V6DMaGC252qzeHnjjIJTC78f0Sy8W9DHmYDx6B7bk3MuRQHtBr%2B8YTbZ7qqXN020NopeZzPbPxaKu8sHTZNcVEVneFwyiPC0%2BFfoZc7gnXJPzMr%2FMMAKwvl24ZHWjEoSK00kgkAyX6xJgk3fsaUcPXpWTmGynR4GHJoZdUCrkoF5zAcEcewCtPyt2BC7a%2FLZimNUTlL00mFKuhITyRQJChQRkFxD6Y8OTKcqWtevMgzAxH1uS5TGnuzn3z6luj1JI3%2F%2BlBn7s2KkJyJQPg93jSecDnEzFxxZcOKV7nWTRL6uAwdWOoXiPZ0TL600E54l3qlDqE2%2BvmYvx%2BYXcFNpDq4jIyzraL42SohfWAu8Wo8Sxf92zO%2BkibRfxk%2BN%2BG0h0onAArryFkoaE5SNK%2B9tqDD7N55si0W7EP67PZS5XmzS1pjF9nXYi%2BOyTEG1BlDS0XJEzp7PkMLAkjuSgIw%2BhSHUA%2FQbfPbYNPerIFr10eEpGLmT1KKUcLQ3q53RZr%2BgBj5ctG8dpHBzmOInNKVXC0EZJX%2BLTeiRRmMJTOw8QGOqUBSZqN%2Bk96cEa18St%2Bf%2FT%2FD5bYEYLGZOJOJDoFRzh8gZeCi3jrmAJQGbWomSiluswI6fydba14n%2FBWcmwxClOG%2Bh8%2FcU2ehzMqJD6t%2BoaU1qVsiMWxqxhI0KlcXQxF1Jprbe5m4nsukD10zhX2j%2BARZmzRuyouTX3%2FW8W5oL0BLiCAktYpmi59Rv3OkZYUmdOip%2F1WA1MRVC5i24VsGnzXKHP%2BdYmz&X-Amz-Signature=25c4227fa9df0f909960a06f662477c62f20672e279c45ed33b5dfc5b69f4404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQ7YVE6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDr%2Bs1iLyKsOwlDSKdE21jwElzOWQsBN%2BbOVrBmNI3vsgIgUAYp5LR%2B3Gw57VJgEw9kuOFswUXLIFj4XaHhQItin2Eq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCLSdWvhAgGVu%2FD1FSrcA6sBwJ5PHQTJp%2FFRdUiYYdeXNfemrRCaN5WXWC1eaQA6mjHKHta20NRlyH%2ByDSmX%2FTC%2BemYj2lyfWcPUTClrPrhLF7V6DMaGC252qzeHnjjIJTC78f0Sy8W9DHmYDx6B7bk3MuRQHtBr%2B8YTbZ7qqXN020NopeZzPbPxaKu8sHTZNcVEVneFwyiPC0%2BFfoZc7gnXJPzMr%2FMMAKwvl24ZHWjEoSK00kgkAyX6xJgk3fsaUcPXpWTmGynR4GHJoZdUCrkoF5zAcEcewCtPyt2BC7a%2FLZimNUTlL00mFKuhITyRQJChQRkFxD6Y8OTKcqWtevMgzAxH1uS5TGnuzn3z6luj1JI3%2F%2BlBn7s2KkJyJQPg93jSecDnEzFxxZcOKV7nWTRL6uAwdWOoXiPZ0TL600E54l3qlDqE2%2BvmYvx%2BYXcFNpDq4jIyzraL42SohfWAu8Wo8Sxf92zO%2BkibRfxk%2BN%2BG0h0onAArryFkoaE5SNK%2B9tqDD7N55si0W7EP67PZS5XmzS1pjF9nXYi%2BOyTEG1BlDS0XJEzp7PkMLAkjuSgIw%2BhSHUA%2FQbfPbYNPerIFr10eEpGLmT1KKUcLQ3q53RZr%2BgBj5ctG8dpHBzmOInNKVXC0EZJX%2BLTeiRRmMJTOw8QGOqUBSZqN%2Bk96cEa18St%2Bf%2FT%2FD5bYEYLGZOJOJDoFRzh8gZeCi3jrmAJQGbWomSiluswI6fydba14n%2FBWcmwxClOG%2Bh8%2FcU2ehzMqJD6t%2BoaU1qVsiMWxqxhI0KlcXQxF1Jprbe5m4nsukD10zhX2j%2BARZmzRuyouTX3%2FW8W5oL0BLiCAktYpmi59Rv3OkZYUmdOip%2F1WA1MRVC5i24VsGnzXKHP%2BdYmz&X-Amz-Signature=068cfdcf269cbbc2fffaaf3121315f8240612ce132f2f783f5f6876bc403b0b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653V6PYHY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIHDJ0XEGBPpq%2BqFadHIS4Vu7AFTv9Hh5%2F7jO%2BE9AzzGgAiEAldWEpxYYn6yJFO1m4ZNhM6n7JRrHXnlKWGiuSf6VD8kq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDKwv7riuGQn8DYonjCrcA4fpmGCbr826fDgHP%2FKhzZJkF42qM7ioVKCPqHll3t%2BfOERkw0U6tFkh68kdYhKBi9R5o9H6LJ6OgaBHUuAg3CIpVMbqwtcUY7zNHYORj99hoo5d3ObZCR0wNtxkaViBh3CguN78Y76964TgJ1UkxTlEzrsF%2FEs56QdgHhzCFTK4ANYpHrzzvZOevdzusyqCwQFOkk3XT7Ik0JlpH2oVQAU8yBLeoBLggBK6DPxHgRqwekgMzbYze33E2xWxGaAE5QClK1oGxO8RFpsYjqcmrMKvM27swg7nvn9Q7UdiNYZnAtwcCXO6ZXSyT0fvY00riemHUoCVHv7fLbk0%2FbvB6iqxEn3Wb6uB8GmucH6X2BfWwE8h%2FnXwpRX3PeFZoMgdoRn06wO8ulqtt4bxxeOwVUjlCo3YgNYmTnKkgj60robETcDo0oktj%2BE7SiXcbvFiWmz8%2FU3ZBQoyK3kfbAn8WoBCiQUWHeQEDS%2FzWg4ObyIprAllOxrwLMtUtLwm50RCOt%2B7wOOvoDP%2BpnkuLtm49wA42w5qCJnUmwMNUrqNGqG0L0wGc%2Bw8u2eATgfyBujr%2F0fnuLOxgQ48yEDwbkSuOaqqGiQA865Swbsx2qzrkQXWhJrZliHq883i8%2FqKMOPOw8QGOqUBXVK6FpSHlfDYXBMuDChX7P65zPsp6ibh0%2FJkDDXqlk7Y%2FRDvniDHFexWqDvF9g8de6l1dECp2H7cuuUU53jRGj2YktqifHfa63gcivGEJ7HTxN1KvlpDoHN6Zqkg2H4Yqf7hzrnSKZshVbJTT%2BJoxAaXKlXVL6NyWXF3g6SaRhA0C37uUrAiGQTUaZPVrg3hLqcu9dMdkPQHMom7dyzuS7976%2B7C&X-Amz-Signature=e58723fa90720eb8ffdf7c1eaaaeb831dff09335bf0a3dd19cd1d817e94f0cba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652JKAH4N%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDKjovwzyQD1p0n1fwThRoBL4CiuYTYv%2FFg39A%2BUZ77KgIhAMpVwwVkEerrTkChbkgNZCk4tPIRVEv3ebYp9Yp7Xww1Kv8DCEoQABoMNjM3NDIzMTgzODA1IgwNI641d2k5sGbWH2Mq3AOjmWVctJKIQu8CFcNNE73GYIRlQW1cbttkb%2BEPmD3CMVJh07czWqM7w5U29%2FesF3JPD8RdSQTSlzpSUI2XRkd0TdT80USGSaqw%2FjMHzJbxt%2FNbQbpJ3YW9ioq%2FTSgHV7YMfrFd9lsofR2UNnQ0i5xKGfyEfm4fsK%2BKlyhJg26NjAsLfwlOTiHZlGQg2AC9DSZRFIv2YCvtsImHDtIGSOkynzDibetT%2F5V5j69hrHsDzOP6gifO2cjtA2hDDF7IYa%2B1eJ7CToLjgijr%2FgEsNNt3MQXq0D2MRCcFhnUDzE5lkvsB7jsUBoxdRE5y8zwyt14uSsPOxlKzps%2Fr7sDLfoDLZxJCb6EgKigClxFxmOh%2B5ikl9Lt735u2qnl7%2Fzo5QgrOsxhZqZ0jjjN8BZUSX4WBfnilqb86dseMKE%2BTrtlibPT0YqJPtl5PEpUEhp2MZcfWLaUaG69IpnskMcNSQCWvgcxBAZiLaRjR5%2BBSTsCFhICmjEJLbhC7fffB5fPKhfLvrIzL6D1JrMGyIDUjTIdFkQAGqr7bDxhyiI3FhIOj84gayPJNVp364ImWwPH9rVxji3BehP9LbMeJUj7a%2FDM34PaC0BAaK%2F%2F1Z77tSGEdLOlNozHxgZSPUc%2B9HTCOzsPEBjqkATC7uJfoyB1NBLX8dn%2BFWn3hYYSBLyi9eVUJlprvVfVaXwaaB%2FIDHbbK6GBln8VPF%2BxtA1X95i5AwB2P4ZdwKPnodRrQ3lv4WUhA8HVsIC%2BbdE0US7ZSusZjL2X3DzPuuAIC0KDewBKniqL%2Bb3IqUPnHMiaRg9cH8uCYxpIPaLLHENQUFQ7yv5STJLDWYKbe8THemaPsbPxDaAlJONDCb6dN0f2C&X-Amz-Signature=54ee9166c41081a04ae708453f35ceba2368d7ba2587ec16ce3e525b4bf6d751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJQJ3REC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIGBttskyPEr%2BdQ080noTnN7Wp1LQ%2BFyki9Xh%2F8gg1%2FibAiAUdZ%2BcbW2Y2DxSFcHhT9FBmYalW9q1eJE6L%2BV38P9g4Cr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM0f%2ByMx8nR5Uu4IL0KtwDf0OinFTtZDI1Nm%2FX26Jyq6%2FU1gxK1u7jwDwFSOJfP347%2B5uoOu9sr5XIVQ7u1a8nTor7Sg9pMemUSJBqGW7DC4XLW3ikmSXR5lDJ0WEwQYttrrCfeJI7JSk77Cpk3CAzaIy4JgAE8irMXrI91fpTOOD06CsJFQXoTS5axCZv04dYrj%2Fo65ZcD47rAZN72Zo5mjPsUIU3LG3XfFj4PU6tK7VcUvHQL4QDR5P6ip9sS3Cmi1zA6uEbeq9zAPW3npMcRJx9k%2FFIATGEHqMwmWoeWWPAngYKe4eZiMinmN%2Bwbo5%2Bm0QRpnxd69MZunTkIcuAmpXlmg%2BgrQOgCYmKu8OOcdldYqOSCUGHJ%2FLcOqy8ZanYLsuN46G%2FUTU9Z0cw6a6lbuYSjlR0CWKCZyQVidcGucnIlgZHV33eAfpI9%2BMA5Xf%2Bxu6ZOs7b2wicT9u%2B0%2BohO%2FhFZhtmx%2FvFcDcqz1VTN7vitSpjh9%2B9QsxwDr3Yon6ORCJ7t2qnSf5VL%2BgdEk%2BPbxdJUeGMArK9WOaO%2BBJsGja3mb%2BGuViHB%2FbTgkzLml46AJMqKREPv4Uz8Ul3ntxNQ6JfVfo2yrbQz%2FikvcFY6g3cs6JMocWqbQYHn0KmLX23iZwYRyBHzwc13qMwxc7DxAY6pgEUOa81YlL%2FBYOmMdRl4pV2JxY%2F8s1JKIbPfuGRGYaUImt5XxOQtCAWfl8cxHBVKK%2Fds6vxLQVyil%2FeTiErjnrXYeeobo4ImMJP%2B4%2BdX%2FgZqqCmoWPT%2FfkeXGTqMvO8qVe08w%2B5pJWKE%2BrqtmE2z2e2cansL7PHJsEu7dLuhsygPug46bzD3EwAaIbnWJNXQ4sYDPbxOKCySS9ffBYRz%2BxjjLd6POX6&X-Amz-Signature=c9ea3450d5c53159440ed37d0089486bc673143eff419a131a8bac0e1e31238f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQ7YVE6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDr%2Bs1iLyKsOwlDSKdE21jwElzOWQsBN%2BbOVrBmNI3vsgIgUAYp5LR%2B3Gw57VJgEw9kuOFswUXLIFj4XaHhQItin2Eq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCLSdWvhAgGVu%2FD1FSrcA6sBwJ5PHQTJp%2FFRdUiYYdeXNfemrRCaN5WXWC1eaQA6mjHKHta20NRlyH%2ByDSmX%2FTC%2BemYj2lyfWcPUTClrPrhLF7V6DMaGC252qzeHnjjIJTC78f0Sy8W9DHmYDx6B7bk3MuRQHtBr%2B8YTbZ7qqXN020NopeZzPbPxaKu8sHTZNcVEVneFwyiPC0%2BFfoZc7gnXJPzMr%2FMMAKwvl24ZHWjEoSK00kgkAyX6xJgk3fsaUcPXpWTmGynR4GHJoZdUCrkoF5zAcEcewCtPyt2BC7a%2FLZimNUTlL00mFKuhITyRQJChQRkFxD6Y8OTKcqWtevMgzAxH1uS5TGnuzn3z6luj1JI3%2F%2BlBn7s2KkJyJQPg93jSecDnEzFxxZcOKV7nWTRL6uAwdWOoXiPZ0TL600E54l3qlDqE2%2BvmYvx%2BYXcFNpDq4jIyzraL42SohfWAu8Wo8Sxf92zO%2BkibRfxk%2BN%2BG0h0onAArryFkoaE5SNK%2B9tqDD7N55si0W7EP67PZS5XmzS1pjF9nXYi%2BOyTEG1BlDS0XJEzp7PkMLAkjuSgIw%2BhSHUA%2FQbfPbYNPerIFr10eEpGLmT1KKUcLQ3q53RZr%2BgBj5ctG8dpHBzmOInNKVXC0EZJX%2BLTeiRRmMJTOw8QGOqUBSZqN%2Bk96cEa18St%2Bf%2FT%2FD5bYEYLGZOJOJDoFRzh8gZeCi3jrmAJQGbWomSiluswI6fydba14n%2FBWcmwxClOG%2Bh8%2FcU2ehzMqJD6t%2BoaU1qVsiMWxqxhI0KlcXQxF1Jprbe5m4nsukD10zhX2j%2BARZmzRuyouTX3%2FW8W5oL0BLiCAktYpmi59Rv3OkZYUmdOip%2F1WA1MRVC5i24VsGnzXKHP%2BdYmz&X-Amz-Signature=4a391127e989f6c0a73b43265825061a403b033f0ec39db779a4c9c03603d8f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSR2HAEN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCICSw7iaxvic12P%2BrNhUbHD%2Bl577kKSlDy%2Fq%2FEcBY7wbBAiBJQdcU3rcNcemwqKMDXXMFPWNexHqUUeE462CDqO4DjSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM9DHB5lcLG6Rfe8ocKtwDec7Xlkhw5yHmnrBu85EVaPa7ylgV3tVyxIi1JL60tSXzQYQ8a43D9aKeKG8%2BATS1HmVCOYfnkdnSogTKtK%2FGJ7PcDBiyxjvNNwT9jG0b80AvqzQDYc%2FES%2BSOa1E2IL4QLfLDRMr7ZLtEF7SROEJnaHTx0D%2B18g8u%2FyAtCJAAmZJ3kQBK9nwOB4IDNtirvNgkMBYh6Hn1RFU2aLv%2FNslHJjZ%2B1TkpXz8pqetlETmfET%2FIiVd4Le5Huye8U7cwysP4LncOBdQT8Gb%2FdIdNoHKrkHDF3jF60kjaqelzVyhdVK%2B0Amt471PZ4QlDibI7KmNEpNncmE%2B7CAzYPjb%2F20pxb1GLAEIfDFrUZiNgYHUbhGYqfqeTjMb5dxd1p%2B7PeBY4cTVIWT4dJVyobnevRR26xBSuJkl1gyBvADx6iY9H97Q3owLLihURRvEFPkw58nKlA9cNnrpDDOpK4VWP1UbfYmsmK2jp3WuSjVsVAor26tssg02qLS7y%2FgxdkiWU4VunVRJF79SG68Z67gDKLKg1xo%2F9yIm4Cwxxs1wRcx51Rv%2FPnhIZpfva9b9UcH23OLkI0PV2FoXNzwSbq9PIFeXCrdvncSutWvkETHZovaZzrtFp7uDf%2BGMal7N2hSgw68%2FDxAY6pgGqzAtB%2Fo%2Flla4v4YV%2B9QzjBk4959MbHlu1iFWK2Cz2Km69HGouJMVDmTXyai2x%2B0o55DxA6LHTVb7x7oRAU3gnke5GJNpE%2B%2Bwlbxh1ZQ9PmdOcIu8YQSdHp3yW4HVW%2FGBLite1qWdPS%2F99huiOXhr403FElR72WkdOkdGm0pTtxOh3i1U2zTGuG06ERnmlqaj%2BumdZ1g975EmMGTBvWOhbrMUkHvkR&X-Amz-Signature=2fcc94051ed8635704b4e72a9694cbb10359406110007d688f3b27190e0a34e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQ7YVE6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDr%2Bs1iLyKsOwlDSKdE21jwElzOWQsBN%2BbOVrBmNI3vsgIgUAYp5LR%2B3Gw57VJgEw9kuOFswUXLIFj4XaHhQItin2Eq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCLSdWvhAgGVu%2FD1FSrcA6sBwJ5PHQTJp%2FFRdUiYYdeXNfemrRCaN5WXWC1eaQA6mjHKHta20NRlyH%2ByDSmX%2FTC%2BemYj2lyfWcPUTClrPrhLF7V6DMaGC252qzeHnjjIJTC78f0Sy8W9DHmYDx6B7bk3MuRQHtBr%2B8YTbZ7qqXN020NopeZzPbPxaKu8sHTZNcVEVneFwyiPC0%2BFfoZc7gnXJPzMr%2FMMAKwvl24ZHWjEoSK00kgkAyX6xJgk3fsaUcPXpWTmGynR4GHJoZdUCrkoF5zAcEcewCtPyt2BC7a%2FLZimNUTlL00mFKuhITyRQJChQRkFxD6Y8OTKcqWtevMgzAxH1uS5TGnuzn3z6luj1JI3%2F%2BlBn7s2KkJyJQPg93jSecDnEzFxxZcOKV7nWTRL6uAwdWOoXiPZ0TL600E54l3qlDqE2%2BvmYvx%2BYXcFNpDq4jIyzraL42SohfWAu8Wo8Sxf92zO%2BkibRfxk%2BN%2BG0h0onAArryFkoaE5SNK%2B9tqDD7N55si0W7EP67PZS5XmzS1pjF9nXYi%2BOyTEG1BlDS0XJEzp7PkMLAkjuSgIw%2BhSHUA%2FQbfPbYNPerIFr10eEpGLmT1KKUcLQ3q53RZr%2BgBj5ctG8dpHBzmOInNKVXC0EZJX%2BLTeiRRmMJTOw8QGOqUBSZqN%2Bk96cEa18St%2Bf%2FT%2FD5bYEYLGZOJOJDoFRzh8gZeCi3jrmAJQGbWomSiluswI6fydba14n%2FBWcmwxClOG%2Bh8%2FcU2ehzMqJD6t%2BoaU1qVsiMWxqxhI0KlcXQxF1Jprbe5m4nsukD10zhX2j%2BARZmzRuyouTX3%2FW8W5oL0BLiCAktYpmi59Rv3OkZYUmdOip%2F1WA1MRVC5i24VsGnzXKHP%2BdYmz&X-Amz-Signature=18ba98ae728ac6f238d34b10cdbc1c983780e6832f756f55a7f037f8f28fc83d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHJE2CHX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFCVrbrPhfDTgWyKYwiyx6Su2DVdFC9NUIteg6nOYa15AiEAkxPIlB6cE2KdYKZvnzyApbGJLZn2RVWcmXE8xGXObbkq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPJ7SFTt84xUp7tMXyrcA1XM5Cmj8%2FBSJtSr28pYWcmwwiRUtzY51LHtMTFyF3NM3SFxYXT46Xjzun9FceO06yLus5AvcDJJutmbzMlZNTO0k0VallqYtqxZAASKe%2FP7Y67126Ly1CYsS%2B%2F0Ti5Dboq9XfBlSS0ZGvfHKqhLsNv%2BDyekSERB9jRmaBC4HQkDWc5tPlcaCzxKEEHsCNHiPOhtBgR9%2B7%2F91flIYKnon55jcNd6hdY79aigPhp0j%2FykR1hb323zVu1K3%2Fqw2JGPB%2ByGqlCEm3RHl%2FNxaRYwsBvrbwgXmRqpyHLHI8kaD2mx5bf7q%2BrO5f4d8Lw8cQ6Nxuqjvtyc8NY6brtkXm3%2BjNr6VfsEIGJ4ZFTnvoMphp7Np7c%2F4uUHBUADwcpADLg5L%2F6tqJLV6hOmk3fP8VfcRjlNFC6dO89gVWRHDDeWcZlMUpPH2yreHZfSUWEc%2BOebYE5eUxpWHlIXkKO%2BEJoKvgGDS0aaxJQNaPY79Wq6JBQ2lGzzu299nC8Hk%2BZzljNVYtmuoWMYzCKoqiKO7w8N8k%2Bhf3F%2BZcfnf%2FgnGM46PFl2mHZgskcR6REGjSLb852NM4oB2o%2Fq4LV31pAgmxqoHl09sfwlkiRTHignr%2FHN82vRtPiOI9IKgtVmVN1lMNnOw8QGOqUBQrqJchjKwAT7qDtuGMqJUSAbzdAHjAyHFBlmxoMyidlfrSE7Mhv0f0bzvr1hb0eo4bzeESdoaa6U%2Beq7ajcQk%2B6bndASJ6%2B3FciCqpSqya%2BoT3FGt26AuSAak981O84J59MH3rSuxLpNPzc6mn1XDsEvnzZp%2FuYNrzwtYloN8fncd%2FhCHOV%2FX0SUvGcbFUvJ87jnXUXfE0sPNV643%2BQYWD8ra8Dh&X-Amz-Signature=ca31c6c9b1651cd59d06ecd6a41db5278e8ad8f5d4ea580cadea07e1abe0e191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQ7YVE6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDr%2Bs1iLyKsOwlDSKdE21jwElzOWQsBN%2BbOVrBmNI3vsgIgUAYp5LR%2B3Gw57VJgEw9kuOFswUXLIFj4XaHhQItin2Eq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCLSdWvhAgGVu%2FD1FSrcA6sBwJ5PHQTJp%2FFRdUiYYdeXNfemrRCaN5WXWC1eaQA6mjHKHta20NRlyH%2ByDSmX%2FTC%2BemYj2lyfWcPUTClrPrhLF7V6DMaGC252qzeHnjjIJTC78f0Sy8W9DHmYDx6B7bk3MuRQHtBr%2B8YTbZ7qqXN020NopeZzPbPxaKu8sHTZNcVEVneFwyiPC0%2BFfoZc7gnXJPzMr%2FMMAKwvl24ZHWjEoSK00kgkAyX6xJgk3fsaUcPXpWTmGynR4GHJoZdUCrkoF5zAcEcewCtPyt2BC7a%2FLZimNUTlL00mFKuhITyRQJChQRkFxD6Y8OTKcqWtevMgzAxH1uS5TGnuzn3z6luj1JI3%2F%2BlBn7s2KkJyJQPg93jSecDnEzFxxZcOKV7nWTRL6uAwdWOoXiPZ0TL600E54l3qlDqE2%2BvmYvx%2BYXcFNpDq4jIyzraL42SohfWAu8Wo8Sxf92zO%2BkibRfxk%2BN%2BG0h0onAArryFkoaE5SNK%2B9tqDD7N55si0W7EP67PZS5XmzS1pjF9nXYi%2BOyTEG1BlDS0XJEzp7PkMLAkjuSgIw%2BhSHUA%2FQbfPbYNPerIFr10eEpGLmT1KKUcLQ3q53RZr%2BgBj5ctG8dpHBzmOInNKVXC0EZJX%2BLTeiRRmMJTOw8QGOqUBSZqN%2Bk96cEa18St%2Bf%2FT%2FD5bYEYLGZOJOJDoFRzh8gZeCi3jrmAJQGbWomSiluswI6fydba14n%2FBWcmwxClOG%2Bh8%2FcU2ehzMqJD6t%2BoaU1qVsiMWxqxhI0KlcXQxF1Jprbe5m4nsukD10zhX2j%2BARZmzRuyouTX3%2FW8W5oL0BLiCAktYpmi59Rv3OkZYUmdOip%2F1WA1MRVC5i24VsGnzXKHP%2BdYmz&X-Amz-Signature=d939821c4276f05d04076dd0cf564f5c637d5cf7c4f7075def9117e3596641d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB2ZL5RO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCICGiLODDCdiaYRIqMH%2B53mN5IowyxwbCil665xBFDD6LAiAA7TkH7UrZotAkg35lVgNVYi%2BnRd%2FT4evSZS3Vf4EU5ir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMo9ojsNg35F7cdDJLKtwDJImBQ7MtIiUVXybEdhqEL1t9Lwt0k5QDe3XqVIG0uyx%2B6X%2BS6RjgSt2Zuq94lgH6tPMEubA1rpLIHZYSoESW3ZLqq5t4nQlXziPp%2F5bB%2BTVr0RgplGA4GudpCaeFcy%2FOs8kgOU7md6wGqSJVbtaahlQBPJWlvZOVf2LK8o7QZNyctmqkthtw%2F7htKns3DPL4lkojls7PvjBQQkAV%2F%2BE28nkMqteQYNt6%2Bqz7y3K8724042r4eh1%2BmnqLgOSYHP405xWCa%2FR1WAk8xpIp0sdbVhav9YRQ4ClYRWzwFTkmYxLhTyWV5TaM4%2BzD3L9n743ullBSD6ggfWDmllMM4u764FbYI8kI9TmGCTKeW5lm6DaiUGDF3b7cY4X0muH1rEktINZYZ%2BhCbYiV7k8yCAawr6UvhRH9O5qVTkrpFy6x4yl1DvQZHENeyN6QOhUNL2WM4poyk1BGVhNnf6%2BatWOIVa673iVIySmJ%2BiLI7MZazZ7mSEE3cDz2rLhmnpIeaAK2wv5MWM7D878QmA1roPY8ZdcTr5AEiltXBkr2ahDrtdaCPLi%2Ff%2BbGqIX6SI2eXSDqwCUeb2%2FQu5zwjW6Q8yYDUA3gusChP4HQCaRCZdCUXf7RtBiUWYuUX6UMFHYwjs7DxAY6pgGznQzgZY0d%2B5Vai36zev9lREGg3YCXwdyQk3uTnlNYisS0itjyt2sADe%2FHuqdkdL6fA6uttX6RhcI8sfkV6GbZkYt2Vrt5PYGx3pYg6YXkl4jzVGDgzG3KwBG3cd3y2yXgYHfbEzXf4PCTlmixv%2Fo1FsYKyThHiAwbCDIPxpSqkR06rrNEVBES1YrbjX03QVkwRtkgdMcQwhxPEy2nDFuSS2BzlBQy&X-Amz-Signature=ef1ab84b653e2c4b026ce0ab56ae63540e91607599cd93d7c6a16c4d92a7bc21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQ7YVE6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDr%2Bs1iLyKsOwlDSKdE21jwElzOWQsBN%2BbOVrBmNI3vsgIgUAYp5LR%2B3Gw57VJgEw9kuOFswUXLIFj4XaHhQItin2Eq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCLSdWvhAgGVu%2FD1FSrcA6sBwJ5PHQTJp%2FFRdUiYYdeXNfemrRCaN5WXWC1eaQA6mjHKHta20NRlyH%2ByDSmX%2FTC%2BemYj2lyfWcPUTClrPrhLF7V6DMaGC252qzeHnjjIJTC78f0Sy8W9DHmYDx6B7bk3MuRQHtBr%2B8YTbZ7qqXN020NopeZzPbPxaKu8sHTZNcVEVneFwyiPC0%2BFfoZc7gnXJPzMr%2FMMAKwvl24ZHWjEoSK00kgkAyX6xJgk3fsaUcPXpWTmGynR4GHJoZdUCrkoF5zAcEcewCtPyt2BC7a%2FLZimNUTlL00mFKuhITyRQJChQRkFxD6Y8OTKcqWtevMgzAxH1uS5TGnuzn3z6luj1JI3%2F%2BlBn7s2KkJyJQPg93jSecDnEzFxxZcOKV7nWTRL6uAwdWOoXiPZ0TL600E54l3qlDqE2%2BvmYvx%2BYXcFNpDq4jIyzraL42SohfWAu8Wo8Sxf92zO%2BkibRfxk%2BN%2BG0h0onAArryFkoaE5SNK%2B9tqDD7N55si0W7EP67PZS5XmzS1pjF9nXYi%2BOyTEG1BlDS0XJEzp7PkMLAkjuSgIw%2BhSHUA%2FQbfPbYNPerIFr10eEpGLmT1KKUcLQ3q53RZr%2BgBj5ctG8dpHBzmOInNKVXC0EZJX%2BLTeiRRmMJTOw8QGOqUBSZqN%2Bk96cEa18St%2Bf%2FT%2FD5bYEYLGZOJOJDoFRzh8gZeCi3jrmAJQGbWomSiluswI6fydba14n%2FBWcmwxClOG%2Bh8%2FcU2ehzMqJD6t%2BoaU1qVsiMWxqxhI0KlcXQxF1Jprbe5m4nsukD10zhX2j%2BARZmzRuyouTX3%2FW8W5oL0BLiCAktYpmi59Rv3OkZYUmdOip%2F1WA1MRVC5i24VsGnzXKHP%2BdYmz&X-Amz-Signature=94f608ef2e4724413e5a3531a709d867e24e071a556c1ee84be550a9ee421768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XMBCJ4S%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCX9Ql%2Fmqzt4XSX%2BlAZ4sYbMJURyQMYsfB4tVA%2BmD0MQAIgAbHHQl1fJqBcb2e43WLBuViLLkqv9MpGT3%2BFVXUXTvUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDL%2FBWAQL2iPEt7emeCrcA185fV2M78g5l%2FZjO7D8nYC%2B9dZuNqZPUasb23pCNePorQu0u1vlGA8E4L4WHTdunBkVCTU5Kqm05MvjP0ipgf7NA80jL0Fsa5dazARa%2FPpBcwch8uwO4PlMGL4Wk9Pp79WFoOtomx%2F5fm0yt9HqaUI9hNtsRqYrrSVoqawawMLOsgLQd56dYOfOHMP2FdnmgxQ2fxary2A1fYDKo7%2BMtwCPWqyPvxC4up%2BmQN3jQD2wBYDIRU7Lcfzksq5Hsx13JqPzHJh2KUMncdL%2FIPF9%2B8Onz2k1Q1Fum1wLn5rZW%2BpPbZZebq2%2FLolO44ES3D6uRpZnl7CHUCFPE6glBQujTco%2FzlUbPvZSGCs09wYCx4nuz9x1I3ZPzPwkQwOnb8%2FpK%2Bxrq0tpozHKQuL6wqBzYdjtszQcxPu%2BxwJ2pDbMkvUwPPemB4Cq6IFS7LNQL3MZ0FZJwk9%2BYBEO6eXIcGAz6Dihh9azozS%2Fyx%2FcP60wRVrAOk5nq85KJ%2BhlTgXB88QGydw2KPerXpAw0P4RPDwdxoE%2FQHFl0TVJrqhOdT9prOaAutIwkH%2FvsIH0e1lwf5wxRSleCqWZLTB4TfRKsD8eZIwRjKH3U%2BpMZx5uxZYiHws1WHX6aPTyaPofH3AFMMXOw8QGOqUBGczvTNLIybAAIG29t1IUusDuVJ%2BET4ps72QTMXhswdqb%2BPXzd9Knsvc8VEqgnA03fUEepkMd3eeiV0TJtEDbjYE%2BQg8mK7R5Up8laeJW9j3lLUDZhbdPfka5Eg0Rj3wzw4tkbBzQ2GjxNkODSN1MWcUZ7LTKHuDGX%2BYRrItyny735Bc%2Bf7siAe2Xl%2B9GMxdCbqb47vVfotH5F1gJ%2FTh1r0d87JYd&X-Amz-Signature=a6f8ee104326c3c5e5c1976c1f09c219e6777b1acc09ebaf83a384f7fcb59b55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5JYJVHC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCiOwYqjTwlT3nnylA0GZYiq5bMepEvtHG56RLAoA5EowIgS6BB7wh6XSsuUimFKGyCTzjjZ9tkxNjaP0kZyDb461Eq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJard3U6E3fg06FdGCrcA2ii%2Be%2BMxZHmTfSIrPNu%2FStyvxXcZo6TaB1eAkrAKPoa8vX2xzCVi7Ji2tH6ZgGTBZgRsoA9vv35kGEGPwWpPFF2DGlBBFCm2mw%2Fze%2F9xHHZemsfD5vqnLx7fvSWuN90U6VKOAks%2Fieqv5%2Fl%2F91bsZkGXRwIiw0OUdN6%2BPpQe7LQPp5l1jaCZPtMHsuOAeaAWWQvyDc4AWGlepcMAPFdDlLYctKmz5AzJgjTUCUiCcG53ZLIvO7P8IJ9Ycru3qe5k4CxjVB9KyLpkfYV9HEOcopcs3fNJ3JcYOgkO3qpFO0kHcBJQxKaY4k4RJ8bAgcFjMqsf1VWQnWhlnVTetKgYNYHrrgDLElKSudEIwdzLQqS0ls4M3cyeQ8xyYk1id7ScbOoMjJOBS0TLqsJhixXB7WAVdt%2B396w5%2F5sEQzkkVYI2VI9Iz1TXA2045avox9ylotq9qYbZ4C3YTezswcACP9yKS0z%2F6Et9VU5vZG6EHH0oqOCOy8sHZzkWYrwaOtam3F4wjkk4cmK%2BXYPLQQzTJ3XPJPYnYmyjqcmZvRQVTdW9hgtMvnSlKX4mxr68tm1qiuh5pR5giqsBOdYvkoM0Lvi0KPenXvW6LYM94u0SS0ywS2%2FSHA8pThxdy8uMK%2FOw8QGOqUBGsz6H6oVt1bvh3dyHhFMwpkI0qMIWTik5iujd9cz4y%2FH2kxk5PrDwYiTubs84qVVaj4ODM9zRWWTZolILqyaFEcZooVdG1CPU25IGjHc9DukZG%2F1p7OroZ8SRz5oCB546exiomj9Ab9Dmtd4KKjbsBlO0ckXQirqvTuFF25q5%2FXZK6rHtIm5xHcZq%2FygiRMgrbFs0KdnTGUflDR4tDsc9n9hMSIW&X-Amz-Signature=975be381cf0d6c20ff026c55b82468a7f2eaedc56705ed2d5476770fea90c1cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NWBTNN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2FcmiN%2F2X3G6aqNG2KhU%2FgGBninE%2FViWDzmfXDkvLFOAiEAhUZMYWeQAjvhx9q%2BvYsQ8N8RqFQuyI%2BIDPn9BnWopbsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDTyP991MXNtEfR79CrcAwbtqtnadLsSnDwab%2BjiCMNoEfTG7kyC0AgzZttdlx1bxcb435A3v4QAJXQ3z13jDw2teVWDQeOxvPMeiMcfJpw3HNvakuxdkrizv%2BnWTPoH4pagHoW1B5pcrk55LcKNuG4zsNykcohgru%2Bc6AuuRwcFsQ5EL%2FEpODtKYWRNdFIW4ZAcMpR4TLQCcelAy6%2FDOYadPYXXTEdjYb9FxwDkZMA3TVWu5fG84MJ%2FiRckl54U7foFTKkEpRc1g4mcZQ3b3VGjPu4x8BFPU2Vlsv3c0N4PE%2F2X5DP6aEXTBUuj9gOpj0o%2BLpx4IspMnzR6bZrSzqRA3WogfomCyYpyHugStLQo0HVWcAK5UCpflJsWbDEJAU2VfvLcACaJRJ23Q84RYHYFoJgqW3qluTyM7BdxMkllJDmHl87VcWXbivm2bmluuzQKvr%2FwZJxwIBMXtXyIhdFBCt4q5jsebCUeuBSLDp5%2BS1grYejdPpBqK83mvyzpTLOqM%2FxuUEy3YSfAqdVFoEEmyR2qoEaORuTOmlP5UrdD86nKf9FMXC1f%2FuQ7cyfIxR7Z%2FqcuvxYdSMpl71GPxFJuSz38125kPgWjUDXV3jeqptYvNghC3TgbVcL8%2FIsCdYSJU3wO%2BpI%2B6g%2B0MK7Ow8QGOqUBjyfx4Lg0a%2BwN6RG06YfadNFEZIIPZ9xMvoaW7EB3IB74a%2BrFuTbDfIJPfMN1A4pvIW6JlQRgunQCPEC3OfZcVS2HZ82D%2BenZ1yhatdJhCtK4bT5aAM%2F%2F6G0MbNJvWth9YqbUe5%2FKv9jbQ8Wd4Hxl7C2Oyr3qYPzOkoYPLZRaD%2B9Foz%2Bde22tNawnbIYIbX%2B0EX%2B%2F7adYCLkCmm9AFFJyb22cBgYG&X-Amz-Signature=7c617704263e5218ceae3c7132d9c800cd72574dd042f8537b6e3e4b7bf05dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G72QEBB%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD5OWwgstMYKflVVp8xgc%2FJpGXUgz4Oii7w5ILoNck7%2BAIgSNzuij7KYJGCsy7oV5v%2BhqcvUbvtdF8zQ1JQ45dg34wq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDN3WHLlxU1J%2FZh%2F%2FmSrcA%2BJohm1axctt%2FUcYqjbVDRFsiVU4gO8kUmDVKoOSn9nJ%2B24juMNrO4PRbYufVnHTOZJYBqkktdshrpEA86uclKoTUNqLPNmcCkYm3ZhMPhTfJYNb6LW%2FnFaXiWbYsuXcGT4JRYFaeMukXIspukbeY57p56Z48aNGH3%2FqdOlkkv8EuF%2F5gAKRfWE2VcXmGL9y%2FntlJKvqTaTVi7tb%2FCZWq4BG8XA1oCNOhAnPislxLpAUURWgb0mj%2F%2F8U0UfWT6Dmpx0dDgGDoXNPY73GOZhemysP8%2BcvUw3y7bcjb%2FZe7bjUdzINtGsH2nIZGUGD9NqkGSF7zzKVSz%2F3WU1e04L5BOCQZONWki%2BUzgN9jysWNDg3%2B6KWngBu3wEOB8R507HzYD1VHLpE2xo7we5xLWI34jOHxMeQ2a903uj0O80wVAGytzTI5c3mWlDmQrYqw765timFzd2%2FNryWLBaAtdGvnEXZ8KHQ21WOA2CNk0j4IoRaoTSpi7MkohLerXbmHawZONMbCgPai5Va3U7nEwyU3oxEmNoil%2BhSiZLsHoubggwcLbrrwB56xWhrrJF66vP3GuovX6W3ZxrnENdJ8d7zlxkcP%2F1HkkCbn4BL%2F3K5E3ItYMQoQn%2BjKAh8q6n%2BMKnOw8QGOqUBqXPXJ0jRfqY0YMeWJAUovNYYfcdlab5gECw90noJ31PkNCh4daL4BsqCGT47d9g%2Bv9TGpYHG%2BU4uKRRgwcWSlRNDbrGaYNzaDo3uqc19%2BED9eu3Sz883qcojcm%2F9eDAaviHbJpth%2Beyz2VTfMSoaQZ%2F2lgPPs0IbdKU1KHlOPqbmpDKmcC6lq4o9zsMcyliJN1ultmT0kB6Cq0QjA8pp8ORuWWF%2F&X-Amz-Signature=9a4cd8542e28877f267b41c8fcab9b297a17a7bc0c219538e7f492a4804c19bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4SYP4CS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCLg76p4jRVlXn9uOTWPvkXywWjP3%2BxjsmezdiQohWxRwIgF7dHpKDxDZ5aE%2BsmvVTDdt0mr%2FC4WdTS2lslI1Zzu9gq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDvqEIfa9R4VFUPqmSrcA2UbltU4upbQRClFS3ar6go0pCJFmlLf9F27swwh07SweZB8s2RSDB19dBiUpzv9UM0jXst3QuB2b%2B43pSdis6wZIes2%2BexjYSLqyYQVJdPfWuy4lkccSs%2F5sPzpGF89cvA286H8GEwjFbKJ1k8I3ZhArE66FppNWQFSaN53NwNHiji9mhgLgvKu%2FSIbXNFIvCoq%2BWl%2BQkuVjcIJY8TbCypALu9jT6lUB17p1vNBGcFMlU9Txxmi5IeD68lazxnBqp4KqVp95tTet4zYUYFm5w3Z%2Bq70HTSFAcP7kBGtDauF%2Fbz%2FGnuwvj%2BqJlGP27aPJyHeZIWZiL%2F9qXwl5bEoH46iPNfB8WRP%2FlOcMs27P0IbmBDCWS%2Bgq0HHsZloxw3BSgmb1vCvTivMzHjCX%2FQ4n4pNbOcfsYEUTQqNINQA6JK7bvo%2BMJDtfRFpLPGomATQYa8Db51TYVpoRUT9whjzld%2FjgW29QjRgsJp0wfixjCbsF5u6RYk6UhooXYGOcbZg8guiDDrF1%2Fh4Zki6EW1cpnCKoy5dlU3%2FVb%2FK8QW5QSGzL20fdE7UAX1iz0CHqV7osRcf8CiwRkTuZ03zctAUhDPbaZPIrCZxE9lKjLv0CWsuBOnn3WfvclKya%2FrwMJLOw8QGOqUBqJ1UmGZ9%2BsrAUUX3jjwl%2Buy%2FrJ6BJSteKUaQre%2Bp2VzAZyLkGsLoMeq8wpJxldpBQNgnkRXVwa0bF11eJps7SeaOzBJqLTebwd9QOYQVx6v1IS6BMiz0Dors9f3aB%2BKGvIJEZC4ImZ4loKYQWbxT2ZoPYMhevMYA8FES1fWcW1HUNS0Bjqp7SYHdg9HGs2Rl04kL2Maoul5385vSf4Ruk2N8mcDL&X-Amz-Signature=3364a4364b0064b19c4fc07fa72b39cfcee8d11539a662b4834a4e083c32d059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQ7YVE6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDr%2Bs1iLyKsOwlDSKdE21jwElzOWQsBN%2BbOVrBmNI3vsgIgUAYp5LR%2B3Gw57VJgEw9kuOFswUXLIFj4XaHhQItin2Eq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCLSdWvhAgGVu%2FD1FSrcA6sBwJ5PHQTJp%2FFRdUiYYdeXNfemrRCaN5WXWC1eaQA6mjHKHta20NRlyH%2ByDSmX%2FTC%2BemYj2lyfWcPUTClrPrhLF7V6DMaGC252qzeHnjjIJTC78f0Sy8W9DHmYDx6B7bk3MuRQHtBr%2B8YTbZ7qqXN020NopeZzPbPxaKu8sHTZNcVEVneFwyiPC0%2BFfoZc7gnXJPzMr%2FMMAKwvl24ZHWjEoSK00kgkAyX6xJgk3fsaUcPXpWTmGynR4GHJoZdUCrkoF5zAcEcewCtPyt2BC7a%2FLZimNUTlL00mFKuhITyRQJChQRkFxD6Y8OTKcqWtevMgzAxH1uS5TGnuzn3z6luj1JI3%2F%2BlBn7s2KkJyJQPg93jSecDnEzFxxZcOKV7nWTRL6uAwdWOoXiPZ0TL600E54l3qlDqE2%2BvmYvx%2BYXcFNpDq4jIyzraL42SohfWAu8Wo8Sxf92zO%2BkibRfxk%2BN%2BG0h0onAArryFkoaE5SNK%2B9tqDD7N55si0W7EP67PZS5XmzS1pjF9nXYi%2BOyTEG1BlDS0XJEzp7PkMLAkjuSgIw%2BhSHUA%2FQbfPbYNPerIFr10eEpGLmT1KKUcLQ3q53RZr%2BgBj5ctG8dpHBzmOInNKVXC0EZJX%2BLTeiRRmMJTOw8QGOqUBSZqN%2Bk96cEa18St%2Bf%2FT%2FD5bYEYLGZOJOJDoFRzh8gZeCi3jrmAJQGbWomSiluswI6fydba14n%2FBWcmwxClOG%2Bh8%2FcU2ehzMqJD6t%2BoaU1qVsiMWxqxhI0KlcXQxF1Jprbe5m4nsukD10zhX2j%2BARZmzRuyouTX3%2FW8W5oL0BLiCAktYpmi59Rv3OkZYUmdOip%2F1WA1MRVC5i24VsGnzXKHP%2BdYmz&X-Amz-Signature=d48167db896516bd254490f8deb30bc045c925ac872befe50600f5dae0953ca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQ7YVE6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDr%2Bs1iLyKsOwlDSKdE21jwElzOWQsBN%2BbOVrBmNI3vsgIgUAYp5LR%2B3Gw57VJgEw9kuOFswUXLIFj4XaHhQItin2Eq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCLSdWvhAgGVu%2FD1FSrcA6sBwJ5PHQTJp%2FFRdUiYYdeXNfemrRCaN5WXWC1eaQA6mjHKHta20NRlyH%2ByDSmX%2FTC%2BemYj2lyfWcPUTClrPrhLF7V6DMaGC252qzeHnjjIJTC78f0Sy8W9DHmYDx6B7bk3MuRQHtBr%2B8YTbZ7qqXN020NopeZzPbPxaKu8sHTZNcVEVneFwyiPC0%2BFfoZc7gnXJPzMr%2FMMAKwvl24ZHWjEoSK00kgkAyX6xJgk3fsaUcPXpWTmGynR4GHJoZdUCrkoF5zAcEcewCtPyt2BC7a%2FLZimNUTlL00mFKuhITyRQJChQRkFxD6Y8OTKcqWtevMgzAxH1uS5TGnuzn3z6luj1JI3%2F%2BlBn7s2KkJyJQPg93jSecDnEzFxxZcOKV7nWTRL6uAwdWOoXiPZ0TL600E54l3qlDqE2%2BvmYvx%2BYXcFNpDq4jIyzraL42SohfWAu8Wo8Sxf92zO%2BkibRfxk%2BN%2BG0h0onAArryFkoaE5SNK%2B9tqDD7N55si0W7EP67PZS5XmzS1pjF9nXYi%2BOyTEG1BlDS0XJEzp7PkMLAkjuSgIw%2BhSHUA%2FQbfPbYNPerIFr10eEpGLmT1KKUcLQ3q53RZr%2BgBj5ctG8dpHBzmOInNKVXC0EZJX%2BLTeiRRmMJTOw8QGOqUBSZqN%2Bk96cEa18St%2Bf%2FT%2FD5bYEYLGZOJOJDoFRzh8gZeCi3jrmAJQGbWomSiluswI6fydba14n%2FBWcmwxClOG%2Bh8%2FcU2ehzMqJD6t%2BoaU1qVsiMWxqxhI0KlcXQxF1Jprbe5m4nsukD10zhX2j%2BARZmzRuyouTX3%2FW8W5oL0BLiCAktYpmi59Rv3OkZYUmdOip%2F1WA1MRVC5i24VsGnzXKHP%2BdYmz&X-Amz-Signature=de003c684568bc0e3f4e99c07ee5e1ebc49db0351157f1c9fa88126225d0d670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IYEM6EZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCKkEPjl%2B2VhQWUdVNyY4PzB0MGqHasDuwNOXz%2BGYgPrAIgftGulRCAqFKQZyP7Dp2Asoztkw1Mczo9fIVG7HbQsFoq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJlDQA07ur0gxByYjircA4SrcTh7c75TdkGaLxMVEZsB1vzTUNFFXMRv3uFnVpzHdTPRtfZ5InMf3FOw9FnKTS7Q6AbgOxpv%2BCF0hVEhvMyNqJKuZ2YtlIEPDzOXEYriJ0KAl2K9tIG43FnqxCV8ytP3%2BQDJg6TUnPQ9VOgWhhFOxwNrtgVrTnk8n9LH2BrxkqFGO6J%2BxI9JUfsdIBYiZPVZxSIvbu4xyZnQcwIuom%2FscJb1HdQ%2FtaQwtc8UoFvZjtThzXwhJfHZVhoVBZyV5VfWjIHjiamKsOo8aMuCuDybL2UiVGgp4wFCA3Qby2ZErufFXILLjRzAYdnFFUIbmLfR8abMBv9HJ7Aj3D5fU6oZCCahfrfIAmUWE81JDqOz49XoKmEav72p14h72ej%2FaurcnYYV4c3HN1oWM6lGfeDsGJVxZSUozr2OzwOI8F99i80WCXRIa%2FKNVUh4WjbHKnE0dCAtIHYIuN6YtE7HxfCMJghoEuq%2BlxFz6g2zr2%2BSa%2ByC1pfwPKjkFO9th6pxxivwtO6P%2B3uQxLvkZ70CYx4T06P5umwkr0MBgMSKcrauqWg0wWX8RnDUPyQpy3ZttpMTu3bbIM6QLW31a8UHMAOC1qLmpmfoqWLj3ryEPLOTtduovhB%2Ffnj6ivw5MKXOw8QGOqUBBRtWDIt3sKJDsU96HI6ybS2%2B16BsS8PLdNSg1767u3%2FL0pikZ31eiMM39KO4gS4ViPRnyG9r1VRY1PmS4EjyPiJqFW2dpKNzM0JoahzkxyichWKR6u%2BAGl9Y0uJbM3xVBsLoqj1XB8tBsKmP5nyDGhDEZTeH9xXedu%2BD3VRbw%2FDf6yRvX4cIzhXMLAzf5AjAwQkAf%2Bc4MJe5hsnTaVZsEbLHykaX&X-Amz-Signature=2b045aa44f9bab59ab4c74d5261e79238bceaab0df00108626f82bec48c4740e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IYEM6EZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCKkEPjl%2B2VhQWUdVNyY4PzB0MGqHasDuwNOXz%2BGYgPrAIgftGulRCAqFKQZyP7Dp2Asoztkw1Mczo9fIVG7HbQsFoq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJlDQA07ur0gxByYjircA4SrcTh7c75TdkGaLxMVEZsB1vzTUNFFXMRv3uFnVpzHdTPRtfZ5InMf3FOw9FnKTS7Q6AbgOxpv%2BCF0hVEhvMyNqJKuZ2YtlIEPDzOXEYriJ0KAl2K9tIG43FnqxCV8ytP3%2BQDJg6TUnPQ9VOgWhhFOxwNrtgVrTnk8n9LH2BrxkqFGO6J%2BxI9JUfsdIBYiZPVZxSIvbu4xyZnQcwIuom%2FscJb1HdQ%2FtaQwtc8UoFvZjtThzXwhJfHZVhoVBZyV5VfWjIHjiamKsOo8aMuCuDybL2UiVGgp4wFCA3Qby2ZErufFXILLjRzAYdnFFUIbmLfR8abMBv9HJ7Aj3D5fU6oZCCahfrfIAmUWE81JDqOz49XoKmEav72p14h72ej%2FaurcnYYV4c3HN1oWM6lGfeDsGJVxZSUozr2OzwOI8F99i80WCXRIa%2FKNVUh4WjbHKnE0dCAtIHYIuN6YtE7HxfCMJghoEuq%2BlxFz6g2zr2%2BSa%2ByC1pfwPKjkFO9th6pxxivwtO6P%2B3uQxLvkZ70CYx4T06P5umwkr0MBgMSKcrauqWg0wWX8RnDUPyQpy3ZttpMTu3bbIM6QLW31a8UHMAOC1qLmpmfoqWLj3ryEPLOTtduovhB%2Ffnj6ivw5MKXOw8QGOqUBBRtWDIt3sKJDsU96HI6ybS2%2B16BsS8PLdNSg1767u3%2FL0pikZ31eiMM39KO4gS4ViPRnyG9r1VRY1PmS4EjyPiJqFW2dpKNzM0JoahzkxyichWKR6u%2BAGl9Y0uJbM3xVBsLoqj1XB8tBsKmP5nyDGhDEZTeH9xXedu%2BD3VRbw%2FDf6yRvX4cIzhXMLAzf5AjAwQkAf%2Bc4MJe5hsnTaVZsEbLHykaX&X-Amz-Signature=6647b9aea9f3a389b49c359362675add61815181823bf6db6a540037b6364183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IYEM6EZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCKkEPjl%2B2VhQWUdVNyY4PzB0MGqHasDuwNOXz%2BGYgPrAIgftGulRCAqFKQZyP7Dp2Asoztkw1Mczo9fIVG7HbQsFoq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJlDQA07ur0gxByYjircA4SrcTh7c75TdkGaLxMVEZsB1vzTUNFFXMRv3uFnVpzHdTPRtfZ5InMf3FOw9FnKTS7Q6AbgOxpv%2BCF0hVEhvMyNqJKuZ2YtlIEPDzOXEYriJ0KAl2K9tIG43FnqxCV8ytP3%2BQDJg6TUnPQ9VOgWhhFOxwNrtgVrTnk8n9LH2BrxkqFGO6J%2BxI9JUfsdIBYiZPVZxSIvbu4xyZnQcwIuom%2FscJb1HdQ%2FtaQwtc8UoFvZjtThzXwhJfHZVhoVBZyV5VfWjIHjiamKsOo8aMuCuDybL2UiVGgp4wFCA3Qby2ZErufFXILLjRzAYdnFFUIbmLfR8abMBv9HJ7Aj3D5fU6oZCCahfrfIAmUWE81JDqOz49XoKmEav72p14h72ej%2FaurcnYYV4c3HN1oWM6lGfeDsGJVxZSUozr2OzwOI8F99i80WCXRIa%2FKNVUh4WjbHKnE0dCAtIHYIuN6YtE7HxfCMJghoEuq%2BlxFz6g2zr2%2BSa%2ByC1pfwPKjkFO9th6pxxivwtO6P%2B3uQxLvkZ70CYx4T06P5umwkr0MBgMSKcrauqWg0wWX8RnDUPyQpy3ZttpMTu3bbIM6QLW31a8UHMAOC1qLmpmfoqWLj3ryEPLOTtduovhB%2Ffnj6ivw5MKXOw8QGOqUBBRtWDIt3sKJDsU96HI6ybS2%2B16BsS8PLdNSg1767u3%2FL0pikZ31eiMM39KO4gS4ViPRnyG9r1VRY1PmS4EjyPiJqFW2dpKNzM0JoahzkxyichWKR6u%2BAGl9Y0uJbM3xVBsLoqj1XB8tBsKmP5nyDGhDEZTeH9xXedu%2BD3VRbw%2FDf6yRvX4cIzhXMLAzf5AjAwQkAf%2Bc4MJe5hsnTaVZsEbLHykaX&X-Amz-Signature=af1e24e20c078bd4388db1f03b9775ac0f3751ca3a5300935882dc5107f32b27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IYEM6EZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCKkEPjl%2B2VhQWUdVNyY4PzB0MGqHasDuwNOXz%2BGYgPrAIgftGulRCAqFKQZyP7Dp2Asoztkw1Mczo9fIVG7HbQsFoq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJlDQA07ur0gxByYjircA4SrcTh7c75TdkGaLxMVEZsB1vzTUNFFXMRv3uFnVpzHdTPRtfZ5InMf3FOw9FnKTS7Q6AbgOxpv%2BCF0hVEhvMyNqJKuZ2YtlIEPDzOXEYriJ0KAl2K9tIG43FnqxCV8ytP3%2BQDJg6TUnPQ9VOgWhhFOxwNrtgVrTnk8n9LH2BrxkqFGO6J%2BxI9JUfsdIBYiZPVZxSIvbu4xyZnQcwIuom%2FscJb1HdQ%2FtaQwtc8UoFvZjtThzXwhJfHZVhoVBZyV5VfWjIHjiamKsOo8aMuCuDybL2UiVGgp4wFCA3Qby2ZErufFXILLjRzAYdnFFUIbmLfR8abMBv9HJ7Aj3D5fU6oZCCahfrfIAmUWE81JDqOz49XoKmEav72p14h72ej%2FaurcnYYV4c3HN1oWM6lGfeDsGJVxZSUozr2OzwOI8F99i80WCXRIa%2FKNVUh4WjbHKnE0dCAtIHYIuN6YtE7HxfCMJghoEuq%2BlxFz6g2zr2%2BSa%2ByC1pfwPKjkFO9th6pxxivwtO6P%2B3uQxLvkZ70CYx4T06P5umwkr0MBgMSKcrauqWg0wWX8RnDUPyQpy3ZttpMTu3bbIM6QLW31a8UHMAOC1qLmpmfoqWLj3ryEPLOTtduovhB%2Ffnj6ivw5MKXOw8QGOqUBBRtWDIt3sKJDsU96HI6ybS2%2B16BsS8PLdNSg1767u3%2FL0pikZ31eiMM39KO4gS4ViPRnyG9r1VRY1PmS4EjyPiJqFW2dpKNzM0JoahzkxyichWKR6u%2BAGl9Y0uJbM3xVBsLoqj1XB8tBsKmP5nyDGhDEZTeH9xXedu%2BD3VRbw%2FDf6yRvX4cIzhXMLAzf5AjAwQkAf%2Bc4MJe5hsnTaVZsEbLHykaX&X-Amz-Signature=0694f78450bf059b51c517507cc2cee729dde18bb0362e92ec89d5723121f38b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IYEM6EZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCKkEPjl%2B2VhQWUdVNyY4PzB0MGqHasDuwNOXz%2BGYgPrAIgftGulRCAqFKQZyP7Dp2Asoztkw1Mczo9fIVG7HbQsFoq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJlDQA07ur0gxByYjircA4SrcTh7c75TdkGaLxMVEZsB1vzTUNFFXMRv3uFnVpzHdTPRtfZ5InMf3FOw9FnKTS7Q6AbgOxpv%2BCF0hVEhvMyNqJKuZ2YtlIEPDzOXEYriJ0KAl2K9tIG43FnqxCV8ytP3%2BQDJg6TUnPQ9VOgWhhFOxwNrtgVrTnk8n9LH2BrxkqFGO6J%2BxI9JUfsdIBYiZPVZxSIvbu4xyZnQcwIuom%2FscJb1HdQ%2FtaQwtc8UoFvZjtThzXwhJfHZVhoVBZyV5VfWjIHjiamKsOo8aMuCuDybL2UiVGgp4wFCA3Qby2ZErufFXILLjRzAYdnFFUIbmLfR8abMBv9HJ7Aj3D5fU6oZCCahfrfIAmUWE81JDqOz49XoKmEav72p14h72ej%2FaurcnYYV4c3HN1oWM6lGfeDsGJVxZSUozr2OzwOI8F99i80WCXRIa%2FKNVUh4WjbHKnE0dCAtIHYIuN6YtE7HxfCMJghoEuq%2BlxFz6g2zr2%2BSa%2ByC1pfwPKjkFO9th6pxxivwtO6P%2B3uQxLvkZ70CYx4T06P5umwkr0MBgMSKcrauqWg0wWX8RnDUPyQpy3ZttpMTu3bbIM6QLW31a8UHMAOC1qLmpmfoqWLj3ryEPLOTtduovhB%2Ffnj6ivw5MKXOw8QGOqUBBRtWDIt3sKJDsU96HI6ybS2%2B16BsS8PLdNSg1767u3%2FL0pikZ31eiMM39KO4gS4ViPRnyG9r1VRY1PmS4EjyPiJqFW2dpKNzM0JoahzkxyichWKR6u%2BAGl9Y0uJbM3xVBsLoqj1XB8tBsKmP5nyDGhDEZTeH9xXedu%2BD3VRbw%2FDf6yRvX4cIzhXMLAzf5AjAwQkAf%2Bc4MJe5hsnTaVZsEbLHykaX&X-Amz-Signature=b12368be91a3ff19e1be2f9b7eebe6d629dfffee40a953e0ffb04e67db255136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IYEM6EZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCKkEPjl%2B2VhQWUdVNyY4PzB0MGqHasDuwNOXz%2BGYgPrAIgftGulRCAqFKQZyP7Dp2Asoztkw1Mczo9fIVG7HbQsFoq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJlDQA07ur0gxByYjircA4SrcTh7c75TdkGaLxMVEZsB1vzTUNFFXMRv3uFnVpzHdTPRtfZ5InMf3FOw9FnKTS7Q6AbgOxpv%2BCF0hVEhvMyNqJKuZ2YtlIEPDzOXEYriJ0KAl2K9tIG43FnqxCV8ytP3%2BQDJg6TUnPQ9VOgWhhFOxwNrtgVrTnk8n9LH2BrxkqFGO6J%2BxI9JUfsdIBYiZPVZxSIvbu4xyZnQcwIuom%2FscJb1HdQ%2FtaQwtc8UoFvZjtThzXwhJfHZVhoVBZyV5VfWjIHjiamKsOo8aMuCuDybL2UiVGgp4wFCA3Qby2ZErufFXILLjRzAYdnFFUIbmLfR8abMBv9HJ7Aj3D5fU6oZCCahfrfIAmUWE81JDqOz49XoKmEav72p14h72ej%2FaurcnYYV4c3HN1oWM6lGfeDsGJVxZSUozr2OzwOI8F99i80WCXRIa%2FKNVUh4WjbHKnE0dCAtIHYIuN6YtE7HxfCMJghoEuq%2BlxFz6g2zr2%2BSa%2ByC1pfwPKjkFO9th6pxxivwtO6P%2B3uQxLvkZ70CYx4T06P5umwkr0MBgMSKcrauqWg0wWX8RnDUPyQpy3ZttpMTu3bbIM6QLW31a8UHMAOC1qLmpmfoqWLj3ryEPLOTtduovhB%2Ffnj6ivw5MKXOw8QGOqUBBRtWDIt3sKJDsU96HI6ybS2%2B16BsS8PLdNSg1767u3%2FL0pikZ31eiMM39KO4gS4ViPRnyG9r1VRY1PmS4EjyPiJqFW2dpKNzM0JoahzkxyichWKR6u%2BAGl9Y0uJbM3xVBsLoqj1XB8tBsKmP5nyDGhDEZTeH9xXedu%2BD3VRbw%2FDf6yRvX4cIzhXMLAzf5AjAwQkAf%2Bc4MJe5hsnTaVZsEbLHykaX&X-Amz-Signature=b4aa16bb6d4943fbc9a3a0d492b79c86b5c2c3d3283ec9508a48216b25423cc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IYEM6EZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCKkEPjl%2B2VhQWUdVNyY4PzB0MGqHasDuwNOXz%2BGYgPrAIgftGulRCAqFKQZyP7Dp2Asoztkw1Mczo9fIVG7HbQsFoq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJlDQA07ur0gxByYjircA4SrcTh7c75TdkGaLxMVEZsB1vzTUNFFXMRv3uFnVpzHdTPRtfZ5InMf3FOw9FnKTS7Q6AbgOxpv%2BCF0hVEhvMyNqJKuZ2YtlIEPDzOXEYriJ0KAl2K9tIG43FnqxCV8ytP3%2BQDJg6TUnPQ9VOgWhhFOxwNrtgVrTnk8n9LH2BrxkqFGO6J%2BxI9JUfsdIBYiZPVZxSIvbu4xyZnQcwIuom%2FscJb1HdQ%2FtaQwtc8UoFvZjtThzXwhJfHZVhoVBZyV5VfWjIHjiamKsOo8aMuCuDybL2UiVGgp4wFCA3Qby2ZErufFXILLjRzAYdnFFUIbmLfR8abMBv9HJ7Aj3D5fU6oZCCahfrfIAmUWE81JDqOz49XoKmEav72p14h72ej%2FaurcnYYV4c3HN1oWM6lGfeDsGJVxZSUozr2OzwOI8F99i80WCXRIa%2FKNVUh4WjbHKnE0dCAtIHYIuN6YtE7HxfCMJghoEuq%2BlxFz6g2zr2%2BSa%2ByC1pfwPKjkFO9th6pxxivwtO6P%2B3uQxLvkZ70CYx4T06P5umwkr0MBgMSKcrauqWg0wWX8RnDUPyQpy3ZttpMTu3bbIM6QLW31a8UHMAOC1qLmpmfoqWLj3ryEPLOTtduovhB%2Ffnj6ivw5MKXOw8QGOqUBBRtWDIt3sKJDsU96HI6ybS2%2B16BsS8PLdNSg1767u3%2FL0pikZ31eiMM39KO4gS4ViPRnyG9r1VRY1PmS4EjyPiJqFW2dpKNzM0JoahzkxyichWKR6u%2BAGl9Y0uJbM3xVBsLoqj1XB8tBsKmP5nyDGhDEZTeH9xXedu%2BD3VRbw%2FDf6yRvX4cIzhXMLAzf5AjAwQkAf%2Bc4MJe5hsnTaVZsEbLHykaX&X-Amz-Signature=af1e24e20c078bd4388db1f03b9775ac0f3751ca3a5300935882dc5107f32b27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IYEM6EZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCKkEPjl%2B2VhQWUdVNyY4PzB0MGqHasDuwNOXz%2BGYgPrAIgftGulRCAqFKQZyP7Dp2Asoztkw1Mczo9fIVG7HbQsFoq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJlDQA07ur0gxByYjircA4SrcTh7c75TdkGaLxMVEZsB1vzTUNFFXMRv3uFnVpzHdTPRtfZ5InMf3FOw9FnKTS7Q6AbgOxpv%2BCF0hVEhvMyNqJKuZ2YtlIEPDzOXEYriJ0KAl2K9tIG43FnqxCV8ytP3%2BQDJg6TUnPQ9VOgWhhFOxwNrtgVrTnk8n9LH2BrxkqFGO6J%2BxI9JUfsdIBYiZPVZxSIvbu4xyZnQcwIuom%2FscJb1HdQ%2FtaQwtc8UoFvZjtThzXwhJfHZVhoVBZyV5VfWjIHjiamKsOo8aMuCuDybL2UiVGgp4wFCA3Qby2ZErufFXILLjRzAYdnFFUIbmLfR8abMBv9HJ7Aj3D5fU6oZCCahfrfIAmUWE81JDqOz49XoKmEav72p14h72ej%2FaurcnYYV4c3HN1oWM6lGfeDsGJVxZSUozr2OzwOI8F99i80WCXRIa%2FKNVUh4WjbHKnE0dCAtIHYIuN6YtE7HxfCMJghoEuq%2BlxFz6g2zr2%2BSa%2ByC1pfwPKjkFO9th6pxxivwtO6P%2B3uQxLvkZ70CYx4T06P5umwkr0MBgMSKcrauqWg0wWX8RnDUPyQpy3ZttpMTu3bbIM6QLW31a8UHMAOC1qLmpmfoqWLj3ryEPLOTtduovhB%2Ffnj6ivw5MKXOw8QGOqUBBRtWDIt3sKJDsU96HI6ybS2%2B16BsS8PLdNSg1767u3%2FL0pikZ31eiMM39KO4gS4ViPRnyG9r1VRY1PmS4EjyPiJqFW2dpKNzM0JoahzkxyichWKR6u%2BAGl9Y0uJbM3xVBsLoqj1XB8tBsKmP5nyDGhDEZTeH9xXedu%2BD3VRbw%2FDf6yRvX4cIzhXMLAzf5AjAwQkAf%2Bc4MJe5hsnTaVZsEbLHykaX&X-Amz-Signature=f047897f9f7ef3c5677a0d6a9265ea3fb97209b9e5fdcf6676aabd31a0eeb7d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IYEM6EZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCKkEPjl%2B2VhQWUdVNyY4PzB0MGqHasDuwNOXz%2BGYgPrAIgftGulRCAqFKQZyP7Dp2Asoztkw1Mczo9fIVG7HbQsFoq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJlDQA07ur0gxByYjircA4SrcTh7c75TdkGaLxMVEZsB1vzTUNFFXMRv3uFnVpzHdTPRtfZ5InMf3FOw9FnKTS7Q6AbgOxpv%2BCF0hVEhvMyNqJKuZ2YtlIEPDzOXEYriJ0KAl2K9tIG43FnqxCV8ytP3%2BQDJg6TUnPQ9VOgWhhFOxwNrtgVrTnk8n9LH2BrxkqFGO6J%2BxI9JUfsdIBYiZPVZxSIvbu4xyZnQcwIuom%2FscJb1HdQ%2FtaQwtc8UoFvZjtThzXwhJfHZVhoVBZyV5VfWjIHjiamKsOo8aMuCuDybL2UiVGgp4wFCA3Qby2ZErufFXILLjRzAYdnFFUIbmLfR8abMBv9HJ7Aj3D5fU6oZCCahfrfIAmUWE81JDqOz49XoKmEav72p14h72ej%2FaurcnYYV4c3HN1oWM6lGfeDsGJVxZSUozr2OzwOI8F99i80WCXRIa%2FKNVUh4WjbHKnE0dCAtIHYIuN6YtE7HxfCMJghoEuq%2BlxFz6g2zr2%2BSa%2ByC1pfwPKjkFO9th6pxxivwtO6P%2B3uQxLvkZ70CYx4T06P5umwkr0MBgMSKcrauqWg0wWX8RnDUPyQpy3ZttpMTu3bbIM6QLW31a8UHMAOC1qLmpmfoqWLj3ryEPLOTtduovhB%2Ffnj6ivw5MKXOw8QGOqUBBRtWDIt3sKJDsU96HI6ybS2%2B16BsS8PLdNSg1767u3%2FL0pikZ31eiMM39KO4gS4ViPRnyG9r1VRY1PmS4EjyPiJqFW2dpKNzM0JoahzkxyichWKR6u%2BAGl9Y0uJbM3xVBsLoqj1XB8tBsKmP5nyDGhDEZTeH9xXedu%2BD3VRbw%2FDf6yRvX4cIzhXMLAzf5AjAwQkAf%2Bc4MJe5hsnTaVZsEbLHykaX&X-Amz-Signature=6515494391db0be9a85e8753efbf2233594d78c036ed8802a429eb141ad10318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IYEM6EZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCKkEPjl%2B2VhQWUdVNyY4PzB0MGqHasDuwNOXz%2BGYgPrAIgftGulRCAqFKQZyP7Dp2Asoztkw1Mczo9fIVG7HbQsFoq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJlDQA07ur0gxByYjircA4SrcTh7c75TdkGaLxMVEZsB1vzTUNFFXMRv3uFnVpzHdTPRtfZ5InMf3FOw9FnKTS7Q6AbgOxpv%2BCF0hVEhvMyNqJKuZ2YtlIEPDzOXEYriJ0KAl2K9tIG43FnqxCV8ytP3%2BQDJg6TUnPQ9VOgWhhFOxwNrtgVrTnk8n9LH2BrxkqFGO6J%2BxI9JUfsdIBYiZPVZxSIvbu4xyZnQcwIuom%2FscJb1HdQ%2FtaQwtc8UoFvZjtThzXwhJfHZVhoVBZyV5VfWjIHjiamKsOo8aMuCuDybL2UiVGgp4wFCA3Qby2ZErufFXILLjRzAYdnFFUIbmLfR8abMBv9HJ7Aj3D5fU6oZCCahfrfIAmUWE81JDqOz49XoKmEav72p14h72ej%2FaurcnYYV4c3HN1oWM6lGfeDsGJVxZSUozr2OzwOI8F99i80WCXRIa%2FKNVUh4WjbHKnE0dCAtIHYIuN6YtE7HxfCMJghoEuq%2BlxFz6g2zr2%2BSa%2ByC1pfwPKjkFO9th6pxxivwtO6P%2B3uQxLvkZ70CYx4T06P5umwkr0MBgMSKcrauqWg0wWX8RnDUPyQpy3ZttpMTu3bbIM6QLW31a8UHMAOC1qLmpmfoqWLj3ryEPLOTtduovhB%2Ffnj6ivw5MKXOw8QGOqUBBRtWDIt3sKJDsU96HI6ybS2%2B16BsS8PLdNSg1767u3%2FL0pikZ31eiMM39KO4gS4ViPRnyG9r1VRY1PmS4EjyPiJqFW2dpKNzM0JoahzkxyichWKR6u%2BAGl9Y0uJbM3xVBsLoqj1XB8tBsKmP5nyDGhDEZTeH9xXedu%2BD3VRbw%2FDf6yRvX4cIzhXMLAzf5AjAwQkAf%2Bc4MJe5hsnTaVZsEbLHykaX&X-Amz-Signature=a6b3a39ffe062517a0f75fd550755e990fec9c2ae9786ae549ae827af4249969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
