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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIVW3OO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQRnACgurlhXKytFnPoR1VzT9vMlq%2F0s%2FhKACwDBTrZgIhAJoGCs79%2BLFmgu6OxYCtb5tmHDjdJoH97y7iSoAK2uHKKv8DCDQQABoMNjM3NDIzMTgzODA1Igy79GV8AqhpswgnxLsq3APNwM43ihawL8fDCZ%2BvTMf%2FLmXXZO72S%2FbqpV9umSY%2BMGNWM4A5lwiT7Ys4r69jdVGg%2Bx%2BBhvr00vTfnnttn4dG6I8kscQr%2FhuKZ7p5d3PAKi5dvWnvh5TMpHnO0h2PHYD3hEAjwyElsg7VNDLsB%2FbXqieYvMdrzr0t5I5zIF40%2FGefw8BPv5Gjgp3z0%2BgEOTxUX2A%2BAqrPjUGTeEIE%2BIkDrj3pU4JRhxBSbIov7MsOcjM7kLvnjb5PZyblE%2BSk4LREwIXwXYQaKORLJLBmQCv6YOGFty8PJk0B9LajRqA3UP%2FnL1NvDVBF31yRtRdStIHczZ5g70y0RX6gPxFFvUuPyPQ44XjxAAZEceGDhVCmM4%2BZ2IV6nv0aVS8SThR1fPQOUXIvkw%2FGQE%2BUbzjtfNOwQruCuEcjft8Dha5r4vfUthVN73vR4mq5GGEBbWwhv8KY7eEpxk1ucPOmuwqv6alYaCteBk540NGux4bTGGbi36SyFb1bgCtkbCZjLD6c3sSi2dWhpssbmqQz6tjpdrrwuLfRoystbHwZsMQwFXEiC9iGAXW167WpIzVjaUhD3%2Ft5Lrh9reDZuMPR%2FtUwCd0Xc9Jdb4yTbTevWjddh4ipVjlN%2FZlqSnGS642MdzCtxvPEBjqkAbtVE4HMf3kka6lm9vnI%2FPTd8Em%2BO7834uSbEgoGryeea%2BhjgOKZzTG%2FrM2lzGbu8Z6kguXvIGWuUAE0wPaYAnG6H6YB0XIwLTdfu6ncoHsejURnPDFUAqupECzWDNGLHVyiFSOd4YsZMrGKRXvnJi7%2FrTgw5IMmY1yCbry0aqeLKcAd4yvNnh3OZK%2BrUy9lK9zGe8zCxEeU6WrbdzX0f%2Bbk5Kk%2F&X-Amz-Signature=b49176b8a9070b98cd88f1c7ef7e0ae3739d809ae6e70691ed165b606e21fb7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIVW3OO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQRnACgurlhXKytFnPoR1VzT9vMlq%2F0s%2FhKACwDBTrZgIhAJoGCs79%2BLFmgu6OxYCtb5tmHDjdJoH97y7iSoAK2uHKKv8DCDQQABoMNjM3NDIzMTgzODA1Igy79GV8AqhpswgnxLsq3APNwM43ihawL8fDCZ%2BvTMf%2FLmXXZO72S%2FbqpV9umSY%2BMGNWM4A5lwiT7Ys4r69jdVGg%2Bx%2BBhvr00vTfnnttn4dG6I8kscQr%2FhuKZ7p5d3PAKi5dvWnvh5TMpHnO0h2PHYD3hEAjwyElsg7VNDLsB%2FbXqieYvMdrzr0t5I5zIF40%2FGefw8BPv5Gjgp3z0%2BgEOTxUX2A%2BAqrPjUGTeEIE%2BIkDrj3pU4JRhxBSbIov7MsOcjM7kLvnjb5PZyblE%2BSk4LREwIXwXYQaKORLJLBmQCv6YOGFty8PJk0B9LajRqA3UP%2FnL1NvDVBF31yRtRdStIHczZ5g70y0RX6gPxFFvUuPyPQ44XjxAAZEceGDhVCmM4%2BZ2IV6nv0aVS8SThR1fPQOUXIvkw%2FGQE%2BUbzjtfNOwQruCuEcjft8Dha5r4vfUthVN73vR4mq5GGEBbWwhv8KY7eEpxk1ucPOmuwqv6alYaCteBk540NGux4bTGGbi36SyFb1bgCtkbCZjLD6c3sSi2dWhpssbmqQz6tjpdrrwuLfRoystbHwZsMQwFXEiC9iGAXW167WpIzVjaUhD3%2Ft5Lrh9reDZuMPR%2FtUwCd0Xc9Jdb4yTbTevWjddh4ipVjlN%2FZlqSnGS642MdzCtxvPEBjqkAbtVE4HMf3kka6lm9vnI%2FPTd8Em%2BO7834uSbEgoGryeea%2BhjgOKZzTG%2FrM2lzGbu8Z6kguXvIGWuUAE0wPaYAnG6H6YB0XIwLTdfu6ncoHsejURnPDFUAqupECzWDNGLHVyiFSOd4YsZMrGKRXvnJi7%2FrTgw5IMmY1yCbry0aqeLKcAd4yvNnh3OZK%2BrUy9lK9zGe8zCxEeU6WrbdzX0f%2Bbk5Kk%2F&X-Amz-Signature=f0b16809b3f7176a0ed3ad72b24c13b62499714e5c94204c31f1b0d4bbeb4567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIVW3OO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQRnACgurlhXKytFnPoR1VzT9vMlq%2F0s%2FhKACwDBTrZgIhAJoGCs79%2BLFmgu6OxYCtb5tmHDjdJoH97y7iSoAK2uHKKv8DCDQQABoMNjM3NDIzMTgzODA1Igy79GV8AqhpswgnxLsq3APNwM43ihawL8fDCZ%2BvTMf%2FLmXXZO72S%2FbqpV9umSY%2BMGNWM4A5lwiT7Ys4r69jdVGg%2Bx%2BBhvr00vTfnnttn4dG6I8kscQr%2FhuKZ7p5d3PAKi5dvWnvh5TMpHnO0h2PHYD3hEAjwyElsg7VNDLsB%2FbXqieYvMdrzr0t5I5zIF40%2FGefw8BPv5Gjgp3z0%2BgEOTxUX2A%2BAqrPjUGTeEIE%2BIkDrj3pU4JRhxBSbIov7MsOcjM7kLvnjb5PZyblE%2BSk4LREwIXwXYQaKORLJLBmQCv6YOGFty8PJk0B9LajRqA3UP%2FnL1NvDVBF31yRtRdStIHczZ5g70y0RX6gPxFFvUuPyPQ44XjxAAZEceGDhVCmM4%2BZ2IV6nv0aVS8SThR1fPQOUXIvkw%2FGQE%2BUbzjtfNOwQruCuEcjft8Dha5r4vfUthVN73vR4mq5GGEBbWwhv8KY7eEpxk1ucPOmuwqv6alYaCteBk540NGux4bTGGbi36SyFb1bgCtkbCZjLD6c3sSi2dWhpssbmqQz6tjpdrrwuLfRoystbHwZsMQwFXEiC9iGAXW167WpIzVjaUhD3%2Ft5Lrh9reDZuMPR%2FtUwCd0Xc9Jdb4yTbTevWjddh4ipVjlN%2FZlqSnGS642MdzCtxvPEBjqkAbtVE4HMf3kka6lm9vnI%2FPTd8Em%2BO7834uSbEgoGryeea%2BhjgOKZzTG%2FrM2lzGbu8Z6kguXvIGWuUAE0wPaYAnG6H6YB0XIwLTdfu6ncoHsejURnPDFUAqupECzWDNGLHVyiFSOd4YsZMrGKRXvnJi7%2FrTgw5IMmY1yCbry0aqeLKcAd4yvNnh3OZK%2BrUy9lK9zGe8zCxEeU6WrbdzX0f%2Bbk5Kk%2F&X-Amz-Signature=3bc963842f3be87a8601163bd85aef5e2381cf36940b060b9b14b6a428407b7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIVW3OO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQRnACgurlhXKytFnPoR1VzT9vMlq%2F0s%2FhKACwDBTrZgIhAJoGCs79%2BLFmgu6OxYCtb5tmHDjdJoH97y7iSoAK2uHKKv8DCDQQABoMNjM3NDIzMTgzODA1Igy79GV8AqhpswgnxLsq3APNwM43ihawL8fDCZ%2BvTMf%2FLmXXZO72S%2FbqpV9umSY%2BMGNWM4A5lwiT7Ys4r69jdVGg%2Bx%2BBhvr00vTfnnttn4dG6I8kscQr%2FhuKZ7p5d3PAKi5dvWnvh5TMpHnO0h2PHYD3hEAjwyElsg7VNDLsB%2FbXqieYvMdrzr0t5I5zIF40%2FGefw8BPv5Gjgp3z0%2BgEOTxUX2A%2BAqrPjUGTeEIE%2BIkDrj3pU4JRhxBSbIov7MsOcjM7kLvnjb5PZyblE%2BSk4LREwIXwXYQaKORLJLBmQCv6YOGFty8PJk0B9LajRqA3UP%2FnL1NvDVBF31yRtRdStIHczZ5g70y0RX6gPxFFvUuPyPQ44XjxAAZEceGDhVCmM4%2BZ2IV6nv0aVS8SThR1fPQOUXIvkw%2FGQE%2BUbzjtfNOwQruCuEcjft8Dha5r4vfUthVN73vR4mq5GGEBbWwhv8KY7eEpxk1ucPOmuwqv6alYaCteBk540NGux4bTGGbi36SyFb1bgCtkbCZjLD6c3sSi2dWhpssbmqQz6tjpdrrwuLfRoystbHwZsMQwFXEiC9iGAXW167WpIzVjaUhD3%2Ft5Lrh9reDZuMPR%2FtUwCd0Xc9Jdb4yTbTevWjddh4ipVjlN%2FZlqSnGS642MdzCtxvPEBjqkAbtVE4HMf3kka6lm9vnI%2FPTd8Em%2BO7834uSbEgoGryeea%2BhjgOKZzTG%2FrM2lzGbu8Z6kguXvIGWuUAE0wPaYAnG6H6YB0XIwLTdfu6ncoHsejURnPDFUAqupECzWDNGLHVyiFSOd4YsZMrGKRXvnJi7%2FrTgw5IMmY1yCbry0aqeLKcAd4yvNnh3OZK%2BrUy9lK9zGe8zCxEeU6WrbdzX0f%2Bbk5Kk%2F&X-Amz-Signature=97e5f5ea7849ee7dd19c87fbc64f9ee078858d3be26ae935d0de648e45b9d48b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIVW3OO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQRnACgurlhXKytFnPoR1VzT9vMlq%2F0s%2FhKACwDBTrZgIhAJoGCs79%2BLFmgu6OxYCtb5tmHDjdJoH97y7iSoAK2uHKKv8DCDQQABoMNjM3NDIzMTgzODA1Igy79GV8AqhpswgnxLsq3APNwM43ihawL8fDCZ%2BvTMf%2FLmXXZO72S%2FbqpV9umSY%2BMGNWM4A5lwiT7Ys4r69jdVGg%2Bx%2BBhvr00vTfnnttn4dG6I8kscQr%2FhuKZ7p5d3PAKi5dvWnvh5TMpHnO0h2PHYD3hEAjwyElsg7VNDLsB%2FbXqieYvMdrzr0t5I5zIF40%2FGefw8BPv5Gjgp3z0%2BgEOTxUX2A%2BAqrPjUGTeEIE%2BIkDrj3pU4JRhxBSbIov7MsOcjM7kLvnjb5PZyblE%2BSk4LREwIXwXYQaKORLJLBmQCv6YOGFty8PJk0B9LajRqA3UP%2FnL1NvDVBF31yRtRdStIHczZ5g70y0RX6gPxFFvUuPyPQ44XjxAAZEceGDhVCmM4%2BZ2IV6nv0aVS8SThR1fPQOUXIvkw%2FGQE%2BUbzjtfNOwQruCuEcjft8Dha5r4vfUthVN73vR4mq5GGEBbWwhv8KY7eEpxk1ucPOmuwqv6alYaCteBk540NGux4bTGGbi36SyFb1bgCtkbCZjLD6c3sSi2dWhpssbmqQz6tjpdrrwuLfRoystbHwZsMQwFXEiC9iGAXW167WpIzVjaUhD3%2Ft5Lrh9reDZuMPR%2FtUwCd0Xc9Jdb4yTbTevWjddh4ipVjlN%2FZlqSnGS642MdzCtxvPEBjqkAbtVE4HMf3kka6lm9vnI%2FPTd8Em%2BO7834uSbEgoGryeea%2BhjgOKZzTG%2FrM2lzGbu8Z6kguXvIGWuUAE0wPaYAnG6H6YB0XIwLTdfu6ncoHsejURnPDFUAqupECzWDNGLHVyiFSOd4YsZMrGKRXvnJi7%2FrTgw5IMmY1yCbry0aqeLKcAd4yvNnh3OZK%2BrUy9lK9zGe8zCxEeU6WrbdzX0f%2Bbk5Kk%2F&X-Amz-Signature=3706ed32e72f7520aaaabdf6a2fd32afc6eacb6189f83bedc0b07dea73cc8449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIVW3OO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQRnACgurlhXKytFnPoR1VzT9vMlq%2F0s%2FhKACwDBTrZgIhAJoGCs79%2BLFmgu6OxYCtb5tmHDjdJoH97y7iSoAK2uHKKv8DCDQQABoMNjM3NDIzMTgzODA1Igy79GV8AqhpswgnxLsq3APNwM43ihawL8fDCZ%2BvTMf%2FLmXXZO72S%2FbqpV9umSY%2BMGNWM4A5lwiT7Ys4r69jdVGg%2Bx%2BBhvr00vTfnnttn4dG6I8kscQr%2FhuKZ7p5d3PAKi5dvWnvh5TMpHnO0h2PHYD3hEAjwyElsg7VNDLsB%2FbXqieYvMdrzr0t5I5zIF40%2FGefw8BPv5Gjgp3z0%2BgEOTxUX2A%2BAqrPjUGTeEIE%2BIkDrj3pU4JRhxBSbIov7MsOcjM7kLvnjb5PZyblE%2BSk4LREwIXwXYQaKORLJLBmQCv6YOGFty8PJk0B9LajRqA3UP%2FnL1NvDVBF31yRtRdStIHczZ5g70y0RX6gPxFFvUuPyPQ44XjxAAZEceGDhVCmM4%2BZ2IV6nv0aVS8SThR1fPQOUXIvkw%2FGQE%2BUbzjtfNOwQruCuEcjft8Dha5r4vfUthVN73vR4mq5GGEBbWwhv8KY7eEpxk1ucPOmuwqv6alYaCteBk540NGux4bTGGbi36SyFb1bgCtkbCZjLD6c3sSi2dWhpssbmqQz6tjpdrrwuLfRoystbHwZsMQwFXEiC9iGAXW167WpIzVjaUhD3%2Ft5Lrh9reDZuMPR%2FtUwCd0Xc9Jdb4yTbTevWjddh4ipVjlN%2FZlqSnGS642MdzCtxvPEBjqkAbtVE4HMf3kka6lm9vnI%2FPTd8Em%2BO7834uSbEgoGryeea%2BhjgOKZzTG%2FrM2lzGbu8Z6kguXvIGWuUAE0wPaYAnG6H6YB0XIwLTdfu6ncoHsejURnPDFUAqupECzWDNGLHVyiFSOd4YsZMrGKRXvnJi7%2FrTgw5IMmY1yCbry0aqeLKcAd4yvNnh3OZK%2BrUy9lK9zGe8zCxEeU6WrbdzX0f%2Bbk5Kk%2F&X-Amz-Signature=0275a258d60a13f70cd94362e0229f72730bc21f2497820bc7724072634d3428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIVW3OO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQRnACgurlhXKytFnPoR1VzT9vMlq%2F0s%2FhKACwDBTrZgIhAJoGCs79%2BLFmgu6OxYCtb5tmHDjdJoH97y7iSoAK2uHKKv8DCDQQABoMNjM3NDIzMTgzODA1Igy79GV8AqhpswgnxLsq3APNwM43ihawL8fDCZ%2BvTMf%2FLmXXZO72S%2FbqpV9umSY%2BMGNWM4A5lwiT7Ys4r69jdVGg%2Bx%2BBhvr00vTfnnttn4dG6I8kscQr%2FhuKZ7p5d3PAKi5dvWnvh5TMpHnO0h2PHYD3hEAjwyElsg7VNDLsB%2FbXqieYvMdrzr0t5I5zIF40%2FGefw8BPv5Gjgp3z0%2BgEOTxUX2A%2BAqrPjUGTeEIE%2BIkDrj3pU4JRhxBSbIov7MsOcjM7kLvnjb5PZyblE%2BSk4LREwIXwXYQaKORLJLBmQCv6YOGFty8PJk0B9LajRqA3UP%2FnL1NvDVBF31yRtRdStIHczZ5g70y0RX6gPxFFvUuPyPQ44XjxAAZEceGDhVCmM4%2BZ2IV6nv0aVS8SThR1fPQOUXIvkw%2FGQE%2BUbzjtfNOwQruCuEcjft8Dha5r4vfUthVN73vR4mq5GGEBbWwhv8KY7eEpxk1ucPOmuwqv6alYaCteBk540NGux4bTGGbi36SyFb1bgCtkbCZjLD6c3sSi2dWhpssbmqQz6tjpdrrwuLfRoystbHwZsMQwFXEiC9iGAXW167WpIzVjaUhD3%2Ft5Lrh9reDZuMPR%2FtUwCd0Xc9Jdb4yTbTevWjddh4ipVjlN%2FZlqSnGS642MdzCtxvPEBjqkAbtVE4HMf3kka6lm9vnI%2FPTd8Em%2BO7834uSbEgoGryeea%2BhjgOKZzTG%2FrM2lzGbu8Z6kguXvIGWuUAE0wPaYAnG6H6YB0XIwLTdfu6ncoHsejURnPDFUAqupECzWDNGLHVyiFSOd4YsZMrGKRXvnJi7%2FrTgw5IMmY1yCbry0aqeLKcAd4yvNnh3OZK%2BrUy9lK9zGe8zCxEeU6WrbdzX0f%2Bbk5Kk%2F&X-Amz-Signature=ae035084f8b8875f0dc1cd297dda75e93fd172f69d2b9be3543920ef55234da3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIVW3OO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQRnACgurlhXKytFnPoR1VzT9vMlq%2F0s%2FhKACwDBTrZgIhAJoGCs79%2BLFmgu6OxYCtb5tmHDjdJoH97y7iSoAK2uHKKv8DCDQQABoMNjM3NDIzMTgzODA1Igy79GV8AqhpswgnxLsq3APNwM43ihawL8fDCZ%2BvTMf%2FLmXXZO72S%2FbqpV9umSY%2BMGNWM4A5lwiT7Ys4r69jdVGg%2Bx%2BBhvr00vTfnnttn4dG6I8kscQr%2FhuKZ7p5d3PAKi5dvWnvh5TMpHnO0h2PHYD3hEAjwyElsg7VNDLsB%2FbXqieYvMdrzr0t5I5zIF40%2FGefw8BPv5Gjgp3z0%2BgEOTxUX2A%2BAqrPjUGTeEIE%2BIkDrj3pU4JRhxBSbIov7MsOcjM7kLvnjb5PZyblE%2BSk4LREwIXwXYQaKORLJLBmQCv6YOGFty8PJk0B9LajRqA3UP%2FnL1NvDVBF31yRtRdStIHczZ5g70y0RX6gPxFFvUuPyPQ44XjxAAZEceGDhVCmM4%2BZ2IV6nv0aVS8SThR1fPQOUXIvkw%2FGQE%2BUbzjtfNOwQruCuEcjft8Dha5r4vfUthVN73vR4mq5GGEBbWwhv8KY7eEpxk1ucPOmuwqv6alYaCteBk540NGux4bTGGbi36SyFb1bgCtkbCZjLD6c3sSi2dWhpssbmqQz6tjpdrrwuLfRoystbHwZsMQwFXEiC9iGAXW167WpIzVjaUhD3%2Ft5Lrh9reDZuMPR%2FtUwCd0Xc9Jdb4yTbTevWjddh4ipVjlN%2FZlqSnGS642MdzCtxvPEBjqkAbtVE4HMf3kka6lm9vnI%2FPTd8Em%2BO7834uSbEgoGryeea%2BhjgOKZzTG%2FrM2lzGbu8Z6kguXvIGWuUAE0wPaYAnG6H6YB0XIwLTdfu6ncoHsejURnPDFUAqupECzWDNGLHVyiFSOd4YsZMrGKRXvnJi7%2FrTgw5IMmY1yCbry0aqeLKcAd4yvNnh3OZK%2BrUy9lK9zGe8zCxEeU6WrbdzX0f%2Bbk5Kk%2F&X-Amz-Signature=53428edc58b226812984429803a1c5675b479cbca767247dc829093f2ef22776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIVW3OO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQRnACgurlhXKytFnPoR1VzT9vMlq%2F0s%2FhKACwDBTrZgIhAJoGCs79%2BLFmgu6OxYCtb5tmHDjdJoH97y7iSoAK2uHKKv8DCDQQABoMNjM3NDIzMTgzODA1Igy79GV8AqhpswgnxLsq3APNwM43ihawL8fDCZ%2BvTMf%2FLmXXZO72S%2FbqpV9umSY%2BMGNWM4A5lwiT7Ys4r69jdVGg%2Bx%2BBhvr00vTfnnttn4dG6I8kscQr%2FhuKZ7p5d3PAKi5dvWnvh5TMpHnO0h2PHYD3hEAjwyElsg7VNDLsB%2FbXqieYvMdrzr0t5I5zIF40%2FGefw8BPv5Gjgp3z0%2BgEOTxUX2A%2BAqrPjUGTeEIE%2BIkDrj3pU4JRhxBSbIov7MsOcjM7kLvnjb5PZyblE%2BSk4LREwIXwXYQaKORLJLBmQCv6YOGFty8PJk0B9LajRqA3UP%2FnL1NvDVBF31yRtRdStIHczZ5g70y0RX6gPxFFvUuPyPQ44XjxAAZEceGDhVCmM4%2BZ2IV6nv0aVS8SThR1fPQOUXIvkw%2FGQE%2BUbzjtfNOwQruCuEcjft8Dha5r4vfUthVN73vR4mq5GGEBbWwhv8KY7eEpxk1ucPOmuwqv6alYaCteBk540NGux4bTGGbi36SyFb1bgCtkbCZjLD6c3sSi2dWhpssbmqQz6tjpdrrwuLfRoystbHwZsMQwFXEiC9iGAXW167WpIzVjaUhD3%2Ft5Lrh9reDZuMPR%2FtUwCd0Xc9Jdb4yTbTevWjddh4ipVjlN%2FZlqSnGS642MdzCtxvPEBjqkAbtVE4HMf3kka6lm9vnI%2FPTd8Em%2BO7834uSbEgoGryeea%2BhjgOKZzTG%2FrM2lzGbu8Z6kguXvIGWuUAE0wPaYAnG6H6YB0XIwLTdfu6ncoHsejURnPDFUAqupECzWDNGLHVyiFSOd4YsZMrGKRXvnJi7%2FrTgw5IMmY1yCbry0aqeLKcAd4yvNnh3OZK%2BrUy9lK9zGe8zCxEeU6WrbdzX0f%2Bbk5Kk%2F&X-Amz-Signature=f08fbc103a1a2a4901e23c775842ef9433d14bbd6df4c18127d8f4e40b682980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIVW3OO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQRnACgurlhXKytFnPoR1VzT9vMlq%2F0s%2FhKACwDBTrZgIhAJoGCs79%2BLFmgu6OxYCtb5tmHDjdJoH97y7iSoAK2uHKKv8DCDQQABoMNjM3NDIzMTgzODA1Igy79GV8AqhpswgnxLsq3APNwM43ihawL8fDCZ%2BvTMf%2FLmXXZO72S%2FbqpV9umSY%2BMGNWM4A5lwiT7Ys4r69jdVGg%2Bx%2BBhvr00vTfnnttn4dG6I8kscQr%2FhuKZ7p5d3PAKi5dvWnvh5TMpHnO0h2PHYD3hEAjwyElsg7VNDLsB%2FbXqieYvMdrzr0t5I5zIF40%2FGefw8BPv5Gjgp3z0%2BgEOTxUX2A%2BAqrPjUGTeEIE%2BIkDrj3pU4JRhxBSbIov7MsOcjM7kLvnjb5PZyblE%2BSk4LREwIXwXYQaKORLJLBmQCv6YOGFty8PJk0B9LajRqA3UP%2FnL1NvDVBF31yRtRdStIHczZ5g70y0RX6gPxFFvUuPyPQ44XjxAAZEceGDhVCmM4%2BZ2IV6nv0aVS8SThR1fPQOUXIvkw%2FGQE%2BUbzjtfNOwQruCuEcjft8Dha5r4vfUthVN73vR4mq5GGEBbWwhv8KY7eEpxk1ucPOmuwqv6alYaCteBk540NGux4bTGGbi36SyFb1bgCtkbCZjLD6c3sSi2dWhpssbmqQz6tjpdrrwuLfRoystbHwZsMQwFXEiC9iGAXW167WpIzVjaUhD3%2Ft5Lrh9reDZuMPR%2FtUwCd0Xc9Jdb4yTbTevWjddh4ipVjlN%2FZlqSnGS642MdzCtxvPEBjqkAbtVE4HMf3kka6lm9vnI%2FPTd8Em%2BO7834uSbEgoGryeea%2BhjgOKZzTG%2FrM2lzGbu8Z6kguXvIGWuUAE0wPaYAnG6H6YB0XIwLTdfu6ncoHsejURnPDFUAqupECzWDNGLHVyiFSOd4YsZMrGKRXvnJi7%2FrTgw5IMmY1yCbry0aqeLKcAd4yvNnh3OZK%2BrUy9lK9zGe8zCxEeU6WrbdzX0f%2Bbk5Kk%2F&X-Amz-Signature=e7a7ed65bf6017ff7fac3b26f27b24354d6db1df53f11cd3f9dc1b5109ddf74f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSNI3YNZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVSU2nNd2x4gIs6bArNMMsxuU%2B%2FfJ3thxGqICWwJ1ntQIhAPH2JUhXd2yQqAbDlYMyUhR8JTIdKGISjTRnX4N8WQL1Kv8DCDQQABoMNjM3NDIzMTgzODA1IgyMvQdDmKTEfzWECaYq3AOckr%2F7FqEXNFP%2FSFFRq8l4Qpm5QPoaGksgNziPF47D6QgwCD42Lz1PdyzNJbHJSn7Ac4qMTTAlVjwlyDbPeudHH7DBQskWUDdBD0axA67H1eLKgnoNxd3nhWb%2BYDR6U15Bdn7%2BEnsfp6ssRIU1V99quLHOJDla9zi5xH1QuguD2ZQfm2pUzZNOttr2f8praBXPNnjkyC61QeumlKA454xqgOUt2r4pWjsfn0eolcYxZytI7nktAXmMeQFu30V0giOkIxUElGz2eepnbz%2FRxIyprHVYd0Di7X58ZY9BtnUF909G5AxsPoYRm8PQzMYDpHeJ1jqOdcHPlmiKOLgL9fnXDJ9cwaYduIz8vMxyIemBxJoJelkmeunc%2FeD9VX3ClMERaOwzDfZ7pxNj6lIjkW0m2iWNUQaIRHvHm8yi%2FLo2rPLw%2FyTZ8hIHPdNCuGwAozJkU0Y5kCcp4pByBCZgisoW9Whw8X2lfC8TvwLR1tyeu63s2n7mehonN64A7WHak0rz%2BL6ZZs%2B3EezB%2Fn9tP9WaFsfyGrukk0vbDlJg1xhY4MHeelamCwEFaVa74z0zeJ9tP1MdQH1udRSNRYW88p4Mv2uWlELqzA9OCXImPvQCTG0qD0Y%2FCJ4oniGMmTDixfPEBjqkAc4PsJlyQHeT65X7769UZLjWJpFubsbl62bxUqlChgBSANhILz9wan8tXIBoJDJa2HiiAFQRBip7D0oiCjH%2BUdW8wWaHOd2b7ycLq37v2mJPDYTbHnVrH1fzXzRHX9XGvD%2BYw6ZBCN7FqFGIGrEv2h5%2BbBMMoTwbwWMCqMA9CFmVvtBZJibxQNcTGt%2BdSLqFhmmbUUhJwacPeNFQD0RCHurpBcTH&X-Amz-Signature=284f4552767444dd5b707bba85f371e0f16f1b8dab034d9b33350567a55f08cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWOZKXBI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBAft5BmUhI51V00AywLwHTfIjiOH6yW5CK5cDDsDKlwIgXHs%2FFqvHv5DoK2i%2Fe3zOc8YSn%2FjW40cH%2Fq0jwJglkNwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAUkF8bBTURJ7%2Bp0byrcAy0mazE8yifXwRYEdRuEbX7gl3DpTyoAUXMWhZ2MwvtcAi5CwC6Tsfg0MFvFoO6fow4HzDGvzHFw1rFxlPaNK0MEVrUVOa1xO32oHp8IE2WLWStbC6zvzg8kIEcLta7EGVeG%2BYiNYjxNgJhzZP6G1na4oK7pVULV6KNrNbV%2FeXpFo5LIKDZDmxlp2fFuKq7bQ75Xw52uUzi%2FgFoXjPSfwrsgFHKqqHh32bmQ9LL%2B%2BpIvxUvwkOypPN%2FkpW6puLq20CkEOnN0i3E1tMjIBeGdA0mas2QLpUbY1hyZiHekBcWQCeQyyLgFsRcjeH7L1WBAHmE0PD448d%2FcssfzHeFCmHOvizrpiHIR%2BDyguVZbK1Y3kgXazpxx%2B%2BcdQFY4%2Bl2dnqJr9zG8pMFngW5W9UtVLLj1tTTIoctUSXqQLsqZFIGlqfCpSD4PwB1yG0WKWMJqjaDiwWUpvWi4qhdT5oR0tH5a4UVKsHfjI3VHfeHaZOeFKnFiP3M1G%2F%2B%2BN9fgL5krbhsS1LRC93eFemsotforcF8ZxGgTG6yRk%2BEoi5EHQn94WSZCswCwErK9y8gKVKJmQZ5xDpyH7mtfbifM1L78TAzrJXQ3ii3tYPgovZlbE81G4s7pR4B0tmvUzFoWMNvF88QGOqUB5ijI7IBrsfhGHsKEuZZF5UNnHZmCaAxj%2B06KL4qGGmFh7iBdKVvW6qSAvAe9Hq210UbwSctICNNRljjdjR1JfroFkDxD%2Bc%2BOe8q5tJPvZNjAkYGVFESpq1yCOPWiyH0ZfVBSFS5IBLx9Ew86GemmTdnt%2BlQ2vJx3yEpGmZnzKgr3Yrdrf07%2BZwVt%2BOLhEzTADl07N5hRp4D3q8FfwSpUlu0dy2sK&X-Amz-Signature=416e69aaa173236b4f3737aafc6f601d485b33bd18fb3a1b10b41fe2cec1387c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX24DLFE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDNCuV0YVZPlBJuoX7CkepKU9CUPdCdE%2BPocnFoiAcvAiAZoFrKHrTm7Aif0bPkky3M3z52YnfPNnXB2AIuCYBlbir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMR98kJPqMyCjnp9p3KtwDI3brtdPrHiVXhis3K%2FRY7kpVgLLKdZ573t6QMMa0KJbrknX23bj77wa4hbZr9sFhUPNbGq%2B87LKiC6%2BM2KA3ksygdbF18wW%2FQNmAUWo2xDWI50IvPNfzZJh18pwwzMYicSELHaSSYbFGQAqZovPK9wRYzgLmhefh1TNMKoURfwfd%2FPyfNCXvxUyoCSWgUE1aAuBxpp4qqcq8P5w2qh8DDRxaOfpMg%2BlCihYIy%2BWZqz9JLp7rXMOpj7y0c2LlbfLY0Xwuczu7Td9%2BShfT7UcAqnKe9%2Fe3SdTVNs%2F8WLhmAbgiF8RaPxTS0alrKj%2B6WwQgH8KvuC%2BeyU21oM3jSO%2F2jKU5XIHLWCft6JEbt%2FNWjGqi%2BDreKIgoML88920KRo0nq%2FDS6ExVxCeiuyR1Fc1k4cMUDNMmnO0OERzMLXZa5C5QdSz%2BzA7SLBrhrdAR%2BcfZdouT2TvgGMBVNEIOiO%2FA4ISpGy3QZZ5fAFt8KZV%2Bbg%2F4UtE1KKe8dhUNAqZLvwlR2P1XDvRP%2BoVxwdaa4pIa7LwRRFHVX3W0PmfUpbxHLH%2BEgARbeDMjME1ftVV4JeQrloL1xGneE4ajzs%2BjUNGqidYgyNEVtFzgghjvjdQlLwH%2Fj46D6X6TcuZYpOgw%2F8XzxAY6pgHR3WU5VkXYwsUw7l631O%2F%2BWfLJpQerdmFBGN1vFWNR44qj%2F7Iq0pCvAgvPDPF49mgRlTs5ICBEppvJEVlKi1Oa3LY7oUQw2zhjJ9XgFWr3RHp%2Bb2pqEh%2FLgjrRfzgEkew%2Ftx85K8cpXqrnUlpc60GV1zIqmXYbeXKIsRajW059QRss16xszBBfUwZFzKPh6REvbd7PVl%2B48OroYF9tX9la2CR8sqz8&X-Amz-Signature=114935f4316d87eb1d518c4765826bd8b1743c8bfa3048ce79bb1fb253644743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIVW3OO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQRnACgurlhXKytFnPoR1VzT9vMlq%2F0s%2FhKACwDBTrZgIhAJoGCs79%2BLFmgu6OxYCtb5tmHDjdJoH97y7iSoAK2uHKKv8DCDQQABoMNjM3NDIzMTgzODA1Igy79GV8AqhpswgnxLsq3APNwM43ihawL8fDCZ%2BvTMf%2FLmXXZO72S%2FbqpV9umSY%2BMGNWM4A5lwiT7Ys4r69jdVGg%2Bx%2BBhvr00vTfnnttn4dG6I8kscQr%2FhuKZ7p5d3PAKi5dvWnvh5TMpHnO0h2PHYD3hEAjwyElsg7VNDLsB%2FbXqieYvMdrzr0t5I5zIF40%2FGefw8BPv5Gjgp3z0%2BgEOTxUX2A%2BAqrPjUGTeEIE%2BIkDrj3pU4JRhxBSbIov7MsOcjM7kLvnjb5PZyblE%2BSk4LREwIXwXYQaKORLJLBmQCv6YOGFty8PJk0B9LajRqA3UP%2FnL1NvDVBF31yRtRdStIHczZ5g70y0RX6gPxFFvUuPyPQ44XjxAAZEceGDhVCmM4%2BZ2IV6nv0aVS8SThR1fPQOUXIvkw%2FGQE%2BUbzjtfNOwQruCuEcjft8Dha5r4vfUthVN73vR4mq5GGEBbWwhv8KY7eEpxk1ucPOmuwqv6alYaCteBk540NGux4bTGGbi36SyFb1bgCtkbCZjLD6c3sSi2dWhpssbmqQz6tjpdrrwuLfRoystbHwZsMQwFXEiC9iGAXW167WpIzVjaUhD3%2Ft5Lrh9reDZuMPR%2FtUwCd0Xc9Jdb4yTbTevWjddh4ipVjlN%2FZlqSnGS642MdzCtxvPEBjqkAbtVE4HMf3kka6lm9vnI%2FPTd8Em%2BO7834uSbEgoGryeea%2BhjgOKZzTG%2FrM2lzGbu8Z6kguXvIGWuUAE0wPaYAnG6H6YB0XIwLTdfu6ncoHsejURnPDFUAqupECzWDNGLHVyiFSOd4YsZMrGKRXvnJi7%2FrTgw5IMmY1yCbry0aqeLKcAd4yvNnh3OZK%2BrUy9lK9zGe8zCxEeU6WrbdzX0f%2Bbk5Kk%2F&X-Amz-Signature=155651d365a86eff922d2fd3a0d5f25dd502435f99869389584259d3b72c928c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6LXERR2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2F5bTJSA1jD0Ye%2BZjujn6%2F6K2Q5irXeftV1usC9vh4PAiEA%2F7sFDdsw8Wpih95BQQu%2FJ5TnsjEnINGF2Z6bvqJQXX8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPLTUL8iAPD%2FG%2BYMNyrcA5Gh1vtLd5H85iYplQ9EFBMpnNKzWjdT23LNa3vPYSudg3K9BT94DHIaphXMTanOHbfeBhLP9wEhPc8ZuVySNrZ7P8vjJQh1AW2GL8JyyJ%2BiQtO1t20dtzXkZ2bqoDAq0Id9b%2FUMiMeh2JyQMjentusAPVOll2%2Fr6ZQZ7SNDoq55hy3%2F2ENiH1ELyrm5UpPXx6gVTUX26L6JOMQTjlANjGS42q0OqK5zy4pOamxxAeMPN31yp7YWB%2F9t1hB2mFlaXrLRfEcHB%2BEeOuGc9e1zSbYOABfr1k2yYc7OCPLgg3pM%2Fh%2FMNq%2BmTGoCJQPIhdBwzC1CmAbU4q%2FABjeyvrBdNlwsCaiF36fidraRQoSN2Fhsk3FkMxjniGmHzbVLkeZHf6TbMaDVJkjfb%2FTt9VEW7ZP5PMNoFrAxvHwOlI%2B%2BTWyoj189fZ54yjBgvaaN%2Bf6Aex52divCcryDICoLKAsm09T5kGdSW06yyIkk9Hpcjq96msBYALtRhpvMbmmWJTqWG1%2Bgt2FZ%2BdiXYeFPNrBaR8UIm79o%2B%2BJzhGEGZ3FUXpZGV2m97rFq2oN8P4mMOETbx9pNAI2YJ14eoioie%2FNRVt8MwgzMhLHaZjara0d7z0TWK3PFUpWUgUdlIlQrMN7F88QGOqUBLxTjsQ77KMqI%2Bc3wxGy0RjjXGBb4Sc5AoNGjxVO5mD3xP3kDNxka0L8fja3xn1mwyKq7TDdAYYVS0yxarQKqyCttK6%2FnL3LyE1L2M%2FGM8gtu3TvMANb2ZcQil3yNl%2FzXxx3d1QV5kMPUYumX8qQX%2BcaAWqZsRIZlPyKQ2KdM74Ypt5dyo%2BqStn4qlKLJRkAKTqug%2Bd%2BMy1fzjEFsx9j8wTtu1Qv3&X-Amz-Signature=8a96404aa29172f18dd942b20f3e00856f39b090f8574b593ec56a64c42ef1ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIVW3OO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQRnACgurlhXKytFnPoR1VzT9vMlq%2F0s%2FhKACwDBTrZgIhAJoGCs79%2BLFmgu6OxYCtb5tmHDjdJoH97y7iSoAK2uHKKv8DCDQQABoMNjM3NDIzMTgzODA1Igy79GV8AqhpswgnxLsq3APNwM43ihawL8fDCZ%2BvTMf%2FLmXXZO72S%2FbqpV9umSY%2BMGNWM4A5lwiT7Ys4r69jdVGg%2Bx%2BBhvr00vTfnnttn4dG6I8kscQr%2FhuKZ7p5d3PAKi5dvWnvh5TMpHnO0h2PHYD3hEAjwyElsg7VNDLsB%2FbXqieYvMdrzr0t5I5zIF40%2FGefw8BPv5Gjgp3z0%2BgEOTxUX2A%2BAqrPjUGTeEIE%2BIkDrj3pU4JRhxBSbIov7MsOcjM7kLvnjb5PZyblE%2BSk4LREwIXwXYQaKORLJLBmQCv6YOGFty8PJk0B9LajRqA3UP%2FnL1NvDVBF31yRtRdStIHczZ5g70y0RX6gPxFFvUuPyPQ44XjxAAZEceGDhVCmM4%2BZ2IV6nv0aVS8SThR1fPQOUXIvkw%2FGQE%2BUbzjtfNOwQruCuEcjft8Dha5r4vfUthVN73vR4mq5GGEBbWwhv8KY7eEpxk1ucPOmuwqv6alYaCteBk540NGux4bTGGbi36SyFb1bgCtkbCZjLD6c3sSi2dWhpssbmqQz6tjpdrrwuLfRoystbHwZsMQwFXEiC9iGAXW167WpIzVjaUhD3%2Ft5Lrh9reDZuMPR%2FtUwCd0Xc9Jdb4yTbTevWjddh4ipVjlN%2FZlqSnGS642MdzCtxvPEBjqkAbtVE4HMf3kka6lm9vnI%2FPTd8Em%2BO7834uSbEgoGryeea%2BhjgOKZzTG%2FrM2lzGbu8Z6kguXvIGWuUAE0wPaYAnG6H6YB0XIwLTdfu6ncoHsejURnPDFUAqupECzWDNGLHVyiFSOd4YsZMrGKRXvnJi7%2FrTgw5IMmY1yCbry0aqeLKcAd4yvNnh3OZK%2BrUy9lK9zGe8zCxEeU6WrbdzX0f%2Bbk5Kk%2F&X-Amz-Signature=387ee89a52342cf1ef4bb1fb9a68df663ee2ec5c8463d8d0861c8bf6038c21c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7AVSGO2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFW%2F%2BhS1tUqGy2Jl5JJjQRve2rpY2IkUKVp7jge1AxSEAiAlnfAeYqKhj3aBftTDO5LBja%2F7x2qmH44nf6K0JSExZir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMgN5KQ6u7L0pV0WW%2FKtwDZIYpYxJT3QbQv9WG1GDULeQCFftJ2pU1bOYPPL9hVVBQuko9qA%2BLIuOcKbA9cr3WakHgQHQouJtu6fB2gpGaqirW5HJXO5blFc0UxrTa3Si11NY41Wv8ejOH2rm9IUVUkAzhAVCnFJUKjbvzg0WdrtRjn%2F8pRyv31%2Bbe242uxxXEDw5HfQICoCEed2WmYiIzsMqVNiAMKPmglKMYq1q4hApmIi4rFq9rTrWYutPZrv8jLeOUF%2FYMOdtxdjfG6moLdEKtPu7%2BRuBuwIUsuXYEKorEc669J2L7vCCjAj8e6WWgi%2FQLIX1MH8HvBYX0UkgrIZx51ffv0GXznxlxI500lfDGudnLKVNohsMdTYaAD1M5H9bC2jHM1X3%2BeGPDSq3bPlRq4NN2Bd%2FfVD%2Fz64Sl89B%2FQDmkezk%2B6U%2F70%2FMjXAAOJJ%2BrSzTaFtw1KhCbai0YuE7D9G1cGe7lIy1h6zXeDHwezwTnnc55sWo0Jy2GFYwM2g8F4xppOdSREFjDNI1OGy5ojpre2SvZNad83vccjKHK%2BymVMPARAvoj7AjLZNJrxk2tDjdvMDNlLQHGQbJwdE5NYJoUBCmOaks%2F2D1YTfatOc7jC68SfKpz3GZCYx1HMpdgKS%2BmTcZkTN0wvsbzxAY6pgGiw6G810%2BEjLE5Wbh36GLVqshx%2FSK4OjBk9RCpI2KyGw5NwIhNTCImj5wABBcJRKhrllO%2FgSPIr5m2gT7WNtN%2FPiYy5G5CI54M%2FDAgYiESOWM0rYpJaC7UK6Ltp4KglowDz%2FwJuoo6RfZXVFbZX4MiGLa46A%2B0wryUOO2Ye8wg7rXg4SWdsj8zu2nrgonwGZQiWbO%2FDQeDAUVM1WYWtfd7HYPRoWRY&X-Amz-Signature=098a583a9e35f3497ecfc0061e34441870e490b30e5461fdd91de61ecaeca8ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIVW3OO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQRnACgurlhXKytFnPoR1VzT9vMlq%2F0s%2FhKACwDBTrZgIhAJoGCs79%2BLFmgu6OxYCtb5tmHDjdJoH97y7iSoAK2uHKKv8DCDQQABoMNjM3NDIzMTgzODA1Igy79GV8AqhpswgnxLsq3APNwM43ihawL8fDCZ%2BvTMf%2FLmXXZO72S%2FbqpV9umSY%2BMGNWM4A5lwiT7Ys4r69jdVGg%2Bx%2BBhvr00vTfnnttn4dG6I8kscQr%2FhuKZ7p5d3PAKi5dvWnvh5TMpHnO0h2PHYD3hEAjwyElsg7VNDLsB%2FbXqieYvMdrzr0t5I5zIF40%2FGefw8BPv5Gjgp3z0%2BgEOTxUX2A%2BAqrPjUGTeEIE%2BIkDrj3pU4JRhxBSbIov7MsOcjM7kLvnjb5PZyblE%2BSk4LREwIXwXYQaKORLJLBmQCv6YOGFty8PJk0B9LajRqA3UP%2FnL1NvDVBF31yRtRdStIHczZ5g70y0RX6gPxFFvUuPyPQ44XjxAAZEceGDhVCmM4%2BZ2IV6nv0aVS8SThR1fPQOUXIvkw%2FGQE%2BUbzjtfNOwQruCuEcjft8Dha5r4vfUthVN73vR4mq5GGEBbWwhv8KY7eEpxk1ucPOmuwqv6alYaCteBk540NGux4bTGGbi36SyFb1bgCtkbCZjLD6c3sSi2dWhpssbmqQz6tjpdrrwuLfRoystbHwZsMQwFXEiC9iGAXW167WpIzVjaUhD3%2Ft5Lrh9reDZuMPR%2FtUwCd0Xc9Jdb4yTbTevWjddh4ipVjlN%2FZlqSnGS642MdzCtxvPEBjqkAbtVE4HMf3kka6lm9vnI%2FPTd8Em%2BO7834uSbEgoGryeea%2BhjgOKZzTG%2FrM2lzGbu8Z6kguXvIGWuUAE0wPaYAnG6H6YB0XIwLTdfu6ncoHsejURnPDFUAqupECzWDNGLHVyiFSOd4YsZMrGKRXvnJi7%2FrTgw5IMmY1yCbry0aqeLKcAd4yvNnh3OZK%2BrUy9lK9zGe8zCxEeU6WrbdzX0f%2Bbk5Kk%2F&X-Amz-Signature=08158708b34047d41733f53d8ff7926fcfbfebe4221dfc70a82e8053897fb8d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP6YUWEH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNnLTYHMbHOjKJjUo0LOd%2FYS3Fw%2F2R0Kk1OSo6%2BHC%2FbAIhAPch4sv%2ByY92bpCmDVJUVAjvlCcdfWV1STO7ncVGkS2wKv8DCDQQABoMNjM3NDIzMTgzODA1IgzKywGjA%2FVNI94OADkq3AMu6sfySvGQ0h%2Bw4OIvEeGcz4n%2BT2Qf%2BgTuwRB9W%2Bd2exT9VDfGS4ktkYeUIyqB6TyGPW98qLRNQaglpSvfMy4m5PyceP2qYyYcE4jWEsrVut%2B236k4AHvgKAprcQhf7DfZYeeNNqBfNoJAf3QoDoSxZdM%2F3q3p4CCC808InQAgwK1dXZiA%2B9xhiO0pN56SOp0iJYgaa%2BQAhkq3JI7Ya5iQdvObwbrCAcCT1T2U1rRQLWuUQzMVWWijb9wDTfyMYEeTYcnq29gzQ5itKsEKh%2BYCo5bQjD02xjXycj2x9oImJTTQxnA1DfxTskeT9AvV2JvvlHBzEPAj5zShnuJLY%2BOs2e%2BnyTxGsxRYzyrXMsGvvZ81smx2RQvhNDl93fUoqwFXp%2Bpznpsc29o3Ay%2FMA0HJ1EnZFKup%2ByYtRtXNXTAJwn3vucYrfpkj02qD13VE53REUpt9lmHDsKUqDsxSYmF5W0TwViLLVmtoHvsXgfOQeXQ0o3Kh1QRX23I4gJYOvAQhcD8%2B%2F03Xy2OtsLAAvT%2FYlGIR9dwby%2Fn4fN97uyMXi70cPcHGci6fui9rRHmgFy%2BEidVe7FClMdYepZNWUNrBd7%2B9zq4LlKZvjT6BY5MohiriB9Pacow0IBFUdjDGxvPEBjqkAWeTcDC%2BcZcdng80ayCVV2mt4T%2B6B1ZTbi3TzKEV39gyyPBDr83BqkRybVkx3cR1vCgURt5LC2R5%2FK5mEMrk6gWOuovVqNE9YTUPZ1Jpr%2F9VHIXSOJQS%2BkFY1SJy%2FNisOhRAf7mQ6ndljQQiBW9ALRgm1x3hFzBhgjwcjuvsRmw1iB%2BWsN02JK8x%2BhLwJhjVsvl09GGnDN6pKUlHgQP2NW8rLpTE&X-Amz-Signature=2f2cbad52e04827f61b2fd97ce33bc5e25d3b884ef2a1cb6d79b9264ca374cc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIVW3OO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQRnACgurlhXKytFnPoR1VzT9vMlq%2F0s%2FhKACwDBTrZgIhAJoGCs79%2BLFmgu6OxYCtb5tmHDjdJoH97y7iSoAK2uHKKv8DCDQQABoMNjM3NDIzMTgzODA1Igy79GV8AqhpswgnxLsq3APNwM43ihawL8fDCZ%2BvTMf%2FLmXXZO72S%2FbqpV9umSY%2BMGNWM4A5lwiT7Ys4r69jdVGg%2Bx%2BBhvr00vTfnnttn4dG6I8kscQr%2FhuKZ7p5d3PAKi5dvWnvh5TMpHnO0h2PHYD3hEAjwyElsg7VNDLsB%2FbXqieYvMdrzr0t5I5zIF40%2FGefw8BPv5Gjgp3z0%2BgEOTxUX2A%2BAqrPjUGTeEIE%2BIkDrj3pU4JRhxBSbIov7MsOcjM7kLvnjb5PZyblE%2BSk4LREwIXwXYQaKORLJLBmQCv6YOGFty8PJk0B9LajRqA3UP%2FnL1NvDVBF31yRtRdStIHczZ5g70y0RX6gPxFFvUuPyPQ44XjxAAZEceGDhVCmM4%2BZ2IV6nv0aVS8SThR1fPQOUXIvkw%2FGQE%2BUbzjtfNOwQruCuEcjft8Dha5r4vfUthVN73vR4mq5GGEBbWwhv8KY7eEpxk1ucPOmuwqv6alYaCteBk540NGux4bTGGbi36SyFb1bgCtkbCZjLD6c3sSi2dWhpssbmqQz6tjpdrrwuLfRoystbHwZsMQwFXEiC9iGAXW167WpIzVjaUhD3%2Ft5Lrh9reDZuMPR%2FtUwCd0Xc9Jdb4yTbTevWjddh4ipVjlN%2FZlqSnGS642MdzCtxvPEBjqkAbtVE4HMf3kka6lm9vnI%2FPTd8Em%2BO7834uSbEgoGryeea%2BhjgOKZzTG%2FrM2lzGbu8Z6kguXvIGWuUAE0wPaYAnG6H6YB0XIwLTdfu6ncoHsejURnPDFUAqupECzWDNGLHVyiFSOd4YsZMrGKRXvnJi7%2FrTgw5IMmY1yCbry0aqeLKcAd4yvNnh3OZK%2BrUy9lK9zGe8zCxEeU6WrbdzX0f%2Bbk5Kk%2F&X-Amz-Signature=fbaa24e471ee8f62e68079df60c83ba472edce85dfcd675060395a7af9e5261c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3BXLNKM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhzAMwqABbWo7kV3BUa%2Fju5wVX2FaJidBtP9JW%2FKC4nwIgXxK1SCnBNOzwXqw3ts77g1iYSurP2%2Foro8YZKjawonUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMpyrrfNSFRI4r0VgircA061w4kZ8SrMinZyGE85W6lhfQ0FyiOMB3TL%2BYj6qCXwV%2F5LeWgXQ4zda1Wvo0hBUCgGWf3Q4JQyCc56wv8NS83cO5nCyx6zOMvPodpDLOL1BYmqhn3PsjP%2Ff6mJHvITzuWIczCJmrAHe7rUn4dYP6cgtQ8Oty0EZR2b63Fi%2FAOsww2TYJ%2FSYsjolZyk1UQ6%2Fu3neTDURUnoFfVrq7K3kCCHuCRQazpb2nBXvvZZwSyLA5VpPGLcttUUmg80mVVFRa1cH30HnE1tBwvlGzNvriIBef1vgpIJF2X50eUCLkGs2%2B06O%2FlTG10D9D3a%2FmuGF0COATKp65aRd%2FJ7axeQb%2FR%2BaX734X5L4QOja56iGOIpeGzdWyO65CPujoZfTecu%2BEOsRH2J1ZfIHM0YnELbgo7A4bAPRt%2FZekzvO9tWP%2FohYo0QNntk%2Fxs0HOfWyozITdEGjfN%2FxCz3%2FYu%2FEgKLppE9IEIeJUx9waq2Kg1rvlxgZj%2FRPLaZ4PCIEoUm7NGDB4csNAqumzfOc%2FhaTsoZKMudutBVz%2BgYD%2FaS1tk34mZX9Z7yhtRvMWlm4ZLecubUgCetMvJYjAxVReyT0OpPwwzebm8W8lOYxJSR6Wq6J8W%2F%2FC%2BlVlugnV2rt4s5MOrF88QGOqUBbI96%2FP8p14VDvFIq4Xb7T7RW6UuKGKpeuO3ibngFyXdzB0sRL79DLqGmbTOaVEsuPyjx4fg7OOQBw3pzYfcoUfN3B2%2B93npG69x8tV5Iwwyk1V4BkVa%2FC5NNtfElqRm6EygAlWWJY8yeqK5sCaTGk%2Bt7FtBrFRLlrMsSAcCPALpSeiKeQvHrNdxyVQpoIz3bXI%2FT9XJfzza9f5kr%2BVXF%2B0jUpXtr&X-Amz-Signature=e69854caf7a7fe444ada109464dfd7f8aef5a7d5c3aec9f77791e014353c75a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC4Q6XFG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2rI0LKwn1jfwrHem2%2FxOQISChvYjdRy8z0D41i4GqJQIhAPiacN6Pnht3VCWaqRFz5%2BgzcF0MQtkL4GOSjJL6ts69Kv8DCDQQABoMNjM3NDIzMTgzODA1IgxsU3jBJF0HVqNQWZcq3APr1Z%2BWuYa4MCBdw1OePHwoi%2BnKQMlFAnD38bSO0tgZ7JBmU1s9TXojX2TAmdlETCw8HERO1%2FDcfLUD8%2B3az%2FZv2oBmpyPXL3YjFWym%2BlHV%2F5pzVbykNpN3AS8WKim3uDxUVxToi2a%2FeNNHNYMA8RllSM3gL6bN05pk3La7HMgfTjwokJmWsI4%2FlmpLpKRIRhsElnA8QKHoQfJVDb%2BpwxFKxvhVUS1AcxV5JZRTtIFtyOeFwQm5IzmK6315hrSaFAiRTngehfiFjf7lIr%2FGPVrJOYkwAfAj9Y%2Bnh%2FFkz71JPt1IrHSH3WoBSeVP2FPbxfneUMMFcNBOzBn1bDuhw292%2F5k0wLzrFOJg%2BBlrcw8PwU3dHIzd8e%2FejopHG%2BjYws9R9ZSw8Yiffb7V14zSWliuFm7KdFcVFCFq96qzlFYYUEDXd2LA95OjvnPUl1Hp26d61w0GZwUMLQFzMFLSemCYKvGiKJ%2B1R%2FcgacrpKAfvG8DbvMgDVf3y4sCW%2Bz7UtxKaPIoarUmTnog7qPuGAUNOwhGKx9jiLUz0ynnkYn8P%2Fx8mW3Xe7foCPvQx5CxImlAdHPWWWXd4Z2ojxaWp7BuEmapDenzMqeNr3N%2B7%2FTlbxZ3vDlTxuyqPK52NQzDnxfPEBjqkAQRMhp6LxZLA8cNxK8nD0JCDaolBVZY0K1Hxf0nRZOdXyYNXISqP7hIcjDeTqh1vYM3njI6p9rQDOZhhya4Qxc2bkblpvstd7527wOE7CvACG%2F6oBJT6y3gWIA9Hna2hLj9Wj9ILdXZJgcgrNoNeHxCnmW4mSM5lGmEYdKk4Lqbr27f5OkmaK7hy6nGMsCo7Bc2PA5AgRI5s5oeGF1w0kCTgKBEi&X-Amz-Signature=5c9fd902ac4133d270f94cfc2cb7cd76a95609899f62265a3628faa3a9fb0af8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXBKCFW3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyKCHOUkFtd9OmzL2wJhBsDGfPJxzG5lHZJzLzzlK7TQIgW4EhMDVXgvlhuzwklnEIXzeaCK7OuKqo6uV9%2B0kV4tQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCHD9o9rDwCy7T171ircA9xNqiFQQDtqZHSvNtcnIC7gYy9PpTtk86iywUNTF%2FHCUVtDaKUV9%2BH8wWi%2BJEgeymFb96BJEAH%2FV0zI3CDGH8WD1BAc0L3vfNFhCKYLytX0P1InopP66djMkd1phGDT4lrquSapufn7yFc4pQF4OH463kWhB%2F4mEWG1o%2BrNJzOtYuqxu7JkPpgSd6r2%2FJd7%2F0rwbMY0X7UaCrYH1d%2BTZ1DrFWynnYzZPRpB%2BbRJZ9HYcmGqqe4wA%2FBs6Tj9dbpyV3Q3jezlv1Pj8OTot%2B5Qup2hsPc3pu3qoG%2F9dRiyLejon4skiGEbOVQ%2Fl%2F2wA4VizeGAv7AcwmLxQq7vBf48314YWsfWsZD9VfquyoSlsPxInRbnHeWctesPBoW44khUxNK5ervXi4yRojRpJrqItGr1Mr0tKlnzl%2BNdLPO4RdAV07QQbnXe%2Bj0m7oT1n%2BVUCDr7KJMGUGoz6RruY6f5b3rBGcfua1y3GjLf90HaUsTSI0M9K6Y4umgb8Z8sOlvPaXXNf0YaUFgnpU7dsoxN%2FnUXGTxENEsIpTvm5K6Nf23V3%2FdZ5vjrGT%2FONFgBZ8ioKvHxqSwR97%2F2fjONyohy9WDjzcWqyjcgUb49m6B0gTifIClfAxBEPh9clklSMOzF88QGOqUBqjF0WCin%2FMc%2FV4ZxJm%2F%2BkFBkijEH5jo4r7RA2dWe9Ci%2FJSCddDLzXL%2BjSgQAPd5WkLZgNJlwRT68xD3q9pYTrpGxlBsFEnvfrMpQVmpBDX0aYwWLno7D6QYv%2BqRsOVJm%2Fh7H4bqOLBg5tChDeAYHEINoghZWgRXeFnuis3skp7HKycHn05JEXigp4laWE8yANcBm1F6lRZzKtLFa9Nf7PuYFFgSV&X-Amz-Signature=b4221b0edc3d9bd8b31db86a604f2f8d8073c4403508af5803f123db3321d64f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KYUDUOQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BsQ77Um%2FYsvbQVIrVYdFFNXNPPrypPR%2BjBXWBP0NFmAiBsy32zJB5wu%2BKGFSglCinaynQa2ZNOmKd02OXjHRCKwyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMPtebratv7AExqHH3KtwD4jXTc0FQSluqHVlAp2zGHwAShOn5%2Bdq9EvkC%2Fbg040hHmmPaIxVnpA5CDdoblP%2BJ%2BLJMEQ1Poo9eOHzjQFr%2Ft%2FjJ4%2Bx5Bo6s8BnzBk6q4f3Yl1SjeKp5gHZZ0J51WRmmlonIjBwebBvzMiW%2BkcQG2OpDEwkC8GtSJYf1bxTZ01PHI%2BO6aku%2BEQ3muNXSuwgQO1IC5sKpGl2MBuWtKVKE8sWJHyWz33yJPNWskOpZWPChfm%2BA0ZPEhvcWfecEsEijIesjlEWWHl%2BkYf7Lnyg5BXq7Temq586yaHJXzNqVzlKjLiFVqYBoZAomnqx2eHalj61gTer6CBHVKueJ3q1bxZLzPNI2%2FCt9AD2mD6jO54KoRVZ7KCgs8AhjU%2Fpw6ZS9%2B5Aqdfit8C68z6ebUQKC4nHoaCowqiIq5fOwpIOUyXOI5Vl8916CPll7%2BpBahdyKunqsdzycedkeucTgtRFHToAXLURrCBmnC%2F02ge8fSDtEFlTCrMOff9poIqq3mF6yhAhMftPN0Cy%2F5MTuXmhz6Cmw9IabyoHwdYEteM5HkDD1UuRTGzt2NE640ZZ5IHHFDefqufm9Qns3MDLr0XYhuq0G7SiieBr8pzRxGSJecBGqckDW26xQBVE9dDQw88XzxAY6pgFLe1THUgGIA9JAYLQiQ%2F1NPd4aVHl2WgTcQLhKtpm2XAm4JhtUDJLOcv5SMaRw48WMOYA0NR4l2LuLKlWPvwbD%2FzCETz0daItPqqd1CwDDVSM1OqGDgwaCS9rkuLO1aS0A933othIKx1Jy1EJoH4iXJD8o2vkmck2gifaNbbnjYLUSJdSmH76833n964GlQ6V8yWIgYS11vZ%2FP7AVINr58H6FbDXgB&X-Amz-Signature=e9e7dba78c1fb379173f20faaaaf5a2b4f91e5be676871982b6c6c71bbc5c2d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTJMQTGB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsaM4sx%2FPCq0uDn5ZJvRWnADn7OfzKhBX2acz1I75zOQIgZ91R37jANbNXS8s5VRJv3OL2LIB85cqNydzH51ZmNKkq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDEMHwIugv%2FXO%2FMdP2yrcA4MGhOmWX4y%2BdWc3dNZUk7ce1%2BKvX%2BctqJ%2F2gejmc2Oqyj0AbmvLXocwHiKzErhMK4mpTJkeGE9sNMmS9YS%2FsnVT70E23ie8jvTYuh6FSeZMh4F66JvWlZkClQSbHuaZlwZ8oqvpodHplNLC%2F8HnLTSTlfdOwyaalk%2FdUN2P%2FcEsU5qrDOkkC%2FW9km5E3xBetZMjW5r7j6qi3XwesOdJ7TyVbldj1mDo7Pjj9436mBETiNmD3uc7YMJnlAMbJEviR08XEjE1MWPT6LkH683I%2BE2o%2B3TnFSuwonZXnt%2BqE6%2FOM7hI6rAHMBt5SGN%2BS4Y%2B1QHeRDlCD6jRS1qQQuDWIILJYbUj4IVC0DeBkzBiFYdill%2FXB9e23EVa5ARiV99fL3jE6PvYCQEiKzoKLxrBE1hjur8z3u1FaHB75t7fjgYuLY1nK893ejmu6f0uj60gekWJsxFJ6ZiJtE7G3vuOv69lq6YThtezV8sqDEpejNJVOrVUI2C6DX9DChOcieGxr7AIFH0hZ4fOEtyEms1wVj6ltK4tW8BJsa0xmlGvtRUVG04TplET6nJkAJr%2BsIPYhpG9A2YfpCxroMA%2Bx5x5gAtr3X7X8NfiWhsngjTKBAYl5VJHEYgfYcHKc%2BFhMOXF88QGOqUBgFZZa17z3s0H9YFA6gNZT9bhH%2B7Qz3Q6ZQ%2BCfMVdJ7Ois3VzaAYcXXhogt1ANh6NnYrhLcKVV9ObikRhO0SZQ1R%2BKvTZHsoZX1kyDopFY0%2B%2BLiDQsV40i%2Bt4uN0lbkZw1HluAOnX1l%2BeNiec54dSNQyKNG0%2FGluu%2FkEjxOVxcuyImBAMLrbn%2FLYjhYfWPhVfJLrjwCUhsBQuszOOIfDMaHlGz0FB&X-Amz-Signature=8ae4314c515467244b46470997b08a8b9736765d105d1f10cccf2aceb3c5a220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIVW3OO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQRnACgurlhXKytFnPoR1VzT9vMlq%2F0s%2FhKACwDBTrZgIhAJoGCs79%2BLFmgu6OxYCtb5tmHDjdJoH97y7iSoAK2uHKKv8DCDQQABoMNjM3NDIzMTgzODA1Igy79GV8AqhpswgnxLsq3APNwM43ihawL8fDCZ%2BvTMf%2FLmXXZO72S%2FbqpV9umSY%2BMGNWM4A5lwiT7Ys4r69jdVGg%2Bx%2BBhvr00vTfnnttn4dG6I8kscQr%2FhuKZ7p5d3PAKi5dvWnvh5TMpHnO0h2PHYD3hEAjwyElsg7VNDLsB%2FbXqieYvMdrzr0t5I5zIF40%2FGefw8BPv5Gjgp3z0%2BgEOTxUX2A%2BAqrPjUGTeEIE%2BIkDrj3pU4JRhxBSbIov7MsOcjM7kLvnjb5PZyblE%2BSk4LREwIXwXYQaKORLJLBmQCv6YOGFty8PJk0B9LajRqA3UP%2FnL1NvDVBF31yRtRdStIHczZ5g70y0RX6gPxFFvUuPyPQ44XjxAAZEceGDhVCmM4%2BZ2IV6nv0aVS8SThR1fPQOUXIvkw%2FGQE%2BUbzjtfNOwQruCuEcjft8Dha5r4vfUthVN73vR4mq5GGEBbWwhv8KY7eEpxk1ucPOmuwqv6alYaCteBk540NGux4bTGGbi36SyFb1bgCtkbCZjLD6c3sSi2dWhpssbmqQz6tjpdrrwuLfRoystbHwZsMQwFXEiC9iGAXW167WpIzVjaUhD3%2Ft5Lrh9reDZuMPR%2FtUwCd0Xc9Jdb4yTbTevWjddh4ipVjlN%2FZlqSnGS642MdzCtxvPEBjqkAbtVE4HMf3kka6lm9vnI%2FPTd8Em%2BO7834uSbEgoGryeea%2BhjgOKZzTG%2FrM2lzGbu8Z6kguXvIGWuUAE0wPaYAnG6H6YB0XIwLTdfu6ncoHsejURnPDFUAqupECzWDNGLHVyiFSOd4YsZMrGKRXvnJi7%2FrTgw5IMmY1yCbry0aqeLKcAd4yvNnh3OZK%2BrUy9lK9zGe8zCxEeU6WrbdzX0f%2Bbk5Kk%2F&X-Amz-Signature=5c3c24e7740c19a5b550f188b77709f50a9d2b61bfe7c70a2f15c2f1399fd25d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIVW3OO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQRnACgurlhXKytFnPoR1VzT9vMlq%2F0s%2FhKACwDBTrZgIhAJoGCs79%2BLFmgu6OxYCtb5tmHDjdJoH97y7iSoAK2uHKKv8DCDQQABoMNjM3NDIzMTgzODA1Igy79GV8AqhpswgnxLsq3APNwM43ihawL8fDCZ%2BvTMf%2FLmXXZO72S%2FbqpV9umSY%2BMGNWM4A5lwiT7Ys4r69jdVGg%2Bx%2BBhvr00vTfnnttn4dG6I8kscQr%2FhuKZ7p5d3PAKi5dvWnvh5TMpHnO0h2PHYD3hEAjwyElsg7VNDLsB%2FbXqieYvMdrzr0t5I5zIF40%2FGefw8BPv5Gjgp3z0%2BgEOTxUX2A%2BAqrPjUGTeEIE%2BIkDrj3pU4JRhxBSbIov7MsOcjM7kLvnjb5PZyblE%2BSk4LREwIXwXYQaKORLJLBmQCv6YOGFty8PJk0B9LajRqA3UP%2FnL1NvDVBF31yRtRdStIHczZ5g70y0RX6gPxFFvUuPyPQ44XjxAAZEceGDhVCmM4%2BZ2IV6nv0aVS8SThR1fPQOUXIvkw%2FGQE%2BUbzjtfNOwQruCuEcjft8Dha5r4vfUthVN73vR4mq5GGEBbWwhv8KY7eEpxk1ucPOmuwqv6alYaCteBk540NGux4bTGGbi36SyFb1bgCtkbCZjLD6c3sSi2dWhpssbmqQz6tjpdrrwuLfRoystbHwZsMQwFXEiC9iGAXW167WpIzVjaUhD3%2Ft5Lrh9reDZuMPR%2FtUwCd0Xc9Jdb4yTbTevWjddh4ipVjlN%2FZlqSnGS642MdzCtxvPEBjqkAbtVE4HMf3kka6lm9vnI%2FPTd8Em%2BO7834uSbEgoGryeea%2BhjgOKZzTG%2FrM2lzGbu8Z6kguXvIGWuUAE0wPaYAnG6H6YB0XIwLTdfu6ncoHsejURnPDFUAqupECzWDNGLHVyiFSOd4YsZMrGKRXvnJi7%2FrTgw5IMmY1yCbry0aqeLKcAd4yvNnh3OZK%2BrUy9lK9zGe8zCxEeU6WrbdzX0f%2Bbk5Kk%2F&X-Amz-Signature=e81d6dd8d31acef57f12e06cc947078be0f858472c63fe58f5903fb44a4735f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662WHW4R4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8mrgrxaRStx513RxazoMsoJUkBWimdK3vH0Ir%2FICjvAiAwbES4tD3BGwbUcJQc%2FRaY0h7mWXQNuuyA7TWyorjx8yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM4%2B7mAk%2BKQL0AzBdyKtwD9aduHNMRffmgSG1t%2BqnhfRubO3qwV1qfcWC2CA5xY4hly%2Fjln1j49qX15lWQGi5k%2Bn5ivIN8D1qkRsuxPE0t3QN0o7csuNGJwS7Vz1n6irzvCGVDL9L8Gmyra8V7bb%2F7YREAaXFkJuiXoKxYlJbttnem3Q%2FcjL4RSpbpHNw8ijvLYJuShVfo5ZiGEfHk1l5PPhdxFZhm%2BKWOht3DsKW2FOAX3bQ6bq9kqhszDaO8mJILNpfbPqIYHfG0ShXpd7sVsKNZHwcrhtF5DHzxYpDuYCjL4aHosv1QoUmhmRtCdX5Mi2tkMYeJFnWnZZjXjQ1VpnHDwaZNWTu98ytOpu5b3LR3UAnkMVcygo0lKCqSUz5HMWxWTqIyZcAfbxJ1tm3nKIr5cKjGv6Wh1VdAFBZnS1Kc92pkQgq6qujqDwK665Qa4IzzDv6T8yMmPaOJFODfYEmhziY2Uc%2BbzIW323bieFhTI%2B8QoAzF6%2FwyDgCJtvralbuKnHLqssafyCbadvof6XFLBvBSqX1MmnvIx54v0OrYa4qCBpf8BarXIrVuDKVo7lmCy6Mt%2F4AZy9cnFJB5RjW11Jzy0XB0PLH5XoI9g9RIolSo%2FEbAsPOIDSz0XYFlDjeUSdpT8oP4AvUw9sXzxAY6pgG26z%2B2WjjWNFbL9LeeobUl8G9B6Y2dqJcBQMCg5uPIQvIdqAEg2GSfsws4TcUN%2FlOX65Hw90ux%2FEa45B2VEuXmDzReyElEljMtUoeNAaIgmvdkV5Uv9PqETyyp0p8M1jQFM1Y6ogTmHqd7XkaLkg11bXcy3dZX3VEC2EFrGOolp6lqxR0ewLDZw1l7xVIVZPTXCsiNHpVphwWgMC%2BHSJx3RN0E39Bw&X-Amz-Signature=d744121173bb2d264fb36ebc133a15040d4261dde9f15bc68b5cde4bc3ee7f55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662WHW4R4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8mrgrxaRStx513RxazoMsoJUkBWimdK3vH0Ir%2FICjvAiAwbES4tD3BGwbUcJQc%2FRaY0h7mWXQNuuyA7TWyorjx8yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM4%2B7mAk%2BKQL0AzBdyKtwD9aduHNMRffmgSG1t%2BqnhfRubO3qwV1qfcWC2CA5xY4hly%2Fjln1j49qX15lWQGi5k%2Bn5ivIN8D1qkRsuxPE0t3QN0o7csuNGJwS7Vz1n6irzvCGVDL9L8Gmyra8V7bb%2F7YREAaXFkJuiXoKxYlJbttnem3Q%2FcjL4RSpbpHNw8ijvLYJuShVfo5ZiGEfHk1l5PPhdxFZhm%2BKWOht3DsKW2FOAX3bQ6bq9kqhszDaO8mJILNpfbPqIYHfG0ShXpd7sVsKNZHwcrhtF5DHzxYpDuYCjL4aHosv1QoUmhmRtCdX5Mi2tkMYeJFnWnZZjXjQ1VpnHDwaZNWTu98ytOpu5b3LR3UAnkMVcygo0lKCqSUz5HMWxWTqIyZcAfbxJ1tm3nKIr5cKjGv6Wh1VdAFBZnS1Kc92pkQgq6qujqDwK665Qa4IzzDv6T8yMmPaOJFODfYEmhziY2Uc%2BbzIW323bieFhTI%2B8QoAzF6%2FwyDgCJtvralbuKnHLqssafyCbadvof6XFLBvBSqX1MmnvIx54v0OrYa4qCBpf8BarXIrVuDKVo7lmCy6Mt%2F4AZy9cnFJB5RjW11Jzy0XB0PLH5XoI9g9RIolSo%2FEbAsPOIDSz0XYFlDjeUSdpT8oP4AvUw9sXzxAY6pgG26z%2B2WjjWNFbL9LeeobUl8G9B6Y2dqJcBQMCg5uPIQvIdqAEg2GSfsws4TcUN%2FlOX65Hw90ux%2FEa45B2VEuXmDzReyElEljMtUoeNAaIgmvdkV5Uv9PqETyyp0p8M1jQFM1Y6ogTmHqd7XkaLkg11bXcy3dZX3VEC2EFrGOolp6lqxR0ewLDZw1l7xVIVZPTXCsiNHpVphwWgMC%2BHSJx3RN0E39Bw&X-Amz-Signature=53990efdfd6a457d1b9449cd78cdab3a0e94cc6c14144b6599340ba4895a00b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662WHW4R4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8mrgrxaRStx513RxazoMsoJUkBWimdK3vH0Ir%2FICjvAiAwbES4tD3BGwbUcJQc%2FRaY0h7mWXQNuuyA7TWyorjx8yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM4%2B7mAk%2BKQL0AzBdyKtwD9aduHNMRffmgSG1t%2BqnhfRubO3qwV1qfcWC2CA5xY4hly%2Fjln1j49qX15lWQGi5k%2Bn5ivIN8D1qkRsuxPE0t3QN0o7csuNGJwS7Vz1n6irzvCGVDL9L8Gmyra8V7bb%2F7YREAaXFkJuiXoKxYlJbttnem3Q%2FcjL4RSpbpHNw8ijvLYJuShVfo5ZiGEfHk1l5PPhdxFZhm%2BKWOht3DsKW2FOAX3bQ6bq9kqhszDaO8mJILNpfbPqIYHfG0ShXpd7sVsKNZHwcrhtF5DHzxYpDuYCjL4aHosv1QoUmhmRtCdX5Mi2tkMYeJFnWnZZjXjQ1VpnHDwaZNWTu98ytOpu5b3LR3UAnkMVcygo0lKCqSUz5HMWxWTqIyZcAfbxJ1tm3nKIr5cKjGv6Wh1VdAFBZnS1Kc92pkQgq6qujqDwK665Qa4IzzDv6T8yMmPaOJFODfYEmhziY2Uc%2BbzIW323bieFhTI%2B8QoAzF6%2FwyDgCJtvralbuKnHLqssafyCbadvof6XFLBvBSqX1MmnvIx54v0OrYa4qCBpf8BarXIrVuDKVo7lmCy6Mt%2F4AZy9cnFJB5RjW11Jzy0XB0PLH5XoI9g9RIolSo%2FEbAsPOIDSz0XYFlDjeUSdpT8oP4AvUw9sXzxAY6pgG26z%2B2WjjWNFbL9LeeobUl8G9B6Y2dqJcBQMCg5uPIQvIdqAEg2GSfsws4TcUN%2FlOX65Hw90ux%2FEa45B2VEuXmDzReyElEljMtUoeNAaIgmvdkV5Uv9PqETyyp0p8M1jQFM1Y6ogTmHqd7XkaLkg11bXcy3dZX3VEC2EFrGOolp6lqxR0ewLDZw1l7xVIVZPTXCsiNHpVphwWgMC%2BHSJx3RN0E39Bw&X-Amz-Signature=44394c5abdce8765d4ff4d2fefff420d5ee4e04d02a18d38d27ff9dbf4e94bc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662WHW4R4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8mrgrxaRStx513RxazoMsoJUkBWimdK3vH0Ir%2FICjvAiAwbES4tD3BGwbUcJQc%2FRaY0h7mWXQNuuyA7TWyorjx8yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM4%2B7mAk%2BKQL0AzBdyKtwD9aduHNMRffmgSG1t%2BqnhfRubO3qwV1qfcWC2CA5xY4hly%2Fjln1j49qX15lWQGi5k%2Bn5ivIN8D1qkRsuxPE0t3QN0o7csuNGJwS7Vz1n6irzvCGVDL9L8Gmyra8V7bb%2F7YREAaXFkJuiXoKxYlJbttnem3Q%2FcjL4RSpbpHNw8ijvLYJuShVfo5ZiGEfHk1l5PPhdxFZhm%2BKWOht3DsKW2FOAX3bQ6bq9kqhszDaO8mJILNpfbPqIYHfG0ShXpd7sVsKNZHwcrhtF5DHzxYpDuYCjL4aHosv1QoUmhmRtCdX5Mi2tkMYeJFnWnZZjXjQ1VpnHDwaZNWTu98ytOpu5b3LR3UAnkMVcygo0lKCqSUz5HMWxWTqIyZcAfbxJ1tm3nKIr5cKjGv6Wh1VdAFBZnS1Kc92pkQgq6qujqDwK665Qa4IzzDv6T8yMmPaOJFODfYEmhziY2Uc%2BbzIW323bieFhTI%2B8QoAzF6%2FwyDgCJtvralbuKnHLqssafyCbadvof6XFLBvBSqX1MmnvIx54v0OrYa4qCBpf8BarXIrVuDKVo7lmCy6Mt%2F4AZy9cnFJB5RjW11Jzy0XB0PLH5XoI9g9RIolSo%2FEbAsPOIDSz0XYFlDjeUSdpT8oP4AvUw9sXzxAY6pgG26z%2B2WjjWNFbL9LeeobUl8G9B6Y2dqJcBQMCg5uPIQvIdqAEg2GSfsws4TcUN%2FlOX65Hw90ux%2FEa45B2VEuXmDzReyElEljMtUoeNAaIgmvdkV5Uv9PqETyyp0p8M1jQFM1Y6ogTmHqd7XkaLkg11bXcy3dZX3VEC2EFrGOolp6lqxR0ewLDZw1l7xVIVZPTXCsiNHpVphwWgMC%2BHSJx3RN0E39Bw&X-Amz-Signature=6714853b680401eb5528c312b0011fada3322063dbf20df4abe873c167f33226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662WHW4R4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8mrgrxaRStx513RxazoMsoJUkBWimdK3vH0Ir%2FICjvAiAwbES4tD3BGwbUcJQc%2FRaY0h7mWXQNuuyA7TWyorjx8yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM4%2B7mAk%2BKQL0AzBdyKtwD9aduHNMRffmgSG1t%2BqnhfRubO3qwV1qfcWC2CA5xY4hly%2Fjln1j49qX15lWQGi5k%2Bn5ivIN8D1qkRsuxPE0t3QN0o7csuNGJwS7Vz1n6irzvCGVDL9L8Gmyra8V7bb%2F7YREAaXFkJuiXoKxYlJbttnem3Q%2FcjL4RSpbpHNw8ijvLYJuShVfo5ZiGEfHk1l5PPhdxFZhm%2BKWOht3DsKW2FOAX3bQ6bq9kqhszDaO8mJILNpfbPqIYHfG0ShXpd7sVsKNZHwcrhtF5DHzxYpDuYCjL4aHosv1QoUmhmRtCdX5Mi2tkMYeJFnWnZZjXjQ1VpnHDwaZNWTu98ytOpu5b3LR3UAnkMVcygo0lKCqSUz5HMWxWTqIyZcAfbxJ1tm3nKIr5cKjGv6Wh1VdAFBZnS1Kc92pkQgq6qujqDwK665Qa4IzzDv6T8yMmPaOJFODfYEmhziY2Uc%2BbzIW323bieFhTI%2B8QoAzF6%2FwyDgCJtvralbuKnHLqssafyCbadvof6XFLBvBSqX1MmnvIx54v0OrYa4qCBpf8BarXIrVuDKVo7lmCy6Mt%2F4AZy9cnFJB5RjW11Jzy0XB0PLH5XoI9g9RIolSo%2FEbAsPOIDSz0XYFlDjeUSdpT8oP4AvUw9sXzxAY6pgG26z%2B2WjjWNFbL9LeeobUl8G9B6Y2dqJcBQMCg5uPIQvIdqAEg2GSfsws4TcUN%2FlOX65Hw90ux%2FEa45B2VEuXmDzReyElEljMtUoeNAaIgmvdkV5Uv9PqETyyp0p8M1jQFM1Y6ogTmHqd7XkaLkg11bXcy3dZX3VEC2EFrGOolp6lqxR0ewLDZw1l7xVIVZPTXCsiNHpVphwWgMC%2BHSJx3RN0E39Bw&X-Amz-Signature=2f9eab86fec59c274a596c131d693da6bbd8c03b8f1225fe2f71e5cf12bf7be7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662WHW4R4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8mrgrxaRStx513RxazoMsoJUkBWimdK3vH0Ir%2FICjvAiAwbES4tD3BGwbUcJQc%2FRaY0h7mWXQNuuyA7TWyorjx8yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM4%2B7mAk%2BKQL0AzBdyKtwD9aduHNMRffmgSG1t%2BqnhfRubO3qwV1qfcWC2CA5xY4hly%2Fjln1j49qX15lWQGi5k%2Bn5ivIN8D1qkRsuxPE0t3QN0o7csuNGJwS7Vz1n6irzvCGVDL9L8Gmyra8V7bb%2F7YREAaXFkJuiXoKxYlJbttnem3Q%2FcjL4RSpbpHNw8ijvLYJuShVfo5ZiGEfHk1l5PPhdxFZhm%2BKWOht3DsKW2FOAX3bQ6bq9kqhszDaO8mJILNpfbPqIYHfG0ShXpd7sVsKNZHwcrhtF5DHzxYpDuYCjL4aHosv1QoUmhmRtCdX5Mi2tkMYeJFnWnZZjXjQ1VpnHDwaZNWTu98ytOpu5b3LR3UAnkMVcygo0lKCqSUz5HMWxWTqIyZcAfbxJ1tm3nKIr5cKjGv6Wh1VdAFBZnS1Kc92pkQgq6qujqDwK665Qa4IzzDv6T8yMmPaOJFODfYEmhziY2Uc%2BbzIW323bieFhTI%2B8QoAzF6%2FwyDgCJtvralbuKnHLqssafyCbadvof6XFLBvBSqX1MmnvIx54v0OrYa4qCBpf8BarXIrVuDKVo7lmCy6Mt%2F4AZy9cnFJB5RjW11Jzy0XB0PLH5XoI9g9RIolSo%2FEbAsPOIDSz0XYFlDjeUSdpT8oP4AvUw9sXzxAY6pgG26z%2B2WjjWNFbL9LeeobUl8G9B6Y2dqJcBQMCg5uPIQvIdqAEg2GSfsws4TcUN%2FlOX65Hw90ux%2FEa45B2VEuXmDzReyElEljMtUoeNAaIgmvdkV5Uv9PqETyyp0p8M1jQFM1Y6ogTmHqd7XkaLkg11bXcy3dZX3VEC2EFrGOolp6lqxR0ewLDZw1l7xVIVZPTXCsiNHpVphwWgMC%2BHSJx3RN0E39Bw&X-Amz-Signature=4a6da7b589ab27b9b7a3846e655a591814a513a023f706b1e859a9edd6769e1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662WHW4R4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8mrgrxaRStx513RxazoMsoJUkBWimdK3vH0Ir%2FICjvAiAwbES4tD3BGwbUcJQc%2FRaY0h7mWXQNuuyA7TWyorjx8yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM4%2B7mAk%2BKQL0AzBdyKtwD9aduHNMRffmgSG1t%2BqnhfRubO3qwV1qfcWC2CA5xY4hly%2Fjln1j49qX15lWQGi5k%2Bn5ivIN8D1qkRsuxPE0t3QN0o7csuNGJwS7Vz1n6irzvCGVDL9L8Gmyra8V7bb%2F7YREAaXFkJuiXoKxYlJbttnem3Q%2FcjL4RSpbpHNw8ijvLYJuShVfo5ZiGEfHk1l5PPhdxFZhm%2BKWOht3DsKW2FOAX3bQ6bq9kqhszDaO8mJILNpfbPqIYHfG0ShXpd7sVsKNZHwcrhtF5DHzxYpDuYCjL4aHosv1QoUmhmRtCdX5Mi2tkMYeJFnWnZZjXjQ1VpnHDwaZNWTu98ytOpu5b3LR3UAnkMVcygo0lKCqSUz5HMWxWTqIyZcAfbxJ1tm3nKIr5cKjGv6Wh1VdAFBZnS1Kc92pkQgq6qujqDwK665Qa4IzzDv6T8yMmPaOJFODfYEmhziY2Uc%2BbzIW323bieFhTI%2B8QoAzF6%2FwyDgCJtvralbuKnHLqssafyCbadvof6XFLBvBSqX1MmnvIx54v0OrYa4qCBpf8BarXIrVuDKVo7lmCy6Mt%2F4AZy9cnFJB5RjW11Jzy0XB0PLH5XoI9g9RIolSo%2FEbAsPOIDSz0XYFlDjeUSdpT8oP4AvUw9sXzxAY6pgG26z%2B2WjjWNFbL9LeeobUl8G9B6Y2dqJcBQMCg5uPIQvIdqAEg2GSfsws4TcUN%2FlOX65Hw90ux%2FEa45B2VEuXmDzReyElEljMtUoeNAaIgmvdkV5Uv9PqETyyp0p8M1jQFM1Y6ogTmHqd7XkaLkg11bXcy3dZX3VEC2EFrGOolp6lqxR0ewLDZw1l7xVIVZPTXCsiNHpVphwWgMC%2BHSJx3RN0E39Bw&X-Amz-Signature=9ae6824bee447fd51bdc5e0eb3cf5e6f1aff3cda29b47d140323a9fc0438d110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662WHW4R4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8mrgrxaRStx513RxazoMsoJUkBWimdK3vH0Ir%2FICjvAiAwbES4tD3BGwbUcJQc%2FRaY0h7mWXQNuuyA7TWyorjx8yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM4%2B7mAk%2BKQL0AzBdyKtwD9aduHNMRffmgSG1t%2BqnhfRubO3qwV1qfcWC2CA5xY4hly%2Fjln1j49qX15lWQGi5k%2Bn5ivIN8D1qkRsuxPE0t3QN0o7csuNGJwS7Vz1n6irzvCGVDL9L8Gmyra8V7bb%2F7YREAaXFkJuiXoKxYlJbttnem3Q%2FcjL4RSpbpHNw8ijvLYJuShVfo5ZiGEfHk1l5PPhdxFZhm%2BKWOht3DsKW2FOAX3bQ6bq9kqhszDaO8mJILNpfbPqIYHfG0ShXpd7sVsKNZHwcrhtF5DHzxYpDuYCjL4aHosv1QoUmhmRtCdX5Mi2tkMYeJFnWnZZjXjQ1VpnHDwaZNWTu98ytOpu5b3LR3UAnkMVcygo0lKCqSUz5HMWxWTqIyZcAfbxJ1tm3nKIr5cKjGv6Wh1VdAFBZnS1Kc92pkQgq6qujqDwK665Qa4IzzDv6T8yMmPaOJFODfYEmhziY2Uc%2BbzIW323bieFhTI%2B8QoAzF6%2FwyDgCJtvralbuKnHLqssafyCbadvof6XFLBvBSqX1MmnvIx54v0OrYa4qCBpf8BarXIrVuDKVo7lmCy6Mt%2F4AZy9cnFJB5RjW11Jzy0XB0PLH5XoI9g9RIolSo%2FEbAsPOIDSz0XYFlDjeUSdpT8oP4AvUw9sXzxAY6pgG26z%2B2WjjWNFbL9LeeobUl8G9B6Y2dqJcBQMCg5uPIQvIdqAEg2GSfsws4TcUN%2FlOX65Hw90ux%2FEa45B2VEuXmDzReyElEljMtUoeNAaIgmvdkV5Uv9PqETyyp0p8M1jQFM1Y6ogTmHqd7XkaLkg11bXcy3dZX3VEC2EFrGOolp6lqxR0ewLDZw1l7xVIVZPTXCsiNHpVphwWgMC%2BHSJx3RN0E39Bw&X-Amz-Signature=f78dd3f3ba1c245930764088716d15300c22f3d85e07784d6ac075e8e201fe77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662WHW4R4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8mrgrxaRStx513RxazoMsoJUkBWimdK3vH0Ir%2FICjvAiAwbES4tD3BGwbUcJQc%2FRaY0h7mWXQNuuyA7TWyorjx8yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM4%2B7mAk%2BKQL0AzBdyKtwD9aduHNMRffmgSG1t%2BqnhfRubO3qwV1qfcWC2CA5xY4hly%2Fjln1j49qX15lWQGi5k%2Bn5ivIN8D1qkRsuxPE0t3QN0o7csuNGJwS7Vz1n6irzvCGVDL9L8Gmyra8V7bb%2F7YREAaXFkJuiXoKxYlJbttnem3Q%2FcjL4RSpbpHNw8ijvLYJuShVfo5ZiGEfHk1l5PPhdxFZhm%2BKWOht3DsKW2FOAX3bQ6bq9kqhszDaO8mJILNpfbPqIYHfG0ShXpd7sVsKNZHwcrhtF5DHzxYpDuYCjL4aHosv1QoUmhmRtCdX5Mi2tkMYeJFnWnZZjXjQ1VpnHDwaZNWTu98ytOpu5b3LR3UAnkMVcygo0lKCqSUz5HMWxWTqIyZcAfbxJ1tm3nKIr5cKjGv6Wh1VdAFBZnS1Kc92pkQgq6qujqDwK665Qa4IzzDv6T8yMmPaOJFODfYEmhziY2Uc%2BbzIW323bieFhTI%2B8QoAzF6%2FwyDgCJtvralbuKnHLqssafyCbadvof6XFLBvBSqX1MmnvIx54v0OrYa4qCBpf8BarXIrVuDKVo7lmCy6Mt%2F4AZy9cnFJB5RjW11Jzy0XB0PLH5XoI9g9RIolSo%2FEbAsPOIDSz0XYFlDjeUSdpT8oP4AvUw9sXzxAY6pgG26z%2B2WjjWNFbL9LeeobUl8G9B6Y2dqJcBQMCg5uPIQvIdqAEg2GSfsws4TcUN%2FlOX65Hw90ux%2FEa45B2VEuXmDzReyElEljMtUoeNAaIgmvdkV5Uv9PqETyyp0p8M1jQFM1Y6ogTmHqd7XkaLkg11bXcy3dZX3VEC2EFrGOolp6lqxR0ewLDZw1l7xVIVZPTXCsiNHpVphwWgMC%2BHSJx3RN0E39Bw&X-Amz-Signature=91e82944cfc63beae4f5b952c8f829b8b6e653034be5784ceb979a27fecbf901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662WHW4R4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8mrgrxaRStx513RxazoMsoJUkBWimdK3vH0Ir%2FICjvAiAwbES4tD3BGwbUcJQc%2FRaY0h7mWXQNuuyA7TWyorjx8yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM4%2B7mAk%2BKQL0AzBdyKtwD9aduHNMRffmgSG1t%2BqnhfRubO3qwV1qfcWC2CA5xY4hly%2Fjln1j49qX15lWQGi5k%2Bn5ivIN8D1qkRsuxPE0t3QN0o7csuNGJwS7Vz1n6irzvCGVDL9L8Gmyra8V7bb%2F7YREAaXFkJuiXoKxYlJbttnem3Q%2FcjL4RSpbpHNw8ijvLYJuShVfo5ZiGEfHk1l5PPhdxFZhm%2BKWOht3DsKW2FOAX3bQ6bq9kqhszDaO8mJILNpfbPqIYHfG0ShXpd7sVsKNZHwcrhtF5DHzxYpDuYCjL4aHosv1QoUmhmRtCdX5Mi2tkMYeJFnWnZZjXjQ1VpnHDwaZNWTu98ytOpu5b3LR3UAnkMVcygo0lKCqSUz5HMWxWTqIyZcAfbxJ1tm3nKIr5cKjGv6Wh1VdAFBZnS1Kc92pkQgq6qujqDwK665Qa4IzzDv6T8yMmPaOJFODfYEmhziY2Uc%2BbzIW323bieFhTI%2B8QoAzF6%2FwyDgCJtvralbuKnHLqssafyCbadvof6XFLBvBSqX1MmnvIx54v0OrYa4qCBpf8BarXIrVuDKVo7lmCy6Mt%2F4AZy9cnFJB5RjW11Jzy0XB0PLH5XoI9g9RIolSo%2FEbAsPOIDSz0XYFlDjeUSdpT8oP4AvUw9sXzxAY6pgG26z%2B2WjjWNFbL9LeeobUl8G9B6Y2dqJcBQMCg5uPIQvIdqAEg2GSfsws4TcUN%2FlOX65Hw90ux%2FEa45B2VEuXmDzReyElEljMtUoeNAaIgmvdkV5Uv9PqETyyp0p8M1jQFM1Y6ogTmHqd7XkaLkg11bXcy3dZX3VEC2EFrGOolp6lqxR0ewLDZw1l7xVIVZPTXCsiNHpVphwWgMC%2BHSJx3RN0E39Bw&X-Amz-Signature=ad9ca947e656272d7e7437b064690b3605f6fcb09f9f94c6a4b697615bd36525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
