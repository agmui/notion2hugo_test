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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T474DZ5F%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo5AWlIhZumMxw9654orwWTVWl8ig2xr513%2B2NSOeG8AiBjynrOdANo99nRb3l17Qv0DwX7xU4MsaqrDjFuEi3MuSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGpJpQHaG6d6WW2RiKtwD82dVj8uvfNkecXNbJUtVs7E3zDfnrKyJQmgZNlnExDEysIncEufe5TJ1NbW6hIjFD50CUVI44OiCN2b9Ed6NO6AxftUnFuDvsWWAgM0QAx4%2BTIufOLhRI9%2Ft2%2Bs8%2FcfpbkHTo2zBrMqxmY7610%2Ff6%2FZpAHw4HckcVrWR%2F4%2B15jpniSs%2Fme3onvSaLQjn8OIPILAycBZls88fbFfV%2FuCmZbBjo6sEiJbGzTmDzTL00BqZujhDctfEt1AslollypVRikduOsO0YXGh%2FqnZcfEPqXw85lEiHtxQ%2FHH4pMOyvptdIyNSia7mREVQABvi2KoNPwj6Td3iz68PWCwE5aTulrXdydaVEmiGwJB7yELvD1RbQqoIKrd%2FQfLl2VGrNcfi6OuY6Vmu2zEcpfIV0hYAdBFaRTM5xWMq%2BDiojm5FzhhwuvgPbU20rAyq4hMCrC4QjPT6kgLKPrfAHd0N8dofjkzlYwdM1qCMy59cTkMmleTh5Q29%2BOWwbuEumhIuU7NxoMjKhg%2F%2Banlal9QUZDQLrU9jI%2BM5K%2BqRlwc4g6u8kjAFOlrAwlbTtkMyNqpJ2NrLbesY1P14YsBgnAzkZV%2BKPwkn2JzYl0yFXOsb%2BQ%2BdOvyg929JYgp2zjtLmA0w3KSBywY6pgFEYL%2BwABALfbYblnERWMqYrH9LRQh52sOdhW49DGphSAdwpxAz4xNL3iYtV%2BTeggwCI1itiQ14o4zn05qvu4bgyNMOM5bYEBOdQHrOEnpISpLZbrgEEibTTgUAdXjXF%2BGoarOZBPTYlRdsbnMQjHspj4ClQN5tTi7jCUlYlOvGTfzNKPQGlFyM2hJNfEZMwBJi4QWPwf9EgnUSYbwE%2BZqzlh%2BjMuLx&X-Amz-Signature=af343721317b2353dcac59bc57effb808617ee6e2ae231e929a53a90ff1d01dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T474DZ5F%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo5AWlIhZumMxw9654orwWTVWl8ig2xr513%2B2NSOeG8AiBjynrOdANo99nRb3l17Qv0DwX7xU4MsaqrDjFuEi3MuSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGpJpQHaG6d6WW2RiKtwD82dVj8uvfNkecXNbJUtVs7E3zDfnrKyJQmgZNlnExDEysIncEufe5TJ1NbW6hIjFD50CUVI44OiCN2b9Ed6NO6AxftUnFuDvsWWAgM0QAx4%2BTIufOLhRI9%2Ft2%2Bs8%2FcfpbkHTo2zBrMqxmY7610%2Ff6%2FZpAHw4HckcVrWR%2F4%2B15jpniSs%2Fme3onvSaLQjn8OIPILAycBZls88fbFfV%2FuCmZbBjo6sEiJbGzTmDzTL00BqZujhDctfEt1AslollypVRikduOsO0YXGh%2FqnZcfEPqXw85lEiHtxQ%2FHH4pMOyvptdIyNSia7mREVQABvi2KoNPwj6Td3iz68PWCwE5aTulrXdydaVEmiGwJB7yELvD1RbQqoIKrd%2FQfLl2VGrNcfi6OuY6Vmu2zEcpfIV0hYAdBFaRTM5xWMq%2BDiojm5FzhhwuvgPbU20rAyq4hMCrC4QjPT6kgLKPrfAHd0N8dofjkzlYwdM1qCMy59cTkMmleTh5Q29%2BOWwbuEumhIuU7NxoMjKhg%2F%2Banlal9QUZDQLrU9jI%2BM5K%2BqRlwc4g6u8kjAFOlrAwlbTtkMyNqpJ2NrLbesY1P14YsBgnAzkZV%2BKPwkn2JzYl0yFXOsb%2BQ%2BdOvyg929JYgp2zjtLmA0w3KSBywY6pgFEYL%2BwABALfbYblnERWMqYrH9LRQh52sOdhW49DGphSAdwpxAz4xNL3iYtV%2BTeggwCI1itiQ14o4zn05qvu4bgyNMOM5bYEBOdQHrOEnpISpLZbrgEEibTTgUAdXjXF%2BGoarOZBPTYlRdsbnMQjHspj4ClQN5tTi7jCUlYlOvGTfzNKPQGlFyM2hJNfEZMwBJi4QWPwf9EgnUSYbwE%2BZqzlh%2BjMuLx&X-Amz-Signature=14ea11d675374ef9d2a85ad7a7bb69fbf1eada3a4b2833510c6dd726d757e1b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T474DZ5F%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo5AWlIhZumMxw9654orwWTVWl8ig2xr513%2B2NSOeG8AiBjynrOdANo99nRb3l17Qv0DwX7xU4MsaqrDjFuEi3MuSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGpJpQHaG6d6WW2RiKtwD82dVj8uvfNkecXNbJUtVs7E3zDfnrKyJQmgZNlnExDEysIncEufe5TJ1NbW6hIjFD50CUVI44OiCN2b9Ed6NO6AxftUnFuDvsWWAgM0QAx4%2BTIufOLhRI9%2Ft2%2Bs8%2FcfpbkHTo2zBrMqxmY7610%2Ff6%2FZpAHw4HckcVrWR%2F4%2B15jpniSs%2Fme3onvSaLQjn8OIPILAycBZls88fbFfV%2FuCmZbBjo6sEiJbGzTmDzTL00BqZujhDctfEt1AslollypVRikduOsO0YXGh%2FqnZcfEPqXw85lEiHtxQ%2FHH4pMOyvptdIyNSia7mREVQABvi2KoNPwj6Td3iz68PWCwE5aTulrXdydaVEmiGwJB7yELvD1RbQqoIKrd%2FQfLl2VGrNcfi6OuY6Vmu2zEcpfIV0hYAdBFaRTM5xWMq%2BDiojm5FzhhwuvgPbU20rAyq4hMCrC4QjPT6kgLKPrfAHd0N8dofjkzlYwdM1qCMy59cTkMmleTh5Q29%2BOWwbuEumhIuU7NxoMjKhg%2F%2Banlal9QUZDQLrU9jI%2BM5K%2BqRlwc4g6u8kjAFOlrAwlbTtkMyNqpJ2NrLbesY1P14YsBgnAzkZV%2BKPwkn2JzYl0yFXOsb%2BQ%2BdOvyg929JYgp2zjtLmA0w3KSBywY6pgFEYL%2BwABALfbYblnERWMqYrH9LRQh52sOdhW49DGphSAdwpxAz4xNL3iYtV%2BTeggwCI1itiQ14o4zn05qvu4bgyNMOM5bYEBOdQHrOEnpISpLZbrgEEibTTgUAdXjXF%2BGoarOZBPTYlRdsbnMQjHspj4ClQN5tTi7jCUlYlOvGTfzNKPQGlFyM2hJNfEZMwBJi4QWPwf9EgnUSYbwE%2BZqzlh%2BjMuLx&X-Amz-Signature=65b2d4c93ec7074e3c9829cda19163ea676e55b383a4a025c60a8813ec31c7e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T474DZ5F%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo5AWlIhZumMxw9654orwWTVWl8ig2xr513%2B2NSOeG8AiBjynrOdANo99nRb3l17Qv0DwX7xU4MsaqrDjFuEi3MuSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGpJpQHaG6d6WW2RiKtwD82dVj8uvfNkecXNbJUtVs7E3zDfnrKyJQmgZNlnExDEysIncEufe5TJ1NbW6hIjFD50CUVI44OiCN2b9Ed6NO6AxftUnFuDvsWWAgM0QAx4%2BTIufOLhRI9%2Ft2%2Bs8%2FcfpbkHTo2zBrMqxmY7610%2Ff6%2FZpAHw4HckcVrWR%2F4%2B15jpniSs%2Fme3onvSaLQjn8OIPILAycBZls88fbFfV%2FuCmZbBjo6sEiJbGzTmDzTL00BqZujhDctfEt1AslollypVRikduOsO0YXGh%2FqnZcfEPqXw85lEiHtxQ%2FHH4pMOyvptdIyNSia7mREVQABvi2KoNPwj6Td3iz68PWCwE5aTulrXdydaVEmiGwJB7yELvD1RbQqoIKrd%2FQfLl2VGrNcfi6OuY6Vmu2zEcpfIV0hYAdBFaRTM5xWMq%2BDiojm5FzhhwuvgPbU20rAyq4hMCrC4QjPT6kgLKPrfAHd0N8dofjkzlYwdM1qCMy59cTkMmleTh5Q29%2BOWwbuEumhIuU7NxoMjKhg%2F%2Banlal9QUZDQLrU9jI%2BM5K%2BqRlwc4g6u8kjAFOlrAwlbTtkMyNqpJ2NrLbesY1P14YsBgnAzkZV%2BKPwkn2JzYl0yFXOsb%2BQ%2BdOvyg929JYgp2zjtLmA0w3KSBywY6pgFEYL%2BwABALfbYblnERWMqYrH9LRQh52sOdhW49DGphSAdwpxAz4xNL3iYtV%2BTeggwCI1itiQ14o4zn05qvu4bgyNMOM5bYEBOdQHrOEnpISpLZbrgEEibTTgUAdXjXF%2BGoarOZBPTYlRdsbnMQjHspj4ClQN5tTi7jCUlYlOvGTfzNKPQGlFyM2hJNfEZMwBJi4QWPwf9EgnUSYbwE%2BZqzlh%2BjMuLx&X-Amz-Signature=330aa2a8f8375c2aa5bdec2ad575ede2acffe0ac61323e8c424dda980c859ced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T474DZ5F%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo5AWlIhZumMxw9654orwWTVWl8ig2xr513%2B2NSOeG8AiBjynrOdANo99nRb3l17Qv0DwX7xU4MsaqrDjFuEi3MuSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGpJpQHaG6d6WW2RiKtwD82dVj8uvfNkecXNbJUtVs7E3zDfnrKyJQmgZNlnExDEysIncEufe5TJ1NbW6hIjFD50CUVI44OiCN2b9Ed6NO6AxftUnFuDvsWWAgM0QAx4%2BTIufOLhRI9%2Ft2%2Bs8%2FcfpbkHTo2zBrMqxmY7610%2Ff6%2FZpAHw4HckcVrWR%2F4%2B15jpniSs%2Fme3onvSaLQjn8OIPILAycBZls88fbFfV%2FuCmZbBjo6sEiJbGzTmDzTL00BqZujhDctfEt1AslollypVRikduOsO0YXGh%2FqnZcfEPqXw85lEiHtxQ%2FHH4pMOyvptdIyNSia7mREVQABvi2KoNPwj6Td3iz68PWCwE5aTulrXdydaVEmiGwJB7yELvD1RbQqoIKrd%2FQfLl2VGrNcfi6OuY6Vmu2zEcpfIV0hYAdBFaRTM5xWMq%2BDiojm5FzhhwuvgPbU20rAyq4hMCrC4QjPT6kgLKPrfAHd0N8dofjkzlYwdM1qCMy59cTkMmleTh5Q29%2BOWwbuEumhIuU7NxoMjKhg%2F%2Banlal9QUZDQLrU9jI%2BM5K%2BqRlwc4g6u8kjAFOlrAwlbTtkMyNqpJ2NrLbesY1P14YsBgnAzkZV%2BKPwkn2JzYl0yFXOsb%2BQ%2BdOvyg929JYgp2zjtLmA0w3KSBywY6pgFEYL%2BwABALfbYblnERWMqYrH9LRQh52sOdhW49DGphSAdwpxAz4xNL3iYtV%2BTeggwCI1itiQ14o4zn05qvu4bgyNMOM5bYEBOdQHrOEnpISpLZbrgEEibTTgUAdXjXF%2BGoarOZBPTYlRdsbnMQjHspj4ClQN5tTi7jCUlYlOvGTfzNKPQGlFyM2hJNfEZMwBJi4QWPwf9EgnUSYbwE%2BZqzlh%2BjMuLx&X-Amz-Signature=567f0a644e4f530de20cf76227de2baec51addafbdb0596232af88e8430d322c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T474DZ5F%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo5AWlIhZumMxw9654orwWTVWl8ig2xr513%2B2NSOeG8AiBjynrOdANo99nRb3l17Qv0DwX7xU4MsaqrDjFuEi3MuSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGpJpQHaG6d6WW2RiKtwD82dVj8uvfNkecXNbJUtVs7E3zDfnrKyJQmgZNlnExDEysIncEufe5TJ1NbW6hIjFD50CUVI44OiCN2b9Ed6NO6AxftUnFuDvsWWAgM0QAx4%2BTIufOLhRI9%2Ft2%2Bs8%2FcfpbkHTo2zBrMqxmY7610%2Ff6%2FZpAHw4HckcVrWR%2F4%2B15jpniSs%2Fme3onvSaLQjn8OIPILAycBZls88fbFfV%2FuCmZbBjo6sEiJbGzTmDzTL00BqZujhDctfEt1AslollypVRikduOsO0YXGh%2FqnZcfEPqXw85lEiHtxQ%2FHH4pMOyvptdIyNSia7mREVQABvi2KoNPwj6Td3iz68PWCwE5aTulrXdydaVEmiGwJB7yELvD1RbQqoIKrd%2FQfLl2VGrNcfi6OuY6Vmu2zEcpfIV0hYAdBFaRTM5xWMq%2BDiojm5FzhhwuvgPbU20rAyq4hMCrC4QjPT6kgLKPrfAHd0N8dofjkzlYwdM1qCMy59cTkMmleTh5Q29%2BOWwbuEumhIuU7NxoMjKhg%2F%2Banlal9QUZDQLrU9jI%2BM5K%2BqRlwc4g6u8kjAFOlrAwlbTtkMyNqpJ2NrLbesY1P14YsBgnAzkZV%2BKPwkn2JzYl0yFXOsb%2BQ%2BdOvyg929JYgp2zjtLmA0w3KSBywY6pgFEYL%2BwABALfbYblnERWMqYrH9LRQh52sOdhW49DGphSAdwpxAz4xNL3iYtV%2BTeggwCI1itiQ14o4zn05qvu4bgyNMOM5bYEBOdQHrOEnpISpLZbrgEEibTTgUAdXjXF%2BGoarOZBPTYlRdsbnMQjHspj4ClQN5tTi7jCUlYlOvGTfzNKPQGlFyM2hJNfEZMwBJi4QWPwf9EgnUSYbwE%2BZqzlh%2BjMuLx&X-Amz-Signature=51652fe0a993df9b4d695b6ff416f9b588109849b279b2dc8a777ca8e6da11cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T474DZ5F%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo5AWlIhZumMxw9654orwWTVWl8ig2xr513%2B2NSOeG8AiBjynrOdANo99nRb3l17Qv0DwX7xU4MsaqrDjFuEi3MuSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGpJpQHaG6d6WW2RiKtwD82dVj8uvfNkecXNbJUtVs7E3zDfnrKyJQmgZNlnExDEysIncEufe5TJ1NbW6hIjFD50CUVI44OiCN2b9Ed6NO6AxftUnFuDvsWWAgM0QAx4%2BTIufOLhRI9%2Ft2%2Bs8%2FcfpbkHTo2zBrMqxmY7610%2Ff6%2FZpAHw4HckcVrWR%2F4%2B15jpniSs%2Fme3onvSaLQjn8OIPILAycBZls88fbFfV%2FuCmZbBjo6sEiJbGzTmDzTL00BqZujhDctfEt1AslollypVRikduOsO0YXGh%2FqnZcfEPqXw85lEiHtxQ%2FHH4pMOyvptdIyNSia7mREVQABvi2KoNPwj6Td3iz68PWCwE5aTulrXdydaVEmiGwJB7yELvD1RbQqoIKrd%2FQfLl2VGrNcfi6OuY6Vmu2zEcpfIV0hYAdBFaRTM5xWMq%2BDiojm5FzhhwuvgPbU20rAyq4hMCrC4QjPT6kgLKPrfAHd0N8dofjkzlYwdM1qCMy59cTkMmleTh5Q29%2BOWwbuEumhIuU7NxoMjKhg%2F%2Banlal9QUZDQLrU9jI%2BM5K%2BqRlwc4g6u8kjAFOlrAwlbTtkMyNqpJ2NrLbesY1P14YsBgnAzkZV%2BKPwkn2JzYl0yFXOsb%2BQ%2BdOvyg929JYgp2zjtLmA0w3KSBywY6pgFEYL%2BwABALfbYblnERWMqYrH9LRQh52sOdhW49DGphSAdwpxAz4xNL3iYtV%2BTeggwCI1itiQ14o4zn05qvu4bgyNMOM5bYEBOdQHrOEnpISpLZbrgEEibTTgUAdXjXF%2BGoarOZBPTYlRdsbnMQjHspj4ClQN5tTi7jCUlYlOvGTfzNKPQGlFyM2hJNfEZMwBJi4QWPwf9EgnUSYbwE%2BZqzlh%2BjMuLx&X-Amz-Signature=bf291eab459ad3214ac6c44c1f3bd446ca29bf685b9633dd818967a823035880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T474DZ5F%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo5AWlIhZumMxw9654orwWTVWl8ig2xr513%2B2NSOeG8AiBjynrOdANo99nRb3l17Qv0DwX7xU4MsaqrDjFuEi3MuSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGpJpQHaG6d6WW2RiKtwD82dVj8uvfNkecXNbJUtVs7E3zDfnrKyJQmgZNlnExDEysIncEufe5TJ1NbW6hIjFD50CUVI44OiCN2b9Ed6NO6AxftUnFuDvsWWAgM0QAx4%2BTIufOLhRI9%2Ft2%2Bs8%2FcfpbkHTo2zBrMqxmY7610%2Ff6%2FZpAHw4HckcVrWR%2F4%2B15jpniSs%2Fme3onvSaLQjn8OIPILAycBZls88fbFfV%2FuCmZbBjo6sEiJbGzTmDzTL00BqZujhDctfEt1AslollypVRikduOsO0YXGh%2FqnZcfEPqXw85lEiHtxQ%2FHH4pMOyvptdIyNSia7mREVQABvi2KoNPwj6Td3iz68PWCwE5aTulrXdydaVEmiGwJB7yELvD1RbQqoIKrd%2FQfLl2VGrNcfi6OuY6Vmu2zEcpfIV0hYAdBFaRTM5xWMq%2BDiojm5FzhhwuvgPbU20rAyq4hMCrC4QjPT6kgLKPrfAHd0N8dofjkzlYwdM1qCMy59cTkMmleTh5Q29%2BOWwbuEumhIuU7NxoMjKhg%2F%2Banlal9QUZDQLrU9jI%2BM5K%2BqRlwc4g6u8kjAFOlrAwlbTtkMyNqpJ2NrLbesY1P14YsBgnAzkZV%2BKPwkn2JzYl0yFXOsb%2BQ%2BdOvyg929JYgp2zjtLmA0w3KSBywY6pgFEYL%2BwABALfbYblnERWMqYrH9LRQh52sOdhW49DGphSAdwpxAz4xNL3iYtV%2BTeggwCI1itiQ14o4zn05qvu4bgyNMOM5bYEBOdQHrOEnpISpLZbrgEEibTTgUAdXjXF%2BGoarOZBPTYlRdsbnMQjHspj4ClQN5tTi7jCUlYlOvGTfzNKPQGlFyM2hJNfEZMwBJi4QWPwf9EgnUSYbwE%2BZqzlh%2BjMuLx&X-Amz-Signature=765fa1d6f4f8e28e8a6bb771f0b131a7400d3fe36c1d26c1ce3f40311b5166e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T474DZ5F%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo5AWlIhZumMxw9654orwWTVWl8ig2xr513%2B2NSOeG8AiBjynrOdANo99nRb3l17Qv0DwX7xU4MsaqrDjFuEi3MuSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGpJpQHaG6d6WW2RiKtwD82dVj8uvfNkecXNbJUtVs7E3zDfnrKyJQmgZNlnExDEysIncEufe5TJ1NbW6hIjFD50CUVI44OiCN2b9Ed6NO6AxftUnFuDvsWWAgM0QAx4%2BTIufOLhRI9%2Ft2%2Bs8%2FcfpbkHTo2zBrMqxmY7610%2Ff6%2FZpAHw4HckcVrWR%2F4%2B15jpniSs%2Fme3onvSaLQjn8OIPILAycBZls88fbFfV%2FuCmZbBjo6sEiJbGzTmDzTL00BqZujhDctfEt1AslollypVRikduOsO0YXGh%2FqnZcfEPqXw85lEiHtxQ%2FHH4pMOyvptdIyNSia7mREVQABvi2KoNPwj6Td3iz68PWCwE5aTulrXdydaVEmiGwJB7yELvD1RbQqoIKrd%2FQfLl2VGrNcfi6OuY6Vmu2zEcpfIV0hYAdBFaRTM5xWMq%2BDiojm5FzhhwuvgPbU20rAyq4hMCrC4QjPT6kgLKPrfAHd0N8dofjkzlYwdM1qCMy59cTkMmleTh5Q29%2BOWwbuEumhIuU7NxoMjKhg%2F%2Banlal9QUZDQLrU9jI%2BM5K%2BqRlwc4g6u8kjAFOlrAwlbTtkMyNqpJ2NrLbesY1P14YsBgnAzkZV%2BKPwkn2JzYl0yFXOsb%2BQ%2BdOvyg929JYgp2zjtLmA0w3KSBywY6pgFEYL%2BwABALfbYblnERWMqYrH9LRQh52sOdhW49DGphSAdwpxAz4xNL3iYtV%2BTeggwCI1itiQ14o4zn05qvu4bgyNMOM5bYEBOdQHrOEnpISpLZbrgEEibTTgUAdXjXF%2BGoarOZBPTYlRdsbnMQjHspj4ClQN5tTi7jCUlYlOvGTfzNKPQGlFyM2hJNfEZMwBJi4QWPwf9EgnUSYbwE%2BZqzlh%2BjMuLx&X-Amz-Signature=02f6aa5c9722305fb3f6196d9da529d8cc6afabbf6b2dbf353706dc1c08ab6ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T474DZ5F%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo5AWlIhZumMxw9654orwWTVWl8ig2xr513%2B2NSOeG8AiBjynrOdANo99nRb3l17Qv0DwX7xU4MsaqrDjFuEi3MuSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGpJpQHaG6d6WW2RiKtwD82dVj8uvfNkecXNbJUtVs7E3zDfnrKyJQmgZNlnExDEysIncEufe5TJ1NbW6hIjFD50CUVI44OiCN2b9Ed6NO6AxftUnFuDvsWWAgM0QAx4%2BTIufOLhRI9%2Ft2%2Bs8%2FcfpbkHTo2zBrMqxmY7610%2Ff6%2FZpAHw4HckcVrWR%2F4%2B15jpniSs%2Fme3onvSaLQjn8OIPILAycBZls88fbFfV%2FuCmZbBjo6sEiJbGzTmDzTL00BqZujhDctfEt1AslollypVRikduOsO0YXGh%2FqnZcfEPqXw85lEiHtxQ%2FHH4pMOyvptdIyNSia7mREVQABvi2KoNPwj6Td3iz68PWCwE5aTulrXdydaVEmiGwJB7yELvD1RbQqoIKrd%2FQfLl2VGrNcfi6OuY6Vmu2zEcpfIV0hYAdBFaRTM5xWMq%2BDiojm5FzhhwuvgPbU20rAyq4hMCrC4QjPT6kgLKPrfAHd0N8dofjkzlYwdM1qCMy59cTkMmleTh5Q29%2BOWwbuEumhIuU7NxoMjKhg%2F%2Banlal9QUZDQLrU9jI%2BM5K%2BqRlwc4g6u8kjAFOlrAwlbTtkMyNqpJ2NrLbesY1P14YsBgnAzkZV%2BKPwkn2JzYl0yFXOsb%2BQ%2BdOvyg929JYgp2zjtLmA0w3KSBywY6pgFEYL%2BwABALfbYblnERWMqYrH9LRQh52sOdhW49DGphSAdwpxAz4xNL3iYtV%2BTeggwCI1itiQ14o4zn05qvu4bgyNMOM5bYEBOdQHrOEnpISpLZbrgEEibTTgUAdXjXF%2BGoarOZBPTYlRdsbnMQjHspj4ClQN5tTi7jCUlYlOvGTfzNKPQGlFyM2hJNfEZMwBJi4QWPwf9EgnUSYbwE%2BZqzlh%2BjMuLx&X-Amz-Signature=91107590fa60f88ad4ca9e6ee5581c319eeb7be0bda89f528be64f2cafb7ed64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2K6AHJA%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFarfGHQZhTGxADsOgLQHlsP8WmY651EJn4xgOiZgU6eAiEAsDzQAWGINGAvoFpGjQP9a6l4H3hBTqkgLkTu69yZAAkqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUpmA%2F1oWRW2U8csircAwBpTIN7YQy6VnIbdGWIo3nKSSjSSpYiw0y4mZW97x6hOuSZC0LLToQT7q%2BeWfOyfeM1vhzoXfTlKw39keoni%2BAf%2BbnBPRTvLvrZhXLsY5rX6WS2JQgx1MsBX1zmGHQxkkUipSyjE0x5S5AS8oQ0BNwAvjnyk8OAC%2B%2F4WOBYtvuIOqxYGh0Sv1NNYSKkmVMD9JvejJEz9%2FdGfqzuBAL4gupXXTK%2FK8ykzsrJDXEQ4OuSyJhx5M9emP3%2Fh%2BjugRfmfBJ56RXbYjYHREjUCZ79V010mMqP4KqXIoOoDncWW4vPm4gFA5w7rcoL0i3lRK5GjhAE%2F1wiuxOBHZ7Fht4pXTTJaCALcfC4LupqG2Jh8Wb07RcSpN%2FJYAxZBQCEeOp5e8ocYbxWrtJWPKQq8NKq2XDjWv80RTroTEL256UweSjDoUTIHfYcCXjEyId5RNy8FbsQ0Mzk7nk3ZaUeOLF3Iwh4wEkQhKGMgxuDNEct%2FDc4XVfuWxR6WVoWJgv%2FrE13SGDlLAwYfQ4t0sbDGRWZOiC6Rx04ukCo%2BWoyHXxDEs%2F1%2B%2B0LOoutxV2OiqN1bqwaaLZqokvhcMf6PgYPSD2u2iv0JfLWMfCGx2P0BRnpMFKeqpTcpvou71KVUvA3MOajgcsGOqUBayRtopfKztyaLIEz2%2BmWf%2BFBa9J26sA%2FOp%2FCGQ9CU09V7NZ0q6C3SXQqQ5nuebIhznn9WFwO9Tcs2Tw1BbxiMwNghJYEjM2QlvYiuu6D4m%2FFjfz%2BxD3Cb1RJ%2BtFZ9%2Bkkzac3erUskP92lei9XBuEz6hDolXN1hcWkMl9JQ6hT0%2BWraN%2BGQ7mGq%2FayFw8S%2FfkPzwtlz4v9FbbIVDgtG%2F0KBuw9Khs&X-Amz-Signature=db79aaee72b74631afee15a6b0c097fc7c57e547423d38826d6541b5e1a8f088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBZXYYEC%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkRNliI6qeLjqcS6jwKi%2FF2CUS1rzWON7p076mmv5I2AIhAMt6impDjxsi%2FMF8J1yWFriSrjqR8MwlxSuOUgiQeUL3KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUxCJZNtOMty8nYZMq3ANNI9Yv27NfK3nL%2BmDbMmTOv8rFRuxuszi3QlFnnqB9vXgcRhMTL5XTOCASSaEYhGtPWR0gS2kI5thlOZnOgnhmHsWCfqHjs0K8r8TSE7ABcgIT7opeuwfGyY%2FsvTw4jZdhi8VatPrv3MiqEYrNm9OZBaKCyWbNOwkWe%2Bcp%2FetPV26s24N141lbEbCpBDe%2F4%2FdrHHb2JIds74pdQq2zgfUO2FUWLlcBZ5ZY%2BIKbAiJqj0y6Rhq2ZDDZ9j6fZ%2FfZVPo5EnBpA6y8PmIJSKi3oMQ%2FKT5GO%2ByyVvzHPA8QO%2BiKUF7fCuNXyOqVHslv9nxMVrHXcZ%2BwlW1dqvUwVexu5iVEWXVoj6m%2F4966hlK3sEzZoVPAS1Tgixue9idtkINsqUJski1QMS0yQ2GfxEQOTQ8MalTkwI4PfJfnwNKhmVCwtoMbuFxuUgzPkwhSbxfh0f8tT8wH7N%2FT0OD5WXK6yVVdFHByM4JKE9GwPppb3bc2%2FjjxU64mfaZk6BnkwMmKaewcJfP%2F6bAx7XJCdZ1%2FD%2FkLWR0NYn%2FIeKqCuk0vSxAlOCIdrDVMv4%2BCOsaN%2BetrrDyPKNododX42e5H19V3ySE4C15YOxXHyFHAKqI3Exvf7uzwo2TfCuJgTUqdLjC3pIHLBjqkAZY5qhj4CNKVHy50Q9a%2BEwdmJ7L1bE6v%2F%2B8P1Q8Z3l2sk7JtxYgaIKQNyUjSHlKWQqFh6z%2BPX28ejKmcFDqUNiVJNvivrKe5%2Fy6ujR2kq5cbpXb2jmAPd46D1u5Ko6OYu1oSfqld3R59nWP00TDJ%2FeiZIKd4y6xFa7abk6g4SNShxBHe2xDoKoRJgKcbF%2Bt21muYn19UVofhdV%2FU2qijMWbod8xJ&X-Amz-Signature=1d7ab72a08d505884c5f47be2d95619d6784607ca912e55c1cb15b0b7df51b33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTOLS5PY%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUbXGU3pWcGS2km5qSh21EkYmeuw0JMeWv7P4QJ8Nv7wIgDQGCLzrFvtMR1AIR8KaCh4HNPE74s%2BrZRaS4yxZaRr8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYVXmdcZxJmDBeIOSrcA9Po%2FU6k2tCS1dJ2emurxHt0qnD9xxN6SeMUft8csXBN%2FIkgop%2FDUF12ORDIssLgWX9lVBgzLL2tXItbHElLPaxFWvbVZMiBC8bX28JX8npwGa8fZn9PLtUqOeJlM%2FNN45PBN8R9aLTQpoapXsonuUzTz%2B5VatHIzGJtDxFate%2Ft52nwFoLpcfyW7kXCsSWmAM0zAlxGL3GNeZQ9mP4pBF11MphE0dLh47LdP4MmZ7FhcUaE5Kzv9Bk%2FYkry7z5Jiy5oaaakDb1meOb%2Bst9G0DE0gV8i8bROeAgGH2AMWAaN6yh2R2zpo%2Fg6i31r2PX1XOLtAy0YujC1Xhz66AtAVw7pDhNY0vB7376PLBH2zjVylCZQeoU0ea39RZI70%2BYsXOBmPArUgIb4MswX7f4nJWKW0%2BT6ObZwEGl7geQCc24964ZVhoR7JERxSztdQMFGC%2F%2F2NpyIjkCzaKNFBAMeMsXzJp%2BXq5qbnCyAw191BnTWEcOHS06IeBz5Ju%2FTMWItcN274BMr5zwProMT2WmUZXgvbWXR0NAyK6A1p38nMzbQ2bLOV9GEyA%2BVtflf6K%2F36W%2BvMiuJKuy8idCEvFU9et9A62hhEOPfG3DnZSNPHqVKg1iO92eO3UijvnhrMKukgcsGOqUBxKZs2v4KfqIuB9NPloKj4zqmjkEub8IEx0sMOTnr%2FS1r2inhTeVWDRuNkMy44V2A5B2%2FW8jvWYlrsFLWbgdm92Qyy1e07VVkbQJU6vCZPGPCRw8reqT4yKuU9CBVBWjoL%2BAlOGfxrxBxiwDhESXZpzSyKMRYnLjCRKo8ld7xgFTg5d1OpYK1TihKJQJUCIEw%2BmvpQuaH1Wwg%2B3PTSdyXa8%2FAvoCs&X-Amz-Signature=833f8deab88f629ff97865f370ba6a06217227582a52d60f015c2a547ff3673d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T474DZ5F%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo5AWlIhZumMxw9654orwWTVWl8ig2xr513%2B2NSOeG8AiBjynrOdANo99nRb3l17Qv0DwX7xU4MsaqrDjFuEi3MuSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGpJpQHaG6d6WW2RiKtwD82dVj8uvfNkecXNbJUtVs7E3zDfnrKyJQmgZNlnExDEysIncEufe5TJ1NbW6hIjFD50CUVI44OiCN2b9Ed6NO6AxftUnFuDvsWWAgM0QAx4%2BTIufOLhRI9%2Ft2%2Bs8%2FcfpbkHTo2zBrMqxmY7610%2Ff6%2FZpAHw4HckcVrWR%2F4%2B15jpniSs%2Fme3onvSaLQjn8OIPILAycBZls88fbFfV%2FuCmZbBjo6sEiJbGzTmDzTL00BqZujhDctfEt1AslollypVRikduOsO0YXGh%2FqnZcfEPqXw85lEiHtxQ%2FHH4pMOyvptdIyNSia7mREVQABvi2KoNPwj6Td3iz68PWCwE5aTulrXdydaVEmiGwJB7yELvD1RbQqoIKrd%2FQfLl2VGrNcfi6OuY6Vmu2zEcpfIV0hYAdBFaRTM5xWMq%2BDiojm5FzhhwuvgPbU20rAyq4hMCrC4QjPT6kgLKPrfAHd0N8dofjkzlYwdM1qCMy59cTkMmleTh5Q29%2BOWwbuEumhIuU7NxoMjKhg%2F%2Banlal9QUZDQLrU9jI%2BM5K%2BqRlwc4g6u8kjAFOlrAwlbTtkMyNqpJ2NrLbesY1P14YsBgnAzkZV%2BKPwkn2JzYl0yFXOsb%2BQ%2BdOvyg929JYgp2zjtLmA0w3KSBywY6pgFEYL%2BwABALfbYblnERWMqYrH9LRQh52sOdhW49DGphSAdwpxAz4xNL3iYtV%2BTeggwCI1itiQ14o4zn05qvu4bgyNMOM5bYEBOdQHrOEnpISpLZbrgEEibTTgUAdXjXF%2BGoarOZBPTYlRdsbnMQjHspj4ClQN5tTi7jCUlYlOvGTfzNKPQGlFyM2hJNfEZMwBJi4QWPwf9EgnUSYbwE%2BZqzlh%2BjMuLx&X-Amz-Signature=ccaa07663fbde92f484e1c5b9a62619266139dd6637af93e02811adf03d847dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B677ESZ%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3cXqZF%2BegK9x4NHCnZ4Qik6K%2BT0y8VTy2%2F9PPK0MiJAiAL%2BvTL5Gt2E2HAkIM4R91rKh6M927Uwv57XmkYU30ROCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVJfODTUcTIClD1ezKtwD8tgNeajj6xiiD2R0%2Fzvdgdds6Gh7WXW37h0Fu7H5KSjaeDDTBWFKlNLmQUM4kXj4%2Br2rEly820Br6DpvgTaWOrL5HiyQ%2Bvk9fT93bP76lsLmb8u%2BPJQyNS1IOiI1bmTVINfZIjx5222Dm6lvIaUL3kscne7R9lCvc4SyTszTwkmz21fcF%2BuKwoSZ2kkWRdeE0CNt3PnalJKSKUkRZbIXVXo7uiMMMp5HB8FHd6uoIDDVwemg4FaucAPCcZqmdUSShlQy92lMvz2XMpwGw6ngvGMPLIP780sph%2B%2BTqg83XKpGtbxuIIiHWHuTYLUQJsg9ruMDhAImk1ZNlKtTxrq%2FC02pf3i7ArVmbQOW7Dod9npjNcEx6no6P1EIQpu1gekfa0jViQDdqiF0Fj5fjsE9nFsuRdmmhh1l72SRATqakKA0PKcQriA%2B1DNqSoVzPRyEQUSBeG5uIwlxAJ7hzTkOMjEv4Hgwo3ZyYsyeGBsxzjDwcFfQnOpw%2BI%2BpZd%2F%2F%2BweMZUJZg3yBE6RTC5MDRClWNpUe8cy4ZlEmc91fTOF1sX33tssYD2TZnPStoGBqs421G%2BAQJqDPWACkh91NgFtGsyxhNdNPvN8E%2B%2Bh1U25oJFVpxqKni7Xlapp6sLIw1aOBywY6pgHoILjwhqRz6YRQsrQSH0npkPhJBegQ3ir%2FX1A3KGFdvJzC0adu6yViZ4M9fOfHoPuHB1YqBjD7T0%2FASexD%2Fe23Hfxp98lDkJpnA%2BNgti%2Bmu83Rc1UTRdj8zVs62VbcQRSkaA1dNHIO8ws01eFDnapVF3pwre4GvAcJiwmfII0QlauIXNDJ1VagBTHeoVs%2FK5RnjF4e91bcff%2FuB%2FXwucftgO6OK4x4&X-Amz-Signature=04cd254ac6bf8d511d17f3dc40095437da46f49bf5f7145203448ca18e0fbadd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T474DZ5F%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo5AWlIhZumMxw9654orwWTVWl8ig2xr513%2B2NSOeG8AiBjynrOdANo99nRb3l17Qv0DwX7xU4MsaqrDjFuEi3MuSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGpJpQHaG6d6WW2RiKtwD82dVj8uvfNkecXNbJUtVs7E3zDfnrKyJQmgZNlnExDEysIncEufe5TJ1NbW6hIjFD50CUVI44OiCN2b9Ed6NO6AxftUnFuDvsWWAgM0QAx4%2BTIufOLhRI9%2Ft2%2Bs8%2FcfpbkHTo2zBrMqxmY7610%2Ff6%2FZpAHw4HckcVrWR%2F4%2B15jpniSs%2Fme3onvSaLQjn8OIPILAycBZls88fbFfV%2FuCmZbBjo6sEiJbGzTmDzTL00BqZujhDctfEt1AslollypVRikduOsO0YXGh%2FqnZcfEPqXw85lEiHtxQ%2FHH4pMOyvptdIyNSia7mREVQABvi2KoNPwj6Td3iz68PWCwE5aTulrXdydaVEmiGwJB7yELvD1RbQqoIKrd%2FQfLl2VGrNcfi6OuY6Vmu2zEcpfIV0hYAdBFaRTM5xWMq%2BDiojm5FzhhwuvgPbU20rAyq4hMCrC4QjPT6kgLKPrfAHd0N8dofjkzlYwdM1qCMy59cTkMmleTh5Q29%2BOWwbuEumhIuU7NxoMjKhg%2F%2Banlal9QUZDQLrU9jI%2BM5K%2BqRlwc4g6u8kjAFOlrAwlbTtkMyNqpJ2NrLbesY1P14YsBgnAzkZV%2BKPwkn2JzYl0yFXOsb%2BQ%2BdOvyg929JYgp2zjtLmA0w3KSBywY6pgFEYL%2BwABALfbYblnERWMqYrH9LRQh52sOdhW49DGphSAdwpxAz4xNL3iYtV%2BTeggwCI1itiQ14o4zn05qvu4bgyNMOM5bYEBOdQHrOEnpISpLZbrgEEibTTgUAdXjXF%2BGoarOZBPTYlRdsbnMQjHspj4ClQN5tTi7jCUlYlOvGTfzNKPQGlFyM2hJNfEZMwBJi4QWPwf9EgnUSYbwE%2BZqzlh%2BjMuLx&X-Amz-Signature=8b1c05b4cea267f7566d04d3afb893739694eec42eccb689583bcc528cc5e165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667HAGLMU%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0BFO1aitlZ8qbCqPV2nWghkC4qKK0yz4bUi7DQ%2BGHsAiBPcz5Rfb6UZbtB7ouzrU0syNOedQUbaLmsR6m1%2BOpEBiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLcOuMuXhML%2FZ4LUMKtwDPQDM%2ByXKaPcWdkOIWds%2FbBLULrHkxDbJolIL4HZb6cGlRTiqcia35Gh1e7cuk1qUj50wAkEu5m4xdjfroQUZWO8EJPOOcwCHZW4GKozgN2X2I5vXS7U%2F5KNGnpthfHQPLoG1esXfSk7oD5cZMmQM7gK%2FqZn1Q6%2Bqz4hFqHVGv5xkEkRoWIhEn3UphCWVKA6u6XsccMMpXs1bUvI%2Bo6rnlF1S5IQfd%2BHOvybeXfOhSNa55kFAyjJs8vkatKYS2LAK1D6iST3uzSFPk%2Fxs98yaR62%2Bq5YcsSvexLL55a2XEpT3ZQQTr9IM%2BKjaHsT7eKULsJERMHvuntJVmgyriRrMWaAJgEbkMgQBWFdpuY%2BcS1S%2FTIDJGUlO4sYTmQqv9gPS%2FY2%2BddzL7ZfjjnlqjbD6hzZq848%2FugbTIJreIAWl9oRdszvCvmbrY5U%2FaK81gYaT3IT%2F6OSTpXUg7snSKkQBhNZRXvMfuNrUSoD5InVq4Y%2FVNmg9WwSv3OfVWZWn%2FmoBc2JPfDMLh%2BGgM0kDkdrkn0o7NJ3aeMCXQL7OpNc9k66RYmdg5WVbsDGk1HA%2Bu%2FlEXJyOWcIcryLv89yknOHmkSEGyZLAIn3tOq6E1mZKhtxx95P7PD5FNLuma8Qwz6SBywY6pgF0wsls%2FnMy%2FyKxNmseot%2BVTXAXJ9Pu3joAhBMHoNfaaIXFiPinCimF3oYmgngxvf4dGyEH0j3viHIBo74SCpQY7znHy9slPQYwRIouxeUmY9Qa5JCLbdy7a5rIvH40VrUQ4bcKdUzqA4yhkpHDYURioo2LiydPbzlXRsvprzdEn%2FzjD21x2UDK15khrQYyZgpT9bqK8GDA0n8nh%2FNMTdrV3s7MGxzH&X-Amz-Signature=cfcb66e5dd17f478669194169e34347625971e0ed367691cec5101376afdc408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T474DZ5F%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo5AWlIhZumMxw9654orwWTVWl8ig2xr513%2B2NSOeG8AiBjynrOdANo99nRb3l17Qv0DwX7xU4MsaqrDjFuEi3MuSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGpJpQHaG6d6WW2RiKtwD82dVj8uvfNkecXNbJUtVs7E3zDfnrKyJQmgZNlnExDEysIncEufe5TJ1NbW6hIjFD50CUVI44OiCN2b9Ed6NO6AxftUnFuDvsWWAgM0QAx4%2BTIufOLhRI9%2Ft2%2Bs8%2FcfpbkHTo2zBrMqxmY7610%2Ff6%2FZpAHw4HckcVrWR%2F4%2B15jpniSs%2Fme3onvSaLQjn8OIPILAycBZls88fbFfV%2FuCmZbBjo6sEiJbGzTmDzTL00BqZujhDctfEt1AslollypVRikduOsO0YXGh%2FqnZcfEPqXw85lEiHtxQ%2FHH4pMOyvptdIyNSia7mREVQABvi2KoNPwj6Td3iz68PWCwE5aTulrXdydaVEmiGwJB7yELvD1RbQqoIKrd%2FQfLl2VGrNcfi6OuY6Vmu2zEcpfIV0hYAdBFaRTM5xWMq%2BDiojm5FzhhwuvgPbU20rAyq4hMCrC4QjPT6kgLKPrfAHd0N8dofjkzlYwdM1qCMy59cTkMmleTh5Q29%2BOWwbuEumhIuU7NxoMjKhg%2F%2Banlal9QUZDQLrU9jI%2BM5K%2BqRlwc4g6u8kjAFOlrAwlbTtkMyNqpJ2NrLbesY1P14YsBgnAzkZV%2BKPwkn2JzYl0yFXOsb%2BQ%2BdOvyg929JYgp2zjtLmA0w3KSBywY6pgFEYL%2BwABALfbYblnERWMqYrH9LRQh52sOdhW49DGphSAdwpxAz4xNL3iYtV%2BTeggwCI1itiQ14o4zn05qvu4bgyNMOM5bYEBOdQHrOEnpISpLZbrgEEibTTgUAdXjXF%2BGoarOZBPTYlRdsbnMQjHspj4ClQN5tTi7jCUlYlOvGTfzNKPQGlFyM2hJNfEZMwBJi4QWPwf9EgnUSYbwE%2BZqzlh%2BjMuLx&X-Amz-Signature=f41cdbdbd9c218b7aa5b37d889c6e624759ce8844a9e7b1c243ca9dadcaffbfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQHVRGE%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVzzM7OSYraCsT7PkxAgakuL6TPArEjSfAjzp6Uc%2F5JAiABSgWMHJS1X9cVTY2rR8lujNtblTi95SVfzkimKBCS7iqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMciZGmZn9oAEtaFLwKtwD8TbtFpfx9YMbyfqQ4f%2BgyJpwfme45JbhkjSoJ5VC4tH92PQ4lt7tEz9ULekH1tLec4bG0HAM4cIAEmBz0E6O4Qr5N3YR1euE5zqEu3KAW3ebrM9MgXs6Nk6%2FJJuz%2FG%2BMDL4ThtLmUj7LrdsKMVhL%2BDAvuzX%2FLwbOcovVkkZvkke8aCGBxTmtYcNS7rc8kpvqfGnNUywNxdnVSkGd1CN1CazNDTir8tTN6BkD4ZPhsZLwnfimdUCSIlJyaGvQXCIKDeETrm%2F3ZhJ7JgDiY2XQlh2CHrBtryQxGTejSbdvcusUK1D9t2ZJ2lSl5LMfSUPd0wN5W30dV1EuGHqiInB88mK9nBIb05V67tT8tkJgY6M8QXxdIY8UOm658Ua0tYlr936Qeeny%2FHfDOncQ0Z0nqEfIa7t6sW2LhrwKyIANy24XrPRZOfLC8ELG1JRrdX5HZJ5WTIqi6HtGj1bX9S3UO34yBGss3M2m3HJrHaFwe63QurWpVUEooDEGeHwRw3a%2FNISm6Kavf8bpL%2FDohigdAPF9xBQaYsnfoC9tdIb1pLMu7eYZ31qbzmyf92PwXiRh2sODs9oSxCRDBKoin4M0WQLAjVqPwUNo8HlGxnFMIVQ1m4b5tDcYXSgacekw3qSBywY6pgGgb7MmFGT1H6UcjIDWPfsxLbC%2B9lZZpf9hVqhH9DHI3dIS8JxTABr%2Bn0jvLqqdt0AfmPZr7tRTyH9ckUFH66Y7HFZ6e2az5zgdL52wJQiiAMNjsF1u%2BOHrwmfkARUwvferxTyxbLxxMghp5d5wnOgyqbb5qhjtCH4xTNSgF4g4qRJmfQz%2BkwKKi6h3PlUszwW9EPT%2BNk%2ByNsNNFLuXf1x67oExn2Py&X-Amz-Signature=be7eb7d2c38fac33a1fcf69d1adca9082b124518d1786fe510f867a8763c1353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T474DZ5F%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo5AWlIhZumMxw9654orwWTVWl8ig2xr513%2B2NSOeG8AiBjynrOdANo99nRb3l17Qv0DwX7xU4MsaqrDjFuEi3MuSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGpJpQHaG6d6WW2RiKtwD82dVj8uvfNkecXNbJUtVs7E3zDfnrKyJQmgZNlnExDEysIncEufe5TJ1NbW6hIjFD50CUVI44OiCN2b9Ed6NO6AxftUnFuDvsWWAgM0QAx4%2BTIufOLhRI9%2Ft2%2Bs8%2FcfpbkHTo2zBrMqxmY7610%2Ff6%2FZpAHw4HckcVrWR%2F4%2B15jpniSs%2Fme3onvSaLQjn8OIPILAycBZls88fbFfV%2FuCmZbBjo6sEiJbGzTmDzTL00BqZujhDctfEt1AslollypVRikduOsO0YXGh%2FqnZcfEPqXw85lEiHtxQ%2FHH4pMOyvptdIyNSia7mREVQABvi2KoNPwj6Td3iz68PWCwE5aTulrXdydaVEmiGwJB7yELvD1RbQqoIKrd%2FQfLl2VGrNcfi6OuY6Vmu2zEcpfIV0hYAdBFaRTM5xWMq%2BDiojm5FzhhwuvgPbU20rAyq4hMCrC4QjPT6kgLKPrfAHd0N8dofjkzlYwdM1qCMy59cTkMmleTh5Q29%2BOWwbuEumhIuU7NxoMjKhg%2F%2Banlal9QUZDQLrU9jI%2BM5K%2BqRlwc4g6u8kjAFOlrAwlbTtkMyNqpJ2NrLbesY1P14YsBgnAzkZV%2BKPwkn2JzYl0yFXOsb%2BQ%2BdOvyg929JYgp2zjtLmA0w3KSBywY6pgFEYL%2BwABALfbYblnERWMqYrH9LRQh52sOdhW49DGphSAdwpxAz4xNL3iYtV%2BTeggwCI1itiQ14o4zn05qvu4bgyNMOM5bYEBOdQHrOEnpISpLZbrgEEibTTgUAdXjXF%2BGoarOZBPTYlRdsbnMQjHspj4ClQN5tTi7jCUlYlOvGTfzNKPQGlFyM2hJNfEZMwBJi4QWPwf9EgnUSYbwE%2BZqzlh%2BjMuLx&X-Amz-Signature=243e2a75acc700e8cca81da0e0d079f53161af98c82042a4f6906958a91dec6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJWSSLMX%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FGg3PNaOc5fzsfFkgZ7jLDEeKe3D5PuypWNJ9HqoiyAIgCcKmWpR9uqRXhK58B7FY6LOAaogLDPvHJ8be5nCuaBkqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJM6WJvU2kpVopDtuCrcA4CMGPQvYA14mq2n6y2HDaxeJ129uu9zJjqwCZdn07ZThvTLFmtAFYxxMguSOfMUb6%2B2COsMKCjvJKW8J3eZb7qEGX6g51CibrklxT0Zs77z4APCzsI5GY5qcTZ4OututaGV5Xbz691ruhDii5XThOJVyw5urRCU5tGqzEEpMSGAEo9XxfKx1oQe0%2Bo2JD2nslmCyfRJEEVlKSWrIzmDZNIAe0IZAg2DdPhAQ5WG7K7S3NKv6HECGIoRpQR5rKbsBkhwUmHe7IvhG%2Bgc7aT3KeMXhpWGfVhy4wW%2FMKZmMkuc9az3zJwmeJiJHkkhEfK4RCFr7zV%2B3iTF2WG0OyH7pWJhgIyvm70M5xEDmznC5rqOeFr2iJSzxf4y93npYTMZoZ9lpKuy4JzHkurwiOAz4lHRpa9m989m%2BLDawpu1%2FlGnn2demR0GpEUroDlJyZG9Pqn1bWEHjcMk6sKlRZTLkt7hEiD4iAtkOz%2FT0TBN5I%2Bav88qrgTFaPCsSpIQYi464sALAoqdi1bQ1c72jwiOoyhIXIbsOjEZowE%2FU0%2BhQ%2FRLdNvG7oR0ndai0Y2HuhDxT8wItLYcGZC15m2HOibS39MbiU0jteQHSD83%2B8kO3QfsdQiLqL5iG3w5DH5xMKukgcsGOqUBY101pbKR9ug8crq5ZXx1GgQcniAT8WYRjZjtbFCi2KLestaGX8jfE3MNtgquuF9JbLqrYA7NEsc6Im4FNg%2BvE6wBatwxxfrlJwXsSYOFTOjEi7YIrgzf0dbPUvc8vEafBy2zvtDWD54CWu%2FpsLSyxgB0tGJtGsnASOiRk1feFBY4rPvlcYrQohjrVX9aVc2iHB%2BQS4DKTT8%2FnB496QlHa0hT0wAB&X-Amz-Signature=7c6952956343dc43adcd7b61af14fb5ab358d2b3356231c5cc3815620e12b580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T474DZ5F%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo5AWlIhZumMxw9654orwWTVWl8ig2xr513%2B2NSOeG8AiBjynrOdANo99nRb3l17Qv0DwX7xU4MsaqrDjFuEi3MuSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGpJpQHaG6d6WW2RiKtwD82dVj8uvfNkecXNbJUtVs7E3zDfnrKyJQmgZNlnExDEysIncEufe5TJ1NbW6hIjFD50CUVI44OiCN2b9Ed6NO6AxftUnFuDvsWWAgM0QAx4%2BTIufOLhRI9%2Ft2%2Bs8%2FcfpbkHTo2zBrMqxmY7610%2Ff6%2FZpAHw4HckcVrWR%2F4%2B15jpniSs%2Fme3onvSaLQjn8OIPILAycBZls88fbFfV%2FuCmZbBjo6sEiJbGzTmDzTL00BqZujhDctfEt1AslollypVRikduOsO0YXGh%2FqnZcfEPqXw85lEiHtxQ%2FHH4pMOyvptdIyNSia7mREVQABvi2KoNPwj6Td3iz68PWCwE5aTulrXdydaVEmiGwJB7yELvD1RbQqoIKrd%2FQfLl2VGrNcfi6OuY6Vmu2zEcpfIV0hYAdBFaRTM5xWMq%2BDiojm5FzhhwuvgPbU20rAyq4hMCrC4QjPT6kgLKPrfAHd0N8dofjkzlYwdM1qCMy59cTkMmleTh5Q29%2BOWwbuEumhIuU7NxoMjKhg%2F%2Banlal9QUZDQLrU9jI%2BM5K%2BqRlwc4g6u8kjAFOlrAwlbTtkMyNqpJ2NrLbesY1P14YsBgnAzkZV%2BKPwkn2JzYl0yFXOsb%2BQ%2BdOvyg929JYgp2zjtLmA0w3KSBywY6pgFEYL%2BwABALfbYblnERWMqYrH9LRQh52sOdhW49DGphSAdwpxAz4xNL3iYtV%2BTeggwCI1itiQ14o4zn05qvu4bgyNMOM5bYEBOdQHrOEnpISpLZbrgEEibTTgUAdXjXF%2BGoarOZBPTYlRdsbnMQjHspj4ClQN5tTi7jCUlYlOvGTfzNKPQGlFyM2hJNfEZMwBJi4QWPwf9EgnUSYbwE%2BZqzlh%2BjMuLx&X-Amz-Signature=e39e9b5f703f03f7c4afee57fb5f5ffab48b80e18b07e8061335f092f39b6835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HQ6RJV6%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJrwWIdvBNwfRfEiR7hPAD5IiorWIK3naS7mBzsV7aSwIgegVHaNR%2BOaTFnqD9E3Vx%2FhQZwYSo%2FLL1aoFEwznbNkoqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhW67c6lR5k0CzsWircA2daoI2ZbTBun%2BmCGz94cCkNCcDjEqiXGYGRFdiWitImsq375xIdRwzPUSm0q0LmuhsttyNqISv71iLGfhlKsMJ%2FRfRHxpqUryb5lwPAm7lCyvFzt4n8CSXkwQBtSmKx3vS2YEdJD6gktzL5BCfWgzUTUUU%2B1YpL2s1dpjL5KYjCUWmFtD1ggJtGQi6LnNOdsEWql%2FfOBbruVeke0JSz8Zfr%2FGsUJckbG8UcHL7Bo9O26Wili3vbYW6ODtmzSFSE8uY9yO%2F9kmyfL1jf9LYpD%2F2yzleOOO647wKtLpdHtEFhHt3P7Z7rIH6Af%2FsKO%2B1CNKCeiMai%2FLKMJajqGL%2BligJHi%2BPkh6RWWhV27VPp%2BxoVt%2FGrP7vr1XP7QA8hvFbiCOpAUz9pyh%2B5ctle3v%2FqA0iWyq%2F%2F6Co3FBUbvIEvZWVE6YMoank7OvgBb%2BoK946mdVtqADNEgie7b6NLTO3ukRuWv51cN%2BQI0o4BbBiFp8EMK4onF%2BbCJJgxjKf1MjucDid%2FQ4nzc1EFxWKllo6RHtUjNOR08GR%2FVMC5Jg6swW4tPFYAWhWBB7DCpAyaDVScNha6vUaGJSLHx3Pa2VLYdbvhCxYmQXWBSi8iVmYrNbXr7v6gaPHdb49hgn%2BCMNyjgcsGOqUBy6%2FOZ3ihWnAQMN75l2l%2Bmp%2FvTKMXL5wv4J2ZMIn6B3fDj7ud9Awa6ZsIZOC%2Fn1rxgOtzBJu7vLWq81EhhMZ87iClfxTWb7%2FgOinqVfKn28nJ7rhKHhkZC9kf0ZSLkx7FJeROdnH%2BzFZI913CVLEPqbF%2FFMz6lZeumzqd1eKCbGyT4L0gcpqKanfCJPGTuocoGhBm%2BWv1hRFgprniEcBVBKG6fqfK&X-Amz-Signature=e2dce3d4282893309c109856949a6fc698dcd9c4c95fe4ce6263caedc000101e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XANYDKT6%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHwe2XXSBajsZWRot97ebOYu7busKC8mnGnPnAp8az%2FkCIBlgSk7qITMI7ezgJxLBPKZH5QV3FTxXKzYWLhwlTpTrKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQgs18xGY91NqyYckq3AMlwaXDSxNOoaOsyaAXU9LoKT1f79xQ3TF92yeWfGW7HKb8sjR8uK93UCYzqwa9cY49K9PlUp%2BXfn7crVEBCJtu%2B7nfa5pAOXaIHEptnd6JiL6PongpnnXrZZ5uhSMe2vthyuYmgBI%2F2D4Rn7P%2FpBOEe2rlBnNCAvD%2F2GSoNOswFn20NZH15hueTX%2BJactrzX9aMBMAr0Vsqk1usPW22h6w7tHOieKKu3q85jja7eWFXzVXzQLZhWOLAxeqSIJA1HJy2zpa0%2B8Gnrkx%2B9Zvc9WHjnksPPDqgSFnFOqSRsS5blqn%2FcsMBdi8wSo1QJKctiDNheDwB1dtVZp0ev78sUS1W573zMXdcw%2BYv5dreEQvbcdq9d55vdYrORdvjWNkjJXya%2BRZNng%2BFILRyhDjTIUKPziW%2B6%2BFtR9RTWVEEEhT8gHu3NRKgqnIs07KISOn3J7K4ej%2FjKz8SZVtKdg74STESDI7XhXs01ra%2FcjDUvzwpHXvMIkvVs2ahTeNRx3dwaFO%2BPeAZMRc6FzAL6oU%2BUByauVjXC8pdpmB9%2FLp50nPFXwIRh2ot5DED2LdVavgAAiVm7fFgHHJFtcrbN33DcE1HYJudfrqAMqAnzYE8b9HzhF6eOlbdj6H37kzpTDjpIHLBjqnAXg6s2YKd%2FzDOklY%2BMUaR75k%2Funl2VKAEbmHPh1wzrhwCnCfiuud4FUHAtlpkXMCEi%2FZab9BzivyBBmjF7nie8XZba8l3VNnE%2BeNrp86FHUq87UzLMNmhh4AXFgeFLdLUyJL6zS7%2B%2FB3yYDhxVSL%2FVgapkA1%2BYcbp7Y9GcNLVBHrKWrby0vOZkH16sWD3a5yAcZkTrUlFlo9YgziFeFPeGJqgaxui3LO&X-Amz-Signature=d47b8cb7e451bafe42694c1dc240b56b5cc023fff069d96917531afd3a511cfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWSTCC46%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAOMvLDnVlv0TEHDL%2Flo0M5q4466NpbSkJFppvaHLYgBAiALIf8cC2XN%2BRpCE40zGde75E3BsIdMOUQq0xG0De2lBSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOpOq%2B7zbSBPj7iiBKtwD9fadWXiIoo5Nb9mmf75CHF1QY5QuLLIdUP6Hut%2Byb%2BtzXJty8hDvJ044VQAeZy1d9B3wxgnS5PjPe8EgHZk59Eo9FsyZ93OUecoKXhwivL35YEnqF2Kf02xOjO5S4DplDQ6UH8RthCPKoMCOSvCekhZ3hUsY2vK9PuJlEJDZGTBqpPckQnAMxEM3TQ%2FbMbInX5bVrDm6F9xEzKLf3oDW0kYsy1AGJsRkA45IvkJB09FizaJrBXI9X8Q43gIfPLbfJaRgBgs1MeU1DydP371jPib8DvpNktrgvbHyCRnEaQ2MbPf5aj%2BiWKlJP46gMSAcmrzpuXgkXlkXcHqTza4i0%2Bhb1Uwy2lC4IP5UZ0hOuxL%2FK3%2FnJX4zIAehYL7hHKEYWcVcClTIl2%2FDzjPhQ3aUmpGg3dedI1LKHZDqAAT%2FPjdy4AU7wiDC%2FVSiY5ZuiEslZ%2BtduK23%2FqXpRZulIm341VAaaA2KWoTj%2B6jmQRKu%2BLpSm7F5%2BvW6KgEQhincjHDIeyArLYtOSqAfAAt%2BUVb3BuhXBab1vzgmdZ32qpiQe8Bml2D2bKiAtodlYMnRgB6fcHRC0cuAdVillGvFXpPy727W8YmEPjpqKeMLo20tl9KEg2o3g3OKjCqbycwwl6SBywY6pgFdVlI4abLf0DXNEUXlhbAMY2fECQs8YrzATf11m5AfbNTrWraSxJnI6o4CMVBC9LUKMuk7cKcX9cErmz4Hwa5xLKMpMdl1rRxtP7fC7tB9u0X4bsgrOAEZtv%2BSIWz5PhtlHnI5gMROnAgxkH33PFzwvxGTrHkhbyq50jD8DY9jW%2FQvvP8%2BaCCawniti3ONLJzz0cQ2b%2FVoxmWyEfEB2J9jn3LyHmtF&X-Amz-Signature=3a3ed12f9642cc749b33351fbd133edca2f01570387b86e992fbf4c1020eac91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T474DZ5F%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo5AWlIhZumMxw9654orwWTVWl8ig2xr513%2B2NSOeG8AiBjynrOdANo99nRb3l17Qv0DwX7xU4MsaqrDjFuEi3MuSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGpJpQHaG6d6WW2RiKtwD82dVj8uvfNkecXNbJUtVs7E3zDfnrKyJQmgZNlnExDEysIncEufe5TJ1NbW6hIjFD50CUVI44OiCN2b9Ed6NO6AxftUnFuDvsWWAgM0QAx4%2BTIufOLhRI9%2Ft2%2Bs8%2FcfpbkHTo2zBrMqxmY7610%2Ff6%2FZpAHw4HckcVrWR%2F4%2B15jpniSs%2Fme3onvSaLQjn8OIPILAycBZls88fbFfV%2FuCmZbBjo6sEiJbGzTmDzTL00BqZujhDctfEt1AslollypVRikduOsO0YXGh%2FqnZcfEPqXw85lEiHtxQ%2FHH4pMOyvptdIyNSia7mREVQABvi2KoNPwj6Td3iz68PWCwE5aTulrXdydaVEmiGwJB7yELvD1RbQqoIKrd%2FQfLl2VGrNcfi6OuY6Vmu2zEcpfIV0hYAdBFaRTM5xWMq%2BDiojm5FzhhwuvgPbU20rAyq4hMCrC4QjPT6kgLKPrfAHd0N8dofjkzlYwdM1qCMy59cTkMmleTh5Q29%2BOWwbuEumhIuU7NxoMjKhg%2F%2Banlal9QUZDQLrU9jI%2BM5K%2BqRlwc4g6u8kjAFOlrAwlbTtkMyNqpJ2NrLbesY1P14YsBgnAzkZV%2BKPwkn2JzYl0yFXOsb%2BQ%2BdOvyg929JYgp2zjtLmA0w3KSBywY6pgFEYL%2BwABALfbYblnERWMqYrH9LRQh52sOdhW49DGphSAdwpxAz4xNL3iYtV%2BTeggwCI1itiQ14o4zn05qvu4bgyNMOM5bYEBOdQHrOEnpISpLZbrgEEibTTgUAdXjXF%2BGoarOZBPTYlRdsbnMQjHspj4ClQN5tTi7jCUlYlOvGTfzNKPQGlFyM2hJNfEZMwBJi4QWPwf9EgnUSYbwE%2BZqzlh%2BjMuLx&X-Amz-Signature=af762c374fa9c842a9bb97c8e0fdc6febeff5f4ccd056162ba76fac8a2cdbcb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T474DZ5F%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo5AWlIhZumMxw9654orwWTVWl8ig2xr513%2B2NSOeG8AiBjynrOdANo99nRb3l17Qv0DwX7xU4MsaqrDjFuEi3MuSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGpJpQHaG6d6WW2RiKtwD82dVj8uvfNkecXNbJUtVs7E3zDfnrKyJQmgZNlnExDEysIncEufe5TJ1NbW6hIjFD50CUVI44OiCN2b9Ed6NO6AxftUnFuDvsWWAgM0QAx4%2BTIufOLhRI9%2Ft2%2Bs8%2FcfpbkHTo2zBrMqxmY7610%2Ff6%2FZpAHw4HckcVrWR%2F4%2B15jpniSs%2Fme3onvSaLQjn8OIPILAycBZls88fbFfV%2FuCmZbBjo6sEiJbGzTmDzTL00BqZujhDctfEt1AslollypVRikduOsO0YXGh%2FqnZcfEPqXw85lEiHtxQ%2FHH4pMOyvptdIyNSia7mREVQABvi2KoNPwj6Td3iz68PWCwE5aTulrXdydaVEmiGwJB7yELvD1RbQqoIKrd%2FQfLl2VGrNcfi6OuY6Vmu2zEcpfIV0hYAdBFaRTM5xWMq%2BDiojm5FzhhwuvgPbU20rAyq4hMCrC4QjPT6kgLKPrfAHd0N8dofjkzlYwdM1qCMy59cTkMmleTh5Q29%2BOWwbuEumhIuU7NxoMjKhg%2F%2Banlal9QUZDQLrU9jI%2BM5K%2BqRlwc4g6u8kjAFOlrAwlbTtkMyNqpJ2NrLbesY1P14YsBgnAzkZV%2BKPwkn2JzYl0yFXOsb%2BQ%2BdOvyg929JYgp2zjtLmA0w3KSBywY6pgFEYL%2BwABALfbYblnERWMqYrH9LRQh52sOdhW49DGphSAdwpxAz4xNL3iYtV%2BTeggwCI1itiQ14o4zn05qvu4bgyNMOM5bYEBOdQHrOEnpISpLZbrgEEibTTgUAdXjXF%2BGoarOZBPTYlRdsbnMQjHspj4ClQN5tTi7jCUlYlOvGTfzNKPQGlFyM2hJNfEZMwBJi4QWPwf9EgnUSYbwE%2BZqzlh%2BjMuLx&X-Amz-Signature=31a47055d753338803ba5566d4d428965d2a101d53379a6b6a787a51a888b507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTQIA3QN%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLnbncmq2R0naqOHYyEV6%2Bi%2BmQc5EeTYcD3Ry2EARxagIhAKMEqZeEJzGFF9gcMOi%2FxiJP6V4UvFGzzzhXbvK5t1XqKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkYkaetzf%2BtyVB2rEq3APNIz1WGrYxz7GFd7BKwmI6yFcrzhVECfn5Xf%2FhDFhkoYlVLPQRz4orG%2BLSmmfoVBJ6WX32yGptZVW7t3KfOTIcivq3FbzSjjmyEE0J3QRGnXipqn8PQ6lYgFc23XGcZXEoYqncwC7rcZe5ybgJ1fuV7tJAYMBg6uMVSFKDvhZ%2Fd6PJD2rpfF5SqmfBazB6AgFz%2F89yZoOFwm95o9TrTLrsiSTDy9wgJ98V5cw0XgxE%2Fy0xmk0I8SVBUtJJEWOmurQp8hrslyRmKw9vqCgE9zsvehNnQ%2B1Oul2GdaYnsZ2%2FMgwMCd8WtmJTf7yqJoSfIOy5wHJvlkZIpj%2FJ0sRxUr%2BOq9ENviiAdr5jehAuDJRgZMMw%2BdbkWmALCNRo79e0o9wezjTOtsc7PR%2BaAEtLnL5ScPwVwzt1ATgX%2FudjZXFsbZuVqWIOJpvGxEZobGG9OIXpjXG8ORI%2Byuj9Ew5S1xRufnd9ShtMr%2FEvv03UOxopQQRNHzTgncDYgBsLdimkDXTsZFUksMtfca5Ww%2BJ9L8xNemnJv4tV1y2UKdaowuPABgFINL8aoZn9x2DaPjtDpvbaFQoPev3xLaKg2W118a2De03q%2B6CxNbumQS9cMlMzywuk%2BxJA%2BpkP6ybzRTDmo4HLBjqkASSXZP4gm%2BsYbZejUB3w8m8yzDI1Xh8g5n1c4vJgmzKzOSnCpYaihSWBcuifuuPAZQVe0Kpf75gE347uoz%2BS%2FcVrPPv%2F%2FWl0L38WBhxUE93bGMngdPqYDHDhvIV79Xfii%2F%2Fw1sbQgLJX9mpilXBK2OuwZnSHlt2wYjk%2BwtcEsIDKG8vJPXpp7TpvRLF41RA21QwZGC6y4fyOU%2FyXY%2FYT%2FaxLpX9x&X-Amz-Signature=b9daa2790a4ccde64c3876f299b39240c1a5cc7f3f6da842764b36a778cf26a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTQIA3QN%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLnbncmq2R0naqOHYyEV6%2Bi%2BmQc5EeTYcD3Ry2EARxagIhAKMEqZeEJzGFF9gcMOi%2FxiJP6V4UvFGzzzhXbvK5t1XqKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkYkaetzf%2BtyVB2rEq3APNIz1WGrYxz7GFd7BKwmI6yFcrzhVECfn5Xf%2FhDFhkoYlVLPQRz4orG%2BLSmmfoVBJ6WX32yGptZVW7t3KfOTIcivq3FbzSjjmyEE0J3QRGnXipqn8PQ6lYgFc23XGcZXEoYqncwC7rcZe5ybgJ1fuV7tJAYMBg6uMVSFKDvhZ%2Fd6PJD2rpfF5SqmfBazB6AgFz%2F89yZoOFwm95o9TrTLrsiSTDy9wgJ98V5cw0XgxE%2Fy0xmk0I8SVBUtJJEWOmurQp8hrslyRmKw9vqCgE9zsvehNnQ%2B1Oul2GdaYnsZ2%2FMgwMCd8WtmJTf7yqJoSfIOy5wHJvlkZIpj%2FJ0sRxUr%2BOq9ENviiAdr5jehAuDJRgZMMw%2BdbkWmALCNRo79e0o9wezjTOtsc7PR%2BaAEtLnL5ScPwVwzt1ATgX%2FudjZXFsbZuVqWIOJpvGxEZobGG9OIXpjXG8ORI%2Byuj9Ew5S1xRufnd9ShtMr%2FEvv03UOxopQQRNHzTgncDYgBsLdimkDXTsZFUksMtfca5Ww%2BJ9L8xNemnJv4tV1y2UKdaowuPABgFINL8aoZn9x2DaPjtDpvbaFQoPev3xLaKg2W118a2De03q%2B6CxNbumQS9cMlMzywuk%2BxJA%2BpkP6ybzRTDmo4HLBjqkASSXZP4gm%2BsYbZejUB3w8m8yzDI1Xh8g5n1c4vJgmzKzOSnCpYaihSWBcuifuuPAZQVe0Kpf75gE347uoz%2BS%2FcVrPPv%2F%2FWl0L38WBhxUE93bGMngdPqYDHDhvIV79Xfii%2F%2Fw1sbQgLJX9mpilXBK2OuwZnSHlt2wYjk%2BwtcEsIDKG8vJPXpp7TpvRLF41RA21QwZGC6y4fyOU%2FyXY%2FYT%2FaxLpX9x&X-Amz-Signature=2e16220f6544998870b5e0db16b624493465997aebc7a07fcceb18124cf10b1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTQIA3QN%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLnbncmq2R0naqOHYyEV6%2Bi%2BmQc5EeTYcD3Ry2EARxagIhAKMEqZeEJzGFF9gcMOi%2FxiJP6V4UvFGzzzhXbvK5t1XqKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkYkaetzf%2BtyVB2rEq3APNIz1WGrYxz7GFd7BKwmI6yFcrzhVECfn5Xf%2FhDFhkoYlVLPQRz4orG%2BLSmmfoVBJ6WX32yGptZVW7t3KfOTIcivq3FbzSjjmyEE0J3QRGnXipqn8PQ6lYgFc23XGcZXEoYqncwC7rcZe5ybgJ1fuV7tJAYMBg6uMVSFKDvhZ%2Fd6PJD2rpfF5SqmfBazB6AgFz%2F89yZoOFwm95o9TrTLrsiSTDy9wgJ98V5cw0XgxE%2Fy0xmk0I8SVBUtJJEWOmurQp8hrslyRmKw9vqCgE9zsvehNnQ%2B1Oul2GdaYnsZ2%2FMgwMCd8WtmJTf7yqJoSfIOy5wHJvlkZIpj%2FJ0sRxUr%2BOq9ENviiAdr5jehAuDJRgZMMw%2BdbkWmALCNRo79e0o9wezjTOtsc7PR%2BaAEtLnL5ScPwVwzt1ATgX%2FudjZXFsbZuVqWIOJpvGxEZobGG9OIXpjXG8ORI%2Byuj9Ew5S1xRufnd9ShtMr%2FEvv03UOxopQQRNHzTgncDYgBsLdimkDXTsZFUksMtfca5Ww%2BJ9L8xNemnJv4tV1y2UKdaowuPABgFINL8aoZn9x2DaPjtDpvbaFQoPev3xLaKg2W118a2De03q%2B6CxNbumQS9cMlMzywuk%2BxJA%2BpkP6ybzRTDmo4HLBjqkASSXZP4gm%2BsYbZejUB3w8m8yzDI1Xh8g5n1c4vJgmzKzOSnCpYaihSWBcuifuuPAZQVe0Kpf75gE347uoz%2BS%2FcVrPPv%2F%2FWl0L38WBhxUE93bGMngdPqYDHDhvIV79Xfii%2F%2Fw1sbQgLJX9mpilXBK2OuwZnSHlt2wYjk%2BwtcEsIDKG8vJPXpp7TpvRLF41RA21QwZGC6y4fyOU%2FyXY%2FYT%2FaxLpX9x&X-Amz-Signature=94bc723386eb1275f76cca5fd92b9d8c24d3321f85326da10406fd1d519e7854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTQIA3QN%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLnbncmq2R0naqOHYyEV6%2Bi%2BmQc5EeTYcD3Ry2EARxagIhAKMEqZeEJzGFF9gcMOi%2FxiJP6V4UvFGzzzhXbvK5t1XqKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkYkaetzf%2BtyVB2rEq3APNIz1WGrYxz7GFd7BKwmI6yFcrzhVECfn5Xf%2FhDFhkoYlVLPQRz4orG%2BLSmmfoVBJ6WX32yGptZVW7t3KfOTIcivq3FbzSjjmyEE0J3QRGnXipqn8PQ6lYgFc23XGcZXEoYqncwC7rcZe5ybgJ1fuV7tJAYMBg6uMVSFKDvhZ%2Fd6PJD2rpfF5SqmfBazB6AgFz%2F89yZoOFwm95o9TrTLrsiSTDy9wgJ98V5cw0XgxE%2Fy0xmk0I8SVBUtJJEWOmurQp8hrslyRmKw9vqCgE9zsvehNnQ%2B1Oul2GdaYnsZ2%2FMgwMCd8WtmJTf7yqJoSfIOy5wHJvlkZIpj%2FJ0sRxUr%2BOq9ENviiAdr5jehAuDJRgZMMw%2BdbkWmALCNRo79e0o9wezjTOtsc7PR%2BaAEtLnL5ScPwVwzt1ATgX%2FudjZXFsbZuVqWIOJpvGxEZobGG9OIXpjXG8ORI%2Byuj9Ew5S1xRufnd9ShtMr%2FEvv03UOxopQQRNHzTgncDYgBsLdimkDXTsZFUksMtfca5Ww%2BJ9L8xNemnJv4tV1y2UKdaowuPABgFINL8aoZn9x2DaPjtDpvbaFQoPev3xLaKg2W118a2De03q%2B6CxNbumQS9cMlMzywuk%2BxJA%2BpkP6ybzRTDmo4HLBjqkASSXZP4gm%2BsYbZejUB3w8m8yzDI1Xh8g5n1c4vJgmzKzOSnCpYaihSWBcuifuuPAZQVe0Kpf75gE347uoz%2BS%2FcVrPPv%2F%2FWl0L38WBhxUE93bGMngdPqYDHDhvIV79Xfii%2F%2Fw1sbQgLJX9mpilXBK2OuwZnSHlt2wYjk%2BwtcEsIDKG8vJPXpp7TpvRLF41RA21QwZGC6y4fyOU%2FyXY%2FYT%2FaxLpX9x&X-Amz-Signature=e7068ed01819ba18a673eec3c740c77b8addb22ca396e4f667ea52a6f7853a37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672WGXJO6%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHtfk9mQM%2FV9JJq5otWw8v8vL3AY40wbR%2Fx3aleWe0hgIgEwgL4i2fAozYz0zbaLS%2BAj53m7bnwYa2nRzwARkb7XIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgdk8%2Bwi3u97NM9VyrcAwzwP9pTylkW9iDGGrwGLv8AQtNZ6jn9IiKS1KncmcdTGHDHWwP8xCP2QvkwrgxxSXf1b6h0%2BIK7LYgaVXlb6ELAwXBOHTUptBlQ2OFk%2BIsZ%2FuBB8fY54fhsRgbxECuWOuEUe9FgbJYAuG%2Fa1Z%2F0lNV98t9%2BgPy0%2BSz9gi0ZisbJ0iFXSijTNI0h8E5F4QngrAyY66gx4MXUtwjWucmCFDH5uDXfpjrw2sghdMehhDJd8oXwyc6txrpc0CEtQm%2F04jptaT7NsiFss%2BzX5lGCcEdH5g1KQK%2FewFWDUNpxWvaRIuUWPIQLR7PcAndfoByI5qQORxfZHiBc1oTEVI91rGJ%2Fcnt0UjToYEVHDW179gWLgUgIf3oKOUJVEg82n7pgrVJOi5vvXfcDpAnn1bJzKl1iWQC7bn2B%2BrknmsoRYVUXLn5Ss%2BFAt8%2FNNxWmLOsVeZk8wcDYne0Fo2hQBm9K8bryomqVkidLQLP9KVkiWc0ILCsJr0fARGNk1vT9Wp0X2%2BB0nctUKeg8zrDv1yyTPlKJMnY3Y57dh9oIO811OfMRIIyCgWh6kzr2xR4JcBLKfeS2rU7kzVUftWMSiXTKr1O%2BsNz9eAKWhRLGRl%2BXISGaMTusWqJmg1eTFwKbMIWkgcsGOqUBpH8ClJevZAoISm8MzI6jdIrryWb3Tw%2FJ126OfjDRRV4ol77FiBmYHYT7ogmMK84sqxX5oMtIB9iV5VqVu9VDMVlvFDEQ9MUgQIoFTZahMQhNXyPC%2FcRckMzFCbrrFzXvja6nWdPkB6T7MOTHTGYAvH3prhvtupSIOxU3HoSz0QlaUAHgj9aM%2BDl3YNHBPITLAGho3w6cg0l%2FpXFtBPN8oJNKPuhS&X-Amz-Signature=21aa41b7c96b4905903a9f356d546e9e71ce63be592eccc62ee6ca29149110a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTQIA3QN%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLnbncmq2R0naqOHYyEV6%2Bi%2BmQc5EeTYcD3Ry2EARxagIhAKMEqZeEJzGFF9gcMOi%2FxiJP6V4UvFGzzzhXbvK5t1XqKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkYkaetzf%2BtyVB2rEq3APNIz1WGrYxz7GFd7BKwmI6yFcrzhVECfn5Xf%2FhDFhkoYlVLPQRz4orG%2BLSmmfoVBJ6WX32yGptZVW7t3KfOTIcivq3FbzSjjmyEE0J3QRGnXipqn8PQ6lYgFc23XGcZXEoYqncwC7rcZe5ybgJ1fuV7tJAYMBg6uMVSFKDvhZ%2Fd6PJD2rpfF5SqmfBazB6AgFz%2F89yZoOFwm95o9TrTLrsiSTDy9wgJ98V5cw0XgxE%2Fy0xmk0I8SVBUtJJEWOmurQp8hrslyRmKw9vqCgE9zsvehNnQ%2B1Oul2GdaYnsZ2%2FMgwMCd8WtmJTf7yqJoSfIOy5wHJvlkZIpj%2FJ0sRxUr%2BOq9ENviiAdr5jehAuDJRgZMMw%2BdbkWmALCNRo79e0o9wezjTOtsc7PR%2BaAEtLnL5ScPwVwzt1ATgX%2FudjZXFsbZuVqWIOJpvGxEZobGG9OIXpjXG8ORI%2Byuj9Ew5S1xRufnd9ShtMr%2FEvv03UOxopQQRNHzTgncDYgBsLdimkDXTsZFUksMtfca5Ww%2BJ9L8xNemnJv4tV1y2UKdaowuPABgFINL8aoZn9x2DaPjtDpvbaFQoPev3xLaKg2W118a2De03q%2B6CxNbumQS9cMlMzywuk%2BxJA%2BpkP6ybzRTDmo4HLBjqkASSXZP4gm%2BsYbZejUB3w8m8yzDI1Xh8g5n1c4vJgmzKzOSnCpYaihSWBcuifuuPAZQVe0Kpf75gE347uoz%2BS%2FcVrPPv%2F%2FWl0L38WBhxUE93bGMngdPqYDHDhvIV79Xfii%2F%2Fw1sbQgLJX9mpilXBK2OuwZnSHlt2wYjk%2BwtcEsIDKG8vJPXpp7TpvRLF41RA21QwZGC6y4fyOU%2FyXY%2FYT%2FaxLpX9x&X-Amz-Signature=e69026c1eb812c529a6f8c470cba40784fadb8332388e15e1be8ddf1dadb59f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTQIA3QN%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLnbncmq2R0naqOHYyEV6%2Bi%2BmQc5EeTYcD3Ry2EARxagIhAKMEqZeEJzGFF9gcMOi%2FxiJP6V4UvFGzzzhXbvK5t1XqKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkYkaetzf%2BtyVB2rEq3APNIz1WGrYxz7GFd7BKwmI6yFcrzhVECfn5Xf%2FhDFhkoYlVLPQRz4orG%2BLSmmfoVBJ6WX32yGptZVW7t3KfOTIcivq3FbzSjjmyEE0J3QRGnXipqn8PQ6lYgFc23XGcZXEoYqncwC7rcZe5ybgJ1fuV7tJAYMBg6uMVSFKDvhZ%2Fd6PJD2rpfF5SqmfBazB6AgFz%2F89yZoOFwm95o9TrTLrsiSTDy9wgJ98V5cw0XgxE%2Fy0xmk0I8SVBUtJJEWOmurQp8hrslyRmKw9vqCgE9zsvehNnQ%2B1Oul2GdaYnsZ2%2FMgwMCd8WtmJTf7yqJoSfIOy5wHJvlkZIpj%2FJ0sRxUr%2BOq9ENviiAdr5jehAuDJRgZMMw%2BdbkWmALCNRo79e0o9wezjTOtsc7PR%2BaAEtLnL5ScPwVwzt1ATgX%2FudjZXFsbZuVqWIOJpvGxEZobGG9OIXpjXG8ORI%2Byuj9Ew5S1xRufnd9ShtMr%2FEvv03UOxopQQRNHzTgncDYgBsLdimkDXTsZFUksMtfca5Ww%2BJ9L8xNemnJv4tV1y2UKdaowuPABgFINL8aoZn9x2DaPjtDpvbaFQoPev3xLaKg2W118a2De03q%2B6CxNbumQS9cMlMzywuk%2BxJA%2BpkP6ybzRTDmo4HLBjqkASSXZP4gm%2BsYbZejUB3w8m8yzDI1Xh8g5n1c4vJgmzKzOSnCpYaihSWBcuifuuPAZQVe0Kpf75gE347uoz%2BS%2FcVrPPv%2F%2FWl0L38WBhxUE93bGMngdPqYDHDhvIV79Xfii%2F%2Fw1sbQgLJX9mpilXBK2OuwZnSHlt2wYjk%2BwtcEsIDKG8vJPXpp7TpvRLF41RA21QwZGC6y4fyOU%2FyXY%2FYT%2FaxLpX9x&X-Amz-Signature=1cc962f497dd9d04dfafe12232912f8e852c284fd1a4efbe266ce961df757e52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTQIA3QN%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLnbncmq2R0naqOHYyEV6%2Bi%2BmQc5EeTYcD3Ry2EARxagIhAKMEqZeEJzGFF9gcMOi%2FxiJP6V4UvFGzzzhXbvK5t1XqKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkYkaetzf%2BtyVB2rEq3APNIz1WGrYxz7GFd7BKwmI6yFcrzhVECfn5Xf%2FhDFhkoYlVLPQRz4orG%2BLSmmfoVBJ6WX32yGptZVW7t3KfOTIcivq3FbzSjjmyEE0J3QRGnXipqn8PQ6lYgFc23XGcZXEoYqncwC7rcZe5ybgJ1fuV7tJAYMBg6uMVSFKDvhZ%2Fd6PJD2rpfF5SqmfBazB6AgFz%2F89yZoOFwm95o9TrTLrsiSTDy9wgJ98V5cw0XgxE%2Fy0xmk0I8SVBUtJJEWOmurQp8hrslyRmKw9vqCgE9zsvehNnQ%2B1Oul2GdaYnsZ2%2FMgwMCd8WtmJTf7yqJoSfIOy5wHJvlkZIpj%2FJ0sRxUr%2BOq9ENviiAdr5jehAuDJRgZMMw%2BdbkWmALCNRo79e0o9wezjTOtsc7PR%2BaAEtLnL5ScPwVwzt1ATgX%2FudjZXFsbZuVqWIOJpvGxEZobGG9OIXpjXG8ORI%2Byuj9Ew5S1xRufnd9ShtMr%2FEvv03UOxopQQRNHzTgncDYgBsLdimkDXTsZFUksMtfca5Ww%2BJ9L8xNemnJv4tV1y2UKdaowuPABgFINL8aoZn9x2DaPjtDpvbaFQoPev3xLaKg2W118a2De03q%2B6CxNbumQS9cMlMzywuk%2BxJA%2BpkP6ybzRTDmo4HLBjqkASSXZP4gm%2BsYbZejUB3w8m8yzDI1Xh8g5n1c4vJgmzKzOSnCpYaihSWBcuifuuPAZQVe0Kpf75gE347uoz%2BS%2FcVrPPv%2F%2FWl0L38WBhxUE93bGMngdPqYDHDhvIV79Xfii%2F%2Fw1sbQgLJX9mpilXBK2OuwZnSHlt2wYjk%2BwtcEsIDKG8vJPXpp7TpvRLF41RA21QwZGC6y4fyOU%2FyXY%2FYT%2FaxLpX9x&X-Amz-Signature=94bc723386eb1275f76cca5fd92b9d8c24d3321f85326da10406fd1d519e7854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTQIA3QN%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLnbncmq2R0naqOHYyEV6%2Bi%2BmQc5EeTYcD3Ry2EARxagIhAKMEqZeEJzGFF9gcMOi%2FxiJP6V4UvFGzzzhXbvK5t1XqKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkYkaetzf%2BtyVB2rEq3APNIz1WGrYxz7GFd7BKwmI6yFcrzhVECfn5Xf%2FhDFhkoYlVLPQRz4orG%2BLSmmfoVBJ6WX32yGptZVW7t3KfOTIcivq3FbzSjjmyEE0J3QRGnXipqn8PQ6lYgFc23XGcZXEoYqncwC7rcZe5ybgJ1fuV7tJAYMBg6uMVSFKDvhZ%2Fd6PJD2rpfF5SqmfBazB6AgFz%2F89yZoOFwm95o9TrTLrsiSTDy9wgJ98V5cw0XgxE%2Fy0xmk0I8SVBUtJJEWOmurQp8hrslyRmKw9vqCgE9zsvehNnQ%2B1Oul2GdaYnsZ2%2FMgwMCd8WtmJTf7yqJoSfIOy5wHJvlkZIpj%2FJ0sRxUr%2BOq9ENviiAdr5jehAuDJRgZMMw%2BdbkWmALCNRo79e0o9wezjTOtsc7PR%2BaAEtLnL5ScPwVwzt1ATgX%2FudjZXFsbZuVqWIOJpvGxEZobGG9OIXpjXG8ORI%2Byuj9Ew5S1xRufnd9ShtMr%2FEvv03UOxopQQRNHzTgncDYgBsLdimkDXTsZFUksMtfca5Ww%2BJ9L8xNemnJv4tV1y2UKdaowuPABgFINL8aoZn9x2DaPjtDpvbaFQoPev3xLaKg2W118a2De03q%2B6CxNbumQS9cMlMzywuk%2BxJA%2BpkP6ybzRTDmo4HLBjqkASSXZP4gm%2BsYbZejUB3w8m8yzDI1Xh8g5n1c4vJgmzKzOSnCpYaihSWBcuifuuPAZQVe0Kpf75gE347uoz%2BS%2FcVrPPv%2F%2FWl0L38WBhxUE93bGMngdPqYDHDhvIV79Xfii%2F%2Fw1sbQgLJX9mpilXBK2OuwZnSHlt2wYjk%2BwtcEsIDKG8vJPXpp7TpvRLF41RA21QwZGC6y4fyOU%2FyXY%2FYT%2FaxLpX9x&X-Amz-Signature=46987cfc714534ee8a75e1f1ca45d1b83e2b1c08b402701bf7d3cd3a2e78fc70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTQIA3QN%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLnbncmq2R0naqOHYyEV6%2Bi%2BmQc5EeTYcD3Ry2EARxagIhAKMEqZeEJzGFF9gcMOi%2FxiJP6V4UvFGzzzhXbvK5t1XqKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkYkaetzf%2BtyVB2rEq3APNIz1WGrYxz7GFd7BKwmI6yFcrzhVECfn5Xf%2FhDFhkoYlVLPQRz4orG%2BLSmmfoVBJ6WX32yGptZVW7t3KfOTIcivq3FbzSjjmyEE0J3QRGnXipqn8PQ6lYgFc23XGcZXEoYqncwC7rcZe5ybgJ1fuV7tJAYMBg6uMVSFKDvhZ%2Fd6PJD2rpfF5SqmfBazB6AgFz%2F89yZoOFwm95o9TrTLrsiSTDy9wgJ98V5cw0XgxE%2Fy0xmk0I8SVBUtJJEWOmurQp8hrslyRmKw9vqCgE9zsvehNnQ%2B1Oul2GdaYnsZ2%2FMgwMCd8WtmJTf7yqJoSfIOy5wHJvlkZIpj%2FJ0sRxUr%2BOq9ENviiAdr5jehAuDJRgZMMw%2BdbkWmALCNRo79e0o9wezjTOtsc7PR%2BaAEtLnL5ScPwVwzt1ATgX%2FudjZXFsbZuVqWIOJpvGxEZobGG9OIXpjXG8ORI%2Byuj9Ew5S1xRufnd9ShtMr%2FEvv03UOxopQQRNHzTgncDYgBsLdimkDXTsZFUksMtfca5Ww%2BJ9L8xNemnJv4tV1y2UKdaowuPABgFINL8aoZn9x2DaPjtDpvbaFQoPev3xLaKg2W118a2De03q%2B6CxNbumQS9cMlMzywuk%2BxJA%2BpkP6ybzRTDmo4HLBjqkASSXZP4gm%2BsYbZejUB3w8m8yzDI1Xh8g5n1c4vJgmzKzOSnCpYaihSWBcuifuuPAZQVe0Kpf75gE347uoz%2BS%2FcVrPPv%2F%2FWl0L38WBhxUE93bGMngdPqYDHDhvIV79Xfii%2F%2Fw1sbQgLJX9mpilXBK2OuwZnSHlt2wYjk%2BwtcEsIDKG8vJPXpp7TpvRLF41RA21QwZGC6y4fyOU%2FyXY%2FYT%2FaxLpX9x&X-Amz-Signature=42f69d88175b8d3a04466d240669a24ccbb51830023a252e2c1380e19cdbd384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTQIA3QN%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLnbncmq2R0naqOHYyEV6%2Bi%2BmQc5EeTYcD3Ry2EARxagIhAKMEqZeEJzGFF9gcMOi%2FxiJP6V4UvFGzzzhXbvK5t1XqKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkYkaetzf%2BtyVB2rEq3APNIz1WGrYxz7GFd7BKwmI6yFcrzhVECfn5Xf%2FhDFhkoYlVLPQRz4orG%2BLSmmfoVBJ6WX32yGptZVW7t3KfOTIcivq3FbzSjjmyEE0J3QRGnXipqn8PQ6lYgFc23XGcZXEoYqncwC7rcZe5ybgJ1fuV7tJAYMBg6uMVSFKDvhZ%2Fd6PJD2rpfF5SqmfBazB6AgFz%2F89yZoOFwm95o9TrTLrsiSTDy9wgJ98V5cw0XgxE%2Fy0xmk0I8SVBUtJJEWOmurQp8hrslyRmKw9vqCgE9zsvehNnQ%2B1Oul2GdaYnsZ2%2FMgwMCd8WtmJTf7yqJoSfIOy5wHJvlkZIpj%2FJ0sRxUr%2BOq9ENviiAdr5jehAuDJRgZMMw%2BdbkWmALCNRo79e0o9wezjTOtsc7PR%2BaAEtLnL5ScPwVwzt1ATgX%2FudjZXFsbZuVqWIOJpvGxEZobGG9OIXpjXG8ORI%2Byuj9Ew5S1xRufnd9ShtMr%2FEvv03UOxopQQRNHzTgncDYgBsLdimkDXTsZFUksMtfca5Ww%2BJ9L8xNemnJv4tV1y2UKdaowuPABgFINL8aoZn9x2DaPjtDpvbaFQoPev3xLaKg2W118a2De03q%2B6CxNbumQS9cMlMzywuk%2BxJA%2BpkP6ybzRTDmo4HLBjqkASSXZP4gm%2BsYbZejUB3w8m8yzDI1Xh8g5n1c4vJgmzKzOSnCpYaihSWBcuifuuPAZQVe0Kpf75gE347uoz%2BS%2FcVrPPv%2F%2FWl0L38WBhxUE93bGMngdPqYDHDhvIV79Xfii%2F%2Fw1sbQgLJX9mpilXBK2OuwZnSHlt2wYjk%2BwtcEsIDKG8vJPXpp7TpvRLF41RA21QwZGC6y4fyOU%2FyXY%2FYT%2FaxLpX9x&X-Amz-Signature=af5961bd681f9be0c9c121729db292b1e7159c9cd7cb36732767a0b1570ec53e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


