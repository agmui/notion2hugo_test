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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V656QXT%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllfRIe9tufFnsGU%2FdO%2BteDuQcoTudMO97vysqk0RFNAIgfbUgd47Ov6WlQ9Eoyg3wV5hKx1t0zg5c6btQ6%2F%2FOA78qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAymdKeEq%2BR%2FfGJ8uircA0cnk3DqBRTCtzzE5X8NZbA9hk4VQsZZ9DoIceZSb0HkRbvcU2mIKwGg7ZZpJqB61knReVC4mW%2B8tBuh8C57q7TUrtR5ec2QPHVRvqjDl1aHyn9Bj9YaVON6uGaTanpAc4XF9Fvw95OJcGnjDABXM3%2B62qQwHq9Y81gExH9AjecXEr%2Fxn5a1yvSEa0%2BzJC4UviQDNsDXHG3kXAwvJzP0jHTutTW4em%2FF02jIBSfV7wnHAf0RsquqiEm%2FhK9cP5E8NpAMeaQfHQD%2F8n4gRllyk6%2B%2BAO1sCfyFGfmaw2Zj6%2Fz0%2F%2FYWtJ1PKOya7fA7qKonFhgJrS%2FRDWsGV10MbSHI%2F0dv2f1d9pytyaNqGAcS6OXlHJSu59yBiJ0vFh1%2Be15mVzgXRNIpWW7uTtXsK3voJoWBf7A825aDUx4mmkkdlC%2FNrr%2B%2BHzCG%2FDJqYEXlEX6nv6bQYJwZTERMGLO7PhWz%2FR3k9kHfabVrJtGGos%2BTI5ATgdi7UaUnBexAHEy6uTO8XZcVfGXTH08vXsw1%2BY3KhTesCeXutHX39XFSVYpIR1dqEeY1DmzQZiXeXxwV%2FfIi9AHjCtQ3wzi3sLKRputhNCZr6ALRXecGeqw71swipxMMk23GbsGoXGu17EiXMLPd09QGOqUBd%2BU5PEPKjxImO56DZPz2tkSsgCxlH6g6wz5nZCYteqvxigOFWk9GORubJN1ArRZyK7jmm6s2ieQ8LBK4FkN%2BFuUZYosQqw%2BHXvFzyUGjULOic9%2B3yTO98zznR46biuTRnRHMA4u%2Bbw7tRRY1UWrWpTQ%2FbuLuQrSE3beh1N5CFT7Cy72p49fBP7Trs7pImrieDJH2rLMCUCYbtKLr%2FYc%2B93WZzGbh&X-Amz-Signature=fc278548752b44d01d22741fd999604764deb3e875a29545401aeb3056641833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V656QXT%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllfRIe9tufFnsGU%2FdO%2BteDuQcoTudMO97vysqk0RFNAIgfbUgd47Ov6WlQ9Eoyg3wV5hKx1t0zg5c6btQ6%2F%2FOA78qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAymdKeEq%2BR%2FfGJ8uircA0cnk3DqBRTCtzzE5X8NZbA9hk4VQsZZ9DoIceZSb0HkRbvcU2mIKwGg7ZZpJqB61knReVC4mW%2B8tBuh8C57q7TUrtR5ec2QPHVRvqjDl1aHyn9Bj9YaVON6uGaTanpAc4XF9Fvw95OJcGnjDABXM3%2B62qQwHq9Y81gExH9AjecXEr%2Fxn5a1yvSEa0%2BzJC4UviQDNsDXHG3kXAwvJzP0jHTutTW4em%2FF02jIBSfV7wnHAf0RsquqiEm%2FhK9cP5E8NpAMeaQfHQD%2F8n4gRllyk6%2B%2BAO1sCfyFGfmaw2Zj6%2Fz0%2F%2FYWtJ1PKOya7fA7qKonFhgJrS%2FRDWsGV10MbSHI%2F0dv2f1d9pytyaNqGAcS6OXlHJSu59yBiJ0vFh1%2Be15mVzgXRNIpWW7uTtXsK3voJoWBf7A825aDUx4mmkkdlC%2FNrr%2B%2BHzCG%2FDJqYEXlEX6nv6bQYJwZTERMGLO7PhWz%2FR3k9kHfabVrJtGGos%2BTI5ATgdi7UaUnBexAHEy6uTO8XZcVfGXTH08vXsw1%2BY3KhTesCeXutHX39XFSVYpIR1dqEeY1DmzQZiXeXxwV%2FfIi9AHjCtQ3wzi3sLKRputhNCZr6ALRXecGeqw71swipxMMk23GbsGoXGu17EiXMLPd09QGOqUBd%2BU5PEPKjxImO56DZPz2tkSsgCxlH6g6wz5nZCYteqvxigOFWk9GORubJN1ArRZyK7jmm6s2ieQ8LBK4FkN%2BFuUZYosQqw%2BHXvFzyUGjULOic9%2B3yTO98zznR46biuTRnRHMA4u%2Bbw7tRRY1UWrWpTQ%2FbuLuQrSE3beh1N5CFT7Cy72p49fBP7Trs7pImrieDJH2rLMCUCYbtKLr%2FYc%2B93WZzGbh&X-Amz-Signature=87906e77fa504e1d6493a3a3ec6b17393f7f0bcbc0ae03cbed83cb117ee98d5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V656QXT%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllfRIe9tufFnsGU%2FdO%2BteDuQcoTudMO97vysqk0RFNAIgfbUgd47Ov6WlQ9Eoyg3wV5hKx1t0zg5c6btQ6%2F%2FOA78qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAymdKeEq%2BR%2FfGJ8uircA0cnk3DqBRTCtzzE5X8NZbA9hk4VQsZZ9DoIceZSb0HkRbvcU2mIKwGg7ZZpJqB61knReVC4mW%2B8tBuh8C57q7TUrtR5ec2QPHVRvqjDl1aHyn9Bj9YaVON6uGaTanpAc4XF9Fvw95OJcGnjDABXM3%2B62qQwHq9Y81gExH9AjecXEr%2Fxn5a1yvSEa0%2BzJC4UviQDNsDXHG3kXAwvJzP0jHTutTW4em%2FF02jIBSfV7wnHAf0RsquqiEm%2FhK9cP5E8NpAMeaQfHQD%2F8n4gRllyk6%2B%2BAO1sCfyFGfmaw2Zj6%2Fz0%2F%2FYWtJ1PKOya7fA7qKonFhgJrS%2FRDWsGV10MbSHI%2F0dv2f1d9pytyaNqGAcS6OXlHJSu59yBiJ0vFh1%2Be15mVzgXRNIpWW7uTtXsK3voJoWBf7A825aDUx4mmkkdlC%2FNrr%2B%2BHzCG%2FDJqYEXlEX6nv6bQYJwZTERMGLO7PhWz%2FR3k9kHfabVrJtGGos%2BTI5ATgdi7UaUnBexAHEy6uTO8XZcVfGXTH08vXsw1%2BY3KhTesCeXutHX39XFSVYpIR1dqEeY1DmzQZiXeXxwV%2FfIi9AHjCtQ3wzi3sLKRputhNCZr6ALRXecGeqw71swipxMMk23GbsGoXGu17EiXMLPd09QGOqUBd%2BU5PEPKjxImO56DZPz2tkSsgCxlH6g6wz5nZCYteqvxigOFWk9GORubJN1ArRZyK7jmm6s2ieQ8LBK4FkN%2BFuUZYosQqw%2BHXvFzyUGjULOic9%2B3yTO98zznR46biuTRnRHMA4u%2Bbw7tRRY1UWrWpTQ%2FbuLuQrSE3beh1N5CFT7Cy72p49fBP7Trs7pImrieDJH2rLMCUCYbtKLr%2FYc%2B93WZzGbh&X-Amz-Signature=67fcec04dc143ee1f9a6d680fc1116ec232f85dbf0d522097bbc1b5bb0cafb9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V656QXT%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllfRIe9tufFnsGU%2FdO%2BteDuQcoTudMO97vysqk0RFNAIgfbUgd47Ov6WlQ9Eoyg3wV5hKx1t0zg5c6btQ6%2F%2FOA78qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAymdKeEq%2BR%2FfGJ8uircA0cnk3DqBRTCtzzE5X8NZbA9hk4VQsZZ9DoIceZSb0HkRbvcU2mIKwGg7ZZpJqB61knReVC4mW%2B8tBuh8C57q7TUrtR5ec2QPHVRvqjDl1aHyn9Bj9YaVON6uGaTanpAc4XF9Fvw95OJcGnjDABXM3%2B62qQwHq9Y81gExH9AjecXEr%2Fxn5a1yvSEa0%2BzJC4UviQDNsDXHG3kXAwvJzP0jHTutTW4em%2FF02jIBSfV7wnHAf0RsquqiEm%2FhK9cP5E8NpAMeaQfHQD%2F8n4gRllyk6%2B%2BAO1sCfyFGfmaw2Zj6%2Fz0%2F%2FYWtJ1PKOya7fA7qKonFhgJrS%2FRDWsGV10MbSHI%2F0dv2f1d9pytyaNqGAcS6OXlHJSu59yBiJ0vFh1%2Be15mVzgXRNIpWW7uTtXsK3voJoWBf7A825aDUx4mmkkdlC%2FNrr%2B%2BHzCG%2FDJqYEXlEX6nv6bQYJwZTERMGLO7PhWz%2FR3k9kHfabVrJtGGos%2BTI5ATgdi7UaUnBexAHEy6uTO8XZcVfGXTH08vXsw1%2BY3KhTesCeXutHX39XFSVYpIR1dqEeY1DmzQZiXeXxwV%2FfIi9AHjCtQ3wzi3sLKRputhNCZr6ALRXecGeqw71swipxMMk23GbsGoXGu17EiXMLPd09QGOqUBd%2BU5PEPKjxImO56DZPz2tkSsgCxlH6g6wz5nZCYteqvxigOFWk9GORubJN1ArRZyK7jmm6s2ieQ8LBK4FkN%2BFuUZYosQqw%2BHXvFzyUGjULOic9%2B3yTO98zznR46biuTRnRHMA4u%2Bbw7tRRY1UWrWpTQ%2FbuLuQrSE3beh1N5CFT7Cy72p49fBP7Trs7pImrieDJH2rLMCUCYbtKLr%2FYc%2B93WZzGbh&X-Amz-Signature=af13dbb5441494d5bc28ab6a4b7f8c4a6c7fbc649ae80249ac2d6908d27e253d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V656QXT%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllfRIe9tufFnsGU%2FdO%2BteDuQcoTudMO97vysqk0RFNAIgfbUgd47Ov6WlQ9Eoyg3wV5hKx1t0zg5c6btQ6%2F%2FOA78qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAymdKeEq%2BR%2FfGJ8uircA0cnk3DqBRTCtzzE5X8NZbA9hk4VQsZZ9DoIceZSb0HkRbvcU2mIKwGg7ZZpJqB61knReVC4mW%2B8tBuh8C57q7TUrtR5ec2QPHVRvqjDl1aHyn9Bj9YaVON6uGaTanpAc4XF9Fvw95OJcGnjDABXM3%2B62qQwHq9Y81gExH9AjecXEr%2Fxn5a1yvSEa0%2BzJC4UviQDNsDXHG3kXAwvJzP0jHTutTW4em%2FF02jIBSfV7wnHAf0RsquqiEm%2FhK9cP5E8NpAMeaQfHQD%2F8n4gRllyk6%2B%2BAO1sCfyFGfmaw2Zj6%2Fz0%2F%2FYWtJ1PKOya7fA7qKonFhgJrS%2FRDWsGV10MbSHI%2F0dv2f1d9pytyaNqGAcS6OXlHJSu59yBiJ0vFh1%2Be15mVzgXRNIpWW7uTtXsK3voJoWBf7A825aDUx4mmkkdlC%2FNrr%2B%2BHzCG%2FDJqYEXlEX6nv6bQYJwZTERMGLO7PhWz%2FR3k9kHfabVrJtGGos%2BTI5ATgdi7UaUnBexAHEy6uTO8XZcVfGXTH08vXsw1%2BY3KhTesCeXutHX39XFSVYpIR1dqEeY1DmzQZiXeXxwV%2FfIi9AHjCtQ3wzi3sLKRputhNCZr6ALRXecGeqw71swipxMMk23GbsGoXGu17EiXMLPd09QGOqUBd%2BU5PEPKjxImO56DZPz2tkSsgCxlH6g6wz5nZCYteqvxigOFWk9GORubJN1ArRZyK7jmm6s2ieQ8LBK4FkN%2BFuUZYosQqw%2BHXvFzyUGjULOic9%2B3yTO98zznR46biuTRnRHMA4u%2Bbw7tRRY1UWrWpTQ%2FbuLuQrSE3beh1N5CFT7Cy72p49fBP7Trs7pImrieDJH2rLMCUCYbtKLr%2FYc%2B93WZzGbh&X-Amz-Signature=c8246d6d8029c1956b378fb5b9683aecefd21412ae46599466f7be1e68a60507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V656QXT%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllfRIe9tufFnsGU%2FdO%2BteDuQcoTudMO97vysqk0RFNAIgfbUgd47Ov6WlQ9Eoyg3wV5hKx1t0zg5c6btQ6%2F%2FOA78qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAymdKeEq%2BR%2FfGJ8uircA0cnk3DqBRTCtzzE5X8NZbA9hk4VQsZZ9DoIceZSb0HkRbvcU2mIKwGg7ZZpJqB61knReVC4mW%2B8tBuh8C57q7TUrtR5ec2QPHVRvqjDl1aHyn9Bj9YaVON6uGaTanpAc4XF9Fvw95OJcGnjDABXM3%2B62qQwHq9Y81gExH9AjecXEr%2Fxn5a1yvSEa0%2BzJC4UviQDNsDXHG3kXAwvJzP0jHTutTW4em%2FF02jIBSfV7wnHAf0RsquqiEm%2FhK9cP5E8NpAMeaQfHQD%2F8n4gRllyk6%2B%2BAO1sCfyFGfmaw2Zj6%2Fz0%2F%2FYWtJ1PKOya7fA7qKonFhgJrS%2FRDWsGV10MbSHI%2F0dv2f1d9pytyaNqGAcS6OXlHJSu59yBiJ0vFh1%2Be15mVzgXRNIpWW7uTtXsK3voJoWBf7A825aDUx4mmkkdlC%2FNrr%2B%2BHzCG%2FDJqYEXlEX6nv6bQYJwZTERMGLO7PhWz%2FR3k9kHfabVrJtGGos%2BTI5ATgdi7UaUnBexAHEy6uTO8XZcVfGXTH08vXsw1%2BY3KhTesCeXutHX39XFSVYpIR1dqEeY1DmzQZiXeXxwV%2FfIi9AHjCtQ3wzi3sLKRputhNCZr6ALRXecGeqw71swipxMMk23GbsGoXGu17EiXMLPd09QGOqUBd%2BU5PEPKjxImO56DZPz2tkSsgCxlH6g6wz5nZCYteqvxigOFWk9GORubJN1ArRZyK7jmm6s2ieQ8LBK4FkN%2BFuUZYosQqw%2BHXvFzyUGjULOic9%2B3yTO98zznR46biuTRnRHMA4u%2Bbw7tRRY1UWrWpTQ%2FbuLuQrSE3beh1N5CFT7Cy72p49fBP7Trs7pImrieDJH2rLMCUCYbtKLr%2FYc%2B93WZzGbh&X-Amz-Signature=6032a94d0235ef078f164d841784b706a289c7c5dd1709513b3256ac121c8278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V656QXT%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllfRIe9tufFnsGU%2FdO%2BteDuQcoTudMO97vysqk0RFNAIgfbUgd47Ov6WlQ9Eoyg3wV5hKx1t0zg5c6btQ6%2F%2FOA78qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAymdKeEq%2BR%2FfGJ8uircA0cnk3DqBRTCtzzE5X8NZbA9hk4VQsZZ9DoIceZSb0HkRbvcU2mIKwGg7ZZpJqB61knReVC4mW%2B8tBuh8C57q7TUrtR5ec2QPHVRvqjDl1aHyn9Bj9YaVON6uGaTanpAc4XF9Fvw95OJcGnjDABXM3%2B62qQwHq9Y81gExH9AjecXEr%2Fxn5a1yvSEa0%2BzJC4UviQDNsDXHG3kXAwvJzP0jHTutTW4em%2FF02jIBSfV7wnHAf0RsquqiEm%2FhK9cP5E8NpAMeaQfHQD%2F8n4gRllyk6%2B%2BAO1sCfyFGfmaw2Zj6%2Fz0%2F%2FYWtJ1PKOya7fA7qKonFhgJrS%2FRDWsGV10MbSHI%2F0dv2f1d9pytyaNqGAcS6OXlHJSu59yBiJ0vFh1%2Be15mVzgXRNIpWW7uTtXsK3voJoWBf7A825aDUx4mmkkdlC%2FNrr%2B%2BHzCG%2FDJqYEXlEX6nv6bQYJwZTERMGLO7PhWz%2FR3k9kHfabVrJtGGos%2BTI5ATgdi7UaUnBexAHEy6uTO8XZcVfGXTH08vXsw1%2BY3KhTesCeXutHX39XFSVYpIR1dqEeY1DmzQZiXeXxwV%2FfIi9AHjCtQ3wzi3sLKRputhNCZr6ALRXecGeqw71swipxMMk23GbsGoXGu17EiXMLPd09QGOqUBd%2BU5PEPKjxImO56DZPz2tkSsgCxlH6g6wz5nZCYteqvxigOFWk9GORubJN1ArRZyK7jmm6s2ieQ8LBK4FkN%2BFuUZYosQqw%2BHXvFzyUGjULOic9%2B3yTO98zznR46biuTRnRHMA4u%2Bbw7tRRY1UWrWpTQ%2FbuLuQrSE3beh1N5CFT7Cy72p49fBP7Trs7pImrieDJH2rLMCUCYbtKLr%2FYc%2B93WZzGbh&X-Amz-Signature=2d70795cf58282aa7dc472df7b34416b4b1b1847b6d26018f6e38ee58477b88a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V656QXT%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllfRIe9tufFnsGU%2FdO%2BteDuQcoTudMO97vysqk0RFNAIgfbUgd47Ov6WlQ9Eoyg3wV5hKx1t0zg5c6btQ6%2F%2FOA78qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAymdKeEq%2BR%2FfGJ8uircA0cnk3DqBRTCtzzE5X8NZbA9hk4VQsZZ9DoIceZSb0HkRbvcU2mIKwGg7ZZpJqB61knReVC4mW%2B8tBuh8C57q7TUrtR5ec2QPHVRvqjDl1aHyn9Bj9YaVON6uGaTanpAc4XF9Fvw95OJcGnjDABXM3%2B62qQwHq9Y81gExH9AjecXEr%2Fxn5a1yvSEa0%2BzJC4UviQDNsDXHG3kXAwvJzP0jHTutTW4em%2FF02jIBSfV7wnHAf0RsquqiEm%2FhK9cP5E8NpAMeaQfHQD%2F8n4gRllyk6%2B%2BAO1sCfyFGfmaw2Zj6%2Fz0%2F%2FYWtJ1PKOya7fA7qKonFhgJrS%2FRDWsGV10MbSHI%2F0dv2f1d9pytyaNqGAcS6OXlHJSu59yBiJ0vFh1%2Be15mVzgXRNIpWW7uTtXsK3voJoWBf7A825aDUx4mmkkdlC%2FNrr%2B%2BHzCG%2FDJqYEXlEX6nv6bQYJwZTERMGLO7PhWz%2FR3k9kHfabVrJtGGos%2BTI5ATgdi7UaUnBexAHEy6uTO8XZcVfGXTH08vXsw1%2BY3KhTesCeXutHX39XFSVYpIR1dqEeY1DmzQZiXeXxwV%2FfIi9AHjCtQ3wzi3sLKRputhNCZr6ALRXecGeqw71swipxMMk23GbsGoXGu17EiXMLPd09QGOqUBd%2BU5PEPKjxImO56DZPz2tkSsgCxlH6g6wz5nZCYteqvxigOFWk9GORubJN1ArRZyK7jmm6s2ieQ8LBK4FkN%2BFuUZYosQqw%2BHXvFzyUGjULOic9%2B3yTO98zznR46biuTRnRHMA4u%2Bbw7tRRY1UWrWpTQ%2FbuLuQrSE3beh1N5CFT7Cy72p49fBP7Trs7pImrieDJH2rLMCUCYbtKLr%2FYc%2B93WZzGbh&X-Amz-Signature=cf470b8af0673b0fc92bf040985e7f6ed0460398abe01f58730b40413b5613df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V656QXT%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllfRIe9tufFnsGU%2FdO%2BteDuQcoTudMO97vysqk0RFNAIgfbUgd47Ov6WlQ9Eoyg3wV5hKx1t0zg5c6btQ6%2F%2FOA78qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAymdKeEq%2BR%2FfGJ8uircA0cnk3DqBRTCtzzE5X8NZbA9hk4VQsZZ9DoIceZSb0HkRbvcU2mIKwGg7ZZpJqB61knReVC4mW%2B8tBuh8C57q7TUrtR5ec2QPHVRvqjDl1aHyn9Bj9YaVON6uGaTanpAc4XF9Fvw95OJcGnjDABXM3%2B62qQwHq9Y81gExH9AjecXEr%2Fxn5a1yvSEa0%2BzJC4UviQDNsDXHG3kXAwvJzP0jHTutTW4em%2FF02jIBSfV7wnHAf0RsquqiEm%2FhK9cP5E8NpAMeaQfHQD%2F8n4gRllyk6%2B%2BAO1sCfyFGfmaw2Zj6%2Fz0%2F%2FYWtJ1PKOya7fA7qKonFhgJrS%2FRDWsGV10MbSHI%2F0dv2f1d9pytyaNqGAcS6OXlHJSu59yBiJ0vFh1%2Be15mVzgXRNIpWW7uTtXsK3voJoWBf7A825aDUx4mmkkdlC%2FNrr%2B%2BHzCG%2FDJqYEXlEX6nv6bQYJwZTERMGLO7PhWz%2FR3k9kHfabVrJtGGos%2BTI5ATgdi7UaUnBexAHEy6uTO8XZcVfGXTH08vXsw1%2BY3KhTesCeXutHX39XFSVYpIR1dqEeY1DmzQZiXeXxwV%2FfIi9AHjCtQ3wzi3sLKRputhNCZr6ALRXecGeqw71swipxMMk23GbsGoXGu17EiXMLPd09QGOqUBd%2BU5PEPKjxImO56DZPz2tkSsgCxlH6g6wz5nZCYteqvxigOFWk9GORubJN1ArRZyK7jmm6s2ieQ8LBK4FkN%2BFuUZYosQqw%2BHXvFzyUGjULOic9%2B3yTO98zznR46biuTRnRHMA4u%2Bbw7tRRY1UWrWpTQ%2FbuLuQrSE3beh1N5CFT7Cy72p49fBP7Trs7pImrieDJH2rLMCUCYbtKLr%2FYc%2B93WZzGbh&X-Amz-Signature=3b0a09993f691ffab4376241bbcf351de875ef70313a847949690f2c67655873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V656QXT%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllfRIe9tufFnsGU%2FdO%2BteDuQcoTudMO97vysqk0RFNAIgfbUgd47Ov6WlQ9Eoyg3wV5hKx1t0zg5c6btQ6%2F%2FOA78qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAymdKeEq%2BR%2FfGJ8uircA0cnk3DqBRTCtzzE5X8NZbA9hk4VQsZZ9DoIceZSb0HkRbvcU2mIKwGg7ZZpJqB61knReVC4mW%2B8tBuh8C57q7TUrtR5ec2QPHVRvqjDl1aHyn9Bj9YaVON6uGaTanpAc4XF9Fvw95OJcGnjDABXM3%2B62qQwHq9Y81gExH9AjecXEr%2Fxn5a1yvSEa0%2BzJC4UviQDNsDXHG3kXAwvJzP0jHTutTW4em%2FF02jIBSfV7wnHAf0RsquqiEm%2FhK9cP5E8NpAMeaQfHQD%2F8n4gRllyk6%2B%2BAO1sCfyFGfmaw2Zj6%2Fz0%2F%2FYWtJ1PKOya7fA7qKonFhgJrS%2FRDWsGV10MbSHI%2F0dv2f1d9pytyaNqGAcS6OXlHJSu59yBiJ0vFh1%2Be15mVzgXRNIpWW7uTtXsK3voJoWBf7A825aDUx4mmkkdlC%2FNrr%2B%2BHzCG%2FDJqYEXlEX6nv6bQYJwZTERMGLO7PhWz%2FR3k9kHfabVrJtGGos%2BTI5ATgdi7UaUnBexAHEy6uTO8XZcVfGXTH08vXsw1%2BY3KhTesCeXutHX39XFSVYpIR1dqEeY1DmzQZiXeXxwV%2FfIi9AHjCtQ3wzi3sLKRputhNCZr6ALRXecGeqw71swipxMMk23GbsGoXGu17EiXMLPd09QGOqUBd%2BU5PEPKjxImO56DZPz2tkSsgCxlH6g6wz5nZCYteqvxigOFWk9GORubJN1ArRZyK7jmm6s2ieQ8LBK4FkN%2BFuUZYosQqw%2BHXvFzyUGjULOic9%2B3yTO98zznR46biuTRnRHMA4u%2Bbw7tRRY1UWrWpTQ%2FbuLuQrSE3beh1N5CFT7Cy72p49fBP7Trs7pImrieDJH2rLMCUCYbtKLr%2FYc%2B93WZzGbh&X-Amz-Signature=78b4daa050f647bda8831156bd8477d5308552d9951f8f02d7f5cecd50b3ba62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SFUIFAD%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK2xB1XOfbvpJbbFwAfk3S83wxzP1oqbtq9PhWuZuybAIhAIexee74DzAwM24PCmDwch5kcoMn54W9ZRY3Uhu6ibXxKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYentfz%2FlWSpbn%2B7Yq3ANXzcVMAIIf01KGFJ7stGodIBAzMV77ipSB4Cu2H6V9mecEJRliOO0ISWjjHJJrnaJW1LIvVPHEgfhI6uSIz8agYSF3uwgm9tkApjQLt0xaWCAXRKEvwkbnLfF7la9VOF0%2FajR3LGzwPs9KbM3yyMvj8KpSNCVYkX%2FHHEmxtZnnqD%2FljoDQsDIY6DG47g5Dj7qB84ArK67rAAH79rjqrdO11w2eUbtlwbDmYeX0eLhbLPs%2BN9rktE89PYRqTX9UxoUmLwPHRb%2BDfcc9f4Y917Kb5FRDncolv0Lop%2B%2B49eDd7zZBbPMljZT5ZOiktuQIz6k2YE%2FmElZ70H9gTLt9gD9QvbUb92qZ%2FZYfkrysGHtkDcJHdvZDx5fDUL9XafRGFYTSt5vbYjiAyxcQIUnwAG7A9kKbtAvnmT1dv6FVNyGQK1ggLOT3P3p%2FUGSZSdIh6lMwfd%2Bg7%2BkBP6WI4cbsEK3UnFKYdqh6YuXmSDDmP6lHKDSPwL6ivcgnG6YRD7EzMTdbeV5EMOrcXpZbKxUO3mXmtOdTPZZHWsNFXgJKjgTP%2F4sC0Ce1BJ6ADB5VNCCf0AgVcURQ%2FV78Ayt6yCy2rdj0XfMmwSz0Yuinjww8vM2X61RQgMc8IkT5oXiqpTDx4NPUBjqkAVzOKN2MiQasqKZahQXxYmIGCwIJOnqpQO7uLYD1fJDOxtwkHZatKcvaoGlrOvprt1Pwrzbzr2JodIowbb8s35WATRftogknp6wBQtWxEw%2FtXzzdyjS%2FEa6EnpwmPkihuMFu72otNFMaT454mGQ4F2CVHoTcu7NrBHsVd%2FdErlI3XpZ%2FSz8tRDFlN0tLC5IIhYHkAVVkJKbOtSjw0T8iJV%2BTEqYz&X-Amz-Signature=23777b28a400848e9c4c7056147577235908e0d41ac0e78254c290e05b9bdcbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USL5AA2A%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHP5MkH5fF7t1QsesbK5ez14GZ2uYgjk8aFJzR5q6I7bAiEA5o6KzVcizMY3YSKEfgt6m3xAyDziO5Nf98qd%2FMO46lEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvJmeBeV7RS5o8uvSrcA2BGNM062SoeW7Rz4R5JdVXg7z3JABsKUdPD6wMX%2F53vLyTf5isVguS%2FR7jp94YagrShHqzzPUjOzEYmHsjTKCUjxRcUrEocflkupX9dBduDIWRYxMBlRRjgO2VPnScwUKFYqKcPng7087%2BJ2QP6paGPy%2BV6%2Bdbm0hkMwpLOxHmpJ%2Bg4sj438xCI3N8Jl1HPy6N3jtLjBoyCF6vS1xv2T15GS8X9UCqMEzytNPRo4l7WifRIlbc4WgqxA95OhFoTBSgH19ZHgS%2B2Ut03ojcV7aMmD5Ni9YT%2FWGWet1WClGJuOeIoUmOLTUKkABtBb98QNy8CPT7iLmTKNVIVkY8ieeIs8n5ZLQlfny4sDdjfptSAQIwq0WpSozOK603Q3hjkScamlolNLUSURMnMRFeRhO%2FkEJNQuWokZd50tdSGbbmrU3wsPyAKLcBxPqEl3eTNFBmETSBvP7DGel89yKbMxgAjeX71Oj73E0h6C4EeovH78JWwheGG0wLzRjG6iUgE7wln%2BXHW13UIEIRDdkYLKZ6EfeFH6lC9RPZAwO%2FR3Z0lLHX2SWmqbBHqAwlCtOh4i%2BCJtZc9iQqSA62F0HM79GxIKdbDCxdov8wF5hqaLFU0ZOaqVxXoi4IkNgpdMPDd09QGOqUB6GpM6DBLgO%2BYL0KOYFVaowUYyKuZrOQioGZXlJT11A9qq%2FiEyyRzlwprJDxx91KfMOLdh%2FVxijvJTjLEKOmnDnBFpZuuIX5hZ1L5yGxyS%2FBE0%2BVecQvJ8XEK0M1aN2QckX61tKzA8CjwDrwVW39ZvV66mEElJidsOu%2Bl4sxr4GwQ5sECDpJQRcv6F1z%2BDAp29GfDIaZGzxW%2BsAPea5EsnTrWPVGI&X-Amz-Signature=2d54f008bc4fc3c8c882fa090fd70f488db44ac8a375f131d088cab4f376bb9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX2JYSFD%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSMrgwR9SIqNIKvq1s%2BfYNB4NJMkMBT7jlTfLGQQBkagIhAO4DfD3uf6EwICrEXH9mCJ2dygCfPS%2F34VbCNifBL9pLKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjrahiMbaUv2z3le0q3ANSy2xwTJZPYwxYbpGPI%2FmhooZhp1VHr8%2BAflmW67FnGkYjz4z9MNPyuRQyNUq0Nwh31M8H2vLb4p%2FgxZR292G7XfSGseEOP8v6l0y6AqxdVz9%2Be%2Bvhs4gnF3Uur%2FGWh4YnKTrYEw%2BtSlIJzmXOIIO%2BbzsGpl8%2BOzcCd7UwVNdcTkAAI3DIZ%2F%2FzJF%2Fmv9U5Fx8TI8F%2F9M9fXiOJTMGsTmitrLcd53cCwpBqNov%2BtHHVijubz3PiTvTJyUg5lH9vdtACKypr4mDwIXoMVubK7FG23B0l13bBjJrL7Wat9fdQMaPn9n9BagVMFm4DDcQgP1vhvt%2B7ybcnJeKZKPuTU9PE7RkR%2F%2BtOwMKBfkeq5%2BsW2IiUlCfWhDIWcFqNQRYgHIVsYe%2B7H6anjIDLqnwezrDVLOwpXo0PVHmlHxbN7DlzRQcmLEP%2FA8Tjl5bTTkupCv%2FxGkWA6tb0aKwlxxrkZ1X1IqbjAYmD8GDy9adlyVFr6RZs3QSuKn4lWay1FqWCZYv51BnJQ7kI0ZjoAUmi2gVByeV4tKMHBZKocB9ksp0mEYfunRUUw3XRrGnjMj4YdpLv8%2F%2FDlrvn3SyvIxU01GaLek%2F00D%2FZmgY8LDhm6sHYIBNQU7pF7aS7Ol1BqjD739PUBjqkAYBr%2BQiv%2Fmk%2FyCFU7eLOq2mCHNUAX55lLp66CkOxAgtw4plACNwnehvbTzrL20U9H2JQIe6bPvjpMTroNJJr4G5D4%2B8CKmCyOThWwBAgbmLy0MNTthspbwA719n1g7QzNW9Yk%2BuiXp0egt6dLgHPw8aRJ5HRY4x7Bs6Z%2FzwElss90PtFtJMmgx1T1D0AHYEWM68nNxpLT2xnXcP%2FS%2BxHnq4vlQYk&X-Amz-Signature=21b2674e6d5a677de3bad55231dbacb38774122c230e62604cc087e2a4a414e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V656QXT%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllfRIe9tufFnsGU%2FdO%2BteDuQcoTudMO97vysqk0RFNAIgfbUgd47Ov6WlQ9Eoyg3wV5hKx1t0zg5c6btQ6%2F%2FOA78qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAymdKeEq%2BR%2FfGJ8uircA0cnk3DqBRTCtzzE5X8NZbA9hk4VQsZZ9DoIceZSb0HkRbvcU2mIKwGg7ZZpJqB61knReVC4mW%2B8tBuh8C57q7TUrtR5ec2QPHVRvqjDl1aHyn9Bj9YaVON6uGaTanpAc4XF9Fvw95OJcGnjDABXM3%2B62qQwHq9Y81gExH9AjecXEr%2Fxn5a1yvSEa0%2BzJC4UviQDNsDXHG3kXAwvJzP0jHTutTW4em%2FF02jIBSfV7wnHAf0RsquqiEm%2FhK9cP5E8NpAMeaQfHQD%2F8n4gRllyk6%2B%2BAO1sCfyFGfmaw2Zj6%2Fz0%2F%2FYWtJ1PKOya7fA7qKonFhgJrS%2FRDWsGV10MbSHI%2F0dv2f1d9pytyaNqGAcS6OXlHJSu59yBiJ0vFh1%2Be15mVzgXRNIpWW7uTtXsK3voJoWBf7A825aDUx4mmkkdlC%2FNrr%2B%2BHzCG%2FDJqYEXlEX6nv6bQYJwZTERMGLO7PhWz%2FR3k9kHfabVrJtGGos%2BTI5ATgdi7UaUnBexAHEy6uTO8XZcVfGXTH08vXsw1%2BY3KhTesCeXutHX39XFSVYpIR1dqEeY1DmzQZiXeXxwV%2FfIi9AHjCtQ3wzi3sLKRputhNCZr6ALRXecGeqw71swipxMMk23GbsGoXGu17EiXMLPd09QGOqUBd%2BU5PEPKjxImO56DZPz2tkSsgCxlH6g6wz5nZCYteqvxigOFWk9GORubJN1ArRZyK7jmm6s2ieQ8LBK4FkN%2BFuUZYosQqw%2BHXvFzyUGjULOic9%2B3yTO98zznR46biuTRnRHMA4u%2Bbw7tRRY1UWrWpTQ%2FbuLuQrSE3beh1N5CFT7Cy72p49fBP7Trs7pImrieDJH2rLMCUCYbtKLr%2FYc%2B93WZzGbh&X-Amz-Signature=bd6db688742662023fd1fdf87830a41390213038d3eb10adad475cdb1081c9fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647TQAXVF%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOjrTrZ8ExwvL7WD3DEb0QHdVFrqn9rTPOCxBtN7qyFAiEA8H6zmLFa9aVtWdvzCqElO50zyolW3eAR1OjZbqT1qnQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyCK2HIzRhxVYtpNSrcAxxl8d2rI75JZX221XYy2uyFrb9z67mhAXNt5wZy5R8XVdYb5kXODT3xCdyyfk4sNq7l92PkaaARdr75XvOzX%2B4EDQvRu8TbP%2BS6XgzLZqHyv06kT66b1XO08leEkJlAHKlw1aNKg8DkNTKkNna7mLVMM3%2BIzAhPkmAzswHSTVZ7z0FGqi7PMXYY8xSu169Z6QbbiwrlPmsE7rTeMHH6WWiZB4pI8sUbTLK6HSZaUPinp2RtIFK7Tejr5sjGKp9JVrU%2FKQ%2F8mtc0Gb8Uj8jtyEYWeVSwAj3Br1JFyoLLx0cRB13DmHOSf2VVBRE3r19MbHJREileYH1qhlxmHPlSIx3RXN%2B9QA9O3W6QN%2FJx%2BWMO6KIzNoNgjA2IwpMEtnPEVPLvOs4S1Nbr1YhZRlo5I0PmtFcHPqPNNsfy6E9H%2FmCQplFauX8T39m3Xj3NvalywjdAiIJ6vD7mtMKZi5TtOBe8N%2FrJjEq3hQHeHKhT1ncNeYMHUMmemJ0tEtlLIr8I1QwghxcXHhHjiu7PwNesgKhSpRg%2B5h%2B2XQ8ERl0gDhGedP9w5ao840l0L4W2NzobdjjwgEQSJeiD258nodTjltUjLehSp1e5ahrnW13MfvAs0oOivuMhrrMnkvjOMOzg09QGOqUBuBbfsDx41m3UGPR3jv7yyVagsOQvGmQ0%2Fmkzpp6N%2FHTxy6ZlDMTQs%2F8XPzpLcdH0QxGRr8z3pcuQoDby%2BvYcoaFHcSxSuJTDat3w8zuKOXwy0%2BRl9bnYaR3evgBBUiR6%2FhRJnz%2BJsn3az9IZT%2FmI9C4ysGkNS3ZmDRVNAVeb684%2F7zhhuUWxdgfIy1lr45gKeSviGnUoHnm7yVsJ9daTlQMo9d16&X-Amz-Signature=316986a42b83758dbbde24ac099128b79b38fdfa623661c49bbbc4a6a38c8de5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V656QXT%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllfRIe9tufFnsGU%2FdO%2BteDuQcoTudMO97vysqk0RFNAIgfbUgd47Ov6WlQ9Eoyg3wV5hKx1t0zg5c6btQ6%2F%2FOA78qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAymdKeEq%2BR%2FfGJ8uircA0cnk3DqBRTCtzzE5X8NZbA9hk4VQsZZ9DoIceZSb0HkRbvcU2mIKwGg7ZZpJqB61knReVC4mW%2B8tBuh8C57q7TUrtR5ec2QPHVRvqjDl1aHyn9Bj9YaVON6uGaTanpAc4XF9Fvw95OJcGnjDABXM3%2B62qQwHq9Y81gExH9AjecXEr%2Fxn5a1yvSEa0%2BzJC4UviQDNsDXHG3kXAwvJzP0jHTutTW4em%2FF02jIBSfV7wnHAf0RsquqiEm%2FhK9cP5E8NpAMeaQfHQD%2F8n4gRllyk6%2B%2BAO1sCfyFGfmaw2Zj6%2Fz0%2F%2FYWtJ1PKOya7fA7qKonFhgJrS%2FRDWsGV10MbSHI%2F0dv2f1d9pytyaNqGAcS6OXlHJSu59yBiJ0vFh1%2Be15mVzgXRNIpWW7uTtXsK3voJoWBf7A825aDUx4mmkkdlC%2FNrr%2B%2BHzCG%2FDJqYEXlEX6nv6bQYJwZTERMGLO7PhWz%2FR3k9kHfabVrJtGGos%2BTI5ATgdi7UaUnBexAHEy6uTO8XZcVfGXTH08vXsw1%2BY3KhTesCeXutHX39XFSVYpIR1dqEeY1DmzQZiXeXxwV%2FfIi9AHjCtQ3wzi3sLKRputhNCZr6ALRXecGeqw71swipxMMk23GbsGoXGu17EiXMLPd09QGOqUBd%2BU5PEPKjxImO56DZPz2tkSsgCxlH6g6wz5nZCYteqvxigOFWk9GORubJN1ArRZyK7jmm6s2ieQ8LBK4FkN%2BFuUZYosQqw%2BHXvFzyUGjULOic9%2B3yTO98zznR46biuTRnRHMA4u%2Bbw7tRRY1UWrWpTQ%2FbuLuQrSE3beh1N5CFT7Cy72p49fBP7Trs7pImrieDJH2rLMCUCYbtKLr%2FYc%2B93WZzGbh&X-Amz-Signature=cdb3ec9254ba4b2f1be41b5bf1c830b4147321915e82cd5ef714f3d70ed0f5da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT272O4H%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJzR9JjuXyFILHEuvbgcEvC2jx5GU65GcovN3DomefRQIhALT5OnuRKT2EQe7ub6Dm8K21gijjHPYM8HosQpnYs%2F9cKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOxpOKGb8XB0t%2FczMq3AN6ckLRZrWaSi1vf3hx7KbBfJoRW%2BviFbwpBth7Xf6i%2FGRQeGNoKYBaQT2a7K44bekxplBV2NPkCptecHz03mIFpNblCqAh7q9OUCyGTDVQ5rEcUN6KTy%2BjA%2FBdD%2B6LyHR5wdkH3FkfsZKTSrqppRAnMyPoQzsOfjIBCXSX8NhW8E9tZJw6aGJGjpsz63UJFM8aJ9vL3wlUgGV1z30nh0OONO0L1qsVMz50RiZp4btjrdb8ChROt5nw%2Fb1AqbkrlcH6P25HHrMZ88WOgSOGcHkFp%2BPN24Xhgxrdp%2FhNcHCFxsqVtHg2ogbJwgMa7sU3kp3bUCGjVaQqBnNAWU%2FGa1Y49wjakCNS56yx4DtaL7sw5i7hLbPjCY7yVrz%2BPc5uIydEeBJDGE3a8sFX1oKSPQ51ngvRrfOnGsFb3q04CtYpVMJArXdBIZVSsSo8D586WfIf7XRnZCti7rl8Yzz%2FR2I7vWzy2v1rLV05FW5y96fTujHsnGmT4XfYhgB10xR3ES4YVV%2BZIfdMIKKPaKR9D6CQZll2nxKgo7%2BcFmhNrtoQjqNvaidxukAcx26QhJnS7Sgh56z5KE%2FEZXQx64nPwNXq1ym06vPETYkh4cwggaFqN5WkEIPD68xeYMmzNDDN39PUBjqkARTC90yTPLK0NckY8y0%2BCOpR0gmTBPJi1VLv25N4TN2SmLvWYNm9ne0nixR%2BGOREZzwfyafZJU%2B2ciPDBSbVHponICDXZrREJstlb10pdoaKa89QMmptWONP3x34adIlIXbIUhLSPdj9Zm1CCdo5PXbfO0vrSQhg%2FlgxVwSoMEEY9axIMqT9vR8XXUh0wfzdt%2FO7bVmL0W0DB0c%2Bfv70XyRJMXQ%2F&X-Amz-Signature=baa879e3ff6971c06d3947030bf69ecd49908edd1ab17a4d46170d059d07177b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V656QXT%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllfRIe9tufFnsGU%2FdO%2BteDuQcoTudMO97vysqk0RFNAIgfbUgd47Ov6WlQ9Eoyg3wV5hKx1t0zg5c6btQ6%2F%2FOA78qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAymdKeEq%2BR%2FfGJ8uircA0cnk3DqBRTCtzzE5X8NZbA9hk4VQsZZ9DoIceZSb0HkRbvcU2mIKwGg7ZZpJqB61knReVC4mW%2B8tBuh8C57q7TUrtR5ec2QPHVRvqjDl1aHyn9Bj9YaVON6uGaTanpAc4XF9Fvw95OJcGnjDABXM3%2B62qQwHq9Y81gExH9AjecXEr%2Fxn5a1yvSEa0%2BzJC4UviQDNsDXHG3kXAwvJzP0jHTutTW4em%2FF02jIBSfV7wnHAf0RsquqiEm%2FhK9cP5E8NpAMeaQfHQD%2F8n4gRllyk6%2B%2BAO1sCfyFGfmaw2Zj6%2Fz0%2F%2FYWtJ1PKOya7fA7qKonFhgJrS%2FRDWsGV10MbSHI%2F0dv2f1d9pytyaNqGAcS6OXlHJSu59yBiJ0vFh1%2Be15mVzgXRNIpWW7uTtXsK3voJoWBf7A825aDUx4mmkkdlC%2FNrr%2B%2BHzCG%2FDJqYEXlEX6nv6bQYJwZTERMGLO7PhWz%2FR3k9kHfabVrJtGGos%2BTI5ATgdi7UaUnBexAHEy6uTO8XZcVfGXTH08vXsw1%2BY3KhTesCeXutHX39XFSVYpIR1dqEeY1DmzQZiXeXxwV%2FfIi9AHjCtQ3wzi3sLKRputhNCZr6ALRXecGeqw71swipxMMk23GbsGoXGu17EiXMLPd09QGOqUBd%2BU5PEPKjxImO56DZPz2tkSsgCxlH6g6wz5nZCYteqvxigOFWk9GORubJN1ArRZyK7jmm6s2ieQ8LBK4FkN%2BFuUZYosQqw%2BHXvFzyUGjULOic9%2B3yTO98zznR46biuTRnRHMA4u%2Bbw7tRRY1UWrWpTQ%2FbuLuQrSE3beh1N5CFT7Cy72p49fBP7Trs7pImrieDJH2rLMCUCYbtKLr%2FYc%2B93WZzGbh&X-Amz-Signature=c9eb97115795d5385dfd34d037ed5ee9c49ca75e25817d9450aada34353d6e26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P7USQYR%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPbt9Wq4jyiAtXd9Po3P%2FowWGAisBqqBWEjj9NrujXKgIhAPYH1rIo1jhaNmqNneXZ6a9cBDG1bZBYdwup6EoFjED5KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuJCaC%2BCsplvf59Ywq3AN1EL2qNr48YCqUPGXyNya50Qx5I5tIubbL6VoyAwH2l3oEXHo%2BKQbSYHpDIkFFyzrsm9UCtQqlbEWfpfEeCSkVt%2BaravKjoTGfBHwKqzkZVJliUBn6fd5W5C%2Fqmw1i1UG%2BPWOucJxHn24vOm1oYTneywv%2FzFc6LkX6BQhtILUwCruwY7aUTXDP25LJcHMk%2BC2d4CuLQrZTg9%2BQq4HUgJjk67OP7u5CtYxI8e9r0pfqV9lG7oSXhrEAf3%2F75f2bugyJeTIL7BpYN7iY%2F9LnX6K7BmWww8jMakHcXMP9cx3H3TPLg%2Bvu0BrFokC0oSv%2FeOZWVcT12LkDF4rY0Tnk5NMGyJSbFbdfykfiIFXgYs4QW4aA2j26QV3KSiE6iGSDIU1oym8G9Utx9KTvz4vM55o%2BC7m0a8EyuQ1bYAXqOeiQnHyS1UHNdWbrLEe5VGfky4O7XWip%2FWR%2BrVh30Ih623jBYaDiWWnDFTfn6p6k2ds8v3lZxsTSYaIdRwX90Jju9P%2FWQ8hUSJysmf5IC9%2BUXYMYc0cuDlqhcMG7ITWnzZP8BG%2F%2BDqh06lMv51FsiDyBEDJogEJYN870rs2hd6mPBSvx8sCZOIZvhOaKFJIMXaUROpzSZIMK9nmIop8Y5zD439PUBjqkAaNtLdpgKJI7pfEpgdxdGlA0AIpYuM7VwnmGg4OzomaG%2BY9RqB90xpf3Yifstf8%2FTj4TPWnS0kXuNBHvEL%2BbhDXVLnZLDYfoDNidK3t7arpHtb%2B8o7kRASmJ5LttCsV3Lr8Xyvu483ZzD%2BqEFOixnZN18JNJ%2Bq3UIPLgKyerupKgu8GZkQQ5mFl32Pf%2Bnbt0a5hMlgQI%2Bw4ClZK%2BgNSdIM%2FFKTQz&X-Amz-Signature=d6e34235684dcbfd557a91e1daaa620025d29af2fbda074e03932cc1c7deba85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V656QXT%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllfRIe9tufFnsGU%2FdO%2BteDuQcoTudMO97vysqk0RFNAIgfbUgd47Ov6WlQ9Eoyg3wV5hKx1t0zg5c6btQ6%2F%2FOA78qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAymdKeEq%2BR%2FfGJ8uircA0cnk3DqBRTCtzzE5X8NZbA9hk4VQsZZ9DoIceZSb0HkRbvcU2mIKwGg7ZZpJqB61knReVC4mW%2B8tBuh8C57q7TUrtR5ec2QPHVRvqjDl1aHyn9Bj9YaVON6uGaTanpAc4XF9Fvw95OJcGnjDABXM3%2B62qQwHq9Y81gExH9AjecXEr%2Fxn5a1yvSEa0%2BzJC4UviQDNsDXHG3kXAwvJzP0jHTutTW4em%2FF02jIBSfV7wnHAf0RsquqiEm%2FhK9cP5E8NpAMeaQfHQD%2F8n4gRllyk6%2B%2BAO1sCfyFGfmaw2Zj6%2Fz0%2F%2FYWtJ1PKOya7fA7qKonFhgJrS%2FRDWsGV10MbSHI%2F0dv2f1d9pytyaNqGAcS6OXlHJSu59yBiJ0vFh1%2Be15mVzgXRNIpWW7uTtXsK3voJoWBf7A825aDUx4mmkkdlC%2FNrr%2B%2BHzCG%2FDJqYEXlEX6nv6bQYJwZTERMGLO7PhWz%2FR3k9kHfabVrJtGGos%2BTI5ATgdi7UaUnBexAHEy6uTO8XZcVfGXTH08vXsw1%2BY3KhTesCeXutHX39XFSVYpIR1dqEeY1DmzQZiXeXxwV%2FfIi9AHjCtQ3wzi3sLKRputhNCZr6ALRXecGeqw71swipxMMk23GbsGoXGu17EiXMLPd09QGOqUBd%2BU5PEPKjxImO56DZPz2tkSsgCxlH6g6wz5nZCYteqvxigOFWk9GORubJN1ArRZyK7jmm6s2ieQ8LBK4FkN%2BFuUZYosQqw%2BHXvFzyUGjULOic9%2B3yTO98zznR46biuTRnRHMA4u%2Bbw7tRRY1UWrWpTQ%2FbuLuQrSE3beh1N5CFT7Cy72p49fBP7Trs7pImrieDJH2rLMCUCYbtKLr%2FYc%2B93WZzGbh&X-Amz-Signature=21999e65fd470c243785b5d70c4e7df5040bef01f7358a6df7ce31a4d8e1cd19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YZHRM7G%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPLmYq%2F3df%2FFOcoZPpkzVlKyQD%2BLIZhxVBLqjnMInQ6wIhAOo5%2FUu7wSmEGnYDHDrm5kP%2FIOYtCfgK9SeCri4qwG1PKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1pzXnLVRGtpA5ivoq3AMOdvH8kgJla8hIG9oXwFd4%2FDdDBIR4fQs46qocxfA1RoiypF1L%2FxyFIaCxcZ7v8GZl8sD6PJhBVKd3H7HY3azmOy0d5BG6KS1HvfJqdK9ljm6bi43EUDOzr%2BDzA7qrljJqGb5Wk4iST9O7peQ%2BGNunGO%2FuE9zjGIDcvnmQaqYD081CORQvMZ5467N4hUTd2fhM0pQ1ZnG0lXY4BUoD9ioZi2hoPlkERLBOc6sefh1YUPSYOioeguH%2F9Uao9mTEIGnqKqDZL5WcQk4Hgl%2BFIoQW%2FLx%2B6RRyutkCfbNd3KylpsPbbUA2JKGIzd0rMxdXvmsu%2BsMBCR%2Fl%2BF4e%2B4%2FJMxYKKevXyRcS0r6Q%2F0GYpZOfH5RWWJRukByKI0unsqy9c71sNLm0w%2B0862154DXXk2%2BNpi2rwg0PBnuz5kieJA5YySKw48gZyeM1ahCE8t7rvQ6YX%2FvzYcrHQ3pQZAvUVI8B74q%2BnDlQ%2FjP5RKeM1CS3zLtzoN9OIMuZSzbgo5Ui6esy6UgFcLS0HJZg2kfNXvkzhgE9c0Hg%2BECW3ld9coyiXmhHPylvdlXv2w8iBJRnyRMMs30wCAWBnh0LcbD0sok2oKPv3hGtIfZUorCbLDWMslU5YNviel1uVQIEdTCb3tPUBjqkAWeHUjoep0BuiIkqK3Nnv6VlMvu2VxCaUuha606IHrWzIQJY4sIEnQdB6aM0daG0lQn0Rn3AR8xz1SudUbJtpZ8F2ySikpiQvG9WWRv38%2FpOhQnu4obvvsoGbg%2FU5F3PvG8KWHOEUSPOwjaFAIr9b%2Buua7SFXEIMq0gJ0D55xlVFxRJTc0MbNTSaVAurqU3yKLI72CadhsLp6d4KG0gkThjSgbKc&X-Amz-Signature=9ccd04f6a731e00ef422f3bb2a1e53963f5781cb947de7eb8d1323607379d56c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V656QXT%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllfRIe9tufFnsGU%2FdO%2BteDuQcoTudMO97vysqk0RFNAIgfbUgd47Ov6WlQ9Eoyg3wV5hKx1t0zg5c6btQ6%2F%2FOA78qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAymdKeEq%2BR%2FfGJ8uircA0cnk3DqBRTCtzzE5X8NZbA9hk4VQsZZ9DoIceZSb0HkRbvcU2mIKwGg7ZZpJqB61knReVC4mW%2B8tBuh8C57q7TUrtR5ec2QPHVRvqjDl1aHyn9Bj9YaVON6uGaTanpAc4XF9Fvw95OJcGnjDABXM3%2B62qQwHq9Y81gExH9AjecXEr%2Fxn5a1yvSEa0%2BzJC4UviQDNsDXHG3kXAwvJzP0jHTutTW4em%2FF02jIBSfV7wnHAf0RsquqiEm%2FhK9cP5E8NpAMeaQfHQD%2F8n4gRllyk6%2B%2BAO1sCfyFGfmaw2Zj6%2Fz0%2F%2FYWtJ1PKOya7fA7qKonFhgJrS%2FRDWsGV10MbSHI%2F0dv2f1d9pytyaNqGAcS6OXlHJSu59yBiJ0vFh1%2Be15mVzgXRNIpWW7uTtXsK3voJoWBf7A825aDUx4mmkkdlC%2FNrr%2B%2BHzCG%2FDJqYEXlEX6nv6bQYJwZTERMGLO7PhWz%2FR3k9kHfabVrJtGGos%2BTI5ATgdi7UaUnBexAHEy6uTO8XZcVfGXTH08vXsw1%2BY3KhTesCeXutHX39XFSVYpIR1dqEeY1DmzQZiXeXxwV%2FfIi9AHjCtQ3wzi3sLKRputhNCZr6ALRXecGeqw71swipxMMk23GbsGoXGu17EiXMLPd09QGOqUBd%2BU5PEPKjxImO56DZPz2tkSsgCxlH6g6wz5nZCYteqvxigOFWk9GORubJN1ArRZyK7jmm6s2ieQ8LBK4FkN%2BFuUZYosQqw%2BHXvFzyUGjULOic9%2B3yTO98zznR46biuTRnRHMA4u%2Bbw7tRRY1UWrWpTQ%2FbuLuQrSE3beh1N5CFT7Cy72p49fBP7Trs7pImrieDJH2rLMCUCYbtKLr%2FYc%2B93WZzGbh&X-Amz-Signature=ea2bad73a80bc1ca80ede35b7b66431aab8410c52de832470d6b1764b62713f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THTMKUNR%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6kat0ah7xPwXGtHpm2CbM6s2ToPi3Y0Vgt7aJh7n9uAiEAzCycO3f1cvtgJnzxQQJMaEzL5D1ZKUfy6JVhoBTkvr0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsPNueHhFMDasY6dyrcA7HsUJ813hBlevNPbYAbPi7tJW5WcCJF4sPR0C8TL%2BmPu9Y8LRlea7DYMGCPc4v6NFbwkwVAxt0GQrKPri%2BEfkOnHPVxrX%2BiKuqQMd57cf5vf3SZu4gC%2BtxFMSkPUxjbBhdzZTp%2FOCMblT7PwmqaTfJML4eOhurSEG51JAhUF0KLO4x5uCdYIpycaBUcyb%2BR4Taz5pBnDYdWpASdMANLqdo%2FaUkgfWkqpr9J9Km23HC17RXZxU6OBYYyBi7xIyEKpcIu%2FfanNsy6HEiY28vgH8ICjEE2IAG%2F85oQTir0m3JBMyB5Kmznc10eD6jCea6wZqoLkjT%2BY5Og%2FX0TAa5w7nsLvwts0pIkPv33tM%2BjGa5qcOXxlMoVgOfKhjvRaynLtLa8migvs0%2BbukCPROefFOe3jOOe4qkuUgwJPOmZEe1m%2BG74UBAbVh0WqtQJTKOcDfpUK%2BxJM90374kfagT4bHPAJ%2FanhDEdKQ6ClDxafLIZNzDmIhjxkQO%2FR3FVGtA4yoPYmn1KhZ63FjH26LPY1fx71KCh%2FuPK8IM14YY5b5ivjKR2wwC7SPYrS6MFQsUcKVWWh1XIdcQ0e2vWHQghmQWXdxhtSf1UBsuw3RwvQkrmO%2Bq5YhI%2FWG5asyp1MLHd09QGOqUBx%2Fk%2Fat%2BkPuUYYpgc2tAMyphMtlnvZoHxsEzHFAL5aIsDanqy3GUvfjy7QIATtQ1B7LR88Vs55GMSBwFZ%2BpLYsz7eyPpj6fZl1uMcqL%2B2ekrjIg88iqGe%2F3n8n7mWzPGR%2FRbcmK2LQVY79zBKE2MKDPDLulxLjkWzl8OKYxLpRkugMA0marOI9vKdTL8FZQmBpELgNlnvndC7NqTFiQd2uNRKkHRI&X-Amz-Signature=b096d29dcc44de64a4c914ced7f34c9b3aeed06ec48c098ffeba80efe08e1fec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOATV642%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIET72oJBNfuPkhMDb1Rhsvcc0yPWYip0hyvR2zGmzvXpAiAwOLEbWK1OPz7tw2Ry9eBMbzazji0CwcAZz0Z%2FMelLOyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdYBcpoHY9prN%2FflfKtwDch8oL0GgMXdhk3BnHpPjZELdR9MbsxgBzLHWdEvl78lrJMT6bZYqLcCvQKgsH5g8Y3xKDYS9%2FZhmzPTW6%2BDjOu2ps7Ni%2F19P3RU9FVYckSC4ndEV3KwlXk2PT86mLCB9vqb4wHJ1KR3hQG%2BCSu8bHhuOz8SphB0j88NlCWKO2IXPHQSIfk0cCQCdOmhsaO1NnqZDkYZVOnFZavCM04xptUkvuHdfsMV9nx%2BH8fa0v4xowE1KRmCChBygZ3pIirmWtFU3w6Dvd2CwDztXEeQo9p%2Bd1toDVKrq5z3tfuZBPVw5tycuPSvpg%2BZLDzKuXH6MppwcXDNScyVlMDq1HuRbUHmb%2FFYmIcNmvSFz2yr5PpcR7lAfVuuwtONXn2EyxxZBU23kXlH5VYRU27hwIkLpCJTUeUwI5RrtPujjgNBB3H65%2BANn5GaGfPeTVybrK%2Fcz2mYzwUg0Bmi3kTmI%2FZJIEcgoqh5Ru4BE7jmqUWOUo3XI9wZUz%2Fy195JlUQ%2Fu4Hzv9GPaOV82SJ8d4MVUjQ9xeCkpy2f1tIypzkN%2BVloKj2UfZYGveqwEw7zrTmwZH7bJ67yCAgW6q4rbWw24sTem85iewHeEsFZXayJT444FFXxmaQ%2BrIL%2Bk%2B%2B6Jhu4wu97T1AY6pgG2tcp%2FwWdwyZrjSoCcnPeGGW8IQ7uJFdMwyyCnkRDP2GM9cNQ0cscAzRaid7G%2B5X2yXGPtEv1RgH1129EcA1OBBx1my8VIKC%2B2Nfv13VcW%2BgQdiuXBRaEJjCTkmmVv%2BMAqNqMdmq0q2DMJ8%2B1sEHnYFUgqkVirtyKUUkh0cDiVzuJ2pG6Sw4UsbtU67sdb%2BKULBtveJcqUymBsYPD0NqdXsntw5r6m&X-Amz-Signature=c13dde60121582a2d42279680282282a7a2359ee34d062ccf701d256609d16ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CXV6A7S%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOnGrW0xub2uSnOy6HMJJ5hqpTAFu7Br3AUYy0ZbmriAIgabWOnioZUlKaLWsNgJDqhAHHBjjxSsNWeeQJMOAmBiMqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0W%2FA1ck1t%2Bup%2FMkyrcA02mMPauG2x8TZI2xbsUxgjDBrLHRCyo8o1kNimMwnEeKVJtxoQd8APTiC%2FrURMJUEMkMLPpTnXpnPPXzw0tmcMh8vnS9mAUNkMUh1gnO9VZOA3rKuAXs1UdQQbLpbqlCgJq33a6W%2FtoYuKnDfSw60FRIm%2BUveRTT5t9OWaCByUAOKgTF9R%2B02sb%2BhDQgxUhdSjAtArnDeqZaypaIuJnfqXy0A4Z2%2F8MBvWklsKYHKaGf9bqfuYCA0k1z%2B%2BbDB%2Fg5H46%2FhRBvYDmjEUxkNW4cOBRlEW%2B0wStZ5fCrbyjo59sQrIw3W0zpKmb9957yzZ3j7nzG8rgHnH2N2V%2BIDjM37chY7FFQUPAn%2F5Ki4MrOGGeHtnxT8mCXcHkZepbS9rbW4uuHO9TQIfy9w307Ljh5swi%2BbhKQEtyOwE0z9gAZ6cHsJl5%2F7xc%2B89MkM0haRspDEwwZOxZxvcrrriPxHhi3HiXBAEmBNdywYspnwiKH0oiyd9gW%2Fhpk3SGIj2DkCUKLvhrOTqDZYlTij%2BVtTdrWKO9SkJOV0xBVFnlvK23mn2ooV3csYdpnByDX7JVQHoXcjdFceLCDEDTaGmBKj7qdI7Bal4bUsn%2B1ro7k2dYYPoGhy3UNoUGUFlyEQ%2BiMKTf09QGOqUB4EQNdN9ycuAT2e77oJaaB3YAOsQqbgc6rblgJCxV%2FXP25OTaBpO0z%2FGEv0ehITv9HA2bqou2y3GG%2F6bJPYooCXYnDaDMgfgFXPNrMMBNB88wUldSxYtJO6o%2BbHeLhbUWpi2Mswtwly%2FKYoXyCD9FO55ZXXzDMU0k%2BXaO7U9KjjaUFnk4o%2Bb0gsq5DcXKfKB7cOoSzAEBJfj6NT332o99%2FX7InKl8&X-Amz-Signature=7544e4a62d30a8d64ad7a96da053f68153cb152783250c15a8aec977b5748d06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V656QXT%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllfRIe9tufFnsGU%2FdO%2BteDuQcoTudMO97vysqk0RFNAIgfbUgd47Ov6WlQ9Eoyg3wV5hKx1t0zg5c6btQ6%2F%2FOA78qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAymdKeEq%2BR%2FfGJ8uircA0cnk3DqBRTCtzzE5X8NZbA9hk4VQsZZ9DoIceZSb0HkRbvcU2mIKwGg7ZZpJqB61knReVC4mW%2B8tBuh8C57q7TUrtR5ec2QPHVRvqjDl1aHyn9Bj9YaVON6uGaTanpAc4XF9Fvw95OJcGnjDABXM3%2B62qQwHq9Y81gExH9AjecXEr%2Fxn5a1yvSEa0%2BzJC4UviQDNsDXHG3kXAwvJzP0jHTutTW4em%2FF02jIBSfV7wnHAf0RsquqiEm%2FhK9cP5E8NpAMeaQfHQD%2F8n4gRllyk6%2B%2BAO1sCfyFGfmaw2Zj6%2Fz0%2F%2FYWtJ1PKOya7fA7qKonFhgJrS%2FRDWsGV10MbSHI%2F0dv2f1d9pytyaNqGAcS6OXlHJSu59yBiJ0vFh1%2Be15mVzgXRNIpWW7uTtXsK3voJoWBf7A825aDUx4mmkkdlC%2FNrr%2B%2BHzCG%2FDJqYEXlEX6nv6bQYJwZTERMGLO7PhWz%2FR3k9kHfabVrJtGGos%2BTI5ATgdi7UaUnBexAHEy6uTO8XZcVfGXTH08vXsw1%2BY3KhTesCeXutHX39XFSVYpIR1dqEeY1DmzQZiXeXxwV%2FfIi9AHjCtQ3wzi3sLKRputhNCZr6ALRXecGeqw71swipxMMk23GbsGoXGu17EiXMLPd09QGOqUBd%2BU5PEPKjxImO56DZPz2tkSsgCxlH6g6wz5nZCYteqvxigOFWk9GORubJN1ArRZyK7jmm6s2ieQ8LBK4FkN%2BFuUZYosQqw%2BHXvFzyUGjULOic9%2B3yTO98zznR46biuTRnRHMA4u%2Bbw7tRRY1UWrWpTQ%2FbuLuQrSE3beh1N5CFT7Cy72p49fBP7Trs7pImrieDJH2rLMCUCYbtKLr%2FYc%2B93WZzGbh&X-Amz-Signature=c88f496dd8a9f8370870b5e66c333967ea94d869f6a5aa3d6defdccc7c11ba0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V656QXT%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllfRIe9tufFnsGU%2FdO%2BteDuQcoTudMO97vysqk0RFNAIgfbUgd47Ov6WlQ9Eoyg3wV5hKx1t0zg5c6btQ6%2F%2FOA78qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAymdKeEq%2BR%2FfGJ8uircA0cnk3DqBRTCtzzE5X8NZbA9hk4VQsZZ9DoIceZSb0HkRbvcU2mIKwGg7ZZpJqB61knReVC4mW%2B8tBuh8C57q7TUrtR5ec2QPHVRvqjDl1aHyn9Bj9YaVON6uGaTanpAc4XF9Fvw95OJcGnjDABXM3%2B62qQwHq9Y81gExH9AjecXEr%2Fxn5a1yvSEa0%2BzJC4UviQDNsDXHG3kXAwvJzP0jHTutTW4em%2FF02jIBSfV7wnHAf0RsquqiEm%2FhK9cP5E8NpAMeaQfHQD%2F8n4gRllyk6%2B%2BAO1sCfyFGfmaw2Zj6%2Fz0%2F%2FYWtJ1PKOya7fA7qKonFhgJrS%2FRDWsGV10MbSHI%2F0dv2f1d9pytyaNqGAcS6OXlHJSu59yBiJ0vFh1%2Be15mVzgXRNIpWW7uTtXsK3voJoWBf7A825aDUx4mmkkdlC%2FNrr%2B%2BHzCG%2FDJqYEXlEX6nv6bQYJwZTERMGLO7PhWz%2FR3k9kHfabVrJtGGos%2BTI5ATgdi7UaUnBexAHEy6uTO8XZcVfGXTH08vXsw1%2BY3KhTesCeXutHX39XFSVYpIR1dqEeY1DmzQZiXeXxwV%2FfIi9AHjCtQ3wzi3sLKRputhNCZr6ALRXecGeqw71swipxMMk23GbsGoXGu17EiXMLPd09QGOqUBd%2BU5PEPKjxImO56DZPz2tkSsgCxlH6g6wz5nZCYteqvxigOFWk9GORubJN1ArRZyK7jmm6s2ieQ8LBK4FkN%2BFuUZYosQqw%2BHXvFzyUGjULOic9%2B3yTO98zznR46biuTRnRHMA4u%2Bbw7tRRY1UWrWpTQ%2FbuLuQrSE3beh1N5CFT7Cy72p49fBP7Trs7pImrieDJH2rLMCUCYbtKLr%2FYc%2B93WZzGbh&X-Amz-Signature=2d8ed42b3f53aee4dcfac00a020511410e86238e89854876c680e9fa790fa24d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AKPG3JV%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlgua0dOxk05S63AQp3B3DR6UbDmp9VS73rRbbC04pDAiEA3wh7ETGxcleK076Jtn2gETvUOzEE83sehHJlrfrY9ooqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2BU66BitUTm4sGoyrcA8ftQg5TheaSm4zQudR7VcJ1XcpdvbdU4M7woGjT1nIgTU4ZL%2BahUmj%2BVxr34SnAuzbU9ohqEW6i%2B%2FD2P3gbJfpVPhfVYfe5esjH3EtUde53mXJuYHrzWsyuG71ajjOZQVMcdS%2B0iQuisuDiYyT6u7ILE7ZsGSNCcpWpQA0yZZYY25oRwEJ1FqBrR9nvbpfFbZlTD5gRrnstMl%2FEqe%2By1mRn%2FANCAkA3s%2B8kVce3BOBf5hxc5pYZxDFkUiuXg7YNtGD0oxzwpJqHXAuxR7c%2FR0UIeLSeFIT3TpemQ5r%2FmgZ%2FtLwHlpVKV3stwuzGgOJW17t0HxAZt%2BITWOEU08i9NYs29HeGzXz1L%2BSwQoyf%2FtiAvze%2FQUnaYGAJwFL8mnM1oolL0qas35rzNImN87wJvlELUPNZVUf78WuWGtKUuEjqsVM%2F3f448hjLkQekdOV62QfXA3RA34ZyV4p3cXBtoO9%2BXpfiAj3j5Xg%2FCp4YQqP3BdJSfjkbH9jkksJyU2QBwxYX6V2Lr%2FOdD0aVf%2FbR8OouP4Jp9EAYCYr3f30AgYGlhNU1ZoNlh0oUEZTr1i3hltIZCVr6kEB5DjSM3NqrvlfpdwDkVM%2BdFKombvCfhPJmFSk04caZNNyU6ahIMOHf09QGOqUBM3NVK6EYKR0LEgeRDzNrthsYEk3BkkXciYIP1qICJz0xwkjuqSC2VUKpjEBbZQwuXhdJ8BlXx90O68jl36cToAx2BK6B2l7XG3Sw84p5ZwQTbC%2BvnxLDe76GRavwO4bZ1lc5MSeifJWFeAnsAa0ziUWUGMABe0I1mRPMi8FGcbD8LsPTtAX4Hn3m%2B52tGmu4xnlKQeAv7wROrb70xnMjud2d%2BbS%2F&X-Amz-Signature=ee999cf050905fa7166824f4b92be0d789daa3f1a9221dc3e777b66671199b92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AKPG3JV%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlgua0dOxk05S63AQp3B3DR6UbDmp9VS73rRbbC04pDAiEA3wh7ETGxcleK076Jtn2gETvUOzEE83sehHJlrfrY9ooqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2BU66BitUTm4sGoyrcA8ftQg5TheaSm4zQudR7VcJ1XcpdvbdU4M7woGjT1nIgTU4ZL%2BahUmj%2BVxr34SnAuzbU9ohqEW6i%2B%2FD2P3gbJfpVPhfVYfe5esjH3EtUde53mXJuYHrzWsyuG71ajjOZQVMcdS%2B0iQuisuDiYyT6u7ILE7ZsGSNCcpWpQA0yZZYY25oRwEJ1FqBrR9nvbpfFbZlTD5gRrnstMl%2FEqe%2By1mRn%2FANCAkA3s%2B8kVce3BOBf5hxc5pYZxDFkUiuXg7YNtGD0oxzwpJqHXAuxR7c%2FR0UIeLSeFIT3TpemQ5r%2FmgZ%2FtLwHlpVKV3stwuzGgOJW17t0HxAZt%2BITWOEU08i9NYs29HeGzXz1L%2BSwQoyf%2FtiAvze%2FQUnaYGAJwFL8mnM1oolL0qas35rzNImN87wJvlELUPNZVUf78WuWGtKUuEjqsVM%2F3f448hjLkQekdOV62QfXA3RA34ZyV4p3cXBtoO9%2BXpfiAj3j5Xg%2FCp4YQqP3BdJSfjkbH9jkksJyU2QBwxYX6V2Lr%2FOdD0aVf%2FbR8OouP4Jp9EAYCYr3f30AgYGlhNU1ZoNlh0oUEZTr1i3hltIZCVr6kEB5DjSM3NqrvlfpdwDkVM%2BdFKombvCfhPJmFSk04caZNNyU6ahIMOHf09QGOqUBM3NVK6EYKR0LEgeRDzNrthsYEk3BkkXciYIP1qICJz0xwkjuqSC2VUKpjEBbZQwuXhdJ8BlXx90O68jl36cToAx2BK6B2l7XG3Sw84p5ZwQTbC%2BvnxLDe76GRavwO4bZ1lc5MSeifJWFeAnsAa0ziUWUGMABe0I1mRPMi8FGcbD8LsPTtAX4Hn3m%2B52tGmu4xnlKQeAv7wROrb70xnMjud2d%2BbS%2F&X-Amz-Signature=f6ea6c9c6533dde5caf096e5b486b22502c1bb9f0bbeacc87ec30f063f687a0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AKPG3JV%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlgua0dOxk05S63AQp3B3DR6UbDmp9VS73rRbbC04pDAiEA3wh7ETGxcleK076Jtn2gETvUOzEE83sehHJlrfrY9ooqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2BU66BitUTm4sGoyrcA8ftQg5TheaSm4zQudR7VcJ1XcpdvbdU4M7woGjT1nIgTU4ZL%2BahUmj%2BVxr34SnAuzbU9ohqEW6i%2B%2FD2P3gbJfpVPhfVYfe5esjH3EtUde53mXJuYHrzWsyuG71ajjOZQVMcdS%2B0iQuisuDiYyT6u7ILE7ZsGSNCcpWpQA0yZZYY25oRwEJ1FqBrR9nvbpfFbZlTD5gRrnstMl%2FEqe%2By1mRn%2FANCAkA3s%2B8kVce3BOBf5hxc5pYZxDFkUiuXg7YNtGD0oxzwpJqHXAuxR7c%2FR0UIeLSeFIT3TpemQ5r%2FmgZ%2FtLwHlpVKV3stwuzGgOJW17t0HxAZt%2BITWOEU08i9NYs29HeGzXz1L%2BSwQoyf%2FtiAvze%2FQUnaYGAJwFL8mnM1oolL0qas35rzNImN87wJvlELUPNZVUf78WuWGtKUuEjqsVM%2F3f448hjLkQekdOV62QfXA3RA34ZyV4p3cXBtoO9%2BXpfiAj3j5Xg%2FCp4YQqP3BdJSfjkbH9jkksJyU2QBwxYX6V2Lr%2FOdD0aVf%2FbR8OouP4Jp9EAYCYr3f30AgYGlhNU1ZoNlh0oUEZTr1i3hltIZCVr6kEB5DjSM3NqrvlfpdwDkVM%2BdFKombvCfhPJmFSk04caZNNyU6ahIMOHf09QGOqUBM3NVK6EYKR0LEgeRDzNrthsYEk3BkkXciYIP1qICJz0xwkjuqSC2VUKpjEBbZQwuXhdJ8BlXx90O68jl36cToAx2BK6B2l7XG3Sw84p5ZwQTbC%2BvnxLDe76GRavwO4bZ1lc5MSeifJWFeAnsAa0ziUWUGMABe0I1mRPMi8FGcbD8LsPTtAX4Hn3m%2B52tGmu4xnlKQeAv7wROrb70xnMjud2d%2BbS%2F&X-Amz-Signature=d2080d0f0a6ae8dd439d2ade56a95531fc9b672bbe9f9a12f1bb2937e0016b4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AKPG3JV%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlgua0dOxk05S63AQp3B3DR6UbDmp9VS73rRbbC04pDAiEA3wh7ETGxcleK076Jtn2gETvUOzEE83sehHJlrfrY9ooqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2BU66BitUTm4sGoyrcA8ftQg5TheaSm4zQudR7VcJ1XcpdvbdU4M7woGjT1nIgTU4ZL%2BahUmj%2BVxr34SnAuzbU9ohqEW6i%2B%2FD2P3gbJfpVPhfVYfe5esjH3EtUde53mXJuYHrzWsyuG71ajjOZQVMcdS%2B0iQuisuDiYyT6u7ILE7ZsGSNCcpWpQA0yZZYY25oRwEJ1FqBrR9nvbpfFbZlTD5gRrnstMl%2FEqe%2By1mRn%2FANCAkA3s%2B8kVce3BOBf5hxc5pYZxDFkUiuXg7YNtGD0oxzwpJqHXAuxR7c%2FR0UIeLSeFIT3TpemQ5r%2FmgZ%2FtLwHlpVKV3stwuzGgOJW17t0HxAZt%2BITWOEU08i9NYs29HeGzXz1L%2BSwQoyf%2FtiAvze%2FQUnaYGAJwFL8mnM1oolL0qas35rzNImN87wJvlELUPNZVUf78WuWGtKUuEjqsVM%2F3f448hjLkQekdOV62QfXA3RA34ZyV4p3cXBtoO9%2BXpfiAj3j5Xg%2FCp4YQqP3BdJSfjkbH9jkksJyU2QBwxYX6V2Lr%2FOdD0aVf%2FbR8OouP4Jp9EAYCYr3f30AgYGlhNU1ZoNlh0oUEZTr1i3hltIZCVr6kEB5DjSM3NqrvlfpdwDkVM%2BdFKombvCfhPJmFSk04caZNNyU6ahIMOHf09QGOqUBM3NVK6EYKR0LEgeRDzNrthsYEk3BkkXciYIP1qICJz0xwkjuqSC2VUKpjEBbZQwuXhdJ8BlXx90O68jl36cToAx2BK6B2l7XG3Sw84p5ZwQTbC%2BvnxLDe76GRavwO4bZ1lc5MSeifJWFeAnsAa0ziUWUGMABe0I1mRPMi8FGcbD8LsPTtAX4Hn3m%2B52tGmu4xnlKQeAv7wROrb70xnMjud2d%2BbS%2F&X-Amz-Signature=b5e312d8d0498c16dbec772ba35b85d6855b73bd34c40738e3727c80451fd7aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AW3R5HU%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnOdvtAkZz%2FpHG1m%2BYfpVkeXWPhPvXlbRfoiR0thepUAiEA%2BZJr5QDjOybL5Qos3M2XZnsaCmDnXG7sz%2BjAfH67T6EqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPARQtBemJpArRAdWSrcA1JhXVejbLbIPXMOB%2BRiJuTF8PApbkE%2Fy15s1m4dKg0rbQgRMUvx7viV5UqeuqMBAmTWnn4rdV2lEPB2OdUWsCxLaf6YSzkJPCfC2tdVoWBFvESJrxe0lhe3ezBzS4UpZ60xbTEqQretDLVregvFXekmefIEkSBxK0HxIDbqK0pnSU6F%2BG1LbnIUCpy%2BEi%2FCOaxQWpaNFHdn90fHDQhCb76zLsX2CUP0i%2F8EkpjrRsvUJ5xMyr9ZXaYp3WMU86vJYSPx6GVHBuZUEzb8VmpRfsRLlR4SwNQ3y9Ddo0IzEmrG0VtaGSrHkFlUBMllGKqRQwfuTQqM0ghhZ8U%2FbQsHX%2FvL3XOTwxH7aX7bWlur8JLGhsHAFzuRespMTXfZdfpwxNizQf2Fo6oUnc5EeQeaJ4LxXNrGS3QlCBV0aOzFRBiJD%2BiFpRLb6PwYQXZdRl1v0U%2FJPaFUDxtM4zPVEuL0UEg9D2FBzK1M7IljvPPTXNFgwpvnqZg%2FOxcyVNTiFqxPJMEAqHNWeaZFzUKiQD3zcE6X1pcOiT1sEZElWhMMmxaHf96F8fXC2H4bnvw0tA209mYgyH7B3kHTD8tDDGz%2Bg6wURRBF9jBw%2B9DmzakmX%2B6eXNwwlhsi7u2ZuZbAMIng09QGOqUBZZsZ7md2Zh9MXE4al0idFHOFHO6hmEa%2FmNCvEzYEgU8XczYrO%2FBzkv%2B%2F7g6ga2Y2lcUlj%2BygkIz%2BfcCLhaH9lFmdrSDw8IYEvb0GSSNsw%2FAGJQ%2FOYY21FJTB9yh45KWtLURAJrqLVVR7HP05I0%2BKAJqKEwwu%2BTqMEqCQa%2BjOIREUz%2Bmn8xGQt25j1xlPRjgOVERFqhO2tBf2UhbV4PVfpeCBUFxS&X-Amz-Signature=c87bd423e95359944bb1592be150f08d92c270dc38c01b26e56c31d09ca2154c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AKPG3JV%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlgua0dOxk05S63AQp3B3DR6UbDmp9VS73rRbbC04pDAiEA3wh7ETGxcleK076Jtn2gETvUOzEE83sehHJlrfrY9ooqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2BU66BitUTm4sGoyrcA8ftQg5TheaSm4zQudR7VcJ1XcpdvbdU4M7woGjT1nIgTU4ZL%2BahUmj%2BVxr34SnAuzbU9ohqEW6i%2B%2FD2P3gbJfpVPhfVYfe5esjH3EtUde53mXJuYHrzWsyuG71ajjOZQVMcdS%2B0iQuisuDiYyT6u7ILE7ZsGSNCcpWpQA0yZZYY25oRwEJ1FqBrR9nvbpfFbZlTD5gRrnstMl%2FEqe%2By1mRn%2FANCAkA3s%2B8kVce3BOBf5hxc5pYZxDFkUiuXg7YNtGD0oxzwpJqHXAuxR7c%2FR0UIeLSeFIT3TpemQ5r%2FmgZ%2FtLwHlpVKV3stwuzGgOJW17t0HxAZt%2BITWOEU08i9NYs29HeGzXz1L%2BSwQoyf%2FtiAvze%2FQUnaYGAJwFL8mnM1oolL0qas35rzNImN87wJvlELUPNZVUf78WuWGtKUuEjqsVM%2F3f448hjLkQekdOV62QfXA3RA34ZyV4p3cXBtoO9%2BXpfiAj3j5Xg%2FCp4YQqP3BdJSfjkbH9jkksJyU2QBwxYX6V2Lr%2FOdD0aVf%2FbR8OouP4Jp9EAYCYr3f30AgYGlhNU1ZoNlh0oUEZTr1i3hltIZCVr6kEB5DjSM3NqrvlfpdwDkVM%2BdFKombvCfhPJmFSk04caZNNyU6ahIMOHf09QGOqUBM3NVK6EYKR0LEgeRDzNrthsYEk3BkkXciYIP1qICJz0xwkjuqSC2VUKpjEBbZQwuXhdJ8BlXx90O68jl36cToAx2BK6B2l7XG3Sw84p5ZwQTbC%2BvnxLDe76GRavwO4bZ1lc5MSeifJWFeAnsAa0ziUWUGMABe0I1mRPMi8FGcbD8LsPTtAX4Hn3m%2B52tGmu4xnlKQeAv7wROrb70xnMjud2d%2BbS%2F&X-Amz-Signature=ef7d07bae844bae59f970d85465e9b491692a29b2291c87261892d1a4509ffc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AKPG3JV%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlgua0dOxk05S63AQp3B3DR6UbDmp9VS73rRbbC04pDAiEA3wh7ETGxcleK076Jtn2gETvUOzEE83sehHJlrfrY9ooqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2BU66BitUTm4sGoyrcA8ftQg5TheaSm4zQudR7VcJ1XcpdvbdU4M7woGjT1nIgTU4ZL%2BahUmj%2BVxr34SnAuzbU9ohqEW6i%2B%2FD2P3gbJfpVPhfVYfe5esjH3EtUde53mXJuYHrzWsyuG71ajjOZQVMcdS%2B0iQuisuDiYyT6u7ILE7ZsGSNCcpWpQA0yZZYY25oRwEJ1FqBrR9nvbpfFbZlTD5gRrnstMl%2FEqe%2By1mRn%2FANCAkA3s%2B8kVce3BOBf5hxc5pYZxDFkUiuXg7YNtGD0oxzwpJqHXAuxR7c%2FR0UIeLSeFIT3TpemQ5r%2FmgZ%2FtLwHlpVKV3stwuzGgOJW17t0HxAZt%2BITWOEU08i9NYs29HeGzXz1L%2BSwQoyf%2FtiAvze%2FQUnaYGAJwFL8mnM1oolL0qas35rzNImN87wJvlELUPNZVUf78WuWGtKUuEjqsVM%2F3f448hjLkQekdOV62QfXA3RA34ZyV4p3cXBtoO9%2BXpfiAj3j5Xg%2FCp4YQqP3BdJSfjkbH9jkksJyU2QBwxYX6V2Lr%2FOdD0aVf%2FbR8OouP4Jp9EAYCYr3f30AgYGlhNU1ZoNlh0oUEZTr1i3hltIZCVr6kEB5DjSM3NqrvlfpdwDkVM%2BdFKombvCfhPJmFSk04caZNNyU6ahIMOHf09QGOqUBM3NVK6EYKR0LEgeRDzNrthsYEk3BkkXciYIP1qICJz0xwkjuqSC2VUKpjEBbZQwuXhdJ8BlXx90O68jl36cToAx2BK6B2l7XG3Sw84p5ZwQTbC%2BvnxLDe76GRavwO4bZ1lc5MSeifJWFeAnsAa0ziUWUGMABe0I1mRPMi8FGcbD8LsPTtAX4Hn3m%2B52tGmu4xnlKQeAv7wROrb70xnMjud2d%2BbS%2F&X-Amz-Signature=b825d43e4bb191cb6a09318550e04f97a11307616e9248261d613aad4cacf72d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AKPG3JV%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlgua0dOxk05S63AQp3B3DR6UbDmp9VS73rRbbC04pDAiEA3wh7ETGxcleK076Jtn2gETvUOzEE83sehHJlrfrY9ooqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2BU66BitUTm4sGoyrcA8ftQg5TheaSm4zQudR7VcJ1XcpdvbdU4M7woGjT1nIgTU4ZL%2BahUmj%2BVxr34SnAuzbU9ohqEW6i%2B%2FD2P3gbJfpVPhfVYfe5esjH3EtUde53mXJuYHrzWsyuG71ajjOZQVMcdS%2B0iQuisuDiYyT6u7ILE7ZsGSNCcpWpQA0yZZYY25oRwEJ1FqBrR9nvbpfFbZlTD5gRrnstMl%2FEqe%2By1mRn%2FANCAkA3s%2B8kVce3BOBf5hxc5pYZxDFkUiuXg7YNtGD0oxzwpJqHXAuxR7c%2FR0UIeLSeFIT3TpemQ5r%2FmgZ%2FtLwHlpVKV3stwuzGgOJW17t0HxAZt%2BITWOEU08i9NYs29HeGzXz1L%2BSwQoyf%2FtiAvze%2FQUnaYGAJwFL8mnM1oolL0qas35rzNImN87wJvlELUPNZVUf78WuWGtKUuEjqsVM%2F3f448hjLkQekdOV62QfXA3RA34ZyV4p3cXBtoO9%2BXpfiAj3j5Xg%2FCp4YQqP3BdJSfjkbH9jkksJyU2QBwxYX6V2Lr%2FOdD0aVf%2FbR8OouP4Jp9EAYCYr3f30AgYGlhNU1ZoNlh0oUEZTr1i3hltIZCVr6kEB5DjSM3NqrvlfpdwDkVM%2BdFKombvCfhPJmFSk04caZNNyU6ahIMOHf09QGOqUBM3NVK6EYKR0LEgeRDzNrthsYEk3BkkXciYIP1qICJz0xwkjuqSC2VUKpjEBbZQwuXhdJ8BlXx90O68jl36cToAx2BK6B2l7XG3Sw84p5ZwQTbC%2BvnxLDe76GRavwO4bZ1lc5MSeifJWFeAnsAa0ziUWUGMABe0I1mRPMi8FGcbD8LsPTtAX4Hn3m%2B52tGmu4xnlKQeAv7wROrb70xnMjud2d%2BbS%2F&X-Amz-Signature=d2080d0f0a6ae8dd439d2ade56a95531fc9b672bbe9f9a12f1bb2937e0016b4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AKPG3JV%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlgua0dOxk05S63AQp3B3DR6UbDmp9VS73rRbbC04pDAiEA3wh7ETGxcleK076Jtn2gETvUOzEE83sehHJlrfrY9ooqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2BU66BitUTm4sGoyrcA8ftQg5TheaSm4zQudR7VcJ1XcpdvbdU4M7woGjT1nIgTU4ZL%2BahUmj%2BVxr34SnAuzbU9ohqEW6i%2B%2FD2P3gbJfpVPhfVYfe5esjH3EtUde53mXJuYHrzWsyuG71ajjOZQVMcdS%2B0iQuisuDiYyT6u7ILE7ZsGSNCcpWpQA0yZZYY25oRwEJ1FqBrR9nvbpfFbZlTD5gRrnstMl%2FEqe%2By1mRn%2FANCAkA3s%2B8kVce3BOBf5hxc5pYZxDFkUiuXg7YNtGD0oxzwpJqHXAuxR7c%2FR0UIeLSeFIT3TpemQ5r%2FmgZ%2FtLwHlpVKV3stwuzGgOJW17t0HxAZt%2BITWOEU08i9NYs29HeGzXz1L%2BSwQoyf%2FtiAvze%2FQUnaYGAJwFL8mnM1oolL0qas35rzNImN87wJvlELUPNZVUf78WuWGtKUuEjqsVM%2F3f448hjLkQekdOV62QfXA3RA34ZyV4p3cXBtoO9%2BXpfiAj3j5Xg%2FCp4YQqP3BdJSfjkbH9jkksJyU2QBwxYX6V2Lr%2FOdD0aVf%2FbR8OouP4Jp9EAYCYr3f30AgYGlhNU1ZoNlh0oUEZTr1i3hltIZCVr6kEB5DjSM3NqrvlfpdwDkVM%2BdFKombvCfhPJmFSk04caZNNyU6ahIMOHf09QGOqUBM3NVK6EYKR0LEgeRDzNrthsYEk3BkkXciYIP1qICJz0xwkjuqSC2VUKpjEBbZQwuXhdJ8BlXx90O68jl36cToAx2BK6B2l7XG3Sw84p5ZwQTbC%2BvnxLDe76GRavwO4bZ1lc5MSeifJWFeAnsAa0ziUWUGMABe0I1mRPMi8FGcbD8LsPTtAX4Hn3m%2B52tGmu4xnlKQeAv7wROrb70xnMjud2d%2BbS%2F&X-Amz-Signature=ec516e20568a4f718f8815f78945bbbc2d377add35711e828434f8d07e5d4241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AKPG3JV%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlgua0dOxk05S63AQp3B3DR6UbDmp9VS73rRbbC04pDAiEA3wh7ETGxcleK076Jtn2gETvUOzEE83sehHJlrfrY9ooqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2BU66BitUTm4sGoyrcA8ftQg5TheaSm4zQudR7VcJ1XcpdvbdU4M7woGjT1nIgTU4ZL%2BahUmj%2BVxr34SnAuzbU9ohqEW6i%2B%2FD2P3gbJfpVPhfVYfe5esjH3EtUde53mXJuYHrzWsyuG71ajjOZQVMcdS%2B0iQuisuDiYyT6u7ILE7ZsGSNCcpWpQA0yZZYY25oRwEJ1FqBrR9nvbpfFbZlTD5gRrnstMl%2FEqe%2By1mRn%2FANCAkA3s%2B8kVce3BOBf5hxc5pYZxDFkUiuXg7YNtGD0oxzwpJqHXAuxR7c%2FR0UIeLSeFIT3TpemQ5r%2FmgZ%2FtLwHlpVKV3stwuzGgOJW17t0HxAZt%2BITWOEU08i9NYs29HeGzXz1L%2BSwQoyf%2FtiAvze%2FQUnaYGAJwFL8mnM1oolL0qas35rzNImN87wJvlELUPNZVUf78WuWGtKUuEjqsVM%2F3f448hjLkQekdOV62QfXA3RA34ZyV4p3cXBtoO9%2BXpfiAj3j5Xg%2FCp4YQqP3BdJSfjkbH9jkksJyU2QBwxYX6V2Lr%2FOdD0aVf%2FbR8OouP4Jp9EAYCYr3f30AgYGlhNU1ZoNlh0oUEZTr1i3hltIZCVr6kEB5DjSM3NqrvlfpdwDkVM%2BdFKombvCfhPJmFSk04caZNNyU6ahIMOHf09QGOqUBM3NVK6EYKR0LEgeRDzNrthsYEk3BkkXciYIP1qICJz0xwkjuqSC2VUKpjEBbZQwuXhdJ8BlXx90O68jl36cToAx2BK6B2l7XG3Sw84p5ZwQTbC%2BvnxLDe76GRavwO4bZ1lc5MSeifJWFeAnsAa0ziUWUGMABe0I1mRPMi8FGcbD8LsPTtAX4Hn3m%2B52tGmu4xnlKQeAv7wROrb70xnMjud2d%2BbS%2F&X-Amz-Signature=f02963ac8109a254800ada153c3ba223ed90823b91428411ce43ed9db0084032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AKPG3JV%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlgua0dOxk05S63AQp3B3DR6UbDmp9VS73rRbbC04pDAiEA3wh7ETGxcleK076Jtn2gETvUOzEE83sehHJlrfrY9ooqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2BU66BitUTm4sGoyrcA8ftQg5TheaSm4zQudR7VcJ1XcpdvbdU4M7woGjT1nIgTU4ZL%2BahUmj%2BVxr34SnAuzbU9ohqEW6i%2B%2FD2P3gbJfpVPhfVYfe5esjH3EtUde53mXJuYHrzWsyuG71ajjOZQVMcdS%2B0iQuisuDiYyT6u7ILE7ZsGSNCcpWpQA0yZZYY25oRwEJ1FqBrR9nvbpfFbZlTD5gRrnstMl%2FEqe%2By1mRn%2FANCAkA3s%2B8kVce3BOBf5hxc5pYZxDFkUiuXg7YNtGD0oxzwpJqHXAuxR7c%2FR0UIeLSeFIT3TpemQ5r%2FmgZ%2FtLwHlpVKV3stwuzGgOJW17t0HxAZt%2BITWOEU08i9NYs29HeGzXz1L%2BSwQoyf%2FtiAvze%2FQUnaYGAJwFL8mnM1oolL0qas35rzNImN87wJvlELUPNZVUf78WuWGtKUuEjqsVM%2F3f448hjLkQekdOV62QfXA3RA34ZyV4p3cXBtoO9%2BXpfiAj3j5Xg%2FCp4YQqP3BdJSfjkbH9jkksJyU2QBwxYX6V2Lr%2FOdD0aVf%2FbR8OouP4Jp9EAYCYr3f30AgYGlhNU1ZoNlh0oUEZTr1i3hltIZCVr6kEB5DjSM3NqrvlfpdwDkVM%2BdFKombvCfhPJmFSk04caZNNyU6ahIMOHf09QGOqUBM3NVK6EYKR0LEgeRDzNrthsYEk3BkkXciYIP1qICJz0xwkjuqSC2VUKpjEBbZQwuXhdJ8BlXx90O68jl36cToAx2BK6B2l7XG3Sw84p5ZwQTbC%2BvnxLDe76GRavwO4bZ1lc5MSeifJWFeAnsAa0ziUWUGMABe0I1mRPMi8FGcbD8LsPTtAX4Hn3m%2B52tGmu4xnlKQeAv7wROrb70xnMjud2d%2BbS%2F&X-Amz-Signature=d774058b8bb9e65eb5aac759729e6126dbbcca7389610c79f6c11467ffe2987b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


