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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647D4YZWT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCdjd7c9yYegQjNnU8JBXscJdafJYMFfc7Gwx0zeythAAIhAJ1RjuIpaBnKHBmYewsI6y7xuXyQsgQikjPukXjm%2FdszKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxdr%2BY%2FekW95ARVNkEq3AMiMWL0YxEo2fZQqHLA8Va58ZO90zwve8FDbrjhQeNF6a%2F1A485zD7t2nnDw00rdZwcAP2MuruM21M586iDIExmteIbe1iMJkDnYWRD9oeWHqX3d2QIMZpW1X9Nq%2Bg9x42XoUO6ECDOVlbPSZ7l9tlKYgXbwpKt7BdyKchcSJwJMJ2zxBHwDVZZ4CpCTY1xbgfLfU1rzzpRFnhXaFF%2FNO%2Fu8%2B13VihD0vJbgL4oq%2FKZTwqooHd7ivrvZA97tNR9wcUKrhzTbbtPCaqtCAlqhRCwWjlmycG5omxO23OFT9P40o%2FCT7JjHwdAXfRFXey%2F%2B87wceqmDiRGm0%2Bo1G7aTwSZ%2FQ7mIQ4V%2FBDwaGYeE3X5ky%2BGzWDRLCjbryPRNuk6rvS65L1FyWwkN83sawd5SjFimuyKL8tPuHrpAH62LZPYRPG%2F60ZL5n0fXRpa1n%2Bi7eCL9JZNQ%2BXxAH1j%2Bk%2B8LBnshf%2FQCvCuVEOtqf3DavB1ZHaFLkmu0mXTiTNVTS2I1ZpJGcfPf%2BkGE8vVdwTJ%2FIKEEmbGxomlguPvpHKDWPsVHx%2F3VSJ5ThGSXHgPYMcsnRTVdoP%2BpbXhpmUAwlQQJuu%2BtekdTMnh7tQ0ZkOBmAmAWFHB1wJceen44DB4VzDqxpzEBjqkAbUPiXJ2PIM9GgECvMQIS2tPY0MJzr2BRZeW%2FaTIYdL2%2BmcUADBFe6lBod%2Bzo2kuexI9KIhJ%2BclXJiQKObJ63FbcZFqYEVTF1h7yV6bupC9U%2BCaySCSOA9bV5nzhTKkdzcheWIJqDEiCHtcMtaKyaLe3ZeB8GqD23WML2prIhfQomA9I4oPCBad3KcSUtxhLt0nBWcLu9EgSgzuHC%2BXNbufTY9fh&X-Amz-Signature=c401903421269cb5d034f0c40ad803f9d6a48a395c291575dac310dafd2eed9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647D4YZWT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCdjd7c9yYegQjNnU8JBXscJdafJYMFfc7Gwx0zeythAAIhAJ1RjuIpaBnKHBmYewsI6y7xuXyQsgQikjPukXjm%2FdszKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxdr%2BY%2FekW95ARVNkEq3AMiMWL0YxEo2fZQqHLA8Va58ZO90zwve8FDbrjhQeNF6a%2F1A485zD7t2nnDw00rdZwcAP2MuruM21M586iDIExmteIbe1iMJkDnYWRD9oeWHqX3d2QIMZpW1X9Nq%2Bg9x42XoUO6ECDOVlbPSZ7l9tlKYgXbwpKt7BdyKchcSJwJMJ2zxBHwDVZZ4CpCTY1xbgfLfU1rzzpRFnhXaFF%2FNO%2Fu8%2B13VihD0vJbgL4oq%2FKZTwqooHd7ivrvZA97tNR9wcUKrhzTbbtPCaqtCAlqhRCwWjlmycG5omxO23OFT9P40o%2FCT7JjHwdAXfRFXey%2F%2B87wceqmDiRGm0%2Bo1G7aTwSZ%2FQ7mIQ4V%2FBDwaGYeE3X5ky%2BGzWDRLCjbryPRNuk6rvS65L1FyWwkN83sawd5SjFimuyKL8tPuHrpAH62LZPYRPG%2F60ZL5n0fXRpa1n%2Bi7eCL9JZNQ%2BXxAH1j%2Bk%2B8LBnshf%2FQCvCuVEOtqf3DavB1ZHaFLkmu0mXTiTNVTS2I1ZpJGcfPf%2BkGE8vVdwTJ%2FIKEEmbGxomlguPvpHKDWPsVHx%2F3VSJ5ThGSXHgPYMcsnRTVdoP%2BpbXhpmUAwlQQJuu%2BtekdTMnh7tQ0ZkOBmAmAWFHB1wJceen44DB4VzDqxpzEBjqkAbUPiXJ2PIM9GgECvMQIS2tPY0MJzr2BRZeW%2FaTIYdL2%2BmcUADBFe6lBod%2Bzo2kuexI9KIhJ%2BclXJiQKObJ63FbcZFqYEVTF1h7yV6bupC9U%2BCaySCSOA9bV5nzhTKkdzcheWIJqDEiCHtcMtaKyaLe3ZeB8GqD23WML2prIhfQomA9I4oPCBad3KcSUtxhLt0nBWcLu9EgSgzuHC%2BXNbufTY9fh&X-Amz-Signature=82d9009e418e5032950110abd3bf7e0469256e3de1299b900bcbef0c8f6aca54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647D4YZWT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCdjd7c9yYegQjNnU8JBXscJdafJYMFfc7Gwx0zeythAAIhAJ1RjuIpaBnKHBmYewsI6y7xuXyQsgQikjPukXjm%2FdszKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxdr%2BY%2FekW95ARVNkEq3AMiMWL0YxEo2fZQqHLA8Va58ZO90zwve8FDbrjhQeNF6a%2F1A485zD7t2nnDw00rdZwcAP2MuruM21M586iDIExmteIbe1iMJkDnYWRD9oeWHqX3d2QIMZpW1X9Nq%2Bg9x42XoUO6ECDOVlbPSZ7l9tlKYgXbwpKt7BdyKchcSJwJMJ2zxBHwDVZZ4CpCTY1xbgfLfU1rzzpRFnhXaFF%2FNO%2Fu8%2B13VihD0vJbgL4oq%2FKZTwqooHd7ivrvZA97tNR9wcUKrhzTbbtPCaqtCAlqhRCwWjlmycG5omxO23OFT9P40o%2FCT7JjHwdAXfRFXey%2F%2B87wceqmDiRGm0%2Bo1G7aTwSZ%2FQ7mIQ4V%2FBDwaGYeE3X5ky%2BGzWDRLCjbryPRNuk6rvS65L1FyWwkN83sawd5SjFimuyKL8tPuHrpAH62LZPYRPG%2F60ZL5n0fXRpa1n%2Bi7eCL9JZNQ%2BXxAH1j%2Bk%2B8LBnshf%2FQCvCuVEOtqf3DavB1ZHaFLkmu0mXTiTNVTS2I1ZpJGcfPf%2BkGE8vVdwTJ%2FIKEEmbGxomlguPvpHKDWPsVHx%2F3VSJ5ThGSXHgPYMcsnRTVdoP%2BpbXhpmUAwlQQJuu%2BtekdTMnh7tQ0ZkOBmAmAWFHB1wJceen44DB4VzDqxpzEBjqkAbUPiXJ2PIM9GgECvMQIS2tPY0MJzr2BRZeW%2FaTIYdL2%2BmcUADBFe6lBod%2Bzo2kuexI9KIhJ%2BclXJiQKObJ63FbcZFqYEVTF1h7yV6bupC9U%2BCaySCSOA9bV5nzhTKkdzcheWIJqDEiCHtcMtaKyaLe3ZeB8GqD23WML2prIhfQomA9I4oPCBad3KcSUtxhLt0nBWcLu9EgSgzuHC%2BXNbufTY9fh&X-Amz-Signature=71ab9a46f1105e3c3adc3551529c2a4c271a0eb323efb500f7e7620eb564b95a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647D4YZWT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCdjd7c9yYegQjNnU8JBXscJdafJYMFfc7Gwx0zeythAAIhAJ1RjuIpaBnKHBmYewsI6y7xuXyQsgQikjPukXjm%2FdszKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxdr%2BY%2FekW95ARVNkEq3AMiMWL0YxEo2fZQqHLA8Va58ZO90zwve8FDbrjhQeNF6a%2F1A485zD7t2nnDw00rdZwcAP2MuruM21M586iDIExmteIbe1iMJkDnYWRD9oeWHqX3d2QIMZpW1X9Nq%2Bg9x42XoUO6ECDOVlbPSZ7l9tlKYgXbwpKt7BdyKchcSJwJMJ2zxBHwDVZZ4CpCTY1xbgfLfU1rzzpRFnhXaFF%2FNO%2Fu8%2B13VihD0vJbgL4oq%2FKZTwqooHd7ivrvZA97tNR9wcUKrhzTbbtPCaqtCAlqhRCwWjlmycG5omxO23OFT9P40o%2FCT7JjHwdAXfRFXey%2F%2B87wceqmDiRGm0%2Bo1G7aTwSZ%2FQ7mIQ4V%2FBDwaGYeE3X5ky%2BGzWDRLCjbryPRNuk6rvS65L1FyWwkN83sawd5SjFimuyKL8tPuHrpAH62LZPYRPG%2F60ZL5n0fXRpa1n%2Bi7eCL9JZNQ%2BXxAH1j%2Bk%2B8LBnshf%2FQCvCuVEOtqf3DavB1ZHaFLkmu0mXTiTNVTS2I1ZpJGcfPf%2BkGE8vVdwTJ%2FIKEEmbGxomlguPvpHKDWPsVHx%2F3VSJ5ThGSXHgPYMcsnRTVdoP%2BpbXhpmUAwlQQJuu%2BtekdTMnh7tQ0ZkOBmAmAWFHB1wJceen44DB4VzDqxpzEBjqkAbUPiXJ2PIM9GgECvMQIS2tPY0MJzr2BRZeW%2FaTIYdL2%2BmcUADBFe6lBod%2Bzo2kuexI9KIhJ%2BclXJiQKObJ63FbcZFqYEVTF1h7yV6bupC9U%2BCaySCSOA9bV5nzhTKkdzcheWIJqDEiCHtcMtaKyaLe3ZeB8GqD23WML2prIhfQomA9I4oPCBad3KcSUtxhLt0nBWcLu9EgSgzuHC%2BXNbufTY9fh&X-Amz-Signature=a407eef69f8d589d559210aaa4daa9cb64513b35c304019c1d0285f91766c8eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647D4YZWT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCdjd7c9yYegQjNnU8JBXscJdafJYMFfc7Gwx0zeythAAIhAJ1RjuIpaBnKHBmYewsI6y7xuXyQsgQikjPukXjm%2FdszKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxdr%2BY%2FekW95ARVNkEq3AMiMWL0YxEo2fZQqHLA8Va58ZO90zwve8FDbrjhQeNF6a%2F1A485zD7t2nnDw00rdZwcAP2MuruM21M586iDIExmteIbe1iMJkDnYWRD9oeWHqX3d2QIMZpW1X9Nq%2Bg9x42XoUO6ECDOVlbPSZ7l9tlKYgXbwpKt7BdyKchcSJwJMJ2zxBHwDVZZ4CpCTY1xbgfLfU1rzzpRFnhXaFF%2FNO%2Fu8%2B13VihD0vJbgL4oq%2FKZTwqooHd7ivrvZA97tNR9wcUKrhzTbbtPCaqtCAlqhRCwWjlmycG5omxO23OFT9P40o%2FCT7JjHwdAXfRFXey%2F%2B87wceqmDiRGm0%2Bo1G7aTwSZ%2FQ7mIQ4V%2FBDwaGYeE3X5ky%2BGzWDRLCjbryPRNuk6rvS65L1FyWwkN83sawd5SjFimuyKL8tPuHrpAH62LZPYRPG%2F60ZL5n0fXRpa1n%2Bi7eCL9JZNQ%2BXxAH1j%2Bk%2B8LBnshf%2FQCvCuVEOtqf3DavB1ZHaFLkmu0mXTiTNVTS2I1ZpJGcfPf%2BkGE8vVdwTJ%2FIKEEmbGxomlguPvpHKDWPsVHx%2F3VSJ5ThGSXHgPYMcsnRTVdoP%2BpbXhpmUAwlQQJuu%2BtekdTMnh7tQ0ZkOBmAmAWFHB1wJceen44DB4VzDqxpzEBjqkAbUPiXJ2PIM9GgECvMQIS2tPY0MJzr2BRZeW%2FaTIYdL2%2BmcUADBFe6lBod%2Bzo2kuexI9KIhJ%2BclXJiQKObJ63FbcZFqYEVTF1h7yV6bupC9U%2BCaySCSOA9bV5nzhTKkdzcheWIJqDEiCHtcMtaKyaLe3ZeB8GqD23WML2prIhfQomA9I4oPCBad3KcSUtxhLt0nBWcLu9EgSgzuHC%2BXNbufTY9fh&X-Amz-Signature=530f1c8b54a75e65fb0995b8de02ae11491939fde4f1c8f5a7dcf3ad1edfcc34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647D4YZWT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCdjd7c9yYegQjNnU8JBXscJdafJYMFfc7Gwx0zeythAAIhAJ1RjuIpaBnKHBmYewsI6y7xuXyQsgQikjPukXjm%2FdszKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxdr%2BY%2FekW95ARVNkEq3AMiMWL0YxEo2fZQqHLA8Va58ZO90zwve8FDbrjhQeNF6a%2F1A485zD7t2nnDw00rdZwcAP2MuruM21M586iDIExmteIbe1iMJkDnYWRD9oeWHqX3d2QIMZpW1X9Nq%2Bg9x42XoUO6ECDOVlbPSZ7l9tlKYgXbwpKt7BdyKchcSJwJMJ2zxBHwDVZZ4CpCTY1xbgfLfU1rzzpRFnhXaFF%2FNO%2Fu8%2B13VihD0vJbgL4oq%2FKZTwqooHd7ivrvZA97tNR9wcUKrhzTbbtPCaqtCAlqhRCwWjlmycG5omxO23OFT9P40o%2FCT7JjHwdAXfRFXey%2F%2B87wceqmDiRGm0%2Bo1G7aTwSZ%2FQ7mIQ4V%2FBDwaGYeE3X5ky%2BGzWDRLCjbryPRNuk6rvS65L1FyWwkN83sawd5SjFimuyKL8tPuHrpAH62LZPYRPG%2F60ZL5n0fXRpa1n%2Bi7eCL9JZNQ%2BXxAH1j%2Bk%2B8LBnshf%2FQCvCuVEOtqf3DavB1ZHaFLkmu0mXTiTNVTS2I1ZpJGcfPf%2BkGE8vVdwTJ%2FIKEEmbGxomlguPvpHKDWPsVHx%2F3VSJ5ThGSXHgPYMcsnRTVdoP%2BpbXhpmUAwlQQJuu%2BtekdTMnh7tQ0ZkOBmAmAWFHB1wJceen44DB4VzDqxpzEBjqkAbUPiXJ2PIM9GgECvMQIS2tPY0MJzr2BRZeW%2FaTIYdL2%2BmcUADBFe6lBod%2Bzo2kuexI9KIhJ%2BclXJiQKObJ63FbcZFqYEVTF1h7yV6bupC9U%2BCaySCSOA9bV5nzhTKkdzcheWIJqDEiCHtcMtaKyaLe3ZeB8GqD23WML2prIhfQomA9I4oPCBad3KcSUtxhLt0nBWcLu9EgSgzuHC%2BXNbufTY9fh&X-Amz-Signature=d21b802bd39ed540c0b1e6ee63ca181803f4209ddac09929758cdd0ba7d280b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647D4YZWT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCdjd7c9yYegQjNnU8JBXscJdafJYMFfc7Gwx0zeythAAIhAJ1RjuIpaBnKHBmYewsI6y7xuXyQsgQikjPukXjm%2FdszKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxdr%2BY%2FekW95ARVNkEq3AMiMWL0YxEo2fZQqHLA8Va58ZO90zwve8FDbrjhQeNF6a%2F1A485zD7t2nnDw00rdZwcAP2MuruM21M586iDIExmteIbe1iMJkDnYWRD9oeWHqX3d2QIMZpW1X9Nq%2Bg9x42XoUO6ECDOVlbPSZ7l9tlKYgXbwpKt7BdyKchcSJwJMJ2zxBHwDVZZ4CpCTY1xbgfLfU1rzzpRFnhXaFF%2FNO%2Fu8%2B13VihD0vJbgL4oq%2FKZTwqooHd7ivrvZA97tNR9wcUKrhzTbbtPCaqtCAlqhRCwWjlmycG5omxO23OFT9P40o%2FCT7JjHwdAXfRFXey%2F%2B87wceqmDiRGm0%2Bo1G7aTwSZ%2FQ7mIQ4V%2FBDwaGYeE3X5ky%2BGzWDRLCjbryPRNuk6rvS65L1FyWwkN83sawd5SjFimuyKL8tPuHrpAH62LZPYRPG%2F60ZL5n0fXRpa1n%2Bi7eCL9JZNQ%2BXxAH1j%2Bk%2B8LBnshf%2FQCvCuVEOtqf3DavB1ZHaFLkmu0mXTiTNVTS2I1ZpJGcfPf%2BkGE8vVdwTJ%2FIKEEmbGxomlguPvpHKDWPsVHx%2F3VSJ5ThGSXHgPYMcsnRTVdoP%2BpbXhpmUAwlQQJuu%2BtekdTMnh7tQ0ZkOBmAmAWFHB1wJceen44DB4VzDqxpzEBjqkAbUPiXJ2PIM9GgECvMQIS2tPY0MJzr2BRZeW%2FaTIYdL2%2BmcUADBFe6lBod%2Bzo2kuexI9KIhJ%2BclXJiQKObJ63FbcZFqYEVTF1h7yV6bupC9U%2BCaySCSOA9bV5nzhTKkdzcheWIJqDEiCHtcMtaKyaLe3ZeB8GqD23WML2prIhfQomA9I4oPCBad3KcSUtxhLt0nBWcLu9EgSgzuHC%2BXNbufTY9fh&X-Amz-Signature=c49e4ff24ba380bdade580e3f0dffd1a105a127f47084ea3331fd654087320af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647D4YZWT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCdjd7c9yYegQjNnU8JBXscJdafJYMFfc7Gwx0zeythAAIhAJ1RjuIpaBnKHBmYewsI6y7xuXyQsgQikjPukXjm%2FdszKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxdr%2BY%2FekW95ARVNkEq3AMiMWL0YxEo2fZQqHLA8Va58ZO90zwve8FDbrjhQeNF6a%2F1A485zD7t2nnDw00rdZwcAP2MuruM21M586iDIExmteIbe1iMJkDnYWRD9oeWHqX3d2QIMZpW1X9Nq%2Bg9x42XoUO6ECDOVlbPSZ7l9tlKYgXbwpKt7BdyKchcSJwJMJ2zxBHwDVZZ4CpCTY1xbgfLfU1rzzpRFnhXaFF%2FNO%2Fu8%2B13VihD0vJbgL4oq%2FKZTwqooHd7ivrvZA97tNR9wcUKrhzTbbtPCaqtCAlqhRCwWjlmycG5omxO23OFT9P40o%2FCT7JjHwdAXfRFXey%2F%2B87wceqmDiRGm0%2Bo1G7aTwSZ%2FQ7mIQ4V%2FBDwaGYeE3X5ky%2BGzWDRLCjbryPRNuk6rvS65L1FyWwkN83sawd5SjFimuyKL8tPuHrpAH62LZPYRPG%2F60ZL5n0fXRpa1n%2Bi7eCL9JZNQ%2BXxAH1j%2Bk%2B8LBnshf%2FQCvCuVEOtqf3DavB1ZHaFLkmu0mXTiTNVTS2I1ZpJGcfPf%2BkGE8vVdwTJ%2FIKEEmbGxomlguPvpHKDWPsVHx%2F3VSJ5ThGSXHgPYMcsnRTVdoP%2BpbXhpmUAwlQQJuu%2BtekdTMnh7tQ0ZkOBmAmAWFHB1wJceen44DB4VzDqxpzEBjqkAbUPiXJ2PIM9GgECvMQIS2tPY0MJzr2BRZeW%2FaTIYdL2%2BmcUADBFe6lBod%2Bzo2kuexI9KIhJ%2BclXJiQKObJ63FbcZFqYEVTF1h7yV6bupC9U%2BCaySCSOA9bV5nzhTKkdzcheWIJqDEiCHtcMtaKyaLe3ZeB8GqD23WML2prIhfQomA9I4oPCBad3KcSUtxhLt0nBWcLu9EgSgzuHC%2BXNbufTY9fh&X-Amz-Signature=87335d8136a923f0ba189cf2619a82ad115860870a28ac84c1705ca50332701d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647D4YZWT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCdjd7c9yYegQjNnU8JBXscJdafJYMFfc7Gwx0zeythAAIhAJ1RjuIpaBnKHBmYewsI6y7xuXyQsgQikjPukXjm%2FdszKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxdr%2BY%2FekW95ARVNkEq3AMiMWL0YxEo2fZQqHLA8Va58ZO90zwve8FDbrjhQeNF6a%2F1A485zD7t2nnDw00rdZwcAP2MuruM21M586iDIExmteIbe1iMJkDnYWRD9oeWHqX3d2QIMZpW1X9Nq%2Bg9x42XoUO6ECDOVlbPSZ7l9tlKYgXbwpKt7BdyKchcSJwJMJ2zxBHwDVZZ4CpCTY1xbgfLfU1rzzpRFnhXaFF%2FNO%2Fu8%2B13VihD0vJbgL4oq%2FKZTwqooHd7ivrvZA97tNR9wcUKrhzTbbtPCaqtCAlqhRCwWjlmycG5omxO23OFT9P40o%2FCT7JjHwdAXfRFXey%2F%2B87wceqmDiRGm0%2Bo1G7aTwSZ%2FQ7mIQ4V%2FBDwaGYeE3X5ky%2BGzWDRLCjbryPRNuk6rvS65L1FyWwkN83sawd5SjFimuyKL8tPuHrpAH62LZPYRPG%2F60ZL5n0fXRpa1n%2Bi7eCL9JZNQ%2BXxAH1j%2Bk%2B8LBnshf%2FQCvCuVEOtqf3DavB1ZHaFLkmu0mXTiTNVTS2I1ZpJGcfPf%2BkGE8vVdwTJ%2FIKEEmbGxomlguPvpHKDWPsVHx%2F3VSJ5ThGSXHgPYMcsnRTVdoP%2BpbXhpmUAwlQQJuu%2BtekdTMnh7tQ0ZkOBmAmAWFHB1wJceen44DB4VzDqxpzEBjqkAbUPiXJ2PIM9GgECvMQIS2tPY0MJzr2BRZeW%2FaTIYdL2%2BmcUADBFe6lBod%2Bzo2kuexI9KIhJ%2BclXJiQKObJ63FbcZFqYEVTF1h7yV6bupC9U%2BCaySCSOA9bV5nzhTKkdzcheWIJqDEiCHtcMtaKyaLe3ZeB8GqD23WML2prIhfQomA9I4oPCBad3KcSUtxhLt0nBWcLu9EgSgzuHC%2BXNbufTY9fh&X-Amz-Signature=9b7d4764bb26d2c7321c4ad8eb4c1cdef8040fe1ff6eab596f459add9d168deb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647D4YZWT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCdjd7c9yYegQjNnU8JBXscJdafJYMFfc7Gwx0zeythAAIhAJ1RjuIpaBnKHBmYewsI6y7xuXyQsgQikjPukXjm%2FdszKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxdr%2BY%2FekW95ARVNkEq3AMiMWL0YxEo2fZQqHLA8Va58ZO90zwve8FDbrjhQeNF6a%2F1A485zD7t2nnDw00rdZwcAP2MuruM21M586iDIExmteIbe1iMJkDnYWRD9oeWHqX3d2QIMZpW1X9Nq%2Bg9x42XoUO6ECDOVlbPSZ7l9tlKYgXbwpKt7BdyKchcSJwJMJ2zxBHwDVZZ4CpCTY1xbgfLfU1rzzpRFnhXaFF%2FNO%2Fu8%2B13VihD0vJbgL4oq%2FKZTwqooHd7ivrvZA97tNR9wcUKrhzTbbtPCaqtCAlqhRCwWjlmycG5omxO23OFT9P40o%2FCT7JjHwdAXfRFXey%2F%2B87wceqmDiRGm0%2Bo1G7aTwSZ%2FQ7mIQ4V%2FBDwaGYeE3X5ky%2BGzWDRLCjbryPRNuk6rvS65L1FyWwkN83sawd5SjFimuyKL8tPuHrpAH62LZPYRPG%2F60ZL5n0fXRpa1n%2Bi7eCL9JZNQ%2BXxAH1j%2Bk%2B8LBnshf%2FQCvCuVEOtqf3DavB1ZHaFLkmu0mXTiTNVTS2I1ZpJGcfPf%2BkGE8vVdwTJ%2FIKEEmbGxomlguPvpHKDWPsVHx%2F3VSJ5ThGSXHgPYMcsnRTVdoP%2BpbXhpmUAwlQQJuu%2BtekdTMnh7tQ0ZkOBmAmAWFHB1wJceen44DB4VzDqxpzEBjqkAbUPiXJ2PIM9GgECvMQIS2tPY0MJzr2BRZeW%2FaTIYdL2%2BmcUADBFe6lBod%2Bzo2kuexI9KIhJ%2BclXJiQKObJ63FbcZFqYEVTF1h7yV6bupC9U%2BCaySCSOA9bV5nzhTKkdzcheWIJqDEiCHtcMtaKyaLe3ZeB8GqD23WML2prIhfQomA9I4oPCBad3KcSUtxhLt0nBWcLu9EgSgzuHC%2BXNbufTY9fh&X-Amz-Signature=37b01b572d4641739b06ed37c8bba0ed71567ded0d777d76110fd5ef5a7a413e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647D4YZWT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCdjd7c9yYegQjNnU8JBXscJdafJYMFfc7Gwx0zeythAAIhAJ1RjuIpaBnKHBmYewsI6y7xuXyQsgQikjPukXjm%2FdszKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxdr%2BY%2FekW95ARVNkEq3AMiMWL0YxEo2fZQqHLA8Va58ZO90zwve8FDbrjhQeNF6a%2F1A485zD7t2nnDw00rdZwcAP2MuruM21M586iDIExmteIbe1iMJkDnYWRD9oeWHqX3d2QIMZpW1X9Nq%2Bg9x42XoUO6ECDOVlbPSZ7l9tlKYgXbwpKt7BdyKchcSJwJMJ2zxBHwDVZZ4CpCTY1xbgfLfU1rzzpRFnhXaFF%2FNO%2Fu8%2B13VihD0vJbgL4oq%2FKZTwqooHd7ivrvZA97tNR9wcUKrhzTbbtPCaqtCAlqhRCwWjlmycG5omxO23OFT9P40o%2FCT7JjHwdAXfRFXey%2F%2B87wceqmDiRGm0%2Bo1G7aTwSZ%2FQ7mIQ4V%2FBDwaGYeE3X5ky%2BGzWDRLCjbryPRNuk6rvS65L1FyWwkN83sawd5SjFimuyKL8tPuHrpAH62LZPYRPG%2F60ZL5n0fXRpa1n%2Bi7eCL9JZNQ%2BXxAH1j%2Bk%2B8LBnshf%2FQCvCuVEOtqf3DavB1ZHaFLkmu0mXTiTNVTS2I1ZpJGcfPf%2BkGE8vVdwTJ%2FIKEEmbGxomlguPvpHKDWPsVHx%2F3VSJ5ThGSXHgPYMcsnRTVdoP%2BpbXhpmUAwlQQJuu%2BtekdTMnh7tQ0ZkOBmAmAWFHB1wJceen44DB4VzDqxpzEBjqkAbUPiXJ2PIM9GgECvMQIS2tPY0MJzr2BRZeW%2FaTIYdL2%2BmcUADBFe6lBod%2Bzo2kuexI9KIhJ%2BclXJiQKObJ63FbcZFqYEVTF1h7yV6bupC9U%2BCaySCSOA9bV5nzhTKkdzcheWIJqDEiCHtcMtaKyaLe3ZeB8GqD23WML2prIhfQomA9I4oPCBad3KcSUtxhLt0nBWcLu9EgSgzuHC%2BXNbufTY9fh&X-Amz-Signature=9be11a13239d62152269ab37babef73f8d0865809707904a38357b5a1be60d4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647D4YZWT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCdjd7c9yYegQjNnU8JBXscJdafJYMFfc7Gwx0zeythAAIhAJ1RjuIpaBnKHBmYewsI6y7xuXyQsgQikjPukXjm%2FdszKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxdr%2BY%2FekW95ARVNkEq3AMiMWL0YxEo2fZQqHLA8Va58ZO90zwve8FDbrjhQeNF6a%2F1A485zD7t2nnDw00rdZwcAP2MuruM21M586iDIExmteIbe1iMJkDnYWRD9oeWHqX3d2QIMZpW1X9Nq%2Bg9x42XoUO6ECDOVlbPSZ7l9tlKYgXbwpKt7BdyKchcSJwJMJ2zxBHwDVZZ4CpCTY1xbgfLfU1rzzpRFnhXaFF%2FNO%2Fu8%2B13VihD0vJbgL4oq%2FKZTwqooHd7ivrvZA97tNR9wcUKrhzTbbtPCaqtCAlqhRCwWjlmycG5omxO23OFT9P40o%2FCT7JjHwdAXfRFXey%2F%2B87wceqmDiRGm0%2Bo1G7aTwSZ%2FQ7mIQ4V%2FBDwaGYeE3X5ky%2BGzWDRLCjbryPRNuk6rvS65L1FyWwkN83sawd5SjFimuyKL8tPuHrpAH62LZPYRPG%2F60ZL5n0fXRpa1n%2Bi7eCL9JZNQ%2BXxAH1j%2Bk%2B8LBnshf%2FQCvCuVEOtqf3DavB1ZHaFLkmu0mXTiTNVTS2I1ZpJGcfPf%2BkGE8vVdwTJ%2FIKEEmbGxomlguPvpHKDWPsVHx%2F3VSJ5ThGSXHgPYMcsnRTVdoP%2BpbXhpmUAwlQQJuu%2BtekdTMnh7tQ0ZkOBmAmAWFHB1wJceen44DB4VzDqxpzEBjqkAbUPiXJ2PIM9GgECvMQIS2tPY0MJzr2BRZeW%2FaTIYdL2%2BmcUADBFe6lBod%2Bzo2kuexI9KIhJ%2BclXJiQKObJ63FbcZFqYEVTF1h7yV6bupC9U%2BCaySCSOA9bV5nzhTKkdzcheWIJqDEiCHtcMtaKyaLe3ZeB8GqD23WML2prIhfQomA9I4oPCBad3KcSUtxhLt0nBWcLu9EgSgzuHC%2BXNbufTY9fh&X-Amz-Signature=460c27d7790b6d6b85f7da73107b5c595768e35d5ca2a72c15891b03f2aa6a36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647D4YZWT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCdjd7c9yYegQjNnU8JBXscJdafJYMFfc7Gwx0zeythAAIhAJ1RjuIpaBnKHBmYewsI6y7xuXyQsgQikjPukXjm%2FdszKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxdr%2BY%2FekW95ARVNkEq3AMiMWL0YxEo2fZQqHLA8Va58ZO90zwve8FDbrjhQeNF6a%2F1A485zD7t2nnDw00rdZwcAP2MuruM21M586iDIExmteIbe1iMJkDnYWRD9oeWHqX3d2QIMZpW1X9Nq%2Bg9x42XoUO6ECDOVlbPSZ7l9tlKYgXbwpKt7BdyKchcSJwJMJ2zxBHwDVZZ4CpCTY1xbgfLfU1rzzpRFnhXaFF%2FNO%2Fu8%2B13VihD0vJbgL4oq%2FKZTwqooHd7ivrvZA97tNR9wcUKrhzTbbtPCaqtCAlqhRCwWjlmycG5omxO23OFT9P40o%2FCT7JjHwdAXfRFXey%2F%2B87wceqmDiRGm0%2Bo1G7aTwSZ%2FQ7mIQ4V%2FBDwaGYeE3X5ky%2BGzWDRLCjbryPRNuk6rvS65L1FyWwkN83sawd5SjFimuyKL8tPuHrpAH62LZPYRPG%2F60ZL5n0fXRpa1n%2Bi7eCL9JZNQ%2BXxAH1j%2Bk%2B8LBnshf%2FQCvCuVEOtqf3DavB1ZHaFLkmu0mXTiTNVTS2I1ZpJGcfPf%2BkGE8vVdwTJ%2FIKEEmbGxomlguPvpHKDWPsVHx%2F3VSJ5ThGSXHgPYMcsnRTVdoP%2BpbXhpmUAwlQQJuu%2BtekdTMnh7tQ0ZkOBmAmAWFHB1wJceen44DB4VzDqxpzEBjqkAbUPiXJ2PIM9GgECvMQIS2tPY0MJzr2BRZeW%2FaTIYdL2%2BmcUADBFe6lBod%2Bzo2kuexI9KIhJ%2BclXJiQKObJ63FbcZFqYEVTF1h7yV6bupC9U%2BCaySCSOA9bV5nzhTKkdzcheWIJqDEiCHtcMtaKyaLe3ZeB8GqD23WML2prIhfQomA9I4oPCBad3KcSUtxhLt0nBWcLu9EgSgzuHC%2BXNbufTY9fh&X-Amz-Signature=1340f15f5abd7a0e66fb3d4928839d7bdcf4dd77abc38a6d86a5b5956b87e01e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647D4YZWT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCdjd7c9yYegQjNnU8JBXscJdafJYMFfc7Gwx0zeythAAIhAJ1RjuIpaBnKHBmYewsI6y7xuXyQsgQikjPukXjm%2FdszKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxdr%2BY%2FekW95ARVNkEq3AMiMWL0YxEo2fZQqHLA8Va58ZO90zwve8FDbrjhQeNF6a%2F1A485zD7t2nnDw00rdZwcAP2MuruM21M586iDIExmteIbe1iMJkDnYWRD9oeWHqX3d2QIMZpW1X9Nq%2Bg9x42XoUO6ECDOVlbPSZ7l9tlKYgXbwpKt7BdyKchcSJwJMJ2zxBHwDVZZ4CpCTY1xbgfLfU1rzzpRFnhXaFF%2FNO%2Fu8%2B13VihD0vJbgL4oq%2FKZTwqooHd7ivrvZA97tNR9wcUKrhzTbbtPCaqtCAlqhRCwWjlmycG5omxO23OFT9P40o%2FCT7JjHwdAXfRFXey%2F%2B87wceqmDiRGm0%2Bo1G7aTwSZ%2FQ7mIQ4V%2FBDwaGYeE3X5ky%2BGzWDRLCjbryPRNuk6rvS65L1FyWwkN83sawd5SjFimuyKL8tPuHrpAH62LZPYRPG%2F60ZL5n0fXRpa1n%2Bi7eCL9JZNQ%2BXxAH1j%2Bk%2B8LBnshf%2FQCvCuVEOtqf3DavB1ZHaFLkmu0mXTiTNVTS2I1ZpJGcfPf%2BkGE8vVdwTJ%2FIKEEmbGxomlguPvpHKDWPsVHx%2F3VSJ5ThGSXHgPYMcsnRTVdoP%2BpbXhpmUAwlQQJuu%2BtekdTMnh7tQ0ZkOBmAmAWFHB1wJceen44DB4VzDqxpzEBjqkAbUPiXJ2PIM9GgECvMQIS2tPY0MJzr2BRZeW%2FaTIYdL2%2BmcUADBFe6lBod%2Bzo2kuexI9KIhJ%2BclXJiQKObJ63FbcZFqYEVTF1h7yV6bupC9U%2BCaySCSOA9bV5nzhTKkdzcheWIJqDEiCHtcMtaKyaLe3ZeB8GqD23WML2prIhfQomA9I4oPCBad3KcSUtxhLt0nBWcLu9EgSgzuHC%2BXNbufTY9fh&X-Amz-Signature=7d559c21d82b0e3be2d88e4f9cc8d787fbe1ee6ec73b2018e9d97fa237c685cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDLTMS6N%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCy4YR0LNlsh0b5JLAHK1UN8R20cKtMGH%2ByI0D598YVpgIhAMH%2FQ%2BC4r3gCtu8Albd09lRiR9PzYT%2Fas9RQ2l29vE4ZKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXnQrorLzu%2FfxIQLkq3AO01vGn3cK5Lmi66P4hVMY6Fu6qBq5rtnP%2B9aCcerx5pU4JaLaLvqndgBgVHIRLKN6p0%2BpARQsPc3HOO4QogVQneABMoe6ZHvCJxNM4U6iLgR7uNzEzbTHKOiZyxH%2Fc39SmaQLITeiDRXHEUeWE5Z9C2P4dhYXeU%2FjXk9F6wmw7FzqDs5VsAq7XT0YJotGu0JzenH0keaGl%2F9hl9pg2xtFZm%2F65UAg0AQZKuJ9VG%2FwcSl3aO5HfHb8f07KoslPtPBlO5GVSiToxYHtrfNlockpT0mVqkO40iJgq%2Fyep2ceO0fAqXQmGm0hlHXCf8FkFJAPbsCqgiCxTEsnoHlMaNnVpmHH5ARSHOwmAI7N%2Fqfmrw0SC4M%2Fa%2B%2FG9nKTF9GhFsoLCVfOHvstAu0UEJtQ276nWxV1xxNhf869dSXuEZhMz9%2FhPdky4UOUCL%2FmEqmWwUS3jlmxPmpCxwEUOkwCEs9PV4a1yFzGlKbtIX%2Bvm4UtLGhFOh4twh7AEEl3tdUM4hQeNtGkQNaNqnYSDOdPMzUjQKK6ez%2BXk8GlxmDx8AANEEFqb9ePbGbfBi3mt6k2j79Fhc6VUQTaCd9gq26JPmaaqdHup9r2wcvcOZsxAwgH3S9mjCqYOIc1qQKZI%2BjC%2BxZzEBjqkAW8ziRFlKGgyFkU7V811fKn7txRCLyS3iHN3FSbR7XrGV1ctqqbEbnYT7cPcyIumEW0zXOzm6DmKxvePPDSjAezPn1jyWRHMT4qKfKa6K8gwuoROQsOCVRyEPwN5yxIbInDUT6ONWCwgZxwRfthg7%2F8egOoXud2G8KGY5JVwwMOMboDRo1iYGl8t%2FXhsU1TDbh3NA7D3mZcqs4b1ey%2BiZz%2B80883&X-Amz-Signature=565f8f5dee84377fb01d345719d7180f64d7de517643034903fd49328b47d330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDLTMS6N%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCy4YR0LNlsh0b5JLAHK1UN8R20cKtMGH%2ByI0D598YVpgIhAMH%2FQ%2BC4r3gCtu8Albd09lRiR9PzYT%2Fas9RQ2l29vE4ZKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXnQrorLzu%2FfxIQLkq3AO01vGn3cK5Lmi66P4hVMY6Fu6qBq5rtnP%2B9aCcerx5pU4JaLaLvqndgBgVHIRLKN6p0%2BpARQsPc3HOO4QogVQneABMoe6ZHvCJxNM4U6iLgR7uNzEzbTHKOiZyxH%2Fc39SmaQLITeiDRXHEUeWE5Z9C2P4dhYXeU%2FjXk9F6wmw7FzqDs5VsAq7XT0YJotGu0JzenH0keaGl%2F9hl9pg2xtFZm%2F65UAg0AQZKuJ9VG%2FwcSl3aO5HfHb8f07KoslPtPBlO5GVSiToxYHtrfNlockpT0mVqkO40iJgq%2Fyep2ceO0fAqXQmGm0hlHXCf8FkFJAPbsCqgiCxTEsnoHlMaNnVpmHH5ARSHOwmAI7N%2Fqfmrw0SC4M%2Fa%2B%2FG9nKTF9GhFsoLCVfOHvstAu0UEJtQ276nWxV1xxNhf869dSXuEZhMz9%2FhPdky4UOUCL%2FmEqmWwUS3jlmxPmpCxwEUOkwCEs9PV4a1yFzGlKbtIX%2Bvm4UtLGhFOh4twh7AEEl3tdUM4hQeNtGkQNaNqnYSDOdPMzUjQKK6ez%2BXk8GlxmDx8AANEEFqb9ePbGbfBi3mt6k2j79Fhc6VUQTaCd9gq26JPmaaqdHup9r2wcvcOZsxAwgH3S9mjCqYOIc1qQKZI%2BjC%2BxZzEBjqkAW8ziRFlKGgyFkU7V811fKn7txRCLyS3iHN3FSbR7XrGV1ctqqbEbnYT7cPcyIumEW0zXOzm6DmKxvePPDSjAezPn1jyWRHMT4qKfKa6K8gwuoROQsOCVRyEPwN5yxIbInDUT6ONWCwgZxwRfthg7%2F8egOoXud2G8KGY5JVwwMOMboDRo1iYGl8t%2FXhsU1TDbh3NA7D3mZcqs4b1ey%2BiZz%2B80883&X-Amz-Signature=f206ac11c95403d6e363916d2042f0948b9559087059230ec02863c144cdbfc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDLTMS6N%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCy4YR0LNlsh0b5JLAHK1UN8R20cKtMGH%2ByI0D598YVpgIhAMH%2FQ%2BC4r3gCtu8Albd09lRiR9PzYT%2Fas9RQ2l29vE4ZKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXnQrorLzu%2FfxIQLkq3AO01vGn3cK5Lmi66P4hVMY6Fu6qBq5rtnP%2B9aCcerx5pU4JaLaLvqndgBgVHIRLKN6p0%2BpARQsPc3HOO4QogVQneABMoe6ZHvCJxNM4U6iLgR7uNzEzbTHKOiZyxH%2Fc39SmaQLITeiDRXHEUeWE5Z9C2P4dhYXeU%2FjXk9F6wmw7FzqDs5VsAq7XT0YJotGu0JzenH0keaGl%2F9hl9pg2xtFZm%2F65UAg0AQZKuJ9VG%2FwcSl3aO5HfHb8f07KoslPtPBlO5GVSiToxYHtrfNlockpT0mVqkO40iJgq%2Fyep2ceO0fAqXQmGm0hlHXCf8FkFJAPbsCqgiCxTEsnoHlMaNnVpmHH5ARSHOwmAI7N%2Fqfmrw0SC4M%2Fa%2B%2FG9nKTF9GhFsoLCVfOHvstAu0UEJtQ276nWxV1xxNhf869dSXuEZhMz9%2FhPdky4UOUCL%2FmEqmWwUS3jlmxPmpCxwEUOkwCEs9PV4a1yFzGlKbtIX%2Bvm4UtLGhFOh4twh7AEEl3tdUM4hQeNtGkQNaNqnYSDOdPMzUjQKK6ez%2BXk8GlxmDx8AANEEFqb9ePbGbfBi3mt6k2j79Fhc6VUQTaCd9gq26JPmaaqdHup9r2wcvcOZsxAwgH3S9mjCqYOIc1qQKZI%2BjC%2BxZzEBjqkAW8ziRFlKGgyFkU7V811fKn7txRCLyS3iHN3FSbR7XrGV1ctqqbEbnYT7cPcyIumEW0zXOzm6DmKxvePPDSjAezPn1jyWRHMT4qKfKa6K8gwuoROQsOCVRyEPwN5yxIbInDUT6ONWCwgZxwRfthg7%2F8egOoXud2G8KGY5JVwwMOMboDRo1iYGl8t%2FXhsU1TDbh3NA7D3mZcqs4b1ey%2BiZz%2B80883&X-Amz-Signature=7ab9a218c8d3cb552a45957d97e6ef25ce5e42b7adc8956d0e0c6e7ba46c4747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDLTMS6N%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCy4YR0LNlsh0b5JLAHK1UN8R20cKtMGH%2ByI0D598YVpgIhAMH%2FQ%2BC4r3gCtu8Albd09lRiR9PzYT%2Fas9RQ2l29vE4ZKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXnQrorLzu%2FfxIQLkq3AO01vGn3cK5Lmi66P4hVMY6Fu6qBq5rtnP%2B9aCcerx5pU4JaLaLvqndgBgVHIRLKN6p0%2BpARQsPc3HOO4QogVQneABMoe6ZHvCJxNM4U6iLgR7uNzEzbTHKOiZyxH%2Fc39SmaQLITeiDRXHEUeWE5Z9C2P4dhYXeU%2FjXk9F6wmw7FzqDs5VsAq7XT0YJotGu0JzenH0keaGl%2F9hl9pg2xtFZm%2F65UAg0AQZKuJ9VG%2FwcSl3aO5HfHb8f07KoslPtPBlO5GVSiToxYHtrfNlockpT0mVqkO40iJgq%2Fyep2ceO0fAqXQmGm0hlHXCf8FkFJAPbsCqgiCxTEsnoHlMaNnVpmHH5ARSHOwmAI7N%2Fqfmrw0SC4M%2Fa%2B%2FG9nKTF9GhFsoLCVfOHvstAu0UEJtQ276nWxV1xxNhf869dSXuEZhMz9%2FhPdky4UOUCL%2FmEqmWwUS3jlmxPmpCxwEUOkwCEs9PV4a1yFzGlKbtIX%2Bvm4UtLGhFOh4twh7AEEl3tdUM4hQeNtGkQNaNqnYSDOdPMzUjQKK6ez%2BXk8GlxmDx8AANEEFqb9ePbGbfBi3mt6k2j79Fhc6VUQTaCd9gq26JPmaaqdHup9r2wcvcOZsxAwgH3S9mjCqYOIc1qQKZI%2BjC%2BxZzEBjqkAW8ziRFlKGgyFkU7V811fKn7txRCLyS3iHN3FSbR7XrGV1ctqqbEbnYT7cPcyIumEW0zXOzm6DmKxvePPDSjAezPn1jyWRHMT4qKfKa6K8gwuoROQsOCVRyEPwN5yxIbInDUT6ONWCwgZxwRfthg7%2F8egOoXud2G8KGY5JVwwMOMboDRo1iYGl8t%2FXhsU1TDbh3NA7D3mZcqs4b1ey%2BiZz%2B80883&X-Amz-Signature=c69b4caefac41fdc2df85cee843d5b9a6a1643b80046b735a69e2b1e710d44e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDLTMS6N%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCy4YR0LNlsh0b5JLAHK1UN8R20cKtMGH%2ByI0D598YVpgIhAMH%2FQ%2BC4r3gCtu8Albd09lRiR9PzYT%2Fas9RQ2l29vE4ZKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXnQrorLzu%2FfxIQLkq3AO01vGn3cK5Lmi66P4hVMY6Fu6qBq5rtnP%2B9aCcerx5pU4JaLaLvqndgBgVHIRLKN6p0%2BpARQsPc3HOO4QogVQneABMoe6ZHvCJxNM4U6iLgR7uNzEzbTHKOiZyxH%2Fc39SmaQLITeiDRXHEUeWE5Z9C2P4dhYXeU%2FjXk9F6wmw7FzqDs5VsAq7XT0YJotGu0JzenH0keaGl%2F9hl9pg2xtFZm%2F65UAg0AQZKuJ9VG%2FwcSl3aO5HfHb8f07KoslPtPBlO5GVSiToxYHtrfNlockpT0mVqkO40iJgq%2Fyep2ceO0fAqXQmGm0hlHXCf8FkFJAPbsCqgiCxTEsnoHlMaNnVpmHH5ARSHOwmAI7N%2Fqfmrw0SC4M%2Fa%2B%2FG9nKTF9GhFsoLCVfOHvstAu0UEJtQ276nWxV1xxNhf869dSXuEZhMz9%2FhPdky4UOUCL%2FmEqmWwUS3jlmxPmpCxwEUOkwCEs9PV4a1yFzGlKbtIX%2Bvm4UtLGhFOh4twh7AEEl3tdUM4hQeNtGkQNaNqnYSDOdPMzUjQKK6ez%2BXk8GlxmDx8AANEEFqb9ePbGbfBi3mt6k2j79Fhc6VUQTaCd9gq26JPmaaqdHup9r2wcvcOZsxAwgH3S9mjCqYOIc1qQKZI%2BjC%2BxZzEBjqkAW8ziRFlKGgyFkU7V811fKn7txRCLyS3iHN3FSbR7XrGV1ctqqbEbnYT7cPcyIumEW0zXOzm6DmKxvePPDSjAezPn1jyWRHMT4qKfKa6K8gwuoROQsOCVRyEPwN5yxIbInDUT6ONWCwgZxwRfthg7%2F8egOoXud2G8KGY5JVwwMOMboDRo1iYGl8t%2FXhsU1TDbh3NA7D3mZcqs4b1ey%2BiZz%2B80883&X-Amz-Signature=7a420c0bc602fb6061c1e50ba961a2b5491b004de22501dedc189e240602f40a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDLTMS6N%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCy4YR0LNlsh0b5JLAHK1UN8R20cKtMGH%2ByI0D598YVpgIhAMH%2FQ%2BC4r3gCtu8Albd09lRiR9PzYT%2Fas9RQ2l29vE4ZKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXnQrorLzu%2FfxIQLkq3AO01vGn3cK5Lmi66P4hVMY6Fu6qBq5rtnP%2B9aCcerx5pU4JaLaLvqndgBgVHIRLKN6p0%2BpARQsPc3HOO4QogVQneABMoe6ZHvCJxNM4U6iLgR7uNzEzbTHKOiZyxH%2Fc39SmaQLITeiDRXHEUeWE5Z9C2P4dhYXeU%2FjXk9F6wmw7FzqDs5VsAq7XT0YJotGu0JzenH0keaGl%2F9hl9pg2xtFZm%2F65UAg0AQZKuJ9VG%2FwcSl3aO5HfHb8f07KoslPtPBlO5GVSiToxYHtrfNlockpT0mVqkO40iJgq%2Fyep2ceO0fAqXQmGm0hlHXCf8FkFJAPbsCqgiCxTEsnoHlMaNnVpmHH5ARSHOwmAI7N%2Fqfmrw0SC4M%2Fa%2B%2FG9nKTF9GhFsoLCVfOHvstAu0UEJtQ276nWxV1xxNhf869dSXuEZhMz9%2FhPdky4UOUCL%2FmEqmWwUS3jlmxPmpCxwEUOkwCEs9PV4a1yFzGlKbtIX%2Bvm4UtLGhFOh4twh7AEEl3tdUM4hQeNtGkQNaNqnYSDOdPMzUjQKK6ez%2BXk8GlxmDx8AANEEFqb9ePbGbfBi3mt6k2j79Fhc6VUQTaCd9gq26JPmaaqdHup9r2wcvcOZsxAwgH3S9mjCqYOIc1qQKZI%2BjC%2BxZzEBjqkAW8ziRFlKGgyFkU7V811fKn7txRCLyS3iHN3FSbR7XrGV1ctqqbEbnYT7cPcyIumEW0zXOzm6DmKxvePPDSjAezPn1jyWRHMT4qKfKa6K8gwuoROQsOCVRyEPwN5yxIbInDUT6ONWCwgZxwRfthg7%2F8egOoXud2G8KGY5JVwwMOMboDRo1iYGl8t%2FXhsU1TDbh3NA7D3mZcqs4b1ey%2BiZz%2B80883&X-Amz-Signature=05ddff45682b7937b06f70d9191f6db527138792d931c8fadbd7caaa9e73e3ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
