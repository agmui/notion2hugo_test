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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7YB6SUK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDrEupAEkbYX3DH%2Bf06mIV2yzY9UWnBPbRhxJbYQVAIKgIgFLreEqE7G7lQv%2FJAwBObbuqn2ZPwjy4PJ%2BFA3wK5QaAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPVWRFxvf8acAwRgDSrcA9VyMxhl1VSjbE6xuaQO%2B3L8qvhfFVBirNcZT2R9qs5SQcdw6Ftn5zYwwhI0QJknQ9tzv4E%2B3GgoRXEpgKoRAVh556eDLuFy0lkERxKe0zpaINdf4gsdRH8yOZMiz5W12bF34spg8H7LRR7RSDWNf6NCBKYNZWzuG3Tsd0RjwNRj49GgjGjgaMGsaLa9G2e3r5V8cpCd8WyjMX1Od4fxSTWjh9yQJUoMeBxIC2J1OqcnbjmU4cJXnjbOoPU0EuhEESS6JBoDFe6H9x4rWLTQCqEHyZ76sVMeHvvoHgxicdbLN%2BQ%2BNe0S3Y6%2BUNopwSnSP0DzsAwCCWWoxO2ID4NBJupbCfnmeGFaRCDS0Qhgmt7rjS%2FOCftM61JlunUEuP7%2BvEduWOqp155PPPd8rB0j6ZrHDWGsghmIq4aKOUYDHparRnzYvqrNfW6COSQONllgw2YXdE9MrOR%2BC3hs3UKLfZFSe%2Fdi3Y9NSeXs5jQEQez9mD7IBvCerSdeKQc3KCMl4%2FeN2wSZA7Jol10r4RtQi97Fmdnu423UZiogSmyBoY3XspOJsV0ANQouGNiSDO%2BLFVuGLuHhJyYyrUzEWSj73PNgHEgcuJaoVkXcFAq2Liyqny3DMaisGJjx3wlMMP3FzsQGOqUBMZ21p9Df2lT9MPvevrFLet9DnAH2shNxBgEy%2FK09izGqT3l9OpIYOCslj5jaLWApIXcvtypzRiwUue7x3LwBwcyOvqYOCnwd5TCgz3RTQ6sicnz27M24JHvvG4ycJHjM757eHWV70j018lsubC5ti0khSR4DlnVIb7kWVeiJ9UjCYvDEOhnZmyhxzhmcCa1lw57a46p0VgdH%2Fjt9Q6QUn7Vtohn4&X-Amz-Signature=1eac428587df1dbf72d49db56eb154c3231a9d7f1f7ae726e0087799daada58f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7YB6SUK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDrEupAEkbYX3DH%2Bf06mIV2yzY9UWnBPbRhxJbYQVAIKgIgFLreEqE7G7lQv%2FJAwBObbuqn2ZPwjy4PJ%2BFA3wK5QaAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPVWRFxvf8acAwRgDSrcA9VyMxhl1VSjbE6xuaQO%2B3L8qvhfFVBirNcZT2R9qs5SQcdw6Ftn5zYwwhI0QJknQ9tzv4E%2B3GgoRXEpgKoRAVh556eDLuFy0lkERxKe0zpaINdf4gsdRH8yOZMiz5W12bF34spg8H7LRR7RSDWNf6NCBKYNZWzuG3Tsd0RjwNRj49GgjGjgaMGsaLa9G2e3r5V8cpCd8WyjMX1Od4fxSTWjh9yQJUoMeBxIC2J1OqcnbjmU4cJXnjbOoPU0EuhEESS6JBoDFe6H9x4rWLTQCqEHyZ76sVMeHvvoHgxicdbLN%2BQ%2BNe0S3Y6%2BUNopwSnSP0DzsAwCCWWoxO2ID4NBJupbCfnmeGFaRCDS0Qhgmt7rjS%2FOCftM61JlunUEuP7%2BvEduWOqp155PPPd8rB0j6ZrHDWGsghmIq4aKOUYDHparRnzYvqrNfW6COSQONllgw2YXdE9MrOR%2BC3hs3UKLfZFSe%2Fdi3Y9NSeXs5jQEQez9mD7IBvCerSdeKQc3KCMl4%2FeN2wSZA7Jol10r4RtQi97Fmdnu423UZiogSmyBoY3XspOJsV0ANQouGNiSDO%2BLFVuGLuHhJyYyrUzEWSj73PNgHEgcuJaoVkXcFAq2Liyqny3DMaisGJjx3wlMMP3FzsQGOqUBMZ21p9Df2lT9MPvevrFLet9DnAH2shNxBgEy%2FK09izGqT3l9OpIYOCslj5jaLWApIXcvtypzRiwUue7x3LwBwcyOvqYOCnwd5TCgz3RTQ6sicnz27M24JHvvG4ycJHjM757eHWV70j018lsubC5ti0khSR4DlnVIb7kWVeiJ9UjCYvDEOhnZmyhxzhmcCa1lw57a46p0VgdH%2Fjt9Q6QUn7Vtohn4&X-Amz-Signature=fb496ed2606e475d22495a449d293683c1e262d8de4bfaf0455e230751a3ae7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7YB6SUK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDrEupAEkbYX3DH%2Bf06mIV2yzY9UWnBPbRhxJbYQVAIKgIgFLreEqE7G7lQv%2FJAwBObbuqn2ZPwjy4PJ%2BFA3wK5QaAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPVWRFxvf8acAwRgDSrcA9VyMxhl1VSjbE6xuaQO%2B3L8qvhfFVBirNcZT2R9qs5SQcdw6Ftn5zYwwhI0QJknQ9tzv4E%2B3GgoRXEpgKoRAVh556eDLuFy0lkERxKe0zpaINdf4gsdRH8yOZMiz5W12bF34spg8H7LRR7RSDWNf6NCBKYNZWzuG3Tsd0RjwNRj49GgjGjgaMGsaLa9G2e3r5V8cpCd8WyjMX1Od4fxSTWjh9yQJUoMeBxIC2J1OqcnbjmU4cJXnjbOoPU0EuhEESS6JBoDFe6H9x4rWLTQCqEHyZ76sVMeHvvoHgxicdbLN%2BQ%2BNe0S3Y6%2BUNopwSnSP0DzsAwCCWWoxO2ID4NBJupbCfnmeGFaRCDS0Qhgmt7rjS%2FOCftM61JlunUEuP7%2BvEduWOqp155PPPd8rB0j6ZrHDWGsghmIq4aKOUYDHparRnzYvqrNfW6COSQONllgw2YXdE9MrOR%2BC3hs3UKLfZFSe%2Fdi3Y9NSeXs5jQEQez9mD7IBvCerSdeKQc3KCMl4%2FeN2wSZA7Jol10r4RtQi97Fmdnu423UZiogSmyBoY3XspOJsV0ANQouGNiSDO%2BLFVuGLuHhJyYyrUzEWSj73PNgHEgcuJaoVkXcFAq2Liyqny3DMaisGJjx3wlMMP3FzsQGOqUBMZ21p9Df2lT9MPvevrFLet9DnAH2shNxBgEy%2FK09izGqT3l9OpIYOCslj5jaLWApIXcvtypzRiwUue7x3LwBwcyOvqYOCnwd5TCgz3RTQ6sicnz27M24JHvvG4ycJHjM757eHWV70j018lsubC5ti0khSR4DlnVIb7kWVeiJ9UjCYvDEOhnZmyhxzhmcCa1lw57a46p0VgdH%2Fjt9Q6QUn7Vtohn4&X-Amz-Signature=ac0e79e0c0afdcf420da552fcd0d081a0af74bda8a2fdaa8140d176f46d5b3c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7YB6SUK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDrEupAEkbYX3DH%2Bf06mIV2yzY9UWnBPbRhxJbYQVAIKgIgFLreEqE7G7lQv%2FJAwBObbuqn2ZPwjy4PJ%2BFA3wK5QaAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPVWRFxvf8acAwRgDSrcA9VyMxhl1VSjbE6xuaQO%2B3L8qvhfFVBirNcZT2R9qs5SQcdw6Ftn5zYwwhI0QJknQ9tzv4E%2B3GgoRXEpgKoRAVh556eDLuFy0lkERxKe0zpaINdf4gsdRH8yOZMiz5W12bF34spg8H7LRR7RSDWNf6NCBKYNZWzuG3Tsd0RjwNRj49GgjGjgaMGsaLa9G2e3r5V8cpCd8WyjMX1Od4fxSTWjh9yQJUoMeBxIC2J1OqcnbjmU4cJXnjbOoPU0EuhEESS6JBoDFe6H9x4rWLTQCqEHyZ76sVMeHvvoHgxicdbLN%2BQ%2BNe0S3Y6%2BUNopwSnSP0DzsAwCCWWoxO2ID4NBJupbCfnmeGFaRCDS0Qhgmt7rjS%2FOCftM61JlunUEuP7%2BvEduWOqp155PPPd8rB0j6ZrHDWGsghmIq4aKOUYDHparRnzYvqrNfW6COSQONllgw2YXdE9MrOR%2BC3hs3UKLfZFSe%2Fdi3Y9NSeXs5jQEQez9mD7IBvCerSdeKQc3KCMl4%2FeN2wSZA7Jol10r4RtQi97Fmdnu423UZiogSmyBoY3XspOJsV0ANQouGNiSDO%2BLFVuGLuHhJyYyrUzEWSj73PNgHEgcuJaoVkXcFAq2Liyqny3DMaisGJjx3wlMMP3FzsQGOqUBMZ21p9Df2lT9MPvevrFLet9DnAH2shNxBgEy%2FK09izGqT3l9OpIYOCslj5jaLWApIXcvtypzRiwUue7x3LwBwcyOvqYOCnwd5TCgz3RTQ6sicnz27M24JHvvG4ycJHjM757eHWV70j018lsubC5ti0khSR4DlnVIb7kWVeiJ9UjCYvDEOhnZmyhxzhmcCa1lw57a46p0VgdH%2Fjt9Q6QUn7Vtohn4&X-Amz-Signature=95f4206ed794c60583569031c382c817b9e9d6985ec0519ff70f5893b3ae9fe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7YB6SUK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDrEupAEkbYX3DH%2Bf06mIV2yzY9UWnBPbRhxJbYQVAIKgIgFLreEqE7G7lQv%2FJAwBObbuqn2ZPwjy4PJ%2BFA3wK5QaAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPVWRFxvf8acAwRgDSrcA9VyMxhl1VSjbE6xuaQO%2B3L8qvhfFVBirNcZT2R9qs5SQcdw6Ftn5zYwwhI0QJknQ9tzv4E%2B3GgoRXEpgKoRAVh556eDLuFy0lkERxKe0zpaINdf4gsdRH8yOZMiz5W12bF34spg8H7LRR7RSDWNf6NCBKYNZWzuG3Tsd0RjwNRj49GgjGjgaMGsaLa9G2e3r5V8cpCd8WyjMX1Od4fxSTWjh9yQJUoMeBxIC2J1OqcnbjmU4cJXnjbOoPU0EuhEESS6JBoDFe6H9x4rWLTQCqEHyZ76sVMeHvvoHgxicdbLN%2BQ%2BNe0S3Y6%2BUNopwSnSP0DzsAwCCWWoxO2ID4NBJupbCfnmeGFaRCDS0Qhgmt7rjS%2FOCftM61JlunUEuP7%2BvEduWOqp155PPPd8rB0j6ZrHDWGsghmIq4aKOUYDHparRnzYvqrNfW6COSQONllgw2YXdE9MrOR%2BC3hs3UKLfZFSe%2Fdi3Y9NSeXs5jQEQez9mD7IBvCerSdeKQc3KCMl4%2FeN2wSZA7Jol10r4RtQi97Fmdnu423UZiogSmyBoY3XspOJsV0ANQouGNiSDO%2BLFVuGLuHhJyYyrUzEWSj73PNgHEgcuJaoVkXcFAq2Liyqny3DMaisGJjx3wlMMP3FzsQGOqUBMZ21p9Df2lT9MPvevrFLet9DnAH2shNxBgEy%2FK09izGqT3l9OpIYOCslj5jaLWApIXcvtypzRiwUue7x3LwBwcyOvqYOCnwd5TCgz3RTQ6sicnz27M24JHvvG4ycJHjM757eHWV70j018lsubC5ti0khSR4DlnVIb7kWVeiJ9UjCYvDEOhnZmyhxzhmcCa1lw57a46p0VgdH%2Fjt9Q6QUn7Vtohn4&X-Amz-Signature=4aa2fc47b68376f580d8c9bcc71a940f1d0294c920e202965459ff1de4d81475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7YB6SUK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDrEupAEkbYX3DH%2Bf06mIV2yzY9UWnBPbRhxJbYQVAIKgIgFLreEqE7G7lQv%2FJAwBObbuqn2ZPwjy4PJ%2BFA3wK5QaAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPVWRFxvf8acAwRgDSrcA9VyMxhl1VSjbE6xuaQO%2B3L8qvhfFVBirNcZT2R9qs5SQcdw6Ftn5zYwwhI0QJknQ9tzv4E%2B3GgoRXEpgKoRAVh556eDLuFy0lkERxKe0zpaINdf4gsdRH8yOZMiz5W12bF34spg8H7LRR7RSDWNf6NCBKYNZWzuG3Tsd0RjwNRj49GgjGjgaMGsaLa9G2e3r5V8cpCd8WyjMX1Od4fxSTWjh9yQJUoMeBxIC2J1OqcnbjmU4cJXnjbOoPU0EuhEESS6JBoDFe6H9x4rWLTQCqEHyZ76sVMeHvvoHgxicdbLN%2BQ%2BNe0S3Y6%2BUNopwSnSP0DzsAwCCWWoxO2ID4NBJupbCfnmeGFaRCDS0Qhgmt7rjS%2FOCftM61JlunUEuP7%2BvEduWOqp155PPPd8rB0j6ZrHDWGsghmIq4aKOUYDHparRnzYvqrNfW6COSQONllgw2YXdE9MrOR%2BC3hs3UKLfZFSe%2Fdi3Y9NSeXs5jQEQez9mD7IBvCerSdeKQc3KCMl4%2FeN2wSZA7Jol10r4RtQi97Fmdnu423UZiogSmyBoY3XspOJsV0ANQouGNiSDO%2BLFVuGLuHhJyYyrUzEWSj73PNgHEgcuJaoVkXcFAq2Liyqny3DMaisGJjx3wlMMP3FzsQGOqUBMZ21p9Df2lT9MPvevrFLet9DnAH2shNxBgEy%2FK09izGqT3l9OpIYOCslj5jaLWApIXcvtypzRiwUue7x3LwBwcyOvqYOCnwd5TCgz3RTQ6sicnz27M24JHvvG4ycJHjM757eHWV70j018lsubC5ti0khSR4DlnVIb7kWVeiJ9UjCYvDEOhnZmyhxzhmcCa1lw57a46p0VgdH%2Fjt9Q6QUn7Vtohn4&X-Amz-Signature=0d5531870a0dff8b75712f4c312e4d7c5931cf4e1af939873125357e91866720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7YB6SUK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDrEupAEkbYX3DH%2Bf06mIV2yzY9UWnBPbRhxJbYQVAIKgIgFLreEqE7G7lQv%2FJAwBObbuqn2ZPwjy4PJ%2BFA3wK5QaAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPVWRFxvf8acAwRgDSrcA9VyMxhl1VSjbE6xuaQO%2B3L8qvhfFVBirNcZT2R9qs5SQcdw6Ftn5zYwwhI0QJknQ9tzv4E%2B3GgoRXEpgKoRAVh556eDLuFy0lkERxKe0zpaINdf4gsdRH8yOZMiz5W12bF34spg8H7LRR7RSDWNf6NCBKYNZWzuG3Tsd0RjwNRj49GgjGjgaMGsaLa9G2e3r5V8cpCd8WyjMX1Od4fxSTWjh9yQJUoMeBxIC2J1OqcnbjmU4cJXnjbOoPU0EuhEESS6JBoDFe6H9x4rWLTQCqEHyZ76sVMeHvvoHgxicdbLN%2BQ%2BNe0S3Y6%2BUNopwSnSP0DzsAwCCWWoxO2ID4NBJupbCfnmeGFaRCDS0Qhgmt7rjS%2FOCftM61JlunUEuP7%2BvEduWOqp155PPPd8rB0j6ZrHDWGsghmIq4aKOUYDHparRnzYvqrNfW6COSQONllgw2YXdE9MrOR%2BC3hs3UKLfZFSe%2Fdi3Y9NSeXs5jQEQez9mD7IBvCerSdeKQc3KCMl4%2FeN2wSZA7Jol10r4RtQi97Fmdnu423UZiogSmyBoY3XspOJsV0ANQouGNiSDO%2BLFVuGLuHhJyYyrUzEWSj73PNgHEgcuJaoVkXcFAq2Liyqny3DMaisGJjx3wlMMP3FzsQGOqUBMZ21p9Df2lT9MPvevrFLet9DnAH2shNxBgEy%2FK09izGqT3l9OpIYOCslj5jaLWApIXcvtypzRiwUue7x3LwBwcyOvqYOCnwd5TCgz3RTQ6sicnz27M24JHvvG4ycJHjM757eHWV70j018lsubC5ti0khSR4DlnVIb7kWVeiJ9UjCYvDEOhnZmyhxzhmcCa1lw57a46p0VgdH%2Fjt9Q6QUn7Vtohn4&X-Amz-Signature=a376106ba0d1dadf6f9b38d21c19dc4c32a2cbc82e38c7537c8670385854a792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7YB6SUK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDrEupAEkbYX3DH%2Bf06mIV2yzY9UWnBPbRhxJbYQVAIKgIgFLreEqE7G7lQv%2FJAwBObbuqn2ZPwjy4PJ%2BFA3wK5QaAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPVWRFxvf8acAwRgDSrcA9VyMxhl1VSjbE6xuaQO%2B3L8qvhfFVBirNcZT2R9qs5SQcdw6Ftn5zYwwhI0QJknQ9tzv4E%2B3GgoRXEpgKoRAVh556eDLuFy0lkERxKe0zpaINdf4gsdRH8yOZMiz5W12bF34spg8H7LRR7RSDWNf6NCBKYNZWzuG3Tsd0RjwNRj49GgjGjgaMGsaLa9G2e3r5V8cpCd8WyjMX1Od4fxSTWjh9yQJUoMeBxIC2J1OqcnbjmU4cJXnjbOoPU0EuhEESS6JBoDFe6H9x4rWLTQCqEHyZ76sVMeHvvoHgxicdbLN%2BQ%2BNe0S3Y6%2BUNopwSnSP0DzsAwCCWWoxO2ID4NBJupbCfnmeGFaRCDS0Qhgmt7rjS%2FOCftM61JlunUEuP7%2BvEduWOqp155PPPd8rB0j6ZrHDWGsghmIq4aKOUYDHparRnzYvqrNfW6COSQONllgw2YXdE9MrOR%2BC3hs3UKLfZFSe%2Fdi3Y9NSeXs5jQEQez9mD7IBvCerSdeKQc3KCMl4%2FeN2wSZA7Jol10r4RtQi97Fmdnu423UZiogSmyBoY3XspOJsV0ANQouGNiSDO%2BLFVuGLuHhJyYyrUzEWSj73PNgHEgcuJaoVkXcFAq2Liyqny3DMaisGJjx3wlMMP3FzsQGOqUBMZ21p9Df2lT9MPvevrFLet9DnAH2shNxBgEy%2FK09izGqT3l9OpIYOCslj5jaLWApIXcvtypzRiwUue7x3LwBwcyOvqYOCnwd5TCgz3RTQ6sicnz27M24JHvvG4ycJHjM757eHWV70j018lsubC5ti0khSR4DlnVIb7kWVeiJ9UjCYvDEOhnZmyhxzhmcCa1lw57a46p0VgdH%2Fjt9Q6QUn7Vtohn4&X-Amz-Signature=4fec67892a3faffd59eea3994f18c7eb88a61aace02b3667c19867f6941de495&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7YB6SUK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDrEupAEkbYX3DH%2Bf06mIV2yzY9UWnBPbRhxJbYQVAIKgIgFLreEqE7G7lQv%2FJAwBObbuqn2ZPwjy4PJ%2BFA3wK5QaAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPVWRFxvf8acAwRgDSrcA9VyMxhl1VSjbE6xuaQO%2B3L8qvhfFVBirNcZT2R9qs5SQcdw6Ftn5zYwwhI0QJknQ9tzv4E%2B3GgoRXEpgKoRAVh556eDLuFy0lkERxKe0zpaINdf4gsdRH8yOZMiz5W12bF34spg8H7LRR7RSDWNf6NCBKYNZWzuG3Tsd0RjwNRj49GgjGjgaMGsaLa9G2e3r5V8cpCd8WyjMX1Od4fxSTWjh9yQJUoMeBxIC2J1OqcnbjmU4cJXnjbOoPU0EuhEESS6JBoDFe6H9x4rWLTQCqEHyZ76sVMeHvvoHgxicdbLN%2BQ%2BNe0S3Y6%2BUNopwSnSP0DzsAwCCWWoxO2ID4NBJupbCfnmeGFaRCDS0Qhgmt7rjS%2FOCftM61JlunUEuP7%2BvEduWOqp155PPPd8rB0j6ZrHDWGsghmIq4aKOUYDHparRnzYvqrNfW6COSQONllgw2YXdE9MrOR%2BC3hs3UKLfZFSe%2Fdi3Y9NSeXs5jQEQez9mD7IBvCerSdeKQc3KCMl4%2FeN2wSZA7Jol10r4RtQi97Fmdnu423UZiogSmyBoY3XspOJsV0ANQouGNiSDO%2BLFVuGLuHhJyYyrUzEWSj73PNgHEgcuJaoVkXcFAq2Liyqny3DMaisGJjx3wlMMP3FzsQGOqUBMZ21p9Df2lT9MPvevrFLet9DnAH2shNxBgEy%2FK09izGqT3l9OpIYOCslj5jaLWApIXcvtypzRiwUue7x3LwBwcyOvqYOCnwd5TCgz3RTQ6sicnz27M24JHvvG4ycJHjM757eHWV70j018lsubC5ti0khSR4DlnVIb7kWVeiJ9UjCYvDEOhnZmyhxzhmcCa1lw57a46p0VgdH%2Fjt9Q6QUn7Vtohn4&X-Amz-Signature=7557a302a05b127181f9b6fc4e0529a68d4881282f59c4b4ab57966650f3e331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7YB6SUK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDrEupAEkbYX3DH%2Bf06mIV2yzY9UWnBPbRhxJbYQVAIKgIgFLreEqE7G7lQv%2FJAwBObbuqn2ZPwjy4PJ%2BFA3wK5QaAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPVWRFxvf8acAwRgDSrcA9VyMxhl1VSjbE6xuaQO%2B3L8qvhfFVBirNcZT2R9qs5SQcdw6Ftn5zYwwhI0QJknQ9tzv4E%2B3GgoRXEpgKoRAVh556eDLuFy0lkERxKe0zpaINdf4gsdRH8yOZMiz5W12bF34spg8H7LRR7RSDWNf6NCBKYNZWzuG3Tsd0RjwNRj49GgjGjgaMGsaLa9G2e3r5V8cpCd8WyjMX1Od4fxSTWjh9yQJUoMeBxIC2J1OqcnbjmU4cJXnjbOoPU0EuhEESS6JBoDFe6H9x4rWLTQCqEHyZ76sVMeHvvoHgxicdbLN%2BQ%2BNe0S3Y6%2BUNopwSnSP0DzsAwCCWWoxO2ID4NBJupbCfnmeGFaRCDS0Qhgmt7rjS%2FOCftM61JlunUEuP7%2BvEduWOqp155PPPd8rB0j6ZrHDWGsghmIq4aKOUYDHparRnzYvqrNfW6COSQONllgw2YXdE9MrOR%2BC3hs3UKLfZFSe%2Fdi3Y9NSeXs5jQEQez9mD7IBvCerSdeKQc3KCMl4%2FeN2wSZA7Jol10r4RtQi97Fmdnu423UZiogSmyBoY3XspOJsV0ANQouGNiSDO%2BLFVuGLuHhJyYyrUzEWSj73PNgHEgcuJaoVkXcFAq2Liyqny3DMaisGJjx3wlMMP3FzsQGOqUBMZ21p9Df2lT9MPvevrFLet9DnAH2shNxBgEy%2FK09izGqT3l9OpIYOCslj5jaLWApIXcvtypzRiwUue7x3LwBwcyOvqYOCnwd5TCgz3RTQ6sicnz27M24JHvvG4ycJHjM757eHWV70j018lsubC5ti0khSR4DlnVIb7kWVeiJ9UjCYvDEOhnZmyhxzhmcCa1lw57a46p0VgdH%2Fjt9Q6QUn7Vtohn4&X-Amz-Signature=48bc9be96100f11e89acfe5729d331ffd50e5b2ebe0775f0d70f58a05369471c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DG5ZZQ4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC8o1kyfv%2BsgYNOBXOkIw9Z1oWQSGzTfWHt2w9xyA6SPAIhAIYQ65pv82UTGJshOeaMVf5l5geKWVs2BlTMbz4cjR2%2BKv8DCHwQABoMNjM3NDIzMTgzODA1IgyMeKDEtJVvS7Mvif4q3APSg1INOjgRN4bw6w6vV0%2FCNsFdO7bmgcvzf%2Fn8zMZ19GG598v5lHsXMHZNi1eWCI84W%2BuIdk%2Bz7PUfxiC781cc1O86AgbndaXzj4rtKrc%2Fh1Po7opKULpKJT0TqznDjbgLLnafuOVNXi9TPAeZkzt2A%2B2GpMfceqKHdUdSuzfvNLuz4AirSldSMAnju9GPOZ2ToFWTNBnVGGT%2FGZodLxT7XXUl7Vl0YB3eqY7EQ2Znt%2FRgUqOEhwvUSn8c%2Fs8XdtIQigDEK4pbLQeUZFWiN95KveyJe7wKHVbJZ5uvLhwVMgpwMk01ry4H8KxXX2XafLuGR%2BE2p8XYIigFH5NGCK1ZmOg8wzGfVD3ZRyLI9iIXrUz80BMDd0rf%2FZ0JqcA8Zt66Op76tk6ClPC%2F%2BwyqpIVHNsBQw9cFvntabwBigcp6R%2BgYZjkhAs1wyqu%2FhTwEUbXmnVt9VL5%2FwCJkxldnv22JnzFClNvXGHSzKbtsdHfDdqUwxTZz4k2t4WH615YVXETOmAdvRw7tdxs9ps13%2BQHQzThuPqzhzlFOQjhqCKa9s6lNuGBaVqJq%2B1xg1rx7VfyXst0JlOdTceifNEVBgl25aZLAk6BuqJbjgqDHViCjkScdQwlfPIq5mwTyLDCdxs7EBjqkAeO1pclZvuEgVczXSAfnQj3%2BCsMRUBj87v5P5O1wkFzJp%2FCQiGGatmg%2F5ysm3XEaBo2UJosjdYVmCkyAbNvEPwq42EuOtliBKwLZLMQKH5wFoRcvyb18FYGNcTiveBofI2toGW1NvYHtrckKOjKPYEyDO37AWE66xzpotShjUt7PIcoPhtzkScH8WN1AszjSCAtBiNXdH54Gi8w1U8NaiNnALDLY&X-Amz-Signature=d8f06f9fc27db688db10b43a4328bffeef0191cc6c9e1b71ef68506bdd87adea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOPH6H7Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCOiZXxgwAHJWL85KiFarlsMHJ7VT2m8aRHUnrHMWNHTQIhALAslADzy45eamjVr%2BmUZ1XCwnH68lw%2BHEmlgfpdhK6FKv8DCHwQABoMNjM3NDIzMTgzODA1Igw1PFIfDOArsyAfwrAq3AM%2FX37Q5bQVjMR8700bVY51ia1CeG833svTaeiRsauiyWI90hEJB%2FlZ8FED9dgXNvsXvqt%2BL7IqgIaE4LomG3lQ8gITy0j0kot52cT8DTmkPUaKaLq9vBbThe4BGm5%2BaJkcq2sCbrkhcWuPEH1q9EG%2BukEvpOlcoCEEvwyfr4SGHLDTlu0xXqc6ICW0%2BC8D9PbMMXWeBkGinMPEuy3Z6VF87OPxzK5CStpK7ajKCuIitgJLA7m9CJ2jGOCIVP%2BG71UGFn1g%2BEPp39mh45Ru9empWe3%2FsKknONoCwuSN24Lp%2BcYtRy8CUgi8wN8Ls%2Bkk6Gp9sBiFkjO9aXlEdSi3gPnyl1p6XwqKjMg%2FRhwDGC9CT5hgB2vGuppfwOyxG5gwn7a4wt0A9qtGqyAvqjhlxkn1EaZI2YITR4oOoo63E2ZMySjzMmQZ%2BpFnpg5C5wXKyUmP71FlXGZvXXzX3Qfrid3joG15ttSRdVT8pWS%2BYCOFZhX9VpYXWU%2Bzl2DidLk1mdzn0menXVPaBlmaiU%2Bu9wDA9c57yEj8bBA1K7R56SLUxIAZsXmn6KIhchrQLEcvrj4bTI9nWnLOnri4Y35Zg6ZAuOQbc%2BnzpD%2FIb8Gt2rkkN8QQBArA6bfxG5Z5MzC6xc7EBjqkAV1cremWNWKdPyMsbslFqbsUlAJ6KzXR4Woq5DFbXZdmdRxUCwSe%2B7K%2Brmtca%2BR6BdqTF5bTi5jXYSg7WlUrC6dAD4d7cZ5ObES89tfMW4YmXK59%2BBMGRTUIsT3LOsiqRmeuZoDJF65nkgkgg6M2%2FQe39V9H1haqdnDO73NSmMmys48x4WDqExLvLcUPCTebuxG4hWh1AmqbiKIhSSxtwrp716HN&X-Amz-Signature=15252b1aa5c6b3d012fe54c8345a8dd5adcaefcd95972a0799c0036e50fec93a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFGYQDZT%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHFghCE%2BRwBsFL%2BebsV5B6sDv7eW4hJCzNU%2B83aST9QVAiEA0acyE%2Beguo5eyzHjVrDoQSezagSxBNxpNLyMn3gc%2BL8q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDITS%2FRQOBOarbTyFaCrcA7ae0d9%2BJ830FM1i3UogV1hZLyxDmoHD%2BqhMfob5c2UP%2FRIL3mUmTfuOB5VxHZ8KzJbb1zJ3YoDWwlVEusaEZVBynvGHrJ4POcsL%2FhD5Ryga7GbIiNJE3c1mB56tQtV9j8xAGONHDf96NlNsW3rPzgoPdznmdY%2FP9eVrgtAqGH7mwPi4MLE9DaZlXzqJMsGGELOm7pi2qeliRZ4zjfe0hhEXcIGmUXTDfCjo7mLIquoq2v1b7WwqlEjrhbMMRQ%2F3sVZmmomgLbYNnXqFMW9Ai8%2FWOpgPIodWGMamStvVFY82kTZzK5AelWCo5V45coSzX7ewwcNboJ1xyl7yNYumDid33Upl8dHBVqEre7V59LmUM63EqW09HcYOSk%2FN%2BzDZ5e28HmpxQl8XUQK%2BYgejLU9UFlUQOniPTUNoWpfVb9qOaLyONWT%2FdXWdCo3qDPKw9fxt06outYjTraYqT7A3suqx9WL5v9ku6lwIJ7QTRh15eBU%2FbZRYi%2F2Q5K7BuBjLy0Uq4NZRNq7HjihzOZRoYIlrwTiWecsTeVcVgJcvS%2BgfxGDWaRiJUgZQ16GxApigznoiBYaE%2BFNGqwT02J%2BnPH%2B3QfthtTxWqwdngAktKBUZnQ1y3h8cYPVY9%2BRSMM%2FFzsQGOqUBKJ56Ck3miruApQacWXdU6r16P%2F2cTVo6sppabZgDnNboN0VKLaddh6EW4PkW9pMcVzXgKi9YNtiT0VEKIx1Ol1g%2BKYOttyjuCswe2MAe52cc37fX95U8mJAtOeLGcBtUqOV%2BbZVz7VGOSeYUv%2BFPEDi15HLyzJ%2BVovjrl5aM4sEwfZVdKpGcDOYDaONrcVJUut5Tl%2Fn9RktIhlsR%2BK%2F9%2BNWDYfvY&X-Amz-Signature=f33d48aa21fdbc3b78e009d196e38c609a3556786509dca7982a8b666310ef32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7YB6SUK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDrEupAEkbYX3DH%2Bf06mIV2yzY9UWnBPbRhxJbYQVAIKgIgFLreEqE7G7lQv%2FJAwBObbuqn2ZPwjy4PJ%2BFA3wK5QaAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPVWRFxvf8acAwRgDSrcA9VyMxhl1VSjbE6xuaQO%2B3L8qvhfFVBirNcZT2R9qs5SQcdw6Ftn5zYwwhI0QJknQ9tzv4E%2B3GgoRXEpgKoRAVh556eDLuFy0lkERxKe0zpaINdf4gsdRH8yOZMiz5W12bF34spg8H7LRR7RSDWNf6NCBKYNZWzuG3Tsd0RjwNRj49GgjGjgaMGsaLa9G2e3r5V8cpCd8WyjMX1Od4fxSTWjh9yQJUoMeBxIC2J1OqcnbjmU4cJXnjbOoPU0EuhEESS6JBoDFe6H9x4rWLTQCqEHyZ76sVMeHvvoHgxicdbLN%2BQ%2BNe0S3Y6%2BUNopwSnSP0DzsAwCCWWoxO2ID4NBJupbCfnmeGFaRCDS0Qhgmt7rjS%2FOCftM61JlunUEuP7%2BvEduWOqp155PPPd8rB0j6ZrHDWGsghmIq4aKOUYDHparRnzYvqrNfW6COSQONllgw2YXdE9MrOR%2BC3hs3UKLfZFSe%2Fdi3Y9NSeXs5jQEQez9mD7IBvCerSdeKQc3KCMl4%2FeN2wSZA7Jol10r4RtQi97Fmdnu423UZiogSmyBoY3XspOJsV0ANQouGNiSDO%2BLFVuGLuHhJyYyrUzEWSj73PNgHEgcuJaoVkXcFAq2Liyqny3DMaisGJjx3wlMMP3FzsQGOqUBMZ21p9Df2lT9MPvevrFLet9DnAH2shNxBgEy%2FK09izGqT3l9OpIYOCslj5jaLWApIXcvtypzRiwUue7x3LwBwcyOvqYOCnwd5TCgz3RTQ6sicnz27M24JHvvG4ycJHjM757eHWV70j018lsubC5ti0khSR4DlnVIb7kWVeiJ9UjCYvDEOhnZmyhxzhmcCa1lw57a46p0VgdH%2Fjt9Q6QUn7Vtohn4&X-Amz-Signature=84d760a41c0bedb65a3d0eea1a3198247e6d21a0a97fcbccad3587f9ddea9f73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRVV565A%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDzFQaY34nwHgKGghsYRiX1nCq%2F2SrUQ5F0gy2oaUS2cQIhAM8HfSmGE4E0jjMMznvmAlvl9zEGHZEAcDw3XxHW%2BEeRKv8DCHwQABoMNjM3NDIzMTgzODA1IgwQN2DuikzbSjaKQVEq3ANNGrBGUup06TtDnef3G1T%2BrQ9F1pQnaWFRssDdhScESA9knfCed2mScw14dIkZY1jAlgEgSUvmNpExrvRKWNR1zX0zrNmx%2BMolYfVMJHBBj6uvtVeVQIk%2BF44l%2BMpmkFPVytBnl9eVNQvhxgwHiMGG2nnXXxGOvRAsIKHU3m4wLm2mXgh3%2BwGc9ki5Q1%2Fck%2BcAx2mBMh2o3Or4nS3gLVnJwYR26rsE6yMVs3dwnNZ4F2ulhFGHedJuScwyK4bab9o6WV1NPV7deDAE98mucvAgjP%2BJHmiCnd74MSDQNiHhOGSflMBicqYCtz9L4mVWZtuxF2aKZ5ywbfe4Xl8vQnY0LZf9bnyNVP1i3UKHQWRZJJd%2F7SKGtNKvrG2mpVZhHeKWFdoIPccKZemtGqILqoDoYHPXMOhGpwaEx%2Fra8YsrRyE2R7UM21Sv2RZUW%2B%2F3a8HGa2acbTDHkpPVp57WhBvJMGG0I1UX%2FQFSIkhqhgqr9Z33p7AOCDuCuaTfUD96H2BuUnccZxBe%2BdBrUZ%2FEI6U%2FUWXFLpRSnRWtV754TMnKVjZGovoV%2FT4gC5fT4%2B2O0I7ATHRu2Ge5zq3Pd9CqJxfz%2B0cwMxU6LlnZMFu3cYucPA%2BiihNinW7wRuEk2zCGxs7EBjqkAf%2FfBMPo8qVRYVq5%2B%2Bs34TRbdxvQgJNFO59WhroKcyFd%2F2RzVRofkbQGeuJ3GMZo4JomyXy348Nv3d9YbJwAcVgTb0qRfMkv2%2FiElrv%2BiCN5RElj0zAol754aWBiJF3WWNya50R1B%2FogtG9gvE5jvHGUVIC7OXPLkjO9kiYuT6goovUcL1UxAUf9A%2Bi%2BKxOtA8zOSFZ%2BhPtLfyqGUPY3r%2BMeu1pE&X-Amz-Signature=4953ab9dc10f2d1a009cfa5f9cda3bf24fa17c125163202d1aae0f2bd7e53808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7YB6SUK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDrEupAEkbYX3DH%2Bf06mIV2yzY9UWnBPbRhxJbYQVAIKgIgFLreEqE7G7lQv%2FJAwBObbuqn2ZPwjy4PJ%2BFA3wK5QaAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPVWRFxvf8acAwRgDSrcA9VyMxhl1VSjbE6xuaQO%2B3L8qvhfFVBirNcZT2R9qs5SQcdw6Ftn5zYwwhI0QJknQ9tzv4E%2B3GgoRXEpgKoRAVh556eDLuFy0lkERxKe0zpaINdf4gsdRH8yOZMiz5W12bF34spg8H7LRR7RSDWNf6NCBKYNZWzuG3Tsd0RjwNRj49GgjGjgaMGsaLa9G2e3r5V8cpCd8WyjMX1Od4fxSTWjh9yQJUoMeBxIC2J1OqcnbjmU4cJXnjbOoPU0EuhEESS6JBoDFe6H9x4rWLTQCqEHyZ76sVMeHvvoHgxicdbLN%2BQ%2BNe0S3Y6%2BUNopwSnSP0DzsAwCCWWoxO2ID4NBJupbCfnmeGFaRCDS0Qhgmt7rjS%2FOCftM61JlunUEuP7%2BvEduWOqp155PPPd8rB0j6ZrHDWGsghmIq4aKOUYDHparRnzYvqrNfW6COSQONllgw2YXdE9MrOR%2BC3hs3UKLfZFSe%2Fdi3Y9NSeXs5jQEQez9mD7IBvCerSdeKQc3KCMl4%2FeN2wSZA7Jol10r4RtQi97Fmdnu423UZiogSmyBoY3XspOJsV0ANQouGNiSDO%2BLFVuGLuHhJyYyrUzEWSj73PNgHEgcuJaoVkXcFAq2Liyqny3DMaisGJjx3wlMMP3FzsQGOqUBMZ21p9Df2lT9MPvevrFLet9DnAH2shNxBgEy%2FK09izGqT3l9OpIYOCslj5jaLWApIXcvtypzRiwUue7x3LwBwcyOvqYOCnwd5TCgz3RTQ6sicnz27M24JHvvG4ycJHjM757eHWV70j018lsubC5ti0khSR4DlnVIb7kWVeiJ9UjCYvDEOhnZmyhxzhmcCa1lw57a46p0VgdH%2Fjt9Q6QUn7Vtohn4&X-Amz-Signature=a62ffcf80ebcee8ea457206b812fb3c0dfb2fb60dd1163737f1d34232bcbc102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q57NODIS%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBZewd2Nh69%2BDr02ZREv7UvKxCTSirGC6YzJpWfOXVlHAiEAmEor12r8DwlTRz%2Bkjd%2FKx7Lx2BrKnEH1qUxgNZK3edkq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDOC1HvPau%2F2eH%2BbQ0SrcAwpP1YSEQB%2BeXsiKr49azvLLw0gt6GcMq%2B3XkVJmEm5nU5bqz5uG8%2FfV8elb8Xy5V%2FX%2B4F3dLmanxnAM4DZt45EHdmcxm1jnTInlcQ5%2BBEl9s%2FVfRkDocp90Wtypr%2FZqrr8POS1yBI5KJtMY9GTkWo6%2BSbpUkwCVFU07KSV65EdrTN335qdYdsXOwMed3KFxhgopKU5d%2Bp4KthDiYRJKQLeIxzGls8OqxdRxDK3PXkiJtfUouknR6pFuycYPebLvDbDbjqEqloKV4CpGmRonILhASvf4jIBHgHhtU8frVQ%2F0JTgorrZ2TSnDZq0mg4cxBRmTzpWaqyUMk9qj%2FiKOXmyvGANhZkp88wFFVYCFwgcxkwx0pFyonfC%2BYHqjNCRx8dcZtVDmIDJ%2FEN5MdA0yZ1P2MQ%2B2ZA0lRVwR2kZ05yo7LBKTYFMrBF2N%2FTA0ZAMnr5k2fVQQB3zS4amiDfR1%2FNaWQtsWRe%2BQotzadUTyIYqWmznhh43aP8s1vjx874obfRMFsby10fXds%2BETNwi2o4YR%2Fxtj4rntHb0ITycjqknQYSdSELiOr2MtH4GJ0DszxGf%2BmYKZ9sr55tzmWZ%2B0rv%2B4h6Z6NvxbvbomRdabZ39q8hTyiWeFkb7EdIn2MILGzsQGOqUBcYSnub3diF8aMSDaiVmRBXk1ZChsZfqmBE5A%2B09JyDWqP3fUArW%2FtTC1lUd2bhLxwx5TKBJjdVIiS%2FKFhFapUrWylNvaVNapfiXmOoeH06z%2B5nKSur2Y9f%2FVu23onAdeb8qlt%2F7LkP%2BexDE8cXuepk9AZ8yDrPZsBp4Urm24UZHVbRmMmGF82k9WrJPUpf0JzDFI%2F76HN6dxzwHh%2BzFER5MYehNd&X-Amz-Signature=4c9cdf28e74fda0810be7723e642e2dd7f17410c54e9887d75c50b3edc081a4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7YB6SUK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDrEupAEkbYX3DH%2Bf06mIV2yzY9UWnBPbRhxJbYQVAIKgIgFLreEqE7G7lQv%2FJAwBObbuqn2ZPwjy4PJ%2BFA3wK5QaAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPVWRFxvf8acAwRgDSrcA9VyMxhl1VSjbE6xuaQO%2B3L8qvhfFVBirNcZT2R9qs5SQcdw6Ftn5zYwwhI0QJknQ9tzv4E%2B3GgoRXEpgKoRAVh556eDLuFy0lkERxKe0zpaINdf4gsdRH8yOZMiz5W12bF34spg8H7LRR7RSDWNf6NCBKYNZWzuG3Tsd0RjwNRj49GgjGjgaMGsaLa9G2e3r5V8cpCd8WyjMX1Od4fxSTWjh9yQJUoMeBxIC2J1OqcnbjmU4cJXnjbOoPU0EuhEESS6JBoDFe6H9x4rWLTQCqEHyZ76sVMeHvvoHgxicdbLN%2BQ%2BNe0S3Y6%2BUNopwSnSP0DzsAwCCWWoxO2ID4NBJupbCfnmeGFaRCDS0Qhgmt7rjS%2FOCftM61JlunUEuP7%2BvEduWOqp155PPPd8rB0j6ZrHDWGsghmIq4aKOUYDHparRnzYvqrNfW6COSQONllgw2YXdE9MrOR%2BC3hs3UKLfZFSe%2Fdi3Y9NSeXs5jQEQez9mD7IBvCerSdeKQc3KCMl4%2FeN2wSZA7Jol10r4RtQi97Fmdnu423UZiogSmyBoY3XspOJsV0ANQouGNiSDO%2BLFVuGLuHhJyYyrUzEWSj73PNgHEgcuJaoVkXcFAq2Liyqny3DMaisGJjx3wlMMP3FzsQGOqUBMZ21p9Df2lT9MPvevrFLet9DnAH2shNxBgEy%2FK09izGqT3l9OpIYOCslj5jaLWApIXcvtypzRiwUue7x3LwBwcyOvqYOCnwd5TCgz3RTQ6sicnz27M24JHvvG4ycJHjM757eHWV70j018lsubC5ti0khSR4DlnVIb7kWVeiJ9UjCYvDEOhnZmyhxzhmcCa1lw57a46p0VgdH%2Fjt9Q6QUn7Vtohn4&X-Amz-Signature=3d1ebfff8bf08ad162cd3b0ad1a7384aa982f933cf1bddeb0e3b2c8a718c9220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ISDL6QO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIAtBAWaesg1RrLBmVQrgLd7k9Ymf8s0SQzfYYYCETbDoAiEAlLb%2F%2FZbiDeH%2B8MHgihO9IKAPIL4Tf7O3AlPT3bpxCCwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBmdkOnowaN0uJcn5CrcA2NZ8E3j%2B02Czz85l6sv2FHJkGxDheGTFgPcAAknaZil2Md7XqbxPN10qIkvpzkSDJbPJpkVNBnNfrhNxEU7WHtfIOytqYoRqk8udBJRywJLrSqELePtIbNaV%2Ba6CZMA%2BpzrbabM250A%2Bf%2BNZwvVX9cxbjVNOsTRgeOx6as%2FHXnNb%2FfZaoednS9KmzgZ9uMHmINWrJB3PTgs1zHKRF3ZiPnWO3irPvNjF%2BCIEgLmsuearWDMwTrBzgyCfYYD2Rfd1K1iXJi4qenBBIvBd8evW4laCf7UKPbQyPURvlkzWZIjZdfgko60KhagvLFP3UzQrdc1K66UI9v3po3s0frLf%2FTTAwcUUpNKKaeE5fKdyA%2FVdj5Jt%2Bwx9sUhjYl0Xjp7UbtrvtYc%2FgdocCzBcDRwst9ekfQUfSu66NzisFHWJMxZ0y6cP%2FJy8awwgSEAjbOepqB0FSkuSaWfKs4oWtIrAIOH%2BclNsEC%2Bb0dwNq8ErdVXOH2u71cO8b4WHykvsiu4F1oyPnrEqDLRNFEN8DraF%2B6EkhYr1Uq3v5zQ9xFOwWsEihE73RTvSfTVZM7nnPGNn%2FrM83ZkWR6m2Rw201DiJk%2F6GjlzE4drLmHm2HnfgFQxAf5z%2FpddIdNMoa%2BDMOXFzsQGOqUBqfVoBG4HTYWDSbBXt%2BtIKjlSzvh5g4oQx%2B93%2BUAwi0eCPBmsg6H0ou3zbZl1WmGnayN4DZrbr8WKS%2FpJ4ZS6BITd5OHiL%2BucULD%2F6AlyrKsU4a%2Fj6tepEsNpPh%2B2yxyltJPr9HdUUT51brFQUXDKRi0yNvdnex8nZ3G3FhtXqBnqYLcc67hpqnyUcJ%2BiUVvsfhHeOb3D8ndail2LtfuO0F7ftevQ&X-Amz-Signature=b1f5d026714d38adc663c7677ee59e7d0acbb383c80e5c2297603de4c8d1e39b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7YB6SUK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDrEupAEkbYX3DH%2Bf06mIV2yzY9UWnBPbRhxJbYQVAIKgIgFLreEqE7G7lQv%2FJAwBObbuqn2ZPwjy4PJ%2BFA3wK5QaAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPVWRFxvf8acAwRgDSrcA9VyMxhl1VSjbE6xuaQO%2B3L8qvhfFVBirNcZT2R9qs5SQcdw6Ftn5zYwwhI0QJknQ9tzv4E%2B3GgoRXEpgKoRAVh556eDLuFy0lkERxKe0zpaINdf4gsdRH8yOZMiz5W12bF34spg8H7LRR7RSDWNf6NCBKYNZWzuG3Tsd0RjwNRj49GgjGjgaMGsaLa9G2e3r5V8cpCd8WyjMX1Od4fxSTWjh9yQJUoMeBxIC2J1OqcnbjmU4cJXnjbOoPU0EuhEESS6JBoDFe6H9x4rWLTQCqEHyZ76sVMeHvvoHgxicdbLN%2BQ%2BNe0S3Y6%2BUNopwSnSP0DzsAwCCWWoxO2ID4NBJupbCfnmeGFaRCDS0Qhgmt7rjS%2FOCftM61JlunUEuP7%2BvEduWOqp155PPPd8rB0j6ZrHDWGsghmIq4aKOUYDHparRnzYvqrNfW6COSQONllgw2YXdE9MrOR%2BC3hs3UKLfZFSe%2Fdi3Y9NSeXs5jQEQez9mD7IBvCerSdeKQc3KCMl4%2FeN2wSZA7Jol10r4RtQi97Fmdnu423UZiogSmyBoY3XspOJsV0ANQouGNiSDO%2BLFVuGLuHhJyYyrUzEWSj73PNgHEgcuJaoVkXcFAq2Liyqny3DMaisGJjx3wlMMP3FzsQGOqUBMZ21p9Df2lT9MPvevrFLet9DnAH2shNxBgEy%2FK09izGqT3l9OpIYOCslj5jaLWApIXcvtypzRiwUue7x3LwBwcyOvqYOCnwd5TCgz3RTQ6sicnz27M24JHvvG4ycJHjM757eHWV70j018lsubC5ti0khSR4DlnVIb7kWVeiJ9UjCYvDEOhnZmyhxzhmcCa1lw57a46p0VgdH%2Fjt9Q6QUn7Vtohn4&X-Amz-Signature=b7e0793680072c69f142c8e8ee4d4dca23f3b9bcc94f367bba9f241cfeded028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ML4SDZT%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIC2M9mNBTxZ2UZWv7%2BRr7ATRWfSwfuQZHqpOHBCqjOSaAiEAnc1t2LQXSh6fhxwst6Dol9W49%2BnSyVT6or8U5RmMEkUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDGyZpKol4QEjzdxpnSrcA4Kbqitgf32GfPKJAGTNMuKiPF3YrUDxY%2FgDPjaEKUfQlbZ5sZrJ1LbntamCw6dhrOyJH1Cw58z3TbfTRBZ54Pg9zCH2buG1oGTqHq81wxXHRCe6kvKYOZpGNxoiMwzs%2BVuB1EC2cylpj6E74Mo%2FW%2FzCtnw6L0RHgU5z6M3w4f8fSsjH6HkBXJhHTp4EzleVMEhMs7S7bfVFNTaTnAn92WRT%2BDcjzYTm%2Byb3vBbhvzy%2B4BXlLJscIN2rPioeOLEeJlpQQHdZxdgaLciWJsQhsNhAU3eqk07dM4OJsLy98aQbVOru2KOpw1DIDc3P2C5ZHi1eeePmZwdrif%2BbIthcimaSmQUhsVuey8wTSqSTmaujm%2BlFaMekI7SPZVwQ%2FVAFg7kqASnK4%2FJmp6edUXvCy04ENNJOmmbLIyGTfHwV2AaYA49UHfrnGwCv0VBley8VAXp4jDji8%2BgMvMv61g7c%2FyDX66Yw3%2BT99sPQJCEf76P8%2FpD9ltefMgNVWO6dU6%2Fu6MuWxIpuIhrdlCGvyU5xhFpc03I1QKiYLFmqfIPW3j3lvHgQpbze9a51kmCcPuWYR9ViCO1q1ePrhqh9elwW7EeGbRMOKDvoeMsJrB55%2Fg5IdBdmZOsLV9iBl470MPfFzsQGOqUBnfKqh5Wd6kLjfKIBBcME6g%2FmNJwwPtmEnnjiSJG0hk%2FbKGbO7gwnasGDt7BRTgitXIyNZYGajxPHwWRJH7oQPjszebGWMGdOBqc1tqpsrmXi4sh606WoTL%2BdOjtK9yIflqdTR2dEqhdP812FSimaKzvQu%2FEwhTKCwRe5igDe9DxXXHeXeLvOCl9cxARXDtb%2F9q2n319%2BEGr6%2BHO3UFBe8AFJuszy&X-Amz-Signature=18fd6888d2810e55cfca5e740e9dafe616346f90c78cc268e4fa833829804317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZSNFOTE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCrlxWwmzCrDAEmR9CXxEfxkmNJ%2FgJkSclWoEnOoscz5QIgHK88C8kLTB6KU2fwbNgwTUvfG2ajRnSYmg9U3r4Z2P4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDO6l1GG211bJ5%2BPrJyrcAzftoC0yi3%2BuGvfaScTFowegjZiP%2BD4o8EeeRkOVnjuxwBuo0TOA5tr5R2vF3Xgtr2GaVMBVSgSClEE12238RTT2S6bxlurCEYV6ph9ucVyteFHF2tQsun0n3Jx42CNEkyuKF4c5Db%2FAZXkTpgtkCczc56BI7bEh7PZM81opXQPnDIfAIb2IB6u9FcHGr0BYmHU2CYursNsNK2pSYrhS1Ectj2TJxUkc1L5Ag6XiZoRaZ7jHwfu%2BGzIKC6Yiy5YSfXGNxaM5IkUhHNNzzWLG931iJ28Eix9Udb9gQjZcfIdWbgDXuBwB78HlWXoVUr89gic9D1dPx2GYtxngDHFwFmvBbOid8LTqkkVWH2dM64wACWUGXHxnseGwXr8dKAUhePXHmKuGYcjMEWqh9%2Fz8Ar%2FgtXiApKHg88rseEDxzq8CT51ziXw9CRQohAOzRHujmnU3OqgAiCucuN4%2F6MbGdq54NMByLdT3oJVtRTjP60IOfPCuKqmERMjvj6XC%2FZYvB96jm5kR0UTUYrSDAIUl5LjZwcx%2BzBw4LAUOttGtBwUnDqfMRCKoSiKA66EDAevPi51IHdD3IVpqrwyAOIC6aqUBSCHIuulGp7Q16G6ulDRBdzBxXO%2BdCUspEYf7MKPFzsQGOqUBHGcu3exGDU1OVKA5s%2B4BAZ0sWAOxssV22X0Pz4qdm4RYLSjoiNPb%2BWGULi%2FqniLazcrvR2ExX9vOYB5mVazFWeruo1iPfaQZzG435D6o6nGO6gA3tAPcjr547hyzmWnvPnKaZhpC8peLxx8J6DsrMfolFOIqK%2BtoHTlQKeY1v62sSuTw7uvDx92S84xF1Wy06pR0TigU2edBzQyoyz6GMvPjh15B&X-Amz-Signature=8a492036561f65054b470a98fe6c2e8742670dc7abfe63ad5a37844e762e1718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUF3H2TX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQD2X3eP9E4bturX8kMT46xfpKrjlYhFZ7E20kof9obqvgIhAJStaJWEq5N%2BPoAqnQimOdQNS4g86paKa%2B7Ufg3KmwGEKv8DCHwQABoMNjM3NDIzMTgzODA1IgxJ%2FUkQaEGW6XumCNQq3AMDl4q1AVnPlFUbNBC4fJj%2BJRTscYv1rhrrVGg1RAZMu2L5yPG7WrvCxSaqrrEqBtcXrJaezymCuazSMxyqGlbZO8oirOqMzaFgvCV%2BOxAnvuPWsnRCf8ZNG9rvoO0HONAgtFDcbOHv5U2vnBsCuSKDar8DrfKQQRuZ3ZcMRq93hRY1GS2NLQpoOcMrXy61sMj6qGcr%2FilX6suXMWiB18kfYt8XKaUZ%2BH774pDd8pMQOpMNxcaURosiD%2FQcFk33IMma8%2B103Gs80WmqOJnxtEeO83mRRCuaFjAmvtF5nD%2BPES2cbFejOwinzBKaNT55jr%2F4S4mqb0EMjMOrYPKJtiwbfDIscqr20mpk4L%2Bn%2F8c7MaXCa8avAmgyYuGzogv0%2BwaYW4aoxHXp6XXoKLeISvBdDqG6yu%2B7FtdQfS545WvMJK36c4732DcYH48GJms4yn4Q4vah2exssDYB751GApSdA1ja36QBmHygeM55cmWxReQ6VE5HANk7CP2q6xnMsRwR%2BEA7Pvg7b7V%2FLjEzbgmNpAt1Jqt%2BfmDSxLI0DqvS6uRssRmbnIEQIN0PO49DomhR7Rwntpt7wOktnQeE0asxW5jH1k4Bw0xdnCawGtLTNAzonl6yPBc1%2FZhlrTDOxc7EBjqkAW4HW4tAkSj5RrvvvuzUqney4anpTz%2F8kUKRSOe7r1JZWxqe%2FjtPOZxyFJ9%2FTkW%2F7B3CWdZM43OmCh0mAsMp6tryE6BuNxQ7RWBuySmsZefaOaB8JTnMOFH3x1kp29E8QLbeo1cIbDyciepGk2JUQOJ5sX7Xhnhzy4ghcATGgYHSIKHafbh6KXAHbFzzQuNzfnjsJX1VVZy%2Fj80%2BmxScmnmBhHbf&X-Amz-Signature=9b28e95d2cb500dd957ccaa78c1a4f452423499241b8bf6b20776df6fe50d9b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBA7ZPMX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCS3qZPC%2BRg64DYD5hqgQM7NtdifMAZOpSIh%2F9AcNcB8QIhAMQqb2KobZ1%2Fn5Q%2FI%2FnQecUGWZszYMQ5CTkojjiFQAtDKv8DCHwQABoMNjM3NDIzMTgzODA1IgxKIa9faaaOnMcQYFUq3AMFFC33VoFXxIsXdjOEOzoo2nQQQAupM%2BNIe2aSAqUxxpTX9X031PMBtUiOGMlUy%2BCr%2FiOhTcGKlvVNnXl7aECeeF40cFi825ptaujsK7x3lamqJSahwWKex%2FatitnKCuHpbi99sFhm4Bw6fmJV8jhSDD3n0WAyNpObeFvwP0qulNvbh1200BQ0ajecX5hc90w97xIsCgCfhiT8yiwJ0gAOsqio0nz4Og%2FxNBli8UxE%2BRZDts1%2B5MtwfkCZFazDTxbBMPjSm47MpVJds3dXTiR54Lcw%2BXS9bRZaM6wajkzP5W52qA4qAG2QCjonCoT3ZKw9dMofrPFWEC7LXhrNCFLtJoi%2BVEU8N5Y6NUdR8poQbnGEMtfj55PzkhctACSLV809VzsdlndxLkbeY5FkMisFWWWpigD4fyCA3XwxI6RoV2FDDiRYFiFWVocaG8wfQFQFFd4fxC9qaC8%2BgsMWOC3IpRoY%2FIBzDK40%2FnY4OxBTSr9pHK44XEH30fZyBhrdZY2NAhiYFA8%2Fv4DLut2Rvvu4Wp938Y4UrrmESrVOVt7pj3uNKOUFStgFXh16u1wRLtQAZV9j9TkfLZ8X7h5PO6F%2FEeaM5BQw7UQsTRpLNjlkXdq%2Bz3zcxZmEiQP8MTClxs7EBjqkAVV6Nfo2efGFzy5rS69bqiYhksLYvQ8ipY%2ByqjSGLKHJFdVJXRIqNDn%2BqFNR1sT0tZ17gjHtRCfL2erd5zbBH388NUPQvwpshOJMW6IRMn3p73s7T8J%2Ff0%2B4jbPy1j8vhAaUxGhzWXnUkgwGL%2FHJ%2Bfy317xTd9hPXzBKCZfFjvMSkhu9mZAd4usZUNF95WAQsnyKnjO%2FDRawYOD2JSv4aV6bl%2FKA&X-Amz-Signature=b0b77e749c007e20a88258490e5884398b728e345cde824e5c14089fffa8cc89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4TGRHSL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDVs14KFCSVdeiFOb%2FU%2FxklLHduWOpfQE%2FfvAouofJFIQIgONaxWLjZA9uB824DFqQnRd1bpq4colIhdicT3OGofycq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBlYAaghZhzBtG2EDSrcA0%2Fwl9Pr0uBZOZN6tCQ%2FeQUD9wx3leFZBfCD9AbvDuLgrJj5%2FKI%2B7a0Trg87yYHAvYFI4UGHmv0iEa77o9s4oN8GDczkQKPVMPy%2BACbDghDo6kzuCgwD1MEobe2zzAzUBC1GlLJfbOuYzu5pSyfftl01FmIxaQbKPIZ2v8Y8eGpgvbCRVYvtIq%2FNppGXocvbyw3tO%2F3GMKdd0DIPTIqdy0n%2B27gUfC699HCnGMpqPJmEGwHkdnhtdDhoC8VZXIWP7dartbBtRWWRkoTpj7hMjA4hLjbDeGxEpXqsPPpxeAc9yK06ncSK7zlNLlqHOeUFeztzewErEFR%2B8Q4ckfjCvYYBaOkXau0WQeRgUfDw%2FqjKj9v4PM%2BGqQ6BH9jIE%2F7nTIvWFGb5jyjoe3HCW9n%2BOqitmNnhTV6VQNeeLmd1aB4rQoajrLdObhRjesM4m7RC%2By5irvtToUG9gjJ8MO8VZhfvx8GKraewT%2FgiAp%2Fqc7NPIol6IFzoN0D97uwp3w8er4FvCA%2BS7loUigqI4%2BkwDNJ9QxQT7jp%2FfXUCmpsZXR5ZrF86FkHBbJicyym1F7rs9U8u382s1e338htX3aq5wJviIrlQ9nPQEl8aHtA%2FXbOaGsiljtrwAVMgex0tMMvFzsQGOqUB2P98F3l7A3XDPhhdleO3TqZrgv%2F%2Fw2X7iIFatu8PeAJbxmLoui5a9LD9J0xyImQjoouVYwky5WvG639vm88jCeDSluk5XnuX1enR0eaL92nZdST3MMsJ3S55LFmpS7UspIloS4EHGw2TykdMCN%2FUPzKhNJfBI9VDR97Wr0w%2FitaMgQXjiobb8P4wqEFRgpalKtTHW4yZCSDK9hTGFqKnDAfCb1Fu&X-Amz-Signature=56f878e8cf5bacf39dd6f4a81eb65d6a52a977f085ea51940dfbf3ed6e256920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7YB6SUK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDrEupAEkbYX3DH%2Bf06mIV2yzY9UWnBPbRhxJbYQVAIKgIgFLreEqE7G7lQv%2FJAwBObbuqn2ZPwjy4PJ%2BFA3wK5QaAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPVWRFxvf8acAwRgDSrcA9VyMxhl1VSjbE6xuaQO%2B3L8qvhfFVBirNcZT2R9qs5SQcdw6Ftn5zYwwhI0QJknQ9tzv4E%2B3GgoRXEpgKoRAVh556eDLuFy0lkERxKe0zpaINdf4gsdRH8yOZMiz5W12bF34spg8H7LRR7RSDWNf6NCBKYNZWzuG3Tsd0RjwNRj49GgjGjgaMGsaLa9G2e3r5V8cpCd8WyjMX1Od4fxSTWjh9yQJUoMeBxIC2J1OqcnbjmU4cJXnjbOoPU0EuhEESS6JBoDFe6H9x4rWLTQCqEHyZ76sVMeHvvoHgxicdbLN%2BQ%2BNe0S3Y6%2BUNopwSnSP0DzsAwCCWWoxO2ID4NBJupbCfnmeGFaRCDS0Qhgmt7rjS%2FOCftM61JlunUEuP7%2BvEduWOqp155PPPd8rB0j6ZrHDWGsghmIq4aKOUYDHparRnzYvqrNfW6COSQONllgw2YXdE9MrOR%2BC3hs3UKLfZFSe%2Fdi3Y9NSeXs5jQEQez9mD7IBvCerSdeKQc3KCMl4%2FeN2wSZA7Jol10r4RtQi97Fmdnu423UZiogSmyBoY3XspOJsV0ANQouGNiSDO%2BLFVuGLuHhJyYyrUzEWSj73PNgHEgcuJaoVkXcFAq2Liyqny3DMaisGJjx3wlMMP3FzsQGOqUBMZ21p9Df2lT9MPvevrFLet9DnAH2shNxBgEy%2FK09izGqT3l9OpIYOCslj5jaLWApIXcvtypzRiwUue7x3LwBwcyOvqYOCnwd5TCgz3RTQ6sicnz27M24JHvvG4ycJHjM757eHWV70j018lsubC5ti0khSR4DlnVIb7kWVeiJ9UjCYvDEOhnZmyhxzhmcCa1lw57a46p0VgdH%2Fjt9Q6QUn7Vtohn4&X-Amz-Signature=5d191b6d1ddc0f1cd173e254c067c86f9671015f310204ae6619ce222aeb93bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7YB6SUK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDrEupAEkbYX3DH%2Bf06mIV2yzY9UWnBPbRhxJbYQVAIKgIgFLreEqE7G7lQv%2FJAwBObbuqn2ZPwjy4PJ%2BFA3wK5QaAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPVWRFxvf8acAwRgDSrcA9VyMxhl1VSjbE6xuaQO%2B3L8qvhfFVBirNcZT2R9qs5SQcdw6Ftn5zYwwhI0QJknQ9tzv4E%2B3GgoRXEpgKoRAVh556eDLuFy0lkERxKe0zpaINdf4gsdRH8yOZMiz5W12bF34spg8H7LRR7RSDWNf6NCBKYNZWzuG3Tsd0RjwNRj49GgjGjgaMGsaLa9G2e3r5V8cpCd8WyjMX1Od4fxSTWjh9yQJUoMeBxIC2J1OqcnbjmU4cJXnjbOoPU0EuhEESS6JBoDFe6H9x4rWLTQCqEHyZ76sVMeHvvoHgxicdbLN%2BQ%2BNe0S3Y6%2BUNopwSnSP0DzsAwCCWWoxO2ID4NBJupbCfnmeGFaRCDS0Qhgmt7rjS%2FOCftM61JlunUEuP7%2BvEduWOqp155PPPd8rB0j6ZrHDWGsghmIq4aKOUYDHparRnzYvqrNfW6COSQONllgw2YXdE9MrOR%2BC3hs3UKLfZFSe%2Fdi3Y9NSeXs5jQEQez9mD7IBvCerSdeKQc3KCMl4%2FeN2wSZA7Jol10r4RtQi97Fmdnu423UZiogSmyBoY3XspOJsV0ANQouGNiSDO%2BLFVuGLuHhJyYyrUzEWSj73PNgHEgcuJaoVkXcFAq2Liyqny3DMaisGJjx3wlMMP3FzsQGOqUBMZ21p9Df2lT9MPvevrFLet9DnAH2shNxBgEy%2FK09izGqT3l9OpIYOCslj5jaLWApIXcvtypzRiwUue7x3LwBwcyOvqYOCnwd5TCgz3RTQ6sicnz27M24JHvvG4ycJHjM757eHWV70j018lsubC5ti0khSR4DlnVIb7kWVeiJ9UjCYvDEOhnZmyhxzhmcCa1lw57a46p0VgdH%2Fjt9Q6QUn7Vtohn4&X-Amz-Signature=4ac2e67bd0aef1795e129dfd53ff00ca4976d266eaa8d1c94f37c41ac96de665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGMQJ53%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIH0yn0PFs3W8WGhpJxK91iPje5hfR%2FhEHigC%2FoKKEXS%2FAiBQScMpYHvriic1Wrp4vKmYoebIuaOA%2BUU2kn4E9E0eYir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMDiU0sijdSaypu3ZXKtwDE6RJiaXK1VOYgruxBYwC0%2F54pz4jGz19h%2BErYAMEVAhxYS3t1kvR1r56wZV2dytQuHa5LLsZc%2FccFK3Ds2Y0xriIGtdhqnE4ilrcZifsTiiln1jhkVbG0GH9fUkZmV6jjPKz0AjCV9tGPF0yG0q%2BU6q1sHCmGG9wVLw%2FEHpPucjWz433mk7jxHeA2G3u7rWaBImE4I30xF44f7BlopAmdXipnqyOQJ5xtKdggiR1RwhuhX6TFqr102WFX2fPfIoz1lQVshQzwwwveOhVADf2Bz%2BMsHjL984gNmmgw24eY69lIFO%2Ft9hrp0Rfk6Dyk%2FWkta7x5umqXTJFQK4brOFhprgqs0EyRvJB4IlvgFd6zFs6E%2FxQkAoZQdI1naWq2irJ94X4IY8SCXhFeJC5Rnfg68naEVpYfI90OeqzFWxPF7lA9P3DS6plmAbLRBcakkq%2BwQwUU5VNu99H4ItoqN7dtm%2BE0Os8k%2BI26EN%2B1WGHo4N5wfE%2BgBsT%2FyD0ODPLBhOUPNxLk1GALKQIhwknQLNpDw0TFLJM8BPrtVTTUqHwAxqfsTm5%2BWRiVnDFsx0Eqt43lUHAjMVNmsMyum4wVVp1HEiot5iCkUO0tPK9yY5y%2FhVebmKer15uI5VSA9owocXOxAY6pgFTBiU4jPqWa3jA2h1dKf12%2FTuZvwPeBKdL4O7YsQNR%2F7I38GIZ3rdP1aSez4swYomqJwP1s1Vui8ValvJy0oJ8Pn%2BPSpuULVgfYxthGsygWDZaok6E7gDDk7heWRG6gqzavNnP0wiNbTccLnloKWeOU5m9KG5G5CDTbraZ28Ca2xuXUKPpB%2BTR4Ue7t43QoT%2FEJWerMxj3O%2B0D1czMjK%2BVnSWvbjnY&X-Amz-Signature=a594f7769edb063f8f328dc7aa19d96821639cc80d37e4a7198551424f9b0d63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGMQJ53%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIH0yn0PFs3W8WGhpJxK91iPje5hfR%2FhEHigC%2FoKKEXS%2FAiBQScMpYHvriic1Wrp4vKmYoebIuaOA%2BUU2kn4E9E0eYir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMDiU0sijdSaypu3ZXKtwDE6RJiaXK1VOYgruxBYwC0%2F54pz4jGz19h%2BErYAMEVAhxYS3t1kvR1r56wZV2dytQuHa5LLsZc%2FccFK3Ds2Y0xriIGtdhqnE4ilrcZifsTiiln1jhkVbG0GH9fUkZmV6jjPKz0AjCV9tGPF0yG0q%2BU6q1sHCmGG9wVLw%2FEHpPucjWz433mk7jxHeA2G3u7rWaBImE4I30xF44f7BlopAmdXipnqyOQJ5xtKdggiR1RwhuhX6TFqr102WFX2fPfIoz1lQVshQzwwwveOhVADf2Bz%2BMsHjL984gNmmgw24eY69lIFO%2Ft9hrp0Rfk6Dyk%2FWkta7x5umqXTJFQK4brOFhprgqs0EyRvJB4IlvgFd6zFs6E%2FxQkAoZQdI1naWq2irJ94X4IY8SCXhFeJC5Rnfg68naEVpYfI90OeqzFWxPF7lA9P3DS6plmAbLRBcakkq%2BwQwUU5VNu99H4ItoqN7dtm%2BE0Os8k%2BI26EN%2B1WGHo4N5wfE%2BgBsT%2FyD0ODPLBhOUPNxLk1GALKQIhwknQLNpDw0TFLJM8BPrtVTTUqHwAxqfsTm5%2BWRiVnDFsx0Eqt43lUHAjMVNmsMyum4wVVp1HEiot5iCkUO0tPK9yY5y%2FhVebmKer15uI5VSA9owocXOxAY6pgFTBiU4jPqWa3jA2h1dKf12%2FTuZvwPeBKdL4O7YsQNR%2F7I38GIZ3rdP1aSez4swYomqJwP1s1Vui8ValvJy0oJ8Pn%2BPSpuULVgfYxthGsygWDZaok6E7gDDk7heWRG6gqzavNnP0wiNbTccLnloKWeOU5m9KG5G5CDTbraZ28Ca2xuXUKPpB%2BTR4Ue7t43QoT%2FEJWerMxj3O%2B0D1czMjK%2BVnSWvbjnY&X-Amz-Signature=2d5596e0ddd3042454ed345abe01cf1563a2faf2ea695a18c7292f3b055de3d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGMQJ53%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIH0yn0PFs3W8WGhpJxK91iPje5hfR%2FhEHigC%2FoKKEXS%2FAiBQScMpYHvriic1Wrp4vKmYoebIuaOA%2BUU2kn4E9E0eYir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMDiU0sijdSaypu3ZXKtwDE6RJiaXK1VOYgruxBYwC0%2F54pz4jGz19h%2BErYAMEVAhxYS3t1kvR1r56wZV2dytQuHa5LLsZc%2FccFK3Ds2Y0xriIGtdhqnE4ilrcZifsTiiln1jhkVbG0GH9fUkZmV6jjPKz0AjCV9tGPF0yG0q%2BU6q1sHCmGG9wVLw%2FEHpPucjWz433mk7jxHeA2G3u7rWaBImE4I30xF44f7BlopAmdXipnqyOQJ5xtKdggiR1RwhuhX6TFqr102WFX2fPfIoz1lQVshQzwwwveOhVADf2Bz%2BMsHjL984gNmmgw24eY69lIFO%2Ft9hrp0Rfk6Dyk%2FWkta7x5umqXTJFQK4brOFhprgqs0EyRvJB4IlvgFd6zFs6E%2FxQkAoZQdI1naWq2irJ94X4IY8SCXhFeJC5Rnfg68naEVpYfI90OeqzFWxPF7lA9P3DS6plmAbLRBcakkq%2BwQwUU5VNu99H4ItoqN7dtm%2BE0Os8k%2BI26EN%2B1WGHo4N5wfE%2BgBsT%2FyD0ODPLBhOUPNxLk1GALKQIhwknQLNpDw0TFLJM8BPrtVTTUqHwAxqfsTm5%2BWRiVnDFsx0Eqt43lUHAjMVNmsMyum4wVVp1HEiot5iCkUO0tPK9yY5y%2FhVebmKer15uI5VSA9owocXOxAY6pgFTBiU4jPqWa3jA2h1dKf12%2FTuZvwPeBKdL4O7YsQNR%2F7I38GIZ3rdP1aSez4swYomqJwP1s1Vui8ValvJy0oJ8Pn%2BPSpuULVgfYxthGsygWDZaok6E7gDDk7heWRG6gqzavNnP0wiNbTccLnloKWeOU5m9KG5G5CDTbraZ28Ca2xuXUKPpB%2BTR4Ue7t43QoT%2FEJWerMxj3O%2B0D1czMjK%2BVnSWvbjnY&X-Amz-Signature=ff1de480d91163defefda1682e1af631a2bc128061ac65f6a2403019e6970c69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGMQJ53%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIH0yn0PFs3W8WGhpJxK91iPje5hfR%2FhEHigC%2FoKKEXS%2FAiBQScMpYHvriic1Wrp4vKmYoebIuaOA%2BUU2kn4E9E0eYir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMDiU0sijdSaypu3ZXKtwDE6RJiaXK1VOYgruxBYwC0%2F54pz4jGz19h%2BErYAMEVAhxYS3t1kvR1r56wZV2dytQuHa5LLsZc%2FccFK3Ds2Y0xriIGtdhqnE4ilrcZifsTiiln1jhkVbG0GH9fUkZmV6jjPKz0AjCV9tGPF0yG0q%2BU6q1sHCmGG9wVLw%2FEHpPucjWz433mk7jxHeA2G3u7rWaBImE4I30xF44f7BlopAmdXipnqyOQJ5xtKdggiR1RwhuhX6TFqr102WFX2fPfIoz1lQVshQzwwwveOhVADf2Bz%2BMsHjL984gNmmgw24eY69lIFO%2Ft9hrp0Rfk6Dyk%2FWkta7x5umqXTJFQK4brOFhprgqs0EyRvJB4IlvgFd6zFs6E%2FxQkAoZQdI1naWq2irJ94X4IY8SCXhFeJC5Rnfg68naEVpYfI90OeqzFWxPF7lA9P3DS6plmAbLRBcakkq%2BwQwUU5VNu99H4ItoqN7dtm%2BE0Os8k%2BI26EN%2B1WGHo4N5wfE%2BgBsT%2FyD0ODPLBhOUPNxLk1GALKQIhwknQLNpDw0TFLJM8BPrtVTTUqHwAxqfsTm5%2BWRiVnDFsx0Eqt43lUHAjMVNmsMyum4wVVp1HEiot5iCkUO0tPK9yY5y%2FhVebmKer15uI5VSA9owocXOxAY6pgFTBiU4jPqWa3jA2h1dKf12%2FTuZvwPeBKdL4O7YsQNR%2F7I38GIZ3rdP1aSez4swYomqJwP1s1Vui8ValvJy0oJ8Pn%2BPSpuULVgfYxthGsygWDZaok6E7gDDk7heWRG6gqzavNnP0wiNbTccLnloKWeOU5m9KG5G5CDTbraZ28Ca2xuXUKPpB%2BTR4Ue7t43QoT%2FEJWerMxj3O%2B0D1czMjK%2BVnSWvbjnY&X-Amz-Signature=13ce33427202ef63007949b6eb1282c65baf9b99e917d9beb7cf61bf124408e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGMQJ53%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIH0yn0PFs3W8WGhpJxK91iPje5hfR%2FhEHigC%2FoKKEXS%2FAiBQScMpYHvriic1Wrp4vKmYoebIuaOA%2BUU2kn4E9E0eYir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMDiU0sijdSaypu3ZXKtwDE6RJiaXK1VOYgruxBYwC0%2F54pz4jGz19h%2BErYAMEVAhxYS3t1kvR1r56wZV2dytQuHa5LLsZc%2FccFK3Ds2Y0xriIGtdhqnE4ilrcZifsTiiln1jhkVbG0GH9fUkZmV6jjPKz0AjCV9tGPF0yG0q%2BU6q1sHCmGG9wVLw%2FEHpPucjWz433mk7jxHeA2G3u7rWaBImE4I30xF44f7BlopAmdXipnqyOQJ5xtKdggiR1RwhuhX6TFqr102WFX2fPfIoz1lQVshQzwwwveOhVADf2Bz%2BMsHjL984gNmmgw24eY69lIFO%2Ft9hrp0Rfk6Dyk%2FWkta7x5umqXTJFQK4brOFhprgqs0EyRvJB4IlvgFd6zFs6E%2FxQkAoZQdI1naWq2irJ94X4IY8SCXhFeJC5Rnfg68naEVpYfI90OeqzFWxPF7lA9P3DS6plmAbLRBcakkq%2BwQwUU5VNu99H4ItoqN7dtm%2BE0Os8k%2BI26EN%2B1WGHo4N5wfE%2BgBsT%2FyD0ODPLBhOUPNxLk1GALKQIhwknQLNpDw0TFLJM8BPrtVTTUqHwAxqfsTm5%2BWRiVnDFsx0Eqt43lUHAjMVNmsMyum4wVVp1HEiot5iCkUO0tPK9yY5y%2FhVebmKer15uI5VSA9owocXOxAY6pgFTBiU4jPqWa3jA2h1dKf12%2FTuZvwPeBKdL4O7YsQNR%2F7I38GIZ3rdP1aSez4swYomqJwP1s1Vui8ValvJy0oJ8Pn%2BPSpuULVgfYxthGsygWDZaok6E7gDDk7heWRG6gqzavNnP0wiNbTccLnloKWeOU5m9KG5G5CDTbraZ28Ca2xuXUKPpB%2BTR4Ue7t43QoT%2FEJWerMxj3O%2B0D1czMjK%2BVnSWvbjnY&X-Amz-Signature=8100e9405f1205340c8b7f7ae5a32b41ab96ef9f40e761352aaeb886fb00536c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGMQJ53%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIH0yn0PFs3W8WGhpJxK91iPje5hfR%2FhEHigC%2FoKKEXS%2FAiBQScMpYHvriic1Wrp4vKmYoebIuaOA%2BUU2kn4E9E0eYir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMDiU0sijdSaypu3ZXKtwDE6RJiaXK1VOYgruxBYwC0%2F54pz4jGz19h%2BErYAMEVAhxYS3t1kvR1r56wZV2dytQuHa5LLsZc%2FccFK3Ds2Y0xriIGtdhqnE4ilrcZifsTiiln1jhkVbG0GH9fUkZmV6jjPKz0AjCV9tGPF0yG0q%2BU6q1sHCmGG9wVLw%2FEHpPucjWz433mk7jxHeA2G3u7rWaBImE4I30xF44f7BlopAmdXipnqyOQJ5xtKdggiR1RwhuhX6TFqr102WFX2fPfIoz1lQVshQzwwwveOhVADf2Bz%2BMsHjL984gNmmgw24eY69lIFO%2Ft9hrp0Rfk6Dyk%2FWkta7x5umqXTJFQK4brOFhprgqs0EyRvJB4IlvgFd6zFs6E%2FxQkAoZQdI1naWq2irJ94X4IY8SCXhFeJC5Rnfg68naEVpYfI90OeqzFWxPF7lA9P3DS6plmAbLRBcakkq%2BwQwUU5VNu99H4ItoqN7dtm%2BE0Os8k%2BI26EN%2B1WGHo4N5wfE%2BgBsT%2FyD0ODPLBhOUPNxLk1GALKQIhwknQLNpDw0TFLJM8BPrtVTTUqHwAxqfsTm5%2BWRiVnDFsx0Eqt43lUHAjMVNmsMyum4wVVp1HEiot5iCkUO0tPK9yY5y%2FhVebmKer15uI5VSA9owocXOxAY6pgFTBiU4jPqWa3jA2h1dKf12%2FTuZvwPeBKdL4O7YsQNR%2F7I38GIZ3rdP1aSez4swYomqJwP1s1Vui8ValvJy0oJ8Pn%2BPSpuULVgfYxthGsygWDZaok6E7gDDk7heWRG6gqzavNnP0wiNbTccLnloKWeOU5m9KG5G5CDTbraZ28Ca2xuXUKPpB%2BTR4Ue7t43QoT%2FEJWerMxj3O%2B0D1czMjK%2BVnSWvbjnY&X-Amz-Signature=c61972e7a7ea3321950f86a7986cd60044788daa4affcffca8489fbda262da98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGMQJ53%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIH0yn0PFs3W8WGhpJxK91iPje5hfR%2FhEHigC%2FoKKEXS%2FAiBQScMpYHvriic1Wrp4vKmYoebIuaOA%2BUU2kn4E9E0eYir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMDiU0sijdSaypu3ZXKtwDE6RJiaXK1VOYgruxBYwC0%2F54pz4jGz19h%2BErYAMEVAhxYS3t1kvR1r56wZV2dytQuHa5LLsZc%2FccFK3Ds2Y0xriIGtdhqnE4ilrcZifsTiiln1jhkVbG0GH9fUkZmV6jjPKz0AjCV9tGPF0yG0q%2BU6q1sHCmGG9wVLw%2FEHpPucjWz433mk7jxHeA2G3u7rWaBImE4I30xF44f7BlopAmdXipnqyOQJ5xtKdggiR1RwhuhX6TFqr102WFX2fPfIoz1lQVshQzwwwveOhVADf2Bz%2BMsHjL984gNmmgw24eY69lIFO%2Ft9hrp0Rfk6Dyk%2FWkta7x5umqXTJFQK4brOFhprgqs0EyRvJB4IlvgFd6zFs6E%2FxQkAoZQdI1naWq2irJ94X4IY8SCXhFeJC5Rnfg68naEVpYfI90OeqzFWxPF7lA9P3DS6plmAbLRBcakkq%2BwQwUU5VNu99H4ItoqN7dtm%2BE0Os8k%2BI26EN%2B1WGHo4N5wfE%2BgBsT%2FyD0ODPLBhOUPNxLk1GALKQIhwknQLNpDw0TFLJM8BPrtVTTUqHwAxqfsTm5%2BWRiVnDFsx0Eqt43lUHAjMVNmsMyum4wVVp1HEiot5iCkUO0tPK9yY5y%2FhVebmKer15uI5VSA9owocXOxAY6pgFTBiU4jPqWa3jA2h1dKf12%2FTuZvwPeBKdL4O7YsQNR%2F7I38GIZ3rdP1aSez4swYomqJwP1s1Vui8ValvJy0oJ8Pn%2BPSpuULVgfYxthGsygWDZaok6E7gDDk7heWRG6gqzavNnP0wiNbTccLnloKWeOU5m9KG5G5CDTbraZ28Ca2xuXUKPpB%2BTR4Ue7t43QoT%2FEJWerMxj3O%2B0D1czMjK%2BVnSWvbjnY&X-Amz-Signature=89fd9ab6a00fb431377f8c45298eb6d8eec80d494dc3d4b0ae9a8ad9c30509ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGMQJ53%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIH0yn0PFs3W8WGhpJxK91iPje5hfR%2FhEHigC%2FoKKEXS%2FAiBQScMpYHvriic1Wrp4vKmYoebIuaOA%2BUU2kn4E9E0eYir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMDiU0sijdSaypu3ZXKtwDE6RJiaXK1VOYgruxBYwC0%2F54pz4jGz19h%2BErYAMEVAhxYS3t1kvR1r56wZV2dytQuHa5LLsZc%2FccFK3Ds2Y0xriIGtdhqnE4ilrcZifsTiiln1jhkVbG0GH9fUkZmV6jjPKz0AjCV9tGPF0yG0q%2BU6q1sHCmGG9wVLw%2FEHpPucjWz433mk7jxHeA2G3u7rWaBImE4I30xF44f7BlopAmdXipnqyOQJ5xtKdggiR1RwhuhX6TFqr102WFX2fPfIoz1lQVshQzwwwveOhVADf2Bz%2BMsHjL984gNmmgw24eY69lIFO%2Ft9hrp0Rfk6Dyk%2FWkta7x5umqXTJFQK4brOFhprgqs0EyRvJB4IlvgFd6zFs6E%2FxQkAoZQdI1naWq2irJ94X4IY8SCXhFeJC5Rnfg68naEVpYfI90OeqzFWxPF7lA9P3DS6plmAbLRBcakkq%2BwQwUU5VNu99H4ItoqN7dtm%2BE0Os8k%2BI26EN%2B1WGHo4N5wfE%2BgBsT%2FyD0ODPLBhOUPNxLk1GALKQIhwknQLNpDw0TFLJM8BPrtVTTUqHwAxqfsTm5%2BWRiVnDFsx0Eqt43lUHAjMVNmsMyum4wVVp1HEiot5iCkUO0tPK9yY5y%2FhVebmKer15uI5VSA9owocXOxAY6pgFTBiU4jPqWa3jA2h1dKf12%2FTuZvwPeBKdL4O7YsQNR%2F7I38GIZ3rdP1aSez4swYomqJwP1s1Vui8ValvJy0oJ8Pn%2BPSpuULVgfYxthGsygWDZaok6E7gDDk7heWRG6gqzavNnP0wiNbTccLnloKWeOU5m9KG5G5CDTbraZ28Ca2xuXUKPpB%2BTR4Ue7t43QoT%2FEJWerMxj3O%2B0D1czMjK%2BVnSWvbjnY&X-Amz-Signature=f0f26941c7f548f21ac95135be25180580d6ab55861be81c4598895aff1f337c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGMQJ53%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIH0yn0PFs3W8WGhpJxK91iPje5hfR%2FhEHigC%2FoKKEXS%2FAiBQScMpYHvriic1Wrp4vKmYoebIuaOA%2BUU2kn4E9E0eYir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMDiU0sijdSaypu3ZXKtwDE6RJiaXK1VOYgruxBYwC0%2F54pz4jGz19h%2BErYAMEVAhxYS3t1kvR1r56wZV2dytQuHa5LLsZc%2FccFK3Ds2Y0xriIGtdhqnE4ilrcZifsTiiln1jhkVbG0GH9fUkZmV6jjPKz0AjCV9tGPF0yG0q%2BU6q1sHCmGG9wVLw%2FEHpPucjWz433mk7jxHeA2G3u7rWaBImE4I30xF44f7BlopAmdXipnqyOQJ5xtKdggiR1RwhuhX6TFqr102WFX2fPfIoz1lQVshQzwwwveOhVADf2Bz%2BMsHjL984gNmmgw24eY69lIFO%2Ft9hrp0Rfk6Dyk%2FWkta7x5umqXTJFQK4brOFhprgqs0EyRvJB4IlvgFd6zFs6E%2FxQkAoZQdI1naWq2irJ94X4IY8SCXhFeJC5Rnfg68naEVpYfI90OeqzFWxPF7lA9P3DS6plmAbLRBcakkq%2BwQwUU5VNu99H4ItoqN7dtm%2BE0Os8k%2BI26EN%2B1WGHo4N5wfE%2BgBsT%2FyD0ODPLBhOUPNxLk1GALKQIhwknQLNpDw0TFLJM8BPrtVTTUqHwAxqfsTm5%2BWRiVnDFsx0Eqt43lUHAjMVNmsMyum4wVVp1HEiot5iCkUO0tPK9yY5y%2FhVebmKer15uI5VSA9owocXOxAY6pgFTBiU4jPqWa3jA2h1dKf12%2FTuZvwPeBKdL4O7YsQNR%2F7I38GIZ3rdP1aSez4swYomqJwP1s1Vui8ValvJy0oJ8Pn%2BPSpuULVgfYxthGsygWDZaok6E7gDDk7heWRG6gqzavNnP0wiNbTccLnloKWeOU5m9KG5G5CDTbraZ28Ca2xuXUKPpB%2BTR4Ue7t43QoT%2FEJWerMxj3O%2B0D1czMjK%2BVnSWvbjnY&X-Amz-Signature=d341f0747aa5f875abb7f6b1658ad2c1005ab0dc71b9b39f634c8fb308a90902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGMQJ53%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIH0yn0PFs3W8WGhpJxK91iPje5hfR%2FhEHigC%2FoKKEXS%2FAiBQScMpYHvriic1Wrp4vKmYoebIuaOA%2BUU2kn4E9E0eYir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMDiU0sijdSaypu3ZXKtwDE6RJiaXK1VOYgruxBYwC0%2F54pz4jGz19h%2BErYAMEVAhxYS3t1kvR1r56wZV2dytQuHa5LLsZc%2FccFK3Ds2Y0xriIGtdhqnE4ilrcZifsTiiln1jhkVbG0GH9fUkZmV6jjPKz0AjCV9tGPF0yG0q%2BU6q1sHCmGG9wVLw%2FEHpPucjWz433mk7jxHeA2G3u7rWaBImE4I30xF44f7BlopAmdXipnqyOQJ5xtKdggiR1RwhuhX6TFqr102WFX2fPfIoz1lQVshQzwwwveOhVADf2Bz%2BMsHjL984gNmmgw24eY69lIFO%2Ft9hrp0Rfk6Dyk%2FWkta7x5umqXTJFQK4brOFhprgqs0EyRvJB4IlvgFd6zFs6E%2FxQkAoZQdI1naWq2irJ94X4IY8SCXhFeJC5Rnfg68naEVpYfI90OeqzFWxPF7lA9P3DS6plmAbLRBcakkq%2BwQwUU5VNu99H4ItoqN7dtm%2BE0Os8k%2BI26EN%2B1WGHo4N5wfE%2BgBsT%2FyD0ODPLBhOUPNxLk1GALKQIhwknQLNpDw0TFLJM8BPrtVTTUqHwAxqfsTm5%2BWRiVnDFsx0Eqt43lUHAjMVNmsMyum4wVVp1HEiot5iCkUO0tPK9yY5y%2FhVebmKer15uI5VSA9owocXOxAY6pgFTBiU4jPqWa3jA2h1dKf12%2FTuZvwPeBKdL4O7YsQNR%2F7I38GIZ3rdP1aSez4swYomqJwP1s1Vui8ValvJy0oJ8Pn%2BPSpuULVgfYxthGsygWDZaok6E7gDDk7heWRG6gqzavNnP0wiNbTccLnloKWeOU5m9KG5G5CDTbraZ28Ca2xuXUKPpB%2BTR4Ue7t43QoT%2FEJWerMxj3O%2B0D1czMjK%2BVnSWvbjnY&X-Amz-Signature=9eccaa57085e681d9ee5a9f16c1d2bdc20830536bd680eae20058a1e9d318bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
