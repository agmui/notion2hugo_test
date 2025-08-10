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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5YUPMU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXSxs66QjIZZLIncWx93MB6jnSWFfJgTrC6kR2HB2xvAiBFFLjaM3jV0mMM4p1f7PJQrPhaWcBMWS%2FRcGmT9SWLTyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmyM3BdiheRIqytW3KtwDZlFHKOhIQ8JmvclmTrGfC6VVzxgxWOXZoqabY%2BqySqNq5aTazM9%2Fnetu%2B8E7NmbzGora0VcQGn1ciZxqLry2GPWUpPJ4RBslxbkxyIpmZV5o8NVyoASKsSBBoFhiUFsAau8Is7f3QmwvWAKrd4u4Xnfgq%2FXuaaOj%2BNhturnrFy0YvtLpvO3tc1n3UH4TbwJD6IZyKDPTC17qh9hDO4DPz8qb88NKR58RWLX6nU9e3tMZFSVHqTIP87%2FlFYhSdl5Q640SkaALYHGOFF4I0pfLeM3ZhqNPe%2Fge9wekc58aMuBae8P3g3ohF9ZUTew7Alg3IhWjXURqrY212hiR%2BjvY9ejl4Hr2wHWzTg7Bp8DDL%2F2nV5QGHLt24PnXlCrRXH5FwnaCZptxxCBIRQz4Wnaex05EAIFYWo5qa4ixCLyfLYzF0oeeg%2FgkyRCUoTcztB202bJgrkkdjr%2BFFsj5k6J%2BkhStijW6hKgDKtbNV%2BF9oDPpEEV%2BwaLbX21OnEoH13Zk%2BjEfNBzVJKJtktRNli70rUSpeTvqQh%2Bqd4YEe5g0MBqB0NbaP%2FyhC8KWe8GYTYethDCtkJlQtwtWE3gDp7npgh0r%2F%2F2S02sEh4l0hdbhFNQ36UTBu0goA%2BWSYtUw3r7ixAY6pgHedA9zg8ZIW4TL1zkSRquX8T%2BuYFEnJ906pjZ4VsPWVJAcqPpSejHohAKEk1u4rF7VHTpyuBjcHfbIOEuF%2BdcaaA7YD%2FpYGwZCDYkZ6Iiagepg8%2FesGMTCyJ1yKq3bSXUWZwP3I%2FP%2B4MNpM2LioFRDJywWnlfpgnuC7k4U7jk%2FoAbX4EmglKf67PcLDHXWByNbfk2wcvmnwJtgzfWjCnXFwZ5Xl875&X-Amz-Signature=7f826374a668797ae6a46b85a9829a74ac4a678bce81d705c0b2fbbb84f7a051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5YUPMU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXSxs66QjIZZLIncWx93MB6jnSWFfJgTrC6kR2HB2xvAiBFFLjaM3jV0mMM4p1f7PJQrPhaWcBMWS%2FRcGmT9SWLTyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmyM3BdiheRIqytW3KtwDZlFHKOhIQ8JmvclmTrGfC6VVzxgxWOXZoqabY%2BqySqNq5aTazM9%2Fnetu%2B8E7NmbzGora0VcQGn1ciZxqLry2GPWUpPJ4RBslxbkxyIpmZV5o8NVyoASKsSBBoFhiUFsAau8Is7f3QmwvWAKrd4u4Xnfgq%2FXuaaOj%2BNhturnrFy0YvtLpvO3tc1n3UH4TbwJD6IZyKDPTC17qh9hDO4DPz8qb88NKR58RWLX6nU9e3tMZFSVHqTIP87%2FlFYhSdl5Q640SkaALYHGOFF4I0pfLeM3ZhqNPe%2Fge9wekc58aMuBae8P3g3ohF9ZUTew7Alg3IhWjXURqrY212hiR%2BjvY9ejl4Hr2wHWzTg7Bp8DDL%2F2nV5QGHLt24PnXlCrRXH5FwnaCZptxxCBIRQz4Wnaex05EAIFYWo5qa4ixCLyfLYzF0oeeg%2FgkyRCUoTcztB202bJgrkkdjr%2BFFsj5k6J%2BkhStijW6hKgDKtbNV%2BF9oDPpEEV%2BwaLbX21OnEoH13Zk%2BjEfNBzVJKJtktRNli70rUSpeTvqQh%2Bqd4YEe5g0MBqB0NbaP%2FyhC8KWe8GYTYethDCtkJlQtwtWE3gDp7npgh0r%2F%2F2S02sEh4l0hdbhFNQ36UTBu0goA%2BWSYtUw3r7ixAY6pgHedA9zg8ZIW4TL1zkSRquX8T%2BuYFEnJ906pjZ4VsPWVJAcqPpSejHohAKEk1u4rF7VHTpyuBjcHfbIOEuF%2BdcaaA7YD%2FpYGwZCDYkZ6Iiagepg8%2FesGMTCyJ1yKq3bSXUWZwP3I%2FP%2B4MNpM2LioFRDJywWnlfpgnuC7k4U7jk%2FoAbX4EmglKf67PcLDHXWByNbfk2wcvmnwJtgzfWjCnXFwZ5Xl875&X-Amz-Signature=02df7192ca1bbe75072d0537516d00c00aa6a56239b243f423ce38dc7f7766e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5YUPMU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXSxs66QjIZZLIncWx93MB6jnSWFfJgTrC6kR2HB2xvAiBFFLjaM3jV0mMM4p1f7PJQrPhaWcBMWS%2FRcGmT9SWLTyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmyM3BdiheRIqytW3KtwDZlFHKOhIQ8JmvclmTrGfC6VVzxgxWOXZoqabY%2BqySqNq5aTazM9%2Fnetu%2B8E7NmbzGora0VcQGn1ciZxqLry2GPWUpPJ4RBslxbkxyIpmZV5o8NVyoASKsSBBoFhiUFsAau8Is7f3QmwvWAKrd4u4Xnfgq%2FXuaaOj%2BNhturnrFy0YvtLpvO3tc1n3UH4TbwJD6IZyKDPTC17qh9hDO4DPz8qb88NKR58RWLX6nU9e3tMZFSVHqTIP87%2FlFYhSdl5Q640SkaALYHGOFF4I0pfLeM3ZhqNPe%2Fge9wekc58aMuBae8P3g3ohF9ZUTew7Alg3IhWjXURqrY212hiR%2BjvY9ejl4Hr2wHWzTg7Bp8DDL%2F2nV5QGHLt24PnXlCrRXH5FwnaCZptxxCBIRQz4Wnaex05EAIFYWo5qa4ixCLyfLYzF0oeeg%2FgkyRCUoTcztB202bJgrkkdjr%2BFFsj5k6J%2BkhStijW6hKgDKtbNV%2BF9oDPpEEV%2BwaLbX21OnEoH13Zk%2BjEfNBzVJKJtktRNli70rUSpeTvqQh%2Bqd4YEe5g0MBqB0NbaP%2FyhC8KWe8GYTYethDCtkJlQtwtWE3gDp7npgh0r%2F%2F2S02sEh4l0hdbhFNQ36UTBu0goA%2BWSYtUw3r7ixAY6pgHedA9zg8ZIW4TL1zkSRquX8T%2BuYFEnJ906pjZ4VsPWVJAcqPpSejHohAKEk1u4rF7VHTpyuBjcHfbIOEuF%2BdcaaA7YD%2FpYGwZCDYkZ6Iiagepg8%2FesGMTCyJ1yKq3bSXUWZwP3I%2FP%2B4MNpM2LioFRDJywWnlfpgnuC7k4U7jk%2FoAbX4EmglKf67PcLDHXWByNbfk2wcvmnwJtgzfWjCnXFwZ5Xl875&X-Amz-Signature=d7db95a50494a72eaa29442cad5caca307b347e54cc258052a3e92977bc55043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5YUPMU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXSxs66QjIZZLIncWx93MB6jnSWFfJgTrC6kR2HB2xvAiBFFLjaM3jV0mMM4p1f7PJQrPhaWcBMWS%2FRcGmT9SWLTyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmyM3BdiheRIqytW3KtwDZlFHKOhIQ8JmvclmTrGfC6VVzxgxWOXZoqabY%2BqySqNq5aTazM9%2Fnetu%2B8E7NmbzGora0VcQGn1ciZxqLry2GPWUpPJ4RBslxbkxyIpmZV5o8NVyoASKsSBBoFhiUFsAau8Is7f3QmwvWAKrd4u4Xnfgq%2FXuaaOj%2BNhturnrFy0YvtLpvO3tc1n3UH4TbwJD6IZyKDPTC17qh9hDO4DPz8qb88NKR58RWLX6nU9e3tMZFSVHqTIP87%2FlFYhSdl5Q640SkaALYHGOFF4I0pfLeM3ZhqNPe%2Fge9wekc58aMuBae8P3g3ohF9ZUTew7Alg3IhWjXURqrY212hiR%2BjvY9ejl4Hr2wHWzTg7Bp8DDL%2F2nV5QGHLt24PnXlCrRXH5FwnaCZptxxCBIRQz4Wnaex05EAIFYWo5qa4ixCLyfLYzF0oeeg%2FgkyRCUoTcztB202bJgrkkdjr%2BFFsj5k6J%2BkhStijW6hKgDKtbNV%2BF9oDPpEEV%2BwaLbX21OnEoH13Zk%2BjEfNBzVJKJtktRNli70rUSpeTvqQh%2Bqd4YEe5g0MBqB0NbaP%2FyhC8KWe8GYTYethDCtkJlQtwtWE3gDp7npgh0r%2F%2F2S02sEh4l0hdbhFNQ36UTBu0goA%2BWSYtUw3r7ixAY6pgHedA9zg8ZIW4TL1zkSRquX8T%2BuYFEnJ906pjZ4VsPWVJAcqPpSejHohAKEk1u4rF7VHTpyuBjcHfbIOEuF%2BdcaaA7YD%2FpYGwZCDYkZ6Iiagepg8%2FesGMTCyJ1yKq3bSXUWZwP3I%2FP%2B4MNpM2LioFRDJywWnlfpgnuC7k4U7jk%2FoAbX4EmglKf67PcLDHXWByNbfk2wcvmnwJtgzfWjCnXFwZ5Xl875&X-Amz-Signature=495c656a542884c633bd4dc2c0acf76aaf2029453e4f5881760b22ab9fee7739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5YUPMU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXSxs66QjIZZLIncWx93MB6jnSWFfJgTrC6kR2HB2xvAiBFFLjaM3jV0mMM4p1f7PJQrPhaWcBMWS%2FRcGmT9SWLTyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmyM3BdiheRIqytW3KtwDZlFHKOhIQ8JmvclmTrGfC6VVzxgxWOXZoqabY%2BqySqNq5aTazM9%2Fnetu%2B8E7NmbzGora0VcQGn1ciZxqLry2GPWUpPJ4RBslxbkxyIpmZV5o8NVyoASKsSBBoFhiUFsAau8Is7f3QmwvWAKrd4u4Xnfgq%2FXuaaOj%2BNhturnrFy0YvtLpvO3tc1n3UH4TbwJD6IZyKDPTC17qh9hDO4DPz8qb88NKR58RWLX6nU9e3tMZFSVHqTIP87%2FlFYhSdl5Q640SkaALYHGOFF4I0pfLeM3ZhqNPe%2Fge9wekc58aMuBae8P3g3ohF9ZUTew7Alg3IhWjXURqrY212hiR%2BjvY9ejl4Hr2wHWzTg7Bp8DDL%2F2nV5QGHLt24PnXlCrRXH5FwnaCZptxxCBIRQz4Wnaex05EAIFYWo5qa4ixCLyfLYzF0oeeg%2FgkyRCUoTcztB202bJgrkkdjr%2BFFsj5k6J%2BkhStijW6hKgDKtbNV%2BF9oDPpEEV%2BwaLbX21OnEoH13Zk%2BjEfNBzVJKJtktRNli70rUSpeTvqQh%2Bqd4YEe5g0MBqB0NbaP%2FyhC8KWe8GYTYethDCtkJlQtwtWE3gDp7npgh0r%2F%2F2S02sEh4l0hdbhFNQ36UTBu0goA%2BWSYtUw3r7ixAY6pgHedA9zg8ZIW4TL1zkSRquX8T%2BuYFEnJ906pjZ4VsPWVJAcqPpSejHohAKEk1u4rF7VHTpyuBjcHfbIOEuF%2BdcaaA7YD%2FpYGwZCDYkZ6Iiagepg8%2FesGMTCyJ1yKq3bSXUWZwP3I%2FP%2B4MNpM2LioFRDJywWnlfpgnuC7k4U7jk%2FoAbX4EmglKf67PcLDHXWByNbfk2wcvmnwJtgzfWjCnXFwZ5Xl875&X-Amz-Signature=ed7af77ecfb53faa5d02776dc1a617d9b75dfa6a978b50ff8470871271a17505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5YUPMU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXSxs66QjIZZLIncWx93MB6jnSWFfJgTrC6kR2HB2xvAiBFFLjaM3jV0mMM4p1f7PJQrPhaWcBMWS%2FRcGmT9SWLTyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmyM3BdiheRIqytW3KtwDZlFHKOhIQ8JmvclmTrGfC6VVzxgxWOXZoqabY%2BqySqNq5aTazM9%2Fnetu%2B8E7NmbzGora0VcQGn1ciZxqLry2GPWUpPJ4RBslxbkxyIpmZV5o8NVyoASKsSBBoFhiUFsAau8Is7f3QmwvWAKrd4u4Xnfgq%2FXuaaOj%2BNhturnrFy0YvtLpvO3tc1n3UH4TbwJD6IZyKDPTC17qh9hDO4DPz8qb88NKR58RWLX6nU9e3tMZFSVHqTIP87%2FlFYhSdl5Q640SkaALYHGOFF4I0pfLeM3ZhqNPe%2Fge9wekc58aMuBae8P3g3ohF9ZUTew7Alg3IhWjXURqrY212hiR%2BjvY9ejl4Hr2wHWzTg7Bp8DDL%2F2nV5QGHLt24PnXlCrRXH5FwnaCZptxxCBIRQz4Wnaex05EAIFYWo5qa4ixCLyfLYzF0oeeg%2FgkyRCUoTcztB202bJgrkkdjr%2BFFsj5k6J%2BkhStijW6hKgDKtbNV%2BF9oDPpEEV%2BwaLbX21OnEoH13Zk%2BjEfNBzVJKJtktRNli70rUSpeTvqQh%2Bqd4YEe5g0MBqB0NbaP%2FyhC8KWe8GYTYethDCtkJlQtwtWE3gDp7npgh0r%2F%2F2S02sEh4l0hdbhFNQ36UTBu0goA%2BWSYtUw3r7ixAY6pgHedA9zg8ZIW4TL1zkSRquX8T%2BuYFEnJ906pjZ4VsPWVJAcqPpSejHohAKEk1u4rF7VHTpyuBjcHfbIOEuF%2BdcaaA7YD%2FpYGwZCDYkZ6Iiagepg8%2FesGMTCyJ1yKq3bSXUWZwP3I%2FP%2B4MNpM2LioFRDJywWnlfpgnuC7k4U7jk%2FoAbX4EmglKf67PcLDHXWByNbfk2wcvmnwJtgzfWjCnXFwZ5Xl875&X-Amz-Signature=fcdf0824a91493a6d30f47541f9f27362ba3ec0725f40efcaccf46862b98f6cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5YUPMU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXSxs66QjIZZLIncWx93MB6jnSWFfJgTrC6kR2HB2xvAiBFFLjaM3jV0mMM4p1f7PJQrPhaWcBMWS%2FRcGmT9SWLTyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmyM3BdiheRIqytW3KtwDZlFHKOhIQ8JmvclmTrGfC6VVzxgxWOXZoqabY%2BqySqNq5aTazM9%2Fnetu%2B8E7NmbzGora0VcQGn1ciZxqLry2GPWUpPJ4RBslxbkxyIpmZV5o8NVyoASKsSBBoFhiUFsAau8Is7f3QmwvWAKrd4u4Xnfgq%2FXuaaOj%2BNhturnrFy0YvtLpvO3tc1n3UH4TbwJD6IZyKDPTC17qh9hDO4DPz8qb88NKR58RWLX6nU9e3tMZFSVHqTIP87%2FlFYhSdl5Q640SkaALYHGOFF4I0pfLeM3ZhqNPe%2Fge9wekc58aMuBae8P3g3ohF9ZUTew7Alg3IhWjXURqrY212hiR%2BjvY9ejl4Hr2wHWzTg7Bp8DDL%2F2nV5QGHLt24PnXlCrRXH5FwnaCZptxxCBIRQz4Wnaex05EAIFYWo5qa4ixCLyfLYzF0oeeg%2FgkyRCUoTcztB202bJgrkkdjr%2BFFsj5k6J%2BkhStijW6hKgDKtbNV%2BF9oDPpEEV%2BwaLbX21OnEoH13Zk%2BjEfNBzVJKJtktRNli70rUSpeTvqQh%2Bqd4YEe5g0MBqB0NbaP%2FyhC8KWe8GYTYethDCtkJlQtwtWE3gDp7npgh0r%2F%2F2S02sEh4l0hdbhFNQ36UTBu0goA%2BWSYtUw3r7ixAY6pgHedA9zg8ZIW4TL1zkSRquX8T%2BuYFEnJ906pjZ4VsPWVJAcqPpSejHohAKEk1u4rF7VHTpyuBjcHfbIOEuF%2BdcaaA7YD%2FpYGwZCDYkZ6Iiagepg8%2FesGMTCyJ1yKq3bSXUWZwP3I%2FP%2B4MNpM2LioFRDJywWnlfpgnuC7k4U7jk%2FoAbX4EmglKf67PcLDHXWByNbfk2wcvmnwJtgzfWjCnXFwZ5Xl875&X-Amz-Signature=d0aa8d389bcc7ac58463b18fb36739fa1617f5c266d68dbf85c3fbf729b4e52f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5YUPMU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXSxs66QjIZZLIncWx93MB6jnSWFfJgTrC6kR2HB2xvAiBFFLjaM3jV0mMM4p1f7PJQrPhaWcBMWS%2FRcGmT9SWLTyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmyM3BdiheRIqytW3KtwDZlFHKOhIQ8JmvclmTrGfC6VVzxgxWOXZoqabY%2BqySqNq5aTazM9%2Fnetu%2B8E7NmbzGora0VcQGn1ciZxqLry2GPWUpPJ4RBslxbkxyIpmZV5o8NVyoASKsSBBoFhiUFsAau8Is7f3QmwvWAKrd4u4Xnfgq%2FXuaaOj%2BNhturnrFy0YvtLpvO3tc1n3UH4TbwJD6IZyKDPTC17qh9hDO4DPz8qb88NKR58RWLX6nU9e3tMZFSVHqTIP87%2FlFYhSdl5Q640SkaALYHGOFF4I0pfLeM3ZhqNPe%2Fge9wekc58aMuBae8P3g3ohF9ZUTew7Alg3IhWjXURqrY212hiR%2BjvY9ejl4Hr2wHWzTg7Bp8DDL%2F2nV5QGHLt24PnXlCrRXH5FwnaCZptxxCBIRQz4Wnaex05EAIFYWo5qa4ixCLyfLYzF0oeeg%2FgkyRCUoTcztB202bJgrkkdjr%2BFFsj5k6J%2BkhStijW6hKgDKtbNV%2BF9oDPpEEV%2BwaLbX21OnEoH13Zk%2BjEfNBzVJKJtktRNli70rUSpeTvqQh%2Bqd4YEe5g0MBqB0NbaP%2FyhC8KWe8GYTYethDCtkJlQtwtWE3gDp7npgh0r%2F%2F2S02sEh4l0hdbhFNQ36UTBu0goA%2BWSYtUw3r7ixAY6pgHedA9zg8ZIW4TL1zkSRquX8T%2BuYFEnJ906pjZ4VsPWVJAcqPpSejHohAKEk1u4rF7VHTpyuBjcHfbIOEuF%2BdcaaA7YD%2FpYGwZCDYkZ6Iiagepg8%2FesGMTCyJ1yKq3bSXUWZwP3I%2FP%2B4MNpM2LioFRDJywWnlfpgnuC7k4U7jk%2FoAbX4EmglKf67PcLDHXWByNbfk2wcvmnwJtgzfWjCnXFwZ5Xl875&X-Amz-Signature=efb53c75767fab5d6a84334d5ce227d75d76c6d9b45488b034a37d0f1fede7c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5YUPMU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXSxs66QjIZZLIncWx93MB6jnSWFfJgTrC6kR2HB2xvAiBFFLjaM3jV0mMM4p1f7PJQrPhaWcBMWS%2FRcGmT9SWLTyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmyM3BdiheRIqytW3KtwDZlFHKOhIQ8JmvclmTrGfC6VVzxgxWOXZoqabY%2BqySqNq5aTazM9%2Fnetu%2B8E7NmbzGora0VcQGn1ciZxqLry2GPWUpPJ4RBslxbkxyIpmZV5o8NVyoASKsSBBoFhiUFsAau8Is7f3QmwvWAKrd4u4Xnfgq%2FXuaaOj%2BNhturnrFy0YvtLpvO3tc1n3UH4TbwJD6IZyKDPTC17qh9hDO4DPz8qb88NKR58RWLX6nU9e3tMZFSVHqTIP87%2FlFYhSdl5Q640SkaALYHGOFF4I0pfLeM3ZhqNPe%2Fge9wekc58aMuBae8P3g3ohF9ZUTew7Alg3IhWjXURqrY212hiR%2BjvY9ejl4Hr2wHWzTg7Bp8DDL%2F2nV5QGHLt24PnXlCrRXH5FwnaCZptxxCBIRQz4Wnaex05EAIFYWo5qa4ixCLyfLYzF0oeeg%2FgkyRCUoTcztB202bJgrkkdjr%2BFFsj5k6J%2BkhStijW6hKgDKtbNV%2BF9oDPpEEV%2BwaLbX21OnEoH13Zk%2BjEfNBzVJKJtktRNli70rUSpeTvqQh%2Bqd4YEe5g0MBqB0NbaP%2FyhC8KWe8GYTYethDCtkJlQtwtWE3gDp7npgh0r%2F%2F2S02sEh4l0hdbhFNQ36UTBu0goA%2BWSYtUw3r7ixAY6pgHedA9zg8ZIW4TL1zkSRquX8T%2BuYFEnJ906pjZ4VsPWVJAcqPpSejHohAKEk1u4rF7VHTpyuBjcHfbIOEuF%2BdcaaA7YD%2FpYGwZCDYkZ6Iiagepg8%2FesGMTCyJ1yKq3bSXUWZwP3I%2FP%2B4MNpM2LioFRDJywWnlfpgnuC7k4U7jk%2FoAbX4EmglKf67PcLDHXWByNbfk2wcvmnwJtgzfWjCnXFwZ5Xl875&X-Amz-Signature=77879d3166f7133427d742f4dc92f3ade2c7d5c99232a24425450e0f35d8dace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5YUPMU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXSxs66QjIZZLIncWx93MB6jnSWFfJgTrC6kR2HB2xvAiBFFLjaM3jV0mMM4p1f7PJQrPhaWcBMWS%2FRcGmT9SWLTyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmyM3BdiheRIqytW3KtwDZlFHKOhIQ8JmvclmTrGfC6VVzxgxWOXZoqabY%2BqySqNq5aTazM9%2Fnetu%2B8E7NmbzGora0VcQGn1ciZxqLry2GPWUpPJ4RBslxbkxyIpmZV5o8NVyoASKsSBBoFhiUFsAau8Is7f3QmwvWAKrd4u4Xnfgq%2FXuaaOj%2BNhturnrFy0YvtLpvO3tc1n3UH4TbwJD6IZyKDPTC17qh9hDO4DPz8qb88NKR58RWLX6nU9e3tMZFSVHqTIP87%2FlFYhSdl5Q640SkaALYHGOFF4I0pfLeM3ZhqNPe%2Fge9wekc58aMuBae8P3g3ohF9ZUTew7Alg3IhWjXURqrY212hiR%2BjvY9ejl4Hr2wHWzTg7Bp8DDL%2F2nV5QGHLt24PnXlCrRXH5FwnaCZptxxCBIRQz4Wnaex05EAIFYWo5qa4ixCLyfLYzF0oeeg%2FgkyRCUoTcztB202bJgrkkdjr%2BFFsj5k6J%2BkhStijW6hKgDKtbNV%2BF9oDPpEEV%2BwaLbX21OnEoH13Zk%2BjEfNBzVJKJtktRNli70rUSpeTvqQh%2Bqd4YEe5g0MBqB0NbaP%2FyhC8KWe8GYTYethDCtkJlQtwtWE3gDp7npgh0r%2F%2F2S02sEh4l0hdbhFNQ36UTBu0goA%2BWSYtUw3r7ixAY6pgHedA9zg8ZIW4TL1zkSRquX8T%2BuYFEnJ906pjZ4VsPWVJAcqPpSejHohAKEk1u4rF7VHTpyuBjcHfbIOEuF%2BdcaaA7YD%2FpYGwZCDYkZ6Iiagepg8%2FesGMTCyJ1yKq3bSXUWZwP3I%2FP%2B4MNpM2LioFRDJywWnlfpgnuC7k4U7jk%2FoAbX4EmglKf67PcLDHXWByNbfk2wcvmnwJtgzfWjCnXFwZ5Xl875&X-Amz-Signature=c9b4ad1a45dcb71612cf14b3d7dfad1239d78f0363ed1ab7280fbf81218a7211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNWW2NCX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWzQXF3iLayrfQ1aXdFkHMkUbunA50Rbw1Q7GPeSW3MQIgR8X702ZT2KWugyitbBrfJs05eXQBuQLhOehZ0niK5YEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqSZnlEQegk9Jtm6ircA4hGP8cAg%2BsBJJhVdDV6pB4mp4ZmMxkS934rEFZ77Vv3PYfM9PVjeNcR79BFPjTpAvyPHVsI5NZr2yUjnMoqTS81d0WFCtxTBkk6uRUs6MO%2Fy64MQp5EMAtUN%2BlKi1BfoczODbceAP%2FbDD2q9C4knL3GQ%2BrQ5QpPco%2FSvQR%2BHp7VAPTUEywcc%2FOE1iDc8Z04irBI%2BfhWhRseQm7HMkcnrXD4fl9Su26UHcQBSBI2WAfxC%2By3FmJbwY%2FK0hVHQA5ckvix1t1PFCjzgLHUB3MUrgM6uFvKWoc1Bg43ezmfTIgvGPE6ic1RskmmdZyYAXaT6sGpTLH6Jlm6r0oOu2rFKzqd4%2Bh4B6wTPPP%2BUvM3ddLn4ku6vIAwbd5h5pBRIgIl8PbW0tA7n%2FJBQ69BbHWzduM9tMdfG1sD1fWxjjrafBJWINtd8zDz6rC1YYTssKqjcD4pNWSd5UKvtqr89fPrw8MwCICRX998z%2Flpqf0hcmaFJN7aKQw9yrRqf%2FPvdiyoOUWUHgEYe4iJvmN%2BUM7BfNvXsaeJ%2FVmXqye0zX29M7JUJbTrBBgy%2BLS968RdhSh9jTBy0QnQOykS2TqmFZt2BBlWmLd0FrPEaYdyy2yiPgwTNO0arYCfrHrZ8DnzMNu%2B4sQGOqUBGRJqygke31sZNommPkd2ttT49VWSHO4GXtbwG8mx0rrAmETY%2FN8V8PkdTRUNzCtHt9lLuDOcyc3Kt43MBY%2FcsI2quEaY7DlPCZqYouVAKESWqOf75HjbTCmcnEw%2FFgO8yPi3P5XQEkE5S4faGUHMEeBDN9QpQ359Dpl58D7uKHxT7khwZeNJ54wpErM4r5m6HPQqwhRZWVC0GSLeQTbfUdEBGWsf&X-Amz-Signature=1bc5572c5036c92865bb9d140c0df39b570701962adc17dacc1c0af4bf6bc0f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YB7XX3C%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPHMh3yHb9u8j7U79inkmq2MOhYsJJTtBoe4OL2Lu35QIgY1hNtz818M9Pij7l7V8X5A20U88LFhEb9OUnXVZZUTgqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbNxLNA3LVF5PbF7CrcA3x4jt5rcVXmBvALlZkYXfNrkH3eQrzlviR7x2l3Baq1eb0uiysx%2BFwHe%2FbR%2BNHoDuJIUSnIj%2BQ0PDUqzxE7%2F44HPVYofygPzLBOhD7SNZI00pugdNzKVUUtsAJQuXt%2FGNCURnwXe7WgCbmW7uGflrqHp0aUM5NlpbgPAP5QVp8NFD3vsS2OrEboNTnCAgyBiW7zp1yT9%2Bft0GZXTmQ2XUSxWA3W10N3hsYB0lANDQ9DB%2BCvzRBeHQIUF5xZHeNsKXJFNbDR%2FBxCE%2FCQ0TrmCDgNPbQzc%2B8CLKNBRL13AXacKJCRCa3sCjC6eUqopaqvI4fq3VO%2FRionWPLxK%2BzvKt2KicjrerEcWmCyAnoh2gA8xt1n45Pys4WDJsf8v94ZEHdWVL1Zua0wH2%2FkZl%2FXcenTKzfwmB5A7RZT7jQvBoZIE%2FHk2h2FPDFniiTkIppRxka301YY5FQKRgLJC0i4aFbAmDUwLFfT17J7m%2Fjd9m%2FIY8JbBoOhLSTTxOTcwDjvY%2Fdz5WkJM5Ovos5xnqpM6BLbLSM%2F6tzrxAHY0HYKooL50IA%2BAI%2BXR0o4oFSrTpi%2FxNnA2YpOP%2B9SN%2Fbqq%2BRmBBZpgkaV4OO%2FnZCXsjtdGZi05on0H62weInplAwqMPe%2B4sQGOqUBGo4PdIerKTb9RAY9QFYJpITuj9Bx1TPlNLgZvkejABkcFacaGdiFzhNc6kLtlIy0T%2FDg6u5oGscl5E8hOJhnSrS%2BfkbeCRf%2F7Mj5K%2FdWtC9%2B6pDExtIdGRXZc5pJZmVlb%2FCJ4Nukzy1ekPu%2Fa%2BAhoLN2Qs3N%2FxrxiirHBqgWzjFCW1WuFzYPxGLBzkOxK%2BTZtEfrOZsjqlCPuVEWzQ%2BBauJSPF03&X-Amz-Signature=ebe14db91d03ccf320909d329ceb6f3160bd328463f5050a48f5270dfc72ede6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW2DONBC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXWOgKxeX6T2CG5Veq7v8J%2FlwIMvdf3Y49hPMasc3NUAiEA30kel0CtRb9L%2BHjAg9Issj148qmYD1q5HE96DCpyRd0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrxqah%2ByuOfQosNXCrcAxQDRMILeq85Ww3LM8qWyUQRPnclkyHsTexz80HTxgOJqW7MEMgV31mcvJSX%2BD8EJP%2BeNDAXq7YJEwBMXq4IRhbSXuucz9a4JnsjBFevTMyGchJO5JmanHZdCXdva9bXKe0pOd3eljCqIxmTz7%2B7fKIC8nLOhkn%2BqMEVkvEz9bcyyrq2mZ9Nuk9Jsq0Of8BN%2FJnXVfUr%2Fs%2FG9ag3cby39OkFq%2FyRkz2cvEouZo5wuh1IZeJSKTIf5IBUC3G2zh1l8pgzWCwixCisYZJYnOFHUEI8hGw8thnmWF9TXoH2Z3awKQZpkYuXahccCxpRmkRHw4BlVnjFVvI4%2FOs3wxBeUR7bslUWFSSFyTwNznE7Pz2%2FeDINjw30YocSImItNlZe%2F6i7LWxn4FWialrOC33DEPzyXPECwGi2RQyT4qZ%2BcEaq0F0uw6HP2SbWVZYc28B2ENr6u8UTPizeVbSbnsqFEQ6tTikIiJCbuLnwgr9gwwonm%2FolEsReyi0CnCNueN4oZCQtCdYI2gcqe%2BKUIU%2FJDpQExjgXPi23BPIiouYQye%2B%2FLleiTtfYXQ66NMHBradjaUE6p1suOSzQz8p5RZyuWrarSlDDkGIgvyG2PlwT%2FxFwY3rXQh4VrrwRRNAdMLO%2F4sQGOqUBevLPpHNY8%2BFOUyR6u1cJ3wP%2BMoTnl8JUnIGtIjQ5aIplXwKD%2FlveuF6Tmuz8ZOI%2BhVUKTrIPIgC3QUV0MG6LlmADmRdKyBkehcseM4g19EQoHwg1XoT70esZe8dX0G1O1nczC0b349X%2B4Hd9g3LhQwEj21vturjqkSGzIPQNwBqNCvojP5Ad56Uhr2qHREE9LhUtwQtZVyrjjWfdCIvz0sMGG3zz&X-Amz-Signature=227ecd38b4c82ca674d0ff375db0ae0c4f478f00e1492410ac5177fd75333d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5YUPMU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXSxs66QjIZZLIncWx93MB6jnSWFfJgTrC6kR2HB2xvAiBFFLjaM3jV0mMM4p1f7PJQrPhaWcBMWS%2FRcGmT9SWLTyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmyM3BdiheRIqytW3KtwDZlFHKOhIQ8JmvclmTrGfC6VVzxgxWOXZoqabY%2BqySqNq5aTazM9%2Fnetu%2B8E7NmbzGora0VcQGn1ciZxqLry2GPWUpPJ4RBslxbkxyIpmZV5o8NVyoASKsSBBoFhiUFsAau8Is7f3QmwvWAKrd4u4Xnfgq%2FXuaaOj%2BNhturnrFy0YvtLpvO3tc1n3UH4TbwJD6IZyKDPTC17qh9hDO4DPz8qb88NKR58RWLX6nU9e3tMZFSVHqTIP87%2FlFYhSdl5Q640SkaALYHGOFF4I0pfLeM3ZhqNPe%2Fge9wekc58aMuBae8P3g3ohF9ZUTew7Alg3IhWjXURqrY212hiR%2BjvY9ejl4Hr2wHWzTg7Bp8DDL%2F2nV5QGHLt24PnXlCrRXH5FwnaCZptxxCBIRQz4Wnaex05EAIFYWo5qa4ixCLyfLYzF0oeeg%2FgkyRCUoTcztB202bJgrkkdjr%2BFFsj5k6J%2BkhStijW6hKgDKtbNV%2BF9oDPpEEV%2BwaLbX21OnEoH13Zk%2BjEfNBzVJKJtktRNli70rUSpeTvqQh%2Bqd4YEe5g0MBqB0NbaP%2FyhC8KWe8GYTYethDCtkJlQtwtWE3gDp7npgh0r%2F%2F2S02sEh4l0hdbhFNQ36UTBu0goA%2BWSYtUw3r7ixAY6pgHedA9zg8ZIW4TL1zkSRquX8T%2BuYFEnJ906pjZ4VsPWVJAcqPpSejHohAKEk1u4rF7VHTpyuBjcHfbIOEuF%2BdcaaA7YD%2FpYGwZCDYkZ6Iiagepg8%2FesGMTCyJ1yKq3bSXUWZwP3I%2FP%2B4MNpM2LioFRDJywWnlfpgnuC7k4U7jk%2FoAbX4EmglKf67PcLDHXWByNbfk2wcvmnwJtgzfWjCnXFwZ5Xl875&X-Amz-Signature=fbd2d61989d53ef872f0db1589f994b67358f3fe87b40ef8021945291da670ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PQC74C4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECmwvaocXKSYPm9rjIBOpoOZHZ1RFF8z9bywyvFAlq0AiEAkM305fZZ5Y91abT1zK3ehPlYXycn5NcL0Nd2MtC%2B9QEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjWa9yRUg8HlpORtyrcA06qcb4Z9X0sQm6%2BERHZzV2pPvEF8Jr0Mpl%2FKNcIAPWTgBC9HeYp4zgYIOM0mO0Tdbuzv%2BCF%2FOYuBNphQUUqDYTDfG47wmHi2ZKZQ0YGdJl%2BpikMSwqld6%2BMz3Jct%2FCpetrS60hnvJTFbrooHxY3JyKNl3nh1iHgXQqu%2BkI0Z6um3PPJi8UFkdbcbMPxmvINwue%2Fpsal8uOXiu1P%2FdvzKapB4yjxYEmveTgcBIU%2F6k4hIwnl6zSTIz7zVRikV5ze8604BYTKUfetPJt7KQ0GHCNy1JV8p1lNJmScqvwROJ3DEHpWM3B4lTapRRbaJ6ejRAKCY81HWH699FV6XvgwuY93D5fL8HKBB6WehaCjc%2BnsxT7CP8mMbppwq3LqcAxGzKrx7ILCCtX1o9JD2RkrOvRqxBRGIVOECRsnZaEFSXpMsU9B%2FPg0o0H3vV1ePLCztpjgQXUzK3SWR2ShrWWNjAUtGLSCrGD2eKo5Im5ZPq2FTy3eauHNn5n4xzvq2ovvbK5Xb7GV4hl0%2FCLV40Vb6jNTS%2FvNsZW8qNEhJWAWxsOx%2BrTZk0Cgr7%2BCGs3xHs5gTFRQMwrMuNZnj%2B%2BA6fA%2FNfC45mMpgV3kiUH%2B8Zjl22QYZMrbRJW7cJ%2BzXKzNMO2%2B4sQGOqUBvzlGwQflVwuFm8H2AwLhY4gz8PV3L6xiYw%2B%2FGXgzapZsl2sdfQ2EFFmMB8DX7MSf6sdIKy%2FOI%2FIEvlgQI6T6ztLB0r9UFVSeVv4IBea6JknlH8og%2Fik%2F%2Fd9XHHMjNXkYyq7N%2FF%2BZDXPbuqnas6pEwBXrrxFz3YatJ0JtUnMV37Is6WzzndG59wFRsOSUmRRpBEqWUVb2V9RzGaEo2cDd3Ra8qrAU&X-Amz-Signature=516322ae02ce476123c00bcb0b92418dd59dbec19f08d6517cbe11776d99aa88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5YUPMU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXSxs66QjIZZLIncWx93MB6jnSWFfJgTrC6kR2HB2xvAiBFFLjaM3jV0mMM4p1f7PJQrPhaWcBMWS%2FRcGmT9SWLTyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmyM3BdiheRIqytW3KtwDZlFHKOhIQ8JmvclmTrGfC6VVzxgxWOXZoqabY%2BqySqNq5aTazM9%2Fnetu%2B8E7NmbzGora0VcQGn1ciZxqLry2GPWUpPJ4RBslxbkxyIpmZV5o8NVyoASKsSBBoFhiUFsAau8Is7f3QmwvWAKrd4u4Xnfgq%2FXuaaOj%2BNhturnrFy0YvtLpvO3tc1n3UH4TbwJD6IZyKDPTC17qh9hDO4DPz8qb88NKR58RWLX6nU9e3tMZFSVHqTIP87%2FlFYhSdl5Q640SkaALYHGOFF4I0pfLeM3ZhqNPe%2Fge9wekc58aMuBae8P3g3ohF9ZUTew7Alg3IhWjXURqrY212hiR%2BjvY9ejl4Hr2wHWzTg7Bp8DDL%2F2nV5QGHLt24PnXlCrRXH5FwnaCZptxxCBIRQz4Wnaex05EAIFYWo5qa4ixCLyfLYzF0oeeg%2FgkyRCUoTcztB202bJgrkkdjr%2BFFsj5k6J%2BkhStijW6hKgDKtbNV%2BF9oDPpEEV%2BwaLbX21OnEoH13Zk%2BjEfNBzVJKJtktRNli70rUSpeTvqQh%2Bqd4YEe5g0MBqB0NbaP%2FyhC8KWe8GYTYethDCtkJlQtwtWE3gDp7npgh0r%2F%2F2S02sEh4l0hdbhFNQ36UTBu0goA%2BWSYtUw3r7ixAY6pgHedA9zg8ZIW4TL1zkSRquX8T%2BuYFEnJ906pjZ4VsPWVJAcqPpSejHohAKEk1u4rF7VHTpyuBjcHfbIOEuF%2BdcaaA7YD%2FpYGwZCDYkZ6Iiagepg8%2FesGMTCyJ1yKq3bSXUWZwP3I%2FP%2B4MNpM2LioFRDJywWnlfpgnuC7k4U7jk%2FoAbX4EmglKf67PcLDHXWByNbfk2wcvmnwJtgzfWjCnXFwZ5Xl875&X-Amz-Signature=27e5eb257318f08081575f9e5534fedc230a9e3e9cb9b388e8426cdd4b46890b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVZP57D4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FZ7UALiy2XrOWjIogfiDeyYeXTmzo2PIxRMXbP%2FnWqAiAepAsBLWvJTa8FjHbOyOWi5Yy5PhmwiOXKPkaAItySyCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHopLly0FlSH9lwMEKtwDMDhSprUMyE3Yd0uXpYrqu5eMnZ99JacrbPp1i5GTjwWZHE4QhlvEtUenJbvs661XKNJx6Yez7Hlu42TcxqnoWF8VHMTj6s4gGe%2BH%2B%2BU0Jvl0pHqS481DpAPdN83QaeszdS%2BfFY3wuLKr57Et%2B0pF9DUJINWsz33pZ9hKTPLwowzM4uUF7yztSXBwyULn9p%2BY8hh2ZR%2BrCsgJdlp9d6IRXNIFZDF6aaVJdTVSxZNqTiwT%2Fr%2BLxp1cGK6fPa%2Fl8Xf3jox7FIqu61pi9UGMsgw8XW7c8lVL1yJ2mpjgz94PNDM7VkoLQ%2F0AYV23aEi9s%2FETZOEQXn0lryk6SyA3FSMHFPUg%2BkKXeE5NrR%2BylnZDAtWW308P8e8eGOD%2FyBONidr9jFCGqP7jxEX5o%2F3GcvohFRlQgkHhmSBwHW%2FEagSCUg%2BmRcOMhqAXFtwZKj7yx1MmsaKYX1e6Qx%2Bv38h9rn1wRxTEdlctnVsvPoS06Vt1IMiky2u2yhQRxYybe9OgEFVQleBFWXdCHxR3AtJQdLsYMbHPIRYDFFklfOG4%2FWBOLfjT9xOQsFm30fhJpiojZmc4G0al3hAcWdyB1OMj%2BrPAedxnMk5uy3tNulHWtn5Uajv8LtZL5Rf3IlVjxJww%2Fr7ixAY6pgHaRTshsRFsODWkuXqRqJ5SgiaoK99xM6ECafxyR0Yl3kjcTotn87RHXFb3RrLr8zUYpImtUil1W3FuaJPfL1Mi%2FxoOma%2FNW86DWuYK2GMZvfzJi0z%2BB5zzyBU6urlRjbLU1ghUSMBNrRwLg%2FU53OqGhCngKkmLQ3jiJFzTcWU4EefeAiTNy48lgaa9jn%2BPzbKSamp83HzpB4wUsxdOjKoTUJrMnAxm&X-Amz-Signature=c77cb45da68b87bbe6178076173d6c195a80fcbd5dbbfe7f6b9561be9136498a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5YUPMU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXSxs66QjIZZLIncWx93MB6jnSWFfJgTrC6kR2HB2xvAiBFFLjaM3jV0mMM4p1f7PJQrPhaWcBMWS%2FRcGmT9SWLTyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmyM3BdiheRIqytW3KtwDZlFHKOhIQ8JmvclmTrGfC6VVzxgxWOXZoqabY%2BqySqNq5aTazM9%2Fnetu%2B8E7NmbzGora0VcQGn1ciZxqLry2GPWUpPJ4RBslxbkxyIpmZV5o8NVyoASKsSBBoFhiUFsAau8Is7f3QmwvWAKrd4u4Xnfgq%2FXuaaOj%2BNhturnrFy0YvtLpvO3tc1n3UH4TbwJD6IZyKDPTC17qh9hDO4DPz8qb88NKR58RWLX6nU9e3tMZFSVHqTIP87%2FlFYhSdl5Q640SkaALYHGOFF4I0pfLeM3ZhqNPe%2Fge9wekc58aMuBae8P3g3ohF9ZUTew7Alg3IhWjXURqrY212hiR%2BjvY9ejl4Hr2wHWzTg7Bp8DDL%2F2nV5QGHLt24PnXlCrRXH5FwnaCZptxxCBIRQz4Wnaex05EAIFYWo5qa4ixCLyfLYzF0oeeg%2FgkyRCUoTcztB202bJgrkkdjr%2BFFsj5k6J%2BkhStijW6hKgDKtbNV%2BF9oDPpEEV%2BwaLbX21OnEoH13Zk%2BjEfNBzVJKJtktRNli70rUSpeTvqQh%2Bqd4YEe5g0MBqB0NbaP%2FyhC8KWe8GYTYethDCtkJlQtwtWE3gDp7npgh0r%2F%2F2S02sEh4l0hdbhFNQ36UTBu0goA%2BWSYtUw3r7ixAY6pgHedA9zg8ZIW4TL1zkSRquX8T%2BuYFEnJ906pjZ4VsPWVJAcqPpSejHohAKEk1u4rF7VHTpyuBjcHfbIOEuF%2BdcaaA7YD%2FpYGwZCDYkZ6Iiagepg8%2FesGMTCyJ1yKq3bSXUWZwP3I%2FP%2B4MNpM2LioFRDJywWnlfpgnuC7k4U7jk%2FoAbX4EmglKf67PcLDHXWByNbfk2wcvmnwJtgzfWjCnXFwZ5Xl875&X-Amz-Signature=22154bc07f9a343c446428de4bc23811383051cea66230d734fdac805e480c92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCRJPROG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9bt09Vujv7Yf1kR9LMp7wNipLMP0L%2FG%2BchYw%2FTFLSigIhAITwbB5eGKC6HU9jkrLtrb9ITlvSNwHwysGM1vUAkO2bKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxF4oWMQ6b4NggnxVUq3AMJfgtLMlOEu3NhtDyXrA9EnbxeZxrnCSIV8aSrWbvVws3v4bxLkG6EiALiDjZNbW0GLs9sft0mtHwfjmrqP7x4UvlBLxPUsCsa2%2BGUny%2FcPpas2kj2qf%2FTJXp9wrJlpK9OD3CttwmUgZ8yH%2FbdPARWDARDWhAWZQmSw2ljg%2F3dpMnS6YjHm05%2F38n71ItCK9gM9tXlCOjAx7gCX0p8W%2FFLOKx856MvkGJr%2BBMB7133rLQIeGs%2BnYJPE1ESsTQlka7djEARRV8orfq%2BasTgMFLcpXaE6Y%2FRt3NXOW283qj3qBnlBV3QRM4a3uKvEYb8yejh1hRG7doG%2BGspy19dlbBNsaFXv7ecU2XlNgkyFpIEaxRqQGp57mCRAPa2qxKUpKT0T1AZ6c4TZMNiWS3S1BPyRA34HcBFJVNZUxOYzLbKsjSJCrgZMazLEclWWAtKic8m1Qa6lwTBIm148W1TRiYXZm2vPYP94UNzd%2BR9TxT9%2F7XL%2FL4apgLMvO3gtSi8D4QgPLpcD8APY2xsfIJiOqvSTU08d%2B7FViuxcjtlobJIEk9vOqpFBZrpvNjyrZ7CQVt8w2K7U82aPKk3plXA4krvYVvU6%2BbC%2BgQKtSSoHe8tNMr%2BZGBUoyNXtsIN4TCYv%2BLEBjqkAQUIz%2FAd%2FzKjLcA5IFgZcNqS1sLoIDCXry23V5YXap4dF1D9M8C2Hjv2jS1zQFGU0QLlTbzf6FYqduF8GhbHUUAmhk7TRzGg5ru3nLFb1jYWFjPh1kWUblRKsoiWn1aBiT1tbDMVEhcAfFN4YIZlcWO7N0eeapwTqsuo5P2%2FK5520RFEzxxL%2B9jd2xxAcip5vAQYXH6mM6I4xwbpbmB0cPqHq2FU&X-Amz-Signature=fe21fb52b3fabaca1603ce128ac7bcb751b700ebd082837d7356537b48b6973f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5YUPMU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXSxs66QjIZZLIncWx93MB6jnSWFfJgTrC6kR2HB2xvAiBFFLjaM3jV0mMM4p1f7PJQrPhaWcBMWS%2FRcGmT9SWLTyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmyM3BdiheRIqytW3KtwDZlFHKOhIQ8JmvclmTrGfC6VVzxgxWOXZoqabY%2BqySqNq5aTazM9%2Fnetu%2B8E7NmbzGora0VcQGn1ciZxqLry2GPWUpPJ4RBslxbkxyIpmZV5o8NVyoASKsSBBoFhiUFsAau8Is7f3QmwvWAKrd4u4Xnfgq%2FXuaaOj%2BNhturnrFy0YvtLpvO3tc1n3UH4TbwJD6IZyKDPTC17qh9hDO4DPz8qb88NKR58RWLX6nU9e3tMZFSVHqTIP87%2FlFYhSdl5Q640SkaALYHGOFF4I0pfLeM3ZhqNPe%2Fge9wekc58aMuBae8P3g3ohF9ZUTew7Alg3IhWjXURqrY212hiR%2BjvY9ejl4Hr2wHWzTg7Bp8DDL%2F2nV5QGHLt24PnXlCrRXH5FwnaCZptxxCBIRQz4Wnaex05EAIFYWo5qa4ixCLyfLYzF0oeeg%2FgkyRCUoTcztB202bJgrkkdjr%2BFFsj5k6J%2BkhStijW6hKgDKtbNV%2BF9oDPpEEV%2BwaLbX21OnEoH13Zk%2BjEfNBzVJKJtktRNli70rUSpeTvqQh%2Bqd4YEe5g0MBqB0NbaP%2FyhC8KWe8GYTYethDCtkJlQtwtWE3gDp7npgh0r%2F%2F2S02sEh4l0hdbhFNQ36UTBu0goA%2BWSYtUw3r7ixAY6pgHedA9zg8ZIW4TL1zkSRquX8T%2BuYFEnJ906pjZ4VsPWVJAcqPpSejHohAKEk1u4rF7VHTpyuBjcHfbIOEuF%2BdcaaA7YD%2FpYGwZCDYkZ6Iiagepg8%2FesGMTCyJ1yKq3bSXUWZwP3I%2FP%2B4MNpM2LioFRDJywWnlfpgnuC7k4U7jk%2FoAbX4EmglKf67PcLDHXWByNbfk2wcvmnwJtgzfWjCnXFwZ5Xl875&X-Amz-Signature=9a5fa4e097d5983d966265e9ee0c75590ab383d3261b3b47e7c2bc579eaec19e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGHIKOAV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDaT9x0CeD1P4G7E9thp1Y%2FxNmJjof0%2FaPyDbbRQocywIgEbQuYpK%2FG4LlNMEvjW%2BhUBSfr77X%2BNCRqhDrxuSpCacqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG61E9xgobrsH%2FuPECrcA9A3%2FpomIQ3rhLAV%2BK13SMtgFL0m%2BKy3ZlaCCne%2Beobbbt0f6gcjHa5Kg1wiMPnUmfAPI%2BRR2sWM7U3P9bMU2e7RYkD5XOUEoBiXwWSqv6f%2FMz25t71wEjPVop%2Fyw6PsDIU9dkcIlyxxAojPwR3IsvZ7pNqvF5vWqxVcBM1M4ym%2FGA2vHncxM0FFq9zuJv9Ltc%2BjkPmk6jRM1vlPGyfRhOItR3MX46LMABpgFYb%2FVTyfO6r%2FHjgXA8IyCTrV1xi0pvT56ZEu7UzVb1LERtBt8F4TmW4EiAzEu3mzpkZSv2uyinkPuvzrbKYMnkRDnUdfUrGK1tzQdbYTxsSSHm0WDftO2UEqtbLxlK2GGHxsvwGssgK11HKV0jRG4rnO8FvMpSn%2FLsRccVwKTPSlkH9HsdobzXA8XDxp2c4Uq3lRFSQjwvF5AzWeBorQMKE35rYiUpuJ8plp5PnlXrvFj%2Bq7Z6kkFAyxAmsISA7UqOxenEx1Xk%2FKbYcAaWNUkCkfrzENzcwO7Mr4PpEU9oI8DkFIidJAp%2F3hyE%2FXt%2FmFEBFuBKO4vZKFDmGIwNRp9dJ%2BYdD7QkWmGOaKN8DugzZFz9LiuEofO97%2FkXLcpNWNpHNQ9E2PMlf32%2ByDy4OteQv4MOS%2F4sQGOqUBvR7XyW3hDnCZtppfxeu36Uuwn7DGyJdAq9AjZ9xIgkiXY%2FWkPvDl%2Fxx%2Bib9ZV2WuLAQ%2FS5d%2B4%2BriOGvUsN3RXAgL3jrb4pJO%2BVl%2FUo9ghO6z%2F55R8TIAeJTfytcWR8o5HvFyv1yZ1pkBY4bq8b9KGSjsjkxGOFGVSj%2FplMEZWTLDLWE6FDX5u5g1wWcDoUmbznMUpBnAbzImuuZn3crhD4uioevq&X-Amz-Signature=244096e1f6edeb6d27652505f7e90eccde79dae580a9b3b19acaef2b9fb66702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WIRQLXZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzDpemB1c%2FuRNOB10OPO0wBcIviaKM60TKOf0jP50HOAiEAz7XnopL4faACp5iTWTtRUB1%2BPiGa7xlx%2BzEMAfW7OmAqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx91Cac%2FUYMEU7MkSrcAzN7SXIFyynpMNI3ck5DcsWAgT5I2CAwgyE9l3haZnp10fJ1vf1NYLw9O4k7Cjr4vzyu75v5GMOPOHA87E6D%2Bqd2hR5WlBh4gaGMIjOMGc0HxVesBkyNuxgSl1qfiqiCpCTfL0TpnYRmaVppjaSnB1C82aL1iPbM2igF5zzxhaQ5EnsUI%2FajA0XKn3EMGjoXUglZSF2K0Sh12DBhH4vh4itZb7trQFCwodA0npnFnTreTJ5Ek%2FtGyvuuAF3PiWEl1TZuoKxXbhbm9BYFmDU%2BQ%2FBF4j%2F%2FaunO5HAo9MToymnvwuNF2jexEaCbgxbgcDhY0MEvvLKObRqcyfoSwutfQdq2wl5THFySTAjW8mX1rZ%2Bz1DhEdH0BsUSN85GJhBNWgmDNsUzQpTBeH3dFTvmsp7TGT14z2lF68ziYyuItSP8YzPqzBgoMVTDnKCAZvxyZcCUJePIxjU464vqfKpFsNJ5kaQr%2BY5nOrkIA8aFAu9gEa0KPBcTcINzPDHtlLYh7f41kCshvNCIHsAaiM6CrN4E%2FniMHpAX%2Fbu%2BDHxNFSWx6uQe%2FyUjNJYCHydxizwl4jOZ3zXEXmswyvIzz%2B0SmTKtU7NtLqAy6cvbwpAFufiN%2BRQTBHn2CHGgTX1ZIMIa%2F4sQGOqUBEHzoQyHoz%2BARVyRlPxltFkQOs6vzVL85uTdio9it3dFii%2B2e4NxG8p0UmjB%2F6hnu0lZOExsk3xsBCVQXaradYzA4BnZ2jDeFEiK9P8xoBQDiPMaqnCEHS9lqq6kQFg0QtcZk%2F4765yNm8nK4wzbJON%2BJik2ty2qyRHa%2BdV53FTRG76qwigjJ7vUoMf7p9seqd5PmRN38aIWTNVw0f5e3Fa4hLmbq&X-Amz-Signature=0629eaae33c7eafa4812691684723cb3c8d02a0a4531a79a98f8e2439e911362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MFJH5KL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQzPu69wK93XHO3Dj5J564vMFcnIGbyOCzFsbG4LcpegIgVoIsGd6txu34mHQ98eBPaeQapicdCDvw5yoFZS2YR3kqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3MEuiG0%2FVu%2BuaNOSrcA%2BUUAqhzSUycurjMrHSlY8evvVJoMsxBubDTX3fgXVf74iyMolllYET8IUi9Vhwg4V5ceUhUeiq9UHhLS9PQfl79OBd9X7gCVkCFsbeYGcF0xd1r%2FTirTC70pOE%2FKrva62DNEvo4IbzyX3NrjMsJyHcCr2KAXFUU884qNkjDqJyBbFPMlyEBwIwyx%2FRHr1IJyzlQJ0aJVMsbFIPxdnbkngOUrnIcJTcsmf%2FBYtYyCYPi1vLR7qVU6Ntu9l3Z1I%2FiiZcELPRQJPYEDf7nrX%2Bjz3Otja0hPp9jPxa59DnkmJfh7UyeahjSVHV%2B39sWqCspEMuZlpRDb7SuAUhqni52n0TSMRETtjfO7Zhpp3zxjPm7BxnemSMYZwgzTfhtBeW73Y4jWQIBlOdJHG1y3ALG0X80916Qju%2F%2F3gv2QiTHz2RRf1R9aY%2BR3OuV1FJqSLcqH4LFMDKAhG4vr4%2FcbjdxRi6U%2F9axDL7abHXMcRlk%2BNaoMWjqKHWIu5LSLV4Y2eroJHUWLa2eoTcw4lJhG0vuRluIjzdDexuGvRhU4JF1bZ8wXGZvqRnTriwIkJq8nQGQZNhwf9UpV52T6%2FvOAEi2YcWcaEvc0Kq5SckXhubzP3SQHNP9ETXcK1PefiqiMI2%2F4sQGOqUBveRLE3vMDNp1NYI8Yl8s6X1DGy5FPttt5G4SZxbu%2BcKTKC23pIoYnrL%2F9trd8Peoaze%2FiiJ09oXj4PAPV%2Fivn9BRzDg0dfm1gCWtEG33NcI0UFk8r5PVnQnk%2BHox9TmFvjAMYmod3YAKOGTHvaEvSnKp4cOkZVb2BWvx3mA%2FpVx3AETACS9gXMZZyt4H2vMhZIpmve145vMZvX8ywSQnAKgwjR7d&X-Amz-Signature=65bc90ee7f954a362922f424e13faf8ef5c295183490d901e1f951033daa9964&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKBUJTXS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFD%2Fzd3XaCqf720gBSKNYOjiGbhqHlRwITJuAedZDYMAiA5xLDkWiLaLXOfkZR9eEMxiV5dnUycrM5K0kbIBkgadCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzMiwKJduDD%2Fep9l0KtwDQIQXKbJc4xZQy8%2BGf3bidu4SDHR7BLT4sHUGhmOsPiTygJM%2F4NnZLefevS73BPwm9QNRdahjOF%2FOMBonHdVpf4%2FClh8VIHtwX5HJE69QujhpiclmytBOXmUW%2BEQj9abwk2qWdz1ubiin%2B%2FPsqO2PytBqB4FG4XXNs0OxS61LroDNU9Nl1GyDFobmLYhvmcMax1JpuQeQ7k8Ofubmub%2BGtPUrAeJeck0WE0DnWidExDKExvzFPXlMYGb9Kv9SkrDczZdqSYWvYRXqEMB7YiSVeo5njhe4nQbtypHkSMSBeaDbAqY7vREKaWIeIkhzndtTDBaQLT5mQ9bn9g2mU8QYF0f0kJL0z5Rk%2FEkeUR%2BddzJbp3%2B2LU1K6PlcgjmEYPTT5ZLKroa%2FPPwHLalODcd%2Fv2wLnyxA%2FqtsxZcPHIyYsgUIiUEcZCAelbu3hwc8rSRhKBRA9VJyXbLP6UGdpeyy%2BNyEyS5%2BUhix2YyNuN107mIFZ4g%2B4I73ljUkVNWmUHdgQPkg3Pdvf3%2Bz6rvak7unW7R4MQRM6Eyaz1FNRTpxjWD1dwe4ApO7ySyAtj32EDQyGsH9mgxoaG48ySM9kGPDEj382aBcZazyUX4TrqF%2BZt%2FMmd6vhIoD0%2BgoLqMw47%2FixAY6pgEKHytXQFXsneV26HLYM4OGEmcBWf76tretioHxEY6cJQp%2FmbnOXZ3SC18RaL%2BJkHGrAi4nxHEPaQr25yXCuTp%2BlNM92h7FXipwlEsySZx7utbm%2Bkx%2Fv41dELkvMwsyGqbNUAOLnepWMhT%2B43M2JTT0HNATvb%2BaBdBrSZqwq%2F%2FYwyCNWwQt07nfkfKryoY7kL3jLx3gUf%2BdrTmoKL52FYSeBpqo9hlE&X-Amz-Signature=1c404e85f981708c99a4a5687a363b78efb591528dd46d9893115314b42c3e0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSAGT7VY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaOB910CKQDvTzIz61A4K%2BgUkLZH1xuSc0T7vffJob1wIhAIsainP0RAkdBRFKOoEqRmyV%2BhoqF6TMzsMlK6k0IFwLKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1v%2FO4C25gTUa1PjMq3AOefz6UojCT0AYznE4rObmbDkA72ybxGhWATEw3gIUng8hehJQ9A4qAnbBT8eArXwNo9PP4gY9nR%2F1Knv1FUNeoLkXtaT4aLoFdbywcHalSCXbjvVFhZo%2Bv2OahFdyVugh0t%2FUBeZQHzS93tJ7ZWMdpTCpBhT8K%2B1nsqtsUFeR7COKapBs9XxH1GqpP62m%2FaNhp9zlBt2sumFyYMDOZpeupPG%2BBaj%2BFRgUeuJp%2Bb1Wu1oAqEdqPS7Mm6Y7meoSUv4fn8jE4Khib9l%2FtcWHHLyVVHvUSkHR%2FK5lKj5ebozVa8jNHn%2B66nfGUkLengeB22%2BqXkpMHpq2lLiPUQ%2BlBR1Ee%2Fu4yUJVuNSR8gdxUeKkJ6OyXgRfiZgvDGkhE05yeLO3QeCGtH0wqAWJ%2FoNWpcCsAt9qNr3IieMzH4kPF5oPj0QjSYcftFvNDizdIDGnvbcgvGO12xCnZ435EJgU6tBO0qiGtswlm942lzUHE1GxezBjw5huMJhI7MlUf0Oi8MzUKUG5x%2B13kQY9j%2BhOphh0Ded9R8uW2Y75%2FFJ6RMwmt7LaXojm1dXp4sKxQhf7sXHBr6JP26U4oNvrnlYF21KWnlMo%2Bk%2Fw1u4nE7MH8E0LM6IuS6CIFlcd86OQSxzDtvuLEBjqkAQWmD%2FD8fR6MJs5baIZjomXcN5wKfnmrb3IxytDfHPZMRnbC2alp6Oi9G7d1aJjUl7CXUTJJ5FV4craRvbQzGi5IpCjZKznZXqq9UqwVpzPfEVPeU8eo4No6B4NyiX6X9%2BOJvNINjX5VSKccN%2BrM7jOe9wuqTln8LOcP4SE3CYogMB3hihG8T5xWFdLg1%2FiImmsb%2BZXdFzFeABLok1G2nvs9BXWw&X-Amz-Signature=a5f515cf49cd0a5f9fa2c5810a8943e3c338153ed8ccdcc79e3139247d1b7a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5YUPMU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXSxs66QjIZZLIncWx93MB6jnSWFfJgTrC6kR2HB2xvAiBFFLjaM3jV0mMM4p1f7PJQrPhaWcBMWS%2FRcGmT9SWLTyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmyM3BdiheRIqytW3KtwDZlFHKOhIQ8JmvclmTrGfC6VVzxgxWOXZoqabY%2BqySqNq5aTazM9%2Fnetu%2B8E7NmbzGora0VcQGn1ciZxqLry2GPWUpPJ4RBslxbkxyIpmZV5o8NVyoASKsSBBoFhiUFsAau8Is7f3QmwvWAKrd4u4Xnfgq%2FXuaaOj%2BNhturnrFy0YvtLpvO3tc1n3UH4TbwJD6IZyKDPTC17qh9hDO4DPz8qb88NKR58RWLX6nU9e3tMZFSVHqTIP87%2FlFYhSdl5Q640SkaALYHGOFF4I0pfLeM3ZhqNPe%2Fge9wekc58aMuBae8P3g3ohF9ZUTew7Alg3IhWjXURqrY212hiR%2BjvY9ejl4Hr2wHWzTg7Bp8DDL%2F2nV5QGHLt24PnXlCrRXH5FwnaCZptxxCBIRQz4Wnaex05EAIFYWo5qa4ixCLyfLYzF0oeeg%2FgkyRCUoTcztB202bJgrkkdjr%2BFFsj5k6J%2BkhStijW6hKgDKtbNV%2BF9oDPpEEV%2BwaLbX21OnEoH13Zk%2BjEfNBzVJKJtktRNli70rUSpeTvqQh%2Bqd4YEe5g0MBqB0NbaP%2FyhC8KWe8GYTYethDCtkJlQtwtWE3gDp7npgh0r%2F%2F2S02sEh4l0hdbhFNQ36UTBu0goA%2BWSYtUw3r7ixAY6pgHedA9zg8ZIW4TL1zkSRquX8T%2BuYFEnJ906pjZ4VsPWVJAcqPpSejHohAKEk1u4rF7VHTpyuBjcHfbIOEuF%2BdcaaA7YD%2FpYGwZCDYkZ6Iiagepg8%2FesGMTCyJ1yKq3bSXUWZwP3I%2FP%2B4MNpM2LioFRDJywWnlfpgnuC7k4U7jk%2FoAbX4EmglKf67PcLDHXWByNbfk2wcvmnwJtgzfWjCnXFwZ5Xl875&X-Amz-Signature=93170e6603bbd15e06e69579b22da46baa53462a834e3b404ffddbbd2efb8714&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5YUPMU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXSxs66QjIZZLIncWx93MB6jnSWFfJgTrC6kR2HB2xvAiBFFLjaM3jV0mMM4p1f7PJQrPhaWcBMWS%2FRcGmT9SWLTyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmyM3BdiheRIqytW3KtwDZlFHKOhIQ8JmvclmTrGfC6VVzxgxWOXZoqabY%2BqySqNq5aTazM9%2Fnetu%2B8E7NmbzGora0VcQGn1ciZxqLry2GPWUpPJ4RBslxbkxyIpmZV5o8NVyoASKsSBBoFhiUFsAau8Is7f3QmwvWAKrd4u4Xnfgq%2FXuaaOj%2BNhturnrFy0YvtLpvO3tc1n3UH4TbwJD6IZyKDPTC17qh9hDO4DPz8qb88NKR58RWLX6nU9e3tMZFSVHqTIP87%2FlFYhSdl5Q640SkaALYHGOFF4I0pfLeM3ZhqNPe%2Fge9wekc58aMuBae8P3g3ohF9ZUTew7Alg3IhWjXURqrY212hiR%2BjvY9ejl4Hr2wHWzTg7Bp8DDL%2F2nV5QGHLt24PnXlCrRXH5FwnaCZptxxCBIRQz4Wnaex05EAIFYWo5qa4ixCLyfLYzF0oeeg%2FgkyRCUoTcztB202bJgrkkdjr%2BFFsj5k6J%2BkhStijW6hKgDKtbNV%2BF9oDPpEEV%2BwaLbX21OnEoH13Zk%2BjEfNBzVJKJtktRNli70rUSpeTvqQh%2Bqd4YEe5g0MBqB0NbaP%2FyhC8KWe8GYTYethDCtkJlQtwtWE3gDp7npgh0r%2F%2F2S02sEh4l0hdbhFNQ36UTBu0goA%2BWSYtUw3r7ixAY6pgHedA9zg8ZIW4TL1zkSRquX8T%2BuYFEnJ906pjZ4VsPWVJAcqPpSejHohAKEk1u4rF7VHTpyuBjcHfbIOEuF%2BdcaaA7YD%2FpYGwZCDYkZ6Iiagepg8%2FesGMTCyJ1yKq3bSXUWZwP3I%2FP%2B4MNpM2LioFRDJywWnlfpgnuC7k4U7jk%2FoAbX4EmglKf67PcLDHXWByNbfk2wcvmnwJtgzfWjCnXFwZ5Xl875&X-Amz-Signature=602e41afcd764db692789ea2a7072b07f43667c2881f3e86f2b50a7d817e2ac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNWW2NCX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWzQXF3iLayrfQ1aXdFkHMkUbunA50Rbw1Q7GPeSW3MQIgR8X702ZT2KWugyitbBrfJs05eXQBuQLhOehZ0niK5YEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqSZnlEQegk9Jtm6ircA4hGP8cAg%2BsBJJhVdDV6pB4mp4ZmMxkS934rEFZ77Vv3PYfM9PVjeNcR79BFPjTpAvyPHVsI5NZr2yUjnMoqTS81d0WFCtxTBkk6uRUs6MO%2Fy64MQp5EMAtUN%2BlKi1BfoczODbceAP%2FbDD2q9C4knL3GQ%2BrQ5QpPco%2FSvQR%2BHp7VAPTUEywcc%2FOE1iDc8Z04irBI%2BfhWhRseQm7HMkcnrXD4fl9Su26UHcQBSBI2WAfxC%2By3FmJbwY%2FK0hVHQA5ckvix1t1PFCjzgLHUB3MUrgM6uFvKWoc1Bg43ezmfTIgvGPE6ic1RskmmdZyYAXaT6sGpTLH6Jlm6r0oOu2rFKzqd4%2Bh4B6wTPPP%2BUvM3ddLn4ku6vIAwbd5h5pBRIgIl8PbW0tA7n%2FJBQ69BbHWzduM9tMdfG1sD1fWxjjrafBJWINtd8zDz6rC1YYTssKqjcD4pNWSd5UKvtqr89fPrw8MwCICRX998z%2Flpqf0hcmaFJN7aKQw9yrRqf%2FPvdiyoOUWUHgEYe4iJvmN%2BUM7BfNvXsaeJ%2FVmXqye0zX29M7JUJbTrBBgy%2BLS968RdhSh9jTBy0QnQOykS2TqmFZt2BBlWmLd0FrPEaYdyy2yiPgwTNO0arYCfrHrZ8DnzMNu%2B4sQGOqUBGRJqygke31sZNommPkd2ttT49VWSHO4GXtbwG8mx0rrAmETY%2FN8V8PkdTRUNzCtHt9lLuDOcyc3Kt43MBY%2FcsI2quEaY7DlPCZqYouVAKESWqOf75HjbTCmcnEw%2FFgO8yPi3P5XQEkE5S4faGUHMEeBDN9QpQ359Dpl58D7uKHxT7khwZeNJ54wpErM4r5m6HPQqwhRZWVC0GSLeQTbfUdEBGWsf&X-Amz-Signature=c89fbcf9632bd399dc96a0f3d147b3d42425cd29c40361bfcab8bb3aff1c1375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNWW2NCX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWzQXF3iLayrfQ1aXdFkHMkUbunA50Rbw1Q7GPeSW3MQIgR8X702ZT2KWugyitbBrfJs05eXQBuQLhOehZ0niK5YEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqSZnlEQegk9Jtm6ircA4hGP8cAg%2BsBJJhVdDV6pB4mp4ZmMxkS934rEFZ77Vv3PYfM9PVjeNcR79BFPjTpAvyPHVsI5NZr2yUjnMoqTS81d0WFCtxTBkk6uRUs6MO%2Fy64MQp5EMAtUN%2BlKi1BfoczODbceAP%2FbDD2q9C4knL3GQ%2BrQ5QpPco%2FSvQR%2BHp7VAPTUEywcc%2FOE1iDc8Z04irBI%2BfhWhRseQm7HMkcnrXD4fl9Su26UHcQBSBI2WAfxC%2By3FmJbwY%2FK0hVHQA5ckvix1t1PFCjzgLHUB3MUrgM6uFvKWoc1Bg43ezmfTIgvGPE6ic1RskmmdZyYAXaT6sGpTLH6Jlm6r0oOu2rFKzqd4%2Bh4B6wTPPP%2BUvM3ddLn4ku6vIAwbd5h5pBRIgIl8PbW0tA7n%2FJBQ69BbHWzduM9tMdfG1sD1fWxjjrafBJWINtd8zDz6rC1YYTssKqjcD4pNWSd5UKvtqr89fPrw8MwCICRX998z%2Flpqf0hcmaFJN7aKQw9yrRqf%2FPvdiyoOUWUHgEYe4iJvmN%2BUM7BfNvXsaeJ%2FVmXqye0zX29M7JUJbTrBBgy%2BLS968RdhSh9jTBy0QnQOykS2TqmFZt2BBlWmLd0FrPEaYdyy2yiPgwTNO0arYCfrHrZ8DnzMNu%2B4sQGOqUBGRJqygke31sZNommPkd2ttT49VWSHO4GXtbwG8mx0rrAmETY%2FN8V8PkdTRUNzCtHt9lLuDOcyc3Kt43MBY%2FcsI2quEaY7DlPCZqYouVAKESWqOf75HjbTCmcnEw%2FFgO8yPi3P5XQEkE5S4faGUHMEeBDN9QpQ359Dpl58D7uKHxT7khwZeNJ54wpErM4r5m6HPQqwhRZWVC0GSLeQTbfUdEBGWsf&X-Amz-Signature=7b779c73edebed7abd0ef89325557d10349f5bd4720969a63bfcb198c16154b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNWW2NCX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWzQXF3iLayrfQ1aXdFkHMkUbunA50Rbw1Q7GPeSW3MQIgR8X702ZT2KWugyitbBrfJs05eXQBuQLhOehZ0niK5YEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqSZnlEQegk9Jtm6ircA4hGP8cAg%2BsBJJhVdDV6pB4mp4ZmMxkS934rEFZ77Vv3PYfM9PVjeNcR79BFPjTpAvyPHVsI5NZr2yUjnMoqTS81d0WFCtxTBkk6uRUs6MO%2Fy64MQp5EMAtUN%2BlKi1BfoczODbceAP%2FbDD2q9C4knL3GQ%2BrQ5QpPco%2FSvQR%2BHp7VAPTUEywcc%2FOE1iDc8Z04irBI%2BfhWhRseQm7HMkcnrXD4fl9Su26UHcQBSBI2WAfxC%2By3FmJbwY%2FK0hVHQA5ckvix1t1PFCjzgLHUB3MUrgM6uFvKWoc1Bg43ezmfTIgvGPE6ic1RskmmdZyYAXaT6sGpTLH6Jlm6r0oOu2rFKzqd4%2Bh4B6wTPPP%2BUvM3ddLn4ku6vIAwbd5h5pBRIgIl8PbW0tA7n%2FJBQ69BbHWzduM9tMdfG1sD1fWxjjrafBJWINtd8zDz6rC1YYTssKqjcD4pNWSd5UKvtqr89fPrw8MwCICRX998z%2Flpqf0hcmaFJN7aKQw9yrRqf%2FPvdiyoOUWUHgEYe4iJvmN%2BUM7BfNvXsaeJ%2FVmXqye0zX29M7JUJbTrBBgy%2BLS968RdhSh9jTBy0QnQOykS2TqmFZt2BBlWmLd0FrPEaYdyy2yiPgwTNO0arYCfrHrZ8DnzMNu%2B4sQGOqUBGRJqygke31sZNommPkd2ttT49VWSHO4GXtbwG8mx0rrAmETY%2FN8V8PkdTRUNzCtHt9lLuDOcyc3Kt43MBY%2FcsI2quEaY7DlPCZqYouVAKESWqOf75HjbTCmcnEw%2FFgO8yPi3P5XQEkE5S4faGUHMEeBDN9QpQ359Dpl58D7uKHxT7khwZeNJ54wpErM4r5m6HPQqwhRZWVC0GSLeQTbfUdEBGWsf&X-Amz-Signature=5c2cd110d734f7e4c7923fcc2beeddd626d3ea117478e3004462b5924aac8d8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNWW2NCX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWzQXF3iLayrfQ1aXdFkHMkUbunA50Rbw1Q7GPeSW3MQIgR8X702ZT2KWugyitbBrfJs05eXQBuQLhOehZ0niK5YEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqSZnlEQegk9Jtm6ircA4hGP8cAg%2BsBJJhVdDV6pB4mp4ZmMxkS934rEFZ77Vv3PYfM9PVjeNcR79BFPjTpAvyPHVsI5NZr2yUjnMoqTS81d0WFCtxTBkk6uRUs6MO%2Fy64MQp5EMAtUN%2BlKi1BfoczODbceAP%2FbDD2q9C4knL3GQ%2BrQ5QpPco%2FSvQR%2BHp7VAPTUEywcc%2FOE1iDc8Z04irBI%2BfhWhRseQm7HMkcnrXD4fl9Su26UHcQBSBI2WAfxC%2By3FmJbwY%2FK0hVHQA5ckvix1t1PFCjzgLHUB3MUrgM6uFvKWoc1Bg43ezmfTIgvGPE6ic1RskmmdZyYAXaT6sGpTLH6Jlm6r0oOu2rFKzqd4%2Bh4B6wTPPP%2BUvM3ddLn4ku6vIAwbd5h5pBRIgIl8PbW0tA7n%2FJBQ69BbHWzduM9tMdfG1sD1fWxjjrafBJWINtd8zDz6rC1YYTssKqjcD4pNWSd5UKvtqr89fPrw8MwCICRX998z%2Flpqf0hcmaFJN7aKQw9yrRqf%2FPvdiyoOUWUHgEYe4iJvmN%2BUM7BfNvXsaeJ%2FVmXqye0zX29M7JUJbTrBBgy%2BLS968RdhSh9jTBy0QnQOykS2TqmFZt2BBlWmLd0FrPEaYdyy2yiPgwTNO0arYCfrHrZ8DnzMNu%2B4sQGOqUBGRJqygke31sZNommPkd2ttT49VWSHO4GXtbwG8mx0rrAmETY%2FN8V8PkdTRUNzCtHt9lLuDOcyc3Kt43MBY%2FcsI2quEaY7DlPCZqYouVAKESWqOf75HjbTCmcnEw%2FFgO8yPi3P5XQEkE5S4faGUHMEeBDN9QpQ359Dpl58D7uKHxT7khwZeNJ54wpErM4r5m6HPQqwhRZWVC0GSLeQTbfUdEBGWsf&X-Amz-Signature=4096dd15899e2723408f474519d2c8a1e4f6e366fbd722e56a70bada5a0477e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNWW2NCX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWzQXF3iLayrfQ1aXdFkHMkUbunA50Rbw1Q7GPeSW3MQIgR8X702ZT2KWugyitbBrfJs05eXQBuQLhOehZ0niK5YEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqSZnlEQegk9Jtm6ircA4hGP8cAg%2BsBJJhVdDV6pB4mp4ZmMxkS934rEFZ77Vv3PYfM9PVjeNcR79BFPjTpAvyPHVsI5NZr2yUjnMoqTS81d0WFCtxTBkk6uRUs6MO%2Fy64MQp5EMAtUN%2BlKi1BfoczODbceAP%2FbDD2q9C4knL3GQ%2BrQ5QpPco%2FSvQR%2BHp7VAPTUEywcc%2FOE1iDc8Z04irBI%2BfhWhRseQm7HMkcnrXD4fl9Su26UHcQBSBI2WAfxC%2By3FmJbwY%2FK0hVHQA5ckvix1t1PFCjzgLHUB3MUrgM6uFvKWoc1Bg43ezmfTIgvGPE6ic1RskmmdZyYAXaT6sGpTLH6Jlm6r0oOu2rFKzqd4%2Bh4B6wTPPP%2BUvM3ddLn4ku6vIAwbd5h5pBRIgIl8PbW0tA7n%2FJBQ69BbHWzduM9tMdfG1sD1fWxjjrafBJWINtd8zDz6rC1YYTssKqjcD4pNWSd5UKvtqr89fPrw8MwCICRX998z%2Flpqf0hcmaFJN7aKQw9yrRqf%2FPvdiyoOUWUHgEYe4iJvmN%2BUM7BfNvXsaeJ%2FVmXqye0zX29M7JUJbTrBBgy%2BLS968RdhSh9jTBy0QnQOykS2TqmFZt2BBlWmLd0FrPEaYdyy2yiPgwTNO0arYCfrHrZ8DnzMNu%2B4sQGOqUBGRJqygke31sZNommPkd2ttT49VWSHO4GXtbwG8mx0rrAmETY%2FN8V8PkdTRUNzCtHt9lLuDOcyc3Kt43MBY%2FcsI2quEaY7DlPCZqYouVAKESWqOf75HjbTCmcnEw%2FFgO8yPi3P5XQEkE5S4faGUHMEeBDN9QpQ359Dpl58D7uKHxT7khwZeNJ54wpErM4r5m6HPQqwhRZWVC0GSLeQTbfUdEBGWsf&X-Amz-Signature=2b44be7fbb8059883bb2175b01ccce3e5aba43c2f716f10b2c6cc341186a1926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNWW2NCX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWzQXF3iLayrfQ1aXdFkHMkUbunA50Rbw1Q7GPeSW3MQIgR8X702ZT2KWugyitbBrfJs05eXQBuQLhOehZ0niK5YEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqSZnlEQegk9Jtm6ircA4hGP8cAg%2BsBJJhVdDV6pB4mp4ZmMxkS934rEFZ77Vv3PYfM9PVjeNcR79BFPjTpAvyPHVsI5NZr2yUjnMoqTS81d0WFCtxTBkk6uRUs6MO%2Fy64MQp5EMAtUN%2BlKi1BfoczODbceAP%2FbDD2q9C4knL3GQ%2BrQ5QpPco%2FSvQR%2BHp7VAPTUEywcc%2FOE1iDc8Z04irBI%2BfhWhRseQm7HMkcnrXD4fl9Su26UHcQBSBI2WAfxC%2By3FmJbwY%2FK0hVHQA5ckvix1t1PFCjzgLHUB3MUrgM6uFvKWoc1Bg43ezmfTIgvGPE6ic1RskmmdZyYAXaT6sGpTLH6Jlm6r0oOu2rFKzqd4%2Bh4B6wTPPP%2BUvM3ddLn4ku6vIAwbd5h5pBRIgIl8PbW0tA7n%2FJBQ69BbHWzduM9tMdfG1sD1fWxjjrafBJWINtd8zDz6rC1YYTssKqjcD4pNWSd5UKvtqr89fPrw8MwCICRX998z%2Flpqf0hcmaFJN7aKQw9yrRqf%2FPvdiyoOUWUHgEYe4iJvmN%2BUM7BfNvXsaeJ%2FVmXqye0zX29M7JUJbTrBBgy%2BLS968RdhSh9jTBy0QnQOykS2TqmFZt2BBlWmLd0FrPEaYdyy2yiPgwTNO0arYCfrHrZ8DnzMNu%2B4sQGOqUBGRJqygke31sZNommPkd2ttT49VWSHO4GXtbwG8mx0rrAmETY%2FN8V8PkdTRUNzCtHt9lLuDOcyc3Kt43MBY%2FcsI2quEaY7DlPCZqYouVAKESWqOf75HjbTCmcnEw%2FFgO8yPi3P5XQEkE5S4faGUHMEeBDN9QpQ359Dpl58D7uKHxT7khwZeNJ54wpErM4r5m6HPQqwhRZWVC0GSLeQTbfUdEBGWsf&X-Amz-Signature=0113e5ae8f90820d7c087412d73feedb4f4bf24396619c3c15521aad6de5399f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNWW2NCX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWzQXF3iLayrfQ1aXdFkHMkUbunA50Rbw1Q7GPeSW3MQIgR8X702ZT2KWugyitbBrfJs05eXQBuQLhOehZ0niK5YEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqSZnlEQegk9Jtm6ircA4hGP8cAg%2BsBJJhVdDV6pB4mp4ZmMxkS934rEFZ77Vv3PYfM9PVjeNcR79BFPjTpAvyPHVsI5NZr2yUjnMoqTS81d0WFCtxTBkk6uRUs6MO%2Fy64MQp5EMAtUN%2BlKi1BfoczODbceAP%2FbDD2q9C4knL3GQ%2BrQ5QpPco%2FSvQR%2BHp7VAPTUEywcc%2FOE1iDc8Z04irBI%2BfhWhRseQm7HMkcnrXD4fl9Su26UHcQBSBI2WAfxC%2By3FmJbwY%2FK0hVHQA5ckvix1t1PFCjzgLHUB3MUrgM6uFvKWoc1Bg43ezmfTIgvGPE6ic1RskmmdZyYAXaT6sGpTLH6Jlm6r0oOu2rFKzqd4%2Bh4B6wTPPP%2BUvM3ddLn4ku6vIAwbd5h5pBRIgIl8PbW0tA7n%2FJBQ69BbHWzduM9tMdfG1sD1fWxjjrafBJWINtd8zDz6rC1YYTssKqjcD4pNWSd5UKvtqr89fPrw8MwCICRX998z%2Flpqf0hcmaFJN7aKQw9yrRqf%2FPvdiyoOUWUHgEYe4iJvmN%2BUM7BfNvXsaeJ%2FVmXqye0zX29M7JUJbTrBBgy%2BLS968RdhSh9jTBy0QnQOykS2TqmFZt2BBlWmLd0FrPEaYdyy2yiPgwTNO0arYCfrHrZ8DnzMNu%2B4sQGOqUBGRJqygke31sZNommPkd2ttT49VWSHO4GXtbwG8mx0rrAmETY%2FN8V8PkdTRUNzCtHt9lLuDOcyc3Kt43MBY%2FcsI2quEaY7DlPCZqYouVAKESWqOf75HjbTCmcnEw%2FFgO8yPi3P5XQEkE5S4faGUHMEeBDN9QpQ359Dpl58D7uKHxT7khwZeNJ54wpErM4r5m6HPQqwhRZWVC0GSLeQTbfUdEBGWsf&X-Amz-Signature=5c2cd110d734f7e4c7923fcc2beeddd626d3ea117478e3004462b5924aac8d8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNWW2NCX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWzQXF3iLayrfQ1aXdFkHMkUbunA50Rbw1Q7GPeSW3MQIgR8X702ZT2KWugyitbBrfJs05eXQBuQLhOehZ0niK5YEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqSZnlEQegk9Jtm6ircA4hGP8cAg%2BsBJJhVdDV6pB4mp4ZmMxkS934rEFZ77Vv3PYfM9PVjeNcR79BFPjTpAvyPHVsI5NZr2yUjnMoqTS81d0WFCtxTBkk6uRUs6MO%2Fy64MQp5EMAtUN%2BlKi1BfoczODbceAP%2FbDD2q9C4knL3GQ%2BrQ5QpPco%2FSvQR%2BHp7VAPTUEywcc%2FOE1iDc8Z04irBI%2BfhWhRseQm7HMkcnrXD4fl9Su26UHcQBSBI2WAfxC%2By3FmJbwY%2FK0hVHQA5ckvix1t1PFCjzgLHUB3MUrgM6uFvKWoc1Bg43ezmfTIgvGPE6ic1RskmmdZyYAXaT6sGpTLH6Jlm6r0oOu2rFKzqd4%2Bh4B6wTPPP%2BUvM3ddLn4ku6vIAwbd5h5pBRIgIl8PbW0tA7n%2FJBQ69BbHWzduM9tMdfG1sD1fWxjjrafBJWINtd8zDz6rC1YYTssKqjcD4pNWSd5UKvtqr89fPrw8MwCICRX998z%2Flpqf0hcmaFJN7aKQw9yrRqf%2FPvdiyoOUWUHgEYe4iJvmN%2BUM7BfNvXsaeJ%2FVmXqye0zX29M7JUJbTrBBgy%2BLS968RdhSh9jTBy0QnQOykS2TqmFZt2BBlWmLd0FrPEaYdyy2yiPgwTNO0arYCfrHrZ8DnzMNu%2B4sQGOqUBGRJqygke31sZNommPkd2ttT49VWSHO4GXtbwG8mx0rrAmETY%2FN8V8PkdTRUNzCtHt9lLuDOcyc3Kt43MBY%2FcsI2quEaY7DlPCZqYouVAKESWqOf75HjbTCmcnEw%2FFgO8yPi3P5XQEkE5S4faGUHMEeBDN9QpQ359Dpl58D7uKHxT7khwZeNJ54wpErM4r5m6HPQqwhRZWVC0GSLeQTbfUdEBGWsf&X-Amz-Signature=94dfc3e7ae8e1d7525a7dc34797384b507c4f8f3ecae0ea69647d9871160952a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNWW2NCX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWzQXF3iLayrfQ1aXdFkHMkUbunA50Rbw1Q7GPeSW3MQIgR8X702ZT2KWugyitbBrfJs05eXQBuQLhOehZ0niK5YEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqSZnlEQegk9Jtm6ircA4hGP8cAg%2BsBJJhVdDV6pB4mp4ZmMxkS934rEFZ77Vv3PYfM9PVjeNcR79BFPjTpAvyPHVsI5NZr2yUjnMoqTS81d0WFCtxTBkk6uRUs6MO%2Fy64MQp5EMAtUN%2BlKi1BfoczODbceAP%2FbDD2q9C4knL3GQ%2BrQ5QpPco%2FSvQR%2BHp7VAPTUEywcc%2FOE1iDc8Z04irBI%2BfhWhRseQm7HMkcnrXD4fl9Su26UHcQBSBI2WAfxC%2By3FmJbwY%2FK0hVHQA5ckvix1t1PFCjzgLHUB3MUrgM6uFvKWoc1Bg43ezmfTIgvGPE6ic1RskmmdZyYAXaT6sGpTLH6Jlm6r0oOu2rFKzqd4%2Bh4B6wTPPP%2BUvM3ddLn4ku6vIAwbd5h5pBRIgIl8PbW0tA7n%2FJBQ69BbHWzduM9tMdfG1sD1fWxjjrafBJWINtd8zDz6rC1YYTssKqjcD4pNWSd5UKvtqr89fPrw8MwCICRX998z%2Flpqf0hcmaFJN7aKQw9yrRqf%2FPvdiyoOUWUHgEYe4iJvmN%2BUM7BfNvXsaeJ%2FVmXqye0zX29M7JUJbTrBBgy%2BLS968RdhSh9jTBy0QnQOykS2TqmFZt2BBlWmLd0FrPEaYdyy2yiPgwTNO0arYCfrHrZ8DnzMNu%2B4sQGOqUBGRJqygke31sZNommPkd2ttT49VWSHO4GXtbwG8mx0rrAmETY%2FN8V8PkdTRUNzCtHt9lLuDOcyc3Kt43MBY%2FcsI2quEaY7DlPCZqYouVAKESWqOf75HjbTCmcnEw%2FFgO8yPi3P5XQEkE5S4faGUHMEeBDN9QpQ359Dpl58D7uKHxT7khwZeNJ54wpErM4r5m6HPQqwhRZWVC0GSLeQTbfUdEBGWsf&X-Amz-Signature=ab0a5b8627766bcc52e8f3b5e5f74f1b2d34c537a855003a850c3eccecca2ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNWW2NCX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWzQXF3iLayrfQ1aXdFkHMkUbunA50Rbw1Q7GPeSW3MQIgR8X702ZT2KWugyitbBrfJs05eXQBuQLhOehZ0niK5YEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqSZnlEQegk9Jtm6ircA4hGP8cAg%2BsBJJhVdDV6pB4mp4ZmMxkS934rEFZ77Vv3PYfM9PVjeNcR79BFPjTpAvyPHVsI5NZr2yUjnMoqTS81d0WFCtxTBkk6uRUs6MO%2Fy64MQp5EMAtUN%2BlKi1BfoczODbceAP%2FbDD2q9C4knL3GQ%2BrQ5QpPco%2FSvQR%2BHp7VAPTUEywcc%2FOE1iDc8Z04irBI%2BfhWhRseQm7HMkcnrXD4fl9Su26UHcQBSBI2WAfxC%2By3FmJbwY%2FK0hVHQA5ckvix1t1PFCjzgLHUB3MUrgM6uFvKWoc1Bg43ezmfTIgvGPE6ic1RskmmdZyYAXaT6sGpTLH6Jlm6r0oOu2rFKzqd4%2Bh4B6wTPPP%2BUvM3ddLn4ku6vIAwbd5h5pBRIgIl8PbW0tA7n%2FJBQ69BbHWzduM9tMdfG1sD1fWxjjrafBJWINtd8zDz6rC1YYTssKqjcD4pNWSd5UKvtqr89fPrw8MwCICRX998z%2Flpqf0hcmaFJN7aKQw9yrRqf%2FPvdiyoOUWUHgEYe4iJvmN%2BUM7BfNvXsaeJ%2FVmXqye0zX29M7JUJbTrBBgy%2BLS968RdhSh9jTBy0QnQOykS2TqmFZt2BBlWmLd0FrPEaYdyy2yiPgwTNO0arYCfrHrZ8DnzMNu%2B4sQGOqUBGRJqygke31sZNommPkd2ttT49VWSHO4GXtbwG8mx0rrAmETY%2FN8V8PkdTRUNzCtHt9lLuDOcyc3Kt43MBY%2FcsI2quEaY7DlPCZqYouVAKESWqOf75HjbTCmcnEw%2FFgO8yPi3P5XQEkE5S4faGUHMEeBDN9QpQ359Dpl58D7uKHxT7khwZeNJ54wpErM4r5m6HPQqwhRZWVC0GSLeQTbfUdEBGWsf&X-Amz-Signature=5a92c6379d533f5a86cd7d343f9db6c7dbc08dfabace2c464d256dc4a25692c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
