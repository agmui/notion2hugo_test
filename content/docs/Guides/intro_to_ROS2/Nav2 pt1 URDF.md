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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQKSXD4N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgRv5hb06to9jyQQy0%2B1iJtgNNs2RRwJqBSAUxTrESLAiAFAc%2BO7xsHgbGdhB9APS%2Fu8GULz5FXCX231YKJNyQikyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMBvaZnr7CKI0chvnIKtwD8vWXu5kqPgBmyhmUxHuzydOKpsEopfybr980Y6lW3ok1RiOhYDBpzVFJ%2FIwcrWkgkkdVaJ5GDFdpZrq3J3PJ2WUVo0D%2B%2BtOTYdvFuGKPDZYE32rBzOXBB0yg2rak9qcn5bd2U%2FsCESBtqh71dKIFWTwQcTsNqRZFQsA1WThYYXxittj7Kgbto%2FNkVsRVgLggOa0rLeh9vQRPgWAUn8PbgYYPf0SaEP2RncqIZvwyeVWgu7xU%2FHP4cZEA0OMHaWk8sT4UYD9QtTPr9Gqt77ziMMgvZql7piIwvIdplrpGzaU%2BkfRD5ryfGwE6KMo1Dx%2FXO27vXisnBd2%2FaNRoXL0F4ele%2BsDtRO%2FvzhwZEXsA%2BeX80wkEK%2BdmrnonE%2FuQfDqEUS80JQD4UWZcr%2Bht4GriLi0WbaFuLXEcQmw9Fnv15vJ7T%2BLiyFMMUfTOgysZhlWPHNiOEBXoWS4PgPy3UyX8Ak%2F9huVA0U8uqOCoASnFsFR02DAagzvYz0A12sXokP8sMaOokGhrF8zYLilDOBNv07wiFrTWcq9D8kgzx5X8zwv3oigEkYCeoRRs0Ysl2UqBqqUkEpHvd6jPY9EdAxn%2FWj8KObUB9P7kHWT20HgVI4yTBhpIa12DsHXBONQwhK%2F2xAY6pgFtfPhbegs95HOHHsjjjU7qR6AALiq4G99SXDeqhLyu3XDNbmMtlH2CLXme7%2FrXFLqCjVKqHMCYYDemPHCDSFTwS%2BhxiTDn3qADal%2FnFbIDG4Ip7NFjF5koKj01O9A8IiZI%2BmnLjT1ZN0ur4qFaxlmREXtrn%2FTYvWBqa77IY13oIVOabYEb0lzi6yYH5nhOVtx13Jygp%2BwPkpgpIKiJFn933D1QzQnQ&X-Amz-Signature=5c4bc35de517b6d21a12ca0ce09bfd779357248f65cf83358943b71e891e21ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQKSXD4N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgRv5hb06to9jyQQy0%2B1iJtgNNs2RRwJqBSAUxTrESLAiAFAc%2BO7xsHgbGdhB9APS%2Fu8GULz5FXCX231YKJNyQikyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMBvaZnr7CKI0chvnIKtwD8vWXu5kqPgBmyhmUxHuzydOKpsEopfybr980Y6lW3ok1RiOhYDBpzVFJ%2FIwcrWkgkkdVaJ5GDFdpZrq3J3PJ2WUVo0D%2B%2BtOTYdvFuGKPDZYE32rBzOXBB0yg2rak9qcn5bd2U%2FsCESBtqh71dKIFWTwQcTsNqRZFQsA1WThYYXxittj7Kgbto%2FNkVsRVgLggOa0rLeh9vQRPgWAUn8PbgYYPf0SaEP2RncqIZvwyeVWgu7xU%2FHP4cZEA0OMHaWk8sT4UYD9QtTPr9Gqt77ziMMgvZql7piIwvIdplrpGzaU%2BkfRD5ryfGwE6KMo1Dx%2FXO27vXisnBd2%2FaNRoXL0F4ele%2BsDtRO%2FvzhwZEXsA%2BeX80wkEK%2BdmrnonE%2FuQfDqEUS80JQD4UWZcr%2Bht4GriLi0WbaFuLXEcQmw9Fnv15vJ7T%2BLiyFMMUfTOgysZhlWPHNiOEBXoWS4PgPy3UyX8Ak%2F9huVA0U8uqOCoASnFsFR02DAagzvYz0A12sXokP8sMaOokGhrF8zYLilDOBNv07wiFrTWcq9D8kgzx5X8zwv3oigEkYCeoRRs0Ysl2UqBqqUkEpHvd6jPY9EdAxn%2FWj8KObUB9P7kHWT20HgVI4yTBhpIa12DsHXBONQwhK%2F2xAY6pgFtfPhbegs95HOHHsjjjU7qR6AALiq4G99SXDeqhLyu3XDNbmMtlH2CLXme7%2FrXFLqCjVKqHMCYYDemPHCDSFTwS%2BhxiTDn3qADal%2FnFbIDG4Ip7NFjF5koKj01O9A8IiZI%2BmnLjT1ZN0ur4qFaxlmREXtrn%2FTYvWBqa77IY13oIVOabYEb0lzi6yYH5nhOVtx13Jygp%2BwPkpgpIKiJFn933D1QzQnQ&X-Amz-Signature=74c934a91fcdff175060bb1fc1fe02606d640d4cdaca78e31d9f89691c021020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQKSXD4N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgRv5hb06to9jyQQy0%2B1iJtgNNs2RRwJqBSAUxTrESLAiAFAc%2BO7xsHgbGdhB9APS%2Fu8GULz5FXCX231YKJNyQikyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMBvaZnr7CKI0chvnIKtwD8vWXu5kqPgBmyhmUxHuzydOKpsEopfybr980Y6lW3ok1RiOhYDBpzVFJ%2FIwcrWkgkkdVaJ5GDFdpZrq3J3PJ2WUVo0D%2B%2BtOTYdvFuGKPDZYE32rBzOXBB0yg2rak9qcn5bd2U%2FsCESBtqh71dKIFWTwQcTsNqRZFQsA1WThYYXxittj7Kgbto%2FNkVsRVgLggOa0rLeh9vQRPgWAUn8PbgYYPf0SaEP2RncqIZvwyeVWgu7xU%2FHP4cZEA0OMHaWk8sT4UYD9QtTPr9Gqt77ziMMgvZql7piIwvIdplrpGzaU%2BkfRD5ryfGwE6KMo1Dx%2FXO27vXisnBd2%2FaNRoXL0F4ele%2BsDtRO%2FvzhwZEXsA%2BeX80wkEK%2BdmrnonE%2FuQfDqEUS80JQD4UWZcr%2Bht4GriLi0WbaFuLXEcQmw9Fnv15vJ7T%2BLiyFMMUfTOgysZhlWPHNiOEBXoWS4PgPy3UyX8Ak%2F9huVA0U8uqOCoASnFsFR02DAagzvYz0A12sXokP8sMaOokGhrF8zYLilDOBNv07wiFrTWcq9D8kgzx5X8zwv3oigEkYCeoRRs0Ysl2UqBqqUkEpHvd6jPY9EdAxn%2FWj8KObUB9P7kHWT20HgVI4yTBhpIa12DsHXBONQwhK%2F2xAY6pgFtfPhbegs95HOHHsjjjU7qR6AALiq4G99SXDeqhLyu3XDNbmMtlH2CLXme7%2FrXFLqCjVKqHMCYYDemPHCDSFTwS%2BhxiTDn3qADal%2FnFbIDG4Ip7NFjF5koKj01O9A8IiZI%2BmnLjT1ZN0ur4qFaxlmREXtrn%2FTYvWBqa77IY13oIVOabYEb0lzi6yYH5nhOVtx13Jygp%2BwPkpgpIKiJFn933D1QzQnQ&X-Amz-Signature=64460c2714998c47fef6e809da974c06e03d7685c6a37bb8b7c037b99bdfd8a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQKSXD4N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgRv5hb06to9jyQQy0%2B1iJtgNNs2RRwJqBSAUxTrESLAiAFAc%2BO7xsHgbGdhB9APS%2Fu8GULz5FXCX231YKJNyQikyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMBvaZnr7CKI0chvnIKtwD8vWXu5kqPgBmyhmUxHuzydOKpsEopfybr980Y6lW3ok1RiOhYDBpzVFJ%2FIwcrWkgkkdVaJ5GDFdpZrq3J3PJ2WUVo0D%2B%2BtOTYdvFuGKPDZYE32rBzOXBB0yg2rak9qcn5bd2U%2FsCESBtqh71dKIFWTwQcTsNqRZFQsA1WThYYXxittj7Kgbto%2FNkVsRVgLggOa0rLeh9vQRPgWAUn8PbgYYPf0SaEP2RncqIZvwyeVWgu7xU%2FHP4cZEA0OMHaWk8sT4UYD9QtTPr9Gqt77ziMMgvZql7piIwvIdplrpGzaU%2BkfRD5ryfGwE6KMo1Dx%2FXO27vXisnBd2%2FaNRoXL0F4ele%2BsDtRO%2FvzhwZEXsA%2BeX80wkEK%2BdmrnonE%2FuQfDqEUS80JQD4UWZcr%2Bht4GriLi0WbaFuLXEcQmw9Fnv15vJ7T%2BLiyFMMUfTOgysZhlWPHNiOEBXoWS4PgPy3UyX8Ak%2F9huVA0U8uqOCoASnFsFR02DAagzvYz0A12sXokP8sMaOokGhrF8zYLilDOBNv07wiFrTWcq9D8kgzx5X8zwv3oigEkYCeoRRs0Ysl2UqBqqUkEpHvd6jPY9EdAxn%2FWj8KObUB9P7kHWT20HgVI4yTBhpIa12DsHXBONQwhK%2F2xAY6pgFtfPhbegs95HOHHsjjjU7qR6AALiq4G99SXDeqhLyu3XDNbmMtlH2CLXme7%2FrXFLqCjVKqHMCYYDemPHCDSFTwS%2BhxiTDn3qADal%2FnFbIDG4Ip7NFjF5koKj01O9A8IiZI%2BmnLjT1ZN0ur4qFaxlmREXtrn%2FTYvWBqa77IY13oIVOabYEb0lzi6yYH5nhOVtx13Jygp%2BwPkpgpIKiJFn933D1QzQnQ&X-Amz-Signature=2d62336713aca42759fc161778c781c6333bc483f81cd67de0c5fc86435e07eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQKSXD4N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgRv5hb06to9jyQQy0%2B1iJtgNNs2RRwJqBSAUxTrESLAiAFAc%2BO7xsHgbGdhB9APS%2Fu8GULz5FXCX231YKJNyQikyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMBvaZnr7CKI0chvnIKtwD8vWXu5kqPgBmyhmUxHuzydOKpsEopfybr980Y6lW3ok1RiOhYDBpzVFJ%2FIwcrWkgkkdVaJ5GDFdpZrq3J3PJ2WUVo0D%2B%2BtOTYdvFuGKPDZYE32rBzOXBB0yg2rak9qcn5bd2U%2FsCESBtqh71dKIFWTwQcTsNqRZFQsA1WThYYXxittj7Kgbto%2FNkVsRVgLggOa0rLeh9vQRPgWAUn8PbgYYPf0SaEP2RncqIZvwyeVWgu7xU%2FHP4cZEA0OMHaWk8sT4UYD9QtTPr9Gqt77ziMMgvZql7piIwvIdplrpGzaU%2BkfRD5ryfGwE6KMo1Dx%2FXO27vXisnBd2%2FaNRoXL0F4ele%2BsDtRO%2FvzhwZEXsA%2BeX80wkEK%2BdmrnonE%2FuQfDqEUS80JQD4UWZcr%2Bht4GriLi0WbaFuLXEcQmw9Fnv15vJ7T%2BLiyFMMUfTOgysZhlWPHNiOEBXoWS4PgPy3UyX8Ak%2F9huVA0U8uqOCoASnFsFR02DAagzvYz0A12sXokP8sMaOokGhrF8zYLilDOBNv07wiFrTWcq9D8kgzx5X8zwv3oigEkYCeoRRs0Ysl2UqBqqUkEpHvd6jPY9EdAxn%2FWj8KObUB9P7kHWT20HgVI4yTBhpIa12DsHXBONQwhK%2F2xAY6pgFtfPhbegs95HOHHsjjjU7qR6AALiq4G99SXDeqhLyu3XDNbmMtlH2CLXme7%2FrXFLqCjVKqHMCYYDemPHCDSFTwS%2BhxiTDn3qADal%2FnFbIDG4Ip7NFjF5koKj01O9A8IiZI%2BmnLjT1ZN0ur4qFaxlmREXtrn%2FTYvWBqa77IY13oIVOabYEb0lzi6yYH5nhOVtx13Jygp%2BwPkpgpIKiJFn933D1QzQnQ&X-Amz-Signature=a563e5eb4cc67e0a024de0878bd37e0915fa85a34cbcd1bb137d881da2fd561d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQKSXD4N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgRv5hb06to9jyQQy0%2B1iJtgNNs2RRwJqBSAUxTrESLAiAFAc%2BO7xsHgbGdhB9APS%2Fu8GULz5FXCX231YKJNyQikyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMBvaZnr7CKI0chvnIKtwD8vWXu5kqPgBmyhmUxHuzydOKpsEopfybr980Y6lW3ok1RiOhYDBpzVFJ%2FIwcrWkgkkdVaJ5GDFdpZrq3J3PJ2WUVo0D%2B%2BtOTYdvFuGKPDZYE32rBzOXBB0yg2rak9qcn5bd2U%2FsCESBtqh71dKIFWTwQcTsNqRZFQsA1WThYYXxittj7Kgbto%2FNkVsRVgLggOa0rLeh9vQRPgWAUn8PbgYYPf0SaEP2RncqIZvwyeVWgu7xU%2FHP4cZEA0OMHaWk8sT4UYD9QtTPr9Gqt77ziMMgvZql7piIwvIdplrpGzaU%2BkfRD5ryfGwE6KMo1Dx%2FXO27vXisnBd2%2FaNRoXL0F4ele%2BsDtRO%2FvzhwZEXsA%2BeX80wkEK%2BdmrnonE%2FuQfDqEUS80JQD4UWZcr%2Bht4GriLi0WbaFuLXEcQmw9Fnv15vJ7T%2BLiyFMMUfTOgysZhlWPHNiOEBXoWS4PgPy3UyX8Ak%2F9huVA0U8uqOCoASnFsFR02DAagzvYz0A12sXokP8sMaOokGhrF8zYLilDOBNv07wiFrTWcq9D8kgzx5X8zwv3oigEkYCeoRRs0Ysl2UqBqqUkEpHvd6jPY9EdAxn%2FWj8KObUB9P7kHWT20HgVI4yTBhpIa12DsHXBONQwhK%2F2xAY6pgFtfPhbegs95HOHHsjjjU7qR6AALiq4G99SXDeqhLyu3XDNbmMtlH2CLXme7%2FrXFLqCjVKqHMCYYDemPHCDSFTwS%2BhxiTDn3qADal%2FnFbIDG4Ip7NFjF5koKj01O9A8IiZI%2BmnLjT1ZN0ur4qFaxlmREXtrn%2FTYvWBqa77IY13oIVOabYEb0lzi6yYH5nhOVtx13Jygp%2BwPkpgpIKiJFn933D1QzQnQ&X-Amz-Signature=00334f3f803d699576a42353c74aa3d2d8b20f114d12ba458eb1fbd3107782e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQKSXD4N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgRv5hb06to9jyQQy0%2B1iJtgNNs2RRwJqBSAUxTrESLAiAFAc%2BO7xsHgbGdhB9APS%2Fu8GULz5FXCX231YKJNyQikyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMBvaZnr7CKI0chvnIKtwD8vWXu5kqPgBmyhmUxHuzydOKpsEopfybr980Y6lW3ok1RiOhYDBpzVFJ%2FIwcrWkgkkdVaJ5GDFdpZrq3J3PJ2WUVo0D%2B%2BtOTYdvFuGKPDZYE32rBzOXBB0yg2rak9qcn5bd2U%2FsCESBtqh71dKIFWTwQcTsNqRZFQsA1WThYYXxittj7Kgbto%2FNkVsRVgLggOa0rLeh9vQRPgWAUn8PbgYYPf0SaEP2RncqIZvwyeVWgu7xU%2FHP4cZEA0OMHaWk8sT4UYD9QtTPr9Gqt77ziMMgvZql7piIwvIdplrpGzaU%2BkfRD5ryfGwE6KMo1Dx%2FXO27vXisnBd2%2FaNRoXL0F4ele%2BsDtRO%2FvzhwZEXsA%2BeX80wkEK%2BdmrnonE%2FuQfDqEUS80JQD4UWZcr%2Bht4GriLi0WbaFuLXEcQmw9Fnv15vJ7T%2BLiyFMMUfTOgysZhlWPHNiOEBXoWS4PgPy3UyX8Ak%2F9huVA0U8uqOCoASnFsFR02DAagzvYz0A12sXokP8sMaOokGhrF8zYLilDOBNv07wiFrTWcq9D8kgzx5X8zwv3oigEkYCeoRRs0Ysl2UqBqqUkEpHvd6jPY9EdAxn%2FWj8KObUB9P7kHWT20HgVI4yTBhpIa12DsHXBONQwhK%2F2xAY6pgFtfPhbegs95HOHHsjjjU7qR6AALiq4G99SXDeqhLyu3XDNbmMtlH2CLXme7%2FrXFLqCjVKqHMCYYDemPHCDSFTwS%2BhxiTDn3qADal%2FnFbIDG4Ip7NFjF5koKj01O9A8IiZI%2BmnLjT1ZN0ur4qFaxlmREXtrn%2FTYvWBqa77IY13oIVOabYEb0lzi6yYH5nhOVtx13Jygp%2BwPkpgpIKiJFn933D1QzQnQ&X-Amz-Signature=34c0a2fd27d955dad222889574a91c476bf6082b46ee87d3a8a84551791829fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQKSXD4N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgRv5hb06to9jyQQy0%2B1iJtgNNs2RRwJqBSAUxTrESLAiAFAc%2BO7xsHgbGdhB9APS%2Fu8GULz5FXCX231YKJNyQikyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMBvaZnr7CKI0chvnIKtwD8vWXu5kqPgBmyhmUxHuzydOKpsEopfybr980Y6lW3ok1RiOhYDBpzVFJ%2FIwcrWkgkkdVaJ5GDFdpZrq3J3PJ2WUVo0D%2B%2BtOTYdvFuGKPDZYE32rBzOXBB0yg2rak9qcn5bd2U%2FsCESBtqh71dKIFWTwQcTsNqRZFQsA1WThYYXxittj7Kgbto%2FNkVsRVgLggOa0rLeh9vQRPgWAUn8PbgYYPf0SaEP2RncqIZvwyeVWgu7xU%2FHP4cZEA0OMHaWk8sT4UYD9QtTPr9Gqt77ziMMgvZql7piIwvIdplrpGzaU%2BkfRD5ryfGwE6KMo1Dx%2FXO27vXisnBd2%2FaNRoXL0F4ele%2BsDtRO%2FvzhwZEXsA%2BeX80wkEK%2BdmrnonE%2FuQfDqEUS80JQD4UWZcr%2Bht4GriLi0WbaFuLXEcQmw9Fnv15vJ7T%2BLiyFMMUfTOgysZhlWPHNiOEBXoWS4PgPy3UyX8Ak%2F9huVA0U8uqOCoASnFsFR02DAagzvYz0A12sXokP8sMaOokGhrF8zYLilDOBNv07wiFrTWcq9D8kgzx5X8zwv3oigEkYCeoRRs0Ysl2UqBqqUkEpHvd6jPY9EdAxn%2FWj8KObUB9P7kHWT20HgVI4yTBhpIa12DsHXBONQwhK%2F2xAY6pgFtfPhbegs95HOHHsjjjU7qR6AALiq4G99SXDeqhLyu3XDNbmMtlH2CLXme7%2FrXFLqCjVKqHMCYYDemPHCDSFTwS%2BhxiTDn3qADal%2FnFbIDG4Ip7NFjF5koKj01O9A8IiZI%2BmnLjT1ZN0ur4qFaxlmREXtrn%2FTYvWBqa77IY13oIVOabYEb0lzi6yYH5nhOVtx13Jygp%2BwPkpgpIKiJFn933D1QzQnQ&X-Amz-Signature=f7d6f54e21059728a4f4aabce3920ef0f407a8b4a204f8d7b60773e94994b7c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQKSXD4N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgRv5hb06to9jyQQy0%2B1iJtgNNs2RRwJqBSAUxTrESLAiAFAc%2BO7xsHgbGdhB9APS%2Fu8GULz5FXCX231YKJNyQikyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMBvaZnr7CKI0chvnIKtwD8vWXu5kqPgBmyhmUxHuzydOKpsEopfybr980Y6lW3ok1RiOhYDBpzVFJ%2FIwcrWkgkkdVaJ5GDFdpZrq3J3PJ2WUVo0D%2B%2BtOTYdvFuGKPDZYE32rBzOXBB0yg2rak9qcn5bd2U%2FsCESBtqh71dKIFWTwQcTsNqRZFQsA1WThYYXxittj7Kgbto%2FNkVsRVgLggOa0rLeh9vQRPgWAUn8PbgYYPf0SaEP2RncqIZvwyeVWgu7xU%2FHP4cZEA0OMHaWk8sT4UYD9QtTPr9Gqt77ziMMgvZql7piIwvIdplrpGzaU%2BkfRD5ryfGwE6KMo1Dx%2FXO27vXisnBd2%2FaNRoXL0F4ele%2BsDtRO%2FvzhwZEXsA%2BeX80wkEK%2BdmrnonE%2FuQfDqEUS80JQD4UWZcr%2Bht4GriLi0WbaFuLXEcQmw9Fnv15vJ7T%2BLiyFMMUfTOgysZhlWPHNiOEBXoWS4PgPy3UyX8Ak%2F9huVA0U8uqOCoASnFsFR02DAagzvYz0A12sXokP8sMaOokGhrF8zYLilDOBNv07wiFrTWcq9D8kgzx5X8zwv3oigEkYCeoRRs0Ysl2UqBqqUkEpHvd6jPY9EdAxn%2FWj8KObUB9P7kHWT20HgVI4yTBhpIa12DsHXBONQwhK%2F2xAY6pgFtfPhbegs95HOHHsjjjU7qR6AALiq4G99SXDeqhLyu3XDNbmMtlH2CLXme7%2FrXFLqCjVKqHMCYYDemPHCDSFTwS%2BhxiTDn3qADal%2FnFbIDG4Ip7NFjF5koKj01O9A8IiZI%2BmnLjT1ZN0ur4qFaxlmREXtrn%2FTYvWBqa77IY13oIVOabYEb0lzi6yYH5nhOVtx13Jygp%2BwPkpgpIKiJFn933D1QzQnQ&X-Amz-Signature=c88c2766d1da580a8f4e29a63915ebdf67c8e2ac9a1e14306e1d74cd3105f607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQKSXD4N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgRv5hb06to9jyQQy0%2B1iJtgNNs2RRwJqBSAUxTrESLAiAFAc%2BO7xsHgbGdhB9APS%2Fu8GULz5FXCX231YKJNyQikyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMBvaZnr7CKI0chvnIKtwD8vWXu5kqPgBmyhmUxHuzydOKpsEopfybr980Y6lW3ok1RiOhYDBpzVFJ%2FIwcrWkgkkdVaJ5GDFdpZrq3J3PJ2WUVo0D%2B%2BtOTYdvFuGKPDZYE32rBzOXBB0yg2rak9qcn5bd2U%2FsCESBtqh71dKIFWTwQcTsNqRZFQsA1WThYYXxittj7Kgbto%2FNkVsRVgLggOa0rLeh9vQRPgWAUn8PbgYYPf0SaEP2RncqIZvwyeVWgu7xU%2FHP4cZEA0OMHaWk8sT4UYD9QtTPr9Gqt77ziMMgvZql7piIwvIdplrpGzaU%2BkfRD5ryfGwE6KMo1Dx%2FXO27vXisnBd2%2FaNRoXL0F4ele%2BsDtRO%2FvzhwZEXsA%2BeX80wkEK%2BdmrnonE%2FuQfDqEUS80JQD4UWZcr%2Bht4GriLi0WbaFuLXEcQmw9Fnv15vJ7T%2BLiyFMMUfTOgysZhlWPHNiOEBXoWS4PgPy3UyX8Ak%2F9huVA0U8uqOCoASnFsFR02DAagzvYz0A12sXokP8sMaOokGhrF8zYLilDOBNv07wiFrTWcq9D8kgzx5X8zwv3oigEkYCeoRRs0Ysl2UqBqqUkEpHvd6jPY9EdAxn%2FWj8KObUB9P7kHWT20HgVI4yTBhpIa12DsHXBONQwhK%2F2xAY6pgFtfPhbegs95HOHHsjjjU7qR6AALiq4G99SXDeqhLyu3XDNbmMtlH2CLXme7%2FrXFLqCjVKqHMCYYDemPHCDSFTwS%2BhxiTDn3qADal%2FnFbIDG4Ip7NFjF5koKj01O9A8IiZI%2BmnLjT1ZN0ur4qFaxlmREXtrn%2FTYvWBqa77IY13oIVOabYEb0lzi6yYH5nhOVtx13Jygp%2BwPkpgpIKiJFn933D1QzQnQ&X-Amz-Signature=3b84869b014ba146aac13d4244828a98edbaffb6a6e47ee5f27499531f4d1290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAND7HOC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmttiEWqMUVJlxZILzQzExLMTzZkS%2FTRfGyRWKec0W9AiEAx3%2BzhYSHE6hd6YcrUIT9DMGyAsYscvISgXgoL%2BYX49Iq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOwRvkH25f0PXvdGfSrcA3Xnsj9lkAoyMYdb1A8jH7%2BYKpznspOUy6V4nG1EMDZBkPlh1USEtIA7UeA5jxD32JndkmTUQ0ugBWggLa7dCv1c7kpZpicm5ugRW7B8NkneZ19iv7MtKIwGXg1am0S0CDfiF7ShzbOLnPpsTS6zF1flC2JjpLYyf1mtZiAIMo%2BODd%2Fe4FWJftFSVEmxstsTJ2ehaVYw5%2BeU1SE8RueEVty%2F2%2FVD26rZg3%2F%2Fgd%2F9Qbj6FiOzxuWqwZbpr2WcZRdwCCvFxgv%2Bn%2Bl7JDynsT2ZJT0YJd0hHdHJ19ZQNdwMhzZ%2BZvmRDefd8ByfZCAAKQ2GN4BXh2pmhU1PCNypbJmbZyjjekM1sO10P0gGUz7RueTxFKIlIUqFBdfUkres51kLQuefl1bwpPnl0TXsyfy5ULLnKj9PNLjG9s9leI2U06oVeTpK9Q7W9ELaJBtfp9SDf6b6Tx9g5Bhb7Dhva4SUFZ1fKOyHiqP%2BHghIp8RGbK1FSl4ZOLR%2BAKzxhGuO3WivW%2Bo9sdRzCKvUDjZlyVPuYt%2FdD9JPvKVLzMXdVmI5euVE%2BwnR5CXqR804IPqGweGOkgrrDXw78y%2F3fThUa4Aqe3YhoD33P67F6oT252p86%2B5BKkzZQFSqVxXd2kq0MOqv9sQGOqUBEbeY28zcI3P6b7af5Fb88MPNcex6V3x48qWBrP2j5QoJsTzD619ucmu%2B5%2Fgrxv6a7NhplyoGGmOjWZRIbW3y3DbmVbYzViu%2FcXAJaMR4b%2Faoud85eB8bhzCOnC1%2BlRVBqz52dC7ST3%2B4O7djWfVOm2t%2FFLb%2BpAP8ahsmleVxT0CObytYEgZnzzgSoqvqoOLiX3gr9WAqQ%2BYJ5sIxUZ%2F7o%2FYlTjQY&X-Amz-Signature=c4dfe155748ac031d811e1368107506ad804c3760bb5871f5997d50c5e5aadef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6WAAEIB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKjngkUIzl3qdvbURu4Unj1Nr0yujXO45exPT7aPjbiAIgbLj7GBWdZS%2FZLtlHDf3dIpioFXuwGY4BImXEupAsI1Yq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDaiL2I69tGP%2BSj0MircA%2FuQ2a472pu5ZZ2cDnhXMGl6eV1YzgQHvYxnCFnFXwSkSP0fjgXcXpLhAK5EpVLixd4Wn8o%2BYrwDd53H2tqTrvTm%2B%2FWxdMhLcHILmoxXNGkffpCE4rQwRyso39M3dUyFv5hl6oavlTMA74dOrClCajv3W2TC42DoxQlwwMXM05XIZcUKv1fV55ZsE6EQEApR2B3V%2FF%2Fi35lK2IO7%2B0E%2BCCYL6cEYMyJj0bVB9ucZPxHrLWf0QU2EuY6P99xmt%2F9%2BGvxcZxhECmkFSv%2FOgkQAOZ2f6wDJVfuY3V5gf0WFIF8Y9CvaNxG%2BUpKdvtT0tRJR2kc%2B%2F43vkD%2BnWZ3%2B0zFTRqDVIK%2F5%2BOTYF7Z2erAIBEWt0Er%2FZe262f8gNX7v0%2FVgYa9dYoqX8hR%2F1bYghwibQ9Suy13%2BpUV6JbpzLK9fzr%2BR5cESTLcFmX13PE5tSHAxMWXgZEb7yHs%2FMcONy%2FocTdOQlbW3jIqIn1ubhcKTi8X2cJ89kdN6pGlJ7RRyB2hW5aDUxsBNux5bNjjyulOWA5hninajArqcaXnOYhgQWHLN%2BezU1d%2BtegXGmLA1IZzJH1wfdYQMiXNofPpgC0kihAau6tjojZzhp77zxW%2BOJraTcx52FE%2BLfGjhVZJ4MO2u9sQGOqUBziQUZbKJSjFNBcadyvxxw2bp5LoEukG3jm%2Bp1x3j7b1PzcDGqOgsconIG%2BTM89BzftCh%2FJ%2B155ycR01RZGr6xqZ5srjcaC%2FabKkRnTf6PAX6zSdkVVTqZYxZcs9g5X5lwUSZLpYbtZ3Pc0yfzMSnOlqdvIfy%2B5cwyQDfGXDfui%2Fu63d4yH4U3XUGzA1%2F080tYtya0YoJfbuUFZzi8LI0NvFq%2FhOe&X-Amz-Signature=3a90e78c59de84e996c98a9151689d2523a7e23168991470718472ebf50d78b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57PCJTK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHTl8LVlFQivchDKRFZ%2BHz1uQldE4Cq9Y0YlTztsqSHgIgGgawOXGHu68sCncTn4%2B5TxjFKjhFu560RBOKm5eHlmsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAbu1c7kbsfOeilPGCrcAyVXba6H4uc0xH%2F2s8rzE%2BiZIzanQiR6IOhtDmzwV4iPM3karlWBWsVS6ZshfSOd9KD2JRUbJT9EY7eA9NDeRSx80yrm%2BY%2BjrfOFOmhq8hmnbrAySNiPtcwn9nF4qP4Z4zvAhUlwZAo%2FzrLgUofo1flpaA4bCYBJit8QEJ0E6uWrb6YAaIjN2S1JslJpLakm0gt0uxKpeFiCGWMjKkOjhouD%2BRbuuD2Q8iYLDt2VslpUxxHFw1CHztp3VgQSPZ7WH8XHprMlCajhK0wlQ%2F67VW9bvk3nHGqEQubmQah4gXLc1RXqTdZd125hNvWAWQOb%2FxGCYgZOzLME7Ff2R3h6AVIRVV4GcrVphCuvjfHfsvzP68ZFCQIXUqSmqZAofsIIiAr27QGrY9oH%2BlZ6AyWayvCHJ%2BT%2BK4B4bgtnblabtHX%2BN5ecUXnCthc8JKmaOWZo2isj5AYRyMKFREyaFx8MUhN3u8EAoSbXUmUMNgkdAPnnw09rXmJuPHzLnv6D%2FwHVdO6UZ7jMTUiQxs%2FTfkTTqzgznA62kuyjy%2BhApGFdBe%2Fb4H7NHC8TvDUyMLDnuuFZlkGPWFnXaisnq2CNrfBooX6IHa3LEzXONag0fARHsD8T49QzNUK%2BgCDJ4NVVMI6v9sQGOqUBTbjSWouPeW8EIQoxagDNNNgbmW2ygSu8WFnjMxa0hENPA5JI6gAtt6dRRc4s2i1HbsUTB9OQmz8Ctap%2FpdPqvHp9F%2F%2F1aw8SCzUhTUUNMfZQgPPfXD0hLn6Zp9173DigKnScGpyJJi9c3QBjIV5ZNfxvFqGh%2FUmyZc9C%2BeNjYLeBHfL61L2mkpQG0ZVWycUQhXjuaOBx2IuzVMlKIWR5K4tmChyL&X-Amz-Signature=28dea23c894aebbd2fce4fc46cae9bb71d7690be032a469c7fcf77780263f500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQKSXD4N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgRv5hb06to9jyQQy0%2B1iJtgNNs2RRwJqBSAUxTrESLAiAFAc%2BO7xsHgbGdhB9APS%2Fu8GULz5FXCX231YKJNyQikyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMBvaZnr7CKI0chvnIKtwD8vWXu5kqPgBmyhmUxHuzydOKpsEopfybr980Y6lW3ok1RiOhYDBpzVFJ%2FIwcrWkgkkdVaJ5GDFdpZrq3J3PJ2WUVo0D%2B%2BtOTYdvFuGKPDZYE32rBzOXBB0yg2rak9qcn5bd2U%2FsCESBtqh71dKIFWTwQcTsNqRZFQsA1WThYYXxittj7Kgbto%2FNkVsRVgLggOa0rLeh9vQRPgWAUn8PbgYYPf0SaEP2RncqIZvwyeVWgu7xU%2FHP4cZEA0OMHaWk8sT4UYD9QtTPr9Gqt77ziMMgvZql7piIwvIdplrpGzaU%2BkfRD5ryfGwE6KMo1Dx%2FXO27vXisnBd2%2FaNRoXL0F4ele%2BsDtRO%2FvzhwZEXsA%2BeX80wkEK%2BdmrnonE%2FuQfDqEUS80JQD4UWZcr%2Bht4GriLi0WbaFuLXEcQmw9Fnv15vJ7T%2BLiyFMMUfTOgysZhlWPHNiOEBXoWS4PgPy3UyX8Ak%2F9huVA0U8uqOCoASnFsFR02DAagzvYz0A12sXokP8sMaOokGhrF8zYLilDOBNv07wiFrTWcq9D8kgzx5X8zwv3oigEkYCeoRRs0Ysl2UqBqqUkEpHvd6jPY9EdAxn%2FWj8KObUB9P7kHWT20HgVI4yTBhpIa12DsHXBONQwhK%2F2xAY6pgFtfPhbegs95HOHHsjjjU7qR6AALiq4G99SXDeqhLyu3XDNbmMtlH2CLXme7%2FrXFLqCjVKqHMCYYDemPHCDSFTwS%2BhxiTDn3qADal%2FnFbIDG4Ip7NFjF5koKj01O9A8IiZI%2BmnLjT1ZN0ur4qFaxlmREXtrn%2FTYvWBqa77IY13oIVOabYEb0lzi6yYH5nhOVtx13Jygp%2BwPkpgpIKiJFn933D1QzQnQ&X-Amz-Signature=dbddbcef32c49d1bbf8d2491580795358d801b4357f1390b044be8deef7cb11f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQ3J4KS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI8gbXOPtWVk%2FT%2BPqXLEjRiSzzRcye0i%2Bo3uPMXOP3DgIgcOIdiqCVBImDve%2FfvVZwG1ANfTyHNVO5NIyeT9TpJxQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDNrWt4j09zfSJEjpvSrcAzjHBVIk8wiW1H6YysAngiMQA563QjWPzH27VoU4oE9QBBJeVLt9pVcg%2BbYKx2bX8aVESiiy50ZiPKwhqaKbyawb4NCvaj9xQWp8j3kAoZoD%2F3A0GbQCb3RqyCpiTK0UEZ%2FOsx4tm6qbJbYb%2FQ3%2FojE%2BXoSLd8xeyiJP4IvSi775L%2FsRzvfxm8PnW8qwdILBRw1T%2F4Y23OscT3fWlFnGlmI7ZzzxwGCRSs63i5P7UyNJ%2F7HcvGxvWeQ82gtS144WCOa31SKByday5irR4QXvHghy976i3KiFO%2BaDdpnEGe2hZrY8M78KAvBIZXmzPBVfDxsTvY1D3Bapl%2FMGJi0EEPfTJJuso9L9PzPvwEo0USeDEYjXyALi%2FdtW1AvZPAcEON2lhcYjipDDaQ48KMRTPUb4zV9Vj%2BLdm%2BEPqEWmfqUMuuLdJDGBvXKoYsSgB50SHdFsfrs6Y2iChc521P1hUD%2FU1y3dITqoE5CdYaYioqrh6j1mrfib5ByNCOovUeKEECrYS9WkvzraiHEI1GU9HKqSTl8U2b4dbKnRh0b2kwRQhmrWhWouyf56vOI68EYud%2BVz8klCFNu1atgrs6Ou1ngf%2FoJHvCr7oWdWV1gKye2qCKaf9QiQWPZWx%2FTUMLKv9sQGOqUBZmKbvG6d7Wv%2FLoSpMJm29v8xilcg%2FErRFgoo3tqCsFMC0Ej8GkOj5Vdcb6ejNGDD6NNVLPLEHwpSzss%2FJctsMIfjidIXOZy3C%2FzMZFuSArU8EMoOUmgIcvqkhDvauK%2F05fmPe%2FzG3lkjkyC0tpAvma%2FQY3Vxv1uxyp2%2BLEjmNyutTrzIfE0uVKmOyLhlJeR4fmI28eOFJvEivm6iS6eNvEjOAfe3&X-Amz-Signature=d302b9e16541a9a118af06f8d63e7d2dbd5e5628de07d25b338b4c67492c023e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQKSXD4N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgRv5hb06to9jyQQy0%2B1iJtgNNs2RRwJqBSAUxTrESLAiAFAc%2BO7xsHgbGdhB9APS%2Fu8GULz5FXCX231YKJNyQikyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMBvaZnr7CKI0chvnIKtwD8vWXu5kqPgBmyhmUxHuzydOKpsEopfybr980Y6lW3ok1RiOhYDBpzVFJ%2FIwcrWkgkkdVaJ5GDFdpZrq3J3PJ2WUVo0D%2B%2BtOTYdvFuGKPDZYE32rBzOXBB0yg2rak9qcn5bd2U%2FsCESBtqh71dKIFWTwQcTsNqRZFQsA1WThYYXxittj7Kgbto%2FNkVsRVgLggOa0rLeh9vQRPgWAUn8PbgYYPf0SaEP2RncqIZvwyeVWgu7xU%2FHP4cZEA0OMHaWk8sT4UYD9QtTPr9Gqt77ziMMgvZql7piIwvIdplrpGzaU%2BkfRD5ryfGwE6KMo1Dx%2FXO27vXisnBd2%2FaNRoXL0F4ele%2BsDtRO%2FvzhwZEXsA%2BeX80wkEK%2BdmrnonE%2FuQfDqEUS80JQD4UWZcr%2Bht4GriLi0WbaFuLXEcQmw9Fnv15vJ7T%2BLiyFMMUfTOgysZhlWPHNiOEBXoWS4PgPy3UyX8Ak%2F9huVA0U8uqOCoASnFsFR02DAagzvYz0A12sXokP8sMaOokGhrF8zYLilDOBNv07wiFrTWcq9D8kgzx5X8zwv3oigEkYCeoRRs0Ysl2UqBqqUkEpHvd6jPY9EdAxn%2FWj8KObUB9P7kHWT20HgVI4yTBhpIa12DsHXBONQwhK%2F2xAY6pgFtfPhbegs95HOHHsjjjU7qR6AALiq4G99SXDeqhLyu3XDNbmMtlH2CLXme7%2FrXFLqCjVKqHMCYYDemPHCDSFTwS%2BhxiTDn3qADal%2FnFbIDG4Ip7NFjF5koKj01O9A8IiZI%2BmnLjT1ZN0ur4qFaxlmREXtrn%2FTYvWBqa77IY13oIVOabYEb0lzi6yYH5nhOVtx13Jygp%2BwPkpgpIKiJFn933D1QzQnQ&X-Amz-Signature=ef11ab6d2f0d0c369046af007769f2ba8be076012271c9fb2937e2f1f3927c46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY6NQKFO%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICS4VJyBS69XKq2H4CnJsQUvzgKLjMtuoQv9Mr%2BKVoc4AiEAsORb0MA6DfiID3%2Bm17rmp%2Fo12%2Fr3PlaHf8sdJnl%2Bbs0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDCsAbWCr0vpmjQjKWSrcAwX0PPo4PFFi2MIqFrZ0D9CmuprSK3NDsTp6GQCqJVMS3apnJegTPZzxKxyQlJw5HKB5D1JcZlvCivQc3DB0I2NT6EHgSMFUssyWipF%2Faeod%2FSCFaQ%2FBtcJQPDwArJGCrWxhk%2BO%2BKC51y%2Ffvj6Cx1mxZv9cpGNmgSXRdt31sCaGwBtEMmwatqMpqyUsTnrK%2FR1DPp6e4RU08JfIHvydjri0oq%2Fzq70d0WtjwtOEBdCDB1JDDqvClV6cAvx%2BOtnolxwbN4iRIWvd3eVdmmUtIPBhgloj0bfW529EJUAnwfEFZHIX098yQMBbIk058AtPNsVf6cgI8ue5faYUUWnhUH%2Ff2J9hcKmTssbWTK1QnmYXXxd%2FxNVyIjOaCk4a95nKizVAbUZ8E%2B59JK5Y9hCkScM0WsZ%2BKOgJ8TTBX4q6A7jrv%2B8mCtv03e2P4wxck76hTBsQwm7PQ0cgfR5t41ICZzZ%2FAYSTFTGBLRG4UB3FET7Z%2BPP3WLPx76MLhRPXdefmqSmmR6us4kD8EQorI0KziQjMYWMQT4Ac%2Bd1lo0na6UBYeZTOOHVyenWXWL%2BVxTRyFB%2F%2FX4rv0b1qDmAs9%2B3ngTbICkYIJDChhUw5fLLCBxqOeJ47N%2F5MShVg0wI0jMIKu9sQGOqUBSFGZ%2F76OjKKIQ8xk24xZNCAhPHbZFlWG1ehCl1jbjoRjdjoeVbR7sbowMvVY2xyKHaItD2KffD7CdLIW8FAN6fxb1ZPjCYLFECXhb3t0fjKSxdOexqfMRlO%2Bz%2BlNyaH8l6z5j1d0lbjR124YYqnIrt8rYVoVC%2BHjpr3dv5%2Bn%2Bj5Ae3FFDKflGJqpTrS%2BdcCVKcqzSgN%2Fy3pHCmjl2YqijqWJohIn&X-Amz-Signature=8d8f1466536b6af70019f6fb1a876fcf1ea759f2cb0e2270945502a65e3ec574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQKSXD4N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgRv5hb06to9jyQQy0%2B1iJtgNNs2RRwJqBSAUxTrESLAiAFAc%2BO7xsHgbGdhB9APS%2Fu8GULz5FXCX231YKJNyQikyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMBvaZnr7CKI0chvnIKtwD8vWXu5kqPgBmyhmUxHuzydOKpsEopfybr980Y6lW3ok1RiOhYDBpzVFJ%2FIwcrWkgkkdVaJ5GDFdpZrq3J3PJ2WUVo0D%2B%2BtOTYdvFuGKPDZYE32rBzOXBB0yg2rak9qcn5bd2U%2FsCESBtqh71dKIFWTwQcTsNqRZFQsA1WThYYXxittj7Kgbto%2FNkVsRVgLggOa0rLeh9vQRPgWAUn8PbgYYPf0SaEP2RncqIZvwyeVWgu7xU%2FHP4cZEA0OMHaWk8sT4UYD9QtTPr9Gqt77ziMMgvZql7piIwvIdplrpGzaU%2BkfRD5ryfGwE6KMo1Dx%2FXO27vXisnBd2%2FaNRoXL0F4ele%2BsDtRO%2FvzhwZEXsA%2BeX80wkEK%2BdmrnonE%2FuQfDqEUS80JQD4UWZcr%2Bht4GriLi0WbaFuLXEcQmw9Fnv15vJ7T%2BLiyFMMUfTOgysZhlWPHNiOEBXoWS4PgPy3UyX8Ak%2F9huVA0U8uqOCoASnFsFR02DAagzvYz0A12sXokP8sMaOokGhrF8zYLilDOBNv07wiFrTWcq9D8kgzx5X8zwv3oigEkYCeoRRs0Ysl2UqBqqUkEpHvd6jPY9EdAxn%2FWj8KObUB9P7kHWT20HgVI4yTBhpIa12DsHXBONQwhK%2F2xAY6pgFtfPhbegs95HOHHsjjjU7qR6AALiq4G99SXDeqhLyu3XDNbmMtlH2CLXme7%2FrXFLqCjVKqHMCYYDemPHCDSFTwS%2BhxiTDn3qADal%2FnFbIDG4Ip7NFjF5koKj01O9A8IiZI%2BmnLjT1ZN0ur4qFaxlmREXtrn%2FTYvWBqa77IY13oIVOabYEb0lzi6yYH5nhOVtx13Jygp%2BwPkpgpIKiJFn933D1QzQnQ&X-Amz-Signature=53e2210e6d02e1639d24ee168b2bf09c624b39c000c69dd6e4011146752ac1e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USSAMZFV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt6nueKKxGUyer6wAUKF%2FF5fXybK8FxHAxdra6ReZYaQIgF7enNRAN6sw9GqpbfXH%2FUQEEnOqnObyn6v6WUAptf6Mq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDdHHMK550qnTLP8XyrcA3W%2FN87Z5eVc%2FKLJdjYnyhINqMdTEx5SEklMFSN01cgAyiCf71XDUt8Eh2aOz%2FoozhWWKeb9ZAh%2F7U17C%2FiGzbVbwCt50ntUdYLyZZYcjhj85AHDnysuXxLLArh5dROQlVqlWpbc1xlusRJOPWeLZu2UevDuCFkqXLVwwphCXb77%2B2s3MJDWr%2BeyIHWXUHJu%2FAXsPh5ue5tZ2sjdXLuChlrtZOO2Vlo1v6Eu6MSEJvvj3j2NX4ezIYtTeD7ChXrMb0DbyYhB7xrS%2FJKzY7JUbBQnJ3gSBKM4CfbEBJrfTmVmT2tqjjgnPN05SgmFww%2FirMaUi7VaU3ppxTEH0E26R0VaLBEoJ4PUVxq6WaFLoGbQrTLVmIN5VSknOZ9VTWUBFbBa2%2BHqU87VOotu0YrFdrqhCT%2FhcRlMIa7Ivj48HGVjiBfktF3uGsq3dm%2F4SRGPBH88isC7SQAYh2obQTK2dvSdGOHLXsTTRnK1ICZV8Wh81wU%2FHMVdcnZr417A%2BTMNDHhpl6ru3bxiUds1hiZnoQ8p9p4b1phr%2FNOj0ULDY9qVv4KrgNTPg4xtvevaRthoVzdNSZFUQWnhY0a%2Fx0Yl43pcFn3BrhMzPth7ZqeDajG0bP%2FyiHbz574jNMcWMJyv9sQGOqUBVWxXra4BvhZBDFnI9sq2zA7znmoQkdvz8xEVSqEzCnSYrsXX97p8BlxN5xyPZ00d6nbJMMkxshDVihaTBt4iUW14gpWBtFgX3nAU8GC1c4TxPNzFYbQDncqcYf3aMkrQYjxM%2F2xSNoWHjtrvtWdr1RSSvzkSENFm9bY843h14JNrlHdZ6xojuoCUh1dZyAt4jEU%2B67RHwJFAdyR%2FXuHkg%2FWKEZ%2Bf&X-Amz-Signature=0e036748f62f625262267b90e735e06d16cfab8a56560b4b5be600aac6b87833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQKSXD4N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgRv5hb06to9jyQQy0%2B1iJtgNNs2RRwJqBSAUxTrESLAiAFAc%2BO7xsHgbGdhB9APS%2Fu8GULz5FXCX231YKJNyQikyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMBvaZnr7CKI0chvnIKtwD8vWXu5kqPgBmyhmUxHuzydOKpsEopfybr980Y6lW3ok1RiOhYDBpzVFJ%2FIwcrWkgkkdVaJ5GDFdpZrq3J3PJ2WUVo0D%2B%2BtOTYdvFuGKPDZYE32rBzOXBB0yg2rak9qcn5bd2U%2FsCESBtqh71dKIFWTwQcTsNqRZFQsA1WThYYXxittj7Kgbto%2FNkVsRVgLggOa0rLeh9vQRPgWAUn8PbgYYPf0SaEP2RncqIZvwyeVWgu7xU%2FHP4cZEA0OMHaWk8sT4UYD9QtTPr9Gqt77ziMMgvZql7piIwvIdplrpGzaU%2BkfRD5ryfGwE6KMo1Dx%2FXO27vXisnBd2%2FaNRoXL0F4ele%2BsDtRO%2FvzhwZEXsA%2BeX80wkEK%2BdmrnonE%2FuQfDqEUS80JQD4UWZcr%2Bht4GriLi0WbaFuLXEcQmw9Fnv15vJ7T%2BLiyFMMUfTOgysZhlWPHNiOEBXoWS4PgPy3UyX8Ak%2F9huVA0U8uqOCoASnFsFR02DAagzvYz0A12sXokP8sMaOokGhrF8zYLilDOBNv07wiFrTWcq9D8kgzx5X8zwv3oigEkYCeoRRs0Ysl2UqBqqUkEpHvd6jPY9EdAxn%2FWj8KObUB9P7kHWT20HgVI4yTBhpIa12DsHXBONQwhK%2F2xAY6pgFtfPhbegs95HOHHsjjjU7qR6AALiq4G99SXDeqhLyu3XDNbmMtlH2CLXme7%2FrXFLqCjVKqHMCYYDemPHCDSFTwS%2BhxiTDn3qADal%2FnFbIDG4Ip7NFjF5koKj01O9A8IiZI%2BmnLjT1ZN0ur4qFaxlmREXtrn%2FTYvWBqa77IY13oIVOabYEb0lzi6yYH5nhOVtx13Jygp%2BwPkpgpIKiJFn933D1QzQnQ&X-Amz-Signature=d3a115a6e948339804f0786d95946bace24f34e54abb38abd8a50113c1955058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ6GARBO%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNiIqdbOIH6x%2F4U7JrYIhRJF4mA2gttw0vXGZu7XvQaAIgHUfbEO8eIUeOkpIhfYqgvgvFl5mqtqFaasx9yjczFrQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHzq4AP%2FO819tOD5fCrcA7q3WlhFptDuHz5XVKnkstbmFOvPQhcTA%2BGFMEmf5yjsaiWEPaqWcoC5VToaCHBGqAhy6dVfjaQtK9T45T1Pn0MhhONrnxDgCLdZRHitWxVTOPd1X9aNYMtvxXytJpizFUMX2M1TY4KEp6dIQEbY%2FKoox0zb12DJM9kRE9wwF1oh%2BmtY4j6t38aUi38NLYQDRfY2BL9dZBJxv8CAOP1cnEwt4F9VfiFTJ1RagPZIxwPYUW%2F6SbcX9KpEgQB3dwhFex46WoFtMutz8094Daz0SNZKEMQAWXoMJONxt5feYbEfZplz21sFK5ulacFZ%2FN8UHblM5MxZxHBVNUZ0%2FpWP8Hs%2BFHzbAY9gDV02Lu5adqX42T493JxR0wTD3nHCuDxRCOFE%2FezL0s9CGIfMkvI5P8RDhpbr1S6BSah32aMCo1IjxXt7GshkuwKfSAOuFOcEMCgrXn3fK0JMecV9g4gdRj3ocv6fS%2B0Ry%2F5gtedcnI9yO0N0VOdIpQk7FWPb73XTFn%2FG4pgtRNM4dLOr%2FhsAESI84svTPvwuweZbs82Ytw5YRLm9wSusfU9%2BO7l%2Bo7u6pVp547gHa2AdvYfVHBAo7hj4D8sDrD53qLuqi2uSqLh9nZzff88AQ5%2BCxd1qMK6v9sQGOqUBCuqRCGL9AxiQNphzf5vNGTMDxt58%2BjfMp75KTSqJ%2FIOpI8d287MFvgFeLb1WgMFbDgQlDreW26TTpfdRz6b3AUkx3hUgoxliD%2BE0jZivyzhlQdzQTR4nucjQZRb57mAuucY0YRpLdUX1YQSUdxzJ6v7GeAo%2BhOY6GhhkN65%2FI7PTtOgGR1K8nIk8olRi%2BbmtRUJ8P%2FNt0ChijnfnGoiwyvmH6L9B&X-Amz-Signature=ffecd7281b99a5497f2a6274411af0e2594760af0566480d3718effddac3cdfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFNX2QSH%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BzR8Gbj3dHC2qmDA%2BEmoSRUTIRy2By44vpzL2jIk%2FbAiAsGKkgHQYtweNQaIaYTxY6toZllg8FnZ%2B%2FY3DpuVcsRyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMzhTKQrUYoTD0mG%2FPKtwDTD4bLDK2ALjPqJPZbhZM17kvDAIhAYHo0tiP%2B2M%2Bi6FThLiydYH%2BVuwdZD1eU8vVHzySHllLFh1hk8r%2BxbjNtyoAOjCpvVQI2K%2BsAgilMNw7pxCLBGeNJ7XXIUNUxfe3MXuHQ7iv816UoUmZZHXDsNHCIorJmRKe6k8tWHczDc%2FTwCvgatWw%2BYUMv8uYDZr5rpIQoFIH%2Byr8ZFVeVdOXR3keGUohEe6vl9fWzaNi3OUWaYaiqQU8NYn8IQtPvbIu75t2RxTc4RUV4vHibWJJiU7GEf1dCgYsHButetnfeoFn8FmQ4UWKjj4eI1NEV9aqLhxfqgDgoRDu33Y%2F45AOUIo7yJj8Pug5DM4UJqVvtuGEhbPLcLF%2BauRAlk1Z%2FMy8X8%2BQVwCPz26ezD4scLABWQaIWuaguJ9PsnwnxOt9DAcGwGZetNuR3ba72u2cs7YzIbxfrut%2Boe6JKJDWqMoHhU5yF7ZOls3GfX1jQSZKau9cvUs4crIsvckOxQAM90jxal0D2PayQdquLE2PkdjDjqr5MagrfXv0iBkQZObhd9dD3vRRtFyVg1WR0tATa%2FXDitJ9htdYmaFss5C4vOuRlglfEvz%2Bo28tm%2FSIjKaUn6mEkwBML%2FvLyS0Yj54wga%2F2xAY6pgEHyvUFSWlfqbvdgfk%2BbO0MfUwXh8I9TmLj0Z6YkRy1Yk6Xeart1d1tqECOOnQoJNPifYihUBbmY31Iqcwqs7JAwXaeop80Mc0pc2mkPccVGF9BCjxhVmPbVCvlZI7lGi8lyJoog7g%2B1Tih%2FG2mNnmaE0Rh4Jy2dGrUHd8gliBrMwrfeYzIaH9qLb4GGufmNNKFCiAtOmjaqIyujjnNKu4cu6sCtolY&X-Amz-Signature=6e8c8828fcc0e697559d851f205c1ffc7f159e29a99fd821049e33c0f2a5b650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN62TEDX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1rQ%2BBpzrqWvRdHbLmlSxtXwieEA9apABpSI0IKOLfqAiAXUV8z9XUhutDxvPMai2SemtV4YnNHie%2FD%2BXMNywXHCyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMvSouuWR5fITsqJ9PKtwDU10uhIIQzl82%2BC4vWTWcL4B0IcZ5e4PYndrfrcn4w1gcQczBuVv1w6aF3DFs%2FaktCSpNvyjhPAGX3IoiRT783azCeXG%2FCazaxjAd1sSSoXQSEcySHx3KgzqJasqORFC5xWFVRXP6m%2BWTBCjT%2FebHh%2F2FZXcvK9TzdYFRXYyynwM9bgiDCD4xOhJMQk9oxbnq7dVOjRBGQ4Y9ktetC2lS9vppVEL7F%2FQ7v5grgz6ie8HAuFfDPbgS83z12SDj%2BLCrgaGigVC1hFYS%2BNkp81YM0%2FU1zanmas1JNXV1rJcllishvIqBYSmbCCCh10DFt0dgx9r6j4XxO0XrkbYI2mMkcgotwVhPs%2FcmX4cpgKHqgQai1%2FZLCBG2NMdRTusJcjz48NDSLUVfRFYrcd7deV928koZ9%2FqhIK9AlHlMaMvURxnbrHiF%2BUXB6CvtP3QEZVuNEMyeZSEYb7jauKaKEJ59WB5QfMWsbqX55W7yZzK0oVV7%2FYLfwGcdp2uuOn%2Fzh4rCZIMo75Yk4GY8tPoMc4OtMZLvnz4HzeyrfeKA7xURG65ET3x3RO%2F5%2FvCt9bdcRAainCxRry8iVi9HNdmnIQegVlET2IwMHJDbz5rAbniaNjBDnktylmv5%2Bqi%2BHTMwka%2F2xAY6pgFDRPndn8yTL1F8P2LgJ%2Bd3HKNF5IXgDAmvuMsxahtzmE6mSHDUfEfvf7kHdfI9jnbfXG8UkkhBwbAm9DUyxjpc99OUwNHk6GaQwhDJNPGRIJXYg%2BfCh%2B5Ji09kjBTO08NlrYPQWdue1tO2t088sCBTpENd6TbWis5EBig8ZGo%2BouQjvoYaTt6zDG4ldnb%2BPd53O71ktScOzPkgqWWi%2FtwjoDcWPsOg&X-Amz-Signature=1b7600cb86b91844b9b6e72484c8b65b4b2080ad0d9aeea2ed018eff13cc1c6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VACCL6EI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmpyc%2FmWVToWL8c8mhz1dQGV9eCAarR7o2PDxsmQDTWwIhAMcjqADdBWWCwZ4nvNk758rqllgk%2BJk5Jwiqs1QGDYebKv8DCEEQABoMNjM3NDIzMTgzODA1Igwt8ffxv6Xi9Lc7FfAq3AMPz6GdZDgItZjMG1lnrLPUDX8j2ATAuLgOZcxiffxjdTZNBY3PlJPlwBerFyMIb%2Ff132Fl8YP55t89J3P%2FQyskwt1BVCuGYw0Yqaav89dBNo3l0ckl%2Fhb2M0lc9kuOSG9MbNZnvIv88n58RwbbEggAEnLdeYM8XQPO8Yg%2FsDqBKjO0y9H3bVeqC%2BkFFimDSPWI9ZrcAQVDam9%2B8chirEwOmhwz%2FDbxXh80hJ1rqrPuCKCIaIGlSbYRA2xpmZejNEwXEDiB2%2B%2BEawG02TTRCvR6HIHyF95ek7tlx7m9diVKGtVFMfkb7nLEGPOOVdUmmuO9P%2B7TbFedPmwEMFtN%2Fuenw%2FPlJFG3Hh6UEHR6EG715NL8DS1sb8q7kW%2BzNmnuJ5kqoPnBHczzYNMHeeF5lgMPzw6h945XaAYsSaxkO94YLA5bgEWEKsNdDTnS1jdyMepVNnu1qygpMVrkXO2fPpzzNj4Ek96QE5yzu49FB1KSOYIYhwIUHJi%2FY5LcDWZsVtyIOr2FxIMkgQGFiJFWJ4p9dYyrQ2oyZC%2FTvLRHPthFRzj%2B1uca213TuYSVD%2Bu1XaI0AUlk2StpnhhhnBzIT2gALEUvzkwm%2B%2F5l%2F249dUA7HhGsLfTBk9jOdD6FSTCDsfbEBjqkAStLpdEq8YeWBPMPevpSrRS%2Fo4U1FQFuCXnKs496ah3j%2FgMNWlEdfty5a6U1%2B%2F9R2tqIclTmfuMhXterTN93K5wT1cQMjN6AMudea1phiY8fBQfO%2BcafX10S%2F6EW6QGTZhKjoxVwFtivku6Jm9Iftgp2O675l68HN4jFC7nkMhr%2FWqn%2FLsVTYmJg3f8dm0pU3Zw8AyMuZxYBRIn1MOLp9FH03kkl&X-Amz-Signature=f65dec75737e98ab92abe58f88aa783e4a0ecffd8dd9b8a410805370ed5e9a09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DETAUBJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrpWsj%2FC1bH5yJOMDyJwfYUnLzMBBnN99B4eV3Fqe3dAiEA2WMi8nEsafyzTSD9rVTBkWJjF5aYWQtSpU0S9GQ6FmQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHOyYgqRML5Xx6BAkircA%2FwfRM%2FmglUOrLdY8FrRffmx7fmVBM6qs3AAK%2BHMk3%2BKnKjRIz1GNqrDcBqpuYGT%2BfMuJwkyCUynVX%2B%2FrBTIREgEw1%2FQLGVPeVGm7oR5D5L%2B1S45GtZ1bLwRsc3GrOZaO7ooSYxYx7UyWF54%2FcKEYFOw%2FPDUobFmPGsAOKbwGfuqKy8mj0YWkkW76vqF9yWeWLc%2F1zjDOTR%2FKzl%2FF9cqGqXXtIunWvlks861tn7bgp29Yu9YnzvHDkyMrTffKwyRkp2QfeljwuwuCDRfWZgYnlh95BT0IE3xPOF5%2FpRFkMrWwICcB4e4A5x63Fg947sgG9xHwK1SCaFKKsxByHBnn0P2nEKS0%2BzAV3pS8t1WTWaYyzse8H%2FNd6q%2BCN487jCHNvlxqH50K1PX%2FlDrB8bR%2F%2FsXJFFUVgdvNlJdOnE1zZClw4WnPxPjOQ4pWhxKqFWVerMQ71AI4AhmtTcAwtTNlvb%2FeNBrYXOyZXKi5FLepRWIUUlCMnc%2FuYKfNYY0QzoMQMekCQHt%2F7Od%2F%2BWsFPrqc8j2pUQB93w9%2BGpogMlAcxZfeggnDGmE9sv4ozjr65gEmQJb3ZWX8sDxJxQMGSNZNL65o2uelWEDGyJTKYlwskjGpbSjhc%2BZyjb%2BA6AeMPqv9sQGOqUB%2FUcauMKa2J8wcNS0%2B9Rqp%2FNanjJuBxfTdmWyLfwS0COby%2Be%2Bx5uQHrTu1UqGs%2BJ5FkoFcI%2BFKi0y%2By%2FF5EYSgw9I2YM4JWCsECkGAB%2FQyD9XrLdoAE74di3U12jEVZWXoKr7SHqnwexrmLT8skPLLqAuVT57Yk5D05C4ofh4QSTJij77Lk83FVb1L89sNuSqbdzxW929XQpgufplToq337N2Dt%2BR&X-Amz-Signature=96b717f4fd76881c6b5bbfb90bbd3ead86e65974aed0971061a9e39a923178a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQKSXD4N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgRv5hb06to9jyQQy0%2B1iJtgNNs2RRwJqBSAUxTrESLAiAFAc%2BO7xsHgbGdhB9APS%2Fu8GULz5FXCX231YKJNyQikyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMBvaZnr7CKI0chvnIKtwD8vWXu5kqPgBmyhmUxHuzydOKpsEopfybr980Y6lW3ok1RiOhYDBpzVFJ%2FIwcrWkgkkdVaJ5GDFdpZrq3J3PJ2WUVo0D%2B%2BtOTYdvFuGKPDZYE32rBzOXBB0yg2rak9qcn5bd2U%2FsCESBtqh71dKIFWTwQcTsNqRZFQsA1WThYYXxittj7Kgbto%2FNkVsRVgLggOa0rLeh9vQRPgWAUn8PbgYYPf0SaEP2RncqIZvwyeVWgu7xU%2FHP4cZEA0OMHaWk8sT4UYD9QtTPr9Gqt77ziMMgvZql7piIwvIdplrpGzaU%2BkfRD5ryfGwE6KMo1Dx%2FXO27vXisnBd2%2FaNRoXL0F4ele%2BsDtRO%2FvzhwZEXsA%2BeX80wkEK%2BdmrnonE%2FuQfDqEUS80JQD4UWZcr%2Bht4GriLi0WbaFuLXEcQmw9Fnv15vJ7T%2BLiyFMMUfTOgysZhlWPHNiOEBXoWS4PgPy3UyX8Ak%2F9huVA0U8uqOCoASnFsFR02DAagzvYz0A12sXokP8sMaOokGhrF8zYLilDOBNv07wiFrTWcq9D8kgzx5X8zwv3oigEkYCeoRRs0Ysl2UqBqqUkEpHvd6jPY9EdAxn%2FWj8KObUB9P7kHWT20HgVI4yTBhpIa12DsHXBONQwhK%2F2xAY6pgFtfPhbegs95HOHHsjjjU7qR6AALiq4G99SXDeqhLyu3XDNbmMtlH2CLXme7%2FrXFLqCjVKqHMCYYDemPHCDSFTwS%2BhxiTDn3qADal%2FnFbIDG4Ip7NFjF5koKj01O9A8IiZI%2BmnLjT1ZN0ur4qFaxlmREXtrn%2FTYvWBqa77IY13oIVOabYEb0lzi6yYH5nhOVtx13Jygp%2BwPkpgpIKiJFn933D1QzQnQ&X-Amz-Signature=76d1d314d187a5f549e6fc8a213d5d7a703b9d1a54b9110c32e854359ee98e0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQKSXD4N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgRv5hb06to9jyQQy0%2B1iJtgNNs2RRwJqBSAUxTrESLAiAFAc%2BO7xsHgbGdhB9APS%2Fu8GULz5FXCX231YKJNyQikyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMBvaZnr7CKI0chvnIKtwD8vWXu5kqPgBmyhmUxHuzydOKpsEopfybr980Y6lW3ok1RiOhYDBpzVFJ%2FIwcrWkgkkdVaJ5GDFdpZrq3J3PJ2WUVo0D%2B%2BtOTYdvFuGKPDZYE32rBzOXBB0yg2rak9qcn5bd2U%2FsCESBtqh71dKIFWTwQcTsNqRZFQsA1WThYYXxittj7Kgbto%2FNkVsRVgLggOa0rLeh9vQRPgWAUn8PbgYYPf0SaEP2RncqIZvwyeVWgu7xU%2FHP4cZEA0OMHaWk8sT4UYD9QtTPr9Gqt77ziMMgvZql7piIwvIdplrpGzaU%2BkfRD5ryfGwE6KMo1Dx%2FXO27vXisnBd2%2FaNRoXL0F4ele%2BsDtRO%2FvzhwZEXsA%2BeX80wkEK%2BdmrnonE%2FuQfDqEUS80JQD4UWZcr%2Bht4GriLi0WbaFuLXEcQmw9Fnv15vJ7T%2BLiyFMMUfTOgysZhlWPHNiOEBXoWS4PgPy3UyX8Ak%2F9huVA0U8uqOCoASnFsFR02DAagzvYz0A12sXokP8sMaOokGhrF8zYLilDOBNv07wiFrTWcq9D8kgzx5X8zwv3oigEkYCeoRRs0Ysl2UqBqqUkEpHvd6jPY9EdAxn%2FWj8KObUB9P7kHWT20HgVI4yTBhpIa12DsHXBONQwhK%2F2xAY6pgFtfPhbegs95HOHHsjjjU7qR6AALiq4G99SXDeqhLyu3XDNbmMtlH2CLXme7%2FrXFLqCjVKqHMCYYDemPHCDSFTwS%2BhxiTDn3qADal%2FnFbIDG4Ip7NFjF5koKj01O9A8IiZI%2BmnLjT1ZN0ur4qFaxlmREXtrn%2FTYvWBqa77IY13oIVOabYEb0lzi6yYH5nhOVtx13Jygp%2BwPkpgpIKiJFn933D1QzQnQ&X-Amz-Signature=b0bfb3b9eecfa964fa092cb8f48227efc31427d13c4536604379bb084614764c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK2IBQIQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBqqBrys5kE0uBmFZ2K0HbErvrf5ZYgRbQpKAiY6KyYgIgBnQWYZz08hkW6Vu0nJZMkL5iAphoflbtdC1Bhisia7Yq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIs0J%2BQVZja0FYbRJCrcA%2F%2FWzZ9YbjSiycfDYekQzvq7A1Y2fPgsvEDToLosObUbyfL9AZTOGuf7c9XY4Da4afqDkKfIaWCDl2awGkevU26YIMSHMe7zGhNd8tPKyo19lJajtYk3QUBoLKliC7%2FnAf7%2Fb6AlFb%2FI424dThXMfnJ7Do5j8sPCcYDGaVZ6HZem%2FoQ6CFbfxmn%2F5MW8Nu5200o4FqEbTFOchsN2yss9YLtfG%2BBcnV2fUHuXaDk%2FGjQHYIhw%2F%2FWz0hfwZG5GkzMRhRGl9sQpYyXNaZ9tmArNkw%2BzUbqRKhvrDtRrhnpY2KlQ5XcD9E7OfqmkQR%2FLODk9U5iNaAX9JbdCT9VGZ8ojeJ3bx76HGl5sGoUeFvot3OmLeghvF1QzT2jGOxvd3%2BqNGrDt5LYOLNCiNlfK628NfbWnuTYmxvwIl6frSFJc6k7xDXLbikUsedQqKeKzeBaG0dCe003rwdK3DLXt0e31OORQXa0J8Rton3e1w7UBWsEdleE8Bu3BsMB53lKJ01OanYCijw4tZog5SfOIVuAWcSpjka5wBnbiL7B4VHHosjvzy%2BjrFO1pVIg5%2FAugyurZERLzhHoYiF%2B6MZ0swOlaAeygUas2lAOHYB6ZljebHuYaktq3%2BOf4FWeBC66mMIiw9sQGOqUBQL%2FHsHUKVk6wM%2FnsqDU6%2FZviYvtSU9w9WuPBr%2FWEq%2BfPuQ275pZPnSUMZTlkFeykjIIKre6o%2BZ6ACwZoamPCr5O5aGmUcon%2BnhIwSmgeaJ6dQ7aFCAge4AhQ%2BVNUW9Dxx2IdYRWHVN8tuat656eTB8tM3oBJXWyoA%2Fe8b46L0f3jEyaGZWRrlXzOGznaGM6KcDTS25t4Ae9icx19hAM1A3AgmOX%2F&X-Amz-Signature=e8dbb88807457727566d36257b22421f0a34306b8c185ac506a03e816f39ed8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK2IBQIQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBqqBrys5kE0uBmFZ2K0HbErvrf5ZYgRbQpKAiY6KyYgIgBnQWYZz08hkW6Vu0nJZMkL5iAphoflbtdC1Bhisia7Yq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIs0J%2BQVZja0FYbRJCrcA%2F%2FWzZ9YbjSiycfDYekQzvq7A1Y2fPgsvEDToLosObUbyfL9AZTOGuf7c9XY4Da4afqDkKfIaWCDl2awGkevU26YIMSHMe7zGhNd8tPKyo19lJajtYk3QUBoLKliC7%2FnAf7%2Fb6AlFb%2FI424dThXMfnJ7Do5j8sPCcYDGaVZ6HZem%2FoQ6CFbfxmn%2F5MW8Nu5200o4FqEbTFOchsN2yss9YLtfG%2BBcnV2fUHuXaDk%2FGjQHYIhw%2F%2FWz0hfwZG5GkzMRhRGl9sQpYyXNaZ9tmArNkw%2BzUbqRKhvrDtRrhnpY2KlQ5XcD9E7OfqmkQR%2FLODk9U5iNaAX9JbdCT9VGZ8ojeJ3bx76HGl5sGoUeFvot3OmLeghvF1QzT2jGOxvd3%2BqNGrDt5LYOLNCiNlfK628NfbWnuTYmxvwIl6frSFJc6k7xDXLbikUsedQqKeKzeBaG0dCe003rwdK3DLXt0e31OORQXa0J8Rton3e1w7UBWsEdleE8Bu3BsMB53lKJ01OanYCijw4tZog5SfOIVuAWcSpjka5wBnbiL7B4VHHosjvzy%2BjrFO1pVIg5%2FAugyurZERLzhHoYiF%2B6MZ0swOlaAeygUas2lAOHYB6ZljebHuYaktq3%2BOf4FWeBC66mMIiw9sQGOqUBQL%2FHsHUKVk6wM%2FnsqDU6%2FZviYvtSU9w9WuPBr%2FWEq%2BfPuQ275pZPnSUMZTlkFeykjIIKre6o%2BZ6ACwZoamPCr5O5aGmUcon%2BnhIwSmgeaJ6dQ7aFCAge4AhQ%2BVNUW9Dxx2IdYRWHVN8tuat656eTB8tM3oBJXWyoA%2Fe8b46L0f3jEyaGZWRrlXzOGznaGM6KcDTS25t4Ae9icx19hAM1A3AgmOX%2F&X-Amz-Signature=bc87a0a868872de45b6462c94f9db52ab94bb04d748e753d619b8ae7ad66b900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK2IBQIQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBqqBrys5kE0uBmFZ2K0HbErvrf5ZYgRbQpKAiY6KyYgIgBnQWYZz08hkW6Vu0nJZMkL5iAphoflbtdC1Bhisia7Yq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIs0J%2BQVZja0FYbRJCrcA%2F%2FWzZ9YbjSiycfDYekQzvq7A1Y2fPgsvEDToLosObUbyfL9AZTOGuf7c9XY4Da4afqDkKfIaWCDl2awGkevU26YIMSHMe7zGhNd8tPKyo19lJajtYk3QUBoLKliC7%2FnAf7%2Fb6AlFb%2FI424dThXMfnJ7Do5j8sPCcYDGaVZ6HZem%2FoQ6CFbfxmn%2F5MW8Nu5200o4FqEbTFOchsN2yss9YLtfG%2BBcnV2fUHuXaDk%2FGjQHYIhw%2F%2FWz0hfwZG5GkzMRhRGl9sQpYyXNaZ9tmArNkw%2BzUbqRKhvrDtRrhnpY2KlQ5XcD9E7OfqmkQR%2FLODk9U5iNaAX9JbdCT9VGZ8ojeJ3bx76HGl5sGoUeFvot3OmLeghvF1QzT2jGOxvd3%2BqNGrDt5LYOLNCiNlfK628NfbWnuTYmxvwIl6frSFJc6k7xDXLbikUsedQqKeKzeBaG0dCe003rwdK3DLXt0e31OORQXa0J8Rton3e1w7UBWsEdleE8Bu3BsMB53lKJ01OanYCijw4tZog5SfOIVuAWcSpjka5wBnbiL7B4VHHosjvzy%2BjrFO1pVIg5%2FAugyurZERLzhHoYiF%2B6MZ0swOlaAeygUas2lAOHYB6ZljebHuYaktq3%2BOf4FWeBC66mMIiw9sQGOqUBQL%2FHsHUKVk6wM%2FnsqDU6%2FZviYvtSU9w9WuPBr%2FWEq%2BfPuQ275pZPnSUMZTlkFeykjIIKre6o%2BZ6ACwZoamPCr5O5aGmUcon%2BnhIwSmgeaJ6dQ7aFCAge4AhQ%2BVNUW9Dxx2IdYRWHVN8tuat656eTB8tM3oBJXWyoA%2Fe8b46L0f3jEyaGZWRrlXzOGznaGM6KcDTS25t4Ae9icx19hAM1A3AgmOX%2F&X-Amz-Signature=11ba3a10bda523a0e6fa46854f3213f3a0982cb62ed2aa5c68c11924d473d2fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK2IBQIQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBqqBrys5kE0uBmFZ2K0HbErvrf5ZYgRbQpKAiY6KyYgIgBnQWYZz08hkW6Vu0nJZMkL5iAphoflbtdC1Bhisia7Yq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIs0J%2BQVZja0FYbRJCrcA%2F%2FWzZ9YbjSiycfDYekQzvq7A1Y2fPgsvEDToLosObUbyfL9AZTOGuf7c9XY4Da4afqDkKfIaWCDl2awGkevU26YIMSHMe7zGhNd8tPKyo19lJajtYk3QUBoLKliC7%2FnAf7%2Fb6AlFb%2FI424dThXMfnJ7Do5j8sPCcYDGaVZ6HZem%2FoQ6CFbfxmn%2F5MW8Nu5200o4FqEbTFOchsN2yss9YLtfG%2BBcnV2fUHuXaDk%2FGjQHYIhw%2F%2FWz0hfwZG5GkzMRhRGl9sQpYyXNaZ9tmArNkw%2BzUbqRKhvrDtRrhnpY2KlQ5XcD9E7OfqmkQR%2FLODk9U5iNaAX9JbdCT9VGZ8ojeJ3bx76HGl5sGoUeFvot3OmLeghvF1QzT2jGOxvd3%2BqNGrDt5LYOLNCiNlfK628NfbWnuTYmxvwIl6frSFJc6k7xDXLbikUsedQqKeKzeBaG0dCe003rwdK3DLXt0e31OORQXa0J8Rton3e1w7UBWsEdleE8Bu3BsMB53lKJ01OanYCijw4tZog5SfOIVuAWcSpjka5wBnbiL7B4VHHosjvzy%2BjrFO1pVIg5%2FAugyurZERLzhHoYiF%2B6MZ0swOlaAeygUas2lAOHYB6ZljebHuYaktq3%2BOf4FWeBC66mMIiw9sQGOqUBQL%2FHsHUKVk6wM%2FnsqDU6%2FZviYvtSU9w9WuPBr%2FWEq%2BfPuQ275pZPnSUMZTlkFeykjIIKre6o%2BZ6ACwZoamPCr5O5aGmUcon%2BnhIwSmgeaJ6dQ7aFCAge4AhQ%2BVNUW9Dxx2IdYRWHVN8tuat656eTB8tM3oBJXWyoA%2Fe8b46L0f3jEyaGZWRrlXzOGznaGM6KcDTS25t4Ae9icx19hAM1A3AgmOX%2F&X-Amz-Signature=7a87b7d04717e6e04d8f81584c4ee674bcc78df7228bdd88b764b5a4c5cbafcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK2IBQIQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBqqBrys5kE0uBmFZ2K0HbErvrf5ZYgRbQpKAiY6KyYgIgBnQWYZz08hkW6Vu0nJZMkL5iAphoflbtdC1Bhisia7Yq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIs0J%2BQVZja0FYbRJCrcA%2F%2FWzZ9YbjSiycfDYekQzvq7A1Y2fPgsvEDToLosObUbyfL9AZTOGuf7c9XY4Da4afqDkKfIaWCDl2awGkevU26YIMSHMe7zGhNd8tPKyo19lJajtYk3QUBoLKliC7%2FnAf7%2Fb6AlFb%2FI424dThXMfnJ7Do5j8sPCcYDGaVZ6HZem%2FoQ6CFbfxmn%2F5MW8Nu5200o4FqEbTFOchsN2yss9YLtfG%2BBcnV2fUHuXaDk%2FGjQHYIhw%2F%2FWz0hfwZG5GkzMRhRGl9sQpYyXNaZ9tmArNkw%2BzUbqRKhvrDtRrhnpY2KlQ5XcD9E7OfqmkQR%2FLODk9U5iNaAX9JbdCT9VGZ8ojeJ3bx76HGl5sGoUeFvot3OmLeghvF1QzT2jGOxvd3%2BqNGrDt5LYOLNCiNlfK628NfbWnuTYmxvwIl6frSFJc6k7xDXLbikUsedQqKeKzeBaG0dCe003rwdK3DLXt0e31OORQXa0J8Rton3e1w7UBWsEdleE8Bu3BsMB53lKJ01OanYCijw4tZog5SfOIVuAWcSpjka5wBnbiL7B4VHHosjvzy%2BjrFO1pVIg5%2FAugyurZERLzhHoYiF%2B6MZ0swOlaAeygUas2lAOHYB6ZljebHuYaktq3%2BOf4FWeBC66mMIiw9sQGOqUBQL%2FHsHUKVk6wM%2FnsqDU6%2FZviYvtSU9w9WuPBr%2FWEq%2BfPuQ275pZPnSUMZTlkFeykjIIKre6o%2BZ6ACwZoamPCr5O5aGmUcon%2BnhIwSmgeaJ6dQ7aFCAge4AhQ%2BVNUW9Dxx2IdYRWHVN8tuat656eTB8tM3oBJXWyoA%2Fe8b46L0f3jEyaGZWRrlXzOGznaGM6KcDTS25t4Ae9icx19hAM1A3AgmOX%2F&X-Amz-Signature=4788db9bbfccd790b991d6642971b0ea0a894bf76f5864110a48f9cb573bc0de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK2IBQIQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBqqBrys5kE0uBmFZ2K0HbErvrf5ZYgRbQpKAiY6KyYgIgBnQWYZz08hkW6Vu0nJZMkL5iAphoflbtdC1Bhisia7Yq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIs0J%2BQVZja0FYbRJCrcA%2F%2FWzZ9YbjSiycfDYekQzvq7A1Y2fPgsvEDToLosObUbyfL9AZTOGuf7c9XY4Da4afqDkKfIaWCDl2awGkevU26YIMSHMe7zGhNd8tPKyo19lJajtYk3QUBoLKliC7%2FnAf7%2Fb6AlFb%2FI424dThXMfnJ7Do5j8sPCcYDGaVZ6HZem%2FoQ6CFbfxmn%2F5MW8Nu5200o4FqEbTFOchsN2yss9YLtfG%2BBcnV2fUHuXaDk%2FGjQHYIhw%2F%2FWz0hfwZG5GkzMRhRGl9sQpYyXNaZ9tmArNkw%2BzUbqRKhvrDtRrhnpY2KlQ5XcD9E7OfqmkQR%2FLODk9U5iNaAX9JbdCT9VGZ8ojeJ3bx76HGl5sGoUeFvot3OmLeghvF1QzT2jGOxvd3%2BqNGrDt5LYOLNCiNlfK628NfbWnuTYmxvwIl6frSFJc6k7xDXLbikUsedQqKeKzeBaG0dCe003rwdK3DLXt0e31OORQXa0J8Rton3e1w7UBWsEdleE8Bu3BsMB53lKJ01OanYCijw4tZog5SfOIVuAWcSpjka5wBnbiL7B4VHHosjvzy%2BjrFO1pVIg5%2FAugyurZERLzhHoYiF%2B6MZ0swOlaAeygUas2lAOHYB6ZljebHuYaktq3%2BOf4FWeBC66mMIiw9sQGOqUBQL%2FHsHUKVk6wM%2FnsqDU6%2FZviYvtSU9w9WuPBr%2FWEq%2BfPuQ275pZPnSUMZTlkFeykjIIKre6o%2BZ6ACwZoamPCr5O5aGmUcon%2BnhIwSmgeaJ6dQ7aFCAge4AhQ%2BVNUW9Dxx2IdYRWHVN8tuat656eTB8tM3oBJXWyoA%2Fe8b46L0f3jEyaGZWRrlXzOGznaGM6KcDTS25t4Ae9icx19hAM1A3AgmOX%2F&X-Amz-Signature=ba43b52047a33c203e50b93e792ec4b82a02fcd0a84933ff08feafdb1ebca93e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK2IBQIQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBqqBrys5kE0uBmFZ2K0HbErvrf5ZYgRbQpKAiY6KyYgIgBnQWYZz08hkW6Vu0nJZMkL5iAphoflbtdC1Bhisia7Yq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIs0J%2BQVZja0FYbRJCrcA%2F%2FWzZ9YbjSiycfDYekQzvq7A1Y2fPgsvEDToLosObUbyfL9AZTOGuf7c9XY4Da4afqDkKfIaWCDl2awGkevU26YIMSHMe7zGhNd8tPKyo19lJajtYk3QUBoLKliC7%2FnAf7%2Fb6AlFb%2FI424dThXMfnJ7Do5j8sPCcYDGaVZ6HZem%2FoQ6CFbfxmn%2F5MW8Nu5200o4FqEbTFOchsN2yss9YLtfG%2BBcnV2fUHuXaDk%2FGjQHYIhw%2F%2FWz0hfwZG5GkzMRhRGl9sQpYyXNaZ9tmArNkw%2BzUbqRKhvrDtRrhnpY2KlQ5XcD9E7OfqmkQR%2FLODk9U5iNaAX9JbdCT9VGZ8ojeJ3bx76HGl5sGoUeFvot3OmLeghvF1QzT2jGOxvd3%2BqNGrDt5LYOLNCiNlfK628NfbWnuTYmxvwIl6frSFJc6k7xDXLbikUsedQqKeKzeBaG0dCe003rwdK3DLXt0e31OORQXa0J8Rton3e1w7UBWsEdleE8Bu3BsMB53lKJ01OanYCijw4tZog5SfOIVuAWcSpjka5wBnbiL7B4VHHosjvzy%2BjrFO1pVIg5%2FAugyurZERLzhHoYiF%2B6MZ0swOlaAeygUas2lAOHYB6ZljebHuYaktq3%2BOf4FWeBC66mMIiw9sQGOqUBQL%2FHsHUKVk6wM%2FnsqDU6%2FZviYvtSU9w9WuPBr%2FWEq%2BfPuQ275pZPnSUMZTlkFeykjIIKre6o%2BZ6ACwZoamPCr5O5aGmUcon%2BnhIwSmgeaJ6dQ7aFCAge4AhQ%2BVNUW9Dxx2IdYRWHVN8tuat656eTB8tM3oBJXWyoA%2Fe8b46L0f3jEyaGZWRrlXzOGznaGM6KcDTS25t4Ae9icx19hAM1A3AgmOX%2F&X-Amz-Signature=11ba3a10bda523a0e6fa46854f3213f3a0982cb62ed2aa5c68c11924d473d2fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK2IBQIQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBqqBrys5kE0uBmFZ2K0HbErvrf5ZYgRbQpKAiY6KyYgIgBnQWYZz08hkW6Vu0nJZMkL5iAphoflbtdC1Bhisia7Yq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIs0J%2BQVZja0FYbRJCrcA%2F%2FWzZ9YbjSiycfDYekQzvq7A1Y2fPgsvEDToLosObUbyfL9AZTOGuf7c9XY4Da4afqDkKfIaWCDl2awGkevU26YIMSHMe7zGhNd8tPKyo19lJajtYk3QUBoLKliC7%2FnAf7%2Fb6AlFb%2FI424dThXMfnJ7Do5j8sPCcYDGaVZ6HZem%2FoQ6CFbfxmn%2F5MW8Nu5200o4FqEbTFOchsN2yss9YLtfG%2BBcnV2fUHuXaDk%2FGjQHYIhw%2F%2FWz0hfwZG5GkzMRhRGl9sQpYyXNaZ9tmArNkw%2BzUbqRKhvrDtRrhnpY2KlQ5XcD9E7OfqmkQR%2FLODk9U5iNaAX9JbdCT9VGZ8ojeJ3bx76HGl5sGoUeFvot3OmLeghvF1QzT2jGOxvd3%2BqNGrDt5LYOLNCiNlfK628NfbWnuTYmxvwIl6frSFJc6k7xDXLbikUsedQqKeKzeBaG0dCe003rwdK3DLXt0e31OORQXa0J8Rton3e1w7UBWsEdleE8Bu3BsMB53lKJ01OanYCijw4tZog5SfOIVuAWcSpjka5wBnbiL7B4VHHosjvzy%2BjrFO1pVIg5%2FAugyurZERLzhHoYiF%2B6MZ0swOlaAeygUas2lAOHYB6ZljebHuYaktq3%2BOf4FWeBC66mMIiw9sQGOqUBQL%2FHsHUKVk6wM%2FnsqDU6%2FZviYvtSU9w9WuPBr%2FWEq%2BfPuQ275pZPnSUMZTlkFeykjIIKre6o%2BZ6ACwZoamPCr5O5aGmUcon%2BnhIwSmgeaJ6dQ7aFCAge4AhQ%2BVNUW9Dxx2IdYRWHVN8tuat656eTB8tM3oBJXWyoA%2Fe8b46L0f3jEyaGZWRrlXzOGznaGM6KcDTS25t4Ae9icx19hAM1A3AgmOX%2F&X-Amz-Signature=038e40c95d0c004f0560dec9b7351fdeab813cca65577fa00b16de962f525abd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK2IBQIQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBqqBrys5kE0uBmFZ2K0HbErvrf5ZYgRbQpKAiY6KyYgIgBnQWYZz08hkW6Vu0nJZMkL5iAphoflbtdC1Bhisia7Yq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIs0J%2BQVZja0FYbRJCrcA%2F%2FWzZ9YbjSiycfDYekQzvq7A1Y2fPgsvEDToLosObUbyfL9AZTOGuf7c9XY4Da4afqDkKfIaWCDl2awGkevU26YIMSHMe7zGhNd8tPKyo19lJajtYk3QUBoLKliC7%2FnAf7%2Fb6AlFb%2FI424dThXMfnJ7Do5j8sPCcYDGaVZ6HZem%2FoQ6CFbfxmn%2F5MW8Nu5200o4FqEbTFOchsN2yss9YLtfG%2BBcnV2fUHuXaDk%2FGjQHYIhw%2F%2FWz0hfwZG5GkzMRhRGl9sQpYyXNaZ9tmArNkw%2BzUbqRKhvrDtRrhnpY2KlQ5XcD9E7OfqmkQR%2FLODk9U5iNaAX9JbdCT9VGZ8ojeJ3bx76HGl5sGoUeFvot3OmLeghvF1QzT2jGOxvd3%2BqNGrDt5LYOLNCiNlfK628NfbWnuTYmxvwIl6frSFJc6k7xDXLbikUsedQqKeKzeBaG0dCe003rwdK3DLXt0e31OORQXa0J8Rton3e1w7UBWsEdleE8Bu3BsMB53lKJ01OanYCijw4tZog5SfOIVuAWcSpjka5wBnbiL7B4VHHosjvzy%2BjrFO1pVIg5%2FAugyurZERLzhHoYiF%2B6MZ0swOlaAeygUas2lAOHYB6ZljebHuYaktq3%2BOf4FWeBC66mMIiw9sQGOqUBQL%2FHsHUKVk6wM%2FnsqDU6%2FZviYvtSU9w9WuPBr%2FWEq%2BfPuQ275pZPnSUMZTlkFeykjIIKre6o%2BZ6ACwZoamPCr5O5aGmUcon%2BnhIwSmgeaJ6dQ7aFCAge4AhQ%2BVNUW9Dxx2IdYRWHVN8tuat656eTB8tM3oBJXWyoA%2Fe8b46L0f3jEyaGZWRrlXzOGznaGM6KcDTS25t4Ae9icx19hAM1A3AgmOX%2F&X-Amz-Signature=93b2f81f890b3fca62582fa0310486b8bd6befc2d38dcbbfda0776b7d7e360f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK2IBQIQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBqqBrys5kE0uBmFZ2K0HbErvrf5ZYgRbQpKAiY6KyYgIgBnQWYZz08hkW6Vu0nJZMkL5iAphoflbtdC1Bhisia7Yq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIs0J%2BQVZja0FYbRJCrcA%2F%2FWzZ9YbjSiycfDYekQzvq7A1Y2fPgsvEDToLosObUbyfL9AZTOGuf7c9XY4Da4afqDkKfIaWCDl2awGkevU26YIMSHMe7zGhNd8tPKyo19lJajtYk3QUBoLKliC7%2FnAf7%2Fb6AlFb%2FI424dThXMfnJ7Do5j8sPCcYDGaVZ6HZem%2FoQ6CFbfxmn%2F5MW8Nu5200o4FqEbTFOchsN2yss9YLtfG%2BBcnV2fUHuXaDk%2FGjQHYIhw%2F%2FWz0hfwZG5GkzMRhRGl9sQpYyXNaZ9tmArNkw%2BzUbqRKhvrDtRrhnpY2KlQ5XcD9E7OfqmkQR%2FLODk9U5iNaAX9JbdCT9VGZ8ojeJ3bx76HGl5sGoUeFvot3OmLeghvF1QzT2jGOxvd3%2BqNGrDt5LYOLNCiNlfK628NfbWnuTYmxvwIl6frSFJc6k7xDXLbikUsedQqKeKzeBaG0dCe003rwdK3DLXt0e31OORQXa0J8Rton3e1w7UBWsEdleE8Bu3BsMB53lKJ01OanYCijw4tZog5SfOIVuAWcSpjka5wBnbiL7B4VHHosjvzy%2BjrFO1pVIg5%2FAugyurZERLzhHoYiF%2B6MZ0swOlaAeygUas2lAOHYB6ZljebHuYaktq3%2BOf4FWeBC66mMIiw9sQGOqUBQL%2FHsHUKVk6wM%2FnsqDU6%2FZviYvtSU9w9WuPBr%2FWEq%2BfPuQ275pZPnSUMZTlkFeykjIIKre6o%2BZ6ACwZoamPCr5O5aGmUcon%2BnhIwSmgeaJ6dQ7aFCAge4AhQ%2BVNUW9Dxx2IdYRWHVN8tuat656eTB8tM3oBJXWyoA%2Fe8b46L0f3jEyaGZWRrlXzOGznaGM6KcDTS25t4Ae9icx19hAM1A3AgmOX%2F&X-Amz-Signature=867e7adc2511c97bf6afbbf1a9fe751b690492543c5e0159e11035a6f37b7a4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
