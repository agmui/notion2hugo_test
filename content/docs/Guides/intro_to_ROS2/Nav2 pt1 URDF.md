---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-19T09:18:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-19T09:18:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RHGRL2%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR5OurzS6TQMkSW%2F3mV0g0DT7jBR2fKaw6RjB316tvCAiBLCk3ORn3NiZdpFKRMwMJZo0DTNZE5NbPT62SBNy%2FJ9SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDGen7Tw9%2F8TDiDuKtwDQVqW8AYhCuBIRguI2SFCtBrntaZIJ5Fw2wKg7T0ePEgkDPMQhcgaRAw5Kp%2BKRh04kg3DFZXHU%2FyeiJLsng4GwoeiHdrytzgvqRuAf2ekLBIGj3Y%2BiTgV82qgO7IrH5ufl0bDwMF9H%2F%2BftxiT8PvrGF70Xl3kV%2B3mM6NIhgk66lPFUctZUUNm9H%2B9TLJhtoP%2FO7tp9G0JuNiwXMEi7HWingKPdqCNNc4w1p0Bg1AZaUvdwux3fnnINcT%2BNuB9gJGzVHsVe2FZoXXlqp6MS%2BNk3fyFLPYgODf40GQJxg0w9MOPrapEsNtI2GrlKhMWCnbvsyJPM7ltevO5SJcraoV74JHZs3rqJJ5vhh0d%2F1Ksl3%2FinQXwlmx%2Bn6NKOCbBzf7GP0VStQOJp8iAKGbZqtREBydx1Hw5%2F1b7EoRL2YjV9%2FAcA1i7urml4Q28HZswnU3OhWpTnIiGeX9jsXD%2Fvm5M1LJckM3UD7hNb1zi4%2BJeuTrnIX%2FS2HXhGjTJjPFVuzC9txGWCqZtRThr3%2FbL%2BwUgJNKnEnuoIPfZhuNosYvguEQleJNltj%2BgYGMMVnjK5i32TV3ZCwSpFEb4zTkn7CNkxjs6w0utQvBOlADk1%2B2v4BzlPdxWEeuqB%2Bs%2FtHIwqLqwzwY6pgHx7QX5JEYS%2BW6GgCrYNlIpDb%2BKNvoOz5SMzJd2dH7joRa1gGIMdzkg%2F8IwX42XHmsdlw7xyqEyOAJI5PLVF53wVv7dVuaNMLB00ZK%2FZO%2FcMKjbIFHnexD4Ag2UYKM2%2BPXZvNd8cLRuyqq2ZwGEEmMwB8rNdaSOJ6yqbMsgx0ou%2BEjlCIoWn2gOJFAC0bRU8mORHQPXUp6%2B7NC7xZ1tfC%2BODmwKLtUh&X-Amz-Signature=9d3dba4b5f047768a329059f14a37031342c75be8b0db7a59c373710694f9004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RHGRL2%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR5OurzS6TQMkSW%2F3mV0g0DT7jBR2fKaw6RjB316tvCAiBLCk3ORn3NiZdpFKRMwMJZo0DTNZE5NbPT62SBNy%2FJ9SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDGen7Tw9%2F8TDiDuKtwDQVqW8AYhCuBIRguI2SFCtBrntaZIJ5Fw2wKg7T0ePEgkDPMQhcgaRAw5Kp%2BKRh04kg3DFZXHU%2FyeiJLsng4GwoeiHdrytzgvqRuAf2ekLBIGj3Y%2BiTgV82qgO7IrH5ufl0bDwMF9H%2F%2BftxiT8PvrGF70Xl3kV%2B3mM6NIhgk66lPFUctZUUNm9H%2B9TLJhtoP%2FO7tp9G0JuNiwXMEi7HWingKPdqCNNc4w1p0Bg1AZaUvdwux3fnnINcT%2BNuB9gJGzVHsVe2FZoXXlqp6MS%2BNk3fyFLPYgODf40GQJxg0w9MOPrapEsNtI2GrlKhMWCnbvsyJPM7ltevO5SJcraoV74JHZs3rqJJ5vhh0d%2F1Ksl3%2FinQXwlmx%2Bn6NKOCbBzf7GP0VStQOJp8iAKGbZqtREBydx1Hw5%2F1b7EoRL2YjV9%2FAcA1i7urml4Q28HZswnU3OhWpTnIiGeX9jsXD%2Fvm5M1LJckM3UD7hNb1zi4%2BJeuTrnIX%2FS2HXhGjTJjPFVuzC9txGWCqZtRThr3%2FbL%2BwUgJNKnEnuoIPfZhuNosYvguEQleJNltj%2BgYGMMVnjK5i32TV3ZCwSpFEb4zTkn7CNkxjs6w0utQvBOlADk1%2B2v4BzlPdxWEeuqB%2Bs%2FtHIwqLqwzwY6pgHx7QX5JEYS%2BW6GgCrYNlIpDb%2BKNvoOz5SMzJd2dH7joRa1gGIMdzkg%2F8IwX42XHmsdlw7xyqEyOAJI5PLVF53wVv7dVuaNMLB00ZK%2FZO%2FcMKjbIFHnexD4Ag2UYKM2%2BPXZvNd8cLRuyqq2ZwGEEmMwB8rNdaSOJ6yqbMsgx0ou%2BEjlCIoWn2gOJFAC0bRU8mORHQPXUp6%2B7NC7xZ1tfC%2BODmwKLtUh&X-Amz-Signature=3b64c190070f5fee751d0bf5d3397f3558bb34e1da950fc6baabcf551efca8f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RHGRL2%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR5OurzS6TQMkSW%2F3mV0g0DT7jBR2fKaw6RjB316tvCAiBLCk3ORn3NiZdpFKRMwMJZo0DTNZE5NbPT62SBNy%2FJ9SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDGen7Tw9%2F8TDiDuKtwDQVqW8AYhCuBIRguI2SFCtBrntaZIJ5Fw2wKg7T0ePEgkDPMQhcgaRAw5Kp%2BKRh04kg3DFZXHU%2FyeiJLsng4GwoeiHdrytzgvqRuAf2ekLBIGj3Y%2BiTgV82qgO7IrH5ufl0bDwMF9H%2F%2BftxiT8PvrGF70Xl3kV%2B3mM6NIhgk66lPFUctZUUNm9H%2B9TLJhtoP%2FO7tp9G0JuNiwXMEi7HWingKPdqCNNc4w1p0Bg1AZaUvdwux3fnnINcT%2BNuB9gJGzVHsVe2FZoXXlqp6MS%2BNk3fyFLPYgODf40GQJxg0w9MOPrapEsNtI2GrlKhMWCnbvsyJPM7ltevO5SJcraoV74JHZs3rqJJ5vhh0d%2F1Ksl3%2FinQXwlmx%2Bn6NKOCbBzf7GP0VStQOJp8iAKGbZqtREBydx1Hw5%2F1b7EoRL2YjV9%2FAcA1i7urml4Q28HZswnU3OhWpTnIiGeX9jsXD%2Fvm5M1LJckM3UD7hNb1zi4%2BJeuTrnIX%2FS2HXhGjTJjPFVuzC9txGWCqZtRThr3%2FbL%2BwUgJNKnEnuoIPfZhuNosYvguEQleJNltj%2BgYGMMVnjK5i32TV3ZCwSpFEb4zTkn7CNkxjs6w0utQvBOlADk1%2B2v4BzlPdxWEeuqB%2Bs%2FtHIwqLqwzwY6pgHx7QX5JEYS%2BW6GgCrYNlIpDb%2BKNvoOz5SMzJd2dH7joRa1gGIMdzkg%2F8IwX42XHmsdlw7xyqEyOAJI5PLVF53wVv7dVuaNMLB00ZK%2FZO%2FcMKjbIFHnexD4Ag2UYKM2%2BPXZvNd8cLRuyqq2ZwGEEmMwB8rNdaSOJ6yqbMsgx0ou%2BEjlCIoWn2gOJFAC0bRU8mORHQPXUp6%2B7NC7xZ1tfC%2BODmwKLtUh&X-Amz-Signature=1dd9597982a6c5bf6c129291d2b19ba07a5823fccce7e48f5bb24bb922509237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RHGRL2%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR5OurzS6TQMkSW%2F3mV0g0DT7jBR2fKaw6RjB316tvCAiBLCk3ORn3NiZdpFKRMwMJZo0DTNZE5NbPT62SBNy%2FJ9SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDGen7Tw9%2F8TDiDuKtwDQVqW8AYhCuBIRguI2SFCtBrntaZIJ5Fw2wKg7T0ePEgkDPMQhcgaRAw5Kp%2BKRh04kg3DFZXHU%2FyeiJLsng4GwoeiHdrytzgvqRuAf2ekLBIGj3Y%2BiTgV82qgO7IrH5ufl0bDwMF9H%2F%2BftxiT8PvrGF70Xl3kV%2B3mM6NIhgk66lPFUctZUUNm9H%2B9TLJhtoP%2FO7tp9G0JuNiwXMEi7HWingKPdqCNNc4w1p0Bg1AZaUvdwux3fnnINcT%2BNuB9gJGzVHsVe2FZoXXlqp6MS%2BNk3fyFLPYgODf40GQJxg0w9MOPrapEsNtI2GrlKhMWCnbvsyJPM7ltevO5SJcraoV74JHZs3rqJJ5vhh0d%2F1Ksl3%2FinQXwlmx%2Bn6NKOCbBzf7GP0VStQOJp8iAKGbZqtREBydx1Hw5%2F1b7EoRL2YjV9%2FAcA1i7urml4Q28HZswnU3OhWpTnIiGeX9jsXD%2Fvm5M1LJckM3UD7hNb1zi4%2BJeuTrnIX%2FS2HXhGjTJjPFVuzC9txGWCqZtRThr3%2FbL%2BwUgJNKnEnuoIPfZhuNosYvguEQleJNltj%2BgYGMMVnjK5i32TV3ZCwSpFEb4zTkn7CNkxjs6w0utQvBOlADk1%2B2v4BzlPdxWEeuqB%2Bs%2FtHIwqLqwzwY6pgHx7QX5JEYS%2BW6GgCrYNlIpDb%2BKNvoOz5SMzJd2dH7joRa1gGIMdzkg%2F8IwX42XHmsdlw7xyqEyOAJI5PLVF53wVv7dVuaNMLB00ZK%2FZO%2FcMKjbIFHnexD4Ag2UYKM2%2BPXZvNd8cLRuyqq2ZwGEEmMwB8rNdaSOJ6yqbMsgx0ou%2BEjlCIoWn2gOJFAC0bRU8mORHQPXUp6%2B7NC7xZ1tfC%2BODmwKLtUh&X-Amz-Signature=c700b9bbfa175b690d340b0d5af12cee9da5ee63c72ebe4c96dad9222e98af64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RHGRL2%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR5OurzS6TQMkSW%2F3mV0g0DT7jBR2fKaw6RjB316tvCAiBLCk3ORn3NiZdpFKRMwMJZo0DTNZE5NbPT62SBNy%2FJ9SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDGen7Tw9%2F8TDiDuKtwDQVqW8AYhCuBIRguI2SFCtBrntaZIJ5Fw2wKg7T0ePEgkDPMQhcgaRAw5Kp%2BKRh04kg3DFZXHU%2FyeiJLsng4GwoeiHdrytzgvqRuAf2ekLBIGj3Y%2BiTgV82qgO7IrH5ufl0bDwMF9H%2F%2BftxiT8PvrGF70Xl3kV%2B3mM6NIhgk66lPFUctZUUNm9H%2B9TLJhtoP%2FO7tp9G0JuNiwXMEi7HWingKPdqCNNc4w1p0Bg1AZaUvdwux3fnnINcT%2BNuB9gJGzVHsVe2FZoXXlqp6MS%2BNk3fyFLPYgODf40GQJxg0w9MOPrapEsNtI2GrlKhMWCnbvsyJPM7ltevO5SJcraoV74JHZs3rqJJ5vhh0d%2F1Ksl3%2FinQXwlmx%2Bn6NKOCbBzf7GP0VStQOJp8iAKGbZqtREBydx1Hw5%2F1b7EoRL2YjV9%2FAcA1i7urml4Q28HZswnU3OhWpTnIiGeX9jsXD%2Fvm5M1LJckM3UD7hNb1zi4%2BJeuTrnIX%2FS2HXhGjTJjPFVuzC9txGWCqZtRThr3%2FbL%2BwUgJNKnEnuoIPfZhuNosYvguEQleJNltj%2BgYGMMVnjK5i32TV3ZCwSpFEb4zTkn7CNkxjs6w0utQvBOlADk1%2B2v4BzlPdxWEeuqB%2Bs%2FtHIwqLqwzwY6pgHx7QX5JEYS%2BW6GgCrYNlIpDb%2BKNvoOz5SMzJd2dH7joRa1gGIMdzkg%2F8IwX42XHmsdlw7xyqEyOAJI5PLVF53wVv7dVuaNMLB00ZK%2FZO%2FcMKjbIFHnexD4Ag2UYKM2%2BPXZvNd8cLRuyqq2ZwGEEmMwB8rNdaSOJ6yqbMsgx0ou%2BEjlCIoWn2gOJFAC0bRU8mORHQPXUp6%2B7NC7xZ1tfC%2BODmwKLtUh&X-Amz-Signature=1ea96da5d84a3a0eb45f51e7f75b41cefbc77aceb037fa97f2c418d679c504d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RHGRL2%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR5OurzS6TQMkSW%2F3mV0g0DT7jBR2fKaw6RjB316tvCAiBLCk3ORn3NiZdpFKRMwMJZo0DTNZE5NbPT62SBNy%2FJ9SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDGen7Tw9%2F8TDiDuKtwDQVqW8AYhCuBIRguI2SFCtBrntaZIJ5Fw2wKg7T0ePEgkDPMQhcgaRAw5Kp%2BKRh04kg3DFZXHU%2FyeiJLsng4GwoeiHdrytzgvqRuAf2ekLBIGj3Y%2BiTgV82qgO7IrH5ufl0bDwMF9H%2F%2BftxiT8PvrGF70Xl3kV%2B3mM6NIhgk66lPFUctZUUNm9H%2B9TLJhtoP%2FO7tp9G0JuNiwXMEi7HWingKPdqCNNc4w1p0Bg1AZaUvdwux3fnnINcT%2BNuB9gJGzVHsVe2FZoXXlqp6MS%2BNk3fyFLPYgODf40GQJxg0w9MOPrapEsNtI2GrlKhMWCnbvsyJPM7ltevO5SJcraoV74JHZs3rqJJ5vhh0d%2F1Ksl3%2FinQXwlmx%2Bn6NKOCbBzf7GP0VStQOJp8iAKGbZqtREBydx1Hw5%2F1b7EoRL2YjV9%2FAcA1i7urml4Q28HZswnU3OhWpTnIiGeX9jsXD%2Fvm5M1LJckM3UD7hNb1zi4%2BJeuTrnIX%2FS2HXhGjTJjPFVuzC9txGWCqZtRThr3%2FbL%2BwUgJNKnEnuoIPfZhuNosYvguEQleJNltj%2BgYGMMVnjK5i32TV3ZCwSpFEb4zTkn7CNkxjs6w0utQvBOlADk1%2B2v4BzlPdxWEeuqB%2Bs%2FtHIwqLqwzwY6pgHx7QX5JEYS%2BW6GgCrYNlIpDb%2BKNvoOz5SMzJd2dH7joRa1gGIMdzkg%2F8IwX42XHmsdlw7xyqEyOAJI5PLVF53wVv7dVuaNMLB00ZK%2FZO%2FcMKjbIFHnexD4Ag2UYKM2%2BPXZvNd8cLRuyqq2ZwGEEmMwB8rNdaSOJ6yqbMsgx0ou%2BEjlCIoWn2gOJFAC0bRU8mORHQPXUp6%2B7NC7xZ1tfC%2BODmwKLtUh&X-Amz-Signature=d9f14281ea2bd2388f6ecff92983566b2d0d5a7091e7232d9e3bc5cbf7140d5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RHGRL2%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR5OurzS6TQMkSW%2F3mV0g0DT7jBR2fKaw6RjB316tvCAiBLCk3ORn3NiZdpFKRMwMJZo0DTNZE5NbPT62SBNy%2FJ9SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDGen7Tw9%2F8TDiDuKtwDQVqW8AYhCuBIRguI2SFCtBrntaZIJ5Fw2wKg7T0ePEgkDPMQhcgaRAw5Kp%2BKRh04kg3DFZXHU%2FyeiJLsng4GwoeiHdrytzgvqRuAf2ekLBIGj3Y%2BiTgV82qgO7IrH5ufl0bDwMF9H%2F%2BftxiT8PvrGF70Xl3kV%2B3mM6NIhgk66lPFUctZUUNm9H%2B9TLJhtoP%2FO7tp9G0JuNiwXMEi7HWingKPdqCNNc4w1p0Bg1AZaUvdwux3fnnINcT%2BNuB9gJGzVHsVe2FZoXXlqp6MS%2BNk3fyFLPYgODf40GQJxg0w9MOPrapEsNtI2GrlKhMWCnbvsyJPM7ltevO5SJcraoV74JHZs3rqJJ5vhh0d%2F1Ksl3%2FinQXwlmx%2Bn6NKOCbBzf7GP0VStQOJp8iAKGbZqtREBydx1Hw5%2F1b7EoRL2YjV9%2FAcA1i7urml4Q28HZswnU3OhWpTnIiGeX9jsXD%2Fvm5M1LJckM3UD7hNb1zi4%2BJeuTrnIX%2FS2HXhGjTJjPFVuzC9txGWCqZtRThr3%2FbL%2BwUgJNKnEnuoIPfZhuNosYvguEQleJNltj%2BgYGMMVnjK5i32TV3ZCwSpFEb4zTkn7CNkxjs6w0utQvBOlADk1%2B2v4BzlPdxWEeuqB%2Bs%2FtHIwqLqwzwY6pgHx7QX5JEYS%2BW6GgCrYNlIpDb%2BKNvoOz5SMzJd2dH7joRa1gGIMdzkg%2F8IwX42XHmsdlw7xyqEyOAJI5PLVF53wVv7dVuaNMLB00ZK%2FZO%2FcMKjbIFHnexD4Ag2UYKM2%2BPXZvNd8cLRuyqq2ZwGEEmMwB8rNdaSOJ6yqbMsgx0ou%2BEjlCIoWn2gOJFAC0bRU8mORHQPXUp6%2B7NC7xZ1tfC%2BODmwKLtUh&X-Amz-Signature=ecf525cf2c73071afbfeb54af5890d901c86441e16017df952d62d23a909a725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RHGRL2%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR5OurzS6TQMkSW%2F3mV0g0DT7jBR2fKaw6RjB316tvCAiBLCk3ORn3NiZdpFKRMwMJZo0DTNZE5NbPT62SBNy%2FJ9SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDGen7Tw9%2F8TDiDuKtwDQVqW8AYhCuBIRguI2SFCtBrntaZIJ5Fw2wKg7T0ePEgkDPMQhcgaRAw5Kp%2BKRh04kg3DFZXHU%2FyeiJLsng4GwoeiHdrytzgvqRuAf2ekLBIGj3Y%2BiTgV82qgO7IrH5ufl0bDwMF9H%2F%2BftxiT8PvrGF70Xl3kV%2B3mM6NIhgk66lPFUctZUUNm9H%2B9TLJhtoP%2FO7tp9G0JuNiwXMEi7HWingKPdqCNNc4w1p0Bg1AZaUvdwux3fnnINcT%2BNuB9gJGzVHsVe2FZoXXlqp6MS%2BNk3fyFLPYgODf40GQJxg0w9MOPrapEsNtI2GrlKhMWCnbvsyJPM7ltevO5SJcraoV74JHZs3rqJJ5vhh0d%2F1Ksl3%2FinQXwlmx%2Bn6NKOCbBzf7GP0VStQOJp8iAKGbZqtREBydx1Hw5%2F1b7EoRL2YjV9%2FAcA1i7urml4Q28HZswnU3OhWpTnIiGeX9jsXD%2Fvm5M1LJckM3UD7hNb1zi4%2BJeuTrnIX%2FS2HXhGjTJjPFVuzC9txGWCqZtRThr3%2FbL%2BwUgJNKnEnuoIPfZhuNosYvguEQleJNltj%2BgYGMMVnjK5i32TV3ZCwSpFEb4zTkn7CNkxjs6w0utQvBOlADk1%2B2v4BzlPdxWEeuqB%2Bs%2FtHIwqLqwzwY6pgHx7QX5JEYS%2BW6GgCrYNlIpDb%2BKNvoOz5SMzJd2dH7joRa1gGIMdzkg%2F8IwX42XHmsdlw7xyqEyOAJI5PLVF53wVv7dVuaNMLB00ZK%2FZO%2FcMKjbIFHnexD4Ag2UYKM2%2BPXZvNd8cLRuyqq2ZwGEEmMwB8rNdaSOJ6yqbMsgx0ou%2BEjlCIoWn2gOJFAC0bRU8mORHQPXUp6%2B7NC7xZ1tfC%2BODmwKLtUh&X-Amz-Signature=230e6e524b3db7dcaa6d1abdb4ed33ba8f0ec484596b58a1137708713a83164e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RHGRL2%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR5OurzS6TQMkSW%2F3mV0g0DT7jBR2fKaw6RjB316tvCAiBLCk3ORn3NiZdpFKRMwMJZo0DTNZE5NbPT62SBNy%2FJ9SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDGen7Tw9%2F8TDiDuKtwDQVqW8AYhCuBIRguI2SFCtBrntaZIJ5Fw2wKg7T0ePEgkDPMQhcgaRAw5Kp%2BKRh04kg3DFZXHU%2FyeiJLsng4GwoeiHdrytzgvqRuAf2ekLBIGj3Y%2BiTgV82qgO7IrH5ufl0bDwMF9H%2F%2BftxiT8PvrGF70Xl3kV%2B3mM6NIhgk66lPFUctZUUNm9H%2B9TLJhtoP%2FO7tp9G0JuNiwXMEi7HWingKPdqCNNc4w1p0Bg1AZaUvdwux3fnnINcT%2BNuB9gJGzVHsVe2FZoXXlqp6MS%2BNk3fyFLPYgODf40GQJxg0w9MOPrapEsNtI2GrlKhMWCnbvsyJPM7ltevO5SJcraoV74JHZs3rqJJ5vhh0d%2F1Ksl3%2FinQXwlmx%2Bn6NKOCbBzf7GP0VStQOJp8iAKGbZqtREBydx1Hw5%2F1b7EoRL2YjV9%2FAcA1i7urml4Q28HZswnU3OhWpTnIiGeX9jsXD%2Fvm5M1LJckM3UD7hNb1zi4%2BJeuTrnIX%2FS2HXhGjTJjPFVuzC9txGWCqZtRThr3%2FbL%2BwUgJNKnEnuoIPfZhuNosYvguEQleJNltj%2BgYGMMVnjK5i32TV3ZCwSpFEb4zTkn7CNkxjs6w0utQvBOlADk1%2B2v4BzlPdxWEeuqB%2Bs%2FtHIwqLqwzwY6pgHx7QX5JEYS%2BW6GgCrYNlIpDb%2BKNvoOz5SMzJd2dH7joRa1gGIMdzkg%2F8IwX42XHmsdlw7xyqEyOAJI5PLVF53wVv7dVuaNMLB00ZK%2FZO%2FcMKjbIFHnexD4Ag2UYKM2%2BPXZvNd8cLRuyqq2ZwGEEmMwB8rNdaSOJ6yqbMsgx0ou%2BEjlCIoWn2gOJFAC0bRU8mORHQPXUp6%2B7NC7xZ1tfC%2BODmwKLtUh&X-Amz-Signature=7a1bc2fbf815a8c6bc7b52441023cc2c7f4dd78f7b16f841f4d59933564bbff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RHGRL2%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR5OurzS6TQMkSW%2F3mV0g0DT7jBR2fKaw6RjB316tvCAiBLCk3ORn3NiZdpFKRMwMJZo0DTNZE5NbPT62SBNy%2FJ9SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDGen7Tw9%2F8TDiDuKtwDQVqW8AYhCuBIRguI2SFCtBrntaZIJ5Fw2wKg7T0ePEgkDPMQhcgaRAw5Kp%2BKRh04kg3DFZXHU%2FyeiJLsng4GwoeiHdrytzgvqRuAf2ekLBIGj3Y%2BiTgV82qgO7IrH5ufl0bDwMF9H%2F%2BftxiT8PvrGF70Xl3kV%2B3mM6NIhgk66lPFUctZUUNm9H%2B9TLJhtoP%2FO7tp9G0JuNiwXMEi7HWingKPdqCNNc4w1p0Bg1AZaUvdwux3fnnINcT%2BNuB9gJGzVHsVe2FZoXXlqp6MS%2BNk3fyFLPYgODf40GQJxg0w9MOPrapEsNtI2GrlKhMWCnbvsyJPM7ltevO5SJcraoV74JHZs3rqJJ5vhh0d%2F1Ksl3%2FinQXwlmx%2Bn6NKOCbBzf7GP0VStQOJp8iAKGbZqtREBydx1Hw5%2F1b7EoRL2YjV9%2FAcA1i7urml4Q28HZswnU3OhWpTnIiGeX9jsXD%2Fvm5M1LJckM3UD7hNb1zi4%2BJeuTrnIX%2FS2HXhGjTJjPFVuzC9txGWCqZtRThr3%2FbL%2BwUgJNKnEnuoIPfZhuNosYvguEQleJNltj%2BgYGMMVnjK5i32TV3ZCwSpFEb4zTkn7CNkxjs6w0utQvBOlADk1%2B2v4BzlPdxWEeuqB%2Bs%2FtHIwqLqwzwY6pgHx7QX5JEYS%2BW6GgCrYNlIpDb%2BKNvoOz5SMzJd2dH7joRa1gGIMdzkg%2F8IwX42XHmsdlw7xyqEyOAJI5PLVF53wVv7dVuaNMLB00ZK%2FZO%2FcMKjbIFHnexD4Ag2UYKM2%2BPXZvNd8cLRuyqq2ZwGEEmMwB8rNdaSOJ6yqbMsgx0ou%2BEjlCIoWn2gOJFAC0bRU8mORHQPXUp6%2B7NC7xZ1tfC%2BODmwKLtUh&X-Amz-Signature=8aa7c89dbc4c561fb43bc0eeb071e85837651e8309ba360b3a3b69c6a88237bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> urdf can get complex to look at so I will be putting a “_scratch”_ like equivalent next to each example I put down.

To start add these tags:

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml
<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">



</robot>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JFDSTYV%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGGoilek7QqzWE4p0bJnSxg0QBrdbPiNlWL3m4EGsqGQIhALd8sjHYiMzXhX8KKSXW0h18StQ1GJx8wNO7N6PyYudtKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHbppnj6w%2FoDWY8Fcq3APcyVDjfQ4TwfcZ0c2wT0BzAARCGGsQk3u4N3P6LHnXuHWSm4TqZ6dlQq8X60zywPqhfAomZmpT7hTnTJVIpHduNXDWNtCc1n%2B4a8ao7hP2%2FMJLe6Fj%2FIn61AXgIOEh%2FqGvjY3sYlMFWajtFRZtwm1M2RoHjYYzM8SASnv6%2F2iTPj8IdhEEALYj6tE24FlspxtyHyYwjeyh868JR8960JsZUC5TK825RMp33uIpnenK6p5C2VFOvCLfBF8Qkwiw0%2Bi4bqi3ybfeBO7UjIIDMaEChI1HIExuNr1Hn4q2%2FssTCc8egO2l0sSiof%2BuYQah1QfKFtyGAtnxZnuf1e4aRKgWHNnFeCQraeMhmoW8I%2BhzCqWQSH14tWjoXOvrhFp%2F0%2BZsJ5PxDX6pXcSDO7g7jQ1cPUAPGYudUQJR4eyHDweTIvoMUU%2BaOXjjRv7gCgOYzgY%2FJA2nTBZctaSbpojYCR5pRcW0It3jQMBXGthW6yCPYDgQj7%2BMTeOpNeM4q7UZdJC8TQ92f%2F%2FFvSYg%2BlQQX0ivY8Njq%2Bz6tjOKivIqX7GQrL4nX8InDNZpqCBPpERdHyBjWnZOBqhljLbvzVH4QCc9u7fI8xqh5JJrY5jreSvYiYjuiweSC%2BO0nF2a3DDzuLDPBjqkAUzNNMOd0b4%2FL6YGslGHZgfLGqCu1KHh8JDOWyC20OhJhOWNA96ZcWpVopq6ecsN7DYbW%2BogI%2FQXGoU6aIZX60hVQdILRTbEsd8osQIDaQR1%2BqvSRD17IGkw%2Bc9nxg36uNWji%2BzeYY8aHtYoJVlAQSkB9Iw%2F9vP4baqsV2wqhCIbvQPa85ykNwdmNjhxbiyReD2QfvpizO7E5NFQyxeFiMhLQA2%2B&X-Amz-Signature=1fccc4a3967d422b6980a373db04d3eefa8050df0ef5d4060e116908e3abccd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

All urdf files must start with these tags to be valid urdf. All of our code will go in between the `<robot>` tags 

Next lets put down some constants we will use later

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUYUYPGF%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9oSQKjKfrXGpxQhWljH2rn9pQsXzle4aDux4sdoPmHQIhAMouQx2AFotnUDU7MvjZCAeITdePJEMEv3E6PmaZTySdKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwTTTSMNZKYAucvXMq3AP%2FaWUrg1IGP8qh6aLfhfvIYmZ1RmQG%2FfOgtLmnLQPto3Pw9wviaRb2F51%2Fde06peWfo05b8xQ70d%2BUl1UxWpwrHrFEqIvEHvrriYbG%2FfbsNvytAla3Q6Fy%2FcpGG4vxq41eVLqbJGuf3NvnCfoHtPmXu%2BbhV1Xspk5FcRIMNfWGWnoQzdtHQvnBjffzWveZl%2B%2B%2B4%2FgdCcU%2BC3l7y1WLmt0%2F2Ju5thWMQvw3ZjNI4GJIxyItvUzdWkWageH%2BqOMba8JlbzWVCAVW4ezfYhXboyywJjQrKefUpmucbVhU0dZobrgNgxediREGfsUJRRGbgrzxWeU6BbtWcbLqF1iw4xaI1W5pCyy5I1HfeZe1%2FlPhWp6s3Tui1Wsy93hsSuAmjnwXlPUOJucg%2BfqihJtAdC8R1mmk91fTCGGUrjz0awqDaoF653GNRXnt6CwT5HB7obl%2B8r5KSii5HSPBTRRRnCe9mhO41SwtOxPs2r3nqFMv2Em4QRnRuhP0ya9gr1JYMJisdBYUw7X%2BUXs%2BqtYdB8JvB1BWCrNpBtAZhJs9ZKTAvT1WF0PjDjlQQ%2FCg3qhBUErm%2BV1KIXE6sXWJQB4T6W0sk7NzdYIg31g89141JZR1bRBdTbbwCVATBzs4lzDKubDPBjqkASlBkTy5SDr5zFFyuOMpq864sQHuRAp%2BkaLwx2B4MCqSJ%2B88VFRabprXCB141BBxOwEC6hqGVUpS%2Fp6ahZWAFU1W2YFn4pWQo6P%2BBVc0LePXkmEY%2B4wZgjptVlrv6Gkg08KWCo4xVBmq9vhty3a%2FoNvC2IHbiGd3euJVX%2B3Q4anjqZh5XjN2J0gUGFphkb6aA9cQi%2F063aTq2Ah38zxrekTLMCP%2B&X-Amz-Signature=a28b11327c36a541ac4152572d866d1d6838a7b3a8eeefa39d7d2e9d16570967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

You can think of these as **variables** but in the xacro language

<details>
  <summary>{{< markdownify >}}What do the variables represent?{{< /markdownify >}}</summary>
  
`base_width`, `base_length`, `base_height` are the dimensions of the main body of the robot.

`wheel_radius` and `wheel_width` are the dimensions of the 2 back wheels.

`wheel_ygap` is the gap between the chassis and wheel.

`wheel_zoff` and `wheel_xoff` is the offset between the z-axis and x-axis.

`caster_xoff` is the offset of the caster wheel (the little ball) along the x-axis.

</details>



Lets now make a link for the body and call it `base_link` to be the “_root” of our robot._ This is common convention in ROS and is required to be called `base_link` for later parts in this guide

For now we are only going to add the visual part of the link to see if our design is correct. Later we will add collision and inertia.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLDOHPKT%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKmYo59Mt4rSy3vayOQSbichO2Cl%2Bw%2BAUU%2BLyLJvKjkgIhALDXVzJup%2Bo02WUJtprUCidXA%2BWhKvN4ZkMoVYqiuVGlKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUcgdBo0yivNrSMU0q3AM7%2BcOw66r5wq2H6dR2WrJuaXJJH5nWQuxnMnyH6edpy82B3CcjFcVR9EAhQUY5%2FwVO0QeCiU3D1paaTy%2BA1CuoixNWIyqVRRE6e9gVa%2BjNMiHYNtGorbIT2n%2B6Xd2em%2Fpj%2B07s%2B%2FA6jYzrDq90m3g6ioE1Z0APgJnPA6X9%2ByhkjofivsLGe1eXuqoaKNee5YhzE1grVs2eKjs4Ztkco%2FsipWPZIs5b7m9xtzWdR2uKkZQJ%2B31X6FmgIGrj4HMWYL2u%2Bzk8Sp1uCZgV22pEZu%2FZYTbeMaGJh3wR9On7%2BdjeWM3Auo1AXG0%2FoClx8RC68UKDe8OLj5AQLb7XYc0PeVPGnQQHOBDB%2F%2BAmMCfr4DTgAbS%2FflRIhcVNSOgROcIPO%2BnPZQmcqj0KirjbuE4wNK%2Bp4HJujDyv3Qbyr%2BNKH3LOwv9P1tGCtgyzL3gd59ggKM2BomnfeZHmYYYqAbqclMp4E0LPHvdGFYwG4MBkejBAIm1zs7GI7gjCmoHc3UtlWLC57IDu7CgGostZuE49QWqh%2FlKk2Rp8vYlz1Qg6e2MIh9M6WS9Z%2BhhqlSnKLTNcKv0t6oU09X35Ep1eyW6ps5oZMOfgQwU75ugNgwNVn5ROVXuhM4qLnBAEbTYIpjCCu7DPBjqkATmkfHmsIyBO%2FNsvtS44paTjSGaPuJJoNwBX33yr6%2B3Q5YOMqNlORNptRWtrPoETg4GHuO6q%2FVLN09Mzz1%2BuDptjPR31W2154U%2FoESBDoWFZGN9880q2tBnCZwsQ%2F%2BAxkoMxm0m3IYcEgF559D3Jlx7R%2B%2Bdce0nT3%2FSNnDV6K18BC9VqazXirVga9UrP%2Fleg%2BqePtAcjX7gYxlmP2NII4tD3Mgyk&X-Amz-Signature=73ced492a4b0af173f6d89e08c49cd5243393910806acd569190f5c6f3b67e85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RHGRL2%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR5OurzS6TQMkSW%2F3mV0g0DT7jBR2fKaw6RjB316tvCAiBLCk3ORn3NiZdpFKRMwMJZo0DTNZE5NbPT62SBNy%2FJ9SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDGen7Tw9%2F8TDiDuKtwDQVqW8AYhCuBIRguI2SFCtBrntaZIJ5Fw2wKg7T0ePEgkDPMQhcgaRAw5Kp%2BKRh04kg3DFZXHU%2FyeiJLsng4GwoeiHdrytzgvqRuAf2ekLBIGj3Y%2BiTgV82qgO7IrH5ufl0bDwMF9H%2F%2BftxiT8PvrGF70Xl3kV%2B3mM6NIhgk66lPFUctZUUNm9H%2B9TLJhtoP%2FO7tp9G0JuNiwXMEi7HWingKPdqCNNc4w1p0Bg1AZaUvdwux3fnnINcT%2BNuB9gJGzVHsVe2FZoXXlqp6MS%2BNk3fyFLPYgODf40GQJxg0w9MOPrapEsNtI2GrlKhMWCnbvsyJPM7ltevO5SJcraoV74JHZs3rqJJ5vhh0d%2F1Ksl3%2FinQXwlmx%2Bn6NKOCbBzf7GP0VStQOJp8iAKGbZqtREBydx1Hw5%2F1b7EoRL2YjV9%2FAcA1i7urml4Q28HZswnU3OhWpTnIiGeX9jsXD%2Fvm5M1LJckM3UD7hNb1zi4%2BJeuTrnIX%2FS2HXhGjTJjPFVuzC9txGWCqZtRThr3%2FbL%2BwUgJNKnEnuoIPfZhuNosYvguEQleJNltj%2BgYGMMVnjK5i32TV3ZCwSpFEb4zTkn7CNkxjs6w0utQvBOlADk1%2B2v4BzlPdxWEeuqB%2Bs%2FtHIwqLqwzwY6pgHx7QX5JEYS%2BW6GgCrYNlIpDb%2BKNvoOz5SMzJd2dH7joRa1gGIMdzkg%2F8IwX42XHmsdlw7xyqEyOAJI5PLVF53wVv7dVuaNMLB00ZK%2FZO%2FcMKjbIFHnexD4Ag2UYKM2%2BPXZvNd8cLRuyqq2ZwGEEmMwB8rNdaSOJ6yqbMsgx0ou%2BEjlCIoWn2gOJFAC0bRU8mORHQPXUp6%2B7NC7xZ1tfC%2BODmwKLtUh&X-Amz-Signature=be95bf6e7898b0ad26245cc1f6442a8dfd31ede6aaf2d0d42d50eb69942b2839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

under `</link>` lets define a link called `base_footprint`. This link is just used for path finding to know where the robot is on a 2D map.

Later on in this guide we will see how it gets used.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL27JJ4D%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9x2VqMcdiEU8ZimGD5YeMtHtNeh2E9Nz8uQljZKhIpwIhAOIAcpsZU7C%2FuOL89OpWgqhc53rZDBjYCUFwtp8Ji7FrKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwargcIFT1gaZFvYmQq3APsYIuvKsBMJWqQ0RElZAt4ovNq2i%2FH3lDD9YRRgYs7iSkNzdSASIrgMH9%2FfLLQUXUM1lL0eVmHT1%2Bw0%2FEzMGVMMOHuWpvZW7zpHvflvndbjsOu%2Bz6TVL%2BxRL2vtrZFafcZg%2BL%2FrhNSkwuUC3RnHAWLmb%2BodQPu6LhcURqXlURNtsIR4qbJHnVNSFhkWFYzP3GQ4T9GIk0O2kdmj7AZ5oUwJXzLrjY3HYQiKIzOWyjT%2FZAi2Y3eMUykvK6UjA87JmP11wT0vPuwowtM5og6bYYJoE2VE0spnPuvZycKJiRf3VBgrMb49TO909yTjE25lWCuYj1BnH71mGwbMTLTovKlu1g4NwAbLFelKjMCCNPHUC%2FOG5MO0V6QgMuhm1AzYZyHuUdo7da9PTsT5z5D5Wp6BQKpfYmewwg8azF9x7hT1P96yM5hciL4ADgKH%2F9Sd1qjA1p2xL715rh6ceS4A%2BDac%2FN778INIuU5PfZ4eAeiZA87PMS6ks50gI1u97yE0mU0WDRA3bYQ0fJa8uKzmEpoWRAAVBZJNHYchsTbr8R7sXkZ9TYa%2BHQpStH25VZOuJ5TOROdzwwDUBnMQq%2Ft6EM%2FRq6nj2tZHV0TL08UJ1zNDq%2FS8CaSXNn2f%2B2TyjDiubDPBjqkAYrTn8CeqWxFSk1xvc4ftPPvslQB0ikp7Yrfd0Qq9bcvXUZHbBQNH9Su2KbhpKEZonNehqtvQgm2mDVF44geMEQ22Tp99b1P7tF48BEIA3qZKTV6E3d%2F9Xq8%2FWGTqGvmE8tYGC3p2xiV9RPIAMb%2BRmw5xsxAE%2Ff%2FQ5UDFSZrQNKESAQ7gadnfnnczDKR%2FAj9z4EW5sjbnwGmV%2FLDVabsEmpv4Ojq&X-Amz-Signature=1c183d533dcaf6ca73f1faf5ff86869220e4627a405b2f015482a3f3cdd6da66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RHGRL2%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR5OurzS6TQMkSW%2F3mV0g0DT7jBR2fKaw6RjB316tvCAiBLCk3ORn3NiZdpFKRMwMJZo0DTNZE5NbPT62SBNy%2FJ9SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDGen7Tw9%2F8TDiDuKtwDQVqW8AYhCuBIRguI2SFCtBrntaZIJ5Fw2wKg7T0ePEgkDPMQhcgaRAw5Kp%2BKRh04kg3DFZXHU%2FyeiJLsng4GwoeiHdrytzgvqRuAf2ekLBIGj3Y%2BiTgV82qgO7IrH5ufl0bDwMF9H%2F%2BftxiT8PvrGF70Xl3kV%2B3mM6NIhgk66lPFUctZUUNm9H%2B9TLJhtoP%2FO7tp9G0JuNiwXMEi7HWingKPdqCNNc4w1p0Bg1AZaUvdwux3fnnINcT%2BNuB9gJGzVHsVe2FZoXXlqp6MS%2BNk3fyFLPYgODf40GQJxg0w9MOPrapEsNtI2GrlKhMWCnbvsyJPM7ltevO5SJcraoV74JHZs3rqJJ5vhh0d%2F1Ksl3%2FinQXwlmx%2Bn6NKOCbBzf7GP0VStQOJp8iAKGbZqtREBydx1Hw5%2F1b7EoRL2YjV9%2FAcA1i7urml4Q28HZswnU3OhWpTnIiGeX9jsXD%2Fvm5M1LJckM3UD7hNb1zi4%2BJeuTrnIX%2FS2HXhGjTJjPFVuzC9txGWCqZtRThr3%2FbL%2BwUgJNKnEnuoIPfZhuNosYvguEQleJNltj%2BgYGMMVnjK5i32TV3ZCwSpFEb4zTkn7CNkxjs6w0utQvBOlADk1%2B2v4BzlPdxWEeuqB%2Bs%2FtHIwqLqwzwY6pgHx7QX5JEYS%2BW6GgCrYNlIpDb%2BKNvoOz5SMzJd2dH7joRa1gGIMdzkg%2F8IwX42XHmsdlw7xyqEyOAJI5PLVF53wVv7dVuaNMLB00ZK%2FZO%2FcMKjbIFHnexD4Ag2UYKM2%2BPXZvNd8cLRuyqq2ZwGEEmMwB8rNdaSOJ6yqbMsgx0ou%2BEjlCIoWn2gOJFAC0bRU8mORHQPXUp6%2B7NC7xZ1tfC%2BODmwKLtUh&X-Amz-Signature=c77655453d0a771b2ddfb758a67a7e1287d09ecfb6a033933e28260069d61955&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

under `</joint>` to add wheels lets use a `xacro:macro` (basically a xacro function) to avoid duplicate code. The macro will take 3 functions `prefix`, `x_reflect`, and `y_reflect` so we can flip the wheel on the x or y axis. We also make the joint continuous so the wheel can rotate freely.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RO4CNEI%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiqFGEVJt7BxyzLZl5q1JnsF4aZHSkzB7pdyWH8SYiAQIhAPn2xGWP7KXBTgMrF9gH1PYlphMrQtHiA2ytcG1aqRBiKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3KtSo8cNPWOGf9Rgq3AMRS1j2GVqxCP56z9lKczK7xBDZF6C%2FyfOywy9ajFLOi34IJQwCRKQeEepqz3FRjnhivjf4F2PXqoTELuVbmDEAqfnMhHZXuyrawUagRuQicoNcqehotuyoC7XZ%2F1MSYmUW5jaYI%2B4f57GWN6CDnHQil0yz0ndNiEqRU1Mxjiof4sxvkXA5dQiF8IMqlcJ6i3vetUmkJDvCuko5t5oMYeffKtAX58FGXtO9lOKuynbQhyUUhSRocs2vv9NFDo2NXvdpufmyLF2W6B6%2FgbsrQameS6dbdn1wCI6t0vWYrxlVFfKp8EWL4B8%2FQ69qV6BWjHtbCo%2FBCDiJ91o4gI8VTJJWqOv5iYZFCSwLyfY9Z1iMU1tWW9nSCmUA%2FVodMm2%2Bs8MKRwBaiw%2Fn4sMy3k5gC76jnHYS8L1vJdgDKmr6Q%2FynD%2Frs23Cq5XP8HoWQWPs52cDrTgOmwd6sa32xIyeIyo4Vexl09LFc6srSpU0ZMKSTeNQVXNryWxF4napvZI3gWYQXGD%2FC5U8vhzZonT4ePQymTj%2FYu3kYUG8R%2BV9umKow8WeVyMAtLGfbTQQp%2Fx2QNsRd6N4JzewnZdJIy9XUISaGaTd4KPdGhdc7Or9yuBzSUHA2j4UAyLJNAeNNBzCPubDPBjqkAbmjP%2BAbAJg1ygJZM7RGgl2PNBfIkANSn4Bw6uVGLfnMnlPZTRkhzwVV33FBUQjnWcwvEBtSbgufga9qrtMzej%2BYXXWviesF0SJVRzL3zEnmSAEoObD6DEU7C7bQPQCNtidCuQcHKiF8jR7hec7ipPh0HWgscGD3hFDrrbld8DGKlW3G02h5dgb%2B%2Fk9BQEalTWLf8Jy5Ijnkkj81FDEBrG9Wtccb&X-Amz-Signature=cd988b7cc5458df2c4c763bb8967f51be8f5c701b78fd2d3ed22dee03c0767c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RHGRL2%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR5OurzS6TQMkSW%2F3mV0g0DT7jBR2fKaw6RjB316tvCAiBLCk3ORn3NiZdpFKRMwMJZo0DTNZE5NbPT62SBNy%2FJ9SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDGen7Tw9%2F8TDiDuKtwDQVqW8AYhCuBIRguI2SFCtBrntaZIJ5Fw2wKg7T0ePEgkDPMQhcgaRAw5Kp%2BKRh04kg3DFZXHU%2FyeiJLsng4GwoeiHdrytzgvqRuAf2ekLBIGj3Y%2BiTgV82qgO7IrH5ufl0bDwMF9H%2F%2BftxiT8PvrGF70Xl3kV%2B3mM6NIhgk66lPFUctZUUNm9H%2B9TLJhtoP%2FO7tp9G0JuNiwXMEi7HWingKPdqCNNc4w1p0Bg1AZaUvdwux3fnnINcT%2BNuB9gJGzVHsVe2FZoXXlqp6MS%2BNk3fyFLPYgODf40GQJxg0w9MOPrapEsNtI2GrlKhMWCnbvsyJPM7ltevO5SJcraoV74JHZs3rqJJ5vhh0d%2F1Ksl3%2FinQXwlmx%2Bn6NKOCbBzf7GP0VStQOJp8iAKGbZqtREBydx1Hw5%2F1b7EoRL2YjV9%2FAcA1i7urml4Q28HZswnU3OhWpTnIiGeX9jsXD%2Fvm5M1LJckM3UD7hNb1zi4%2BJeuTrnIX%2FS2HXhGjTJjPFVuzC9txGWCqZtRThr3%2FbL%2BwUgJNKnEnuoIPfZhuNosYvguEQleJNltj%2BgYGMMVnjK5i32TV3ZCwSpFEb4zTkn7CNkxjs6w0utQvBOlADk1%2B2v4BzlPdxWEeuqB%2Bs%2FtHIwqLqwzwY6pgHx7QX5JEYS%2BW6GgCrYNlIpDb%2BKNvoOz5SMzJd2dH7joRa1gGIMdzkg%2F8IwX42XHmsdlw7xyqEyOAJI5PLVF53wVv7dVuaNMLB00ZK%2FZO%2FcMKjbIFHnexD4Ag2UYKM2%2BPXZvNd8cLRuyqq2ZwGEEmMwB8rNdaSOJ6yqbMsgx0ou%2BEjlCIoWn2gOJFAC0bRU8mORHQPXUp6%2B7NC7xZ1tfC%2BODmwKLtUh&X-Amz-Signature=eec1fa7a0382f58bbdb104a3581c7a74b6e9e836a9bec737b6046b8e7949d050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Under `xacro:wheel` lets add the caster wheel at the front of the robot. The robot up until now should look like the image below

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCWQFTKZ%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrae3FlLCWWL5Vf0Hr4qn8%2B%2BgDM3XMZxE%2BYEvryylVfAiAX7Zc9CDTy9EmHAfdxDDCTp3es8U%2FwEt6vdtvbBlLmZyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAP40PcyqrcBYOL%2BAKtwDJgo6SF%2F%2Bj%2FBPzPnWZ7Ma3jdw2Agtx2jtKaiccdt5oikvtbFWsbyYyG%2Bek5bJw1qDsgXBTtRHPcTIsywuyODItAJ1fA7jhSAw1WrxDMnI%2FOQcy1%2BRcrKb%2Bq34wx7T82bhBXP1OqE6QjEY4zxvfOABJM6M1Vc%2F7q%2BN9y471YEG8eofO45z3%2BnkzE%2BSzyCcvdMVkwE6fsMqzLAkEWLz2UXFY0wNEZvK5WM1JhKe29pwBgI37croNSlNHPGhoKNGKqp1Own5C7gSYYrdUpCHNWa6%2Bl2fnejrwXhnzWOrjHn3YtEKtDw%2Bqd0flMRD0GgSA8syPuPUMXkt4P7zA0PYCQEOQegTiACVPE2QKzEssO3SgxiFY6JIVo8D08LGv5Z2XV%2BD51AnKcZKCsUdjSf%2FKX0gAreG06RWZkfzx9NleTaQgOcsWhnwwG7Spc%2BdnpIeeeWHGOsEvoVMAIU4sWsiuEzxsrbUywutBNrCZVjzpOZGZTKukcOdFFKj19L4GycOe10oDIxQA6zssaCzdhaXQjxe9EE%2FwMWOyQrzbOxT5z15mp8wpdgVwdF4z9zCFeocOBfgTk9d8%2FuDlj02lvMmuVaETlDVqXMTdagCO2Mi33fjjefFIEbqO3YKygwt4Wsw3riwzwY6pgFDiYZ6IPQZtWMKNbpPAMvjj8ztHwHMrDKXPsdFJClUqb8ndibuXcZaJLQbwRngtB6svU0LQSu8W%2B%2BawADDn78%2BfTdbFVSyMBSm2t0jc%2F8F%2BT%2F56VJe8FS%2FmdSKaF%2BzqS2mn5TvhhlvwuiH4a%2BVxOEYYayv%2FnuyOuW6MHjeLkh%2BzKrd4farxLvl3TsKJ09f7IEjS0Z%2B%2Bh3gCPhAPlL3EXGTud6NC77I&X-Amz-Signature=d135b07bf4ea3a5ec8824e95c5e86b9cdb1428636861af76b573a08683bf03a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RHGRL2%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR5OurzS6TQMkSW%2F3mV0g0DT7jBR2fKaw6RjB316tvCAiBLCk3ORn3NiZdpFKRMwMJZo0DTNZE5NbPT62SBNy%2FJ9SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDGen7Tw9%2F8TDiDuKtwDQVqW8AYhCuBIRguI2SFCtBrntaZIJ5Fw2wKg7T0ePEgkDPMQhcgaRAw5Kp%2BKRh04kg3DFZXHU%2FyeiJLsng4GwoeiHdrytzgvqRuAf2ekLBIGj3Y%2BiTgV82qgO7IrH5ufl0bDwMF9H%2F%2BftxiT8PvrGF70Xl3kV%2B3mM6NIhgk66lPFUctZUUNm9H%2B9TLJhtoP%2FO7tp9G0JuNiwXMEi7HWingKPdqCNNc4w1p0Bg1AZaUvdwux3fnnINcT%2BNuB9gJGzVHsVe2FZoXXlqp6MS%2BNk3fyFLPYgODf40GQJxg0w9MOPrapEsNtI2GrlKhMWCnbvsyJPM7ltevO5SJcraoV74JHZs3rqJJ5vhh0d%2F1Ksl3%2FinQXwlmx%2Bn6NKOCbBzf7GP0VStQOJp8iAKGbZqtREBydx1Hw5%2F1b7EoRL2YjV9%2FAcA1i7urml4Q28HZswnU3OhWpTnIiGeX9jsXD%2Fvm5M1LJckM3UD7hNb1zi4%2BJeuTrnIX%2FS2HXhGjTJjPFVuzC9txGWCqZtRThr3%2FbL%2BwUgJNKnEnuoIPfZhuNosYvguEQleJNltj%2BgYGMMVnjK5i32TV3ZCwSpFEb4zTkn7CNkxjs6w0utQvBOlADk1%2B2v4BzlPdxWEeuqB%2Bs%2FtHIwqLqwzwY6pgHx7QX5JEYS%2BW6GgCrYNlIpDb%2BKNvoOz5SMzJd2dH7joRa1gGIMdzkg%2F8IwX42XHmsdlw7xyqEyOAJI5PLVF53wVv7dVuaNMLB00ZK%2FZO%2FcMKjbIFHnexD4Ag2UYKM2%2BPXZvNd8cLRuyqq2ZwGEEmMwB8rNdaSOJ6yqbMsgx0ou%2BEjlCIoWn2gOJFAC0bRU8mORHQPXUp6%2B7NC7xZ1tfC%2BODmwKLtUh&X-Amz-Signature=8a1a83370b641518b4407222edc453f2d2be17ff6a5f6fb7090d25d9160954c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}code up until this point{{< /markdownify >}}</summary>
  
<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX7EUUIH%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCipdbUr%2F4g4OuNnCxlN%2F91M6%2B4zsDYbkn5MWUGlcEXtQIgT7CB0EhNcce9QHtTg247EbKsdNwP6j6tmMF%2BN53zOG4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzwMzv75XtBIdEqKSrcAzp9zhbcwt6%2FtXHJ0bqAt9Lt7HGbts3hWx84ludQE3A26u6ywmu4td0sELHnIcDAOMMNEGml%2BVyKJIfW%2B93muzTSG7w3yDcQ3%2BbDU2Shc%2F53Fy0nHabfgX56OHBVJbTW%2FukaiiUkA0mmBSTy3cS3MQ98TGtCmkCsQ6Gp1DxGP7mNEMNNMdupyqeM4pD4mL8QInduV9r2udHl4wpu1L2EqpLr9X54jhYorzD0AptqCEkc8Kx7YWJlFGJajLSPHvtI44BXVSk0kP6jUrOcUESv9QIB9fd10Lu3VE1qJAhTDO3LBthehG4M8QAoVvpqULI3bj52jKjJ%2Bu2CE1gF1IsaICRv4SA40nJx5v0SB2eZ4XI6myNHxqj37CYBZHFaqN6ym0jaAS9hsrf%2BCbD%2FT10dAPLk2Kdlu3FSsvcdJOcMaSAnfbOMAQKe2JiiLVkKWfBN1EOpygp4qbimCZg3Iy20TIrpArJ8%2FrLuR5kQbjbh%2FOeMOxtqb628PZJ1cNX9RlW41%2Fn%2BYUkOcsp9ogzuA%2FAPS7vF6oYfY%2FPzrwGa93H8aMKADbVT2gJ1orkhHxE5YUnWodqqrNsX86kBM4K3pj3GV25YO3znEo6DVyleGdFn8v%2FnwMQFNNhD6a4ZzTiVMLa7sM8GOqUB%2BJ5PfhCJOPRHbXwPWgBLKH%2F%2Bhz2a%2F1UAIuwGUxiSEYcqUs1LXP1eh%2FquOqLbitoiDUo%2B6vemtiHJsMHAjOPS7mq648W8bnBHtCP0ilIApNqxX7xot0Jwu6qIe%2B2%2FV3nImWlHLvdc62%2FiaVY6o6rVC%2BwCwc8%2FhLkes5N24O%2FVugcP0jW1GY%2BYMhFseW00DCkD3hpraWPrSxUNifOmTvpuSAXHIIDh&X-Amz-Signature=f2f9dc45d4c40d91d5b59132212d3e9c980976c778154ce43ea6dba969439dd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

</details>



### Adding Collision and Inertia

Next lets add collision and inertia to our robot. These attributes will be used in the robot simulator later in this guide.

To start lets make some `xacro:macro` to avoid repetitive code to make box, cylinder, and sphere inertia.

Place this under the constants section.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RHGRL2%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR5OurzS6TQMkSW%2F3mV0g0DT7jBR2fKaw6RjB316tvCAiBLCk3ORn3NiZdpFKRMwMJZo0DTNZE5NbPT62SBNy%2FJ9SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDGen7Tw9%2F8TDiDuKtwDQVqW8AYhCuBIRguI2SFCtBrntaZIJ5Fw2wKg7T0ePEgkDPMQhcgaRAw5Kp%2BKRh04kg3DFZXHU%2FyeiJLsng4GwoeiHdrytzgvqRuAf2ekLBIGj3Y%2BiTgV82qgO7IrH5ufl0bDwMF9H%2F%2BftxiT8PvrGF70Xl3kV%2B3mM6NIhgk66lPFUctZUUNm9H%2B9TLJhtoP%2FO7tp9G0JuNiwXMEi7HWingKPdqCNNc4w1p0Bg1AZaUvdwux3fnnINcT%2BNuB9gJGzVHsVe2FZoXXlqp6MS%2BNk3fyFLPYgODf40GQJxg0w9MOPrapEsNtI2GrlKhMWCnbvsyJPM7ltevO5SJcraoV74JHZs3rqJJ5vhh0d%2F1Ksl3%2FinQXwlmx%2Bn6NKOCbBzf7GP0VStQOJp8iAKGbZqtREBydx1Hw5%2F1b7EoRL2YjV9%2FAcA1i7urml4Q28HZswnU3OhWpTnIiGeX9jsXD%2Fvm5M1LJckM3UD7hNb1zi4%2BJeuTrnIX%2FS2HXhGjTJjPFVuzC9txGWCqZtRThr3%2FbL%2BwUgJNKnEnuoIPfZhuNosYvguEQleJNltj%2BgYGMMVnjK5i32TV3ZCwSpFEb4zTkn7CNkxjs6w0utQvBOlADk1%2B2v4BzlPdxWEeuqB%2Bs%2FtHIwqLqwzwY6pgHx7QX5JEYS%2BW6GgCrYNlIpDb%2BKNvoOz5SMzJd2dH7joRa1gGIMdzkg%2F8IwX42XHmsdlw7xyqEyOAJI5PLVF53wVv7dVuaNMLB00ZK%2FZO%2FcMKjbIFHnexD4Ag2UYKM2%2BPXZvNd8cLRuyqq2ZwGEEmMwB8rNdaSOJ6yqbMsgx0ou%2BEjlCIoWn2gOJFAC0bRU8mORHQPXUp6%2B7NC7xZ1tfC%2BODmwKLtUh&X-Amz-Signature=28d580936b889bfceec31f4d7c49b637b22fa773d255ca8574175044da26f97e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Next go into our `base_link` and add the collision and inertia tags.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "12-16","18-18"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NFZ2CXY%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC57joI%2Foq7O0Cl%2FmHcI3Xoa1c5pm5muYtFpWt829UbjAIgf9X%2BUM1TdEYy%2FRC8Uh4XWi6cOEcgUv3HnPBj8D3WUXUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFj1KeBj6kiGWaDZircAyhtsIT3kxAfYsVcAiKAhPJ%2BbyAU29TyVwZx4GNAYrKT4HO5Bsc4P%2BKi93e1%2BVUKruWj9Z9QI4aX9VeQg3EHM1L%2FarwmCK1LMQTIh2kkptwj5cBWAV2j4k4ShhGOyAert1zG6xtfiBVe7l7T90STwv4FrzRwVe1NWxWiqnTzF5bD%2FBg2eqPr08SQ8hlpC09%2F1mIrQhvgWdtI9xMXUX0EttqU1l1t7%2F2PESha9tkZ23sIvsfMKlp712Br1gUTw37Y2SjgeAEvJuLtJtwsbgm6QHKaE8X3pmfskYUFpdyepokVZ8XfI%2FsrHiLpnqOTG90WEJkYGvKcR1w7chE8SoK8IHoJ3PXuaJIjingGxQYNRdVRFbzIFVggej%2BKwixtHMlGNOnRepBnLDgKxW479jpUS0bEfb2msBpRS3mbRv%2BVIuPbtYs%2BakmPLP6m2ilX7FPkIlK16RDzvFPo7TLUA8W%2BbXrt%2BHUx97t9QV%2BVUAemqFQAo%2FoNkm%2FLpjGjxIfl7PkEvnRW3dQzgXPGdSIQINrEPKm4QnKlAOLtrw0I8Vy6skWhLtiD0SrnypKQaz06eARonche32fLqbf%2BMr5reQ1rcWZhHWN4ta61F8ywsHmFzZu7NF59hKQnL%2FjG8dSBMNG4sM8GOqUBieDwaw1rhrrOYvH%2F6eHlFkTRamHQqW2Mf1F1R7rQ%2BEIaC8qmIkybBnyvClgivtinl%2F560fso4j1UWeOJtSSqJM5fcnUlLpyGI6T8aoRk%2Bkf9MvQyeLGDKlNzB8tusYAfYOIo4l8zR5O7anqx0rlEZK47eYhe%2B%2B2dFYYHJ0SKWlUfxqe%2FfcVrGfkMSdFYy2K3NhmErWRN21oSkOjo7S3LDNpMDsZk&X-Amz-Signature=f440c84d45b501ba8159caeb27881993818d2f95237076a5e1684d6d0bad0fc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "12-19"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZARBZ53L%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNp1Cs87OnBkMOdz%2FX5RR4MRbywj7ZPauKYrbaXWI6ZgIhAIdT5lRTJBMPaJMHikNOQRGfPMw8QqEgMKya42EZKrtcKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBn%2F%2BqvCoMIaFgaeEq3AO4SMaDytmag%2BBR6riF9i5Zbtr9J0Iygz8yjRyXTwBMQ15LQSUDqdPgRp6FowkWmZo6Ofx4YmBN0157amHwb4qPAIddJTkU8LA%2FSSJ82PNh7NOEtADKQKOx6AFNLYfWUiYs3bo7AsEfhKzlTBEqbgAzfdgXYlbdLbUtI5gSZjKhDJ%2BNwFWmaefgfvNqkAoSnl2YedlTwkQDwUJdtC2AFlwGDCQnzFNAL%2F5NlFKxykrVKwGPganFqfZ%2BMbSWBpBGJWauWor6k0dTGoduMPaFg6%2FhbIvwoQowgDW3rfFc5m34QmQzQ8svRrsHxy5s2R0UUlwY0ki%2Bcnc2dm4LTJz7cYFsqchnr8RnCE%2BMT4dPT6Vjk4AhPug8pjlI5tk%2BYLlrIYcwLNxC%2F5hzfQfKepxwxs0w8VZ%2FUabLqqFcZvn7Hj1C3rRM2voy8w6F8h0dYMH0WJ9XVfEtStnr5rF5fU2UScmEj%2FB64qSGtUzPPD3U4BClJ9Tz3M0vY71zvw3PyTaHXiSaapWPeltQDKDfoIvcK1b%2F4O%2ByTVQ3%2BA1HnEynLkh450K4jM7dcJReN4%2BKOrLR0pVac%2FYhgo196D4WyVpaFljrNX4v1CbZO5%2BgbBxHQ8Xw7jwzz4ba5X2n5ryLTjDluLDPBjqkAeg9Ot9gXctS%2Bn9thZaQjnRmtn6PtofHqpjMxmVtVC4elixBneWGNwd00p05g7B%2FtLqomEtSgEQvtrwCp6b%2FPxg8FjHo9993NGbVGTmZFyiycZPA7NWAZbmILPhqFwM2d91S5eqWjpPMIViQGyofJHt3gyTEwOy3736zcrQQH%2BrIY%2FBueVFxtdr1M%2FbOnHHCi1jz3uOtiMz4SNsm23fnDuCAYKbe&X-Amz-Signature=76ba0094359353cf56acff8a775c50740efdf196b0855e4d9f1a1ffacd90a525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

and Same for the caster wheel:

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "12-19"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4VI2H3T%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC57yveBKU8M1OoBaLe0db4gFjWQZbqTV7mhNINbijH3AIhAJrvkkPUJx9qkQEg%2FD4ETfPndYBRIwLcIma888xXHVuKKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFAfs1%2BhQm3F%2B%2B13kq3AN2%2Fp%2BdHedm9QtjCVxw1m4NgxdJ0v0RjyHpfOaDhAH0YCwbedwoPkNEqT1Vmp73RP5wk0Lt8dxPd%2BYuy4KrMp5b3HfFV0XmaQnl%2FUG7oLcSFceuY9W7LhCMONyAXSC7ekkZXGg4wP3HyxgQ%2FyH1yr0QNkoGKHd6l8rK7PaW09t50gO6R%2BNqZAT5UNvZTi%2BQVylr1I1fenOg%2BVZdf1omGH2TWWp%2F9Qonwari%2FQqS1jX1U9zmQn8g%2BY3PSWxcje91BBTMm010k5el8PUG1nPvWpRj8%2FsA756ukU5xGVRyXU%2BGyuxLfAUHH1KZTbFAVpcIgB0NJ6vOMBOyQIfLZo64dOCYVfuRGbQy7bgm6StJwFuxb%2FeZ02zRFNlhM2fKMShTokkNQI6zA92QwLaA0i%2F0uITzUPrMczFx9lKMGb%2FoGp1DWVULWT5gmeVphL%2FYAGGxnbpyFLIMd%2Fsw9w1Apk2SklGaU8nbDHZ0HjfVjSyigVOztz3a0oif4bZrc3czkWNUeR42fktEl0fTTfFWJy%2BfEwlZX63oV7fP9%2Ba0NluP0oulmjoWHnfdzBm1MmJDBR2gBKbUa89fCuGjWyJc1WmLUt8vFJL98eqQP8ZfRlxZy0f3zJHTZ6MswWR7CoiN0TDUuLDPBjqkAYmXfcaTsHzrxe4Ypuvo7ndRAZ31RVUa999F71GDvyf6R4IfC%2FEQa3B5pkjSXp8Cw9Yy92NR%2Fgr12GglxgWU334TBHzverGdM0rGrtLm6i%2Fvj4yvadBZ2LSF6hJiWWsUUOBtViPqMcCet7CydC%2BKlJE8NlQaB%2BZW6oDbCDi0zwqCRdDb4TXW95745Dczk343LDGBqz3o0uMOZsVsgbFsGyN%2FH9L%2B&X-Amz-Signature=04992e42f2811068fa54c5aa9297300346108c57b8a789596c09d418e66f4c7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RHGRL2%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR5OurzS6TQMkSW%2F3mV0g0DT7jBR2fKaw6RjB316tvCAiBLCk3ORn3NiZdpFKRMwMJZo0DTNZE5NbPT62SBNy%2FJ9SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDGen7Tw9%2F8TDiDuKtwDQVqW8AYhCuBIRguI2SFCtBrntaZIJ5Fw2wKg7T0ePEgkDPMQhcgaRAw5Kp%2BKRh04kg3DFZXHU%2FyeiJLsng4GwoeiHdrytzgvqRuAf2ekLBIGj3Y%2BiTgV82qgO7IrH5ufl0bDwMF9H%2F%2BftxiT8PvrGF70Xl3kV%2B3mM6NIhgk66lPFUctZUUNm9H%2B9TLJhtoP%2FO7tp9G0JuNiwXMEi7HWingKPdqCNNc4w1p0Bg1AZaUvdwux3fnnINcT%2BNuB9gJGzVHsVe2FZoXXlqp6MS%2BNk3fyFLPYgODf40GQJxg0w9MOPrapEsNtI2GrlKhMWCnbvsyJPM7ltevO5SJcraoV74JHZs3rqJJ5vhh0d%2F1Ksl3%2FinQXwlmx%2Bn6NKOCbBzf7GP0VStQOJp8iAKGbZqtREBydx1Hw5%2F1b7EoRL2YjV9%2FAcA1i7urml4Q28HZswnU3OhWpTnIiGeX9jsXD%2Fvm5M1LJckM3UD7hNb1zi4%2BJeuTrnIX%2FS2HXhGjTJjPFVuzC9txGWCqZtRThr3%2FbL%2BwUgJNKnEnuoIPfZhuNosYvguEQleJNltj%2BgYGMMVnjK5i32TV3ZCwSpFEb4zTkn7CNkxjs6w0utQvBOlADk1%2B2v4BzlPdxWEeuqB%2Bs%2FtHIwqLqwzwY6pgHx7QX5JEYS%2BW6GgCrYNlIpDb%2BKNvoOz5SMzJd2dH7joRa1gGIMdzkg%2F8IwX42XHmsdlw7xyqEyOAJI5PLVF53wVv7dVuaNMLB00ZK%2FZO%2FcMKjbIFHnexD4Ag2UYKM2%2BPXZvNd8cLRuyqq2ZwGEEmMwB8rNdaSOJ6yqbMsgx0ou%2BEjlCIoWn2gOJFAC0bRU8mORHQPXUp6%2B7NC7xZ1tfC%2BODmwKLtUh&X-Amz-Signature=2b8b114cdfaca745f3615609790899ef8efbd2304fd9816b0c6869e48d5c3307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**final code:**{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RHGRL2%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR5OurzS6TQMkSW%2F3mV0g0DT7jBR2fKaw6RjB316tvCAiBLCk3ORn3NiZdpFKRMwMJZo0DTNZE5NbPT62SBNy%2FJ9SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDGen7Tw9%2F8TDiDuKtwDQVqW8AYhCuBIRguI2SFCtBrntaZIJ5Fw2wKg7T0ePEgkDPMQhcgaRAw5Kp%2BKRh04kg3DFZXHU%2FyeiJLsng4GwoeiHdrytzgvqRuAf2ekLBIGj3Y%2BiTgV82qgO7IrH5ufl0bDwMF9H%2F%2BftxiT8PvrGF70Xl3kV%2B3mM6NIhgk66lPFUctZUUNm9H%2B9TLJhtoP%2FO7tp9G0JuNiwXMEi7HWingKPdqCNNc4w1p0Bg1AZaUvdwux3fnnINcT%2BNuB9gJGzVHsVe2FZoXXlqp6MS%2BNk3fyFLPYgODf40GQJxg0w9MOPrapEsNtI2GrlKhMWCnbvsyJPM7ltevO5SJcraoV74JHZs3rqJJ5vhh0d%2F1Ksl3%2FinQXwlmx%2Bn6NKOCbBzf7GP0VStQOJp8iAKGbZqtREBydx1Hw5%2F1b7EoRL2YjV9%2FAcA1i7urml4Q28HZswnU3OhWpTnIiGeX9jsXD%2Fvm5M1LJckM3UD7hNb1zi4%2BJeuTrnIX%2FS2HXhGjTJjPFVuzC9txGWCqZtRThr3%2FbL%2BwUgJNKnEnuoIPfZhuNosYvguEQleJNltj%2BgYGMMVnjK5i32TV3ZCwSpFEb4zTkn7CNkxjs6w0utQvBOlADk1%2B2v4BzlPdxWEeuqB%2Bs%2FtHIwqLqwzwY6pgHx7QX5JEYS%2BW6GgCrYNlIpDb%2BKNvoOz5SMzJd2dH7joRa1gGIMdzkg%2F8IwX42XHmsdlw7xyqEyOAJI5PLVF53wVv7dVuaNMLB00ZK%2FZO%2FcMKjbIFHnexD4Ag2UYKM2%2BPXZvNd8cLRuyqq2ZwGEEmMwB8rNdaSOJ6yqbMsgx0ou%2BEjlCIoWn2gOJFAC0bRU8mORHQPXUp6%2B7NC7xZ1tfC%2BODmwKLtUh&X-Amz-Signature=9c80fc576e3b6ab4516988e4c06150ada0e212d0ad6019a27748c0369fd3948e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}


#### Outputs:

| **Name**             | **Type** |
| -------------------- | -------- |
| `/tf`                |          |
| `/robot_description` |          |

#### Params:

| **Name**            | **Type** |
| ------------------- | -------- |
| `robot_description` | file     |
| `use_sim_time`      | bool     |

#### description:

Node that takes in the `urdf` and puts it into ROS

Takes 2 major inputs:

- `urdf` file and publishes all transforms in the `/tf` topic
- `/joint_states` topic that takes in all the states of joints in the `urdf`

{{% /alert %}}

{{% alert icon=”👾” context="success" %}}

### **New Node** **`joint`**_**`_`**_**`state_publisher_gui`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KZ3KI25%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGinVPu7LP9ixv4z%2F%2B6ht9WAjV54ysDqeuZAEthwMYMRAiEA6igp2NxLBPLSaw94tjXKDtsS9jBrlTHmvZSMHJ1vrbYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPO2LXzz9zRlMsqMmSrcA%2BMElPr6ts%2BLjkJkPY%2FSknWsaMoV9idpP%2FQlwnvV2Xajpt9EMsPlnRLgJBIV9mDRgt2y%2Bt1Ti7yOp1kGVwxcBhKOrY3OMl1WvcHe0qt5T3x8V7eP%2Febypzhmi%2BKsoYUQLLuOoPYafHBNa7qyaLM37ikuXlD%2BjupLHYQdSkqbfsU9fZPZjU9l%2BONiqyv8Y38Xf%2Fl1UkApBfZH3Qvkte01T4gjvxVEL8ErA3xPGNE%2FUbL1Gy3A61%2B7snD7jg3M3zkGvtWELxrQ2idS%2BDlH9uw4q8n4kMgxoWnHRpwa5cG%2FGo56E7DFVe9nQF3GJM%2FNmh2JfOgUawCpDmHQbKbIkFUBuoNUsnkUrdQZVpt4D0S8LRLXB%2BY0o61eyhQm3mKEH7HlVG0yNNa4SgKyWT3cujb5zFSM6wk%2F4CDsv4rMkOHF5tIqQPcLjR2e2Kc8knyvjmX2Qe%2FTlNNKIMRYd0XCE4zOWTZcHWczEy%2B6GW7O3pNR%2B8w752Ni%2FTDBMLpNAvJSdWntUK5%2B%2BK30%2FHG4r%2Fz%2Bq9g6D1HCPWhk9TaL3f38%2FlnWgyMdDpQwTEclwUMwNoxT6ojRkaQvKiJU2oihtnpk%2BDhuZUOYFFxywlQ47EllGb70NUGYZiyYIMVD7vu45nDwMMm5sM8GOqUBQ%2B8KO65UiYASjT%2BL9avWZ5gNyMblD9NNGEXsRJTOBUXCFQGAbYhgqRhpmeKXgvj6nwKtK0lfAYrtx3fECLgjxL4lT5wk%2BL9mmmHXwLh7PNiV55CG8IFAmT5CfAwn5Fwmtccbu6xqm1AwvFxfHgHyCL3RNrAJR7zrsbMn01Hxyqvc3DyhAwW4W%2BW79ZxXhpCHbIKalzRWTBqVV6hb5Dj6W9JEsyDa&X-Amz-Signature=f24ac918a91ff439333d4e1b09bbadad731b069f7935cf7080fcf5625a8be432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

| **Name**             | **Type** |
| -------------------- | -------- |
| `/robot_description` |          |

#### Outputs:

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

#### description:

lets you debug your `urdf` to see if all your joints work correctly.

Takes `/robot_description` from `robot_state_publisher` and outputs `/joint_states` with adjustable sliders

designed to be replaced by a physical robot or a simulated robot node

{{% /alert %}}

## Current Node diagram

With the two nodes we are going to make this diagram:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KZ3KI25%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGinVPu7LP9ixv4z%2F%2B6ht9WAjV54ysDqeuZAEthwMYMRAiEA6igp2NxLBPLSaw94tjXKDtsS9jBrlTHmvZSMHJ1vrbYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPO2LXzz9zRlMsqMmSrcA%2BMElPr6ts%2BLjkJkPY%2FSknWsaMoV9idpP%2FQlwnvV2Xajpt9EMsPlnRLgJBIV9mDRgt2y%2Bt1Ti7yOp1kGVwxcBhKOrY3OMl1WvcHe0qt5T3x8V7eP%2Febypzhmi%2BKsoYUQLLuOoPYafHBNa7qyaLM37ikuXlD%2BjupLHYQdSkqbfsU9fZPZjU9l%2BONiqyv8Y38Xf%2Fl1UkApBfZH3Qvkte01T4gjvxVEL8ErA3xPGNE%2FUbL1Gy3A61%2B7snD7jg3M3zkGvtWELxrQ2idS%2BDlH9uw4q8n4kMgxoWnHRpwa5cG%2FGo56E7DFVe9nQF3GJM%2FNmh2JfOgUawCpDmHQbKbIkFUBuoNUsnkUrdQZVpt4D0S8LRLXB%2BY0o61eyhQm3mKEH7HlVG0yNNa4SgKyWT3cujb5zFSM6wk%2F4CDsv4rMkOHF5tIqQPcLjR2e2Kc8knyvjmX2Qe%2FTlNNKIMRYd0XCE4zOWTZcHWczEy%2B6GW7O3pNR%2B8w752Ni%2FTDBMLpNAvJSdWntUK5%2B%2BK30%2FHG4r%2Fz%2Bq9g6D1HCPWhk9TaL3f38%2FlnWgyMdDpQwTEclwUMwNoxT6ojRkaQvKiJU2oihtnpk%2BDhuZUOYFFxywlQ47EllGb70NUGYZiyYIMVD7vu45nDwMMm5sM8GOqUBQ%2B8KO65UiYASjT%2BL9avWZ5gNyMblD9NNGEXsRJTOBUXCFQGAbYhgqRhpmeKXgvj6nwKtK0lfAYrtx3fECLgjxL4lT5wk%2BL9mmmHXwLh7PNiV55CG8IFAmT5CfAwn5Fwmtccbu6xqm1AwvFxfHgHyCL3RNrAJR7zrsbMn01Hxyqvc3DyhAwW4W%2BW79ZxXhpCHbIKalzRWTBqVV6hb5Dj6W9JEsyDa&X-Amz-Signature=984784dd7c173907bbdb7edd6defc155c6ea78f24663d0e33d29fb48c2c381d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KZ3KI25%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGinVPu7LP9ixv4z%2F%2B6ht9WAjV54ysDqeuZAEthwMYMRAiEA6igp2NxLBPLSaw94tjXKDtsS9jBrlTHmvZSMHJ1vrbYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPO2LXzz9zRlMsqMmSrcA%2BMElPr6ts%2BLjkJkPY%2FSknWsaMoV9idpP%2FQlwnvV2Xajpt9EMsPlnRLgJBIV9mDRgt2y%2Bt1Ti7yOp1kGVwxcBhKOrY3OMl1WvcHe0qt5T3x8V7eP%2Febypzhmi%2BKsoYUQLLuOoPYafHBNa7qyaLM37ikuXlD%2BjupLHYQdSkqbfsU9fZPZjU9l%2BONiqyv8Y38Xf%2Fl1UkApBfZH3Qvkte01T4gjvxVEL8ErA3xPGNE%2FUbL1Gy3A61%2B7snD7jg3M3zkGvtWELxrQ2idS%2BDlH9uw4q8n4kMgxoWnHRpwa5cG%2FGo56E7DFVe9nQF3GJM%2FNmh2JfOgUawCpDmHQbKbIkFUBuoNUsnkUrdQZVpt4D0S8LRLXB%2BY0o61eyhQm3mKEH7HlVG0yNNa4SgKyWT3cujb5zFSM6wk%2F4CDsv4rMkOHF5tIqQPcLjR2e2Kc8knyvjmX2Qe%2FTlNNKIMRYd0XCE4zOWTZcHWczEy%2B6GW7O3pNR%2B8w752Ni%2FTDBMLpNAvJSdWntUK5%2B%2BK30%2FHG4r%2Fz%2Bq9g6D1HCPWhk9TaL3f38%2FlnWgyMdDpQwTEclwUMwNoxT6ojRkaQvKiJU2oihtnpk%2BDhuZUOYFFxywlQ47EllGb70NUGYZiyYIMVD7vu45nDwMMm5sM8GOqUBQ%2B8KO65UiYASjT%2BL9avWZ5gNyMblD9NNGEXsRJTOBUXCFQGAbYhgqRhpmeKXgvj6nwKtK0lfAYrtx3fECLgjxL4lT5wk%2BL9mmmHXwLh7PNiV55CG8IFAmT5CfAwn5Fwmtccbu6xqm1AwvFxfHgHyCL3RNrAJR7zrsbMn01Hxyqvc3DyhAwW4W%2BW79ZxXhpCHbIKalzRWTBqVV6hb5Dj6W9JEsyDa&X-Amz-Signature=380ef831adf811fa0398261d3d45772ac25849034d94d555f2876847688faa9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KZ3KI25%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGinVPu7LP9ixv4z%2F%2B6ht9WAjV54ysDqeuZAEthwMYMRAiEA6igp2NxLBPLSaw94tjXKDtsS9jBrlTHmvZSMHJ1vrbYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPO2LXzz9zRlMsqMmSrcA%2BMElPr6ts%2BLjkJkPY%2FSknWsaMoV9idpP%2FQlwnvV2Xajpt9EMsPlnRLgJBIV9mDRgt2y%2Bt1Ti7yOp1kGVwxcBhKOrY3OMl1WvcHe0qt5T3x8V7eP%2Febypzhmi%2BKsoYUQLLuOoPYafHBNa7qyaLM37ikuXlD%2BjupLHYQdSkqbfsU9fZPZjU9l%2BONiqyv8Y38Xf%2Fl1UkApBfZH3Qvkte01T4gjvxVEL8ErA3xPGNE%2FUbL1Gy3A61%2B7snD7jg3M3zkGvtWELxrQ2idS%2BDlH9uw4q8n4kMgxoWnHRpwa5cG%2FGo56E7DFVe9nQF3GJM%2FNmh2JfOgUawCpDmHQbKbIkFUBuoNUsnkUrdQZVpt4D0S8LRLXB%2BY0o61eyhQm3mKEH7HlVG0yNNa4SgKyWT3cujb5zFSM6wk%2F4CDsv4rMkOHF5tIqQPcLjR2e2Kc8knyvjmX2Qe%2FTlNNKIMRYd0XCE4zOWTZcHWczEy%2B6GW7O3pNR%2B8w752Ni%2FTDBMLpNAvJSdWntUK5%2B%2BK30%2FHG4r%2Fz%2Bq9g6D1HCPWhk9TaL3f38%2FlnWgyMdDpQwTEclwUMwNoxT6ojRkaQvKiJU2oihtnpk%2BDhuZUOYFFxywlQ47EllGb70NUGYZiyYIMVD7vu45nDwMMm5sM8GOqUBQ%2B8KO65UiYASjT%2BL9avWZ5gNyMblD9NNGEXsRJTOBUXCFQGAbYhgqRhpmeKXgvj6nwKtK0lfAYrtx3fECLgjxL4lT5wk%2BL9mmmHXwLh7PNiV55CG8IFAmT5CfAwn5Fwmtccbu6xqm1AwvFxfHgHyCL3RNrAJR7zrsbMn01Hxyqvc3DyhAwW4W%2BW79ZxXhpCHbIKalzRWTBqVV6hb5Dj6W9JEsyDa&X-Amz-Signature=9845e087ef88fcf6c1887ca1ecd0b9c2d508dba4c7c1b6c8d6fc10549a49f9cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKHZUQPH%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEiXjiwB4NmZpbu6QDdLOUSC%2FxG89zx1CdoIQMTdD7kJAiEAuAkvukw0BI83j64jHYR7bMwzJ75sDlFjAJiQTFYDJiUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHElZzr1bT0NpCUwSrcA0omjuv39XQGxhGVNCAHNVqGjAR2aoFjTAP8044PHZbUqor%2BWqjZ37n2OvJJI0r9fbhd7SBbed68MkgtkDIXAwzrZkjf0lqwkUAd46rkw7sa4M%2Bps9TqnibV3T3HAZUPiEYjh%2FTe%2FPAPmVc7AD7BHIpobnI9uh6Tpcd8edjPd2u0lo2d%2FnxQP3%2BQApUCg%2FzHrv0dhbObQTSIlcj%2FezfvY2aN8dt4xZc%2FInngMSoOcy3irtVKZ5ZEsdXbKtcJkimQsmIYnpgKhygwC8wsbEh4AhHNBJdRzRc2FsywZzujsb%2FNi4Fe1KP%2Bip8UyB9QapbJbq7vB3uPezxbrVKLYhlg1b5DzipGJSoL5vqDY3yvdaB8jv6VCM1PDUV24cmQXG4QUxGMizXFWGLlVgKI5KsEzDhdgNWe8kyxa6hJSDwAAySGE0EOMm%2Bn%2B55ytArKhQQImFbOQ05r4doCgL1jJZo9oKeMA1IAWd36jsvhU%2Fugwo18xq%2B52gqIVlBjctwqFvsgYkxU5MldCD%2FurdhDWRVa0CnYBFMwhWD%2FTaeHubD21dhAQC2sgoG1ClpSp7xJpWmZAmT%2BXhBX9erJ1efUutm8rHUrTGZ78xyKVA4C0Dtim2D2UIM1O6Sn5axzBFe3MIK7sM8GOqUBFl7yTfGu%2FblEKWaWuXYRM26JDv0zeFbzBvg8o5beq1k5WZ7P92jYO18VUwStnPnjkaJM0DZVrsms%2FUI%2BTYmhxs391EJRJtZhh8BCjUVIRYQh%2BCyLzF6Rp2ipLat%2F%2FfLpettR%2FnUrRlOMrbsgpFN2Ru%2FpFOjlwpbH7s0KKd%2BANj%2BzhYfvdNB%2FbgAov%2Fg%2BDh2AzuJuTxhlHFw5wNFqGfd%2BalQvV0R2&X-Amz-Signature=a34215a7de612b34ccbed371e36545fa6b3d1899a66208eefcc0ec89399cf4e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KZ3KI25%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGinVPu7LP9ixv4z%2F%2B6ht9WAjV54ysDqeuZAEthwMYMRAiEA6igp2NxLBPLSaw94tjXKDtsS9jBrlTHmvZSMHJ1vrbYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPO2LXzz9zRlMsqMmSrcA%2BMElPr6ts%2BLjkJkPY%2FSknWsaMoV9idpP%2FQlwnvV2Xajpt9EMsPlnRLgJBIV9mDRgt2y%2Bt1Ti7yOp1kGVwxcBhKOrY3OMl1WvcHe0qt5T3x8V7eP%2Febypzhmi%2BKsoYUQLLuOoPYafHBNa7qyaLM37ikuXlD%2BjupLHYQdSkqbfsU9fZPZjU9l%2BONiqyv8Y38Xf%2Fl1UkApBfZH3Qvkte01T4gjvxVEL8ErA3xPGNE%2FUbL1Gy3A61%2B7snD7jg3M3zkGvtWELxrQ2idS%2BDlH9uw4q8n4kMgxoWnHRpwa5cG%2FGo56E7DFVe9nQF3GJM%2FNmh2JfOgUawCpDmHQbKbIkFUBuoNUsnkUrdQZVpt4D0S8LRLXB%2BY0o61eyhQm3mKEH7HlVG0yNNa4SgKyWT3cujb5zFSM6wk%2F4CDsv4rMkOHF5tIqQPcLjR2e2Kc8knyvjmX2Qe%2FTlNNKIMRYd0XCE4zOWTZcHWczEy%2B6GW7O3pNR%2B8w752Ni%2FTDBMLpNAvJSdWntUK5%2B%2BK30%2FHG4r%2Fz%2Bq9g6D1HCPWhk9TaL3f38%2FlnWgyMdDpQwTEclwUMwNoxT6ojRkaQvKiJU2oihtnpk%2BDhuZUOYFFxywlQ47EllGb70NUGYZiyYIMVD7vu45nDwMMm5sM8GOqUBQ%2B8KO65UiYASjT%2BL9avWZ5gNyMblD9NNGEXsRJTOBUXCFQGAbYhgqRhpmeKXgvj6nwKtK0lfAYrtx3fECLgjxL4lT5wk%2BL9mmmHXwLh7PNiV55CG8IFAmT5CfAwn5Fwmtccbu6xqm1AwvFxfHgHyCL3RNrAJR7zrsbMn01Hxyqvc3DyhAwW4W%2BW79ZxXhpCHbIKalzRWTBqVV6hb5Dj6W9JEsyDa&X-Amz-Signature=3c278ce1970ff75d8b32e37c0e1f8cbc713670741efb01953fd495106fcb9ba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Move config.rviz

<details>
  <summary>{{< markdownify >}}What is rviz?{{< /markdownify >}}</summary>
  
TODO: explain rviz better (say how it is like ros2 echo but visual)

</details>



create `rviz` folder in `mbot_pkg` and move the `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KZ3KI25%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGinVPu7LP9ixv4z%2F%2B6ht9WAjV54ysDqeuZAEthwMYMRAiEA6igp2NxLBPLSaw94tjXKDtsS9jBrlTHmvZSMHJ1vrbYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPO2LXzz9zRlMsqMmSrcA%2BMElPr6ts%2BLjkJkPY%2FSknWsaMoV9idpP%2FQlwnvV2Xajpt9EMsPlnRLgJBIV9mDRgt2y%2Bt1Ti7yOp1kGVwxcBhKOrY3OMl1WvcHe0qt5T3x8V7eP%2Febypzhmi%2BKsoYUQLLuOoPYafHBNa7qyaLM37ikuXlD%2BjupLHYQdSkqbfsU9fZPZjU9l%2BONiqyv8Y38Xf%2Fl1UkApBfZH3Qvkte01T4gjvxVEL8ErA3xPGNE%2FUbL1Gy3A61%2B7snD7jg3M3zkGvtWELxrQ2idS%2BDlH9uw4q8n4kMgxoWnHRpwa5cG%2FGo56E7DFVe9nQF3GJM%2FNmh2JfOgUawCpDmHQbKbIkFUBuoNUsnkUrdQZVpt4D0S8LRLXB%2BY0o61eyhQm3mKEH7HlVG0yNNa4SgKyWT3cujb5zFSM6wk%2F4CDsv4rMkOHF5tIqQPcLjR2e2Kc8knyvjmX2Qe%2FTlNNKIMRYd0XCE4zOWTZcHWczEy%2B6GW7O3pNR%2B8w752Ni%2FTDBMLpNAvJSdWntUK5%2B%2BK30%2FHG4r%2Fz%2Bq9g6D1HCPWhk9TaL3f38%2FlnWgyMdDpQwTEclwUMwNoxT6ojRkaQvKiJU2oihtnpk%2BDhuZUOYFFxywlQ47EllGb70NUGYZiyYIMVD7vu45nDwMMm5sM8GOqUBQ%2B8KO65UiYASjT%2BL9avWZ5gNyMblD9NNGEXsRJTOBUXCFQGAbYhgqRhpmeKXgvj6nwKtK0lfAYrtx3fECLgjxL4lT5wk%2BL9mmmHXwLh7PNiV55CG8IFAmT5CfAwn5Fwmtccbu6xqm1AwvFxfHgHyCL3RNrAJR7zrsbMn01Hxyqvc3DyhAwW4W%2BW79ZxXhpCHbIKalzRWTBqVV6hb5Dj6W9JEsyDa&X-Amz-Signature=9a57dd811457f36b074a085bb0bda7181980c208c4a7ae7e4db1a87da84d3eeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KZ3KI25%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGinVPu7LP9ixv4z%2F%2B6ht9WAjV54ysDqeuZAEthwMYMRAiEA6igp2NxLBPLSaw94tjXKDtsS9jBrlTHmvZSMHJ1vrbYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPO2LXzz9zRlMsqMmSrcA%2BMElPr6ts%2BLjkJkPY%2FSknWsaMoV9idpP%2FQlwnvV2Xajpt9EMsPlnRLgJBIV9mDRgt2y%2Bt1Ti7yOp1kGVwxcBhKOrY3OMl1WvcHe0qt5T3x8V7eP%2Febypzhmi%2BKsoYUQLLuOoPYafHBNa7qyaLM37ikuXlD%2BjupLHYQdSkqbfsU9fZPZjU9l%2BONiqyv8Y38Xf%2Fl1UkApBfZH3Qvkte01T4gjvxVEL8ErA3xPGNE%2FUbL1Gy3A61%2B7snD7jg3M3zkGvtWELxrQ2idS%2BDlH9uw4q8n4kMgxoWnHRpwa5cG%2FGo56E7DFVe9nQF3GJM%2FNmh2JfOgUawCpDmHQbKbIkFUBuoNUsnkUrdQZVpt4D0S8LRLXB%2BY0o61eyhQm3mKEH7HlVG0yNNa4SgKyWT3cujb5zFSM6wk%2F4CDsv4rMkOHF5tIqQPcLjR2e2Kc8knyvjmX2Qe%2FTlNNKIMRYd0XCE4zOWTZcHWczEy%2B6GW7O3pNR%2B8w752Ni%2FTDBMLpNAvJSdWntUK5%2B%2BK30%2FHG4r%2Fz%2Bq9g6D1HCPWhk9TaL3f38%2FlnWgyMdDpQwTEclwUMwNoxT6ojRkaQvKiJU2oihtnpk%2BDhuZUOYFFxywlQ47EllGb70NUGYZiyYIMVD7vu45nDwMMm5sM8GOqUBQ%2B8KO65UiYASjT%2BL9avWZ5gNyMblD9NNGEXsRJTOBUXCFQGAbYhgqRhpmeKXgvj6nwKtK0lfAYrtx3fECLgjxL4lT5wk%2BL9mmmHXwLh7PNiV55CG8IFAmT5CfAwn5Fwmtccbu6xqm1AwvFxfHgHyCL3RNrAJR7zrsbMn01Hxyqvc3DyhAwW4W%2BW79ZxXhpCHbIKalzRWTBqVV6hb5Dj6W9JEsyDa&X-Amz-Signature=380ef831adf811fa0398261d3d45772ac25849034d94d555f2876847688faa9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Launch file

<details>
  <summary>{{< markdownify >}}What is in this launch file?{{< /markdownify >}}</summary>
  
[launch files guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/launch-files/)

Launch files are just a scripted way of running multiple ROS nodes at the same time instead of opining multiple terminals.

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

```python "3-6","6-6","6-13","24-24"

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KZ3KI25%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGinVPu7LP9ixv4z%2F%2B6ht9WAjV54ysDqeuZAEthwMYMRAiEA6igp2NxLBPLSaw94tjXKDtsS9jBrlTHmvZSMHJ1vrbYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPO2LXzz9zRlMsqMmSrcA%2BMElPr6ts%2BLjkJkPY%2FSknWsaMoV9idpP%2FQlwnvV2Xajpt9EMsPlnRLgJBIV9mDRgt2y%2Bt1Ti7yOp1kGVwxcBhKOrY3OMl1WvcHe0qt5T3x8V7eP%2Febypzhmi%2BKsoYUQLLuOoPYafHBNa7qyaLM37ikuXlD%2BjupLHYQdSkqbfsU9fZPZjU9l%2BONiqyv8Y38Xf%2Fl1UkApBfZH3Qvkte01T4gjvxVEL8ErA3xPGNE%2FUbL1Gy3A61%2B7snD7jg3M3zkGvtWELxrQ2idS%2BDlH9uw4q8n4kMgxoWnHRpwa5cG%2FGo56E7DFVe9nQF3GJM%2FNmh2JfOgUawCpDmHQbKbIkFUBuoNUsnkUrdQZVpt4D0S8LRLXB%2BY0o61eyhQm3mKEH7HlVG0yNNa4SgKyWT3cujb5zFSM6wk%2F4CDsv4rMkOHF5tIqQPcLjR2e2Kc8knyvjmX2Qe%2FTlNNKIMRYd0XCE4zOWTZcHWczEy%2B6GW7O3pNR%2B8w752Ni%2FTDBMLpNAvJSdWntUK5%2B%2BK30%2FHG4r%2Fz%2Bq9g6D1HCPWhk9TaL3f38%2FlnWgyMdDpQwTEclwUMwNoxT6ojRkaQvKiJU2oihtnpk%2BDhuZUOYFFxywlQ47EllGb70NUGYZiyYIMVD7vu45nDwMMm5sM8GOqUBQ%2B8KO65UiYASjT%2BL9avWZ5gNyMblD9NNGEXsRJTOBUXCFQGAbYhgqRhpmeKXgvj6nwKtK0lfAYrtx3fECLgjxL4lT5wk%2BL9mmmHXwLh7PNiV55CG8IFAmT5CfAwn5Fwmtccbu6xqm1AwvFxfHgHyCL3RNrAJR7zrsbMn01Hxyqvc3DyhAwW4W%2BW79ZxXhpCHbIKalzRWTBqVV6hb5Dj6W9JEsyDa&X-Amz-Signature=6b8c048c4ddff4ede42b56353aa0154f294c5a86918c08f9a3e4a07c6198edc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KZ3KI25%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGinVPu7LP9ixv4z%2F%2B6ht9WAjV54ysDqeuZAEthwMYMRAiEA6igp2NxLBPLSaw94tjXKDtsS9jBrlTHmvZSMHJ1vrbYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPO2LXzz9zRlMsqMmSrcA%2BMElPr6ts%2BLjkJkPY%2FSknWsaMoV9idpP%2FQlwnvV2Xajpt9EMsPlnRLgJBIV9mDRgt2y%2Bt1Ti7yOp1kGVwxcBhKOrY3OMl1WvcHe0qt5T3x8V7eP%2Febypzhmi%2BKsoYUQLLuOoPYafHBNa7qyaLM37ikuXlD%2BjupLHYQdSkqbfsU9fZPZjU9l%2BONiqyv8Y38Xf%2Fl1UkApBfZH3Qvkte01T4gjvxVEL8ErA3xPGNE%2FUbL1Gy3A61%2B7snD7jg3M3zkGvtWELxrQ2idS%2BDlH9uw4q8n4kMgxoWnHRpwa5cG%2FGo56E7DFVe9nQF3GJM%2FNmh2JfOgUawCpDmHQbKbIkFUBuoNUsnkUrdQZVpt4D0S8LRLXB%2BY0o61eyhQm3mKEH7HlVG0yNNa4SgKyWT3cujb5zFSM6wk%2F4CDsv4rMkOHF5tIqQPcLjR2e2Kc8knyvjmX2Qe%2FTlNNKIMRYd0XCE4zOWTZcHWczEy%2B6GW7O3pNR%2B8w752Ni%2FTDBMLpNAvJSdWntUK5%2B%2BK30%2FHG4r%2Fz%2Bq9g6D1HCPWhk9TaL3f38%2FlnWgyMdDpQwTEclwUMwNoxT6ojRkaQvKiJU2oihtnpk%2BDhuZUOYFFxywlQ47EllGb70NUGYZiyYIMVD7vu45nDwMMm5sM8GOqUBQ%2B8KO65UiYASjT%2BL9avWZ5gNyMblD9NNGEXsRJTOBUXCFQGAbYhgqRhpmeKXgvj6nwKtK0lfAYrtx3fECLgjxL4lT5wk%2BL9mmmHXwLh7PNiV55CG8IFAmT5CfAwn5Fwmtccbu6xqm1AwvFxfHgHyCL3RNrAJR7zrsbMn01Hxyqvc3DyhAwW4W%2BW79ZxXhpCHbIKalzRWTBqVV6hb5Dj6W9JEsyDa&X-Amz-Signature=c2c35c3782bb72acebd520b64ad08f5f7bfd83b8da9c67480365426399c57572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KZ3KI25%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGinVPu7LP9ixv4z%2F%2B6ht9WAjV54ysDqeuZAEthwMYMRAiEA6igp2NxLBPLSaw94tjXKDtsS9jBrlTHmvZSMHJ1vrbYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPO2LXzz9zRlMsqMmSrcA%2BMElPr6ts%2BLjkJkPY%2FSknWsaMoV9idpP%2FQlwnvV2Xajpt9EMsPlnRLgJBIV9mDRgt2y%2Bt1Ti7yOp1kGVwxcBhKOrY3OMl1WvcHe0qt5T3x8V7eP%2Febypzhmi%2BKsoYUQLLuOoPYafHBNa7qyaLM37ikuXlD%2BjupLHYQdSkqbfsU9fZPZjU9l%2BONiqyv8Y38Xf%2Fl1UkApBfZH3Qvkte01T4gjvxVEL8ErA3xPGNE%2FUbL1Gy3A61%2B7snD7jg3M3zkGvtWELxrQ2idS%2BDlH9uw4q8n4kMgxoWnHRpwa5cG%2FGo56E7DFVe9nQF3GJM%2FNmh2JfOgUawCpDmHQbKbIkFUBuoNUsnkUrdQZVpt4D0S8LRLXB%2BY0o61eyhQm3mKEH7HlVG0yNNa4SgKyWT3cujb5zFSM6wk%2F4CDsv4rMkOHF5tIqQPcLjR2e2Kc8knyvjmX2Qe%2FTlNNKIMRYd0XCE4zOWTZcHWczEy%2B6GW7O3pNR%2B8w752Ni%2FTDBMLpNAvJSdWntUK5%2B%2BK30%2FHG4r%2Fz%2Bq9g6D1HCPWhk9TaL3f38%2FlnWgyMdDpQwTEclwUMwNoxT6ojRkaQvKiJU2oihtnpk%2BDhuZUOYFFxywlQ47EllGb70NUGYZiyYIMVD7vu45nDwMMm5sM8GOqUBQ%2B8KO65UiYASjT%2BL9avWZ5gNyMblD9NNGEXsRJTOBUXCFQGAbYhgqRhpmeKXgvj6nwKtK0lfAYrtx3fECLgjxL4lT5wk%2BL9mmmHXwLh7PNiV55CG8IFAmT5CfAwn5Fwmtccbu6xqm1AwvFxfHgHyCL3RNrAJR7zrsbMn01Hxyqvc3DyhAwW4W%2BW79ZxXhpCHbIKalzRWTBqVV6hb5Dj6W9JEsyDa&X-Amz-Signature=b5ab48f3d83ba8c211e5d6c266844066bad42546133de47403c9329879381ce1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


