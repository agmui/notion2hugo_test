---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-28T21:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-28T21:43:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MRKFIFE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F3hL9rNdZ2ni76bUR07Qho2x6tAuoloTsyrco01RTuQIgZns1W%2F2LAwqZp95Q51dRD0lxhi%2B7Kxg%2BdTj13O7dq6oqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNX2CqqfjmDQsFSUxyrcA5oMNxp88ABVJCdtjK8TL%2BNHw0U4t2h4jod0VyzAinSci9jNn67SIKU5PuEt7cKT6YvGxJQh5HnjqpSZYvnjZ4KLo1tioWZLEfWw2poYcPuJY9G60BKxTm9AWBBpN028QCH8YMBK9GZ0EML453nX%2FXLc3Sj2mwFMHtbo864PcaLQ%2B13Zvtp4I%2B%2BaHQPiEOKh9I2RogtWRNBxjBiX91a66jqxkSzi3PWsBfzbSt0rKfwj%2B2Yd6T6OTVD%2Be57lXihYo52Q6OKhyRYVNyMl1nlS36A7gClnwgoFG%2B8RLMbNImuiK%2BLILTPufpPl%2Bq5TGJxNrk4uJVl4lgvoE7Lqi8E5cAQWm8Rgqa5f9OGTQHnl2ZdDnIxAhncI7k7Wjf84fycfDAetzqxLE0nHMeECjXxSKj5Z3%2BQuDjFd4PGvjzMdR6IAirmvmaP48XcHSDfIOODAiCrAty0A%2BYHHhp6u9yr2Yoxi1MJ7OrzUHUlFqFIlVEPAK5SNnqNtnGzNRzjq3yk5mgfg%2FIRfoyUh9OgmXlaYR0EFvoJIOoytkHHZf8lmdr1uGFlWxfGihy9E1xDyYXo15gR11OrU89xcHlVit7V6m6SSgma0MRbA4ZwjPG3byqd5Z1sF5ssX5IT6RxweMNGupMQGOqUBTaek%2B9FKStoeP2WmFPJ%2B2lQXYx6sv2KiBfy6S6CMifYIgJriOKpeOpfhdBFcTkKGiZfMaQU3sgm%2FKwRJx0tjXCtI5Nu3A4%2BI6O%2B%2Byhcp1jcAQh6t5%2BU7G7MTx0UJSr3q4Lm7b%2FG8%2FKntRme3pSzTs1ZbR9%2B0T248yIsXMwFh%2FT5uXxKFYCZnWZg%2B5mFI%2BimmAjc1%2FiGofb6OXygUNFXjV%2BxmXyUK&X-Amz-Signature=7a6e2b8e40bcc0d62ca27ecc4b6c0729f5d5d3153c92310bfb6c63a8a7b06a09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MRKFIFE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F3hL9rNdZ2ni76bUR07Qho2x6tAuoloTsyrco01RTuQIgZns1W%2F2LAwqZp95Q51dRD0lxhi%2B7Kxg%2BdTj13O7dq6oqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNX2CqqfjmDQsFSUxyrcA5oMNxp88ABVJCdtjK8TL%2BNHw0U4t2h4jod0VyzAinSci9jNn67SIKU5PuEt7cKT6YvGxJQh5HnjqpSZYvnjZ4KLo1tioWZLEfWw2poYcPuJY9G60BKxTm9AWBBpN028QCH8YMBK9GZ0EML453nX%2FXLc3Sj2mwFMHtbo864PcaLQ%2B13Zvtp4I%2B%2BaHQPiEOKh9I2RogtWRNBxjBiX91a66jqxkSzi3PWsBfzbSt0rKfwj%2B2Yd6T6OTVD%2Be57lXihYo52Q6OKhyRYVNyMl1nlS36A7gClnwgoFG%2B8RLMbNImuiK%2BLILTPufpPl%2Bq5TGJxNrk4uJVl4lgvoE7Lqi8E5cAQWm8Rgqa5f9OGTQHnl2ZdDnIxAhncI7k7Wjf84fycfDAetzqxLE0nHMeECjXxSKj5Z3%2BQuDjFd4PGvjzMdR6IAirmvmaP48XcHSDfIOODAiCrAty0A%2BYHHhp6u9yr2Yoxi1MJ7OrzUHUlFqFIlVEPAK5SNnqNtnGzNRzjq3yk5mgfg%2FIRfoyUh9OgmXlaYR0EFvoJIOoytkHHZf8lmdr1uGFlWxfGihy9E1xDyYXo15gR11OrU89xcHlVit7V6m6SSgma0MRbA4ZwjPG3byqd5Z1sF5ssX5IT6RxweMNGupMQGOqUBTaek%2B9FKStoeP2WmFPJ%2B2lQXYx6sv2KiBfy6S6CMifYIgJriOKpeOpfhdBFcTkKGiZfMaQU3sgm%2FKwRJx0tjXCtI5Nu3A4%2BI6O%2B%2Byhcp1jcAQh6t5%2BU7G7MTx0UJSr3q4Lm7b%2FG8%2FKntRme3pSzTs1ZbR9%2B0T248yIsXMwFh%2FT5uXxKFYCZnWZg%2B5mFI%2BimmAjc1%2FiGofb6OXygUNFXjV%2BxmXyUK&X-Amz-Signature=d60d8402097cb1ba2c465823cf80d77714e106c942d4c4e9abee379c8ad84d0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MRKFIFE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F3hL9rNdZ2ni76bUR07Qho2x6tAuoloTsyrco01RTuQIgZns1W%2F2LAwqZp95Q51dRD0lxhi%2B7Kxg%2BdTj13O7dq6oqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNX2CqqfjmDQsFSUxyrcA5oMNxp88ABVJCdtjK8TL%2BNHw0U4t2h4jod0VyzAinSci9jNn67SIKU5PuEt7cKT6YvGxJQh5HnjqpSZYvnjZ4KLo1tioWZLEfWw2poYcPuJY9G60BKxTm9AWBBpN028QCH8YMBK9GZ0EML453nX%2FXLc3Sj2mwFMHtbo864PcaLQ%2B13Zvtp4I%2B%2BaHQPiEOKh9I2RogtWRNBxjBiX91a66jqxkSzi3PWsBfzbSt0rKfwj%2B2Yd6T6OTVD%2Be57lXihYo52Q6OKhyRYVNyMl1nlS36A7gClnwgoFG%2B8RLMbNImuiK%2BLILTPufpPl%2Bq5TGJxNrk4uJVl4lgvoE7Lqi8E5cAQWm8Rgqa5f9OGTQHnl2ZdDnIxAhncI7k7Wjf84fycfDAetzqxLE0nHMeECjXxSKj5Z3%2BQuDjFd4PGvjzMdR6IAirmvmaP48XcHSDfIOODAiCrAty0A%2BYHHhp6u9yr2Yoxi1MJ7OrzUHUlFqFIlVEPAK5SNnqNtnGzNRzjq3yk5mgfg%2FIRfoyUh9OgmXlaYR0EFvoJIOoytkHHZf8lmdr1uGFlWxfGihy9E1xDyYXo15gR11OrU89xcHlVit7V6m6SSgma0MRbA4ZwjPG3byqd5Z1sF5ssX5IT6RxweMNGupMQGOqUBTaek%2B9FKStoeP2WmFPJ%2B2lQXYx6sv2KiBfy6S6CMifYIgJriOKpeOpfhdBFcTkKGiZfMaQU3sgm%2FKwRJx0tjXCtI5Nu3A4%2BI6O%2B%2Byhcp1jcAQh6t5%2BU7G7MTx0UJSr3q4Lm7b%2FG8%2FKntRme3pSzTs1ZbR9%2B0T248yIsXMwFh%2FT5uXxKFYCZnWZg%2B5mFI%2BimmAjc1%2FiGofb6OXygUNFXjV%2BxmXyUK&X-Amz-Signature=9000347664ed17b5b6f8bbd8f129629534f406a0b45dc2b13ed24395a571ed9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MRKFIFE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F3hL9rNdZ2ni76bUR07Qho2x6tAuoloTsyrco01RTuQIgZns1W%2F2LAwqZp95Q51dRD0lxhi%2B7Kxg%2BdTj13O7dq6oqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNX2CqqfjmDQsFSUxyrcA5oMNxp88ABVJCdtjK8TL%2BNHw0U4t2h4jod0VyzAinSci9jNn67SIKU5PuEt7cKT6YvGxJQh5HnjqpSZYvnjZ4KLo1tioWZLEfWw2poYcPuJY9G60BKxTm9AWBBpN028QCH8YMBK9GZ0EML453nX%2FXLc3Sj2mwFMHtbo864PcaLQ%2B13Zvtp4I%2B%2BaHQPiEOKh9I2RogtWRNBxjBiX91a66jqxkSzi3PWsBfzbSt0rKfwj%2B2Yd6T6OTVD%2Be57lXihYo52Q6OKhyRYVNyMl1nlS36A7gClnwgoFG%2B8RLMbNImuiK%2BLILTPufpPl%2Bq5TGJxNrk4uJVl4lgvoE7Lqi8E5cAQWm8Rgqa5f9OGTQHnl2ZdDnIxAhncI7k7Wjf84fycfDAetzqxLE0nHMeECjXxSKj5Z3%2BQuDjFd4PGvjzMdR6IAirmvmaP48XcHSDfIOODAiCrAty0A%2BYHHhp6u9yr2Yoxi1MJ7OrzUHUlFqFIlVEPAK5SNnqNtnGzNRzjq3yk5mgfg%2FIRfoyUh9OgmXlaYR0EFvoJIOoytkHHZf8lmdr1uGFlWxfGihy9E1xDyYXo15gR11OrU89xcHlVit7V6m6SSgma0MRbA4ZwjPG3byqd5Z1sF5ssX5IT6RxweMNGupMQGOqUBTaek%2B9FKStoeP2WmFPJ%2B2lQXYx6sv2KiBfy6S6CMifYIgJriOKpeOpfhdBFcTkKGiZfMaQU3sgm%2FKwRJx0tjXCtI5Nu3A4%2BI6O%2B%2Byhcp1jcAQh6t5%2BU7G7MTx0UJSr3q4Lm7b%2FG8%2FKntRme3pSzTs1ZbR9%2B0T248yIsXMwFh%2FT5uXxKFYCZnWZg%2B5mFI%2BimmAjc1%2FiGofb6OXygUNFXjV%2BxmXyUK&X-Amz-Signature=40c1041827f61a5590c2d4817f44ac40355e35e25f3f9b99fc4639af9f92aff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MRKFIFE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F3hL9rNdZ2ni76bUR07Qho2x6tAuoloTsyrco01RTuQIgZns1W%2F2LAwqZp95Q51dRD0lxhi%2B7Kxg%2BdTj13O7dq6oqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNX2CqqfjmDQsFSUxyrcA5oMNxp88ABVJCdtjK8TL%2BNHw0U4t2h4jod0VyzAinSci9jNn67SIKU5PuEt7cKT6YvGxJQh5HnjqpSZYvnjZ4KLo1tioWZLEfWw2poYcPuJY9G60BKxTm9AWBBpN028QCH8YMBK9GZ0EML453nX%2FXLc3Sj2mwFMHtbo864PcaLQ%2B13Zvtp4I%2B%2BaHQPiEOKh9I2RogtWRNBxjBiX91a66jqxkSzi3PWsBfzbSt0rKfwj%2B2Yd6T6OTVD%2Be57lXihYo52Q6OKhyRYVNyMl1nlS36A7gClnwgoFG%2B8RLMbNImuiK%2BLILTPufpPl%2Bq5TGJxNrk4uJVl4lgvoE7Lqi8E5cAQWm8Rgqa5f9OGTQHnl2ZdDnIxAhncI7k7Wjf84fycfDAetzqxLE0nHMeECjXxSKj5Z3%2BQuDjFd4PGvjzMdR6IAirmvmaP48XcHSDfIOODAiCrAty0A%2BYHHhp6u9yr2Yoxi1MJ7OrzUHUlFqFIlVEPAK5SNnqNtnGzNRzjq3yk5mgfg%2FIRfoyUh9OgmXlaYR0EFvoJIOoytkHHZf8lmdr1uGFlWxfGihy9E1xDyYXo15gR11OrU89xcHlVit7V6m6SSgma0MRbA4ZwjPG3byqd5Z1sF5ssX5IT6RxweMNGupMQGOqUBTaek%2B9FKStoeP2WmFPJ%2B2lQXYx6sv2KiBfy6S6CMifYIgJriOKpeOpfhdBFcTkKGiZfMaQU3sgm%2FKwRJx0tjXCtI5Nu3A4%2BI6O%2B%2Byhcp1jcAQh6t5%2BU7G7MTx0UJSr3q4Lm7b%2FG8%2FKntRme3pSzTs1ZbR9%2B0T248yIsXMwFh%2FT5uXxKFYCZnWZg%2B5mFI%2BimmAjc1%2FiGofb6OXygUNFXjV%2BxmXyUK&X-Amz-Signature=ef946e183380909c9edc13d93561492fef99dcb03d700e51b67235de39d94043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MRKFIFE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F3hL9rNdZ2ni76bUR07Qho2x6tAuoloTsyrco01RTuQIgZns1W%2F2LAwqZp95Q51dRD0lxhi%2B7Kxg%2BdTj13O7dq6oqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNX2CqqfjmDQsFSUxyrcA5oMNxp88ABVJCdtjK8TL%2BNHw0U4t2h4jod0VyzAinSci9jNn67SIKU5PuEt7cKT6YvGxJQh5HnjqpSZYvnjZ4KLo1tioWZLEfWw2poYcPuJY9G60BKxTm9AWBBpN028QCH8YMBK9GZ0EML453nX%2FXLc3Sj2mwFMHtbo864PcaLQ%2B13Zvtp4I%2B%2BaHQPiEOKh9I2RogtWRNBxjBiX91a66jqxkSzi3PWsBfzbSt0rKfwj%2B2Yd6T6OTVD%2Be57lXihYo52Q6OKhyRYVNyMl1nlS36A7gClnwgoFG%2B8RLMbNImuiK%2BLILTPufpPl%2Bq5TGJxNrk4uJVl4lgvoE7Lqi8E5cAQWm8Rgqa5f9OGTQHnl2ZdDnIxAhncI7k7Wjf84fycfDAetzqxLE0nHMeECjXxSKj5Z3%2BQuDjFd4PGvjzMdR6IAirmvmaP48XcHSDfIOODAiCrAty0A%2BYHHhp6u9yr2Yoxi1MJ7OrzUHUlFqFIlVEPAK5SNnqNtnGzNRzjq3yk5mgfg%2FIRfoyUh9OgmXlaYR0EFvoJIOoytkHHZf8lmdr1uGFlWxfGihy9E1xDyYXo15gR11OrU89xcHlVit7V6m6SSgma0MRbA4ZwjPG3byqd5Z1sF5ssX5IT6RxweMNGupMQGOqUBTaek%2B9FKStoeP2WmFPJ%2B2lQXYx6sv2KiBfy6S6CMifYIgJriOKpeOpfhdBFcTkKGiZfMaQU3sgm%2FKwRJx0tjXCtI5Nu3A4%2BI6O%2B%2Byhcp1jcAQh6t5%2BU7G7MTx0UJSr3q4Lm7b%2FG8%2FKntRme3pSzTs1ZbR9%2B0T248yIsXMwFh%2FT5uXxKFYCZnWZg%2B5mFI%2BimmAjc1%2FiGofb6OXygUNFXjV%2BxmXyUK&X-Amz-Signature=f3477d8d12f194d3345ce70e187c02518de3bb3815e611ae577b1a035edd6dff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MRKFIFE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F3hL9rNdZ2ni76bUR07Qho2x6tAuoloTsyrco01RTuQIgZns1W%2F2LAwqZp95Q51dRD0lxhi%2B7Kxg%2BdTj13O7dq6oqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNX2CqqfjmDQsFSUxyrcA5oMNxp88ABVJCdtjK8TL%2BNHw0U4t2h4jod0VyzAinSci9jNn67SIKU5PuEt7cKT6YvGxJQh5HnjqpSZYvnjZ4KLo1tioWZLEfWw2poYcPuJY9G60BKxTm9AWBBpN028QCH8YMBK9GZ0EML453nX%2FXLc3Sj2mwFMHtbo864PcaLQ%2B13Zvtp4I%2B%2BaHQPiEOKh9I2RogtWRNBxjBiX91a66jqxkSzi3PWsBfzbSt0rKfwj%2B2Yd6T6OTVD%2Be57lXihYo52Q6OKhyRYVNyMl1nlS36A7gClnwgoFG%2B8RLMbNImuiK%2BLILTPufpPl%2Bq5TGJxNrk4uJVl4lgvoE7Lqi8E5cAQWm8Rgqa5f9OGTQHnl2ZdDnIxAhncI7k7Wjf84fycfDAetzqxLE0nHMeECjXxSKj5Z3%2BQuDjFd4PGvjzMdR6IAirmvmaP48XcHSDfIOODAiCrAty0A%2BYHHhp6u9yr2Yoxi1MJ7OrzUHUlFqFIlVEPAK5SNnqNtnGzNRzjq3yk5mgfg%2FIRfoyUh9OgmXlaYR0EFvoJIOoytkHHZf8lmdr1uGFlWxfGihy9E1xDyYXo15gR11OrU89xcHlVit7V6m6SSgma0MRbA4ZwjPG3byqd5Z1sF5ssX5IT6RxweMNGupMQGOqUBTaek%2B9FKStoeP2WmFPJ%2B2lQXYx6sv2KiBfy6S6CMifYIgJriOKpeOpfhdBFcTkKGiZfMaQU3sgm%2FKwRJx0tjXCtI5Nu3A4%2BI6O%2B%2Byhcp1jcAQh6t5%2BU7G7MTx0UJSr3q4Lm7b%2FG8%2FKntRme3pSzTs1ZbR9%2B0T248yIsXMwFh%2FT5uXxKFYCZnWZg%2B5mFI%2BimmAjc1%2FiGofb6OXygUNFXjV%2BxmXyUK&X-Amz-Signature=e18f4137a63e4e8fee8528aaba5b4c70bf2121d80b8809765745072599c3f2cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MRKFIFE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F3hL9rNdZ2ni76bUR07Qho2x6tAuoloTsyrco01RTuQIgZns1W%2F2LAwqZp95Q51dRD0lxhi%2B7Kxg%2BdTj13O7dq6oqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNX2CqqfjmDQsFSUxyrcA5oMNxp88ABVJCdtjK8TL%2BNHw0U4t2h4jod0VyzAinSci9jNn67SIKU5PuEt7cKT6YvGxJQh5HnjqpSZYvnjZ4KLo1tioWZLEfWw2poYcPuJY9G60BKxTm9AWBBpN028QCH8YMBK9GZ0EML453nX%2FXLc3Sj2mwFMHtbo864PcaLQ%2B13Zvtp4I%2B%2BaHQPiEOKh9I2RogtWRNBxjBiX91a66jqxkSzi3PWsBfzbSt0rKfwj%2B2Yd6T6OTVD%2Be57lXihYo52Q6OKhyRYVNyMl1nlS36A7gClnwgoFG%2B8RLMbNImuiK%2BLILTPufpPl%2Bq5TGJxNrk4uJVl4lgvoE7Lqi8E5cAQWm8Rgqa5f9OGTQHnl2ZdDnIxAhncI7k7Wjf84fycfDAetzqxLE0nHMeECjXxSKj5Z3%2BQuDjFd4PGvjzMdR6IAirmvmaP48XcHSDfIOODAiCrAty0A%2BYHHhp6u9yr2Yoxi1MJ7OrzUHUlFqFIlVEPAK5SNnqNtnGzNRzjq3yk5mgfg%2FIRfoyUh9OgmXlaYR0EFvoJIOoytkHHZf8lmdr1uGFlWxfGihy9E1xDyYXo15gR11OrU89xcHlVit7V6m6SSgma0MRbA4ZwjPG3byqd5Z1sF5ssX5IT6RxweMNGupMQGOqUBTaek%2B9FKStoeP2WmFPJ%2B2lQXYx6sv2KiBfy6S6CMifYIgJriOKpeOpfhdBFcTkKGiZfMaQU3sgm%2FKwRJx0tjXCtI5Nu3A4%2BI6O%2B%2Byhcp1jcAQh6t5%2BU7G7MTx0UJSr3q4Lm7b%2FG8%2FKntRme3pSzTs1ZbR9%2B0T248yIsXMwFh%2FT5uXxKFYCZnWZg%2B5mFI%2BimmAjc1%2FiGofb6OXygUNFXjV%2BxmXyUK&X-Amz-Signature=bb5b738107c470cbac7a531dc84300bf70ed5c48834fe21a958aa79e316928dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MRKFIFE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F3hL9rNdZ2ni76bUR07Qho2x6tAuoloTsyrco01RTuQIgZns1W%2F2LAwqZp95Q51dRD0lxhi%2B7Kxg%2BdTj13O7dq6oqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNX2CqqfjmDQsFSUxyrcA5oMNxp88ABVJCdtjK8TL%2BNHw0U4t2h4jod0VyzAinSci9jNn67SIKU5PuEt7cKT6YvGxJQh5HnjqpSZYvnjZ4KLo1tioWZLEfWw2poYcPuJY9G60BKxTm9AWBBpN028QCH8YMBK9GZ0EML453nX%2FXLc3Sj2mwFMHtbo864PcaLQ%2B13Zvtp4I%2B%2BaHQPiEOKh9I2RogtWRNBxjBiX91a66jqxkSzi3PWsBfzbSt0rKfwj%2B2Yd6T6OTVD%2Be57lXihYo52Q6OKhyRYVNyMl1nlS36A7gClnwgoFG%2B8RLMbNImuiK%2BLILTPufpPl%2Bq5TGJxNrk4uJVl4lgvoE7Lqi8E5cAQWm8Rgqa5f9OGTQHnl2ZdDnIxAhncI7k7Wjf84fycfDAetzqxLE0nHMeECjXxSKj5Z3%2BQuDjFd4PGvjzMdR6IAirmvmaP48XcHSDfIOODAiCrAty0A%2BYHHhp6u9yr2Yoxi1MJ7OrzUHUlFqFIlVEPAK5SNnqNtnGzNRzjq3yk5mgfg%2FIRfoyUh9OgmXlaYR0EFvoJIOoytkHHZf8lmdr1uGFlWxfGihy9E1xDyYXo15gR11OrU89xcHlVit7V6m6SSgma0MRbA4ZwjPG3byqd5Z1sF5ssX5IT6RxweMNGupMQGOqUBTaek%2B9FKStoeP2WmFPJ%2B2lQXYx6sv2KiBfy6S6CMifYIgJriOKpeOpfhdBFcTkKGiZfMaQU3sgm%2FKwRJx0tjXCtI5Nu3A4%2BI6O%2B%2Byhcp1jcAQh6t5%2BU7G7MTx0UJSr3q4Lm7b%2FG8%2FKntRme3pSzTs1ZbR9%2B0T248yIsXMwFh%2FT5uXxKFYCZnWZg%2B5mFI%2BimmAjc1%2FiGofb6OXygUNFXjV%2BxmXyUK&X-Amz-Signature=703fc236b5572e93fe2d0f4dc9060e28a467c689c671bcb004759ed1196b9533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MRKFIFE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F3hL9rNdZ2ni76bUR07Qho2x6tAuoloTsyrco01RTuQIgZns1W%2F2LAwqZp95Q51dRD0lxhi%2B7Kxg%2BdTj13O7dq6oqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNX2CqqfjmDQsFSUxyrcA5oMNxp88ABVJCdtjK8TL%2BNHw0U4t2h4jod0VyzAinSci9jNn67SIKU5PuEt7cKT6YvGxJQh5HnjqpSZYvnjZ4KLo1tioWZLEfWw2poYcPuJY9G60BKxTm9AWBBpN028QCH8YMBK9GZ0EML453nX%2FXLc3Sj2mwFMHtbo864PcaLQ%2B13Zvtp4I%2B%2BaHQPiEOKh9I2RogtWRNBxjBiX91a66jqxkSzi3PWsBfzbSt0rKfwj%2B2Yd6T6OTVD%2Be57lXihYo52Q6OKhyRYVNyMl1nlS36A7gClnwgoFG%2B8RLMbNImuiK%2BLILTPufpPl%2Bq5TGJxNrk4uJVl4lgvoE7Lqi8E5cAQWm8Rgqa5f9OGTQHnl2ZdDnIxAhncI7k7Wjf84fycfDAetzqxLE0nHMeECjXxSKj5Z3%2BQuDjFd4PGvjzMdR6IAirmvmaP48XcHSDfIOODAiCrAty0A%2BYHHhp6u9yr2Yoxi1MJ7OrzUHUlFqFIlVEPAK5SNnqNtnGzNRzjq3yk5mgfg%2FIRfoyUh9OgmXlaYR0EFvoJIOoytkHHZf8lmdr1uGFlWxfGihy9E1xDyYXo15gR11OrU89xcHlVit7V6m6SSgma0MRbA4ZwjPG3byqd5Z1sF5ssX5IT6RxweMNGupMQGOqUBTaek%2B9FKStoeP2WmFPJ%2B2lQXYx6sv2KiBfy6S6CMifYIgJriOKpeOpfhdBFcTkKGiZfMaQU3sgm%2FKwRJx0tjXCtI5Nu3A4%2BI6O%2B%2Byhcp1jcAQh6t5%2BU7G7MTx0UJSr3q4Lm7b%2FG8%2FKntRme3pSzTs1ZbR9%2B0T248yIsXMwFh%2FT5uXxKFYCZnWZg%2B5mFI%2BimmAjc1%2FiGofb6OXygUNFXjV%2BxmXyUK&X-Amz-Signature=4e7fcbb00db3a3fc9879bc1ec139e7607aa989dfa0905932ebf89f95ba6bf4e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
   
    <collision>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
    </collision>

    <xacro:box_inertia m="15" w="${base_width}" d="${base_length}" h="${base_height}"/>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MRKFIFE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F3hL9rNdZ2ni76bUR07Qho2x6tAuoloTsyrco01RTuQIgZns1W%2F2LAwqZp95Q51dRD0lxhi%2B7Kxg%2BdTj13O7dq6oqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNX2CqqfjmDQsFSUxyrcA5oMNxp88ABVJCdtjK8TL%2BNHw0U4t2h4jod0VyzAinSci9jNn67SIKU5PuEt7cKT6YvGxJQh5HnjqpSZYvnjZ4KLo1tioWZLEfWw2poYcPuJY9G60BKxTm9AWBBpN028QCH8YMBK9GZ0EML453nX%2FXLc3Sj2mwFMHtbo864PcaLQ%2B13Zvtp4I%2B%2BaHQPiEOKh9I2RogtWRNBxjBiX91a66jqxkSzi3PWsBfzbSt0rKfwj%2B2Yd6T6OTVD%2Be57lXihYo52Q6OKhyRYVNyMl1nlS36A7gClnwgoFG%2B8RLMbNImuiK%2BLILTPufpPl%2Bq5TGJxNrk4uJVl4lgvoE7Lqi8E5cAQWm8Rgqa5f9OGTQHnl2ZdDnIxAhncI7k7Wjf84fycfDAetzqxLE0nHMeECjXxSKj5Z3%2BQuDjFd4PGvjzMdR6IAirmvmaP48XcHSDfIOODAiCrAty0A%2BYHHhp6u9yr2Yoxi1MJ7OrzUHUlFqFIlVEPAK5SNnqNtnGzNRzjq3yk5mgfg%2FIRfoyUh9OgmXlaYR0EFvoJIOoytkHHZf8lmdr1uGFlWxfGihy9E1xDyYXo15gR11OrU89xcHlVit7V6m6SSgma0MRbA4ZwjPG3byqd5Z1sF5ssX5IT6RxweMNGupMQGOqUBTaek%2B9FKStoeP2WmFPJ%2B2lQXYx6sv2KiBfy6S6CMifYIgJriOKpeOpfhdBFcTkKGiZfMaQU3sgm%2FKwRJx0tjXCtI5Nu3A4%2BI6O%2B%2Byhcp1jcAQh6t5%2BU7G7MTx0UJSr3q4Lm7b%2FG8%2FKntRme3pSzTs1ZbR9%2B0T248yIsXMwFh%2FT5uXxKFYCZnWZg%2B5mFI%2BimmAjc1%2FiGofb6OXygUNFXjV%2BxmXyUK&X-Amz-Signature=7084b1840e304ec927900d37d8cac36959299e75c4298733253b6d9f38b82642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MRKFIFE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F3hL9rNdZ2ni76bUR07Qho2x6tAuoloTsyrco01RTuQIgZns1W%2F2LAwqZp95Q51dRD0lxhi%2B7Kxg%2BdTj13O7dq6oqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNX2CqqfjmDQsFSUxyrcA5oMNxp88ABVJCdtjK8TL%2BNHw0U4t2h4jod0VyzAinSci9jNn67SIKU5PuEt7cKT6YvGxJQh5HnjqpSZYvnjZ4KLo1tioWZLEfWw2poYcPuJY9G60BKxTm9AWBBpN028QCH8YMBK9GZ0EML453nX%2FXLc3Sj2mwFMHtbo864PcaLQ%2B13Zvtp4I%2B%2BaHQPiEOKh9I2RogtWRNBxjBiX91a66jqxkSzi3PWsBfzbSt0rKfwj%2B2Yd6T6OTVD%2Be57lXihYo52Q6OKhyRYVNyMl1nlS36A7gClnwgoFG%2B8RLMbNImuiK%2BLILTPufpPl%2Bq5TGJxNrk4uJVl4lgvoE7Lqi8E5cAQWm8Rgqa5f9OGTQHnl2ZdDnIxAhncI7k7Wjf84fycfDAetzqxLE0nHMeECjXxSKj5Z3%2BQuDjFd4PGvjzMdR6IAirmvmaP48XcHSDfIOODAiCrAty0A%2BYHHhp6u9yr2Yoxi1MJ7OrzUHUlFqFIlVEPAK5SNnqNtnGzNRzjq3yk5mgfg%2FIRfoyUh9OgmXlaYR0EFvoJIOoytkHHZf8lmdr1uGFlWxfGihy9E1xDyYXo15gR11OrU89xcHlVit7V6m6SSgma0MRbA4ZwjPG3byqd5Z1sF5ssX5IT6RxweMNGupMQGOqUBTaek%2B9FKStoeP2WmFPJ%2B2lQXYx6sv2KiBfy6S6CMifYIgJriOKpeOpfhdBFcTkKGiZfMaQU3sgm%2FKwRJx0tjXCtI5Nu3A4%2BI6O%2B%2Byhcp1jcAQh6t5%2BU7G7MTx0UJSr3q4Lm7b%2FG8%2FKntRme3pSzTs1ZbR9%2B0T248yIsXMwFh%2FT5uXxKFYCZnWZg%2B5mFI%2BimmAjc1%2FiGofb6OXygUNFXjV%2BxmXyUK&X-Amz-Signature=3508e6453519a8dfd1eb0d543e57356fe542bc8d7cddd3fbd836a61edf16e84d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MRKFIFE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F3hL9rNdZ2ni76bUR07Qho2x6tAuoloTsyrco01RTuQIgZns1W%2F2LAwqZp95Q51dRD0lxhi%2B7Kxg%2BdTj13O7dq6oqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNX2CqqfjmDQsFSUxyrcA5oMNxp88ABVJCdtjK8TL%2BNHw0U4t2h4jod0VyzAinSci9jNn67SIKU5PuEt7cKT6YvGxJQh5HnjqpSZYvnjZ4KLo1tioWZLEfWw2poYcPuJY9G60BKxTm9AWBBpN028QCH8YMBK9GZ0EML453nX%2FXLc3Sj2mwFMHtbo864PcaLQ%2B13Zvtp4I%2B%2BaHQPiEOKh9I2RogtWRNBxjBiX91a66jqxkSzi3PWsBfzbSt0rKfwj%2B2Yd6T6OTVD%2Be57lXihYo52Q6OKhyRYVNyMl1nlS36A7gClnwgoFG%2B8RLMbNImuiK%2BLILTPufpPl%2Bq5TGJxNrk4uJVl4lgvoE7Lqi8E5cAQWm8Rgqa5f9OGTQHnl2ZdDnIxAhncI7k7Wjf84fycfDAetzqxLE0nHMeECjXxSKj5Z3%2BQuDjFd4PGvjzMdR6IAirmvmaP48XcHSDfIOODAiCrAty0A%2BYHHhp6u9yr2Yoxi1MJ7OrzUHUlFqFIlVEPAK5SNnqNtnGzNRzjq3yk5mgfg%2FIRfoyUh9OgmXlaYR0EFvoJIOoytkHHZf8lmdr1uGFlWxfGihy9E1xDyYXo15gR11OrU89xcHlVit7V6m6SSgma0MRbA4ZwjPG3byqd5Z1sF5ssX5IT6RxweMNGupMQGOqUBTaek%2B9FKStoeP2WmFPJ%2B2lQXYx6sv2KiBfy6S6CMifYIgJriOKpeOpfhdBFcTkKGiZfMaQU3sgm%2FKwRJx0tjXCtI5Nu3A4%2BI6O%2B%2Byhcp1jcAQh6t5%2BU7G7MTx0UJSr3q4Lm7b%2FG8%2FKntRme3pSzTs1ZbR9%2B0T248yIsXMwFh%2FT5uXxKFYCZnWZg%2B5mFI%2BimmAjc1%2FiGofb6OXygUNFXjV%2BxmXyUK&X-Amz-Signature=f5c94995694251041baec4d7910457e1f44371cd6318b43e8b0c5c1d07b224b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MRKFIFE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F3hL9rNdZ2ni76bUR07Qho2x6tAuoloTsyrco01RTuQIgZns1W%2F2LAwqZp95Q51dRD0lxhi%2B7Kxg%2BdTj13O7dq6oqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNX2CqqfjmDQsFSUxyrcA5oMNxp88ABVJCdtjK8TL%2BNHw0U4t2h4jod0VyzAinSci9jNn67SIKU5PuEt7cKT6YvGxJQh5HnjqpSZYvnjZ4KLo1tioWZLEfWw2poYcPuJY9G60BKxTm9AWBBpN028QCH8YMBK9GZ0EML453nX%2FXLc3Sj2mwFMHtbo864PcaLQ%2B13Zvtp4I%2B%2BaHQPiEOKh9I2RogtWRNBxjBiX91a66jqxkSzi3PWsBfzbSt0rKfwj%2B2Yd6T6OTVD%2Be57lXihYo52Q6OKhyRYVNyMl1nlS36A7gClnwgoFG%2B8RLMbNImuiK%2BLILTPufpPl%2Bq5TGJxNrk4uJVl4lgvoE7Lqi8E5cAQWm8Rgqa5f9OGTQHnl2ZdDnIxAhncI7k7Wjf84fycfDAetzqxLE0nHMeECjXxSKj5Z3%2BQuDjFd4PGvjzMdR6IAirmvmaP48XcHSDfIOODAiCrAty0A%2BYHHhp6u9yr2Yoxi1MJ7OrzUHUlFqFIlVEPAK5SNnqNtnGzNRzjq3yk5mgfg%2FIRfoyUh9OgmXlaYR0EFvoJIOoytkHHZf8lmdr1uGFlWxfGihy9E1xDyYXo15gR11OrU89xcHlVit7V6m6SSgma0MRbA4ZwjPG3byqd5Z1sF5ssX5IT6RxweMNGupMQGOqUBTaek%2B9FKStoeP2WmFPJ%2B2lQXYx6sv2KiBfy6S6CMifYIgJriOKpeOpfhdBFcTkKGiZfMaQU3sgm%2FKwRJx0tjXCtI5Nu3A4%2BI6O%2B%2Byhcp1jcAQh6t5%2BU7G7MTx0UJSr3q4Lm7b%2FG8%2FKntRme3pSzTs1ZbR9%2B0T248yIsXMwFh%2FT5uXxKFYCZnWZg%2B5mFI%2BimmAjc1%2FiGofb6OXygUNFXjV%2BxmXyUK&X-Amz-Signature=c6c1695790553208eca9b35d589b91be66f5412e19f3c0c9f1d0d3ae4da31cac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MXEDILV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0YZqpv6wZyDQibQ9Yf1SIFVqc6YNPG%2F1Jv6gd6c6YoAIgYVutHCSYMIeafH9nuMOQ2s%2FxhMa%2FlGs40PU2H4UZ5fcqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4ffs4ZN8fr3dLvmircA2gbeoGJGgeeLWaUD%2B2I8Yolux6eP55zTTug3lDKdzilkQcKqREfHR0wLHMgY5gVW3v4ECqUI8WXurQX%2B9s86UZQ5gz1nr55p2gT3GgxSun71N9bz5YvdQ5qONufx%2FiLGFxOauXI1SrmxFkeOIM0VIgtbKtXojCvl4zwmZt08NUX5V4LbeRG0vL1RqCLWKAGLfUEyJB63eJeaRcT2DS2jwVfVyr5Z1Y1FxMH%2BgmOLGx%2BQZLmFQFEvooGmhiaBQLXJLjv1BJu440DrTsCXrb7FVMsj%2Bc6FTEDay5IdF%2B0hlSnrM4ZQfmANPon3YYb3%2BJjRkGC9s0MV5DzwPfXYbVuMAo7EMChDK6GPx7rO%2BwZTu0BJpMUePawScF1ODBoFE3o3mRYNooAWslxxQsa%2FjOVszJiWbZ8KeCAhM5evmJ0qezSJd0mVfGXkZIHMDNJWyWzmRSCmDRjgR1n%2FRvTYszltA35nV1dc499gw28y92Y%2FjmzpF5ZZlxZ2I2xZq%2Fw32J7nRuTu7ejxTyujbOKjgUHieCBXSIM0EOZC2Z%2FFveFYhj%2FwylZXTHSrObZZdwDsRTd%2BYLlGEplAgtyoxMZdBPFSOib60Vht5uveQlZJp6z8oSAr9mERQBXqgVXAqhEMN%2BtpMQGOqUBDJsSRY9iiQdfy3oJFFzvjOBtziF%2FtcCTFK15xyJXZTpqL6%2F0T%2B7Ik0dvFd2AsLtk0BtnMETaXjyyRGmyxX67fIBdtWEV2UIoYfJgrFAsLLQneSMkUDKyQTpuVMV1yaRFhCXz5rMDCm1D5XD3kEg8bj6SETgYvmyCAbHgXIh3kLTV0msw7MDFpoxldDjfn%2FYEfuUlWpixIDv8h85c77Uexb%2FZ7TDO&X-Amz-Signature=a8291645161a1dfa34140210c95f8366f3e0dd4f1121b32dc8c4859facae330a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MXEDILV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0YZqpv6wZyDQibQ9Yf1SIFVqc6YNPG%2F1Jv6gd6c6YoAIgYVutHCSYMIeafH9nuMOQ2s%2FxhMa%2FlGs40PU2H4UZ5fcqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4ffs4ZN8fr3dLvmircA2gbeoGJGgeeLWaUD%2B2I8Yolux6eP55zTTug3lDKdzilkQcKqREfHR0wLHMgY5gVW3v4ECqUI8WXurQX%2B9s86UZQ5gz1nr55p2gT3GgxSun71N9bz5YvdQ5qONufx%2FiLGFxOauXI1SrmxFkeOIM0VIgtbKtXojCvl4zwmZt08NUX5V4LbeRG0vL1RqCLWKAGLfUEyJB63eJeaRcT2DS2jwVfVyr5Z1Y1FxMH%2BgmOLGx%2BQZLmFQFEvooGmhiaBQLXJLjv1BJu440DrTsCXrb7FVMsj%2Bc6FTEDay5IdF%2B0hlSnrM4ZQfmANPon3YYb3%2BJjRkGC9s0MV5DzwPfXYbVuMAo7EMChDK6GPx7rO%2BwZTu0BJpMUePawScF1ODBoFE3o3mRYNooAWslxxQsa%2FjOVszJiWbZ8KeCAhM5evmJ0qezSJd0mVfGXkZIHMDNJWyWzmRSCmDRjgR1n%2FRvTYszltA35nV1dc499gw28y92Y%2FjmzpF5ZZlxZ2I2xZq%2Fw32J7nRuTu7ejxTyujbOKjgUHieCBXSIM0EOZC2Z%2FFveFYhj%2FwylZXTHSrObZZdwDsRTd%2BYLlGEplAgtyoxMZdBPFSOib60Vht5uveQlZJp6z8oSAr9mERQBXqgVXAqhEMN%2BtpMQGOqUBDJsSRY9iiQdfy3oJFFzvjOBtziF%2FtcCTFK15xyJXZTpqL6%2F0T%2B7Ik0dvFd2AsLtk0BtnMETaXjyyRGmyxX67fIBdtWEV2UIoYfJgrFAsLLQneSMkUDKyQTpuVMV1yaRFhCXz5rMDCm1D5XD3kEg8bj6SETgYvmyCAbHgXIh3kLTV0msw7MDFpoxldDjfn%2FYEfuUlWpixIDv8h85c77Uexb%2FZ7TDO&X-Amz-Signature=637d3b9e3c3f60304d7aae6c2898c37b2e27f091ae48e287904e01f4dc497c97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MXEDILV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0YZqpv6wZyDQibQ9Yf1SIFVqc6YNPG%2F1Jv6gd6c6YoAIgYVutHCSYMIeafH9nuMOQ2s%2FxhMa%2FlGs40PU2H4UZ5fcqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4ffs4ZN8fr3dLvmircA2gbeoGJGgeeLWaUD%2B2I8Yolux6eP55zTTug3lDKdzilkQcKqREfHR0wLHMgY5gVW3v4ECqUI8WXurQX%2B9s86UZQ5gz1nr55p2gT3GgxSun71N9bz5YvdQ5qONufx%2FiLGFxOauXI1SrmxFkeOIM0VIgtbKtXojCvl4zwmZt08NUX5V4LbeRG0vL1RqCLWKAGLfUEyJB63eJeaRcT2DS2jwVfVyr5Z1Y1FxMH%2BgmOLGx%2BQZLmFQFEvooGmhiaBQLXJLjv1BJu440DrTsCXrb7FVMsj%2Bc6FTEDay5IdF%2B0hlSnrM4ZQfmANPon3YYb3%2BJjRkGC9s0MV5DzwPfXYbVuMAo7EMChDK6GPx7rO%2BwZTu0BJpMUePawScF1ODBoFE3o3mRYNooAWslxxQsa%2FjOVszJiWbZ8KeCAhM5evmJ0qezSJd0mVfGXkZIHMDNJWyWzmRSCmDRjgR1n%2FRvTYszltA35nV1dc499gw28y92Y%2FjmzpF5ZZlxZ2I2xZq%2Fw32J7nRuTu7ejxTyujbOKjgUHieCBXSIM0EOZC2Z%2FFveFYhj%2FwylZXTHSrObZZdwDsRTd%2BYLlGEplAgtyoxMZdBPFSOib60Vht5uveQlZJp6z8oSAr9mERQBXqgVXAqhEMN%2BtpMQGOqUBDJsSRY9iiQdfy3oJFFzvjOBtziF%2FtcCTFK15xyJXZTpqL6%2F0T%2B7Ik0dvFd2AsLtk0BtnMETaXjyyRGmyxX67fIBdtWEV2UIoYfJgrFAsLLQneSMkUDKyQTpuVMV1yaRFhCXz5rMDCm1D5XD3kEg8bj6SETgYvmyCAbHgXIh3kLTV0msw7MDFpoxldDjfn%2FYEfuUlWpixIDv8h85c77Uexb%2FZ7TDO&X-Amz-Signature=966ff5e1eee96c96c4a50fb28b4a289a8d38408d75e04faaafd2080f705c5635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MXEDILV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0YZqpv6wZyDQibQ9Yf1SIFVqc6YNPG%2F1Jv6gd6c6YoAIgYVutHCSYMIeafH9nuMOQ2s%2FxhMa%2FlGs40PU2H4UZ5fcqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4ffs4ZN8fr3dLvmircA2gbeoGJGgeeLWaUD%2B2I8Yolux6eP55zTTug3lDKdzilkQcKqREfHR0wLHMgY5gVW3v4ECqUI8WXurQX%2B9s86UZQ5gz1nr55p2gT3GgxSun71N9bz5YvdQ5qONufx%2FiLGFxOauXI1SrmxFkeOIM0VIgtbKtXojCvl4zwmZt08NUX5V4LbeRG0vL1RqCLWKAGLfUEyJB63eJeaRcT2DS2jwVfVyr5Z1Y1FxMH%2BgmOLGx%2BQZLmFQFEvooGmhiaBQLXJLjv1BJu440DrTsCXrb7FVMsj%2Bc6FTEDay5IdF%2B0hlSnrM4ZQfmANPon3YYb3%2BJjRkGC9s0MV5DzwPfXYbVuMAo7EMChDK6GPx7rO%2BwZTu0BJpMUePawScF1ODBoFE3o3mRYNooAWslxxQsa%2FjOVszJiWbZ8KeCAhM5evmJ0qezSJd0mVfGXkZIHMDNJWyWzmRSCmDRjgR1n%2FRvTYszltA35nV1dc499gw28y92Y%2FjmzpF5ZZlxZ2I2xZq%2Fw32J7nRuTu7ejxTyujbOKjgUHieCBXSIM0EOZC2Z%2FFveFYhj%2FwylZXTHSrObZZdwDsRTd%2BYLlGEplAgtyoxMZdBPFSOib60Vht5uveQlZJp6z8oSAr9mERQBXqgVXAqhEMN%2BtpMQGOqUBDJsSRY9iiQdfy3oJFFzvjOBtziF%2FtcCTFK15xyJXZTpqL6%2F0T%2B7Ik0dvFd2AsLtk0BtnMETaXjyyRGmyxX67fIBdtWEV2UIoYfJgrFAsLLQneSMkUDKyQTpuVMV1yaRFhCXz5rMDCm1D5XD3kEg8bj6SETgYvmyCAbHgXIh3kLTV0msw7MDFpoxldDjfn%2FYEfuUlWpixIDv8h85c77Uexb%2FZ7TDO&X-Amz-Signature=e226dbe4f747910cf5cd0fa215765cb78d32ebf133ae7615b7745f7c595bb3a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MXEDILV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0YZqpv6wZyDQibQ9Yf1SIFVqc6YNPG%2F1Jv6gd6c6YoAIgYVutHCSYMIeafH9nuMOQ2s%2FxhMa%2FlGs40PU2H4UZ5fcqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4ffs4ZN8fr3dLvmircA2gbeoGJGgeeLWaUD%2B2I8Yolux6eP55zTTug3lDKdzilkQcKqREfHR0wLHMgY5gVW3v4ECqUI8WXurQX%2B9s86UZQ5gz1nr55p2gT3GgxSun71N9bz5YvdQ5qONufx%2FiLGFxOauXI1SrmxFkeOIM0VIgtbKtXojCvl4zwmZt08NUX5V4LbeRG0vL1RqCLWKAGLfUEyJB63eJeaRcT2DS2jwVfVyr5Z1Y1FxMH%2BgmOLGx%2BQZLmFQFEvooGmhiaBQLXJLjv1BJu440DrTsCXrb7FVMsj%2Bc6FTEDay5IdF%2B0hlSnrM4ZQfmANPon3YYb3%2BJjRkGC9s0MV5DzwPfXYbVuMAo7EMChDK6GPx7rO%2BwZTu0BJpMUePawScF1ODBoFE3o3mRYNooAWslxxQsa%2FjOVszJiWbZ8KeCAhM5evmJ0qezSJd0mVfGXkZIHMDNJWyWzmRSCmDRjgR1n%2FRvTYszltA35nV1dc499gw28y92Y%2FjmzpF5ZZlxZ2I2xZq%2Fw32J7nRuTu7ejxTyujbOKjgUHieCBXSIM0EOZC2Z%2FFveFYhj%2FwylZXTHSrObZZdwDsRTd%2BYLlGEplAgtyoxMZdBPFSOib60Vht5uveQlZJp6z8oSAr9mERQBXqgVXAqhEMN%2BtpMQGOqUBDJsSRY9iiQdfy3oJFFzvjOBtziF%2FtcCTFK15xyJXZTpqL6%2F0T%2B7Ik0dvFd2AsLtk0BtnMETaXjyyRGmyxX67fIBdtWEV2UIoYfJgrFAsLLQneSMkUDKyQTpuVMV1yaRFhCXz5rMDCm1D5XD3kEg8bj6SETgYvmyCAbHgXIh3kLTV0msw7MDFpoxldDjfn%2FYEfuUlWpixIDv8h85c77Uexb%2FZ7TDO&X-Amz-Signature=3595980cd74937a6a18f314b26c1402db91cec8cf7ad87cadc08d46e1c3ae8d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MXEDILV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0YZqpv6wZyDQibQ9Yf1SIFVqc6YNPG%2F1Jv6gd6c6YoAIgYVutHCSYMIeafH9nuMOQ2s%2FxhMa%2FlGs40PU2H4UZ5fcqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4ffs4ZN8fr3dLvmircA2gbeoGJGgeeLWaUD%2B2I8Yolux6eP55zTTug3lDKdzilkQcKqREfHR0wLHMgY5gVW3v4ECqUI8WXurQX%2B9s86UZQ5gz1nr55p2gT3GgxSun71N9bz5YvdQ5qONufx%2FiLGFxOauXI1SrmxFkeOIM0VIgtbKtXojCvl4zwmZt08NUX5V4LbeRG0vL1RqCLWKAGLfUEyJB63eJeaRcT2DS2jwVfVyr5Z1Y1FxMH%2BgmOLGx%2BQZLmFQFEvooGmhiaBQLXJLjv1BJu440DrTsCXrb7FVMsj%2Bc6FTEDay5IdF%2B0hlSnrM4ZQfmANPon3YYb3%2BJjRkGC9s0MV5DzwPfXYbVuMAo7EMChDK6GPx7rO%2BwZTu0BJpMUePawScF1ODBoFE3o3mRYNooAWslxxQsa%2FjOVszJiWbZ8KeCAhM5evmJ0qezSJd0mVfGXkZIHMDNJWyWzmRSCmDRjgR1n%2FRvTYszltA35nV1dc499gw28y92Y%2FjmzpF5ZZlxZ2I2xZq%2Fw32J7nRuTu7ejxTyujbOKjgUHieCBXSIM0EOZC2Z%2FFveFYhj%2FwylZXTHSrObZZdwDsRTd%2BYLlGEplAgtyoxMZdBPFSOib60Vht5uveQlZJp6z8oSAr9mERQBXqgVXAqhEMN%2BtpMQGOqUBDJsSRY9iiQdfy3oJFFzvjOBtziF%2FtcCTFK15xyJXZTpqL6%2F0T%2B7Ik0dvFd2AsLtk0BtnMETaXjyyRGmyxX67fIBdtWEV2UIoYfJgrFAsLLQneSMkUDKyQTpuVMV1yaRFhCXz5rMDCm1D5XD3kEg8bj6SETgYvmyCAbHgXIh3kLTV0msw7MDFpoxldDjfn%2FYEfuUlWpixIDv8h85c77Uexb%2FZ7TDO&X-Amz-Signature=add26b8f11d83291e5ba02394282622d057f6037ee83bb5f83ded8ac3e933a7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
