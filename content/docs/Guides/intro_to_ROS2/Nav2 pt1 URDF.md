---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-31T22:57:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-31T22:57:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IG4TD7Q%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDujIW80OMc3Xz%2FE9RvpeaSb2ij3ImZ0QcGsrAnktsD8QIgClGC0Ziy4ek5qXkBDYSXsRze%2FdKi%2BcL6G%2FG3VJa9m0sqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGJTf94rbcch9spWircA8qFz0GLXtscy09R6ghrKbf7DLTjcKARp4qsfh%2BRVvA1j%2B57bntZAJHxQ7kTZhEtSYxLXBXaAfDntkLwYQea6bQ6bp4ZDlkAqAyCY8SuUws196frX0TsWQA2VOuv8HqT5F59zVAAd3kL0dyzdb1%2ButzzVpCSi2h5qpQ0NSqSmCBQ7EZFsVFPkipcXpI35KpQsj2VyoEYZFVYq0Ou3iGoGd6e1xk7yqBNPgkVHSdXK%2F6hg%2Fjo8WAkX%2Bp2C5wEafCz5nOpzlzhHq9vRmA1NePehJCpaEIaClVUNlAGaip5mBDm1vtWsRO82d42CjXRQUbKc6Yk05SmzSBfEvwFYHjsMG46LjSjzvV89L0WTuvsZ3gFVDRu%2FvEk%2FK8aYO1vz0lEgUKIk6SI0rF6feUQf1FJHRFILUa%2FdbQJ47%2FC4KUb666n8jTAiblkt10g8BNZlKH3C8rwQq%2F07fNqhYuab6%2BV6RyiyJjgX1MMSrKyaR89j1wDuvBEd%2BDaSZBG45FAHC1F0An6vl5inM2qo%2Bv7zUKiFEJHajvj8bOiYSVFYHQ5gVEbAAG6pnR%2Bl5VOk3Uq9ByatHLUsYyV%2BoR7MidmBerozf3rRy87ePL8N87BAsAUOuixXJ%2Bm2jfWLOWmuvZiMJzNr8QGOqUBUXHUytR2NQKb4n%2Bz0N7SwZW0JjGimf3jhCjrNSo5TeyZmkguEAJGLpPf4Xat0OH1j3X%2B3UeYx93eGqCH7wYGqFuFTj3fT8LTzSebapfRz484T%2F61lzw1GSvJm5iPTxKdmTz2rZUOdB2zrTif0qSca5amKGtPD9aZZMRi%2FtTPZ0TENZKRebhtvbCM%2FQi2leMhJdSXwyaQmbeA43D13qmxtq47Zbuf&X-Amz-Signature=c1ec634addde69ed9507c71bb111a8b1dd456baff5df339fc2f1bdd8bd9bb5a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IG4TD7Q%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDujIW80OMc3Xz%2FE9RvpeaSb2ij3ImZ0QcGsrAnktsD8QIgClGC0Ziy4ek5qXkBDYSXsRze%2FdKi%2BcL6G%2FG3VJa9m0sqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGJTf94rbcch9spWircA8qFz0GLXtscy09R6ghrKbf7DLTjcKARp4qsfh%2BRVvA1j%2B57bntZAJHxQ7kTZhEtSYxLXBXaAfDntkLwYQea6bQ6bp4ZDlkAqAyCY8SuUws196frX0TsWQA2VOuv8HqT5F59zVAAd3kL0dyzdb1%2ButzzVpCSi2h5qpQ0NSqSmCBQ7EZFsVFPkipcXpI35KpQsj2VyoEYZFVYq0Ou3iGoGd6e1xk7yqBNPgkVHSdXK%2F6hg%2Fjo8WAkX%2Bp2C5wEafCz5nOpzlzhHq9vRmA1NePehJCpaEIaClVUNlAGaip5mBDm1vtWsRO82d42CjXRQUbKc6Yk05SmzSBfEvwFYHjsMG46LjSjzvV89L0WTuvsZ3gFVDRu%2FvEk%2FK8aYO1vz0lEgUKIk6SI0rF6feUQf1FJHRFILUa%2FdbQJ47%2FC4KUb666n8jTAiblkt10g8BNZlKH3C8rwQq%2F07fNqhYuab6%2BV6RyiyJjgX1MMSrKyaR89j1wDuvBEd%2BDaSZBG45FAHC1F0An6vl5inM2qo%2Bv7zUKiFEJHajvj8bOiYSVFYHQ5gVEbAAG6pnR%2Bl5VOk3Uq9ByatHLUsYyV%2BoR7MidmBerozf3rRy87ePL8N87BAsAUOuixXJ%2Bm2jfWLOWmuvZiMJzNr8QGOqUBUXHUytR2NQKb4n%2Bz0N7SwZW0JjGimf3jhCjrNSo5TeyZmkguEAJGLpPf4Xat0OH1j3X%2B3UeYx93eGqCH7wYGqFuFTj3fT8LTzSebapfRz484T%2F61lzw1GSvJm5iPTxKdmTz2rZUOdB2zrTif0qSca5amKGtPD9aZZMRi%2FtTPZ0TENZKRebhtvbCM%2FQi2leMhJdSXwyaQmbeA43D13qmxtq47Zbuf&X-Amz-Signature=83af644da0e243bcc38ac29a2a413f7cf339b053cb768cdacda16a08fecdbe01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IG4TD7Q%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDujIW80OMc3Xz%2FE9RvpeaSb2ij3ImZ0QcGsrAnktsD8QIgClGC0Ziy4ek5qXkBDYSXsRze%2FdKi%2BcL6G%2FG3VJa9m0sqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGJTf94rbcch9spWircA8qFz0GLXtscy09R6ghrKbf7DLTjcKARp4qsfh%2BRVvA1j%2B57bntZAJHxQ7kTZhEtSYxLXBXaAfDntkLwYQea6bQ6bp4ZDlkAqAyCY8SuUws196frX0TsWQA2VOuv8HqT5F59zVAAd3kL0dyzdb1%2ButzzVpCSi2h5qpQ0NSqSmCBQ7EZFsVFPkipcXpI35KpQsj2VyoEYZFVYq0Ou3iGoGd6e1xk7yqBNPgkVHSdXK%2F6hg%2Fjo8WAkX%2Bp2C5wEafCz5nOpzlzhHq9vRmA1NePehJCpaEIaClVUNlAGaip5mBDm1vtWsRO82d42CjXRQUbKc6Yk05SmzSBfEvwFYHjsMG46LjSjzvV89L0WTuvsZ3gFVDRu%2FvEk%2FK8aYO1vz0lEgUKIk6SI0rF6feUQf1FJHRFILUa%2FdbQJ47%2FC4KUb666n8jTAiblkt10g8BNZlKH3C8rwQq%2F07fNqhYuab6%2BV6RyiyJjgX1MMSrKyaR89j1wDuvBEd%2BDaSZBG45FAHC1F0An6vl5inM2qo%2Bv7zUKiFEJHajvj8bOiYSVFYHQ5gVEbAAG6pnR%2Bl5VOk3Uq9ByatHLUsYyV%2BoR7MidmBerozf3rRy87ePL8N87BAsAUOuixXJ%2Bm2jfWLOWmuvZiMJzNr8QGOqUBUXHUytR2NQKb4n%2Bz0N7SwZW0JjGimf3jhCjrNSo5TeyZmkguEAJGLpPf4Xat0OH1j3X%2B3UeYx93eGqCH7wYGqFuFTj3fT8LTzSebapfRz484T%2F61lzw1GSvJm5iPTxKdmTz2rZUOdB2zrTif0qSca5amKGtPD9aZZMRi%2FtTPZ0TENZKRebhtvbCM%2FQi2leMhJdSXwyaQmbeA43D13qmxtq47Zbuf&X-Amz-Signature=9ea86b20cfe2f5e3e797c1ae569a7a6e51bd96bbd394fed05033452fd96149c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IG4TD7Q%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDujIW80OMc3Xz%2FE9RvpeaSb2ij3ImZ0QcGsrAnktsD8QIgClGC0Ziy4ek5qXkBDYSXsRze%2FdKi%2BcL6G%2FG3VJa9m0sqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGJTf94rbcch9spWircA8qFz0GLXtscy09R6ghrKbf7DLTjcKARp4qsfh%2BRVvA1j%2B57bntZAJHxQ7kTZhEtSYxLXBXaAfDntkLwYQea6bQ6bp4ZDlkAqAyCY8SuUws196frX0TsWQA2VOuv8HqT5F59zVAAd3kL0dyzdb1%2ButzzVpCSi2h5qpQ0NSqSmCBQ7EZFsVFPkipcXpI35KpQsj2VyoEYZFVYq0Ou3iGoGd6e1xk7yqBNPgkVHSdXK%2F6hg%2Fjo8WAkX%2Bp2C5wEafCz5nOpzlzhHq9vRmA1NePehJCpaEIaClVUNlAGaip5mBDm1vtWsRO82d42CjXRQUbKc6Yk05SmzSBfEvwFYHjsMG46LjSjzvV89L0WTuvsZ3gFVDRu%2FvEk%2FK8aYO1vz0lEgUKIk6SI0rF6feUQf1FJHRFILUa%2FdbQJ47%2FC4KUb666n8jTAiblkt10g8BNZlKH3C8rwQq%2F07fNqhYuab6%2BV6RyiyJjgX1MMSrKyaR89j1wDuvBEd%2BDaSZBG45FAHC1F0An6vl5inM2qo%2Bv7zUKiFEJHajvj8bOiYSVFYHQ5gVEbAAG6pnR%2Bl5VOk3Uq9ByatHLUsYyV%2BoR7MidmBerozf3rRy87ePL8N87BAsAUOuixXJ%2Bm2jfWLOWmuvZiMJzNr8QGOqUBUXHUytR2NQKb4n%2Bz0N7SwZW0JjGimf3jhCjrNSo5TeyZmkguEAJGLpPf4Xat0OH1j3X%2B3UeYx93eGqCH7wYGqFuFTj3fT8LTzSebapfRz484T%2F61lzw1GSvJm5iPTxKdmTz2rZUOdB2zrTif0qSca5amKGtPD9aZZMRi%2FtTPZ0TENZKRebhtvbCM%2FQi2leMhJdSXwyaQmbeA43D13qmxtq47Zbuf&X-Amz-Signature=1738fc73ede722c2ee9224cb0d106d830b67314ea388b9a21868b739ebfa8a88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IG4TD7Q%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDujIW80OMc3Xz%2FE9RvpeaSb2ij3ImZ0QcGsrAnktsD8QIgClGC0Ziy4ek5qXkBDYSXsRze%2FdKi%2BcL6G%2FG3VJa9m0sqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGJTf94rbcch9spWircA8qFz0GLXtscy09R6ghrKbf7DLTjcKARp4qsfh%2BRVvA1j%2B57bntZAJHxQ7kTZhEtSYxLXBXaAfDntkLwYQea6bQ6bp4ZDlkAqAyCY8SuUws196frX0TsWQA2VOuv8HqT5F59zVAAd3kL0dyzdb1%2ButzzVpCSi2h5qpQ0NSqSmCBQ7EZFsVFPkipcXpI35KpQsj2VyoEYZFVYq0Ou3iGoGd6e1xk7yqBNPgkVHSdXK%2F6hg%2Fjo8WAkX%2Bp2C5wEafCz5nOpzlzhHq9vRmA1NePehJCpaEIaClVUNlAGaip5mBDm1vtWsRO82d42CjXRQUbKc6Yk05SmzSBfEvwFYHjsMG46LjSjzvV89L0WTuvsZ3gFVDRu%2FvEk%2FK8aYO1vz0lEgUKIk6SI0rF6feUQf1FJHRFILUa%2FdbQJ47%2FC4KUb666n8jTAiblkt10g8BNZlKH3C8rwQq%2F07fNqhYuab6%2BV6RyiyJjgX1MMSrKyaR89j1wDuvBEd%2BDaSZBG45FAHC1F0An6vl5inM2qo%2Bv7zUKiFEJHajvj8bOiYSVFYHQ5gVEbAAG6pnR%2Bl5VOk3Uq9ByatHLUsYyV%2BoR7MidmBerozf3rRy87ePL8N87BAsAUOuixXJ%2Bm2jfWLOWmuvZiMJzNr8QGOqUBUXHUytR2NQKb4n%2Bz0N7SwZW0JjGimf3jhCjrNSo5TeyZmkguEAJGLpPf4Xat0OH1j3X%2B3UeYx93eGqCH7wYGqFuFTj3fT8LTzSebapfRz484T%2F61lzw1GSvJm5iPTxKdmTz2rZUOdB2zrTif0qSca5amKGtPD9aZZMRi%2FtTPZ0TENZKRebhtvbCM%2FQi2leMhJdSXwyaQmbeA43D13qmxtq47Zbuf&X-Amz-Signature=22bec39ff97da2434106c968bc6b8f3b8797eed445be349dab1eea0b323ef204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IG4TD7Q%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDujIW80OMc3Xz%2FE9RvpeaSb2ij3ImZ0QcGsrAnktsD8QIgClGC0Ziy4ek5qXkBDYSXsRze%2FdKi%2BcL6G%2FG3VJa9m0sqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGJTf94rbcch9spWircA8qFz0GLXtscy09R6ghrKbf7DLTjcKARp4qsfh%2BRVvA1j%2B57bntZAJHxQ7kTZhEtSYxLXBXaAfDntkLwYQea6bQ6bp4ZDlkAqAyCY8SuUws196frX0TsWQA2VOuv8HqT5F59zVAAd3kL0dyzdb1%2ButzzVpCSi2h5qpQ0NSqSmCBQ7EZFsVFPkipcXpI35KpQsj2VyoEYZFVYq0Ou3iGoGd6e1xk7yqBNPgkVHSdXK%2F6hg%2Fjo8WAkX%2Bp2C5wEafCz5nOpzlzhHq9vRmA1NePehJCpaEIaClVUNlAGaip5mBDm1vtWsRO82d42CjXRQUbKc6Yk05SmzSBfEvwFYHjsMG46LjSjzvV89L0WTuvsZ3gFVDRu%2FvEk%2FK8aYO1vz0lEgUKIk6SI0rF6feUQf1FJHRFILUa%2FdbQJ47%2FC4KUb666n8jTAiblkt10g8BNZlKH3C8rwQq%2F07fNqhYuab6%2BV6RyiyJjgX1MMSrKyaR89j1wDuvBEd%2BDaSZBG45FAHC1F0An6vl5inM2qo%2Bv7zUKiFEJHajvj8bOiYSVFYHQ5gVEbAAG6pnR%2Bl5VOk3Uq9ByatHLUsYyV%2BoR7MidmBerozf3rRy87ePL8N87BAsAUOuixXJ%2Bm2jfWLOWmuvZiMJzNr8QGOqUBUXHUytR2NQKb4n%2Bz0N7SwZW0JjGimf3jhCjrNSo5TeyZmkguEAJGLpPf4Xat0OH1j3X%2B3UeYx93eGqCH7wYGqFuFTj3fT8LTzSebapfRz484T%2F61lzw1GSvJm5iPTxKdmTz2rZUOdB2zrTif0qSca5amKGtPD9aZZMRi%2FtTPZ0TENZKRebhtvbCM%2FQi2leMhJdSXwyaQmbeA43D13qmxtq47Zbuf&X-Amz-Signature=0ac0f65e0bf08f91a937048f0268ce465b7a28293181c6511808a38a71b81e1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IG4TD7Q%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDujIW80OMc3Xz%2FE9RvpeaSb2ij3ImZ0QcGsrAnktsD8QIgClGC0Ziy4ek5qXkBDYSXsRze%2FdKi%2BcL6G%2FG3VJa9m0sqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGJTf94rbcch9spWircA8qFz0GLXtscy09R6ghrKbf7DLTjcKARp4qsfh%2BRVvA1j%2B57bntZAJHxQ7kTZhEtSYxLXBXaAfDntkLwYQea6bQ6bp4ZDlkAqAyCY8SuUws196frX0TsWQA2VOuv8HqT5F59zVAAd3kL0dyzdb1%2ButzzVpCSi2h5qpQ0NSqSmCBQ7EZFsVFPkipcXpI35KpQsj2VyoEYZFVYq0Ou3iGoGd6e1xk7yqBNPgkVHSdXK%2F6hg%2Fjo8WAkX%2Bp2C5wEafCz5nOpzlzhHq9vRmA1NePehJCpaEIaClVUNlAGaip5mBDm1vtWsRO82d42CjXRQUbKc6Yk05SmzSBfEvwFYHjsMG46LjSjzvV89L0WTuvsZ3gFVDRu%2FvEk%2FK8aYO1vz0lEgUKIk6SI0rF6feUQf1FJHRFILUa%2FdbQJ47%2FC4KUb666n8jTAiblkt10g8BNZlKH3C8rwQq%2F07fNqhYuab6%2BV6RyiyJjgX1MMSrKyaR89j1wDuvBEd%2BDaSZBG45FAHC1F0An6vl5inM2qo%2Bv7zUKiFEJHajvj8bOiYSVFYHQ5gVEbAAG6pnR%2Bl5VOk3Uq9ByatHLUsYyV%2BoR7MidmBerozf3rRy87ePL8N87BAsAUOuixXJ%2Bm2jfWLOWmuvZiMJzNr8QGOqUBUXHUytR2NQKb4n%2Bz0N7SwZW0JjGimf3jhCjrNSo5TeyZmkguEAJGLpPf4Xat0OH1j3X%2B3UeYx93eGqCH7wYGqFuFTj3fT8LTzSebapfRz484T%2F61lzw1GSvJm5iPTxKdmTz2rZUOdB2zrTif0qSca5amKGtPD9aZZMRi%2FtTPZ0TENZKRebhtvbCM%2FQi2leMhJdSXwyaQmbeA43D13qmxtq47Zbuf&X-Amz-Signature=1fe64ecd169c4a1a5e93b318ebda670d0044076b009e70631ee9c7a573a51fdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IG4TD7Q%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDujIW80OMc3Xz%2FE9RvpeaSb2ij3ImZ0QcGsrAnktsD8QIgClGC0Ziy4ek5qXkBDYSXsRze%2FdKi%2BcL6G%2FG3VJa9m0sqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGJTf94rbcch9spWircA8qFz0GLXtscy09R6ghrKbf7DLTjcKARp4qsfh%2BRVvA1j%2B57bntZAJHxQ7kTZhEtSYxLXBXaAfDntkLwYQea6bQ6bp4ZDlkAqAyCY8SuUws196frX0TsWQA2VOuv8HqT5F59zVAAd3kL0dyzdb1%2ButzzVpCSi2h5qpQ0NSqSmCBQ7EZFsVFPkipcXpI35KpQsj2VyoEYZFVYq0Ou3iGoGd6e1xk7yqBNPgkVHSdXK%2F6hg%2Fjo8WAkX%2Bp2C5wEafCz5nOpzlzhHq9vRmA1NePehJCpaEIaClVUNlAGaip5mBDm1vtWsRO82d42CjXRQUbKc6Yk05SmzSBfEvwFYHjsMG46LjSjzvV89L0WTuvsZ3gFVDRu%2FvEk%2FK8aYO1vz0lEgUKIk6SI0rF6feUQf1FJHRFILUa%2FdbQJ47%2FC4KUb666n8jTAiblkt10g8BNZlKH3C8rwQq%2F07fNqhYuab6%2BV6RyiyJjgX1MMSrKyaR89j1wDuvBEd%2BDaSZBG45FAHC1F0An6vl5inM2qo%2Bv7zUKiFEJHajvj8bOiYSVFYHQ5gVEbAAG6pnR%2Bl5VOk3Uq9ByatHLUsYyV%2BoR7MidmBerozf3rRy87ePL8N87BAsAUOuixXJ%2Bm2jfWLOWmuvZiMJzNr8QGOqUBUXHUytR2NQKb4n%2Bz0N7SwZW0JjGimf3jhCjrNSo5TeyZmkguEAJGLpPf4Xat0OH1j3X%2B3UeYx93eGqCH7wYGqFuFTj3fT8LTzSebapfRz484T%2F61lzw1GSvJm5iPTxKdmTz2rZUOdB2zrTif0qSca5amKGtPD9aZZMRi%2FtTPZ0TENZKRebhtvbCM%2FQi2leMhJdSXwyaQmbeA43D13qmxtq47Zbuf&X-Amz-Signature=4851c1c02b7c713255228cf8e7e2532e2146469cc88fdf407ae4c4737c3c89ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IG4TD7Q%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDujIW80OMc3Xz%2FE9RvpeaSb2ij3ImZ0QcGsrAnktsD8QIgClGC0Ziy4ek5qXkBDYSXsRze%2FdKi%2BcL6G%2FG3VJa9m0sqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGJTf94rbcch9spWircA8qFz0GLXtscy09R6ghrKbf7DLTjcKARp4qsfh%2BRVvA1j%2B57bntZAJHxQ7kTZhEtSYxLXBXaAfDntkLwYQea6bQ6bp4ZDlkAqAyCY8SuUws196frX0TsWQA2VOuv8HqT5F59zVAAd3kL0dyzdb1%2ButzzVpCSi2h5qpQ0NSqSmCBQ7EZFsVFPkipcXpI35KpQsj2VyoEYZFVYq0Ou3iGoGd6e1xk7yqBNPgkVHSdXK%2F6hg%2Fjo8WAkX%2Bp2C5wEafCz5nOpzlzhHq9vRmA1NePehJCpaEIaClVUNlAGaip5mBDm1vtWsRO82d42CjXRQUbKc6Yk05SmzSBfEvwFYHjsMG46LjSjzvV89L0WTuvsZ3gFVDRu%2FvEk%2FK8aYO1vz0lEgUKIk6SI0rF6feUQf1FJHRFILUa%2FdbQJ47%2FC4KUb666n8jTAiblkt10g8BNZlKH3C8rwQq%2F07fNqhYuab6%2BV6RyiyJjgX1MMSrKyaR89j1wDuvBEd%2BDaSZBG45FAHC1F0An6vl5inM2qo%2Bv7zUKiFEJHajvj8bOiYSVFYHQ5gVEbAAG6pnR%2Bl5VOk3Uq9ByatHLUsYyV%2BoR7MidmBerozf3rRy87ePL8N87BAsAUOuixXJ%2Bm2jfWLOWmuvZiMJzNr8QGOqUBUXHUytR2NQKb4n%2Bz0N7SwZW0JjGimf3jhCjrNSo5TeyZmkguEAJGLpPf4Xat0OH1j3X%2B3UeYx93eGqCH7wYGqFuFTj3fT8LTzSebapfRz484T%2F61lzw1GSvJm5iPTxKdmTz2rZUOdB2zrTif0qSca5amKGtPD9aZZMRi%2FtTPZ0TENZKRebhtvbCM%2FQi2leMhJdSXwyaQmbeA43D13qmxtq47Zbuf&X-Amz-Signature=2470a0ade21afce55d01f2c5266e83c0bbf3e7aa8f12a33e383b286b3b345fa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IG4TD7Q%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDujIW80OMc3Xz%2FE9RvpeaSb2ij3ImZ0QcGsrAnktsD8QIgClGC0Ziy4ek5qXkBDYSXsRze%2FdKi%2BcL6G%2FG3VJa9m0sqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGJTf94rbcch9spWircA8qFz0GLXtscy09R6ghrKbf7DLTjcKARp4qsfh%2BRVvA1j%2B57bntZAJHxQ7kTZhEtSYxLXBXaAfDntkLwYQea6bQ6bp4ZDlkAqAyCY8SuUws196frX0TsWQA2VOuv8HqT5F59zVAAd3kL0dyzdb1%2ButzzVpCSi2h5qpQ0NSqSmCBQ7EZFsVFPkipcXpI35KpQsj2VyoEYZFVYq0Ou3iGoGd6e1xk7yqBNPgkVHSdXK%2F6hg%2Fjo8WAkX%2Bp2C5wEafCz5nOpzlzhHq9vRmA1NePehJCpaEIaClVUNlAGaip5mBDm1vtWsRO82d42CjXRQUbKc6Yk05SmzSBfEvwFYHjsMG46LjSjzvV89L0WTuvsZ3gFVDRu%2FvEk%2FK8aYO1vz0lEgUKIk6SI0rF6feUQf1FJHRFILUa%2FdbQJ47%2FC4KUb666n8jTAiblkt10g8BNZlKH3C8rwQq%2F07fNqhYuab6%2BV6RyiyJjgX1MMSrKyaR89j1wDuvBEd%2BDaSZBG45FAHC1F0An6vl5inM2qo%2Bv7zUKiFEJHajvj8bOiYSVFYHQ5gVEbAAG6pnR%2Bl5VOk3Uq9ByatHLUsYyV%2BoR7MidmBerozf3rRy87ePL8N87BAsAUOuixXJ%2Bm2jfWLOWmuvZiMJzNr8QGOqUBUXHUytR2NQKb4n%2Bz0N7SwZW0JjGimf3jhCjrNSo5TeyZmkguEAJGLpPf4Xat0OH1j3X%2B3UeYx93eGqCH7wYGqFuFTj3fT8LTzSebapfRz484T%2F61lzw1GSvJm5iPTxKdmTz2rZUOdB2zrTif0qSca5amKGtPD9aZZMRi%2FtTPZ0TENZKRebhtvbCM%2FQi2leMhJdSXwyaQmbeA43D13qmxtq47Zbuf&X-Amz-Signature=87feddfbde4f6516eec3dbfcc734c38f23328cd3ff3c78bf1885eff9fc345c14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

Types of blocks in URDF:

- robot
- vars/Properties
- macros
	- inertial
		- origin
		- mass
		- inertia
- link:
	- visual
		- geometry
			- box
			- cylinder
			- sphere
		- material
			- color
	- collision
		- origin
		- geometry
		- friction
	- xacro:box_inertia
	- xacro:cylinder_inertia
	- xacro:sphere_inertia
- joint:
	- parent
	- child
	- origin
- xacro:wheel

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
        <surface><friction><ode>
          <mu>1.0</mu>
          <mu2>1.0</mu2>
          <fdir1>1 0 0</fdir1>
        </ode></friction></surface>
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

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IG4TD7Q%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDujIW80OMc3Xz%2FE9RvpeaSb2ij3ImZ0QcGsrAnktsD8QIgClGC0Ziy4ek5qXkBDYSXsRze%2FdKi%2BcL6G%2FG3VJa9m0sqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGJTf94rbcch9spWircA8qFz0GLXtscy09R6ghrKbf7DLTjcKARp4qsfh%2BRVvA1j%2B57bntZAJHxQ7kTZhEtSYxLXBXaAfDntkLwYQea6bQ6bp4ZDlkAqAyCY8SuUws196frX0TsWQA2VOuv8HqT5F59zVAAd3kL0dyzdb1%2ButzzVpCSi2h5qpQ0NSqSmCBQ7EZFsVFPkipcXpI35KpQsj2VyoEYZFVYq0Ou3iGoGd6e1xk7yqBNPgkVHSdXK%2F6hg%2Fjo8WAkX%2Bp2C5wEafCz5nOpzlzhHq9vRmA1NePehJCpaEIaClVUNlAGaip5mBDm1vtWsRO82d42CjXRQUbKc6Yk05SmzSBfEvwFYHjsMG46LjSjzvV89L0WTuvsZ3gFVDRu%2FvEk%2FK8aYO1vz0lEgUKIk6SI0rF6feUQf1FJHRFILUa%2FdbQJ47%2FC4KUb666n8jTAiblkt10g8BNZlKH3C8rwQq%2F07fNqhYuab6%2BV6RyiyJjgX1MMSrKyaR89j1wDuvBEd%2BDaSZBG45FAHC1F0An6vl5inM2qo%2Bv7zUKiFEJHajvj8bOiYSVFYHQ5gVEbAAG6pnR%2Bl5VOk3Uq9ByatHLUsYyV%2BoR7MidmBerozf3rRy87ePL8N87BAsAUOuixXJ%2Bm2jfWLOWmuvZiMJzNr8QGOqUBUXHUytR2NQKb4n%2Bz0N7SwZW0JjGimf3jhCjrNSo5TeyZmkguEAJGLpPf4Xat0OH1j3X%2B3UeYx93eGqCH7wYGqFuFTj3fT8LTzSebapfRz484T%2F61lzw1GSvJm5iPTxKdmTz2rZUOdB2zrTif0qSca5amKGtPD9aZZMRi%2FtTPZ0TENZKRebhtvbCM%2FQi2leMhJdSXwyaQmbeA43D13qmxtq47Zbuf&X-Amz-Signature=c40e0c074238928681bbfc4a1e5e5696642a5fa52205f07614d3ec3fec67e1a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IG4TD7Q%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDujIW80OMc3Xz%2FE9RvpeaSb2ij3ImZ0QcGsrAnktsD8QIgClGC0Ziy4ek5qXkBDYSXsRze%2FdKi%2BcL6G%2FG3VJa9m0sqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGJTf94rbcch9spWircA8qFz0GLXtscy09R6ghrKbf7DLTjcKARp4qsfh%2BRVvA1j%2B57bntZAJHxQ7kTZhEtSYxLXBXaAfDntkLwYQea6bQ6bp4ZDlkAqAyCY8SuUws196frX0TsWQA2VOuv8HqT5F59zVAAd3kL0dyzdb1%2ButzzVpCSi2h5qpQ0NSqSmCBQ7EZFsVFPkipcXpI35KpQsj2VyoEYZFVYq0Ou3iGoGd6e1xk7yqBNPgkVHSdXK%2F6hg%2Fjo8WAkX%2Bp2C5wEafCz5nOpzlzhHq9vRmA1NePehJCpaEIaClVUNlAGaip5mBDm1vtWsRO82d42CjXRQUbKc6Yk05SmzSBfEvwFYHjsMG46LjSjzvV89L0WTuvsZ3gFVDRu%2FvEk%2FK8aYO1vz0lEgUKIk6SI0rF6feUQf1FJHRFILUa%2FdbQJ47%2FC4KUb666n8jTAiblkt10g8BNZlKH3C8rwQq%2F07fNqhYuab6%2BV6RyiyJjgX1MMSrKyaR89j1wDuvBEd%2BDaSZBG45FAHC1F0An6vl5inM2qo%2Bv7zUKiFEJHajvj8bOiYSVFYHQ5gVEbAAG6pnR%2Bl5VOk3Uq9ByatHLUsYyV%2BoR7MidmBerozf3rRy87ePL8N87BAsAUOuixXJ%2Bm2jfWLOWmuvZiMJzNr8QGOqUBUXHUytR2NQKb4n%2Bz0N7SwZW0JjGimf3jhCjrNSo5TeyZmkguEAJGLpPf4Xat0OH1j3X%2B3UeYx93eGqCH7wYGqFuFTj3fT8LTzSebapfRz484T%2F61lzw1GSvJm5iPTxKdmTz2rZUOdB2zrTif0qSca5amKGtPD9aZZMRi%2FtTPZ0TENZKRebhtvbCM%2FQi2leMhJdSXwyaQmbeA43D13qmxtq47Zbuf&X-Amz-Signature=4802a9e0dc63ee9f07145ddc5b86ca23b857b8ef6172d2e6f3585b738e213850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IG4TD7Q%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDujIW80OMc3Xz%2FE9RvpeaSb2ij3ImZ0QcGsrAnktsD8QIgClGC0Ziy4ek5qXkBDYSXsRze%2FdKi%2BcL6G%2FG3VJa9m0sqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGJTf94rbcch9spWircA8qFz0GLXtscy09R6ghrKbf7DLTjcKARp4qsfh%2BRVvA1j%2B57bntZAJHxQ7kTZhEtSYxLXBXaAfDntkLwYQea6bQ6bp4ZDlkAqAyCY8SuUws196frX0TsWQA2VOuv8HqT5F59zVAAd3kL0dyzdb1%2ButzzVpCSi2h5qpQ0NSqSmCBQ7EZFsVFPkipcXpI35KpQsj2VyoEYZFVYq0Ou3iGoGd6e1xk7yqBNPgkVHSdXK%2F6hg%2Fjo8WAkX%2Bp2C5wEafCz5nOpzlzhHq9vRmA1NePehJCpaEIaClVUNlAGaip5mBDm1vtWsRO82d42CjXRQUbKc6Yk05SmzSBfEvwFYHjsMG46LjSjzvV89L0WTuvsZ3gFVDRu%2FvEk%2FK8aYO1vz0lEgUKIk6SI0rF6feUQf1FJHRFILUa%2FdbQJ47%2FC4KUb666n8jTAiblkt10g8BNZlKH3C8rwQq%2F07fNqhYuab6%2BV6RyiyJjgX1MMSrKyaR89j1wDuvBEd%2BDaSZBG45FAHC1F0An6vl5inM2qo%2Bv7zUKiFEJHajvj8bOiYSVFYHQ5gVEbAAG6pnR%2Bl5VOk3Uq9ByatHLUsYyV%2BoR7MidmBerozf3rRy87ePL8N87BAsAUOuixXJ%2Bm2jfWLOWmuvZiMJzNr8QGOqUBUXHUytR2NQKb4n%2Bz0N7SwZW0JjGimf3jhCjrNSo5TeyZmkguEAJGLpPf4Xat0OH1j3X%2B3UeYx93eGqCH7wYGqFuFTj3fT8LTzSebapfRz484T%2F61lzw1GSvJm5iPTxKdmTz2rZUOdB2zrTif0qSca5amKGtPD9aZZMRi%2FtTPZ0TENZKRebhtvbCM%2FQi2leMhJdSXwyaQmbeA43D13qmxtq47Zbuf&X-Amz-Signature=f387f95d07e26e8f18122e67200133e8e0ded67caa9c1dba42127481519ffc09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDHJVQE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHR2RTjedORkOmyhDGEkmQtbEt2MqNuF1kAqgB6Nb16GAiAgL8YWMLflnJKdZJFPTTZPULP7S4%2FNUUQ%2BIIfZbpFgmCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM672EU6FTm%2BBxhwBKtwDArhb5HvQsLD%2FQF7rkMeUI4TWQvmYWhiWXdkSY4x08WSm1Vx1vYWBWeUGfDqEvM%2FLWRH%2Bs8P5iL7W5UNZ5m0iDnoj7TEAa411eBTgbhxrvKmGpp%2BdZ0yxUsNZsVufBy2Kdifizc5s2KzUDdIIvNF3Vcf24Zq95xjIfuig4FBtjQ3Uxi2K3rYhPXbLPSPUixkwHighDh41i4%2Be%2BC%2B3Toyw%2FS3EbPy3T1N3XqFqWE0BE1y24GjeBKN8k372ayifimrXDp0uJ774Ovl%2BqpracF1xQj7ESt%2BnbGNjhKjfavrgaQ3NKBY%2F2ehTogB9HjCh%2F3XovcuxbPxWdiqUmxRZ0CkencwdcJkR80yCf7HT6l2GA7IvI%2B5V6A8BKuwFCGrMx7UbV4U%2Fnre%2BNx0FSJVw2qjQZdfWHSNnJNBN8HtMyuPLGoU65lZb%2FILgrbABDGMxstkdHjkuLPNvlVO%2BSTa%2FiOriYIMdMWlC6J7ypZdcBaqEYr6ZQS%2FYBT9TrViIEzJbEyq4CfxhiezCKtpEdntgkD49rm6hRo6YOOZQjhZBeAxCE8f0i%2B0rXkoUugqP7wv3dRg357hpAR1cItO%2Bau9sUVeHD%2BnosUkY4a66AEOG2UKY6u%2BjTWwn1IuI0diroyEwx8yvxAY6pgHSwirOeyDtVuAxFlqjxBKbDmUjSNjk2ja162cqPYX%2BLxVW9CQfBlXpWYWS0i3BB52Dj43YhdmiNYxYN9W%2FT53FsJlg%2BhKtkgEtpMU5nZ2RidGYWUdtgFtqeAaX0tBndP5nSQNGaOM4XLK8DJjBWUaUTC3MHFDeRn8qEmwQwHa9%2BrT9vmC%2BxNl6ZOoxuDbPsV2C5hpzSrIJhSKZ45ayT1dV73bkqprk&X-Amz-Signature=ed0e003736a6281bd29686457e89d8e2e3bc56796e99ee201fe1c2f256b9703f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDHJVQE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHR2RTjedORkOmyhDGEkmQtbEt2MqNuF1kAqgB6Nb16GAiAgL8YWMLflnJKdZJFPTTZPULP7S4%2FNUUQ%2BIIfZbpFgmCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM672EU6FTm%2BBxhwBKtwDArhb5HvQsLD%2FQF7rkMeUI4TWQvmYWhiWXdkSY4x08WSm1Vx1vYWBWeUGfDqEvM%2FLWRH%2Bs8P5iL7W5UNZ5m0iDnoj7TEAa411eBTgbhxrvKmGpp%2BdZ0yxUsNZsVufBy2Kdifizc5s2KzUDdIIvNF3Vcf24Zq95xjIfuig4FBtjQ3Uxi2K3rYhPXbLPSPUixkwHighDh41i4%2Be%2BC%2B3Toyw%2FS3EbPy3T1N3XqFqWE0BE1y24GjeBKN8k372ayifimrXDp0uJ774Ovl%2BqpracF1xQj7ESt%2BnbGNjhKjfavrgaQ3NKBY%2F2ehTogB9HjCh%2F3XovcuxbPxWdiqUmxRZ0CkencwdcJkR80yCf7HT6l2GA7IvI%2B5V6A8BKuwFCGrMx7UbV4U%2Fnre%2BNx0FSJVw2qjQZdfWHSNnJNBN8HtMyuPLGoU65lZb%2FILgrbABDGMxstkdHjkuLPNvlVO%2BSTa%2FiOriYIMdMWlC6J7ypZdcBaqEYr6ZQS%2FYBT9TrViIEzJbEyq4CfxhiezCKtpEdntgkD49rm6hRo6YOOZQjhZBeAxCE8f0i%2B0rXkoUugqP7wv3dRg357hpAR1cItO%2Bau9sUVeHD%2BnosUkY4a66AEOG2UKY6u%2BjTWwn1IuI0diroyEwx8yvxAY6pgHSwirOeyDtVuAxFlqjxBKbDmUjSNjk2ja162cqPYX%2BLxVW9CQfBlXpWYWS0i3BB52Dj43YhdmiNYxYN9W%2FT53FsJlg%2BhKtkgEtpMU5nZ2RidGYWUdtgFtqeAaX0tBndP5nSQNGaOM4XLK8DJjBWUaUTC3MHFDeRn8qEmwQwHa9%2BrT9vmC%2BxNl6ZOoxuDbPsV2C5hpzSrIJhSKZ45ayT1dV73bkqprk&X-Amz-Signature=48ac2ef74b485fa8a817a682bce2df4a980b530ffc5d81936250b1be433e876d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDHJVQE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHR2RTjedORkOmyhDGEkmQtbEt2MqNuF1kAqgB6Nb16GAiAgL8YWMLflnJKdZJFPTTZPULP7S4%2FNUUQ%2BIIfZbpFgmCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM672EU6FTm%2BBxhwBKtwDArhb5HvQsLD%2FQF7rkMeUI4TWQvmYWhiWXdkSY4x08WSm1Vx1vYWBWeUGfDqEvM%2FLWRH%2Bs8P5iL7W5UNZ5m0iDnoj7TEAa411eBTgbhxrvKmGpp%2BdZ0yxUsNZsVufBy2Kdifizc5s2KzUDdIIvNF3Vcf24Zq95xjIfuig4FBtjQ3Uxi2K3rYhPXbLPSPUixkwHighDh41i4%2Be%2BC%2B3Toyw%2FS3EbPy3T1N3XqFqWE0BE1y24GjeBKN8k372ayifimrXDp0uJ774Ovl%2BqpracF1xQj7ESt%2BnbGNjhKjfavrgaQ3NKBY%2F2ehTogB9HjCh%2F3XovcuxbPxWdiqUmxRZ0CkencwdcJkR80yCf7HT6l2GA7IvI%2B5V6A8BKuwFCGrMx7UbV4U%2Fnre%2BNx0FSJVw2qjQZdfWHSNnJNBN8HtMyuPLGoU65lZb%2FILgrbABDGMxstkdHjkuLPNvlVO%2BSTa%2FiOriYIMdMWlC6J7ypZdcBaqEYr6ZQS%2FYBT9TrViIEzJbEyq4CfxhiezCKtpEdntgkD49rm6hRo6YOOZQjhZBeAxCE8f0i%2B0rXkoUugqP7wv3dRg357hpAR1cItO%2Bau9sUVeHD%2BnosUkY4a66AEOG2UKY6u%2BjTWwn1IuI0diroyEwx8yvxAY6pgHSwirOeyDtVuAxFlqjxBKbDmUjSNjk2ja162cqPYX%2BLxVW9CQfBlXpWYWS0i3BB52Dj43YhdmiNYxYN9W%2FT53FsJlg%2BhKtkgEtpMU5nZ2RidGYWUdtgFtqeAaX0tBndP5nSQNGaOM4XLK8DJjBWUaUTC3MHFDeRn8qEmwQwHa9%2BrT9vmC%2BxNl6ZOoxuDbPsV2C5hpzSrIJhSKZ45ayT1dV73bkqprk&X-Amz-Signature=282e2810f908f96246d9837d14b6adce1a7f906fc09b24ec55f145ee9aa1587a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDHJVQE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHR2RTjedORkOmyhDGEkmQtbEt2MqNuF1kAqgB6Nb16GAiAgL8YWMLflnJKdZJFPTTZPULP7S4%2FNUUQ%2BIIfZbpFgmCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM672EU6FTm%2BBxhwBKtwDArhb5HvQsLD%2FQF7rkMeUI4TWQvmYWhiWXdkSY4x08WSm1Vx1vYWBWeUGfDqEvM%2FLWRH%2Bs8P5iL7W5UNZ5m0iDnoj7TEAa411eBTgbhxrvKmGpp%2BdZ0yxUsNZsVufBy2Kdifizc5s2KzUDdIIvNF3Vcf24Zq95xjIfuig4FBtjQ3Uxi2K3rYhPXbLPSPUixkwHighDh41i4%2Be%2BC%2B3Toyw%2FS3EbPy3T1N3XqFqWE0BE1y24GjeBKN8k372ayifimrXDp0uJ774Ovl%2BqpracF1xQj7ESt%2BnbGNjhKjfavrgaQ3NKBY%2F2ehTogB9HjCh%2F3XovcuxbPxWdiqUmxRZ0CkencwdcJkR80yCf7HT6l2GA7IvI%2B5V6A8BKuwFCGrMx7UbV4U%2Fnre%2BNx0FSJVw2qjQZdfWHSNnJNBN8HtMyuPLGoU65lZb%2FILgrbABDGMxstkdHjkuLPNvlVO%2BSTa%2FiOriYIMdMWlC6J7ypZdcBaqEYr6ZQS%2FYBT9TrViIEzJbEyq4CfxhiezCKtpEdntgkD49rm6hRo6YOOZQjhZBeAxCE8f0i%2B0rXkoUugqP7wv3dRg357hpAR1cItO%2Bau9sUVeHD%2BnosUkY4a66AEOG2UKY6u%2BjTWwn1IuI0diroyEwx8yvxAY6pgHSwirOeyDtVuAxFlqjxBKbDmUjSNjk2ja162cqPYX%2BLxVW9CQfBlXpWYWS0i3BB52Dj43YhdmiNYxYN9W%2FT53FsJlg%2BhKtkgEtpMU5nZ2RidGYWUdtgFtqeAaX0tBndP5nSQNGaOM4XLK8DJjBWUaUTC3MHFDeRn8qEmwQwHa9%2BrT9vmC%2BxNl6ZOoxuDbPsV2C5hpzSrIJhSKZ45ayT1dV73bkqprk&X-Amz-Signature=569ff905e81a34400a52bbdad870e19e608b98a8d6d2d1072da9f95375e0ae3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDHJVQE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHR2RTjedORkOmyhDGEkmQtbEt2MqNuF1kAqgB6Nb16GAiAgL8YWMLflnJKdZJFPTTZPULP7S4%2FNUUQ%2BIIfZbpFgmCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM672EU6FTm%2BBxhwBKtwDArhb5HvQsLD%2FQF7rkMeUI4TWQvmYWhiWXdkSY4x08WSm1Vx1vYWBWeUGfDqEvM%2FLWRH%2Bs8P5iL7W5UNZ5m0iDnoj7TEAa411eBTgbhxrvKmGpp%2BdZ0yxUsNZsVufBy2Kdifizc5s2KzUDdIIvNF3Vcf24Zq95xjIfuig4FBtjQ3Uxi2K3rYhPXbLPSPUixkwHighDh41i4%2Be%2BC%2B3Toyw%2FS3EbPy3T1N3XqFqWE0BE1y24GjeBKN8k372ayifimrXDp0uJ774Ovl%2BqpracF1xQj7ESt%2BnbGNjhKjfavrgaQ3NKBY%2F2ehTogB9HjCh%2F3XovcuxbPxWdiqUmxRZ0CkencwdcJkR80yCf7HT6l2GA7IvI%2B5V6A8BKuwFCGrMx7UbV4U%2Fnre%2BNx0FSJVw2qjQZdfWHSNnJNBN8HtMyuPLGoU65lZb%2FILgrbABDGMxstkdHjkuLPNvlVO%2BSTa%2FiOriYIMdMWlC6J7ypZdcBaqEYr6ZQS%2FYBT9TrViIEzJbEyq4CfxhiezCKtpEdntgkD49rm6hRo6YOOZQjhZBeAxCE8f0i%2B0rXkoUugqP7wv3dRg357hpAR1cItO%2Bau9sUVeHD%2BnosUkY4a66AEOG2UKY6u%2BjTWwn1IuI0diroyEwx8yvxAY6pgHSwirOeyDtVuAxFlqjxBKbDmUjSNjk2ja162cqPYX%2BLxVW9CQfBlXpWYWS0i3BB52Dj43YhdmiNYxYN9W%2FT53FsJlg%2BhKtkgEtpMU5nZ2RidGYWUdtgFtqeAaX0tBndP5nSQNGaOM4XLK8DJjBWUaUTC3MHFDeRn8qEmwQwHa9%2BrT9vmC%2BxNl6ZOoxuDbPsV2C5hpzSrIJhSKZ45ayT1dV73bkqprk&X-Amz-Signature=3f2ea02cfd799f1b196ab83c666c1f497fc5a0e1aaa874b8dbd3322314f951af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDHJVQE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHR2RTjedORkOmyhDGEkmQtbEt2MqNuF1kAqgB6Nb16GAiAgL8YWMLflnJKdZJFPTTZPULP7S4%2FNUUQ%2BIIfZbpFgmCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM672EU6FTm%2BBxhwBKtwDArhb5HvQsLD%2FQF7rkMeUI4TWQvmYWhiWXdkSY4x08WSm1Vx1vYWBWeUGfDqEvM%2FLWRH%2Bs8P5iL7W5UNZ5m0iDnoj7TEAa411eBTgbhxrvKmGpp%2BdZ0yxUsNZsVufBy2Kdifizc5s2KzUDdIIvNF3Vcf24Zq95xjIfuig4FBtjQ3Uxi2K3rYhPXbLPSPUixkwHighDh41i4%2Be%2BC%2B3Toyw%2FS3EbPy3T1N3XqFqWE0BE1y24GjeBKN8k372ayifimrXDp0uJ774Ovl%2BqpracF1xQj7ESt%2BnbGNjhKjfavrgaQ3NKBY%2F2ehTogB9HjCh%2F3XovcuxbPxWdiqUmxRZ0CkencwdcJkR80yCf7HT6l2GA7IvI%2B5V6A8BKuwFCGrMx7UbV4U%2Fnre%2BNx0FSJVw2qjQZdfWHSNnJNBN8HtMyuPLGoU65lZb%2FILgrbABDGMxstkdHjkuLPNvlVO%2BSTa%2FiOriYIMdMWlC6J7ypZdcBaqEYr6ZQS%2FYBT9TrViIEzJbEyq4CfxhiezCKtpEdntgkD49rm6hRo6YOOZQjhZBeAxCE8f0i%2B0rXkoUugqP7wv3dRg357hpAR1cItO%2Bau9sUVeHD%2BnosUkY4a66AEOG2UKY6u%2BjTWwn1IuI0diroyEwx8yvxAY6pgHSwirOeyDtVuAxFlqjxBKbDmUjSNjk2ja162cqPYX%2BLxVW9CQfBlXpWYWS0i3BB52Dj43YhdmiNYxYN9W%2FT53FsJlg%2BhKtkgEtpMU5nZ2RidGYWUdtgFtqeAaX0tBndP5nSQNGaOM4XLK8DJjBWUaUTC3MHFDeRn8qEmwQwHa9%2BrT9vmC%2BxNl6ZOoxuDbPsV2C5hpzSrIJhSKZ45ayT1dV73bkqprk&X-Amz-Signature=aaa4eb17875efc9c158b4b2dd3c8069d648e2d26fa691af4c259b7dda539a31f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDHJVQE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHR2RTjedORkOmyhDGEkmQtbEt2MqNuF1kAqgB6Nb16GAiAgL8YWMLflnJKdZJFPTTZPULP7S4%2FNUUQ%2BIIfZbpFgmCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM672EU6FTm%2BBxhwBKtwDArhb5HvQsLD%2FQF7rkMeUI4TWQvmYWhiWXdkSY4x08WSm1Vx1vYWBWeUGfDqEvM%2FLWRH%2Bs8P5iL7W5UNZ5m0iDnoj7TEAa411eBTgbhxrvKmGpp%2BdZ0yxUsNZsVufBy2Kdifizc5s2KzUDdIIvNF3Vcf24Zq95xjIfuig4FBtjQ3Uxi2K3rYhPXbLPSPUixkwHighDh41i4%2Be%2BC%2B3Toyw%2FS3EbPy3T1N3XqFqWE0BE1y24GjeBKN8k372ayifimrXDp0uJ774Ovl%2BqpracF1xQj7ESt%2BnbGNjhKjfavrgaQ3NKBY%2F2ehTogB9HjCh%2F3XovcuxbPxWdiqUmxRZ0CkencwdcJkR80yCf7HT6l2GA7IvI%2B5V6A8BKuwFCGrMx7UbV4U%2Fnre%2BNx0FSJVw2qjQZdfWHSNnJNBN8HtMyuPLGoU65lZb%2FILgrbABDGMxstkdHjkuLPNvlVO%2BSTa%2FiOriYIMdMWlC6J7ypZdcBaqEYr6ZQS%2FYBT9TrViIEzJbEyq4CfxhiezCKtpEdntgkD49rm6hRo6YOOZQjhZBeAxCE8f0i%2B0rXkoUugqP7wv3dRg357hpAR1cItO%2Bau9sUVeHD%2BnosUkY4a66AEOG2UKY6u%2BjTWwn1IuI0diroyEwx8yvxAY6pgHSwirOeyDtVuAxFlqjxBKbDmUjSNjk2ja162cqPYX%2BLxVW9CQfBlXpWYWS0i3BB52Dj43YhdmiNYxYN9W%2FT53FsJlg%2BhKtkgEtpMU5nZ2RidGYWUdtgFtqeAaX0tBndP5nSQNGaOM4XLK8DJjBWUaUTC3MHFDeRn8qEmwQwHa9%2BrT9vmC%2BxNl6ZOoxuDbPsV2C5hpzSrIJhSKZ45ayT1dV73bkqprk&X-Amz-Signature=a89ba27e8fd0e3350b310b6c473d30596e2557fc55b9644fc070bdc017f0e26a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
