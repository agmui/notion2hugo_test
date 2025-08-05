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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCR7AWZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC1MZSLv2n2rg7MjsFy9UfA27npYcNlGQnFg%2FoewglLawIhAMKX6oRouj65wKx3YOtxy5MgfzjvAEJpIV48kbJiuIYwKv8DCGEQABoMNjM3NDIzMTgzODA1IgwE91w49OcqgOpv%2F7Aq3APQR2X8vZ5frCoUSRqWBQNFV%2BG%2FCkONQ04pEJVC8Vj4LsP3c0OLKbmtGzKssj5e%2BC0n44Lcr%2BYSbAY4gguQ7Qn8bF7cGq0gqJsrrQrhUQ43XrZ17w8fO62rEUws5CQi%2F1VWJhEAOfJzlkThhlOxzs45IA%2FRVzVsuJ7kfz3bh0A%2Fz0kE6cZFtT0rzuWIDqyQa%2F%2BlUaQ3FegKdMUDoihQsZ3hClpjxoq7zypfyDCXNYknrBRKvLBy6y%2FKgiThkXX0TH5KnjkqBJwXYf7LyQ4cMhtb9HerySXYkg09Pr%2FxBYZ55%2BD0rCgLJYeSV%2F6I8YGWcVmqVHj1DqNdlVGijrMjCL3Af9LYXoc2blX7g2fz3B28qUiGWR5sl4oTSH3pg3YsjBLwjIxCOahlkrcd3nxitssSZeEu77a0DATRboImkKVRWlZnLEKmE9W3AL6nfoOJwMqr%2BK468Y%2BaGMYoj4vRgM%2BOuEEncA4QF%2BIq5DIgVia2AtAXoxvFCit%2F0QEw3wd2EoiDZwXdm9mZbm1TNpHH9vykVXMZdQiSMw79yzQqZbNyxcyFHGHwp5JFVQfjcZHkwsmMn97q1HQXB8c23bkcC7KVOrMMNfN01fzoFug0sgXTYTBUXOOVPepLbc%2B5djCIzcjEBjqkASigzB60THBszWVWzZWiXPg%2FJMEir3xSTLMsMRJP3gafTqSHJqQxnti7BH4agF93OYm9B6MxP6Pl84BT82LOe8Le%2FCDye3I42IUHHE6nZcuKygEDxmioiUTA86B34PDHjXQI3cqDFxbdm5iy5YxtPLi4ikUxLcglneA3yHH4EEp2F%2Fg6rld0NmvTgxXd4Ko8vfIrV2m3bWoZpokzpJknMPMkWXVE&X-Amz-Signature=d55d87f0c19f8e7e0bae51c7096a941f428818fcbfa8811f499beb62215d672e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCR7AWZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC1MZSLv2n2rg7MjsFy9UfA27npYcNlGQnFg%2FoewglLawIhAMKX6oRouj65wKx3YOtxy5MgfzjvAEJpIV48kbJiuIYwKv8DCGEQABoMNjM3NDIzMTgzODA1IgwE91w49OcqgOpv%2F7Aq3APQR2X8vZ5frCoUSRqWBQNFV%2BG%2FCkONQ04pEJVC8Vj4LsP3c0OLKbmtGzKssj5e%2BC0n44Lcr%2BYSbAY4gguQ7Qn8bF7cGq0gqJsrrQrhUQ43XrZ17w8fO62rEUws5CQi%2F1VWJhEAOfJzlkThhlOxzs45IA%2FRVzVsuJ7kfz3bh0A%2Fz0kE6cZFtT0rzuWIDqyQa%2F%2BlUaQ3FegKdMUDoihQsZ3hClpjxoq7zypfyDCXNYknrBRKvLBy6y%2FKgiThkXX0TH5KnjkqBJwXYf7LyQ4cMhtb9HerySXYkg09Pr%2FxBYZ55%2BD0rCgLJYeSV%2F6I8YGWcVmqVHj1DqNdlVGijrMjCL3Af9LYXoc2blX7g2fz3B28qUiGWR5sl4oTSH3pg3YsjBLwjIxCOahlkrcd3nxitssSZeEu77a0DATRboImkKVRWlZnLEKmE9W3AL6nfoOJwMqr%2BK468Y%2BaGMYoj4vRgM%2BOuEEncA4QF%2BIq5DIgVia2AtAXoxvFCit%2F0QEw3wd2EoiDZwXdm9mZbm1TNpHH9vykVXMZdQiSMw79yzQqZbNyxcyFHGHwp5JFVQfjcZHkwsmMn97q1HQXB8c23bkcC7KVOrMMNfN01fzoFug0sgXTYTBUXOOVPepLbc%2B5djCIzcjEBjqkASigzB60THBszWVWzZWiXPg%2FJMEir3xSTLMsMRJP3gafTqSHJqQxnti7BH4agF93OYm9B6MxP6Pl84BT82LOe8Le%2FCDye3I42IUHHE6nZcuKygEDxmioiUTA86B34PDHjXQI3cqDFxbdm5iy5YxtPLi4ikUxLcglneA3yHH4EEp2F%2Fg6rld0NmvTgxXd4Ko8vfIrV2m3bWoZpokzpJknMPMkWXVE&X-Amz-Signature=0801aa360bea992641bc861243f1a77ff7aca6459b278f336c4607b5b11429aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCR7AWZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC1MZSLv2n2rg7MjsFy9UfA27npYcNlGQnFg%2FoewglLawIhAMKX6oRouj65wKx3YOtxy5MgfzjvAEJpIV48kbJiuIYwKv8DCGEQABoMNjM3NDIzMTgzODA1IgwE91w49OcqgOpv%2F7Aq3APQR2X8vZ5frCoUSRqWBQNFV%2BG%2FCkONQ04pEJVC8Vj4LsP3c0OLKbmtGzKssj5e%2BC0n44Lcr%2BYSbAY4gguQ7Qn8bF7cGq0gqJsrrQrhUQ43XrZ17w8fO62rEUws5CQi%2F1VWJhEAOfJzlkThhlOxzs45IA%2FRVzVsuJ7kfz3bh0A%2Fz0kE6cZFtT0rzuWIDqyQa%2F%2BlUaQ3FegKdMUDoihQsZ3hClpjxoq7zypfyDCXNYknrBRKvLBy6y%2FKgiThkXX0TH5KnjkqBJwXYf7LyQ4cMhtb9HerySXYkg09Pr%2FxBYZ55%2BD0rCgLJYeSV%2F6I8YGWcVmqVHj1DqNdlVGijrMjCL3Af9LYXoc2blX7g2fz3B28qUiGWR5sl4oTSH3pg3YsjBLwjIxCOahlkrcd3nxitssSZeEu77a0DATRboImkKVRWlZnLEKmE9W3AL6nfoOJwMqr%2BK468Y%2BaGMYoj4vRgM%2BOuEEncA4QF%2BIq5DIgVia2AtAXoxvFCit%2F0QEw3wd2EoiDZwXdm9mZbm1TNpHH9vykVXMZdQiSMw79yzQqZbNyxcyFHGHwp5JFVQfjcZHkwsmMn97q1HQXB8c23bkcC7KVOrMMNfN01fzoFug0sgXTYTBUXOOVPepLbc%2B5djCIzcjEBjqkASigzB60THBszWVWzZWiXPg%2FJMEir3xSTLMsMRJP3gafTqSHJqQxnti7BH4agF93OYm9B6MxP6Pl84BT82LOe8Le%2FCDye3I42IUHHE6nZcuKygEDxmioiUTA86B34PDHjXQI3cqDFxbdm5iy5YxtPLi4ikUxLcglneA3yHH4EEp2F%2Fg6rld0NmvTgxXd4Ko8vfIrV2m3bWoZpokzpJknMPMkWXVE&X-Amz-Signature=11f60e2db17d72f503b7eadcccd04898e79e662f149d6af6d03cb5f88d76e162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCR7AWZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC1MZSLv2n2rg7MjsFy9UfA27npYcNlGQnFg%2FoewglLawIhAMKX6oRouj65wKx3YOtxy5MgfzjvAEJpIV48kbJiuIYwKv8DCGEQABoMNjM3NDIzMTgzODA1IgwE91w49OcqgOpv%2F7Aq3APQR2X8vZ5frCoUSRqWBQNFV%2BG%2FCkONQ04pEJVC8Vj4LsP3c0OLKbmtGzKssj5e%2BC0n44Lcr%2BYSbAY4gguQ7Qn8bF7cGq0gqJsrrQrhUQ43XrZ17w8fO62rEUws5CQi%2F1VWJhEAOfJzlkThhlOxzs45IA%2FRVzVsuJ7kfz3bh0A%2Fz0kE6cZFtT0rzuWIDqyQa%2F%2BlUaQ3FegKdMUDoihQsZ3hClpjxoq7zypfyDCXNYknrBRKvLBy6y%2FKgiThkXX0TH5KnjkqBJwXYf7LyQ4cMhtb9HerySXYkg09Pr%2FxBYZ55%2BD0rCgLJYeSV%2F6I8YGWcVmqVHj1DqNdlVGijrMjCL3Af9LYXoc2blX7g2fz3B28qUiGWR5sl4oTSH3pg3YsjBLwjIxCOahlkrcd3nxitssSZeEu77a0DATRboImkKVRWlZnLEKmE9W3AL6nfoOJwMqr%2BK468Y%2BaGMYoj4vRgM%2BOuEEncA4QF%2BIq5DIgVia2AtAXoxvFCit%2F0QEw3wd2EoiDZwXdm9mZbm1TNpHH9vykVXMZdQiSMw79yzQqZbNyxcyFHGHwp5JFVQfjcZHkwsmMn97q1HQXB8c23bkcC7KVOrMMNfN01fzoFug0sgXTYTBUXOOVPepLbc%2B5djCIzcjEBjqkASigzB60THBszWVWzZWiXPg%2FJMEir3xSTLMsMRJP3gafTqSHJqQxnti7BH4agF93OYm9B6MxP6Pl84BT82LOe8Le%2FCDye3I42IUHHE6nZcuKygEDxmioiUTA86B34PDHjXQI3cqDFxbdm5iy5YxtPLi4ikUxLcglneA3yHH4EEp2F%2Fg6rld0NmvTgxXd4Ko8vfIrV2m3bWoZpokzpJknMPMkWXVE&X-Amz-Signature=9e11168bbd0feb005f182f4156a98523bb520c41e2f8f9ec2ca5b37c69b12851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCR7AWZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC1MZSLv2n2rg7MjsFy9UfA27npYcNlGQnFg%2FoewglLawIhAMKX6oRouj65wKx3YOtxy5MgfzjvAEJpIV48kbJiuIYwKv8DCGEQABoMNjM3NDIzMTgzODA1IgwE91w49OcqgOpv%2F7Aq3APQR2X8vZ5frCoUSRqWBQNFV%2BG%2FCkONQ04pEJVC8Vj4LsP3c0OLKbmtGzKssj5e%2BC0n44Lcr%2BYSbAY4gguQ7Qn8bF7cGq0gqJsrrQrhUQ43XrZ17w8fO62rEUws5CQi%2F1VWJhEAOfJzlkThhlOxzs45IA%2FRVzVsuJ7kfz3bh0A%2Fz0kE6cZFtT0rzuWIDqyQa%2F%2BlUaQ3FegKdMUDoihQsZ3hClpjxoq7zypfyDCXNYknrBRKvLBy6y%2FKgiThkXX0TH5KnjkqBJwXYf7LyQ4cMhtb9HerySXYkg09Pr%2FxBYZ55%2BD0rCgLJYeSV%2F6I8YGWcVmqVHj1DqNdlVGijrMjCL3Af9LYXoc2blX7g2fz3B28qUiGWR5sl4oTSH3pg3YsjBLwjIxCOahlkrcd3nxitssSZeEu77a0DATRboImkKVRWlZnLEKmE9W3AL6nfoOJwMqr%2BK468Y%2BaGMYoj4vRgM%2BOuEEncA4QF%2BIq5DIgVia2AtAXoxvFCit%2F0QEw3wd2EoiDZwXdm9mZbm1TNpHH9vykVXMZdQiSMw79yzQqZbNyxcyFHGHwp5JFVQfjcZHkwsmMn97q1HQXB8c23bkcC7KVOrMMNfN01fzoFug0sgXTYTBUXOOVPepLbc%2B5djCIzcjEBjqkASigzB60THBszWVWzZWiXPg%2FJMEir3xSTLMsMRJP3gafTqSHJqQxnti7BH4agF93OYm9B6MxP6Pl84BT82LOe8Le%2FCDye3I42IUHHE6nZcuKygEDxmioiUTA86B34PDHjXQI3cqDFxbdm5iy5YxtPLi4ikUxLcglneA3yHH4EEp2F%2Fg6rld0NmvTgxXd4Ko8vfIrV2m3bWoZpokzpJknMPMkWXVE&X-Amz-Signature=fe797731c944c93a443b9a2ac2310ff7417dc5dd10d9546dd836e21f70d269e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCR7AWZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC1MZSLv2n2rg7MjsFy9UfA27npYcNlGQnFg%2FoewglLawIhAMKX6oRouj65wKx3YOtxy5MgfzjvAEJpIV48kbJiuIYwKv8DCGEQABoMNjM3NDIzMTgzODA1IgwE91w49OcqgOpv%2F7Aq3APQR2X8vZ5frCoUSRqWBQNFV%2BG%2FCkONQ04pEJVC8Vj4LsP3c0OLKbmtGzKssj5e%2BC0n44Lcr%2BYSbAY4gguQ7Qn8bF7cGq0gqJsrrQrhUQ43XrZ17w8fO62rEUws5CQi%2F1VWJhEAOfJzlkThhlOxzs45IA%2FRVzVsuJ7kfz3bh0A%2Fz0kE6cZFtT0rzuWIDqyQa%2F%2BlUaQ3FegKdMUDoihQsZ3hClpjxoq7zypfyDCXNYknrBRKvLBy6y%2FKgiThkXX0TH5KnjkqBJwXYf7LyQ4cMhtb9HerySXYkg09Pr%2FxBYZ55%2BD0rCgLJYeSV%2F6I8YGWcVmqVHj1DqNdlVGijrMjCL3Af9LYXoc2blX7g2fz3B28qUiGWR5sl4oTSH3pg3YsjBLwjIxCOahlkrcd3nxitssSZeEu77a0DATRboImkKVRWlZnLEKmE9W3AL6nfoOJwMqr%2BK468Y%2BaGMYoj4vRgM%2BOuEEncA4QF%2BIq5DIgVia2AtAXoxvFCit%2F0QEw3wd2EoiDZwXdm9mZbm1TNpHH9vykVXMZdQiSMw79yzQqZbNyxcyFHGHwp5JFVQfjcZHkwsmMn97q1HQXB8c23bkcC7KVOrMMNfN01fzoFug0sgXTYTBUXOOVPepLbc%2B5djCIzcjEBjqkASigzB60THBszWVWzZWiXPg%2FJMEir3xSTLMsMRJP3gafTqSHJqQxnti7BH4agF93OYm9B6MxP6Pl84BT82LOe8Le%2FCDye3I42IUHHE6nZcuKygEDxmioiUTA86B34PDHjXQI3cqDFxbdm5iy5YxtPLi4ikUxLcglneA3yHH4EEp2F%2Fg6rld0NmvTgxXd4Ko8vfIrV2m3bWoZpokzpJknMPMkWXVE&X-Amz-Signature=57f257109cd57789a7364d325f8ad258649494d275aca07cb4a11215df42b169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCR7AWZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC1MZSLv2n2rg7MjsFy9UfA27npYcNlGQnFg%2FoewglLawIhAMKX6oRouj65wKx3YOtxy5MgfzjvAEJpIV48kbJiuIYwKv8DCGEQABoMNjM3NDIzMTgzODA1IgwE91w49OcqgOpv%2F7Aq3APQR2X8vZ5frCoUSRqWBQNFV%2BG%2FCkONQ04pEJVC8Vj4LsP3c0OLKbmtGzKssj5e%2BC0n44Lcr%2BYSbAY4gguQ7Qn8bF7cGq0gqJsrrQrhUQ43XrZ17w8fO62rEUws5CQi%2F1VWJhEAOfJzlkThhlOxzs45IA%2FRVzVsuJ7kfz3bh0A%2Fz0kE6cZFtT0rzuWIDqyQa%2F%2BlUaQ3FegKdMUDoihQsZ3hClpjxoq7zypfyDCXNYknrBRKvLBy6y%2FKgiThkXX0TH5KnjkqBJwXYf7LyQ4cMhtb9HerySXYkg09Pr%2FxBYZ55%2BD0rCgLJYeSV%2F6I8YGWcVmqVHj1DqNdlVGijrMjCL3Af9LYXoc2blX7g2fz3B28qUiGWR5sl4oTSH3pg3YsjBLwjIxCOahlkrcd3nxitssSZeEu77a0DATRboImkKVRWlZnLEKmE9W3AL6nfoOJwMqr%2BK468Y%2BaGMYoj4vRgM%2BOuEEncA4QF%2BIq5DIgVia2AtAXoxvFCit%2F0QEw3wd2EoiDZwXdm9mZbm1TNpHH9vykVXMZdQiSMw79yzQqZbNyxcyFHGHwp5JFVQfjcZHkwsmMn97q1HQXB8c23bkcC7KVOrMMNfN01fzoFug0sgXTYTBUXOOVPepLbc%2B5djCIzcjEBjqkASigzB60THBszWVWzZWiXPg%2FJMEir3xSTLMsMRJP3gafTqSHJqQxnti7BH4agF93OYm9B6MxP6Pl84BT82LOe8Le%2FCDye3I42IUHHE6nZcuKygEDxmioiUTA86B34PDHjXQI3cqDFxbdm5iy5YxtPLi4ikUxLcglneA3yHH4EEp2F%2Fg6rld0NmvTgxXd4Ko8vfIrV2m3bWoZpokzpJknMPMkWXVE&X-Amz-Signature=35f77bbfec98b23188d013e4e16aa222571e666bdf21417c1382a212360dba25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCR7AWZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC1MZSLv2n2rg7MjsFy9UfA27npYcNlGQnFg%2FoewglLawIhAMKX6oRouj65wKx3YOtxy5MgfzjvAEJpIV48kbJiuIYwKv8DCGEQABoMNjM3NDIzMTgzODA1IgwE91w49OcqgOpv%2F7Aq3APQR2X8vZ5frCoUSRqWBQNFV%2BG%2FCkONQ04pEJVC8Vj4LsP3c0OLKbmtGzKssj5e%2BC0n44Lcr%2BYSbAY4gguQ7Qn8bF7cGq0gqJsrrQrhUQ43XrZ17w8fO62rEUws5CQi%2F1VWJhEAOfJzlkThhlOxzs45IA%2FRVzVsuJ7kfz3bh0A%2Fz0kE6cZFtT0rzuWIDqyQa%2F%2BlUaQ3FegKdMUDoihQsZ3hClpjxoq7zypfyDCXNYknrBRKvLBy6y%2FKgiThkXX0TH5KnjkqBJwXYf7LyQ4cMhtb9HerySXYkg09Pr%2FxBYZ55%2BD0rCgLJYeSV%2F6I8YGWcVmqVHj1DqNdlVGijrMjCL3Af9LYXoc2blX7g2fz3B28qUiGWR5sl4oTSH3pg3YsjBLwjIxCOahlkrcd3nxitssSZeEu77a0DATRboImkKVRWlZnLEKmE9W3AL6nfoOJwMqr%2BK468Y%2BaGMYoj4vRgM%2BOuEEncA4QF%2BIq5DIgVia2AtAXoxvFCit%2F0QEw3wd2EoiDZwXdm9mZbm1TNpHH9vykVXMZdQiSMw79yzQqZbNyxcyFHGHwp5JFVQfjcZHkwsmMn97q1HQXB8c23bkcC7KVOrMMNfN01fzoFug0sgXTYTBUXOOVPepLbc%2B5djCIzcjEBjqkASigzB60THBszWVWzZWiXPg%2FJMEir3xSTLMsMRJP3gafTqSHJqQxnti7BH4agF93OYm9B6MxP6Pl84BT82LOe8Le%2FCDye3I42IUHHE6nZcuKygEDxmioiUTA86B34PDHjXQI3cqDFxbdm5iy5YxtPLi4ikUxLcglneA3yHH4EEp2F%2Fg6rld0NmvTgxXd4Ko8vfIrV2m3bWoZpokzpJknMPMkWXVE&X-Amz-Signature=ec03556f8dd053dec2615278d6997b4463b539c696c7afe1ac9a1124e79865df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCR7AWZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC1MZSLv2n2rg7MjsFy9UfA27npYcNlGQnFg%2FoewglLawIhAMKX6oRouj65wKx3YOtxy5MgfzjvAEJpIV48kbJiuIYwKv8DCGEQABoMNjM3NDIzMTgzODA1IgwE91w49OcqgOpv%2F7Aq3APQR2X8vZ5frCoUSRqWBQNFV%2BG%2FCkONQ04pEJVC8Vj4LsP3c0OLKbmtGzKssj5e%2BC0n44Lcr%2BYSbAY4gguQ7Qn8bF7cGq0gqJsrrQrhUQ43XrZ17w8fO62rEUws5CQi%2F1VWJhEAOfJzlkThhlOxzs45IA%2FRVzVsuJ7kfz3bh0A%2Fz0kE6cZFtT0rzuWIDqyQa%2F%2BlUaQ3FegKdMUDoihQsZ3hClpjxoq7zypfyDCXNYknrBRKvLBy6y%2FKgiThkXX0TH5KnjkqBJwXYf7LyQ4cMhtb9HerySXYkg09Pr%2FxBYZ55%2BD0rCgLJYeSV%2F6I8YGWcVmqVHj1DqNdlVGijrMjCL3Af9LYXoc2blX7g2fz3B28qUiGWR5sl4oTSH3pg3YsjBLwjIxCOahlkrcd3nxitssSZeEu77a0DATRboImkKVRWlZnLEKmE9W3AL6nfoOJwMqr%2BK468Y%2BaGMYoj4vRgM%2BOuEEncA4QF%2BIq5DIgVia2AtAXoxvFCit%2F0QEw3wd2EoiDZwXdm9mZbm1TNpHH9vykVXMZdQiSMw79yzQqZbNyxcyFHGHwp5JFVQfjcZHkwsmMn97q1HQXB8c23bkcC7KVOrMMNfN01fzoFug0sgXTYTBUXOOVPepLbc%2B5djCIzcjEBjqkASigzB60THBszWVWzZWiXPg%2FJMEir3xSTLMsMRJP3gafTqSHJqQxnti7BH4agF93OYm9B6MxP6Pl84BT82LOe8Le%2FCDye3I42IUHHE6nZcuKygEDxmioiUTA86B34PDHjXQI3cqDFxbdm5iy5YxtPLi4ikUxLcglneA3yHH4EEp2F%2Fg6rld0NmvTgxXd4Ko8vfIrV2m3bWoZpokzpJknMPMkWXVE&X-Amz-Signature=2d489309615ef7855f243950884cc17de3a4fa3b15707cd8592ea7067e8926d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCR7AWZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC1MZSLv2n2rg7MjsFy9UfA27npYcNlGQnFg%2FoewglLawIhAMKX6oRouj65wKx3YOtxy5MgfzjvAEJpIV48kbJiuIYwKv8DCGEQABoMNjM3NDIzMTgzODA1IgwE91w49OcqgOpv%2F7Aq3APQR2X8vZ5frCoUSRqWBQNFV%2BG%2FCkONQ04pEJVC8Vj4LsP3c0OLKbmtGzKssj5e%2BC0n44Lcr%2BYSbAY4gguQ7Qn8bF7cGq0gqJsrrQrhUQ43XrZ17w8fO62rEUws5CQi%2F1VWJhEAOfJzlkThhlOxzs45IA%2FRVzVsuJ7kfz3bh0A%2Fz0kE6cZFtT0rzuWIDqyQa%2F%2BlUaQ3FegKdMUDoihQsZ3hClpjxoq7zypfyDCXNYknrBRKvLBy6y%2FKgiThkXX0TH5KnjkqBJwXYf7LyQ4cMhtb9HerySXYkg09Pr%2FxBYZ55%2BD0rCgLJYeSV%2F6I8YGWcVmqVHj1DqNdlVGijrMjCL3Af9LYXoc2blX7g2fz3B28qUiGWR5sl4oTSH3pg3YsjBLwjIxCOahlkrcd3nxitssSZeEu77a0DATRboImkKVRWlZnLEKmE9W3AL6nfoOJwMqr%2BK468Y%2BaGMYoj4vRgM%2BOuEEncA4QF%2BIq5DIgVia2AtAXoxvFCit%2F0QEw3wd2EoiDZwXdm9mZbm1TNpHH9vykVXMZdQiSMw79yzQqZbNyxcyFHGHwp5JFVQfjcZHkwsmMn97q1HQXB8c23bkcC7KVOrMMNfN01fzoFug0sgXTYTBUXOOVPepLbc%2B5djCIzcjEBjqkASigzB60THBszWVWzZWiXPg%2FJMEir3xSTLMsMRJP3gafTqSHJqQxnti7BH4agF93OYm9B6MxP6Pl84BT82LOe8Le%2FCDye3I42IUHHE6nZcuKygEDxmioiUTA86B34PDHjXQI3cqDFxbdm5iy5YxtPLi4ikUxLcglneA3yHH4EEp2F%2Fg6rld0NmvTgxXd4Ko8vfIrV2m3bWoZpokzpJknMPMkWXVE&X-Amz-Signature=ea9a71c4f008d8e2424c0950c4f5b40c2f7fd00a38796658b3e2fdfce341648f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E2FZGMS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBG%2Bu7yzlnl9eJ6aTm4KZKMUT1rCXu58nIIFsgcCr3Q3AiEAwvpeCklKwakLNX6vbzvR77XCdbR%2B01Nn2e2raE8Yr%2B4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDE1PS5yPkd9pv4suxyrcA8fG24nwW47CCTJyleGPUijjGUKczzNaBhiwE7ZQrxi0%2FSA9T12Q70GZ28z1YL9s1CNsagZZ%2BGdpX4mTo1Ot2eyUISxs4YTZVKBQGoEK5kYjD13U5LklqIxxSpJerfQbtMihGei7KVtyoosHpki9EdkTPgGiBPx5WPYXOG%2Fc2OYSWOAmYGripwaf0wQ7c3j%2BMHyc0HBICZvayJ5QhiYTM9ulybMIF7X2HQH6yRvX0Ddy1fKeJ48rbSnIJmrDpAhGQGKKvCxRV0sOWaDN2OH3qeOue5LUImyPQVERd99vp8vz%2B7nto9%2FeKQ47a2f5eJC7dyyN4MUcqraoJL8faxHcwE5m079kLO46oJoW7MfT4DuE4MNukIQamdvf7kXSnnvEbUOFHYG%2Fs%2BqrEk76ReG0JWjxWwhtwL1Rl8RrYNTUv44Lk10ieWPtpv8w%2BZcvPVpVbTW%2BvAb%2BxHcVTnYTwKH48te2LVdiIGdrFcG4mWWiCiF0y23g9MSuOLJsOJ0TcjV9g7qugDsUxh2DIivQ68n2OOdxWMFvSfLBBtraKEFE0GJ7bT6Inx%2FCmjaQwMOaI9wqg77vKcaqvQ7QqLb%2Bj7S330wWGk64DNkNu07ydK5NT3qUkKrcXjsiklF08srvMMzMyMQGOqUBOTJG%2FoDB8nRcjFbqoxuxMQimLS24uN3YhE4yABobmYPYFvU5DRA%2BxpAi3S%2FTq1WneFX%2FZ91w82zU5hpfZb6LpEUrcEyZYyptuyUkt2Vy0bF0XFsVBHO%2FI4CqStza5BbGIgTPA202nRJBJPYx07uWGl%2F8Cd3mzvJlcfP6ckHbfHtu2vckh15clDZXJpYYRKO4CtRGUJAFQO5wOPkJsyBFNNkPb4I5&X-Amz-Signature=261c7b716e6905d0139b8168e64508b3f179abe4e8b31b7f241be6bb9e1b0029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL47LAMU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDG%2FLBFO2ZG4%2FtOVP9rGJN%2B79ji2up2d2OIRJaaONsy2AIgemi38CvEBj8rYyXw78M%2BVeAQzFsbciOr2QYGNUCmsLEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDO0qCyrEhYwTo9HAKyrcA%2F9SWXCIy9Th49pn43L3yZQ9oztT1oZm2%2BMaOryssbq2Pdzdi0%2FmYLyRAnbV2eJJlrVq5ULeEs39sJRHgeOE%2B8V1khUyL21N27zPiXABXIS6mjlOSXxniO%2Bs93IcwNUxis1Mlyj9J72WVgsMdzlQlSSyvtlwitXPe%2BFbUEYdCwIBQY4bfP6T6tmoa%2BHaJTarUpar3mKjzYZsQx00Z0fb%2BJM19GtMBeW5NLb8oWsVYvR%2F8likV1NhcD%2F4GhSwNNnTG%2BRLtXeTLhwryk9z1H5I8zzl7neb2VRpoMLyfmdFNzxBd77tUe064a55ChB8RANFxx38Tr6V8B3qQIXx8xWRfNXtZtRzpz2qxU7CEn1%2FyK6Zs8y%2Ff%2BM2q6oY%2BnaSqjjkX%2B51uXpvoRAtjEBc1IqClk7h%2Fatg1j75mxlBst3CJBY4qyTSL48CYP%2FgUefiaB%2FLWfq4PCiDljwZENd92SHG8VdesGdhBLgBHf5RSBnhED4Y6aThkWCHnjxad%2BfNUIPlBqbiJ8Q5Qh9j46JFqtzOVr0GEgtyiK%2FRZqBpxQLXxzkyyPbyNtk9uRUVAYfRVMXoYuN8rV5%2F8Uv3uHCvXfqY%2BNKXV8%2BrUHkPw0GeuHL%2Bpk5Sy%2FE6p6sK6Q6x5d8QMMDMyMQGOqUBMFF6Ek5DSeQajXq1uUwMY0UP8gOGZaF2CWfxZhgT8xSoTypHHnnOg03sqVlKl0Q%2FfW9wj8k0wxUJyFvCbNj970GwG5JnvPCByYfkmp3hDPk5kGGYb2BRLxJx5CQBkn0nFDoIMptmIZwahpLHzHo5Ih2IWhYbTIHAFL1OU09DQckE22G4nCVAdhcfk4gSlBqBnPPmG%2Fn3L5YwbolpcegwK2PUBA%2Fu&X-Amz-Signature=7eeda83a01ce383d0c6e4ee16efecf2ef288d3445e76da213306b1c7ed27ff35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMK4OPCF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIBw4LgpScVbB7HXQJ%2FnCHZs7CjPeoUrqtEwHkAzhf57cAiA6hFGxT2dJQ3ilfViacIqTRWZPJL7y79EtY7SA0asjTyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMtl%2BnuljrYCxYHkF3KtwDefGDobPfVOfdy81S85n57xxhyUmPBD3XKkXBE3JdPuX5Mez5feNmH%2Bk5TloCm%2BCETOaBthteCCQ800JaIv3pPeyUSrxu%2FMGDflGAEwX6O1tt2HJINSCRN4RK4OHEpkrBdhjlamJ2KL8eM9SqYm%2BICcOpoemyjyyagfCZQC5g7PrX%2Fdx0Jrv2wJ8bCvU83PXAFlWeEHFZGQOZo3gDxWYQgc6kXNk0xgVuxlw1zBrV4ZQfuJxDIamFZpJN3zU4Y5uEVaJ%2FhoQWty1K40WEUXzXcQ%2BSveJ%2BckSDPuV%2BKeCR6YRo2Zzib32JoJx8SpfE1VUt00usLN%2B0hgZS6F6578hlPMCOm2H1KGhI31QPqk6uZFLDEh3nPJKX6wtHd81r%2BKvE8KijL0%2BJygUA5WSBJIUfAy%2FmQy8QhF4OzcllppkZ%2BKPMVMP1PF%2FIHwUHdkU9lKOlrEASNT37VkLR2r%2BlmkcQWaZD7rkeyZTrolC0IpBYKvvPvcytOCgHl6Fc8RsAwhG0F4qGj5q72JuFQI%2F6acL0BWRCX2y3VKxVabexG7%2BBFoA0UwUH1REIHUVHqB9Xi3hpg7L%2BhMRzjNdkxpRPqnKmfdMnbjcqNhNXNPK7IWpW2HX42MPZ8Ne7xT4vF%2Fgw6MzIxAY6pgF0WngTKTMQtqZAVjaZ%2BP2OvSd1ijm2mmAJtdcOMUuQ4l1tqSR4i56WIw8mbrCn16L6ThTktXXKVSqFkoXEdsVTIiPGgHOlexWdZOaTUxx4RMVnA01OS4LQ49mBvBjRlUcvXN%2B991uiJD5cens1HVjYTrPAzyxX4Rs4tDVSPo0g6waR2l7i7FQznQPLyjONu0WYE5sucHkPcN27g5Vha%2B8%2F8MOyV3ZA&X-Amz-Signature=868187c4780662f0308ce2b1ed9886c835880fe44b60a44aa4ad6ea5aba13809&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCR7AWZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC1MZSLv2n2rg7MjsFy9UfA27npYcNlGQnFg%2FoewglLawIhAMKX6oRouj65wKx3YOtxy5MgfzjvAEJpIV48kbJiuIYwKv8DCGEQABoMNjM3NDIzMTgzODA1IgwE91w49OcqgOpv%2F7Aq3APQR2X8vZ5frCoUSRqWBQNFV%2BG%2FCkONQ04pEJVC8Vj4LsP3c0OLKbmtGzKssj5e%2BC0n44Lcr%2BYSbAY4gguQ7Qn8bF7cGq0gqJsrrQrhUQ43XrZ17w8fO62rEUws5CQi%2F1VWJhEAOfJzlkThhlOxzs45IA%2FRVzVsuJ7kfz3bh0A%2Fz0kE6cZFtT0rzuWIDqyQa%2F%2BlUaQ3FegKdMUDoihQsZ3hClpjxoq7zypfyDCXNYknrBRKvLBy6y%2FKgiThkXX0TH5KnjkqBJwXYf7LyQ4cMhtb9HerySXYkg09Pr%2FxBYZ55%2BD0rCgLJYeSV%2F6I8YGWcVmqVHj1DqNdlVGijrMjCL3Af9LYXoc2blX7g2fz3B28qUiGWR5sl4oTSH3pg3YsjBLwjIxCOahlkrcd3nxitssSZeEu77a0DATRboImkKVRWlZnLEKmE9W3AL6nfoOJwMqr%2BK468Y%2BaGMYoj4vRgM%2BOuEEncA4QF%2BIq5DIgVia2AtAXoxvFCit%2F0QEw3wd2EoiDZwXdm9mZbm1TNpHH9vykVXMZdQiSMw79yzQqZbNyxcyFHGHwp5JFVQfjcZHkwsmMn97q1HQXB8c23bkcC7KVOrMMNfN01fzoFug0sgXTYTBUXOOVPepLbc%2B5djCIzcjEBjqkASigzB60THBszWVWzZWiXPg%2FJMEir3xSTLMsMRJP3gafTqSHJqQxnti7BH4agF93OYm9B6MxP6Pl84BT82LOe8Le%2FCDye3I42IUHHE6nZcuKygEDxmioiUTA86B34PDHjXQI3cqDFxbdm5iy5YxtPLi4ikUxLcglneA3yHH4EEp2F%2Fg6rld0NmvTgxXd4Ko8vfIrV2m3bWoZpokzpJknMPMkWXVE&X-Amz-Signature=d0617d4623e5db20d5ffbb11deffdb3c8c9356a0f10c3ac59cebfef0676d7c33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBXBYZJU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICqRPJyocuCVjuWE119V9ulh2q%2Bm1yU%2BXk3itYiiGXH8AiEA6BdVHrV4CGjEYt153WdBijaFTO%2B2b2kf%2BXvGoF1i0poq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDACXWhMdcveZXLS7mCrcAzegkTLH5YBPzGZh1%2BM4KVhoy%2FvFgFMVAoSz3uXBnHZ3BpXFGEgQrxA83kMHka%2BemtpeKH1P9RaHK5NMBnCbowgi45CoR3SKQmGvAJLphkqw7XX9oT6HfiRgmiwkBbDIKPgaUOUn2HlyDzV9EYxfal0zBYGrVxKjummv4lPmUNP4spQaBaPPyYrF%2B4GSkIfaHfd%2FqXxOKUn%2FJT596v5rYjQFqTt5DSZdxwo8H68jXkGArTffTfEvHcd2OXeliQTHcBWejXKqj9kJPaIXUTjtK%2FHkcbSeJjGPsBea0N3BX5j6SBmQJp0HReL3DHlEEPodJlVwlkSWS0aSQHri%2B6KPhxcHhRPPqwmWgzQiLqhFwle%2F%2FCudN%2By0s4y0RwDS1fBTAaaTAiOg5%2B%2FhneYll9vG5YqfgHeQL%2FknT%2B3Rro%2FKiOKplxKeXOqH6mQ5VUAUGZF6HOPkYLTuVmCOqEuYgsUjR9UUKAP43BszMobGzuUGJbje45GysWP1%2B4sJBdKDK8XQPJZ0dHKaU0ZD0%2FxMKwppnVKl9LQpynGwv0ovwRZcXnDajg6iF4zM7kGM8LbThztW02%2BNaYSsq%2F64ngx0rMQN9vpQHre5DPplPJqwYZkDR6hZPcsbWfLR29SmQ0%2BNMK7MyMQGOqUBcJkgx8qAobBqMZZCaLEdddRFWmVIOgYqcYPoY1b7Aw1hv1SYzyUkzGSAQVJXLiY4j7hPLQx0SwZ4c45M7axje5U04%2FIKyxZYDNLv9Pk%2FUn0YrTBnODUPVm4Pk4cfED1rO2ouOMHjAQ1E470rzEx6C1FglwGSY8TRRJ1wLQDL3fkaQSKKjK4VuGnugrAcjCyW%2BTUc%2FOoSjToFYkZAtMra8XGf6qqp&X-Amz-Signature=a94d47160492ca05f1c05f47dea6d173faf5feeb71d6a1c0108a8beaf206a8a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCR7AWZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC1MZSLv2n2rg7MjsFy9UfA27npYcNlGQnFg%2FoewglLawIhAMKX6oRouj65wKx3YOtxy5MgfzjvAEJpIV48kbJiuIYwKv8DCGEQABoMNjM3NDIzMTgzODA1IgwE91w49OcqgOpv%2F7Aq3APQR2X8vZ5frCoUSRqWBQNFV%2BG%2FCkONQ04pEJVC8Vj4LsP3c0OLKbmtGzKssj5e%2BC0n44Lcr%2BYSbAY4gguQ7Qn8bF7cGq0gqJsrrQrhUQ43XrZ17w8fO62rEUws5CQi%2F1VWJhEAOfJzlkThhlOxzs45IA%2FRVzVsuJ7kfz3bh0A%2Fz0kE6cZFtT0rzuWIDqyQa%2F%2BlUaQ3FegKdMUDoihQsZ3hClpjxoq7zypfyDCXNYknrBRKvLBy6y%2FKgiThkXX0TH5KnjkqBJwXYf7LyQ4cMhtb9HerySXYkg09Pr%2FxBYZ55%2BD0rCgLJYeSV%2F6I8YGWcVmqVHj1DqNdlVGijrMjCL3Af9LYXoc2blX7g2fz3B28qUiGWR5sl4oTSH3pg3YsjBLwjIxCOahlkrcd3nxitssSZeEu77a0DATRboImkKVRWlZnLEKmE9W3AL6nfoOJwMqr%2BK468Y%2BaGMYoj4vRgM%2BOuEEncA4QF%2BIq5DIgVia2AtAXoxvFCit%2F0QEw3wd2EoiDZwXdm9mZbm1TNpHH9vykVXMZdQiSMw79yzQqZbNyxcyFHGHwp5JFVQfjcZHkwsmMn97q1HQXB8c23bkcC7KVOrMMNfN01fzoFug0sgXTYTBUXOOVPepLbc%2B5djCIzcjEBjqkASigzB60THBszWVWzZWiXPg%2FJMEir3xSTLMsMRJP3gafTqSHJqQxnti7BH4agF93OYm9B6MxP6Pl84BT82LOe8Le%2FCDye3I42IUHHE6nZcuKygEDxmioiUTA86B34PDHjXQI3cqDFxbdm5iy5YxtPLi4ikUxLcglneA3yHH4EEp2F%2Fg6rld0NmvTgxXd4Ko8vfIrV2m3bWoZpokzpJknMPMkWXVE&X-Amz-Signature=47cdcb3b6c3ee386e04f3a7512416f7d3afc39309e36bb961864aa605c2c8caa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466545BU7U5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDA%2FJ%2FHYtSK5Nud2N2b7Rmf5Nvf4MWStp%2Bbqg0uTZ%2BN2gIhAOd8uBTwaaL8AROKr3599w7bNSwkkTRCJRmLokre1sxkKv8DCGEQABoMNjM3NDIzMTgzODA1IgyV6DEYaTB6cZUGgjcq3AN2eVBw%2F2y6Sxa%2FTt4yiqgaabEzyIT7RIbmoqDSqsnxuIVQWgndcWv0Id7QQAaX2%2FjyqzrMOFomD9MTitb0odKwblOEsj1W3Ehg%2FBES3iQuwdELfmZJKXHqiZIkn8mrWqnGCxS7WO5za1IJdpvBqFTJ1AZzcQaXyrmxxvTOBYxIZzjl4uKTv4bd0WF69ZEXtKm8ThUqdnZA1TkpWMi1h5NzrxDcAphLCmsWTAE2YkGt57R9kWAy42efYpdqqjizE%2BtEuFGMdcVWvaTi9UQHT6KwaN76eS%2FUe5%2B3B6YvoeT6Xn5nmoXCPHRhhRIgxEC%2F2LKOkmi4HBhXIRDakw1npN1Fu8JyW7SOtIcp%2FSNk6fE5UkuDdhvTH30OuxqNCXKtNlTVG74YVUDZ7rJtdEGkqDOK28sCV16wFaBKluI%2Br1B0muzbIc6ZhHNEAnjmAabQSqL4KL1q86giQXJ6Rr5LTrCaj9EQLGLl0JVMmCio2asl2L4Y50bQ0sh0XG%2Bv7rj015kK5ntBxUjFyXXenrm7LvDtiD%2F49e0BxpYbNBVPVZtUJg8ZJg%2FPhd62ILDg1Y3lsnYIlhxDqWs3jDKTMai5w%2BibWJkSPcyi%2FbV1dIfnYHXrvq5CzxX0UIKYwY2lcDD1zMjEBjqkAUAHi3aeu0ib9G6tx10yWjBrGe6FGI1KlhgbiwVc3pr9Jvvosif2DvM0h71%2BLOuogp82pE9lb3SjXKFdrAqpqMQmm7MKMGKPdWdwKtQdI70wY3WqEQfqVfoMg%2BLalYl%2Be5KA9UYvd2vNAcbAVWfOX2W6BtGM3fgrtm34EFQcgb1pUBY8wAgt63fcbRseinu2o8fshVCVW0Zchoc0KSZXrqqYltUV&X-Amz-Signature=910857b9d885e0784aff78ff4db514dafbaaf348c77f906b71a51cb2d090dca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCR7AWZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC1MZSLv2n2rg7MjsFy9UfA27npYcNlGQnFg%2FoewglLawIhAMKX6oRouj65wKx3YOtxy5MgfzjvAEJpIV48kbJiuIYwKv8DCGEQABoMNjM3NDIzMTgzODA1IgwE91w49OcqgOpv%2F7Aq3APQR2X8vZ5frCoUSRqWBQNFV%2BG%2FCkONQ04pEJVC8Vj4LsP3c0OLKbmtGzKssj5e%2BC0n44Lcr%2BYSbAY4gguQ7Qn8bF7cGq0gqJsrrQrhUQ43XrZ17w8fO62rEUws5CQi%2F1VWJhEAOfJzlkThhlOxzs45IA%2FRVzVsuJ7kfz3bh0A%2Fz0kE6cZFtT0rzuWIDqyQa%2F%2BlUaQ3FegKdMUDoihQsZ3hClpjxoq7zypfyDCXNYknrBRKvLBy6y%2FKgiThkXX0TH5KnjkqBJwXYf7LyQ4cMhtb9HerySXYkg09Pr%2FxBYZ55%2BD0rCgLJYeSV%2F6I8YGWcVmqVHj1DqNdlVGijrMjCL3Af9LYXoc2blX7g2fz3B28qUiGWR5sl4oTSH3pg3YsjBLwjIxCOahlkrcd3nxitssSZeEu77a0DATRboImkKVRWlZnLEKmE9W3AL6nfoOJwMqr%2BK468Y%2BaGMYoj4vRgM%2BOuEEncA4QF%2BIq5DIgVia2AtAXoxvFCit%2F0QEw3wd2EoiDZwXdm9mZbm1TNpHH9vykVXMZdQiSMw79yzQqZbNyxcyFHGHwp5JFVQfjcZHkwsmMn97q1HQXB8c23bkcC7KVOrMMNfN01fzoFug0sgXTYTBUXOOVPepLbc%2B5djCIzcjEBjqkASigzB60THBszWVWzZWiXPg%2FJMEir3xSTLMsMRJP3gafTqSHJqQxnti7BH4agF93OYm9B6MxP6Pl84BT82LOe8Le%2FCDye3I42IUHHE6nZcuKygEDxmioiUTA86B34PDHjXQI3cqDFxbdm5iy5YxtPLi4ikUxLcglneA3yHH4EEp2F%2Fg6rld0NmvTgxXd4Ko8vfIrV2m3bWoZpokzpJknMPMkWXVE&X-Amz-Signature=c6afe013f6ceb68b821a19907a9267c7d1fc5994c60c495edc779129ee6d3305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIPO7W34%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDjc0iQI%2BJjqbI0ogNjmYw48e1gbw9JoieTfqWz1fP5IQIgW8Q5mMB%2FYinRQVLcL5OHozDz7%2BRTqOAwBqpwQTM2FxYq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDGPsrtVCvrl8kPp%2FPCrcAz26dwhNxOsAczGXQmZvKazqZ6oE4PSBh1bTPVaavmGooIAM39OY2ckuStk5KZC%2Bb6dX9UU9XzfcBAhZ9%2B9tSHejxwF8XW%2BYOyp50A%2B6qpaQeYZwKbT9LhJ6RDqwAiasdrK%2F3pJC2EHdIzFpBHjVZcxBQ%2B2MU0J0QzwdrDKfRRVoJjgflUosydwvJNZ9pRYRpkixKsl3ekD0g1zn6U%2BOFk1WtsEzzQroGcoX9Uls6jQyiwgCElJPNcIX%2FC0Gsdoce79FtxfP6cpGDrB4qnJLrD3jT5W8VkPwSrjxP4OPsk9gd7bENIKhqCifiYSZ1%2FAlqUiBd8nR8MNXQFFX3P6vVZjAx4dbvvwaZzgJ6vxNySaxuHPG9HQRzbBU9a5BX8XpbnB3GW5RENJJTZiETfwKYftwXMiSR5qs4Y6kvBIBEZKnKTzUF5E%2F2kG8zDHHOcCIvsooJLdOunHlxlhKQ6YMoq2h1MHl4JCghMH1S7l05x7M9EyE%2FXq%2FtrOF7%2Bs0ST8Y1GCpM93hX1LjjPOzASaSClvvPItc83gTZK2rJzKiUeqhZMmAXGkMOCSCHi%2F%2F%2BZLRBkifTmm4Uc73oRDgBn2tRMLDxn9hm2K5q69wAcSr6rou7phFtPma61UHpRTVMMfMyMQGOqUBnXkUIsaAjHYSDPNZRPxwPZ5W0%2FrED%2B0YTxfYlSNxL%2FfYZCIyxzX67YCRPzqB09tB8F2IRusg2StPb4jX5wd6%2FJKcpbgaWqyY3Du39wRpnONIkzGM0PCsRCOTPzdE8APnmHWf%2BYg6LZIs%2ByqqtmTZglQDWcm1M1l%2FSMiNANheVdNsspHco%2FUER3Mixz4eYSCvzLiK5CtrmFjknSrgtlzQ9II0%2BecY&X-Amz-Signature=15a975e39712b5872f10dcc4551e0729a07058aa7dd9d460fa1e7589bedd8712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCR7AWZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC1MZSLv2n2rg7MjsFy9UfA27npYcNlGQnFg%2FoewglLawIhAMKX6oRouj65wKx3YOtxy5MgfzjvAEJpIV48kbJiuIYwKv8DCGEQABoMNjM3NDIzMTgzODA1IgwE91w49OcqgOpv%2F7Aq3APQR2X8vZ5frCoUSRqWBQNFV%2BG%2FCkONQ04pEJVC8Vj4LsP3c0OLKbmtGzKssj5e%2BC0n44Lcr%2BYSbAY4gguQ7Qn8bF7cGq0gqJsrrQrhUQ43XrZ17w8fO62rEUws5CQi%2F1VWJhEAOfJzlkThhlOxzs45IA%2FRVzVsuJ7kfz3bh0A%2Fz0kE6cZFtT0rzuWIDqyQa%2F%2BlUaQ3FegKdMUDoihQsZ3hClpjxoq7zypfyDCXNYknrBRKvLBy6y%2FKgiThkXX0TH5KnjkqBJwXYf7LyQ4cMhtb9HerySXYkg09Pr%2FxBYZ55%2BD0rCgLJYeSV%2F6I8YGWcVmqVHj1DqNdlVGijrMjCL3Af9LYXoc2blX7g2fz3B28qUiGWR5sl4oTSH3pg3YsjBLwjIxCOahlkrcd3nxitssSZeEu77a0DATRboImkKVRWlZnLEKmE9W3AL6nfoOJwMqr%2BK468Y%2BaGMYoj4vRgM%2BOuEEncA4QF%2BIq5DIgVia2AtAXoxvFCit%2F0QEw3wd2EoiDZwXdm9mZbm1TNpHH9vykVXMZdQiSMw79yzQqZbNyxcyFHGHwp5JFVQfjcZHkwsmMn97q1HQXB8c23bkcC7KVOrMMNfN01fzoFug0sgXTYTBUXOOVPepLbc%2B5djCIzcjEBjqkASigzB60THBszWVWzZWiXPg%2FJMEir3xSTLMsMRJP3gafTqSHJqQxnti7BH4agF93OYm9B6MxP6Pl84BT82LOe8Le%2FCDye3I42IUHHE6nZcuKygEDxmioiUTA86B34PDHjXQI3cqDFxbdm5iy5YxtPLi4ikUxLcglneA3yHH4EEp2F%2Fg6rld0NmvTgxXd4Ko8vfIrV2m3bWoZpokzpJknMPMkWXVE&X-Amz-Signature=d27afa1199da8f70588b54c3d7f31508aaea76dbff2ba85f276ebcd65e0f52b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PP63GOJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCdwN4XT5Z7t1sb6e%2FfgtnrL0l5jlVNMR48tLyv6pDb%2BAIhAIW2Gd3KJ9PFJ8R%2Fg3J68pKyPBTLc4C0gwWC6Sf2WuBeKv8DCGEQABoMNjM3NDIzMTgzODA1IgyWLgkttNdTbl5yiEMq3AN9AlWSqzfT2bzUJYzy2sjr6RLhcJhVyqTv1Yl1URI2IrpO1huAVTaDoeY6jCgk1z4G2opH6o7vKCkkyB6qKV3xq52WXeSncBWKdgew6MtVEt20gvIFAXfSqhqxjgwjThPXby9WyvuXQY5Hz7HdIKOdZQpf1WA5lCHRUayWmc4CZ03%2B15QytIaVCEQpvtK0VrdiCBdAwrvE6OPoNqinMELSYIjk3WZBcXfL%2BrEG4mIeIWKD4oFJAYcJuG4NIC7OBYFpP6JQYYAmTCoDr3f8telf9v3PBdvzR1hxfJd3FBGlBDVOw2uttNbLJf5foM2O5v1R0vEGvoJ8FV4DHPmti5Pg1vBcgt4tt7gaDi5ukpCRKjl6bwirFVkph7xjfYQ%2BuUbFfjeON7Gh0JlxeVN5yZn%2BSb%2BweiDTYV4%2B1SAZCAQyqoAW5wii9fMZD%2Bu%2B52gJ6lpwigmog0DxoanjRy6MYQVaHYomRdjqcm8cGI5hahzQozA2qA5seGn4gNwk1%2F26w6tafzv%2FdFunjg2oryRPzKpvPkNQtrmuyrcTbMiWedmIrXllP86vWXYJCtjfKvNgLwvRF%2FvvxcJYOeQWGB%2FKJdeN5oGO43yE8RgsaRE8JRaAL3IUET4Ms8XPWn6EcTCGzMjEBjqkAXw%2FG%2BeJwlrKqjkL%2FWSBC4V9Mz6Qj90PzCtMLLwZvQw3JOpdLL4OmdIDA4lbFPNGUXjKwyfuOOETYjSawfidzLp%2BzgwApYqUewuqGHq6Wop%2FeVvDkXm%2By9Amnr3N9Ig6UzhLM%2B3jTGbB1wKj7t%2BCncCJc33cwk0BBoRxA8U35hDvYsrNLCZRkxz2NOWU5y6HB%2F3n%2FtYQ1JomYXZGJg57Qec5q%2Fo5&X-Amz-Signature=fca7a83d85b39715669d469e49230b6acf194e45b3010eb7b3e6d515644f3801&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666Y2RPJT%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD9DZMwn0LL9N97%2FeWIlsB6jCds4BhQ9G%2FttyU1tABNfgIgJ%2Fe%2B5ongv92ZVfJ63BZ%2BulkSD%2FwXXA%2F9nJaGT0WSIB4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMp6zaxbpdf%2FHwtsMircA0Fb%2BY%2F%2FCvzU2oe%2Bkj95a%2B4Ra2Vt0ug%2F79TP0ARWDE5Ypwy2%2F5pfkLXtXZXFwzhFBkyyZD2ZdcyuJnCyvi1%2BNDhSoYfoAna%2FR5OcQDg%2BGSx0%2FC94hHUqbw%2BU704POv5XiWeiSx%2FdDDodFw3AKPhPxItwXSFweXt3kQjSPdaRcP5DszajAE6EBx3uLcXFTDihwq3iz%2FFitXn0Pchjtxq%2FSkmfvThu38AQLG9Jb92y3KuSac2tZBETLCRgiRCVE6gYeFzUFvkaXY1CZ8c7iaoZDs3NX08W92tNOhXmbE%2BLMUpFscRRHftgaPPXIuxg9qqG24GyIQz6e4isuN7YHJOIH%2Bz0Z5QnMFRxOdAhUnLgDWXO8wVvVm4jhA%2BZDHIX%2FhYTZS4brr9LY2LFzgZ%2FZq%2B8TQ9XQQdpKBvl6ivIZ7DPXv%2BmZ25QrKbrafhm9TzAoLlNNEum%2FZ5oqOOERJrCeCZyj9lowkIl480%2F%2FkHklB87rWzrRgvPKWaub6p%2BExh6B7GLSXGmuWSyy7eFle7Za20tz7WM%2F85voTH64rdewBQ2ga4Ridq8zXj3KT5%2FBMkLuriQdfl0I0J0%2FByAEEeRc5SIUFjwXoQcc59YgGtF22sQjOn2AIlvkUojgEWpsDYzMJjNyMQGOqUBFsZz13DANiOgpWK2Y4oc%2BcvHm8%2BuYJvJMe12Smvwlp%2Fuh6L7wmGqOQvynxpslkoSbNVXZf%2BSRSNvn8Ic7gJsLMz43Zd3HXnIW2HldaYUb6pajnWanyjv%2BjHHrKJV53Ta4amyR1b%2Bn0j%2FfNrQLyAZ9Du1eRl85LFqABWOJx%2FoHxWF2xBBQOgG4DIczVXK3PX9In8MOjOqFnaKgfTKBnYWURbddzJ%2F&X-Amz-Signature=433bdb9b37d1f019b1c0f211b705cd58950ed4c231d1b63db60b22e7193c608b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VOPU2WU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBqIJQoA%2BJKe%2BZ0vFxdnMkNV9wajuRPyY8MNAo9vg8NxAiEA%2BdJ8qmwYCkAw7Ugo%2Fc5qXO6VUjgiwLBIpSiGvWDPQ54q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMaKfdEv77mACpijNSrcA1%2FXs3mA0kYWzITWeZ%2FBdmoy2Chpd4CVlacq%2FVYIKsYP813ayGceZAnnAt8FiO8msrMYZ1AGmrRtjJ2Shx25l9EKkpThWAA9LupIQ4dPYVqXk7Y6lwGKstPr0DDPKM4iUyBdxmewXVE8FPhdMFQ7wAcWRg9ywSvB%2FPo4bxuoTej7wQCXaVa%2FgBqVqXqT3aQ1pti8%2FyEWqBzytsjl1T3CQJyG1LBteOOBNGThRJR4zUVpIEMVWvAyPitDS3oz0tSVoyl%2BMW78FIkmLlpt%2BKiW2WKYBPwhb4mDmqrf2SaEZMThrCpNkEXkbnCwDGjWtCpexhk9hbheJ6zHs3Ke5ntsXQKMKevj5XLoLdl35mcbthIdUQwb75fwdkShR8j4se9biQzu8I2A8SZN6sciRQtL0r3q1NYA8kN2XayeW9spxnMx69RsccVfD6o1hjdO1FKyWBRfphjWskBX89dRYNzE75%2Fld5SrWkR%2FthbnNsQnMPJQo67XupzcXAiNLj85Gy2Op2pGy7JEAUSVVDloionaeCCIn9OgpeXpl%2B%2FaWtj6Vk0de4w%2F6H64sbyvt4McJDUsb03Hc9n7Zr9A7ElY9Ry%2BBa8%2Fex38sANeoB5KIAbumsu3RVU0AwGMnsl6ON75MPnMyMQGOqUBDE9WMnoTKyQLDFLK2VrW2503f8yt%2BKKuSTyYIdFZNWZ6hjibrS1NaGiTrsVfmoHBr2yIoKZlU5LA2aYLrRa03juHa2%2Fxox6dQxcHS80Vk7A0ZECYKXxhFFjrQsZyCc0CxGCEcL%2FGAoi%2FdaXxyczqE0nrKJaGbH1WfsZZ3WNvwXRcrooGpQiZ0YLB3Ag%2F2jHeqs0DnlyzEFiXDaCbHwgw6UeomjJX&X-Amz-Signature=7256a242ffecb132a9da66b318bc3b2d51d0b856558d0a3bf5c10685477c43fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMWOCNQB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCOEB39mQ9Tsf6hexoO0TXA8pykOy%2Bg5Xocw67sNAg5TAIhANZ0P2sasmY6mZgJrhj4uos0z7tc8QxTcK5ZxdDjFAmgKv8DCGEQABoMNjM3NDIzMTgzODA1IgzTU7OmciUb7ASs1WIq3ANHXWoxYR6iJXaut2HMG%2BigfWfirvUru0t5xtLne8hkBrYeOCDllKvZrCL3rtYCBRWDQt6xUPjBgjOplA1UNfvrfrFhOYi4Mfw4lo4Tf8kcNNiFORf27nSstMgrMtUezGjkzgI80cQCvFMDhxdG%2BuXRuZsNDweCjG7ODF%2FrJaQy5RpOmPh7xjg67QF%2B%2F5SBWAqcQwfrrnW2qGwoDJHALPtfoMkFs%2Fw9dNY%2BRYoSi093vn9ZwImBpyE9wt9bd1hZXq%2FnRrtj9nmxs0vS3nmy5FQoR3OdO%2BFRqNdtrcwtSBgp9IwnJ8azVxCsiFg7Sgio0bbjwQty6yPDxHjo0Yvg9oa%2FyR5YvQ7zckZ5ukPJk3wgOYf8zJtb%2BE19e9ENw%2FPGJVnB0V86yvs1Amt8ORqdBDiJ%2Fse7mcHDOfHDOORWDHOJR5JGfODXJvjwIjTJ3%2BNERIpY5Wz40OJ587h%2Fk%2F5IpVsdbIHccRpxKNzlkYGu4DMEP2ZLHr41ybcUkD5QTDa3WdviKYvDJu%2FBtQg7l6M95xmmjt%2Be6FLjwkr8O662X8%2FA%2FYkvt%2F67dIt6nc1%2F6HW3ylJnee7yE1kAXuAbz%2BSfJHGoCH5cmTPaDZAEnxVG1zlIkk1CH6rHuVopJPRsADCtzMjEBjqkARleeI%2FvRjWorLAKqNXWw%2FHfE5l7BcPyezqA0M8GXqVhgNtYVZKxO%2FBlI3E6PH0slZYntawGAdeKJ35xMA94thuAuWbxADwbjDGHMnOj28k1gGRv0YT2TdL5QiJp34%2FXkROPAAnmxSt%2B98G0NlMqI2oYuCJNLExYW8VN2dw2hTs%2Fjg77%2F3Mm1NaIzkZOJ5EQQMGm%2FCqYtzQoQp9%2BExQbIVzo8FT3&X-Amz-Signature=2a445e48f59d891d5a24c1107f6832a10e13035581aa93393d95cb363173c89f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q57IJIAP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIBnumu3f18eziZ2BEJgSNhbArpYlpbUOQfh5181ipKn8AiA2QTtJsGHvB3ts26lVEOXBzgvJPpyaMYAC01RpGvxLgSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMH1fztKlTduk4UM3gKtwD7reOKDh5NaVqj1mRBGyf2IiucWII%2FMTwBr7zHxhdWlbbubWrIMSTnVN7zC0%2FW9tH%2Bvb05MsuugT4vVYniZ1tNe%2BEbwzSIROXUGPWK4%2FWO5bkmabS5%2B32JgPA4IQLXGEQM9pb64k5Q81C2W1eUT%2Bp%2FseRbq37VJckUQJFNYV5kO21JaZUSOr52JKfdlvM4GyTU024wynOhPTpgTWGwLLCMGuIg4Q8OayifcuP%2BQ0sqBdA%2BS8Vo%2BRXukCMqQoL2LUIP2Qblm9ZzFzApLuvyR6xRZV270V8sTGsT9Y7VjU2TpcG0K6%2FB0leT%2FBuYnoQivFBxIM1HprNBqVMbK4fSWr3Te2z%2F%2B4dQ9Sugmx5Bj7UjjYfBynKX%2Bz%2Flcr%2B25KLMfPh1v9iTkKBBESQTFyoybsx1RJp5MYlYbbaDDz9mso5gm%2BZdRPc7C5OxCEHo9W1PGiVjU%2FUhualBZ7aDgBt5ZRfjqQGjztHbWuNubLt4%2BZiTGlOYklnm4AjanBJEIMZtpKP80VunziJqAZSWdkqhOyxqdKip3ilt4hsAvHS4lbXC0QRZtob8Ll%2FpCAPhFo78ioI41LzGUrzUggiIyCP7IX5fI5je5vF6vlaKhzfuP5Qs4T2%2FMTtkAoZwyki6J0woMzIxAY6pgHAMmV9%2FbWAavSzaI85YUjhdCV1b7mhvXgXNp4Sexvca28hP6NR%2BTZNIimGn4RX%2F7MmTKa%2FomoFzhHqyO9K6uQN17OF82X7dJO1l8khYyOrhg1FFm5zeBJGuICjiRgeXuwalot58E2xkg1wb%2BJOB%2B616X8Daha8uVMmueBlJJOfK1dnUaJRgfAG38h6izCdkFDmW%2BDmx8UyNyM9y6kzq2kZm8uoOHis&X-Amz-Signature=fed4a01506a3b01e98cc7ee3dbb8c2d45fb7fe1bf8e6f1d5995d5178a7ab1f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCR7AWZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC1MZSLv2n2rg7MjsFy9UfA27npYcNlGQnFg%2FoewglLawIhAMKX6oRouj65wKx3YOtxy5MgfzjvAEJpIV48kbJiuIYwKv8DCGEQABoMNjM3NDIzMTgzODA1IgwE91w49OcqgOpv%2F7Aq3APQR2X8vZ5frCoUSRqWBQNFV%2BG%2FCkONQ04pEJVC8Vj4LsP3c0OLKbmtGzKssj5e%2BC0n44Lcr%2BYSbAY4gguQ7Qn8bF7cGq0gqJsrrQrhUQ43XrZ17w8fO62rEUws5CQi%2F1VWJhEAOfJzlkThhlOxzs45IA%2FRVzVsuJ7kfz3bh0A%2Fz0kE6cZFtT0rzuWIDqyQa%2F%2BlUaQ3FegKdMUDoihQsZ3hClpjxoq7zypfyDCXNYknrBRKvLBy6y%2FKgiThkXX0TH5KnjkqBJwXYf7LyQ4cMhtb9HerySXYkg09Pr%2FxBYZ55%2BD0rCgLJYeSV%2F6I8YGWcVmqVHj1DqNdlVGijrMjCL3Af9LYXoc2blX7g2fz3B28qUiGWR5sl4oTSH3pg3YsjBLwjIxCOahlkrcd3nxitssSZeEu77a0DATRboImkKVRWlZnLEKmE9W3AL6nfoOJwMqr%2BK468Y%2BaGMYoj4vRgM%2BOuEEncA4QF%2BIq5DIgVia2AtAXoxvFCit%2F0QEw3wd2EoiDZwXdm9mZbm1TNpHH9vykVXMZdQiSMw79yzQqZbNyxcyFHGHwp5JFVQfjcZHkwsmMn97q1HQXB8c23bkcC7KVOrMMNfN01fzoFug0sgXTYTBUXOOVPepLbc%2B5djCIzcjEBjqkASigzB60THBszWVWzZWiXPg%2FJMEir3xSTLMsMRJP3gafTqSHJqQxnti7BH4agF93OYm9B6MxP6Pl84BT82LOe8Le%2FCDye3I42IUHHE6nZcuKygEDxmioiUTA86B34PDHjXQI3cqDFxbdm5iy5YxtPLi4ikUxLcglneA3yHH4EEp2F%2Fg6rld0NmvTgxXd4Ko8vfIrV2m3bWoZpokzpJknMPMkWXVE&X-Amz-Signature=f4962460915da93b3abade2630383221ef2cc0d884a61af3cbad9fd21544f759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCR7AWZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC1MZSLv2n2rg7MjsFy9UfA27npYcNlGQnFg%2FoewglLawIhAMKX6oRouj65wKx3YOtxy5MgfzjvAEJpIV48kbJiuIYwKv8DCGEQABoMNjM3NDIzMTgzODA1IgwE91w49OcqgOpv%2F7Aq3APQR2X8vZ5frCoUSRqWBQNFV%2BG%2FCkONQ04pEJVC8Vj4LsP3c0OLKbmtGzKssj5e%2BC0n44Lcr%2BYSbAY4gguQ7Qn8bF7cGq0gqJsrrQrhUQ43XrZ17w8fO62rEUws5CQi%2F1VWJhEAOfJzlkThhlOxzs45IA%2FRVzVsuJ7kfz3bh0A%2Fz0kE6cZFtT0rzuWIDqyQa%2F%2BlUaQ3FegKdMUDoihQsZ3hClpjxoq7zypfyDCXNYknrBRKvLBy6y%2FKgiThkXX0TH5KnjkqBJwXYf7LyQ4cMhtb9HerySXYkg09Pr%2FxBYZ55%2BD0rCgLJYeSV%2F6I8YGWcVmqVHj1DqNdlVGijrMjCL3Af9LYXoc2blX7g2fz3B28qUiGWR5sl4oTSH3pg3YsjBLwjIxCOahlkrcd3nxitssSZeEu77a0DATRboImkKVRWlZnLEKmE9W3AL6nfoOJwMqr%2BK468Y%2BaGMYoj4vRgM%2BOuEEncA4QF%2BIq5DIgVia2AtAXoxvFCit%2F0QEw3wd2EoiDZwXdm9mZbm1TNpHH9vykVXMZdQiSMw79yzQqZbNyxcyFHGHwp5JFVQfjcZHkwsmMn97q1HQXB8c23bkcC7KVOrMMNfN01fzoFug0sgXTYTBUXOOVPepLbc%2B5djCIzcjEBjqkASigzB60THBszWVWzZWiXPg%2FJMEir3xSTLMsMRJP3gafTqSHJqQxnti7BH4agF93OYm9B6MxP6Pl84BT82LOe8Le%2FCDye3I42IUHHE6nZcuKygEDxmioiUTA86B34PDHjXQI3cqDFxbdm5iy5YxtPLi4ikUxLcglneA3yHH4EEp2F%2Fg6rld0NmvTgxXd4Ko8vfIrV2m3bWoZpokzpJknMPMkWXVE&X-Amz-Signature=71b97356fea5d90437c482fd2d50af57d152d76a51d0cd5344027d556f5476cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6G2WBJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCMapj%2FNGkVoyvc%2BPGmTYH1DvtcFdERCw0WDCqjP4z0EgIgbLHCf024Ka2IsefMX1oNvOUEoKBN17wkTXwzIHBWEqoq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHEocUDo3PU0zc2%2FaCrcA4dnqcE06a%2BUi8LuEDdRBjYwgW7BTzhTmR%2BCaQJWYgowREX7Mggt00GOeopGHZ6TglzbU6OLVcEH1fTtfl8RrdGTEcfmUv9OPg60agw%2Fbmis7r%2BdhEExCRoq6%2B2HhCX581IbcnDAkurUUVGgHqq5wCIb%2BWzrwB9kkyiLI8fTz9BYvw%2B1AUTM0MJWucNz%2Bu77ivp4jSCo21fhClOdhCOxEnyGwPziADwEdbgIWp3sNxLJbquncj1lOhZOSOp1G5wPHG3rqNcBnvWygnmzj%2BmhvwxP5Bk9UOKBa03ETVWNGNSe55FL1h16KqAJ60NrGGuOcV%2FhiiLodEsZru8BZZgjliW4hOWrP4AE4l1d0HPnxZlRDhpEej4p6j2GUM1G3jXPA3X6COdNdeTsqYw4iPpF5MesUVEq0utft77O08ads2jsoqLTTD9IP8Dp7l5ui655jboGYFaLBVL%2FwoPkgCqzBILIIo050IY3SxAME5Vlqwh6C20uao9H6U5mF2S4E1YRrT3ObSalkdAuFMqB1KEAvNldh%2BOIHD6%2BKmPjJyHjP0A52PARAIjevu4RZXJP3zheX6WtwVyEalJmn63O12%2FkqrfafmVMkpUiBlydcLsTtLHLnH7wyXrfFtLmUe0YMIDMyMQGOqUB1qn%2F%2BZenaBdIH7UtDGe2KXAHFgiNF%2Fe0WBv0Jr1wABdLeixc9xRt%2BFEzW0SwH%2BVzYQ3GvyHV1tfnjXxgwmPBL9cT6g%2F5zqgKXRP%2FKMGsAvWHNoOt9eYGgXpDi0v7cshvgHJkM132iBKdHWHVMF7RuddFEmjUdeZ32MopuCLGkeSYsjc%2FZnYmKwYfitkvroEYgluo2TjPobgQzLrs5fEb0lTeZ3vo&X-Amz-Signature=6c8f96259a12bb30c6f14210ab37fdf289ba503bbe9caa422fca712684a3279f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6G2WBJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCMapj%2FNGkVoyvc%2BPGmTYH1DvtcFdERCw0WDCqjP4z0EgIgbLHCf024Ka2IsefMX1oNvOUEoKBN17wkTXwzIHBWEqoq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHEocUDo3PU0zc2%2FaCrcA4dnqcE06a%2BUi8LuEDdRBjYwgW7BTzhTmR%2BCaQJWYgowREX7Mggt00GOeopGHZ6TglzbU6OLVcEH1fTtfl8RrdGTEcfmUv9OPg60agw%2Fbmis7r%2BdhEExCRoq6%2B2HhCX581IbcnDAkurUUVGgHqq5wCIb%2BWzrwB9kkyiLI8fTz9BYvw%2B1AUTM0MJWucNz%2Bu77ivp4jSCo21fhClOdhCOxEnyGwPziADwEdbgIWp3sNxLJbquncj1lOhZOSOp1G5wPHG3rqNcBnvWygnmzj%2BmhvwxP5Bk9UOKBa03ETVWNGNSe55FL1h16KqAJ60NrGGuOcV%2FhiiLodEsZru8BZZgjliW4hOWrP4AE4l1d0HPnxZlRDhpEej4p6j2GUM1G3jXPA3X6COdNdeTsqYw4iPpF5MesUVEq0utft77O08ads2jsoqLTTD9IP8Dp7l5ui655jboGYFaLBVL%2FwoPkgCqzBILIIo050IY3SxAME5Vlqwh6C20uao9H6U5mF2S4E1YRrT3ObSalkdAuFMqB1KEAvNldh%2BOIHD6%2BKmPjJyHjP0A52PARAIjevu4RZXJP3zheX6WtwVyEalJmn63O12%2FkqrfafmVMkpUiBlydcLsTtLHLnH7wyXrfFtLmUe0YMIDMyMQGOqUB1qn%2F%2BZenaBdIH7UtDGe2KXAHFgiNF%2Fe0WBv0Jr1wABdLeixc9xRt%2BFEzW0SwH%2BVzYQ3GvyHV1tfnjXxgwmPBL9cT6g%2F5zqgKXRP%2FKMGsAvWHNoOt9eYGgXpDi0v7cshvgHJkM132iBKdHWHVMF7RuddFEmjUdeZ32MopuCLGkeSYsjc%2FZnYmKwYfitkvroEYgluo2TjPobgQzLrs5fEb0lTeZ3vo&X-Amz-Signature=691c83274e6cd3d4d4654c5cf93a9a095530f83bfb6fe046d48af38c76943ed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6G2WBJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCMapj%2FNGkVoyvc%2BPGmTYH1DvtcFdERCw0WDCqjP4z0EgIgbLHCf024Ka2IsefMX1oNvOUEoKBN17wkTXwzIHBWEqoq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHEocUDo3PU0zc2%2FaCrcA4dnqcE06a%2BUi8LuEDdRBjYwgW7BTzhTmR%2BCaQJWYgowREX7Mggt00GOeopGHZ6TglzbU6OLVcEH1fTtfl8RrdGTEcfmUv9OPg60agw%2Fbmis7r%2BdhEExCRoq6%2B2HhCX581IbcnDAkurUUVGgHqq5wCIb%2BWzrwB9kkyiLI8fTz9BYvw%2B1AUTM0MJWucNz%2Bu77ivp4jSCo21fhClOdhCOxEnyGwPziADwEdbgIWp3sNxLJbquncj1lOhZOSOp1G5wPHG3rqNcBnvWygnmzj%2BmhvwxP5Bk9UOKBa03ETVWNGNSe55FL1h16KqAJ60NrGGuOcV%2FhiiLodEsZru8BZZgjliW4hOWrP4AE4l1d0HPnxZlRDhpEej4p6j2GUM1G3jXPA3X6COdNdeTsqYw4iPpF5MesUVEq0utft77O08ads2jsoqLTTD9IP8Dp7l5ui655jboGYFaLBVL%2FwoPkgCqzBILIIo050IY3SxAME5Vlqwh6C20uao9H6U5mF2S4E1YRrT3ObSalkdAuFMqB1KEAvNldh%2BOIHD6%2BKmPjJyHjP0A52PARAIjevu4RZXJP3zheX6WtwVyEalJmn63O12%2FkqrfafmVMkpUiBlydcLsTtLHLnH7wyXrfFtLmUe0YMIDMyMQGOqUB1qn%2F%2BZenaBdIH7UtDGe2KXAHFgiNF%2Fe0WBv0Jr1wABdLeixc9xRt%2BFEzW0SwH%2BVzYQ3GvyHV1tfnjXxgwmPBL9cT6g%2F5zqgKXRP%2FKMGsAvWHNoOt9eYGgXpDi0v7cshvgHJkM132iBKdHWHVMF7RuddFEmjUdeZ32MopuCLGkeSYsjc%2FZnYmKwYfitkvroEYgluo2TjPobgQzLrs5fEb0lTeZ3vo&X-Amz-Signature=4303ce65ad534355a47d0f19ccc9b8f8b444b4718aa7bbf3d5ccdb99709a7f7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6G2WBJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCMapj%2FNGkVoyvc%2BPGmTYH1DvtcFdERCw0WDCqjP4z0EgIgbLHCf024Ka2IsefMX1oNvOUEoKBN17wkTXwzIHBWEqoq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHEocUDo3PU0zc2%2FaCrcA4dnqcE06a%2BUi8LuEDdRBjYwgW7BTzhTmR%2BCaQJWYgowREX7Mggt00GOeopGHZ6TglzbU6OLVcEH1fTtfl8RrdGTEcfmUv9OPg60agw%2Fbmis7r%2BdhEExCRoq6%2B2HhCX581IbcnDAkurUUVGgHqq5wCIb%2BWzrwB9kkyiLI8fTz9BYvw%2B1AUTM0MJWucNz%2Bu77ivp4jSCo21fhClOdhCOxEnyGwPziADwEdbgIWp3sNxLJbquncj1lOhZOSOp1G5wPHG3rqNcBnvWygnmzj%2BmhvwxP5Bk9UOKBa03ETVWNGNSe55FL1h16KqAJ60NrGGuOcV%2FhiiLodEsZru8BZZgjliW4hOWrP4AE4l1d0HPnxZlRDhpEej4p6j2GUM1G3jXPA3X6COdNdeTsqYw4iPpF5MesUVEq0utft77O08ads2jsoqLTTD9IP8Dp7l5ui655jboGYFaLBVL%2FwoPkgCqzBILIIo050IY3SxAME5Vlqwh6C20uao9H6U5mF2S4E1YRrT3ObSalkdAuFMqB1KEAvNldh%2BOIHD6%2BKmPjJyHjP0A52PARAIjevu4RZXJP3zheX6WtwVyEalJmn63O12%2FkqrfafmVMkpUiBlydcLsTtLHLnH7wyXrfFtLmUe0YMIDMyMQGOqUB1qn%2F%2BZenaBdIH7UtDGe2KXAHFgiNF%2Fe0WBv0Jr1wABdLeixc9xRt%2BFEzW0SwH%2BVzYQ3GvyHV1tfnjXxgwmPBL9cT6g%2F5zqgKXRP%2FKMGsAvWHNoOt9eYGgXpDi0v7cshvgHJkM132iBKdHWHVMF7RuddFEmjUdeZ32MopuCLGkeSYsjc%2FZnYmKwYfitkvroEYgluo2TjPobgQzLrs5fEb0lTeZ3vo&X-Amz-Signature=f01a58220b36f47bc9bfc93e6d47cf0970af66f728b0dfac97980e3b2b1bb6dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6G2WBJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCMapj%2FNGkVoyvc%2BPGmTYH1DvtcFdERCw0WDCqjP4z0EgIgbLHCf024Ka2IsefMX1oNvOUEoKBN17wkTXwzIHBWEqoq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHEocUDo3PU0zc2%2FaCrcA4dnqcE06a%2BUi8LuEDdRBjYwgW7BTzhTmR%2BCaQJWYgowREX7Mggt00GOeopGHZ6TglzbU6OLVcEH1fTtfl8RrdGTEcfmUv9OPg60agw%2Fbmis7r%2BdhEExCRoq6%2B2HhCX581IbcnDAkurUUVGgHqq5wCIb%2BWzrwB9kkyiLI8fTz9BYvw%2B1AUTM0MJWucNz%2Bu77ivp4jSCo21fhClOdhCOxEnyGwPziADwEdbgIWp3sNxLJbquncj1lOhZOSOp1G5wPHG3rqNcBnvWygnmzj%2BmhvwxP5Bk9UOKBa03ETVWNGNSe55FL1h16KqAJ60NrGGuOcV%2FhiiLodEsZru8BZZgjliW4hOWrP4AE4l1d0HPnxZlRDhpEej4p6j2GUM1G3jXPA3X6COdNdeTsqYw4iPpF5MesUVEq0utft77O08ads2jsoqLTTD9IP8Dp7l5ui655jboGYFaLBVL%2FwoPkgCqzBILIIo050IY3SxAME5Vlqwh6C20uao9H6U5mF2S4E1YRrT3ObSalkdAuFMqB1KEAvNldh%2BOIHD6%2BKmPjJyHjP0A52PARAIjevu4RZXJP3zheX6WtwVyEalJmn63O12%2FkqrfafmVMkpUiBlydcLsTtLHLnH7wyXrfFtLmUe0YMIDMyMQGOqUB1qn%2F%2BZenaBdIH7UtDGe2KXAHFgiNF%2Fe0WBv0Jr1wABdLeixc9xRt%2BFEzW0SwH%2BVzYQ3GvyHV1tfnjXxgwmPBL9cT6g%2F5zqgKXRP%2FKMGsAvWHNoOt9eYGgXpDi0v7cshvgHJkM132iBKdHWHVMF7RuddFEmjUdeZ32MopuCLGkeSYsjc%2FZnYmKwYfitkvroEYgluo2TjPobgQzLrs5fEb0lTeZ3vo&X-Amz-Signature=38f4e1ca62e9ab9cc0126a8f042527d6502bd78b4c65e4cff90468a50a1240c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6G2WBJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCMapj%2FNGkVoyvc%2BPGmTYH1DvtcFdERCw0WDCqjP4z0EgIgbLHCf024Ka2IsefMX1oNvOUEoKBN17wkTXwzIHBWEqoq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHEocUDo3PU0zc2%2FaCrcA4dnqcE06a%2BUi8LuEDdRBjYwgW7BTzhTmR%2BCaQJWYgowREX7Mggt00GOeopGHZ6TglzbU6OLVcEH1fTtfl8RrdGTEcfmUv9OPg60agw%2Fbmis7r%2BdhEExCRoq6%2B2HhCX581IbcnDAkurUUVGgHqq5wCIb%2BWzrwB9kkyiLI8fTz9BYvw%2B1AUTM0MJWucNz%2Bu77ivp4jSCo21fhClOdhCOxEnyGwPziADwEdbgIWp3sNxLJbquncj1lOhZOSOp1G5wPHG3rqNcBnvWygnmzj%2BmhvwxP5Bk9UOKBa03ETVWNGNSe55FL1h16KqAJ60NrGGuOcV%2FhiiLodEsZru8BZZgjliW4hOWrP4AE4l1d0HPnxZlRDhpEej4p6j2GUM1G3jXPA3X6COdNdeTsqYw4iPpF5MesUVEq0utft77O08ads2jsoqLTTD9IP8Dp7l5ui655jboGYFaLBVL%2FwoPkgCqzBILIIo050IY3SxAME5Vlqwh6C20uao9H6U5mF2S4E1YRrT3ObSalkdAuFMqB1KEAvNldh%2BOIHD6%2BKmPjJyHjP0A52PARAIjevu4RZXJP3zheX6WtwVyEalJmn63O12%2FkqrfafmVMkpUiBlydcLsTtLHLnH7wyXrfFtLmUe0YMIDMyMQGOqUB1qn%2F%2BZenaBdIH7UtDGe2KXAHFgiNF%2Fe0WBv0Jr1wABdLeixc9xRt%2BFEzW0SwH%2BVzYQ3GvyHV1tfnjXxgwmPBL9cT6g%2F5zqgKXRP%2FKMGsAvWHNoOt9eYGgXpDi0v7cshvgHJkM132iBKdHWHVMF7RuddFEmjUdeZ32MopuCLGkeSYsjc%2FZnYmKwYfitkvroEYgluo2TjPobgQzLrs5fEb0lTeZ3vo&X-Amz-Signature=9023528dfc6a805a35d72e2fa040584140764814154de6b3811dda30c6579e8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6G2WBJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCMapj%2FNGkVoyvc%2BPGmTYH1DvtcFdERCw0WDCqjP4z0EgIgbLHCf024Ka2IsefMX1oNvOUEoKBN17wkTXwzIHBWEqoq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHEocUDo3PU0zc2%2FaCrcA4dnqcE06a%2BUi8LuEDdRBjYwgW7BTzhTmR%2BCaQJWYgowREX7Mggt00GOeopGHZ6TglzbU6OLVcEH1fTtfl8RrdGTEcfmUv9OPg60agw%2Fbmis7r%2BdhEExCRoq6%2B2HhCX581IbcnDAkurUUVGgHqq5wCIb%2BWzrwB9kkyiLI8fTz9BYvw%2B1AUTM0MJWucNz%2Bu77ivp4jSCo21fhClOdhCOxEnyGwPziADwEdbgIWp3sNxLJbquncj1lOhZOSOp1G5wPHG3rqNcBnvWygnmzj%2BmhvwxP5Bk9UOKBa03ETVWNGNSe55FL1h16KqAJ60NrGGuOcV%2FhiiLodEsZru8BZZgjliW4hOWrP4AE4l1d0HPnxZlRDhpEej4p6j2GUM1G3jXPA3X6COdNdeTsqYw4iPpF5MesUVEq0utft77O08ads2jsoqLTTD9IP8Dp7l5ui655jboGYFaLBVL%2FwoPkgCqzBILIIo050IY3SxAME5Vlqwh6C20uao9H6U5mF2S4E1YRrT3ObSalkdAuFMqB1KEAvNldh%2BOIHD6%2BKmPjJyHjP0A52PARAIjevu4RZXJP3zheX6WtwVyEalJmn63O12%2FkqrfafmVMkpUiBlydcLsTtLHLnH7wyXrfFtLmUe0YMIDMyMQGOqUB1qn%2F%2BZenaBdIH7UtDGe2KXAHFgiNF%2Fe0WBv0Jr1wABdLeixc9xRt%2BFEzW0SwH%2BVzYQ3GvyHV1tfnjXxgwmPBL9cT6g%2F5zqgKXRP%2FKMGsAvWHNoOt9eYGgXpDi0v7cshvgHJkM132iBKdHWHVMF7RuddFEmjUdeZ32MopuCLGkeSYsjc%2FZnYmKwYfitkvroEYgluo2TjPobgQzLrs5fEb0lTeZ3vo&X-Amz-Signature=4303ce65ad534355a47d0f19ccc9b8f8b444b4718aa7bbf3d5ccdb99709a7f7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6G2WBJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCMapj%2FNGkVoyvc%2BPGmTYH1DvtcFdERCw0WDCqjP4z0EgIgbLHCf024Ka2IsefMX1oNvOUEoKBN17wkTXwzIHBWEqoq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHEocUDo3PU0zc2%2FaCrcA4dnqcE06a%2BUi8LuEDdRBjYwgW7BTzhTmR%2BCaQJWYgowREX7Mggt00GOeopGHZ6TglzbU6OLVcEH1fTtfl8RrdGTEcfmUv9OPg60agw%2Fbmis7r%2BdhEExCRoq6%2B2HhCX581IbcnDAkurUUVGgHqq5wCIb%2BWzrwB9kkyiLI8fTz9BYvw%2B1AUTM0MJWucNz%2Bu77ivp4jSCo21fhClOdhCOxEnyGwPziADwEdbgIWp3sNxLJbquncj1lOhZOSOp1G5wPHG3rqNcBnvWygnmzj%2BmhvwxP5Bk9UOKBa03ETVWNGNSe55FL1h16KqAJ60NrGGuOcV%2FhiiLodEsZru8BZZgjliW4hOWrP4AE4l1d0HPnxZlRDhpEej4p6j2GUM1G3jXPA3X6COdNdeTsqYw4iPpF5MesUVEq0utft77O08ads2jsoqLTTD9IP8Dp7l5ui655jboGYFaLBVL%2FwoPkgCqzBILIIo050IY3SxAME5Vlqwh6C20uao9H6U5mF2S4E1YRrT3ObSalkdAuFMqB1KEAvNldh%2BOIHD6%2BKmPjJyHjP0A52PARAIjevu4RZXJP3zheX6WtwVyEalJmn63O12%2FkqrfafmVMkpUiBlydcLsTtLHLnH7wyXrfFtLmUe0YMIDMyMQGOqUB1qn%2F%2BZenaBdIH7UtDGe2KXAHFgiNF%2Fe0WBv0Jr1wABdLeixc9xRt%2BFEzW0SwH%2BVzYQ3GvyHV1tfnjXxgwmPBL9cT6g%2F5zqgKXRP%2FKMGsAvWHNoOt9eYGgXpDi0v7cshvgHJkM132iBKdHWHVMF7RuddFEmjUdeZ32MopuCLGkeSYsjc%2FZnYmKwYfitkvroEYgluo2TjPobgQzLrs5fEb0lTeZ3vo&X-Amz-Signature=9d9d99f346f4a1a6f96e7b827da483eda80790992c6ffae5e97e8b4223c407c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6G2WBJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCMapj%2FNGkVoyvc%2BPGmTYH1DvtcFdERCw0WDCqjP4z0EgIgbLHCf024Ka2IsefMX1oNvOUEoKBN17wkTXwzIHBWEqoq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHEocUDo3PU0zc2%2FaCrcA4dnqcE06a%2BUi8LuEDdRBjYwgW7BTzhTmR%2BCaQJWYgowREX7Mggt00GOeopGHZ6TglzbU6OLVcEH1fTtfl8RrdGTEcfmUv9OPg60agw%2Fbmis7r%2BdhEExCRoq6%2B2HhCX581IbcnDAkurUUVGgHqq5wCIb%2BWzrwB9kkyiLI8fTz9BYvw%2B1AUTM0MJWucNz%2Bu77ivp4jSCo21fhClOdhCOxEnyGwPziADwEdbgIWp3sNxLJbquncj1lOhZOSOp1G5wPHG3rqNcBnvWygnmzj%2BmhvwxP5Bk9UOKBa03ETVWNGNSe55FL1h16KqAJ60NrGGuOcV%2FhiiLodEsZru8BZZgjliW4hOWrP4AE4l1d0HPnxZlRDhpEej4p6j2GUM1G3jXPA3X6COdNdeTsqYw4iPpF5MesUVEq0utft77O08ads2jsoqLTTD9IP8Dp7l5ui655jboGYFaLBVL%2FwoPkgCqzBILIIo050IY3SxAME5Vlqwh6C20uao9H6U5mF2S4E1YRrT3ObSalkdAuFMqB1KEAvNldh%2BOIHD6%2BKmPjJyHjP0A52PARAIjevu4RZXJP3zheX6WtwVyEalJmn63O12%2FkqrfafmVMkpUiBlydcLsTtLHLnH7wyXrfFtLmUe0YMIDMyMQGOqUB1qn%2F%2BZenaBdIH7UtDGe2KXAHFgiNF%2Fe0WBv0Jr1wABdLeixc9xRt%2BFEzW0SwH%2BVzYQ3GvyHV1tfnjXxgwmPBL9cT6g%2F5zqgKXRP%2FKMGsAvWHNoOt9eYGgXpDi0v7cshvgHJkM132iBKdHWHVMF7RuddFEmjUdeZ32MopuCLGkeSYsjc%2FZnYmKwYfitkvroEYgluo2TjPobgQzLrs5fEb0lTeZ3vo&X-Amz-Signature=0a2dc3f3bd4ccfd158bbd158821b9b56d1798af088e30e15eb5487f220e4bc19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6G2WBJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCMapj%2FNGkVoyvc%2BPGmTYH1DvtcFdERCw0WDCqjP4z0EgIgbLHCf024Ka2IsefMX1oNvOUEoKBN17wkTXwzIHBWEqoq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHEocUDo3PU0zc2%2FaCrcA4dnqcE06a%2BUi8LuEDdRBjYwgW7BTzhTmR%2BCaQJWYgowREX7Mggt00GOeopGHZ6TglzbU6OLVcEH1fTtfl8RrdGTEcfmUv9OPg60agw%2Fbmis7r%2BdhEExCRoq6%2B2HhCX581IbcnDAkurUUVGgHqq5wCIb%2BWzrwB9kkyiLI8fTz9BYvw%2B1AUTM0MJWucNz%2Bu77ivp4jSCo21fhClOdhCOxEnyGwPziADwEdbgIWp3sNxLJbquncj1lOhZOSOp1G5wPHG3rqNcBnvWygnmzj%2BmhvwxP5Bk9UOKBa03ETVWNGNSe55FL1h16KqAJ60NrGGuOcV%2FhiiLodEsZru8BZZgjliW4hOWrP4AE4l1d0HPnxZlRDhpEej4p6j2GUM1G3jXPA3X6COdNdeTsqYw4iPpF5MesUVEq0utft77O08ads2jsoqLTTD9IP8Dp7l5ui655jboGYFaLBVL%2FwoPkgCqzBILIIo050IY3SxAME5Vlqwh6C20uao9H6U5mF2S4E1YRrT3ObSalkdAuFMqB1KEAvNldh%2BOIHD6%2BKmPjJyHjP0A52PARAIjevu4RZXJP3zheX6WtwVyEalJmn63O12%2FkqrfafmVMkpUiBlydcLsTtLHLnH7wyXrfFtLmUe0YMIDMyMQGOqUB1qn%2F%2BZenaBdIH7UtDGe2KXAHFgiNF%2Fe0WBv0Jr1wABdLeixc9xRt%2BFEzW0SwH%2BVzYQ3GvyHV1tfnjXxgwmPBL9cT6g%2F5zqgKXRP%2FKMGsAvWHNoOt9eYGgXpDi0v7cshvgHJkM132iBKdHWHVMF7RuddFEmjUdeZ32MopuCLGkeSYsjc%2FZnYmKwYfitkvroEYgluo2TjPobgQzLrs5fEb0lTeZ3vo&X-Amz-Signature=fc865239231d276f344918dce891c339877ee6648872ba498068086ffd620079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
