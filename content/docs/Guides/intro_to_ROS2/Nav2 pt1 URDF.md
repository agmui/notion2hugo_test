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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKDJAJBK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD9bfFHud%2BYgRnsnT0CFjomBBatIa7sXg3WHAWvzXmP4gIhAJ%2Bgs20xVTHhe9seHiz1KGJS6Oy918apyRYqGJ2n9aRxKv8DCHMQABoMNjM3NDIzMTgzODA1IgwKH6UWGTrTpbmVNscq3ANBLcrXOh9uVLIoou5YlyzrqX9fkbijDqR4WRqR5mxUVqhwtcpQCjt0fL%2B4ii3c9%2FTOIlhQxHmYC4acX1oJcbSiHWYx8imJC%2F5yTZ3WGxQyjigf14ww%2BqX5DTdLVnFYuqJsBnWlbuPt9Ki6%2BtGd%2FhqQGhxf3QEJjGsGIueRH6G5R%2Fv0m73hgH7FytpVdyg7AU9plglOi2JsKADGo6GJFWBaMeAbtMStB8LCZQCWVZrRFMTZGYgq7xQDNyRvJHwpHc%2FyOK5cwguh8soDN1H5an770p%2BUnN63cRMbOcIOtkWxmpXJsxkdIBT%2BmsIMh4tRDFnOQk3oU5O8f%2F49F62vBgo1iMeroLS7oCI%2F11HObmPZhKgtACGUvKeh9%2BUVDavn%2FDCoqvipOtxxkyAlp6dY1Wc%2F%2FuyQYXaW5yaGV9Gr4DwfRnIkuALK3OBXaH8UPCrQSWy8BuyiUTVnlo3qqp1FLT%2Bymu93n6Ofp9D4M4Z7yTkFXinV9r13xSqjMrlNsBVnimJzUQ3P2HkSKKDzSYM5OPdKRNhlY13BHoMkd3yDxWVtZYj71Cs3ip3DFfAMq6361GsmU5mAYiUK6MvTBzqrIvbfnivYX9X7vDsD8lXTOiHhst9PqzyOOqgwtQSYozDXz8zEBjqkAV2ukPUmIlujk7hDxrjxpFleG%2BPvSkPlH58kcxWeXIxgav6uuaeSnLg8dY0uYp3yrQS1lze1coUM25F%2FjqhEF102aJrsOtWu4TNYDwGOn%2BU0qlu4Eh7p699M9GM%2B%2B0nCbai6Wbr9UQT%2Br1YemB2NXqKsxD9hEP6nIhOAR2tIkBcsOMEtGLJv1gI6eLTrK1LYVtGEJ79N8r4PfEc72T5PmtB0C4qD&X-Amz-Signature=a0769cca9117afb7a8bbc05bd5816724964be4fa9ce56c3d00ad5196f99045a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKDJAJBK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD9bfFHud%2BYgRnsnT0CFjomBBatIa7sXg3WHAWvzXmP4gIhAJ%2Bgs20xVTHhe9seHiz1KGJS6Oy918apyRYqGJ2n9aRxKv8DCHMQABoMNjM3NDIzMTgzODA1IgwKH6UWGTrTpbmVNscq3ANBLcrXOh9uVLIoou5YlyzrqX9fkbijDqR4WRqR5mxUVqhwtcpQCjt0fL%2B4ii3c9%2FTOIlhQxHmYC4acX1oJcbSiHWYx8imJC%2F5yTZ3WGxQyjigf14ww%2BqX5DTdLVnFYuqJsBnWlbuPt9Ki6%2BtGd%2FhqQGhxf3QEJjGsGIueRH6G5R%2Fv0m73hgH7FytpVdyg7AU9plglOi2JsKADGo6GJFWBaMeAbtMStB8LCZQCWVZrRFMTZGYgq7xQDNyRvJHwpHc%2FyOK5cwguh8soDN1H5an770p%2BUnN63cRMbOcIOtkWxmpXJsxkdIBT%2BmsIMh4tRDFnOQk3oU5O8f%2F49F62vBgo1iMeroLS7oCI%2F11HObmPZhKgtACGUvKeh9%2BUVDavn%2FDCoqvipOtxxkyAlp6dY1Wc%2F%2FuyQYXaW5yaGV9Gr4DwfRnIkuALK3OBXaH8UPCrQSWy8BuyiUTVnlo3qqp1FLT%2Bymu93n6Ofp9D4M4Z7yTkFXinV9r13xSqjMrlNsBVnimJzUQ3P2HkSKKDzSYM5OPdKRNhlY13BHoMkd3yDxWVtZYj71Cs3ip3DFfAMq6361GsmU5mAYiUK6MvTBzqrIvbfnivYX9X7vDsD8lXTOiHhst9PqzyOOqgwtQSYozDXz8zEBjqkAV2ukPUmIlujk7hDxrjxpFleG%2BPvSkPlH58kcxWeXIxgav6uuaeSnLg8dY0uYp3yrQS1lze1coUM25F%2FjqhEF102aJrsOtWu4TNYDwGOn%2BU0qlu4Eh7p699M9GM%2B%2B0nCbai6Wbr9UQT%2Br1YemB2NXqKsxD9hEP6nIhOAR2tIkBcsOMEtGLJv1gI6eLTrK1LYVtGEJ79N8r4PfEc72T5PmtB0C4qD&X-Amz-Signature=e3e7fc24670ed432d9f48b6440754297f08ff217c471cd6bd6be12e8090cdf55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKDJAJBK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD9bfFHud%2BYgRnsnT0CFjomBBatIa7sXg3WHAWvzXmP4gIhAJ%2Bgs20xVTHhe9seHiz1KGJS6Oy918apyRYqGJ2n9aRxKv8DCHMQABoMNjM3NDIzMTgzODA1IgwKH6UWGTrTpbmVNscq3ANBLcrXOh9uVLIoou5YlyzrqX9fkbijDqR4WRqR5mxUVqhwtcpQCjt0fL%2B4ii3c9%2FTOIlhQxHmYC4acX1oJcbSiHWYx8imJC%2F5yTZ3WGxQyjigf14ww%2BqX5DTdLVnFYuqJsBnWlbuPt9Ki6%2BtGd%2FhqQGhxf3QEJjGsGIueRH6G5R%2Fv0m73hgH7FytpVdyg7AU9plglOi2JsKADGo6GJFWBaMeAbtMStB8LCZQCWVZrRFMTZGYgq7xQDNyRvJHwpHc%2FyOK5cwguh8soDN1H5an770p%2BUnN63cRMbOcIOtkWxmpXJsxkdIBT%2BmsIMh4tRDFnOQk3oU5O8f%2F49F62vBgo1iMeroLS7oCI%2F11HObmPZhKgtACGUvKeh9%2BUVDavn%2FDCoqvipOtxxkyAlp6dY1Wc%2F%2FuyQYXaW5yaGV9Gr4DwfRnIkuALK3OBXaH8UPCrQSWy8BuyiUTVnlo3qqp1FLT%2Bymu93n6Ofp9D4M4Z7yTkFXinV9r13xSqjMrlNsBVnimJzUQ3P2HkSKKDzSYM5OPdKRNhlY13BHoMkd3yDxWVtZYj71Cs3ip3DFfAMq6361GsmU5mAYiUK6MvTBzqrIvbfnivYX9X7vDsD8lXTOiHhst9PqzyOOqgwtQSYozDXz8zEBjqkAV2ukPUmIlujk7hDxrjxpFleG%2BPvSkPlH58kcxWeXIxgav6uuaeSnLg8dY0uYp3yrQS1lze1coUM25F%2FjqhEF102aJrsOtWu4TNYDwGOn%2BU0qlu4Eh7p699M9GM%2B%2B0nCbai6Wbr9UQT%2Br1YemB2NXqKsxD9hEP6nIhOAR2tIkBcsOMEtGLJv1gI6eLTrK1LYVtGEJ79N8r4PfEc72T5PmtB0C4qD&X-Amz-Signature=4fa4a35f17e306372c6bfb143cb5244c09d49056646e0259bf040e0230ac3d32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKDJAJBK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD9bfFHud%2BYgRnsnT0CFjomBBatIa7sXg3WHAWvzXmP4gIhAJ%2Bgs20xVTHhe9seHiz1KGJS6Oy918apyRYqGJ2n9aRxKv8DCHMQABoMNjM3NDIzMTgzODA1IgwKH6UWGTrTpbmVNscq3ANBLcrXOh9uVLIoou5YlyzrqX9fkbijDqR4WRqR5mxUVqhwtcpQCjt0fL%2B4ii3c9%2FTOIlhQxHmYC4acX1oJcbSiHWYx8imJC%2F5yTZ3WGxQyjigf14ww%2BqX5DTdLVnFYuqJsBnWlbuPt9Ki6%2BtGd%2FhqQGhxf3QEJjGsGIueRH6G5R%2Fv0m73hgH7FytpVdyg7AU9plglOi2JsKADGo6GJFWBaMeAbtMStB8LCZQCWVZrRFMTZGYgq7xQDNyRvJHwpHc%2FyOK5cwguh8soDN1H5an770p%2BUnN63cRMbOcIOtkWxmpXJsxkdIBT%2BmsIMh4tRDFnOQk3oU5O8f%2F49F62vBgo1iMeroLS7oCI%2F11HObmPZhKgtACGUvKeh9%2BUVDavn%2FDCoqvipOtxxkyAlp6dY1Wc%2F%2FuyQYXaW5yaGV9Gr4DwfRnIkuALK3OBXaH8UPCrQSWy8BuyiUTVnlo3qqp1FLT%2Bymu93n6Ofp9D4M4Z7yTkFXinV9r13xSqjMrlNsBVnimJzUQ3P2HkSKKDzSYM5OPdKRNhlY13BHoMkd3yDxWVtZYj71Cs3ip3DFfAMq6361GsmU5mAYiUK6MvTBzqrIvbfnivYX9X7vDsD8lXTOiHhst9PqzyOOqgwtQSYozDXz8zEBjqkAV2ukPUmIlujk7hDxrjxpFleG%2BPvSkPlH58kcxWeXIxgav6uuaeSnLg8dY0uYp3yrQS1lze1coUM25F%2FjqhEF102aJrsOtWu4TNYDwGOn%2BU0qlu4Eh7p699M9GM%2B%2B0nCbai6Wbr9UQT%2Br1YemB2NXqKsxD9hEP6nIhOAR2tIkBcsOMEtGLJv1gI6eLTrK1LYVtGEJ79N8r4PfEc72T5PmtB0C4qD&X-Amz-Signature=3c5cf92b0feedb9365ea37f70152cccdd691adfe0c758ab51ba0d6e9b5e59655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKDJAJBK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD9bfFHud%2BYgRnsnT0CFjomBBatIa7sXg3WHAWvzXmP4gIhAJ%2Bgs20xVTHhe9seHiz1KGJS6Oy918apyRYqGJ2n9aRxKv8DCHMQABoMNjM3NDIzMTgzODA1IgwKH6UWGTrTpbmVNscq3ANBLcrXOh9uVLIoou5YlyzrqX9fkbijDqR4WRqR5mxUVqhwtcpQCjt0fL%2B4ii3c9%2FTOIlhQxHmYC4acX1oJcbSiHWYx8imJC%2F5yTZ3WGxQyjigf14ww%2BqX5DTdLVnFYuqJsBnWlbuPt9Ki6%2BtGd%2FhqQGhxf3QEJjGsGIueRH6G5R%2Fv0m73hgH7FytpVdyg7AU9plglOi2JsKADGo6GJFWBaMeAbtMStB8LCZQCWVZrRFMTZGYgq7xQDNyRvJHwpHc%2FyOK5cwguh8soDN1H5an770p%2BUnN63cRMbOcIOtkWxmpXJsxkdIBT%2BmsIMh4tRDFnOQk3oU5O8f%2F49F62vBgo1iMeroLS7oCI%2F11HObmPZhKgtACGUvKeh9%2BUVDavn%2FDCoqvipOtxxkyAlp6dY1Wc%2F%2FuyQYXaW5yaGV9Gr4DwfRnIkuALK3OBXaH8UPCrQSWy8BuyiUTVnlo3qqp1FLT%2Bymu93n6Ofp9D4M4Z7yTkFXinV9r13xSqjMrlNsBVnimJzUQ3P2HkSKKDzSYM5OPdKRNhlY13BHoMkd3yDxWVtZYj71Cs3ip3DFfAMq6361GsmU5mAYiUK6MvTBzqrIvbfnivYX9X7vDsD8lXTOiHhst9PqzyOOqgwtQSYozDXz8zEBjqkAV2ukPUmIlujk7hDxrjxpFleG%2BPvSkPlH58kcxWeXIxgav6uuaeSnLg8dY0uYp3yrQS1lze1coUM25F%2FjqhEF102aJrsOtWu4TNYDwGOn%2BU0qlu4Eh7p699M9GM%2B%2B0nCbai6Wbr9UQT%2Br1YemB2NXqKsxD9hEP6nIhOAR2tIkBcsOMEtGLJv1gI6eLTrK1LYVtGEJ79N8r4PfEc72T5PmtB0C4qD&X-Amz-Signature=b4642de2ce8d8c9dca5568b18fa14faabb1d52c9caee6de6794d0d207f8b9437&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKDJAJBK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD9bfFHud%2BYgRnsnT0CFjomBBatIa7sXg3WHAWvzXmP4gIhAJ%2Bgs20xVTHhe9seHiz1KGJS6Oy918apyRYqGJ2n9aRxKv8DCHMQABoMNjM3NDIzMTgzODA1IgwKH6UWGTrTpbmVNscq3ANBLcrXOh9uVLIoou5YlyzrqX9fkbijDqR4WRqR5mxUVqhwtcpQCjt0fL%2B4ii3c9%2FTOIlhQxHmYC4acX1oJcbSiHWYx8imJC%2F5yTZ3WGxQyjigf14ww%2BqX5DTdLVnFYuqJsBnWlbuPt9Ki6%2BtGd%2FhqQGhxf3QEJjGsGIueRH6G5R%2Fv0m73hgH7FytpVdyg7AU9plglOi2JsKADGo6GJFWBaMeAbtMStB8LCZQCWVZrRFMTZGYgq7xQDNyRvJHwpHc%2FyOK5cwguh8soDN1H5an770p%2BUnN63cRMbOcIOtkWxmpXJsxkdIBT%2BmsIMh4tRDFnOQk3oU5O8f%2F49F62vBgo1iMeroLS7oCI%2F11HObmPZhKgtACGUvKeh9%2BUVDavn%2FDCoqvipOtxxkyAlp6dY1Wc%2F%2FuyQYXaW5yaGV9Gr4DwfRnIkuALK3OBXaH8UPCrQSWy8BuyiUTVnlo3qqp1FLT%2Bymu93n6Ofp9D4M4Z7yTkFXinV9r13xSqjMrlNsBVnimJzUQ3P2HkSKKDzSYM5OPdKRNhlY13BHoMkd3yDxWVtZYj71Cs3ip3DFfAMq6361GsmU5mAYiUK6MvTBzqrIvbfnivYX9X7vDsD8lXTOiHhst9PqzyOOqgwtQSYozDXz8zEBjqkAV2ukPUmIlujk7hDxrjxpFleG%2BPvSkPlH58kcxWeXIxgav6uuaeSnLg8dY0uYp3yrQS1lze1coUM25F%2FjqhEF102aJrsOtWu4TNYDwGOn%2BU0qlu4Eh7p699M9GM%2B%2B0nCbai6Wbr9UQT%2Br1YemB2NXqKsxD9hEP6nIhOAR2tIkBcsOMEtGLJv1gI6eLTrK1LYVtGEJ79N8r4PfEc72T5PmtB0C4qD&X-Amz-Signature=a5fc02567cbe7ff6d52f7e61e56add3e3eba542ccc317e5cf4703796eb49bb84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKDJAJBK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD9bfFHud%2BYgRnsnT0CFjomBBatIa7sXg3WHAWvzXmP4gIhAJ%2Bgs20xVTHhe9seHiz1KGJS6Oy918apyRYqGJ2n9aRxKv8DCHMQABoMNjM3NDIzMTgzODA1IgwKH6UWGTrTpbmVNscq3ANBLcrXOh9uVLIoou5YlyzrqX9fkbijDqR4WRqR5mxUVqhwtcpQCjt0fL%2B4ii3c9%2FTOIlhQxHmYC4acX1oJcbSiHWYx8imJC%2F5yTZ3WGxQyjigf14ww%2BqX5DTdLVnFYuqJsBnWlbuPt9Ki6%2BtGd%2FhqQGhxf3QEJjGsGIueRH6G5R%2Fv0m73hgH7FytpVdyg7AU9plglOi2JsKADGo6GJFWBaMeAbtMStB8LCZQCWVZrRFMTZGYgq7xQDNyRvJHwpHc%2FyOK5cwguh8soDN1H5an770p%2BUnN63cRMbOcIOtkWxmpXJsxkdIBT%2BmsIMh4tRDFnOQk3oU5O8f%2F49F62vBgo1iMeroLS7oCI%2F11HObmPZhKgtACGUvKeh9%2BUVDavn%2FDCoqvipOtxxkyAlp6dY1Wc%2F%2FuyQYXaW5yaGV9Gr4DwfRnIkuALK3OBXaH8UPCrQSWy8BuyiUTVnlo3qqp1FLT%2Bymu93n6Ofp9D4M4Z7yTkFXinV9r13xSqjMrlNsBVnimJzUQ3P2HkSKKDzSYM5OPdKRNhlY13BHoMkd3yDxWVtZYj71Cs3ip3DFfAMq6361GsmU5mAYiUK6MvTBzqrIvbfnivYX9X7vDsD8lXTOiHhst9PqzyOOqgwtQSYozDXz8zEBjqkAV2ukPUmIlujk7hDxrjxpFleG%2BPvSkPlH58kcxWeXIxgav6uuaeSnLg8dY0uYp3yrQS1lze1coUM25F%2FjqhEF102aJrsOtWu4TNYDwGOn%2BU0qlu4Eh7p699M9GM%2B%2B0nCbai6Wbr9UQT%2Br1YemB2NXqKsxD9hEP6nIhOAR2tIkBcsOMEtGLJv1gI6eLTrK1LYVtGEJ79N8r4PfEc72T5PmtB0C4qD&X-Amz-Signature=f9b9ef3dea92dd180911c993168be6701aea5333880d24eacbf03d2b221bc7f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKDJAJBK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD9bfFHud%2BYgRnsnT0CFjomBBatIa7sXg3WHAWvzXmP4gIhAJ%2Bgs20xVTHhe9seHiz1KGJS6Oy918apyRYqGJ2n9aRxKv8DCHMQABoMNjM3NDIzMTgzODA1IgwKH6UWGTrTpbmVNscq3ANBLcrXOh9uVLIoou5YlyzrqX9fkbijDqR4WRqR5mxUVqhwtcpQCjt0fL%2B4ii3c9%2FTOIlhQxHmYC4acX1oJcbSiHWYx8imJC%2F5yTZ3WGxQyjigf14ww%2BqX5DTdLVnFYuqJsBnWlbuPt9Ki6%2BtGd%2FhqQGhxf3QEJjGsGIueRH6G5R%2Fv0m73hgH7FytpVdyg7AU9plglOi2JsKADGo6GJFWBaMeAbtMStB8LCZQCWVZrRFMTZGYgq7xQDNyRvJHwpHc%2FyOK5cwguh8soDN1H5an770p%2BUnN63cRMbOcIOtkWxmpXJsxkdIBT%2BmsIMh4tRDFnOQk3oU5O8f%2F49F62vBgo1iMeroLS7oCI%2F11HObmPZhKgtACGUvKeh9%2BUVDavn%2FDCoqvipOtxxkyAlp6dY1Wc%2F%2FuyQYXaW5yaGV9Gr4DwfRnIkuALK3OBXaH8UPCrQSWy8BuyiUTVnlo3qqp1FLT%2Bymu93n6Ofp9D4M4Z7yTkFXinV9r13xSqjMrlNsBVnimJzUQ3P2HkSKKDzSYM5OPdKRNhlY13BHoMkd3yDxWVtZYj71Cs3ip3DFfAMq6361GsmU5mAYiUK6MvTBzqrIvbfnivYX9X7vDsD8lXTOiHhst9PqzyOOqgwtQSYozDXz8zEBjqkAV2ukPUmIlujk7hDxrjxpFleG%2BPvSkPlH58kcxWeXIxgav6uuaeSnLg8dY0uYp3yrQS1lze1coUM25F%2FjqhEF102aJrsOtWu4TNYDwGOn%2BU0qlu4Eh7p699M9GM%2B%2B0nCbai6Wbr9UQT%2Br1YemB2NXqKsxD9hEP6nIhOAR2tIkBcsOMEtGLJv1gI6eLTrK1LYVtGEJ79N8r4PfEc72T5PmtB0C4qD&X-Amz-Signature=c3a0d0b32441174a46afa044e2d53d58e650a024ae51015995876e7985b95433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKDJAJBK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD9bfFHud%2BYgRnsnT0CFjomBBatIa7sXg3WHAWvzXmP4gIhAJ%2Bgs20xVTHhe9seHiz1KGJS6Oy918apyRYqGJ2n9aRxKv8DCHMQABoMNjM3NDIzMTgzODA1IgwKH6UWGTrTpbmVNscq3ANBLcrXOh9uVLIoou5YlyzrqX9fkbijDqR4WRqR5mxUVqhwtcpQCjt0fL%2B4ii3c9%2FTOIlhQxHmYC4acX1oJcbSiHWYx8imJC%2F5yTZ3WGxQyjigf14ww%2BqX5DTdLVnFYuqJsBnWlbuPt9Ki6%2BtGd%2FhqQGhxf3QEJjGsGIueRH6G5R%2Fv0m73hgH7FytpVdyg7AU9plglOi2JsKADGo6GJFWBaMeAbtMStB8LCZQCWVZrRFMTZGYgq7xQDNyRvJHwpHc%2FyOK5cwguh8soDN1H5an770p%2BUnN63cRMbOcIOtkWxmpXJsxkdIBT%2BmsIMh4tRDFnOQk3oU5O8f%2F49F62vBgo1iMeroLS7oCI%2F11HObmPZhKgtACGUvKeh9%2BUVDavn%2FDCoqvipOtxxkyAlp6dY1Wc%2F%2FuyQYXaW5yaGV9Gr4DwfRnIkuALK3OBXaH8UPCrQSWy8BuyiUTVnlo3qqp1FLT%2Bymu93n6Ofp9D4M4Z7yTkFXinV9r13xSqjMrlNsBVnimJzUQ3P2HkSKKDzSYM5OPdKRNhlY13BHoMkd3yDxWVtZYj71Cs3ip3DFfAMq6361GsmU5mAYiUK6MvTBzqrIvbfnivYX9X7vDsD8lXTOiHhst9PqzyOOqgwtQSYozDXz8zEBjqkAV2ukPUmIlujk7hDxrjxpFleG%2BPvSkPlH58kcxWeXIxgav6uuaeSnLg8dY0uYp3yrQS1lze1coUM25F%2FjqhEF102aJrsOtWu4TNYDwGOn%2BU0qlu4Eh7p699M9GM%2B%2B0nCbai6Wbr9UQT%2Br1YemB2NXqKsxD9hEP6nIhOAR2tIkBcsOMEtGLJv1gI6eLTrK1LYVtGEJ79N8r4PfEc72T5PmtB0C4qD&X-Amz-Signature=41534bdaea499450abf074611e605db8a693027f4127fc84b0ec48dd2597ac11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKDJAJBK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD9bfFHud%2BYgRnsnT0CFjomBBatIa7sXg3WHAWvzXmP4gIhAJ%2Bgs20xVTHhe9seHiz1KGJS6Oy918apyRYqGJ2n9aRxKv8DCHMQABoMNjM3NDIzMTgzODA1IgwKH6UWGTrTpbmVNscq3ANBLcrXOh9uVLIoou5YlyzrqX9fkbijDqR4WRqR5mxUVqhwtcpQCjt0fL%2B4ii3c9%2FTOIlhQxHmYC4acX1oJcbSiHWYx8imJC%2F5yTZ3WGxQyjigf14ww%2BqX5DTdLVnFYuqJsBnWlbuPt9Ki6%2BtGd%2FhqQGhxf3QEJjGsGIueRH6G5R%2Fv0m73hgH7FytpVdyg7AU9plglOi2JsKADGo6GJFWBaMeAbtMStB8LCZQCWVZrRFMTZGYgq7xQDNyRvJHwpHc%2FyOK5cwguh8soDN1H5an770p%2BUnN63cRMbOcIOtkWxmpXJsxkdIBT%2BmsIMh4tRDFnOQk3oU5O8f%2F49F62vBgo1iMeroLS7oCI%2F11HObmPZhKgtACGUvKeh9%2BUVDavn%2FDCoqvipOtxxkyAlp6dY1Wc%2F%2FuyQYXaW5yaGV9Gr4DwfRnIkuALK3OBXaH8UPCrQSWy8BuyiUTVnlo3qqp1FLT%2Bymu93n6Ofp9D4M4Z7yTkFXinV9r13xSqjMrlNsBVnimJzUQ3P2HkSKKDzSYM5OPdKRNhlY13BHoMkd3yDxWVtZYj71Cs3ip3DFfAMq6361GsmU5mAYiUK6MvTBzqrIvbfnivYX9X7vDsD8lXTOiHhst9PqzyOOqgwtQSYozDXz8zEBjqkAV2ukPUmIlujk7hDxrjxpFleG%2BPvSkPlH58kcxWeXIxgav6uuaeSnLg8dY0uYp3yrQS1lze1coUM25F%2FjqhEF102aJrsOtWu4TNYDwGOn%2BU0qlu4Eh7p699M9GM%2B%2B0nCbai6Wbr9UQT%2Br1YemB2NXqKsxD9hEP6nIhOAR2tIkBcsOMEtGLJv1gI6eLTrK1LYVtGEJ79N8r4PfEc72T5PmtB0C4qD&X-Amz-Signature=c0d1117313b8be6392ac09641174b1c247ec021565a5dfcc64b21f2b795d69c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5FHCN2F%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIANIwDNgFR6rWbrwHwUZHCXy8iRGfCBx809%2FDUNVbG9eAiAXflAtrCHYYV8h3QOgKGpLI8IvgO6UYmDosr4ntAP8tCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM6T4vuMnm9xh33PVPKtwDBwNNF1b3yOC9RwrAIwtMKkkY5e4lggP3NicEKx09gtfLYneI7jKj9nCnbjfNiTxdD45YYomjPgA%2F3aMNMiSVZTcm26C3tOQ0KWjhkFi0qwRRyrvhF88uogSYVbohy%2Ffna2HEUnTzdIvD4ueNWcofvEq5r90xweuL%2F4gEHWmPK0RcmdFjSvjJXI0B40R41M7CmNjRKVSWSBnjnwSR6bHKqIOfI4VAX2P26TvnYKbCjQcjG9iShCyap3U0BkNa6XFJS5TbP5L0h4R3nY3WOvccob1%2BVTYiAuuvh53b4VvbFTMxHIcp7HDK0lRidjk6UHF%2FodkgfRtkMmpf4FyJhJyEtydhmXnTom9Xpaqi9fseQmYQtQsCjpQKrlKf39fUzfqIe5bo88ligtUUUpuSnxEPuspeBNWkfwo28Uc1sIUKHffsmc6IObhR8bfkWhmJppgvuLaJsFl%2FuLY1hR2c4XYUwruJqLsVuz%2FWLgSeL0trhgFrsn1uOUvwL86X63G%2FhD4ztvyBNB0FmuvAJpp4wVxoWs%2BCyutxup90x%2BRGSN7xGlMJWxiWHYnpRJlidJLTaESxzk7blKaLaQc4bId80N%2B4GpRk9YliWX9ej8aY0T3DUnUDYiVxgBwyq2cl2Msw88%2FMxAY6pgEQi8k3UjvKI9ypL3SpKCdZOQ5gmJTLQ06J9HmKLkenFWKGyy3QPLU%2F5uX%2BnlQwtU%2FCYKccTTEt16R96iYkaTKgNDqDF59JqqJEyhZl3YUjzjgraQLZ5ejdfFrmhljG5kiTu8j0ovrULgUDoJn8RNtCdo1GEOYGzE8Vl4eCrgb7neS71wSA%2FuxE8UI0S7I6K4WjteyhZsmEgBHVEYW8%2BGR7%2FKyR6Ujd&X-Amz-Signature=721a9e5b17d59e8fee4a96c2e69a77a56459d00223ea16a82474f16e1a84a9a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDVYKPCQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDwwRpJ9ENytyOcOQvdafB3QKg0vt2PBssFMb2TgFDRKgIgf9DUs%2FQ0HPQeAHnyJpQqomAUfhJdxusYPgu0IDoKnC0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDP2zJjTCnuZ0grnPHyrcA7lBYgAx4GGJE4IxJiLhZsRPluXtoRfsbi6rbH71Cd%2FITPIxE3jdIZmbqcc7CG9p2YGF3R36Xg6kUGW%2BI031VxpJULn8dc3lv7cxQHteHgOIKLXYuwp6cf%2FpmrKdAnU10fPqnxj1XgDvGBb4HzVcfiG71NtSfB%2FywvRRI3mp%2Fr6zU4qOZ%2FByJVEVsd5VjwPMJY0aqIVC2jcRiIysKHEqgZzBG1BJHnx8HicaCtoMMdxERoJL9B536u6mrChA6vVcipRBO%2FW76wR07kPXhkzkh643%2BmljVC3ncAoNuH27xPKWRc15nG2NXQFA8DqQqMq7G6oQalV%2BNsiQRATZqv5q4wJSF%2FO%2BtNV6%2F1gwhjdS7EerIv59%2BlbIHeODUR2EST2CU9Ynezixt1zQxJqRbxIXsckzXSIFDULTW1QC7ikgKljxX6tK4HVpc9v8uqM%2BTGhX7%2FX5fAr%2F8J9cTVG%2Fl6xGVG8PRtOPOV02CvNVL1%2FGFkdjvzxzVzpB6%2F0oGZinePBXS3VH7e7DvtcYGe%2BDsknMPK7nIA2LHUa6EQ%2BVn8hOKI0OsRkY4TutT4tWfSwK4rB%2FAmlXKkIctCOYzX66o9Ru1GCPvSFNDANRMlVOCQt0qzo1t3Us5VUcBmzajsDzMLTQzMQGOqUBDKDzOCsPsoq1hk2ODMNFGtbA0Ntj9LHa0sodqQZfKRivj68ZaC3CQ6y19MSP4JEQuND1x9cEu%2B1Q8xd4puMBy6YO%2ByZdHNVgN3QGYYUdQFrG%2FqovFCsjC%2BqXynNOLy8vaOBtW4C3T80WO6NcjkRO8zpoEHdGmx30YFX%2FwVO7FEit6V%2BT%2FX8QwZQmlnRCt%2BkgFnSLlEJDP9EGyNDm2o6AEIFk9PcN&X-Amz-Signature=7eb70f9c3ad9cbf6fc66e9a876e1c3fd7c98ec39320dc88437adbfd96f406121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDFV4XML%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCHIt08cFdHBt9X%2BlHPfYRw9D3J25HOke3eI%2Fg%2FBjP4SQIhAKYxQkyvxlUJvGaEc%2Bh7rXk2%2BkQrjyxmArKZJEA3XCU9Kv8DCHMQABoMNjM3NDIzMTgzODA1IgylY%2Fg0zMiWaqVorX8q3AO%2BMqc8fjPE679eOkWURl1DvwKeSwitHlE5ywnU8RzSkRN6aRa2czSAhdD1pghgykuDGUoxDVYQMUAKSHaBYdp%2FumTo2pJ5bFYfF12QAE2bvrtpEQFmRoI0WlOrfUq21YwpgdEsQfov6P5Q060v3iMaWiLyouX7%2BQ0pjX4rx1jMsIwUzqQpaRmuTze84Jw%2F%2BXzA%2Bn70P%2Bwc%2BKPgG7JZKVIOz6w4kDlRjHo5Lvw%2BKdWxjOmPm12e3%2BD8pDTK8UDQUDlggxXZC46RB19iMSc2upyrrw4QjyIApc3xUBfA9AigvCxWroWjQvdroChxb5LYWVaJLGiIzhNektnwEFQtNsmT0Pd0rpezgwfDuoxIe7e4HWcHbwv37K8WBERtsRlpHB7FcAL8eIlGvUNB4249%2FlyTKh3avIg1rw1tQeFMaLJnIGSgL9ZgRfK1uEQ70Cx5%2FHRQAy4TY7HTYgbMGddqIyiVO0kzrYCh7Gzobu1KALEkdNZ2iI89aYOz3Bf7Ek7Fp%2BnRmNCIeUfq05eaX%2FyrQ%2FQzHxYeWOvERZcFtJVd4crYNrbWdZB6w6xILP%2BRI2A4ZLZ%2BpB2h8oAvAL09EmIxBhq7u1Y5YoXahmUFuF%2F68VY5UTEtUpHRyOlcRNznLDD9zszEBjqkAczKuEhpa44NuFwF5zZhhL3A4povcE45lfdblAsb36O6weHT%2FMv6bFn2qt1aZEmkZkyDwlf02H%2BAv3eoFMOrrtxGA0tMKuXflg28qeYlwXssW%2FjsivSIIG2SdY7gzzWYTulu8k8diifGJiVzr0xkUwuHCxoM5%2Bwaxf9iUFgaoKiXFDFb947Y%2FhrERycHPMdEsmlURvPs8%2BmtAs1D4MtfKYI8x6DQ&X-Amz-Signature=41608ca3b018e23f125141136fd0dc7b347c8e607d1ffce4be3fa2c553248775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKDJAJBK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD9bfFHud%2BYgRnsnT0CFjomBBatIa7sXg3WHAWvzXmP4gIhAJ%2Bgs20xVTHhe9seHiz1KGJS6Oy918apyRYqGJ2n9aRxKv8DCHMQABoMNjM3NDIzMTgzODA1IgwKH6UWGTrTpbmVNscq3ANBLcrXOh9uVLIoou5YlyzrqX9fkbijDqR4WRqR5mxUVqhwtcpQCjt0fL%2B4ii3c9%2FTOIlhQxHmYC4acX1oJcbSiHWYx8imJC%2F5yTZ3WGxQyjigf14ww%2BqX5DTdLVnFYuqJsBnWlbuPt9Ki6%2BtGd%2FhqQGhxf3QEJjGsGIueRH6G5R%2Fv0m73hgH7FytpVdyg7AU9plglOi2JsKADGo6GJFWBaMeAbtMStB8LCZQCWVZrRFMTZGYgq7xQDNyRvJHwpHc%2FyOK5cwguh8soDN1H5an770p%2BUnN63cRMbOcIOtkWxmpXJsxkdIBT%2BmsIMh4tRDFnOQk3oU5O8f%2F49F62vBgo1iMeroLS7oCI%2F11HObmPZhKgtACGUvKeh9%2BUVDavn%2FDCoqvipOtxxkyAlp6dY1Wc%2F%2FuyQYXaW5yaGV9Gr4DwfRnIkuALK3OBXaH8UPCrQSWy8BuyiUTVnlo3qqp1FLT%2Bymu93n6Ofp9D4M4Z7yTkFXinV9r13xSqjMrlNsBVnimJzUQ3P2HkSKKDzSYM5OPdKRNhlY13BHoMkd3yDxWVtZYj71Cs3ip3DFfAMq6361GsmU5mAYiUK6MvTBzqrIvbfnivYX9X7vDsD8lXTOiHhst9PqzyOOqgwtQSYozDXz8zEBjqkAV2ukPUmIlujk7hDxrjxpFleG%2BPvSkPlH58kcxWeXIxgav6uuaeSnLg8dY0uYp3yrQS1lze1coUM25F%2FjqhEF102aJrsOtWu4TNYDwGOn%2BU0qlu4Eh7p699M9GM%2B%2B0nCbai6Wbr9UQT%2Br1YemB2NXqKsxD9hEP6nIhOAR2tIkBcsOMEtGLJv1gI6eLTrK1LYVtGEJ79N8r4PfEc72T5PmtB0C4qD&X-Amz-Signature=696de345874f76bab1a128dbe893cbba7db0a30f57945171a98dcfde139c0009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAEABZHQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCSqbZ2BaBXh53gjqKLiba40MEtFn6X5sq573KqpbbfsQIhAMiK4ro26CJ%2FkcJggB%2Fe0GwUu%2F0gROISCdN%2BgFSgvgDkKv8DCHMQABoMNjM3NDIzMTgzODA1IgyiP5qnLUGm5YHGez0q3AMx8U5kX3tLhKb1UL6ZtYz0E4iedDjsPITgi1tKpcApOnIqiQUzeapeoi8CQCYUlOO%2FDiO7HySZv6p4RQMlB2ahJiDTZHKSZbOlKzqqYwmZAPxF0iPMLu78rr59WV9DOVctKZfmB2DSrQgdyJOhHYtpRP61umjtWHsMRipK8eDPxaVIrcMkoK1Jp2DXRHONDWeHdOapvAOgKA5FvFa8nDaYQjcx%2F3KdOvLoM%2FBR1pgepgm7k0q56cYbW%2FNlRNk58Axh5%2B%2B7q9jNwBCjLKjQJlz%2Br1q%2FN5hZDLAGotSbOfOeZ%2BwgCPOXrkfpnklxxbXQ%2FT54JFHQRk0GKb4n7QDTT%2BJtoFzrU0i7OEpwbsW3A4UFS64FhNY2QMHV64sRO782z%2BD8EmjkpNs6fGj4SAokqmD7gIEbH7KBS6G%2Bkvn8wkvIoqcPIJsM6V7HryNM%2FwJi8hRPyk%2Fl5kwrl%2F3PAnZHEzOnBpOtENqj3lkO6V260Pb6C8wF0FrwM5LXjDib3Gkn9bddskcIUfnD8USFqVtare3Vk8H23%2F%2FxdEFLo5V66KzcrgKvcyAKN15gSrGiWz%2BbopK9bZn%2F4hO1h%2BYyNNDx5s%2FfnCKQUUtL5qcjOCslOSP%2BkpcDI5uoFK4XffEXfjCrz8zEBjqkAVsxia7h8oc2yHYkdi%2FXNm0vQtyr6YpqtNmH0KpoRZA7YqGQ5%2FE8MbAbib3WsycfU5rB081wPbRvtE%2F32CZkH7mVbdIBnd1SKahZCKEpEqOFj2RmduYN75YBJmfyf5RGsZirpguAl%2B5q2ZDyyu21wb%2BYL1h04IZ%2FsDoVOokas7N2NRPVNMZi3pD3wwTcglkOD68vcviHP58y5WVH1QOSSZuibDof&X-Amz-Signature=4a665b5b97b899759f0680e10ab1d2c4e8bc48a6fac081d0d6b95d31655c8597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKDJAJBK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD9bfFHud%2BYgRnsnT0CFjomBBatIa7sXg3WHAWvzXmP4gIhAJ%2Bgs20xVTHhe9seHiz1KGJS6Oy918apyRYqGJ2n9aRxKv8DCHMQABoMNjM3NDIzMTgzODA1IgwKH6UWGTrTpbmVNscq3ANBLcrXOh9uVLIoou5YlyzrqX9fkbijDqR4WRqR5mxUVqhwtcpQCjt0fL%2B4ii3c9%2FTOIlhQxHmYC4acX1oJcbSiHWYx8imJC%2F5yTZ3WGxQyjigf14ww%2BqX5DTdLVnFYuqJsBnWlbuPt9Ki6%2BtGd%2FhqQGhxf3QEJjGsGIueRH6G5R%2Fv0m73hgH7FytpVdyg7AU9plglOi2JsKADGo6GJFWBaMeAbtMStB8LCZQCWVZrRFMTZGYgq7xQDNyRvJHwpHc%2FyOK5cwguh8soDN1H5an770p%2BUnN63cRMbOcIOtkWxmpXJsxkdIBT%2BmsIMh4tRDFnOQk3oU5O8f%2F49F62vBgo1iMeroLS7oCI%2F11HObmPZhKgtACGUvKeh9%2BUVDavn%2FDCoqvipOtxxkyAlp6dY1Wc%2F%2FuyQYXaW5yaGV9Gr4DwfRnIkuALK3OBXaH8UPCrQSWy8BuyiUTVnlo3qqp1FLT%2Bymu93n6Ofp9D4M4Z7yTkFXinV9r13xSqjMrlNsBVnimJzUQ3P2HkSKKDzSYM5OPdKRNhlY13BHoMkd3yDxWVtZYj71Cs3ip3DFfAMq6361GsmU5mAYiUK6MvTBzqrIvbfnivYX9X7vDsD8lXTOiHhst9PqzyOOqgwtQSYozDXz8zEBjqkAV2ukPUmIlujk7hDxrjxpFleG%2BPvSkPlH58kcxWeXIxgav6uuaeSnLg8dY0uYp3yrQS1lze1coUM25F%2FjqhEF102aJrsOtWu4TNYDwGOn%2BU0qlu4Eh7p699M9GM%2B%2B0nCbai6Wbr9UQT%2Br1YemB2NXqKsxD9hEP6nIhOAR2tIkBcsOMEtGLJv1gI6eLTrK1LYVtGEJ79N8r4PfEc72T5PmtB0C4qD&X-Amz-Signature=a4c3fb7dd06f461c6e438086aedf398024ab02a6b45115c9e34c3761dde2b1cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NTLAOV4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCJjCx%2FQtC%2BPjLRwLs%2Fh9EE6WmTrRd3Ik8XQmGkautX8gIhAN8DffAZ85EpinwS71BjZ9pcrMurwEw5W0WJMSYadskgKv8DCHMQABoMNjM3NDIzMTgzODA1IgwtvP0q8L%2BGwsokmMEq3AOuYFzyXaM5PhoYtgTLn60tKQDaQgN6ZhTzvP7s5nHw%2FLk%2F8f0kEOpEz%2Fw4Tt14WfVkjztXJFEB5QQlsA1FFK3bJTpL%2Bz0A%2FOr5yGZO06Uta6nGCRylT5dc7GAARrWpO40f2BgC%2FDV2RuLS%2BB6pFuQWf3UFdezP%2FBclvQQ96PXgphOQXHq0FCCMxnu63kAkT06CSaraqBPStmqTpJFVY7d0RFkpQA3eQc9xVJciEFKA0nVHr6Vn31FydH7PQA8GucdaKNR0FTaPm7G77ErL7lKfShflP%2Brn8oeVkH92IpjlW0j4yFdVs9PUfRTxZneZ7ghORJFO8xYOjLkh1oS5i2o1hac10xurM0ERYCbnksFkR5X4lLs%2F7Zn7SKBlqNGvL9ac6YILP82xT0454hpBDMTC5kK1lCNPeO2%2Ffjzc4HN0kLld%2FgcV99mSbdLp5qgFY8Uc9r2RKzpNjbwHItD04EooOg52UWwef8PFgSo4PtiPruDWafj%2FrC2ZLPnpGoRjUlkDvaCm5i6zAEsb9OH1IsFscrYIgJftKMc3AtY%2FbSMHuyFI2gxy64cjJWeKs7YX5q6SHm6VniWke9yWHFvzBOXN4AQ64c9yIVewyqlSWvoLpcC2WInZo%2FEdhZR5SjCiz8zEBjqkATppXe7qrAUcn6aMHwlYR1VQveox0kRVKCh%2FBXBDpMZDgIcEUQoPl9XLS1E%2FdlSqFSY4qtIQ%2FlFEMdSdCYAGgQ%2BEBkgkQppozUkJ5YMcH06HlY1uZ62GATVcYpegRtsqjijDq4D9OChYmOBMXHAr5mzeiFva0W%2FREXulTS0J0I48F2wWMAP2vxaiGEkhz9QbH47KWPbppd7Jlp9F3gsDMXU4kSoH&X-Amz-Signature=c4a7d19bd377f3758aad6359e8da1938df01e2ac6c8a7738cf3cb8034866e89d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKDJAJBK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD9bfFHud%2BYgRnsnT0CFjomBBatIa7sXg3WHAWvzXmP4gIhAJ%2Bgs20xVTHhe9seHiz1KGJS6Oy918apyRYqGJ2n9aRxKv8DCHMQABoMNjM3NDIzMTgzODA1IgwKH6UWGTrTpbmVNscq3ANBLcrXOh9uVLIoou5YlyzrqX9fkbijDqR4WRqR5mxUVqhwtcpQCjt0fL%2B4ii3c9%2FTOIlhQxHmYC4acX1oJcbSiHWYx8imJC%2F5yTZ3WGxQyjigf14ww%2BqX5DTdLVnFYuqJsBnWlbuPt9Ki6%2BtGd%2FhqQGhxf3QEJjGsGIueRH6G5R%2Fv0m73hgH7FytpVdyg7AU9plglOi2JsKADGo6GJFWBaMeAbtMStB8LCZQCWVZrRFMTZGYgq7xQDNyRvJHwpHc%2FyOK5cwguh8soDN1H5an770p%2BUnN63cRMbOcIOtkWxmpXJsxkdIBT%2BmsIMh4tRDFnOQk3oU5O8f%2F49F62vBgo1iMeroLS7oCI%2F11HObmPZhKgtACGUvKeh9%2BUVDavn%2FDCoqvipOtxxkyAlp6dY1Wc%2F%2FuyQYXaW5yaGV9Gr4DwfRnIkuALK3OBXaH8UPCrQSWy8BuyiUTVnlo3qqp1FLT%2Bymu93n6Ofp9D4M4Z7yTkFXinV9r13xSqjMrlNsBVnimJzUQ3P2HkSKKDzSYM5OPdKRNhlY13BHoMkd3yDxWVtZYj71Cs3ip3DFfAMq6361GsmU5mAYiUK6MvTBzqrIvbfnivYX9X7vDsD8lXTOiHhst9PqzyOOqgwtQSYozDXz8zEBjqkAV2ukPUmIlujk7hDxrjxpFleG%2BPvSkPlH58kcxWeXIxgav6uuaeSnLg8dY0uYp3yrQS1lze1coUM25F%2FjqhEF102aJrsOtWu4TNYDwGOn%2BU0qlu4Eh7p699M9GM%2B%2B0nCbai6Wbr9UQT%2Br1YemB2NXqKsxD9hEP6nIhOAR2tIkBcsOMEtGLJv1gI6eLTrK1LYVtGEJ79N8r4PfEc72T5PmtB0C4qD&X-Amz-Signature=46d3a88c89ea01c75232917fb2312b9d29e01c63bbc6ac37819cd8b95ad004b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SB5TKBT%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD5uQdyYifmlA%2F34BLDJF6qm9FUmwGoHUuwAxCyeTsF5wIhAMqmyIsxH%2B4MA7ESX38HQMmIbnhVAmx7cqkEBpH7dWGYKv8DCHMQABoMNjM3NDIzMTgzODA1IgyZnpCcuHycxkz7Uz8q3ANNW544vgP%2F%2BYDy5YjM1sq3tGOvp%2Fj%2BUdaSd5JO9bWf3dvQhsN9lNd5pGD3P%2FDrj8JjJ%2BFgkXHWLPneQsiixE4XTJQv23DGZmnA39kpIIiOOjwy5Xd8RP%2BCusVVuWU%2BOXvuF4R8AMVjjPIVjE%2FNbIcSodNjqMzgAm4UYfaBfZPg3iMvM7D%2BKPjcRoWRrU9r8es8AFUbOjPC8jZ19W%2BFgfqCQw6d7KX0IgVqaNbLdJxDeqkQtniu6N9VF9PP48zqH%2BRSO3qoupiXfTzLzpUbeizZ%2BZZuHTsuMmQbWL4xUU%2FHj1sRLA7wKeGqjBe0%2BVBBybKC6GXH%2B0Q%2FIJ7G8dPMMCjP%2F8HuELrrMFYNwqGCY%2FlgPcVjrvRrpUTTNKcaYipri8n%2BTSOzAR53ozE3wygtD8yt9u1q1eAvw0h3NsoQ6AQuwkd%2F5CSzfojlTMLf9x73WbPAQ7IBP3lw1cTDQkMscTqufS%2B6l36VlG1RN2IRC73kMzrxdDBXvZFrPXdVLRCw7kUcgB%2F9PtqOmUcqmDFyD8bUo6pvAchEW91AMTeAevxnzRVMu%2B%2FNtSN%2F4CyJt5xjcXSk6JmDWSMmvYNiISdWCToic8%2B8YUbc8EcWXX3bkY0ebE2IFBysdtJlCOntzDCn0MzEBjqkAZfTCQFSQ8xNYZRexL2nrCOo8NocxP3Y9XwtCqbUc5QaEvvriiFirZ63c7nVMnX%2B47Zbxe0cINgPUGZiJ5S42dHPJ9siXuz0BuioSW5a56X0A1%2FqcxLcanWC5ki78Tflc9uBFbngTdcj3TjgzlgZNgbo%2FQxqlO6ocCmHR%2Fd8RjvmYGKKQujbk%2BGS4Rm2rEEjxvGXEYTspSchIRMTEGR%2B3bMcB5Hg&X-Amz-Signature=57ea1e2d2aec0090a7381d9c077d95432580617a8c4ed1358195ce55af1aca99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKDJAJBK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD9bfFHud%2BYgRnsnT0CFjomBBatIa7sXg3WHAWvzXmP4gIhAJ%2Bgs20xVTHhe9seHiz1KGJS6Oy918apyRYqGJ2n9aRxKv8DCHMQABoMNjM3NDIzMTgzODA1IgwKH6UWGTrTpbmVNscq3ANBLcrXOh9uVLIoou5YlyzrqX9fkbijDqR4WRqR5mxUVqhwtcpQCjt0fL%2B4ii3c9%2FTOIlhQxHmYC4acX1oJcbSiHWYx8imJC%2F5yTZ3WGxQyjigf14ww%2BqX5DTdLVnFYuqJsBnWlbuPt9Ki6%2BtGd%2FhqQGhxf3QEJjGsGIueRH6G5R%2Fv0m73hgH7FytpVdyg7AU9plglOi2JsKADGo6GJFWBaMeAbtMStB8LCZQCWVZrRFMTZGYgq7xQDNyRvJHwpHc%2FyOK5cwguh8soDN1H5an770p%2BUnN63cRMbOcIOtkWxmpXJsxkdIBT%2BmsIMh4tRDFnOQk3oU5O8f%2F49F62vBgo1iMeroLS7oCI%2F11HObmPZhKgtACGUvKeh9%2BUVDavn%2FDCoqvipOtxxkyAlp6dY1Wc%2F%2FuyQYXaW5yaGV9Gr4DwfRnIkuALK3OBXaH8UPCrQSWy8BuyiUTVnlo3qqp1FLT%2Bymu93n6Ofp9D4M4Z7yTkFXinV9r13xSqjMrlNsBVnimJzUQ3P2HkSKKDzSYM5OPdKRNhlY13BHoMkd3yDxWVtZYj71Cs3ip3DFfAMq6361GsmU5mAYiUK6MvTBzqrIvbfnivYX9X7vDsD8lXTOiHhst9PqzyOOqgwtQSYozDXz8zEBjqkAV2ukPUmIlujk7hDxrjxpFleG%2BPvSkPlH58kcxWeXIxgav6uuaeSnLg8dY0uYp3yrQS1lze1coUM25F%2FjqhEF102aJrsOtWu4TNYDwGOn%2BU0qlu4Eh7p699M9GM%2B%2B0nCbai6Wbr9UQT%2Br1YemB2NXqKsxD9hEP6nIhOAR2tIkBcsOMEtGLJv1gI6eLTrK1LYVtGEJ79N8r4PfEc72T5PmtB0C4qD&X-Amz-Signature=d2e85eff7878732bdb4ded5c42772c66249805c972ddc1f30cafb72a5b35ceeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAINDDAC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIC0POxhDUn0vW%2FnvcHEUHXam6y7sQKtEpnLMq7x9YDylAiAnz8oKIIZbFp3kUpioQF797YbZKZz4PJiCkrX%2F%2BwKBTSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM7Ib%2BL0wOyW45wAlCKtwD53BDAzVkauDbR9fOkcsNOy%2FrT%2F%2BNehgNS3pWsmZONh51hHChq0fftagze4VaLKv5sMLeDdfyR8K5x1fcuRuCRiUy7JIP8Jsntj6PmX4rVZ%2FsJf0q6rcEdC7LL5x%2B9E6SoDOSkYal%2Bd%2BaEpYTz%2FZs3jgho2Sj0oIEox%2F6%2BbSDYgLk6Awex79jwaVIAV7YYr4tNu9Fxky6k5Vk66D%2Bu1RFNE%2BkTo25gffySFVoJachj3xDLF%2FRaYJF1l0S8TFjG22dxO1RTt5DnlC31YrZWo1F1bD1hUH5HSHpmzGb2v08uF7QUlU3l8ZPFoltddZAHjtGMmq2OHcz0X6cT4v2gMEc9dOXBOhH6drjbl6PFXm2E72Z%2BDRqQI1AUHT3mNqRdLq%2BFSgzekuC0CramyRl62yoIEC5rb0GWPXG8rKcV98jDhf%2Ft6SKJhPSOlyGauAJrOowI7EAV3xo7PYVbT6T%2FMjUH9ph7zcNfHAdJ3Pz1YGo%2Fe3MoMsoYZT2e9%2F9yyQZfWMOuSapAoCcFFF4OjoWMHZqxpiiKHDk8z4YSXIr%2B8TZr%2FSfh4WJbFrUPqlPlWZBDav0foWve%2FdNdj6L54LveNBLdlvxoeCSnWTI8ddW%2FrzQE3UX5ZWRzxA70Y0s1XMwgs%2FMxAY6pgG9OYe5BncIKFJRlfa6roaVRVoBkpC94POn%2F5fk6P7X2g2kaLqp7%2BJzGWZZ7iIFWVooIsc4vK4al1PpRoe1zW5YGoP1mPgsq%2BEFbaLUs5JQThciW00qGWRAEF0LK30CclT8fwdqnfOJxm1Ox0%2F%2FKP%2FgfAOB9R%2FNBOl8b7KryOplP%2By%2FzGSG8xFpFzYNEB20DAgV59vXurgpxqs5BDdgit9lzLuZ%2FAbz&X-Amz-Signature=96af085edfc8e072d20c9d22448191526b8333891acc48c2098d90b2559ac5f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUAL3432%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIFKHxA5nihgHFLCttk2u1bxn0m%2BXElgHM4%2Fp0kbYh%2BdsAiEAj5XKqZWmD0CFv1aMQoqS4BVqPloDHGEmyan21LlU3V0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDMUiZL347rvH0uVDHyrcA%2BhInG7BeRHBI80hwThz7hnr56fynNVPVEpJXsOtr%2FkbMNPocw%2BWllo%2BS0Vv9JILiGnxcZW7cOR%2BhrhJEdQxtL7CTSNmWxdd3P7lSmjMtDw6JPt5%2F%2Bies0sbMHvCrPPeP1L3aCvs3H5Avgjrbv7EArhzRcC8RZgxkki9pR6%2BZ1hmzyapoi%2Bwwdepx5fhMunjkGZAwCGatZ8JGCZrGjCTtH6ASuO4BWA%2FpyZFjq7BeOBW8a%2FEpKasNfY3ANfQCkob%2B5zh%2BFOiECzwetb7TPAgNVwtQcJwmsIUllWTgrSyu%2Fuh3g%2Bmj17r0zKotmcFf3497E0smFRqqbHOMX6TDaNVhARO4D0FJYUehuOiwU6jAeK2K%2FZJ2UqgOfUgLI1GybLq8Gz3KCjNWg0RLzmukLf3YN1NjXJMHtrNEJ81dUeDtuJhdyy4JUP6G7lxyCL4xwrU3I9Lmrzcakiic8ObKHXvr68ZCT%2BWhhKS5m9A%2Bphuhjoaqx9nFfvFn702%2Bs3QIEAYHffrK1cJ%2BCK4EUc8q6wPRwtPCxOuC4tpAzH8OPl%2FRWkUQcddhxBxdM0dZEAnmgIUdSegj4mveZN5jCuxhe3pp%2FsTwBfqusuCNIQWI6mSxeU0JkaUiT5eIOaTs5DeMPXOzMQGOqUB39Cv9jOqU9vH2zzYo6FOBnk62VTG5WcVe7K%2FoBtGXy%2F7EVakgl6SaV4jRErQTVwFgijeeRyWJTFzjfps8akjnYskEHZI79fjCg6fBl5iASYg9Tzat4q8wZjdbYvcWCHC%2FQOFA%2BQExuxOPsLV6O0ZMC9nQ6NT1AzdTgJ2Py2XgAwBPYgp6%2Fdhtir3uGh6N%2FaIXB5yCoTN2e%2FLqHItjF%2FU7IcPvtsZ&X-Amz-Signature=733bcb00c2e1fd90169cec5a25778d7610865547fa913edc03c1a2ca587de411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675IAT2KP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGjudabITRgeJzDNGV2v3dGTyjbYNSoRlL76tnRWKToPAiEAyZgEMwZbBtHkhCbJb11hVxBV2Dx%2FME8JwqXdDQnU9Fwq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDFvtJyE9XQC3cVBOQCrcA06VWhpyBK2eue0%2F92TtbB1icnbjAbMVjd8Xcjq4wM04X4sau4ovMb%2Bq5SHHVfeQ2Wv2udMa0n1lLH3jBXSlO%2Bjon5%2F5fG3I5sFmqG%2F36q8xKg8brgyYh5osrhADeKQoEHXBGWeXMXVEnwEGDzHiCv7LbtsLQYJR5uZ%2FTOpkzQXsQ0683NGjmJDw8lKq6r8ghQhjt8Gu1hGlTq93g%2FOhFd61OjITs3jAgeyJyj2if%2FX9MH40dDAu%2BwlxoB968NxkcSCXsx6yzww%2FjHXXWOV5e2bkMLlhPhS94yqI96k60ba1eFfuJY5ZEWUYRyHdZSFQt9yAXvN6KQz0k3a50wl7mfEsbLdB%2B0%2BaWTwjitEdi2hM3%2BGi9qWEZ5i%2F0fWTUsTKxl%2BTllrFbWSJI2C4wSo66Jen4hrvdtQQchUscb0W%2FoOgpbMVVnZHxandsOhpbmrCvTwBDSN%2FSIYmvTKCSyB7d3EvRPhdBo4aszCaJl6qu7sUYWy40BszNniLd809i%2BFNd6D2P6X8TkLBZxpag3fLMc%2BlAQe9K8OyS%2BgFYvKyqIoUT8OvtYxy1Bg0%2BEnhtCPMOhTeqZFDJE%2BGYe%2BxdRT%2FHblYNaeGmXrSmXayJr0igoNxET9%2FwDV9zG%2BgPuNFMI%2FPzMQGOqUBgbpos3ALR0Iqc4O6wOFoE6RITwCs%2BwmaJBjvlt5vYi34zfrpuSqN1EAa0A9sT%2BHN26XVr7MMFbcODICyig4SDo1kg4q5CVLsx3dWfN5krrReWGI2i9cMJa6MYLtJOuxGN83H54pdUKBFMfBr%2BqtFKlsHfnJJQfH6KMn1f%2FzJTlqbFsQr0O8QwUhHR0xDl5JHOFJiYKMEGhViSDpdN7muAotxNxKV&X-Amz-Signature=9494e66c271a9d1bafd9f4c65bf5648cdf48edc6618dfe69b522b346cea42dc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ26OHON%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDaBTESUqEzuSj5zCmE0gB8GNNu0bqZFT8aPf22dLA3%2BQIgY3kmhCy2XXuko8HuECRVQ5hAKmy2RsC%2FaM9MIAk5uTAq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCDavN%2BttrXX2hQc4SrcA0vwQe5KKaBUVzZJT8xrJFDnZY8sMqYkOu%2BptoqgxyIv12g3bo3dO68wi3MyXTGCGhrt65GpkY6N1ZtNDR25HK3BnjK%2B6XL6TrfdQ25H5fSjqjb3UhOgPdIb0CBBuhPf%2F4sx5c5U8SEKVK7xKimRLdn5h1r54p6d8IMJSUB9wAt9RfvmWCJTzGRq0p1C%2FItjIpCCrFILNX0pxXyzyLJ9VUJwESjy8dYL1cOQWeU7kgzjoBWJCpmAteHWpA4oNRV3I3R29ePA58pXuvHKOvvKyjbEuKBhwVE15LeEc7VJbE8K4pQ3UaT6HrZAgT0LnpooUtGTR9lZyHI6Ztn7A9VZwCPmTPbu0HKyUuf%2B%2Bobo%2BGmARKljht0ppSy%2FhempISvH4OBnEJOISGAKfj8YdLB%2BOEhccEQeQTlRtuoEYns%2BG1QGpsjJ5Y7xmLs2Ojd1fog9fKOGIq2e8uZg0CtnZI8sJfaDoRqrfjc1m2JA3sb%2FlHf48VSd29w37TLZMqVGyf%2Bh4t68PzgscTf%2B%2BqeWUPt1pMTEtKyN%2FRhlsunU4xC45s7Xi3m3sczOYHEVFxLHQSkwQLku%2F0YNrmpohHXTmNF55jp0s5jO3WZhfCTzeh6NGVzkLoCs2cRxWcjZuuqfMN%2FPzMQGOqUB6mKAGQI769td9%2FNjW7XWSHriUnW1%2B1fff0EVgAw%2BjhcScOWY4MBWB5Ih%2Fa2HXCxl1SH9hG9m9BD%2B65IBjj%2F7kiKNWQqInpBxfRVr3CCcFFRiEqRhgQCYTrBHbVt4COiBQSP%2Fhl3YBrG7OcRgXjlifJdu1Q7fq%2F1N8yHiYH2ZMfDk30YCv2JU9%2FD06uPRpKnvsg76eOJQJfUnGcqn1RHpL5eyZvhk&X-Amz-Signature=c08549f2eefc4736a0d5ca694ec9c1a00e6f9d56e5d80bfc9bd88f6ddede9b4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMMBIJDF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCU1dtCLVS6vIlWFma5vud8BIio6GArh7y%2BKyxeB7tXlgIgVqWSf35BzOvuASjykGHn5HK0yMzbpntq5Wmne5QjLDIq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDHIZ4VbFQX9HdSyeoCrcA3t4NaHScwlROZde7oVQTb7wEGnxHQqvcO03hE3mggvjZFi194nC4IrDmvm67R%2FWDdLnauxrSdd98yN4PasTCeGZ79bN57PEXIk%2BJdhGlSikMMOK4%2Bwn2Vh3iLxWRM5dUKIvd%2BOU1G7IyJt3icOMZDDzkH0Wfgb2CGrW0b1V%2FpZIEDcy5rZQYILa12JQqCj%2BSegKyS5pKoCeoCk5AaiczSWw39KZedu9OLxtkIjE%2BocC6r57eequSQoHF2zpy0q3yy2kKc%2FMxxD%2BYCqW2V%2FlknRNTxgxs%2BvMUX2ScAlFfa9ULyAxNBC5%2FYDA00SOb%2FXY0gZ4plRX%2FrRPLhd%2Blo0YjOWyTupBb8lxGgEk3kNUKsdn9kdwhMZfQCjidaulhYiaM6w4aoUsQ01PeZk9ufFYUANKKKz955LWXnGanU1omYlLnk6I1GlCYhPbjp60sUh0kQ89Na3e9eA6LAuH%2BSbrukt%2FQpJVNQngoUXN5PQe7D%2BG5RQEu5nhp1xCJgN4%2FdQgqoz%2FhpACoAiuvhCs09RMNLqhHLCQK%2BcFWfS49sgmVlbHMck4wlFwy7aos%2BZmGiuGvFc%2FsSXIb2kH5xfiUg2eQWlR4QwT2f7Q9hFuZp4Kgj7JAi5ILLIDGq09YX6nMPnOzMQGOqUBqRbTqHHM0%2BgEbOGgZSi8MJb3RUimvAVrHr8KYW261tUOSJVyWhGFfiT%2FMAsjQMYT13H6tOYumngFz33CIaep6%2BoI7vnZvQP7PqruuvlB9Ks3zxLO0FYrOjdxHxCusQmmRVk%2FYog%2FZ%2Fy7W8koqOWCBVi80EEfqHC2e9CC%2BhC%2B0gloUSqEAuZ2cl8inwUdRydAk2VHOSf%2B8Qbaj2meSJfWbbtv8ouT&X-Amz-Signature=877055738ee00ce3380371d75d83467d9b4b06f1969aec9e4838eba321f19ffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKDJAJBK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD9bfFHud%2BYgRnsnT0CFjomBBatIa7sXg3WHAWvzXmP4gIhAJ%2Bgs20xVTHhe9seHiz1KGJS6Oy918apyRYqGJ2n9aRxKv8DCHMQABoMNjM3NDIzMTgzODA1IgwKH6UWGTrTpbmVNscq3ANBLcrXOh9uVLIoou5YlyzrqX9fkbijDqR4WRqR5mxUVqhwtcpQCjt0fL%2B4ii3c9%2FTOIlhQxHmYC4acX1oJcbSiHWYx8imJC%2F5yTZ3WGxQyjigf14ww%2BqX5DTdLVnFYuqJsBnWlbuPt9Ki6%2BtGd%2FhqQGhxf3QEJjGsGIueRH6G5R%2Fv0m73hgH7FytpVdyg7AU9plglOi2JsKADGo6GJFWBaMeAbtMStB8LCZQCWVZrRFMTZGYgq7xQDNyRvJHwpHc%2FyOK5cwguh8soDN1H5an770p%2BUnN63cRMbOcIOtkWxmpXJsxkdIBT%2BmsIMh4tRDFnOQk3oU5O8f%2F49F62vBgo1iMeroLS7oCI%2F11HObmPZhKgtACGUvKeh9%2BUVDavn%2FDCoqvipOtxxkyAlp6dY1Wc%2F%2FuyQYXaW5yaGV9Gr4DwfRnIkuALK3OBXaH8UPCrQSWy8BuyiUTVnlo3qqp1FLT%2Bymu93n6Ofp9D4M4Z7yTkFXinV9r13xSqjMrlNsBVnimJzUQ3P2HkSKKDzSYM5OPdKRNhlY13BHoMkd3yDxWVtZYj71Cs3ip3DFfAMq6361GsmU5mAYiUK6MvTBzqrIvbfnivYX9X7vDsD8lXTOiHhst9PqzyOOqgwtQSYozDXz8zEBjqkAV2ukPUmIlujk7hDxrjxpFleG%2BPvSkPlH58kcxWeXIxgav6uuaeSnLg8dY0uYp3yrQS1lze1coUM25F%2FjqhEF102aJrsOtWu4TNYDwGOn%2BU0qlu4Eh7p699M9GM%2B%2B0nCbai6Wbr9UQT%2Br1YemB2NXqKsxD9hEP6nIhOAR2tIkBcsOMEtGLJv1gI6eLTrK1LYVtGEJ79N8r4PfEc72T5PmtB0C4qD&X-Amz-Signature=b2f5f58f07ec5ad6cfa0c27f6392d5514491d35ddcdcb7b8bf3cf6ac27aaf49c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKDJAJBK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD9bfFHud%2BYgRnsnT0CFjomBBatIa7sXg3WHAWvzXmP4gIhAJ%2Bgs20xVTHhe9seHiz1KGJS6Oy918apyRYqGJ2n9aRxKv8DCHMQABoMNjM3NDIzMTgzODA1IgwKH6UWGTrTpbmVNscq3ANBLcrXOh9uVLIoou5YlyzrqX9fkbijDqR4WRqR5mxUVqhwtcpQCjt0fL%2B4ii3c9%2FTOIlhQxHmYC4acX1oJcbSiHWYx8imJC%2F5yTZ3WGxQyjigf14ww%2BqX5DTdLVnFYuqJsBnWlbuPt9Ki6%2BtGd%2FhqQGhxf3QEJjGsGIueRH6G5R%2Fv0m73hgH7FytpVdyg7AU9plglOi2JsKADGo6GJFWBaMeAbtMStB8LCZQCWVZrRFMTZGYgq7xQDNyRvJHwpHc%2FyOK5cwguh8soDN1H5an770p%2BUnN63cRMbOcIOtkWxmpXJsxkdIBT%2BmsIMh4tRDFnOQk3oU5O8f%2F49F62vBgo1iMeroLS7oCI%2F11HObmPZhKgtACGUvKeh9%2BUVDavn%2FDCoqvipOtxxkyAlp6dY1Wc%2F%2FuyQYXaW5yaGV9Gr4DwfRnIkuALK3OBXaH8UPCrQSWy8BuyiUTVnlo3qqp1FLT%2Bymu93n6Ofp9D4M4Z7yTkFXinV9r13xSqjMrlNsBVnimJzUQ3P2HkSKKDzSYM5OPdKRNhlY13BHoMkd3yDxWVtZYj71Cs3ip3DFfAMq6361GsmU5mAYiUK6MvTBzqrIvbfnivYX9X7vDsD8lXTOiHhst9PqzyOOqgwtQSYozDXz8zEBjqkAV2ukPUmIlujk7hDxrjxpFleG%2BPvSkPlH58kcxWeXIxgav6uuaeSnLg8dY0uYp3yrQS1lze1coUM25F%2FjqhEF102aJrsOtWu4TNYDwGOn%2BU0qlu4Eh7p699M9GM%2B%2B0nCbai6Wbr9UQT%2Br1YemB2NXqKsxD9hEP6nIhOAR2tIkBcsOMEtGLJv1gI6eLTrK1LYVtGEJ79N8r4PfEc72T5PmtB0C4qD&X-Amz-Signature=55b141e1b6be8499253c409cf21038d73d82f8b7cd1ca990418e474e27e05c96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMUF6L2U%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDFqPbNv6i4JoCiUKHtLx17Vp7jxBFpBNPBtzwZoBdZrQIgEIeQZCGgJaVlf4YWnPCTGH%2BGW8BDkKQKgzR7bawAFaEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIWlPDqcXyh4g%2BTTkCrcA7K5O7zSO6DNNFEtImKp%2BxHPmIjypqghWicklpOkk5%2FU%2BpfAFfTu8wvEppSZsrWdujPvgb8PTghckZIN3J0jcPiehg7SurpYVWQj4lpCXO%2BX%2BpSBB%2F8fqOg%2BfmrL4W4XbOv47FazatE0LNl%2FTN9LJgoXPp%2Bmm%2F21i59hT0UJNZ3ghEIgkQ7KsCcERL0E9J%2FuGVONgqe7Y2ZE%2BV5xFq%2BlkHIMKqq0cXj7jg6ubjWR1jtUYorAqCi%2BnsbY0kacTx6JXLoBQYtkyvfQCRUDJmrGdJaD4jGyRZcSnL1HuD8xbyvkIW%2BCHO4CgbFyP0iSZIMJ3RfQrzUveVyJZe0PPZhIj65nBOsuoG5rDzob1nddkHxHf8wgLmfqH%2B9r0r4vEaZrWcKA4oZUi9qvhfSXFVAFI1EfMvehb42CjX13sjDChG%2B8zREAm%2BF%2F%2BpEwJtypvsQrigJdsTg4rT38EKEu3S2qRmLpO%2BonHVnKof9tf3OwAtedvWqr1rCVThHIV2a2bDAKvexRxWlEiYBRPas%2FpnPRHnaFHEviK%2FoUi3QbghG4gWnJd5ixCgKw%2FlNrU0AqYvaSEKyhV4iIlAaxn3VKssKCoq3VmY6jzjWyWRInAe7xfYDmmJy31LhjK7VM6L%2BPMLXQzMQGOqUBnjUHF5I8NrNPOa971Vv8Dqcx91m%2B55TBxbsB4nKyTtiG1C1qEru%2Fg5OWCsv8DtDbnxo4WSFU%2BxTbYfY1lZeHhm4tN9Gs%2FRcvhUanom5Njd%2BysG%2FUPd9EtBh4miOWBWYHkz1JsS4qGMDda0oyrFuRfcTRUhXreKmEEpVGK1j7E88np1vBnTrr0GO7eUIRNJsnrPef%2B70LLkVnemKLa9VRlgulibPv&X-Amz-Signature=e857fed4696538cf2445593c29c69e3e73d060e66c04ebe0f6c5cd875d567639&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMUF6L2U%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDFqPbNv6i4JoCiUKHtLx17Vp7jxBFpBNPBtzwZoBdZrQIgEIeQZCGgJaVlf4YWnPCTGH%2BGW8BDkKQKgzR7bawAFaEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIWlPDqcXyh4g%2BTTkCrcA7K5O7zSO6DNNFEtImKp%2BxHPmIjypqghWicklpOkk5%2FU%2BpfAFfTu8wvEppSZsrWdujPvgb8PTghckZIN3J0jcPiehg7SurpYVWQj4lpCXO%2BX%2BpSBB%2F8fqOg%2BfmrL4W4XbOv47FazatE0LNl%2FTN9LJgoXPp%2Bmm%2F21i59hT0UJNZ3ghEIgkQ7KsCcERL0E9J%2FuGVONgqe7Y2ZE%2BV5xFq%2BlkHIMKqq0cXj7jg6ubjWR1jtUYorAqCi%2BnsbY0kacTx6JXLoBQYtkyvfQCRUDJmrGdJaD4jGyRZcSnL1HuD8xbyvkIW%2BCHO4CgbFyP0iSZIMJ3RfQrzUveVyJZe0PPZhIj65nBOsuoG5rDzob1nddkHxHf8wgLmfqH%2B9r0r4vEaZrWcKA4oZUi9qvhfSXFVAFI1EfMvehb42CjX13sjDChG%2B8zREAm%2BF%2F%2BpEwJtypvsQrigJdsTg4rT38EKEu3S2qRmLpO%2BonHVnKof9tf3OwAtedvWqr1rCVThHIV2a2bDAKvexRxWlEiYBRPas%2FpnPRHnaFHEviK%2FoUi3QbghG4gWnJd5ixCgKw%2FlNrU0AqYvaSEKyhV4iIlAaxn3VKssKCoq3VmY6jzjWyWRInAe7xfYDmmJy31LhjK7VM6L%2BPMLXQzMQGOqUBnjUHF5I8NrNPOa971Vv8Dqcx91m%2B55TBxbsB4nKyTtiG1C1qEru%2Fg5OWCsv8DtDbnxo4WSFU%2BxTbYfY1lZeHhm4tN9Gs%2FRcvhUanom5Njd%2BysG%2FUPd9EtBh4miOWBWYHkz1JsS4qGMDda0oyrFuRfcTRUhXreKmEEpVGK1j7E88np1vBnTrr0GO7eUIRNJsnrPef%2B70LLkVnemKLa9VRlgulibPv&X-Amz-Signature=4c9d62c6bafb04a60103f3bb4f0fd6981fb56500eb5b5ccf3fa8fc4f7804dc26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMUF6L2U%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDFqPbNv6i4JoCiUKHtLx17Vp7jxBFpBNPBtzwZoBdZrQIgEIeQZCGgJaVlf4YWnPCTGH%2BGW8BDkKQKgzR7bawAFaEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIWlPDqcXyh4g%2BTTkCrcA7K5O7zSO6DNNFEtImKp%2BxHPmIjypqghWicklpOkk5%2FU%2BpfAFfTu8wvEppSZsrWdujPvgb8PTghckZIN3J0jcPiehg7SurpYVWQj4lpCXO%2BX%2BpSBB%2F8fqOg%2BfmrL4W4XbOv47FazatE0LNl%2FTN9LJgoXPp%2Bmm%2F21i59hT0UJNZ3ghEIgkQ7KsCcERL0E9J%2FuGVONgqe7Y2ZE%2BV5xFq%2BlkHIMKqq0cXj7jg6ubjWR1jtUYorAqCi%2BnsbY0kacTx6JXLoBQYtkyvfQCRUDJmrGdJaD4jGyRZcSnL1HuD8xbyvkIW%2BCHO4CgbFyP0iSZIMJ3RfQrzUveVyJZe0PPZhIj65nBOsuoG5rDzob1nddkHxHf8wgLmfqH%2B9r0r4vEaZrWcKA4oZUi9qvhfSXFVAFI1EfMvehb42CjX13sjDChG%2B8zREAm%2BF%2F%2BpEwJtypvsQrigJdsTg4rT38EKEu3S2qRmLpO%2BonHVnKof9tf3OwAtedvWqr1rCVThHIV2a2bDAKvexRxWlEiYBRPas%2FpnPRHnaFHEviK%2FoUi3QbghG4gWnJd5ixCgKw%2FlNrU0AqYvaSEKyhV4iIlAaxn3VKssKCoq3VmY6jzjWyWRInAe7xfYDmmJy31LhjK7VM6L%2BPMLXQzMQGOqUBnjUHF5I8NrNPOa971Vv8Dqcx91m%2B55TBxbsB4nKyTtiG1C1qEru%2Fg5OWCsv8DtDbnxo4WSFU%2BxTbYfY1lZeHhm4tN9Gs%2FRcvhUanom5Njd%2BysG%2FUPd9EtBh4miOWBWYHkz1JsS4qGMDda0oyrFuRfcTRUhXreKmEEpVGK1j7E88np1vBnTrr0GO7eUIRNJsnrPef%2B70LLkVnemKLa9VRlgulibPv&X-Amz-Signature=f47f4e4561659296cf5346bc7124f6aa4479f28e3ae352585d5b5a7bac8bcf30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMUF6L2U%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDFqPbNv6i4JoCiUKHtLx17Vp7jxBFpBNPBtzwZoBdZrQIgEIeQZCGgJaVlf4YWnPCTGH%2BGW8BDkKQKgzR7bawAFaEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIWlPDqcXyh4g%2BTTkCrcA7K5O7zSO6DNNFEtImKp%2BxHPmIjypqghWicklpOkk5%2FU%2BpfAFfTu8wvEppSZsrWdujPvgb8PTghckZIN3J0jcPiehg7SurpYVWQj4lpCXO%2BX%2BpSBB%2F8fqOg%2BfmrL4W4XbOv47FazatE0LNl%2FTN9LJgoXPp%2Bmm%2F21i59hT0UJNZ3ghEIgkQ7KsCcERL0E9J%2FuGVONgqe7Y2ZE%2BV5xFq%2BlkHIMKqq0cXj7jg6ubjWR1jtUYorAqCi%2BnsbY0kacTx6JXLoBQYtkyvfQCRUDJmrGdJaD4jGyRZcSnL1HuD8xbyvkIW%2BCHO4CgbFyP0iSZIMJ3RfQrzUveVyJZe0PPZhIj65nBOsuoG5rDzob1nddkHxHf8wgLmfqH%2B9r0r4vEaZrWcKA4oZUi9qvhfSXFVAFI1EfMvehb42CjX13sjDChG%2B8zREAm%2BF%2F%2BpEwJtypvsQrigJdsTg4rT38EKEu3S2qRmLpO%2BonHVnKof9tf3OwAtedvWqr1rCVThHIV2a2bDAKvexRxWlEiYBRPas%2FpnPRHnaFHEviK%2FoUi3QbghG4gWnJd5ixCgKw%2FlNrU0AqYvaSEKyhV4iIlAaxn3VKssKCoq3VmY6jzjWyWRInAe7xfYDmmJy31LhjK7VM6L%2BPMLXQzMQGOqUBnjUHF5I8NrNPOa971Vv8Dqcx91m%2B55TBxbsB4nKyTtiG1C1qEru%2Fg5OWCsv8DtDbnxo4WSFU%2BxTbYfY1lZeHhm4tN9Gs%2FRcvhUanom5Njd%2BysG%2FUPd9EtBh4miOWBWYHkz1JsS4qGMDda0oyrFuRfcTRUhXreKmEEpVGK1j7E88np1vBnTrr0GO7eUIRNJsnrPef%2B70LLkVnemKLa9VRlgulibPv&X-Amz-Signature=ea8bb4f204ef261ac469a20e39e3a9b86da0fb289c1a5d95ea077f73d17084b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMUF6L2U%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDFqPbNv6i4JoCiUKHtLx17Vp7jxBFpBNPBtzwZoBdZrQIgEIeQZCGgJaVlf4YWnPCTGH%2BGW8BDkKQKgzR7bawAFaEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIWlPDqcXyh4g%2BTTkCrcA7K5O7zSO6DNNFEtImKp%2BxHPmIjypqghWicklpOkk5%2FU%2BpfAFfTu8wvEppSZsrWdujPvgb8PTghckZIN3J0jcPiehg7SurpYVWQj4lpCXO%2BX%2BpSBB%2F8fqOg%2BfmrL4W4XbOv47FazatE0LNl%2FTN9LJgoXPp%2Bmm%2F21i59hT0UJNZ3ghEIgkQ7KsCcERL0E9J%2FuGVONgqe7Y2ZE%2BV5xFq%2BlkHIMKqq0cXj7jg6ubjWR1jtUYorAqCi%2BnsbY0kacTx6JXLoBQYtkyvfQCRUDJmrGdJaD4jGyRZcSnL1HuD8xbyvkIW%2BCHO4CgbFyP0iSZIMJ3RfQrzUveVyJZe0PPZhIj65nBOsuoG5rDzob1nddkHxHf8wgLmfqH%2B9r0r4vEaZrWcKA4oZUi9qvhfSXFVAFI1EfMvehb42CjX13sjDChG%2B8zREAm%2BF%2F%2BpEwJtypvsQrigJdsTg4rT38EKEu3S2qRmLpO%2BonHVnKof9tf3OwAtedvWqr1rCVThHIV2a2bDAKvexRxWlEiYBRPas%2FpnPRHnaFHEviK%2FoUi3QbghG4gWnJd5ixCgKw%2FlNrU0AqYvaSEKyhV4iIlAaxn3VKssKCoq3VmY6jzjWyWRInAe7xfYDmmJy31LhjK7VM6L%2BPMLXQzMQGOqUBnjUHF5I8NrNPOa971Vv8Dqcx91m%2B55TBxbsB4nKyTtiG1C1qEru%2Fg5OWCsv8DtDbnxo4WSFU%2BxTbYfY1lZeHhm4tN9Gs%2FRcvhUanom5Njd%2BysG%2FUPd9EtBh4miOWBWYHkz1JsS4qGMDda0oyrFuRfcTRUhXreKmEEpVGK1j7E88np1vBnTrr0GO7eUIRNJsnrPef%2B70LLkVnemKLa9VRlgulibPv&X-Amz-Signature=99c8bb06a7d51fd153e8e897879a8a3c9ae699a6d99d1ec2809b7b2dffae3aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMUF6L2U%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDFqPbNv6i4JoCiUKHtLx17Vp7jxBFpBNPBtzwZoBdZrQIgEIeQZCGgJaVlf4YWnPCTGH%2BGW8BDkKQKgzR7bawAFaEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIWlPDqcXyh4g%2BTTkCrcA7K5O7zSO6DNNFEtImKp%2BxHPmIjypqghWicklpOkk5%2FU%2BpfAFfTu8wvEppSZsrWdujPvgb8PTghckZIN3J0jcPiehg7SurpYVWQj4lpCXO%2BX%2BpSBB%2F8fqOg%2BfmrL4W4XbOv47FazatE0LNl%2FTN9LJgoXPp%2Bmm%2F21i59hT0UJNZ3ghEIgkQ7KsCcERL0E9J%2FuGVONgqe7Y2ZE%2BV5xFq%2BlkHIMKqq0cXj7jg6ubjWR1jtUYorAqCi%2BnsbY0kacTx6JXLoBQYtkyvfQCRUDJmrGdJaD4jGyRZcSnL1HuD8xbyvkIW%2BCHO4CgbFyP0iSZIMJ3RfQrzUveVyJZe0PPZhIj65nBOsuoG5rDzob1nddkHxHf8wgLmfqH%2B9r0r4vEaZrWcKA4oZUi9qvhfSXFVAFI1EfMvehb42CjX13sjDChG%2B8zREAm%2BF%2F%2BpEwJtypvsQrigJdsTg4rT38EKEu3S2qRmLpO%2BonHVnKof9tf3OwAtedvWqr1rCVThHIV2a2bDAKvexRxWlEiYBRPas%2FpnPRHnaFHEviK%2FoUi3QbghG4gWnJd5ixCgKw%2FlNrU0AqYvaSEKyhV4iIlAaxn3VKssKCoq3VmY6jzjWyWRInAe7xfYDmmJy31LhjK7VM6L%2BPMLXQzMQGOqUBnjUHF5I8NrNPOa971Vv8Dqcx91m%2B55TBxbsB4nKyTtiG1C1qEru%2Fg5OWCsv8DtDbnxo4WSFU%2BxTbYfY1lZeHhm4tN9Gs%2FRcvhUanom5Njd%2BysG%2FUPd9EtBh4miOWBWYHkz1JsS4qGMDda0oyrFuRfcTRUhXreKmEEpVGK1j7E88np1vBnTrr0GO7eUIRNJsnrPef%2B70LLkVnemKLa9VRlgulibPv&X-Amz-Signature=bf42fc163d56add198633b8ca06811b46d4b9f7c6b63db099f5397599fa21013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMUF6L2U%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDFqPbNv6i4JoCiUKHtLx17Vp7jxBFpBNPBtzwZoBdZrQIgEIeQZCGgJaVlf4YWnPCTGH%2BGW8BDkKQKgzR7bawAFaEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIWlPDqcXyh4g%2BTTkCrcA7K5O7zSO6DNNFEtImKp%2BxHPmIjypqghWicklpOkk5%2FU%2BpfAFfTu8wvEppSZsrWdujPvgb8PTghckZIN3J0jcPiehg7SurpYVWQj4lpCXO%2BX%2BpSBB%2F8fqOg%2BfmrL4W4XbOv47FazatE0LNl%2FTN9LJgoXPp%2Bmm%2F21i59hT0UJNZ3ghEIgkQ7KsCcERL0E9J%2FuGVONgqe7Y2ZE%2BV5xFq%2BlkHIMKqq0cXj7jg6ubjWR1jtUYorAqCi%2BnsbY0kacTx6JXLoBQYtkyvfQCRUDJmrGdJaD4jGyRZcSnL1HuD8xbyvkIW%2BCHO4CgbFyP0iSZIMJ3RfQrzUveVyJZe0PPZhIj65nBOsuoG5rDzob1nddkHxHf8wgLmfqH%2B9r0r4vEaZrWcKA4oZUi9qvhfSXFVAFI1EfMvehb42CjX13sjDChG%2B8zREAm%2BF%2F%2BpEwJtypvsQrigJdsTg4rT38EKEu3S2qRmLpO%2BonHVnKof9tf3OwAtedvWqr1rCVThHIV2a2bDAKvexRxWlEiYBRPas%2FpnPRHnaFHEviK%2FoUi3QbghG4gWnJd5ixCgKw%2FlNrU0AqYvaSEKyhV4iIlAaxn3VKssKCoq3VmY6jzjWyWRInAe7xfYDmmJy31LhjK7VM6L%2BPMLXQzMQGOqUBnjUHF5I8NrNPOa971Vv8Dqcx91m%2B55TBxbsB4nKyTtiG1C1qEru%2Fg5OWCsv8DtDbnxo4WSFU%2BxTbYfY1lZeHhm4tN9Gs%2FRcvhUanom5Njd%2BysG%2FUPd9EtBh4miOWBWYHkz1JsS4qGMDda0oyrFuRfcTRUhXreKmEEpVGK1j7E88np1vBnTrr0GO7eUIRNJsnrPef%2B70LLkVnemKLa9VRlgulibPv&X-Amz-Signature=f47f4e4561659296cf5346bc7124f6aa4479f28e3ae352585d5b5a7bac8bcf30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMUF6L2U%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDFqPbNv6i4JoCiUKHtLx17Vp7jxBFpBNPBtzwZoBdZrQIgEIeQZCGgJaVlf4YWnPCTGH%2BGW8BDkKQKgzR7bawAFaEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIWlPDqcXyh4g%2BTTkCrcA7K5O7zSO6DNNFEtImKp%2BxHPmIjypqghWicklpOkk5%2FU%2BpfAFfTu8wvEppSZsrWdujPvgb8PTghckZIN3J0jcPiehg7SurpYVWQj4lpCXO%2BX%2BpSBB%2F8fqOg%2BfmrL4W4XbOv47FazatE0LNl%2FTN9LJgoXPp%2Bmm%2F21i59hT0UJNZ3ghEIgkQ7KsCcERL0E9J%2FuGVONgqe7Y2ZE%2BV5xFq%2BlkHIMKqq0cXj7jg6ubjWR1jtUYorAqCi%2BnsbY0kacTx6JXLoBQYtkyvfQCRUDJmrGdJaD4jGyRZcSnL1HuD8xbyvkIW%2BCHO4CgbFyP0iSZIMJ3RfQrzUveVyJZe0PPZhIj65nBOsuoG5rDzob1nddkHxHf8wgLmfqH%2B9r0r4vEaZrWcKA4oZUi9qvhfSXFVAFI1EfMvehb42CjX13sjDChG%2B8zREAm%2BF%2F%2BpEwJtypvsQrigJdsTg4rT38EKEu3S2qRmLpO%2BonHVnKof9tf3OwAtedvWqr1rCVThHIV2a2bDAKvexRxWlEiYBRPas%2FpnPRHnaFHEviK%2FoUi3QbghG4gWnJd5ixCgKw%2FlNrU0AqYvaSEKyhV4iIlAaxn3VKssKCoq3VmY6jzjWyWRInAe7xfYDmmJy31LhjK7VM6L%2BPMLXQzMQGOqUBnjUHF5I8NrNPOa971Vv8Dqcx91m%2B55TBxbsB4nKyTtiG1C1qEru%2Fg5OWCsv8DtDbnxo4WSFU%2BxTbYfY1lZeHhm4tN9Gs%2FRcvhUanom5Njd%2BysG%2FUPd9EtBh4miOWBWYHkz1JsS4qGMDda0oyrFuRfcTRUhXreKmEEpVGK1j7E88np1vBnTrr0GO7eUIRNJsnrPef%2B70LLkVnemKLa9VRlgulibPv&X-Amz-Signature=4761463a1afe02a8f8431483269c97300a10d506fe2de61ac24f5a5cdd09875b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMUF6L2U%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDFqPbNv6i4JoCiUKHtLx17Vp7jxBFpBNPBtzwZoBdZrQIgEIeQZCGgJaVlf4YWnPCTGH%2BGW8BDkKQKgzR7bawAFaEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIWlPDqcXyh4g%2BTTkCrcA7K5O7zSO6DNNFEtImKp%2BxHPmIjypqghWicklpOkk5%2FU%2BpfAFfTu8wvEppSZsrWdujPvgb8PTghckZIN3J0jcPiehg7SurpYVWQj4lpCXO%2BX%2BpSBB%2F8fqOg%2BfmrL4W4XbOv47FazatE0LNl%2FTN9LJgoXPp%2Bmm%2F21i59hT0UJNZ3ghEIgkQ7KsCcERL0E9J%2FuGVONgqe7Y2ZE%2BV5xFq%2BlkHIMKqq0cXj7jg6ubjWR1jtUYorAqCi%2BnsbY0kacTx6JXLoBQYtkyvfQCRUDJmrGdJaD4jGyRZcSnL1HuD8xbyvkIW%2BCHO4CgbFyP0iSZIMJ3RfQrzUveVyJZe0PPZhIj65nBOsuoG5rDzob1nddkHxHf8wgLmfqH%2B9r0r4vEaZrWcKA4oZUi9qvhfSXFVAFI1EfMvehb42CjX13sjDChG%2B8zREAm%2BF%2F%2BpEwJtypvsQrigJdsTg4rT38EKEu3S2qRmLpO%2BonHVnKof9tf3OwAtedvWqr1rCVThHIV2a2bDAKvexRxWlEiYBRPas%2FpnPRHnaFHEviK%2FoUi3QbghG4gWnJd5ixCgKw%2FlNrU0AqYvaSEKyhV4iIlAaxn3VKssKCoq3VmY6jzjWyWRInAe7xfYDmmJy31LhjK7VM6L%2BPMLXQzMQGOqUBnjUHF5I8NrNPOa971Vv8Dqcx91m%2B55TBxbsB4nKyTtiG1C1qEru%2Fg5OWCsv8DtDbnxo4WSFU%2BxTbYfY1lZeHhm4tN9Gs%2FRcvhUanom5Njd%2BysG%2FUPd9EtBh4miOWBWYHkz1JsS4qGMDda0oyrFuRfcTRUhXreKmEEpVGK1j7E88np1vBnTrr0GO7eUIRNJsnrPef%2B70LLkVnemKLa9VRlgulibPv&X-Amz-Signature=a0b6e61d4485c0126b1174e3b5bc28eb1d7c92172d7f5b047b3d0aa6e95c7dc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMUF6L2U%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDFqPbNv6i4JoCiUKHtLx17Vp7jxBFpBNPBtzwZoBdZrQIgEIeQZCGgJaVlf4YWnPCTGH%2BGW8BDkKQKgzR7bawAFaEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIWlPDqcXyh4g%2BTTkCrcA7K5O7zSO6DNNFEtImKp%2BxHPmIjypqghWicklpOkk5%2FU%2BpfAFfTu8wvEppSZsrWdujPvgb8PTghckZIN3J0jcPiehg7SurpYVWQj4lpCXO%2BX%2BpSBB%2F8fqOg%2BfmrL4W4XbOv47FazatE0LNl%2FTN9LJgoXPp%2Bmm%2F21i59hT0UJNZ3ghEIgkQ7KsCcERL0E9J%2FuGVONgqe7Y2ZE%2BV5xFq%2BlkHIMKqq0cXj7jg6ubjWR1jtUYorAqCi%2BnsbY0kacTx6JXLoBQYtkyvfQCRUDJmrGdJaD4jGyRZcSnL1HuD8xbyvkIW%2BCHO4CgbFyP0iSZIMJ3RfQrzUveVyJZe0PPZhIj65nBOsuoG5rDzob1nddkHxHf8wgLmfqH%2B9r0r4vEaZrWcKA4oZUi9qvhfSXFVAFI1EfMvehb42CjX13sjDChG%2B8zREAm%2BF%2F%2BpEwJtypvsQrigJdsTg4rT38EKEu3S2qRmLpO%2BonHVnKof9tf3OwAtedvWqr1rCVThHIV2a2bDAKvexRxWlEiYBRPas%2FpnPRHnaFHEviK%2FoUi3QbghG4gWnJd5ixCgKw%2FlNrU0AqYvaSEKyhV4iIlAaxn3VKssKCoq3VmY6jzjWyWRInAe7xfYDmmJy31LhjK7VM6L%2BPMLXQzMQGOqUBnjUHF5I8NrNPOa971Vv8Dqcx91m%2B55TBxbsB4nKyTtiG1C1qEru%2Fg5OWCsv8DtDbnxo4WSFU%2BxTbYfY1lZeHhm4tN9Gs%2FRcvhUanom5Njd%2BysG%2FUPd9EtBh4miOWBWYHkz1JsS4qGMDda0oyrFuRfcTRUhXreKmEEpVGK1j7E88np1vBnTrr0GO7eUIRNJsnrPef%2B70LLkVnemKLa9VRlgulibPv&X-Amz-Signature=52ce4b103471b40e5eaa49df02f16228789b26cf7f8549fe72efd631cc40da7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
