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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B3ML2CL%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAP3KcTczqhHdNd%2FKKhnsm%2FLB7W%2FOsQE0r3Ml5FdGBvmAiBhR6XFQjyci15cQ%2Bm3k8Uw2K7JCAgeqwQGQ4SyLm8pBCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQN5zTYj0OoVQAeH3KtwDbq2%2F1M%2BH94JdQjMbUzoKBNprCZK6rjiTg5BQbUGh%2BKFLl4Ckz4XTlM%2FtfpduqGeYyAZe1LaS6HZbHbqb4URZPXxzKqXEZ5PcWPmob2loGqvMwp5ctvYT8tWMl%2BliTxT9zJP8J7wfT5WCU2a5XrBkStTA%2B8qzzupIl65%2B1YcPo09nyG4kaNsZXUANwaQ8ncWPJmLiQsG0bDkesU49%2FHyraWwxn7LR4SOla6wd4aybrHkxrp%2BTtRUVlrqJBAjgzH9GmogH8RRen2XUWpnQSqF%2Fb99CY%2BR0mMTuHO6HlplSP%2FZYjRy4Aq%2BDvOa5ACHXIMmZrtdybrTlMYRwCxnBHrt%2FZHL8swtKWYwVaz0lzzBSc6uo%2F%2FG%2Ff85f4SLWFvC5vGS49HJDTkkq1qNewSzfiuBTPENiIFVdb76bTMDpbJxSbGXNcn43p%2FIljZXiwyYoleLWWtK%2F9sBkKET0Wd2YwLZ8owsZQiij5n65AWW9%2FstbeykkTk1EKnv%2BopAYz4f926RPO5ENskoit5lqDSICyMGaGKaHaHZDhTxh5rNCjtCfYe5EXLVegGYBRHRxb9o8gbxgW4BXHqHEQhxymZM3p5srntxp6SBcATK8NHKl31QAreH%2BW0nvcj8c51E%2BoTEwxdTtyQY6pgEsYDaRcU7sNZfTXdq52vXr%2BOzXIFE2nz7ylpDv04BuDXBiXmcDozQwWW9UbjEtrHAxY381Li8l8gh6n9EWjBKL9tvnhWVq4RYtGmQSYJ%2FOWpJLux0%2BYIryl4L6Q4QOcK6Gh5c0VGiY7UR5sIepb8a6p61UYv06oZtgEVGVLQ86PTj8QFCRiukFNWxJNTrwnvh%2BgqVD8EYEqZx9VDwdhB0mMZ%2B2TZnH&X-Amz-Signature=9115616e1cbec84cc33308e4fbc13ad97e3b68d1cb47cc87cab6d6b2d095567c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B3ML2CL%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAP3KcTczqhHdNd%2FKKhnsm%2FLB7W%2FOsQE0r3Ml5FdGBvmAiBhR6XFQjyci15cQ%2Bm3k8Uw2K7JCAgeqwQGQ4SyLm8pBCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQN5zTYj0OoVQAeH3KtwDbq2%2F1M%2BH94JdQjMbUzoKBNprCZK6rjiTg5BQbUGh%2BKFLl4Ckz4XTlM%2FtfpduqGeYyAZe1LaS6HZbHbqb4URZPXxzKqXEZ5PcWPmob2loGqvMwp5ctvYT8tWMl%2BliTxT9zJP8J7wfT5WCU2a5XrBkStTA%2B8qzzupIl65%2B1YcPo09nyG4kaNsZXUANwaQ8ncWPJmLiQsG0bDkesU49%2FHyraWwxn7LR4SOla6wd4aybrHkxrp%2BTtRUVlrqJBAjgzH9GmogH8RRen2XUWpnQSqF%2Fb99CY%2BR0mMTuHO6HlplSP%2FZYjRy4Aq%2BDvOa5ACHXIMmZrtdybrTlMYRwCxnBHrt%2FZHL8swtKWYwVaz0lzzBSc6uo%2F%2FG%2Ff85f4SLWFvC5vGS49HJDTkkq1qNewSzfiuBTPENiIFVdb76bTMDpbJxSbGXNcn43p%2FIljZXiwyYoleLWWtK%2F9sBkKET0Wd2YwLZ8owsZQiij5n65AWW9%2FstbeykkTk1EKnv%2BopAYz4f926RPO5ENskoit5lqDSICyMGaGKaHaHZDhTxh5rNCjtCfYe5EXLVegGYBRHRxb9o8gbxgW4BXHqHEQhxymZM3p5srntxp6SBcATK8NHKl31QAreH%2BW0nvcj8c51E%2BoTEwxdTtyQY6pgEsYDaRcU7sNZfTXdq52vXr%2BOzXIFE2nz7ylpDv04BuDXBiXmcDozQwWW9UbjEtrHAxY381Li8l8gh6n9EWjBKL9tvnhWVq4RYtGmQSYJ%2FOWpJLux0%2BYIryl4L6Q4QOcK6Gh5c0VGiY7UR5sIepb8a6p61UYv06oZtgEVGVLQ86PTj8QFCRiukFNWxJNTrwnvh%2BgqVD8EYEqZx9VDwdhB0mMZ%2B2TZnH&X-Amz-Signature=8358e31661faa1d283ede0aa2b5ae36c2e89384c0a617bef0057ece34d25d3af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B3ML2CL%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAP3KcTczqhHdNd%2FKKhnsm%2FLB7W%2FOsQE0r3Ml5FdGBvmAiBhR6XFQjyci15cQ%2Bm3k8Uw2K7JCAgeqwQGQ4SyLm8pBCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQN5zTYj0OoVQAeH3KtwDbq2%2F1M%2BH94JdQjMbUzoKBNprCZK6rjiTg5BQbUGh%2BKFLl4Ckz4XTlM%2FtfpduqGeYyAZe1LaS6HZbHbqb4URZPXxzKqXEZ5PcWPmob2loGqvMwp5ctvYT8tWMl%2BliTxT9zJP8J7wfT5WCU2a5XrBkStTA%2B8qzzupIl65%2B1YcPo09nyG4kaNsZXUANwaQ8ncWPJmLiQsG0bDkesU49%2FHyraWwxn7LR4SOla6wd4aybrHkxrp%2BTtRUVlrqJBAjgzH9GmogH8RRen2XUWpnQSqF%2Fb99CY%2BR0mMTuHO6HlplSP%2FZYjRy4Aq%2BDvOa5ACHXIMmZrtdybrTlMYRwCxnBHrt%2FZHL8swtKWYwVaz0lzzBSc6uo%2F%2FG%2Ff85f4SLWFvC5vGS49HJDTkkq1qNewSzfiuBTPENiIFVdb76bTMDpbJxSbGXNcn43p%2FIljZXiwyYoleLWWtK%2F9sBkKET0Wd2YwLZ8owsZQiij5n65AWW9%2FstbeykkTk1EKnv%2BopAYz4f926RPO5ENskoit5lqDSICyMGaGKaHaHZDhTxh5rNCjtCfYe5EXLVegGYBRHRxb9o8gbxgW4BXHqHEQhxymZM3p5srntxp6SBcATK8NHKl31QAreH%2BW0nvcj8c51E%2BoTEwxdTtyQY6pgEsYDaRcU7sNZfTXdq52vXr%2BOzXIFE2nz7ylpDv04BuDXBiXmcDozQwWW9UbjEtrHAxY381Li8l8gh6n9EWjBKL9tvnhWVq4RYtGmQSYJ%2FOWpJLux0%2BYIryl4L6Q4QOcK6Gh5c0VGiY7UR5sIepb8a6p61UYv06oZtgEVGVLQ86PTj8QFCRiukFNWxJNTrwnvh%2BgqVD8EYEqZx9VDwdhB0mMZ%2B2TZnH&X-Amz-Signature=cf7c7460092239104c7c264de2ddbbf3af34c2a0871df8708828e1423cd72374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B3ML2CL%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAP3KcTczqhHdNd%2FKKhnsm%2FLB7W%2FOsQE0r3Ml5FdGBvmAiBhR6XFQjyci15cQ%2Bm3k8Uw2K7JCAgeqwQGQ4SyLm8pBCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQN5zTYj0OoVQAeH3KtwDbq2%2F1M%2BH94JdQjMbUzoKBNprCZK6rjiTg5BQbUGh%2BKFLl4Ckz4XTlM%2FtfpduqGeYyAZe1LaS6HZbHbqb4URZPXxzKqXEZ5PcWPmob2loGqvMwp5ctvYT8tWMl%2BliTxT9zJP8J7wfT5WCU2a5XrBkStTA%2B8qzzupIl65%2B1YcPo09nyG4kaNsZXUANwaQ8ncWPJmLiQsG0bDkesU49%2FHyraWwxn7LR4SOla6wd4aybrHkxrp%2BTtRUVlrqJBAjgzH9GmogH8RRen2XUWpnQSqF%2Fb99CY%2BR0mMTuHO6HlplSP%2FZYjRy4Aq%2BDvOa5ACHXIMmZrtdybrTlMYRwCxnBHrt%2FZHL8swtKWYwVaz0lzzBSc6uo%2F%2FG%2Ff85f4SLWFvC5vGS49HJDTkkq1qNewSzfiuBTPENiIFVdb76bTMDpbJxSbGXNcn43p%2FIljZXiwyYoleLWWtK%2F9sBkKET0Wd2YwLZ8owsZQiij5n65AWW9%2FstbeykkTk1EKnv%2BopAYz4f926RPO5ENskoit5lqDSICyMGaGKaHaHZDhTxh5rNCjtCfYe5EXLVegGYBRHRxb9o8gbxgW4BXHqHEQhxymZM3p5srntxp6SBcATK8NHKl31QAreH%2BW0nvcj8c51E%2BoTEwxdTtyQY6pgEsYDaRcU7sNZfTXdq52vXr%2BOzXIFE2nz7ylpDv04BuDXBiXmcDozQwWW9UbjEtrHAxY381Li8l8gh6n9EWjBKL9tvnhWVq4RYtGmQSYJ%2FOWpJLux0%2BYIryl4L6Q4QOcK6Gh5c0VGiY7UR5sIepb8a6p61UYv06oZtgEVGVLQ86PTj8QFCRiukFNWxJNTrwnvh%2BgqVD8EYEqZx9VDwdhB0mMZ%2B2TZnH&X-Amz-Signature=1f5d195c998cbf4aa4610f40cf09d404e9bacf7b8c7e8ad30d2de702424e4859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B3ML2CL%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAP3KcTczqhHdNd%2FKKhnsm%2FLB7W%2FOsQE0r3Ml5FdGBvmAiBhR6XFQjyci15cQ%2Bm3k8Uw2K7JCAgeqwQGQ4SyLm8pBCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQN5zTYj0OoVQAeH3KtwDbq2%2F1M%2BH94JdQjMbUzoKBNprCZK6rjiTg5BQbUGh%2BKFLl4Ckz4XTlM%2FtfpduqGeYyAZe1LaS6HZbHbqb4URZPXxzKqXEZ5PcWPmob2loGqvMwp5ctvYT8tWMl%2BliTxT9zJP8J7wfT5WCU2a5XrBkStTA%2B8qzzupIl65%2B1YcPo09nyG4kaNsZXUANwaQ8ncWPJmLiQsG0bDkesU49%2FHyraWwxn7LR4SOla6wd4aybrHkxrp%2BTtRUVlrqJBAjgzH9GmogH8RRen2XUWpnQSqF%2Fb99CY%2BR0mMTuHO6HlplSP%2FZYjRy4Aq%2BDvOa5ACHXIMmZrtdybrTlMYRwCxnBHrt%2FZHL8swtKWYwVaz0lzzBSc6uo%2F%2FG%2Ff85f4SLWFvC5vGS49HJDTkkq1qNewSzfiuBTPENiIFVdb76bTMDpbJxSbGXNcn43p%2FIljZXiwyYoleLWWtK%2F9sBkKET0Wd2YwLZ8owsZQiij5n65AWW9%2FstbeykkTk1EKnv%2BopAYz4f926RPO5ENskoit5lqDSICyMGaGKaHaHZDhTxh5rNCjtCfYe5EXLVegGYBRHRxb9o8gbxgW4BXHqHEQhxymZM3p5srntxp6SBcATK8NHKl31QAreH%2BW0nvcj8c51E%2BoTEwxdTtyQY6pgEsYDaRcU7sNZfTXdq52vXr%2BOzXIFE2nz7ylpDv04BuDXBiXmcDozQwWW9UbjEtrHAxY381Li8l8gh6n9EWjBKL9tvnhWVq4RYtGmQSYJ%2FOWpJLux0%2BYIryl4L6Q4QOcK6Gh5c0VGiY7UR5sIepb8a6p61UYv06oZtgEVGVLQ86PTj8QFCRiukFNWxJNTrwnvh%2BgqVD8EYEqZx9VDwdhB0mMZ%2B2TZnH&X-Amz-Signature=4e10c1b8bc691f349ae7aff7728c200ff2b4a0389395fe9afbc4eb1f5426973a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B3ML2CL%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAP3KcTczqhHdNd%2FKKhnsm%2FLB7W%2FOsQE0r3Ml5FdGBvmAiBhR6XFQjyci15cQ%2Bm3k8Uw2K7JCAgeqwQGQ4SyLm8pBCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQN5zTYj0OoVQAeH3KtwDbq2%2F1M%2BH94JdQjMbUzoKBNprCZK6rjiTg5BQbUGh%2BKFLl4Ckz4XTlM%2FtfpduqGeYyAZe1LaS6HZbHbqb4URZPXxzKqXEZ5PcWPmob2loGqvMwp5ctvYT8tWMl%2BliTxT9zJP8J7wfT5WCU2a5XrBkStTA%2B8qzzupIl65%2B1YcPo09nyG4kaNsZXUANwaQ8ncWPJmLiQsG0bDkesU49%2FHyraWwxn7LR4SOla6wd4aybrHkxrp%2BTtRUVlrqJBAjgzH9GmogH8RRen2XUWpnQSqF%2Fb99CY%2BR0mMTuHO6HlplSP%2FZYjRy4Aq%2BDvOa5ACHXIMmZrtdybrTlMYRwCxnBHrt%2FZHL8swtKWYwVaz0lzzBSc6uo%2F%2FG%2Ff85f4SLWFvC5vGS49HJDTkkq1qNewSzfiuBTPENiIFVdb76bTMDpbJxSbGXNcn43p%2FIljZXiwyYoleLWWtK%2F9sBkKET0Wd2YwLZ8owsZQiij5n65AWW9%2FstbeykkTk1EKnv%2BopAYz4f926RPO5ENskoit5lqDSICyMGaGKaHaHZDhTxh5rNCjtCfYe5EXLVegGYBRHRxb9o8gbxgW4BXHqHEQhxymZM3p5srntxp6SBcATK8NHKl31QAreH%2BW0nvcj8c51E%2BoTEwxdTtyQY6pgEsYDaRcU7sNZfTXdq52vXr%2BOzXIFE2nz7ylpDv04BuDXBiXmcDozQwWW9UbjEtrHAxY381Li8l8gh6n9EWjBKL9tvnhWVq4RYtGmQSYJ%2FOWpJLux0%2BYIryl4L6Q4QOcK6Gh5c0VGiY7UR5sIepb8a6p61UYv06oZtgEVGVLQ86PTj8QFCRiukFNWxJNTrwnvh%2BgqVD8EYEqZx9VDwdhB0mMZ%2B2TZnH&X-Amz-Signature=209a776ca8c3a091f55030ea44a03d063c88170f72fe0ea5514d976b91648ef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B3ML2CL%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAP3KcTczqhHdNd%2FKKhnsm%2FLB7W%2FOsQE0r3Ml5FdGBvmAiBhR6XFQjyci15cQ%2Bm3k8Uw2K7JCAgeqwQGQ4SyLm8pBCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQN5zTYj0OoVQAeH3KtwDbq2%2F1M%2BH94JdQjMbUzoKBNprCZK6rjiTg5BQbUGh%2BKFLl4Ckz4XTlM%2FtfpduqGeYyAZe1LaS6HZbHbqb4URZPXxzKqXEZ5PcWPmob2loGqvMwp5ctvYT8tWMl%2BliTxT9zJP8J7wfT5WCU2a5XrBkStTA%2B8qzzupIl65%2B1YcPo09nyG4kaNsZXUANwaQ8ncWPJmLiQsG0bDkesU49%2FHyraWwxn7LR4SOla6wd4aybrHkxrp%2BTtRUVlrqJBAjgzH9GmogH8RRen2XUWpnQSqF%2Fb99CY%2BR0mMTuHO6HlplSP%2FZYjRy4Aq%2BDvOa5ACHXIMmZrtdybrTlMYRwCxnBHrt%2FZHL8swtKWYwVaz0lzzBSc6uo%2F%2FG%2Ff85f4SLWFvC5vGS49HJDTkkq1qNewSzfiuBTPENiIFVdb76bTMDpbJxSbGXNcn43p%2FIljZXiwyYoleLWWtK%2F9sBkKET0Wd2YwLZ8owsZQiij5n65AWW9%2FstbeykkTk1EKnv%2BopAYz4f926RPO5ENskoit5lqDSICyMGaGKaHaHZDhTxh5rNCjtCfYe5EXLVegGYBRHRxb9o8gbxgW4BXHqHEQhxymZM3p5srntxp6SBcATK8NHKl31QAreH%2BW0nvcj8c51E%2BoTEwxdTtyQY6pgEsYDaRcU7sNZfTXdq52vXr%2BOzXIFE2nz7ylpDv04BuDXBiXmcDozQwWW9UbjEtrHAxY381Li8l8gh6n9EWjBKL9tvnhWVq4RYtGmQSYJ%2FOWpJLux0%2BYIryl4L6Q4QOcK6Gh5c0VGiY7UR5sIepb8a6p61UYv06oZtgEVGVLQ86PTj8QFCRiukFNWxJNTrwnvh%2BgqVD8EYEqZx9VDwdhB0mMZ%2B2TZnH&X-Amz-Signature=216d2567c5ab15ae2ac0af9ad646bc28d3a88d869c7876f33fa217a3e28c483c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B3ML2CL%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAP3KcTczqhHdNd%2FKKhnsm%2FLB7W%2FOsQE0r3Ml5FdGBvmAiBhR6XFQjyci15cQ%2Bm3k8Uw2K7JCAgeqwQGQ4SyLm8pBCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQN5zTYj0OoVQAeH3KtwDbq2%2F1M%2BH94JdQjMbUzoKBNprCZK6rjiTg5BQbUGh%2BKFLl4Ckz4XTlM%2FtfpduqGeYyAZe1LaS6HZbHbqb4URZPXxzKqXEZ5PcWPmob2loGqvMwp5ctvYT8tWMl%2BliTxT9zJP8J7wfT5WCU2a5XrBkStTA%2B8qzzupIl65%2B1YcPo09nyG4kaNsZXUANwaQ8ncWPJmLiQsG0bDkesU49%2FHyraWwxn7LR4SOla6wd4aybrHkxrp%2BTtRUVlrqJBAjgzH9GmogH8RRen2XUWpnQSqF%2Fb99CY%2BR0mMTuHO6HlplSP%2FZYjRy4Aq%2BDvOa5ACHXIMmZrtdybrTlMYRwCxnBHrt%2FZHL8swtKWYwVaz0lzzBSc6uo%2F%2FG%2Ff85f4SLWFvC5vGS49HJDTkkq1qNewSzfiuBTPENiIFVdb76bTMDpbJxSbGXNcn43p%2FIljZXiwyYoleLWWtK%2F9sBkKET0Wd2YwLZ8owsZQiij5n65AWW9%2FstbeykkTk1EKnv%2BopAYz4f926RPO5ENskoit5lqDSICyMGaGKaHaHZDhTxh5rNCjtCfYe5EXLVegGYBRHRxb9o8gbxgW4BXHqHEQhxymZM3p5srntxp6SBcATK8NHKl31QAreH%2BW0nvcj8c51E%2BoTEwxdTtyQY6pgEsYDaRcU7sNZfTXdq52vXr%2BOzXIFE2nz7ylpDv04BuDXBiXmcDozQwWW9UbjEtrHAxY381Li8l8gh6n9EWjBKL9tvnhWVq4RYtGmQSYJ%2FOWpJLux0%2BYIryl4L6Q4QOcK6Gh5c0VGiY7UR5sIepb8a6p61UYv06oZtgEVGVLQ86PTj8QFCRiukFNWxJNTrwnvh%2BgqVD8EYEqZx9VDwdhB0mMZ%2B2TZnH&X-Amz-Signature=02b181561223dda162b89adb4aa2098824045cfc43208c83de0f00d940ab28ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B3ML2CL%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAP3KcTczqhHdNd%2FKKhnsm%2FLB7W%2FOsQE0r3Ml5FdGBvmAiBhR6XFQjyci15cQ%2Bm3k8Uw2K7JCAgeqwQGQ4SyLm8pBCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQN5zTYj0OoVQAeH3KtwDbq2%2F1M%2BH94JdQjMbUzoKBNprCZK6rjiTg5BQbUGh%2BKFLl4Ckz4XTlM%2FtfpduqGeYyAZe1LaS6HZbHbqb4URZPXxzKqXEZ5PcWPmob2loGqvMwp5ctvYT8tWMl%2BliTxT9zJP8J7wfT5WCU2a5XrBkStTA%2B8qzzupIl65%2B1YcPo09nyG4kaNsZXUANwaQ8ncWPJmLiQsG0bDkesU49%2FHyraWwxn7LR4SOla6wd4aybrHkxrp%2BTtRUVlrqJBAjgzH9GmogH8RRen2XUWpnQSqF%2Fb99CY%2BR0mMTuHO6HlplSP%2FZYjRy4Aq%2BDvOa5ACHXIMmZrtdybrTlMYRwCxnBHrt%2FZHL8swtKWYwVaz0lzzBSc6uo%2F%2FG%2Ff85f4SLWFvC5vGS49HJDTkkq1qNewSzfiuBTPENiIFVdb76bTMDpbJxSbGXNcn43p%2FIljZXiwyYoleLWWtK%2F9sBkKET0Wd2YwLZ8owsZQiij5n65AWW9%2FstbeykkTk1EKnv%2BopAYz4f926RPO5ENskoit5lqDSICyMGaGKaHaHZDhTxh5rNCjtCfYe5EXLVegGYBRHRxb9o8gbxgW4BXHqHEQhxymZM3p5srntxp6SBcATK8NHKl31QAreH%2BW0nvcj8c51E%2BoTEwxdTtyQY6pgEsYDaRcU7sNZfTXdq52vXr%2BOzXIFE2nz7ylpDv04BuDXBiXmcDozQwWW9UbjEtrHAxY381Li8l8gh6n9EWjBKL9tvnhWVq4RYtGmQSYJ%2FOWpJLux0%2BYIryl4L6Q4QOcK6Gh5c0VGiY7UR5sIepb8a6p61UYv06oZtgEVGVLQ86PTj8QFCRiukFNWxJNTrwnvh%2BgqVD8EYEqZx9VDwdhB0mMZ%2B2TZnH&X-Amz-Signature=6274a6be1a7dce01ab5e3dfe25b94b74924351022eccea575632609ef5331884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B3ML2CL%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAP3KcTczqhHdNd%2FKKhnsm%2FLB7W%2FOsQE0r3Ml5FdGBvmAiBhR6XFQjyci15cQ%2Bm3k8Uw2K7JCAgeqwQGQ4SyLm8pBCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQN5zTYj0OoVQAeH3KtwDbq2%2F1M%2BH94JdQjMbUzoKBNprCZK6rjiTg5BQbUGh%2BKFLl4Ckz4XTlM%2FtfpduqGeYyAZe1LaS6HZbHbqb4URZPXxzKqXEZ5PcWPmob2loGqvMwp5ctvYT8tWMl%2BliTxT9zJP8J7wfT5WCU2a5XrBkStTA%2B8qzzupIl65%2B1YcPo09nyG4kaNsZXUANwaQ8ncWPJmLiQsG0bDkesU49%2FHyraWwxn7LR4SOla6wd4aybrHkxrp%2BTtRUVlrqJBAjgzH9GmogH8RRen2XUWpnQSqF%2Fb99CY%2BR0mMTuHO6HlplSP%2FZYjRy4Aq%2BDvOa5ACHXIMmZrtdybrTlMYRwCxnBHrt%2FZHL8swtKWYwVaz0lzzBSc6uo%2F%2FG%2Ff85f4SLWFvC5vGS49HJDTkkq1qNewSzfiuBTPENiIFVdb76bTMDpbJxSbGXNcn43p%2FIljZXiwyYoleLWWtK%2F9sBkKET0Wd2YwLZ8owsZQiij5n65AWW9%2FstbeykkTk1EKnv%2BopAYz4f926RPO5ENskoit5lqDSICyMGaGKaHaHZDhTxh5rNCjtCfYe5EXLVegGYBRHRxb9o8gbxgW4BXHqHEQhxymZM3p5srntxp6SBcATK8NHKl31QAreH%2BW0nvcj8c51E%2BoTEwxdTtyQY6pgEsYDaRcU7sNZfTXdq52vXr%2BOzXIFE2nz7ylpDv04BuDXBiXmcDozQwWW9UbjEtrHAxY381Li8l8gh6n9EWjBKL9tvnhWVq4RYtGmQSYJ%2FOWpJLux0%2BYIryl4L6Q4QOcK6Gh5c0VGiY7UR5sIepb8a6p61UYv06oZtgEVGVLQ86PTj8QFCRiukFNWxJNTrwnvh%2BgqVD8EYEqZx9VDwdhB0mMZ%2B2TZnH&X-Amz-Signature=aa8091a77796620c7a004d01ba4c7abc91b8d3beaecf947b0fa9ab005e8eb33d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6T4I2N5%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFwO%2BwF48wTJlJXk%2BwDMiUY2LBTvOg0SwG40vFl7D5baAiEAqGWjl9MwNUmGNAOL46KBg2peQyHAsXbpNgrQhwrSJIYqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYOMIrJiSMnToOQFSrcA6x8HX1VQRVbAYPt3ALcp0vb5by%2FfQBoImib%2BWGDTYTN3Pw3uZTuAqWLNPF9cahV4l87ap483z%2FiPyAYxwaSC%2BcjU1qDUfqS9muSnqcgAvmKnskXNAMQU6FaGe6hhPljU7RGKd2kJvZ0PM3hGu2kG23vpB75wC0AkowHRnCOoFjFEjWBkLHKSLr3kZP6yjIfr11KKh5oVrB47zKj0OW8%2B%2FYWsU1c5RRUpVInBlDFjf44pT9aUDqmHRLIb73ea4%2BrBiSbIFDsZ7Fc75FeSydh%2BX7k9JCzMPD2k0mGTqGfCDolCp68l64FQqEFpDdtGMUMHEQWGloNn4mKhi3Hkcbb7b2WgxcMts9skOPOc12tZwLLBybdLBi2C2yP2CQa48G1SK4pT8vW%2BUfTIhLYuIylTklWL%2BJnKZ99zyc3%2Bxknd79iLkAYdRMv%2FbVwyknDTdox0iogxlnd%2BRWqXuw93vf8k4MwYtDwWrXy6%2BdlqTmO7JLPOiBElrjWa1njHrvlykogBcNRJVT0njfYWc9r7sEJhlafNfEGOy4SsGiHK896pUwIs28bcFQRo2%2FO8FwK5%2BrRW0d47Px%2FyJcw4UAGt7KnAmUVyXHKaoSdy4zsEWZiOKH2HgD9IDUvvWAxHSjaMMjU7ckGOqUBCNog02I03df2nxLaKiDE8XdtcjGlVeWPTjMpTLFOhtvsQTl2zonmGQld7CkrdnFICz3qwYHUMsqp6%2Fi9iadlg6efZ%2FIXUCTdVz4Xha6cgItoe1jCZeg02Vcr6unvNY5gUxTsqH1ktB%2BV71eBriMQN3ixCUJHMUsmqM7HkzOEaRs%2FpKLgbofezk5BK3cmJr%2FseQ51rQrCRr%2B9xT1poJ2gwiCr7egg&X-Amz-Signature=9d1acae92cd7a57c1d93afb62930e97f1f5fac89752e02f5fc97a94b7b12df9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U6VUETJ%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIGlCCbbGTlNk0jVotI%2BjXspWfHU%2FKNbFAyrdIuisWBN9AiEApdevs8E4hY%2BbIe6mDqLZlU81J8HaJXKs%2FgPTrzYNqn8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCztPSMMthTLmx%2BYiyrcA8iaTOcAxV8kccoWI9ulvhp2vaer26KXcqrfYRe%2FX0tI9k0yEozjlbP2IRFJvTABwa48bcfaBYMdNoqxIrMKRX2PNqQOynTzh46Q2kfP6FOeSWK7TMruXU4nQCSrcTjod9kDmL9QZbNv1LX2b4EC65Rd0YoZaQiEiGuL3APz%2FYhqP5ry2%2FN3x9MALPYXLC%2FeEZ%2FoWdQO6LWUms%2FfKISCHOE3dz4tNGaF8PdanCQb0SjZU8GSwdqlkNus4PufVfM7KOBKFGjShRgxYcps2zLx1R50BTqzOWHNdIniSV0cRwgEVPonlFuF8DGfRrl4v3%2BBT4tm51gCFMtANYc36vGirzswVoBSPQQpJdxEmx15SAd%2BmJM6ZBMpyAtIXD3%2BWD%2BDHuL9I80jRz6ZFDi7tEBGfbRzARVtlkXMSACA75frLRgkBnP0DFZyCymZDdUHKegaUlMIzeoij9a%2FU2J2sQiizpIOv9Kt%2FJUiNLBQH%2FT92AOXvfy8jhKJ70BKrFSj2GZCvJrzJ1B20IyHk0xFitm1H7cjz31auJjxHzv46nURdscUhhwRVaKfquG2XETYZRSGN98dXn16BgbBZnhbAw%2FHWPtbxp42W%2F68U%2F9XlQ46Oxr6Lq7r4KHn3su0Y22GMOHU7ckGOqUBO0w1laklDomRITJZKwjJtQC%2Bu1DJ0FhbonElim%2Fbn%2BlB55dqw3hvCfFjhlK5szZekFwmF%2BGUKVXUuwwzppVt48qxnlWRxNxmGQefSt474QSEg8i99y02AaJZ6CSrBhLvAQ8XqwjW7eMckumnB9uGjS1z8aZpTbfL4LySdqtzzQ8W9oQqcjQhr9Nb%2FlH3SrS6BirfmHHCODmWlz5KHIhgFVh%2FSaMU&X-Amz-Signature=0e24ead07d785af8afaf9a75b668e95e14084937d495f156b8eb7f8c2710a132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB22PVAR%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQC8X9Fj%2BtpdNJj0ZSBTZuHBtSlmdl6YzzBEj%2F7azyfvqgIgCGvT4POKaclbFvZkAXfqxU8nvPiSJ%2FI58Sn7dCBELg4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0lDPMpFdg0s0IniCrcAwBfGPAc0az8IqhJMOBMXTQzIC28E2lfYFr6rOUxP8dRY2pOkT%2BKBSmoiOGF4NRU9Y4IMIqLKwp%2BcK3lDcciQDcidVUPf0mb4RcZ38wVGjNFiUEADsBjOLi425xnaOcLei%2Fpzu%2BZ%2BTXK8TBclxASjg77Q%2FI51WUP3bWdNWaaWEsDJIOK1JutX0hF49uCZzbkXIYvk2pi3R5j6RgVrxpcjufPNNw%2BYb43QM%2FcLku4qC4qYp0lhL2ps%2BsHxjeOJQ44isXVDGfC8Ke%2FBsee5yBuLleSlMfgjAAsk7mPU7N8Je%2BxNdA6C5C9tUwSdD%2FYZ1o%2Bc8crdwrxuAmcky3bk3g0LfBdqE%2Fzl1ngbNk45z23gO7QN2mTR%2B87GKN4pVWbJcFdL37W%2ByaqlaNyJAOCacZryUDL8Jswno6cUVSOezp8rCqbeTRg9KMdU0T1pdDyg7cBCbb%2F01hHkUQTu78COClwTvvi1fKG6WoG8DdhCN%2B9KR9Lbv%2FoQkN%2F8fF05iECdn%2BtmQUHPzPYBaPIwNP7lZCp56ryWXO2EpYuk%2BpqhRFdFbPBFLTCVjqlP7oCoBU%2FNgyZnWnTI9Y%2F1o%2BQbr7FJ4BTp4SYGYrfqLmYWeKyyns3mJpFxiVoLrXw9DHVOGdXMNnU7ckGOqUBWHOChjBuzjby4rWzsXi1tl%2BKq1CMsVQuCebwli1%2FMF6beGOHBXO4GQ13JZjN%2B3oGDDUEPK1onmUlkvBVLrISqHZx%2FQl5besqKH2fpD%2F2PoHLMciL%2F%2BH3zX8zUKNUQNFk8UfOfL%2Ffk4kiHtyn%2BYbXIj8cG856L8ZQF4RwKW7UwHsmk1hWGQLww5EOZg2ma97epNKQr%2FS5zP6dXcuuSKAuk0kmjHd2&X-Amz-Signature=d210ae8ead3f98b8f01bb3997360c4c3191e72fdd5bb552ea49018f785557348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B3ML2CL%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAP3KcTczqhHdNd%2FKKhnsm%2FLB7W%2FOsQE0r3Ml5FdGBvmAiBhR6XFQjyci15cQ%2Bm3k8Uw2K7JCAgeqwQGQ4SyLm8pBCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQN5zTYj0OoVQAeH3KtwDbq2%2F1M%2BH94JdQjMbUzoKBNprCZK6rjiTg5BQbUGh%2BKFLl4Ckz4XTlM%2FtfpduqGeYyAZe1LaS6HZbHbqb4URZPXxzKqXEZ5PcWPmob2loGqvMwp5ctvYT8tWMl%2BliTxT9zJP8J7wfT5WCU2a5XrBkStTA%2B8qzzupIl65%2B1YcPo09nyG4kaNsZXUANwaQ8ncWPJmLiQsG0bDkesU49%2FHyraWwxn7LR4SOla6wd4aybrHkxrp%2BTtRUVlrqJBAjgzH9GmogH8RRen2XUWpnQSqF%2Fb99CY%2BR0mMTuHO6HlplSP%2FZYjRy4Aq%2BDvOa5ACHXIMmZrtdybrTlMYRwCxnBHrt%2FZHL8swtKWYwVaz0lzzBSc6uo%2F%2FG%2Ff85f4SLWFvC5vGS49HJDTkkq1qNewSzfiuBTPENiIFVdb76bTMDpbJxSbGXNcn43p%2FIljZXiwyYoleLWWtK%2F9sBkKET0Wd2YwLZ8owsZQiij5n65AWW9%2FstbeykkTk1EKnv%2BopAYz4f926RPO5ENskoit5lqDSICyMGaGKaHaHZDhTxh5rNCjtCfYe5EXLVegGYBRHRxb9o8gbxgW4BXHqHEQhxymZM3p5srntxp6SBcATK8NHKl31QAreH%2BW0nvcj8c51E%2BoTEwxdTtyQY6pgEsYDaRcU7sNZfTXdq52vXr%2BOzXIFE2nz7ylpDv04BuDXBiXmcDozQwWW9UbjEtrHAxY381Li8l8gh6n9EWjBKL9tvnhWVq4RYtGmQSYJ%2FOWpJLux0%2BYIryl4L6Q4QOcK6Gh5c0VGiY7UR5sIepb8a6p61UYv06oZtgEVGVLQ86PTj8QFCRiukFNWxJNTrwnvh%2BgqVD8EYEqZx9VDwdhB0mMZ%2B2TZnH&X-Amz-Signature=60182cfa52ba6b41d9ebfcbb801323233cc9f28c665ad8946fe0d81a718f9fea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4GWPTJT%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIDZS4InBKlDJ1JDCJ99Sl%2BlIJMCrvD99A61hNFGVn3EyAiBSPkjMoKWbVXG4wVBaOOpa3HGVQEeyJ5uoOQys5K8WaCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl4H63JykYRNXDYl6KtwD59fmx0%2F8D3UbpizrXuFGJ7MQpnTDkbjulHL9x4yFJ8A%2FSfLpLG1zHVGIMyBmfxPczqm%2BuDrpzeEcdrEfEB6Ub9cNLrykRnCc%2BreAFluT9QR%2FvIE2wScfpDcqyHiMdzErgbVwqHMfnT4G%2FbZiF2TlCVsiiN4fI8eH09S4GJzQ3V160z35uCkRDKw7Trz%2B0xCqhBLPtqR8tyVRLLDpDrO487EvctfjQcRGH0dXMPm0cM%2FP%2Flnag1yMuYHwJnwY3mNFl12aNZ39uHVKuMAaa0sxkfmBUBIp75aRfiCRVUKGh9svewPqhwz0c4UVwwYyXIikFgZHZgZfS73ThIBO2%2F6y2BaCK1ILObOHfLiA4AMT7rPw5IUB60tba%2B1FmsxQDBGU2f2sVBkNUKZL5EccFhSMA%2FSLD9GrfbJo1LdOnS%2FZtg3qvu4MW9zhiY60z1zesYky1VRauW%2FHVuJGKe7g6LND%2BpR2r6%2F32HFA1%2Fak6euWCihC6BFywKPy19PR9zQjt0HMOvZ9XMQ6UaNAjgKTeKdXT7Vk%2BKQt%2Fnop3euWFQlhJlO0b%2BSlK6VJmI4UA6Mn9vy7mJcglWmWKC554qB9yGh9Kj7O7IuylVo4UfdD%2Fb3BnBeRBcAaArmkOORk3jYw8tTtyQY6pgFwc4ondeWCDjV3gf%2F7UtttYnufV3xP8tYijHu4TYwzyhEbD%2BoxUZs%2BvdAa0KKKBIQ5WacfvPFJ%2By6AJyol73ccgeG3xujQw5AQ0eXbTZgoFZV6Ym9F2S%2FIDjVz%2BpRaeluZSiGCndiSfHyDOlPbel7Mm2Q3lZUo3EK5GBCoteCJHTAKthsprSmGFstpJZ9rESKs0h2ENl23INn32zIBDUbsj7c7GgTq&X-Amz-Signature=df1e2e1d73f7333a9ffe0ae4bb5a04330d33942c5f5af8f12a6760f246be8fef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B3ML2CL%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAP3KcTczqhHdNd%2FKKhnsm%2FLB7W%2FOsQE0r3Ml5FdGBvmAiBhR6XFQjyci15cQ%2Bm3k8Uw2K7JCAgeqwQGQ4SyLm8pBCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQN5zTYj0OoVQAeH3KtwDbq2%2F1M%2BH94JdQjMbUzoKBNprCZK6rjiTg5BQbUGh%2BKFLl4Ckz4XTlM%2FtfpduqGeYyAZe1LaS6HZbHbqb4URZPXxzKqXEZ5PcWPmob2loGqvMwp5ctvYT8tWMl%2BliTxT9zJP8J7wfT5WCU2a5XrBkStTA%2B8qzzupIl65%2B1YcPo09nyG4kaNsZXUANwaQ8ncWPJmLiQsG0bDkesU49%2FHyraWwxn7LR4SOla6wd4aybrHkxrp%2BTtRUVlrqJBAjgzH9GmogH8RRen2XUWpnQSqF%2Fb99CY%2BR0mMTuHO6HlplSP%2FZYjRy4Aq%2BDvOa5ACHXIMmZrtdybrTlMYRwCxnBHrt%2FZHL8swtKWYwVaz0lzzBSc6uo%2F%2FG%2Ff85f4SLWFvC5vGS49HJDTkkq1qNewSzfiuBTPENiIFVdb76bTMDpbJxSbGXNcn43p%2FIljZXiwyYoleLWWtK%2F9sBkKET0Wd2YwLZ8owsZQiij5n65AWW9%2FstbeykkTk1EKnv%2BopAYz4f926RPO5ENskoit5lqDSICyMGaGKaHaHZDhTxh5rNCjtCfYe5EXLVegGYBRHRxb9o8gbxgW4BXHqHEQhxymZM3p5srntxp6SBcATK8NHKl31QAreH%2BW0nvcj8c51E%2BoTEwxdTtyQY6pgEsYDaRcU7sNZfTXdq52vXr%2BOzXIFE2nz7ylpDv04BuDXBiXmcDozQwWW9UbjEtrHAxY381Li8l8gh6n9EWjBKL9tvnhWVq4RYtGmQSYJ%2FOWpJLux0%2BYIryl4L6Q4QOcK6Gh5c0VGiY7UR5sIepb8a6p61UYv06oZtgEVGVLQ86PTj8QFCRiukFNWxJNTrwnvh%2BgqVD8EYEqZx9VDwdhB0mMZ%2B2TZnH&X-Amz-Signature=a4fc47595420eb4123f5ee498774e6701a1f73573985f5aafc35d9dfb45cd6bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633T4PM43%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDU8LNGWgu7tQUgA4ADgX35Ux%2FYRlC6jLYkJwm3yptJeAIhAO%2F6Vg3rJmrWDPy9ZUjnYKOZdAyrZwZS3%2B9qviQ2k7xOKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5YToXpPL1cEQgPMsq3ANu%2F3%2B36xi27Ncf0YNN%2BpTk%2F20mxEK0g5cJGv3mDJxema13XPeYCPD5CEft7ItHViNzmQ%2FimWMy%2BK27X%2Fd5oqGEPX59I8WrBvr31F0xItFNDPywV0bt2zwEBxsNzl109oYPFCG8MpmC2d5PYOmKQvJT%2FBgAomysU9BecVbqfz%2FFePfuUXD9ptYIlbKYi1K5oX%2B8FEiePdqPYOTESKYB6YeS4fOqQ6Km9BFEgYKIbmoP8pOXN1u3MiePko9wEMMnX2sJ%2BXo1Ms7Yn%2FO3%2FIwEqdFJCpc8vK2G2UEXePFVLlRThd%2B65YJzowVe8MnsMLXZFDeO6fDCh%2Br6b1VCmB8a4wYN3rkYlzZc%2FOrpbrLA8D%2FnkHYK3nSP8kfG4Ek8a8tqIqe%2BV0Bd%2FG7K30GqmShXbE%2FE6gtKSsqO7nuyvT8MHQSB2iK4AFR2JQre6OXG5s9J5WCVskkCz6nGn1o95tXRT4pkr%2B65mLNZGtk1qr0rPNUt9ekpKhcEGUSWvyrfdxIc%2FJg3FIdValiMH8rjlkWCDnoNJWN0WbfFEk3OzxqSwBS4d9ORFuOXC8ps0Uy7rZi%2Bjpd9ezcCFkgfY9hpDx8XxXdRvx3Gj%2BBjBySWwAwWVOQ0L8eA7s%2BFvcZ9CPmPnDCw1e3JBjqkAalRf%2FfWKCIuGHFRJGaQdIH8W%2BDjd3OrSvrfAyS7Hh8heDob2yYzNjvPW3LcbdMpuob58Tid%2BzSKgV2RzNLr5YbB3s6n1h7qfBfZuXmkD8ZXrEpb2EpeeN2xwEabZczSIsmoJcsWJQRVG9UuLcm8G30y7gDFE9dFZsUeb%2FNejAdGEadhtLPKqRH2L6%2B4mePwpu1mAhM28lCajDu69VNK9jd6P1FI&X-Amz-Signature=9b278a0553deba4ded85299ecbfaeeacfd72f592d0669a494d37aa013d37fa59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B3ML2CL%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAP3KcTczqhHdNd%2FKKhnsm%2FLB7W%2FOsQE0r3Ml5FdGBvmAiBhR6XFQjyci15cQ%2Bm3k8Uw2K7JCAgeqwQGQ4SyLm8pBCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQN5zTYj0OoVQAeH3KtwDbq2%2F1M%2BH94JdQjMbUzoKBNprCZK6rjiTg5BQbUGh%2BKFLl4Ckz4XTlM%2FtfpduqGeYyAZe1LaS6HZbHbqb4URZPXxzKqXEZ5PcWPmob2loGqvMwp5ctvYT8tWMl%2BliTxT9zJP8J7wfT5WCU2a5XrBkStTA%2B8qzzupIl65%2B1YcPo09nyG4kaNsZXUANwaQ8ncWPJmLiQsG0bDkesU49%2FHyraWwxn7LR4SOla6wd4aybrHkxrp%2BTtRUVlrqJBAjgzH9GmogH8RRen2XUWpnQSqF%2Fb99CY%2BR0mMTuHO6HlplSP%2FZYjRy4Aq%2BDvOa5ACHXIMmZrtdybrTlMYRwCxnBHrt%2FZHL8swtKWYwVaz0lzzBSc6uo%2F%2FG%2Ff85f4SLWFvC5vGS49HJDTkkq1qNewSzfiuBTPENiIFVdb76bTMDpbJxSbGXNcn43p%2FIljZXiwyYoleLWWtK%2F9sBkKET0Wd2YwLZ8owsZQiij5n65AWW9%2FstbeykkTk1EKnv%2BopAYz4f926RPO5ENskoit5lqDSICyMGaGKaHaHZDhTxh5rNCjtCfYe5EXLVegGYBRHRxb9o8gbxgW4BXHqHEQhxymZM3p5srntxp6SBcATK8NHKl31QAreH%2BW0nvcj8c51E%2BoTEwxdTtyQY6pgEsYDaRcU7sNZfTXdq52vXr%2BOzXIFE2nz7ylpDv04BuDXBiXmcDozQwWW9UbjEtrHAxY381Li8l8gh6n9EWjBKL9tvnhWVq4RYtGmQSYJ%2FOWpJLux0%2BYIryl4L6Q4QOcK6Gh5c0VGiY7UR5sIepb8a6p61UYv06oZtgEVGVLQ86PTj8QFCRiukFNWxJNTrwnvh%2BgqVD8EYEqZx9VDwdhB0mMZ%2B2TZnH&X-Amz-Signature=359e9598e80714dabede1187635ff4a8128c241094a1fd9dfb07dc9071f8e0b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5E3UCBN%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD4iAIhmSNXvk1WNaOp2zwyI3UkL3PhvB1FEq1%2BqVC%2F2AIgVWPxfihot%2BCuLNcvfjA0K2BY9U33JjzS64uQUvBtGwMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrcBb1Az0Iyw4p7tyrcA1rbJb4Lc9gEs%2BSR3GCq%2BbLfNfCijxBHQmSvfr01%2BVnUF%2FF55%2F3JCJ51e0HL43MHTv7MkWELbaeK%2BSDBoAqrpaS%2FvWOzJZyRbHA29ARknOZISR%2BNKvSsAF119Oe7zcuyvGsUoN3qaWXRY8VFnhU0fDyq%2F4YPlGRp1WB7pTCM4%2BJYwI00xcLge2TIiFfePEf6Lc0Jl1eiouWH8hV9%2FaUh76KyO0mGFIwZJqnFe8wKUhlq3Ydc9ncQtXRZZFgyboKGzqDUAaT1LWn87efMIqzIPxw3QJsQ3U%2Fb2gQoJ7zA5hVFuGvxy5t%2FFy6YNvOrVCnnhX2JDjKTx%2BIfBBek4t3tQyg4KxfznGbsibS1XN4O%2FVJQ%2FPNt7AWGNFxI1vzzidNReg3PsgTiGJddeZOkZ0cXrLP1bKMPvG4aXgphFFSdTaf63RnnrthBS8QVOAZZyfuoxFCGjRTLkzfKUa7w72VxRDLFWds%2BdCU3NluV3NUhII7uo8YFPhzW%2F3C9vvww%2FaS2qLd58NRywapwEPhzyw%2BxJ3SHB1LI8wGsk81E71JDtRaxevmixTQTZiqGOHCGMrRUCOEX5yAi%2FFPrC6uIeKVzurBj77woW5VsTz%2BypAlojVOmsZRSgIBZEL7ixK9IMMPV7ckGOqUBvtYfdvokZdwbClhNETm9q2XY902RIic9KN5WfaA8qz6A%2Bj7kKvMuHB4AEAFk1hwRsZeDccSmQlGZrG4KiCDvTqekoAd0ZeGfIlmwGJ999eTWnqgWrOc4utGr0Pa%2F1GXfAWkuvboPknN9%2BLU2jJQqOad73iNXkRkC712bts0WGusCms7E3MlB%2FlSVkBjhPTFc8ovaoyEeo6tAmLtX5yGgc%2BsKn7KJ&X-Amz-Signature=37828ab80b4233fd814ed8423967cd462d93beb3825e02dcc5325288b5a32c31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B3ML2CL%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAP3KcTczqhHdNd%2FKKhnsm%2FLB7W%2FOsQE0r3Ml5FdGBvmAiBhR6XFQjyci15cQ%2Bm3k8Uw2K7JCAgeqwQGQ4SyLm8pBCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQN5zTYj0OoVQAeH3KtwDbq2%2F1M%2BH94JdQjMbUzoKBNprCZK6rjiTg5BQbUGh%2BKFLl4Ckz4XTlM%2FtfpduqGeYyAZe1LaS6HZbHbqb4URZPXxzKqXEZ5PcWPmob2loGqvMwp5ctvYT8tWMl%2BliTxT9zJP8J7wfT5WCU2a5XrBkStTA%2B8qzzupIl65%2B1YcPo09nyG4kaNsZXUANwaQ8ncWPJmLiQsG0bDkesU49%2FHyraWwxn7LR4SOla6wd4aybrHkxrp%2BTtRUVlrqJBAjgzH9GmogH8RRen2XUWpnQSqF%2Fb99CY%2BR0mMTuHO6HlplSP%2FZYjRy4Aq%2BDvOa5ACHXIMmZrtdybrTlMYRwCxnBHrt%2FZHL8swtKWYwVaz0lzzBSc6uo%2F%2FG%2Ff85f4SLWFvC5vGS49HJDTkkq1qNewSzfiuBTPENiIFVdb76bTMDpbJxSbGXNcn43p%2FIljZXiwyYoleLWWtK%2F9sBkKET0Wd2YwLZ8owsZQiij5n65AWW9%2FstbeykkTk1EKnv%2BopAYz4f926RPO5ENskoit5lqDSICyMGaGKaHaHZDhTxh5rNCjtCfYe5EXLVegGYBRHRxb9o8gbxgW4BXHqHEQhxymZM3p5srntxp6SBcATK8NHKl31QAreH%2BW0nvcj8c51E%2BoTEwxdTtyQY6pgEsYDaRcU7sNZfTXdq52vXr%2BOzXIFE2nz7ylpDv04BuDXBiXmcDozQwWW9UbjEtrHAxY381Li8l8gh6n9EWjBKL9tvnhWVq4RYtGmQSYJ%2FOWpJLux0%2BYIryl4L6Q4QOcK6Gh5c0VGiY7UR5sIepb8a6p61UYv06oZtgEVGVLQ86PTj8QFCRiukFNWxJNTrwnvh%2BgqVD8EYEqZx9VDwdhB0mMZ%2B2TZnH&X-Amz-Signature=53259e072978fe374d0087c091e3e270127335ff922dba35e3f677f7cb87c40b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYBZFKS2%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIGM%2BhQI0xM9myKkx3BdpFylOai3F5xAlg5Zi5CZk982dAiEAv81l86HGwe9JspgL6Vfi9ZIdUxvfQsLF%2Fs%2BzE0UAOw8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADYZ4k2aze1ItWpbCrcA3aypLlINhyhsTU%2FpktnC0HYeVbRq3LgAQyNzCgOF4yhic%2F0V9wKvgqaTIFqhw98312v2MOcc6TlpSkTSjvqTqxtoG9JMLS%2FtasfvIA%2B%2BiSGS5BM%2Bwmy3hlPEr3idavMXu6qdEjs7ySJYvZzyINxuQMwm5sluszm%2BG25v9P5ii7tz%2F9TCPfzvBiUtuSnXyjJokFB9YVMgj4LUvFF8kevMrtYl2QYuj9SktMmgcQwATapoIgph9XLIYtBODifB0yvgYWpehiutD8JwTnPzSkZBmY%2B9zCIkWuX%2FXlBL%2FlewLX5l8Dbd95SfVUO2kfbBrJXWyvg2i7ilYGzgT7pMHxOaODvrgRshyktMpkYkN0yBkANn4wBIsr9wiZS6%2Bk4e7CH%2FxDB7LIM%2FAOu148Ivd6uTSGt9cdRIsO9RrghgDeixqWsz16HD3wjnRCEfDQTcLjaSxJ2aEEnkgoVIx160zZd5%2B59hQHFPsqvAkgkCgIlqFgJJ6D2FYc2UzYhp1NHrKGS7oZAZnyJYtyrbLneX0pzlQocs42kikkCSb%2FJ6Av4Dmf5FTCB4FlDxE3uNOeqZRmUR62ctMXSP%2FzcM4keE9LuG%2FyEVmKHY0iKbE1yEo1Sifb4chF2KJq4v1srQG0jMPLU7ckGOqUBmyOzQHMDznbx84NxfRq5TqOHzttSCkM5edDSi3C2J09V2f8pl5vZdNeg6Xg4d%2BqZHalMvm03MxnALcxb6%2Fakoas70YYD4twm%2BX%2BzKw6EmYpIJch%2BVzkMkhn4HY63R6elWS5akubaB0KOZG7jmEtiV%2BpOiEOV7s7%2Bi7FnKy5%2Bk6IaT3tYrIOlDUIqvVfVmlJldTAYzg%2B5wpJbWbwVgt8rrFIYWgTC&X-Amz-Signature=f168ff7727cea37e2ab25b4fbf4d60dc4b7deef0072ea93ed61a23b3eaec52dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B3ML2CL%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAP3KcTczqhHdNd%2FKKhnsm%2FLB7W%2FOsQE0r3Ml5FdGBvmAiBhR6XFQjyci15cQ%2Bm3k8Uw2K7JCAgeqwQGQ4SyLm8pBCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQN5zTYj0OoVQAeH3KtwDbq2%2F1M%2BH94JdQjMbUzoKBNprCZK6rjiTg5BQbUGh%2BKFLl4Ckz4XTlM%2FtfpduqGeYyAZe1LaS6HZbHbqb4URZPXxzKqXEZ5PcWPmob2loGqvMwp5ctvYT8tWMl%2BliTxT9zJP8J7wfT5WCU2a5XrBkStTA%2B8qzzupIl65%2B1YcPo09nyG4kaNsZXUANwaQ8ncWPJmLiQsG0bDkesU49%2FHyraWwxn7LR4SOla6wd4aybrHkxrp%2BTtRUVlrqJBAjgzH9GmogH8RRen2XUWpnQSqF%2Fb99CY%2BR0mMTuHO6HlplSP%2FZYjRy4Aq%2BDvOa5ACHXIMmZrtdybrTlMYRwCxnBHrt%2FZHL8swtKWYwVaz0lzzBSc6uo%2F%2FG%2Ff85f4SLWFvC5vGS49HJDTkkq1qNewSzfiuBTPENiIFVdb76bTMDpbJxSbGXNcn43p%2FIljZXiwyYoleLWWtK%2F9sBkKET0Wd2YwLZ8owsZQiij5n65AWW9%2FstbeykkTk1EKnv%2BopAYz4f926RPO5ENskoit5lqDSICyMGaGKaHaHZDhTxh5rNCjtCfYe5EXLVegGYBRHRxb9o8gbxgW4BXHqHEQhxymZM3p5srntxp6SBcATK8NHKl31QAreH%2BW0nvcj8c51E%2BoTEwxdTtyQY6pgEsYDaRcU7sNZfTXdq52vXr%2BOzXIFE2nz7ylpDv04BuDXBiXmcDozQwWW9UbjEtrHAxY381Li8l8gh6n9EWjBKL9tvnhWVq4RYtGmQSYJ%2FOWpJLux0%2BYIryl4L6Q4QOcK6Gh5c0VGiY7UR5sIepb8a6p61UYv06oZtgEVGVLQ86PTj8QFCRiukFNWxJNTrwnvh%2BgqVD8EYEqZx9VDwdhB0mMZ%2B2TZnH&X-Amz-Signature=2d0c70a6abaa0927834cce12026cb047d3621a549be6dbdec56324a0c7fb8a85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E47465A%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHZm%2Bmxp4uwgvuQUBJfffchuxyVKmtGjO9by9VZ4fIGnAiBsLv3DEafv43Ae7yFHjjcXMlY1mqyRSasFDZSizvPI8iqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5oboitQZIMC01pfEKtwDmTm3li6ql9v9Kohh1PjfRa5Hd%2F0rbGvvJQ3XmT8e2KrZfOZqgrfyzn2cTygRUfwOaLOIvs1DmLHY%2FVCrKbQXKzuBCLWLPRYpSztw%2FUbHAZazh93ZqzymkkmvlY1HbzGgmfKSKEluH8W%2BXoAyMa2FHWT7%2Bc0rp8Nx1iDySi0I3jkposJCj4Ho8BsVlokpKrBfYB%2FaMWqH00lrpYz7bU4z%2Bzc%2BOaJs8M1QpqmcDg3ppxzST6CJLRvkMxSVmvz1e%2F1FmaNyvy0xfWCJmzB%2BqSbg0zzy0A8795zStKSa%2FgdkQL24dowqz2rTAckbFmNPFoOFPWMzvU1%2FD1RoOuOFHG4a9J7nwW8rSC%2Bfin%2FtHywWQPCj8IdfvmsWic9eqNJ4l2XKq3Fe43xVeAq2T7vPOpROFT98mgjifxaEpZDUpE4YdB8ZH9%2Bm3sla%2F1JgFdk4NXNV%2Bm%2BL9bjR0BiyqIuBFLlrDjUl3I5cvFdTMpOVqWByCDG4h2Mf%2F6K%2F0ROUeD8X4yEt9DtDI8Jmgm7HN0Nf3uOS7AEjSvMCK8053JmtnbqPEdh%2FFNhJCKDue1WvHk4Wk1FJQS9nDlu19YTW%2Bq13SGKUM6zQVn4CENFI01bb78WsEp2wjcliTmyNYy20sSIw6dTtyQY6pgFxtL%2FjQ%2FwMzm5bQDb%2F25yCLvNGQLhjXyaxZAYa6L5S5cyLwRiwuNxtGEOAnw%2B408BVKUsLqqosJsCB%2B4C4hHCFHKFt7gSx32HLhYLtssc7vZwaYZtorIXLMvJPCEKdyrT9EY7NIeTLZZ%2Fk%2B44wzIVQa9AA0XmdugQONKML1N4%2FrmNlNNUIwQTAMz%2BA3tN6V6cVidr6uKNP3qLaJvjfdsjAQJCk%2FAqj&X-Amz-Signature=2cd538801464712324a3ea6e8da261d7918b6f500f29b6ea575ebad90bd76b97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HK7IACZ%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDIcgBtmhkl0enixb6Ehip%2BXXduU4qZ7lJJvIAYb7fA8QIhAMotdq2Lf8o%2F82NcHFzJhkA2n81kjsMSl%2FkQKlTdYdL0KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVJrgM64GvIAknHwYq3APwbyIXgMOOEvJyFrv8hziyNuGEZaUvqKOPtAtgSxm6t9DPC7lBCuZp1BjFP2ZwX5WXMR6KYRvTnrzxfx7hhoKioPxLlCD%2Bq17tQrw1RIJ7xQq6Shgc5Rdptuw%2FwBNuAAkWbpY8u92ON8JdCTzV5Iv3zx1slDqUvk8F5QaCiBg3pGmDwoEHjUEyKaP0lgxM57B%2B0rnbgiFNp2kX1d33HitXqalMFSSC%2F8mOmJ5a%2FjixvpFbHlwLbEmRJRsG2DuUwvXpCFs1Z6ARrgVFOsR3hvdQRl7WWiwGLo4puMUwDxHwuUucAbfBYPBNY9HZWkL0bNIaLVtX0KqtjH%2Bu005GvHmTh59zL99hkiqausS4Zu%2F0cADizcDN4MDDio2%2BIu5%2FBzhZziHK2rcgKbOs7kB5efuTfX42qZL9jXEoeVgKVdzR4cX%2BP%2BllZv%2FUvmdNtoaWg6dWk25MYR8Nhf7L1ERdAQfeB65eyHQ1TAXxiVgyYDqPVMVE3UYA0EroLFf92Y%2FmKN%2BuzdtKOwj3L%2FVgubPpcOSHhCr%2BrE0ou3mxxE1ePehY4ONDByoyiBW75EP%2F8emlFdpJ6hdDPDGyIk6Y9CXe1UO2y8E8K3h0v6kjfwKE2oAAqJ7pxix0ZXmqDbPWgzCB1u3JBjqkAQA3MFHIzYGyUiHPeBbsCqk%2Fp3wo1sv8TVzs4fVJ2kKu1F6WwsgRcVb1PMQ2WsMFn2Qk%2FiqLE3gCRFli85ZB5iBNEydddyNxABf0xnojwL5%2BNw1zfr3Cclj7GJxIyqep%2F4hEWidKWsmJIKDx4j3NQ%2B5vlSz8C82IKyQpzDmhtcgDP0tacKQApni7jg0ey7Wub2kkSu3y%2FFjkMNVePwHPxcm7U4QV&X-Amz-Signature=172645f9d20986b2e3829aaad26af5467e3f2ed2a41c7bf4e3402cb0ccbcb77e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVRZ6IXM%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCUECnItQNVqBwV5GSQGBWcbgIjolZ10%2B%2Fip%2BIG5Oq6jQIhAN64g313Jzjn0Nt8D048RZbTpgb5tEg%2FK3%2Fwn6%2FKy%2FK6KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyH33q1aqmxMwMklScq3APjF2HnwoE4lutDlNY9TpqzNxcIpFLCf7uq5ERN125igYVDBepKRcZyYf5jPUIeeQtydBsB7%2FkUn7qH%2FCRYhnch3gAHp%2FZbnseRmuZ6YZLVLw2B4byPkHg1QJUsYUCXANag559TLqKlrfwUo44ROmdT6pRgSCxwDI0EfhpqrFZKkuKcVpyTkFoJfY8QDwRLWfWlGXGwbHQDT2h3P9ZPoVw8DaoJu7ypPg1JebVCdTzQL1Aq61hJbe1Us6f0ZiexL0TY10lkc1WkJ2ETMeUGM6xktWrx2qFOotzuKhB%2BWjD9lsRTXcUy%2Bg2WdE3cdmETEOF%2FAtYqJVDwCk9UnqRDyjwp0oRuzWSWF%2BOcHqEGZohaGNx8xAcEW6pOUc1mBh3jJiNk4udp55a%2Bzen3z%2BhP2kaB20iKmV83rxKZSPDdHnTzQwTLTIhrDYIwY8KftSetfsoXtd5UO5y%2Fstyu%2FLu2DeuLs5JuVQHEi0xCdTI%2Fg4pd9KUQ6Ci4sA1O72rzTcNgXdgjRf4u%2FidnU3hXhgL2OlqAecCffkXLxJUpCmBCM%2B50NtoaMhOux6OTfZoRRLPIsW1d0PVjDOSyHUiOFM2PKo%2BzsNPpe0RVcFoWgWD0N43EikUzJOqv34D7xdCvjjDe1O3JBjqkAYwoeYMyRnxeFDCTEAt5wz3GvTE4wGbv21VJx0LLUVl8TN2ylNyZVJd29aers570CDLesgg84fLlohn5pZbUaGLy6q4DSVmaxC3AOUBFKCEVRgNpINLHjQTUBFuhXL9q45MTTcti%2FdHZP67UMQCeGR5QHR9r7iplbWjxH4BOQRIcWPnOoKCth06EGL2SfPxBxbiWp8MN2kTD5bqZ3OToGyW0EIwZ&X-Amz-Signature=6f417cc74d16556cf9c9e8a47ea1a0d4a8f2861ab0bbd295fc77f87b3eeb97e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B3ML2CL%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAP3KcTczqhHdNd%2FKKhnsm%2FLB7W%2FOsQE0r3Ml5FdGBvmAiBhR6XFQjyci15cQ%2Bm3k8Uw2K7JCAgeqwQGQ4SyLm8pBCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQN5zTYj0OoVQAeH3KtwDbq2%2F1M%2BH94JdQjMbUzoKBNprCZK6rjiTg5BQbUGh%2BKFLl4Ckz4XTlM%2FtfpduqGeYyAZe1LaS6HZbHbqb4URZPXxzKqXEZ5PcWPmob2loGqvMwp5ctvYT8tWMl%2BliTxT9zJP8J7wfT5WCU2a5XrBkStTA%2B8qzzupIl65%2B1YcPo09nyG4kaNsZXUANwaQ8ncWPJmLiQsG0bDkesU49%2FHyraWwxn7LR4SOla6wd4aybrHkxrp%2BTtRUVlrqJBAjgzH9GmogH8RRen2XUWpnQSqF%2Fb99CY%2BR0mMTuHO6HlplSP%2FZYjRy4Aq%2BDvOa5ACHXIMmZrtdybrTlMYRwCxnBHrt%2FZHL8swtKWYwVaz0lzzBSc6uo%2F%2FG%2Ff85f4SLWFvC5vGS49HJDTkkq1qNewSzfiuBTPENiIFVdb76bTMDpbJxSbGXNcn43p%2FIljZXiwyYoleLWWtK%2F9sBkKET0Wd2YwLZ8owsZQiij5n65AWW9%2FstbeykkTk1EKnv%2BopAYz4f926RPO5ENskoit5lqDSICyMGaGKaHaHZDhTxh5rNCjtCfYe5EXLVegGYBRHRxb9o8gbxgW4BXHqHEQhxymZM3p5srntxp6SBcATK8NHKl31QAreH%2BW0nvcj8c51E%2BoTEwxdTtyQY6pgEsYDaRcU7sNZfTXdq52vXr%2BOzXIFE2nz7ylpDv04BuDXBiXmcDozQwWW9UbjEtrHAxY381Li8l8gh6n9EWjBKL9tvnhWVq4RYtGmQSYJ%2FOWpJLux0%2BYIryl4L6Q4QOcK6Gh5c0VGiY7UR5sIepb8a6p61UYv06oZtgEVGVLQ86PTj8QFCRiukFNWxJNTrwnvh%2BgqVD8EYEqZx9VDwdhB0mMZ%2B2TZnH&X-Amz-Signature=a67372274f7002d3b521ee485378245285856f6065ba84d4a99c0b3850ef6c1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B3ML2CL%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAP3KcTczqhHdNd%2FKKhnsm%2FLB7W%2FOsQE0r3Ml5FdGBvmAiBhR6XFQjyci15cQ%2Bm3k8Uw2K7JCAgeqwQGQ4SyLm8pBCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQN5zTYj0OoVQAeH3KtwDbq2%2F1M%2BH94JdQjMbUzoKBNprCZK6rjiTg5BQbUGh%2BKFLl4Ckz4XTlM%2FtfpduqGeYyAZe1LaS6HZbHbqb4URZPXxzKqXEZ5PcWPmob2loGqvMwp5ctvYT8tWMl%2BliTxT9zJP8J7wfT5WCU2a5XrBkStTA%2B8qzzupIl65%2B1YcPo09nyG4kaNsZXUANwaQ8ncWPJmLiQsG0bDkesU49%2FHyraWwxn7LR4SOla6wd4aybrHkxrp%2BTtRUVlrqJBAjgzH9GmogH8RRen2XUWpnQSqF%2Fb99CY%2BR0mMTuHO6HlplSP%2FZYjRy4Aq%2BDvOa5ACHXIMmZrtdybrTlMYRwCxnBHrt%2FZHL8swtKWYwVaz0lzzBSc6uo%2F%2FG%2Ff85f4SLWFvC5vGS49HJDTkkq1qNewSzfiuBTPENiIFVdb76bTMDpbJxSbGXNcn43p%2FIljZXiwyYoleLWWtK%2F9sBkKET0Wd2YwLZ8owsZQiij5n65AWW9%2FstbeykkTk1EKnv%2BopAYz4f926RPO5ENskoit5lqDSICyMGaGKaHaHZDhTxh5rNCjtCfYe5EXLVegGYBRHRxb9o8gbxgW4BXHqHEQhxymZM3p5srntxp6SBcATK8NHKl31QAreH%2BW0nvcj8c51E%2BoTEwxdTtyQY6pgEsYDaRcU7sNZfTXdq52vXr%2BOzXIFE2nz7ylpDv04BuDXBiXmcDozQwWW9UbjEtrHAxY381Li8l8gh6n9EWjBKL9tvnhWVq4RYtGmQSYJ%2FOWpJLux0%2BYIryl4L6Q4QOcK6Gh5c0VGiY7UR5sIepb8a6p61UYv06oZtgEVGVLQ86PTj8QFCRiukFNWxJNTrwnvh%2BgqVD8EYEqZx9VDwdhB0mMZ%2B2TZnH&X-Amz-Signature=fbc7773dd803379c2ad57ab21d7dc7969263a5f607086bf7f0aeee52df54f8d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNLLT6G%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD4ReW7zmPVW3wpvHkZYIbGQEn3szVGGW9LKCCL%2B7mxLQIhAO8jCamTArBXb96ZymGHSFVJWVnl4w7%2FDxgYZL8%2B1c7xKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvQ2jEBOBIBKEJyXkq3APbvFW7oP1DFcioJyWrqssj0rB%2Fj8Ahe%2FOFU28shd4C3%2BzQP6LQCZ9Z3avAg2qv%2BxMFSTB%2BLG4vKQuc1CUuRbLLE5Z%2F6cy7vxyqIZYerwS4t%2FFNhG%2BUmSmNhtPkOvT5%2Fh6LaiPjtxK98VRHNxetlWQy6uXkZxbuQ47jWXnZCRDwNd%2BakhYYJ%2BDq%2BdnyUGZw1e2odjPQdXE1FLYQIqEiLf0Fesm1JeZXpXFORuEfOPPVl4cY1NvC2y0EyoxrARKQ0zB6U9%2By%2FzEO%2BFWq1Sq%2BWhsGLi7XA4hFmnwJfRcsPX5tF88%2FHHoQJ4M1V%2BCJXLzIN9GHtQ3AfS7rjZCcZWPowrJSSm0e62mwKOzQ8VNqWjavAb%2FSQKRuLfhmVjoUYdHUGZt5C1eX49FvC2bhB%2BIKLzPS%2Fz47Ib1fRiaKLIIgWJrhCxkQ9bW7KXz48HiFyF4dMCL81GM3ojWNwx9eZgiT8bzZskUxOWj7%2FBuI%2FreqwHj9MUCgA%2FHZ%2FKB7MEHKTZFdrd3GMfuagPGF06qyzawMheV%2BfCGeDaSF1lTu9Kus9guDCGeXt6ed8m0DdojdLuPgRuxtKksBsJtgcRQJ7F3Exp95eLgkj%2BMjvp1d8dUxKXhAcvDscCqWRi8mgYpY5jDe1e3JBjqkASzPe%2F%2FJEzaHkPHmvu9CPWMijrmtNvHhRCJdE1PCTZcPce7wluX638jjW7QXMO7ZhFwA5m30sC111kNd2ZDkdshvGJIbatygmE7um5wnM9S%2B2dMWWzm8TcDIvzJ8Itp6ya0BhvUrnqsrxPE2yPgNxxcaQWeylSw%2Fw35SVzUEr7kDwRJmH568JVrt%2B0Gy5RroKojKKdFDnHQOpd9vTwevDqAsfW74&X-Amz-Signature=d12bf6be1ddb41f10c7689a24eef214209c7c8bd19e3d51305e2874592bb11b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNLLT6G%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD4ReW7zmPVW3wpvHkZYIbGQEn3szVGGW9LKCCL%2B7mxLQIhAO8jCamTArBXb96ZymGHSFVJWVnl4w7%2FDxgYZL8%2B1c7xKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvQ2jEBOBIBKEJyXkq3APbvFW7oP1DFcioJyWrqssj0rB%2Fj8Ahe%2FOFU28shd4C3%2BzQP6LQCZ9Z3avAg2qv%2BxMFSTB%2BLG4vKQuc1CUuRbLLE5Z%2F6cy7vxyqIZYerwS4t%2FFNhG%2BUmSmNhtPkOvT5%2Fh6LaiPjtxK98VRHNxetlWQy6uXkZxbuQ47jWXnZCRDwNd%2BakhYYJ%2BDq%2BdnyUGZw1e2odjPQdXE1FLYQIqEiLf0Fesm1JeZXpXFORuEfOPPVl4cY1NvC2y0EyoxrARKQ0zB6U9%2By%2FzEO%2BFWq1Sq%2BWhsGLi7XA4hFmnwJfRcsPX5tF88%2FHHoQJ4M1V%2BCJXLzIN9GHtQ3AfS7rjZCcZWPowrJSSm0e62mwKOzQ8VNqWjavAb%2FSQKRuLfhmVjoUYdHUGZt5C1eX49FvC2bhB%2BIKLzPS%2Fz47Ib1fRiaKLIIgWJrhCxkQ9bW7KXz48HiFyF4dMCL81GM3ojWNwx9eZgiT8bzZskUxOWj7%2FBuI%2FreqwHj9MUCgA%2FHZ%2FKB7MEHKTZFdrd3GMfuagPGF06qyzawMheV%2BfCGeDaSF1lTu9Kus9guDCGeXt6ed8m0DdojdLuPgRuxtKksBsJtgcRQJ7F3Exp95eLgkj%2BMjvp1d8dUxKXhAcvDscCqWRi8mgYpY5jDe1e3JBjqkASzPe%2F%2FJEzaHkPHmvu9CPWMijrmtNvHhRCJdE1PCTZcPce7wluX638jjW7QXMO7ZhFwA5m30sC111kNd2ZDkdshvGJIbatygmE7um5wnM9S%2B2dMWWzm8TcDIvzJ8Itp6ya0BhvUrnqsrxPE2yPgNxxcaQWeylSw%2Fw35SVzUEr7kDwRJmH568JVrt%2B0Gy5RroKojKKdFDnHQOpd9vTwevDqAsfW74&X-Amz-Signature=8eb2648452c280d3742bc45e82892bbbd1ff934cbaed7a20ae52668229cd4085&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNLLT6G%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD4ReW7zmPVW3wpvHkZYIbGQEn3szVGGW9LKCCL%2B7mxLQIhAO8jCamTArBXb96ZymGHSFVJWVnl4w7%2FDxgYZL8%2B1c7xKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvQ2jEBOBIBKEJyXkq3APbvFW7oP1DFcioJyWrqssj0rB%2Fj8Ahe%2FOFU28shd4C3%2BzQP6LQCZ9Z3avAg2qv%2BxMFSTB%2BLG4vKQuc1CUuRbLLE5Z%2F6cy7vxyqIZYerwS4t%2FFNhG%2BUmSmNhtPkOvT5%2Fh6LaiPjtxK98VRHNxetlWQy6uXkZxbuQ47jWXnZCRDwNd%2BakhYYJ%2BDq%2BdnyUGZw1e2odjPQdXE1FLYQIqEiLf0Fesm1JeZXpXFORuEfOPPVl4cY1NvC2y0EyoxrARKQ0zB6U9%2By%2FzEO%2BFWq1Sq%2BWhsGLi7XA4hFmnwJfRcsPX5tF88%2FHHoQJ4M1V%2BCJXLzIN9GHtQ3AfS7rjZCcZWPowrJSSm0e62mwKOzQ8VNqWjavAb%2FSQKRuLfhmVjoUYdHUGZt5C1eX49FvC2bhB%2BIKLzPS%2Fz47Ib1fRiaKLIIgWJrhCxkQ9bW7KXz48HiFyF4dMCL81GM3ojWNwx9eZgiT8bzZskUxOWj7%2FBuI%2FreqwHj9MUCgA%2FHZ%2FKB7MEHKTZFdrd3GMfuagPGF06qyzawMheV%2BfCGeDaSF1lTu9Kus9guDCGeXt6ed8m0DdojdLuPgRuxtKksBsJtgcRQJ7F3Exp95eLgkj%2BMjvp1d8dUxKXhAcvDscCqWRi8mgYpY5jDe1e3JBjqkASzPe%2F%2FJEzaHkPHmvu9CPWMijrmtNvHhRCJdE1PCTZcPce7wluX638jjW7QXMO7ZhFwA5m30sC111kNd2ZDkdshvGJIbatygmE7um5wnM9S%2B2dMWWzm8TcDIvzJ8Itp6ya0BhvUrnqsrxPE2yPgNxxcaQWeylSw%2Fw35SVzUEr7kDwRJmH568JVrt%2B0Gy5RroKojKKdFDnHQOpd9vTwevDqAsfW74&X-Amz-Signature=33fbaeaf0a1a1fb0a804969e4c2ae4b88a68cb49644f4906fd3c1a1451bb8fd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNLLT6G%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD4ReW7zmPVW3wpvHkZYIbGQEn3szVGGW9LKCCL%2B7mxLQIhAO8jCamTArBXb96ZymGHSFVJWVnl4w7%2FDxgYZL8%2B1c7xKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvQ2jEBOBIBKEJyXkq3APbvFW7oP1DFcioJyWrqssj0rB%2Fj8Ahe%2FOFU28shd4C3%2BzQP6LQCZ9Z3avAg2qv%2BxMFSTB%2BLG4vKQuc1CUuRbLLE5Z%2F6cy7vxyqIZYerwS4t%2FFNhG%2BUmSmNhtPkOvT5%2Fh6LaiPjtxK98VRHNxetlWQy6uXkZxbuQ47jWXnZCRDwNd%2BakhYYJ%2BDq%2BdnyUGZw1e2odjPQdXE1FLYQIqEiLf0Fesm1JeZXpXFORuEfOPPVl4cY1NvC2y0EyoxrARKQ0zB6U9%2By%2FzEO%2BFWq1Sq%2BWhsGLi7XA4hFmnwJfRcsPX5tF88%2FHHoQJ4M1V%2BCJXLzIN9GHtQ3AfS7rjZCcZWPowrJSSm0e62mwKOzQ8VNqWjavAb%2FSQKRuLfhmVjoUYdHUGZt5C1eX49FvC2bhB%2BIKLzPS%2Fz47Ib1fRiaKLIIgWJrhCxkQ9bW7KXz48HiFyF4dMCL81GM3ojWNwx9eZgiT8bzZskUxOWj7%2FBuI%2FreqwHj9MUCgA%2FHZ%2FKB7MEHKTZFdrd3GMfuagPGF06qyzawMheV%2BfCGeDaSF1lTu9Kus9guDCGeXt6ed8m0DdojdLuPgRuxtKksBsJtgcRQJ7F3Exp95eLgkj%2BMjvp1d8dUxKXhAcvDscCqWRi8mgYpY5jDe1e3JBjqkASzPe%2F%2FJEzaHkPHmvu9CPWMijrmtNvHhRCJdE1PCTZcPce7wluX638jjW7QXMO7ZhFwA5m30sC111kNd2ZDkdshvGJIbatygmE7um5wnM9S%2B2dMWWzm8TcDIvzJ8Itp6ya0BhvUrnqsrxPE2yPgNxxcaQWeylSw%2Fw35SVzUEr7kDwRJmH568JVrt%2B0Gy5RroKojKKdFDnHQOpd9vTwevDqAsfW74&X-Amz-Signature=f5877c19e0e2773ad2a1644881648fe334e8ee5320b79f350f58554a9c20a667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSMYQB7N%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD5Fynd8pPbTfmzPfMvQHSu1ylrnUIZNh7E8N7rXjwunwIhAPXsyrI97%2F8jLyrl8Ck%2FWx54y9J%2BaJltrsrJcE77gNuPKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJ3iSVAhX0YWt7r%2F0q3AN6WHGb3wndmB1VQ%2FSNNJjx65B7%2FeJvOEz9HUIN2fPe85f3CwQcULtku2c5FEhhfhdLEaTXOSJhE%2F8GS9Oecb3mBnZFuD%2F3BL2%2B7z1T59zaJcsCevYRgGkL9k5KQKfzFm4rl6YR9xB8SKoOcVaol7d%2FAPM7nC4rr3HtUXflkz5ClrqedxfjWgcHYN7vMb4f0E%2FIexLma5Y%2Bhz%2FaG0aapLl9A%2FBI0qw3Uy3HanWnQW5AepxJS2Tn6K38ChWKgERXIGO9JUN8XaTTCDVW2%2B6En%2FUPmTmVeBRyC1S1m%2FhdsAJK98CKZanlG7jYpYygl6MLJ1iAfQ7o5u%2FKKO6Sm8XKjdveZye6IERcgVzYGszgqD2YcwyFvOVjy%2BJpCFNOMVxBRPjunQqF8wJirVlj%2B0M%2FzjSK0yeq9171uxCNcfWPDcjZsN%2FEcF1ZoCZl8p4OMfLabPpmtFO9D2NFzumkxQFA%2BTTgp3fajsot4GG%2F3EAcRrMSMQcBMAoDOThAazHlU3R4zjXep5OtlbD36grO%2F8zCJ7RansMQxfYpC8%2FXWCYXPoPvQRH1x8eIPPXynL9LxRrhP0U9o2hC%2BbN5T1qWZ96i%2FEfzh8BuixOHuL2E3k2CnzfjPzZgNdefceeH2zgjXTDK1O3JBjqkAUQR7hkTbLXS4m0e%2Bis%2FBAogboi%2Bp11%2F5NY4PADRsCDQQtgA%2FJ21HrhqRZScUZaWJ6hfkjUXynTolycObY7vqyVfZ14EKyqyeDkwHdHEmaZ%2BbJpOG6g7FMer%2Fh%2BL5fX7SQd8I7nADFYg6LCIdwK1KBILeoj5q37lyc7r4F%2BaFa36SGS0A1rOAjfZljwGojmyBBLtMOVSyf0JKtOL9fdNusbfY8Cb&X-Amz-Signature=9f2f59f02873a0db14603e460532608799eb1f0a49ba8058748d1662286b7923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNLLT6G%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD4ReW7zmPVW3wpvHkZYIbGQEn3szVGGW9LKCCL%2B7mxLQIhAO8jCamTArBXb96ZymGHSFVJWVnl4w7%2FDxgYZL8%2B1c7xKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvQ2jEBOBIBKEJyXkq3APbvFW7oP1DFcioJyWrqssj0rB%2Fj8Ahe%2FOFU28shd4C3%2BzQP6LQCZ9Z3avAg2qv%2BxMFSTB%2BLG4vKQuc1CUuRbLLE5Z%2F6cy7vxyqIZYerwS4t%2FFNhG%2BUmSmNhtPkOvT5%2Fh6LaiPjtxK98VRHNxetlWQy6uXkZxbuQ47jWXnZCRDwNd%2BakhYYJ%2BDq%2BdnyUGZw1e2odjPQdXE1FLYQIqEiLf0Fesm1JeZXpXFORuEfOPPVl4cY1NvC2y0EyoxrARKQ0zB6U9%2By%2FzEO%2BFWq1Sq%2BWhsGLi7XA4hFmnwJfRcsPX5tF88%2FHHoQJ4M1V%2BCJXLzIN9GHtQ3AfS7rjZCcZWPowrJSSm0e62mwKOzQ8VNqWjavAb%2FSQKRuLfhmVjoUYdHUGZt5C1eX49FvC2bhB%2BIKLzPS%2Fz47Ib1fRiaKLIIgWJrhCxkQ9bW7KXz48HiFyF4dMCL81GM3ojWNwx9eZgiT8bzZskUxOWj7%2FBuI%2FreqwHj9MUCgA%2FHZ%2FKB7MEHKTZFdrd3GMfuagPGF06qyzawMheV%2BfCGeDaSF1lTu9Kus9guDCGeXt6ed8m0DdojdLuPgRuxtKksBsJtgcRQJ7F3Exp95eLgkj%2BMjvp1d8dUxKXhAcvDscCqWRi8mgYpY5jDe1e3JBjqkASzPe%2F%2FJEzaHkPHmvu9CPWMijrmtNvHhRCJdE1PCTZcPce7wluX638jjW7QXMO7ZhFwA5m30sC111kNd2ZDkdshvGJIbatygmE7um5wnM9S%2B2dMWWzm8TcDIvzJ8Itp6ya0BhvUrnqsrxPE2yPgNxxcaQWeylSw%2Fw35SVzUEr7kDwRJmH568JVrt%2B0Gy5RroKojKKdFDnHQOpd9vTwevDqAsfW74&X-Amz-Signature=46d6ae8f8dfdc01569807401f4fc7f82f9ef0a6a7b8863862ce8fa7144d19185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNLLT6G%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD4ReW7zmPVW3wpvHkZYIbGQEn3szVGGW9LKCCL%2B7mxLQIhAO8jCamTArBXb96ZymGHSFVJWVnl4w7%2FDxgYZL8%2B1c7xKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvQ2jEBOBIBKEJyXkq3APbvFW7oP1DFcioJyWrqssj0rB%2Fj8Ahe%2FOFU28shd4C3%2BzQP6LQCZ9Z3avAg2qv%2BxMFSTB%2BLG4vKQuc1CUuRbLLE5Z%2F6cy7vxyqIZYerwS4t%2FFNhG%2BUmSmNhtPkOvT5%2Fh6LaiPjtxK98VRHNxetlWQy6uXkZxbuQ47jWXnZCRDwNd%2BakhYYJ%2BDq%2BdnyUGZw1e2odjPQdXE1FLYQIqEiLf0Fesm1JeZXpXFORuEfOPPVl4cY1NvC2y0EyoxrARKQ0zB6U9%2By%2FzEO%2BFWq1Sq%2BWhsGLi7XA4hFmnwJfRcsPX5tF88%2FHHoQJ4M1V%2BCJXLzIN9GHtQ3AfS7rjZCcZWPowrJSSm0e62mwKOzQ8VNqWjavAb%2FSQKRuLfhmVjoUYdHUGZt5C1eX49FvC2bhB%2BIKLzPS%2Fz47Ib1fRiaKLIIgWJrhCxkQ9bW7KXz48HiFyF4dMCL81GM3ojWNwx9eZgiT8bzZskUxOWj7%2FBuI%2FreqwHj9MUCgA%2FHZ%2FKB7MEHKTZFdrd3GMfuagPGF06qyzawMheV%2BfCGeDaSF1lTu9Kus9guDCGeXt6ed8m0DdojdLuPgRuxtKksBsJtgcRQJ7F3Exp95eLgkj%2BMjvp1d8dUxKXhAcvDscCqWRi8mgYpY5jDe1e3JBjqkASzPe%2F%2FJEzaHkPHmvu9CPWMijrmtNvHhRCJdE1PCTZcPce7wluX638jjW7QXMO7ZhFwA5m30sC111kNd2ZDkdshvGJIbatygmE7um5wnM9S%2B2dMWWzm8TcDIvzJ8Itp6ya0BhvUrnqsrxPE2yPgNxxcaQWeylSw%2Fw35SVzUEr7kDwRJmH568JVrt%2B0Gy5RroKojKKdFDnHQOpd9vTwevDqAsfW74&X-Amz-Signature=89589018e0ff1701b3c6fadd7827997d51051425dd8af4af7d2efe4d9830e5d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNLLT6G%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD4ReW7zmPVW3wpvHkZYIbGQEn3szVGGW9LKCCL%2B7mxLQIhAO8jCamTArBXb96ZymGHSFVJWVnl4w7%2FDxgYZL8%2B1c7xKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvQ2jEBOBIBKEJyXkq3APbvFW7oP1DFcioJyWrqssj0rB%2Fj8Ahe%2FOFU28shd4C3%2BzQP6LQCZ9Z3avAg2qv%2BxMFSTB%2BLG4vKQuc1CUuRbLLE5Z%2F6cy7vxyqIZYerwS4t%2FFNhG%2BUmSmNhtPkOvT5%2Fh6LaiPjtxK98VRHNxetlWQy6uXkZxbuQ47jWXnZCRDwNd%2BakhYYJ%2BDq%2BdnyUGZw1e2odjPQdXE1FLYQIqEiLf0Fesm1JeZXpXFORuEfOPPVl4cY1NvC2y0EyoxrARKQ0zB6U9%2By%2FzEO%2BFWq1Sq%2BWhsGLi7XA4hFmnwJfRcsPX5tF88%2FHHoQJ4M1V%2BCJXLzIN9GHtQ3AfS7rjZCcZWPowrJSSm0e62mwKOzQ8VNqWjavAb%2FSQKRuLfhmVjoUYdHUGZt5C1eX49FvC2bhB%2BIKLzPS%2Fz47Ib1fRiaKLIIgWJrhCxkQ9bW7KXz48HiFyF4dMCL81GM3ojWNwx9eZgiT8bzZskUxOWj7%2FBuI%2FreqwHj9MUCgA%2FHZ%2FKB7MEHKTZFdrd3GMfuagPGF06qyzawMheV%2BfCGeDaSF1lTu9Kus9guDCGeXt6ed8m0DdojdLuPgRuxtKksBsJtgcRQJ7F3Exp95eLgkj%2BMjvp1d8dUxKXhAcvDscCqWRi8mgYpY5jDe1e3JBjqkASzPe%2F%2FJEzaHkPHmvu9CPWMijrmtNvHhRCJdE1PCTZcPce7wluX638jjW7QXMO7ZhFwA5m30sC111kNd2ZDkdshvGJIbatygmE7um5wnM9S%2B2dMWWzm8TcDIvzJ8Itp6ya0BhvUrnqsrxPE2yPgNxxcaQWeylSw%2Fw35SVzUEr7kDwRJmH568JVrt%2B0Gy5RroKojKKdFDnHQOpd9vTwevDqAsfW74&X-Amz-Signature=a1ff72a224b22d3e5c95df0286021a5ef14ef6f1bc848cb679f405eca4dbdb9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNLLT6G%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD4ReW7zmPVW3wpvHkZYIbGQEn3szVGGW9LKCCL%2B7mxLQIhAO8jCamTArBXb96ZymGHSFVJWVnl4w7%2FDxgYZL8%2B1c7xKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvQ2jEBOBIBKEJyXkq3APbvFW7oP1DFcioJyWrqssj0rB%2Fj8Ahe%2FOFU28shd4C3%2BzQP6LQCZ9Z3avAg2qv%2BxMFSTB%2BLG4vKQuc1CUuRbLLE5Z%2F6cy7vxyqIZYerwS4t%2FFNhG%2BUmSmNhtPkOvT5%2Fh6LaiPjtxK98VRHNxetlWQy6uXkZxbuQ47jWXnZCRDwNd%2BakhYYJ%2BDq%2BdnyUGZw1e2odjPQdXE1FLYQIqEiLf0Fesm1JeZXpXFORuEfOPPVl4cY1NvC2y0EyoxrARKQ0zB6U9%2By%2FzEO%2BFWq1Sq%2BWhsGLi7XA4hFmnwJfRcsPX5tF88%2FHHoQJ4M1V%2BCJXLzIN9GHtQ3AfS7rjZCcZWPowrJSSm0e62mwKOzQ8VNqWjavAb%2FSQKRuLfhmVjoUYdHUGZt5C1eX49FvC2bhB%2BIKLzPS%2Fz47Ib1fRiaKLIIgWJrhCxkQ9bW7KXz48HiFyF4dMCL81GM3ojWNwx9eZgiT8bzZskUxOWj7%2FBuI%2FreqwHj9MUCgA%2FHZ%2FKB7MEHKTZFdrd3GMfuagPGF06qyzawMheV%2BfCGeDaSF1lTu9Kus9guDCGeXt6ed8m0DdojdLuPgRuxtKksBsJtgcRQJ7F3Exp95eLgkj%2BMjvp1d8dUxKXhAcvDscCqWRi8mgYpY5jDe1e3JBjqkASzPe%2F%2FJEzaHkPHmvu9CPWMijrmtNvHhRCJdE1PCTZcPce7wluX638jjW7QXMO7ZhFwA5m30sC111kNd2ZDkdshvGJIbatygmE7um5wnM9S%2B2dMWWzm8TcDIvzJ8Itp6ya0BhvUrnqsrxPE2yPgNxxcaQWeylSw%2Fw35SVzUEr7kDwRJmH568JVrt%2B0Gy5RroKojKKdFDnHQOpd9vTwevDqAsfW74&X-Amz-Signature=e6313e2ca952348a7b54a127e50bcf5356b4842317436d8ba40265fafb1b2ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNLLT6G%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD4ReW7zmPVW3wpvHkZYIbGQEn3szVGGW9LKCCL%2B7mxLQIhAO8jCamTArBXb96ZymGHSFVJWVnl4w7%2FDxgYZL8%2B1c7xKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvQ2jEBOBIBKEJyXkq3APbvFW7oP1DFcioJyWrqssj0rB%2Fj8Ahe%2FOFU28shd4C3%2BzQP6LQCZ9Z3avAg2qv%2BxMFSTB%2BLG4vKQuc1CUuRbLLE5Z%2F6cy7vxyqIZYerwS4t%2FFNhG%2BUmSmNhtPkOvT5%2Fh6LaiPjtxK98VRHNxetlWQy6uXkZxbuQ47jWXnZCRDwNd%2BakhYYJ%2BDq%2BdnyUGZw1e2odjPQdXE1FLYQIqEiLf0Fesm1JeZXpXFORuEfOPPVl4cY1NvC2y0EyoxrARKQ0zB6U9%2By%2FzEO%2BFWq1Sq%2BWhsGLi7XA4hFmnwJfRcsPX5tF88%2FHHoQJ4M1V%2BCJXLzIN9GHtQ3AfS7rjZCcZWPowrJSSm0e62mwKOzQ8VNqWjavAb%2FSQKRuLfhmVjoUYdHUGZt5C1eX49FvC2bhB%2BIKLzPS%2Fz47Ib1fRiaKLIIgWJrhCxkQ9bW7KXz48HiFyF4dMCL81GM3ojWNwx9eZgiT8bzZskUxOWj7%2FBuI%2FreqwHj9MUCgA%2FHZ%2FKB7MEHKTZFdrd3GMfuagPGF06qyzawMheV%2BfCGeDaSF1lTu9Kus9guDCGeXt6ed8m0DdojdLuPgRuxtKksBsJtgcRQJ7F3Exp95eLgkj%2BMjvp1d8dUxKXhAcvDscCqWRi8mgYpY5jDe1e3JBjqkASzPe%2F%2FJEzaHkPHmvu9CPWMijrmtNvHhRCJdE1PCTZcPce7wluX638jjW7QXMO7ZhFwA5m30sC111kNd2ZDkdshvGJIbatygmE7um5wnM9S%2B2dMWWzm8TcDIvzJ8Itp6ya0BhvUrnqsrxPE2yPgNxxcaQWeylSw%2Fw35SVzUEr7kDwRJmH568JVrt%2B0Gy5RroKojKKdFDnHQOpd9vTwevDqAsfW74&X-Amz-Signature=6b6195b143e033adbe2049401340a4df34a69c6a9c432ce270706f10dad5b5ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNLLT6G%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD4ReW7zmPVW3wpvHkZYIbGQEn3szVGGW9LKCCL%2B7mxLQIhAO8jCamTArBXb96ZymGHSFVJWVnl4w7%2FDxgYZL8%2B1c7xKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvQ2jEBOBIBKEJyXkq3APbvFW7oP1DFcioJyWrqssj0rB%2Fj8Ahe%2FOFU28shd4C3%2BzQP6LQCZ9Z3avAg2qv%2BxMFSTB%2BLG4vKQuc1CUuRbLLE5Z%2F6cy7vxyqIZYerwS4t%2FFNhG%2BUmSmNhtPkOvT5%2Fh6LaiPjtxK98VRHNxetlWQy6uXkZxbuQ47jWXnZCRDwNd%2BakhYYJ%2BDq%2BdnyUGZw1e2odjPQdXE1FLYQIqEiLf0Fesm1JeZXpXFORuEfOPPVl4cY1NvC2y0EyoxrARKQ0zB6U9%2By%2FzEO%2BFWq1Sq%2BWhsGLi7XA4hFmnwJfRcsPX5tF88%2FHHoQJ4M1V%2BCJXLzIN9GHtQ3AfS7rjZCcZWPowrJSSm0e62mwKOzQ8VNqWjavAb%2FSQKRuLfhmVjoUYdHUGZt5C1eX49FvC2bhB%2BIKLzPS%2Fz47Ib1fRiaKLIIgWJrhCxkQ9bW7KXz48HiFyF4dMCL81GM3ojWNwx9eZgiT8bzZskUxOWj7%2FBuI%2FreqwHj9MUCgA%2FHZ%2FKB7MEHKTZFdrd3GMfuagPGF06qyzawMheV%2BfCGeDaSF1lTu9Kus9guDCGeXt6ed8m0DdojdLuPgRuxtKksBsJtgcRQJ7F3Exp95eLgkj%2BMjvp1d8dUxKXhAcvDscCqWRi8mgYpY5jDe1e3JBjqkASzPe%2F%2FJEzaHkPHmvu9CPWMijrmtNvHhRCJdE1PCTZcPce7wluX638jjW7QXMO7ZhFwA5m30sC111kNd2ZDkdshvGJIbatygmE7um5wnM9S%2B2dMWWzm8TcDIvzJ8Itp6ya0BhvUrnqsrxPE2yPgNxxcaQWeylSw%2Fw35SVzUEr7kDwRJmH568JVrt%2B0Gy5RroKojKKdFDnHQOpd9vTwevDqAsfW74&X-Amz-Signature=08f0e8cd01a11e459b2416d070facba6e3cade9db16a6c9010b84c726abfc014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


