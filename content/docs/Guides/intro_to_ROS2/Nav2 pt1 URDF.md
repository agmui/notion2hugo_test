---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T23:33:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T23:33:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZS2BHUA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCQl1FegEQDCXs4bM9sA52dFjVwX%2BfuRTrv4KFCkvCCZwIgS1%2F1trXPfWY17K6CN3y21OnkytDB5d5tRaIlcEfpGWQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHlks2vQ3aoF8NBKOSrcAwXWFA1TsWp%2FJPwNfffNgHh8O9Mh%2F3gFZOHcrRV6jrjwOSL0la%2BE4zhKjqcORmKX5s5i6JlaJNAebyGKIQOD%2BG0fB%2F%2BdP%2FUldRVCDi5qXmZ9YXkKVDtEEwNArdF7mfuGrBANDEnDkDB8UY%2FiWpkqdpwV0WIN90kcWuCjg1G1o8J5nsseVUBVY1fr6wnKa9V9i2yFqJ%2FOA3Gq6sC0zabsP3%2BErNawByqatazR82RUCuCHP9CAjBk6VL%2BGkA5aAp7vz2dbSJW39E7S8idQ49a0oZjcqWbq97B3RhnI2gRAlB%2FXmk%2BnGGnU10z%2Bz%2BSAHosOmBuxaVgyPJmZ%2FndPuXv5AFFR9MJwElgyxTcCsmBdrrcyvfv2dIMylMMxbZAevYyUZITJrytg%2BTAwfzP0FY7BDAJ5eb0U75qk2GHabY%2FF7FpiZZSozfnTbvB7lTwJRSRWkbxVbUQ0UthRQNuztEmfR7l68IHQjlu%2BmFAk27wwxs9DSGHquN0HZTa2gfPw8YPRunVY7IFVlmRjy8VXDKUzkiMo4Y%2Fg16MwpAz86N89zprJ9AecYpwjuSmINmxrVkrqHBw0ZywchFi1hYs%2FMfHZe33NT8fh5q5JuliKIcyzwGB3yKEVxbwoftx04YQpMLzRj8QGOqUBH01D%2BgnIHwSP2v1DsRClHL39CkxItg5sIWGQpvuvlXw%2Bh%2FKMv%2FZmw45cmDYcg7jor6aPAnqOI50PXJLSTCJ1moII9iLS4gnF0jFu3farxf6pp7YeERRGQRqz8yEF%2B4suD3NSSQrM90z1VQs2fSDh0e2nyViG7X14rz%2FBdufZkhoKfDyZm%2B4Wsr%2Foj7yYJ469MsCsq5FhrB62X9eeEsbC1HVdKagt&X-Amz-Signature=25752599996c9720a5ac6de792bf7f5709864dfb97c976ddb67e0e353e4a1365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZS2BHUA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCQl1FegEQDCXs4bM9sA52dFjVwX%2BfuRTrv4KFCkvCCZwIgS1%2F1trXPfWY17K6CN3y21OnkytDB5d5tRaIlcEfpGWQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHlks2vQ3aoF8NBKOSrcAwXWFA1TsWp%2FJPwNfffNgHh8O9Mh%2F3gFZOHcrRV6jrjwOSL0la%2BE4zhKjqcORmKX5s5i6JlaJNAebyGKIQOD%2BG0fB%2F%2BdP%2FUldRVCDi5qXmZ9YXkKVDtEEwNArdF7mfuGrBANDEnDkDB8UY%2FiWpkqdpwV0WIN90kcWuCjg1G1o8J5nsseVUBVY1fr6wnKa9V9i2yFqJ%2FOA3Gq6sC0zabsP3%2BErNawByqatazR82RUCuCHP9CAjBk6VL%2BGkA5aAp7vz2dbSJW39E7S8idQ49a0oZjcqWbq97B3RhnI2gRAlB%2FXmk%2BnGGnU10z%2Bz%2BSAHosOmBuxaVgyPJmZ%2FndPuXv5AFFR9MJwElgyxTcCsmBdrrcyvfv2dIMylMMxbZAevYyUZITJrytg%2BTAwfzP0FY7BDAJ5eb0U75qk2GHabY%2FF7FpiZZSozfnTbvB7lTwJRSRWkbxVbUQ0UthRQNuztEmfR7l68IHQjlu%2BmFAk27wwxs9DSGHquN0HZTa2gfPw8YPRunVY7IFVlmRjy8VXDKUzkiMo4Y%2Fg16MwpAz86N89zprJ9AecYpwjuSmINmxrVkrqHBw0ZywchFi1hYs%2FMfHZe33NT8fh5q5JuliKIcyzwGB3yKEVxbwoftx04YQpMLzRj8QGOqUBH01D%2BgnIHwSP2v1DsRClHL39CkxItg5sIWGQpvuvlXw%2Bh%2FKMv%2FZmw45cmDYcg7jor6aPAnqOI50PXJLSTCJ1moII9iLS4gnF0jFu3farxf6pp7YeERRGQRqz8yEF%2B4suD3NSSQrM90z1VQs2fSDh0e2nyViG7X14rz%2FBdufZkhoKfDyZm%2B4Wsr%2Foj7yYJ469MsCsq5FhrB62X9eeEsbC1HVdKagt&X-Amz-Signature=991e8c2cc55a92e6fd528a6bcca9e8c83b2ce43f4e630620729a38fbeed16fa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZS2BHUA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCQl1FegEQDCXs4bM9sA52dFjVwX%2BfuRTrv4KFCkvCCZwIgS1%2F1trXPfWY17K6CN3y21OnkytDB5d5tRaIlcEfpGWQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHlks2vQ3aoF8NBKOSrcAwXWFA1TsWp%2FJPwNfffNgHh8O9Mh%2F3gFZOHcrRV6jrjwOSL0la%2BE4zhKjqcORmKX5s5i6JlaJNAebyGKIQOD%2BG0fB%2F%2BdP%2FUldRVCDi5qXmZ9YXkKVDtEEwNArdF7mfuGrBANDEnDkDB8UY%2FiWpkqdpwV0WIN90kcWuCjg1G1o8J5nsseVUBVY1fr6wnKa9V9i2yFqJ%2FOA3Gq6sC0zabsP3%2BErNawByqatazR82RUCuCHP9CAjBk6VL%2BGkA5aAp7vz2dbSJW39E7S8idQ49a0oZjcqWbq97B3RhnI2gRAlB%2FXmk%2BnGGnU10z%2Bz%2BSAHosOmBuxaVgyPJmZ%2FndPuXv5AFFR9MJwElgyxTcCsmBdrrcyvfv2dIMylMMxbZAevYyUZITJrytg%2BTAwfzP0FY7BDAJ5eb0U75qk2GHabY%2FF7FpiZZSozfnTbvB7lTwJRSRWkbxVbUQ0UthRQNuztEmfR7l68IHQjlu%2BmFAk27wwxs9DSGHquN0HZTa2gfPw8YPRunVY7IFVlmRjy8VXDKUzkiMo4Y%2Fg16MwpAz86N89zprJ9AecYpwjuSmINmxrVkrqHBw0ZywchFi1hYs%2FMfHZe33NT8fh5q5JuliKIcyzwGB3yKEVxbwoftx04YQpMLzRj8QGOqUBH01D%2BgnIHwSP2v1DsRClHL39CkxItg5sIWGQpvuvlXw%2Bh%2FKMv%2FZmw45cmDYcg7jor6aPAnqOI50PXJLSTCJ1moII9iLS4gnF0jFu3farxf6pp7YeERRGQRqz8yEF%2B4suD3NSSQrM90z1VQs2fSDh0e2nyViG7X14rz%2FBdufZkhoKfDyZm%2B4Wsr%2Foj7yYJ469MsCsq5FhrB62X9eeEsbC1HVdKagt&X-Amz-Signature=d9909ee57f007bdfb294a0259e628428042a96b02bbb840a69fe6739a1f693df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZS2BHUA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCQl1FegEQDCXs4bM9sA52dFjVwX%2BfuRTrv4KFCkvCCZwIgS1%2F1trXPfWY17K6CN3y21OnkytDB5d5tRaIlcEfpGWQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHlks2vQ3aoF8NBKOSrcAwXWFA1TsWp%2FJPwNfffNgHh8O9Mh%2F3gFZOHcrRV6jrjwOSL0la%2BE4zhKjqcORmKX5s5i6JlaJNAebyGKIQOD%2BG0fB%2F%2BdP%2FUldRVCDi5qXmZ9YXkKVDtEEwNArdF7mfuGrBANDEnDkDB8UY%2FiWpkqdpwV0WIN90kcWuCjg1G1o8J5nsseVUBVY1fr6wnKa9V9i2yFqJ%2FOA3Gq6sC0zabsP3%2BErNawByqatazR82RUCuCHP9CAjBk6VL%2BGkA5aAp7vz2dbSJW39E7S8idQ49a0oZjcqWbq97B3RhnI2gRAlB%2FXmk%2BnGGnU10z%2Bz%2BSAHosOmBuxaVgyPJmZ%2FndPuXv5AFFR9MJwElgyxTcCsmBdrrcyvfv2dIMylMMxbZAevYyUZITJrytg%2BTAwfzP0FY7BDAJ5eb0U75qk2GHabY%2FF7FpiZZSozfnTbvB7lTwJRSRWkbxVbUQ0UthRQNuztEmfR7l68IHQjlu%2BmFAk27wwxs9DSGHquN0HZTa2gfPw8YPRunVY7IFVlmRjy8VXDKUzkiMo4Y%2Fg16MwpAz86N89zprJ9AecYpwjuSmINmxrVkrqHBw0ZywchFi1hYs%2FMfHZe33NT8fh5q5JuliKIcyzwGB3yKEVxbwoftx04YQpMLzRj8QGOqUBH01D%2BgnIHwSP2v1DsRClHL39CkxItg5sIWGQpvuvlXw%2Bh%2FKMv%2FZmw45cmDYcg7jor6aPAnqOI50PXJLSTCJ1moII9iLS4gnF0jFu3farxf6pp7YeERRGQRqz8yEF%2B4suD3NSSQrM90z1VQs2fSDh0e2nyViG7X14rz%2FBdufZkhoKfDyZm%2B4Wsr%2Foj7yYJ469MsCsq5FhrB62X9eeEsbC1HVdKagt&X-Amz-Signature=1c2d148be9894eff06a18bd7317ed9dad76f86f5e1b0a29948a5fcee6b73e191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZS2BHUA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCQl1FegEQDCXs4bM9sA52dFjVwX%2BfuRTrv4KFCkvCCZwIgS1%2F1trXPfWY17K6CN3y21OnkytDB5d5tRaIlcEfpGWQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHlks2vQ3aoF8NBKOSrcAwXWFA1TsWp%2FJPwNfffNgHh8O9Mh%2F3gFZOHcrRV6jrjwOSL0la%2BE4zhKjqcORmKX5s5i6JlaJNAebyGKIQOD%2BG0fB%2F%2BdP%2FUldRVCDi5qXmZ9YXkKVDtEEwNArdF7mfuGrBANDEnDkDB8UY%2FiWpkqdpwV0WIN90kcWuCjg1G1o8J5nsseVUBVY1fr6wnKa9V9i2yFqJ%2FOA3Gq6sC0zabsP3%2BErNawByqatazR82RUCuCHP9CAjBk6VL%2BGkA5aAp7vz2dbSJW39E7S8idQ49a0oZjcqWbq97B3RhnI2gRAlB%2FXmk%2BnGGnU10z%2Bz%2BSAHosOmBuxaVgyPJmZ%2FndPuXv5AFFR9MJwElgyxTcCsmBdrrcyvfv2dIMylMMxbZAevYyUZITJrytg%2BTAwfzP0FY7BDAJ5eb0U75qk2GHabY%2FF7FpiZZSozfnTbvB7lTwJRSRWkbxVbUQ0UthRQNuztEmfR7l68IHQjlu%2BmFAk27wwxs9DSGHquN0HZTa2gfPw8YPRunVY7IFVlmRjy8VXDKUzkiMo4Y%2Fg16MwpAz86N89zprJ9AecYpwjuSmINmxrVkrqHBw0ZywchFi1hYs%2FMfHZe33NT8fh5q5JuliKIcyzwGB3yKEVxbwoftx04YQpMLzRj8QGOqUBH01D%2BgnIHwSP2v1DsRClHL39CkxItg5sIWGQpvuvlXw%2Bh%2FKMv%2FZmw45cmDYcg7jor6aPAnqOI50PXJLSTCJ1moII9iLS4gnF0jFu3farxf6pp7YeERRGQRqz8yEF%2B4suD3NSSQrM90z1VQs2fSDh0e2nyViG7X14rz%2FBdufZkhoKfDyZm%2B4Wsr%2Foj7yYJ469MsCsq5FhrB62X9eeEsbC1HVdKagt&X-Amz-Signature=ff5fa0c44ccc09ce11baa44099ce6451251a03125a563b81cc5ea7e4cd61f088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZS2BHUA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCQl1FegEQDCXs4bM9sA52dFjVwX%2BfuRTrv4KFCkvCCZwIgS1%2F1trXPfWY17K6CN3y21OnkytDB5d5tRaIlcEfpGWQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHlks2vQ3aoF8NBKOSrcAwXWFA1TsWp%2FJPwNfffNgHh8O9Mh%2F3gFZOHcrRV6jrjwOSL0la%2BE4zhKjqcORmKX5s5i6JlaJNAebyGKIQOD%2BG0fB%2F%2BdP%2FUldRVCDi5qXmZ9YXkKVDtEEwNArdF7mfuGrBANDEnDkDB8UY%2FiWpkqdpwV0WIN90kcWuCjg1G1o8J5nsseVUBVY1fr6wnKa9V9i2yFqJ%2FOA3Gq6sC0zabsP3%2BErNawByqatazR82RUCuCHP9CAjBk6VL%2BGkA5aAp7vz2dbSJW39E7S8idQ49a0oZjcqWbq97B3RhnI2gRAlB%2FXmk%2BnGGnU10z%2Bz%2BSAHosOmBuxaVgyPJmZ%2FndPuXv5AFFR9MJwElgyxTcCsmBdrrcyvfv2dIMylMMxbZAevYyUZITJrytg%2BTAwfzP0FY7BDAJ5eb0U75qk2GHabY%2FF7FpiZZSozfnTbvB7lTwJRSRWkbxVbUQ0UthRQNuztEmfR7l68IHQjlu%2BmFAk27wwxs9DSGHquN0HZTa2gfPw8YPRunVY7IFVlmRjy8VXDKUzkiMo4Y%2Fg16MwpAz86N89zprJ9AecYpwjuSmINmxrVkrqHBw0ZywchFi1hYs%2FMfHZe33NT8fh5q5JuliKIcyzwGB3yKEVxbwoftx04YQpMLzRj8QGOqUBH01D%2BgnIHwSP2v1DsRClHL39CkxItg5sIWGQpvuvlXw%2Bh%2FKMv%2FZmw45cmDYcg7jor6aPAnqOI50PXJLSTCJ1moII9iLS4gnF0jFu3farxf6pp7YeERRGQRqz8yEF%2B4suD3NSSQrM90z1VQs2fSDh0e2nyViG7X14rz%2FBdufZkhoKfDyZm%2B4Wsr%2Foj7yYJ469MsCsq5FhrB62X9eeEsbC1HVdKagt&X-Amz-Signature=0656151e14fcfb9fa392df9d7fdfeb72ce13c4b78a9eebdb10f0c5b74e67d54b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZS2BHUA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCQl1FegEQDCXs4bM9sA52dFjVwX%2BfuRTrv4KFCkvCCZwIgS1%2F1trXPfWY17K6CN3y21OnkytDB5d5tRaIlcEfpGWQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHlks2vQ3aoF8NBKOSrcAwXWFA1TsWp%2FJPwNfffNgHh8O9Mh%2F3gFZOHcrRV6jrjwOSL0la%2BE4zhKjqcORmKX5s5i6JlaJNAebyGKIQOD%2BG0fB%2F%2BdP%2FUldRVCDi5qXmZ9YXkKVDtEEwNArdF7mfuGrBANDEnDkDB8UY%2FiWpkqdpwV0WIN90kcWuCjg1G1o8J5nsseVUBVY1fr6wnKa9V9i2yFqJ%2FOA3Gq6sC0zabsP3%2BErNawByqatazR82RUCuCHP9CAjBk6VL%2BGkA5aAp7vz2dbSJW39E7S8idQ49a0oZjcqWbq97B3RhnI2gRAlB%2FXmk%2BnGGnU10z%2Bz%2BSAHosOmBuxaVgyPJmZ%2FndPuXv5AFFR9MJwElgyxTcCsmBdrrcyvfv2dIMylMMxbZAevYyUZITJrytg%2BTAwfzP0FY7BDAJ5eb0U75qk2GHabY%2FF7FpiZZSozfnTbvB7lTwJRSRWkbxVbUQ0UthRQNuztEmfR7l68IHQjlu%2BmFAk27wwxs9DSGHquN0HZTa2gfPw8YPRunVY7IFVlmRjy8VXDKUzkiMo4Y%2Fg16MwpAz86N89zprJ9AecYpwjuSmINmxrVkrqHBw0ZywchFi1hYs%2FMfHZe33NT8fh5q5JuliKIcyzwGB3yKEVxbwoftx04YQpMLzRj8QGOqUBH01D%2BgnIHwSP2v1DsRClHL39CkxItg5sIWGQpvuvlXw%2Bh%2FKMv%2FZmw45cmDYcg7jor6aPAnqOI50PXJLSTCJ1moII9iLS4gnF0jFu3farxf6pp7YeERRGQRqz8yEF%2B4suD3NSSQrM90z1VQs2fSDh0e2nyViG7X14rz%2FBdufZkhoKfDyZm%2B4Wsr%2Foj7yYJ469MsCsq5FhrB62X9eeEsbC1HVdKagt&X-Amz-Signature=bcc78143d7922060ee2bcba832e4f77a33f1df883579c980f41b7616b89c9925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZS2BHUA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCQl1FegEQDCXs4bM9sA52dFjVwX%2BfuRTrv4KFCkvCCZwIgS1%2F1trXPfWY17K6CN3y21OnkytDB5d5tRaIlcEfpGWQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHlks2vQ3aoF8NBKOSrcAwXWFA1TsWp%2FJPwNfffNgHh8O9Mh%2F3gFZOHcrRV6jrjwOSL0la%2BE4zhKjqcORmKX5s5i6JlaJNAebyGKIQOD%2BG0fB%2F%2BdP%2FUldRVCDi5qXmZ9YXkKVDtEEwNArdF7mfuGrBANDEnDkDB8UY%2FiWpkqdpwV0WIN90kcWuCjg1G1o8J5nsseVUBVY1fr6wnKa9V9i2yFqJ%2FOA3Gq6sC0zabsP3%2BErNawByqatazR82RUCuCHP9CAjBk6VL%2BGkA5aAp7vz2dbSJW39E7S8idQ49a0oZjcqWbq97B3RhnI2gRAlB%2FXmk%2BnGGnU10z%2Bz%2BSAHosOmBuxaVgyPJmZ%2FndPuXv5AFFR9MJwElgyxTcCsmBdrrcyvfv2dIMylMMxbZAevYyUZITJrytg%2BTAwfzP0FY7BDAJ5eb0U75qk2GHabY%2FF7FpiZZSozfnTbvB7lTwJRSRWkbxVbUQ0UthRQNuztEmfR7l68IHQjlu%2BmFAk27wwxs9DSGHquN0HZTa2gfPw8YPRunVY7IFVlmRjy8VXDKUzkiMo4Y%2Fg16MwpAz86N89zprJ9AecYpwjuSmINmxrVkrqHBw0ZywchFi1hYs%2FMfHZe33NT8fh5q5JuliKIcyzwGB3yKEVxbwoftx04YQpMLzRj8QGOqUBH01D%2BgnIHwSP2v1DsRClHL39CkxItg5sIWGQpvuvlXw%2Bh%2FKMv%2FZmw45cmDYcg7jor6aPAnqOI50PXJLSTCJ1moII9iLS4gnF0jFu3farxf6pp7YeERRGQRqz8yEF%2B4suD3NSSQrM90z1VQs2fSDh0e2nyViG7X14rz%2FBdufZkhoKfDyZm%2B4Wsr%2Foj7yYJ469MsCsq5FhrB62X9eeEsbC1HVdKagt&X-Amz-Signature=d119e03cda3fede8a746fcac7b9a32cc923645088c746809d40dee1738398cc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZS2BHUA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCQl1FegEQDCXs4bM9sA52dFjVwX%2BfuRTrv4KFCkvCCZwIgS1%2F1trXPfWY17K6CN3y21OnkytDB5d5tRaIlcEfpGWQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHlks2vQ3aoF8NBKOSrcAwXWFA1TsWp%2FJPwNfffNgHh8O9Mh%2F3gFZOHcrRV6jrjwOSL0la%2BE4zhKjqcORmKX5s5i6JlaJNAebyGKIQOD%2BG0fB%2F%2BdP%2FUldRVCDi5qXmZ9YXkKVDtEEwNArdF7mfuGrBANDEnDkDB8UY%2FiWpkqdpwV0WIN90kcWuCjg1G1o8J5nsseVUBVY1fr6wnKa9V9i2yFqJ%2FOA3Gq6sC0zabsP3%2BErNawByqatazR82RUCuCHP9CAjBk6VL%2BGkA5aAp7vz2dbSJW39E7S8idQ49a0oZjcqWbq97B3RhnI2gRAlB%2FXmk%2BnGGnU10z%2Bz%2BSAHosOmBuxaVgyPJmZ%2FndPuXv5AFFR9MJwElgyxTcCsmBdrrcyvfv2dIMylMMxbZAevYyUZITJrytg%2BTAwfzP0FY7BDAJ5eb0U75qk2GHabY%2FF7FpiZZSozfnTbvB7lTwJRSRWkbxVbUQ0UthRQNuztEmfR7l68IHQjlu%2BmFAk27wwxs9DSGHquN0HZTa2gfPw8YPRunVY7IFVlmRjy8VXDKUzkiMo4Y%2Fg16MwpAz86N89zprJ9AecYpwjuSmINmxrVkrqHBw0ZywchFi1hYs%2FMfHZe33NT8fh5q5JuliKIcyzwGB3yKEVxbwoftx04YQpMLzRj8QGOqUBH01D%2BgnIHwSP2v1DsRClHL39CkxItg5sIWGQpvuvlXw%2Bh%2FKMv%2FZmw45cmDYcg7jor6aPAnqOI50PXJLSTCJ1moII9iLS4gnF0jFu3farxf6pp7YeERRGQRqz8yEF%2B4suD3NSSQrM90z1VQs2fSDh0e2nyViG7X14rz%2FBdufZkhoKfDyZm%2B4Wsr%2Foj7yYJ469MsCsq5FhrB62X9eeEsbC1HVdKagt&X-Amz-Signature=382943d21a6aa91c74c76a35f21aac860f8d622aa2b1108af1c522f8f17ac9c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZS2BHUA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCQl1FegEQDCXs4bM9sA52dFjVwX%2BfuRTrv4KFCkvCCZwIgS1%2F1trXPfWY17K6CN3y21OnkytDB5d5tRaIlcEfpGWQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHlks2vQ3aoF8NBKOSrcAwXWFA1TsWp%2FJPwNfffNgHh8O9Mh%2F3gFZOHcrRV6jrjwOSL0la%2BE4zhKjqcORmKX5s5i6JlaJNAebyGKIQOD%2BG0fB%2F%2BdP%2FUldRVCDi5qXmZ9YXkKVDtEEwNArdF7mfuGrBANDEnDkDB8UY%2FiWpkqdpwV0WIN90kcWuCjg1G1o8J5nsseVUBVY1fr6wnKa9V9i2yFqJ%2FOA3Gq6sC0zabsP3%2BErNawByqatazR82RUCuCHP9CAjBk6VL%2BGkA5aAp7vz2dbSJW39E7S8idQ49a0oZjcqWbq97B3RhnI2gRAlB%2FXmk%2BnGGnU10z%2Bz%2BSAHosOmBuxaVgyPJmZ%2FndPuXv5AFFR9MJwElgyxTcCsmBdrrcyvfv2dIMylMMxbZAevYyUZITJrytg%2BTAwfzP0FY7BDAJ5eb0U75qk2GHabY%2FF7FpiZZSozfnTbvB7lTwJRSRWkbxVbUQ0UthRQNuztEmfR7l68IHQjlu%2BmFAk27wwxs9DSGHquN0HZTa2gfPw8YPRunVY7IFVlmRjy8VXDKUzkiMo4Y%2Fg16MwpAz86N89zprJ9AecYpwjuSmINmxrVkrqHBw0ZywchFi1hYs%2FMfHZe33NT8fh5q5JuliKIcyzwGB3yKEVxbwoftx04YQpMLzRj8QGOqUBH01D%2BgnIHwSP2v1DsRClHL39CkxItg5sIWGQpvuvlXw%2Bh%2FKMv%2FZmw45cmDYcg7jor6aPAnqOI50PXJLSTCJ1moII9iLS4gnF0jFu3farxf6pp7YeERRGQRqz8yEF%2B4suD3NSSQrM90z1VQs2fSDh0e2nyViG7X14rz%2FBdufZkhoKfDyZm%2B4Wsr%2Foj7yYJ469MsCsq5FhrB62X9eeEsbC1HVdKagt&X-Amz-Signature=35b14f6a8b30bcb162651682983c0b954a11b34598b15c19cb2daf0885c8cc5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

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
      
      <collision>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
      </collision>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZS2BHUA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCQl1FegEQDCXs4bM9sA52dFjVwX%2BfuRTrv4KFCkvCCZwIgS1%2F1trXPfWY17K6CN3y21OnkytDB5d5tRaIlcEfpGWQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHlks2vQ3aoF8NBKOSrcAwXWFA1TsWp%2FJPwNfffNgHh8O9Mh%2F3gFZOHcrRV6jrjwOSL0la%2BE4zhKjqcORmKX5s5i6JlaJNAebyGKIQOD%2BG0fB%2F%2BdP%2FUldRVCDi5qXmZ9YXkKVDtEEwNArdF7mfuGrBANDEnDkDB8UY%2FiWpkqdpwV0WIN90kcWuCjg1G1o8J5nsseVUBVY1fr6wnKa9V9i2yFqJ%2FOA3Gq6sC0zabsP3%2BErNawByqatazR82RUCuCHP9CAjBk6VL%2BGkA5aAp7vz2dbSJW39E7S8idQ49a0oZjcqWbq97B3RhnI2gRAlB%2FXmk%2BnGGnU10z%2Bz%2BSAHosOmBuxaVgyPJmZ%2FndPuXv5AFFR9MJwElgyxTcCsmBdrrcyvfv2dIMylMMxbZAevYyUZITJrytg%2BTAwfzP0FY7BDAJ5eb0U75qk2GHabY%2FF7FpiZZSozfnTbvB7lTwJRSRWkbxVbUQ0UthRQNuztEmfR7l68IHQjlu%2BmFAk27wwxs9DSGHquN0HZTa2gfPw8YPRunVY7IFVlmRjy8VXDKUzkiMo4Y%2Fg16MwpAz86N89zprJ9AecYpwjuSmINmxrVkrqHBw0ZywchFi1hYs%2FMfHZe33NT8fh5q5JuliKIcyzwGB3yKEVxbwoftx04YQpMLzRj8QGOqUBH01D%2BgnIHwSP2v1DsRClHL39CkxItg5sIWGQpvuvlXw%2Bh%2FKMv%2FZmw45cmDYcg7jor6aPAnqOI50PXJLSTCJ1moII9iLS4gnF0jFu3farxf6pp7YeERRGQRqz8yEF%2B4suD3NSSQrM90z1VQs2fSDh0e2nyViG7X14rz%2FBdufZkhoKfDyZm%2B4Wsr%2Foj7yYJ469MsCsq5FhrB62X9eeEsbC1HVdKagt&X-Amz-Signature=0671a921cf9bd62abc5ed8fe961a281ab176cc6d0d1dbe4120b96e489981a994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZS2BHUA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCQl1FegEQDCXs4bM9sA52dFjVwX%2BfuRTrv4KFCkvCCZwIgS1%2F1trXPfWY17K6CN3y21OnkytDB5d5tRaIlcEfpGWQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHlks2vQ3aoF8NBKOSrcAwXWFA1TsWp%2FJPwNfffNgHh8O9Mh%2F3gFZOHcrRV6jrjwOSL0la%2BE4zhKjqcORmKX5s5i6JlaJNAebyGKIQOD%2BG0fB%2F%2BdP%2FUldRVCDi5qXmZ9YXkKVDtEEwNArdF7mfuGrBANDEnDkDB8UY%2FiWpkqdpwV0WIN90kcWuCjg1G1o8J5nsseVUBVY1fr6wnKa9V9i2yFqJ%2FOA3Gq6sC0zabsP3%2BErNawByqatazR82RUCuCHP9CAjBk6VL%2BGkA5aAp7vz2dbSJW39E7S8idQ49a0oZjcqWbq97B3RhnI2gRAlB%2FXmk%2BnGGnU10z%2Bz%2BSAHosOmBuxaVgyPJmZ%2FndPuXv5AFFR9MJwElgyxTcCsmBdrrcyvfv2dIMylMMxbZAevYyUZITJrytg%2BTAwfzP0FY7BDAJ5eb0U75qk2GHabY%2FF7FpiZZSozfnTbvB7lTwJRSRWkbxVbUQ0UthRQNuztEmfR7l68IHQjlu%2BmFAk27wwxs9DSGHquN0HZTa2gfPw8YPRunVY7IFVlmRjy8VXDKUzkiMo4Y%2Fg16MwpAz86N89zprJ9AecYpwjuSmINmxrVkrqHBw0ZywchFi1hYs%2FMfHZe33NT8fh5q5JuliKIcyzwGB3yKEVxbwoftx04YQpMLzRj8QGOqUBH01D%2BgnIHwSP2v1DsRClHL39CkxItg5sIWGQpvuvlXw%2Bh%2FKMv%2FZmw45cmDYcg7jor6aPAnqOI50PXJLSTCJ1moII9iLS4gnF0jFu3farxf6pp7YeERRGQRqz8yEF%2B4suD3NSSQrM90z1VQs2fSDh0e2nyViG7X14rz%2FBdufZkhoKfDyZm%2B4Wsr%2Foj7yYJ469MsCsq5FhrB62X9eeEsbC1HVdKagt&X-Amz-Signature=a3b97ebfbdc78eb35ab7c36af813bec82138fe0224a5b31cc3c38bb7f6ce11ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZS2BHUA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCQl1FegEQDCXs4bM9sA52dFjVwX%2BfuRTrv4KFCkvCCZwIgS1%2F1trXPfWY17K6CN3y21OnkytDB5d5tRaIlcEfpGWQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHlks2vQ3aoF8NBKOSrcAwXWFA1TsWp%2FJPwNfffNgHh8O9Mh%2F3gFZOHcrRV6jrjwOSL0la%2BE4zhKjqcORmKX5s5i6JlaJNAebyGKIQOD%2BG0fB%2F%2BdP%2FUldRVCDi5qXmZ9YXkKVDtEEwNArdF7mfuGrBANDEnDkDB8UY%2FiWpkqdpwV0WIN90kcWuCjg1G1o8J5nsseVUBVY1fr6wnKa9V9i2yFqJ%2FOA3Gq6sC0zabsP3%2BErNawByqatazR82RUCuCHP9CAjBk6VL%2BGkA5aAp7vz2dbSJW39E7S8idQ49a0oZjcqWbq97B3RhnI2gRAlB%2FXmk%2BnGGnU10z%2Bz%2BSAHosOmBuxaVgyPJmZ%2FndPuXv5AFFR9MJwElgyxTcCsmBdrrcyvfv2dIMylMMxbZAevYyUZITJrytg%2BTAwfzP0FY7BDAJ5eb0U75qk2GHabY%2FF7FpiZZSozfnTbvB7lTwJRSRWkbxVbUQ0UthRQNuztEmfR7l68IHQjlu%2BmFAk27wwxs9DSGHquN0HZTa2gfPw8YPRunVY7IFVlmRjy8VXDKUzkiMo4Y%2Fg16MwpAz86N89zprJ9AecYpwjuSmINmxrVkrqHBw0ZywchFi1hYs%2FMfHZe33NT8fh5q5JuliKIcyzwGB3yKEVxbwoftx04YQpMLzRj8QGOqUBH01D%2BgnIHwSP2v1DsRClHL39CkxItg5sIWGQpvuvlXw%2Bh%2FKMv%2FZmw45cmDYcg7jor6aPAnqOI50PXJLSTCJ1moII9iLS4gnF0jFu3farxf6pp7YeERRGQRqz8yEF%2B4suD3NSSQrM90z1VQs2fSDh0e2nyViG7X14rz%2FBdufZkhoKfDyZm%2B4Wsr%2Foj7yYJ469MsCsq5FhrB62X9eeEsbC1HVdKagt&X-Amz-Signature=f7d0be581a67aaf32e6399d18b29223871364b22ad87eac06f8f5e55b03d41da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZS2BHUA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCQl1FegEQDCXs4bM9sA52dFjVwX%2BfuRTrv4KFCkvCCZwIgS1%2F1trXPfWY17K6CN3y21OnkytDB5d5tRaIlcEfpGWQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHlks2vQ3aoF8NBKOSrcAwXWFA1TsWp%2FJPwNfffNgHh8O9Mh%2F3gFZOHcrRV6jrjwOSL0la%2BE4zhKjqcORmKX5s5i6JlaJNAebyGKIQOD%2BG0fB%2F%2BdP%2FUldRVCDi5qXmZ9YXkKVDtEEwNArdF7mfuGrBANDEnDkDB8UY%2FiWpkqdpwV0WIN90kcWuCjg1G1o8J5nsseVUBVY1fr6wnKa9V9i2yFqJ%2FOA3Gq6sC0zabsP3%2BErNawByqatazR82RUCuCHP9CAjBk6VL%2BGkA5aAp7vz2dbSJW39E7S8idQ49a0oZjcqWbq97B3RhnI2gRAlB%2FXmk%2BnGGnU10z%2Bz%2BSAHosOmBuxaVgyPJmZ%2FndPuXv5AFFR9MJwElgyxTcCsmBdrrcyvfv2dIMylMMxbZAevYyUZITJrytg%2BTAwfzP0FY7BDAJ5eb0U75qk2GHabY%2FF7FpiZZSozfnTbvB7lTwJRSRWkbxVbUQ0UthRQNuztEmfR7l68IHQjlu%2BmFAk27wwxs9DSGHquN0HZTa2gfPw8YPRunVY7IFVlmRjy8VXDKUzkiMo4Y%2Fg16MwpAz86N89zprJ9AecYpwjuSmINmxrVkrqHBw0ZywchFi1hYs%2FMfHZe33NT8fh5q5JuliKIcyzwGB3yKEVxbwoftx04YQpMLzRj8QGOqUBH01D%2BgnIHwSP2v1DsRClHL39CkxItg5sIWGQpvuvlXw%2Bh%2FKMv%2FZmw45cmDYcg7jor6aPAnqOI50PXJLSTCJ1moII9iLS4gnF0jFu3farxf6pp7YeERRGQRqz8yEF%2B4suD3NSSQrM90z1VQs2fSDh0e2nyViG7X14rz%2FBdufZkhoKfDyZm%2B4Wsr%2Foj7yYJ469MsCsq5FhrB62X9eeEsbC1HVdKagt&X-Amz-Signature=b0129791c310d5b716048d77ee374c0da695134f58b900bd419db7d1aec1aba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FPRZVE4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDJQgfqaiEAZ%2FnH1NgXhQWgShHfcV35XX8c6yJTJiOX9AiEAuoPDLB1%2Bf24b4hkBJOsIzxNPrVuR3vilhgzwKEyYG7Iq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDI%2B5L%2FgXZ3pueXUuKCrcA%2FDIOGS%2BGtE25GvBZoJrKjGJOW2EuOWuzxqVE1%2BMbOJaLWatWTba2%2BBkXG%2BfSzzSz1Ks6Z5SShoJCmaxpx4eXu6kco8FVhCdyezxAqgs5CTtMx%2BPKjZZuK%2FuMVDeovwzXNvvR7%2BIuCnCERczcktrtp9kZ75wjgNwebOIAdJFuH%2Bi3sk1or96UUIeUkNtw0g0klJan9ud8mUVceSjaa8WEinpkLCZfCTNAGa7pCcL4uUG27WmpDJuVMHWOorXHqp5oT4uFNKh43o1yd4BkQM5XHKo8NjjvAxWvuEJghZjAoE3ZjjNjLrS3fJcJAbtanbSHCz0K3tmTQOraz9fEoqTF0JsVFxFEPvk%2FuPUd%2BkSLlFOIdq70C51d62d8F%2Fbjjm%2F0qHdKYlWFdNSriUyFJ3zNKNV1YVNEkp19qJPNm03O8RfvMnGIghoS53hIB34anmZU8elDOkQMQ0wk9lmSGR%2Bx%2BGn%2BcwV0yCJV5q%2FHg%2BKx1oAzXRyB0k%2FSmslYXiw8hrztF%2BXBbgcld4pEHsUQmqdPARvNwyP%2FSG0wELNC%2FYIaDzAi%2Bin2s9Lycmikvw%2BMlKiL4EyDOcr3QncYC2SNhKyoZS2LmGfPrlodUow0n6ZgS6aFglslDzc3RLHWEwZMLHRj8QGOqUBuLOSheRwM9U%2F3SwUSdB61Rtd4rsPYHm5vilRG%2Flqe4IDQnboFuLWoJRIBjbkQheAEmFwr44ESJhK1ZD77Dhu%2FHSLDOmzo6X%2BBUq3W8qdv0pU7fYcoETwWrdOUH7C0zP7Z%2B9kMUuUb3Qyqnwx4pBCvt9xklAMnYdLXfBGGvK7mT4%2BhDkZRMkmVkc7av3CW6Oy2rIwmrhU%2B8kJmsVUWKNKx%2FsCigSN&X-Amz-Signature=c84a4f266d0b8996f8cc7614819d3fec36fbe32c3cf2609c78a6432cf961a6fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FPRZVE4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDJQgfqaiEAZ%2FnH1NgXhQWgShHfcV35XX8c6yJTJiOX9AiEAuoPDLB1%2Bf24b4hkBJOsIzxNPrVuR3vilhgzwKEyYG7Iq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDI%2B5L%2FgXZ3pueXUuKCrcA%2FDIOGS%2BGtE25GvBZoJrKjGJOW2EuOWuzxqVE1%2BMbOJaLWatWTba2%2BBkXG%2BfSzzSz1Ks6Z5SShoJCmaxpx4eXu6kco8FVhCdyezxAqgs5CTtMx%2BPKjZZuK%2FuMVDeovwzXNvvR7%2BIuCnCERczcktrtp9kZ75wjgNwebOIAdJFuH%2Bi3sk1or96UUIeUkNtw0g0klJan9ud8mUVceSjaa8WEinpkLCZfCTNAGa7pCcL4uUG27WmpDJuVMHWOorXHqp5oT4uFNKh43o1yd4BkQM5XHKo8NjjvAxWvuEJghZjAoE3ZjjNjLrS3fJcJAbtanbSHCz0K3tmTQOraz9fEoqTF0JsVFxFEPvk%2FuPUd%2BkSLlFOIdq70C51d62d8F%2Fbjjm%2F0qHdKYlWFdNSriUyFJ3zNKNV1YVNEkp19qJPNm03O8RfvMnGIghoS53hIB34anmZU8elDOkQMQ0wk9lmSGR%2Bx%2BGn%2BcwV0yCJV5q%2FHg%2BKx1oAzXRyB0k%2FSmslYXiw8hrztF%2BXBbgcld4pEHsUQmqdPARvNwyP%2FSG0wELNC%2FYIaDzAi%2Bin2s9Lycmikvw%2BMlKiL4EyDOcr3QncYC2SNhKyoZS2LmGfPrlodUow0n6ZgS6aFglslDzc3RLHWEwZMLHRj8QGOqUBuLOSheRwM9U%2F3SwUSdB61Rtd4rsPYHm5vilRG%2Flqe4IDQnboFuLWoJRIBjbkQheAEmFwr44ESJhK1ZD77Dhu%2FHSLDOmzo6X%2BBUq3W8qdv0pU7fYcoETwWrdOUH7C0zP7Z%2B9kMUuUb3Qyqnwx4pBCvt9xklAMnYdLXfBGGvK7mT4%2BhDkZRMkmVkc7av3CW6Oy2rIwmrhU%2B8kJmsVUWKNKx%2FsCigSN&X-Amz-Signature=b1937d3842d86a14b0c173e45b8e877e1d9bb2fc79aef98428259d9f6697eed7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FPRZVE4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDJQgfqaiEAZ%2FnH1NgXhQWgShHfcV35XX8c6yJTJiOX9AiEAuoPDLB1%2Bf24b4hkBJOsIzxNPrVuR3vilhgzwKEyYG7Iq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDI%2B5L%2FgXZ3pueXUuKCrcA%2FDIOGS%2BGtE25GvBZoJrKjGJOW2EuOWuzxqVE1%2BMbOJaLWatWTba2%2BBkXG%2BfSzzSz1Ks6Z5SShoJCmaxpx4eXu6kco8FVhCdyezxAqgs5CTtMx%2BPKjZZuK%2FuMVDeovwzXNvvR7%2BIuCnCERczcktrtp9kZ75wjgNwebOIAdJFuH%2Bi3sk1or96UUIeUkNtw0g0klJan9ud8mUVceSjaa8WEinpkLCZfCTNAGa7pCcL4uUG27WmpDJuVMHWOorXHqp5oT4uFNKh43o1yd4BkQM5XHKo8NjjvAxWvuEJghZjAoE3ZjjNjLrS3fJcJAbtanbSHCz0K3tmTQOraz9fEoqTF0JsVFxFEPvk%2FuPUd%2BkSLlFOIdq70C51d62d8F%2Fbjjm%2F0qHdKYlWFdNSriUyFJ3zNKNV1YVNEkp19qJPNm03O8RfvMnGIghoS53hIB34anmZU8elDOkQMQ0wk9lmSGR%2Bx%2BGn%2BcwV0yCJV5q%2FHg%2BKx1oAzXRyB0k%2FSmslYXiw8hrztF%2BXBbgcld4pEHsUQmqdPARvNwyP%2FSG0wELNC%2FYIaDzAi%2Bin2s9Lycmikvw%2BMlKiL4EyDOcr3QncYC2SNhKyoZS2LmGfPrlodUow0n6ZgS6aFglslDzc3RLHWEwZMLHRj8QGOqUBuLOSheRwM9U%2F3SwUSdB61Rtd4rsPYHm5vilRG%2Flqe4IDQnboFuLWoJRIBjbkQheAEmFwr44ESJhK1ZD77Dhu%2FHSLDOmzo6X%2BBUq3W8qdv0pU7fYcoETwWrdOUH7C0zP7Z%2B9kMUuUb3Qyqnwx4pBCvt9xklAMnYdLXfBGGvK7mT4%2BhDkZRMkmVkc7av3CW6Oy2rIwmrhU%2B8kJmsVUWKNKx%2FsCigSN&X-Amz-Signature=27d5ea8f24383557a15ff52391fbf604b5537a11cc2d63d68a761f465aa85dee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FPRZVE4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDJQgfqaiEAZ%2FnH1NgXhQWgShHfcV35XX8c6yJTJiOX9AiEAuoPDLB1%2Bf24b4hkBJOsIzxNPrVuR3vilhgzwKEyYG7Iq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDI%2B5L%2FgXZ3pueXUuKCrcA%2FDIOGS%2BGtE25GvBZoJrKjGJOW2EuOWuzxqVE1%2BMbOJaLWatWTba2%2BBkXG%2BfSzzSz1Ks6Z5SShoJCmaxpx4eXu6kco8FVhCdyezxAqgs5CTtMx%2BPKjZZuK%2FuMVDeovwzXNvvR7%2BIuCnCERczcktrtp9kZ75wjgNwebOIAdJFuH%2Bi3sk1or96UUIeUkNtw0g0klJan9ud8mUVceSjaa8WEinpkLCZfCTNAGa7pCcL4uUG27WmpDJuVMHWOorXHqp5oT4uFNKh43o1yd4BkQM5XHKo8NjjvAxWvuEJghZjAoE3ZjjNjLrS3fJcJAbtanbSHCz0K3tmTQOraz9fEoqTF0JsVFxFEPvk%2FuPUd%2BkSLlFOIdq70C51d62d8F%2Fbjjm%2F0qHdKYlWFdNSriUyFJ3zNKNV1YVNEkp19qJPNm03O8RfvMnGIghoS53hIB34anmZU8elDOkQMQ0wk9lmSGR%2Bx%2BGn%2BcwV0yCJV5q%2FHg%2BKx1oAzXRyB0k%2FSmslYXiw8hrztF%2BXBbgcld4pEHsUQmqdPARvNwyP%2FSG0wELNC%2FYIaDzAi%2Bin2s9Lycmikvw%2BMlKiL4EyDOcr3QncYC2SNhKyoZS2LmGfPrlodUow0n6ZgS6aFglslDzc3RLHWEwZMLHRj8QGOqUBuLOSheRwM9U%2F3SwUSdB61Rtd4rsPYHm5vilRG%2Flqe4IDQnboFuLWoJRIBjbkQheAEmFwr44ESJhK1ZD77Dhu%2FHSLDOmzo6X%2BBUq3W8qdv0pU7fYcoETwWrdOUH7C0zP7Z%2B9kMUuUb3Qyqnwx4pBCvt9xklAMnYdLXfBGGvK7mT4%2BhDkZRMkmVkc7av3CW6Oy2rIwmrhU%2B8kJmsVUWKNKx%2FsCigSN&X-Amz-Signature=a0743b9cb8739f17fffd24d4e7edc1a05bb33957caafe9978270c4d909943a5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FPRZVE4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDJQgfqaiEAZ%2FnH1NgXhQWgShHfcV35XX8c6yJTJiOX9AiEAuoPDLB1%2Bf24b4hkBJOsIzxNPrVuR3vilhgzwKEyYG7Iq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDI%2B5L%2FgXZ3pueXUuKCrcA%2FDIOGS%2BGtE25GvBZoJrKjGJOW2EuOWuzxqVE1%2BMbOJaLWatWTba2%2BBkXG%2BfSzzSz1Ks6Z5SShoJCmaxpx4eXu6kco8FVhCdyezxAqgs5CTtMx%2BPKjZZuK%2FuMVDeovwzXNvvR7%2BIuCnCERczcktrtp9kZ75wjgNwebOIAdJFuH%2Bi3sk1or96UUIeUkNtw0g0klJan9ud8mUVceSjaa8WEinpkLCZfCTNAGa7pCcL4uUG27WmpDJuVMHWOorXHqp5oT4uFNKh43o1yd4BkQM5XHKo8NjjvAxWvuEJghZjAoE3ZjjNjLrS3fJcJAbtanbSHCz0K3tmTQOraz9fEoqTF0JsVFxFEPvk%2FuPUd%2BkSLlFOIdq70C51d62d8F%2Fbjjm%2F0qHdKYlWFdNSriUyFJ3zNKNV1YVNEkp19qJPNm03O8RfvMnGIghoS53hIB34anmZU8elDOkQMQ0wk9lmSGR%2Bx%2BGn%2BcwV0yCJV5q%2FHg%2BKx1oAzXRyB0k%2FSmslYXiw8hrztF%2BXBbgcld4pEHsUQmqdPARvNwyP%2FSG0wELNC%2FYIaDzAi%2Bin2s9Lycmikvw%2BMlKiL4EyDOcr3QncYC2SNhKyoZS2LmGfPrlodUow0n6ZgS6aFglslDzc3RLHWEwZMLHRj8QGOqUBuLOSheRwM9U%2F3SwUSdB61Rtd4rsPYHm5vilRG%2Flqe4IDQnboFuLWoJRIBjbkQheAEmFwr44ESJhK1ZD77Dhu%2FHSLDOmzo6X%2BBUq3W8qdv0pU7fYcoETwWrdOUH7C0zP7Z%2B9kMUuUb3Qyqnwx4pBCvt9xklAMnYdLXfBGGvK7mT4%2BhDkZRMkmVkc7av3CW6Oy2rIwmrhU%2B8kJmsVUWKNKx%2FsCigSN&X-Amz-Signature=bfe5f5918e910a824bd1b54e9d0793f39674d1fcc55e33de4705173c6533501d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FPRZVE4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDJQgfqaiEAZ%2FnH1NgXhQWgShHfcV35XX8c6yJTJiOX9AiEAuoPDLB1%2Bf24b4hkBJOsIzxNPrVuR3vilhgzwKEyYG7Iq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDI%2B5L%2FgXZ3pueXUuKCrcA%2FDIOGS%2BGtE25GvBZoJrKjGJOW2EuOWuzxqVE1%2BMbOJaLWatWTba2%2BBkXG%2BfSzzSz1Ks6Z5SShoJCmaxpx4eXu6kco8FVhCdyezxAqgs5CTtMx%2BPKjZZuK%2FuMVDeovwzXNvvR7%2BIuCnCERczcktrtp9kZ75wjgNwebOIAdJFuH%2Bi3sk1or96UUIeUkNtw0g0klJan9ud8mUVceSjaa8WEinpkLCZfCTNAGa7pCcL4uUG27WmpDJuVMHWOorXHqp5oT4uFNKh43o1yd4BkQM5XHKo8NjjvAxWvuEJghZjAoE3ZjjNjLrS3fJcJAbtanbSHCz0K3tmTQOraz9fEoqTF0JsVFxFEPvk%2FuPUd%2BkSLlFOIdq70C51d62d8F%2Fbjjm%2F0qHdKYlWFdNSriUyFJ3zNKNV1YVNEkp19qJPNm03O8RfvMnGIghoS53hIB34anmZU8elDOkQMQ0wk9lmSGR%2Bx%2BGn%2BcwV0yCJV5q%2FHg%2BKx1oAzXRyB0k%2FSmslYXiw8hrztF%2BXBbgcld4pEHsUQmqdPARvNwyP%2FSG0wELNC%2FYIaDzAi%2Bin2s9Lycmikvw%2BMlKiL4EyDOcr3QncYC2SNhKyoZS2LmGfPrlodUow0n6ZgS6aFglslDzc3RLHWEwZMLHRj8QGOqUBuLOSheRwM9U%2F3SwUSdB61Rtd4rsPYHm5vilRG%2Flqe4IDQnboFuLWoJRIBjbkQheAEmFwr44ESJhK1ZD77Dhu%2FHSLDOmzo6X%2BBUq3W8qdv0pU7fYcoETwWrdOUH7C0zP7Z%2B9kMUuUb3Qyqnwx4pBCvt9xklAMnYdLXfBGGvK7mT4%2BhDkZRMkmVkc7av3CW6Oy2rIwmrhU%2B8kJmsVUWKNKx%2FsCigSN&X-Amz-Signature=ab9a5ba17ecc3fa4031d8689c1d1d7e187592511e8b19a5c8ab8dad06a294076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
