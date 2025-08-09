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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466337LOPXW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEKRjeT65HMAySQQNZEvRkWfyyfpc5uZr0ImeXGqKEngIhAMocS60Zf5p3%2F1twLqVszW1y4BAk1HJMaH3Sm2Ywah2GKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU9LoTem5TewzEwXMq3AM5IZ29EvXGbI7yOHry0xJEV61qb45mJtNfICZBzLD5vrDh2%2Bl6j2o0t%2BAyjxuAxpNOHvluVq%2BSyKni1NPbcYr2wMCoYbqo5lJLOx0O%2F9ZuvVupaquWzfx7y9vl0Kn9IXB2LxajDA9Ab%2B9trg4YgkXt6CVIc5Zsd3XFPhCfjlHwKmwfmggzSinJRVxdysNgw%2FMdkCf4Z9RDPEqCw6ZxpjMaWeCcJpSPG0lLIUQZ%2F3u6bs2kBI30%2FspkSz7aiPFP7jwiLpgh%2BL5Gi0CmeqbpBj6XxccPQlYK%2B7NO2jkehMjA7FYFyG3j41TzXl2enMlW0k89OjfBLjwWazPZsSa%2FDs9J5m0zcsMsG0mzund3H7R2nKmY0cQTaL4wsM92EUALLB7J0ZgW00%2FjgAyFJRlOGdeMPHRF3gGxR%2FSrd0JUF9VnVlQ9I9P2XiHi7fLT7JSRnyj7YWKvehRadseVjkBjamQOnkIoNQ%2BAiRaeF1ASfBXmUvtSaZxstV8MQSx%2F8jZiaZfLUcTYc%2Bm%2BTuabJUYc9Oj5XtEt31sOkbqaKt1pb78ZDSrmLNso6mm8UoxKRA%2BiesGvapa5Hd3NcjueUK21eFZTQZLotixgGtyoHlCZ1AnKDFDjG%2B%2FU79GpNp%2Bd0zDE%2Bt3EBjqkAedSdQGUEQlGuKLnxaOt9oL8Ct26FuppQAEI8y6ZYD3V2m4G%2FJdclP1SQSxszJMKnfni7oN%2BtRwBOIwFdOAwAQDRkFCD%2Br3K%2BF0Opz4B4COnQ95PKJpKIWtCvJ7sGSzo%2BAsLQqEUpkujQjVIm7CQoF1dShUlyT0Y8wjqX%2BgV5AIwaxam1OB7Om9G%2F2E6TLmYfHLqb8a%2B12JyFLWFPl6TNclJ%2FF37&X-Amz-Signature=18eb4404c09f2a3b13a68a14ea5140f3749af9a5046cd488912f56999bf05a17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466337LOPXW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEKRjeT65HMAySQQNZEvRkWfyyfpc5uZr0ImeXGqKEngIhAMocS60Zf5p3%2F1twLqVszW1y4BAk1HJMaH3Sm2Ywah2GKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU9LoTem5TewzEwXMq3AM5IZ29EvXGbI7yOHry0xJEV61qb45mJtNfICZBzLD5vrDh2%2Bl6j2o0t%2BAyjxuAxpNOHvluVq%2BSyKni1NPbcYr2wMCoYbqo5lJLOx0O%2F9ZuvVupaquWzfx7y9vl0Kn9IXB2LxajDA9Ab%2B9trg4YgkXt6CVIc5Zsd3XFPhCfjlHwKmwfmggzSinJRVxdysNgw%2FMdkCf4Z9RDPEqCw6ZxpjMaWeCcJpSPG0lLIUQZ%2F3u6bs2kBI30%2FspkSz7aiPFP7jwiLpgh%2BL5Gi0CmeqbpBj6XxccPQlYK%2B7NO2jkehMjA7FYFyG3j41TzXl2enMlW0k89OjfBLjwWazPZsSa%2FDs9J5m0zcsMsG0mzund3H7R2nKmY0cQTaL4wsM92EUALLB7J0ZgW00%2FjgAyFJRlOGdeMPHRF3gGxR%2FSrd0JUF9VnVlQ9I9P2XiHi7fLT7JSRnyj7YWKvehRadseVjkBjamQOnkIoNQ%2BAiRaeF1ASfBXmUvtSaZxstV8MQSx%2F8jZiaZfLUcTYc%2Bm%2BTuabJUYc9Oj5XtEt31sOkbqaKt1pb78ZDSrmLNso6mm8UoxKRA%2BiesGvapa5Hd3NcjueUK21eFZTQZLotixgGtyoHlCZ1AnKDFDjG%2B%2FU79GpNp%2Bd0zDE%2Bt3EBjqkAedSdQGUEQlGuKLnxaOt9oL8Ct26FuppQAEI8y6ZYD3V2m4G%2FJdclP1SQSxszJMKnfni7oN%2BtRwBOIwFdOAwAQDRkFCD%2Br3K%2BF0Opz4B4COnQ95PKJpKIWtCvJ7sGSzo%2BAsLQqEUpkujQjVIm7CQoF1dShUlyT0Y8wjqX%2BgV5AIwaxam1OB7Om9G%2F2E6TLmYfHLqb8a%2B12JyFLWFPl6TNclJ%2FF37&X-Amz-Signature=e49f500a3a864d628f0e947ec3775b0d49dcb0adb1edb19f2151729a26d08821&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466337LOPXW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEKRjeT65HMAySQQNZEvRkWfyyfpc5uZr0ImeXGqKEngIhAMocS60Zf5p3%2F1twLqVszW1y4BAk1HJMaH3Sm2Ywah2GKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU9LoTem5TewzEwXMq3AM5IZ29EvXGbI7yOHry0xJEV61qb45mJtNfICZBzLD5vrDh2%2Bl6j2o0t%2BAyjxuAxpNOHvluVq%2BSyKni1NPbcYr2wMCoYbqo5lJLOx0O%2F9ZuvVupaquWzfx7y9vl0Kn9IXB2LxajDA9Ab%2B9trg4YgkXt6CVIc5Zsd3XFPhCfjlHwKmwfmggzSinJRVxdysNgw%2FMdkCf4Z9RDPEqCw6ZxpjMaWeCcJpSPG0lLIUQZ%2F3u6bs2kBI30%2FspkSz7aiPFP7jwiLpgh%2BL5Gi0CmeqbpBj6XxccPQlYK%2B7NO2jkehMjA7FYFyG3j41TzXl2enMlW0k89OjfBLjwWazPZsSa%2FDs9J5m0zcsMsG0mzund3H7R2nKmY0cQTaL4wsM92EUALLB7J0ZgW00%2FjgAyFJRlOGdeMPHRF3gGxR%2FSrd0JUF9VnVlQ9I9P2XiHi7fLT7JSRnyj7YWKvehRadseVjkBjamQOnkIoNQ%2BAiRaeF1ASfBXmUvtSaZxstV8MQSx%2F8jZiaZfLUcTYc%2Bm%2BTuabJUYc9Oj5XtEt31sOkbqaKt1pb78ZDSrmLNso6mm8UoxKRA%2BiesGvapa5Hd3NcjueUK21eFZTQZLotixgGtyoHlCZ1AnKDFDjG%2B%2FU79GpNp%2Bd0zDE%2Bt3EBjqkAedSdQGUEQlGuKLnxaOt9oL8Ct26FuppQAEI8y6ZYD3V2m4G%2FJdclP1SQSxszJMKnfni7oN%2BtRwBOIwFdOAwAQDRkFCD%2Br3K%2BF0Opz4B4COnQ95PKJpKIWtCvJ7sGSzo%2BAsLQqEUpkujQjVIm7CQoF1dShUlyT0Y8wjqX%2BgV5AIwaxam1OB7Om9G%2F2E6TLmYfHLqb8a%2B12JyFLWFPl6TNclJ%2FF37&X-Amz-Signature=9d279a60c45295c4f7dc1122f44ca44568ed3b67fa6989d9a6ab77fe1622b42b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466337LOPXW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEKRjeT65HMAySQQNZEvRkWfyyfpc5uZr0ImeXGqKEngIhAMocS60Zf5p3%2F1twLqVszW1y4BAk1HJMaH3Sm2Ywah2GKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU9LoTem5TewzEwXMq3AM5IZ29EvXGbI7yOHry0xJEV61qb45mJtNfICZBzLD5vrDh2%2Bl6j2o0t%2BAyjxuAxpNOHvluVq%2BSyKni1NPbcYr2wMCoYbqo5lJLOx0O%2F9ZuvVupaquWzfx7y9vl0Kn9IXB2LxajDA9Ab%2B9trg4YgkXt6CVIc5Zsd3XFPhCfjlHwKmwfmggzSinJRVxdysNgw%2FMdkCf4Z9RDPEqCw6ZxpjMaWeCcJpSPG0lLIUQZ%2F3u6bs2kBI30%2FspkSz7aiPFP7jwiLpgh%2BL5Gi0CmeqbpBj6XxccPQlYK%2B7NO2jkehMjA7FYFyG3j41TzXl2enMlW0k89OjfBLjwWazPZsSa%2FDs9J5m0zcsMsG0mzund3H7R2nKmY0cQTaL4wsM92EUALLB7J0ZgW00%2FjgAyFJRlOGdeMPHRF3gGxR%2FSrd0JUF9VnVlQ9I9P2XiHi7fLT7JSRnyj7YWKvehRadseVjkBjamQOnkIoNQ%2BAiRaeF1ASfBXmUvtSaZxstV8MQSx%2F8jZiaZfLUcTYc%2Bm%2BTuabJUYc9Oj5XtEt31sOkbqaKt1pb78ZDSrmLNso6mm8UoxKRA%2BiesGvapa5Hd3NcjueUK21eFZTQZLotixgGtyoHlCZ1AnKDFDjG%2B%2FU79GpNp%2Bd0zDE%2Bt3EBjqkAedSdQGUEQlGuKLnxaOt9oL8Ct26FuppQAEI8y6ZYD3V2m4G%2FJdclP1SQSxszJMKnfni7oN%2BtRwBOIwFdOAwAQDRkFCD%2Br3K%2BF0Opz4B4COnQ95PKJpKIWtCvJ7sGSzo%2BAsLQqEUpkujQjVIm7CQoF1dShUlyT0Y8wjqX%2BgV5AIwaxam1OB7Om9G%2F2E6TLmYfHLqb8a%2B12JyFLWFPl6TNclJ%2FF37&X-Amz-Signature=0739354586fec2dbd18c730038d19dc2f1ff74738a955f9864f13f8f2c27b21e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466337LOPXW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEKRjeT65HMAySQQNZEvRkWfyyfpc5uZr0ImeXGqKEngIhAMocS60Zf5p3%2F1twLqVszW1y4BAk1HJMaH3Sm2Ywah2GKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU9LoTem5TewzEwXMq3AM5IZ29EvXGbI7yOHry0xJEV61qb45mJtNfICZBzLD5vrDh2%2Bl6j2o0t%2BAyjxuAxpNOHvluVq%2BSyKni1NPbcYr2wMCoYbqo5lJLOx0O%2F9ZuvVupaquWzfx7y9vl0Kn9IXB2LxajDA9Ab%2B9trg4YgkXt6CVIc5Zsd3XFPhCfjlHwKmwfmggzSinJRVxdysNgw%2FMdkCf4Z9RDPEqCw6ZxpjMaWeCcJpSPG0lLIUQZ%2F3u6bs2kBI30%2FspkSz7aiPFP7jwiLpgh%2BL5Gi0CmeqbpBj6XxccPQlYK%2B7NO2jkehMjA7FYFyG3j41TzXl2enMlW0k89OjfBLjwWazPZsSa%2FDs9J5m0zcsMsG0mzund3H7R2nKmY0cQTaL4wsM92EUALLB7J0ZgW00%2FjgAyFJRlOGdeMPHRF3gGxR%2FSrd0JUF9VnVlQ9I9P2XiHi7fLT7JSRnyj7YWKvehRadseVjkBjamQOnkIoNQ%2BAiRaeF1ASfBXmUvtSaZxstV8MQSx%2F8jZiaZfLUcTYc%2Bm%2BTuabJUYc9Oj5XtEt31sOkbqaKt1pb78ZDSrmLNso6mm8UoxKRA%2BiesGvapa5Hd3NcjueUK21eFZTQZLotixgGtyoHlCZ1AnKDFDjG%2B%2FU79GpNp%2Bd0zDE%2Bt3EBjqkAedSdQGUEQlGuKLnxaOt9oL8Ct26FuppQAEI8y6ZYD3V2m4G%2FJdclP1SQSxszJMKnfni7oN%2BtRwBOIwFdOAwAQDRkFCD%2Br3K%2BF0Opz4B4COnQ95PKJpKIWtCvJ7sGSzo%2BAsLQqEUpkujQjVIm7CQoF1dShUlyT0Y8wjqX%2BgV5AIwaxam1OB7Om9G%2F2E6TLmYfHLqb8a%2B12JyFLWFPl6TNclJ%2FF37&X-Amz-Signature=33e0256427adaa6bbe3e27f70a0e7818fc156c8fd62b9e3e081a32ff3f79fcd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466337LOPXW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEKRjeT65HMAySQQNZEvRkWfyyfpc5uZr0ImeXGqKEngIhAMocS60Zf5p3%2F1twLqVszW1y4BAk1HJMaH3Sm2Ywah2GKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU9LoTem5TewzEwXMq3AM5IZ29EvXGbI7yOHry0xJEV61qb45mJtNfICZBzLD5vrDh2%2Bl6j2o0t%2BAyjxuAxpNOHvluVq%2BSyKni1NPbcYr2wMCoYbqo5lJLOx0O%2F9ZuvVupaquWzfx7y9vl0Kn9IXB2LxajDA9Ab%2B9trg4YgkXt6CVIc5Zsd3XFPhCfjlHwKmwfmggzSinJRVxdysNgw%2FMdkCf4Z9RDPEqCw6ZxpjMaWeCcJpSPG0lLIUQZ%2F3u6bs2kBI30%2FspkSz7aiPFP7jwiLpgh%2BL5Gi0CmeqbpBj6XxccPQlYK%2B7NO2jkehMjA7FYFyG3j41TzXl2enMlW0k89OjfBLjwWazPZsSa%2FDs9J5m0zcsMsG0mzund3H7R2nKmY0cQTaL4wsM92EUALLB7J0ZgW00%2FjgAyFJRlOGdeMPHRF3gGxR%2FSrd0JUF9VnVlQ9I9P2XiHi7fLT7JSRnyj7YWKvehRadseVjkBjamQOnkIoNQ%2BAiRaeF1ASfBXmUvtSaZxstV8MQSx%2F8jZiaZfLUcTYc%2Bm%2BTuabJUYc9Oj5XtEt31sOkbqaKt1pb78ZDSrmLNso6mm8UoxKRA%2BiesGvapa5Hd3NcjueUK21eFZTQZLotixgGtyoHlCZ1AnKDFDjG%2B%2FU79GpNp%2Bd0zDE%2Bt3EBjqkAedSdQGUEQlGuKLnxaOt9oL8Ct26FuppQAEI8y6ZYD3V2m4G%2FJdclP1SQSxszJMKnfni7oN%2BtRwBOIwFdOAwAQDRkFCD%2Br3K%2BF0Opz4B4COnQ95PKJpKIWtCvJ7sGSzo%2BAsLQqEUpkujQjVIm7CQoF1dShUlyT0Y8wjqX%2BgV5AIwaxam1OB7Om9G%2F2E6TLmYfHLqb8a%2B12JyFLWFPl6TNclJ%2FF37&X-Amz-Signature=ee065c9411120c3d6be3af84e6e394c65e58a58ea834a4d22849286b73ee8ed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466337LOPXW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEKRjeT65HMAySQQNZEvRkWfyyfpc5uZr0ImeXGqKEngIhAMocS60Zf5p3%2F1twLqVszW1y4BAk1HJMaH3Sm2Ywah2GKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU9LoTem5TewzEwXMq3AM5IZ29EvXGbI7yOHry0xJEV61qb45mJtNfICZBzLD5vrDh2%2Bl6j2o0t%2BAyjxuAxpNOHvluVq%2BSyKni1NPbcYr2wMCoYbqo5lJLOx0O%2F9ZuvVupaquWzfx7y9vl0Kn9IXB2LxajDA9Ab%2B9trg4YgkXt6CVIc5Zsd3XFPhCfjlHwKmwfmggzSinJRVxdysNgw%2FMdkCf4Z9RDPEqCw6ZxpjMaWeCcJpSPG0lLIUQZ%2F3u6bs2kBI30%2FspkSz7aiPFP7jwiLpgh%2BL5Gi0CmeqbpBj6XxccPQlYK%2B7NO2jkehMjA7FYFyG3j41TzXl2enMlW0k89OjfBLjwWazPZsSa%2FDs9J5m0zcsMsG0mzund3H7R2nKmY0cQTaL4wsM92EUALLB7J0ZgW00%2FjgAyFJRlOGdeMPHRF3gGxR%2FSrd0JUF9VnVlQ9I9P2XiHi7fLT7JSRnyj7YWKvehRadseVjkBjamQOnkIoNQ%2BAiRaeF1ASfBXmUvtSaZxstV8MQSx%2F8jZiaZfLUcTYc%2Bm%2BTuabJUYc9Oj5XtEt31sOkbqaKt1pb78ZDSrmLNso6mm8UoxKRA%2BiesGvapa5Hd3NcjueUK21eFZTQZLotixgGtyoHlCZ1AnKDFDjG%2B%2FU79GpNp%2Bd0zDE%2Bt3EBjqkAedSdQGUEQlGuKLnxaOt9oL8Ct26FuppQAEI8y6ZYD3V2m4G%2FJdclP1SQSxszJMKnfni7oN%2BtRwBOIwFdOAwAQDRkFCD%2Br3K%2BF0Opz4B4COnQ95PKJpKIWtCvJ7sGSzo%2BAsLQqEUpkujQjVIm7CQoF1dShUlyT0Y8wjqX%2BgV5AIwaxam1OB7Om9G%2F2E6TLmYfHLqb8a%2B12JyFLWFPl6TNclJ%2FF37&X-Amz-Signature=31a0da7453830c39f3c36a6767b60bb1d3d11f25d8e38befbc712ff32727de27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466337LOPXW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEKRjeT65HMAySQQNZEvRkWfyyfpc5uZr0ImeXGqKEngIhAMocS60Zf5p3%2F1twLqVszW1y4BAk1HJMaH3Sm2Ywah2GKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU9LoTem5TewzEwXMq3AM5IZ29EvXGbI7yOHry0xJEV61qb45mJtNfICZBzLD5vrDh2%2Bl6j2o0t%2BAyjxuAxpNOHvluVq%2BSyKni1NPbcYr2wMCoYbqo5lJLOx0O%2F9ZuvVupaquWzfx7y9vl0Kn9IXB2LxajDA9Ab%2B9trg4YgkXt6CVIc5Zsd3XFPhCfjlHwKmwfmggzSinJRVxdysNgw%2FMdkCf4Z9RDPEqCw6ZxpjMaWeCcJpSPG0lLIUQZ%2F3u6bs2kBI30%2FspkSz7aiPFP7jwiLpgh%2BL5Gi0CmeqbpBj6XxccPQlYK%2B7NO2jkehMjA7FYFyG3j41TzXl2enMlW0k89OjfBLjwWazPZsSa%2FDs9J5m0zcsMsG0mzund3H7R2nKmY0cQTaL4wsM92EUALLB7J0ZgW00%2FjgAyFJRlOGdeMPHRF3gGxR%2FSrd0JUF9VnVlQ9I9P2XiHi7fLT7JSRnyj7YWKvehRadseVjkBjamQOnkIoNQ%2BAiRaeF1ASfBXmUvtSaZxstV8MQSx%2F8jZiaZfLUcTYc%2Bm%2BTuabJUYc9Oj5XtEt31sOkbqaKt1pb78ZDSrmLNso6mm8UoxKRA%2BiesGvapa5Hd3NcjueUK21eFZTQZLotixgGtyoHlCZ1AnKDFDjG%2B%2FU79GpNp%2Bd0zDE%2Bt3EBjqkAedSdQGUEQlGuKLnxaOt9oL8Ct26FuppQAEI8y6ZYD3V2m4G%2FJdclP1SQSxszJMKnfni7oN%2BtRwBOIwFdOAwAQDRkFCD%2Br3K%2BF0Opz4B4COnQ95PKJpKIWtCvJ7sGSzo%2BAsLQqEUpkujQjVIm7CQoF1dShUlyT0Y8wjqX%2BgV5AIwaxam1OB7Om9G%2F2E6TLmYfHLqb8a%2B12JyFLWFPl6TNclJ%2FF37&X-Amz-Signature=4cb86bb0df5ae4183fb6d6828ed3cd1765f821516acf0c157dac7a712f0c91ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466337LOPXW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEKRjeT65HMAySQQNZEvRkWfyyfpc5uZr0ImeXGqKEngIhAMocS60Zf5p3%2F1twLqVszW1y4BAk1HJMaH3Sm2Ywah2GKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU9LoTem5TewzEwXMq3AM5IZ29EvXGbI7yOHry0xJEV61qb45mJtNfICZBzLD5vrDh2%2Bl6j2o0t%2BAyjxuAxpNOHvluVq%2BSyKni1NPbcYr2wMCoYbqo5lJLOx0O%2F9ZuvVupaquWzfx7y9vl0Kn9IXB2LxajDA9Ab%2B9trg4YgkXt6CVIc5Zsd3XFPhCfjlHwKmwfmggzSinJRVxdysNgw%2FMdkCf4Z9RDPEqCw6ZxpjMaWeCcJpSPG0lLIUQZ%2F3u6bs2kBI30%2FspkSz7aiPFP7jwiLpgh%2BL5Gi0CmeqbpBj6XxccPQlYK%2B7NO2jkehMjA7FYFyG3j41TzXl2enMlW0k89OjfBLjwWazPZsSa%2FDs9J5m0zcsMsG0mzund3H7R2nKmY0cQTaL4wsM92EUALLB7J0ZgW00%2FjgAyFJRlOGdeMPHRF3gGxR%2FSrd0JUF9VnVlQ9I9P2XiHi7fLT7JSRnyj7YWKvehRadseVjkBjamQOnkIoNQ%2BAiRaeF1ASfBXmUvtSaZxstV8MQSx%2F8jZiaZfLUcTYc%2Bm%2BTuabJUYc9Oj5XtEt31sOkbqaKt1pb78ZDSrmLNso6mm8UoxKRA%2BiesGvapa5Hd3NcjueUK21eFZTQZLotixgGtyoHlCZ1AnKDFDjG%2B%2FU79GpNp%2Bd0zDE%2Bt3EBjqkAedSdQGUEQlGuKLnxaOt9oL8Ct26FuppQAEI8y6ZYD3V2m4G%2FJdclP1SQSxszJMKnfni7oN%2BtRwBOIwFdOAwAQDRkFCD%2Br3K%2BF0Opz4B4COnQ95PKJpKIWtCvJ7sGSzo%2BAsLQqEUpkujQjVIm7CQoF1dShUlyT0Y8wjqX%2BgV5AIwaxam1OB7Om9G%2F2E6TLmYfHLqb8a%2B12JyFLWFPl6TNclJ%2FF37&X-Amz-Signature=f5b14cec5361059410a0146ca20b1826af9fcfc0bcfb3ed4f57d033080d9fce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466337LOPXW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEKRjeT65HMAySQQNZEvRkWfyyfpc5uZr0ImeXGqKEngIhAMocS60Zf5p3%2F1twLqVszW1y4BAk1HJMaH3Sm2Ywah2GKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU9LoTem5TewzEwXMq3AM5IZ29EvXGbI7yOHry0xJEV61qb45mJtNfICZBzLD5vrDh2%2Bl6j2o0t%2BAyjxuAxpNOHvluVq%2BSyKni1NPbcYr2wMCoYbqo5lJLOx0O%2F9ZuvVupaquWzfx7y9vl0Kn9IXB2LxajDA9Ab%2B9trg4YgkXt6CVIc5Zsd3XFPhCfjlHwKmwfmggzSinJRVxdysNgw%2FMdkCf4Z9RDPEqCw6ZxpjMaWeCcJpSPG0lLIUQZ%2F3u6bs2kBI30%2FspkSz7aiPFP7jwiLpgh%2BL5Gi0CmeqbpBj6XxccPQlYK%2B7NO2jkehMjA7FYFyG3j41TzXl2enMlW0k89OjfBLjwWazPZsSa%2FDs9J5m0zcsMsG0mzund3H7R2nKmY0cQTaL4wsM92EUALLB7J0ZgW00%2FjgAyFJRlOGdeMPHRF3gGxR%2FSrd0JUF9VnVlQ9I9P2XiHi7fLT7JSRnyj7YWKvehRadseVjkBjamQOnkIoNQ%2BAiRaeF1ASfBXmUvtSaZxstV8MQSx%2F8jZiaZfLUcTYc%2Bm%2BTuabJUYc9Oj5XtEt31sOkbqaKt1pb78ZDSrmLNso6mm8UoxKRA%2BiesGvapa5Hd3NcjueUK21eFZTQZLotixgGtyoHlCZ1AnKDFDjG%2B%2FU79GpNp%2Bd0zDE%2Bt3EBjqkAedSdQGUEQlGuKLnxaOt9oL8Ct26FuppQAEI8y6ZYD3V2m4G%2FJdclP1SQSxszJMKnfni7oN%2BtRwBOIwFdOAwAQDRkFCD%2Br3K%2BF0Opz4B4COnQ95PKJpKIWtCvJ7sGSzo%2BAsLQqEUpkujQjVIm7CQoF1dShUlyT0Y8wjqX%2BgV5AIwaxam1OB7Om9G%2F2E6TLmYfHLqb8a%2B12JyFLWFPl6TNclJ%2FF37&X-Amz-Signature=f19904305136d253a8c849f195e3826950528d4c070e97d4b50b874f1b365532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YC25IP3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBg%2FSJBc9dShZtLTxZJXg6qM74h5vp3f48TKt31VSooTAiAN5XPyHqudImiDLVIkdIw7BI%2BFfm0uPQk3yZaC6MGq3yqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgu0S2ZQUwf%2BkpvcfKtwD7VzAPBlCcIe57BoEx%2Fh0fkkaBMz52pva9e7ve9PK5EksVFGn5aMH767paQFIKmBmfwzxtkBpm9UtorQrZawd%2FvGq4m9fEm%2FOyqEtQS%2FEhCi7KZE%2FA%2BS2MxG4bRVX0l4aLP7Ie5lptg8KIFncSKEOtzQ79xkmRdj9SLvvnkHV5tzkb4gZ93GDVSX56W4dlmDuxRhTQceTczF6yQiXroCdPURWrftNldQG4jnn5Lic%2Fn3VAIOhw8HdQ%2BD3ZwCkGZPytMuWC7%2FoKCgxRbGQJClSl1MKNqkkeeiesMPHuIssXSPvUtpNBOJ9AmHreuoyfkYPpaFKMT%2FXXHiednYkTjBPU9IUbJH8zPykiZXGfhLvOxvoiZb7AHLrqWq1XW8uB2x6%2FbpxRomrp2%2FpzxtKnjU6nGqP9IMYpgogptdVUIey%2FWJSnN1ShHazU5O9AHBH4ECrDlrP0g56k2yDQhnM3brRLleVrrRnC1LHhUH1zKWc78Gwcl41S%2BIHArEW73CqUGBQHq%2FNvpq6zcyp%2FW9IUBWALeBHzFd9Uhr%2BhOMg0FLoLpNs6xW1Ims7S6liDvW1atlhnsVm35zhUv9aE4X9aj83W6C3GkMHz5xJyv2HKVqxg44bN8ZVdc6Kn8x5nE4w8YjexAY6pgEgzJEoubgGyURQakRhr4Vo5FNXkndLhdKmtf7PWs9DoTW37o5CQE%2FICiGSL3Csoj1bnXivsgxHq4BX%2F3R4oPOk0aUt1JznRrUOHypmRIOrj0OJkNSGx9Gz107S13mUhJie%2FCajJ4rau6T%2FSQXEEQ0rnCXSukRFWmPjU7iNFHZZo80JquzaywRusJoWHJoqVw1LuxgHbirvsyGjZixmdgdDjmHhzjid&X-Amz-Signature=f97c62c17dfea637690e72f5d29b1a331d3057b6948199b6df970bc4fc36d601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIR7GDT2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDmTcHD2TKPX%2FZ9roCnswYDjDpZSqQzOTdekWTs3atVAiBbC0LQKFXxXkqI5gwX%2FEqnxxfW9eRZeVZ65qcPdHktwyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWfuAieL2mS3m8WfZKtwDPbwywqqzsuWjSx6%2BalSrAOIvuD3B26CWDEJXZX5HMwfFQwNBWWz9ADi4rIoAAvUqARg0UjIS4jXtx7YyFN%2F4CRYx%2Fj7HP7C%2FF48saUYE6KSHHOrimsjCRf58y%2BMgaq34YW3RiAzLFuLYtwrcgJBDc%2BwEyQ6Mii49x%2Feu%2BswHjg0kKdTWsCK3KoGQ9TSZKyMwED9M%2BOaXpfLf5gfdYIKSgUbYQjnlVUOAPAQvEL9ITJ%2FU%2FkxQ%2FdT764DtbcjVAZNGJ3GwH6v7qWj6lkkx3GyV1xMRmx8IUtFVBzjc84PO%2BrkD1HoY90cYUOPhb6QCV%2FU3ycJkYFWkySPuj1fVQzLhos%2BsFh1OwVDhWJV0iJ4WyAaBxfV5%2Fx4%2FgUHgus5zxz21JdPNahxRdq0jjZ%2BBVLzDOLNmrc10Eyi3XvfjWnkC%2FQ2k4Etl6UKVASlkP4qA%2FVwWGLlpAICBq2GrdwhCtG7rMAah9VlagLR5VybRDBvY5PcDBRsXgxQTROv7nQTzo3GVQcc%2BIhUB4GzbNZSpjmXmfa%2F9NKU59gD7btdG1fintvK5f3GAA6Ve%2B3q5gF72lsE9aLKpmQJ7Y3v3EU6uvokWhvQKO1aNPWQF4%2Blzsx9qbBWuvKnXy9Qt50aXswowpZTexAY6pgGADyDBuD1HwLfOlGUrKqML63NYzRUrbYfLxOTtrJHmRwUMX1KEmN6PZfjRhCUVhxMtquQc0ia19r2WZzGsSSOFOToaCI1Z26SNRzyf%2B7lNh9%2FFYWAoIpj%2F1xbK%2FMYlm1KiTo6D%2FmAXDugpCvT6hyJyB9oCFt%2B4qPf%2BJORdkKnldLKPt1K0mXSros2DIYe49opl%2Bt8J0AUXWzu6%2FB4KfMA03o0EXEuY&X-Amz-Signature=9a21741baf6298c3d5df4cd733560ff819cddb88038ba4b16f986926c0d2e509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFRG7CIJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV6vZMHZJXzjbzoDx%2F%2F57aUuRrHSxwL6W8KeHnMFH7PwIgVs%2BfMtRqV%2BNlnpqx6zpOn58wP%2FC4nOnqhrpXZOJAjFcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOarXLQkeZzW6pgYGCrcA16%2FmLHsaxzQDkY%2FRPkIUx8kwKNXHs3DralvF8h7ffjKg5vvGDAELhuHsoZWv3JKy%2F4IFSS%2BYyfvpiGVUdPfFb15VPZqevwwqHeOtTz0zoeKfTUSIGa6xNr4kviU6Ej3I%2Fc85MZB0iUTmsLa%2F1Ym3PSt3qCXZLdjW27iEON1x%2BdAJivcBh9KN4Olv9HkDpe7Q%2BUl50J3uiqdOivPHt4I49Eii6dx6g%2F5xr4uBp8UOFQDqd2tTIsNWRnI8NFHw%2FxEolM4bfzHvrNNYBpUSfmhkKSnK8VdYKj%2BFh%2BHzQ%2FIhwMb2hC2o74j8lJOHNHelriDvrNYJhsXUzNLYbkXSmzW5%2FW77HqNgAfGbw7%2BacBVD3LpjO48NLdIoRHaDSWydkDmE1ssWRlYyrO8RMuWYDQpE28a1YMxvynngQobT%2Fex7ABPoIioTOaqYz16bpSv%2BnlstMSyR1HOxyr6LuemL8YCgEJKqxdxoaDLTS4NlPcyeEU7Pr8p3cfUPfR%2BU9pwR4hs6TTyw037rcnjcsTtrYP8BRf5q5JFfdnbDbAimiy7h9lVER7Qmr2PMP55aE24v8mKD%2B3h5X4v%2FNOIamSAYKuEEYfl0FWAD7VfgGhP8EvUdTKy6Fc53tzs8mvP4thRMMGG3sQGOqUBYIUOYQCQXp%2F2C7PnLA5lm5dqte136vJx59U2gZYVGHj4zrfdSbDmFEXbcurPTkNRdpP2F%2FPCbTsYz63L91vfUjwUiQdUm5XUqXIkFORBGs4f41uiRGeS%2FTENjYDxqa2Hhj4Rf312ZwYOfyASLOD%2BbG0kljYZ5Ft4UFYwg%2BMtso4BqveFlVRN0lPBVjbDPuOcwOhI0pUZxj1PRwUBW7hIYvLlJ1ZC&X-Amz-Signature=324faa3fc0512aeea02a398e900535745ff132ec423c901c2453d5fc595406ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466337LOPXW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEKRjeT65HMAySQQNZEvRkWfyyfpc5uZr0ImeXGqKEngIhAMocS60Zf5p3%2F1twLqVszW1y4BAk1HJMaH3Sm2Ywah2GKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU9LoTem5TewzEwXMq3AM5IZ29EvXGbI7yOHry0xJEV61qb45mJtNfICZBzLD5vrDh2%2Bl6j2o0t%2BAyjxuAxpNOHvluVq%2BSyKni1NPbcYr2wMCoYbqo5lJLOx0O%2F9ZuvVupaquWzfx7y9vl0Kn9IXB2LxajDA9Ab%2B9trg4YgkXt6CVIc5Zsd3XFPhCfjlHwKmwfmggzSinJRVxdysNgw%2FMdkCf4Z9RDPEqCw6ZxpjMaWeCcJpSPG0lLIUQZ%2F3u6bs2kBI30%2FspkSz7aiPFP7jwiLpgh%2BL5Gi0CmeqbpBj6XxccPQlYK%2B7NO2jkehMjA7FYFyG3j41TzXl2enMlW0k89OjfBLjwWazPZsSa%2FDs9J5m0zcsMsG0mzund3H7R2nKmY0cQTaL4wsM92EUALLB7J0ZgW00%2FjgAyFJRlOGdeMPHRF3gGxR%2FSrd0JUF9VnVlQ9I9P2XiHi7fLT7JSRnyj7YWKvehRadseVjkBjamQOnkIoNQ%2BAiRaeF1ASfBXmUvtSaZxstV8MQSx%2F8jZiaZfLUcTYc%2Bm%2BTuabJUYc9Oj5XtEt31sOkbqaKt1pb78ZDSrmLNso6mm8UoxKRA%2BiesGvapa5Hd3NcjueUK21eFZTQZLotixgGtyoHlCZ1AnKDFDjG%2B%2FU79GpNp%2Bd0zDE%2Bt3EBjqkAedSdQGUEQlGuKLnxaOt9oL8Ct26FuppQAEI8y6ZYD3V2m4G%2FJdclP1SQSxszJMKnfni7oN%2BtRwBOIwFdOAwAQDRkFCD%2Br3K%2BF0Opz4B4COnQ95PKJpKIWtCvJ7sGSzo%2BAsLQqEUpkujQjVIm7CQoF1dShUlyT0Y8wjqX%2BgV5AIwaxam1OB7Om9G%2F2E6TLmYfHLqb8a%2B12JyFLWFPl6TNclJ%2FF37&X-Amz-Signature=5b4be0d49a57da8360eb24d0f6390bdb5d6dd98a8ae67580628cbd12c0cfbeb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3ZXGAYB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHb5dasIJtUdUGoFHNJ7FUi%2Fmrogd%2F45TTw%2BF3X08k2gIhAOcqh3WWw7Ju4No8KdoA51mGKqRdmxLtHqKyFAoK2LJ5KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyrd7Rni%2BRoilyAjecq3AM8xyACeb8LIcenzUjIzoV0WGuOtkTYyj2StWpLqG%2FjN%2FlOptUNPky6BLZT6HhswFhJMhavG8vXNHO%2F1hqCDvtSPlffbd0WzDIbodxh86z7psU9tOLS1bngfWCqRrDIh0%2Fcj1sA8Mthj7xGIWiTOf1dv49WiVsqt3Tl5pUzDCe%2BvWYv8Xm2G3qFib4zyer%2BZ1QcYIN4CFYgUJLsddpNmW3R5GRzj8O%2FG3DZq83yv0IQjRBYsFrehZUZS2AIAuYvXpu0mxDLXGxgEvabJXKKE76bzmh17EQK9VPLAUu3ghu2Z0nUZpKLjM53P0iL9Wkms7QGDfvNLKKbG6aspzM01tIymhWj0we0ELushr%2BcLMsI3RKQicoTDlrNibE8T1DwEOSjWzlXhbd%2BIVXLO7GKQ0eN4tcXloLjaoz%2B%2FFr7bQkExAEo0OMfdIejHQMCoxMhfZQqz4OKus1tM%2FBlVR9Ub3vdF3Wd%2BarT4%2FroREVI3KPo6jjJOWwxGQmeDFEJHdJhwwE2fJj%2BrGojQnT%2BcxUxff55XQB6555G8i4O%2FGpG9ZJqxjZ83zy6LK%2BZBPsPTrjd3UKkoFBvY6qvVBLJw%2Fkm9%2B2ueXYldhqQf%2BAtreqQfY8PBXbBpqM6g5GjB3fmdTC1iN7EBjqkAV3%2FdLoIGvTkuCvcK8qGTMN5DCOO4mVyM5OVMSzO941skHgtCdwG2tSEHcKScCrf3F4eYPENTY8jjhyv99kYVMp8uWVxvq9UmnGIfIA6Z8yuibiTc4SKCeMdZ2k%2BdVkcIHs4xUftbjRowa%2BJobL3SFW6sYlIUg81woQ9J2j4fM4ZY3CcIMNIzA0TLGrQj0fS3SST3GsMLfVMRmCNQuTPB%2FCuhF%2FM&X-Amz-Signature=8bd84bb6c643c2987d6ea16840c013d9fee7cd902af1d7a2a3dc06bb3c12c570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466337LOPXW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEKRjeT65HMAySQQNZEvRkWfyyfpc5uZr0ImeXGqKEngIhAMocS60Zf5p3%2F1twLqVszW1y4BAk1HJMaH3Sm2Ywah2GKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU9LoTem5TewzEwXMq3AM5IZ29EvXGbI7yOHry0xJEV61qb45mJtNfICZBzLD5vrDh2%2Bl6j2o0t%2BAyjxuAxpNOHvluVq%2BSyKni1NPbcYr2wMCoYbqo5lJLOx0O%2F9ZuvVupaquWzfx7y9vl0Kn9IXB2LxajDA9Ab%2B9trg4YgkXt6CVIc5Zsd3XFPhCfjlHwKmwfmggzSinJRVxdysNgw%2FMdkCf4Z9RDPEqCw6ZxpjMaWeCcJpSPG0lLIUQZ%2F3u6bs2kBI30%2FspkSz7aiPFP7jwiLpgh%2BL5Gi0CmeqbpBj6XxccPQlYK%2B7NO2jkehMjA7FYFyG3j41TzXl2enMlW0k89OjfBLjwWazPZsSa%2FDs9J5m0zcsMsG0mzund3H7R2nKmY0cQTaL4wsM92EUALLB7J0ZgW00%2FjgAyFJRlOGdeMPHRF3gGxR%2FSrd0JUF9VnVlQ9I9P2XiHi7fLT7JSRnyj7YWKvehRadseVjkBjamQOnkIoNQ%2BAiRaeF1ASfBXmUvtSaZxstV8MQSx%2F8jZiaZfLUcTYc%2Bm%2BTuabJUYc9Oj5XtEt31sOkbqaKt1pb78ZDSrmLNso6mm8UoxKRA%2BiesGvapa5Hd3NcjueUK21eFZTQZLotixgGtyoHlCZ1AnKDFDjG%2B%2FU79GpNp%2Bd0zDE%2Bt3EBjqkAedSdQGUEQlGuKLnxaOt9oL8Ct26FuppQAEI8y6ZYD3V2m4G%2FJdclP1SQSxszJMKnfni7oN%2BtRwBOIwFdOAwAQDRkFCD%2Br3K%2BF0Opz4B4COnQ95PKJpKIWtCvJ7sGSzo%2BAsLQqEUpkujQjVIm7CQoF1dShUlyT0Y8wjqX%2BgV5AIwaxam1OB7Om9G%2F2E6TLmYfHLqb8a%2B12JyFLWFPl6TNclJ%2FF37&X-Amz-Signature=e64239d71858bdf5f4e2ef379d21b835e473179a9b0210b482339cba075285ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REOMA5TQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKr7K2Wu%2BGNgs11cWKHy1Ww%2B3Ll%2F%2FVLB0E9AXXYvRDhgIgXoii6eBLZvneMKToEY7siKVkYOBMUXvHkKJ%2FDmcsz3cqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGZA8iqleaZRDV6hyrcA7r9A3ghlehadcM4qrK2EC6WVMKmSkZws11hxKEQHniNNbcBG7EmeBkwZJfSrQSIK8nAn9tat0T6TN5tJT7vGPZlDXGMvgxEyxWKkwnCrtX7QYyB%2FgNX4SQfbUC51uVeEkAnrLhlgF3ax0LEt%2Bm932I8UDAhSa%2BudunM7x8DrOLuhf64HvLjEVxepscD26%2BG8nhNQg1IlIsCIsKp0yMkjb3z912vArcmLPIMNjITttpweleD6MwFG%2B7Y0IM4xeg4wmPgU6fj1XUyAyZmFKPFYuCcjpAoCINdMooXYg%2F5uUq0ggNa%2B%2BO483t%2B3sfg2HopH9tRUcAMGAO6k9zH1SWl92lHTrR40qlllXArSsFW3HBxZwZ3jgV5uN6BMdt%2F5gprJ8%2BFVfHCo2GYLqkQq472Rq%2F08nwXvHSNSt8XZ%2Fyzc4groHnwD%2FJswH3CKcgg4k6yF%2BTEahYA6zkc%2BOhP%2B1gV9FfsJLQrwdpt2wTD8NqrnJLLNBo59IYnb%2BQmXXdYS0CSG2tPnhJG%2FsZuFI0xys1FwgV9jD6hlVkh2duzNVemQvJhRxxHG%2F9vYx7h5TnKIgqKikoqyWB5Um9%2FOLCQBO0h9nglgzXcX0BB%2F%2Fvm4W9vc%2B3JjHeTQhoh0vfCQpRCMIuM3sQGOqUBP%2Fb95I6fxowwZlCDgT%2FzvCvarbnZ45dQM3aNMO%2Fj4SNK0rUU4usWhj3ttUrnn0JSia7UpWPuvtJtQxX1K350fmoXrn%2ByVzGlHrXc2L%2BpFHN9EMyUKKrAXkNQPp%2FE3d0bgGWSsSd2sXuzHT%2F1YOASXQbdfzPRFjIaElmTCILye4ZWa5AMCLEX9n42x7s5%2Br9%2BDBxtWiOMksNykO0ahdv9Y5Y%2Bf0zI&X-Amz-Signature=e2c65b195c126eadfd40d94d592d5f5698d836068ee8c0ce4e01f6eade818d56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466337LOPXW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEKRjeT65HMAySQQNZEvRkWfyyfpc5uZr0ImeXGqKEngIhAMocS60Zf5p3%2F1twLqVszW1y4BAk1HJMaH3Sm2Ywah2GKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU9LoTem5TewzEwXMq3AM5IZ29EvXGbI7yOHry0xJEV61qb45mJtNfICZBzLD5vrDh2%2Bl6j2o0t%2BAyjxuAxpNOHvluVq%2BSyKni1NPbcYr2wMCoYbqo5lJLOx0O%2F9ZuvVupaquWzfx7y9vl0Kn9IXB2LxajDA9Ab%2B9trg4YgkXt6CVIc5Zsd3XFPhCfjlHwKmwfmggzSinJRVxdysNgw%2FMdkCf4Z9RDPEqCw6ZxpjMaWeCcJpSPG0lLIUQZ%2F3u6bs2kBI30%2FspkSz7aiPFP7jwiLpgh%2BL5Gi0CmeqbpBj6XxccPQlYK%2B7NO2jkehMjA7FYFyG3j41TzXl2enMlW0k89OjfBLjwWazPZsSa%2FDs9J5m0zcsMsG0mzund3H7R2nKmY0cQTaL4wsM92EUALLB7J0ZgW00%2FjgAyFJRlOGdeMPHRF3gGxR%2FSrd0JUF9VnVlQ9I9P2XiHi7fLT7JSRnyj7YWKvehRadseVjkBjamQOnkIoNQ%2BAiRaeF1ASfBXmUvtSaZxstV8MQSx%2F8jZiaZfLUcTYc%2Bm%2BTuabJUYc9Oj5XtEt31sOkbqaKt1pb78ZDSrmLNso6mm8UoxKRA%2BiesGvapa5Hd3NcjueUK21eFZTQZLotixgGtyoHlCZ1AnKDFDjG%2B%2FU79GpNp%2Bd0zDE%2Bt3EBjqkAedSdQGUEQlGuKLnxaOt9oL8Ct26FuppQAEI8y6ZYD3V2m4G%2FJdclP1SQSxszJMKnfni7oN%2BtRwBOIwFdOAwAQDRkFCD%2Br3K%2BF0Opz4B4COnQ95PKJpKIWtCvJ7sGSzo%2BAsLQqEUpkujQjVIm7CQoF1dShUlyT0Y8wjqX%2BgV5AIwaxam1OB7Om9G%2F2E6TLmYfHLqb8a%2B12JyFLWFPl6TNclJ%2FF37&X-Amz-Signature=46e303acfb617ac28dedf751e5070d0157703bb6cfd2b73c7e1634b9e7093f0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JQZCERD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8wZSdzhT9RG8%2FHvN6PnujeMexyjU6cIrceQ%2BEbR5WNwIgS7grvxC2SVGIJdJLx5ZM8Rxzp0GuFrKK7b925OsaaGMqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUAhE5mA1DIDtCNtSrcAxFZpJqZw2V3RtCuDyG5TYWoUv3SvwYzm6qRwJLpkLliwjNune7T%2Bk3aSveerF2nbG2QQUcQ23FSETVKxgc67DL43DqpN7DeLbRw48Eajo7pm5GpjVakjdjVZ8JLdJ4UiIw4Q627ZTdeuG9NvwT0DXhEU%2BsxFUvhY%2F%2F0RG1hOvFmxgEoBtNIc2M%2FK6ry3JcFd2%2BE2Hu56z91LVyUnMsH1IdrppajuJp4Vj%2BT28R%2FbV9xqkDpP78P%2B%2FzmtdU9A%2FeBhekgLMYtHvRndcEVnD%2FFTU%2BcCytpv7scq%2BBkRUPKus0Cl62W4Hx%2BctiqOvbkXRx2QCbRpy6ilQTjSDlz0TqN8lVEi3ZhrJv5%2FaKrpp%2BaL6sDsfzLZh4Hm%2ByXqX8w8TF3drCU8Kk%2FiPL1uiMQQVxD%2Bu0lWHIX%2FMDQSjdvC9vvQcJsapb6zmI5ftiU0d13DsbZ70QYa0S%2BxGbXHpJ2EhrrvjPVZGcLYUwrY5yV0CG4ks06iaimB8P7s8pJVG%2BmJ7dULW092eljdFuy1RnwxYUFV0C9gVO25FOTa4%2FCuXroDmkaphtH6wP3Oj2F5S41QFFPq0yQ7evOskrLq4946QHN9wCiKBsjhxlpoaOYsNAwrbooxdSv8aZmX5cW3Y5DMN6F3sQGOqUBajJ9JoCcQVwznMQVlwtoRu1ga7v5C%2F%2B9rPpvri7HbSsmwhcJD4LUw15ZeAGrxCnM%2FJg1jwy%2FkiSWrGSOYF0ScqcbuvLV5xSXag2bMdGKsGFu807WKyZWQfVRUwbKJuHm6grs10U6Jj7gOAi9gBv5mZcS8l3D9%2FJ2yD636XW9YHffyTdpCjLhCdClsOWSjkphGAD%2FepdbHA9f2XS0FDWmEj3JmKnN&X-Amz-Signature=dad7afddcafe50cc761c3ca2413adb6d5fc9e9e73150e8c43834176a28ab15cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466337LOPXW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEKRjeT65HMAySQQNZEvRkWfyyfpc5uZr0ImeXGqKEngIhAMocS60Zf5p3%2F1twLqVszW1y4BAk1HJMaH3Sm2Ywah2GKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU9LoTem5TewzEwXMq3AM5IZ29EvXGbI7yOHry0xJEV61qb45mJtNfICZBzLD5vrDh2%2Bl6j2o0t%2BAyjxuAxpNOHvluVq%2BSyKni1NPbcYr2wMCoYbqo5lJLOx0O%2F9ZuvVupaquWzfx7y9vl0Kn9IXB2LxajDA9Ab%2B9trg4YgkXt6CVIc5Zsd3XFPhCfjlHwKmwfmggzSinJRVxdysNgw%2FMdkCf4Z9RDPEqCw6ZxpjMaWeCcJpSPG0lLIUQZ%2F3u6bs2kBI30%2FspkSz7aiPFP7jwiLpgh%2BL5Gi0CmeqbpBj6XxccPQlYK%2B7NO2jkehMjA7FYFyG3j41TzXl2enMlW0k89OjfBLjwWazPZsSa%2FDs9J5m0zcsMsG0mzund3H7R2nKmY0cQTaL4wsM92EUALLB7J0ZgW00%2FjgAyFJRlOGdeMPHRF3gGxR%2FSrd0JUF9VnVlQ9I9P2XiHi7fLT7JSRnyj7YWKvehRadseVjkBjamQOnkIoNQ%2BAiRaeF1ASfBXmUvtSaZxstV8MQSx%2F8jZiaZfLUcTYc%2Bm%2BTuabJUYc9Oj5XtEt31sOkbqaKt1pb78ZDSrmLNso6mm8UoxKRA%2BiesGvapa5Hd3NcjueUK21eFZTQZLotixgGtyoHlCZ1AnKDFDjG%2B%2FU79GpNp%2Bd0zDE%2Bt3EBjqkAedSdQGUEQlGuKLnxaOt9oL8Ct26FuppQAEI8y6ZYD3V2m4G%2FJdclP1SQSxszJMKnfni7oN%2BtRwBOIwFdOAwAQDRkFCD%2Br3K%2BF0Opz4B4COnQ95PKJpKIWtCvJ7sGSzo%2BAsLQqEUpkujQjVIm7CQoF1dShUlyT0Y8wjqX%2BgV5AIwaxam1OB7Om9G%2F2E6TLmYfHLqb8a%2B12JyFLWFPl6TNclJ%2FF37&X-Amz-Signature=8aba6cbd76738a4ba133f58f294f16c63fa6153fb8e66bffd03ff19136485438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGDS47DT%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOjvpWBmGwXF4VtaqaU59NBeUaZB%2BBBjuRyoFK5ASt8AiBEX53NtZLSy7kiU62RLEfiJazkeQzJQr%2FOCC6AgD%2BKOiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2uwNeTphpFWYAgpnKtwDoh%2F0Dcdmx3KoN2JNL25mrec6%2BUtkmk%2B91z9JOPtyv8BQr3r1e1tRDust7avU2m580MH7UNXRPsbeECpHSxXlZ3vpiT5yWqBwWcFI7fMDXWmt%2FzroiYemLqCaEx7RxSDOKhdgOWTfyvX1m6E5dI5rDXeHd%2BOgbme2LHxLiJ7jPuJHrY1Y42Ie1z0KgEYQeHzqpEDbH3efDNvedFglbeAtGhXthzXrnYA8q5P6r%2BYG%2FX5TjzNebheM%2FxwZzi7A8cXQ71ZSie9KYshcAL04ftKLekbEx%2BJxKCpeFHPzFfMXVZPaSOLnLm%2BLjr2twU7UOmQLoopR%2B2FlT2eiEm8Ky3OLkQ3JbP%2FecshV2wfYtn%2FkbgAn10lX5%2Fsp726xeZ2dIOhO2MHG5LD%2FKdJIOVidR2bn1%2FvCuswwm7XerDYGoiNCOuwr2cTRU2XGcDZY%2FY3wLkidqrp9N4AXwzWA4eluPa1dIGCAfnN6UN6zMj2TAGpslcdkiARPEPznEuTlgciYtbfTYljdZ2suI1Ppg2fceb7V%2BiToSClDv6biHJDsn7HihCnZCRtir0gwzobPTsUmGDw1M3%2BO802Dkobz%2F1xRVrprwYu2%2B10IfBZL74Z7RwE1CORDLwVJuRxiTqZM56Uw64vexAY6pgG7AdMFnc7L1payhom5C89%2BF9D0ClrsMkzDCgWx%2Fute0VTVct%2Bt1C0H4867C0VmiGZF3iHXZ0jcLhgTC%2BQ4MD%2BpOb4HToFu8kOJylWQ2M1lkG3SgJjyqFzY9ResKwILrm5K%2F5mWzT3QnMLmlkERaewi65FPefFQBwVJCRBdciia0bk70Rlx231spVTUgzffx7EUbV7Wnq3EHplBtIbLmBT4gXeXi9YF&X-Amz-Signature=d8a44b9bf26321ee3ff053a988a326271746c3cdd12f6759893b7b4b45814195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GGOKXKN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9tGrT8%2B03cwCNggsjAEV1TCtgiQsxy%2FP%2FfqwdgsOVoAiAcyPtOzlMvE7tyiVIlwIJOosdkhC%2Bq2HG42f%2BP%2FPrqnSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9c9eg5YsqIdYRU32KtwDQqLZ26IIrJXWRd0bJHgRbmT0JNVtf8YMTr3TRfgjLhV9INXWI9djuQ0hrxY5pCZDdtD8pGleXYLwCoYBQ7J1T5Q2MhBXUVfYWToqokdsStV%2FeHQWHYRVXgnXF0df56PTiiGxTkFiutTgMiPvl01CCL3GmvixpZK%2BF1zHR7ZlIfj65h%2BVWyhMIVKBqZHemwJ7zJM5qHbdy4oFsyyRdLEOTsD9tia%2BGpZUQsNrC2zypmPLLcLw0l8IG6mRF2lMNkGaIVGvdQtoqoW2ghFUxWMh1MvlJm7u3OXgXyDn2AAKiNW3JdXUz%2Fu72ogNwNFUw7iP%2FFMwjNGKB11zvaogXb43CaLtv8AYBYakz4uYuQQO4k5vLilWJT6Q8VB2OoaE9TbpVXU8lMo%2Bu8qtDnTkNzP6QEVJJGqpEYIdMnYnbiJIx9oe6WjlqIxHJPL3wZcKU91o%2Fi17Ui%2FRsWM%2FjtN0FFV58wGTHuSWVUFyJd09wyOJ5V1mmCq6ZOGAm1n4g8GnwrXF6PzxX6qQM0XCsgwzx%2BiCrnzyUKyFPkwAJSEEo8ufyG%2FI%2BqavWDzzwhruiadxqTk1ZLB07Pwuuyja5gj%2F86BNJKUDJBM0i35VFVJrzgVN4R%2BCdplpV74YbMuIwZgwuYXexAY6pgFNPSdClOvUXCq%2F0EMUIXjZibb%2BR52mZ%2Bi83bHZ6DiPN2EgMOCvxj%2B870aVeQ%2FXaPYiB9LFYBeY2%2FKwJggcSsqxx7xQ3F2mMTsr8EpSJgWyxbEbk9yBCWk3HmpJFRvraS0%2BJHsD2fP2VbbwVzX%2FOLwVt6asHwQX6emHlIkmYsgWNr2KJE%2F1S7XZxGDj4FsWvPEepvO8soLvg%2BS1xIWdZmkNxZI4ovt%2B&X-Amz-Signature=ed9a2af3b003112438f73a19957aad01d84bc00e772060372ddc916bf2099af0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5U5AE6Q%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjq3ZKE5bkJ%2Bkc54tBGom6bFXuz8vW3UmDF6eF2VC7tAiEA8qs3ITsJUIDUNSxMy5EIlut2EyV4vTFMbrUAGF7%2F9I8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGz3Cad3Xxl36do%2F2yrcA%2BDUPLkvRvw1qWFsLRwEjc0sFtwE84QioDd6MlRPYfNWwMDIreALtdxlMJT4rscVQ%2BZH79OCbhokSa2Ozqa6M4fC7nhO3VIVXCmdmryXKXFUpD4cns6mySsfGj5l3O8hfteRZTziKf0rhQ8W9Dimhl6dN41J9m1kd5Yggu31TbjWorBg%2BrSSaxbLzYATLVmn5lBYiopYfhThVa45k72P%2FseS%2BEN9sPrIg7dwzrnPL36PE1EX2YDVNrmU4zhZD%2FmSppOvYTaLIW1BiTlwxjjBr4Z%2FuWEP%2BAb8JzmSO0DvzgHJwSUoP%2Bf8XE3b7fc3E8%2F8S6jpiNIsPKYg%2F07fw1ViQ54iwIUm5HgkIxCUptJFPtxrk49alsGaK2jj8bqKVXEuLJg0ksavEmLuWhEWS8KDhfpk95GkNQVrfedMtJ5q0A3TtKTpN8WU5YAJnCbMecuBdmOoBuCYBqVl55lQUr6kKWC2s7dMMSzbrw70PhEhc0pOLFFGO2q3yEn%2FJZc1ExAAIH%2FHwxE2KpFXFqFeqBKmMjYG5IvaC3RphIXs5v7SSXabzB9eqA1QbybKISjYQ7LRGif2BxvKzlojuTJs%2FKhpSTlUuRt6H2SnEw5GjQLN2%2FQqcGlKcZbUSrBr9UPsMI6P3sQGOqUBPojnzp%2BC1ybfsnJvt0RuzbBQPIp7Kj5bpcOqZXYSA6ZgbCbhmB5Ui4OBjCIeRtSfeKs%2FlSpVOZug4ciTGuXAjslDY%2FVIZ6DokGlbUnK7Djwa6y873D7bkGeQxi2dwPT93byS4aNrzuZpR8N0hFepuSZHGbEGOgW3COqlYE3lTOHgQjlJJvVwtKOBlReQDo%2B%2Baq9OYM1C6Va5zSjpFiEb%2Fl93Zxv3&X-Amz-Signature=3768d793925e9b0dfb948b3f676604c5a0b09c4af0afeb46c7f12cd1672e53c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFSGRORD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMCx6d6fy5RUcarOZCCBadrvyRnkZfyWfrYSbQEOLN2AIhAMCfFtPYvdMVBTlxYl7Xtp%2FLP87RKBF%2FXRsIAVmpv4WyKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNp6cDXLqbxev842wq3AOwDJ8qus%2FBvdjd7yhciL7TNTxY72zHjfVr1xisZSf0fCF4fBBoTwtsSEyJj4QAnk1w6GrfQE5RMhaA7H0cUhOYaA%2FJohm%2BoqB%2FKTX0UBPHhhJ0NAP05hoexP3oLF8lcLKcDzqncufHI7Cf0T5eSSZJ%2FbU8q1RPm5UrqH7Urq4rEzYzFsNMJ%2BNujFu%2Fol9y8ulUheqhXTuziRW73xz%2Blcu5dgYFOviNfx8YZ6uMqbnhUSLHhpxytx976CquCR0R5XOjiPTIVRgyinE7NiBlsTYIEzffSLeNGBKrcfZi%2BB7wBfl4rkeXmdrb4V8VsIpfl0jxVZ8X1nrVg0S2rw5C5buXScbQv0wAby1MUiHaRDNThKEV9kUVfnHO6QmhMHdAd7Eo35bg224gpQNAdeJZzoHZENn8%2F48DudhbEK4tM0xelOKLWZLp4S1A%2BC5njIy1o%2Bxf0YyaCXBW3OIUl2RKqsE8dPho6L0%2Fp%2Fu1jMGiTc%2FtlvZJNYw6p9fsHrHUDuHMjgxkd8Y1bwoCkVk%2BBnHfXcy7zGNJOFqitRa%2F4DJqaVHj%2F8HW49tM6A5epGNmFnowGB7rIrCSxTllgYlq%2FXfF9XDSdHq8gtl%2BDFSEnRAMaYVz25LNvotxKZTjAOPqWTDxiN7EBjqkAQPdb8ig2BSeWnDrfiA3tUzqfrCuRX2K1lGi%2FeUNmQAH2fffxQ7ZfcJqHsgTX0xqd%2FOvBXwWW8aTQawgPaPCyBq9x7Fc%2FIw3CuK60tRZJ5JH%2BZorLmJV%2FSSy91%2FtRXBm11COv9tnIUe%2FOk1aGgtkFMazbIo%2FxyaGIhqaRTu84J2qBv6NLg5va%2BslpK96WqngtXK2NSg%2BnK1oBMOnvGYSfRVjRT6l&X-Amz-Signature=97e8acde2c33ff1a9b7c8846e1f37cceba0f9d7a68db0b4511a0e4e256e18736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7LF535O%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FQidv4lKy0d%2BNzuImHSNFRRoxIBCmyLOX80fbRzkx9QIhAOtVwGiwS%2Fdlxty6Ff1HK6KYjjaNnLKetAdFi0bEDB7JKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyuz6G6bnre2JbXa3Eq3AN9zhafMX3SSdllVNVOQzLsH0yi3Em9L%2B3p%2F7WK08A72q22Ftbfu3qh9MYDHKRehyRoKvSwy8ZSYVAzweVZqaB9xTW1G8FClrZwLteFHh2CkPWi7VmAFrF3aNgy7WgKsgD5nexUBLsKPQqrRXM9oCNBmdJMVjgooPXBj6nhXJvoJ4lzqrPyyA3AR0e9lg8NjpZiGt5mvqaOs6fcO313Aljtk%2BHA%2BRk8CS0mbGMhpaWTG34yoJZq42v9ZKbseh971UWbom0QQFQRmFLA4E3Y%2FUsnwXSnvZsVXkIipsPA8npLU3qNXND9J%2F8%2FktKFsx%2FwxvG00MjEaSzd94vrUMOfrCU95P8nJQHi3MfDmhhBlFEIMQ4mpC3M5ZpgY0UxXl1tMUOf9VY19fv4YeZWFRblYvbF8XApdHoTULAZkDHPFZ%2B3YR8KW%2B8yyR%2BNQ%2Fx9FKeRZDQ5NWvCFN8Ay1nYmz50Ce9uaeQqd%2BlUzmc9GB7QMdNZ1w77Lsv7AqS5RiA5IZfq175Q4Y4pVPQB6%2BC1igmD7UZQECr3gaIvNGsMyvccRCOwwDUtXJdjTOrjk220L8UgxGPAjXY4LpxitGbMKH8nCXdDBUxCr85aUx1y9AiE7Q%2B7DbTyYHbmH7rm%2B5l8kDCwhN7EBjqkAeOkA0ADxW686O2%2FN%2FUYl7sXQl4DXBN%2BScp8XUQeegbtqI3Zxo5OUo7YZlgOwlghth5gvyfoBUBgI2SayncUzN9vq%2Bp%2FiV%2Bf7TGyUDwPlS8fjYe5deP4yjgP0N9wK5rTqzXWytEHP8BBe6BDRQrdu999Po85SQuezZUtXTYOFi%2Fbqu%2BcBJbYUY%2BrcWRBiLYGqcRdMuW7rvP7v4KCSPidwJxvy93l&X-Amz-Signature=07f4de43e46057eb76f61119878f95cfb28a1a8f6b5c0c58ed395c80347cf5b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466337LOPXW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEKRjeT65HMAySQQNZEvRkWfyyfpc5uZr0ImeXGqKEngIhAMocS60Zf5p3%2F1twLqVszW1y4BAk1HJMaH3Sm2Ywah2GKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU9LoTem5TewzEwXMq3AM5IZ29EvXGbI7yOHry0xJEV61qb45mJtNfICZBzLD5vrDh2%2Bl6j2o0t%2BAyjxuAxpNOHvluVq%2BSyKni1NPbcYr2wMCoYbqo5lJLOx0O%2F9ZuvVupaquWzfx7y9vl0Kn9IXB2LxajDA9Ab%2B9trg4YgkXt6CVIc5Zsd3XFPhCfjlHwKmwfmggzSinJRVxdysNgw%2FMdkCf4Z9RDPEqCw6ZxpjMaWeCcJpSPG0lLIUQZ%2F3u6bs2kBI30%2FspkSz7aiPFP7jwiLpgh%2BL5Gi0CmeqbpBj6XxccPQlYK%2B7NO2jkehMjA7FYFyG3j41TzXl2enMlW0k89OjfBLjwWazPZsSa%2FDs9J5m0zcsMsG0mzund3H7R2nKmY0cQTaL4wsM92EUALLB7J0ZgW00%2FjgAyFJRlOGdeMPHRF3gGxR%2FSrd0JUF9VnVlQ9I9P2XiHi7fLT7JSRnyj7YWKvehRadseVjkBjamQOnkIoNQ%2BAiRaeF1ASfBXmUvtSaZxstV8MQSx%2F8jZiaZfLUcTYc%2Bm%2BTuabJUYc9Oj5XtEt31sOkbqaKt1pb78ZDSrmLNso6mm8UoxKRA%2BiesGvapa5Hd3NcjueUK21eFZTQZLotixgGtyoHlCZ1AnKDFDjG%2B%2FU79GpNp%2Bd0zDE%2Bt3EBjqkAedSdQGUEQlGuKLnxaOt9oL8Ct26FuppQAEI8y6ZYD3V2m4G%2FJdclP1SQSxszJMKnfni7oN%2BtRwBOIwFdOAwAQDRkFCD%2Br3K%2BF0Opz4B4COnQ95PKJpKIWtCvJ7sGSzo%2BAsLQqEUpkujQjVIm7CQoF1dShUlyT0Y8wjqX%2BgV5AIwaxam1OB7Om9G%2F2E6TLmYfHLqb8a%2B12JyFLWFPl6TNclJ%2FF37&X-Amz-Signature=e2651a59a42d111079bcb3e61d9fbc4e8d549cbde8f65e6ecd89aa5dcea702e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466337LOPXW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEKRjeT65HMAySQQNZEvRkWfyyfpc5uZr0ImeXGqKEngIhAMocS60Zf5p3%2F1twLqVszW1y4BAk1HJMaH3Sm2Ywah2GKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU9LoTem5TewzEwXMq3AM5IZ29EvXGbI7yOHry0xJEV61qb45mJtNfICZBzLD5vrDh2%2Bl6j2o0t%2BAyjxuAxpNOHvluVq%2BSyKni1NPbcYr2wMCoYbqo5lJLOx0O%2F9ZuvVupaquWzfx7y9vl0Kn9IXB2LxajDA9Ab%2B9trg4YgkXt6CVIc5Zsd3XFPhCfjlHwKmwfmggzSinJRVxdysNgw%2FMdkCf4Z9RDPEqCw6ZxpjMaWeCcJpSPG0lLIUQZ%2F3u6bs2kBI30%2FspkSz7aiPFP7jwiLpgh%2BL5Gi0CmeqbpBj6XxccPQlYK%2B7NO2jkehMjA7FYFyG3j41TzXl2enMlW0k89OjfBLjwWazPZsSa%2FDs9J5m0zcsMsG0mzund3H7R2nKmY0cQTaL4wsM92EUALLB7J0ZgW00%2FjgAyFJRlOGdeMPHRF3gGxR%2FSrd0JUF9VnVlQ9I9P2XiHi7fLT7JSRnyj7YWKvehRadseVjkBjamQOnkIoNQ%2BAiRaeF1ASfBXmUvtSaZxstV8MQSx%2F8jZiaZfLUcTYc%2Bm%2BTuabJUYc9Oj5XtEt31sOkbqaKt1pb78ZDSrmLNso6mm8UoxKRA%2BiesGvapa5Hd3NcjueUK21eFZTQZLotixgGtyoHlCZ1AnKDFDjG%2B%2FU79GpNp%2Bd0zDE%2Bt3EBjqkAedSdQGUEQlGuKLnxaOt9oL8Ct26FuppQAEI8y6ZYD3V2m4G%2FJdclP1SQSxszJMKnfni7oN%2BtRwBOIwFdOAwAQDRkFCD%2Br3K%2BF0Opz4B4COnQ95PKJpKIWtCvJ7sGSzo%2BAsLQqEUpkujQjVIm7CQoF1dShUlyT0Y8wjqX%2BgV5AIwaxam1OB7Om9G%2F2E6TLmYfHLqb8a%2B12JyFLWFPl6TNclJ%2FF37&X-Amz-Signature=51d09b8330beaf59a9f6af18b6073e94d6d5042fe71561a743828d40026c07f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUYAFTOM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt5Sx3CcLBHrW5XmwQkdA14c0pypVa8ESnzRnwRN3xNgIgDg%2FQ87aXXgkaV2BDeYXUclEFAsMHpOOZKjPEywefAaYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUKTOkhWt7xB8xWnircA9PWrOWUgmKkC4efp8BM4HMyzyHPU0Qm68EM6niDm32mH4%2B%2BECh7RU16mC4y%2B7qb3XG9l3mkuefFV%2FeGJoDUHMdCvaNNdzm2VhRd%2F%2FGsHpmJdQOzUJB339rZc80hIksjTPaOku0Cf1lsgiGPhE9hNOGbPs%2BOgvb4gWTV%2FhlOXpFzQMDUNlr4gac8OgRtPcDV5v5q1uAYGKZUEDaf%2FYfziXQhvGnll4Xn2kx%2BXF1D57wvu7Ackgkem66g%2B4Pr5%2FcGOWTaElHGK%2BRlNXobBQMfZR98izRUn%2FUFH9sRiBDDFd3paPxRarFiNArHdRaS6X0qwmXEWJnhzxUUcgVSDIdOkXxGmCGQW1qFgNtptqcS%2FRHAzYQHRhLE0CfveIOoDvr5aP5YTHsF84gfEq%2FYTFCK70yhHa%2BG5vHP1PUINLLiNiwv2nnZnscJyi8UgNlOZ5b6RKIURmgqO0VmtYna7cCUd1jVT4gL3wwhEyWrkBBVfabpz3HIdKgEz1ysk0wSb0fjVfjSSfMV7akVaOmHxwxYNLOHWrVAz%2BvSJ%2FKJihLqJE0rEIIOW3h6S86HfqTKTFVunGUXcy9J5vNbqZIInHI4fDDMtDtDfVPkBzP12Rzi8t20uSulsJfNTbRyJ4zNMKGD3sQGOqUBQIXy%2BbUzpj1VBNIDURKkDQVKrnl5S9iVmXJPfUkJ3dwbentekkMrx9aAALuW3fxM%2BluvYKHxqDr0ZGfkV%2B23kd9mPqAthIarEK%2BXnbuDNX%2FTFK3GxAYq%2ByVx9%2Bg7p78L4ojY6Pk3B5Dhr0GO9w9WRzLO0Lev%2B0LuXIuqoYTCsMu7iXi50NgVkjtYcT10MAdPkXZ1Dfhf8ZyP9l0fyFr7r82ZBCHo&X-Amz-Signature=d7af20a6086203a0431afe5aaf47daf8834c29c656060aec9942e77b7d0a36b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUYAFTOM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt5Sx3CcLBHrW5XmwQkdA14c0pypVa8ESnzRnwRN3xNgIgDg%2FQ87aXXgkaV2BDeYXUclEFAsMHpOOZKjPEywefAaYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUKTOkhWt7xB8xWnircA9PWrOWUgmKkC4efp8BM4HMyzyHPU0Qm68EM6niDm32mH4%2B%2BECh7RU16mC4y%2B7qb3XG9l3mkuefFV%2FeGJoDUHMdCvaNNdzm2VhRd%2F%2FGsHpmJdQOzUJB339rZc80hIksjTPaOku0Cf1lsgiGPhE9hNOGbPs%2BOgvb4gWTV%2FhlOXpFzQMDUNlr4gac8OgRtPcDV5v5q1uAYGKZUEDaf%2FYfziXQhvGnll4Xn2kx%2BXF1D57wvu7Ackgkem66g%2B4Pr5%2FcGOWTaElHGK%2BRlNXobBQMfZR98izRUn%2FUFH9sRiBDDFd3paPxRarFiNArHdRaS6X0qwmXEWJnhzxUUcgVSDIdOkXxGmCGQW1qFgNtptqcS%2FRHAzYQHRhLE0CfveIOoDvr5aP5YTHsF84gfEq%2FYTFCK70yhHa%2BG5vHP1PUINLLiNiwv2nnZnscJyi8UgNlOZ5b6RKIURmgqO0VmtYna7cCUd1jVT4gL3wwhEyWrkBBVfabpz3HIdKgEz1ysk0wSb0fjVfjSSfMV7akVaOmHxwxYNLOHWrVAz%2BvSJ%2FKJihLqJE0rEIIOW3h6S86HfqTKTFVunGUXcy9J5vNbqZIInHI4fDDMtDtDfVPkBzP12Rzi8t20uSulsJfNTbRyJ4zNMKGD3sQGOqUBQIXy%2BbUzpj1VBNIDURKkDQVKrnl5S9iVmXJPfUkJ3dwbentekkMrx9aAALuW3fxM%2BluvYKHxqDr0ZGfkV%2B23kd9mPqAthIarEK%2BXnbuDNX%2FTFK3GxAYq%2ByVx9%2Bg7p78L4ojY6Pk3B5Dhr0GO9w9WRzLO0Lev%2B0LuXIuqoYTCsMu7iXi50NgVkjtYcT10MAdPkXZ1Dfhf8ZyP9l0fyFr7r82ZBCHo&X-Amz-Signature=d8cde6a195a91066778d7a75b54b178487c986ee382460f1762ca19b3bc654b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUYAFTOM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt5Sx3CcLBHrW5XmwQkdA14c0pypVa8ESnzRnwRN3xNgIgDg%2FQ87aXXgkaV2BDeYXUclEFAsMHpOOZKjPEywefAaYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUKTOkhWt7xB8xWnircA9PWrOWUgmKkC4efp8BM4HMyzyHPU0Qm68EM6niDm32mH4%2B%2BECh7RU16mC4y%2B7qb3XG9l3mkuefFV%2FeGJoDUHMdCvaNNdzm2VhRd%2F%2FGsHpmJdQOzUJB339rZc80hIksjTPaOku0Cf1lsgiGPhE9hNOGbPs%2BOgvb4gWTV%2FhlOXpFzQMDUNlr4gac8OgRtPcDV5v5q1uAYGKZUEDaf%2FYfziXQhvGnll4Xn2kx%2BXF1D57wvu7Ackgkem66g%2B4Pr5%2FcGOWTaElHGK%2BRlNXobBQMfZR98izRUn%2FUFH9sRiBDDFd3paPxRarFiNArHdRaS6X0qwmXEWJnhzxUUcgVSDIdOkXxGmCGQW1qFgNtptqcS%2FRHAzYQHRhLE0CfveIOoDvr5aP5YTHsF84gfEq%2FYTFCK70yhHa%2BG5vHP1PUINLLiNiwv2nnZnscJyi8UgNlOZ5b6RKIURmgqO0VmtYna7cCUd1jVT4gL3wwhEyWrkBBVfabpz3HIdKgEz1ysk0wSb0fjVfjSSfMV7akVaOmHxwxYNLOHWrVAz%2BvSJ%2FKJihLqJE0rEIIOW3h6S86HfqTKTFVunGUXcy9J5vNbqZIInHI4fDDMtDtDfVPkBzP12Rzi8t20uSulsJfNTbRyJ4zNMKGD3sQGOqUBQIXy%2BbUzpj1VBNIDURKkDQVKrnl5S9iVmXJPfUkJ3dwbentekkMrx9aAALuW3fxM%2BluvYKHxqDr0ZGfkV%2B23kd9mPqAthIarEK%2BXnbuDNX%2FTFK3GxAYq%2ByVx9%2Bg7p78L4ojY6Pk3B5Dhr0GO9w9WRzLO0Lev%2B0LuXIuqoYTCsMu7iXi50NgVkjtYcT10MAdPkXZ1Dfhf8ZyP9l0fyFr7r82ZBCHo&X-Amz-Signature=db9dce4795820c6273bfc14b45b319091ff6118f634a5a53641024260d76c09f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUYAFTOM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt5Sx3CcLBHrW5XmwQkdA14c0pypVa8ESnzRnwRN3xNgIgDg%2FQ87aXXgkaV2BDeYXUclEFAsMHpOOZKjPEywefAaYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUKTOkhWt7xB8xWnircA9PWrOWUgmKkC4efp8BM4HMyzyHPU0Qm68EM6niDm32mH4%2B%2BECh7RU16mC4y%2B7qb3XG9l3mkuefFV%2FeGJoDUHMdCvaNNdzm2VhRd%2F%2FGsHpmJdQOzUJB339rZc80hIksjTPaOku0Cf1lsgiGPhE9hNOGbPs%2BOgvb4gWTV%2FhlOXpFzQMDUNlr4gac8OgRtPcDV5v5q1uAYGKZUEDaf%2FYfziXQhvGnll4Xn2kx%2BXF1D57wvu7Ackgkem66g%2B4Pr5%2FcGOWTaElHGK%2BRlNXobBQMfZR98izRUn%2FUFH9sRiBDDFd3paPxRarFiNArHdRaS6X0qwmXEWJnhzxUUcgVSDIdOkXxGmCGQW1qFgNtptqcS%2FRHAzYQHRhLE0CfveIOoDvr5aP5YTHsF84gfEq%2FYTFCK70yhHa%2BG5vHP1PUINLLiNiwv2nnZnscJyi8UgNlOZ5b6RKIURmgqO0VmtYna7cCUd1jVT4gL3wwhEyWrkBBVfabpz3HIdKgEz1ysk0wSb0fjVfjSSfMV7akVaOmHxwxYNLOHWrVAz%2BvSJ%2FKJihLqJE0rEIIOW3h6S86HfqTKTFVunGUXcy9J5vNbqZIInHI4fDDMtDtDfVPkBzP12Rzi8t20uSulsJfNTbRyJ4zNMKGD3sQGOqUBQIXy%2BbUzpj1VBNIDURKkDQVKrnl5S9iVmXJPfUkJ3dwbentekkMrx9aAALuW3fxM%2BluvYKHxqDr0ZGfkV%2B23kd9mPqAthIarEK%2BXnbuDNX%2FTFK3GxAYq%2ByVx9%2Bg7p78L4ojY6Pk3B5Dhr0GO9w9WRzLO0Lev%2B0LuXIuqoYTCsMu7iXi50NgVkjtYcT10MAdPkXZ1Dfhf8ZyP9l0fyFr7r82ZBCHo&X-Amz-Signature=aa3b50e952051aa20687390a111a8f58a5aa54025e65fb9b95d00cdbc6272261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUYAFTOM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt5Sx3CcLBHrW5XmwQkdA14c0pypVa8ESnzRnwRN3xNgIgDg%2FQ87aXXgkaV2BDeYXUclEFAsMHpOOZKjPEywefAaYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUKTOkhWt7xB8xWnircA9PWrOWUgmKkC4efp8BM4HMyzyHPU0Qm68EM6niDm32mH4%2B%2BECh7RU16mC4y%2B7qb3XG9l3mkuefFV%2FeGJoDUHMdCvaNNdzm2VhRd%2F%2FGsHpmJdQOzUJB339rZc80hIksjTPaOku0Cf1lsgiGPhE9hNOGbPs%2BOgvb4gWTV%2FhlOXpFzQMDUNlr4gac8OgRtPcDV5v5q1uAYGKZUEDaf%2FYfziXQhvGnll4Xn2kx%2BXF1D57wvu7Ackgkem66g%2B4Pr5%2FcGOWTaElHGK%2BRlNXobBQMfZR98izRUn%2FUFH9sRiBDDFd3paPxRarFiNArHdRaS6X0qwmXEWJnhzxUUcgVSDIdOkXxGmCGQW1qFgNtptqcS%2FRHAzYQHRhLE0CfveIOoDvr5aP5YTHsF84gfEq%2FYTFCK70yhHa%2BG5vHP1PUINLLiNiwv2nnZnscJyi8UgNlOZ5b6RKIURmgqO0VmtYna7cCUd1jVT4gL3wwhEyWrkBBVfabpz3HIdKgEz1ysk0wSb0fjVfjSSfMV7akVaOmHxwxYNLOHWrVAz%2BvSJ%2FKJihLqJE0rEIIOW3h6S86HfqTKTFVunGUXcy9J5vNbqZIInHI4fDDMtDtDfVPkBzP12Rzi8t20uSulsJfNTbRyJ4zNMKGD3sQGOqUBQIXy%2BbUzpj1VBNIDURKkDQVKrnl5S9iVmXJPfUkJ3dwbentekkMrx9aAALuW3fxM%2BluvYKHxqDr0ZGfkV%2B23kd9mPqAthIarEK%2BXnbuDNX%2FTFK3GxAYq%2ByVx9%2Bg7p78L4ojY6Pk3B5Dhr0GO9w9WRzLO0Lev%2B0LuXIuqoYTCsMu7iXi50NgVkjtYcT10MAdPkXZ1Dfhf8ZyP9l0fyFr7r82ZBCHo&X-Amz-Signature=80f0abdf4909926ee6fc6a40b8d60473cab4d02b33963ed89f45d7e29c8a1b86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUYAFTOM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt5Sx3CcLBHrW5XmwQkdA14c0pypVa8ESnzRnwRN3xNgIgDg%2FQ87aXXgkaV2BDeYXUclEFAsMHpOOZKjPEywefAaYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUKTOkhWt7xB8xWnircA9PWrOWUgmKkC4efp8BM4HMyzyHPU0Qm68EM6niDm32mH4%2B%2BECh7RU16mC4y%2B7qb3XG9l3mkuefFV%2FeGJoDUHMdCvaNNdzm2VhRd%2F%2FGsHpmJdQOzUJB339rZc80hIksjTPaOku0Cf1lsgiGPhE9hNOGbPs%2BOgvb4gWTV%2FhlOXpFzQMDUNlr4gac8OgRtPcDV5v5q1uAYGKZUEDaf%2FYfziXQhvGnll4Xn2kx%2BXF1D57wvu7Ackgkem66g%2B4Pr5%2FcGOWTaElHGK%2BRlNXobBQMfZR98izRUn%2FUFH9sRiBDDFd3paPxRarFiNArHdRaS6X0qwmXEWJnhzxUUcgVSDIdOkXxGmCGQW1qFgNtptqcS%2FRHAzYQHRhLE0CfveIOoDvr5aP5YTHsF84gfEq%2FYTFCK70yhHa%2BG5vHP1PUINLLiNiwv2nnZnscJyi8UgNlOZ5b6RKIURmgqO0VmtYna7cCUd1jVT4gL3wwhEyWrkBBVfabpz3HIdKgEz1ysk0wSb0fjVfjSSfMV7akVaOmHxwxYNLOHWrVAz%2BvSJ%2FKJihLqJE0rEIIOW3h6S86HfqTKTFVunGUXcy9J5vNbqZIInHI4fDDMtDtDfVPkBzP12Rzi8t20uSulsJfNTbRyJ4zNMKGD3sQGOqUBQIXy%2BbUzpj1VBNIDURKkDQVKrnl5S9iVmXJPfUkJ3dwbentekkMrx9aAALuW3fxM%2BluvYKHxqDr0ZGfkV%2B23kd9mPqAthIarEK%2BXnbuDNX%2FTFK3GxAYq%2ByVx9%2Bg7p78L4ojY6Pk3B5Dhr0GO9w9WRzLO0Lev%2B0LuXIuqoYTCsMu7iXi50NgVkjtYcT10MAdPkXZ1Dfhf8ZyP9l0fyFr7r82ZBCHo&X-Amz-Signature=63d5e468b12adf1c6457f241929b413de62b77f4c744875305b2f0ec3620da80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUYAFTOM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt5Sx3CcLBHrW5XmwQkdA14c0pypVa8ESnzRnwRN3xNgIgDg%2FQ87aXXgkaV2BDeYXUclEFAsMHpOOZKjPEywefAaYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUKTOkhWt7xB8xWnircA9PWrOWUgmKkC4efp8BM4HMyzyHPU0Qm68EM6niDm32mH4%2B%2BECh7RU16mC4y%2B7qb3XG9l3mkuefFV%2FeGJoDUHMdCvaNNdzm2VhRd%2F%2FGsHpmJdQOzUJB339rZc80hIksjTPaOku0Cf1lsgiGPhE9hNOGbPs%2BOgvb4gWTV%2FhlOXpFzQMDUNlr4gac8OgRtPcDV5v5q1uAYGKZUEDaf%2FYfziXQhvGnll4Xn2kx%2BXF1D57wvu7Ackgkem66g%2B4Pr5%2FcGOWTaElHGK%2BRlNXobBQMfZR98izRUn%2FUFH9sRiBDDFd3paPxRarFiNArHdRaS6X0qwmXEWJnhzxUUcgVSDIdOkXxGmCGQW1qFgNtptqcS%2FRHAzYQHRhLE0CfveIOoDvr5aP5YTHsF84gfEq%2FYTFCK70yhHa%2BG5vHP1PUINLLiNiwv2nnZnscJyi8UgNlOZ5b6RKIURmgqO0VmtYna7cCUd1jVT4gL3wwhEyWrkBBVfabpz3HIdKgEz1ysk0wSb0fjVfjSSfMV7akVaOmHxwxYNLOHWrVAz%2BvSJ%2FKJihLqJE0rEIIOW3h6S86HfqTKTFVunGUXcy9J5vNbqZIInHI4fDDMtDtDfVPkBzP12Rzi8t20uSulsJfNTbRyJ4zNMKGD3sQGOqUBQIXy%2BbUzpj1VBNIDURKkDQVKrnl5S9iVmXJPfUkJ3dwbentekkMrx9aAALuW3fxM%2BluvYKHxqDr0ZGfkV%2B23kd9mPqAthIarEK%2BXnbuDNX%2FTFK3GxAYq%2ByVx9%2Bg7p78L4ojY6Pk3B5Dhr0GO9w9WRzLO0Lev%2B0LuXIuqoYTCsMu7iXi50NgVkjtYcT10MAdPkXZ1Dfhf8ZyP9l0fyFr7r82ZBCHo&X-Amz-Signature=db9dce4795820c6273bfc14b45b319091ff6118f634a5a53641024260d76c09f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUYAFTOM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt5Sx3CcLBHrW5XmwQkdA14c0pypVa8ESnzRnwRN3xNgIgDg%2FQ87aXXgkaV2BDeYXUclEFAsMHpOOZKjPEywefAaYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUKTOkhWt7xB8xWnircA9PWrOWUgmKkC4efp8BM4HMyzyHPU0Qm68EM6niDm32mH4%2B%2BECh7RU16mC4y%2B7qb3XG9l3mkuefFV%2FeGJoDUHMdCvaNNdzm2VhRd%2F%2FGsHpmJdQOzUJB339rZc80hIksjTPaOku0Cf1lsgiGPhE9hNOGbPs%2BOgvb4gWTV%2FhlOXpFzQMDUNlr4gac8OgRtPcDV5v5q1uAYGKZUEDaf%2FYfziXQhvGnll4Xn2kx%2BXF1D57wvu7Ackgkem66g%2B4Pr5%2FcGOWTaElHGK%2BRlNXobBQMfZR98izRUn%2FUFH9sRiBDDFd3paPxRarFiNArHdRaS6X0qwmXEWJnhzxUUcgVSDIdOkXxGmCGQW1qFgNtptqcS%2FRHAzYQHRhLE0CfveIOoDvr5aP5YTHsF84gfEq%2FYTFCK70yhHa%2BG5vHP1PUINLLiNiwv2nnZnscJyi8UgNlOZ5b6RKIURmgqO0VmtYna7cCUd1jVT4gL3wwhEyWrkBBVfabpz3HIdKgEz1ysk0wSb0fjVfjSSfMV7akVaOmHxwxYNLOHWrVAz%2BvSJ%2FKJihLqJE0rEIIOW3h6S86HfqTKTFVunGUXcy9J5vNbqZIInHI4fDDMtDtDfVPkBzP12Rzi8t20uSulsJfNTbRyJ4zNMKGD3sQGOqUBQIXy%2BbUzpj1VBNIDURKkDQVKrnl5S9iVmXJPfUkJ3dwbentekkMrx9aAALuW3fxM%2BluvYKHxqDr0ZGfkV%2B23kd9mPqAthIarEK%2BXnbuDNX%2FTFK3GxAYq%2ByVx9%2Bg7p78L4ojY6Pk3B5Dhr0GO9w9WRzLO0Lev%2B0LuXIuqoYTCsMu7iXi50NgVkjtYcT10MAdPkXZ1Dfhf8ZyP9l0fyFr7r82ZBCHo&X-Amz-Signature=531249b6fead97a2cc48e64be09b6b3a358f83058c47c520a2d461527fb9189a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUYAFTOM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt5Sx3CcLBHrW5XmwQkdA14c0pypVa8ESnzRnwRN3xNgIgDg%2FQ87aXXgkaV2BDeYXUclEFAsMHpOOZKjPEywefAaYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUKTOkhWt7xB8xWnircA9PWrOWUgmKkC4efp8BM4HMyzyHPU0Qm68EM6niDm32mH4%2B%2BECh7RU16mC4y%2B7qb3XG9l3mkuefFV%2FeGJoDUHMdCvaNNdzm2VhRd%2F%2FGsHpmJdQOzUJB339rZc80hIksjTPaOku0Cf1lsgiGPhE9hNOGbPs%2BOgvb4gWTV%2FhlOXpFzQMDUNlr4gac8OgRtPcDV5v5q1uAYGKZUEDaf%2FYfziXQhvGnll4Xn2kx%2BXF1D57wvu7Ackgkem66g%2B4Pr5%2FcGOWTaElHGK%2BRlNXobBQMfZR98izRUn%2FUFH9sRiBDDFd3paPxRarFiNArHdRaS6X0qwmXEWJnhzxUUcgVSDIdOkXxGmCGQW1qFgNtptqcS%2FRHAzYQHRhLE0CfveIOoDvr5aP5YTHsF84gfEq%2FYTFCK70yhHa%2BG5vHP1PUINLLiNiwv2nnZnscJyi8UgNlOZ5b6RKIURmgqO0VmtYna7cCUd1jVT4gL3wwhEyWrkBBVfabpz3HIdKgEz1ysk0wSb0fjVfjSSfMV7akVaOmHxwxYNLOHWrVAz%2BvSJ%2FKJihLqJE0rEIIOW3h6S86HfqTKTFVunGUXcy9J5vNbqZIInHI4fDDMtDtDfVPkBzP12Rzi8t20uSulsJfNTbRyJ4zNMKGD3sQGOqUBQIXy%2BbUzpj1VBNIDURKkDQVKrnl5S9iVmXJPfUkJ3dwbentekkMrx9aAALuW3fxM%2BluvYKHxqDr0ZGfkV%2B23kd9mPqAthIarEK%2BXnbuDNX%2FTFK3GxAYq%2ByVx9%2Bg7p78L4ojY6Pk3B5Dhr0GO9w9WRzLO0Lev%2B0LuXIuqoYTCsMu7iXi50NgVkjtYcT10MAdPkXZ1Dfhf8ZyP9l0fyFr7r82ZBCHo&X-Amz-Signature=be63d6f71c1f0800f4adfc881d790139632410b9ee73383ce2a1587faaeacdb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUYAFTOM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt5Sx3CcLBHrW5XmwQkdA14c0pypVa8ESnzRnwRN3xNgIgDg%2FQ87aXXgkaV2BDeYXUclEFAsMHpOOZKjPEywefAaYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUKTOkhWt7xB8xWnircA9PWrOWUgmKkC4efp8BM4HMyzyHPU0Qm68EM6niDm32mH4%2B%2BECh7RU16mC4y%2B7qb3XG9l3mkuefFV%2FeGJoDUHMdCvaNNdzm2VhRd%2F%2FGsHpmJdQOzUJB339rZc80hIksjTPaOku0Cf1lsgiGPhE9hNOGbPs%2BOgvb4gWTV%2FhlOXpFzQMDUNlr4gac8OgRtPcDV5v5q1uAYGKZUEDaf%2FYfziXQhvGnll4Xn2kx%2BXF1D57wvu7Ackgkem66g%2B4Pr5%2FcGOWTaElHGK%2BRlNXobBQMfZR98izRUn%2FUFH9sRiBDDFd3paPxRarFiNArHdRaS6X0qwmXEWJnhzxUUcgVSDIdOkXxGmCGQW1qFgNtptqcS%2FRHAzYQHRhLE0CfveIOoDvr5aP5YTHsF84gfEq%2FYTFCK70yhHa%2BG5vHP1PUINLLiNiwv2nnZnscJyi8UgNlOZ5b6RKIURmgqO0VmtYna7cCUd1jVT4gL3wwhEyWrkBBVfabpz3HIdKgEz1ysk0wSb0fjVfjSSfMV7akVaOmHxwxYNLOHWrVAz%2BvSJ%2FKJihLqJE0rEIIOW3h6S86HfqTKTFVunGUXcy9J5vNbqZIInHI4fDDMtDtDfVPkBzP12Rzi8t20uSulsJfNTbRyJ4zNMKGD3sQGOqUBQIXy%2BbUzpj1VBNIDURKkDQVKrnl5S9iVmXJPfUkJ3dwbentekkMrx9aAALuW3fxM%2BluvYKHxqDr0ZGfkV%2B23kd9mPqAthIarEK%2BXnbuDNX%2FTFK3GxAYq%2ByVx9%2Bg7p78L4ojY6Pk3B5Dhr0GO9w9WRzLO0Lev%2B0LuXIuqoYTCsMu7iXi50NgVkjtYcT10MAdPkXZ1Dfhf8ZyP9l0fyFr7r82ZBCHo&X-Amz-Signature=28949bc68f859a4accfec782416373eb7f44e0a887eaf0ee5c6aa8efaf649c4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
