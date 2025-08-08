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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662233OLZY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDp5BoU1emxmY5Ek9wTWIkqqhLAMgY7AuM2fDQzmJs0dwIgF%2F8HJKnyyCreyfCZdv8PxvaJN2ctHYpk24zox3weHTYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8KzAJWtxiYtOiDGyrcA5upt60J5b0igVJpMYGP4MKNPFBxPVs6ooH3GkmCboKcVyFCVq%2BotYkIA4aLWE4XrZ26QCE44GruPdwCRj3N3xfCFy6VZWvWWBQLfZF%2BhHpj5odg74Dl53XpiYjYSYsg0oY46eY7a1k5BPRMuheJKCmpKtHRcKFyMptthzyznHqALwGFEJ9EGQsovhQHQS71wfANsEZ2e2JdAN%2FIjpgvjtW3C4jLqYWvL8SjVDSbvwXUeLeKcnxOiRtFt%2BRKu6NGxLR7yV%2FVha8WBNkK0Uy%2FgRs9CgoJhColT4nAyQjUsd9o7qdmzqJ6YCxBXzs3jSsMUZM1k9DissISDMSf8aiwqFjelR3ojLH6UGBAMEEXiLqJOGqd2URNmZ2Sai0V1cSXe8DyrLcvn3tK5O7V9acrrLtKgN7iRahSpQv0ZgdPAH8Sg6DxQj0QopAGjbJVGgvMIuYnrmHXvv4UjgeT4JcIBVJyAOjmHsUCgf47IuozkR6fuHS2bh3ZnFDFyqunOwgfMXfXfyEl8ph5xDsRuSPXOu7MDBrx10TIIxisb3rQ5AgPcAG%2F2d%2FupThKipwKi7myJxa3j%2B6cdeUYELFBwuId%2FmePNJd9Lw9RhwQM%2FqoqgRYX6Zz79Sl3Mj9hsSvXMLbH1sQGOqUBvHLPj0eczOquqBzKwXQawJjhwVCZxlNPPZ1oAsx11hAz8U6DzvAJ0anDzKFnSo7efdxRCluu37UWjfI6majM6rRFU%2B9V2cWxGOqcM965iLMqj2kgc7Gvf%2B48ZbbbX3%2F3NzODqrUFFjbWwkVemAQxZc3kM%2FQ7QKDFFvDMiAF1vbdoa9StsV7zO7lrqYfohYHKpKo2LKpQcQKsbm9fyJoFy9iJTSHn&X-Amz-Signature=c7cfeb2b28d9cf967b0e97de126536d4786747c96843f985c9e7f591cc518bcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662233OLZY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDp5BoU1emxmY5Ek9wTWIkqqhLAMgY7AuM2fDQzmJs0dwIgF%2F8HJKnyyCreyfCZdv8PxvaJN2ctHYpk24zox3weHTYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8KzAJWtxiYtOiDGyrcA5upt60J5b0igVJpMYGP4MKNPFBxPVs6ooH3GkmCboKcVyFCVq%2BotYkIA4aLWE4XrZ26QCE44GruPdwCRj3N3xfCFy6VZWvWWBQLfZF%2BhHpj5odg74Dl53XpiYjYSYsg0oY46eY7a1k5BPRMuheJKCmpKtHRcKFyMptthzyznHqALwGFEJ9EGQsovhQHQS71wfANsEZ2e2JdAN%2FIjpgvjtW3C4jLqYWvL8SjVDSbvwXUeLeKcnxOiRtFt%2BRKu6NGxLR7yV%2FVha8WBNkK0Uy%2FgRs9CgoJhColT4nAyQjUsd9o7qdmzqJ6YCxBXzs3jSsMUZM1k9DissISDMSf8aiwqFjelR3ojLH6UGBAMEEXiLqJOGqd2URNmZ2Sai0V1cSXe8DyrLcvn3tK5O7V9acrrLtKgN7iRahSpQv0ZgdPAH8Sg6DxQj0QopAGjbJVGgvMIuYnrmHXvv4UjgeT4JcIBVJyAOjmHsUCgf47IuozkR6fuHS2bh3ZnFDFyqunOwgfMXfXfyEl8ph5xDsRuSPXOu7MDBrx10TIIxisb3rQ5AgPcAG%2F2d%2FupThKipwKi7myJxa3j%2B6cdeUYELFBwuId%2FmePNJd9Lw9RhwQM%2FqoqgRYX6Zz79Sl3Mj9hsSvXMLbH1sQGOqUBvHLPj0eczOquqBzKwXQawJjhwVCZxlNPPZ1oAsx11hAz8U6DzvAJ0anDzKFnSo7efdxRCluu37UWjfI6majM6rRFU%2B9V2cWxGOqcM965iLMqj2kgc7Gvf%2B48ZbbbX3%2F3NzODqrUFFjbWwkVemAQxZc3kM%2FQ7QKDFFvDMiAF1vbdoa9StsV7zO7lrqYfohYHKpKo2LKpQcQKsbm9fyJoFy9iJTSHn&X-Amz-Signature=ad7112fa78fd4e27db8a491072efb3be43ad33db531eed663fd291d06e5e8c42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662233OLZY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDp5BoU1emxmY5Ek9wTWIkqqhLAMgY7AuM2fDQzmJs0dwIgF%2F8HJKnyyCreyfCZdv8PxvaJN2ctHYpk24zox3weHTYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8KzAJWtxiYtOiDGyrcA5upt60J5b0igVJpMYGP4MKNPFBxPVs6ooH3GkmCboKcVyFCVq%2BotYkIA4aLWE4XrZ26QCE44GruPdwCRj3N3xfCFy6VZWvWWBQLfZF%2BhHpj5odg74Dl53XpiYjYSYsg0oY46eY7a1k5BPRMuheJKCmpKtHRcKFyMptthzyznHqALwGFEJ9EGQsovhQHQS71wfANsEZ2e2JdAN%2FIjpgvjtW3C4jLqYWvL8SjVDSbvwXUeLeKcnxOiRtFt%2BRKu6NGxLR7yV%2FVha8WBNkK0Uy%2FgRs9CgoJhColT4nAyQjUsd9o7qdmzqJ6YCxBXzs3jSsMUZM1k9DissISDMSf8aiwqFjelR3ojLH6UGBAMEEXiLqJOGqd2URNmZ2Sai0V1cSXe8DyrLcvn3tK5O7V9acrrLtKgN7iRahSpQv0ZgdPAH8Sg6DxQj0QopAGjbJVGgvMIuYnrmHXvv4UjgeT4JcIBVJyAOjmHsUCgf47IuozkR6fuHS2bh3ZnFDFyqunOwgfMXfXfyEl8ph5xDsRuSPXOu7MDBrx10TIIxisb3rQ5AgPcAG%2F2d%2FupThKipwKi7myJxa3j%2B6cdeUYELFBwuId%2FmePNJd9Lw9RhwQM%2FqoqgRYX6Zz79Sl3Mj9hsSvXMLbH1sQGOqUBvHLPj0eczOquqBzKwXQawJjhwVCZxlNPPZ1oAsx11hAz8U6DzvAJ0anDzKFnSo7efdxRCluu37UWjfI6majM6rRFU%2B9V2cWxGOqcM965iLMqj2kgc7Gvf%2B48ZbbbX3%2F3NzODqrUFFjbWwkVemAQxZc3kM%2FQ7QKDFFvDMiAF1vbdoa9StsV7zO7lrqYfohYHKpKo2LKpQcQKsbm9fyJoFy9iJTSHn&X-Amz-Signature=eaecbecbf955ee6dcd88e4521a9335d14e669ba5732fd456c0f3b79d6fb36f39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662233OLZY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDp5BoU1emxmY5Ek9wTWIkqqhLAMgY7AuM2fDQzmJs0dwIgF%2F8HJKnyyCreyfCZdv8PxvaJN2ctHYpk24zox3weHTYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8KzAJWtxiYtOiDGyrcA5upt60J5b0igVJpMYGP4MKNPFBxPVs6ooH3GkmCboKcVyFCVq%2BotYkIA4aLWE4XrZ26QCE44GruPdwCRj3N3xfCFy6VZWvWWBQLfZF%2BhHpj5odg74Dl53XpiYjYSYsg0oY46eY7a1k5BPRMuheJKCmpKtHRcKFyMptthzyznHqALwGFEJ9EGQsovhQHQS71wfANsEZ2e2JdAN%2FIjpgvjtW3C4jLqYWvL8SjVDSbvwXUeLeKcnxOiRtFt%2BRKu6NGxLR7yV%2FVha8WBNkK0Uy%2FgRs9CgoJhColT4nAyQjUsd9o7qdmzqJ6YCxBXzs3jSsMUZM1k9DissISDMSf8aiwqFjelR3ojLH6UGBAMEEXiLqJOGqd2URNmZ2Sai0V1cSXe8DyrLcvn3tK5O7V9acrrLtKgN7iRahSpQv0ZgdPAH8Sg6DxQj0QopAGjbJVGgvMIuYnrmHXvv4UjgeT4JcIBVJyAOjmHsUCgf47IuozkR6fuHS2bh3ZnFDFyqunOwgfMXfXfyEl8ph5xDsRuSPXOu7MDBrx10TIIxisb3rQ5AgPcAG%2F2d%2FupThKipwKi7myJxa3j%2B6cdeUYELFBwuId%2FmePNJd9Lw9RhwQM%2FqoqgRYX6Zz79Sl3Mj9hsSvXMLbH1sQGOqUBvHLPj0eczOquqBzKwXQawJjhwVCZxlNPPZ1oAsx11hAz8U6DzvAJ0anDzKFnSo7efdxRCluu37UWjfI6majM6rRFU%2B9V2cWxGOqcM965iLMqj2kgc7Gvf%2B48ZbbbX3%2F3NzODqrUFFjbWwkVemAQxZc3kM%2FQ7QKDFFvDMiAF1vbdoa9StsV7zO7lrqYfohYHKpKo2LKpQcQKsbm9fyJoFy9iJTSHn&X-Amz-Signature=1b4615f8ea4eb1d8d3d03b5a67efa434278228f8a13c009c24a3ff5d88bbde06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662233OLZY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDp5BoU1emxmY5Ek9wTWIkqqhLAMgY7AuM2fDQzmJs0dwIgF%2F8HJKnyyCreyfCZdv8PxvaJN2ctHYpk24zox3weHTYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8KzAJWtxiYtOiDGyrcA5upt60J5b0igVJpMYGP4MKNPFBxPVs6ooH3GkmCboKcVyFCVq%2BotYkIA4aLWE4XrZ26QCE44GruPdwCRj3N3xfCFy6VZWvWWBQLfZF%2BhHpj5odg74Dl53XpiYjYSYsg0oY46eY7a1k5BPRMuheJKCmpKtHRcKFyMptthzyznHqALwGFEJ9EGQsovhQHQS71wfANsEZ2e2JdAN%2FIjpgvjtW3C4jLqYWvL8SjVDSbvwXUeLeKcnxOiRtFt%2BRKu6NGxLR7yV%2FVha8WBNkK0Uy%2FgRs9CgoJhColT4nAyQjUsd9o7qdmzqJ6YCxBXzs3jSsMUZM1k9DissISDMSf8aiwqFjelR3ojLH6UGBAMEEXiLqJOGqd2URNmZ2Sai0V1cSXe8DyrLcvn3tK5O7V9acrrLtKgN7iRahSpQv0ZgdPAH8Sg6DxQj0QopAGjbJVGgvMIuYnrmHXvv4UjgeT4JcIBVJyAOjmHsUCgf47IuozkR6fuHS2bh3ZnFDFyqunOwgfMXfXfyEl8ph5xDsRuSPXOu7MDBrx10TIIxisb3rQ5AgPcAG%2F2d%2FupThKipwKi7myJxa3j%2B6cdeUYELFBwuId%2FmePNJd9Lw9RhwQM%2FqoqgRYX6Zz79Sl3Mj9hsSvXMLbH1sQGOqUBvHLPj0eczOquqBzKwXQawJjhwVCZxlNPPZ1oAsx11hAz8U6DzvAJ0anDzKFnSo7efdxRCluu37UWjfI6majM6rRFU%2B9V2cWxGOqcM965iLMqj2kgc7Gvf%2B48ZbbbX3%2F3NzODqrUFFjbWwkVemAQxZc3kM%2FQ7QKDFFvDMiAF1vbdoa9StsV7zO7lrqYfohYHKpKo2LKpQcQKsbm9fyJoFy9iJTSHn&X-Amz-Signature=c58ca08521672378ff384bcd71273311e53ffc0dfe37ac0ffbc8a45c29742f9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662233OLZY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDp5BoU1emxmY5Ek9wTWIkqqhLAMgY7AuM2fDQzmJs0dwIgF%2F8HJKnyyCreyfCZdv8PxvaJN2ctHYpk24zox3weHTYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8KzAJWtxiYtOiDGyrcA5upt60J5b0igVJpMYGP4MKNPFBxPVs6ooH3GkmCboKcVyFCVq%2BotYkIA4aLWE4XrZ26QCE44GruPdwCRj3N3xfCFy6VZWvWWBQLfZF%2BhHpj5odg74Dl53XpiYjYSYsg0oY46eY7a1k5BPRMuheJKCmpKtHRcKFyMptthzyznHqALwGFEJ9EGQsovhQHQS71wfANsEZ2e2JdAN%2FIjpgvjtW3C4jLqYWvL8SjVDSbvwXUeLeKcnxOiRtFt%2BRKu6NGxLR7yV%2FVha8WBNkK0Uy%2FgRs9CgoJhColT4nAyQjUsd9o7qdmzqJ6YCxBXzs3jSsMUZM1k9DissISDMSf8aiwqFjelR3ojLH6UGBAMEEXiLqJOGqd2URNmZ2Sai0V1cSXe8DyrLcvn3tK5O7V9acrrLtKgN7iRahSpQv0ZgdPAH8Sg6DxQj0QopAGjbJVGgvMIuYnrmHXvv4UjgeT4JcIBVJyAOjmHsUCgf47IuozkR6fuHS2bh3ZnFDFyqunOwgfMXfXfyEl8ph5xDsRuSPXOu7MDBrx10TIIxisb3rQ5AgPcAG%2F2d%2FupThKipwKi7myJxa3j%2B6cdeUYELFBwuId%2FmePNJd9Lw9RhwQM%2FqoqgRYX6Zz79Sl3Mj9hsSvXMLbH1sQGOqUBvHLPj0eczOquqBzKwXQawJjhwVCZxlNPPZ1oAsx11hAz8U6DzvAJ0anDzKFnSo7efdxRCluu37UWjfI6majM6rRFU%2B9V2cWxGOqcM965iLMqj2kgc7Gvf%2B48ZbbbX3%2F3NzODqrUFFjbWwkVemAQxZc3kM%2FQ7QKDFFvDMiAF1vbdoa9StsV7zO7lrqYfohYHKpKo2LKpQcQKsbm9fyJoFy9iJTSHn&X-Amz-Signature=4978114a040d69350bc2d2f486cabe528d9b4c961b7ab0e2f422775b481f245d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662233OLZY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDp5BoU1emxmY5Ek9wTWIkqqhLAMgY7AuM2fDQzmJs0dwIgF%2F8HJKnyyCreyfCZdv8PxvaJN2ctHYpk24zox3weHTYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8KzAJWtxiYtOiDGyrcA5upt60J5b0igVJpMYGP4MKNPFBxPVs6ooH3GkmCboKcVyFCVq%2BotYkIA4aLWE4XrZ26QCE44GruPdwCRj3N3xfCFy6VZWvWWBQLfZF%2BhHpj5odg74Dl53XpiYjYSYsg0oY46eY7a1k5BPRMuheJKCmpKtHRcKFyMptthzyznHqALwGFEJ9EGQsovhQHQS71wfANsEZ2e2JdAN%2FIjpgvjtW3C4jLqYWvL8SjVDSbvwXUeLeKcnxOiRtFt%2BRKu6NGxLR7yV%2FVha8WBNkK0Uy%2FgRs9CgoJhColT4nAyQjUsd9o7qdmzqJ6YCxBXzs3jSsMUZM1k9DissISDMSf8aiwqFjelR3ojLH6UGBAMEEXiLqJOGqd2URNmZ2Sai0V1cSXe8DyrLcvn3tK5O7V9acrrLtKgN7iRahSpQv0ZgdPAH8Sg6DxQj0QopAGjbJVGgvMIuYnrmHXvv4UjgeT4JcIBVJyAOjmHsUCgf47IuozkR6fuHS2bh3ZnFDFyqunOwgfMXfXfyEl8ph5xDsRuSPXOu7MDBrx10TIIxisb3rQ5AgPcAG%2F2d%2FupThKipwKi7myJxa3j%2B6cdeUYELFBwuId%2FmePNJd9Lw9RhwQM%2FqoqgRYX6Zz79Sl3Mj9hsSvXMLbH1sQGOqUBvHLPj0eczOquqBzKwXQawJjhwVCZxlNPPZ1oAsx11hAz8U6DzvAJ0anDzKFnSo7efdxRCluu37UWjfI6majM6rRFU%2B9V2cWxGOqcM965iLMqj2kgc7Gvf%2B48ZbbbX3%2F3NzODqrUFFjbWwkVemAQxZc3kM%2FQ7QKDFFvDMiAF1vbdoa9StsV7zO7lrqYfohYHKpKo2LKpQcQKsbm9fyJoFy9iJTSHn&X-Amz-Signature=4b1c56e57a82344867ed23b7b8c4b2abddad0421125001a91426f7d503f0788d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662233OLZY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDp5BoU1emxmY5Ek9wTWIkqqhLAMgY7AuM2fDQzmJs0dwIgF%2F8HJKnyyCreyfCZdv8PxvaJN2ctHYpk24zox3weHTYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8KzAJWtxiYtOiDGyrcA5upt60J5b0igVJpMYGP4MKNPFBxPVs6ooH3GkmCboKcVyFCVq%2BotYkIA4aLWE4XrZ26QCE44GruPdwCRj3N3xfCFy6VZWvWWBQLfZF%2BhHpj5odg74Dl53XpiYjYSYsg0oY46eY7a1k5BPRMuheJKCmpKtHRcKFyMptthzyznHqALwGFEJ9EGQsovhQHQS71wfANsEZ2e2JdAN%2FIjpgvjtW3C4jLqYWvL8SjVDSbvwXUeLeKcnxOiRtFt%2BRKu6NGxLR7yV%2FVha8WBNkK0Uy%2FgRs9CgoJhColT4nAyQjUsd9o7qdmzqJ6YCxBXzs3jSsMUZM1k9DissISDMSf8aiwqFjelR3ojLH6UGBAMEEXiLqJOGqd2URNmZ2Sai0V1cSXe8DyrLcvn3tK5O7V9acrrLtKgN7iRahSpQv0ZgdPAH8Sg6DxQj0QopAGjbJVGgvMIuYnrmHXvv4UjgeT4JcIBVJyAOjmHsUCgf47IuozkR6fuHS2bh3ZnFDFyqunOwgfMXfXfyEl8ph5xDsRuSPXOu7MDBrx10TIIxisb3rQ5AgPcAG%2F2d%2FupThKipwKi7myJxa3j%2B6cdeUYELFBwuId%2FmePNJd9Lw9RhwQM%2FqoqgRYX6Zz79Sl3Mj9hsSvXMLbH1sQGOqUBvHLPj0eczOquqBzKwXQawJjhwVCZxlNPPZ1oAsx11hAz8U6DzvAJ0anDzKFnSo7efdxRCluu37UWjfI6majM6rRFU%2B9V2cWxGOqcM965iLMqj2kgc7Gvf%2B48ZbbbX3%2F3NzODqrUFFjbWwkVemAQxZc3kM%2FQ7QKDFFvDMiAF1vbdoa9StsV7zO7lrqYfohYHKpKo2LKpQcQKsbm9fyJoFy9iJTSHn&X-Amz-Signature=502014b3a46ca813294884bb6405928a51cdc4485441b00ea7a6bb83773c1261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662233OLZY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDp5BoU1emxmY5Ek9wTWIkqqhLAMgY7AuM2fDQzmJs0dwIgF%2F8HJKnyyCreyfCZdv8PxvaJN2ctHYpk24zox3weHTYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8KzAJWtxiYtOiDGyrcA5upt60J5b0igVJpMYGP4MKNPFBxPVs6ooH3GkmCboKcVyFCVq%2BotYkIA4aLWE4XrZ26QCE44GruPdwCRj3N3xfCFy6VZWvWWBQLfZF%2BhHpj5odg74Dl53XpiYjYSYsg0oY46eY7a1k5BPRMuheJKCmpKtHRcKFyMptthzyznHqALwGFEJ9EGQsovhQHQS71wfANsEZ2e2JdAN%2FIjpgvjtW3C4jLqYWvL8SjVDSbvwXUeLeKcnxOiRtFt%2BRKu6NGxLR7yV%2FVha8WBNkK0Uy%2FgRs9CgoJhColT4nAyQjUsd9o7qdmzqJ6YCxBXzs3jSsMUZM1k9DissISDMSf8aiwqFjelR3ojLH6UGBAMEEXiLqJOGqd2URNmZ2Sai0V1cSXe8DyrLcvn3tK5O7V9acrrLtKgN7iRahSpQv0ZgdPAH8Sg6DxQj0QopAGjbJVGgvMIuYnrmHXvv4UjgeT4JcIBVJyAOjmHsUCgf47IuozkR6fuHS2bh3ZnFDFyqunOwgfMXfXfyEl8ph5xDsRuSPXOu7MDBrx10TIIxisb3rQ5AgPcAG%2F2d%2FupThKipwKi7myJxa3j%2B6cdeUYELFBwuId%2FmePNJd9Lw9RhwQM%2FqoqgRYX6Zz79Sl3Mj9hsSvXMLbH1sQGOqUBvHLPj0eczOquqBzKwXQawJjhwVCZxlNPPZ1oAsx11hAz8U6DzvAJ0anDzKFnSo7efdxRCluu37UWjfI6majM6rRFU%2B9V2cWxGOqcM965iLMqj2kgc7Gvf%2B48ZbbbX3%2F3NzODqrUFFjbWwkVemAQxZc3kM%2FQ7QKDFFvDMiAF1vbdoa9StsV7zO7lrqYfohYHKpKo2LKpQcQKsbm9fyJoFy9iJTSHn&X-Amz-Signature=06919b8e938953e4e32bc47e42aece1eb1c65ab0e7a1769ea76c852c57a56ad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662233OLZY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDp5BoU1emxmY5Ek9wTWIkqqhLAMgY7AuM2fDQzmJs0dwIgF%2F8HJKnyyCreyfCZdv8PxvaJN2ctHYpk24zox3weHTYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8KzAJWtxiYtOiDGyrcA5upt60J5b0igVJpMYGP4MKNPFBxPVs6ooH3GkmCboKcVyFCVq%2BotYkIA4aLWE4XrZ26QCE44GruPdwCRj3N3xfCFy6VZWvWWBQLfZF%2BhHpj5odg74Dl53XpiYjYSYsg0oY46eY7a1k5BPRMuheJKCmpKtHRcKFyMptthzyznHqALwGFEJ9EGQsovhQHQS71wfANsEZ2e2JdAN%2FIjpgvjtW3C4jLqYWvL8SjVDSbvwXUeLeKcnxOiRtFt%2BRKu6NGxLR7yV%2FVha8WBNkK0Uy%2FgRs9CgoJhColT4nAyQjUsd9o7qdmzqJ6YCxBXzs3jSsMUZM1k9DissISDMSf8aiwqFjelR3ojLH6UGBAMEEXiLqJOGqd2URNmZ2Sai0V1cSXe8DyrLcvn3tK5O7V9acrrLtKgN7iRahSpQv0ZgdPAH8Sg6DxQj0QopAGjbJVGgvMIuYnrmHXvv4UjgeT4JcIBVJyAOjmHsUCgf47IuozkR6fuHS2bh3ZnFDFyqunOwgfMXfXfyEl8ph5xDsRuSPXOu7MDBrx10TIIxisb3rQ5AgPcAG%2F2d%2FupThKipwKi7myJxa3j%2B6cdeUYELFBwuId%2FmePNJd9Lw9RhwQM%2FqoqgRYX6Zz79Sl3Mj9hsSvXMLbH1sQGOqUBvHLPj0eczOquqBzKwXQawJjhwVCZxlNPPZ1oAsx11hAz8U6DzvAJ0anDzKFnSo7efdxRCluu37UWjfI6majM6rRFU%2B9V2cWxGOqcM965iLMqj2kgc7Gvf%2B48ZbbbX3%2F3NzODqrUFFjbWwkVemAQxZc3kM%2FQ7QKDFFvDMiAF1vbdoa9StsV7zO7lrqYfohYHKpKo2LKpQcQKsbm9fyJoFy9iJTSHn&X-Amz-Signature=6c18741930e6c8115f432b3d0f0d7642bd339bee8b40974ed0d4dc2294410282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VH35WFV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCynB3YwwaLpkJMPhPrP23YfBDzTGQJ153Tadx%2BOWp0%2BwIhALcsaqBPK1bWgXjqOyLcoXKXIB1gGLfavZ46yk%2Fn%2FwR0KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FCUOHy4NCXQkC7KUq3AOBQltfael8BdQt1iPBvIel4gZjikQpcqt%2FjV1f8TGx3NfA2KIltNzZ9kJ98Z38yJX5ECLOSDmBGMG7g4Wnpiq8Vp4lBYBaj6EmEwJr8421g0M%2FFqXm0oinCPLcq8tJYZyk5ELkNZCiPSdWCw9OUZq4WV8KzrNp6%2BK78gIeJ9gZC6TxefhDODJrqUlzWrJ%2F2FTtVQRcMHVqjVHa%2BfGFzm4Wn9d5qHOycczKxN%2FtDc1TvRpt63%2F8AC%2Fpu0vgoMpO1D2ZNJdqdaK5XZq4fIcmQgCfx3wznOGmB7dVJn3JPgXIH5faixhntaSaC71THijLrB8G5mxFWIjfp4mzqTAKVtYe9VvxC%2FnQJtVPyeRBkI0M68VsSDM7KlNV%2BV%2B6DPfD6%2Fu5iuohg%2B7KqaNXqPuBkjHBfDoj3O%2BXoMKcasLHtambZLZWYBXU6w29kmQMDIR27qhJAZnr8xdwEqRgK6eaK7BkXtkSGKTEfSj8JDkBEQxT5XmuU9s1N%2BsNqSfmgFUJzibtLMhiK0i0h%2FmsRoCVAcZdjOOLc%2BmyGlTdMhlj07%2FJYMonbRsq6ykgY%2Fc2E10C5IQjKuR81fdOyICY667A26yVjsY2MLaKXNKXQezwQX4j4XnsYD6T5%2Bu%2BLzcNgTC8x9bEBjqkAXghVjxfi1insjH99TE64z%2BGmwGHCnGz2l%2FJveqbXy7fpAxrDd%2FuyPuXZPvj2UUlyNeCmTxpDl1THBKHr0%2But5DO3GALOoni8F3eyxjCs3oKoqh%2F3iwPKQVtVZXxeizoEgMEK7ygOB%2FpsVEwjuQ4Jihh90iHvQPfslTpYsgSmFrK6mk%2BaQAEZbG7EI8VQAjKNxa93MJjgKPF4hzOuKIrlGhl0qf%2F&X-Amz-Signature=b8301732da492a518446ff5bff0844c019330a1e2c7eac4953fb38f0d261e576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZULBZVJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCICh7JPhU64kVEPgVqu5k9Uvj7HXOaQWoTInqemR479nNAiEAhumn5SkRdC3JL9%2BJlniL3GteDvOT4sD4f26Z6dFa7QsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJphIlyoHN57GtTMnSrcA4mGCjihkKCbfNj440n6Wnt%2B8%2Foc9Pa9OEvfLSLmVL1%2FGGhlHootn8io14KLTjZNrBa2CwckdauDx3kRRpy1hDAdUtZaO%2BG9G7%2B%2FS3vXZ0GKeiL61HxUTSKK59et%2BZos8k4XgJ%2BH3WEBMVDiMNR5sjnoXuuilvX04EaQH8ymsPnMKE1Zvh6B%2FeXx%2BYH0vyDdX%2BGscxDhI4HOjpZiPUt7UN1JvkaQJLJ%2BprzuQ6oOvKEMcYdaXEn9vMw4rzEM0xOoSNuAA1dFfa8LePH%2FY8XnGavlYvABLopp%2FJXHoASx8a2lVyC7l5yIOMeVyUgyUfvo%2B5uAIVFlE6gRbvUcj0ccy1zK1LyaTsAFj4epLoKkkcGBUalaAYsojWybXvip6maN9Veofrj47kp0sDFtjsRNvZvS0Ev%2B4%2FctPUgKvm14%2B9yBxQRtF0dtD4Pvhz2%2FkgB40sqwy35HP1KXmhm4KDSMJ5MWOMSAp%2BUpSQHBOz6EE%2BpyiDrVfLxMBP5BvtmUTwW6kDl440Weqb5oE%2BcGm4AF5wmpdCQNQiF3Z4yM8kaKtvGYl%2FVOF%2FIrxSqXH1KfwKeatErYTVk%2B1MvY0vMDkOXM4CPOAVQpzeCysUdl4sZtK06xgMmQJ6NbL9l2JC%2BqMIHH1sQGOqUBtceRPblBQkZAleEGeEdwJZ3bsd8c%2FGy7xmFnIw6r2AfufiHzy23lSAj89gN9kyQ0Q7dAcyoXpTQCye%2BCBt76Avv5WFdgM3LI7%2B06XTUugXlco6RyovY%2Fr983yD6mmEKXqPZ8%2BKfmDUeHoRJywc8Lep3MOkPQ0DaB1%2Be1gNbL8KopNc4UEz4F5vT2I%2FBWMGNTKU%2FlQ4yKaeRCsWkh9hakGbHS3ddA&X-Amz-Signature=ee4c1e750df2169225ef41399c0edd37928f863b68326a7b56d2ba93229a4b7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAKVWSIG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDByiwpXp0tIadqTwEMUtXp4BChIyqxTOyUuTyescj%2BAAIgNo%2FSwnfbD3EfwRyvNz%2FdqNdOr29p%2BzlKYcWc9iRQ7BoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BkoVxjeLV%2FeZscxSrcA0KKvmAgceJVJcJ14DxPNkrdph5rIUJJZv5xDXJxowR1CGC8H5lSM12XVG9MAN%2BP3RwnMRAZpgwYGVg0tONrO63%2BkqKAl0U%2FD22bUigHTxOTL1uvpjoxwjIBR2JqmzSVgIVvlYQ3RvVCPqXJ2EfG39mkb7M9Z8wW1V7BU0oH%2FdkyOz%2FKN5%2BK3%2B1fHl0IqDw25Bgn66Yuq28b04RAZeT2SgOFKf5NooxL6AxvxfXvXdMwE%2ByWH%2B6XNXzKtrfO26ya0ZggQnSxOb8TDLUrXOeKET3e5fSxYshKRWvNXtMwH7OWeeH3TvUeZFHcICXEQk36hIsFQ4vhL28W6N8rn5BdkkyjyEJo038hRezLKVXieFmdxjXwLoPcnf1HeDBpnLWxTTHIw1xWYePGRQO6QTHzEmoL0WXkxKZi6Ije%2F3OwyfZrzUMg2wsCqKEBbl1rnb9i4PUUsi9dRUt1KAkoUelhBkOFG8CWwTmV0Uht2O9t4srDSqz546E6r6WrgwflId6iQCE2SSNiw1pQziuVDzaOYug6%2ByEqt3U1mgVCYX1Jxx3M0XZoME0Zv1qCYhNJ3ydKqh%2FHx7oTMOMfjyI%2BU3hFKEK1spHbQkJ6sOT3CO2wH3LEI0pXRBfhb2EfPyf1MJbH1sQGOqUBH3qNCop8ce5naU6GPOoxhPB87uB18hJYqAL62MLjTsUoEyJiYj2TgWpoKuZJP2HBEfN4b0Hba1N2%2FAdLVc9rNd1uApv6GcQY2tIqFXX0SBQxvwhVJ77vmn6fAkmyERYTWlBxDdujWWssY88IC%2BW2Cyyv7cSwzbouxvc4cndjsOcFM03d6ncKndn9cgKk1mlUSAiroESpK%2F0lMaz5oeF0zx2jUmeX&X-Amz-Signature=2275365349ddf2a404c88cdcc76d210f7f3f72869c55b966db7511b8e8b623e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662233OLZY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDp5BoU1emxmY5Ek9wTWIkqqhLAMgY7AuM2fDQzmJs0dwIgF%2F8HJKnyyCreyfCZdv8PxvaJN2ctHYpk24zox3weHTYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8KzAJWtxiYtOiDGyrcA5upt60J5b0igVJpMYGP4MKNPFBxPVs6ooH3GkmCboKcVyFCVq%2BotYkIA4aLWE4XrZ26QCE44GruPdwCRj3N3xfCFy6VZWvWWBQLfZF%2BhHpj5odg74Dl53XpiYjYSYsg0oY46eY7a1k5BPRMuheJKCmpKtHRcKFyMptthzyznHqALwGFEJ9EGQsovhQHQS71wfANsEZ2e2JdAN%2FIjpgvjtW3C4jLqYWvL8SjVDSbvwXUeLeKcnxOiRtFt%2BRKu6NGxLR7yV%2FVha8WBNkK0Uy%2FgRs9CgoJhColT4nAyQjUsd9o7qdmzqJ6YCxBXzs3jSsMUZM1k9DissISDMSf8aiwqFjelR3ojLH6UGBAMEEXiLqJOGqd2URNmZ2Sai0V1cSXe8DyrLcvn3tK5O7V9acrrLtKgN7iRahSpQv0ZgdPAH8Sg6DxQj0QopAGjbJVGgvMIuYnrmHXvv4UjgeT4JcIBVJyAOjmHsUCgf47IuozkR6fuHS2bh3ZnFDFyqunOwgfMXfXfyEl8ph5xDsRuSPXOu7MDBrx10TIIxisb3rQ5AgPcAG%2F2d%2FupThKipwKi7myJxa3j%2B6cdeUYELFBwuId%2FmePNJd9Lw9RhwQM%2FqoqgRYX6Zz79Sl3Mj9hsSvXMLbH1sQGOqUBvHLPj0eczOquqBzKwXQawJjhwVCZxlNPPZ1oAsx11hAz8U6DzvAJ0anDzKFnSo7efdxRCluu37UWjfI6majM6rRFU%2B9V2cWxGOqcM965iLMqj2kgc7Gvf%2B48ZbbbX3%2F3NzODqrUFFjbWwkVemAQxZc3kM%2FQ7QKDFFvDMiAF1vbdoa9StsV7zO7lrqYfohYHKpKo2LKpQcQKsbm9fyJoFy9iJTSHn&X-Amz-Signature=e96dc1faab40c379ce716d1a09c786586470f1cff47a0db972053492cb68c2a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQJNCSAL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIBxwbpgK8IpXNlNXRdLfKCIUgfgt8%2BjDXRJOSaE0S1u%2BAiEAnd%2BLuOnXChu7STK1izb%2F1VbB1VQFfY8zt2RJMIuSLMEqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiZNwqrIFa511vF7yrcA4s4RzmCM%2BM%2FdwMTB5xg5HC4z4GdIftGXbpiQ8ll0ydNVwAlurhn5Z2agG09V%2Bn2Ly0Rf%2FeaP9qkfrcRCZKOEsUNwhkkfhuxt6PAaI2utm4XvPoPJoJTq5V26%2FCh6A8QoeUKyd0yo6SI%2BTybT3qYDtpzuxMq%2BGCpNDpBqS1GD1RxP0xGYu4yijPW0UwDyKtOlY%2FD6FY0C%2Fhp05Vu4NTdYvldO%2BVdRBb31e%2B4RmA8mRgZ6pKXsekMDpZ6HxqCEQoHdJZrBClMNxbKrUxdS3iscc3N8oPhk3xln%2BUUw9xu70BBSnyLspoVrxz6AKXQJoIWRiz4RFahwlO4MdGs4mPina3NYTR5Ranlv%2Bd00OciWFP0ibilU0ZuMNN1sQOOqOepQ1%2FrtLm05dBYznw955YdP0HwGWGsalcMNvV2oggBUI8WLBvjKsoODxcF7FmUPoBzdZ7FE5z%2FRAXnmO67yhP%2FiFsCESqqlGC0blqqobQFInzfHO0lJlhfxV1ImTKcBMfyV9PNiQbqZkjpyXZUV32nZNUto9U0xvsceslY1bL4gV7qu5NfkAFJqQVndXWD8iR8id8I3uQc3u83UR59LeLwx54K4Vhvs1PjP1hVftiz%2FIruRzdynceNCq4QvL4BMK2g1sQGOqUB%2BDL%2FnIB%2FGW5N6q5PUoBnR5Ixm2XLfGflqrkZoPXQW%2Fvzk87ekcgGetQucFPDm50Hj7%2BSbeyzOcmW09ODTr1nTLaEqca42mnQPUk%2FktcSShWpua6RdXCTTeaEDMyh9OOCG%2BMITTDj1KAE%2FJln3uBPGwKr4S1lVc7jAKxgYXkx7qFusSZKhlCr5kZjbY7yWUYgsM5Yevb7a66nyWFVe8oSXMzqy6U1&X-Amz-Signature=918d6353e904a1eef8190c4816d9e7721b2c04a24c461ab7f03292fcd30c8c09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662233OLZY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDp5BoU1emxmY5Ek9wTWIkqqhLAMgY7AuM2fDQzmJs0dwIgF%2F8HJKnyyCreyfCZdv8PxvaJN2ctHYpk24zox3weHTYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8KzAJWtxiYtOiDGyrcA5upt60J5b0igVJpMYGP4MKNPFBxPVs6ooH3GkmCboKcVyFCVq%2BotYkIA4aLWE4XrZ26QCE44GruPdwCRj3N3xfCFy6VZWvWWBQLfZF%2BhHpj5odg74Dl53XpiYjYSYsg0oY46eY7a1k5BPRMuheJKCmpKtHRcKFyMptthzyznHqALwGFEJ9EGQsovhQHQS71wfANsEZ2e2JdAN%2FIjpgvjtW3C4jLqYWvL8SjVDSbvwXUeLeKcnxOiRtFt%2BRKu6NGxLR7yV%2FVha8WBNkK0Uy%2FgRs9CgoJhColT4nAyQjUsd9o7qdmzqJ6YCxBXzs3jSsMUZM1k9DissISDMSf8aiwqFjelR3ojLH6UGBAMEEXiLqJOGqd2URNmZ2Sai0V1cSXe8DyrLcvn3tK5O7V9acrrLtKgN7iRahSpQv0ZgdPAH8Sg6DxQj0QopAGjbJVGgvMIuYnrmHXvv4UjgeT4JcIBVJyAOjmHsUCgf47IuozkR6fuHS2bh3ZnFDFyqunOwgfMXfXfyEl8ph5xDsRuSPXOu7MDBrx10TIIxisb3rQ5AgPcAG%2F2d%2FupThKipwKi7myJxa3j%2B6cdeUYELFBwuId%2FmePNJd9Lw9RhwQM%2FqoqgRYX6Zz79Sl3Mj9hsSvXMLbH1sQGOqUBvHLPj0eczOquqBzKwXQawJjhwVCZxlNPPZ1oAsx11hAz8U6DzvAJ0anDzKFnSo7efdxRCluu37UWjfI6majM6rRFU%2B9V2cWxGOqcM965iLMqj2kgc7Gvf%2B48ZbbbX3%2F3NzODqrUFFjbWwkVemAQxZc3kM%2FQ7QKDFFvDMiAF1vbdoa9StsV7zO7lrqYfohYHKpKo2LKpQcQKsbm9fyJoFy9iJTSHn&X-Amz-Signature=cf0bb7e742359cb133ae4f15cc06da64695cf54953458fdc2491bf321445e416&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMNLFJYO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBI%2FFBJDGgA3sbDjf6epvMLh8%2FJL5jhISR74HQXu%2Fes5AiAUxiTD5ZXPPqS40bUxKJo5cYh1Y4VhkR9R6c4HkdS0NSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMffI0Weumfk4bqE8yKtwD6ZLeV8hJ0MKRFnvygwWoQ%2Flsn%2BQJeIaJZyzYdCZHcLNSGx5PGDaTaKD1pjSWS2VVNV6IKnoJamdWOvDxdeRjl%2B%2FvKeAKgZh3PyQSBl3mTorW8AwSiHTA%2BkgO%2Fc0g2opx3pBfctxRNX2%2BPBO9mZRQi%2BshKYs2KmRDI1iXECp3dl9q5jF9M%2BDn0neruuy%2B4P9dbrdyVriLOhnjgHubRaehfG%2FwPABStbivI0FRPHZhRZAQFC1k%2BdS3zxyn%2Bdp2ZJ2UiXczNPtWfEj1gBy34n62FxpUVfPOc1BQBjRMbHXFxqOwS9xLubBkYuv%2BSFeShTE0oZJhNgtExnwtDD6Q%2BuGqrgBkRUPmn3xrhhVSQdQuv2Iaj5My7y3uD%2Fo4%2BZTDtwx%2FeVBEYZs%2B5GSXlzcn34AX6vRjJ0g4UTdQOMwCXK4g15APrUyREU5MSjrk535kUdb3uoYkQrTN5jRMUL8tD%2B3tRMzL14Fmw%2FoDrT8Da8vWZ6Y5Hf2PjINbVs8PFK2l9Mrf485SvIG%2FULm%2BaHL0JJEwDUoLKbu%2B54ZJsmtNGs1bs0gAg1kgovfitTSGSxuhgD84fCbs6mM%2FlVkZiwzBOcSabrAwWiOCKJzodtd4yF7bcJcB3nZDP0gM%2FWe4EXgwi6DWxAY6pgERFueJ5h83yi%2BiSn0gPkH8MXXYYZjPEQj4GCBnJkMz1p%2FrNvdOH8Tb0lNXM9LGFn1Cj7lFXlafVWc%2BYBHNr6M4jX3%2B4NHf%2FplH8omqVdmRAlmBXUDDRUJ9D%2FMJVtC%2Bmf7rmJjspMxDeYyzxhCu5gaqQbK6XWxxTA0QeeWrs8saAKprsoHW4BzGCjHOfkzqnACM6DKcqYGIY2aFkHBtOdtT5aNtktqn&X-Amz-Signature=9084950f513de6e59149f96ba8d6221e2f12015ed4cf5e87a9db2ecfe1b9c58e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662233OLZY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDp5BoU1emxmY5Ek9wTWIkqqhLAMgY7AuM2fDQzmJs0dwIgF%2F8HJKnyyCreyfCZdv8PxvaJN2ctHYpk24zox3weHTYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8KzAJWtxiYtOiDGyrcA5upt60J5b0igVJpMYGP4MKNPFBxPVs6ooH3GkmCboKcVyFCVq%2BotYkIA4aLWE4XrZ26QCE44GruPdwCRj3N3xfCFy6VZWvWWBQLfZF%2BhHpj5odg74Dl53XpiYjYSYsg0oY46eY7a1k5BPRMuheJKCmpKtHRcKFyMptthzyznHqALwGFEJ9EGQsovhQHQS71wfANsEZ2e2JdAN%2FIjpgvjtW3C4jLqYWvL8SjVDSbvwXUeLeKcnxOiRtFt%2BRKu6NGxLR7yV%2FVha8WBNkK0Uy%2FgRs9CgoJhColT4nAyQjUsd9o7qdmzqJ6YCxBXzs3jSsMUZM1k9DissISDMSf8aiwqFjelR3ojLH6UGBAMEEXiLqJOGqd2URNmZ2Sai0V1cSXe8DyrLcvn3tK5O7V9acrrLtKgN7iRahSpQv0ZgdPAH8Sg6DxQj0QopAGjbJVGgvMIuYnrmHXvv4UjgeT4JcIBVJyAOjmHsUCgf47IuozkR6fuHS2bh3ZnFDFyqunOwgfMXfXfyEl8ph5xDsRuSPXOu7MDBrx10TIIxisb3rQ5AgPcAG%2F2d%2FupThKipwKi7myJxa3j%2B6cdeUYELFBwuId%2FmePNJd9Lw9RhwQM%2FqoqgRYX6Zz79Sl3Mj9hsSvXMLbH1sQGOqUBvHLPj0eczOquqBzKwXQawJjhwVCZxlNPPZ1oAsx11hAz8U6DzvAJ0anDzKFnSo7efdxRCluu37UWjfI6majM6rRFU%2B9V2cWxGOqcM965iLMqj2kgc7Gvf%2B48ZbbbX3%2F3NzODqrUFFjbWwkVemAQxZc3kM%2FQ7QKDFFvDMiAF1vbdoa9StsV7zO7lrqYfohYHKpKo2LKpQcQKsbm9fyJoFy9iJTSHn&X-Amz-Signature=df235a28ba3cdd5e95539ef20985ce09f7475bc28c7c276e53f7e823d89c9ac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZI4C5Z2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCo7L1VQrWgYsQk4y1R%2Bf7BvPtCkmPqZUiGydAQjL7W4AIhAI%2F3YX%2FCT0YQNC%2BQYEvFFUnGzgddRvkEY5hWluCj92f6KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAeJcto%2FgUvxXL7Iwq3AORKMGO84SFXGUYFsx4oTFJBTLCMBCf%2FGaHBgWKq61toxk%2Fu7n%2FrPy62t1lJzFJdD%2BCc3WjHA%2BgaS%2F25s7bcP1nThj%2BWUoT1syx3b4r2ElUmhd155sD3JEUR0vvK%2B8A57k9In8GFGPaW7IU4wyTvB8l8ms3cYQTfHAervfH%2BrVySyOI0KU3rUjFDjRK%2FZ9sCvIvk0xlAall1yzfP13AwCEJe2LreiBlOPcwEZkdrk2Poi6sUFDaSQ1BKdTiHgVjmA%2BT%2BfMK0Ct2g9DnjKkfg2%2BH4vriI2Spf3CLRjxIXH6%2FzZZEXuHd4%2Fchsm3NS%2FdF2bkgdKb1f5G9KEM1SB1%2Fr7VqDZM8Ho53kt5%2FFzVu%2FMSIkz%2BLqagCREee915tVwMaLvn9P3JAemI%2F56Xa%2Bntz7RF8gLyQtWAuVAlM9aFDVkybVx75HWNUsmxFbHBLxp9wExKGq5ityQ00rnc0CZ4GSN3cbtAs1j4lBJL0JD2xQRGrq88d7%2BKWHtbP%2BobBc6pNLtpefNz4KMguDfINqilOu8JCUZP8YjSq2bGvdpyfY6dV38s1bOrLrALSPVn1BPTTQ8XiMvASITspu0yQ7yA57LgmlPGkqO5xSxlkhcHmZXz1yjvx0c2c3DJJhJ%2Fg8zC4x9bEBjqkAfjlLxe%2BDtmiJYf4QEFI0Y%2BYl67c3GgP7PDdXm3szHT%2FJpb%2B9WirEiXaqq4mNG273PF3UGjFMYSPWW3XESTow45sw1YCX1x0ITpGM0lci0KdYO%2BZpGrZPJLrDd0AzHdALKRYVaVI18H6i2iU8U%2FE3VdZSighXcYssRwrw6%2FCRgyLaiX4pWeHoFd2f8KR%2BCHBybpBTh4wkwd2ZcUEnI%2FiThQgzNkw&X-Amz-Signature=1d8a9d12dc60cdaa62320ce396b63699555299a57eeec12806c01244750ec4d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662233OLZY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDp5BoU1emxmY5Ek9wTWIkqqhLAMgY7AuM2fDQzmJs0dwIgF%2F8HJKnyyCreyfCZdv8PxvaJN2ctHYpk24zox3weHTYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8KzAJWtxiYtOiDGyrcA5upt60J5b0igVJpMYGP4MKNPFBxPVs6ooH3GkmCboKcVyFCVq%2BotYkIA4aLWE4XrZ26QCE44GruPdwCRj3N3xfCFy6VZWvWWBQLfZF%2BhHpj5odg74Dl53XpiYjYSYsg0oY46eY7a1k5BPRMuheJKCmpKtHRcKFyMptthzyznHqALwGFEJ9EGQsovhQHQS71wfANsEZ2e2JdAN%2FIjpgvjtW3C4jLqYWvL8SjVDSbvwXUeLeKcnxOiRtFt%2BRKu6NGxLR7yV%2FVha8WBNkK0Uy%2FgRs9CgoJhColT4nAyQjUsd9o7qdmzqJ6YCxBXzs3jSsMUZM1k9DissISDMSf8aiwqFjelR3ojLH6UGBAMEEXiLqJOGqd2URNmZ2Sai0V1cSXe8DyrLcvn3tK5O7V9acrrLtKgN7iRahSpQv0ZgdPAH8Sg6DxQj0QopAGjbJVGgvMIuYnrmHXvv4UjgeT4JcIBVJyAOjmHsUCgf47IuozkR6fuHS2bh3ZnFDFyqunOwgfMXfXfyEl8ph5xDsRuSPXOu7MDBrx10TIIxisb3rQ5AgPcAG%2F2d%2FupThKipwKi7myJxa3j%2B6cdeUYELFBwuId%2FmePNJd9Lw9RhwQM%2FqoqgRYX6Zz79Sl3Mj9hsSvXMLbH1sQGOqUBvHLPj0eczOquqBzKwXQawJjhwVCZxlNPPZ1oAsx11hAz8U6DzvAJ0anDzKFnSo7efdxRCluu37UWjfI6majM6rRFU%2B9V2cWxGOqcM965iLMqj2kgc7Gvf%2B48ZbbbX3%2F3NzODqrUFFjbWwkVemAQxZc3kM%2FQ7QKDFFvDMiAF1vbdoa9StsV7zO7lrqYfohYHKpKo2LKpQcQKsbm9fyJoFy9iJTSHn&X-Amz-Signature=6526ae4974cd94491f8b855e2c16dd3ab78f911f52108e263a3cfb4b00103cf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZQ4PEY5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDr%2Bu%2B0jGFBItha%2Fa2PcMRXH%2BLwuIgjr3N4oCJtBfWnJwIgO6Nlbj6B%2FrA1CUcFs6vg%2B0Y3bNmDz0W9Ix7lwKJpw%2FQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGRil%2Fek9IGttzosCrcA2jNdFoITVxbxIzeXhaEaCAoNvHaLn3uIEylyDXtqGmLMxyVClE%2FABb1KO%2BXPU4JEuX3aziTSJe4046jNSB1Ocpj4r7ROtoxTgZSSvb4JxbpDKnULsg5%2F88UFRWrKFzsJqF3WaLpMfJeSJItnBhwLY1w0OnOo8nSP2a7bw2tvc9MIZmDwQDM7tEZp%2BOm%2Ba91ccPOM2SuRCR0cUk8KfSLdSEH%2F%2Fpy2HqwYxhENNa9HidYb5cqIp07oT1EuhQgb5a2UIoEVvJhzxl4vcN2aIgf8cJ6x%2FSo4i2cqI6H%2F89%2F5O5%2BCqzL9YI9PZv6RGXuojqjXXGTVYe%2FPTbwsPmQv4iE0EIxb%2Fl8K6%2FLXdHIcL%2BB5UIL1vqdW%2FGbl46nqxc8SDvjA3yIQyzQQk1vqsSdFsKfrTsDBMPfC%2FXaiW1r9mjiaAbylW%2BPXn7elsMf%2ByjVJeKurNe%2Fu9kkufhFM4t%2BpDYirthrRDrQu2vmqtaszUovRpLyh%2FKMxiDOSBtmJBUls4T9WX%2BOcxQZLPvRhjBGY42LSS3lnB6QVeWsuuV4fh%2Bk2YHAehBp1amZedYemLp%2Fq1PmJTmswJTdnuei%2BI7kND5yfOMeax9HFFEG055DCZsp89qmFeiiB16mVpgfdDP7MLrH1sQGOqUBINXHDtS9gbkS4B7e7ylAMsYDBpuuz4AQA%2BsU4by%2B3IrOpgtXeOCauDR9g9YeCahcvvBb3d7i%2BlycOTmPszgdd7x2%2BnUCNIdds%2F3%2BNMP7g3JSXyoMEDbM1AV7OE3oc5C5tcdyX9NIZgY9PAGNcmw4VBgqqOexlvWOYPHZ3AUVNhCK4ieGbUSZbHbu808PJC0f0g%2FeH505nAB%2FcP24gDCStKci0r%2BF&X-Amz-Signature=db2bd865977b6b3784e94d8327db127cc7f7014359d390165a6fdf04b20bfbf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRSM4OM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIGEOX%2BpuW90dWMZj5F2zjExb3b2VFOetrFtgBRxIAPehAiBKKOM9D%2B9GqwlHV%2B1HS6AbVz%2Fqju9KW90RrbaUID%2BxeyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwJunMky2sWqbho9GKtwD5XJMKfaAUTzkhHZgj4ha4LvemdbFA1urrEpX6IO0xX9iBFcFckhymtcUM2lgs3UQ1A51%2F5QP0rX1v7IlA8q0t2eprM5Jsx3bvMFXjvW0CgyCJZZE91XK2o5MulchL8p9cpqRMDNtm6IF%2Fh2YKfntPxzNl1KAxlnaIaV45EzWrBXcLf%2By7Qn6HrTulj%2BKezLcYciOWsKZntSWqjzOkYTSP4zRllzPQCN6r8FSvmMwV2vPbS60EeLeGUlN%2B3mA7V%2BrXslEUat4jtpqWuJBQcZcJxNh7fMaXR5oeTZE56i%2BkcatgH3W9OCbgpov6BIr0x1Vhmz1mZ95Aqdx%2Fz%2BP4SMMYLNCpRmKkdO0Fco6%2FwMEkB53xY81KQfzVkKYP%2FhedpF%2Brh058vF%2BoOnusur1lCxVSYQtYu7PRvahNUQhN%2BldgaUQOooZKP2uejU4nlBUKzwUqiRkyGXEJjI1GHzjQDeb7Wp5mzxCvIUSzoYKc4IZQWEe2DD5Yzt4kT1RpE%2FwxOzT7HM0FKTLPQOXAXa1rjcF0ue9LCBx%2FivVimX7xKHVZUtVz2Co8z7e54fN5Hwh0b9XzpVSsIR8mnXi3rLCduOq1kGLCxQSi3mOd0QMDvGpnPCxs2FDlf5T6ZTJXFcwuMfWxAY6pgGqgIqdStzCyG1tachIZfftf32vqjsKHTgNvOcbk%2Bhtw1DG5k6punaBQHOG7%2FRTlJwNVD3Bhv%2B6hlEYW%2FYPx4B029iLn2lR27bnElltVLvbIPAQVeETf%2FESRVwDEip%2FPJ9wG4GFqbThxD07SypJnVFvlephyl4YmHTLiHSeO1XQabnebBKadLClJNs1bK6C3a3gPXQbam9zmpWaCtsIJKx8nGz1%2F3Mn&X-Amz-Signature=d0901ffe8927f23e89d99d8546dc4b80897f74b15fd6368b34538088d3cb61c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P5GKQBJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIFAmLsnSlp%2F2BpM%2BVD8jofHMW4ofVNubZumFMDmwo%2FPTAiEA6nm7lwZWS5UwHEF5EHFXA4owiM0RklrFVHnqGxAt%2BXwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPb33iz28OnfaftEmSrcAzp8pLS40q3uSwCrDVUol3U55dtY0IYNeQXBUECZ4hUdM%2B4PLEj5yIefB6s0KKymh7lRw9G1v0%2FYZb8qRVIq9VoJOOFYtDGLvDtR8cqr4J6Ri09gyQRX0hwn0%2Bd%2FWvCSt6IbEzIhu9eylxe21bVi4Ml%2F385DabY4%2BRVcif8%2BrQT8jX%2Fo7qtCAN6xWGGk5t8UlFbARh%2FqXaRlycV08xToEp2fNa8Ycwtd%2FAafcYOV6fQlDvQf4dFbcAQzYo0qv09GSFakUHbwZSmWR8aXLWzaKepoXPDyZ8Ovz2%2FQuOk2F5Uu%2Fno%2FwCmNO3ZIuxQqyArrMukMjNLqN%2FodXibFM37uUbqDgx8JgF1s%2FAZT1HWkQQT4SCE3OY8FqVoqBzzedaJS6W6fdDRLK8UwwrItROMf77VqCTOioq%2BiJNYR8m%2F8Ke8nIL5KlfnaBjst9obl9BnrEjCg2%2BxfmsDTBG7LYT6KvkSxkGm23CHYSq0WA7ze%2FzTjoWyuaLiCE4lUCne0UkY2P4sqkWLCr0cp8kn2A1duvxFvI4B3iRV%2BsI6y3IwEJl2WoLJJyyF3jXjHfGcqtB9sWmd4lbW%2FIh5U8tfAXwDy5HF5xmJoIBAptsicfu3rZvz7jTE5g3oW8tQtTfUgMM%2FH1sQGOqUBRHPQZjSLIpktfSLwNi21%2FLXBJhkq7Zqrsaf1HdUrN5HcA9RyRv0htA2uDwl3VIlYRNN310Q8b9%2FT305wnluoJXy0NErDXjAaR52Lhp9TdR3qoDUzRIohWyBSLJdtZodG7hwvG%2FLAshsVyyYJj9T8h7UlanKB%2BQcj5V7oog39Fft7xTH7y5mLTusneilQ4OPewqZxUo377UX8x0Eo2EDxFACdev2j&X-Amz-Signature=3b36cf0bacca7483cb091f5366cecd71cef0ec927d839bc57f9f31eb1c8e3759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HAZ4Q4J%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIE%2BL8YxZZB%2FTApDSKimw3M1SnagsX95n7R5FAcZZfJqpAiAeLOqjEqgYVew2kErArPp3Cr2LvEHIijHbe%2FQZg2O35yqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa9i8XzdWMb%2F34DJmKtwDi3EtADQHI9O4aQHyJdIrBTHqghjABT15zScHYxvLqsRepDoL%2BAoPPYgi0ogf69NGftrMA5jUDYiWGCfoUTWtzrpIM8Pu%2BD6a5qUWE1NcNqo73i23XI8J3CEWvGb%2BkROIs5gT3IzDHLGkRaYhlqad4yylfNB9n3iM0EMTyPd%2BfQ3qRKUnpm0igGDsKnOfYcedOuJrUFD6THZaMljwDF3kMp0QHOVl%2BT%2F%2Fe%2FwNNvf%2BaO7H3PqDmW5CTzNYahKCZzAoMgdiRMKZj6%2Bjum%2BxViNo%2FCkbAfMjPA70QZm6VvvcI%2BgNc3IZywGsgBHQelmvTTJRgZ2B9x8lCf1d2DbUP6D5nfcG8bh9fXBV7zqqqOUfifFpQR55oNav8HzJSodywQ0qQ66aloXCJD5lYI34aIzDYdeEkrfJz%2FoV65qTq3SiCOQ7Q4rquTP5h5YbwSQoQS%2Bv9%2F2xwi%2BD3vRR%2Be%2F%2Fpk7NU%2Fm%2BmX%2BC%2Fh%2BtjD1juJxi5%2FG8nVXLbJLDjn%2Fauzvbm3ZrWntMIXS7byyODlZRuULmOlvhCUE8TwxAwCpb1RgjMQIfoDUTsAJSnIQfzf55va7PQJaniQoVJLE%2B4p0rd1ejTRIjHbQct2TOysm9ZQJmXT%2ByHamjQQCq0AlfMgIwisfWxAY6pgEe912Z84ISwwy4YCqWr6uubbo%2Bn7C0mPounFlQ8ZbKcnP9ksVCzFYulHHtgSQ8rothzUwWupgfqjC8ES2OWXMV9LSTZYa5r2vmsr15nYhYNJwRw4DCCdmvnbmhZwNi3Db4UcccHHyiwCIPxCtoT6goY1%2B7M8ucZX3edO1ZMtizS22V44fZsHFkMtpjgs0l0XCNMjfbUAFFA02FrUReclvazBOSx0EV&X-Amz-Signature=bdbb7bee210d3db6ff2f4c5d8e9216dee4ac6bf60f88fd3763b10566f4397abe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3XHJMF2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCXc6A9G7QEdS65%2BqxI%2FN4ytIjnP6Eh3Iaf2zjekeVlSwIgK06VvwuBUORNQWe%2Fn6wasofEf2XdrH3I5o4mkACY%2FncqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkx1jDWfzjjzSvjsCrcA4SP4%2FV5IuepFYQy92zmwAtGY7Y2YWngzWbTJozfxi4gzkxqBby1hyn5n86p8eKx26NPHMxFcwBEOsrY9wU6Lid%2FIEY5RukTWaVVo7h0zxi8raiZRjGzre6nWzSkITaRKnUwVwFBVB9EnLHTkbH2ZpfanNP3pqJUp65G7u8q9kxX1t0%2FY4re%2BwJkp%2FJUTz7CVsw68d%2BMqenIt3xFfTCQ60SHb7kQhpRpFNUxI08jXfM%2FKH%2FWQiL8UfflhJHUW%2FjnAB7bu%2Felv4Rf%2FkXWYd7es09J%2BGQN2iA847JR7qB0PlfHnX5uoj4lbbSb9mMpBXD84knIqSdBKUTnosdcokia0bux2fbv7AyqSyEXRi4JnkfrljLgZOBoZgqU7EAgiQ4XH94%2F3aN1MmcnfxpCh93phC%2FSWO%2F198D7sLPYnOOY%2BobcijOm15P8cx47BIOe26ygQTTIWWv%2BkUVf%2BnGHuqF7NbEEvwFDq2tbR4aQmCkNItZyCCWCwFmo3nZ1VfsF2WGUuxxN5tgLcPMyX69aVRxETNQsEQAMrxg%2B5i%2FPkHWhIuGtuRZiA3r21wq1GyBl%2BCZPG%2BpO%2F68velaBiRz063qmLqwrTALI%2BZRY10dk4Soezf7Tvl5PJsSinYZ2z9N%2BMOPG1sQGOqUBNr1GCCITHOjzhW8S8gAXlvJwRTJRKRRBmQHnsR0BZwGKUM%2Bc97Pq7qR4SB%2FoAkgmKfF8sX%2BkAbKyCBPFPdAvrmEthmD1tY0%2FpwVQlLpU7hpVvJ%2BGpEyHP35VrWZyzpCltDO18bQUoywU6IlMpAkuY8ilc8ouHsSJsOtM0mgqYTnvVsJ2GqsujfZ1zXmBxe70%2BU2RJ7JpVYX9ZrBeAId9U%2F2Ehj%2Fu&X-Amz-Signature=dc47029e810e6aebe31c2226397b7a4516e270f01acf940b1915e40ae327d2f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662233OLZY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDp5BoU1emxmY5Ek9wTWIkqqhLAMgY7AuM2fDQzmJs0dwIgF%2F8HJKnyyCreyfCZdv8PxvaJN2ctHYpk24zox3weHTYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8KzAJWtxiYtOiDGyrcA5upt60J5b0igVJpMYGP4MKNPFBxPVs6ooH3GkmCboKcVyFCVq%2BotYkIA4aLWE4XrZ26QCE44GruPdwCRj3N3xfCFy6VZWvWWBQLfZF%2BhHpj5odg74Dl53XpiYjYSYsg0oY46eY7a1k5BPRMuheJKCmpKtHRcKFyMptthzyznHqALwGFEJ9EGQsovhQHQS71wfANsEZ2e2JdAN%2FIjpgvjtW3C4jLqYWvL8SjVDSbvwXUeLeKcnxOiRtFt%2BRKu6NGxLR7yV%2FVha8WBNkK0Uy%2FgRs9CgoJhColT4nAyQjUsd9o7qdmzqJ6YCxBXzs3jSsMUZM1k9DissISDMSf8aiwqFjelR3ojLH6UGBAMEEXiLqJOGqd2URNmZ2Sai0V1cSXe8DyrLcvn3tK5O7V9acrrLtKgN7iRahSpQv0ZgdPAH8Sg6DxQj0QopAGjbJVGgvMIuYnrmHXvv4UjgeT4JcIBVJyAOjmHsUCgf47IuozkR6fuHS2bh3ZnFDFyqunOwgfMXfXfyEl8ph5xDsRuSPXOu7MDBrx10TIIxisb3rQ5AgPcAG%2F2d%2FupThKipwKi7myJxa3j%2B6cdeUYELFBwuId%2FmePNJd9Lw9RhwQM%2FqoqgRYX6Zz79Sl3Mj9hsSvXMLbH1sQGOqUBvHLPj0eczOquqBzKwXQawJjhwVCZxlNPPZ1oAsx11hAz8U6DzvAJ0anDzKFnSo7efdxRCluu37UWjfI6majM6rRFU%2B9V2cWxGOqcM965iLMqj2kgc7Gvf%2B48ZbbbX3%2F3NzODqrUFFjbWwkVemAQxZc3kM%2FQ7QKDFFvDMiAF1vbdoa9StsV7zO7lrqYfohYHKpKo2LKpQcQKsbm9fyJoFy9iJTSHn&X-Amz-Signature=9f0f62ab961fd7b759956133054102ca6cd90332e55fc012c28fa523fb1c351a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662233OLZY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDp5BoU1emxmY5Ek9wTWIkqqhLAMgY7AuM2fDQzmJs0dwIgF%2F8HJKnyyCreyfCZdv8PxvaJN2ctHYpk24zox3weHTYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8KzAJWtxiYtOiDGyrcA5upt60J5b0igVJpMYGP4MKNPFBxPVs6ooH3GkmCboKcVyFCVq%2BotYkIA4aLWE4XrZ26QCE44GruPdwCRj3N3xfCFy6VZWvWWBQLfZF%2BhHpj5odg74Dl53XpiYjYSYsg0oY46eY7a1k5BPRMuheJKCmpKtHRcKFyMptthzyznHqALwGFEJ9EGQsovhQHQS71wfANsEZ2e2JdAN%2FIjpgvjtW3C4jLqYWvL8SjVDSbvwXUeLeKcnxOiRtFt%2BRKu6NGxLR7yV%2FVha8WBNkK0Uy%2FgRs9CgoJhColT4nAyQjUsd9o7qdmzqJ6YCxBXzs3jSsMUZM1k9DissISDMSf8aiwqFjelR3ojLH6UGBAMEEXiLqJOGqd2URNmZ2Sai0V1cSXe8DyrLcvn3tK5O7V9acrrLtKgN7iRahSpQv0ZgdPAH8Sg6DxQj0QopAGjbJVGgvMIuYnrmHXvv4UjgeT4JcIBVJyAOjmHsUCgf47IuozkR6fuHS2bh3ZnFDFyqunOwgfMXfXfyEl8ph5xDsRuSPXOu7MDBrx10TIIxisb3rQ5AgPcAG%2F2d%2FupThKipwKi7myJxa3j%2B6cdeUYELFBwuId%2FmePNJd9Lw9RhwQM%2FqoqgRYX6Zz79Sl3Mj9hsSvXMLbH1sQGOqUBvHLPj0eczOquqBzKwXQawJjhwVCZxlNPPZ1oAsx11hAz8U6DzvAJ0anDzKFnSo7efdxRCluu37UWjfI6majM6rRFU%2B9V2cWxGOqcM965iLMqj2kgc7Gvf%2B48ZbbbX3%2F3NzODqrUFFjbWwkVemAQxZc3kM%2FQ7QKDFFvDMiAF1vbdoa9StsV7zO7lrqYfohYHKpKo2LKpQcQKsbm9fyJoFy9iJTSHn&X-Amz-Signature=c53d23c58735c8012220d02f760f729e8d5bb47c29a0c71f4bfa49cd25ee6b3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664RYT25E%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC4NGH308yjJyWk4ROKrAELTB5xADi8umlARP2hdYVPRQIhAK%2FshRaz0zEXn7Z46muRYt6kYlYlRNv39hEoY9yMWZCGKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYxODHY%2FxWXZCWW14q3AOOKpSII1%2FiAPeag8TSlBnjD665cVfkbNzVAOGP90jCh2EJ%2F4H5zs8vYdu069CFeVIFxNNu1z6Yd9ltvrqEvmmqbxz7QqafZnU38z9GFUZbOzzinDqtScZctwEY5cCRJCh9BRN7w7DfWHxiUvYlXiUwBeLyyV3bA2wAGyLPUv3Qdh4vFLUfRJRtL97pWB3rAPmWS3FnLj%2FEOdhm%2FJZ6raLtuyfOs8aT2CXLruhxeyAWIm6y4xoI1CGrUSSwk%2Bi9HJsqVARwipxveKJmhFhnVS6YAZEMsIAEblMAoaysi2qni66dk3M46WnUB6Xy%2B%2F9rZo2681PjaOnuK0cVCON2ej5LTeabU%2FoWmO5LV%2BQTR6jBmPYHWwy8Lrw6saF5Qkb2jf1y3Ug2iV2RWG0nXRCwvNRfPf6JMVyy8PaeI39ipoqQC1HY0bPKNFY%2B0T%2FCTnTxIFp1QiH5GjaoeBCk5W0yGN9fWJcahBl5giGXNErs%2FaGxv8E9TP5fjBJDcouZATEevFmAy%2BmSigoQe34QoTHE9jXenOVopaFEZ86hddwfl4rxLRfB3vrBc9Yrzm%2BOHvii5sZ8WXhZ4Gih%2F6T51WH2OCfl4bUvJ2LBb2CNFA5jxCTdht3rTaiEnyX4wkwtBzCLoNbEBjqkAcdImTuuc5I6olPfJNwS4BkX%2BvTCikfh8v0WsLb%2BkuRYCxkCIW1yjV1pGGcY3pHtaC%2FX50NbGfiD9UDFvZz6z6X0RHT9DH36UbdvBtPdGgiTocqtUDGbkoCZGOOiA97gYK8O5oBjxUO9jBGnzugnJrdbcMiK2O5qHsdlP7U2tTOuqz2gCRq9629Z4Q49wDPjFxljU34eKQJsARSe2KwB0a4XOo8T&X-Amz-Signature=c1237d2e7b7812a0ddc67adcae0add854c905206caa3d10f21982eb6bdd29ae5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664RYT25E%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC4NGH308yjJyWk4ROKrAELTB5xADi8umlARP2hdYVPRQIhAK%2FshRaz0zEXn7Z46muRYt6kYlYlRNv39hEoY9yMWZCGKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYxODHY%2FxWXZCWW14q3AOOKpSII1%2FiAPeag8TSlBnjD665cVfkbNzVAOGP90jCh2EJ%2F4H5zs8vYdu069CFeVIFxNNu1z6Yd9ltvrqEvmmqbxz7QqafZnU38z9GFUZbOzzinDqtScZctwEY5cCRJCh9BRN7w7DfWHxiUvYlXiUwBeLyyV3bA2wAGyLPUv3Qdh4vFLUfRJRtL97pWB3rAPmWS3FnLj%2FEOdhm%2FJZ6raLtuyfOs8aT2CXLruhxeyAWIm6y4xoI1CGrUSSwk%2Bi9HJsqVARwipxveKJmhFhnVS6YAZEMsIAEblMAoaysi2qni66dk3M46WnUB6Xy%2B%2F9rZo2681PjaOnuK0cVCON2ej5LTeabU%2FoWmO5LV%2BQTR6jBmPYHWwy8Lrw6saF5Qkb2jf1y3Ug2iV2RWG0nXRCwvNRfPf6JMVyy8PaeI39ipoqQC1HY0bPKNFY%2B0T%2FCTnTxIFp1QiH5GjaoeBCk5W0yGN9fWJcahBl5giGXNErs%2FaGxv8E9TP5fjBJDcouZATEevFmAy%2BmSigoQe34QoTHE9jXenOVopaFEZ86hddwfl4rxLRfB3vrBc9Yrzm%2BOHvii5sZ8WXhZ4Gih%2F6T51WH2OCfl4bUvJ2LBb2CNFA5jxCTdht3rTaiEnyX4wkwtBzCLoNbEBjqkAcdImTuuc5I6olPfJNwS4BkX%2BvTCikfh8v0WsLb%2BkuRYCxkCIW1yjV1pGGcY3pHtaC%2FX50NbGfiD9UDFvZz6z6X0RHT9DH36UbdvBtPdGgiTocqtUDGbkoCZGOOiA97gYK8O5oBjxUO9jBGnzugnJrdbcMiK2O5qHsdlP7U2tTOuqz2gCRq9629Z4Q49wDPjFxljU34eKQJsARSe2KwB0a4XOo8T&X-Amz-Signature=fee3e1e0f3f5295ea3fc19a9a71efab82abc64fc43b5f7fb5eed355decf49c2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664RYT25E%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC4NGH308yjJyWk4ROKrAELTB5xADi8umlARP2hdYVPRQIhAK%2FshRaz0zEXn7Z46muRYt6kYlYlRNv39hEoY9yMWZCGKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYxODHY%2FxWXZCWW14q3AOOKpSII1%2FiAPeag8TSlBnjD665cVfkbNzVAOGP90jCh2EJ%2F4H5zs8vYdu069CFeVIFxNNu1z6Yd9ltvrqEvmmqbxz7QqafZnU38z9GFUZbOzzinDqtScZctwEY5cCRJCh9BRN7w7DfWHxiUvYlXiUwBeLyyV3bA2wAGyLPUv3Qdh4vFLUfRJRtL97pWB3rAPmWS3FnLj%2FEOdhm%2FJZ6raLtuyfOs8aT2CXLruhxeyAWIm6y4xoI1CGrUSSwk%2Bi9HJsqVARwipxveKJmhFhnVS6YAZEMsIAEblMAoaysi2qni66dk3M46WnUB6Xy%2B%2F9rZo2681PjaOnuK0cVCON2ej5LTeabU%2FoWmO5LV%2BQTR6jBmPYHWwy8Lrw6saF5Qkb2jf1y3Ug2iV2RWG0nXRCwvNRfPf6JMVyy8PaeI39ipoqQC1HY0bPKNFY%2B0T%2FCTnTxIFp1QiH5GjaoeBCk5W0yGN9fWJcahBl5giGXNErs%2FaGxv8E9TP5fjBJDcouZATEevFmAy%2BmSigoQe34QoTHE9jXenOVopaFEZ86hddwfl4rxLRfB3vrBc9Yrzm%2BOHvii5sZ8WXhZ4Gih%2F6T51WH2OCfl4bUvJ2LBb2CNFA5jxCTdht3rTaiEnyX4wkwtBzCLoNbEBjqkAcdImTuuc5I6olPfJNwS4BkX%2BvTCikfh8v0WsLb%2BkuRYCxkCIW1yjV1pGGcY3pHtaC%2FX50NbGfiD9UDFvZz6z6X0RHT9DH36UbdvBtPdGgiTocqtUDGbkoCZGOOiA97gYK8O5oBjxUO9jBGnzugnJrdbcMiK2O5qHsdlP7U2tTOuqz2gCRq9629Z4Q49wDPjFxljU34eKQJsARSe2KwB0a4XOo8T&X-Amz-Signature=fad385fdaa1cc3e53a7bf848eae5e6d613975f789dfe7e3f80ac0cc9f13b7aa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664RYT25E%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC4NGH308yjJyWk4ROKrAELTB5xADi8umlARP2hdYVPRQIhAK%2FshRaz0zEXn7Z46muRYt6kYlYlRNv39hEoY9yMWZCGKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYxODHY%2FxWXZCWW14q3AOOKpSII1%2FiAPeag8TSlBnjD665cVfkbNzVAOGP90jCh2EJ%2F4H5zs8vYdu069CFeVIFxNNu1z6Yd9ltvrqEvmmqbxz7QqafZnU38z9GFUZbOzzinDqtScZctwEY5cCRJCh9BRN7w7DfWHxiUvYlXiUwBeLyyV3bA2wAGyLPUv3Qdh4vFLUfRJRtL97pWB3rAPmWS3FnLj%2FEOdhm%2FJZ6raLtuyfOs8aT2CXLruhxeyAWIm6y4xoI1CGrUSSwk%2Bi9HJsqVARwipxveKJmhFhnVS6YAZEMsIAEblMAoaysi2qni66dk3M46WnUB6Xy%2B%2F9rZo2681PjaOnuK0cVCON2ej5LTeabU%2FoWmO5LV%2BQTR6jBmPYHWwy8Lrw6saF5Qkb2jf1y3Ug2iV2RWG0nXRCwvNRfPf6JMVyy8PaeI39ipoqQC1HY0bPKNFY%2B0T%2FCTnTxIFp1QiH5GjaoeBCk5W0yGN9fWJcahBl5giGXNErs%2FaGxv8E9TP5fjBJDcouZATEevFmAy%2BmSigoQe34QoTHE9jXenOVopaFEZ86hddwfl4rxLRfB3vrBc9Yrzm%2BOHvii5sZ8WXhZ4Gih%2F6T51WH2OCfl4bUvJ2LBb2CNFA5jxCTdht3rTaiEnyX4wkwtBzCLoNbEBjqkAcdImTuuc5I6olPfJNwS4BkX%2BvTCikfh8v0WsLb%2BkuRYCxkCIW1yjV1pGGcY3pHtaC%2FX50NbGfiD9UDFvZz6z6X0RHT9DH36UbdvBtPdGgiTocqtUDGbkoCZGOOiA97gYK8O5oBjxUO9jBGnzugnJrdbcMiK2O5qHsdlP7U2tTOuqz2gCRq9629Z4Q49wDPjFxljU34eKQJsARSe2KwB0a4XOo8T&X-Amz-Signature=f209a3fcca13dc96a09b40c04adb76298cba8f2e7ec7e429865801236257af6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664RYT25E%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC4NGH308yjJyWk4ROKrAELTB5xADi8umlARP2hdYVPRQIhAK%2FshRaz0zEXn7Z46muRYt6kYlYlRNv39hEoY9yMWZCGKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYxODHY%2FxWXZCWW14q3AOOKpSII1%2FiAPeag8TSlBnjD665cVfkbNzVAOGP90jCh2EJ%2F4H5zs8vYdu069CFeVIFxNNu1z6Yd9ltvrqEvmmqbxz7QqafZnU38z9GFUZbOzzinDqtScZctwEY5cCRJCh9BRN7w7DfWHxiUvYlXiUwBeLyyV3bA2wAGyLPUv3Qdh4vFLUfRJRtL97pWB3rAPmWS3FnLj%2FEOdhm%2FJZ6raLtuyfOs8aT2CXLruhxeyAWIm6y4xoI1CGrUSSwk%2Bi9HJsqVARwipxveKJmhFhnVS6YAZEMsIAEblMAoaysi2qni66dk3M46WnUB6Xy%2B%2F9rZo2681PjaOnuK0cVCON2ej5LTeabU%2FoWmO5LV%2BQTR6jBmPYHWwy8Lrw6saF5Qkb2jf1y3Ug2iV2RWG0nXRCwvNRfPf6JMVyy8PaeI39ipoqQC1HY0bPKNFY%2B0T%2FCTnTxIFp1QiH5GjaoeBCk5W0yGN9fWJcahBl5giGXNErs%2FaGxv8E9TP5fjBJDcouZATEevFmAy%2BmSigoQe34QoTHE9jXenOVopaFEZ86hddwfl4rxLRfB3vrBc9Yrzm%2BOHvii5sZ8WXhZ4Gih%2F6T51WH2OCfl4bUvJ2LBb2CNFA5jxCTdht3rTaiEnyX4wkwtBzCLoNbEBjqkAcdImTuuc5I6olPfJNwS4BkX%2BvTCikfh8v0WsLb%2BkuRYCxkCIW1yjV1pGGcY3pHtaC%2FX50NbGfiD9UDFvZz6z6X0RHT9DH36UbdvBtPdGgiTocqtUDGbkoCZGOOiA97gYK8O5oBjxUO9jBGnzugnJrdbcMiK2O5qHsdlP7U2tTOuqz2gCRq9629Z4Q49wDPjFxljU34eKQJsARSe2KwB0a4XOo8T&X-Amz-Signature=4cf1cb2ef1044bbadff5fd6186a872708feca846bda6d371091c5cc68933c068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664RYT25E%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC4NGH308yjJyWk4ROKrAELTB5xADi8umlARP2hdYVPRQIhAK%2FshRaz0zEXn7Z46muRYt6kYlYlRNv39hEoY9yMWZCGKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYxODHY%2FxWXZCWW14q3AOOKpSII1%2FiAPeag8TSlBnjD665cVfkbNzVAOGP90jCh2EJ%2F4H5zs8vYdu069CFeVIFxNNu1z6Yd9ltvrqEvmmqbxz7QqafZnU38z9GFUZbOzzinDqtScZctwEY5cCRJCh9BRN7w7DfWHxiUvYlXiUwBeLyyV3bA2wAGyLPUv3Qdh4vFLUfRJRtL97pWB3rAPmWS3FnLj%2FEOdhm%2FJZ6raLtuyfOs8aT2CXLruhxeyAWIm6y4xoI1CGrUSSwk%2Bi9HJsqVARwipxveKJmhFhnVS6YAZEMsIAEblMAoaysi2qni66dk3M46WnUB6Xy%2B%2F9rZo2681PjaOnuK0cVCON2ej5LTeabU%2FoWmO5LV%2BQTR6jBmPYHWwy8Lrw6saF5Qkb2jf1y3Ug2iV2RWG0nXRCwvNRfPf6JMVyy8PaeI39ipoqQC1HY0bPKNFY%2B0T%2FCTnTxIFp1QiH5GjaoeBCk5W0yGN9fWJcahBl5giGXNErs%2FaGxv8E9TP5fjBJDcouZATEevFmAy%2BmSigoQe34QoTHE9jXenOVopaFEZ86hddwfl4rxLRfB3vrBc9Yrzm%2BOHvii5sZ8WXhZ4Gih%2F6T51WH2OCfl4bUvJ2LBb2CNFA5jxCTdht3rTaiEnyX4wkwtBzCLoNbEBjqkAcdImTuuc5I6olPfJNwS4BkX%2BvTCikfh8v0WsLb%2BkuRYCxkCIW1yjV1pGGcY3pHtaC%2FX50NbGfiD9UDFvZz6z6X0RHT9DH36UbdvBtPdGgiTocqtUDGbkoCZGOOiA97gYK8O5oBjxUO9jBGnzugnJrdbcMiK2O5qHsdlP7U2tTOuqz2gCRq9629Z4Q49wDPjFxljU34eKQJsARSe2KwB0a4XOo8T&X-Amz-Signature=4506286bbcfd674d7631a3fd2512fa6d742c2f68af44d1f8aedf4b5498055fde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664RYT25E%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC4NGH308yjJyWk4ROKrAELTB5xADi8umlARP2hdYVPRQIhAK%2FshRaz0zEXn7Z46muRYt6kYlYlRNv39hEoY9yMWZCGKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYxODHY%2FxWXZCWW14q3AOOKpSII1%2FiAPeag8TSlBnjD665cVfkbNzVAOGP90jCh2EJ%2F4H5zs8vYdu069CFeVIFxNNu1z6Yd9ltvrqEvmmqbxz7QqafZnU38z9GFUZbOzzinDqtScZctwEY5cCRJCh9BRN7w7DfWHxiUvYlXiUwBeLyyV3bA2wAGyLPUv3Qdh4vFLUfRJRtL97pWB3rAPmWS3FnLj%2FEOdhm%2FJZ6raLtuyfOs8aT2CXLruhxeyAWIm6y4xoI1CGrUSSwk%2Bi9HJsqVARwipxveKJmhFhnVS6YAZEMsIAEblMAoaysi2qni66dk3M46WnUB6Xy%2B%2F9rZo2681PjaOnuK0cVCON2ej5LTeabU%2FoWmO5LV%2BQTR6jBmPYHWwy8Lrw6saF5Qkb2jf1y3Ug2iV2RWG0nXRCwvNRfPf6JMVyy8PaeI39ipoqQC1HY0bPKNFY%2B0T%2FCTnTxIFp1QiH5GjaoeBCk5W0yGN9fWJcahBl5giGXNErs%2FaGxv8E9TP5fjBJDcouZATEevFmAy%2BmSigoQe34QoTHE9jXenOVopaFEZ86hddwfl4rxLRfB3vrBc9Yrzm%2BOHvii5sZ8WXhZ4Gih%2F6T51WH2OCfl4bUvJ2LBb2CNFA5jxCTdht3rTaiEnyX4wkwtBzCLoNbEBjqkAcdImTuuc5I6olPfJNwS4BkX%2BvTCikfh8v0WsLb%2BkuRYCxkCIW1yjV1pGGcY3pHtaC%2FX50NbGfiD9UDFvZz6z6X0RHT9DH36UbdvBtPdGgiTocqtUDGbkoCZGOOiA97gYK8O5oBjxUO9jBGnzugnJrdbcMiK2O5qHsdlP7U2tTOuqz2gCRq9629Z4Q49wDPjFxljU34eKQJsARSe2KwB0a4XOo8T&X-Amz-Signature=fad385fdaa1cc3e53a7bf848eae5e6d613975f789dfe7e3f80ac0cc9f13b7aa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664RYT25E%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC4NGH308yjJyWk4ROKrAELTB5xADi8umlARP2hdYVPRQIhAK%2FshRaz0zEXn7Z46muRYt6kYlYlRNv39hEoY9yMWZCGKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYxODHY%2FxWXZCWW14q3AOOKpSII1%2FiAPeag8TSlBnjD665cVfkbNzVAOGP90jCh2EJ%2F4H5zs8vYdu069CFeVIFxNNu1z6Yd9ltvrqEvmmqbxz7QqafZnU38z9GFUZbOzzinDqtScZctwEY5cCRJCh9BRN7w7DfWHxiUvYlXiUwBeLyyV3bA2wAGyLPUv3Qdh4vFLUfRJRtL97pWB3rAPmWS3FnLj%2FEOdhm%2FJZ6raLtuyfOs8aT2CXLruhxeyAWIm6y4xoI1CGrUSSwk%2Bi9HJsqVARwipxveKJmhFhnVS6YAZEMsIAEblMAoaysi2qni66dk3M46WnUB6Xy%2B%2F9rZo2681PjaOnuK0cVCON2ej5LTeabU%2FoWmO5LV%2BQTR6jBmPYHWwy8Lrw6saF5Qkb2jf1y3Ug2iV2RWG0nXRCwvNRfPf6JMVyy8PaeI39ipoqQC1HY0bPKNFY%2B0T%2FCTnTxIFp1QiH5GjaoeBCk5W0yGN9fWJcahBl5giGXNErs%2FaGxv8E9TP5fjBJDcouZATEevFmAy%2BmSigoQe34QoTHE9jXenOVopaFEZ86hddwfl4rxLRfB3vrBc9Yrzm%2BOHvii5sZ8WXhZ4Gih%2F6T51WH2OCfl4bUvJ2LBb2CNFA5jxCTdht3rTaiEnyX4wkwtBzCLoNbEBjqkAcdImTuuc5I6olPfJNwS4BkX%2BvTCikfh8v0WsLb%2BkuRYCxkCIW1yjV1pGGcY3pHtaC%2FX50NbGfiD9UDFvZz6z6X0RHT9DH36UbdvBtPdGgiTocqtUDGbkoCZGOOiA97gYK8O5oBjxUO9jBGnzugnJrdbcMiK2O5qHsdlP7U2tTOuqz2gCRq9629Z4Q49wDPjFxljU34eKQJsARSe2KwB0a4XOo8T&X-Amz-Signature=fcae917ac14c60402282679ab03f05cbf1f221004b50480fc08a0d07318cdf65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664RYT25E%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC4NGH308yjJyWk4ROKrAELTB5xADi8umlARP2hdYVPRQIhAK%2FshRaz0zEXn7Z46muRYt6kYlYlRNv39hEoY9yMWZCGKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYxODHY%2FxWXZCWW14q3AOOKpSII1%2FiAPeag8TSlBnjD665cVfkbNzVAOGP90jCh2EJ%2F4H5zs8vYdu069CFeVIFxNNu1z6Yd9ltvrqEvmmqbxz7QqafZnU38z9GFUZbOzzinDqtScZctwEY5cCRJCh9BRN7w7DfWHxiUvYlXiUwBeLyyV3bA2wAGyLPUv3Qdh4vFLUfRJRtL97pWB3rAPmWS3FnLj%2FEOdhm%2FJZ6raLtuyfOs8aT2CXLruhxeyAWIm6y4xoI1CGrUSSwk%2Bi9HJsqVARwipxveKJmhFhnVS6YAZEMsIAEblMAoaysi2qni66dk3M46WnUB6Xy%2B%2F9rZo2681PjaOnuK0cVCON2ej5LTeabU%2FoWmO5LV%2BQTR6jBmPYHWwy8Lrw6saF5Qkb2jf1y3Ug2iV2RWG0nXRCwvNRfPf6JMVyy8PaeI39ipoqQC1HY0bPKNFY%2B0T%2FCTnTxIFp1QiH5GjaoeBCk5W0yGN9fWJcahBl5giGXNErs%2FaGxv8E9TP5fjBJDcouZATEevFmAy%2BmSigoQe34QoTHE9jXenOVopaFEZ86hddwfl4rxLRfB3vrBc9Yrzm%2BOHvii5sZ8WXhZ4Gih%2F6T51WH2OCfl4bUvJ2LBb2CNFA5jxCTdht3rTaiEnyX4wkwtBzCLoNbEBjqkAcdImTuuc5I6olPfJNwS4BkX%2BvTCikfh8v0WsLb%2BkuRYCxkCIW1yjV1pGGcY3pHtaC%2FX50NbGfiD9UDFvZz6z6X0RHT9DH36UbdvBtPdGgiTocqtUDGbkoCZGOOiA97gYK8O5oBjxUO9jBGnzugnJrdbcMiK2O5qHsdlP7U2tTOuqz2gCRq9629Z4Q49wDPjFxljU34eKQJsARSe2KwB0a4XOo8T&X-Amz-Signature=aed0724435cf5bcd51c69709e4abac8fe9f62d0e425e03ee4cb080950b434e1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664RYT25E%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC4NGH308yjJyWk4ROKrAELTB5xADi8umlARP2hdYVPRQIhAK%2FshRaz0zEXn7Z46muRYt6kYlYlRNv39hEoY9yMWZCGKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYxODHY%2FxWXZCWW14q3AOOKpSII1%2FiAPeag8TSlBnjD665cVfkbNzVAOGP90jCh2EJ%2F4H5zs8vYdu069CFeVIFxNNu1z6Yd9ltvrqEvmmqbxz7QqafZnU38z9GFUZbOzzinDqtScZctwEY5cCRJCh9BRN7w7DfWHxiUvYlXiUwBeLyyV3bA2wAGyLPUv3Qdh4vFLUfRJRtL97pWB3rAPmWS3FnLj%2FEOdhm%2FJZ6raLtuyfOs8aT2CXLruhxeyAWIm6y4xoI1CGrUSSwk%2Bi9HJsqVARwipxveKJmhFhnVS6YAZEMsIAEblMAoaysi2qni66dk3M46WnUB6Xy%2B%2F9rZo2681PjaOnuK0cVCON2ej5LTeabU%2FoWmO5LV%2BQTR6jBmPYHWwy8Lrw6saF5Qkb2jf1y3Ug2iV2RWG0nXRCwvNRfPf6JMVyy8PaeI39ipoqQC1HY0bPKNFY%2B0T%2FCTnTxIFp1QiH5GjaoeBCk5W0yGN9fWJcahBl5giGXNErs%2FaGxv8E9TP5fjBJDcouZATEevFmAy%2BmSigoQe34QoTHE9jXenOVopaFEZ86hddwfl4rxLRfB3vrBc9Yrzm%2BOHvii5sZ8WXhZ4Gih%2F6T51WH2OCfl4bUvJ2LBb2CNFA5jxCTdht3rTaiEnyX4wkwtBzCLoNbEBjqkAcdImTuuc5I6olPfJNwS4BkX%2BvTCikfh8v0WsLb%2BkuRYCxkCIW1yjV1pGGcY3pHtaC%2FX50NbGfiD9UDFvZz6z6X0RHT9DH36UbdvBtPdGgiTocqtUDGbkoCZGOOiA97gYK8O5oBjxUO9jBGnzugnJrdbcMiK2O5qHsdlP7U2tTOuqz2gCRq9629Z4Q49wDPjFxljU34eKQJsARSe2KwB0a4XOo8T&X-Amz-Signature=e952602a17b0d4e4af4e6809494fbc0ef9a0834fe953e2a60c5011d3ad8222e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
