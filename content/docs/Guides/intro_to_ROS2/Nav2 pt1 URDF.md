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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKTHKSJO%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDGFlfB5rjkTjNk48fK4bgKsfTx%2FdZc%2B%2BxDllVmtv2c9QIgB9iMiI3QIJsFg5W3KKILUQRazBdJVFEjF0z9RYDMt3gq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHVESS8zQ04QwEe4xyrcAw4VuakDWvSyH7YBMKp9xzeW81%2FRURKuN9amxvDHt23XjH1haoFFCVNC9b0%2FLh%2B%2FlQYAbGnBRk3Pd8%2FZpUajwW7rhtDjLLMmMQ6D0hZKScWeAKrK34F8J4JQS4XRpzFGQDR3poDUupbBcwmnVFYPG8ZB5dbJC8rU16FLzfsm8q4fgWK1g%2BT54Jyo9lGGiM8KiuV1shp8Xy3ZO6mhRa7QqNFGJDWL2%2FHLIFuZ8ZiAqWFXcs06ndqcyoy78fdz63KdbFIMQVjYtxziRODY93X74%2FxeVlojy7J5%2FiumMGn54OPSPHZqYWaUWLAPNO2x87H4rT9OlZYkI5BSgawNmschKgaExzR68OIpOi3Wfoqbk81hfpjQmwbRxGvvuSx4LIjcXxRrC4pFD1Ma6JPykec3mngkjMqJlQriToPic26130h9QQO6qPcw3MRhj3G6rMgsP%2BHVK3aEMNDInNPA7%2Fi4NMheDVlyfMdQogpmDkrxrJuyowq4hLssa7CdYuPh9lSmEXjgp7RggQMV9hxGcbBHonhZ2qvx6LXDlVOO4BpaGpllaa4bIbj%2BCrzVUAHVKMz78zmTsjAaNjTXDG4ubEN9OLUuuRomyeGZVkbeqakhMB6fxyuxhs%2FKH2AXwOF5MLiqm88GOqUB%2BWEIo1HVQbBJp3EV5e%2FLuParGydI2sfkflg1CNZvEID0We6cRMGTHRNiWx%2BDETvivZvWNj2VCMYX3B4vEa1mQhXp2M5vCRuh3SMmUstewlrPHbUNpIRuO52mE6YBIasVYe40U22RjTbJk3VgLeVuAMkvdZI%2FrbRGj5WsA0S4J7ulw%2Btdt%2BKZAzH3lSRae155H4fyYOkLiV2keJZeRS8xqQ9CE1IE&X-Amz-Signature=8591e53cf6dc82f0232b33bf551dcd0eb0f0ea0c7c457d33f737b726a20c9156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKTHKSJO%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDGFlfB5rjkTjNk48fK4bgKsfTx%2FdZc%2B%2BxDllVmtv2c9QIgB9iMiI3QIJsFg5W3KKILUQRazBdJVFEjF0z9RYDMt3gq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHVESS8zQ04QwEe4xyrcAw4VuakDWvSyH7YBMKp9xzeW81%2FRURKuN9amxvDHt23XjH1haoFFCVNC9b0%2FLh%2B%2FlQYAbGnBRk3Pd8%2FZpUajwW7rhtDjLLMmMQ6D0hZKScWeAKrK34F8J4JQS4XRpzFGQDR3poDUupbBcwmnVFYPG8ZB5dbJC8rU16FLzfsm8q4fgWK1g%2BT54Jyo9lGGiM8KiuV1shp8Xy3ZO6mhRa7QqNFGJDWL2%2FHLIFuZ8ZiAqWFXcs06ndqcyoy78fdz63KdbFIMQVjYtxziRODY93X74%2FxeVlojy7J5%2FiumMGn54OPSPHZqYWaUWLAPNO2x87H4rT9OlZYkI5BSgawNmschKgaExzR68OIpOi3Wfoqbk81hfpjQmwbRxGvvuSx4LIjcXxRrC4pFD1Ma6JPykec3mngkjMqJlQriToPic26130h9QQO6qPcw3MRhj3G6rMgsP%2BHVK3aEMNDInNPA7%2Fi4NMheDVlyfMdQogpmDkrxrJuyowq4hLssa7CdYuPh9lSmEXjgp7RggQMV9hxGcbBHonhZ2qvx6LXDlVOO4BpaGpllaa4bIbj%2BCrzVUAHVKMz78zmTsjAaNjTXDG4ubEN9OLUuuRomyeGZVkbeqakhMB6fxyuxhs%2FKH2AXwOF5MLiqm88GOqUB%2BWEIo1HVQbBJp3EV5e%2FLuParGydI2sfkflg1CNZvEID0We6cRMGTHRNiWx%2BDETvivZvWNj2VCMYX3B4vEa1mQhXp2M5vCRuh3SMmUstewlrPHbUNpIRuO52mE6YBIasVYe40U22RjTbJk3VgLeVuAMkvdZI%2FrbRGj5WsA0S4J7ulw%2Btdt%2BKZAzH3lSRae155H4fyYOkLiV2keJZeRS8xqQ9CE1IE&X-Amz-Signature=5408d571c5902152ebea3d321239b4f2ffe217a93599b7cb60e11b91234159f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKTHKSJO%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDGFlfB5rjkTjNk48fK4bgKsfTx%2FdZc%2B%2BxDllVmtv2c9QIgB9iMiI3QIJsFg5W3KKILUQRazBdJVFEjF0z9RYDMt3gq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHVESS8zQ04QwEe4xyrcAw4VuakDWvSyH7YBMKp9xzeW81%2FRURKuN9amxvDHt23XjH1haoFFCVNC9b0%2FLh%2B%2FlQYAbGnBRk3Pd8%2FZpUajwW7rhtDjLLMmMQ6D0hZKScWeAKrK34F8J4JQS4XRpzFGQDR3poDUupbBcwmnVFYPG8ZB5dbJC8rU16FLzfsm8q4fgWK1g%2BT54Jyo9lGGiM8KiuV1shp8Xy3ZO6mhRa7QqNFGJDWL2%2FHLIFuZ8ZiAqWFXcs06ndqcyoy78fdz63KdbFIMQVjYtxziRODY93X74%2FxeVlojy7J5%2FiumMGn54OPSPHZqYWaUWLAPNO2x87H4rT9OlZYkI5BSgawNmschKgaExzR68OIpOi3Wfoqbk81hfpjQmwbRxGvvuSx4LIjcXxRrC4pFD1Ma6JPykec3mngkjMqJlQriToPic26130h9QQO6qPcw3MRhj3G6rMgsP%2BHVK3aEMNDInNPA7%2Fi4NMheDVlyfMdQogpmDkrxrJuyowq4hLssa7CdYuPh9lSmEXjgp7RggQMV9hxGcbBHonhZ2qvx6LXDlVOO4BpaGpllaa4bIbj%2BCrzVUAHVKMz78zmTsjAaNjTXDG4ubEN9OLUuuRomyeGZVkbeqakhMB6fxyuxhs%2FKH2AXwOF5MLiqm88GOqUB%2BWEIo1HVQbBJp3EV5e%2FLuParGydI2sfkflg1CNZvEID0We6cRMGTHRNiWx%2BDETvivZvWNj2VCMYX3B4vEa1mQhXp2M5vCRuh3SMmUstewlrPHbUNpIRuO52mE6YBIasVYe40U22RjTbJk3VgLeVuAMkvdZI%2FrbRGj5WsA0S4J7ulw%2Btdt%2BKZAzH3lSRae155H4fyYOkLiV2keJZeRS8xqQ9CE1IE&X-Amz-Signature=c81803e4c5d6c3073a05c5dcf5f57c971808d2f2b0b01a2bfcc84b5554dcdfb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKTHKSJO%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDGFlfB5rjkTjNk48fK4bgKsfTx%2FdZc%2B%2BxDllVmtv2c9QIgB9iMiI3QIJsFg5W3KKILUQRazBdJVFEjF0z9RYDMt3gq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHVESS8zQ04QwEe4xyrcAw4VuakDWvSyH7YBMKp9xzeW81%2FRURKuN9amxvDHt23XjH1haoFFCVNC9b0%2FLh%2B%2FlQYAbGnBRk3Pd8%2FZpUajwW7rhtDjLLMmMQ6D0hZKScWeAKrK34F8J4JQS4XRpzFGQDR3poDUupbBcwmnVFYPG8ZB5dbJC8rU16FLzfsm8q4fgWK1g%2BT54Jyo9lGGiM8KiuV1shp8Xy3ZO6mhRa7QqNFGJDWL2%2FHLIFuZ8ZiAqWFXcs06ndqcyoy78fdz63KdbFIMQVjYtxziRODY93X74%2FxeVlojy7J5%2FiumMGn54OPSPHZqYWaUWLAPNO2x87H4rT9OlZYkI5BSgawNmschKgaExzR68OIpOi3Wfoqbk81hfpjQmwbRxGvvuSx4LIjcXxRrC4pFD1Ma6JPykec3mngkjMqJlQriToPic26130h9QQO6qPcw3MRhj3G6rMgsP%2BHVK3aEMNDInNPA7%2Fi4NMheDVlyfMdQogpmDkrxrJuyowq4hLssa7CdYuPh9lSmEXjgp7RggQMV9hxGcbBHonhZ2qvx6LXDlVOO4BpaGpllaa4bIbj%2BCrzVUAHVKMz78zmTsjAaNjTXDG4ubEN9OLUuuRomyeGZVkbeqakhMB6fxyuxhs%2FKH2AXwOF5MLiqm88GOqUB%2BWEIo1HVQbBJp3EV5e%2FLuParGydI2sfkflg1CNZvEID0We6cRMGTHRNiWx%2BDETvivZvWNj2VCMYX3B4vEa1mQhXp2M5vCRuh3SMmUstewlrPHbUNpIRuO52mE6YBIasVYe40U22RjTbJk3VgLeVuAMkvdZI%2FrbRGj5WsA0S4J7ulw%2Btdt%2BKZAzH3lSRae155H4fyYOkLiV2keJZeRS8xqQ9CE1IE&X-Amz-Signature=2d0c5e49284ad3bcef2dee92d75a53c569135df8434764a1dbbfc19d490f32fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKTHKSJO%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDGFlfB5rjkTjNk48fK4bgKsfTx%2FdZc%2B%2BxDllVmtv2c9QIgB9iMiI3QIJsFg5W3KKILUQRazBdJVFEjF0z9RYDMt3gq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHVESS8zQ04QwEe4xyrcAw4VuakDWvSyH7YBMKp9xzeW81%2FRURKuN9amxvDHt23XjH1haoFFCVNC9b0%2FLh%2B%2FlQYAbGnBRk3Pd8%2FZpUajwW7rhtDjLLMmMQ6D0hZKScWeAKrK34F8J4JQS4XRpzFGQDR3poDUupbBcwmnVFYPG8ZB5dbJC8rU16FLzfsm8q4fgWK1g%2BT54Jyo9lGGiM8KiuV1shp8Xy3ZO6mhRa7QqNFGJDWL2%2FHLIFuZ8ZiAqWFXcs06ndqcyoy78fdz63KdbFIMQVjYtxziRODY93X74%2FxeVlojy7J5%2FiumMGn54OPSPHZqYWaUWLAPNO2x87H4rT9OlZYkI5BSgawNmschKgaExzR68OIpOi3Wfoqbk81hfpjQmwbRxGvvuSx4LIjcXxRrC4pFD1Ma6JPykec3mngkjMqJlQriToPic26130h9QQO6qPcw3MRhj3G6rMgsP%2BHVK3aEMNDInNPA7%2Fi4NMheDVlyfMdQogpmDkrxrJuyowq4hLssa7CdYuPh9lSmEXjgp7RggQMV9hxGcbBHonhZ2qvx6LXDlVOO4BpaGpllaa4bIbj%2BCrzVUAHVKMz78zmTsjAaNjTXDG4ubEN9OLUuuRomyeGZVkbeqakhMB6fxyuxhs%2FKH2AXwOF5MLiqm88GOqUB%2BWEIo1HVQbBJp3EV5e%2FLuParGydI2sfkflg1CNZvEID0We6cRMGTHRNiWx%2BDETvivZvWNj2VCMYX3B4vEa1mQhXp2M5vCRuh3SMmUstewlrPHbUNpIRuO52mE6YBIasVYe40U22RjTbJk3VgLeVuAMkvdZI%2FrbRGj5WsA0S4J7ulw%2Btdt%2BKZAzH3lSRae155H4fyYOkLiV2keJZeRS8xqQ9CE1IE&X-Amz-Signature=ae90e9bebc25af295312be6fb7e857703dc862ce508db27150549dbe7aa7d09c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKTHKSJO%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDGFlfB5rjkTjNk48fK4bgKsfTx%2FdZc%2B%2BxDllVmtv2c9QIgB9iMiI3QIJsFg5W3KKILUQRazBdJVFEjF0z9RYDMt3gq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHVESS8zQ04QwEe4xyrcAw4VuakDWvSyH7YBMKp9xzeW81%2FRURKuN9amxvDHt23XjH1haoFFCVNC9b0%2FLh%2B%2FlQYAbGnBRk3Pd8%2FZpUajwW7rhtDjLLMmMQ6D0hZKScWeAKrK34F8J4JQS4XRpzFGQDR3poDUupbBcwmnVFYPG8ZB5dbJC8rU16FLzfsm8q4fgWK1g%2BT54Jyo9lGGiM8KiuV1shp8Xy3ZO6mhRa7QqNFGJDWL2%2FHLIFuZ8ZiAqWFXcs06ndqcyoy78fdz63KdbFIMQVjYtxziRODY93X74%2FxeVlojy7J5%2FiumMGn54OPSPHZqYWaUWLAPNO2x87H4rT9OlZYkI5BSgawNmschKgaExzR68OIpOi3Wfoqbk81hfpjQmwbRxGvvuSx4LIjcXxRrC4pFD1Ma6JPykec3mngkjMqJlQriToPic26130h9QQO6qPcw3MRhj3G6rMgsP%2BHVK3aEMNDInNPA7%2Fi4NMheDVlyfMdQogpmDkrxrJuyowq4hLssa7CdYuPh9lSmEXjgp7RggQMV9hxGcbBHonhZ2qvx6LXDlVOO4BpaGpllaa4bIbj%2BCrzVUAHVKMz78zmTsjAaNjTXDG4ubEN9OLUuuRomyeGZVkbeqakhMB6fxyuxhs%2FKH2AXwOF5MLiqm88GOqUB%2BWEIo1HVQbBJp3EV5e%2FLuParGydI2sfkflg1CNZvEID0We6cRMGTHRNiWx%2BDETvivZvWNj2VCMYX3B4vEa1mQhXp2M5vCRuh3SMmUstewlrPHbUNpIRuO52mE6YBIasVYe40U22RjTbJk3VgLeVuAMkvdZI%2FrbRGj5WsA0S4J7ulw%2Btdt%2BKZAzH3lSRae155H4fyYOkLiV2keJZeRS8xqQ9CE1IE&X-Amz-Signature=26e721e296145dc70341d7572d757f634ebed340109a7dcd7cc8a88f331b2826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKTHKSJO%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDGFlfB5rjkTjNk48fK4bgKsfTx%2FdZc%2B%2BxDllVmtv2c9QIgB9iMiI3QIJsFg5W3KKILUQRazBdJVFEjF0z9RYDMt3gq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHVESS8zQ04QwEe4xyrcAw4VuakDWvSyH7YBMKp9xzeW81%2FRURKuN9amxvDHt23XjH1haoFFCVNC9b0%2FLh%2B%2FlQYAbGnBRk3Pd8%2FZpUajwW7rhtDjLLMmMQ6D0hZKScWeAKrK34F8J4JQS4XRpzFGQDR3poDUupbBcwmnVFYPG8ZB5dbJC8rU16FLzfsm8q4fgWK1g%2BT54Jyo9lGGiM8KiuV1shp8Xy3ZO6mhRa7QqNFGJDWL2%2FHLIFuZ8ZiAqWFXcs06ndqcyoy78fdz63KdbFIMQVjYtxziRODY93X74%2FxeVlojy7J5%2FiumMGn54OPSPHZqYWaUWLAPNO2x87H4rT9OlZYkI5BSgawNmschKgaExzR68OIpOi3Wfoqbk81hfpjQmwbRxGvvuSx4LIjcXxRrC4pFD1Ma6JPykec3mngkjMqJlQriToPic26130h9QQO6qPcw3MRhj3G6rMgsP%2BHVK3aEMNDInNPA7%2Fi4NMheDVlyfMdQogpmDkrxrJuyowq4hLssa7CdYuPh9lSmEXjgp7RggQMV9hxGcbBHonhZ2qvx6LXDlVOO4BpaGpllaa4bIbj%2BCrzVUAHVKMz78zmTsjAaNjTXDG4ubEN9OLUuuRomyeGZVkbeqakhMB6fxyuxhs%2FKH2AXwOF5MLiqm88GOqUB%2BWEIo1HVQbBJp3EV5e%2FLuParGydI2sfkflg1CNZvEID0We6cRMGTHRNiWx%2BDETvivZvWNj2VCMYX3B4vEa1mQhXp2M5vCRuh3SMmUstewlrPHbUNpIRuO52mE6YBIasVYe40U22RjTbJk3VgLeVuAMkvdZI%2FrbRGj5WsA0S4J7ulw%2Btdt%2BKZAzH3lSRae155H4fyYOkLiV2keJZeRS8xqQ9CE1IE&X-Amz-Signature=e231bff3a7037c8be9d1c23ca05ffc5c2309921181600bd8984b6064e06ff725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKTHKSJO%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDGFlfB5rjkTjNk48fK4bgKsfTx%2FdZc%2B%2BxDllVmtv2c9QIgB9iMiI3QIJsFg5W3KKILUQRazBdJVFEjF0z9RYDMt3gq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHVESS8zQ04QwEe4xyrcAw4VuakDWvSyH7YBMKp9xzeW81%2FRURKuN9amxvDHt23XjH1haoFFCVNC9b0%2FLh%2B%2FlQYAbGnBRk3Pd8%2FZpUajwW7rhtDjLLMmMQ6D0hZKScWeAKrK34F8J4JQS4XRpzFGQDR3poDUupbBcwmnVFYPG8ZB5dbJC8rU16FLzfsm8q4fgWK1g%2BT54Jyo9lGGiM8KiuV1shp8Xy3ZO6mhRa7QqNFGJDWL2%2FHLIFuZ8ZiAqWFXcs06ndqcyoy78fdz63KdbFIMQVjYtxziRODY93X74%2FxeVlojy7J5%2FiumMGn54OPSPHZqYWaUWLAPNO2x87H4rT9OlZYkI5BSgawNmschKgaExzR68OIpOi3Wfoqbk81hfpjQmwbRxGvvuSx4LIjcXxRrC4pFD1Ma6JPykec3mngkjMqJlQriToPic26130h9QQO6qPcw3MRhj3G6rMgsP%2BHVK3aEMNDInNPA7%2Fi4NMheDVlyfMdQogpmDkrxrJuyowq4hLssa7CdYuPh9lSmEXjgp7RggQMV9hxGcbBHonhZ2qvx6LXDlVOO4BpaGpllaa4bIbj%2BCrzVUAHVKMz78zmTsjAaNjTXDG4ubEN9OLUuuRomyeGZVkbeqakhMB6fxyuxhs%2FKH2AXwOF5MLiqm88GOqUB%2BWEIo1HVQbBJp3EV5e%2FLuParGydI2sfkflg1CNZvEID0We6cRMGTHRNiWx%2BDETvivZvWNj2VCMYX3B4vEa1mQhXp2M5vCRuh3SMmUstewlrPHbUNpIRuO52mE6YBIasVYe40U22RjTbJk3VgLeVuAMkvdZI%2FrbRGj5WsA0S4J7ulw%2Btdt%2BKZAzH3lSRae155H4fyYOkLiV2keJZeRS8xqQ9CE1IE&X-Amz-Signature=46c21341e9b6f41e891a9771919efafebb06970f77a59c1d7f08e97bd3bcd23c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKTHKSJO%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDGFlfB5rjkTjNk48fK4bgKsfTx%2FdZc%2B%2BxDllVmtv2c9QIgB9iMiI3QIJsFg5W3KKILUQRazBdJVFEjF0z9RYDMt3gq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHVESS8zQ04QwEe4xyrcAw4VuakDWvSyH7YBMKp9xzeW81%2FRURKuN9amxvDHt23XjH1haoFFCVNC9b0%2FLh%2B%2FlQYAbGnBRk3Pd8%2FZpUajwW7rhtDjLLMmMQ6D0hZKScWeAKrK34F8J4JQS4XRpzFGQDR3poDUupbBcwmnVFYPG8ZB5dbJC8rU16FLzfsm8q4fgWK1g%2BT54Jyo9lGGiM8KiuV1shp8Xy3ZO6mhRa7QqNFGJDWL2%2FHLIFuZ8ZiAqWFXcs06ndqcyoy78fdz63KdbFIMQVjYtxziRODY93X74%2FxeVlojy7J5%2FiumMGn54OPSPHZqYWaUWLAPNO2x87H4rT9OlZYkI5BSgawNmschKgaExzR68OIpOi3Wfoqbk81hfpjQmwbRxGvvuSx4LIjcXxRrC4pFD1Ma6JPykec3mngkjMqJlQriToPic26130h9QQO6qPcw3MRhj3G6rMgsP%2BHVK3aEMNDInNPA7%2Fi4NMheDVlyfMdQogpmDkrxrJuyowq4hLssa7CdYuPh9lSmEXjgp7RggQMV9hxGcbBHonhZ2qvx6LXDlVOO4BpaGpllaa4bIbj%2BCrzVUAHVKMz78zmTsjAaNjTXDG4ubEN9OLUuuRomyeGZVkbeqakhMB6fxyuxhs%2FKH2AXwOF5MLiqm88GOqUB%2BWEIo1HVQbBJp3EV5e%2FLuParGydI2sfkflg1CNZvEID0We6cRMGTHRNiWx%2BDETvivZvWNj2VCMYX3B4vEa1mQhXp2M5vCRuh3SMmUstewlrPHbUNpIRuO52mE6YBIasVYe40U22RjTbJk3VgLeVuAMkvdZI%2FrbRGj5WsA0S4J7ulw%2Btdt%2BKZAzH3lSRae155H4fyYOkLiV2keJZeRS8xqQ9CE1IE&X-Amz-Signature=260294b71dd1d483424038b4a66953780feeba2df56352fbd94ddd25c22a1cbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKTHKSJO%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDGFlfB5rjkTjNk48fK4bgKsfTx%2FdZc%2B%2BxDllVmtv2c9QIgB9iMiI3QIJsFg5W3KKILUQRazBdJVFEjF0z9RYDMt3gq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHVESS8zQ04QwEe4xyrcAw4VuakDWvSyH7YBMKp9xzeW81%2FRURKuN9amxvDHt23XjH1haoFFCVNC9b0%2FLh%2B%2FlQYAbGnBRk3Pd8%2FZpUajwW7rhtDjLLMmMQ6D0hZKScWeAKrK34F8J4JQS4XRpzFGQDR3poDUupbBcwmnVFYPG8ZB5dbJC8rU16FLzfsm8q4fgWK1g%2BT54Jyo9lGGiM8KiuV1shp8Xy3ZO6mhRa7QqNFGJDWL2%2FHLIFuZ8ZiAqWFXcs06ndqcyoy78fdz63KdbFIMQVjYtxziRODY93X74%2FxeVlojy7J5%2FiumMGn54OPSPHZqYWaUWLAPNO2x87H4rT9OlZYkI5BSgawNmschKgaExzR68OIpOi3Wfoqbk81hfpjQmwbRxGvvuSx4LIjcXxRrC4pFD1Ma6JPykec3mngkjMqJlQriToPic26130h9QQO6qPcw3MRhj3G6rMgsP%2BHVK3aEMNDInNPA7%2Fi4NMheDVlyfMdQogpmDkrxrJuyowq4hLssa7CdYuPh9lSmEXjgp7RggQMV9hxGcbBHonhZ2qvx6LXDlVOO4BpaGpllaa4bIbj%2BCrzVUAHVKMz78zmTsjAaNjTXDG4ubEN9OLUuuRomyeGZVkbeqakhMB6fxyuxhs%2FKH2AXwOF5MLiqm88GOqUB%2BWEIo1HVQbBJp3EV5e%2FLuParGydI2sfkflg1CNZvEID0We6cRMGTHRNiWx%2BDETvivZvWNj2VCMYX3B4vEa1mQhXp2M5vCRuh3SMmUstewlrPHbUNpIRuO52mE6YBIasVYe40U22RjTbJk3VgLeVuAMkvdZI%2FrbRGj5WsA0S4J7ulw%2Btdt%2BKZAzH3lSRae155H4fyYOkLiV2keJZeRS8xqQ9CE1IE&X-Amz-Signature=45da5604b48230a5a87974ea72e597c7a9312edb76ee26d00f1d7b89a975f05c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ROBFN4%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCBKdZfUnvyL%2Bb%2BN5oX7P%2BPgzXaY4IuuWl9ZXHMo18VUwIgBLZlew4B%2FRQtOfYXmXVSmjLK6L3pGGJ7cpXRABovIG4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGwygctV%2BcDsrMA%2BoCrcA1i4Bk20qOCqqu8Rp%2Ft%2BVJJLVU2SjKASEL%2BbJUmpG6K9hea7mDecmhbFeXkkvKwzahPZnSwuxySrryNeNNsj4NeGG7uv%2FDMGK4s8sMGfNaa20yxb3%2Fn1Ry%2FEPrSirBW%2Fti1zQU%2FRRqkDj6kO%2FHCEZa%2F6OVUnuiOAnUFRpzHHCpitmyYv%2FmoqSJWCrhiWsFC%2FaQjroijcEo%2B20Sg1fUplSIRZYBiRMjqHwCxq7Xe4mNUZdKxJZX90q493MGYkSrfNhx%2B%2BY27uKbvMjTeRV6gzGVVCVkhwzojf8jEs4nHSc7hteAVQdyUXMDgzWRZuBvl3s9cabZC0Vb9iSjLjSFVOEAl6mK8F%2FMY%2FR3IjHoQ%2BVWXgZ6V1vLpaxA5SSxmEgSxse%2FZeXA3HWywurp5cG1ovE65b1o58gutaOUJXrbt596yDks5GBMsb7ilsvE3PO1Autuxyhoi%2F0eWXKvG%2Bbc%2FbXXSYuNYE8rXNMwKhMqOriil0320gXRIY8grMBqbDLMQV3%2FAI6MDsSUz3B%2FiaTDTZQjO4dmvNU3371lYK4XTOqApPyCXgPpb%2FznWJFyX4UddwE929XjdiprfNDaOAoX91UG65ZpiSO9G2PNgn9xU%2BRB2e2%2BEWSQoXaNyTQnLUMPqqm88GOqUBqCtNJJ%2BU08QB646FyVdoHfXdJwRgPS51iqDu5pic2NYITKIpjCt%2F1BmYR4S1iOW1vOWZCg7y29fmJ0oyzaQy5Qk2SnLaRzirATy0jDrPHSGPS5kTbFq0QS0du5Ms57KJJZFQYUBa4jdQ6lQqdd%2F04kE4zfvnQ%2F9nHLyZqh9iEi2e0ThCT98QywH3ujwQQJj%2Fh1nwzLgkEVymzfx6dad10OEgM036&X-Amz-Signature=46c69cdc33cc0acf3adcb006381e1f2a29d76dd941a70957263584d10714ad27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QZK27AG%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCdgmcuI9V3HY%2FqmAtWP%2BQtHD5PjYrf05OjM3e6P3mYBgIhAPtolUUbtciDNArIjtX8s6LW1L2fAoP6yaOe2%2F%2FycLrYKv8DCCsQABoMNjM3NDIzMTgzODA1IgzMUPdcchKtbxPGbPgq3AOqCS%2FGwiI1gYAOYgoAcmLHlqwrfSSALnD974S5h35Hp8dKIJJqsCO7GVYTIjdrO59NFDXti6KNHnd8vhF5I3DyPvyDagzlN72am5vdxd%2BBsJiWXT1MZvqbzzAE2cZVV0WwtpgfMpAD3OP3imsPsl76rebHIWS0bp%2FxYb2PXtR%2FiEAkEa%2F3Z8u%2FdL0U2ZODxgRu68YeX0vC%2FvKvPoqLABHlA6tvVXEt3v5CE3De2nMsxWXojXcjUL20yZ0uULTu4nmY0SfDhUr5%2Fc4iOPh3Ff39y%2BdWGgS0iPzTSSU%2BmYuqU9YRJXOePkYyWG14mYa97H7yWBQerfUazIFHwOI9G1boZy9maGL11b%2FjhgIc4cuLC0vju2gA69CKyd5WxRvJdIpLvSbEsCGBX5V0NkjyFDhgMNK0YPmmj%2BvjkijWNb6l1eco%2F4AzbdZ6UR3cJHG4xXAaPTYB%2FmqdEAelnn7hslerFArhCddaOkpG3DDoy22RkSFzzb9813JQaj7gg8vuLtg4aKTG4eQmPqEs%2BNftdG62aQFOR6SJgLHFXXZDdslxVaNU8DpNintQHolYysj6Oj%2F956ORM%2FV69Wi%2B2lnYhuHT2hOF5IfcNuRGEXAVpyBfTeZ%2BIatz2VGDvvlEejClqpvPBjqkAUDQ%2FwWNUXI0DQyi4JhWiLRs15Vz2KGHHFHPMBP%2BMF8lcvv7ab9tAAimbdkVdZHRnWBhYXXoYXnXPgNFXJKEcneh702tPYAFP1NiwEUNl%2FGCswLcwT6JQxfaWWOgq23gg%2B83om%2F9cIfQc0xA52k3oTkJws2zlUBKATKzXRb4PipwU4AWw08FWaiNPeVlQkz4UUHTX1jV6eQDZPzAabbVaEkzmT4Y&X-Amz-Signature=227d2967a2d536129e34e1f74a13785eb6cb93d30ca863ef804267700b00a817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664OMHVEC%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCRoH3zHnqFsYtbMTvkYzi4dq5Nteg%2FMAXMzu5%2Bar1RBAIhAM83VKEU%2BDfM3Urp7RUmbRN%2Fr4vLn1vu9Efb3Mdta49IKv8DCCsQABoMNjM3NDIzMTgzODA1IgzMD9%2FJ6YLsmLoWSakq3APcqij%2FU0mzE5mET7oDGIaZOcU6Bwqg5LBAA66WRvuIgvhtcCvhSbvkdYMTSxo7JERHzv8FOUzRSTxug6ca933BjLruVpkkAqDv1Bjy4w5Uml2unfLvEoGzkSDRh%2BxxeAZcSnUQU7CGqI7XKmArBSfvCU%2BaKH1NOBCh55TOrYFKKLXhpP3t6yWsCobDcqKzE55ns%2BlbBTasOFT10Vvb1QYux%2FlKeV50TIWUUl5kuuvdzxqf5e8j1aYdkHP1im2rvX4GMN26gytECEwt74hUknOGwrT%2BhM7C0XgIMjkbyq0moG9o0vQpJs52RMZ%2BN5ayczXf1cJahrRWa9M7bDmw4LI%2BvlwgkpJ9aooAffwHjczvMQkzs%2BYglwG7K3poc7sMF1Ki5lcz7idt3Eg%2Bli3dEDaeL%2FpzWuUxKey4sAyROj1PcElWVpJApmlZ5WIuXehFMtSH30rUeKhqrk%2FpUSPe3oNgdbC42DM5dRLqzuCjmPcTCosjo1Se0d%2Fj%2F9aM3j3xNCoLt8HDJxtJ87XWzc0dVBt5vJD%2BIIwhBRUYlM43XGIt85U8joOScdPV8jIuJ2vvkI2SJ2QK6lUk%2BdqHwZ4wWAwMrUKY7mPDyRhqVeQxjdzC%2Bs%2BAEJRSxiAEV3YSrDCkrJvPBjqkAfRnbuO9I0IW7ZS4YCsCQsb59fc0rG40TTdydv5XWL8LU3aQRgnap08F0t6ovsrIeRt1H5emdXv0JbjeZ%2B3%2B4zoK7hJU8R5IPO9Wb4o9Py3xuUoQYhnD2zkxSjhlshRZTzK6u9AqjFwsfG2J674Rxkgs4U54yyFACtVH5k%2FKjULphnBol1K8%2F%2FDxyYDv%2BeUdWl72LjL7AlnA7kkyj2V9szX5no7d&X-Amz-Signature=8313366626c93fe218f62283e944fcd5608ab4b8093b3e239731a95436c72d47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKTHKSJO%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDGFlfB5rjkTjNk48fK4bgKsfTx%2FdZc%2B%2BxDllVmtv2c9QIgB9iMiI3QIJsFg5W3KKILUQRazBdJVFEjF0z9RYDMt3gq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHVESS8zQ04QwEe4xyrcAw4VuakDWvSyH7YBMKp9xzeW81%2FRURKuN9amxvDHt23XjH1haoFFCVNC9b0%2FLh%2B%2FlQYAbGnBRk3Pd8%2FZpUajwW7rhtDjLLMmMQ6D0hZKScWeAKrK34F8J4JQS4XRpzFGQDR3poDUupbBcwmnVFYPG8ZB5dbJC8rU16FLzfsm8q4fgWK1g%2BT54Jyo9lGGiM8KiuV1shp8Xy3ZO6mhRa7QqNFGJDWL2%2FHLIFuZ8ZiAqWFXcs06ndqcyoy78fdz63KdbFIMQVjYtxziRODY93X74%2FxeVlojy7J5%2FiumMGn54OPSPHZqYWaUWLAPNO2x87H4rT9OlZYkI5BSgawNmschKgaExzR68OIpOi3Wfoqbk81hfpjQmwbRxGvvuSx4LIjcXxRrC4pFD1Ma6JPykec3mngkjMqJlQriToPic26130h9QQO6qPcw3MRhj3G6rMgsP%2BHVK3aEMNDInNPA7%2Fi4NMheDVlyfMdQogpmDkrxrJuyowq4hLssa7CdYuPh9lSmEXjgp7RggQMV9hxGcbBHonhZ2qvx6LXDlVOO4BpaGpllaa4bIbj%2BCrzVUAHVKMz78zmTsjAaNjTXDG4ubEN9OLUuuRomyeGZVkbeqakhMB6fxyuxhs%2FKH2AXwOF5MLiqm88GOqUB%2BWEIo1HVQbBJp3EV5e%2FLuParGydI2sfkflg1CNZvEID0We6cRMGTHRNiWx%2BDETvivZvWNj2VCMYX3B4vEa1mQhXp2M5vCRuh3SMmUstewlrPHbUNpIRuO52mE6YBIasVYe40U22RjTbJk3VgLeVuAMkvdZI%2FrbRGj5WsA0S4J7ulw%2Btdt%2BKZAzH3lSRae155H4fyYOkLiV2keJZeRS8xqQ9CE1IE&X-Amz-Signature=8e3946ca157984a9569fe27b80b039a49bea6484c2820f5becf71df579e01ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D2PICQ3%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDoOUMai%2BE4kKAIKmUpGKUsPl%2Bd0nFHNqadlrOHJBkubwIhAOMJXerxKJuwnJ5CMIi3Hf2FIDU07LzGOmIs5QfMDOAdKv8DCCsQABoMNjM3NDIzMTgzODA1IgwERhJX5AvsZdIsRVgq3APSNqUUBh9j08DyNfZYbrt3eQyn1FC2%2Fh957JA9T%2Fjptt3uqxmhTWKgPBgJn2yQUSuMrCjAOVYTmf3VGezeLVf4wN4AD0%2F8HN6Q1ld8cy2A9wPPmUVoz%2FmmadP%2BADBX5j%2BG%2F8dM%2BiaSDG1usLF%2BkxufIk72uzG9J9TJdhVwzbi%2FcxSVAuW%2B%2FU3CcPlK2hjBpx2uvrh1mlyFgrXiqM8S6uZmNuJ%2B98orUPaTddG3p3p5k%2FDkc4%2BFhxhbpv%2BYuJTegaa6E9fZg6mOwsAoIQcntjOhEeWPpJcoi2ou45Jvinc%2BmhAlGK8U458OQqaX%2Fd3xidGJ6w5xNfJn9PinX8UTNWOdjhwDpMvbdhki%2BSq617pe1I9z0R5OGFag9TbVpHOQmNknTWRpv%2F1qGtliXOhl78txunILSpUWNbdBTtK8%2FTdYNPqVvdS2rhNzBxEcXjV4Y9gHovpD4fm82dQ9oBz8GcoUvu%2FFQrWhD2yq6yZrB5Rv9y4sAVbkatpRrZAGlZ8zMtQoI692PqsFrEwL2ZL%2Bxs6fWjpUFZ%2FafqeLj%2BM86llfTEz2LyqmVGC3%2FjnvoAR0orjTBVGr6c0EDKnYD96tDIj7I3TVcmxb9WVHpPAktpinxQfktdwsFT8HAcPa8jD%2FqZvPBjqkAb1wBl%2BhvTNekNW%2FirGbco3WN626YSsxIsxLEqQaCBOzZmlePlVLDyFE1UbdwNLzSlTanqC4h1p09BvgcXz6RbRdMweySBPXt24CTWO%2Fo%2BkAMh%2BPxrsiJmT8JApSBbbwHnlNRcRIQsvZHvQN0jpbSTBE%2FBM5Rj9xASXo1ymh8DLDok30GvJf0DL%2BaQOZeLfxOYwe1zH3q%2BOKpj2GDhZ7N2vv3zij&X-Amz-Signature=ea257dae75e1bfa4eac60b62d044e2cb662d0ecfbdf879ca9d93efdf7482245a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKTHKSJO%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDGFlfB5rjkTjNk48fK4bgKsfTx%2FdZc%2B%2BxDllVmtv2c9QIgB9iMiI3QIJsFg5W3KKILUQRazBdJVFEjF0z9RYDMt3gq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHVESS8zQ04QwEe4xyrcAw4VuakDWvSyH7YBMKp9xzeW81%2FRURKuN9amxvDHt23XjH1haoFFCVNC9b0%2FLh%2B%2FlQYAbGnBRk3Pd8%2FZpUajwW7rhtDjLLMmMQ6D0hZKScWeAKrK34F8J4JQS4XRpzFGQDR3poDUupbBcwmnVFYPG8ZB5dbJC8rU16FLzfsm8q4fgWK1g%2BT54Jyo9lGGiM8KiuV1shp8Xy3ZO6mhRa7QqNFGJDWL2%2FHLIFuZ8ZiAqWFXcs06ndqcyoy78fdz63KdbFIMQVjYtxziRODY93X74%2FxeVlojy7J5%2FiumMGn54OPSPHZqYWaUWLAPNO2x87H4rT9OlZYkI5BSgawNmschKgaExzR68OIpOi3Wfoqbk81hfpjQmwbRxGvvuSx4LIjcXxRrC4pFD1Ma6JPykec3mngkjMqJlQriToPic26130h9QQO6qPcw3MRhj3G6rMgsP%2BHVK3aEMNDInNPA7%2Fi4NMheDVlyfMdQogpmDkrxrJuyowq4hLssa7CdYuPh9lSmEXjgp7RggQMV9hxGcbBHonhZ2qvx6LXDlVOO4BpaGpllaa4bIbj%2BCrzVUAHVKMz78zmTsjAaNjTXDG4ubEN9OLUuuRomyeGZVkbeqakhMB6fxyuxhs%2FKH2AXwOF5MLiqm88GOqUB%2BWEIo1HVQbBJp3EV5e%2FLuParGydI2sfkflg1CNZvEID0We6cRMGTHRNiWx%2BDETvivZvWNj2VCMYX3B4vEa1mQhXp2M5vCRuh3SMmUstewlrPHbUNpIRuO52mE6YBIasVYe40U22RjTbJk3VgLeVuAMkvdZI%2FrbRGj5WsA0S4J7ulw%2Btdt%2BKZAzH3lSRae155H4fyYOkLiV2keJZeRS8xqQ9CE1IE&X-Amz-Signature=491e0f54d269d31152eb61d7d54866444274ebf9667d8e6bc199f1320a24eaea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJQLK5RL%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCOIVCy4l0xfB1ricM9icNj%2BA2XaASvWAzUQ3H0Yp3qMwIgY0%2BlKXPWZfbftwqUYCNpq5c7mOod1lt0kx0TF7h45q4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEIeLa4nT5B9rrGt6CrcA76PNwr%2BYNLvI06BU0RenLUy8XF7BqTFE7BTQP58cKHGzRkLhIGhSQ15v%2FTiZaZPNCbLePGrsBi%2F9i331dUFHsjnorvgDZdjpkdhDQKHR%2B%2BubA78TE7%2Foxd%2Bfe5Px%2BIGDyTxyUf03Anfy5ak5FYc5yDUllgDt1fy7mClC54UKPufCuBJCXRxlr8mUpR9IO69ESdu3Gc%2FmE0JwzODGsFCLdaq6%2BudxzT4%2Buw3YuANQrhXd9ac%2BY0KkZk5ooR%2BfRkItRap8EpGK3hldugvkgL2znSS8g77nmdLImXrHUaY9lQpfGQtlu5s1P84fPC8ss5AxK2kiFkoPk9ASvcOSCzz%2BJDT4x9Cd8yhlc4e9HOXkftPT1lkworva3cZnVRUn7MDmWED1yZATotqQhsD9SPqkZCgoAF%2BFMnd6%2BMohb%2F1bMM3783Z02x3tLWxhaPl0RNwKCGUDKu%2FlnnhnB4K4pixxGDi%2BOsU8AWmPaImxlbqu3uvSZ7FpPTuPc5eHa1DPbHAA8Rn%2B%2FWJXh1m6ZJOLAwk25pOfXlpOZmoiegF02A66M7R%2FCZsn0FsxRPa6KkSuu8adt9b8Hvm1n2Oqk68Dck%2FSPg9qhCngHJ5zvQlwck5nwh1Ql%2FcifPCq6sorEuUMICrm88GOqUBk9%2Fh9sIlZAZ18fvdpVoDsgUGTXgTbNUsYK2TumXojYzaELaSI61kZq9k3WrmOxfWPoSy0%2FeTwceF43XGUIf7ogCwQ4hHIcDIXNVZpchCnV%2BhquqE%2FVZdqghN%2Fs1I1mssqLdihiYLEGhx5RoR8Q9tWsRrMNOWlIy5sGf6R1SuDT3tTyi904ppPcdtLd%2B5lADA8lohy1v%2F1YdZgLqvCeCO9T5w3PU6&X-Amz-Signature=6a1e25c303120c7c13f630ac1b702e697e535dae7e2586b19ce8e7c689517e15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKTHKSJO%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDGFlfB5rjkTjNk48fK4bgKsfTx%2FdZc%2B%2BxDllVmtv2c9QIgB9iMiI3QIJsFg5W3KKILUQRazBdJVFEjF0z9RYDMt3gq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHVESS8zQ04QwEe4xyrcAw4VuakDWvSyH7YBMKp9xzeW81%2FRURKuN9amxvDHt23XjH1haoFFCVNC9b0%2FLh%2B%2FlQYAbGnBRk3Pd8%2FZpUajwW7rhtDjLLMmMQ6D0hZKScWeAKrK34F8J4JQS4XRpzFGQDR3poDUupbBcwmnVFYPG8ZB5dbJC8rU16FLzfsm8q4fgWK1g%2BT54Jyo9lGGiM8KiuV1shp8Xy3ZO6mhRa7QqNFGJDWL2%2FHLIFuZ8ZiAqWFXcs06ndqcyoy78fdz63KdbFIMQVjYtxziRODY93X74%2FxeVlojy7J5%2FiumMGn54OPSPHZqYWaUWLAPNO2x87H4rT9OlZYkI5BSgawNmschKgaExzR68OIpOi3Wfoqbk81hfpjQmwbRxGvvuSx4LIjcXxRrC4pFD1Ma6JPykec3mngkjMqJlQriToPic26130h9QQO6qPcw3MRhj3G6rMgsP%2BHVK3aEMNDInNPA7%2Fi4NMheDVlyfMdQogpmDkrxrJuyowq4hLssa7CdYuPh9lSmEXjgp7RggQMV9hxGcbBHonhZ2qvx6LXDlVOO4BpaGpllaa4bIbj%2BCrzVUAHVKMz78zmTsjAaNjTXDG4ubEN9OLUuuRomyeGZVkbeqakhMB6fxyuxhs%2FKH2AXwOF5MLiqm88GOqUB%2BWEIo1HVQbBJp3EV5e%2FLuParGydI2sfkflg1CNZvEID0We6cRMGTHRNiWx%2BDETvivZvWNj2VCMYX3B4vEa1mQhXp2M5vCRuh3SMmUstewlrPHbUNpIRuO52mE6YBIasVYe40U22RjTbJk3VgLeVuAMkvdZI%2FrbRGj5WsA0S4J7ulw%2Btdt%2BKZAzH3lSRae155H4fyYOkLiV2keJZeRS8xqQ9CE1IE&X-Amz-Signature=940537790e191f80d970b0b94000cc67e701a9030885d46f28cfd738d9b10fc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMQSA6WD%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICrJibBARoIBeJr5oBgbnRQxF%2BZQ1U0Lv5sVuEtSzSxUAiB2Sxn5FaumCePw9gWKyRufYKlTUAcopn%2BRl4KaUelqVyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMNU0wHKctvCb6KCR2KtwDXbh%2ByVVr%2FGhvKkWT5XHh3V3%2FfBUu0HmZtgS1KSrU5VhNBpLuZqrQYGoUvv3N%2FMeP7BJBV11rs%2FIdKF3D3MZGaxpCAsxFiLMRk4bCw2wds%2Bde8TCQbrqnoRdb8AK8SN8K3G9HE6NzUxRvScboV2D5C%2B33d%2BnRVwZG%2FJr5hJ70oEbBzskKEgd%2Fol8nUyhK8nVEEtJ9xVhOcXdyBlSeo8YJ%2FJB4CS%2FoGaYIvnQGb55zoR4MNx6QZ0QeNFnAsPpkabZFHE4YX4eYqwmFC%2F89dLqSFAMWQNKRj9eQsOZmz6W9a%2FLjYO5EdHuGCpKsK%2Bwi8Kg1PdEZiQ%2BZHgZhGqNj4ezAgBqlRn7tabxgYGoQBs36WY77upUVFiIcy4I1u5khP4zhTLPqofbNZWVvC6ZJGNw354murY65tQwLiuyuOB4mumyrSQ3EyiQiFebytPNN7WZEZGz3%2F0OPhzXJsYQM%2BGxT2a7JPE66viDXivZp6VI8m0NuLC%2F4zytmxMklFSmBKYhVA2Sog5ejoEjC0%2ByqsUz1l0fnMm9hwqXgQPMMjdiJN8JIgkpj%2FmgDTEGr%2FNaRgQWh7AJPQYOEbGDDmwFXj%2FYZNHkVRzFP9y9qLl%2F9VRLBX3QkqWj%2BBRA53MVA5VkwxKqbzwY6pgHMMENdg38zx2JpRlZmD5D4edQUXuIY%2BtYz7eIZ6VqANtb5UeebZDl8jpPaZ8actcdYj6iiUWZKzxF5jYjoC8dSK%2Fo00mHWXtxq9G6BrjLK7RbOQRbSFIwnwnCxqTrip4dlDqE%2FcsC2SQnRUJCxQqmBEK4qIMuJESkMagCdaeDFBCTPim6USc8G%2BiJJDf7p29rqc5%2Fe0dXULZdCvIapdZAn95nLTb8h&X-Amz-Signature=aaadbd4736a0bdc3f10f0af0c3fbf9efeae351ec5cb7b8054a48b8313a751319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKTHKSJO%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDGFlfB5rjkTjNk48fK4bgKsfTx%2FdZc%2B%2BxDllVmtv2c9QIgB9iMiI3QIJsFg5W3KKILUQRazBdJVFEjF0z9RYDMt3gq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHVESS8zQ04QwEe4xyrcAw4VuakDWvSyH7YBMKp9xzeW81%2FRURKuN9amxvDHt23XjH1haoFFCVNC9b0%2FLh%2B%2FlQYAbGnBRk3Pd8%2FZpUajwW7rhtDjLLMmMQ6D0hZKScWeAKrK34F8J4JQS4XRpzFGQDR3poDUupbBcwmnVFYPG8ZB5dbJC8rU16FLzfsm8q4fgWK1g%2BT54Jyo9lGGiM8KiuV1shp8Xy3ZO6mhRa7QqNFGJDWL2%2FHLIFuZ8ZiAqWFXcs06ndqcyoy78fdz63KdbFIMQVjYtxziRODY93X74%2FxeVlojy7J5%2FiumMGn54OPSPHZqYWaUWLAPNO2x87H4rT9OlZYkI5BSgawNmschKgaExzR68OIpOi3Wfoqbk81hfpjQmwbRxGvvuSx4LIjcXxRrC4pFD1Ma6JPykec3mngkjMqJlQriToPic26130h9QQO6qPcw3MRhj3G6rMgsP%2BHVK3aEMNDInNPA7%2Fi4NMheDVlyfMdQogpmDkrxrJuyowq4hLssa7CdYuPh9lSmEXjgp7RggQMV9hxGcbBHonhZ2qvx6LXDlVOO4BpaGpllaa4bIbj%2BCrzVUAHVKMz78zmTsjAaNjTXDG4ubEN9OLUuuRomyeGZVkbeqakhMB6fxyuxhs%2FKH2AXwOF5MLiqm88GOqUB%2BWEIo1HVQbBJp3EV5e%2FLuParGydI2sfkflg1CNZvEID0We6cRMGTHRNiWx%2BDETvivZvWNj2VCMYX3B4vEa1mQhXp2M5vCRuh3SMmUstewlrPHbUNpIRuO52mE6YBIasVYe40U22RjTbJk3VgLeVuAMkvdZI%2FrbRGj5WsA0S4J7ulw%2Btdt%2BKZAzH3lSRae155H4fyYOkLiV2keJZeRS8xqQ9CE1IE&X-Amz-Signature=5552c69471e4bd69766f16d33cd0fb79d3abc733580ace67cc64bf202321e590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFEUINBF%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDMiGiFuJ%2BbKqFe3wfUecxcjZb3PPuB1Gy%2BF5VaWRHlvAIhAIy5U2hKUKJpFZbi%2BCMtk3OPK%2FbCcujCuHDJJboygJ4rKv8DCCsQABoMNjM3NDIzMTgzODA1IgwOUJE8YfJwySvooLsq3AN8yA99vWWRwCZFygLEzmWaBdTSifKZJkpiNlfQYuXgAbhPcukZWSwpWDRw9BdFVYVooSd16ClQ7yQOyQbijVTT7GSBS38cmyfqLlWqiS1kvsDopZd7NQf1gnScdQQHUDrQhes%2FwpcI28Y8I%2FTUWb5YWYlSJZLh2dhI3%2F4y1x0NkVNCv97DSROtq1A4wcM5P0c4MSAaGXHCMMQeAqNS7nTJ9lt%2FT9KF2aU3nHWXfUwLAj85Y7Bl32RGIpUFKHUiSez5vmAM6Q%2BsN92W2hNy1FNz4nDK8JFSVIBYhHhkqlP4t5Rxdey6cmjr4C%2BadY4qcreRJ2CWbThUUjTl5eB5OvERLynhDEtoIb%2B3Nohu8qgyfgYSIm500lhF%2FaALWQHNJaFkLP4XOXyWt4mlU5KMiSjjE7GWkkuV7d%2FuQwtAgNvWTHRU0%2FmAA2i2vy5LNSSodoNj5SiObwcQ5kC88p9x%2F40B7ekHcTfCx5IltlrKO%2BafCR9UN5z85jTz7ROTnuObadvmO8zYDMyRpZ%2BYmjYPwiQHRrGKBy3b5GXvdSj71s2VGDvIM%2Fs00a%2B%2BSbgpk44%2BRRNxkQJZ%2B%2FS19lNphW2%2B0G05PCBD1s2mfV4KfdITnk3dDcRqvf8z%2FN5xiszBEDD9qpvPBjqkAcEsrqVZzYoVk7igyrsVFxsepekLym23PyJAh%2Bf7bnnQwD%2BFJn1nPY3Auqu2xc9QZ0n4156OW%2FxzvA86LpDaAXRCs3dylh1Mm2ARTEA88m6nH9wAARv8QdnvTCSXxzBD7kwZaV8ILUXaOx7hlF2uQC7n6OucdagAYNYpM6rW3SrW%2FG1WeZRwu7L293Cf7m6u5xMtL2E3%2FODxZN6fw0KQxWZsSitf&X-Amz-Signature=e394292ba52b4aa4b9bb3e529aae92796846baaa418a1dcbaa561622e120d36d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKTHKSJO%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDGFlfB5rjkTjNk48fK4bgKsfTx%2FdZc%2B%2BxDllVmtv2c9QIgB9iMiI3QIJsFg5W3KKILUQRazBdJVFEjF0z9RYDMt3gq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHVESS8zQ04QwEe4xyrcAw4VuakDWvSyH7YBMKp9xzeW81%2FRURKuN9amxvDHt23XjH1haoFFCVNC9b0%2FLh%2B%2FlQYAbGnBRk3Pd8%2FZpUajwW7rhtDjLLMmMQ6D0hZKScWeAKrK34F8J4JQS4XRpzFGQDR3poDUupbBcwmnVFYPG8ZB5dbJC8rU16FLzfsm8q4fgWK1g%2BT54Jyo9lGGiM8KiuV1shp8Xy3ZO6mhRa7QqNFGJDWL2%2FHLIFuZ8ZiAqWFXcs06ndqcyoy78fdz63KdbFIMQVjYtxziRODY93X74%2FxeVlojy7J5%2FiumMGn54OPSPHZqYWaUWLAPNO2x87H4rT9OlZYkI5BSgawNmschKgaExzR68OIpOi3Wfoqbk81hfpjQmwbRxGvvuSx4LIjcXxRrC4pFD1Ma6JPykec3mngkjMqJlQriToPic26130h9QQO6qPcw3MRhj3G6rMgsP%2BHVK3aEMNDInNPA7%2Fi4NMheDVlyfMdQogpmDkrxrJuyowq4hLssa7CdYuPh9lSmEXjgp7RggQMV9hxGcbBHonhZ2qvx6LXDlVOO4BpaGpllaa4bIbj%2BCrzVUAHVKMz78zmTsjAaNjTXDG4ubEN9OLUuuRomyeGZVkbeqakhMB6fxyuxhs%2FKH2AXwOF5MLiqm88GOqUB%2BWEIo1HVQbBJp3EV5e%2FLuParGydI2sfkflg1CNZvEID0We6cRMGTHRNiWx%2BDETvivZvWNj2VCMYX3B4vEa1mQhXp2M5vCRuh3SMmUstewlrPHbUNpIRuO52mE6YBIasVYe40U22RjTbJk3VgLeVuAMkvdZI%2FrbRGj5WsA0S4J7ulw%2Btdt%2BKZAzH3lSRae155H4fyYOkLiV2keJZeRS8xqQ9CE1IE&X-Amz-Signature=5aa816db2adc1bf18142636d02d2b7db5dfe89844bd842d3f7f55f08d7de383a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TRPDQE%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIG%2FTPv5iJoQDSuYpzyZ0ZDwDcI3ADGhu3Cj1Nzz5LdinAiBzasMDaVd56orXoynwSH%2BwA6vmY%2FNgiFHooUuhc4yfwCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMqrKWlp3Wrafr11IRKtwD1idIKQ2%2BrIOh%2BGJ%2FoS4qvtEJ5rPBAmqkc1nQdSYL4CfHFQD8p15N%2B0n8DaFku9gFwCRYebKgsE%2FPw3oN1WFP5vOal3Xxh8dTtJ9QXABIlB%2BB27Fz%2FcB5tJpRHpSPnB6cpXfYL6rCe0Rma9H0S3UUk8N55woFGz6JwEDx3SU79Fj7my9AtPMLGUuUTU7dfk259OYYY7AMmQMxDN1iHLP%2FTs0P4Awa1BO%2FIxl0Lga4RDfzKVzXdKMJhqfSHiC9r3DBz3ubahmKbBG9XhwieTpTA%2FapUyCW%2FAp9K%2F5C7n6sOZ82G55hItvNRm4pCaACpHTA5d7kpNk3IweW2e12xfPZ%2FKi%2Flzygz1ym6kxXNcUdmEhEM%2BMnZupOcF4PTSH5Ydvd4cuj6cL1g2pA1YNdmrOQeRU%2F70UyEBFEgka6czel%2BS9stgItxV92acI0pS0UMHqxbGSqQE%2F6dZzlfoVcNxY8%2BwpyT6j6jyvpEdcXo6NlltjHTfuOcXyjqR6gQS14cw1ODqdDlx7POF4fvI8JP1xYYY%2BWLR0RJm%2FQ9T46n0GYRUqLyYa%2B2Cl0qo6%2Be2J%2FoY2JksPM35YpeAbQXVztWLm322RH19B0I123evaUsg1CRkxE553oQQlBNcTMYR0wtqqbzwY6pgHekx2MIFwSjfqwsoK9BPu2BP3%2BvlyX0LOq4Qq6tDRAJKDFFdAdq2TC9ZZeaxd7XerczdjcI6W%2BzP9us72hurP8Qyp3Ql2pmAudj9eoAlDK2xbJ4Sg6NjYxkaoGceYd0fDGyvEdPeL6g3NHcZ3xmr1%2BxjxkcuwCJf0gWDlp3vAqZT5f1iD32%2BqQlKxxHaNxkav1lI7ttAuBMsd7EB%2FmPasX7LfHvDba&X-Amz-Signature=6a0cf4bf2d543c920139b32420334a210adca9ad4bd08de615301ab1078359fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQDFAIZI%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIFeEM1Qt9A84LT%2Fyy6sDLJGXC92bxJv5UGSPqvrNiHu8AiBls4YsggD7dildxZGHzCKWs%2BJGWZovWkywCwuFkAz%2FMSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMeAj23y0A589T%2BjMxKtwD2k7bdkzr0Srflzm7Kc%2FY1Hca%2FJJ262wOaOIRfqxMlszQoSxo7e3RRSNQ0BEUFNerIzXDt96aL8lmYAuIeVNhcDbhAByK2ASbbCkNhbQe4F28pAvEU33ku0R6l%2BtY7f0fEHN9KnshrjL6S5V4HKzXf3FXFMrAxwGvGEg%2BzO8nh8lLdsuyv6HFnqCnJqL%2BS09vR9FKEy1yuIaBnWk3I8LFQ7wsPVkT%2BypTFrgEWEwCAO%2BMrFTLmMKWQXq1GKFB15VuALwhdX6f2k7TnZeWDqngWdYCHjL5UDvLC2o1pF6FvK9kzF41muu3dHjPnTiaADmydUQH1JNgNwuH2HQoBY0eiyC5V8ww1z8KGrGU8ni475eDGwytjs%2BOFDQXRBI6Km18K1FlHQEAKry2gcuigN9Suri4iwgEjVvZJOXfceWwxCXK5Ebse6ldvJdvswWBu4u64yAEIl1wcsD5X6n0UB9%2FpBqW4o%2F389d9mqU7p7l1LJxE2veRHXyvDjBosrzlJ3ZkxvUGhq12dZZakU9MtBfTFtdBZqpwjLJHGKDu2X7UTeHrayKysyEgE5XHztiZSaKThw4zY86LOoElTcbwuEmAzP5MZ6WwmlhyHXcwxjqmYaYC3CjcegYldx771zcw36ubzwY6pgGMFMPMGoLRXnXgvRqJXc53l5cM5qwsJjhCUgUp7pIERU6HkveacLpNleSoCf1o1dybAkM40QQ%2BOjtkGKagK7HKsUI1q6Qfl0GNAc1jWYUIWXH%2Bukvc1o2OUyCzm2E2tRJsPf3i0G85LigG0pWOA8xurURA5Ir80klH5mals5lWP6FRmNIABMDDB09OJRZestT8VEpQ%2Br9rYZEfQz%2FHGrjwWuavgwFl&X-Amz-Signature=dfd6fdc3c9a6b52613c7bb8988d8d4f0c77c9c62bfc7230c600b625726c854cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VK4HDQD%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIF5K%2BNNXx4izw7X5mu%2BznDkpEU8eH%2B60FNo%2FDa9rzgnKAiBoo4moGzkdR%2BNuccuOR0jJAfDZRPydJpryBpQV%2BFHxbyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMBuHi77%2F7HqMj%2FSBSKtwDcNMFfoiy3kngsYrJ7mE8jMCrATteRSPrqPWjeOmb%2BsALwQ22ETb6qK%2BRlvuVfMVyy6h1CfGYit4nvZYJv7TYNwSFNMu3LKjlk4HIaLY3WHQJMMqMIq%2FJHmR4hhbbQjEmZrFgbL4zIsV1PgYePA046Nssj9qHX3tlWyxZge3UyDIzEMRJ6UyKHSIZDiFSryfSMqDnAwEqhB4A5MRpMBCbCqEERO3PtXcGBB8qx1vgUOpB559%2BGlJl7DT1ixfXyieJ0m6UDD860UsahKTh3LkgU9KY1XdAgU6NrdMdhQ%2BlsqMm%2FR7EjNlBjfTQd5M8jIbTvGVY6ZT%2BgYRX9vRtlY9G7k0Y%2BE4zWkseQFl2KQ4iiwzycipbMgnWsFqx6502%2FNOc4zrQ1VJIfX02cIjSkRj%2Fxv1z5yHftJ7N6yku9Rj5CgvomiFUMpGvqojrAZx3A56AsS1bbtYJZyIAukXASXYlZXSa%2FlS3w4dsI6uvvMqTutoM0Q%2Fw4nwo5rVsHZOOuSGYi1TJ6g3otdWs7CGINo78DoQPQgcCTj%2BFrFPPs8%2FtqtPH5LxzmAXn1i3xe95wtPQ3OfoPMY3Hgic2%2BO42nNZN9j8XKarfMp8oFI%2FfwEq963oNQJ9CcbomKiMpWs8wnqubzwY6pgGcBk4h4MKiv5QkmctV58ymdKdi4%2BSdkYcHpWtsWHabUwftKlmgHbVffHzYpuB5i0Mlnu51M2wu6%2BFt49jYkPlD%2BgUsscIxIyN%2FPy%2FjIZC2ZWrrixdR4HM7Ja125Aybyo2LPD5aNPuPmphT5zmq80TCm574QC3aYrV8BYYSl%2B%2BdzeT24PCvKCPQFU5QvfOrOiZFLMDWLlbJWEYMfyT7jgRZOVGzAAAj&X-Amz-Signature=c3105eca0ed5276e3d75867665792a5bca634c83ecf2722687bdd69bdf06b145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKTHKSJO%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDGFlfB5rjkTjNk48fK4bgKsfTx%2FdZc%2B%2BxDllVmtv2c9QIgB9iMiI3QIJsFg5W3KKILUQRazBdJVFEjF0z9RYDMt3gq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHVESS8zQ04QwEe4xyrcAw4VuakDWvSyH7YBMKp9xzeW81%2FRURKuN9amxvDHt23XjH1haoFFCVNC9b0%2FLh%2B%2FlQYAbGnBRk3Pd8%2FZpUajwW7rhtDjLLMmMQ6D0hZKScWeAKrK34F8J4JQS4XRpzFGQDR3poDUupbBcwmnVFYPG8ZB5dbJC8rU16FLzfsm8q4fgWK1g%2BT54Jyo9lGGiM8KiuV1shp8Xy3ZO6mhRa7QqNFGJDWL2%2FHLIFuZ8ZiAqWFXcs06ndqcyoy78fdz63KdbFIMQVjYtxziRODY93X74%2FxeVlojy7J5%2FiumMGn54OPSPHZqYWaUWLAPNO2x87H4rT9OlZYkI5BSgawNmschKgaExzR68OIpOi3Wfoqbk81hfpjQmwbRxGvvuSx4LIjcXxRrC4pFD1Ma6JPykec3mngkjMqJlQriToPic26130h9QQO6qPcw3MRhj3G6rMgsP%2BHVK3aEMNDInNPA7%2Fi4NMheDVlyfMdQogpmDkrxrJuyowq4hLssa7CdYuPh9lSmEXjgp7RggQMV9hxGcbBHonhZ2qvx6LXDlVOO4BpaGpllaa4bIbj%2BCrzVUAHVKMz78zmTsjAaNjTXDG4ubEN9OLUuuRomyeGZVkbeqakhMB6fxyuxhs%2FKH2AXwOF5MLiqm88GOqUB%2BWEIo1HVQbBJp3EV5e%2FLuParGydI2sfkflg1CNZvEID0We6cRMGTHRNiWx%2BDETvivZvWNj2VCMYX3B4vEa1mQhXp2M5vCRuh3SMmUstewlrPHbUNpIRuO52mE6YBIasVYe40U22RjTbJk3VgLeVuAMkvdZI%2FrbRGj5WsA0S4J7ulw%2Btdt%2BKZAzH3lSRae155H4fyYOkLiV2keJZeRS8xqQ9CE1IE&X-Amz-Signature=f10ecc254db563755d6aa63e470e981566d5bde33e7d5dd1bc04a189759b18dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKTHKSJO%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDGFlfB5rjkTjNk48fK4bgKsfTx%2FdZc%2B%2BxDllVmtv2c9QIgB9iMiI3QIJsFg5W3KKILUQRazBdJVFEjF0z9RYDMt3gq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHVESS8zQ04QwEe4xyrcAw4VuakDWvSyH7YBMKp9xzeW81%2FRURKuN9amxvDHt23XjH1haoFFCVNC9b0%2FLh%2B%2FlQYAbGnBRk3Pd8%2FZpUajwW7rhtDjLLMmMQ6D0hZKScWeAKrK34F8J4JQS4XRpzFGQDR3poDUupbBcwmnVFYPG8ZB5dbJC8rU16FLzfsm8q4fgWK1g%2BT54Jyo9lGGiM8KiuV1shp8Xy3ZO6mhRa7QqNFGJDWL2%2FHLIFuZ8ZiAqWFXcs06ndqcyoy78fdz63KdbFIMQVjYtxziRODY93X74%2FxeVlojy7J5%2FiumMGn54OPSPHZqYWaUWLAPNO2x87H4rT9OlZYkI5BSgawNmschKgaExzR68OIpOi3Wfoqbk81hfpjQmwbRxGvvuSx4LIjcXxRrC4pFD1Ma6JPykec3mngkjMqJlQriToPic26130h9QQO6qPcw3MRhj3G6rMgsP%2BHVK3aEMNDInNPA7%2Fi4NMheDVlyfMdQogpmDkrxrJuyowq4hLssa7CdYuPh9lSmEXjgp7RggQMV9hxGcbBHonhZ2qvx6LXDlVOO4BpaGpllaa4bIbj%2BCrzVUAHVKMz78zmTsjAaNjTXDG4ubEN9OLUuuRomyeGZVkbeqakhMB6fxyuxhs%2FKH2AXwOF5MLiqm88GOqUB%2BWEIo1HVQbBJp3EV5e%2FLuParGydI2sfkflg1CNZvEID0We6cRMGTHRNiWx%2BDETvivZvWNj2VCMYX3B4vEa1mQhXp2M5vCRuh3SMmUstewlrPHbUNpIRuO52mE6YBIasVYe40U22RjTbJk3VgLeVuAMkvdZI%2FrbRGj5WsA0S4J7ulw%2Btdt%2BKZAzH3lSRae155H4fyYOkLiV2keJZeRS8xqQ9CE1IE&X-Amz-Signature=5110bb395b47d7e98feee154b300ebb9bef356a60615c8cb2942a2b211680914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTJX2AK5%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCCjGv7%2B6HHudjFT7tTm8kpGd%2BEry7ZZ44h%2FOO9RPRoJwIhAOC7M%2BoYY9BeENLEyuvJSyU0NXUBhh53k%2Bbi54FGV%2Bx1Kv8DCCsQABoMNjM3NDIzMTgzODA1IgzZVFr3s1gUa4nzk3sq3APx%2BAknkbm%2BOCMpH%2Bh8xPEuqabfJtSCXOZhH55kVvNwf%2BRbyuJzoVQn4rfaEDd%2FpJrMq7RfbdmDXJvlBd42G0T%2FtxA3At3sCla1H2ohYaQJoImbSlKyNTolaAtvL5nkbi4DmK4TvTEZrMCzw2n0eX37e9KZaRXVXDEFvy%2BjeGkuU9x%2BWbQjgXCD%2FCshueHIu2Uw5deH1tTRL70e7xIeLQaP9f23FkzAZRi%2BZk7HRYeIYpzdbLQJ0pIgXrf2bjvwT8NGGnymLYcRXGd08EqPxBR3REXqiRsdnnXMBe%2BODwWbPK0wvDRgmtNZzTQMTlXo8mHXIdapG6qv%2F9FZkYW4ygCouFqezMVvctF%2FqhynfVNaNLmaO0Qc96P45ShXT6%2FiNZpOkpX8eHLmxt8cxXkOdVKy6FMgb1lhzGZ6yRxUjSIhXKqp8uILrN8Eao7gz%2FhJRG%2BWX4fqEK6b3EOsT2v3i7lKi9AcV%2FZDiKe4P5BH2sXEB9XFcP94NfbX%2BSe6SiSiO0Q5U6slnzLFKLNsLSjPfZwnS7KeruMFeTsMd6FMU%2B2kHh7R%2B5w%2BMg8WDc2HXdto8iSL31t4nSC%2BUuLbGZMQo0t31gdvXaIuTNaM74fYLEnGC99eEE5rvstfY7E5MjCcqpvPBjqkAQYIV6V1qaSSihWcG3LTEFiEepf9QiGQ2qDU%2FAtJ1%2BzRVoSoKyjlSXQ%2FJ1c%2Bu88fE%2FITfLaZxEu8HTHq5h%2BAZg4mMqsTClLmls5fZn99kwiJfGMmPvZl1iLiqI1sBT4nRjoHS%2F0Q2jYcRYey%2Bb7i85oxK8EImspqqvvf5%2BtKY8vKToLdMTNNbrN0U0rISibmoOIFndx5FxWRyIfkRiXki1GiRtPr&X-Amz-Signature=a723572af89979132b56fec584c9134ac7047aeed05240f0dce5fa5d710d8cc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTJX2AK5%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCCjGv7%2B6HHudjFT7tTm8kpGd%2BEry7ZZ44h%2FOO9RPRoJwIhAOC7M%2BoYY9BeENLEyuvJSyU0NXUBhh53k%2Bbi54FGV%2Bx1Kv8DCCsQABoMNjM3NDIzMTgzODA1IgzZVFr3s1gUa4nzk3sq3APx%2BAknkbm%2BOCMpH%2Bh8xPEuqabfJtSCXOZhH55kVvNwf%2BRbyuJzoVQn4rfaEDd%2FpJrMq7RfbdmDXJvlBd42G0T%2FtxA3At3sCla1H2ohYaQJoImbSlKyNTolaAtvL5nkbi4DmK4TvTEZrMCzw2n0eX37e9KZaRXVXDEFvy%2BjeGkuU9x%2BWbQjgXCD%2FCshueHIu2Uw5deH1tTRL70e7xIeLQaP9f23FkzAZRi%2BZk7HRYeIYpzdbLQJ0pIgXrf2bjvwT8NGGnymLYcRXGd08EqPxBR3REXqiRsdnnXMBe%2BODwWbPK0wvDRgmtNZzTQMTlXo8mHXIdapG6qv%2F9FZkYW4ygCouFqezMVvctF%2FqhynfVNaNLmaO0Qc96P45ShXT6%2FiNZpOkpX8eHLmxt8cxXkOdVKy6FMgb1lhzGZ6yRxUjSIhXKqp8uILrN8Eao7gz%2FhJRG%2BWX4fqEK6b3EOsT2v3i7lKi9AcV%2FZDiKe4P5BH2sXEB9XFcP94NfbX%2BSe6SiSiO0Q5U6slnzLFKLNsLSjPfZwnS7KeruMFeTsMd6FMU%2B2kHh7R%2B5w%2BMg8WDc2HXdto8iSL31t4nSC%2BUuLbGZMQo0t31gdvXaIuTNaM74fYLEnGC99eEE5rvstfY7E5MjCcqpvPBjqkAQYIV6V1qaSSihWcG3LTEFiEepf9QiGQ2qDU%2FAtJ1%2BzRVoSoKyjlSXQ%2FJ1c%2Bu88fE%2FITfLaZxEu8HTHq5h%2BAZg4mMqsTClLmls5fZn99kwiJfGMmPvZl1iLiqI1sBT4nRjoHS%2F0Q2jYcRYey%2Bb7i85oxK8EImspqqvvf5%2BtKY8vKToLdMTNNbrN0U0rISibmoOIFndx5FxWRyIfkRiXki1GiRtPr&X-Amz-Signature=fd57b87b21fa64c2e70f931adb55e7dceb1038e5bb62b8c2338ea197462b6420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTJX2AK5%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCCjGv7%2B6HHudjFT7tTm8kpGd%2BEry7ZZ44h%2FOO9RPRoJwIhAOC7M%2BoYY9BeENLEyuvJSyU0NXUBhh53k%2Bbi54FGV%2Bx1Kv8DCCsQABoMNjM3NDIzMTgzODA1IgzZVFr3s1gUa4nzk3sq3APx%2BAknkbm%2BOCMpH%2Bh8xPEuqabfJtSCXOZhH55kVvNwf%2BRbyuJzoVQn4rfaEDd%2FpJrMq7RfbdmDXJvlBd42G0T%2FtxA3At3sCla1H2ohYaQJoImbSlKyNTolaAtvL5nkbi4DmK4TvTEZrMCzw2n0eX37e9KZaRXVXDEFvy%2BjeGkuU9x%2BWbQjgXCD%2FCshueHIu2Uw5deH1tTRL70e7xIeLQaP9f23FkzAZRi%2BZk7HRYeIYpzdbLQJ0pIgXrf2bjvwT8NGGnymLYcRXGd08EqPxBR3REXqiRsdnnXMBe%2BODwWbPK0wvDRgmtNZzTQMTlXo8mHXIdapG6qv%2F9FZkYW4ygCouFqezMVvctF%2FqhynfVNaNLmaO0Qc96P45ShXT6%2FiNZpOkpX8eHLmxt8cxXkOdVKy6FMgb1lhzGZ6yRxUjSIhXKqp8uILrN8Eao7gz%2FhJRG%2BWX4fqEK6b3EOsT2v3i7lKi9AcV%2FZDiKe4P5BH2sXEB9XFcP94NfbX%2BSe6SiSiO0Q5U6slnzLFKLNsLSjPfZwnS7KeruMFeTsMd6FMU%2B2kHh7R%2B5w%2BMg8WDc2HXdto8iSL31t4nSC%2BUuLbGZMQo0t31gdvXaIuTNaM74fYLEnGC99eEE5rvstfY7E5MjCcqpvPBjqkAQYIV6V1qaSSihWcG3LTEFiEepf9QiGQ2qDU%2FAtJ1%2BzRVoSoKyjlSXQ%2FJ1c%2Bu88fE%2FITfLaZxEu8HTHq5h%2BAZg4mMqsTClLmls5fZn99kwiJfGMmPvZl1iLiqI1sBT4nRjoHS%2F0Q2jYcRYey%2Bb7i85oxK8EImspqqvvf5%2BtKY8vKToLdMTNNbrN0U0rISibmoOIFndx5FxWRyIfkRiXki1GiRtPr&X-Amz-Signature=901f4de876e84e643604c6d99c0a36e34f718d37026be42a32b2671f29d11baf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTJX2AK5%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCCjGv7%2B6HHudjFT7tTm8kpGd%2BEry7ZZ44h%2FOO9RPRoJwIhAOC7M%2BoYY9BeENLEyuvJSyU0NXUBhh53k%2Bbi54FGV%2Bx1Kv8DCCsQABoMNjM3NDIzMTgzODA1IgzZVFr3s1gUa4nzk3sq3APx%2BAknkbm%2BOCMpH%2Bh8xPEuqabfJtSCXOZhH55kVvNwf%2BRbyuJzoVQn4rfaEDd%2FpJrMq7RfbdmDXJvlBd42G0T%2FtxA3At3sCla1H2ohYaQJoImbSlKyNTolaAtvL5nkbi4DmK4TvTEZrMCzw2n0eX37e9KZaRXVXDEFvy%2BjeGkuU9x%2BWbQjgXCD%2FCshueHIu2Uw5deH1tTRL70e7xIeLQaP9f23FkzAZRi%2BZk7HRYeIYpzdbLQJ0pIgXrf2bjvwT8NGGnymLYcRXGd08EqPxBR3REXqiRsdnnXMBe%2BODwWbPK0wvDRgmtNZzTQMTlXo8mHXIdapG6qv%2F9FZkYW4ygCouFqezMVvctF%2FqhynfVNaNLmaO0Qc96P45ShXT6%2FiNZpOkpX8eHLmxt8cxXkOdVKy6FMgb1lhzGZ6yRxUjSIhXKqp8uILrN8Eao7gz%2FhJRG%2BWX4fqEK6b3EOsT2v3i7lKi9AcV%2FZDiKe4P5BH2sXEB9XFcP94NfbX%2BSe6SiSiO0Q5U6slnzLFKLNsLSjPfZwnS7KeruMFeTsMd6FMU%2B2kHh7R%2B5w%2BMg8WDc2HXdto8iSL31t4nSC%2BUuLbGZMQo0t31gdvXaIuTNaM74fYLEnGC99eEE5rvstfY7E5MjCcqpvPBjqkAQYIV6V1qaSSihWcG3LTEFiEepf9QiGQ2qDU%2FAtJ1%2BzRVoSoKyjlSXQ%2FJ1c%2Bu88fE%2FITfLaZxEu8HTHq5h%2BAZg4mMqsTClLmls5fZn99kwiJfGMmPvZl1iLiqI1sBT4nRjoHS%2F0Q2jYcRYey%2Bb7i85oxK8EImspqqvvf5%2BtKY8vKToLdMTNNbrN0U0rISibmoOIFndx5FxWRyIfkRiXki1GiRtPr&X-Amz-Signature=bed81d16099374f24f925f7ec02fd68c12369fb712eb2476bfb018b66e954c8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULHASFNR%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIEuaaBlcKCFrNQCa0gagZgevoyfRcm861GLSbMeQmTAUAiEAix1mlq1l55TLhKlSiqcKSEJim6lI8Xo3AT%2FEbDdFlsMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDM3JVPBAnFYXDbwi8ircAyYvL9b6t5139%2FXgrhX4NnX7KdZYEY5%2Bo3jR1151LRwncDBrC3hcvsmOwWo4g2HRCvtUbIUqB2f5I2HimgpIRMDKewxmybMy7M03kK6urMZj4W1L18QirOViI1PPJUahntcPcUw03BkS7uuvLf7AjBBY0au42z%2FAHC%2B352ZgwM%2FE6o6iOnA%2Bf%2BRu9a7fFImq0MAENhPVSQH7drC2S9kQoF9%2FFJHf4vfwi3J%2BLaWz7omDhxG1DgzX%2FXUkFx%2B2I3EnA23A1LPPCSo88kahKKph71Er7iPuF0M%2B92VzZONkdNSuS%2BeJfkuFkP3Ca06CaWWdwIKjaB3ALvjqou29K467f6DXPp14vh9snzbd7XItrjKraKoPaD9X%2B%2F2PWI0u%2Fb6eOEsJ2CbjD5Zydhbx781nLrDNPudhyxh4H9xZHHcCGUsWg3aP%2BCLVPBmn5edP%2B6dYk7UCQOjcHBqS8rCMLRt5%2BWv0op1X4r5OEJepOp6OFCd87gs9%2FLyQ0Ta7TN0Wn3LXZwDjIgDRTwAr7XAS94l0phMey8fuZx8IRTThKPZsUbulW5vFtkmqZmlKZ0u075aC6h8uuvIUJX3mWWcTsnFJDY%2FEOnI4DtHTMFRhbgHDcTe2EhYaRxyNbmGeAgGCMMWqm88GOqUBlxYsOktJLVAGA11rmJGTiXrIFW4k0DAnOX9MytOhkkbm2iYWguqaC4nSpDpffTXh9TE4zr1hzr3zVm9ICyFqcJxec8y%2BI2HzbQqvwZ3YZgTC1DsIXtkhLXQZYtfNPCE3F1Yn775qbLKBtIjNYHl649kvkI18eT5Eo7BEDGu2r%2B2bduwalXVpA9aVotm24SwQ3ROmx7ot7pz5gtFv8dflufjW1w6e&X-Amz-Signature=4f04986e6a988bcf59e5917d5904a8b854df8a69f5e781c4730b144cd0dc4cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTJX2AK5%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCCjGv7%2B6HHudjFT7tTm8kpGd%2BEry7ZZ44h%2FOO9RPRoJwIhAOC7M%2BoYY9BeENLEyuvJSyU0NXUBhh53k%2Bbi54FGV%2Bx1Kv8DCCsQABoMNjM3NDIzMTgzODA1IgzZVFr3s1gUa4nzk3sq3APx%2BAknkbm%2BOCMpH%2Bh8xPEuqabfJtSCXOZhH55kVvNwf%2BRbyuJzoVQn4rfaEDd%2FpJrMq7RfbdmDXJvlBd42G0T%2FtxA3At3sCla1H2ohYaQJoImbSlKyNTolaAtvL5nkbi4DmK4TvTEZrMCzw2n0eX37e9KZaRXVXDEFvy%2BjeGkuU9x%2BWbQjgXCD%2FCshueHIu2Uw5deH1tTRL70e7xIeLQaP9f23FkzAZRi%2BZk7HRYeIYpzdbLQJ0pIgXrf2bjvwT8NGGnymLYcRXGd08EqPxBR3REXqiRsdnnXMBe%2BODwWbPK0wvDRgmtNZzTQMTlXo8mHXIdapG6qv%2F9FZkYW4ygCouFqezMVvctF%2FqhynfVNaNLmaO0Qc96P45ShXT6%2FiNZpOkpX8eHLmxt8cxXkOdVKy6FMgb1lhzGZ6yRxUjSIhXKqp8uILrN8Eao7gz%2FhJRG%2BWX4fqEK6b3EOsT2v3i7lKi9AcV%2FZDiKe4P5BH2sXEB9XFcP94NfbX%2BSe6SiSiO0Q5U6slnzLFKLNsLSjPfZwnS7KeruMFeTsMd6FMU%2B2kHh7R%2B5w%2BMg8WDc2HXdto8iSL31t4nSC%2BUuLbGZMQo0t31gdvXaIuTNaM74fYLEnGC99eEE5rvstfY7E5MjCcqpvPBjqkAQYIV6V1qaSSihWcG3LTEFiEepf9QiGQ2qDU%2FAtJ1%2BzRVoSoKyjlSXQ%2FJ1c%2Bu88fE%2FITfLaZxEu8HTHq5h%2BAZg4mMqsTClLmls5fZn99kwiJfGMmPvZl1iLiqI1sBT4nRjoHS%2F0Q2jYcRYey%2Bb7i85oxK8EImspqqvvf5%2BtKY8vKToLdMTNNbrN0U0rISibmoOIFndx5FxWRyIfkRiXki1GiRtPr&X-Amz-Signature=d3c1d2f94424d15541396d833e5df3f48b9c63f78aa4f32d62644559d8b97250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTJX2AK5%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCCjGv7%2B6HHudjFT7tTm8kpGd%2BEry7ZZ44h%2FOO9RPRoJwIhAOC7M%2BoYY9BeENLEyuvJSyU0NXUBhh53k%2Bbi54FGV%2Bx1Kv8DCCsQABoMNjM3NDIzMTgzODA1IgzZVFr3s1gUa4nzk3sq3APx%2BAknkbm%2BOCMpH%2Bh8xPEuqabfJtSCXOZhH55kVvNwf%2BRbyuJzoVQn4rfaEDd%2FpJrMq7RfbdmDXJvlBd42G0T%2FtxA3At3sCla1H2ohYaQJoImbSlKyNTolaAtvL5nkbi4DmK4TvTEZrMCzw2n0eX37e9KZaRXVXDEFvy%2BjeGkuU9x%2BWbQjgXCD%2FCshueHIu2Uw5deH1tTRL70e7xIeLQaP9f23FkzAZRi%2BZk7HRYeIYpzdbLQJ0pIgXrf2bjvwT8NGGnymLYcRXGd08EqPxBR3REXqiRsdnnXMBe%2BODwWbPK0wvDRgmtNZzTQMTlXo8mHXIdapG6qv%2F9FZkYW4ygCouFqezMVvctF%2FqhynfVNaNLmaO0Qc96P45ShXT6%2FiNZpOkpX8eHLmxt8cxXkOdVKy6FMgb1lhzGZ6yRxUjSIhXKqp8uILrN8Eao7gz%2FhJRG%2BWX4fqEK6b3EOsT2v3i7lKi9AcV%2FZDiKe4P5BH2sXEB9XFcP94NfbX%2BSe6SiSiO0Q5U6slnzLFKLNsLSjPfZwnS7KeruMFeTsMd6FMU%2B2kHh7R%2B5w%2BMg8WDc2HXdto8iSL31t4nSC%2BUuLbGZMQo0t31gdvXaIuTNaM74fYLEnGC99eEE5rvstfY7E5MjCcqpvPBjqkAQYIV6V1qaSSihWcG3LTEFiEepf9QiGQ2qDU%2FAtJ1%2BzRVoSoKyjlSXQ%2FJ1c%2Bu88fE%2FITfLaZxEu8HTHq5h%2BAZg4mMqsTClLmls5fZn99kwiJfGMmPvZl1iLiqI1sBT4nRjoHS%2F0Q2jYcRYey%2Bb7i85oxK8EImspqqvvf5%2BtKY8vKToLdMTNNbrN0U0rISibmoOIFndx5FxWRyIfkRiXki1GiRtPr&X-Amz-Signature=f0b116ceca7e2fe61fd28cf50103dbdb9e6bf3099788f369cc348f900a761d51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTJX2AK5%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCCjGv7%2B6HHudjFT7tTm8kpGd%2BEry7ZZ44h%2FOO9RPRoJwIhAOC7M%2BoYY9BeENLEyuvJSyU0NXUBhh53k%2Bbi54FGV%2Bx1Kv8DCCsQABoMNjM3NDIzMTgzODA1IgzZVFr3s1gUa4nzk3sq3APx%2BAknkbm%2BOCMpH%2Bh8xPEuqabfJtSCXOZhH55kVvNwf%2BRbyuJzoVQn4rfaEDd%2FpJrMq7RfbdmDXJvlBd42G0T%2FtxA3At3sCla1H2ohYaQJoImbSlKyNTolaAtvL5nkbi4DmK4TvTEZrMCzw2n0eX37e9KZaRXVXDEFvy%2BjeGkuU9x%2BWbQjgXCD%2FCshueHIu2Uw5deH1tTRL70e7xIeLQaP9f23FkzAZRi%2BZk7HRYeIYpzdbLQJ0pIgXrf2bjvwT8NGGnymLYcRXGd08EqPxBR3REXqiRsdnnXMBe%2BODwWbPK0wvDRgmtNZzTQMTlXo8mHXIdapG6qv%2F9FZkYW4ygCouFqezMVvctF%2FqhynfVNaNLmaO0Qc96P45ShXT6%2FiNZpOkpX8eHLmxt8cxXkOdVKy6FMgb1lhzGZ6yRxUjSIhXKqp8uILrN8Eao7gz%2FhJRG%2BWX4fqEK6b3EOsT2v3i7lKi9AcV%2FZDiKe4P5BH2sXEB9XFcP94NfbX%2BSe6SiSiO0Q5U6slnzLFKLNsLSjPfZwnS7KeruMFeTsMd6FMU%2B2kHh7R%2B5w%2BMg8WDc2HXdto8iSL31t4nSC%2BUuLbGZMQo0t31gdvXaIuTNaM74fYLEnGC99eEE5rvstfY7E5MjCcqpvPBjqkAQYIV6V1qaSSihWcG3LTEFiEepf9QiGQ2qDU%2FAtJ1%2BzRVoSoKyjlSXQ%2FJ1c%2Bu88fE%2FITfLaZxEu8HTHq5h%2BAZg4mMqsTClLmls5fZn99kwiJfGMmPvZl1iLiqI1sBT4nRjoHS%2F0Q2jYcRYey%2Bb7i85oxK8EImspqqvvf5%2BtKY8vKToLdMTNNbrN0U0rISibmoOIFndx5FxWRyIfkRiXki1GiRtPr&X-Amz-Signature=d439e0a530b391b3bbc8989a14c0ce1ef4416671a76e2f715cf4f51696cdd387&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTJX2AK5%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCCjGv7%2B6HHudjFT7tTm8kpGd%2BEry7ZZ44h%2FOO9RPRoJwIhAOC7M%2BoYY9BeENLEyuvJSyU0NXUBhh53k%2Bbi54FGV%2Bx1Kv8DCCsQABoMNjM3NDIzMTgzODA1IgzZVFr3s1gUa4nzk3sq3APx%2BAknkbm%2BOCMpH%2Bh8xPEuqabfJtSCXOZhH55kVvNwf%2BRbyuJzoVQn4rfaEDd%2FpJrMq7RfbdmDXJvlBd42G0T%2FtxA3At3sCla1H2ohYaQJoImbSlKyNTolaAtvL5nkbi4DmK4TvTEZrMCzw2n0eX37e9KZaRXVXDEFvy%2BjeGkuU9x%2BWbQjgXCD%2FCshueHIu2Uw5deH1tTRL70e7xIeLQaP9f23FkzAZRi%2BZk7HRYeIYpzdbLQJ0pIgXrf2bjvwT8NGGnymLYcRXGd08EqPxBR3REXqiRsdnnXMBe%2BODwWbPK0wvDRgmtNZzTQMTlXo8mHXIdapG6qv%2F9FZkYW4ygCouFqezMVvctF%2FqhynfVNaNLmaO0Qc96P45ShXT6%2FiNZpOkpX8eHLmxt8cxXkOdVKy6FMgb1lhzGZ6yRxUjSIhXKqp8uILrN8Eao7gz%2FhJRG%2BWX4fqEK6b3EOsT2v3i7lKi9AcV%2FZDiKe4P5BH2sXEB9XFcP94NfbX%2BSe6SiSiO0Q5U6slnzLFKLNsLSjPfZwnS7KeruMFeTsMd6FMU%2B2kHh7R%2B5w%2BMg8WDc2HXdto8iSL31t4nSC%2BUuLbGZMQo0t31gdvXaIuTNaM74fYLEnGC99eEE5rvstfY7E5MjCcqpvPBjqkAQYIV6V1qaSSihWcG3LTEFiEepf9QiGQ2qDU%2FAtJ1%2BzRVoSoKyjlSXQ%2FJ1c%2Bu88fE%2FITfLaZxEu8HTHq5h%2BAZg4mMqsTClLmls5fZn99kwiJfGMmPvZl1iLiqI1sBT4nRjoHS%2F0Q2jYcRYey%2Bb7i85oxK8EImspqqvvf5%2BtKY8vKToLdMTNNbrN0U0rISibmoOIFndx5FxWRyIfkRiXki1GiRtPr&X-Amz-Signature=1aef67713dbb7bb8f82fa039e8882e0ec44884233bc012135a078e0d59bd05e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTJX2AK5%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCCjGv7%2B6HHudjFT7tTm8kpGd%2BEry7ZZ44h%2FOO9RPRoJwIhAOC7M%2BoYY9BeENLEyuvJSyU0NXUBhh53k%2Bbi54FGV%2Bx1Kv8DCCsQABoMNjM3NDIzMTgzODA1IgzZVFr3s1gUa4nzk3sq3APx%2BAknkbm%2BOCMpH%2Bh8xPEuqabfJtSCXOZhH55kVvNwf%2BRbyuJzoVQn4rfaEDd%2FpJrMq7RfbdmDXJvlBd42G0T%2FtxA3At3sCla1H2ohYaQJoImbSlKyNTolaAtvL5nkbi4DmK4TvTEZrMCzw2n0eX37e9KZaRXVXDEFvy%2BjeGkuU9x%2BWbQjgXCD%2FCshueHIu2Uw5deH1tTRL70e7xIeLQaP9f23FkzAZRi%2BZk7HRYeIYpzdbLQJ0pIgXrf2bjvwT8NGGnymLYcRXGd08EqPxBR3REXqiRsdnnXMBe%2BODwWbPK0wvDRgmtNZzTQMTlXo8mHXIdapG6qv%2F9FZkYW4ygCouFqezMVvctF%2FqhynfVNaNLmaO0Qc96P45ShXT6%2FiNZpOkpX8eHLmxt8cxXkOdVKy6FMgb1lhzGZ6yRxUjSIhXKqp8uILrN8Eao7gz%2FhJRG%2BWX4fqEK6b3EOsT2v3i7lKi9AcV%2FZDiKe4P5BH2sXEB9XFcP94NfbX%2BSe6SiSiO0Q5U6slnzLFKLNsLSjPfZwnS7KeruMFeTsMd6FMU%2B2kHh7R%2B5w%2BMg8WDc2HXdto8iSL31t4nSC%2BUuLbGZMQo0t31gdvXaIuTNaM74fYLEnGC99eEE5rvstfY7E5MjCcqpvPBjqkAQYIV6V1qaSSihWcG3LTEFiEepf9QiGQ2qDU%2FAtJ1%2BzRVoSoKyjlSXQ%2FJ1c%2Bu88fE%2FITfLaZxEu8HTHq5h%2BAZg4mMqsTClLmls5fZn99kwiJfGMmPvZl1iLiqI1sBT4nRjoHS%2F0Q2jYcRYey%2Bb7i85oxK8EImspqqvvf5%2BtKY8vKToLdMTNNbrN0U0rISibmoOIFndx5FxWRyIfkRiXki1GiRtPr&X-Amz-Signature=cf2e5ea8ca5d6ece38e0d93e928c245bbcbe26412872e8ca18df2cc31e473be9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTJX2AK5%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCCjGv7%2B6HHudjFT7tTm8kpGd%2BEry7ZZ44h%2FOO9RPRoJwIhAOC7M%2BoYY9BeENLEyuvJSyU0NXUBhh53k%2Bbi54FGV%2Bx1Kv8DCCsQABoMNjM3NDIzMTgzODA1IgzZVFr3s1gUa4nzk3sq3APx%2BAknkbm%2BOCMpH%2Bh8xPEuqabfJtSCXOZhH55kVvNwf%2BRbyuJzoVQn4rfaEDd%2FpJrMq7RfbdmDXJvlBd42G0T%2FtxA3At3sCla1H2ohYaQJoImbSlKyNTolaAtvL5nkbi4DmK4TvTEZrMCzw2n0eX37e9KZaRXVXDEFvy%2BjeGkuU9x%2BWbQjgXCD%2FCshueHIu2Uw5deH1tTRL70e7xIeLQaP9f23FkzAZRi%2BZk7HRYeIYpzdbLQJ0pIgXrf2bjvwT8NGGnymLYcRXGd08EqPxBR3REXqiRsdnnXMBe%2BODwWbPK0wvDRgmtNZzTQMTlXo8mHXIdapG6qv%2F9FZkYW4ygCouFqezMVvctF%2FqhynfVNaNLmaO0Qc96P45ShXT6%2FiNZpOkpX8eHLmxt8cxXkOdVKy6FMgb1lhzGZ6yRxUjSIhXKqp8uILrN8Eao7gz%2FhJRG%2BWX4fqEK6b3EOsT2v3i7lKi9AcV%2FZDiKe4P5BH2sXEB9XFcP94NfbX%2BSe6SiSiO0Q5U6slnzLFKLNsLSjPfZwnS7KeruMFeTsMd6FMU%2B2kHh7R%2B5w%2BMg8WDc2HXdto8iSL31t4nSC%2BUuLbGZMQo0t31gdvXaIuTNaM74fYLEnGC99eEE5rvstfY7E5MjCcqpvPBjqkAQYIV6V1qaSSihWcG3LTEFiEepf9QiGQ2qDU%2FAtJ1%2BzRVoSoKyjlSXQ%2FJ1c%2Bu88fE%2FITfLaZxEu8HTHq5h%2BAZg4mMqsTClLmls5fZn99kwiJfGMmPvZl1iLiqI1sBT4nRjoHS%2F0Q2jYcRYey%2Bb7i85oxK8EImspqqvvf5%2BtKY8vKToLdMTNNbrN0U0rISibmoOIFndx5FxWRyIfkRiXki1GiRtPr&X-Amz-Signature=c68ec159b8834f321c94efaa6d10dd4612963e9c2fc11c03612029fa22a24cdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


