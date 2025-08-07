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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N7IUZV7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCKCrfJ5K0PYYLqmpdXaXbzxgkOhBlUcnq8zANbvDp67AIhAOobknnER6xEge3W9hpgGP%2BbWfDPbID3sCorUS2VwhJ1KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrRsCHKDMrJ0eUqQ8q3ANR6VNCVVWom0zlNzOb%2FRr67Y2eb%2FWyi8C1q0H8pyoc4%2BZIXbCHkXmO%2FkGtidJGF7vOWx5v7Czp4XysLiiJUNz6rHNf52uKkEiJK7KJvzUIUwrM1ONbPV3eFT%2FbuSGKRjkG%2F6iDEPBdyUeAj%2F7D9MqJ4Vpminku6Vw8NbBwWjftcfC5ewqMiaMl%2F6AgD90lswOiasTwdl7Nn1KQhHg2jsCfsp3kBK1AVIsc6Cgpn%2BxUkiBYKSHRILsZ4slPUwJ8TwwHBG8jWZPfvzunJgQ3RRimhnIJvBSw7VtFEiWpPb0bKDijF0Io9NKenxu6icu2dI%2FeFFDuKQkEDlR0c80AZ3YaM6J1H7W5Ucgk9BJE0vFicvTBy7JnSH8cwJC6QnnT7jtKx1XjhqLrOLqLKGH3%2Fc2BcuewschesSn31ryEMfW%2FehdpT2SXndeY6wyw7lWsDPu5B2BaJIyaowL7sa571SwglllrBtu20g7vzpPmT%2FoRV7HtZr9lJjm%2FvntzQruKnOCroY4rRE41UGRPP4eN6R%2BFPk4XmzhAna8GH6wXElF%2BByiuhP5ebts5fYfDvZd%2FC4GLSzlXlo6gnRB2VnDmp8HiFw8AbNq8251jFSof4hWPVc%2B3FkbVm07f0yHQwTDHttHEBjqkAZlN4VuDOxGHYM5FchTuI0HYENSZ65LLBD28rWk%2B51yY8aXStKKS2hlCUR0X%2FHf1LzzfGqwfti8aI3lc8E3ZMa%2BtVLttVC7c3793YZYar8%2Fe4dYnbPpJKywj1PC7Xa48qv%2BiWvCjiGrVtG4lc13ffXocR%2B5uMGN4mQtEUSkOKGXa0LVPLbbiBVKD4Laa2tHN55%2BGRmFAVomGikOiOzG6NnE30b2u&X-Amz-Signature=b1d6d054127f3913a930a196a00155c0f70ddbfd3f7c8a79f7386c72c1fe7c57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N7IUZV7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCKCrfJ5K0PYYLqmpdXaXbzxgkOhBlUcnq8zANbvDp67AIhAOobknnER6xEge3W9hpgGP%2BbWfDPbID3sCorUS2VwhJ1KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrRsCHKDMrJ0eUqQ8q3ANR6VNCVVWom0zlNzOb%2FRr67Y2eb%2FWyi8C1q0H8pyoc4%2BZIXbCHkXmO%2FkGtidJGF7vOWx5v7Czp4XysLiiJUNz6rHNf52uKkEiJK7KJvzUIUwrM1ONbPV3eFT%2FbuSGKRjkG%2F6iDEPBdyUeAj%2F7D9MqJ4Vpminku6Vw8NbBwWjftcfC5ewqMiaMl%2F6AgD90lswOiasTwdl7Nn1KQhHg2jsCfsp3kBK1AVIsc6Cgpn%2BxUkiBYKSHRILsZ4slPUwJ8TwwHBG8jWZPfvzunJgQ3RRimhnIJvBSw7VtFEiWpPb0bKDijF0Io9NKenxu6icu2dI%2FeFFDuKQkEDlR0c80AZ3YaM6J1H7W5Ucgk9BJE0vFicvTBy7JnSH8cwJC6QnnT7jtKx1XjhqLrOLqLKGH3%2Fc2BcuewschesSn31ryEMfW%2FehdpT2SXndeY6wyw7lWsDPu5B2BaJIyaowL7sa571SwglllrBtu20g7vzpPmT%2FoRV7HtZr9lJjm%2FvntzQruKnOCroY4rRE41UGRPP4eN6R%2BFPk4XmzhAna8GH6wXElF%2BByiuhP5ebts5fYfDvZd%2FC4GLSzlXlo6gnRB2VnDmp8HiFw8AbNq8251jFSof4hWPVc%2B3FkbVm07f0yHQwTDHttHEBjqkAZlN4VuDOxGHYM5FchTuI0HYENSZ65LLBD28rWk%2B51yY8aXStKKS2hlCUR0X%2FHf1LzzfGqwfti8aI3lc8E3ZMa%2BtVLttVC7c3793YZYar8%2Fe4dYnbPpJKywj1PC7Xa48qv%2BiWvCjiGrVtG4lc13ffXocR%2B5uMGN4mQtEUSkOKGXa0LVPLbbiBVKD4Laa2tHN55%2BGRmFAVomGikOiOzG6NnE30b2u&X-Amz-Signature=25e02cd88a168680ee4499cf5ca6593485a5fb05da97d7c56f7c81fed7d0954b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N7IUZV7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCKCrfJ5K0PYYLqmpdXaXbzxgkOhBlUcnq8zANbvDp67AIhAOobknnER6xEge3W9hpgGP%2BbWfDPbID3sCorUS2VwhJ1KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrRsCHKDMrJ0eUqQ8q3ANR6VNCVVWom0zlNzOb%2FRr67Y2eb%2FWyi8C1q0H8pyoc4%2BZIXbCHkXmO%2FkGtidJGF7vOWx5v7Czp4XysLiiJUNz6rHNf52uKkEiJK7KJvzUIUwrM1ONbPV3eFT%2FbuSGKRjkG%2F6iDEPBdyUeAj%2F7D9MqJ4Vpminku6Vw8NbBwWjftcfC5ewqMiaMl%2F6AgD90lswOiasTwdl7Nn1KQhHg2jsCfsp3kBK1AVIsc6Cgpn%2BxUkiBYKSHRILsZ4slPUwJ8TwwHBG8jWZPfvzunJgQ3RRimhnIJvBSw7VtFEiWpPb0bKDijF0Io9NKenxu6icu2dI%2FeFFDuKQkEDlR0c80AZ3YaM6J1H7W5Ucgk9BJE0vFicvTBy7JnSH8cwJC6QnnT7jtKx1XjhqLrOLqLKGH3%2Fc2BcuewschesSn31ryEMfW%2FehdpT2SXndeY6wyw7lWsDPu5B2BaJIyaowL7sa571SwglllrBtu20g7vzpPmT%2FoRV7HtZr9lJjm%2FvntzQruKnOCroY4rRE41UGRPP4eN6R%2BFPk4XmzhAna8GH6wXElF%2BByiuhP5ebts5fYfDvZd%2FC4GLSzlXlo6gnRB2VnDmp8HiFw8AbNq8251jFSof4hWPVc%2B3FkbVm07f0yHQwTDHttHEBjqkAZlN4VuDOxGHYM5FchTuI0HYENSZ65LLBD28rWk%2B51yY8aXStKKS2hlCUR0X%2FHf1LzzfGqwfti8aI3lc8E3ZMa%2BtVLttVC7c3793YZYar8%2Fe4dYnbPpJKywj1PC7Xa48qv%2BiWvCjiGrVtG4lc13ffXocR%2B5uMGN4mQtEUSkOKGXa0LVPLbbiBVKD4Laa2tHN55%2BGRmFAVomGikOiOzG6NnE30b2u&X-Amz-Signature=2b45d55260574254f1db79e90f6116ed3c799e2cd6a340046a9c37e63d046361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N7IUZV7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCKCrfJ5K0PYYLqmpdXaXbzxgkOhBlUcnq8zANbvDp67AIhAOobknnER6xEge3W9hpgGP%2BbWfDPbID3sCorUS2VwhJ1KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrRsCHKDMrJ0eUqQ8q3ANR6VNCVVWom0zlNzOb%2FRr67Y2eb%2FWyi8C1q0H8pyoc4%2BZIXbCHkXmO%2FkGtidJGF7vOWx5v7Czp4XysLiiJUNz6rHNf52uKkEiJK7KJvzUIUwrM1ONbPV3eFT%2FbuSGKRjkG%2F6iDEPBdyUeAj%2F7D9MqJ4Vpminku6Vw8NbBwWjftcfC5ewqMiaMl%2F6AgD90lswOiasTwdl7Nn1KQhHg2jsCfsp3kBK1AVIsc6Cgpn%2BxUkiBYKSHRILsZ4slPUwJ8TwwHBG8jWZPfvzunJgQ3RRimhnIJvBSw7VtFEiWpPb0bKDijF0Io9NKenxu6icu2dI%2FeFFDuKQkEDlR0c80AZ3YaM6J1H7W5Ucgk9BJE0vFicvTBy7JnSH8cwJC6QnnT7jtKx1XjhqLrOLqLKGH3%2Fc2BcuewschesSn31ryEMfW%2FehdpT2SXndeY6wyw7lWsDPu5B2BaJIyaowL7sa571SwglllrBtu20g7vzpPmT%2FoRV7HtZr9lJjm%2FvntzQruKnOCroY4rRE41UGRPP4eN6R%2BFPk4XmzhAna8GH6wXElF%2BByiuhP5ebts5fYfDvZd%2FC4GLSzlXlo6gnRB2VnDmp8HiFw8AbNq8251jFSof4hWPVc%2B3FkbVm07f0yHQwTDHttHEBjqkAZlN4VuDOxGHYM5FchTuI0HYENSZ65LLBD28rWk%2B51yY8aXStKKS2hlCUR0X%2FHf1LzzfGqwfti8aI3lc8E3ZMa%2BtVLttVC7c3793YZYar8%2Fe4dYnbPpJKywj1PC7Xa48qv%2BiWvCjiGrVtG4lc13ffXocR%2B5uMGN4mQtEUSkOKGXa0LVPLbbiBVKD4Laa2tHN55%2BGRmFAVomGikOiOzG6NnE30b2u&X-Amz-Signature=86760ddf6e1f099e95323c15de129dd455f51571d468a9962e71f6c2f6059050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N7IUZV7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCKCrfJ5K0PYYLqmpdXaXbzxgkOhBlUcnq8zANbvDp67AIhAOobknnER6xEge3W9hpgGP%2BbWfDPbID3sCorUS2VwhJ1KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrRsCHKDMrJ0eUqQ8q3ANR6VNCVVWom0zlNzOb%2FRr67Y2eb%2FWyi8C1q0H8pyoc4%2BZIXbCHkXmO%2FkGtidJGF7vOWx5v7Czp4XysLiiJUNz6rHNf52uKkEiJK7KJvzUIUwrM1ONbPV3eFT%2FbuSGKRjkG%2F6iDEPBdyUeAj%2F7D9MqJ4Vpminku6Vw8NbBwWjftcfC5ewqMiaMl%2F6AgD90lswOiasTwdl7Nn1KQhHg2jsCfsp3kBK1AVIsc6Cgpn%2BxUkiBYKSHRILsZ4slPUwJ8TwwHBG8jWZPfvzunJgQ3RRimhnIJvBSw7VtFEiWpPb0bKDijF0Io9NKenxu6icu2dI%2FeFFDuKQkEDlR0c80AZ3YaM6J1H7W5Ucgk9BJE0vFicvTBy7JnSH8cwJC6QnnT7jtKx1XjhqLrOLqLKGH3%2Fc2BcuewschesSn31ryEMfW%2FehdpT2SXndeY6wyw7lWsDPu5B2BaJIyaowL7sa571SwglllrBtu20g7vzpPmT%2FoRV7HtZr9lJjm%2FvntzQruKnOCroY4rRE41UGRPP4eN6R%2BFPk4XmzhAna8GH6wXElF%2BByiuhP5ebts5fYfDvZd%2FC4GLSzlXlo6gnRB2VnDmp8HiFw8AbNq8251jFSof4hWPVc%2B3FkbVm07f0yHQwTDHttHEBjqkAZlN4VuDOxGHYM5FchTuI0HYENSZ65LLBD28rWk%2B51yY8aXStKKS2hlCUR0X%2FHf1LzzfGqwfti8aI3lc8E3ZMa%2BtVLttVC7c3793YZYar8%2Fe4dYnbPpJKywj1PC7Xa48qv%2BiWvCjiGrVtG4lc13ffXocR%2B5uMGN4mQtEUSkOKGXa0LVPLbbiBVKD4Laa2tHN55%2BGRmFAVomGikOiOzG6NnE30b2u&X-Amz-Signature=319a67a341988103cfc7baf3851e4826091b7db89df27c37a55151ecc10f54d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N7IUZV7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCKCrfJ5K0PYYLqmpdXaXbzxgkOhBlUcnq8zANbvDp67AIhAOobknnER6xEge3W9hpgGP%2BbWfDPbID3sCorUS2VwhJ1KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrRsCHKDMrJ0eUqQ8q3ANR6VNCVVWom0zlNzOb%2FRr67Y2eb%2FWyi8C1q0H8pyoc4%2BZIXbCHkXmO%2FkGtidJGF7vOWx5v7Czp4XysLiiJUNz6rHNf52uKkEiJK7KJvzUIUwrM1ONbPV3eFT%2FbuSGKRjkG%2F6iDEPBdyUeAj%2F7D9MqJ4Vpminku6Vw8NbBwWjftcfC5ewqMiaMl%2F6AgD90lswOiasTwdl7Nn1KQhHg2jsCfsp3kBK1AVIsc6Cgpn%2BxUkiBYKSHRILsZ4slPUwJ8TwwHBG8jWZPfvzunJgQ3RRimhnIJvBSw7VtFEiWpPb0bKDijF0Io9NKenxu6icu2dI%2FeFFDuKQkEDlR0c80AZ3YaM6J1H7W5Ucgk9BJE0vFicvTBy7JnSH8cwJC6QnnT7jtKx1XjhqLrOLqLKGH3%2Fc2BcuewschesSn31ryEMfW%2FehdpT2SXndeY6wyw7lWsDPu5B2BaJIyaowL7sa571SwglllrBtu20g7vzpPmT%2FoRV7HtZr9lJjm%2FvntzQruKnOCroY4rRE41UGRPP4eN6R%2BFPk4XmzhAna8GH6wXElF%2BByiuhP5ebts5fYfDvZd%2FC4GLSzlXlo6gnRB2VnDmp8HiFw8AbNq8251jFSof4hWPVc%2B3FkbVm07f0yHQwTDHttHEBjqkAZlN4VuDOxGHYM5FchTuI0HYENSZ65LLBD28rWk%2B51yY8aXStKKS2hlCUR0X%2FHf1LzzfGqwfti8aI3lc8E3ZMa%2BtVLttVC7c3793YZYar8%2Fe4dYnbPpJKywj1PC7Xa48qv%2BiWvCjiGrVtG4lc13ffXocR%2B5uMGN4mQtEUSkOKGXa0LVPLbbiBVKD4Laa2tHN55%2BGRmFAVomGikOiOzG6NnE30b2u&X-Amz-Signature=792ede5368477e1856046a71a7e623619ee9c56be39c5605df8f280c6936ad87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N7IUZV7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCKCrfJ5K0PYYLqmpdXaXbzxgkOhBlUcnq8zANbvDp67AIhAOobknnER6xEge3W9hpgGP%2BbWfDPbID3sCorUS2VwhJ1KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrRsCHKDMrJ0eUqQ8q3ANR6VNCVVWom0zlNzOb%2FRr67Y2eb%2FWyi8C1q0H8pyoc4%2BZIXbCHkXmO%2FkGtidJGF7vOWx5v7Czp4XysLiiJUNz6rHNf52uKkEiJK7KJvzUIUwrM1ONbPV3eFT%2FbuSGKRjkG%2F6iDEPBdyUeAj%2F7D9MqJ4Vpminku6Vw8NbBwWjftcfC5ewqMiaMl%2F6AgD90lswOiasTwdl7Nn1KQhHg2jsCfsp3kBK1AVIsc6Cgpn%2BxUkiBYKSHRILsZ4slPUwJ8TwwHBG8jWZPfvzunJgQ3RRimhnIJvBSw7VtFEiWpPb0bKDijF0Io9NKenxu6icu2dI%2FeFFDuKQkEDlR0c80AZ3YaM6J1H7W5Ucgk9BJE0vFicvTBy7JnSH8cwJC6QnnT7jtKx1XjhqLrOLqLKGH3%2Fc2BcuewschesSn31ryEMfW%2FehdpT2SXndeY6wyw7lWsDPu5B2BaJIyaowL7sa571SwglllrBtu20g7vzpPmT%2FoRV7HtZr9lJjm%2FvntzQruKnOCroY4rRE41UGRPP4eN6R%2BFPk4XmzhAna8GH6wXElF%2BByiuhP5ebts5fYfDvZd%2FC4GLSzlXlo6gnRB2VnDmp8HiFw8AbNq8251jFSof4hWPVc%2B3FkbVm07f0yHQwTDHttHEBjqkAZlN4VuDOxGHYM5FchTuI0HYENSZ65LLBD28rWk%2B51yY8aXStKKS2hlCUR0X%2FHf1LzzfGqwfti8aI3lc8E3ZMa%2BtVLttVC7c3793YZYar8%2Fe4dYnbPpJKywj1PC7Xa48qv%2BiWvCjiGrVtG4lc13ffXocR%2B5uMGN4mQtEUSkOKGXa0LVPLbbiBVKD4Laa2tHN55%2BGRmFAVomGikOiOzG6NnE30b2u&X-Amz-Signature=794f70f376045f32f21c81d209bd9c89d52aad912c7ba707d9a76d66f2753d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N7IUZV7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCKCrfJ5K0PYYLqmpdXaXbzxgkOhBlUcnq8zANbvDp67AIhAOobknnER6xEge3W9hpgGP%2BbWfDPbID3sCorUS2VwhJ1KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrRsCHKDMrJ0eUqQ8q3ANR6VNCVVWom0zlNzOb%2FRr67Y2eb%2FWyi8C1q0H8pyoc4%2BZIXbCHkXmO%2FkGtidJGF7vOWx5v7Czp4XysLiiJUNz6rHNf52uKkEiJK7KJvzUIUwrM1ONbPV3eFT%2FbuSGKRjkG%2F6iDEPBdyUeAj%2F7D9MqJ4Vpminku6Vw8NbBwWjftcfC5ewqMiaMl%2F6AgD90lswOiasTwdl7Nn1KQhHg2jsCfsp3kBK1AVIsc6Cgpn%2BxUkiBYKSHRILsZ4slPUwJ8TwwHBG8jWZPfvzunJgQ3RRimhnIJvBSw7VtFEiWpPb0bKDijF0Io9NKenxu6icu2dI%2FeFFDuKQkEDlR0c80AZ3YaM6J1H7W5Ucgk9BJE0vFicvTBy7JnSH8cwJC6QnnT7jtKx1XjhqLrOLqLKGH3%2Fc2BcuewschesSn31ryEMfW%2FehdpT2SXndeY6wyw7lWsDPu5B2BaJIyaowL7sa571SwglllrBtu20g7vzpPmT%2FoRV7HtZr9lJjm%2FvntzQruKnOCroY4rRE41UGRPP4eN6R%2BFPk4XmzhAna8GH6wXElF%2BByiuhP5ebts5fYfDvZd%2FC4GLSzlXlo6gnRB2VnDmp8HiFw8AbNq8251jFSof4hWPVc%2B3FkbVm07f0yHQwTDHttHEBjqkAZlN4VuDOxGHYM5FchTuI0HYENSZ65LLBD28rWk%2B51yY8aXStKKS2hlCUR0X%2FHf1LzzfGqwfti8aI3lc8E3ZMa%2BtVLttVC7c3793YZYar8%2Fe4dYnbPpJKywj1PC7Xa48qv%2BiWvCjiGrVtG4lc13ffXocR%2B5uMGN4mQtEUSkOKGXa0LVPLbbiBVKD4Laa2tHN55%2BGRmFAVomGikOiOzG6NnE30b2u&X-Amz-Signature=0c4ee3676175dbf1cf25e55631e9ad16a3718e7b6f29e66888e4b4991a5ddddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N7IUZV7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCKCrfJ5K0PYYLqmpdXaXbzxgkOhBlUcnq8zANbvDp67AIhAOobknnER6xEge3W9hpgGP%2BbWfDPbID3sCorUS2VwhJ1KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrRsCHKDMrJ0eUqQ8q3ANR6VNCVVWom0zlNzOb%2FRr67Y2eb%2FWyi8C1q0H8pyoc4%2BZIXbCHkXmO%2FkGtidJGF7vOWx5v7Czp4XysLiiJUNz6rHNf52uKkEiJK7KJvzUIUwrM1ONbPV3eFT%2FbuSGKRjkG%2F6iDEPBdyUeAj%2F7D9MqJ4Vpminku6Vw8NbBwWjftcfC5ewqMiaMl%2F6AgD90lswOiasTwdl7Nn1KQhHg2jsCfsp3kBK1AVIsc6Cgpn%2BxUkiBYKSHRILsZ4slPUwJ8TwwHBG8jWZPfvzunJgQ3RRimhnIJvBSw7VtFEiWpPb0bKDijF0Io9NKenxu6icu2dI%2FeFFDuKQkEDlR0c80AZ3YaM6J1H7W5Ucgk9BJE0vFicvTBy7JnSH8cwJC6QnnT7jtKx1XjhqLrOLqLKGH3%2Fc2BcuewschesSn31ryEMfW%2FehdpT2SXndeY6wyw7lWsDPu5B2BaJIyaowL7sa571SwglllrBtu20g7vzpPmT%2FoRV7HtZr9lJjm%2FvntzQruKnOCroY4rRE41UGRPP4eN6R%2BFPk4XmzhAna8GH6wXElF%2BByiuhP5ebts5fYfDvZd%2FC4GLSzlXlo6gnRB2VnDmp8HiFw8AbNq8251jFSof4hWPVc%2B3FkbVm07f0yHQwTDHttHEBjqkAZlN4VuDOxGHYM5FchTuI0HYENSZ65LLBD28rWk%2B51yY8aXStKKS2hlCUR0X%2FHf1LzzfGqwfti8aI3lc8E3ZMa%2BtVLttVC7c3793YZYar8%2Fe4dYnbPpJKywj1PC7Xa48qv%2BiWvCjiGrVtG4lc13ffXocR%2B5uMGN4mQtEUSkOKGXa0LVPLbbiBVKD4Laa2tHN55%2BGRmFAVomGikOiOzG6NnE30b2u&X-Amz-Signature=fabf3768f7d7e335c81d39b1402c529c19bb10bdc751565d0e83ee687e7830a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N7IUZV7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCKCrfJ5K0PYYLqmpdXaXbzxgkOhBlUcnq8zANbvDp67AIhAOobknnER6xEge3W9hpgGP%2BbWfDPbID3sCorUS2VwhJ1KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrRsCHKDMrJ0eUqQ8q3ANR6VNCVVWom0zlNzOb%2FRr67Y2eb%2FWyi8C1q0H8pyoc4%2BZIXbCHkXmO%2FkGtidJGF7vOWx5v7Czp4XysLiiJUNz6rHNf52uKkEiJK7KJvzUIUwrM1ONbPV3eFT%2FbuSGKRjkG%2F6iDEPBdyUeAj%2F7D9MqJ4Vpminku6Vw8NbBwWjftcfC5ewqMiaMl%2F6AgD90lswOiasTwdl7Nn1KQhHg2jsCfsp3kBK1AVIsc6Cgpn%2BxUkiBYKSHRILsZ4slPUwJ8TwwHBG8jWZPfvzunJgQ3RRimhnIJvBSw7VtFEiWpPb0bKDijF0Io9NKenxu6icu2dI%2FeFFDuKQkEDlR0c80AZ3YaM6J1H7W5Ucgk9BJE0vFicvTBy7JnSH8cwJC6QnnT7jtKx1XjhqLrOLqLKGH3%2Fc2BcuewschesSn31ryEMfW%2FehdpT2SXndeY6wyw7lWsDPu5B2BaJIyaowL7sa571SwglllrBtu20g7vzpPmT%2FoRV7HtZr9lJjm%2FvntzQruKnOCroY4rRE41UGRPP4eN6R%2BFPk4XmzhAna8GH6wXElF%2BByiuhP5ebts5fYfDvZd%2FC4GLSzlXlo6gnRB2VnDmp8HiFw8AbNq8251jFSof4hWPVc%2B3FkbVm07f0yHQwTDHttHEBjqkAZlN4VuDOxGHYM5FchTuI0HYENSZ65LLBD28rWk%2B51yY8aXStKKS2hlCUR0X%2FHf1LzzfGqwfti8aI3lc8E3ZMa%2BtVLttVC7c3793YZYar8%2Fe4dYnbPpJKywj1PC7Xa48qv%2BiWvCjiGrVtG4lc13ffXocR%2B5uMGN4mQtEUSkOKGXa0LVPLbbiBVKD4Laa2tHN55%2BGRmFAVomGikOiOzG6NnE30b2u&X-Amz-Signature=764a57fd2d5d8db4b2840f08d8998806e1df499950778363f00ad377d1ba57f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJUSGODC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQD6odR8tAQcgS%2FzSPRO2ey5KKmvOQx%2FfWoUgEC5JU%2FRsAIhAM7vlbdrgJssjQvkmXeVwmfseudsY63RM%2FAZYRWwpfPfKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5K0J4Ht1rX1piZd0q3AOIj3o15yAF7zJuPAmyHyFsXJrcEFNZOxT5CJjiRXT9Mpd9bAVB6M4XRjcDfD8hPyx3Rp7V3v7%2BUvZKhPXjyfeeO0SWrDzvLAPxGAW%2B8b95%2BDoKIbO1bvRzxypLsMrcVGupOyrlP%2Bl7itVCrQKgmWWiGNTZKxw7vYhk1y996u4ut3DDdptQ9%2BQA4XCB5Q%2FJYD4wQD0sWjkTjezVo3b2NsHmkq9%2Fz8yIbRcYJRlJlDzK6ULUG8l96c70wGCAI1jJDS0VZX17eN96kXkkRKBvRQ%2BD1CgM5zhFgVaYa0%2BmJ45q4YEl6fprOnlGZML7bmIFZF1MnrLN5KwD5%2FO70HVI0OXf2CMIr9B0nowbBk%2F1VIR3cgVzHzUu%2BtgnLqEXWDKtJ9FVUxYPdy6AflHwilrn0DqbiNyL%2BGtfC7OmnQkG3m8Yf8GWDRstJtH10WTPhH2Qc%2FAllfVjuYk0zOymDJSGTCfAOb%2BkjrCSVOUmG0dtpf%2FFSbTUWc4rckqd6S%2B1Dq3juSSJikA2%2FjUozc5IYW18eDCG924OBvfxcs%2FYNfyCkKlmxYHViH99QTNW2%2FRGCcWn6zrAWGIhWf6XqxiiW3CM%2BRVLoDOoa0rZd3YvyfRICWUX50XhXMPzj5%2Fh346xhDDatdHEBjqkAcktMF9J3xx1F7NMlGxcpUgiI%2FxZT6HGCXLF%2FGIVLuh2OP84ceAQ0qBh8srSFtR87AupDilPK5JUALi2FgOn36fz8UdzdnVWdkZmW1Y0XKyPZzGj3UdBM2AIqvHj2nO%2FfgYXoPNHeqXekkNZwS5TetAQ35Dn%2FLtJFTwyX8swBWGvvwOW7j8oAe8BbkjXxocwIlYNzoqYEfd2xo4yL8ZG0Y5sSSZ%2B&X-Amz-Signature=5cdbeec29fe60d98a2f691671c3be96a45edd3a91ea17cd9e594c111856dd3dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4OH3JOM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQC0XcTHUgKdPk61gxzHyMN0gKqMv19DlBHeMoYFf5sPdwIhAOXCSPafnEQVlAi8VNN6hWTTW60J2zyR8QvuCCxZQ06NKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTDk%2Fd8DmfpiLJVZ4q3AP57UJJHimGV8QG90NwTy90El07gVQXCFrop7DIea%2Fg38BmTAUxSpsU7mgClRCzifhGBsGuK2CLo4ZT32SVHVUzKIaMgAHDDZuNvMsPX4p9LXFcVgqebeRDGghq7JRiZeAftdW0l453khYKiHNiRrQUfpJJqK5wIE621pO461jiEwVynyZ100%2BD7xfkE6d46EClD6Y6gYY8HFIUFVRZ9Dqdi3JvAUoU8VZmzq9xT1%2BbPWuz6WHA%2FUc1rNMacNaaPMIdr3gx5XX1q9u7GGT4BA4OdAHVuVie%2BpaKsvIZNuW1ayg8rihQACOFOIaMrcOruBKrVFITYr66hXQnukGqP%2FcU8hhj0OyRmI0Yr8D%2FDPAW6%2Bta%2BDj6v2loxUGu5vpOSAMieuzfOKNcSDNK2NU255n8C71I%2Fs8LBypKlsdudQvR84%2BiL8vo5Yh9Kx8zSmxH6dzCIUBAu3x3VESCzru4xPkIKfSlmByJvrHfBCmZYNSLMP8T9I9hSpJj%2BBp4PMpobJ%2FrdWf%2BCEo9Zds%2BYhV0shQbCLSJtU8UuBrCZjpL7WY%2BWedsylykgvtLMV7WUcg9PXhzUcNK5kNEfkkwCfMfHQLF%2BkUMjAPIoMZxDMjOHqsgG5rCtfCmv5qnD%2B1WSTDMtNHEBjqkAc%2F1KvMOXJeLwEsso9ZerYph1VTd2Vvw4UOUVWPdIYqU8WopouKFRjuvsCyIs4Glcrk%2F2E10DNvz4DvRq3x2nJTVeUyJRW3%2F9SykhG0al0DT3esiBsdTPOzBnXllJkaaO%2BgwrOGLPjv%2F646QX%2FxwkNRi5zMrksZQmW0rOJZfI1bPEuNpguj2Z1XJwxfrCdw0%2FDZKz8aHIHwYCJROGmXFAXzzkeVT&X-Amz-Signature=6d17b08699b25d1ad2c58550604e9394554c66aa6f5841fc0b6acd6190b81833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFGPDNWY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCwj4Z6AqUBgEk9SROi88nyCa18h2D04vcueTXUIRszXwIhAI0mhu0n9O1g5UcvW0gAQfACymks8UE%2Bvdj2qWr8iNyZKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9qbUMb5sZ182%2Bzf8q3AO2Vi6onHZZ4sIFP5OC7kXV7pov4LpFr0TpHlLeqZwGl%2BWaAXfPaJJKrIpjrz186KZ8NfaYmotcyUwO%2F0Pmpx%2B7AGcMeaS%2F8KCyl9nXFAPnWqI4%2BbMMMzx%2Fv2UNJdQBAzwVQJ9QJGfasEz7YfqeQ%2FxM909C739Qi6k%2FMw2hiQPZbuN6%2Fr5Z8AL9JU3cJJA%2BZ1NB4eH6CA9dkq0tJkz1ke%2F4P1a1797fIxCS2dDrhd4VFd0BfkOmDnwGV4IZUhOTGjgTobEttImg5XHN2EwIpfQGQtAJ3opef4OxpoCxvlOa6CTjIuQEFcIVoc%2F%2BUGFQaR2eZXdgeIc%2FYJ20VwzyNW1b8%2Fh7rPYM2aXuHtL0vUzGS4BDmxkZA5HXlfZYltlSjDjmo34%2FY1xs5b5Hsd6tj2NYUtjLWlcIHLb06DFFGTCWfwGEJYI9WTtSlpmUfdtb0i973TCBVXig66ClLCo6oyGaO%2FJNp%2FD1TtEOXmtiQopjbCQomAh1kgDpPvYeOPbWWZslADdzL%2Bu2fZsVS7gmVKedoluaJeVOg65Uki8b7WHm9m5tAUhGUwPsdSOfj%2Fr1GYq0xp0nyGaLZ8cwFeMXJodxknjsJRYEWPgmnQJHxOMLuK0cbW4HKDTuIDjKQTDqtNHEBjqkAQ3v73zzaKbO%2BrpNQ4SsDZL8f1jeCXylj0upNzRy2jBcfhgQdiPZU6UCbNNmlfCW64%2BCOESF0aM7q9jiTn%2FA%2BI%2B%2BX0PNbsacO3fpDjqNB%2F7mu8tnvYVEHbCho027m9hGAUtMFPVeGmAyAINcrINK%2BryhhWp9nfEOBF2WIODXHjmLNWBXhBVApYWo4i%2BRpZPLa1ojzZRE5xXF0B4KOUrjpWX%2Fn3g0&X-Amz-Signature=d4c5d02e620fe6eb100f471c5f6a27c4a9262a47e39649add8ebe1ac757819a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N7IUZV7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCKCrfJ5K0PYYLqmpdXaXbzxgkOhBlUcnq8zANbvDp67AIhAOobknnER6xEge3W9hpgGP%2BbWfDPbID3sCorUS2VwhJ1KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrRsCHKDMrJ0eUqQ8q3ANR6VNCVVWom0zlNzOb%2FRr67Y2eb%2FWyi8C1q0H8pyoc4%2BZIXbCHkXmO%2FkGtidJGF7vOWx5v7Czp4XysLiiJUNz6rHNf52uKkEiJK7KJvzUIUwrM1ONbPV3eFT%2FbuSGKRjkG%2F6iDEPBdyUeAj%2F7D9MqJ4Vpminku6Vw8NbBwWjftcfC5ewqMiaMl%2F6AgD90lswOiasTwdl7Nn1KQhHg2jsCfsp3kBK1AVIsc6Cgpn%2BxUkiBYKSHRILsZ4slPUwJ8TwwHBG8jWZPfvzunJgQ3RRimhnIJvBSw7VtFEiWpPb0bKDijF0Io9NKenxu6icu2dI%2FeFFDuKQkEDlR0c80AZ3YaM6J1H7W5Ucgk9BJE0vFicvTBy7JnSH8cwJC6QnnT7jtKx1XjhqLrOLqLKGH3%2Fc2BcuewschesSn31ryEMfW%2FehdpT2SXndeY6wyw7lWsDPu5B2BaJIyaowL7sa571SwglllrBtu20g7vzpPmT%2FoRV7HtZr9lJjm%2FvntzQruKnOCroY4rRE41UGRPP4eN6R%2BFPk4XmzhAna8GH6wXElF%2BByiuhP5ebts5fYfDvZd%2FC4GLSzlXlo6gnRB2VnDmp8HiFw8AbNq8251jFSof4hWPVc%2B3FkbVm07f0yHQwTDHttHEBjqkAZlN4VuDOxGHYM5FchTuI0HYENSZ65LLBD28rWk%2B51yY8aXStKKS2hlCUR0X%2FHf1LzzfGqwfti8aI3lc8E3ZMa%2BtVLttVC7c3793YZYar8%2Fe4dYnbPpJKywj1PC7Xa48qv%2BiWvCjiGrVtG4lc13ffXocR%2B5uMGN4mQtEUSkOKGXa0LVPLbbiBVKD4Laa2tHN55%2BGRmFAVomGikOiOzG6NnE30b2u&X-Amz-Signature=f32a7e998dd70936d444a8a2ab270eaa61a093af2d6c235121c349920b85326e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TURFGLU7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDLCPAmbh3PzH3ZsIywwk2rCcWZ%2FJQMWk5INj15EWcKcgIgXzgBLh%2BlJZDQtqz986AoT%2Fquvl%2FaAUzbWf8lC2uVUkUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwz3mlgp%2BZyoj9HvyrcA0kWGQAPVNVn7wQUcKjYv5TSv5vmjOk3fbsULLcvs8PFFMvFTIyvfHWBlHKcSr%2BOPsmruLYPxlulZG3wumYSzXayMd2uEio1VObpbMyM3HXT7RfrM4sVFGJ3hQE3TPFM%2FkCH4%2FXBNkp27ifogq417vqyD1xqcsZcvB7MXccUuFlhMN5jb00D1OmsOcmIZIGeYleXDrKtfEmuMvfoCt2oXZ1meMiUWwAxSglf4uHUHHorPjO0CwjGZlHinGyin1xe2MvncJ2nSYoZXxcYy3VtD1gOsKXUG7lRSLNBvcXOGzYr5kvNe8%2FMvw%2BQtV0FJ%2FPVB2n3QtHT2G%2FX4x3igwnAYxVLSQNdCPVFs9TpoG3dO7sFfbQYLb%2Fmlpf5t0MBwhygyi%2FxLmzmdhMbfi2eKxkmsK4EgSnU%2B9RNT1v82aInJc7wjoEpdlgRnazbpqDlT%2BX3fajobDcPj8YVebQ64kfpoU0xuilicVp0JZdbJiWl7yqy%2BFc09l6seJRZC4aUux%2FeWPPGM4OQTfRGlNulejlnSH04gmSEm5skiLiqM1O1yLJfJDkeHNShGRxzt%2Bk%2BxmG1VBsQlkR5TmNsOIYTU150AVLvhfnZZxRHhGAa%2Bebw6OOWKRTLYVYSjhDSWAp7MM200cQGOqUBc75j9QnbxN7yxTmi11UEeRVTbNIn364JfP5zMBkWCe8BuCuZzOiP%2BiEw%2BIYSmgn67nkBJamBjz4X2cidtCAbzyAWIgn89JYotZivdFa07k7a%2FJyChZ5%2BsRllX1ElNKD5EdkX1p%2FclQ0xLwCLJaXRpIEB2wTtokD9cSi8CVHGZ9rRWmoEYROuqZtHPy2h51klQO180JbfEl65iMBkwAXldx%2FnCWqM&X-Amz-Signature=8f315d2d8e5f80f06974c8f319ac837dabf5bb7a1b83a16fa6d0cb7fc5dcefe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N7IUZV7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCKCrfJ5K0PYYLqmpdXaXbzxgkOhBlUcnq8zANbvDp67AIhAOobknnER6xEge3W9hpgGP%2BbWfDPbID3sCorUS2VwhJ1KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrRsCHKDMrJ0eUqQ8q3ANR6VNCVVWom0zlNzOb%2FRr67Y2eb%2FWyi8C1q0H8pyoc4%2BZIXbCHkXmO%2FkGtidJGF7vOWx5v7Czp4XysLiiJUNz6rHNf52uKkEiJK7KJvzUIUwrM1ONbPV3eFT%2FbuSGKRjkG%2F6iDEPBdyUeAj%2F7D9MqJ4Vpminku6Vw8NbBwWjftcfC5ewqMiaMl%2F6AgD90lswOiasTwdl7Nn1KQhHg2jsCfsp3kBK1AVIsc6Cgpn%2BxUkiBYKSHRILsZ4slPUwJ8TwwHBG8jWZPfvzunJgQ3RRimhnIJvBSw7VtFEiWpPb0bKDijF0Io9NKenxu6icu2dI%2FeFFDuKQkEDlR0c80AZ3YaM6J1H7W5Ucgk9BJE0vFicvTBy7JnSH8cwJC6QnnT7jtKx1XjhqLrOLqLKGH3%2Fc2BcuewschesSn31ryEMfW%2FehdpT2SXndeY6wyw7lWsDPu5B2BaJIyaowL7sa571SwglllrBtu20g7vzpPmT%2FoRV7HtZr9lJjm%2FvntzQruKnOCroY4rRE41UGRPP4eN6R%2BFPk4XmzhAna8GH6wXElF%2BByiuhP5ebts5fYfDvZd%2FC4GLSzlXlo6gnRB2VnDmp8HiFw8AbNq8251jFSof4hWPVc%2B3FkbVm07f0yHQwTDHttHEBjqkAZlN4VuDOxGHYM5FchTuI0HYENSZ65LLBD28rWk%2B51yY8aXStKKS2hlCUR0X%2FHf1LzzfGqwfti8aI3lc8E3ZMa%2BtVLttVC7c3793YZYar8%2Fe4dYnbPpJKywj1PC7Xa48qv%2BiWvCjiGrVtG4lc13ffXocR%2B5uMGN4mQtEUSkOKGXa0LVPLbbiBVKD4Laa2tHN55%2BGRmFAVomGikOiOzG6NnE30b2u&X-Amz-Signature=fb2e9261b0f92758f16673c06035ec30b6f4856a8ef755afa00302298b2d667b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKXUNMVD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIFBVWzTsinASJ0kP34zMx%2ByC1Rn66B9vEASBQXVZVhpjAiEAibVpoxFHW9Rsjv1cJUl9JC78mvdLBDWn%2BK8HbyYUp94qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmAIopNIfk90blJSyrcA4IJIbaq2eOg9NYG0s4qaG7F5%2BmKe8PCsjcAJ%2BHG%2FuHveGrm%2FkK1a5t2DUoqN3xThOsfpl26wAqAaVGxx5ewEwSqROyjl1hCzxA5FWyVUzLt3qWcC91Cuwuu9D9XdaxB8EZOnwirv%2BW0orr1EtTjanTOXYk7aocNz91a%2BX83IOqnE7cIUIE961TQJ5P%2Bb0ZxZ4gkkCachPrpax7k5A1vg%2BBrlZ8PwhZ%2FWgJ0fUcF1iWB%2Fzyz9AwGR%2FYvUksjnHTmLDbJLExsofzBhvqwbGceyrwJJImTlBWmcHZj2naXaXOw1J64hsWIh32aL%2FeBnh1OGV9dH7KVTKvKFeJTTIcpUd%2FA1ObdDwXyTCQzWgqkSTc1s203nBIIpqR4wK4rgfdU2L%2F5G5d0SfTyWa1w1h%2BG5px0JRbAicenMZXlmVGX92V3Fj5ance5OiR1kwGTimpOYvvkeDu76luARgy7RgpNYEILb1pOO58ebdhptlfe5njJc0d3dKS8VINI8%2BzD4FnMeSvq5sOD%2BXX0pcfOd7%2FcJe5brcIjdx1Jc2Z5vSzzfJyXQegzkTGdhO1UE6I0FonnicKgx8CEvdhW%2FmuS381Br34%2FqwHsxg9VINlIsWdNsaAWVluW8%2FxQG%2Fj4njrXMPa00cQGOqUBiqH%2FkTC%2FBZvhILcbYNnUEMeQSn1%2FPYpH%2FnUpxVu%2BbCyuJdwb2xPVo28gynpD32pggyy5WkNsi3UK0o5YZp8r18G3M5E0lz64H%2FDylHIJPKYbqIy30xwO21HaJaGQ9mn0P8AKlvE6xsLj%2Fi0n4k%2F0caSKE6pq2IsO0j2%2F53%2BfG6uLXPMpVSFb4nGr2A%2FeEPMNGKSZY%2Fav51CVZeKkGOVpRBfdjNvU&X-Amz-Signature=bd032b045c00b4e8645a04bc1f1b1b269b009406f237b564201a9df378663f64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N7IUZV7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCKCrfJ5K0PYYLqmpdXaXbzxgkOhBlUcnq8zANbvDp67AIhAOobknnER6xEge3W9hpgGP%2BbWfDPbID3sCorUS2VwhJ1KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrRsCHKDMrJ0eUqQ8q3ANR6VNCVVWom0zlNzOb%2FRr67Y2eb%2FWyi8C1q0H8pyoc4%2BZIXbCHkXmO%2FkGtidJGF7vOWx5v7Czp4XysLiiJUNz6rHNf52uKkEiJK7KJvzUIUwrM1ONbPV3eFT%2FbuSGKRjkG%2F6iDEPBdyUeAj%2F7D9MqJ4Vpminku6Vw8NbBwWjftcfC5ewqMiaMl%2F6AgD90lswOiasTwdl7Nn1KQhHg2jsCfsp3kBK1AVIsc6Cgpn%2BxUkiBYKSHRILsZ4slPUwJ8TwwHBG8jWZPfvzunJgQ3RRimhnIJvBSw7VtFEiWpPb0bKDijF0Io9NKenxu6icu2dI%2FeFFDuKQkEDlR0c80AZ3YaM6J1H7W5Ucgk9BJE0vFicvTBy7JnSH8cwJC6QnnT7jtKx1XjhqLrOLqLKGH3%2Fc2BcuewschesSn31ryEMfW%2FehdpT2SXndeY6wyw7lWsDPu5B2BaJIyaowL7sa571SwglllrBtu20g7vzpPmT%2FoRV7HtZr9lJjm%2FvntzQruKnOCroY4rRE41UGRPP4eN6R%2BFPk4XmzhAna8GH6wXElF%2BByiuhP5ebts5fYfDvZd%2FC4GLSzlXlo6gnRB2VnDmp8HiFw8AbNq8251jFSof4hWPVc%2B3FkbVm07f0yHQwTDHttHEBjqkAZlN4VuDOxGHYM5FchTuI0HYENSZ65LLBD28rWk%2B51yY8aXStKKS2hlCUR0X%2FHf1LzzfGqwfti8aI3lc8E3ZMa%2BtVLttVC7c3793YZYar8%2Fe4dYnbPpJKywj1PC7Xa48qv%2BiWvCjiGrVtG4lc13ffXocR%2B5uMGN4mQtEUSkOKGXa0LVPLbbiBVKD4Laa2tHN55%2BGRmFAVomGikOiOzG6NnE30b2u&X-Amz-Signature=531dd98682ed6433094db122344df3d331cd00e7638dd5ba0cd288dde3f5b16d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD3CUDBM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDCWKlZwnOOKJO3lut0M5VJoh5PSDNElb1FClobSdwAvQIhAOVKmomX2TaKVMH8r3t1z3iHT2oTAlLjOsC%2BCfWacivwKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFflzfl3I5%2FMzgRN0q3AMGp73Yp%2Ffn8h17jS%2Bf8pVQV7KUJ503gAopapudprDswGHg8ZVKhsmpepQUiVSrsJbgIVRa2JyeCIvI90DQZFwr%2Buz8hCLZP8DtdPcy9cEEElBiISmJSAvBFtGf98Owc4yxciylf%2BcC5DbPPlsR1yT%2BZG2J9PdfyCRrct6ALOAJFiYL1mUUeNyUqn4r2YQaRq1c%2BaK1OOUOPvVM76zt2xuCg82Hd96EKbvjAeiWJAZRlzbBKH0eWWQ9ILqdGteMZSeOhs4jv4WMX11XHlvqA7NV1j6A3W4OOw9UOJuvuIkWmy2B6n0bD0L6zLWBCFzYDdJeM0%2B9aIyp%2FBlfMfVdEuiqbXMJJGNsk5%2FuExoeq1%2BVHvxdmsqTW8DNyeQCKCrDf%2FsSQ6R3lX3X%2BFDnh%2FmUGOHUkGmE%2F4GnzHGVXiS1dSxX1OkkNbwrCHWCIQTmYS2FfJTI5KyHNk23MsTMQgcNpbhA%2FBF3cKu3KyHv8isL%2BIHUW3JxIrPsDRI4Kw6fYTCWvLiQKtmdXmCPW6BjhxuwzUKS9wAyC0TGyn6Yecij8n5y3fb1be5m%2B8FdLcViYNx6UYEm2uQBU3SIKF64D0a5MWLN46KyO0Qrw%2F9KtOtmyLM3hp1mBIY97l7wl%2BV9HDDstNHEBjqkASqO%2BXb3J97BpqXTFUIlc%2B4IbWYp4XFhZj8xnCm5UhJTj%2FJcAMHNmUdlqraNmHO5KgeAf1AfnpUa0Cw3TFGeXNH%2BLeWyW3O17nBlBzXbj5TfnODYMhST0d8wyrS%2Fd5m7%2Fwtpa7mwGmGqYg%2Bpoj8l4ATLgtdpb9UvtlsdrMr7zVtFBERk1JLEjLfwemh0P9j7y9uY6C1vmiP5rKnkE8XM7XCqYfum&X-Amz-Signature=279cd150438c5bd43a366c376b03f6882b89693940c8200a9383a15187509f7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N7IUZV7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCKCrfJ5K0PYYLqmpdXaXbzxgkOhBlUcnq8zANbvDp67AIhAOobknnER6xEge3W9hpgGP%2BbWfDPbID3sCorUS2VwhJ1KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrRsCHKDMrJ0eUqQ8q3ANR6VNCVVWom0zlNzOb%2FRr67Y2eb%2FWyi8C1q0H8pyoc4%2BZIXbCHkXmO%2FkGtidJGF7vOWx5v7Czp4XysLiiJUNz6rHNf52uKkEiJK7KJvzUIUwrM1ONbPV3eFT%2FbuSGKRjkG%2F6iDEPBdyUeAj%2F7D9MqJ4Vpminku6Vw8NbBwWjftcfC5ewqMiaMl%2F6AgD90lswOiasTwdl7Nn1KQhHg2jsCfsp3kBK1AVIsc6Cgpn%2BxUkiBYKSHRILsZ4slPUwJ8TwwHBG8jWZPfvzunJgQ3RRimhnIJvBSw7VtFEiWpPb0bKDijF0Io9NKenxu6icu2dI%2FeFFDuKQkEDlR0c80AZ3YaM6J1H7W5Ucgk9BJE0vFicvTBy7JnSH8cwJC6QnnT7jtKx1XjhqLrOLqLKGH3%2Fc2BcuewschesSn31ryEMfW%2FehdpT2SXndeY6wyw7lWsDPu5B2BaJIyaowL7sa571SwglllrBtu20g7vzpPmT%2FoRV7HtZr9lJjm%2FvntzQruKnOCroY4rRE41UGRPP4eN6R%2BFPk4XmzhAna8GH6wXElF%2BByiuhP5ebts5fYfDvZd%2FC4GLSzlXlo6gnRB2VnDmp8HiFw8AbNq8251jFSof4hWPVc%2B3FkbVm07f0yHQwTDHttHEBjqkAZlN4VuDOxGHYM5FchTuI0HYENSZ65LLBD28rWk%2B51yY8aXStKKS2hlCUR0X%2FHf1LzzfGqwfti8aI3lc8E3ZMa%2BtVLttVC7c3793YZYar8%2Fe4dYnbPpJKywj1PC7Xa48qv%2BiWvCjiGrVtG4lc13ffXocR%2B5uMGN4mQtEUSkOKGXa0LVPLbbiBVKD4Laa2tHN55%2BGRmFAVomGikOiOzG6NnE30b2u&X-Amz-Signature=c8e757ba4890cfa7eb816140270f5152d04d1f2bb8b1f72b55282b770fedc088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZP5GUSK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDpuCmfS6CwVyqQe6q%2BeAxsVmtEz3wzPdxbUtiSM9wDBQIhAIowAHbxQhjY6J4Zpizl%2BrLAtuEfUVqz%2FWo%2BF5p4OFgqKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2bvwwtz2bNzsGT1Yq3AMUj9OFYGUDZjgYTxEXAHMSHO%2BcTR%2FRb%2BGdc8VXF0lHvdbhZkt4jq3evpxVEKuXxNdBzwGwJSrFZyWsGzyJQ3J307mhFqUT%2BoFsAE9s5mBzsxwSa6MMoKAlkklyPJkuzBbDZF1r3%2BB8iQ21C9C8M7oPZ23WYWZQ5f%2BCbvf5X4BzP9ekRmHOAx%2FvWPELHSkxl4dH49FyZjKxWfJuTyufRa8ItmmQrLpLI9%2FdDRUgtiqz3sFKUaejzzTvDXo8tKgaYJi6KcnoQQCDPQANpDMHVaH606atLz94n%2F0j8lOB0mQx8qcn3z3U4CuGTUjDItnIBFFL3YY0sT4gtDzCvNnxxJo5ACcT%2Ft%2BEb%2BQzbNbeht4iGOW8a36gRLtbPgyrfd6TDH0k1%2BxFe4XUu02AtRW7Hn%2BfgpHJ6RIsJF%2BcmP7%2BdkYHFVDSP3s7sWxmiEwR7KKYt4ZUBZzCmguIH0P2OvUf2FPwj3k%2BA1t7Ghk5cC0GBJTuH8qdt5O1DPHAp7WvXyqRGYl4jLjZqOoBYH1MR%2F7ExzbtAZhOL7oSfj2hXyMNAh8LPu4XCDVMKhqCpNF8VaufIiMKz5U6DyF1sKsqjJZmvsWAb9O7AH4Ae1H0TvYtJb3Vm5g1rwauTZavxqgKLjDKttHEBjqkAVDLYBSaICtJxHphqg2Hfgb0Gn9bnhnrKFF%2FddMN3c26C%2BgOpHcUa7dpr3Nrd2HYYrGqnJdCamMHvcE8H30gFJYTP02UmkEy%2B8vk3eq1l00FpOpCoutOgllj6BSxe%2FPNjgQyovw18b41VsEB3ZWPg0qailtz3NsHWZmcWuVeSfmw2MwkefbBCWkMzAiyr6Jch%2FUm2NQJFBoPKvtSDc30b%2BNp833p&X-Amz-Signature=91077a9d0a9fcd7aa30b154fd84abc28c9cd4d6eadf956992358dcb8eee8e4a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS7PKGBJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQD3bWODtSWaV9bbEoDw59G2S9DFq9T5ahaoOipSFmL%2FXwIgaIyfuJXFz1g1LdN%2F9%2BKOcEVdwxIbKjmyRa2Le62rTu0qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLglKxrSRcKEaYBfvyrcA%2BjWrparDeGcQUmOF3xoRrb6RNtw%2BTsKznlxUdP4ReXSVv4O1L2H5xdUDskCMe6DYgTV9qDLWWSI9upm8kjt%2FcluwHlh%2By4mmQWBSOjCyGol%2BXiCbEtpjpQx1XCNUdoiZbyM84gKKkt3c7lRveLneQ1j%2Bd2dPRkCLJ9zjzXcGncWOAIfGZapcu7ATzlrB%2FbBMnmwZyrzdTyJzTwG5tsVg6zGK%2F6PHGNpWU9enf8OXylvkfoX7u69mHXnW2lTKdzVa1jc%2FMVxLn8IceZdBiIE8h9GXhQWlDttOxHM5bWSt1iwTyycG%2BCLFY1A9%2F7n85I7KLbQAsTWL%2BcUIwG9Tc1%2FeMgeTb%2BIeIT8Ah56jy1rIhL3NRan%2FhUGgB8QvqvwcgitqqqQt0K%2BR7AM0yYeAbNIWNPd0b43kSzWl2uS5VP1XP5%2FnLxkyHsd5DA%2FruHBPInZ2iUZRm7oST0GyfMyh3hMCEkImtGRHIUwvSAdwqv3e9bR9rhVBNf7%2BhFxBdsqccvf25e72b05r4tKRGvTEIzDaJPPneRi%2BG1hAmJTZlz0TO5mrhYRMi%2BL5F12xnnpmqaoWvQnc3MQJvi9rnheioqdTiJBaccmQQgVLeDbZxTHBmghtNeTG0sLMC8aBEGWMPG10cQGOqUB%2FRVXRUYX3WM2T3cfUHXVceGAg8X6WyvP%2FmCD7vbGuNrJ7TM3%2BaZRIz2X8bp7KaRWJjtQ5Q6AlO1O7pnk0ewvyt8ag6aAIj8LbOObq6CcyrtEj6JFtYYW7OWeICKpbIDQoKTKNG7S1WjRChBD%2Fk2T8PsuIF4uz0sqtaCx%2Bl7e%2BS6G0%2BuyLSRgUcRjtpHMRMNoFw%2BntetaMj8WHJVorJIwRI%2FT51mD&X-Amz-Signature=11873bcdccee9f8073a4d76c06a94ebb0e89934d6f20995235e84bb2f5010bde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQTA3CT5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIATONpY%2BbRZ1UmiZOe9zSSeR2BVmETyFNbwF4Ola7OKiAiEAynFuVFbY0FhQKFGPMhmTgaPHUPIh0uAVXyD93D%2Fb9%2F0qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI212611ScfMQjxiqCrcA7dVMUj7trH7P9T149ATebT9a9La6sY5bIz1ALC0%2FITYClNOYaaAX2zbNQVfQuywU%2F6xOKXbFHiuiNwREVDv2Jxw5cdcJ5nJC1ztjlF1RbpLQNIFPbRlHHNvSGUdUmph2pucwFvv4fjMuJVPlj0UdHqiYFCr%2FBGdWG0xWEatiDJqHk%2FQUH5VF95%2FzFsxYjaoLG%2FotqWChCKOWXZUc9aXcUVPANsAoc8A%2BuQMuPXy5Xk%2FeUz3XSHpcs%2BhSlZ1DBWJWCpDa5jPFZohJDCnuM9zDyGI8WpDk22M1pwgjV%2Bl4ZKHc2V%2FFWr5KKO2ch6jC3jE4CjpX1oHCtMmbrDSd7Fqi7Lcfhl3fgc5hPTWt%2F7YkhZEb7suZ43YGURP3Z9TQVSGEPZoSZM7UjKWyEWpDgqctiMY9Z3WKKBFgzve3XW8%2BLcrp87zpryMmbs2H4JDZB1iZ6hbXPe3Jsqj4ZWOdtxoPapi2Kwf7XdBXPv0h1qUisRGmMInZ7L5OuhtKm7GN%2BUSAgBR8jtfcJSm%2BTQZlPSWgAF1PQpVGFL37W6uG6RhcVE51uvIE1coFtuw64%2F1BWEFjmhtLo8W4RBG5eQ5OvYS1gmzVbtfvgXgZ0PzvDCAgviuH7Rpvu6MPRZ3UwC5MPi00cQGOqUBPL7zPqLrfFiszB3FUwaVv2W%2BGamoVt%2Fds8S9B0xVUAwvNjK69DfG7NvNZS6D2Wv6Ldyx2bbBmGgjwhbXaAI7cjmNUp2G5KJQDh66QT0KcUuE74c4VtdF8cERBmmVoY2h0xiX2WxNIHNYEPcLDp%2BzzpmMUwxySC6OSZXdPQSMCEwrbuCDLd4pRWdYb2oY8EPmZsDzwpEqh2ew5f2xfSZit%2BP7SWf4&X-Amz-Signature=df7c6b8198556714561d93ac6ac52f34ce00e32a4e8921ab39089911893539ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VL7NQU4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGKQrM0PRWsIDBF4Rm2S2Rs1Ohr8JlZLRPNaq0aSEaVqAiEAhA5s4u1oCWWxinyBcoGov97C6JPp4rc0oOtZevVIGO0qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEJcm4Dd0IAigBm1ircA2DoCDCbGtal%2B0FuLFNTFDH05tPfv1dWPIK1pHIWxsBHVOinjs6oftqALnIUw9aBVfeUiQgEOUyVdCwGuaiVQ8bYQqdoMNKRAYv9kHm4hfrSBcgk%2BI23Qa9OcP0flKdInBMF9r8f7Qy6mFcvWQsu0BN1Do7ohfWPtX0NCZxxAbly4zhFAgnVwL4E6jUo%2BZcw3NgfETTGcOR9b%2Bx4B9UUGAq8TDRnA7ET49zJ%2FicE9vSJN%2FbWP2YskOQbY%2BO0SjFOOUqeRRVCfJ5cvsb2k5sUwQXK1MIcDIQb%2BJAou6yTh1Cvl5esS50hUcUSnZK6iDr1tvRO8vWSCMU%2FX2LPx6iGbQtDAFb3m%2FYWD%2Frgx1OPZNf0yJckF3CClBejaKOtovrX1t1JbY%2B%2FepObzMU7TPy%2FqAbAgQxFBIfFZDAnacEmW6tbvtiTwrDfrkXUu4Kr3AJE8b7PhA9XrQFgWR7m8Kt9qVvmyh5y1%2BEVsnOcyvQizFN6qH25FkcT2IWDMy4jlGN5EcJ2xtA7%2B%2BcUMKfVQysD2hWulQMOfdrq%2BWeaNPuzMYubEara1OYaZkJ3o7brGs819F%2FJ9xrTgZvnE2c9kW3oKWNpUCCkdAN4q0EH%2F25mEis7GI9d7LdD7xaTun1IMPm10cQGOqUBzJv2XcGnh6Uw%2B5tP46SmCps8FPn5UMhT71w8ehQT9sDd7Iym0YeFtFVHIjv2FWeXtjmbVOl9q03%2F9CRzj1rHmq17KKKphDRajtQ5JCU4l9BSmKwvN76NVUxsgBJo4YmBEWLzNgQGvdVOlNtJPKQ60kBQPq5n%2BQf7wfhdlKi3qnu9OwPYsdHC7qpE8NIAwR%2FkPP6CLLXtrIbop5jzU%2B%2FvZvZ%2FzL5f&X-Amz-Signature=1d5d6bcd6a39444d780626a4e2d41400eaf19b6ca45fe3c1db77a9530fea13f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HAEDWPA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCICg50ACZWPvquvANLkkKnGSL%2BVWYTYYbuS566hp0LFLNAiEAxRwxQy8fRvTDup%2FdBgs5qicnW7L42tsdwrAbWQFVcOMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAETas9MSn4H0KiN0CrcA5BCWcsccNd4dB8py2TbKrG1KsSk7FBCjwPPyUmLBLQc5Pv9%2BqK94h4Koys6eTGZAv52dY6DwhqWVpHgfa1fxGDk5VCo%2FWqZ7qpW0EDmN5w5gCMbXq9Vb87ej5llHgrYQeyGQE3AWitnuQ%2BagqUbleRu52qkTlKMw9jX3N3GmnnQUn5YvVzp6XkVLKFt2dnR0QZqcvu3tdsqvlSFT1v4JqR4jL04banUE4Qvwx2M%2FAGNIrTJ9zNQ04TIb%2BbuJQrtWx3BAdP%2Bt0xjBql%2Fn2c%2FmX2wW1lrf2NBfvcfKZnjXDFIsoIfF6bp%2BE6xjMIIBbq6zBqO%2B3YWTY%2FO1v7tHnCAXtA%2FkeWSBEN%2ByxxTbHOWog7O3c2v9rxOA55urSL7hnkertCaPSeGYDIapyqV%2FUH9fvmlm57RmesW2tfKgRqCA4BcFsa7kl0FT4pVBXMAynr3FVLKGziEzuVlQf%2Fa5SEbJj6p1vH6LNtDi0lA3NO%2BSlzWSsKQZGdinJW7QURq3qYQboaHQdBq2Y77p59%2BvoHrf2GhFx5xOyg1XYPGEVkFd01FUDiP3kTxVKkBJxpeiRXlN4YAAiXLi8rIM4FYQvxRqZCPQKCCRXrhtFqj69b8GCjrYCybsD28DGpSliZgMMi10cQGOqUBzwOyoEQ61HyHVOsy2GPfvh7xUvAuqgHi8QYBk7QbPzBSGyolanmW%2BrrrBqjWXYPaItYbdezVNwoucJChj95kbOQMHVbasosQgZJqatRyS%2FgXrEYEm4g%2BCJVJr3%2F8tD5MDcRbanWfC2zJClIb6iw7MFOHOdUBt1%2Fg40MkasbGH9AjtJGRN2j5rH2XwpvViBwLsjN%2Fa0WDBGAurSCiOPZ7jladb0ux&X-Amz-Signature=d7cc10139b74422002d1d377b29244aae4024a45a3e2616c57ab7edb363e6746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N7IUZV7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCKCrfJ5K0PYYLqmpdXaXbzxgkOhBlUcnq8zANbvDp67AIhAOobknnER6xEge3W9hpgGP%2BbWfDPbID3sCorUS2VwhJ1KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrRsCHKDMrJ0eUqQ8q3ANR6VNCVVWom0zlNzOb%2FRr67Y2eb%2FWyi8C1q0H8pyoc4%2BZIXbCHkXmO%2FkGtidJGF7vOWx5v7Czp4XysLiiJUNz6rHNf52uKkEiJK7KJvzUIUwrM1ONbPV3eFT%2FbuSGKRjkG%2F6iDEPBdyUeAj%2F7D9MqJ4Vpminku6Vw8NbBwWjftcfC5ewqMiaMl%2F6AgD90lswOiasTwdl7Nn1KQhHg2jsCfsp3kBK1AVIsc6Cgpn%2BxUkiBYKSHRILsZ4slPUwJ8TwwHBG8jWZPfvzunJgQ3RRimhnIJvBSw7VtFEiWpPb0bKDijF0Io9NKenxu6icu2dI%2FeFFDuKQkEDlR0c80AZ3YaM6J1H7W5Ucgk9BJE0vFicvTBy7JnSH8cwJC6QnnT7jtKx1XjhqLrOLqLKGH3%2Fc2BcuewschesSn31ryEMfW%2FehdpT2SXndeY6wyw7lWsDPu5B2BaJIyaowL7sa571SwglllrBtu20g7vzpPmT%2FoRV7HtZr9lJjm%2FvntzQruKnOCroY4rRE41UGRPP4eN6R%2BFPk4XmzhAna8GH6wXElF%2BByiuhP5ebts5fYfDvZd%2FC4GLSzlXlo6gnRB2VnDmp8HiFw8AbNq8251jFSof4hWPVc%2B3FkbVm07f0yHQwTDHttHEBjqkAZlN4VuDOxGHYM5FchTuI0HYENSZ65LLBD28rWk%2B51yY8aXStKKS2hlCUR0X%2FHf1LzzfGqwfti8aI3lc8E3ZMa%2BtVLttVC7c3793YZYar8%2Fe4dYnbPpJKywj1PC7Xa48qv%2BiWvCjiGrVtG4lc13ffXocR%2B5uMGN4mQtEUSkOKGXa0LVPLbbiBVKD4Laa2tHN55%2BGRmFAVomGikOiOzG6NnE30b2u&X-Amz-Signature=cc33b9c61a28d0065ce1f8c5e1d860a1ad097e7992e4c65f1bead516d0e10457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N7IUZV7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCKCrfJ5K0PYYLqmpdXaXbzxgkOhBlUcnq8zANbvDp67AIhAOobknnER6xEge3W9hpgGP%2BbWfDPbID3sCorUS2VwhJ1KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrRsCHKDMrJ0eUqQ8q3ANR6VNCVVWom0zlNzOb%2FRr67Y2eb%2FWyi8C1q0H8pyoc4%2BZIXbCHkXmO%2FkGtidJGF7vOWx5v7Czp4XysLiiJUNz6rHNf52uKkEiJK7KJvzUIUwrM1ONbPV3eFT%2FbuSGKRjkG%2F6iDEPBdyUeAj%2F7D9MqJ4Vpminku6Vw8NbBwWjftcfC5ewqMiaMl%2F6AgD90lswOiasTwdl7Nn1KQhHg2jsCfsp3kBK1AVIsc6Cgpn%2BxUkiBYKSHRILsZ4slPUwJ8TwwHBG8jWZPfvzunJgQ3RRimhnIJvBSw7VtFEiWpPb0bKDijF0Io9NKenxu6icu2dI%2FeFFDuKQkEDlR0c80AZ3YaM6J1H7W5Ucgk9BJE0vFicvTBy7JnSH8cwJC6QnnT7jtKx1XjhqLrOLqLKGH3%2Fc2BcuewschesSn31ryEMfW%2FehdpT2SXndeY6wyw7lWsDPu5B2BaJIyaowL7sa571SwglllrBtu20g7vzpPmT%2FoRV7HtZr9lJjm%2FvntzQruKnOCroY4rRE41UGRPP4eN6R%2BFPk4XmzhAna8GH6wXElF%2BByiuhP5ebts5fYfDvZd%2FC4GLSzlXlo6gnRB2VnDmp8HiFw8AbNq8251jFSof4hWPVc%2B3FkbVm07f0yHQwTDHttHEBjqkAZlN4VuDOxGHYM5FchTuI0HYENSZ65LLBD28rWk%2B51yY8aXStKKS2hlCUR0X%2FHf1LzzfGqwfti8aI3lc8E3ZMa%2BtVLttVC7c3793YZYar8%2Fe4dYnbPpJKywj1PC7Xa48qv%2BiWvCjiGrVtG4lc13ffXocR%2B5uMGN4mQtEUSkOKGXa0LVPLbbiBVKD4Laa2tHN55%2BGRmFAVomGikOiOzG6NnE30b2u&X-Amz-Signature=e100d3813d3e17fe7b446986d742a865f20e4805787463b6a77d6eb1f1d4ebcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTXA5RVC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCqGw%2FVzbsEhcpqY5XZnUeZwASsfIhtq1MionQHxgaiVAIgBzq2vPXeB1y1gSu1TT%2FmXqzAwWA6R8MqZbcLTxqCUvAqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLtZgEMr2UlVnYOKSrcA4ZZ0qtyA0clskA44Id4NqWkXLIwud1ChC%2FJlQQp1xQAtawfI2HYOqg2PMtYthiLHQ%2FeVaXIAVd1alvooNBQjEs1T5ADA4s9SLyTDeT04ORX3as2CngO3mi922di5B3QBniwt0%2BtYwDypq%2FWlzsmpb14dBX4Xqo8NXMPqUdWT7g4mNI5s6TKCt2RCncNFq2sqsH9Ez%2FdIXVnO6ewUsRfODJRZG4ZJKHzMgCNZZQ5lgpxQW4HrzMqr1%2FyStqpUChwlRIBopCmwXSXs7QzO%2BZB9OogBNgkJSeXEf%2FoBLhGsGwfVbUpuVatey%2BeYIP13OL7STzyVgcgwoeMUfdDzRSJhc2mRDlV%2BJ2cTHvmW4MaIXGDHAF9Z7g%2B9ZmuCwwaEguxpCONQrXamZm9NuzSknqoX94HyAZyNCkYK%2FiWPaoB3TyodKLz40qf5y0qp8HO2WBsUXBebObcNX0Zei%2F%2FU2cWQhrtnpYICJ5XyQvR459c9Vz3pDfdJDEPkULhGMZUE8c2P8OoBmy%2FKmdLZkIbP9dyiepjH254J8bQagDAaZlQzFBNy3CoNYWmusEIIQarZ3FiXbN%2BpX1mvqFzRD6EQUvAbhMcx%2Fww67ncpI2wte7xlPJmOu%2F7tFoGRjXQEgtjMIC10cQGOqUBnBFTXhxWtbEsibo7pOO3I4aOwCRlZlh6LjvLhsyX%2FXW9jgA7GRfW9vRPjKVhfNoGjevsj3cbY0ZvctKFsmlYuE5Rnb%2F0YomrJmf%2FiFctPovEBwCCxi2RbY6HoNer3n2dFxsX9ig%2FhfHrqbvHfgshK6qTWiExHHy0vqqvQPMpb80XQ5pGELFcW8qmffUpRHgPTZ5zZx%2B9ND%2BagN4an1fLvdvTOHdB&X-Amz-Signature=43d25b69176b6fef549ea81e1147da10618292ede0799f9278ee021fefee29a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTXA5RVC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCqGw%2FVzbsEhcpqY5XZnUeZwASsfIhtq1MionQHxgaiVAIgBzq2vPXeB1y1gSu1TT%2FmXqzAwWA6R8MqZbcLTxqCUvAqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLtZgEMr2UlVnYOKSrcA4ZZ0qtyA0clskA44Id4NqWkXLIwud1ChC%2FJlQQp1xQAtawfI2HYOqg2PMtYthiLHQ%2FeVaXIAVd1alvooNBQjEs1T5ADA4s9SLyTDeT04ORX3as2CngO3mi922di5B3QBniwt0%2BtYwDypq%2FWlzsmpb14dBX4Xqo8NXMPqUdWT7g4mNI5s6TKCt2RCncNFq2sqsH9Ez%2FdIXVnO6ewUsRfODJRZG4ZJKHzMgCNZZQ5lgpxQW4HrzMqr1%2FyStqpUChwlRIBopCmwXSXs7QzO%2BZB9OogBNgkJSeXEf%2FoBLhGsGwfVbUpuVatey%2BeYIP13OL7STzyVgcgwoeMUfdDzRSJhc2mRDlV%2BJ2cTHvmW4MaIXGDHAF9Z7g%2B9ZmuCwwaEguxpCONQrXamZm9NuzSknqoX94HyAZyNCkYK%2FiWPaoB3TyodKLz40qf5y0qp8HO2WBsUXBebObcNX0Zei%2F%2FU2cWQhrtnpYICJ5XyQvR459c9Vz3pDfdJDEPkULhGMZUE8c2P8OoBmy%2FKmdLZkIbP9dyiepjH254J8bQagDAaZlQzFBNy3CoNYWmusEIIQarZ3FiXbN%2BpX1mvqFzRD6EQUvAbhMcx%2Fww67ncpI2wte7xlPJmOu%2F7tFoGRjXQEgtjMIC10cQGOqUBnBFTXhxWtbEsibo7pOO3I4aOwCRlZlh6LjvLhsyX%2FXW9jgA7GRfW9vRPjKVhfNoGjevsj3cbY0ZvctKFsmlYuE5Rnb%2F0YomrJmf%2FiFctPovEBwCCxi2RbY6HoNer3n2dFxsX9ig%2FhfHrqbvHfgshK6qTWiExHHy0vqqvQPMpb80XQ5pGELFcW8qmffUpRHgPTZ5zZx%2B9ND%2BagN4an1fLvdvTOHdB&X-Amz-Signature=b9747457bd956ab4f32101cb327aee40bedaf01b9973717a38b0eca89c972ab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTXA5RVC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCqGw%2FVzbsEhcpqY5XZnUeZwASsfIhtq1MionQHxgaiVAIgBzq2vPXeB1y1gSu1TT%2FmXqzAwWA6R8MqZbcLTxqCUvAqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLtZgEMr2UlVnYOKSrcA4ZZ0qtyA0clskA44Id4NqWkXLIwud1ChC%2FJlQQp1xQAtawfI2HYOqg2PMtYthiLHQ%2FeVaXIAVd1alvooNBQjEs1T5ADA4s9SLyTDeT04ORX3as2CngO3mi922di5B3QBniwt0%2BtYwDypq%2FWlzsmpb14dBX4Xqo8NXMPqUdWT7g4mNI5s6TKCt2RCncNFq2sqsH9Ez%2FdIXVnO6ewUsRfODJRZG4ZJKHzMgCNZZQ5lgpxQW4HrzMqr1%2FyStqpUChwlRIBopCmwXSXs7QzO%2BZB9OogBNgkJSeXEf%2FoBLhGsGwfVbUpuVatey%2BeYIP13OL7STzyVgcgwoeMUfdDzRSJhc2mRDlV%2BJ2cTHvmW4MaIXGDHAF9Z7g%2B9ZmuCwwaEguxpCONQrXamZm9NuzSknqoX94HyAZyNCkYK%2FiWPaoB3TyodKLz40qf5y0qp8HO2WBsUXBebObcNX0Zei%2F%2FU2cWQhrtnpYICJ5XyQvR459c9Vz3pDfdJDEPkULhGMZUE8c2P8OoBmy%2FKmdLZkIbP9dyiepjH254J8bQagDAaZlQzFBNy3CoNYWmusEIIQarZ3FiXbN%2BpX1mvqFzRD6EQUvAbhMcx%2Fww67ncpI2wte7xlPJmOu%2F7tFoGRjXQEgtjMIC10cQGOqUBnBFTXhxWtbEsibo7pOO3I4aOwCRlZlh6LjvLhsyX%2FXW9jgA7GRfW9vRPjKVhfNoGjevsj3cbY0ZvctKFsmlYuE5Rnb%2F0YomrJmf%2FiFctPovEBwCCxi2RbY6HoNer3n2dFxsX9ig%2FhfHrqbvHfgshK6qTWiExHHy0vqqvQPMpb80XQ5pGELFcW8qmffUpRHgPTZ5zZx%2B9ND%2BagN4an1fLvdvTOHdB&X-Amz-Signature=fbee37a1226866aebc9317f0782ec13d7288fc3b120ad7ccde6a21d3a2ed6166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTXA5RVC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCqGw%2FVzbsEhcpqY5XZnUeZwASsfIhtq1MionQHxgaiVAIgBzq2vPXeB1y1gSu1TT%2FmXqzAwWA6R8MqZbcLTxqCUvAqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLtZgEMr2UlVnYOKSrcA4ZZ0qtyA0clskA44Id4NqWkXLIwud1ChC%2FJlQQp1xQAtawfI2HYOqg2PMtYthiLHQ%2FeVaXIAVd1alvooNBQjEs1T5ADA4s9SLyTDeT04ORX3as2CngO3mi922di5B3QBniwt0%2BtYwDypq%2FWlzsmpb14dBX4Xqo8NXMPqUdWT7g4mNI5s6TKCt2RCncNFq2sqsH9Ez%2FdIXVnO6ewUsRfODJRZG4ZJKHzMgCNZZQ5lgpxQW4HrzMqr1%2FyStqpUChwlRIBopCmwXSXs7QzO%2BZB9OogBNgkJSeXEf%2FoBLhGsGwfVbUpuVatey%2BeYIP13OL7STzyVgcgwoeMUfdDzRSJhc2mRDlV%2BJ2cTHvmW4MaIXGDHAF9Z7g%2B9ZmuCwwaEguxpCONQrXamZm9NuzSknqoX94HyAZyNCkYK%2FiWPaoB3TyodKLz40qf5y0qp8HO2WBsUXBebObcNX0Zei%2F%2FU2cWQhrtnpYICJ5XyQvR459c9Vz3pDfdJDEPkULhGMZUE8c2P8OoBmy%2FKmdLZkIbP9dyiepjH254J8bQagDAaZlQzFBNy3CoNYWmusEIIQarZ3FiXbN%2BpX1mvqFzRD6EQUvAbhMcx%2Fww67ncpI2wte7xlPJmOu%2F7tFoGRjXQEgtjMIC10cQGOqUBnBFTXhxWtbEsibo7pOO3I4aOwCRlZlh6LjvLhsyX%2FXW9jgA7GRfW9vRPjKVhfNoGjevsj3cbY0ZvctKFsmlYuE5Rnb%2F0YomrJmf%2FiFctPovEBwCCxi2RbY6HoNer3n2dFxsX9ig%2FhfHrqbvHfgshK6qTWiExHHy0vqqvQPMpb80XQ5pGELFcW8qmffUpRHgPTZ5zZx%2B9ND%2BagN4an1fLvdvTOHdB&X-Amz-Signature=177cf84d4fba3bc78b1d9d3eb249dacbf0bb31ea8a8832f219d31d814f4a6a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTXA5RVC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCqGw%2FVzbsEhcpqY5XZnUeZwASsfIhtq1MionQHxgaiVAIgBzq2vPXeB1y1gSu1TT%2FmXqzAwWA6R8MqZbcLTxqCUvAqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLtZgEMr2UlVnYOKSrcA4ZZ0qtyA0clskA44Id4NqWkXLIwud1ChC%2FJlQQp1xQAtawfI2HYOqg2PMtYthiLHQ%2FeVaXIAVd1alvooNBQjEs1T5ADA4s9SLyTDeT04ORX3as2CngO3mi922di5B3QBniwt0%2BtYwDypq%2FWlzsmpb14dBX4Xqo8NXMPqUdWT7g4mNI5s6TKCt2RCncNFq2sqsH9Ez%2FdIXVnO6ewUsRfODJRZG4ZJKHzMgCNZZQ5lgpxQW4HrzMqr1%2FyStqpUChwlRIBopCmwXSXs7QzO%2BZB9OogBNgkJSeXEf%2FoBLhGsGwfVbUpuVatey%2BeYIP13OL7STzyVgcgwoeMUfdDzRSJhc2mRDlV%2BJ2cTHvmW4MaIXGDHAF9Z7g%2B9ZmuCwwaEguxpCONQrXamZm9NuzSknqoX94HyAZyNCkYK%2FiWPaoB3TyodKLz40qf5y0qp8HO2WBsUXBebObcNX0Zei%2F%2FU2cWQhrtnpYICJ5XyQvR459c9Vz3pDfdJDEPkULhGMZUE8c2P8OoBmy%2FKmdLZkIbP9dyiepjH254J8bQagDAaZlQzFBNy3CoNYWmusEIIQarZ3FiXbN%2BpX1mvqFzRD6EQUvAbhMcx%2Fww67ncpI2wte7xlPJmOu%2F7tFoGRjXQEgtjMIC10cQGOqUBnBFTXhxWtbEsibo7pOO3I4aOwCRlZlh6LjvLhsyX%2FXW9jgA7GRfW9vRPjKVhfNoGjevsj3cbY0ZvctKFsmlYuE5Rnb%2F0YomrJmf%2FiFctPovEBwCCxi2RbY6HoNer3n2dFxsX9ig%2FhfHrqbvHfgshK6qTWiExHHy0vqqvQPMpb80XQ5pGELFcW8qmffUpRHgPTZ5zZx%2B9ND%2BagN4an1fLvdvTOHdB&X-Amz-Signature=928af14f21b4ff50cb6b351037b37d72450a2999f4a60313bfec5f51eddf1e04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTXA5RVC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCqGw%2FVzbsEhcpqY5XZnUeZwASsfIhtq1MionQHxgaiVAIgBzq2vPXeB1y1gSu1TT%2FmXqzAwWA6R8MqZbcLTxqCUvAqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLtZgEMr2UlVnYOKSrcA4ZZ0qtyA0clskA44Id4NqWkXLIwud1ChC%2FJlQQp1xQAtawfI2HYOqg2PMtYthiLHQ%2FeVaXIAVd1alvooNBQjEs1T5ADA4s9SLyTDeT04ORX3as2CngO3mi922di5B3QBniwt0%2BtYwDypq%2FWlzsmpb14dBX4Xqo8NXMPqUdWT7g4mNI5s6TKCt2RCncNFq2sqsH9Ez%2FdIXVnO6ewUsRfODJRZG4ZJKHzMgCNZZQ5lgpxQW4HrzMqr1%2FyStqpUChwlRIBopCmwXSXs7QzO%2BZB9OogBNgkJSeXEf%2FoBLhGsGwfVbUpuVatey%2BeYIP13OL7STzyVgcgwoeMUfdDzRSJhc2mRDlV%2BJ2cTHvmW4MaIXGDHAF9Z7g%2B9ZmuCwwaEguxpCONQrXamZm9NuzSknqoX94HyAZyNCkYK%2FiWPaoB3TyodKLz40qf5y0qp8HO2WBsUXBebObcNX0Zei%2F%2FU2cWQhrtnpYICJ5XyQvR459c9Vz3pDfdJDEPkULhGMZUE8c2P8OoBmy%2FKmdLZkIbP9dyiepjH254J8bQagDAaZlQzFBNy3CoNYWmusEIIQarZ3FiXbN%2BpX1mvqFzRD6EQUvAbhMcx%2Fww67ncpI2wte7xlPJmOu%2F7tFoGRjXQEgtjMIC10cQGOqUBnBFTXhxWtbEsibo7pOO3I4aOwCRlZlh6LjvLhsyX%2FXW9jgA7GRfW9vRPjKVhfNoGjevsj3cbY0ZvctKFsmlYuE5Rnb%2F0YomrJmf%2FiFctPovEBwCCxi2RbY6HoNer3n2dFxsX9ig%2FhfHrqbvHfgshK6qTWiExHHy0vqqvQPMpb80XQ5pGELFcW8qmffUpRHgPTZ5zZx%2B9ND%2BagN4an1fLvdvTOHdB&X-Amz-Signature=c8c6fee0145a5d7eda3b2bc619133d1693361c106907214c31fa6806dcd99ff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTXA5RVC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCqGw%2FVzbsEhcpqY5XZnUeZwASsfIhtq1MionQHxgaiVAIgBzq2vPXeB1y1gSu1TT%2FmXqzAwWA6R8MqZbcLTxqCUvAqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLtZgEMr2UlVnYOKSrcA4ZZ0qtyA0clskA44Id4NqWkXLIwud1ChC%2FJlQQp1xQAtawfI2HYOqg2PMtYthiLHQ%2FeVaXIAVd1alvooNBQjEs1T5ADA4s9SLyTDeT04ORX3as2CngO3mi922di5B3QBniwt0%2BtYwDypq%2FWlzsmpb14dBX4Xqo8NXMPqUdWT7g4mNI5s6TKCt2RCncNFq2sqsH9Ez%2FdIXVnO6ewUsRfODJRZG4ZJKHzMgCNZZQ5lgpxQW4HrzMqr1%2FyStqpUChwlRIBopCmwXSXs7QzO%2BZB9OogBNgkJSeXEf%2FoBLhGsGwfVbUpuVatey%2BeYIP13OL7STzyVgcgwoeMUfdDzRSJhc2mRDlV%2BJ2cTHvmW4MaIXGDHAF9Z7g%2B9ZmuCwwaEguxpCONQrXamZm9NuzSknqoX94HyAZyNCkYK%2FiWPaoB3TyodKLz40qf5y0qp8HO2WBsUXBebObcNX0Zei%2F%2FU2cWQhrtnpYICJ5XyQvR459c9Vz3pDfdJDEPkULhGMZUE8c2P8OoBmy%2FKmdLZkIbP9dyiepjH254J8bQagDAaZlQzFBNy3CoNYWmusEIIQarZ3FiXbN%2BpX1mvqFzRD6EQUvAbhMcx%2Fww67ncpI2wte7xlPJmOu%2F7tFoGRjXQEgtjMIC10cQGOqUBnBFTXhxWtbEsibo7pOO3I4aOwCRlZlh6LjvLhsyX%2FXW9jgA7GRfW9vRPjKVhfNoGjevsj3cbY0ZvctKFsmlYuE5Rnb%2F0YomrJmf%2FiFctPovEBwCCxi2RbY6HoNer3n2dFxsX9ig%2FhfHrqbvHfgshK6qTWiExHHy0vqqvQPMpb80XQ5pGELFcW8qmffUpRHgPTZ5zZx%2B9ND%2BagN4an1fLvdvTOHdB&X-Amz-Signature=fbee37a1226866aebc9317f0782ec13d7288fc3b120ad7ccde6a21d3a2ed6166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTXA5RVC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCqGw%2FVzbsEhcpqY5XZnUeZwASsfIhtq1MionQHxgaiVAIgBzq2vPXeB1y1gSu1TT%2FmXqzAwWA6R8MqZbcLTxqCUvAqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLtZgEMr2UlVnYOKSrcA4ZZ0qtyA0clskA44Id4NqWkXLIwud1ChC%2FJlQQp1xQAtawfI2HYOqg2PMtYthiLHQ%2FeVaXIAVd1alvooNBQjEs1T5ADA4s9SLyTDeT04ORX3as2CngO3mi922di5B3QBniwt0%2BtYwDypq%2FWlzsmpb14dBX4Xqo8NXMPqUdWT7g4mNI5s6TKCt2RCncNFq2sqsH9Ez%2FdIXVnO6ewUsRfODJRZG4ZJKHzMgCNZZQ5lgpxQW4HrzMqr1%2FyStqpUChwlRIBopCmwXSXs7QzO%2BZB9OogBNgkJSeXEf%2FoBLhGsGwfVbUpuVatey%2BeYIP13OL7STzyVgcgwoeMUfdDzRSJhc2mRDlV%2BJ2cTHvmW4MaIXGDHAF9Z7g%2B9ZmuCwwaEguxpCONQrXamZm9NuzSknqoX94HyAZyNCkYK%2FiWPaoB3TyodKLz40qf5y0qp8HO2WBsUXBebObcNX0Zei%2F%2FU2cWQhrtnpYICJ5XyQvR459c9Vz3pDfdJDEPkULhGMZUE8c2P8OoBmy%2FKmdLZkIbP9dyiepjH254J8bQagDAaZlQzFBNy3CoNYWmusEIIQarZ3FiXbN%2BpX1mvqFzRD6EQUvAbhMcx%2Fww67ncpI2wte7xlPJmOu%2F7tFoGRjXQEgtjMIC10cQGOqUBnBFTXhxWtbEsibo7pOO3I4aOwCRlZlh6LjvLhsyX%2FXW9jgA7GRfW9vRPjKVhfNoGjevsj3cbY0ZvctKFsmlYuE5Rnb%2F0YomrJmf%2FiFctPovEBwCCxi2RbY6HoNer3n2dFxsX9ig%2FhfHrqbvHfgshK6qTWiExHHy0vqqvQPMpb80XQ5pGELFcW8qmffUpRHgPTZ5zZx%2B9ND%2BagN4an1fLvdvTOHdB&X-Amz-Signature=cfcc756a11cecbca69b7f217976551801c03a6a2546e7ab636109d2b6252dc5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTXA5RVC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCqGw%2FVzbsEhcpqY5XZnUeZwASsfIhtq1MionQHxgaiVAIgBzq2vPXeB1y1gSu1TT%2FmXqzAwWA6R8MqZbcLTxqCUvAqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLtZgEMr2UlVnYOKSrcA4ZZ0qtyA0clskA44Id4NqWkXLIwud1ChC%2FJlQQp1xQAtawfI2HYOqg2PMtYthiLHQ%2FeVaXIAVd1alvooNBQjEs1T5ADA4s9SLyTDeT04ORX3as2CngO3mi922di5B3QBniwt0%2BtYwDypq%2FWlzsmpb14dBX4Xqo8NXMPqUdWT7g4mNI5s6TKCt2RCncNFq2sqsH9Ez%2FdIXVnO6ewUsRfODJRZG4ZJKHzMgCNZZQ5lgpxQW4HrzMqr1%2FyStqpUChwlRIBopCmwXSXs7QzO%2BZB9OogBNgkJSeXEf%2FoBLhGsGwfVbUpuVatey%2BeYIP13OL7STzyVgcgwoeMUfdDzRSJhc2mRDlV%2BJ2cTHvmW4MaIXGDHAF9Z7g%2B9ZmuCwwaEguxpCONQrXamZm9NuzSknqoX94HyAZyNCkYK%2FiWPaoB3TyodKLz40qf5y0qp8HO2WBsUXBebObcNX0Zei%2F%2FU2cWQhrtnpYICJ5XyQvR459c9Vz3pDfdJDEPkULhGMZUE8c2P8OoBmy%2FKmdLZkIbP9dyiepjH254J8bQagDAaZlQzFBNy3CoNYWmusEIIQarZ3FiXbN%2BpX1mvqFzRD6EQUvAbhMcx%2Fww67ncpI2wte7xlPJmOu%2F7tFoGRjXQEgtjMIC10cQGOqUBnBFTXhxWtbEsibo7pOO3I4aOwCRlZlh6LjvLhsyX%2FXW9jgA7GRfW9vRPjKVhfNoGjevsj3cbY0ZvctKFsmlYuE5Rnb%2F0YomrJmf%2FiFctPovEBwCCxi2RbY6HoNer3n2dFxsX9ig%2FhfHrqbvHfgshK6qTWiExHHy0vqqvQPMpb80XQ5pGELFcW8qmffUpRHgPTZ5zZx%2B9ND%2BagN4an1fLvdvTOHdB&X-Amz-Signature=cf40a620eae3c132c196394ee6397c50bcd3be5d3a35fc773b7f4bd44c1babc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTXA5RVC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCqGw%2FVzbsEhcpqY5XZnUeZwASsfIhtq1MionQHxgaiVAIgBzq2vPXeB1y1gSu1TT%2FmXqzAwWA6R8MqZbcLTxqCUvAqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLtZgEMr2UlVnYOKSrcA4ZZ0qtyA0clskA44Id4NqWkXLIwud1ChC%2FJlQQp1xQAtawfI2HYOqg2PMtYthiLHQ%2FeVaXIAVd1alvooNBQjEs1T5ADA4s9SLyTDeT04ORX3as2CngO3mi922di5B3QBniwt0%2BtYwDypq%2FWlzsmpb14dBX4Xqo8NXMPqUdWT7g4mNI5s6TKCt2RCncNFq2sqsH9Ez%2FdIXVnO6ewUsRfODJRZG4ZJKHzMgCNZZQ5lgpxQW4HrzMqr1%2FyStqpUChwlRIBopCmwXSXs7QzO%2BZB9OogBNgkJSeXEf%2FoBLhGsGwfVbUpuVatey%2BeYIP13OL7STzyVgcgwoeMUfdDzRSJhc2mRDlV%2BJ2cTHvmW4MaIXGDHAF9Z7g%2B9ZmuCwwaEguxpCONQrXamZm9NuzSknqoX94HyAZyNCkYK%2FiWPaoB3TyodKLz40qf5y0qp8HO2WBsUXBebObcNX0Zei%2F%2FU2cWQhrtnpYICJ5XyQvR459c9Vz3pDfdJDEPkULhGMZUE8c2P8OoBmy%2FKmdLZkIbP9dyiepjH254J8bQagDAaZlQzFBNy3CoNYWmusEIIQarZ3FiXbN%2BpX1mvqFzRD6EQUvAbhMcx%2Fww67ncpI2wte7xlPJmOu%2F7tFoGRjXQEgtjMIC10cQGOqUBnBFTXhxWtbEsibo7pOO3I4aOwCRlZlh6LjvLhsyX%2FXW9jgA7GRfW9vRPjKVhfNoGjevsj3cbY0ZvctKFsmlYuE5Rnb%2F0YomrJmf%2FiFctPovEBwCCxi2RbY6HoNer3n2dFxsX9ig%2FhfHrqbvHfgshK6qTWiExHHy0vqqvQPMpb80XQ5pGELFcW8qmffUpRHgPTZ5zZx%2B9ND%2BagN4an1fLvdvTOHdB&X-Amz-Signature=789941be4ba544b8bbfafcfe96b78e71a5005b4741c2c97d924bf6a712f5b733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
