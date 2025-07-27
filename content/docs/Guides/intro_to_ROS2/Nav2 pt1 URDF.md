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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR75X5LH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCO3dJP0IU3jCELuJGFQk2ujsdnM5JQEVDCA2lXfujxFAIgV%2BCVmPLC8ly%2FRnL5Cb2xMRGxXpZK9XNseRgyYYp5jOYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDyYN0CFha%2B84JRmxircA8igHKMX1bAjMRAhG3B%2ByKArKjArScRPbwE6pY%2BWeEXPcow69qdiS3gyaBw2VwISWjjENfM5AvYKhodvhWpP5bLbLuf7UU%2BH3lpw73B1JA4A5zk8ajJ%2B74f8fBlyTQs07VbvumR7HyAFovGfrChX2BajGKF%2BHo3Oe%2BZSnLklC9OkxP2Qw0xFOqeOGOqi2In8cpseSJg%2FlKa%2ByMc3phe4rJhkIDO0P4E1%2BX8%2Bu7zL6MjEmucGu60R8DqpKc2yoVFsPgGxbqrdYf2xcCiv99F9nXBc23nOrsoZ0vdVdewbkBtjZoiqEMWy%2B4X3dlTcPzUGcusSaYn%2F6iQueNC4C5pUl%2B%2BgrtoXL3YOb6XsQVOPYdDxDpwzJjYwrSowQOnGg9qnTsADkm0asEGYzNcdQp%2BXu1P7NjuQG0bqjjbMfmN3F3%2Fvc3as7C8%2BF2avoEOmcVIhPCbzmu1AiNnn3hMFGRzPH5gkUEsC%2FhoPE3w8rMt2jWiUOHogvYsjAGG6x%2F03DOmjlycuMops3RDG%2BesrtJDGtAT%2BhpkSgmQXxJKIj5adLR0W2VB%2BGMDWwRe6iF14EJJ%2ByJEciWf30qGkwkVfM5FtFJpdBnUi5yxZQ%2FbP3WtljV2tQPKAdhXEQ0fCCgXTMJHClcQGOqUBzHyBgtIyEMEAXJvEdWsg%2BpNJqxhE7e3dBrlROOL7sEoYwd%2FTUyXjv8eEJ34jPWZc8l8mUaW68heeUZxyL%2BZoTOSstlFEDd3%2FZRDJlqxALgJZZIfUIpTCM%2FICzg2AxX3F8KOx%2F2gj9%2FUidt9Z5w59leFMeaO%2FvlitwFIqX3ZiH2Q9CnL%2F03FaHpujPmoAPbsV3bBH7zyz%2FJWD1dWFlriQwvjMiQzO&X-Amz-Signature=1ed219f8f91d73fb2e6fdaec06a3a78f43bf650ea27020d658ebaa309a5f77e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR75X5LH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCO3dJP0IU3jCELuJGFQk2ujsdnM5JQEVDCA2lXfujxFAIgV%2BCVmPLC8ly%2FRnL5Cb2xMRGxXpZK9XNseRgyYYp5jOYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDyYN0CFha%2B84JRmxircA8igHKMX1bAjMRAhG3B%2ByKArKjArScRPbwE6pY%2BWeEXPcow69qdiS3gyaBw2VwISWjjENfM5AvYKhodvhWpP5bLbLuf7UU%2BH3lpw73B1JA4A5zk8ajJ%2B74f8fBlyTQs07VbvumR7HyAFovGfrChX2BajGKF%2BHo3Oe%2BZSnLklC9OkxP2Qw0xFOqeOGOqi2In8cpseSJg%2FlKa%2ByMc3phe4rJhkIDO0P4E1%2BX8%2Bu7zL6MjEmucGu60R8DqpKc2yoVFsPgGxbqrdYf2xcCiv99F9nXBc23nOrsoZ0vdVdewbkBtjZoiqEMWy%2B4X3dlTcPzUGcusSaYn%2F6iQueNC4C5pUl%2B%2BgrtoXL3YOb6XsQVOPYdDxDpwzJjYwrSowQOnGg9qnTsADkm0asEGYzNcdQp%2BXu1P7NjuQG0bqjjbMfmN3F3%2Fvc3as7C8%2BF2avoEOmcVIhPCbzmu1AiNnn3hMFGRzPH5gkUEsC%2FhoPE3w8rMt2jWiUOHogvYsjAGG6x%2F03DOmjlycuMops3RDG%2BesrtJDGtAT%2BhpkSgmQXxJKIj5adLR0W2VB%2BGMDWwRe6iF14EJJ%2ByJEciWf30qGkwkVfM5FtFJpdBnUi5yxZQ%2FbP3WtljV2tQPKAdhXEQ0fCCgXTMJHClcQGOqUBzHyBgtIyEMEAXJvEdWsg%2BpNJqxhE7e3dBrlROOL7sEoYwd%2FTUyXjv8eEJ34jPWZc8l8mUaW68heeUZxyL%2BZoTOSstlFEDd3%2FZRDJlqxALgJZZIfUIpTCM%2FICzg2AxX3F8KOx%2F2gj9%2FUidt9Z5w59leFMeaO%2FvlitwFIqX3ZiH2Q9CnL%2F03FaHpujPmoAPbsV3bBH7zyz%2FJWD1dWFlriQwvjMiQzO&X-Amz-Signature=3c3086e3b52c2eb7be446e6884dfb977e8841e15bde67bb492b68ccdf83ba318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR75X5LH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCO3dJP0IU3jCELuJGFQk2ujsdnM5JQEVDCA2lXfujxFAIgV%2BCVmPLC8ly%2FRnL5Cb2xMRGxXpZK9XNseRgyYYp5jOYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDyYN0CFha%2B84JRmxircA8igHKMX1bAjMRAhG3B%2ByKArKjArScRPbwE6pY%2BWeEXPcow69qdiS3gyaBw2VwISWjjENfM5AvYKhodvhWpP5bLbLuf7UU%2BH3lpw73B1JA4A5zk8ajJ%2B74f8fBlyTQs07VbvumR7HyAFovGfrChX2BajGKF%2BHo3Oe%2BZSnLklC9OkxP2Qw0xFOqeOGOqi2In8cpseSJg%2FlKa%2ByMc3phe4rJhkIDO0P4E1%2BX8%2Bu7zL6MjEmucGu60R8DqpKc2yoVFsPgGxbqrdYf2xcCiv99F9nXBc23nOrsoZ0vdVdewbkBtjZoiqEMWy%2B4X3dlTcPzUGcusSaYn%2F6iQueNC4C5pUl%2B%2BgrtoXL3YOb6XsQVOPYdDxDpwzJjYwrSowQOnGg9qnTsADkm0asEGYzNcdQp%2BXu1P7NjuQG0bqjjbMfmN3F3%2Fvc3as7C8%2BF2avoEOmcVIhPCbzmu1AiNnn3hMFGRzPH5gkUEsC%2FhoPE3w8rMt2jWiUOHogvYsjAGG6x%2F03DOmjlycuMops3RDG%2BesrtJDGtAT%2BhpkSgmQXxJKIj5adLR0W2VB%2BGMDWwRe6iF14EJJ%2ByJEciWf30qGkwkVfM5FtFJpdBnUi5yxZQ%2FbP3WtljV2tQPKAdhXEQ0fCCgXTMJHClcQGOqUBzHyBgtIyEMEAXJvEdWsg%2BpNJqxhE7e3dBrlROOL7sEoYwd%2FTUyXjv8eEJ34jPWZc8l8mUaW68heeUZxyL%2BZoTOSstlFEDd3%2FZRDJlqxALgJZZIfUIpTCM%2FICzg2AxX3F8KOx%2F2gj9%2FUidt9Z5w59leFMeaO%2FvlitwFIqX3ZiH2Q9CnL%2F03FaHpujPmoAPbsV3bBH7zyz%2FJWD1dWFlriQwvjMiQzO&X-Amz-Signature=ea05d9d83f5fe0e8c07d5984f0be37c1bed0bc58e614b55cd0c7acb1324ee38f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR75X5LH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCO3dJP0IU3jCELuJGFQk2ujsdnM5JQEVDCA2lXfujxFAIgV%2BCVmPLC8ly%2FRnL5Cb2xMRGxXpZK9XNseRgyYYp5jOYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDyYN0CFha%2B84JRmxircA8igHKMX1bAjMRAhG3B%2ByKArKjArScRPbwE6pY%2BWeEXPcow69qdiS3gyaBw2VwISWjjENfM5AvYKhodvhWpP5bLbLuf7UU%2BH3lpw73B1JA4A5zk8ajJ%2B74f8fBlyTQs07VbvumR7HyAFovGfrChX2BajGKF%2BHo3Oe%2BZSnLklC9OkxP2Qw0xFOqeOGOqi2In8cpseSJg%2FlKa%2ByMc3phe4rJhkIDO0P4E1%2BX8%2Bu7zL6MjEmucGu60R8DqpKc2yoVFsPgGxbqrdYf2xcCiv99F9nXBc23nOrsoZ0vdVdewbkBtjZoiqEMWy%2B4X3dlTcPzUGcusSaYn%2F6iQueNC4C5pUl%2B%2BgrtoXL3YOb6XsQVOPYdDxDpwzJjYwrSowQOnGg9qnTsADkm0asEGYzNcdQp%2BXu1P7NjuQG0bqjjbMfmN3F3%2Fvc3as7C8%2BF2avoEOmcVIhPCbzmu1AiNnn3hMFGRzPH5gkUEsC%2FhoPE3w8rMt2jWiUOHogvYsjAGG6x%2F03DOmjlycuMops3RDG%2BesrtJDGtAT%2BhpkSgmQXxJKIj5adLR0W2VB%2BGMDWwRe6iF14EJJ%2ByJEciWf30qGkwkVfM5FtFJpdBnUi5yxZQ%2FbP3WtljV2tQPKAdhXEQ0fCCgXTMJHClcQGOqUBzHyBgtIyEMEAXJvEdWsg%2BpNJqxhE7e3dBrlROOL7sEoYwd%2FTUyXjv8eEJ34jPWZc8l8mUaW68heeUZxyL%2BZoTOSstlFEDd3%2FZRDJlqxALgJZZIfUIpTCM%2FICzg2AxX3F8KOx%2F2gj9%2FUidt9Z5w59leFMeaO%2FvlitwFIqX3ZiH2Q9CnL%2F03FaHpujPmoAPbsV3bBH7zyz%2FJWD1dWFlriQwvjMiQzO&X-Amz-Signature=956cc3a43a285ea414d9b622b67fd15cc007aca2a6fb9083aebe673021764a65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR75X5LH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCO3dJP0IU3jCELuJGFQk2ujsdnM5JQEVDCA2lXfujxFAIgV%2BCVmPLC8ly%2FRnL5Cb2xMRGxXpZK9XNseRgyYYp5jOYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDyYN0CFha%2B84JRmxircA8igHKMX1bAjMRAhG3B%2ByKArKjArScRPbwE6pY%2BWeEXPcow69qdiS3gyaBw2VwISWjjENfM5AvYKhodvhWpP5bLbLuf7UU%2BH3lpw73B1JA4A5zk8ajJ%2B74f8fBlyTQs07VbvumR7HyAFovGfrChX2BajGKF%2BHo3Oe%2BZSnLklC9OkxP2Qw0xFOqeOGOqi2In8cpseSJg%2FlKa%2ByMc3phe4rJhkIDO0P4E1%2BX8%2Bu7zL6MjEmucGu60R8DqpKc2yoVFsPgGxbqrdYf2xcCiv99F9nXBc23nOrsoZ0vdVdewbkBtjZoiqEMWy%2B4X3dlTcPzUGcusSaYn%2F6iQueNC4C5pUl%2B%2BgrtoXL3YOb6XsQVOPYdDxDpwzJjYwrSowQOnGg9qnTsADkm0asEGYzNcdQp%2BXu1P7NjuQG0bqjjbMfmN3F3%2Fvc3as7C8%2BF2avoEOmcVIhPCbzmu1AiNnn3hMFGRzPH5gkUEsC%2FhoPE3w8rMt2jWiUOHogvYsjAGG6x%2F03DOmjlycuMops3RDG%2BesrtJDGtAT%2BhpkSgmQXxJKIj5adLR0W2VB%2BGMDWwRe6iF14EJJ%2ByJEciWf30qGkwkVfM5FtFJpdBnUi5yxZQ%2FbP3WtljV2tQPKAdhXEQ0fCCgXTMJHClcQGOqUBzHyBgtIyEMEAXJvEdWsg%2BpNJqxhE7e3dBrlROOL7sEoYwd%2FTUyXjv8eEJ34jPWZc8l8mUaW68heeUZxyL%2BZoTOSstlFEDd3%2FZRDJlqxALgJZZIfUIpTCM%2FICzg2AxX3F8KOx%2F2gj9%2FUidt9Z5w59leFMeaO%2FvlitwFIqX3ZiH2Q9CnL%2F03FaHpujPmoAPbsV3bBH7zyz%2FJWD1dWFlriQwvjMiQzO&X-Amz-Signature=a17bbb0116337c1e6fc54966069e7472dfc548d86be0ee6d72ac80dff9579707&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR75X5LH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCO3dJP0IU3jCELuJGFQk2ujsdnM5JQEVDCA2lXfujxFAIgV%2BCVmPLC8ly%2FRnL5Cb2xMRGxXpZK9XNseRgyYYp5jOYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDyYN0CFha%2B84JRmxircA8igHKMX1bAjMRAhG3B%2ByKArKjArScRPbwE6pY%2BWeEXPcow69qdiS3gyaBw2VwISWjjENfM5AvYKhodvhWpP5bLbLuf7UU%2BH3lpw73B1JA4A5zk8ajJ%2B74f8fBlyTQs07VbvumR7HyAFovGfrChX2BajGKF%2BHo3Oe%2BZSnLklC9OkxP2Qw0xFOqeOGOqi2In8cpseSJg%2FlKa%2ByMc3phe4rJhkIDO0P4E1%2BX8%2Bu7zL6MjEmucGu60R8DqpKc2yoVFsPgGxbqrdYf2xcCiv99F9nXBc23nOrsoZ0vdVdewbkBtjZoiqEMWy%2B4X3dlTcPzUGcusSaYn%2F6iQueNC4C5pUl%2B%2BgrtoXL3YOb6XsQVOPYdDxDpwzJjYwrSowQOnGg9qnTsADkm0asEGYzNcdQp%2BXu1P7NjuQG0bqjjbMfmN3F3%2Fvc3as7C8%2BF2avoEOmcVIhPCbzmu1AiNnn3hMFGRzPH5gkUEsC%2FhoPE3w8rMt2jWiUOHogvYsjAGG6x%2F03DOmjlycuMops3RDG%2BesrtJDGtAT%2BhpkSgmQXxJKIj5adLR0W2VB%2BGMDWwRe6iF14EJJ%2ByJEciWf30qGkwkVfM5FtFJpdBnUi5yxZQ%2FbP3WtljV2tQPKAdhXEQ0fCCgXTMJHClcQGOqUBzHyBgtIyEMEAXJvEdWsg%2BpNJqxhE7e3dBrlROOL7sEoYwd%2FTUyXjv8eEJ34jPWZc8l8mUaW68heeUZxyL%2BZoTOSstlFEDd3%2FZRDJlqxALgJZZIfUIpTCM%2FICzg2AxX3F8KOx%2F2gj9%2FUidt9Z5w59leFMeaO%2FvlitwFIqX3ZiH2Q9CnL%2F03FaHpujPmoAPbsV3bBH7zyz%2FJWD1dWFlriQwvjMiQzO&X-Amz-Signature=2f4e2a9b890f41dcd3974b1c69933af633d3bf63fd3635cd46b0bffa8f87dde0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR75X5LH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCO3dJP0IU3jCELuJGFQk2ujsdnM5JQEVDCA2lXfujxFAIgV%2BCVmPLC8ly%2FRnL5Cb2xMRGxXpZK9XNseRgyYYp5jOYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDyYN0CFha%2B84JRmxircA8igHKMX1bAjMRAhG3B%2ByKArKjArScRPbwE6pY%2BWeEXPcow69qdiS3gyaBw2VwISWjjENfM5AvYKhodvhWpP5bLbLuf7UU%2BH3lpw73B1JA4A5zk8ajJ%2B74f8fBlyTQs07VbvumR7HyAFovGfrChX2BajGKF%2BHo3Oe%2BZSnLklC9OkxP2Qw0xFOqeOGOqi2In8cpseSJg%2FlKa%2ByMc3phe4rJhkIDO0P4E1%2BX8%2Bu7zL6MjEmucGu60R8DqpKc2yoVFsPgGxbqrdYf2xcCiv99F9nXBc23nOrsoZ0vdVdewbkBtjZoiqEMWy%2B4X3dlTcPzUGcusSaYn%2F6iQueNC4C5pUl%2B%2BgrtoXL3YOb6XsQVOPYdDxDpwzJjYwrSowQOnGg9qnTsADkm0asEGYzNcdQp%2BXu1P7NjuQG0bqjjbMfmN3F3%2Fvc3as7C8%2BF2avoEOmcVIhPCbzmu1AiNnn3hMFGRzPH5gkUEsC%2FhoPE3w8rMt2jWiUOHogvYsjAGG6x%2F03DOmjlycuMops3RDG%2BesrtJDGtAT%2BhpkSgmQXxJKIj5adLR0W2VB%2BGMDWwRe6iF14EJJ%2ByJEciWf30qGkwkVfM5FtFJpdBnUi5yxZQ%2FbP3WtljV2tQPKAdhXEQ0fCCgXTMJHClcQGOqUBzHyBgtIyEMEAXJvEdWsg%2BpNJqxhE7e3dBrlROOL7sEoYwd%2FTUyXjv8eEJ34jPWZc8l8mUaW68heeUZxyL%2BZoTOSstlFEDd3%2FZRDJlqxALgJZZIfUIpTCM%2FICzg2AxX3F8KOx%2F2gj9%2FUidt9Z5w59leFMeaO%2FvlitwFIqX3ZiH2Q9CnL%2F03FaHpujPmoAPbsV3bBH7zyz%2FJWD1dWFlriQwvjMiQzO&X-Amz-Signature=c68e34b102957344b8decebafcde559d781c7ffe7718b81df1b0a48111ac55d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR75X5LH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCO3dJP0IU3jCELuJGFQk2ujsdnM5JQEVDCA2lXfujxFAIgV%2BCVmPLC8ly%2FRnL5Cb2xMRGxXpZK9XNseRgyYYp5jOYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDyYN0CFha%2B84JRmxircA8igHKMX1bAjMRAhG3B%2ByKArKjArScRPbwE6pY%2BWeEXPcow69qdiS3gyaBw2VwISWjjENfM5AvYKhodvhWpP5bLbLuf7UU%2BH3lpw73B1JA4A5zk8ajJ%2B74f8fBlyTQs07VbvumR7HyAFovGfrChX2BajGKF%2BHo3Oe%2BZSnLklC9OkxP2Qw0xFOqeOGOqi2In8cpseSJg%2FlKa%2ByMc3phe4rJhkIDO0P4E1%2BX8%2Bu7zL6MjEmucGu60R8DqpKc2yoVFsPgGxbqrdYf2xcCiv99F9nXBc23nOrsoZ0vdVdewbkBtjZoiqEMWy%2B4X3dlTcPzUGcusSaYn%2F6iQueNC4C5pUl%2B%2BgrtoXL3YOb6XsQVOPYdDxDpwzJjYwrSowQOnGg9qnTsADkm0asEGYzNcdQp%2BXu1P7NjuQG0bqjjbMfmN3F3%2Fvc3as7C8%2BF2avoEOmcVIhPCbzmu1AiNnn3hMFGRzPH5gkUEsC%2FhoPE3w8rMt2jWiUOHogvYsjAGG6x%2F03DOmjlycuMops3RDG%2BesrtJDGtAT%2BhpkSgmQXxJKIj5adLR0W2VB%2BGMDWwRe6iF14EJJ%2ByJEciWf30qGkwkVfM5FtFJpdBnUi5yxZQ%2FbP3WtljV2tQPKAdhXEQ0fCCgXTMJHClcQGOqUBzHyBgtIyEMEAXJvEdWsg%2BpNJqxhE7e3dBrlROOL7sEoYwd%2FTUyXjv8eEJ34jPWZc8l8mUaW68heeUZxyL%2BZoTOSstlFEDd3%2FZRDJlqxALgJZZIfUIpTCM%2FICzg2AxX3F8KOx%2F2gj9%2FUidt9Z5w59leFMeaO%2FvlitwFIqX3ZiH2Q9CnL%2F03FaHpujPmoAPbsV3bBH7zyz%2FJWD1dWFlriQwvjMiQzO&X-Amz-Signature=7068c79d546a29cdfaa07580d31834e3165c0a34c7b6a66a4c4a098a67778474&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR75X5LH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCO3dJP0IU3jCELuJGFQk2ujsdnM5JQEVDCA2lXfujxFAIgV%2BCVmPLC8ly%2FRnL5Cb2xMRGxXpZK9XNseRgyYYp5jOYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDyYN0CFha%2B84JRmxircA8igHKMX1bAjMRAhG3B%2ByKArKjArScRPbwE6pY%2BWeEXPcow69qdiS3gyaBw2VwISWjjENfM5AvYKhodvhWpP5bLbLuf7UU%2BH3lpw73B1JA4A5zk8ajJ%2B74f8fBlyTQs07VbvumR7HyAFovGfrChX2BajGKF%2BHo3Oe%2BZSnLklC9OkxP2Qw0xFOqeOGOqi2In8cpseSJg%2FlKa%2ByMc3phe4rJhkIDO0P4E1%2BX8%2Bu7zL6MjEmucGu60R8DqpKc2yoVFsPgGxbqrdYf2xcCiv99F9nXBc23nOrsoZ0vdVdewbkBtjZoiqEMWy%2B4X3dlTcPzUGcusSaYn%2F6iQueNC4C5pUl%2B%2BgrtoXL3YOb6XsQVOPYdDxDpwzJjYwrSowQOnGg9qnTsADkm0asEGYzNcdQp%2BXu1P7NjuQG0bqjjbMfmN3F3%2Fvc3as7C8%2BF2avoEOmcVIhPCbzmu1AiNnn3hMFGRzPH5gkUEsC%2FhoPE3w8rMt2jWiUOHogvYsjAGG6x%2F03DOmjlycuMops3RDG%2BesrtJDGtAT%2BhpkSgmQXxJKIj5adLR0W2VB%2BGMDWwRe6iF14EJJ%2ByJEciWf30qGkwkVfM5FtFJpdBnUi5yxZQ%2FbP3WtljV2tQPKAdhXEQ0fCCgXTMJHClcQGOqUBzHyBgtIyEMEAXJvEdWsg%2BpNJqxhE7e3dBrlROOL7sEoYwd%2FTUyXjv8eEJ34jPWZc8l8mUaW68heeUZxyL%2BZoTOSstlFEDd3%2FZRDJlqxALgJZZIfUIpTCM%2FICzg2AxX3F8KOx%2F2gj9%2FUidt9Z5w59leFMeaO%2FvlitwFIqX3ZiH2Q9CnL%2F03FaHpujPmoAPbsV3bBH7zyz%2FJWD1dWFlriQwvjMiQzO&X-Amz-Signature=7f75f8b343e75f2510c40eddeaa5856f00c44219633ac09d17f48a069a1bff86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR75X5LH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCO3dJP0IU3jCELuJGFQk2ujsdnM5JQEVDCA2lXfujxFAIgV%2BCVmPLC8ly%2FRnL5Cb2xMRGxXpZK9XNseRgyYYp5jOYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDyYN0CFha%2B84JRmxircA8igHKMX1bAjMRAhG3B%2ByKArKjArScRPbwE6pY%2BWeEXPcow69qdiS3gyaBw2VwISWjjENfM5AvYKhodvhWpP5bLbLuf7UU%2BH3lpw73B1JA4A5zk8ajJ%2B74f8fBlyTQs07VbvumR7HyAFovGfrChX2BajGKF%2BHo3Oe%2BZSnLklC9OkxP2Qw0xFOqeOGOqi2In8cpseSJg%2FlKa%2ByMc3phe4rJhkIDO0P4E1%2BX8%2Bu7zL6MjEmucGu60R8DqpKc2yoVFsPgGxbqrdYf2xcCiv99F9nXBc23nOrsoZ0vdVdewbkBtjZoiqEMWy%2B4X3dlTcPzUGcusSaYn%2F6iQueNC4C5pUl%2B%2BgrtoXL3YOb6XsQVOPYdDxDpwzJjYwrSowQOnGg9qnTsADkm0asEGYzNcdQp%2BXu1P7NjuQG0bqjjbMfmN3F3%2Fvc3as7C8%2BF2avoEOmcVIhPCbzmu1AiNnn3hMFGRzPH5gkUEsC%2FhoPE3w8rMt2jWiUOHogvYsjAGG6x%2F03DOmjlycuMops3RDG%2BesrtJDGtAT%2BhpkSgmQXxJKIj5adLR0W2VB%2BGMDWwRe6iF14EJJ%2ByJEciWf30qGkwkVfM5FtFJpdBnUi5yxZQ%2FbP3WtljV2tQPKAdhXEQ0fCCgXTMJHClcQGOqUBzHyBgtIyEMEAXJvEdWsg%2BpNJqxhE7e3dBrlROOL7sEoYwd%2FTUyXjv8eEJ34jPWZc8l8mUaW68heeUZxyL%2BZoTOSstlFEDd3%2FZRDJlqxALgJZZIfUIpTCM%2FICzg2AxX3F8KOx%2F2gj9%2FUidt9Z5w59leFMeaO%2FvlitwFIqX3ZiH2Q9CnL%2F03FaHpujPmoAPbsV3bBH7zyz%2FJWD1dWFlriQwvjMiQzO&X-Amz-Signature=d5fc4603af4a6f6b08108c193805926276938f6875c504450425be3446c29973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR75X5LH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCO3dJP0IU3jCELuJGFQk2ujsdnM5JQEVDCA2lXfujxFAIgV%2BCVmPLC8ly%2FRnL5Cb2xMRGxXpZK9XNseRgyYYp5jOYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDyYN0CFha%2B84JRmxircA8igHKMX1bAjMRAhG3B%2ByKArKjArScRPbwE6pY%2BWeEXPcow69qdiS3gyaBw2VwISWjjENfM5AvYKhodvhWpP5bLbLuf7UU%2BH3lpw73B1JA4A5zk8ajJ%2B74f8fBlyTQs07VbvumR7HyAFovGfrChX2BajGKF%2BHo3Oe%2BZSnLklC9OkxP2Qw0xFOqeOGOqi2In8cpseSJg%2FlKa%2ByMc3phe4rJhkIDO0P4E1%2BX8%2Bu7zL6MjEmucGu60R8DqpKc2yoVFsPgGxbqrdYf2xcCiv99F9nXBc23nOrsoZ0vdVdewbkBtjZoiqEMWy%2B4X3dlTcPzUGcusSaYn%2F6iQueNC4C5pUl%2B%2BgrtoXL3YOb6XsQVOPYdDxDpwzJjYwrSowQOnGg9qnTsADkm0asEGYzNcdQp%2BXu1P7NjuQG0bqjjbMfmN3F3%2Fvc3as7C8%2BF2avoEOmcVIhPCbzmu1AiNnn3hMFGRzPH5gkUEsC%2FhoPE3w8rMt2jWiUOHogvYsjAGG6x%2F03DOmjlycuMops3RDG%2BesrtJDGtAT%2BhpkSgmQXxJKIj5adLR0W2VB%2BGMDWwRe6iF14EJJ%2ByJEciWf30qGkwkVfM5FtFJpdBnUi5yxZQ%2FbP3WtljV2tQPKAdhXEQ0fCCgXTMJHClcQGOqUBzHyBgtIyEMEAXJvEdWsg%2BpNJqxhE7e3dBrlROOL7sEoYwd%2FTUyXjv8eEJ34jPWZc8l8mUaW68heeUZxyL%2BZoTOSstlFEDd3%2FZRDJlqxALgJZZIfUIpTCM%2FICzg2AxX3F8KOx%2F2gj9%2FUidt9Z5w59leFMeaO%2FvlitwFIqX3ZiH2Q9CnL%2F03FaHpujPmoAPbsV3bBH7zyz%2FJWD1dWFlriQwvjMiQzO&X-Amz-Signature=5c3560ec488f4ea5184ac9d4d992644ef46762e1233d696b20c78c2e82259f60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR75X5LH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCO3dJP0IU3jCELuJGFQk2ujsdnM5JQEVDCA2lXfujxFAIgV%2BCVmPLC8ly%2FRnL5Cb2xMRGxXpZK9XNseRgyYYp5jOYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDyYN0CFha%2B84JRmxircA8igHKMX1bAjMRAhG3B%2ByKArKjArScRPbwE6pY%2BWeEXPcow69qdiS3gyaBw2VwISWjjENfM5AvYKhodvhWpP5bLbLuf7UU%2BH3lpw73B1JA4A5zk8ajJ%2B74f8fBlyTQs07VbvumR7HyAFovGfrChX2BajGKF%2BHo3Oe%2BZSnLklC9OkxP2Qw0xFOqeOGOqi2In8cpseSJg%2FlKa%2ByMc3phe4rJhkIDO0P4E1%2BX8%2Bu7zL6MjEmucGu60R8DqpKc2yoVFsPgGxbqrdYf2xcCiv99F9nXBc23nOrsoZ0vdVdewbkBtjZoiqEMWy%2B4X3dlTcPzUGcusSaYn%2F6iQueNC4C5pUl%2B%2BgrtoXL3YOb6XsQVOPYdDxDpwzJjYwrSowQOnGg9qnTsADkm0asEGYzNcdQp%2BXu1P7NjuQG0bqjjbMfmN3F3%2Fvc3as7C8%2BF2avoEOmcVIhPCbzmu1AiNnn3hMFGRzPH5gkUEsC%2FhoPE3w8rMt2jWiUOHogvYsjAGG6x%2F03DOmjlycuMops3RDG%2BesrtJDGtAT%2BhpkSgmQXxJKIj5adLR0W2VB%2BGMDWwRe6iF14EJJ%2ByJEciWf30qGkwkVfM5FtFJpdBnUi5yxZQ%2FbP3WtljV2tQPKAdhXEQ0fCCgXTMJHClcQGOqUBzHyBgtIyEMEAXJvEdWsg%2BpNJqxhE7e3dBrlROOL7sEoYwd%2FTUyXjv8eEJ34jPWZc8l8mUaW68heeUZxyL%2BZoTOSstlFEDd3%2FZRDJlqxALgJZZIfUIpTCM%2FICzg2AxX3F8KOx%2F2gj9%2FUidt9Z5w59leFMeaO%2FvlitwFIqX3ZiH2Q9CnL%2F03FaHpujPmoAPbsV3bBH7zyz%2FJWD1dWFlriQwvjMiQzO&X-Amz-Signature=8d4efe69dd892dec0aa6eaaa2ef0fda17943ded4ca65e3284ef9275cc7a54d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR75X5LH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCO3dJP0IU3jCELuJGFQk2ujsdnM5JQEVDCA2lXfujxFAIgV%2BCVmPLC8ly%2FRnL5Cb2xMRGxXpZK9XNseRgyYYp5jOYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDyYN0CFha%2B84JRmxircA8igHKMX1bAjMRAhG3B%2ByKArKjArScRPbwE6pY%2BWeEXPcow69qdiS3gyaBw2VwISWjjENfM5AvYKhodvhWpP5bLbLuf7UU%2BH3lpw73B1JA4A5zk8ajJ%2B74f8fBlyTQs07VbvumR7HyAFovGfrChX2BajGKF%2BHo3Oe%2BZSnLklC9OkxP2Qw0xFOqeOGOqi2In8cpseSJg%2FlKa%2ByMc3phe4rJhkIDO0P4E1%2BX8%2Bu7zL6MjEmucGu60R8DqpKc2yoVFsPgGxbqrdYf2xcCiv99F9nXBc23nOrsoZ0vdVdewbkBtjZoiqEMWy%2B4X3dlTcPzUGcusSaYn%2F6iQueNC4C5pUl%2B%2BgrtoXL3YOb6XsQVOPYdDxDpwzJjYwrSowQOnGg9qnTsADkm0asEGYzNcdQp%2BXu1P7NjuQG0bqjjbMfmN3F3%2Fvc3as7C8%2BF2avoEOmcVIhPCbzmu1AiNnn3hMFGRzPH5gkUEsC%2FhoPE3w8rMt2jWiUOHogvYsjAGG6x%2F03DOmjlycuMops3RDG%2BesrtJDGtAT%2BhpkSgmQXxJKIj5adLR0W2VB%2BGMDWwRe6iF14EJJ%2ByJEciWf30qGkwkVfM5FtFJpdBnUi5yxZQ%2FbP3WtljV2tQPKAdhXEQ0fCCgXTMJHClcQGOqUBzHyBgtIyEMEAXJvEdWsg%2BpNJqxhE7e3dBrlROOL7sEoYwd%2FTUyXjv8eEJ34jPWZc8l8mUaW68heeUZxyL%2BZoTOSstlFEDd3%2FZRDJlqxALgJZZIfUIpTCM%2FICzg2AxX3F8KOx%2F2gj9%2FUidt9Z5w59leFMeaO%2FvlitwFIqX3ZiH2Q9CnL%2F03FaHpujPmoAPbsV3bBH7zyz%2FJWD1dWFlriQwvjMiQzO&X-Amz-Signature=caf4a11d7b018c2fb4f4668c7947ca68e7e5fd018f6868e730ea74a60adcf52c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR75X5LH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCO3dJP0IU3jCELuJGFQk2ujsdnM5JQEVDCA2lXfujxFAIgV%2BCVmPLC8ly%2FRnL5Cb2xMRGxXpZK9XNseRgyYYp5jOYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDyYN0CFha%2B84JRmxircA8igHKMX1bAjMRAhG3B%2ByKArKjArScRPbwE6pY%2BWeEXPcow69qdiS3gyaBw2VwISWjjENfM5AvYKhodvhWpP5bLbLuf7UU%2BH3lpw73B1JA4A5zk8ajJ%2B74f8fBlyTQs07VbvumR7HyAFovGfrChX2BajGKF%2BHo3Oe%2BZSnLklC9OkxP2Qw0xFOqeOGOqi2In8cpseSJg%2FlKa%2ByMc3phe4rJhkIDO0P4E1%2BX8%2Bu7zL6MjEmucGu60R8DqpKc2yoVFsPgGxbqrdYf2xcCiv99F9nXBc23nOrsoZ0vdVdewbkBtjZoiqEMWy%2B4X3dlTcPzUGcusSaYn%2F6iQueNC4C5pUl%2B%2BgrtoXL3YOb6XsQVOPYdDxDpwzJjYwrSowQOnGg9qnTsADkm0asEGYzNcdQp%2BXu1P7NjuQG0bqjjbMfmN3F3%2Fvc3as7C8%2BF2avoEOmcVIhPCbzmu1AiNnn3hMFGRzPH5gkUEsC%2FhoPE3w8rMt2jWiUOHogvYsjAGG6x%2F03DOmjlycuMops3RDG%2BesrtJDGtAT%2BhpkSgmQXxJKIj5adLR0W2VB%2BGMDWwRe6iF14EJJ%2ByJEciWf30qGkwkVfM5FtFJpdBnUi5yxZQ%2FbP3WtljV2tQPKAdhXEQ0fCCgXTMJHClcQGOqUBzHyBgtIyEMEAXJvEdWsg%2BpNJqxhE7e3dBrlROOL7sEoYwd%2FTUyXjv8eEJ34jPWZc8l8mUaW68heeUZxyL%2BZoTOSstlFEDd3%2FZRDJlqxALgJZZIfUIpTCM%2FICzg2AxX3F8KOx%2F2gj9%2FUidt9Z5w59leFMeaO%2FvlitwFIqX3ZiH2Q9CnL%2F03FaHpujPmoAPbsV3bBH7zyz%2FJWD1dWFlriQwvjMiQzO&X-Amz-Signature=1bee5142a70698a0e3d91eeb5eaf5b693995e26cea44d0ebc603ca0f2f1e1447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBGEPLMX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIGTRoHbTz6SerzpoRcoYGjSPh9fh%2FldtzEmkzHseREAKAiEArz95FauVW6k7btpvPsTMWJnspjP18ZzsK4sRBOt6NBwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDB2sN8B6tHDfXWPdmircA2BWM4mGnJEn0y5DD%2FqxwUyOPqI3ZpXPcumADnrIvu3Q6G29k56LhDMEhjrTaqJQZAtjQDeK2vjrr2gFidQC9Yxv7cdKgfzTZsN4y%2B%2BZ2BPM2bqfRoLD5tJw5TnAL9TbL30WcleXMiXeSwb9%2FivIcMm2%2ByiFtXHbdPwcjXQo6aLtmrrlfzL%2Bvn%2BpRLf8Fo3MwxAd5YwMR9fE3NfwOOaOKjuGBebrFVyEAJ3rGwalyYR1omGAi4fgdMmrMG%2BnD6he7gMEALsY7snXK%2Fo2rILEA%2Byc8X%2FJnZP70W0936doJAHs6vnd20mXobrUbQXRv%2B%2B4%2B4rg8fynQjZ1c29ZggNnuUWhpizNRynmcDR4DvC1fszSJggtgXb8umnwPPnp%2FDOL6y2ZMtiRb0%2B9ss6Lgv6CBm9r1eMr6%2FfYbOqpt20Z8LcuTkSmVCytLuTHjVwzQO1IQWevPOh45HYhLKCyRalm6Vo3ezeVha7%2B7Ha0IiXWyEgRdV0n5vmPTYdVW%2BV2QFfw9SkVtDe1GaLAr%2F9WeGb9R3fmrpNww4mYopdXGExSvYIhYLHqZ1XYRQhlnZ5XCssLpokMBmPGx5Hl4RrVPycOLu%2FReHUmTsoaWyHoqYjwQVOF4uL%2B0yDeUvwTpyPfMIbClcQGOqUBDMf5PR0rUiIjuoZce%2Bzy9lQrxJnSZ5mGXx41tY49wg2ww%2BuHazMkYJLCik%2BOn9USP4n6GUWTkQK3pFqK56tANvPhv%2Fm9dzMRXvE%2FLZ%2Fcq6waYG66VVanebbRhmMtnAVvqkY%2B5wceVgWDOezAwyJ2zojqbk9cv%2F7umjOVgrLcqmKoVSYHG4c0F4o%2FSLt0tbp0rE9Cv%2FQJCcgENyA3sQB8zTf7P0en&X-Amz-Signature=d3a27ea1dd8cfbc302c4c56933f0bdce7042f0b613b0628c7af1b860d998d6ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBGEPLMX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIGTRoHbTz6SerzpoRcoYGjSPh9fh%2FldtzEmkzHseREAKAiEArz95FauVW6k7btpvPsTMWJnspjP18ZzsK4sRBOt6NBwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDB2sN8B6tHDfXWPdmircA2BWM4mGnJEn0y5DD%2FqxwUyOPqI3ZpXPcumADnrIvu3Q6G29k56LhDMEhjrTaqJQZAtjQDeK2vjrr2gFidQC9Yxv7cdKgfzTZsN4y%2B%2BZ2BPM2bqfRoLD5tJw5TnAL9TbL30WcleXMiXeSwb9%2FivIcMm2%2ByiFtXHbdPwcjXQo6aLtmrrlfzL%2Bvn%2BpRLf8Fo3MwxAd5YwMR9fE3NfwOOaOKjuGBebrFVyEAJ3rGwalyYR1omGAi4fgdMmrMG%2BnD6he7gMEALsY7snXK%2Fo2rILEA%2Byc8X%2FJnZP70W0936doJAHs6vnd20mXobrUbQXRv%2B%2B4%2B4rg8fynQjZ1c29ZggNnuUWhpizNRynmcDR4DvC1fszSJggtgXb8umnwPPnp%2FDOL6y2ZMtiRb0%2B9ss6Lgv6CBm9r1eMr6%2FfYbOqpt20Z8LcuTkSmVCytLuTHjVwzQO1IQWevPOh45HYhLKCyRalm6Vo3ezeVha7%2B7Ha0IiXWyEgRdV0n5vmPTYdVW%2BV2QFfw9SkVtDe1GaLAr%2F9WeGb9R3fmrpNww4mYopdXGExSvYIhYLHqZ1XYRQhlnZ5XCssLpokMBmPGx5Hl4RrVPycOLu%2FReHUmTsoaWyHoqYjwQVOF4uL%2B0yDeUvwTpyPfMIbClcQGOqUBDMf5PR0rUiIjuoZce%2Bzy9lQrxJnSZ5mGXx41tY49wg2ww%2BuHazMkYJLCik%2BOn9USP4n6GUWTkQK3pFqK56tANvPhv%2Fm9dzMRXvE%2FLZ%2Fcq6waYG66VVanebbRhmMtnAVvqkY%2B5wceVgWDOezAwyJ2zojqbk9cv%2F7umjOVgrLcqmKoVSYHG4c0F4o%2FSLt0tbp0rE9Cv%2FQJCcgENyA3sQB8zTf7P0en&X-Amz-Signature=942a66916b3e7105f1d364fd526104a68e51edae317915a2346b1be157cd5780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBGEPLMX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIGTRoHbTz6SerzpoRcoYGjSPh9fh%2FldtzEmkzHseREAKAiEArz95FauVW6k7btpvPsTMWJnspjP18ZzsK4sRBOt6NBwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDB2sN8B6tHDfXWPdmircA2BWM4mGnJEn0y5DD%2FqxwUyOPqI3ZpXPcumADnrIvu3Q6G29k56LhDMEhjrTaqJQZAtjQDeK2vjrr2gFidQC9Yxv7cdKgfzTZsN4y%2B%2BZ2BPM2bqfRoLD5tJw5TnAL9TbL30WcleXMiXeSwb9%2FivIcMm2%2ByiFtXHbdPwcjXQo6aLtmrrlfzL%2Bvn%2BpRLf8Fo3MwxAd5YwMR9fE3NfwOOaOKjuGBebrFVyEAJ3rGwalyYR1omGAi4fgdMmrMG%2BnD6he7gMEALsY7snXK%2Fo2rILEA%2Byc8X%2FJnZP70W0936doJAHs6vnd20mXobrUbQXRv%2B%2B4%2B4rg8fynQjZ1c29ZggNnuUWhpizNRynmcDR4DvC1fszSJggtgXb8umnwPPnp%2FDOL6y2ZMtiRb0%2B9ss6Lgv6CBm9r1eMr6%2FfYbOqpt20Z8LcuTkSmVCytLuTHjVwzQO1IQWevPOh45HYhLKCyRalm6Vo3ezeVha7%2B7Ha0IiXWyEgRdV0n5vmPTYdVW%2BV2QFfw9SkVtDe1GaLAr%2F9WeGb9R3fmrpNww4mYopdXGExSvYIhYLHqZ1XYRQhlnZ5XCssLpokMBmPGx5Hl4RrVPycOLu%2FReHUmTsoaWyHoqYjwQVOF4uL%2B0yDeUvwTpyPfMIbClcQGOqUBDMf5PR0rUiIjuoZce%2Bzy9lQrxJnSZ5mGXx41tY49wg2ww%2BuHazMkYJLCik%2BOn9USP4n6GUWTkQK3pFqK56tANvPhv%2Fm9dzMRXvE%2FLZ%2Fcq6waYG66VVanebbRhmMtnAVvqkY%2B5wceVgWDOezAwyJ2zojqbk9cv%2F7umjOVgrLcqmKoVSYHG4c0F4o%2FSLt0tbp0rE9Cv%2FQJCcgENyA3sQB8zTf7P0en&X-Amz-Signature=a9b412b96d973067c2ff96d92f9400ba1019f6d81ff5215e8954718e00c2d861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBGEPLMX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIGTRoHbTz6SerzpoRcoYGjSPh9fh%2FldtzEmkzHseREAKAiEArz95FauVW6k7btpvPsTMWJnspjP18ZzsK4sRBOt6NBwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDB2sN8B6tHDfXWPdmircA2BWM4mGnJEn0y5DD%2FqxwUyOPqI3ZpXPcumADnrIvu3Q6G29k56LhDMEhjrTaqJQZAtjQDeK2vjrr2gFidQC9Yxv7cdKgfzTZsN4y%2B%2BZ2BPM2bqfRoLD5tJw5TnAL9TbL30WcleXMiXeSwb9%2FivIcMm2%2ByiFtXHbdPwcjXQo6aLtmrrlfzL%2Bvn%2BpRLf8Fo3MwxAd5YwMR9fE3NfwOOaOKjuGBebrFVyEAJ3rGwalyYR1omGAi4fgdMmrMG%2BnD6he7gMEALsY7snXK%2Fo2rILEA%2Byc8X%2FJnZP70W0936doJAHs6vnd20mXobrUbQXRv%2B%2B4%2B4rg8fynQjZ1c29ZggNnuUWhpizNRynmcDR4DvC1fszSJggtgXb8umnwPPnp%2FDOL6y2ZMtiRb0%2B9ss6Lgv6CBm9r1eMr6%2FfYbOqpt20Z8LcuTkSmVCytLuTHjVwzQO1IQWevPOh45HYhLKCyRalm6Vo3ezeVha7%2B7Ha0IiXWyEgRdV0n5vmPTYdVW%2BV2QFfw9SkVtDe1GaLAr%2F9WeGb9R3fmrpNww4mYopdXGExSvYIhYLHqZ1XYRQhlnZ5XCssLpokMBmPGx5Hl4RrVPycOLu%2FReHUmTsoaWyHoqYjwQVOF4uL%2B0yDeUvwTpyPfMIbClcQGOqUBDMf5PR0rUiIjuoZce%2Bzy9lQrxJnSZ5mGXx41tY49wg2ww%2BuHazMkYJLCik%2BOn9USP4n6GUWTkQK3pFqK56tANvPhv%2Fm9dzMRXvE%2FLZ%2Fcq6waYG66VVanebbRhmMtnAVvqkY%2B5wceVgWDOezAwyJ2zojqbk9cv%2F7umjOVgrLcqmKoVSYHG4c0F4o%2FSLt0tbp0rE9Cv%2FQJCcgENyA3sQB8zTf7P0en&X-Amz-Signature=264adc987faeccacec56007e181123f4d1a44564b96dfef9c83e8b4dd45c4c14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBGEPLMX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIGTRoHbTz6SerzpoRcoYGjSPh9fh%2FldtzEmkzHseREAKAiEArz95FauVW6k7btpvPsTMWJnspjP18ZzsK4sRBOt6NBwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDB2sN8B6tHDfXWPdmircA2BWM4mGnJEn0y5DD%2FqxwUyOPqI3ZpXPcumADnrIvu3Q6G29k56LhDMEhjrTaqJQZAtjQDeK2vjrr2gFidQC9Yxv7cdKgfzTZsN4y%2B%2BZ2BPM2bqfRoLD5tJw5TnAL9TbL30WcleXMiXeSwb9%2FivIcMm2%2ByiFtXHbdPwcjXQo6aLtmrrlfzL%2Bvn%2BpRLf8Fo3MwxAd5YwMR9fE3NfwOOaOKjuGBebrFVyEAJ3rGwalyYR1omGAi4fgdMmrMG%2BnD6he7gMEALsY7snXK%2Fo2rILEA%2Byc8X%2FJnZP70W0936doJAHs6vnd20mXobrUbQXRv%2B%2B4%2B4rg8fynQjZ1c29ZggNnuUWhpizNRynmcDR4DvC1fszSJggtgXb8umnwPPnp%2FDOL6y2ZMtiRb0%2B9ss6Lgv6CBm9r1eMr6%2FfYbOqpt20Z8LcuTkSmVCytLuTHjVwzQO1IQWevPOh45HYhLKCyRalm6Vo3ezeVha7%2B7Ha0IiXWyEgRdV0n5vmPTYdVW%2BV2QFfw9SkVtDe1GaLAr%2F9WeGb9R3fmrpNww4mYopdXGExSvYIhYLHqZ1XYRQhlnZ5XCssLpokMBmPGx5Hl4RrVPycOLu%2FReHUmTsoaWyHoqYjwQVOF4uL%2B0yDeUvwTpyPfMIbClcQGOqUBDMf5PR0rUiIjuoZce%2Bzy9lQrxJnSZ5mGXx41tY49wg2ww%2BuHazMkYJLCik%2BOn9USP4n6GUWTkQK3pFqK56tANvPhv%2Fm9dzMRXvE%2FLZ%2Fcq6waYG66VVanebbRhmMtnAVvqkY%2B5wceVgWDOezAwyJ2zojqbk9cv%2F7umjOVgrLcqmKoVSYHG4c0F4o%2FSLt0tbp0rE9Cv%2FQJCcgENyA3sQB8zTf7P0en&X-Amz-Signature=df387bb701d73215b81671cd409f4cebe4957712dfb0d35347377f41372c8891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBGEPLMX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIGTRoHbTz6SerzpoRcoYGjSPh9fh%2FldtzEmkzHseREAKAiEArz95FauVW6k7btpvPsTMWJnspjP18ZzsK4sRBOt6NBwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDB2sN8B6tHDfXWPdmircA2BWM4mGnJEn0y5DD%2FqxwUyOPqI3ZpXPcumADnrIvu3Q6G29k56LhDMEhjrTaqJQZAtjQDeK2vjrr2gFidQC9Yxv7cdKgfzTZsN4y%2B%2BZ2BPM2bqfRoLD5tJw5TnAL9TbL30WcleXMiXeSwb9%2FivIcMm2%2ByiFtXHbdPwcjXQo6aLtmrrlfzL%2Bvn%2BpRLf8Fo3MwxAd5YwMR9fE3NfwOOaOKjuGBebrFVyEAJ3rGwalyYR1omGAi4fgdMmrMG%2BnD6he7gMEALsY7snXK%2Fo2rILEA%2Byc8X%2FJnZP70W0936doJAHs6vnd20mXobrUbQXRv%2B%2B4%2B4rg8fynQjZ1c29ZggNnuUWhpizNRynmcDR4DvC1fszSJggtgXb8umnwPPnp%2FDOL6y2ZMtiRb0%2B9ss6Lgv6CBm9r1eMr6%2FfYbOqpt20Z8LcuTkSmVCytLuTHjVwzQO1IQWevPOh45HYhLKCyRalm6Vo3ezeVha7%2B7Ha0IiXWyEgRdV0n5vmPTYdVW%2BV2QFfw9SkVtDe1GaLAr%2F9WeGb9R3fmrpNww4mYopdXGExSvYIhYLHqZ1XYRQhlnZ5XCssLpokMBmPGx5Hl4RrVPycOLu%2FReHUmTsoaWyHoqYjwQVOF4uL%2B0yDeUvwTpyPfMIbClcQGOqUBDMf5PR0rUiIjuoZce%2Bzy9lQrxJnSZ5mGXx41tY49wg2ww%2BuHazMkYJLCik%2BOn9USP4n6GUWTkQK3pFqK56tANvPhv%2Fm9dzMRXvE%2FLZ%2Fcq6waYG66VVanebbRhmMtnAVvqkY%2B5wceVgWDOezAwyJ2zojqbk9cv%2F7umjOVgrLcqmKoVSYHG4c0F4o%2FSLt0tbp0rE9Cv%2FQJCcgENyA3sQB8zTf7P0en&X-Amz-Signature=f081786da10a5d439f8b0b5d7823267b62cd5ece35fef3212b1d218ee63760db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
