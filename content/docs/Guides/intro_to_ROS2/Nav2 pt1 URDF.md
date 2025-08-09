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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664KJFOA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD6wTCbyDFiG8OcD4Q4GGHB8HbyEc5NJiyO9nGomkUqiQIgXcFpJKQ82eQrPXteSbeZsWc3MK08go%2FteTCmiwSJjcgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAekZxKGaUTHWj40tSrcA8vFMjLJdzKgY18k0Hgr2uG0zCw0pcm9%2FyZWxgTgBg7sPYaEce%2FfXh7p5WCkhaEKBQ%2FH3LhBmQ%2F6RS%2BXDlVw4ugsMD0n5TsnGqhlawjQHEOk6YpsJraAL5FgVlU5IoPj%2BOvagUESr1ToDpq9LQoZhP0KP8ER6P6FRGj3DwRfhOZG%2FTOzudB1%2Fdk4gc07mlxxzQ3DXKanNWCES5LfHiIeAzbgu2gifJN2zmn1ZgFC6L4kydQka4pWztEwtFebGe0dXDzubg9a0NvyXtwqzTphjcTXoEP54QGVDdACjroxR%2FIhpBIO1EGYw%2FM6Vlxi1k97whGFjLjidEGWOoD8HpGE8vTNSPfGUa8nrnrQyk2eF26MM7JtBRpwM%2BV003KbSiOyYe541twzTD79Nhx3J8XuQAlm5T%2Fv8L8kK1qROsPHPXbuTmV%2BMoT1aE9XgwcF60nqIAy9IJJQ3z2%2F2s2og3E5BiQGcz0ak02rsUvqFlN0de3AQ4zaMrbfw%2BHl2%2Fo7RJIVB8XACqik2l1S1QNQcSam3CQFjw9hZjEAdB0bgMvsV4lGunSI6UcDAWeqHrOHHzx4Sh6IJGVCirQBHwQw%2FOL44gJ2%2FVHJDHAHhAaYshDsdbiOHP1n8%2BF52tX0FikwMLTE28QGOqUBwZ7qXik7pj4M0o3oirTrrlbQHZEKwwtTBYwIYSVrqC9xRRAa74QG8%2FtPJiwRvlVpC%2BcW8DEL4j65Rt%2Bkcg3h1q6BoQqo79%2BdrdYaAOqTCVASAQbzCJcLBc%2BeVlruXPf3ljknWebxUppnZ2cbAe0tf%2FSUQofO87i0jERiIgDrQFN91wosBIdImLqwyHBx9IJR3mNZ3rmL0pZXA2NZQVL%2BnRTwnx31&X-Amz-Signature=29579172dc211908ca247d0d25cb99113df80e5b8d750626fab1bb7757535ec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664KJFOA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD6wTCbyDFiG8OcD4Q4GGHB8HbyEc5NJiyO9nGomkUqiQIgXcFpJKQ82eQrPXteSbeZsWc3MK08go%2FteTCmiwSJjcgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAekZxKGaUTHWj40tSrcA8vFMjLJdzKgY18k0Hgr2uG0zCw0pcm9%2FyZWxgTgBg7sPYaEce%2FfXh7p5WCkhaEKBQ%2FH3LhBmQ%2F6RS%2BXDlVw4ugsMD0n5TsnGqhlawjQHEOk6YpsJraAL5FgVlU5IoPj%2BOvagUESr1ToDpq9LQoZhP0KP8ER6P6FRGj3DwRfhOZG%2FTOzudB1%2Fdk4gc07mlxxzQ3DXKanNWCES5LfHiIeAzbgu2gifJN2zmn1ZgFC6L4kydQka4pWztEwtFebGe0dXDzubg9a0NvyXtwqzTphjcTXoEP54QGVDdACjroxR%2FIhpBIO1EGYw%2FM6Vlxi1k97whGFjLjidEGWOoD8HpGE8vTNSPfGUa8nrnrQyk2eF26MM7JtBRpwM%2BV003KbSiOyYe541twzTD79Nhx3J8XuQAlm5T%2Fv8L8kK1qROsPHPXbuTmV%2BMoT1aE9XgwcF60nqIAy9IJJQ3z2%2F2s2og3E5BiQGcz0ak02rsUvqFlN0de3AQ4zaMrbfw%2BHl2%2Fo7RJIVB8XACqik2l1S1QNQcSam3CQFjw9hZjEAdB0bgMvsV4lGunSI6UcDAWeqHrOHHzx4Sh6IJGVCirQBHwQw%2FOL44gJ2%2FVHJDHAHhAaYshDsdbiOHP1n8%2BF52tX0FikwMLTE28QGOqUBwZ7qXik7pj4M0o3oirTrrlbQHZEKwwtTBYwIYSVrqC9xRRAa74QG8%2FtPJiwRvlVpC%2BcW8DEL4j65Rt%2Bkcg3h1q6BoQqo79%2BdrdYaAOqTCVASAQbzCJcLBc%2BeVlruXPf3ljknWebxUppnZ2cbAe0tf%2FSUQofO87i0jERiIgDrQFN91wosBIdImLqwyHBx9IJR3mNZ3rmL0pZXA2NZQVL%2BnRTwnx31&X-Amz-Signature=2eb2024c5a22d74f570fee4db95f15eba85f14057f44218cc73d52a8833cb2d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664KJFOA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD6wTCbyDFiG8OcD4Q4GGHB8HbyEc5NJiyO9nGomkUqiQIgXcFpJKQ82eQrPXteSbeZsWc3MK08go%2FteTCmiwSJjcgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAekZxKGaUTHWj40tSrcA8vFMjLJdzKgY18k0Hgr2uG0zCw0pcm9%2FyZWxgTgBg7sPYaEce%2FfXh7p5WCkhaEKBQ%2FH3LhBmQ%2F6RS%2BXDlVw4ugsMD0n5TsnGqhlawjQHEOk6YpsJraAL5FgVlU5IoPj%2BOvagUESr1ToDpq9LQoZhP0KP8ER6P6FRGj3DwRfhOZG%2FTOzudB1%2Fdk4gc07mlxxzQ3DXKanNWCES5LfHiIeAzbgu2gifJN2zmn1ZgFC6L4kydQka4pWztEwtFebGe0dXDzubg9a0NvyXtwqzTphjcTXoEP54QGVDdACjroxR%2FIhpBIO1EGYw%2FM6Vlxi1k97whGFjLjidEGWOoD8HpGE8vTNSPfGUa8nrnrQyk2eF26MM7JtBRpwM%2BV003KbSiOyYe541twzTD79Nhx3J8XuQAlm5T%2Fv8L8kK1qROsPHPXbuTmV%2BMoT1aE9XgwcF60nqIAy9IJJQ3z2%2F2s2og3E5BiQGcz0ak02rsUvqFlN0de3AQ4zaMrbfw%2BHl2%2Fo7RJIVB8XACqik2l1S1QNQcSam3CQFjw9hZjEAdB0bgMvsV4lGunSI6UcDAWeqHrOHHzx4Sh6IJGVCirQBHwQw%2FOL44gJ2%2FVHJDHAHhAaYshDsdbiOHP1n8%2BF52tX0FikwMLTE28QGOqUBwZ7qXik7pj4M0o3oirTrrlbQHZEKwwtTBYwIYSVrqC9xRRAa74QG8%2FtPJiwRvlVpC%2BcW8DEL4j65Rt%2Bkcg3h1q6BoQqo79%2BdrdYaAOqTCVASAQbzCJcLBc%2BeVlruXPf3ljknWebxUppnZ2cbAe0tf%2FSUQofO87i0jERiIgDrQFN91wosBIdImLqwyHBx9IJR3mNZ3rmL0pZXA2NZQVL%2BnRTwnx31&X-Amz-Signature=aaa71fccd25540975a436799ffd48e965b7ac3a88ae8046ed5170af92b7a8bb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664KJFOA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD6wTCbyDFiG8OcD4Q4GGHB8HbyEc5NJiyO9nGomkUqiQIgXcFpJKQ82eQrPXteSbeZsWc3MK08go%2FteTCmiwSJjcgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAekZxKGaUTHWj40tSrcA8vFMjLJdzKgY18k0Hgr2uG0zCw0pcm9%2FyZWxgTgBg7sPYaEce%2FfXh7p5WCkhaEKBQ%2FH3LhBmQ%2F6RS%2BXDlVw4ugsMD0n5TsnGqhlawjQHEOk6YpsJraAL5FgVlU5IoPj%2BOvagUESr1ToDpq9LQoZhP0KP8ER6P6FRGj3DwRfhOZG%2FTOzudB1%2Fdk4gc07mlxxzQ3DXKanNWCES5LfHiIeAzbgu2gifJN2zmn1ZgFC6L4kydQka4pWztEwtFebGe0dXDzubg9a0NvyXtwqzTphjcTXoEP54QGVDdACjroxR%2FIhpBIO1EGYw%2FM6Vlxi1k97whGFjLjidEGWOoD8HpGE8vTNSPfGUa8nrnrQyk2eF26MM7JtBRpwM%2BV003KbSiOyYe541twzTD79Nhx3J8XuQAlm5T%2Fv8L8kK1qROsPHPXbuTmV%2BMoT1aE9XgwcF60nqIAy9IJJQ3z2%2F2s2og3E5BiQGcz0ak02rsUvqFlN0de3AQ4zaMrbfw%2BHl2%2Fo7RJIVB8XACqik2l1S1QNQcSam3CQFjw9hZjEAdB0bgMvsV4lGunSI6UcDAWeqHrOHHzx4Sh6IJGVCirQBHwQw%2FOL44gJ2%2FVHJDHAHhAaYshDsdbiOHP1n8%2BF52tX0FikwMLTE28QGOqUBwZ7qXik7pj4M0o3oirTrrlbQHZEKwwtTBYwIYSVrqC9xRRAa74QG8%2FtPJiwRvlVpC%2BcW8DEL4j65Rt%2Bkcg3h1q6BoQqo79%2BdrdYaAOqTCVASAQbzCJcLBc%2BeVlruXPf3ljknWebxUppnZ2cbAe0tf%2FSUQofO87i0jERiIgDrQFN91wosBIdImLqwyHBx9IJR3mNZ3rmL0pZXA2NZQVL%2BnRTwnx31&X-Amz-Signature=a0d7ec09599158ba851e26c4af4842267933ab61563359470f182bfa1f5d1454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664KJFOA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD6wTCbyDFiG8OcD4Q4GGHB8HbyEc5NJiyO9nGomkUqiQIgXcFpJKQ82eQrPXteSbeZsWc3MK08go%2FteTCmiwSJjcgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAekZxKGaUTHWj40tSrcA8vFMjLJdzKgY18k0Hgr2uG0zCw0pcm9%2FyZWxgTgBg7sPYaEce%2FfXh7p5WCkhaEKBQ%2FH3LhBmQ%2F6RS%2BXDlVw4ugsMD0n5TsnGqhlawjQHEOk6YpsJraAL5FgVlU5IoPj%2BOvagUESr1ToDpq9LQoZhP0KP8ER6P6FRGj3DwRfhOZG%2FTOzudB1%2Fdk4gc07mlxxzQ3DXKanNWCES5LfHiIeAzbgu2gifJN2zmn1ZgFC6L4kydQka4pWztEwtFebGe0dXDzubg9a0NvyXtwqzTphjcTXoEP54QGVDdACjroxR%2FIhpBIO1EGYw%2FM6Vlxi1k97whGFjLjidEGWOoD8HpGE8vTNSPfGUa8nrnrQyk2eF26MM7JtBRpwM%2BV003KbSiOyYe541twzTD79Nhx3J8XuQAlm5T%2Fv8L8kK1qROsPHPXbuTmV%2BMoT1aE9XgwcF60nqIAy9IJJQ3z2%2F2s2og3E5BiQGcz0ak02rsUvqFlN0de3AQ4zaMrbfw%2BHl2%2Fo7RJIVB8XACqik2l1S1QNQcSam3CQFjw9hZjEAdB0bgMvsV4lGunSI6UcDAWeqHrOHHzx4Sh6IJGVCirQBHwQw%2FOL44gJ2%2FVHJDHAHhAaYshDsdbiOHP1n8%2BF52tX0FikwMLTE28QGOqUBwZ7qXik7pj4M0o3oirTrrlbQHZEKwwtTBYwIYSVrqC9xRRAa74QG8%2FtPJiwRvlVpC%2BcW8DEL4j65Rt%2Bkcg3h1q6BoQqo79%2BdrdYaAOqTCVASAQbzCJcLBc%2BeVlruXPf3ljknWebxUppnZ2cbAe0tf%2FSUQofO87i0jERiIgDrQFN91wosBIdImLqwyHBx9IJR3mNZ3rmL0pZXA2NZQVL%2BnRTwnx31&X-Amz-Signature=4d52d4c883ebd052d8e0aef6dc4bea37a4b03bf7ace83356164f761a1044798d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664KJFOA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD6wTCbyDFiG8OcD4Q4GGHB8HbyEc5NJiyO9nGomkUqiQIgXcFpJKQ82eQrPXteSbeZsWc3MK08go%2FteTCmiwSJjcgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAekZxKGaUTHWj40tSrcA8vFMjLJdzKgY18k0Hgr2uG0zCw0pcm9%2FyZWxgTgBg7sPYaEce%2FfXh7p5WCkhaEKBQ%2FH3LhBmQ%2F6RS%2BXDlVw4ugsMD0n5TsnGqhlawjQHEOk6YpsJraAL5FgVlU5IoPj%2BOvagUESr1ToDpq9LQoZhP0KP8ER6P6FRGj3DwRfhOZG%2FTOzudB1%2Fdk4gc07mlxxzQ3DXKanNWCES5LfHiIeAzbgu2gifJN2zmn1ZgFC6L4kydQka4pWztEwtFebGe0dXDzubg9a0NvyXtwqzTphjcTXoEP54QGVDdACjroxR%2FIhpBIO1EGYw%2FM6Vlxi1k97whGFjLjidEGWOoD8HpGE8vTNSPfGUa8nrnrQyk2eF26MM7JtBRpwM%2BV003KbSiOyYe541twzTD79Nhx3J8XuQAlm5T%2Fv8L8kK1qROsPHPXbuTmV%2BMoT1aE9XgwcF60nqIAy9IJJQ3z2%2F2s2og3E5BiQGcz0ak02rsUvqFlN0de3AQ4zaMrbfw%2BHl2%2Fo7RJIVB8XACqik2l1S1QNQcSam3CQFjw9hZjEAdB0bgMvsV4lGunSI6UcDAWeqHrOHHzx4Sh6IJGVCirQBHwQw%2FOL44gJ2%2FVHJDHAHhAaYshDsdbiOHP1n8%2BF52tX0FikwMLTE28QGOqUBwZ7qXik7pj4M0o3oirTrrlbQHZEKwwtTBYwIYSVrqC9xRRAa74QG8%2FtPJiwRvlVpC%2BcW8DEL4j65Rt%2Bkcg3h1q6BoQqo79%2BdrdYaAOqTCVASAQbzCJcLBc%2BeVlruXPf3ljknWebxUppnZ2cbAe0tf%2FSUQofO87i0jERiIgDrQFN91wosBIdImLqwyHBx9IJR3mNZ3rmL0pZXA2NZQVL%2BnRTwnx31&X-Amz-Signature=8f63e6b3413584cad845c2da0c927a4cb00bd10e4a2eafc3be18fcc94fbca415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664KJFOA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD6wTCbyDFiG8OcD4Q4GGHB8HbyEc5NJiyO9nGomkUqiQIgXcFpJKQ82eQrPXteSbeZsWc3MK08go%2FteTCmiwSJjcgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAekZxKGaUTHWj40tSrcA8vFMjLJdzKgY18k0Hgr2uG0zCw0pcm9%2FyZWxgTgBg7sPYaEce%2FfXh7p5WCkhaEKBQ%2FH3LhBmQ%2F6RS%2BXDlVw4ugsMD0n5TsnGqhlawjQHEOk6YpsJraAL5FgVlU5IoPj%2BOvagUESr1ToDpq9LQoZhP0KP8ER6P6FRGj3DwRfhOZG%2FTOzudB1%2Fdk4gc07mlxxzQ3DXKanNWCES5LfHiIeAzbgu2gifJN2zmn1ZgFC6L4kydQka4pWztEwtFebGe0dXDzubg9a0NvyXtwqzTphjcTXoEP54QGVDdACjroxR%2FIhpBIO1EGYw%2FM6Vlxi1k97whGFjLjidEGWOoD8HpGE8vTNSPfGUa8nrnrQyk2eF26MM7JtBRpwM%2BV003KbSiOyYe541twzTD79Nhx3J8XuQAlm5T%2Fv8L8kK1qROsPHPXbuTmV%2BMoT1aE9XgwcF60nqIAy9IJJQ3z2%2F2s2og3E5BiQGcz0ak02rsUvqFlN0de3AQ4zaMrbfw%2BHl2%2Fo7RJIVB8XACqik2l1S1QNQcSam3CQFjw9hZjEAdB0bgMvsV4lGunSI6UcDAWeqHrOHHzx4Sh6IJGVCirQBHwQw%2FOL44gJ2%2FVHJDHAHhAaYshDsdbiOHP1n8%2BF52tX0FikwMLTE28QGOqUBwZ7qXik7pj4M0o3oirTrrlbQHZEKwwtTBYwIYSVrqC9xRRAa74QG8%2FtPJiwRvlVpC%2BcW8DEL4j65Rt%2Bkcg3h1q6BoQqo79%2BdrdYaAOqTCVASAQbzCJcLBc%2BeVlruXPf3ljknWebxUppnZ2cbAe0tf%2FSUQofO87i0jERiIgDrQFN91wosBIdImLqwyHBx9IJR3mNZ3rmL0pZXA2NZQVL%2BnRTwnx31&X-Amz-Signature=ee600ff45860d674b529d2af25b60ed248c7f90ffed34c3ab2b6e19bb20e9139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664KJFOA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD6wTCbyDFiG8OcD4Q4GGHB8HbyEc5NJiyO9nGomkUqiQIgXcFpJKQ82eQrPXteSbeZsWc3MK08go%2FteTCmiwSJjcgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAekZxKGaUTHWj40tSrcA8vFMjLJdzKgY18k0Hgr2uG0zCw0pcm9%2FyZWxgTgBg7sPYaEce%2FfXh7p5WCkhaEKBQ%2FH3LhBmQ%2F6RS%2BXDlVw4ugsMD0n5TsnGqhlawjQHEOk6YpsJraAL5FgVlU5IoPj%2BOvagUESr1ToDpq9LQoZhP0KP8ER6P6FRGj3DwRfhOZG%2FTOzudB1%2Fdk4gc07mlxxzQ3DXKanNWCES5LfHiIeAzbgu2gifJN2zmn1ZgFC6L4kydQka4pWztEwtFebGe0dXDzubg9a0NvyXtwqzTphjcTXoEP54QGVDdACjroxR%2FIhpBIO1EGYw%2FM6Vlxi1k97whGFjLjidEGWOoD8HpGE8vTNSPfGUa8nrnrQyk2eF26MM7JtBRpwM%2BV003KbSiOyYe541twzTD79Nhx3J8XuQAlm5T%2Fv8L8kK1qROsPHPXbuTmV%2BMoT1aE9XgwcF60nqIAy9IJJQ3z2%2F2s2og3E5BiQGcz0ak02rsUvqFlN0de3AQ4zaMrbfw%2BHl2%2Fo7RJIVB8XACqik2l1S1QNQcSam3CQFjw9hZjEAdB0bgMvsV4lGunSI6UcDAWeqHrOHHzx4Sh6IJGVCirQBHwQw%2FOL44gJ2%2FVHJDHAHhAaYshDsdbiOHP1n8%2BF52tX0FikwMLTE28QGOqUBwZ7qXik7pj4M0o3oirTrrlbQHZEKwwtTBYwIYSVrqC9xRRAa74QG8%2FtPJiwRvlVpC%2BcW8DEL4j65Rt%2Bkcg3h1q6BoQqo79%2BdrdYaAOqTCVASAQbzCJcLBc%2BeVlruXPf3ljknWebxUppnZ2cbAe0tf%2FSUQofO87i0jERiIgDrQFN91wosBIdImLqwyHBx9IJR3mNZ3rmL0pZXA2NZQVL%2BnRTwnx31&X-Amz-Signature=5c6bb94def68af032c94e541b3cbc4048e847307e9715996664c3130e5dd0784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664KJFOA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD6wTCbyDFiG8OcD4Q4GGHB8HbyEc5NJiyO9nGomkUqiQIgXcFpJKQ82eQrPXteSbeZsWc3MK08go%2FteTCmiwSJjcgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAekZxKGaUTHWj40tSrcA8vFMjLJdzKgY18k0Hgr2uG0zCw0pcm9%2FyZWxgTgBg7sPYaEce%2FfXh7p5WCkhaEKBQ%2FH3LhBmQ%2F6RS%2BXDlVw4ugsMD0n5TsnGqhlawjQHEOk6YpsJraAL5FgVlU5IoPj%2BOvagUESr1ToDpq9LQoZhP0KP8ER6P6FRGj3DwRfhOZG%2FTOzudB1%2Fdk4gc07mlxxzQ3DXKanNWCES5LfHiIeAzbgu2gifJN2zmn1ZgFC6L4kydQka4pWztEwtFebGe0dXDzubg9a0NvyXtwqzTphjcTXoEP54QGVDdACjroxR%2FIhpBIO1EGYw%2FM6Vlxi1k97whGFjLjidEGWOoD8HpGE8vTNSPfGUa8nrnrQyk2eF26MM7JtBRpwM%2BV003KbSiOyYe541twzTD79Nhx3J8XuQAlm5T%2Fv8L8kK1qROsPHPXbuTmV%2BMoT1aE9XgwcF60nqIAy9IJJQ3z2%2F2s2og3E5BiQGcz0ak02rsUvqFlN0de3AQ4zaMrbfw%2BHl2%2Fo7RJIVB8XACqik2l1S1QNQcSam3CQFjw9hZjEAdB0bgMvsV4lGunSI6UcDAWeqHrOHHzx4Sh6IJGVCirQBHwQw%2FOL44gJ2%2FVHJDHAHhAaYshDsdbiOHP1n8%2BF52tX0FikwMLTE28QGOqUBwZ7qXik7pj4M0o3oirTrrlbQHZEKwwtTBYwIYSVrqC9xRRAa74QG8%2FtPJiwRvlVpC%2BcW8DEL4j65Rt%2Bkcg3h1q6BoQqo79%2BdrdYaAOqTCVASAQbzCJcLBc%2BeVlruXPf3ljknWebxUppnZ2cbAe0tf%2FSUQofO87i0jERiIgDrQFN91wosBIdImLqwyHBx9IJR3mNZ3rmL0pZXA2NZQVL%2BnRTwnx31&X-Amz-Signature=ffad056965f92224c888c4167bfb7917f1456df349ec443d9e997e819d6911ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664KJFOA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD6wTCbyDFiG8OcD4Q4GGHB8HbyEc5NJiyO9nGomkUqiQIgXcFpJKQ82eQrPXteSbeZsWc3MK08go%2FteTCmiwSJjcgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAekZxKGaUTHWj40tSrcA8vFMjLJdzKgY18k0Hgr2uG0zCw0pcm9%2FyZWxgTgBg7sPYaEce%2FfXh7p5WCkhaEKBQ%2FH3LhBmQ%2F6RS%2BXDlVw4ugsMD0n5TsnGqhlawjQHEOk6YpsJraAL5FgVlU5IoPj%2BOvagUESr1ToDpq9LQoZhP0KP8ER6P6FRGj3DwRfhOZG%2FTOzudB1%2Fdk4gc07mlxxzQ3DXKanNWCES5LfHiIeAzbgu2gifJN2zmn1ZgFC6L4kydQka4pWztEwtFebGe0dXDzubg9a0NvyXtwqzTphjcTXoEP54QGVDdACjroxR%2FIhpBIO1EGYw%2FM6Vlxi1k97whGFjLjidEGWOoD8HpGE8vTNSPfGUa8nrnrQyk2eF26MM7JtBRpwM%2BV003KbSiOyYe541twzTD79Nhx3J8XuQAlm5T%2Fv8L8kK1qROsPHPXbuTmV%2BMoT1aE9XgwcF60nqIAy9IJJQ3z2%2F2s2og3E5BiQGcz0ak02rsUvqFlN0de3AQ4zaMrbfw%2BHl2%2Fo7RJIVB8XACqik2l1S1QNQcSam3CQFjw9hZjEAdB0bgMvsV4lGunSI6UcDAWeqHrOHHzx4Sh6IJGVCirQBHwQw%2FOL44gJ2%2FVHJDHAHhAaYshDsdbiOHP1n8%2BF52tX0FikwMLTE28QGOqUBwZ7qXik7pj4M0o3oirTrrlbQHZEKwwtTBYwIYSVrqC9xRRAa74QG8%2FtPJiwRvlVpC%2BcW8DEL4j65Rt%2Bkcg3h1q6BoQqo79%2BdrdYaAOqTCVASAQbzCJcLBc%2BeVlruXPf3ljknWebxUppnZ2cbAe0tf%2FSUQofO87i0jERiIgDrQFN91wosBIdImLqwyHBx9IJR3mNZ3rmL0pZXA2NZQVL%2BnRTwnx31&X-Amz-Signature=d165274a85145baea601f2e95185fed810ddf144bdb29c6e9954a5d04b12c6f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CLCVVKY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDId3ey5%2BidNy2aYKZQrIonSEQtq9JxFUzH0bhZWp69fAiEA6C1ToIoukySNdYQrfWNNNlR8QObUcgE9X94UqBFLC4wqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNp%2FGoPJUQQGt27GLyrcA4G8CI6GWhz%2BxSSTgyRvVCumZbMVtKLt2023T%2Bjv%2BSVKEorIhGNEYXOrgfKyytlYg1RsJjrlW8TWAO8nbto1R%2BRKpeoGUDmXnBUlPlbQ9wBSzvrWrg5LSLsQaVk5kzsEny0%2FEq89UUU8ZbNe4nyas0JdFDh5tkjB4IYtPh3qRHEo6uEpiKXh8nmIegipOACbn43mgsXMCpN%2BsY%2FzT24%2Fy3gGTbwSWRoenwlfpgxJlxxITIM1escqEPd3mgwagV7rOmvd1qY3j0W1kkkGgWXiAr2mPioH76xd2QkASULDb5YOPbV9QYazwX12PAJKobGsfMoNBJsbKeoqTAVHJiKwqS8sprWp85ysoomAEh6hlOoF%2FBDYXP0ccxIMgIkw%2FeMWkq%2BZablGxKIK5rGmO%2Fb3KI3CwEIpwnvaGEbzSG6TXaYWBmpQr21FphMJPo5cCuDiEVcpA3UhrbVJrUs6fdXwFLgDccY3bney%2Fq1c2GwQydc8YLseoT9BQ%2BHhdefYnou3RAYLRHiA1EUJzf1EO2qwv8NUuvyQHUybb7UEO8nngTxKOyY4vM4phvCjCs5ATg%2FcDiMf8OshSNmSqiaTb%2BSJPzKHvzjbOFVIFEhDQEvlQHJuIUiJs3EiP%2BagKDZNMIjF28QGOqUBpV26m%2BywCs7CI4rXjJ0SrrCL3KGApKFm0kA4Z2dcrkT6uPHjFaXJyrRaIClgaF04fsk5YU76Ctj%2By%2FzTGAS%2F%2F3VbZIfmR7XmtycDBS%2FjC9sUGcyNTHhZGMIYnGVKZ%2F%2BQKnLohjniErtq0RP1noIhNOEMPYyqrvwo4Wqj%2BvnkN9tc0z4oH1EOIXh3Wy1VubdV9Iyy10lLwgB7uO9iSpBtW4hyR4eK&X-Amz-Signature=a74c54f64e46c6f40834725f296ab649e630df3536c84e97ee7673e71e43c4a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL6WZFJG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGp02kLe5U4s4RXOSf1QahNSnPYLeJj5o7%2BlRwPX6zmBAiEA8SqNDLkrO2%2Bek%2BqIGhHraGEHM%2FdSN1SMMIOs9cS09qQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyeC7q2DLh5PMyspCrcAw%2BwnVAebc%2Bm3NZNkFd%2FyS0rYu6AWLGwnT5zDvHyNisAk2nUl2F%2Fq723MnePAbb2Cw%2FjYmLhMvd9%2BN1W2ft6anQrgewI3A24dmcT3Fa4SBwz59eGR6cv4Veg99GFM7s6Qjg2Bn%2BautHKbHNfi2WF5B%2B6tQF1bBdIZi658yZ%2B1c%2FieN6WyEPWQ%2BVZORdy8zE9ETQZqmsZIvaebfR4ejxDj2gP%2Bf3ejOmPvYbf%2FIjuEokZwU778dzBMmR%2FpcBwUZ57llJhdtVaSD9pQUifER8%2B1wuDy6BbkRHZQBJDtm429TpyXxkl0k21n%2FwXYmxaW7mY5Tbr8vosqTqyZfl2Amz7iUUvs4zAOUe2vr7P6OoSiMQOEFXczdpIcHrXU0hI1bz0iVy1uA%2Byxnj5WygFgsYCBCeJ91puOzNnJOaD2z6eXFcHcNezr2s7RAycyYlPzATek4vTQvXBirol6x%2B1%2BVkQcbXh7F7w6W6U4ZccEPFW%2BdayAkBrUqdhhOudW4KhU1WFyo9pdRTQgFXdjh%2BtMeZTxxOeb1WpM9fvtIqiVBG9H%2FFfsshGsboZV1LULOMEb9Q21TRyDHY973FccKUInBWoDCG4Lpvyne6Y6sbFkUJyQHCfIVXgsl%2BSpKImsJmvML%2FE28QGOqUBo1ktIbWkEgZiwRuxnZRYeOcM3fUJmkq3LMpj%2FlPC2XnWQUCddfTakSzjPzBmmAlI8li7hjiltb0eKVUv5OytVA0845GJw%2BWUkaBzuytV5sL3AGtjrVLNkBY8kvVr3%2F0VMv2T1t9jjtXEPolsRUyHPQk0FQmjj2PJw%2B7kPyjQZWY0jbQGAaODPEZTggUZPrvo2RSzlRi1%2FrENtdYH4AtMktD%2BZUfN&X-Amz-Signature=6db51269d97552a858bc4e8f92f69dfb456f8723e789b07fb76c31a0703673f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UGSSS6V%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIHzVQoqXwQ2UggFKlHR4FXYbSr8zrSZ6DXMqO3IYEF%2BZAiB0OcNnwbN2Acpo%2FXDBTTNCBiEoERJkGrM6eb11bTp%2BpiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmNtMsRQPM6v6ggeMKtwD5y7Z2si4XTF6SGoSUAehZtgPz6B6atr38%2BQT4aQt9RJpYevsf2tdr%2FOX6QGJQUQR914rMHNlbFDZAnzRZXvn27bfhdUwj%2BTafqm%2BGSv6xChb6eJuH%2B5RaOsO68sEH69wiDR%2FXnYbWjQWMIym4ayGNLXLxzfJ0KlY4cWuqUmIJJFnWX6uudo8CPE0bCT2wrrNtkZojgHXkem1%2BqJNPKV4tDZJtb2kuM53r2KdvUikmUfUZ0gs5V2hG9%2BOhKmLQaTmlbh3kuYUAlCzLJmEZIBM5Jz%2BpdKnUGtC274xVtgxTSBh%2Bh3bntk59e%2Bd4IuQDzCbxsDlwvLL%2BSP7OhNJZ33PhVg821xuq0C5j2WUxgQGgSRr0EkwKrhBTUjudUY2k9XBrJLYqxAM0d61nLo0Ac7KgFCX5skDDiENgex%2F6RAzjpZ9%2FMwKtFrZ18WQqM2ic10xyGROdiC9nWFZlyiKMUPFN1mZZqX4Xtuy8UQIe1%2BF%2B%2Fz%2Bxx%2BO4wJgNZs%2BSlw04yn0W3yQDl%2BgslCR3mwmb%2Fzkn2fiVk5GJkkywAIKcY4HSGWlEJ3Yt7PIIPhZ9Rwg9P9cjwR%2BR2Me91Bx%2FsemC9FwvKwWb8Tc2I8mpuF0aduO905%2FXRYTwj1mMypp8ekwssTbxAY6pgGvnGAQ1u%2BKWq4dAt7%2Fc3xopDmqLwOjiKOYfOmIze%2FwSy2iPKrnrClrMz7sZR5LBkpuDeEwhwon4D6%2F7qhwY%2FGR4rtBBz3UxN412fdE%2Bm5nZSAjUuT96uZvYPYClTQyq1zcuodZAMtpxg7V4ssM7blhsItHn4QKYD1QeRVutEv2QeN6cLQwLDdDCnKiBsvkvzNxeDy%2FtwgF8gsnwf1yqv7uEQOKniM7&X-Amz-Signature=fcebb348e5c4ad83d4a4f0a01d9193ee6ef408728b35a09ec0daeeca0a8ba6e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664KJFOA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD6wTCbyDFiG8OcD4Q4GGHB8HbyEc5NJiyO9nGomkUqiQIgXcFpJKQ82eQrPXteSbeZsWc3MK08go%2FteTCmiwSJjcgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAekZxKGaUTHWj40tSrcA8vFMjLJdzKgY18k0Hgr2uG0zCw0pcm9%2FyZWxgTgBg7sPYaEce%2FfXh7p5WCkhaEKBQ%2FH3LhBmQ%2F6RS%2BXDlVw4ugsMD0n5TsnGqhlawjQHEOk6YpsJraAL5FgVlU5IoPj%2BOvagUESr1ToDpq9LQoZhP0KP8ER6P6FRGj3DwRfhOZG%2FTOzudB1%2Fdk4gc07mlxxzQ3DXKanNWCES5LfHiIeAzbgu2gifJN2zmn1ZgFC6L4kydQka4pWztEwtFebGe0dXDzubg9a0NvyXtwqzTphjcTXoEP54QGVDdACjroxR%2FIhpBIO1EGYw%2FM6Vlxi1k97whGFjLjidEGWOoD8HpGE8vTNSPfGUa8nrnrQyk2eF26MM7JtBRpwM%2BV003KbSiOyYe541twzTD79Nhx3J8XuQAlm5T%2Fv8L8kK1qROsPHPXbuTmV%2BMoT1aE9XgwcF60nqIAy9IJJQ3z2%2F2s2og3E5BiQGcz0ak02rsUvqFlN0de3AQ4zaMrbfw%2BHl2%2Fo7RJIVB8XACqik2l1S1QNQcSam3CQFjw9hZjEAdB0bgMvsV4lGunSI6UcDAWeqHrOHHzx4Sh6IJGVCirQBHwQw%2FOL44gJ2%2FVHJDHAHhAaYshDsdbiOHP1n8%2BF52tX0FikwMLTE28QGOqUBwZ7qXik7pj4M0o3oirTrrlbQHZEKwwtTBYwIYSVrqC9xRRAa74QG8%2FtPJiwRvlVpC%2BcW8DEL4j65Rt%2Bkcg3h1q6BoQqo79%2BdrdYaAOqTCVASAQbzCJcLBc%2BeVlruXPf3ljknWebxUppnZ2cbAe0tf%2FSUQofO87i0jERiIgDrQFN91wosBIdImLqwyHBx9IJR3mNZ3rmL0pZXA2NZQVL%2BnRTwnx31&X-Amz-Signature=40360cd14c7926c8317e4320a65cf2277c59029abd4b6e0edaea0ddf4625bb28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQQ2SQQ7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQC9%2BQOlFBvMWvuK87%2BnEtAf4Ob6yHpRSS1p8rilvjfBiQIhAJ8ApOT%2FX1ebGPyphkRnemPVZ1oVHIRqsbqzQgjoqO8jKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwywY0jZJHcqHcI2Pwq3AOVhgaB04BvToxud%2BjrJxwn4dd0aV1nKc49ERsrzT1Y52iHuJXgwJwVp2d73xc11HthtE%2BUBLsRKhB3pSkSmfAEwZr6MFMI9x90mHZogwScqvyLJIEMDUeZPfPH9i%2B8hyWm%2Bvn7iclftTef2xJKLAu6rKax2%2BRKZn4J4fJOx9G73oUa%2ForZ%2BKDtnrE4FKS5aQoCFc6xasakdvJZaAZs47n4U4w7EWDAP34ovk8XVdEm5svomuWT149j9LDS9bZ8tYp7KUC3tjL1bDpevix3gNYkaLy%2FU4wz0tQwUPRN9Urxhap1phaoZsE817k2GIJ97XqBogq4dUpPy192X5FoEJ%2B2tlAq0hLgUUG1J4sZhMHZFU6YJz%2FsyTz%2B6hxUvAJSoDnfjkKdCQ2VPNLwQ59p%2FHOf%2FTn2ILiCThQCtaGG0IQYkz27KI9WwRr9rZ5NZhz6tFxFzqkvGwAu91BQSyoER795G1X0RsLJ5hn78Dv7KcZn4MsIFeFcIiGEssWfHvRvlEWuhzmMwjNDv1ncVIc5iJ3bXAsXDXYizNIB1qimZTfI1pfqPaKRT%2FZExxER5tYA3Di6Bh9bHo%2FDsdtf8gX%2FrLVzjKyZhOIkHJo4%2BryyJChrjNImK0RYdBpvI%2F5e7jCTxdvEBjqkAVqSlvHthJdRVP1f%2FVKxum9POBSeYneblPOOva%2FN1IROTIeDu5eo3nFyKOEMUEOy8keldSc%2BBn572q8i6xMqoY%2BmgjuL%2B%2FqlUWnKh8J2RfVzg6CDipi2syhN4TrKKoLboj4svfOR8FbijWrPlF%2FCk3JYrFSJyi8rUfJR3rU2wacZXY2makdqfUTDuwGMFa8e4USFIlONMxXu3a6NqrdoGjLb0l2j&X-Amz-Signature=961ecec93354780ef3cd43fba839943e425bf9df1baf3c9e2936379f25708407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664KJFOA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD6wTCbyDFiG8OcD4Q4GGHB8HbyEc5NJiyO9nGomkUqiQIgXcFpJKQ82eQrPXteSbeZsWc3MK08go%2FteTCmiwSJjcgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAekZxKGaUTHWj40tSrcA8vFMjLJdzKgY18k0Hgr2uG0zCw0pcm9%2FyZWxgTgBg7sPYaEce%2FfXh7p5WCkhaEKBQ%2FH3LhBmQ%2F6RS%2BXDlVw4ugsMD0n5TsnGqhlawjQHEOk6YpsJraAL5FgVlU5IoPj%2BOvagUESr1ToDpq9LQoZhP0KP8ER6P6FRGj3DwRfhOZG%2FTOzudB1%2Fdk4gc07mlxxzQ3DXKanNWCES5LfHiIeAzbgu2gifJN2zmn1ZgFC6L4kydQka4pWztEwtFebGe0dXDzubg9a0NvyXtwqzTphjcTXoEP54QGVDdACjroxR%2FIhpBIO1EGYw%2FM6Vlxi1k97whGFjLjidEGWOoD8HpGE8vTNSPfGUa8nrnrQyk2eF26MM7JtBRpwM%2BV003KbSiOyYe541twzTD79Nhx3J8XuQAlm5T%2Fv8L8kK1qROsPHPXbuTmV%2BMoT1aE9XgwcF60nqIAy9IJJQ3z2%2F2s2og3E5BiQGcz0ak02rsUvqFlN0de3AQ4zaMrbfw%2BHl2%2Fo7RJIVB8XACqik2l1S1QNQcSam3CQFjw9hZjEAdB0bgMvsV4lGunSI6UcDAWeqHrOHHzx4Sh6IJGVCirQBHwQw%2FOL44gJ2%2FVHJDHAHhAaYshDsdbiOHP1n8%2BF52tX0FikwMLTE28QGOqUBwZ7qXik7pj4M0o3oirTrrlbQHZEKwwtTBYwIYSVrqC9xRRAa74QG8%2FtPJiwRvlVpC%2BcW8DEL4j65Rt%2Bkcg3h1q6BoQqo79%2BdrdYaAOqTCVASAQbzCJcLBc%2BeVlruXPf3ljknWebxUppnZ2cbAe0tf%2FSUQofO87i0jERiIgDrQFN91wosBIdImLqwyHBx9IJR3mNZ3rmL0pZXA2NZQVL%2BnRTwnx31&X-Amz-Signature=9853ae4ecefaea28ec3b4697504a04d8bde77757c56985f5d5fcd5b6390948bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQGUUH5X%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDbgROsAp0y6NoHfOz3rUy33tyizsMqzGAD1yPlYT%2BkfwIhAJ%2FT9MEMA0unJXdb0zBtNco2bwevm5J20Wvb0c%2BexxxZKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5FPyZ%2Fg4AP3yzKnIq3AN2DV5KhEQX%2BT0%2FazO4zAOyJPtRCxK%2BSsS3rsMIWYle7%2FXPjjf9WEBownlm%2BDMycFZ%2BIgn4w92BsxzkLwYWVVD%2BVctrSnroYq6fTZqcLfyBbckr1v%2FXGq0fYnEijxLOJjkEEqvpNvnKOR7HJFT2lzBXBzhgEdAyXH5qDsDR2m7dMcSqDOp2kMVBsMnRI0l4TtE0A7D61W%2F5jIeAK9nw0%2FG00%2B9eettrgTgDnuyS70z7mFMkAnEaqSWLw4F65pT4BrsxecpCO1mOpw4wMoutH6tUAVpHPyP1rwrwqsw33BKWB%2Bg%2BLNA%2Bn6mchBVhlXSp2z0n6B8Cqk9HKjEwuzrs9d45KtT%2FdeXqTFXWjVdou%2BIYAID9jf0MpBJW8KUTuaMxGp1MLNVtY%2BNG4TUR3fOQoqh6YjklNLZop6%2Bjdfna6J9Syd67sV%2F8Exj%2FtNbIyrcM22iZYByI8gZ1TktcuXD2pSfQERCC%2FPbtLRq6UPfDZr1oBKIl1rI9phakgn2uuspidGkomQfc8IjqjrSKaysP8mtvZFCczdHj%2F9ERzCSOdpBcHuHwBiIaXeXTt2C9yxtOctLp38mimznB2E%2FJxP8NW7YOv5vZ6KBSqW0LDZc6p7yOIGnk%2F5Jn%2BOO%2BP0hQ%2FjC1xNvEBjqkAen6qcoUTLWScqVPfjAb2DoOqJDZ%2Fp8jLqn44akAM5a0GB%2FVog0PR0DpS6L6hRpuqlNT4BhWbfH8%2FsV4NOVC2Glr2fuUIgmEjc72ZNrT8gGJvlKvPaeJ03ux9xD7G1PWVrkQ%2BWotg3V8ajC9bO04WuyDrNkHLC1jtFUklqoxVYY%2BjIaYSDEJOHc9gaJIFUOnYdd5DUpzX6w%2F9t8DuM%2FKjTBdT%2B5W&X-Amz-Signature=a409498cf1c4d566cc3e91555abcc35ac5faeee43fca5b6a3f82a2d9754f6f8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664KJFOA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD6wTCbyDFiG8OcD4Q4GGHB8HbyEc5NJiyO9nGomkUqiQIgXcFpJKQ82eQrPXteSbeZsWc3MK08go%2FteTCmiwSJjcgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAekZxKGaUTHWj40tSrcA8vFMjLJdzKgY18k0Hgr2uG0zCw0pcm9%2FyZWxgTgBg7sPYaEce%2FfXh7p5WCkhaEKBQ%2FH3LhBmQ%2F6RS%2BXDlVw4ugsMD0n5TsnGqhlawjQHEOk6YpsJraAL5FgVlU5IoPj%2BOvagUESr1ToDpq9LQoZhP0KP8ER6P6FRGj3DwRfhOZG%2FTOzudB1%2Fdk4gc07mlxxzQ3DXKanNWCES5LfHiIeAzbgu2gifJN2zmn1ZgFC6L4kydQka4pWztEwtFebGe0dXDzubg9a0NvyXtwqzTphjcTXoEP54QGVDdACjroxR%2FIhpBIO1EGYw%2FM6Vlxi1k97whGFjLjidEGWOoD8HpGE8vTNSPfGUa8nrnrQyk2eF26MM7JtBRpwM%2BV003KbSiOyYe541twzTD79Nhx3J8XuQAlm5T%2Fv8L8kK1qROsPHPXbuTmV%2BMoT1aE9XgwcF60nqIAy9IJJQ3z2%2F2s2og3E5BiQGcz0ak02rsUvqFlN0de3AQ4zaMrbfw%2BHl2%2Fo7RJIVB8XACqik2l1S1QNQcSam3CQFjw9hZjEAdB0bgMvsV4lGunSI6UcDAWeqHrOHHzx4Sh6IJGVCirQBHwQw%2FOL44gJ2%2FVHJDHAHhAaYshDsdbiOHP1n8%2BF52tX0FikwMLTE28QGOqUBwZ7qXik7pj4M0o3oirTrrlbQHZEKwwtTBYwIYSVrqC9xRRAa74QG8%2FtPJiwRvlVpC%2BcW8DEL4j65Rt%2Bkcg3h1q6BoQqo79%2BdrdYaAOqTCVASAQbzCJcLBc%2BeVlruXPf3ljknWebxUppnZ2cbAe0tf%2FSUQofO87i0jERiIgDrQFN91wosBIdImLqwyHBx9IJR3mNZ3rmL0pZXA2NZQVL%2BnRTwnx31&X-Amz-Signature=520961400d425b06e43c703d671abe492c0715ae571a656016b6826d2730f15f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT6INT2E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDyWgCHWHLUny6KOVz4%2BuOHib0wumhJRQGqZiJaSM97TgIhAP24UuNxykc6sSSq4pwpgwqgm9ENv8L4YRmTfFFTNJwQKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLQIsPnncmAAoiu7oq3ANHyd7iEiCCPMUUT3k%2BksaW9vtF%2BaVV9ANEYq7T5u0e4tMrh9g0qMi6lj8vxf9DiK6oKTQKhDIGldzqe13oY9psB2hYt%2BShzxGEVBFen%2FgU1%2F%2BQ%2Ba6RT8s3nSI3YSuUnYkDu92gbZC43EjuXegba9Ususu4Qr4TnuNoh5dvyaLWAg4LXL3JGtNnBCmAhnNrljRWEXXT%2B1p25usypyuTB%2Bix52AnyICZjGh18QGwwJRdzqOjeKnrOUY%2B3epMv32jWz1XSyLKZfDZ6Lm82i4mObj9%2FtKFWnc%2BI6ut40AnwxcgytJpnFofgmLRvqPhdeqhMWU7X%2FxWXDcGHAZRU1WSqpN76BMAZs3ad9XrEX3ZIOnu%2FRlBYjmWN7mOYRJnOUaBdRhXbTo0WS%2FwjBOmvQrNuge9n8XMBvfpBth6%2BgE6EAnUOoaaIN6W02aKOEYFchL6Ga5y9Rkfh3svYQDbPq0nu2XlniRppQTMssKbb5R%2FrJLoXDfUVS3nVKNXnWD%2Bwkc6oQByTdC%2F3vJARwe8jz1kr%2BhLvxV8HKfTZXOeSx7tjjCn7Xmjw0TYXh3Bq2W%2FKfiOVNHFQjWBk%2BWCCqMK7F0AoY%2B76P9FQ%2FsAeTHtNj6awA22aJj7uzH0n93lkIWsizDLxNvEBjqkAZbPSEPk0PvpznTGMsjhQLZ%2Fe918SF3ajBn%2BXbd%2BLM1GoqnqUG5oocE7WdZfX9TNJWEfabqU%2B59S2LwCgoCq8ClpywyjB3bZE0Zd%2BZlySKU%2FxDdeiGlcWvmNpWwSZpa2rsYH6a44ws4uGn3Hlnpg%2B1qmPnvZzQFNBY4LUEmIQbHiNm0ARx4PalR87U6O%2FkEELeqAlZI8T5VfNMLGSNyD8fFfQK6r&X-Amz-Signature=468aca296e774ca09272a7740236a474a331531d267c980ac6af4a612ccc93ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664KJFOA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD6wTCbyDFiG8OcD4Q4GGHB8HbyEc5NJiyO9nGomkUqiQIgXcFpJKQ82eQrPXteSbeZsWc3MK08go%2FteTCmiwSJjcgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAekZxKGaUTHWj40tSrcA8vFMjLJdzKgY18k0Hgr2uG0zCw0pcm9%2FyZWxgTgBg7sPYaEce%2FfXh7p5WCkhaEKBQ%2FH3LhBmQ%2F6RS%2BXDlVw4ugsMD0n5TsnGqhlawjQHEOk6YpsJraAL5FgVlU5IoPj%2BOvagUESr1ToDpq9LQoZhP0KP8ER6P6FRGj3DwRfhOZG%2FTOzudB1%2Fdk4gc07mlxxzQ3DXKanNWCES5LfHiIeAzbgu2gifJN2zmn1ZgFC6L4kydQka4pWztEwtFebGe0dXDzubg9a0NvyXtwqzTphjcTXoEP54QGVDdACjroxR%2FIhpBIO1EGYw%2FM6Vlxi1k97whGFjLjidEGWOoD8HpGE8vTNSPfGUa8nrnrQyk2eF26MM7JtBRpwM%2BV003KbSiOyYe541twzTD79Nhx3J8XuQAlm5T%2Fv8L8kK1qROsPHPXbuTmV%2BMoT1aE9XgwcF60nqIAy9IJJQ3z2%2F2s2og3E5BiQGcz0ak02rsUvqFlN0de3AQ4zaMrbfw%2BHl2%2Fo7RJIVB8XACqik2l1S1QNQcSam3CQFjw9hZjEAdB0bgMvsV4lGunSI6UcDAWeqHrOHHzx4Sh6IJGVCirQBHwQw%2FOL44gJ2%2FVHJDHAHhAaYshDsdbiOHP1n8%2BF52tX0FikwMLTE28QGOqUBwZ7qXik7pj4M0o3oirTrrlbQHZEKwwtTBYwIYSVrqC9xRRAa74QG8%2FtPJiwRvlVpC%2BcW8DEL4j65Rt%2Bkcg3h1q6BoQqo79%2BdrdYaAOqTCVASAQbzCJcLBc%2BeVlruXPf3ljknWebxUppnZ2cbAe0tf%2FSUQofO87i0jERiIgDrQFN91wosBIdImLqwyHBx9IJR3mNZ3rmL0pZXA2NZQVL%2BnRTwnx31&X-Amz-Signature=fe6c3690ef5d2917c62a4d8e8afdb46f58fb19915900c72a872e697e716f8050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIHVCSR4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDUN5IW%2FCUrrbCwJMrDWFOQgK5453q%2BfSN7rTIsj%2BDA2gIhAPaFMaPEJjAgIMB3sHvuLNwNAAoUJPVMwL3UAWZvmNvxKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNKBHzJzvXe4gSpG8q3AP%2FEd0OExC6FRxCVrd9c0sZ%2BqKbRgN51ClbgCVV8J9tIHQkZlSvMGOktEcAL1V47WTx54m38F9wYHtmXn7186bB8kEKmISWMnzvCYrLbPdsn%2FBD3u5EKEYMZYtBBioYvijR7iqONaghIQZsI6628sHROd9Jb7QRqpVoljetRhLGPCO9IfqZFHzh2hzTHPDbZah%2B7acOW15Yi38LSKsYe3naq2mDvYgIFxxYIFYI9X%2BX395NamtR9z0Xq5yWYjlVOh9BmPdNtWqPdDtjapXonsHKyrecxiuzN7VTQB4C2RnMI7Vxj321FYRc88Jy%2FzkUgb4W9Tk0nJg7jkxP5f7rMtwG2%2FrKT4QUjRn9TTT%2FJa4dlA4rRVP%2BQuYO8Ziy%2Fp7rOZDjTXFo%2B%2B75mgXKINt76GAd39jiVkz%2FK7uf2LA3E44CaVZxhsThHFQSKyFxcxxcRZLsQjx77O0dRUtc8rApQpf5shgeK0MY4t%2Bn3qLGbBBmwXrNo77T0QjI%2Fxths25d3meMcIeMlB2We9ysNlE92hS53QibbHupJuRShlqRR2fMWywiYnrkduWM7xZvjSwMzo4bcmH2%2BIvbn%2BaLz0vh2W7%2FzkjY6evj5OODzy8VTEVTg9iHbewRON%2BGxewVFDDbxNvEBjqkAXvE95HgLwvBpmkn99YYYyuWa9Hx0ytlC%2BTDMj2wynQpzRaPDqqqUYakYEJv%2Fl%2FOwtBDhDK7RulvbGHh0lThdIPUIRqaY8jIwLttFOJRig3XX5tXRpKV%2FYGdGNyuKtfaz2RhPSnI8UmQZaCe1hrcnltuwvBYZsVVuwWAFdzTvyWtomrkFn3yErqCBHYzTkLNPPW2K9Jf%2FbDrm9m%2FMkD3znvS6dfE&X-Amz-Signature=a3b15da95943dc18d96116343edfd57be85668b2ad44e090562b5b848cfcd590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664KJFOA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD6wTCbyDFiG8OcD4Q4GGHB8HbyEc5NJiyO9nGomkUqiQIgXcFpJKQ82eQrPXteSbeZsWc3MK08go%2FteTCmiwSJjcgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAekZxKGaUTHWj40tSrcA8vFMjLJdzKgY18k0Hgr2uG0zCw0pcm9%2FyZWxgTgBg7sPYaEce%2FfXh7p5WCkhaEKBQ%2FH3LhBmQ%2F6RS%2BXDlVw4ugsMD0n5TsnGqhlawjQHEOk6YpsJraAL5FgVlU5IoPj%2BOvagUESr1ToDpq9LQoZhP0KP8ER6P6FRGj3DwRfhOZG%2FTOzudB1%2Fdk4gc07mlxxzQ3DXKanNWCES5LfHiIeAzbgu2gifJN2zmn1ZgFC6L4kydQka4pWztEwtFebGe0dXDzubg9a0NvyXtwqzTphjcTXoEP54QGVDdACjroxR%2FIhpBIO1EGYw%2FM6Vlxi1k97whGFjLjidEGWOoD8HpGE8vTNSPfGUa8nrnrQyk2eF26MM7JtBRpwM%2BV003KbSiOyYe541twzTD79Nhx3J8XuQAlm5T%2Fv8L8kK1qROsPHPXbuTmV%2BMoT1aE9XgwcF60nqIAy9IJJQ3z2%2F2s2og3E5BiQGcz0ak02rsUvqFlN0de3AQ4zaMrbfw%2BHl2%2Fo7RJIVB8XACqik2l1S1QNQcSam3CQFjw9hZjEAdB0bgMvsV4lGunSI6UcDAWeqHrOHHzx4Sh6IJGVCirQBHwQw%2FOL44gJ2%2FVHJDHAHhAaYshDsdbiOHP1n8%2BF52tX0FikwMLTE28QGOqUBwZ7qXik7pj4M0o3oirTrrlbQHZEKwwtTBYwIYSVrqC9xRRAa74QG8%2FtPJiwRvlVpC%2BcW8DEL4j65Rt%2Bkcg3h1q6BoQqo79%2BdrdYaAOqTCVASAQbzCJcLBc%2BeVlruXPf3ljknWebxUppnZ2cbAe0tf%2FSUQofO87i0jERiIgDrQFN91wosBIdImLqwyHBx9IJR3mNZ3rmL0pZXA2NZQVL%2BnRTwnx31&X-Amz-Signature=881f28eee379f1bd2542eb43873bef27c5944796d6e96913143f16586eb3d9db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNL42CHK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBHaOOihWrlrFdBQpUprHLKkX2yWZbQj92UcEvriZPmGAiEAs5UZiMzY2UsKFsXZbKUCMowA%2FomY7kemJa0Vskeql88qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8ijodAK%2FBz0cGepyrcAwL%2FxHrej5T%2B2iCAqps4dHVwWjuWAfz22LxQ5vp%2FHEaikA4y8qyaZFWyv2NH4MLN%2BaB4MsFKWAfJOxRlUZ70rUWCqAaGlMETI59E7S2PMmPz26BQVPM8I3X9HoT2C1%2FSkUimcpSZvZ8VrY1dMRqgCzzUbAecXiH5ZswzYTZfNuCy08Q0jCaRKT4ZHz%2BaWr7UGEN61fZAO4fQO2oGtnSW3vC972ALtGzAJn3q6uS3uByC19WTQyHTAMM3Ja2gOElRP9tuafHql6lBmyAqCnyu0BCEWjXclF%2Ft0BZGK1fsPrsVHWOgjgfH2%2F2mCONzIaDqzmGLKx5be2%2Baw4axpVyuNiZ1VRKeSaqAMV32Z0%2F0QG6QeRUYbz4vThAdnlha69tJjY6kMxUbNbGw9ALICFMVNZ%2FoVbG5%2BRs4V8eLXKKSpxx9%2BxJns2DcGhLGGcRnNI3guwziprPjD6DjFdkJ329TxNj%2BYfcisLKcWxhXJrXiJul9GmDG6dwzvXI%2FAeVuuK3enTz2cfdNsLnpQCYqF%2BKWA2v80ufL4Mnel79TQQr9ujeXT6jjkahjUqMI8C%2BYjKaD4mp3YL6Hf%2Bh29evU05raor9IQKWiOjJRHzZtPW7o%2FAoxOAjSAJJNO3mDx%2BIwMP%2FE28QGOqUBI%2FKw8beEfW5TbngOaneGFbaavkRjn2n9dbOrz5E7rFalM3wXlGd6IW%2B9OvUMKbsMNbGvJinVHmlswTayCuOr3F3jZ4NHRQtuSoXhhrHdf5NE1WO8CWBTZHg3BrvitSdmrVM1IWneNdDMSIQt6JAY8gIle9cE6FM7URPYU8iM%2F0ASntC%2F3XXzU6sD3hUCqizKOanQdwwPj7zstO0yXUHtDGoTegtG&X-Amz-Signature=acfb536d516e1d511d2f7ed4a60c67458d2bda88bf72c6b4b3737b9bcb892a2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VEZWOZ7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGNfyczp9lN1ukTv94eET3Ephr0d0DnZWv%2BacZ4laUuAAiEA5e8wMV741bCJJI%2FHNjhJ6wN4kaw%2F%2BBcYv6myZtYoFBcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNTxyq0aq%2FkdaSn7UyrcA59IG8lFUcaiDdivOFocxCA2FdWEZgbdStBE7p9k7gHI8QGcshM6jZT9aTCUT%2BLBpsv8a47IydRH36EiHrC7ougJypj8UyP%2F%2BkBRPcmZ4dylF1QN%2B2TqbaVa7n6BT3WRbZyDj3Sr4MhR1L6lXot%2B0PcbbV2vcFY51VNyrPCsW%2Bi7hexRnFobecR40wLb3jPwfNybz6CXsfCIGiC6yLPv%2FEir%2BCc96Lm4Hocgc33O%2Fb9jhQsIC9oXdVnQavB2aK2PPsm9bmJ3qj1qWRgrCUZ3OhD4hy%2BxPfkV9%2FOY%2F6e1qt63MsmfaG4bfzs3qEe2sCElcb46xeVmLb%2FSreiHlfJrRUG71qCgi%2FaeEeSRbPS22272X4m2OxXYiWeXW9Ae9JvGkjj6sF2Bz9fdxjPqvrHQ%2FC82tvwJU4SYhz3gMbWGshIsAPH%2F1%2B2qSLGUBfAvFeEvF5EO19vpwEVingWZPNu5ZfDpk%2F3eGFGHy7oEfufnXPDxnjREHntECWJdjsBxEt62GxBxn%2F1CcxZJOG5%2BeOxSSwhwAQcOVWb8JI5HuAP3XfLTT5weRQe0a56LgpC2eoWOzK8N4P6vRGHcTreleZsyAemwtgCgRoa4kN3a5Xiavizm%2FYq%2FHfSnx8YyhWxjMKvE28QGOqUB%2FT8ww0WH%2B9Yy4RzI1zD2Qd4gCh0ElJbm11WShQdgPhGunq%2FaUWj%2B6OSgxpP1ugpehJDuzFn3m5zNSN7Q7uyFl5%2BNxIp%2FqhIQzET3jW76sMRZoP2V6ax8V134Zhxb6rWZl%2FJ7DFMVYAM3nEZne3gE%2F8eEis4DNCiQs9aNh%2B4pFvQW5Tn%2BB0uYZIEZ%2BpjwVJ%2FKJ2IQrS7jXIabjq2fEhRlCprV2QWF&X-Amz-Signature=f7397a022ad4991a3ddecc437626e3a43e162a33e6306ed1dac84d0aadbca81d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EPD4BVW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDj5y%2B%2FreObMcP0S9mVGJNEv%2FDU14icOVUu1mEHbl8dMgIgfX2fCQeLLGF6xNNU4pnswBNnhxFG5%2BDIKal3W3Db6W0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqSZzsZZv%2FNrOSxwyrcA%2Bs9cbZKHz2cCsfiubVadubAxd0zK0WLHJ%2BUAFHQX8dy3t4tvLA7E%2FXkJ7BJ%2BrzOvsmJObDCTm0J6Vir%2FeDVhhIsVDFGqQQPcrcXB9p08cngExmJxMjZxkg3gyW%2BrXQ9mS%2BaEFN2ClpaG11GileSgoZyVXgvSN%2FGnX1fikIsj4BL5ril%2BA2aKmxcMc8dzSmGyPhy%2BNFB0PAX419iBsBwGR3ZU2D0wE%2Ff7jCPIgfcSGxhoJkef4f%2BA427tjuu1696iF5VG7djLOhyAGaHAoGFp4FhoBFyKxr2rDbLV8e1385IlKN%2FOa6zI5a1aLjsvfPkggbYjvMSyxYBlkpVCS%2BCfwbu9bv%2BkwliBkamQZaiDIlCJgt75DaSgAY2Bd41OHPMN7mFh%2FDKl5oJYjdhmG3NT1q5WKgFvD7V7fTGfr5zPDwApo948EKqeFMqlhwg9G%2BfrTFcDJ75QTPkRz0gH7ChK1wc9hoPUp14bNF8KxnVlocDPcZ0RRkR1jbcLDLGf6FkyRwORcpkJHMpPOVXujb%2FkYCnDoPzvqfj5Hs7k%2FwkvkL04nYP5F1mfJiaQvLQtERyH90cT6psn1pwg9F%2Bgx8tXsMynxKUPyPrJBwrey7GLb%2FILjtifDWVxih4gl7QMMvE28QGOqUBrSt8rEb4gGO8Pet4czU8SoiEXVKkhddZlL7nb7kGKDbihp62K2up1iYbljufn%2B87UZMDpMM8x8dsQz5gqKXB3VaQuTeiAxugftf90qOtFErXSmpJWU77gjRdXIV7tBffZ5vittDbPJDPY9UW0ESL9SqeUnFqfQDWl0WffI2QB9Ls%2F%2FYpMyMIo4COgZiZZiakVleTKf0j6W1pQ5jA4fVwQTIts9ff&X-Amz-Signature=281c56c3107663c5bfa2b965179ce97f98c76eab8ba755a29049efff73e81cae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664KJFOA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD6wTCbyDFiG8OcD4Q4GGHB8HbyEc5NJiyO9nGomkUqiQIgXcFpJKQ82eQrPXteSbeZsWc3MK08go%2FteTCmiwSJjcgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAekZxKGaUTHWj40tSrcA8vFMjLJdzKgY18k0Hgr2uG0zCw0pcm9%2FyZWxgTgBg7sPYaEce%2FfXh7p5WCkhaEKBQ%2FH3LhBmQ%2F6RS%2BXDlVw4ugsMD0n5TsnGqhlawjQHEOk6YpsJraAL5FgVlU5IoPj%2BOvagUESr1ToDpq9LQoZhP0KP8ER6P6FRGj3DwRfhOZG%2FTOzudB1%2Fdk4gc07mlxxzQ3DXKanNWCES5LfHiIeAzbgu2gifJN2zmn1ZgFC6L4kydQka4pWztEwtFebGe0dXDzubg9a0NvyXtwqzTphjcTXoEP54QGVDdACjroxR%2FIhpBIO1EGYw%2FM6Vlxi1k97whGFjLjidEGWOoD8HpGE8vTNSPfGUa8nrnrQyk2eF26MM7JtBRpwM%2BV003KbSiOyYe541twzTD79Nhx3J8XuQAlm5T%2Fv8L8kK1qROsPHPXbuTmV%2BMoT1aE9XgwcF60nqIAy9IJJQ3z2%2F2s2og3E5BiQGcz0ak02rsUvqFlN0de3AQ4zaMrbfw%2BHl2%2Fo7RJIVB8XACqik2l1S1QNQcSam3CQFjw9hZjEAdB0bgMvsV4lGunSI6UcDAWeqHrOHHzx4Sh6IJGVCirQBHwQw%2FOL44gJ2%2FVHJDHAHhAaYshDsdbiOHP1n8%2BF52tX0FikwMLTE28QGOqUBwZ7qXik7pj4M0o3oirTrrlbQHZEKwwtTBYwIYSVrqC9xRRAa74QG8%2FtPJiwRvlVpC%2BcW8DEL4j65Rt%2Bkcg3h1q6BoQqo79%2BdrdYaAOqTCVASAQbzCJcLBc%2BeVlruXPf3ljknWebxUppnZ2cbAe0tf%2FSUQofO87i0jERiIgDrQFN91wosBIdImLqwyHBx9IJR3mNZ3rmL0pZXA2NZQVL%2BnRTwnx31&X-Amz-Signature=e40c2e97ecf86888358adf94e14f944b95dd1e70b11bf56b0e19bca0361854cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664KJFOA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD6wTCbyDFiG8OcD4Q4GGHB8HbyEc5NJiyO9nGomkUqiQIgXcFpJKQ82eQrPXteSbeZsWc3MK08go%2FteTCmiwSJjcgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAekZxKGaUTHWj40tSrcA8vFMjLJdzKgY18k0Hgr2uG0zCw0pcm9%2FyZWxgTgBg7sPYaEce%2FfXh7p5WCkhaEKBQ%2FH3LhBmQ%2F6RS%2BXDlVw4ugsMD0n5TsnGqhlawjQHEOk6YpsJraAL5FgVlU5IoPj%2BOvagUESr1ToDpq9LQoZhP0KP8ER6P6FRGj3DwRfhOZG%2FTOzudB1%2Fdk4gc07mlxxzQ3DXKanNWCES5LfHiIeAzbgu2gifJN2zmn1ZgFC6L4kydQka4pWztEwtFebGe0dXDzubg9a0NvyXtwqzTphjcTXoEP54QGVDdACjroxR%2FIhpBIO1EGYw%2FM6Vlxi1k97whGFjLjidEGWOoD8HpGE8vTNSPfGUa8nrnrQyk2eF26MM7JtBRpwM%2BV003KbSiOyYe541twzTD79Nhx3J8XuQAlm5T%2Fv8L8kK1qROsPHPXbuTmV%2BMoT1aE9XgwcF60nqIAy9IJJQ3z2%2F2s2og3E5BiQGcz0ak02rsUvqFlN0de3AQ4zaMrbfw%2BHl2%2Fo7RJIVB8XACqik2l1S1QNQcSam3CQFjw9hZjEAdB0bgMvsV4lGunSI6UcDAWeqHrOHHzx4Sh6IJGVCirQBHwQw%2FOL44gJ2%2FVHJDHAHhAaYshDsdbiOHP1n8%2BF52tX0FikwMLTE28QGOqUBwZ7qXik7pj4M0o3oirTrrlbQHZEKwwtTBYwIYSVrqC9xRRAa74QG8%2FtPJiwRvlVpC%2BcW8DEL4j65Rt%2Bkcg3h1q6BoQqo79%2BdrdYaAOqTCVASAQbzCJcLBc%2BeVlruXPf3ljknWebxUppnZ2cbAe0tf%2FSUQofO87i0jERiIgDrQFN91wosBIdImLqwyHBx9IJR3mNZ3rmL0pZXA2NZQVL%2BnRTwnx31&X-Amz-Signature=ae3e2ef0fdbfac0f34a18d7871e6490875e90fd0a276f1e15edaa7d45421b7af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSNFHCFQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQChEKlGnRdyEwcFJSlQCYItHl2D%2BoCZ8PgWGgLXvpAAYAIhAKoirDWvG2Mfsy%2FirweAWQ3Y1NAzIGXGYmM1sCwj5lIiKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8W1S33UI4gBZNL%2BUq3ANNHQRgexKrcjKioFMJj3%2BrHPEo7LIIdRRS%2BLjWqBybMbsr5VzbWpfFfrsDoECUKqq9Nf49ZWArzYw5WBZ0UTKMqgqcbUQWFfCdUhQ3b2REliVliKbnHvAgSDc2sfqOmdnxuqqh9NVHLDK3iuL6%2FgFlRSPa0g6uz7qX5KQTgujP1Z1uP8pQzBBZG2ndHT7eOj7bUx6VkQjW6jddFmFYphEeNdaUqtIAn76cjntej4xkXuVvE6nV4m8SVGR1%2BUjOkb26ZrVBrnCpBaSsnMs9XjF8hCOXeuUpvzgmDwA8Pm%2BkG%2F3XuUHzFOasV9JFnKaA8UtmU7zozclgidQzjRtZLnRzte02MdP4Ap%2FHLFVwqcYgWWuFoYA%2B%2BL5xPP5H8haq4WA0IA6B4mnbk7O5UsAKQEC5PVRGXycYmmG2ENLyUbOYzHa3hK%2FVbAlTYhGYWW5NyzdkrQo4Oe3Dhi%2FFAjQFOmTIe9i5%2FWm4ShAE9JBLX%2FjIDnM9%2BW9xcwRFBLbKImsDeB9gbVnst0xK3mfu4DnpphApuOS5wezAYfyw5ibSBSAbOp%2FQ%2BseeyUx58NHwBkedUjvKjXuxGCTgpZi9jJF4ZhUeZPY9Ji8WsN3ahyZeVNsgk344MUXikE4eJY9DZjCZxdvEBjqkAXvtDjEFvG75hfdO1EvVvMFflJtNHtLJbC43S98Aezf4yocUXIPFvyaO8CZZEGcK2rOYYQ%2F2sxDcmVeD8WSlaSV1%2Bj3hhdsIb4sa6pECVyIZu%2FxWxyIU1%2FCMsORQpnpRqUkIpiLqsw9H8hfI7Jvl9aYjfjU46pFXZ9EXiv6QUs5sOviARC%2B4XrWtT8OHLs%2F2b2vqN3EXaLbKrC8x%2B4iaLSuSQZ5G&X-Amz-Signature=5e0e1728d7fb10a0d4e7f903612613dbc4d0bd32943b716cb9aa6d13ab0abc3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSNFHCFQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQChEKlGnRdyEwcFJSlQCYItHl2D%2BoCZ8PgWGgLXvpAAYAIhAKoirDWvG2Mfsy%2FirweAWQ3Y1NAzIGXGYmM1sCwj5lIiKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8W1S33UI4gBZNL%2BUq3ANNHQRgexKrcjKioFMJj3%2BrHPEo7LIIdRRS%2BLjWqBybMbsr5VzbWpfFfrsDoECUKqq9Nf49ZWArzYw5WBZ0UTKMqgqcbUQWFfCdUhQ3b2REliVliKbnHvAgSDc2sfqOmdnxuqqh9NVHLDK3iuL6%2FgFlRSPa0g6uz7qX5KQTgujP1Z1uP8pQzBBZG2ndHT7eOj7bUx6VkQjW6jddFmFYphEeNdaUqtIAn76cjntej4xkXuVvE6nV4m8SVGR1%2BUjOkb26ZrVBrnCpBaSsnMs9XjF8hCOXeuUpvzgmDwA8Pm%2BkG%2F3XuUHzFOasV9JFnKaA8UtmU7zozclgidQzjRtZLnRzte02MdP4Ap%2FHLFVwqcYgWWuFoYA%2B%2BL5xPP5H8haq4WA0IA6B4mnbk7O5UsAKQEC5PVRGXycYmmG2ENLyUbOYzHa3hK%2FVbAlTYhGYWW5NyzdkrQo4Oe3Dhi%2FFAjQFOmTIe9i5%2FWm4ShAE9JBLX%2FjIDnM9%2BW9xcwRFBLbKImsDeB9gbVnst0xK3mfu4DnpphApuOS5wezAYfyw5ibSBSAbOp%2FQ%2BseeyUx58NHwBkedUjvKjXuxGCTgpZi9jJF4ZhUeZPY9Ji8WsN3ahyZeVNsgk344MUXikE4eJY9DZjCZxdvEBjqkAXvtDjEFvG75hfdO1EvVvMFflJtNHtLJbC43S98Aezf4yocUXIPFvyaO8CZZEGcK2rOYYQ%2F2sxDcmVeD8WSlaSV1%2Bj3hhdsIb4sa6pECVyIZu%2FxWxyIU1%2FCMsORQpnpRqUkIpiLqsw9H8hfI7Jvl9aYjfjU46pFXZ9EXiv6QUs5sOviARC%2B4XrWtT8OHLs%2F2b2vqN3EXaLbKrC8x%2B4iaLSuSQZ5G&X-Amz-Signature=f5fa7cc201868a56b6df03c7e166ad8fd65f53f66692e4024636a472444ea7d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSNFHCFQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQChEKlGnRdyEwcFJSlQCYItHl2D%2BoCZ8PgWGgLXvpAAYAIhAKoirDWvG2Mfsy%2FirweAWQ3Y1NAzIGXGYmM1sCwj5lIiKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8W1S33UI4gBZNL%2BUq3ANNHQRgexKrcjKioFMJj3%2BrHPEo7LIIdRRS%2BLjWqBybMbsr5VzbWpfFfrsDoECUKqq9Nf49ZWArzYw5WBZ0UTKMqgqcbUQWFfCdUhQ3b2REliVliKbnHvAgSDc2sfqOmdnxuqqh9NVHLDK3iuL6%2FgFlRSPa0g6uz7qX5KQTgujP1Z1uP8pQzBBZG2ndHT7eOj7bUx6VkQjW6jddFmFYphEeNdaUqtIAn76cjntej4xkXuVvE6nV4m8SVGR1%2BUjOkb26ZrVBrnCpBaSsnMs9XjF8hCOXeuUpvzgmDwA8Pm%2BkG%2F3XuUHzFOasV9JFnKaA8UtmU7zozclgidQzjRtZLnRzte02MdP4Ap%2FHLFVwqcYgWWuFoYA%2B%2BL5xPP5H8haq4WA0IA6B4mnbk7O5UsAKQEC5PVRGXycYmmG2ENLyUbOYzHa3hK%2FVbAlTYhGYWW5NyzdkrQo4Oe3Dhi%2FFAjQFOmTIe9i5%2FWm4ShAE9JBLX%2FjIDnM9%2BW9xcwRFBLbKImsDeB9gbVnst0xK3mfu4DnpphApuOS5wezAYfyw5ibSBSAbOp%2FQ%2BseeyUx58NHwBkedUjvKjXuxGCTgpZi9jJF4ZhUeZPY9Ji8WsN3ahyZeVNsgk344MUXikE4eJY9DZjCZxdvEBjqkAXvtDjEFvG75hfdO1EvVvMFflJtNHtLJbC43S98Aezf4yocUXIPFvyaO8CZZEGcK2rOYYQ%2F2sxDcmVeD8WSlaSV1%2Bj3hhdsIb4sa6pECVyIZu%2FxWxyIU1%2FCMsORQpnpRqUkIpiLqsw9H8hfI7Jvl9aYjfjU46pFXZ9EXiv6QUs5sOviARC%2B4XrWtT8OHLs%2F2b2vqN3EXaLbKrC8x%2B4iaLSuSQZ5G&X-Amz-Signature=67d56ae6ee5ffe78f40b1c03b6c49e9dcba707d789d5a75736da4cc72c4e0a94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSNFHCFQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQChEKlGnRdyEwcFJSlQCYItHl2D%2BoCZ8PgWGgLXvpAAYAIhAKoirDWvG2Mfsy%2FirweAWQ3Y1NAzIGXGYmM1sCwj5lIiKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8W1S33UI4gBZNL%2BUq3ANNHQRgexKrcjKioFMJj3%2BrHPEo7LIIdRRS%2BLjWqBybMbsr5VzbWpfFfrsDoECUKqq9Nf49ZWArzYw5WBZ0UTKMqgqcbUQWFfCdUhQ3b2REliVliKbnHvAgSDc2sfqOmdnxuqqh9NVHLDK3iuL6%2FgFlRSPa0g6uz7qX5KQTgujP1Z1uP8pQzBBZG2ndHT7eOj7bUx6VkQjW6jddFmFYphEeNdaUqtIAn76cjntej4xkXuVvE6nV4m8SVGR1%2BUjOkb26ZrVBrnCpBaSsnMs9XjF8hCOXeuUpvzgmDwA8Pm%2BkG%2F3XuUHzFOasV9JFnKaA8UtmU7zozclgidQzjRtZLnRzte02MdP4Ap%2FHLFVwqcYgWWuFoYA%2B%2BL5xPP5H8haq4WA0IA6B4mnbk7O5UsAKQEC5PVRGXycYmmG2ENLyUbOYzHa3hK%2FVbAlTYhGYWW5NyzdkrQo4Oe3Dhi%2FFAjQFOmTIe9i5%2FWm4ShAE9JBLX%2FjIDnM9%2BW9xcwRFBLbKImsDeB9gbVnst0xK3mfu4DnpphApuOS5wezAYfyw5ibSBSAbOp%2FQ%2BseeyUx58NHwBkedUjvKjXuxGCTgpZi9jJF4ZhUeZPY9Ji8WsN3ahyZeVNsgk344MUXikE4eJY9DZjCZxdvEBjqkAXvtDjEFvG75hfdO1EvVvMFflJtNHtLJbC43S98Aezf4yocUXIPFvyaO8CZZEGcK2rOYYQ%2F2sxDcmVeD8WSlaSV1%2Bj3hhdsIb4sa6pECVyIZu%2FxWxyIU1%2FCMsORQpnpRqUkIpiLqsw9H8hfI7Jvl9aYjfjU46pFXZ9EXiv6QUs5sOviARC%2B4XrWtT8OHLs%2F2b2vqN3EXaLbKrC8x%2B4iaLSuSQZ5G&X-Amz-Signature=a49104e623d50eb1817c68ee0bd255390c7b874f3c19467edc6e68b6499cc06a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSNFHCFQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQChEKlGnRdyEwcFJSlQCYItHl2D%2BoCZ8PgWGgLXvpAAYAIhAKoirDWvG2Mfsy%2FirweAWQ3Y1NAzIGXGYmM1sCwj5lIiKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8W1S33UI4gBZNL%2BUq3ANNHQRgexKrcjKioFMJj3%2BrHPEo7LIIdRRS%2BLjWqBybMbsr5VzbWpfFfrsDoECUKqq9Nf49ZWArzYw5WBZ0UTKMqgqcbUQWFfCdUhQ3b2REliVliKbnHvAgSDc2sfqOmdnxuqqh9NVHLDK3iuL6%2FgFlRSPa0g6uz7qX5KQTgujP1Z1uP8pQzBBZG2ndHT7eOj7bUx6VkQjW6jddFmFYphEeNdaUqtIAn76cjntej4xkXuVvE6nV4m8SVGR1%2BUjOkb26ZrVBrnCpBaSsnMs9XjF8hCOXeuUpvzgmDwA8Pm%2BkG%2F3XuUHzFOasV9JFnKaA8UtmU7zozclgidQzjRtZLnRzte02MdP4Ap%2FHLFVwqcYgWWuFoYA%2B%2BL5xPP5H8haq4WA0IA6B4mnbk7O5UsAKQEC5PVRGXycYmmG2ENLyUbOYzHa3hK%2FVbAlTYhGYWW5NyzdkrQo4Oe3Dhi%2FFAjQFOmTIe9i5%2FWm4ShAE9JBLX%2FjIDnM9%2BW9xcwRFBLbKImsDeB9gbVnst0xK3mfu4DnpphApuOS5wezAYfyw5ibSBSAbOp%2FQ%2BseeyUx58NHwBkedUjvKjXuxGCTgpZi9jJF4ZhUeZPY9Ji8WsN3ahyZeVNsgk344MUXikE4eJY9DZjCZxdvEBjqkAXvtDjEFvG75hfdO1EvVvMFflJtNHtLJbC43S98Aezf4yocUXIPFvyaO8CZZEGcK2rOYYQ%2F2sxDcmVeD8WSlaSV1%2Bj3hhdsIb4sa6pECVyIZu%2FxWxyIU1%2FCMsORQpnpRqUkIpiLqsw9H8hfI7Jvl9aYjfjU46pFXZ9EXiv6QUs5sOviARC%2B4XrWtT8OHLs%2F2b2vqN3EXaLbKrC8x%2B4iaLSuSQZ5G&X-Amz-Signature=40475b4a75ced04b36ec8ee5f84278144a720a6c1ff8535abe5c71c771f19cc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSNFHCFQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQChEKlGnRdyEwcFJSlQCYItHl2D%2BoCZ8PgWGgLXvpAAYAIhAKoirDWvG2Mfsy%2FirweAWQ3Y1NAzIGXGYmM1sCwj5lIiKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8W1S33UI4gBZNL%2BUq3ANNHQRgexKrcjKioFMJj3%2BrHPEo7LIIdRRS%2BLjWqBybMbsr5VzbWpfFfrsDoECUKqq9Nf49ZWArzYw5WBZ0UTKMqgqcbUQWFfCdUhQ3b2REliVliKbnHvAgSDc2sfqOmdnxuqqh9NVHLDK3iuL6%2FgFlRSPa0g6uz7qX5KQTgujP1Z1uP8pQzBBZG2ndHT7eOj7bUx6VkQjW6jddFmFYphEeNdaUqtIAn76cjntej4xkXuVvE6nV4m8SVGR1%2BUjOkb26ZrVBrnCpBaSsnMs9XjF8hCOXeuUpvzgmDwA8Pm%2BkG%2F3XuUHzFOasV9JFnKaA8UtmU7zozclgidQzjRtZLnRzte02MdP4Ap%2FHLFVwqcYgWWuFoYA%2B%2BL5xPP5H8haq4WA0IA6B4mnbk7O5UsAKQEC5PVRGXycYmmG2ENLyUbOYzHa3hK%2FVbAlTYhGYWW5NyzdkrQo4Oe3Dhi%2FFAjQFOmTIe9i5%2FWm4ShAE9JBLX%2FjIDnM9%2BW9xcwRFBLbKImsDeB9gbVnst0xK3mfu4DnpphApuOS5wezAYfyw5ibSBSAbOp%2FQ%2BseeyUx58NHwBkedUjvKjXuxGCTgpZi9jJF4ZhUeZPY9Ji8WsN3ahyZeVNsgk344MUXikE4eJY9DZjCZxdvEBjqkAXvtDjEFvG75hfdO1EvVvMFflJtNHtLJbC43S98Aezf4yocUXIPFvyaO8CZZEGcK2rOYYQ%2F2sxDcmVeD8WSlaSV1%2Bj3hhdsIb4sa6pECVyIZu%2FxWxyIU1%2FCMsORQpnpRqUkIpiLqsw9H8hfI7Jvl9aYjfjU46pFXZ9EXiv6QUs5sOviARC%2B4XrWtT8OHLs%2F2b2vqN3EXaLbKrC8x%2B4iaLSuSQZ5G&X-Amz-Signature=fc04f02870a0c75cf376ff6e678eab58fd432ff14fc5ad9c2806fb3ef395b9ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSNFHCFQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQChEKlGnRdyEwcFJSlQCYItHl2D%2BoCZ8PgWGgLXvpAAYAIhAKoirDWvG2Mfsy%2FirweAWQ3Y1NAzIGXGYmM1sCwj5lIiKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8W1S33UI4gBZNL%2BUq3ANNHQRgexKrcjKioFMJj3%2BrHPEo7LIIdRRS%2BLjWqBybMbsr5VzbWpfFfrsDoECUKqq9Nf49ZWArzYw5WBZ0UTKMqgqcbUQWFfCdUhQ3b2REliVliKbnHvAgSDc2sfqOmdnxuqqh9NVHLDK3iuL6%2FgFlRSPa0g6uz7qX5KQTgujP1Z1uP8pQzBBZG2ndHT7eOj7bUx6VkQjW6jddFmFYphEeNdaUqtIAn76cjntej4xkXuVvE6nV4m8SVGR1%2BUjOkb26ZrVBrnCpBaSsnMs9XjF8hCOXeuUpvzgmDwA8Pm%2BkG%2F3XuUHzFOasV9JFnKaA8UtmU7zozclgidQzjRtZLnRzte02MdP4Ap%2FHLFVwqcYgWWuFoYA%2B%2BL5xPP5H8haq4WA0IA6B4mnbk7O5UsAKQEC5PVRGXycYmmG2ENLyUbOYzHa3hK%2FVbAlTYhGYWW5NyzdkrQo4Oe3Dhi%2FFAjQFOmTIe9i5%2FWm4ShAE9JBLX%2FjIDnM9%2BW9xcwRFBLbKImsDeB9gbVnst0xK3mfu4DnpphApuOS5wezAYfyw5ibSBSAbOp%2FQ%2BseeyUx58NHwBkedUjvKjXuxGCTgpZi9jJF4ZhUeZPY9Ji8WsN3ahyZeVNsgk344MUXikE4eJY9DZjCZxdvEBjqkAXvtDjEFvG75hfdO1EvVvMFflJtNHtLJbC43S98Aezf4yocUXIPFvyaO8CZZEGcK2rOYYQ%2F2sxDcmVeD8WSlaSV1%2Bj3hhdsIb4sa6pECVyIZu%2FxWxyIU1%2FCMsORQpnpRqUkIpiLqsw9H8hfI7Jvl9aYjfjU46pFXZ9EXiv6QUs5sOviARC%2B4XrWtT8OHLs%2F2b2vqN3EXaLbKrC8x%2B4iaLSuSQZ5G&X-Amz-Signature=67d56ae6ee5ffe78f40b1c03b6c49e9dcba707d789d5a75736da4cc72c4e0a94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSNFHCFQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQChEKlGnRdyEwcFJSlQCYItHl2D%2BoCZ8PgWGgLXvpAAYAIhAKoirDWvG2Mfsy%2FirweAWQ3Y1NAzIGXGYmM1sCwj5lIiKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8W1S33UI4gBZNL%2BUq3ANNHQRgexKrcjKioFMJj3%2BrHPEo7LIIdRRS%2BLjWqBybMbsr5VzbWpfFfrsDoECUKqq9Nf49ZWArzYw5WBZ0UTKMqgqcbUQWFfCdUhQ3b2REliVliKbnHvAgSDc2sfqOmdnxuqqh9NVHLDK3iuL6%2FgFlRSPa0g6uz7qX5KQTgujP1Z1uP8pQzBBZG2ndHT7eOj7bUx6VkQjW6jddFmFYphEeNdaUqtIAn76cjntej4xkXuVvE6nV4m8SVGR1%2BUjOkb26ZrVBrnCpBaSsnMs9XjF8hCOXeuUpvzgmDwA8Pm%2BkG%2F3XuUHzFOasV9JFnKaA8UtmU7zozclgidQzjRtZLnRzte02MdP4Ap%2FHLFVwqcYgWWuFoYA%2B%2BL5xPP5H8haq4WA0IA6B4mnbk7O5UsAKQEC5PVRGXycYmmG2ENLyUbOYzHa3hK%2FVbAlTYhGYWW5NyzdkrQo4Oe3Dhi%2FFAjQFOmTIe9i5%2FWm4ShAE9JBLX%2FjIDnM9%2BW9xcwRFBLbKImsDeB9gbVnst0xK3mfu4DnpphApuOS5wezAYfyw5ibSBSAbOp%2FQ%2BseeyUx58NHwBkedUjvKjXuxGCTgpZi9jJF4ZhUeZPY9Ji8WsN3ahyZeVNsgk344MUXikE4eJY9DZjCZxdvEBjqkAXvtDjEFvG75hfdO1EvVvMFflJtNHtLJbC43S98Aezf4yocUXIPFvyaO8CZZEGcK2rOYYQ%2F2sxDcmVeD8WSlaSV1%2Bj3hhdsIb4sa6pECVyIZu%2FxWxyIU1%2FCMsORQpnpRqUkIpiLqsw9H8hfI7Jvl9aYjfjU46pFXZ9EXiv6QUs5sOviARC%2B4XrWtT8OHLs%2F2b2vqN3EXaLbKrC8x%2B4iaLSuSQZ5G&X-Amz-Signature=84b19a75693118f49c1c8dc7cc45e0cc3dc45d88bf2c6e3087e5d2c6fe3cb88e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSNFHCFQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQChEKlGnRdyEwcFJSlQCYItHl2D%2BoCZ8PgWGgLXvpAAYAIhAKoirDWvG2Mfsy%2FirweAWQ3Y1NAzIGXGYmM1sCwj5lIiKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8W1S33UI4gBZNL%2BUq3ANNHQRgexKrcjKioFMJj3%2BrHPEo7LIIdRRS%2BLjWqBybMbsr5VzbWpfFfrsDoECUKqq9Nf49ZWArzYw5WBZ0UTKMqgqcbUQWFfCdUhQ3b2REliVliKbnHvAgSDc2sfqOmdnxuqqh9NVHLDK3iuL6%2FgFlRSPa0g6uz7qX5KQTgujP1Z1uP8pQzBBZG2ndHT7eOj7bUx6VkQjW6jddFmFYphEeNdaUqtIAn76cjntej4xkXuVvE6nV4m8SVGR1%2BUjOkb26ZrVBrnCpBaSsnMs9XjF8hCOXeuUpvzgmDwA8Pm%2BkG%2F3XuUHzFOasV9JFnKaA8UtmU7zozclgidQzjRtZLnRzte02MdP4Ap%2FHLFVwqcYgWWuFoYA%2B%2BL5xPP5H8haq4WA0IA6B4mnbk7O5UsAKQEC5PVRGXycYmmG2ENLyUbOYzHa3hK%2FVbAlTYhGYWW5NyzdkrQo4Oe3Dhi%2FFAjQFOmTIe9i5%2FWm4ShAE9JBLX%2FjIDnM9%2BW9xcwRFBLbKImsDeB9gbVnst0xK3mfu4DnpphApuOS5wezAYfyw5ibSBSAbOp%2FQ%2BseeyUx58NHwBkedUjvKjXuxGCTgpZi9jJF4ZhUeZPY9Ji8WsN3ahyZeVNsgk344MUXikE4eJY9DZjCZxdvEBjqkAXvtDjEFvG75hfdO1EvVvMFflJtNHtLJbC43S98Aezf4yocUXIPFvyaO8CZZEGcK2rOYYQ%2F2sxDcmVeD8WSlaSV1%2Bj3hhdsIb4sa6pECVyIZu%2FxWxyIU1%2FCMsORQpnpRqUkIpiLqsw9H8hfI7Jvl9aYjfjU46pFXZ9EXiv6QUs5sOviARC%2B4XrWtT8OHLs%2F2b2vqN3EXaLbKrC8x%2B4iaLSuSQZ5G&X-Amz-Signature=0e502a8acb3b4847948e5826f620f547aafcd8a55d778d98f5bac50bb0f1be2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSNFHCFQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQChEKlGnRdyEwcFJSlQCYItHl2D%2BoCZ8PgWGgLXvpAAYAIhAKoirDWvG2Mfsy%2FirweAWQ3Y1NAzIGXGYmM1sCwj5lIiKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8W1S33UI4gBZNL%2BUq3ANNHQRgexKrcjKioFMJj3%2BrHPEo7LIIdRRS%2BLjWqBybMbsr5VzbWpfFfrsDoECUKqq9Nf49ZWArzYw5WBZ0UTKMqgqcbUQWFfCdUhQ3b2REliVliKbnHvAgSDc2sfqOmdnxuqqh9NVHLDK3iuL6%2FgFlRSPa0g6uz7qX5KQTgujP1Z1uP8pQzBBZG2ndHT7eOj7bUx6VkQjW6jddFmFYphEeNdaUqtIAn76cjntej4xkXuVvE6nV4m8SVGR1%2BUjOkb26ZrVBrnCpBaSsnMs9XjF8hCOXeuUpvzgmDwA8Pm%2BkG%2F3XuUHzFOasV9JFnKaA8UtmU7zozclgidQzjRtZLnRzte02MdP4Ap%2FHLFVwqcYgWWuFoYA%2B%2BL5xPP5H8haq4WA0IA6B4mnbk7O5UsAKQEC5PVRGXycYmmG2ENLyUbOYzHa3hK%2FVbAlTYhGYWW5NyzdkrQo4Oe3Dhi%2FFAjQFOmTIe9i5%2FWm4ShAE9JBLX%2FjIDnM9%2BW9xcwRFBLbKImsDeB9gbVnst0xK3mfu4DnpphApuOS5wezAYfyw5ibSBSAbOp%2FQ%2BseeyUx58NHwBkedUjvKjXuxGCTgpZi9jJF4ZhUeZPY9Ji8WsN3ahyZeVNsgk344MUXikE4eJY9DZjCZxdvEBjqkAXvtDjEFvG75hfdO1EvVvMFflJtNHtLJbC43S98Aezf4yocUXIPFvyaO8CZZEGcK2rOYYQ%2F2sxDcmVeD8WSlaSV1%2Bj3hhdsIb4sa6pECVyIZu%2FxWxyIU1%2FCMsORQpnpRqUkIpiLqsw9H8hfI7Jvl9aYjfjU46pFXZ9EXiv6QUs5sOviARC%2B4XrWtT8OHLs%2F2b2vqN3EXaLbKrC8x%2B4iaLSuSQZ5G&X-Amz-Signature=899993714c4c20521df71deee2877d2b226a3ebfaa281f0961d4cdf47ea8d100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
