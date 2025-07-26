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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVPSZM56%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCICMm5x9xQ5PKJJs4FS7kBNDwSPLprsMmSj06xQn6lnQIhAOqXDT%2FVQ6vw64tGb%2FTGHOWrzzYtDZCM%2Bt3Yd2vMd77%2BKv8DCFMQABoMNjM3NDIzMTgzODA1Igz0XTtqAPAB9McgpzQq3AOmmbeilNcqa85AVoV7aSFtDLQICOFigaf3mjeY%2B4Rxtnr%2F5hIPSI4G1Y0VtcqDqV53O9t9jXI6b%2Bpl1rR9h4wTwnC7UT2f8Dzed1mJbza7RLeeNs0Ei%2FKVkNtkNiLGyeXO%2FHokQZtsbd%2BZI1qsPchinUYd7gHhIwUCy%2FbU25QW7YyVAuzGOfwQx3YPuFKEm%2BJXQ8c7dwk%2BYwOOXCzDXNClV8%2FBXpnGlJ03X5thtFx%2Fw3UMdJbPod%2Bu%2BCqb%2FnO9KVG%2Byc3BiTHfh4344hdBGAfWxnj3wve5ymNUFeNUUtI0oyp17IjUCfPjNApOt8ge5qKKFAfDZx8vZmLiHFovmsUoRDxZcNPlY6jsPC03XW2C0LOJLBjZQN42UrcJMoAOz%2FPhNK7Ow0I%2FqFkOQoENLb%2BxrW%2Bx1uzxCyFc7Rjzy4ufGXmw7an8pHquVXzQpA0WbkBrC9fLEDw%2BnIegTPjNIsbwVkl%2BEjbTmy95L3e9bXLT%2FVz%2Boh8xGbL0bXzvpNWQQlc9gAkVEwFDwN5qoAl3gFxf7aCRqvKmmWemm2UEgCV9QdZCDPnGgT4AhTuHlaCGs2dUhXCl%2BR1DPI30q211iClMLgv6yFeRWaM4e2W%2F0XTNIiKXCvYF8nhXc%2F6O4TDC95DEBjqkAffzmGXufh5UQIMbK7sOAF%2Fq2LlYQ2G3BcbdoLFXABsw6gN9eiGf7B4m5kCvt5a2fOSf3ht%2FPQuSEqyIDQX3e3HPpq9po26OZB1WOG8mJcN03hkrlMpkOaJf1jtdwoevRkWF3xeuNUQjQYT8K%2FAYYRksWn6rWxc4If5LPDc8pzp1mywmu1TmCW5EazsxxeeL1pgeKTv0ORBnYLfQ7zqYfw5F9rSA&X-Amz-Signature=1b03ae41f74557b3ab35bde4468222d7e54df418602b3b4f1645de3b9b5cd493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVPSZM56%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCICMm5x9xQ5PKJJs4FS7kBNDwSPLprsMmSj06xQn6lnQIhAOqXDT%2FVQ6vw64tGb%2FTGHOWrzzYtDZCM%2Bt3Yd2vMd77%2BKv8DCFMQABoMNjM3NDIzMTgzODA1Igz0XTtqAPAB9McgpzQq3AOmmbeilNcqa85AVoV7aSFtDLQICOFigaf3mjeY%2B4Rxtnr%2F5hIPSI4G1Y0VtcqDqV53O9t9jXI6b%2Bpl1rR9h4wTwnC7UT2f8Dzed1mJbza7RLeeNs0Ei%2FKVkNtkNiLGyeXO%2FHokQZtsbd%2BZI1qsPchinUYd7gHhIwUCy%2FbU25QW7YyVAuzGOfwQx3YPuFKEm%2BJXQ8c7dwk%2BYwOOXCzDXNClV8%2FBXpnGlJ03X5thtFx%2Fw3UMdJbPod%2Bu%2BCqb%2FnO9KVG%2Byc3BiTHfh4344hdBGAfWxnj3wve5ymNUFeNUUtI0oyp17IjUCfPjNApOt8ge5qKKFAfDZx8vZmLiHFovmsUoRDxZcNPlY6jsPC03XW2C0LOJLBjZQN42UrcJMoAOz%2FPhNK7Ow0I%2FqFkOQoENLb%2BxrW%2Bx1uzxCyFc7Rjzy4ufGXmw7an8pHquVXzQpA0WbkBrC9fLEDw%2BnIegTPjNIsbwVkl%2BEjbTmy95L3e9bXLT%2FVz%2Boh8xGbL0bXzvpNWQQlc9gAkVEwFDwN5qoAl3gFxf7aCRqvKmmWemm2UEgCV9QdZCDPnGgT4AhTuHlaCGs2dUhXCl%2BR1DPI30q211iClMLgv6yFeRWaM4e2W%2F0XTNIiKXCvYF8nhXc%2F6O4TDC95DEBjqkAffzmGXufh5UQIMbK7sOAF%2Fq2LlYQ2G3BcbdoLFXABsw6gN9eiGf7B4m5kCvt5a2fOSf3ht%2FPQuSEqyIDQX3e3HPpq9po26OZB1WOG8mJcN03hkrlMpkOaJf1jtdwoevRkWF3xeuNUQjQYT8K%2FAYYRksWn6rWxc4If5LPDc8pzp1mywmu1TmCW5EazsxxeeL1pgeKTv0ORBnYLfQ7zqYfw5F9rSA&X-Amz-Signature=2f272daff1aca73b4599ea08f8e7831f0486d5699542a81dd2f2aec0ae4518c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVPSZM56%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCICMm5x9xQ5PKJJs4FS7kBNDwSPLprsMmSj06xQn6lnQIhAOqXDT%2FVQ6vw64tGb%2FTGHOWrzzYtDZCM%2Bt3Yd2vMd77%2BKv8DCFMQABoMNjM3NDIzMTgzODA1Igz0XTtqAPAB9McgpzQq3AOmmbeilNcqa85AVoV7aSFtDLQICOFigaf3mjeY%2B4Rxtnr%2F5hIPSI4G1Y0VtcqDqV53O9t9jXI6b%2Bpl1rR9h4wTwnC7UT2f8Dzed1mJbza7RLeeNs0Ei%2FKVkNtkNiLGyeXO%2FHokQZtsbd%2BZI1qsPchinUYd7gHhIwUCy%2FbU25QW7YyVAuzGOfwQx3YPuFKEm%2BJXQ8c7dwk%2BYwOOXCzDXNClV8%2FBXpnGlJ03X5thtFx%2Fw3UMdJbPod%2Bu%2BCqb%2FnO9KVG%2Byc3BiTHfh4344hdBGAfWxnj3wve5ymNUFeNUUtI0oyp17IjUCfPjNApOt8ge5qKKFAfDZx8vZmLiHFovmsUoRDxZcNPlY6jsPC03XW2C0LOJLBjZQN42UrcJMoAOz%2FPhNK7Ow0I%2FqFkOQoENLb%2BxrW%2Bx1uzxCyFc7Rjzy4ufGXmw7an8pHquVXzQpA0WbkBrC9fLEDw%2BnIegTPjNIsbwVkl%2BEjbTmy95L3e9bXLT%2FVz%2Boh8xGbL0bXzvpNWQQlc9gAkVEwFDwN5qoAl3gFxf7aCRqvKmmWemm2UEgCV9QdZCDPnGgT4AhTuHlaCGs2dUhXCl%2BR1DPI30q211iClMLgv6yFeRWaM4e2W%2F0XTNIiKXCvYF8nhXc%2F6O4TDC95DEBjqkAffzmGXufh5UQIMbK7sOAF%2Fq2LlYQ2G3BcbdoLFXABsw6gN9eiGf7B4m5kCvt5a2fOSf3ht%2FPQuSEqyIDQX3e3HPpq9po26OZB1WOG8mJcN03hkrlMpkOaJf1jtdwoevRkWF3xeuNUQjQYT8K%2FAYYRksWn6rWxc4If5LPDc8pzp1mywmu1TmCW5EazsxxeeL1pgeKTv0ORBnYLfQ7zqYfw5F9rSA&X-Amz-Signature=93f7bd2be8df1e068ec9e5fb3bb048dcdb6b0e527d33b8711ffd671ef09679c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVPSZM56%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCICMm5x9xQ5PKJJs4FS7kBNDwSPLprsMmSj06xQn6lnQIhAOqXDT%2FVQ6vw64tGb%2FTGHOWrzzYtDZCM%2Bt3Yd2vMd77%2BKv8DCFMQABoMNjM3NDIzMTgzODA1Igz0XTtqAPAB9McgpzQq3AOmmbeilNcqa85AVoV7aSFtDLQICOFigaf3mjeY%2B4Rxtnr%2F5hIPSI4G1Y0VtcqDqV53O9t9jXI6b%2Bpl1rR9h4wTwnC7UT2f8Dzed1mJbza7RLeeNs0Ei%2FKVkNtkNiLGyeXO%2FHokQZtsbd%2BZI1qsPchinUYd7gHhIwUCy%2FbU25QW7YyVAuzGOfwQx3YPuFKEm%2BJXQ8c7dwk%2BYwOOXCzDXNClV8%2FBXpnGlJ03X5thtFx%2Fw3UMdJbPod%2Bu%2BCqb%2FnO9KVG%2Byc3BiTHfh4344hdBGAfWxnj3wve5ymNUFeNUUtI0oyp17IjUCfPjNApOt8ge5qKKFAfDZx8vZmLiHFovmsUoRDxZcNPlY6jsPC03XW2C0LOJLBjZQN42UrcJMoAOz%2FPhNK7Ow0I%2FqFkOQoENLb%2BxrW%2Bx1uzxCyFc7Rjzy4ufGXmw7an8pHquVXzQpA0WbkBrC9fLEDw%2BnIegTPjNIsbwVkl%2BEjbTmy95L3e9bXLT%2FVz%2Boh8xGbL0bXzvpNWQQlc9gAkVEwFDwN5qoAl3gFxf7aCRqvKmmWemm2UEgCV9QdZCDPnGgT4AhTuHlaCGs2dUhXCl%2BR1DPI30q211iClMLgv6yFeRWaM4e2W%2F0XTNIiKXCvYF8nhXc%2F6O4TDC95DEBjqkAffzmGXufh5UQIMbK7sOAF%2Fq2LlYQ2G3BcbdoLFXABsw6gN9eiGf7B4m5kCvt5a2fOSf3ht%2FPQuSEqyIDQX3e3HPpq9po26OZB1WOG8mJcN03hkrlMpkOaJf1jtdwoevRkWF3xeuNUQjQYT8K%2FAYYRksWn6rWxc4If5LPDc8pzp1mywmu1TmCW5EazsxxeeL1pgeKTv0ORBnYLfQ7zqYfw5F9rSA&X-Amz-Signature=a6d887063602a0d0a9e73aa11124ced70a42abcfe0bcb3a3033dce14ee899804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVPSZM56%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCICMm5x9xQ5PKJJs4FS7kBNDwSPLprsMmSj06xQn6lnQIhAOqXDT%2FVQ6vw64tGb%2FTGHOWrzzYtDZCM%2Bt3Yd2vMd77%2BKv8DCFMQABoMNjM3NDIzMTgzODA1Igz0XTtqAPAB9McgpzQq3AOmmbeilNcqa85AVoV7aSFtDLQICOFigaf3mjeY%2B4Rxtnr%2F5hIPSI4G1Y0VtcqDqV53O9t9jXI6b%2Bpl1rR9h4wTwnC7UT2f8Dzed1mJbza7RLeeNs0Ei%2FKVkNtkNiLGyeXO%2FHokQZtsbd%2BZI1qsPchinUYd7gHhIwUCy%2FbU25QW7YyVAuzGOfwQx3YPuFKEm%2BJXQ8c7dwk%2BYwOOXCzDXNClV8%2FBXpnGlJ03X5thtFx%2Fw3UMdJbPod%2Bu%2BCqb%2FnO9KVG%2Byc3BiTHfh4344hdBGAfWxnj3wve5ymNUFeNUUtI0oyp17IjUCfPjNApOt8ge5qKKFAfDZx8vZmLiHFovmsUoRDxZcNPlY6jsPC03XW2C0LOJLBjZQN42UrcJMoAOz%2FPhNK7Ow0I%2FqFkOQoENLb%2BxrW%2Bx1uzxCyFc7Rjzy4ufGXmw7an8pHquVXzQpA0WbkBrC9fLEDw%2BnIegTPjNIsbwVkl%2BEjbTmy95L3e9bXLT%2FVz%2Boh8xGbL0bXzvpNWQQlc9gAkVEwFDwN5qoAl3gFxf7aCRqvKmmWemm2UEgCV9QdZCDPnGgT4AhTuHlaCGs2dUhXCl%2BR1DPI30q211iClMLgv6yFeRWaM4e2W%2F0XTNIiKXCvYF8nhXc%2F6O4TDC95DEBjqkAffzmGXufh5UQIMbK7sOAF%2Fq2LlYQ2G3BcbdoLFXABsw6gN9eiGf7B4m5kCvt5a2fOSf3ht%2FPQuSEqyIDQX3e3HPpq9po26OZB1WOG8mJcN03hkrlMpkOaJf1jtdwoevRkWF3xeuNUQjQYT8K%2FAYYRksWn6rWxc4If5LPDc8pzp1mywmu1TmCW5EazsxxeeL1pgeKTv0ORBnYLfQ7zqYfw5F9rSA&X-Amz-Signature=99d594a7a92f5b79096ca2796dcd9459d1ab456e037b0273cdecb0d22a90b2c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVPSZM56%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCICMm5x9xQ5PKJJs4FS7kBNDwSPLprsMmSj06xQn6lnQIhAOqXDT%2FVQ6vw64tGb%2FTGHOWrzzYtDZCM%2Bt3Yd2vMd77%2BKv8DCFMQABoMNjM3NDIzMTgzODA1Igz0XTtqAPAB9McgpzQq3AOmmbeilNcqa85AVoV7aSFtDLQICOFigaf3mjeY%2B4Rxtnr%2F5hIPSI4G1Y0VtcqDqV53O9t9jXI6b%2Bpl1rR9h4wTwnC7UT2f8Dzed1mJbza7RLeeNs0Ei%2FKVkNtkNiLGyeXO%2FHokQZtsbd%2BZI1qsPchinUYd7gHhIwUCy%2FbU25QW7YyVAuzGOfwQx3YPuFKEm%2BJXQ8c7dwk%2BYwOOXCzDXNClV8%2FBXpnGlJ03X5thtFx%2Fw3UMdJbPod%2Bu%2BCqb%2FnO9KVG%2Byc3BiTHfh4344hdBGAfWxnj3wve5ymNUFeNUUtI0oyp17IjUCfPjNApOt8ge5qKKFAfDZx8vZmLiHFovmsUoRDxZcNPlY6jsPC03XW2C0LOJLBjZQN42UrcJMoAOz%2FPhNK7Ow0I%2FqFkOQoENLb%2BxrW%2Bx1uzxCyFc7Rjzy4ufGXmw7an8pHquVXzQpA0WbkBrC9fLEDw%2BnIegTPjNIsbwVkl%2BEjbTmy95L3e9bXLT%2FVz%2Boh8xGbL0bXzvpNWQQlc9gAkVEwFDwN5qoAl3gFxf7aCRqvKmmWemm2UEgCV9QdZCDPnGgT4AhTuHlaCGs2dUhXCl%2BR1DPI30q211iClMLgv6yFeRWaM4e2W%2F0XTNIiKXCvYF8nhXc%2F6O4TDC95DEBjqkAffzmGXufh5UQIMbK7sOAF%2Fq2LlYQ2G3BcbdoLFXABsw6gN9eiGf7B4m5kCvt5a2fOSf3ht%2FPQuSEqyIDQX3e3HPpq9po26OZB1WOG8mJcN03hkrlMpkOaJf1jtdwoevRkWF3xeuNUQjQYT8K%2FAYYRksWn6rWxc4If5LPDc8pzp1mywmu1TmCW5EazsxxeeL1pgeKTv0ORBnYLfQ7zqYfw5F9rSA&X-Amz-Signature=7694ff9300879840ad31c3ef6aa3565b505343f02e8b006bb7b4f1662afc9d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVPSZM56%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCICMm5x9xQ5PKJJs4FS7kBNDwSPLprsMmSj06xQn6lnQIhAOqXDT%2FVQ6vw64tGb%2FTGHOWrzzYtDZCM%2Bt3Yd2vMd77%2BKv8DCFMQABoMNjM3NDIzMTgzODA1Igz0XTtqAPAB9McgpzQq3AOmmbeilNcqa85AVoV7aSFtDLQICOFigaf3mjeY%2B4Rxtnr%2F5hIPSI4G1Y0VtcqDqV53O9t9jXI6b%2Bpl1rR9h4wTwnC7UT2f8Dzed1mJbza7RLeeNs0Ei%2FKVkNtkNiLGyeXO%2FHokQZtsbd%2BZI1qsPchinUYd7gHhIwUCy%2FbU25QW7YyVAuzGOfwQx3YPuFKEm%2BJXQ8c7dwk%2BYwOOXCzDXNClV8%2FBXpnGlJ03X5thtFx%2Fw3UMdJbPod%2Bu%2BCqb%2FnO9KVG%2Byc3BiTHfh4344hdBGAfWxnj3wve5ymNUFeNUUtI0oyp17IjUCfPjNApOt8ge5qKKFAfDZx8vZmLiHFovmsUoRDxZcNPlY6jsPC03XW2C0LOJLBjZQN42UrcJMoAOz%2FPhNK7Ow0I%2FqFkOQoENLb%2BxrW%2Bx1uzxCyFc7Rjzy4ufGXmw7an8pHquVXzQpA0WbkBrC9fLEDw%2BnIegTPjNIsbwVkl%2BEjbTmy95L3e9bXLT%2FVz%2Boh8xGbL0bXzvpNWQQlc9gAkVEwFDwN5qoAl3gFxf7aCRqvKmmWemm2UEgCV9QdZCDPnGgT4AhTuHlaCGs2dUhXCl%2BR1DPI30q211iClMLgv6yFeRWaM4e2W%2F0XTNIiKXCvYF8nhXc%2F6O4TDC95DEBjqkAffzmGXufh5UQIMbK7sOAF%2Fq2LlYQ2G3BcbdoLFXABsw6gN9eiGf7B4m5kCvt5a2fOSf3ht%2FPQuSEqyIDQX3e3HPpq9po26OZB1WOG8mJcN03hkrlMpkOaJf1jtdwoevRkWF3xeuNUQjQYT8K%2FAYYRksWn6rWxc4If5LPDc8pzp1mywmu1TmCW5EazsxxeeL1pgeKTv0ORBnYLfQ7zqYfw5F9rSA&X-Amz-Signature=7fc0d48afa5d9672d4190cbd3f3334ebbb4cd80087bc68b960b029c5e7605147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVPSZM56%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCICMm5x9xQ5PKJJs4FS7kBNDwSPLprsMmSj06xQn6lnQIhAOqXDT%2FVQ6vw64tGb%2FTGHOWrzzYtDZCM%2Bt3Yd2vMd77%2BKv8DCFMQABoMNjM3NDIzMTgzODA1Igz0XTtqAPAB9McgpzQq3AOmmbeilNcqa85AVoV7aSFtDLQICOFigaf3mjeY%2B4Rxtnr%2F5hIPSI4G1Y0VtcqDqV53O9t9jXI6b%2Bpl1rR9h4wTwnC7UT2f8Dzed1mJbza7RLeeNs0Ei%2FKVkNtkNiLGyeXO%2FHokQZtsbd%2BZI1qsPchinUYd7gHhIwUCy%2FbU25QW7YyVAuzGOfwQx3YPuFKEm%2BJXQ8c7dwk%2BYwOOXCzDXNClV8%2FBXpnGlJ03X5thtFx%2Fw3UMdJbPod%2Bu%2BCqb%2FnO9KVG%2Byc3BiTHfh4344hdBGAfWxnj3wve5ymNUFeNUUtI0oyp17IjUCfPjNApOt8ge5qKKFAfDZx8vZmLiHFovmsUoRDxZcNPlY6jsPC03XW2C0LOJLBjZQN42UrcJMoAOz%2FPhNK7Ow0I%2FqFkOQoENLb%2BxrW%2Bx1uzxCyFc7Rjzy4ufGXmw7an8pHquVXzQpA0WbkBrC9fLEDw%2BnIegTPjNIsbwVkl%2BEjbTmy95L3e9bXLT%2FVz%2Boh8xGbL0bXzvpNWQQlc9gAkVEwFDwN5qoAl3gFxf7aCRqvKmmWemm2UEgCV9QdZCDPnGgT4AhTuHlaCGs2dUhXCl%2BR1DPI30q211iClMLgv6yFeRWaM4e2W%2F0XTNIiKXCvYF8nhXc%2F6O4TDC95DEBjqkAffzmGXufh5UQIMbK7sOAF%2Fq2LlYQ2G3BcbdoLFXABsw6gN9eiGf7B4m5kCvt5a2fOSf3ht%2FPQuSEqyIDQX3e3HPpq9po26OZB1WOG8mJcN03hkrlMpkOaJf1jtdwoevRkWF3xeuNUQjQYT8K%2FAYYRksWn6rWxc4If5LPDc8pzp1mywmu1TmCW5EazsxxeeL1pgeKTv0ORBnYLfQ7zqYfw5F9rSA&X-Amz-Signature=98d1bbce2c8d8b6a8241f3b6c191b4075a1a3e836c4f508b5c993a5fd6bf1109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVPSZM56%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCICMm5x9xQ5PKJJs4FS7kBNDwSPLprsMmSj06xQn6lnQIhAOqXDT%2FVQ6vw64tGb%2FTGHOWrzzYtDZCM%2Bt3Yd2vMd77%2BKv8DCFMQABoMNjM3NDIzMTgzODA1Igz0XTtqAPAB9McgpzQq3AOmmbeilNcqa85AVoV7aSFtDLQICOFigaf3mjeY%2B4Rxtnr%2F5hIPSI4G1Y0VtcqDqV53O9t9jXI6b%2Bpl1rR9h4wTwnC7UT2f8Dzed1mJbza7RLeeNs0Ei%2FKVkNtkNiLGyeXO%2FHokQZtsbd%2BZI1qsPchinUYd7gHhIwUCy%2FbU25QW7YyVAuzGOfwQx3YPuFKEm%2BJXQ8c7dwk%2BYwOOXCzDXNClV8%2FBXpnGlJ03X5thtFx%2Fw3UMdJbPod%2Bu%2BCqb%2FnO9KVG%2Byc3BiTHfh4344hdBGAfWxnj3wve5ymNUFeNUUtI0oyp17IjUCfPjNApOt8ge5qKKFAfDZx8vZmLiHFovmsUoRDxZcNPlY6jsPC03XW2C0LOJLBjZQN42UrcJMoAOz%2FPhNK7Ow0I%2FqFkOQoENLb%2BxrW%2Bx1uzxCyFc7Rjzy4ufGXmw7an8pHquVXzQpA0WbkBrC9fLEDw%2BnIegTPjNIsbwVkl%2BEjbTmy95L3e9bXLT%2FVz%2Boh8xGbL0bXzvpNWQQlc9gAkVEwFDwN5qoAl3gFxf7aCRqvKmmWemm2UEgCV9QdZCDPnGgT4AhTuHlaCGs2dUhXCl%2BR1DPI30q211iClMLgv6yFeRWaM4e2W%2F0XTNIiKXCvYF8nhXc%2F6O4TDC95DEBjqkAffzmGXufh5UQIMbK7sOAF%2Fq2LlYQ2G3BcbdoLFXABsw6gN9eiGf7B4m5kCvt5a2fOSf3ht%2FPQuSEqyIDQX3e3HPpq9po26OZB1WOG8mJcN03hkrlMpkOaJf1jtdwoevRkWF3xeuNUQjQYT8K%2FAYYRksWn6rWxc4If5LPDc8pzp1mywmu1TmCW5EazsxxeeL1pgeKTv0ORBnYLfQ7zqYfw5F9rSA&X-Amz-Signature=e8c129f02445d6be858c7fc6ac8ac7e0fb72752ccee846664d79e78ce3d94291&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVPSZM56%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCICMm5x9xQ5PKJJs4FS7kBNDwSPLprsMmSj06xQn6lnQIhAOqXDT%2FVQ6vw64tGb%2FTGHOWrzzYtDZCM%2Bt3Yd2vMd77%2BKv8DCFMQABoMNjM3NDIzMTgzODA1Igz0XTtqAPAB9McgpzQq3AOmmbeilNcqa85AVoV7aSFtDLQICOFigaf3mjeY%2B4Rxtnr%2F5hIPSI4G1Y0VtcqDqV53O9t9jXI6b%2Bpl1rR9h4wTwnC7UT2f8Dzed1mJbza7RLeeNs0Ei%2FKVkNtkNiLGyeXO%2FHokQZtsbd%2BZI1qsPchinUYd7gHhIwUCy%2FbU25QW7YyVAuzGOfwQx3YPuFKEm%2BJXQ8c7dwk%2BYwOOXCzDXNClV8%2FBXpnGlJ03X5thtFx%2Fw3UMdJbPod%2Bu%2BCqb%2FnO9KVG%2Byc3BiTHfh4344hdBGAfWxnj3wve5ymNUFeNUUtI0oyp17IjUCfPjNApOt8ge5qKKFAfDZx8vZmLiHFovmsUoRDxZcNPlY6jsPC03XW2C0LOJLBjZQN42UrcJMoAOz%2FPhNK7Ow0I%2FqFkOQoENLb%2BxrW%2Bx1uzxCyFc7Rjzy4ufGXmw7an8pHquVXzQpA0WbkBrC9fLEDw%2BnIegTPjNIsbwVkl%2BEjbTmy95L3e9bXLT%2FVz%2Boh8xGbL0bXzvpNWQQlc9gAkVEwFDwN5qoAl3gFxf7aCRqvKmmWemm2UEgCV9QdZCDPnGgT4AhTuHlaCGs2dUhXCl%2BR1DPI30q211iClMLgv6yFeRWaM4e2W%2F0XTNIiKXCvYF8nhXc%2F6O4TDC95DEBjqkAffzmGXufh5UQIMbK7sOAF%2Fq2LlYQ2G3BcbdoLFXABsw6gN9eiGf7B4m5kCvt5a2fOSf3ht%2FPQuSEqyIDQX3e3HPpq9po26OZB1WOG8mJcN03hkrlMpkOaJf1jtdwoevRkWF3xeuNUQjQYT8K%2FAYYRksWn6rWxc4If5LPDc8pzp1mywmu1TmCW5EazsxxeeL1pgeKTv0ORBnYLfQ7zqYfw5F9rSA&X-Amz-Signature=00f749ce29bf853f4db05168573818e2eb43b1e3982ff5b62dcc456d1a3f2179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVPSZM56%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCICMm5x9xQ5PKJJs4FS7kBNDwSPLprsMmSj06xQn6lnQIhAOqXDT%2FVQ6vw64tGb%2FTGHOWrzzYtDZCM%2Bt3Yd2vMd77%2BKv8DCFMQABoMNjM3NDIzMTgzODA1Igz0XTtqAPAB9McgpzQq3AOmmbeilNcqa85AVoV7aSFtDLQICOFigaf3mjeY%2B4Rxtnr%2F5hIPSI4G1Y0VtcqDqV53O9t9jXI6b%2Bpl1rR9h4wTwnC7UT2f8Dzed1mJbza7RLeeNs0Ei%2FKVkNtkNiLGyeXO%2FHokQZtsbd%2BZI1qsPchinUYd7gHhIwUCy%2FbU25QW7YyVAuzGOfwQx3YPuFKEm%2BJXQ8c7dwk%2BYwOOXCzDXNClV8%2FBXpnGlJ03X5thtFx%2Fw3UMdJbPod%2Bu%2BCqb%2FnO9KVG%2Byc3BiTHfh4344hdBGAfWxnj3wve5ymNUFeNUUtI0oyp17IjUCfPjNApOt8ge5qKKFAfDZx8vZmLiHFovmsUoRDxZcNPlY6jsPC03XW2C0LOJLBjZQN42UrcJMoAOz%2FPhNK7Ow0I%2FqFkOQoENLb%2BxrW%2Bx1uzxCyFc7Rjzy4ufGXmw7an8pHquVXzQpA0WbkBrC9fLEDw%2BnIegTPjNIsbwVkl%2BEjbTmy95L3e9bXLT%2FVz%2Boh8xGbL0bXzvpNWQQlc9gAkVEwFDwN5qoAl3gFxf7aCRqvKmmWemm2UEgCV9QdZCDPnGgT4AhTuHlaCGs2dUhXCl%2BR1DPI30q211iClMLgv6yFeRWaM4e2W%2F0XTNIiKXCvYF8nhXc%2F6O4TDC95DEBjqkAffzmGXufh5UQIMbK7sOAF%2Fq2LlYQ2G3BcbdoLFXABsw6gN9eiGf7B4m5kCvt5a2fOSf3ht%2FPQuSEqyIDQX3e3HPpq9po26OZB1WOG8mJcN03hkrlMpkOaJf1jtdwoevRkWF3xeuNUQjQYT8K%2FAYYRksWn6rWxc4If5LPDc8pzp1mywmu1TmCW5EazsxxeeL1pgeKTv0ORBnYLfQ7zqYfw5F9rSA&X-Amz-Signature=4ebbc9cfe286343cb13675a7ef09774387a7b91124c615179323447e958a2c01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVPSZM56%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCICMm5x9xQ5PKJJs4FS7kBNDwSPLprsMmSj06xQn6lnQIhAOqXDT%2FVQ6vw64tGb%2FTGHOWrzzYtDZCM%2Bt3Yd2vMd77%2BKv8DCFMQABoMNjM3NDIzMTgzODA1Igz0XTtqAPAB9McgpzQq3AOmmbeilNcqa85AVoV7aSFtDLQICOFigaf3mjeY%2B4Rxtnr%2F5hIPSI4G1Y0VtcqDqV53O9t9jXI6b%2Bpl1rR9h4wTwnC7UT2f8Dzed1mJbza7RLeeNs0Ei%2FKVkNtkNiLGyeXO%2FHokQZtsbd%2BZI1qsPchinUYd7gHhIwUCy%2FbU25QW7YyVAuzGOfwQx3YPuFKEm%2BJXQ8c7dwk%2BYwOOXCzDXNClV8%2FBXpnGlJ03X5thtFx%2Fw3UMdJbPod%2Bu%2BCqb%2FnO9KVG%2Byc3BiTHfh4344hdBGAfWxnj3wve5ymNUFeNUUtI0oyp17IjUCfPjNApOt8ge5qKKFAfDZx8vZmLiHFovmsUoRDxZcNPlY6jsPC03XW2C0LOJLBjZQN42UrcJMoAOz%2FPhNK7Ow0I%2FqFkOQoENLb%2BxrW%2Bx1uzxCyFc7Rjzy4ufGXmw7an8pHquVXzQpA0WbkBrC9fLEDw%2BnIegTPjNIsbwVkl%2BEjbTmy95L3e9bXLT%2FVz%2Boh8xGbL0bXzvpNWQQlc9gAkVEwFDwN5qoAl3gFxf7aCRqvKmmWemm2UEgCV9QdZCDPnGgT4AhTuHlaCGs2dUhXCl%2BR1DPI30q211iClMLgv6yFeRWaM4e2W%2F0XTNIiKXCvYF8nhXc%2F6O4TDC95DEBjqkAffzmGXufh5UQIMbK7sOAF%2Fq2LlYQ2G3BcbdoLFXABsw6gN9eiGf7B4m5kCvt5a2fOSf3ht%2FPQuSEqyIDQX3e3HPpq9po26OZB1WOG8mJcN03hkrlMpkOaJf1jtdwoevRkWF3xeuNUQjQYT8K%2FAYYRksWn6rWxc4If5LPDc8pzp1mywmu1TmCW5EazsxxeeL1pgeKTv0ORBnYLfQ7zqYfw5F9rSA&X-Amz-Signature=771a8e8702f148a0f84486300d864fbfcc1ddfe8b65ffd607c81dcb4d2f89ecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVPSZM56%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCICMm5x9xQ5PKJJs4FS7kBNDwSPLprsMmSj06xQn6lnQIhAOqXDT%2FVQ6vw64tGb%2FTGHOWrzzYtDZCM%2Bt3Yd2vMd77%2BKv8DCFMQABoMNjM3NDIzMTgzODA1Igz0XTtqAPAB9McgpzQq3AOmmbeilNcqa85AVoV7aSFtDLQICOFigaf3mjeY%2B4Rxtnr%2F5hIPSI4G1Y0VtcqDqV53O9t9jXI6b%2Bpl1rR9h4wTwnC7UT2f8Dzed1mJbza7RLeeNs0Ei%2FKVkNtkNiLGyeXO%2FHokQZtsbd%2BZI1qsPchinUYd7gHhIwUCy%2FbU25QW7YyVAuzGOfwQx3YPuFKEm%2BJXQ8c7dwk%2BYwOOXCzDXNClV8%2FBXpnGlJ03X5thtFx%2Fw3UMdJbPod%2Bu%2BCqb%2FnO9KVG%2Byc3BiTHfh4344hdBGAfWxnj3wve5ymNUFeNUUtI0oyp17IjUCfPjNApOt8ge5qKKFAfDZx8vZmLiHFovmsUoRDxZcNPlY6jsPC03XW2C0LOJLBjZQN42UrcJMoAOz%2FPhNK7Ow0I%2FqFkOQoENLb%2BxrW%2Bx1uzxCyFc7Rjzy4ufGXmw7an8pHquVXzQpA0WbkBrC9fLEDw%2BnIegTPjNIsbwVkl%2BEjbTmy95L3e9bXLT%2FVz%2Boh8xGbL0bXzvpNWQQlc9gAkVEwFDwN5qoAl3gFxf7aCRqvKmmWemm2UEgCV9QdZCDPnGgT4AhTuHlaCGs2dUhXCl%2BR1DPI30q211iClMLgv6yFeRWaM4e2W%2F0XTNIiKXCvYF8nhXc%2F6O4TDC95DEBjqkAffzmGXufh5UQIMbK7sOAF%2Fq2LlYQ2G3BcbdoLFXABsw6gN9eiGf7B4m5kCvt5a2fOSf3ht%2FPQuSEqyIDQX3e3HPpq9po26OZB1WOG8mJcN03hkrlMpkOaJf1jtdwoevRkWF3xeuNUQjQYT8K%2FAYYRksWn6rWxc4If5LPDc8pzp1mywmu1TmCW5EazsxxeeL1pgeKTv0ORBnYLfQ7zqYfw5F9rSA&X-Amz-Signature=59f49116775cd22bfa81b304b9e7f5affb24cb838245936e7c4efdddc2faac05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVPSZM56%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCICMm5x9xQ5PKJJs4FS7kBNDwSPLprsMmSj06xQn6lnQIhAOqXDT%2FVQ6vw64tGb%2FTGHOWrzzYtDZCM%2Bt3Yd2vMd77%2BKv8DCFMQABoMNjM3NDIzMTgzODA1Igz0XTtqAPAB9McgpzQq3AOmmbeilNcqa85AVoV7aSFtDLQICOFigaf3mjeY%2B4Rxtnr%2F5hIPSI4G1Y0VtcqDqV53O9t9jXI6b%2Bpl1rR9h4wTwnC7UT2f8Dzed1mJbza7RLeeNs0Ei%2FKVkNtkNiLGyeXO%2FHokQZtsbd%2BZI1qsPchinUYd7gHhIwUCy%2FbU25QW7YyVAuzGOfwQx3YPuFKEm%2BJXQ8c7dwk%2BYwOOXCzDXNClV8%2FBXpnGlJ03X5thtFx%2Fw3UMdJbPod%2Bu%2BCqb%2FnO9KVG%2Byc3BiTHfh4344hdBGAfWxnj3wve5ymNUFeNUUtI0oyp17IjUCfPjNApOt8ge5qKKFAfDZx8vZmLiHFovmsUoRDxZcNPlY6jsPC03XW2C0LOJLBjZQN42UrcJMoAOz%2FPhNK7Ow0I%2FqFkOQoENLb%2BxrW%2Bx1uzxCyFc7Rjzy4ufGXmw7an8pHquVXzQpA0WbkBrC9fLEDw%2BnIegTPjNIsbwVkl%2BEjbTmy95L3e9bXLT%2FVz%2Boh8xGbL0bXzvpNWQQlc9gAkVEwFDwN5qoAl3gFxf7aCRqvKmmWemm2UEgCV9QdZCDPnGgT4AhTuHlaCGs2dUhXCl%2BR1DPI30q211iClMLgv6yFeRWaM4e2W%2F0XTNIiKXCvYF8nhXc%2F6O4TDC95DEBjqkAffzmGXufh5UQIMbK7sOAF%2Fq2LlYQ2G3BcbdoLFXABsw6gN9eiGf7B4m5kCvt5a2fOSf3ht%2FPQuSEqyIDQX3e3HPpq9po26OZB1WOG8mJcN03hkrlMpkOaJf1jtdwoevRkWF3xeuNUQjQYT8K%2FAYYRksWn6rWxc4If5LPDc8pzp1mywmu1TmCW5EazsxxeeL1pgeKTv0ORBnYLfQ7zqYfw5F9rSA&X-Amz-Signature=cc2de1413976d54bea8032e9b559d28d300a8941e8086a002a7163a5ce5c5856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5VKIQEK%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEXu2S7nC3mNec3RtfCTVjsV0chpJi0%2BARllMuBxMjvLAiAY%2BczCBVBFppZXJRs8%2B15XeoJNjTgV06uIfRvEBP2pNSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMOTm8R5MFbSPtUrmmKtwDGU9K9IGpdzviyZ316U0HMSTofiLyt%2FeXdGsu%2BkLNAKThGiFZ6byMP7nWP9oBM%2FQjUju7u%2F9EYGb2okqWM5HTUaix9bCs%2Bo515M2TJIpCzStEM60ecpTtrm%2F7NUf4ykC5FZRBt530WO%2FLSZT73l8oxjXkHT7oTr1QIYM53KPZjWQ1p3nF%2Biz1i%2FBtCW9mWEyU2MpW0OhFhCR1A0jUtcV%2BQ68CQEerBD6Zbb6Whe7B2S54HYVESh17ZLCCBW7bexytgsJejH%2FGfw3E%2FiafkGBzRps5YROYCAO7XH1ynbcC1wXj4kXbNzCOQx680NYvcXFwxPUq6UQH8i%2FHAbYaQ8GGPArMQpfoyEHlQzrGK0q4%2F8wYXn4omtbUal6IaD7%2FQ1NJ0oQWFIC07yeFd3Fy1Q0vqKKDfD3nyTwtlDwqUZruXnpXFtpZnKfqSnB2jwPdZt3NUnrlbIN08CzblZiKsDSS8jVTiogUHzKjLI7Ff9K2Ow8Jj%2F%2F1oq59yHE66QGJUbA%2BYLl3tFGbqQi3HACqziWAJRO4u7sPLEfrfrfP5CpIxiS9BghTz2hkBSgNbzOAPsdNIyERPZbTnFpg6paB6ngSpUX6UcwI7uTQUl4WetzoG7zE1po9HACOfvNtQ0wwtPSQxAY6pgHmtXauOQLAYh3KwRK8NpOYbWDk1J5YKi3w5iKwtRk%2B1Dl8ft3rf0XX7icyiw4yKaEzYdAhQ0AM2vNLO%2FCn%2BUfzf3fyBos9UyOAtBTIr%2BDz5%2FqvQPeHYHs9shTyDvZs3DDsRHVj0JPg3VsH%2FdjHY4qje%2F%2BZnsQmK5GvjZnVVATWjAMFHi%2FLO6tYi5Yqrn%2Blfxbvu38uQVuQARkT%2Fc6bQ5ZTrPHnBPbA&X-Amz-Signature=564118fb40e985d99ba043830765a171cdab257fc2a89217f853abf5a94da8b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5VKIQEK%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEXu2S7nC3mNec3RtfCTVjsV0chpJi0%2BARllMuBxMjvLAiAY%2BczCBVBFppZXJRs8%2B15XeoJNjTgV06uIfRvEBP2pNSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMOTm8R5MFbSPtUrmmKtwDGU9K9IGpdzviyZ316U0HMSTofiLyt%2FeXdGsu%2BkLNAKThGiFZ6byMP7nWP9oBM%2FQjUju7u%2F9EYGb2okqWM5HTUaix9bCs%2Bo515M2TJIpCzStEM60ecpTtrm%2F7NUf4ykC5FZRBt530WO%2FLSZT73l8oxjXkHT7oTr1QIYM53KPZjWQ1p3nF%2Biz1i%2FBtCW9mWEyU2MpW0OhFhCR1A0jUtcV%2BQ68CQEerBD6Zbb6Whe7B2S54HYVESh17ZLCCBW7bexytgsJejH%2FGfw3E%2FiafkGBzRps5YROYCAO7XH1ynbcC1wXj4kXbNzCOQx680NYvcXFwxPUq6UQH8i%2FHAbYaQ8GGPArMQpfoyEHlQzrGK0q4%2F8wYXn4omtbUal6IaD7%2FQ1NJ0oQWFIC07yeFd3Fy1Q0vqKKDfD3nyTwtlDwqUZruXnpXFtpZnKfqSnB2jwPdZt3NUnrlbIN08CzblZiKsDSS8jVTiogUHzKjLI7Ff9K2Ow8Jj%2F%2F1oq59yHE66QGJUbA%2BYLl3tFGbqQi3HACqziWAJRO4u7sPLEfrfrfP5CpIxiS9BghTz2hkBSgNbzOAPsdNIyERPZbTnFpg6paB6ngSpUX6UcwI7uTQUl4WetzoG7zE1po9HACOfvNtQ0wwtPSQxAY6pgHmtXauOQLAYh3KwRK8NpOYbWDk1J5YKi3w5iKwtRk%2B1Dl8ft3rf0XX7icyiw4yKaEzYdAhQ0AM2vNLO%2FCn%2BUfzf3fyBos9UyOAtBTIr%2BDz5%2FqvQPeHYHs9shTyDvZs3DDsRHVj0JPg3VsH%2FdjHY4qje%2F%2BZnsQmK5GvjZnVVATWjAMFHi%2FLO6tYi5Yqrn%2Blfxbvu38uQVuQARkT%2Fc6bQ5ZTrPHnBPbA&X-Amz-Signature=e481cf91a990e9306e35ed8ae0005c551eb502709adb5ced68155926c52d9016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5VKIQEK%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEXu2S7nC3mNec3RtfCTVjsV0chpJi0%2BARllMuBxMjvLAiAY%2BczCBVBFppZXJRs8%2B15XeoJNjTgV06uIfRvEBP2pNSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMOTm8R5MFbSPtUrmmKtwDGU9K9IGpdzviyZ316U0HMSTofiLyt%2FeXdGsu%2BkLNAKThGiFZ6byMP7nWP9oBM%2FQjUju7u%2F9EYGb2okqWM5HTUaix9bCs%2Bo515M2TJIpCzStEM60ecpTtrm%2F7NUf4ykC5FZRBt530WO%2FLSZT73l8oxjXkHT7oTr1QIYM53KPZjWQ1p3nF%2Biz1i%2FBtCW9mWEyU2MpW0OhFhCR1A0jUtcV%2BQ68CQEerBD6Zbb6Whe7B2S54HYVESh17ZLCCBW7bexytgsJejH%2FGfw3E%2FiafkGBzRps5YROYCAO7XH1ynbcC1wXj4kXbNzCOQx680NYvcXFwxPUq6UQH8i%2FHAbYaQ8GGPArMQpfoyEHlQzrGK0q4%2F8wYXn4omtbUal6IaD7%2FQ1NJ0oQWFIC07yeFd3Fy1Q0vqKKDfD3nyTwtlDwqUZruXnpXFtpZnKfqSnB2jwPdZt3NUnrlbIN08CzblZiKsDSS8jVTiogUHzKjLI7Ff9K2Ow8Jj%2F%2F1oq59yHE66QGJUbA%2BYLl3tFGbqQi3HACqziWAJRO4u7sPLEfrfrfP5CpIxiS9BghTz2hkBSgNbzOAPsdNIyERPZbTnFpg6paB6ngSpUX6UcwI7uTQUl4WetzoG7zE1po9HACOfvNtQ0wwtPSQxAY6pgHmtXauOQLAYh3KwRK8NpOYbWDk1J5YKi3w5iKwtRk%2B1Dl8ft3rf0XX7icyiw4yKaEzYdAhQ0AM2vNLO%2FCn%2BUfzf3fyBos9UyOAtBTIr%2BDz5%2FqvQPeHYHs9shTyDvZs3DDsRHVj0JPg3VsH%2FdjHY4qje%2F%2BZnsQmK5GvjZnVVATWjAMFHi%2FLO6tYi5Yqrn%2Blfxbvu38uQVuQARkT%2Fc6bQ5ZTrPHnBPbA&X-Amz-Signature=c809f0c119271d7bfcbcebbd65a0e14395dceda0019adadadd30c277013cf15a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5VKIQEK%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEXu2S7nC3mNec3RtfCTVjsV0chpJi0%2BARllMuBxMjvLAiAY%2BczCBVBFppZXJRs8%2B15XeoJNjTgV06uIfRvEBP2pNSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMOTm8R5MFbSPtUrmmKtwDGU9K9IGpdzviyZ316U0HMSTofiLyt%2FeXdGsu%2BkLNAKThGiFZ6byMP7nWP9oBM%2FQjUju7u%2F9EYGb2okqWM5HTUaix9bCs%2Bo515M2TJIpCzStEM60ecpTtrm%2F7NUf4ykC5FZRBt530WO%2FLSZT73l8oxjXkHT7oTr1QIYM53KPZjWQ1p3nF%2Biz1i%2FBtCW9mWEyU2MpW0OhFhCR1A0jUtcV%2BQ68CQEerBD6Zbb6Whe7B2S54HYVESh17ZLCCBW7bexytgsJejH%2FGfw3E%2FiafkGBzRps5YROYCAO7XH1ynbcC1wXj4kXbNzCOQx680NYvcXFwxPUq6UQH8i%2FHAbYaQ8GGPArMQpfoyEHlQzrGK0q4%2F8wYXn4omtbUal6IaD7%2FQ1NJ0oQWFIC07yeFd3Fy1Q0vqKKDfD3nyTwtlDwqUZruXnpXFtpZnKfqSnB2jwPdZt3NUnrlbIN08CzblZiKsDSS8jVTiogUHzKjLI7Ff9K2Ow8Jj%2F%2F1oq59yHE66QGJUbA%2BYLl3tFGbqQi3HACqziWAJRO4u7sPLEfrfrfP5CpIxiS9BghTz2hkBSgNbzOAPsdNIyERPZbTnFpg6paB6ngSpUX6UcwI7uTQUl4WetzoG7zE1po9HACOfvNtQ0wwtPSQxAY6pgHmtXauOQLAYh3KwRK8NpOYbWDk1J5YKi3w5iKwtRk%2B1Dl8ft3rf0XX7icyiw4yKaEzYdAhQ0AM2vNLO%2FCn%2BUfzf3fyBos9UyOAtBTIr%2BDz5%2FqvQPeHYHs9shTyDvZs3DDsRHVj0JPg3VsH%2FdjHY4qje%2F%2BZnsQmK5GvjZnVVATWjAMFHi%2FLO6tYi5Yqrn%2Blfxbvu38uQVuQARkT%2Fc6bQ5ZTrPHnBPbA&X-Amz-Signature=7694e14e8b89dc622ea5ae3e6caab2446158dc15e49e99baadaacb5446de2983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5VKIQEK%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEXu2S7nC3mNec3RtfCTVjsV0chpJi0%2BARllMuBxMjvLAiAY%2BczCBVBFppZXJRs8%2B15XeoJNjTgV06uIfRvEBP2pNSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMOTm8R5MFbSPtUrmmKtwDGU9K9IGpdzviyZ316U0HMSTofiLyt%2FeXdGsu%2BkLNAKThGiFZ6byMP7nWP9oBM%2FQjUju7u%2F9EYGb2okqWM5HTUaix9bCs%2Bo515M2TJIpCzStEM60ecpTtrm%2F7NUf4ykC5FZRBt530WO%2FLSZT73l8oxjXkHT7oTr1QIYM53KPZjWQ1p3nF%2Biz1i%2FBtCW9mWEyU2MpW0OhFhCR1A0jUtcV%2BQ68CQEerBD6Zbb6Whe7B2S54HYVESh17ZLCCBW7bexytgsJejH%2FGfw3E%2FiafkGBzRps5YROYCAO7XH1ynbcC1wXj4kXbNzCOQx680NYvcXFwxPUq6UQH8i%2FHAbYaQ8GGPArMQpfoyEHlQzrGK0q4%2F8wYXn4omtbUal6IaD7%2FQ1NJ0oQWFIC07yeFd3Fy1Q0vqKKDfD3nyTwtlDwqUZruXnpXFtpZnKfqSnB2jwPdZt3NUnrlbIN08CzblZiKsDSS8jVTiogUHzKjLI7Ff9K2Ow8Jj%2F%2F1oq59yHE66QGJUbA%2BYLl3tFGbqQi3HACqziWAJRO4u7sPLEfrfrfP5CpIxiS9BghTz2hkBSgNbzOAPsdNIyERPZbTnFpg6paB6ngSpUX6UcwI7uTQUl4WetzoG7zE1po9HACOfvNtQ0wwtPSQxAY6pgHmtXauOQLAYh3KwRK8NpOYbWDk1J5YKi3w5iKwtRk%2B1Dl8ft3rf0XX7icyiw4yKaEzYdAhQ0AM2vNLO%2FCn%2BUfzf3fyBos9UyOAtBTIr%2BDz5%2FqvQPeHYHs9shTyDvZs3DDsRHVj0JPg3VsH%2FdjHY4qje%2F%2BZnsQmK5GvjZnVVATWjAMFHi%2FLO6tYi5Yqrn%2Blfxbvu38uQVuQARkT%2Fc6bQ5ZTrPHnBPbA&X-Amz-Signature=28eeee2f209a95bbd4cbf13a89a3ae45812478cd9cc17cdd364aff069a70ea4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5VKIQEK%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEXu2S7nC3mNec3RtfCTVjsV0chpJi0%2BARllMuBxMjvLAiAY%2BczCBVBFppZXJRs8%2B15XeoJNjTgV06uIfRvEBP2pNSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMOTm8R5MFbSPtUrmmKtwDGU9K9IGpdzviyZ316U0HMSTofiLyt%2FeXdGsu%2BkLNAKThGiFZ6byMP7nWP9oBM%2FQjUju7u%2F9EYGb2okqWM5HTUaix9bCs%2Bo515M2TJIpCzStEM60ecpTtrm%2F7NUf4ykC5FZRBt530WO%2FLSZT73l8oxjXkHT7oTr1QIYM53KPZjWQ1p3nF%2Biz1i%2FBtCW9mWEyU2MpW0OhFhCR1A0jUtcV%2BQ68CQEerBD6Zbb6Whe7B2S54HYVESh17ZLCCBW7bexytgsJejH%2FGfw3E%2FiafkGBzRps5YROYCAO7XH1ynbcC1wXj4kXbNzCOQx680NYvcXFwxPUq6UQH8i%2FHAbYaQ8GGPArMQpfoyEHlQzrGK0q4%2F8wYXn4omtbUal6IaD7%2FQ1NJ0oQWFIC07yeFd3Fy1Q0vqKKDfD3nyTwtlDwqUZruXnpXFtpZnKfqSnB2jwPdZt3NUnrlbIN08CzblZiKsDSS8jVTiogUHzKjLI7Ff9K2Ow8Jj%2F%2F1oq59yHE66QGJUbA%2BYLl3tFGbqQi3HACqziWAJRO4u7sPLEfrfrfP5CpIxiS9BghTz2hkBSgNbzOAPsdNIyERPZbTnFpg6paB6ngSpUX6UcwI7uTQUl4WetzoG7zE1po9HACOfvNtQ0wwtPSQxAY6pgHmtXauOQLAYh3KwRK8NpOYbWDk1J5YKi3w5iKwtRk%2B1Dl8ft3rf0XX7icyiw4yKaEzYdAhQ0AM2vNLO%2FCn%2BUfzf3fyBos9UyOAtBTIr%2BDz5%2FqvQPeHYHs9shTyDvZs3DDsRHVj0JPg3VsH%2FdjHY4qje%2F%2BZnsQmK5GvjZnVVATWjAMFHi%2FLO6tYi5Yqrn%2Blfxbvu38uQVuQARkT%2Fc6bQ5ZTrPHnBPbA&X-Amz-Signature=f7cb63cd369fdc210a9d9ad999963d987a44ac62004820ed03b8611323f5ea9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
