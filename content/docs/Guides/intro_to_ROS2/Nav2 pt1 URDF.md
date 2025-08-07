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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK7JYPE5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDSqGE4ZPPOhn4D4ZdJ1gid0zDgI6nK2jyDgBlNN3KorAIgCv7gRJoHRnH6CDq8PVHB%2BzoRLxHYhrXwDwQ4ot8152sqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIEvzjYaJONJKP1HSrcA79MB0NRDwJZsP591vlNwzSRmqaKWnSQCD5Q6jlbXyioocDre4W2myQXDXZy2cYze%2FLocCjz6jrTnVLaXFycdA5F40t9J2nI%2FkNNvI3nF21%2FvGNUwiMrwZarPWk7co1b%2Bm9h5Xba2QruE3GcJ6%2B3sJ2H%2BxNk9MKlS%2Fe4fpGIi5WONm7WpuZinDWYGXoBzJrRWFFnhIf8Za8%2FGuncRtetlKevmFC38XInIJwHEBnKHEGOEtS9p9a92qR4tW72E4drEnfd0m884aGS30BFmq6j4nL4TnPhi9ker93h3G5a0oMcqo0r3DzeCgFLRPKzzVUa5o9cWGl7CinaQcQmfMH42Z7S2Mt%2FLBPvNBteSzuFkkKN1LpSAyOwl1QT9Nb8hpvtw9s3UM0Slb41zg%2Fc6z53%2BX%2F5tRGXWRNtOiGGBT53f1oT35nt%2BCY0bZ%2B%2BpQnSpxunsxMu2fyDkalWL38aW4JDL6KfJsiDUcc3OR6Uk4PloacDsUOWEcbUDoz4%2FnQoXLqMLOHJBgngW%2B0Y%2FoeMVoUt0LF%2Br%2BcBeSv9s5x%2F9r9EhBxVnUOc0OBXFQXIZXFQDXkasWHrTZQbj%2FcKMfuiiP%2FjwdXAc%2F4J5vAQHIM8VSoq9FWhCv%2F%2FZlbzrDdEZQ3SMIbJ0MQGOqUBVm2cEjnZQ6OxQQtB1EHn8ZkNbdiAPD1saZAFlf7Ql7V1IgCP6ryTIvc4jov7hiPGFwZXkGzNr2NwouPA9ACSohzhDijmjMt3G7dY%2BvJl80Iba816pDhAt0pSaMV6GhiGGETVCC3hqGro0rrAkO7bAvIZQzyNMTGjTFjAk2MPp4iE8nyaTmdPeoEuy%2FCBN5zEnbOkq84QKFKMVyUQPTYEfmZA6pp%2B&X-Amz-Signature=c44f340454d2328a0701e664763d89f384c1896e5a4f171fa5f02f7302a5a163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK7JYPE5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDSqGE4ZPPOhn4D4ZdJ1gid0zDgI6nK2jyDgBlNN3KorAIgCv7gRJoHRnH6CDq8PVHB%2BzoRLxHYhrXwDwQ4ot8152sqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIEvzjYaJONJKP1HSrcA79MB0NRDwJZsP591vlNwzSRmqaKWnSQCD5Q6jlbXyioocDre4W2myQXDXZy2cYze%2FLocCjz6jrTnVLaXFycdA5F40t9J2nI%2FkNNvI3nF21%2FvGNUwiMrwZarPWk7co1b%2Bm9h5Xba2QruE3GcJ6%2B3sJ2H%2BxNk9MKlS%2Fe4fpGIi5WONm7WpuZinDWYGXoBzJrRWFFnhIf8Za8%2FGuncRtetlKevmFC38XInIJwHEBnKHEGOEtS9p9a92qR4tW72E4drEnfd0m884aGS30BFmq6j4nL4TnPhi9ker93h3G5a0oMcqo0r3DzeCgFLRPKzzVUa5o9cWGl7CinaQcQmfMH42Z7S2Mt%2FLBPvNBteSzuFkkKN1LpSAyOwl1QT9Nb8hpvtw9s3UM0Slb41zg%2Fc6z53%2BX%2F5tRGXWRNtOiGGBT53f1oT35nt%2BCY0bZ%2B%2BpQnSpxunsxMu2fyDkalWL38aW4JDL6KfJsiDUcc3OR6Uk4PloacDsUOWEcbUDoz4%2FnQoXLqMLOHJBgngW%2B0Y%2FoeMVoUt0LF%2Br%2BcBeSv9s5x%2F9r9EhBxVnUOc0OBXFQXIZXFQDXkasWHrTZQbj%2FcKMfuiiP%2FjwdXAc%2F4J5vAQHIM8VSoq9FWhCv%2F%2FZlbzrDdEZQ3SMIbJ0MQGOqUBVm2cEjnZQ6OxQQtB1EHn8ZkNbdiAPD1saZAFlf7Ql7V1IgCP6ryTIvc4jov7hiPGFwZXkGzNr2NwouPA9ACSohzhDijmjMt3G7dY%2BvJl80Iba816pDhAt0pSaMV6GhiGGETVCC3hqGro0rrAkO7bAvIZQzyNMTGjTFjAk2MPp4iE8nyaTmdPeoEuy%2FCBN5zEnbOkq84QKFKMVyUQPTYEfmZA6pp%2B&X-Amz-Signature=5820dd1f8eab670ba56c8a8ffdce70891b47a1821d0e366ea5ba295548b3e2d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK7JYPE5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDSqGE4ZPPOhn4D4ZdJ1gid0zDgI6nK2jyDgBlNN3KorAIgCv7gRJoHRnH6CDq8PVHB%2BzoRLxHYhrXwDwQ4ot8152sqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIEvzjYaJONJKP1HSrcA79MB0NRDwJZsP591vlNwzSRmqaKWnSQCD5Q6jlbXyioocDre4W2myQXDXZy2cYze%2FLocCjz6jrTnVLaXFycdA5F40t9J2nI%2FkNNvI3nF21%2FvGNUwiMrwZarPWk7co1b%2Bm9h5Xba2QruE3GcJ6%2B3sJ2H%2BxNk9MKlS%2Fe4fpGIi5WONm7WpuZinDWYGXoBzJrRWFFnhIf8Za8%2FGuncRtetlKevmFC38XInIJwHEBnKHEGOEtS9p9a92qR4tW72E4drEnfd0m884aGS30BFmq6j4nL4TnPhi9ker93h3G5a0oMcqo0r3DzeCgFLRPKzzVUa5o9cWGl7CinaQcQmfMH42Z7S2Mt%2FLBPvNBteSzuFkkKN1LpSAyOwl1QT9Nb8hpvtw9s3UM0Slb41zg%2Fc6z53%2BX%2F5tRGXWRNtOiGGBT53f1oT35nt%2BCY0bZ%2B%2BpQnSpxunsxMu2fyDkalWL38aW4JDL6KfJsiDUcc3OR6Uk4PloacDsUOWEcbUDoz4%2FnQoXLqMLOHJBgngW%2B0Y%2FoeMVoUt0LF%2Br%2BcBeSv9s5x%2F9r9EhBxVnUOc0OBXFQXIZXFQDXkasWHrTZQbj%2FcKMfuiiP%2FjwdXAc%2F4J5vAQHIM8VSoq9FWhCv%2F%2FZlbzrDdEZQ3SMIbJ0MQGOqUBVm2cEjnZQ6OxQQtB1EHn8ZkNbdiAPD1saZAFlf7Ql7V1IgCP6ryTIvc4jov7hiPGFwZXkGzNr2NwouPA9ACSohzhDijmjMt3G7dY%2BvJl80Iba816pDhAt0pSaMV6GhiGGETVCC3hqGro0rrAkO7bAvIZQzyNMTGjTFjAk2MPp4iE8nyaTmdPeoEuy%2FCBN5zEnbOkq84QKFKMVyUQPTYEfmZA6pp%2B&X-Amz-Signature=3ac3d3b83a5c4a3d3797867533becdcaa01fcc37c5a02b9bb9a0e7779141d33f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK7JYPE5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDSqGE4ZPPOhn4D4ZdJ1gid0zDgI6nK2jyDgBlNN3KorAIgCv7gRJoHRnH6CDq8PVHB%2BzoRLxHYhrXwDwQ4ot8152sqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIEvzjYaJONJKP1HSrcA79MB0NRDwJZsP591vlNwzSRmqaKWnSQCD5Q6jlbXyioocDre4W2myQXDXZy2cYze%2FLocCjz6jrTnVLaXFycdA5F40t9J2nI%2FkNNvI3nF21%2FvGNUwiMrwZarPWk7co1b%2Bm9h5Xba2QruE3GcJ6%2B3sJ2H%2BxNk9MKlS%2Fe4fpGIi5WONm7WpuZinDWYGXoBzJrRWFFnhIf8Za8%2FGuncRtetlKevmFC38XInIJwHEBnKHEGOEtS9p9a92qR4tW72E4drEnfd0m884aGS30BFmq6j4nL4TnPhi9ker93h3G5a0oMcqo0r3DzeCgFLRPKzzVUa5o9cWGl7CinaQcQmfMH42Z7S2Mt%2FLBPvNBteSzuFkkKN1LpSAyOwl1QT9Nb8hpvtw9s3UM0Slb41zg%2Fc6z53%2BX%2F5tRGXWRNtOiGGBT53f1oT35nt%2BCY0bZ%2B%2BpQnSpxunsxMu2fyDkalWL38aW4JDL6KfJsiDUcc3OR6Uk4PloacDsUOWEcbUDoz4%2FnQoXLqMLOHJBgngW%2B0Y%2FoeMVoUt0LF%2Br%2BcBeSv9s5x%2F9r9EhBxVnUOc0OBXFQXIZXFQDXkasWHrTZQbj%2FcKMfuiiP%2FjwdXAc%2F4J5vAQHIM8VSoq9FWhCv%2F%2FZlbzrDdEZQ3SMIbJ0MQGOqUBVm2cEjnZQ6OxQQtB1EHn8ZkNbdiAPD1saZAFlf7Ql7V1IgCP6ryTIvc4jov7hiPGFwZXkGzNr2NwouPA9ACSohzhDijmjMt3G7dY%2BvJl80Iba816pDhAt0pSaMV6GhiGGETVCC3hqGro0rrAkO7bAvIZQzyNMTGjTFjAk2MPp4iE8nyaTmdPeoEuy%2FCBN5zEnbOkq84QKFKMVyUQPTYEfmZA6pp%2B&X-Amz-Signature=7789eeb74ada3fe6df04e889b0b5c392df5ca154b39330b9790441a39ac72fd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK7JYPE5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDSqGE4ZPPOhn4D4ZdJ1gid0zDgI6nK2jyDgBlNN3KorAIgCv7gRJoHRnH6CDq8PVHB%2BzoRLxHYhrXwDwQ4ot8152sqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIEvzjYaJONJKP1HSrcA79MB0NRDwJZsP591vlNwzSRmqaKWnSQCD5Q6jlbXyioocDre4W2myQXDXZy2cYze%2FLocCjz6jrTnVLaXFycdA5F40t9J2nI%2FkNNvI3nF21%2FvGNUwiMrwZarPWk7co1b%2Bm9h5Xba2QruE3GcJ6%2B3sJ2H%2BxNk9MKlS%2Fe4fpGIi5WONm7WpuZinDWYGXoBzJrRWFFnhIf8Za8%2FGuncRtetlKevmFC38XInIJwHEBnKHEGOEtS9p9a92qR4tW72E4drEnfd0m884aGS30BFmq6j4nL4TnPhi9ker93h3G5a0oMcqo0r3DzeCgFLRPKzzVUa5o9cWGl7CinaQcQmfMH42Z7S2Mt%2FLBPvNBteSzuFkkKN1LpSAyOwl1QT9Nb8hpvtw9s3UM0Slb41zg%2Fc6z53%2BX%2F5tRGXWRNtOiGGBT53f1oT35nt%2BCY0bZ%2B%2BpQnSpxunsxMu2fyDkalWL38aW4JDL6KfJsiDUcc3OR6Uk4PloacDsUOWEcbUDoz4%2FnQoXLqMLOHJBgngW%2B0Y%2FoeMVoUt0LF%2Br%2BcBeSv9s5x%2F9r9EhBxVnUOc0OBXFQXIZXFQDXkasWHrTZQbj%2FcKMfuiiP%2FjwdXAc%2F4J5vAQHIM8VSoq9FWhCv%2F%2FZlbzrDdEZQ3SMIbJ0MQGOqUBVm2cEjnZQ6OxQQtB1EHn8ZkNbdiAPD1saZAFlf7Ql7V1IgCP6ryTIvc4jov7hiPGFwZXkGzNr2NwouPA9ACSohzhDijmjMt3G7dY%2BvJl80Iba816pDhAt0pSaMV6GhiGGETVCC3hqGro0rrAkO7bAvIZQzyNMTGjTFjAk2MPp4iE8nyaTmdPeoEuy%2FCBN5zEnbOkq84QKFKMVyUQPTYEfmZA6pp%2B&X-Amz-Signature=01de6213055107dd50d54c2338b1587e9b92aa6957411cd16ded64de39a08ba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK7JYPE5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDSqGE4ZPPOhn4D4ZdJ1gid0zDgI6nK2jyDgBlNN3KorAIgCv7gRJoHRnH6CDq8PVHB%2BzoRLxHYhrXwDwQ4ot8152sqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIEvzjYaJONJKP1HSrcA79MB0NRDwJZsP591vlNwzSRmqaKWnSQCD5Q6jlbXyioocDre4W2myQXDXZy2cYze%2FLocCjz6jrTnVLaXFycdA5F40t9J2nI%2FkNNvI3nF21%2FvGNUwiMrwZarPWk7co1b%2Bm9h5Xba2QruE3GcJ6%2B3sJ2H%2BxNk9MKlS%2Fe4fpGIi5WONm7WpuZinDWYGXoBzJrRWFFnhIf8Za8%2FGuncRtetlKevmFC38XInIJwHEBnKHEGOEtS9p9a92qR4tW72E4drEnfd0m884aGS30BFmq6j4nL4TnPhi9ker93h3G5a0oMcqo0r3DzeCgFLRPKzzVUa5o9cWGl7CinaQcQmfMH42Z7S2Mt%2FLBPvNBteSzuFkkKN1LpSAyOwl1QT9Nb8hpvtw9s3UM0Slb41zg%2Fc6z53%2BX%2F5tRGXWRNtOiGGBT53f1oT35nt%2BCY0bZ%2B%2BpQnSpxunsxMu2fyDkalWL38aW4JDL6KfJsiDUcc3OR6Uk4PloacDsUOWEcbUDoz4%2FnQoXLqMLOHJBgngW%2B0Y%2FoeMVoUt0LF%2Br%2BcBeSv9s5x%2F9r9EhBxVnUOc0OBXFQXIZXFQDXkasWHrTZQbj%2FcKMfuiiP%2FjwdXAc%2F4J5vAQHIM8VSoq9FWhCv%2F%2FZlbzrDdEZQ3SMIbJ0MQGOqUBVm2cEjnZQ6OxQQtB1EHn8ZkNbdiAPD1saZAFlf7Ql7V1IgCP6ryTIvc4jov7hiPGFwZXkGzNr2NwouPA9ACSohzhDijmjMt3G7dY%2BvJl80Iba816pDhAt0pSaMV6GhiGGETVCC3hqGro0rrAkO7bAvIZQzyNMTGjTFjAk2MPp4iE8nyaTmdPeoEuy%2FCBN5zEnbOkq84QKFKMVyUQPTYEfmZA6pp%2B&X-Amz-Signature=43911d2b43aba5296707ad2195f6b7da81301616e607b47f9f5ef96836932092&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK7JYPE5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDSqGE4ZPPOhn4D4ZdJ1gid0zDgI6nK2jyDgBlNN3KorAIgCv7gRJoHRnH6CDq8PVHB%2BzoRLxHYhrXwDwQ4ot8152sqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIEvzjYaJONJKP1HSrcA79MB0NRDwJZsP591vlNwzSRmqaKWnSQCD5Q6jlbXyioocDre4W2myQXDXZy2cYze%2FLocCjz6jrTnVLaXFycdA5F40t9J2nI%2FkNNvI3nF21%2FvGNUwiMrwZarPWk7co1b%2Bm9h5Xba2QruE3GcJ6%2B3sJ2H%2BxNk9MKlS%2Fe4fpGIi5WONm7WpuZinDWYGXoBzJrRWFFnhIf8Za8%2FGuncRtetlKevmFC38XInIJwHEBnKHEGOEtS9p9a92qR4tW72E4drEnfd0m884aGS30BFmq6j4nL4TnPhi9ker93h3G5a0oMcqo0r3DzeCgFLRPKzzVUa5o9cWGl7CinaQcQmfMH42Z7S2Mt%2FLBPvNBteSzuFkkKN1LpSAyOwl1QT9Nb8hpvtw9s3UM0Slb41zg%2Fc6z53%2BX%2F5tRGXWRNtOiGGBT53f1oT35nt%2BCY0bZ%2B%2BpQnSpxunsxMu2fyDkalWL38aW4JDL6KfJsiDUcc3OR6Uk4PloacDsUOWEcbUDoz4%2FnQoXLqMLOHJBgngW%2B0Y%2FoeMVoUt0LF%2Br%2BcBeSv9s5x%2F9r9EhBxVnUOc0OBXFQXIZXFQDXkasWHrTZQbj%2FcKMfuiiP%2FjwdXAc%2F4J5vAQHIM8VSoq9FWhCv%2F%2FZlbzrDdEZQ3SMIbJ0MQGOqUBVm2cEjnZQ6OxQQtB1EHn8ZkNbdiAPD1saZAFlf7Ql7V1IgCP6ryTIvc4jov7hiPGFwZXkGzNr2NwouPA9ACSohzhDijmjMt3G7dY%2BvJl80Iba816pDhAt0pSaMV6GhiGGETVCC3hqGro0rrAkO7bAvIZQzyNMTGjTFjAk2MPp4iE8nyaTmdPeoEuy%2FCBN5zEnbOkq84QKFKMVyUQPTYEfmZA6pp%2B&X-Amz-Signature=dbd48a9bc2b6882437179416d627361b80bd519ac6ae483a56b65dd40c5f410e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK7JYPE5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDSqGE4ZPPOhn4D4ZdJ1gid0zDgI6nK2jyDgBlNN3KorAIgCv7gRJoHRnH6CDq8PVHB%2BzoRLxHYhrXwDwQ4ot8152sqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIEvzjYaJONJKP1HSrcA79MB0NRDwJZsP591vlNwzSRmqaKWnSQCD5Q6jlbXyioocDre4W2myQXDXZy2cYze%2FLocCjz6jrTnVLaXFycdA5F40t9J2nI%2FkNNvI3nF21%2FvGNUwiMrwZarPWk7co1b%2Bm9h5Xba2QruE3GcJ6%2B3sJ2H%2BxNk9MKlS%2Fe4fpGIi5WONm7WpuZinDWYGXoBzJrRWFFnhIf8Za8%2FGuncRtetlKevmFC38XInIJwHEBnKHEGOEtS9p9a92qR4tW72E4drEnfd0m884aGS30BFmq6j4nL4TnPhi9ker93h3G5a0oMcqo0r3DzeCgFLRPKzzVUa5o9cWGl7CinaQcQmfMH42Z7S2Mt%2FLBPvNBteSzuFkkKN1LpSAyOwl1QT9Nb8hpvtw9s3UM0Slb41zg%2Fc6z53%2BX%2F5tRGXWRNtOiGGBT53f1oT35nt%2BCY0bZ%2B%2BpQnSpxunsxMu2fyDkalWL38aW4JDL6KfJsiDUcc3OR6Uk4PloacDsUOWEcbUDoz4%2FnQoXLqMLOHJBgngW%2B0Y%2FoeMVoUt0LF%2Br%2BcBeSv9s5x%2F9r9EhBxVnUOc0OBXFQXIZXFQDXkasWHrTZQbj%2FcKMfuiiP%2FjwdXAc%2F4J5vAQHIM8VSoq9FWhCv%2F%2FZlbzrDdEZQ3SMIbJ0MQGOqUBVm2cEjnZQ6OxQQtB1EHn8ZkNbdiAPD1saZAFlf7Ql7V1IgCP6ryTIvc4jov7hiPGFwZXkGzNr2NwouPA9ACSohzhDijmjMt3G7dY%2BvJl80Iba816pDhAt0pSaMV6GhiGGETVCC3hqGro0rrAkO7bAvIZQzyNMTGjTFjAk2MPp4iE8nyaTmdPeoEuy%2FCBN5zEnbOkq84QKFKMVyUQPTYEfmZA6pp%2B&X-Amz-Signature=b54b3bc4688720109703d4f85860f7e51184d4de1d8485a4019025160482e4f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK7JYPE5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDSqGE4ZPPOhn4D4ZdJ1gid0zDgI6nK2jyDgBlNN3KorAIgCv7gRJoHRnH6CDq8PVHB%2BzoRLxHYhrXwDwQ4ot8152sqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIEvzjYaJONJKP1HSrcA79MB0NRDwJZsP591vlNwzSRmqaKWnSQCD5Q6jlbXyioocDre4W2myQXDXZy2cYze%2FLocCjz6jrTnVLaXFycdA5F40t9J2nI%2FkNNvI3nF21%2FvGNUwiMrwZarPWk7co1b%2Bm9h5Xba2QruE3GcJ6%2B3sJ2H%2BxNk9MKlS%2Fe4fpGIi5WONm7WpuZinDWYGXoBzJrRWFFnhIf8Za8%2FGuncRtetlKevmFC38XInIJwHEBnKHEGOEtS9p9a92qR4tW72E4drEnfd0m884aGS30BFmq6j4nL4TnPhi9ker93h3G5a0oMcqo0r3DzeCgFLRPKzzVUa5o9cWGl7CinaQcQmfMH42Z7S2Mt%2FLBPvNBteSzuFkkKN1LpSAyOwl1QT9Nb8hpvtw9s3UM0Slb41zg%2Fc6z53%2BX%2F5tRGXWRNtOiGGBT53f1oT35nt%2BCY0bZ%2B%2BpQnSpxunsxMu2fyDkalWL38aW4JDL6KfJsiDUcc3OR6Uk4PloacDsUOWEcbUDoz4%2FnQoXLqMLOHJBgngW%2B0Y%2FoeMVoUt0LF%2Br%2BcBeSv9s5x%2F9r9EhBxVnUOc0OBXFQXIZXFQDXkasWHrTZQbj%2FcKMfuiiP%2FjwdXAc%2F4J5vAQHIM8VSoq9FWhCv%2F%2FZlbzrDdEZQ3SMIbJ0MQGOqUBVm2cEjnZQ6OxQQtB1EHn8ZkNbdiAPD1saZAFlf7Ql7V1IgCP6ryTIvc4jov7hiPGFwZXkGzNr2NwouPA9ACSohzhDijmjMt3G7dY%2BvJl80Iba816pDhAt0pSaMV6GhiGGETVCC3hqGro0rrAkO7bAvIZQzyNMTGjTFjAk2MPp4iE8nyaTmdPeoEuy%2FCBN5zEnbOkq84QKFKMVyUQPTYEfmZA6pp%2B&X-Amz-Signature=5245d74f259508deb6aad57df93756fab1a1eb185cf4234e6f7e4576b5c86840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK7JYPE5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDSqGE4ZPPOhn4D4ZdJ1gid0zDgI6nK2jyDgBlNN3KorAIgCv7gRJoHRnH6CDq8PVHB%2BzoRLxHYhrXwDwQ4ot8152sqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIEvzjYaJONJKP1HSrcA79MB0NRDwJZsP591vlNwzSRmqaKWnSQCD5Q6jlbXyioocDre4W2myQXDXZy2cYze%2FLocCjz6jrTnVLaXFycdA5F40t9J2nI%2FkNNvI3nF21%2FvGNUwiMrwZarPWk7co1b%2Bm9h5Xba2QruE3GcJ6%2B3sJ2H%2BxNk9MKlS%2Fe4fpGIi5WONm7WpuZinDWYGXoBzJrRWFFnhIf8Za8%2FGuncRtetlKevmFC38XInIJwHEBnKHEGOEtS9p9a92qR4tW72E4drEnfd0m884aGS30BFmq6j4nL4TnPhi9ker93h3G5a0oMcqo0r3DzeCgFLRPKzzVUa5o9cWGl7CinaQcQmfMH42Z7S2Mt%2FLBPvNBteSzuFkkKN1LpSAyOwl1QT9Nb8hpvtw9s3UM0Slb41zg%2Fc6z53%2BX%2F5tRGXWRNtOiGGBT53f1oT35nt%2BCY0bZ%2B%2BpQnSpxunsxMu2fyDkalWL38aW4JDL6KfJsiDUcc3OR6Uk4PloacDsUOWEcbUDoz4%2FnQoXLqMLOHJBgngW%2B0Y%2FoeMVoUt0LF%2Br%2BcBeSv9s5x%2F9r9EhBxVnUOc0OBXFQXIZXFQDXkasWHrTZQbj%2FcKMfuiiP%2FjwdXAc%2F4J5vAQHIM8VSoq9FWhCv%2F%2FZlbzrDdEZQ3SMIbJ0MQGOqUBVm2cEjnZQ6OxQQtB1EHn8ZkNbdiAPD1saZAFlf7Ql7V1IgCP6ryTIvc4jov7hiPGFwZXkGzNr2NwouPA9ACSohzhDijmjMt3G7dY%2BvJl80Iba816pDhAt0pSaMV6GhiGGETVCC3hqGro0rrAkO7bAvIZQzyNMTGjTFjAk2MPp4iE8nyaTmdPeoEuy%2FCBN5zEnbOkq84QKFKMVyUQPTYEfmZA6pp%2B&X-Amz-Signature=1061634999f67657a319bad8f106f7a48d6660b6dc9cbe7af8e565d85dc813c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UZMUZX5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIBFeigmF67t%2FGJXA5i6F%2F6oXHN%2F0BfOZMn4X51Lsvg0wAiA0gpP3%2BH0a5MhygLX%2Bi0sOeh0k%2B0L1XjcnlJNB6ogghCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUA1yDxUsJGfiqwB%2BKtwDzoxlJV6K2rl2T3WEqv51P54P9I288gG2bl8o%2BHd%2BJfugRJgQFDYUrI%2FulVtXOInTTd%2FlQKB1D7%2BsvYJky46AOJ2WPJNjK28j9j0hxCY%2Bm4DXSIlQQAQtbr7TACtxMS7lVrQ8ap3jtQfNPu63om6PmHatIV6vE4VRCb9opTPK5DefQ9eij%2FC7cZw2wGxYnK5G0Yj3p2fe1VKEHgr8dcKlfgF4hvlygfg0AVL5LePvOm2tmdENj%2Bq35RYn3s90FmTayXbfUZu5n5q6ntN9PUrxDbAkWi0DugAqHcdrx4IL4tHeY7%2BGCOuo7kBXZZZWCdIkFTo%2Fz0CJAlUSss%2FK0LfhYTYsKJB16ndWVTyzXGrpcasr6fq67w73RYcsX4dfL9A%2B8CZqsYhS%2FrGzELzmEjr3Tceao0MJPHm23JU%2BXNlBULVorQGwV%2FVJh%2FueAzk39yCo0%2FR715L%2FRvj0HTO%2BmajEvz8%2B3R1zFZ48EGEtk5m4DZGMeIhZ%2BRgwe73LouwE5g8ELIEXep%2BGrARiTmuRXXw1PFUzkBw8Vt0Px39yugHdv5H0a9zsSzHE7SIw7kuT4cKSAlfUDqarN3xC2d%2F04Ey%2FwOQFg7xAG1LNZO8fAIRatf%2FyLZJz9FSN1dFIRrcwvMjQxAY6pgHmz4hxyYJWNQSPjncjzwVqIogZerDkZfaybOt7s1GvyIWUGfU%2BzQVXudrcb%2F4Xrwj0BdnqGwIAlvSqeuftH14Z%2BrFf6JVqkx74uG%2FiBtJkbbP7uQAfSD%2FhHZw4qhoqGGVKOmxzS81HISrUPjpQTe4scsjfwccBeIYfl%2BtO5%2Bldg8Gcb8h6lNmd5m6K6sYWhwxSWCOEyFPSk7Sp9d%2F4KTpPkusHL4sK&X-Amz-Signature=529f2c9f67442f761a224af6df790399cff04f2bfdb92a1f71e8bd122c6b94da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PBWDKTO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICln%2B5U145lSM5CtvqLoJbDrThH0p6RW1odQW5OZrq6FAiAkERat9ADQEhcfTI4DD5Rp%2FErATbTp3%2BXb9DA%2FpI6bqyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv%2BytDAIWxIuzISfUKtwDJpHeO2QE6YPFGgwAqGn0cFaqFljSOjao8hFIKijGt3dfQZHbPR3f3nrEzOaDYalAvOkcnz4J0EAm7HRuvllScKUxOg4QAkDTM%2FedVt127TPLQLIDa9wCBrjN2y1FnEUN9b3R7g2oW3A8obFVRxMZ6a%2B6O8Gg%2FSsYy4mI41Og5dYJ6P%2B5JbjHSoOhGcXfJi2A7mv%2Fyhu%2BiwCDN2axfFsQURqU7C5ucS9mlgd5NVamQjF4EVF0KOs4eCTS%2FFsoVQUCkL%2B8G8djHNn%2F1Rz6VE%2Fh7nbVEoY2O30M21A7OGqA5cpAZjy6%2B4cfBZtqREF%2BPm%2F1fxkwoY19GNYbNtkQ5nG0KMMLDGYiOEU4HKbKMRCvTekgbpAat3zNBurPSR4PJSnW3XcFgZwLTPTk13UvCqPuB8ZD9ogupahi7zOTnGozRRrta6%2B%2BO4es3AYRRZKo848v20mpOBgQCdvSaLoG9yQhlQZVw5bhlUEzAXXacT4YD3l1F9%2BjB6Eq%2FBqrEdDqMnDKJLFU5XWbpvuGWc%2Blt6DxAezU18ixEfe5rr7zPcw4wgdr7TMWTaNsXHIOA%2F3Ln2Sh22%2FqorVFN7PI1jikrEyLaXj%2Bcz%2BMj8ZKMvVk6IA7XW58jcYyl0KbH88TYFgw%2BcjQxAY6pgG3NDzieK5o47nNFYvW%2BMlfH95ziy2g31g%2BsvQrxaoYyljjNCL01972a6Tah01E6tNIEJCkeqdEQ5CwuJqYGuym%2BVaaMoDJs844sBFfIMReRbT%2BA3xXo0X%2FVs2iFv58eyZYm8ej%2FLbG2%2FzthLEeOmgqw%2BJUb8y8x2f4Mv6U8%2F3UZa9mUCNsQC2w1XWLrziJ6baU3bAnHQp65yvLWG5y%2BSypW4Zh1bLd&X-Amz-Signature=3a8c32af838a4a6c50366344cadb711752649388a0fb7e7aded3cd7291b27445&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ4D3SNN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIEcrcdx4HCpTFNTU8GY2UByk2HAvHcto%2B3UxCMNj6Wg%2FAiA%2FVdzzQ8cv8LMluZLix3%2FfBkxZFGtSz2BrOtwpj0J35SqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrAF8hnrXBGgXnD2OKtwD6RjsxsKWg2QQkxcZqS5QoKSuDYZ0gzcK8A7otMkd6c8bX3Ubs9eZwusxf6qbo1Z3kgpZFRALGa89t9wrdTGtsufRgjvr%2B%2Fpu5%2BtNx%2F%2FZq4Y5etzCU6t7iVEzFl2quBMbQ22NxCsIaK2FR1G11ZWbSeqU6XgVNa2MgZmymQ%2Fp3jpksc1suwBLKSiKLDhIHDoyXv6ya7o3O2mfJxFrwdOwgYBprdCFYGO5GxB8u%2BRH%2FHDRStuEoYbUL%2F5fMJyi8%2FO87vy%2BKvB75EnSnM2MumPm1%2FbDv0OJKPGS3SMZiLNGiPfcCC4CrJ3GMIygJEE4DqAqhVuERlhCKlPoGXmh4l2w42%2B%2BspsXA7B4eK75g1iDavZ%2FgGoZ85fsTGZn%2FzNWURndNdex3v%2FlZKY%2Fj6izFvPUtM%2F%2FyriDqSKOeEmNSLd%2B4immIjncYiZFROpxt8sWk9lHyhUd9LNxv6wo68lSzpwtd%2BWzcFHR1gxa2gWu90%2BDc8vJjG8Hh%2FExG4EJku9KHb7uxZQpWvPsT3Ymw82DdgkWAv46yk3wzik1lspnJxO%2FSvDuB8%2F2UpPjjbVT32%2FlfinzVI1L3PpfqwD4rJMHfFh7Y4rYXOa5oO4X8IBXafdYeHNBBYMLWvWbAxwcZsswqcjQxAY6pgHzMz30zQunn7V%2BVRGk%2Bp4nJtqp8Fgk8u5M0DEl0dMtUZcytodjs9jrX18fPOZ6EFQWa3jVRQ7fWRsZG5ZUxQFO4BC1r6Ep4X%2Bot3tOPB%2FgjjnfpzQtIxfH4oM2PigZEpkb2ButuAjHe%2FZ7L%2FJDr0mhw%2F48yraXCNFa%2FdRVKOTIlbJzg7YzFNX7%2FnDGeyNPIsKxZ17S7aJCU7tffpxQeI2PCgwW9QrK&X-Amz-Signature=f2cd61b7971757971f066dc8203bf8e8e4f77d8854936acfd2f9af9398bf8292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK7JYPE5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDSqGE4ZPPOhn4D4ZdJ1gid0zDgI6nK2jyDgBlNN3KorAIgCv7gRJoHRnH6CDq8PVHB%2BzoRLxHYhrXwDwQ4ot8152sqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIEvzjYaJONJKP1HSrcA79MB0NRDwJZsP591vlNwzSRmqaKWnSQCD5Q6jlbXyioocDre4W2myQXDXZy2cYze%2FLocCjz6jrTnVLaXFycdA5F40t9J2nI%2FkNNvI3nF21%2FvGNUwiMrwZarPWk7co1b%2Bm9h5Xba2QruE3GcJ6%2B3sJ2H%2BxNk9MKlS%2Fe4fpGIi5WONm7WpuZinDWYGXoBzJrRWFFnhIf8Za8%2FGuncRtetlKevmFC38XInIJwHEBnKHEGOEtS9p9a92qR4tW72E4drEnfd0m884aGS30BFmq6j4nL4TnPhi9ker93h3G5a0oMcqo0r3DzeCgFLRPKzzVUa5o9cWGl7CinaQcQmfMH42Z7S2Mt%2FLBPvNBteSzuFkkKN1LpSAyOwl1QT9Nb8hpvtw9s3UM0Slb41zg%2Fc6z53%2BX%2F5tRGXWRNtOiGGBT53f1oT35nt%2BCY0bZ%2B%2BpQnSpxunsxMu2fyDkalWL38aW4JDL6KfJsiDUcc3OR6Uk4PloacDsUOWEcbUDoz4%2FnQoXLqMLOHJBgngW%2B0Y%2FoeMVoUt0LF%2Br%2BcBeSv9s5x%2F9r9EhBxVnUOc0OBXFQXIZXFQDXkasWHrTZQbj%2FcKMfuiiP%2FjwdXAc%2F4J5vAQHIM8VSoq9FWhCv%2F%2FZlbzrDdEZQ3SMIbJ0MQGOqUBVm2cEjnZQ6OxQQtB1EHn8ZkNbdiAPD1saZAFlf7Ql7V1IgCP6ryTIvc4jov7hiPGFwZXkGzNr2NwouPA9ACSohzhDijmjMt3G7dY%2BvJl80Iba816pDhAt0pSaMV6GhiGGETVCC3hqGro0rrAkO7bAvIZQzyNMTGjTFjAk2MPp4iE8nyaTmdPeoEuy%2FCBN5zEnbOkq84QKFKMVyUQPTYEfmZA6pp%2B&X-Amz-Signature=ea1415ffb1b9057e079cb9fba97f35bef403d8df62b4f5ef63c3171b0931ca5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OFPFYIW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIHIoNxe3wgX%2FEQZzpJwD2bfhlrSWpHP861hGhTnv%2ByGOAiAj22nvaO1ZfdgxnohKKHEN8icFLA3WcRFCxD%2FwakQD1SqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkJ430jM2JwCfTEcjKtwD5vnThntSMBgmiLsZ4sYjSxZsnGqwFjmQUQqU8jVKS2zs5ut30p5qvNTTMsPAUKHNizCWpLdq6Pbc0wMXEGYjRrYmavuxKxam3ckRhUwtTesBqjJtjoW8m7iOYNlE%2FhjsniHAu43%2Bm1N1oMJZLyG5XdLom3NI8bbw4LJxHC56SjkgqbEhChM6186YVMM4%2BrI9ZqmuE6DyQtZC8YAznOr4pifbcGHtb3%2FW6OGGUl7cDyImklkUBBQonGQkXdjeN3rnfXzRh6rRC3KHIuPR16T3v1PgVOM5jFPtU%2BeFRXXymQvaHlJQqMoqsr2BRP0HMunfpevJjVJAu1AeM1uqWJi4RSNTt5pHikqN3CwkjBAEmTmy23cE7r2WRMCBtkFPDb1Af5ArC07UJvYE0ZRzZfXQcgn6%2FZazbMldBUJNpF5pqYrUM2m5JQ8GcLPu%2BWdi9J57PYH5JuCSdgr7PmOwjgnbbzVWcA%2F9w6D1tEYp6SSrI%2Fb1djCczEMapYrcOa2%2FMMo%2FJG7fM566l5TYy8GYXxzl7a%2FyiZ2PwcC3SBnJ4UEimVT9MRMaonjzU6dUuIJKHzs%2BgR8QB3QXIav79PM%2BJZEpPvpPEVKY2L9L5H69NOEuruSAb7HoXLZctFx1ltIwtsjQxAY6pgEydUDOorf5OPeV9gMVMU6mDwWsTZJa%2Fow2NjwoTKQuM6e4mI2yxcViYI6qvL1ikjZCNfEJqb0twqj3zYTHMVm3DC3n2uaNmSxewKFQH4494hbU2YYjXI3blGpUBmiyd5oytDvkNSNoQklFw8cWA8%2BWVSyWk1VemhcjNMoa5T6rnGU%2FUNQ9xSMx5SMs0oLI2FDaPSSZbouHvdlg88PLztaTgiUoeuiB&X-Amz-Signature=6a9d360c1104deac260488ebfce705ca33e5dac02b10b428b6ecebff4f4e9bdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK7JYPE5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDSqGE4ZPPOhn4D4ZdJ1gid0zDgI6nK2jyDgBlNN3KorAIgCv7gRJoHRnH6CDq8PVHB%2BzoRLxHYhrXwDwQ4ot8152sqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIEvzjYaJONJKP1HSrcA79MB0NRDwJZsP591vlNwzSRmqaKWnSQCD5Q6jlbXyioocDre4W2myQXDXZy2cYze%2FLocCjz6jrTnVLaXFycdA5F40t9J2nI%2FkNNvI3nF21%2FvGNUwiMrwZarPWk7co1b%2Bm9h5Xba2QruE3GcJ6%2B3sJ2H%2BxNk9MKlS%2Fe4fpGIi5WONm7WpuZinDWYGXoBzJrRWFFnhIf8Za8%2FGuncRtetlKevmFC38XInIJwHEBnKHEGOEtS9p9a92qR4tW72E4drEnfd0m884aGS30BFmq6j4nL4TnPhi9ker93h3G5a0oMcqo0r3DzeCgFLRPKzzVUa5o9cWGl7CinaQcQmfMH42Z7S2Mt%2FLBPvNBteSzuFkkKN1LpSAyOwl1QT9Nb8hpvtw9s3UM0Slb41zg%2Fc6z53%2BX%2F5tRGXWRNtOiGGBT53f1oT35nt%2BCY0bZ%2B%2BpQnSpxunsxMu2fyDkalWL38aW4JDL6KfJsiDUcc3OR6Uk4PloacDsUOWEcbUDoz4%2FnQoXLqMLOHJBgngW%2B0Y%2FoeMVoUt0LF%2Br%2BcBeSv9s5x%2F9r9EhBxVnUOc0OBXFQXIZXFQDXkasWHrTZQbj%2FcKMfuiiP%2FjwdXAc%2F4J5vAQHIM8VSoq9FWhCv%2F%2FZlbzrDdEZQ3SMIbJ0MQGOqUBVm2cEjnZQ6OxQQtB1EHn8ZkNbdiAPD1saZAFlf7Ql7V1IgCP6ryTIvc4jov7hiPGFwZXkGzNr2NwouPA9ACSohzhDijmjMt3G7dY%2BvJl80Iba816pDhAt0pSaMV6GhiGGETVCC3hqGro0rrAkO7bAvIZQzyNMTGjTFjAk2MPp4iE8nyaTmdPeoEuy%2FCBN5zEnbOkq84QKFKMVyUQPTYEfmZA6pp%2B&X-Amz-Signature=cd04666213da0853c295f1819cd354f077ef0532b5051a20c133519466b6fea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645XSWAD3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCWKZnv3jf2M%2Be4mDBuAS4k3IGS%2F8iJ812MpdwYyE5v%2BQIhANdsBmrcHTnKp1mdi%2BxusMx8s%2FHF2nE9xO7CJYuAJSOtKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdUEtXPF9F5ZqEow0q3APBIH0WvqJ%2BVVhEJbYJRbprUd6hszkpxWWaF9nrz%2F1jsnEjIF5h4%2FgZKlpIX5tmORWmHvwyYysD83XOtEg2uTdSQ1UEaEbJJBhLcjju9ZEnEpETVrL3Jw%2Fh7N%2B%2BRKhTW13zO8PnO4EZ3DarqFo3ZbMTER8Ki%2Fyd%2BcmA7JSP8DXNFb90KDAW795VMYpFQE4xG%2BDakmSbZ97m3%2Fv0xzTElKPhMb1VjI94lTh1%2FtKgrYtImjSqJscpMSy2u3fHDNfGalGXkHzqCtdm7C6a4efC%2BYeVd9h1jWH9H3Lg%2BOOnSjplDUcddSdhzMKkzd2XMOxJ3%2FJXbmx%2BXayC%2FTgzY%2FlQr%2FIqZr5hW2JIK%2FmjH5NzuqIl2P5%2BAIOHX3BbsrYQZivtt9CbK0ziO6p2PHRdAYHw%2F4yGbtQD%2Fy2yRgAFkhsfYbTyWb5i3pAO84ZP8hpirYULCPMZ2%2FgPUNw419sRdLCpsahUPKAys8lZsgX2QHVhJ%2BdYMSsJPlb9uSjY%2FYr228LMvMDhWxtH6AzHJJcwf%2F0kGa1lwByGtlEVzDCSjcu7OyM%2FcFXJyLTGLDHMqVuYOIbDHhYpQ8MXU3dPwQSm1HZ%2Bv7gFWLZn9xhTSEQuP6bJFjNJlm1b8aEuyPoS%2Fb6RdTDDyNDEBjqkAaQlSkToLrPYGxReU9mNQJsktf4M0E7SCYeRgBOp8ouBAcmwg%2FzxB1jNbNTOUi2vcw5pl74tydD9KJklsHmUFSXH%2B1pvPRiTd7c8vMsiQ7bfVKVOwrzTuaRgj5%2BMNVi9tgWY8QTtbTuwAK0BOy6CwLyVa%2FOITw5hZdMxlR5aKw8EINGY5rXQJBsrXT0G3LaUFysun54A%2FbuDHmBPpi6uNwwsvg9W&X-Amz-Signature=5050f315fc860f3402781675efb7c16e2ccf84e8d9c4f3e70554e0df5a717a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK7JYPE5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDSqGE4ZPPOhn4D4ZdJ1gid0zDgI6nK2jyDgBlNN3KorAIgCv7gRJoHRnH6CDq8PVHB%2BzoRLxHYhrXwDwQ4ot8152sqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIEvzjYaJONJKP1HSrcA79MB0NRDwJZsP591vlNwzSRmqaKWnSQCD5Q6jlbXyioocDre4W2myQXDXZy2cYze%2FLocCjz6jrTnVLaXFycdA5F40t9J2nI%2FkNNvI3nF21%2FvGNUwiMrwZarPWk7co1b%2Bm9h5Xba2QruE3GcJ6%2B3sJ2H%2BxNk9MKlS%2Fe4fpGIi5WONm7WpuZinDWYGXoBzJrRWFFnhIf8Za8%2FGuncRtetlKevmFC38XInIJwHEBnKHEGOEtS9p9a92qR4tW72E4drEnfd0m884aGS30BFmq6j4nL4TnPhi9ker93h3G5a0oMcqo0r3DzeCgFLRPKzzVUa5o9cWGl7CinaQcQmfMH42Z7S2Mt%2FLBPvNBteSzuFkkKN1LpSAyOwl1QT9Nb8hpvtw9s3UM0Slb41zg%2Fc6z53%2BX%2F5tRGXWRNtOiGGBT53f1oT35nt%2BCY0bZ%2B%2BpQnSpxunsxMu2fyDkalWL38aW4JDL6KfJsiDUcc3OR6Uk4PloacDsUOWEcbUDoz4%2FnQoXLqMLOHJBgngW%2B0Y%2FoeMVoUt0LF%2Br%2BcBeSv9s5x%2F9r9EhBxVnUOc0OBXFQXIZXFQDXkasWHrTZQbj%2FcKMfuiiP%2FjwdXAc%2F4J5vAQHIM8VSoq9FWhCv%2F%2FZlbzrDdEZQ3SMIbJ0MQGOqUBVm2cEjnZQ6OxQQtB1EHn8ZkNbdiAPD1saZAFlf7Ql7V1IgCP6ryTIvc4jov7hiPGFwZXkGzNr2NwouPA9ACSohzhDijmjMt3G7dY%2BvJl80Iba816pDhAt0pSaMV6GhiGGETVCC3hqGro0rrAkO7bAvIZQzyNMTGjTFjAk2MPp4iE8nyaTmdPeoEuy%2FCBN5zEnbOkq84QKFKMVyUQPTYEfmZA6pp%2B&X-Amz-Signature=2d4d1a677158e4e8f706461a3bc797bf3b8ffdc25cb5d8f7f9e0f3bfdf1450ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ5WIHQB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQC%2FpSi6dla9aVPY%2BDO0UtqGeMEmzRLcQcxvMsu7yKfCqgIgAbUmiH8QfCqh7rgDEhv2SZSNcQCpq5xPsH2Woc6TRI0qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5Kzjy56%2Fcf04C2oSrcAyvhWrJVcUUU2PBdDbdgYN90%2FmQZX8faxlAiHg0xJbgoI1GqmCYlwKOI7osb2sMtVRxqTRgO%2BMPy7DmzvrD2WuDwYs26Pgj1yNq%2FoX99AWKW9Mv0O6hPnjfE10XOyEP4U0EniUg6%2B306S6Qp0YyV9qUElVbftFSbqNjlVpP3%2BlNQfrQHG5AQgggTXNlHiDGov9MWly3nqcArs6L%2BTs%2F%2BapSLb4auIclRWpcQ4ziZmbXM99GITS%2BjqYZfbvtpQzJk%2BpkmHqkycXTo5jiFgZvPjQmO9eV7XltAzCZYBLupVK%2B%2FtL7IoN9EnWzJhil5RyEpk0kCfk9AKwbT%2BapFVXXj0xb4MVcmcTZ4jNK3i83xqpKQXXpSqfBeUZUeymZXKAs5Wdoczvqx7mUAsz3YCPYyPTGe8%2FQTrjAn0uaaljVRp1bmC2er3430ZQvxhh8FsbpReotK27sHU48iJOjQgRya50nPF33i4DCE97UAmB59TJrKbQxEuB1aSaK6t3TYV%2BjGhgQDKQrz2PQFS4B%2BrIgyze%2BbKJToqxLEO8eE4koGjuVfCxkX7AnMrMcjBlX1l7cF5Vifh5JR6Wp5kFdYiff4qJtWpXueCuVY%2Fo17Ee%2F%2FFnmZgvQHLMBHr6YqaeMlMJ7I0MQGOqUBVnf01kO0RTysttpn9UdacJesBVYMXQDBY5PixPT7eT2TDhROu%2Bm7LGV6inslYLVLLeX0b2ybShGPa9ILMzZdb%2BqyhHMCuFyjv2Uxm%2FNWH6KCTmqRetLYW90L9jEWLKze1wYffWB7KW42v2Fgdd7%2F4H3k7jX15yLPlZXRzHq%2FmBPlET%2BjwmNAo7pRVq5PWOHFw%2BtfwQvDd3lh3gEX2DnaPpnIuDNS&X-Amz-Signature=c60b4d5adb09dada04f6315a630cff77ab2c9810a35e5a467db7b208aafeb88c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK7JYPE5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDSqGE4ZPPOhn4D4ZdJ1gid0zDgI6nK2jyDgBlNN3KorAIgCv7gRJoHRnH6CDq8PVHB%2BzoRLxHYhrXwDwQ4ot8152sqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIEvzjYaJONJKP1HSrcA79MB0NRDwJZsP591vlNwzSRmqaKWnSQCD5Q6jlbXyioocDre4W2myQXDXZy2cYze%2FLocCjz6jrTnVLaXFycdA5F40t9J2nI%2FkNNvI3nF21%2FvGNUwiMrwZarPWk7co1b%2Bm9h5Xba2QruE3GcJ6%2B3sJ2H%2BxNk9MKlS%2Fe4fpGIi5WONm7WpuZinDWYGXoBzJrRWFFnhIf8Za8%2FGuncRtetlKevmFC38XInIJwHEBnKHEGOEtS9p9a92qR4tW72E4drEnfd0m884aGS30BFmq6j4nL4TnPhi9ker93h3G5a0oMcqo0r3DzeCgFLRPKzzVUa5o9cWGl7CinaQcQmfMH42Z7S2Mt%2FLBPvNBteSzuFkkKN1LpSAyOwl1QT9Nb8hpvtw9s3UM0Slb41zg%2Fc6z53%2BX%2F5tRGXWRNtOiGGBT53f1oT35nt%2BCY0bZ%2B%2BpQnSpxunsxMu2fyDkalWL38aW4JDL6KfJsiDUcc3OR6Uk4PloacDsUOWEcbUDoz4%2FnQoXLqMLOHJBgngW%2B0Y%2FoeMVoUt0LF%2Br%2BcBeSv9s5x%2F9r9EhBxVnUOc0OBXFQXIZXFQDXkasWHrTZQbj%2FcKMfuiiP%2FjwdXAc%2F4J5vAQHIM8VSoq9FWhCv%2F%2FZlbzrDdEZQ3SMIbJ0MQGOqUBVm2cEjnZQ6OxQQtB1EHn8ZkNbdiAPD1saZAFlf7Ql7V1IgCP6ryTIvc4jov7hiPGFwZXkGzNr2NwouPA9ACSohzhDijmjMt3G7dY%2BvJl80Iba816pDhAt0pSaMV6GhiGGETVCC3hqGro0rrAkO7bAvIZQzyNMTGjTFjAk2MPp4iE8nyaTmdPeoEuy%2FCBN5zEnbOkq84QKFKMVyUQPTYEfmZA6pp%2B&X-Amz-Signature=ac17c1af5661ebfd84491029d61ff2fa29b27f36d25da76e983b5c4bcb9d382d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX2ZH6HS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIDZDeZB8lVIPiwPqtDX5MDWb%2BEzkT5v7Ee42pLdWpD2hAiBYSs%2FuT3YeQEan9P0y7eM%2Fk1aZiW%2Bi%2BocPyNNiFMzoICqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPBxrnqwKHUY3AsTYKtwDD7RswEzs%2Bh2apSnYZUUqn10mO8hMl5Y1oef2uJ8bz8NtFXQnHeCtFrCJfzqQsjbi0ZuS35fydSGLs6m17rH8WQRXBLDD6Ieumi3cv%2FPQifbkloAsVRULq6zB8JQuUsv2GixUaNd0WLawfd015Q%2F5%2Bk6pTV9a7y3yHRoH9WbO4XyenbTo8TAJlwDIydKk2U6Fzc6Wy3k27jH5R78iw0pAYduRrQxdQm2yQ1X0%2BYr19i3%2FPIHVmK5PIG2FuE%2FG%2F4O%2BkNl3NbIrmEomLvqdv3xQoEIg0tYO852zLnRZQGISez62ENSDP8vL8xwFnDFtYV38yLiqNkbQsVK5rzYv5DGgs10cOzoB42KFiHzH%2FtUd94IHh%2BVhrwx24EGRYDPoIdyiHL3CZNxgRo9vLXAozTdIyEx99HL6zEMOMeINyT0zuJQFoNcYHT5kXvnCFkMXo1%2Bz6%2B%2B%2FArUd8ILdiF9AVwJP2X8jD49rD9xISs2WccMuyycpvu5D68keqJpKsyI7wp9Z755Zqli5Uk97j4oBCLTApq1KxAAzNwG6MIdJv1TYJS73aeiDJwWAiWY7G5JytWA9%2FQUWHAsn1GMFnNOsLnja9pDTgJr9gvKQz5%2Fm2yJ3M5AD%2B4y0MetGVEPrh7Aw6sjQxAY6pgGqpbC8Sw2rVuf1%2FlQc7x3%2BsVXLx8tDeNp1GlamGfT14%2FsQ9%2Bf7t8xL3D5HIjaH9AZbA0122tDxCkWO182hl6LanLgsYX6k2l1Sipi6XMtAVkRQ1WSL%2FHBzweQXVJlGB6n4rcZF%2FxG40TUu%2B4FMb8QqBFI8rTDR9v1YLQ4SzqAnONKpVB5VpOcbJG1UXNZq%2F%2B4NA1JlByQa1o%2B50FhwagLKcn0i3qpl&X-Amz-Signature=0037a677a74b3f9497b8e89872afd565e8d08be2927e7a45052e250a7fbd673d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662REOYM55%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDEKuCgd7NJmHa9HdaC4brs4hc8Artm0b9ab36%2Fg%2Bt0hwIhAKSHThy0fhdAuDSQsQ5s6y6jPn%2F%2ByLdLjW7W9dT1Y%2BFzKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUHaVjNR%2BGOdx%2F670q3AOrD0H17%2BQvxaKbqDzh%2BYR7%2F4LF7MXaUjitKxUKjLaxq7c6rdgNjnHcXqgzhN3%2F71I68CUETffVIfEHJmsnGYw1XXoRi5Xfj4q3jTkqp6mm91ADSNS5ManEkYOKIJtyuynsFHu8cQnoezHg8b0e6mkH%2B7q2zBN7gzt35Zs1RiwjXlQsWEYZtWLh4L%2FHU1PEi%2B%2Bd3LFBqsrBto48qx7JHtulptKCAu5Nkm6ljvPjaAOk1sUAIURtHn7uOZhVc%2BQeZiBYHYp5RGu5Q8JxsG2w8P83%2BBW4pHVem%2F%2BIdzFMl4WiHI3SJoAOOX23rRuuFUDywTG06tpeRQK%2BhFqqHuWY0lEE9GGY9%2Bx8m%2BRkmwqSdHn0QDZ6CInV4Savl4avKBxFHoW3Gdf8aoykyWODf3aqjvBcqJbaf1Pw%2F5wlY6ZOKhhmYf9TMq%2FSii%2BK%2BgeMS1T8IzL4NUCA1gYKxSXAJSL1ToNwb0WpM17H7h52MPczOXjBYPSkRjPJLBhmd9iME3ygQQ6rxjAPli81qiFv%2B70DH2%2B%2F2lwPoaYyBxfupwG8Wjc2kudrxb%2FKAoaFaXD57MyP8z1ENGWobF2PypXktBj5tm2W%2FTEkHhJ6oxP4ny7QhMMX36M59zo1ndLApK%2F4VTD6yNDEBjqkASyy9yjNMBIrlwu0QUVjyiYAvv8%2Bd7SdgvkGSr6uqGD1gDyFFwmSBeDZTpkJbFy7GcgnA0pHdHNJ%2BlG7bwkf1lTZtNk4jy3UxRtY0WarQsxuFIB17A4uto3TGCRZWl3xVsLGtDS%2FXnhAeL9oOXFtizeNy0MAhnLS5USDMdU%2BM8hVowqdbbVXRS0lnLjsarKffsSmxXDR6ZCRfp%2FxngwMqn4EnMFj&X-Amz-Signature=6e1d065013fb3626406d7130e13a47837b12d576ac776b7c0a62a6dd6191b720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YJLH434%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCS5zcNq%2B1EBVGklE6pYXJ6c2Mn5Upz63Q7qJK%2FxWvqGgIhAKzmv2BX2sfocGA7rMWfBetVs43Nl%2FCqppADhxrBSlGPKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW8wvBSmkwSw%2BdVfAq3AM6639843clGHp2z7QCW3k0n13pWem%2BEcg0tfU54tW0YZdSwnwVXqO0YkmMxPQyYsJNH%2B0RVyich3TCBwl9Tqa%2BnkzAeyCXJQhEmyUkvWOakgnKGJPButjbwY7CbRbUhbLgsoP1FhR1eGjDcenEbIN6WvJra7miC7FJuDURF05G6ak0atW3YqNyGH3CdO4QqBdstg6IeITUpJFPgythFNTiVrfECNifuh0TE504Sxeu6iorVoZtYgpUBZ8sp7JgwXsHiy%2FJWZoTyuftQ8Ai4apP2wskinx6j7ReXwfC%2BbCsX%2FccxIH0hGp2v9RaSotppNzESClK2BDJ83kO05PxijW9byTxFMrZ3hGTe9ofOua8SL3pchA2gR%2BRbInADbAS%2BkPGr7lgNtwtFmU7CXbcmamahscmrOZ%2BO8brZd8Onds4y3p%2F5vovODSwWrciC5QhQhmoSL%2Bfty4q5IaCbjzi%2F1wwvZIuK36DHVD09tpPc3XjQeBIs7wYzyW3Y842%2BJ6kZZzIML%2FukIu2JYcC5GH3WGdX9%2BnChquDRfsA7pJgkMXQIxkHIzJuxIHVCkCEyQ8LyUxpnj%2Bwc1nDMMOeHbeUvMJYJDT4cyiR8jZT%2F197gl4eZkP1deyJRKaw4mPDcTCHydDEBjqkAfPL1COmSpHpEyD36kMdZNVO6YOqhATir30vw%2F3OvsZCS67ILwp85uCvF5%2Bo%2FDh3Xp0Tga3yEqAgUUoNAF97Bqc92%2FYOhafPc68WwoljTi1LG4oj22PK7fPSYIsBYihn84OtrTcK%2Fv4AeVoh3xETaxK2AmhgcOySvsrEliOinXVndPucP%2BexsYDYPhkX2K6LfFgi0UfQvWUeRETQqWbx4PdyuCYB&X-Amz-Signature=7437f433c4f5affe05f4bddc3dc934b8cf3ce3e12069380d1439d15ab31c761a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIOHJS7F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIEGH0cn9rfeAQXnOeE%2F%2FbTS6joe9DBCXOAAVB%2BWFylewAiEA6TpGRmq6ltDHlHSIvaAMlif8guq6w3H0bWm3SyjZTkUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNr1qTbipjvxICSqgSrcA3wIWIfGyl5NGCDpX2Qw9xVwppATIuyY2USlJqGkPUqu2VvP0hncn3e3pDajgBrN3vhewevQINWjFcxEEdgkhds6GTjQYLhkxqASxopoMHeX8V0fYTrS0bVXvhyZmiDLdNpUsYcgLp3n1fMEHlLIF%2FdHjMr3ewhJQ8b4qW6IPuRcrdzXmGwDgnouWPB0joYLr1llGN28MHHC8P4rxy7%2Fax8QzlBn045g7Dk1pHFOKQwAmFAfKPrVdSPVd3W6TM3CKpHk9yTI7SmETFTkFGk4C65D%2FL8A9orKw0oaL7YnuQukztPa%2FmduSDenOA4VolF5SRPPJkbZXQEeV8jAnGGoDeMN4GolKVZkKgUp5frqvcO3rGayUjj1NcrkJqk3j8ojM0rXZYn3g9H9ams9pMMZaMn4%2FWvpzaCRE6Zwwswt9Mni5U9yieK4yzJ3ZyqvPXv8fdJJNwy5FzkvOANRFWYQ8rWFR0Aui58ErZcVKSUDrgtWtMlZsNZX%2BLhFGoK0YXo%2BnDpMmCVlx8QBBhRVjufYqCIhQBe5vuO5d6P9XT1qrtEMaC%2FLHDxGUkmPaZD7v2ARFvQNhF%2FR4Io0DBJw7Bl2pkqLJa2z0BUqcte0EA2WZJka%2F5GIp%2Bb%2BnxShT47lMOXI0MQGOqUBsLqGXTreF63HBdcY2ToatDkhqavB7ualBpGLI0dT84eBH8FqrMaZiTxnOhcM%2BR%2BzsBiFtHBo%2BoI8mkSuxGc28c%2F4zt6pKX%2FbMZIPYRuf76ZMvapAlKACo3oAB11Tc2ueq2QLyLbrkRsLAzAIfUxJpTcY9lFlWLaWjOpRU4A6DgzA9l2aRFLPbEE0jWzBhsLsSLDb%2FgzQ8gmAKC9lblrcUiZcePh3&X-Amz-Signature=960b4a8e28587cc5ddcd5309de2b5ff15f6f59234900d3d6e65d3aaf36fe5676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDC7U2P6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIDjLBymmrteDKWa2vDnYVvJ4h4pqD51e0TgPiys0ABw%2BAiB94w6ere1lxMO5e%2BISiUdKk01d5NyL7DVwtGwPvAVRjyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F8%2BRGreV2vS9jjGlKtwD%2FIIGO0Q7Tv8XAJJCZwfxWFWNvvxKhAz4ysvUmmoXgsUFWTt9cvLFcRXHv9gZacAk%2Bkk2AH03GcvqXTt21BDODZ1nDHyS8nANcN6o8fbCsfCAoVaL92X6ZavUK8fCZVCsOxC2cOLYcXaBb8LTFgS1n6xt0suP6ZN3E8X4FlntxvqDPbE0ziqhaAZp8uDRih%2FlZckLwpuLizy0FB2hzs5QlzJnYVGU76Q2nk%2BoCF8NPsSw78y03%2FrRYaaxXvKo6oiaKxPou%2FjwUohQ553pM8WJVf%2BW4CfQ409MrR7fnHapJ3uLKEEskofbkh9CbVa9vsibV%2BOF9EV%2BJLwPaR%2FtVdLP7%2B6D2JRIZrurIXQoMixtF4su1BfIO9gqG9uFEpkNNpclX2Dhe1Yo7qwjdyanHIi4zkyWAYimnOu08Di69whVq2Mskqsqp4jqC4NwvplCJLkDfP4cf4wBjPNWWHTtOooOyW%2BH%2Bm38aY%2Bbl2Yx6iNpZWh%2FynVaCgLKijiLR6Br%2FY%2Fg9FRF%2BPxm4EwQ9DHZOQsh96axDJCo6Dd6ZraNzg%2BmwxY16WHVr1K5VpsYeSSF1smuoH9a6EbJooDN32kpkl2N2Ho9fbI8jmc0l25QVvL2i7%2F4QBqwttjVyrFiBNsw9MjQxAY6pgGMSkpAZ5zsax5%2BHVCn%2FWZy46iGkQ38SoNGdc032sGLus7lDNXIse6jV5mUmKYtooj9dTubRZ67I%2BV5a91qMseJM5LMMdcpjDCyaZ6rEoepUnHtO1NGXuPaa%2B2r8tg8G4%2FkHo36s%2FaoK941bc%2FJwIPo8GUX8pVicWxZEpxmwd0kExhKw5yriFMjFCAFnjdVgWuSNmRFAmo4rKts7PIDWg8NAvYqkGJT&X-Amz-Signature=372232b496a9132a0262320d868fc8ff57e6c746fd689f28d41009f9e41c94b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK7JYPE5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDSqGE4ZPPOhn4D4ZdJ1gid0zDgI6nK2jyDgBlNN3KorAIgCv7gRJoHRnH6CDq8PVHB%2BzoRLxHYhrXwDwQ4ot8152sqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIEvzjYaJONJKP1HSrcA79MB0NRDwJZsP591vlNwzSRmqaKWnSQCD5Q6jlbXyioocDre4W2myQXDXZy2cYze%2FLocCjz6jrTnVLaXFycdA5F40t9J2nI%2FkNNvI3nF21%2FvGNUwiMrwZarPWk7co1b%2Bm9h5Xba2QruE3GcJ6%2B3sJ2H%2BxNk9MKlS%2Fe4fpGIi5WONm7WpuZinDWYGXoBzJrRWFFnhIf8Za8%2FGuncRtetlKevmFC38XInIJwHEBnKHEGOEtS9p9a92qR4tW72E4drEnfd0m884aGS30BFmq6j4nL4TnPhi9ker93h3G5a0oMcqo0r3DzeCgFLRPKzzVUa5o9cWGl7CinaQcQmfMH42Z7S2Mt%2FLBPvNBteSzuFkkKN1LpSAyOwl1QT9Nb8hpvtw9s3UM0Slb41zg%2Fc6z53%2BX%2F5tRGXWRNtOiGGBT53f1oT35nt%2BCY0bZ%2B%2BpQnSpxunsxMu2fyDkalWL38aW4JDL6KfJsiDUcc3OR6Uk4PloacDsUOWEcbUDoz4%2FnQoXLqMLOHJBgngW%2B0Y%2FoeMVoUt0LF%2Br%2BcBeSv9s5x%2F9r9EhBxVnUOc0OBXFQXIZXFQDXkasWHrTZQbj%2FcKMfuiiP%2FjwdXAc%2F4J5vAQHIM8VSoq9FWhCv%2F%2FZlbzrDdEZQ3SMIbJ0MQGOqUBVm2cEjnZQ6OxQQtB1EHn8ZkNbdiAPD1saZAFlf7Ql7V1IgCP6ryTIvc4jov7hiPGFwZXkGzNr2NwouPA9ACSohzhDijmjMt3G7dY%2BvJl80Iba816pDhAt0pSaMV6GhiGGETVCC3hqGro0rrAkO7bAvIZQzyNMTGjTFjAk2MPp4iE8nyaTmdPeoEuy%2FCBN5zEnbOkq84QKFKMVyUQPTYEfmZA6pp%2B&X-Amz-Signature=746d3b3e917e78da72bc229552c7f91a8cbd182fb6eb42454c1c59b8644c0a91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK7JYPE5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDSqGE4ZPPOhn4D4ZdJ1gid0zDgI6nK2jyDgBlNN3KorAIgCv7gRJoHRnH6CDq8PVHB%2BzoRLxHYhrXwDwQ4ot8152sqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIEvzjYaJONJKP1HSrcA79MB0NRDwJZsP591vlNwzSRmqaKWnSQCD5Q6jlbXyioocDre4W2myQXDXZy2cYze%2FLocCjz6jrTnVLaXFycdA5F40t9J2nI%2FkNNvI3nF21%2FvGNUwiMrwZarPWk7co1b%2Bm9h5Xba2QruE3GcJ6%2B3sJ2H%2BxNk9MKlS%2Fe4fpGIi5WONm7WpuZinDWYGXoBzJrRWFFnhIf8Za8%2FGuncRtetlKevmFC38XInIJwHEBnKHEGOEtS9p9a92qR4tW72E4drEnfd0m884aGS30BFmq6j4nL4TnPhi9ker93h3G5a0oMcqo0r3DzeCgFLRPKzzVUa5o9cWGl7CinaQcQmfMH42Z7S2Mt%2FLBPvNBteSzuFkkKN1LpSAyOwl1QT9Nb8hpvtw9s3UM0Slb41zg%2Fc6z53%2BX%2F5tRGXWRNtOiGGBT53f1oT35nt%2BCY0bZ%2B%2BpQnSpxunsxMu2fyDkalWL38aW4JDL6KfJsiDUcc3OR6Uk4PloacDsUOWEcbUDoz4%2FnQoXLqMLOHJBgngW%2B0Y%2FoeMVoUt0LF%2Br%2BcBeSv9s5x%2F9r9EhBxVnUOc0OBXFQXIZXFQDXkasWHrTZQbj%2FcKMfuiiP%2FjwdXAc%2F4J5vAQHIM8VSoq9FWhCv%2F%2FZlbzrDdEZQ3SMIbJ0MQGOqUBVm2cEjnZQ6OxQQtB1EHn8ZkNbdiAPD1saZAFlf7Ql7V1IgCP6ryTIvc4jov7hiPGFwZXkGzNr2NwouPA9ACSohzhDijmjMt3G7dY%2BvJl80Iba816pDhAt0pSaMV6GhiGGETVCC3hqGro0rrAkO7bAvIZQzyNMTGjTFjAk2MPp4iE8nyaTmdPeoEuy%2FCBN5zEnbOkq84QKFKMVyUQPTYEfmZA6pp%2B&X-Amz-Signature=c835a6d99a0194402a4663432b435914c25855fd288509dd24e2aed6850ac549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657L6JRDI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDGHdFLBd9SRXkUpy7pkuKCZsxELzhI5KwZ5MF3DLFRXwIhAIddz9egZcYbDxOi%2FvcM96edKf%2BjPIAzgamnD7XKuSZxKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFqI42t4wenY6yDEMq3APhvzdDhrG8l4ndVODPcjbUsTaafFE6cbMWwuo0MWmF3EBWV8MBTzhRByTE94rnH1VuQAE9C9%2B0p1kSEqjTArc96eqjrfCs%2Fy18yUaICImU8LTvbRunIVMW7AalI%2FD84CvwH0HyVMsa7Zqk%2FoIuD486hRAseG8rki9%2B4gtYJrBa63WQTag4Tl6tNWAOvE1J58s5BiStLFZCqpRc1%2FfH1AmasPiwZn8kD06UYFYbjiwFQIGhypmQZ%2F%2FbMjQwKaPwXoow%2BH0JeM1%2BzyZnAKsJ4Fk8%2FWhPP79QxkCSdT5UO3pxW7tGF2%2BBkeIgrcwZtyGLcLC7Y6i58iDWxbPaEC8vliANrCkuyE0pjawbkr5xiOim9oVQp881qS0hUMWbskxjY1v8c6A%2B%2Bgprzz%2FzGVrXT2ArT880bKQlGlCN7uG%2Fx4SL7kbu%2Be2YQFdmuttagrJ6n5AOPt3g%2FCbc9JviQ16WegX7fQ64WOMsyIIDBFA73qraACuWfZtVbJCvCqzev2s2BDiJnK%2F0rQi8WphHyV9iLClkln%2FIROgBs0bwyqf%2F4s%2FtHR0gfcpNXplisLEjJ4gcxeI4v7q4x6NEXKoFMs9Ks0H6V8utdoI4dxkqkqYv6njhdZHXva2qkMEWrmrhgjDEyNDEBjqkAeXa%2FrAJS3YiPx%2BrojnsifodtySuxO%2BzQcz2xVgXObVlS3R0l3BPRXpGCa8n3NaIAGsUNNXRdKrxFyCiGLNqXyiE8fn8PJubOxm5tgNDVgLbUd15LRoz5Yk79HNuRUHp%2BsZ1Jtk2jg7Vf5GLHhgFl524t1AWzEwzJfMkN0h0st4XFFV7VskOjVYiYu7xX9ABln3deu6uUJJbCzghnUoOv6HZ6Qht&X-Amz-Signature=d0ffd37d0f978cd39081f0bc002ae552a1a6a05cfcc5b2700113992a0d5ffc39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657L6JRDI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDGHdFLBd9SRXkUpy7pkuKCZsxELzhI5KwZ5MF3DLFRXwIhAIddz9egZcYbDxOi%2FvcM96edKf%2BjPIAzgamnD7XKuSZxKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFqI42t4wenY6yDEMq3APhvzdDhrG8l4ndVODPcjbUsTaafFE6cbMWwuo0MWmF3EBWV8MBTzhRByTE94rnH1VuQAE9C9%2B0p1kSEqjTArc96eqjrfCs%2Fy18yUaICImU8LTvbRunIVMW7AalI%2FD84CvwH0HyVMsa7Zqk%2FoIuD486hRAseG8rki9%2B4gtYJrBa63WQTag4Tl6tNWAOvE1J58s5BiStLFZCqpRc1%2FfH1AmasPiwZn8kD06UYFYbjiwFQIGhypmQZ%2F%2FbMjQwKaPwXoow%2BH0JeM1%2BzyZnAKsJ4Fk8%2FWhPP79QxkCSdT5UO3pxW7tGF2%2BBkeIgrcwZtyGLcLC7Y6i58iDWxbPaEC8vliANrCkuyE0pjawbkr5xiOim9oVQp881qS0hUMWbskxjY1v8c6A%2B%2Bgprzz%2FzGVrXT2ArT880bKQlGlCN7uG%2Fx4SL7kbu%2Be2YQFdmuttagrJ6n5AOPt3g%2FCbc9JviQ16WegX7fQ64WOMsyIIDBFA73qraACuWfZtVbJCvCqzev2s2BDiJnK%2F0rQi8WphHyV9iLClkln%2FIROgBs0bwyqf%2F4s%2FtHR0gfcpNXplisLEjJ4gcxeI4v7q4x6NEXKoFMs9Ks0H6V8utdoI4dxkqkqYv6njhdZHXva2qkMEWrmrhgjDEyNDEBjqkAeXa%2FrAJS3YiPx%2BrojnsifodtySuxO%2BzQcz2xVgXObVlS3R0l3BPRXpGCa8n3NaIAGsUNNXRdKrxFyCiGLNqXyiE8fn8PJubOxm5tgNDVgLbUd15LRoz5Yk79HNuRUHp%2BsZ1Jtk2jg7Vf5GLHhgFl524t1AWzEwzJfMkN0h0st4XFFV7VskOjVYiYu7xX9ABln3deu6uUJJbCzghnUoOv6HZ6Qht&X-Amz-Signature=f6c0acf38641651c1f0328621a30eee2004b5b40478b9e57f7092d41dfa5de90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657L6JRDI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDGHdFLBd9SRXkUpy7pkuKCZsxELzhI5KwZ5MF3DLFRXwIhAIddz9egZcYbDxOi%2FvcM96edKf%2BjPIAzgamnD7XKuSZxKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFqI42t4wenY6yDEMq3APhvzdDhrG8l4ndVODPcjbUsTaafFE6cbMWwuo0MWmF3EBWV8MBTzhRByTE94rnH1VuQAE9C9%2B0p1kSEqjTArc96eqjrfCs%2Fy18yUaICImU8LTvbRunIVMW7AalI%2FD84CvwH0HyVMsa7Zqk%2FoIuD486hRAseG8rki9%2B4gtYJrBa63WQTag4Tl6tNWAOvE1J58s5BiStLFZCqpRc1%2FfH1AmasPiwZn8kD06UYFYbjiwFQIGhypmQZ%2F%2FbMjQwKaPwXoow%2BH0JeM1%2BzyZnAKsJ4Fk8%2FWhPP79QxkCSdT5UO3pxW7tGF2%2BBkeIgrcwZtyGLcLC7Y6i58iDWxbPaEC8vliANrCkuyE0pjawbkr5xiOim9oVQp881qS0hUMWbskxjY1v8c6A%2B%2Bgprzz%2FzGVrXT2ArT880bKQlGlCN7uG%2Fx4SL7kbu%2Be2YQFdmuttagrJ6n5AOPt3g%2FCbc9JviQ16WegX7fQ64WOMsyIIDBFA73qraACuWfZtVbJCvCqzev2s2BDiJnK%2F0rQi8WphHyV9iLClkln%2FIROgBs0bwyqf%2F4s%2FtHR0gfcpNXplisLEjJ4gcxeI4v7q4x6NEXKoFMs9Ks0H6V8utdoI4dxkqkqYv6njhdZHXva2qkMEWrmrhgjDEyNDEBjqkAeXa%2FrAJS3YiPx%2BrojnsifodtySuxO%2BzQcz2xVgXObVlS3R0l3BPRXpGCa8n3NaIAGsUNNXRdKrxFyCiGLNqXyiE8fn8PJubOxm5tgNDVgLbUd15LRoz5Yk79HNuRUHp%2BsZ1Jtk2jg7Vf5GLHhgFl524t1AWzEwzJfMkN0h0st4XFFV7VskOjVYiYu7xX9ABln3deu6uUJJbCzghnUoOv6HZ6Qht&X-Amz-Signature=8d2259bd0707dee20ca7a0fb874cdf66675d4ccba575df9c1e13b2dec1ef1436&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657L6JRDI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDGHdFLBd9SRXkUpy7pkuKCZsxELzhI5KwZ5MF3DLFRXwIhAIddz9egZcYbDxOi%2FvcM96edKf%2BjPIAzgamnD7XKuSZxKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFqI42t4wenY6yDEMq3APhvzdDhrG8l4ndVODPcjbUsTaafFE6cbMWwuo0MWmF3EBWV8MBTzhRByTE94rnH1VuQAE9C9%2B0p1kSEqjTArc96eqjrfCs%2Fy18yUaICImU8LTvbRunIVMW7AalI%2FD84CvwH0HyVMsa7Zqk%2FoIuD486hRAseG8rki9%2B4gtYJrBa63WQTag4Tl6tNWAOvE1J58s5BiStLFZCqpRc1%2FfH1AmasPiwZn8kD06UYFYbjiwFQIGhypmQZ%2F%2FbMjQwKaPwXoow%2BH0JeM1%2BzyZnAKsJ4Fk8%2FWhPP79QxkCSdT5UO3pxW7tGF2%2BBkeIgrcwZtyGLcLC7Y6i58iDWxbPaEC8vliANrCkuyE0pjawbkr5xiOim9oVQp881qS0hUMWbskxjY1v8c6A%2B%2Bgprzz%2FzGVrXT2ArT880bKQlGlCN7uG%2Fx4SL7kbu%2Be2YQFdmuttagrJ6n5AOPt3g%2FCbc9JviQ16WegX7fQ64WOMsyIIDBFA73qraACuWfZtVbJCvCqzev2s2BDiJnK%2F0rQi8WphHyV9iLClkln%2FIROgBs0bwyqf%2F4s%2FtHR0gfcpNXplisLEjJ4gcxeI4v7q4x6NEXKoFMs9Ks0H6V8utdoI4dxkqkqYv6njhdZHXva2qkMEWrmrhgjDEyNDEBjqkAeXa%2FrAJS3YiPx%2BrojnsifodtySuxO%2BzQcz2xVgXObVlS3R0l3BPRXpGCa8n3NaIAGsUNNXRdKrxFyCiGLNqXyiE8fn8PJubOxm5tgNDVgLbUd15LRoz5Yk79HNuRUHp%2BsZ1Jtk2jg7Vf5GLHhgFl524t1AWzEwzJfMkN0h0st4XFFV7VskOjVYiYu7xX9ABln3deu6uUJJbCzghnUoOv6HZ6Qht&X-Amz-Signature=b4ab43343d1a9a7d850d9c16101f17edc16dda7d85b6035aa87a61d1461e15b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657L6JRDI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDGHdFLBd9SRXkUpy7pkuKCZsxELzhI5KwZ5MF3DLFRXwIhAIddz9egZcYbDxOi%2FvcM96edKf%2BjPIAzgamnD7XKuSZxKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFqI42t4wenY6yDEMq3APhvzdDhrG8l4ndVODPcjbUsTaafFE6cbMWwuo0MWmF3EBWV8MBTzhRByTE94rnH1VuQAE9C9%2B0p1kSEqjTArc96eqjrfCs%2Fy18yUaICImU8LTvbRunIVMW7AalI%2FD84CvwH0HyVMsa7Zqk%2FoIuD486hRAseG8rki9%2B4gtYJrBa63WQTag4Tl6tNWAOvE1J58s5BiStLFZCqpRc1%2FfH1AmasPiwZn8kD06UYFYbjiwFQIGhypmQZ%2F%2FbMjQwKaPwXoow%2BH0JeM1%2BzyZnAKsJ4Fk8%2FWhPP79QxkCSdT5UO3pxW7tGF2%2BBkeIgrcwZtyGLcLC7Y6i58iDWxbPaEC8vliANrCkuyE0pjawbkr5xiOim9oVQp881qS0hUMWbskxjY1v8c6A%2B%2Bgprzz%2FzGVrXT2ArT880bKQlGlCN7uG%2Fx4SL7kbu%2Be2YQFdmuttagrJ6n5AOPt3g%2FCbc9JviQ16WegX7fQ64WOMsyIIDBFA73qraACuWfZtVbJCvCqzev2s2BDiJnK%2F0rQi8WphHyV9iLClkln%2FIROgBs0bwyqf%2F4s%2FtHR0gfcpNXplisLEjJ4gcxeI4v7q4x6NEXKoFMs9Ks0H6V8utdoI4dxkqkqYv6njhdZHXva2qkMEWrmrhgjDEyNDEBjqkAeXa%2FrAJS3YiPx%2BrojnsifodtySuxO%2BzQcz2xVgXObVlS3R0l3BPRXpGCa8n3NaIAGsUNNXRdKrxFyCiGLNqXyiE8fn8PJubOxm5tgNDVgLbUd15LRoz5Yk79HNuRUHp%2BsZ1Jtk2jg7Vf5GLHhgFl524t1AWzEwzJfMkN0h0st4XFFV7VskOjVYiYu7xX9ABln3deu6uUJJbCzghnUoOv6HZ6Qht&X-Amz-Signature=1bdbaeecff289002543eda4cb76bd8c7cbed4e22a0068e010cbef44f8f17eb17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657L6JRDI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDGHdFLBd9SRXkUpy7pkuKCZsxELzhI5KwZ5MF3DLFRXwIhAIddz9egZcYbDxOi%2FvcM96edKf%2BjPIAzgamnD7XKuSZxKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFqI42t4wenY6yDEMq3APhvzdDhrG8l4ndVODPcjbUsTaafFE6cbMWwuo0MWmF3EBWV8MBTzhRByTE94rnH1VuQAE9C9%2B0p1kSEqjTArc96eqjrfCs%2Fy18yUaICImU8LTvbRunIVMW7AalI%2FD84CvwH0HyVMsa7Zqk%2FoIuD486hRAseG8rki9%2B4gtYJrBa63WQTag4Tl6tNWAOvE1J58s5BiStLFZCqpRc1%2FfH1AmasPiwZn8kD06UYFYbjiwFQIGhypmQZ%2F%2FbMjQwKaPwXoow%2BH0JeM1%2BzyZnAKsJ4Fk8%2FWhPP79QxkCSdT5UO3pxW7tGF2%2BBkeIgrcwZtyGLcLC7Y6i58iDWxbPaEC8vliANrCkuyE0pjawbkr5xiOim9oVQp881qS0hUMWbskxjY1v8c6A%2B%2Bgprzz%2FzGVrXT2ArT880bKQlGlCN7uG%2Fx4SL7kbu%2Be2YQFdmuttagrJ6n5AOPt3g%2FCbc9JviQ16WegX7fQ64WOMsyIIDBFA73qraACuWfZtVbJCvCqzev2s2BDiJnK%2F0rQi8WphHyV9iLClkln%2FIROgBs0bwyqf%2F4s%2FtHR0gfcpNXplisLEjJ4gcxeI4v7q4x6NEXKoFMs9Ks0H6V8utdoI4dxkqkqYv6njhdZHXva2qkMEWrmrhgjDEyNDEBjqkAeXa%2FrAJS3YiPx%2BrojnsifodtySuxO%2BzQcz2xVgXObVlS3R0l3BPRXpGCa8n3NaIAGsUNNXRdKrxFyCiGLNqXyiE8fn8PJubOxm5tgNDVgLbUd15LRoz5Yk79HNuRUHp%2BsZ1Jtk2jg7Vf5GLHhgFl524t1AWzEwzJfMkN0h0st4XFFV7VskOjVYiYu7xX9ABln3deu6uUJJbCzghnUoOv6HZ6Qht&X-Amz-Signature=e141df0f96f84d75771dff1d4f57230dd31f6ce6aa91a2f120bd17824bd72a13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657L6JRDI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDGHdFLBd9SRXkUpy7pkuKCZsxELzhI5KwZ5MF3DLFRXwIhAIddz9egZcYbDxOi%2FvcM96edKf%2BjPIAzgamnD7XKuSZxKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFqI42t4wenY6yDEMq3APhvzdDhrG8l4ndVODPcjbUsTaafFE6cbMWwuo0MWmF3EBWV8MBTzhRByTE94rnH1VuQAE9C9%2B0p1kSEqjTArc96eqjrfCs%2Fy18yUaICImU8LTvbRunIVMW7AalI%2FD84CvwH0HyVMsa7Zqk%2FoIuD486hRAseG8rki9%2B4gtYJrBa63WQTag4Tl6tNWAOvE1J58s5BiStLFZCqpRc1%2FfH1AmasPiwZn8kD06UYFYbjiwFQIGhypmQZ%2F%2FbMjQwKaPwXoow%2BH0JeM1%2BzyZnAKsJ4Fk8%2FWhPP79QxkCSdT5UO3pxW7tGF2%2BBkeIgrcwZtyGLcLC7Y6i58iDWxbPaEC8vliANrCkuyE0pjawbkr5xiOim9oVQp881qS0hUMWbskxjY1v8c6A%2B%2Bgprzz%2FzGVrXT2ArT880bKQlGlCN7uG%2Fx4SL7kbu%2Be2YQFdmuttagrJ6n5AOPt3g%2FCbc9JviQ16WegX7fQ64WOMsyIIDBFA73qraACuWfZtVbJCvCqzev2s2BDiJnK%2F0rQi8WphHyV9iLClkln%2FIROgBs0bwyqf%2F4s%2FtHR0gfcpNXplisLEjJ4gcxeI4v7q4x6NEXKoFMs9Ks0H6V8utdoI4dxkqkqYv6njhdZHXva2qkMEWrmrhgjDEyNDEBjqkAeXa%2FrAJS3YiPx%2BrojnsifodtySuxO%2BzQcz2xVgXObVlS3R0l3BPRXpGCa8n3NaIAGsUNNXRdKrxFyCiGLNqXyiE8fn8PJubOxm5tgNDVgLbUd15LRoz5Yk79HNuRUHp%2BsZ1Jtk2jg7Vf5GLHhgFl524t1AWzEwzJfMkN0h0st4XFFV7VskOjVYiYu7xX9ABln3deu6uUJJbCzghnUoOv6HZ6Qht&X-Amz-Signature=8d2259bd0707dee20ca7a0fb874cdf66675d4ccba575df9c1e13b2dec1ef1436&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657L6JRDI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDGHdFLBd9SRXkUpy7pkuKCZsxELzhI5KwZ5MF3DLFRXwIhAIddz9egZcYbDxOi%2FvcM96edKf%2BjPIAzgamnD7XKuSZxKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFqI42t4wenY6yDEMq3APhvzdDhrG8l4ndVODPcjbUsTaafFE6cbMWwuo0MWmF3EBWV8MBTzhRByTE94rnH1VuQAE9C9%2B0p1kSEqjTArc96eqjrfCs%2Fy18yUaICImU8LTvbRunIVMW7AalI%2FD84CvwH0HyVMsa7Zqk%2FoIuD486hRAseG8rki9%2B4gtYJrBa63WQTag4Tl6tNWAOvE1J58s5BiStLFZCqpRc1%2FfH1AmasPiwZn8kD06UYFYbjiwFQIGhypmQZ%2F%2FbMjQwKaPwXoow%2BH0JeM1%2BzyZnAKsJ4Fk8%2FWhPP79QxkCSdT5UO3pxW7tGF2%2BBkeIgrcwZtyGLcLC7Y6i58iDWxbPaEC8vliANrCkuyE0pjawbkr5xiOim9oVQp881qS0hUMWbskxjY1v8c6A%2B%2Bgprzz%2FzGVrXT2ArT880bKQlGlCN7uG%2Fx4SL7kbu%2Be2YQFdmuttagrJ6n5AOPt3g%2FCbc9JviQ16WegX7fQ64WOMsyIIDBFA73qraACuWfZtVbJCvCqzev2s2BDiJnK%2F0rQi8WphHyV9iLClkln%2FIROgBs0bwyqf%2F4s%2FtHR0gfcpNXplisLEjJ4gcxeI4v7q4x6NEXKoFMs9Ks0H6V8utdoI4dxkqkqYv6njhdZHXva2qkMEWrmrhgjDEyNDEBjqkAeXa%2FrAJS3YiPx%2BrojnsifodtySuxO%2BzQcz2xVgXObVlS3R0l3BPRXpGCa8n3NaIAGsUNNXRdKrxFyCiGLNqXyiE8fn8PJubOxm5tgNDVgLbUd15LRoz5Yk79HNuRUHp%2BsZ1Jtk2jg7Vf5GLHhgFl524t1AWzEwzJfMkN0h0st4XFFV7VskOjVYiYu7xX9ABln3deu6uUJJbCzghnUoOv6HZ6Qht&X-Amz-Signature=294a3d35e7f6948ac7ad7b432430bc5ee301bbe55a4001ac91b873201a907f28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657L6JRDI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDGHdFLBd9SRXkUpy7pkuKCZsxELzhI5KwZ5MF3DLFRXwIhAIddz9egZcYbDxOi%2FvcM96edKf%2BjPIAzgamnD7XKuSZxKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFqI42t4wenY6yDEMq3APhvzdDhrG8l4ndVODPcjbUsTaafFE6cbMWwuo0MWmF3EBWV8MBTzhRByTE94rnH1VuQAE9C9%2B0p1kSEqjTArc96eqjrfCs%2Fy18yUaICImU8LTvbRunIVMW7AalI%2FD84CvwH0HyVMsa7Zqk%2FoIuD486hRAseG8rki9%2B4gtYJrBa63WQTag4Tl6tNWAOvE1J58s5BiStLFZCqpRc1%2FfH1AmasPiwZn8kD06UYFYbjiwFQIGhypmQZ%2F%2FbMjQwKaPwXoow%2BH0JeM1%2BzyZnAKsJ4Fk8%2FWhPP79QxkCSdT5UO3pxW7tGF2%2BBkeIgrcwZtyGLcLC7Y6i58iDWxbPaEC8vliANrCkuyE0pjawbkr5xiOim9oVQp881qS0hUMWbskxjY1v8c6A%2B%2Bgprzz%2FzGVrXT2ArT880bKQlGlCN7uG%2Fx4SL7kbu%2Be2YQFdmuttagrJ6n5AOPt3g%2FCbc9JviQ16WegX7fQ64WOMsyIIDBFA73qraACuWfZtVbJCvCqzev2s2BDiJnK%2F0rQi8WphHyV9iLClkln%2FIROgBs0bwyqf%2F4s%2FtHR0gfcpNXplisLEjJ4gcxeI4v7q4x6NEXKoFMs9Ks0H6V8utdoI4dxkqkqYv6njhdZHXva2qkMEWrmrhgjDEyNDEBjqkAeXa%2FrAJS3YiPx%2BrojnsifodtySuxO%2BzQcz2xVgXObVlS3R0l3BPRXpGCa8n3NaIAGsUNNXRdKrxFyCiGLNqXyiE8fn8PJubOxm5tgNDVgLbUd15LRoz5Yk79HNuRUHp%2BsZ1Jtk2jg7Vf5GLHhgFl524t1AWzEwzJfMkN0h0st4XFFV7VskOjVYiYu7xX9ABln3deu6uUJJbCzghnUoOv6HZ6Qht&X-Amz-Signature=d80b93e890dea77fc17c6ebeb46b38a9d85910430e322aeefef051ef41989e7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657L6JRDI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDGHdFLBd9SRXkUpy7pkuKCZsxELzhI5KwZ5MF3DLFRXwIhAIddz9egZcYbDxOi%2FvcM96edKf%2BjPIAzgamnD7XKuSZxKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFqI42t4wenY6yDEMq3APhvzdDhrG8l4ndVODPcjbUsTaafFE6cbMWwuo0MWmF3EBWV8MBTzhRByTE94rnH1VuQAE9C9%2B0p1kSEqjTArc96eqjrfCs%2Fy18yUaICImU8LTvbRunIVMW7AalI%2FD84CvwH0HyVMsa7Zqk%2FoIuD486hRAseG8rki9%2B4gtYJrBa63WQTag4Tl6tNWAOvE1J58s5BiStLFZCqpRc1%2FfH1AmasPiwZn8kD06UYFYbjiwFQIGhypmQZ%2F%2FbMjQwKaPwXoow%2BH0JeM1%2BzyZnAKsJ4Fk8%2FWhPP79QxkCSdT5UO3pxW7tGF2%2BBkeIgrcwZtyGLcLC7Y6i58iDWxbPaEC8vliANrCkuyE0pjawbkr5xiOim9oVQp881qS0hUMWbskxjY1v8c6A%2B%2Bgprzz%2FzGVrXT2ArT880bKQlGlCN7uG%2Fx4SL7kbu%2Be2YQFdmuttagrJ6n5AOPt3g%2FCbc9JviQ16WegX7fQ64WOMsyIIDBFA73qraACuWfZtVbJCvCqzev2s2BDiJnK%2F0rQi8WphHyV9iLClkln%2FIROgBs0bwyqf%2F4s%2FtHR0gfcpNXplisLEjJ4gcxeI4v7q4x6NEXKoFMs9Ks0H6V8utdoI4dxkqkqYv6njhdZHXva2qkMEWrmrhgjDEyNDEBjqkAeXa%2FrAJS3YiPx%2BrojnsifodtySuxO%2BzQcz2xVgXObVlS3R0l3BPRXpGCa8n3NaIAGsUNNXRdKrxFyCiGLNqXyiE8fn8PJubOxm5tgNDVgLbUd15LRoz5Yk79HNuRUHp%2BsZ1Jtk2jg7Vf5GLHhgFl524t1AWzEwzJfMkN0h0st4XFFV7VskOjVYiYu7xX9ABln3deu6uUJJbCzghnUoOv6HZ6Qht&X-Amz-Signature=64423df1bbd6f686825abd457761f8f127f475d225e42324eb19cfbd6ea55b44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
