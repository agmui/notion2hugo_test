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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OAFVC2V%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbHqZVy2qQG86wNeRYbH0aitjkPUmXLXhzO9PxNh69OAiA%2BTkNNKFxcLnwcgOtsWNLk7I6saYi09NYeYDpn7LSmuiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYURWTvTs%2BNyuSYmXKtwDx6qBoZVxFCIsot%2Bd3dNv5GCuLgehLekoVZ68a1JuE7mB8pJn0tFp9oWGdq0VF2fY%2F8lJ14RXk8eyMNTJsfG6%2F%2FsLT2bn9SHLPBulfAwQdFPp%2FHRC3MbCQLblXiikytle2enJttwBHVb2Tf0Zs1lwZIYHjqUlWOrzYgmVdZa09d0C2ZctNmJWIsG1g5ofv%2BRuFkru2S4ZpiLOVig1TougdClDVMsKVo%2BaFstzTmIrR3eCAtEVjJe%2FNjMTvlCw10dHr4jzaaTTIA2HeKCz8sCRo80glnfIDY0pUCTe4Q8hwG9qxAVZHJICb%2FzvqdUl8sPDK%2BPp7fozpimiFzqhaqfqXeagKwij5eLKISnYluYxXF1cTPmymjH8W1KWI2Fs3m%2FdNnfLmySfd93uC37cD9FaPDSFg%2Bfh6cX30rQg%2FRAK46dpAlw2sEVAZwWwvBqQ49zWevmMVAkFKEwcU6eVOyM83uJsO7cCnFFdmuwa5nqfo3H1206xk58MlV%2BJlYvJIsPUNS22pxXM0CSM1QJ9XPXdyERI0IraJlx%2FfGCOOekuXRBZY1bCq0Njz9NtzB%2FI3vW4QT4WVHYcQFi82WsgbuC4WD1wwOBtG294iRVLJBnPfx%2Fm4hy8khbnyXGOxCIwloHwywY6pgEzXeLo222TzWz2o58owj9NVqrmbUR99oPFWrGttnC0%2F9BcMfgnbTRmUffYiX3MnjfQ8y5S%2BKFKrf5BZePiD3CxYVq4aXYnZYCFLc9HJSsvzXKiZN1WAV6XWJTg6qoJ26NfuAzTuJKnV3Wv853lFw6eT5Wnn2cIcFuwe%2F8Ryu2roLEufyrvgxuDiRPZdqTZzhCPs33z%2FFr1rVyZ2nmWHfVUtQ341jWP&X-Amz-Signature=7b042d691e05ce1e0de954c8bdb4c44aa18ed13850bc54f22a2fba5383ad4b89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OAFVC2V%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbHqZVy2qQG86wNeRYbH0aitjkPUmXLXhzO9PxNh69OAiA%2BTkNNKFxcLnwcgOtsWNLk7I6saYi09NYeYDpn7LSmuiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYURWTvTs%2BNyuSYmXKtwDx6qBoZVxFCIsot%2Bd3dNv5GCuLgehLekoVZ68a1JuE7mB8pJn0tFp9oWGdq0VF2fY%2F8lJ14RXk8eyMNTJsfG6%2F%2FsLT2bn9SHLPBulfAwQdFPp%2FHRC3MbCQLblXiikytle2enJttwBHVb2Tf0Zs1lwZIYHjqUlWOrzYgmVdZa09d0C2ZctNmJWIsG1g5ofv%2BRuFkru2S4ZpiLOVig1TougdClDVMsKVo%2BaFstzTmIrR3eCAtEVjJe%2FNjMTvlCw10dHr4jzaaTTIA2HeKCz8sCRo80glnfIDY0pUCTe4Q8hwG9qxAVZHJICb%2FzvqdUl8sPDK%2BPp7fozpimiFzqhaqfqXeagKwij5eLKISnYluYxXF1cTPmymjH8W1KWI2Fs3m%2FdNnfLmySfd93uC37cD9FaPDSFg%2Bfh6cX30rQg%2FRAK46dpAlw2sEVAZwWwvBqQ49zWevmMVAkFKEwcU6eVOyM83uJsO7cCnFFdmuwa5nqfo3H1206xk58MlV%2BJlYvJIsPUNS22pxXM0CSM1QJ9XPXdyERI0IraJlx%2FfGCOOekuXRBZY1bCq0Njz9NtzB%2FI3vW4QT4WVHYcQFi82WsgbuC4WD1wwOBtG294iRVLJBnPfx%2Fm4hy8khbnyXGOxCIwloHwywY6pgEzXeLo222TzWz2o58owj9NVqrmbUR99oPFWrGttnC0%2F9BcMfgnbTRmUffYiX3MnjfQ8y5S%2BKFKrf5BZePiD3CxYVq4aXYnZYCFLc9HJSsvzXKiZN1WAV6XWJTg6qoJ26NfuAzTuJKnV3Wv853lFw6eT5Wnn2cIcFuwe%2F8Ryu2roLEufyrvgxuDiRPZdqTZzhCPs33z%2FFr1rVyZ2nmWHfVUtQ341jWP&X-Amz-Signature=0a4697592ebab748a36549c41ac29a1d6c0a67b17aa92038898fe1433d6360a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OAFVC2V%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbHqZVy2qQG86wNeRYbH0aitjkPUmXLXhzO9PxNh69OAiA%2BTkNNKFxcLnwcgOtsWNLk7I6saYi09NYeYDpn7LSmuiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYURWTvTs%2BNyuSYmXKtwDx6qBoZVxFCIsot%2Bd3dNv5GCuLgehLekoVZ68a1JuE7mB8pJn0tFp9oWGdq0VF2fY%2F8lJ14RXk8eyMNTJsfG6%2F%2FsLT2bn9SHLPBulfAwQdFPp%2FHRC3MbCQLblXiikytle2enJttwBHVb2Tf0Zs1lwZIYHjqUlWOrzYgmVdZa09d0C2ZctNmJWIsG1g5ofv%2BRuFkru2S4ZpiLOVig1TougdClDVMsKVo%2BaFstzTmIrR3eCAtEVjJe%2FNjMTvlCw10dHr4jzaaTTIA2HeKCz8sCRo80glnfIDY0pUCTe4Q8hwG9qxAVZHJICb%2FzvqdUl8sPDK%2BPp7fozpimiFzqhaqfqXeagKwij5eLKISnYluYxXF1cTPmymjH8W1KWI2Fs3m%2FdNnfLmySfd93uC37cD9FaPDSFg%2Bfh6cX30rQg%2FRAK46dpAlw2sEVAZwWwvBqQ49zWevmMVAkFKEwcU6eVOyM83uJsO7cCnFFdmuwa5nqfo3H1206xk58MlV%2BJlYvJIsPUNS22pxXM0CSM1QJ9XPXdyERI0IraJlx%2FfGCOOekuXRBZY1bCq0Njz9NtzB%2FI3vW4QT4WVHYcQFi82WsgbuC4WD1wwOBtG294iRVLJBnPfx%2Fm4hy8khbnyXGOxCIwloHwywY6pgEzXeLo222TzWz2o58owj9NVqrmbUR99oPFWrGttnC0%2F9BcMfgnbTRmUffYiX3MnjfQ8y5S%2BKFKrf5BZePiD3CxYVq4aXYnZYCFLc9HJSsvzXKiZN1WAV6XWJTg6qoJ26NfuAzTuJKnV3Wv853lFw6eT5Wnn2cIcFuwe%2F8Ryu2roLEufyrvgxuDiRPZdqTZzhCPs33z%2FFr1rVyZ2nmWHfVUtQ341jWP&X-Amz-Signature=e78b4801f4f5527d76a402fe5f80275e3eef100dda49f9c61457796cd9d13eef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OAFVC2V%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbHqZVy2qQG86wNeRYbH0aitjkPUmXLXhzO9PxNh69OAiA%2BTkNNKFxcLnwcgOtsWNLk7I6saYi09NYeYDpn7LSmuiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYURWTvTs%2BNyuSYmXKtwDx6qBoZVxFCIsot%2Bd3dNv5GCuLgehLekoVZ68a1JuE7mB8pJn0tFp9oWGdq0VF2fY%2F8lJ14RXk8eyMNTJsfG6%2F%2FsLT2bn9SHLPBulfAwQdFPp%2FHRC3MbCQLblXiikytle2enJttwBHVb2Tf0Zs1lwZIYHjqUlWOrzYgmVdZa09d0C2ZctNmJWIsG1g5ofv%2BRuFkru2S4ZpiLOVig1TougdClDVMsKVo%2BaFstzTmIrR3eCAtEVjJe%2FNjMTvlCw10dHr4jzaaTTIA2HeKCz8sCRo80glnfIDY0pUCTe4Q8hwG9qxAVZHJICb%2FzvqdUl8sPDK%2BPp7fozpimiFzqhaqfqXeagKwij5eLKISnYluYxXF1cTPmymjH8W1KWI2Fs3m%2FdNnfLmySfd93uC37cD9FaPDSFg%2Bfh6cX30rQg%2FRAK46dpAlw2sEVAZwWwvBqQ49zWevmMVAkFKEwcU6eVOyM83uJsO7cCnFFdmuwa5nqfo3H1206xk58MlV%2BJlYvJIsPUNS22pxXM0CSM1QJ9XPXdyERI0IraJlx%2FfGCOOekuXRBZY1bCq0Njz9NtzB%2FI3vW4QT4WVHYcQFi82WsgbuC4WD1wwOBtG294iRVLJBnPfx%2Fm4hy8khbnyXGOxCIwloHwywY6pgEzXeLo222TzWz2o58owj9NVqrmbUR99oPFWrGttnC0%2F9BcMfgnbTRmUffYiX3MnjfQ8y5S%2BKFKrf5BZePiD3CxYVq4aXYnZYCFLc9HJSsvzXKiZN1WAV6XWJTg6qoJ26NfuAzTuJKnV3Wv853lFw6eT5Wnn2cIcFuwe%2F8Ryu2roLEufyrvgxuDiRPZdqTZzhCPs33z%2FFr1rVyZ2nmWHfVUtQ341jWP&X-Amz-Signature=96283e613279f7033c6fafbeb1e6ba91c18020855c0e8cc69a1b0e2d0140e6d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OAFVC2V%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbHqZVy2qQG86wNeRYbH0aitjkPUmXLXhzO9PxNh69OAiA%2BTkNNKFxcLnwcgOtsWNLk7I6saYi09NYeYDpn7LSmuiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYURWTvTs%2BNyuSYmXKtwDx6qBoZVxFCIsot%2Bd3dNv5GCuLgehLekoVZ68a1JuE7mB8pJn0tFp9oWGdq0VF2fY%2F8lJ14RXk8eyMNTJsfG6%2F%2FsLT2bn9SHLPBulfAwQdFPp%2FHRC3MbCQLblXiikytle2enJttwBHVb2Tf0Zs1lwZIYHjqUlWOrzYgmVdZa09d0C2ZctNmJWIsG1g5ofv%2BRuFkru2S4ZpiLOVig1TougdClDVMsKVo%2BaFstzTmIrR3eCAtEVjJe%2FNjMTvlCw10dHr4jzaaTTIA2HeKCz8sCRo80glnfIDY0pUCTe4Q8hwG9qxAVZHJICb%2FzvqdUl8sPDK%2BPp7fozpimiFzqhaqfqXeagKwij5eLKISnYluYxXF1cTPmymjH8W1KWI2Fs3m%2FdNnfLmySfd93uC37cD9FaPDSFg%2Bfh6cX30rQg%2FRAK46dpAlw2sEVAZwWwvBqQ49zWevmMVAkFKEwcU6eVOyM83uJsO7cCnFFdmuwa5nqfo3H1206xk58MlV%2BJlYvJIsPUNS22pxXM0CSM1QJ9XPXdyERI0IraJlx%2FfGCOOekuXRBZY1bCq0Njz9NtzB%2FI3vW4QT4WVHYcQFi82WsgbuC4WD1wwOBtG294iRVLJBnPfx%2Fm4hy8khbnyXGOxCIwloHwywY6pgEzXeLo222TzWz2o58owj9NVqrmbUR99oPFWrGttnC0%2F9BcMfgnbTRmUffYiX3MnjfQ8y5S%2BKFKrf5BZePiD3CxYVq4aXYnZYCFLc9HJSsvzXKiZN1WAV6XWJTg6qoJ26NfuAzTuJKnV3Wv853lFw6eT5Wnn2cIcFuwe%2F8Ryu2roLEufyrvgxuDiRPZdqTZzhCPs33z%2FFr1rVyZ2nmWHfVUtQ341jWP&X-Amz-Signature=befb5623529fcde458d3b0a82b9a8f2821a27c7ccd08c156143c2525fba1db97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OAFVC2V%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbHqZVy2qQG86wNeRYbH0aitjkPUmXLXhzO9PxNh69OAiA%2BTkNNKFxcLnwcgOtsWNLk7I6saYi09NYeYDpn7LSmuiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYURWTvTs%2BNyuSYmXKtwDx6qBoZVxFCIsot%2Bd3dNv5GCuLgehLekoVZ68a1JuE7mB8pJn0tFp9oWGdq0VF2fY%2F8lJ14RXk8eyMNTJsfG6%2F%2FsLT2bn9SHLPBulfAwQdFPp%2FHRC3MbCQLblXiikytle2enJttwBHVb2Tf0Zs1lwZIYHjqUlWOrzYgmVdZa09d0C2ZctNmJWIsG1g5ofv%2BRuFkru2S4ZpiLOVig1TougdClDVMsKVo%2BaFstzTmIrR3eCAtEVjJe%2FNjMTvlCw10dHr4jzaaTTIA2HeKCz8sCRo80glnfIDY0pUCTe4Q8hwG9qxAVZHJICb%2FzvqdUl8sPDK%2BPp7fozpimiFzqhaqfqXeagKwij5eLKISnYluYxXF1cTPmymjH8W1KWI2Fs3m%2FdNnfLmySfd93uC37cD9FaPDSFg%2Bfh6cX30rQg%2FRAK46dpAlw2sEVAZwWwvBqQ49zWevmMVAkFKEwcU6eVOyM83uJsO7cCnFFdmuwa5nqfo3H1206xk58MlV%2BJlYvJIsPUNS22pxXM0CSM1QJ9XPXdyERI0IraJlx%2FfGCOOekuXRBZY1bCq0Njz9NtzB%2FI3vW4QT4WVHYcQFi82WsgbuC4WD1wwOBtG294iRVLJBnPfx%2Fm4hy8khbnyXGOxCIwloHwywY6pgEzXeLo222TzWz2o58owj9NVqrmbUR99oPFWrGttnC0%2F9BcMfgnbTRmUffYiX3MnjfQ8y5S%2BKFKrf5BZePiD3CxYVq4aXYnZYCFLc9HJSsvzXKiZN1WAV6XWJTg6qoJ26NfuAzTuJKnV3Wv853lFw6eT5Wnn2cIcFuwe%2F8Ryu2roLEufyrvgxuDiRPZdqTZzhCPs33z%2FFr1rVyZ2nmWHfVUtQ341jWP&X-Amz-Signature=7aae03755fcf221f60fbfe58787d549810770408db71a6fddb62b60635903931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OAFVC2V%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbHqZVy2qQG86wNeRYbH0aitjkPUmXLXhzO9PxNh69OAiA%2BTkNNKFxcLnwcgOtsWNLk7I6saYi09NYeYDpn7LSmuiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYURWTvTs%2BNyuSYmXKtwDx6qBoZVxFCIsot%2Bd3dNv5GCuLgehLekoVZ68a1JuE7mB8pJn0tFp9oWGdq0VF2fY%2F8lJ14RXk8eyMNTJsfG6%2F%2FsLT2bn9SHLPBulfAwQdFPp%2FHRC3MbCQLblXiikytle2enJttwBHVb2Tf0Zs1lwZIYHjqUlWOrzYgmVdZa09d0C2ZctNmJWIsG1g5ofv%2BRuFkru2S4ZpiLOVig1TougdClDVMsKVo%2BaFstzTmIrR3eCAtEVjJe%2FNjMTvlCw10dHr4jzaaTTIA2HeKCz8sCRo80glnfIDY0pUCTe4Q8hwG9qxAVZHJICb%2FzvqdUl8sPDK%2BPp7fozpimiFzqhaqfqXeagKwij5eLKISnYluYxXF1cTPmymjH8W1KWI2Fs3m%2FdNnfLmySfd93uC37cD9FaPDSFg%2Bfh6cX30rQg%2FRAK46dpAlw2sEVAZwWwvBqQ49zWevmMVAkFKEwcU6eVOyM83uJsO7cCnFFdmuwa5nqfo3H1206xk58MlV%2BJlYvJIsPUNS22pxXM0CSM1QJ9XPXdyERI0IraJlx%2FfGCOOekuXRBZY1bCq0Njz9NtzB%2FI3vW4QT4WVHYcQFi82WsgbuC4WD1wwOBtG294iRVLJBnPfx%2Fm4hy8khbnyXGOxCIwloHwywY6pgEzXeLo222TzWz2o58owj9NVqrmbUR99oPFWrGttnC0%2F9BcMfgnbTRmUffYiX3MnjfQ8y5S%2BKFKrf5BZePiD3CxYVq4aXYnZYCFLc9HJSsvzXKiZN1WAV6XWJTg6qoJ26NfuAzTuJKnV3Wv853lFw6eT5Wnn2cIcFuwe%2F8Ryu2roLEufyrvgxuDiRPZdqTZzhCPs33z%2FFr1rVyZ2nmWHfVUtQ341jWP&X-Amz-Signature=8df7461137068961fb4576c927277caba9e20d7e89a3b0cd5c8e41a2b06431b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OAFVC2V%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbHqZVy2qQG86wNeRYbH0aitjkPUmXLXhzO9PxNh69OAiA%2BTkNNKFxcLnwcgOtsWNLk7I6saYi09NYeYDpn7LSmuiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYURWTvTs%2BNyuSYmXKtwDx6qBoZVxFCIsot%2Bd3dNv5GCuLgehLekoVZ68a1JuE7mB8pJn0tFp9oWGdq0VF2fY%2F8lJ14RXk8eyMNTJsfG6%2F%2FsLT2bn9SHLPBulfAwQdFPp%2FHRC3MbCQLblXiikytle2enJttwBHVb2Tf0Zs1lwZIYHjqUlWOrzYgmVdZa09d0C2ZctNmJWIsG1g5ofv%2BRuFkru2S4ZpiLOVig1TougdClDVMsKVo%2BaFstzTmIrR3eCAtEVjJe%2FNjMTvlCw10dHr4jzaaTTIA2HeKCz8sCRo80glnfIDY0pUCTe4Q8hwG9qxAVZHJICb%2FzvqdUl8sPDK%2BPp7fozpimiFzqhaqfqXeagKwij5eLKISnYluYxXF1cTPmymjH8W1KWI2Fs3m%2FdNnfLmySfd93uC37cD9FaPDSFg%2Bfh6cX30rQg%2FRAK46dpAlw2sEVAZwWwvBqQ49zWevmMVAkFKEwcU6eVOyM83uJsO7cCnFFdmuwa5nqfo3H1206xk58MlV%2BJlYvJIsPUNS22pxXM0CSM1QJ9XPXdyERI0IraJlx%2FfGCOOekuXRBZY1bCq0Njz9NtzB%2FI3vW4QT4WVHYcQFi82WsgbuC4WD1wwOBtG294iRVLJBnPfx%2Fm4hy8khbnyXGOxCIwloHwywY6pgEzXeLo222TzWz2o58owj9NVqrmbUR99oPFWrGttnC0%2F9BcMfgnbTRmUffYiX3MnjfQ8y5S%2BKFKrf5BZePiD3CxYVq4aXYnZYCFLc9HJSsvzXKiZN1WAV6XWJTg6qoJ26NfuAzTuJKnV3Wv853lFw6eT5Wnn2cIcFuwe%2F8Ryu2roLEufyrvgxuDiRPZdqTZzhCPs33z%2FFr1rVyZ2nmWHfVUtQ341jWP&X-Amz-Signature=87a74a1e11a71a753f90fece3b56db0b4355c67ba6fac10beb86bf7a82d668af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OAFVC2V%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbHqZVy2qQG86wNeRYbH0aitjkPUmXLXhzO9PxNh69OAiA%2BTkNNKFxcLnwcgOtsWNLk7I6saYi09NYeYDpn7LSmuiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYURWTvTs%2BNyuSYmXKtwDx6qBoZVxFCIsot%2Bd3dNv5GCuLgehLekoVZ68a1JuE7mB8pJn0tFp9oWGdq0VF2fY%2F8lJ14RXk8eyMNTJsfG6%2F%2FsLT2bn9SHLPBulfAwQdFPp%2FHRC3MbCQLblXiikytle2enJttwBHVb2Tf0Zs1lwZIYHjqUlWOrzYgmVdZa09d0C2ZctNmJWIsG1g5ofv%2BRuFkru2S4ZpiLOVig1TougdClDVMsKVo%2BaFstzTmIrR3eCAtEVjJe%2FNjMTvlCw10dHr4jzaaTTIA2HeKCz8sCRo80glnfIDY0pUCTe4Q8hwG9qxAVZHJICb%2FzvqdUl8sPDK%2BPp7fozpimiFzqhaqfqXeagKwij5eLKISnYluYxXF1cTPmymjH8W1KWI2Fs3m%2FdNnfLmySfd93uC37cD9FaPDSFg%2Bfh6cX30rQg%2FRAK46dpAlw2sEVAZwWwvBqQ49zWevmMVAkFKEwcU6eVOyM83uJsO7cCnFFdmuwa5nqfo3H1206xk58MlV%2BJlYvJIsPUNS22pxXM0CSM1QJ9XPXdyERI0IraJlx%2FfGCOOekuXRBZY1bCq0Njz9NtzB%2FI3vW4QT4WVHYcQFi82WsgbuC4WD1wwOBtG294iRVLJBnPfx%2Fm4hy8khbnyXGOxCIwloHwywY6pgEzXeLo222TzWz2o58owj9NVqrmbUR99oPFWrGttnC0%2F9BcMfgnbTRmUffYiX3MnjfQ8y5S%2BKFKrf5BZePiD3CxYVq4aXYnZYCFLc9HJSsvzXKiZN1WAV6XWJTg6qoJ26NfuAzTuJKnV3Wv853lFw6eT5Wnn2cIcFuwe%2F8Ryu2roLEufyrvgxuDiRPZdqTZzhCPs33z%2FFr1rVyZ2nmWHfVUtQ341jWP&X-Amz-Signature=d30b74d04ecbf0256234ab8812587bafc46f1bfb2b28722dddcf6b2a097f5958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OAFVC2V%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbHqZVy2qQG86wNeRYbH0aitjkPUmXLXhzO9PxNh69OAiA%2BTkNNKFxcLnwcgOtsWNLk7I6saYi09NYeYDpn7LSmuiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYURWTvTs%2BNyuSYmXKtwDx6qBoZVxFCIsot%2Bd3dNv5GCuLgehLekoVZ68a1JuE7mB8pJn0tFp9oWGdq0VF2fY%2F8lJ14RXk8eyMNTJsfG6%2F%2FsLT2bn9SHLPBulfAwQdFPp%2FHRC3MbCQLblXiikytle2enJttwBHVb2Tf0Zs1lwZIYHjqUlWOrzYgmVdZa09d0C2ZctNmJWIsG1g5ofv%2BRuFkru2S4ZpiLOVig1TougdClDVMsKVo%2BaFstzTmIrR3eCAtEVjJe%2FNjMTvlCw10dHr4jzaaTTIA2HeKCz8sCRo80glnfIDY0pUCTe4Q8hwG9qxAVZHJICb%2FzvqdUl8sPDK%2BPp7fozpimiFzqhaqfqXeagKwij5eLKISnYluYxXF1cTPmymjH8W1KWI2Fs3m%2FdNnfLmySfd93uC37cD9FaPDSFg%2Bfh6cX30rQg%2FRAK46dpAlw2sEVAZwWwvBqQ49zWevmMVAkFKEwcU6eVOyM83uJsO7cCnFFdmuwa5nqfo3H1206xk58MlV%2BJlYvJIsPUNS22pxXM0CSM1QJ9XPXdyERI0IraJlx%2FfGCOOekuXRBZY1bCq0Njz9NtzB%2FI3vW4QT4WVHYcQFi82WsgbuC4WD1wwOBtG294iRVLJBnPfx%2Fm4hy8khbnyXGOxCIwloHwywY6pgEzXeLo222TzWz2o58owj9NVqrmbUR99oPFWrGttnC0%2F9BcMfgnbTRmUffYiX3MnjfQ8y5S%2BKFKrf5BZePiD3CxYVq4aXYnZYCFLc9HJSsvzXKiZN1WAV6XWJTg6qoJ26NfuAzTuJKnV3Wv853lFw6eT5Wnn2cIcFuwe%2F8Ryu2roLEufyrvgxuDiRPZdqTZzhCPs33z%2FFr1rVyZ2nmWHfVUtQ341jWP&X-Amz-Signature=b11cf11951985a25668b442615c0492de70404a58f63436e71c4c324a1124c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVYXMRSI%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXaWnHF3Fx0docu7peiv9jI2UyFn6hppBxeZNhS7YqywIhAL21zlKnfS3Xlaa40dP%2F7XIQbdWsfUoRhXgMFTqCIBFxKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRtGbDkyoWvv7H8xAq3APSUDAFrsbVfp2W3Xb08hQzC9OZVOH4yvihNGMU%2F8R2U83yctl3Rr8pgfE9hSk4nD1IffhO%2FK%2F8ROiq0XIO4268%2FHztZiIRIq%2B80yH44s0xSU3KeSzp%2BzuGrv%2BgDnXBonnQbJrIh3G4kL2CnKddD7drOSDaWBdLqZ7ULaIX9T8Z6h8xB6H4x4iboMwuYol37nyRNNSwbAvh8Ua0TQWuW4E6Ik5SWdvjtHRuVKV2h1LSZ9PhrNQgHTcDJXzvEzkQ4kVcn6iLKBgzWudjhv6nU1YM%2BEPExfnJAexss%2BncB7I8tInkflYazQyNvr5qOldfyIOgXSTzYiCqK%2Fzas6R6wdrzKamjE%2FiPQRmE7QWwkv6%2FdC2SZkYAa9nMC%2BfjZASBmFCoDnHNwOG7KYG%2BRk8ETHrT9Ll%2BO1mEP6DiFLQQpFkLFjOX9DUyDhtO2u5yLGBF0T%2F%2F2p2ntiVuYH8VzgCJUhAFVAxhmgwC6IQIy5Q%2Fy0E98yXVrw%2BDNJRVaRXfQyHsQwkJ%2FkzvMUFHywKaG7In8A6LCBaWfyBSa2HirRLtqA3%2BdhqSrwuvxws0PDJv1Dwfv5BhDIs72LYEWVscIf4kXxK%2FCYLdt43huiMV37RL5WwiEX9yBDRPYwVSgaIwTjDJgfDLBjqkARINod%2FuQwTT%2FAa70KfaWFlUKKhOay%2B3LwBeKioxBqWtPqNrnR0zV4cHxquB5RD6uGZi3K%2BDe0q8R5k%2BvWc3ltM%2Fak48ido5GFtQ4yT9TdPJWF%2FdsimQaFQR7qYa4rPBvAX6eoAJH7iCV%2FIUl1cM21n7lt71b7f1%2F48M994Q9r%2FnQ0EWhcNfSFIJQq3p2Qob6eV7%2BHSXsTBmEFI4PG9Zi9eCETIq&X-Amz-Signature=ff232c89437952fa1c2d4a75feb60d660dea7764eaef99af22767be84cf04084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM5NR4WK%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAp55EXZfRTSC%2BT1i4Z4SG%2Ff8OmxTiA8lkcd%2BY9rZq%2FwIgJjrmI73MmxjqGoiiyWu445xn1oW2Vx%2BGsEWCF00aFOwqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8Tsl7Mi9jmqSmNKSrcA5%2F%2BoE%2B%2B2yXaIKGNwtk6ByMAOCikzVMeUcXEEohHJgfWn5peM%2Bvu%2BRhEFYMbynV2yJG4zCVHWGHtTzMBopvESyN6lN87z7m925AIeLvwPRySGgs%2BKiQ8SI8TtrcWyyIDgUWXR8fxO3k4vkhtXKv41%2BonwYCcDC%2FYdMvvrn31oEvtK2Z11XuCcDaiYjpsofUlbns5fXC0Xzco3gLfNgWMdPDnl3hs1imDoxBNQY3FcDUUuiSsrJn9zlzdwoqCmvSMWrJda6yLLDXzMFqWoPIV2j01V2JrSdsV3YiaP8ULDa6YwbwuNSFrSbgaPM%2BPe2Ug7QsS%2Bo5iqaZXLXnylbmKGNSnKbYR4rdJUZJRaDnxOLOh%2FyoBMGiBtgCNs258lrO0NY2U9Mterdh68qaKLj7i7lINPOtAS2ZBEt3jiWbUr6hLxUibQGyWpF8ZkNjTTL3XPiFxBVNpzY9bLddvyEG1iQjYvt0NrzgGnnxFbxjBUukiu%2FNDLCzKhAZEtVkiHz6IqSDuxbTUUwO9hqCMd0Pe3qpX1lSv%2Fi8DY7guzW4XRDPmKCpiU1pjZWIUXg4g0lZ%2Bc05Cxe13%2BgQd6Zq1I2k%2BmVPJ1w8r421c8D7K04gFm%2BMPgJePyzhZMev3NdUZMIiC8MsGOqUBpzYm38ia5Ku9ggHQ3pGu3WHQEY0sKRJnIOQsO%2F3hJYx3l8q6Et%2B79G%2BbJa0nVlbzlvSTfSULV%2Fzqgq2hrHjVasg0xGfKiV0X1J%2F5ooMT2tHPjf87VRZ9dN835LBlkjemyHyLSSAWnREezHca9G5ZhxJ1R2KoKHYl2DqsDcSX57zHs0ncOGa%2Fav9hPETYVXoYklshORVsZX9ibbXSOxnfy0v0hM7l&X-Amz-Signature=031cb9f5cc4c162187e66853101989040e28acc39a254fd95542e937c3086d9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5KV3LZY%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCujjLjvqdXFaHaYw1VVck3UEmQl%2FDIiG%2BfxnHRDQdKcAIhAPdwDV0WUob0oQmO9Udh48Z5oB2KaNH3oAo%2F7UvNLxTmKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkUogeQkeuAWlDZIYq3APPVoCO4VkMx5%2Bot96fSpEjghlB00%2BMc%2Fec6v%2BzfGPp8aQOgAzolvaRV2Y8Slxe4SmuJpx6FePC0uHH7c7I8tboCvI9lkm1bqbaqVHMIOaKhmFwG4rKLAUf%2B7CUTBY5uXo%2BX67rjgP5PaOUDGihf7aDHXx4K8%2FZSrBIG4QXTH8gzgRwkTI1BgvAZzDgkj138KJqnw8xir0eNar%2BaRlfijBl3%2BrQTpzIY7IsQ%2FxqVf02BSwSdDt%2BBIv13jvQ2iipWUmQCAAgTtBe9Lox7%2BVl%2BCMLFtRA8vlYy3IQoBwC5JhBUtCdowQuS2kRq0rqrdvLQZhxlNHiHxTdR%2BJ%2FWUuTxHueLrTtn2m8ECvt3qrnl1xrUma%2B5FXGjMqK4tuG%2FOcPdW3IJqTk%2Bk9WXp%2B%2Fkpx7WwPnIdzrEpdprtd4HmjYLJSXo3jGGPN0I1KsmS0oJRml%2BiEm%2FN%2FFvn2JXLnZQJ%2FcIj3oW5d6lToh73o4hAfwUDpgAI3DIZxBvzFmyJREOfhWKR6ybhwfr4eEFILE%2BxeY9mn2JL%2FScuqjqoVLsyrBA4TmT7fkSUw9Hzl2uCkTWZ4YskoTFipeuePckNGsjli6usiaB0sUkE8ElR5wOlrxpKy%2FoW1oa2McpwHu3mQN%2BDCTgvDLBjqkAS3QlKwTgT0x7bPyPoz6RhKBrJYwacfAupVwpKaC%2BL2F%2Fd1lXD3ufZ4hNBjqX8wV%2B%2B81ZGKAgsjiWcEt2DXAMlvRlEquQGmK3wL33u33DGgWALNHRMbDNnap87s8%2FpII6FB8RRcA8TGOLOvagMpPi27gl%2BuwGi2B9Q%2F0aMaqq3PK03uMVilLrbM6RDRJnGtDuSeb1X%2BqaG%2FS8W0OeVeU%2BoIpQ8%2F%2F&X-Amz-Signature=47b29cb571f0dd87d2ecda5071f94c4baa67fdc73745c184708c5d4eb4369653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OAFVC2V%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbHqZVy2qQG86wNeRYbH0aitjkPUmXLXhzO9PxNh69OAiA%2BTkNNKFxcLnwcgOtsWNLk7I6saYi09NYeYDpn7LSmuiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYURWTvTs%2BNyuSYmXKtwDx6qBoZVxFCIsot%2Bd3dNv5GCuLgehLekoVZ68a1JuE7mB8pJn0tFp9oWGdq0VF2fY%2F8lJ14RXk8eyMNTJsfG6%2F%2FsLT2bn9SHLPBulfAwQdFPp%2FHRC3MbCQLblXiikytle2enJttwBHVb2Tf0Zs1lwZIYHjqUlWOrzYgmVdZa09d0C2ZctNmJWIsG1g5ofv%2BRuFkru2S4ZpiLOVig1TougdClDVMsKVo%2BaFstzTmIrR3eCAtEVjJe%2FNjMTvlCw10dHr4jzaaTTIA2HeKCz8sCRo80glnfIDY0pUCTe4Q8hwG9qxAVZHJICb%2FzvqdUl8sPDK%2BPp7fozpimiFzqhaqfqXeagKwij5eLKISnYluYxXF1cTPmymjH8W1KWI2Fs3m%2FdNnfLmySfd93uC37cD9FaPDSFg%2Bfh6cX30rQg%2FRAK46dpAlw2sEVAZwWwvBqQ49zWevmMVAkFKEwcU6eVOyM83uJsO7cCnFFdmuwa5nqfo3H1206xk58MlV%2BJlYvJIsPUNS22pxXM0CSM1QJ9XPXdyERI0IraJlx%2FfGCOOekuXRBZY1bCq0Njz9NtzB%2FI3vW4QT4WVHYcQFi82WsgbuC4WD1wwOBtG294iRVLJBnPfx%2Fm4hy8khbnyXGOxCIwloHwywY6pgEzXeLo222TzWz2o58owj9NVqrmbUR99oPFWrGttnC0%2F9BcMfgnbTRmUffYiX3MnjfQ8y5S%2BKFKrf5BZePiD3CxYVq4aXYnZYCFLc9HJSsvzXKiZN1WAV6XWJTg6qoJ26NfuAzTuJKnV3Wv853lFw6eT5Wnn2cIcFuwe%2F8Ryu2roLEufyrvgxuDiRPZdqTZzhCPs33z%2FFr1rVyZ2nmWHfVUtQ341jWP&X-Amz-Signature=65beee187c421d1928006b203c477dd00ebdc744e94ab878a0b443638651a032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQB4VTER%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEXpAaXu8Si2eJ%2FRVH9Q1swuayDLPF2gkHW5HdUSnObQIhAL8EnreDBzRGdD9zY%2BEPma%2BCH0WQahk16agDWFrlP%2BWZKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylM%2BBlv0VmsZexLigq3AOxwwrjKMxBF7I4tetXQ8kiIDxsAXiEmQqwXAAEeB3%2BuDvCXRuU5NeQ8q0RwndByiB8E4TugVNLfyiD1CPZZfDG%2Fmq8BFrTPDbOb%2FvsjnoEdNr9EYCztqWA%2FwiFAaAevqokgoNRKadg8ArOfnvCBWGIq6JQpFiBQEPk9yKbx9PtRXA7%2B1YhoZKmgDRdY8q%2FGXYbol6SPPmZ%2FIrinZdVoeNg8AyRFS1yjLcYf%2BEe5zXDRPG5ZcRQFKoqOxF%2B4Gsn48HzuL8HeFZqImclXx24BW%2F0UubMwCpdDnBtlIKZt8xTN8cA3r57%2BQf3BF6aZURi3ZKkQTRWWwhPXx24cTRoSjalnKTCttTVr61FwO0D0L%2BEUGcWFqwDkkSeCvJLYF1tqL6NTIcUa8p04L1rMKmB%2BnTDultITGGb6enPmrs1lIPw16aUTwD8qwnRjizNFjisbKwpYellfjM6bn5bhtgn0rCJ7QW%2FNjqvjKOrQBjilM%2BoXJu1TnqE5wtrbRGKDAegixOn6gvHocrfMe%2BtCZUuYai8d2cgNhv1MI37NYgUM8T0YAx2th3C0BNw7dxR5vruZCT4NXv0RSUpDcaZ%2BX10l7yOY0NbU%2BUVJN9dZp71LocxWh25xYbN9HPckwNxsTD1gfDLBjqkAem56Ln%2FYUgfUyERCpdYNfgc9ddz9BPrcXy91NmdmKmxoXrdb9hXpTRm7b1LSzDmSSWWpOo3DFprxdVGhyUN10eiZEKjDYpL%2FxKc9LT%2BlPX5sq%2FIIVLGCv%2F7FcZp0lrGuLUo8wjFNydO%2FhjU3tNOMTvTVYyHGO8jNSbCp4Wt8rh5kwUYTVxEaWMlhiJf3VwnxyPXzcykwyKEX%2B%2BVnVAjxvU9rSFa&X-Amz-Signature=12915545cab0aa2bd1935c4c564780070e47bac0020e9d604b7c82aa7f625c14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OAFVC2V%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbHqZVy2qQG86wNeRYbH0aitjkPUmXLXhzO9PxNh69OAiA%2BTkNNKFxcLnwcgOtsWNLk7I6saYi09NYeYDpn7LSmuiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYURWTvTs%2BNyuSYmXKtwDx6qBoZVxFCIsot%2Bd3dNv5GCuLgehLekoVZ68a1JuE7mB8pJn0tFp9oWGdq0VF2fY%2F8lJ14RXk8eyMNTJsfG6%2F%2FsLT2bn9SHLPBulfAwQdFPp%2FHRC3MbCQLblXiikytle2enJttwBHVb2Tf0Zs1lwZIYHjqUlWOrzYgmVdZa09d0C2ZctNmJWIsG1g5ofv%2BRuFkru2S4ZpiLOVig1TougdClDVMsKVo%2BaFstzTmIrR3eCAtEVjJe%2FNjMTvlCw10dHr4jzaaTTIA2HeKCz8sCRo80glnfIDY0pUCTe4Q8hwG9qxAVZHJICb%2FzvqdUl8sPDK%2BPp7fozpimiFzqhaqfqXeagKwij5eLKISnYluYxXF1cTPmymjH8W1KWI2Fs3m%2FdNnfLmySfd93uC37cD9FaPDSFg%2Bfh6cX30rQg%2FRAK46dpAlw2sEVAZwWwvBqQ49zWevmMVAkFKEwcU6eVOyM83uJsO7cCnFFdmuwa5nqfo3H1206xk58MlV%2BJlYvJIsPUNS22pxXM0CSM1QJ9XPXdyERI0IraJlx%2FfGCOOekuXRBZY1bCq0Njz9NtzB%2FI3vW4QT4WVHYcQFi82WsgbuC4WD1wwOBtG294iRVLJBnPfx%2Fm4hy8khbnyXGOxCIwloHwywY6pgEzXeLo222TzWz2o58owj9NVqrmbUR99oPFWrGttnC0%2F9BcMfgnbTRmUffYiX3MnjfQ8y5S%2BKFKrf5BZePiD3CxYVq4aXYnZYCFLc9HJSsvzXKiZN1WAV6XWJTg6qoJ26NfuAzTuJKnV3Wv853lFw6eT5Wnn2cIcFuwe%2F8Ryu2roLEufyrvgxuDiRPZdqTZzhCPs33z%2FFr1rVyZ2nmWHfVUtQ341jWP&X-Amz-Signature=ddf9ebb65fd82fe64b4bebc1564e37076cf4c947864798e129046a2613eb737f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ALQY5HZ%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7IrC32f72UZSEEm8ssFZmPI0dh74SuoUKeLV2WnsLcQIhAPqNUGy%2BkFxmWqJ7cnCUZcWQZ0J6KpkdiEVCdXSaNGroKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhuUv07NRzgPWGg1Mq3AMtJQqxup8MgMoB1ILGeJiF7%2BGKZuOOz3UY4ossABQG%2BueAVOvX1ZNpb881Z1f4TCqcjw9wxH9ctr4%2B2bAiKgAs0YOJZGnLjKFhcOAxJmd1N7hRtPQPnX5Giw%2FIE9jMmPaFWEmC9Qam8mI8%2BN9Aq8lZXcoAvxxikj%2BOvEN2x6ZuDrTCOvMrca5XQl69cD3cVVhdp0TcQPx%2FbQgqJl3y%2FFkYKx%2BGFgXjq%2BiyUXtb%2FYl1HNJUpVCVviiXff0m6czUKhVGyCY8AYODTA7t6vaxahTWuBoQXtj7vx2L%2BeBMcWTl3ut6GJ%2Bsufs5t9wLPemV7ST1xlt8VirI6n0X14Q4Rtse4QvXszjRhIVmX6583oBXE3yjB4RKBX%2BatlO1G7AO%2BN784JsbIdHSGea7H3h9RRkA3qyWiaM3OQZnq58DKbYWm8jIcgQkuZRm9r%2FANojSrL%2FKhEIuvo7mwktRFbdGPnKmnzy6B%2F7hYkOYNYklGcyvAMlr0RVFhakC%2FJt5S3s7ruwTArsy%2FtfkX8e7Uw3IbD7JHp%2BjJbO75bpy0OtuWFRzP5fbrkvu%2BoI852ZXnBNFMMhXu1Y1va9Pqh4Cusv1hyO8b7ClBvEv55GuRLyKfgDi4tCPeGotCMpjviSRrzCOgfDLBjqkAfeRu%2B3D5h9BSMSA7BLQOVCYHPnvk78oEY2tH1KW%2By09oRwOtlLJDEn2qz2WEcWjxJRq1ZZzzMPvs34fB2KTvILkCkDRLeqQhfB%2BgyXY07i5b7WvIll2bZdsTL9BCoZcRDwYO9bcHEM1aulzY796wCZxqs3%2BvIFuKLeIswEunmRlOHAMYKNdk8WmAH%2BP3Vstao4DOCAQAxUr%2BlMwxFJV5hxJskbq&X-Amz-Signature=2b6d89eaec1e1d1426ef3ad87fd1c39be130498a98c1288ff689f521aee7ff6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OAFVC2V%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbHqZVy2qQG86wNeRYbH0aitjkPUmXLXhzO9PxNh69OAiA%2BTkNNKFxcLnwcgOtsWNLk7I6saYi09NYeYDpn7LSmuiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYURWTvTs%2BNyuSYmXKtwDx6qBoZVxFCIsot%2Bd3dNv5GCuLgehLekoVZ68a1JuE7mB8pJn0tFp9oWGdq0VF2fY%2F8lJ14RXk8eyMNTJsfG6%2F%2FsLT2bn9SHLPBulfAwQdFPp%2FHRC3MbCQLblXiikytle2enJttwBHVb2Tf0Zs1lwZIYHjqUlWOrzYgmVdZa09d0C2ZctNmJWIsG1g5ofv%2BRuFkru2S4ZpiLOVig1TougdClDVMsKVo%2BaFstzTmIrR3eCAtEVjJe%2FNjMTvlCw10dHr4jzaaTTIA2HeKCz8sCRo80glnfIDY0pUCTe4Q8hwG9qxAVZHJICb%2FzvqdUl8sPDK%2BPp7fozpimiFzqhaqfqXeagKwij5eLKISnYluYxXF1cTPmymjH8W1KWI2Fs3m%2FdNnfLmySfd93uC37cD9FaPDSFg%2Bfh6cX30rQg%2FRAK46dpAlw2sEVAZwWwvBqQ49zWevmMVAkFKEwcU6eVOyM83uJsO7cCnFFdmuwa5nqfo3H1206xk58MlV%2BJlYvJIsPUNS22pxXM0CSM1QJ9XPXdyERI0IraJlx%2FfGCOOekuXRBZY1bCq0Njz9NtzB%2FI3vW4QT4WVHYcQFi82WsgbuC4WD1wwOBtG294iRVLJBnPfx%2Fm4hy8khbnyXGOxCIwloHwywY6pgEzXeLo222TzWz2o58owj9NVqrmbUR99oPFWrGttnC0%2F9BcMfgnbTRmUffYiX3MnjfQ8y5S%2BKFKrf5BZePiD3CxYVq4aXYnZYCFLc9HJSsvzXKiZN1WAV6XWJTg6qoJ26NfuAzTuJKnV3Wv853lFw6eT5Wnn2cIcFuwe%2F8Ryu2roLEufyrvgxuDiRPZdqTZzhCPs33z%2FFr1rVyZ2nmWHfVUtQ341jWP&X-Amz-Signature=1b0e97ced3f436b0e6ffd8c5caa89c75995e6b58f4a8b805b6a3a13f4bcf60fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM4EQ7GV%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC74Iw6tc8%2FiRpb9OflZuA00uEGPF8ZFYqlwkMqOyldlAiAe9ReKt9zQxrnZngGPZ4SAZZ%2FLkDtmaC3Tc0J%2FRHmYhyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5poisJ0unQlnCf2nKtwDkp5RZnVcxAHl6X6DalEjnVRWG48g0LVLe8yEeTan2KC8arsxoit12Qa7DZyKHSu9JIHnfglzI8%2BbWQdU%2BAaKWId7cSTYGWB1MQ77bdPRqL4npTJRrDBF0NankrXK43UzIx%2FObcoJONufzdIPJEZqOVXIrGxjo4%2Fodv8BfMJpiRZ9C1BkxYv5x65%2BRftjDn19eSIYzfAXx%2FdIJ8cFSnfzYCvcOyNbQfuaEu4VQc%2BEJlU%2FHAaI5HXn%2Bcb1SsZb0EqAMGdXs7rr3qBaH03dMvx6eE0YXEIl0JhQgXIT%2F7EqS%2Fgyv3NDoy4wJJrf1ZirG%2F68VDQTxrJtroxvaYamkNWzQ2I75%2BqMoXcW7U9Fvg4lUEa0z62AX5g8QniATGlt6FK3BLx5YYGbuLbt8X9imTrLxuZt8g0N7mEEO9abthK43cUqn4l3xqfPIwIkXjcLj8ARF73TafpONKjVGxZgZkP0rgkAh8UT03y0bCUYXDwie9xenEu1riVXWsnw8XPImz5ONzea%2B7q%2BK5UPoDaAde5edo4URRIshucb570UdFg8GP6yGx2i3qLy2qydTO6VyNodjxFl1swHWg7QCEzzklUpo2CjsNjfnz7ahyE4lOq1o0p4VpmDm6S5oK2OIuIw44HwywY6pgHsAXSx8rbs5yyuZ2BGcDSjzZJW0tKuUBIZ8%2FzBnDUpFRILEWlWPXz5ynCSitqn1szAYQ%2B20yXhR9o0tZDH92%2Bnw73h2H%2BMKpAvvjei6JHnIlvkqZWERs57JkNJy4ipfco%2BqWogOd3eA6yUbYvv3Up6iQ7RkBeed5k21QBVOb8xtaaihlZ0K2utQ3EIe4ZlvdkRpfPUSLxwLySZ5CL9eyNT3zvg6TDQ&X-Amz-Signature=50d7bef58054a237562e9992c2b00c387222377d201e7cae00a02ecfc09bb6d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OAFVC2V%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbHqZVy2qQG86wNeRYbH0aitjkPUmXLXhzO9PxNh69OAiA%2BTkNNKFxcLnwcgOtsWNLk7I6saYi09NYeYDpn7LSmuiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYURWTvTs%2BNyuSYmXKtwDx6qBoZVxFCIsot%2Bd3dNv5GCuLgehLekoVZ68a1JuE7mB8pJn0tFp9oWGdq0VF2fY%2F8lJ14RXk8eyMNTJsfG6%2F%2FsLT2bn9SHLPBulfAwQdFPp%2FHRC3MbCQLblXiikytle2enJttwBHVb2Tf0Zs1lwZIYHjqUlWOrzYgmVdZa09d0C2ZctNmJWIsG1g5ofv%2BRuFkru2S4ZpiLOVig1TougdClDVMsKVo%2BaFstzTmIrR3eCAtEVjJe%2FNjMTvlCw10dHr4jzaaTTIA2HeKCz8sCRo80glnfIDY0pUCTe4Q8hwG9qxAVZHJICb%2FzvqdUl8sPDK%2BPp7fozpimiFzqhaqfqXeagKwij5eLKISnYluYxXF1cTPmymjH8W1KWI2Fs3m%2FdNnfLmySfd93uC37cD9FaPDSFg%2Bfh6cX30rQg%2FRAK46dpAlw2sEVAZwWwvBqQ49zWevmMVAkFKEwcU6eVOyM83uJsO7cCnFFdmuwa5nqfo3H1206xk58MlV%2BJlYvJIsPUNS22pxXM0CSM1QJ9XPXdyERI0IraJlx%2FfGCOOekuXRBZY1bCq0Njz9NtzB%2FI3vW4QT4WVHYcQFi82WsgbuC4WD1wwOBtG294iRVLJBnPfx%2Fm4hy8khbnyXGOxCIwloHwywY6pgEzXeLo222TzWz2o58owj9NVqrmbUR99oPFWrGttnC0%2F9BcMfgnbTRmUffYiX3MnjfQ8y5S%2BKFKrf5BZePiD3CxYVq4aXYnZYCFLc9HJSsvzXKiZN1WAV6XWJTg6qoJ26NfuAzTuJKnV3Wv853lFw6eT5Wnn2cIcFuwe%2F8Ryu2roLEufyrvgxuDiRPZdqTZzhCPs33z%2FFr1rVyZ2nmWHfVUtQ341jWP&X-Amz-Signature=4f4194392accb12f7d684715b2621d4ec38918c2e5c7cfb1e2e7bcd112c7df96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZ5MWTI%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWrDFKOKPyffjv%2B3VBBDyV6ZCW9b0BqaxlV%2Bla1jZghQIhAOeIDs0EzSO9fQv01LMlGiMkLD01fHGJP3iBhOHSsfUJKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhbPnJn1aFu%2Bdc46Aq3AOjFCeIgCaimDtOYHRTr84ZdMwC81zr5b9QdVUAJIb%2BGgBunzYHqq%2BJ75gPQNaSmtCERF%2FwcpyOMXoQPH95Na8g%2Fr07xguj1e0tMufDsg%2BS8VjSLbGaMmJLPvOgkWLFfI%2Fvztg8L7Z%2F1x6BfZrzsRZsdVSShdb8%2FwR0%2BueZDn88nJI2EONwVBvXdXXpH191By6qI9TiaOJpqA4CBckBDwGYMOjXBcO0S654WTZ3kuAUI%2FqQzCJdGwbZNQBLf%2F1e%2F0DHZN6kYi%2B5nlb7%2Fe06j158NQBSxeLXKYk1JnkqEI1lxI7FcuQGlUeLKJT4ZU%2BkPUqLNeQ0KuOrzmgp7%2FhyQ7L7sXepcsosc64dHeNQZlMhgrhZzdED9x9nLkHjxX8Pgkhdgj6VeJhqNjzmy9%2Bn7haSapvSVxFmkx9tEEPXlMuxMIJ2wbG640Z5G1t029RXhmfNM4HuVHXstxWdjZeFi1zzGvz1WPU0zLF7NOmg0s7rZBK4A5ZFLQd29ncdwaH6%2BPDNG34k5cjcFeAlkTj9zr6xGLEJ800xy9VFkWvoV3QPrNYGBc%2FB8tu1R18isBJCAtaZ5z4lKgWROmH18MSaBaEtjzczbHjii8vZJODE%2Bdy5yjOHiW0zup5BrxXu5jD1gfDLBjqkAQfoYVwdgGHaQ3Cb%2FifJgBAb5PKGuDTV2vEGyZjnDirnWNEzcP7Hsl%2B7ZqdJgejBoDJ27bPhJbTNUTPCWAtDT4RXgb%2B3orWh3PSVxYCrizqYMH4ms563CVftFUiEMknJ0MRBWMUoJx3O6K%2B5nP1c9T7%2B0BsWZy13HjL85%2F8NcZ43Rq3wkteGi9YIxFaFH7U9I7p79ZNtkiB9iZK%2Fn5EE%2FaUl9KWE&X-Amz-Signature=b688544c4449bc2086c8a62f006ab755319f95bbf1f502b3e627a361f9df45ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OAFVC2V%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbHqZVy2qQG86wNeRYbH0aitjkPUmXLXhzO9PxNh69OAiA%2BTkNNKFxcLnwcgOtsWNLk7I6saYi09NYeYDpn7LSmuiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYURWTvTs%2BNyuSYmXKtwDx6qBoZVxFCIsot%2Bd3dNv5GCuLgehLekoVZ68a1JuE7mB8pJn0tFp9oWGdq0VF2fY%2F8lJ14RXk8eyMNTJsfG6%2F%2FsLT2bn9SHLPBulfAwQdFPp%2FHRC3MbCQLblXiikytle2enJttwBHVb2Tf0Zs1lwZIYHjqUlWOrzYgmVdZa09d0C2ZctNmJWIsG1g5ofv%2BRuFkru2S4ZpiLOVig1TougdClDVMsKVo%2BaFstzTmIrR3eCAtEVjJe%2FNjMTvlCw10dHr4jzaaTTIA2HeKCz8sCRo80glnfIDY0pUCTe4Q8hwG9qxAVZHJICb%2FzvqdUl8sPDK%2BPp7fozpimiFzqhaqfqXeagKwij5eLKISnYluYxXF1cTPmymjH8W1KWI2Fs3m%2FdNnfLmySfd93uC37cD9FaPDSFg%2Bfh6cX30rQg%2FRAK46dpAlw2sEVAZwWwvBqQ49zWevmMVAkFKEwcU6eVOyM83uJsO7cCnFFdmuwa5nqfo3H1206xk58MlV%2BJlYvJIsPUNS22pxXM0CSM1QJ9XPXdyERI0IraJlx%2FfGCOOekuXRBZY1bCq0Njz9NtzB%2FI3vW4QT4WVHYcQFi82WsgbuC4WD1wwOBtG294iRVLJBnPfx%2Fm4hy8khbnyXGOxCIwloHwywY6pgEzXeLo222TzWz2o58owj9NVqrmbUR99oPFWrGttnC0%2F9BcMfgnbTRmUffYiX3MnjfQ8y5S%2BKFKrf5BZePiD3CxYVq4aXYnZYCFLc9HJSsvzXKiZN1WAV6XWJTg6qoJ26NfuAzTuJKnV3Wv853lFw6eT5Wnn2cIcFuwe%2F8Ryu2roLEufyrvgxuDiRPZdqTZzhCPs33z%2FFr1rVyZ2nmWHfVUtQ341jWP&X-Amz-Signature=cf789801537fdfdb58051c28e203aa5d2008bbe93df4f21db2a588cbacc87ae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2AW7A3L%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxQPiz2Knnnr2dvwEdwwZcozfPnKCWWXXWF2XtLZ1%2FAAIhAItcMiUQNodM4MVH%2Bmj5BTVcVTE9XxG3HFSPDdkKTLmuKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiCTRtP4AOzMrW98Iq3AM7uxy9V8yLEhD0B0kWlghvNhQNL0P6IkYwiXh53Aw%2FSiGkQoCVxB3iqW9ipcBQBllFs4%2FJZFdmlCqChQbyqJzPocjJYdq9DTxUyokJjMTQ3HF2lwBZZkOkKDSql3Iv1yPGYg5HIJRfD5zc1WC7AKcHWII7zhenHE2JN4YBo6lRZt7vUtDIKM77EWmjB%2Fs%2Bha6nFbfSYE4fk9lc9rZo%2FrclQJB4gXkfBa0%2FthscSYlh%2FWO1vXspecuVXksZGAYUBL330FsNyrYBy%2F9GYXvgP789ICkUtwf%2F7lgtBWySevDX4nyjBEwParD8rMd%2FKCdnIGxmXa4gNPBz0d4SEmPdHKQ%2BYiQON1CW%2BJYcV9mnRFnWrsVL0JO2DdLq8nQlUBkbm1N8hbf9ZahA9FYEI0eCHPh5HC6yQcKy2D8AmY8IAS%2FGjdWLgsdairclRpQ0OKRAjkLQzkqCUwmhJdjmV%2Fel5nt1nTxphoj1LvZrO5NNnUGR0n4ICgyCkY%2BVPPVf4QqxJTO0g1YHcyzUDH5oeDUn8EVOe%2FeChrLb32bN3i50mrhA85pW%2Fi4VJwF%2BcXmF9GVls4%2B8lKrgiKSk0f0HZ3HtT72BnCNON9pgcnbBP4gqt1D0HNOgS%2FsEYy7zJt6qoTCKgvDLBjqkAbIQQnYczKrfttYnBIQgi7fMZxhvZ%2FYI3V%2FCl4DchU5N9ha3rrtvVVrW1dUB08SsH6MeqXxzGE0g%2BM1aOM4WRLJaaG9xmVG7ULpTpFqiIJErlwRYsR6uXIlTM%2BZo7RXXburH0uslPh02B6MuCyshiVWDI%2FVc3Kc%2FytDFfhIo2qtZOs1ZF5vCaXM9yUesCbXTqJKzNIKFOgau7JObWr7yYeWtYVoP&X-Amz-Signature=d77d5d30dc70060fd82a8698a27f191596fad60e300e8bf58faf28e1d5d26b1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGQUMHOA%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxWFA1t0tVQZ2QrXvir4d7DNMM%2Fw3%2Bfs%2BTZmvRWOpzrAiAejiV0CjB4ufyMUwQLj2Myr6f1vqB4AXrmnkH0oX3k9SqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFJ7NBSvEPY%2BPBx6aKtwDdSW%2BU1FLlTg5fK0wV23YM1j9IYW0%2B2P0wJAbGpDxY%2B6sm53Ze3xaTf2tBEluHtIiHvmrwBZdQ0gvt61bFrbyQajO%2FIYWf4j6cLSC8%2FI%2FesBIHIcOtXzrbJ%2BtAfmgeMkHd%2BDZQX0MjzQLD1pJLtS5o%2BTHazSDq7K87TZIm0BYIbjmp705HW53QLorcJfooedyKcKAdnEgZr%2BkESkqIJQ%2BpsQ87ErISBl486o9q9cSkmUGjyhEGGsmzK6eePUy2uzWvYshmjbUkComeR7REwt4j2GuHhE8uo5moIDJi%2FfqnK1L%2FMlV45lTTvmHmZPYCQnuw8gkG3W1KJsOUMmqhhkhn%2Bk1biPryrhVeoV3xFMsgDM7sCNCz%2FfvEUD3O2%2B71x4baELF2h5M9yEBc8%2Fe6ALV8DWHmI4AUaEsGHyRwXETENBTgSSgpVTCDe%2BjYdJusHaWh6tJDbfKA16Ve%2BKduTWBEAza8r7iJhys8bMm7Yu6XvgllbOrKMYUX%2ByT3l0sOzkUQfIVUpSMDnwVbbrvHQEMQAOegyaT4YRF0EUHkS8EFBM0t%2FTh3F%2FehHeV5fOw5yu82KDkHeU%2BnhNOtVH0wUY1jjj5GcMG7vOYvkLJSnqHidWzUE6f9fxyci%2B1lKMwtYLwywY6pgH%2FI%2FGrhZ0iw1ltXY1oEmQaViBnyBtjkgQ8qrSbRsCGErbRi2LjVBjLmGvuXs6dkSwtEq%2FO3tEOcFaoPYF6JUr9Ef7g%2FWoKCZ4QbJ6yI2p6rMrC%2F1nATMrmfSEWSYIDgBj%2Fhjn4k1jwoxFFUDnDpiqXjTz29cDMERpd%2F3hXJun3MCpWNU9sYLkHoRP%2Fuftpv8jbeF3HNiIHPvuVZvR6%2F8cuww474OoG&X-Amz-Signature=5163d9d1bab3a9ab81e66b9836171f6253e3328dea2368b543ffd57087af9ded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6INQY43%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFP7eJ7j4Mhas%2FVfFUe%2Bq9ULe15bcbo7JvX61k%2BFm6gVAiA6fw8G18wYZEeIv4wbwfEYhEdDn0qRxIQ5PeQYhtXqkiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjRcmqhyvrxgnYs%2F6KtwDaOADDCsVtVL09ivEhxQlj67BtUC3KPZy3uL%2BIi2tI2BT6zm9FmGWvs6BvrSL%2FgDwCWpf5miBPBqLgE%2B5FepzTA54CycrVrzAesZ0vfpp%2BH6I2ZUqw8akQJ9ZrfOH%2BNKYjinmgAcu7A%2BBj%2BThy8MuXeap4tn%2FPxD6H%2BwypuM6H5H%2ByJEBZ4RM904Lonu%2F1zuyx%2B5PULxI7qf6WQS2Xy8pQaEAouSvMJ5FENvfqe1OFa2Xe8DSI%2FAGhRGh15opCgIaAsFA2Lvz%2FoDGsR6FJ04itCkFdZQcZLRRDROpdTpv%2FUX%2BcmZkHYUwswedIe%2F%2BQfTltkO3AAKZ5q0dYuv0Lss%2BtSjor2%2FX1vpQlXAN0Mjst5CmUfuOUqoc%2BKAR26BNFdfrm6v%2FjZNQwsfFzoSWTENoh%2B833g2M3kFJgJ9GbTTabvVO%2FLJv4kicY4vqRGYgYSiLqZOkYaYMYIB7ikQGfIv1Q6b3OIonMHT79g1tDV9FQNSbssFnXLU3NQi3HcJtxaQEl3sE%2Bwr3B2wbH4Y3cHItB2%2BRTqVXpMaw4HkdQaVVTWKDTJtOczNgVFeJMzRri7zjVRWIv8cPHORybWl1Wg1zGq7QnlB9gD%2BIO07omWsr%2FEtqxekkiPy9M%2BrJomwwl4HwywY6pgFmyBDss4nQdLL3josqbMZltPdQ55PJdYqwXf29CNnTYSDiy1W%2BNf15lRKeJX%2Fsh%2FgcEZzFbKz9RczOToNmCkeTIE7FySZqClz8eEUNy0gF3K7NuLJaVm7J7ry5VuxM3L6MmohadL%2BT2pGeYnZ1Bf4zdqPPdy%2FpLDTLNQV8qWWThHgObAps3vZoM6h6pjNTN0fBxVszcaNuI9rHOXc9%2BD54e5FHgZGH&X-Amz-Signature=382c3daf1c117cf948fa0f7f657b1ae0e37a6eedea8c150506c53d77d9c6e825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OAFVC2V%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbHqZVy2qQG86wNeRYbH0aitjkPUmXLXhzO9PxNh69OAiA%2BTkNNKFxcLnwcgOtsWNLk7I6saYi09NYeYDpn7LSmuiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYURWTvTs%2BNyuSYmXKtwDx6qBoZVxFCIsot%2Bd3dNv5GCuLgehLekoVZ68a1JuE7mB8pJn0tFp9oWGdq0VF2fY%2F8lJ14RXk8eyMNTJsfG6%2F%2FsLT2bn9SHLPBulfAwQdFPp%2FHRC3MbCQLblXiikytle2enJttwBHVb2Tf0Zs1lwZIYHjqUlWOrzYgmVdZa09d0C2ZctNmJWIsG1g5ofv%2BRuFkru2S4ZpiLOVig1TougdClDVMsKVo%2BaFstzTmIrR3eCAtEVjJe%2FNjMTvlCw10dHr4jzaaTTIA2HeKCz8sCRo80glnfIDY0pUCTe4Q8hwG9qxAVZHJICb%2FzvqdUl8sPDK%2BPp7fozpimiFzqhaqfqXeagKwij5eLKISnYluYxXF1cTPmymjH8W1KWI2Fs3m%2FdNnfLmySfd93uC37cD9FaPDSFg%2Bfh6cX30rQg%2FRAK46dpAlw2sEVAZwWwvBqQ49zWevmMVAkFKEwcU6eVOyM83uJsO7cCnFFdmuwa5nqfo3H1206xk58MlV%2BJlYvJIsPUNS22pxXM0CSM1QJ9XPXdyERI0IraJlx%2FfGCOOekuXRBZY1bCq0Njz9NtzB%2FI3vW4QT4WVHYcQFi82WsgbuC4WD1wwOBtG294iRVLJBnPfx%2Fm4hy8khbnyXGOxCIwloHwywY6pgEzXeLo222TzWz2o58owj9NVqrmbUR99oPFWrGttnC0%2F9BcMfgnbTRmUffYiX3MnjfQ8y5S%2BKFKrf5BZePiD3CxYVq4aXYnZYCFLc9HJSsvzXKiZN1WAV6XWJTg6qoJ26NfuAzTuJKnV3Wv853lFw6eT5Wnn2cIcFuwe%2F8Ryu2roLEufyrvgxuDiRPZdqTZzhCPs33z%2FFr1rVyZ2nmWHfVUtQ341jWP&X-Amz-Signature=5674dbc507aa48e08484ce8f26598c34a914f9f474f0dfa5e4b8480f6473b3fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OAFVC2V%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbHqZVy2qQG86wNeRYbH0aitjkPUmXLXhzO9PxNh69OAiA%2BTkNNKFxcLnwcgOtsWNLk7I6saYi09NYeYDpn7LSmuiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYURWTvTs%2BNyuSYmXKtwDx6qBoZVxFCIsot%2Bd3dNv5GCuLgehLekoVZ68a1JuE7mB8pJn0tFp9oWGdq0VF2fY%2F8lJ14RXk8eyMNTJsfG6%2F%2FsLT2bn9SHLPBulfAwQdFPp%2FHRC3MbCQLblXiikytle2enJttwBHVb2Tf0Zs1lwZIYHjqUlWOrzYgmVdZa09d0C2ZctNmJWIsG1g5ofv%2BRuFkru2S4ZpiLOVig1TougdClDVMsKVo%2BaFstzTmIrR3eCAtEVjJe%2FNjMTvlCw10dHr4jzaaTTIA2HeKCz8sCRo80glnfIDY0pUCTe4Q8hwG9qxAVZHJICb%2FzvqdUl8sPDK%2BPp7fozpimiFzqhaqfqXeagKwij5eLKISnYluYxXF1cTPmymjH8W1KWI2Fs3m%2FdNnfLmySfd93uC37cD9FaPDSFg%2Bfh6cX30rQg%2FRAK46dpAlw2sEVAZwWwvBqQ49zWevmMVAkFKEwcU6eVOyM83uJsO7cCnFFdmuwa5nqfo3H1206xk58MlV%2BJlYvJIsPUNS22pxXM0CSM1QJ9XPXdyERI0IraJlx%2FfGCOOekuXRBZY1bCq0Njz9NtzB%2FI3vW4QT4WVHYcQFi82WsgbuC4WD1wwOBtG294iRVLJBnPfx%2Fm4hy8khbnyXGOxCIwloHwywY6pgEzXeLo222TzWz2o58owj9NVqrmbUR99oPFWrGttnC0%2F9BcMfgnbTRmUffYiX3MnjfQ8y5S%2BKFKrf5BZePiD3CxYVq4aXYnZYCFLc9HJSsvzXKiZN1WAV6XWJTg6qoJ26NfuAzTuJKnV3Wv853lFw6eT5Wnn2cIcFuwe%2F8Ryu2roLEufyrvgxuDiRPZdqTZzhCPs33z%2FFr1rVyZ2nmWHfVUtQ341jWP&X-Amz-Signature=2d9e19a79fdd787acb07f1b002214a5d832f37437d4d9acc2cd01dbda1b13ba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N5MK6QN%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FRvp58KYjffBPoIldsSxzksKJku6h9uKSJgF0kgGjOAiEAgYfgwu9QDILGySftKkMd%2FDE%2F29QaV98YJuRQUXvnaIwqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJMdYtOXch5ftJmjSrcA1MioRQoqcnL%2B7XxPu9UXM9pAbufXhbEzuERhJB0WmgbYLNTq1mrRWC0%2FP5oBXzQHjVlbi%2FPBx9iP5WwNiFFKN5OflU%2F5QZh3v8WSwoxkyUFYUNwincCfBNNpXGEVV662DmOmiSccK9eBivj8qVgM4bL%2Bx4p%2BDyoLpsqPtGfjEGqO%2FHAR%2BL2R9Ki684JIt8DRJHte7TnvF6Zii5Xxc23ETHrx1cXV3Sgc53OC%2BOuLv7Gt%2BMqszA4QB2fRWpJdszwARhUXEfxWigwFfbClVu8N9UV6lr4h9JNb8DPVXfcIsRkV1nERdhv1MjZJ6AUyOfiTCEP0OFhujP%2BZweITZMI6BK56t8H4DFdOctzl%2FrDs0Je3qc1SydnB58R4f8yZ49L9UjqTrrJrt6f%2FukGuU3hABxInwrAeUmZaTxBFw3F15UNVPFBd6LKwWrG5UmqR6h7YvJET4H6Ig5MRC0YD6SGHYbR211cF27%2FrHJkXJVqR7PwxaxFE6%2B%2B%2BMvhY78JAbU3thCclDRAq7W%2BDvg4K%2BzpkoMJFbdcu6vUTznO1KNbKJYjFRsYmQsAV1Az9HHO7jnkWMMp%2BcaIY%2FNrHhrKpo%2FyX8URrKa49yZSSlp4ZvSTcBUuYcSmlSffC%2FoDK3GqMOiC8MsGOqUBQQOsCMyqRPNVEsXAxWUqtHHO12P7rj6s4oDuAkCJmSa5gnU%2BF7VRdVbVACkwbJKyqW32M%2B5IovolwXWDmvwzZzuhxn2drwlqpnC7fEfieO0PplmPh23MA4Afl3bf7Ud2eVxi7YrPQ0oLNmnzg4mgG6qhZFOl87MhKMgv0Bp0nu7gtdVhHvBacA9HWMtxndsDamRgd%2F9DwOSmY52mElryzLrfR55f&X-Amz-Signature=7dcd3c745dede7bb6a0d374183bdcb45b047ee432f98515181d062b0154528b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N5MK6QN%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FRvp58KYjffBPoIldsSxzksKJku6h9uKSJgF0kgGjOAiEAgYfgwu9QDILGySftKkMd%2FDE%2F29QaV98YJuRQUXvnaIwqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJMdYtOXch5ftJmjSrcA1MioRQoqcnL%2B7XxPu9UXM9pAbufXhbEzuERhJB0WmgbYLNTq1mrRWC0%2FP5oBXzQHjVlbi%2FPBx9iP5WwNiFFKN5OflU%2F5QZh3v8WSwoxkyUFYUNwincCfBNNpXGEVV662DmOmiSccK9eBivj8qVgM4bL%2Bx4p%2BDyoLpsqPtGfjEGqO%2FHAR%2BL2R9Ki684JIt8DRJHte7TnvF6Zii5Xxc23ETHrx1cXV3Sgc53OC%2BOuLv7Gt%2BMqszA4QB2fRWpJdszwARhUXEfxWigwFfbClVu8N9UV6lr4h9JNb8DPVXfcIsRkV1nERdhv1MjZJ6AUyOfiTCEP0OFhujP%2BZweITZMI6BK56t8H4DFdOctzl%2FrDs0Je3qc1SydnB58R4f8yZ49L9UjqTrrJrt6f%2FukGuU3hABxInwrAeUmZaTxBFw3F15UNVPFBd6LKwWrG5UmqR6h7YvJET4H6Ig5MRC0YD6SGHYbR211cF27%2FrHJkXJVqR7PwxaxFE6%2B%2B%2BMvhY78JAbU3thCclDRAq7W%2BDvg4K%2BzpkoMJFbdcu6vUTznO1KNbKJYjFRsYmQsAV1Az9HHO7jnkWMMp%2BcaIY%2FNrHhrKpo%2FyX8URrKa49yZSSlp4ZvSTcBUuYcSmlSffC%2FoDK3GqMOiC8MsGOqUBQQOsCMyqRPNVEsXAxWUqtHHO12P7rj6s4oDuAkCJmSa5gnU%2BF7VRdVbVACkwbJKyqW32M%2B5IovolwXWDmvwzZzuhxn2drwlqpnC7fEfieO0PplmPh23MA4Afl3bf7Ud2eVxi7YrPQ0oLNmnzg4mgG6qhZFOl87MhKMgv0Bp0nu7gtdVhHvBacA9HWMtxndsDamRgd%2F9DwOSmY52mElryzLrfR55f&X-Amz-Signature=f8a77d15d674b5790575ca37787e232a1ce25a8cecbe85ab526397bc25323820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N5MK6QN%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FRvp58KYjffBPoIldsSxzksKJku6h9uKSJgF0kgGjOAiEAgYfgwu9QDILGySftKkMd%2FDE%2F29QaV98YJuRQUXvnaIwqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJMdYtOXch5ftJmjSrcA1MioRQoqcnL%2B7XxPu9UXM9pAbufXhbEzuERhJB0WmgbYLNTq1mrRWC0%2FP5oBXzQHjVlbi%2FPBx9iP5WwNiFFKN5OflU%2F5QZh3v8WSwoxkyUFYUNwincCfBNNpXGEVV662DmOmiSccK9eBivj8qVgM4bL%2Bx4p%2BDyoLpsqPtGfjEGqO%2FHAR%2BL2R9Ki684JIt8DRJHte7TnvF6Zii5Xxc23ETHrx1cXV3Sgc53OC%2BOuLv7Gt%2BMqszA4QB2fRWpJdszwARhUXEfxWigwFfbClVu8N9UV6lr4h9JNb8DPVXfcIsRkV1nERdhv1MjZJ6AUyOfiTCEP0OFhujP%2BZweITZMI6BK56t8H4DFdOctzl%2FrDs0Je3qc1SydnB58R4f8yZ49L9UjqTrrJrt6f%2FukGuU3hABxInwrAeUmZaTxBFw3F15UNVPFBd6LKwWrG5UmqR6h7YvJET4H6Ig5MRC0YD6SGHYbR211cF27%2FrHJkXJVqR7PwxaxFE6%2B%2B%2BMvhY78JAbU3thCclDRAq7W%2BDvg4K%2BzpkoMJFbdcu6vUTznO1KNbKJYjFRsYmQsAV1Az9HHO7jnkWMMp%2BcaIY%2FNrHhrKpo%2FyX8URrKa49yZSSlp4ZvSTcBUuYcSmlSffC%2FoDK3GqMOiC8MsGOqUBQQOsCMyqRPNVEsXAxWUqtHHO12P7rj6s4oDuAkCJmSa5gnU%2BF7VRdVbVACkwbJKyqW32M%2B5IovolwXWDmvwzZzuhxn2drwlqpnC7fEfieO0PplmPh23MA4Afl3bf7Ud2eVxi7YrPQ0oLNmnzg4mgG6qhZFOl87MhKMgv0Bp0nu7gtdVhHvBacA9HWMtxndsDamRgd%2F9DwOSmY52mElryzLrfR55f&X-Amz-Signature=fef46dfb114fc3bd718e9d6559e0366f8cd1f96be3a438e41468cf969843faf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N5MK6QN%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FRvp58KYjffBPoIldsSxzksKJku6h9uKSJgF0kgGjOAiEAgYfgwu9QDILGySftKkMd%2FDE%2F29QaV98YJuRQUXvnaIwqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJMdYtOXch5ftJmjSrcA1MioRQoqcnL%2B7XxPu9UXM9pAbufXhbEzuERhJB0WmgbYLNTq1mrRWC0%2FP5oBXzQHjVlbi%2FPBx9iP5WwNiFFKN5OflU%2F5QZh3v8WSwoxkyUFYUNwincCfBNNpXGEVV662DmOmiSccK9eBivj8qVgM4bL%2Bx4p%2BDyoLpsqPtGfjEGqO%2FHAR%2BL2R9Ki684JIt8DRJHte7TnvF6Zii5Xxc23ETHrx1cXV3Sgc53OC%2BOuLv7Gt%2BMqszA4QB2fRWpJdszwARhUXEfxWigwFfbClVu8N9UV6lr4h9JNb8DPVXfcIsRkV1nERdhv1MjZJ6AUyOfiTCEP0OFhujP%2BZweITZMI6BK56t8H4DFdOctzl%2FrDs0Je3qc1SydnB58R4f8yZ49L9UjqTrrJrt6f%2FukGuU3hABxInwrAeUmZaTxBFw3F15UNVPFBd6LKwWrG5UmqR6h7YvJET4H6Ig5MRC0YD6SGHYbR211cF27%2FrHJkXJVqR7PwxaxFE6%2B%2B%2BMvhY78JAbU3thCclDRAq7W%2BDvg4K%2BzpkoMJFbdcu6vUTznO1KNbKJYjFRsYmQsAV1Az9HHO7jnkWMMp%2BcaIY%2FNrHhrKpo%2FyX8URrKa49yZSSlp4ZvSTcBUuYcSmlSffC%2FoDK3GqMOiC8MsGOqUBQQOsCMyqRPNVEsXAxWUqtHHO12P7rj6s4oDuAkCJmSa5gnU%2BF7VRdVbVACkwbJKyqW32M%2B5IovolwXWDmvwzZzuhxn2drwlqpnC7fEfieO0PplmPh23MA4Afl3bf7Ud2eVxi7YrPQ0oLNmnzg4mgG6qhZFOl87MhKMgv0Bp0nu7gtdVhHvBacA9HWMtxndsDamRgd%2F9DwOSmY52mElryzLrfR55f&X-Amz-Signature=799bd72df4634c258fe78eab2358d4f5ebe285b6a73c4d4d386aed3956cfe0c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWWOLDLL%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8%2B8i%2FpPDDM6dn4gtUThOv2zKi1%2FZAlbKeTSQTrEo54AiBMaJn3X%2BctMBQS%2F7j42hVIEhAmArKmOHuAxsHaWICTbiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIYb3GLuEbVpnlPEIKtwDLPAtQq5asNlZZYOOv4lddKBJs%2FcfWETsa1TIvPqADAfOQycPXMwZUOPNzm6tXcPEmhV6U4UpVdJACvFQqWN1TIp%2FUN%2B8K3%2FkGLoAy%2ByI%2Fg0xOeF%2BUr0kNmUMUzWzYwUEA%2BhDaMRBo3%2FCHt%2FgtEyE4WwEyqvaKuZ%2Floor1ma2jiYEx%2BaW1H5ir6lfK6rU%2Ffad%2Fpb8254C2ly%2FYFJSpj%2FtV%2FWkaf6By7wSHlu8GkKsbmMVKwQfmzzVgwHsIzSCYuEqlVof2P9U16kaA562sQbMguycR3XpLigFqWFowsS2%2B1Wycaq5z%2FSTfsEUXMtzwEuobdZ0tKBXjt0ImMOpLjizTz9T3VV8cwT0hYMfz2b%2BmMyrECz7zRmb36xSxuiWq9IzdFtRzFslTX92Ur8zipR%2Bagvu8kPmdnnMdyTW%2F5jStdtQEZn0lNS3rmvpR%2BqwEtfmUp88ZATjmqFQcd7fQ4FnrCoQ3K94AunTGiwd1d9TuaWMo8F3lMI0dp5v7P9Ok%2BIiLfDtajO2blmkDp5qV9Wxpcvo5tVZ1A0eBZBej3is23e%2FlVmzANKH0F6yW8JFQz6KSKmqiAT8DUCoyDxv8Rr%2F1T3BoP1JqEU6RcJAf3UjER4bCRAfbbKxQuFuz7owyIHwywY6pgGL7wR%2FTr9Sl3zermw5rhKQ1M0j8dSSjTRDE09%2B0QrkSrcyowYEXnM%2FbaI08QiigJMA3YdC%2F9VJYDZcWJSbn8xs5pP5dl5zqKfLOHE5yTJf8KvUp1hZ7byTzqVMZRes%2F0FY%2BRdc5p8y%2B4NNjyw0%2BckEdhla8Isjoc%2F%2Ff9AzwwBxn%2FHxUCQmdcoVH5o8z%2FoTrWf1fzh73Hy0ba3bYCPdYds5qfgRvmle&X-Amz-Signature=be3f11f2211c504fe4df3940c382e658c7e1f5d53694445055a1816afb030303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N5MK6QN%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FRvp58KYjffBPoIldsSxzksKJku6h9uKSJgF0kgGjOAiEAgYfgwu9QDILGySftKkMd%2FDE%2F29QaV98YJuRQUXvnaIwqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJMdYtOXch5ftJmjSrcA1MioRQoqcnL%2B7XxPu9UXM9pAbufXhbEzuERhJB0WmgbYLNTq1mrRWC0%2FP5oBXzQHjVlbi%2FPBx9iP5WwNiFFKN5OflU%2F5QZh3v8WSwoxkyUFYUNwincCfBNNpXGEVV662DmOmiSccK9eBivj8qVgM4bL%2Bx4p%2BDyoLpsqPtGfjEGqO%2FHAR%2BL2R9Ki684JIt8DRJHte7TnvF6Zii5Xxc23ETHrx1cXV3Sgc53OC%2BOuLv7Gt%2BMqszA4QB2fRWpJdszwARhUXEfxWigwFfbClVu8N9UV6lr4h9JNb8DPVXfcIsRkV1nERdhv1MjZJ6AUyOfiTCEP0OFhujP%2BZweITZMI6BK56t8H4DFdOctzl%2FrDs0Je3qc1SydnB58R4f8yZ49L9UjqTrrJrt6f%2FukGuU3hABxInwrAeUmZaTxBFw3F15UNVPFBd6LKwWrG5UmqR6h7YvJET4H6Ig5MRC0YD6SGHYbR211cF27%2FrHJkXJVqR7PwxaxFE6%2B%2B%2BMvhY78JAbU3thCclDRAq7W%2BDvg4K%2BzpkoMJFbdcu6vUTznO1KNbKJYjFRsYmQsAV1Az9HHO7jnkWMMp%2BcaIY%2FNrHhrKpo%2FyX8URrKa49yZSSlp4ZvSTcBUuYcSmlSffC%2FoDK3GqMOiC8MsGOqUBQQOsCMyqRPNVEsXAxWUqtHHO12P7rj6s4oDuAkCJmSa5gnU%2BF7VRdVbVACkwbJKyqW32M%2B5IovolwXWDmvwzZzuhxn2drwlqpnC7fEfieO0PplmPh23MA4Afl3bf7Ud2eVxi7YrPQ0oLNmnzg4mgG6qhZFOl87MhKMgv0Bp0nu7gtdVhHvBacA9HWMtxndsDamRgd%2F9DwOSmY52mElryzLrfR55f&X-Amz-Signature=18a4be283e6145c19a965bd5f35f5aa24db79dcbd772051c487c146525344360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N5MK6QN%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FRvp58KYjffBPoIldsSxzksKJku6h9uKSJgF0kgGjOAiEAgYfgwu9QDILGySftKkMd%2FDE%2F29QaV98YJuRQUXvnaIwqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJMdYtOXch5ftJmjSrcA1MioRQoqcnL%2B7XxPu9UXM9pAbufXhbEzuERhJB0WmgbYLNTq1mrRWC0%2FP5oBXzQHjVlbi%2FPBx9iP5WwNiFFKN5OflU%2F5QZh3v8WSwoxkyUFYUNwincCfBNNpXGEVV662DmOmiSccK9eBivj8qVgM4bL%2Bx4p%2BDyoLpsqPtGfjEGqO%2FHAR%2BL2R9Ki684JIt8DRJHte7TnvF6Zii5Xxc23ETHrx1cXV3Sgc53OC%2BOuLv7Gt%2BMqszA4QB2fRWpJdszwARhUXEfxWigwFfbClVu8N9UV6lr4h9JNb8DPVXfcIsRkV1nERdhv1MjZJ6AUyOfiTCEP0OFhujP%2BZweITZMI6BK56t8H4DFdOctzl%2FrDs0Je3qc1SydnB58R4f8yZ49L9UjqTrrJrt6f%2FukGuU3hABxInwrAeUmZaTxBFw3F15UNVPFBd6LKwWrG5UmqR6h7YvJET4H6Ig5MRC0YD6SGHYbR211cF27%2FrHJkXJVqR7PwxaxFE6%2B%2B%2BMvhY78JAbU3thCclDRAq7W%2BDvg4K%2BzpkoMJFbdcu6vUTznO1KNbKJYjFRsYmQsAV1Az9HHO7jnkWMMp%2BcaIY%2FNrHhrKpo%2FyX8URrKa49yZSSlp4ZvSTcBUuYcSmlSffC%2FoDK3GqMOiC8MsGOqUBQQOsCMyqRPNVEsXAxWUqtHHO12P7rj6s4oDuAkCJmSa5gnU%2BF7VRdVbVACkwbJKyqW32M%2B5IovolwXWDmvwzZzuhxn2drwlqpnC7fEfieO0PplmPh23MA4Afl3bf7Ud2eVxi7YrPQ0oLNmnzg4mgG6qhZFOl87MhKMgv0Bp0nu7gtdVhHvBacA9HWMtxndsDamRgd%2F9DwOSmY52mElryzLrfR55f&X-Amz-Signature=8dec1c3ee78928b48c6408bdd9d531ecc98d212f88c838203fe2c99309afabaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N5MK6QN%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FRvp58KYjffBPoIldsSxzksKJku6h9uKSJgF0kgGjOAiEAgYfgwu9QDILGySftKkMd%2FDE%2F29QaV98YJuRQUXvnaIwqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJMdYtOXch5ftJmjSrcA1MioRQoqcnL%2B7XxPu9UXM9pAbufXhbEzuERhJB0WmgbYLNTq1mrRWC0%2FP5oBXzQHjVlbi%2FPBx9iP5WwNiFFKN5OflU%2F5QZh3v8WSwoxkyUFYUNwincCfBNNpXGEVV662DmOmiSccK9eBivj8qVgM4bL%2Bx4p%2BDyoLpsqPtGfjEGqO%2FHAR%2BL2R9Ki684JIt8DRJHte7TnvF6Zii5Xxc23ETHrx1cXV3Sgc53OC%2BOuLv7Gt%2BMqszA4QB2fRWpJdszwARhUXEfxWigwFfbClVu8N9UV6lr4h9JNb8DPVXfcIsRkV1nERdhv1MjZJ6AUyOfiTCEP0OFhujP%2BZweITZMI6BK56t8H4DFdOctzl%2FrDs0Je3qc1SydnB58R4f8yZ49L9UjqTrrJrt6f%2FukGuU3hABxInwrAeUmZaTxBFw3F15UNVPFBd6LKwWrG5UmqR6h7YvJET4H6Ig5MRC0YD6SGHYbR211cF27%2FrHJkXJVqR7PwxaxFE6%2B%2B%2BMvhY78JAbU3thCclDRAq7W%2BDvg4K%2BzpkoMJFbdcu6vUTznO1KNbKJYjFRsYmQsAV1Az9HHO7jnkWMMp%2BcaIY%2FNrHhrKpo%2FyX8URrKa49yZSSlp4ZvSTcBUuYcSmlSffC%2FoDK3GqMOiC8MsGOqUBQQOsCMyqRPNVEsXAxWUqtHHO12P7rj6s4oDuAkCJmSa5gnU%2BF7VRdVbVACkwbJKyqW32M%2B5IovolwXWDmvwzZzuhxn2drwlqpnC7fEfieO0PplmPh23MA4Afl3bf7Ud2eVxi7YrPQ0oLNmnzg4mgG6qhZFOl87MhKMgv0Bp0nu7gtdVhHvBacA9HWMtxndsDamRgd%2F9DwOSmY52mElryzLrfR55f&X-Amz-Signature=2d5d1df2bb9b438479f7ec4a0fb87d7a1ba027763dca3865f07c3eb11fbb2d77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N5MK6QN%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FRvp58KYjffBPoIldsSxzksKJku6h9uKSJgF0kgGjOAiEAgYfgwu9QDILGySftKkMd%2FDE%2F29QaV98YJuRQUXvnaIwqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJMdYtOXch5ftJmjSrcA1MioRQoqcnL%2B7XxPu9UXM9pAbufXhbEzuERhJB0WmgbYLNTq1mrRWC0%2FP5oBXzQHjVlbi%2FPBx9iP5WwNiFFKN5OflU%2F5QZh3v8WSwoxkyUFYUNwincCfBNNpXGEVV662DmOmiSccK9eBivj8qVgM4bL%2Bx4p%2BDyoLpsqPtGfjEGqO%2FHAR%2BL2R9Ki684JIt8DRJHte7TnvF6Zii5Xxc23ETHrx1cXV3Sgc53OC%2BOuLv7Gt%2BMqszA4QB2fRWpJdszwARhUXEfxWigwFfbClVu8N9UV6lr4h9JNb8DPVXfcIsRkV1nERdhv1MjZJ6AUyOfiTCEP0OFhujP%2BZweITZMI6BK56t8H4DFdOctzl%2FrDs0Je3qc1SydnB58R4f8yZ49L9UjqTrrJrt6f%2FukGuU3hABxInwrAeUmZaTxBFw3F15UNVPFBd6LKwWrG5UmqR6h7YvJET4H6Ig5MRC0YD6SGHYbR211cF27%2FrHJkXJVqR7PwxaxFE6%2B%2B%2BMvhY78JAbU3thCclDRAq7W%2BDvg4K%2BzpkoMJFbdcu6vUTznO1KNbKJYjFRsYmQsAV1Az9HHO7jnkWMMp%2BcaIY%2FNrHhrKpo%2FyX8URrKa49yZSSlp4ZvSTcBUuYcSmlSffC%2FoDK3GqMOiC8MsGOqUBQQOsCMyqRPNVEsXAxWUqtHHO12P7rj6s4oDuAkCJmSa5gnU%2BF7VRdVbVACkwbJKyqW32M%2B5IovolwXWDmvwzZzuhxn2drwlqpnC7fEfieO0PplmPh23MA4Afl3bf7Ud2eVxi7YrPQ0oLNmnzg4mgG6qhZFOl87MhKMgv0Bp0nu7gtdVhHvBacA9HWMtxndsDamRgd%2F9DwOSmY52mElryzLrfR55f&X-Amz-Signature=6d526493014e1a617a006f46f5112f81adbc57fe02c217834acb62c9a621ab93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N5MK6QN%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FRvp58KYjffBPoIldsSxzksKJku6h9uKSJgF0kgGjOAiEAgYfgwu9QDILGySftKkMd%2FDE%2F29QaV98YJuRQUXvnaIwqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJMdYtOXch5ftJmjSrcA1MioRQoqcnL%2B7XxPu9UXM9pAbufXhbEzuERhJB0WmgbYLNTq1mrRWC0%2FP5oBXzQHjVlbi%2FPBx9iP5WwNiFFKN5OflU%2F5QZh3v8WSwoxkyUFYUNwincCfBNNpXGEVV662DmOmiSccK9eBivj8qVgM4bL%2Bx4p%2BDyoLpsqPtGfjEGqO%2FHAR%2BL2R9Ki684JIt8DRJHte7TnvF6Zii5Xxc23ETHrx1cXV3Sgc53OC%2BOuLv7Gt%2BMqszA4QB2fRWpJdszwARhUXEfxWigwFfbClVu8N9UV6lr4h9JNb8DPVXfcIsRkV1nERdhv1MjZJ6AUyOfiTCEP0OFhujP%2BZweITZMI6BK56t8H4DFdOctzl%2FrDs0Je3qc1SydnB58R4f8yZ49L9UjqTrrJrt6f%2FukGuU3hABxInwrAeUmZaTxBFw3F15UNVPFBd6LKwWrG5UmqR6h7YvJET4H6Ig5MRC0YD6SGHYbR211cF27%2FrHJkXJVqR7PwxaxFE6%2B%2B%2BMvhY78JAbU3thCclDRAq7W%2BDvg4K%2BzpkoMJFbdcu6vUTznO1KNbKJYjFRsYmQsAV1Az9HHO7jnkWMMp%2BcaIY%2FNrHhrKpo%2FyX8URrKa49yZSSlp4ZvSTcBUuYcSmlSffC%2FoDK3GqMOiC8MsGOqUBQQOsCMyqRPNVEsXAxWUqtHHO12P7rj6s4oDuAkCJmSa5gnU%2BF7VRdVbVACkwbJKyqW32M%2B5IovolwXWDmvwzZzuhxn2drwlqpnC7fEfieO0PplmPh23MA4Afl3bf7Ud2eVxi7YrPQ0oLNmnzg4mgG6qhZFOl87MhKMgv0Bp0nu7gtdVhHvBacA9HWMtxndsDamRgd%2F9DwOSmY52mElryzLrfR55f&X-Amz-Signature=33425e7ce1fd0538f8c1cecb2666cf5d604e573c80eccf353dbf2375822d8e9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N5MK6QN%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FRvp58KYjffBPoIldsSxzksKJku6h9uKSJgF0kgGjOAiEAgYfgwu9QDILGySftKkMd%2FDE%2F29QaV98YJuRQUXvnaIwqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJMdYtOXch5ftJmjSrcA1MioRQoqcnL%2B7XxPu9UXM9pAbufXhbEzuERhJB0WmgbYLNTq1mrRWC0%2FP5oBXzQHjVlbi%2FPBx9iP5WwNiFFKN5OflU%2F5QZh3v8WSwoxkyUFYUNwincCfBNNpXGEVV662DmOmiSccK9eBivj8qVgM4bL%2Bx4p%2BDyoLpsqPtGfjEGqO%2FHAR%2BL2R9Ki684JIt8DRJHte7TnvF6Zii5Xxc23ETHrx1cXV3Sgc53OC%2BOuLv7Gt%2BMqszA4QB2fRWpJdszwARhUXEfxWigwFfbClVu8N9UV6lr4h9JNb8DPVXfcIsRkV1nERdhv1MjZJ6AUyOfiTCEP0OFhujP%2BZweITZMI6BK56t8H4DFdOctzl%2FrDs0Je3qc1SydnB58R4f8yZ49L9UjqTrrJrt6f%2FukGuU3hABxInwrAeUmZaTxBFw3F15UNVPFBd6LKwWrG5UmqR6h7YvJET4H6Ig5MRC0YD6SGHYbR211cF27%2FrHJkXJVqR7PwxaxFE6%2B%2B%2BMvhY78JAbU3thCclDRAq7W%2BDvg4K%2BzpkoMJFbdcu6vUTznO1KNbKJYjFRsYmQsAV1Az9HHO7jnkWMMp%2BcaIY%2FNrHhrKpo%2FyX8URrKa49yZSSlp4ZvSTcBUuYcSmlSffC%2FoDK3GqMOiC8MsGOqUBQQOsCMyqRPNVEsXAxWUqtHHO12P7rj6s4oDuAkCJmSa5gnU%2BF7VRdVbVACkwbJKyqW32M%2B5IovolwXWDmvwzZzuhxn2drwlqpnC7fEfieO0PplmPh23MA4Afl3bf7Ud2eVxi7YrPQ0oLNmnzg4mgG6qhZFOl87MhKMgv0Bp0nu7gtdVhHvBacA9HWMtxndsDamRgd%2F9DwOSmY52mElryzLrfR55f&X-Amz-Signature=956905a80b56ee9a76c27d96863be9f4ba182d8a42a517865386fffde35f0ce8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


