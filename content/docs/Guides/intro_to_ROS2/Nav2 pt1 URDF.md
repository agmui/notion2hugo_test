---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T23:07:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T23:07:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TW3ZBGZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC6hAI%2Bs6O%2BCOExC6gnRtImZ6SZAo7XMz3P1Cp%2Fr%2F56EAIhAPS11wCIGdXuSG0fSLshePjaOQCm1aiRQHKUqHy0Ns4vKv8DCDcQABoMNjM3NDIzMTgzODA1IgxteC%2BNYEk8ATPQiRsq3AMJLjFrhfS%2Fao8lLbDKkul%2BKIUdBvqE%2BQTQYAvwPhsO1HYHVn1AiNiSZONlTFqRttpWzmj%2B%2FicA%2FOhP9zecTarhyCLnEyQMNfsD2CrIL%2F1wwmj0%2BB%2FNis0%2FNzxvbJ29yhI6z5KZ4aep7%2B0X7AK5KF%2B2tGnLNHdtwUODwCEyLVefkE4UMuUB75VqrQhofqxc%2BQz41wR1clFoNhbFWggAUyQQTXDilD5myYYXPkjkJ12ABn1aWvil37ADqkZNUIxNxc71d80NivS9gfcNFBUBaoafAoVdJiDUk8YAAk4ZezTOROneFkSCyIeTsoHoPsdM8nc%2Bd4i0sTJlkoVTRBqh8IYtvFCh887k62LA33Ip3cXu2EhUlxY84yg3abas0GrkcRe9sgApW9n6nQhcnUOiAZoDqIFi%2FCrM0gkbodK7z9ipwlTIPRDBy%2F0ICeyI4aYSlxww4k17wn37kIYzzoxTJxOkajavEFdCw4z1Ht0%2FTw6zQw%2BJIVcCBFlgoqdjr71OvV2C1wtwGEL5BHc%2B5rZ8sLeb0ljdtyPxH9OoN28kZeciuReFFGx4B%2FmVaoXj97NJSZSblmGNSZylOoljleGC%2F7Kc019PW9o0LAIvYR5e0i7k3WcxPZWqFwEvJWJ4sDD314rEBjqkAe171wt9rMwmgiDWCrxtRpxOglhMRAjgnkq8ir8%2Bxo45YVJbAQ3ORm%2Bp096TiWtX3VXGjEwCacs2zXW38Nyreu4a8RtxcemjOsPllxpATscUG1myRoivtQ8jPkDT20qAMWbqu2Rd31ZHi8Gm3z8%2FpT3LBTneWDj85sFZrKy2317tcXHBBYioZ0RdCIi64VYemBRYtMa8MF6JOagK%2F8eUekeS9Zdo&X-Amz-Signature=299eaf8dc4bcbac1aade2835c23d97b6c854f7d934f4470f616deff61db6e174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TW3ZBGZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC6hAI%2Bs6O%2BCOExC6gnRtImZ6SZAo7XMz3P1Cp%2Fr%2F56EAIhAPS11wCIGdXuSG0fSLshePjaOQCm1aiRQHKUqHy0Ns4vKv8DCDcQABoMNjM3NDIzMTgzODA1IgxteC%2BNYEk8ATPQiRsq3AMJLjFrhfS%2Fao8lLbDKkul%2BKIUdBvqE%2BQTQYAvwPhsO1HYHVn1AiNiSZONlTFqRttpWzmj%2B%2FicA%2FOhP9zecTarhyCLnEyQMNfsD2CrIL%2F1wwmj0%2BB%2FNis0%2FNzxvbJ29yhI6z5KZ4aep7%2B0X7AK5KF%2B2tGnLNHdtwUODwCEyLVefkE4UMuUB75VqrQhofqxc%2BQz41wR1clFoNhbFWggAUyQQTXDilD5myYYXPkjkJ12ABn1aWvil37ADqkZNUIxNxc71d80NivS9gfcNFBUBaoafAoVdJiDUk8YAAk4ZezTOROneFkSCyIeTsoHoPsdM8nc%2Bd4i0sTJlkoVTRBqh8IYtvFCh887k62LA33Ip3cXu2EhUlxY84yg3abas0GrkcRe9sgApW9n6nQhcnUOiAZoDqIFi%2FCrM0gkbodK7z9ipwlTIPRDBy%2F0ICeyI4aYSlxww4k17wn37kIYzzoxTJxOkajavEFdCw4z1Ht0%2FTw6zQw%2BJIVcCBFlgoqdjr71OvV2C1wtwGEL5BHc%2B5rZ8sLeb0ljdtyPxH9OoN28kZeciuReFFGx4B%2FmVaoXj97NJSZSblmGNSZylOoljleGC%2F7Kc019PW9o0LAIvYR5e0i7k3WcxPZWqFwEvJWJ4sDD314rEBjqkAe171wt9rMwmgiDWCrxtRpxOglhMRAjgnkq8ir8%2Bxo45YVJbAQ3ORm%2Bp096TiWtX3VXGjEwCacs2zXW38Nyreu4a8RtxcemjOsPllxpATscUG1myRoivtQ8jPkDT20qAMWbqu2Rd31ZHi8Gm3z8%2FpT3LBTneWDj85sFZrKy2317tcXHBBYioZ0RdCIi64VYemBRYtMa8MF6JOagK%2F8eUekeS9Zdo&X-Amz-Signature=a5fdac7509b8b95be909d0e799ba0ce21be0c0035df75f58e43b2fe8e5bf5056&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly highly HIGHLY recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TW3ZBGZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC6hAI%2Bs6O%2BCOExC6gnRtImZ6SZAo7XMz3P1Cp%2Fr%2F56EAIhAPS11wCIGdXuSG0fSLshePjaOQCm1aiRQHKUqHy0Ns4vKv8DCDcQABoMNjM3NDIzMTgzODA1IgxteC%2BNYEk8ATPQiRsq3AMJLjFrhfS%2Fao8lLbDKkul%2BKIUdBvqE%2BQTQYAvwPhsO1HYHVn1AiNiSZONlTFqRttpWzmj%2B%2FicA%2FOhP9zecTarhyCLnEyQMNfsD2CrIL%2F1wwmj0%2BB%2FNis0%2FNzxvbJ29yhI6z5KZ4aep7%2B0X7AK5KF%2B2tGnLNHdtwUODwCEyLVefkE4UMuUB75VqrQhofqxc%2BQz41wR1clFoNhbFWggAUyQQTXDilD5myYYXPkjkJ12ABn1aWvil37ADqkZNUIxNxc71d80NivS9gfcNFBUBaoafAoVdJiDUk8YAAk4ZezTOROneFkSCyIeTsoHoPsdM8nc%2Bd4i0sTJlkoVTRBqh8IYtvFCh887k62LA33Ip3cXu2EhUlxY84yg3abas0GrkcRe9sgApW9n6nQhcnUOiAZoDqIFi%2FCrM0gkbodK7z9ipwlTIPRDBy%2F0ICeyI4aYSlxww4k17wn37kIYzzoxTJxOkajavEFdCw4z1Ht0%2FTw6zQw%2BJIVcCBFlgoqdjr71OvV2C1wtwGEL5BHc%2B5rZ8sLeb0ljdtyPxH9OoN28kZeciuReFFGx4B%2FmVaoXj97NJSZSblmGNSZylOoljleGC%2F7Kc019PW9o0LAIvYR5e0i7k3WcxPZWqFwEvJWJ4sDD314rEBjqkAe171wt9rMwmgiDWCrxtRpxOglhMRAjgnkq8ir8%2Bxo45YVJbAQ3ORm%2Bp096TiWtX3VXGjEwCacs2zXW38Nyreu4a8RtxcemjOsPllxpATscUG1myRoivtQ8jPkDT20qAMWbqu2Rd31ZHi8Gm3z8%2FpT3LBTneWDj85sFZrKy2317tcXHBBYioZ0RdCIi64VYemBRYtMa8MF6JOagK%2F8eUekeS9Zdo&X-Amz-Signature=befdfaa952f9b52c9e7e679b1cf90de039d6b58bc12903180dc5361b4fe249b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are many reasons for this because

- keeps all your code in one place
- You don’t need a monitor, mouse, and keyboard to connect to your Raspberry Pi
- Your laptop is much much faster than your Raspberry Pi so debugging is faster
- Once you are done developing on your laptop all you have to do is copy all the files over to the Pi and Docker will automatically make it work

{{% /alert %}}

## creating workspace + package

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

If you are doing the Dev container setup put these at the bottom of your `Dockerfile`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TW3ZBGZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC6hAI%2Bs6O%2BCOExC6gnRtImZ6SZAo7XMz3P1Cp%2Fr%2F56EAIhAPS11wCIGdXuSG0fSLshePjaOQCm1aiRQHKUqHy0Ns4vKv8DCDcQABoMNjM3NDIzMTgzODA1IgxteC%2BNYEk8ATPQiRsq3AMJLjFrhfS%2Fao8lLbDKkul%2BKIUdBvqE%2BQTQYAvwPhsO1HYHVn1AiNiSZONlTFqRttpWzmj%2B%2FicA%2FOhP9zecTarhyCLnEyQMNfsD2CrIL%2F1wwmj0%2BB%2FNis0%2FNzxvbJ29yhI6z5KZ4aep7%2B0X7AK5KF%2B2tGnLNHdtwUODwCEyLVefkE4UMuUB75VqrQhofqxc%2BQz41wR1clFoNhbFWggAUyQQTXDilD5myYYXPkjkJ12ABn1aWvil37ADqkZNUIxNxc71d80NivS9gfcNFBUBaoafAoVdJiDUk8YAAk4ZezTOROneFkSCyIeTsoHoPsdM8nc%2Bd4i0sTJlkoVTRBqh8IYtvFCh887k62LA33Ip3cXu2EhUlxY84yg3abas0GrkcRe9sgApW9n6nQhcnUOiAZoDqIFi%2FCrM0gkbodK7z9ipwlTIPRDBy%2F0ICeyI4aYSlxww4k17wn37kIYzzoxTJxOkajavEFdCw4z1Ht0%2FTw6zQw%2BJIVcCBFlgoqdjr71OvV2C1wtwGEL5BHc%2B5rZ8sLeb0ljdtyPxH9OoN28kZeciuReFFGx4B%2FmVaoXj97NJSZSblmGNSZylOoljleGC%2F7Kc019PW9o0LAIvYR5e0i7k3WcxPZWqFwEvJWJ4sDD314rEBjqkAe171wt9rMwmgiDWCrxtRpxOglhMRAjgnkq8ir8%2Bxo45YVJbAQ3ORm%2Bp096TiWtX3VXGjEwCacs2zXW38Nyreu4a8RtxcemjOsPllxpATscUG1myRoivtQ8jPkDT20qAMWbqu2Rd31ZHi8Gm3z8%2FpT3LBTneWDj85sFZrKy2317tcXHBBYioZ0RdCIi64VYemBRYtMa8MF6JOagK%2F8eUekeS9Zdo&X-Amz-Signature=a945dd45bd9429915a75c270b3309333033fcaeec86e63f19e2139f87fd93ed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TW3ZBGZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC6hAI%2Bs6O%2BCOExC6gnRtImZ6SZAo7XMz3P1Cp%2Fr%2F56EAIhAPS11wCIGdXuSG0fSLshePjaOQCm1aiRQHKUqHy0Ns4vKv8DCDcQABoMNjM3NDIzMTgzODA1IgxteC%2BNYEk8ATPQiRsq3AMJLjFrhfS%2Fao8lLbDKkul%2BKIUdBvqE%2BQTQYAvwPhsO1HYHVn1AiNiSZONlTFqRttpWzmj%2B%2FicA%2FOhP9zecTarhyCLnEyQMNfsD2CrIL%2F1wwmj0%2BB%2FNis0%2FNzxvbJ29yhI6z5KZ4aep7%2B0X7AK5KF%2B2tGnLNHdtwUODwCEyLVefkE4UMuUB75VqrQhofqxc%2BQz41wR1clFoNhbFWggAUyQQTXDilD5myYYXPkjkJ12ABn1aWvil37ADqkZNUIxNxc71d80NivS9gfcNFBUBaoafAoVdJiDUk8YAAk4ZezTOROneFkSCyIeTsoHoPsdM8nc%2Bd4i0sTJlkoVTRBqh8IYtvFCh887k62LA33Ip3cXu2EhUlxY84yg3abas0GrkcRe9sgApW9n6nQhcnUOiAZoDqIFi%2FCrM0gkbodK7z9ipwlTIPRDBy%2F0ICeyI4aYSlxww4k17wn37kIYzzoxTJxOkajavEFdCw4z1Ht0%2FTw6zQw%2BJIVcCBFlgoqdjr71OvV2C1wtwGEL5BHc%2B5rZ8sLeb0ljdtyPxH9OoN28kZeciuReFFGx4B%2FmVaoXj97NJSZSblmGNSZylOoljleGC%2F7Kc019PW9o0LAIvYR5e0i7k3WcxPZWqFwEvJWJ4sDD314rEBjqkAe171wt9rMwmgiDWCrxtRpxOglhMRAjgnkq8ir8%2Bxo45YVJbAQ3ORm%2Bp096TiWtX3VXGjEwCacs2zXW38Nyreu4a8RtxcemjOsPllxpATscUG1myRoivtQ8jPkDT20qAMWbqu2Rd31ZHi8Gm3z8%2FpT3LBTneWDj85sFZrKy2317tcXHBBYioZ0RdCIi64VYemBRYtMa8MF6JOagK%2F8eUekeS9Zdo&X-Amz-Signature=5d8e4743fd3672132d7b751701bf53e179f3565ad0a2de441f6d1b9b306b2538&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TW3ZBGZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC6hAI%2Bs6O%2BCOExC6gnRtImZ6SZAo7XMz3P1Cp%2Fr%2F56EAIhAPS11wCIGdXuSG0fSLshePjaOQCm1aiRQHKUqHy0Ns4vKv8DCDcQABoMNjM3NDIzMTgzODA1IgxteC%2BNYEk8ATPQiRsq3AMJLjFrhfS%2Fao8lLbDKkul%2BKIUdBvqE%2BQTQYAvwPhsO1HYHVn1AiNiSZONlTFqRttpWzmj%2B%2FicA%2FOhP9zecTarhyCLnEyQMNfsD2CrIL%2F1wwmj0%2BB%2FNis0%2FNzxvbJ29yhI6z5KZ4aep7%2B0X7AK5KF%2B2tGnLNHdtwUODwCEyLVefkE4UMuUB75VqrQhofqxc%2BQz41wR1clFoNhbFWggAUyQQTXDilD5myYYXPkjkJ12ABn1aWvil37ADqkZNUIxNxc71d80NivS9gfcNFBUBaoafAoVdJiDUk8YAAk4ZezTOROneFkSCyIeTsoHoPsdM8nc%2Bd4i0sTJlkoVTRBqh8IYtvFCh887k62LA33Ip3cXu2EhUlxY84yg3abas0GrkcRe9sgApW9n6nQhcnUOiAZoDqIFi%2FCrM0gkbodK7z9ipwlTIPRDBy%2F0ICeyI4aYSlxww4k17wn37kIYzzoxTJxOkajavEFdCw4z1Ht0%2FTw6zQw%2BJIVcCBFlgoqdjr71OvV2C1wtwGEL5BHc%2B5rZ8sLeb0ljdtyPxH9OoN28kZeciuReFFGx4B%2FmVaoXj97NJSZSblmGNSZylOoljleGC%2F7Kc019PW9o0LAIvYR5e0i7k3WcxPZWqFwEvJWJ4sDD314rEBjqkAe171wt9rMwmgiDWCrxtRpxOglhMRAjgnkq8ir8%2Bxo45YVJbAQ3ORm%2Bp096TiWtX3VXGjEwCacs2zXW38Nyreu4a8RtxcemjOsPllxpATscUG1myRoivtQ8jPkDT20qAMWbqu2Rd31ZHi8Gm3z8%2FpT3LBTneWDj85sFZrKy2317tcXHBBYioZ0RdCIi64VYemBRYtMa8MF6JOagK%2F8eUekeS9Zdo&X-Amz-Signature=84d1dba1787d1d93aee8d671203e0b58c69a319345ea4c3b374b771b664bed3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TW3ZBGZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC6hAI%2Bs6O%2BCOExC6gnRtImZ6SZAo7XMz3P1Cp%2Fr%2F56EAIhAPS11wCIGdXuSG0fSLshePjaOQCm1aiRQHKUqHy0Ns4vKv8DCDcQABoMNjM3NDIzMTgzODA1IgxteC%2BNYEk8ATPQiRsq3AMJLjFrhfS%2Fao8lLbDKkul%2BKIUdBvqE%2BQTQYAvwPhsO1HYHVn1AiNiSZONlTFqRttpWzmj%2B%2FicA%2FOhP9zecTarhyCLnEyQMNfsD2CrIL%2F1wwmj0%2BB%2FNis0%2FNzxvbJ29yhI6z5KZ4aep7%2B0X7AK5KF%2B2tGnLNHdtwUODwCEyLVefkE4UMuUB75VqrQhofqxc%2BQz41wR1clFoNhbFWggAUyQQTXDilD5myYYXPkjkJ12ABn1aWvil37ADqkZNUIxNxc71d80NivS9gfcNFBUBaoafAoVdJiDUk8YAAk4ZezTOROneFkSCyIeTsoHoPsdM8nc%2Bd4i0sTJlkoVTRBqh8IYtvFCh887k62LA33Ip3cXu2EhUlxY84yg3abas0GrkcRe9sgApW9n6nQhcnUOiAZoDqIFi%2FCrM0gkbodK7z9ipwlTIPRDBy%2F0ICeyI4aYSlxww4k17wn37kIYzzoxTJxOkajavEFdCw4z1Ht0%2FTw6zQw%2BJIVcCBFlgoqdjr71OvV2C1wtwGEL5BHc%2B5rZ8sLeb0ljdtyPxH9OoN28kZeciuReFFGx4B%2FmVaoXj97NJSZSblmGNSZylOoljleGC%2F7Kc019PW9o0LAIvYR5e0i7k3WcxPZWqFwEvJWJ4sDD314rEBjqkAe171wt9rMwmgiDWCrxtRpxOglhMRAjgnkq8ir8%2Bxo45YVJbAQ3ORm%2Bp096TiWtX3VXGjEwCacs2zXW38Nyreu4a8RtxcemjOsPllxpATscUG1myRoivtQ8jPkDT20qAMWbqu2Rd31ZHi8Gm3z8%2FpT3LBTneWDj85sFZrKy2317tcXHBBYioZ0RdCIi64VYemBRYtMa8MF6JOagK%2F8eUekeS9Zdo&X-Amz-Signature=5a2dc03649f1aaa4496f3c431f79dce28323c4dc68a381f8a78a995836bf5a0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

make a folder in `mbot_pkg` called description and a file called `mbot_description.urdf`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TW3ZBGZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC6hAI%2Bs6O%2BCOExC6gnRtImZ6SZAo7XMz3P1Cp%2Fr%2F56EAIhAPS11wCIGdXuSG0fSLshePjaOQCm1aiRQHKUqHy0Ns4vKv8DCDcQABoMNjM3NDIzMTgzODA1IgxteC%2BNYEk8ATPQiRsq3AMJLjFrhfS%2Fao8lLbDKkul%2BKIUdBvqE%2BQTQYAvwPhsO1HYHVn1AiNiSZONlTFqRttpWzmj%2B%2FicA%2FOhP9zecTarhyCLnEyQMNfsD2CrIL%2F1wwmj0%2BB%2FNis0%2FNzxvbJ29yhI6z5KZ4aep7%2B0X7AK5KF%2B2tGnLNHdtwUODwCEyLVefkE4UMuUB75VqrQhofqxc%2BQz41wR1clFoNhbFWggAUyQQTXDilD5myYYXPkjkJ12ABn1aWvil37ADqkZNUIxNxc71d80NivS9gfcNFBUBaoafAoVdJiDUk8YAAk4ZezTOROneFkSCyIeTsoHoPsdM8nc%2Bd4i0sTJlkoVTRBqh8IYtvFCh887k62LA33Ip3cXu2EhUlxY84yg3abas0GrkcRe9sgApW9n6nQhcnUOiAZoDqIFi%2FCrM0gkbodK7z9ipwlTIPRDBy%2F0ICeyI4aYSlxww4k17wn37kIYzzoxTJxOkajavEFdCw4z1Ht0%2FTw6zQw%2BJIVcCBFlgoqdjr71OvV2C1wtwGEL5BHc%2B5rZ8sLeb0ljdtyPxH9OoN28kZeciuReFFGx4B%2FmVaoXj97NJSZSblmGNSZylOoljleGC%2F7Kc019PW9o0LAIvYR5e0i7k3WcxPZWqFwEvJWJ4sDD314rEBjqkAe171wt9rMwmgiDWCrxtRpxOglhMRAjgnkq8ir8%2Bxo45YVJbAQ3ORm%2Bp096TiWtX3VXGjEwCacs2zXW38Nyreu4a8RtxcemjOsPllxpATscUG1myRoivtQ8jPkDT20qAMWbqu2Rd31ZHi8Gm3z8%2FpT3LBTneWDj85sFZrKy2317tcXHBBYioZ0RdCIi64VYemBRYtMa8MF6JOagK%2F8eUekeS9Zdo&X-Amz-Signature=3b2b26fea96734d1ff55f743350f71f0b0ceeaf792fd4784f5e2291a95ba4428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TW3ZBGZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC6hAI%2Bs6O%2BCOExC6gnRtImZ6SZAo7XMz3P1Cp%2Fr%2F56EAIhAPS11wCIGdXuSG0fSLshePjaOQCm1aiRQHKUqHy0Ns4vKv8DCDcQABoMNjM3NDIzMTgzODA1IgxteC%2BNYEk8ATPQiRsq3AMJLjFrhfS%2Fao8lLbDKkul%2BKIUdBvqE%2BQTQYAvwPhsO1HYHVn1AiNiSZONlTFqRttpWzmj%2B%2FicA%2FOhP9zecTarhyCLnEyQMNfsD2CrIL%2F1wwmj0%2BB%2FNis0%2FNzxvbJ29yhI6z5KZ4aep7%2B0X7AK5KF%2B2tGnLNHdtwUODwCEyLVefkE4UMuUB75VqrQhofqxc%2BQz41wR1clFoNhbFWggAUyQQTXDilD5myYYXPkjkJ12ABn1aWvil37ADqkZNUIxNxc71d80NivS9gfcNFBUBaoafAoVdJiDUk8YAAk4ZezTOROneFkSCyIeTsoHoPsdM8nc%2Bd4i0sTJlkoVTRBqh8IYtvFCh887k62LA33Ip3cXu2EhUlxY84yg3abas0GrkcRe9sgApW9n6nQhcnUOiAZoDqIFi%2FCrM0gkbodK7z9ipwlTIPRDBy%2F0ICeyI4aYSlxww4k17wn37kIYzzoxTJxOkajavEFdCw4z1Ht0%2FTw6zQw%2BJIVcCBFlgoqdjr71OvV2C1wtwGEL5BHc%2B5rZ8sLeb0ljdtyPxH9OoN28kZeciuReFFGx4B%2FmVaoXj97NJSZSblmGNSZylOoljleGC%2F7Kc019PW9o0LAIvYR5e0i7k3WcxPZWqFwEvJWJ4sDD314rEBjqkAe171wt9rMwmgiDWCrxtRpxOglhMRAjgnkq8ir8%2Bxo45YVJbAQ3ORm%2Bp096TiWtX3VXGjEwCacs2zXW38Nyreu4a8RtxcemjOsPllxpATscUG1myRoivtQ8jPkDT20qAMWbqu2Rd31ZHi8Gm3z8%2FpT3LBTneWDj85sFZrKy2317tcXHBBYioZ0RdCIi64VYemBRYtMa8MF6JOagK%2F8eUekeS9Zdo&X-Amz-Signature=d0a0d881f2f8e87aeba37881c52649588678d1c36056c67e8785ba4255b2a4b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TW3ZBGZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC6hAI%2Bs6O%2BCOExC6gnRtImZ6SZAo7XMz3P1Cp%2Fr%2F56EAIhAPS11wCIGdXuSG0fSLshePjaOQCm1aiRQHKUqHy0Ns4vKv8DCDcQABoMNjM3NDIzMTgzODA1IgxteC%2BNYEk8ATPQiRsq3AMJLjFrhfS%2Fao8lLbDKkul%2BKIUdBvqE%2BQTQYAvwPhsO1HYHVn1AiNiSZONlTFqRttpWzmj%2B%2FicA%2FOhP9zecTarhyCLnEyQMNfsD2CrIL%2F1wwmj0%2BB%2FNis0%2FNzxvbJ29yhI6z5KZ4aep7%2B0X7AK5KF%2B2tGnLNHdtwUODwCEyLVefkE4UMuUB75VqrQhofqxc%2BQz41wR1clFoNhbFWggAUyQQTXDilD5myYYXPkjkJ12ABn1aWvil37ADqkZNUIxNxc71d80NivS9gfcNFBUBaoafAoVdJiDUk8YAAk4ZezTOROneFkSCyIeTsoHoPsdM8nc%2Bd4i0sTJlkoVTRBqh8IYtvFCh887k62LA33Ip3cXu2EhUlxY84yg3abas0GrkcRe9sgApW9n6nQhcnUOiAZoDqIFi%2FCrM0gkbodK7z9ipwlTIPRDBy%2F0ICeyI4aYSlxww4k17wn37kIYzzoxTJxOkajavEFdCw4z1Ht0%2FTw6zQw%2BJIVcCBFlgoqdjr71OvV2C1wtwGEL5BHc%2B5rZ8sLeb0ljdtyPxH9OoN28kZeciuReFFGx4B%2FmVaoXj97NJSZSblmGNSZylOoljleGC%2F7Kc019PW9o0LAIvYR5e0i7k3WcxPZWqFwEvJWJ4sDD314rEBjqkAe171wt9rMwmgiDWCrxtRpxOglhMRAjgnkq8ir8%2Bxo45YVJbAQ3ORm%2Bp096TiWtX3VXGjEwCacs2zXW38Nyreu4a8RtxcemjOsPllxpATscUG1myRoivtQ8jPkDT20qAMWbqu2Rd31ZHi8Gm3z8%2FpT3LBTneWDj85sFZrKy2317tcXHBBYioZ0RdCIi64VYemBRYtMa8MF6JOagK%2F8eUekeS9Zdo&X-Amz-Signature=db88ca876ace6261991ce3ba65bb9ccb017b66f043380a1e76b0f03d22ac2bde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TW3ZBGZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC6hAI%2Bs6O%2BCOExC6gnRtImZ6SZAo7XMz3P1Cp%2Fr%2F56EAIhAPS11wCIGdXuSG0fSLshePjaOQCm1aiRQHKUqHy0Ns4vKv8DCDcQABoMNjM3NDIzMTgzODA1IgxteC%2BNYEk8ATPQiRsq3AMJLjFrhfS%2Fao8lLbDKkul%2BKIUdBvqE%2BQTQYAvwPhsO1HYHVn1AiNiSZONlTFqRttpWzmj%2B%2FicA%2FOhP9zecTarhyCLnEyQMNfsD2CrIL%2F1wwmj0%2BB%2FNis0%2FNzxvbJ29yhI6z5KZ4aep7%2B0X7AK5KF%2B2tGnLNHdtwUODwCEyLVefkE4UMuUB75VqrQhofqxc%2BQz41wR1clFoNhbFWggAUyQQTXDilD5myYYXPkjkJ12ABn1aWvil37ADqkZNUIxNxc71d80NivS9gfcNFBUBaoafAoVdJiDUk8YAAk4ZezTOROneFkSCyIeTsoHoPsdM8nc%2Bd4i0sTJlkoVTRBqh8IYtvFCh887k62LA33Ip3cXu2EhUlxY84yg3abas0GrkcRe9sgApW9n6nQhcnUOiAZoDqIFi%2FCrM0gkbodK7z9ipwlTIPRDBy%2F0ICeyI4aYSlxww4k17wn37kIYzzoxTJxOkajavEFdCw4z1Ht0%2FTw6zQw%2BJIVcCBFlgoqdjr71OvV2C1wtwGEL5BHc%2B5rZ8sLeb0ljdtyPxH9OoN28kZeciuReFFGx4B%2FmVaoXj97NJSZSblmGNSZylOoljleGC%2F7Kc019PW9o0LAIvYR5e0i7k3WcxPZWqFwEvJWJ4sDD314rEBjqkAe171wt9rMwmgiDWCrxtRpxOglhMRAjgnkq8ir8%2Bxo45YVJbAQ3ORm%2Bp096TiWtX3VXGjEwCacs2zXW38Nyreu4a8RtxcemjOsPllxpATscUG1myRoivtQ8jPkDT20qAMWbqu2Rd31ZHi8Gm3z8%2FpT3LBTneWDj85sFZrKy2317tcXHBBYioZ0RdCIi64VYemBRYtMa8MF6JOagK%2F8eUekeS9Zdo&X-Amz-Signature=89cfcf93a970f2ac3377debf5ba265c7a2a47fe3b0cb84d564bd8e105e861c19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TW3ZBGZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC6hAI%2Bs6O%2BCOExC6gnRtImZ6SZAo7XMz3P1Cp%2Fr%2F56EAIhAPS11wCIGdXuSG0fSLshePjaOQCm1aiRQHKUqHy0Ns4vKv8DCDcQABoMNjM3NDIzMTgzODA1IgxteC%2BNYEk8ATPQiRsq3AMJLjFrhfS%2Fao8lLbDKkul%2BKIUdBvqE%2BQTQYAvwPhsO1HYHVn1AiNiSZONlTFqRttpWzmj%2B%2FicA%2FOhP9zecTarhyCLnEyQMNfsD2CrIL%2F1wwmj0%2BB%2FNis0%2FNzxvbJ29yhI6z5KZ4aep7%2B0X7AK5KF%2B2tGnLNHdtwUODwCEyLVefkE4UMuUB75VqrQhofqxc%2BQz41wR1clFoNhbFWggAUyQQTXDilD5myYYXPkjkJ12ABn1aWvil37ADqkZNUIxNxc71d80NivS9gfcNFBUBaoafAoVdJiDUk8YAAk4ZezTOROneFkSCyIeTsoHoPsdM8nc%2Bd4i0sTJlkoVTRBqh8IYtvFCh887k62LA33Ip3cXu2EhUlxY84yg3abas0GrkcRe9sgApW9n6nQhcnUOiAZoDqIFi%2FCrM0gkbodK7z9ipwlTIPRDBy%2F0ICeyI4aYSlxww4k17wn37kIYzzoxTJxOkajavEFdCw4z1Ht0%2FTw6zQw%2BJIVcCBFlgoqdjr71OvV2C1wtwGEL5BHc%2B5rZ8sLeb0ljdtyPxH9OoN28kZeciuReFFGx4B%2FmVaoXj97NJSZSblmGNSZylOoljleGC%2F7Kc019PW9o0LAIvYR5e0i7k3WcxPZWqFwEvJWJ4sDD314rEBjqkAe171wt9rMwmgiDWCrxtRpxOglhMRAjgnkq8ir8%2Bxo45YVJbAQ3ORm%2Bp096TiWtX3VXGjEwCacs2zXW38Nyreu4a8RtxcemjOsPllxpATscUG1myRoivtQ8jPkDT20qAMWbqu2Rd31ZHi8Gm3z8%2FpT3LBTneWDj85sFZrKy2317tcXHBBYioZ0RdCIi64VYemBRYtMa8MF6JOagK%2F8eUekeS9Zdo&X-Amz-Signature=b092529223579a28e25b3cf9cf0905cd817611e8b34d69e77a105c9cdf6b721a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TW3ZBGZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC6hAI%2Bs6O%2BCOExC6gnRtImZ6SZAo7XMz3P1Cp%2Fr%2F56EAIhAPS11wCIGdXuSG0fSLshePjaOQCm1aiRQHKUqHy0Ns4vKv8DCDcQABoMNjM3NDIzMTgzODA1IgxteC%2BNYEk8ATPQiRsq3AMJLjFrhfS%2Fao8lLbDKkul%2BKIUdBvqE%2BQTQYAvwPhsO1HYHVn1AiNiSZONlTFqRttpWzmj%2B%2FicA%2FOhP9zecTarhyCLnEyQMNfsD2CrIL%2F1wwmj0%2BB%2FNis0%2FNzxvbJ29yhI6z5KZ4aep7%2B0X7AK5KF%2B2tGnLNHdtwUODwCEyLVefkE4UMuUB75VqrQhofqxc%2BQz41wR1clFoNhbFWggAUyQQTXDilD5myYYXPkjkJ12ABn1aWvil37ADqkZNUIxNxc71d80NivS9gfcNFBUBaoafAoVdJiDUk8YAAk4ZezTOROneFkSCyIeTsoHoPsdM8nc%2Bd4i0sTJlkoVTRBqh8IYtvFCh887k62LA33Ip3cXu2EhUlxY84yg3abas0GrkcRe9sgApW9n6nQhcnUOiAZoDqIFi%2FCrM0gkbodK7z9ipwlTIPRDBy%2F0ICeyI4aYSlxww4k17wn37kIYzzoxTJxOkajavEFdCw4z1Ht0%2FTw6zQw%2BJIVcCBFlgoqdjr71OvV2C1wtwGEL5BHc%2B5rZ8sLeb0ljdtyPxH9OoN28kZeciuReFFGx4B%2FmVaoXj97NJSZSblmGNSZylOoljleGC%2F7Kc019PW9o0LAIvYR5e0i7k3WcxPZWqFwEvJWJ4sDD314rEBjqkAe171wt9rMwmgiDWCrxtRpxOglhMRAjgnkq8ir8%2Bxo45YVJbAQ3ORm%2Bp096TiWtX3VXGjEwCacs2zXW38Nyreu4a8RtxcemjOsPllxpATscUG1myRoivtQ8jPkDT20qAMWbqu2Rd31ZHi8Gm3z8%2FpT3LBTneWDj85sFZrKy2317tcXHBBYioZ0RdCIi64VYemBRYtMa8MF6JOagK%2F8eUekeS9Zdo&X-Amz-Signature=9223c0b114edd4cd3fd025912ee4e9cdc0723c1899207e450dc941ca2adfd1ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TW3ZBGZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC6hAI%2Bs6O%2BCOExC6gnRtImZ6SZAo7XMz3P1Cp%2Fr%2F56EAIhAPS11wCIGdXuSG0fSLshePjaOQCm1aiRQHKUqHy0Ns4vKv8DCDcQABoMNjM3NDIzMTgzODA1IgxteC%2BNYEk8ATPQiRsq3AMJLjFrhfS%2Fao8lLbDKkul%2BKIUdBvqE%2BQTQYAvwPhsO1HYHVn1AiNiSZONlTFqRttpWzmj%2B%2FicA%2FOhP9zecTarhyCLnEyQMNfsD2CrIL%2F1wwmj0%2BB%2FNis0%2FNzxvbJ29yhI6z5KZ4aep7%2B0X7AK5KF%2B2tGnLNHdtwUODwCEyLVefkE4UMuUB75VqrQhofqxc%2BQz41wR1clFoNhbFWggAUyQQTXDilD5myYYXPkjkJ12ABn1aWvil37ADqkZNUIxNxc71d80NivS9gfcNFBUBaoafAoVdJiDUk8YAAk4ZezTOROneFkSCyIeTsoHoPsdM8nc%2Bd4i0sTJlkoVTRBqh8IYtvFCh887k62LA33Ip3cXu2EhUlxY84yg3abas0GrkcRe9sgApW9n6nQhcnUOiAZoDqIFi%2FCrM0gkbodK7z9ipwlTIPRDBy%2F0ICeyI4aYSlxww4k17wn37kIYzzoxTJxOkajavEFdCw4z1Ht0%2FTw6zQw%2BJIVcCBFlgoqdjr71OvV2C1wtwGEL5BHc%2B5rZ8sLeb0ljdtyPxH9OoN28kZeciuReFFGx4B%2FmVaoXj97NJSZSblmGNSZylOoljleGC%2F7Kc019PW9o0LAIvYR5e0i7k3WcxPZWqFwEvJWJ4sDD314rEBjqkAe171wt9rMwmgiDWCrxtRpxOglhMRAjgnkq8ir8%2Bxo45YVJbAQ3ORm%2Bp096TiWtX3VXGjEwCacs2zXW38Nyreu4a8RtxcemjOsPllxpATscUG1myRoivtQ8jPkDT20qAMWbqu2Rd31ZHi8Gm3z8%2FpT3LBTneWDj85sFZrKy2317tcXHBBYioZ0RdCIi64VYemBRYtMa8MF6JOagK%2F8eUekeS9Zdo&X-Amz-Signature=a0d04d44aae76a344a09bbf2c80967679a56e17700a6290f0820cbfd3106a050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJD4SFAF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCYh723arY%2FefGTzZOMwEj2ShYSGEfduZSIKYdWQakpUgIhAOSj5hQPZpz%2F4CPJenE4X3gf1%2BAbyAFAh3UZujS1zAy5Kv8DCDcQABoMNjM3NDIzMTgzODA1Igzwp3dmJOZbZSKWPqoq3ANYtBn6NIijN1LDO5wUGOOnJTxKc46mE%2F%2FokrT%2BAAHtUhyC%2Fp0n8F6gMeKaa6M7vtfTcLWTmXHwNKHdoZJ0fsU4QNzYR2luLaN6r4wQAOGWtQMm8uUlBMte8Bw5AM%2Fzcd5kRVlFa%2Fd32xNlI1EoCJIIYwwVaYqoxGgUj7tgBfcjm0WyAjYU%2Bb%2BsjF4ZBmYzPw0nzOoKGi6DHPL2cLXD0AxaRPBYTVdpXZEYFZYdBQGPixO1KjE9eGBYUDskpWXNgx9rztt3fqoPQW4Jo5gUy6cb%2FBNgqpyRMWj2jOQjB2AtHs3FOOTrOBUdQHgaaCrgw%2BYUXrerLw3aMcZxqxfKRVZQ5UVRBJoFNmCcFx4ukNEN%2Fy6mD7thiHn9ZYawUdvboFyqqNX5e4iK7iouuvpZ31tCHKTLRlDx6pyYSNmEKtJRiLKSnytKTZzdEl4q0BXSkEnkhvgJDpmzkYV1HET7uGOs7dCXa872rKlgPZ62%2B7KU6EFzs%2BkC7NIrS5ZQWTCGKEmC7SuRNi56r55ROCfxoerKN%2FEnufPP6RS87SBRmqkYVJKwPwmqQLjP8JYGPftAKzov9jQsYUBQmH7ctbY1ip8haKnKHHQNHfmvzv7mwCpi74HJANR0BguPKT81STC22IrEBjqkAU5BFTovG6Bx6HDUJ8DOjVIhyS19V2YUT8F1BTVIEztsFL0oAZ45lxPr3bmVnpe%2Fv%2FvG3eG7XWcSOC4GvlN%2B85%2Bt4nrH07c730aeMcfnw3mFpUNWMRXZccGAa5KRKB9mzR7XBul3bKWEIt%2BNt%2BTnilKB82EXzMcUMIjh8lxDl4Dvt6%2BOZEnL95SJuRaoJ99c%2FfRWX2LeZMCI%2B1G1CGPWCCNgAjbJ&X-Amz-Signature=ada2b4cd49ffb79e03eda8e8fc8cc6cb9c2e6b940e1a8e5490fa50b367c01941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJD4SFAF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCYh723arY%2FefGTzZOMwEj2ShYSGEfduZSIKYdWQakpUgIhAOSj5hQPZpz%2F4CPJenE4X3gf1%2BAbyAFAh3UZujS1zAy5Kv8DCDcQABoMNjM3NDIzMTgzODA1Igzwp3dmJOZbZSKWPqoq3ANYtBn6NIijN1LDO5wUGOOnJTxKc46mE%2F%2FokrT%2BAAHtUhyC%2Fp0n8F6gMeKaa6M7vtfTcLWTmXHwNKHdoZJ0fsU4QNzYR2luLaN6r4wQAOGWtQMm8uUlBMte8Bw5AM%2Fzcd5kRVlFa%2Fd32xNlI1EoCJIIYwwVaYqoxGgUj7tgBfcjm0WyAjYU%2Bb%2BsjF4ZBmYzPw0nzOoKGi6DHPL2cLXD0AxaRPBYTVdpXZEYFZYdBQGPixO1KjE9eGBYUDskpWXNgx9rztt3fqoPQW4Jo5gUy6cb%2FBNgqpyRMWj2jOQjB2AtHs3FOOTrOBUdQHgaaCrgw%2BYUXrerLw3aMcZxqxfKRVZQ5UVRBJoFNmCcFx4ukNEN%2Fy6mD7thiHn9ZYawUdvboFyqqNX5e4iK7iouuvpZ31tCHKTLRlDx6pyYSNmEKtJRiLKSnytKTZzdEl4q0BXSkEnkhvgJDpmzkYV1HET7uGOs7dCXa872rKlgPZ62%2B7KU6EFzs%2BkC7NIrS5ZQWTCGKEmC7SuRNi56r55ROCfxoerKN%2FEnufPP6RS87SBRmqkYVJKwPwmqQLjP8JYGPftAKzov9jQsYUBQmH7ctbY1ip8haKnKHHQNHfmvzv7mwCpi74HJANR0BguPKT81STC22IrEBjqkAU5BFTovG6Bx6HDUJ8DOjVIhyS19V2YUT8F1BTVIEztsFL0oAZ45lxPr3bmVnpe%2Fv%2FvG3eG7XWcSOC4GvlN%2B85%2Bt4nrH07c730aeMcfnw3mFpUNWMRXZccGAa5KRKB9mzR7XBul3bKWEIt%2BNt%2BTnilKB82EXzMcUMIjh8lxDl4Dvt6%2BOZEnL95SJuRaoJ99c%2FfRWX2LeZMCI%2B1G1CGPWCCNgAjbJ&X-Amz-Signature=43be841c253a92690b8c3579dcdbb64a1ecbb2271082a6f6f4f9ea793f73765f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## launch file

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

## add new files to `setup.py` 

if we add new files types to the package we need to update the `setup.py` and rebuild

```python

from setuptools import find_packages, setup
import os
from glob import glob

files = []
for full_filepath in glob('**/*.*', recursive=True):
    filepath = os.path.split(full_filepath)
    if filepath[0] != '':
        result = (os.path.join('share', package_name, filepath[0]), [full_filepath])
        files.append(result)

package_name = 'mbot_pkg'

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

**run:**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJD4SFAF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCYh723arY%2FefGTzZOMwEj2ShYSGEfduZSIKYdWQakpUgIhAOSj5hQPZpz%2F4CPJenE4X3gf1%2BAbyAFAh3UZujS1zAy5Kv8DCDcQABoMNjM3NDIzMTgzODA1Igzwp3dmJOZbZSKWPqoq3ANYtBn6NIijN1LDO5wUGOOnJTxKc46mE%2F%2FokrT%2BAAHtUhyC%2Fp0n8F6gMeKaa6M7vtfTcLWTmXHwNKHdoZJ0fsU4QNzYR2luLaN6r4wQAOGWtQMm8uUlBMte8Bw5AM%2Fzcd5kRVlFa%2Fd32xNlI1EoCJIIYwwVaYqoxGgUj7tgBfcjm0WyAjYU%2Bb%2BsjF4ZBmYzPw0nzOoKGi6DHPL2cLXD0AxaRPBYTVdpXZEYFZYdBQGPixO1KjE9eGBYUDskpWXNgx9rztt3fqoPQW4Jo5gUy6cb%2FBNgqpyRMWj2jOQjB2AtHs3FOOTrOBUdQHgaaCrgw%2BYUXrerLw3aMcZxqxfKRVZQ5UVRBJoFNmCcFx4ukNEN%2Fy6mD7thiHn9ZYawUdvboFyqqNX5e4iK7iouuvpZ31tCHKTLRlDx6pyYSNmEKtJRiLKSnytKTZzdEl4q0BXSkEnkhvgJDpmzkYV1HET7uGOs7dCXa872rKlgPZ62%2B7KU6EFzs%2BkC7NIrS5ZQWTCGKEmC7SuRNi56r55ROCfxoerKN%2FEnufPP6RS87SBRmqkYVJKwPwmqQLjP8JYGPftAKzov9jQsYUBQmH7ctbY1ip8haKnKHHQNHfmvzv7mwCpi74HJANR0BguPKT81STC22IrEBjqkAU5BFTovG6Bx6HDUJ8DOjVIhyS19V2YUT8F1BTVIEztsFL0oAZ45lxPr3bmVnpe%2Fv%2FvG3eG7XWcSOC4GvlN%2B85%2Bt4nrH07c730aeMcfnw3mFpUNWMRXZccGAa5KRKB9mzR7XBul3bKWEIt%2BNt%2BTnilKB82EXzMcUMIjh8lxDl4Dvt6%2BOZEnL95SJuRaoJ99c%2FfRWX2LeZMCI%2B1G1CGPWCCNgAjbJ&X-Amz-Signature=3bc2b8e951b5ff5b8a3c04ed53cd1e3ca76e66069934331be0376782ea9a1be6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running

In a new terminal tab while `rviz` is still open run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJD4SFAF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCYh723arY%2FefGTzZOMwEj2ShYSGEfduZSIKYdWQakpUgIhAOSj5hQPZpz%2F4CPJenE4X3gf1%2BAbyAFAh3UZujS1zAy5Kv8DCDcQABoMNjM3NDIzMTgzODA1Igzwp3dmJOZbZSKWPqoq3ANYtBn6NIijN1LDO5wUGOOnJTxKc46mE%2F%2FokrT%2BAAHtUhyC%2Fp0n8F6gMeKaa6M7vtfTcLWTmXHwNKHdoZJ0fsU4QNzYR2luLaN6r4wQAOGWtQMm8uUlBMte8Bw5AM%2Fzcd5kRVlFa%2Fd32xNlI1EoCJIIYwwVaYqoxGgUj7tgBfcjm0WyAjYU%2Bb%2BsjF4ZBmYzPw0nzOoKGi6DHPL2cLXD0AxaRPBYTVdpXZEYFZYdBQGPixO1KjE9eGBYUDskpWXNgx9rztt3fqoPQW4Jo5gUy6cb%2FBNgqpyRMWj2jOQjB2AtHs3FOOTrOBUdQHgaaCrgw%2BYUXrerLw3aMcZxqxfKRVZQ5UVRBJoFNmCcFx4ukNEN%2Fy6mD7thiHn9ZYawUdvboFyqqNX5e4iK7iouuvpZ31tCHKTLRlDx6pyYSNmEKtJRiLKSnytKTZzdEl4q0BXSkEnkhvgJDpmzkYV1HET7uGOs7dCXa872rKlgPZ62%2B7KU6EFzs%2BkC7NIrS5ZQWTCGKEmC7SuRNi56r55ROCfxoerKN%2FEnufPP6RS87SBRmqkYVJKwPwmqQLjP8JYGPftAKzov9jQsYUBQmH7ctbY1ip8haKnKHHQNHfmvzv7mwCpi74HJANR0BguPKT81STC22IrEBjqkAU5BFTovG6Bx6HDUJ8DOjVIhyS19V2YUT8F1BTVIEztsFL0oAZ45lxPr3bmVnpe%2Fv%2FvG3eG7XWcSOC4GvlN%2B85%2Bt4nrH07c730aeMcfnw3mFpUNWMRXZccGAa5KRKB9mzR7XBul3bKWEIt%2BNt%2BTnilKB82EXzMcUMIjh8lxDl4Dvt6%2BOZEnL95SJuRaoJ99c%2FfRWX2LeZMCI%2B1G1CGPWCCNgAjbJ&X-Amz-Signature=c89d8d34853713972d758978bbe57a50c0b56c3dc4fc6d4bd66574f06c7995f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJD4SFAF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCYh723arY%2FefGTzZOMwEj2ShYSGEfduZSIKYdWQakpUgIhAOSj5hQPZpz%2F4CPJenE4X3gf1%2BAbyAFAh3UZujS1zAy5Kv8DCDcQABoMNjM3NDIzMTgzODA1Igzwp3dmJOZbZSKWPqoq3ANYtBn6NIijN1LDO5wUGOOnJTxKc46mE%2F%2FokrT%2BAAHtUhyC%2Fp0n8F6gMeKaa6M7vtfTcLWTmXHwNKHdoZJ0fsU4QNzYR2luLaN6r4wQAOGWtQMm8uUlBMte8Bw5AM%2Fzcd5kRVlFa%2Fd32xNlI1EoCJIIYwwVaYqoxGgUj7tgBfcjm0WyAjYU%2Bb%2BsjF4ZBmYzPw0nzOoKGi6DHPL2cLXD0AxaRPBYTVdpXZEYFZYdBQGPixO1KjE9eGBYUDskpWXNgx9rztt3fqoPQW4Jo5gUy6cb%2FBNgqpyRMWj2jOQjB2AtHs3FOOTrOBUdQHgaaCrgw%2BYUXrerLw3aMcZxqxfKRVZQ5UVRBJoFNmCcFx4ukNEN%2Fy6mD7thiHn9ZYawUdvboFyqqNX5e4iK7iouuvpZ31tCHKTLRlDx6pyYSNmEKtJRiLKSnytKTZzdEl4q0BXSkEnkhvgJDpmzkYV1HET7uGOs7dCXa872rKlgPZ62%2B7KU6EFzs%2BkC7NIrS5ZQWTCGKEmC7SuRNi56r55ROCfxoerKN%2FEnufPP6RS87SBRmqkYVJKwPwmqQLjP8JYGPftAKzov9jQsYUBQmH7ctbY1ip8haKnKHHQNHfmvzv7mwCpi74HJANR0BguPKT81STC22IrEBjqkAU5BFTovG6Bx6HDUJ8DOjVIhyS19V2YUT8F1BTVIEztsFL0oAZ45lxPr3bmVnpe%2Fv%2FvG3eG7XWcSOC4GvlN%2B85%2Bt4nrH07c730aeMcfnw3mFpUNWMRXZccGAa5KRKB9mzR7XBul3bKWEIt%2BNt%2BTnilKB82EXzMcUMIjh8lxDl4Dvt6%2BOZEnL95SJuRaoJ99c%2FfRWX2LeZMCI%2B1G1CGPWCCNgAjbJ&X-Amz-Signature=85e7f0733bf063c7f7ccd74259a0d760c1b18a42448351a878cd887a5d5cfd07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJD4SFAF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCYh723arY%2FefGTzZOMwEj2ShYSGEfduZSIKYdWQakpUgIhAOSj5hQPZpz%2F4CPJenE4X3gf1%2BAbyAFAh3UZujS1zAy5Kv8DCDcQABoMNjM3NDIzMTgzODA1Igzwp3dmJOZbZSKWPqoq3ANYtBn6NIijN1LDO5wUGOOnJTxKc46mE%2F%2FokrT%2BAAHtUhyC%2Fp0n8F6gMeKaa6M7vtfTcLWTmXHwNKHdoZJ0fsU4QNzYR2luLaN6r4wQAOGWtQMm8uUlBMte8Bw5AM%2Fzcd5kRVlFa%2Fd32xNlI1EoCJIIYwwVaYqoxGgUj7tgBfcjm0WyAjYU%2Bb%2BsjF4ZBmYzPw0nzOoKGi6DHPL2cLXD0AxaRPBYTVdpXZEYFZYdBQGPixO1KjE9eGBYUDskpWXNgx9rztt3fqoPQW4Jo5gUy6cb%2FBNgqpyRMWj2jOQjB2AtHs3FOOTrOBUdQHgaaCrgw%2BYUXrerLw3aMcZxqxfKRVZQ5UVRBJoFNmCcFx4ukNEN%2Fy6mD7thiHn9ZYawUdvboFyqqNX5e4iK7iouuvpZ31tCHKTLRlDx6pyYSNmEKtJRiLKSnytKTZzdEl4q0BXSkEnkhvgJDpmzkYV1HET7uGOs7dCXa872rKlgPZ62%2B7KU6EFzs%2BkC7NIrS5ZQWTCGKEmC7SuRNi56r55ROCfxoerKN%2FEnufPP6RS87SBRmqkYVJKwPwmqQLjP8JYGPftAKzov9jQsYUBQmH7ctbY1ip8haKnKHHQNHfmvzv7mwCpi74HJANR0BguPKT81STC22IrEBjqkAU5BFTovG6Bx6HDUJ8DOjVIhyS19V2YUT8F1BTVIEztsFL0oAZ45lxPr3bmVnpe%2Fv%2FvG3eG7XWcSOC4GvlN%2B85%2Bt4nrH07c730aeMcfnw3mFpUNWMRXZccGAa5KRKB9mzR7XBul3bKWEIt%2BNt%2BTnilKB82EXzMcUMIjh8lxDl4Dvt6%2BOZEnL95SJuRaoJ99c%2FfRWX2LeZMCI%2B1G1CGPWCCNgAjbJ&X-Amz-Signature=ddcafc0af1bff92330f1b4aea124a1b0ceaad172577478b0ede3fe69e51162f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
