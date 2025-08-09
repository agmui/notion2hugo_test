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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652BAZV5S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGv19cmEv%2FHYjHgfyn0yQrB%2BY6sNXrZmEERPfGXuGiAAAiEAmaNlrEfCz8IUNnKWo2cPAsKFTjafqqBxRhRzQjFmG%2FkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0uTQfRAoG03ruziCrcA3oXjiKi37i9v%2FGc2QkfZDkW3FVmIv%2FGPu%2Bpq7T2kEsVGNPR6hEaLtqQyt%2F1MRLYSGFSCcWpzpJVODy8lcIZDcU1zVoZTc14swIATky8v2Lggzsy3UfsQqo4O7Sh6rrpOnn%2BA388d4cUNykDlFahvEjyGsTfggm3l9mFWc9ULsFt%2BJ5eefvnOnU6tKzPOkcqTC3tl9dxzlySLzVpn5CrjWZRRzD4VYWaHxvJKqzG42TGTcTuvdASKV5%2BMgPgpKpJ7%2BpkyV6udQDXPxqQNesuyEcH%2Fjgfk5n4%2F0PKCBrRQUiXqV5kM80PkmXRpUmVs9geZxVjdxRm2Ho4iQrMM%2Bi5zSSKgVDmvDaqgb9v%2BuF%2BETBqQKvfKczNoxTEdgraCdztS%2FtpcXiNX2bnZnP0Rw2t26PtGlP876O8Jyd2EqmZzdNiMZL4FzbDbdsaLCMPhtPlpdbi%2F7uTDGLB%2B8hYbH2r8P3g8OMhznTXsQOsxU4k69Pe3GhgkQp%2B8ELvZbi9eaYZ7aQt5%2BwaUA6PxiNeUApmZBLFMsCFSDoYbzER8ustD6tHohmFOX21F8a7sOfdFYDU6Uk8KVfU%2B2ZqLynzhQQ2u%2FzjzvOcc3FXpBhwMi9YQc7QHntg4gXa%2BEH%2FzNULMKTK28QGOqUB0gfu3YHRfBQ0Z8kgFvjq9vF3ioFPjgFACE%2BZgFOPZYj91jCG%2FJ82RS2QwUMxxiXi0Zmj2rSBX3wahX8TCgb%2Fo5m6eO4QJtiu1x%2BLnddmthtvCXWozGKUTHggLYXUL3aXdBEToaeg0gQVPAad0RwMDl8hCvEXXQY2ftwx6x9AaKfKwEeeXK1Gjqrpk%2BS4%2FoZEm4PFWI%2FUi4Gg2lrCM0%2FNPUQexQPg&X-Amz-Signature=76a4ef06da6e025383f2f16b3fc2d2514421fac952d5badf4d8711ab85c2fc7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652BAZV5S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGv19cmEv%2FHYjHgfyn0yQrB%2BY6sNXrZmEERPfGXuGiAAAiEAmaNlrEfCz8IUNnKWo2cPAsKFTjafqqBxRhRzQjFmG%2FkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0uTQfRAoG03ruziCrcA3oXjiKi37i9v%2FGc2QkfZDkW3FVmIv%2FGPu%2Bpq7T2kEsVGNPR6hEaLtqQyt%2F1MRLYSGFSCcWpzpJVODy8lcIZDcU1zVoZTc14swIATky8v2Lggzsy3UfsQqo4O7Sh6rrpOnn%2BA388d4cUNykDlFahvEjyGsTfggm3l9mFWc9ULsFt%2BJ5eefvnOnU6tKzPOkcqTC3tl9dxzlySLzVpn5CrjWZRRzD4VYWaHxvJKqzG42TGTcTuvdASKV5%2BMgPgpKpJ7%2BpkyV6udQDXPxqQNesuyEcH%2Fjgfk5n4%2F0PKCBrRQUiXqV5kM80PkmXRpUmVs9geZxVjdxRm2Ho4iQrMM%2Bi5zSSKgVDmvDaqgb9v%2BuF%2BETBqQKvfKczNoxTEdgraCdztS%2FtpcXiNX2bnZnP0Rw2t26PtGlP876O8Jyd2EqmZzdNiMZL4FzbDbdsaLCMPhtPlpdbi%2F7uTDGLB%2B8hYbH2r8P3g8OMhznTXsQOsxU4k69Pe3GhgkQp%2B8ELvZbi9eaYZ7aQt5%2BwaUA6PxiNeUApmZBLFMsCFSDoYbzER8ustD6tHohmFOX21F8a7sOfdFYDU6Uk8KVfU%2B2ZqLynzhQQ2u%2FzjzvOcc3FXpBhwMi9YQc7QHntg4gXa%2BEH%2FzNULMKTK28QGOqUB0gfu3YHRfBQ0Z8kgFvjq9vF3ioFPjgFACE%2BZgFOPZYj91jCG%2FJ82RS2QwUMxxiXi0Zmj2rSBX3wahX8TCgb%2Fo5m6eO4QJtiu1x%2BLnddmthtvCXWozGKUTHggLYXUL3aXdBEToaeg0gQVPAad0RwMDl8hCvEXXQY2ftwx6x9AaKfKwEeeXK1Gjqrpk%2BS4%2FoZEm4PFWI%2FUi4Gg2lrCM0%2FNPUQexQPg&X-Amz-Signature=3717a7b7df8e5c15aaa0c57a80c33ba5f126408ee6e16555f507b41ac2bc4da5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652BAZV5S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGv19cmEv%2FHYjHgfyn0yQrB%2BY6sNXrZmEERPfGXuGiAAAiEAmaNlrEfCz8IUNnKWo2cPAsKFTjafqqBxRhRzQjFmG%2FkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0uTQfRAoG03ruziCrcA3oXjiKi37i9v%2FGc2QkfZDkW3FVmIv%2FGPu%2Bpq7T2kEsVGNPR6hEaLtqQyt%2F1MRLYSGFSCcWpzpJVODy8lcIZDcU1zVoZTc14swIATky8v2Lggzsy3UfsQqo4O7Sh6rrpOnn%2BA388d4cUNykDlFahvEjyGsTfggm3l9mFWc9ULsFt%2BJ5eefvnOnU6tKzPOkcqTC3tl9dxzlySLzVpn5CrjWZRRzD4VYWaHxvJKqzG42TGTcTuvdASKV5%2BMgPgpKpJ7%2BpkyV6udQDXPxqQNesuyEcH%2Fjgfk5n4%2F0PKCBrRQUiXqV5kM80PkmXRpUmVs9geZxVjdxRm2Ho4iQrMM%2Bi5zSSKgVDmvDaqgb9v%2BuF%2BETBqQKvfKczNoxTEdgraCdztS%2FtpcXiNX2bnZnP0Rw2t26PtGlP876O8Jyd2EqmZzdNiMZL4FzbDbdsaLCMPhtPlpdbi%2F7uTDGLB%2B8hYbH2r8P3g8OMhznTXsQOsxU4k69Pe3GhgkQp%2B8ELvZbi9eaYZ7aQt5%2BwaUA6PxiNeUApmZBLFMsCFSDoYbzER8ustD6tHohmFOX21F8a7sOfdFYDU6Uk8KVfU%2B2ZqLynzhQQ2u%2FzjzvOcc3FXpBhwMi9YQc7QHntg4gXa%2BEH%2FzNULMKTK28QGOqUB0gfu3YHRfBQ0Z8kgFvjq9vF3ioFPjgFACE%2BZgFOPZYj91jCG%2FJ82RS2QwUMxxiXi0Zmj2rSBX3wahX8TCgb%2Fo5m6eO4QJtiu1x%2BLnddmthtvCXWozGKUTHggLYXUL3aXdBEToaeg0gQVPAad0RwMDl8hCvEXXQY2ftwx6x9AaKfKwEeeXK1Gjqrpk%2BS4%2FoZEm4PFWI%2FUi4Gg2lrCM0%2FNPUQexQPg&X-Amz-Signature=c24872a710572d3a844d55327f0cb9ce5669c3059f585ad4825b0f12a900256f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652BAZV5S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGv19cmEv%2FHYjHgfyn0yQrB%2BY6sNXrZmEERPfGXuGiAAAiEAmaNlrEfCz8IUNnKWo2cPAsKFTjafqqBxRhRzQjFmG%2FkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0uTQfRAoG03ruziCrcA3oXjiKi37i9v%2FGc2QkfZDkW3FVmIv%2FGPu%2Bpq7T2kEsVGNPR6hEaLtqQyt%2F1MRLYSGFSCcWpzpJVODy8lcIZDcU1zVoZTc14swIATky8v2Lggzsy3UfsQqo4O7Sh6rrpOnn%2BA388d4cUNykDlFahvEjyGsTfggm3l9mFWc9ULsFt%2BJ5eefvnOnU6tKzPOkcqTC3tl9dxzlySLzVpn5CrjWZRRzD4VYWaHxvJKqzG42TGTcTuvdASKV5%2BMgPgpKpJ7%2BpkyV6udQDXPxqQNesuyEcH%2Fjgfk5n4%2F0PKCBrRQUiXqV5kM80PkmXRpUmVs9geZxVjdxRm2Ho4iQrMM%2Bi5zSSKgVDmvDaqgb9v%2BuF%2BETBqQKvfKczNoxTEdgraCdztS%2FtpcXiNX2bnZnP0Rw2t26PtGlP876O8Jyd2EqmZzdNiMZL4FzbDbdsaLCMPhtPlpdbi%2F7uTDGLB%2B8hYbH2r8P3g8OMhznTXsQOsxU4k69Pe3GhgkQp%2B8ELvZbi9eaYZ7aQt5%2BwaUA6PxiNeUApmZBLFMsCFSDoYbzER8ustD6tHohmFOX21F8a7sOfdFYDU6Uk8KVfU%2B2ZqLynzhQQ2u%2FzjzvOcc3FXpBhwMi9YQc7QHntg4gXa%2BEH%2FzNULMKTK28QGOqUB0gfu3YHRfBQ0Z8kgFvjq9vF3ioFPjgFACE%2BZgFOPZYj91jCG%2FJ82RS2QwUMxxiXi0Zmj2rSBX3wahX8TCgb%2Fo5m6eO4QJtiu1x%2BLnddmthtvCXWozGKUTHggLYXUL3aXdBEToaeg0gQVPAad0RwMDl8hCvEXXQY2ftwx6x9AaKfKwEeeXK1Gjqrpk%2BS4%2FoZEm4PFWI%2FUi4Gg2lrCM0%2FNPUQexQPg&X-Amz-Signature=46acd1072188ddc723e79d838c31e0c76a79669ae264dcffd92c01519b880a51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652BAZV5S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGv19cmEv%2FHYjHgfyn0yQrB%2BY6sNXrZmEERPfGXuGiAAAiEAmaNlrEfCz8IUNnKWo2cPAsKFTjafqqBxRhRzQjFmG%2FkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0uTQfRAoG03ruziCrcA3oXjiKi37i9v%2FGc2QkfZDkW3FVmIv%2FGPu%2Bpq7T2kEsVGNPR6hEaLtqQyt%2F1MRLYSGFSCcWpzpJVODy8lcIZDcU1zVoZTc14swIATky8v2Lggzsy3UfsQqo4O7Sh6rrpOnn%2BA388d4cUNykDlFahvEjyGsTfggm3l9mFWc9ULsFt%2BJ5eefvnOnU6tKzPOkcqTC3tl9dxzlySLzVpn5CrjWZRRzD4VYWaHxvJKqzG42TGTcTuvdASKV5%2BMgPgpKpJ7%2BpkyV6udQDXPxqQNesuyEcH%2Fjgfk5n4%2F0PKCBrRQUiXqV5kM80PkmXRpUmVs9geZxVjdxRm2Ho4iQrMM%2Bi5zSSKgVDmvDaqgb9v%2BuF%2BETBqQKvfKczNoxTEdgraCdztS%2FtpcXiNX2bnZnP0Rw2t26PtGlP876O8Jyd2EqmZzdNiMZL4FzbDbdsaLCMPhtPlpdbi%2F7uTDGLB%2B8hYbH2r8P3g8OMhznTXsQOsxU4k69Pe3GhgkQp%2B8ELvZbi9eaYZ7aQt5%2BwaUA6PxiNeUApmZBLFMsCFSDoYbzER8ustD6tHohmFOX21F8a7sOfdFYDU6Uk8KVfU%2B2ZqLynzhQQ2u%2FzjzvOcc3FXpBhwMi9YQc7QHntg4gXa%2BEH%2FzNULMKTK28QGOqUB0gfu3YHRfBQ0Z8kgFvjq9vF3ioFPjgFACE%2BZgFOPZYj91jCG%2FJ82RS2QwUMxxiXi0Zmj2rSBX3wahX8TCgb%2Fo5m6eO4QJtiu1x%2BLnddmthtvCXWozGKUTHggLYXUL3aXdBEToaeg0gQVPAad0RwMDl8hCvEXXQY2ftwx6x9AaKfKwEeeXK1Gjqrpk%2BS4%2FoZEm4PFWI%2FUi4Gg2lrCM0%2FNPUQexQPg&X-Amz-Signature=3b8d425dc76c30b76e7b93258f21bd195aa222e288a90f31fd0734cb43b2bfed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652BAZV5S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGv19cmEv%2FHYjHgfyn0yQrB%2BY6sNXrZmEERPfGXuGiAAAiEAmaNlrEfCz8IUNnKWo2cPAsKFTjafqqBxRhRzQjFmG%2FkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0uTQfRAoG03ruziCrcA3oXjiKi37i9v%2FGc2QkfZDkW3FVmIv%2FGPu%2Bpq7T2kEsVGNPR6hEaLtqQyt%2F1MRLYSGFSCcWpzpJVODy8lcIZDcU1zVoZTc14swIATky8v2Lggzsy3UfsQqo4O7Sh6rrpOnn%2BA388d4cUNykDlFahvEjyGsTfggm3l9mFWc9ULsFt%2BJ5eefvnOnU6tKzPOkcqTC3tl9dxzlySLzVpn5CrjWZRRzD4VYWaHxvJKqzG42TGTcTuvdASKV5%2BMgPgpKpJ7%2BpkyV6udQDXPxqQNesuyEcH%2Fjgfk5n4%2F0PKCBrRQUiXqV5kM80PkmXRpUmVs9geZxVjdxRm2Ho4iQrMM%2Bi5zSSKgVDmvDaqgb9v%2BuF%2BETBqQKvfKczNoxTEdgraCdztS%2FtpcXiNX2bnZnP0Rw2t26PtGlP876O8Jyd2EqmZzdNiMZL4FzbDbdsaLCMPhtPlpdbi%2F7uTDGLB%2B8hYbH2r8P3g8OMhznTXsQOsxU4k69Pe3GhgkQp%2B8ELvZbi9eaYZ7aQt5%2BwaUA6PxiNeUApmZBLFMsCFSDoYbzER8ustD6tHohmFOX21F8a7sOfdFYDU6Uk8KVfU%2B2ZqLynzhQQ2u%2FzjzvOcc3FXpBhwMi9YQc7QHntg4gXa%2BEH%2FzNULMKTK28QGOqUB0gfu3YHRfBQ0Z8kgFvjq9vF3ioFPjgFACE%2BZgFOPZYj91jCG%2FJ82RS2QwUMxxiXi0Zmj2rSBX3wahX8TCgb%2Fo5m6eO4QJtiu1x%2BLnddmthtvCXWozGKUTHggLYXUL3aXdBEToaeg0gQVPAad0RwMDl8hCvEXXQY2ftwx6x9AaKfKwEeeXK1Gjqrpk%2BS4%2FoZEm4PFWI%2FUi4Gg2lrCM0%2FNPUQexQPg&X-Amz-Signature=e68331cdbc774b3b1fb7ead3aad5f10af19adf19aa8da363014e31f96023d7aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652BAZV5S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGv19cmEv%2FHYjHgfyn0yQrB%2BY6sNXrZmEERPfGXuGiAAAiEAmaNlrEfCz8IUNnKWo2cPAsKFTjafqqBxRhRzQjFmG%2FkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0uTQfRAoG03ruziCrcA3oXjiKi37i9v%2FGc2QkfZDkW3FVmIv%2FGPu%2Bpq7T2kEsVGNPR6hEaLtqQyt%2F1MRLYSGFSCcWpzpJVODy8lcIZDcU1zVoZTc14swIATky8v2Lggzsy3UfsQqo4O7Sh6rrpOnn%2BA388d4cUNykDlFahvEjyGsTfggm3l9mFWc9ULsFt%2BJ5eefvnOnU6tKzPOkcqTC3tl9dxzlySLzVpn5CrjWZRRzD4VYWaHxvJKqzG42TGTcTuvdASKV5%2BMgPgpKpJ7%2BpkyV6udQDXPxqQNesuyEcH%2Fjgfk5n4%2F0PKCBrRQUiXqV5kM80PkmXRpUmVs9geZxVjdxRm2Ho4iQrMM%2Bi5zSSKgVDmvDaqgb9v%2BuF%2BETBqQKvfKczNoxTEdgraCdztS%2FtpcXiNX2bnZnP0Rw2t26PtGlP876O8Jyd2EqmZzdNiMZL4FzbDbdsaLCMPhtPlpdbi%2F7uTDGLB%2B8hYbH2r8P3g8OMhznTXsQOsxU4k69Pe3GhgkQp%2B8ELvZbi9eaYZ7aQt5%2BwaUA6PxiNeUApmZBLFMsCFSDoYbzER8ustD6tHohmFOX21F8a7sOfdFYDU6Uk8KVfU%2B2ZqLynzhQQ2u%2FzjzvOcc3FXpBhwMi9YQc7QHntg4gXa%2BEH%2FzNULMKTK28QGOqUB0gfu3YHRfBQ0Z8kgFvjq9vF3ioFPjgFACE%2BZgFOPZYj91jCG%2FJ82RS2QwUMxxiXi0Zmj2rSBX3wahX8TCgb%2Fo5m6eO4QJtiu1x%2BLnddmthtvCXWozGKUTHggLYXUL3aXdBEToaeg0gQVPAad0RwMDl8hCvEXXQY2ftwx6x9AaKfKwEeeXK1Gjqrpk%2BS4%2FoZEm4PFWI%2FUi4Gg2lrCM0%2FNPUQexQPg&X-Amz-Signature=c8fe5d350b07110d77d9a794ee613e54ecf906eec5228a0efc07dfc5f13d87c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652BAZV5S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGv19cmEv%2FHYjHgfyn0yQrB%2BY6sNXrZmEERPfGXuGiAAAiEAmaNlrEfCz8IUNnKWo2cPAsKFTjafqqBxRhRzQjFmG%2FkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0uTQfRAoG03ruziCrcA3oXjiKi37i9v%2FGc2QkfZDkW3FVmIv%2FGPu%2Bpq7T2kEsVGNPR6hEaLtqQyt%2F1MRLYSGFSCcWpzpJVODy8lcIZDcU1zVoZTc14swIATky8v2Lggzsy3UfsQqo4O7Sh6rrpOnn%2BA388d4cUNykDlFahvEjyGsTfggm3l9mFWc9ULsFt%2BJ5eefvnOnU6tKzPOkcqTC3tl9dxzlySLzVpn5CrjWZRRzD4VYWaHxvJKqzG42TGTcTuvdASKV5%2BMgPgpKpJ7%2BpkyV6udQDXPxqQNesuyEcH%2Fjgfk5n4%2F0PKCBrRQUiXqV5kM80PkmXRpUmVs9geZxVjdxRm2Ho4iQrMM%2Bi5zSSKgVDmvDaqgb9v%2BuF%2BETBqQKvfKczNoxTEdgraCdztS%2FtpcXiNX2bnZnP0Rw2t26PtGlP876O8Jyd2EqmZzdNiMZL4FzbDbdsaLCMPhtPlpdbi%2F7uTDGLB%2B8hYbH2r8P3g8OMhznTXsQOsxU4k69Pe3GhgkQp%2B8ELvZbi9eaYZ7aQt5%2BwaUA6PxiNeUApmZBLFMsCFSDoYbzER8ustD6tHohmFOX21F8a7sOfdFYDU6Uk8KVfU%2B2ZqLynzhQQ2u%2FzjzvOcc3FXpBhwMi9YQc7QHntg4gXa%2BEH%2FzNULMKTK28QGOqUB0gfu3YHRfBQ0Z8kgFvjq9vF3ioFPjgFACE%2BZgFOPZYj91jCG%2FJ82RS2QwUMxxiXi0Zmj2rSBX3wahX8TCgb%2Fo5m6eO4QJtiu1x%2BLnddmthtvCXWozGKUTHggLYXUL3aXdBEToaeg0gQVPAad0RwMDl8hCvEXXQY2ftwx6x9AaKfKwEeeXK1Gjqrpk%2BS4%2FoZEm4PFWI%2FUi4Gg2lrCM0%2FNPUQexQPg&X-Amz-Signature=7e4b6b4166fe751e50b3c702c75d627afe950c782cb6d76cd2c0e502f07fbb14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652BAZV5S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGv19cmEv%2FHYjHgfyn0yQrB%2BY6sNXrZmEERPfGXuGiAAAiEAmaNlrEfCz8IUNnKWo2cPAsKFTjafqqBxRhRzQjFmG%2FkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0uTQfRAoG03ruziCrcA3oXjiKi37i9v%2FGc2QkfZDkW3FVmIv%2FGPu%2Bpq7T2kEsVGNPR6hEaLtqQyt%2F1MRLYSGFSCcWpzpJVODy8lcIZDcU1zVoZTc14swIATky8v2Lggzsy3UfsQqo4O7Sh6rrpOnn%2BA388d4cUNykDlFahvEjyGsTfggm3l9mFWc9ULsFt%2BJ5eefvnOnU6tKzPOkcqTC3tl9dxzlySLzVpn5CrjWZRRzD4VYWaHxvJKqzG42TGTcTuvdASKV5%2BMgPgpKpJ7%2BpkyV6udQDXPxqQNesuyEcH%2Fjgfk5n4%2F0PKCBrRQUiXqV5kM80PkmXRpUmVs9geZxVjdxRm2Ho4iQrMM%2Bi5zSSKgVDmvDaqgb9v%2BuF%2BETBqQKvfKczNoxTEdgraCdztS%2FtpcXiNX2bnZnP0Rw2t26PtGlP876O8Jyd2EqmZzdNiMZL4FzbDbdsaLCMPhtPlpdbi%2F7uTDGLB%2B8hYbH2r8P3g8OMhznTXsQOsxU4k69Pe3GhgkQp%2B8ELvZbi9eaYZ7aQt5%2BwaUA6PxiNeUApmZBLFMsCFSDoYbzER8ustD6tHohmFOX21F8a7sOfdFYDU6Uk8KVfU%2B2ZqLynzhQQ2u%2FzjzvOcc3FXpBhwMi9YQc7QHntg4gXa%2BEH%2FzNULMKTK28QGOqUB0gfu3YHRfBQ0Z8kgFvjq9vF3ioFPjgFACE%2BZgFOPZYj91jCG%2FJ82RS2QwUMxxiXi0Zmj2rSBX3wahX8TCgb%2Fo5m6eO4QJtiu1x%2BLnddmthtvCXWozGKUTHggLYXUL3aXdBEToaeg0gQVPAad0RwMDl8hCvEXXQY2ftwx6x9AaKfKwEeeXK1Gjqrpk%2BS4%2FoZEm4PFWI%2FUi4Gg2lrCM0%2FNPUQexQPg&X-Amz-Signature=418a07f36e50fdc3442cd153b2643ef2ed8a020da6a12d6c1fcd0d7378df77e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652BAZV5S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGv19cmEv%2FHYjHgfyn0yQrB%2BY6sNXrZmEERPfGXuGiAAAiEAmaNlrEfCz8IUNnKWo2cPAsKFTjafqqBxRhRzQjFmG%2FkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0uTQfRAoG03ruziCrcA3oXjiKi37i9v%2FGc2QkfZDkW3FVmIv%2FGPu%2Bpq7T2kEsVGNPR6hEaLtqQyt%2F1MRLYSGFSCcWpzpJVODy8lcIZDcU1zVoZTc14swIATky8v2Lggzsy3UfsQqo4O7Sh6rrpOnn%2BA388d4cUNykDlFahvEjyGsTfggm3l9mFWc9ULsFt%2BJ5eefvnOnU6tKzPOkcqTC3tl9dxzlySLzVpn5CrjWZRRzD4VYWaHxvJKqzG42TGTcTuvdASKV5%2BMgPgpKpJ7%2BpkyV6udQDXPxqQNesuyEcH%2Fjgfk5n4%2F0PKCBrRQUiXqV5kM80PkmXRpUmVs9geZxVjdxRm2Ho4iQrMM%2Bi5zSSKgVDmvDaqgb9v%2BuF%2BETBqQKvfKczNoxTEdgraCdztS%2FtpcXiNX2bnZnP0Rw2t26PtGlP876O8Jyd2EqmZzdNiMZL4FzbDbdsaLCMPhtPlpdbi%2F7uTDGLB%2B8hYbH2r8P3g8OMhznTXsQOsxU4k69Pe3GhgkQp%2B8ELvZbi9eaYZ7aQt5%2BwaUA6PxiNeUApmZBLFMsCFSDoYbzER8ustD6tHohmFOX21F8a7sOfdFYDU6Uk8KVfU%2B2ZqLynzhQQ2u%2FzjzvOcc3FXpBhwMi9YQc7QHntg4gXa%2BEH%2FzNULMKTK28QGOqUB0gfu3YHRfBQ0Z8kgFvjq9vF3ioFPjgFACE%2BZgFOPZYj91jCG%2FJ82RS2QwUMxxiXi0Zmj2rSBX3wahX8TCgb%2Fo5m6eO4QJtiu1x%2BLnddmthtvCXWozGKUTHggLYXUL3aXdBEToaeg0gQVPAad0RwMDl8hCvEXXQY2ftwx6x9AaKfKwEeeXK1Gjqrpk%2BS4%2FoZEm4PFWI%2FUi4Gg2lrCM0%2FNPUQexQPg&X-Amz-Signature=66290164bc20947799d12bfb834fd2f9694ee61da410d909b24e3492a4296993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIRORPFW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCEAbnof6WCYSfxjG0GgPKV%2F29a1tQOcJQrhCXXD%2BxpBQIhALo1c%2BK0ww16rvXvuU1HAiNSAXNEhJVpwrqt54N58MZBKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOBtif5EFRgXOCYdMq3AOvTT%2Fq05Z9F1JENJ%2FfKoeCj2GzMeavs%2FZBZc4zPevao35JNvCYL3pXFawQ0OpCT4NjG3%2Bzk9OuY6vuEFh%2BMIM3XvnzN9Zv0pC%2Fwg1Yb%2FJYknTbVknDGGb5RkR%2BQkriPbzThPFn4QujM0xyYSRlK1TYDWhnqhZcSdiG2v%2FW4VcIbS5%2BobXtfv%2BDQvke4PcFxBtXSXOZAKMHLS3LLJzXjvxMsrwmsBGS5Tsj6DicLTPqmQT3Sw7FLGVEh4CnzjWSgelaqIa1%2BeTrr4im9Yi8lwIgBA5n9gYtHywGCd%2FVdaei5w%2FZUgE10nk29TLkTPSSNL9nsFFK%2FoLo%2B%2FQayVEccraebyotzDzz9NOx3HoTB6Zflkokn%2B9v3H9KljXLX3Xabo5CzcmPB4%2Fn7RQgIeuhZJjMNO0iTLv9q35qTR9xD4ytbl%2BYB8Z3Bv%2FXp7iYpgDWhrlYa%2FB2KIozFCkQyb%2Br7Y%2BX%2BUgIOvFX3WklC78JjWhOZfs%2BJI33IBCMa8SEJ2cTwBxbKgXm29HhmoOfB7VNX9HZz6BweZGYMLdgFCRmKDV%2F5VW5nSEuZUqZSmYhbNavSVfwmq0bLrg7v0lpixTENSFIsdxJaVWzuhx0YaqRtcqV4XqGUpLrfK9rjcO%2B0jDKxNvEBjqkAeI9dsKwS%2FUkxjtlhkUsSLTgMKitA1ZIDUrhhr9YQh8bkbHpZQCk%2FoxBl5t6pMvS6L54AWpo8pb13khI4m%2Feo09MSVoxbnnwyDLK7S9oJ1P5kctyiV8RIwJdEvxjbkv911qcXapSiyG41Bqpwbmo%2FCYroF3NlYweeyYtpDemmKhT8CX1PBGozB86GYUoDVJ%2BsGt4XxXHlH6DAxptJlbZgJe6%2Bfg0&X-Amz-Signature=8b4b46b0381028943e2712c3f4800c5efdb7efee07a6a88cce757971a8519abd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2AKOJK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIHf5T18gJlW3KjuxjuEhliZdPIkqaKf6L4M5cFJtBHzwAiBXkuIt0%2FeRnQOuWTYvC3fD0uKJyU5PuC8aMADJNvgpBSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHwxdXaPYPAsnliZWKtwD8tpv1WkJMA1VumoMKYl9d2nAWbbRYiPjISeIM9AG0nsmRYDC%2BYF%2B0mTbfHf0PF49ryn%2BlDgaZnXEAlKqW6V1NECBEms1pqmt2OVfxcZiiK3Rf8S2CmbARuMqth9fgeQB4HZDS8eAVNpW42lyL%2BWZHiRgMBmiwYVPSbvc6XQhVkU%2BARBhgqg8weNS5tN%2FLgntlm9T4yu%2FaNvFQ3ZAsVhxqIJUwF2Rs%2BADwu1Y8DMc5Og6%2BnRzV85EDeRlKE7CjiZyYuA53occgabMApkU03CNEzbwSh8JhS5YgXk9bFGZ6clGIYYbwxVzpCXHPYfeipBMV2XcAK%2FDg8zP6SwJPxNC4GuSV65vJAYcHX3A7g7HXs%2BQQ6Z1uGz9p3cWw%2FoCHrCaLf7sws3st1XcsOgxannQj%2FgEQGPriZKi9GgO4HXp7H7IjceF2aYz3vfA0a9kToA6Tl3UjBYNE08J5EMciSm9zyQRnUdOjE5gw2qoiIjwDgqwWBgINv8Dv7M8yEDroXm0%2FUyiXtXYc3MrRHRVS48LJBKWqd%2BWHW0k5gyeVfISTRtAZnPHXX0yrEeuUpj57gL9rfJhPgaME03IdEosF23gHRKgENDNpBuuxjDSzFcVcNSLSrAy%2BHKqEDab%2BGkwiMXbxAY6pgFJXCYzkYNqu9ADFzRMZu6GxlqKtx09DOrbohDtP6i%2F2WO%2B1hTHTBgrQG50l4FAlvayekFl5JFH%2F6z%2FIQiKierKXtIlBpAazU1XUeWuDo%2FnFSWQBnNCV96MVMQ1euFaVKU0%2FHLhXf3zorWbtGc2vzosFM94KREYRso4irFGVN4gw0la5L6%2FIkoxCcaRvfs5q9S%2B9i24uUdNw6XQnK6k4Rp5IXGz2VW2&X-Amz-Signature=1f6fd7a46af195d33aacfc356d8386e05c5bcd6bec1b28c010d5270dbb6c987c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NSJSEVY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIHnFtRbWtR7YXGalbJnSHr%2Fxa1xVRHO5PHVGMk53PM%2BdAiAOxnJJSMexp8yNdBg7GcZU3cfn%2BwgaiAZSwq5sSFL3siqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj1hw4Efqh%2Br9qZYmKtwDTy7lkQmhMr36t3WxOgqlEmqb8zHdIaXlhKlq%2B0bV8VsurktN43hdMlfaZrqvbUrQp42NyrtDcxQxnV11PPyQAdNrlqphZYH1A6qmSYypa3vmVnPRskArKBYxAlD5tR38tC3u0UJNDMLUI%2BVeTYxWZ2AsoIhZWhAlWfsc6JlLJsRGDfpG8MrDHUr6YEpxPToAUuQJ6ur%2F69WKkcitHv5Sya6GIDXkuWC43lS3BN7GvYtITrF8nA6nH04qY%2BlLEExVZP%2FNtAQvMq8WXR65xoqcsIBjbTEP7HuX%2B6cJ774gOCKoButLNusCYsfjEdjgUvGF3M7Ri1Lm24iDATq%2Bz3O6a3lYQ7pWXTCm6TIF8cmk%2BRrSmsDMypYyW3Lsy9WjmvDDJ8jX79AugJ%2FrD0nGIq%2FYqKxeON85ep9NFypiQ2ym9nY%2FNjD%2BSuh784vvcoZTSPYi8buNHh8YlzKTAdNtfn6ZVcmv2hNpuOKGNHlTuSRbku7Q71ryiOAo49IOY5e0eswNfJUuQfz%2BK1AYVTQiwDSsIH17LNxhX2i1F8bAm3CfmX8u2%2BTZ1IOkPI6SobbqFaLOS01wG2L2T6zIIRqIBKHbjmfIf%2FyAUhrq06%2BKgVn%2BNiS01c5ypgIBJxSYbFcwp8rbxAY6pgFBoQB2ZCzC%2F2O2Fkhy5eEKadRsxP8WVE7j8DXcyNgI5n5DJuaCCC23QhEIeDxwjCgDp0%2FjgPZsbXtkzPIet0DwFZg%2FNRBXkyY3%2FF3vVR9yi%2Bg4mK%2F3r60xAIq65dJMeJJfCIMaw05VQtUwkBvYNoqiPVcctGCV26Wnl%2BApGJPR6IXA2ptT85ESd9c1lx3%2FW1JIm5JqZA5PDZb3Xs2RRGSPzxn0m8N7&X-Amz-Signature=b41150486d357d6bb1c9b87654a17848afe905f661267276d0080a4007bcb5c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652BAZV5S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGv19cmEv%2FHYjHgfyn0yQrB%2BY6sNXrZmEERPfGXuGiAAAiEAmaNlrEfCz8IUNnKWo2cPAsKFTjafqqBxRhRzQjFmG%2FkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0uTQfRAoG03ruziCrcA3oXjiKi37i9v%2FGc2QkfZDkW3FVmIv%2FGPu%2Bpq7T2kEsVGNPR6hEaLtqQyt%2F1MRLYSGFSCcWpzpJVODy8lcIZDcU1zVoZTc14swIATky8v2Lggzsy3UfsQqo4O7Sh6rrpOnn%2BA388d4cUNykDlFahvEjyGsTfggm3l9mFWc9ULsFt%2BJ5eefvnOnU6tKzPOkcqTC3tl9dxzlySLzVpn5CrjWZRRzD4VYWaHxvJKqzG42TGTcTuvdASKV5%2BMgPgpKpJ7%2BpkyV6udQDXPxqQNesuyEcH%2Fjgfk5n4%2F0PKCBrRQUiXqV5kM80PkmXRpUmVs9geZxVjdxRm2Ho4iQrMM%2Bi5zSSKgVDmvDaqgb9v%2BuF%2BETBqQKvfKczNoxTEdgraCdztS%2FtpcXiNX2bnZnP0Rw2t26PtGlP876O8Jyd2EqmZzdNiMZL4FzbDbdsaLCMPhtPlpdbi%2F7uTDGLB%2B8hYbH2r8P3g8OMhznTXsQOsxU4k69Pe3GhgkQp%2B8ELvZbi9eaYZ7aQt5%2BwaUA6PxiNeUApmZBLFMsCFSDoYbzER8ustD6tHohmFOX21F8a7sOfdFYDU6Uk8KVfU%2B2ZqLynzhQQ2u%2FzjzvOcc3FXpBhwMi9YQc7QHntg4gXa%2BEH%2FzNULMKTK28QGOqUB0gfu3YHRfBQ0Z8kgFvjq9vF3ioFPjgFACE%2BZgFOPZYj91jCG%2FJ82RS2QwUMxxiXi0Zmj2rSBX3wahX8TCgb%2Fo5m6eO4QJtiu1x%2BLnddmthtvCXWozGKUTHggLYXUL3aXdBEToaeg0gQVPAad0RwMDl8hCvEXXQY2ftwx6x9AaKfKwEeeXK1Gjqrpk%2BS4%2FoZEm4PFWI%2FUi4Gg2lrCM0%2FNPUQexQPg&X-Amz-Signature=50eaf9158063ed7c7682a293dc031945b31996f7f5235be16df0b8148a4efdfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LX3BWTX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCKY2RWrD9dIzkkDw74Ebo2IbKrF2hib5VBWKS46v4fwAIgZHETL%2F6x9ogcS0G3W%2B0KF7A0zHjp4k0MAX1arol7mWAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGk4tLUy2ArvNUANRCrcA2WeSH%2FtCYt3dt6OQ1txahw9UK%2FTkmuWMqGA8H2jFYccNqZqG3xqKCY9azCzlUQgngHqaOB7NSyAGyV2%2F95RwskdYIPGCwPeSIIwW2iz6tAuwV9HqssxRouPSuxNpNXY84e18CfIAHaSX%2F3673%2FMClv7zKavCodjEARcvWqhqY5r7bik5Olq1Zo3SVYUH%2BydZYjcPmkM4UBoT%2BRUXAqUNQzQhJQ2DdRBmAgMW8%2FkHgV3y2MwMVPm7y%2BO%2BCYfnN25mefmJfEf1iQOtwxRY60XyG%2FESKVpvtvtFT3pseCN00OvnRdURv2Y6OytAf8pa6pJmudl8SJ%2Fdpf6HjLM7BR1uJXgJwPPO%2F0A5JghQ9IrCBVOJpZsm6n6nFzQJEBzRa5QAF8LDhzpW49AZKenwNXGcNhjB4vSApYyRI8VteiyH%2BmNWk88ZWbaF%2FVNs8aKb9Eh%2BqGcHMpvKZyN5I24FjC6aUmLq89K0iMCVkZv0m6ESSfNynSpAFPuuzTdc3eYkZQ%2B%2FCzVWVeevgP3l70HvMoLiovkprBdzxim%2FZtfuo1pLD%2FQSnmcFXFxEakXGo9KfM8Ih0%2BORrrVXRIG4mEo2QwCCn0m84%2BbpOegfhkNdyBh0L7UwdK6%2FbvEo6W8jKlwMKHE28QGOqUBKeqS30PuhE0rb0or4vIJcSvWmAT0xW1bP%2F5gwqK73US34rN6%2BHrkT21umL4K%2B9U82ddFXIum3aF%2FkntBBdvse0orbzTKJ3jDhZNtSjHXVI6mNSzrX8Ph3vM9xo9zJxR5gPj8804XGji9xLd5JelQVH1g8GdPl9qR42mVDS%2BvfR2ZKUml3mnlAOOmnRtWuZNFjy4lLnxB4jJssac1fWFQSbkB1pkK&X-Amz-Signature=0e83050d741a3c3f3e745339139759ca13b222f1d903ccfe32aaba6462fc88a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652BAZV5S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGv19cmEv%2FHYjHgfyn0yQrB%2BY6sNXrZmEERPfGXuGiAAAiEAmaNlrEfCz8IUNnKWo2cPAsKFTjafqqBxRhRzQjFmG%2FkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0uTQfRAoG03ruziCrcA3oXjiKi37i9v%2FGc2QkfZDkW3FVmIv%2FGPu%2Bpq7T2kEsVGNPR6hEaLtqQyt%2F1MRLYSGFSCcWpzpJVODy8lcIZDcU1zVoZTc14swIATky8v2Lggzsy3UfsQqo4O7Sh6rrpOnn%2BA388d4cUNykDlFahvEjyGsTfggm3l9mFWc9ULsFt%2BJ5eefvnOnU6tKzPOkcqTC3tl9dxzlySLzVpn5CrjWZRRzD4VYWaHxvJKqzG42TGTcTuvdASKV5%2BMgPgpKpJ7%2BpkyV6udQDXPxqQNesuyEcH%2Fjgfk5n4%2F0PKCBrRQUiXqV5kM80PkmXRpUmVs9geZxVjdxRm2Ho4iQrMM%2Bi5zSSKgVDmvDaqgb9v%2BuF%2BETBqQKvfKczNoxTEdgraCdztS%2FtpcXiNX2bnZnP0Rw2t26PtGlP876O8Jyd2EqmZzdNiMZL4FzbDbdsaLCMPhtPlpdbi%2F7uTDGLB%2B8hYbH2r8P3g8OMhznTXsQOsxU4k69Pe3GhgkQp%2B8ELvZbi9eaYZ7aQt5%2BwaUA6PxiNeUApmZBLFMsCFSDoYbzER8ustD6tHohmFOX21F8a7sOfdFYDU6Uk8KVfU%2B2ZqLynzhQQ2u%2FzjzvOcc3FXpBhwMi9YQc7QHntg4gXa%2BEH%2FzNULMKTK28QGOqUB0gfu3YHRfBQ0Z8kgFvjq9vF3ioFPjgFACE%2BZgFOPZYj91jCG%2FJ82RS2QwUMxxiXi0Zmj2rSBX3wahX8TCgb%2Fo5m6eO4QJtiu1x%2BLnddmthtvCXWozGKUTHggLYXUL3aXdBEToaeg0gQVPAad0RwMDl8hCvEXXQY2ftwx6x9AaKfKwEeeXK1Gjqrpk%2BS4%2FoZEm4PFWI%2FUi4Gg2lrCM0%2FNPUQexQPg&X-Amz-Signature=132e063b1fc33ebfe1291015b8e751ad3890f92a427636bde086995017764206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HOG7IT6%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCk8RtlQtRjw1lLI2e3u060eGTXZzNNevn177h79MxZWQIhAMjXfNGFQgEh1ESw9Gd3E3JPCT2icNwKZA7dChS5LZA1KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWcyPZ9Ap821%2Fyu1kq3AMih4CFrOxR9hfi5qcYRtCcAz8YU8etBibqlzlo1CQiGkMXfhRrZI8h8PYrr0J6HfS8yKnTV6n8bHVubPE1gIuxaiWBZPikyH1PLqoQl%2FXryMMsSNElOHkfV1To%2FJfcHm5XxzE%2FU%2BpV621vxjPPk%2BQcOp7YakU%2BBxzFGj3y8eIndW%2F1CKvSQPxxOdiR%2Fo9bSYsLwD69r8EPMUoitQ7zpfYxLjXagk%2FxFRPQ%2BUb9Cy%2Fx1vniI6RSWJOHCs817Zj7MxWzlft4v5WHiFIswBszbBiuucezHxu3TJfON3q86qIoMMCcfFriDQJGq1hUvCLAAQmpx0zcM6kfFK1OEJdg%2FLtX6as%2BrYSTXxJSAQp8GkQFChgFKxEBAEgFmmOSBbYMHUu7Lu%2BnPsiVZtCYkkdIQIzIThS%2FZx3ALsYENWJ9VbjZb5WnCq%2B8mNIv5fvOFZ%2FmjAhv27QzQplmWLMVpsQjOeSk5Dt%2Fh1LI2gtkHRG83PHYkDNzXbgyJE5gORFsqRNacUogPXJFnSue5HpGP8wfLaXtwp9JTIX7rNfb6gnYjZxlXHLn1%2BexS8u20hBVZeOQ5h%2BWYSw4ltK%2BTz6N6tvKxUHg4JfNkQI6o7s03GPyLz6EEu9d%2B16%2BqhsgcM52ETDwxNvEBjqkAZit%2FpWnJX7GkMiKJ307OaSo4wErX2NUmf0IUJcoGvEnJa%2Fa8bOtuLhgIwMSQqLEXFhikZBBh5z53o9nfwb5CZhRFDZMu0B2WOyAKctC8mL1krnVmZ5dU%2BGEUFsVOKtSbrQWb7I05qkglxPtggvxAzHjIr%2F%2B9Es5dVyFIFrkm6sdbCC%2F89kQyOkLpn2IQqlTIR0NQJIIfCn7ig4XwvB5nG7GBa20&X-Amz-Signature=1342c926192936b0c9af23921b154ea70a6d82175a27ffd11e6741b579afc92e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652BAZV5S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGv19cmEv%2FHYjHgfyn0yQrB%2BY6sNXrZmEERPfGXuGiAAAiEAmaNlrEfCz8IUNnKWo2cPAsKFTjafqqBxRhRzQjFmG%2FkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0uTQfRAoG03ruziCrcA3oXjiKi37i9v%2FGc2QkfZDkW3FVmIv%2FGPu%2Bpq7T2kEsVGNPR6hEaLtqQyt%2F1MRLYSGFSCcWpzpJVODy8lcIZDcU1zVoZTc14swIATky8v2Lggzsy3UfsQqo4O7Sh6rrpOnn%2BA388d4cUNykDlFahvEjyGsTfggm3l9mFWc9ULsFt%2BJ5eefvnOnU6tKzPOkcqTC3tl9dxzlySLzVpn5CrjWZRRzD4VYWaHxvJKqzG42TGTcTuvdASKV5%2BMgPgpKpJ7%2BpkyV6udQDXPxqQNesuyEcH%2Fjgfk5n4%2F0PKCBrRQUiXqV5kM80PkmXRpUmVs9geZxVjdxRm2Ho4iQrMM%2Bi5zSSKgVDmvDaqgb9v%2BuF%2BETBqQKvfKczNoxTEdgraCdztS%2FtpcXiNX2bnZnP0Rw2t26PtGlP876O8Jyd2EqmZzdNiMZL4FzbDbdsaLCMPhtPlpdbi%2F7uTDGLB%2B8hYbH2r8P3g8OMhznTXsQOsxU4k69Pe3GhgkQp%2B8ELvZbi9eaYZ7aQt5%2BwaUA6PxiNeUApmZBLFMsCFSDoYbzER8ustD6tHohmFOX21F8a7sOfdFYDU6Uk8KVfU%2B2ZqLynzhQQ2u%2FzjzvOcc3FXpBhwMi9YQc7QHntg4gXa%2BEH%2FzNULMKTK28QGOqUB0gfu3YHRfBQ0Z8kgFvjq9vF3ioFPjgFACE%2BZgFOPZYj91jCG%2FJ82RS2QwUMxxiXi0Zmj2rSBX3wahX8TCgb%2Fo5m6eO4QJtiu1x%2BLnddmthtvCXWozGKUTHggLYXUL3aXdBEToaeg0gQVPAad0RwMDl8hCvEXXQY2ftwx6x9AaKfKwEeeXK1Gjqrpk%2BS4%2FoZEm4PFWI%2FUi4Gg2lrCM0%2FNPUQexQPg&X-Amz-Signature=f9ccd3ba139d05821d2d95fdde59292dbabcfc2e4beeb952fe69c471a42bc188&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO65SVMO%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCEHYdi6nukJlZdrCwbe4URgEs6NTlvum1QShS80d0x5gIgLqzbgR%2FGF%2BS24iFuDgDQRY5i%2FUXC6HhS%2B2wO3dco9FYqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPs486WnJ4uEnGdOSrcA%2FFBlkb2OtXBQziABLE%2BLjeTb8tcLlRnjDw%2FKkzpY09pJFVUAR729IZbF%2BKdpMZPij4HB9Rle2Z3FIStPL39S0tNyITm0Rc94ZDXZx8JWuVvpIexcce25tECWdaseZvNdafoO4aPe4G7LoGiNbRnHDjV%2BIi83w%2FUeD9VTWB0hsBeT9KCRZpMwv4ti%2BGe95sKWHLBWffj1UU0gYCGvYXwdZwfB3fjU3mymu8yzrDd7j6Ls6alHsTt2WKlwaD6%2FKmV1alBh%2Fo%2Fmmhofzq0qoW3kj4P5Xu6hg6y4WK8%2BBi2m457li2biLTi4gbafWflN%2BLBuRdqXQSRmB4kphso4y3c%2FRmKO4J%2B8qqRT8hu8rsHrX6%2B6UJkXWBd0ZweIPhS263eilBAGhe1Bt3IJ0q4RayjvLLjTrFh9bEWwrb%2FYKX3YQrO%2F52rcsvjVG7%2Bar8X%2BDAh1Agdkhrp5FB1QU7%2BXLqPVZO3Z0B%2FpIja69hThz3C6KMUMBGaG5ycRyUJtlNWat8F5c78EEorwKHGOVJV7j1aOTQX%2BaiDMDkLUypi1J47AypjQrgxTyTNaG5z7HS0hF97w22mriNlHqKNYlsobYApo%2BdSOMkSswDYj60yoozCYxQerJ1j4%2FeBZqyggLOTMLPE28QGOqUB97DQP9UjS91yKNB6vxcmymeb7WfhYRKSbLOl5wFVmk5a5mkqtzLhhmGPWiBqa67LqFSlIetujRScZ%2FaDLNw1JFxFS6HW7MjmGegRBfo5VqYg%2BZEfIMBjimENXf2Lw9zD0BH2i%2Fju47pFw1q19sfyBEIdWILVpWYcW1IUDNi9A05iVt1oodIHGExbzyng9%2FlV8izpMnK%2Fa8xVoWp%2FO7jYrtIIfgPn&X-Amz-Signature=efe41c1e1ff7d1f6f114a08cf2caed4ed50e1ae3dcc8d6ad960fd4443f7c2dd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652BAZV5S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGv19cmEv%2FHYjHgfyn0yQrB%2BY6sNXrZmEERPfGXuGiAAAiEAmaNlrEfCz8IUNnKWo2cPAsKFTjafqqBxRhRzQjFmG%2FkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0uTQfRAoG03ruziCrcA3oXjiKi37i9v%2FGc2QkfZDkW3FVmIv%2FGPu%2Bpq7T2kEsVGNPR6hEaLtqQyt%2F1MRLYSGFSCcWpzpJVODy8lcIZDcU1zVoZTc14swIATky8v2Lggzsy3UfsQqo4O7Sh6rrpOnn%2BA388d4cUNykDlFahvEjyGsTfggm3l9mFWc9ULsFt%2BJ5eefvnOnU6tKzPOkcqTC3tl9dxzlySLzVpn5CrjWZRRzD4VYWaHxvJKqzG42TGTcTuvdASKV5%2BMgPgpKpJ7%2BpkyV6udQDXPxqQNesuyEcH%2Fjgfk5n4%2F0PKCBrRQUiXqV5kM80PkmXRpUmVs9geZxVjdxRm2Ho4iQrMM%2Bi5zSSKgVDmvDaqgb9v%2BuF%2BETBqQKvfKczNoxTEdgraCdztS%2FtpcXiNX2bnZnP0Rw2t26PtGlP876O8Jyd2EqmZzdNiMZL4FzbDbdsaLCMPhtPlpdbi%2F7uTDGLB%2B8hYbH2r8P3g8OMhznTXsQOsxU4k69Pe3GhgkQp%2B8ELvZbi9eaYZ7aQt5%2BwaUA6PxiNeUApmZBLFMsCFSDoYbzER8ustD6tHohmFOX21F8a7sOfdFYDU6Uk8KVfU%2B2ZqLynzhQQ2u%2FzjzvOcc3FXpBhwMi9YQc7QHntg4gXa%2BEH%2FzNULMKTK28QGOqUB0gfu3YHRfBQ0Z8kgFvjq9vF3ioFPjgFACE%2BZgFOPZYj91jCG%2FJ82RS2QwUMxxiXi0Zmj2rSBX3wahX8TCgb%2Fo5m6eO4QJtiu1x%2BLnddmthtvCXWozGKUTHggLYXUL3aXdBEToaeg0gQVPAad0RwMDl8hCvEXXQY2ftwx6x9AaKfKwEeeXK1Gjqrpk%2BS4%2FoZEm4PFWI%2FUi4Gg2lrCM0%2FNPUQexQPg&X-Amz-Signature=bbae4ed7b303c8888dc0c1b7865ffa09b71abdc23523e11154090906bc4b511c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674USWERW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIF9i8ijdWHFctQPKLhxHNZO3xkmarrgGXfuTn6dkXKWpAiAyuc8E7CRavql5daliDPsFc8OWJjKofIpTvbmXNQBwSiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKV99lq5ck5cqcl40KtwDWwsbF0P4mFVlHPakv5VnEujCrD551D3ip5smOcMbkq4tUqQpzX50067DmuRnJhUqM%2BgF0%2FAgc%2FSFbF42h0frPO6HhdgcH8kZOl9La%2BClgjawe%2BawxmBqwinR7Oh7cw99H7p88tmF0gVEMDzcAZZO1r1tUFwGftcm4ofGccG7VkcKoCtk68C3DLymkb%2BZZXYJu1XYwB6oQ3LGRzKIljlhM5HtHvAnCMA71Wg4tksB3Dg9o1ElGFb9JWPULd6TpXAg41ua7XTd1FUl1XpFfc9zB2%2BhP0dTRNTBkeeRd01%2FV6ljRI3ods1EKdraVFwu0DtxnLiHJaPpWAfPH5aoktvtrmIjEuuTE3Lq%2FW7v3qCyOD5Ql%2BGfNU3%2Bb%2B%2BqZqI9xW25UhmuDMI7Upkww9qi%2FDclKG3AzPY0c4ayZwiBoti%2FxhMPFU7dVZ5hoiPDR4Jldey3rpMCuQT3pfqyKhfei%2Fa8u4gJ3YV3kBpy0syFpn8Xay4X%2Bp1%2F%2B0m1YMYr9D1jRr8kYzglUYQgFBi8bbB1zYWjRB2pu9XCz%2FP8CVnigeM%2B1x4VEEBg7YkYVuwxz8QSCNFOqL2TcbpsBCuAptm7jyoZqWlesEkwfNNnA6RwFXGGKoAfkWN8P2C0dKjMEzMwvsTbxAY6pgGg58lAlpAywC28BkVPA1J3tNQZnQoe4MLV%2F0VTJtrlwqjCPrf8aGdQWHc0SmUpPmoMLDWh9nR93YF3L3YWCRVLNc0%2FT0Fh5I4OCbJml0EyydtjLuaWInvfGs%2BAeqt0Qn1c%2F6sCMCUmAKatsEBfIKi0gKZvtM5t9VDER28yk9AxF0ubAWqOKfppExl2Sh9FNzyMD6Shm1vtH9QpYE21PN7J84oRffvV&X-Amz-Signature=6f98f76bee42e7e127267d7d8661a1992385fefef108c54672a75ca3596b03d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNKGXYT3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIH4is38rZsYJcMl4ulLMiVkDXgP77HAfuVlqomnWwCHVAiEAhMkkLtmEWcqPsqANep6DxJSiQtWDn5sF9cHlHBt%2BvH0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPourXjQ5m3SZzN7iSrcAx5kTUqGruyIzIkbrldFJqkV4%2BFlPORqBn0S8CW86qXaBm%2FgtYFNeE2tRI774nGNerbSGJYEpc45n5J58oqpyjZsKuB2DeD4%2BDRC0PoN8VsNb9CRWSXdOMHsXTNNL2SBJlpXPta6uVtk0Ony8OLW5GtvODN7w62O9miKuGZTIA2zf%2BxDPw%2BOOZwZ1pdK4zmTqkHi0TpaBXP7m5rumu5uD%2FC8sQpwUlk2HYL0m%2FPbZytTgOXLMEeLEqXjquxp%2BDzqmQcAVX8vqGp2Ank7BDR6KSsxJhAcG6MmDwPuFrnvJ%2BwxryKAVmQuKIixaLVm3uqajswzGSb2bjNL8PDjKfuxHxfkmPePVOjZ%2BpgYOLsRlATRCYxdRUFYyQIamGwP62oKQM52iNbPAuQykk1B%2B0qxBLElvEuS5P4mAh6w5B5sk8eJ2A3yW8ewhUvjmFwQR75Io8ct1oB%2BByipAKJYrcHeufE0WuBsZ1cRnz3aLV215so0vr3dy5J6t%2FkHWMGvzZYo5eyPxAwMWPKktzoD%2B%2FQHFuWP74oPtQ7TEveieTpPzEMLz%2F4%2FU%2BdmApibbMRYTQ1YhvsARP%2BV%2FNwgtW%2BRDcu5RZyToKEW2IfZZJJOQPasnsIm1BiHoOx%2F8PAT2pr9MNTE28QGOqUB0bW32m7R%2FruhTxhiAwoFnDKX13t2DjkId%2F2i0WeUeAet4952TM0Rz3KxPk2%2FZIzawP11ays0J1rC4Jf9cdkSTMoqcR2y6x0jVua0PM4fw1Gn%2BUxcA2sTM4In%2BM96flHRpDkbA1ZPhB2Ss%2BPcqpF3ZSnId7X0Ll61Y0i9akgJ0vS6DuUl3yQyJ%2BYG9WL5PNYvuH8WxwiDnium8dkAoeiaIpWklDv9&X-Amz-Signature=c39fada2eeac77089390e397443236c55213b677892a3e2a616e1ac77f7ce128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SPKWXPQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD2u8WrHh7S3n2X3gmOom58V6lLkY7D8LSOutRjLCp6SwIgKHzvCwx57tb%2Brsxn5rRXRTNJnngahN%2BMW%2BRkA%2FaX9%2FoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKV%2FeZmmt7hCC6qfUircA2UyrGOfXjXkL1M1C1oF8aSPklE0l4DLhoYBsOoNo0iA5ylb%2FhkV1BdDVUkpnQeaiSzACEWdK%2Fz6WixR8ir%2FRRs%2FdtBSzOBvlHoh1Rxud1%2BzAWPr%2BsHP6G0UwCZyWTAfkn8vwmxcWiXwnABMdhz4zp%2BDvXNE4xJMd%2BL9QgSzksvyhKH1LiOEscp066JhMi%2FM3C2GJL3Nclydmj6e4YQKqZZwZLHopVnulHvjd%2BuTfMEXsAF%2B8UAcuapRZCtAB28NY8Z9%2FUONQbC%2BEfJcs%2BJOmd4OOIXL1WR%2Foop%2Boxj0TDbEmd6JuwDcy5ptSdiQIOyUxu%2FqVIL%2Bf5nn8VJZyU0Jie7bHejDQiNC9K3LcGP9DxLCJrqoKNB7CuS2CjfogLB8pAum%2B8CQMtVMT9PaLqabsJx9Z%2BnsgI3w6HCfC5O8R%2ByVPD6oxg2wIE286TkIM1J0Mm66u%2FcjeZV%2FUiFeuyHHgf7Mgjsz9YlTge91XCj0W2S6hScWRSKtdpAOQhuxsf5Tof3uTO3vv6nl3%2F9J5U3OLtSvqAAajICwTqDQWKSab86bSiJ5aSWTSRwbtN%2B4F6b9aRCoFCTdIEZwuvpt9sH7vvBQX6KrMxjphYRhjJMCUU%2B10e4wDgx6WcZHkps3MIvF28QGOqUBbaMyC71OC%2FpWUxw2Z5Aio88D4t01eE9nMYKIOUA6IPFV1ERAZ9pnvyAd6ds99%2FBfEAyKNDp5%2BJDxIGGsxlQ90HcCliqFNGdt%2FPIJMSlX02FvKwPH00f5PwHyyrEtBFLv44bHq3Ih6bKa9h2fTZ1M8TcOCOWqqKc3ZFosLOlv58Ve38I1HYuNwbUqrr4EdbgWuAbOi9CArmndsu6RL097hZEbyCdJ&X-Amz-Signature=6cfaa2057431fe96fd06c6fa4f5e159e159441cee774d73b4b7738c0562810e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X542LKKA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGVrV7l6vCOuXQlTmIy9D1nd%2Bkg7EJ5ujSloZ5X9uJi%2FAiEAjip8kDEAg71cjohENkSWFEIk2x5rGYH%2F1CdvbL7W4vgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcslQfT5rm973hMNircAxFV98yUP1C2SZ5%2FrBcwtaNFBMtqe7sjPVO2ueu5tbHpIcoRDv5Ph3iW9ipbxiaxXJqycCsdG3j%2FRjlzkpse8VVseC3F38PFChq5HTPC%2BbWVCSRHrIZu4uVLzn%2B4WsrQ9TSNunXvFoLikU7z5nUIQBlpISQ3INTVSr8duKP%2Fof0Xz6wIANWNxBm%2BdgmWATxa1lMwhJv5GdtnLpobGav2SR23kdJx9UjSOzBzW8yjA8%2FwzqMwQPkDBxtQn6g2N9oe5nmn8tnCaRWtrUCqKmi3kXr6M2Wo6rjv5nhzJTd7ppIAM31cSdsPT79rmxAL7awRCJBzyyXc4X42IIjHPW2rY%2F0iZtPkhugeTaiqxk3p883fGXKqsltz8e844BK1EJx5m9K3wC8MLsbx8EJFQxZZDW6WED5e7u4TlkbwW3WaH4bKNzNZg8nHR4ubFjfPGJaHTbLYwEtYBqGVsy2jtnmxy0oZj7pDuRG45XvIyDxtemfdauvCC3nXtMrj8t7ltJPNOno5uFpaJKyHs27BAGwDAbd%2FAxDyAuoXla9S7FYkEjT07KnNmsBRspqsaThei72Co4BJUCmBmBwCeASmc%2FJAU4Y63T34UjBwmq8Xp%2BaKvhbadHVVW1aoqRNMGctFMKDE28QGOqUBeS4K9gp%2BwnrO1eFRdeu3n5w8K0hNu74v6JceQI7%2FJxYSXfPxC9JXisQW%2F1ZTyq2%2BKc9W9OEZ6a%2Fa%2Bhb5ziDmSZsebIROsg%2BvZmIsZ6LOYsSPRQhvvsWg6ih5jjyVBIneNPfmPNuo12emCWs%2FIQBWGQLFr9s2t05MNkJQ6ocI9Ytzi1wMkxUWWhW%2BozwnCXLJ6RC12mjjdvzMOmzfaQTzdY43Jzmz&X-Amz-Signature=dc2f03470f69c958528bb118b61ab37ff793d17286b502c3dd7d2d3eca6e384d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7F4PP3G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIDlgaWJmka9ckaBoJYhUeI6mSp%2FI8ElL0MaBq%2FsCki%2FeAiBFXmjYl9MMn4huzOe6u4Ob18LgKEsw%2BLw9JRk%2FY2jjoSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPniZ3%2Ft1OdWO%2BkV8KtwDx5b2NOewUaaF6OfwOKNQpSYpgCLaXmIPGCd94UCeRtznU3FJuXE7%2F4oVExs302yqugy705BA3js22fWCftMyYvilcHlB7YXBQnfuvLvuhjY2rYMiDPOClf1%2BGKf%2F%2Fl1%2BxO3LSSSfRVo4DUKufssQqkK09BV9a9lMjAO%2B7U%2BJIAJqGjEb%2Fx%2BOAEkHjd%2BSffYGEUZesMRW2jz0Ox8V1i%2FUIwZW%2FwvcAXbOxNlwr6tUv5Oc3FYtHSpXm5Ie%2F4PJnJ8%2BmAsJkkiz9XStIBUClaHKlJNOTwDgNtOj6lmw040OqnWkXMzd6Ut77rRN%2BvuoQwnMnfcG%2B5Fy2vaFvq%2F%2BRjJIQQJfhUcqPBb46cRfhtf0jlK%2BD0JCUqljq2yETDbWgjIKJgp9jX0QDay6JR13I4Wgg6ZuIaHXYtMeHra9WPk7HNHldWpLplHUb7vpqQLQBizkqhyUDY7zBxx2%2FGuqMjvhX389mld%2FxCTbm58YdCH99GzZEhqikfhsTEHWYVVbEkOAJ6X%2FpCZ5Q%2FmJ%2FA4NF%2FDbfBfZTJittS3Ulr9qC9%2FNCXpxWJt9p0BGwKyMWNyCbAzPt4y2nVWm2tzHFrAvLkWPsYtMHew7AqDEJPgdIA9kVlGRR6XujrW5UlnQ17UwisXbxAY6pgEpVB5O%2FrsPnP158S8aAVUiZkrw%2Fudg2If9ZHlGieJII5ptD4yfd0MMoS%2FcuhSuIvXyp3VTrIxnJ4QG%2BnPg8kJ%2FKRzfs%2BP9DOX38w191hr%2F7JrywPINMHUatUNfy1r81CH6SdzJGFJV1k7S3o2tqTQDgpIcnctIH7J8U4ciXURFdwWJho%2BAQUjWvP4Py1E8eKdVy90WSARizaLoHSU9pyNlYF1Fq6lC&X-Amz-Signature=6edfbe19b0cc4806116ca6dd81407a140ead69aa1272801c2d69e85dfdebccfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652BAZV5S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGv19cmEv%2FHYjHgfyn0yQrB%2BY6sNXrZmEERPfGXuGiAAAiEAmaNlrEfCz8IUNnKWo2cPAsKFTjafqqBxRhRzQjFmG%2FkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0uTQfRAoG03ruziCrcA3oXjiKi37i9v%2FGc2QkfZDkW3FVmIv%2FGPu%2Bpq7T2kEsVGNPR6hEaLtqQyt%2F1MRLYSGFSCcWpzpJVODy8lcIZDcU1zVoZTc14swIATky8v2Lggzsy3UfsQqo4O7Sh6rrpOnn%2BA388d4cUNykDlFahvEjyGsTfggm3l9mFWc9ULsFt%2BJ5eefvnOnU6tKzPOkcqTC3tl9dxzlySLzVpn5CrjWZRRzD4VYWaHxvJKqzG42TGTcTuvdASKV5%2BMgPgpKpJ7%2BpkyV6udQDXPxqQNesuyEcH%2Fjgfk5n4%2F0PKCBrRQUiXqV5kM80PkmXRpUmVs9geZxVjdxRm2Ho4iQrMM%2Bi5zSSKgVDmvDaqgb9v%2BuF%2BETBqQKvfKczNoxTEdgraCdztS%2FtpcXiNX2bnZnP0Rw2t26PtGlP876O8Jyd2EqmZzdNiMZL4FzbDbdsaLCMPhtPlpdbi%2F7uTDGLB%2B8hYbH2r8P3g8OMhznTXsQOsxU4k69Pe3GhgkQp%2B8ELvZbi9eaYZ7aQt5%2BwaUA6PxiNeUApmZBLFMsCFSDoYbzER8ustD6tHohmFOX21F8a7sOfdFYDU6Uk8KVfU%2B2ZqLynzhQQ2u%2FzjzvOcc3FXpBhwMi9YQc7QHntg4gXa%2BEH%2FzNULMKTK28QGOqUB0gfu3YHRfBQ0Z8kgFvjq9vF3ioFPjgFACE%2BZgFOPZYj91jCG%2FJ82RS2QwUMxxiXi0Zmj2rSBX3wahX8TCgb%2Fo5m6eO4QJtiu1x%2BLnddmthtvCXWozGKUTHggLYXUL3aXdBEToaeg0gQVPAad0RwMDl8hCvEXXQY2ftwx6x9AaKfKwEeeXK1Gjqrpk%2BS4%2FoZEm4PFWI%2FUi4Gg2lrCM0%2FNPUQexQPg&X-Amz-Signature=c0ea18b7a229595f6b5dc3ef05dc6ce6c6215f5fd2cd3ec87524d8eec3233262&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652BAZV5S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGv19cmEv%2FHYjHgfyn0yQrB%2BY6sNXrZmEERPfGXuGiAAAiEAmaNlrEfCz8IUNnKWo2cPAsKFTjafqqBxRhRzQjFmG%2FkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0uTQfRAoG03ruziCrcA3oXjiKi37i9v%2FGc2QkfZDkW3FVmIv%2FGPu%2Bpq7T2kEsVGNPR6hEaLtqQyt%2F1MRLYSGFSCcWpzpJVODy8lcIZDcU1zVoZTc14swIATky8v2Lggzsy3UfsQqo4O7Sh6rrpOnn%2BA388d4cUNykDlFahvEjyGsTfggm3l9mFWc9ULsFt%2BJ5eefvnOnU6tKzPOkcqTC3tl9dxzlySLzVpn5CrjWZRRzD4VYWaHxvJKqzG42TGTcTuvdASKV5%2BMgPgpKpJ7%2BpkyV6udQDXPxqQNesuyEcH%2Fjgfk5n4%2F0PKCBrRQUiXqV5kM80PkmXRpUmVs9geZxVjdxRm2Ho4iQrMM%2Bi5zSSKgVDmvDaqgb9v%2BuF%2BETBqQKvfKczNoxTEdgraCdztS%2FtpcXiNX2bnZnP0Rw2t26PtGlP876O8Jyd2EqmZzdNiMZL4FzbDbdsaLCMPhtPlpdbi%2F7uTDGLB%2B8hYbH2r8P3g8OMhznTXsQOsxU4k69Pe3GhgkQp%2B8ELvZbi9eaYZ7aQt5%2BwaUA6PxiNeUApmZBLFMsCFSDoYbzER8ustD6tHohmFOX21F8a7sOfdFYDU6Uk8KVfU%2B2ZqLynzhQQ2u%2FzjzvOcc3FXpBhwMi9YQc7QHntg4gXa%2BEH%2FzNULMKTK28QGOqUB0gfu3YHRfBQ0Z8kgFvjq9vF3ioFPjgFACE%2BZgFOPZYj91jCG%2FJ82RS2QwUMxxiXi0Zmj2rSBX3wahX8TCgb%2Fo5m6eO4QJtiu1x%2BLnddmthtvCXWozGKUTHggLYXUL3aXdBEToaeg0gQVPAad0RwMDl8hCvEXXQY2ftwx6x9AaKfKwEeeXK1Gjqrpk%2BS4%2FoZEm4PFWI%2FUi4Gg2lrCM0%2FNPUQexQPg&X-Amz-Signature=15785b403168f55c8de118a727989c2078bda567992b5d3dc7f5edbfeb78febe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCY6NGCH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDlieK5TxiXXHAiFmYH%2FHSdkl6tvjU8qL0d5OSECV2bxAIhAOioQ57miJgdAHlKBVOb2%2F1Ox5g%2B2KB0eNKuZbOnNi9cKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYf%2BrLCcGPhd%2BLuNMq3ANZc%2FzZ%2F9p9Mp7l4JZYKA0haJ8oUKo4svyEsTrZr5cW0fFsPxOAUbsa9KGv%2F8SdC7NYqPdMNa87DtrTq6ooVCqdT1mdz1Zzma8oWbxUnN8o6g%2BBCyfpJolPzwIP2HVERyli%2BovU0v931NKLBaIJPq7FHaquTmQgboYtn6D1OM2jMx7Kc3L5l%2F%2BFn7GcB0wwu4%2BosA2bT9rzRQiKAh4CcRDM%2FkJ%2FjLPTVSalrGvZ5DqOWUaJzDuAJ0lRVhRCWlm8%2BJdbqIOkc2z1xoJLRVLHCbxwA1SmZWtbWJCweiP077J%2B827W9BNDOxNX1zIx8P1s1PRthqCoZqmXwfj6Eozm7W7jYcy7WL5Hg6TqIVUxRvuVsx%2BHiATtyj1JGPdd%2BjzCv%2F%2Fgv8VKxcVAlNn5%2Fl0dqirF77Soo1rr6klht7PXtnXo6qAtQYHtMiQUN2fMdqO%2BzXjALhlltgUCoTlxAdXc8DtMJAwqNeUW%2ByoG9IikIJ%2BVeLoIn8cakGt9wGS1eVvf0R%2F5CuWGJ1afThDg7M3rNaoxRc9olzdjBUZ6fZYEg5%2BNKzeodJrhX%2FI5hjO29%2FySsE2zR9vGZza%2FcpE3diICftyC4mfIGsefvYvO%2B%2Bv%2BOMUAZWge4VHMEV77e7XVZDCKxdvEBjqkAZOwZPYYXz9YgRLYkB8vdcd0SRl7tznAwNLc5GD7z30e1CPAl76gT8EVn33n9Ori2G864d0%2BWRk5JlczeUTpz0%2Futfg3ZEJudqhQQELOcjM55rmepIuS9eOPQIQQwHRMcS9RxlK13czsVL3jY562bTYUmiN4HnFuIBaFQo9nX9IW37H2wSLIv93ZOfLOeZsCQehWlkBvoT1E6%2FoSfBfDsODitkDs&X-Amz-Signature=a2a84e74ca20f66a96a9723cbced423609e9c6ee03a7733c3d2e997d06425f6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCY6NGCH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDlieK5TxiXXHAiFmYH%2FHSdkl6tvjU8qL0d5OSECV2bxAIhAOioQ57miJgdAHlKBVOb2%2F1Ox5g%2B2KB0eNKuZbOnNi9cKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYf%2BrLCcGPhd%2BLuNMq3ANZc%2FzZ%2F9p9Mp7l4JZYKA0haJ8oUKo4svyEsTrZr5cW0fFsPxOAUbsa9KGv%2F8SdC7NYqPdMNa87DtrTq6ooVCqdT1mdz1Zzma8oWbxUnN8o6g%2BBCyfpJolPzwIP2HVERyli%2BovU0v931NKLBaIJPq7FHaquTmQgboYtn6D1OM2jMx7Kc3L5l%2F%2BFn7GcB0wwu4%2BosA2bT9rzRQiKAh4CcRDM%2FkJ%2FjLPTVSalrGvZ5DqOWUaJzDuAJ0lRVhRCWlm8%2BJdbqIOkc2z1xoJLRVLHCbxwA1SmZWtbWJCweiP077J%2B827W9BNDOxNX1zIx8P1s1PRthqCoZqmXwfj6Eozm7W7jYcy7WL5Hg6TqIVUxRvuVsx%2BHiATtyj1JGPdd%2BjzCv%2F%2Fgv8VKxcVAlNn5%2Fl0dqirF77Soo1rr6klht7PXtnXo6qAtQYHtMiQUN2fMdqO%2BzXjALhlltgUCoTlxAdXc8DtMJAwqNeUW%2ByoG9IikIJ%2BVeLoIn8cakGt9wGS1eVvf0R%2F5CuWGJ1afThDg7M3rNaoxRc9olzdjBUZ6fZYEg5%2BNKzeodJrhX%2FI5hjO29%2FySsE2zR9vGZza%2FcpE3diICftyC4mfIGsefvYvO%2B%2Bv%2BOMUAZWge4VHMEV77e7XVZDCKxdvEBjqkAZOwZPYYXz9YgRLYkB8vdcd0SRl7tznAwNLc5GD7z30e1CPAl76gT8EVn33n9Ori2G864d0%2BWRk5JlczeUTpz0%2Futfg3ZEJudqhQQELOcjM55rmepIuS9eOPQIQQwHRMcS9RxlK13czsVL3jY562bTYUmiN4HnFuIBaFQo9nX9IW37H2wSLIv93ZOfLOeZsCQehWlkBvoT1E6%2FoSfBfDsODitkDs&X-Amz-Signature=1df835f3b0fd7564faa42035b8ff8ada375a2d9808ea80f87559674ae9e2536f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCY6NGCH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDlieK5TxiXXHAiFmYH%2FHSdkl6tvjU8qL0d5OSECV2bxAIhAOioQ57miJgdAHlKBVOb2%2F1Ox5g%2B2KB0eNKuZbOnNi9cKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYf%2BrLCcGPhd%2BLuNMq3ANZc%2FzZ%2F9p9Mp7l4JZYKA0haJ8oUKo4svyEsTrZr5cW0fFsPxOAUbsa9KGv%2F8SdC7NYqPdMNa87DtrTq6ooVCqdT1mdz1Zzma8oWbxUnN8o6g%2BBCyfpJolPzwIP2HVERyli%2BovU0v931NKLBaIJPq7FHaquTmQgboYtn6D1OM2jMx7Kc3L5l%2F%2BFn7GcB0wwu4%2BosA2bT9rzRQiKAh4CcRDM%2FkJ%2FjLPTVSalrGvZ5DqOWUaJzDuAJ0lRVhRCWlm8%2BJdbqIOkc2z1xoJLRVLHCbxwA1SmZWtbWJCweiP077J%2B827W9BNDOxNX1zIx8P1s1PRthqCoZqmXwfj6Eozm7W7jYcy7WL5Hg6TqIVUxRvuVsx%2BHiATtyj1JGPdd%2BjzCv%2F%2Fgv8VKxcVAlNn5%2Fl0dqirF77Soo1rr6klht7PXtnXo6qAtQYHtMiQUN2fMdqO%2BzXjALhlltgUCoTlxAdXc8DtMJAwqNeUW%2ByoG9IikIJ%2BVeLoIn8cakGt9wGS1eVvf0R%2F5CuWGJ1afThDg7M3rNaoxRc9olzdjBUZ6fZYEg5%2BNKzeodJrhX%2FI5hjO29%2FySsE2zR9vGZza%2FcpE3diICftyC4mfIGsefvYvO%2B%2Bv%2BOMUAZWge4VHMEV77e7XVZDCKxdvEBjqkAZOwZPYYXz9YgRLYkB8vdcd0SRl7tznAwNLc5GD7z30e1CPAl76gT8EVn33n9Ori2G864d0%2BWRk5JlczeUTpz0%2Futfg3ZEJudqhQQELOcjM55rmepIuS9eOPQIQQwHRMcS9RxlK13czsVL3jY562bTYUmiN4HnFuIBaFQo9nX9IW37H2wSLIv93ZOfLOeZsCQehWlkBvoT1E6%2FoSfBfDsODitkDs&X-Amz-Signature=a93e3a2b350f025afc78f7decab3420e9f1b3c21e5526dbaa63ef4a0144da4ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCY6NGCH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDlieK5TxiXXHAiFmYH%2FHSdkl6tvjU8qL0d5OSECV2bxAIhAOioQ57miJgdAHlKBVOb2%2F1Ox5g%2B2KB0eNKuZbOnNi9cKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYf%2BrLCcGPhd%2BLuNMq3ANZc%2FzZ%2F9p9Mp7l4JZYKA0haJ8oUKo4svyEsTrZr5cW0fFsPxOAUbsa9KGv%2F8SdC7NYqPdMNa87DtrTq6ooVCqdT1mdz1Zzma8oWbxUnN8o6g%2BBCyfpJolPzwIP2HVERyli%2BovU0v931NKLBaIJPq7FHaquTmQgboYtn6D1OM2jMx7Kc3L5l%2F%2BFn7GcB0wwu4%2BosA2bT9rzRQiKAh4CcRDM%2FkJ%2FjLPTVSalrGvZ5DqOWUaJzDuAJ0lRVhRCWlm8%2BJdbqIOkc2z1xoJLRVLHCbxwA1SmZWtbWJCweiP077J%2B827W9BNDOxNX1zIx8P1s1PRthqCoZqmXwfj6Eozm7W7jYcy7WL5Hg6TqIVUxRvuVsx%2BHiATtyj1JGPdd%2BjzCv%2F%2Fgv8VKxcVAlNn5%2Fl0dqirF77Soo1rr6klht7PXtnXo6qAtQYHtMiQUN2fMdqO%2BzXjALhlltgUCoTlxAdXc8DtMJAwqNeUW%2ByoG9IikIJ%2BVeLoIn8cakGt9wGS1eVvf0R%2F5CuWGJ1afThDg7M3rNaoxRc9olzdjBUZ6fZYEg5%2BNKzeodJrhX%2FI5hjO29%2FySsE2zR9vGZza%2FcpE3diICftyC4mfIGsefvYvO%2B%2Bv%2BOMUAZWge4VHMEV77e7XVZDCKxdvEBjqkAZOwZPYYXz9YgRLYkB8vdcd0SRl7tznAwNLc5GD7z30e1CPAl76gT8EVn33n9Ori2G864d0%2BWRk5JlczeUTpz0%2Futfg3ZEJudqhQQELOcjM55rmepIuS9eOPQIQQwHRMcS9RxlK13czsVL3jY562bTYUmiN4HnFuIBaFQo9nX9IW37H2wSLIv93ZOfLOeZsCQehWlkBvoT1E6%2FoSfBfDsODitkDs&X-Amz-Signature=4c90315dc05a6564a0125e92ae0660ead0d22f0e393b45c5d49ef175567cc0a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCY6NGCH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDlieK5TxiXXHAiFmYH%2FHSdkl6tvjU8qL0d5OSECV2bxAIhAOioQ57miJgdAHlKBVOb2%2F1Ox5g%2B2KB0eNKuZbOnNi9cKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYf%2BrLCcGPhd%2BLuNMq3ANZc%2FzZ%2F9p9Mp7l4JZYKA0haJ8oUKo4svyEsTrZr5cW0fFsPxOAUbsa9KGv%2F8SdC7NYqPdMNa87DtrTq6ooVCqdT1mdz1Zzma8oWbxUnN8o6g%2BBCyfpJolPzwIP2HVERyli%2BovU0v931NKLBaIJPq7FHaquTmQgboYtn6D1OM2jMx7Kc3L5l%2F%2BFn7GcB0wwu4%2BosA2bT9rzRQiKAh4CcRDM%2FkJ%2FjLPTVSalrGvZ5DqOWUaJzDuAJ0lRVhRCWlm8%2BJdbqIOkc2z1xoJLRVLHCbxwA1SmZWtbWJCweiP077J%2B827W9BNDOxNX1zIx8P1s1PRthqCoZqmXwfj6Eozm7W7jYcy7WL5Hg6TqIVUxRvuVsx%2BHiATtyj1JGPdd%2BjzCv%2F%2Fgv8VKxcVAlNn5%2Fl0dqirF77Soo1rr6klht7PXtnXo6qAtQYHtMiQUN2fMdqO%2BzXjALhlltgUCoTlxAdXc8DtMJAwqNeUW%2ByoG9IikIJ%2BVeLoIn8cakGt9wGS1eVvf0R%2F5CuWGJ1afThDg7M3rNaoxRc9olzdjBUZ6fZYEg5%2BNKzeodJrhX%2FI5hjO29%2FySsE2zR9vGZza%2FcpE3diICftyC4mfIGsefvYvO%2B%2Bv%2BOMUAZWge4VHMEV77e7XVZDCKxdvEBjqkAZOwZPYYXz9YgRLYkB8vdcd0SRl7tznAwNLc5GD7z30e1CPAl76gT8EVn33n9Ori2G864d0%2BWRk5JlczeUTpz0%2Futfg3ZEJudqhQQELOcjM55rmepIuS9eOPQIQQwHRMcS9RxlK13czsVL3jY562bTYUmiN4HnFuIBaFQo9nX9IW37H2wSLIv93ZOfLOeZsCQehWlkBvoT1E6%2FoSfBfDsODitkDs&X-Amz-Signature=bd682797ecdd8c461117a8d73bea8993cdc555ea56da5288b10ca72fb65a9ce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCY6NGCH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDlieK5TxiXXHAiFmYH%2FHSdkl6tvjU8qL0d5OSECV2bxAIhAOioQ57miJgdAHlKBVOb2%2F1Ox5g%2B2KB0eNKuZbOnNi9cKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYf%2BrLCcGPhd%2BLuNMq3ANZc%2FzZ%2F9p9Mp7l4JZYKA0haJ8oUKo4svyEsTrZr5cW0fFsPxOAUbsa9KGv%2F8SdC7NYqPdMNa87DtrTq6ooVCqdT1mdz1Zzma8oWbxUnN8o6g%2BBCyfpJolPzwIP2HVERyli%2BovU0v931NKLBaIJPq7FHaquTmQgboYtn6D1OM2jMx7Kc3L5l%2F%2BFn7GcB0wwu4%2BosA2bT9rzRQiKAh4CcRDM%2FkJ%2FjLPTVSalrGvZ5DqOWUaJzDuAJ0lRVhRCWlm8%2BJdbqIOkc2z1xoJLRVLHCbxwA1SmZWtbWJCweiP077J%2B827W9BNDOxNX1zIx8P1s1PRthqCoZqmXwfj6Eozm7W7jYcy7WL5Hg6TqIVUxRvuVsx%2BHiATtyj1JGPdd%2BjzCv%2F%2Fgv8VKxcVAlNn5%2Fl0dqirF77Soo1rr6klht7PXtnXo6qAtQYHtMiQUN2fMdqO%2BzXjALhlltgUCoTlxAdXc8DtMJAwqNeUW%2ByoG9IikIJ%2BVeLoIn8cakGt9wGS1eVvf0R%2F5CuWGJ1afThDg7M3rNaoxRc9olzdjBUZ6fZYEg5%2BNKzeodJrhX%2FI5hjO29%2FySsE2zR9vGZza%2FcpE3diICftyC4mfIGsefvYvO%2B%2Bv%2BOMUAZWge4VHMEV77e7XVZDCKxdvEBjqkAZOwZPYYXz9YgRLYkB8vdcd0SRl7tznAwNLc5GD7z30e1CPAl76gT8EVn33n9Ori2G864d0%2BWRk5JlczeUTpz0%2Futfg3ZEJudqhQQELOcjM55rmepIuS9eOPQIQQwHRMcS9RxlK13czsVL3jY562bTYUmiN4HnFuIBaFQo9nX9IW37H2wSLIv93ZOfLOeZsCQehWlkBvoT1E6%2FoSfBfDsODitkDs&X-Amz-Signature=8ad22c2f1229234288e5973ecf2c55a254bcfc6606a0dfd4cc5250562550870a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCY6NGCH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDlieK5TxiXXHAiFmYH%2FHSdkl6tvjU8qL0d5OSECV2bxAIhAOioQ57miJgdAHlKBVOb2%2F1Ox5g%2B2KB0eNKuZbOnNi9cKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYf%2BrLCcGPhd%2BLuNMq3ANZc%2FzZ%2F9p9Mp7l4JZYKA0haJ8oUKo4svyEsTrZr5cW0fFsPxOAUbsa9KGv%2F8SdC7NYqPdMNa87DtrTq6ooVCqdT1mdz1Zzma8oWbxUnN8o6g%2BBCyfpJolPzwIP2HVERyli%2BovU0v931NKLBaIJPq7FHaquTmQgboYtn6D1OM2jMx7Kc3L5l%2F%2BFn7GcB0wwu4%2BosA2bT9rzRQiKAh4CcRDM%2FkJ%2FjLPTVSalrGvZ5DqOWUaJzDuAJ0lRVhRCWlm8%2BJdbqIOkc2z1xoJLRVLHCbxwA1SmZWtbWJCweiP077J%2B827W9BNDOxNX1zIx8P1s1PRthqCoZqmXwfj6Eozm7W7jYcy7WL5Hg6TqIVUxRvuVsx%2BHiATtyj1JGPdd%2BjzCv%2F%2Fgv8VKxcVAlNn5%2Fl0dqirF77Soo1rr6klht7PXtnXo6qAtQYHtMiQUN2fMdqO%2BzXjALhlltgUCoTlxAdXc8DtMJAwqNeUW%2ByoG9IikIJ%2BVeLoIn8cakGt9wGS1eVvf0R%2F5CuWGJ1afThDg7M3rNaoxRc9olzdjBUZ6fZYEg5%2BNKzeodJrhX%2FI5hjO29%2FySsE2zR9vGZza%2FcpE3diICftyC4mfIGsefvYvO%2B%2Bv%2BOMUAZWge4VHMEV77e7XVZDCKxdvEBjqkAZOwZPYYXz9YgRLYkB8vdcd0SRl7tznAwNLc5GD7z30e1CPAl76gT8EVn33n9Ori2G864d0%2BWRk5JlczeUTpz0%2Futfg3ZEJudqhQQELOcjM55rmepIuS9eOPQIQQwHRMcS9RxlK13czsVL3jY562bTYUmiN4HnFuIBaFQo9nX9IW37H2wSLIv93ZOfLOeZsCQehWlkBvoT1E6%2FoSfBfDsODitkDs&X-Amz-Signature=a93e3a2b350f025afc78f7decab3420e9f1b3c21e5526dbaa63ef4a0144da4ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCY6NGCH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDlieK5TxiXXHAiFmYH%2FHSdkl6tvjU8qL0d5OSECV2bxAIhAOioQ57miJgdAHlKBVOb2%2F1Ox5g%2B2KB0eNKuZbOnNi9cKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYf%2BrLCcGPhd%2BLuNMq3ANZc%2FzZ%2F9p9Mp7l4JZYKA0haJ8oUKo4svyEsTrZr5cW0fFsPxOAUbsa9KGv%2F8SdC7NYqPdMNa87DtrTq6ooVCqdT1mdz1Zzma8oWbxUnN8o6g%2BBCyfpJolPzwIP2HVERyli%2BovU0v931NKLBaIJPq7FHaquTmQgboYtn6D1OM2jMx7Kc3L5l%2F%2BFn7GcB0wwu4%2BosA2bT9rzRQiKAh4CcRDM%2FkJ%2FjLPTVSalrGvZ5DqOWUaJzDuAJ0lRVhRCWlm8%2BJdbqIOkc2z1xoJLRVLHCbxwA1SmZWtbWJCweiP077J%2B827W9BNDOxNX1zIx8P1s1PRthqCoZqmXwfj6Eozm7W7jYcy7WL5Hg6TqIVUxRvuVsx%2BHiATtyj1JGPdd%2BjzCv%2F%2Fgv8VKxcVAlNn5%2Fl0dqirF77Soo1rr6klht7PXtnXo6qAtQYHtMiQUN2fMdqO%2BzXjALhlltgUCoTlxAdXc8DtMJAwqNeUW%2ByoG9IikIJ%2BVeLoIn8cakGt9wGS1eVvf0R%2F5CuWGJ1afThDg7M3rNaoxRc9olzdjBUZ6fZYEg5%2BNKzeodJrhX%2FI5hjO29%2FySsE2zR9vGZza%2FcpE3diICftyC4mfIGsefvYvO%2B%2Bv%2BOMUAZWge4VHMEV77e7XVZDCKxdvEBjqkAZOwZPYYXz9YgRLYkB8vdcd0SRl7tznAwNLc5GD7z30e1CPAl76gT8EVn33n9Ori2G864d0%2BWRk5JlczeUTpz0%2Futfg3ZEJudqhQQELOcjM55rmepIuS9eOPQIQQwHRMcS9RxlK13czsVL3jY562bTYUmiN4HnFuIBaFQo9nX9IW37H2wSLIv93ZOfLOeZsCQehWlkBvoT1E6%2FoSfBfDsODitkDs&X-Amz-Signature=8e5d2749329e9d112058dd6bedaf3fe34c78a3183b40fdb0318a2916fe6ecba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCY6NGCH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDlieK5TxiXXHAiFmYH%2FHSdkl6tvjU8qL0d5OSECV2bxAIhAOioQ57miJgdAHlKBVOb2%2F1Ox5g%2B2KB0eNKuZbOnNi9cKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYf%2BrLCcGPhd%2BLuNMq3ANZc%2FzZ%2F9p9Mp7l4JZYKA0haJ8oUKo4svyEsTrZr5cW0fFsPxOAUbsa9KGv%2F8SdC7NYqPdMNa87DtrTq6ooVCqdT1mdz1Zzma8oWbxUnN8o6g%2BBCyfpJolPzwIP2HVERyli%2BovU0v931NKLBaIJPq7FHaquTmQgboYtn6D1OM2jMx7Kc3L5l%2F%2BFn7GcB0wwu4%2BosA2bT9rzRQiKAh4CcRDM%2FkJ%2FjLPTVSalrGvZ5DqOWUaJzDuAJ0lRVhRCWlm8%2BJdbqIOkc2z1xoJLRVLHCbxwA1SmZWtbWJCweiP077J%2B827W9BNDOxNX1zIx8P1s1PRthqCoZqmXwfj6Eozm7W7jYcy7WL5Hg6TqIVUxRvuVsx%2BHiATtyj1JGPdd%2BjzCv%2F%2Fgv8VKxcVAlNn5%2Fl0dqirF77Soo1rr6klht7PXtnXo6qAtQYHtMiQUN2fMdqO%2BzXjALhlltgUCoTlxAdXc8DtMJAwqNeUW%2ByoG9IikIJ%2BVeLoIn8cakGt9wGS1eVvf0R%2F5CuWGJ1afThDg7M3rNaoxRc9olzdjBUZ6fZYEg5%2BNKzeodJrhX%2FI5hjO29%2FySsE2zR9vGZza%2FcpE3diICftyC4mfIGsefvYvO%2B%2Bv%2BOMUAZWge4VHMEV77e7XVZDCKxdvEBjqkAZOwZPYYXz9YgRLYkB8vdcd0SRl7tznAwNLc5GD7z30e1CPAl76gT8EVn33n9Ori2G864d0%2BWRk5JlczeUTpz0%2Futfg3ZEJudqhQQELOcjM55rmepIuS9eOPQIQQwHRMcS9RxlK13czsVL3jY562bTYUmiN4HnFuIBaFQo9nX9IW37H2wSLIv93ZOfLOeZsCQehWlkBvoT1E6%2FoSfBfDsODitkDs&X-Amz-Signature=327f83ab551ed93851ef115c30ff9ec028c74d2954602dc11b9ad2ec85428d1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCY6NGCH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDlieK5TxiXXHAiFmYH%2FHSdkl6tvjU8qL0d5OSECV2bxAIhAOioQ57miJgdAHlKBVOb2%2F1Ox5g%2B2KB0eNKuZbOnNi9cKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYf%2BrLCcGPhd%2BLuNMq3ANZc%2FzZ%2F9p9Mp7l4JZYKA0haJ8oUKo4svyEsTrZr5cW0fFsPxOAUbsa9KGv%2F8SdC7NYqPdMNa87DtrTq6ooVCqdT1mdz1Zzma8oWbxUnN8o6g%2BBCyfpJolPzwIP2HVERyli%2BovU0v931NKLBaIJPq7FHaquTmQgboYtn6D1OM2jMx7Kc3L5l%2F%2BFn7GcB0wwu4%2BosA2bT9rzRQiKAh4CcRDM%2FkJ%2FjLPTVSalrGvZ5DqOWUaJzDuAJ0lRVhRCWlm8%2BJdbqIOkc2z1xoJLRVLHCbxwA1SmZWtbWJCweiP077J%2B827W9BNDOxNX1zIx8P1s1PRthqCoZqmXwfj6Eozm7W7jYcy7WL5Hg6TqIVUxRvuVsx%2BHiATtyj1JGPdd%2BjzCv%2F%2Fgv8VKxcVAlNn5%2Fl0dqirF77Soo1rr6klht7PXtnXo6qAtQYHtMiQUN2fMdqO%2BzXjALhlltgUCoTlxAdXc8DtMJAwqNeUW%2ByoG9IikIJ%2BVeLoIn8cakGt9wGS1eVvf0R%2F5CuWGJ1afThDg7M3rNaoxRc9olzdjBUZ6fZYEg5%2BNKzeodJrhX%2FI5hjO29%2FySsE2zR9vGZza%2FcpE3diICftyC4mfIGsefvYvO%2B%2Bv%2BOMUAZWge4VHMEV77e7XVZDCKxdvEBjqkAZOwZPYYXz9YgRLYkB8vdcd0SRl7tznAwNLc5GD7z30e1CPAl76gT8EVn33n9Ori2G864d0%2BWRk5JlczeUTpz0%2Futfg3ZEJudqhQQELOcjM55rmepIuS9eOPQIQQwHRMcS9RxlK13czsVL3jY562bTYUmiN4HnFuIBaFQo9nX9IW37H2wSLIv93ZOfLOeZsCQehWlkBvoT1E6%2FoSfBfDsODitkDs&X-Amz-Signature=d0c7d299b4e5752654ed9a9af0005de5d942c24e20ab03ba08ba268125a27c4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
