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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6A5LK2%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEsx8pjfAY3th8UQBbHjGQ1%2Fw9%2FElP31F5tIIZvI97F1AiBfV27xqshob2%2FZbxKTALiEFIi5ZQLd9lC2rP%2BuciTS%2Fir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMQ8A8EG%2FSv8caZtyMKtwDELgCMEqMEZ3%2Bz8HEtyWTyLKRH9RcNCVokDbCLJjXWmJ3JCeosQu7rlNH3DnYTrpEe5HvVv9PR6CD0EfbIFgCN36AA4y53PSqjt8qYTE5dmL5sxoG%2FyuuJs4lekh6c3eLdjW53WxJ8%2FttOArCcWM6k6Z3jyTk%2BIMT0yMKPxcSnxGIehBooJsJwcQo%2F07%2Bko%2FCGlncJ3JYL0yvaL2N8I%2BEd1OoRKUYp2YcM9Jf%2BZkxIfJzzhGEngRu4Ja6bOYhR%2BA8dUoW5lFcRTzu2rvW3l%2BWs0FhKX5XAEqPncTAV3e7IUcJ6QD3sy%2BpO0432S3nqRkCYrjWrVhsdyYdxJTvkPNdSRPo1d86Vvcy9SsszNNqPfPP92j3ziUnxlGyEnuNWjdwDbwRWG7KeqrzGHItPRYpr4ITmVZH8961qaFt3qgzFXxfoqhjnZGaxyHJnt3V5g1ogQBT6hSjmALzvsAvGaZMdy9%2FFaFlnmomzL0jYWCjjVGw0pFw2PIV8BPvrPoamG1I%2B7jpwOuMNpOqPjWePFEvUnDmj08%2BnPLjQNaLWCrOZQxSXQmWiB4UCdusXX1LK%2Faf7GX18VbNYJQamQxdFflBVpfLCXevWRM5oObNSOWSLANFO7HbGw27hTl0tr4w2O%2FVywY6pgFvOlpiTcTWV%2BuL69ZEGSHBahw6FWNkj2LvvBz%2BP9Dy2soIrf4CzwKqndw%2FvbjH4RwhDPHupeJ335acMuFgpvi96omrfVSMc5PPfK8%2FCIT93mVXyHTGNexJFYDJtBniArPJg6pEAMp1yTE9WBA3skW%2BmQkR5nStpK79H2nVoJzbisv6GzFxCEcXQX9NYTFfZ1AuF9LB0NscJZ1hBgkxvzq11diBcCDO&X-Amz-Signature=45995aed93621c84aa20248391c656417bb68ec9445e43ff78459efb38d51d6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6A5LK2%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEsx8pjfAY3th8UQBbHjGQ1%2Fw9%2FElP31F5tIIZvI97F1AiBfV27xqshob2%2FZbxKTALiEFIi5ZQLd9lC2rP%2BuciTS%2Fir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMQ8A8EG%2FSv8caZtyMKtwDELgCMEqMEZ3%2Bz8HEtyWTyLKRH9RcNCVokDbCLJjXWmJ3JCeosQu7rlNH3DnYTrpEe5HvVv9PR6CD0EfbIFgCN36AA4y53PSqjt8qYTE5dmL5sxoG%2FyuuJs4lekh6c3eLdjW53WxJ8%2FttOArCcWM6k6Z3jyTk%2BIMT0yMKPxcSnxGIehBooJsJwcQo%2F07%2Bko%2FCGlncJ3JYL0yvaL2N8I%2BEd1OoRKUYp2YcM9Jf%2BZkxIfJzzhGEngRu4Ja6bOYhR%2BA8dUoW5lFcRTzu2rvW3l%2BWs0FhKX5XAEqPncTAV3e7IUcJ6QD3sy%2BpO0432S3nqRkCYrjWrVhsdyYdxJTvkPNdSRPo1d86Vvcy9SsszNNqPfPP92j3ziUnxlGyEnuNWjdwDbwRWG7KeqrzGHItPRYpr4ITmVZH8961qaFt3qgzFXxfoqhjnZGaxyHJnt3V5g1ogQBT6hSjmALzvsAvGaZMdy9%2FFaFlnmomzL0jYWCjjVGw0pFw2PIV8BPvrPoamG1I%2B7jpwOuMNpOqPjWePFEvUnDmj08%2BnPLjQNaLWCrOZQxSXQmWiB4UCdusXX1LK%2Faf7GX18VbNYJQamQxdFflBVpfLCXevWRM5oObNSOWSLANFO7HbGw27hTl0tr4w2O%2FVywY6pgFvOlpiTcTWV%2BuL69ZEGSHBahw6FWNkj2LvvBz%2BP9Dy2soIrf4CzwKqndw%2FvbjH4RwhDPHupeJ335acMuFgpvi96omrfVSMc5PPfK8%2FCIT93mVXyHTGNexJFYDJtBniArPJg6pEAMp1yTE9WBA3skW%2BmQkR5nStpK79H2nVoJzbisv6GzFxCEcXQX9NYTFfZ1AuF9LB0NscJZ1hBgkxvzq11diBcCDO&X-Amz-Signature=908df3f80c11ceae4b67570b43a129e7690eefb40234ac6fc915553e6cdf9951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6A5LK2%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEsx8pjfAY3th8UQBbHjGQ1%2Fw9%2FElP31F5tIIZvI97F1AiBfV27xqshob2%2FZbxKTALiEFIi5ZQLd9lC2rP%2BuciTS%2Fir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMQ8A8EG%2FSv8caZtyMKtwDELgCMEqMEZ3%2Bz8HEtyWTyLKRH9RcNCVokDbCLJjXWmJ3JCeosQu7rlNH3DnYTrpEe5HvVv9PR6CD0EfbIFgCN36AA4y53PSqjt8qYTE5dmL5sxoG%2FyuuJs4lekh6c3eLdjW53WxJ8%2FttOArCcWM6k6Z3jyTk%2BIMT0yMKPxcSnxGIehBooJsJwcQo%2F07%2Bko%2FCGlncJ3JYL0yvaL2N8I%2BEd1OoRKUYp2YcM9Jf%2BZkxIfJzzhGEngRu4Ja6bOYhR%2BA8dUoW5lFcRTzu2rvW3l%2BWs0FhKX5XAEqPncTAV3e7IUcJ6QD3sy%2BpO0432S3nqRkCYrjWrVhsdyYdxJTvkPNdSRPo1d86Vvcy9SsszNNqPfPP92j3ziUnxlGyEnuNWjdwDbwRWG7KeqrzGHItPRYpr4ITmVZH8961qaFt3qgzFXxfoqhjnZGaxyHJnt3V5g1ogQBT6hSjmALzvsAvGaZMdy9%2FFaFlnmomzL0jYWCjjVGw0pFw2PIV8BPvrPoamG1I%2B7jpwOuMNpOqPjWePFEvUnDmj08%2BnPLjQNaLWCrOZQxSXQmWiB4UCdusXX1LK%2Faf7GX18VbNYJQamQxdFflBVpfLCXevWRM5oObNSOWSLANFO7HbGw27hTl0tr4w2O%2FVywY6pgFvOlpiTcTWV%2BuL69ZEGSHBahw6FWNkj2LvvBz%2BP9Dy2soIrf4CzwKqndw%2FvbjH4RwhDPHupeJ335acMuFgpvi96omrfVSMc5PPfK8%2FCIT93mVXyHTGNexJFYDJtBniArPJg6pEAMp1yTE9WBA3skW%2BmQkR5nStpK79H2nVoJzbisv6GzFxCEcXQX9NYTFfZ1AuF9LB0NscJZ1hBgkxvzq11diBcCDO&X-Amz-Signature=7264aae3b17ef1b79952e95ce16bcadc8c89be061ce0216f872dc838e6938271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6A5LK2%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEsx8pjfAY3th8UQBbHjGQ1%2Fw9%2FElP31F5tIIZvI97F1AiBfV27xqshob2%2FZbxKTALiEFIi5ZQLd9lC2rP%2BuciTS%2Fir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMQ8A8EG%2FSv8caZtyMKtwDELgCMEqMEZ3%2Bz8HEtyWTyLKRH9RcNCVokDbCLJjXWmJ3JCeosQu7rlNH3DnYTrpEe5HvVv9PR6CD0EfbIFgCN36AA4y53PSqjt8qYTE5dmL5sxoG%2FyuuJs4lekh6c3eLdjW53WxJ8%2FttOArCcWM6k6Z3jyTk%2BIMT0yMKPxcSnxGIehBooJsJwcQo%2F07%2Bko%2FCGlncJ3JYL0yvaL2N8I%2BEd1OoRKUYp2YcM9Jf%2BZkxIfJzzhGEngRu4Ja6bOYhR%2BA8dUoW5lFcRTzu2rvW3l%2BWs0FhKX5XAEqPncTAV3e7IUcJ6QD3sy%2BpO0432S3nqRkCYrjWrVhsdyYdxJTvkPNdSRPo1d86Vvcy9SsszNNqPfPP92j3ziUnxlGyEnuNWjdwDbwRWG7KeqrzGHItPRYpr4ITmVZH8961qaFt3qgzFXxfoqhjnZGaxyHJnt3V5g1ogQBT6hSjmALzvsAvGaZMdy9%2FFaFlnmomzL0jYWCjjVGw0pFw2PIV8BPvrPoamG1I%2B7jpwOuMNpOqPjWePFEvUnDmj08%2BnPLjQNaLWCrOZQxSXQmWiB4UCdusXX1LK%2Faf7GX18VbNYJQamQxdFflBVpfLCXevWRM5oObNSOWSLANFO7HbGw27hTl0tr4w2O%2FVywY6pgFvOlpiTcTWV%2BuL69ZEGSHBahw6FWNkj2LvvBz%2BP9Dy2soIrf4CzwKqndw%2FvbjH4RwhDPHupeJ335acMuFgpvi96omrfVSMc5PPfK8%2FCIT93mVXyHTGNexJFYDJtBniArPJg6pEAMp1yTE9WBA3skW%2BmQkR5nStpK79H2nVoJzbisv6GzFxCEcXQX9NYTFfZ1AuF9LB0NscJZ1hBgkxvzq11diBcCDO&X-Amz-Signature=83b7d915be28743c2aa0b39f7318c1ebf44ec78ef41a933b9f98bfb4db8bf1ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6A5LK2%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEsx8pjfAY3th8UQBbHjGQ1%2Fw9%2FElP31F5tIIZvI97F1AiBfV27xqshob2%2FZbxKTALiEFIi5ZQLd9lC2rP%2BuciTS%2Fir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMQ8A8EG%2FSv8caZtyMKtwDELgCMEqMEZ3%2Bz8HEtyWTyLKRH9RcNCVokDbCLJjXWmJ3JCeosQu7rlNH3DnYTrpEe5HvVv9PR6CD0EfbIFgCN36AA4y53PSqjt8qYTE5dmL5sxoG%2FyuuJs4lekh6c3eLdjW53WxJ8%2FttOArCcWM6k6Z3jyTk%2BIMT0yMKPxcSnxGIehBooJsJwcQo%2F07%2Bko%2FCGlncJ3JYL0yvaL2N8I%2BEd1OoRKUYp2YcM9Jf%2BZkxIfJzzhGEngRu4Ja6bOYhR%2BA8dUoW5lFcRTzu2rvW3l%2BWs0FhKX5XAEqPncTAV3e7IUcJ6QD3sy%2BpO0432S3nqRkCYrjWrVhsdyYdxJTvkPNdSRPo1d86Vvcy9SsszNNqPfPP92j3ziUnxlGyEnuNWjdwDbwRWG7KeqrzGHItPRYpr4ITmVZH8961qaFt3qgzFXxfoqhjnZGaxyHJnt3V5g1ogQBT6hSjmALzvsAvGaZMdy9%2FFaFlnmomzL0jYWCjjVGw0pFw2PIV8BPvrPoamG1I%2B7jpwOuMNpOqPjWePFEvUnDmj08%2BnPLjQNaLWCrOZQxSXQmWiB4UCdusXX1LK%2Faf7GX18VbNYJQamQxdFflBVpfLCXevWRM5oObNSOWSLANFO7HbGw27hTl0tr4w2O%2FVywY6pgFvOlpiTcTWV%2BuL69ZEGSHBahw6FWNkj2LvvBz%2BP9Dy2soIrf4CzwKqndw%2FvbjH4RwhDPHupeJ335acMuFgpvi96omrfVSMc5PPfK8%2FCIT93mVXyHTGNexJFYDJtBniArPJg6pEAMp1yTE9WBA3skW%2BmQkR5nStpK79H2nVoJzbisv6GzFxCEcXQX9NYTFfZ1AuF9LB0NscJZ1hBgkxvzq11diBcCDO&X-Amz-Signature=3a3552096cac8ced6f8c8af76324ae59cd5fe1f54b9981964ce37d3d94ab1b7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6A5LK2%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEsx8pjfAY3th8UQBbHjGQ1%2Fw9%2FElP31F5tIIZvI97F1AiBfV27xqshob2%2FZbxKTALiEFIi5ZQLd9lC2rP%2BuciTS%2Fir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMQ8A8EG%2FSv8caZtyMKtwDELgCMEqMEZ3%2Bz8HEtyWTyLKRH9RcNCVokDbCLJjXWmJ3JCeosQu7rlNH3DnYTrpEe5HvVv9PR6CD0EfbIFgCN36AA4y53PSqjt8qYTE5dmL5sxoG%2FyuuJs4lekh6c3eLdjW53WxJ8%2FttOArCcWM6k6Z3jyTk%2BIMT0yMKPxcSnxGIehBooJsJwcQo%2F07%2Bko%2FCGlncJ3JYL0yvaL2N8I%2BEd1OoRKUYp2YcM9Jf%2BZkxIfJzzhGEngRu4Ja6bOYhR%2BA8dUoW5lFcRTzu2rvW3l%2BWs0FhKX5XAEqPncTAV3e7IUcJ6QD3sy%2BpO0432S3nqRkCYrjWrVhsdyYdxJTvkPNdSRPo1d86Vvcy9SsszNNqPfPP92j3ziUnxlGyEnuNWjdwDbwRWG7KeqrzGHItPRYpr4ITmVZH8961qaFt3qgzFXxfoqhjnZGaxyHJnt3V5g1ogQBT6hSjmALzvsAvGaZMdy9%2FFaFlnmomzL0jYWCjjVGw0pFw2PIV8BPvrPoamG1I%2B7jpwOuMNpOqPjWePFEvUnDmj08%2BnPLjQNaLWCrOZQxSXQmWiB4UCdusXX1LK%2Faf7GX18VbNYJQamQxdFflBVpfLCXevWRM5oObNSOWSLANFO7HbGw27hTl0tr4w2O%2FVywY6pgFvOlpiTcTWV%2BuL69ZEGSHBahw6FWNkj2LvvBz%2BP9Dy2soIrf4CzwKqndw%2FvbjH4RwhDPHupeJ335acMuFgpvi96omrfVSMc5PPfK8%2FCIT93mVXyHTGNexJFYDJtBniArPJg6pEAMp1yTE9WBA3skW%2BmQkR5nStpK79H2nVoJzbisv6GzFxCEcXQX9NYTFfZ1AuF9LB0NscJZ1hBgkxvzq11diBcCDO&X-Amz-Signature=9705c92f5f460475e8ab8beaf788c1c9f16e57f50a8bfeeaf336f6c820dac55c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6A5LK2%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEsx8pjfAY3th8UQBbHjGQ1%2Fw9%2FElP31F5tIIZvI97F1AiBfV27xqshob2%2FZbxKTALiEFIi5ZQLd9lC2rP%2BuciTS%2Fir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMQ8A8EG%2FSv8caZtyMKtwDELgCMEqMEZ3%2Bz8HEtyWTyLKRH9RcNCVokDbCLJjXWmJ3JCeosQu7rlNH3DnYTrpEe5HvVv9PR6CD0EfbIFgCN36AA4y53PSqjt8qYTE5dmL5sxoG%2FyuuJs4lekh6c3eLdjW53WxJ8%2FttOArCcWM6k6Z3jyTk%2BIMT0yMKPxcSnxGIehBooJsJwcQo%2F07%2Bko%2FCGlncJ3JYL0yvaL2N8I%2BEd1OoRKUYp2YcM9Jf%2BZkxIfJzzhGEngRu4Ja6bOYhR%2BA8dUoW5lFcRTzu2rvW3l%2BWs0FhKX5XAEqPncTAV3e7IUcJ6QD3sy%2BpO0432S3nqRkCYrjWrVhsdyYdxJTvkPNdSRPo1d86Vvcy9SsszNNqPfPP92j3ziUnxlGyEnuNWjdwDbwRWG7KeqrzGHItPRYpr4ITmVZH8961qaFt3qgzFXxfoqhjnZGaxyHJnt3V5g1ogQBT6hSjmALzvsAvGaZMdy9%2FFaFlnmomzL0jYWCjjVGw0pFw2PIV8BPvrPoamG1I%2B7jpwOuMNpOqPjWePFEvUnDmj08%2BnPLjQNaLWCrOZQxSXQmWiB4UCdusXX1LK%2Faf7GX18VbNYJQamQxdFflBVpfLCXevWRM5oObNSOWSLANFO7HbGw27hTl0tr4w2O%2FVywY6pgFvOlpiTcTWV%2BuL69ZEGSHBahw6FWNkj2LvvBz%2BP9Dy2soIrf4CzwKqndw%2FvbjH4RwhDPHupeJ335acMuFgpvi96omrfVSMc5PPfK8%2FCIT93mVXyHTGNexJFYDJtBniArPJg6pEAMp1yTE9WBA3skW%2BmQkR5nStpK79H2nVoJzbisv6GzFxCEcXQX9NYTFfZ1AuF9LB0NscJZ1hBgkxvzq11diBcCDO&X-Amz-Signature=6edd0891aba2851b4594a7ad730276e591fbead75eb14008f83b00fd6b950203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6A5LK2%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEsx8pjfAY3th8UQBbHjGQ1%2Fw9%2FElP31F5tIIZvI97F1AiBfV27xqshob2%2FZbxKTALiEFIi5ZQLd9lC2rP%2BuciTS%2Fir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMQ8A8EG%2FSv8caZtyMKtwDELgCMEqMEZ3%2Bz8HEtyWTyLKRH9RcNCVokDbCLJjXWmJ3JCeosQu7rlNH3DnYTrpEe5HvVv9PR6CD0EfbIFgCN36AA4y53PSqjt8qYTE5dmL5sxoG%2FyuuJs4lekh6c3eLdjW53WxJ8%2FttOArCcWM6k6Z3jyTk%2BIMT0yMKPxcSnxGIehBooJsJwcQo%2F07%2Bko%2FCGlncJ3JYL0yvaL2N8I%2BEd1OoRKUYp2YcM9Jf%2BZkxIfJzzhGEngRu4Ja6bOYhR%2BA8dUoW5lFcRTzu2rvW3l%2BWs0FhKX5XAEqPncTAV3e7IUcJ6QD3sy%2BpO0432S3nqRkCYrjWrVhsdyYdxJTvkPNdSRPo1d86Vvcy9SsszNNqPfPP92j3ziUnxlGyEnuNWjdwDbwRWG7KeqrzGHItPRYpr4ITmVZH8961qaFt3qgzFXxfoqhjnZGaxyHJnt3V5g1ogQBT6hSjmALzvsAvGaZMdy9%2FFaFlnmomzL0jYWCjjVGw0pFw2PIV8BPvrPoamG1I%2B7jpwOuMNpOqPjWePFEvUnDmj08%2BnPLjQNaLWCrOZQxSXQmWiB4UCdusXX1LK%2Faf7GX18VbNYJQamQxdFflBVpfLCXevWRM5oObNSOWSLANFO7HbGw27hTl0tr4w2O%2FVywY6pgFvOlpiTcTWV%2BuL69ZEGSHBahw6FWNkj2LvvBz%2BP9Dy2soIrf4CzwKqndw%2FvbjH4RwhDPHupeJ335acMuFgpvi96omrfVSMc5PPfK8%2FCIT93mVXyHTGNexJFYDJtBniArPJg6pEAMp1yTE9WBA3skW%2BmQkR5nStpK79H2nVoJzbisv6GzFxCEcXQX9NYTFfZ1AuF9LB0NscJZ1hBgkxvzq11diBcCDO&X-Amz-Signature=69beab15136398a4cc245db730673db25b8af2543c5be9dc311295948f4a8fab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6A5LK2%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEsx8pjfAY3th8UQBbHjGQ1%2Fw9%2FElP31F5tIIZvI97F1AiBfV27xqshob2%2FZbxKTALiEFIi5ZQLd9lC2rP%2BuciTS%2Fir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMQ8A8EG%2FSv8caZtyMKtwDELgCMEqMEZ3%2Bz8HEtyWTyLKRH9RcNCVokDbCLJjXWmJ3JCeosQu7rlNH3DnYTrpEe5HvVv9PR6CD0EfbIFgCN36AA4y53PSqjt8qYTE5dmL5sxoG%2FyuuJs4lekh6c3eLdjW53WxJ8%2FttOArCcWM6k6Z3jyTk%2BIMT0yMKPxcSnxGIehBooJsJwcQo%2F07%2Bko%2FCGlncJ3JYL0yvaL2N8I%2BEd1OoRKUYp2YcM9Jf%2BZkxIfJzzhGEngRu4Ja6bOYhR%2BA8dUoW5lFcRTzu2rvW3l%2BWs0FhKX5XAEqPncTAV3e7IUcJ6QD3sy%2BpO0432S3nqRkCYrjWrVhsdyYdxJTvkPNdSRPo1d86Vvcy9SsszNNqPfPP92j3ziUnxlGyEnuNWjdwDbwRWG7KeqrzGHItPRYpr4ITmVZH8961qaFt3qgzFXxfoqhjnZGaxyHJnt3V5g1ogQBT6hSjmALzvsAvGaZMdy9%2FFaFlnmomzL0jYWCjjVGw0pFw2PIV8BPvrPoamG1I%2B7jpwOuMNpOqPjWePFEvUnDmj08%2BnPLjQNaLWCrOZQxSXQmWiB4UCdusXX1LK%2Faf7GX18VbNYJQamQxdFflBVpfLCXevWRM5oObNSOWSLANFO7HbGw27hTl0tr4w2O%2FVywY6pgFvOlpiTcTWV%2BuL69ZEGSHBahw6FWNkj2LvvBz%2BP9Dy2soIrf4CzwKqndw%2FvbjH4RwhDPHupeJ335acMuFgpvi96omrfVSMc5PPfK8%2FCIT93mVXyHTGNexJFYDJtBniArPJg6pEAMp1yTE9WBA3skW%2BmQkR5nStpK79H2nVoJzbisv6GzFxCEcXQX9NYTFfZ1AuF9LB0NscJZ1hBgkxvzq11diBcCDO&X-Amz-Signature=43a018a006b117f60f2243159a500a5d74ea710d748aa48a4bf744da0c240802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6A5LK2%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEsx8pjfAY3th8UQBbHjGQ1%2Fw9%2FElP31F5tIIZvI97F1AiBfV27xqshob2%2FZbxKTALiEFIi5ZQLd9lC2rP%2BuciTS%2Fir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMQ8A8EG%2FSv8caZtyMKtwDELgCMEqMEZ3%2Bz8HEtyWTyLKRH9RcNCVokDbCLJjXWmJ3JCeosQu7rlNH3DnYTrpEe5HvVv9PR6CD0EfbIFgCN36AA4y53PSqjt8qYTE5dmL5sxoG%2FyuuJs4lekh6c3eLdjW53WxJ8%2FttOArCcWM6k6Z3jyTk%2BIMT0yMKPxcSnxGIehBooJsJwcQo%2F07%2Bko%2FCGlncJ3JYL0yvaL2N8I%2BEd1OoRKUYp2YcM9Jf%2BZkxIfJzzhGEngRu4Ja6bOYhR%2BA8dUoW5lFcRTzu2rvW3l%2BWs0FhKX5XAEqPncTAV3e7IUcJ6QD3sy%2BpO0432S3nqRkCYrjWrVhsdyYdxJTvkPNdSRPo1d86Vvcy9SsszNNqPfPP92j3ziUnxlGyEnuNWjdwDbwRWG7KeqrzGHItPRYpr4ITmVZH8961qaFt3qgzFXxfoqhjnZGaxyHJnt3V5g1ogQBT6hSjmALzvsAvGaZMdy9%2FFaFlnmomzL0jYWCjjVGw0pFw2PIV8BPvrPoamG1I%2B7jpwOuMNpOqPjWePFEvUnDmj08%2BnPLjQNaLWCrOZQxSXQmWiB4UCdusXX1LK%2Faf7GX18VbNYJQamQxdFflBVpfLCXevWRM5oObNSOWSLANFO7HbGw27hTl0tr4w2O%2FVywY6pgFvOlpiTcTWV%2BuL69ZEGSHBahw6FWNkj2LvvBz%2BP9Dy2soIrf4CzwKqndw%2FvbjH4RwhDPHupeJ335acMuFgpvi96omrfVSMc5PPfK8%2FCIT93mVXyHTGNexJFYDJtBniArPJg6pEAMp1yTE9WBA3skW%2BmQkR5nStpK79H2nVoJzbisv6GzFxCEcXQX9NYTFfZ1AuF9LB0NscJZ1hBgkxvzq11diBcCDO&X-Amz-Signature=68bf803d186f2e383fde0741fb04cefa21e4ca4d88dc288193ef80eaf465cbc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRQRSX6M%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDuKUkS9KTj%2FUs38GOF8sISs7yGRRD5HQhxTQTQnBY8XgIhAI%2BYqQZXZYD7t9c6Tvch8pJzoMhA7RiTeWDfmpWWR6S9Kv8DCBsQABoMNjM3NDIzMTgzODA1IgywTEwoZH%2Fbnu7hKLUq3AOLf5qTV%2FLRHOmNeJwDTgiHCZFlMSa6T3joLQoortJX7JC1TmlYXZtkDCvKlwPIrSZvpGMC6UXwVhXD%2BVFk2YlP%2F1WJojN1PYPBDP0UJOB3NjdDruGA97JL6wYkr3pDzk5Gckg%2BmvulrOZdEyXhFyZqMHcfqrNZ6kFPSVSfdFJ2BP5sUDSHj8kdTLyFsOunSHVSA5xKDapxoae%2FW0IZ78cWAYs1SjGCCS9VcUUFrz%2BZwU40Tn7H68thETX%2Bub9z%2BHiZywa%2FeEomJ5iuwp7EEJ3V%2F45nTwGrCBwO5ov3Mij9Ad%2BHjW5Ccl8W5ahj9oIL4rebYK2IvP%2F2%2BkYHfB5T2Ab2SGp2EzyzbwhGkUODeCTDTfbvvZvWCTSpDMjU%2ByD0ke5wl7oD5343Qsg1kqhMMzy%2Fc6gT%2FojZ67fDcACILPPvrZfr8GasVNhwfXenegI0mdK%2Bj2vm6bxCbua9XjkYCcXNqA8caYrlt8IJvQoAhRSxlfSb5gd2FVdmVGI0wt4jWGtKkpQ%2F3o0nLjUMMshiWDb18n6FCqGb52IQ191W0Ndog%2BVBRgIkm3k1%2Fw0CILrTJU%2Fs%2FEr6mM9sPyoKWZ9x1hndWYJEOZ9qEK3wbGxwcBgz0kSgjYzt%2FZyKZ3muyjDz7tXLBjqkARXukVig6NDBMooLnbNx0v4J0dMxlBnDOOE1AO8PZrM5Yqmkfu7NsvlruIdmPZXKAMrjnDJNnAcNz7GadAKxvF4wDsO4pRzxDdCQhSN%2FQbYHC0E0Fz0xiCmn%2Fd0cMFYyHxXTrmdQQtb9S7a6LcK%2BQc7EQDO2vW1kPBgOdU9RLTJ3RF3kALWMBmVQnXok3Tegg%2Bcvhp4IGJeTq2MoW78Xp%2F8FKxfi&X-Amz-Signature=c3c16d0c91e09ad321e2281eae6ce5dfdb495f8b28ba7e40ee4695951ccf2c43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO7YL3TB%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFIZ2fm%2FZAU7viaHZOMbsiCoO%2FqSCcDd%2FPyMZxd5u2vUAiEAndIHb4foeXQdDonasUhQfZ7r1y0f9xe3LVeu4tSqhlQq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDKKeu3Lac7ZqhofeIyrcAxCVsg5xJhYE6Zdxo6xBPAb6kIUNDjOkJxgFWXKUq41q3QBxLIK0cmkX4uA5GB%2BTX%2Ba2PGLqADIFweVLEx3k%2BfO3n2eJn1OReynXPlPLyDLlG3dqrU5PbOaygUf2lsLFLbAc%2BhpLC8DZdZmjQts%2FYNT%2Beee2l7R3s3wc7HbQNNSJyPrRy0ZwPIldnKyCb4EbQR1ZoKMRgnDiTWYE%2B4z1zEaXu9K36Aa0X1R7haWGeR9Gjx692SbbcTMhLAvctFglb1YgvevdAIQLats%2FTUaOQw7RwoG9QCio72Oc84FhZw5YBIImfhOoZuWzV3bEWGC7YhLL4E%2FSwyz2HPBxotmFGcozX5RUHi9PslVLy3jwiVdpnIFnsqiH%2BnCBkYWwNZMLkr1VrP3BOI%2F4P11SmZYEYY5fWV19%2FEQR9YfjWOoOwc%2FdhE8SLMBFT33tBH2EemKUEnYcQvU%2B39EG%2FWK3sXPCsR2KyeeZTqX%2BgfsMII%2Bf4vG5dhYE2hrhYt2yoXd2nYRJUE0EcGFi3s3474Qu1656K72%2F08EmKnDIkvrOFDJHFulFYxmGUS2D1fZ2TACok%2BAh8oUEstF8NNztUfhI7r4fY%2BuUZrvuULwlWCWTrh7KWn5%2BW3uFPreRRnMtpgLnMN3v1csGOqUBUQMVM1CK9txLgVAKqdTOm4Pv5JYoF7sWM09DJR8eZQU78dVmUzZ316JSHlyp6cEb0gv%2BzU%2F3NTAKR6G9%2Begxplos29VzD26fYB%2BPtYseeCMg%2B862jpgAj8n6K%2BP1CzkMjHGlS%2BvY6cYt3RkHe5axkMQYp5TcKjHL1HzRZJr2TNex1DZoyPJ4ICADnZGUTnvb7et5rDwmViMP5P1skdKu%2Fx4jnCTb&X-Amz-Signature=af2e66044b76f90146f6501225ab5f008f806dfa2362640d21e64e9e74b07a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCV45OKK%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICMfte1WBww3EPTzcXPKxngOhqRLwSnDzW%2BpQCV55h0yAiEArpsGFnYAckTbTESJF1IXWj%2F2E1kYo61denxIiTk9s2Yq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGcCiabx8gbgjiroqircAyL06cFd89LfvcVrwzvyd3%2FMbWYTDluo%2B9O5WE%2BQIDqjMO4xLVxytMbRucP8CxK0i8nomwLoFCpfWilL4KshNri2YA7KQRAhC2HaWheEdc%2F5i5Vs8sR0KBOrwdTTkB6Bpkbh7QKJ9zwTRBqixVDYMfzQJXPhylgHNEwtbW6H%2FsHIrK9vID3%2BpWNjhrq%2BbS9OM2vPsfokZtp3cib%2FchRx4zCruoDy3NMRU0Qfstg0ELiQONptHm5WqtWwOa%2BV4CTs6qf%2FEs9XrvFEQ95Oob0A6ZmcD%2FCxh64XaBjq6hBxSSUCeoF6QAwa84o4%2BQa8Elm%2FRbcm%2BgoGmPmRFH8VQibLfGQbepCGdaXgeS7nqpGeEnUtAra4bAqlk7trD16nFXgEl%2F4CFsE9NNw6YSt%2FzStUx1ekkF54NmEgLBD8IncZzzbLNTs2xjsCID6GDsS137AL4ap%2B5AupcTl2BAd8zHPFkj9PY5tkvu8H7P9bnn%2BrK5iLqTsLTszhKtSHaSrFUUcKYLhCuJ24tLZEALgpeiwWf9jG1E2ksSEPdmK0MMwDGYByRlMMyGXKnproZidhS04%2Bg5CyNNXP%2FdMZzXwFYVGpyAqdlaj7kCGRZ5aFWFWLbB9695q9NreRl46FfGUvMOrv1csGOqUBhANu5jF3VgfDB4EYD9WtbiqUIosuPY9liQlvhySMv3dWZuZp7JO70B%2BGZpl6%2Bg5LSPFUM9hwR9b1OMVhVmmC9DSKz%2FGtoRf96XrniO8IPvvGExq%2FQTmDa8XDOSpsC7ZND5J7umWzW9MWnyCAaVLpZm6SXO3CQ9K5XBrefzRpjVazX2kG4iMl0ITWXQF2OrdXPSQjuK%2BU9LgYYpOmgT%2BmiKe6ABfH&X-Amz-Signature=29488fec51d55d2b9c8edc1f4933c267d01407f1dc8b657317d5249688abed71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6A5LK2%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEsx8pjfAY3th8UQBbHjGQ1%2Fw9%2FElP31F5tIIZvI97F1AiBfV27xqshob2%2FZbxKTALiEFIi5ZQLd9lC2rP%2BuciTS%2Fir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMQ8A8EG%2FSv8caZtyMKtwDELgCMEqMEZ3%2Bz8HEtyWTyLKRH9RcNCVokDbCLJjXWmJ3JCeosQu7rlNH3DnYTrpEe5HvVv9PR6CD0EfbIFgCN36AA4y53PSqjt8qYTE5dmL5sxoG%2FyuuJs4lekh6c3eLdjW53WxJ8%2FttOArCcWM6k6Z3jyTk%2BIMT0yMKPxcSnxGIehBooJsJwcQo%2F07%2Bko%2FCGlncJ3JYL0yvaL2N8I%2BEd1OoRKUYp2YcM9Jf%2BZkxIfJzzhGEngRu4Ja6bOYhR%2BA8dUoW5lFcRTzu2rvW3l%2BWs0FhKX5XAEqPncTAV3e7IUcJ6QD3sy%2BpO0432S3nqRkCYrjWrVhsdyYdxJTvkPNdSRPo1d86Vvcy9SsszNNqPfPP92j3ziUnxlGyEnuNWjdwDbwRWG7KeqrzGHItPRYpr4ITmVZH8961qaFt3qgzFXxfoqhjnZGaxyHJnt3V5g1ogQBT6hSjmALzvsAvGaZMdy9%2FFaFlnmomzL0jYWCjjVGw0pFw2PIV8BPvrPoamG1I%2B7jpwOuMNpOqPjWePFEvUnDmj08%2BnPLjQNaLWCrOZQxSXQmWiB4UCdusXX1LK%2Faf7GX18VbNYJQamQxdFflBVpfLCXevWRM5oObNSOWSLANFO7HbGw27hTl0tr4w2O%2FVywY6pgFvOlpiTcTWV%2BuL69ZEGSHBahw6FWNkj2LvvBz%2BP9Dy2soIrf4CzwKqndw%2FvbjH4RwhDPHupeJ335acMuFgpvi96omrfVSMc5PPfK8%2FCIT93mVXyHTGNexJFYDJtBniArPJg6pEAMp1yTE9WBA3skW%2BmQkR5nStpK79H2nVoJzbisv6GzFxCEcXQX9NYTFfZ1AuF9LB0NscJZ1hBgkxvzq11diBcCDO&X-Amz-Signature=b1ae422cd5479365641f7db38830badf4acb456d1f6f322dd83178ba2d5f2b55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MYYUMEV%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDJWKzpYMpfp27ZkanMLFV%2BTKhT9Zx22wMLamSXF61eLQIhAKX4VrpGeS3kb%2FS0CbchdJclyBnxCjxyHlm4IOQ9RrM6Kv8DCBsQABoMNjM3NDIzMTgzODA1IgwaFFLTph7iakjZhMYq3ANnkgVInzD1hND5cyTWYoAxc1qV%2FrXRBGcr1CJr9YdxlzoIB1JH7v4qDLwyBmwG0pnmosJ7XH%2FKhh3Wsat%2FYFMHI1Q1mXROi18NJz4kapyNnWzBtSRAVe%2BvvFsk38le1IlcDIVbZlc091RGl0y%2Bv3nLY4yVTwWZ2yLCY8FPBHF3mkBWXY79oVjQYMQaR6Pc0bbumAxYOgEJOloyie6HmlUBSFhJpHoUDBAsaUwGsQeVafDSSyreerBavczkiKZA%2BgVzmhd3WOL9hbVqD8V9bnGF2osFXAiiWNJR5cuOL2yXjfM3LQw8JfS7saEsL%2BCGb0lz75toXfHQCzfYjW7ggr%2F28j4lBnEwwKT%2FZ5wbwaOONApkad2McuIEAFlteREb8Rhja3XZqDZ77Nrse%2BjS%2BzoC4ux2h4COBT%2Bddzu7ljvBmPfYMum2US2BLIQOUZ54ed6bVDl5i3YD3NZvz0OkwIJp96XGTiOjERo4uVbF2URqarEd8B9dOZBr8Rb5DxQyVFMQ4Acfku4WlFPkeWMwOtc%2FR3Do%2BouP4fx3RUDfb8BLj8XJkb0YOFGqxHjchkb66Q7h%2BH4c4oPD7qlZEkYl3KUcbx9LraTWKzurEw1pnYYv5%2BKdq3k29aiMw6K2fTD279XLBjqkAcv4M8a%2FEKOx8NjDHQ1NnoC5slS%2Fb8ey34zjSDT4l22sJMHcTvAdIQosHb%2BGd8EIKpqJvA6L9yMT44mHYHUlOEq7UBi76D%2FhXmjwS2QgffsSTJA2Fb4lXMMoj%2FRZudglGvtYoqjhIVaE%2BuYLqX%2BxMIkmY20C2sfKUfBQOdoeRMWa1d1guA%2BF9MFFUkSyPd%2F0jUtgVN3ffKs6h9%2FY3NBSG4XNdgWG&X-Amz-Signature=9ecce8f0974b4db9d7bdbd5fa9ece0fe8bc3242593f5f0cb7b12f6ba73530b65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6A5LK2%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEsx8pjfAY3th8UQBbHjGQ1%2Fw9%2FElP31F5tIIZvI97F1AiBfV27xqshob2%2FZbxKTALiEFIi5ZQLd9lC2rP%2BuciTS%2Fir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMQ8A8EG%2FSv8caZtyMKtwDELgCMEqMEZ3%2Bz8HEtyWTyLKRH9RcNCVokDbCLJjXWmJ3JCeosQu7rlNH3DnYTrpEe5HvVv9PR6CD0EfbIFgCN36AA4y53PSqjt8qYTE5dmL5sxoG%2FyuuJs4lekh6c3eLdjW53WxJ8%2FttOArCcWM6k6Z3jyTk%2BIMT0yMKPxcSnxGIehBooJsJwcQo%2F07%2Bko%2FCGlncJ3JYL0yvaL2N8I%2BEd1OoRKUYp2YcM9Jf%2BZkxIfJzzhGEngRu4Ja6bOYhR%2BA8dUoW5lFcRTzu2rvW3l%2BWs0FhKX5XAEqPncTAV3e7IUcJ6QD3sy%2BpO0432S3nqRkCYrjWrVhsdyYdxJTvkPNdSRPo1d86Vvcy9SsszNNqPfPP92j3ziUnxlGyEnuNWjdwDbwRWG7KeqrzGHItPRYpr4ITmVZH8961qaFt3qgzFXxfoqhjnZGaxyHJnt3V5g1ogQBT6hSjmALzvsAvGaZMdy9%2FFaFlnmomzL0jYWCjjVGw0pFw2PIV8BPvrPoamG1I%2B7jpwOuMNpOqPjWePFEvUnDmj08%2BnPLjQNaLWCrOZQxSXQmWiB4UCdusXX1LK%2Faf7GX18VbNYJQamQxdFflBVpfLCXevWRM5oObNSOWSLANFO7HbGw27hTl0tr4w2O%2FVywY6pgFvOlpiTcTWV%2BuL69ZEGSHBahw6FWNkj2LvvBz%2BP9Dy2soIrf4CzwKqndw%2FvbjH4RwhDPHupeJ335acMuFgpvi96omrfVSMc5PPfK8%2FCIT93mVXyHTGNexJFYDJtBniArPJg6pEAMp1yTE9WBA3skW%2BmQkR5nStpK79H2nVoJzbisv6GzFxCEcXQX9NYTFfZ1AuF9LB0NscJZ1hBgkxvzq11diBcCDO&X-Amz-Signature=e9c38cab17f7b3e176f9c8136edd913bd6a344be7cc71d3a2b56718433c3b723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R46LDCA4%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCID3zFT4%2BYL9%2B2TD4Fcyv0NqvS0XDMeXoEHCGafQoFUZ0AiA%2BDpsDqHkLWnTcskXUa5EuoU72H3hT1jB7EWrQm2nZoyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMeJ60aVbspWVSfEvcKtwDY5UZzZQk8cfRYA0LKUD%2F%2B0%2BOg%2BfTdfhOjmAl%2B4cKHLQuBfjh18wX083I50czNIPZd7th2AtTshsJxew4sRu7bHRzqST8oej%2FUv1DvZnfdx3iSQNCyKmcVQN3qIXIwL7s2%2B%2FkkUVrH2CA9QBDhF%2FFis4sgUmulMBtSXl0VeMUsrGGnJjGGeaWZqOVlOAX4LMMH9h5QMK5Snnu9DjEr899oIqOMwjRcCcNDIRGhNizDmuFfRrLMacpegZXHdnKYiTShvzZgVCQslRYZoNsntXd9VbAo2McozlGvo0jHWr%2BJZpznnnadXbmh%2Bhx3bTghk4NaMSPRllXApo7jTxbCvl3WapS6MRLuNS%2FLL0pcnHkqP%2BOu%2BA1cmb3s4dj1xm0jVxZjX86U2eb0xxUdngtphcrW20uC9e4ZC7jgSbYXcs2G%2B9Hi%2FrdCdwL8WXoeswAjxK%2BFbKCc8HLJ7mNjb97UmBVFIWcLz8QecjC%2Fw9E%2FsAX6knVtZfIit1o97ki4RPt3zEDcpTpEzPjpSe7mVocA7pWKO3f5KcQUs1KljmziN%2F1XSePTSD9Ik8IqeNBcHbsF0iRK4643FgQaAA40BrcK%2FLMw7ISvX9SRiaccg2kFgsl%2Bgdi4uv4DCJfk0QQed0w3%2B%2FVywY6pgFcbCSSlKvrmQg%2BpfFEp1KaNKbB6EQdxyNhMAY1S0q%2Bu407h8TvHTVl323owXA2iabnXGI6Gq6y%2B448sEVFsCbgJfWQRPWiECk8ckqMfM1e4B1mVLReLYKwZjyUMEQ5Japu8uINML5vmRti%2FtVcJg6RlaI8RXR%2BTqVa98gEmiZPliHCYiDbWlOBvscxnW3xpmPcw%2B29%2Bm24sx%2FroAYYavw9WuHZ9rlY&X-Amz-Signature=d57e7d39ab26e565d197145a0406193344c34088e76ec247cf66dff5302fa263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6A5LK2%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEsx8pjfAY3th8UQBbHjGQ1%2Fw9%2FElP31F5tIIZvI97F1AiBfV27xqshob2%2FZbxKTALiEFIi5ZQLd9lC2rP%2BuciTS%2Fir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMQ8A8EG%2FSv8caZtyMKtwDELgCMEqMEZ3%2Bz8HEtyWTyLKRH9RcNCVokDbCLJjXWmJ3JCeosQu7rlNH3DnYTrpEe5HvVv9PR6CD0EfbIFgCN36AA4y53PSqjt8qYTE5dmL5sxoG%2FyuuJs4lekh6c3eLdjW53WxJ8%2FttOArCcWM6k6Z3jyTk%2BIMT0yMKPxcSnxGIehBooJsJwcQo%2F07%2Bko%2FCGlncJ3JYL0yvaL2N8I%2BEd1OoRKUYp2YcM9Jf%2BZkxIfJzzhGEngRu4Ja6bOYhR%2BA8dUoW5lFcRTzu2rvW3l%2BWs0FhKX5XAEqPncTAV3e7IUcJ6QD3sy%2BpO0432S3nqRkCYrjWrVhsdyYdxJTvkPNdSRPo1d86Vvcy9SsszNNqPfPP92j3ziUnxlGyEnuNWjdwDbwRWG7KeqrzGHItPRYpr4ITmVZH8961qaFt3qgzFXxfoqhjnZGaxyHJnt3V5g1ogQBT6hSjmALzvsAvGaZMdy9%2FFaFlnmomzL0jYWCjjVGw0pFw2PIV8BPvrPoamG1I%2B7jpwOuMNpOqPjWePFEvUnDmj08%2BnPLjQNaLWCrOZQxSXQmWiB4UCdusXX1LK%2Faf7GX18VbNYJQamQxdFflBVpfLCXevWRM5oObNSOWSLANFO7HbGw27hTl0tr4w2O%2FVywY6pgFvOlpiTcTWV%2BuL69ZEGSHBahw6FWNkj2LvvBz%2BP9Dy2soIrf4CzwKqndw%2FvbjH4RwhDPHupeJ335acMuFgpvi96omrfVSMc5PPfK8%2FCIT93mVXyHTGNexJFYDJtBniArPJg6pEAMp1yTE9WBA3skW%2BmQkR5nStpK79H2nVoJzbisv6GzFxCEcXQX9NYTFfZ1AuF9LB0NscJZ1hBgkxvzq11diBcCDO&X-Amz-Signature=bdf7fef061caccc0d2e68aed0ac57b0402f2170b2b5c6790d8e07c529bd14aa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IU4KGKW%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIG8z8x5zjvaAYYXrfYniOhl1hSbBSahpNX6myi0yaocNAiEA5tIWJpkme3Uthm3yxjaAK4Pi0nimBm8a2LVczFHLcrwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAgK%2B4v9hDSAT97QvyrcA2iYFZI4a15uxZLWkw4z4eZbEcFO2Ex%2BQdYBacHg1%2FQn5NhtUL0RQ14Srn5rWTculOMMhnRxoMAisf8IRBwuCqkKtcmD5ouZYwhBsS2ormoO1%2FYZomYxqhdHtz8RdxP5A279V3yNbKRSWa9hsDJYy%2BWFLjafgPBff9BBXwEn9zTV1JHrurtUzC%2FXTDTeDa6MSZmjljhTJW71sK13N1HILYe2HPzmtw07sZGCm1K%2BiB0rcPdOpvus6%2BgsA7FdKMf5qRdvgu7O3Me5sIp11csEBcPQUb0x9rzpS7Tw0ah7MQ8mIsAqqX3MEohDQrxejSW8Tav6a7WGykunyJU5ftdg06QnLvge4xBE5BaxcCTKelza29NB2HxQ0FAhY32mbMnKCsvD%2BEc%2BTR0LUbYp28JPCTXqY%2B3DTKxtw6%2FeW5xbqkcsBOksPRCyI85P2McJXLd5Z0IU9XSB2Aqm6Z01v4%2BxUD9N6R9bom4XGsAPxPivotuBtnzCFwIZCWZKdkAl3paARctopd05WR2umNk2379lFKJrwJ5Fuw1vA8gRZrTXvJ%2FS3TTt6Nt93MZUKeCWKvmayj%2FxieGeTgZpRnGYdehG9Ioea51RGH3Taf6zw8qo7PN5T2WxrjJcNcqz8UC3ML%2Fv1csGOqUBZieaKnkzjfcNzuWIsaHrQZRoszMO11xyM%2F65ILCnAq1mFpIlG5mWALBxp97Wm0xT4T5w%2F4xXGNhQzafdUx05D13plj8cD7eoSwCTtq8DLF1rUlDMZ5D1bj9pYS%2BgYiTNljk2%2Bb1fSfY0aIajIGn3akK8LI5%2FolrL5ZF7tV2B3E8zI4FsAcK6VVzEjMn%2FdYx3gokIgK4YCtnkMcmsCaDJR5xIKmvw&X-Amz-Signature=3342f5d7741155b24f3757a411cbed9f79226c752ffb723b9aaa9eda5f3368b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6A5LK2%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEsx8pjfAY3th8UQBbHjGQ1%2Fw9%2FElP31F5tIIZvI97F1AiBfV27xqshob2%2FZbxKTALiEFIi5ZQLd9lC2rP%2BuciTS%2Fir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMQ8A8EG%2FSv8caZtyMKtwDELgCMEqMEZ3%2Bz8HEtyWTyLKRH9RcNCVokDbCLJjXWmJ3JCeosQu7rlNH3DnYTrpEe5HvVv9PR6CD0EfbIFgCN36AA4y53PSqjt8qYTE5dmL5sxoG%2FyuuJs4lekh6c3eLdjW53WxJ8%2FttOArCcWM6k6Z3jyTk%2BIMT0yMKPxcSnxGIehBooJsJwcQo%2F07%2Bko%2FCGlncJ3JYL0yvaL2N8I%2BEd1OoRKUYp2YcM9Jf%2BZkxIfJzzhGEngRu4Ja6bOYhR%2BA8dUoW5lFcRTzu2rvW3l%2BWs0FhKX5XAEqPncTAV3e7IUcJ6QD3sy%2BpO0432S3nqRkCYrjWrVhsdyYdxJTvkPNdSRPo1d86Vvcy9SsszNNqPfPP92j3ziUnxlGyEnuNWjdwDbwRWG7KeqrzGHItPRYpr4ITmVZH8961qaFt3qgzFXxfoqhjnZGaxyHJnt3V5g1ogQBT6hSjmALzvsAvGaZMdy9%2FFaFlnmomzL0jYWCjjVGw0pFw2PIV8BPvrPoamG1I%2B7jpwOuMNpOqPjWePFEvUnDmj08%2BnPLjQNaLWCrOZQxSXQmWiB4UCdusXX1LK%2Faf7GX18VbNYJQamQxdFflBVpfLCXevWRM5oObNSOWSLANFO7HbGw27hTl0tr4w2O%2FVywY6pgFvOlpiTcTWV%2BuL69ZEGSHBahw6FWNkj2LvvBz%2BP9Dy2soIrf4CzwKqndw%2FvbjH4RwhDPHupeJ335acMuFgpvi96omrfVSMc5PPfK8%2FCIT93mVXyHTGNexJFYDJtBniArPJg6pEAMp1yTE9WBA3skW%2BmQkR5nStpK79H2nVoJzbisv6GzFxCEcXQX9NYTFfZ1AuF9LB0NscJZ1hBgkxvzq11diBcCDO&X-Amz-Signature=c8aa7508407a4b6e2419febbadf01fe5820935be27825346ddcb624294774b7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRAQNYBN%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIHnvleMWWwphBmwT2d0b8BHQ%2ByJf8Hq4xdVx74sNBFpmAiBSQ7UIYTaM5t8ZzPO6bneuz5V4hkiEFWm5Hyixh%2BiB7yr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMun84vrbqCkSP82rWKtwDN%2B2OTzWKdcuyZYDo2P5AomC3zCYRHyHA4hnePvnmf7OjD%2FlNR0Rg%2F3h7B%2B0W4U90MPUA9YPSBEhLtQNX8cHTRYYv62q1Qs9357Hb%2FF8o2Dz9vYms0g1YnXhI3nWin5alvcukXIr7%2FdNND%2FCWTLWuU6O6%2BuWngDeZJtDAakl2u1u4RKP4uJzD85zDcbUBG%2FJRFF6dcmrEhCJHxK5TNaILR6hmORr2hNKe9udNQiE2b%2BvHHXcvWjN1awnDkypYsXHdGN4Si4Amx87yCCFLJuzUKbnxOZgBE416zGdcKrnOINpRAal3lzBVKzwKnKFsU7yhxewbclZJ7iFPjck6rEepHERJylFGaoN1kIvzaFwObC0Z1kLXpSPjGD%2B6A5U9J5f%2BSxSnTU3veXjoEVMEdIEwvKupnWd9xk7xQCVLlE%2FLH3GidDpcfzpzZlNkP%2BptTsc7mcFiSZcDdPa0QsoG5yiVmqJxb3YGEU6OSLuKPDowt49C3m0n2cVWHfFYBdYVowUSOwotoEdUGSHp9cp6j3D6p6EBK0ZLkKAGpA68Znp7vsjErOYREazzaRa0yQhUVtcVHBGeVDd8xsl31WAMbgfP6XEuONmquVaLeXw9ZgXali3bqK535EAI1qV3VGAwlu%2FVywY6pgEBSaVZyQaF915cCpim%2Be%2BvLMW4TBvzHonyG7j%2BI2AaNWn31DsN%2FAWwXxMiuDYtRq3aHrSsoqKXiiygTftAEfOkQFmFTzmNVd9StYA4Xo1JfzqNlJ0DVHSsuANzgMskBGr8bnH20xii1N46xGl6Gnl%2F9f6hSGz4A9yodcqox%2FYJMGSyUBPM996YtSNLWbgRmYju3VSxEGD8M7I8mPvfrSdoE7WCc9uw&X-Amz-Signature=3014d9f13035a8cc457a4645510cbf08176e500aac20d6e28f2b269e1fbdcd7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6A5LK2%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEsx8pjfAY3th8UQBbHjGQ1%2Fw9%2FElP31F5tIIZvI97F1AiBfV27xqshob2%2FZbxKTALiEFIi5ZQLd9lC2rP%2BuciTS%2Fir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMQ8A8EG%2FSv8caZtyMKtwDELgCMEqMEZ3%2Bz8HEtyWTyLKRH9RcNCVokDbCLJjXWmJ3JCeosQu7rlNH3DnYTrpEe5HvVv9PR6CD0EfbIFgCN36AA4y53PSqjt8qYTE5dmL5sxoG%2FyuuJs4lekh6c3eLdjW53WxJ8%2FttOArCcWM6k6Z3jyTk%2BIMT0yMKPxcSnxGIehBooJsJwcQo%2F07%2Bko%2FCGlncJ3JYL0yvaL2N8I%2BEd1OoRKUYp2YcM9Jf%2BZkxIfJzzhGEngRu4Ja6bOYhR%2BA8dUoW5lFcRTzu2rvW3l%2BWs0FhKX5XAEqPncTAV3e7IUcJ6QD3sy%2BpO0432S3nqRkCYrjWrVhsdyYdxJTvkPNdSRPo1d86Vvcy9SsszNNqPfPP92j3ziUnxlGyEnuNWjdwDbwRWG7KeqrzGHItPRYpr4ITmVZH8961qaFt3qgzFXxfoqhjnZGaxyHJnt3V5g1ogQBT6hSjmALzvsAvGaZMdy9%2FFaFlnmomzL0jYWCjjVGw0pFw2PIV8BPvrPoamG1I%2B7jpwOuMNpOqPjWePFEvUnDmj08%2BnPLjQNaLWCrOZQxSXQmWiB4UCdusXX1LK%2Faf7GX18VbNYJQamQxdFflBVpfLCXevWRM5oObNSOWSLANFO7HbGw27hTl0tr4w2O%2FVywY6pgFvOlpiTcTWV%2BuL69ZEGSHBahw6FWNkj2LvvBz%2BP9Dy2soIrf4CzwKqndw%2FvbjH4RwhDPHupeJ335acMuFgpvi96omrfVSMc5PPfK8%2FCIT93mVXyHTGNexJFYDJtBniArPJg6pEAMp1yTE9WBA3skW%2BmQkR5nStpK79H2nVoJzbisv6GzFxCEcXQX9NYTFfZ1AuF9LB0NscJZ1hBgkxvzq11diBcCDO&X-Amz-Signature=9b6457e6c446f58a5079e6eb5b79f62383460204b9a2676bc919c831a6b0accf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP6JI6FD%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDgehR7Gnh2qIb2y9%2BOZaMGLNGHVZamzYgyIda%2Fh0FXDgIgddXyXvp5g%2BMJZhVfgwZr2ZD7d3suGIHb%2FRQvKr9X%2F5gq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDBkNgVlwB%2BzUf7DabyrcA0HbJMWr6QAI%2Bu9NH86KNBjoY3P9utGkOuGVksT95j%2FKxXw%2BN%2FOiGfCkFXBdkpRaen1unyO0w64UlyosxPXP5TBK5QEgx%2Fxrh20UrrQPGtINgk3qFOqMXNme71I5cNca8nYhmkdC3wbKwG9FR%2BcZXvs47QjDtzJiAHkCwm8JY8q%2BkYcJdPWxgC%2Fl%2Bx4rKJz1q%2FbCvh2QjvDo2DIXCtej7IYW%2BA0YPMyYrn70NRkAqIKaF7WE%2BrJM1oDWWvKqyuHhEPupILmA48eEut3j9aCS40WUQDhxJnxn2t4iOdQ4EE4zJGskxeIOubSKYOmU8C7LxTtOin0GJeEghbmnk9SRfFEGpTl6JOiZ4oew2pEH9TebDLVVvfUX2HZLkpP%2FwOqcZA2yLBeOw3VRpxA0I2%2FHMv1gQj7imb5kb1sj5khS%2FoTZ4z%2B3hoz0ElFgRlQYTpHRUC%2BHAd5ptOXYMuGUwu6ld%2BRSYuL3RuX8ECZi2T1Itk8aVD38h%2F5fqwaO2ZSkxyjcWOSwtTkFquEzZ7qXspTPdRPPbaeFREhZmY2cDBrHC6rIB6b1Y8FzJtK%2F0Bw4tNGGnJsB3XhVTCvLhEtLtiBhCiGu%2FDDzIwOLTIDOKEjT5hEEWbEahqYfmENT9x9DMIvv1csGOqUBisSIFuFxnDgecKE%2B1NIC6coJS346%2BW5z%2F%2FftIcn67JVw8HQjh%2FIaiNKljlMRZum%2BwGAW1DnBPFz%2FsGqvTJ3S4J0x0YX4Rv3VnNrfd1%2FaFmrOMr5tNjsiw1JgrCcDeodOjJtTn3n%2Bec%2Ffz6zGHJTfreH%2BEI2lnbu%2F8W6k68dm%2BOqFLOM%2BsGHjvbyMskaCoMg1UT%2BGBdFoQqCrouU1bJmUxXf1CQ50&X-Amz-Signature=f882439ce465903802da55d75f9ea3412a43368fe90716aae36fd8f0bc56ae7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7YT6LZM%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDpLMfzFA9s%2BbaJjnn004KokjwC9jRvbiWQMe2kEg0RBgIhAJUIfErH%2BWDwvANJst85uLz%2BBcND08HdVwQH0GgOKIAaKv8DCBsQABoMNjM3NDIzMTgzODA1IgxA%2BdQhBzsCGa3%2BCCcq3AOO0gE%2BLKPdVwMo71pQTMnww%2FVZeDNN4NJR90O%2BRDxKEt73LDF3vTALp2vrfBADGReiRmLTlHJEqc7a3sYUWK1nS3pM8kN1YtZypibvWDa3pAQRhNUMHjfuVM69n%2BNqsweS0BsokIlVSTk%2BkQhefwu4mQrbj85UQtUNLjodDrG4tXc51pbsLLPr9AnxBOWJruv0Cjv%2BnVUhJaxYPtvlHRY2mpVN15ggVqAhijdDPye%2BET02NX23qL7k9U9VPzIi8HnDP5d3NReucPqApJizYlxF578Imd5GGFFxEw0ibUB5GaH6S8rOHM8HiNKj8DYX6jxUs2eAjfORTOqSQuYRfQpGgWiGkhkVmIQsZYm4m0qSNNVdO3mKLjCpiyfiEKvyI6ouqdBBirbPVSrRzX4BPHF6Mgq2xDzTMsIejzI3qAZbtwM5AzkFPtuGzFOZrqqEJ3B4LN4BSEjDncwhRaLFpdUKqfshfdG%2FRwr962398KPHKwj%2BdZnArHTEBOlujzdVvP30xmG%2FbWenRDxGVMtR18OR1h80QtBdxPfr01KqY%2FNThnQ%2BzhMrPTZETG%2FdLvo1nt9l%2FGsbsj4KxAcbITN%2FtanoF%2B5IX4oTPy%2B2g1O9hPWGxO%2Fh46iB3EtANlT6CjCD79XLBjqkAXkavwUuPvV9D83ZeCIPyI33dwQE6WA1BDbAUAEj4Fqio24atEUKj72PRBzxxgEmFNu6swmO1cBgPwBp0wp6Hdu%2BmtCuvKoZd18oJiM%2FLrRsW7XGEMOKlP8p5JzuTIRp7uvvJeV%2BqrCJvTBQ5LChb5REhFhw0lfYcMmnQCls9fmTvUgD4eN6sziEuKMJcHpWPzv53V97vqaxXUhtdW2x0xfjRLTA&X-Amz-Signature=505b8cc988cb9bf933be3ed9390dbdd56a5a6b9cb7b6fcaf2536907919b0b18e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MYYUMEV%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDJWKzpYMpfp27ZkanMLFV%2BTKhT9Zx22wMLamSXF61eLQIhAKX4VrpGeS3kb%2FS0CbchdJclyBnxCjxyHlm4IOQ9RrM6Kv8DCBsQABoMNjM3NDIzMTgzODA1IgwaFFLTph7iakjZhMYq3ANnkgVInzD1hND5cyTWYoAxc1qV%2FrXRBGcr1CJr9YdxlzoIB1JH7v4qDLwyBmwG0pnmosJ7XH%2FKhh3Wsat%2FYFMHI1Q1mXROi18NJz4kapyNnWzBtSRAVe%2BvvFsk38le1IlcDIVbZlc091RGl0y%2Bv3nLY4yVTwWZ2yLCY8FPBHF3mkBWXY79oVjQYMQaR6Pc0bbumAxYOgEJOloyie6HmlUBSFhJpHoUDBAsaUwGsQeVafDSSyreerBavczkiKZA%2BgVzmhd3WOL9hbVqD8V9bnGF2osFXAiiWNJR5cuOL2yXjfM3LQw8JfS7saEsL%2BCGb0lz75toXfHQCzfYjW7ggr%2F28j4lBnEwwKT%2FZ5wbwaOONApkad2McuIEAFlteREb8Rhja3XZqDZ77Nrse%2BjS%2BzoC4ux2h4COBT%2Bddzu7ljvBmPfYMum2US2BLIQOUZ54ed6bVDl5i3YD3NZvz0OkwIJp96XGTiOjERo4uVbF2URqarEd8B9dOZBr8Rb5DxQyVFMQ4Acfku4WlFPkeWMwOtc%2FR3Do%2BouP4fx3RUDfb8BLj8XJkb0YOFGqxHjchkb66Q7h%2BH4c4oPD7qlZEkYl3KUcbx9LraTWKzurEw1pnYYv5%2BKdq3k29aiMw6K2fTD279XLBjqkAcv4M8a%2FEKOx8NjDHQ1NnoC5slS%2Fb8ey34zjSDT4l22sJMHcTvAdIQosHb%2BGd8EIKpqJvA6L9yMT44mHYHUlOEq7UBi76D%2FhXmjwS2QgffsSTJA2Fb4lXMMoj%2FRZudglGvtYoqjhIVaE%2BuYLqX%2BxMIkmY20C2sfKUfBQOdoeRMWa1d1guA%2BF9MFFUkSyPd%2F0jUtgVN3ffKs6h9%2FY3NBSG4XNdgWG&X-Amz-Signature=8de7c3efde9945361971f2df160c7303b49701c7555b826971d2a3b728267445&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6A5LK2%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEsx8pjfAY3th8UQBbHjGQ1%2Fw9%2FElP31F5tIIZvI97F1AiBfV27xqshob2%2FZbxKTALiEFIi5ZQLd9lC2rP%2BuciTS%2Fir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMQ8A8EG%2FSv8caZtyMKtwDELgCMEqMEZ3%2Bz8HEtyWTyLKRH9RcNCVokDbCLJjXWmJ3JCeosQu7rlNH3DnYTrpEe5HvVv9PR6CD0EfbIFgCN36AA4y53PSqjt8qYTE5dmL5sxoG%2FyuuJs4lekh6c3eLdjW53WxJ8%2FttOArCcWM6k6Z3jyTk%2BIMT0yMKPxcSnxGIehBooJsJwcQo%2F07%2Bko%2FCGlncJ3JYL0yvaL2N8I%2BEd1OoRKUYp2YcM9Jf%2BZkxIfJzzhGEngRu4Ja6bOYhR%2BA8dUoW5lFcRTzu2rvW3l%2BWs0FhKX5XAEqPncTAV3e7IUcJ6QD3sy%2BpO0432S3nqRkCYrjWrVhsdyYdxJTvkPNdSRPo1d86Vvcy9SsszNNqPfPP92j3ziUnxlGyEnuNWjdwDbwRWG7KeqrzGHItPRYpr4ITmVZH8961qaFt3qgzFXxfoqhjnZGaxyHJnt3V5g1ogQBT6hSjmALzvsAvGaZMdy9%2FFaFlnmomzL0jYWCjjVGw0pFw2PIV8BPvrPoamG1I%2B7jpwOuMNpOqPjWePFEvUnDmj08%2BnPLjQNaLWCrOZQxSXQmWiB4UCdusXX1LK%2Faf7GX18VbNYJQamQxdFflBVpfLCXevWRM5oObNSOWSLANFO7HbGw27hTl0tr4w2O%2FVywY6pgFvOlpiTcTWV%2BuL69ZEGSHBahw6FWNkj2LvvBz%2BP9Dy2soIrf4CzwKqndw%2FvbjH4RwhDPHupeJ335acMuFgpvi96omrfVSMc5PPfK8%2FCIT93mVXyHTGNexJFYDJtBniArPJg6pEAMp1yTE9WBA3skW%2BmQkR5nStpK79H2nVoJzbisv6GzFxCEcXQX9NYTFfZ1AuF9LB0NscJZ1hBgkxvzq11diBcCDO&X-Amz-Signature=4985ca8fda8cb16439d8ddbee30ab6feb2914385954e79688889fe1796328367&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6A5LK2%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEsx8pjfAY3th8UQBbHjGQ1%2Fw9%2FElP31F5tIIZvI97F1AiBfV27xqshob2%2FZbxKTALiEFIi5ZQLd9lC2rP%2BuciTS%2Fir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMQ8A8EG%2FSv8caZtyMKtwDELgCMEqMEZ3%2Bz8HEtyWTyLKRH9RcNCVokDbCLJjXWmJ3JCeosQu7rlNH3DnYTrpEe5HvVv9PR6CD0EfbIFgCN36AA4y53PSqjt8qYTE5dmL5sxoG%2FyuuJs4lekh6c3eLdjW53WxJ8%2FttOArCcWM6k6Z3jyTk%2BIMT0yMKPxcSnxGIehBooJsJwcQo%2F07%2Bko%2FCGlncJ3JYL0yvaL2N8I%2BEd1OoRKUYp2YcM9Jf%2BZkxIfJzzhGEngRu4Ja6bOYhR%2BA8dUoW5lFcRTzu2rvW3l%2BWs0FhKX5XAEqPncTAV3e7IUcJ6QD3sy%2BpO0432S3nqRkCYrjWrVhsdyYdxJTvkPNdSRPo1d86Vvcy9SsszNNqPfPP92j3ziUnxlGyEnuNWjdwDbwRWG7KeqrzGHItPRYpr4ITmVZH8961qaFt3qgzFXxfoqhjnZGaxyHJnt3V5g1ogQBT6hSjmALzvsAvGaZMdy9%2FFaFlnmomzL0jYWCjjVGw0pFw2PIV8BPvrPoamG1I%2B7jpwOuMNpOqPjWePFEvUnDmj08%2BnPLjQNaLWCrOZQxSXQmWiB4UCdusXX1LK%2Faf7GX18VbNYJQamQxdFflBVpfLCXevWRM5oObNSOWSLANFO7HbGw27hTl0tr4w2O%2FVywY6pgFvOlpiTcTWV%2BuL69ZEGSHBahw6FWNkj2LvvBz%2BP9Dy2soIrf4CzwKqndw%2FvbjH4RwhDPHupeJ335acMuFgpvi96omrfVSMc5PPfK8%2FCIT93mVXyHTGNexJFYDJtBniArPJg6pEAMp1yTE9WBA3skW%2BmQkR5nStpK79H2nVoJzbisv6GzFxCEcXQX9NYTFfZ1AuF9LB0NscJZ1hBgkxvzq11diBcCDO&X-Amz-Signature=41921eb79288e50a3751d7610dbca0c4094acd6cf14333d54785aa4013730e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PY66K73%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCpDRQbWazO6Fbp3QLzjAVsuTiMLIhz7p7ljKHDmpZktgIgC%2BWCUb4tTaV6%2BAgxVa%2F0%2F0djPKxYOCnI1CIe4MTV%2BM8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNpQtKt0UzdAphBY9SrcA6NNQbp4%2FdzmrbXX91WiO2dO1sEXhaxik464j0wpyphkoWWLE3uhCU0XwT62afjSKpBmq1SYem%2FXw0pv1gFoQSRrDy9kKPjM%2FuB5Bu7pkgfJNuDB1fa%2BVHMonla5G%2F2QUrKhXnxZ%2FDCJUWvmqHt2HJiQovRzrAq9gjZm7mHvYFi74OG8l20I%2F5yUbBsGyOHICBKyN4vxDNf2OZqJluJeM2m8qr1vDGQkVwx%2BrzkA9Diu87Bo0xQhdtCL3ayDHmakaJRCOJIAp7hzOIdceLdEZay1E923yoyNJ%2FFcFs%2FBGf%2BYfvnKHQrOxPsnpbXeXzbnuVJCyJcDq8hnsaSB4w8VoIxCuAVAIHbQVHWnUmpQbZLW6TGqyp4KteDIVx2rPylBJrF5aQr9rQCGuIo6LdA2LrTsWM3Oj0j%2BSBhdIarVm2cHgIBjlt8bS3ELpXND8%2B1FsPRz7Md1m0jff0uzbOALkZqq5FkrHCju3UyaTkP06AEH2JEhCuLvu6TC4LDDnoty8ydp5Xh2Obv21CnBpFAN2AQibzy5pHWSql8RWIARgMWm5vtWzoPM2gD%2F%2BM2V%2BwNAyiFVJT7v8qd896mj6HZ%2BlCgvJZqCnl2%2FvSp7cvWrI6Ed38B7gvYNup4SkR%2BGMMDv1csGOqUBp6MNzGiyuitNdX1X0Vci7EumDVpQiG%2BZ1ejVrsA%2FWF1UHBZ2dX3xZHqselclwgHhPUXMKG9nYRZHHA45ssJ0oMBKoZ8OxVUbg5vFNRjtI%2Be6eqL%2FqTeN1iC1SBtROYM%2FMHnq9cfkLGkRwZwh1mbPpsmIWYTeYsg7dwxdVPDgz1l4HjrkEPa3RYAuTZLB0kLf%2FpXrt%2FF1a2Lh2K5Sec5beJ8XP%2BIE&X-Amz-Signature=331ca566b6ab92eba05a325e89658eff731eac58b4c1ffe078dc3524cdcb0cf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PY66K73%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCpDRQbWazO6Fbp3QLzjAVsuTiMLIhz7p7ljKHDmpZktgIgC%2BWCUb4tTaV6%2BAgxVa%2F0%2F0djPKxYOCnI1CIe4MTV%2BM8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNpQtKt0UzdAphBY9SrcA6NNQbp4%2FdzmrbXX91WiO2dO1sEXhaxik464j0wpyphkoWWLE3uhCU0XwT62afjSKpBmq1SYem%2FXw0pv1gFoQSRrDy9kKPjM%2FuB5Bu7pkgfJNuDB1fa%2BVHMonla5G%2F2QUrKhXnxZ%2FDCJUWvmqHt2HJiQovRzrAq9gjZm7mHvYFi74OG8l20I%2F5yUbBsGyOHICBKyN4vxDNf2OZqJluJeM2m8qr1vDGQkVwx%2BrzkA9Diu87Bo0xQhdtCL3ayDHmakaJRCOJIAp7hzOIdceLdEZay1E923yoyNJ%2FFcFs%2FBGf%2BYfvnKHQrOxPsnpbXeXzbnuVJCyJcDq8hnsaSB4w8VoIxCuAVAIHbQVHWnUmpQbZLW6TGqyp4KteDIVx2rPylBJrF5aQr9rQCGuIo6LdA2LrTsWM3Oj0j%2BSBhdIarVm2cHgIBjlt8bS3ELpXND8%2B1FsPRz7Md1m0jff0uzbOALkZqq5FkrHCju3UyaTkP06AEH2JEhCuLvu6TC4LDDnoty8ydp5Xh2Obv21CnBpFAN2AQibzy5pHWSql8RWIARgMWm5vtWzoPM2gD%2F%2BM2V%2BwNAyiFVJT7v8qd896mj6HZ%2BlCgvJZqCnl2%2FvSp7cvWrI6Ed38B7gvYNup4SkR%2BGMMDv1csGOqUBp6MNzGiyuitNdX1X0Vci7EumDVpQiG%2BZ1ejVrsA%2FWF1UHBZ2dX3xZHqselclwgHhPUXMKG9nYRZHHA45ssJ0oMBKoZ8OxVUbg5vFNRjtI%2Be6eqL%2FqTeN1iC1SBtROYM%2FMHnq9cfkLGkRwZwh1mbPpsmIWYTeYsg7dwxdVPDgz1l4HjrkEPa3RYAuTZLB0kLf%2FpXrt%2FF1a2Lh2K5Sec5beJ8XP%2BIE&X-Amz-Signature=0beb219373cb89a8d21d4b0cde5a1acb4f9e3762c551cf5f0aa15eb7c9ce7e99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PY66K73%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCpDRQbWazO6Fbp3QLzjAVsuTiMLIhz7p7ljKHDmpZktgIgC%2BWCUb4tTaV6%2BAgxVa%2F0%2F0djPKxYOCnI1CIe4MTV%2BM8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNpQtKt0UzdAphBY9SrcA6NNQbp4%2FdzmrbXX91WiO2dO1sEXhaxik464j0wpyphkoWWLE3uhCU0XwT62afjSKpBmq1SYem%2FXw0pv1gFoQSRrDy9kKPjM%2FuB5Bu7pkgfJNuDB1fa%2BVHMonla5G%2F2QUrKhXnxZ%2FDCJUWvmqHt2HJiQovRzrAq9gjZm7mHvYFi74OG8l20I%2F5yUbBsGyOHICBKyN4vxDNf2OZqJluJeM2m8qr1vDGQkVwx%2BrzkA9Diu87Bo0xQhdtCL3ayDHmakaJRCOJIAp7hzOIdceLdEZay1E923yoyNJ%2FFcFs%2FBGf%2BYfvnKHQrOxPsnpbXeXzbnuVJCyJcDq8hnsaSB4w8VoIxCuAVAIHbQVHWnUmpQbZLW6TGqyp4KteDIVx2rPylBJrF5aQr9rQCGuIo6LdA2LrTsWM3Oj0j%2BSBhdIarVm2cHgIBjlt8bS3ELpXND8%2B1FsPRz7Md1m0jff0uzbOALkZqq5FkrHCju3UyaTkP06AEH2JEhCuLvu6TC4LDDnoty8ydp5Xh2Obv21CnBpFAN2AQibzy5pHWSql8RWIARgMWm5vtWzoPM2gD%2F%2BM2V%2BwNAyiFVJT7v8qd896mj6HZ%2BlCgvJZqCnl2%2FvSp7cvWrI6Ed38B7gvYNup4SkR%2BGMMDv1csGOqUBp6MNzGiyuitNdX1X0Vci7EumDVpQiG%2BZ1ejVrsA%2FWF1UHBZ2dX3xZHqselclwgHhPUXMKG9nYRZHHA45ssJ0oMBKoZ8OxVUbg5vFNRjtI%2Be6eqL%2FqTeN1iC1SBtROYM%2FMHnq9cfkLGkRwZwh1mbPpsmIWYTeYsg7dwxdVPDgz1l4HjrkEPa3RYAuTZLB0kLf%2FpXrt%2FF1a2Lh2K5Sec5beJ8XP%2BIE&X-Amz-Signature=bacb8088c8c49536e0bdf5c050b86521522401c6e75b8237ae2d037980b587ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PY66K73%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCpDRQbWazO6Fbp3QLzjAVsuTiMLIhz7p7ljKHDmpZktgIgC%2BWCUb4tTaV6%2BAgxVa%2F0%2F0djPKxYOCnI1CIe4MTV%2BM8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNpQtKt0UzdAphBY9SrcA6NNQbp4%2FdzmrbXX91WiO2dO1sEXhaxik464j0wpyphkoWWLE3uhCU0XwT62afjSKpBmq1SYem%2FXw0pv1gFoQSRrDy9kKPjM%2FuB5Bu7pkgfJNuDB1fa%2BVHMonla5G%2F2QUrKhXnxZ%2FDCJUWvmqHt2HJiQovRzrAq9gjZm7mHvYFi74OG8l20I%2F5yUbBsGyOHICBKyN4vxDNf2OZqJluJeM2m8qr1vDGQkVwx%2BrzkA9Diu87Bo0xQhdtCL3ayDHmakaJRCOJIAp7hzOIdceLdEZay1E923yoyNJ%2FFcFs%2FBGf%2BYfvnKHQrOxPsnpbXeXzbnuVJCyJcDq8hnsaSB4w8VoIxCuAVAIHbQVHWnUmpQbZLW6TGqyp4KteDIVx2rPylBJrF5aQr9rQCGuIo6LdA2LrTsWM3Oj0j%2BSBhdIarVm2cHgIBjlt8bS3ELpXND8%2B1FsPRz7Md1m0jff0uzbOALkZqq5FkrHCju3UyaTkP06AEH2JEhCuLvu6TC4LDDnoty8ydp5Xh2Obv21CnBpFAN2AQibzy5pHWSql8RWIARgMWm5vtWzoPM2gD%2F%2BM2V%2BwNAyiFVJT7v8qd896mj6HZ%2BlCgvJZqCnl2%2FvSp7cvWrI6Ed38B7gvYNup4SkR%2BGMMDv1csGOqUBp6MNzGiyuitNdX1X0Vci7EumDVpQiG%2BZ1ejVrsA%2FWF1UHBZ2dX3xZHqselclwgHhPUXMKG9nYRZHHA45ssJ0oMBKoZ8OxVUbg5vFNRjtI%2Be6eqL%2FqTeN1iC1SBtROYM%2FMHnq9cfkLGkRwZwh1mbPpsmIWYTeYsg7dwxdVPDgz1l4HjrkEPa3RYAuTZLB0kLf%2FpXrt%2FF1a2Lh2K5Sec5beJ8XP%2BIE&X-Amz-Signature=faec331d3bf4bdff7e6c0f28656237fc475fbe1e8cd186644bcf159d816cbc93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UL7NFI4%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQC%2Bx0qm2JlPnMDwWFCSt%2F4hCgX2KZi1TjoSkFwiRJJ47AIhAN1JWZ124PaHbLU%2BmVaZSO9QlccMauhFWCSu4i0wtSNVKv8DCBsQABoMNjM3NDIzMTgzODA1Igznn0Z9pIsK5X7akdEq3AP3%2FWgpRS2hoAC4dFArGcbhzeWVu%2FZ2%2BqAV4xCJ5FeMT0WtDNucQ%2FqYvRXMXv%2BRUi30AN%2B2PWj%2FwKUvS0lx5zg0P%2BohCaudIiQwt1punzycb6TQB8F%2BJUbRafSkd1dvAIkXrGKt3tzxLQdUoVSjhOHuoLhZLnpxyipb%2FZheX0h6yqOV7qj1OJeS9S2L5d5GNgy6uDLsJA300T8KHUhlibr%2B0i1CFQC%2Bl1MHUAHIJ%2BNFWPdeNaQ7vCQANvJjWH4IUZKnJC0h39p54yIfhNoEnL2DxSNq0pwhSOYSoW4DTMxWIFrDoeX%2FTLjCbsOsfjOYxG3bgwj0KkLRCgR4dc%2FtotlrEw4QQbM%2BPkdS%2FzTd66%2F3gV%2FWH887RILxJpkGmdfDJ0NJhL8a2io1M4a7sq3yneIi5JdPr9W2rIWQHrVOrM26B0htN9idfsNtjl0uG6v74%2Fzv5P8hiru7EG54LK%2FR1ax8RZNkU7ovnxTJfT13nbn6720VcyBrjNuryaWTCf5qMnPrRup4f2LIq%2BaGG9kp906ONNm1Bu%2BnZ2w1UWqnzdz3pXO2o1QmER9icZokA%2B9%2FDFfCume3BDoIH5vu4tOtMGCY4zKLEy1khJdDollJ1wj1j8A0Ob0QqLMLTyFaljDW79XLBjqkAVkpWTjXQLQCqhfTmY7%2B4PlFufq%2BOp6MaOntWYNvVNa15yb%2BDPQZKyKDssteWiJHXC8WZsRkxU8uGCxmDzhSpFMZDZhSn%2F0MKumAZ5yI592KCDFjzUbDmLPLD7MWRGMl2SywSfjaxA86kQt%2BakU4DYpZS6AocO5lpNn6WY2f1AXsYUJiHZMAJxd7Z9W%2FRDkXUtlvK74wSCU0ToCvOzxHLco2He9V&X-Amz-Signature=be73ff00ff7b36d37b6ff3b1d127252cb2b6f7c8f95b56474d52e96869575f07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PY66K73%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCpDRQbWazO6Fbp3QLzjAVsuTiMLIhz7p7ljKHDmpZktgIgC%2BWCUb4tTaV6%2BAgxVa%2F0%2F0djPKxYOCnI1CIe4MTV%2BM8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNpQtKt0UzdAphBY9SrcA6NNQbp4%2FdzmrbXX91WiO2dO1sEXhaxik464j0wpyphkoWWLE3uhCU0XwT62afjSKpBmq1SYem%2FXw0pv1gFoQSRrDy9kKPjM%2FuB5Bu7pkgfJNuDB1fa%2BVHMonla5G%2F2QUrKhXnxZ%2FDCJUWvmqHt2HJiQovRzrAq9gjZm7mHvYFi74OG8l20I%2F5yUbBsGyOHICBKyN4vxDNf2OZqJluJeM2m8qr1vDGQkVwx%2BrzkA9Diu87Bo0xQhdtCL3ayDHmakaJRCOJIAp7hzOIdceLdEZay1E923yoyNJ%2FFcFs%2FBGf%2BYfvnKHQrOxPsnpbXeXzbnuVJCyJcDq8hnsaSB4w8VoIxCuAVAIHbQVHWnUmpQbZLW6TGqyp4KteDIVx2rPylBJrF5aQr9rQCGuIo6LdA2LrTsWM3Oj0j%2BSBhdIarVm2cHgIBjlt8bS3ELpXND8%2B1FsPRz7Md1m0jff0uzbOALkZqq5FkrHCju3UyaTkP06AEH2JEhCuLvu6TC4LDDnoty8ydp5Xh2Obv21CnBpFAN2AQibzy5pHWSql8RWIARgMWm5vtWzoPM2gD%2F%2BM2V%2BwNAyiFVJT7v8qd896mj6HZ%2BlCgvJZqCnl2%2FvSp7cvWrI6Ed38B7gvYNup4SkR%2BGMMDv1csGOqUBp6MNzGiyuitNdX1X0Vci7EumDVpQiG%2BZ1ejVrsA%2FWF1UHBZ2dX3xZHqselclwgHhPUXMKG9nYRZHHA45ssJ0oMBKoZ8OxVUbg5vFNRjtI%2Be6eqL%2FqTeN1iC1SBtROYM%2FMHnq9cfkLGkRwZwh1mbPpsmIWYTeYsg7dwxdVPDgz1l4HjrkEPa3RYAuTZLB0kLf%2FpXrt%2FF1a2Lh2K5Sec5beJ8XP%2BIE&X-Amz-Signature=aae2ecb86662c0d137008de463ea08ab2c68c50766369e1c3ad49b794c6ad5ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PY66K73%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCpDRQbWazO6Fbp3QLzjAVsuTiMLIhz7p7ljKHDmpZktgIgC%2BWCUb4tTaV6%2BAgxVa%2F0%2F0djPKxYOCnI1CIe4MTV%2BM8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNpQtKt0UzdAphBY9SrcA6NNQbp4%2FdzmrbXX91WiO2dO1sEXhaxik464j0wpyphkoWWLE3uhCU0XwT62afjSKpBmq1SYem%2FXw0pv1gFoQSRrDy9kKPjM%2FuB5Bu7pkgfJNuDB1fa%2BVHMonla5G%2F2QUrKhXnxZ%2FDCJUWvmqHt2HJiQovRzrAq9gjZm7mHvYFi74OG8l20I%2F5yUbBsGyOHICBKyN4vxDNf2OZqJluJeM2m8qr1vDGQkVwx%2BrzkA9Diu87Bo0xQhdtCL3ayDHmakaJRCOJIAp7hzOIdceLdEZay1E923yoyNJ%2FFcFs%2FBGf%2BYfvnKHQrOxPsnpbXeXzbnuVJCyJcDq8hnsaSB4w8VoIxCuAVAIHbQVHWnUmpQbZLW6TGqyp4KteDIVx2rPylBJrF5aQr9rQCGuIo6LdA2LrTsWM3Oj0j%2BSBhdIarVm2cHgIBjlt8bS3ELpXND8%2B1FsPRz7Md1m0jff0uzbOALkZqq5FkrHCju3UyaTkP06AEH2JEhCuLvu6TC4LDDnoty8ydp5Xh2Obv21CnBpFAN2AQibzy5pHWSql8RWIARgMWm5vtWzoPM2gD%2F%2BM2V%2BwNAyiFVJT7v8qd896mj6HZ%2BlCgvJZqCnl2%2FvSp7cvWrI6Ed38B7gvYNup4SkR%2BGMMDv1csGOqUBp6MNzGiyuitNdX1X0Vci7EumDVpQiG%2BZ1ejVrsA%2FWF1UHBZ2dX3xZHqselclwgHhPUXMKG9nYRZHHA45ssJ0oMBKoZ8OxVUbg5vFNRjtI%2Be6eqL%2FqTeN1iC1SBtROYM%2FMHnq9cfkLGkRwZwh1mbPpsmIWYTeYsg7dwxdVPDgz1l4HjrkEPa3RYAuTZLB0kLf%2FpXrt%2FF1a2Lh2K5Sec5beJ8XP%2BIE&X-Amz-Signature=36c95894c87440b794521c4664ff06e9a6d68f2ac4dc2db48868b1f45a730e2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PY66K73%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCpDRQbWazO6Fbp3QLzjAVsuTiMLIhz7p7ljKHDmpZktgIgC%2BWCUb4tTaV6%2BAgxVa%2F0%2F0djPKxYOCnI1CIe4MTV%2BM8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNpQtKt0UzdAphBY9SrcA6NNQbp4%2FdzmrbXX91WiO2dO1sEXhaxik464j0wpyphkoWWLE3uhCU0XwT62afjSKpBmq1SYem%2FXw0pv1gFoQSRrDy9kKPjM%2FuB5Bu7pkgfJNuDB1fa%2BVHMonla5G%2F2QUrKhXnxZ%2FDCJUWvmqHt2HJiQovRzrAq9gjZm7mHvYFi74OG8l20I%2F5yUbBsGyOHICBKyN4vxDNf2OZqJluJeM2m8qr1vDGQkVwx%2BrzkA9Diu87Bo0xQhdtCL3ayDHmakaJRCOJIAp7hzOIdceLdEZay1E923yoyNJ%2FFcFs%2FBGf%2BYfvnKHQrOxPsnpbXeXzbnuVJCyJcDq8hnsaSB4w8VoIxCuAVAIHbQVHWnUmpQbZLW6TGqyp4KteDIVx2rPylBJrF5aQr9rQCGuIo6LdA2LrTsWM3Oj0j%2BSBhdIarVm2cHgIBjlt8bS3ELpXND8%2B1FsPRz7Md1m0jff0uzbOALkZqq5FkrHCju3UyaTkP06AEH2JEhCuLvu6TC4LDDnoty8ydp5Xh2Obv21CnBpFAN2AQibzy5pHWSql8RWIARgMWm5vtWzoPM2gD%2F%2BM2V%2BwNAyiFVJT7v8qd896mj6HZ%2BlCgvJZqCnl2%2FvSp7cvWrI6Ed38B7gvYNup4SkR%2BGMMDv1csGOqUBp6MNzGiyuitNdX1X0Vci7EumDVpQiG%2BZ1ejVrsA%2FWF1UHBZ2dX3xZHqselclwgHhPUXMKG9nYRZHHA45ssJ0oMBKoZ8OxVUbg5vFNRjtI%2Be6eqL%2FqTeN1iC1SBtROYM%2FMHnq9cfkLGkRwZwh1mbPpsmIWYTeYsg7dwxdVPDgz1l4HjrkEPa3RYAuTZLB0kLf%2FpXrt%2FF1a2Lh2K5Sec5beJ8XP%2BIE&X-Amz-Signature=6e18dd73f66c83a25cfdefa0a886cdce256e347b8291d95c20e8c58cd89e3055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PY66K73%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCpDRQbWazO6Fbp3QLzjAVsuTiMLIhz7p7ljKHDmpZktgIgC%2BWCUb4tTaV6%2BAgxVa%2F0%2F0djPKxYOCnI1CIe4MTV%2BM8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNpQtKt0UzdAphBY9SrcA6NNQbp4%2FdzmrbXX91WiO2dO1sEXhaxik464j0wpyphkoWWLE3uhCU0XwT62afjSKpBmq1SYem%2FXw0pv1gFoQSRrDy9kKPjM%2FuB5Bu7pkgfJNuDB1fa%2BVHMonla5G%2F2QUrKhXnxZ%2FDCJUWvmqHt2HJiQovRzrAq9gjZm7mHvYFi74OG8l20I%2F5yUbBsGyOHICBKyN4vxDNf2OZqJluJeM2m8qr1vDGQkVwx%2BrzkA9Diu87Bo0xQhdtCL3ayDHmakaJRCOJIAp7hzOIdceLdEZay1E923yoyNJ%2FFcFs%2FBGf%2BYfvnKHQrOxPsnpbXeXzbnuVJCyJcDq8hnsaSB4w8VoIxCuAVAIHbQVHWnUmpQbZLW6TGqyp4KteDIVx2rPylBJrF5aQr9rQCGuIo6LdA2LrTsWM3Oj0j%2BSBhdIarVm2cHgIBjlt8bS3ELpXND8%2B1FsPRz7Md1m0jff0uzbOALkZqq5FkrHCju3UyaTkP06AEH2JEhCuLvu6TC4LDDnoty8ydp5Xh2Obv21CnBpFAN2AQibzy5pHWSql8RWIARgMWm5vtWzoPM2gD%2F%2BM2V%2BwNAyiFVJT7v8qd896mj6HZ%2BlCgvJZqCnl2%2FvSp7cvWrI6Ed38B7gvYNup4SkR%2BGMMDv1csGOqUBp6MNzGiyuitNdX1X0Vci7EumDVpQiG%2BZ1ejVrsA%2FWF1UHBZ2dX3xZHqselclwgHhPUXMKG9nYRZHHA45ssJ0oMBKoZ8OxVUbg5vFNRjtI%2Be6eqL%2FqTeN1iC1SBtROYM%2FMHnq9cfkLGkRwZwh1mbPpsmIWYTeYsg7dwxdVPDgz1l4HjrkEPa3RYAuTZLB0kLf%2FpXrt%2FF1a2Lh2K5Sec5beJ8XP%2BIE&X-Amz-Signature=1dc2520bdcd4a4526c58745093162e2f794fc9f28ad808d47371e7adb9386c3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PY66K73%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCpDRQbWazO6Fbp3QLzjAVsuTiMLIhz7p7ljKHDmpZktgIgC%2BWCUb4tTaV6%2BAgxVa%2F0%2F0djPKxYOCnI1CIe4MTV%2BM8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNpQtKt0UzdAphBY9SrcA6NNQbp4%2FdzmrbXX91WiO2dO1sEXhaxik464j0wpyphkoWWLE3uhCU0XwT62afjSKpBmq1SYem%2FXw0pv1gFoQSRrDy9kKPjM%2FuB5Bu7pkgfJNuDB1fa%2BVHMonla5G%2F2QUrKhXnxZ%2FDCJUWvmqHt2HJiQovRzrAq9gjZm7mHvYFi74OG8l20I%2F5yUbBsGyOHICBKyN4vxDNf2OZqJluJeM2m8qr1vDGQkVwx%2BrzkA9Diu87Bo0xQhdtCL3ayDHmakaJRCOJIAp7hzOIdceLdEZay1E923yoyNJ%2FFcFs%2FBGf%2BYfvnKHQrOxPsnpbXeXzbnuVJCyJcDq8hnsaSB4w8VoIxCuAVAIHbQVHWnUmpQbZLW6TGqyp4KteDIVx2rPylBJrF5aQr9rQCGuIo6LdA2LrTsWM3Oj0j%2BSBhdIarVm2cHgIBjlt8bS3ELpXND8%2B1FsPRz7Md1m0jff0uzbOALkZqq5FkrHCju3UyaTkP06AEH2JEhCuLvu6TC4LDDnoty8ydp5Xh2Obv21CnBpFAN2AQibzy5pHWSql8RWIARgMWm5vtWzoPM2gD%2F%2BM2V%2BwNAyiFVJT7v8qd896mj6HZ%2BlCgvJZqCnl2%2FvSp7cvWrI6Ed38B7gvYNup4SkR%2BGMMDv1csGOqUBp6MNzGiyuitNdX1X0Vci7EumDVpQiG%2BZ1ejVrsA%2FWF1UHBZ2dX3xZHqselclwgHhPUXMKG9nYRZHHA45ssJ0oMBKoZ8OxVUbg5vFNRjtI%2Be6eqL%2FqTeN1iC1SBtROYM%2FMHnq9cfkLGkRwZwh1mbPpsmIWYTeYsg7dwxdVPDgz1l4HjrkEPa3RYAuTZLB0kLf%2FpXrt%2FF1a2Lh2K5Sec5beJ8XP%2BIE&X-Amz-Signature=368d0664b1804818d474fe20963704ab94fa3be7c21497ea000b95a84e3b3862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PY66K73%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCpDRQbWazO6Fbp3QLzjAVsuTiMLIhz7p7ljKHDmpZktgIgC%2BWCUb4tTaV6%2BAgxVa%2F0%2F0djPKxYOCnI1CIe4MTV%2BM8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNpQtKt0UzdAphBY9SrcA6NNQbp4%2FdzmrbXX91WiO2dO1sEXhaxik464j0wpyphkoWWLE3uhCU0XwT62afjSKpBmq1SYem%2FXw0pv1gFoQSRrDy9kKPjM%2FuB5Bu7pkgfJNuDB1fa%2BVHMonla5G%2F2QUrKhXnxZ%2FDCJUWvmqHt2HJiQovRzrAq9gjZm7mHvYFi74OG8l20I%2F5yUbBsGyOHICBKyN4vxDNf2OZqJluJeM2m8qr1vDGQkVwx%2BrzkA9Diu87Bo0xQhdtCL3ayDHmakaJRCOJIAp7hzOIdceLdEZay1E923yoyNJ%2FFcFs%2FBGf%2BYfvnKHQrOxPsnpbXeXzbnuVJCyJcDq8hnsaSB4w8VoIxCuAVAIHbQVHWnUmpQbZLW6TGqyp4KteDIVx2rPylBJrF5aQr9rQCGuIo6LdA2LrTsWM3Oj0j%2BSBhdIarVm2cHgIBjlt8bS3ELpXND8%2B1FsPRz7Md1m0jff0uzbOALkZqq5FkrHCju3UyaTkP06AEH2JEhCuLvu6TC4LDDnoty8ydp5Xh2Obv21CnBpFAN2AQibzy5pHWSql8RWIARgMWm5vtWzoPM2gD%2F%2BM2V%2BwNAyiFVJT7v8qd896mj6HZ%2BlCgvJZqCnl2%2FvSp7cvWrI6Ed38B7gvYNup4SkR%2BGMMDv1csGOqUBp6MNzGiyuitNdX1X0Vci7EumDVpQiG%2BZ1ejVrsA%2FWF1UHBZ2dX3xZHqselclwgHhPUXMKG9nYRZHHA45ssJ0oMBKoZ8OxVUbg5vFNRjtI%2Be6eqL%2FqTeN1iC1SBtROYM%2FMHnq9cfkLGkRwZwh1mbPpsmIWYTeYsg7dwxdVPDgz1l4HjrkEPa3RYAuTZLB0kLf%2FpXrt%2FF1a2Lh2K5Sec5beJ8XP%2BIE&X-Amz-Signature=de28266c35635c0b7213fc3e0b9d1c524ffca1b984eb4b142fe6884870b2436e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


