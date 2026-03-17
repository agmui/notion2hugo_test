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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGXOJEU5%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDfWsW1xMNWWD8FixEb34o1nvlqh22kqP1Gl690DtSKegIgTcIv7t9GPLJWify2cpDXO3%2FlfBrcJ18TN%2Fran%2B2mmBcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3a2S3AXgvlBLdTvyrcAx%2Fup5H2TKuLA0joghN83jQXN2G2s5hag1iupHiH4EPJ0xeyhYY4qBFixITqssPUTjyALCAlYk2%2F%2BzEngP34h51QSN2wfgOf9fowTcyiId%2FaJZjQkrclHitmmvi%2FitBOyDbt5849c9%2FV3nd1AzbDgDXz%2F9JC2OOp%2Bp9y7jbf2Y0CxqLHIZz%2Fu8n9e%2BQkDJfxyYJcvDGGUQSSzuAxCB%2Fgv1ahHPQ22ySKcGAwEQu5qfmMaVuWCypP%2B1bW4k07oOKgfSczQQKjKsm3Ds2kTthnl5qwcs9fLann6DrPgMYtGhC6iZcPzen3w9LAEUBuK%2B%2Bj%2Fb3Smi6mjgjTMpscAoLFjmp99lkc2dN0TBGCgAJNDmz5ik%2FCdFZ%2BMYHYG6miMQl1C1l6ak1dVl5dfo%2FjNMx3V7OPi3gKB8Qv7AUAtwXQrx5XJo5F5%2FWld0a%2FdHkkz%2BwzbwhagYYFFLPz3kmke0pSz1K84UwaE69duq13kJsi5EgRDqDJimE5%2BgeiBRgNeNqooIDPNEvNqaVC43bhVZPKADYP6z8ubUCAvca9NVn81emwta9QXRfEXvpJPE4fpoFkQwyJlSmyVjN8b94u090LTjVOSV54fUiy776Wa58rPrwfIGwlg2PbKwRcpFG0MM%2Fn4s0GOqUBaEMxBTgp4VdALukgFEPwXrWhimKsmKoGxapvLSPNzKu2WGMoobSB9fKECK0sH8%2FzFIdTTOnPyBJdlamoGwj0vlxIY3PKYevfRcIbXgZzmqo1425X30rEutP48N1J92ij59FqY7BiRdHTsI9rsKSQaGDaU04Z3S%2FmgPdw5DCFkmUbqbf1zpXixc8ZR%2Fn44HPsFMWgk085PmO3grNffFRtNCO0btSY&X-Amz-Signature=74847635ceb181aed969d84edf8c09ef39e0b16dc34ad0401c094480a05a126a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGXOJEU5%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDfWsW1xMNWWD8FixEb34o1nvlqh22kqP1Gl690DtSKegIgTcIv7t9GPLJWify2cpDXO3%2FlfBrcJ18TN%2Fran%2B2mmBcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3a2S3AXgvlBLdTvyrcAx%2Fup5H2TKuLA0joghN83jQXN2G2s5hag1iupHiH4EPJ0xeyhYY4qBFixITqssPUTjyALCAlYk2%2F%2BzEngP34h51QSN2wfgOf9fowTcyiId%2FaJZjQkrclHitmmvi%2FitBOyDbt5849c9%2FV3nd1AzbDgDXz%2F9JC2OOp%2Bp9y7jbf2Y0CxqLHIZz%2Fu8n9e%2BQkDJfxyYJcvDGGUQSSzuAxCB%2Fgv1ahHPQ22ySKcGAwEQu5qfmMaVuWCypP%2B1bW4k07oOKgfSczQQKjKsm3Ds2kTthnl5qwcs9fLann6DrPgMYtGhC6iZcPzen3w9LAEUBuK%2B%2Bj%2Fb3Smi6mjgjTMpscAoLFjmp99lkc2dN0TBGCgAJNDmz5ik%2FCdFZ%2BMYHYG6miMQl1C1l6ak1dVl5dfo%2FjNMx3V7OPi3gKB8Qv7AUAtwXQrx5XJo5F5%2FWld0a%2FdHkkz%2BwzbwhagYYFFLPz3kmke0pSz1K84UwaE69duq13kJsi5EgRDqDJimE5%2BgeiBRgNeNqooIDPNEvNqaVC43bhVZPKADYP6z8ubUCAvca9NVn81emwta9QXRfEXvpJPE4fpoFkQwyJlSmyVjN8b94u090LTjVOSV54fUiy776Wa58rPrwfIGwlg2PbKwRcpFG0MM%2Fn4s0GOqUBaEMxBTgp4VdALukgFEPwXrWhimKsmKoGxapvLSPNzKu2WGMoobSB9fKECK0sH8%2FzFIdTTOnPyBJdlamoGwj0vlxIY3PKYevfRcIbXgZzmqo1425X30rEutP48N1J92ij59FqY7BiRdHTsI9rsKSQaGDaU04Z3S%2FmgPdw5DCFkmUbqbf1zpXixc8ZR%2Fn44HPsFMWgk085PmO3grNffFRtNCO0btSY&X-Amz-Signature=5aef188b9a672da0b395499688f643377d4ccdbfd701ee31ad2086cac86e584e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGXOJEU5%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDfWsW1xMNWWD8FixEb34o1nvlqh22kqP1Gl690DtSKegIgTcIv7t9GPLJWify2cpDXO3%2FlfBrcJ18TN%2Fran%2B2mmBcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3a2S3AXgvlBLdTvyrcAx%2Fup5H2TKuLA0joghN83jQXN2G2s5hag1iupHiH4EPJ0xeyhYY4qBFixITqssPUTjyALCAlYk2%2F%2BzEngP34h51QSN2wfgOf9fowTcyiId%2FaJZjQkrclHitmmvi%2FitBOyDbt5849c9%2FV3nd1AzbDgDXz%2F9JC2OOp%2Bp9y7jbf2Y0CxqLHIZz%2Fu8n9e%2BQkDJfxyYJcvDGGUQSSzuAxCB%2Fgv1ahHPQ22ySKcGAwEQu5qfmMaVuWCypP%2B1bW4k07oOKgfSczQQKjKsm3Ds2kTthnl5qwcs9fLann6DrPgMYtGhC6iZcPzen3w9LAEUBuK%2B%2Bj%2Fb3Smi6mjgjTMpscAoLFjmp99lkc2dN0TBGCgAJNDmz5ik%2FCdFZ%2BMYHYG6miMQl1C1l6ak1dVl5dfo%2FjNMx3V7OPi3gKB8Qv7AUAtwXQrx5XJo5F5%2FWld0a%2FdHkkz%2BwzbwhagYYFFLPz3kmke0pSz1K84UwaE69duq13kJsi5EgRDqDJimE5%2BgeiBRgNeNqooIDPNEvNqaVC43bhVZPKADYP6z8ubUCAvca9NVn81emwta9QXRfEXvpJPE4fpoFkQwyJlSmyVjN8b94u090LTjVOSV54fUiy776Wa58rPrwfIGwlg2PbKwRcpFG0MM%2Fn4s0GOqUBaEMxBTgp4VdALukgFEPwXrWhimKsmKoGxapvLSPNzKu2WGMoobSB9fKECK0sH8%2FzFIdTTOnPyBJdlamoGwj0vlxIY3PKYevfRcIbXgZzmqo1425X30rEutP48N1J92ij59FqY7BiRdHTsI9rsKSQaGDaU04Z3S%2FmgPdw5DCFkmUbqbf1zpXixc8ZR%2Fn44HPsFMWgk085PmO3grNffFRtNCO0btSY&X-Amz-Signature=9c0c259a043df8f8da6026ad4052ceac8f7ba9e88b6d56f73bef744bc1ef44c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGXOJEU5%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDfWsW1xMNWWD8FixEb34o1nvlqh22kqP1Gl690DtSKegIgTcIv7t9GPLJWify2cpDXO3%2FlfBrcJ18TN%2Fran%2B2mmBcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3a2S3AXgvlBLdTvyrcAx%2Fup5H2TKuLA0joghN83jQXN2G2s5hag1iupHiH4EPJ0xeyhYY4qBFixITqssPUTjyALCAlYk2%2F%2BzEngP34h51QSN2wfgOf9fowTcyiId%2FaJZjQkrclHitmmvi%2FitBOyDbt5849c9%2FV3nd1AzbDgDXz%2F9JC2OOp%2Bp9y7jbf2Y0CxqLHIZz%2Fu8n9e%2BQkDJfxyYJcvDGGUQSSzuAxCB%2Fgv1ahHPQ22ySKcGAwEQu5qfmMaVuWCypP%2B1bW4k07oOKgfSczQQKjKsm3Ds2kTthnl5qwcs9fLann6DrPgMYtGhC6iZcPzen3w9LAEUBuK%2B%2Bj%2Fb3Smi6mjgjTMpscAoLFjmp99lkc2dN0TBGCgAJNDmz5ik%2FCdFZ%2BMYHYG6miMQl1C1l6ak1dVl5dfo%2FjNMx3V7OPi3gKB8Qv7AUAtwXQrx5XJo5F5%2FWld0a%2FdHkkz%2BwzbwhagYYFFLPz3kmke0pSz1K84UwaE69duq13kJsi5EgRDqDJimE5%2BgeiBRgNeNqooIDPNEvNqaVC43bhVZPKADYP6z8ubUCAvca9NVn81emwta9QXRfEXvpJPE4fpoFkQwyJlSmyVjN8b94u090LTjVOSV54fUiy776Wa58rPrwfIGwlg2PbKwRcpFG0MM%2Fn4s0GOqUBaEMxBTgp4VdALukgFEPwXrWhimKsmKoGxapvLSPNzKu2WGMoobSB9fKECK0sH8%2FzFIdTTOnPyBJdlamoGwj0vlxIY3PKYevfRcIbXgZzmqo1425X30rEutP48N1J92ij59FqY7BiRdHTsI9rsKSQaGDaU04Z3S%2FmgPdw5DCFkmUbqbf1zpXixc8ZR%2Fn44HPsFMWgk085PmO3grNffFRtNCO0btSY&X-Amz-Signature=5d0a9ccf270d5a2c5311ef3022840ed4e616490633f33e67d552ea777771d0b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGXOJEU5%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDfWsW1xMNWWD8FixEb34o1nvlqh22kqP1Gl690DtSKegIgTcIv7t9GPLJWify2cpDXO3%2FlfBrcJ18TN%2Fran%2B2mmBcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3a2S3AXgvlBLdTvyrcAx%2Fup5H2TKuLA0joghN83jQXN2G2s5hag1iupHiH4EPJ0xeyhYY4qBFixITqssPUTjyALCAlYk2%2F%2BzEngP34h51QSN2wfgOf9fowTcyiId%2FaJZjQkrclHitmmvi%2FitBOyDbt5849c9%2FV3nd1AzbDgDXz%2F9JC2OOp%2Bp9y7jbf2Y0CxqLHIZz%2Fu8n9e%2BQkDJfxyYJcvDGGUQSSzuAxCB%2Fgv1ahHPQ22ySKcGAwEQu5qfmMaVuWCypP%2B1bW4k07oOKgfSczQQKjKsm3Ds2kTthnl5qwcs9fLann6DrPgMYtGhC6iZcPzen3w9LAEUBuK%2B%2Bj%2Fb3Smi6mjgjTMpscAoLFjmp99lkc2dN0TBGCgAJNDmz5ik%2FCdFZ%2BMYHYG6miMQl1C1l6ak1dVl5dfo%2FjNMx3V7OPi3gKB8Qv7AUAtwXQrx5XJo5F5%2FWld0a%2FdHkkz%2BwzbwhagYYFFLPz3kmke0pSz1K84UwaE69duq13kJsi5EgRDqDJimE5%2BgeiBRgNeNqooIDPNEvNqaVC43bhVZPKADYP6z8ubUCAvca9NVn81emwta9QXRfEXvpJPE4fpoFkQwyJlSmyVjN8b94u090LTjVOSV54fUiy776Wa58rPrwfIGwlg2PbKwRcpFG0MM%2Fn4s0GOqUBaEMxBTgp4VdALukgFEPwXrWhimKsmKoGxapvLSPNzKu2WGMoobSB9fKECK0sH8%2FzFIdTTOnPyBJdlamoGwj0vlxIY3PKYevfRcIbXgZzmqo1425X30rEutP48N1J92ij59FqY7BiRdHTsI9rsKSQaGDaU04Z3S%2FmgPdw5DCFkmUbqbf1zpXixc8ZR%2Fn44HPsFMWgk085PmO3grNffFRtNCO0btSY&X-Amz-Signature=2fc2134565ffa0080cae07ae8873881afc8d561bd80d50d50e69bec27bb65b1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGXOJEU5%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDfWsW1xMNWWD8FixEb34o1nvlqh22kqP1Gl690DtSKegIgTcIv7t9GPLJWify2cpDXO3%2FlfBrcJ18TN%2Fran%2B2mmBcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3a2S3AXgvlBLdTvyrcAx%2Fup5H2TKuLA0joghN83jQXN2G2s5hag1iupHiH4EPJ0xeyhYY4qBFixITqssPUTjyALCAlYk2%2F%2BzEngP34h51QSN2wfgOf9fowTcyiId%2FaJZjQkrclHitmmvi%2FitBOyDbt5849c9%2FV3nd1AzbDgDXz%2F9JC2OOp%2Bp9y7jbf2Y0CxqLHIZz%2Fu8n9e%2BQkDJfxyYJcvDGGUQSSzuAxCB%2Fgv1ahHPQ22ySKcGAwEQu5qfmMaVuWCypP%2B1bW4k07oOKgfSczQQKjKsm3Ds2kTthnl5qwcs9fLann6DrPgMYtGhC6iZcPzen3w9LAEUBuK%2B%2Bj%2Fb3Smi6mjgjTMpscAoLFjmp99lkc2dN0TBGCgAJNDmz5ik%2FCdFZ%2BMYHYG6miMQl1C1l6ak1dVl5dfo%2FjNMx3V7OPi3gKB8Qv7AUAtwXQrx5XJo5F5%2FWld0a%2FdHkkz%2BwzbwhagYYFFLPz3kmke0pSz1K84UwaE69duq13kJsi5EgRDqDJimE5%2BgeiBRgNeNqooIDPNEvNqaVC43bhVZPKADYP6z8ubUCAvca9NVn81emwta9QXRfEXvpJPE4fpoFkQwyJlSmyVjN8b94u090LTjVOSV54fUiy776Wa58rPrwfIGwlg2PbKwRcpFG0MM%2Fn4s0GOqUBaEMxBTgp4VdALukgFEPwXrWhimKsmKoGxapvLSPNzKu2WGMoobSB9fKECK0sH8%2FzFIdTTOnPyBJdlamoGwj0vlxIY3PKYevfRcIbXgZzmqo1425X30rEutP48N1J92ij59FqY7BiRdHTsI9rsKSQaGDaU04Z3S%2FmgPdw5DCFkmUbqbf1zpXixc8ZR%2Fn44HPsFMWgk085PmO3grNffFRtNCO0btSY&X-Amz-Signature=7d590c5b51694d07621147bf16b2111220ba766d77e63bc12e822ccdb3729204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGXOJEU5%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDfWsW1xMNWWD8FixEb34o1nvlqh22kqP1Gl690DtSKegIgTcIv7t9GPLJWify2cpDXO3%2FlfBrcJ18TN%2Fran%2B2mmBcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3a2S3AXgvlBLdTvyrcAx%2Fup5H2TKuLA0joghN83jQXN2G2s5hag1iupHiH4EPJ0xeyhYY4qBFixITqssPUTjyALCAlYk2%2F%2BzEngP34h51QSN2wfgOf9fowTcyiId%2FaJZjQkrclHitmmvi%2FitBOyDbt5849c9%2FV3nd1AzbDgDXz%2F9JC2OOp%2Bp9y7jbf2Y0CxqLHIZz%2Fu8n9e%2BQkDJfxyYJcvDGGUQSSzuAxCB%2Fgv1ahHPQ22ySKcGAwEQu5qfmMaVuWCypP%2B1bW4k07oOKgfSczQQKjKsm3Ds2kTthnl5qwcs9fLann6DrPgMYtGhC6iZcPzen3w9LAEUBuK%2B%2Bj%2Fb3Smi6mjgjTMpscAoLFjmp99lkc2dN0TBGCgAJNDmz5ik%2FCdFZ%2BMYHYG6miMQl1C1l6ak1dVl5dfo%2FjNMx3V7OPi3gKB8Qv7AUAtwXQrx5XJo5F5%2FWld0a%2FdHkkz%2BwzbwhagYYFFLPz3kmke0pSz1K84UwaE69duq13kJsi5EgRDqDJimE5%2BgeiBRgNeNqooIDPNEvNqaVC43bhVZPKADYP6z8ubUCAvca9NVn81emwta9QXRfEXvpJPE4fpoFkQwyJlSmyVjN8b94u090LTjVOSV54fUiy776Wa58rPrwfIGwlg2PbKwRcpFG0MM%2Fn4s0GOqUBaEMxBTgp4VdALukgFEPwXrWhimKsmKoGxapvLSPNzKu2WGMoobSB9fKECK0sH8%2FzFIdTTOnPyBJdlamoGwj0vlxIY3PKYevfRcIbXgZzmqo1425X30rEutP48N1J92ij59FqY7BiRdHTsI9rsKSQaGDaU04Z3S%2FmgPdw5DCFkmUbqbf1zpXixc8ZR%2Fn44HPsFMWgk085PmO3grNffFRtNCO0btSY&X-Amz-Signature=317043f505823a3ac495b016ae8e9d04632db2ea5e6c5212d6e262177f0c4160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGXOJEU5%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDfWsW1xMNWWD8FixEb34o1nvlqh22kqP1Gl690DtSKegIgTcIv7t9GPLJWify2cpDXO3%2FlfBrcJ18TN%2Fran%2B2mmBcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3a2S3AXgvlBLdTvyrcAx%2Fup5H2TKuLA0joghN83jQXN2G2s5hag1iupHiH4EPJ0xeyhYY4qBFixITqssPUTjyALCAlYk2%2F%2BzEngP34h51QSN2wfgOf9fowTcyiId%2FaJZjQkrclHitmmvi%2FitBOyDbt5849c9%2FV3nd1AzbDgDXz%2F9JC2OOp%2Bp9y7jbf2Y0CxqLHIZz%2Fu8n9e%2BQkDJfxyYJcvDGGUQSSzuAxCB%2Fgv1ahHPQ22ySKcGAwEQu5qfmMaVuWCypP%2B1bW4k07oOKgfSczQQKjKsm3Ds2kTthnl5qwcs9fLann6DrPgMYtGhC6iZcPzen3w9LAEUBuK%2B%2Bj%2Fb3Smi6mjgjTMpscAoLFjmp99lkc2dN0TBGCgAJNDmz5ik%2FCdFZ%2BMYHYG6miMQl1C1l6ak1dVl5dfo%2FjNMx3V7OPi3gKB8Qv7AUAtwXQrx5XJo5F5%2FWld0a%2FdHkkz%2BwzbwhagYYFFLPz3kmke0pSz1K84UwaE69duq13kJsi5EgRDqDJimE5%2BgeiBRgNeNqooIDPNEvNqaVC43bhVZPKADYP6z8ubUCAvca9NVn81emwta9QXRfEXvpJPE4fpoFkQwyJlSmyVjN8b94u090LTjVOSV54fUiy776Wa58rPrwfIGwlg2PbKwRcpFG0MM%2Fn4s0GOqUBaEMxBTgp4VdALukgFEPwXrWhimKsmKoGxapvLSPNzKu2WGMoobSB9fKECK0sH8%2FzFIdTTOnPyBJdlamoGwj0vlxIY3PKYevfRcIbXgZzmqo1425X30rEutP48N1J92ij59FqY7BiRdHTsI9rsKSQaGDaU04Z3S%2FmgPdw5DCFkmUbqbf1zpXixc8ZR%2Fn44HPsFMWgk085PmO3grNffFRtNCO0btSY&X-Amz-Signature=1f2307f3f211ccd6c8788e54633dfb9cda4b2a083989d09752c7be6cf9efb632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGXOJEU5%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDfWsW1xMNWWD8FixEb34o1nvlqh22kqP1Gl690DtSKegIgTcIv7t9GPLJWify2cpDXO3%2FlfBrcJ18TN%2Fran%2B2mmBcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3a2S3AXgvlBLdTvyrcAx%2Fup5H2TKuLA0joghN83jQXN2G2s5hag1iupHiH4EPJ0xeyhYY4qBFixITqssPUTjyALCAlYk2%2F%2BzEngP34h51QSN2wfgOf9fowTcyiId%2FaJZjQkrclHitmmvi%2FitBOyDbt5849c9%2FV3nd1AzbDgDXz%2F9JC2OOp%2Bp9y7jbf2Y0CxqLHIZz%2Fu8n9e%2BQkDJfxyYJcvDGGUQSSzuAxCB%2Fgv1ahHPQ22ySKcGAwEQu5qfmMaVuWCypP%2B1bW4k07oOKgfSczQQKjKsm3Ds2kTthnl5qwcs9fLann6DrPgMYtGhC6iZcPzen3w9LAEUBuK%2B%2Bj%2Fb3Smi6mjgjTMpscAoLFjmp99lkc2dN0TBGCgAJNDmz5ik%2FCdFZ%2BMYHYG6miMQl1C1l6ak1dVl5dfo%2FjNMx3V7OPi3gKB8Qv7AUAtwXQrx5XJo5F5%2FWld0a%2FdHkkz%2BwzbwhagYYFFLPz3kmke0pSz1K84UwaE69duq13kJsi5EgRDqDJimE5%2BgeiBRgNeNqooIDPNEvNqaVC43bhVZPKADYP6z8ubUCAvca9NVn81emwta9QXRfEXvpJPE4fpoFkQwyJlSmyVjN8b94u090LTjVOSV54fUiy776Wa58rPrwfIGwlg2PbKwRcpFG0MM%2Fn4s0GOqUBaEMxBTgp4VdALukgFEPwXrWhimKsmKoGxapvLSPNzKu2WGMoobSB9fKECK0sH8%2FzFIdTTOnPyBJdlamoGwj0vlxIY3PKYevfRcIbXgZzmqo1425X30rEutP48N1J92ij59FqY7BiRdHTsI9rsKSQaGDaU04Z3S%2FmgPdw5DCFkmUbqbf1zpXixc8ZR%2Fn44HPsFMWgk085PmO3grNffFRtNCO0btSY&X-Amz-Signature=66c22cf0b827bb63f779ae51446692fb48809033f1e49e153db70b5799a24936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGXOJEU5%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDfWsW1xMNWWD8FixEb34o1nvlqh22kqP1Gl690DtSKegIgTcIv7t9GPLJWify2cpDXO3%2FlfBrcJ18TN%2Fran%2B2mmBcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3a2S3AXgvlBLdTvyrcAx%2Fup5H2TKuLA0joghN83jQXN2G2s5hag1iupHiH4EPJ0xeyhYY4qBFixITqssPUTjyALCAlYk2%2F%2BzEngP34h51QSN2wfgOf9fowTcyiId%2FaJZjQkrclHitmmvi%2FitBOyDbt5849c9%2FV3nd1AzbDgDXz%2F9JC2OOp%2Bp9y7jbf2Y0CxqLHIZz%2Fu8n9e%2BQkDJfxyYJcvDGGUQSSzuAxCB%2Fgv1ahHPQ22ySKcGAwEQu5qfmMaVuWCypP%2B1bW4k07oOKgfSczQQKjKsm3Ds2kTthnl5qwcs9fLann6DrPgMYtGhC6iZcPzen3w9LAEUBuK%2B%2Bj%2Fb3Smi6mjgjTMpscAoLFjmp99lkc2dN0TBGCgAJNDmz5ik%2FCdFZ%2BMYHYG6miMQl1C1l6ak1dVl5dfo%2FjNMx3V7OPi3gKB8Qv7AUAtwXQrx5XJo5F5%2FWld0a%2FdHkkz%2BwzbwhagYYFFLPz3kmke0pSz1K84UwaE69duq13kJsi5EgRDqDJimE5%2BgeiBRgNeNqooIDPNEvNqaVC43bhVZPKADYP6z8ubUCAvca9NVn81emwta9QXRfEXvpJPE4fpoFkQwyJlSmyVjN8b94u090LTjVOSV54fUiy776Wa58rPrwfIGwlg2PbKwRcpFG0MM%2Fn4s0GOqUBaEMxBTgp4VdALukgFEPwXrWhimKsmKoGxapvLSPNzKu2WGMoobSB9fKECK0sH8%2FzFIdTTOnPyBJdlamoGwj0vlxIY3PKYevfRcIbXgZzmqo1425X30rEutP48N1J92ij59FqY7BiRdHTsI9rsKSQaGDaU04Z3S%2FmgPdw5DCFkmUbqbf1zpXixc8ZR%2Fn44HPsFMWgk085PmO3grNffFRtNCO0btSY&X-Amz-Signature=464b2825a26fc637a5528d55d9d88664c167ee6f53f3c1325d868fb06eae67f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RYTZSHX%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T021016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDb30GsYHsyLFMiNbOoWEQBw52clw%2BGGXSusXx9%2BD7iKgIhAPSsSIB%2BoS0M%2B7Tgdj4BqVrA65ZJ4j9ZOb2tOtiz%2FBkeKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUL8vIMk8WT4sk9CYq3AMgO5CGZSPC1p%2FK%2FP3Zw9NZ2nkSF07hFF%2BAYaljIYN5fpzKqfE%2B%2BKh%2FYmnp3wYHXKQtoGYDPQxmQ84k5HKZqrcFpjOLnbhleqYL8tstmAgB2jiSrRFn0Dw47hlYSt6poE7QgUkt9xFORclpEUUchaF9REexPuujNMXRgDCqrjJBmLGPi%2FSX6Nmnv3Yx7bPjlYZNSOvVK5vaEDF78ki69e6p41Medo0B7zi7XIENOg8IgCHWPvrdS0Ja79bv7FHe%2F4FasymO2Az5H2hv5i17eOXzrg%2BUcQa4lieedKuolB8D08OaT0F5xMwc9sK5OMWBIX1R0k2Xrg1%2FnAcAlJXrf7pP5RJjfGv2oZjYeps7CALHAdmxHMJ%2FuYxKCfgNnmH9dLv7vSvGPDVsgnXe160dlxB4FrEP0NIxnHqDrIjAr%2BUaqdduCsbwr0ybee6OP9v8wCUs5y819QmCoxeaxvFzKHULw%2Bd5Q%2B19iPZeETRLXV1ir8g1%2BhjbgjAMGvhyMb71uHeYfUatJ6EVEVBZo1UdwXu8xfnM00di8NoNwDc0TVEoNiKbzjnRNyJgu1rAPwFL4PtPzcN%2FE1r7d%2Byd%2BcC%2FOm19xpclt3YnnIsdr3shBVjDrHFbHC3IgkG360MjyjDC5%2BLNBjqkAYaZg8%2B%2B6uYl%2BE5CCASJttS4DMknZGy4RlDq6w1gXVl0h%2BlnlJ9PEzsy%2BpQEzSWafFTcbQU2Mp9UpTM2%2FSZRdVKjnwTdK%2B5yJ8%2B9GnGFPkqePUWzyxYH7AR2oIQqG5NM4twGssosFiEMF7nKichPevLMyHQwiXAeFejPnZ4ZX75lYS1eOoBMcOobEDQYlaSzwYDufNeIwXgA9wsA6PcaT%2FV8semF&X-Amz-Signature=d6fa0e171a81d022b4629183f03238015f99588ac755851deedf5bd5191be74f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MGBJFRX%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T021017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIEqm7%2B0yFXxO5%2BnKZPUD65mAwb3B1qGi41w1CPQMfN%2FSAiAXQ0kt9lcUDwqmvz4y3IsE2qYV1t6Ldov%2BXNl5fYxGzyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9mDDU7RBDBrCVXECKtwDZWK5R%2FZ0Lr3ZXIIo1EO%2BrDLWsSyPBM%2FYbt%2BQfNJ%2BS1zhvRMVEQlFtQwLzCUQZKKl8QdVAgEzc%2FJ0J1yI%2FnAJdt1GJ%2B8VcRCs8JFnJc%2FUikRWfjEpXO%2FGL8RvqoANOuKVO6De94gig1smMModHVCDVBQaqHXG6aiybSrR8BInF8DgPP2nEehD6nnDSBHrWHEWnXfA9dXwiaVBqoFjPsizbveT1M5InMLQYOAR4MmgGBbz12YcM%2BOvqSVaU%2Fc2P85Agn20U9nKuKPTJdhxz%2Bec5EaBTJSFQW1J%2Bjn9kTPHx8LRgsDBU4tHEUo4mdwBaZtFO4So9iCHk5wQ8xlZBAWW1v5%2BQEXmjnjDd0%2B%2B7z4fWJWMZfnL7oKhp0HCs1smbJrrNaCyKyEQ6jL9ycqChzulg5Rhv8VcnEX9HzAS3oEY%2BFGxSXHke%2BHfAgldjk5G3BRBW5GKnn22gQZq2TaIWukyDx8iI8IwVxA7iPoQogeTzr%2FB%2FntF8PoVNJDDdahYCdRVWs2EY0429HlWdL8x7ZCE3JqhWy59dq2wg%2FPkssinJn9I70s5QyKqDK0kIadQRaCE8wNfDaNbo5F2xrcd8uoXMtfXvR4vFr%2F4ONH7DUxvIOHV1yZt5YN2dVgfw5Uwp%2BjizQY6pgE1I7q4CLj0OyCen7zmFhQMWo8ruJbhHTWq3zwFfBsHcdTQ6kescDGscTfrOpp2%2BrzaopRTo63xEpcMf%2BAdnbWOtTlTG3KHgxoc66AqXrlkaMn8t%2B%2FeINtmMQRrWte13CPc2FiKg5UPKMuCaX%2BEMZE6fpActmTrrYb1E4eX4hDovrYBfPBDx7XZq7V6dlCR8uUnqVJf9irKlZQ6NSX8NMCrLKGXV%2Ffa&X-Amz-Signature=ad9b592ebf79692f79e926d9b44e2eecbe8d4a846b88db3b907198eb2d4f52f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637BY3RYI%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T021018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQD%2FePbtUvzx%2B4VKIswDPwMoizRuBRPDv1LJowxw%2B2%2FVuAIgMGYhRINfqt%2FCk%2FQyPV%2B7jtGdheWh0iadpILDeuUyxB8qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLn7IAIIyIu2W5%2BYxyrcAyRWRg45wo8egZd6GpBkLnSAt%2BWvuqddmlCDhnd9PSfMRMIUZm0mClnTXcg4JqxbFPhPPhNLb839wMGW1QQ7Cy3W5Rl52avK5vrpwTTdtN64en8LFz5%2Bk8hONTQ3LPSq02AW28K2Lu87dVyvqJaRJXhmdP%2Fsn2T4P8uvtjaE%2BR59LymeYeMIMol6wnYxC60xZ%2B4gH7B85T3tNmwL%2FPhtgxye5IGs%2Bn012VpCMcuG6E9PwPuTxFcD8vfhZefZjptP3nib5hQlj2X8jlgYog8i2Y7l%2FF7Woa%2BVB3XPM2UIurPQF2f6G0HIOpjZi8HXgwRQUqeOx79Xejht89cIyLz9bnvtk5aetzdj%2B8sIlCpd%2Ffz56IxenF73EG0T8Ihhtt%2Fc538RwQ77JGXxHJZVx%2BWtp2USoQOfqF4bWn0OD5Z3%2B%2B6dcU3Verxri%2BA%2BqCCRuYCXh8pi%2FScKBkdYvlGU8gUlnyc0bDax8XeUwaIyQJ4Qf5fFLLci%2F6RcJ5murEOq7OSxOGsERS%2Bw%2BYfq9XGuOAlZGyC0cjCLGjIjiV3uXqRXNX2kAOck0NbDEnAAr37V37aRhNK5YYPdNZHRvi%2B3%2FBeCFKXThMQ4DveuiSJoPCS9SViwggBPH%2FvqgRxWfy9FMNjn4s0GOqUB3EFNjEHlh4bkPUiApDiCvL931ADbPzGkG4x%2FZ1EN0DPBWBUjP7qfM61PJi8D2Tufmum5xuJ79W%2FC%2BPo%2B1LA3HyoFa%2FrKPXOVQ0xQ%2BbcXfaKmvoEt7MkXkNd0IN5hq8u0NTcD5cGXsaswMVun7IEDNydn%2F0lR0D6ejVmdGq6rangudo5crLoSbFATKtAxn%2BJgEMBlayCXipFkVuZ3LYY0GDBz6hrX&X-Amz-Signature=0d8d3c591664d615a7dc461b69fa23a455e466c483cbae84a81c3de94a628d37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGXOJEU5%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDfWsW1xMNWWD8FixEb34o1nvlqh22kqP1Gl690DtSKegIgTcIv7t9GPLJWify2cpDXO3%2FlfBrcJ18TN%2Fran%2B2mmBcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3a2S3AXgvlBLdTvyrcAx%2Fup5H2TKuLA0joghN83jQXN2G2s5hag1iupHiH4EPJ0xeyhYY4qBFixITqssPUTjyALCAlYk2%2F%2BzEngP34h51QSN2wfgOf9fowTcyiId%2FaJZjQkrclHitmmvi%2FitBOyDbt5849c9%2FV3nd1AzbDgDXz%2F9JC2OOp%2Bp9y7jbf2Y0CxqLHIZz%2Fu8n9e%2BQkDJfxyYJcvDGGUQSSzuAxCB%2Fgv1ahHPQ22ySKcGAwEQu5qfmMaVuWCypP%2B1bW4k07oOKgfSczQQKjKsm3Ds2kTthnl5qwcs9fLann6DrPgMYtGhC6iZcPzen3w9LAEUBuK%2B%2Bj%2Fb3Smi6mjgjTMpscAoLFjmp99lkc2dN0TBGCgAJNDmz5ik%2FCdFZ%2BMYHYG6miMQl1C1l6ak1dVl5dfo%2FjNMx3V7OPi3gKB8Qv7AUAtwXQrx5XJo5F5%2FWld0a%2FdHkkz%2BwzbwhagYYFFLPz3kmke0pSz1K84UwaE69duq13kJsi5EgRDqDJimE5%2BgeiBRgNeNqooIDPNEvNqaVC43bhVZPKADYP6z8ubUCAvca9NVn81emwta9QXRfEXvpJPE4fpoFkQwyJlSmyVjN8b94u090LTjVOSV54fUiy776Wa58rPrwfIGwlg2PbKwRcpFG0MM%2Fn4s0GOqUBaEMxBTgp4VdALukgFEPwXrWhimKsmKoGxapvLSPNzKu2WGMoobSB9fKECK0sH8%2FzFIdTTOnPyBJdlamoGwj0vlxIY3PKYevfRcIbXgZzmqo1425X30rEutP48N1J92ij59FqY7BiRdHTsI9rsKSQaGDaU04Z3S%2FmgPdw5DCFkmUbqbf1zpXixc8ZR%2Fn44HPsFMWgk085PmO3grNffFRtNCO0btSY&X-Amz-Signature=c0851012cb014ab1d8ac4d008efb554e78944c7ff36ebf40eadd5f144106f419&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KWKGA3Q%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T021020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCUi78jOKUu%2Bh4z6WBXGxIJmo9h9DTZKdJBNfY6C1m%2BCwIhAPSFZ6SMbaQFJhw3F6bsrt2v%2FpHxgu2Oe%2FF9XSrgui4HKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQ68vEvU4YYHUNtiUq3AOXWveisDQ6yQ9L1MxccpsVuax4PYUnxoLYywM%2B7FtFQRWpTJq2JJFMf2vLxK%2BcbHDzIb0S2JCgwNYszDI3UhSY7FLmg0JRAuYfJ7Vyi7Y4%2BUdiGkY6kwE3%2BPgBaMD4M2X7UOcaUh4sh7zaXTDxHUuZn%2BBq3NszGnhUjZ21TxO6xvMBGo2TIEu4WeUX1ligg%2FCf1ZDEeJ1zgifFsDRQraKLzXofwKe0adRUJY7bj4ggBYJGj5R1IqIgxpOa4S2iZax7TL20x71Iw0eEmnovsEj1JcHncguFyGQxUtIobSfFdqs6rGdVnJojdSho9UgWmsR%2BFcYIGk51ZydvgaMbRP%2FqVylcK1npwo%2B7kj7os9SxbDvenkQK%2Brmj9w9739V%2FOpZ6RBdIJqQRgwPOgNRZe3c%2Fp%2FWfMVHfTEOm0jqP61deGqrvzCQT%2FuHy%2B7wuWNuIIEteh8picoqv%2BC%2BT%2B83Zypebmbh13kXz0gpINPzOjS1%2B4GIxSYPzHh9mZczZMWjE50nNe0QRAhtKfYVa36jgq4uW0XvzUIzXaXpXGsrAernHc8hyo2xZeWksmxhvFHLyLq4d0%2FTxbhKN2MLSRvfZS2El%2FjOETq%2F670Hv0LDTite1aAvfA%2BNeFA%2F6WFht%2FjDa5%2BLNBjqkAT0q05N6faekQ0PEt8gIjhoLmJ6nPX2rzFqLiEG0qi5ASkYHiz00ffPckOU7FinRWQ1Se%2BkYofNPSpLRBwh2qcHYFdT7XzBQxTQBwI0WD4j7kdIyNAh4ae7qiUn1r2EuHU5TsIuehO1YHMQuGXaVa7yxdj4N3OvoGVd0L3ixmrSb4ejnudqNJlSXiISJ72gtfPXgSXJpNedp5AHPSJKCjeHHLAZa&X-Amz-Signature=7896a3ca415648ffcbf1bd712b57d27e1329ec7148da7f1bd6e5314787621214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGXOJEU5%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDfWsW1xMNWWD8FixEb34o1nvlqh22kqP1Gl690DtSKegIgTcIv7t9GPLJWify2cpDXO3%2FlfBrcJ18TN%2Fran%2B2mmBcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3a2S3AXgvlBLdTvyrcAx%2Fup5H2TKuLA0joghN83jQXN2G2s5hag1iupHiH4EPJ0xeyhYY4qBFixITqssPUTjyALCAlYk2%2F%2BzEngP34h51QSN2wfgOf9fowTcyiId%2FaJZjQkrclHitmmvi%2FitBOyDbt5849c9%2FV3nd1AzbDgDXz%2F9JC2OOp%2Bp9y7jbf2Y0CxqLHIZz%2Fu8n9e%2BQkDJfxyYJcvDGGUQSSzuAxCB%2Fgv1ahHPQ22ySKcGAwEQu5qfmMaVuWCypP%2B1bW4k07oOKgfSczQQKjKsm3Ds2kTthnl5qwcs9fLann6DrPgMYtGhC6iZcPzen3w9LAEUBuK%2B%2Bj%2Fb3Smi6mjgjTMpscAoLFjmp99lkc2dN0TBGCgAJNDmz5ik%2FCdFZ%2BMYHYG6miMQl1C1l6ak1dVl5dfo%2FjNMx3V7OPi3gKB8Qv7AUAtwXQrx5XJo5F5%2FWld0a%2FdHkkz%2BwzbwhagYYFFLPz3kmke0pSz1K84UwaE69duq13kJsi5EgRDqDJimE5%2BgeiBRgNeNqooIDPNEvNqaVC43bhVZPKADYP6z8ubUCAvca9NVn81emwta9QXRfEXvpJPE4fpoFkQwyJlSmyVjN8b94u090LTjVOSV54fUiy776Wa58rPrwfIGwlg2PbKwRcpFG0MM%2Fn4s0GOqUBaEMxBTgp4VdALukgFEPwXrWhimKsmKoGxapvLSPNzKu2WGMoobSB9fKECK0sH8%2FzFIdTTOnPyBJdlamoGwj0vlxIY3PKYevfRcIbXgZzmqo1425X30rEutP48N1J92ij59FqY7BiRdHTsI9rsKSQaGDaU04Z3S%2FmgPdw5DCFkmUbqbf1zpXixc8ZR%2Fn44HPsFMWgk085PmO3grNffFRtNCO0btSY&X-Amz-Signature=33d29ca768139363ba25bf0d2d1b4436ddb20bed7e02dd7697b0c7b90773c4ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWOATU4R%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T021022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBmu3j4P4mXx38dg86%2FB2E6z1l%2FSOehr343HshUmco7nAiBGJTfOO8h1dMalYzglNOZrzVDE2OojF5fmaGpovmQEYCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaW41woU599c%2Bkg5UKtwDhgl9VUxMWktyiaRsgCVu5GSD1R27R7N6Gg6a0of2GTM6vvrqeXGuTApClZpompnSOoKpHlmhlVUcdOoIp2tQfIdltd1cf3Yng3D55mvMRRSj7De3h9eOCUZdsu%2BrWyIgZuL1ZTx7DuSt0qh0UjBemKHSPyFA91Sy2g9Z%2BAFh%2BR%2BWIdlzLvTMUy5bT3Zs2Gn8Te0bmjUCjDLGSTt4YklFnKMSEd2ondTdK9TmvB1dmvpEENhfsYdiVJcFkrwiqxmSo%2BEAJvaR5X1KjMe2X0tyEwHGLqQMbG0ZI22val4dYYu5wzHBYkBtMZ74Pt3%2BvW5weOSEGpGIerG9%2BQUKM1t%2BL9vP8fKZokeSdwZ2SAFaLKQS%2BboVeQThrA2hfBmvKgA3E8C8FkxDUtf9G61yqKlEVGq13oAyRfLbBZwu%2FDhbFCqa2vKE0W4bFnglfLGv2GmTdJXcTBVyxWaIipqY464CRvadNaLrQUaBny6gh2OvfewTXDrgnQjm7Uueo1B%2BE8gxlMVnT3%2F1yQvj0CUXwl8hV%2F8R%2BDM2FJnGTPpms%2FhuPqd6RmnmjB0gkZosgvaiFkbWlTRiOOZrFKRY659teK9A%2FrorpNzyoVUXcZfu2%2FENSl7zoSSKC%2FL7%2FptQxZUw2OfizQY6pgFp2C%2FHu2a%2BF8QNMnZuk6SreqINcJAySQ5zhbsGIAw2SeqNTZh4IGD0v7XQMA4sbxlQsd3lrbQ%2BiYX805R4DDEQs6zXIcTuwQeXzwATmq9Z36b%2BwBzHfajwlQAvKPWVNWjRaTwUeQ7GGVdleAk5RLZqgYXGn4wsj1RsCpnYvAuNQ7img8qmrAaekSDcQtBtmi1c6pde3JLgLIHTBv0pxdO%2Br6kfb6yf&X-Amz-Signature=4c3c19ac7e4148ca493bf13ad5d1ac8e08a6e58136dc4dc486cf81d6c735dcc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGXOJEU5%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDfWsW1xMNWWD8FixEb34o1nvlqh22kqP1Gl690DtSKegIgTcIv7t9GPLJWify2cpDXO3%2FlfBrcJ18TN%2Fran%2B2mmBcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3a2S3AXgvlBLdTvyrcAx%2Fup5H2TKuLA0joghN83jQXN2G2s5hag1iupHiH4EPJ0xeyhYY4qBFixITqssPUTjyALCAlYk2%2F%2BzEngP34h51QSN2wfgOf9fowTcyiId%2FaJZjQkrclHitmmvi%2FitBOyDbt5849c9%2FV3nd1AzbDgDXz%2F9JC2OOp%2Bp9y7jbf2Y0CxqLHIZz%2Fu8n9e%2BQkDJfxyYJcvDGGUQSSzuAxCB%2Fgv1ahHPQ22ySKcGAwEQu5qfmMaVuWCypP%2B1bW4k07oOKgfSczQQKjKsm3Ds2kTthnl5qwcs9fLann6DrPgMYtGhC6iZcPzen3w9LAEUBuK%2B%2Bj%2Fb3Smi6mjgjTMpscAoLFjmp99lkc2dN0TBGCgAJNDmz5ik%2FCdFZ%2BMYHYG6miMQl1C1l6ak1dVl5dfo%2FjNMx3V7OPi3gKB8Qv7AUAtwXQrx5XJo5F5%2FWld0a%2FdHkkz%2BwzbwhagYYFFLPz3kmke0pSz1K84UwaE69duq13kJsi5EgRDqDJimE5%2BgeiBRgNeNqooIDPNEvNqaVC43bhVZPKADYP6z8ubUCAvca9NVn81emwta9QXRfEXvpJPE4fpoFkQwyJlSmyVjN8b94u090LTjVOSV54fUiy776Wa58rPrwfIGwlg2PbKwRcpFG0MM%2Fn4s0GOqUBaEMxBTgp4VdALukgFEPwXrWhimKsmKoGxapvLSPNzKu2WGMoobSB9fKECK0sH8%2FzFIdTTOnPyBJdlamoGwj0vlxIY3PKYevfRcIbXgZzmqo1425X30rEutP48N1J92ij59FqY7BiRdHTsI9rsKSQaGDaU04Z3S%2FmgPdw5DCFkmUbqbf1zpXixc8ZR%2Fn44HPsFMWgk085PmO3grNffFRtNCO0btSY&X-Amz-Signature=0310f00fe3bb4eaf3e9d52f74ad46ea8ff31be598be71baad4c46a2e5b34faea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFVJGFWO%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T021025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQClvFy%2B3diBWx%2FuVCvvC6LnvP3ZDevT6z4bVkXCF3jk7QIhAIl118JJR9b2Mjcz02Z%2FZoLUpLzx02Yfomz29FxU4HOsKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFsbEb3M5LIgxgtHAq3APvIgQTA5lTT1KCTPJgwWe2t1Yqx1k4JZQjMADcYW%2FlpeC%2F50gW9RFiytFYPXbA0RnlY41AgNKNdxOepR117lx%2B6nedpRoJE8Lvffnfy8XZ%2BZhV7poSBX%2BVaswcpgyQFpEBhGiM3VfSVKZgDl6skI%2Bc1Kn%2BW8t7wnVHIWudxWER%2BPILVaugx%2F4Nx6BoVagxMhGcN2mx09XLO7uX6rEJtrEzWf0p1Z60kEcQNsNH465nU5P6N1W7jC3mnf2iAfK1ahFnJq7Uy6JpVzD8QR6puik7ZHMnJDFnRthbJht9kYoHsPZmel8OpL9W%2F2wRqnLo3KZZfcnXawXya1yOlde71tQ67olEeIuJIsRXXVHABjm32fXwcccgZ%2B4zjufDFCiSvFG%2Bu0%2FfLgSLAKjdFCtMIb%2FYttbLiFXju0mT%2Bc%2BVzNzJIEcwzPehpz50mz5srcLmGl0TACtCt3nFa63RoqR5VvFfediCaJJIa31gAR8XQ%2FHxmhCJBFAz2VsJiL15WtSbueEhJYIAAKMGGWUpD4eixvIz1Ry5DiElua3CiWqadYr07kFSNodIUP0HzyF86VRgqLg4%2FHYPUd8azuFJ1XrHMFBSyOR96Mh7dsMlWlR4BrHf2%2Fsmmtmrz52MhX4N8zDC5%2BLNBjqkAX%2FakS%2F7h0ERqptqh%2FepZOCV8kLnY8c6AkM2cqr7wOPVD3aD0aUs1HP1IppuvkEuInUJyWwpbVd8g80zwDwcYN%2F%2BHls%2Fst9GravT6J9UYQbk3W2ekn%2Fqh2UjnxIx%2FzZ%2BZ%2FvDIMWqSB5Dl75O9U8DSMPCl3Ei3J0%2BcW8Q%2BLlacpDiJrQ9tInf6%2FrZLMSeHrUT9tYCWpWbc5ezHiSYG2lahrdsG8YZ&X-Amz-Signature=42c63e1115e10722ad89d71f46336645bcd56c09b367920439544b1ec4e879a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGXOJEU5%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDfWsW1xMNWWD8FixEb34o1nvlqh22kqP1Gl690DtSKegIgTcIv7t9GPLJWify2cpDXO3%2FlfBrcJ18TN%2Fran%2B2mmBcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3a2S3AXgvlBLdTvyrcAx%2Fup5H2TKuLA0joghN83jQXN2G2s5hag1iupHiH4EPJ0xeyhYY4qBFixITqssPUTjyALCAlYk2%2F%2BzEngP34h51QSN2wfgOf9fowTcyiId%2FaJZjQkrclHitmmvi%2FitBOyDbt5849c9%2FV3nd1AzbDgDXz%2F9JC2OOp%2Bp9y7jbf2Y0CxqLHIZz%2Fu8n9e%2BQkDJfxyYJcvDGGUQSSzuAxCB%2Fgv1ahHPQ22ySKcGAwEQu5qfmMaVuWCypP%2B1bW4k07oOKgfSczQQKjKsm3Ds2kTthnl5qwcs9fLann6DrPgMYtGhC6iZcPzen3w9LAEUBuK%2B%2Bj%2Fb3Smi6mjgjTMpscAoLFjmp99lkc2dN0TBGCgAJNDmz5ik%2FCdFZ%2BMYHYG6miMQl1C1l6ak1dVl5dfo%2FjNMx3V7OPi3gKB8Qv7AUAtwXQrx5XJo5F5%2FWld0a%2FdHkkz%2BwzbwhagYYFFLPz3kmke0pSz1K84UwaE69duq13kJsi5EgRDqDJimE5%2BgeiBRgNeNqooIDPNEvNqaVC43bhVZPKADYP6z8ubUCAvca9NVn81emwta9QXRfEXvpJPE4fpoFkQwyJlSmyVjN8b94u090LTjVOSV54fUiy776Wa58rPrwfIGwlg2PbKwRcpFG0MM%2Fn4s0GOqUBaEMxBTgp4VdALukgFEPwXrWhimKsmKoGxapvLSPNzKu2WGMoobSB9fKECK0sH8%2FzFIdTTOnPyBJdlamoGwj0vlxIY3PKYevfRcIbXgZzmqo1425X30rEutP48N1J92ij59FqY7BiRdHTsI9rsKSQaGDaU04Z3S%2FmgPdw5DCFkmUbqbf1zpXixc8ZR%2Fn44HPsFMWgk085PmO3grNffFRtNCO0btSY&X-Amz-Signature=a19e543b0e0305bf88a3717129ff6376df86fd0cc4d8fb28c4c19081b5cf37bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTKN4BWT%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T021026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCQJNaTNaWwa1E82S0Ap6Q8S5j53BhtEO28hNPkp3TXHQIhAKOY5QWiaboMXZosz2NGSEkbGxLzCMGL5n4Sdoi781AZKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz64S8rmPlsatGZkYAq3APnmMlGaQ1D%2FcCrzUlXUo9C81teEAgGOe8KNQOXyxPeEqGZKR9OMj39TR6LVOsap2okv%2FXp%2FnZ%2Bt3iIan55XxyMh0bVR23DqrtTF5D8doB1dSrhdOTp9qrwHc26cd8xRxx6%2BQcafF%2FIAXAW3wP%2FK8v%2BlAiQbLKxMGSEBVIBlx5oRqoYaKQjVg07N6mMNBScQRtGPf12LC7Pctir9OmHE5AmbMApAI8Nayncz4MZRpdIVA80FQaouLnbmjhHacMiASz9h8Tcvb5%2F9UkR1T5SjtYxtxiVc5zqmticZkJCl1qFyZvVSHCMCs6Dr91nKqiALoiglXdU3RKOslMja8BiDxbYn2hd6jvRUHnxfVK6cSFO3SmQ7Zx12ANyMeQzYwhnEyusIoVb2BVQO7DCwF3vKRBZ%2BUm%2BnB029LwsDJ6l0dI%2BzlYvZeU3JWL%2FGFOTbDQ3WfyERwjk21L%2FPwSnk9oga6PnUZ56RhbZHjOXRDt7iHhrPgQTkv2cS%2FD5%2BJKs2FH2rnnIXikowP5lSHZAsowAFA11JNbmg%2BrKucJRt%2FlU%2B4eE5iMIm34797mvJJq1oZ4IqIf6Prua9kFjcfuod6gOz2untmxuDAPjLFA5%2F3zqqhi5EJA2WVuRY3Y5NFyjPjDU6OLNBjqkAdAA8H3nR2UQpPBS%2ByZmfffRgzGh2xYXv7hNd%2FNVveO%2FL%2F7hLLgNuvcmelduWbMsUEU0%2BH2JpMqhrh4twIB%2BqL%2BIX%2FXoIN4aEWszyfVUajzLrUXpEHK28Ufzb%2FdqcR%2BpiKBGDipDbYOBu%2FzBcmtI812J%2FM37kP3L99tkKK7jmh1ZkpBTUjgSleMxlnmgR1829IKNHbgx4VjHRpLiGyNEpwXdYbkD&X-Amz-Signature=fe52d335d89a383fa28ee7bb618a6cb14d1434ab994a20664206c3433c00dd9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGXOJEU5%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDfWsW1xMNWWD8FixEb34o1nvlqh22kqP1Gl690DtSKegIgTcIv7t9GPLJWify2cpDXO3%2FlfBrcJ18TN%2Fran%2B2mmBcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3a2S3AXgvlBLdTvyrcAx%2Fup5H2TKuLA0joghN83jQXN2G2s5hag1iupHiH4EPJ0xeyhYY4qBFixITqssPUTjyALCAlYk2%2F%2BzEngP34h51QSN2wfgOf9fowTcyiId%2FaJZjQkrclHitmmvi%2FitBOyDbt5849c9%2FV3nd1AzbDgDXz%2F9JC2OOp%2Bp9y7jbf2Y0CxqLHIZz%2Fu8n9e%2BQkDJfxyYJcvDGGUQSSzuAxCB%2Fgv1ahHPQ22ySKcGAwEQu5qfmMaVuWCypP%2B1bW4k07oOKgfSczQQKjKsm3Ds2kTthnl5qwcs9fLann6DrPgMYtGhC6iZcPzen3w9LAEUBuK%2B%2Bj%2Fb3Smi6mjgjTMpscAoLFjmp99lkc2dN0TBGCgAJNDmz5ik%2FCdFZ%2BMYHYG6miMQl1C1l6ak1dVl5dfo%2FjNMx3V7OPi3gKB8Qv7AUAtwXQrx5XJo5F5%2FWld0a%2FdHkkz%2BwzbwhagYYFFLPz3kmke0pSz1K84UwaE69duq13kJsi5EgRDqDJimE5%2BgeiBRgNeNqooIDPNEvNqaVC43bhVZPKADYP6z8ubUCAvca9NVn81emwta9QXRfEXvpJPE4fpoFkQwyJlSmyVjN8b94u090LTjVOSV54fUiy776Wa58rPrwfIGwlg2PbKwRcpFG0MM%2Fn4s0GOqUBaEMxBTgp4VdALukgFEPwXrWhimKsmKoGxapvLSPNzKu2WGMoobSB9fKECK0sH8%2FzFIdTTOnPyBJdlamoGwj0vlxIY3PKYevfRcIbXgZzmqo1425X30rEutP48N1J92ij59FqY7BiRdHTsI9rsKSQaGDaU04Z3S%2FmgPdw5DCFkmUbqbf1zpXixc8ZR%2Fn44HPsFMWgk085PmO3grNffFRtNCO0btSY&X-Amz-Signature=29da43500f138637b75f9b9043dc23c6dce42261c2a3cf0b7275c35dc7262dbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3OGPXDM%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T021028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCICEG7yjkjT9Yx9v2xBB4NJbaxWyOZvfuR07rwlOi4dObAiBoTaxzJ3cvRuGHowFABGZljp9THA5rpzEJhl8OQ1fgbCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUsTcYEzChzLx4%2BhAKtwDL%2FcA72q1dPmdcow%2Fue7%2BtX9WaxE0S%2FYDGiCC7flt6BXFCM4VPTMP684lS6vogDWwbL%2BZy6uNqMGJp00PjP%2FSH9DGOnMSYzDF75y%2BNVv7EmatjQ2sUKuxjtAGx1%2BSL9tcPac35vmbp7Va7%2B7cq8fSQKWD61IK4Ba%2B3909ALUKOwwmr1M6eZ0y5aF2OvzDP9Y8Azj5ofVi3UahkizPnBYv%2BZRKWaRR9tHyZIDMbZrVuCKr7BaMI4gmr9yl20eIHisNTIfXjCN3cO5%2BUb42ziLxsKEaygWHIndkZoXXKpEYOd%2F6rf9UeukJgGErjJKQk%2BbHrbTNTC2654SmSb6EC2c6LKVaUnC5jqC9osm51n6kh40YbGYudi4k0bD3vC8b6ic3mgXwiVPhifdArZ87T2Sjcm%2Bl%2FpR9zSxeUllqlFlGSUqOzxp1vaMlUhoD7gQtDH1RI2FouY5iLhFRVgZgODY8nm%2FbLSYjZID6hSzMi3BUV%2BTxh%2BGIpfzqLbQgrs2Mr8NlVZekrb76z%2F%2BtNDtrv74jHmLtueVVMEiM3n%2Fiw%2FQTFqmBzxBSWSzLLoPouUc9ir0s0SI3BZ6kdT8u6%2BLv2NOjxkRQrUYyC0dELlpAhLl45zJ7COQr%2FUMQlD9fd1gwu%2BjizQY6pgGuIqpvFxe58npRB98pr89yugb8VqR7JVQW%2BgW2ZeIDzK%2BQqf%2B79DO9z7Muxub%2FK1b%2BK8OkYRGlmna3AePHyrVgpcp4QHGJkLX046aogzHsCLkNPNrWf6EcPD6WNaF86qsrKtFYLb67FZM7m478SMsBn46rnZGCMo%2BT%2Bsx3i71FJ1BeBrChC7Obn3LKRBw%2FUNRKtQLQppmjE5IOQF47Za2hjMmNiyOL&X-Amz-Signature=909888b9b868563834d7dc68810307b1422677808b17ade5413525083f5b6ef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BVXOJJY%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T021029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJFMEMCIFfvEj171cQotdP4mQIYqKvrrEqsW7HhxxMWhD0f07euAh9mcfzePuAk3cT9cjsFtkeHpUTnxK57N4x3yQA%2FcfFmKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdcVj5DsTmp4C%2FC4cq3AO95m9HX04StyTyKT9Y4sAP9%2BUzytdVx52GhT%2FJwl79%2FTET7hrUCALrjEZ%2FwP%2Bt0z2EJTtWVVEToKwo1XqW2PbMwHtjuBIDhxkW4c0OqRhgxzqRiE7SwbUsduA%2B7rbciqUphOa%2F9jj8YODE5vnUwJuNKVgwWzE%2B4Bmyh4DtKTA3yDEfTeypQdVmxEGEPPPMAaWASqPoV6%2BN9GmRhJywBmNvomZOCWE7LJkBbnpwKyfbHi0v1CgTraQwEs6BG8lhc5IluaoUJYNAvKm6%2BNoC%2FgrhlLlGTR%2F5LBTuHGAYTOggWrWtMpNPMu2T%2FO0FMJC1qhwE148pgkNRZGkRx5A1E2A05hLrmkNLIJ%2Bt19%2BIknrCf63KdgOIudFlpxUEx8%2Be53w8Y8YG41%2BPWTQ8uHZwaO5xFQXsHTYvh7yWY191ed4NQhe5Vw6ltcdUtdReqk4w9ub2gnx4gy46RRQ2IBizTfIEurg48YjruPZYRJcg5VPFIyuHVYhTly0jRQ5Z%2Fk65P27CYg9umFXY4Wri3ddgV9yd%2FlRdq1Mi6XhTRDpulpKXHGskb3MN0yvisQJoPDONTGXsZy4Zg%2BgwS4MhmZ1oH4LsfvqmZMl3N%2F2TqlAJdlEjoL%2BgEq3rx5SCtH3VeTCc5%2BLNBjqnAVAjw%2F%2FkgVoMqFi3dY7ocot1T8SFh1RbE%2BpkKRymEH%2F1LrnKkMd11TDxo2zM1j%2B44uZr%2Bk8SNxGvMI6wRMbIwtaD8dbk7cJ24zKo6zdKTJhi5oUdulCnUfFE5BNh8rkcYxX5G36pfx4u4tMF9BejbDkbdMwLrna02dEJHvSdnlZvzh%2Bvc%2FFcxDFUMB8qyDTyl97UW45TN%2FnPXlWF31ZM2KZYumlG%2Boxy&X-Amz-Signature=8f5be70697a3fad68377911f2420911bb934be588e3648985361b950a0ce15fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT2HZZYJ%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T021031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIF0NR0zw0LcGKV3Zw8TsZmpZD%2BLDDCoQZFasn86hFAMNAiEAwYhkErVK7uikUHNdnBRKFLybZRmWj0%2BAzU73mBFhEOYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPbbhvw2%2FJYeYOkmCrcAyMLYRen3Fj8zA5tvpQqitsasCCzcqYEGaSPktsqV57BlSXCUdqbuQbMGwkFQWeWVNqlIMxvqQ48gVXIYmHVIztfr%2BzD3KHXlwOoxS3Cs0eKfZnV%2BovF7fg1ZCG8V%2BSVFGWKyoqnnVnepW1WY1ZjkS4D2fxBgpbHVy7waZQ2u0YdziEYkDv5c6cy6XWS4qv5qaK%2F6DdZWxS8M9PkIVOOJkcFyND3XobXXd1VAZiaDRtogrXuNuGs4s%2BwYt%2BPWZOYdZUS9VD3ak7fFFqw4MrEhL8AwOjUisDDJ1RAWZmTst%2Bl7akItDP%2FgNHM4LXK%2FYHpFnQWnXIFihtdulZsd0gkSFHSIvdaTedTmxXI0QjTG4cmsaPQ0Qn6LulP47GagEmwZx8Av0Gjj225Bljfy85oPMTY6fFYCzF6BllbXEo0UqdUqo6OiwAXYYDeuLiVolLWXoz2jLjS0X2%2F%2BttZEjoNS0QuBu184IR5tTx361ZzE8ft56EZc4vVhbSRRxziz7S%2BMN%2B0t1uVMjrkbCtocMcm4VMntFIrUdT2ANLvRFM%2FCzIV8welhKpbZ8B1NyJHp%2BXVqW4%2FtZ7tlCa7i3fMAC%2BIcSlwjPZ8h3U0Pj8pSLwvahhkceNckSxZpsNR18tFMPrn4s0GOqUBf3yCzftxNIKG0x2lx11tQ2ra3psFoKyXj2w1OmKC3w48uTk5f18gyUL0Axrvo8hELr7mZjdbFDObW9v7ptSISgdTnuYX65oVTVevNqtEjWjcYtIa5EDabTQp8ktU2Fww%2BeRfoTBts0v83WlHKKDjDrX3kolktLvGR%2Fpo%2F8U2uVXf1lcvENFqHcc4kgHTwmihfqh1okR6EBB4SDcXRXbCufSTdo3H&X-Amz-Signature=3f1e1ed8ff7aef39d6132803f83fe69f5884b294e9e0247d388e8ad58ebd2176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGXOJEU5%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDfWsW1xMNWWD8FixEb34o1nvlqh22kqP1Gl690DtSKegIgTcIv7t9GPLJWify2cpDXO3%2FlfBrcJ18TN%2Fran%2B2mmBcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3a2S3AXgvlBLdTvyrcAx%2Fup5H2TKuLA0joghN83jQXN2G2s5hag1iupHiH4EPJ0xeyhYY4qBFixITqssPUTjyALCAlYk2%2F%2BzEngP34h51QSN2wfgOf9fowTcyiId%2FaJZjQkrclHitmmvi%2FitBOyDbt5849c9%2FV3nd1AzbDgDXz%2F9JC2OOp%2Bp9y7jbf2Y0CxqLHIZz%2Fu8n9e%2BQkDJfxyYJcvDGGUQSSzuAxCB%2Fgv1ahHPQ22ySKcGAwEQu5qfmMaVuWCypP%2B1bW4k07oOKgfSczQQKjKsm3Ds2kTthnl5qwcs9fLann6DrPgMYtGhC6iZcPzen3w9LAEUBuK%2B%2Bj%2Fb3Smi6mjgjTMpscAoLFjmp99lkc2dN0TBGCgAJNDmz5ik%2FCdFZ%2BMYHYG6miMQl1C1l6ak1dVl5dfo%2FjNMx3V7OPi3gKB8Qv7AUAtwXQrx5XJo5F5%2FWld0a%2FdHkkz%2BwzbwhagYYFFLPz3kmke0pSz1K84UwaE69duq13kJsi5EgRDqDJimE5%2BgeiBRgNeNqooIDPNEvNqaVC43bhVZPKADYP6z8ubUCAvca9NVn81emwta9QXRfEXvpJPE4fpoFkQwyJlSmyVjN8b94u090LTjVOSV54fUiy776Wa58rPrwfIGwlg2PbKwRcpFG0MM%2Fn4s0GOqUBaEMxBTgp4VdALukgFEPwXrWhimKsmKoGxapvLSPNzKu2WGMoobSB9fKECK0sH8%2FzFIdTTOnPyBJdlamoGwj0vlxIY3PKYevfRcIbXgZzmqo1425X30rEutP48N1J92ij59FqY7BiRdHTsI9rsKSQaGDaU04Z3S%2FmgPdw5DCFkmUbqbf1zpXixc8ZR%2Fn44HPsFMWgk085PmO3grNffFRtNCO0btSY&X-Amz-Signature=60d507c57c3802fb7be67483fe48516e6f1a2ee7c88799831db0eec335825915&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGXOJEU5%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDfWsW1xMNWWD8FixEb34o1nvlqh22kqP1Gl690DtSKegIgTcIv7t9GPLJWify2cpDXO3%2FlfBrcJ18TN%2Fran%2B2mmBcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3a2S3AXgvlBLdTvyrcAx%2Fup5H2TKuLA0joghN83jQXN2G2s5hag1iupHiH4EPJ0xeyhYY4qBFixITqssPUTjyALCAlYk2%2F%2BzEngP34h51QSN2wfgOf9fowTcyiId%2FaJZjQkrclHitmmvi%2FitBOyDbt5849c9%2FV3nd1AzbDgDXz%2F9JC2OOp%2Bp9y7jbf2Y0CxqLHIZz%2Fu8n9e%2BQkDJfxyYJcvDGGUQSSzuAxCB%2Fgv1ahHPQ22ySKcGAwEQu5qfmMaVuWCypP%2B1bW4k07oOKgfSczQQKjKsm3Ds2kTthnl5qwcs9fLann6DrPgMYtGhC6iZcPzen3w9LAEUBuK%2B%2Bj%2Fb3Smi6mjgjTMpscAoLFjmp99lkc2dN0TBGCgAJNDmz5ik%2FCdFZ%2BMYHYG6miMQl1C1l6ak1dVl5dfo%2FjNMx3V7OPi3gKB8Qv7AUAtwXQrx5XJo5F5%2FWld0a%2FdHkkz%2BwzbwhagYYFFLPz3kmke0pSz1K84UwaE69duq13kJsi5EgRDqDJimE5%2BgeiBRgNeNqooIDPNEvNqaVC43bhVZPKADYP6z8ubUCAvca9NVn81emwta9QXRfEXvpJPE4fpoFkQwyJlSmyVjN8b94u090LTjVOSV54fUiy776Wa58rPrwfIGwlg2PbKwRcpFG0MM%2Fn4s0GOqUBaEMxBTgp4VdALukgFEPwXrWhimKsmKoGxapvLSPNzKu2WGMoobSB9fKECK0sH8%2FzFIdTTOnPyBJdlamoGwj0vlxIY3PKYevfRcIbXgZzmqo1425X30rEutP48N1J92ij59FqY7BiRdHTsI9rsKSQaGDaU04Z3S%2FmgPdw5DCFkmUbqbf1zpXixc8ZR%2Fn44HPsFMWgk085PmO3grNffFRtNCO0btSY&X-Amz-Signature=92b5e314afa2fc76db9c04fa54c49d1b785ecd43e4833526e45a47c3c05a370d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V4FLAGK%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQD6xk%2F7Cenbsehbg4sbCo%2Fgb3oSBN1dMHiPtLwi7wesvgIhAP9I7dLkSmNv8On5TziX63qypjZp%2B%2Bxkstddh%2FqfR7sxKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxurW0eLU9aiUZ1s6Uq3ANCx1cp2YjGIpd6KuzrV8e5I4BViRd%2F4FThagUGnMX%2BNyET5%2FiNyyRnMi%2BpJZKZ9oEKBc55quZGpF8Sppp2PPAp4Fl0Wg6nQWAZhnxfN7TvnO%2FgOJvIjkgOo%2FKCxa9myWgpu%2Fp26jbRReqpAJNzCfneiSyYkwXe0Ws5cHoO0uYMVSIdF5nwgxnizmAZLzpLB8mgX%2F0%2FdbuwU7fMi9gWnR3IUFPzRfdxgdGxaiarZYJaowfDuvNonL3zG8pSujyZ7V2IN4fBG11HJfZjp%2BeUPh%2Bujt8YoEs5wDBBYYZcrMW7Xj1GYli0TSAuHwCxGpeTJgvOqpre%2F3RMfAQBg3etUs5SjneIAFgF60QMRQCC5Mgk5WogalYT7Cvv7CDg0QS7STCCiaR2uhNu1unWZRK8Rlo%2BgIZ4HPM%2Bt3oA2OBdH6KVbRli2qkPSNtts9NeU%2FhQVmrdotGpNxGkpl50bhMBCE2mSfuaeOBAfQ39yPpBwMfEF25BQqJsIhM4NOzA7JSlrsWNY5hk%2Fc%2FlR7TfGTy5fL1F1tW5fi1CGXZby5SpCHgOYhHcUPKqoz6IohIPvv2b7s83q9X6sKRnKKSU091Xhd%2F7fRF2pgr8Vqn5%2Bgot0vC7q97NoXu3iG7VHL4eRTCH6eLNBjqkARMNxXGS8MelWlOb6VwrRYvuk4Teohocfb5cPcQmJJ8%2F40trqv8%2BTXZU3QX%2BHO8XtHdtl43zFSK0NM9RE9RkvEm9jYUWbv1hRg0MNJ57QHtmo5aqFShTg6hrVgbuPG7RpGj6MwwP9btRnCcrk5%2BTBWAedgv3KGaP5ieN51i6YLC88JOMXBnk4llVC8C69RgniPKyD%2FV25k8VEGqlZxxcHENqqcu9&X-Amz-Signature=fea86bb233f38371a11b7d55af52ee8892d6a03414f96a3844c13423a7ba025d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V4FLAGK%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQD6xk%2F7Cenbsehbg4sbCo%2Fgb3oSBN1dMHiPtLwi7wesvgIhAP9I7dLkSmNv8On5TziX63qypjZp%2B%2Bxkstddh%2FqfR7sxKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxurW0eLU9aiUZ1s6Uq3ANCx1cp2YjGIpd6KuzrV8e5I4BViRd%2F4FThagUGnMX%2BNyET5%2FiNyyRnMi%2BpJZKZ9oEKBc55quZGpF8Sppp2PPAp4Fl0Wg6nQWAZhnxfN7TvnO%2FgOJvIjkgOo%2FKCxa9myWgpu%2Fp26jbRReqpAJNzCfneiSyYkwXe0Ws5cHoO0uYMVSIdF5nwgxnizmAZLzpLB8mgX%2F0%2FdbuwU7fMi9gWnR3IUFPzRfdxgdGxaiarZYJaowfDuvNonL3zG8pSujyZ7V2IN4fBG11HJfZjp%2BeUPh%2Bujt8YoEs5wDBBYYZcrMW7Xj1GYli0TSAuHwCxGpeTJgvOqpre%2F3RMfAQBg3etUs5SjneIAFgF60QMRQCC5Mgk5WogalYT7Cvv7CDg0QS7STCCiaR2uhNu1unWZRK8Rlo%2BgIZ4HPM%2Bt3oA2OBdH6KVbRli2qkPSNtts9NeU%2FhQVmrdotGpNxGkpl50bhMBCE2mSfuaeOBAfQ39yPpBwMfEF25BQqJsIhM4NOzA7JSlrsWNY5hk%2Fc%2FlR7TfGTy5fL1F1tW5fi1CGXZby5SpCHgOYhHcUPKqoz6IohIPvv2b7s83q9X6sKRnKKSU091Xhd%2F7fRF2pgr8Vqn5%2Bgot0vC7q97NoXu3iG7VHL4eRTCH6eLNBjqkARMNxXGS8MelWlOb6VwrRYvuk4Teohocfb5cPcQmJJ8%2F40trqv8%2BTXZU3QX%2BHO8XtHdtl43zFSK0NM9RE9RkvEm9jYUWbv1hRg0MNJ57QHtmo5aqFShTg6hrVgbuPG7RpGj6MwwP9btRnCcrk5%2BTBWAedgv3KGaP5ieN51i6YLC88JOMXBnk4llVC8C69RgniPKyD%2FV25k8VEGqlZxxcHENqqcu9&X-Amz-Signature=058fcf69d997b721964b79b048fd7dff96c492f39390de0f5993993756824ecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V4FLAGK%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQD6xk%2F7Cenbsehbg4sbCo%2Fgb3oSBN1dMHiPtLwi7wesvgIhAP9I7dLkSmNv8On5TziX63qypjZp%2B%2Bxkstddh%2FqfR7sxKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxurW0eLU9aiUZ1s6Uq3ANCx1cp2YjGIpd6KuzrV8e5I4BViRd%2F4FThagUGnMX%2BNyET5%2FiNyyRnMi%2BpJZKZ9oEKBc55quZGpF8Sppp2PPAp4Fl0Wg6nQWAZhnxfN7TvnO%2FgOJvIjkgOo%2FKCxa9myWgpu%2Fp26jbRReqpAJNzCfneiSyYkwXe0Ws5cHoO0uYMVSIdF5nwgxnizmAZLzpLB8mgX%2F0%2FdbuwU7fMi9gWnR3IUFPzRfdxgdGxaiarZYJaowfDuvNonL3zG8pSujyZ7V2IN4fBG11HJfZjp%2BeUPh%2Bujt8YoEs5wDBBYYZcrMW7Xj1GYli0TSAuHwCxGpeTJgvOqpre%2F3RMfAQBg3etUs5SjneIAFgF60QMRQCC5Mgk5WogalYT7Cvv7CDg0QS7STCCiaR2uhNu1unWZRK8Rlo%2BgIZ4HPM%2Bt3oA2OBdH6KVbRli2qkPSNtts9NeU%2FhQVmrdotGpNxGkpl50bhMBCE2mSfuaeOBAfQ39yPpBwMfEF25BQqJsIhM4NOzA7JSlrsWNY5hk%2Fc%2FlR7TfGTy5fL1F1tW5fi1CGXZby5SpCHgOYhHcUPKqoz6IohIPvv2b7s83q9X6sKRnKKSU091Xhd%2F7fRF2pgr8Vqn5%2Bgot0vC7q97NoXu3iG7VHL4eRTCH6eLNBjqkARMNxXGS8MelWlOb6VwrRYvuk4Teohocfb5cPcQmJJ8%2F40trqv8%2BTXZU3QX%2BHO8XtHdtl43zFSK0NM9RE9RkvEm9jYUWbv1hRg0MNJ57QHtmo5aqFShTg6hrVgbuPG7RpGj6MwwP9btRnCcrk5%2BTBWAedgv3KGaP5ieN51i6YLC88JOMXBnk4llVC8C69RgniPKyD%2FV25k8VEGqlZxxcHENqqcu9&X-Amz-Signature=33e1afefba909f2e8bf3df1323bdeb3aca3b36552db41b6ccc9ae720d6018569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V4FLAGK%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQD6xk%2F7Cenbsehbg4sbCo%2Fgb3oSBN1dMHiPtLwi7wesvgIhAP9I7dLkSmNv8On5TziX63qypjZp%2B%2Bxkstddh%2FqfR7sxKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxurW0eLU9aiUZ1s6Uq3ANCx1cp2YjGIpd6KuzrV8e5I4BViRd%2F4FThagUGnMX%2BNyET5%2FiNyyRnMi%2BpJZKZ9oEKBc55quZGpF8Sppp2PPAp4Fl0Wg6nQWAZhnxfN7TvnO%2FgOJvIjkgOo%2FKCxa9myWgpu%2Fp26jbRReqpAJNzCfneiSyYkwXe0Ws5cHoO0uYMVSIdF5nwgxnizmAZLzpLB8mgX%2F0%2FdbuwU7fMi9gWnR3IUFPzRfdxgdGxaiarZYJaowfDuvNonL3zG8pSujyZ7V2IN4fBG11HJfZjp%2BeUPh%2Bujt8YoEs5wDBBYYZcrMW7Xj1GYli0TSAuHwCxGpeTJgvOqpre%2F3RMfAQBg3etUs5SjneIAFgF60QMRQCC5Mgk5WogalYT7Cvv7CDg0QS7STCCiaR2uhNu1unWZRK8Rlo%2BgIZ4HPM%2Bt3oA2OBdH6KVbRli2qkPSNtts9NeU%2FhQVmrdotGpNxGkpl50bhMBCE2mSfuaeOBAfQ39yPpBwMfEF25BQqJsIhM4NOzA7JSlrsWNY5hk%2Fc%2FlR7TfGTy5fL1F1tW5fi1CGXZby5SpCHgOYhHcUPKqoz6IohIPvv2b7s83q9X6sKRnKKSU091Xhd%2F7fRF2pgr8Vqn5%2Bgot0vC7q97NoXu3iG7VHL4eRTCH6eLNBjqkARMNxXGS8MelWlOb6VwrRYvuk4Teohocfb5cPcQmJJ8%2F40trqv8%2BTXZU3QX%2BHO8XtHdtl43zFSK0NM9RE9RkvEm9jYUWbv1hRg0MNJ57QHtmo5aqFShTg6hrVgbuPG7RpGj6MwwP9btRnCcrk5%2BTBWAedgv3KGaP5ieN51i6YLC88JOMXBnk4llVC8C69RgniPKyD%2FV25k8VEGqlZxxcHENqqcu9&X-Amz-Signature=e0df71856dcc219a9acbdc1ac5de10df4a22fa0f000a93c92e5f7d1f7d407153&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZPHYV3U%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T021036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICc%2BiO9FNqTflUKLMYAF8Qz2A9W8eWD%2BBkNpkPEdmSkuAiEAu7ud%2BUaumlpffrV6659VYPPgpCl1cb6aVte1tDatWjoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBn24vD0l5QMRbAi6ircA5uBPBSA75R%2FXa6jtQO01zsJ385l%2F2wvgz88ReAidPvVtg4DwnoSR%2FNtrU5coIFAo%2BGqOXK3U%2F4vmX3PGdJrGRXAhHKYcyvCdeKY%2BnlvvxBzQR%2FktSXeQEut3aVPnW7DQJIDes26QzSkcc4Fr3cIJRvPJ%2FYrF%2B%2BiaR%2BUD48EVAvjgK1uY4zq1u2A%2FyUaYiiot3%2F91orX9uWb%2FfqPTetzJAQX9QI8HxITGS90OhSfnQg%2FUxH4NveAFtKtAth92iXa%2BbCWgHp78TbvvP1Ohj%2FgDvWQsBHjvcc3n0xnpIQb0QNKFhFyy%2F0B82rPediqes9CdjomU3SW755HMwcGxjlNujNb7aSIFh9Qg3WsjrFCn4fasxz0bQ%2FIfP3hDAQGzMrbmyvCoe4PX5CMNT2cyanVM1QIfWydgBGMTdL1aPN%2FS0J%2F0vlQ9MIKmEApZEhGCzQNff8bXQwdP8SMOlzkNdNBXtoUd6AF4y5Iuf0zDZYyk0GuNwKXk0sIdhtjU1Fm5oPJe%2F6qlJXWJBkDfRjQzWQmjAXBBMEybK7CxUCUlr71db7sZ1DsajRJ0BacmXWaRfB5vU2AaoIx14sP9buBGle7vjkCkt5jjwlONr2jiq9%2BeHs5JwssL%2FFB9NnGi%2FFOMM3n4s0GOqUB6VCE9Tu7FhONoBTEj8xn4zp768HmXYd6SpYdGTdE5pUFOPv%2BBE18TxzAY9HJJsisGJSL7gAZCXCSsX4EQa7VuJ2s1Q%2BWCwrg7BhVcuk3XWOAd8pxOvC2PGrjHq4wbZ%2FxLPwNcjrAlL8i4iOF4pObWui4ufPg3wsckZtDkyrl2dr6bonN65l1%2F9elZjxgvVKmNDSZZo3CCS0FDO%2F5gSmritPeUHH9&X-Amz-Signature=ef628cfc3be5d6f8e301d65d5317ed48714847da46483db01108a1efffddadb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V4FLAGK%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQD6xk%2F7Cenbsehbg4sbCo%2Fgb3oSBN1dMHiPtLwi7wesvgIhAP9I7dLkSmNv8On5TziX63qypjZp%2B%2Bxkstddh%2FqfR7sxKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxurW0eLU9aiUZ1s6Uq3ANCx1cp2YjGIpd6KuzrV8e5I4BViRd%2F4FThagUGnMX%2BNyET5%2FiNyyRnMi%2BpJZKZ9oEKBc55quZGpF8Sppp2PPAp4Fl0Wg6nQWAZhnxfN7TvnO%2FgOJvIjkgOo%2FKCxa9myWgpu%2Fp26jbRReqpAJNzCfneiSyYkwXe0Ws5cHoO0uYMVSIdF5nwgxnizmAZLzpLB8mgX%2F0%2FdbuwU7fMi9gWnR3IUFPzRfdxgdGxaiarZYJaowfDuvNonL3zG8pSujyZ7V2IN4fBG11HJfZjp%2BeUPh%2Bujt8YoEs5wDBBYYZcrMW7Xj1GYli0TSAuHwCxGpeTJgvOqpre%2F3RMfAQBg3etUs5SjneIAFgF60QMRQCC5Mgk5WogalYT7Cvv7CDg0QS7STCCiaR2uhNu1unWZRK8Rlo%2BgIZ4HPM%2Bt3oA2OBdH6KVbRli2qkPSNtts9NeU%2FhQVmrdotGpNxGkpl50bhMBCE2mSfuaeOBAfQ39yPpBwMfEF25BQqJsIhM4NOzA7JSlrsWNY5hk%2Fc%2FlR7TfGTy5fL1F1tW5fi1CGXZby5SpCHgOYhHcUPKqoz6IohIPvv2b7s83q9X6sKRnKKSU091Xhd%2F7fRF2pgr8Vqn5%2Bgot0vC7q97NoXu3iG7VHL4eRTCH6eLNBjqkARMNxXGS8MelWlOb6VwrRYvuk4Teohocfb5cPcQmJJ8%2F40trqv8%2BTXZU3QX%2BHO8XtHdtl43zFSK0NM9RE9RkvEm9jYUWbv1hRg0MNJ57QHtmo5aqFShTg6hrVgbuPG7RpGj6MwwP9btRnCcrk5%2BTBWAedgv3KGaP5ieN51i6YLC88JOMXBnk4llVC8C69RgniPKyD%2FV25k8VEGqlZxxcHENqqcu9&X-Amz-Signature=f98c21c59bb4be81081939dd88699c40608f54f9d6bb4c975d045220223dbf2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V4FLAGK%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQD6xk%2F7Cenbsehbg4sbCo%2Fgb3oSBN1dMHiPtLwi7wesvgIhAP9I7dLkSmNv8On5TziX63qypjZp%2B%2Bxkstddh%2FqfR7sxKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxurW0eLU9aiUZ1s6Uq3ANCx1cp2YjGIpd6KuzrV8e5I4BViRd%2F4FThagUGnMX%2BNyET5%2FiNyyRnMi%2BpJZKZ9oEKBc55quZGpF8Sppp2PPAp4Fl0Wg6nQWAZhnxfN7TvnO%2FgOJvIjkgOo%2FKCxa9myWgpu%2Fp26jbRReqpAJNzCfneiSyYkwXe0Ws5cHoO0uYMVSIdF5nwgxnizmAZLzpLB8mgX%2F0%2FdbuwU7fMi9gWnR3IUFPzRfdxgdGxaiarZYJaowfDuvNonL3zG8pSujyZ7V2IN4fBG11HJfZjp%2BeUPh%2Bujt8YoEs5wDBBYYZcrMW7Xj1GYli0TSAuHwCxGpeTJgvOqpre%2F3RMfAQBg3etUs5SjneIAFgF60QMRQCC5Mgk5WogalYT7Cvv7CDg0QS7STCCiaR2uhNu1unWZRK8Rlo%2BgIZ4HPM%2Bt3oA2OBdH6KVbRli2qkPSNtts9NeU%2FhQVmrdotGpNxGkpl50bhMBCE2mSfuaeOBAfQ39yPpBwMfEF25BQqJsIhM4NOzA7JSlrsWNY5hk%2Fc%2FlR7TfGTy5fL1F1tW5fi1CGXZby5SpCHgOYhHcUPKqoz6IohIPvv2b7s83q9X6sKRnKKSU091Xhd%2F7fRF2pgr8Vqn5%2Bgot0vC7q97NoXu3iG7VHL4eRTCH6eLNBjqkARMNxXGS8MelWlOb6VwrRYvuk4Teohocfb5cPcQmJJ8%2F40trqv8%2BTXZU3QX%2BHO8XtHdtl43zFSK0NM9RE9RkvEm9jYUWbv1hRg0MNJ57QHtmo5aqFShTg6hrVgbuPG7RpGj6MwwP9btRnCcrk5%2BTBWAedgv3KGaP5ieN51i6YLC88JOMXBnk4llVC8C69RgniPKyD%2FV25k8VEGqlZxxcHENqqcu9&X-Amz-Signature=382cdd06a96034505600683ce3d7c17e53880ee37ab6ab35adc8892a1ff21cdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V4FLAGK%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQD6xk%2F7Cenbsehbg4sbCo%2Fgb3oSBN1dMHiPtLwi7wesvgIhAP9I7dLkSmNv8On5TziX63qypjZp%2B%2Bxkstddh%2FqfR7sxKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxurW0eLU9aiUZ1s6Uq3ANCx1cp2YjGIpd6KuzrV8e5I4BViRd%2F4FThagUGnMX%2BNyET5%2FiNyyRnMi%2BpJZKZ9oEKBc55quZGpF8Sppp2PPAp4Fl0Wg6nQWAZhnxfN7TvnO%2FgOJvIjkgOo%2FKCxa9myWgpu%2Fp26jbRReqpAJNzCfneiSyYkwXe0Ws5cHoO0uYMVSIdF5nwgxnizmAZLzpLB8mgX%2F0%2FdbuwU7fMi9gWnR3IUFPzRfdxgdGxaiarZYJaowfDuvNonL3zG8pSujyZ7V2IN4fBG11HJfZjp%2BeUPh%2Bujt8YoEs5wDBBYYZcrMW7Xj1GYli0TSAuHwCxGpeTJgvOqpre%2F3RMfAQBg3etUs5SjneIAFgF60QMRQCC5Mgk5WogalYT7Cvv7CDg0QS7STCCiaR2uhNu1unWZRK8Rlo%2BgIZ4HPM%2Bt3oA2OBdH6KVbRli2qkPSNtts9NeU%2FhQVmrdotGpNxGkpl50bhMBCE2mSfuaeOBAfQ39yPpBwMfEF25BQqJsIhM4NOzA7JSlrsWNY5hk%2Fc%2FlR7TfGTy5fL1F1tW5fi1CGXZby5SpCHgOYhHcUPKqoz6IohIPvv2b7s83q9X6sKRnKKSU091Xhd%2F7fRF2pgr8Vqn5%2Bgot0vC7q97NoXu3iG7VHL4eRTCH6eLNBjqkARMNxXGS8MelWlOb6VwrRYvuk4Teohocfb5cPcQmJJ8%2F40trqv8%2BTXZU3QX%2BHO8XtHdtl43zFSK0NM9RE9RkvEm9jYUWbv1hRg0MNJ57QHtmo5aqFShTg6hrVgbuPG7RpGj6MwwP9btRnCcrk5%2BTBWAedgv3KGaP5ieN51i6YLC88JOMXBnk4llVC8C69RgniPKyD%2FV25k8VEGqlZxxcHENqqcu9&X-Amz-Signature=cd69a6547eed8325a4d5d82a47ca272e1037e66d9c6d60e31ba5cb0d271e5b41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V4FLAGK%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQD6xk%2F7Cenbsehbg4sbCo%2Fgb3oSBN1dMHiPtLwi7wesvgIhAP9I7dLkSmNv8On5TziX63qypjZp%2B%2Bxkstddh%2FqfR7sxKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxurW0eLU9aiUZ1s6Uq3ANCx1cp2YjGIpd6KuzrV8e5I4BViRd%2F4FThagUGnMX%2BNyET5%2FiNyyRnMi%2BpJZKZ9oEKBc55quZGpF8Sppp2PPAp4Fl0Wg6nQWAZhnxfN7TvnO%2FgOJvIjkgOo%2FKCxa9myWgpu%2Fp26jbRReqpAJNzCfneiSyYkwXe0Ws5cHoO0uYMVSIdF5nwgxnizmAZLzpLB8mgX%2F0%2FdbuwU7fMi9gWnR3IUFPzRfdxgdGxaiarZYJaowfDuvNonL3zG8pSujyZ7V2IN4fBG11HJfZjp%2BeUPh%2Bujt8YoEs5wDBBYYZcrMW7Xj1GYli0TSAuHwCxGpeTJgvOqpre%2F3RMfAQBg3etUs5SjneIAFgF60QMRQCC5Mgk5WogalYT7Cvv7CDg0QS7STCCiaR2uhNu1unWZRK8Rlo%2BgIZ4HPM%2Bt3oA2OBdH6KVbRli2qkPSNtts9NeU%2FhQVmrdotGpNxGkpl50bhMBCE2mSfuaeOBAfQ39yPpBwMfEF25BQqJsIhM4NOzA7JSlrsWNY5hk%2Fc%2FlR7TfGTy5fL1F1tW5fi1CGXZby5SpCHgOYhHcUPKqoz6IohIPvv2b7s83q9X6sKRnKKSU091Xhd%2F7fRF2pgr8Vqn5%2Bgot0vC7q97NoXu3iG7VHL4eRTCH6eLNBjqkARMNxXGS8MelWlOb6VwrRYvuk4Teohocfb5cPcQmJJ8%2F40trqv8%2BTXZU3QX%2BHO8XtHdtl43zFSK0NM9RE9RkvEm9jYUWbv1hRg0MNJ57QHtmo5aqFShTg6hrVgbuPG7RpGj6MwwP9btRnCcrk5%2BTBWAedgv3KGaP5ieN51i6YLC88JOMXBnk4llVC8C69RgniPKyD%2FV25k8VEGqlZxxcHENqqcu9&X-Amz-Signature=9c0e247225ebcb13b28dc345de51cade550616331b082bdd8e8b7818417912cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V4FLAGK%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQD6xk%2F7Cenbsehbg4sbCo%2Fgb3oSBN1dMHiPtLwi7wesvgIhAP9I7dLkSmNv8On5TziX63qypjZp%2B%2Bxkstddh%2FqfR7sxKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxurW0eLU9aiUZ1s6Uq3ANCx1cp2YjGIpd6KuzrV8e5I4BViRd%2F4FThagUGnMX%2BNyET5%2FiNyyRnMi%2BpJZKZ9oEKBc55quZGpF8Sppp2PPAp4Fl0Wg6nQWAZhnxfN7TvnO%2FgOJvIjkgOo%2FKCxa9myWgpu%2Fp26jbRReqpAJNzCfneiSyYkwXe0Ws5cHoO0uYMVSIdF5nwgxnizmAZLzpLB8mgX%2F0%2FdbuwU7fMi9gWnR3IUFPzRfdxgdGxaiarZYJaowfDuvNonL3zG8pSujyZ7V2IN4fBG11HJfZjp%2BeUPh%2Bujt8YoEs5wDBBYYZcrMW7Xj1GYli0TSAuHwCxGpeTJgvOqpre%2F3RMfAQBg3etUs5SjneIAFgF60QMRQCC5Mgk5WogalYT7Cvv7CDg0QS7STCCiaR2uhNu1unWZRK8Rlo%2BgIZ4HPM%2Bt3oA2OBdH6KVbRli2qkPSNtts9NeU%2FhQVmrdotGpNxGkpl50bhMBCE2mSfuaeOBAfQ39yPpBwMfEF25BQqJsIhM4NOzA7JSlrsWNY5hk%2Fc%2FlR7TfGTy5fL1F1tW5fi1CGXZby5SpCHgOYhHcUPKqoz6IohIPvv2b7s83q9X6sKRnKKSU091Xhd%2F7fRF2pgr8Vqn5%2Bgot0vC7q97NoXu3iG7VHL4eRTCH6eLNBjqkARMNxXGS8MelWlOb6VwrRYvuk4Teohocfb5cPcQmJJ8%2F40trqv8%2BTXZU3QX%2BHO8XtHdtl43zFSK0NM9RE9RkvEm9jYUWbv1hRg0MNJ57QHtmo5aqFShTg6hrVgbuPG7RpGj6MwwP9btRnCcrk5%2BTBWAedgv3KGaP5ieN51i6YLC88JOMXBnk4llVC8C69RgniPKyD%2FV25k8VEGqlZxxcHENqqcu9&X-Amz-Signature=93d45682f7e54d4a1f8c146a8c7d74be3d8222955ad4c0dabf7c06af4e83a2c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V4FLAGK%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQD6xk%2F7Cenbsehbg4sbCo%2Fgb3oSBN1dMHiPtLwi7wesvgIhAP9I7dLkSmNv8On5TziX63qypjZp%2B%2Bxkstddh%2FqfR7sxKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxurW0eLU9aiUZ1s6Uq3ANCx1cp2YjGIpd6KuzrV8e5I4BViRd%2F4FThagUGnMX%2BNyET5%2FiNyyRnMi%2BpJZKZ9oEKBc55quZGpF8Sppp2PPAp4Fl0Wg6nQWAZhnxfN7TvnO%2FgOJvIjkgOo%2FKCxa9myWgpu%2Fp26jbRReqpAJNzCfneiSyYkwXe0Ws5cHoO0uYMVSIdF5nwgxnizmAZLzpLB8mgX%2F0%2FdbuwU7fMi9gWnR3IUFPzRfdxgdGxaiarZYJaowfDuvNonL3zG8pSujyZ7V2IN4fBG11HJfZjp%2BeUPh%2Bujt8YoEs5wDBBYYZcrMW7Xj1GYli0TSAuHwCxGpeTJgvOqpre%2F3RMfAQBg3etUs5SjneIAFgF60QMRQCC5Mgk5WogalYT7Cvv7CDg0QS7STCCiaR2uhNu1unWZRK8Rlo%2BgIZ4HPM%2Bt3oA2OBdH6KVbRli2qkPSNtts9NeU%2FhQVmrdotGpNxGkpl50bhMBCE2mSfuaeOBAfQ39yPpBwMfEF25BQqJsIhM4NOzA7JSlrsWNY5hk%2Fc%2FlR7TfGTy5fL1F1tW5fi1CGXZby5SpCHgOYhHcUPKqoz6IohIPvv2b7s83q9X6sKRnKKSU091Xhd%2F7fRF2pgr8Vqn5%2Bgot0vC7q97NoXu3iG7VHL4eRTCH6eLNBjqkARMNxXGS8MelWlOb6VwrRYvuk4Teohocfb5cPcQmJJ8%2F40trqv8%2BTXZU3QX%2BHO8XtHdtl43zFSK0NM9RE9RkvEm9jYUWbv1hRg0MNJ57QHtmo5aqFShTg6hrVgbuPG7RpGj6MwwP9btRnCcrk5%2BTBWAedgv3KGaP5ieN51i6YLC88JOMXBnk4llVC8C69RgniPKyD%2FV25k8VEGqlZxxcHENqqcu9&X-Amz-Signature=122cf18be576b7b725807c4740387154c87e76cbba4789ae754002612c3fb38a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


