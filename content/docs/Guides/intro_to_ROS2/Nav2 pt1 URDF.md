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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ASMCO6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDCHlcvKyMQzDnNz5NuRTXJP1BUPsGH6hlCyMO73xWrlQIhAKgDdXNSzPx1U0rJn16Jm7uj%2BmCP2tSJ8gmhLwlMuZO0Kv8DCCIQABoMNjM3NDIzMTgzODA1IgyiT%2BBnWge98Bd1PJgq3ANbatZPjzQSz89PlXW5cFjf8r3TrfegZoBWRsSR%2BLXLRZ3FIlb8PajpxVP1VbI2Pc29ODiPdzXtxCZDFbQQnxi%2By4RM%2BDJpchVrsQe5aVIIiDIy%2F0YZyWXPY6CcxK61DGopAs6nnt3JJEAE31WYARmdQFAV0u%2FdF0WTkfDtkyMJRFH02SAD9fR86u5KnaSAbho69%2BA9Wc4NfkjGpLtPwHOBXmHK3RWO4HrEJLZoSxtWKPCSca3QORZb15vumLHL9YknjKVmxpLrEaG3%2B96KGyT7IZwgluckV2BW2ZXmnTVF5ouyKTUEG39ESWwla3fgQHXxS8L8tcesVMC%2FbQT1nUGuLW5pS8lJ8bJFyWGkB1X7fhT50YbL4r46xQCzhA0tY86R%2FQb65pydatZOzCdAFGRficXM0mdslhXJ3mAJl1gMP4EqPAG8RQwRfNlMJMy0gkJ6RIYLuzGzXjk7TTgTOt8NwR9gMUOeCJL9RpL8vmq%2Bli%2FLU9EMk2TymKugxNU%2FpBrc326S8oRcMblYM8V3ft%2Br8HnZwIua8o6o6q67AZP6LTm%2F9%2FPsRiDp9JCQeBB7W32Urhv6hUAA%2FOqcQB3iJIEir1KZ6f0GAeETq%2FyogwMP5mGw9rebqUl1oZksCzDMl77JBjqkAeqAUjH7sv%2Bsi7RVasLpFpw0B3zL5UM9ifgXcx4hghHX6mXrjVWoVwmovEKneXxBSCuKv%2BM8HYa9nXelauyeUK8wJT0GPYRBEgFXSq0oJj0Z6T8aS2YTIORkPNOVRk%2BphuY%2B%2FrGqQNlC9Qta0DyG%2FCrDQlqH0FcTh4pbf1ABX6D8JVWoSikAXU2JVEJPNDHpqQlWvj6MHNofP2%2Fsw4mNseif5I9O&X-Amz-Signature=c8861ff3b8e9e523cc3609228a2302ce75cdd94a3800a3b2f221e3600dfcd54c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ASMCO6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDCHlcvKyMQzDnNz5NuRTXJP1BUPsGH6hlCyMO73xWrlQIhAKgDdXNSzPx1U0rJn16Jm7uj%2BmCP2tSJ8gmhLwlMuZO0Kv8DCCIQABoMNjM3NDIzMTgzODA1IgyiT%2BBnWge98Bd1PJgq3ANbatZPjzQSz89PlXW5cFjf8r3TrfegZoBWRsSR%2BLXLRZ3FIlb8PajpxVP1VbI2Pc29ODiPdzXtxCZDFbQQnxi%2By4RM%2BDJpchVrsQe5aVIIiDIy%2F0YZyWXPY6CcxK61DGopAs6nnt3JJEAE31WYARmdQFAV0u%2FdF0WTkfDtkyMJRFH02SAD9fR86u5KnaSAbho69%2BA9Wc4NfkjGpLtPwHOBXmHK3RWO4HrEJLZoSxtWKPCSca3QORZb15vumLHL9YknjKVmxpLrEaG3%2B96KGyT7IZwgluckV2BW2ZXmnTVF5ouyKTUEG39ESWwla3fgQHXxS8L8tcesVMC%2FbQT1nUGuLW5pS8lJ8bJFyWGkB1X7fhT50YbL4r46xQCzhA0tY86R%2FQb65pydatZOzCdAFGRficXM0mdslhXJ3mAJl1gMP4EqPAG8RQwRfNlMJMy0gkJ6RIYLuzGzXjk7TTgTOt8NwR9gMUOeCJL9RpL8vmq%2Bli%2FLU9EMk2TymKugxNU%2FpBrc326S8oRcMblYM8V3ft%2Br8HnZwIua8o6o6q67AZP6LTm%2F9%2FPsRiDp9JCQeBB7W32Urhv6hUAA%2FOqcQB3iJIEir1KZ6f0GAeETq%2FyogwMP5mGw9rebqUl1oZksCzDMl77JBjqkAeqAUjH7sv%2Bsi7RVasLpFpw0B3zL5UM9ifgXcx4hghHX6mXrjVWoVwmovEKneXxBSCuKv%2BM8HYa9nXelauyeUK8wJT0GPYRBEgFXSq0oJj0Z6T8aS2YTIORkPNOVRk%2BphuY%2B%2FrGqQNlC9Qta0DyG%2FCrDQlqH0FcTh4pbf1ABX6D8JVWoSikAXU2JVEJPNDHpqQlWvj6MHNofP2%2Fsw4mNseif5I9O&X-Amz-Signature=4a68baded84e2985f65e71f81c503f96e2f304cf18e52faa3d43c077caf2c6cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ASMCO6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDCHlcvKyMQzDnNz5NuRTXJP1BUPsGH6hlCyMO73xWrlQIhAKgDdXNSzPx1U0rJn16Jm7uj%2BmCP2tSJ8gmhLwlMuZO0Kv8DCCIQABoMNjM3NDIzMTgzODA1IgyiT%2BBnWge98Bd1PJgq3ANbatZPjzQSz89PlXW5cFjf8r3TrfegZoBWRsSR%2BLXLRZ3FIlb8PajpxVP1VbI2Pc29ODiPdzXtxCZDFbQQnxi%2By4RM%2BDJpchVrsQe5aVIIiDIy%2F0YZyWXPY6CcxK61DGopAs6nnt3JJEAE31WYARmdQFAV0u%2FdF0WTkfDtkyMJRFH02SAD9fR86u5KnaSAbho69%2BA9Wc4NfkjGpLtPwHOBXmHK3RWO4HrEJLZoSxtWKPCSca3QORZb15vumLHL9YknjKVmxpLrEaG3%2B96KGyT7IZwgluckV2BW2ZXmnTVF5ouyKTUEG39ESWwla3fgQHXxS8L8tcesVMC%2FbQT1nUGuLW5pS8lJ8bJFyWGkB1X7fhT50YbL4r46xQCzhA0tY86R%2FQb65pydatZOzCdAFGRficXM0mdslhXJ3mAJl1gMP4EqPAG8RQwRfNlMJMy0gkJ6RIYLuzGzXjk7TTgTOt8NwR9gMUOeCJL9RpL8vmq%2Bli%2FLU9EMk2TymKugxNU%2FpBrc326S8oRcMblYM8V3ft%2Br8HnZwIua8o6o6q67AZP6LTm%2F9%2FPsRiDp9JCQeBB7W32Urhv6hUAA%2FOqcQB3iJIEir1KZ6f0GAeETq%2FyogwMP5mGw9rebqUl1oZksCzDMl77JBjqkAeqAUjH7sv%2Bsi7RVasLpFpw0B3zL5UM9ifgXcx4hghHX6mXrjVWoVwmovEKneXxBSCuKv%2BM8HYa9nXelauyeUK8wJT0GPYRBEgFXSq0oJj0Z6T8aS2YTIORkPNOVRk%2BphuY%2B%2FrGqQNlC9Qta0DyG%2FCrDQlqH0FcTh4pbf1ABX6D8JVWoSikAXU2JVEJPNDHpqQlWvj6MHNofP2%2Fsw4mNseif5I9O&X-Amz-Signature=5b058d0d1461ad10ea77b904b0ee0d741283906ed053023ff81cf812ccdf8751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ASMCO6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDCHlcvKyMQzDnNz5NuRTXJP1BUPsGH6hlCyMO73xWrlQIhAKgDdXNSzPx1U0rJn16Jm7uj%2BmCP2tSJ8gmhLwlMuZO0Kv8DCCIQABoMNjM3NDIzMTgzODA1IgyiT%2BBnWge98Bd1PJgq3ANbatZPjzQSz89PlXW5cFjf8r3TrfegZoBWRsSR%2BLXLRZ3FIlb8PajpxVP1VbI2Pc29ODiPdzXtxCZDFbQQnxi%2By4RM%2BDJpchVrsQe5aVIIiDIy%2F0YZyWXPY6CcxK61DGopAs6nnt3JJEAE31WYARmdQFAV0u%2FdF0WTkfDtkyMJRFH02SAD9fR86u5KnaSAbho69%2BA9Wc4NfkjGpLtPwHOBXmHK3RWO4HrEJLZoSxtWKPCSca3QORZb15vumLHL9YknjKVmxpLrEaG3%2B96KGyT7IZwgluckV2BW2ZXmnTVF5ouyKTUEG39ESWwla3fgQHXxS8L8tcesVMC%2FbQT1nUGuLW5pS8lJ8bJFyWGkB1X7fhT50YbL4r46xQCzhA0tY86R%2FQb65pydatZOzCdAFGRficXM0mdslhXJ3mAJl1gMP4EqPAG8RQwRfNlMJMy0gkJ6RIYLuzGzXjk7TTgTOt8NwR9gMUOeCJL9RpL8vmq%2Bli%2FLU9EMk2TymKugxNU%2FpBrc326S8oRcMblYM8V3ft%2Br8HnZwIua8o6o6q67AZP6LTm%2F9%2FPsRiDp9JCQeBB7W32Urhv6hUAA%2FOqcQB3iJIEir1KZ6f0GAeETq%2FyogwMP5mGw9rebqUl1oZksCzDMl77JBjqkAeqAUjH7sv%2Bsi7RVasLpFpw0B3zL5UM9ifgXcx4hghHX6mXrjVWoVwmovEKneXxBSCuKv%2BM8HYa9nXelauyeUK8wJT0GPYRBEgFXSq0oJj0Z6T8aS2YTIORkPNOVRk%2BphuY%2B%2FrGqQNlC9Qta0DyG%2FCrDQlqH0FcTh4pbf1ABX6D8JVWoSikAXU2JVEJPNDHpqQlWvj6MHNofP2%2Fsw4mNseif5I9O&X-Amz-Signature=c819d24e84dd4277c3fa5bdfcddac5d2be007e4ab8a1203cf68aa73227f25040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ASMCO6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDCHlcvKyMQzDnNz5NuRTXJP1BUPsGH6hlCyMO73xWrlQIhAKgDdXNSzPx1U0rJn16Jm7uj%2BmCP2tSJ8gmhLwlMuZO0Kv8DCCIQABoMNjM3NDIzMTgzODA1IgyiT%2BBnWge98Bd1PJgq3ANbatZPjzQSz89PlXW5cFjf8r3TrfegZoBWRsSR%2BLXLRZ3FIlb8PajpxVP1VbI2Pc29ODiPdzXtxCZDFbQQnxi%2By4RM%2BDJpchVrsQe5aVIIiDIy%2F0YZyWXPY6CcxK61DGopAs6nnt3JJEAE31WYARmdQFAV0u%2FdF0WTkfDtkyMJRFH02SAD9fR86u5KnaSAbho69%2BA9Wc4NfkjGpLtPwHOBXmHK3RWO4HrEJLZoSxtWKPCSca3QORZb15vumLHL9YknjKVmxpLrEaG3%2B96KGyT7IZwgluckV2BW2ZXmnTVF5ouyKTUEG39ESWwla3fgQHXxS8L8tcesVMC%2FbQT1nUGuLW5pS8lJ8bJFyWGkB1X7fhT50YbL4r46xQCzhA0tY86R%2FQb65pydatZOzCdAFGRficXM0mdslhXJ3mAJl1gMP4EqPAG8RQwRfNlMJMy0gkJ6RIYLuzGzXjk7TTgTOt8NwR9gMUOeCJL9RpL8vmq%2Bli%2FLU9EMk2TymKugxNU%2FpBrc326S8oRcMblYM8V3ft%2Br8HnZwIua8o6o6q67AZP6LTm%2F9%2FPsRiDp9JCQeBB7W32Urhv6hUAA%2FOqcQB3iJIEir1KZ6f0GAeETq%2FyogwMP5mGw9rebqUl1oZksCzDMl77JBjqkAeqAUjH7sv%2Bsi7RVasLpFpw0B3zL5UM9ifgXcx4hghHX6mXrjVWoVwmovEKneXxBSCuKv%2BM8HYa9nXelauyeUK8wJT0GPYRBEgFXSq0oJj0Z6T8aS2YTIORkPNOVRk%2BphuY%2B%2FrGqQNlC9Qta0DyG%2FCrDQlqH0FcTh4pbf1ABX6D8JVWoSikAXU2JVEJPNDHpqQlWvj6MHNofP2%2Fsw4mNseif5I9O&X-Amz-Signature=447788ab862ff5d534dc304ac15e46b88977f412977b1e73e6956cd1fd8a0533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ASMCO6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDCHlcvKyMQzDnNz5NuRTXJP1BUPsGH6hlCyMO73xWrlQIhAKgDdXNSzPx1U0rJn16Jm7uj%2BmCP2tSJ8gmhLwlMuZO0Kv8DCCIQABoMNjM3NDIzMTgzODA1IgyiT%2BBnWge98Bd1PJgq3ANbatZPjzQSz89PlXW5cFjf8r3TrfegZoBWRsSR%2BLXLRZ3FIlb8PajpxVP1VbI2Pc29ODiPdzXtxCZDFbQQnxi%2By4RM%2BDJpchVrsQe5aVIIiDIy%2F0YZyWXPY6CcxK61DGopAs6nnt3JJEAE31WYARmdQFAV0u%2FdF0WTkfDtkyMJRFH02SAD9fR86u5KnaSAbho69%2BA9Wc4NfkjGpLtPwHOBXmHK3RWO4HrEJLZoSxtWKPCSca3QORZb15vumLHL9YknjKVmxpLrEaG3%2B96KGyT7IZwgluckV2BW2ZXmnTVF5ouyKTUEG39ESWwla3fgQHXxS8L8tcesVMC%2FbQT1nUGuLW5pS8lJ8bJFyWGkB1X7fhT50YbL4r46xQCzhA0tY86R%2FQb65pydatZOzCdAFGRficXM0mdslhXJ3mAJl1gMP4EqPAG8RQwRfNlMJMy0gkJ6RIYLuzGzXjk7TTgTOt8NwR9gMUOeCJL9RpL8vmq%2Bli%2FLU9EMk2TymKugxNU%2FpBrc326S8oRcMblYM8V3ft%2Br8HnZwIua8o6o6q67AZP6LTm%2F9%2FPsRiDp9JCQeBB7W32Urhv6hUAA%2FOqcQB3iJIEir1KZ6f0GAeETq%2FyogwMP5mGw9rebqUl1oZksCzDMl77JBjqkAeqAUjH7sv%2Bsi7RVasLpFpw0B3zL5UM9ifgXcx4hghHX6mXrjVWoVwmovEKneXxBSCuKv%2BM8HYa9nXelauyeUK8wJT0GPYRBEgFXSq0oJj0Z6T8aS2YTIORkPNOVRk%2BphuY%2B%2FrGqQNlC9Qta0DyG%2FCrDQlqH0FcTh4pbf1ABX6D8JVWoSikAXU2JVEJPNDHpqQlWvj6MHNofP2%2Fsw4mNseif5I9O&X-Amz-Signature=4f604e7d29dc64be8c530ba65b8c371df12bce6069ba1439bafb8e33c63fde10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ASMCO6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDCHlcvKyMQzDnNz5NuRTXJP1BUPsGH6hlCyMO73xWrlQIhAKgDdXNSzPx1U0rJn16Jm7uj%2BmCP2tSJ8gmhLwlMuZO0Kv8DCCIQABoMNjM3NDIzMTgzODA1IgyiT%2BBnWge98Bd1PJgq3ANbatZPjzQSz89PlXW5cFjf8r3TrfegZoBWRsSR%2BLXLRZ3FIlb8PajpxVP1VbI2Pc29ODiPdzXtxCZDFbQQnxi%2By4RM%2BDJpchVrsQe5aVIIiDIy%2F0YZyWXPY6CcxK61DGopAs6nnt3JJEAE31WYARmdQFAV0u%2FdF0WTkfDtkyMJRFH02SAD9fR86u5KnaSAbho69%2BA9Wc4NfkjGpLtPwHOBXmHK3RWO4HrEJLZoSxtWKPCSca3QORZb15vumLHL9YknjKVmxpLrEaG3%2B96KGyT7IZwgluckV2BW2ZXmnTVF5ouyKTUEG39ESWwla3fgQHXxS8L8tcesVMC%2FbQT1nUGuLW5pS8lJ8bJFyWGkB1X7fhT50YbL4r46xQCzhA0tY86R%2FQb65pydatZOzCdAFGRficXM0mdslhXJ3mAJl1gMP4EqPAG8RQwRfNlMJMy0gkJ6RIYLuzGzXjk7TTgTOt8NwR9gMUOeCJL9RpL8vmq%2Bli%2FLU9EMk2TymKugxNU%2FpBrc326S8oRcMblYM8V3ft%2Br8HnZwIua8o6o6q67AZP6LTm%2F9%2FPsRiDp9JCQeBB7W32Urhv6hUAA%2FOqcQB3iJIEir1KZ6f0GAeETq%2FyogwMP5mGw9rebqUl1oZksCzDMl77JBjqkAeqAUjH7sv%2Bsi7RVasLpFpw0B3zL5UM9ifgXcx4hghHX6mXrjVWoVwmovEKneXxBSCuKv%2BM8HYa9nXelauyeUK8wJT0GPYRBEgFXSq0oJj0Z6T8aS2YTIORkPNOVRk%2BphuY%2B%2FrGqQNlC9Qta0DyG%2FCrDQlqH0FcTh4pbf1ABX6D8JVWoSikAXU2JVEJPNDHpqQlWvj6MHNofP2%2Fsw4mNseif5I9O&X-Amz-Signature=343bdb86539ad05d40dc4c39f6bea9a3cbe2d1f361989236bcb1d25772c60aa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ASMCO6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDCHlcvKyMQzDnNz5NuRTXJP1BUPsGH6hlCyMO73xWrlQIhAKgDdXNSzPx1U0rJn16Jm7uj%2BmCP2tSJ8gmhLwlMuZO0Kv8DCCIQABoMNjM3NDIzMTgzODA1IgyiT%2BBnWge98Bd1PJgq3ANbatZPjzQSz89PlXW5cFjf8r3TrfegZoBWRsSR%2BLXLRZ3FIlb8PajpxVP1VbI2Pc29ODiPdzXtxCZDFbQQnxi%2By4RM%2BDJpchVrsQe5aVIIiDIy%2F0YZyWXPY6CcxK61DGopAs6nnt3JJEAE31WYARmdQFAV0u%2FdF0WTkfDtkyMJRFH02SAD9fR86u5KnaSAbho69%2BA9Wc4NfkjGpLtPwHOBXmHK3RWO4HrEJLZoSxtWKPCSca3QORZb15vumLHL9YknjKVmxpLrEaG3%2B96KGyT7IZwgluckV2BW2ZXmnTVF5ouyKTUEG39ESWwla3fgQHXxS8L8tcesVMC%2FbQT1nUGuLW5pS8lJ8bJFyWGkB1X7fhT50YbL4r46xQCzhA0tY86R%2FQb65pydatZOzCdAFGRficXM0mdslhXJ3mAJl1gMP4EqPAG8RQwRfNlMJMy0gkJ6RIYLuzGzXjk7TTgTOt8NwR9gMUOeCJL9RpL8vmq%2Bli%2FLU9EMk2TymKugxNU%2FpBrc326S8oRcMblYM8V3ft%2Br8HnZwIua8o6o6q67AZP6LTm%2F9%2FPsRiDp9JCQeBB7W32Urhv6hUAA%2FOqcQB3iJIEir1KZ6f0GAeETq%2FyogwMP5mGw9rebqUl1oZksCzDMl77JBjqkAeqAUjH7sv%2Bsi7RVasLpFpw0B3zL5UM9ifgXcx4hghHX6mXrjVWoVwmovEKneXxBSCuKv%2BM8HYa9nXelauyeUK8wJT0GPYRBEgFXSq0oJj0Z6T8aS2YTIORkPNOVRk%2BphuY%2B%2FrGqQNlC9Qta0DyG%2FCrDQlqH0FcTh4pbf1ABX6D8JVWoSikAXU2JVEJPNDHpqQlWvj6MHNofP2%2Fsw4mNseif5I9O&X-Amz-Signature=dd3e9e0ec847579bf1118223eef46eddff64a1a17b47215ed14743138db2c4e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ASMCO6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDCHlcvKyMQzDnNz5NuRTXJP1BUPsGH6hlCyMO73xWrlQIhAKgDdXNSzPx1U0rJn16Jm7uj%2BmCP2tSJ8gmhLwlMuZO0Kv8DCCIQABoMNjM3NDIzMTgzODA1IgyiT%2BBnWge98Bd1PJgq3ANbatZPjzQSz89PlXW5cFjf8r3TrfegZoBWRsSR%2BLXLRZ3FIlb8PajpxVP1VbI2Pc29ODiPdzXtxCZDFbQQnxi%2By4RM%2BDJpchVrsQe5aVIIiDIy%2F0YZyWXPY6CcxK61DGopAs6nnt3JJEAE31WYARmdQFAV0u%2FdF0WTkfDtkyMJRFH02SAD9fR86u5KnaSAbho69%2BA9Wc4NfkjGpLtPwHOBXmHK3RWO4HrEJLZoSxtWKPCSca3QORZb15vumLHL9YknjKVmxpLrEaG3%2B96KGyT7IZwgluckV2BW2ZXmnTVF5ouyKTUEG39ESWwla3fgQHXxS8L8tcesVMC%2FbQT1nUGuLW5pS8lJ8bJFyWGkB1X7fhT50YbL4r46xQCzhA0tY86R%2FQb65pydatZOzCdAFGRficXM0mdslhXJ3mAJl1gMP4EqPAG8RQwRfNlMJMy0gkJ6RIYLuzGzXjk7TTgTOt8NwR9gMUOeCJL9RpL8vmq%2Bli%2FLU9EMk2TymKugxNU%2FpBrc326S8oRcMblYM8V3ft%2Br8HnZwIua8o6o6q67AZP6LTm%2F9%2FPsRiDp9JCQeBB7W32Urhv6hUAA%2FOqcQB3iJIEir1KZ6f0GAeETq%2FyogwMP5mGw9rebqUl1oZksCzDMl77JBjqkAeqAUjH7sv%2Bsi7RVasLpFpw0B3zL5UM9ifgXcx4hghHX6mXrjVWoVwmovEKneXxBSCuKv%2BM8HYa9nXelauyeUK8wJT0GPYRBEgFXSq0oJj0Z6T8aS2YTIORkPNOVRk%2BphuY%2B%2FrGqQNlC9Qta0DyG%2FCrDQlqH0FcTh4pbf1ABX6D8JVWoSikAXU2JVEJPNDHpqQlWvj6MHNofP2%2Fsw4mNseif5I9O&X-Amz-Signature=4ebcad5ebf3064c83b6cfac1db7630e923943049c93b752c5ebf1bd8f017daf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ASMCO6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDCHlcvKyMQzDnNz5NuRTXJP1BUPsGH6hlCyMO73xWrlQIhAKgDdXNSzPx1U0rJn16Jm7uj%2BmCP2tSJ8gmhLwlMuZO0Kv8DCCIQABoMNjM3NDIzMTgzODA1IgyiT%2BBnWge98Bd1PJgq3ANbatZPjzQSz89PlXW5cFjf8r3TrfegZoBWRsSR%2BLXLRZ3FIlb8PajpxVP1VbI2Pc29ODiPdzXtxCZDFbQQnxi%2By4RM%2BDJpchVrsQe5aVIIiDIy%2F0YZyWXPY6CcxK61DGopAs6nnt3JJEAE31WYARmdQFAV0u%2FdF0WTkfDtkyMJRFH02SAD9fR86u5KnaSAbho69%2BA9Wc4NfkjGpLtPwHOBXmHK3RWO4HrEJLZoSxtWKPCSca3QORZb15vumLHL9YknjKVmxpLrEaG3%2B96KGyT7IZwgluckV2BW2ZXmnTVF5ouyKTUEG39ESWwla3fgQHXxS8L8tcesVMC%2FbQT1nUGuLW5pS8lJ8bJFyWGkB1X7fhT50YbL4r46xQCzhA0tY86R%2FQb65pydatZOzCdAFGRficXM0mdslhXJ3mAJl1gMP4EqPAG8RQwRfNlMJMy0gkJ6RIYLuzGzXjk7TTgTOt8NwR9gMUOeCJL9RpL8vmq%2Bli%2FLU9EMk2TymKugxNU%2FpBrc326S8oRcMblYM8V3ft%2Br8HnZwIua8o6o6q67AZP6LTm%2F9%2FPsRiDp9JCQeBB7W32Urhv6hUAA%2FOqcQB3iJIEir1KZ6f0GAeETq%2FyogwMP5mGw9rebqUl1oZksCzDMl77JBjqkAeqAUjH7sv%2Bsi7RVasLpFpw0B3zL5UM9ifgXcx4hghHX6mXrjVWoVwmovEKneXxBSCuKv%2BM8HYa9nXelauyeUK8wJT0GPYRBEgFXSq0oJj0Z6T8aS2YTIORkPNOVRk%2BphuY%2B%2FrGqQNlC9Qta0DyG%2FCrDQlqH0FcTh4pbf1ABX6D8JVWoSikAXU2JVEJPNDHpqQlWvj6MHNofP2%2Fsw4mNseif5I9O&X-Amz-Signature=433ef0b3f1b2322673ee498a37a3736a26e8e47047054cf3d3d4da64e06aa649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVIKOCTO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHS8z6HD0fTaztkW4%2BohoV9hJmCFJImzbK1zYaAvWM97AiAYKtSJOnpww7cRTii7%2BNYGJSFHq4FKVKaFWNtHC2sTpCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM2%2BW1VByaH9%2FleffKKtwD9F6n4X%2B0SjYRy5LvPXSM1pfpW4pKn%2BemYhpVxBNEcr4Q%2BnqXWsfwyDhx%2BCQf5WHTHpVoRf7Lb%2Bq41STqbhNF%2F1CuYA6cs0ByKvf4TwJ4hds5wa%2BakxhPZjT%2FxLmvRyQ%2F4MijBNh8BzkxI%2B978vRlCbEw6H5btW0AGIxdB%2FT3Z4i22QdiPn84meYqV7NRbqSH6daMFrzdIwlZrQ3Ezo%2Bnixzh6GTIA6RZczxLqQ75XuBgBjnQ4iNihy3JbjGlzc58fcjaDFlUMeQ0AOkmPh5hSxhJhCzcFrsmhO1IWT1YbJ3EWf7EY%2B849UKvFZpryTkCAK%2B0OT05AP0GObKENHYLga7WQZfLr6KyXTZfBlwlyo%2BV3EFK8EZwWbB%2FY0SaRcDkhOs6Cn0ez12F6VLfY58TtPC3tCgFp2WRjl%2FPbKn7D6W3GPA3lA7hD2e4o6%2FxWjqaJ6IIBcwNq2fY07wix%2BQKJp7YHjNxMx8jKrtqSGO2ueYE81F7KHFIZakfmSnLJQ1431DQ%2BWP0zDlyrP2IrqORwVyf30uCtu4AhKDcgbFuOsNUnQNl8Jtb9r8CGJKfkgjP0bihWGUDDQYk9LEsIIfHFrQM2EXn0JEONBiRvGq2fGIRr6fqZ499IencslMwtJS%2ByQY6pgGoVG%2BSUYaCNPcl3xxPPZS1y9E7FpQIVtmpmT%2FIWOdGSKu7pLn35Re9z6ugkaoaiNCkCU%2F3EsRLqmNPXsi2DlNN6G3OZClejZQDT%2BZWpZM5RDxqbmyhVL7yGNoU6I%2FdMFxCGwu6vjda5S5f1Ma6lQ6a7chW5yroS12NCkjfLiuhtCJZ5QRhYbW1P7ZyijE2%2BYUBwmicIt9s%2Bdu%2FMWl%2B9uxUNBXFzNqx&X-Amz-Signature=c183c3850c4fe06a3d8328b53a3ca2d32beabf7f28faeb30f4820214cea13a96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IZDA6BH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQD4F%2FYsqnvgH6ExoOu%2FQnQllaGSwcGRFwbdEeftURM%2FJAIgUfR%2BTvsGUsX4htheRU7v7LO1ZhQYXlzGWh%2By5M8VkZEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDM0BIFPJz%2B0A3wDwjircA%2BOJRoSIneohZgF%2BAF2rvtL9dhvgVYp8REEugEs8R9asqOo72VqfMNNBQkWJ3%2Fc4E3f7glzGOpsw5wJ7Y034CtpOkBiehJdhZlTKgHWoKGOBIIKdfyx6gkQ1C8L5N5eV5nBPalH8N3II1VOuRkjgWd%2FjWi0DXciG%2FIB21q5Z2pFhEcCHghCIqx2DG5JjH5v1bUPX0m%2B98%2Bo2awFup7DysstTNU12LjdEKQisQWPiL1Qalz4QWGY46nfJTtQbJ7G%2BoGSvnixNdcJoGfTIaKm005aW49ESXjxqAUTyX4t2wFXM7rAhzYhorpps4lxR1SWaPoZSQ8PEO8H5XYMrMfXvsaJJ%2Bac9Wc6ITl2HPwyiXw48e8ZQw8eZX9bPfojd06ru090F87pBpBNkYi5k4HHwp4nCTXxS6qWqHF9UN8lhdi%2FwMt0enebwnHzxwNts8cG5Ryw9u%2FFIZ4V0n8ET%2Bpk7rvukLWjVrWG6uYaGEKE9hPZP7Hio27WbH7jg95gT4Wam%2Bh7k%2FTkzdY1Tv2GC0qfBpKvXwbgkQCdHElXf5sxs0GvuNNX9bIqPTUIWxVDkiWtC14y3FOrtz%2B%2F2BPHrdVnQgxJbmhDFes0Ne5jX2C%2FGLXjO5XUoxiLYRepfgSq7MKihvskGOqUB5tqC7sAf5X1Q95zQRCcxF%2BRqP3zg1OT1wQnErwY5eq9Dle6B6WjG0pPuRTjhO%2BX4hrb1ZtU3pRQoJDKnMUqMrUYf%2BKN4ErAYy%2FgncZe7r8L4X4MfwmbjVlGgXVRL%2BHUEH99GWrbmRCvCq6QfBPcBM4QAPtuoSbaH82z%2FKt7hjUFQhe54kkld%2Ft%2FqRnuRyh%2FApBMtiHvj5ZBMsCMqRfLzpcrE6UwR&X-Amz-Signature=80028133d15a33a0a4db9bb59caf7faff9be2ff49e93ea677dbef8b18936d73e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXU6BDOY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCDSP7T1kCtbLAKqwnCO%2FdHuWMxHt80EVR78Qe73oB88QIgRIvQY7LsfCaP%2BhspSp7XLpCHzUpwE2feV1gAuunKCIEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDCXxCqZSI%2F0w1XU22CrcA2EHFsZth%2FQX7mfqD9PhR3aGEgJs8fY6w%2B6hP8qf17%2FN2bfyBrUuBAaiEB1kMzi%2BogCyNljHf0yfVT647mLSoVQlHEmhMt%2BwAM%2Bpjo%2FPti1w8hcsss5s4CP%2BOEp%2BsW4Uh4pM3IgdmgCxFP0M9%2FMqfD8qC7sNXDDnL76EvaqqnW0FO5OccPHR2SzmFPE80ltBGv%2FkVKDVbL6duhnGkeBXsdCyAHLfGNoePQo3SUSLOluQw55CoYGnDm7rwRFkl7lSkfKa6yz%2FZ4Onau6TooEZrU1WbpRjIqaSoSCDC5n7qEs9Mcc0B4NcIGgIBbHCyAHlQtcuAH6c6uvitrC7UpXiB60I8JqDu5lbtVLCnYelqaNsk0NJNw%2FMeOYi66V1L9QsTz7tQtDcEDCco8zwFDYPXjg29dfLCCIJRibRVDCtd15UiCcDAWqsrhFzNUXhLjb1c5ch11kWKPM4hJMWSVCHzgeXKhNCf2l4NehB1NpIhj6sknSj6yBLAbUNhG3kICkOEPO6VcULSIA6IDsg%2BvS74PL%2Fs4bTWiWEK03IpQslPVNRZ5N%2BDHy58cRYXodyXkbAtnm%2F%2BId%2Ftk%2BvKG1dacOk3loWsQYzI7t2AOoFpPCktxX036ZWLpeMwYWgPNp%2BMLiWvskGOqUB1z%2F7kTFfbjhJIeo9muxVk%2BR8T%2BuvkKTDgkPGF4MIy0izY4CNLuVDhQMM%2FphSa6JBiF5j%2BywwXOWf1qf%2BDAZiWD6CrbEdxhirppcMjZ9f4AgazgxbRKbO9z%2B31xAZDaUnjqjze8rkL3%2FaYSx3ly0OOk308oMu3ofdtDoGrp30zgFHIwChIpAGgO20UG4CQp1UGbVTR5z6XM%2BOwWQb84p2bZrVJvrK&X-Amz-Signature=f05419353baae8526869adee17811867e374c3155a05227c534a388c41f627bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ASMCO6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDCHlcvKyMQzDnNz5NuRTXJP1BUPsGH6hlCyMO73xWrlQIhAKgDdXNSzPx1U0rJn16Jm7uj%2BmCP2tSJ8gmhLwlMuZO0Kv8DCCIQABoMNjM3NDIzMTgzODA1IgyiT%2BBnWge98Bd1PJgq3ANbatZPjzQSz89PlXW5cFjf8r3TrfegZoBWRsSR%2BLXLRZ3FIlb8PajpxVP1VbI2Pc29ODiPdzXtxCZDFbQQnxi%2By4RM%2BDJpchVrsQe5aVIIiDIy%2F0YZyWXPY6CcxK61DGopAs6nnt3JJEAE31WYARmdQFAV0u%2FdF0WTkfDtkyMJRFH02SAD9fR86u5KnaSAbho69%2BA9Wc4NfkjGpLtPwHOBXmHK3RWO4HrEJLZoSxtWKPCSca3QORZb15vumLHL9YknjKVmxpLrEaG3%2B96KGyT7IZwgluckV2BW2ZXmnTVF5ouyKTUEG39ESWwla3fgQHXxS8L8tcesVMC%2FbQT1nUGuLW5pS8lJ8bJFyWGkB1X7fhT50YbL4r46xQCzhA0tY86R%2FQb65pydatZOzCdAFGRficXM0mdslhXJ3mAJl1gMP4EqPAG8RQwRfNlMJMy0gkJ6RIYLuzGzXjk7TTgTOt8NwR9gMUOeCJL9RpL8vmq%2Bli%2FLU9EMk2TymKugxNU%2FpBrc326S8oRcMblYM8V3ft%2Br8HnZwIua8o6o6q67AZP6LTm%2F9%2FPsRiDp9JCQeBB7W32Urhv6hUAA%2FOqcQB3iJIEir1KZ6f0GAeETq%2FyogwMP5mGw9rebqUl1oZksCzDMl77JBjqkAeqAUjH7sv%2Bsi7RVasLpFpw0B3zL5UM9ifgXcx4hghHX6mXrjVWoVwmovEKneXxBSCuKv%2BM8HYa9nXelauyeUK8wJT0GPYRBEgFXSq0oJj0Z6T8aS2YTIORkPNOVRk%2BphuY%2B%2FrGqQNlC9Qta0DyG%2FCrDQlqH0FcTh4pbf1ABX6D8JVWoSikAXU2JVEJPNDHpqQlWvj6MHNofP2%2Fsw4mNseif5I9O&X-Amz-Signature=09ed9c55fbe70d7ab9ed40cb5c1b62962be53390d9f2b4ef5041babc8f08a1f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WKNTTJV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDHYecBhWEc%2FikKK%2BBnB9jTIByR43mkMLXsV2ZkCNyWTwIgUCA85Hn0EHoPqzuS2ueRG%2BmWZHh23mr%2B%2F1BJDLXdzD8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAZNWEH9QBLZ4iWrLyrcA5Cr2Ja%2BaS1lOPWsYFrsQ5HDEFU4QM2zVQ59c1iVnjuZN119kAgsEfGBiUmRoddDTl%2BEDwyy89OwPU7JwkF1xH%2FnZWgXf8ZAdJbsW7SXIM9wy9HDctW1RQ0GwKtmWrDhU1VVXi%2FxY2G1%2ByxmhfelvW3gRT6raJcvFJ41znMGfuEBnNhxM1iecm2gDANh22f6LauRDcgSuHI2uUWI9zk%2F%2FUMBmBXYw3ZJypnfFI%2BdN4l0TDyjXro6o90UosOm5ekLgH%2BFw6KEaoPrtYj8bXcE%2BnxQOb5Rnc6vizxACPLSnmw5Kg96mkHYUrM465fZmQOwYjUmnL5ke5X11BxDJqLfVNgHawWUFjWFWwZyMwXZt8V7XiVx6KXmvjPkZpWxtd%2FSr%2B%2FFH%2Fm7T%2BgnKxVRpHobdwJ6sgUgB1ljw0sFfzpTltWro6ej18XSzOhL1FmVuGcfdLzK9ouXoijovok2bzPXIPh4Qm45%2F%2BAuGOTEXDwtWHr32rOyb2cL3IWWpJ%2FdLd9XRjZKe4vFF9vPmt1MtgfKMY%2FMe2mQ4L9IK0RAB7X0dDvrJrKo9fPNYD%2FCm23gZ6W5ju9HxWkMWILbJcVIx4i72PMWv2MSM9LaOPic2yTqbBWHmKSLub6sYoh3MeDmMKahvskGOqUBG7vDnWqESpmikdyZgE4g9UMLjslTQNUQW9t4xF7HGL%2BezvfDVibwlUAw3ms1ELZcoR1HRIR%2B%2FQJWMl3QocM4r3KOGjdZKl3vmX0ykbcLM9Aq273FuFEXgKw%2Frrpk4z9u3RRkMAYuSzc5koggECjAIP%2BQvXQGOD19yGqjbaAIwiNWwigUyFMgWCxp6Zfj3F6SNSUaQ19VxoIFE53fq%2Bw7ZgeRCzi2&X-Amz-Signature=9ef9e5bb7f27944ba2b56f6ce538985994a297df78a2a248c4210eb9cf877b08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ASMCO6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDCHlcvKyMQzDnNz5NuRTXJP1BUPsGH6hlCyMO73xWrlQIhAKgDdXNSzPx1U0rJn16Jm7uj%2BmCP2tSJ8gmhLwlMuZO0Kv8DCCIQABoMNjM3NDIzMTgzODA1IgyiT%2BBnWge98Bd1PJgq3ANbatZPjzQSz89PlXW5cFjf8r3TrfegZoBWRsSR%2BLXLRZ3FIlb8PajpxVP1VbI2Pc29ODiPdzXtxCZDFbQQnxi%2By4RM%2BDJpchVrsQe5aVIIiDIy%2F0YZyWXPY6CcxK61DGopAs6nnt3JJEAE31WYARmdQFAV0u%2FdF0WTkfDtkyMJRFH02SAD9fR86u5KnaSAbho69%2BA9Wc4NfkjGpLtPwHOBXmHK3RWO4HrEJLZoSxtWKPCSca3QORZb15vumLHL9YknjKVmxpLrEaG3%2B96KGyT7IZwgluckV2BW2ZXmnTVF5ouyKTUEG39ESWwla3fgQHXxS8L8tcesVMC%2FbQT1nUGuLW5pS8lJ8bJFyWGkB1X7fhT50YbL4r46xQCzhA0tY86R%2FQb65pydatZOzCdAFGRficXM0mdslhXJ3mAJl1gMP4EqPAG8RQwRfNlMJMy0gkJ6RIYLuzGzXjk7TTgTOt8NwR9gMUOeCJL9RpL8vmq%2Bli%2FLU9EMk2TymKugxNU%2FpBrc326S8oRcMblYM8V3ft%2Br8HnZwIua8o6o6q67AZP6LTm%2F9%2FPsRiDp9JCQeBB7W32Urhv6hUAA%2FOqcQB3iJIEir1KZ6f0GAeETq%2FyogwMP5mGw9rebqUl1oZksCzDMl77JBjqkAeqAUjH7sv%2Bsi7RVasLpFpw0B3zL5UM9ifgXcx4hghHX6mXrjVWoVwmovEKneXxBSCuKv%2BM8HYa9nXelauyeUK8wJT0GPYRBEgFXSq0oJj0Z6T8aS2YTIORkPNOVRk%2BphuY%2B%2FrGqQNlC9Qta0DyG%2FCrDQlqH0FcTh4pbf1ABX6D8JVWoSikAXU2JVEJPNDHpqQlWvj6MHNofP2%2Fsw4mNseif5I9O&X-Amz-Signature=60a2dd081083f9da4e7b8cabbe897d78fd85df1f6d6a48dd863dc65415e3e817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I56VXKK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDBKTodr6SseeKvB4hVDVzWWL8aqoz17%2FKwirLgAX7H2wIhAJ17RmRP1Qp9xDfEC10QIlTXo3kzRb56pcAeg65LOrKvKv8DCCIQABoMNjM3NDIzMTgzODA1IgyEcu5XK1axwa7MobUq3APTNSU7cm9gO6%2BmlNvy%2Fooc0DbihxADBdUarIjGU%2BtORM1bUCv8a98esqNd4M%2F9rfOgej24i%2Bkt8K479VKOFu3u%2FMdyAmf3t4yzIDy2Gso0sXRDwPg746ncT3c8Qdxjx7cOmsVNwKthNIGmIeaowp3tdoFZ0MiVwhoihvif9uDmV159tSAe15ix9WbVHYK4T79gZOJ7bMz9rfWrC%2FlLNVPk3uF6Qh9jHnpS0iVqE7jUyxKuhfHQujj8pXclXxU%2Bh%2BBKffCRyg8fgVLp7inJk5M95XTLCWO0E1kqQSMtTZ3MxA10SnwtYuNFQI1eDJHxBeOitO9Ngam3v5goo7IEzi0yye4g0DhP3o1u7ufcCR1802JPPnX82AX8SqXEgZbUXYrOLqt5jmURc0DYm8iHQrqCmaERBDQuRSUKselaze3tW3okmBfDnj1SuenUAExnRAJfwIbsV9PyJQf5%2BhtJmrkpM3YN9JmbjAMCE4nftkcGlTaj49X0En62FORCOl%2BIc7PZSf3DmXK%2FtlN8rDnKkqhYf2uoYKOLoYqcxkpzaTxr42b8SHiISbiPlEwBU4cwKDU3OLE45LOf41DUrawiMVqRRyXVpFZ7Fp%2FbFf%2BxYDCpew%2FhTTyVraSqFMHRejDtlr7JBjqkAU%2FRtcsvklOmqmRbFBH68RkQSPO5pBwPmZ94JriPxyD2NqJfTfQDizzzUOglM78rb99JDNLrEQFouoPz3o6L3u04n2F1Uw01YFtsnPZIAZyqsEOj9tJHUfJyoo5DQljWCHLhBrDN8lDSIPueIu4GXariwT4djZ9jv08JQwm9%2FRLz4MCwpeXDZ9sehCoG7QF921ZbPTNiSItoTPMSZeeisD0xXSP2&X-Amz-Signature=d737f39ee40d88c308ca7415a00ce477f7d0d387f263c03a068b12a66f3786da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ASMCO6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDCHlcvKyMQzDnNz5NuRTXJP1BUPsGH6hlCyMO73xWrlQIhAKgDdXNSzPx1U0rJn16Jm7uj%2BmCP2tSJ8gmhLwlMuZO0Kv8DCCIQABoMNjM3NDIzMTgzODA1IgyiT%2BBnWge98Bd1PJgq3ANbatZPjzQSz89PlXW5cFjf8r3TrfegZoBWRsSR%2BLXLRZ3FIlb8PajpxVP1VbI2Pc29ODiPdzXtxCZDFbQQnxi%2By4RM%2BDJpchVrsQe5aVIIiDIy%2F0YZyWXPY6CcxK61DGopAs6nnt3JJEAE31WYARmdQFAV0u%2FdF0WTkfDtkyMJRFH02SAD9fR86u5KnaSAbho69%2BA9Wc4NfkjGpLtPwHOBXmHK3RWO4HrEJLZoSxtWKPCSca3QORZb15vumLHL9YknjKVmxpLrEaG3%2B96KGyT7IZwgluckV2BW2ZXmnTVF5ouyKTUEG39ESWwla3fgQHXxS8L8tcesVMC%2FbQT1nUGuLW5pS8lJ8bJFyWGkB1X7fhT50YbL4r46xQCzhA0tY86R%2FQb65pydatZOzCdAFGRficXM0mdslhXJ3mAJl1gMP4EqPAG8RQwRfNlMJMy0gkJ6RIYLuzGzXjk7TTgTOt8NwR9gMUOeCJL9RpL8vmq%2Bli%2FLU9EMk2TymKugxNU%2FpBrc326S8oRcMblYM8V3ft%2Br8HnZwIua8o6o6q67AZP6LTm%2F9%2FPsRiDp9JCQeBB7W32Urhv6hUAA%2FOqcQB3iJIEir1KZ6f0GAeETq%2FyogwMP5mGw9rebqUl1oZksCzDMl77JBjqkAeqAUjH7sv%2Bsi7RVasLpFpw0B3zL5UM9ifgXcx4hghHX6mXrjVWoVwmovEKneXxBSCuKv%2BM8HYa9nXelauyeUK8wJT0GPYRBEgFXSq0oJj0Z6T8aS2YTIORkPNOVRk%2BphuY%2B%2FrGqQNlC9Qta0DyG%2FCrDQlqH0FcTh4pbf1ABX6D8JVWoSikAXU2JVEJPNDHpqQlWvj6MHNofP2%2Fsw4mNseif5I9O&X-Amz-Signature=d26d84998a9691cacb6ee3406a26f43180d2ae0e9c1b31c74a7b15543785f15b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZURGCCG4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFhiXddbybaWDyMUpDv5DL4LpW1KRT4OuPRbdFMjPIMGAiAXu8zKgOAP6mCUHwySivPPQThh%2FgBOt%2FQeKUyHFitpMSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMX2oE127BZRzH7dXQKtwD5XVtsMYgsCEzkFaPBac4oEBS7a5eq6%2FcydweLMABLrViXE55iu96PTVIIMY1kOlB9KdKmdavRur5zR32fYOVcU3aiwmDL4QJ6GTZa2v8GFBTGDp7EZYz%2BgBCInoIb%2F%2Fy%2BxpW1aQTnZNqAtc4AvfsZ4n%2BFrW3ZElwb1DeSm9t5sIAWZktuwM8tDzAa5TiTCmgG36QbEsNGty%2B5b4OoI6DIa9lFI%2BZubGZCjl%2FyeepDCJJXkEMUH5WcJWz2kgHYrNL1dnuqkTM0uUFCtDfd7vpN0z2g4hVE0v7zgAYCAQkajFx0wWAkKMNB1mKdgfc8V9tGV1lNWT9P8hx60E3EdpXcVDj2BCEgujWWvPihcJZdABlcKJq%2FCH9%2BqJ%2BL5MhtwfIVa4PFgVw%2Fmp2plVvtlDza5oNTbdkFOfW%2Btc%2FbaU8Dppa7YPhjtAuNRD%2BHS0TmWpmHofgxzKGmXrqkKDYKn0clA2eRotnDaR8J1%2FODfgxNKqFqKRRAzCyRIx2XAFuSjt3JSDBaR2Y3pQxpJZkIZ7DOIAbdwoKoBDxPdsq%2BDIcNWImIWQApO5%2BKzeqLezMlKJGYHiw6Q576yXs8ElmHGi%2BeGag%2F37dd4%2B3CCH2WO0wX%2BLxhQI7AJLmhIcgRbMwyJS%2ByQY6pgGDQJcZ%2B4TfaETp88gYOK7Fg80UJUoZ3XMfXGcrc8rHue7uHsA5WLv9KaXrZ%2F8ShHfwQb9StxRiBNYwaJRNz5G1cP6fR3T0BSMSvRkZUMdj89xfIHJZbJE6wPpDIRhdHZHDePUVdE9KLh4LpsHNO%2FvEqHCf7Zpm0id0BM6ZfKw%2B58TlLJet8Vsi6GlGNM45L996MEHmCpjEduGdt%2B0wVYomyzvzp2dL&X-Amz-Signature=b6f71a9f50842dfe1e83f5dff98fc0b1073ff9ebdccc47e50a0491b27a777c45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ASMCO6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDCHlcvKyMQzDnNz5NuRTXJP1BUPsGH6hlCyMO73xWrlQIhAKgDdXNSzPx1U0rJn16Jm7uj%2BmCP2tSJ8gmhLwlMuZO0Kv8DCCIQABoMNjM3NDIzMTgzODA1IgyiT%2BBnWge98Bd1PJgq3ANbatZPjzQSz89PlXW5cFjf8r3TrfegZoBWRsSR%2BLXLRZ3FIlb8PajpxVP1VbI2Pc29ODiPdzXtxCZDFbQQnxi%2By4RM%2BDJpchVrsQe5aVIIiDIy%2F0YZyWXPY6CcxK61DGopAs6nnt3JJEAE31WYARmdQFAV0u%2FdF0WTkfDtkyMJRFH02SAD9fR86u5KnaSAbho69%2BA9Wc4NfkjGpLtPwHOBXmHK3RWO4HrEJLZoSxtWKPCSca3QORZb15vumLHL9YknjKVmxpLrEaG3%2B96KGyT7IZwgluckV2BW2ZXmnTVF5ouyKTUEG39ESWwla3fgQHXxS8L8tcesVMC%2FbQT1nUGuLW5pS8lJ8bJFyWGkB1X7fhT50YbL4r46xQCzhA0tY86R%2FQb65pydatZOzCdAFGRficXM0mdslhXJ3mAJl1gMP4EqPAG8RQwRfNlMJMy0gkJ6RIYLuzGzXjk7TTgTOt8NwR9gMUOeCJL9RpL8vmq%2Bli%2FLU9EMk2TymKugxNU%2FpBrc326S8oRcMblYM8V3ft%2Br8HnZwIua8o6o6q67AZP6LTm%2F9%2FPsRiDp9JCQeBB7W32Urhv6hUAA%2FOqcQB3iJIEir1KZ6f0GAeETq%2FyogwMP5mGw9rebqUl1oZksCzDMl77JBjqkAeqAUjH7sv%2Bsi7RVasLpFpw0B3zL5UM9ifgXcx4hghHX6mXrjVWoVwmovEKneXxBSCuKv%2BM8HYa9nXelauyeUK8wJT0GPYRBEgFXSq0oJj0Z6T8aS2YTIORkPNOVRk%2BphuY%2B%2FrGqQNlC9Qta0DyG%2FCrDQlqH0FcTh4pbf1ABX6D8JVWoSikAXU2JVEJPNDHpqQlWvj6MHNofP2%2Fsw4mNseif5I9O&X-Amz-Signature=474495605a37602536d7d6d09f2b2802f09080bb3b51cb9c8e0d064357bb6190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFG2TY54%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIESVX6tGR13ofwXoQ5S0ZOdyp2lBB7KgmlEYcHltv6zSAiEA7HWHvKlziPFvkT89D0%2BCF9fa8QqDD6%2FULO5aEguxnDQq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOwIm1cMTUntW0QIoCrcA1Ifni5tMPGIKkcLhTcBXol4ZdIwkSJ3LCJRDBj2j2nmq6eB%2BczYtadwizOvjN0HT6b9h%2FPJ5MGqtBy4aT6Z5YeVeQB9xlbma5lznwPT2pws4H1WAM6sbWpCq%2Fu%2BD8lSiBk0Y5fEjjgBn7pdanDGD6WQsviZ2l%2B05t0tCS2YWmlOpYGLmQqTQqeu5AoFipdg%2F0kI%2B5eHjU9AGsniOAJ7XtiiAnA3rGpN0k%2F3ry4hK2l6%2B8vSBFAXfPJw4obh3Zbm56yMkZVt2JT%2B6oWrsoibIfDo%2Bmk2iKvaqt7XvM3QrlKhlwLuDWxaH2GazFNOk8S7badNoB56ywtR8%2FZtFAGgtBg9T1uJOaId98RgibOtW3VlYXVk3%2B8yCnd8bDePXIpruBfDaoQS9becLvg8MfRI6d37td%2BX7vfCrS3or0WIDca%2BKoH8zkFVKD1cfSD%2Fr3w46Bhn%2FQ3Av9RzyaMXoH97xsWvHrCfCqzDmj1SQ3oOK2QqsgLvX4DQDO1YsWmcVhbv4rH%2F3cluNIdZlZThlcBfWsJ1Uw3WBxGytbRF3gbd7ehb0CyKlSMHDlVBJ4pHQ3h7UViDHapNxL7GUck1a5WPexxSbpMcifGkcuMspKEUTaN9bog2j10AvfKA6qRbMJGcvskGOqUB%2FwDualvPlD4rVuG%2FzB04t1fEvGxBd4iBY7rzxmTc2sRMfo7hb6REBe5BmkUiDAy5LP9vJ5Y7ArVHtkJb0CrewmBNi28zk7jM8uDkC3sYy4mN%2BGIiRmD9Z%2F7HVRhAWHD6p4yrTp0LU4g5CLLkNRGjLLjgOg%2BkyTq0O1XKruAEeq6xnF6ndhOIMv6fWV2W0UjAYzpom0%2Bdlis1ujD7nDMmFqZo2tUs&X-Amz-Signature=b407f39b172fbfd0369e572de2557fbce4da6ef5dbf8e272e8fdca515668292a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ASMCO6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDCHlcvKyMQzDnNz5NuRTXJP1BUPsGH6hlCyMO73xWrlQIhAKgDdXNSzPx1U0rJn16Jm7uj%2BmCP2tSJ8gmhLwlMuZO0Kv8DCCIQABoMNjM3NDIzMTgzODA1IgyiT%2BBnWge98Bd1PJgq3ANbatZPjzQSz89PlXW5cFjf8r3TrfegZoBWRsSR%2BLXLRZ3FIlb8PajpxVP1VbI2Pc29ODiPdzXtxCZDFbQQnxi%2By4RM%2BDJpchVrsQe5aVIIiDIy%2F0YZyWXPY6CcxK61DGopAs6nnt3JJEAE31WYARmdQFAV0u%2FdF0WTkfDtkyMJRFH02SAD9fR86u5KnaSAbho69%2BA9Wc4NfkjGpLtPwHOBXmHK3RWO4HrEJLZoSxtWKPCSca3QORZb15vumLHL9YknjKVmxpLrEaG3%2B96KGyT7IZwgluckV2BW2ZXmnTVF5ouyKTUEG39ESWwla3fgQHXxS8L8tcesVMC%2FbQT1nUGuLW5pS8lJ8bJFyWGkB1X7fhT50YbL4r46xQCzhA0tY86R%2FQb65pydatZOzCdAFGRficXM0mdslhXJ3mAJl1gMP4EqPAG8RQwRfNlMJMy0gkJ6RIYLuzGzXjk7TTgTOt8NwR9gMUOeCJL9RpL8vmq%2Bli%2FLU9EMk2TymKugxNU%2FpBrc326S8oRcMblYM8V3ft%2Br8HnZwIua8o6o6q67AZP6LTm%2F9%2FPsRiDp9JCQeBB7W32Urhv6hUAA%2FOqcQB3iJIEir1KZ6f0GAeETq%2FyogwMP5mGw9rebqUl1oZksCzDMl77JBjqkAeqAUjH7sv%2Bsi7RVasLpFpw0B3zL5UM9ifgXcx4hghHX6mXrjVWoVwmovEKneXxBSCuKv%2BM8HYa9nXelauyeUK8wJT0GPYRBEgFXSq0oJj0Z6T8aS2YTIORkPNOVRk%2BphuY%2B%2FrGqQNlC9Qta0DyG%2FCrDQlqH0FcTh4pbf1ABX6D8JVWoSikAXU2JVEJPNDHpqQlWvj6MHNofP2%2Fsw4mNseif5I9O&X-Amz-Signature=c462d7b9e20ece97a01aedfadab5f46d8eb505e06c3aa50ff04905ad2f4a3fcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ON4QEDX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCCvu6Uv5Vz0I7bVDgX7JB0SiTc5TaZM4pItcqDAcrjUQIhAPT8BjsGJj3sR%2Bj50mlcoMwDGtkmv8ITh4McypDnwgOtKv8DCCIQABoMNjM3NDIzMTgzODA1IgzUmxzSRylBe0CRsx8q3APYryKfaVP5A2wnHKI978DLQwbccCJyKjhG1UbtpwqOIyw2CNdW3sDUZNSZuyvV8FKYUq9nLIh45cEyt2Ov4APtRU8CNvBti%2BVnExIpLpp%2FsTxL20JuNCyXdI8v0GLWSgHTo7rzD0svEQh%2FHxAjv5wCmlLfat7%2Fw8L0hT4Wc2BQQ8Dnw4m2TUAF3GA2tzGpu0Z6TSYwSIUQT7DGp3y9kN47J7kDOYuc6JESPO5wmeeJEgYHNdesEapSx0TqhXBNsU09JvUDZyombp36YMVrcMCw4gnUwWr6aQY0wJz5olupyRU%2BxX5cu22z%2B5AZ%2FHE4DtwDMg8AVecs%2BgRQZ7TdOwaRJDWDQ7w9RXZfo4enq%2FQHE5tCMue5ovPIAajTq4HKZSPmUBE8I%2FF%2BhNSOiv0biZ%2FnjUvCU22380l%2Fjjz%2FkDQqJfbictEgl7bVNHqPzpQ98Xf3HC%2Br5EzeSwuKQ1uuoE%2FhvDs1NFxImOM6NrwVDwdmHKhgVE9Gn91LIOXYiLw21Nulk%2BqQmbbrqpispBFueyjkMRbshaiD%2FlNyFjO6ifc%2BUDuQV4qoReNbdYN0dlu%2Bz9uYubF1dH3igQ4ErrhyHhyiSsmv3T3j%2BBNh6u0NZQcRVtXvjpzkm8KRnQr%2B5DDUlr7JBjqkAdJTHiVulcOYIXK%2BeHLFtiHsooRNQrK9ROK6S7DtpKm1MCWqmmKFVTCDXgtDZOrJAcXPVhUnXhG7GRQBn%2FTwz9LQAPYnThLESGhyiq0Do%2FJbnPXdkuNMpwdo1Mt7f7GTcdx73OivkaqiGk9W1cRB2PRGvwqlparZG7G45Z1hdjakpxG4HPiQCzTjdY6%2BSB3gRk3vrUkdn7B%2FeQFiRUVIkcei2Q1i&X-Amz-Signature=d2b4829f81d9e11eeb010d9502a5590c5b9493e65242184f9e324243a991ad58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHFW3HYE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQD9JLP6iklLXZvqr46B00%2Bs7XS%2BjGE6rG6Z1gB8MgjZigIhAKBrDKr12wZK%2Bfxs63I73sj1E7OKe5f21uKS8aNG%2FXHDKv8DCCIQABoMNjM3NDIzMTgzODA1Igz58filgRFqBGoY1sYq3AOZ1Asa0T%2FUyrcLlO55rkJSmTS4KJqTh%2BLkOR%2FK%2FqwmCdVtWQxQlPLl0R1fAnXkvrGxZFVVpXLMDfSK1%2BOD%2BjZOxYPaEQewzWssd9QoDt0xd%2BFYPbgZANiUfL1gM2PyPVgN58Qb1hERJS1AzrIzVknCrDZXdH4lSBkhtLT8ZJxO0OvcLyNWZhk%2FbB7yNFxia0MoKtBD1dOBcMA3OPOtmpWTFRBaYxN8kXugGmjJORbhj%2FnxtPvvWUL4vLY4Bh023oGJlhEzdXN%2FFXZ99na2U82jhyBK5AnpU27Qzoih5JaRHi%2BHsMe76JMkh4XSsBAb2%2BGrEv4Xa8No45hf2JuePO%2FXDTG2K4cMC%2BeRcfzZwxC0a53jGye1r542VKo%2B5cBOTlrdsbnvCA1gg0wwkjIy0%2Fubt9Y1jncHl7i7jrGoiElaSrP7t1a4nAoLl4cBUQZ5tG%2Bi59scWHi6oRqy%2FcMZYepc9zyQKSXJnxg7UXokEIOVGlfOM0PvY3gJc1o9WvLMlytGzHT0GyDwjtmVesM%2FVjvIBqC0ElmHcfhZlUpqBv%2B3cJZly0NYJcjORuxQvOgYKF9KPR082lXpTuzPoxPniOaatISrWKFIe3TQmg0MppCep2zuB8udQcQGU%2FhcbzDJlL7JBjqkAZfZoUqfWbYH8j9eGNhz16FGB6kQWTyGjbN9vnHSjyWe5B7t2GDbAvz%2BNOD8XuUmpWKVtNCLaycsp8tN1%2FrEBiEplZ8PYBg9s9AYjhOHbTz0wQvcyyiq%2FM0lPCDOmNZuzS79h1GHavj5UiHdP71BJStRJiE48lUPH%2FBQjXklxJ%2FZATWsqcqzj6UEILqT8z36cSRARUFqPD3OdqRhqPqJCOCg1nme&X-Amz-Signature=38560c3344f0b6c6a497770d6b89d0205ec7b8685261d4ccc2072bfd4d7fe7c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKW26TTA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBj66PTiUEcYYCzKBmO0v56taMuJuZY9v4FnmblDyHyCAiBHsc83qgZK%2B3KMVFSH0%2BZTKnRWbFt2UMfavQW38pAjtyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMnVubw3Ck20m0wkgPKtwD%2FJNbePXtq1sejvoqw5DdAzkqjFnn3Hw9r1LzxmD3fGhVO9caA%2BUMWMITB7jSuw84c8oq%2Fb7K8el3Pa586oo9Rp0erOYGmAqhSkXpVs7JI2MT9H%2FE3bPsbTtf9xSM5o8BW%2FePRH6%2FeR5xEVpKQQGH5TjlukOLSyJja%2FKZ2zLbR7rPJAc12AdU%2BBK6DKMwLt4P0q6ysz7n2J72eQMhn764yl9wtaVPtwqeFnmvIzj2K9rLT5vojy%2Fcn5ovBtWT8I%2BsXIGJXdNX26H%2BdpTw%2BAUhDbNLNTBLKV7IyDPnX94T91QxFWD2Mq%2FDKkC5f9Z83qN8utABtGqishNvA3mZPWdALuYSJHf1VCO%2FKuV%2BRJSw33H%2BSTiu%2BxqGLxbkLwI047e%2BmB2NyR3YGBp0k7suqQQ0J1P8kH7NHl%2BOFUNVc4ghzIC%2F%2B67NG1pCY%2BC4gvAv1a38zBa4TNg58FFIwFdeIujCu6oh4n7RP%2B%2Bj8F4kT2UdHrgaNnrNIpK%2FjyvjHh5EQvx8FQx%2FX8Kco9Spy9Q1gkI9mTuHf9yNpRhhp275qZzWH%2F2vb5yArg%2FzhtsqJFm2lJXeIpR4wk95J6wSGLSq427YmTxf1mIrAC1Q%2Brh5ZD%2FBFOmaK%2BMxKQXAwI%2F2vEMwspS%2ByQY6pgFlqm1BTRdIN3eMS4VnPk3IY%2Fg9%2FB5BKXs4scReRWirLrhl%2FCMnln0aJB%2BmHsc5ZdDHTcdh5clZ2TGwLz7Uni7hdPy5lH57gELw6Typ0sTgdEjU3jSApI8imGosGTzkcFV%2BoD%2FgyDaaEorMh551Gs41EmYLr9YRUMgpZ2NkjYTJFTmXQsj34t%2FoIMh66msDyjCaUhYgdWztOQXPwLdxFMnxtmyUcH3X&X-Amz-Signature=671cc23f95adbdaeecc11146858f96d11ec3b9f3a03ba90023b98cffb1fb6205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ASMCO6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDCHlcvKyMQzDnNz5NuRTXJP1BUPsGH6hlCyMO73xWrlQIhAKgDdXNSzPx1U0rJn16Jm7uj%2BmCP2tSJ8gmhLwlMuZO0Kv8DCCIQABoMNjM3NDIzMTgzODA1IgyiT%2BBnWge98Bd1PJgq3ANbatZPjzQSz89PlXW5cFjf8r3TrfegZoBWRsSR%2BLXLRZ3FIlb8PajpxVP1VbI2Pc29ODiPdzXtxCZDFbQQnxi%2By4RM%2BDJpchVrsQe5aVIIiDIy%2F0YZyWXPY6CcxK61DGopAs6nnt3JJEAE31WYARmdQFAV0u%2FdF0WTkfDtkyMJRFH02SAD9fR86u5KnaSAbho69%2BA9Wc4NfkjGpLtPwHOBXmHK3RWO4HrEJLZoSxtWKPCSca3QORZb15vumLHL9YknjKVmxpLrEaG3%2B96KGyT7IZwgluckV2BW2ZXmnTVF5ouyKTUEG39ESWwla3fgQHXxS8L8tcesVMC%2FbQT1nUGuLW5pS8lJ8bJFyWGkB1X7fhT50YbL4r46xQCzhA0tY86R%2FQb65pydatZOzCdAFGRficXM0mdslhXJ3mAJl1gMP4EqPAG8RQwRfNlMJMy0gkJ6RIYLuzGzXjk7TTgTOt8NwR9gMUOeCJL9RpL8vmq%2Bli%2FLU9EMk2TymKugxNU%2FpBrc326S8oRcMblYM8V3ft%2Br8HnZwIua8o6o6q67AZP6LTm%2F9%2FPsRiDp9JCQeBB7W32Urhv6hUAA%2FOqcQB3iJIEir1KZ6f0GAeETq%2FyogwMP5mGw9rebqUl1oZksCzDMl77JBjqkAeqAUjH7sv%2Bsi7RVasLpFpw0B3zL5UM9ifgXcx4hghHX6mXrjVWoVwmovEKneXxBSCuKv%2BM8HYa9nXelauyeUK8wJT0GPYRBEgFXSq0oJj0Z6T8aS2YTIORkPNOVRk%2BphuY%2B%2FrGqQNlC9Qta0DyG%2FCrDQlqH0FcTh4pbf1ABX6D8JVWoSikAXU2JVEJPNDHpqQlWvj6MHNofP2%2Fsw4mNseif5I9O&X-Amz-Signature=65d1a9c63ba5155d918cd74766d5d1046e9c59bb4ce60c3d31b9f9649f9950aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ASMCO6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDCHlcvKyMQzDnNz5NuRTXJP1BUPsGH6hlCyMO73xWrlQIhAKgDdXNSzPx1U0rJn16Jm7uj%2BmCP2tSJ8gmhLwlMuZO0Kv8DCCIQABoMNjM3NDIzMTgzODA1IgyiT%2BBnWge98Bd1PJgq3ANbatZPjzQSz89PlXW5cFjf8r3TrfegZoBWRsSR%2BLXLRZ3FIlb8PajpxVP1VbI2Pc29ODiPdzXtxCZDFbQQnxi%2By4RM%2BDJpchVrsQe5aVIIiDIy%2F0YZyWXPY6CcxK61DGopAs6nnt3JJEAE31WYARmdQFAV0u%2FdF0WTkfDtkyMJRFH02SAD9fR86u5KnaSAbho69%2BA9Wc4NfkjGpLtPwHOBXmHK3RWO4HrEJLZoSxtWKPCSca3QORZb15vumLHL9YknjKVmxpLrEaG3%2B96KGyT7IZwgluckV2BW2ZXmnTVF5ouyKTUEG39ESWwla3fgQHXxS8L8tcesVMC%2FbQT1nUGuLW5pS8lJ8bJFyWGkB1X7fhT50YbL4r46xQCzhA0tY86R%2FQb65pydatZOzCdAFGRficXM0mdslhXJ3mAJl1gMP4EqPAG8RQwRfNlMJMy0gkJ6RIYLuzGzXjk7TTgTOt8NwR9gMUOeCJL9RpL8vmq%2Bli%2FLU9EMk2TymKugxNU%2FpBrc326S8oRcMblYM8V3ft%2Br8HnZwIua8o6o6q67AZP6LTm%2F9%2FPsRiDp9JCQeBB7W32Urhv6hUAA%2FOqcQB3iJIEir1KZ6f0GAeETq%2FyogwMP5mGw9rebqUl1oZksCzDMl77JBjqkAeqAUjH7sv%2Bsi7RVasLpFpw0B3zL5UM9ifgXcx4hghHX6mXrjVWoVwmovEKneXxBSCuKv%2BM8HYa9nXelauyeUK8wJT0GPYRBEgFXSq0oJj0Z6T8aS2YTIORkPNOVRk%2BphuY%2B%2FrGqQNlC9Qta0DyG%2FCrDQlqH0FcTh4pbf1ABX6D8JVWoSikAXU2JVEJPNDHpqQlWvj6MHNofP2%2Fsw4mNseif5I9O&X-Amz-Signature=57fb5cd09615ae81b9fd9079a90d5e6e8bb959033eeb9fc3757d142e1c284006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6BPVWBH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIConK13RVnoI8HSwzQW2JXDZ2GDrFSQ06O12z5nV1D8uAiBJOz%2Bjba3%2Flfj%2F8wn3bhtkTWcRdJUpIfCZ1Fm%2BE9L4Nyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM2dlaJbB%2BtG73u3ThKtwDHsFin5SH0Vs9tqxky7oo%2FkGULT9vpyjGnaPTfYb2ao1wMyN%2Fnn8rhTaBUWFb7%2BdpMnaqOeVtkFS7%2FeJHGuRR7edR%2FB9WvlGYSJIjGG6glhdgt14B7avzYop7S1wjUYZNX0jYFbMtKssCxKOasJhaiJ7gKfxyRZfYXL%2BEahHQS3%2Bp%2Bid7QGTCN7g%2FhmQ4nyEKLOXtBl1p0L2VvYPOjjt2q2We6RQZv0f7bRCQ4p36AReYDgOh8UxcIPUXiha0uwlLZ8q32qvfN4dVBM0%2F%2FF4zbnDPoOpGwvErHnGDvDGaTjD2DEArkI9q5idNToqacUUmP6%2FpZ0FpC2M6FnrEF81jZop5nxhnKPsj311CC93jbY4gJ0OHM8hGhzPaUpaKZYbobiQu3uz51HYxYYFvpElUtgjPThno4diKhGPfVeyUwosJ%2BRrIrSlJtnJ63cPja8FS3CaYbGH3M4s0oVXoEyH%2FLmtC0zvz%2FlxGqP%2BYlubiJ4cRm6ecmFX3duLHy%2Fy11HINAvcoQlMFf5lAkv0aUHXyea%2BHNqbr1EGmY%2B7c%2BckRlE5isJxns4w1Ofgu9lAOTcTESFyN3eoVe%2FbjkbWRxTKdywXCTH2K9xPCh2pOPMoJ4yRqYVKkW8V4poTIjskw%2BZa%2ByQY6pgEoH%2FRC7ICHnwXuJjPboKGhy4A4zSV8VPcBNQS9YJPjGG6198O%2F2ob3NONY0SxxV3ktPWPh%2FkNFJ%2BR613FJxldbLH%2FLbwSYctCfM2S86CECIkS5gVQEYJFE8HqOQZtihZcA3mVEjXNUrbNsGseH208nE8Irw5uQaDCH5bVYMw%2FLf0Gy27DNG2EzWLDfYG3GcPjuWRq8LD6B%2FBkNFtekDuDN455%2Fq7EA&X-Amz-Signature=cffd48d17937a2f9042aae2e0cf56457dfa3e7e079516e17c1c7caecbb3f1475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6BPVWBH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIConK13RVnoI8HSwzQW2JXDZ2GDrFSQ06O12z5nV1D8uAiBJOz%2Bjba3%2Flfj%2F8wn3bhtkTWcRdJUpIfCZ1Fm%2BE9L4Nyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM2dlaJbB%2BtG73u3ThKtwDHsFin5SH0Vs9tqxky7oo%2FkGULT9vpyjGnaPTfYb2ao1wMyN%2Fnn8rhTaBUWFb7%2BdpMnaqOeVtkFS7%2FeJHGuRR7edR%2FB9WvlGYSJIjGG6glhdgt14B7avzYop7S1wjUYZNX0jYFbMtKssCxKOasJhaiJ7gKfxyRZfYXL%2BEahHQS3%2Bp%2Bid7QGTCN7g%2FhmQ4nyEKLOXtBl1p0L2VvYPOjjt2q2We6RQZv0f7bRCQ4p36AReYDgOh8UxcIPUXiha0uwlLZ8q32qvfN4dVBM0%2F%2FF4zbnDPoOpGwvErHnGDvDGaTjD2DEArkI9q5idNToqacUUmP6%2FpZ0FpC2M6FnrEF81jZop5nxhnKPsj311CC93jbY4gJ0OHM8hGhzPaUpaKZYbobiQu3uz51HYxYYFvpElUtgjPThno4diKhGPfVeyUwosJ%2BRrIrSlJtnJ63cPja8FS3CaYbGH3M4s0oVXoEyH%2FLmtC0zvz%2FlxGqP%2BYlubiJ4cRm6ecmFX3duLHy%2Fy11HINAvcoQlMFf5lAkv0aUHXyea%2BHNqbr1EGmY%2B7c%2BckRlE5isJxns4w1Ofgu9lAOTcTESFyN3eoVe%2FbjkbWRxTKdywXCTH2K9xPCh2pOPMoJ4yRqYVKkW8V4poTIjskw%2BZa%2ByQY6pgEoH%2FRC7ICHnwXuJjPboKGhy4A4zSV8VPcBNQS9YJPjGG6198O%2F2ob3NONY0SxxV3ktPWPh%2FkNFJ%2BR613FJxldbLH%2FLbwSYctCfM2S86CECIkS5gVQEYJFE8HqOQZtihZcA3mVEjXNUrbNsGseH208nE8Irw5uQaDCH5bVYMw%2FLf0Gy27DNG2EzWLDfYG3GcPjuWRq8LD6B%2FBkNFtekDuDN455%2Fq7EA&X-Amz-Signature=45c2a1f79da4f3c58879350876597575a0d581eeedb24eb42aba1367e6c9b606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6BPVWBH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIConK13RVnoI8HSwzQW2JXDZ2GDrFSQ06O12z5nV1D8uAiBJOz%2Bjba3%2Flfj%2F8wn3bhtkTWcRdJUpIfCZ1Fm%2BE9L4Nyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM2dlaJbB%2BtG73u3ThKtwDHsFin5SH0Vs9tqxky7oo%2FkGULT9vpyjGnaPTfYb2ao1wMyN%2Fnn8rhTaBUWFb7%2BdpMnaqOeVtkFS7%2FeJHGuRR7edR%2FB9WvlGYSJIjGG6glhdgt14B7avzYop7S1wjUYZNX0jYFbMtKssCxKOasJhaiJ7gKfxyRZfYXL%2BEahHQS3%2Bp%2Bid7QGTCN7g%2FhmQ4nyEKLOXtBl1p0L2VvYPOjjt2q2We6RQZv0f7bRCQ4p36AReYDgOh8UxcIPUXiha0uwlLZ8q32qvfN4dVBM0%2F%2FF4zbnDPoOpGwvErHnGDvDGaTjD2DEArkI9q5idNToqacUUmP6%2FpZ0FpC2M6FnrEF81jZop5nxhnKPsj311CC93jbY4gJ0OHM8hGhzPaUpaKZYbobiQu3uz51HYxYYFvpElUtgjPThno4diKhGPfVeyUwosJ%2BRrIrSlJtnJ63cPja8FS3CaYbGH3M4s0oVXoEyH%2FLmtC0zvz%2FlxGqP%2BYlubiJ4cRm6ecmFX3duLHy%2Fy11HINAvcoQlMFf5lAkv0aUHXyea%2BHNqbr1EGmY%2B7c%2BckRlE5isJxns4w1Ofgu9lAOTcTESFyN3eoVe%2FbjkbWRxTKdywXCTH2K9xPCh2pOPMoJ4yRqYVKkW8V4poTIjskw%2BZa%2ByQY6pgEoH%2FRC7ICHnwXuJjPboKGhy4A4zSV8VPcBNQS9YJPjGG6198O%2F2ob3NONY0SxxV3ktPWPh%2FkNFJ%2BR613FJxldbLH%2FLbwSYctCfM2S86CECIkS5gVQEYJFE8HqOQZtihZcA3mVEjXNUrbNsGseH208nE8Irw5uQaDCH5bVYMw%2FLf0Gy27DNG2EzWLDfYG3GcPjuWRq8LD6B%2FBkNFtekDuDN455%2Fq7EA&X-Amz-Signature=16b55a18fa89ac4097dec51f913e4d0d1069f0d48ef26089c718210d67ac2db9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6BPVWBH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIConK13RVnoI8HSwzQW2JXDZ2GDrFSQ06O12z5nV1D8uAiBJOz%2Bjba3%2Flfj%2F8wn3bhtkTWcRdJUpIfCZ1Fm%2BE9L4Nyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM2dlaJbB%2BtG73u3ThKtwDHsFin5SH0Vs9tqxky7oo%2FkGULT9vpyjGnaPTfYb2ao1wMyN%2Fnn8rhTaBUWFb7%2BdpMnaqOeVtkFS7%2FeJHGuRR7edR%2FB9WvlGYSJIjGG6glhdgt14B7avzYop7S1wjUYZNX0jYFbMtKssCxKOasJhaiJ7gKfxyRZfYXL%2BEahHQS3%2Bp%2Bid7QGTCN7g%2FhmQ4nyEKLOXtBl1p0L2VvYPOjjt2q2We6RQZv0f7bRCQ4p36AReYDgOh8UxcIPUXiha0uwlLZ8q32qvfN4dVBM0%2F%2FF4zbnDPoOpGwvErHnGDvDGaTjD2DEArkI9q5idNToqacUUmP6%2FpZ0FpC2M6FnrEF81jZop5nxhnKPsj311CC93jbY4gJ0OHM8hGhzPaUpaKZYbobiQu3uz51HYxYYFvpElUtgjPThno4diKhGPfVeyUwosJ%2BRrIrSlJtnJ63cPja8FS3CaYbGH3M4s0oVXoEyH%2FLmtC0zvz%2FlxGqP%2BYlubiJ4cRm6ecmFX3duLHy%2Fy11HINAvcoQlMFf5lAkv0aUHXyea%2BHNqbr1EGmY%2B7c%2BckRlE5isJxns4w1Ofgu9lAOTcTESFyN3eoVe%2FbjkbWRxTKdywXCTH2K9xPCh2pOPMoJ4yRqYVKkW8V4poTIjskw%2BZa%2ByQY6pgEoH%2FRC7ICHnwXuJjPboKGhy4A4zSV8VPcBNQS9YJPjGG6198O%2F2ob3NONY0SxxV3ktPWPh%2FkNFJ%2BR613FJxldbLH%2FLbwSYctCfM2S86CECIkS5gVQEYJFE8HqOQZtihZcA3mVEjXNUrbNsGseH208nE8Irw5uQaDCH5bVYMw%2FLf0Gy27DNG2EzWLDfYG3GcPjuWRq8LD6B%2FBkNFtekDuDN455%2Fq7EA&X-Amz-Signature=7594aa91d73193a8b77abd1c7a757ededc33071fcd4ff4eb7cc9370b2e2a12bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UGZNTAD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDgp1AUcPR5pRi9Ts%2FSsv%2B3iT9cPcadB3y823kPoZJ5wQIgC69tuMgc9yY3j%2BqVDN9xd2si32%2B3%2FPPN2S9ANB3xf4wq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBXAol1B%2BLlcbMXukCrcAxWhkJ5SoMqWQMDlVUguo10ATCOtcR%2BbsNFvjTCzdljn8IQHpAWdpXl%2BAKrqLzxJlWB6IwnMByqDatKotlPthLU0ubixpk6Chm49Lu3jYOXM6ysYXUbvrZeZhYf11j%2BuuKnemTKf3pdu0oLH8Q8eoh%2FqUpysVyVdZSWqrWdRJ3byFRiAVe58JCbcx2xdwNUDuOnOWwlbcfjdJR1V9iTqIcvNiXwEMKLyvJrqGIgQSjoNahmhT3oR7lrarI3LB9oZH2TpWFswhe2UcFXplAUh84sWfsCBOowuOf5kqtZSRuCBRdQMa8JiQyDpyDzFlSKoST8rgiOjjPpG7bm62Drq5rREIV8odkFAbm4GJCI13kByeYlLMBH%2BHeVrsEM6BgWnJ%2BgzAnVM7LFp%2BDSLy6baNN%2BkdpalZuY2LUndzoLZpRFKQUzk7%2F5Msif5oi5UALh%2FGxpBocqwT1vJji5Dd4MQjJ%2F2a3O%2BH7Kjex%2FPKZqMII7uj%2FsKtDRBYnJZ9FoRX3B9BRLbS5F3rR6XWOG1mXlLhocTMB%2BgP7FwzOGB%2FmCiR%2F332FMC9uN%2B6bDhjxmwF7BHkWZ%2Fv7%2BjhjFr5%2F2suM5SWN5hNCEkFOF6s%2BThIP0J5DWfWi0gz0ao9DYMytHkMLiWvskGOqUBFhKzafkV2Z9J3PTZJii0vV0UXdPNpiTJdOR21DgrN%2BVSMgFoIwkqTHTSqsKeP7P8jjplIJMY%2FePquMxylrXdLNYfFgf1ISTHwPEqEvBHeaSgo6bg9n%2BH%2FGd8pzBzPeLrxgAgRSKKWHGFvXe5DJDMsbl6o7b%2FtGgoxJmYNPcDiBSZ7VNikhkod1wtgb3phS6Sw8Q3KHLHjcE8r%2BkK8whpvVCFUDaJ&X-Amz-Signature=35000994eda9749a414de58a755389c231d62f37f424d7b830b3665eecb20004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6BPVWBH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIConK13RVnoI8HSwzQW2JXDZ2GDrFSQ06O12z5nV1D8uAiBJOz%2Bjba3%2Flfj%2F8wn3bhtkTWcRdJUpIfCZ1Fm%2BE9L4Nyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM2dlaJbB%2BtG73u3ThKtwDHsFin5SH0Vs9tqxky7oo%2FkGULT9vpyjGnaPTfYb2ao1wMyN%2Fnn8rhTaBUWFb7%2BdpMnaqOeVtkFS7%2FeJHGuRR7edR%2FB9WvlGYSJIjGG6glhdgt14B7avzYop7S1wjUYZNX0jYFbMtKssCxKOasJhaiJ7gKfxyRZfYXL%2BEahHQS3%2Bp%2Bid7QGTCN7g%2FhmQ4nyEKLOXtBl1p0L2VvYPOjjt2q2We6RQZv0f7bRCQ4p36AReYDgOh8UxcIPUXiha0uwlLZ8q32qvfN4dVBM0%2F%2FF4zbnDPoOpGwvErHnGDvDGaTjD2DEArkI9q5idNToqacUUmP6%2FpZ0FpC2M6FnrEF81jZop5nxhnKPsj311CC93jbY4gJ0OHM8hGhzPaUpaKZYbobiQu3uz51HYxYYFvpElUtgjPThno4diKhGPfVeyUwosJ%2BRrIrSlJtnJ63cPja8FS3CaYbGH3M4s0oVXoEyH%2FLmtC0zvz%2FlxGqP%2BYlubiJ4cRm6ecmFX3duLHy%2Fy11HINAvcoQlMFf5lAkv0aUHXyea%2BHNqbr1EGmY%2B7c%2BckRlE5isJxns4w1Ofgu9lAOTcTESFyN3eoVe%2FbjkbWRxTKdywXCTH2K9xPCh2pOPMoJ4yRqYVKkW8V4poTIjskw%2BZa%2ByQY6pgEoH%2FRC7ICHnwXuJjPboKGhy4A4zSV8VPcBNQS9YJPjGG6198O%2F2ob3NONY0SxxV3ktPWPh%2FkNFJ%2BR613FJxldbLH%2FLbwSYctCfM2S86CECIkS5gVQEYJFE8HqOQZtihZcA3mVEjXNUrbNsGseH208nE8Irw5uQaDCH5bVYMw%2FLf0Gy27DNG2EzWLDfYG3GcPjuWRq8LD6B%2FBkNFtekDuDN455%2Fq7EA&X-Amz-Signature=27a7b889f8e83fdd3c50d036fff8f3f85c4e4bee2f1564e73215eecf8b05b564&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6BPVWBH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIConK13RVnoI8HSwzQW2JXDZ2GDrFSQ06O12z5nV1D8uAiBJOz%2Bjba3%2Flfj%2F8wn3bhtkTWcRdJUpIfCZ1Fm%2BE9L4Nyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM2dlaJbB%2BtG73u3ThKtwDHsFin5SH0Vs9tqxky7oo%2FkGULT9vpyjGnaPTfYb2ao1wMyN%2Fnn8rhTaBUWFb7%2BdpMnaqOeVtkFS7%2FeJHGuRR7edR%2FB9WvlGYSJIjGG6glhdgt14B7avzYop7S1wjUYZNX0jYFbMtKssCxKOasJhaiJ7gKfxyRZfYXL%2BEahHQS3%2Bp%2Bid7QGTCN7g%2FhmQ4nyEKLOXtBl1p0L2VvYPOjjt2q2We6RQZv0f7bRCQ4p36AReYDgOh8UxcIPUXiha0uwlLZ8q32qvfN4dVBM0%2F%2FF4zbnDPoOpGwvErHnGDvDGaTjD2DEArkI9q5idNToqacUUmP6%2FpZ0FpC2M6FnrEF81jZop5nxhnKPsj311CC93jbY4gJ0OHM8hGhzPaUpaKZYbobiQu3uz51HYxYYFvpElUtgjPThno4diKhGPfVeyUwosJ%2BRrIrSlJtnJ63cPja8FS3CaYbGH3M4s0oVXoEyH%2FLmtC0zvz%2FlxGqP%2BYlubiJ4cRm6ecmFX3duLHy%2Fy11HINAvcoQlMFf5lAkv0aUHXyea%2BHNqbr1EGmY%2B7c%2BckRlE5isJxns4w1Ofgu9lAOTcTESFyN3eoVe%2FbjkbWRxTKdywXCTH2K9xPCh2pOPMoJ4yRqYVKkW8V4poTIjskw%2BZa%2ByQY6pgEoH%2FRC7ICHnwXuJjPboKGhy4A4zSV8VPcBNQS9YJPjGG6198O%2F2ob3NONY0SxxV3ktPWPh%2FkNFJ%2BR613FJxldbLH%2FLbwSYctCfM2S86CECIkS5gVQEYJFE8HqOQZtihZcA3mVEjXNUrbNsGseH208nE8Irw5uQaDCH5bVYMw%2FLf0Gy27DNG2EzWLDfYG3GcPjuWRq8LD6B%2FBkNFtekDuDN455%2Fq7EA&X-Amz-Signature=70547e2c80efd5884950ab20d8fac816c90f9a21f6e0446bc95be77d15e8e638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6BPVWBH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIConK13RVnoI8HSwzQW2JXDZ2GDrFSQ06O12z5nV1D8uAiBJOz%2Bjba3%2Flfj%2F8wn3bhtkTWcRdJUpIfCZ1Fm%2BE9L4Nyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM2dlaJbB%2BtG73u3ThKtwDHsFin5SH0Vs9tqxky7oo%2FkGULT9vpyjGnaPTfYb2ao1wMyN%2Fnn8rhTaBUWFb7%2BdpMnaqOeVtkFS7%2FeJHGuRR7edR%2FB9WvlGYSJIjGG6glhdgt14B7avzYop7S1wjUYZNX0jYFbMtKssCxKOasJhaiJ7gKfxyRZfYXL%2BEahHQS3%2Bp%2Bid7QGTCN7g%2FhmQ4nyEKLOXtBl1p0L2VvYPOjjt2q2We6RQZv0f7bRCQ4p36AReYDgOh8UxcIPUXiha0uwlLZ8q32qvfN4dVBM0%2F%2FF4zbnDPoOpGwvErHnGDvDGaTjD2DEArkI9q5idNToqacUUmP6%2FpZ0FpC2M6FnrEF81jZop5nxhnKPsj311CC93jbY4gJ0OHM8hGhzPaUpaKZYbobiQu3uz51HYxYYFvpElUtgjPThno4diKhGPfVeyUwosJ%2BRrIrSlJtnJ63cPja8FS3CaYbGH3M4s0oVXoEyH%2FLmtC0zvz%2FlxGqP%2BYlubiJ4cRm6ecmFX3duLHy%2Fy11HINAvcoQlMFf5lAkv0aUHXyea%2BHNqbr1EGmY%2B7c%2BckRlE5isJxns4w1Ofgu9lAOTcTESFyN3eoVe%2FbjkbWRxTKdywXCTH2K9xPCh2pOPMoJ4yRqYVKkW8V4poTIjskw%2BZa%2ByQY6pgEoH%2FRC7ICHnwXuJjPboKGhy4A4zSV8VPcBNQS9YJPjGG6198O%2F2ob3NONY0SxxV3ktPWPh%2FkNFJ%2BR613FJxldbLH%2FLbwSYctCfM2S86CECIkS5gVQEYJFE8HqOQZtihZcA3mVEjXNUrbNsGseH208nE8Irw5uQaDCH5bVYMw%2FLf0Gy27DNG2EzWLDfYG3GcPjuWRq8LD6B%2FBkNFtekDuDN455%2Fq7EA&X-Amz-Signature=d4b816d968f87780964ad052bf3a8eb97af6c55c38bb9c3d49f5350c776af1bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6BPVWBH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIConK13RVnoI8HSwzQW2JXDZ2GDrFSQ06O12z5nV1D8uAiBJOz%2Bjba3%2Flfj%2F8wn3bhtkTWcRdJUpIfCZ1Fm%2BE9L4Nyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM2dlaJbB%2BtG73u3ThKtwDHsFin5SH0Vs9tqxky7oo%2FkGULT9vpyjGnaPTfYb2ao1wMyN%2Fnn8rhTaBUWFb7%2BdpMnaqOeVtkFS7%2FeJHGuRR7edR%2FB9WvlGYSJIjGG6glhdgt14B7avzYop7S1wjUYZNX0jYFbMtKssCxKOasJhaiJ7gKfxyRZfYXL%2BEahHQS3%2Bp%2Bid7QGTCN7g%2FhmQ4nyEKLOXtBl1p0L2VvYPOjjt2q2We6RQZv0f7bRCQ4p36AReYDgOh8UxcIPUXiha0uwlLZ8q32qvfN4dVBM0%2F%2FF4zbnDPoOpGwvErHnGDvDGaTjD2DEArkI9q5idNToqacUUmP6%2FpZ0FpC2M6FnrEF81jZop5nxhnKPsj311CC93jbY4gJ0OHM8hGhzPaUpaKZYbobiQu3uz51HYxYYFvpElUtgjPThno4diKhGPfVeyUwosJ%2BRrIrSlJtnJ63cPja8FS3CaYbGH3M4s0oVXoEyH%2FLmtC0zvz%2FlxGqP%2BYlubiJ4cRm6ecmFX3duLHy%2Fy11HINAvcoQlMFf5lAkv0aUHXyea%2BHNqbr1EGmY%2B7c%2BckRlE5isJxns4w1Ofgu9lAOTcTESFyN3eoVe%2FbjkbWRxTKdywXCTH2K9xPCh2pOPMoJ4yRqYVKkW8V4poTIjskw%2BZa%2ByQY6pgEoH%2FRC7ICHnwXuJjPboKGhy4A4zSV8VPcBNQS9YJPjGG6198O%2F2ob3NONY0SxxV3ktPWPh%2FkNFJ%2BR613FJxldbLH%2FLbwSYctCfM2S86CECIkS5gVQEYJFE8HqOQZtihZcA3mVEjXNUrbNsGseH208nE8Irw5uQaDCH5bVYMw%2FLf0Gy27DNG2EzWLDfYG3GcPjuWRq8LD6B%2FBkNFtekDuDN455%2Fq7EA&X-Amz-Signature=862158d3e3eb0da1fe910ca452fa9bdcaf8e1645356edd31fe5ac988bcdb345b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6BPVWBH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIConK13RVnoI8HSwzQW2JXDZ2GDrFSQ06O12z5nV1D8uAiBJOz%2Bjba3%2Flfj%2F8wn3bhtkTWcRdJUpIfCZ1Fm%2BE9L4Nyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM2dlaJbB%2BtG73u3ThKtwDHsFin5SH0Vs9tqxky7oo%2FkGULT9vpyjGnaPTfYb2ao1wMyN%2Fnn8rhTaBUWFb7%2BdpMnaqOeVtkFS7%2FeJHGuRR7edR%2FB9WvlGYSJIjGG6glhdgt14B7avzYop7S1wjUYZNX0jYFbMtKssCxKOasJhaiJ7gKfxyRZfYXL%2BEahHQS3%2Bp%2Bid7QGTCN7g%2FhmQ4nyEKLOXtBl1p0L2VvYPOjjt2q2We6RQZv0f7bRCQ4p36AReYDgOh8UxcIPUXiha0uwlLZ8q32qvfN4dVBM0%2F%2FF4zbnDPoOpGwvErHnGDvDGaTjD2DEArkI9q5idNToqacUUmP6%2FpZ0FpC2M6FnrEF81jZop5nxhnKPsj311CC93jbY4gJ0OHM8hGhzPaUpaKZYbobiQu3uz51HYxYYFvpElUtgjPThno4diKhGPfVeyUwosJ%2BRrIrSlJtnJ63cPja8FS3CaYbGH3M4s0oVXoEyH%2FLmtC0zvz%2FlxGqP%2BYlubiJ4cRm6ecmFX3duLHy%2Fy11HINAvcoQlMFf5lAkv0aUHXyea%2BHNqbr1EGmY%2B7c%2BckRlE5isJxns4w1Ofgu9lAOTcTESFyN3eoVe%2FbjkbWRxTKdywXCTH2K9xPCh2pOPMoJ4yRqYVKkW8V4poTIjskw%2BZa%2ByQY6pgEoH%2FRC7ICHnwXuJjPboKGhy4A4zSV8VPcBNQS9YJPjGG6198O%2F2ob3NONY0SxxV3ktPWPh%2FkNFJ%2BR613FJxldbLH%2FLbwSYctCfM2S86CECIkS5gVQEYJFE8HqOQZtihZcA3mVEjXNUrbNsGseH208nE8Irw5uQaDCH5bVYMw%2FLf0Gy27DNG2EzWLDfYG3GcPjuWRq8LD6B%2FBkNFtekDuDN455%2Fq7EA&X-Amz-Signature=a79d6649dde6dc65e7e5d5e66e7c8dace06850a5178d6e7e76f0df94447911b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6BPVWBH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIConK13RVnoI8HSwzQW2JXDZ2GDrFSQ06O12z5nV1D8uAiBJOz%2Bjba3%2Flfj%2F8wn3bhtkTWcRdJUpIfCZ1Fm%2BE9L4Nyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM2dlaJbB%2BtG73u3ThKtwDHsFin5SH0Vs9tqxky7oo%2FkGULT9vpyjGnaPTfYb2ao1wMyN%2Fnn8rhTaBUWFb7%2BdpMnaqOeVtkFS7%2FeJHGuRR7edR%2FB9WvlGYSJIjGG6glhdgt14B7avzYop7S1wjUYZNX0jYFbMtKssCxKOasJhaiJ7gKfxyRZfYXL%2BEahHQS3%2Bp%2Bid7QGTCN7g%2FhmQ4nyEKLOXtBl1p0L2VvYPOjjt2q2We6RQZv0f7bRCQ4p36AReYDgOh8UxcIPUXiha0uwlLZ8q32qvfN4dVBM0%2F%2FF4zbnDPoOpGwvErHnGDvDGaTjD2DEArkI9q5idNToqacUUmP6%2FpZ0FpC2M6FnrEF81jZop5nxhnKPsj311CC93jbY4gJ0OHM8hGhzPaUpaKZYbobiQu3uz51HYxYYFvpElUtgjPThno4diKhGPfVeyUwosJ%2BRrIrSlJtnJ63cPja8FS3CaYbGH3M4s0oVXoEyH%2FLmtC0zvz%2FlxGqP%2BYlubiJ4cRm6ecmFX3duLHy%2Fy11HINAvcoQlMFf5lAkv0aUHXyea%2BHNqbr1EGmY%2B7c%2BckRlE5isJxns4w1Ofgu9lAOTcTESFyN3eoVe%2FbjkbWRxTKdywXCTH2K9xPCh2pOPMoJ4yRqYVKkW8V4poTIjskw%2BZa%2ByQY6pgEoH%2FRC7ICHnwXuJjPboKGhy4A4zSV8VPcBNQS9YJPjGG6198O%2F2ob3NONY0SxxV3ktPWPh%2FkNFJ%2BR613FJxldbLH%2FLbwSYctCfM2S86CECIkS5gVQEYJFE8HqOQZtihZcA3mVEjXNUrbNsGseH208nE8Irw5uQaDCH5bVYMw%2FLf0Gy27DNG2EzWLDfYG3GcPjuWRq8LD6B%2FBkNFtekDuDN455%2Fq7EA&X-Amz-Signature=6953b6540d45843db8b32fc9166d3dbc0c6477de47bfec020d06a98e1fac4dea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


