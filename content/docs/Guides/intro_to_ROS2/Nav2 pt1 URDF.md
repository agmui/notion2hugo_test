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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJPBJGHL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmB0IQQGnzwVoEWNn4HWZ9gD%2B8JJpPaf51GsVAChPNnAiB64SOPzS0GfFJzO%2BR6j10k8tIC2NMohRFUUx6Q%2BxVcHir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMBFezj7x1iVBWmDj3KtwDrqtZPTT3qexrku12f%2BW2Qxqrb3jqiddJmRzDYjiL6W7qLxvhr8dQRACl4wDAvDmWt8IBMB5CDr0p%2F2RtkLqbV2K5WieXvIsmryVU6D%2FerzKILgi6F9BOz9P%2Bic7mDP17qe%2FQ1yoILaRZn25i0tdkyKuVKtuVQOTyNfTLQuwqxmAHaT%2Bb3QGqPb%2BmoiuIw4rXOLIwMvG8tVvGvfgdSt2oEKnm%2FNE4CuCrTXQCOzcCub%2FhsVyu%2FfiukO00hT3iEtCR1NtJ96rsf%2BQ985SjH3uFeaNkgXUMm9qxiXYV4cmrXYWKzbeaD6z6OOjarFul99viRo1%2FE0PBlxQN6oo7ptXhHMrpxuPnjV1kvdPYz3OT%2FJIYTakTA%2FWUYkbIodRlE0mh6u%2FAS76efTlN1oraNi4JLb2vRPcfD7l7VPAFcWcf5tvQpChIltgbjoOjATctEGXxne1aUuISD8Tnj8A4Rm7TqEixt8jd8uvKy%2BKxaa%2BY0zmjnH6o6CaKRejG%2Bbb23vETghtcLso2pdMGWpf%2B8MgxBRzZWu0Ki4Ol0Xn457f2KfPYmI6nh8qDdcTLhiW%2FTDs35w8AZjahQDccJIhGh2l04gZ%2F577h6cPXvyINwaUdUEC2wpJeAbxqd0pDDewwrYC6xAY6pgEQLRFd292IQooLO867hBoI1IaEHpKySP39964PNifuVe%2B5O%2F12QrLD5w7Sf%2FS2Deboz7EXKQLzIFozvtw7PXFtyHnlCeDA9kp9NPIjQnGGEFToswJT0heVMBUTChSezscbyCa%2BaUUOxRNudb5y9iOlseF5uTJiUMDHGRHrlVAz%2BeEtZEoswRiekHx3yPzMDA52LzbkH5RApilxZEOhSdxJnTgXbCFr&X-Amz-Signature=f6fa2781b182bb7869b4188761a27e11dcbe39ef53d81b205a70949af9f3e0dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJPBJGHL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmB0IQQGnzwVoEWNn4HWZ9gD%2B8JJpPaf51GsVAChPNnAiB64SOPzS0GfFJzO%2BR6j10k8tIC2NMohRFUUx6Q%2BxVcHir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMBFezj7x1iVBWmDj3KtwDrqtZPTT3qexrku12f%2BW2Qxqrb3jqiddJmRzDYjiL6W7qLxvhr8dQRACl4wDAvDmWt8IBMB5CDr0p%2F2RtkLqbV2K5WieXvIsmryVU6D%2FerzKILgi6F9BOz9P%2Bic7mDP17qe%2FQ1yoILaRZn25i0tdkyKuVKtuVQOTyNfTLQuwqxmAHaT%2Bb3QGqPb%2BmoiuIw4rXOLIwMvG8tVvGvfgdSt2oEKnm%2FNE4CuCrTXQCOzcCub%2FhsVyu%2FfiukO00hT3iEtCR1NtJ96rsf%2BQ985SjH3uFeaNkgXUMm9qxiXYV4cmrXYWKzbeaD6z6OOjarFul99viRo1%2FE0PBlxQN6oo7ptXhHMrpxuPnjV1kvdPYz3OT%2FJIYTakTA%2FWUYkbIodRlE0mh6u%2FAS76efTlN1oraNi4JLb2vRPcfD7l7VPAFcWcf5tvQpChIltgbjoOjATctEGXxne1aUuISD8Tnj8A4Rm7TqEixt8jd8uvKy%2BKxaa%2BY0zmjnH6o6CaKRejG%2Bbb23vETghtcLso2pdMGWpf%2B8MgxBRzZWu0Ki4Ol0Xn457f2KfPYmI6nh8qDdcTLhiW%2FTDs35w8AZjahQDccJIhGh2l04gZ%2F577h6cPXvyINwaUdUEC2wpJeAbxqd0pDDewwrYC6xAY6pgEQLRFd292IQooLO867hBoI1IaEHpKySP39964PNifuVe%2B5O%2F12QrLD5w7Sf%2FS2Deboz7EXKQLzIFozvtw7PXFtyHnlCeDA9kp9NPIjQnGGEFToswJT0heVMBUTChSezscbyCa%2BaUUOxRNudb5y9iOlseF5uTJiUMDHGRHrlVAz%2BeEtZEoswRiekHx3yPzMDA52LzbkH5RApilxZEOhSdxJnTgXbCFr&X-Amz-Signature=cb1f3ae9913ebd331e50dc579aa01279f411ab8ab0f8cd3e041c492d8a8fa3be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJPBJGHL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmB0IQQGnzwVoEWNn4HWZ9gD%2B8JJpPaf51GsVAChPNnAiB64SOPzS0GfFJzO%2BR6j10k8tIC2NMohRFUUx6Q%2BxVcHir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMBFezj7x1iVBWmDj3KtwDrqtZPTT3qexrku12f%2BW2Qxqrb3jqiddJmRzDYjiL6W7qLxvhr8dQRACl4wDAvDmWt8IBMB5CDr0p%2F2RtkLqbV2K5WieXvIsmryVU6D%2FerzKILgi6F9BOz9P%2Bic7mDP17qe%2FQ1yoILaRZn25i0tdkyKuVKtuVQOTyNfTLQuwqxmAHaT%2Bb3QGqPb%2BmoiuIw4rXOLIwMvG8tVvGvfgdSt2oEKnm%2FNE4CuCrTXQCOzcCub%2FhsVyu%2FfiukO00hT3iEtCR1NtJ96rsf%2BQ985SjH3uFeaNkgXUMm9qxiXYV4cmrXYWKzbeaD6z6OOjarFul99viRo1%2FE0PBlxQN6oo7ptXhHMrpxuPnjV1kvdPYz3OT%2FJIYTakTA%2FWUYkbIodRlE0mh6u%2FAS76efTlN1oraNi4JLb2vRPcfD7l7VPAFcWcf5tvQpChIltgbjoOjATctEGXxne1aUuISD8Tnj8A4Rm7TqEixt8jd8uvKy%2BKxaa%2BY0zmjnH6o6CaKRejG%2Bbb23vETghtcLso2pdMGWpf%2B8MgxBRzZWu0Ki4Ol0Xn457f2KfPYmI6nh8qDdcTLhiW%2FTDs35w8AZjahQDccJIhGh2l04gZ%2F577h6cPXvyINwaUdUEC2wpJeAbxqd0pDDewwrYC6xAY6pgEQLRFd292IQooLO867hBoI1IaEHpKySP39964PNifuVe%2B5O%2F12QrLD5w7Sf%2FS2Deboz7EXKQLzIFozvtw7PXFtyHnlCeDA9kp9NPIjQnGGEFToswJT0heVMBUTChSezscbyCa%2BaUUOxRNudb5y9iOlseF5uTJiUMDHGRHrlVAz%2BeEtZEoswRiekHx3yPzMDA52LzbkH5RApilxZEOhSdxJnTgXbCFr&X-Amz-Signature=6d307049e450ce100f7d6e565b0fa18d2f2d2ca2f88d911db76ea1e5cf7858ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJPBJGHL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmB0IQQGnzwVoEWNn4HWZ9gD%2B8JJpPaf51GsVAChPNnAiB64SOPzS0GfFJzO%2BR6j10k8tIC2NMohRFUUx6Q%2BxVcHir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMBFezj7x1iVBWmDj3KtwDrqtZPTT3qexrku12f%2BW2Qxqrb3jqiddJmRzDYjiL6W7qLxvhr8dQRACl4wDAvDmWt8IBMB5CDr0p%2F2RtkLqbV2K5WieXvIsmryVU6D%2FerzKILgi6F9BOz9P%2Bic7mDP17qe%2FQ1yoILaRZn25i0tdkyKuVKtuVQOTyNfTLQuwqxmAHaT%2Bb3QGqPb%2BmoiuIw4rXOLIwMvG8tVvGvfgdSt2oEKnm%2FNE4CuCrTXQCOzcCub%2FhsVyu%2FfiukO00hT3iEtCR1NtJ96rsf%2BQ985SjH3uFeaNkgXUMm9qxiXYV4cmrXYWKzbeaD6z6OOjarFul99viRo1%2FE0PBlxQN6oo7ptXhHMrpxuPnjV1kvdPYz3OT%2FJIYTakTA%2FWUYkbIodRlE0mh6u%2FAS76efTlN1oraNi4JLb2vRPcfD7l7VPAFcWcf5tvQpChIltgbjoOjATctEGXxne1aUuISD8Tnj8A4Rm7TqEixt8jd8uvKy%2BKxaa%2BY0zmjnH6o6CaKRejG%2Bbb23vETghtcLso2pdMGWpf%2B8MgxBRzZWu0Ki4Ol0Xn457f2KfPYmI6nh8qDdcTLhiW%2FTDs35w8AZjahQDccJIhGh2l04gZ%2F577h6cPXvyINwaUdUEC2wpJeAbxqd0pDDewwrYC6xAY6pgEQLRFd292IQooLO867hBoI1IaEHpKySP39964PNifuVe%2B5O%2F12QrLD5w7Sf%2FS2Deboz7EXKQLzIFozvtw7PXFtyHnlCeDA9kp9NPIjQnGGEFToswJT0heVMBUTChSezscbyCa%2BaUUOxRNudb5y9iOlseF5uTJiUMDHGRHrlVAz%2BeEtZEoswRiekHx3yPzMDA52LzbkH5RApilxZEOhSdxJnTgXbCFr&X-Amz-Signature=0ceacd1fde6225d62a16c9822efe42aa9b400145737466f450604c476033d6ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJPBJGHL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmB0IQQGnzwVoEWNn4HWZ9gD%2B8JJpPaf51GsVAChPNnAiB64SOPzS0GfFJzO%2BR6j10k8tIC2NMohRFUUx6Q%2BxVcHir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMBFezj7x1iVBWmDj3KtwDrqtZPTT3qexrku12f%2BW2Qxqrb3jqiddJmRzDYjiL6W7qLxvhr8dQRACl4wDAvDmWt8IBMB5CDr0p%2F2RtkLqbV2K5WieXvIsmryVU6D%2FerzKILgi6F9BOz9P%2Bic7mDP17qe%2FQ1yoILaRZn25i0tdkyKuVKtuVQOTyNfTLQuwqxmAHaT%2Bb3QGqPb%2BmoiuIw4rXOLIwMvG8tVvGvfgdSt2oEKnm%2FNE4CuCrTXQCOzcCub%2FhsVyu%2FfiukO00hT3iEtCR1NtJ96rsf%2BQ985SjH3uFeaNkgXUMm9qxiXYV4cmrXYWKzbeaD6z6OOjarFul99viRo1%2FE0PBlxQN6oo7ptXhHMrpxuPnjV1kvdPYz3OT%2FJIYTakTA%2FWUYkbIodRlE0mh6u%2FAS76efTlN1oraNi4JLb2vRPcfD7l7VPAFcWcf5tvQpChIltgbjoOjATctEGXxne1aUuISD8Tnj8A4Rm7TqEixt8jd8uvKy%2BKxaa%2BY0zmjnH6o6CaKRejG%2Bbb23vETghtcLso2pdMGWpf%2B8MgxBRzZWu0Ki4Ol0Xn457f2KfPYmI6nh8qDdcTLhiW%2FTDs35w8AZjahQDccJIhGh2l04gZ%2F577h6cPXvyINwaUdUEC2wpJeAbxqd0pDDewwrYC6xAY6pgEQLRFd292IQooLO867hBoI1IaEHpKySP39964PNifuVe%2B5O%2F12QrLD5w7Sf%2FS2Deboz7EXKQLzIFozvtw7PXFtyHnlCeDA9kp9NPIjQnGGEFToswJT0heVMBUTChSezscbyCa%2BaUUOxRNudb5y9iOlseF5uTJiUMDHGRHrlVAz%2BeEtZEoswRiekHx3yPzMDA52LzbkH5RApilxZEOhSdxJnTgXbCFr&X-Amz-Signature=3b9ca7f7f46e0aa357e58bab2034067cc11d774923a49c5708dbde31887047be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJPBJGHL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmB0IQQGnzwVoEWNn4HWZ9gD%2B8JJpPaf51GsVAChPNnAiB64SOPzS0GfFJzO%2BR6j10k8tIC2NMohRFUUx6Q%2BxVcHir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMBFezj7x1iVBWmDj3KtwDrqtZPTT3qexrku12f%2BW2Qxqrb3jqiddJmRzDYjiL6W7qLxvhr8dQRACl4wDAvDmWt8IBMB5CDr0p%2F2RtkLqbV2K5WieXvIsmryVU6D%2FerzKILgi6F9BOz9P%2Bic7mDP17qe%2FQ1yoILaRZn25i0tdkyKuVKtuVQOTyNfTLQuwqxmAHaT%2Bb3QGqPb%2BmoiuIw4rXOLIwMvG8tVvGvfgdSt2oEKnm%2FNE4CuCrTXQCOzcCub%2FhsVyu%2FfiukO00hT3iEtCR1NtJ96rsf%2BQ985SjH3uFeaNkgXUMm9qxiXYV4cmrXYWKzbeaD6z6OOjarFul99viRo1%2FE0PBlxQN6oo7ptXhHMrpxuPnjV1kvdPYz3OT%2FJIYTakTA%2FWUYkbIodRlE0mh6u%2FAS76efTlN1oraNi4JLb2vRPcfD7l7VPAFcWcf5tvQpChIltgbjoOjATctEGXxne1aUuISD8Tnj8A4Rm7TqEixt8jd8uvKy%2BKxaa%2BY0zmjnH6o6CaKRejG%2Bbb23vETghtcLso2pdMGWpf%2B8MgxBRzZWu0Ki4Ol0Xn457f2KfPYmI6nh8qDdcTLhiW%2FTDs35w8AZjahQDccJIhGh2l04gZ%2F577h6cPXvyINwaUdUEC2wpJeAbxqd0pDDewwrYC6xAY6pgEQLRFd292IQooLO867hBoI1IaEHpKySP39964PNifuVe%2B5O%2F12QrLD5w7Sf%2FS2Deboz7EXKQLzIFozvtw7PXFtyHnlCeDA9kp9NPIjQnGGEFToswJT0heVMBUTChSezscbyCa%2BaUUOxRNudb5y9iOlseF5uTJiUMDHGRHrlVAz%2BeEtZEoswRiekHx3yPzMDA52LzbkH5RApilxZEOhSdxJnTgXbCFr&X-Amz-Signature=5009da112f1ad7f15db32260ad57784b819491dbc6e949ce2a625a4bed56a45c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJPBJGHL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmB0IQQGnzwVoEWNn4HWZ9gD%2B8JJpPaf51GsVAChPNnAiB64SOPzS0GfFJzO%2BR6j10k8tIC2NMohRFUUx6Q%2BxVcHir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMBFezj7x1iVBWmDj3KtwDrqtZPTT3qexrku12f%2BW2Qxqrb3jqiddJmRzDYjiL6W7qLxvhr8dQRACl4wDAvDmWt8IBMB5CDr0p%2F2RtkLqbV2K5WieXvIsmryVU6D%2FerzKILgi6F9BOz9P%2Bic7mDP17qe%2FQ1yoILaRZn25i0tdkyKuVKtuVQOTyNfTLQuwqxmAHaT%2Bb3QGqPb%2BmoiuIw4rXOLIwMvG8tVvGvfgdSt2oEKnm%2FNE4CuCrTXQCOzcCub%2FhsVyu%2FfiukO00hT3iEtCR1NtJ96rsf%2BQ985SjH3uFeaNkgXUMm9qxiXYV4cmrXYWKzbeaD6z6OOjarFul99viRo1%2FE0PBlxQN6oo7ptXhHMrpxuPnjV1kvdPYz3OT%2FJIYTakTA%2FWUYkbIodRlE0mh6u%2FAS76efTlN1oraNi4JLb2vRPcfD7l7VPAFcWcf5tvQpChIltgbjoOjATctEGXxne1aUuISD8Tnj8A4Rm7TqEixt8jd8uvKy%2BKxaa%2BY0zmjnH6o6CaKRejG%2Bbb23vETghtcLso2pdMGWpf%2B8MgxBRzZWu0Ki4Ol0Xn457f2KfPYmI6nh8qDdcTLhiW%2FTDs35w8AZjahQDccJIhGh2l04gZ%2F577h6cPXvyINwaUdUEC2wpJeAbxqd0pDDewwrYC6xAY6pgEQLRFd292IQooLO867hBoI1IaEHpKySP39964PNifuVe%2B5O%2F12QrLD5w7Sf%2FS2Deboz7EXKQLzIFozvtw7PXFtyHnlCeDA9kp9NPIjQnGGEFToswJT0heVMBUTChSezscbyCa%2BaUUOxRNudb5y9iOlseF5uTJiUMDHGRHrlVAz%2BeEtZEoswRiekHx3yPzMDA52LzbkH5RApilxZEOhSdxJnTgXbCFr&X-Amz-Signature=634c8c71e8dc27c492c59321b54a8aaad170f1560c6bc9c1d99209464bb23e91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJPBJGHL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmB0IQQGnzwVoEWNn4HWZ9gD%2B8JJpPaf51GsVAChPNnAiB64SOPzS0GfFJzO%2BR6j10k8tIC2NMohRFUUx6Q%2BxVcHir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMBFezj7x1iVBWmDj3KtwDrqtZPTT3qexrku12f%2BW2Qxqrb3jqiddJmRzDYjiL6W7qLxvhr8dQRACl4wDAvDmWt8IBMB5CDr0p%2F2RtkLqbV2K5WieXvIsmryVU6D%2FerzKILgi6F9BOz9P%2Bic7mDP17qe%2FQ1yoILaRZn25i0tdkyKuVKtuVQOTyNfTLQuwqxmAHaT%2Bb3QGqPb%2BmoiuIw4rXOLIwMvG8tVvGvfgdSt2oEKnm%2FNE4CuCrTXQCOzcCub%2FhsVyu%2FfiukO00hT3iEtCR1NtJ96rsf%2BQ985SjH3uFeaNkgXUMm9qxiXYV4cmrXYWKzbeaD6z6OOjarFul99viRo1%2FE0PBlxQN6oo7ptXhHMrpxuPnjV1kvdPYz3OT%2FJIYTakTA%2FWUYkbIodRlE0mh6u%2FAS76efTlN1oraNi4JLb2vRPcfD7l7VPAFcWcf5tvQpChIltgbjoOjATctEGXxne1aUuISD8Tnj8A4Rm7TqEixt8jd8uvKy%2BKxaa%2BY0zmjnH6o6CaKRejG%2Bbb23vETghtcLso2pdMGWpf%2B8MgxBRzZWu0Ki4Ol0Xn457f2KfPYmI6nh8qDdcTLhiW%2FTDs35w8AZjahQDccJIhGh2l04gZ%2F577h6cPXvyINwaUdUEC2wpJeAbxqd0pDDewwrYC6xAY6pgEQLRFd292IQooLO867hBoI1IaEHpKySP39964PNifuVe%2B5O%2F12QrLD5w7Sf%2FS2Deboz7EXKQLzIFozvtw7PXFtyHnlCeDA9kp9NPIjQnGGEFToswJT0heVMBUTChSezscbyCa%2BaUUOxRNudb5y9iOlseF5uTJiUMDHGRHrlVAz%2BeEtZEoswRiekHx3yPzMDA52LzbkH5RApilxZEOhSdxJnTgXbCFr&X-Amz-Signature=aece5e6912773b1fda8a16b5933d4dfb1856a7b51446f45ba99ebd4bc23b70c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJPBJGHL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmB0IQQGnzwVoEWNn4HWZ9gD%2B8JJpPaf51GsVAChPNnAiB64SOPzS0GfFJzO%2BR6j10k8tIC2NMohRFUUx6Q%2BxVcHir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMBFezj7x1iVBWmDj3KtwDrqtZPTT3qexrku12f%2BW2Qxqrb3jqiddJmRzDYjiL6W7qLxvhr8dQRACl4wDAvDmWt8IBMB5CDr0p%2F2RtkLqbV2K5WieXvIsmryVU6D%2FerzKILgi6F9BOz9P%2Bic7mDP17qe%2FQ1yoILaRZn25i0tdkyKuVKtuVQOTyNfTLQuwqxmAHaT%2Bb3QGqPb%2BmoiuIw4rXOLIwMvG8tVvGvfgdSt2oEKnm%2FNE4CuCrTXQCOzcCub%2FhsVyu%2FfiukO00hT3iEtCR1NtJ96rsf%2BQ985SjH3uFeaNkgXUMm9qxiXYV4cmrXYWKzbeaD6z6OOjarFul99viRo1%2FE0PBlxQN6oo7ptXhHMrpxuPnjV1kvdPYz3OT%2FJIYTakTA%2FWUYkbIodRlE0mh6u%2FAS76efTlN1oraNi4JLb2vRPcfD7l7VPAFcWcf5tvQpChIltgbjoOjATctEGXxne1aUuISD8Tnj8A4Rm7TqEixt8jd8uvKy%2BKxaa%2BY0zmjnH6o6CaKRejG%2Bbb23vETghtcLso2pdMGWpf%2B8MgxBRzZWu0Ki4Ol0Xn457f2KfPYmI6nh8qDdcTLhiW%2FTDs35w8AZjahQDccJIhGh2l04gZ%2F577h6cPXvyINwaUdUEC2wpJeAbxqd0pDDewwrYC6xAY6pgEQLRFd292IQooLO867hBoI1IaEHpKySP39964PNifuVe%2B5O%2F12QrLD5w7Sf%2FS2Deboz7EXKQLzIFozvtw7PXFtyHnlCeDA9kp9NPIjQnGGEFToswJT0heVMBUTChSezscbyCa%2BaUUOxRNudb5y9iOlseF5uTJiUMDHGRHrlVAz%2BeEtZEoswRiekHx3yPzMDA52LzbkH5RApilxZEOhSdxJnTgXbCFr&X-Amz-Signature=0d8be79f3b8d0e38f495d32e50f41afa252de4ad19555eaca242f05338267c06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJPBJGHL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmB0IQQGnzwVoEWNn4HWZ9gD%2B8JJpPaf51GsVAChPNnAiB64SOPzS0GfFJzO%2BR6j10k8tIC2NMohRFUUx6Q%2BxVcHir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMBFezj7x1iVBWmDj3KtwDrqtZPTT3qexrku12f%2BW2Qxqrb3jqiddJmRzDYjiL6W7qLxvhr8dQRACl4wDAvDmWt8IBMB5CDr0p%2F2RtkLqbV2K5WieXvIsmryVU6D%2FerzKILgi6F9BOz9P%2Bic7mDP17qe%2FQ1yoILaRZn25i0tdkyKuVKtuVQOTyNfTLQuwqxmAHaT%2Bb3QGqPb%2BmoiuIw4rXOLIwMvG8tVvGvfgdSt2oEKnm%2FNE4CuCrTXQCOzcCub%2FhsVyu%2FfiukO00hT3iEtCR1NtJ96rsf%2BQ985SjH3uFeaNkgXUMm9qxiXYV4cmrXYWKzbeaD6z6OOjarFul99viRo1%2FE0PBlxQN6oo7ptXhHMrpxuPnjV1kvdPYz3OT%2FJIYTakTA%2FWUYkbIodRlE0mh6u%2FAS76efTlN1oraNi4JLb2vRPcfD7l7VPAFcWcf5tvQpChIltgbjoOjATctEGXxne1aUuISD8Tnj8A4Rm7TqEixt8jd8uvKy%2BKxaa%2BY0zmjnH6o6CaKRejG%2Bbb23vETghtcLso2pdMGWpf%2B8MgxBRzZWu0Ki4Ol0Xn457f2KfPYmI6nh8qDdcTLhiW%2FTDs35w8AZjahQDccJIhGh2l04gZ%2F577h6cPXvyINwaUdUEC2wpJeAbxqd0pDDewwrYC6xAY6pgEQLRFd292IQooLO867hBoI1IaEHpKySP39964PNifuVe%2B5O%2F12QrLD5w7Sf%2FS2Deboz7EXKQLzIFozvtw7PXFtyHnlCeDA9kp9NPIjQnGGEFToswJT0heVMBUTChSezscbyCa%2BaUUOxRNudb5y9iOlseF5uTJiUMDHGRHrlVAz%2BeEtZEoswRiekHx3yPzMDA52LzbkH5RApilxZEOhSdxJnTgXbCFr&X-Amz-Signature=e34e24ecb521e8afde1185ae6a3b5bb6184dfdf8a0e71afa49a4a9b1bd83cd25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIKYYGAB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwpkIjqdIvqvk5qujKhMoIq5qEyaQn4zrFiy6GEO0FwAIhAOixvgW2NKHaWaytTIkxiOgTLs1z7SAmwFpBy3CN%2Bq6aKv8DCB4QABoMNjM3NDIzMTgzODA1IgxSSb3wblsphFi4qEYq3AMUWngecG0l1iPPZOjEmGgBOb3p64iv39zNdZO6Jq7MrRfjjZhdizoi1Ld5QjCU8gbooRYtoz%2BAwWDP5RFkBuyTs03pmLOyy87IWryUPFmId%2FWOZLr%2B2Y0G8QVUGxlI8dnLl%2B4EBakkgejj05Wkvfihdjv9QWsZboJzgtWec8YfLlbjfpT50PKoYdkEeZkhxr67ewYpcRvhzCLQFqocjUXrlXTpS7qTjN2gDp3eWll2s3cFMNScY1oJbrLlVomMrTsqeqz1D0AKiXGnBCukJcWMoL3L1%2FQVKF8OCiS5HID1ORMP%2B0YklkhjjHikaD9M%2FZ8pLXNYaxpqyIyHtgX2DAJ9uHmeLscp5GqpQYlRh80G8WXsHe3pF3BYWplfCD28yiP1Az0ZQgp5eXejFZ2bGKOr%2Bu17pwFVxRA3BFxjAjcrThNYuxTn6jcguH7HJEcgQ8rZ6pt%2BbY58wjcbLl7cLkflx8n6U%2BexEMrxxX5KZd85Q%2B5V7uXlQviFEXQ327n9%2BioFhoxum7zXN5Dp53pfFuZFkzgXePHIbljZOvOZpZBDSutsZKaHktdbz20%2FDdsgyC7rAQvF%2F%2F03U2G3%2FBerMwdA8B7Y2eCmb5Tpx7KhG%2Fr1RVoiRNWjv3mhH6dT8jC6gLrEBjqkAWi3icNCgWFW0Diga%2B2k20wV4GCvQnZFNy5wiFXcXuzh9k2fCUkJRRFCua3GLmj%2Bx97YGJaAzakGJuXYO2%2BJUWikiNhicnGGXxpCeKxZeMlf0vlYFXi1XwtpVn61QqDqgqnJrDHTjf7sA9WAJD0meBm6kvF%2FM%2B8c1qdITxn6WjfxojRto3RlSUJw%2BUmS3kKchYLPwi2MT%2B3YSdFqYN8NZv6mRPIg&X-Amz-Signature=cd2b034d657d0863f8fadb6fea184910b89e5836ba8161db45947e6a790b9c26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6R26OTD%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmRc2s0bgx0mfTGGcRyzt14PCXydxnyJtQC1V4P1MWPAiEAhJKPZhfXoLYFxQPFkHYco0sg5wgVUAM1qvNmZqwfKcEq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJBOiOWR8mss7esBUSrcAyaPXjVsKVsDXZzc84g88anNcGb1NE%2B30MHZljjsxzTMIIhAunNnBKvqCS7pBsvrzX81inoHjsL82l2hdXn2cNGM1SLrcJwCL%2F5F%2F4QxrAdBXLpVmTwf5qmiAfUKkspLbXxLGKwAcXxvBpCLRn4Y2MEmpCjy6dM2%2FQ9q6kPqQJSjjh9QVE3RyTtcIYFbqvGK6C%2BZ%2F22j1AFm9ScFi%2FyPXlzGPM4QPyqDxjksgum%2BPoRc%2FcTB4a%2F7%2FVIaXNETl8aL0bQvtCukPr%2FKmEEfoWqk0ZryTk%2BdAOygqyI36bch3J%2F3OdLFNl1GZL7g6xR8FrDQc3B0169sbCsce5BZ4tiiSEsnbq57TyP1UPnm0hioT4jxbpVfT0wuwMdL86QOIC1MV2s0iaogWviYBRKWoE14HlWct1Gib5CGA9kBXRyMWkabgSZYMw%2Fu2h8jzitHU%2B9IrwTRviuHVyfE%2BOyCqiCRkK31jpNdFuOHHLJuvdrHfiL4eb4jAhJm2BPYI4xqXt4Nm4xfmEUxTsMC30xjnwAkESF74PxhIp3ZALUtEe31h9RP6%2FIUJdzJtQYqj2hh2rngv%2BE4pxRzG64rbmhnCbhLDxCz%2BB3sroCE27RecMhiKhw9DL8I8N5nuaDLJdK6MOCAusQGOqUB5BYGu%2FalH8JLHS2xzSZe0SxuoT%2BAWISku0BlTu6OB0jlGww5NgOzMPbVI4crbl2MDMAPPAxhzmCBiX1UpmbE1D%2Fvb8r%2B1tIyPCJnkf%2F2P4rxpC6RyvCvgZF2vDems%2BSEEyltcCrcCmifInSTga58Nw6A4tUcxEvirWr4iOPMfGz5e6QjVa4wFjBbkKAmxFpGMrriX4lO3o1iAeWNOkxhmT6R3HsO&X-Amz-Signature=9ac5908c428bcc55bbce4a5cf609ae41e4c9638b447e8ba380c66bf9866ebe29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573SCUZN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKr2nO%2B7SU43jCcfInpMlqEeeZw4WQT%2FGiNpmLfgXg%2FQIgIzgNlok%2FNfjgZj2pEyuuJ12NtC8jhtrIQfbHkf8MkJIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIMoVj7xtFyB4fohmyrcAzXLN7MqsHZPi2NwxG1DRQohjuS0ubkfcwNf0HtDFPVOG22NKrKOH%2FW2Sk9cYCU6XO5Pw81SD2Dy4bIDjK8XbuEpnbgdmcyaZS4UEj34NEeGkXDY2TYcJdzA9DmeRXvb2iT4UBw15h3tNxPbmnAE83pAn2JkPR2t1ZAONiAQrcFFq9mRGTnoCdCcHhtf58yWqiJ3b4XRKbrUqP5umhh%2Fuh2C2j2AWEYwVwU9se5OCcBYT37v8JL5pUvqY%2B5H1LOvw5KJAoWIUPGMY114mxBHyf%2B8YG0IfTaY84gdwi8iNS3o9BouD%2FWAn%2B3qww4lCrKqN7kRO4VABOclCwI6oECmuGDPY%2FBBeC0jjNucCRP59nrgvaD8mI75Sb9rg6genICqhfczwpl3Yie6SyUXMnmeA6zZaOQ%2FJMnlzUITURmuaMOUMwHm1fM957%2BEqOjndI80%2FRclI3yLIqVOXGtacUoxSLR3aoD%2Bp0ej1MuUev9iWZw3A7RE5sWXO3T9oevxUW29x6%2Bp5cxVfOEblQNe8EgUFlFU0Uzu3LpHq9psYE%2FFIlhZgvDrh7W39o4SHcdbQ0iXKt9Xhh%2BNgUhVGfnP6brCxkHahRH6G5dJ1KiBAfDDZ43aC94me%2B0eMIxoqjnpMIiBusQGOqUBHyqT5EbgoGBHisbSMqVWu9j08UscNaf%2FT0loAeJ9no%2F3kyFvnnggESft9aIETHHNb%2Bd1J8%2FdUfCynJs%2BwVGqVKF3WL7V2zGIJf3vkMPQnFV5VbT0skU3NHJz0Yw8J5XmnhPRLQ%2BQXx3ZBucypE6GupBcfDO1diGQFHp6kmiAXdHzOw%2BgcShVN1njPpKAP8lFWSSKY%2BRIyRiANr7AJ3ZBopXgSeOl&X-Amz-Signature=3d6534b8fe9fa6dbf8ae36f3efa4abfcdaa12a731522a83748a98c594a1bdf84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJPBJGHL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmB0IQQGnzwVoEWNn4HWZ9gD%2B8JJpPaf51GsVAChPNnAiB64SOPzS0GfFJzO%2BR6j10k8tIC2NMohRFUUx6Q%2BxVcHir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMBFezj7x1iVBWmDj3KtwDrqtZPTT3qexrku12f%2BW2Qxqrb3jqiddJmRzDYjiL6W7qLxvhr8dQRACl4wDAvDmWt8IBMB5CDr0p%2F2RtkLqbV2K5WieXvIsmryVU6D%2FerzKILgi6F9BOz9P%2Bic7mDP17qe%2FQ1yoILaRZn25i0tdkyKuVKtuVQOTyNfTLQuwqxmAHaT%2Bb3QGqPb%2BmoiuIw4rXOLIwMvG8tVvGvfgdSt2oEKnm%2FNE4CuCrTXQCOzcCub%2FhsVyu%2FfiukO00hT3iEtCR1NtJ96rsf%2BQ985SjH3uFeaNkgXUMm9qxiXYV4cmrXYWKzbeaD6z6OOjarFul99viRo1%2FE0PBlxQN6oo7ptXhHMrpxuPnjV1kvdPYz3OT%2FJIYTakTA%2FWUYkbIodRlE0mh6u%2FAS76efTlN1oraNi4JLb2vRPcfD7l7VPAFcWcf5tvQpChIltgbjoOjATctEGXxne1aUuISD8Tnj8A4Rm7TqEixt8jd8uvKy%2BKxaa%2BY0zmjnH6o6CaKRejG%2Bbb23vETghtcLso2pdMGWpf%2B8MgxBRzZWu0Ki4Ol0Xn457f2KfPYmI6nh8qDdcTLhiW%2FTDs35w8AZjahQDccJIhGh2l04gZ%2F577h6cPXvyINwaUdUEC2wpJeAbxqd0pDDewwrYC6xAY6pgEQLRFd292IQooLO867hBoI1IaEHpKySP39964PNifuVe%2B5O%2F12QrLD5w7Sf%2FS2Deboz7EXKQLzIFozvtw7PXFtyHnlCeDA9kp9NPIjQnGGEFToswJT0heVMBUTChSezscbyCa%2BaUUOxRNudb5y9iOlseF5uTJiUMDHGRHrlVAz%2BeEtZEoswRiekHx3yPzMDA52LzbkH5RApilxZEOhSdxJnTgXbCFr&X-Amz-Signature=aa35491290d1b99cda3f7e1f07504a97329e8d30914785cbaf1aea2b335887a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIF6EKWV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKKuB6UCEf5oCSp8aLAZC%2BrvwnybeuZYnP0Ty%2F3XmzaAiB5LCaMEWXYf7cyF9kVR6FzM74A1DbEvbFgGzK6RzEfnyr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMd0dCx6IoyJX0ZctBKtwD1%2F5DPFGB%2BAkO3TKUiXOffIK%2BO4ZTG1NYqo%2B7IdG%2B3V5ot45X%2B%2B4urf5muleIfA%2FA9Xfk8V4yT6X3Z01CcHyEdl2SlANEb5u%2FjTXmUfF6sktPP4%2BEaRBy59wumQZtxqjU96Mjd2EIi%2B1hLZNAsem6dpsDTiu3Ne39JqODyyYkPZjW5yaZ%2BDEDheDJmduuHV%2FLAIANbr6YuQb3NNlKt7Dauj%2B%2F5xGpMwi9%2B2XRAt0Q0txr9Di4cf6bdDKjo11qblW84qauUFHlqOIPY%2BI8lvJjeO4YtLtuEaRSPj2QBG0YXxd%2F1cG7PSwAm1hE%2F3j%2FDu%2B0kPBsVBmuZlyV5rgNf6ToT9GE5Gj%2Fm6SmbgtptFNP08Sa3UI7440dU4vQc%2BEWDySuUPdT60L0KF3GUa9zK%2FU4gyk0QRRrZJvq7fIbLbI05M06F72ND5W4BpOh0qgcKE6zJg%2BaPn3Lfr2c1vxX07Lcx0T0LNWxTQmlbQ4dgu7PQ0YOmetdPaoHxe%2FECejVfl9GRZQPnPLkjvp6rAT6DT7l1BHnQhkWWci%2BD9W%2FeFuyZQ1jUNzYtbxPKh6gpcvwRqfXcgzVVkbmFmbj%2B4REjf5SBXdx146AFgeZda0XKPQSLyJMEz6L%2BM7fkD3saY8w5IC6xAY6pgGAHbbSyPa7nmLCxW0OGYtW%2F1PgZwX1b2FkcmPS6kFx7njUjRVeZ22PPF4m2u8Bv%2FcSIXM0UsjKrc7wkszKtgBOgTDFPNN3MJaaE5LFghMeRzGsuLeLFj8xOs%2BgfY0I5fFGgnn0SyU94kz6NIq%2FEcHUVqQ6dNnfTz9lsMZMNxn83IGNuGadD%2F%2F%2BJyRwQoVZ3X%2BRefuczedINve1GxsNtlH94GdtELtz&X-Amz-Signature=68e784128331ecf888c02bef632adff982006d218f7eecc27d23361fea74871c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJPBJGHL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmB0IQQGnzwVoEWNn4HWZ9gD%2B8JJpPaf51GsVAChPNnAiB64SOPzS0GfFJzO%2BR6j10k8tIC2NMohRFUUx6Q%2BxVcHir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMBFezj7x1iVBWmDj3KtwDrqtZPTT3qexrku12f%2BW2Qxqrb3jqiddJmRzDYjiL6W7qLxvhr8dQRACl4wDAvDmWt8IBMB5CDr0p%2F2RtkLqbV2K5WieXvIsmryVU6D%2FerzKILgi6F9BOz9P%2Bic7mDP17qe%2FQ1yoILaRZn25i0tdkyKuVKtuVQOTyNfTLQuwqxmAHaT%2Bb3QGqPb%2BmoiuIw4rXOLIwMvG8tVvGvfgdSt2oEKnm%2FNE4CuCrTXQCOzcCub%2FhsVyu%2FfiukO00hT3iEtCR1NtJ96rsf%2BQ985SjH3uFeaNkgXUMm9qxiXYV4cmrXYWKzbeaD6z6OOjarFul99viRo1%2FE0PBlxQN6oo7ptXhHMrpxuPnjV1kvdPYz3OT%2FJIYTakTA%2FWUYkbIodRlE0mh6u%2FAS76efTlN1oraNi4JLb2vRPcfD7l7VPAFcWcf5tvQpChIltgbjoOjATctEGXxne1aUuISD8Tnj8A4Rm7TqEixt8jd8uvKy%2BKxaa%2BY0zmjnH6o6CaKRejG%2Bbb23vETghtcLso2pdMGWpf%2B8MgxBRzZWu0Ki4Ol0Xn457f2KfPYmI6nh8qDdcTLhiW%2FTDs35w8AZjahQDccJIhGh2l04gZ%2F577h6cPXvyINwaUdUEC2wpJeAbxqd0pDDewwrYC6xAY6pgEQLRFd292IQooLO867hBoI1IaEHpKySP39964PNifuVe%2B5O%2F12QrLD5w7Sf%2FS2Deboz7EXKQLzIFozvtw7PXFtyHnlCeDA9kp9NPIjQnGGEFToswJT0heVMBUTChSezscbyCa%2BaUUOxRNudb5y9iOlseF5uTJiUMDHGRHrlVAz%2BeEtZEoswRiekHx3yPzMDA52LzbkH5RApilxZEOhSdxJnTgXbCFr&X-Amz-Signature=c7a6cb566f5a895d38f24a4bba8ef28088e3bac609280e987e66578b88b489db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA556CJR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FL4m9NcwsBa5I7QD%2FTlGIi5hLW1UiwGAUZOLiDUoZtAIhAIfhvRUqFKeuqqoGtsVTe3%2F5FTx6Tze7scIdvp9r1TFzKv8DCB4QABoMNjM3NDIzMTgzODA1IgzP9s0ntd1B1NCzE7Mq3ANrgxBdoLfbD061h33kh%2BNSIJKCDS0UWHn4rrwbEA5YAuXC9FFaQHDmtAf9ncgPYuCT0xmgIiVYkk4vxzN0JshYrYJP4vdIy7tml%2BCJHiWgeEl7jHL7WDJ9lcS%2FRg3%2FGoVw9EnaUjVhiOOx7E3xRJv7%2BSePAru%2BfAdVf3mWs1%2FQf1QrpS9iGjEZhg1ViY1oXKvwEkxohK6zsFN8clNCpxunkJTaPuXqKqNrJDT8qMgxJ%2FH0RDO369T%2BFNvvZDkneNeyaUc%2BXPu%2BclMXol3eRQkJPbfCZCs3xmEGGddAxoYxYbDQvGOOY3prJI0uC47iSYDKCbtA9pC%2FRPeIyUdaMiluP2FWSyddEXULrjdAysSNBkAGaTVfPgLmmJ%2B5Q4MRYTo75QwFCEUlLGTSoanKtRw%2BscxQh%2Bqe1pIq5Tsf55e3Twpt1BbmezoIH9EHO7lqkFp7kcFuRzyQlZzzUQPimTuCIl3pfJKl%2BzACvlPHbdAWk9N6wzTvFYKzP8BcivB1pXW9XJYEutL3ttT5UzgpRzuSGvJZjNjKtPVu3Bb4p9sjTtkToRYGDTfereotrjGueqz5%2FKnyzSUkQvazDlWWyvXW%2B9YFAWlgdhkrV39xSSMrwiaNsZIhyebs9MLBvTCegLrEBjqkAYYF7XLVppk2n3klzythm2pI7G0HY7U6tvjDdteAYIq7p9pN9k0SfV1bI%2BFqWg9dBYb01oWmRwrEIi98qIzEex3uS5igZcocJWUN6AasSBQHbwHVgOBMAed2nMDBMlyxAPaKcd6G4pMLxw4lL%2FNI6%2Bk1X8Pu3fljFxhr5ZCfYc9MRCZrphzfd72DUB3dOc%2FNjrbjHxuOEXxSr%2Bm7QEG9yxDaQ87a&X-Amz-Signature=d11735b613a7f6f11c08363eb7b69bd4f1e52bc583bfa7f0ede0883f25459783&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJPBJGHL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmB0IQQGnzwVoEWNn4HWZ9gD%2B8JJpPaf51GsVAChPNnAiB64SOPzS0GfFJzO%2BR6j10k8tIC2NMohRFUUx6Q%2BxVcHir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMBFezj7x1iVBWmDj3KtwDrqtZPTT3qexrku12f%2BW2Qxqrb3jqiddJmRzDYjiL6W7qLxvhr8dQRACl4wDAvDmWt8IBMB5CDr0p%2F2RtkLqbV2K5WieXvIsmryVU6D%2FerzKILgi6F9BOz9P%2Bic7mDP17qe%2FQ1yoILaRZn25i0tdkyKuVKtuVQOTyNfTLQuwqxmAHaT%2Bb3QGqPb%2BmoiuIw4rXOLIwMvG8tVvGvfgdSt2oEKnm%2FNE4CuCrTXQCOzcCub%2FhsVyu%2FfiukO00hT3iEtCR1NtJ96rsf%2BQ985SjH3uFeaNkgXUMm9qxiXYV4cmrXYWKzbeaD6z6OOjarFul99viRo1%2FE0PBlxQN6oo7ptXhHMrpxuPnjV1kvdPYz3OT%2FJIYTakTA%2FWUYkbIodRlE0mh6u%2FAS76efTlN1oraNi4JLb2vRPcfD7l7VPAFcWcf5tvQpChIltgbjoOjATctEGXxne1aUuISD8Tnj8A4Rm7TqEixt8jd8uvKy%2BKxaa%2BY0zmjnH6o6CaKRejG%2Bbb23vETghtcLso2pdMGWpf%2B8MgxBRzZWu0Ki4Ol0Xn457f2KfPYmI6nh8qDdcTLhiW%2FTDs35w8AZjahQDccJIhGh2l04gZ%2F577h6cPXvyINwaUdUEC2wpJeAbxqd0pDDewwrYC6xAY6pgEQLRFd292IQooLO867hBoI1IaEHpKySP39964PNifuVe%2B5O%2F12QrLD5w7Sf%2FS2Deboz7EXKQLzIFozvtw7PXFtyHnlCeDA9kp9NPIjQnGGEFToswJT0heVMBUTChSezscbyCa%2BaUUOxRNudb5y9iOlseF5uTJiUMDHGRHrlVAz%2BeEtZEoswRiekHx3yPzMDA52LzbkH5RApilxZEOhSdxJnTgXbCFr&X-Amz-Signature=0d7db292edc048bdf55542f8393445d0363542e7d3e373511aaf3a14d0a0f74e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666KQHCHO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBfjEdqcReP4jfozJWE8csrK3u9sYmSRZ5j2cTKkfC3gIhAM1KLT3RXfEw2weua4p38e%2FXP5FTyvxpn1zLBO%2FrZeCZKv8DCB4QABoMNjM3NDIzMTgzODA1Igz1VSLwKX21rT8Cz5wq3AP2vwgTZJH8bkTNjYJVguppHOloC2id%2FzfS9E%2FQVcNRLxLYUV8OgejW1eTk8zlaYdUASvFQXrilVvr2bAK802RWYp1gISbnvEj3VvkkeOqpuTQFCCfmHqhktIkpSC9Z77qR1q%2Bkpoe9gqyDPcER1oi4wz715O1jKWhNPghnHw3pL%2BKUVK3QAbDKErW392KuL8imwbJKqsui94yv6LFpbpyC3dmInMnelWNYIWStFIwi06XWFRxEDVP%2BiBjx2CaRHecUfR5pSYTAxLw7uE72wcEJpnHtdMmrNGJXvluRzXA3cbeD9Uo1neKvkXkCQJzDZsv4qJInJyT1LvgfE8GpLMUfhP9OPGjdYheGz8huBmQEs1oPq3sRHt5Y1JFTgrUXnDGff%2BRAX9qZgOjLPgOr8yAp6L001XEWylLcwXylBbnn8KCnk9nqbGFFzjO%2BrDhHunykGUXfqqP0NP1sbPJ8jZlZ%2FsSKiyCnkaFdocKNztYugOpp20I3JYKq2D7hcUpEkjm8WqvxePWFah7sqIaXUDLvksSXuazzFVGMjL%2BRXEMbYm05BIyx%2FQhBR8fLpF4hD7yX9DD%2BfufLxoi0jQWUwN4kk7bFpxtkuu4B6cJpfJXlDqdH7%2BpRmEzQ9IG6jjD0gLrEBjqkASPZoZCI0hGWwwH0wXOy%2Bc4LXDzxZ1DNRXBr%2BHt%2FQmexanv%2FlNu6sZ9KhQWqPQ%2BLjmyfeD7lPWqF3I2y%2FEU%2FqLCzngT905jO%2FNQD%2FAg4bn2p8ciKi%2BB%2F9HBTBspVD9coR3MxR9e5fK%2FBAZF1WAPYALw8QZj5TjjnyTAJ%2FvfEUE%2FFK6JOouHL8HaDSZlE1H741inbs%2BFvk2k3OmOyLOyoUq801YgW&X-Amz-Signature=481ba499457f88f7cbdb1057532742e47b98f52ffa06894aaff22560c82d4ca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJPBJGHL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmB0IQQGnzwVoEWNn4HWZ9gD%2B8JJpPaf51GsVAChPNnAiB64SOPzS0GfFJzO%2BR6j10k8tIC2NMohRFUUx6Q%2BxVcHir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMBFezj7x1iVBWmDj3KtwDrqtZPTT3qexrku12f%2BW2Qxqrb3jqiddJmRzDYjiL6W7qLxvhr8dQRACl4wDAvDmWt8IBMB5CDr0p%2F2RtkLqbV2K5WieXvIsmryVU6D%2FerzKILgi6F9BOz9P%2Bic7mDP17qe%2FQ1yoILaRZn25i0tdkyKuVKtuVQOTyNfTLQuwqxmAHaT%2Bb3QGqPb%2BmoiuIw4rXOLIwMvG8tVvGvfgdSt2oEKnm%2FNE4CuCrTXQCOzcCub%2FhsVyu%2FfiukO00hT3iEtCR1NtJ96rsf%2BQ985SjH3uFeaNkgXUMm9qxiXYV4cmrXYWKzbeaD6z6OOjarFul99viRo1%2FE0PBlxQN6oo7ptXhHMrpxuPnjV1kvdPYz3OT%2FJIYTakTA%2FWUYkbIodRlE0mh6u%2FAS76efTlN1oraNi4JLb2vRPcfD7l7VPAFcWcf5tvQpChIltgbjoOjATctEGXxne1aUuISD8Tnj8A4Rm7TqEixt8jd8uvKy%2BKxaa%2BY0zmjnH6o6CaKRejG%2Bbb23vETghtcLso2pdMGWpf%2B8MgxBRzZWu0Ki4Ol0Xn457f2KfPYmI6nh8qDdcTLhiW%2FTDs35w8AZjahQDccJIhGh2l04gZ%2F577h6cPXvyINwaUdUEC2wpJeAbxqd0pDDewwrYC6xAY6pgEQLRFd292IQooLO867hBoI1IaEHpKySP39964PNifuVe%2B5O%2F12QrLD5w7Sf%2FS2Deboz7EXKQLzIFozvtw7PXFtyHnlCeDA9kp9NPIjQnGGEFToswJT0heVMBUTChSezscbyCa%2BaUUOxRNudb5y9iOlseF5uTJiUMDHGRHrlVAz%2BeEtZEoswRiekHx3yPzMDA52LzbkH5RApilxZEOhSdxJnTgXbCFr&X-Amz-Signature=f35c6e4f5757655660ebc982c56e1dad578d83225a9a4f8b8089c91430fd5202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUKIKBPJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBS%2FaWf4x4dGSKEpYZ2aoHLYQ4DkfuzLNjlgS6bzlyE0AiAz7BTuka6rpU1jebOeyxbtWTmvfksNBlgjWwch%2BLYKWir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM%2FDYFMS6wFzaf8fXvKtwDo7rfmmepUgopGIHDPH8qaItQlBqS8tVZLjrvcUvsbBtSNzLAbm4ybeSaGWgUeV6LOe6lHO%2FGth1m2RgWLmnZBXa6AhxZzMxfwdfxdn1wByJ701K%2BT%2FNdgNM9rrJgnNNE4YbPaOd0N4vakfCDrkGt8UYLx58hIkxMT32EbKs8z5KOb0dvk%2B7w5ZLDFq4XOCIXXD4Hcy7Hjy4GSc%2B%2BnQHh2zfkFjUDuNOpZJR4VN0JiFYqnB3Jgy9EcCTjhIEq7SofQGRlzr8PlrFGGahLUdsCNzOytKwA1XIYAkK2bn2qa%2FQO0OoycM3p6vWqUwNBMKsqyxRl4nsq5Ml3HrmfIOpKHNz%2BVOrcRQuexiQByb1ebmy7fm%2F4miduiXYRlfvHaXM%2BefnEEwAtSRtryiD9ByXvh0i%2BAfCwWX3I6Q%2FB%2B030kq%2B0DGgMTsGC2uFO6NxiUgAar%2BkZIbL6IAV2x0pBa9BzyqMA1RuE3z4ijufIvkzgGKMzRCuccplQvBS3zcyCK8sDrYTwOwqPFl8o1DpNlZajpQk3MsO4PdWypP4Viv89xll2s%2F06k5heyH%2F2Q6skGWb4ih1gKLB37y8mw%2FnrUOGqDqeY2EqaL26PoXvnnniF%2F2jfGbySna4yX8UYu3ow2YC6xAY6pgHJIAoc%2Bpu8DyN4R358J9mVpoZ2HvnQqFdDfKTEbCdfNBU3pCnhS2UfexdKT7WUAnBWzhhOSi5L%2B%2FM5OevAbDdistF32F6tAtRCj7kSbkt%2BS1EjfzUq9pFgKb5o66QzhbvkuEDedl55xHdD4G%2BSJlyuRBQb%2F2sNauE0Draz8tudQm4oJliCDse0BLYH5KhJf4T5EzYTIKpXfzXlpdxqeHyY6uwz0iYY&X-Amz-Signature=58a4a2c5f6d2f3049166fa8b5563da52fb42be46ddeccc0a33142e703d9d1702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QOTMUTR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjXjD%2FdLpeua92gh426gZChsLZwUWohLDVtcqY%2BmHHzAIhAMve%2BNRX1z0zWwWGZmuV1rBCIWCma7TbFwrm8btiu7Y5Kv8DCB4QABoMNjM3NDIzMTgzODA1IgyHXMFuGe5mrzqQ0p0q3AOT6Iq%2F1u8Elk65yrsotpPD4mlRUCT1nTXXDhRwjEzZBqUXQPAue5qm%2BbgChmR3X8PtSErXudQzpeiN62G2LnpOzjFwuezFTixvOdQ1arUcuy%2BflHdlmNl7pPhIS4SUxMEmuB43THnHqEaC4vnrSQy2lxiUNfl2LgaVPsnniso4IhzW2f9b5G%2BEuOKqSXAU%2B6FNMsm98zIr5P0FhLZDz%2FEzvZNfCpwNSgzUE8XuGCLEBdCY%2Bk%2FOeMDbjUxrV3mBBdURAFhD7Wuv9uacP%2FzDZEnf6%2FVWxTGj8gTxFmEfZa1LbruNCCL1k%2BLCI29BjUnJCjGOjSGD81rzm2uTkiMT8c8zXkvYANsvqbuk31QsjTvOan6iqlQTciR2usRhWsQdnSecPJ%2FncoRD858Tivs4HhgrwxSdXydEgYtINLU548dNWKnIy8r8pOgrv0wioEdC4fMBXBhYCXNnSV%2BWGHIKESZhU1HOIQA5eoSLRwdxwJbQYfWoi2LRC%2FHuF9e4wYlKLrRs9IJEvSQrZxAvFuTe1YIyfFUJXH3ljOyiCAtYpi%2FnLnizlL8iz84XOxX%2FBJVlPeII7ParL9UbgGiwZMftpfp2NNCSHx6X4Du3RByzEUOJtRdnkq0GQ9mRaMhfGjCvgLrEBjqkAR2HzX8V71F0yprfJLtw4Xfb6Op3PahTyeqq3ysNo0%2FHuzV3EuGjIuk%2B4tgR%2BzgN46mCnFzIKrB9jZIn3trfKLUCcsOF%2FclYQHTSNrigOMionMZn1gAs3Ed%2BLoKh%2B1uTIGbM0iJp3zSGhNk9zg2L8PKBOHwpmaTryo5KBjSiNIaoNXEYDjzPvLwHvA0B2XB%2B%2F32Dd2KDoyFmNbfuZKB5pAYhwofi&X-Amz-Signature=6794badb5e4e0556104f83272a57b9b7dd025df9ecd2b1014a98e1fdff63806c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OPGFW7T%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEBS1NjNX5XEMnX%2Fjr7fqS4BIeFh0gs%2BWHx3jdskTojwIgMK2J2Vmmkv1obov%2FgBEdbOY3shJItw0UPbM9RNFwWrUq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDDGFGcZKdv4YejQnNSrcAxHxeSj%2BYreDOYJVnX0vvSvXd0cPHegTS9h4iaM3%2ByMR06TAEXFp2L9gcUv%2FgLp03j2gdMFmTe8l95nI0IUeR%2FtDBxLS7vj15rx2ueaSvUN7uK%2Fa5mr08iI3wjY5brM7fqBI%2FAPPR%2FFZoVyMAmYSo6OzfB6JhpqT%2FHIIQUYkuyaWcw8txuzgHX1n03AAbJ7FZ7DrLOKTRv7g8PbloJ%2BpEAQzKCo2viOI4WoHWR4I%2FSLCVmKIhHXxFmaj%2FG2LwO6y6Tflel3ge16SSpNsdr2hsSE%2FEgAIDAQZwjGEJebDw7nUCVZ3Mm9hrmOx1HG%2B5K%2BxvcwxiXimpOMkdTASV%2Fl1hzAlFjenSOKLk2%2FfUOEzMIiM9uAtrs8enqEc4sKP9%2BE2ZfptEYtiPGYrf%2BmokuVOEhpj3CP6gOU6jGWvkVwAHwruZBUKHWZvKraRdxRJoUeCfLrC2H%2BUfXEV1kaZDcAwnk7DzcwLbjkpcaRgnQOUIZ1Y4WeU5QncdQ77LO8TYqIkGY0rlhM2kuP1iLa5IsSUYMO3wVQxPpAsL71RLsMIfda82b1fqTHi6YFUWlMm0yGGm6yxSqD38%2FfbkABnNHMETqV2%2FTOtx4nZX2vMeRgcJh65vYhQfIJ2umJ1h3U%2FMKqBusQGOqUBKxyHjdWB%2FAoIfO2wkSDdchEGYlHdgMR2Z0%2FRmiP36uR78MQO3Fm%2F9BH3digtu6JUCDS3b6wM11mrVgzaiOHDvTOV7Lw7k5QPq1s1K3EpSxO8%2BefDhMzMAM2mp0cA%2BLbxTGH1aHHG5iIerwIWEFQBmzUoGQkWqgTT6CynDiPCeCxmOFAJDN8MoAok88jBgneJiq6EJnvMp%2FKZPPUz5UHp4TDhywfc&X-Amz-Signature=7620cfc98e0820d31a4ba6f3f1cdadcb3238cc5cc0b2f43d88488801061a5190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MCKNZ3D%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmB9TYfz5YJyfQIqiFMxYoagmtCJv0gBKhk0ufHvdaWgIgSbkzIh3jlGcq2jFiT90Smw2VBkm3NvSP76aIzA9B3QAq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDO8XBYSTPOjpijO%2B1ircA1a1jTmq%2BDtGLCYf0lM%2FT%2F7SFqcIkU9XNRpOxwgidmbCUeaeAP1zbMdq5buym0CADvNxNUj%2BkSifLG9YZluteRS1ttekIS8Rb7Dis6p10Ma69k%2BqTHGUmGNhQDfsOIGsZVR6gpw2ZU5YYjlVg4HW40VF57iaQJt2W1FiMPFb2blVl4hk2wPQKZeuAmtwhMqzZf0Ki4fkj%2BA9%2B4rStfvYIwroTE7P8fwsLhO8bqPqfcxTMt6qHCeephT6MHjstPUWmkg0dQNQCs0DtA%2F0XsSV6mBZ5BHfgDrmr4vfF9ju%2BttzS4CnUForUbH%2BKtWG2GSOyAI%2FAp3OBJWgHRaxVb6xCPe1sL946b8jpP19ZmNlUs%2BzX8PjH65MyRF8JzRVu0nFEE8QnJ2OAsr4%2FlVZlKF%2Bxi6QmkTGH1USbYViwSAR75w3e6cC4BGbTwm5cHKFeG%2BFC5JT55aY9u5jHMLAAfBew7P3zpTnXUzeblS7%2BnfcbSKGma85sA1xRy%2FGUOG1Te%2Bdfvq%2F2bzXKN9CggjYgM68eHG8hN7LVpOb%2Fl0V4bfciNGQMwCWGZ6XtX%2BpkaPv%2FL4HSCCpFNB5jxttgdmnsEcu4Y9iAClkQlOVpKjHZlLArJukQtN%2FxcmWXfPmFwA7ML2AusQGOqUBKNnB4JPtbpX6Gp0wR5E%2FTbV3myUA4frkh7BmaOR9NDtVf0wINZPZaVp5n6x2yJabuZmAktu04Z%2B62At3qCD6BLwUwlAUg6IevgD1lTXE73RJIM2E7sFyY2aoUJnbARFdbUmRVka2vC0ngVnjY5x8fckJiMgQJiFFDiTXKZ0pSE0bfFzESDhT7b9ODoNb5EsBt%2BkBzBidWSa0eJLbb2eqhOewgaff&X-Amz-Signature=0e1ef94fa4c12595ca777fbfeb5eb2457bab2de3067d7fb91d721ce027192325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZAJ5F6L%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT0yprEP%2BL8reQdfecm0ChHaWCDrf710ZenYEHrbq4SAIhAPe6IgFeBAVP7aZiI65fBHnEuJEAzQEHp8VxmR6gWqR1Kv8DCB4QABoMNjM3NDIzMTgzODA1IgwOx%2F4t8hE8WaHW5ZEq3AMz0Jy0qWnZ0fW41YHYslBOYlZ4L1RevYD1RxwztpbRdFcVYGcxp%2FoWDiNCFyOmOFI8lKKw8uPXRh0m9C1b6pm95Aa%2FO9FNpfyjjXrhMH54oLTWJiKox8BmTUySmGci%2FbbcKLUxdd%2B29rsfXjFprvQ1CGFLWL2rP3VylLCVnNTSlT54XYClqokzK%2Be7kl1EC%2F2Ohmxm6zSbYwyBr39%2FpAV9%2B7clxKZX%2FBdj58kemaEYLdYbLpVLKRBDtAt488vC2dz4m5jm5in4s8V2oEdgqxpw1GhfMh2AUBaLhFE7GzOwj2CX0QwXG8JNJ4F7LIr7ndt4L3H9Nf%2FIHVBQ8fqwjfUYfWtwSyilH7Cw%2F2PsVfZTd97CLEzRAHzyD%2FsLnnX3xvjmgMGYb2%2F3Iv2QcoZteHce4gjI95L%2BQKxpYTOw%2FQT%2F77hvRLuManwwTzxFRKrk77kHctykCtgmU%2F2EWfaTwwf5ZV3nDKllv4GX6gftDp9jDcbgA1QbGBv%2FigymCSZs7P3Fi%2F5WTStU0xzYfEwbQ3D8J%2FwVZSMch8vyeo8H46fltS0CVEFYkeAW9CcX1%2BRyZeSGfhFCx6iqGajuCw%2FM0fhd3AbEMxrwVB4%2BdKDZ8RGJ%2Bp2DnFrPi5HeOPM28jCbgbrEBjqkAQLDFfveRN7CHp1YcFcw7brgvIjomENCGWvXHQBP%2BWiNze6wZrxcj31xfx5aMVmR3YD3sJAajNGCyxDJduVmwSop%2BdDFpP657Gh9VWf8%2B48KKWeuxuJgbLF8c7E%2BE%2FuC5%2B%2Ft3bWRjR8dF0Uj1qnRnDHsncdqReVz1tvoKvQalfhUDJxdke7XqiljqycZCm84gCm0vX6PcoFD8tPFFyOmRQK611sg&X-Amz-Signature=87a8739e667e4260a72ff1230e50c36cda7ae9f1423cf6e1a538d763b7d69097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJPBJGHL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmB0IQQGnzwVoEWNn4HWZ9gD%2B8JJpPaf51GsVAChPNnAiB64SOPzS0GfFJzO%2BR6j10k8tIC2NMohRFUUx6Q%2BxVcHir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMBFezj7x1iVBWmDj3KtwDrqtZPTT3qexrku12f%2BW2Qxqrb3jqiddJmRzDYjiL6W7qLxvhr8dQRACl4wDAvDmWt8IBMB5CDr0p%2F2RtkLqbV2K5WieXvIsmryVU6D%2FerzKILgi6F9BOz9P%2Bic7mDP17qe%2FQ1yoILaRZn25i0tdkyKuVKtuVQOTyNfTLQuwqxmAHaT%2Bb3QGqPb%2BmoiuIw4rXOLIwMvG8tVvGvfgdSt2oEKnm%2FNE4CuCrTXQCOzcCub%2FhsVyu%2FfiukO00hT3iEtCR1NtJ96rsf%2BQ985SjH3uFeaNkgXUMm9qxiXYV4cmrXYWKzbeaD6z6OOjarFul99viRo1%2FE0PBlxQN6oo7ptXhHMrpxuPnjV1kvdPYz3OT%2FJIYTakTA%2FWUYkbIodRlE0mh6u%2FAS76efTlN1oraNi4JLb2vRPcfD7l7VPAFcWcf5tvQpChIltgbjoOjATctEGXxne1aUuISD8Tnj8A4Rm7TqEixt8jd8uvKy%2BKxaa%2BY0zmjnH6o6CaKRejG%2Bbb23vETghtcLso2pdMGWpf%2B8MgxBRzZWu0Ki4Ol0Xn457f2KfPYmI6nh8qDdcTLhiW%2FTDs35w8AZjahQDccJIhGh2l04gZ%2F577h6cPXvyINwaUdUEC2wpJeAbxqd0pDDewwrYC6xAY6pgEQLRFd292IQooLO867hBoI1IaEHpKySP39964PNifuVe%2B5O%2F12QrLD5w7Sf%2FS2Deboz7EXKQLzIFozvtw7PXFtyHnlCeDA9kp9NPIjQnGGEFToswJT0heVMBUTChSezscbyCa%2BaUUOxRNudb5y9iOlseF5uTJiUMDHGRHrlVAz%2BeEtZEoswRiekHx3yPzMDA52LzbkH5RApilxZEOhSdxJnTgXbCFr&X-Amz-Signature=5e49958abd6d6012eb54ecc6afa3fd4efec73478aca9bd952dbc15fb4855eb94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJPBJGHL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmB0IQQGnzwVoEWNn4HWZ9gD%2B8JJpPaf51GsVAChPNnAiB64SOPzS0GfFJzO%2BR6j10k8tIC2NMohRFUUx6Q%2BxVcHir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMBFezj7x1iVBWmDj3KtwDrqtZPTT3qexrku12f%2BW2Qxqrb3jqiddJmRzDYjiL6W7qLxvhr8dQRACl4wDAvDmWt8IBMB5CDr0p%2F2RtkLqbV2K5WieXvIsmryVU6D%2FerzKILgi6F9BOz9P%2Bic7mDP17qe%2FQ1yoILaRZn25i0tdkyKuVKtuVQOTyNfTLQuwqxmAHaT%2Bb3QGqPb%2BmoiuIw4rXOLIwMvG8tVvGvfgdSt2oEKnm%2FNE4CuCrTXQCOzcCub%2FhsVyu%2FfiukO00hT3iEtCR1NtJ96rsf%2BQ985SjH3uFeaNkgXUMm9qxiXYV4cmrXYWKzbeaD6z6OOjarFul99viRo1%2FE0PBlxQN6oo7ptXhHMrpxuPnjV1kvdPYz3OT%2FJIYTakTA%2FWUYkbIodRlE0mh6u%2FAS76efTlN1oraNi4JLb2vRPcfD7l7VPAFcWcf5tvQpChIltgbjoOjATctEGXxne1aUuISD8Tnj8A4Rm7TqEixt8jd8uvKy%2BKxaa%2BY0zmjnH6o6CaKRejG%2Bbb23vETghtcLso2pdMGWpf%2B8MgxBRzZWu0Ki4Ol0Xn457f2KfPYmI6nh8qDdcTLhiW%2FTDs35w8AZjahQDccJIhGh2l04gZ%2F577h6cPXvyINwaUdUEC2wpJeAbxqd0pDDewwrYC6xAY6pgEQLRFd292IQooLO867hBoI1IaEHpKySP39964PNifuVe%2B5O%2F12QrLD5w7Sf%2FS2Deboz7EXKQLzIFozvtw7PXFtyHnlCeDA9kp9NPIjQnGGEFToswJT0heVMBUTChSezscbyCa%2BaUUOxRNudb5y9iOlseF5uTJiUMDHGRHrlVAz%2BeEtZEoswRiekHx3yPzMDA52LzbkH5RApilxZEOhSdxJnTgXbCFr&X-Amz-Signature=6d7d69db485393b7b6f40f3ee897b84d5ffe715c58136f0c27b9ec383eccfafb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STPF3L2F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8KYPbxec4qXJBYkNMj7bFAJ3EmeKlGKPVzSAMz%2Bz1qAiEA9oO3j5Uypo7pYtcOvzP92KJ4s5SoiuymCdNsy6bgFjsq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJ7Q%2BNwmVTHFFpyOgyrcAwciEA%2FfVQyEEuDs7fLXcV0H3eacoShS98UCFNNbACbqixs4LRWnN%2FrzXZoIRdcu4TDIkimq4L3rtsohH1XqM7gZ1G86eatgDHeJ0EO9DKpjnzp%2Fj073sfSIDjg%2Fo%2BMwLznQwh1HkVuI5I2soTzS7oqwmdTKhGCjKwNe4DKNZ61ada7hk%2ByioeKOrWkteB6wJrcN3frBQVMXUXF8H1dxl3s2FoHNlB%2FWMEZ%2B2P7Hu%2BNaFcGH67zHth8ofBj6x1WPFdNKJtC57d4%2BM3mE3o5QNEVbi6eKr%2BY4nyvliWewen4xndeWkZL8YWRbwf0jOSIYSD6uxwb9TESUoGgEqBnjyrhJpjR400flRV35oZIqHrn5gvID6Lp2%2ByU9w3xMKSwuxdZWY6XcITrk6i0epwY1jveQgOMiVC0L3grkWilj8GjkZyXEB%2B2kKXSK%2B1x5IDNuzqPpc6w2QfmnqsQ7%2BV8zmrUDiYryK3NPIDuOnquQ36Fikfbxu5fDQnt%2BQ7XHbuZzihNiJi2oIFa55Br5ZhS%2F%2BG8fuqxg2qZuHJsurs6vCsE3bsmQvkA6bdvHrt5tuWPs2KKMy08cdqTxJV7mOyuKPG2zqFKvK87fTTRA0Sr%2FV7%2F%2F0NTeuR2VuLkGNXooMLWAusQGOqUBp3rnjGAaQ%2FJCP%2FsAsBEiPzniPiJEdMEZX6lk1J0Q07FR8QMucTXJdxgOL0I9oCDkJqtuGnU%2F7Ju%2F2gizU4AAhtlkZiWxdADzMy%2BZ75B1%2FUEMKp0syfZFcJnxhQIRbVZ1kL1DWJWhvqVTy4QryOXXIUDgXn5gqhRGwIDqY5cDf%2B9k35Ok34i0h%2BpWpzI%2BVzdIqcTn%2BspP3x8zrSWisJPLA6%2B05Uye&X-Amz-Signature=eda6780ec1294b0ebefea42a67d62fa18fb28a1903e1a263d6a9651d7f14c0f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STPF3L2F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8KYPbxec4qXJBYkNMj7bFAJ3EmeKlGKPVzSAMz%2Bz1qAiEA9oO3j5Uypo7pYtcOvzP92KJ4s5SoiuymCdNsy6bgFjsq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJ7Q%2BNwmVTHFFpyOgyrcAwciEA%2FfVQyEEuDs7fLXcV0H3eacoShS98UCFNNbACbqixs4LRWnN%2FrzXZoIRdcu4TDIkimq4L3rtsohH1XqM7gZ1G86eatgDHeJ0EO9DKpjnzp%2Fj073sfSIDjg%2Fo%2BMwLznQwh1HkVuI5I2soTzS7oqwmdTKhGCjKwNe4DKNZ61ada7hk%2ByioeKOrWkteB6wJrcN3frBQVMXUXF8H1dxl3s2FoHNlB%2FWMEZ%2B2P7Hu%2BNaFcGH67zHth8ofBj6x1WPFdNKJtC57d4%2BM3mE3o5QNEVbi6eKr%2BY4nyvliWewen4xndeWkZL8YWRbwf0jOSIYSD6uxwb9TESUoGgEqBnjyrhJpjR400flRV35oZIqHrn5gvID6Lp2%2ByU9w3xMKSwuxdZWY6XcITrk6i0epwY1jveQgOMiVC0L3grkWilj8GjkZyXEB%2B2kKXSK%2B1x5IDNuzqPpc6w2QfmnqsQ7%2BV8zmrUDiYryK3NPIDuOnquQ36Fikfbxu5fDQnt%2BQ7XHbuZzihNiJi2oIFa55Br5ZhS%2F%2BG8fuqxg2qZuHJsurs6vCsE3bsmQvkA6bdvHrt5tuWPs2KKMy08cdqTxJV7mOyuKPG2zqFKvK87fTTRA0Sr%2FV7%2F%2F0NTeuR2VuLkGNXooMLWAusQGOqUBp3rnjGAaQ%2FJCP%2FsAsBEiPzniPiJEdMEZX6lk1J0Q07FR8QMucTXJdxgOL0I9oCDkJqtuGnU%2F7Ju%2F2gizU4AAhtlkZiWxdADzMy%2BZ75B1%2FUEMKp0syfZFcJnxhQIRbVZ1kL1DWJWhvqVTy4QryOXXIUDgXn5gqhRGwIDqY5cDf%2B9k35Ok34i0h%2BpWpzI%2BVzdIqcTn%2BspP3x8zrSWisJPLA6%2B05Uye&X-Amz-Signature=3c3105289cfc32532eaf1149bce1639c78d6d60dd113b1989c8d4b5c703231fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STPF3L2F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8KYPbxec4qXJBYkNMj7bFAJ3EmeKlGKPVzSAMz%2Bz1qAiEA9oO3j5Uypo7pYtcOvzP92KJ4s5SoiuymCdNsy6bgFjsq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJ7Q%2BNwmVTHFFpyOgyrcAwciEA%2FfVQyEEuDs7fLXcV0H3eacoShS98UCFNNbACbqixs4LRWnN%2FrzXZoIRdcu4TDIkimq4L3rtsohH1XqM7gZ1G86eatgDHeJ0EO9DKpjnzp%2Fj073sfSIDjg%2Fo%2BMwLznQwh1HkVuI5I2soTzS7oqwmdTKhGCjKwNe4DKNZ61ada7hk%2ByioeKOrWkteB6wJrcN3frBQVMXUXF8H1dxl3s2FoHNlB%2FWMEZ%2B2P7Hu%2BNaFcGH67zHth8ofBj6x1WPFdNKJtC57d4%2BM3mE3o5QNEVbi6eKr%2BY4nyvliWewen4xndeWkZL8YWRbwf0jOSIYSD6uxwb9TESUoGgEqBnjyrhJpjR400flRV35oZIqHrn5gvID6Lp2%2ByU9w3xMKSwuxdZWY6XcITrk6i0epwY1jveQgOMiVC0L3grkWilj8GjkZyXEB%2B2kKXSK%2B1x5IDNuzqPpc6w2QfmnqsQ7%2BV8zmrUDiYryK3NPIDuOnquQ36Fikfbxu5fDQnt%2BQ7XHbuZzihNiJi2oIFa55Br5ZhS%2F%2BG8fuqxg2qZuHJsurs6vCsE3bsmQvkA6bdvHrt5tuWPs2KKMy08cdqTxJV7mOyuKPG2zqFKvK87fTTRA0Sr%2FV7%2F%2F0NTeuR2VuLkGNXooMLWAusQGOqUBp3rnjGAaQ%2FJCP%2FsAsBEiPzniPiJEdMEZX6lk1J0Q07FR8QMucTXJdxgOL0I9oCDkJqtuGnU%2F7Ju%2F2gizU4AAhtlkZiWxdADzMy%2BZ75B1%2FUEMKp0syfZFcJnxhQIRbVZ1kL1DWJWhvqVTy4QryOXXIUDgXn5gqhRGwIDqY5cDf%2B9k35Ok34i0h%2BpWpzI%2BVzdIqcTn%2BspP3x8zrSWisJPLA6%2B05Uye&X-Amz-Signature=896da585084d5cc393e3f3e94e8819e98fa84f3ae374b13ec2e0812a753ba813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STPF3L2F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8KYPbxec4qXJBYkNMj7bFAJ3EmeKlGKPVzSAMz%2Bz1qAiEA9oO3j5Uypo7pYtcOvzP92KJ4s5SoiuymCdNsy6bgFjsq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJ7Q%2BNwmVTHFFpyOgyrcAwciEA%2FfVQyEEuDs7fLXcV0H3eacoShS98UCFNNbACbqixs4LRWnN%2FrzXZoIRdcu4TDIkimq4L3rtsohH1XqM7gZ1G86eatgDHeJ0EO9DKpjnzp%2Fj073sfSIDjg%2Fo%2BMwLznQwh1HkVuI5I2soTzS7oqwmdTKhGCjKwNe4DKNZ61ada7hk%2ByioeKOrWkteB6wJrcN3frBQVMXUXF8H1dxl3s2FoHNlB%2FWMEZ%2B2P7Hu%2BNaFcGH67zHth8ofBj6x1WPFdNKJtC57d4%2BM3mE3o5QNEVbi6eKr%2BY4nyvliWewen4xndeWkZL8YWRbwf0jOSIYSD6uxwb9TESUoGgEqBnjyrhJpjR400flRV35oZIqHrn5gvID6Lp2%2ByU9w3xMKSwuxdZWY6XcITrk6i0epwY1jveQgOMiVC0L3grkWilj8GjkZyXEB%2B2kKXSK%2B1x5IDNuzqPpc6w2QfmnqsQ7%2BV8zmrUDiYryK3NPIDuOnquQ36Fikfbxu5fDQnt%2BQ7XHbuZzihNiJi2oIFa55Br5ZhS%2F%2BG8fuqxg2qZuHJsurs6vCsE3bsmQvkA6bdvHrt5tuWPs2KKMy08cdqTxJV7mOyuKPG2zqFKvK87fTTRA0Sr%2FV7%2F%2F0NTeuR2VuLkGNXooMLWAusQGOqUBp3rnjGAaQ%2FJCP%2FsAsBEiPzniPiJEdMEZX6lk1J0Q07FR8QMucTXJdxgOL0I9oCDkJqtuGnU%2F7Ju%2F2gizU4AAhtlkZiWxdADzMy%2BZ75B1%2FUEMKp0syfZFcJnxhQIRbVZ1kL1DWJWhvqVTy4QryOXXIUDgXn5gqhRGwIDqY5cDf%2B9k35Ok34i0h%2BpWpzI%2BVzdIqcTn%2BspP3x8zrSWisJPLA6%2B05Uye&X-Amz-Signature=ac41e97b3fc51d20bb697f7596e1cbb78c63e9871dda129764b5f4b098399767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STPF3L2F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8KYPbxec4qXJBYkNMj7bFAJ3EmeKlGKPVzSAMz%2Bz1qAiEA9oO3j5Uypo7pYtcOvzP92KJ4s5SoiuymCdNsy6bgFjsq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJ7Q%2BNwmVTHFFpyOgyrcAwciEA%2FfVQyEEuDs7fLXcV0H3eacoShS98UCFNNbACbqixs4LRWnN%2FrzXZoIRdcu4TDIkimq4L3rtsohH1XqM7gZ1G86eatgDHeJ0EO9DKpjnzp%2Fj073sfSIDjg%2Fo%2BMwLznQwh1HkVuI5I2soTzS7oqwmdTKhGCjKwNe4DKNZ61ada7hk%2ByioeKOrWkteB6wJrcN3frBQVMXUXF8H1dxl3s2FoHNlB%2FWMEZ%2B2P7Hu%2BNaFcGH67zHth8ofBj6x1WPFdNKJtC57d4%2BM3mE3o5QNEVbi6eKr%2BY4nyvliWewen4xndeWkZL8YWRbwf0jOSIYSD6uxwb9TESUoGgEqBnjyrhJpjR400flRV35oZIqHrn5gvID6Lp2%2ByU9w3xMKSwuxdZWY6XcITrk6i0epwY1jveQgOMiVC0L3grkWilj8GjkZyXEB%2B2kKXSK%2B1x5IDNuzqPpc6w2QfmnqsQ7%2BV8zmrUDiYryK3NPIDuOnquQ36Fikfbxu5fDQnt%2BQ7XHbuZzihNiJi2oIFa55Br5ZhS%2F%2BG8fuqxg2qZuHJsurs6vCsE3bsmQvkA6bdvHrt5tuWPs2KKMy08cdqTxJV7mOyuKPG2zqFKvK87fTTRA0Sr%2FV7%2F%2F0NTeuR2VuLkGNXooMLWAusQGOqUBp3rnjGAaQ%2FJCP%2FsAsBEiPzniPiJEdMEZX6lk1J0Q07FR8QMucTXJdxgOL0I9oCDkJqtuGnU%2F7Ju%2F2gizU4AAhtlkZiWxdADzMy%2BZ75B1%2FUEMKp0syfZFcJnxhQIRbVZ1kL1DWJWhvqVTy4QryOXXIUDgXn5gqhRGwIDqY5cDf%2B9k35Ok34i0h%2BpWpzI%2BVzdIqcTn%2BspP3x8zrSWisJPLA6%2B05Uye&X-Amz-Signature=0ee5b71114f9bf4bdd072868e324dcee6b7c17dc29ce1afcaf9fba5aee37c7b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STPF3L2F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8KYPbxec4qXJBYkNMj7bFAJ3EmeKlGKPVzSAMz%2Bz1qAiEA9oO3j5Uypo7pYtcOvzP92KJ4s5SoiuymCdNsy6bgFjsq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJ7Q%2BNwmVTHFFpyOgyrcAwciEA%2FfVQyEEuDs7fLXcV0H3eacoShS98UCFNNbACbqixs4LRWnN%2FrzXZoIRdcu4TDIkimq4L3rtsohH1XqM7gZ1G86eatgDHeJ0EO9DKpjnzp%2Fj073sfSIDjg%2Fo%2BMwLznQwh1HkVuI5I2soTzS7oqwmdTKhGCjKwNe4DKNZ61ada7hk%2ByioeKOrWkteB6wJrcN3frBQVMXUXF8H1dxl3s2FoHNlB%2FWMEZ%2B2P7Hu%2BNaFcGH67zHth8ofBj6x1WPFdNKJtC57d4%2BM3mE3o5QNEVbi6eKr%2BY4nyvliWewen4xndeWkZL8YWRbwf0jOSIYSD6uxwb9TESUoGgEqBnjyrhJpjR400flRV35oZIqHrn5gvID6Lp2%2ByU9w3xMKSwuxdZWY6XcITrk6i0epwY1jveQgOMiVC0L3grkWilj8GjkZyXEB%2B2kKXSK%2B1x5IDNuzqPpc6w2QfmnqsQ7%2BV8zmrUDiYryK3NPIDuOnquQ36Fikfbxu5fDQnt%2BQ7XHbuZzihNiJi2oIFa55Br5ZhS%2F%2BG8fuqxg2qZuHJsurs6vCsE3bsmQvkA6bdvHrt5tuWPs2KKMy08cdqTxJV7mOyuKPG2zqFKvK87fTTRA0Sr%2FV7%2F%2F0NTeuR2VuLkGNXooMLWAusQGOqUBp3rnjGAaQ%2FJCP%2FsAsBEiPzniPiJEdMEZX6lk1J0Q07FR8QMucTXJdxgOL0I9oCDkJqtuGnU%2F7Ju%2F2gizU4AAhtlkZiWxdADzMy%2BZ75B1%2FUEMKp0syfZFcJnxhQIRbVZ1kL1DWJWhvqVTy4QryOXXIUDgXn5gqhRGwIDqY5cDf%2B9k35Ok34i0h%2BpWpzI%2BVzdIqcTn%2BspP3x8zrSWisJPLA6%2B05Uye&X-Amz-Signature=c8f2cc86e27444d9a2e7903ed15de8018a708aeb9ea813dfd310c0b6ffd5a705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STPF3L2F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8KYPbxec4qXJBYkNMj7bFAJ3EmeKlGKPVzSAMz%2Bz1qAiEA9oO3j5Uypo7pYtcOvzP92KJ4s5SoiuymCdNsy6bgFjsq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJ7Q%2BNwmVTHFFpyOgyrcAwciEA%2FfVQyEEuDs7fLXcV0H3eacoShS98UCFNNbACbqixs4LRWnN%2FrzXZoIRdcu4TDIkimq4L3rtsohH1XqM7gZ1G86eatgDHeJ0EO9DKpjnzp%2Fj073sfSIDjg%2Fo%2BMwLznQwh1HkVuI5I2soTzS7oqwmdTKhGCjKwNe4DKNZ61ada7hk%2ByioeKOrWkteB6wJrcN3frBQVMXUXF8H1dxl3s2FoHNlB%2FWMEZ%2B2P7Hu%2BNaFcGH67zHth8ofBj6x1WPFdNKJtC57d4%2BM3mE3o5QNEVbi6eKr%2BY4nyvliWewen4xndeWkZL8YWRbwf0jOSIYSD6uxwb9TESUoGgEqBnjyrhJpjR400flRV35oZIqHrn5gvID6Lp2%2ByU9w3xMKSwuxdZWY6XcITrk6i0epwY1jveQgOMiVC0L3grkWilj8GjkZyXEB%2B2kKXSK%2B1x5IDNuzqPpc6w2QfmnqsQ7%2BV8zmrUDiYryK3NPIDuOnquQ36Fikfbxu5fDQnt%2BQ7XHbuZzihNiJi2oIFa55Br5ZhS%2F%2BG8fuqxg2qZuHJsurs6vCsE3bsmQvkA6bdvHrt5tuWPs2KKMy08cdqTxJV7mOyuKPG2zqFKvK87fTTRA0Sr%2FV7%2F%2F0NTeuR2VuLkGNXooMLWAusQGOqUBp3rnjGAaQ%2FJCP%2FsAsBEiPzniPiJEdMEZX6lk1J0Q07FR8QMucTXJdxgOL0I9oCDkJqtuGnU%2F7Ju%2F2gizU4AAhtlkZiWxdADzMy%2BZ75B1%2FUEMKp0syfZFcJnxhQIRbVZ1kL1DWJWhvqVTy4QryOXXIUDgXn5gqhRGwIDqY5cDf%2B9k35Ok34i0h%2BpWpzI%2BVzdIqcTn%2BspP3x8zrSWisJPLA6%2B05Uye&X-Amz-Signature=896da585084d5cc393e3f3e94e8819e98fa84f3ae374b13ec2e0812a753ba813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STPF3L2F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8KYPbxec4qXJBYkNMj7bFAJ3EmeKlGKPVzSAMz%2Bz1qAiEA9oO3j5Uypo7pYtcOvzP92KJ4s5SoiuymCdNsy6bgFjsq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJ7Q%2BNwmVTHFFpyOgyrcAwciEA%2FfVQyEEuDs7fLXcV0H3eacoShS98UCFNNbACbqixs4LRWnN%2FrzXZoIRdcu4TDIkimq4L3rtsohH1XqM7gZ1G86eatgDHeJ0EO9DKpjnzp%2Fj073sfSIDjg%2Fo%2BMwLznQwh1HkVuI5I2soTzS7oqwmdTKhGCjKwNe4DKNZ61ada7hk%2ByioeKOrWkteB6wJrcN3frBQVMXUXF8H1dxl3s2FoHNlB%2FWMEZ%2B2P7Hu%2BNaFcGH67zHth8ofBj6x1WPFdNKJtC57d4%2BM3mE3o5QNEVbi6eKr%2BY4nyvliWewen4xndeWkZL8YWRbwf0jOSIYSD6uxwb9TESUoGgEqBnjyrhJpjR400flRV35oZIqHrn5gvID6Lp2%2ByU9w3xMKSwuxdZWY6XcITrk6i0epwY1jveQgOMiVC0L3grkWilj8GjkZyXEB%2B2kKXSK%2B1x5IDNuzqPpc6w2QfmnqsQ7%2BV8zmrUDiYryK3NPIDuOnquQ36Fikfbxu5fDQnt%2BQ7XHbuZzihNiJi2oIFa55Br5ZhS%2F%2BG8fuqxg2qZuHJsurs6vCsE3bsmQvkA6bdvHrt5tuWPs2KKMy08cdqTxJV7mOyuKPG2zqFKvK87fTTRA0Sr%2FV7%2F%2F0NTeuR2VuLkGNXooMLWAusQGOqUBp3rnjGAaQ%2FJCP%2FsAsBEiPzniPiJEdMEZX6lk1J0Q07FR8QMucTXJdxgOL0I9oCDkJqtuGnU%2F7Ju%2F2gizU4AAhtlkZiWxdADzMy%2BZ75B1%2FUEMKp0syfZFcJnxhQIRbVZ1kL1DWJWhvqVTy4QryOXXIUDgXn5gqhRGwIDqY5cDf%2B9k35Ok34i0h%2BpWpzI%2BVzdIqcTn%2BspP3x8zrSWisJPLA6%2B05Uye&X-Amz-Signature=49d3d334c26e6911aeb339f6ee67833f4017c747115d1707b769f22a960f6fd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STPF3L2F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8KYPbxec4qXJBYkNMj7bFAJ3EmeKlGKPVzSAMz%2Bz1qAiEA9oO3j5Uypo7pYtcOvzP92KJ4s5SoiuymCdNsy6bgFjsq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJ7Q%2BNwmVTHFFpyOgyrcAwciEA%2FfVQyEEuDs7fLXcV0H3eacoShS98UCFNNbACbqixs4LRWnN%2FrzXZoIRdcu4TDIkimq4L3rtsohH1XqM7gZ1G86eatgDHeJ0EO9DKpjnzp%2Fj073sfSIDjg%2Fo%2BMwLznQwh1HkVuI5I2soTzS7oqwmdTKhGCjKwNe4DKNZ61ada7hk%2ByioeKOrWkteB6wJrcN3frBQVMXUXF8H1dxl3s2FoHNlB%2FWMEZ%2B2P7Hu%2BNaFcGH67zHth8ofBj6x1WPFdNKJtC57d4%2BM3mE3o5QNEVbi6eKr%2BY4nyvliWewen4xndeWkZL8YWRbwf0jOSIYSD6uxwb9TESUoGgEqBnjyrhJpjR400flRV35oZIqHrn5gvID6Lp2%2ByU9w3xMKSwuxdZWY6XcITrk6i0epwY1jveQgOMiVC0L3grkWilj8GjkZyXEB%2B2kKXSK%2B1x5IDNuzqPpc6w2QfmnqsQ7%2BV8zmrUDiYryK3NPIDuOnquQ36Fikfbxu5fDQnt%2BQ7XHbuZzihNiJi2oIFa55Br5ZhS%2F%2BG8fuqxg2qZuHJsurs6vCsE3bsmQvkA6bdvHrt5tuWPs2KKMy08cdqTxJV7mOyuKPG2zqFKvK87fTTRA0Sr%2FV7%2F%2F0NTeuR2VuLkGNXooMLWAusQGOqUBp3rnjGAaQ%2FJCP%2FsAsBEiPzniPiJEdMEZX6lk1J0Q07FR8QMucTXJdxgOL0I9oCDkJqtuGnU%2F7Ju%2F2gizU4AAhtlkZiWxdADzMy%2BZ75B1%2FUEMKp0syfZFcJnxhQIRbVZ1kL1DWJWhvqVTy4QryOXXIUDgXn5gqhRGwIDqY5cDf%2B9k35Ok34i0h%2BpWpzI%2BVzdIqcTn%2BspP3x8zrSWisJPLA6%2B05Uye&X-Amz-Signature=1eac591d2bac6ea3566ebfc9e708c3bc98f499a9c39a3caba6967aa1b826e46c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STPF3L2F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8KYPbxec4qXJBYkNMj7bFAJ3EmeKlGKPVzSAMz%2Bz1qAiEA9oO3j5Uypo7pYtcOvzP92KJ4s5SoiuymCdNsy6bgFjsq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJ7Q%2BNwmVTHFFpyOgyrcAwciEA%2FfVQyEEuDs7fLXcV0H3eacoShS98UCFNNbACbqixs4LRWnN%2FrzXZoIRdcu4TDIkimq4L3rtsohH1XqM7gZ1G86eatgDHeJ0EO9DKpjnzp%2Fj073sfSIDjg%2Fo%2BMwLznQwh1HkVuI5I2soTzS7oqwmdTKhGCjKwNe4DKNZ61ada7hk%2ByioeKOrWkteB6wJrcN3frBQVMXUXF8H1dxl3s2FoHNlB%2FWMEZ%2B2P7Hu%2BNaFcGH67zHth8ofBj6x1WPFdNKJtC57d4%2BM3mE3o5QNEVbi6eKr%2BY4nyvliWewen4xndeWkZL8YWRbwf0jOSIYSD6uxwb9TESUoGgEqBnjyrhJpjR400flRV35oZIqHrn5gvID6Lp2%2ByU9w3xMKSwuxdZWY6XcITrk6i0epwY1jveQgOMiVC0L3grkWilj8GjkZyXEB%2B2kKXSK%2B1x5IDNuzqPpc6w2QfmnqsQ7%2BV8zmrUDiYryK3NPIDuOnquQ36Fikfbxu5fDQnt%2BQ7XHbuZzihNiJi2oIFa55Br5ZhS%2F%2BG8fuqxg2qZuHJsurs6vCsE3bsmQvkA6bdvHrt5tuWPs2KKMy08cdqTxJV7mOyuKPG2zqFKvK87fTTRA0Sr%2FV7%2F%2F0NTeuR2VuLkGNXooMLWAusQGOqUBp3rnjGAaQ%2FJCP%2FsAsBEiPzniPiJEdMEZX6lk1J0Q07FR8QMucTXJdxgOL0I9oCDkJqtuGnU%2F7Ju%2F2gizU4AAhtlkZiWxdADzMy%2BZ75B1%2FUEMKp0syfZFcJnxhQIRbVZ1kL1DWJWhvqVTy4QryOXXIUDgXn5gqhRGwIDqY5cDf%2B9k35Ok34i0h%2BpWpzI%2BVzdIqcTn%2BspP3x8zrSWisJPLA6%2B05Uye&X-Amz-Signature=c76dc7e94e53b3c249ea188e06cee99236a63e30d8e2ccb176f0a00c121ac580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
