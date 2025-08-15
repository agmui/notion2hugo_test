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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FYXKURP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCQkq4MavVue69wpWes5qe3Qd12QTjLUnr4Saq4csSFdwIgQafqVL8K0wao8mHfmobh11duwhi9HpVsxu%2FwHB9x1Akq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBHKSf9bPwdW7xBPISrcA3Zrfnofk6oKi1AWuwESHAl8ckXDC4J6H8AGbcT4JFSgnHatrPWp%2FNZYp0CRYEfFYW4ldcI%2BtxlRL7Pa3fk1WSG8CCG40Nj6ZExJeuc0MukgA8G6IT9%2FGvvY12hdMCmEy6rfSbhj%2Fhfo9aWgPdZHso1b8ioOmQfQO1WmcYqQdmLOdwJb%2BPVaW0FSFu1%2Fy1i0dh%2B0ZIfV2Kkpz3SAB0arq6KHKg%2BfWtaoTHktdtksDB55phr8oge1TExd%2FP1W3SgtdKEKqffozCe6E2FeE2NZvw0zPtE3OBIu8d2hK%2BJ9tPrgYA4WpOYQbXEYrk5ehvaEf0VOP4VZSQO5Ctb3pge1BvMy2%2BY3FFDKGubp2qFRQzQAVkcxT%2B9OZolBvf%2BhGFvsdH4iNRo7A%2F%2B7ntnXyfYFbNsO9m7rqbxEz3DXGWWeXtKyIzwWCkasghzXHqaO0QgkxTj9G8kxzK98E9KbSXHN%2F694SRudedxAlbOB1N5KT8YjK%2F%2BUyQBjaexAi0OeBihPaWbDgo1vytwKfn1VEN%2BWwpZub9r0dyeg7vYH2QRYjjGuh3fC5Uye1fdC3z242WzV3bMD7GvSfLEFXyKlIRv1rsJmPHMMd9JH%2FzEQ2YpOws2e82Z42Cg1dTub2lu1MLe1%2FcQGOqUBKVGBEJ3E1B5LTVYELUkVWHaTqggGlh7Ir0oZKeyvTD9Yx3%2FhON9j4OclET8RM2hpmmP2yP7OeUcM5IRBu3ucBPKUIz%2BRxX6fsfmon8zIA5D%2BMLsbuC3Xaxa3mLQClrN2NIJZG%2Fv%2BGZVqbwLZQHVnHlOdRQ%2BesM4Nlr7S0xbk4OVSDxHg5W14tAINqlAeLp3hgyQDQSld5xmwECvTDRWDkO6LIKnJ&X-Amz-Signature=06d26843f06408a05f6536daaf121241eff8fc31ef004e203791abb35570f57f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FYXKURP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCQkq4MavVue69wpWes5qe3Qd12QTjLUnr4Saq4csSFdwIgQafqVL8K0wao8mHfmobh11duwhi9HpVsxu%2FwHB9x1Akq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBHKSf9bPwdW7xBPISrcA3Zrfnofk6oKi1AWuwESHAl8ckXDC4J6H8AGbcT4JFSgnHatrPWp%2FNZYp0CRYEfFYW4ldcI%2BtxlRL7Pa3fk1WSG8CCG40Nj6ZExJeuc0MukgA8G6IT9%2FGvvY12hdMCmEy6rfSbhj%2Fhfo9aWgPdZHso1b8ioOmQfQO1WmcYqQdmLOdwJb%2BPVaW0FSFu1%2Fy1i0dh%2B0ZIfV2Kkpz3SAB0arq6KHKg%2BfWtaoTHktdtksDB55phr8oge1TExd%2FP1W3SgtdKEKqffozCe6E2FeE2NZvw0zPtE3OBIu8d2hK%2BJ9tPrgYA4WpOYQbXEYrk5ehvaEf0VOP4VZSQO5Ctb3pge1BvMy2%2BY3FFDKGubp2qFRQzQAVkcxT%2B9OZolBvf%2BhGFvsdH4iNRo7A%2F%2B7ntnXyfYFbNsO9m7rqbxEz3DXGWWeXtKyIzwWCkasghzXHqaO0QgkxTj9G8kxzK98E9KbSXHN%2F694SRudedxAlbOB1N5KT8YjK%2F%2BUyQBjaexAi0OeBihPaWbDgo1vytwKfn1VEN%2BWwpZub9r0dyeg7vYH2QRYjjGuh3fC5Uye1fdC3z242WzV3bMD7GvSfLEFXyKlIRv1rsJmPHMMd9JH%2FzEQ2YpOws2e82Z42Cg1dTub2lu1MLe1%2FcQGOqUBKVGBEJ3E1B5LTVYELUkVWHaTqggGlh7Ir0oZKeyvTD9Yx3%2FhON9j4OclET8RM2hpmmP2yP7OeUcM5IRBu3ucBPKUIz%2BRxX6fsfmon8zIA5D%2BMLsbuC3Xaxa3mLQClrN2NIJZG%2Fv%2BGZVqbwLZQHVnHlOdRQ%2BesM4Nlr7S0xbk4OVSDxHg5W14tAINqlAeLp3hgyQDQSld5xmwECvTDRWDkO6LIKnJ&X-Amz-Signature=fe74757d4736d2ffebbe2d9d859c62cf54c59d0669804f2c264fe16bf08bc1a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FYXKURP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCQkq4MavVue69wpWes5qe3Qd12QTjLUnr4Saq4csSFdwIgQafqVL8K0wao8mHfmobh11duwhi9HpVsxu%2FwHB9x1Akq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBHKSf9bPwdW7xBPISrcA3Zrfnofk6oKi1AWuwESHAl8ckXDC4J6H8AGbcT4JFSgnHatrPWp%2FNZYp0CRYEfFYW4ldcI%2BtxlRL7Pa3fk1WSG8CCG40Nj6ZExJeuc0MukgA8G6IT9%2FGvvY12hdMCmEy6rfSbhj%2Fhfo9aWgPdZHso1b8ioOmQfQO1WmcYqQdmLOdwJb%2BPVaW0FSFu1%2Fy1i0dh%2B0ZIfV2Kkpz3SAB0arq6KHKg%2BfWtaoTHktdtksDB55phr8oge1TExd%2FP1W3SgtdKEKqffozCe6E2FeE2NZvw0zPtE3OBIu8d2hK%2BJ9tPrgYA4WpOYQbXEYrk5ehvaEf0VOP4VZSQO5Ctb3pge1BvMy2%2BY3FFDKGubp2qFRQzQAVkcxT%2B9OZolBvf%2BhGFvsdH4iNRo7A%2F%2B7ntnXyfYFbNsO9m7rqbxEz3DXGWWeXtKyIzwWCkasghzXHqaO0QgkxTj9G8kxzK98E9KbSXHN%2F694SRudedxAlbOB1N5KT8YjK%2F%2BUyQBjaexAi0OeBihPaWbDgo1vytwKfn1VEN%2BWwpZub9r0dyeg7vYH2QRYjjGuh3fC5Uye1fdC3z242WzV3bMD7GvSfLEFXyKlIRv1rsJmPHMMd9JH%2FzEQ2YpOws2e82Z42Cg1dTub2lu1MLe1%2FcQGOqUBKVGBEJ3E1B5LTVYELUkVWHaTqggGlh7Ir0oZKeyvTD9Yx3%2FhON9j4OclET8RM2hpmmP2yP7OeUcM5IRBu3ucBPKUIz%2BRxX6fsfmon8zIA5D%2BMLsbuC3Xaxa3mLQClrN2NIJZG%2Fv%2BGZVqbwLZQHVnHlOdRQ%2BesM4Nlr7S0xbk4OVSDxHg5W14tAINqlAeLp3hgyQDQSld5xmwECvTDRWDkO6LIKnJ&X-Amz-Signature=9ae68089a36c30c307129e0f93ced110a4b22ecc760730487a372d7f84e82ea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FYXKURP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCQkq4MavVue69wpWes5qe3Qd12QTjLUnr4Saq4csSFdwIgQafqVL8K0wao8mHfmobh11duwhi9HpVsxu%2FwHB9x1Akq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBHKSf9bPwdW7xBPISrcA3Zrfnofk6oKi1AWuwESHAl8ckXDC4J6H8AGbcT4JFSgnHatrPWp%2FNZYp0CRYEfFYW4ldcI%2BtxlRL7Pa3fk1WSG8CCG40Nj6ZExJeuc0MukgA8G6IT9%2FGvvY12hdMCmEy6rfSbhj%2Fhfo9aWgPdZHso1b8ioOmQfQO1WmcYqQdmLOdwJb%2BPVaW0FSFu1%2Fy1i0dh%2B0ZIfV2Kkpz3SAB0arq6KHKg%2BfWtaoTHktdtksDB55phr8oge1TExd%2FP1W3SgtdKEKqffozCe6E2FeE2NZvw0zPtE3OBIu8d2hK%2BJ9tPrgYA4WpOYQbXEYrk5ehvaEf0VOP4VZSQO5Ctb3pge1BvMy2%2BY3FFDKGubp2qFRQzQAVkcxT%2B9OZolBvf%2BhGFvsdH4iNRo7A%2F%2B7ntnXyfYFbNsO9m7rqbxEz3DXGWWeXtKyIzwWCkasghzXHqaO0QgkxTj9G8kxzK98E9KbSXHN%2F694SRudedxAlbOB1N5KT8YjK%2F%2BUyQBjaexAi0OeBihPaWbDgo1vytwKfn1VEN%2BWwpZub9r0dyeg7vYH2QRYjjGuh3fC5Uye1fdC3z242WzV3bMD7GvSfLEFXyKlIRv1rsJmPHMMd9JH%2FzEQ2YpOws2e82Z42Cg1dTub2lu1MLe1%2FcQGOqUBKVGBEJ3E1B5LTVYELUkVWHaTqggGlh7Ir0oZKeyvTD9Yx3%2FhON9j4OclET8RM2hpmmP2yP7OeUcM5IRBu3ucBPKUIz%2BRxX6fsfmon8zIA5D%2BMLsbuC3Xaxa3mLQClrN2NIJZG%2Fv%2BGZVqbwLZQHVnHlOdRQ%2BesM4Nlr7S0xbk4OVSDxHg5W14tAINqlAeLp3hgyQDQSld5xmwECvTDRWDkO6LIKnJ&X-Amz-Signature=2770aba70d1b2b82ac56c8294a586a41d68d5393b6b094ac3965136e9feff055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FYXKURP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCQkq4MavVue69wpWes5qe3Qd12QTjLUnr4Saq4csSFdwIgQafqVL8K0wao8mHfmobh11duwhi9HpVsxu%2FwHB9x1Akq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBHKSf9bPwdW7xBPISrcA3Zrfnofk6oKi1AWuwESHAl8ckXDC4J6H8AGbcT4JFSgnHatrPWp%2FNZYp0CRYEfFYW4ldcI%2BtxlRL7Pa3fk1WSG8CCG40Nj6ZExJeuc0MukgA8G6IT9%2FGvvY12hdMCmEy6rfSbhj%2Fhfo9aWgPdZHso1b8ioOmQfQO1WmcYqQdmLOdwJb%2BPVaW0FSFu1%2Fy1i0dh%2B0ZIfV2Kkpz3SAB0arq6KHKg%2BfWtaoTHktdtksDB55phr8oge1TExd%2FP1W3SgtdKEKqffozCe6E2FeE2NZvw0zPtE3OBIu8d2hK%2BJ9tPrgYA4WpOYQbXEYrk5ehvaEf0VOP4VZSQO5Ctb3pge1BvMy2%2BY3FFDKGubp2qFRQzQAVkcxT%2B9OZolBvf%2BhGFvsdH4iNRo7A%2F%2B7ntnXyfYFbNsO9m7rqbxEz3DXGWWeXtKyIzwWCkasghzXHqaO0QgkxTj9G8kxzK98E9KbSXHN%2F694SRudedxAlbOB1N5KT8YjK%2F%2BUyQBjaexAi0OeBihPaWbDgo1vytwKfn1VEN%2BWwpZub9r0dyeg7vYH2QRYjjGuh3fC5Uye1fdC3z242WzV3bMD7GvSfLEFXyKlIRv1rsJmPHMMd9JH%2FzEQ2YpOws2e82Z42Cg1dTub2lu1MLe1%2FcQGOqUBKVGBEJ3E1B5LTVYELUkVWHaTqggGlh7Ir0oZKeyvTD9Yx3%2FhON9j4OclET8RM2hpmmP2yP7OeUcM5IRBu3ucBPKUIz%2BRxX6fsfmon8zIA5D%2BMLsbuC3Xaxa3mLQClrN2NIJZG%2Fv%2BGZVqbwLZQHVnHlOdRQ%2BesM4Nlr7S0xbk4OVSDxHg5W14tAINqlAeLp3hgyQDQSld5xmwECvTDRWDkO6LIKnJ&X-Amz-Signature=a29f5b656f6c6176fbb1317ea088b8f116bdf003f3f47f45dc57764b2b692c9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FYXKURP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCQkq4MavVue69wpWes5qe3Qd12QTjLUnr4Saq4csSFdwIgQafqVL8K0wao8mHfmobh11duwhi9HpVsxu%2FwHB9x1Akq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBHKSf9bPwdW7xBPISrcA3Zrfnofk6oKi1AWuwESHAl8ckXDC4J6H8AGbcT4JFSgnHatrPWp%2FNZYp0CRYEfFYW4ldcI%2BtxlRL7Pa3fk1WSG8CCG40Nj6ZExJeuc0MukgA8G6IT9%2FGvvY12hdMCmEy6rfSbhj%2Fhfo9aWgPdZHso1b8ioOmQfQO1WmcYqQdmLOdwJb%2BPVaW0FSFu1%2Fy1i0dh%2B0ZIfV2Kkpz3SAB0arq6KHKg%2BfWtaoTHktdtksDB55phr8oge1TExd%2FP1W3SgtdKEKqffozCe6E2FeE2NZvw0zPtE3OBIu8d2hK%2BJ9tPrgYA4WpOYQbXEYrk5ehvaEf0VOP4VZSQO5Ctb3pge1BvMy2%2BY3FFDKGubp2qFRQzQAVkcxT%2B9OZolBvf%2BhGFvsdH4iNRo7A%2F%2B7ntnXyfYFbNsO9m7rqbxEz3DXGWWeXtKyIzwWCkasghzXHqaO0QgkxTj9G8kxzK98E9KbSXHN%2F694SRudedxAlbOB1N5KT8YjK%2F%2BUyQBjaexAi0OeBihPaWbDgo1vytwKfn1VEN%2BWwpZub9r0dyeg7vYH2QRYjjGuh3fC5Uye1fdC3z242WzV3bMD7GvSfLEFXyKlIRv1rsJmPHMMd9JH%2FzEQ2YpOws2e82Z42Cg1dTub2lu1MLe1%2FcQGOqUBKVGBEJ3E1B5LTVYELUkVWHaTqggGlh7Ir0oZKeyvTD9Yx3%2FhON9j4OclET8RM2hpmmP2yP7OeUcM5IRBu3ucBPKUIz%2BRxX6fsfmon8zIA5D%2BMLsbuC3Xaxa3mLQClrN2NIJZG%2Fv%2BGZVqbwLZQHVnHlOdRQ%2BesM4Nlr7S0xbk4OVSDxHg5W14tAINqlAeLp3hgyQDQSld5xmwECvTDRWDkO6LIKnJ&X-Amz-Signature=32cff9e2386de105c50d794168371247a88cb6d1bb109a8355017ed1936c224e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FYXKURP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCQkq4MavVue69wpWes5qe3Qd12QTjLUnr4Saq4csSFdwIgQafqVL8K0wao8mHfmobh11duwhi9HpVsxu%2FwHB9x1Akq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBHKSf9bPwdW7xBPISrcA3Zrfnofk6oKi1AWuwESHAl8ckXDC4J6H8AGbcT4JFSgnHatrPWp%2FNZYp0CRYEfFYW4ldcI%2BtxlRL7Pa3fk1WSG8CCG40Nj6ZExJeuc0MukgA8G6IT9%2FGvvY12hdMCmEy6rfSbhj%2Fhfo9aWgPdZHso1b8ioOmQfQO1WmcYqQdmLOdwJb%2BPVaW0FSFu1%2Fy1i0dh%2B0ZIfV2Kkpz3SAB0arq6KHKg%2BfWtaoTHktdtksDB55phr8oge1TExd%2FP1W3SgtdKEKqffozCe6E2FeE2NZvw0zPtE3OBIu8d2hK%2BJ9tPrgYA4WpOYQbXEYrk5ehvaEf0VOP4VZSQO5Ctb3pge1BvMy2%2BY3FFDKGubp2qFRQzQAVkcxT%2B9OZolBvf%2BhGFvsdH4iNRo7A%2F%2B7ntnXyfYFbNsO9m7rqbxEz3DXGWWeXtKyIzwWCkasghzXHqaO0QgkxTj9G8kxzK98E9KbSXHN%2F694SRudedxAlbOB1N5KT8YjK%2F%2BUyQBjaexAi0OeBihPaWbDgo1vytwKfn1VEN%2BWwpZub9r0dyeg7vYH2QRYjjGuh3fC5Uye1fdC3z242WzV3bMD7GvSfLEFXyKlIRv1rsJmPHMMd9JH%2FzEQ2YpOws2e82Z42Cg1dTub2lu1MLe1%2FcQGOqUBKVGBEJ3E1B5LTVYELUkVWHaTqggGlh7Ir0oZKeyvTD9Yx3%2FhON9j4OclET8RM2hpmmP2yP7OeUcM5IRBu3ucBPKUIz%2BRxX6fsfmon8zIA5D%2BMLsbuC3Xaxa3mLQClrN2NIJZG%2Fv%2BGZVqbwLZQHVnHlOdRQ%2BesM4Nlr7S0xbk4OVSDxHg5W14tAINqlAeLp3hgyQDQSld5xmwECvTDRWDkO6LIKnJ&X-Amz-Signature=27c3fec901298de9996bafca7ac542f85ceca7c524dac69e705c5163b08c153f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FYXKURP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCQkq4MavVue69wpWes5qe3Qd12QTjLUnr4Saq4csSFdwIgQafqVL8K0wao8mHfmobh11duwhi9HpVsxu%2FwHB9x1Akq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBHKSf9bPwdW7xBPISrcA3Zrfnofk6oKi1AWuwESHAl8ckXDC4J6H8AGbcT4JFSgnHatrPWp%2FNZYp0CRYEfFYW4ldcI%2BtxlRL7Pa3fk1WSG8CCG40Nj6ZExJeuc0MukgA8G6IT9%2FGvvY12hdMCmEy6rfSbhj%2Fhfo9aWgPdZHso1b8ioOmQfQO1WmcYqQdmLOdwJb%2BPVaW0FSFu1%2Fy1i0dh%2B0ZIfV2Kkpz3SAB0arq6KHKg%2BfWtaoTHktdtksDB55phr8oge1TExd%2FP1W3SgtdKEKqffozCe6E2FeE2NZvw0zPtE3OBIu8d2hK%2BJ9tPrgYA4WpOYQbXEYrk5ehvaEf0VOP4VZSQO5Ctb3pge1BvMy2%2BY3FFDKGubp2qFRQzQAVkcxT%2B9OZolBvf%2BhGFvsdH4iNRo7A%2F%2B7ntnXyfYFbNsO9m7rqbxEz3DXGWWeXtKyIzwWCkasghzXHqaO0QgkxTj9G8kxzK98E9KbSXHN%2F694SRudedxAlbOB1N5KT8YjK%2F%2BUyQBjaexAi0OeBihPaWbDgo1vytwKfn1VEN%2BWwpZub9r0dyeg7vYH2QRYjjGuh3fC5Uye1fdC3z242WzV3bMD7GvSfLEFXyKlIRv1rsJmPHMMd9JH%2FzEQ2YpOws2e82Z42Cg1dTub2lu1MLe1%2FcQGOqUBKVGBEJ3E1B5LTVYELUkVWHaTqggGlh7Ir0oZKeyvTD9Yx3%2FhON9j4OclET8RM2hpmmP2yP7OeUcM5IRBu3ucBPKUIz%2BRxX6fsfmon8zIA5D%2BMLsbuC3Xaxa3mLQClrN2NIJZG%2Fv%2BGZVqbwLZQHVnHlOdRQ%2BesM4Nlr7S0xbk4OVSDxHg5W14tAINqlAeLp3hgyQDQSld5xmwECvTDRWDkO6LIKnJ&X-Amz-Signature=eaef834de7840cf8cdab55d7fb8fc106f37b00d98f29227d7e6a632e06830753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FYXKURP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCQkq4MavVue69wpWes5qe3Qd12QTjLUnr4Saq4csSFdwIgQafqVL8K0wao8mHfmobh11duwhi9HpVsxu%2FwHB9x1Akq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBHKSf9bPwdW7xBPISrcA3Zrfnofk6oKi1AWuwESHAl8ckXDC4J6H8AGbcT4JFSgnHatrPWp%2FNZYp0CRYEfFYW4ldcI%2BtxlRL7Pa3fk1WSG8CCG40Nj6ZExJeuc0MukgA8G6IT9%2FGvvY12hdMCmEy6rfSbhj%2Fhfo9aWgPdZHso1b8ioOmQfQO1WmcYqQdmLOdwJb%2BPVaW0FSFu1%2Fy1i0dh%2B0ZIfV2Kkpz3SAB0arq6KHKg%2BfWtaoTHktdtksDB55phr8oge1TExd%2FP1W3SgtdKEKqffozCe6E2FeE2NZvw0zPtE3OBIu8d2hK%2BJ9tPrgYA4WpOYQbXEYrk5ehvaEf0VOP4VZSQO5Ctb3pge1BvMy2%2BY3FFDKGubp2qFRQzQAVkcxT%2B9OZolBvf%2BhGFvsdH4iNRo7A%2F%2B7ntnXyfYFbNsO9m7rqbxEz3DXGWWeXtKyIzwWCkasghzXHqaO0QgkxTj9G8kxzK98E9KbSXHN%2F694SRudedxAlbOB1N5KT8YjK%2F%2BUyQBjaexAi0OeBihPaWbDgo1vytwKfn1VEN%2BWwpZub9r0dyeg7vYH2QRYjjGuh3fC5Uye1fdC3z242WzV3bMD7GvSfLEFXyKlIRv1rsJmPHMMd9JH%2FzEQ2YpOws2e82Z42Cg1dTub2lu1MLe1%2FcQGOqUBKVGBEJ3E1B5LTVYELUkVWHaTqggGlh7Ir0oZKeyvTD9Yx3%2FhON9j4OclET8RM2hpmmP2yP7OeUcM5IRBu3ucBPKUIz%2BRxX6fsfmon8zIA5D%2BMLsbuC3Xaxa3mLQClrN2NIJZG%2Fv%2BGZVqbwLZQHVnHlOdRQ%2BesM4Nlr7S0xbk4OVSDxHg5W14tAINqlAeLp3hgyQDQSld5xmwECvTDRWDkO6LIKnJ&X-Amz-Signature=ded76dda944ff8769f8a10a67ead101636b9e4daaea6a9158fb5e560a5246961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FYXKURP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCQkq4MavVue69wpWes5qe3Qd12QTjLUnr4Saq4csSFdwIgQafqVL8K0wao8mHfmobh11duwhi9HpVsxu%2FwHB9x1Akq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBHKSf9bPwdW7xBPISrcA3Zrfnofk6oKi1AWuwESHAl8ckXDC4J6H8AGbcT4JFSgnHatrPWp%2FNZYp0CRYEfFYW4ldcI%2BtxlRL7Pa3fk1WSG8CCG40Nj6ZExJeuc0MukgA8G6IT9%2FGvvY12hdMCmEy6rfSbhj%2Fhfo9aWgPdZHso1b8ioOmQfQO1WmcYqQdmLOdwJb%2BPVaW0FSFu1%2Fy1i0dh%2B0ZIfV2Kkpz3SAB0arq6KHKg%2BfWtaoTHktdtksDB55phr8oge1TExd%2FP1W3SgtdKEKqffozCe6E2FeE2NZvw0zPtE3OBIu8d2hK%2BJ9tPrgYA4WpOYQbXEYrk5ehvaEf0VOP4VZSQO5Ctb3pge1BvMy2%2BY3FFDKGubp2qFRQzQAVkcxT%2B9OZolBvf%2BhGFvsdH4iNRo7A%2F%2B7ntnXyfYFbNsO9m7rqbxEz3DXGWWeXtKyIzwWCkasghzXHqaO0QgkxTj9G8kxzK98E9KbSXHN%2F694SRudedxAlbOB1N5KT8YjK%2F%2BUyQBjaexAi0OeBihPaWbDgo1vytwKfn1VEN%2BWwpZub9r0dyeg7vYH2QRYjjGuh3fC5Uye1fdC3z242WzV3bMD7GvSfLEFXyKlIRv1rsJmPHMMd9JH%2FzEQ2YpOws2e82Z42Cg1dTub2lu1MLe1%2FcQGOqUBKVGBEJ3E1B5LTVYELUkVWHaTqggGlh7Ir0oZKeyvTD9Yx3%2FhON9j4OclET8RM2hpmmP2yP7OeUcM5IRBu3ucBPKUIz%2BRxX6fsfmon8zIA5D%2BMLsbuC3Xaxa3mLQClrN2NIJZG%2Fv%2BGZVqbwLZQHVnHlOdRQ%2BesM4Nlr7S0xbk4OVSDxHg5W14tAINqlAeLp3hgyQDQSld5xmwECvTDRWDkO6LIKnJ&X-Amz-Signature=e002af04085742add696b125c110a0748c78f78b6ba713b91cda478dc0df0d5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664POULTUE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDD%2FwqYiRkBsDMaWpA58d1MbRVjhSfCniV2y9cBeZnG9QIgBAR1WT2zek48E0i5hnUleknP6qwZazNgLTDjPyXhnpIq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDGaX%2FYL%2FDuTRbPr5nyrcAwbSxn8aGDxjHgC2Ungngj0DTLs%2FXG65246cOeMKQp1%2Fz34zfwQXqCZ3454NE4J7LP9NlhilHOZ2I%2BxBNN2xdqgb1zrzlFrRhBMcyOkUuiw4m6YmfoG5IXi7%2F5uNssWW6B%2BwFy2P5l8tVqLwumJgUGKLmCwHw5BnsPdcpp21lZZlrghID7rhs%2FYUzrQ20osLNoCHyZh3lmTwLbQqXNhiypgr%2F3%2Bked1X7p4qZKuipF0pZbtBU2bXBDoUbUaHOJjA7SYN43e0K6iy6WNazufcXG7AK%2FlY8jwTPLOG%2FnX5TU7%2BYryaV0I67%2FJquQMfy7lihs4ugirUImHmJm0EQvXao3BxW2MAOyPyUlQnaBpKfARHUHB08kHyLdvuBVwq6HQl3O6DAUoOKabg5h4jPS679r1yQVguhUDgd7W2r7uaifJmCgi3mSlebBAqA7ysVwNw5LsyPa%2FvMhSrfLD3cp%2BaUyzprpEuDf9rJRIc3sRtjpBze0wGCbEjZqIqthgmjsLvzlvRyGq2JdqKqKegRCeAND1zHOHadNrCLYcz5wqT%2B3SYV7kpGQZuB4KwNdY3qX1TiEFOADzwnvy5lKQKUUyugYnQa0KP7pzIamEgjUbViOh3%2B%2Fde2gifwB7233A%2FMI61%2FcQGOqUBxoZFABCv0s0UcmcrxedfO8iIglzB59x%2BWhRKoOxfMvRZmmcrseTV9Gbf3CeBtGi0yi43ui%2F%2B8zdGzCukpphWqAaTPbqBZzbl9Qe8Rb5UBHdmwGxbmwj3GvcnXIbOZlM7ZqCXVKplE5unNecrRIutKHp%2FtGU2dxUsIQYTaN3X%2Bb%2FUMNUAjSeWYv2x9cfHUfeFyOIgZOvvNaubSUGAZRK1WIRIn%2FdJ&X-Amz-Signature=aaa66a369c327a1b2b910bcd1ad00060aa400f2ad7d57080036348dc2e7b2780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJVEIBWA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCXZSSJjqBomuhEupdql5mw81UBbC5cz81GXCvjZ7gBawIhAPVz008rgMVvR3S5aHDcCouv2FdliqAzuzZeYrJ%2FWtTFKv8DCGEQABoMNjM3NDIzMTgzODA1IgxSVwUREV0MwjEmXo0q3AOlVldgDIkvqD4xYayEjQNGNh%2BJCk4iZvNoq60En8E1rkdjcSnQpkHbPaBnqAlOUWe3mv7mrQFWGf0WQWBmJbq%2FJsApqG6lH5AHWBGSZirIT%2FiEJY34AaD%2BzeYsZhAbaYCa7S0%2F30eJC%2B5f%2Fei6B%2F1oVep0N4gHAmqe1r8JQ8RTtARDbnoj0oqYW0DNQjqD1TxtsMzpv8%2FDvTTLyUdwKrfsnCQ08pPADA%2Fi8IlbbZzUTF%2FMsmYpSOyveSjWlX7M7EN9PaQe7Y740zKwZ7LVyY6z9cE%2BuA0rVypcviDH8wZ5apbPkFZXWN177QNfv7OWjFoywpCVrG5aP1qJ8g5BbbT4kVezrmhnaBoSv8Bj%2BBer3P95wlQxBB8xLOaHHTmbjQeLw4%2Bn62n14eTZmgg1D6B8V2v1Ixpw8A6QJUht3Zt1ZSSzWDgB9XnfL7sPgiRss6YA%2B1pTzQX7dn9ewk0hCtM7y9E4M8cuYpd2PZ2XJum7iO%2F2ysHtcLQhtpNCab7JYEzyBfO6Q91osjyf80Z1XC1dnSFwXoVvv0TaX%2FNsyx2mVcVlalxFm95r%2F0%2ByV81vxIKd7eMQrKipua%2BIqjcObB9OaoewPFrO7CQRGDeYJ1B%2F82fQPB1QtuMg%2FWm%2BvzCntf3EBjqkAfe6MDpu5dzfSfWDuLAQqGC0hw%2B9nFpPrZ7hyTY8yPYmjWr7C6bnlfQbBBhMbcbM6v28bQredsBppZgHQTYevwLjTaSflygBCzuaNqoSzHGGjxlhXMSuL1mDHjG3h8ag06HA%2BPbc%2BwwNWei8EzncOoWY0JRxjo1FAikIkYjmbvv00WTypJ8EXWbb9%2Fp57t%2B9Hq9KWe4gW7hQmq%2Fq2wqPvf7vofFh&X-Amz-Signature=8c656701e1feceeb9eba7f25ddbed1719a94e43666e22943c6918e56961319c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLWOX33K%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIHfzHyWqVtySE7%2BQi1866s4aJLCA9jFHO1d0kaobM07YAiBAblIR2NXBWp7nMTyqtcU6zL3g0kR7uNyC52GKTPo4Uir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMWgfWvuvCwJWOX6VIKtwDB%2Bah3hJoEh5Xmg0fUBCZCtoW7GHGUlmRFcDrefJf7fBC4bg5Coxqa9wrB4mVBCSxfaa74SMJPsbXHnpvTABpkLRPjQYlPRfw9taoUVi3yHP8tzetBmX%2B0BqtYih5fVW9Zo1hqC2MEAHO4eMCFOEzNdbKnpW8JF9x2MnHIA%2BKqSyryr9rgrp9dqxqTZp5GmnHqYlOF5540kJe%2F%2FMcbyYchWl70695yTBM8Ixtj0gOa6jmQku%2BmVKdJqRKdMjWM3mj48t4dLjuqCr1SEj9AVbWK%2BPjRfYVaM3rzIuvp61FY%2FNlhFKAj%2FF5F5KbJdOCDKtO6MHFfMt3IeesOcG8i73QMUZHP2Pau9RWMIJT6XjN4aqTvoeatsHI9U7%2B%2FLUoybaiK%2BW7GEKDz9NmU6YLSNk3d67%2FtdyXJr%2FCIaBR8Vh%2B%2Fd9khyn8kEgqixF548vxGw%2F0LXL8KAKYGp8FWoPAVgMYsJ%2F%2BAX7chXXdCEiVPfTx%2FRPqt83Py2dcoNC%2FF%2FOD6y2%2BCyS9IR461AxVY5LAotDCm2mAG3xypgnIKtjgjBG11YEcBachqQmN9Wb2x7rmlhLdrGOKF11zplZwtlfRlZxOX0Fels5870bEwNCabXqnF11BrOnxyU1hXaOkliow9LT9xAY6pgGeqsnkx0NKkL8RGWc%2BZ7IyLWlAHrLOPZGpqi5%2FdXl82RYNAIbyklFRlRj67quPK8btdWp%2B6nH8xphbPx5ddtlOp6Iz5mlYJLyogHK%2BChVqrnwxveUM96v83VmRMk189Cf1w7O18%2BqV4H%2FBM%2BxMaUqPjI4CVriXh2jWm1HNh4444OOumD89mV%2FTrtFPYXFkLnftlDo1GNZskGac7pe2VCCUOmVVjGn6&X-Amz-Signature=2c8df8d40abae029d21a5f4bd71270e444bc32d92fd83564f89565b77350de3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FYXKURP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCQkq4MavVue69wpWes5qe3Qd12QTjLUnr4Saq4csSFdwIgQafqVL8K0wao8mHfmobh11duwhi9HpVsxu%2FwHB9x1Akq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBHKSf9bPwdW7xBPISrcA3Zrfnofk6oKi1AWuwESHAl8ckXDC4J6H8AGbcT4JFSgnHatrPWp%2FNZYp0CRYEfFYW4ldcI%2BtxlRL7Pa3fk1WSG8CCG40Nj6ZExJeuc0MukgA8G6IT9%2FGvvY12hdMCmEy6rfSbhj%2Fhfo9aWgPdZHso1b8ioOmQfQO1WmcYqQdmLOdwJb%2BPVaW0FSFu1%2Fy1i0dh%2B0ZIfV2Kkpz3SAB0arq6KHKg%2BfWtaoTHktdtksDB55phr8oge1TExd%2FP1W3SgtdKEKqffozCe6E2FeE2NZvw0zPtE3OBIu8d2hK%2BJ9tPrgYA4WpOYQbXEYrk5ehvaEf0VOP4VZSQO5Ctb3pge1BvMy2%2BY3FFDKGubp2qFRQzQAVkcxT%2B9OZolBvf%2BhGFvsdH4iNRo7A%2F%2B7ntnXyfYFbNsO9m7rqbxEz3DXGWWeXtKyIzwWCkasghzXHqaO0QgkxTj9G8kxzK98E9KbSXHN%2F694SRudedxAlbOB1N5KT8YjK%2F%2BUyQBjaexAi0OeBihPaWbDgo1vytwKfn1VEN%2BWwpZub9r0dyeg7vYH2QRYjjGuh3fC5Uye1fdC3z242WzV3bMD7GvSfLEFXyKlIRv1rsJmPHMMd9JH%2FzEQ2YpOws2e82Z42Cg1dTub2lu1MLe1%2FcQGOqUBKVGBEJ3E1B5LTVYELUkVWHaTqggGlh7Ir0oZKeyvTD9Yx3%2FhON9j4OclET8RM2hpmmP2yP7OeUcM5IRBu3ucBPKUIz%2BRxX6fsfmon8zIA5D%2BMLsbuC3Xaxa3mLQClrN2NIJZG%2Fv%2BGZVqbwLZQHVnHlOdRQ%2BesM4Nlr7S0xbk4OVSDxHg5W14tAINqlAeLp3hgyQDQSld5xmwECvTDRWDkO6LIKnJ&X-Amz-Signature=a7ff06d6a1a5f17b7c4502a3b69642049c7023d84efd51f1f8334f81222b9e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4K567GC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIE5DS%2B8Z0tNAg5j6lXGKRqYXi%2FlXSUPg8tEO4MSibD3eAiEAlgfixZ6FQnr84Zg%2F3Yfz%2BVjdsZpAh24ppy7Rl776dVQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJOq8ejpiHZp0UcF0SrcA7rZ%2Fw7bKzCgybV0QNSPbY3dbOgUdO53HzbS7bRzyG1Afi02bvQ1Z3lSIw9oI5gCA89KaJZhiEESPbMwA66iqYSAvHzM1MObXQLnIyacdZzQIvnJ6ya9CrnliWNTcSRf8i3s0OZme7P5cmN69H%2B08P8fojmPPYpgV3rluNlT3%2BBzD2ZvF1DizxmQ7qc3H5a88UU2EcszGWXhaRkKBSpu5rnGyyLBMCDf3se8ofe9ub2sqlWtfZq5mzJAizmy5hz67W4RLJfqACbUTsZ92wrFAyxepxcs32soBxY2%2F8MVdjI8l821y4BA73WHzkWGpwvcH7YwiJbkhUzWXNRtVGO4UxQjKvOEcuyzVxbPBLhEcAQSHdZl%2Ffhbv3v%2FkIG3DJ5OYTgTRbwVrsHvdBbMdtBQ6DwW3y6uvbiozihKyz5Zs9I4VSfDCuv1l3BjGjc6M7WCNBLhIG%2FZhxcXwJB1%2FaM%2BVhhFVys2kuNiws30cx0YYfQYTPwWkLsYid0WVTV3730ypi4xV9aeBFBiwrf7oVS2VNYwkufYN4kM3%2FHAkv5YUSA18hHZzi9fmMIvBb1Icyccuo4f3Dn2QP3Z4%2FM6QDq4VxKTrus6gx1Q3A5QVZ4lX%2BDJI4OG4Wt8OrFM6CkWMM20%2FcQGOqUByfIf%2BScLX50Ej6CKRyF63RVg%2BQRgOZpGYzyWwNnroW5fUMSRWteBHvToutfdx7QcrsLzwwBLX1eEPrWHnKRuCFvjxcb6dnGDvqd6DHatLoF2SVQT71ySXdhm7%2FEqgSPel3evpUaI3g7SFeI9Pbua2xhAgJVzwFxSWLWjH5gwgyTN5dqZULJ%2FqVK3cMW9nGE5AwFsty0I78p2T%2BLVgqPtG0QtdtCa&X-Amz-Signature=9f5e859276785081c577ab014160ad3e7117fd95b8e44e0723c616c665e3c34a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FYXKURP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCQkq4MavVue69wpWes5qe3Qd12QTjLUnr4Saq4csSFdwIgQafqVL8K0wao8mHfmobh11duwhi9HpVsxu%2FwHB9x1Akq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBHKSf9bPwdW7xBPISrcA3Zrfnofk6oKi1AWuwESHAl8ckXDC4J6H8AGbcT4JFSgnHatrPWp%2FNZYp0CRYEfFYW4ldcI%2BtxlRL7Pa3fk1WSG8CCG40Nj6ZExJeuc0MukgA8G6IT9%2FGvvY12hdMCmEy6rfSbhj%2Fhfo9aWgPdZHso1b8ioOmQfQO1WmcYqQdmLOdwJb%2BPVaW0FSFu1%2Fy1i0dh%2B0ZIfV2Kkpz3SAB0arq6KHKg%2BfWtaoTHktdtksDB55phr8oge1TExd%2FP1W3SgtdKEKqffozCe6E2FeE2NZvw0zPtE3OBIu8d2hK%2BJ9tPrgYA4WpOYQbXEYrk5ehvaEf0VOP4VZSQO5Ctb3pge1BvMy2%2BY3FFDKGubp2qFRQzQAVkcxT%2B9OZolBvf%2BhGFvsdH4iNRo7A%2F%2B7ntnXyfYFbNsO9m7rqbxEz3DXGWWeXtKyIzwWCkasghzXHqaO0QgkxTj9G8kxzK98E9KbSXHN%2F694SRudedxAlbOB1N5KT8YjK%2F%2BUyQBjaexAi0OeBihPaWbDgo1vytwKfn1VEN%2BWwpZub9r0dyeg7vYH2QRYjjGuh3fC5Uye1fdC3z242WzV3bMD7GvSfLEFXyKlIRv1rsJmPHMMd9JH%2FzEQ2YpOws2e82Z42Cg1dTub2lu1MLe1%2FcQGOqUBKVGBEJ3E1B5LTVYELUkVWHaTqggGlh7Ir0oZKeyvTD9Yx3%2FhON9j4OclET8RM2hpmmP2yP7OeUcM5IRBu3ucBPKUIz%2BRxX6fsfmon8zIA5D%2BMLsbuC3Xaxa3mLQClrN2NIJZG%2Fv%2BGZVqbwLZQHVnHlOdRQ%2BesM4Nlr7S0xbk4OVSDxHg5W14tAINqlAeLp3hgyQDQSld5xmwECvTDRWDkO6LIKnJ&X-Amz-Signature=a978112eafbf5b7345a1d81025935c213a19be660bec826f538b52946e45289e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KBWIPXA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCGfKkBrxGGDYr4sLqryjoFTkDmq0kL8%2Bp1LIj7%2FgyrYQIgbWDw42w7EdmWWvX8j%2BcFBn2jGfRTq5hN0cH7jxUIWooq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDE%2FGikm9Zlqb44bsjircAyOPz5ozJc3kmJ0M1IOXmCvf6HwozWr68WAl01r9xCgFHK0%2B1JvTG12y%2FA%2BHXmg%2B8Kf%2BSj5SnlfV6P0gyBmb6FcoZVlyEEltQ5y4WI36vFjhE9%2FTC1gzZZcb9WWBIu8uUWNGJ4SlsIMiglWNQD%2BV5cMEgsOTKEvxxtetryGDNa%2FjDvrRg%2Fzalifx3lkSLfUwLp8ZUK43e%2B2%2FxsEgDjL8twgkLx2C4xnpYO3Sia6KiAJk7L1Z79wINhOdwFFs4UkzdMTrWTqU0qCbVMlhAACRvJSsN6iKdpwkQuA0ZlzI27v74xpdl6yacb7kOEB%2Bmk%2BIE8KPkkz5hlnXaR04%2F1LG5QylfWc7GMtpO3QsAXPbD12CUaZ5s%2BlL4mWim4%2FftDuRw4NLPvag1Duq23p72Uh8eYCPhLC6Q1o9o0YA7saoEctErSSWNGMxB0ZMIm3l1mFsPKOjgki4S2QODcdr7caq%2BUKqg6CmiHA%2B%2B4v%2F2Nw3Bg5NoSrX%2FblDch22paN05%2FlinQhunFgpy0ngCB8wt83S3XExCaDSSnFToo3auxtrlaPMUcES0HLTa7%2Fp9YRCwVQP%2Brqj85FyalHINc3jUNvRhw5w9E6faHQsEwBrLkcKobMu3w7vAv%2FQ1VVQYBKvMNC1%2FcQGOqUBufAwYtMEFRguAppT%2F8ooRJUn0khmX4QDzDYy6mKfi3361%2FsxX%2BHKk5yWGwgOWaZapQxlYgy1iks2By%2Bd6%2FbCdcJkH%2FsU750Z9rkA8ZkzArmg%2BtBUBdAATOa8cRBS1%2FJM7uRl4QxG1JwNHu3sTLEgcSdKdRjVbJc6mwaAfs4BD6e3ZLR93iajA4zedO%2FZkVp0kINbUJ5aM3o5wyAbGKhyuNxkK4D9&X-Amz-Signature=e85149df2558199e9c748cf3ad56efaf0249ecf265b44c2b4d59ffcbfea7048d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FYXKURP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCQkq4MavVue69wpWes5qe3Qd12QTjLUnr4Saq4csSFdwIgQafqVL8K0wao8mHfmobh11duwhi9HpVsxu%2FwHB9x1Akq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBHKSf9bPwdW7xBPISrcA3Zrfnofk6oKi1AWuwESHAl8ckXDC4J6H8AGbcT4JFSgnHatrPWp%2FNZYp0CRYEfFYW4ldcI%2BtxlRL7Pa3fk1WSG8CCG40Nj6ZExJeuc0MukgA8G6IT9%2FGvvY12hdMCmEy6rfSbhj%2Fhfo9aWgPdZHso1b8ioOmQfQO1WmcYqQdmLOdwJb%2BPVaW0FSFu1%2Fy1i0dh%2B0ZIfV2Kkpz3SAB0arq6KHKg%2BfWtaoTHktdtksDB55phr8oge1TExd%2FP1W3SgtdKEKqffozCe6E2FeE2NZvw0zPtE3OBIu8d2hK%2BJ9tPrgYA4WpOYQbXEYrk5ehvaEf0VOP4VZSQO5Ctb3pge1BvMy2%2BY3FFDKGubp2qFRQzQAVkcxT%2B9OZolBvf%2BhGFvsdH4iNRo7A%2F%2B7ntnXyfYFbNsO9m7rqbxEz3DXGWWeXtKyIzwWCkasghzXHqaO0QgkxTj9G8kxzK98E9KbSXHN%2F694SRudedxAlbOB1N5KT8YjK%2F%2BUyQBjaexAi0OeBihPaWbDgo1vytwKfn1VEN%2BWwpZub9r0dyeg7vYH2QRYjjGuh3fC5Uye1fdC3z242WzV3bMD7GvSfLEFXyKlIRv1rsJmPHMMd9JH%2FzEQ2YpOws2e82Z42Cg1dTub2lu1MLe1%2FcQGOqUBKVGBEJ3E1B5LTVYELUkVWHaTqggGlh7Ir0oZKeyvTD9Yx3%2FhON9j4OclET8RM2hpmmP2yP7OeUcM5IRBu3ucBPKUIz%2BRxX6fsfmon8zIA5D%2BMLsbuC3Xaxa3mLQClrN2NIJZG%2Fv%2BGZVqbwLZQHVnHlOdRQ%2BesM4Nlr7S0xbk4OVSDxHg5W14tAINqlAeLp3hgyQDQSld5xmwECvTDRWDkO6LIKnJ&X-Amz-Signature=78dc7ebec448b79ee540ec8a0b632f60f6ca2ca49dd3a6b708d943f5540a4f22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BOT3BIT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIDmHBZofCbo2IPDP338JXmokFGbEV%2FR6GLnuBdiwzFDWAiEA%2FPArp5p7DWiA6yCFZ%2Bj0K5zikUkJRAyQBKCnMgWhy8Aq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDEMRI0zdyQYMZH9CiCrcA85WoEC%2B5Cv1th6XucktU94J2kcN4xlws3rvlmbE1TFbM9gmNilzclB6shthJx1%2Bao7d1OkXpd5xPX%2BN3Sq7XvmwGFnAACMmWIuC0NWOkrU9dCa6UeXT3bIly1ZWSFB1gT9UEoL9zI2bITQMa%2F06RFsRysnw8aL86l1pyo4LsHrdoCcMfv%2FpoK9C7M4RuhP3RPdsUSIP3vwYFxc3RJVc5x8%2BjbG554bgOsCAZPtlmXcwzur0476iFr7fIcvhOSYAcVgQzATc1rpuSJgrj8196GmosABA9xbqf5MZtTA6be%2BFFNVs%2Fa%2FiWNRnxAYg%2FQbH2NWmRM89yXQc2VyLzfMeRabkFkrGhXVqK080GJ%2FQZA3KdJnR8z2qFUMJBaPE7A7GlaQRKB65J9Yl17X%2FVFb8an8S09UzuLS5h5T4HYzTnXxtfluh7daiLuwq6H86SJoRw0ubLTYiMkC78UY9oRlBIEZFuXeUvt%2Bnj8aiqzwQQ6cYSIUONNGupGwxO9fomxPALR958STJZGjdL5JOtfMSNJTdckmC%2FfwXzvA5yqPk0IXbJ%2Fec7W0LEqUV%2FgU4JBrOmZlEPDRgPhOSDvk%2F1QVeqnZRqSxIb8yVfJjqkHnuXvBW5mumQx6qBZlsO9RZMMS0%2FcQGOqUBWAbtYGpYNNmuWGexKAej4XFvAtcjT8dR0GZSmehPuWbnUZfvuNTl90GFXgf%2B4G0I2yM5FzPCEEjD1Cp2K0RLFPA5mCNBFMezPm1LLXq7rYQQwl1fpwlo%2BCFsM9ngpfFvVSb3BKm95a6aLEly%2FvWybQvTRAI6ohS1OszEiF8aPOUPOsv2e9SO7sSlQXcn3QC5seNldAQAyas1LlwhG%2F7uB0Ip%2F%2BMv&X-Amz-Signature=e2788809c318d9bd7890ca8098a105ea01d3bf86d31b274987aa55e03cd8f529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FYXKURP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCQkq4MavVue69wpWes5qe3Qd12QTjLUnr4Saq4csSFdwIgQafqVL8K0wao8mHfmobh11duwhi9HpVsxu%2FwHB9x1Akq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBHKSf9bPwdW7xBPISrcA3Zrfnofk6oKi1AWuwESHAl8ckXDC4J6H8AGbcT4JFSgnHatrPWp%2FNZYp0CRYEfFYW4ldcI%2BtxlRL7Pa3fk1WSG8CCG40Nj6ZExJeuc0MukgA8G6IT9%2FGvvY12hdMCmEy6rfSbhj%2Fhfo9aWgPdZHso1b8ioOmQfQO1WmcYqQdmLOdwJb%2BPVaW0FSFu1%2Fy1i0dh%2B0ZIfV2Kkpz3SAB0arq6KHKg%2BfWtaoTHktdtksDB55phr8oge1TExd%2FP1W3SgtdKEKqffozCe6E2FeE2NZvw0zPtE3OBIu8d2hK%2BJ9tPrgYA4WpOYQbXEYrk5ehvaEf0VOP4VZSQO5Ctb3pge1BvMy2%2BY3FFDKGubp2qFRQzQAVkcxT%2B9OZolBvf%2BhGFvsdH4iNRo7A%2F%2B7ntnXyfYFbNsO9m7rqbxEz3DXGWWeXtKyIzwWCkasghzXHqaO0QgkxTj9G8kxzK98E9KbSXHN%2F694SRudedxAlbOB1N5KT8YjK%2F%2BUyQBjaexAi0OeBihPaWbDgo1vytwKfn1VEN%2BWwpZub9r0dyeg7vYH2QRYjjGuh3fC5Uye1fdC3z242WzV3bMD7GvSfLEFXyKlIRv1rsJmPHMMd9JH%2FzEQ2YpOws2e82Z42Cg1dTub2lu1MLe1%2FcQGOqUBKVGBEJ3E1B5LTVYELUkVWHaTqggGlh7Ir0oZKeyvTD9Yx3%2FhON9j4OclET8RM2hpmmP2yP7OeUcM5IRBu3ucBPKUIz%2BRxX6fsfmon8zIA5D%2BMLsbuC3Xaxa3mLQClrN2NIJZG%2Fv%2BGZVqbwLZQHVnHlOdRQ%2BesM4Nlr7S0xbk4OVSDxHg5W14tAINqlAeLp3hgyQDQSld5xmwECvTDRWDkO6LIKnJ&X-Amz-Signature=a178006101302b2e34e1f57e7714c7726f6d8be0b0bf4eb9cec7de83feabdb17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UARJUCKO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIHj5EIbzTyopBaTKrFzZAFQwST4KAbSwcwhpXWEBWxPsAiBLRB5rv54Amx%2FgqXx9d1CXkCbxMI5xvu3zcHx0AQajeCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMEAH1PoxRscd2kqdmKtwD3DvC7LcwYCaLh10GKGBoK%2Bdv0lTIQDaoNYQeygJZVf8akFSxwbIJcNdNvMv%2Fn9EkrqYGaYYmNJu5E4GVlM4oMV3TFTdWRouLkx%2BPc8DOI98ygtjJdVV46Ae%2Fup29jYyunb7Lw9jU454WVndHa1rpGJ%2FkUAQFGXt9gli6tb49FwdWVT5kY2uBjUOGebzJibsv9lVd%2FL3DQHp9LxD8uD5Gt98WxzrzCxGjmlL3YchM0JIuEuOdioz7g8kh74RjB75A07m1W11bNiY3bVAUW53f2hYTvznN0JU8RSWXV1aY5CsViKUA2I5QKXfZ4HGrROITowPp2i4xYacnZBotWN8aYSI%2F%2Bv0WsvpYwhOyMogPvfCmkuA0IWw5LCBQerKDkXZ0uOf9lV9JyM7MuCi3Hfdrt0%2BxemYWl7qjJkbG2BTPmccUWMM66WEVvaZazjjzAyOLasC3fHgGma6uO%2FnXf1lkMlY790uDG5gH%2FPfJOUDrYanX4osmbZW5SwyCO2IvbSaxhbhJvzCK2%2BtiBqZ7MAIK2D8Ggo7gKdvRw5NdzFTfk3BNDZ0OJtOV04Qg709v3Q8ToRsUlWEdQfxTwRfE%2BNiOCnEZhTF9L565BlcOsG0rMNhCwpbt9KkTEbnHYrcwvLT9xAY6pgEK5XDFYm582DbuJSy0CR9O5FBfJdM6wmaUYdWDdkuqCIK3hnIvUsghvOWMUqiAk4KStHrkS9C9SLrjWsupUXZTEGdk4Ev7hZE%2FeOf9zqOLcRmT3BwAx5O6FqAlD9AWKShLOu%2Br5Kx11%2B%2BRWGbB2idR8Jrww9EB5gA5PwwMvsudu42KHa6wZPW6tsoUubD2K9ptjfm3VreSMHaKwZ120aIlSu%2Fgh4Ab&X-Amz-Signature=f96358fb26d6e281eb101f00921dc85b964ced84bcceb9eb53fa4e590c58853d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAPQVGUA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIDgH8zRKK7Lhj3BYNoojdalbjS5YPrviTMn%2Fc0VCneEDAiEA26GpjbpmDlzaeSOZJRH0c3gvpwmhYzmTbIRs59sr250q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDboGcpl6YTdnH8klircA3%2BTJ%2Fmpn1u2iR3qLH5oyp%2FhxssMYpJbM78Dotq2uxdLjRFJpPWJZS6Q0x4gSQ70mkBI5TJLBP1aXXw1lyRrzMUAmFu%2FFCVyJlrU3AYBRuHwwpdhw80DozM1ZjtVI%2Fo%2FdMWQlX5CMcIqbPSPsPRW2rE9blzbxhJ5wUHqrzw5AESDsV3ulZfqFDAnJn5fwybW2uWQtv94jDBORdXBJ6Q0Dg%2BHghQiwbVAsIdsWbOjmiU882dkdYDI%2B%2Fn7kkz4h4XfbXylvpj1CBHZrW05ltPnFK%2FDjab5muabZUvqhnkoxGz3bRU%2B4LSjjDXtyybAFm8Hq%2F1LUklgeTkyR9k5n%2Bihexx1ScTa1uZdOilRcH2pPsPa1Q0m8uKKxVcEgccDLGoo8BOjMzra84795L6iQhJXUYjyyBHfzjrGmQcI7%2B2moU08BiBk9y6s17l0fSfSEsTE9x1xCYlZoEcVT72w%2F1x7zKrFPhl0mNylolZ7UNCsBlO2p5N7rchU7QBTfm4ukJzJg8JxH9%2FW5dbh5FxKxZwuqL59JMi4qCaSKxHqrnDGzU12wjyw4xYyuYQRpoDsdvaWG%2B%2BZRgjOQRCNW%2FosAYGNktt5pp6qX5KCse5pvq3oX%2FNyb2Joid%2F0EeU6PfbGMLK0%2FcQGOqUB6NBPFoUKEW4VpAyqE35zDmQOO7%2FQCtxC033TAiY%2BfXDPnhCq%2BeVUiFpdoRgbRvksiTTzoWV%2FkkWvh5eUmYS0scnyEYMo%2FgDU72AJSyY7NidHCy8uQ16TlxcIYLI7BwJDJAZT3QsrRhcSHVlaou5m0QVqB8PcTREJHlGnJxgKBY86YapmutBy%2BfwU8nBLqj9D5T1mvmvs7%2BQNA%2FUtt1laFBHFeUES&X-Amz-Signature=5f33c925fe5e244e8771652d4cfd59f86d93f481955cb10e622f5aba2021e3db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y6ABI2N%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQD0yFk2tK%2BDu%2BPuAzX2lQha8N9lK5YV2MU7JQCoY6%2BlCwIgYK83BKfUD%2Bw2%2BXFO8hx%2FKEKXRRVnsg%2B6%2B7gIC0h4mCwq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDFusZcmndVk1SnssWSrcA3a%2F%2FUe5kJTFnPmJPYwiNilqckR1pvoVJe8ljxE3PLAnIDMjSpDzZkk4KiMjPU3vVoNJ1PXT%2BGAASzIyOUbcSrD%2FOcOHITo3qE5GrWHPiNaq%2FWI3RBb6eNp%2FzB2mBknQc1UHDe22DwmnFAY9X7pYxpOycznQ78evRd2TIwRy4C2ZiHaa7XVH%2F6If0uPtppxRqIlp0qhC0eRE73uKBQfKbAfbVBi4wbGA%2FzYot1oVXY9cxAwMoWN8FLRjU9zh9ZHkAtcfcgnZgy43OEpinq1ehd05PiK1q9Tdea9MO9QnR9tV%2FVijK4sv7Lc4FQbAQJYwsYs19B4iH99cjkxsI9aDUOS7UlN4dVJqKkRR0ocKCUkh%2BesNNfto8H0IHfDi0SMVjpnnQ5qVwwImkiwaEDaITmv5Zr7UiWiU0g576RDwv8OdFIqoxKpVvVTCPmMUSdxs%2BBZ72f7rofxBxMJcm7w6CDz0P3Hu4KlQ67p%2FXH57oAMPiHHSuXxtXmrZrZgzPjEtlIiVnSbiA1eIQSqkPnmAHYQNBZm3r5uwl0WGgib%2BS4krdqljG5aVQ1lQGYLUr3nGt%2BzNVlcx4YmrL5gUdY7dr83uptoRnYaSlzH20LglKxOrwSjimuiX3OjiqZC3MNK0%2FcQGOqUBjdD8wGZfuL4en3y83Yj6o4RxBmI6NJ6saHOlxRBOG1bbOkspRqFHZRQJrPaljVBXLU7LtzTPfW6q2gt%2BK2LH4owfPJ08EQ5ExMUzP%2FC05PJ1osW4Zj%2Bb4nTmukOnFtYkxWDvW%2FTxSaQO52diYCI2HgvvQBj8ZZPG0tEzDmEAXLKEuUTxaXZ4orSu8NqH9wFCTQRddbU%2BmLQn6NTZads2D7MxK%2BJI&X-Amz-Signature=a92aee882ba02d50c9166a37abd416ea7869c41c73d33fb12e331832083851dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYV6LYY5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIEcpukmdVpNESaQC4Nw0HvX9Sx9aTQ3dEvSdKNII8GOjAiEAqo%2F9%2BDnCOj%2FU3HUYumzA9ICm49L5iYsXbtKIPrCLNgUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPq%2FLGCJ436TBJUXhyrcA649s9ak2LJCvkGcPPoLE0cVVUwYK5QyrgJ70w2lIlQKvx7fMZN2iMuj37eczXSECJO%2F1HbD9abhiNaPXcW9FONbwxsZ529%2FUt2ZE7fHmdjKIdVGhhMmc67zEGrchM5xqk8lEuT5SPUPSbmuqh13UWvRDZgzC%2BbJzqUgQxTgwXXsamk5f%2BuSFOxfpK6HC0UvIYgE1eWLP5lVql42fAo6hS5uydy8N33%2FLdHlRCAqkcGgyr6LDw3SOrIbquCcE7KjG41SLkd1IAcHJcyaAAKRLM%2F%2FG2C7pxOtXTCb7d1dK443IFjYVMCoQkSvnTX3rdI16b2sZgjW4V0ihWkF95XQJu4l%2BteTwVhbyg2Uy6BiivLKiGM0ezN9vCg4Jwe2V%2FVfylkBRd4sLNHNez2eEslFRFzwU6mRHHwTzSkLyz9RKQpIPUn7o4anl52folH9YK0JVVrIx7QoD9fd4j6%2FiYpvorkf5kBRJrEr2pxcXiZn%2Bvkj%2FGlX88k8ywRM91a3lhbiNffbnUlSErdCXceMQzgECQlg4C3YH8LqILAYKOGjrW7bDJ9ihuZU4RRB1NwHKun7ZDIrK70Fq9BgX%2F3t60Tx0b%2BdspUGa8QYY4VZB8DN0RLkpRiyarzrm9LlUJMBMMK1%2FcQGOqUBWs2XwdwEpvPkQgh6izU06D7frGUNtieDu4bSnXMjAII3sXsk1KBhZjU65RVHGTg0S8Nwe2r5mcMk3eZ3Hk9%2Bh0ZtfYPYfdG4ryPRIgML%2BSRtp%2FdvUsj6zqdcdsZDFxLE%2FETFGh8hQ6TgYLBEv6Y5dF52LfV5cY%2Bd6bfGOex7vXrcMR6D0VINhiLfY73TxVMp45yblxqyrU%2B80u9vCLnI1IH5NNtn&X-Amz-Signature=2d7da9ba4ddfbc8a7508b8d1733b916bc970dafa08d3e52573843a5f37a32aa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BXER442%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDwsXI67sRbre4DoRP37tKy3gNCsktM75LcawO4SwPK1QIhAMT7KtI8iQ9PAX3W26GuKrNeTm8EJzrlbQY2TJNplZoIKv8DCGEQABoMNjM3NDIzMTgzODA1IgzQUs1tJmEy7SS1SPgq3ANX5lBzfqCR6HO2%2B%2FAyR%2BYffCJscnbBih4FYvu%2FTUorITReSF0TRk6ss0OpH1zPOTU1Y3JZj2GpVJxPNJ3dPoZdrpRcZZegpUhujhjraIcwaboXEL6rc8l2j65d9hsCcFVp5so1qFYcSAPVQqR6d0KisqSRr%2BevHDPUhGNQp7qoHaLxg6P2K76y3T6DpR%2Fu0yuid09hd%2F12zLHXpIu%2FJpWEYA02QgvblKt%2BtbOHRTPU52e1PEEvBgnhtrF5GtjREI7NyNDhQmoy8xHV0Wr1SwyusNKQ8xgsc%2BxPbSwLsSXpzOVBndF9QMbPCdVo1Hpni%2BqBf6UXy9XxsE3U%2FLNsj3m89oPI%2BPgRkRLGqjES5hlR4VqFnCKIdkyCcDFaBCVWh2qZncC9RnGmrrVkpDwsf%2Fxw1OlSlk5UWefFvkRGEPHVtWnLzpLcaI60yNn8DI3BFgTivvZrwwde2Lc3Pt8On0SFcFPzewY%2BwbF0TweLCfpRYVTolrS%2BZ%2BodMwGqYn6d4YMCOduUEFziPgy%2FTiG38wLbIm0Ec3j5WeENcaSMnUX0nLIKKvihwFaIndGqIcrr07%2BJ07Al3Y2JPWW7We5nO8ATIFd%2BIJ8RNpKJXWRcNG7VM5OZFWfll84JaEhiqjD8tP3EBjqkASZfRc1lIanL8JT3%2BTn1txVZxGXkW8IzTQgnd27CRuLLdzs7hNhMEPoWM1ev7e0S92rcyKnVno5KGa8dgdt9NPS2AZJvs%2BovErrfuanbfU%2Bv%2BNOGezahAkcBHBa9S%2FfcQu2fBwAnho0Prn2fug2JdVchqGob42UrBTH9iSndR8osC5VOFM19Fsb5VQVr0H0FuKfjOAXO%2BfvoeEME0zV%2Bz66sFUwl&X-Amz-Signature=6f32f4c44c01231274a25d1e197205100a2eb75a918adde878458eefa71d266e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FYXKURP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCQkq4MavVue69wpWes5qe3Qd12QTjLUnr4Saq4csSFdwIgQafqVL8K0wao8mHfmobh11duwhi9HpVsxu%2FwHB9x1Akq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBHKSf9bPwdW7xBPISrcA3Zrfnofk6oKi1AWuwESHAl8ckXDC4J6H8AGbcT4JFSgnHatrPWp%2FNZYp0CRYEfFYW4ldcI%2BtxlRL7Pa3fk1WSG8CCG40Nj6ZExJeuc0MukgA8G6IT9%2FGvvY12hdMCmEy6rfSbhj%2Fhfo9aWgPdZHso1b8ioOmQfQO1WmcYqQdmLOdwJb%2BPVaW0FSFu1%2Fy1i0dh%2B0ZIfV2Kkpz3SAB0arq6KHKg%2BfWtaoTHktdtksDB55phr8oge1TExd%2FP1W3SgtdKEKqffozCe6E2FeE2NZvw0zPtE3OBIu8d2hK%2BJ9tPrgYA4WpOYQbXEYrk5ehvaEf0VOP4VZSQO5Ctb3pge1BvMy2%2BY3FFDKGubp2qFRQzQAVkcxT%2B9OZolBvf%2BhGFvsdH4iNRo7A%2F%2B7ntnXyfYFbNsO9m7rqbxEz3DXGWWeXtKyIzwWCkasghzXHqaO0QgkxTj9G8kxzK98E9KbSXHN%2F694SRudedxAlbOB1N5KT8YjK%2F%2BUyQBjaexAi0OeBihPaWbDgo1vytwKfn1VEN%2BWwpZub9r0dyeg7vYH2QRYjjGuh3fC5Uye1fdC3z242WzV3bMD7GvSfLEFXyKlIRv1rsJmPHMMd9JH%2FzEQ2YpOws2e82Z42Cg1dTub2lu1MLe1%2FcQGOqUBKVGBEJ3E1B5LTVYELUkVWHaTqggGlh7Ir0oZKeyvTD9Yx3%2FhON9j4OclET8RM2hpmmP2yP7OeUcM5IRBu3ucBPKUIz%2BRxX6fsfmon8zIA5D%2BMLsbuC3Xaxa3mLQClrN2NIJZG%2Fv%2BGZVqbwLZQHVnHlOdRQ%2BesM4Nlr7S0xbk4OVSDxHg5W14tAINqlAeLp3hgyQDQSld5xmwECvTDRWDkO6LIKnJ&X-Amz-Signature=8f4a29c1da1ad7b5c508fd4e0df1fd5e0cab72e0390f977f304fb97d1dc1882d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FYXKURP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCQkq4MavVue69wpWes5qe3Qd12QTjLUnr4Saq4csSFdwIgQafqVL8K0wao8mHfmobh11duwhi9HpVsxu%2FwHB9x1Akq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBHKSf9bPwdW7xBPISrcA3Zrfnofk6oKi1AWuwESHAl8ckXDC4J6H8AGbcT4JFSgnHatrPWp%2FNZYp0CRYEfFYW4ldcI%2BtxlRL7Pa3fk1WSG8CCG40Nj6ZExJeuc0MukgA8G6IT9%2FGvvY12hdMCmEy6rfSbhj%2Fhfo9aWgPdZHso1b8ioOmQfQO1WmcYqQdmLOdwJb%2BPVaW0FSFu1%2Fy1i0dh%2B0ZIfV2Kkpz3SAB0arq6KHKg%2BfWtaoTHktdtksDB55phr8oge1TExd%2FP1W3SgtdKEKqffozCe6E2FeE2NZvw0zPtE3OBIu8d2hK%2BJ9tPrgYA4WpOYQbXEYrk5ehvaEf0VOP4VZSQO5Ctb3pge1BvMy2%2BY3FFDKGubp2qFRQzQAVkcxT%2B9OZolBvf%2BhGFvsdH4iNRo7A%2F%2B7ntnXyfYFbNsO9m7rqbxEz3DXGWWeXtKyIzwWCkasghzXHqaO0QgkxTj9G8kxzK98E9KbSXHN%2F694SRudedxAlbOB1N5KT8YjK%2F%2BUyQBjaexAi0OeBihPaWbDgo1vytwKfn1VEN%2BWwpZub9r0dyeg7vYH2QRYjjGuh3fC5Uye1fdC3z242WzV3bMD7GvSfLEFXyKlIRv1rsJmPHMMd9JH%2FzEQ2YpOws2e82Z42Cg1dTub2lu1MLe1%2FcQGOqUBKVGBEJ3E1B5LTVYELUkVWHaTqggGlh7Ir0oZKeyvTD9Yx3%2FhON9j4OclET8RM2hpmmP2yP7OeUcM5IRBu3ucBPKUIz%2BRxX6fsfmon8zIA5D%2BMLsbuC3Xaxa3mLQClrN2NIJZG%2Fv%2BGZVqbwLZQHVnHlOdRQ%2BesM4Nlr7S0xbk4OVSDxHg5W14tAINqlAeLp3hgyQDQSld5xmwECvTDRWDkO6LIKnJ&X-Amz-Signature=1f25a1e85ad3e8d61c2cad8fc1c180343daaf4075588d2dd4c9000a0c4f84470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DOTPHGY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIF%2BywNTAsgrtIIwyKvIE2%2FzYG9%2FCPRaDfN8sj49Aq9ifAiBpSuhglbbGK%2Fdi8zkv%2FfL8xWWn7IJXuGmzcE48BIulYSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM5MAvrXKDJ6TsmJaEKtwDcvolEt%2F1hFCm9Js1GYe0lSRt2zTBnOymEvW8uy7fWaam67cMS1yA3SOxSSXkjR5PaTC1jj4fAIHCQmHM2Rp89qShp1RWgCQjPA%2FEW0POw%2BW5o75gwaDUk81fvrnXHcyuJHb9g4e0jHEB06jWN340OhD8PMUthkPJ6nrYc6BXS7Uo4Os5%2ByH2Snl8G%2BAEPZkjUUXrlFYOtxP5Kdx3P0eN7C9jbi7U5wm7XvUaOeAjo4%2F%2Bm0RlK5s5heIScBkQXsW0%2FtgswkC2iK4Z4eqBGeYjVmIVw8Om4U7OEmL%2BW7aTufunvxokfRNWUf2lPkqvVh%2FeEynrHkzoFmApI0cXVB16wy1TgPGaCZ5xYw%2Blo4KpEofHRYS6B1TwKjAWmUPnD4%2FYDITrUeeIgnBA2FeYpopU0cMQa1Tp%2BEvVG9LORQpMb%2FlvnIzPcnsF2vQgPXjiB2b5Gg%2FeGrQfMh4bMCMjcLYmtlOgQ059%2F40TGCed27l1RtTlwj%2B2RZ2U8TuPkrixVwMKkmUceuB4%2Fy3MYLDcexhhaq4O1%2FbC2jwdoAyIqetfc5Pr0gqjpkikIPqfOkSlaw5FkIbwA2JsgdFHLfar3SMJ4IbAI6Rb6fwz9ekVnTFxGAfdYQxwx1AFLhxkOnQwsbX9xAY6pgHzuaBmMl2t3wAmJnRFpESvb0vqTcH7q4pya47zVCmK6JaZInVNSuyjRRL09fiHGvlqBYsGMoIt%2F9VLhRWMDX2QkXNP2hFrOekAolcSrEe%2Fim9DruPe80G8JT%2BBAYKL0rktTgB7N%2Fhq9rlwuBxeLzBYtW8hI8thx3YBOn6SlhcBK0B0sWYeNEuTL2I43KYDY4y9xa1g6SgT2neUpRKSuKIDk%2F%2Fk7tSi&X-Amz-Signature=eba1192d8178fe261909125cd1d62ad65796b98acda8b66578ae7f47580b7f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DOTPHGY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIF%2BywNTAsgrtIIwyKvIE2%2FzYG9%2FCPRaDfN8sj49Aq9ifAiBpSuhglbbGK%2Fdi8zkv%2FfL8xWWn7IJXuGmzcE48BIulYSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM5MAvrXKDJ6TsmJaEKtwDcvolEt%2F1hFCm9Js1GYe0lSRt2zTBnOymEvW8uy7fWaam67cMS1yA3SOxSSXkjR5PaTC1jj4fAIHCQmHM2Rp89qShp1RWgCQjPA%2FEW0POw%2BW5o75gwaDUk81fvrnXHcyuJHb9g4e0jHEB06jWN340OhD8PMUthkPJ6nrYc6BXS7Uo4Os5%2ByH2Snl8G%2BAEPZkjUUXrlFYOtxP5Kdx3P0eN7C9jbi7U5wm7XvUaOeAjo4%2F%2Bm0RlK5s5heIScBkQXsW0%2FtgswkC2iK4Z4eqBGeYjVmIVw8Om4U7OEmL%2BW7aTufunvxokfRNWUf2lPkqvVh%2FeEynrHkzoFmApI0cXVB16wy1TgPGaCZ5xYw%2Blo4KpEofHRYS6B1TwKjAWmUPnD4%2FYDITrUeeIgnBA2FeYpopU0cMQa1Tp%2BEvVG9LORQpMb%2FlvnIzPcnsF2vQgPXjiB2b5Gg%2FeGrQfMh4bMCMjcLYmtlOgQ059%2F40TGCed27l1RtTlwj%2B2RZ2U8TuPkrixVwMKkmUceuB4%2Fy3MYLDcexhhaq4O1%2FbC2jwdoAyIqetfc5Pr0gqjpkikIPqfOkSlaw5FkIbwA2JsgdFHLfar3SMJ4IbAI6Rb6fwz9ekVnTFxGAfdYQxwx1AFLhxkOnQwsbX9xAY6pgHzuaBmMl2t3wAmJnRFpESvb0vqTcH7q4pya47zVCmK6JaZInVNSuyjRRL09fiHGvlqBYsGMoIt%2F9VLhRWMDX2QkXNP2hFrOekAolcSrEe%2Fim9DruPe80G8JT%2BBAYKL0rktTgB7N%2Fhq9rlwuBxeLzBYtW8hI8thx3YBOn6SlhcBK0B0sWYeNEuTL2I43KYDY4y9xa1g6SgT2neUpRKSuKIDk%2F%2Fk7tSi&X-Amz-Signature=de9e6b826b1f31fa589837d0d2b3e67dc4347b1833b91ffd5fa160d9d72e5d51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DOTPHGY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIF%2BywNTAsgrtIIwyKvIE2%2FzYG9%2FCPRaDfN8sj49Aq9ifAiBpSuhglbbGK%2Fdi8zkv%2FfL8xWWn7IJXuGmzcE48BIulYSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM5MAvrXKDJ6TsmJaEKtwDcvolEt%2F1hFCm9Js1GYe0lSRt2zTBnOymEvW8uy7fWaam67cMS1yA3SOxSSXkjR5PaTC1jj4fAIHCQmHM2Rp89qShp1RWgCQjPA%2FEW0POw%2BW5o75gwaDUk81fvrnXHcyuJHb9g4e0jHEB06jWN340OhD8PMUthkPJ6nrYc6BXS7Uo4Os5%2ByH2Snl8G%2BAEPZkjUUXrlFYOtxP5Kdx3P0eN7C9jbi7U5wm7XvUaOeAjo4%2F%2Bm0RlK5s5heIScBkQXsW0%2FtgswkC2iK4Z4eqBGeYjVmIVw8Om4U7OEmL%2BW7aTufunvxokfRNWUf2lPkqvVh%2FeEynrHkzoFmApI0cXVB16wy1TgPGaCZ5xYw%2Blo4KpEofHRYS6B1TwKjAWmUPnD4%2FYDITrUeeIgnBA2FeYpopU0cMQa1Tp%2BEvVG9LORQpMb%2FlvnIzPcnsF2vQgPXjiB2b5Gg%2FeGrQfMh4bMCMjcLYmtlOgQ059%2F40TGCed27l1RtTlwj%2B2RZ2U8TuPkrixVwMKkmUceuB4%2Fy3MYLDcexhhaq4O1%2FbC2jwdoAyIqetfc5Pr0gqjpkikIPqfOkSlaw5FkIbwA2JsgdFHLfar3SMJ4IbAI6Rb6fwz9ekVnTFxGAfdYQxwx1AFLhxkOnQwsbX9xAY6pgHzuaBmMl2t3wAmJnRFpESvb0vqTcH7q4pya47zVCmK6JaZInVNSuyjRRL09fiHGvlqBYsGMoIt%2F9VLhRWMDX2QkXNP2hFrOekAolcSrEe%2Fim9DruPe80G8JT%2BBAYKL0rktTgB7N%2Fhq9rlwuBxeLzBYtW8hI8thx3YBOn6SlhcBK0B0sWYeNEuTL2I43KYDY4y9xa1g6SgT2neUpRKSuKIDk%2F%2Fk7tSi&X-Amz-Signature=5e69670985c34720921d4e040612d11fbbd910724aa0af9414888700ccc6c00b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DOTPHGY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIF%2BywNTAsgrtIIwyKvIE2%2FzYG9%2FCPRaDfN8sj49Aq9ifAiBpSuhglbbGK%2Fdi8zkv%2FfL8xWWn7IJXuGmzcE48BIulYSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM5MAvrXKDJ6TsmJaEKtwDcvolEt%2F1hFCm9Js1GYe0lSRt2zTBnOymEvW8uy7fWaam67cMS1yA3SOxSSXkjR5PaTC1jj4fAIHCQmHM2Rp89qShp1RWgCQjPA%2FEW0POw%2BW5o75gwaDUk81fvrnXHcyuJHb9g4e0jHEB06jWN340OhD8PMUthkPJ6nrYc6BXS7Uo4Os5%2ByH2Snl8G%2BAEPZkjUUXrlFYOtxP5Kdx3P0eN7C9jbi7U5wm7XvUaOeAjo4%2F%2Bm0RlK5s5heIScBkQXsW0%2FtgswkC2iK4Z4eqBGeYjVmIVw8Om4U7OEmL%2BW7aTufunvxokfRNWUf2lPkqvVh%2FeEynrHkzoFmApI0cXVB16wy1TgPGaCZ5xYw%2Blo4KpEofHRYS6B1TwKjAWmUPnD4%2FYDITrUeeIgnBA2FeYpopU0cMQa1Tp%2BEvVG9LORQpMb%2FlvnIzPcnsF2vQgPXjiB2b5Gg%2FeGrQfMh4bMCMjcLYmtlOgQ059%2F40TGCed27l1RtTlwj%2B2RZ2U8TuPkrixVwMKkmUceuB4%2Fy3MYLDcexhhaq4O1%2FbC2jwdoAyIqetfc5Pr0gqjpkikIPqfOkSlaw5FkIbwA2JsgdFHLfar3SMJ4IbAI6Rb6fwz9ekVnTFxGAfdYQxwx1AFLhxkOnQwsbX9xAY6pgHzuaBmMl2t3wAmJnRFpESvb0vqTcH7q4pya47zVCmK6JaZInVNSuyjRRL09fiHGvlqBYsGMoIt%2F9VLhRWMDX2QkXNP2hFrOekAolcSrEe%2Fim9DruPe80G8JT%2BBAYKL0rktTgB7N%2Fhq9rlwuBxeLzBYtW8hI8thx3YBOn6SlhcBK0B0sWYeNEuTL2I43KYDY4y9xa1g6SgT2neUpRKSuKIDk%2F%2Fk7tSi&X-Amz-Signature=c71fb6e52c884ce8326a15b7a9426ffbe8121d6f97ae3fd258f59a85658dfaad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DOTPHGY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIF%2BywNTAsgrtIIwyKvIE2%2FzYG9%2FCPRaDfN8sj49Aq9ifAiBpSuhglbbGK%2Fdi8zkv%2FfL8xWWn7IJXuGmzcE48BIulYSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM5MAvrXKDJ6TsmJaEKtwDcvolEt%2F1hFCm9Js1GYe0lSRt2zTBnOymEvW8uy7fWaam67cMS1yA3SOxSSXkjR5PaTC1jj4fAIHCQmHM2Rp89qShp1RWgCQjPA%2FEW0POw%2BW5o75gwaDUk81fvrnXHcyuJHb9g4e0jHEB06jWN340OhD8PMUthkPJ6nrYc6BXS7Uo4Os5%2ByH2Snl8G%2BAEPZkjUUXrlFYOtxP5Kdx3P0eN7C9jbi7U5wm7XvUaOeAjo4%2F%2Bm0RlK5s5heIScBkQXsW0%2FtgswkC2iK4Z4eqBGeYjVmIVw8Om4U7OEmL%2BW7aTufunvxokfRNWUf2lPkqvVh%2FeEynrHkzoFmApI0cXVB16wy1TgPGaCZ5xYw%2Blo4KpEofHRYS6B1TwKjAWmUPnD4%2FYDITrUeeIgnBA2FeYpopU0cMQa1Tp%2BEvVG9LORQpMb%2FlvnIzPcnsF2vQgPXjiB2b5Gg%2FeGrQfMh4bMCMjcLYmtlOgQ059%2F40TGCed27l1RtTlwj%2B2RZ2U8TuPkrixVwMKkmUceuB4%2Fy3MYLDcexhhaq4O1%2FbC2jwdoAyIqetfc5Pr0gqjpkikIPqfOkSlaw5FkIbwA2JsgdFHLfar3SMJ4IbAI6Rb6fwz9ekVnTFxGAfdYQxwx1AFLhxkOnQwsbX9xAY6pgHzuaBmMl2t3wAmJnRFpESvb0vqTcH7q4pya47zVCmK6JaZInVNSuyjRRL09fiHGvlqBYsGMoIt%2F9VLhRWMDX2QkXNP2hFrOekAolcSrEe%2Fim9DruPe80G8JT%2BBAYKL0rktTgB7N%2Fhq9rlwuBxeLzBYtW8hI8thx3YBOn6SlhcBK0B0sWYeNEuTL2I43KYDY4y9xa1g6SgT2neUpRKSuKIDk%2F%2Fk7tSi&X-Amz-Signature=a6a1e7f546029afb90a0d303c380879370f063bba20fdd9393432fb049181ed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DOTPHGY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIF%2BywNTAsgrtIIwyKvIE2%2FzYG9%2FCPRaDfN8sj49Aq9ifAiBpSuhglbbGK%2Fdi8zkv%2FfL8xWWn7IJXuGmzcE48BIulYSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM5MAvrXKDJ6TsmJaEKtwDcvolEt%2F1hFCm9Js1GYe0lSRt2zTBnOymEvW8uy7fWaam67cMS1yA3SOxSSXkjR5PaTC1jj4fAIHCQmHM2Rp89qShp1RWgCQjPA%2FEW0POw%2BW5o75gwaDUk81fvrnXHcyuJHb9g4e0jHEB06jWN340OhD8PMUthkPJ6nrYc6BXS7Uo4Os5%2ByH2Snl8G%2BAEPZkjUUXrlFYOtxP5Kdx3P0eN7C9jbi7U5wm7XvUaOeAjo4%2F%2Bm0RlK5s5heIScBkQXsW0%2FtgswkC2iK4Z4eqBGeYjVmIVw8Om4U7OEmL%2BW7aTufunvxokfRNWUf2lPkqvVh%2FeEynrHkzoFmApI0cXVB16wy1TgPGaCZ5xYw%2Blo4KpEofHRYS6B1TwKjAWmUPnD4%2FYDITrUeeIgnBA2FeYpopU0cMQa1Tp%2BEvVG9LORQpMb%2FlvnIzPcnsF2vQgPXjiB2b5Gg%2FeGrQfMh4bMCMjcLYmtlOgQ059%2F40TGCed27l1RtTlwj%2B2RZ2U8TuPkrixVwMKkmUceuB4%2Fy3MYLDcexhhaq4O1%2FbC2jwdoAyIqetfc5Pr0gqjpkikIPqfOkSlaw5FkIbwA2JsgdFHLfar3SMJ4IbAI6Rb6fwz9ekVnTFxGAfdYQxwx1AFLhxkOnQwsbX9xAY6pgHzuaBmMl2t3wAmJnRFpESvb0vqTcH7q4pya47zVCmK6JaZInVNSuyjRRL09fiHGvlqBYsGMoIt%2F9VLhRWMDX2QkXNP2hFrOekAolcSrEe%2Fim9DruPe80G8JT%2BBAYKL0rktTgB7N%2Fhq9rlwuBxeLzBYtW8hI8thx3YBOn6SlhcBK0B0sWYeNEuTL2I43KYDY4y9xa1g6SgT2neUpRKSuKIDk%2F%2Fk7tSi&X-Amz-Signature=97a333366d8be577cc4685692577a7b82681cf3d61691dab9781ee78caf41219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DOTPHGY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIF%2BywNTAsgrtIIwyKvIE2%2FzYG9%2FCPRaDfN8sj49Aq9ifAiBpSuhglbbGK%2Fdi8zkv%2FfL8xWWn7IJXuGmzcE48BIulYSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM5MAvrXKDJ6TsmJaEKtwDcvolEt%2F1hFCm9Js1GYe0lSRt2zTBnOymEvW8uy7fWaam67cMS1yA3SOxSSXkjR5PaTC1jj4fAIHCQmHM2Rp89qShp1RWgCQjPA%2FEW0POw%2BW5o75gwaDUk81fvrnXHcyuJHb9g4e0jHEB06jWN340OhD8PMUthkPJ6nrYc6BXS7Uo4Os5%2ByH2Snl8G%2BAEPZkjUUXrlFYOtxP5Kdx3P0eN7C9jbi7U5wm7XvUaOeAjo4%2F%2Bm0RlK5s5heIScBkQXsW0%2FtgswkC2iK4Z4eqBGeYjVmIVw8Om4U7OEmL%2BW7aTufunvxokfRNWUf2lPkqvVh%2FeEynrHkzoFmApI0cXVB16wy1TgPGaCZ5xYw%2Blo4KpEofHRYS6B1TwKjAWmUPnD4%2FYDITrUeeIgnBA2FeYpopU0cMQa1Tp%2BEvVG9LORQpMb%2FlvnIzPcnsF2vQgPXjiB2b5Gg%2FeGrQfMh4bMCMjcLYmtlOgQ059%2F40TGCed27l1RtTlwj%2B2RZ2U8TuPkrixVwMKkmUceuB4%2Fy3MYLDcexhhaq4O1%2FbC2jwdoAyIqetfc5Pr0gqjpkikIPqfOkSlaw5FkIbwA2JsgdFHLfar3SMJ4IbAI6Rb6fwz9ekVnTFxGAfdYQxwx1AFLhxkOnQwsbX9xAY6pgHzuaBmMl2t3wAmJnRFpESvb0vqTcH7q4pya47zVCmK6JaZInVNSuyjRRL09fiHGvlqBYsGMoIt%2F9VLhRWMDX2QkXNP2hFrOekAolcSrEe%2Fim9DruPe80G8JT%2BBAYKL0rktTgB7N%2Fhq9rlwuBxeLzBYtW8hI8thx3YBOn6SlhcBK0B0sWYeNEuTL2I43KYDY4y9xa1g6SgT2neUpRKSuKIDk%2F%2Fk7tSi&X-Amz-Signature=85d174bba21b125a83d09025aba27e1ef59cf66f5a53873dfb2f844720322e56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DOTPHGY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIF%2BywNTAsgrtIIwyKvIE2%2FzYG9%2FCPRaDfN8sj49Aq9ifAiBpSuhglbbGK%2Fdi8zkv%2FfL8xWWn7IJXuGmzcE48BIulYSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM5MAvrXKDJ6TsmJaEKtwDcvolEt%2F1hFCm9Js1GYe0lSRt2zTBnOymEvW8uy7fWaam67cMS1yA3SOxSSXkjR5PaTC1jj4fAIHCQmHM2Rp89qShp1RWgCQjPA%2FEW0POw%2BW5o75gwaDUk81fvrnXHcyuJHb9g4e0jHEB06jWN340OhD8PMUthkPJ6nrYc6BXS7Uo4Os5%2ByH2Snl8G%2BAEPZkjUUXrlFYOtxP5Kdx3P0eN7C9jbi7U5wm7XvUaOeAjo4%2F%2Bm0RlK5s5heIScBkQXsW0%2FtgswkC2iK4Z4eqBGeYjVmIVw8Om4U7OEmL%2BW7aTufunvxokfRNWUf2lPkqvVh%2FeEynrHkzoFmApI0cXVB16wy1TgPGaCZ5xYw%2Blo4KpEofHRYS6B1TwKjAWmUPnD4%2FYDITrUeeIgnBA2FeYpopU0cMQa1Tp%2BEvVG9LORQpMb%2FlvnIzPcnsF2vQgPXjiB2b5Gg%2FeGrQfMh4bMCMjcLYmtlOgQ059%2F40TGCed27l1RtTlwj%2B2RZ2U8TuPkrixVwMKkmUceuB4%2Fy3MYLDcexhhaq4O1%2FbC2jwdoAyIqetfc5Pr0gqjpkikIPqfOkSlaw5FkIbwA2JsgdFHLfar3SMJ4IbAI6Rb6fwz9ekVnTFxGAfdYQxwx1AFLhxkOnQwsbX9xAY6pgHzuaBmMl2t3wAmJnRFpESvb0vqTcH7q4pya47zVCmK6JaZInVNSuyjRRL09fiHGvlqBYsGMoIt%2F9VLhRWMDX2QkXNP2hFrOekAolcSrEe%2Fim9DruPe80G8JT%2BBAYKL0rktTgB7N%2Fhq9rlwuBxeLzBYtW8hI8thx3YBOn6SlhcBK0B0sWYeNEuTL2I43KYDY4y9xa1g6SgT2neUpRKSuKIDk%2F%2Fk7tSi&X-Amz-Signature=90f69cf49c29759a77f3ad454420a235ffdf78b985755ef2bc263f83dd869b9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DOTPHGY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIF%2BywNTAsgrtIIwyKvIE2%2FzYG9%2FCPRaDfN8sj49Aq9ifAiBpSuhglbbGK%2Fdi8zkv%2FfL8xWWn7IJXuGmzcE48BIulYSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM5MAvrXKDJ6TsmJaEKtwDcvolEt%2F1hFCm9Js1GYe0lSRt2zTBnOymEvW8uy7fWaam67cMS1yA3SOxSSXkjR5PaTC1jj4fAIHCQmHM2Rp89qShp1RWgCQjPA%2FEW0POw%2BW5o75gwaDUk81fvrnXHcyuJHb9g4e0jHEB06jWN340OhD8PMUthkPJ6nrYc6BXS7Uo4Os5%2ByH2Snl8G%2BAEPZkjUUXrlFYOtxP5Kdx3P0eN7C9jbi7U5wm7XvUaOeAjo4%2F%2Bm0RlK5s5heIScBkQXsW0%2FtgswkC2iK4Z4eqBGeYjVmIVw8Om4U7OEmL%2BW7aTufunvxokfRNWUf2lPkqvVh%2FeEynrHkzoFmApI0cXVB16wy1TgPGaCZ5xYw%2Blo4KpEofHRYS6B1TwKjAWmUPnD4%2FYDITrUeeIgnBA2FeYpopU0cMQa1Tp%2BEvVG9LORQpMb%2FlvnIzPcnsF2vQgPXjiB2b5Gg%2FeGrQfMh4bMCMjcLYmtlOgQ059%2F40TGCed27l1RtTlwj%2B2RZ2U8TuPkrixVwMKkmUceuB4%2Fy3MYLDcexhhaq4O1%2FbC2jwdoAyIqetfc5Pr0gqjpkikIPqfOkSlaw5FkIbwA2JsgdFHLfar3SMJ4IbAI6Rb6fwz9ekVnTFxGAfdYQxwx1AFLhxkOnQwsbX9xAY6pgHzuaBmMl2t3wAmJnRFpESvb0vqTcH7q4pya47zVCmK6JaZInVNSuyjRRL09fiHGvlqBYsGMoIt%2F9VLhRWMDX2QkXNP2hFrOekAolcSrEe%2Fim9DruPe80G8JT%2BBAYKL0rktTgB7N%2Fhq9rlwuBxeLzBYtW8hI8thx3YBOn6SlhcBK0B0sWYeNEuTL2I43KYDY4y9xa1g6SgT2neUpRKSuKIDk%2F%2Fk7tSi&X-Amz-Signature=ea51618309baafae3c5be5bf1be6199041f6a0a9389c57a5740341f4b86dcfeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DOTPHGY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIF%2BywNTAsgrtIIwyKvIE2%2FzYG9%2FCPRaDfN8sj49Aq9ifAiBpSuhglbbGK%2Fdi8zkv%2FfL8xWWn7IJXuGmzcE48BIulYSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM5MAvrXKDJ6TsmJaEKtwDcvolEt%2F1hFCm9Js1GYe0lSRt2zTBnOymEvW8uy7fWaam67cMS1yA3SOxSSXkjR5PaTC1jj4fAIHCQmHM2Rp89qShp1RWgCQjPA%2FEW0POw%2BW5o75gwaDUk81fvrnXHcyuJHb9g4e0jHEB06jWN340OhD8PMUthkPJ6nrYc6BXS7Uo4Os5%2ByH2Snl8G%2BAEPZkjUUXrlFYOtxP5Kdx3P0eN7C9jbi7U5wm7XvUaOeAjo4%2F%2Bm0RlK5s5heIScBkQXsW0%2FtgswkC2iK4Z4eqBGeYjVmIVw8Om4U7OEmL%2BW7aTufunvxokfRNWUf2lPkqvVh%2FeEynrHkzoFmApI0cXVB16wy1TgPGaCZ5xYw%2Blo4KpEofHRYS6B1TwKjAWmUPnD4%2FYDITrUeeIgnBA2FeYpopU0cMQa1Tp%2BEvVG9LORQpMb%2FlvnIzPcnsF2vQgPXjiB2b5Gg%2FeGrQfMh4bMCMjcLYmtlOgQ059%2F40TGCed27l1RtTlwj%2B2RZ2U8TuPkrixVwMKkmUceuB4%2Fy3MYLDcexhhaq4O1%2FbC2jwdoAyIqetfc5Pr0gqjpkikIPqfOkSlaw5FkIbwA2JsgdFHLfar3SMJ4IbAI6Rb6fwz9ekVnTFxGAfdYQxwx1AFLhxkOnQwsbX9xAY6pgHzuaBmMl2t3wAmJnRFpESvb0vqTcH7q4pya47zVCmK6JaZInVNSuyjRRL09fiHGvlqBYsGMoIt%2F9VLhRWMDX2QkXNP2hFrOekAolcSrEe%2Fim9DruPe80G8JT%2BBAYKL0rktTgB7N%2Fhq9rlwuBxeLzBYtW8hI8thx3YBOn6SlhcBK0B0sWYeNEuTL2I43KYDY4y9xa1g6SgT2neUpRKSuKIDk%2F%2Fk7tSi&X-Amz-Signature=a21e558fe5bb27e410ee29fb4568e40051ac13fe0a0918ab58351a92b7d2aac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
