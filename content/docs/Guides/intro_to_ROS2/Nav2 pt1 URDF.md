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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2FUBNKC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDvaeej%2BO4d2zWo5DlueS8LZ4vGIifN%2F4hZVBe0ar%2FjBAIhAIdXOCY4FyAWhK2%2FePsLxsGCwt5udpUowq0nCcmZdUG6Kv8DCEAQABoMNjM3NDIzMTgzODA1IgwzUEhvSB0124UFfWUq3AP8QaumDZFlcaBHanXf9G%2FR%2Fs%2FoYSprelbt7UeRFtCzAE8FIDp0KOj2a2rMXVoaEvd57dapphIuymoevTCgxwLM5re7%2FTvuWJ6L5kZbpmTfnaxXTkcVZkeE93UVkIb%2BZ5uCsZhJvj0o8UiA9mKBtMHxExqkl03GVotd%2BEsnevP84APo66%2BqYChWMJuSXAKUe21zSaKsSCverfpoJxn5zcnVQ%2FHnUN8YQwwHB%2BsPXmUGbmx71AIWbmC40qFITAgON%2B7nx6V7GZYr0bmRBiVBP62%2FxF7hTWadVonGFQS%2BD0R9LNw%2BQdmPIe7mT7m61MItKIWqc7%2Bj0nErGeMm01edmMPHvpTwPiHNRlrP%2Fcil%2BxmLXCE%2FQJ4x8Dcn%2BuvIN4RS13r6ZiIDbefWaeR4ht8vA5zG7CbSMUugPqDzh9dJskAHFTC0EEVpAFVB7bLX%2FuIQimOf4EhoPTsYbVJfa00q4tf9fVljbqRJgUs5GJpQamdpdyCohWkRtnejSXi%2BQ46vxr%2FrJ9u%2FvrpzwlkEInKLKiyoA6KA4asshdxh7QeK11pxo471zKTYTKYjopa4WU8ejo%2B4XpAkm9JYCSduwLiaeRXtJOyNhZ%2FLyALnVlELrddFZK84m%2FG6y4OH385QtjDDtsHEBjqkAazyjwernyRYL99eGzwwqxzv0ppLlsSQsofFbmS47q9divakTZDl5gDmUj97thA5pU3RQHslLBcLRUMOyiTgfGQvyHaFDPzBhlCSeqtKcbgodkWIdIoO1oRmxv4mzGcc2HR%2FnbVWMNDSVT6rFf84mKLzSUiXLSZqQNw%2FtUJ6O1Ypzlw5DFoOoWRdj9p9EQYWnCisnoiPvv4Iq32f7GeW2gcdsNtm&X-Amz-Signature=0c666be8bfc7141b46c20375dcdd0ca605f31216f82d2ce873e446952ba29fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2FUBNKC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDvaeej%2BO4d2zWo5DlueS8LZ4vGIifN%2F4hZVBe0ar%2FjBAIhAIdXOCY4FyAWhK2%2FePsLxsGCwt5udpUowq0nCcmZdUG6Kv8DCEAQABoMNjM3NDIzMTgzODA1IgwzUEhvSB0124UFfWUq3AP8QaumDZFlcaBHanXf9G%2FR%2Fs%2FoYSprelbt7UeRFtCzAE8FIDp0KOj2a2rMXVoaEvd57dapphIuymoevTCgxwLM5re7%2FTvuWJ6L5kZbpmTfnaxXTkcVZkeE93UVkIb%2BZ5uCsZhJvj0o8UiA9mKBtMHxExqkl03GVotd%2BEsnevP84APo66%2BqYChWMJuSXAKUe21zSaKsSCverfpoJxn5zcnVQ%2FHnUN8YQwwHB%2BsPXmUGbmx71AIWbmC40qFITAgON%2B7nx6V7GZYr0bmRBiVBP62%2FxF7hTWadVonGFQS%2BD0R9LNw%2BQdmPIe7mT7m61MItKIWqc7%2Bj0nErGeMm01edmMPHvpTwPiHNRlrP%2Fcil%2BxmLXCE%2FQJ4x8Dcn%2BuvIN4RS13r6ZiIDbefWaeR4ht8vA5zG7CbSMUugPqDzh9dJskAHFTC0EEVpAFVB7bLX%2FuIQimOf4EhoPTsYbVJfa00q4tf9fVljbqRJgUs5GJpQamdpdyCohWkRtnejSXi%2BQ46vxr%2FrJ9u%2FvrpzwlkEInKLKiyoA6KA4asshdxh7QeK11pxo471zKTYTKYjopa4WU8ejo%2B4XpAkm9JYCSduwLiaeRXtJOyNhZ%2FLyALnVlELrddFZK84m%2FG6y4OH385QtjDDtsHEBjqkAazyjwernyRYL99eGzwwqxzv0ppLlsSQsofFbmS47q9divakTZDl5gDmUj97thA5pU3RQHslLBcLRUMOyiTgfGQvyHaFDPzBhlCSeqtKcbgodkWIdIoO1oRmxv4mzGcc2HR%2FnbVWMNDSVT6rFf84mKLzSUiXLSZqQNw%2FtUJ6O1Ypzlw5DFoOoWRdj9p9EQYWnCisnoiPvv4Iq32f7GeW2gcdsNtm&X-Amz-Signature=2951625ad5259a4e47eb69f43b84676ddffb4103915d14357925e3e1cc65faa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2FUBNKC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDvaeej%2BO4d2zWo5DlueS8LZ4vGIifN%2F4hZVBe0ar%2FjBAIhAIdXOCY4FyAWhK2%2FePsLxsGCwt5udpUowq0nCcmZdUG6Kv8DCEAQABoMNjM3NDIzMTgzODA1IgwzUEhvSB0124UFfWUq3AP8QaumDZFlcaBHanXf9G%2FR%2Fs%2FoYSprelbt7UeRFtCzAE8FIDp0KOj2a2rMXVoaEvd57dapphIuymoevTCgxwLM5re7%2FTvuWJ6L5kZbpmTfnaxXTkcVZkeE93UVkIb%2BZ5uCsZhJvj0o8UiA9mKBtMHxExqkl03GVotd%2BEsnevP84APo66%2BqYChWMJuSXAKUe21zSaKsSCverfpoJxn5zcnVQ%2FHnUN8YQwwHB%2BsPXmUGbmx71AIWbmC40qFITAgON%2B7nx6V7GZYr0bmRBiVBP62%2FxF7hTWadVonGFQS%2BD0R9LNw%2BQdmPIe7mT7m61MItKIWqc7%2Bj0nErGeMm01edmMPHvpTwPiHNRlrP%2Fcil%2BxmLXCE%2FQJ4x8Dcn%2BuvIN4RS13r6ZiIDbefWaeR4ht8vA5zG7CbSMUugPqDzh9dJskAHFTC0EEVpAFVB7bLX%2FuIQimOf4EhoPTsYbVJfa00q4tf9fVljbqRJgUs5GJpQamdpdyCohWkRtnejSXi%2BQ46vxr%2FrJ9u%2FvrpzwlkEInKLKiyoA6KA4asshdxh7QeK11pxo471zKTYTKYjopa4WU8ejo%2B4XpAkm9JYCSduwLiaeRXtJOyNhZ%2FLyALnVlELrddFZK84m%2FG6y4OH385QtjDDtsHEBjqkAazyjwernyRYL99eGzwwqxzv0ppLlsSQsofFbmS47q9divakTZDl5gDmUj97thA5pU3RQHslLBcLRUMOyiTgfGQvyHaFDPzBhlCSeqtKcbgodkWIdIoO1oRmxv4mzGcc2HR%2FnbVWMNDSVT6rFf84mKLzSUiXLSZqQNw%2FtUJ6O1Ypzlw5DFoOoWRdj9p9EQYWnCisnoiPvv4Iq32f7GeW2gcdsNtm&X-Amz-Signature=6c935be7b409d96fcfa0764e61f1d27d71722178ec3cf05ded27c5cadc2ec1d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2FUBNKC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDvaeej%2BO4d2zWo5DlueS8LZ4vGIifN%2F4hZVBe0ar%2FjBAIhAIdXOCY4FyAWhK2%2FePsLxsGCwt5udpUowq0nCcmZdUG6Kv8DCEAQABoMNjM3NDIzMTgzODA1IgwzUEhvSB0124UFfWUq3AP8QaumDZFlcaBHanXf9G%2FR%2Fs%2FoYSprelbt7UeRFtCzAE8FIDp0KOj2a2rMXVoaEvd57dapphIuymoevTCgxwLM5re7%2FTvuWJ6L5kZbpmTfnaxXTkcVZkeE93UVkIb%2BZ5uCsZhJvj0o8UiA9mKBtMHxExqkl03GVotd%2BEsnevP84APo66%2BqYChWMJuSXAKUe21zSaKsSCverfpoJxn5zcnVQ%2FHnUN8YQwwHB%2BsPXmUGbmx71AIWbmC40qFITAgON%2B7nx6V7GZYr0bmRBiVBP62%2FxF7hTWadVonGFQS%2BD0R9LNw%2BQdmPIe7mT7m61MItKIWqc7%2Bj0nErGeMm01edmMPHvpTwPiHNRlrP%2Fcil%2BxmLXCE%2FQJ4x8Dcn%2BuvIN4RS13r6ZiIDbefWaeR4ht8vA5zG7CbSMUugPqDzh9dJskAHFTC0EEVpAFVB7bLX%2FuIQimOf4EhoPTsYbVJfa00q4tf9fVljbqRJgUs5GJpQamdpdyCohWkRtnejSXi%2BQ46vxr%2FrJ9u%2FvrpzwlkEInKLKiyoA6KA4asshdxh7QeK11pxo471zKTYTKYjopa4WU8ejo%2B4XpAkm9JYCSduwLiaeRXtJOyNhZ%2FLyALnVlELrddFZK84m%2FG6y4OH385QtjDDtsHEBjqkAazyjwernyRYL99eGzwwqxzv0ppLlsSQsofFbmS47q9divakTZDl5gDmUj97thA5pU3RQHslLBcLRUMOyiTgfGQvyHaFDPzBhlCSeqtKcbgodkWIdIoO1oRmxv4mzGcc2HR%2FnbVWMNDSVT6rFf84mKLzSUiXLSZqQNw%2FtUJ6O1Ypzlw5DFoOoWRdj9p9EQYWnCisnoiPvv4Iq32f7GeW2gcdsNtm&X-Amz-Signature=c9370108cf44327408b3f2aac1d1649a32a5ba5411314f117d7533defdf613b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2FUBNKC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDvaeej%2BO4d2zWo5DlueS8LZ4vGIifN%2F4hZVBe0ar%2FjBAIhAIdXOCY4FyAWhK2%2FePsLxsGCwt5udpUowq0nCcmZdUG6Kv8DCEAQABoMNjM3NDIzMTgzODA1IgwzUEhvSB0124UFfWUq3AP8QaumDZFlcaBHanXf9G%2FR%2Fs%2FoYSprelbt7UeRFtCzAE8FIDp0KOj2a2rMXVoaEvd57dapphIuymoevTCgxwLM5re7%2FTvuWJ6L5kZbpmTfnaxXTkcVZkeE93UVkIb%2BZ5uCsZhJvj0o8UiA9mKBtMHxExqkl03GVotd%2BEsnevP84APo66%2BqYChWMJuSXAKUe21zSaKsSCverfpoJxn5zcnVQ%2FHnUN8YQwwHB%2BsPXmUGbmx71AIWbmC40qFITAgON%2B7nx6V7GZYr0bmRBiVBP62%2FxF7hTWadVonGFQS%2BD0R9LNw%2BQdmPIe7mT7m61MItKIWqc7%2Bj0nErGeMm01edmMPHvpTwPiHNRlrP%2Fcil%2BxmLXCE%2FQJ4x8Dcn%2BuvIN4RS13r6ZiIDbefWaeR4ht8vA5zG7CbSMUugPqDzh9dJskAHFTC0EEVpAFVB7bLX%2FuIQimOf4EhoPTsYbVJfa00q4tf9fVljbqRJgUs5GJpQamdpdyCohWkRtnejSXi%2BQ46vxr%2FrJ9u%2FvrpzwlkEInKLKiyoA6KA4asshdxh7QeK11pxo471zKTYTKYjopa4WU8ejo%2B4XpAkm9JYCSduwLiaeRXtJOyNhZ%2FLyALnVlELrddFZK84m%2FG6y4OH385QtjDDtsHEBjqkAazyjwernyRYL99eGzwwqxzv0ppLlsSQsofFbmS47q9divakTZDl5gDmUj97thA5pU3RQHslLBcLRUMOyiTgfGQvyHaFDPzBhlCSeqtKcbgodkWIdIoO1oRmxv4mzGcc2HR%2FnbVWMNDSVT6rFf84mKLzSUiXLSZqQNw%2FtUJ6O1Ypzlw5DFoOoWRdj9p9EQYWnCisnoiPvv4Iq32f7GeW2gcdsNtm&X-Amz-Signature=053b330237b774a1d6cf05dddae70a69cc145571b1e1de84c0ef39dced668cff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2FUBNKC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDvaeej%2BO4d2zWo5DlueS8LZ4vGIifN%2F4hZVBe0ar%2FjBAIhAIdXOCY4FyAWhK2%2FePsLxsGCwt5udpUowq0nCcmZdUG6Kv8DCEAQABoMNjM3NDIzMTgzODA1IgwzUEhvSB0124UFfWUq3AP8QaumDZFlcaBHanXf9G%2FR%2Fs%2FoYSprelbt7UeRFtCzAE8FIDp0KOj2a2rMXVoaEvd57dapphIuymoevTCgxwLM5re7%2FTvuWJ6L5kZbpmTfnaxXTkcVZkeE93UVkIb%2BZ5uCsZhJvj0o8UiA9mKBtMHxExqkl03GVotd%2BEsnevP84APo66%2BqYChWMJuSXAKUe21zSaKsSCverfpoJxn5zcnVQ%2FHnUN8YQwwHB%2BsPXmUGbmx71AIWbmC40qFITAgON%2B7nx6V7GZYr0bmRBiVBP62%2FxF7hTWadVonGFQS%2BD0R9LNw%2BQdmPIe7mT7m61MItKIWqc7%2Bj0nErGeMm01edmMPHvpTwPiHNRlrP%2Fcil%2BxmLXCE%2FQJ4x8Dcn%2BuvIN4RS13r6ZiIDbefWaeR4ht8vA5zG7CbSMUugPqDzh9dJskAHFTC0EEVpAFVB7bLX%2FuIQimOf4EhoPTsYbVJfa00q4tf9fVljbqRJgUs5GJpQamdpdyCohWkRtnejSXi%2BQ46vxr%2FrJ9u%2FvrpzwlkEInKLKiyoA6KA4asshdxh7QeK11pxo471zKTYTKYjopa4WU8ejo%2B4XpAkm9JYCSduwLiaeRXtJOyNhZ%2FLyALnVlELrddFZK84m%2FG6y4OH385QtjDDtsHEBjqkAazyjwernyRYL99eGzwwqxzv0ppLlsSQsofFbmS47q9divakTZDl5gDmUj97thA5pU3RQHslLBcLRUMOyiTgfGQvyHaFDPzBhlCSeqtKcbgodkWIdIoO1oRmxv4mzGcc2HR%2FnbVWMNDSVT6rFf84mKLzSUiXLSZqQNw%2FtUJ6O1Ypzlw5DFoOoWRdj9p9EQYWnCisnoiPvv4Iq32f7GeW2gcdsNtm&X-Amz-Signature=dc74148384d9e465a65fef0801e68e3c58540313eaba46311f78b31f54c45833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2FUBNKC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDvaeej%2BO4d2zWo5DlueS8LZ4vGIifN%2F4hZVBe0ar%2FjBAIhAIdXOCY4FyAWhK2%2FePsLxsGCwt5udpUowq0nCcmZdUG6Kv8DCEAQABoMNjM3NDIzMTgzODA1IgwzUEhvSB0124UFfWUq3AP8QaumDZFlcaBHanXf9G%2FR%2Fs%2FoYSprelbt7UeRFtCzAE8FIDp0KOj2a2rMXVoaEvd57dapphIuymoevTCgxwLM5re7%2FTvuWJ6L5kZbpmTfnaxXTkcVZkeE93UVkIb%2BZ5uCsZhJvj0o8UiA9mKBtMHxExqkl03GVotd%2BEsnevP84APo66%2BqYChWMJuSXAKUe21zSaKsSCverfpoJxn5zcnVQ%2FHnUN8YQwwHB%2BsPXmUGbmx71AIWbmC40qFITAgON%2B7nx6V7GZYr0bmRBiVBP62%2FxF7hTWadVonGFQS%2BD0R9LNw%2BQdmPIe7mT7m61MItKIWqc7%2Bj0nErGeMm01edmMPHvpTwPiHNRlrP%2Fcil%2BxmLXCE%2FQJ4x8Dcn%2BuvIN4RS13r6ZiIDbefWaeR4ht8vA5zG7CbSMUugPqDzh9dJskAHFTC0EEVpAFVB7bLX%2FuIQimOf4EhoPTsYbVJfa00q4tf9fVljbqRJgUs5GJpQamdpdyCohWkRtnejSXi%2BQ46vxr%2FrJ9u%2FvrpzwlkEInKLKiyoA6KA4asshdxh7QeK11pxo471zKTYTKYjopa4WU8ejo%2B4XpAkm9JYCSduwLiaeRXtJOyNhZ%2FLyALnVlELrddFZK84m%2FG6y4OH385QtjDDtsHEBjqkAazyjwernyRYL99eGzwwqxzv0ppLlsSQsofFbmS47q9divakTZDl5gDmUj97thA5pU3RQHslLBcLRUMOyiTgfGQvyHaFDPzBhlCSeqtKcbgodkWIdIoO1oRmxv4mzGcc2HR%2FnbVWMNDSVT6rFf84mKLzSUiXLSZqQNw%2FtUJ6O1Ypzlw5DFoOoWRdj9p9EQYWnCisnoiPvv4Iq32f7GeW2gcdsNtm&X-Amz-Signature=db02f962fe58ff15ea20e4fed81b1029d4974a003c96fb273312f4659092cfae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2FUBNKC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDvaeej%2BO4d2zWo5DlueS8LZ4vGIifN%2F4hZVBe0ar%2FjBAIhAIdXOCY4FyAWhK2%2FePsLxsGCwt5udpUowq0nCcmZdUG6Kv8DCEAQABoMNjM3NDIzMTgzODA1IgwzUEhvSB0124UFfWUq3AP8QaumDZFlcaBHanXf9G%2FR%2Fs%2FoYSprelbt7UeRFtCzAE8FIDp0KOj2a2rMXVoaEvd57dapphIuymoevTCgxwLM5re7%2FTvuWJ6L5kZbpmTfnaxXTkcVZkeE93UVkIb%2BZ5uCsZhJvj0o8UiA9mKBtMHxExqkl03GVotd%2BEsnevP84APo66%2BqYChWMJuSXAKUe21zSaKsSCverfpoJxn5zcnVQ%2FHnUN8YQwwHB%2BsPXmUGbmx71AIWbmC40qFITAgON%2B7nx6V7GZYr0bmRBiVBP62%2FxF7hTWadVonGFQS%2BD0R9LNw%2BQdmPIe7mT7m61MItKIWqc7%2Bj0nErGeMm01edmMPHvpTwPiHNRlrP%2Fcil%2BxmLXCE%2FQJ4x8Dcn%2BuvIN4RS13r6ZiIDbefWaeR4ht8vA5zG7CbSMUugPqDzh9dJskAHFTC0EEVpAFVB7bLX%2FuIQimOf4EhoPTsYbVJfa00q4tf9fVljbqRJgUs5GJpQamdpdyCohWkRtnejSXi%2BQ46vxr%2FrJ9u%2FvrpzwlkEInKLKiyoA6KA4asshdxh7QeK11pxo471zKTYTKYjopa4WU8ejo%2B4XpAkm9JYCSduwLiaeRXtJOyNhZ%2FLyALnVlELrddFZK84m%2FG6y4OH385QtjDDtsHEBjqkAazyjwernyRYL99eGzwwqxzv0ppLlsSQsofFbmS47q9divakTZDl5gDmUj97thA5pU3RQHslLBcLRUMOyiTgfGQvyHaFDPzBhlCSeqtKcbgodkWIdIoO1oRmxv4mzGcc2HR%2FnbVWMNDSVT6rFf84mKLzSUiXLSZqQNw%2FtUJ6O1Ypzlw5DFoOoWRdj9p9EQYWnCisnoiPvv4Iq32f7GeW2gcdsNtm&X-Amz-Signature=78ec92065169a5e39ece9722bdb465b3c32d1b5652b96902a47edf199b1d99df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2FUBNKC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDvaeej%2BO4d2zWo5DlueS8LZ4vGIifN%2F4hZVBe0ar%2FjBAIhAIdXOCY4FyAWhK2%2FePsLxsGCwt5udpUowq0nCcmZdUG6Kv8DCEAQABoMNjM3NDIzMTgzODA1IgwzUEhvSB0124UFfWUq3AP8QaumDZFlcaBHanXf9G%2FR%2Fs%2FoYSprelbt7UeRFtCzAE8FIDp0KOj2a2rMXVoaEvd57dapphIuymoevTCgxwLM5re7%2FTvuWJ6L5kZbpmTfnaxXTkcVZkeE93UVkIb%2BZ5uCsZhJvj0o8UiA9mKBtMHxExqkl03GVotd%2BEsnevP84APo66%2BqYChWMJuSXAKUe21zSaKsSCverfpoJxn5zcnVQ%2FHnUN8YQwwHB%2BsPXmUGbmx71AIWbmC40qFITAgON%2B7nx6V7GZYr0bmRBiVBP62%2FxF7hTWadVonGFQS%2BD0R9LNw%2BQdmPIe7mT7m61MItKIWqc7%2Bj0nErGeMm01edmMPHvpTwPiHNRlrP%2Fcil%2BxmLXCE%2FQJ4x8Dcn%2BuvIN4RS13r6ZiIDbefWaeR4ht8vA5zG7CbSMUugPqDzh9dJskAHFTC0EEVpAFVB7bLX%2FuIQimOf4EhoPTsYbVJfa00q4tf9fVljbqRJgUs5GJpQamdpdyCohWkRtnejSXi%2BQ46vxr%2FrJ9u%2FvrpzwlkEInKLKiyoA6KA4asshdxh7QeK11pxo471zKTYTKYjopa4WU8ejo%2B4XpAkm9JYCSduwLiaeRXtJOyNhZ%2FLyALnVlELrddFZK84m%2FG6y4OH385QtjDDtsHEBjqkAazyjwernyRYL99eGzwwqxzv0ppLlsSQsofFbmS47q9divakTZDl5gDmUj97thA5pU3RQHslLBcLRUMOyiTgfGQvyHaFDPzBhlCSeqtKcbgodkWIdIoO1oRmxv4mzGcc2HR%2FnbVWMNDSVT6rFf84mKLzSUiXLSZqQNw%2FtUJ6O1Ypzlw5DFoOoWRdj9p9EQYWnCisnoiPvv4Iq32f7GeW2gcdsNtm&X-Amz-Signature=83b1dde05b498b1ab39ce4b73f36081e7e090ffde46bfeb189b1bf6d8567859f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2FUBNKC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDvaeej%2BO4d2zWo5DlueS8LZ4vGIifN%2F4hZVBe0ar%2FjBAIhAIdXOCY4FyAWhK2%2FePsLxsGCwt5udpUowq0nCcmZdUG6Kv8DCEAQABoMNjM3NDIzMTgzODA1IgwzUEhvSB0124UFfWUq3AP8QaumDZFlcaBHanXf9G%2FR%2Fs%2FoYSprelbt7UeRFtCzAE8FIDp0KOj2a2rMXVoaEvd57dapphIuymoevTCgxwLM5re7%2FTvuWJ6L5kZbpmTfnaxXTkcVZkeE93UVkIb%2BZ5uCsZhJvj0o8UiA9mKBtMHxExqkl03GVotd%2BEsnevP84APo66%2BqYChWMJuSXAKUe21zSaKsSCverfpoJxn5zcnVQ%2FHnUN8YQwwHB%2BsPXmUGbmx71AIWbmC40qFITAgON%2B7nx6V7GZYr0bmRBiVBP62%2FxF7hTWadVonGFQS%2BD0R9LNw%2BQdmPIe7mT7m61MItKIWqc7%2Bj0nErGeMm01edmMPHvpTwPiHNRlrP%2Fcil%2BxmLXCE%2FQJ4x8Dcn%2BuvIN4RS13r6ZiIDbefWaeR4ht8vA5zG7CbSMUugPqDzh9dJskAHFTC0EEVpAFVB7bLX%2FuIQimOf4EhoPTsYbVJfa00q4tf9fVljbqRJgUs5GJpQamdpdyCohWkRtnejSXi%2BQ46vxr%2FrJ9u%2FvrpzwlkEInKLKiyoA6KA4asshdxh7QeK11pxo471zKTYTKYjopa4WU8ejo%2B4XpAkm9JYCSduwLiaeRXtJOyNhZ%2FLyALnVlELrddFZK84m%2FG6y4OH385QtjDDtsHEBjqkAazyjwernyRYL99eGzwwqxzv0ppLlsSQsofFbmS47q9divakTZDl5gDmUj97thA5pU3RQHslLBcLRUMOyiTgfGQvyHaFDPzBhlCSeqtKcbgodkWIdIoO1oRmxv4mzGcc2HR%2FnbVWMNDSVT6rFf84mKLzSUiXLSZqQNw%2FtUJ6O1Ypzlw5DFoOoWRdj9p9EQYWnCisnoiPvv4Iq32f7GeW2gcdsNtm&X-Amz-Signature=ce07d6d5c61a680170e7fb7e0854c0bc43c64688f1c0859b6b33c05131bb7bf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLH6THUW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCICecaj1nZDcHQ7SRkMDqYOVskrtJz5Uu47969DqcX9PVAiEA%2B7F9cbQtUNqPOEMRgTnUlUSSAqfaMmpv0g26sePH%2BIYq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDNMj2zRBgTIYDcs3bircA9XesR13HZFyWFMFkJ%2BEk104fGJOnosB%2BhzGp6CI4guWXtsJbCdQbE%2BZYfho6Bgo9RbgFA6V%2FjAyYgRG50Us5J%2F4y6UCGd7YXgexNUFhoD3Y4M3fEJtobkFbZCRXB5O%2B4gFSMK%2FDEIqdbJ%2BeJRR1MLmx80caK0poE4YBOWeMAUv0nq%2Ft4Ijf2tKfaibp5ziM6OoImLuvjJS1v2RRO4RklCQuJLaYThhB6jEFFF3AfRgrrq0jeAHb8kDx4tyTDn2o%2BRd2wI0aMfIzjNPwNn8UoyB8fRMljpLMYwvTstwGwmXBDBRuUvqJDOFcsoRgChlfTO3aQrcgDE7QucVrtRK%2F8IL6aukHoEnlbki4ifroLJH24diDL%2BufOcJ0DX0IkYnlLIXpo9pcOSzF9LLlSsBaB8mg7VDhmJcoNA21p9jORgmkJW%2B7Qnn1Y%2FxQex%2F8f8EV3Q1F76Dcm12tSlUMperyO%2Bq9SDn7JPxZuXNSwEpH82x4Dqe%2FcdwWJ1%2FErSjwgiA1yujDYdnUm2bSGM0SLV4%2B3AtxMazh9wj9cWz%2FIhtmXehbhBtD8kdPopoHS1SFu0CKFFbIBCzbzc3AhyQhBfU8lW%2BXJjnmQjoc14MmQ7spjmqS7krTaf3FjWUFDo5KMM%2B4wcQGOqUBRhkJcqVc52LzYLaTCAynXJls0sBkFdhVzANxTcdoQdOUGm%2FSLaNbk1nOPer%2F7B1AUtt7DcXmWIdjv7BAcen7FanN%2Bhbeaxmdz9ElcskDGUMU7AMjkCq5KTC6GkEsUxpt%2Fa7IryzLRIaDErTfWuYEbWeEhK96utm4b4sDeeElHF8S07%2FDIyl7Q22BLtjZ1xgbHG1%2BFr%2Bd7C5Bb6mSy6L%2B1rd36DjF&X-Amz-Signature=3b6ee00a689b0f4abffcf790b7d2c1285e7c54b9f288421311dde23e3419af59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HSU6276%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIF%2FBhR1ilph73KOLZk61lLpZFsgv3DyVw1PacWnoqjlzAiAccZo254p%2BQY%2FBf9ExRoB6Vi%2BZ90PIF34r%2BVvqtzasZyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMWsVJmaZt5oyHG5O5KtwDqSdEeGwjhHlHZWgAnU%2ByL27zW2jjrXUYjMmSrgTog%2FZM03xqicmam4FnvPp%2BorOXxk43xZ0PkWjHGU6g57zDMff964KcsBMwRl9Hdcsam%2FbKhOScl4gH7qub1q86KxA4OVAgsgA%2FskI8dsmxwSaPy1NpS6L6UnY0pq%2FtM0y6SdDfTWZtwmQtpSZQeWYqopgkMwxa%2BlZ0v4UAUKtZ%2BkqShd4p2YhdWsEYGa7Qoek1PnkRY6nIRbEF39AVmod4ucTw%2B1yO6utqw92A%2F%2BejPI3n43cUF40dxQ5JpJmzvO9P8VSOdrfssW3M9Wz%2FVdJI9VlhJzDjNC%2F9hkItiAEcmhydTnKCtXQszh3D88yZUIQmldizVzci01mIN0UdoWPgXy72O6JGHG8JD2dqvkilndgS511VxU3Vg5TzYkwtF8FhtOIH6A%2BTnxURRv7%2BZcfd83%2BEZgwg%2BfYkLstyJN7ivWndOIpadf3bF7jWw2jkZw57%2Fi6kRuK7RdisLp5LOKtiGrAHXvXujA6vGyHHPC8ow3RJyAvFMLDMp95u8T0jx%2BrGc7OcBngzE0gRQJoOcc%2FePn1szf99Hvl%2BIFifQR9GT2C3yUPZFcMqxwWzUKcs1KcbBRILlub%2FPSLOuwu%2B8Ocw4rfBxAY6pgEwVTb0n4nf%2BmtbcVjXFa5cgO396g%2FQM4v%2BCleN0Kiw0s%2FsvTMrGXNktwtrNlVZ2ZY9kkhjySsI7Qpo9hCdNsjxvl3hKoSRORSqbKebyBVjAGZka%2FUVH%2BynxNewbPyr7z4NEEt0byXzyi24VSlKQKpcq4wSUNlxWB7beNKV7OXVMfh5nFSzmJtuYPs72nI%2FXhAA48fnN1gDkwqo2Mv4%2BxVLupwVaN2K&X-Amz-Signature=c86ae286735a3974ab93f7b7dcd2ca84bfbae68952736bcdd78f823f47ed9ea9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNQUGL5Y%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCICQ%2Bxw36U8ySzaUOqKoGnmPwbCZM06X8b4LL2o9BkK%2BMAiEA3DoBnq8ZeiR1aIO1bNa%2FCONp%2F%2BWzWUNDHJZZlqtvJWMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDA5Yp7ch9hGHHRqM5yrcA5nyzD1ppUWfjH9OxtpO2xJArRG0yfgcVEFIvbBVZPlu%2FnJvA21c0WmWpomRmwdED0zcipXFqG7d78Wf73ZsduK2ct58IlS%2FsHmYIqXN3tXEOPFpK0VBX84u%2BVmvqg%2Brt8ha5ZwCYTAKISDjtAJzgJcrWuLgvhcEipywOcEwc7cFVIYNghwSSqWuYCtPMokZgAzPtuaV9SFpZU0dNetpFrF4E6kWjhzCF%2FuxSVU82h0ZfxoIJaab3iYAywMlu6rqaUx8dGiXujtQair%2BJjGOsO36xOACeZrF297nq5WC685npfIjbSqAXzcelC7VrF5LWTMfEMFQS9J3ep2sZOGa0jjNrxQ290kvfcwRG8qCrybAkwk2y5kD2J%2F05cPNllEreNV0wRnwIEVXkPhLaP%2BYKJ70En4DMfzIXWaqkGiDAqJtnnvuvqcMZ3dQd55UWUwrGZSr6YPqjNse8PgEzWQF%2FmiU2y4xrKzVZxc0ZjX6t5yQ3uAQ7Xm14uH6JOD7MJHme4dLGXTOJ0f5lEYGIfL22FvF8DkF30rytO6GS88wUb0p7BEepDBAsV458lXlxTs2XVJwf1bMA4NPg7YmhtLHjHbNBTzZIZD%2Fvv3if%2Bd6Y9UTXvFLmH9dGbXGObSQMLi4wcQGOqUBiWzDXotaGOhkWTlKPIUCiMUIYJwZPClhShGxSqkAEq9TtTR4Xr7I%2BZyVwfmtyO75TKmriLbStNTXu1hpvAmHt%2BXsFOygSD4p3VrofEGhXWOXTR5qg3zNXvG5X0w1WbEyVBTCxbwB1CDPzOCSr5MJahx07l8dOVA3rp8kt38Mp5fy8uyux56rnZL6wDPZ4HeUxrJ9T7TA4C2Nct6h59glxxUg7157&X-Amz-Signature=2d98158741fcc640c6555bd7d2a0e25428aa76b2ee5d33f5f09e50c85f1f0d82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2FUBNKC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDvaeej%2BO4d2zWo5DlueS8LZ4vGIifN%2F4hZVBe0ar%2FjBAIhAIdXOCY4FyAWhK2%2FePsLxsGCwt5udpUowq0nCcmZdUG6Kv8DCEAQABoMNjM3NDIzMTgzODA1IgwzUEhvSB0124UFfWUq3AP8QaumDZFlcaBHanXf9G%2FR%2Fs%2FoYSprelbt7UeRFtCzAE8FIDp0KOj2a2rMXVoaEvd57dapphIuymoevTCgxwLM5re7%2FTvuWJ6L5kZbpmTfnaxXTkcVZkeE93UVkIb%2BZ5uCsZhJvj0o8UiA9mKBtMHxExqkl03GVotd%2BEsnevP84APo66%2BqYChWMJuSXAKUe21zSaKsSCverfpoJxn5zcnVQ%2FHnUN8YQwwHB%2BsPXmUGbmx71AIWbmC40qFITAgON%2B7nx6V7GZYr0bmRBiVBP62%2FxF7hTWadVonGFQS%2BD0R9LNw%2BQdmPIe7mT7m61MItKIWqc7%2Bj0nErGeMm01edmMPHvpTwPiHNRlrP%2Fcil%2BxmLXCE%2FQJ4x8Dcn%2BuvIN4RS13r6ZiIDbefWaeR4ht8vA5zG7CbSMUugPqDzh9dJskAHFTC0EEVpAFVB7bLX%2FuIQimOf4EhoPTsYbVJfa00q4tf9fVljbqRJgUs5GJpQamdpdyCohWkRtnejSXi%2BQ46vxr%2FrJ9u%2FvrpzwlkEInKLKiyoA6KA4asshdxh7QeK11pxo471zKTYTKYjopa4WU8ejo%2B4XpAkm9JYCSduwLiaeRXtJOyNhZ%2FLyALnVlELrddFZK84m%2FG6y4OH385QtjDDtsHEBjqkAazyjwernyRYL99eGzwwqxzv0ppLlsSQsofFbmS47q9divakTZDl5gDmUj97thA5pU3RQHslLBcLRUMOyiTgfGQvyHaFDPzBhlCSeqtKcbgodkWIdIoO1oRmxv4mzGcc2HR%2FnbVWMNDSVT6rFf84mKLzSUiXLSZqQNw%2FtUJ6O1Ypzlw5DFoOoWRdj9p9EQYWnCisnoiPvv4Iq32f7GeW2gcdsNtm&X-Amz-Signature=31887fde3d5958808effe8157bd7a95a276e4a07bdaba367ca8381411452ea3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXX2S7AN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIE9Rtgux2%2B3QVa4eYfTJ2liKQ8jagMydGuvD9H9a0Lq%2BAiEAjO5%2Fo5RwNfSbNGXEVj5vsqpdVFvzPcRalxaX7cUIz40q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDCsP0fhcadpYsDmlHSrcA%2FX9%2FqmFsJ2LGM5BVe3AuWQ0OgjrgT9bX4ugtLd47CgXtaYkr%2FDwRfosqdxCGkSDJDepDWD9rGGvup7OOTQNGu5XaAydVw%2BUCuXqkeByVWoEx4g3oKjJA4FFMkEoH%2FidqDNdcphmdtIDvHIO5b5klJDWiswCtKbLCbJj4wSf0H9%2B1%2Fl9pD9z146iZkUXI3XGIrv9jkctB1LNeM0Nk5KIpk6qnTwvnJzNJ65t%2FAv%2Fc9JIc9ZbmmotSifcOOQniszYhinpHyoUcKVTqH5AI91ThbS7QTgv%2Baf%2F6LElJa9mWpvGoPMGmdtcMigxDcb2K1G1T6nMKWAL46DBcaxiruo8jfeaJ11n77S6zf4CzYTaOopV1wCWT4zaeliJ%2BNDaUUXjqe6rPCMqpdmW5aLmWuSosoz9DVDFzEDPgP9kkyWo0EHHpctN7s3Tk0gIC2XJV%2Fq8mX3F3MSOUKWTJtjJKkfAOavcFFkGWD%2B%2BX70khQJvdVqiohYrvP8S1JZdyO%2BSHP3yRPN%2B4si0HXAwQAaIHcm9ab8Hq4C2nTHzvC%2FJEDKx6yLsp6usOzUE5Oz%2B%2BahPoMF87D5w5044bUmviEGKkRAL8tGjiB3aX1t9Uo89kT1WnmTh%2BRgWFNXKaBfqavf2MP22wcQGOqUBCS8CQbJ5MH2d%2Bsj0B5WhL%2BrPIT5A697%2BPoFE9wSKx4W43oZKfYsGQKxPYgUP%2BcLIsZC2vZIubGCvk3h3nv2FYcbSsjVXz1KzKtt4RBP%2FYQa2xTCRWpiP2hUYJPW6ab%2BTBKcZu6vwVr42tlMqn6M1ElikWGyoIiTA8Sd%2FOqw43t3VKJ5Z%2FgdXCz8%2BmYX8%2F3FCpA0VQ5yQqUz5%2BmvNcccyQrSyeEy6&X-Amz-Signature=b3b6660ac1947a235e6501c696353d91ed1e7ed9caa2020da01473863281e2c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2FUBNKC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDvaeej%2BO4d2zWo5DlueS8LZ4vGIifN%2F4hZVBe0ar%2FjBAIhAIdXOCY4FyAWhK2%2FePsLxsGCwt5udpUowq0nCcmZdUG6Kv8DCEAQABoMNjM3NDIzMTgzODA1IgwzUEhvSB0124UFfWUq3AP8QaumDZFlcaBHanXf9G%2FR%2Fs%2FoYSprelbt7UeRFtCzAE8FIDp0KOj2a2rMXVoaEvd57dapphIuymoevTCgxwLM5re7%2FTvuWJ6L5kZbpmTfnaxXTkcVZkeE93UVkIb%2BZ5uCsZhJvj0o8UiA9mKBtMHxExqkl03GVotd%2BEsnevP84APo66%2BqYChWMJuSXAKUe21zSaKsSCverfpoJxn5zcnVQ%2FHnUN8YQwwHB%2BsPXmUGbmx71AIWbmC40qFITAgON%2B7nx6V7GZYr0bmRBiVBP62%2FxF7hTWadVonGFQS%2BD0R9LNw%2BQdmPIe7mT7m61MItKIWqc7%2Bj0nErGeMm01edmMPHvpTwPiHNRlrP%2Fcil%2BxmLXCE%2FQJ4x8Dcn%2BuvIN4RS13r6ZiIDbefWaeR4ht8vA5zG7CbSMUugPqDzh9dJskAHFTC0EEVpAFVB7bLX%2FuIQimOf4EhoPTsYbVJfa00q4tf9fVljbqRJgUs5GJpQamdpdyCohWkRtnejSXi%2BQ46vxr%2FrJ9u%2FvrpzwlkEInKLKiyoA6KA4asshdxh7QeK11pxo471zKTYTKYjopa4WU8ejo%2B4XpAkm9JYCSduwLiaeRXtJOyNhZ%2FLyALnVlELrddFZK84m%2FG6y4OH385QtjDDtsHEBjqkAazyjwernyRYL99eGzwwqxzv0ppLlsSQsofFbmS47q9divakTZDl5gDmUj97thA5pU3RQHslLBcLRUMOyiTgfGQvyHaFDPzBhlCSeqtKcbgodkWIdIoO1oRmxv4mzGcc2HR%2FnbVWMNDSVT6rFf84mKLzSUiXLSZqQNw%2FtUJ6O1Ypzlw5DFoOoWRdj9p9EQYWnCisnoiPvv4Iq32f7GeW2gcdsNtm&X-Amz-Signature=7847f5d3e512f4a06b86b86a917c5bc0f79a37f8007a63fe318942c24b733074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S4FIH5W%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIFFoBDN9OPNx%2FFKErmcCuRfie2scx1SXyhLUVDzwSCJ8AiAEeCku%2FScDOC2J5ngHRjNWKGEvC6BcWRK1NMTlhapYfCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMGDT3tpw4RPrtzK2WKtwDSVZid2IhjNHXGnANgbC2frlshvT1W0xTIaA%2BkPt7NL2xdyKFX0EglL2eEO4aglTjm%2F%2Ba%2FfpSJrA5PaooJsV%2FP6SSQTFjN8zAuLerbTwrU2NI0UGR7Sv%2FZBEUUGT694%2Fla%2FORrFSIN4waKUn%2BVfljCKL07ZRtupcAbt6GmkTcJ6PWi2IpMe6WfKCFIpa9FpZ%2FlD6Xhl6COfN2XCyFLv17LPXzZfvbXax4RBO17WT%2BVFyjbwdyOD8c6it95J5m6FP67XWA1tE7xA7aFI%2FMFZxCrUukZfxQG6%2BK%2F2jJF4QhOUsaNGKYKqZBUCQpWN6qmuPNUTMcF0aDiXq4wtnSfg%2Fd05bBHzBg8Y6JQiXQYBgVw2Dd69CbCJKB9XgVCREN8nxImFXeE1c67ZuHVJcNbhtOIwHdGrqXRWPZcE1bKpknfUv3DznE9pfFWo0DsgUi8rWTAq9P%2BKR8IxZUNwQRKvf5PKUVX34cmpOuvXDIMk3UOTrohVCVcIO1wJLI41ZR4ZRgqNIcMHak%2F9kbsNh8S3pXAxnvgczLwnY7bYPW%2BCK1%2FsN81rIZlpSsKydo%2BE6%2F8ZWvNbGbLOpSU4PupExKRI6BJViwJEz49vIMh0LDeKYZHZll%2FYq92yHH3%2Fp7OVIwvLfBxAY6pgHoTlTAXomDLyi8D88jTUXcQWVSEddxRdyq6Spv9UXpjOw0tB0Wg0LrMeCLeBWVBwZ%2FMWH8pk%2Fbb3c8htjGiZELkYFUOfnCMljroQ8NlWSL5N%2BHdlr7UZ8jXU2vph9Agu33D6yjcpSCJA5j5kQPNIiYGO9%2BEG8gqz15bHtAkqbJHfrAhtfNIuYV5vmpmWS%2F3NVqsuOPsWZGMZ3dpwKoIGRBawbMnEGx&X-Amz-Signature=edc5e3782b8abed317dfb54cc6d56dac716af07b28039ea33439dc6964df5e55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2FUBNKC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDvaeej%2BO4d2zWo5DlueS8LZ4vGIifN%2F4hZVBe0ar%2FjBAIhAIdXOCY4FyAWhK2%2FePsLxsGCwt5udpUowq0nCcmZdUG6Kv8DCEAQABoMNjM3NDIzMTgzODA1IgwzUEhvSB0124UFfWUq3AP8QaumDZFlcaBHanXf9G%2FR%2Fs%2FoYSprelbt7UeRFtCzAE8FIDp0KOj2a2rMXVoaEvd57dapphIuymoevTCgxwLM5re7%2FTvuWJ6L5kZbpmTfnaxXTkcVZkeE93UVkIb%2BZ5uCsZhJvj0o8UiA9mKBtMHxExqkl03GVotd%2BEsnevP84APo66%2BqYChWMJuSXAKUe21zSaKsSCverfpoJxn5zcnVQ%2FHnUN8YQwwHB%2BsPXmUGbmx71AIWbmC40qFITAgON%2B7nx6V7GZYr0bmRBiVBP62%2FxF7hTWadVonGFQS%2BD0R9LNw%2BQdmPIe7mT7m61MItKIWqc7%2Bj0nErGeMm01edmMPHvpTwPiHNRlrP%2Fcil%2BxmLXCE%2FQJ4x8Dcn%2BuvIN4RS13r6ZiIDbefWaeR4ht8vA5zG7CbSMUugPqDzh9dJskAHFTC0EEVpAFVB7bLX%2FuIQimOf4EhoPTsYbVJfa00q4tf9fVljbqRJgUs5GJpQamdpdyCohWkRtnejSXi%2BQ46vxr%2FrJ9u%2FvrpzwlkEInKLKiyoA6KA4asshdxh7QeK11pxo471zKTYTKYjopa4WU8ejo%2B4XpAkm9JYCSduwLiaeRXtJOyNhZ%2FLyALnVlELrddFZK84m%2FG6y4OH385QtjDDtsHEBjqkAazyjwernyRYL99eGzwwqxzv0ppLlsSQsofFbmS47q9divakTZDl5gDmUj97thA5pU3RQHslLBcLRUMOyiTgfGQvyHaFDPzBhlCSeqtKcbgodkWIdIoO1oRmxv4mzGcc2HR%2FnbVWMNDSVT6rFf84mKLzSUiXLSZqQNw%2FtUJ6O1Ypzlw5DFoOoWRdj9p9EQYWnCisnoiPvv4Iq32f7GeW2gcdsNtm&X-Amz-Signature=bdb05894b8ec815d5d2dda06e3175394fae60402422a67fa233c3b7e18351596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRFJJOTD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDeVCEprPn%2BczF5BX3NN91ZMzewwqSXk6gvO3Upo4lWHQIhAOsrwECNEeyKj5v%2FCiWFqEGqDGqwXJBW9jjsMMmKaejTKv8DCEAQABoMNjM3NDIzMTgzODA1Igy66Zkvj8dcS8LkEW0q3ANUYLhaCbPOLHWsjzEpwTjG%2BydkwaUNfBcUQLlvbCEOC%2FFGpGOiagxanp72X41GMKtLDYtfhl9ywoTJi0PLleT5ci2jV84KLy9tngaNG%2BMFpNLNp7SaTc%2Ft%2B7QXQc2bFrT5g0V3ePfK1H8wXn5WfWVIaDp3PbnxJtfejr47ou2%2BYyga%2FlBfa2cYB5q2Hv2BmRHbV75ZodS0TlAByAejBIiV%2BGIWSlOVjbm1G1PDmOU91RJUAZkunvFR3svvLxryFXMa3YD5zZaORMVK2V91r4Au9DHEAiLtnyjmMASI59K70YudE6eIkrFT0pOdkJSCeQBiOookkkn2iPTvdWha5ZIcs8HtQNXrzg4VQZjYpP1KQtIHBps4C%2Fl7bpH43Ij7m6KdBQM3q74xnTgU%2BhGOTz3ZEwcaPGh9hVnDtGDySXwmgr2g1JVEKCPSMzRk3RZpxh%2BdhwvGt1auNv7M%2BHfDzDz1U6fAejS9S6zoyxghHhSyEErk0uVvSBwWyefsWZe2DZWaAKJqOa7bAq7qST7GRKrOMGF6W%2FVBLUUvvdnxYWm8m2n6%2Be%2BdpwlZTCRwLh32jq0FYvwOHzIThyXphTzfJWHx14nSyabceyiyn46jRyRka1Qz4ygtJQXPy%2BwzZDCkt8HEBjqkAUkIM7IUD3vMABbsk3kSapsIU5AA%2BhnkdlPL1HGXP4zRb6afcI7%2BWG8b6B9ZeE87rYOdlfNlxsA4kPkh2PQHTFtHvGHTg7IdoYQqJhDScdHXQPgQucy%2BFWbGpMiLB0L5f99Uhrz6MIBQxnLehzxHMHl0cJwDsJb%2FWjsmbrFGONtd7GMdi9zNiqI9LJ6lYEAfHZ9ixjtN6ae9S6Ywed1lTsAn59Dm&X-Amz-Signature=0408bee83283c35a69de123eec24741d33a9b395a43bb5e6fa2d4f53425852e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2FUBNKC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDvaeej%2BO4d2zWo5DlueS8LZ4vGIifN%2F4hZVBe0ar%2FjBAIhAIdXOCY4FyAWhK2%2FePsLxsGCwt5udpUowq0nCcmZdUG6Kv8DCEAQABoMNjM3NDIzMTgzODA1IgwzUEhvSB0124UFfWUq3AP8QaumDZFlcaBHanXf9G%2FR%2Fs%2FoYSprelbt7UeRFtCzAE8FIDp0KOj2a2rMXVoaEvd57dapphIuymoevTCgxwLM5re7%2FTvuWJ6L5kZbpmTfnaxXTkcVZkeE93UVkIb%2BZ5uCsZhJvj0o8UiA9mKBtMHxExqkl03GVotd%2BEsnevP84APo66%2BqYChWMJuSXAKUe21zSaKsSCverfpoJxn5zcnVQ%2FHnUN8YQwwHB%2BsPXmUGbmx71AIWbmC40qFITAgON%2B7nx6V7GZYr0bmRBiVBP62%2FxF7hTWadVonGFQS%2BD0R9LNw%2BQdmPIe7mT7m61MItKIWqc7%2Bj0nErGeMm01edmMPHvpTwPiHNRlrP%2Fcil%2BxmLXCE%2FQJ4x8Dcn%2BuvIN4RS13r6ZiIDbefWaeR4ht8vA5zG7CbSMUugPqDzh9dJskAHFTC0EEVpAFVB7bLX%2FuIQimOf4EhoPTsYbVJfa00q4tf9fVljbqRJgUs5GJpQamdpdyCohWkRtnejSXi%2BQ46vxr%2FrJ9u%2FvrpzwlkEInKLKiyoA6KA4asshdxh7QeK11pxo471zKTYTKYjopa4WU8ejo%2B4XpAkm9JYCSduwLiaeRXtJOyNhZ%2FLyALnVlELrddFZK84m%2FG6y4OH385QtjDDtsHEBjqkAazyjwernyRYL99eGzwwqxzv0ppLlsSQsofFbmS47q9divakTZDl5gDmUj97thA5pU3RQHslLBcLRUMOyiTgfGQvyHaFDPzBhlCSeqtKcbgodkWIdIoO1oRmxv4mzGcc2HR%2FnbVWMNDSVT6rFf84mKLzSUiXLSZqQNw%2FtUJ6O1Ypzlw5DFoOoWRdj9p9EQYWnCisnoiPvv4Iq32f7GeW2gcdsNtm&X-Amz-Signature=b59d11aafff3170df63e3d27ca92f467221c8de730719a7b99d0423fe5720aed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKGXBSBW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIHIdegCUtUDy2GovIAbvYv8W7BGCSIuXaNkoEPT0tZ9MAiAq7YGkVQ%2B4MQ0c00dPqzFyBulJcutge3JasDU9KAAO1Cr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM0YYQ%2FYZqNHg4z%2FcsKtwDT%2Fg8e6WkO98sq2ZDNOZUctkpbisbtjAYrgljR3Gyb2GEg1ORVNzJIA6z6%2BWfmDbRzJAF2hMQH1ljwNLSl58lVu5tbC7j%2BkYb92gFfZAW3EeN0Lq1V7nKbM9q2vlSgGxrK4kcJcm%2Frw6k6AyxxoYkIrXsEDA88drXvoCt1Equ4WDzVkEjoTAYj7gxg3Fl%2F4G8X52T8GiNLnqu3KCnbCATYGz5t2Bf%2FR%2FJ7Z4a%2BYFvVwDfiCuZMTNUxsN8sosgrqTA7fQ1VqKV9bYUUZjCHx3kdAq1WNtF%2Bcc5hWQxPNjNEf6JYO52DNyvv3tszKv%2F4ZKiXd81k%2FfL8DPR8Lv7rfJSR1lyeXTTr25RfE5nZOL98%2FQ%2BBsbR%2FmiknIipeba%2BERcrogWL9Q95La7NJNbsQ4aQGHVLynD5DUcp9fPulGyAEzpBLtRbroFgLe46NpMK%2Fp6sOygqHpD%2F9VPhAQ0qbOujMt4qXO8ZYWSxghHRmtnNGnRJNKcpr8Ygt%2FbSNzOOgvhZAPOHlhoIpkLbJV%2BYbza2%2BBBTrsPpbkIO1CFOIpOcWNaZap5%2FkMCABz%2BadcLMSwbQ7iMfXnaag9O2VaMGEqGcGze4Uv9Lb5GRIOOWB2UYc7Fqkt6gIMYFx28ThSMwqrjBxAY6pgHprNgDPmq2mwxb54HrcOGLzfJDI4soem8K1sig8FmcmFLudlGWYx5bpvjKR%2F9FqAOFol2uQpBp8CFgnonOtN%2Bc7rstX%2BClp7TBhqwQlk9OTUa8Qr3qo7xnzBzk5wgR9NkgJ4sxqLlIZM1Lwx%2BleXsQazkALx8gIHjqMUuI%2FlUkYz%2Fu9jYRbkqCQXcTxtrTTAd5cgL%2BFap8LWWiQs6U8906Gtc3brXf&X-Amz-Signature=7f254ae633cc8fe7bb7e8cf0df5bec0671ddc05563a578d551fe3560d16ae98c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDFIEIMN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIHPHOWRSY2I3Lbq0pW0z5FKbqmq4C9iK3JZfKPNThEyiAiBLlvd%2F9UcUfuJBmgV6Dqd%2BzOANw2WhfSihK%2FfHkk%2F3jir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMr%2FOjc4JSQRqYL9YqKtwD2dHhqE7MChOIyGnhvx%2FmK5%2Bdy5CAiuAu8wpDr6h3IU3U6GHTzfbaYHHWWLbjHE66AEBnfzbcKm8iIkIZ%2BZTObGHz97NWmddHhiOLdBwaDuMsPnrH8VCBVf32fThDu%2F6gSiRllf9vCd41TOZfxd5TGFwgWgqmxiU1jogCbeAwRUavf8pzpSpcmKn0xJLy5bGZ%2FEnmRKoYzfdNUF%2BjbRR9S9L81KYVMKLwHV2Iqd7r1F4BiaP4neqelbgyk%2FKsDSpQzN0ZE5i0aoPVh1XhgeCeg1p6I8%2F1WNJwi29JEjMRPV4hnIzuasx7H7f%2BR2KcaamoO7C%2F%2FILx%2BiHgTrcHW9q4h0JLv5aZVnjZGbRYUV6ZS%2FehpULjNqEVx70lCmRVQm6YAuOHFg17H5aYZpZd2abliqZNfLBFTlWAdmIwBcAjWAiFgjJDiq1AQYdEbEoAxfcKhTZi0bIp1c3o5zuTcPwsWLoAkTcsFBGCPEVRh6Hx3tIth8ITDxcweQvAYSordmzUmP4T2B%2BV2ga%2FS23gBMo9NPxru855dyJIIVQwatSOpVrVDcvvvFNIllIA9Bi%2FH6pqMSaF8hclwyib9YaZKLldL2lCEo5MO%2BIu1DwXvx2cSquYALQ3OlguTSLx5rowg7jBxAY6pgFBH3x0XhrykIKilZ7bRJ7sMFAGSqNtQSH3NaRyExUL5v7pxkxH5n60xWtruRjLvhiNIUHQ6EU0yMAyJlIw5kY%2Bsz4%2B5DvR6yiTRzl2T%2Fy9TQHE9pMKJ2%2FazQjcsyIzWdEggfDWdN4lzC6w5kGYkSfemq%2Fa0avxBt7vhIaH7hmtw85qzZBfvYp%2BQehGX9%2FX6emgblr0MkC00rLqmrCduTdfPKlZOuG4&X-Amz-Signature=d7f2f35262792ade50d8e77573d14c15204254aa95bf539e17c61df2bedc380d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LIGCRVR%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDHTDXgHsg0RunboJvPM20mpXYy7NqebrU4AQwzBq92KwIgUyPnfexkiZ5GMoemmEMFOlBM6tzRALLIMfa%2BTGha6%2Bkq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBewjeSea2tqH7bl%2BircA8J89HhnDmPtfnllpwCg2IT1HAdBQfLvf%2Bi7dUuIR7FxucR8WhFCp8VwxwdZWjXxszhbPdPJUUDNjVEmBocfdtUtez%2BBtBiOQGNqkt%2FZy7aRROk90grSwShvS%2F%2Bqrb%2BzCvswe24UYpdegQm7UMIZ9RwY9gylkP5P6H5J2UnI%2FyH8LePKvfBzKYjTjMyie7TTgmFnuXkPf4DEJzypBfDjUzKzSyTKI1%2FDQcgnWUjRGqYjrBSIAjgKWcC86eratMuctXBqdyqAiHSh8OWYc%2BRndwBrVkbKJXPgZHKFMDBrqJX3xUsv8shIqd0sr%2FLKAqXNduKH9PYi3ZIsbFZmWUz0SsdlspJIqhLDM4S5e5zSl4ui4OIlY2NIYfUIgsX0UcX%2BmMnKHFD%2F5Ke5nxRm02ynSmqI9F%2F%2BJEwOBEFa5s5T1chHA8j9oiCVefBRNo11mP%2BBR12hcUnsWDmvqeKuIRm8NQb8dp2ANqcTm09QMW8%2FxPCu6UIcDE2KzA8du3Kz0RTYuwV%2F%2BRT1eSQ3dJiyRdYMm05hh8ra8cLi0ntk7Bno%2BGSJJHnmYz%2BWEyL6KJaJfApMqcUJhJC80%2FP4rSj4WKRYCQaQd4OZ6uDy3pfRB3BajxmgEwC0rHd1fhXHQLdIMKS4wcQGOqUBSeSM2uKfpmn%2Fg556DSOKfnq5%2Fd%2F%2FKqkdV4yUBuGsIHDJRlE%2Fcp3p5yTIauBnjneCQIx4DezHYwk3PbhYID8jt3nXW88%2FD4uZOX5Sm903EQm5%2FMD%2FoNla788nYw1QsoHaKDCRo0eewxY3m%2B%2FdKeQMQt7Mg5b2hkBwz%2Fua1AL%2FEw8PnAsTvJ7uMbsosvKIJvgyeB5BQmtxNGpbMdQJ9DqMWx02YMSA&X-Amz-Signature=ddac397d25b84f3c0d072dba5fa3d566250e18bb49d340d280908e9880235a2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STRXWZRE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQC0Y5w%2BNn17fk34xIrcr3O%2F%2FoDnzEijx3BplB%2B4q6ZmIgIgGdeUIiy2K84MZbDNUPhqfFTMVo0%2BaYuJHXsJEzO%2BiLoq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHzJpIaa%2FRtj2oTQSCrcA50oOVMNV9ILVpPrjA9rR2PQOr7uRxt%2FLCGuXK8tUE5xhBwmj1Zr4FzvbsUASE76DIEdlTRMSQk5dft9Z4A5HAWrXF60jlpvZ4mR1YAmqHvz%2BrtgUviUZ%2Fa7lKunmcgrSv3JA4MbakUd4xSxyNxLKvVVbNru33fMA9Md8Z1ClN333qTIUY5ooZWIRLOZjGNAMCCQhK3HrkEhH4gDSkKw1y0HJs1zw5HSM%2BvOo6eLlbeqOg1EYX7dbXyiVcPVC8irD9wxtf6kQj4PdONfBBgHtVhChPSmKxXqWUbTEovHLv9DQLGyDq9DaD15VVfMX9xoHFqAWE0UC6cKpFsP2eHozK0CE8wkwrmDg%2B1RpkHr%2Fk2BRdYldo9v9vuDbb1I9CBNGHtRaBGlprKQJdlKtiXUIfl6y%2B4HjSA1NocCuWK1rDs2JaD%2BEKFnx3k%2BR9uNoeBnzeCbnDiL5PrKuWBFtEhqr6r7X5B%2BmNjvAPUQJTIxq%2FuhT3ZZrpxqmhleTc9IuI71ooHIstl7vJIDjD%2BcfHow8AbKh39Gq7bo6wfqnNjSqAheCzE1yjjeJY9hxyZGQ%2FY7oiG%2FO3RimoTowhjE6wQphA7CiDPJU7bRLUeDT0nlajPjc%2FM4Nxe%2BdqIqMZPyMKe4wcQGOqUB%2BB%2BzQX9Cz87Xa1DYU6sdz5iRZ1eagmVzrgSud9M50lw2ImNvwZ3TGwjRqioj5phH2fOoEm%2F%2BjH8F7tHEJ%2FznBf3FtvWX06kOEvgCe88rMmBKlLgchOmUEEUaIk01xHg64TixZ71CNvk6urFwwMSQPcO5DJ7zC9NEGrewgDTijedBBtt9pxWnNFrXfPJcLjx01neF4oUrXZ36skO4eT9V1VVkXi79&X-Amz-Signature=93c4c4bb4e8b106ddd5913f5f229bde85724fac6d92e57ae89c425543bc60169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IRLC6CE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIAWAO%2B5wHcnTMUXjZwApzXXqrrnR8Ei41wRxFO22OpKcAiEAub6NxuCufvGI5Hof2E7e5kCU9%2FdQd2zUogxgIscvTnIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDEB%2FTgEgvVmDQwsTOSrcA17EfZNAO6DEiDy%2BzkJTVKfIhXOcJf4ZzFbuzK%2FiYyicd1Ep6S5B52XUwCsBFKlRtL0LKa14ENp82sOvKB5PxqVmh2SwZdYIFhokdeYaXV7TO9zHSmqTF%2FWwTNVDDhrP2hRuL59ZoMt5AODgSRtIHm1dQsasNgl7ZimfMej0coxwEJvYw%2Ba2%2B1dYmYunZ6LgWWPlC4BQMEy989ifDXJ0mvuXuLxzMtRQuLws%2FKcGzE091sCh%2BqKLu3iM4Ms%2F3MfxhLeh%2BrV9MM0w2mhPBFcpoyNEisIx8OY9xU%2FyqibeNvug7E%2F6W%2FCZ2xzFKfNMjGu8Y%2Fnywm8dc68SxP4uvrttjaTKXE%2FvbaKuhN2cqN6LeLYcL3n%2F7AXLVAy1WRRJoXCJd5hqPqfYTrBDuk0l82UfrtGlSOzW%2FhqtbMEpwSajjHjb5uPizo1KcQW4x1KpMj2FV7XSzfY9OBEwHzXF7wjdVyzk1ZLH7B5fqEAQY4DQa%2BzccDtx2eDFD7QIUG9NFpi2OxRYTfxRXMRQ6lnm6zcWH5krH8rNpGfjs7N%2FvgoMPDvfE2tlh0nmnZcXxtSfrCY2ft1dJ2hDVWYg%2FA9y7G60jFnZS96QLy5kpDGzv7SVAK9VDsxGmTEIox%2BuX5MYMMS3wcQGOqUBhDH2UhkYwzoTB6sSzAfVFPp8NveFTPTpULfiIhw1TZ14ImDSh8M7JdL3F0D7uzF115uVa2J8xSM0eulTYtEQH4cZNYpNu61WaW4FV1Z31%2Fi%2By9cJIMg9V65NRn4laZdhUB2H0h2%2BAjsQ113VXGxa7x6c8shpB8iFAQ2ERl5rQRPwBOjT4Mn%2BxAlMKImoZckP1dtBRDMIyggQDgw1ZWG9Beyp6xxR&X-Amz-Signature=475ce1e71162d3531ebd00502c6b048ee0d30168e44e713cb8b5c609ec8b1880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2FUBNKC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDvaeej%2BO4d2zWo5DlueS8LZ4vGIifN%2F4hZVBe0ar%2FjBAIhAIdXOCY4FyAWhK2%2FePsLxsGCwt5udpUowq0nCcmZdUG6Kv8DCEAQABoMNjM3NDIzMTgzODA1IgwzUEhvSB0124UFfWUq3AP8QaumDZFlcaBHanXf9G%2FR%2Fs%2FoYSprelbt7UeRFtCzAE8FIDp0KOj2a2rMXVoaEvd57dapphIuymoevTCgxwLM5re7%2FTvuWJ6L5kZbpmTfnaxXTkcVZkeE93UVkIb%2BZ5uCsZhJvj0o8UiA9mKBtMHxExqkl03GVotd%2BEsnevP84APo66%2BqYChWMJuSXAKUe21zSaKsSCverfpoJxn5zcnVQ%2FHnUN8YQwwHB%2BsPXmUGbmx71AIWbmC40qFITAgON%2B7nx6V7GZYr0bmRBiVBP62%2FxF7hTWadVonGFQS%2BD0R9LNw%2BQdmPIe7mT7m61MItKIWqc7%2Bj0nErGeMm01edmMPHvpTwPiHNRlrP%2Fcil%2BxmLXCE%2FQJ4x8Dcn%2BuvIN4RS13r6ZiIDbefWaeR4ht8vA5zG7CbSMUugPqDzh9dJskAHFTC0EEVpAFVB7bLX%2FuIQimOf4EhoPTsYbVJfa00q4tf9fVljbqRJgUs5GJpQamdpdyCohWkRtnejSXi%2BQ46vxr%2FrJ9u%2FvrpzwlkEInKLKiyoA6KA4asshdxh7QeK11pxo471zKTYTKYjopa4WU8ejo%2B4XpAkm9JYCSduwLiaeRXtJOyNhZ%2FLyALnVlELrddFZK84m%2FG6y4OH385QtjDDtsHEBjqkAazyjwernyRYL99eGzwwqxzv0ppLlsSQsofFbmS47q9divakTZDl5gDmUj97thA5pU3RQHslLBcLRUMOyiTgfGQvyHaFDPzBhlCSeqtKcbgodkWIdIoO1oRmxv4mzGcc2HR%2FnbVWMNDSVT6rFf84mKLzSUiXLSZqQNw%2FtUJ6O1Ypzlw5DFoOoWRdj9p9EQYWnCisnoiPvv4Iq32f7GeW2gcdsNtm&X-Amz-Signature=67b1d3d2e06dc9a770fde0fbeac138cd6734194f6e5bde93ba9f6290e323e641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2FUBNKC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDvaeej%2BO4d2zWo5DlueS8LZ4vGIifN%2F4hZVBe0ar%2FjBAIhAIdXOCY4FyAWhK2%2FePsLxsGCwt5udpUowq0nCcmZdUG6Kv8DCEAQABoMNjM3NDIzMTgzODA1IgwzUEhvSB0124UFfWUq3AP8QaumDZFlcaBHanXf9G%2FR%2Fs%2FoYSprelbt7UeRFtCzAE8FIDp0KOj2a2rMXVoaEvd57dapphIuymoevTCgxwLM5re7%2FTvuWJ6L5kZbpmTfnaxXTkcVZkeE93UVkIb%2BZ5uCsZhJvj0o8UiA9mKBtMHxExqkl03GVotd%2BEsnevP84APo66%2BqYChWMJuSXAKUe21zSaKsSCverfpoJxn5zcnVQ%2FHnUN8YQwwHB%2BsPXmUGbmx71AIWbmC40qFITAgON%2B7nx6V7GZYr0bmRBiVBP62%2FxF7hTWadVonGFQS%2BD0R9LNw%2BQdmPIe7mT7m61MItKIWqc7%2Bj0nErGeMm01edmMPHvpTwPiHNRlrP%2Fcil%2BxmLXCE%2FQJ4x8Dcn%2BuvIN4RS13r6ZiIDbefWaeR4ht8vA5zG7CbSMUugPqDzh9dJskAHFTC0EEVpAFVB7bLX%2FuIQimOf4EhoPTsYbVJfa00q4tf9fVljbqRJgUs5GJpQamdpdyCohWkRtnejSXi%2BQ46vxr%2FrJ9u%2FvrpzwlkEInKLKiyoA6KA4asshdxh7QeK11pxo471zKTYTKYjopa4WU8ejo%2B4XpAkm9JYCSduwLiaeRXtJOyNhZ%2FLyALnVlELrddFZK84m%2FG6y4OH385QtjDDtsHEBjqkAazyjwernyRYL99eGzwwqxzv0ppLlsSQsofFbmS47q9divakTZDl5gDmUj97thA5pU3RQHslLBcLRUMOyiTgfGQvyHaFDPzBhlCSeqtKcbgodkWIdIoO1oRmxv4mzGcc2HR%2FnbVWMNDSVT6rFf84mKLzSUiXLSZqQNw%2FtUJ6O1Ypzlw5DFoOoWRdj9p9EQYWnCisnoiPvv4Iq32f7GeW2gcdsNtm&X-Amz-Signature=4112a3d3d0022b1ec25e7d694c35cbf194e20a98d2ca0340c46c783278f1ddd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUCJIMI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBx8rI1FspAP%2BxM7l83gsxkRk%2FQAy0nbpGCW9rsQtHm%2BAiBXRqWsO7xD7ayAaiTp%2Fqusp9nsklKtLHlOT1%2F%2Br937fCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMHjSUvMs2i%2BFYNmPgKtwDAh80ePZMZptp1cmpB4FXqP243U%2BvLFWjiZsSl%2Fj79DJC0liJR9Cs89AGCcw5kN23je6MM7%2Ff3dAyLl%2FHlXbLtvdiFmoJkUAKJ4bqr0p0sCrWYusudeeh11xy%2BVWBJ2FtwmQUYL5GuN65zswVxlxPbPogzftYb18w7YIlEbyvoVQMVg0%2BMBZGflE4kJHlQWKVlshdiSp%2B6SQlRpi%2FwrOD0Jn7lNCzTuwhlHnrysoIH3eoCY1%2FrlMvHiqvw95rxjLpiHzE75GG7eDd6o1fdwZSp9O3Z1boWVzBocGKTnmGLURTGk1thvesypQ%2BZts8CqgkIVH8mjcFPsDqRwGHD7UAahYbHPab9%2Bsa2TZlGsSr4axSMCqe34dnEy4CD2Os4CHyHRxrPQ%2BhMfk8aojwHBfkEEVeKqk7d10IB4ckAeKTCDMe8E%2FjOQ%2FIFTxI%2FIzjN68RcjGpu1nPz%2FVq7JpJ2gXnX0F%2F%2FfVSMEkY0bxfkqqC5cZmQmunzgin0InLQ7y54OOJUi49bgt7xeofXoiEs6289v1x9NcCU6IHEr9YZCoV0wAWtxrnJoBryiZUiX0yL3TYXUa4iok%2FxsEYxSBzZ9%2BdJURGa2D1dqEutHjIb9zJQOQJvROPWzkGldWZuQUwurbBxAY6pgERYqCswdq8biZk5wh7Z14R3aTVqhEn0SzyTwE%2FN2n60dvoSeIMOTC7MBbbXWwB8c%2F%2Bfi7CDPj6W48jQ5M33XgF4aYhx7a6H4x%2BPsZ8Arhed%2Fzza2QxNm8mOKuVzBB5C0agpwPKk0UUGz60fgphRevFLGl5m4iIC0tg%2BEjyA%2Ff3U8W4ozgXi2qEYDmratMl3fP77QSWmZTIgp0lpIGvlUO0TzeN8Hda&X-Amz-Signature=bec2d26844f532d5511aa6043747b862777242f6ce9b6e26e54d65b959414fc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUCJIMI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBx8rI1FspAP%2BxM7l83gsxkRk%2FQAy0nbpGCW9rsQtHm%2BAiBXRqWsO7xD7ayAaiTp%2Fqusp9nsklKtLHlOT1%2F%2Br937fCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMHjSUvMs2i%2BFYNmPgKtwDAh80ePZMZptp1cmpB4FXqP243U%2BvLFWjiZsSl%2Fj79DJC0liJR9Cs89AGCcw5kN23je6MM7%2Ff3dAyLl%2FHlXbLtvdiFmoJkUAKJ4bqr0p0sCrWYusudeeh11xy%2BVWBJ2FtwmQUYL5GuN65zswVxlxPbPogzftYb18w7YIlEbyvoVQMVg0%2BMBZGflE4kJHlQWKVlshdiSp%2B6SQlRpi%2FwrOD0Jn7lNCzTuwhlHnrysoIH3eoCY1%2FrlMvHiqvw95rxjLpiHzE75GG7eDd6o1fdwZSp9O3Z1boWVzBocGKTnmGLURTGk1thvesypQ%2BZts8CqgkIVH8mjcFPsDqRwGHD7UAahYbHPab9%2Bsa2TZlGsSr4axSMCqe34dnEy4CD2Os4CHyHRxrPQ%2BhMfk8aojwHBfkEEVeKqk7d10IB4ckAeKTCDMe8E%2FjOQ%2FIFTxI%2FIzjN68RcjGpu1nPz%2FVq7JpJ2gXnX0F%2F%2FfVSMEkY0bxfkqqC5cZmQmunzgin0InLQ7y54OOJUi49bgt7xeofXoiEs6289v1x9NcCU6IHEr9YZCoV0wAWtxrnJoBryiZUiX0yL3TYXUa4iok%2FxsEYxSBzZ9%2BdJURGa2D1dqEutHjIb9zJQOQJvROPWzkGldWZuQUwurbBxAY6pgERYqCswdq8biZk5wh7Z14R3aTVqhEn0SzyTwE%2FN2n60dvoSeIMOTC7MBbbXWwB8c%2F%2Bfi7CDPj6W48jQ5M33XgF4aYhx7a6H4x%2BPsZ8Arhed%2Fzza2QxNm8mOKuVzBB5C0agpwPKk0UUGz60fgphRevFLGl5m4iIC0tg%2BEjyA%2Ff3U8W4ozgXi2qEYDmratMl3fP77QSWmZTIgp0lpIGvlUO0TzeN8Hda&X-Amz-Signature=d504dc5a2be503aa22eb8710bc512f73b1cc2e6849f8746964164e1b6d640b1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUCJIMI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBx8rI1FspAP%2BxM7l83gsxkRk%2FQAy0nbpGCW9rsQtHm%2BAiBXRqWsO7xD7ayAaiTp%2Fqusp9nsklKtLHlOT1%2F%2Br937fCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMHjSUvMs2i%2BFYNmPgKtwDAh80ePZMZptp1cmpB4FXqP243U%2BvLFWjiZsSl%2Fj79DJC0liJR9Cs89AGCcw5kN23je6MM7%2Ff3dAyLl%2FHlXbLtvdiFmoJkUAKJ4bqr0p0sCrWYusudeeh11xy%2BVWBJ2FtwmQUYL5GuN65zswVxlxPbPogzftYb18w7YIlEbyvoVQMVg0%2BMBZGflE4kJHlQWKVlshdiSp%2B6SQlRpi%2FwrOD0Jn7lNCzTuwhlHnrysoIH3eoCY1%2FrlMvHiqvw95rxjLpiHzE75GG7eDd6o1fdwZSp9O3Z1boWVzBocGKTnmGLURTGk1thvesypQ%2BZts8CqgkIVH8mjcFPsDqRwGHD7UAahYbHPab9%2Bsa2TZlGsSr4axSMCqe34dnEy4CD2Os4CHyHRxrPQ%2BhMfk8aojwHBfkEEVeKqk7d10IB4ckAeKTCDMe8E%2FjOQ%2FIFTxI%2FIzjN68RcjGpu1nPz%2FVq7JpJ2gXnX0F%2F%2FfVSMEkY0bxfkqqC5cZmQmunzgin0InLQ7y54OOJUi49bgt7xeofXoiEs6289v1x9NcCU6IHEr9YZCoV0wAWtxrnJoBryiZUiX0yL3TYXUa4iok%2FxsEYxSBzZ9%2BdJURGa2D1dqEutHjIb9zJQOQJvROPWzkGldWZuQUwurbBxAY6pgERYqCswdq8biZk5wh7Z14R3aTVqhEn0SzyTwE%2FN2n60dvoSeIMOTC7MBbbXWwB8c%2F%2Bfi7CDPj6W48jQ5M33XgF4aYhx7a6H4x%2BPsZ8Arhed%2Fzza2QxNm8mOKuVzBB5C0agpwPKk0UUGz60fgphRevFLGl5m4iIC0tg%2BEjyA%2Ff3U8W4ozgXi2qEYDmratMl3fP77QSWmZTIgp0lpIGvlUO0TzeN8Hda&X-Amz-Signature=a83ab3cf90cc915066a9b7c5cc60e31b92af2f51d5f15cd1ecf3a7494dffe64c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUCJIMI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBx8rI1FspAP%2BxM7l83gsxkRk%2FQAy0nbpGCW9rsQtHm%2BAiBXRqWsO7xD7ayAaiTp%2Fqusp9nsklKtLHlOT1%2F%2Br937fCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMHjSUvMs2i%2BFYNmPgKtwDAh80ePZMZptp1cmpB4FXqP243U%2BvLFWjiZsSl%2Fj79DJC0liJR9Cs89AGCcw5kN23je6MM7%2Ff3dAyLl%2FHlXbLtvdiFmoJkUAKJ4bqr0p0sCrWYusudeeh11xy%2BVWBJ2FtwmQUYL5GuN65zswVxlxPbPogzftYb18w7YIlEbyvoVQMVg0%2BMBZGflE4kJHlQWKVlshdiSp%2B6SQlRpi%2FwrOD0Jn7lNCzTuwhlHnrysoIH3eoCY1%2FrlMvHiqvw95rxjLpiHzE75GG7eDd6o1fdwZSp9O3Z1boWVzBocGKTnmGLURTGk1thvesypQ%2BZts8CqgkIVH8mjcFPsDqRwGHD7UAahYbHPab9%2Bsa2TZlGsSr4axSMCqe34dnEy4CD2Os4CHyHRxrPQ%2BhMfk8aojwHBfkEEVeKqk7d10IB4ckAeKTCDMe8E%2FjOQ%2FIFTxI%2FIzjN68RcjGpu1nPz%2FVq7JpJ2gXnX0F%2F%2FfVSMEkY0bxfkqqC5cZmQmunzgin0InLQ7y54OOJUi49bgt7xeofXoiEs6289v1x9NcCU6IHEr9YZCoV0wAWtxrnJoBryiZUiX0yL3TYXUa4iok%2FxsEYxSBzZ9%2BdJURGa2D1dqEutHjIb9zJQOQJvROPWzkGldWZuQUwurbBxAY6pgERYqCswdq8biZk5wh7Z14R3aTVqhEn0SzyTwE%2FN2n60dvoSeIMOTC7MBbbXWwB8c%2F%2Bfi7CDPj6W48jQ5M33XgF4aYhx7a6H4x%2BPsZ8Arhed%2Fzza2QxNm8mOKuVzBB5C0agpwPKk0UUGz60fgphRevFLGl5m4iIC0tg%2BEjyA%2Ff3U8W4ozgXi2qEYDmratMl3fP77QSWmZTIgp0lpIGvlUO0TzeN8Hda&X-Amz-Signature=2ee1fe53c1f705218b78f325da2314aa07020a08588a2839982f3bd881cb117a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUCJIMI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBx8rI1FspAP%2BxM7l83gsxkRk%2FQAy0nbpGCW9rsQtHm%2BAiBXRqWsO7xD7ayAaiTp%2Fqusp9nsklKtLHlOT1%2F%2Br937fCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMHjSUvMs2i%2BFYNmPgKtwDAh80ePZMZptp1cmpB4FXqP243U%2BvLFWjiZsSl%2Fj79DJC0liJR9Cs89AGCcw5kN23je6MM7%2Ff3dAyLl%2FHlXbLtvdiFmoJkUAKJ4bqr0p0sCrWYusudeeh11xy%2BVWBJ2FtwmQUYL5GuN65zswVxlxPbPogzftYb18w7YIlEbyvoVQMVg0%2BMBZGflE4kJHlQWKVlshdiSp%2B6SQlRpi%2FwrOD0Jn7lNCzTuwhlHnrysoIH3eoCY1%2FrlMvHiqvw95rxjLpiHzE75GG7eDd6o1fdwZSp9O3Z1boWVzBocGKTnmGLURTGk1thvesypQ%2BZts8CqgkIVH8mjcFPsDqRwGHD7UAahYbHPab9%2Bsa2TZlGsSr4axSMCqe34dnEy4CD2Os4CHyHRxrPQ%2BhMfk8aojwHBfkEEVeKqk7d10IB4ckAeKTCDMe8E%2FjOQ%2FIFTxI%2FIzjN68RcjGpu1nPz%2FVq7JpJ2gXnX0F%2F%2FfVSMEkY0bxfkqqC5cZmQmunzgin0InLQ7y54OOJUi49bgt7xeofXoiEs6289v1x9NcCU6IHEr9YZCoV0wAWtxrnJoBryiZUiX0yL3TYXUa4iok%2FxsEYxSBzZ9%2BdJURGa2D1dqEutHjIb9zJQOQJvROPWzkGldWZuQUwurbBxAY6pgERYqCswdq8biZk5wh7Z14R3aTVqhEn0SzyTwE%2FN2n60dvoSeIMOTC7MBbbXWwB8c%2F%2Bfi7CDPj6W48jQ5M33XgF4aYhx7a6H4x%2BPsZ8Arhed%2Fzza2QxNm8mOKuVzBB5C0agpwPKk0UUGz60fgphRevFLGl5m4iIC0tg%2BEjyA%2Ff3U8W4ozgXi2qEYDmratMl3fP77QSWmZTIgp0lpIGvlUO0TzeN8Hda&X-Amz-Signature=239f0a83197d58266b2d7227d6b1f479528864c4131d43b134dd7c6f6f9d73dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUCJIMI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBx8rI1FspAP%2BxM7l83gsxkRk%2FQAy0nbpGCW9rsQtHm%2BAiBXRqWsO7xD7ayAaiTp%2Fqusp9nsklKtLHlOT1%2F%2Br937fCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMHjSUvMs2i%2BFYNmPgKtwDAh80ePZMZptp1cmpB4FXqP243U%2BvLFWjiZsSl%2Fj79DJC0liJR9Cs89AGCcw5kN23je6MM7%2Ff3dAyLl%2FHlXbLtvdiFmoJkUAKJ4bqr0p0sCrWYusudeeh11xy%2BVWBJ2FtwmQUYL5GuN65zswVxlxPbPogzftYb18w7YIlEbyvoVQMVg0%2BMBZGflE4kJHlQWKVlshdiSp%2B6SQlRpi%2FwrOD0Jn7lNCzTuwhlHnrysoIH3eoCY1%2FrlMvHiqvw95rxjLpiHzE75GG7eDd6o1fdwZSp9O3Z1boWVzBocGKTnmGLURTGk1thvesypQ%2BZts8CqgkIVH8mjcFPsDqRwGHD7UAahYbHPab9%2Bsa2TZlGsSr4axSMCqe34dnEy4CD2Os4CHyHRxrPQ%2BhMfk8aojwHBfkEEVeKqk7d10IB4ckAeKTCDMe8E%2FjOQ%2FIFTxI%2FIzjN68RcjGpu1nPz%2FVq7JpJ2gXnX0F%2F%2FfVSMEkY0bxfkqqC5cZmQmunzgin0InLQ7y54OOJUi49bgt7xeofXoiEs6289v1x9NcCU6IHEr9YZCoV0wAWtxrnJoBryiZUiX0yL3TYXUa4iok%2FxsEYxSBzZ9%2BdJURGa2D1dqEutHjIb9zJQOQJvROPWzkGldWZuQUwurbBxAY6pgERYqCswdq8biZk5wh7Z14R3aTVqhEn0SzyTwE%2FN2n60dvoSeIMOTC7MBbbXWwB8c%2F%2Bfi7CDPj6W48jQ5M33XgF4aYhx7a6H4x%2BPsZ8Arhed%2Fzza2QxNm8mOKuVzBB5C0agpwPKk0UUGz60fgphRevFLGl5m4iIC0tg%2BEjyA%2Ff3U8W4ozgXi2qEYDmratMl3fP77QSWmZTIgp0lpIGvlUO0TzeN8Hda&X-Amz-Signature=bad37b2a850d893378296026d31ecde941cfbe3234046c9a19a1166592318c74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUCJIMI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBx8rI1FspAP%2BxM7l83gsxkRk%2FQAy0nbpGCW9rsQtHm%2BAiBXRqWsO7xD7ayAaiTp%2Fqusp9nsklKtLHlOT1%2F%2Br937fCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMHjSUvMs2i%2BFYNmPgKtwDAh80ePZMZptp1cmpB4FXqP243U%2BvLFWjiZsSl%2Fj79DJC0liJR9Cs89AGCcw5kN23je6MM7%2Ff3dAyLl%2FHlXbLtvdiFmoJkUAKJ4bqr0p0sCrWYusudeeh11xy%2BVWBJ2FtwmQUYL5GuN65zswVxlxPbPogzftYb18w7YIlEbyvoVQMVg0%2BMBZGflE4kJHlQWKVlshdiSp%2B6SQlRpi%2FwrOD0Jn7lNCzTuwhlHnrysoIH3eoCY1%2FrlMvHiqvw95rxjLpiHzE75GG7eDd6o1fdwZSp9O3Z1boWVzBocGKTnmGLURTGk1thvesypQ%2BZts8CqgkIVH8mjcFPsDqRwGHD7UAahYbHPab9%2Bsa2TZlGsSr4axSMCqe34dnEy4CD2Os4CHyHRxrPQ%2BhMfk8aojwHBfkEEVeKqk7d10IB4ckAeKTCDMe8E%2FjOQ%2FIFTxI%2FIzjN68RcjGpu1nPz%2FVq7JpJ2gXnX0F%2F%2FfVSMEkY0bxfkqqC5cZmQmunzgin0InLQ7y54OOJUi49bgt7xeofXoiEs6289v1x9NcCU6IHEr9YZCoV0wAWtxrnJoBryiZUiX0yL3TYXUa4iok%2FxsEYxSBzZ9%2BdJURGa2D1dqEutHjIb9zJQOQJvROPWzkGldWZuQUwurbBxAY6pgERYqCswdq8biZk5wh7Z14R3aTVqhEn0SzyTwE%2FN2n60dvoSeIMOTC7MBbbXWwB8c%2F%2Bfi7CDPj6W48jQ5M33XgF4aYhx7a6H4x%2BPsZ8Arhed%2Fzza2QxNm8mOKuVzBB5C0agpwPKk0UUGz60fgphRevFLGl5m4iIC0tg%2BEjyA%2Ff3U8W4ozgXi2qEYDmratMl3fP77QSWmZTIgp0lpIGvlUO0TzeN8Hda&X-Amz-Signature=a83ab3cf90cc915066a9b7c5cc60e31b92af2f51d5f15cd1ecf3a7494dffe64c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUCJIMI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBx8rI1FspAP%2BxM7l83gsxkRk%2FQAy0nbpGCW9rsQtHm%2BAiBXRqWsO7xD7ayAaiTp%2Fqusp9nsklKtLHlOT1%2F%2Br937fCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMHjSUvMs2i%2BFYNmPgKtwDAh80ePZMZptp1cmpB4FXqP243U%2BvLFWjiZsSl%2Fj79DJC0liJR9Cs89AGCcw5kN23je6MM7%2Ff3dAyLl%2FHlXbLtvdiFmoJkUAKJ4bqr0p0sCrWYusudeeh11xy%2BVWBJ2FtwmQUYL5GuN65zswVxlxPbPogzftYb18w7YIlEbyvoVQMVg0%2BMBZGflE4kJHlQWKVlshdiSp%2B6SQlRpi%2FwrOD0Jn7lNCzTuwhlHnrysoIH3eoCY1%2FrlMvHiqvw95rxjLpiHzE75GG7eDd6o1fdwZSp9O3Z1boWVzBocGKTnmGLURTGk1thvesypQ%2BZts8CqgkIVH8mjcFPsDqRwGHD7UAahYbHPab9%2Bsa2TZlGsSr4axSMCqe34dnEy4CD2Os4CHyHRxrPQ%2BhMfk8aojwHBfkEEVeKqk7d10IB4ckAeKTCDMe8E%2FjOQ%2FIFTxI%2FIzjN68RcjGpu1nPz%2FVq7JpJ2gXnX0F%2F%2FfVSMEkY0bxfkqqC5cZmQmunzgin0InLQ7y54OOJUi49bgt7xeofXoiEs6289v1x9NcCU6IHEr9YZCoV0wAWtxrnJoBryiZUiX0yL3TYXUa4iok%2FxsEYxSBzZ9%2BdJURGa2D1dqEutHjIb9zJQOQJvROPWzkGldWZuQUwurbBxAY6pgERYqCswdq8biZk5wh7Z14R3aTVqhEn0SzyTwE%2FN2n60dvoSeIMOTC7MBbbXWwB8c%2F%2Bfi7CDPj6W48jQ5M33XgF4aYhx7a6H4x%2BPsZ8Arhed%2Fzza2QxNm8mOKuVzBB5C0agpwPKk0UUGz60fgphRevFLGl5m4iIC0tg%2BEjyA%2Ff3U8W4ozgXi2qEYDmratMl3fP77QSWmZTIgp0lpIGvlUO0TzeN8Hda&X-Amz-Signature=530be9620d1b5e7a6dc8a1f98b60d0d05b605105a7632e30dc5c39432a83c45d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUCJIMI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBx8rI1FspAP%2BxM7l83gsxkRk%2FQAy0nbpGCW9rsQtHm%2BAiBXRqWsO7xD7ayAaiTp%2Fqusp9nsklKtLHlOT1%2F%2Br937fCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMHjSUvMs2i%2BFYNmPgKtwDAh80ePZMZptp1cmpB4FXqP243U%2BvLFWjiZsSl%2Fj79DJC0liJR9Cs89AGCcw5kN23je6MM7%2Ff3dAyLl%2FHlXbLtvdiFmoJkUAKJ4bqr0p0sCrWYusudeeh11xy%2BVWBJ2FtwmQUYL5GuN65zswVxlxPbPogzftYb18w7YIlEbyvoVQMVg0%2BMBZGflE4kJHlQWKVlshdiSp%2B6SQlRpi%2FwrOD0Jn7lNCzTuwhlHnrysoIH3eoCY1%2FrlMvHiqvw95rxjLpiHzE75GG7eDd6o1fdwZSp9O3Z1boWVzBocGKTnmGLURTGk1thvesypQ%2BZts8CqgkIVH8mjcFPsDqRwGHD7UAahYbHPab9%2Bsa2TZlGsSr4axSMCqe34dnEy4CD2Os4CHyHRxrPQ%2BhMfk8aojwHBfkEEVeKqk7d10IB4ckAeKTCDMe8E%2FjOQ%2FIFTxI%2FIzjN68RcjGpu1nPz%2FVq7JpJ2gXnX0F%2F%2FfVSMEkY0bxfkqqC5cZmQmunzgin0InLQ7y54OOJUi49bgt7xeofXoiEs6289v1x9NcCU6IHEr9YZCoV0wAWtxrnJoBryiZUiX0yL3TYXUa4iok%2FxsEYxSBzZ9%2BdJURGa2D1dqEutHjIb9zJQOQJvROPWzkGldWZuQUwurbBxAY6pgERYqCswdq8biZk5wh7Z14R3aTVqhEn0SzyTwE%2FN2n60dvoSeIMOTC7MBbbXWwB8c%2F%2Bfi7CDPj6W48jQ5M33XgF4aYhx7a6H4x%2BPsZ8Arhed%2Fzza2QxNm8mOKuVzBB5C0agpwPKk0UUGz60fgphRevFLGl5m4iIC0tg%2BEjyA%2Ff3U8W4ozgXi2qEYDmratMl3fP77QSWmZTIgp0lpIGvlUO0TzeN8Hda&X-Amz-Signature=6f5d85d97506863ca3deb689384d26a08c06bcc4a7f038f9db26af29b7df4025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUCJIMI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBx8rI1FspAP%2BxM7l83gsxkRk%2FQAy0nbpGCW9rsQtHm%2BAiBXRqWsO7xD7ayAaiTp%2Fqusp9nsklKtLHlOT1%2F%2Br937fCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMHjSUvMs2i%2BFYNmPgKtwDAh80ePZMZptp1cmpB4FXqP243U%2BvLFWjiZsSl%2Fj79DJC0liJR9Cs89AGCcw5kN23je6MM7%2Ff3dAyLl%2FHlXbLtvdiFmoJkUAKJ4bqr0p0sCrWYusudeeh11xy%2BVWBJ2FtwmQUYL5GuN65zswVxlxPbPogzftYb18w7YIlEbyvoVQMVg0%2BMBZGflE4kJHlQWKVlshdiSp%2B6SQlRpi%2FwrOD0Jn7lNCzTuwhlHnrysoIH3eoCY1%2FrlMvHiqvw95rxjLpiHzE75GG7eDd6o1fdwZSp9O3Z1boWVzBocGKTnmGLURTGk1thvesypQ%2BZts8CqgkIVH8mjcFPsDqRwGHD7UAahYbHPab9%2Bsa2TZlGsSr4axSMCqe34dnEy4CD2Os4CHyHRxrPQ%2BhMfk8aojwHBfkEEVeKqk7d10IB4ckAeKTCDMe8E%2FjOQ%2FIFTxI%2FIzjN68RcjGpu1nPz%2FVq7JpJ2gXnX0F%2F%2FfVSMEkY0bxfkqqC5cZmQmunzgin0InLQ7y54OOJUi49bgt7xeofXoiEs6289v1x9NcCU6IHEr9YZCoV0wAWtxrnJoBryiZUiX0yL3TYXUa4iok%2FxsEYxSBzZ9%2BdJURGa2D1dqEutHjIb9zJQOQJvROPWzkGldWZuQUwurbBxAY6pgERYqCswdq8biZk5wh7Z14R3aTVqhEn0SzyTwE%2FN2n60dvoSeIMOTC7MBbbXWwB8c%2F%2Bfi7CDPj6W48jQ5M33XgF4aYhx7a6H4x%2BPsZ8Arhed%2Fzza2QxNm8mOKuVzBB5C0agpwPKk0UUGz60fgphRevFLGl5m4iIC0tg%2BEjyA%2Ff3U8W4ozgXi2qEYDmratMl3fP77QSWmZTIgp0lpIGvlUO0TzeN8Hda&X-Amz-Signature=9143e5494d5ed70d0f3fb08c26fbfa2b758e51a6d096437d98988c8a7b581d43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
