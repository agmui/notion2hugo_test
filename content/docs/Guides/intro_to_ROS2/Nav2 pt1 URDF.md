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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2PITMBC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDikgaQ3%2BujX4Q9NP%2Bv%2BRaVyHu77qYPLcLGnwjc1TUa3gIhAL2ysSfJ44L%2Fa3m%2FdGnS8OXTW5tZU5ZW6%2FMwG2L0Pvw5KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySvtIZAGW5SDwYYPsq3AOi%2BTtBTQx3pr9TWtSgyEC6qMIKPl1EWg%2B%2BRAoPaPJOuwfDwkif1f4zDIDIuA5nsnnGVLLezKIl24GbabL0geL9yOMXZrG5RTmvGWJbeJty4lZCer1Xvv3Sti%2BkpGZsdEN1XYh8hC0nP8QKPw4mqqPHO7ZaRwrph0dFthTvol6jc%2BNpOToYJVwm9OwnxjcRK6k862RXiyFmpYA1zI%2Fb1jl8o6BZQ53n5lI97hIIms6pfz%2FKrCLntFmxSgJDvO%2FMxZVvgLmUL%2BCNuqSA%2FBGQ3A7LDOoDl61xfBNyzXjtaKTtGjevwkG7gxjrsVZxsq4socC7QfQKET9FCTAHEv%2BueGPtx382UQX5R4rzcbol4bVIzYmA2t%2B%2BG00812SB7TO88KhYb%2BQHMP6GSn2gYc8n6dO8TGS7nvtpZmmKVcTtoDtMVEqtxmvDclgSWOZe0liNqkSoQVAGgvvENmOaM2DhhGjKWlD43A0lF1XtLVDsUCNo%2BNJMqI8AtwzR7Z0Uchz8H3Szy4de4HHATPBmvnsltnDOdE4IH4JvP4nLVu93%2BQgjgtx%2FQsedIaO5q5Gis0GJWwaOLmAAnxs%2BwIju9UeqwjxMFFcDmklVZypeQDj9Vqlnd8GGP%2BfV7mNCxKxmzzD%2FutnEBjqkAWam%2FJqAW72XGpKy3LiYSQZA3p5LcJ4XHJc3EVeOKTgY%2BNYmDozRU4HezAqOzpRrbZypN2q0umxJGSQMhkCWvMh%2BBuSateI3miGHEIKJTANH2hBQHtsIN2LUgBrGO0K3XVawsShQV8dgp%2BCaQu3NxMFuiJuSkcHshQVTHaddgwHVmLPE5kny0gEzfLyMrHT0ixomaLcWn1ryD6LhlKiLvIeppF9u&X-Amz-Signature=dc7b94aee0216717f7f75fd3057402e26bdb4a51f291aa9ddc59db455828c55d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2PITMBC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDikgaQ3%2BujX4Q9NP%2Bv%2BRaVyHu77qYPLcLGnwjc1TUa3gIhAL2ysSfJ44L%2Fa3m%2FdGnS8OXTW5tZU5ZW6%2FMwG2L0Pvw5KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySvtIZAGW5SDwYYPsq3AOi%2BTtBTQx3pr9TWtSgyEC6qMIKPl1EWg%2B%2BRAoPaPJOuwfDwkif1f4zDIDIuA5nsnnGVLLezKIl24GbabL0geL9yOMXZrG5RTmvGWJbeJty4lZCer1Xvv3Sti%2BkpGZsdEN1XYh8hC0nP8QKPw4mqqPHO7ZaRwrph0dFthTvol6jc%2BNpOToYJVwm9OwnxjcRK6k862RXiyFmpYA1zI%2Fb1jl8o6BZQ53n5lI97hIIms6pfz%2FKrCLntFmxSgJDvO%2FMxZVvgLmUL%2BCNuqSA%2FBGQ3A7LDOoDl61xfBNyzXjtaKTtGjevwkG7gxjrsVZxsq4socC7QfQKET9FCTAHEv%2BueGPtx382UQX5R4rzcbol4bVIzYmA2t%2B%2BG00812SB7TO88KhYb%2BQHMP6GSn2gYc8n6dO8TGS7nvtpZmmKVcTtoDtMVEqtxmvDclgSWOZe0liNqkSoQVAGgvvENmOaM2DhhGjKWlD43A0lF1XtLVDsUCNo%2BNJMqI8AtwzR7Z0Uchz8H3Szy4de4HHATPBmvnsltnDOdE4IH4JvP4nLVu93%2BQgjgtx%2FQsedIaO5q5Gis0GJWwaOLmAAnxs%2BwIju9UeqwjxMFFcDmklVZypeQDj9Vqlnd8GGP%2BfV7mNCxKxmzzD%2FutnEBjqkAWam%2FJqAW72XGpKy3LiYSQZA3p5LcJ4XHJc3EVeOKTgY%2BNYmDozRU4HezAqOzpRrbZypN2q0umxJGSQMhkCWvMh%2BBuSateI3miGHEIKJTANH2hBQHtsIN2LUgBrGO0K3XVawsShQV8dgp%2BCaQu3NxMFuiJuSkcHshQVTHaddgwHVmLPE5kny0gEzfLyMrHT0ixomaLcWn1ryD6LhlKiLvIeppF9u&X-Amz-Signature=03f293565346ed1163449fcc27b79c9f381f5e897181f34dea43993ba66c8c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2PITMBC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDikgaQ3%2BujX4Q9NP%2Bv%2BRaVyHu77qYPLcLGnwjc1TUa3gIhAL2ysSfJ44L%2Fa3m%2FdGnS8OXTW5tZU5ZW6%2FMwG2L0Pvw5KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySvtIZAGW5SDwYYPsq3AOi%2BTtBTQx3pr9TWtSgyEC6qMIKPl1EWg%2B%2BRAoPaPJOuwfDwkif1f4zDIDIuA5nsnnGVLLezKIl24GbabL0geL9yOMXZrG5RTmvGWJbeJty4lZCer1Xvv3Sti%2BkpGZsdEN1XYh8hC0nP8QKPw4mqqPHO7ZaRwrph0dFthTvol6jc%2BNpOToYJVwm9OwnxjcRK6k862RXiyFmpYA1zI%2Fb1jl8o6BZQ53n5lI97hIIms6pfz%2FKrCLntFmxSgJDvO%2FMxZVvgLmUL%2BCNuqSA%2FBGQ3A7LDOoDl61xfBNyzXjtaKTtGjevwkG7gxjrsVZxsq4socC7QfQKET9FCTAHEv%2BueGPtx382UQX5R4rzcbol4bVIzYmA2t%2B%2BG00812SB7TO88KhYb%2BQHMP6GSn2gYc8n6dO8TGS7nvtpZmmKVcTtoDtMVEqtxmvDclgSWOZe0liNqkSoQVAGgvvENmOaM2DhhGjKWlD43A0lF1XtLVDsUCNo%2BNJMqI8AtwzR7Z0Uchz8H3Szy4de4HHATPBmvnsltnDOdE4IH4JvP4nLVu93%2BQgjgtx%2FQsedIaO5q5Gis0GJWwaOLmAAnxs%2BwIju9UeqwjxMFFcDmklVZypeQDj9Vqlnd8GGP%2BfV7mNCxKxmzzD%2FutnEBjqkAWam%2FJqAW72XGpKy3LiYSQZA3p5LcJ4XHJc3EVeOKTgY%2BNYmDozRU4HezAqOzpRrbZypN2q0umxJGSQMhkCWvMh%2BBuSateI3miGHEIKJTANH2hBQHtsIN2LUgBrGO0K3XVawsShQV8dgp%2BCaQu3NxMFuiJuSkcHshQVTHaddgwHVmLPE5kny0gEzfLyMrHT0ixomaLcWn1ryD6LhlKiLvIeppF9u&X-Amz-Signature=577754bc15caecab6d1aac19e6d72b3e28039910e55e13d8ec4410119707f775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2PITMBC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDikgaQ3%2BujX4Q9NP%2Bv%2BRaVyHu77qYPLcLGnwjc1TUa3gIhAL2ysSfJ44L%2Fa3m%2FdGnS8OXTW5tZU5ZW6%2FMwG2L0Pvw5KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySvtIZAGW5SDwYYPsq3AOi%2BTtBTQx3pr9TWtSgyEC6qMIKPl1EWg%2B%2BRAoPaPJOuwfDwkif1f4zDIDIuA5nsnnGVLLezKIl24GbabL0geL9yOMXZrG5RTmvGWJbeJty4lZCer1Xvv3Sti%2BkpGZsdEN1XYh8hC0nP8QKPw4mqqPHO7ZaRwrph0dFthTvol6jc%2BNpOToYJVwm9OwnxjcRK6k862RXiyFmpYA1zI%2Fb1jl8o6BZQ53n5lI97hIIms6pfz%2FKrCLntFmxSgJDvO%2FMxZVvgLmUL%2BCNuqSA%2FBGQ3A7LDOoDl61xfBNyzXjtaKTtGjevwkG7gxjrsVZxsq4socC7QfQKET9FCTAHEv%2BueGPtx382UQX5R4rzcbol4bVIzYmA2t%2B%2BG00812SB7TO88KhYb%2BQHMP6GSn2gYc8n6dO8TGS7nvtpZmmKVcTtoDtMVEqtxmvDclgSWOZe0liNqkSoQVAGgvvENmOaM2DhhGjKWlD43A0lF1XtLVDsUCNo%2BNJMqI8AtwzR7Z0Uchz8H3Szy4de4HHATPBmvnsltnDOdE4IH4JvP4nLVu93%2BQgjgtx%2FQsedIaO5q5Gis0GJWwaOLmAAnxs%2BwIju9UeqwjxMFFcDmklVZypeQDj9Vqlnd8GGP%2BfV7mNCxKxmzzD%2FutnEBjqkAWam%2FJqAW72XGpKy3LiYSQZA3p5LcJ4XHJc3EVeOKTgY%2BNYmDozRU4HezAqOzpRrbZypN2q0umxJGSQMhkCWvMh%2BBuSateI3miGHEIKJTANH2hBQHtsIN2LUgBrGO0K3XVawsShQV8dgp%2BCaQu3NxMFuiJuSkcHshQVTHaddgwHVmLPE5kny0gEzfLyMrHT0ixomaLcWn1ryD6LhlKiLvIeppF9u&X-Amz-Signature=26dc569291fa412b463bf8731ccc81fa4c3ea0d1cdb6103b216996db5a1ef14f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2PITMBC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDikgaQ3%2BujX4Q9NP%2Bv%2BRaVyHu77qYPLcLGnwjc1TUa3gIhAL2ysSfJ44L%2Fa3m%2FdGnS8OXTW5tZU5ZW6%2FMwG2L0Pvw5KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySvtIZAGW5SDwYYPsq3AOi%2BTtBTQx3pr9TWtSgyEC6qMIKPl1EWg%2B%2BRAoPaPJOuwfDwkif1f4zDIDIuA5nsnnGVLLezKIl24GbabL0geL9yOMXZrG5RTmvGWJbeJty4lZCer1Xvv3Sti%2BkpGZsdEN1XYh8hC0nP8QKPw4mqqPHO7ZaRwrph0dFthTvol6jc%2BNpOToYJVwm9OwnxjcRK6k862RXiyFmpYA1zI%2Fb1jl8o6BZQ53n5lI97hIIms6pfz%2FKrCLntFmxSgJDvO%2FMxZVvgLmUL%2BCNuqSA%2FBGQ3A7LDOoDl61xfBNyzXjtaKTtGjevwkG7gxjrsVZxsq4socC7QfQKET9FCTAHEv%2BueGPtx382UQX5R4rzcbol4bVIzYmA2t%2B%2BG00812SB7TO88KhYb%2BQHMP6GSn2gYc8n6dO8TGS7nvtpZmmKVcTtoDtMVEqtxmvDclgSWOZe0liNqkSoQVAGgvvENmOaM2DhhGjKWlD43A0lF1XtLVDsUCNo%2BNJMqI8AtwzR7Z0Uchz8H3Szy4de4HHATPBmvnsltnDOdE4IH4JvP4nLVu93%2BQgjgtx%2FQsedIaO5q5Gis0GJWwaOLmAAnxs%2BwIju9UeqwjxMFFcDmklVZypeQDj9Vqlnd8GGP%2BfV7mNCxKxmzzD%2FutnEBjqkAWam%2FJqAW72XGpKy3LiYSQZA3p5LcJ4XHJc3EVeOKTgY%2BNYmDozRU4HezAqOzpRrbZypN2q0umxJGSQMhkCWvMh%2BBuSateI3miGHEIKJTANH2hBQHtsIN2LUgBrGO0K3XVawsShQV8dgp%2BCaQu3NxMFuiJuSkcHshQVTHaddgwHVmLPE5kny0gEzfLyMrHT0ixomaLcWn1ryD6LhlKiLvIeppF9u&X-Amz-Signature=4627079d06a8cdc475275f612351e47d4172b58cccbd214c87fc5bf8a26877e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2PITMBC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDikgaQ3%2BujX4Q9NP%2Bv%2BRaVyHu77qYPLcLGnwjc1TUa3gIhAL2ysSfJ44L%2Fa3m%2FdGnS8OXTW5tZU5ZW6%2FMwG2L0Pvw5KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySvtIZAGW5SDwYYPsq3AOi%2BTtBTQx3pr9TWtSgyEC6qMIKPl1EWg%2B%2BRAoPaPJOuwfDwkif1f4zDIDIuA5nsnnGVLLezKIl24GbabL0geL9yOMXZrG5RTmvGWJbeJty4lZCer1Xvv3Sti%2BkpGZsdEN1XYh8hC0nP8QKPw4mqqPHO7ZaRwrph0dFthTvol6jc%2BNpOToYJVwm9OwnxjcRK6k862RXiyFmpYA1zI%2Fb1jl8o6BZQ53n5lI97hIIms6pfz%2FKrCLntFmxSgJDvO%2FMxZVvgLmUL%2BCNuqSA%2FBGQ3A7LDOoDl61xfBNyzXjtaKTtGjevwkG7gxjrsVZxsq4socC7QfQKET9FCTAHEv%2BueGPtx382UQX5R4rzcbol4bVIzYmA2t%2B%2BG00812SB7TO88KhYb%2BQHMP6GSn2gYc8n6dO8TGS7nvtpZmmKVcTtoDtMVEqtxmvDclgSWOZe0liNqkSoQVAGgvvENmOaM2DhhGjKWlD43A0lF1XtLVDsUCNo%2BNJMqI8AtwzR7Z0Uchz8H3Szy4de4HHATPBmvnsltnDOdE4IH4JvP4nLVu93%2BQgjgtx%2FQsedIaO5q5Gis0GJWwaOLmAAnxs%2BwIju9UeqwjxMFFcDmklVZypeQDj9Vqlnd8GGP%2BfV7mNCxKxmzzD%2FutnEBjqkAWam%2FJqAW72XGpKy3LiYSQZA3p5LcJ4XHJc3EVeOKTgY%2BNYmDozRU4HezAqOzpRrbZypN2q0umxJGSQMhkCWvMh%2BBuSateI3miGHEIKJTANH2hBQHtsIN2LUgBrGO0K3XVawsShQV8dgp%2BCaQu3NxMFuiJuSkcHshQVTHaddgwHVmLPE5kny0gEzfLyMrHT0ixomaLcWn1ryD6LhlKiLvIeppF9u&X-Amz-Signature=84b57bf8167e17f4f899419f33ab62e9c358bf5a48c52494bb4729bd3faef860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2PITMBC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDikgaQ3%2BujX4Q9NP%2Bv%2BRaVyHu77qYPLcLGnwjc1TUa3gIhAL2ysSfJ44L%2Fa3m%2FdGnS8OXTW5tZU5ZW6%2FMwG2L0Pvw5KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySvtIZAGW5SDwYYPsq3AOi%2BTtBTQx3pr9TWtSgyEC6qMIKPl1EWg%2B%2BRAoPaPJOuwfDwkif1f4zDIDIuA5nsnnGVLLezKIl24GbabL0geL9yOMXZrG5RTmvGWJbeJty4lZCer1Xvv3Sti%2BkpGZsdEN1XYh8hC0nP8QKPw4mqqPHO7ZaRwrph0dFthTvol6jc%2BNpOToYJVwm9OwnxjcRK6k862RXiyFmpYA1zI%2Fb1jl8o6BZQ53n5lI97hIIms6pfz%2FKrCLntFmxSgJDvO%2FMxZVvgLmUL%2BCNuqSA%2FBGQ3A7LDOoDl61xfBNyzXjtaKTtGjevwkG7gxjrsVZxsq4socC7QfQKET9FCTAHEv%2BueGPtx382UQX5R4rzcbol4bVIzYmA2t%2B%2BG00812SB7TO88KhYb%2BQHMP6GSn2gYc8n6dO8TGS7nvtpZmmKVcTtoDtMVEqtxmvDclgSWOZe0liNqkSoQVAGgvvENmOaM2DhhGjKWlD43A0lF1XtLVDsUCNo%2BNJMqI8AtwzR7Z0Uchz8H3Szy4de4HHATPBmvnsltnDOdE4IH4JvP4nLVu93%2BQgjgtx%2FQsedIaO5q5Gis0GJWwaOLmAAnxs%2BwIju9UeqwjxMFFcDmklVZypeQDj9Vqlnd8GGP%2BfV7mNCxKxmzzD%2FutnEBjqkAWam%2FJqAW72XGpKy3LiYSQZA3p5LcJ4XHJc3EVeOKTgY%2BNYmDozRU4HezAqOzpRrbZypN2q0umxJGSQMhkCWvMh%2BBuSateI3miGHEIKJTANH2hBQHtsIN2LUgBrGO0K3XVawsShQV8dgp%2BCaQu3NxMFuiJuSkcHshQVTHaddgwHVmLPE5kny0gEzfLyMrHT0ixomaLcWn1ryD6LhlKiLvIeppF9u&X-Amz-Signature=c02802a5281a80b7c6b0e4439f1b59bc2a77e1ac6ffdee2ff5d9188fb1f1de32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2PITMBC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDikgaQ3%2BujX4Q9NP%2Bv%2BRaVyHu77qYPLcLGnwjc1TUa3gIhAL2ysSfJ44L%2Fa3m%2FdGnS8OXTW5tZU5ZW6%2FMwG2L0Pvw5KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySvtIZAGW5SDwYYPsq3AOi%2BTtBTQx3pr9TWtSgyEC6qMIKPl1EWg%2B%2BRAoPaPJOuwfDwkif1f4zDIDIuA5nsnnGVLLezKIl24GbabL0geL9yOMXZrG5RTmvGWJbeJty4lZCer1Xvv3Sti%2BkpGZsdEN1XYh8hC0nP8QKPw4mqqPHO7ZaRwrph0dFthTvol6jc%2BNpOToYJVwm9OwnxjcRK6k862RXiyFmpYA1zI%2Fb1jl8o6BZQ53n5lI97hIIms6pfz%2FKrCLntFmxSgJDvO%2FMxZVvgLmUL%2BCNuqSA%2FBGQ3A7LDOoDl61xfBNyzXjtaKTtGjevwkG7gxjrsVZxsq4socC7QfQKET9FCTAHEv%2BueGPtx382UQX5R4rzcbol4bVIzYmA2t%2B%2BG00812SB7TO88KhYb%2BQHMP6GSn2gYc8n6dO8TGS7nvtpZmmKVcTtoDtMVEqtxmvDclgSWOZe0liNqkSoQVAGgvvENmOaM2DhhGjKWlD43A0lF1XtLVDsUCNo%2BNJMqI8AtwzR7Z0Uchz8H3Szy4de4HHATPBmvnsltnDOdE4IH4JvP4nLVu93%2BQgjgtx%2FQsedIaO5q5Gis0GJWwaOLmAAnxs%2BwIju9UeqwjxMFFcDmklVZypeQDj9Vqlnd8GGP%2BfV7mNCxKxmzzD%2FutnEBjqkAWam%2FJqAW72XGpKy3LiYSQZA3p5LcJ4XHJc3EVeOKTgY%2BNYmDozRU4HezAqOzpRrbZypN2q0umxJGSQMhkCWvMh%2BBuSateI3miGHEIKJTANH2hBQHtsIN2LUgBrGO0K3XVawsShQV8dgp%2BCaQu3NxMFuiJuSkcHshQVTHaddgwHVmLPE5kny0gEzfLyMrHT0ixomaLcWn1ryD6LhlKiLvIeppF9u&X-Amz-Signature=eae83dd25f6152ca5ae1479782b3d0e8ec99aa58a34afa7f065f64a1ee067b89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2PITMBC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDikgaQ3%2BujX4Q9NP%2Bv%2BRaVyHu77qYPLcLGnwjc1TUa3gIhAL2ysSfJ44L%2Fa3m%2FdGnS8OXTW5tZU5ZW6%2FMwG2L0Pvw5KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySvtIZAGW5SDwYYPsq3AOi%2BTtBTQx3pr9TWtSgyEC6qMIKPl1EWg%2B%2BRAoPaPJOuwfDwkif1f4zDIDIuA5nsnnGVLLezKIl24GbabL0geL9yOMXZrG5RTmvGWJbeJty4lZCer1Xvv3Sti%2BkpGZsdEN1XYh8hC0nP8QKPw4mqqPHO7ZaRwrph0dFthTvol6jc%2BNpOToYJVwm9OwnxjcRK6k862RXiyFmpYA1zI%2Fb1jl8o6BZQ53n5lI97hIIms6pfz%2FKrCLntFmxSgJDvO%2FMxZVvgLmUL%2BCNuqSA%2FBGQ3A7LDOoDl61xfBNyzXjtaKTtGjevwkG7gxjrsVZxsq4socC7QfQKET9FCTAHEv%2BueGPtx382UQX5R4rzcbol4bVIzYmA2t%2B%2BG00812SB7TO88KhYb%2BQHMP6GSn2gYc8n6dO8TGS7nvtpZmmKVcTtoDtMVEqtxmvDclgSWOZe0liNqkSoQVAGgvvENmOaM2DhhGjKWlD43A0lF1XtLVDsUCNo%2BNJMqI8AtwzR7Z0Uchz8H3Szy4de4HHATPBmvnsltnDOdE4IH4JvP4nLVu93%2BQgjgtx%2FQsedIaO5q5Gis0GJWwaOLmAAnxs%2BwIju9UeqwjxMFFcDmklVZypeQDj9Vqlnd8GGP%2BfV7mNCxKxmzzD%2FutnEBjqkAWam%2FJqAW72XGpKy3LiYSQZA3p5LcJ4XHJc3EVeOKTgY%2BNYmDozRU4HezAqOzpRrbZypN2q0umxJGSQMhkCWvMh%2BBuSateI3miGHEIKJTANH2hBQHtsIN2LUgBrGO0K3XVawsShQV8dgp%2BCaQu3NxMFuiJuSkcHshQVTHaddgwHVmLPE5kny0gEzfLyMrHT0ixomaLcWn1ryD6LhlKiLvIeppF9u&X-Amz-Signature=f1f31213e59bd8aac7f478f791288b892d6875c597aaaf9d9b2be9335ed28921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2PITMBC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDikgaQ3%2BujX4Q9NP%2Bv%2BRaVyHu77qYPLcLGnwjc1TUa3gIhAL2ysSfJ44L%2Fa3m%2FdGnS8OXTW5tZU5ZW6%2FMwG2L0Pvw5KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySvtIZAGW5SDwYYPsq3AOi%2BTtBTQx3pr9TWtSgyEC6qMIKPl1EWg%2B%2BRAoPaPJOuwfDwkif1f4zDIDIuA5nsnnGVLLezKIl24GbabL0geL9yOMXZrG5RTmvGWJbeJty4lZCer1Xvv3Sti%2BkpGZsdEN1XYh8hC0nP8QKPw4mqqPHO7ZaRwrph0dFthTvol6jc%2BNpOToYJVwm9OwnxjcRK6k862RXiyFmpYA1zI%2Fb1jl8o6BZQ53n5lI97hIIms6pfz%2FKrCLntFmxSgJDvO%2FMxZVvgLmUL%2BCNuqSA%2FBGQ3A7LDOoDl61xfBNyzXjtaKTtGjevwkG7gxjrsVZxsq4socC7QfQKET9FCTAHEv%2BueGPtx382UQX5R4rzcbol4bVIzYmA2t%2B%2BG00812SB7TO88KhYb%2BQHMP6GSn2gYc8n6dO8TGS7nvtpZmmKVcTtoDtMVEqtxmvDclgSWOZe0liNqkSoQVAGgvvENmOaM2DhhGjKWlD43A0lF1XtLVDsUCNo%2BNJMqI8AtwzR7Z0Uchz8H3Szy4de4HHATPBmvnsltnDOdE4IH4JvP4nLVu93%2BQgjgtx%2FQsedIaO5q5Gis0GJWwaOLmAAnxs%2BwIju9UeqwjxMFFcDmklVZypeQDj9Vqlnd8GGP%2BfV7mNCxKxmzzD%2FutnEBjqkAWam%2FJqAW72XGpKy3LiYSQZA3p5LcJ4XHJc3EVeOKTgY%2BNYmDozRU4HezAqOzpRrbZypN2q0umxJGSQMhkCWvMh%2BBuSateI3miGHEIKJTANH2hBQHtsIN2LUgBrGO0K3XVawsShQV8dgp%2BCaQu3NxMFuiJuSkcHshQVTHaddgwHVmLPE5kny0gEzfLyMrHT0ixomaLcWn1ryD6LhlKiLvIeppF9u&X-Amz-Signature=213e5c4c270feb3e0ff4fe952da700b1b1e8b1f05121d7b8f35b353fe7de7cb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCPOKBFM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCpavtor4drTgdhdthPOPSWAJqmBlBh8v2uuz8XnXbKHgIhAPxRZ2K5xSMXmjrFfFf4DH8RIh2HC76GrQR9bt2Wq%2B2YKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbrJZ3MNHEmVLMtk0q3AM4BqlTyUiCzTjfuIDl9Fz2kT9rR2fX2iSKAFmV9q81%2BBs1eakm8T8GqjKk0TcXMCP%2FzDEEKfB9%2B%2BSTMq7YVZAkAa3s4%2FauE0n7iWKZQEejcXGSlhirfnjG%2FXDZ2JDnggtABGSFTumQq7vKD8kLlp57X6zXZ2ImcPf5kp19SZwO16gVxKCC%2F37nbFMOIszkOOUPfE88PacYLISW3CYmylee6wz5qYLvl0F6Q8GFsrFhTaDM7Jb3emTyv2tz0GsEES4iCwNnHGUiHP63wQQhbMZsF5ySvBq8gVZjB8zm15mvBO84q6kYQLSnL2qf%2BE%2B74ZHsFK%2B2iZ%2B9QLIXp%2B8PVOofRod1kxBBs23aCd8xwy67EmdzrJyAlB%2BLsiDnaGInMl3hF0IXJpY1pZJY9w1jgyjwjcpjRZbD%2BuOHOI%2BZ9WdFMOz8%2FkuPIzCOXoObfAQR4zfJBB3aFMEUnQExNQUnN%2BSYHrjUo%2FnBRnmbIzyjHXapA38lhh1CV%2B44%2BLb04KEdie%2BJkoGEfLrwB2lT2DezJlRQ%2FKqfQ4wJ%2Bq9yC3h2GwDMp2JU1gXRg%2BkpjTPtWvTw1YjkEJW%2BmAU4r%2BIefqEi%2F4Mdh%2BtvuFjifDJymVSkL2lzz4%2FRV6WNT1hJMrvwATDsutnEBjqkARr88H2CIpiVDP64k7ApYC1CulFcCi2O8tfDbVNRHE4n7AnOKgvKaIHUPb4rBKxGZWJ%2FJb6AZJBYN358NECJomAcDemraaxC4fMWLtQOd7UYqzg6y6o9jxbV1iNAsO5JcSHQOV03oc48eGfVkIdibd4u9UuMKmdUz78034%2FhYnhRCryEUd19ZTH4%2Bu6Zc7K56bd0nWbGW%2BbUwkjD%2F2ls95OjLK8M&X-Amz-Signature=1fe7d7e7845705efde540bf484a5f3e498e4c22b92a51de2c4215275d41fbfbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PNFDVOI%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQD186ge8GgHEcxDBFo%2BsEXjEuYgHoxcAKJiU8r2gVkH%2BgIgRd5C3d2u%2BDqfEGKMcBLP6S6pgWSnebQJpr4zKei%2BFWcqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAz4TxBo59I%2BJC6CGircA7cQXt5xezrJMcyW%2F1MBfHAZljAYJY7dCqeKEdC5DkUCS9kFebI98JL9bzP%2Bkhec9iwVJ9sI6pHJn50y7uScjDjmMaWzJW3JqVG9slviifjJDqCkasUr520WUUal7sD2nf%2FAEGsi0EWq%2B%2FQycmJvxCN%2BldxwBtJmAjI4GPJNTDX%2FwyyAvoZGgM4xvezQhlRAAmg%2FobRA8fcN7kFM%2FzTJzbmtNFgQw5PDomstIkL36BiQBdLLeWLExGQr3GQS5%2Bp0qEY5X%2FwUo%2FiG42MqkBYQcTNW2ZC7ws57BPZfJqt6oK%2BpJAhpb9OS7FcyWaac1iQu3NB6t9Fy%2F6pxPvkW4esySpQDMA%2BYmZnmte%2F72e9iQLekt2VSB%2F4qIl%2BmUaD%2F9CwKCUN%2F5WcRcxDxFFuizcm8ukDGav4yvPqbB%2BONx09tPMgl8MlOtz%2BH5etSqvvTo2ny89JCTJBIuQ8TESuPKrCB8MLI%2F5f%2BwY2uHHGxqMumbHT1wZmG7wO1JG06CT7jQUuxr513yQiGNG%2BBUJ0viPy8o645rI%2Bm5tqUW6MAW%2FUDVmGHLE9A9v12O0e1ZfbTOTSvvgGJaEC6TuKzLhlZ48HPikjT9ipf9Xh%2B7fou2%2BPECe0rVIl6isXVTKDMY2SSMJK72cQGOqUBKoZM8Z0yeVM3Xil3%2FGdU4QDMRL6OMDVQY1salRuKGs7lEJCbl53M4Zfd5rJGLJuWA%2BSG%2F7bHGpWggdL%2BL0Xe953pHxS1ymImJtA2si1fnEDRwOXhM7sMqoam%2BNgx%2FMf4EnLmrj1PHJOt0wXbtyBStZm3Pg9CTt08781kYuOcQ81mLEMswj482RQIC5tqfo8LEKWyAIuVasIn44PKqbA5ccaYqcOs&X-Amz-Signature=763c04043edd9355fce1394b3dc017001bdcb8303fffbc163af746a457ea5340&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OZOHHOB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIC6VZTb5e8w0hi3leS8NcFzmJbsG5KkFzIcBi%2BBNga03AiEApIN3pX18Q6S%2Fk%2FyW2qvdfFWDWL%2BChqNxfbFjsfL3lVIqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAX0kTdyuQyoRgXlOircA5BvwJuKMFADHhxSDL2Gyvx4X3OYrjsg8jr0cTnyfONnRcFoCdPk5q9%2BANz%2BO9S9LlHti0Oc6Xmb%2B8jDbiTSd%2BSNpUOdpwHx2r9D5oobVk5MnknMDz3T0dGyLyScMadIIP30nII6GTwqE7MsnLzvgYYX9KSZu%2FOPdCWSaA3E%2FX6PlUZ5%2B%2F42qwTVlaokgpT7xUmRcnn66n3E6jdqXlsZIWANumsjP1s4VvbBh06pu7nY0TQGlfsPimdn3CMPI2Woocxkho2ms%2BPYwCxt9lF3FKl%2Flp2ueYXsgoIQNW9UDIVJf69zzjqW%2F5fB1Sxog5udWCY5q7sNyi7xGM9biVwlbNckXUREvZgog7mo9z9DVtTSrFsPmugi32dzd1J4rn%2BqBhbM%2Ft6LdLQjM49BExWA0himmMQtrVkFp4ziFa4bcIHYzHQ5TdgSRBPdR5cD9PJ5pxQ%2F%2F1LoSSfrU%2FyPm7%2FTk9UCBeJI6rup1%2BHrgAzj6iBEFmyR5qc2N%2F2%2FeABQX2yvkYQSE7M%2B%2B1QwaSUaI9INcLRjcrUlKLGVzwof03wW02MLBJe25haYwzgb0hIXDnI%2Bw0qqX37c%2BRZP6zHiHrDwjyHJPyN3EzNP6q9fvlB2hjCDWcvPLJQE64fLacXWMNe62cQGOqUBiigQFuNanVuYiLRs3Txiyx0XIHviLOl5NxoX4H6zPLbQ0LwRp4bHyf6TLglw9MtRXs28%2FbwBSf9%2BW7VDmN0hrQ5p%2BNjHVfCZ%2BvT1NvlZcB1mAyTQ4XJ77QIF%2B48uzON0q12xB0R9o%2FL1JOid8divwDb%2BROchq2nvEqVh7Z001BVnCbljK7vFpXnT3V5qAfFHumU8yuI6jrgkT23lBeR6kJNAK00d&X-Amz-Signature=2165830a35b101958a4e5b7f6c394123e282155e4a13e49fc9188da0c2c65fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2PITMBC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDikgaQ3%2BujX4Q9NP%2Bv%2BRaVyHu77qYPLcLGnwjc1TUa3gIhAL2ysSfJ44L%2Fa3m%2FdGnS8OXTW5tZU5ZW6%2FMwG2L0Pvw5KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySvtIZAGW5SDwYYPsq3AOi%2BTtBTQx3pr9TWtSgyEC6qMIKPl1EWg%2B%2BRAoPaPJOuwfDwkif1f4zDIDIuA5nsnnGVLLezKIl24GbabL0geL9yOMXZrG5RTmvGWJbeJty4lZCer1Xvv3Sti%2BkpGZsdEN1XYh8hC0nP8QKPw4mqqPHO7ZaRwrph0dFthTvol6jc%2BNpOToYJVwm9OwnxjcRK6k862RXiyFmpYA1zI%2Fb1jl8o6BZQ53n5lI97hIIms6pfz%2FKrCLntFmxSgJDvO%2FMxZVvgLmUL%2BCNuqSA%2FBGQ3A7LDOoDl61xfBNyzXjtaKTtGjevwkG7gxjrsVZxsq4socC7QfQKET9FCTAHEv%2BueGPtx382UQX5R4rzcbol4bVIzYmA2t%2B%2BG00812SB7TO88KhYb%2BQHMP6GSn2gYc8n6dO8TGS7nvtpZmmKVcTtoDtMVEqtxmvDclgSWOZe0liNqkSoQVAGgvvENmOaM2DhhGjKWlD43A0lF1XtLVDsUCNo%2BNJMqI8AtwzR7Z0Uchz8H3Szy4de4HHATPBmvnsltnDOdE4IH4JvP4nLVu93%2BQgjgtx%2FQsedIaO5q5Gis0GJWwaOLmAAnxs%2BwIju9UeqwjxMFFcDmklVZypeQDj9Vqlnd8GGP%2BfV7mNCxKxmzzD%2FutnEBjqkAWam%2FJqAW72XGpKy3LiYSQZA3p5LcJ4XHJc3EVeOKTgY%2BNYmDozRU4HezAqOzpRrbZypN2q0umxJGSQMhkCWvMh%2BBuSateI3miGHEIKJTANH2hBQHtsIN2LUgBrGO0K3XVawsShQV8dgp%2BCaQu3NxMFuiJuSkcHshQVTHaddgwHVmLPE5kny0gEzfLyMrHT0ixomaLcWn1ryD6LhlKiLvIeppF9u&X-Amz-Signature=3f9ca9cb965f3ba10d548475343f1e70cb146bbf8033ff73c4b8842ee6b98479&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J7NFYGS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQD2UaZV7GU1Vad6jJg06%2BvZj81UQCkz5nhv9V8Ko0x5eAIhALlBcvRvj6ii6SnMXjH6g9xEyUisVZ9xJobjCnjo1%2FZEKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxvq6h2gU9o7LTwyKkq3ANNJflobtSrepht4t1E1TRYCj6Xq02EPJyDBuUWF7l306JYXCxmksIVlmDLlOds%2BJ2jW7%2FXtBmJunv7ZC3YbHtFiX3VVGTOAWsj%2BXQ%2FDxAAtZ9TPzb2kEDidr%2FWkWq7w3D%2B3JhhifAwwQ%2ByS2vVcI%2FyfPCbPzRCdxi2mXJkGnhU5X93fdlT4N%2FtibSijB41guIrg0DRWrXd7UyvqrUPc%2FwKtzxsAPxDULgW86DvdppaNE7td%2F0fABmNifaiDhzycXE8eou1HcG3tzEGNmqZfgRhSC%2BRLYzS%2BYRf%2BqBK1VKYJ%2FNO5bhObbBGR5PoQpqKgPKlh%2BT4UnGwG8pY8BliKEEusAscy2fbeUtBUZXfS3uMtBykaTzC20w8j2JHpYxfPMjyNLfbocK92SD0yJm54S3AmZKoh7B8qg3gSHmoj2b9wE9CYGcRZjAq3QM0alq48NWx39nDHiLkjZk6Z2Q%2B%2BG56lEYb%2BhqjUlgRyKoNrW7oeqmRtiqMcJG0y0xlkqzndpvwFKBbc0f9QCU9NvmTp4WPDT8zGnqNCoTzOLSFVyWof6DVqJD42wprAz6tiqxqkQQUKmD8c%2BUYCGBBKqJ8oD%2FYnG48S4iW0VUxmqnN5bfbAPjXf1bPUiFWjKU0tjCJu9nEBjqkAVj6KcEnRa7uWgv%2BpPJ6wO2%2FUmL4dhuMESuxMSM2gtGgjbeHRR33kpSzUFGT5Z0Aiz4A1zD2t5bnd8BurhWqjj126SO4QN9ISE8rEKbCJvani%2BEQ4gl1V4Fq0MuYIW6Wh3utui4l1eYTpxl3IpueoWS5XYSluT%2F%2BErAh55NX6o2XFYweA%2Bn7UEA19RBbsWslhSdO%2B7b%2BKUx0FnIbWWlQoouinlsg&X-Amz-Signature=879243cdc7332627e2dfd158140c0c1f7c4a3ab7c2ff296848b07ec027fe8ca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2PITMBC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDikgaQ3%2BujX4Q9NP%2Bv%2BRaVyHu77qYPLcLGnwjc1TUa3gIhAL2ysSfJ44L%2Fa3m%2FdGnS8OXTW5tZU5ZW6%2FMwG2L0Pvw5KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySvtIZAGW5SDwYYPsq3AOi%2BTtBTQx3pr9TWtSgyEC6qMIKPl1EWg%2B%2BRAoPaPJOuwfDwkif1f4zDIDIuA5nsnnGVLLezKIl24GbabL0geL9yOMXZrG5RTmvGWJbeJty4lZCer1Xvv3Sti%2BkpGZsdEN1XYh8hC0nP8QKPw4mqqPHO7ZaRwrph0dFthTvol6jc%2BNpOToYJVwm9OwnxjcRK6k862RXiyFmpYA1zI%2Fb1jl8o6BZQ53n5lI97hIIms6pfz%2FKrCLntFmxSgJDvO%2FMxZVvgLmUL%2BCNuqSA%2FBGQ3A7LDOoDl61xfBNyzXjtaKTtGjevwkG7gxjrsVZxsq4socC7QfQKET9FCTAHEv%2BueGPtx382UQX5R4rzcbol4bVIzYmA2t%2B%2BG00812SB7TO88KhYb%2BQHMP6GSn2gYc8n6dO8TGS7nvtpZmmKVcTtoDtMVEqtxmvDclgSWOZe0liNqkSoQVAGgvvENmOaM2DhhGjKWlD43A0lF1XtLVDsUCNo%2BNJMqI8AtwzR7Z0Uchz8H3Szy4de4HHATPBmvnsltnDOdE4IH4JvP4nLVu93%2BQgjgtx%2FQsedIaO5q5Gis0GJWwaOLmAAnxs%2BwIju9UeqwjxMFFcDmklVZypeQDj9Vqlnd8GGP%2BfV7mNCxKxmzzD%2FutnEBjqkAWam%2FJqAW72XGpKy3LiYSQZA3p5LcJ4XHJc3EVeOKTgY%2BNYmDozRU4HezAqOzpRrbZypN2q0umxJGSQMhkCWvMh%2BBuSateI3miGHEIKJTANH2hBQHtsIN2LUgBrGO0K3XVawsShQV8dgp%2BCaQu3NxMFuiJuSkcHshQVTHaddgwHVmLPE5kny0gEzfLyMrHT0ixomaLcWn1ryD6LhlKiLvIeppF9u&X-Amz-Signature=2ac5228fb2d88849f4058d1c87f06c139212932359cc6e29ce87a2e66a682232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF5LE7ZG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIHywvidtsf62LsQc0vPRnmHRg4XDNUyq0hqa%2BXDw3v56AiARTcrhukeadGMLiUyrFsLtMCZahbfKvE4Sofxa%2FyJzriqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0nS9asCRjlbO6iXzKtwDPAfcGZgshmHE%2BQawrfz5QOuiVbUs3SjEwkOmhFUwWVyx2%2Faxc9EdyKEufCv8u7qw3xTudAxxekwrRq872CBECuw2wI4enxunAFpUEWPTCL8cLFe3icVzTz90w%2BsBI6OOIuoWYTcj6TPuHXFnhhsR7%2Fvi%2BBswjc6lRJKBYjVf76jUKuMLZUUldmcm%2BMba1h13uzETRNL2WKgRk%2F8SgtMXX8Vvi9%2Bx6XKFbuP2BdyMapoAULdEnNb7eEOwdXC%2FDzsys88rdfA50WZauC8ZmjejjwV%2Fl92xxhLNSfdELx7fcK9n99zjLHsmNjxlkvxaqymRXSDJiY2xpf03iwPSbiptG25eR3bfg7f50e9T8kJ%2Fvo2jCKACSAAzzVka0kf%2B53I58xN9TOYxAVxwDAJGMZ6ZN%2BtTOrEwbvIxdQAlp1qllFFqlPa2mkhDGNAbb%2FT9Z7zwkb0giXQvt5GuYoZciCIKXLkXyfjZufaW3SMwjOIIzOIMtEWBUKBbV%2FNQ0Q03RSBAzm5Ve26kNe5lAL34xdIUVKJdQYb5j%2BlMuwKj6%2FY2Lv1og8spGwZFJE0IQCVWqrPOWjbfKKx6btK9zOeGISCnd2bpZ7rC%2BEFOmlI85cwyk4AD%2FxYrdfwWSbYB4tYwl7vZxAY6pgED%2BbljRwU9Ju6dpd5Ye9tC23K59%2FKNweGQzWDNVb6Ul824XOcrptjRLrySQGjTnc05WkirR8MaY7xhOjjdmXjPJidPRCmYNH8lZJT%2BjLJrkqPLqNqrRuxttXPXGoOU4VFavV1V0%2BJNBA5%2BDW%2FLeQa1S8ZYHPQRhCwln9ESEYr5HCU1vO4RJjMd0eeLhsNeRWHLkTqbR6ND%2F7bH1ZI%2BtQ%2F6tQtv1607&X-Amz-Signature=e637cfa91047e6fcf75ee92f342677b1c28a819e8c5c361db270b47cc626f371&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2PITMBC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDikgaQ3%2BujX4Q9NP%2Bv%2BRaVyHu77qYPLcLGnwjc1TUa3gIhAL2ysSfJ44L%2Fa3m%2FdGnS8OXTW5tZU5ZW6%2FMwG2L0Pvw5KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySvtIZAGW5SDwYYPsq3AOi%2BTtBTQx3pr9TWtSgyEC6qMIKPl1EWg%2B%2BRAoPaPJOuwfDwkif1f4zDIDIuA5nsnnGVLLezKIl24GbabL0geL9yOMXZrG5RTmvGWJbeJty4lZCer1Xvv3Sti%2BkpGZsdEN1XYh8hC0nP8QKPw4mqqPHO7ZaRwrph0dFthTvol6jc%2BNpOToYJVwm9OwnxjcRK6k862RXiyFmpYA1zI%2Fb1jl8o6BZQ53n5lI97hIIms6pfz%2FKrCLntFmxSgJDvO%2FMxZVvgLmUL%2BCNuqSA%2FBGQ3A7LDOoDl61xfBNyzXjtaKTtGjevwkG7gxjrsVZxsq4socC7QfQKET9FCTAHEv%2BueGPtx382UQX5R4rzcbol4bVIzYmA2t%2B%2BG00812SB7TO88KhYb%2BQHMP6GSn2gYc8n6dO8TGS7nvtpZmmKVcTtoDtMVEqtxmvDclgSWOZe0liNqkSoQVAGgvvENmOaM2DhhGjKWlD43A0lF1XtLVDsUCNo%2BNJMqI8AtwzR7Z0Uchz8H3Szy4de4HHATPBmvnsltnDOdE4IH4JvP4nLVu93%2BQgjgtx%2FQsedIaO5q5Gis0GJWwaOLmAAnxs%2BwIju9UeqwjxMFFcDmklVZypeQDj9Vqlnd8GGP%2BfV7mNCxKxmzzD%2FutnEBjqkAWam%2FJqAW72XGpKy3LiYSQZA3p5LcJ4XHJc3EVeOKTgY%2BNYmDozRU4HezAqOzpRrbZypN2q0umxJGSQMhkCWvMh%2BBuSateI3miGHEIKJTANH2hBQHtsIN2LUgBrGO0K3XVawsShQV8dgp%2BCaQu3NxMFuiJuSkcHshQVTHaddgwHVmLPE5kny0gEzfLyMrHT0ixomaLcWn1ryD6LhlKiLvIeppF9u&X-Amz-Signature=e1df6767f892d98554a5cf476ec1cd499356a4792a74241aeb9fdcebd6131ae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4J3W54N%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDPTgzxuXVgb4dQ8dZ%2F1xvn3gFF1xYBDCBwR22h%2ByuUHwIhAOVrcI0wYR017jwemgRyTFkZOIQpGp9eoPhhrRehwwCxKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOWTFQyVr1YsFcH6Aq3ANsNL23d5Sl%2BXTMCF02TKtoQ6SIXMN%2FkGLxLRB4p3%2BQys80aktYxdmc9jUpN0ijLXxgYnnbQiwi6DohdpuS%2FHPGhCPzBWkR7ogEx4NiVHBnkflbp%2FbRZFU%2BCMLqjrYJ9zKrZ%2FsWyGMCXdDrEK12T%2BMBNr4rXKzvDVp55qpLrsQ4f%2BHXIWdQHstymnM%2Fe6Wjpv%2FSMiWRvPYO7HcR6LB7wYbH8SYqy2sTKuHtPrif1ffCihvZjXJw7%2BM%2FBuFpGAkc7QxDlZI4WOdfRSoq6BDPlrJB00b6N7cG%2FG5AiBGwzb5N9syGJVYUGAojwPpX%2BCVV2BO3e%2FOpZFXxlp8a402hKbSDWD5ZQPYGgknB%2FkPr3AclpP0Q2h7wMrye0FkOE%2F2k09TpECSSre3sOZ2xagjOcyBlcYwspFHhP4ITzUvWRt8KdySTq0%2BngF1eWzxUDGaWXCzvixIis48JZIqz8WCKYubhCz7QhjJvWQ6svesrpXyR2m8qwunXjnEp0O8fpq5YtvP9%2Bop0gjPe05%2F1dLoE6HNVBqVJjZNvOZztueS11EmPKCZDMUyb%2BkNMgah2PtFYTmCZGwhZU9emQ9Ohrd3z8DiW5oDxGWbL5nQSQb4TPA6ro6RUQnW%2B8zef%2B7gE%2FzDgutnEBjqkAfluPzE%2FtVKEF5w%2BY2aKwbRoUcIIgm38%2Fxf1BKNtb2zps8lXtTMP8LOW%2Bz3vjQpo1HHY94mOVFTZfET7Ch%2BYBkG2eNDBKtcJuyLmTWNT4lKT4nEBjOmsMkaG6PezbIgk6Q0v50%2B5hLkSs00a42j6AU0AC5Mp0SU9GaI0JRkW1RAkElJu0ZaeUV92e1PE0UOW4IFZ4MvAver4QrA%2BIsQwJz7dto%2BI&X-Amz-Signature=083c87779b8e3f4363a93e5f2c1d8bc4f855973794753a04590e1e6bb657b85c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2PITMBC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDikgaQ3%2BujX4Q9NP%2Bv%2BRaVyHu77qYPLcLGnwjc1TUa3gIhAL2ysSfJ44L%2Fa3m%2FdGnS8OXTW5tZU5ZW6%2FMwG2L0Pvw5KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySvtIZAGW5SDwYYPsq3AOi%2BTtBTQx3pr9TWtSgyEC6qMIKPl1EWg%2B%2BRAoPaPJOuwfDwkif1f4zDIDIuA5nsnnGVLLezKIl24GbabL0geL9yOMXZrG5RTmvGWJbeJty4lZCer1Xvv3Sti%2BkpGZsdEN1XYh8hC0nP8QKPw4mqqPHO7ZaRwrph0dFthTvol6jc%2BNpOToYJVwm9OwnxjcRK6k862RXiyFmpYA1zI%2Fb1jl8o6BZQ53n5lI97hIIms6pfz%2FKrCLntFmxSgJDvO%2FMxZVvgLmUL%2BCNuqSA%2FBGQ3A7LDOoDl61xfBNyzXjtaKTtGjevwkG7gxjrsVZxsq4socC7QfQKET9FCTAHEv%2BueGPtx382UQX5R4rzcbol4bVIzYmA2t%2B%2BG00812SB7TO88KhYb%2BQHMP6GSn2gYc8n6dO8TGS7nvtpZmmKVcTtoDtMVEqtxmvDclgSWOZe0liNqkSoQVAGgvvENmOaM2DhhGjKWlD43A0lF1XtLVDsUCNo%2BNJMqI8AtwzR7Z0Uchz8H3Szy4de4HHATPBmvnsltnDOdE4IH4JvP4nLVu93%2BQgjgtx%2FQsedIaO5q5Gis0GJWwaOLmAAnxs%2BwIju9UeqwjxMFFcDmklVZypeQDj9Vqlnd8GGP%2BfV7mNCxKxmzzD%2FutnEBjqkAWam%2FJqAW72XGpKy3LiYSQZA3p5LcJ4XHJc3EVeOKTgY%2BNYmDozRU4HezAqOzpRrbZypN2q0umxJGSQMhkCWvMh%2BBuSateI3miGHEIKJTANH2hBQHtsIN2LUgBrGO0K3XVawsShQV8dgp%2BCaQu3NxMFuiJuSkcHshQVTHaddgwHVmLPE5kny0gEzfLyMrHT0ixomaLcWn1ryD6LhlKiLvIeppF9u&X-Amz-Signature=ee3e216d425348608ce6f8e103d6f80622477962ccd7632f76d3e122fec08bc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXT2D6WH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIBDdc1YHX0NKaDMEBsOU8VLUp0XH3FDjnS73X5yhxw6PAiBrE%2FRZ96fWcj15RUAjQe%2FY4a6BAgljVkvsa4x6psfhVyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtwHEe73Iroj0JD70KtwD6Q7Ig7KeQ2AvKPj%2BLJgrgn3GY9gKwDjUIqR6agUgbdTJsOybIcYs6JyCGsIrMOwWosJbO17N8iqnLRl3hJjDd1SNMkDhq84cnsgd3jkC8wAUNB%2BtssZrsWw6knKGbOTbHjgAgHKoCf1M7XB4K6BKDLySpPs1wNt0I%2FjSkFLH4RMMpcMpvQdVYTUtqG1Dgjv2ruRbEW9lo6E%2BxR52sdo5tzCKG7%2Fbt0peqVFfhIj8hMAAOO3p%2BHt%2BBm0j24v%2F1OIcY8bbdQnCahy%2FdZQtqKomdzT1bUp7X8fj%2FutD6E5e3v5DG%2B5Puq4UvluxQFyklYJ8WAyqgOPVo1A5YTD0Cn9ctVgAbBLj8EQUFbViV4JlXFK2ZgMcdZGCdn8lfOrSve%2BtRc2DXM8V%2B6h04yhjLnyj6MaRrvpxMJnlAc7lPukI20U5WkUmqm%2FZNas3ERchif4DjPrTrcWOERRtPtoN%2BlaNvs7ZQ8EE9KEchgqTfiQhT15BEZ1gZx43cjojTT3SZrSn162risthJa%2FOAfwRmFdYAxVCOe3H329EeSVzYoyU4111DhsewS5XJla4gHYVr8DPmMdKxlg39NPKVOfTGWLnhS5WTlpLSZQYMOyd0zTeR2YqXxJPJYvqXDaDth4wzrrZxAY6pgH0lcyQpe7CHBhTBSOlzfA1i%2BSvb6E7K%2FRugGhrxTXC3him%2FVw2kXrtVTPG%2FaF41OlF058L1H0K0eUYJTncA9gFXJ7UNax0rGp2u3eRlzvAUc6%2FI7OsvGrkHG5K9s%2Fx8hO7f%2B2yUO%2FUY%2FnuIVj8V8sPx6fc5OXiEI1yJZk7dz7C15TDFoYeWwEoKg6PkCxHJHkfBjTem3Kfjuz77JfnoPsVyMWvrVbn&X-Amz-Signature=2cad8546cf8891358b9746f0a470110a53b812ad4634d6356737572e5852923a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T57EKG7I%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIHkSlsRui5IE%2BSJuRAU7f8187nb5HsNMyt7KXENCdVclAiEAr7sS25jUeUiJGG%2BqMrpGR8Hf7f%2Fw8P8VOBG%2FVDitQxEqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPwNBBEPcEQ0PRW6ircA5FTVmUGGynWynA1pHLvcCpjjBp3Rmse8aYJ%2FgS2ocuXDmLT%2FLP186UHn18THnR9mj5qT48LrIB6l60dpYyvUyzGAawr0jwpKz%2FKoqepxLqW53%2Bxevj4aWv4VQMYX0y5OaKJ8nyrGMB4EgasQQXenTW7mu8O96qiEi4cPQTnbz71JDy8zWunjK9JXQATW9bntiMgmjkb1DtNL6ETN8XJ%2FlqAly664xcrhRcubbODHvqJF8WQHPbSb%2BCHq3Oz6IRwBa2BnNKJ2zYVnvz%2BgFCJvCsf4tohCMAdjPvYFKAtB83SPBy%2FQEpFjyGy6mJ%2BFzYxUkxcZt3TA7X%2F5RZuMpVYP%2BtC%2BI%2FzByVLIJq%2F5qEl5%2Bt6arDX6nREELIaSiO5kRK1NlasDPTHFoOBOjarDHk91KI1MUNyH86YKv5GwEQvaUpvs0BFTjNwavxndIW3UIdOWwDxCYTQkWDSQaDDwmx5T4hFRurY%2FUrrQZRU1hhmaYZpxndx3%2BCfQ%2Fn7DoJ0VAoTOnCfaFjZC4SdlwvqboW5fXX4pSyWZr1y0ovgdvX%2BXf94IM2PM08xyvaaOgDijHF9WyVT2vgTgF2clTE6IWaUwGxIDb94hFwYkZ%2BMBhUc%2BMkrGbWCn0NAi2FfyF9rMP662cQGOqUBoEK2JT9gRjSJENXVwIvjIlY%2Bdmg2s1iA548vSJ4d7L5%2BDZmwCCU6GjQMPWqjzjP6Wm8b3A83yzhSVW0F92x3fHE%2FQ0ceQmOd1EYHRrnxKTdHZzvF%2Fhy%2FWTi8y6EsY25E%2FayRZPJN7eIfeW17VGSpC0i3O9W%2Fz7XhMGiFtB2TkhTSNEgdMdc2dPa2bEt66crecAJYbW2GhtpTaS584Fbt48YEBZgq&X-Amz-Signature=85792e9a07a3ef65cf092705fc0a52bbc880722832523ea43205ceef58cda6d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZIDDOWP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDWZxLDthOJGkMsvJm%2FojBWO3CabXSgwoa6Du%2BUnaxynAIgGyZdbVGDUMOYH%2BVPjItn3LPoiQX2dHaz60csoRqfeFYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM0bpqV71dwu%2ByeA%2BSrcA3HTDe%2FAzjFjKUIZnN8fHgEH1HrvDQpNRsqxKrioXbVsTCdvPEVP0XskWlPXR8J2NT1YlnFXUGpUs8rz3tKCNcdW8ikAM5gEX1lmnZLMFa2DyrT3qbJLlNNXZgQdLS%2BEWbwz0g9ntOnAwiEvE9P2qa2l%2BB6M3%2FewnUkOtTRSiLI3K6Yy60EM0QkSZyfbkeFMvnQLnrtUcRzKgcrSdyNridY8EOJ5ZdkrIL9tm1TZR2seDyT8cwpf%2F9biEVyvOpUscOHUAco7oIuvkO3A0qIAER5bFDcsu2Mh4T6ygSnig%2B4aG7YmSmGXY9JcYtiiB1Z3nzloaXP0jLq%2FYn0yVmm0OfLYRXysTK4SvsJudRx7L7aGZHJA95B3MR4I%2FUgHg3gY3L4FckVKsR9yOm0CBW15pOqbGJDVlTNz2oPahazQUUkZBU4q5tzvJc2MUJVCzWo6iyn984ThcgPCl20aOtqvWEVuaNyomu146v4vps4TAWmhuVLN71P63ZgQLmExag0RPDqkDmp8qY0EK%2BKGHr8o4zD%2FAOHUxGksMgxZBfa4MjBr3JCvvOoHUQ6nALjQ7yItWkXuh0t%2BC6Ue3qwcyamLmwdzxvLRasDVJBeKbvycL8CoDdwDx3zuV741v4ZwMOm62cQGOqUBy3PZtNiWaD7lBrL1xK9EjcC66vFQ9lvUdVUy817Jh5BVYmXOCaDgyXkpGo2%2FoisCha03J%2BtRloK6ePYfUWz%2BlzhGqyYE2BizFIvym1H86nXWJDxTZmhheZVe2GyqjbW51Ggs4yN%2BKLn3zVdTCmme52yKsPLLn5FGBuO2ADCxthxQ1DIfNyO11A%2FH6KgyZ09fgEKOLoWJG2Yv1OLPxgNPUH7X8wTI&X-Amz-Signature=b7045cdd18bc81355fc154d750306fe82cc8b2a6f4f088224774e229e3b123cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ6ES4G5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQC4JSN8oHeQJwSuDzu7oRvKLh%2BvJGfvEPAg2GxVaP26xAIgaV0wuRHHb0%2F3uSnVPOT4NcHfP6AYYK9gUR6u79QrJNoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJGRXI7pwJ%2FNcMNiyrcAwOPFylSNSw2f%2B0%2FmeBvSjaG11zMDNg9rOf%2FfldIT%2BGxNjdiwUNi9tz%2FZS6ZFFgkB12syREw5ZGWx3%2Bjng02HIkExUe6ANehoiHbpSrr9IQXJQoqwiRSWGfPbYtybeMQ4kAORp08wIR0RgWJWbgKzAtVUTSLM0Q83WA8SXpFnZhVPslJPdeGPlSIVCj3H0jal9XCHi1bTqKI6lkcPeYbLECf3DskICV3jPqq9Tbof86PH8rOjpCz3ewxW2Vg75eazFEwg3EJimavLOpKDoo67ADA53Y5hZf6e0iBVq4%2F8VVcFunv%2Bjfac0Q1qz%2Flaw8%2BCAE0l84zVJVhMo35NVwB3Rfq0lEes5b%2FiSgx72Pvua%2FhB3EFYPQKr2vZH4gISiuu%2BKJus0CNcJTdsZHHiPch9pTtF2xKEySROgKBAfWpkB3vQbU6tHXjy%2FywyLZGPUS4WDPltQEX%2FBuY0TfljvYsH4FV46y2%2BUTRjBI9dijZ05GTE7YiaAOJnTFpBASuhVUoEY69LC4SsyTpKSBepNKs4Trq9wNuQrxmIHGw9C7c8yDWDHJDi2alJE40D8TJoMjoycMINjITwRSFUWTLBXArTh%2FBk95ji%2BAKfCFK6X8lKncXae%2FciEmbWYfvF33TMM662cQGOqUBbvpnPeSSH3XKZPv9Cy5qOjrTjyOz%2F%2Fau4JSiVMigHVKH5H11eW6HhSTW2zbquc9sGRv%2BGSR07ibTqV0a%2FsHkMNclNpFpzeOlFUMN%2BoxEq24wlnIIQFCVdQI2jLR9yansKIZO57bToHtS3a18VozmED9clTkfCFFdWe%2FNPPR7ZvAtS6I7oOiuZiJqHMFI4lQ8Qhsjz8am8twywPoNLetcrcrf4XZX&X-Amz-Signature=389436a0b3f7528a2ebfef3042b12615685e4fea434e3d8a43ed1d49242e260f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665PECKQG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCDvQ2rVM0g3uJrQ1nnHSJjraE0SoNoRamA9JvxEFIlvAIgVsXHfcaL0HQok9OSoBFYHFPijwkRiIIZax7BDK8aS0QqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJjBjXofJ%2B3mnZizCrcAxdyJboscGdigca0ZEk5KouBKg%2Fu4sB9VWW19U4yeixnPEVzwkjB6Flf25EQo6tVJ4PulIeAN0a%2FLGlDqK3vpiVfcQnxsZTeWvvF%2FWcbKIBIy5j3cPbarWJck%2BolKiTpEtIgxy0c8BB37JPJGztUyQeK4XyfHydNb2508uDVWj%2FpKXVBvQ3ru1K96tLzsSQs%2FVJDJcQXLbMNMgE%2BUrDbQW3R8UqnD9aua3qthQw%2FCYzo2fXoUchyygdjriZitltVyP7nRayYOSg0S0V%2BamzxuOahfJqQJbgsrB%2FNxfQCb3xrnnAMGET6StjFAJNJHjfUVKe4xXdAXUbvlBhlmiuWwunqLJ2CYPty9bnQN%2B4DmnKTdy2QmY%2FbL%2FdrudH0juKaQBGEHMuV8kQpPYQuHQjAaN1q9zoXQNEj1LcjzOgp%2BdNggHSS0m%2BtUDrYu%2BuRotWZ2A1F6hehIijc7io81doObPze3KQBd4pDoeAJpyGS%2BCtPWZbvHY2v8azF2Krj7D0yD%2Be2wNd%2BF1gunmj8M9exjoTYRnEzUcxmAe9ZQvxYFBt1hDZxFYjPEbEFV6RPrFz5JB2eMxxxvuv5Mo%2FYLeheRR%2FV8AD6RgIP5LQBOxeOPhNUFhFfce07%2FnGBhrKnMJ272cQGOqUBssrMgmb8Jyu3XYMxQT19d21FCr1IBoOzeYnG%2F0PR7xG3ny2xo7KjHTEviL0TwyB%2FrHws1F6RZhfHDSZmp5I39L1LVJmIDtMvQuO6XkR5flnt3cr1ENeJVCcSz7vcmZ53G8PQSdsf7Q00Gp5jAVGVqgden3426HAa5V4KU6tGjpthEo7BpQATKbK54ph6MtFfmLiipL5gEDv7mxg1jZK9gedxdKAe&X-Amz-Signature=679d2bcef09d7cf03285f893d0ac7fb82663bb3771ac0b14830397e2ca334865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2PITMBC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDikgaQ3%2BujX4Q9NP%2Bv%2BRaVyHu77qYPLcLGnwjc1TUa3gIhAL2ysSfJ44L%2Fa3m%2FdGnS8OXTW5tZU5ZW6%2FMwG2L0Pvw5KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySvtIZAGW5SDwYYPsq3AOi%2BTtBTQx3pr9TWtSgyEC6qMIKPl1EWg%2B%2BRAoPaPJOuwfDwkif1f4zDIDIuA5nsnnGVLLezKIl24GbabL0geL9yOMXZrG5RTmvGWJbeJty4lZCer1Xvv3Sti%2BkpGZsdEN1XYh8hC0nP8QKPw4mqqPHO7ZaRwrph0dFthTvol6jc%2BNpOToYJVwm9OwnxjcRK6k862RXiyFmpYA1zI%2Fb1jl8o6BZQ53n5lI97hIIms6pfz%2FKrCLntFmxSgJDvO%2FMxZVvgLmUL%2BCNuqSA%2FBGQ3A7LDOoDl61xfBNyzXjtaKTtGjevwkG7gxjrsVZxsq4socC7QfQKET9FCTAHEv%2BueGPtx382UQX5R4rzcbol4bVIzYmA2t%2B%2BG00812SB7TO88KhYb%2BQHMP6GSn2gYc8n6dO8TGS7nvtpZmmKVcTtoDtMVEqtxmvDclgSWOZe0liNqkSoQVAGgvvENmOaM2DhhGjKWlD43A0lF1XtLVDsUCNo%2BNJMqI8AtwzR7Z0Uchz8H3Szy4de4HHATPBmvnsltnDOdE4IH4JvP4nLVu93%2BQgjgtx%2FQsedIaO5q5Gis0GJWwaOLmAAnxs%2BwIju9UeqwjxMFFcDmklVZypeQDj9Vqlnd8GGP%2BfV7mNCxKxmzzD%2FutnEBjqkAWam%2FJqAW72XGpKy3LiYSQZA3p5LcJ4XHJc3EVeOKTgY%2BNYmDozRU4HezAqOzpRrbZypN2q0umxJGSQMhkCWvMh%2BBuSateI3miGHEIKJTANH2hBQHtsIN2LUgBrGO0K3XVawsShQV8dgp%2BCaQu3NxMFuiJuSkcHshQVTHaddgwHVmLPE5kny0gEzfLyMrHT0ixomaLcWn1ryD6LhlKiLvIeppF9u&X-Amz-Signature=20b103b07f4603219350f450d7a1f75cb1fb18e8b5a61e0ce4b4b2beae8e94e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2PITMBC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDikgaQ3%2BujX4Q9NP%2Bv%2BRaVyHu77qYPLcLGnwjc1TUa3gIhAL2ysSfJ44L%2Fa3m%2FdGnS8OXTW5tZU5ZW6%2FMwG2L0Pvw5KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySvtIZAGW5SDwYYPsq3AOi%2BTtBTQx3pr9TWtSgyEC6qMIKPl1EWg%2B%2BRAoPaPJOuwfDwkif1f4zDIDIuA5nsnnGVLLezKIl24GbabL0geL9yOMXZrG5RTmvGWJbeJty4lZCer1Xvv3Sti%2BkpGZsdEN1XYh8hC0nP8QKPw4mqqPHO7ZaRwrph0dFthTvol6jc%2BNpOToYJVwm9OwnxjcRK6k862RXiyFmpYA1zI%2Fb1jl8o6BZQ53n5lI97hIIms6pfz%2FKrCLntFmxSgJDvO%2FMxZVvgLmUL%2BCNuqSA%2FBGQ3A7LDOoDl61xfBNyzXjtaKTtGjevwkG7gxjrsVZxsq4socC7QfQKET9FCTAHEv%2BueGPtx382UQX5R4rzcbol4bVIzYmA2t%2B%2BG00812SB7TO88KhYb%2BQHMP6GSn2gYc8n6dO8TGS7nvtpZmmKVcTtoDtMVEqtxmvDclgSWOZe0liNqkSoQVAGgvvENmOaM2DhhGjKWlD43A0lF1XtLVDsUCNo%2BNJMqI8AtwzR7Z0Uchz8H3Szy4de4HHATPBmvnsltnDOdE4IH4JvP4nLVu93%2BQgjgtx%2FQsedIaO5q5Gis0GJWwaOLmAAnxs%2BwIju9UeqwjxMFFcDmklVZypeQDj9Vqlnd8GGP%2BfV7mNCxKxmzzD%2FutnEBjqkAWam%2FJqAW72XGpKy3LiYSQZA3p5LcJ4XHJc3EVeOKTgY%2BNYmDozRU4HezAqOzpRrbZypN2q0umxJGSQMhkCWvMh%2BBuSateI3miGHEIKJTANH2hBQHtsIN2LUgBrGO0K3XVawsShQV8dgp%2BCaQu3NxMFuiJuSkcHshQVTHaddgwHVmLPE5kny0gEzfLyMrHT0ixomaLcWn1ryD6LhlKiLvIeppF9u&X-Amz-Signature=3758434bcf7e72b2acee300b1e11b2721b304c4cb4f9662343ce82c24e135dd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5RRYDSN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCXIOcfcj9IGl%2B%2BChu4oRYBuGgsXSj26wEpNHs3fg9uYAIgDcEpDWEhJd5CKuUTcTVg6Nt3tYpUPWSjlc6eZZ49EoYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCWLv6SYemJVUuVkCrcA6kD%2BSDVK0C8eVt0jONIWCmFmpbdtmqxnCNyw79Z92IuZ75yK4hiIuLK4xaY%2B%2FtWbzB4QlgYeuUtOZVyPBZ8brAmhFaltWMtOa8i5vVOrqcQp6EPZZ5h5gBBa6K9GttviecqBckkQaOycDrZqb33wvGRcitDwXTwHwcKh1A5svgE4QWtC63pM608D3VB0BQvXi50AlLmZuYkh7lIzUMGEL4yBqKneZOewbN%2Bwq5YIfT1DNmJr0CnrrM5FRkyGC3dZpr8pJgkquvlTaX6f7BX9%2FCdxRlQWbgYRtuK%2Fw9XFs3boNN8%2BLptxA0cT4N2387iyL1hf7jeB9bSJTqJOZiEv3lXHfRaIduvSFz0JT13c36ZdAhF1wjRP3C%2BGYZgcVxWSgrZsJc6oGX3kjvMx%2F1yK0RyB%2BKYxcWFx9IuICHM207ipEIKK9bQ9nif%2BXUsVduRDEeJFMxsPPfRNznBl1auJJPTPVW1m7V1nFsqs1Znnfr%2FDwxyPcXUNsAC4%2BfnLgRBl0jVooO26XnHqTwSu5gvWz9h9DU33JLEWQJ224PIRChDe%2B94NRFIV%2F788YVOTXqlUUQiZ%2FapjFaxTowaW8A8xWTtd0vvZd9RZSvgHmtcwZt8yV9DbtPIH8B2izNmMNe62cQGOqUBtQbbsh8MUB9V%2BVu%2FGp%2Fqq3z2oMIt6Z%2BdgjM8LKa0UsE7pa7pMIXhoxSeT3pAUc6xOgP6AxzVcBePVJbQBgy6yINAiW%2BvgpAHyZNyDz9Dw0LrAqcNsGSF%2F4o9k08cPUii8MsS1MshEE3UZJsXHzfMXydXEGlgHyz0J4KMCw%2B5KbhYWXugf6EFYkuXrgbCiUwYejF0aDV%2BRe8cVgvFd9tuY5%2FZjU%2B5&X-Amz-Signature=98c178a45bf7477a9d0eb961732b2970fbc8021fb87287771ec98c9015bd1ae5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5RRYDSN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCXIOcfcj9IGl%2B%2BChu4oRYBuGgsXSj26wEpNHs3fg9uYAIgDcEpDWEhJd5CKuUTcTVg6Nt3tYpUPWSjlc6eZZ49EoYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCWLv6SYemJVUuVkCrcA6kD%2BSDVK0C8eVt0jONIWCmFmpbdtmqxnCNyw79Z92IuZ75yK4hiIuLK4xaY%2B%2FtWbzB4QlgYeuUtOZVyPBZ8brAmhFaltWMtOa8i5vVOrqcQp6EPZZ5h5gBBa6K9GttviecqBckkQaOycDrZqb33wvGRcitDwXTwHwcKh1A5svgE4QWtC63pM608D3VB0BQvXi50AlLmZuYkh7lIzUMGEL4yBqKneZOewbN%2Bwq5YIfT1DNmJr0CnrrM5FRkyGC3dZpr8pJgkquvlTaX6f7BX9%2FCdxRlQWbgYRtuK%2Fw9XFs3boNN8%2BLptxA0cT4N2387iyL1hf7jeB9bSJTqJOZiEv3lXHfRaIduvSFz0JT13c36ZdAhF1wjRP3C%2BGYZgcVxWSgrZsJc6oGX3kjvMx%2F1yK0RyB%2BKYxcWFx9IuICHM207ipEIKK9bQ9nif%2BXUsVduRDEeJFMxsPPfRNznBl1auJJPTPVW1m7V1nFsqs1Znnfr%2FDwxyPcXUNsAC4%2BfnLgRBl0jVooO26XnHqTwSu5gvWz9h9DU33JLEWQJ224PIRChDe%2B94NRFIV%2F788YVOTXqlUUQiZ%2FapjFaxTowaW8A8xWTtd0vvZd9RZSvgHmtcwZt8yV9DbtPIH8B2izNmMNe62cQGOqUBtQbbsh8MUB9V%2BVu%2FGp%2Fqq3z2oMIt6Z%2BdgjM8LKa0UsE7pa7pMIXhoxSeT3pAUc6xOgP6AxzVcBePVJbQBgy6yINAiW%2BvgpAHyZNyDz9Dw0LrAqcNsGSF%2F4o9k08cPUii8MsS1MshEE3UZJsXHzfMXydXEGlgHyz0J4KMCw%2B5KbhYWXugf6EFYkuXrgbCiUwYejF0aDV%2BRe8cVgvFd9tuY5%2FZjU%2B5&X-Amz-Signature=b07c9c0c41ac4b6969c4c2690f81a4139d64a621609935ebcb197ca4e27e6599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5RRYDSN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCXIOcfcj9IGl%2B%2BChu4oRYBuGgsXSj26wEpNHs3fg9uYAIgDcEpDWEhJd5CKuUTcTVg6Nt3tYpUPWSjlc6eZZ49EoYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCWLv6SYemJVUuVkCrcA6kD%2BSDVK0C8eVt0jONIWCmFmpbdtmqxnCNyw79Z92IuZ75yK4hiIuLK4xaY%2B%2FtWbzB4QlgYeuUtOZVyPBZ8brAmhFaltWMtOa8i5vVOrqcQp6EPZZ5h5gBBa6K9GttviecqBckkQaOycDrZqb33wvGRcitDwXTwHwcKh1A5svgE4QWtC63pM608D3VB0BQvXi50AlLmZuYkh7lIzUMGEL4yBqKneZOewbN%2Bwq5YIfT1DNmJr0CnrrM5FRkyGC3dZpr8pJgkquvlTaX6f7BX9%2FCdxRlQWbgYRtuK%2Fw9XFs3boNN8%2BLptxA0cT4N2387iyL1hf7jeB9bSJTqJOZiEv3lXHfRaIduvSFz0JT13c36ZdAhF1wjRP3C%2BGYZgcVxWSgrZsJc6oGX3kjvMx%2F1yK0RyB%2BKYxcWFx9IuICHM207ipEIKK9bQ9nif%2BXUsVduRDEeJFMxsPPfRNznBl1auJJPTPVW1m7V1nFsqs1Znnfr%2FDwxyPcXUNsAC4%2BfnLgRBl0jVooO26XnHqTwSu5gvWz9h9DU33JLEWQJ224PIRChDe%2B94NRFIV%2F788YVOTXqlUUQiZ%2FapjFaxTowaW8A8xWTtd0vvZd9RZSvgHmtcwZt8yV9DbtPIH8B2izNmMNe62cQGOqUBtQbbsh8MUB9V%2BVu%2FGp%2Fqq3z2oMIt6Z%2BdgjM8LKa0UsE7pa7pMIXhoxSeT3pAUc6xOgP6AxzVcBePVJbQBgy6yINAiW%2BvgpAHyZNyDz9Dw0LrAqcNsGSF%2F4o9k08cPUii8MsS1MshEE3UZJsXHzfMXydXEGlgHyz0J4KMCw%2B5KbhYWXugf6EFYkuXrgbCiUwYejF0aDV%2BRe8cVgvFd9tuY5%2FZjU%2B5&X-Amz-Signature=d6683ea0b036164ff7a9cd4de18a1c332d4a3968708c8619227fb4e4d64655cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5RRYDSN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCXIOcfcj9IGl%2B%2BChu4oRYBuGgsXSj26wEpNHs3fg9uYAIgDcEpDWEhJd5CKuUTcTVg6Nt3tYpUPWSjlc6eZZ49EoYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCWLv6SYemJVUuVkCrcA6kD%2BSDVK0C8eVt0jONIWCmFmpbdtmqxnCNyw79Z92IuZ75yK4hiIuLK4xaY%2B%2FtWbzB4QlgYeuUtOZVyPBZ8brAmhFaltWMtOa8i5vVOrqcQp6EPZZ5h5gBBa6K9GttviecqBckkQaOycDrZqb33wvGRcitDwXTwHwcKh1A5svgE4QWtC63pM608D3VB0BQvXi50AlLmZuYkh7lIzUMGEL4yBqKneZOewbN%2Bwq5YIfT1DNmJr0CnrrM5FRkyGC3dZpr8pJgkquvlTaX6f7BX9%2FCdxRlQWbgYRtuK%2Fw9XFs3boNN8%2BLptxA0cT4N2387iyL1hf7jeB9bSJTqJOZiEv3lXHfRaIduvSFz0JT13c36ZdAhF1wjRP3C%2BGYZgcVxWSgrZsJc6oGX3kjvMx%2F1yK0RyB%2BKYxcWFx9IuICHM207ipEIKK9bQ9nif%2BXUsVduRDEeJFMxsPPfRNznBl1auJJPTPVW1m7V1nFsqs1Znnfr%2FDwxyPcXUNsAC4%2BfnLgRBl0jVooO26XnHqTwSu5gvWz9h9DU33JLEWQJ224PIRChDe%2B94NRFIV%2F788YVOTXqlUUQiZ%2FapjFaxTowaW8A8xWTtd0vvZd9RZSvgHmtcwZt8yV9DbtPIH8B2izNmMNe62cQGOqUBtQbbsh8MUB9V%2BVu%2FGp%2Fqq3z2oMIt6Z%2BdgjM8LKa0UsE7pa7pMIXhoxSeT3pAUc6xOgP6AxzVcBePVJbQBgy6yINAiW%2BvgpAHyZNyDz9Dw0LrAqcNsGSF%2F4o9k08cPUii8MsS1MshEE3UZJsXHzfMXydXEGlgHyz0J4KMCw%2B5KbhYWXugf6EFYkuXrgbCiUwYejF0aDV%2BRe8cVgvFd9tuY5%2FZjU%2B5&X-Amz-Signature=ded8a3adefa479690df9374542217b145882281c3b36429c82db080c8a77de31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5RRYDSN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCXIOcfcj9IGl%2B%2BChu4oRYBuGgsXSj26wEpNHs3fg9uYAIgDcEpDWEhJd5CKuUTcTVg6Nt3tYpUPWSjlc6eZZ49EoYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCWLv6SYemJVUuVkCrcA6kD%2BSDVK0C8eVt0jONIWCmFmpbdtmqxnCNyw79Z92IuZ75yK4hiIuLK4xaY%2B%2FtWbzB4QlgYeuUtOZVyPBZ8brAmhFaltWMtOa8i5vVOrqcQp6EPZZ5h5gBBa6K9GttviecqBckkQaOycDrZqb33wvGRcitDwXTwHwcKh1A5svgE4QWtC63pM608D3VB0BQvXi50AlLmZuYkh7lIzUMGEL4yBqKneZOewbN%2Bwq5YIfT1DNmJr0CnrrM5FRkyGC3dZpr8pJgkquvlTaX6f7BX9%2FCdxRlQWbgYRtuK%2Fw9XFs3boNN8%2BLptxA0cT4N2387iyL1hf7jeB9bSJTqJOZiEv3lXHfRaIduvSFz0JT13c36ZdAhF1wjRP3C%2BGYZgcVxWSgrZsJc6oGX3kjvMx%2F1yK0RyB%2BKYxcWFx9IuICHM207ipEIKK9bQ9nif%2BXUsVduRDEeJFMxsPPfRNznBl1auJJPTPVW1m7V1nFsqs1Znnfr%2FDwxyPcXUNsAC4%2BfnLgRBl0jVooO26XnHqTwSu5gvWz9h9DU33JLEWQJ224PIRChDe%2B94NRFIV%2F788YVOTXqlUUQiZ%2FapjFaxTowaW8A8xWTtd0vvZd9RZSvgHmtcwZt8yV9DbtPIH8B2izNmMNe62cQGOqUBtQbbsh8MUB9V%2BVu%2FGp%2Fqq3z2oMIt6Z%2BdgjM8LKa0UsE7pa7pMIXhoxSeT3pAUc6xOgP6AxzVcBePVJbQBgy6yINAiW%2BvgpAHyZNyDz9Dw0LrAqcNsGSF%2F4o9k08cPUii8MsS1MshEE3UZJsXHzfMXydXEGlgHyz0J4KMCw%2B5KbhYWXugf6EFYkuXrgbCiUwYejF0aDV%2BRe8cVgvFd9tuY5%2FZjU%2B5&X-Amz-Signature=79c59d6a7ab85cd18514a171ce6a0f68a20b5a61acdedfed5e5ebeb2415a597f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5RRYDSN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCXIOcfcj9IGl%2B%2BChu4oRYBuGgsXSj26wEpNHs3fg9uYAIgDcEpDWEhJd5CKuUTcTVg6Nt3tYpUPWSjlc6eZZ49EoYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCWLv6SYemJVUuVkCrcA6kD%2BSDVK0C8eVt0jONIWCmFmpbdtmqxnCNyw79Z92IuZ75yK4hiIuLK4xaY%2B%2FtWbzB4QlgYeuUtOZVyPBZ8brAmhFaltWMtOa8i5vVOrqcQp6EPZZ5h5gBBa6K9GttviecqBckkQaOycDrZqb33wvGRcitDwXTwHwcKh1A5svgE4QWtC63pM608D3VB0BQvXi50AlLmZuYkh7lIzUMGEL4yBqKneZOewbN%2Bwq5YIfT1DNmJr0CnrrM5FRkyGC3dZpr8pJgkquvlTaX6f7BX9%2FCdxRlQWbgYRtuK%2Fw9XFs3boNN8%2BLptxA0cT4N2387iyL1hf7jeB9bSJTqJOZiEv3lXHfRaIduvSFz0JT13c36ZdAhF1wjRP3C%2BGYZgcVxWSgrZsJc6oGX3kjvMx%2F1yK0RyB%2BKYxcWFx9IuICHM207ipEIKK9bQ9nif%2BXUsVduRDEeJFMxsPPfRNznBl1auJJPTPVW1m7V1nFsqs1Znnfr%2FDwxyPcXUNsAC4%2BfnLgRBl0jVooO26XnHqTwSu5gvWz9h9DU33JLEWQJ224PIRChDe%2B94NRFIV%2F788YVOTXqlUUQiZ%2FapjFaxTowaW8A8xWTtd0vvZd9RZSvgHmtcwZt8yV9DbtPIH8B2izNmMNe62cQGOqUBtQbbsh8MUB9V%2BVu%2FGp%2Fqq3z2oMIt6Z%2BdgjM8LKa0UsE7pa7pMIXhoxSeT3pAUc6xOgP6AxzVcBePVJbQBgy6yINAiW%2BvgpAHyZNyDz9Dw0LrAqcNsGSF%2F4o9k08cPUii8MsS1MshEE3UZJsXHzfMXydXEGlgHyz0J4KMCw%2B5KbhYWXugf6EFYkuXrgbCiUwYejF0aDV%2BRe8cVgvFd9tuY5%2FZjU%2B5&X-Amz-Signature=d129de86ae7f5a7910c9be832dee4916d6ed76765126302a88aff94fcbb72d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5RRYDSN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCXIOcfcj9IGl%2B%2BChu4oRYBuGgsXSj26wEpNHs3fg9uYAIgDcEpDWEhJd5CKuUTcTVg6Nt3tYpUPWSjlc6eZZ49EoYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCWLv6SYemJVUuVkCrcA6kD%2BSDVK0C8eVt0jONIWCmFmpbdtmqxnCNyw79Z92IuZ75yK4hiIuLK4xaY%2B%2FtWbzB4QlgYeuUtOZVyPBZ8brAmhFaltWMtOa8i5vVOrqcQp6EPZZ5h5gBBa6K9GttviecqBckkQaOycDrZqb33wvGRcitDwXTwHwcKh1A5svgE4QWtC63pM608D3VB0BQvXi50AlLmZuYkh7lIzUMGEL4yBqKneZOewbN%2Bwq5YIfT1DNmJr0CnrrM5FRkyGC3dZpr8pJgkquvlTaX6f7BX9%2FCdxRlQWbgYRtuK%2Fw9XFs3boNN8%2BLptxA0cT4N2387iyL1hf7jeB9bSJTqJOZiEv3lXHfRaIduvSFz0JT13c36ZdAhF1wjRP3C%2BGYZgcVxWSgrZsJc6oGX3kjvMx%2F1yK0RyB%2BKYxcWFx9IuICHM207ipEIKK9bQ9nif%2BXUsVduRDEeJFMxsPPfRNznBl1auJJPTPVW1m7V1nFsqs1Znnfr%2FDwxyPcXUNsAC4%2BfnLgRBl0jVooO26XnHqTwSu5gvWz9h9DU33JLEWQJ224PIRChDe%2B94NRFIV%2F788YVOTXqlUUQiZ%2FapjFaxTowaW8A8xWTtd0vvZd9RZSvgHmtcwZt8yV9DbtPIH8B2izNmMNe62cQGOqUBtQbbsh8MUB9V%2BVu%2FGp%2Fqq3z2oMIt6Z%2BdgjM8LKa0UsE7pa7pMIXhoxSeT3pAUc6xOgP6AxzVcBePVJbQBgy6yINAiW%2BvgpAHyZNyDz9Dw0LrAqcNsGSF%2F4o9k08cPUii8MsS1MshEE3UZJsXHzfMXydXEGlgHyz0J4KMCw%2B5KbhYWXugf6EFYkuXrgbCiUwYejF0aDV%2BRe8cVgvFd9tuY5%2FZjU%2B5&X-Amz-Signature=d6683ea0b036164ff7a9cd4de18a1c332d4a3968708c8619227fb4e4d64655cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5RRYDSN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCXIOcfcj9IGl%2B%2BChu4oRYBuGgsXSj26wEpNHs3fg9uYAIgDcEpDWEhJd5CKuUTcTVg6Nt3tYpUPWSjlc6eZZ49EoYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCWLv6SYemJVUuVkCrcA6kD%2BSDVK0C8eVt0jONIWCmFmpbdtmqxnCNyw79Z92IuZ75yK4hiIuLK4xaY%2B%2FtWbzB4QlgYeuUtOZVyPBZ8brAmhFaltWMtOa8i5vVOrqcQp6EPZZ5h5gBBa6K9GttviecqBckkQaOycDrZqb33wvGRcitDwXTwHwcKh1A5svgE4QWtC63pM608D3VB0BQvXi50AlLmZuYkh7lIzUMGEL4yBqKneZOewbN%2Bwq5YIfT1DNmJr0CnrrM5FRkyGC3dZpr8pJgkquvlTaX6f7BX9%2FCdxRlQWbgYRtuK%2Fw9XFs3boNN8%2BLptxA0cT4N2387iyL1hf7jeB9bSJTqJOZiEv3lXHfRaIduvSFz0JT13c36ZdAhF1wjRP3C%2BGYZgcVxWSgrZsJc6oGX3kjvMx%2F1yK0RyB%2BKYxcWFx9IuICHM207ipEIKK9bQ9nif%2BXUsVduRDEeJFMxsPPfRNznBl1auJJPTPVW1m7V1nFsqs1Znnfr%2FDwxyPcXUNsAC4%2BfnLgRBl0jVooO26XnHqTwSu5gvWz9h9DU33JLEWQJ224PIRChDe%2B94NRFIV%2F788YVOTXqlUUQiZ%2FapjFaxTowaW8A8xWTtd0vvZd9RZSvgHmtcwZt8yV9DbtPIH8B2izNmMNe62cQGOqUBtQbbsh8MUB9V%2BVu%2FGp%2Fqq3z2oMIt6Z%2BdgjM8LKa0UsE7pa7pMIXhoxSeT3pAUc6xOgP6AxzVcBePVJbQBgy6yINAiW%2BvgpAHyZNyDz9Dw0LrAqcNsGSF%2F4o9k08cPUii8MsS1MshEE3UZJsXHzfMXydXEGlgHyz0J4KMCw%2B5KbhYWXugf6EFYkuXrgbCiUwYejF0aDV%2BRe8cVgvFd9tuY5%2FZjU%2B5&X-Amz-Signature=76ae5e2955a101b1add5fe82a5caaf138c3e33e8e0d1add2576012feb833c08e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5RRYDSN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCXIOcfcj9IGl%2B%2BChu4oRYBuGgsXSj26wEpNHs3fg9uYAIgDcEpDWEhJd5CKuUTcTVg6Nt3tYpUPWSjlc6eZZ49EoYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCWLv6SYemJVUuVkCrcA6kD%2BSDVK0C8eVt0jONIWCmFmpbdtmqxnCNyw79Z92IuZ75yK4hiIuLK4xaY%2B%2FtWbzB4QlgYeuUtOZVyPBZ8brAmhFaltWMtOa8i5vVOrqcQp6EPZZ5h5gBBa6K9GttviecqBckkQaOycDrZqb33wvGRcitDwXTwHwcKh1A5svgE4QWtC63pM608D3VB0BQvXi50AlLmZuYkh7lIzUMGEL4yBqKneZOewbN%2Bwq5YIfT1DNmJr0CnrrM5FRkyGC3dZpr8pJgkquvlTaX6f7BX9%2FCdxRlQWbgYRtuK%2Fw9XFs3boNN8%2BLptxA0cT4N2387iyL1hf7jeB9bSJTqJOZiEv3lXHfRaIduvSFz0JT13c36ZdAhF1wjRP3C%2BGYZgcVxWSgrZsJc6oGX3kjvMx%2F1yK0RyB%2BKYxcWFx9IuICHM207ipEIKK9bQ9nif%2BXUsVduRDEeJFMxsPPfRNznBl1auJJPTPVW1m7V1nFsqs1Znnfr%2FDwxyPcXUNsAC4%2BfnLgRBl0jVooO26XnHqTwSu5gvWz9h9DU33JLEWQJ224PIRChDe%2B94NRFIV%2F788YVOTXqlUUQiZ%2FapjFaxTowaW8A8xWTtd0vvZd9RZSvgHmtcwZt8yV9DbtPIH8B2izNmMNe62cQGOqUBtQbbsh8MUB9V%2BVu%2FGp%2Fqq3z2oMIt6Z%2BdgjM8LKa0UsE7pa7pMIXhoxSeT3pAUc6xOgP6AxzVcBePVJbQBgy6yINAiW%2BvgpAHyZNyDz9Dw0LrAqcNsGSF%2F4o9k08cPUii8MsS1MshEE3UZJsXHzfMXydXEGlgHyz0J4KMCw%2B5KbhYWXugf6EFYkuXrgbCiUwYejF0aDV%2BRe8cVgvFd9tuY5%2FZjU%2B5&X-Amz-Signature=b0ee56322b706c6d98e0266957fd13e8669b57835c500e847f209df3524c8b28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5RRYDSN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCXIOcfcj9IGl%2B%2BChu4oRYBuGgsXSj26wEpNHs3fg9uYAIgDcEpDWEhJd5CKuUTcTVg6Nt3tYpUPWSjlc6eZZ49EoYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCWLv6SYemJVUuVkCrcA6kD%2BSDVK0C8eVt0jONIWCmFmpbdtmqxnCNyw79Z92IuZ75yK4hiIuLK4xaY%2B%2FtWbzB4QlgYeuUtOZVyPBZ8brAmhFaltWMtOa8i5vVOrqcQp6EPZZ5h5gBBa6K9GttviecqBckkQaOycDrZqb33wvGRcitDwXTwHwcKh1A5svgE4QWtC63pM608D3VB0BQvXi50AlLmZuYkh7lIzUMGEL4yBqKneZOewbN%2Bwq5YIfT1DNmJr0CnrrM5FRkyGC3dZpr8pJgkquvlTaX6f7BX9%2FCdxRlQWbgYRtuK%2Fw9XFs3boNN8%2BLptxA0cT4N2387iyL1hf7jeB9bSJTqJOZiEv3lXHfRaIduvSFz0JT13c36ZdAhF1wjRP3C%2BGYZgcVxWSgrZsJc6oGX3kjvMx%2F1yK0RyB%2BKYxcWFx9IuICHM207ipEIKK9bQ9nif%2BXUsVduRDEeJFMxsPPfRNznBl1auJJPTPVW1m7V1nFsqs1Znnfr%2FDwxyPcXUNsAC4%2BfnLgRBl0jVooO26XnHqTwSu5gvWz9h9DU33JLEWQJ224PIRChDe%2B94NRFIV%2F788YVOTXqlUUQiZ%2FapjFaxTowaW8A8xWTtd0vvZd9RZSvgHmtcwZt8yV9DbtPIH8B2izNmMNe62cQGOqUBtQbbsh8MUB9V%2BVu%2FGp%2Fqq3z2oMIt6Z%2BdgjM8LKa0UsE7pa7pMIXhoxSeT3pAUc6xOgP6AxzVcBePVJbQBgy6yINAiW%2BvgpAHyZNyDz9Dw0LrAqcNsGSF%2F4o9k08cPUii8MsS1MshEE3UZJsXHzfMXydXEGlgHyz0J4KMCw%2B5KbhYWXugf6EFYkuXrgbCiUwYejF0aDV%2BRe8cVgvFd9tuY5%2FZjU%2B5&X-Amz-Signature=5e441d9d56fceb85b3b57c9902e4018ea8014319d819bd5e2c6693aecde17fc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
