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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS6W4CFY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIB3Ks6awtU2NczJ4JtqHkry2Zu5dd0HQUZcdriSckD5nAiEA8N94cDmkIq8T7Xk4iUumbDYfsJyDeThPSR01O%2Blc2ZcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbzPFvzT082%2BzqD7SrcA%2FKtbM9GW0VWZa%2Fm97%2FY4BEZ8YhyP%2BjREDcHmyltXWB78cS7YdnUPYyIXreKnKlqs%2B4cLdZqheFzcCM6nJpavPMtUH9iXg6cuXbsQorjpTrv2XB4f48KO0bKOYRMWg5mU2dZgOB2qCi54WBfwQhkwWCGGqCZ%2FpKWG5uzikc83Pc1k%2BUujUQd401HagMmi5m%2Bd2DFlCgwvwS0VYd42Mtbal77%2B27sJWD7i2bWBq1UqUw067jPXaceza4LwrS3q8JVmTmgB0WYc%2BV8yhiOTtLPomd3MeGQF6l5Uf2ElMlpvJX4HN482ANahthHfwolVBA%2Fip7PmfljBExkACbw%2FuGU6QEiBOCN0%2BsLl0xn%2BNkRmlVwx35v49ukMSwwA1bV%2BKXg3vUgN77f3%2FXRmTWsq9iVhbh547TS2Y9UHOstG4g%2FCNIh%2Bfqa5P3FekuWOdFhGV3f9t1owb8CrosI8revCYYQuJIr3bEFh0862G8VKQq5bOOqQQEmYGUfMil3xbtzbQPuD47Ri%2FpTA7cMES4B9TNZq0%2FZVAM1%2FFZEMKK90voVVAaeEohw59TqdC3M26beqye%2B%2BBG%2FGqoQMhXM8tROlqSPhYbeLD8PQhgxkBsO27id6abvd4TwrlVlV7%2BEefNMMPaU1MQGOqUBEkOnr5uSVBNxauNjLhRLYmnfah2rkWgOvh6cYeiu8yPpveynbwcOEZzLPd1reJzdURRNy2d7265lrK7ZbKN0Z8Y9h7FYN8LktjpnIGWt4c6xxvhGGtKfRr%2FS9%2FKI0rfsPwHPAcWaSFYYDlo5TxDn1VobAThf8YM%2FOW6Ph4tsHZRRepIJt8bLIKrEYC3JzZhYBC5SRXCvqcc0HWp7DpeiXU%2BNm1g4&X-Amz-Signature=4bde8281348572ffb6ee5db0d21e8524911b74bec2b562d15d6a941e668c6a75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS6W4CFY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIB3Ks6awtU2NczJ4JtqHkry2Zu5dd0HQUZcdriSckD5nAiEA8N94cDmkIq8T7Xk4iUumbDYfsJyDeThPSR01O%2Blc2ZcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbzPFvzT082%2BzqD7SrcA%2FKtbM9GW0VWZa%2Fm97%2FY4BEZ8YhyP%2BjREDcHmyltXWB78cS7YdnUPYyIXreKnKlqs%2B4cLdZqheFzcCM6nJpavPMtUH9iXg6cuXbsQorjpTrv2XB4f48KO0bKOYRMWg5mU2dZgOB2qCi54WBfwQhkwWCGGqCZ%2FpKWG5uzikc83Pc1k%2BUujUQd401HagMmi5m%2Bd2DFlCgwvwS0VYd42Mtbal77%2B27sJWD7i2bWBq1UqUw067jPXaceza4LwrS3q8JVmTmgB0WYc%2BV8yhiOTtLPomd3MeGQF6l5Uf2ElMlpvJX4HN482ANahthHfwolVBA%2Fip7PmfljBExkACbw%2FuGU6QEiBOCN0%2BsLl0xn%2BNkRmlVwx35v49ukMSwwA1bV%2BKXg3vUgN77f3%2FXRmTWsq9iVhbh547TS2Y9UHOstG4g%2FCNIh%2Bfqa5P3FekuWOdFhGV3f9t1owb8CrosI8revCYYQuJIr3bEFh0862G8VKQq5bOOqQQEmYGUfMil3xbtzbQPuD47Ri%2FpTA7cMES4B9TNZq0%2FZVAM1%2FFZEMKK90voVVAaeEohw59TqdC3M26beqye%2B%2BBG%2FGqoQMhXM8tROlqSPhYbeLD8PQhgxkBsO27id6abvd4TwrlVlV7%2BEefNMMPaU1MQGOqUBEkOnr5uSVBNxauNjLhRLYmnfah2rkWgOvh6cYeiu8yPpveynbwcOEZzLPd1reJzdURRNy2d7265lrK7ZbKN0Z8Y9h7FYN8LktjpnIGWt4c6xxvhGGtKfRr%2FS9%2FKI0rfsPwHPAcWaSFYYDlo5TxDn1VobAThf8YM%2FOW6Ph4tsHZRRepIJt8bLIKrEYC3JzZhYBC5SRXCvqcc0HWp7DpeiXU%2BNm1g4&X-Amz-Signature=443ee9878592599d313fe713ef2e4d0fe746790722277d4e03f36ef749abcf41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS6W4CFY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIB3Ks6awtU2NczJ4JtqHkry2Zu5dd0HQUZcdriSckD5nAiEA8N94cDmkIq8T7Xk4iUumbDYfsJyDeThPSR01O%2Blc2ZcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbzPFvzT082%2BzqD7SrcA%2FKtbM9GW0VWZa%2Fm97%2FY4BEZ8YhyP%2BjREDcHmyltXWB78cS7YdnUPYyIXreKnKlqs%2B4cLdZqheFzcCM6nJpavPMtUH9iXg6cuXbsQorjpTrv2XB4f48KO0bKOYRMWg5mU2dZgOB2qCi54WBfwQhkwWCGGqCZ%2FpKWG5uzikc83Pc1k%2BUujUQd401HagMmi5m%2Bd2DFlCgwvwS0VYd42Mtbal77%2B27sJWD7i2bWBq1UqUw067jPXaceza4LwrS3q8JVmTmgB0WYc%2BV8yhiOTtLPomd3MeGQF6l5Uf2ElMlpvJX4HN482ANahthHfwolVBA%2Fip7PmfljBExkACbw%2FuGU6QEiBOCN0%2BsLl0xn%2BNkRmlVwx35v49ukMSwwA1bV%2BKXg3vUgN77f3%2FXRmTWsq9iVhbh547TS2Y9UHOstG4g%2FCNIh%2Bfqa5P3FekuWOdFhGV3f9t1owb8CrosI8revCYYQuJIr3bEFh0862G8VKQq5bOOqQQEmYGUfMil3xbtzbQPuD47Ri%2FpTA7cMES4B9TNZq0%2FZVAM1%2FFZEMKK90voVVAaeEohw59TqdC3M26beqye%2B%2BBG%2FGqoQMhXM8tROlqSPhYbeLD8PQhgxkBsO27id6abvd4TwrlVlV7%2BEefNMMPaU1MQGOqUBEkOnr5uSVBNxauNjLhRLYmnfah2rkWgOvh6cYeiu8yPpveynbwcOEZzLPd1reJzdURRNy2d7265lrK7ZbKN0Z8Y9h7FYN8LktjpnIGWt4c6xxvhGGtKfRr%2FS9%2FKI0rfsPwHPAcWaSFYYDlo5TxDn1VobAThf8YM%2FOW6Ph4tsHZRRepIJt8bLIKrEYC3JzZhYBC5SRXCvqcc0HWp7DpeiXU%2BNm1g4&X-Amz-Signature=33aa31e434b38b05e40ca92cd01c64e2b97df5b64e4e9a0bed0b88795b9d9576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS6W4CFY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIB3Ks6awtU2NczJ4JtqHkry2Zu5dd0HQUZcdriSckD5nAiEA8N94cDmkIq8T7Xk4iUumbDYfsJyDeThPSR01O%2Blc2ZcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbzPFvzT082%2BzqD7SrcA%2FKtbM9GW0VWZa%2Fm97%2FY4BEZ8YhyP%2BjREDcHmyltXWB78cS7YdnUPYyIXreKnKlqs%2B4cLdZqheFzcCM6nJpavPMtUH9iXg6cuXbsQorjpTrv2XB4f48KO0bKOYRMWg5mU2dZgOB2qCi54WBfwQhkwWCGGqCZ%2FpKWG5uzikc83Pc1k%2BUujUQd401HagMmi5m%2Bd2DFlCgwvwS0VYd42Mtbal77%2B27sJWD7i2bWBq1UqUw067jPXaceza4LwrS3q8JVmTmgB0WYc%2BV8yhiOTtLPomd3MeGQF6l5Uf2ElMlpvJX4HN482ANahthHfwolVBA%2Fip7PmfljBExkACbw%2FuGU6QEiBOCN0%2BsLl0xn%2BNkRmlVwx35v49ukMSwwA1bV%2BKXg3vUgN77f3%2FXRmTWsq9iVhbh547TS2Y9UHOstG4g%2FCNIh%2Bfqa5P3FekuWOdFhGV3f9t1owb8CrosI8revCYYQuJIr3bEFh0862G8VKQq5bOOqQQEmYGUfMil3xbtzbQPuD47Ri%2FpTA7cMES4B9TNZq0%2FZVAM1%2FFZEMKK90voVVAaeEohw59TqdC3M26beqye%2B%2BBG%2FGqoQMhXM8tROlqSPhYbeLD8PQhgxkBsO27id6abvd4TwrlVlV7%2BEefNMMPaU1MQGOqUBEkOnr5uSVBNxauNjLhRLYmnfah2rkWgOvh6cYeiu8yPpveynbwcOEZzLPd1reJzdURRNy2d7265lrK7ZbKN0Z8Y9h7FYN8LktjpnIGWt4c6xxvhGGtKfRr%2FS9%2FKI0rfsPwHPAcWaSFYYDlo5TxDn1VobAThf8YM%2FOW6Ph4tsHZRRepIJt8bLIKrEYC3JzZhYBC5SRXCvqcc0HWp7DpeiXU%2BNm1g4&X-Amz-Signature=26644fb1de77c106f3394f61e401b4842eb42a311af430eff919c0ae9ad97aae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS6W4CFY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIB3Ks6awtU2NczJ4JtqHkry2Zu5dd0HQUZcdriSckD5nAiEA8N94cDmkIq8T7Xk4iUumbDYfsJyDeThPSR01O%2Blc2ZcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbzPFvzT082%2BzqD7SrcA%2FKtbM9GW0VWZa%2Fm97%2FY4BEZ8YhyP%2BjREDcHmyltXWB78cS7YdnUPYyIXreKnKlqs%2B4cLdZqheFzcCM6nJpavPMtUH9iXg6cuXbsQorjpTrv2XB4f48KO0bKOYRMWg5mU2dZgOB2qCi54WBfwQhkwWCGGqCZ%2FpKWG5uzikc83Pc1k%2BUujUQd401HagMmi5m%2Bd2DFlCgwvwS0VYd42Mtbal77%2B27sJWD7i2bWBq1UqUw067jPXaceza4LwrS3q8JVmTmgB0WYc%2BV8yhiOTtLPomd3MeGQF6l5Uf2ElMlpvJX4HN482ANahthHfwolVBA%2Fip7PmfljBExkACbw%2FuGU6QEiBOCN0%2BsLl0xn%2BNkRmlVwx35v49ukMSwwA1bV%2BKXg3vUgN77f3%2FXRmTWsq9iVhbh547TS2Y9UHOstG4g%2FCNIh%2Bfqa5P3FekuWOdFhGV3f9t1owb8CrosI8revCYYQuJIr3bEFh0862G8VKQq5bOOqQQEmYGUfMil3xbtzbQPuD47Ri%2FpTA7cMES4B9TNZq0%2FZVAM1%2FFZEMKK90voVVAaeEohw59TqdC3M26beqye%2B%2BBG%2FGqoQMhXM8tROlqSPhYbeLD8PQhgxkBsO27id6abvd4TwrlVlV7%2BEefNMMPaU1MQGOqUBEkOnr5uSVBNxauNjLhRLYmnfah2rkWgOvh6cYeiu8yPpveynbwcOEZzLPd1reJzdURRNy2d7265lrK7ZbKN0Z8Y9h7FYN8LktjpnIGWt4c6xxvhGGtKfRr%2FS9%2FKI0rfsPwHPAcWaSFYYDlo5TxDn1VobAThf8YM%2FOW6Ph4tsHZRRepIJt8bLIKrEYC3JzZhYBC5SRXCvqcc0HWp7DpeiXU%2BNm1g4&X-Amz-Signature=fcece37a6623bff8beba44453be61aefabc046760c51e59cd6736b93496d3b6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS6W4CFY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIB3Ks6awtU2NczJ4JtqHkry2Zu5dd0HQUZcdriSckD5nAiEA8N94cDmkIq8T7Xk4iUumbDYfsJyDeThPSR01O%2Blc2ZcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbzPFvzT082%2BzqD7SrcA%2FKtbM9GW0VWZa%2Fm97%2FY4BEZ8YhyP%2BjREDcHmyltXWB78cS7YdnUPYyIXreKnKlqs%2B4cLdZqheFzcCM6nJpavPMtUH9iXg6cuXbsQorjpTrv2XB4f48KO0bKOYRMWg5mU2dZgOB2qCi54WBfwQhkwWCGGqCZ%2FpKWG5uzikc83Pc1k%2BUujUQd401HagMmi5m%2Bd2DFlCgwvwS0VYd42Mtbal77%2B27sJWD7i2bWBq1UqUw067jPXaceza4LwrS3q8JVmTmgB0WYc%2BV8yhiOTtLPomd3MeGQF6l5Uf2ElMlpvJX4HN482ANahthHfwolVBA%2Fip7PmfljBExkACbw%2FuGU6QEiBOCN0%2BsLl0xn%2BNkRmlVwx35v49ukMSwwA1bV%2BKXg3vUgN77f3%2FXRmTWsq9iVhbh547TS2Y9UHOstG4g%2FCNIh%2Bfqa5P3FekuWOdFhGV3f9t1owb8CrosI8revCYYQuJIr3bEFh0862G8VKQq5bOOqQQEmYGUfMil3xbtzbQPuD47Ri%2FpTA7cMES4B9TNZq0%2FZVAM1%2FFZEMKK90voVVAaeEohw59TqdC3M26beqye%2B%2BBG%2FGqoQMhXM8tROlqSPhYbeLD8PQhgxkBsO27id6abvd4TwrlVlV7%2BEefNMMPaU1MQGOqUBEkOnr5uSVBNxauNjLhRLYmnfah2rkWgOvh6cYeiu8yPpveynbwcOEZzLPd1reJzdURRNy2d7265lrK7ZbKN0Z8Y9h7FYN8LktjpnIGWt4c6xxvhGGtKfRr%2FS9%2FKI0rfsPwHPAcWaSFYYDlo5TxDn1VobAThf8YM%2FOW6Ph4tsHZRRepIJt8bLIKrEYC3JzZhYBC5SRXCvqcc0HWp7DpeiXU%2BNm1g4&X-Amz-Signature=2d0eeb192686ed0cfd820a97cccdfe1eda368f41b24a52f6655bb1049b5a7527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS6W4CFY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIB3Ks6awtU2NczJ4JtqHkry2Zu5dd0HQUZcdriSckD5nAiEA8N94cDmkIq8T7Xk4iUumbDYfsJyDeThPSR01O%2Blc2ZcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbzPFvzT082%2BzqD7SrcA%2FKtbM9GW0VWZa%2Fm97%2FY4BEZ8YhyP%2BjREDcHmyltXWB78cS7YdnUPYyIXreKnKlqs%2B4cLdZqheFzcCM6nJpavPMtUH9iXg6cuXbsQorjpTrv2XB4f48KO0bKOYRMWg5mU2dZgOB2qCi54WBfwQhkwWCGGqCZ%2FpKWG5uzikc83Pc1k%2BUujUQd401HagMmi5m%2Bd2DFlCgwvwS0VYd42Mtbal77%2B27sJWD7i2bWBq1UqUw067jPXaceza4LwrS3q8JVmTmgB0WYc%2BV8yhiOTtLPomd3MeGQF6l5Uf2ElMlpvJX4HN482ANahthHfwolVBA%2Fip7PmfljBExkACbw%2FuGU6QEiBOCN0%2BsLl0xn%2BNkRmlVwx35v49ukMSwwA1bV%2BKXg3vUgN77f3%2FXRmTWsq9iVhbh547TS2Y9UHOstG4g%2FCNIh%2Bfqa5P3FekuWOdFhGV3f9t1owb8CrosI8revCYYQuJIr3bEFh0862G8VKQq5bOOqQQEmYGUfMil3xbtzbQPuD47Ri%2FpTA7cMES4B9TNZq0%2FZVAM1%2FFZEMKK90voVVAaeEohw59TqdC3M26beqye%2B%2BBG%2FGqoQMhXM8tROlqSPhYbeLD8PQhgxkBsO27id6abvd4TwrlVlV7%2BEefNMMPaU1MQGOqUBEkOnr5uSVBNxauNjLhRLYmnfah2rkWgOvh6cYeiu8yPpveynbwcOEZzLPd1reJzdURRNy2d7265lrK7ZbKN0Z8Y9h7FYN8LktjpnIGWt4c6xxvhGGtKfRr%2FS9%2FKI0rfsPwHPAcWaSFYYDlo5TxDn1VobAThf8YM%2FOW6Ph4tsHZRRepIJt8bLIKrEYC3JzZhYBC5SRXCvqcc0HWp7DpeiXU%2BNm1g4&X-Amz-Signature=42d5e7c9ae87f941076a2604eb9964afab7ad119532030f05265c13b7678f53b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS6W4CFY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIB3Ks6awtU2NczJ4JtqHkry2Zu5dd0HQUZcdriSckD5nAiEA8N94cDmkIq8T7Xk4iUumbDYfsJyDeThPSR01O%2Blc2ZcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbzPFvzT082%2BzqD7SrcA%2FKtbM9GW0VWZa%2Fm97%2FY4BEZ8YhyP%2BjREDcHmyltXWB78cS7YdnUPYyIXreKnKlqs%2B4cLdZqheFzcCM6nJpavPMtUH9iXg6cuXbsQorjpTrv2XB4f48KO0bKOYRMWg5mU2dZgOB2qCi54WBfwQhkwWCGGqCZ%2FpKWG5uzikc83Pc1k%2BUujUQd401HagMmi5m%2Bd2DFlCgwvwS0VYd42Mtbal77%2B27sJWD7i2bWBq1UqUw067jPXaceza4LwrS3q8JVmTmgB0WYc%2BV8yhiOTtLPomd3MeGQF6l5Uf2ElMlpvJX4HN482ANahthHfwolVBA%2Fip7PmfljBExkACbw%2FuGU6QEiBOCN0%2BsLl0xn%2BNkRmlVwx35v49ukMSwwA1bV%2BKXg3vUgN77f3%2FXRmTWsq9iVhbh547TS2Y9UHOstG4g%2FCNIh%2Bfqa5P3FekuWOdFhGV3f9t1owb8CrosI8revCYYQuJIr3bEFh0862G8VKQq5bOOqQQEmYGUfMil3xbtzbQPuD47Ri%2FpTA7cMES4B9TNZq0%2FZVAM1%2FFZEMKK90voVVAaeEohw59TqdC3M26beqye%2B%2BBG%2FGqoQMhXM8tROlqSPhYbeLD8PQhgxkBsO27id6abvd4TwrlVlV7%2BEefNMMPaU1MQGOqUBEkOnr5uSVBNxauNjLhRLYmnfah2rkWgOvh6cYeiu8yPpveynbwcOEZzLPd1reJzdURRNy2d7265lrK7ZbKN0Z8Y9h7FYN8LktjpnIGWt4c6xxvhGGtKfRr%2FS9%2FKI0rfsPwHPAcWaSFYYDlo5TxDn1VobAThf8YM%2FOW6Ph4tsHZRRepIJt8bLIKrEYC3JzZhYBC5SRXCvqcc0HWp7DpeiXU%2BNm1g4&X-Amz-Signature=f4675c0a0b9b6ee88c5bd655bcb48b35076b349b38d6eccbfa03dd7731e51b5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS6W4CFY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIB3Ks6awtU2NczJ4JtqHkry2Zu5dd0HQUZcdriSckD5nAiEA8N94cDmkIq8T7Xk4iUumbDYfsJyDeThPSR01O%2Blc2ZcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbzPFvzT082%2BzqD7SrcA%2FKtbM9GW0VWZa%2Fm97%2FY4BEZ8YhyP%2BjREDcHmyltXWB78cS7YdnUPYyIXreKnKlqs%2B4cLdZqheFzcCM6nJpavPMtUH9iXg6cuXbsQorjpTrv2XB4f48KO0bKOYRMWg5mU2dZgOB2qCi54WBfwQhkwWCGGqCZ%2FpKWG5uzikc83Pc1k%2BUujUQd401HagMmi5m%2Bd2DFlCgwvwS0VYd42Mtbal77%2B27sJWD7i2bWBq1UqUw067jPXaceza4LwrS3q8JVmTmgB0WYc%2BV8yhiOTtLPomd3MeGQF6l5Uf2ElMlpvJX4HN482ANahthHfwolVBA%2Fip7PmfljBExkACbw%2FuGU6QEiBOCN0%2BsLl0xn%2BNkRmlVwx35v49ukMSwwA1bV%2BKXg3vUgN77f3%2FXRmTWsq9iVhbh547TS2Y9UHOstG4g%2FCNIh%2Bfqa5P3FekuWOdFhGV3f9t1owb8CrosI8revCYYQuJIr3bEFh0862G8VKQq5bOOqQQEmYGUfMil3xbtzbQPuD47Ri%2FpTA7cMES4B9TNZq0%2FZVAM1%2FFZEMKK90voVVAaeEohw59TqdC3M26beqye%2B%2BBG%2FGqoQMhXM8tROlqSPhYbeLD8PQhgxkBsO27id6abvd4TwrlVlV7%2BEefNMMPaU1MQGOqUBEkOnr5uSVBNxauNjLhRLYmnfah2rkWgOvh6cYeiu8yPpveynbwcOEZzLPd1reJzdURRNy2d7265lrK7ZbKN0Z8Y9h7FYN8LktjpnIGWt4c6xxvhGGtKfRr%2FS9%2FKI0rfsPwHPAcWaSFYYDlo5TxDn1VobAThf8YM%2FOW6Ph4tsHZRRepIJt8bLIKrEYC3JzZhYBC5SRXCvqcc0HWp7DpeiXU%2BNm1g4&X-Amz-Signature=06134777726d13ffef7f91017fe6dda3c55bf89d2ffba230f156fee6348c0032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS6W4CFY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIB3Ks6awtU2NczJ4JtqHkry2Zu5dd0HQUZcdriSckD5nAiEA8N94cDmkIq8T7Xk4iUumbDYfsJyDeThPSR01O%2Blc2ZcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbzPFvzT082%2BzqD7SrcA%2FKtbM9GW0VWZa%2Fm97%2FY4BEZ8YhyP%2BjREDcHmyltXWB78cS7YdnUPYyIXreKnKlqs%2B4cLdZqheFzcCM6nJpavPMtUH9iXg6cuXbsQorjpTrv2XB4f48KO0bKOYRMWg5mU2dZgOB2qCi54WBfwQhkwWCGGqCZ%2FpKWG5uzikc83Pc1k%2BUujUQd401HagMmi5m%2Bd2DFlCgwvwS0VYd42Mtbal77%2B27sJWD7i2bWBq1UqUw067jPXaceza4LwrS3q8JVmTmgB0WYc%2BV8yhiOTtLPomd3MeGQF6l5Uf2ElMlpvJX4HN482ANahthHfwolVBA%2Fip7PmfljBExkACbw%2FuGU6QEiBOCN0%2BsLl0xn%2BNkRmlVwx35v49ukMSwwA1bV%2BKXg3vUgN77f3%2FXRmTWsq9iVhbh547TS2Y9UHOstG4g%2FCNIh%2Bfqa5P3FekuWOdFhGV3f9t1owb8CrosI8revCYYQuJIr3bEFh0862G8VKQq5bOOqQQEmYGUfMil3xbtzbQPuD47Ri%2FpTA7cMES4B9TNZq0%2FZVAM1%2FFZEMKK90voVVAaeEohw59TqdC3M26beqye%2B%2BBG%2FGqoQMhXM8tROlqSPhYbeLD8PQhgxkBsO27id6abvd4TwrlVlV7%2BEefNMMPaU1MQGOqUBEkOnr5uSVBNxauNjLhRLYmnfah2rkWgOvh6cYeiu8yPpveynbwcOEZzLPd1reJzdURRNy2d7265lrK7ZbKN0Z8Y9h7FYN8LktjpnIGWt4c6xxvhGGtKfRr%2FS9%2FKI0rfsPwHPAcWaSFYYDlo5TxDn1VobAThf8YM%2FOW6Ph4tsHZRRepIJt8bLIKrEYC3JzZhYBC5SRXCvqcc0HWp7DpeiXU%2BNm1g4&X-Amz-Signature=a90ffa61cf84ef59a04caddc1d720651ae0cb52148032eaf986cb736de67cb2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ORCPRZZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFCvCBmHhfvXRGb7EZi1jTtpKQvvtRvFaAxHR2neSLbYAiASkBuIo%2FuTiPmKkcByT1YBJ0cFdZ2xCWYH5w0pNegomCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM40m%2B2RYbkN2WhF88KtwDFvY1sCB69Kqh4DVPZOPH6k72ZI5qmFo%2FMxjmNaHnKgbrfD%2BipdOJ4f4VKVD48bU5GUvKtn9MzgZMz10vhBIto7gWAjLjdS5UAol%2BivQu3B%2BRr1aFHrJf5ycKtp508v0O%2FeCySimJ7vb9I5%2FqIx%2F9vpWr%2F%2BxXHUsPQcCyWInGfLDzZGBhyGT2jQMKcv1tItKmm4GjX3qVGzb2qGQDU6tE8kWUamJISac4lbSlDYhSw85ZtdLgGMCu4Dh4JO6B%2BEJmUPWadl7GLCWYml%2FZnOK8%2F0h9fKQ1WiLKMkQU8i3NV55SelrZn8rIH307Q1y8Pe6HCook2ozDOxMgR9Sf8AgMJCb%2B%2FOTcZpvpbeCd%2B3EdohgTEgXsSXeohvnBA1FqaOw1PEHL0BRkJ0vci2BWxa2w6PULt3Ps6NOh4oJs5AlYgtyXrcqpbzM3YRRH%2FW8DWzU56Plr0d6nzJD2HgZweq5sbHW%2Fi2yoEqRzrdHvmXkc%2BlkifZx%2BFLXKlw%2BUsRUFJBtfCaFYfofSMl8dEljrBzdisy5TPi0klhPke3nPB72SomeANhDihm%2BGBtXQ4PKmnKR9mCb%2BNwsfH2P3hFh3kXqRFiP746%2FIf%2BhXzvpm9m5iOeNA2Z44hZ0sRdAS%2BXYwt5TUxAY6pgE%2B5kNRRKIS1SIDBgbZXDLxjJGMHQqvYZBXAflqpNIWMe7UynwLWF1803Q2Ri%2B09icpmRp4GbWYrEygd5BsMmzrjvLt28zbt2nCtv8CXC3HNILtxYohUn2clc0ln7FnToATGe74OUF8MkVvfGKYXFvC8%2F9zggb65Deb8Yd%2FsgQ52MpdiuCLbux3FaieyQV1j6BsbzWZAOMRJngx50IP0P31pGpLKgA%2B&X-Amz-Signature=8541c2e96c3d5f80f256fe4a88fc6b796bda4d58d1e2070d9e6d7ba5c52c8736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR6PWGRV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCss9Y9ff5pzpd9ROY9FGt%2B%2FHKfEV3gdb%2FDCH6tQqCgKAIgejrOVg1u0X3OTyi%2FGdpL1TwIki06jNDE4W5dJDgyhOMqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJxYDwI%2B2ndVNGKhSrcAwW4alxlO9Ewp%2BOD42A5VnOs61t8A2czjF5AerhwwPYpghx5cioQg3bXSEOh7eVH%2B%2B%2FtH2HmsbelE9cLjEo5VwJrEeKy0TlbjXcp0ng7i2ROtGfucjuflk7VtEWkBxZJuB8yAsUVXCyExWZ%2BVL%2BPuABcmKYMQVsu%2Fdx3%2BUXlxgMTUx8neZTopf0WmvNQUrnP%2BpDwCHLVv8XGHmyBCy4hFUH5J%2BaYUB%2FH%2FZvuqM8VPjNyodIwMhtiew17ZiJUtaNcXYT8lndBmL1rCZgRt5%2F0xLjjyWEkgB6NAEE9Sw%2FFY%2BcgYaqiD5PmOnMD8oS9fjuQ%2Fk9USaA6Fujd9W2JHjIh%2FD9TAQreVvpT9Z6ghyRVUKGOmFgXy7imeF90NOKQJQsqSVIcpeepwM8GlvnlswrhBaIB5EVjUrD74Y%2BqRjeaegEuyAN%2FWLrpidvUH8K%2FBH3LmMDNaUi3OmZBHsWjzvQiWWImIUfUr2IGCaDTnUaVwCmbQcZ%2BRenApQfqYmpJAVvgj1vdEIng4Qcp0pM4t1SyII%2FyVILUpl02nOgFY3z2gXCCbwkC94ttYu1ybo13oiGp7RD3WUEoug8Dq97lBw%2FlB1hERumr66E3KcmVTFe2Ct7VULY4fT8mQpGEtHy0MKSU1MQGOqUBv47bGUXqBQWwcbGqro2KZN%2BhsS1p53nd4dTYz7X04bSpnteusKdm3%2FsavO6rk0To%2BhtJ8lfRxWV%2Fh23CCSobqU8G4Z2%2BOo3pbFQDlwq0lGMD2%2BAzjyRuweSg7B8oupuXGY2pWdtYXrsmH25H8zzGnrGaxG4LgvnqeW0ib9DSvv0W0oVfFGepwycEkk2Usg0f0y6pJLoppZV2F60JLgdi0Fg1Ifl1&X-Amz-Signature=21fa69aac20e44ef048e07b07612442efcb0919e199709b7f7a4cb5a2fdd6e45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PRK5LUF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIBVLA6Pl8AVtf8HYbBwbK8e5Kh9nEhFtqLyQst2WGTUrAiEAoUDka3m0MXBNdQFZkk70UfpYdlw1VtB6RmYkIcU%2F7twqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJb2UebU4GgNFzXbZCrcA6LO5sHiZ%2FFxYOa9agYl%2BCugorXonxu91eNot9WQHerI%2BpZmepNTzGIfdURlrI%2FbCbAGHG83vPMzukQGHvKBrglHpy8Egx9CT13O0zTM4UqfUDlS3IfPBJZV0meg7ki1eW3uB2yUQ6Ks297qIIhmKk%2F0ClHg4hsamBO7OSsDt97DbsQobFm%2BWkyj%2F9iS2KKsRFwWOZgHLPec3PgTivxz6kQAjJOWtfIKiayOxU%2FpkT4T4D1Kbw8Ut6wuzXzxThe6RYF25r0fguPFYfxr7seFG45sKwZ2AdrsDEHFBV6ZJNA1UDwIPW%2FEwB0o4d829J5r4l7FM8NvE5Qpao%2BpdtHrWzOeAKKC1dr%2FSrMzzEfF2R3HTJ2nkrwzXXJ7n1GEba6kEpqZeJFPsEPy2xH2S1h6%2BZUc5Dw3CWu%2FpWMAkci%2Bl8Fg5M8Ciyl3jQ9Ahfs9Kcts8CJO2Vy9yMLWy0RTE0DLaYdtB0yElpUmFKlU4bjCvMOlT%2FNjJALIQj%2Fdyt%2BgMBJrrWlOZUOQUZrgCexjlgbHpILCJ7pilarW2gzSkNFjhFP6hBOg1xDAtAQnNYKmfZFbajioaqUaCGI2Y1%2BLea0jIUI1jBPv%2FhaW54BU3i06GIZJjq%2BGRznVh9bOdpA0MNSU1MQGOqUB9mAyPVjbSUMN4RrFoU9Sr2ue07UssW3DEg3euT7C2HSnkP0dYr0hx3WkFd7a%2BtHuAZiETRoqRIRBsBS4IdiSJIWls98WomXEdc1AV%2FjPvvjMADxCl5PY93SjCpRG3nZI%2BtJ10ntlnv4OTDThH8HNP%2BV%2Bhjc7OtOBCqTsOC2se58oAVdm6tq9oAYMGzP70eBRipBWEfeOlbIjI7VXbf0LKgz5yE29&X-Amz-Signature=8ddbf91c5397c80589ecc010356f16341ffe49125f2d481e52d1d5b5b5f2b31b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS6W4CFY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIB3Ks6awtU2NczJ4JtqHkry2Zu5dd0HQUZcdriSckD5nAiEA8N94cDmkIq8T7Xk4iUumbDYfsJyDeThPSR01O%2Blc2ZcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbzPFvzT082%2BzqD7SrcA%2FKtbM9GW0VWZa%2Fm97%2FY4BEZ8YhyP%2BjREDcHmyltXWB78cS7YdnUPYyIXreKnKlqs%2B4cLdZqheFzcCM6nJpavPMtUH9iXg6cuXbsQorjpTrv2XB4f48KO0bKOYRMWg5mU2dZgOB2qCi54WBfwQhkwWCGGqCZ%2FpKWG5uzikc83Pc1k%2BUujUQd401HagMmi5m%2Bd2DFlCgwvwS0VYd42Mtbal77%2B27sJWD7i2bWBq1UqUw067jPXaceza4LwrS3q8JVmTmgB0WYc%2BV8yhiOTtLPomd3MeGQF6l5Uf2ElMlpvJX4HN482ANahthHfwolVBA%2Fip7PmfljBExkACbw%2FuGU6QEiBOCN0%2BsLl0xn%2BNkRmlVwx35v49ukMSwwA1bV%2BKXg3vUgN77f3%2FXRmTWsq9iVhbh547TS2Y9UHOstG4g%2FCNIh%2Bfqa5P3FekuWOdFhGV3f9t1owb8CrosI8revCYYQuJIr3bEFh0862G8VKQq5bOOqQQEmYGUfMil3xbtzbQPuD47Ri%2FpTA7cMES4B9TNZq0%2FZVAM1%2FFZEMKK90voVVAaeEohw59TqdC3M26beqye%2B%2BBG%2FGqoQMhXM8tROlqSPhYbeLD8PQhgxkBsO27id6abvd4TwrlVlV7%2BEefNMMPaU1MQGOqUBEkOnr5uSVBNxauNjLhRLYmnfah2rkWgOvh6cYeiu8yPpveynbwcOEZzLPd1reJzdURRNy2d7265lrK7ZbKN0Z8Y9h7FYN8LktjpnIGWt4c6xxvhGGtKfRr%2FS9%2FKI0rfsPwHPAcWaSFYYDlo5TxDn1VobAThf8YM%2FOW6Ph4tsHZRRepIJt8bLIKrEYC3JzZhYBC5SRXCvqcc0HWp7DpeiXU%2BNm1g4&X-Amz-Signature=7175660002823a2cd8acaba3a884890a3dfe42c20958016e176a9b2200290dbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VISE42HS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDC15jPTwHcip0u66AQSDhIvEYndlv0Q2Bk13UyfuaoeAiB2lkBLq6uDAw234Fjk5naAt%2FYitAjpi5LWdgRmSyukSiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMibSrXXCM%2Bu5WloSKtwDYuAn1lHha5h72cKz5H2%2FgNfWrrVJDvPqwGDHA044WBnKb%2BBN7MZeMMth0ZzO2FtQzHTSsEyH7aLj46zTgFbI966wya1mz7F4XaOXPhcNY1f%2Fa8nLHDMrgWDLljjbPMhHea%2FARIr7fTGVfZ2i2soyeLBIW83DN1QfSyf9I5zt96ZYU4DR2WfaZnIZ9GgHtpSxKNnNB7BDqX8ilqwELytrFqNmNhymedbHAEL%2BjkOlMYxlxCuSwpE7Anc1kO6znybb6E8CucJIoUJ%2FSjSXERxV%2BmZRxIkLV3Icmt79uhikdU9zcdNfZNtuF%2FQRpFRUlfdfOWaYBuVusElVytrnq0LqFMtOcttpr6uBUGLK7h6xqVAQekE%2BB4YlAM7Lhopef1OivvMB7yNdo2Ym%2BPyG8M%2F%2F24xS8DY%2F%2Fh9FAfgYSv%2B%2BCuvqKWDRzUSjWa%2BxmonDoN1wFZjJhF3hE0hPwtQ7dCpw5RnEg37Nt%2B76PSADpKXSk0Reft2pAcKDfC5c98pF%2BZinWNBbwOv9Tz0t%2FYzjqWAg8OZ20jLSuYJfII8ERCa7R1ydtADjAx9r2eYsGKodWGg1KPVtuVd%2FY%2FsQj1Dlh7bcnYKrzrqwDvBWFYPqhGG7pz67ZbL6ZqUTik5BK3YwlJTUxAY6pgHxrlMMmFmOvcvgt%2BXbSfXKIb2v%2BbhaPqONTi644O%2BDClmNItr4LilR6bjDZixVBTjmwJsFHYiPfpdRPR3CutHGtUAXh3ezZQ%2BeE7AJQOnVyIrrfOjxBkQi44KO9Olsa%2B73S0NeLj37TyXHgaM9hpMKJY0Up69CPs5oN9mKhubKIYgCeT2%2BeFcC705edV1x3kCfOLXPj5T0wShpDDJ7qa2xdnIg9AL2&X-Amz-Signature=ff262733c1a5d02fa0cf0371a80b8b1c4a878aff2f68acc7384f2e373906480e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS6W4CFY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIB3Ks6awtU2NczJ4JtqHkry2Zu5dd0HQUZcdriSckD5nAiEA8N94cDmkIq8T7Xk4iUumbDYfsJyDeThPSR01O%2Blc2ZcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbzPFvzT082%2BzqD7SrcA%2FKtbM9GW0VWZa%2Fm97%2FY4BEZ8YhyP%2BjREDcHmyltXWB78cS7YdnUPYyIXreKnKlqs%2B4cLdZqheFzcCM6nJpavPMtUH9iXg6cuXbsQorjpTrv2XB4f48KO0bKOYRMWg5mU2dZgOB2qCi54WBfwQhkwWCGGqCZ%2FpKWG5uzikc83Pc1k%2BUujUQd401HagMmi5m%2Bd2DFlCgwvwS0VYd42Mtbal77%2B27sJWD7i2bWBq1UqUw067jPXaceza4LwrS3q8JVmTmgB0WYc%2BV8yhiOTtLPomd3MeGQF6l5Uf2ElMlpvJX4HN482ANahthHfwolVBA%2Fip7PmfljBExkACbw%2FuGU6QEiBOCN0%2BsLl0xn%2BNkRmlVwx35v49ukMSwwA1bV%2BKXg3vUgN77f3%2FXRmTWsq9iVhbh547TS2Y9UHOstG4g%2FCNIh%2Bfqa5P3FekuWOdFhGV3f9t1owb8CrosI8revCYYQuJIr3bEFh0862G8VKQq5bOOqQQEmYGUfMil3xbtzbQPuD47Ri%2FpTA7cMES4B9TNZq0%2FZVAM1%2FFZEMKK90voVVAaeEohw59TqdC3M26beqye%2B%2BBG%2FGqoQMhXM8tROlqSPhYbeLD8PQhgxkBsO27id6abvd4TwrlVlV7%2BEefNMMPaU1MQGOqUBEkOnr5uSVBNxauNjLhRLYmnfah2rkWgOvh6cYeiu8yPpveynbwcOEZzLPd1reJzdURRNy2d7265lrK7ZbKN0Z8Y9h7FYN8LktjpnIGWt4c6xxvhGGtKfRr%2FS9%2FKI0rfsPwHPAcWaSFYYDlo5TxDn1VobAThf8YM%2FOW6Ph4tsHZRRepIJt8bLIKrEYC3JzZhYBC5SRXCvqcc0HWp7DpeiXU%2BNm1g4&X-Amz-Signature=1d599024ad0ad568630621bddfd68dc2b24d1f5c8b1d358461b91da2db292d0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TNNAFHV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDGf2X5EkQeABPMzpzWOuZRlb2Rd1Hy4XhMpcgLmSDsVQIgVhZBElnus5h0QmWt0Vvllriz6qZNfZpbn81rvZcOVx4qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7txUBoF%2BaojcELcyrcA4ugQtzpLcqS%2FS%2FlY%2FWaw5TT1MyC5jzsthQ7%2FYjTM1Eh0uZLRpxPYbVPaMrkeIflwe73usqj7mp7Ya4JBXILY7DxlAHWGVlY3zDhoeqQVKKmClJaIrRMBvlFdzYMM78jQWAhmqgfDk4DmR%2FFFzqzJlaJhOYXEWauEO%2FQZxOvUpDigUIou4jfO7dyDEClOUDIY3RoDhl%2FGrm3xuwwiWUle%2Bfyh03VTxWGEgjft74Jha8hqI3khjMdxKpZDQI0PRM0WsaACom53o65c2iPqjj4hUHT4arr%2Bvsqcd5Xj4ccl3MQC0HS8PkkTvk0N%2FvIVvYQveAvL9VxlhGn%2BMLwzHduuelwqNxbTsFLq1lX04lE%2FjISH3kzRNdqYyjlIbkbMZWJlj0oX0g9HRoMRsXVkw6Uu00xqFPJ1raAJIyc1yZyYyy3Ese5XvX7vSCjWs1VtH7q%2FlNN%2BL6XTbWydYmMZ%2FEUuF2Xp1%2BIKqUYsryrSM93D5ahd8ep5Yrp%2Fo92IQW1zCGpsNTO9a1uH%2B9bQydExTFIOr7rHVBDVsG3hCpJ%2BlVvBdzEj%2B5Im2BrkWr%2FLLGmhQTIj%2BowfjDIUEvu2QuCO6Bx8ZZx08SvhzA6Bgbj0CffiIAfexmOZFdhkqQ%2BmWDEML2U1MQGOqUBetZ%2BbwfcjbTDo1%2BqVS85QwLdlDHtYoygA4FSMnWXc01gYfJl%2BhuHDA0CboAQNihYHB%2FM5brgB10HPlqiiXj5K2cQHPlFX4OGJoUxk8q1LiCll8J8CT5XjkLKfl6mr2E4xyq4g%2BTSu8Ix7%2BucEg3t6pLL6%2FzxJQXCsONE8AAZ4lDWFnasfqQqRD2iSNdqbVBOGiW63JBR3e91fy3WxwhhhzaINo00&X-Amz-Signature=c148d7a419c06b9b487b437b8b501733de176c5b38f8abe84a383032d1075908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS6W4CFY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIB3Ks6awtU2NczJ4JtqHkry2Zu5dd0HQUZcdriSckD5nAiEA8N94cDmkIq8T7Xk4iUumbDYfsJyDeThPSR01O%2Blc2ZcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbzPFvzT082%2BzqD7SrcA%2FKtbM9GW0VWZa%2Fm97%2FY4BEZ8YhyP%2BjREDcHmyltXWB78cS7YdnUPYyIXreKnKlqs%2B4cLdZqheFzcCM6nJpavPMtUH9iXg6cuXbsQorjpTrv2XB4f48KO0bKOYRMWg5mU2dZgOB2qCi54WBfwQhkwWCGGqCZ%2FpKWG5uzikc83Pc1k%2BUujUQd401HagMmi5m%2Bd2DFlCgwvwS0VYd42Mtbal77%2B27sJWD7i2bWBq1UqUw067jPXaceza4LwrS3q8JVmTmgB0WYc%2BV8yhiOTtLPomd3MeGQF6l5Uf2ElMlpvJX4HN482ANahthHfwolVBA%2Fip7PmfljBExkACbw%2FuGU6QEiBOCN0%2BsLl0xn%2BNkRmlVwx35v49ukMSwwA1bV%2BKXg3vUgN77f3%2FXRmTWsq9iVhbh547TS2Y9UHOstG4g%2FCNIh%2Bfqa5P3FekuWOdFhGV3f9t1owb8CrosI8revCYYQuJIr3bEFh0862G8VKQq5bOOqQQEmYGUfMil3xbtzbQPuD47Ri%2FpTA7cMES4B9TNZq0%2FZVAM1%2FFZEMKK90voVVAaeEohw59TqdC3M26beqye%2B%2BBG%2FGqoQMhXM8tROlqSPhYbeLD8PQhgxkBsO27id6abvd4TwrlVlV7%2BEefNMMPaU1MQGOqUBEkOnr5uSVBNxauNjLhRLYmnfah2rkWgOvh6cYeiu8yPpveynbwcOEZzLPd1reJzdURRNy2d7265lrK7ZbKN0Z8Y9h7FYN8LktjpnIGWt4c6xxvhGGtKfRr%2FS9%2FKI0rfsPwHPAcWaSFYYDlo5TxDn1VobAThf8YM%2FOW6Ph4tsHZRRepIJt8bLIKrEYC3JzZhYBC5SRXCvqcc0HWp7DpeiXU%2BNm1g4&X-Amz-Signature=5a2e821e897e6dbb6c667de294e81075db674f3e082360b9b05aa6b412041008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TPOO3EN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCbBuHdWYc6aRI7pmf6yuk2IX2jsJm7GwDO9foUpSM1CgIhAIPonJ7hLWF3mzLbMb1sUwjfYwlUjY2931PIrcLyDAt2KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg690rdkqejRN4PQ4q3AOBdsX75n%2BnLNmk%2FrO5yUYoqv3gNewlpsL%2BoUUsPoTdZVBknHUa2mpUPAlKxya%2BtthGUJnEGubvIGAzajZQkQzmyMNMH999CL6f6ckLxkd3bJO6lmiB2SAa%2Byth2qFmN1Kb8uczmg7imV4Rln1QjmWRcKk4Y03B%2FmxcYVYotZDxljXaSTO%2B09O5xeZ40erDgfs0DlMcaCop1XHR1hDpnb1aHv4PHS7Fy7ZKXQ176l0YrLnHBO4ufQsWZM%2F4mgd6RjcWPrRzylGqiVZ4cP4ag34d0YWU9SbFCAYxI11v1v9Ocqv6%2FkhQs7FlLUOuFG%2FAK5YQVUXGlof3w7jvgViQvaQ59RrlZuDrQEIzsP98lw2U3FLMeNVTUL5iE5b83Ek%2FmTJvYxz3FZZwPpWn03Z1ozUmsfng94UV%2BXAIWQNqXI06yYCoUPxJtHFpDphw1ezZg6EQmdxphSRbqQX8l%2FREMMeozD9P86z5Dd5kj65%2FXrwc%2FLkD4iF%2BtWaOTPjJvzyQ9Enm4ENa%2F7sFlh2kUpFkKcp4etlt%2Fk3y%2FI1EIGeRmO7F0fYmPibijvGitKlAwZ85ErEEzlTAu5nBp9AXP5wVvnpD4QwsB%2Fq2EEMGphH7HHSRhN3Pe8JYIp9kWLrDGzCklNTEBjqkAWHaVRztCNjdyxlshaD%2FZnqXqO1xXFlfreywgmRMShUiLeKA2vzSSk033x%2Fhx7A3lDqxUpstX0Tqu6JSbMoccmWpo25MzIFgKo%2BxNeX8l7jbY1Cm4QFOOmD2T3Yg%2BVth4VpoHLjVIAavW%2FtV6GSCzbxxWDgGKuw64dx6R9jWNPCeqwNyj0FN3%2FZEobiXvBP0KZJfaWSzXayYoSLEWQJlnwcdwLpi&X-Amz-Signature=96f92bd46dd99bfd3733067d521fa77214b65b2032a15f23f8b70ab366dbf9ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS6W4CFY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIB3Ks6awtU2NczJ4JtqHkry2Zu5dd0HQUZcdriSckD5nAiEA8N94cDmkIq8T7Xk4iUumbDYfsJyDeThPSR01O%2Blc2ZcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbzPFvzT082%2BzqD7SrcA%2FKtbM9GW0VWZa%2Fm97%2FY4BEZ8YhyP%2BjREDcHmyltXWB78cS7YdnUPYyIXreKnKlqs%2B4cLdZqheFzcCM6nJpavPMtUH9iXg6cuXbsQorjpTrv2XB4f48KO0bKOYRMWg5mU2dZgOB2qCi54WBfwQhkwWCGGqCZ%2FpKWG5uzikc83Pc1k%2BUujUQd401HagMmi5m%2Bd2DFlCgwvwS0VYd42Mtbal77%2B27sJWD7i2bWBq1UqUw067jPXaceza4LwrS3q8JVmTmgB0WYc%2BV8yhiOTtLPomd3MeGQF6l5Uf2ElMlpvJX4HN482ANahthHfwolVBA%2Fip7PmfljBExkACbw%2FuGU6QEiBOCN0%2BsLl0xn%2BNkRmlVwx35v49ukMSwwA1bV%2BKXg3vUgN77f3%2FXRmTWsq9iVhbh547TS2Y9UHOstG4g%2FCNIh%2Bfqa5P3FekuWOdFhGV3f9t1owb8CrosI8revCYYQuJIr3bEFh0862G8VKQq5bOOqQQEmYGUfMil3xbtzbQPuD47Ri%2FpTA7cMES4B9TNZq0%2FZVAM1%2FFZEMKK90voVVAaeEohw59TqdC3M26beqye%2B%2BBG%2FGqoQMhXM8tROlqSPhYbeLD8PQhgxkBsO27id6abvd4TwrlVlV7%2BEefNMMPaU1MQGOqUBEkOnr5uSVBNxauNjLhRLYmnfah2rkWgOvh6cYeiu8yPpveynbwcOEZzLPd1reJzdURRNy2d7265lrK7ZbKN0Z8Y9h7FYN8LktjpnIGWt4c6xxvhGGtKfRr%2FS9%2FKI0rfsPwHPAcWaSFYYDlo5TxDn1VobAThf8YM%2FOW6Ph4tsHZRRepIJt8bLIKrEYC3JzZhYBC5SRXCvqcc0HWp7DpeiXU%2BNm1g4&X-Amz-Signature=303b99e7b28cffca23ed257a49c387d23cff1a90852eddb7672217f93df549a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVD4IW4S%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIENK4Y8uIpEZmrn0jRWUYubPKlA69lNM7FFW%2BKL9VrGlAiASayYBipkjk9hmBhvUinEeBQTmOGIpGjebJDlttphgvyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdFYg3qisTBHtJkowKtwD5f5D7Hv39BwjYOzVytC3jRp9SYrXOgTaJhz9fx5KXN5PoLxFL1SKB6CzsUST324NoWCSiQgS7YE1fQLMk1LmJEl%2FPX2dZR2yAES0%2BnSE3ECUuw03s4BUTqKOrdWefLRvJ3JrxS2Nr9HnbMODPRiCOZmCtLKy6QsUEsZPmRGV5hyruxswhpWClA5X675AiIL4qXa9ioCiHtZi8ivY3HVjGr3EeaxOpBd2j5yfDfgvYJvcwwdi20RtZpWkZiEO9stf%2FkEyxXmD9k3t3b5qq1HitULptkmggTHsspyGzxnfU14mv2pH74iyVzpVeskuH4kx1dq0EKxgvDhlZ9Qq%2BfTqCDW6mqtAW0xnyTmeQ1Qn7VN7avZMHkHxjQ%2FuEm5NdKjye8N7AWE5ido2%2BJJbolXhB4nogpUSgPlTLTgbzWXTSK%2BaKPAhFSToL0QakZH9XOKs98WTl%2BQJAKw6nRz69YjHBj5vZOCHX00d3mA7oTsRe4FlPs7rXJojsAXWnjNVTYYLtOpmnkTot22Wh7pvn4J8HDj4g%2Fr1Ga9o6ADSEOKcNiy0c0FVP6J9jj60emsK%2BCCKiyiwyCB9SDHzFbREFeLmwOf6ojtHsV2WVEt3nv5NgjhZW5QTyg5uAL3hWc4wkZTUxAY6pgFHlSs%2BM2tS15GAtv1g3Jov0oUe3ihyYxL4V50frTixOCkaTI67r3oHERSPFUhlBsnLpD%2F1EbtC3ISzaasabgccAwS%2FF0pu8Qxw9iEeZe24wsig1SPOGrjUs9wPA0oXDSEosMkK4UobpuDKXdRCYPrle2CJKXMEu2Us5D9tlwv31JEkuBsubQjCsk9R4N%2FaltSKv7%2BC4JMVWyLkr3YVHKcv3KOEfn5k&X-Amz-Signature=050f62726918afd214a7bc9687dc02c0d6effd0c8c5702615ee9b953a65ccc67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV6B7GO2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDmz2a3PeqZN4oJAB%2B7ZS%2FGtVYh6HmYjvKLIBOTMEnhuAIgeFmE0wvIMHHNPKlt84L9wqL0dKEFSxP5v6q%2BHLj7g7UqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZCz7VqrKuNk3nqJSrcAwNjf994F5PrCqiAxT7zGokhnA%2FlK%2F4gFjyNSO1Ys7oSBZ8eaM%2BdeVDrZfodgJsT6us4HzcECD6QPUu%2ByDQ86Om6rBdlldnN8HaH%2FmXRRX9M5CGlm0cEJ3GZxVkgYw7AdxW3V7duxnnNnPMAq2C9fbu8qSAYyEWSEp8Q82oOcy9ZWARfWVBLcBnxRYFRyIw2ZDfudm2UoYp08%2BWPalWSjlQUBgsc3TD7yd80wDJAVos1hSh9gxh6CZ33MSm9vpxB%2FshT3Z2nHjHRg0C9YyeSzR5%2FiDuRMt%2F4T6jnRDkKBkJuYTz6TmrkLH4Ckvu0CZUO6dYNYp8iBb1QZx7ZCKoGOuRCHTuytCA26OZkwX4Qc0Y9%2BTt4%2FYo0jLTqgjUkdAs0aX%2BY9Z6CQTyd0M39siVpAIoUZvIuKhpD4gG3PHH7GtlFHtcHY5m6cE3%2BxK%2Frw8RgrQ3G6aUwHdKmD1Ljw9hJ56dratCnyPzCGxF3VnatGAeI345b%2BLrCVVqO1K467P9BxxA1XP3EFaJRW5RJIAUNEOVRv7E52qgMvgs6tYGBnQk5H5SDLKwmlwTd52fOYTYI4Ve9hNeuJrdJIsgkHHG7QW8TYDR2EkMegT%2BSxYSLcm%2FoqjOy%2F%2B%2B%2BjudSZavhMP%2BT1MQGOqUBqnpuZ9K%2FHxmhOmTv5CPh1F3yHHPuWANnNz9yP8yFqxDkAisy0PbKEOvlJitp%2B0mqBaeJPcl9iGZKw90%2FRzxPgDjREZxzdlDSSby%2FdgNyUKLrwLywH4bUcO7YdYDjOXdDbfltdox0%2Fh1cQbzj7vfD05GKsQY73pNFGDsuNfQm2EgrMlQhaVuGQKid52rse5V0fksmEaoTCbvaOnmQ2dyGPw4JZU8M&X-Amz-Signature=aee7b0a653b2994ea70c7527bb74adc2d0dc0672491c73046efa1bb983be5bc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBHED2SK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDuzuFB0oPC4DSg0gvXOG7peEN%2BhVOB4ZwwopQgDCY0bgIgOKEeFAQ2Xq9ZkYz1%2F1pAjRm2F%2BwTyh9W6wHoR9IAE5MqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNcBczqDW3oigObz7ircA%2FJawonjvnmM9EaQc9SGUAWoZPE8lEKoNKX%2FH8uIdubiRo08MEI9FGx%2BA5a16A4D3WXEUBRRyY%2Fyqg6jt9n0K%2BhI%2FmySBPRibh6jVLjVlJD2UItYYY7DveSezr5WLdsFDcJIUQVyPp9MbYB18C5thYmsw6U1aRL%2BHteKHg3AD29W13%2Fc4Bv5JTd6OLqLcU9hS5F%2FoqENLnIJox2uLeSIl9QRG5QE1Gh%2FBLPeAnOhv24ppkOqukEZEl2NNOdVXvj5LQMH%2FHSlP51fxlb87qzTBzK5ifgrQCy%2BVFHstDueShOOHC51RB8uwQgEPX5tq7ABxuNzF0QI8EcnMczY0ae6YTMKZOK%2F3JylHeyTQ0AoOPfei4ghp3lbjp7HT%2BnUC6wgtaH7XdI3OkaYXedJNtl5s1U1Mi181vz42KgPCj7bm2ofTOb6190Mc4Rl5X3M6Z%2BR6%2BpzbpY0fqrzUxo2ZVWzxbm9%2BQnHijWPaiYVY5Y3rp2rVwW9vAEOzTcYKy3RW7qroCgcP0edTtZaqwbeYH%2F4idxVUgUydK8j4x%2FD122N75xkRvTlBB1mc6VVi2k%2FIHUGsRcDBupyfGGjL3hn8SUJNICLnEkUBhmq%2FIJhMSKUdhYYgD1oWsrYRJq1vs%2B2MJuU1MQGOqUBTkfMxQbdLOAsi%2BCNaPHs1Cp0OVzZefYJITlxWJIxdxDg9e7g%2FJyt%2FFMHjz3PWa3igclZYpKWLImn1rrqWhZs9q3YiqKTtrMWvsxoL7zqlamn%2Buh7Py83PhZWvtGyCq%2FxHai7ysai%2F%2B4r%2F6W8emkRvSFH6hNy4aLauhJfAPP97LqLOwUQwbQZa2D1nDpLDw6GJWLF9LDplyaiDjOUjLGfIB%2BEgw4h&X-Amz-Signature=0dbc5d40f2e56a5fbfec3fb392358eced6c0ec5eed5bfc2f58afcd6abe3f1a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3EJOM2X%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQC9ONrAyvKO0R7V3aWQqJwFqQVStrBSULvRPJ%2Fu8zDxiQIhAL%2F1xw8qk12nLOQ8U3pT%2FyldRmc5oT90fYG0smbV8tDmKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKiphhxuLPxXUj9Ooq3AOa4V8NvpGUWTOu52euxklflvb6o3DzrXum%2BnEtQD2VHAUHa%2FvlFrswp5%2F0b0nV20I7fmVh10Jm%2BlDS35UVqrZFcLxUSx2QzBzK4xVm%2BAtb4PkKsBYt28V6rfrqsyaqsknHn6gSrxc4e5g8%2FaozqhLKM3iQ%2BiVZV33fUIn%2BhQ%2FVwLnkqD39jgHutfly%2B7WJ9cxvjc88zr8xbXB%2B1p9kPkguyqozKexu7c6s6KEcnG2CxggXrX5wukTJcXVIWj8NXJfoAghyLCxkGhVQ1r1qqL7iYwXg9EduhhJLzBOtPJ%2Fj4BJCQzF%2Bf%2BJAtUQ%2Bte9pUrOcCOoz%2FzKzOzolad1lPo%2F%2B5jtz4UQtMpNMBku4e5hAewqlAvpOjJg9HEeQ4ByGYi%2FyNJAFwsaalRMPnN9vruly7q26hcJz0Zq9QBpD%2BO0ZwmcyC0bSN7d7CvHFoft6z6Gzwu5qxZjflC6ZryXG3KsBuoGmITUkd1qV%2Bw%2Bx%2FVGOUA9VMOuiRgsYUhPLl%2B1fnpL75RFijHCNSVyHWbkPkMDBF4K62seYqb1kL2DKNdjXXJ8G0roHEtQHCJkyVB%2BO7AvxLPdbMfkRWGHxf9UVWZGNTw9%2BUHgPGzIKv7etc1kHouviRQF0lqztwKQXJjColNTEBjqkAeybiYhJI%2FMOuhW4%2BKI18kVxsSA6HRVv3XBbX1NZeOoZr9JxDSKTIzmoT5c8BDc9Xe9l2L%2BS6EhwiKKqJmhkFkB1V69%2FIyOgR9isEMxfA7gOg90QAjxe6oFWTsAi%2Fwt%2B8A7mKnKitkP0hMfeDnYXER2vu4TuxCeEArnCLfyKk86pGeuLAJZ3Y9%2FDlK3kYa%2F%2FaYU9aXVgVz1rRFi%2BxMulFgefgZIE&X-Amz-Signature=40eec1bfec465f83aa557739dd3ab3b4ed98ceaa8c197df83110977a061a76d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFA2HGTA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIHM%2FTlTmDsvE2BQj7ti1wtcdC8LdekfBrKoz2WVzUbAGAiAWqS2tok0lD56QcneTJRAe1sjI8eqHiEKfw8OmdjUGjSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMarGXBjIvAb8czkk2KtwDe8TCe3HPBJ6%2BrHwrAYHF0cji9XMX6DqvapR8D2vVKCxefRrOx9njuasANP52f7J9%2F%2BohtYWWEvhw2h5WvxCemTgSSXPYUJImmyQlXZZp595A%2Bd4GNOVS7nmeHIVtA%2FQABscuXiNpOxmiVmh5DhUbURyekV4OneLFcZcIUfDHCJIcVSwakbMsyiGyd4QvT8bxB4f8jaA%2BmkqLDXexV%2BfNMJR4dvG3DfOs35Ju192S%2FyN1U7UC5RF4irL5fuGHa5r4XUwVD06XA1d9jcC4pBEvDpoZyWSXy%2BayKFfi0gjuRpf7aXxRya6AUZINOse1TQhKgVUDlhmllKI7TTEwFW%2BhJbqoPjzfbalKC85d2npcsg2ScRMm%2FUy26qIZFD9nBpPid7FYDKflNtFuEQVLOktXoEfh8FKm2dsM208pgEUpxoS0zD%2F6HOETH8WbiK3diItLtVMzvTGPSwdZDHwyrUDrvWm6%2BSNsOhUHq7EFMkC1G8CWoChRKNH7cwvU%2FYjbuvTJdcv2Q3H9ipLSqHJNIPFpz9T%2FmGlreew9ejQ%2F7Gz2vwcNYKZCG2DVHTTc06WUmIgy3WwojhRPkQRnqEVWUTBiBNohEaejkPbGTA1cWmX5ujPGbUyC9uXbw29vS%2Bsw9pPUxAY6pgF1sSK3x7pFKY%2BQhnY7Cb9ndAeABWDBvaQXdnHPyt1Fk8s0n3ldeKxBgZDvCr5Lb3wKFbUGhEYSTFRXfO8VV5SE1oP1Io7Nna1fvuFH5HJgkkSpY5mBU0gzuilRSksWdB%2BzPveJKuHCM2T4xF%2BQugIky19SWd%2BmnH3dh5uhy7qFrI71duQd0UzA77Xx3Ho450W2nTJ4SQ3fQfTNlRSYMDsqshLP%2FStb&X-Amz-Signature=60e93791939986bb6586a8a5f16f2d99aa8ec97068ee9c0a82e5306a38f524dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS6W4CFY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIB3Ks6awtU2NczJ4JtqHkry2Zu5dd0HQUZcdriSckD5nAiEA8N94cDmkIq8T7Xk4iUumbDYfsJyDeThPSR01O%2Blc2ZcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbzPFvzT082%2BzqD7SrcA%2FKtbM9GW0VWZa%2Fm97%2FY4BEZ8YhyP%2BjREDcHmyltXWB78cS7YdnUPYyIXreKnKlqs%2B4cLdZqheFzcCM6nJpavPMtUH9iXg6cuXbsQorjpTrv2XB4f48KO0bKOYRMWg5mU2dZgOB2qCi54WBfwQhkwWCGGqCZ%2FpKWG5uzikc83Pc1k%2BUujUQd401HagMmi5m%2Bd2DFlCgwvwS0VYd42Mtbal77%2B27sJWD7i2bWBq1UqUw067jPXaceza4LwrS3q8JVmTmgB0WYc%2BV8yhiOTtLPomd3MeGQF6l5Uf2ElMlpvJX4HN482ANahthHfwolVBA%2Fip7PmfljBExkACbw%2FuGU6QEiBOCN0%2BsLl0xn%2BNkRmlVwx35v49ukMSwwA1bV%2BKXg3vUgN77f3%2FXRmTWsq9iVhbh547TS2Y9UHOstG4g%2FCNIh%2Bfqa5P3FekuWOdFhGV3f9t1owb8CrosI8revCYYQuJIr3bEFh0862G8VKQq5bOOqQQEmYGUfMil3xbtzbQPuD47Ri%2FpTA7cMES4B9TNZq0%2FZVAM1%2FFZEMKK90voVVAaeEohw59TqdC3M26beqye%2B%2BBG%2FGqoQMhXM8tROlqSPhYbeLD8PQhgxkBsO27id6abvd4TwrlVlV7%2BEefNMMPaU1MQGOqUBEkOnr5uSVBNxauNjLhRLYmnfah2rkWgOvh6cYeiu8yPpveynbwcOEZzLPd1reJzdURRNy2d7265lrK7ZbKN0Z8Y9h7FYN8LktjpnIGWt4c6xxvhGGtKfRr%2FS9%2FKI0rfsPwHPAcWaSFYYDlo5TxDn1VobAThf8YM%2FOW6Ph4tsHZRRepIJt8bLIKrEYC3JzZhYBC5SRXCvqcc0HWp7DpeiXU%2BNm1g4&X-Amz-Signature=6fdc7fe2c5f50ef25eba48f0dcb55a34adb99131fba4674173df5da885177540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS6W4CFY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIB3Ks6awtU2NczJ4JtqHkry2Zu5dd0HQUZcdriSckD5nAiEA8N94cDmkIq8T7Xk4iUumbDYfsJyDeThPSR01O%2Blc2ZcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbzPFvzT082%2BzqD7SrcA%2FKtbM9GW0VWZa%2Fm97%2FY4BEZ8YhyP%2BjREDcHmyltXWB78cS7YdnUPYyIXreKnKlqs%2B4cLdZqheFzcCM6nJpavPMtUH9iXg6cuXbsQorjpTrv2XB4f48KO0bKOYRMWg5mU2dZgOB2qCi54WBfwQhkwWCGGqCZ%2FpKWG5uzikc83Pc1k%2BUujUQd401HagMmi5m%2Bd2DFlCgwvwS0VYd42Mtbal77%2B27sJWD7i2bWBq1UqUw067jPXaceza4LwrS3q8JVmTmgB0WYc%2BV8yhiOTtLPomd3MeGQF6l5Uf2ElMlpvJX4HN482ANahthHfwolVBA%2Fip7PmfljBExkACbw%2FuGU6QEiBOCN0%2BsLl0xn%2BNkRmlVwx35v49ukMSwwA1bV%2BKXg3vUgN77f3%2FXRmTWsq9iVhbh547TS2Y9UHOstG4g%2FCNIh%2Bfqa5P3FekuWOdFhGV3f9t1owb8CrosI8revCYYQuJIr3bEFh0862G8VKQq5bOOqQQEmYGUfMil3xbtzbQPuD47Ri%2FpTA7cMES4B9TNZq0%2FZVAM1%2FFZEMKK90voVVAaeEohw59TqdC3M26beqye%2B%2BBG%2FGqoQMhXM8tROlqSPhYbeLD8PQhgxkBsO27id6abvd4TwrlVlV7%2BEefNMMPaU1MQGOqUBEkOnr5uSVBNxauNjLhRLYmnfah2rkWgOvh6cYeiu8yPpveynbwcOEZzLPd1reJzdURRNy2d7265lrK7ZbKN0Z8Y9h7FYN8LktjpnIGWt4c6xxvhGGtKfRr%2FS9%2FKI0rfsPwHPAcWaSFYYDlo5TxDn1VobAThf8YM%2FOW6Ph4tsHZRRepIJt8bLIKrEYC3JzZhYBC5SRXCvqcc0HWp7DpeiXU%2BNm1g4&X-Amz-Signature=40f392a5dbd3f080d902369804e97e16e51972f0d4f4152ba331deef60c8655e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRDNGM65%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCv5P6Ok1tEdmxZIVunxIVaFk2Qdnce5P24JkqCmRUxFAIgUD1QZTHDsVlgFC%2FUgJQFiO3cxqwkdZ51pERmPfjW2GAqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeCeWzOQIj7epu31yrcA1Gx5sI7Qai5AgUaESiP5zk%2F23VM3oKs10QxBbOpU600aImUbobkAsUbAhQQCwXsL5jQ8qcwTrMbFxAsJOvt%2B2LEldk8Mw6%2FzWcDZTzRNA9DzyDftHlw7PuA2rrUSde1znGWhTtYvrXDrEsnsUiKN%2Fi73LpgQEkSbOj9cUY3frMAat9hNWFdbnJzJOzv3OAB5kP%2BtWYcVhZBWxWvtn7gUJc%2BwKAmn53CynNeVubPIWO0LaRJDS0xuytU1zhffSKZwD2bvixEA9qqia0%2BMkmIqqmDYjsoA%2F8CpJ6i0rAH8y6I70aXfjZ7UpwSY0aDcBJDRlSaN1JZ6imPC1wzIbzkQNfYch4dYWEJ1gR02Zm7H9i%2BgoDKFBWpZcoHHjvbtqnjYrT3NV7bKjq2bh54AC31Ws3k2EZdiCTIRa6LMSQr7uobrL8oc9Tku4K%2Fji%2F0IqChrIWB4yoeuaun48snsGXrAZS4cxRzT%2B1tEhvRS4gh5sUOQjH7IpzMH4%2FQh4nMeli3RzWJ9PzL719sAJYcHz187vhT98F77Vyw3iQKNw1c5qsCD94%2F%2BQ%2BJsr8qsbtx2Vg5yl11yELt4qbZDReghLIZslcTn2vvvFKWtxibmQPoDayBUmFQItaQW00FOMdVMNOU1MQGOqUBixpWMO2n%2FerR5OmMJJKytCtLLNG7dPThz80iMNpGtFIe8DkDDMqJvYIJ0fLKggmkyU6vPQTTQ729TspS62QgfCuQiGBkddWA5FdZr4Q9wuyW0A1ZpI8T%2FiLMekgw6EmCxb8cmlpo0TjKT%2BIi8Yla1mLVS6U2qw6aw%2Faf8RuFoATQnJPLeYbZpfTS5Dwi2UKN67nWXUB6cTFPJ6Z%2FG0Z4e3FoaLAV&X-Amz-Signature=49965266771ecf4ff99b1fa30124720d9d3db6f44b47f2470a1bf1421569eb03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRDNGM65%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCv5P6Ok1tEdmxZIVunxIVaFk2Qdnce5P24JkqCmRUxFAIgUD1QZTHDsVlgFC%2FUgJQFiO3cxqwkdZ51pERmPfjW2GAqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeCeWzOQIj7epu31yrcA1Gx5sI7Qai5AgUaESiP5zk%2F23VM3oKs10QxBbOpU600aImUbobkAsUbAhQQCwXsL5jQ8qcwTrMbFxAsJOvt%2B2LEldk8Mw6%2FzWcDZTzRNA9DzyDftHlw7PuA2rrUSde1znGWhTtYvrXDrEsnsUiKN%2Fi73LpgQEkSbOj9cUY3frMAat9hNWFdbnJzJOzv3OAB5kP%2BtWYcVhZBWxWvtn7gUJc%2BwKAmn53CynNeVubPIWO0LaRJDS0xuytU1zhffSKZwD2bvixEA9qqia0%2BMkmIqqmDYjsoA%2F8CpJ6i0rAH8y6I70aXfjZ7UpwSY0aDcBJDRlSaN1JZ6imPC1wzIbzkQNfYch4dYWEJ1gR02Zm7H9i%2BgoDKFBWpZcoHHjvbtqnjYrT3NV7bKjq2bh54AC31Ws3k2EZdiCTIRa6LMSQr7uobrL8oc9Tku4K%2Fji%2F0IqChrIWB4yoeuaun48snsGXrAZS4cxRzT%2B1tEhvRS4gh5sUOQjH7IpzMH4%2FQh4nMeli3RzWJ9PzL719sAJYcHz187vhT98F77Vyw3iQKNw1c5qsCD94%2F%2BQ%2BJsr8qsbtx2Vg5yl11yELt4qbZDReghLIZslcTn2vvvFKWtxibmQPoDayBUmFQItaQW00FOMdVMNOU1MQGOqUBixpWMO2n%2FerR5OmMJJKytCtLLNG7dPThz80iMNpGtFIe8DkDDMqJvYIJ0fLKggmkyU6vPQTTQ729TspS62QgfCuQiGBkddWA5FdZr4Q9wuyW0A1ZpI8T%2FiLMekgw6EmCxb8cmlpo0TjKT%2BIi8Yla1mLVS6U2qw6aw%2Faf8RuFoATQnJPLeYbZpfTS5Dwi2UKN67nWXUB6cTFPJ6Z%2FG0Z4e3FoaLAV&X-Amz-Signature=3ca7d08d09f5c60bca1206cf53dbc269593dc68ceb3ed984a1b762c6233d6fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRDNGM65%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCv5P6Ok1tEdmxZIVunxIVaFk2Qdnce5P24JkqCmRUxFAIgUD1QZTHDsVlgFC%2FUgJQFiO3cxqwkdZ51pERmPfjW2GAqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeCeWzOQIj7epu31yrcA1Gx5sI7Qai5AgUaESiP5zk%2F23VM3oKs10QxBbOpU600aImUbobkAsUbAhQQCwXsL5jQ8qcwTrMbFxAsJOvt%2B2LEldk8Mw6%2FzWcDZTzRNA9DzyDftHlw7PuA2rrUSde1znGWhTtYvrXDrEsnsUiKN%2Fi73LpgQEkSbOj9cUY3frMAat9hNWFdbnJzJOzv3OAB5kP%2BtWYcVhZBWxWvtn7gUJc%2BwKAmn53CynNeVubPIWO0LaRJDS0xuytU1zhffSKZwD2bvixEA9qqia0%2BMkmIqqmDYjsoA%2F8CpJ6i0rAH8y6I70aXfjZ7UpwSY0aDcBJDRlSaN1JZ6imPC1wzIbzkQNfYch4dYWEJ1gR02Zm7H9i%2BgoDKFBWpZcoHHjvbtqnjYrT3NV7bKjq2bh54AC31Ws3k2EZdiCTIRa6LMSQr7uobrL8oc9Tku4K%2Fji%2F0IqChrIWB4yoeuaun48snsGXrAZS4cxRzT%2B1tEhvRS4gh5sUOQjH7IpzMH4%2FQh4nMeli3RzWJ9PzL719sAJYcHz187vhT98F77Vyw3iQKNw1c5qsCD94%2F%2BQ%2BJsr8qsbtx2Vg5yl11yELt4qbZDReghLIZslcTn2vvvFKWtxibmQPoDayBUmFQItaQW00FOMdVMNOU1MQGOqUBixpWMO2n%2FerR5OmMJJKytCtLLNG7dPThz80iMNpGtFIe8DkDDMqJvYIJ0fLKggmkyU6vPQTTQ729TspS62QgfCuQiGBkddWA5FdZr4Q9wuyW0A1ZpI8T%2FiLMekgw6EmCxb8cmlpo0TjKT%2BIi8Yla1mLVS6U2qw6aw%2Faf8RuFoATQnJPLeYbZpfTS5Dwi2UKN67nWXUB6cTFPJ6Z%2FG0Z4e3FoaLAV&X-Amz-Signature=736518ae45f3761afd4c5cbe37c42c2a362ac907da45e47a4ce73adf892304a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRDNGM65%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCv5P6Ok1tEdmxZIVunxIVaFk2Qdnce5P24JkqCmRUxFAIgUD1QZTHDsVlgFC%2FUgJQFiO3cxqwkdZ51pERmPfjW2GAqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeCeWzOQIj7epu31yrcA1Gx5sI7Qai5AgUaESiP5zk%2F23VM3oKs10QxBbOpU600aImUbobkAsUbAhQQCwXsL5jQ8qcwTrMbFxAsJOvt%2B2LEldk8Mw6%2FzWcDZTzRNA9DzyDftHlw7PuA2rrUSde1znGWhTtYvrXDrEsnsUiKN%2Fi73LpgQEkSbOj9cUY3frMAat9hNWFdbnJzJOzv3OAB5kP%2BtWYcVhZBWxWvtn7gUJc%2BwKAmn53CynNeVubPIWO0LaRJDS0xuytU1zhffSKZwD2bvixEA9qqia0%2BMkmIqqmDYjsoA%2F8CpJ6i0rAH8y6I70aXfjZ7UpwSY0aDcBJDRlSaN1JZ6imPC1wzIbzkQNfYch4dYWEJ1gR02Zm7H9i%2BgoDKFBWpZcoHHjvbtqnjYrT3NV7bKjq2bh54AC31Ws3k2EZdiCTIRa6LMSQr7uobrL8oc9Tku4K%2Fji%2F0IqChrIWB4yoeuaun48snsGXrAZS4cxRzT%2B1tEhvRS4gh5sUOQjH7IpzMH4%2FQh4nMeli3RzWJ9PzL719sAJYcHz187vhT98F77Vyw3iQKNw1c5qsCD94%2F%2BQ%2BJsr8qsbtx2Vg5yl11yELt4qbZDReghLIZslcTn2vvvFKWtxibmQPoDayBUmFQItaQW00FOMdVMNOU1MQGOqUBixpWMO2n%2FerR5OmMJJKytCtLLNG7dPThz80iMNpGtFIe8DkDDMqJvYIJ0fLKggmkyU6vPQTTQ729TspS62QgfCuQiGBkddWA5FdZr4Q9wuyW0A1ZpI8T%2FiLMekgw6EmCxb8cmlpo0TjKT%2BIi8Yla1mLVS6U2qw6aw%2Faf8RuFoATQnJPLeYbZpfTS5Dwi2UKN67nWXUB6cTFPJ6Z%2FG0Z4e3FoaLAV&X-Amz-Signature=8c6e8426fbd903814131b56c955738ba28d79838cf874df79ed82a160ecd7fd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRDNGM65%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCv5P6Ok1tEdmxZIVunxIVaFk2Qdnce5P24JkqCmRUxFAIgUD1QZTHDsVlgFC%2FUgJQFiO3cxqwkdZ51pERmPfjW2GAqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeCeWzOQIj7epu31yrcA1Gx5sI7Qai5AgUaESiP5zk%2F23VM3oKs10QxBbOpU600aImUbobkAsUbAhQQCwXsL5jQ8qcwTrMbFxAsJOvt%2B2LEldk8Mw6%2FzWcDZTzRNA9DzyDftHlw7PuA2rrUSde1znGWhTtYvrXDrEsnsUiKN%2Fi73LpgQEkSbOj9cUY3frMAat9hNWFdbnJzJOzv3OAB5kP%2BtWYcVhZBWxWvtn7gUJc%2BwKAmn53CynNeVubPIWO0LaRJDS0xuytU1zhffSKZwD2bvixEA9qqia0%2BMkmIqqmDYjsoA%2F8CpJ6i0rAH8y6I70aXfjZ7UpwSY0aDcBJDRlSaN1JZ6imPC1wzIbzkQNfYch4dYWEJ1gR02Zm7H9i%2BgoDKFBWpZcoHHjvbtqnjYrT3NV7bKjq2bh54AC31Ws3k2EZdiCTIRa6LMSQr7uobrL8oc9Tku4K%2Fji%2F0IqChrIWB4yoeuaun48snsGXrAZS4cxRzT%2B1tEhvRS4gh5sUOQjH7IpzMH4%2FQh4nMeli3RzWJ9PzL719sAJYcHz187vhT98F77Vyw3iQKNw1c5qsCD94%2F%2BQ%2BJsr8qsbtx2Vg5yl11yELt4qbZDReghLIZslcTn2vvvFKWtxibmQPoDayBUmFQItaQW00FOMdVMNOU1MQGOqUBixpWMO2n%2FerR5OmMJJKytCtLLNG7dPThz80iMNpGtFIe8DkDDMqJvYIJ0fLKggmkyU6vPQTTQ729TspS62QgfCuQiGBkddWA5FdZr4Q9wuyW0A1ZpI8T%2FiLMekgw6EmCxb8cmlpo0TjKT%2BIi8Yla1mLVS6U2qw6aw%2Faf8RuFoATQnJPLeYbZpfTS5Dwi2UKN67nWXUB6cTFPJ6Z%2FG0Z4e3FoaLAV&X-Amz-Signature=c3b0d244593a8811773d73c99c8e9a8ae9bfeea0fb8b1aa1cee395183fadead5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRDNGM65%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCv5P6Ok1tEdmxZIVunxIVaFk2Qdnce5P24JkqCmRUxFAIgUD1QZTHDsVlgFC%2FUgJQFiO3cxqwkdZ51pERmPfjW2GAqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeCeWzOQIj7epu31yrcA1Gx5sI7Qai5AgUaESiP5zk%2F23VM3oKs10QxBbOpU600aImUbobkAsUbAhQQCwXsL5jQ8qcwTrMbFxAsJOvt%2B2LEldk8Mw6%2FzWcDZTzRNA9DzyDftHlw7PuA2rrUSde1znGWhTtYvrXDrEsnsUiKN%2Fi73LpgQEkSbOj9cUY3frMAat9hNWFdbnJzJOzv3OAB5kP%2BtWYcVhZBWxWvtn7gUJc%2BwKAmn53CynNeVubPIWO0LaRJDS0xuytU1zhffSKZwD2bvixEA9qqia0%2BMkmIqqmDYjsoA%2F8CpJ6i0rAH8y6I70aXfjZ7UpwSY0aDcBJDRlSaN1JZ6imPC1wzIbzkQNfYch4dYWEJ1gR02Zm7H9i%2BgoDKFBWpZcoHHjvbtqnjYrT3NV7bKjq2bh54AC31Ws3k2EZdiCTIRa6LMSQr7uobrL8oc9Tku4K%2Fji%2F0IqChrIWB4yoeuaun48snsGXrAZS4cxRzT%2B1tEhvRS4gh5sUOQjH7IpzMH4%2FQh4nMeli3RzWJ9PzL719sAJYcHz187vhT98F77Vyw3iQKNw1c5qsCD94%2F%2BQ%2BJsr8qsbtx2Vg5yl11yELt4qbZDReghLIZslcTn2vvvFKWtxibmQPoDayBUmFQItaQW00FOMdVMNOU1MQGOqUBixpWMO2n%2FerR5OmMJJKytCtLLNG7dPThz80iMNpGtFIe8DkDDMqJvYIJ0fLKggmkyU6vPQTTQ729TspS62QgfCuQiGBkddWA5FdZr4Q9wuyW0A1ZpI8T%2FiLMekgw6EmCxb8cmlpo0TjKT%2BIi8Yla1mLVS6U2qw6aw%2Faf8RuFoATQnJPLeYbZpfTS5Dwi2UKN67nWXUB6cTFPJ6Z%2FG0Z4e3FoaLAV&X-Amz-Signature=88ca3f27c63272d47c2cefad2a1138e86f4fb070ad3fbde8468bd219a6d48829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRDNGM65%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCv5P6Ok1tEdmxZIVunxIVaFk2Qdnce5P24JkqCmRUxFAIgUD1QZTHDsVlgFC%2FUgJQFiO3cxqwkdZ51pERmPfjW2GAqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeCeWzOQIj7epu31yrcA1Gx5sI7Qai5AgUaESiP5zk%2F23VM3oKs10QxBbOpU600aImUbobkAsUbAhQQCwXsL5jQ8qcwTrMbFxAsJOvt%2B2LEldk8Mw6%2FzWcDZTzRNA9DzyDftHlw7PuA2rrUSde1znGWhTtYvrXDrEsnsUiKN%2Fi73LpgQEkSbOj9cUY3frMAat9hNWFdbnJzJOzv3OAB5kP%2BtWYcVhZBWxWvtn7gUJc%2BwKAmn53CynNeVubPIWO0LaRJDS0xuytU1zhffSKZwD2bvixEA9qqia0%2BMkmIqqmDYjsoA%2F8CpJ6i0rAH8y6I70aXfjZ7UpwSY0aDcBJDRlSaN1JZ6imPC1wzIbzkQNfYch4dYWEJ1gR02Zm7H9i%2BgoDKFBWpZcoHHjvbtqnjYrT3NV7bKjq2bh54AC31Ws3k2EZdiCTIRa6LMSQr7uobrL8oc9Tku4K%2Fji%2F0IqChrIWB4yoeuaun48snsGXrAZS4cxRzT%2B1tEhvRS4gh5sUOQjH7IpzMH4%2FQh4nMeli3RzWJ9PzL719sAJYcHz187vhT98F77Vyw3iQKNw1c5qsCD94%2F%2BQ%2BJsr8qsbtx2Vg5yl11yELt4qbZDReghLIZslcTn2vvvFKWtxibmQPoDayBUmFQItaQW00FOMdVMNOU1MQGOqUBixpWMO2n%2FerR5OmMJJKytCtLLNG7dPThz80iMNpGtFIe8DkDDMqJvYIJ0fLKggmkyU6vPQTTQ729TspS62QgfCuQiGBkddWA5FdZr4Q9wuyW0A1ZpI8T%2FiLMekgw6EmCxb8cmlpo0TjKT%2BIi8Yla1mLVS6U2qw6aw%2Faf8RuFoATQnJPLeYbZpfTS5Dwi2UKN67nWXUB6cTFPJ6Z%2FG0Z4e3FoaLAV&X-Amz-Signature=28b03977b154710a69a40237594dd4c0649988d7abbf3a79b71723bb67685d23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRDNGM65%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCv5P6Ok1tEdmxZIVunxIVaFk2Qdnce5P24JkqCmRUxFAIgUD1QZTHDsVlgFC%2FUgJQFiO3cxqwkdZ51pERmPfjW2GAqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeCeWzOQIj7epu31yrcA1Gx5sI7Qai5AgUaESiP5zk%2F23VM3oKs10QxBbOpU600aImUbobkAsUbAhQQCwXsL5jQ8qcwTrMbFxAsJOvt%2B2LEldk8Mw6%2FzWcDZTzRNA9DzyDftHlw7PuA2rrUSde1znGWhTtYvrXDrEsnsUiKN%2Fi73LpgQEkSbOj9cUY3frMAat9hNWFdbnJzJOzv3OAB5kP%2BtWYcVhZBWxWvtn7gUJc%2BwKAmn53CynNeVubPIWO0LaRJDS0xuytU1zhffSKZwD2bvixEA9qqia0%2BMkmIqqmDYjsoA%2F8CpJ6i0rAH8y6I70aXfjZ7UpwSY0aDcBJDRlSaN1JZ6imPC1wzIbzkQNfYch4dYWEJ1gR02Zm7H9i%2BgoDKFBWpZcoHHjvbtqnjYrT3NV7bKjq2bh54AC31Ws3k2EZdiCTIRa6LMSQr7uobrL8oc9Tku4K%2Fji%2F0IqChrIWB4yoeuaun48snsGXrAZS4cxRzT%2B1tEhvRS4gh5sUOQjH7IpzMH4%2FQh4nMeli3RzWJ9PzL719sAJYcHz187vhT98F77Vyw3iQKNw1c5qsCD94%2F%2BQ%2BJsr8qsbtx2Vg5yl11yELt4qbZDReghLIZslcTn2vvvFKWtxibmQPoDayBUmFQItaQW00FOMdVMNOU1MQGOqUBixpWMO2n%2FerR5OmMJJKytCtLLNG7dPThz80iMNpGtFIe8DkDDMqJvYIJ0fLKggmkyU6vPQTTQ729TspS62QgfCuQiGBkddWA5FdZr4Q9wuyW0A1ZpI8T%2FiLMekgw6EmCxb8cmlpo0TjKT%2BIi8Yla1mLVS6U2qw6aw%2Faf8RuFoATQnJPLeYbZpfTS5Dwi2UKN67nWXUB6cTFPJ6Z%2FG0Z4e3FoaLAV&X-Amz-Signature=bab5c3ceb276727bf4ece063b2832e4b888f62600fca7446d34d2d0dc9c99d62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRDNGM65%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCv5P6Ok1tEdmxZIVunxIVaFk2Qdnce5P24JkqCmRUxFAIgUD1QZTHDsVlgFC%2FUgJQFiO3cxqwkdZ51pERmPfjW2GAqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeCeWzOQIj7epu31yrcA1Gx5sI7Qai5AgUaESiP5zk%2F23VM3oKs10QxBbOpU600aImUbobkAsUbAhQQCwXsL5jQ8qcwTrMbFxAsJOvt%2B2LEldk8Mw6%2FzWcDZTzRNA9DzyDftHlw7PuA2rrUSde1znGWhTtYvrXDrEsnsUiKN%2Fi73LpgQEkSbOj9cUY3frMAat9hNWFdbnJzJOzv3OAB5kP%2BtWYcVhZBWxWvtn7gUJc%2BwKAmn53CynNeVubPIWO0LaRJDS0xuytU1zhffSKZwD2bvixEA9qqia0%2BMkmIqqmDYjsoA%2F8CpJ6i0rAH8y6I70aXfjZ7UpwSY0aDcBJDRlSaN1JZ6imPC1wzIbzkQNfYch4dYWEJ1gR02Zm7H9i%2BgoDKFBWpZcoHHjvbtqnjYrT3NV7bKjq2bh54AC31Ws3k2EZdiCTIRa6LMSQr7uobrL8oc9Tku4K%2Fji%2F0IqChrIWB4yoeuaun48snsGXrAZS4cxRzT%2B1tEhvRS4gh5sUOQjH7IpzMH4%2FQh4nMeli3RzWJ9PzL719sAJYcHz187vhT98F77Vyw3iQKNw1c5qsCD94%2F%2BQ%2BJsr8qsbtx2Vg5yl11yELt4qbZDReghLIZslcTn2vvvFKWtxibmQPoDayBUmFQItaQW00FOMdVMNOU1MQGOqUBixpWMO2n%2FerR5OmMJJKytCtLLNG7dPThz80iMNpGtFIe8DkDDMqJvYIJ0fLKggmkyU6vPQTTQ729TspS62QgfCuQiGBkddWA5FdZr4Q9wuyW0A1ZpI8T%2FiLMekgw6EmCxb8cmlpo0TjKT%2BIi8Yla1mLVS6U2qw6aw%2Faf8RuFoATQnJPLeYbZpfTS5Dwi2UKN67nWXUB6cTFPJ6Z%2FG0Z4e3FoaLAV&X-Amz-Signature=21a10828de0731ddc25f918227c145f1a4eb428bbac5c07b10ceb34c8922b8de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRDNGM65%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCv5P6Ok1tEdmxZIVunxIVaFk2Qdnce5P24JkqCmRUxFAIgUD1QZTHDsVlgFC%2FUgJQFiO3cxqwkdZ51pERmPfjW2GAqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeCeWzOQIj7epu31yrcA1Gx5sI7Qai5AgUaESiP5zk%2F23VM3oKs10QxBbOpU600aImUbobkAsUbAhQQCwXsL5jQ8qcwTrMbFxAsJOvt%2B2LEldk8Mw6%2FzWcDZTzRNA9DzyDftHlw7PuA2rrUSde1znGWhTtYvrXDrEsnsUiKN%2Fi73LpgQEkSbOj9cUY3frMAat9hNWFdbnJzJOzv3OAB5kP%2BtWYcVhZBWxWvtn7gUJc%2BwKAmn53CynNeVubPIWO0LaRJDS0xuytU1zhffSKZwD2bvixEA9qqia0%2BMkmIqqmDYjsoA%2F8CpJ6i0rAH8y6I70aXfjZ7UpwSY0aDcBJDRlSaN1JZ6imPC1wzIbzkQNfYch4dYWEJ1gR02Zm7H9i%2BgoDKFBWpZcoHHjvbtqnjYrT3NV7bKjq2bh54AC31Ws3k2EZdiCTIRa6LMSQr7uobrL8oc9Tku4K%2Fji%2F0IqChrIWB4yoeuaun48snsGXrAZS4cxRzT%2B1tEhvRS4gh5sUOQjH7IpzMH4%2FQh4nMeli3RzWJ9PzL719sAJYcHz187vhT98F77Vyw3iQKNw1c5qsCD94%2F%2BQ%2BJsr8qsbtx2Vg5yl11yELt4qbZDReghLIZslcTn2vvvFKWtxibmQPoDayBUmFQItaQW00FOMdVMNOU1MQGOqUBixpWMO2n%2FerR5OmMJJKytCtLLNG7dPThz80iMNpGtFIe8DkDDMqJvYIJ0fLKggmkyU6vPQTTQ729TspS62QgfCuQiGBkddWA5FdZr4Q9wuyW0A1ZpI8T%2FiLMekgw6EmCxb8cmlpo0TjKT%2BIi8Yla1mLVS6U2qw6aw%2Faf8RuFoATQnJPLeYbZpfTS5Dwi2UKN67nWXUB6cTFPJ6Z%2FG0Z4e3FoaLAV&X-Amz-Signature=e61983d072af8a82301df28024982642a14c67392a7d930d0b962df149bf842b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
