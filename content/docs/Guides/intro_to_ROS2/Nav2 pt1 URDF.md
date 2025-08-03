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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X2PED3A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT4S4bDY0eAyyihPSYRY17DSDuPiK9OnGBba6ookxPUAiAnV8sZTrgwR1L6bP3EKpJXhV4pcn1Aami2P82wM87IaSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMD8lfXcCOrhzcLrOuKtwDe4V%2FyltPIzvyWs7reLcwrutUHfzg4p9Eww38nuXrnhnBxQrYVWqdUSuUIgtI2qK52t77qmzNTum25tMGThU2yP%2BMQrznaxGtTYYZKBkXhiLmDCb2yquYLcmnV1Ciko5rv68wHqbUI1R1CrgUSmuUVZHDz5npSycgYocj9bsobgqaNkIxWjarl2Pt0taPUpDT5B4R6lr60DSpYzR5b%2BkyeoHUUjEkMQzeHA%2FvGbBom5sYMwuPvMS9%2FmKfMFEIjXDwA8WYH%2F%2FDNBnQxVSp1KKi4%2FPv4H3mf90WAuUmL6kEE28as9KIqm2QUkrHTGoU3bM0aIe6KaxgBmaSd%2FDOn52qp7mAEZN64Fo17xYC11q2pv9GKVSrz%2FBMgSatGPkUTEOxV2X%2FLOyjDROsJ19FvNNKMw5yicOOEoSV5MNfeJZMcMrATnPKHj0WAkGOOvI5zvgwx8Y6C0bbqA9%2BnVOuaxufQ8sV9mwfnslhjFjixenG%2FOFcXYANNy4vfete4N9Ce21TuOdxdjdU94D3n4MF5LqZ8dDZO72ytEiS7sW6JwwLWtzEpWgzsw2T1o5YhGw4vuehg7I6i3eW7gzCFnsFEjnhto%2BkRUmHu%2FVOLSi%2FSrKhLCYxThSaoqtCbXJyk2AwysO8xAY6pgH6qi5wgpKxC5JEWQrEBpFvPWkNlRNwDd%2FxelO8BIxkdGeC9UB7Ud9W3aAC6AhWeHKd6VnzmmpVsPsQ6kuyqYMLqPovdeAAnwa758eySLVdPZQLKDmjOq1cBzVluFUY%2Fj%2FD22VHhcDe9XpQ2GV73vbZ%2FKtYEHPTh3wo9%2FOQxgMHfa9ESELvz011AQOtR1SoWw3DcVOCJL%2BGEYH%2BwbnsYYnC25Lm2hSw&X-Amz-Signature=a19583a0b8739c4a62307655c7d7158e387e2ced5a8f6388ea1c6b4789295a90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X2PED3A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT4S4bDY0eAyyihPSYRY17DSDuPiK9OnGBba6ookxPUAiAnV8sZTrgwR1L6bP3EKpJXhV4pcn1Aami2P82wM87IaSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMD8lfXcCOrhzcLrOuKtwDe4V%2FyltPIzvyWs7reLcwrutUHfzg4p9Eww38nuXrnhnBxQrYVWqdUSuUIgtI2qK52t77qmzNTum25tMGThU2yP%2BMQrznaxGtTYYZKBkXhiLmDCb2yquYLcmnV1Ciko5rv68wHqbUI1R1CrgUSmuUVZHDz5npSycgYocj9bsobgqaNkIxWjarl2Pt0taPUpDT5B4R6lr60DSpYzR5b%2BkyeoHUUjEkMQzeHA%2FvGbBom5sYMwuPvMS9%2FmKfMFEIjXDwA8WYH%2F%2FDNBnQxVSp1KKi4%2FPv4H3mf90WAuUmL6kEE28as9KIqm2QUkrHTGoU3bM0aIe6KaxgBmaSd%2FDOn52qp7mAEZN64Fo17xYC11q2pv9GKVSrz%2FBMgSatGPkUTEOxV2X%2FLOyjDROsJ19FvNNKMw5yicOOEoSV5MNfeJZMcMrATnPKHj0WAkGOOvI5zvgwx8Y6C0bbqA9%2BnVOuaxufQ8sV9mwfnslhjFjixenG%2FOFcXYANNy4vfete4N9Ce21TuOdxdjdU94D3n4MF5LqZ8dDZO72ytEiS7sW6JwwLWtzEpWgzsw2T1o5YhGw4vuehg7I6i3eW7gzCFnsFEjnhto%2BkRUmHu%2FVOLSi%2FSrKhLCYxThSaoqtCbXJyk2AwysO8xAY6pgH6qi5wgpKxC5JEWQrEBpFvPWkNlRNwDd%2FxelO8BIxkdGeC9UB7Ud9W3aAC6AhWeHKd6VnzmmpVsPsQ6kuyqYMLqPovdeAAnwa758eySLVdPZQLKDmjOq1cBzVluFUY%2Fj%2FD22VHhcDe9XpQ2GV73vbZ%2FKtYEHPTh3wo9%2FOQxgMHfa9ESELvz011AQOtR1SoWw3DcVOCJL%2BGEYH%2BwbnsYYnC25Lm2hSw&X-Amz-Signature=180479a92f5be652540ae6269166d53341078fd70519ce1e6a96b10318d81fc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X2PED3A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT4S4bDY0eAyyihPSYRY17DSDuPiK9OnGBba6ookxPUAiAnV8sZTrgwR1L6bP3EKpJXhV4pcn1Aami2P82wM87IaSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMD8lfXcCOrhzcLrOuKtwDe4V%2FyltPIzvyWs7reLcwrutUHfzg4p9Eww38nuXrnhnBxQrYVWqdUSuUIgtI2qK52t77qmzNTum25tMGThU2yP%2BMQrznaxGtTYYZKBkXhiLmDCb2yquYLcmnV1Ciko5rv68wHqbUI1R1CrgUSmuUVZHDz5npSycgYocj9bsobgqaNkIxWjarl2Pt0taPUpDT5B4R6lr60DSpYzR5b%2BkyeoHUUjEkMQzeHA%2FvGbBom5sYMwuPvMS9%2FmKfMFEIjXDwA8WYH%2F%2FDNBnQxVSp1KKi4%2FPv4H3mf90WAuUmL6kEE28as9KIqm2QUkrHTGoU3bM0aIe6KaxgBmaSd%2FDOn52qp7mAEZN64Fo17xYC11q2pv9GKVSrz%2FBMgSatGPkUTEOxV2X%2FLOyjDROsJ19FvNNKMw5yicOOEoSV5MNfeJZMcMrATnPKHj0WAkGOOvI5zvgwx8Y6C0bbqA9%2BnVOuaxufQ8sV9mwfnslhjFjixenG%2FOFcXYANNy4vfete4N9Ce21TuOdxdjdU94D3n4MF5LqZ8dDZO72ytEiS7sW6JwwLWtzEpWgzsw2T1o5YhGw4vuehg7I6i3eW7gzCFnsFEjnhto%2BkRUmHu%2FVOLSi%2FSrKhLCYxThSaoqtCbXJyk2AwysO8xAY6pgH6qi5wgpKxC5JEWQrEBpFvPWkNlRNwDd%2FxelO8BIxkdGeC9UB7Ud9W3aAC6AhWeHKd6VnzmmpVsPsQ6kuyqYMLqPovdeAAnwa758eySLVdPZQLKDmjOq1cBzVluFUY%2Fj%2FD22VHhcDe9XpQ2GV73vbZ%2FKtYEHPTh3wo9%2FOQxgMHfa9ESELvz011AQOtR1SoWw3DcVOCJL%2BGEYH%2BwbnsYYnC25Lm2hSw&X-Amz-Signature=8c66b99c461e03ec552651a92c83e77301f12aef9345eed7256e931a392dbcd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X2PED3A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT4S4bDY0eAyyihPSYRY17DSDuPiK9OnGBba6ookxPUAiAnV8sZTrgwR1L6bP3EKpJXhV4pcn1Aami2P82wM87IaSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMD8lfXcCOrhzcLrOuKtwDe4V%2FyltPIzvyWs7reLcwrutUHfzg4p9Eww38nuXrnhnBxQrYVWqdUSuUIgtI2qK52t77qmzNTum25tMGThU2yP%2BMQrznaxGtTYYZKBkXhiLmDCb2yquYLcmnV1Ciko5rv68wHqbUI1R1CrgUSmuUVZHDz5npSycgYocj9bsobgqaNkIxWjarl2Pt0taPUpDT5B4R6lr60DSpYzR5b%2BkyeoHUUjEkMQzeHA%2FvGbBom5sYMwuPvMS9%2FmKfMFEIjXDwA8WYH%2F%2FDNBnQxVSp1KKi4%2FPv4H3mf90WAuUmL6kEE28as9KIqm2QUkrHTGoU3bM0aIe6KaxgBmaSd%2FDOn52qp7mAEZN64Fo17xYC11q2pv9GKVSrz%2FBMgSatGPkUTEOxV2X%2FLOyjDROsJ19FvNNKMw5yicOOEoSV5MNfeJZMcMrATnPKHj0WAkGOOvI5zvgwx8Y6C0bbqA9%2BnVOuaxufQ8sV9mwfnslhjFjixenG%2FOFcXYANNy4vfete4N9Ce21TuOdxdjdU94D3n4MF5LqZ8dDZO72ytEiS7sW6JwwLWtzEpWgzsw2T1o5YhGw4vuehg7I6i3eW7gzCFnsFEjnhto%2BkRUmHu%2FVOLSi%2FSrKhLCYxThSaoqtCbXJyk2AwysO8xAY6pgH6qi5wgpKxC5JEWQrEBpFvPWkNlRNwDd%2FxelO8BIxkdGeC9UB7Ud9W3aAC6AhWeHKd6VnzmmpVsPsQ6kuyqYMLqPovdeAAnwa758eySLVdPZQLKDmjOq1cBzVluFUY%2Fj%2FD22VHhcDe9XpQ2GV73vbZ%2FKtYEHPTh3wo9%2FOQxgMHfa9ESELvz011AQOtR1SoWw3DcVOCJL%2BGEYH%2BwbnsYYnC25Lm2hSw&X-Amz-Signature=4d2c80f297421bd7421e9b83fbf409ddcbec69b0f39ca373a63b8428f22ff733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X2PED3A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT4S4bDY0eAyyihPSYRY17DSDuPiK9OnGBba6ookxPUAiAnV8sZTrgwR1L6bP3EKpJXhV4pcn1Aami2P82wM87IaSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMD8lfXcCOrhzcLrOuKtwDe4V%2FyltPIzvyWs7reLcwrutUHfzg4p9Eww38nuXrnhnBxQrYVWqdUSuUIgtI2qK52t77qmzNTum25tMGThU2yP%2BMQrznaxGtTYYZKBkXhiLmDCb2yquYLcmnV1Ciko5rv68wHqbUI1R1CrgUSmuUVZHDz5npSycgYocj9bsobgqaNkIxWjarl2Pt0taPUpDT5B4R6lr60DSpYzR5b%2BkyeoHUUjEkMQzeHA%2FvGbBom5sYMwuPvMS9%2FmKfMFEIjXDwA8WYH%2F%2FDNBnQxVSp1KKi4%2FPv4H3mf90WAuUmL6kEE28as9KIqm2QUkrHTGoU3bM0aIe6KaxgBmaSd%2FDOn52qp7mAEZN64Fo17xYC11q2pv9GKVSrz%2FBMgSatGPkUTEOxV2X%2FLOyjDROsJ19FvNNKMw5yicOOEoSV5MNfeJZMcMrATnPKHj0WAkGOOvI5zvgwx8Y6C0bbqA9%2BnVOuaxufQ8sV9mwfnslhjFjixenG%2FOFcXYANNy4vfete4N9Ce21TuOdxdjdU94D3n4MF5LqZ8dDZO72ytEiS7sW6JwwLWtzEpWgzsw2T1o5YhGw4vuehg7I6i3eW7gzCFnsFEjnhto%2BkRUmHu%2FVOLSi%2FSrKhLCYxThSaoqtCbXJyk2AwysO8xAY6pgH6qi5wgpKxC5JEWQrEBpFvPWkNlRNwDd%2FxelO8BIxkdGeC9UB7Ud9W3aAC6AhWeHKd6VnzmmpVsPsQ6kuyqYMLqPovdeAAnwa758eySLVdPZQLKDmjOq1cBzVluFUY%2Fj%2FD22VHhcDe9XpQ2GV73vbZ%2FKtYEHPTh3wo9%2FOQxgMHfa9ESELvz011AQOtR1SoWw3DcVOCJL%2BGEYH%2BwbnsYYnC25Lm2hSw&X-Amz-Signature=b27af0f62cfefc3030a892f2168dad5182a858a6c958e932a85c8eeb5cb94b2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X2PED3A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT4S4bDY0eAyyihPSYRY17DSDuPiK9OnGBba6ookxPUAiAnV8sZTrgwR1L6bP3EKpJXhV4pcn1Aami2P82wM87IaSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMD8lfXcCOrhzcLrOuKtwDe4V%2FyltPIzvyWs7reLcwrutUHfzg4p9Eww38nuXrnhnBxQrYVWqdUSuUIgtI2qK52t77qmzNTum25tMGThU2yP%2BMQrznaxGtTYYZKBkXhiLmDCb2yquYLcmnV1Ciko5rv68wHqbUI1R1CrgUSmuUVZHDz5npSycgYocj9bsobgqaNkIxWjarl2Pt0taPUpDT5B4R6lr60DSpYzR5b%2BkyeoHUUjEkMQzeHA%2FvGbBom5sYMwuPvMS9%2FmKfMFEIjXDwA8WYH%2F%2FDNBnQxVSp1KKi4%2FPv4H3mf90WAuUmL6kEE28as9KIqm2QUkrHTGoU3bM0aIe6KaxgBmaSd%2FDOn52qp7mAEZN64Fo17xYC11q2pv9GKVSrz%2FBMgSatGPkUTEOxV2X%2FLOyjDROsJ19FvNNKMw5yicOOEoSV5MNfeJZMcMrATnPKHj0WAkGOOvI5zvgwx8Y6C0bbqA9%2BnVOuaxufQ8sV9mwfnslhjFjixenG%2FOFcXYANNy4vfete4N9Ce21TuOdxdjdU94D3n4MF5LqZ8dDZO72ytEiS7sW6JwwLWtzEpWgzsw2T1o5YhGw4vuehg7I6i3eW7gzCFnsFEjnhto%2BkRUmHu%2FVOLSi%2FSrKhLCYxThSaoqtCbXJyk2AwysO8xAY6pgH6qi5wgpKxC5JEWQrEBpFvPWkNlRNwDd%2FxelO8BIxkdGeC9UB7Ud9W3aAC6AhWeHKd6VnzmmpVsPsQ6kuyqYMLqPovdeAAnwa758eySLVdPZQLKDmjOq1cBzVluFUY%2Fj%2FD22VHhcDe9XpQ2GV73vbZ%2FKtYEHPTh3wo9%2FOQxgMHfa9ESELvz011AQOtR1SoWw3DcVOCJL%2BGEYH%2BwbnsYYnC25Lm2hSw&X-Amz-Signature=82ef7bf92e3b4442d146094f54e4dcda9508c2a96dc7d9f2b4dc00788608fbad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X2PED3A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT4S4bDY0eAyyihPSYRY17DSDuPiK9OnGBba6ookxPUAiAnV8sZTrgwR1L6bP3EKpJXhV4pcn1Aami2P82wM87IaSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMD8lfXcCOrhzcLrOuKtwDe4V%2FyltPIzvyWs7reLcwrutUHfzg4p9Eww38nuXrnhnBxQrYVWqdUSuUIgtI2qK52t77qmzNTum25tMGThU2yP%2BMQrznaxGtTYYZKBkXhiLmDCb2yquYLcmnV1Ciko5rv68wHqbUI1R1CrgUSmuUVZHDz5npSycgYocj9bsobgqaNkIxWjarl2Pt0taPUpDT5B4R6lr60DSpYzR5b%2BkyeoHUUjEkMQzeHA%2FvGbBom5sYMwuPvMS9%2FmKfMFEIjXDwA8WYH%2F%2FDNBnQxVSp1KKi4%2FPv4H3mf90WAuUmL6kEE28as9KIqm2QUkrHTGoU3bM0aIe6KaxgBmaSd%2FDOn52qp7mAEZN64Fo17xYC11q2pv9GKVSrz%2FBMgSatGPkUTEOxV2X%2FLOyjDROsJ19FvNNKMw5yicOOEoSV5MNfeJZMcMrATnPKHj0WAkGOOvI5zvgwx8Y6C0bbqA9%2BnVOuaxufQ8sV9mwfnslhjFjixenG%2FOFcXYANNy4vfete4N9Ce21TuOdxdjdU94D3n4MF5LqZ8dDZO72ytEiS7sW6JwwLWtzEpWgzsw2T1o5YhGw4vuehg7I6i3eW7gzCFnsFEjnhto%2BkRUmHu%2FVOLSi%2FSrKhLCYxThSaoqtCbXJyk2AwysO8xAY6pgH6qi5wgpKxC5JEWQrEBpFvPWkNlRNwDd%2FxelO8BIxkdGeC9UB7Ud9W3aAC6AhWeHKd6VnzmmpVsPsQ6kuyqYMLqPovdeAAnwa758eySLVdPZQLKDmjOq1cBzVluFUY%2Fj%2FD22VHhcDe9XpQ2GV73vbZ%2FKtYEHPTh3wo9%2FOQxgMHfa9ESELvz011AQOtR1SoWw3DcVOCJL%2BGEYH%2BwbnsYYnC25Lm2hSw&X-Amz-Signature=468dcba044b7fc114e99c2fd850e530858fb8e5f023297895d8dd2240a8ab80b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X2PED3A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT4S4bDY0eAyyihPSYRY17DSDuPiK9OnGBba6ookxPUAiAnV8sZTrgwR1L6bP3EKpJXhV4pcn1Aami2P82wM87IaSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMD8lfXcCOrhzcLrOuKtwDe4V%2FyltPIzvyWs7reLcwrutUHfzg4p9Eww38nuXrnhnBxQrYVWqdUSuUIgtI2qK52t77qmzNTum25tMGThU2yP%2BMQrznaxGtTYYZKBkXhiLmDCb2yquYLcmnV1Ciko5rv68wHqbUI1R1CrgUSmuUVZHDz5npSycgYocj9bsobgqaNkIxWjarl2Pt0taPUpDT5B4R6lr60DSpYzR5b%2BkyeoHUUjEkMQzeHA%2FvGbBom5sYMwuPvMS9%2FmKfMFEIjXDwA8WYH%2F%2FDNBnQxVSp1KKi4%2FPv4H3mf90WAuUmL6kEE28as9KIqm2QUkrHTGoU3bM0aIe6KaxgBmaSd%2FDOn52qp7mAEZN64Fo17xYC11q2pv9GKVSrz%2FBMgSatGPkUTEOxV2X%2FLOyjDROsJ19FvNNKMw5yicOOEoSV5MNfeJZMcMrATnPKHj0WAkGOOvI5zvgwx8Y6C0bbqA9%2BnVOuaxufQ8sV9mwfnslhjFjixenG%2FOFcXYANNy4vfete4N9Ce21TuOdxdjdU94D3n4MF5LqZ8dDZO72ytEiS7sW6JwwLWtzEpWgzsw2T1o5YhGw4vuehg7I6i3eW7gzCFnsFEjnhto%2BkRUmHu%2FVOLSi%2FSrKhLCYxThSaoqtCbXJyk2AwysO8xAY6pgH6qi5wgpKxC5JEWQrEBpFvPWkNlRNwDd%2FxelO8BIxkdGeC9UB7Ud9W3aAC6AhWeHKd6VnzmmpVsPsQ6kuyqYMLqPovdeAAnwa758eySLVdPZQLKDmjOq1cBzVluFUY%2Fj%2FD22VHhcDe9XpQ2GV73vbZ%2FKtYEHPTh3wo9%2FOQxgMHfa9ESELvz011AQOtR1SoWw3DcVOCJL%2BGEYH%2BwbnsYYnC25Lm2hSw&X-Amz-Signature=8ea5e3b7fe849053030d495dbac2042db8ba988e78c5153c7b5486be77556823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X2PED3A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT4S4bDY0eAyyihPSYRY17DSDuPiK9OnGBba6ookxPUAiAnV8sZTrgwR1L6bP3EKpJXhV4pcn1Aami2P82wM87IaSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMD8lfXcCOrhzcLrOuKtwDe4V%2FyltPIzvyWs7reLcwrutUHfzg4p9Eww38nuXrnhnBxQrYVWqdUSuUIgtI2qK52t77qmzNTum25tMGThU2yP%2BMQrznaxGtTYYZKBkXhiLmDCb2yquYLcmnV1Ciko5rv68wHqbUI1R1CrgUSmuUVZHDz5npSycgYocj9bsobgqaNkIxWjarl2Pt0taPUpDT5B4R6lr60DSpYzR5b%2BkyeoHUUjEkMQzeHA%2FvGbBom5sYMwuPvMS9%2FmKfMFEIjXDwA8WYH%2F%2FDNBnQxVSp1KKi4%2FPv4H3mf90WAuUmL6kEE28as9KIqm2QUkrHTGoU3bM0aIe6KaxgBmaSd%2FDOn52qp7mAEZN64Fo17xYC11q2pv9GKVSrz%2FBMgSatGPkUTEOxV2X%2FLOyjDROsJ19FvNNKMw5yicOOEoSV5MNfeJZMcMrATnPKHj0WAkGOOvI5zvgwx8Y6C0bbqA9%2BnVOuaxufQ8sV9mwfnslhjFjixenG%2FOFcXYANNy4vfete4N9Ce21TuOdxdjdU94D3n4MF5LqZ8dDZO72ytEiS7sW6JwwLWtzEpWgzsw2T1o5YhGw4vuehg7I6i3eW7gzCFnsFEjnhto%2BkRUmHu%2FVOLSi%2FSrKhLCYxThSaoqtCbXJyk2AwysO8xAY6pgH6qi5wgpKxC5JEWQrEBpFvPWkNlRNwDd%2FxelO8BIxkdGeC9UB7Ud9W3aAC6AhWeHKd6VnzmmpVsPsQ6kuyqYMLqPovdeAAnwa758eySLVdPZQLKDmjOq1cBzVluFUY%2Fj%2FD22VHhcDe9XpQ2GV73vbZ%2FKtYEHPTh3wo9%2FOQxgMHfa9ESELvz011AQOtR1SoWw3DcVOCJL%2BGEYH%2BwbnsYYnC25Lm2hSw&X-Amz-Signature=569730c4aef27de4d60d9231771fe75a658b16af44dfc4cc4f0ed2d551ac6ff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X2PED3A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT4S4bDY0eAyyihPSYRY17DSDuPiK9OnGBba6ookxPUAiAnV8sZTrgwR1L6bP3EKpJXhV4pcn1Aami2P82wM87IaSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMD8lfXcCOrhzcLrOuKtwDe4V%2FyltPIzvyWs7reLcwrutUHfzg4p9Eww38nuXrnhnBxQrYVWqdUSuUIgtI2qK52t77qmzNTum25tMGThU2yP%2BMQrznaxGtTYYZKBkXhiLmDCb2yquYLcmnV1Ciko5rv68wHqbUI1R1CrgUSmuUVZHDz5npSycgYocj9bsobgqaNkIxWjarl2Pt0taPUpDT5B4R6lr60DSpYzR5b%2BkyeoHUUjEkMQzeHA%2FvGbBom5sYMwuPvMS9%2FmKfMFEIjXDwA8WYH%2F%2FDNBnQxVSp1KKi4%2FPv4H3mf90WAuUmL6kEE28as9KIqm2QUkrHTGoU3bM0aIe6KaxgBmaSd%2FDOn52qp7mAEZN64Fo17xYC11q2pv9GKVSrz%2FBMgSatGPkUTEOxV2X%2FLOyjDROsJ19FvNNKMw5yicOOEoSV5MNfeJZMcMrATnPKHj0WAkGOOvI5zvgwx8Y6C0bbqA9%2BnVOuaxufQ8sV9mwfnslhjFjixenG%2FOFcXYANNy4vfete4N9Ce21TuOdxdjdU94D3n4MF5LqZ8dDZO72ytEiS7sW6JwwLWtzEpWgzsw2T1o5YhGw4vuehg7I6i3eW7gzCFnsFEjnhto%2BkRUmHu%2FVOLSi%2FSrKhLCYxThSaoqtCbXJyk2AwysO8xAY6pgH6qi5wgpKxC5JEWQrEBpFvPWkNlRNwDd%2FxelO8BIxkdGeC9UB7Ud9W3aAC6AhWeHKd6VnzmmpVsPsQ6kuyqYMLqPovdeAAnwa758eySLVdPZQLKDmjOq1cBzVluFUY%2Fj%2FD22VHhcDe9XpQ2GV73vbZ%2FKtYEHPTh3wo9%2FOQxgMHfa9ESELvz011AQOtR1SoWw3DcVOCJL%2BGEYH%2BwbnsYYnC25Lm2hSw&X-Amz-Signature=a87fe521fef9756d50662e401fb343f09e3de59f6082b615d19b2da3da42fc7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKGFFW7S%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpdETPGxRUUH0LjzdhFqFDikyDaZvWZrat2m0UaegNAQIgOrKAS0tNyDs58N%2F55V5Cuw0by%2BjdDgF3M3jmj1zC64Eq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFqODFsRPaL10%2BYh7ircAy8xnKguuGp6wpIjMKcSLMq4xxZTXwitoZ9Jgu8%2BNeYM6Gn1llm3h9mQfE8Cd25nVD8z3XeAXPVOwoIWxoNy%2Bym016guPZFZDNv%2B1LHygHGhcNKk9UHvRypTSZge1bj%2BgvTyguO8TXKFAlUbjkqU4cKrCeWSyri0fLfPPLE3awipwbNeCKZ%2BXlL%2BNAzP7kaYoy%2FR3g3mzSDM%2ByUxGyOSb0B4eRKKER%2BaaQU4kEa%2Fq4zHUJkYzsNHww32Q2BYW0ZFWRi%2ByslCjS3J0U18Acbi0tWGchexq3MnPNNYkELHbPqkCUOOv0pICF1SLkRcl4c%2FT88gp7GV33ScxOZFO1xm3%2FUybJaEbwlF1e3hgvVydjR%2BkuDiSHIm7uHV5lP5UZ2ylSGpibSEpfvdStuFfekvnx5%2Bjfpa7L%2B48ueOCR%2FFDKJfSzkShw9Seg5l6te%2BfZ4fqth7lPYgvV61lCCCiRN9rYb5OqMHmmQ4Tx3weUT4rgcPjYHiRuucTx%2FbHj%2Fo86plIu0xDErnz21UQyJSLHUiI6fCsmV2SpGOePlniHukKoZDjHcckC58Fd85iIx06VLHTgADaGIGajb9m35amDm8YiDhtYzdEZog%2F2Lw2jtnaXDy5PuEt4k2AGrbg8dsMJ3JvMQGOqUBBOCBQGPF%2FSqw6rlJcOSIP5EX4ZorU7uPDqSIRRdw4B%2FMYY82eVRXng14GlcAfr%2B8F8kg8A5SBlXsxzD29VP8jTgB1ZSNut1EMWNNzm5NjLEnFDZOVZLxyAy2bSs9coffueyGS1I6kpTfyds1ZTp%2Fh%2FDzO3JSi2pOjA%2F90mKi0C%2F5MAZhxHuIYjXrD3GAbfh0OSb6shceeMTW9FHgCUyy8mEfzZwb&X-Amz-Signature=682739eac06db773f4d62752fe84615b4fd59e3995806a9fd4e56a9a48571417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BMCKLC2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqTU56K0SeFdokmAZNazpjCDjbB6dvxtGYAwMVrLmGOAiEAqNGdMKvu2XW2scfs8qH8Tw9jwhn5dqdZN0ak0v8ne1Iq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNMaW1Zzn%2FtKLCdltyrcAyJvZZsAykzEMwMDItIwt62CsE%2Bh3yhg3NyNssqqBKEQMfbZAQb%2BhUEd97nvn%2Be3%2BhfhTkxHQI%2FXFYufO%2BrhsT6u%2F5ls6SJ8%2F%2Fo4YLmtmc6ws1Hlq7bCokTceEPiGfQAExSab3aOUzQEOmprPZfkhteyZpLXYqbZODWm6VoxgGrZDW%2F%2BQw08flLenXcgbpQgPbiFrPXOOXAm3oGaKLA9khJDV0HSmWOIyUPOmI4OJI%2FOtAKzrVI6OTVHWg30FRteoynuk5swoliWlqB4FeLFtQYx%2FvhO%2BtMaDpPLAtbNbap00Cy2nEdR49A9iG1xubLuWGn6gWtToYqnYLQelmwZ8qPKxKTOLilBbCh3S%2Fp0D4e9kq8GMS9EuCA6MNkAQoJwr8UKDJgo2h2TZTZ%2FQfkBYbjb73NfvfRiVPdv30Ls2ATiBtRDIO5PtTSNBtcENDIVKiCf7KfA6VfaNWGHLjYW2MP%2FlcuABN7kBou%2BrJATBNFHoV2mCdmcjBbq5BWT8sCnVerHrmQ3KNz76POnULP86RBrFpjf8DXmD1lF8fzDdwcovJY4JD5EIFKfUXzaLE9BedyBceZOL%2BU8WCCOKedCalKDXNQEfzVM4hEATaTgAxmZhBjEbAmWfLsfsDgpMLm%2BvMQGOqUBpTvlzfsTUxy42ooah1WDOm3qYHD0KPMp7FVYNHCsTuRqRK9MBQht8uZSuh0sNoMSIwdAc%2BTKA3Nt9bwHMSgLm1GBU9upR6XdWjHDQ1sRKK4jLZg%2FttrhPJPXfWlzosONp3HBWDAMGj4oHYLP%2BjBkMfIN7iM%2B0R6mdt%2BgOjqYhcmtM6zKJqd8Ha20XD5zy2Z9a%2Fm9Mr8jTbWDc5UMCbz80h2Tdzpp&X-Amz-Signature=1d5a3d3d0efad310a935d8a3bff9836d35e3ff8707a79b2e7f33f996be5bb047&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HSXB3YA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWGoysYV%2F3DIVrfybfbW%2BorYnGo1uxCzkx6kVX1tdK7gIgWaHJhva%2FlXCMjL%2BatnGatxCYhxkGQD0kQkLBLK0WWDQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDB23zFIh2jQn7nIaaCrcAxvUlDVMaY9m3i7wT5AJcJHYXN5Ai9CcQJXwznLPT78lLcSVfAuWzsjGDx%2BNqYquj31%2BZu0w3hfcIVpnyYv2p6GaC4LXWcy8N%2Bb%2FmunJ%2BBYaP%2BY3ogOAZG3lWVpeQUzwEQL6zj6CEOANRLnu%2BdWGHIbCguW6U9TwrO6mV%2FMN58GcmHwOhah5tmP%2BIFK1JaCj0OqheoxK6v0dHU%2Fzcec3IueYMKxxtPIpT83zC5EcInmspCjVhazrOwmoI5Bi0eYXpSAuKZp%2FxlLcLD0eKLR0TdzkI1GjZoN7aX4OIHX7yTr8EZ8qZfZVGcwSPDE8KqypbVJvUR108F%2Fv8Rg8MR2T79rlY3U48qspWVSps%2BfVVY0cbWZhJQWlWzIWVK9v88%2FnWZEA313Y0YI0MrZ1zMGr%2FOqVd0N4bS5ON0TtO9gQqGEF9jYwo7oHvZmIPa7zXjIsdrhiE%2Bc%2FvUhb2ALEM%2FHfrBfY9kOjD%2FdCaXUCeyWpO6pk8jkbkQvcWrxw1PXVXNnafWFYuaGB3ytiWRGySCCXMhoddQntnXntFEaa0x775LSPqPk9I0PdInQWh0zXtoWBByOEv%2BfT4Sflc12bzRtOVLd%2F7oHwpiFtLC5y1BQ4zkkcp4ot6nzJCuNAFljBMIDDvMQGOqUBn0%2FUU2W9YficVu%2B6u0FOWpsHcYKVicWnnrNpUH%2FvRXouN9EO3qtfF2iviQ5UXbte4gN6RvOFj3zy2wGJmm0maOHS%2F6%2BNlrQixUNqS95I94OSC5HMQnEquR3%2BBQJxo4jUFWnpbYxL7vgQfdiZkdAfwZMlg7botXN0jZp4i5843ME%2Bv6BYtvxYV%2FGzBHPd4APN2zaM6DLiN17PzQ14IHxFjD4ZOijF&X-Amz-Signature=3f560148f8e785685cf53c5fc5bb18e8137fcc0b30c9d780c0b54811381a42a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X2PED3A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT4S4bDY0eAyyihPSYRY17DSDuPiK9OnGBba6ookxPUAiAnV8sZTrgwR1L6bP3EKpJXhV4pcn1Aami2P82wM87IaSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMD8lfXcCOrhzcLrOuKtwDe4V%2FyltPIzvyWs7reLcwrutUHfzg4p9Eww38nuXrnhnBxQrYVWqdUSuUIgtI2qK52t77qmzNTum25tMGThU2yP%2BMQrznaxGtTYYZKBkXhiLmDCb2yquYLcmnV1Ciko5rv68wHqbUI1R1CrgUSmuUVZHDz5npSycgYocj9bsobgqaNkIxWjarl2Pt0taPUpDT5B4R6lr60DSpYzR5b%2BkyeoHUUjEkMQzeHA%2FvGbBom5sYMwuPvMS9%2FmKfMFEIjXDwA8WYH%2F%2FDNBnQxVSp1KKi4%2FPv4H3mf90WAuUmL6kEE28as9KIqm2QUkrHTGoU3bM0aIe6KaxgBmaSd%2FDOn52qp7mAEZN64Fo17xYC11q2pv9GKVSrz%2FBMgSatGPkUTEOxV2X%2FLOyjDROsJ19FvNNKMw5yicOOEoSV5MNfeJZMcMrATnPKHj0WAkGOOvI5zvgwx8Y6C0bbqA9%2BnVOuaxufQ8sV9mwfnslhjFjixenG%2FOFcXYANNy4vfete4N9Ce21TuOdxdjdU94D3n4MF5LqZ8dDZO72ytEiS7sW6JwwLWtzEpWgzsw2T1o5YhGw4vuehg7I6i3eW7gzCFnsFEjnhto%2BkRUmHu%2FVOLSi%2FSrKhLCYxThSaoqtCbXJyk2AwysO8xAY6pgH6qi5wgpKxC5JEWQrEBpFvPWkNlRNwDd%2FxelO8BIxkdGeC9UB7Ud9W3aAC6AhWeHKd6VnzmmpVsPsQ6kuyqYMLqPovdeAAnwa758eySLVdPZQLKDmjOq1cBzVluFUY%2Fj%2FD22VHhcDe9XpQ2GV73vbZ%2FKtYEHPTh3wo9%2FOQxgMHfa9ESELvz011AQOtR1SoWw3DcVOCJL%2BGEYH%2BwbnsYYnC25Lm2hSw&X-Amz-Signature=c79f395c8c58555ac20d23c7089df24e6951fccaa0e24998342e0916b33de3a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N26RAK3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICf%2BjNM1pjl%2B1GuV4JvKAQTsUlQPNQxCoNA40VWxC2sdAiEApY2d9CoIaf5wJPzWo4sBX%2Fbyl6VKpXapRKh2WMtHkOgq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFk9LKna7KppUTS8QSrcA2qpwrsqx8T2XBPN8PuzoQyn8kNL%2Belx9fcKp90mZoMSR8usvYbmb8EsxscAmKhkuIHS2mnuZ%2FpEl1sQfvYgNgyu3ZfQkl%2Fo5AQ2LLjdZmtWTXMyBwoBcxdpcyuM0JLm0N%2FFJlPkdXqPuRLP1WP1q3EjZrAYAlYNnBESRkFBgP15p9HxfI1wdivXuOubrytyqr9ysf9JtOXPc1WlwDk3srZOt1q1AbviDB%2BXR2nxS%2F%2F1Cf9aiKPx31%2By7T7qPOHiimxCWK2rQ1K%2FmYo8ZlR7FGdtXPMdtUp64evXgosq6k5sflCsL1gVJJvgvq8jTmvamOuIW%2BxldU%2F2STqMjGqEGFPwqlpb%2F2DVoKJPVfoIxJ8BW6f7nvEZUnBOqT9nir0e%2FhKfc%2BMakaF%2Bq1sKolMFhCi0qNigInVEQX6YpxWYBFbJCa9ngM42mcwm7SEf9yimUFTqrtLNIKogpwvH5aVkr2XIkshk8RmO5OSygB4KF0O4%2FKMdD9VB36m87MR9DUD95eFUIiMA8CMQRdtjPKpADARJtt%2BzjZGmywU84bbh%2BkK83WhLMkz59y%2FmstF6r1NEbCyaGzpMoSGGgyoD2bAmJrvh8%2Fv%2FSOML10U1k6mHf8vGVKk%2B%2F3YYSP8%2BOhliMJvDvMQGOqUBXO4POd6kNPFkQ8ZbXj5RpBWMOo5aCxSapiXfbgAoOAjJ%2F1Bn3YDYa95P7dJuBdxw0h29o%2BflW1bvilgHwWhStugRVYOVR3gDw7WHMqR2bYMb0felXcLU2ci3chNyaZjQ4Jt0YYhmRFc70TG9Ij8QtjHli8gPXGDRypPeKhx3KHyP%2BJWB0SELNKRlyF5JdUDXBgQo7L90ldxksBaufduWxsG9RnLe&X-Amz-Signature=ebfdf60f0b63cdde62d0e04905d638685b5da90ab3d8e0e7df6b82fdc3885912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X2PED3A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT4S4bDY0eAyyihPSYRY17DSDuPiK9OnGBba6ookxPUAiAnV8sZTrgwR1L6bP3EKpJXhV4pcn1Aami2P82wM87IaSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMD8lfXcCOrhzcLrOuKtwDe4V%2FyltPIzvyWs7reLcwrutUHfzg4p9Eww38nuXrnhnBxQrYVWqdUSuUIgtI2qK52t77qmzNTum25tMGThU2yP%2BMQrznaxGtTYYZKBkXhiLmDCb2yquYLcmnV1Ciko5rv68wHqbUI1R1CrgUSmuUVZHDz5npSycgYocj9bsobgqaNkIxWjarl2Pt0taPUpDT5B4R6lr60DSpYzR5b%2BkyeoHUUjEkMQzeHA%2FvGbBom5sYMwuPvMS9%2FmKfMFEIjXDwA8WYH%2F%2FDNBnQxVSp1KKi4%2FPv4H3mf90WAuUmL6kEE28as9KIqm2QUkrHTGoU3bM0aIe6KaxgBmaSd%2FDOn52qp7mAEZN64Fo17xYC11q2pv9GKVSrz%2FBMgSatGPkUTEOxV2X%2FLOyjDROsJ19FvNNKMw5yicOOEoSV5MNfeJZMcMrATnPKHj0WAkGOOvI5zvgwx8Y6C0bbqA9%2BnVOuaxufQ8sV9mwfnslhjFjixenG%2FOFcXYANNy4vfete4N9Ce21TuOdxdjdU94D3n4MF5LqZ8dDZO72ytEiS7sW6JwwLWtzEpWgzsw2T1o5YhGw4vuehg7I6i3eW7gzCFnsFEjnhto%2BkRUmHu%2FVOLSi%2FSrKhLCYxThSaoqtCbXJyk2AwysO8xAY6pgH6qi5wgpKxC5JEWQrEBpFvPWkNlRNwDd%2FxelO8BIxkdGeC9UB7Ud9W3aAC6AhWeHKd6VnzmmpVsPsQ6kuyqYMLqPovdeAAnwa758eySLVdPZQLKDmjOq1cBzVluFUY%2Fj%2FD22VHhcDe9XpQ2GV73vbZ%2FKtYEHPTh3wo9%2FOQxgMHfa9ESELvz011AQOtR1SoWw3DcVOCJL%2BGEYH%2BwbnsYYnC25Lm2hSw&X-Amz-Signature=75fa5d538bcfe6a096775aec2a49da451aed1ef40673a36927d7a72422373f19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RSTW5NJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJXrQvHvudh8%2FuWNPgrYw9oWGKYsMUxmL%2BAZm0jJH0AAiAb7s2sYUUIMKByxyvKPKfzI4yWKOSmwlSAZ59xNLUlbCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM%2Fr%2FXKH0EgBnEIDlVKtwDR3uEqydV0Ny2Gy0fYNyVkNBLalvhu75SvK6zeampipRjN68u6zoIUHvfXxXlr7T7gXMS33lqoLlMvvkF7B5P1OAvO5wW7Sx1o%2BOiJUED2K1TpqK6%2F9rYLwSQD7MoymHcvt0mP2HliCsN2PpAad6%2BjB%2BPQmfdtOleWE%2BvJuNsU6IG8B7Gw1VPDwY1wCYbL1WwH%2BzUII6d3gAu4ofTsrIbdymF4RUCZVHmQnIOG%2FAad9qF4y%2FjchhnQUq8GzAcgHPxWhYciWA5b1q56JwJ2gUrCxYASKl6RGTlW6srIvznMe1ZiCTBZEJSMyOz7ZmtkVZKRT3sdDsaKfOrlMj3EBDudvMXTvcN5B4v0Ru1qfichSSGmDp1mpSIqxeFvkIn98jyLqQoFNWWChFYihjo%2Fpd3GUmIFx%2FiaKx3uXi%2F5eULP7ezbWwSiGj0rOZu4tlt%2FPoTgqGcv1NiuUwM9TvDLdIwXj426TR0wXX%2FCg%2F4maHldcQrPu1Iri4WziKxs%2FzM04vf7yNX9iiQgInuKAM2sqntbELcyJaVwKtX9Gj2ITOLIiKSdgLi1jfl74JVsq5gPzWDP%2FDhwB5aDKe%2BWcCsM1RtXvKaPL9bQj%2BzYDlTCBd6H6IwPm2SAxj8NMJFmgwwtMC8xAY6pgGB9s%2FQ3mRiAPh9RxdEeR2l45ToGfC3OQtTd5JOybcu0I%2FkGfEfCrecj%2B7%2Fbm%2BMCNjCBG%2B1NE5bG40ds5PpTP0E7uaWQ0y9ArTKWDrLqK%2F%2FZacKb69VszH%2FGa%2FbCGQ9sentUE2IMCX4RK74LiGz%2F6ddOMEy3tXXjZFzZkGnvcmaFoRUxfEudlb0ULBaCyzAUUHtTDpPatxWlcHCR2t69AaLLupruOs5&X-Amz-Signature=6ef220a93d2ac905c19b967fb03418cd4e1e0908eeea3a6760c28f64d353dd3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X2PED3A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT4S4bDY0eAyyihPSYRY17DSDuPiK9OnGBba6ookxPUAiAnV8sZTrgwR1L6bP3EKpJXhV4pcn1Aami2P82wM87IaSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMD8lfXcCOrhzcLrOuKtwDe4V%2FyltPIzvyWs7reLcwrutUHfzg4p9Eww38nuXrnhnBxQrYVWqdUSuUIgtI2qK52t77qmzNTum25tMGThU2yP%2BMQrznaxGtTYYZKBkXhiLmDCb2yquYLcmnV1Ciko5rv68wHqbUI1R1CrgUSmuUVZHDz5npSycgYocj9bsobgqaNkIxWjarl2Pt0taPUpDT5B4R6lr60DSpYzR5b%2BkyeoHUUjEkMQzeHA%2FvGbBom5sYMwuPvMS9%2FmKfMFEIjXDwA8WYH%2F%2FDNBnQxVSp1KKi4%2FPv4H3mf90WAuUmL6kEE28as9KIqm2QUkrHTGoU3bM0aIe6KaxgBmaSd%2FDOn52qp7mAEZN64Fo17xYC11q2pv9GKVSrz%2FBMgSatGPkUTEOxV2X%2FLOyjDROsJ19FvNNKMw5yicOOEoSV5MNfeJZMcMrATnPKHj0WAkGOOvI5zvgwx8Y6C0bbqA9%2BnVOuaxufQ8sV9mwfnslhjFjixenG%2FOFcXYANNy4vfete4N9Ce21TuOdxdjdU94D3n4MF5LqZ8dDZO72ytEiS7sW6JwwLWtzEpWgzsw2T1o5YhGw4vuehg7I6i3eW7gzCFnsFEjnhto%2BkRUmHu%2FVOLSi%2FSrKhLCYxThSaoqtCbXJyk2AwysO8xAY6pgH6qi5wgpKxC5JEWQrEBpFvPWkNlRNwDd%2FxelO8BIxkdGeC9UB7Ud9W3aAC6AhWeHKd6VnzmmpVsPsQ6kuyqYMLqPovdeAAnwa758eySLVdPZQLKDmjOq1cBzVluFUY%2Fj%2FD22VHhcDe9XpQ2GV73vbZ%2FKtYEHPTh3wo9%2FOQxgMHfa9ESELvz011AQOtR1SoWw3DcVOCJL%2BGEYH%2BwbnsYYnC25Lm2hSw&X-Amz-Signature=3e522c115635c781d06c2dc395c6607de864d424ed91a358744e0cb9a4184fd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WAIAC5R%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaOENhB39%2BgouyQhSyN7q1FAERfKBGYUYlYBd0hH599AiEAoLPVk7XurD6%2BOn6sAxKBYmPt40B%2B73fJ5OAEqEJggWUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDLvS3eOACTneRw0ZRyrcA1eoVBmPKVvoNO22t7haJk13sf8JjrGRJ%2FDJ3DPq6X47Ds4jPBd%2BOhao3DENWIki4GZaxNA2syH2LIYlHg6O0elYGakG10I8BoEEPFHBdx4B%2FbZLcs7fQb126UcAJvx72wXWSDNKxHbyUUDTVAikOHPrNfZa4IecOnVXHomo3hcQdtpcPdF3TsH4JUD%2FkYeEed8r%2BSD%2BOt5K04K8%2FC1PREyL6SQu%2B%2BiivlG8K%2FCv9BUPA2h3F3xtnNCE%2BvInuH1T9CG50dNRdFxIDbQ4qVysJxHIjGyDOCTXZBSmDwzIFM7%2B9CwrWmJKKtNrXA6T7RJmoK5xn36MbAxMuTa3LeHWx%2F%2BhSIhT2PEgsbsUK6%2FpRGWLykZ9AC7b5z7ceDK5VH4psxVHM%2BB36O%2FIxVV0z2DO%2Fh3DC84tVajAF8czo7lIc9u6H5fJmYa3Aj89B3xARBe9KTsXb%2B4UaLKf7eruUGoOUbD41mdi8qLt44haUjydijauRDt%2B1WTwikdhPnSL8JekJnpZetgjC2%2BQD92srGXX4uiGtCsjkT8d0chiz1MQL3vViUZUchf60%2FDUKrk398%2F2J7X%2BYx5uEUR2bLTmgMjq3H0blhuGghtOc0o2xbv6fivSsSTP8JWEEPIqIT2OMNe%2BvMQGOqUBPgHoVfezJCzb%2FFc7LcgqMFkW6JLjw7Gky4gjFNLBvGWNBFShqaWWksIZ1QLpoZIk7PT1k%2B9RmIOtKtFVLtMPXB4RQVpHMCPxQty4%2FaQxvO4X4BFbUwJJgQ3db1sHZgHgqyBmo%2Fau7ZF2i7tL%2FOAtsuipx2fle%2FZaxWt4zKdui8OHA9AfCodDSIiwH6bBovxIDjHutiqLfRp%2B4YgltVDFZKZ%2Bff%2Fo&X-Amz-Signature=61a52590a4c0107bbf4dafd5f9a55b86bca2e01785df00ef36b9a33d4e455299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X2PED3A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT4S4bDY0eAyyihPSYRY17DSDuPiK9OnGBba6ookxPUAiAnV8sZTrgwR1L6bP3EKpJXhV4pcn1Aami2P82wM87IaSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMD8lfXcCOrhzcLrOuKtwDe4V%2FyltPIzvyWs7reLcwrutUHfzg4p9Eww38nuXrnhnBxQrYVWqdUSuUIgtI2qK52t77qmzNTum25tMGThU2yP%2BMQrznaxGtTYYZKBkXhiLmDCb2yquYLcmnV1Ciko5rv68wHqbUI1R1CrgUSmuUVZHDz5npSycgYocj9bsobgqaNkIxWjarl2Pt0taPUpDT5B4R6lr60DSpYzR5b%2BkyeoHUUjEkMQzeHA%2FvGbBom5sYMwuPvMS9%2FmKfMFEIjXDwA8WYH%2F%2FDNBnQxVSp1KKi4%2FPv4H3mf90WAuUmL6kEE28as9KIqm2QUkrHTGoU3bM0aIe6KaxgBmaSd%2FDOn52qp7mAEZN64Fo17xYC11q2pv9GKVSrz%2FBMgSatGPkUTEOxV2X%2FLOyjDROsJ19FvNNKMw5yicOOEoSV5MNfeJZMcMrATnPKHj0WAkGOOvI5zvgwx8Y6C0bbqA9%2BnVOuaxufQ8sV9mwfnslhjFjixenG%2FOFcXYANNy4vfete4N9Ce21TuOdxdjdU94D3n4MF5LqZ8dDZO72ytEiS7sW6JwwLWtzEpWgzsw2T1o5YhGw4vuehg7I6i3eW7gzCFnsFEjnhto%2BkRUmHu%2FVOLSi%2FSrKhLCYxThSaoqtCbXJyk2AwysO8xAY6pgH6qi5wgpKxC5JEWQrEBpFvPWkNlRNwDd%2FxelO8BIxkdGeC9UB7Ud9W3aAC6AhWeHKd6VnzmmpVsPsQ6kuyqYMLqPovdeAAnwa758eySLVdPZQLKDmjOq1cBzVluFUY%2Fj%2FD22VHhcDe9XpQ2GV73vbZ%2FKtYEHPTh3wo9%2FOQxgMHfa9ESELvz011AQOtR1SoWw3DcVOCJL%2BGEYH%2BwbnsYYnC25Lm2hSw&X-Amz-Signature=28c2f4c4e213cd4156128cd3140304e45d08564640fc21b41f41c52f3147a4da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FDKGWAC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVvIuD%2FKhBaha5Y6YrLf9fAJ2G5qJsWodWfkJjBZl%2B5wIhALIGlJD4Otf60Gmhd4sHYNAemSUdXiccPaF6IPqmcLhoKv8DCCoQABoMNjM3NDIzMTgzODA1IgwcIV3TlrtZ6WLu7bgq3AP8KjLC2poMWV1gOWlttlColLtT4YepE94zUSBuFbpu3j%2FZ8SuxW7WLK0KfKspG44Rg%2FNZW2pdSR4AezbAifkVpa3wRVozSonyhDeHNiEmQer12BTAK80NPI0IKv6nY7Z5%2FQB1YV3d90u%2Bfm0ksIgGbEgjWKpVzpIILycmvBU1TllagnDx%2BJ5T%2B6%2B45qxaUNebHlb%2BGUsMyA9tDyOeyzTs4jCS1GsNaz%2By6%2Fi2reRwq6MHONMt8Tqi4dLPExEWrJyEXaeiWWft2jokyqa%2BU6%2F%2FizScOQWFpdh3gvPSj%2BkgwXl1vhvLDZkTFatuxrUtmBHgO54ebJpKbaXW%2BGaVcbw5ai4Hqq5SgRFVoTqcfu11Uoziuiyp7S8e%2Brdgq9Pymp45RC25oxxvTVkzNvclbPfvS6%2FafPr1fyqwUUui5TENbjGc6Cywyd%2FkCrwmBvs%2But83Lt9vio1CdfOO52EY1wFKilD7%2FYP7D3kRYEim%2BcnE7%2FVUX98BLUAnT3GDmT%2BveGkzp99FidwNsYeeWrntCKxuI63Gh%2BpCeQ3POLyBCyPi8TyxcDX3L%2Br4EOkKzR79gcBmcux5EqlL8JTHAYCOfSySMeDg8CIl3C8xFM1R9d5ll8Ypyk6pkajF6Uc%2FoGDD8vbzEBjqkAYRDhqR92OVo02QIaL8vuOD81H4D%2B%2F9FetUMO1eHjv3MDvD6chRQJgpZjnCCYj8wBfdoqUBsAGhnOeI%2FE4%2BZSFpLtY78L6qbldxrcDjxG8gQne6xAAaHPsLBa7Xe%2F3Cdd8G%2BPrHFcJu%2F5htUxfdjo8Y0a%2B%2FKDe5TgzGeRaTBG9Wia%2Bm1NqN3yhnHignAVYezTPMup5qddCXRvuhUXE88Zehn4VBn&X-Amz-Signature=7c9d1981394b83554ac2d327e26149409864c71629432636701995aadb283fae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXRDPHQB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaJBpfXCRGUb%2BOpjpfdaA%2By%2FXWP7dTGa33qAEABDTO9AIhAIiZQE8yho86ti65b%2B7uDCTBiA5OP3XwUTwB1ri0VQH7Kv8DCCoQABoMNjM3NDIzMTgzODA1IgwVvfaITJBnWlX1Nkcq3APSWdNMpCzgP2c30jMkmYvc3agq0p6RXUYDWtMsg89EjeG%2BQyKRFveAOBWF%2FUNH1eCxmu3duoCow9kPuYaaoNm4xMDJkmu0WSLX1stpRObwRYgFNNweK4JVY%2FXeaXIffbpydgq3g76nJCowq9uff9TYXN9S6888x0zXID4vgN4qfRV4of%2Bz9kHfDY8gqBeZsjJqE9T1LdvLnFtkvNbbALiV%2FqdD4Qt0F4JEU%2Ft7%2BVeF0cH6K2nGDU7UvCA4Inovq2zzum%2BCv4orgae4I8JKjQBDsyyVB2mqEt0a0s8TbbpehETp4N5DADxRytI5mnftTwzBzaqJCIDwP%2BZoqwg6VGqF1fZddV%2B0P2l9DkfV3RUgEOEw%2Fa4URO8N61we04dvIqAehtHsDegw%2BHhTkbkzmuOSvFEOX3IMPqAJ3cIW1UmH5udUaAOAUN8%2FmMegHQkn5pp5OEZVtERbdli8dSR2fLqnwLv4kKiDAH5CVruXxasDOhZcz%2F7McIvA5hKU5namMS2mAKEQLdRqqduELTZsvq3rwj6bhwRkBglC%2B4ux5nTsUH3XbQKuZuqUKBTgdQqxVLrGQC4ZgxEVAVPVnaR2i6xPxBE1s7%2FZDOb1VFQjpQlS6JlFwwVqs68KzobtVTCoyLzEBjqkAc%2BuV2o6FA64W%2F0Es5DLZ4NAitjtrQH9wbhKGsjt4wU%2FBuS%2BsFeEa6ueMcINyl%2FJy2LZOvzg7qWm2Zj5Aoikr7miWyH7MuOCzk9HdjOTlMquOSMbu8qzCyYju8hcPvK5Xq4XBWnAfG0f4yMwkjOOHvYGETstA36boH02MCBVXkYKR5E49DsTMOIcAIRZnxg7vCwayB%2F58wUw7JqAVyLLoBrIzyVM&X-Amz-Signature=e3d9197542f7b35c879bb1897b02a08cd56b2d0601c8cb93c11785c83b3f819f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAZZDSZJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtHazfEpg5to%2FyTHEibtGQCHf0AmUe2uk57uY0q6NIKAiEA1P4E157H9fwR8jJbD6o9Ry3laW1ySq3dLxbFSwZcEZAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIA7JZ4cQPhU8W71gCrcAwofFDKW6uLL3C6N3opB2uraGZuHEy1IdlFT3bilnku5DQA6Mza%2FCIlisgB%2FAj%2B6iLmNoIJ9VS8MMeSTXl%2Fa%2FKdP6O%2F9qz27J%2FpqGiIfbg0DV7MQMPw3gimDZtsURgUwv0wLQ6gtlPo3x6d3lwcPtU9NJv%2B3413KoO9MYvYuZgL3SBB%2FaNtUkpYqEkqUZSs0veZ2DOeeKrakuu7f%2FFkB%2FlpKel17M6Yv9ZRdBpqk4TXGyknFIhKy369Tc5%2FRrBzUbKFlYB7AzW%2B7VvhdN4PCa44t60AWcGczJBBq%2BSvZQtaPOBrZVuOT8fTkBWOpa6eopj6eX2w8c7GwdWu4RrDZRFh6Lk%2FusUEJGcox6DxtP2CL28IxL5CSna7s3FD1NyKffHgytgOW6Q9n7AJiGT71F1pSgd6F38%2BKoQEeJi0n7AXLZv0MVieA9gcHKsdc57tqAA3gizTb2PrVyZDDLx6mC5n2BH255EHulL8d1rQGpc46YMgY754cyG%2FxtdC%2BYBeJmSZu1GY03p8Ah6ej%2BdpUrA1sKutnz4DazPVeo2wMjxV9077EAKR8Alo4i6hqKBdNpavxKRLljz4N4rrB05GzQ5h1lwl4rZ%2BU0b%2FFeI3hX6yNwSHcx8KgPnudtOnjMJ3JvMQGOqUBTTfdHSKgXcCyXhcJyPOR3JjKhIIkRdgd%2FaK%2FuPNjryoRbGJGP%2FrEl%2BUQ6vebBC%2B59KvDWgq67yVcgZIBZwXLGg5UqSzPCrUDHU9pGhop%2BLKaC94mEWQQpzAU0nzDGorOA4R5be1TlzoDUwUJ1srFJl2Upft2VCbAZdPBzZM6ZB0oWdEYBC10P7twK7Z4vhyj4bUHHc7j6txBeSJcOkXwMekme4lU&X-Amz-Signature=0883ca2e9fb00ad805888f992c78e8687cd4fff4294197c2b2b5c6c6c439841c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XMU44EK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRxEc%2F12hB5UkmZihgDJTrpZRfPya4N%2FdynSxrL6zbHAiBRzM50AmgAzJfhj%2FK0hfnmi9flPBn%2Fdsfr%2BhmWX6bBWir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM%2BqSbjiEBsWAVOgHcKtwDBPlajMbmQUqWJ5pn6OJiTFGwJaOB4uc%2F3bQGolUQ78z95KQnWcyhTqDKT7igCY1cthx0XRgMbk0D0w8dNAt%2BVOJqx4ClEeEobMING7Mvqa6%2FF846lfl1GolPtW1nzeZSRKsLjeOV3kTZdtbGIbuZ76MaZMfPaFEPAW6z1yKb9wOchb1ESgzeOQurU%2BZTi1rXxt2WT3U5LjxVhPGBCMmkeLJqnSCbV0EUIQV44UUeZezONw%2BJ5pRUxUgsKhdzaXNI3i4j57GFsM4cB3SfYW6yg3x3FP9S%2BtOFzSC%2Bxxg3myQcXJ5APFJp4lvoxyVR9MBhCRwVY6oWIx4%2BHQzJzM2O900K5S8EuDqhclJQwjbIAuC138y8EJAs5lkaOIZ8BoRFKg1YFNik%2FTQWPRAAP5wzFC9FLVKRBr12nWW%2BIny9Gp9%2Fr6CM1ilbP6VNXTPEEQC5iBoNgms2C%2BnenBr5SGDix7Dp38Z5uDI7tXOF6ts9fNJAVbjb%2BHhotjPbqJlMj3DvSRP8qfcNfmwM5eYSe3fgd4vp9Qk4ik%2B%2FfB9FiJxGgaH5MvBzPw5B%2FfVm%2F1dhwnPI6mzO77bnoTWSx0nUFk9U2IOzQhdFK0%2Btbe3C5K7I2w8fdoaTBZpfPYg1Lggw5MW8xAY6pgGy1%2B24MYQQsAGO98EGNLlehkMdhVkDF5EqZGuwAQz3ffHxwcwpcUjZOU4XPz171xcaYwC%2FCTtpfBldQ0rL0OEUV0qN7hpHoY4JJmcrVL7mC9vjfdGRMFmxZiOF4KfeL1bCF26aczQklK18s651sLyL97aCZjYdYvQo200Sn4zS9yNnqmEAC159HiaA3R6V83fsWUwyxr0jTEV%2B9BTNuVbMLjf1fMFz&X-Amz-Signature=90c18deed69aca3934c498e5b3d151538390f6b1ac0e2b132894c7255129b2e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U5QP3HG%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXAtb8EEPMUmeJWPTTs5xYIfw274Jwq9Op0JAuxDAhbQIgV%2FaRrzruCtn%2BMwDVsvHClkzvBLsD8Jbg0MgEIb%2FEgPMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJl8GD5sbP12ZNzZ2ircA%2FM%2F4eHPBVXG8Us0If073KJZyFW0yga10TpsL27c71OJ7gEUSnmS%2F575ZbXikYqxvT%2BVDq0i3tg5GbDlBIo850yKe6Xb6bLicPNGZrtdmjvDk6BYjzjDTvTsTCJH4s6yaImpBT%2B1EGe2%2BE4KkX29BHpICKigGUOJZ4vXiZRbgmSaMq%2BwcdTEfByozMRaMyyUUlKeuJUf%2FCktfjLZAN%2Bs9uJ%2BjS%2FBjiNR4ZhJp727pzC38otRysncCBbEHZ5uvYr15TttVLZchqlZHH2crzIUjj3sIgZ5p5DvuJQYu30iWETFtEg0WQV9WlhDR1gAZj4YCE10LOLOAL5SI4nt0cgErofDac44xuYNNrTYtkogQcGN9LE9ziy7A8LumZ6Em7Bjq5PMoAyC3MR9m0w2knXtT9dB07bWf7bEpgNds4McXs91DC3vBOwrFs9d6Cc9D9U22EodyUjZSbgeNaVAhpg2bMlpp3JlYheM4hIsyuW5XkhqH%2B3O%2FIpnz7oQZl4N9BXYw8qop4RqTiQkvlbC7x9moTgnY1sGk1aE1GPjHqS20WGDOA1gRZpUYWn4CECat3J59ehziPhX5SwytWeF91Gn0nHzsuBu%2FmIOhEyCttcklJKlNCNO%2Fr%2BYTWK8z91NMPPEvMQGOqUBPUWl6Vwpdc5LyWF%2BmtoEse%2FoYgn0rVukGvQ%2BVO0f%2Bceo6o9%2FJ6QcuscEBpuoHqlT0PmQ2%2BmcWauSLp%2F05UqhuNxjyLlxJBG7%2BdjlYjDr2%2B%2FsxWjtSvjj7CoiyQ0f%2BwJ3V%2F9cMiHDokcXAWZ2KVjXnf5KJRFcdEKBsaJTQNYVJNiNbDRP%2Bnu2FANCbjdQWr7jX5ZP4GsSSexw83YCUbj1n9NTeyPp&X-Amz-Signature=637ba60127ff1e13bd9789bb5882fd6190f716d529e221d0dcf9311fede88e98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X2PED3A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT4S4bDY0eAyyihPSYRY17DSDuPiK9OnGBba6ookxPUAiAnV8sZTrgwR1L6bP3EKpJXhV4pcn1Aami2P82wM87IaSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMD8lfXcCOrhzcLrOuKtwDe4V%2FyltPIzvyWs7reLcwrutUHfzg4p9Eww38nuXrnhnBxQrYVWqdUSuUIgtI2qK52t77qmzNTum25tMGThU2yP%2BMQrznaxGtTYYZKBkXhiLmDCb2yquYLcmnV1Ciko5rv68wHqbUI1R1CrgUSmuUVZHDz5npSycgYocj9bsobgqaNkIxWjarl2Pt0taPUpDT5B4R6lr60DSpYzR5b%2BkyeoHUUjEkMQzeHA%2FvGbBom5sYMwuPvMS9%2FmKfMFEIjXDwA8WYH%2F%2FDNBnQxVSp1KKi4%2FPv4H3mf90WAuUmL6kEE28as9KIqm2QUkrHTGoU3bM0aIe6KaxgBmaSd%2FDOn52qp7mAEZN64Fo17xYC11q2pv9GKVSrz%2FBMgSatGPkUTEOxV2X%2FLOyjDROsJ19FvNNKMw5yicOOEoSV5MNfeJZMcMrATnPKHj0WAkGOOvI5zvgwx8Y6C0bbqA9%2BnVOuaxufQ8sV9mwfnslhjFjixenG%2FOFcXYANNy4vfete4N9Ce21TuOdxdjdU94D3n4MF5LqZ8dDZO72ytEiS7sW6JwwLWtzEpWgzsw2T1o5YhGw4vuehg7I6i3eW7gzCFnsFEjnhto%2BkRUmHu%2FVOLSi%2FSrKhLCYxThSaoqtCbXJyk2AwysO8xAY6pgH6qi5wgpKxC5JEWQrEBpFvPWkNlRNwDd%2FxelO8BIxkdGeC9UB7Ud9W3aAC6AhWeHKd6VnzmmpVsPsQ6kuyqYMLqPovdeAAnwa758eySLVdPZQLKDmjOq1cBzVluFUY%2Fj%2FD22VHhcDe9XpQ2GV73vbZ%2FKtYEHPTh3wo9%2FOQxgMHfa9ESELvz011AQOtR1SoWw3DcVOCJL%2BGEYH%2BwbnsYYnC25Lm2hSw&X-Amz-Signature=159bd270573bd76b336137aafd25719d914e2854953e021b558c820e75967eec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X2PED3A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT4S4bDY0eAyyihPSYRY17DSDuPiK9OnGBba6ookxPUAiAnV8sZTrgwR1L6bP3EKpJXhV4pcn1Aami2P82wM87IaSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMD8lfXcCOrhzcLrOuKtwDe4V%2FyltPIzvyWs7reLcwrutUHfzg4p9Eww38nuXrnhnBxQrYVWqdUSuUIgtI2qK52t77qmzNTum25tMGThU2yP%2BMQrznaxGtTYYZKBkXhiLmDCb2yquYLcmnV1Ciko5rv68wHqbUI1R1CrgUSmuUVZHDz5npSycgYocj9bsobgqaNkIxWjarl2Pt0taPUpDT5B4R6lr60DSpYzR5b%2BkyeoHUUjEkMQzeHA%2FvGbBom5sYMwuPvMS9%2FmKfMFEIjXDwA8WYH%2F%2FDNBnQxVSp1KKi4%2FPv4H3mf90WAuUmL6kEE28as9KIqm2QUkrHTGoU3bM0aIe6KaxgBmaSd%2FDOn52qp7mAEZN64Fo17xYC11q2pv9GKVSrz%2FBMgSatGPkUTEOxV2X%2FLOyjDROsJ19FvNNKMw5yicOOEoSV5MNfeJZMcMrATnPKHj0WAkGOOvI5zvgwx8Y6C0bbqA9%2BnVOuaxufQ8sV9mwfnslhjFjixenG%2FOFcXYANNy4vfete4N9Ce21TuOdxdjdU94D3n4MF5LqZ8dDZO72ytEiS7sW6JwwLWtzEpWgzsw2T1o5YhGw4vuehg7I6i3eW7gzCFnsFEjnhto%2BkRUmHu%2FVOLSi%2FSrKhLCYxThSaoqtCbXJyk2AwysO8xAY6pgH6qi5wgpKxC5JEWQrEBpFvPWkNlRNwDd%2FxelO8BIxkdGeC9UB7Ud9W3aAC6AhWeHKd6VnzmmpVsPsQ6kuyqYMLqPovdeAAnwa758eySLVdPZQLKDmjOq1cBzVluFUY%2Fj%2FD22VHhcDe9XpQ2GV73vbZ%2FKtYEHPTh3wo9%2FOQxgMHfa9ESELvz011AQOtR1SoWw3DcVOCJL%2BGEYH%2BwbnsYYnC25Lm2hSw&X-Amz-Signature=5606a17039efd564f699177675df03bfb9417e482fd927b709a851a7c9b399c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GQUP24D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5LDG6OyuvdaEXbwwWSqQkPwicAdW0u34qrxP%2BVJxb%2FwIgLebD%2FFPWsYkI1Xtd2PV68pUseT01KwRX2GUVXu%2B3Dx8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDf0b7BOG%2Bhyb7c7YCrcAw3H1hquIbwAS3VqcEwyuQZOzS3OBv6dNBgUH413aopOBMtb7Rb7%2FYeXJxmTRAregMgZCZsgBOrbUC%2FjTlE3ohiPWBQbwJbusFPzWzM59yXGO2L0LMUXvawIIySzRFteFIGyHqXsySSI3PCiBiQubCvrWboCqyPBmEFNckwGBWqgZCV5Hz3jsGKU3NAf%2BhWYOn0dZd%2BBwh7gYPUDRV4Za1RhnTSq6CO4P%2BreXoP9TxgsPFQiWHmhbHwlRIK4P23zxaJ6gGGhpdMXfZ79qudgpqxTTPSstexKGame2ZkQsiHLBX0ubnsXACSdUiJpLoCRgEixlyggFoJpMtl5%2FCva5r1TGkdr5YuI6Y23ynOZpF2ikHhOjUQ1V8f7Ebj5aMuZm2t1XmpqMcmHkaQ61MVmCg6EmBbzCzy8vZhnBhth6d1MsSaTbhNlDi9jXQngbvy8H5X9kdAO3qxuxQKmMuUBkS3P980BEqiRFVgN2KNQXWMxaYcT98%2B4uly2ACEiEUq1fuYRvqUJmt%2FhlzllA%2BM6lyh1xzLPPIteFKCVzZQrm26tpXQtDmBhLkhw7Y5IsAH9mM2Pu42A68sRBY0iqVw52e9acZ0QZ2CnbR9vzY680ZzncjonngKs9T0PblABMNu6vMQGOqUBSwt39BQSUme3gAPSx3Yz792WH0EAKlhFnTuZ%2BOghSH1wFAMlMX%2BLEuU%2B5q9OQOBSiTican6AQFbCT%2FTQv2%2FP6Dso0QdJL8vR9Hgbj4pOL2aaD2uktvm76424ZcPfY0B1wO9gBWRqCvtENMNdx1RkpNF%2FlKzupS4QnAlCizDIL60%2BXtpP1YNTo%2FWjK0SNKHQseqVqhzifQOil%2F1IsDRFJOsb6TqU4&X-Amz-Signature=8cf17720534fdf701e4c0ce5895ec77a311ae9a80c72df560a2dfd6c6412c40e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GQUP24D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5LDG6OyuvdaEXbwwWSqQkPwicAdW0u34qrxP%2BVJxb%2FwIgLebD%2FFPWsYkI1Xtd2PV68pUseT01KwRX2GUVXu%2B3Dx8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDf0b7BOG%2Bhyb7c7YCrcAw3H1hquIbwAS3VqcEwyuQZOzS3OBv6dNBgUH413aopOBMtb7Rb7%2FYeXJxmTRAregMgZCZsgBOrbUC%2FjTlE3ohiPWBQbwJbusFPzWzM59yXGO2L0LMUXvawIIySzRFteFIGyHqXsySSI3PCiBiQubCvrWboCqyPBmEFNckwGBWqgZCV5Hz3jsGKU3NAf%2BhWYOn0dZd%2BBwh7gYPUDRV4Za1RhnTSq6CO4P%2BreXoP9TxgsPFQiWHmhbHwlRIK4P23zxaJ6gGGhpdMXfZ79qudgpqxTTPSstexKGame2ZkQsiHLBX0ubnsXACSdUiJpLoCRgEixlyggFoJpMtl5%2FCva5r1TGkdr5YuI6Y23ynOZpF2ikHhOjUQ1V8f7Ebj5aMuZm2t1XmpqMcmHkaQ61MVmCg6EmBbzCzy8vZhnBhth6d1MsSaTbhNlDi9jXQngbvy8H5X9kdAO3qxuxQKmMuUBkS3P980BEqiRFVgN2KNQXWMxaYcT98%2B4uly2ACEiEUq1fuYRvqUJmt%2FhlzllA%2BM6lyh1xzLPPIteFKCVzZQrm26tpXQtDmBhLkhw7Y5IsAH9mM2Pu42A68sRBY0iqVw52e9acZ0QZ2CnbR9vzY680ZzncjonngKs9T0PblABMNu6vMQGOqUBSwt39BQSUme3gAPSx3Yz792WH0EAKlhFnTuZ%2BOghSH1wFAMlMX%2BLEuU%2B5q9OQOBSiTican6AQFbCT%2FTQv2%2FP6Dso0QdJL8vR9Hgbj4pOL2aaD2uktvm76424ZcPfY0B1wO9gBWRqCvtENMNdx1RkpNF%2FlKzupS4QnAlCizDIL60%2BXtpP1YNTo%2FWjK0SNKHQseqVqhzifQOil%2F1IsDRFJOsb6TqU4&X-Amz-Signature=da784371f0fc38f5b435ce385ce53f73ee648573bad3a0d0bc13fce6c86e1f08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GQUP24D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5LDG6OyuvdaEXbwwWSqQkPwicAdW0u34qrxP%2BVJxb%2FwIgLebD%2FFPWsYkI1Xtd2PV68pUseT01KwRX2GUVXu%2B3Dx8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDf0b7BOG%2Bhyb7c7YCrcAw3H1hquIbwAS3VqcEwyuQZOzS3OBv6dNBgUH413aopOBMtb7Rb7%2FYeXJxmTRAregMgZCZsgBOrbUC%2FjTlE3ohiPWBQbwJbusFPzWzM59yXGO2L0LMUXvawIIySzRFteFIGyHqXsySSI3PCiBiQubCvrWboCqyPBmEFNckwGBWqgZCV5Hz3jsGKU3NAf%2BhWYOn0dZd%2BBwh7gYPUDRV4Za1RhnTSq6CO4P%2BreXoP9TxgsPFQiWHmhbHwlRIK4P23zxaJ6gGGhpdMXfZ79qudgpqxTTPSstexKGame2ZkQsiHLBX0ubnsXACSdUiJpLoCRgEixlyggFoJpMtl5%2FCva5r1TGkdr5YuI6Y23ynOZpF2ikHhOjUQ1V8f7Ebj5aMuZm2t1XmpqMcmHkaQ61MVmCg6EmBbzCzy8vZhnBhth6d1MsSaTbhNlDi9jXQngbvy8H5X9kdAO3qxuxQKmMuUBkS3P980BEqiRFVgN2KNQXWMxaYcT98%2B4uly2ACEiEUq1fuYRvqUJmt%2FhlzllA%2BM6lyh1xzLPPIteFKCVzZQrm26tpXQtDmBhLkhw7Y5IsAH9mM2Pu42A68sRBY0iqVw52e9acZ0QZ2CnbR9vzY680ZzncjonngKs9T0PblABMNu6vMQGOqUBSwt39BQSUme3gAPSx3Yz792WH0EAKlhFnTuZ%2BOghSH1wFAMlMX%2BLEuU%2B5q9OQOBSiTican6AQFbCT%2FTQv2%2FP6Dso0QdJL8vR9Hgbj4pOL2aaD2uktvm76424ZcPfY0B1wO9gBWRqCvtENMNdx1RkpNF%2FlKzupS4QnAlCizDIL60%2BXtpP1YNTo%2FWjK0SNKHQseqVqhzifQOil%2F1IsDRFJOsb6TqU4&X-Amz-Signature=8b9d4159e8f0630c489d1221580c3c8067c8fdaccb5ad02f88841844d2b15834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GQUP24D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5LDG6OyuvdaEXbwwWSqQkPwicAdW0u34qrxP%2BVJxb%2FwIgLebD%2FFPWsYkI1Xtd2PV68pUseT01KwRX2GUVXu%2B3Dx8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDf0b7BOG%2Bhyb7c7YCrcAw3H1hquIbwAS3VqcEwyuQZOzS3OBv6dNBgUH413aopOBMtb7Rb7%2FYeXJxmTRAregMgZCZsgBOrbUC%2FjTlE3ohiPWBQbwJbusFPzWzM59yXGO2L0LMUXvawIIySzRFteFIGyHqXsySSI3PCiBiQubCvrWboCqyPBmEFNckwGBWqgZCV5Hz3jsGKU3NAf%2BhWYOn0dZd%2BBwh7gYPUDRV4Za1RhnTSq6CO4P%2BreXoP9TxgsPFQiWHmhbHwlRIK4P23zxaJ6gGGhpdMXfZ79qudgpqxTTPSstexKGame2ZkQsiHLBX0ubnsXACSdUiJpLoCRgEixlyggFoJpMtl5%2FCva5r1TGkdr5YuI6Y23ynOZpF2ikHhOjUQ1V8f7Ebj5aMuZm2t1XmpqMcmHkaQ61MVmCg6EmBbzCzy8vZhnBhth6d1MsSaTbhNlDi9jXQngbvy8H5X9kdAO3qxuxQKmMuUBkS3P980BEqiRFVgN2KNQXWMxaYcT98%2B4uly2ACEiEUq1fuYRvqUJmt%2FhlzllA%2BM6lyh1xzLPPIteFKCVzZQrm26tpXQtDmBhLkhw7Y5IsAH9mM2Pu42A68sRBY0iqVw52e9acZ0QZ2CnbR9vzY680ZzncjonngKs9T0PblABMNu6vMQGOqUBSwt39BQSUme3gAPSx3Yz792WH0EAKlhFnTuZ%2BOghSH1wFAMlMX%2BLEuU%2B5q9OQOBSiTican6AQFbCT%2FTQv2%2FP6Dso0QdJL8vR9Hgbj4pOL2aaD2uktvm76424ZcPfY0B1wO9gBWRqCvtENMNdx1RkpNF%2FlKzupS4QnAlCizDIL60%2BXtpP1YNTo%2FWjK0SNKHQseqVqhzifQOil%2F1IsDRFJOsb6TqU4&X-Amz-Signature=3f0a4a2ee9fe01300a18eb6830698058aa9d052cabc256312de467ed54c18d80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GQUP24D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5LDG6OyuvdaEXbwwWSqQkPwicAdW0u34qrxP%2BVJxb%2FwIgLebD%2FFPWsYkI1Xtd2PV68pUseT01KwRX2GUVXu%2B3Dx8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDf0b7BOG%2Bhyb7c7YCrcAw3H1hquIbwAS3VqcEwyuQZOzS3OBv6dNBgUH413aopOBMtb7Rb7%2FYeXJxmTRAregMgZCZsgBOrbUC%2FjTlE3ohiPWBQbwJbusFPzWzM59yXGO2L0LMUXvawIIySzRFteFIGyHqXsySSI3PCiBiQubCvrWboCqyPBmEFNckwGBWqgZCV5Hz3jsGKU3NAf%2BhWYOn0dZd%2BBwh7gYPUDRV4Za1RhnTSq6CO4P%2BreXoP9TxgsPFQiWHmhbHwlRIK4P23zxaJ6gGGhpdMXfZ79qudgpqxTTPSstexKGame2ZkQsiHLBX0ubnsXACSdUiJpLoCRgEixlyggFoJpMtl5%2FCva5r1TGkdr5YuI6Y23ynOZpF2ikHhOjUQ1V8f7Ebj5aMuZm2t1XmpqMcmHkaQ61MVmCg6EmBbzCzy8vZhnBhth6d1MsSaTbhNlDi9jXQngbvy8H5X9kdAO3qxuxQKmMuUBkS3P980BEqiRFVgN2KNQXWMxaYcT98%2B4uly2ACEiEUq1fuYRvqUJmt%2FhlzllA%2BM6lyh1xzLPPIteFKCVzZQrm26tpXQtDmBhLkhw7Y5IsAH9mM2Pu42A68sRBY0iqVw52e9acZ0QZ2CnbR9vzY680ZzncjonngKs9T0PblABMNu6vMQGOqUBSwt39BQSUme3gAPSx3Yz792WH0EAKlhFnTuZ%2BOghSH1wFAMlMX%2BLEuU%2B5q9OQOBSiTican6AQFbCT%2FTQv2%2FP6Dso0QdJL8vR9Hgbj4pOL2aaD2uktvm76424ZcPfY0B1wO9gBWRqCvtENMNdx1RkpNF%2FlKzupS4QnAlCizDIL60%2BXtpP1YNTo%2FWjK0SNKHQseqVqhzifQOil%2F1IsDRFJOsb6TqU4&X-Amz-Signature=8c5c62765c0ff728e25746e99b7f9926c33420d7ce6d8faa76bec8512f43fc3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GQUP24D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5LDG6OyuvdaEXbwwWSqQkPwicAdW0u34qrxP%2BVJxb%2FwIgLebD%2FFPWsYkI1Xtd2PV68pUseT01KwRX2GUVXu%2B3Dx8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDf0b7BOG%2Bhyb7c7YCrcAw3H1hquIbwAS3VqcEwyuQZOzS3OBv6dNBgUH413aopOBMtb7Rb7%2FYeXJxmTRAregMgZCZsgBOrbUC%2FjTlE3ohiPWBQbwJbusFPzWzM59yXGO2L0LMUXvawIIySzRFteFIGyHqXsySSI3PCiBiQubCvrWboCqyPBmEFNckwGBWqgZCV5Hz3jsGKU3NAf%2BhWYOn0dZd%2BBwh7gYPUDRV4Za1RhnTSq6CO4P%2BreXoP9TxgsPFQiWHmhbHwlRIK4P23zxaJ6gGGhpdMXfZ79qudgpqxTTPSstexKGame2ZkQsiHLBX0ubnsXACSdUiJpLoCRgEixlyggFoJpMtl5%2FCva5r1TGkdr5YuI6Y23ynOZpF2ikHhOjUQ1V8f7Ebj5aMuZm2t1XmpqMcmHkaQ61MVmCg6EmBbzCzy8vZhnBhth6d1MsSaTbhNlDi9jXQngbvy8H5X9kdAO3qxuxQKmMuUBkS3P980BEqiRFVgN2KNQXWMxaYcT98%2B4uly2ACEiEUq1fuYRvqUJmt%2FhlzllA%2BM6lyh1xzLPPIteFKCVzZQrm26tpXQtDmBhLkhw7Y5IsAH9mM2Pu42A68sRBY0iqVw52e9acZ0QZ2CnbR9vzY680ZzncjonngKs9T0PblABMNu6vMQGOqUBSwt39BQSUme3gAPSx3Yz792WH0EAKlhFnTuZ%2BOghSH1wFAMlMX%2BLEuU%2B5q9OQOBSiTican6AQFbCT%2FTQv2%2FP6Dso0QdJL8vR9Hgbj4pOL2aaD2uktvm76424ZcPfY0B1wO9gBWRqCvtENMNdx1RkpNF%2FlKzupS4QnAlCizDIL60%2BXtpP1YNTo%2FWjK0SNKHQseqVqhzifQOil%2F1IsDRFJOsb6TqU4&X-Amz-Signature=3b10f429eedbb67ca8b14e6bdf9986c4c36588c7cc83bf847d7bf31beb5ee224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GQUP24D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5LDG6OyuvdaEXbwwWSqQkPwicAdW0u34qrxP%2BVJxb%2FwIgLebD%2FFPWsYkI1Xtd2PV68pUseT01KwRX2GUVXu%2B3Dx8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDf0b7BOG%2Bhyb7c7YCrcAw3H1hquIbwAS3VqcEwyuQZOzS3OBv6dNBgUH413aopOBMtb7Rb7%2FYeXJxmTRAregMgZCZsgBOrbUC%2FjTlE3ohiPWBQbwJbusFPzWzM59yXGO2L0LMUXvawIIySzRFteFIGyHqXsySSI3PCiBiQubCvrWboCqyPBmEFNckwGBWqgZCV5Hz3jsGKU3NAf%2BhWYOn0dZd%2BBwh7gYPUDRV4Za1RhnTSq6CO4P%2BreXoP9TxgsPFQiWHmhbHwlRIK4P23zxaJ6gGGhpdMXfZ79qudgpqxTTPSstexKGame2ZkQsiHLBX0ubnsXACSdUiJpLoCRgEixlyggFoJpMtl5%2FCva5r1TGkdr5YuI6Y23ynOZpF2ikHhOjUQ1V8f7Ebj5aMuZm2t1XmpqMcmHkaQ61MVmCg6EmBbzCzy8vZhnBhth6d1MsSaTbhNlDi9jXQngbvy8H5X9kdAO3qxuxQKmMuUBkS3P980BEqiRFVgN2KNQXWMxaYcT98%2B4uly2ACEiEUq1fuYRvqUJmt%2FhlzllA%2BM6lyh1xzLPPIteFKCVzZQrm26tpXQtDmBhLkhw7Y5IsAH9mM2Pu42A68sRBY0iqVw52e9acZ0QZ2CnbR9vzY680ZzncjonngKs9T0PblABMNu6vMQGOqUBSwt39BQSUme3gAPSx3Yz792WH0EAKlhFnTuZ%2BOghSH1wFAMlMX%2BLEuU%2B5q9OQOBSiTican6AQFbCT%2FTQv2%2FP6Dso0QdJL8vR9Hgbj4pOL2aaD2uktvm76424ZcPfY0B1wO9gBWRqCvtENMNdx1RkpNF%2FlKzupS4QnAlCizDIL60%2BXtpP1YNTo%2FWjK0SNKHQseqVqhzifQOil%2F1IsDRFJOsb6TqU4&X-Amz-Signature=8b9d4159e8f0630c489d1221580c3c8067c8fdaccb5ad02f88841844d2b15834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GQUP24D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5LDG6OyuvdaEXbwwWSqQkPwicAdW0u34qrxP%2BVJxb%2FwIgLebD%2FFPWsYkI1Xtd2PV68pUseT01KwRX2GUVXu%2B3Dx8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDf0b7BOG%2Bhyb7c7YCrcAw3H1hquIbwAS3VqcEwyuQZOzS3OBv6dNBgUH413aopOBMtb7Rb7%2FYeXJxmTRAregMgZCZsgBOrbUC%2FjTlE3ohiPWBQbwJbusFPzWzM59yXGO2L0LMUXvawIIySzRFteFIGyHqXsySSI3PCiBiQubCvrWboCqyPBmEFNckwGBWqgZCV5Hz3jsGKU3NAf%2BhWYOn0dZd%2BBwh7gYPUDRV4Za1RhnTSq6CO4P%2BreXoP9TxgsPFQiWHmhbHwlRIK4P23zxaJ6gGGhpdMXfZ79qudgpqxTTPSstexKGame2ZkQsiHLBX0ubnsXACSdUiJpLoCRgEixlyggFoJpMtl5%2FCva5r1TGkdr5YuI6Y23ynOZpF2ikHhOjUQ1V8f7Ebj5aMuZm2t1XmpqMcmHkaQ61MVmCg6EmBbzCzy8vZhnBhth6d1MsSaTbhNlDi9jXQngbvy8H5X9kdAO3qxuxQKmMuUBkS3P980BEqiRFVgN2KNQXWMxaYcT98%2B4uly2ACEiEUq1fuYRvqUJmt%2FhlzllA%2BM6lyh1xzLPPIteFKCVzZQrm26tpXQtDmBhLkhw7Y5IsAH9mM2Pu42A68sRBY0iqVw52e9acZ0QZ2CnbR9vzY680ZzncjonngKs9T0PblABMNu6vMQGOqUBSwt39BQSUme3gAPSx3Yz792WH0EAKlhFnTuZ%2BOghSH1wFAMlMX%2BLEuU%2B5q9OQOBSiTican6AQFbCT%2FTQv2%2FP6Dso0QdJL8vR9Hgbj4pOL2aaD2uktvm76424ZcPfY0B1wO9gBWRqCvtENMNdx1RkpNF%2FlKzupS4QnAlCizDIL60%2BXtpP1YNTo%2FWjK0SNKHQseqVqhzifQOil%2F1IsDRFJOsb6TqU4&X-Amz-Signature=9c9d9150f3992cc151e3ed6e3089501ca0b8ea65fb10f3e3c38b74ce8baf4615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GQUP24D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5LDG6OyuvdaEXbwwWSqQkPwicAdW0u34qrxP%2BVJxb%2FwIgLebD%2FFPWsYkI1Xtd2PV68pUseT01KwRX2GUVXu%2B3Dx8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDf0b7BOG%2Bhyb7c7YCrcAw3H1hquIbwAS3VqcEwyuQZOzS3OBv6dNBgUH413aopOBMtb7Rb7%2FYeXJxmTRAregMgZCZsgBOrbUC%2FjTlE3ohiPWBQbwJbusFPzWzM59yXGO2L0LMUXvawIIySzRFteFIGyHqXsySSI3PCiBiQubCvrWboCqyPBmEFNckwGBWqgZCV5Hz3jsGKU3NAf%2BhWYOn0dZd%2BBwh7gYPUDRV4Za1RhnTSq6CO4P%2BreXoP9TxgsPFQiWHmhbHwlRIK4P23zxaJ6gGGhpdMXfZ79qudgpqxTTPSstexKGame2ZkQsiHLBX0ubnsXACSdUiJpLoCRgEixlyggFoJpMtl5%2FCva5r1TGkdr5YuI6Y23ynOZpF2ikHhOjUQ1V8f7Ebj5aMuZm2t1XmpqMcmHkaQ61MVmCg6EmBbzCzy8vZhnBhth6d1MsSaTbhNlDi9jXQngbvy8H5X9kdAO3qxuxQKmMuUBkS3P980BEqiRFVgN2KNQXWMxaYcT98%2B4uly2ACEiEUq1fuYRvqUJmt%2FhlzllA%2BM6lyh1xzLPPIteFKCVzZQrm26tpXQtDmBhLkhw7Y5IsAH9mM2Pu42A68sRBY0iqVw52e9acZ0QZ2CnbR9vzY680ZzncjonngKs9T0PblABMNu6vMQGOqUBSwt39BQSUme3gAPSx3Yz792WH0EAKlhFnTuZ%2BOghSH1wFAMlMX%2BLEuU%2B5q9OQOBSiTican6AQFbCT%2FTQv2%2FP6Dso0QdJL8vR9Hgbj4pOL2aaD2uktvm76424ZcPfY0B1wO9gBWRqCvtENMNdx1RkpNF%2FlKzupS4QnAlCizDIL60%2BXtpP1YNTo%2FWjK0SNKHQseqVqhzifQOil%2F1IsDRFJOsb6TqU4&X-Amz-Signature=8ae88dd9ceb3ddd7a705867f6b70091281dd85778375a0f73e3fe612d275132e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GQUP24D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5LDG6OyuvdaEXbwwWSqQkPwicAdW0u34qrxP%2BVJxb%2FwIgLebD%2FFPWsYkI1Xtd2PV68pUseT01KwRX2GUVXu%2B3Dx8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDf0b7BOG%2Bhyb7c7YCrcAw3H1hquIbwAS3VqcEwyuQZOzS3OBv6dNBgUH413aopOBMtb7Rb7%2FYeXJxmTRAregMgZCZsgBOrbUC%2FjTlE3ohiPWBQbwJbusFPzWzM59yXGO2L0LMUXvawIIySzRFteFIGyHqXsySSI3PCiBiQubCvrWboCqyPBmEFNckwGBWqgZCV5Hz3jsGKU3NAf%2BhWYOn0dZd%2BBwh7gYPUDRV4Za1RhnTSq6CO4P%2BreXoP9TxgsPFQiWHmhbHwlRIK4P23zxaJ6gGGhpdMXfZ79qudgpqxTTPSstexKGame2ZkQsiHLBX0ubnsXACSdUiJpLoCRgEixlyggFoJpMtl5%2FCva5r1TGkdr5YuI6Y23ynOZpF2ikHhOjUQ1V8f7Ebj5aMuZm2t1XmpqMcmHkaQ61MVmCg6EmBbzCzy8vZhnBhth6d1MsSaTbhNlDi9jXQngbvy8H5X9kdAO3qxuxQKmMuUBkS3P980BEqiRFVgN2KNQXWMxaYcT98%2B4uly2ACEiEUq1fuYRvqUJmt%2FhlzllA%2BM6lyh1xzLPPIteFKCVzZQrm26tpXQtDmBhLkhw7Y5IsAH9mM2Pu42A68sRBY0iqVw52e9acZ0QZ2CnbR9vzY680ZzncjonngKs9T0PblABMNu6vMQGOqUBSwt39BQSUme3gAPSx3Yz792WH0EAKlhFnTuZ%2BOghSH1wFAMlMX%2BLEuU%2B5q9OQOBSiTican6AQFbCT%2FTQv2%2FP6Dso0QdJL8vR9Hgbj4pOL2aaD2uktvm76424ZcPfY0B1wO9gBWRqCvtENMNdx1RkpNF%2FlKzupS4QnAlCizDIL60%2BXtpP1YNTo%2FWjK0SNKHQseqVqhzifQOil%2F1IsDRFJOsb6TqU4&X-Amz-Signature=0b884268eb1e0e2578360e8107c5b48029cc30bdb1e72d98bade794644374dc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
