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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ6NRHP2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIF4DsrbThrfWOaDTnMV45f%2BXKlTX59kszY%2Fr%2FH7U63rEAiBxfNp4hI9Kziunw6BZJgc5v7FM9%2FvNLEubnR2jlhk8BCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMsoCIA0D5ZT9XUIySKtwDMnMk96af37cKkr1N8avIYMatQsgrFn19W%2F5dGViBJeFYe0PQIlF%2BFIdRRPmyMdSvYYS2kpZCfL90k%2BzQgHtxWX7XHRiPJs4V5RDqQQF1jpKNi5YR3S8%2BoMwhzWPpBTmDLXeqaEXMjQkQrH9JJhpkI8Q3MYAC1wP%2BzmaeU3DlHGhuAEzAEg9vmsTWsdlmweP5sL4nVJ1Th1fGOuMqjLyHqzSiPxJFgjKJOhzZBn7Y8g91Wl8jOBMG3gI3J16tzvMROMjMPtDQMkV%2BUBKSmJG%2BUONokhYC4tlELSxBE%2FjWFD19%2BBLCBrioqLNqm0LyovlgbC1t3mtd0S%2FiV4n4Zn3w4vCfmhcLnAojyL19cTOxFva4h5rmQ7fuwsejzblqpvVApNtNm7nmpQSgo39Os9%2FRcXnVb6M7LGbfV7vCM%2FiiSYfmmZi8X6%2FIO116pyx8qeoUEFrXubpfFZhPJmGSxyDibWL5V0k2KAxu59ShpG0CjdBDd2iviVAilyfVNLrRXS6BJcp3gALZKldI931%2BcS0yArRBkig0XR7PDb2xCglL2D4Am%2B68%2FjM05Ph%2FplaDGvNPtJfptuzE7Kmw4goQytz60NutQ2sN40%2FLgXSYWdFkFXXjeHTlT5hIePKM7ycw%2F9r9xAY6pgHfiKF5dvqw4vIPJdl07rrbonuQVBd2l0Cel2kgj%2BNPlAUnLit%2BGtCts8UuJKCy4xIrOctpHA5%2BpRkt0yPJUg%2B%2FQUfBgGwkdim1FPDhm1aYqJE4nddO4J2%2Fy9PRAVuMojHjcO7jUL2iGeUONWEgfhXnW16COoXBdUvepkUVnoypTUWK9vPRd%2BvypLvSj3vihbUbOh1wBPtNQOyTK20nZHi0j2qCieNo&X-Amz-Signature=14c91c81b92c26d526e24acf528d3217d8b58a1a7a975e51ccbee71f402c9fbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ6NRHP2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIF4DsrbThrfWOaDTnMV45f%2BXKlTX59kszY%2Fr%2FH7U63rEAiBxfNp4hI9Kziunw6BZJgc5v7FM9%2FvNLEubnR2jlhk8BCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMsoCIA0D5ZT9XUIySKtwDMnMk96af37cKkr1N8avIYMatQsgrFn19W%2F5dGViBJeFYe0PQIlF%2BFIdRRPmyMdSvYYS2kpZCfL90k%2BzQgHtxWX7XHRiPJs4V5RDqQQF1jpKNi5YR3S8%2BoMwhzWPpBTmDLXeqaEXMjQkQrH9JJhpkI8Q3MYAC1wP%2BzmaeU3DlHGhuAEzAEg9vmsTWsdlmweP5sL4nVJ1Th1fGOuMqjLyHqzSiPxJFgjKJOhzZBn7Y8g91Wl8jOBMG3gI3J16tzvMROMjMPtDQMkV%2BUBKSmJG%2BUONokhYC4tlELSxBE%2FjWFD19%2BBLCBrioqLNqm0LyovlgbC1t3mtd0S%2FiV4n4Zn3w4vCfmhcLnAojyL19cTOxFva4h5rmQ7fuwsejzblqpvVApNtNm7nmpQSgo39Os9%2FRcXnVb6M7LGbfV7vCM%2FiiSYfmmZi8X6%2FIO116pyx8qeoUEFrXubpfFZhPJmGSxyDibWL5V0k2KAxu59ShpG0CjdBDd2iviVAilyfVNLrRXS6BJcp3gALZKldI931%2BcS0yArRBkig0XR7PDb2xCglL2D4Am%2B68%2FjM05Ph%2FplaDGvNPtJfptuzE7Kmw4goQytz60NutQ2sN40%2FLgXSYWdFkFXXjeHTlT5hIePKM7ycw%2F9r9xAY6pgHfiKF5dvqw4vIPJdl07rrbonuQVBd2l0Cel2kgj%2BNPlAUnLit%2BGtCts8UuJKCy4xIrOctpHA5%2BpRkt0yPJUg%2B%2FQUfBgGwkdim1FPDhm1aYqJE4nddO4J2%2Fy9PRAVuMojHjcO7jUL2iGeUONWEgfhXnW16COoXBdUvepkUVnoypTUWK9vPRd%2BvypLvSj3vihbUbOh1wBPtNQOyTK20nZHi0j2qCieNo&X-Amz-Signature=b8ca0c842cf718ba22050970518063bf99008aa7b0042e82aefa429527fd8ffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ6NRHP2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIF4DsrbThrfWOaDTnMV45f%2BXKlTX59kszY%2Fr%2FH7U63rEAiBxfNp4hI9Kziunw6BZJgc5v7FM9%2FvNLEubnR2jlhk8BCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMsoCIA0D5ZT9XUIySKtwDMnMk96af37cKkr1N8avIYMatQsgrFn19W%2F5dGViBJeFYe0PQIlF%2BFIdRRPmyMdSvYYS2kpZCfL90k%2BzQgHtxWX7XHRiPJs4V5RDqQQF1jpKNi5YR3S8%2BoMwhzWPpBTmDLXeqaEXMjQkQrH9JJhpkI8Q3MYAC1wP%2BzmaeU3DlHGhuAEzAEg9vmsTWsdlmweP5sL4nVJ1Th1fGOuMqjLyHqzSiPxJFgjKJOhzZBn7Y8g91Wl8jOBMG3gI3J16tzvMROMjMPtDQMkV%2BUBKSmJG%2BUONokhYC4tlELSxBE%2FjWFD19%2BBLCBrioqLNqm0LyovlgbC1t3mtd0S%2FiV4n4Zn3w4vCfmhcLnAojyL19cTOxFva4h5rmQ7fuwsejzblqpvVApNtNm7nmpQSgo39Os9%2FRcXnVb6M7LGbfV7vCM%2FiiSYfmmZi8X6%2FIO116pyx8qeoUEFrXubpfFZhPJmGSxyDibWL5V0k2KAxu59ShpG0CjdBDd2iviVAilyfVNLrRXS6BJcp3gALZKldI931%2BcS0yArRBkig0XR7PDb2xCglL2D4Am%2B68%2FjM05Ph%2FplaDGvNPtJfptuzE7Kmw4goQytz60NutQ2sN40%2FLgXSYWdFkFXXjeHTlT5hIePKM7ycw%2F9r9xAY6pgHfiKF5dvqw4vIPJdl07rrbonuQVBd2l0Cel2kgj%2BNPlAUnLit%2BGtCts8UuJKCy4xIrOctpHA5%2BpRkt0yPJUg%2B%2FQUfBgGwkdim1FPDhm1aYqJE4nddO4J2%2Fy9PRAVuMojHjcO7jUL2iGeUONWEgfhXnW16COoXBdUvepkUVnoypTUWK9vPRd%2BvypLvSj3vihbUbOh1wBPtNQOyTK20nZHi0j2qCieNo&X-Amz-Signature=c9c45efd714d00fad0f7c51d2446e811cbcfb8bd18efc44e8d7f64bda781ee8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ6NRHP2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIF4DsrbThrfWOaDTnMV45f%2BXKlTX59kszY%2Fr%2FH7U63rEAiBxfNp4hI9Kziunw6BZJgc5v7FM9%2FvNLEubnR2jlhk8BCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMsoCIA0D5ZT9XUIySKtwDMnMk96af37cKkr1N8avIYMatQsgrFn19W%2F5dGViBJeFYe0PQIlF%2BFIdRRPmyMdSvYYS2kpZCfL90k%2BzQgHtxWX7XHRiPJs4V5RDqQQF1jpKNi5YR3S8%2BoMwhzWPpBTmDLXeqaEXMjQkQrH9JJhpkI8Q3MYAC1wP%2BzmaeU3DlHGhuAEzAEg9vmsTWsdlmweP5sL4nVJ1Th1fGOuMqjLyHqzSiPxJFgjKJOhzZBn7Y8g91Wl8jOBMG3gI3J16tzvMROMjMPtDQMkV%2BUBKSmJG%2BUONokhYC4tlELSxBE%2FjWFD19%2BBLCBrioqLNqm0LyovlgbC1t3mtd0S%2FiV4n4Zn3w4vCfmhcLnAojyL19cTOxFva4h5rmQ7fuwsejzblqpvVApNtNm7nmpQSgo39Os9%2FRcXnVb6M7LGbfV7vCM%2FiiSYfmmZi8X6%2FIO116pyx8qeoUEFrXubpfFZhPJmGSxyDibWL5V0k2KAxu59ShpG0CjdBDd2iviVAilyfVNLrRXS6BJcp3gALZKldI931%2BcS0yArRBkig0XR7PDb2xCglL2D4Am%2B68%2FjM05Ph%2FplaDGvNPtJfptuzE7Kmw4goQytz60NutQ2sN40%2FLgXSYWdFkFXXjeHTlT5hIePKM7ycw%2F9r9xAY6pgHfiKF5dvqw4vIPJdl07rrbonuQVBd2l0Cel2kgj%2BNPlAUnLit%2BGtCts8UuJKCy4xIrOctpHA5%2BpRkt0yPJUg%2B%2FQUfBgGwkdim1FPDhm1aYqJE4nddO4J2%2Fy9PRAVuMojHjcO7jUL2iGeUONWEgfhXnW16COoXBdUvepkUVnoypTUWK9vPRd%2BvypLvSj3vihbUbOh1wBPtNQOyTK20nZHi0j2qCieNo&X-Amz-Signature=f2dadf019c593a4615b946c75ebbf2a81098487d0330ba5fe941af1589b718fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ6NRHP2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIF4DsrbThrfWOaDTnMV45f%2BXKlTX59kszY%2Fr%2FH7U63rEAiBxfNp4hI9Kziunw6BZJgc5v7FM9%2FvNLEubnR2jlhk8BCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMsoCIA0D5ZT9XUIySKtwDMnMk96af37cKkr1N8avIYMatQsgrFn19W%2F5dGViBJeFYe0PQIlF%2BFIdRRPmyMdSvYYS2kpZCfL90k%2BzQgHtxWX7XHRiPJs4V5RDqQQF1jpKNi5YR3S8%2BoMwhzWPpBTmDLXeqaEXMjQkQrH9JJhpkI8Q3MYAC1wP%2BzmaeU3DlHGhuAEzAEg9vmsTWsdlmweP5sL4nVJ1Th1fGOuMqjLyHqzSiPxJFgjKJOhzZBn7Y8g91Wl8jOBMG3gI3J16tzvMROMjMPtDQMkV%2BUBKSmJG%2BUONokhYC4tlELSxBE%2FjWFD19%2BBLCBrioqLNqm0LyovlgbC1t3mtd0S%2FiV4n4Zn3w4vCfmhcLnAojyL19cTOxFva4h5rmQ7fuwsejzblqpvVApNtNm7nmpQSgo39Os9%2FRcXnVb6M7LGbfV7vCM%2FiiSYfmmZi8X6%2FIO116pyx8qeoUEFrXubpfFZhPJmGSxyDibWL5V0k2KAxu59ShpG0CjdBDd2iviVAilyfVNLrRXS6BJcp3gALZKldI931%2BcS0yArRBkig0XR7PDb2xCglL2D4Am%2B68%2FjM05Ph%2FplaDGvNPtJfptuzE7Kmw4goQytz60NutQ2sN40%2FLgXSYWdFkFXXjeHTlT5hIePKM7ycw%2F9r9xAY6pgHfiKF5dvqw4vIPJdl07rrbonuQVBd2l0Cel2kgj%2BNPlAUnLit%2BGtCts8UuJKCy4xIrOctpHA5%2BpRkt0yPJUg%2B%2FQUfBgGwkdim1FPDhm1aYqJE4nddO4J2%2Fy9PRAVuMojHjcO7jUL2iGeUONWEgfhXnW16COoXBdUvepkUVnoypTUWK9vPRd%2BvypLvSj3vihbUbOh1wBPtNQOyTK20nZHi0j2qCieNo&X-Amz-Signature=0013b9093e1b1fb1604ddd8677daa56bd276d8b758531427b110ad517b6303cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ6NRHP2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIF4DsrbThrfWOaDTnMV45f%2BXKlTX59kszY%2Fr%2FH7U63rEAiBxfNp4hI9Kziunw6BZJgc5v7FM9%2FvNLEubnR2jlhk8BCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMsoCIA0D5ZT9XUIySKtwDMnMk96af37cKkr1N8avIYMatQsgrFn19W%2F5dGViBJeFYe0PQIlF%2BFIdRRPmyMdSvYYS2kpZCfL90k%2BzQgHtxWX7XHRiPJs4V5RDqQQF1jpKNi5YR3S8%2BoMwhzWPpBTmDLXeqaEXMjQkQrH9JJhpkI8Q3MYAC1wP%2BzmaeU3DlHGhuAEzAEg9vmsTWsdlmweP5sL4nVJ1Th1fGOuMqjLyHqzSiPxJFgjKJOhzZBn7Y8g91Wl8jOBMG3gI3J16tzvMROMjMPtDQMkV%2BUBKSmJG%2BUONokhYC4tlELSxBE%2FjWFD19%2BBLCBrioqLNqm0LyovlgbC1t3mtd0S%2FiV4n4Zn3w4vCfmhcLnAojyL19cTOxFva4h5rmQ7fuwsejzblqpvVApNtNm7nmpQSgo39Os9%2FRcXnVb6M7LGbfV7vCM%2FiiSYfmmZi8X6%2FIO116pyx8qeoUEFrXubpfFZhPJmGSxyDibWL5V0k2KAxu59ShpG0CjdBDd2iviVAilyfVNLrRXS6BJcp3gALZKldI931%2BcS0yArRBkig0XR7PDb2xCglL2D4Am%2B68%2FjM05Ph%2FplaDGvNPtJfptuzE7Kmw4goQytz60NutQ2sN40%2FLgXSYWdFkFXXjeHTlT5hIePKM7ycw%2F9r9xAY6pgHfiKF5dvqw4vIPJdl07rrbonuQVBd2l0Cel2kgj%2BNPlAUnLit%2BGtCts8UuJKCy4xIrOctpHA5%2BpRkt0yPJUg%2B%2FQUfBgGwkdim1FPDhm1aYqJE4nddO4J2%2Fy9PRAVuMojHjcO7jUL2iGeUONWEgfhXnW16COoXBdUvepkUVnoypTUWK9vPRd%2BvypLvSj3vihbUbOh1wBPtNQOyTK20nZHi0j2qCieNo&X-Amz-Signature=233413b3bea0d130edaf708d08a53fd47e8bfe412bcca0a0f8638b114cdc18ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ6NRHP2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIF4DsrbThrfWOaDTnMV45f%2BXKlTX59kszY%2Fr%2FH7U63rEAiBxfNp4hI9Kziunw6BZJgc5v7FM9%2FvNLEubnR2jlhk8BCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMsoCIA0D5ZT9XUIySKtwDMnMk96af37cKkr1N8avIYMatQsgrFn19W%2F5dGViBJeFYe0PQIlF%2BFIdRRPmyMdSvYYS2kpZCfL90k%2BzQgHtxWX7XHRiPJs4V5RDqQQF1jpKNi5YR3S8%2BoMwhzWPpBTmDLXeqaEXMjQkQrH9JJhpkI8Q3MYAC1wP%2BzmaeU3DlHGhuAEzAEg9vmsTWsdlmweP5sL4nVJ1Th1fGOuMqjLyHqzSiPxJFgjKJOhzZBn7Y8g91Wl8jOBMG3gI3J16tzvMROMjMPtDQMkV%2BUBKSmJG%2BUONokhYC4tlELSxBE%2FjWFD19%2BBLCBrioqLNqm0LyovlgbC1t3mtd0S%2FiV4n4Zn3w4vCfmhcLnAojyL19cTOxFva4h5rmQ7fuwsejzblqpvVApNtNm7nmpQSgo39Os9%2FRcXnVb6M7LGbfV7vCM%2FiiSYfmmZi8X6%2FIO116pyx8qeoUEFrXubpfFZhPJmGSxyDibWL5V0k2KAxu59ShpG0CjdBDd2iviVAilyfVNLrRXS6BJcp3gALZKldI931%2BcS0yArRBkig0XR7PDb2xCglL2D4Am%2B68%2FjM05Ph%2FplaDGvNPtJfptuzE7Kmw4goQytz60NutQ2sN40%2FLgXSYWdFkFXXjeHTlT5hIePKM7ycw%2F9r9xAY6pgHfiKF5dvqw4vIPJdl07rrbonuQVBd2l0Cel2kgj%2BNPlAUnLit%2BGtCts8UuJKCy4xIrOctpHA5%2BpRkt0yPJUg%2B%2FQUfBgGwkdim1FPDhm1aYqJE4nddO4J2%2Fy9PRAVuMojHjcO7jUL2iGeUONWEgfhXnW16COoXBdUvepkUVnoypTUWK9vPRd%2BvypLvSj3vihbUbOh1wBPtNQOyTK20nZHi0j2qCieNo&X-Amz-Signature=20776dd18ea089f1a3913ce973fccc8cc1cb1348b976d2234dcb343416c2ac1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ6NRHP2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIF4DsrbThrfWOaDTnMV45f%2BXKlTX59kszY%2Fr%2FH7U63rEAiBxfNp4hI9Kziunw6BZJgc5v7FM9%2FvNLEubnR2jlhk8BCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMsoCIA0D5ZT9XUIySKtwDMnMk96af37cKkr1N8avIYMatQsgrFn19W%2F5dGViBJeFYe0PQIlF%2BFIdRRPmyMdSvYYS2kpZCfL90k%2BzQgHtxWX7XHRiPJs4V5RDqQQF1jpKNi5YR3S8%2BoMwhzWPpBTmDLXeqaEXMjQkQrH9JJhpkI8Q3MYAC1wP%2BzmaeU3DlHGhuAEzAEg9vmsTWsdlmweP5sL4nVJ1Th1fGOuMqjLyHqzSiPxJFgjKJOhzZBn7Y8g91Wl8jOBMG3gI3J16tzvMROMjMPtDQMkV%2BUBKSmJG%2BUONokhYC4tlELSxBE%2FjWFD19%2BBLCBrioqLNqm0LyovlgbC1t3mtd0S%2FiV4n4Zn3w4vCfmhcLnAojyL19cTOxFva4h5rmQ7fuwsejzblqpvVApNtNm7nmpQSgo39Os9%2FRcXnVb6M7LGbfV7vCM%2FiiSYfmmZi8X6%2FIO116pyx8qeoUEFrXubpfFZhPJmGSxyDibWL5V0k2KAxu59ShpG0CjdBDd2iviVAilyfVNLrRXS6BJcp3gALZKldI931%2BcS0yArRBkig0XR7PDb2xCglL2D4Am%2B68%2FjM05Ph%2FplaDGvNPtJfptuzE7Kmw4goQytz60NutQ2sN40%2FLgXSYWdFkFXXjeHTlT5hIePKM7ycw%2F9r9xAY6pgHfiKF5dvqw4vIPJdl07rrbonuQVBd2l0Cel2kgj%2BNPlAUnLit%2BGtCts8UuJKCy4xIrOctpHA5%2BpRkt0yPJUg%2B%2FQUfBgGwkdim1FPDhm1aYqJE4nddO4J2%2Fy9PRAVuMojHjcO7jUL2iGeUONWEgfhXnW16COoXBdUvepkUVnoypTUWK9vPRd%2BvypLvSj3vihbUbOh1wBPtNQOyTK20nZHi0j2qCieNo&X-Amz-Signature=665803e55ab0f0ae4369d0e69fd56b2b436ea19ccfe0bdcf46f12fe75dbbeec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ6NRHP2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIF4DsrbThrfWOaDTnMV45f%2BXKlTX59kszY%2Fr%2FH7U63rEAiBxfNp4hI9Kziunw6BZJgc5v7FM9%2FvNLEubnR2jlhk8BCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMsoCIA0D5ZT9XUIySKtwDMnMk96af37cKkr1N8avIYMatQsgrFn19W%2F5dGViBJeFYe0PQIlF%2BFIdRRPmyMdSvYYS2kpZCfL90k%2BzQgHtxWX7XHRiPJs4V5RDqQQF1jpKNi5YR3S8%2BoMwhzWPpBTmDLXeqaEXMjQkQrH9JJhpkI8Q3MYAC1wP%2BzmaeU3DlHGhuAEzAEg9vmsTWsdlmweP5sL4nVJ1Th1fGOuMqjLyHqzSiPxJFgjKJOhzZBn7Y8g91Wl8jOBMG3gI3J16tzvMROMjMPtDQMkV%2BUBKSmJG%2BUONokhYC4tlELSxBE%2FjWFD19%2BBLCBrioqLNqm0LyovlgbC1t3mtd0S%2FiV4n4Zn3w4vCfmhcLnAojyL19cTOxFva4h5rmQ7fuwsejzblqpvVApNtNm7nmpQSgo39Os9%2FRcXnVb6M7LGbfV7vCM%2FiiSYfmmZi8X6%2FIO116pyx8qeoUEFrXubpfFZhPJmGSxyDibWL5V0k2KAxu59ShpG0CjdBDd2iviVAilyfVNLrRXS6BJcp3gALZKldI931%2BcS0yArRBkig0XR7PDb2xCglL2D4Am%2B68%2FjM05Ph%2FplaDGvNPtJfptuzE7Kmw4goQytz60NutQ2sN40%2FLgXSYWdFkFXXjeHTlT5hIePKM7ycw%2F9r9xAY6pgHfiKF5dvqw4vIPJdl07rrbonuQVBd2l0Cel2kgj%2BNPlAUnLit%2BGtCts8UuJKCy4xIrOctpHA5%2BpRkt0yPJUg%2B%2FQUfBgGwkdim1FPDhm1aYqJE4nddO4J2%2Fy9PRAVuMojHjcO7jUL2iGeUONWEgfhXnW16COoXBdUvepkUVnoypTUWK9vPRd%2BvypLvSj3vihbUbOh1wBPtNQOyTK20nZHi0j2qCieNo&X-Amz-Signature=4b77f46c151de5f8f9a0e8fe86b08992a5c8830b8643506ecbe44dc39a787a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ6NRHP2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIF4DsrbThrfWOaDTnMV45f%2BXKlTX59kszY%2Fr%2FH7U63rEAiBxfNp4hI9Kziunw6BZJgc5v7FM9%2FvNLEubnR2jlhk8BCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMsoCIA0D5ZT9XUIySKtwDMnMk96af37cKkr1N8avIYMatQsgrFn19W%2F5dGViBJeFYe0PQIlF%2BFIdRRPmyMdSvYYS2kpZCfL90k%2BzQgHtxWX7XHRiPJs4V5RDqQQF1jpKNi5YR3S8%2BoMwhzWPpBTmDLXeqaEXMjQkQrH9JJhpkI8Q3MYAC1wP%2BzmaeU3DlHGhuAEzAEg9vmsTWsdlmweP5sL4nVJ1Th1fGOuMqjLyHqzSiPxJFgjKJOhzZBn7Y8g91Wl8jOBMG3gI3J16tzvMROMjMPtDQMkV%2BUBKSmJG%2BUONokhYC4tlELSxBE%2FjWFD19%2BBLCBrioqLNqm0LyovlgbC1t3mtd0S%2FiV4n4Zn3w4vCfmhcLnAojyL19cTOxFva4h5rmQ7fuwsejzblqpvVApNtNm7nmpQSgo39Os9%2FRcXnVb6M7LGbfV7vCM%2FiiSYfmmZi8X6%2FIO116pyx8qeoUEFrXubpfFZhPJmGSxyDibWL5V0k2KAxu59ShpG0CjdBDd2iviVAilyfVNLrRXS6BJcp3gALZKldI931%2BcS0yArRBkig0XR7PDb2xCglL2D4Am%2B68%2FjM05Ph%2FplaDGvNPtJfptuzE7Kmw4goQytz60NutQ2sN40%2FLgXSYWdFkFXXjeHTlT5hIePKM7ycw%2F9r9xAY6pgHfiKF5dvqw4vIPJdl07rrbonuQVBd2l0Cel2kgj%2BNPlAUnLit%2BGtCts8UuJKCy4xIrOctpHA5%2BpRkt0yPJUg%2B%2FQUfBgGwkdim1FPDhm1aYqJE4nddO4J2%2Fy9PRAVuMojHjcO7jUL2iGeUONWEgfhXnW16COoXBdUvepkUVnoypTUWK9vPRd%2BvypLvSj3vihbUbOh1wBPtNQOyTK20nZHi0j2qCieNo&X-Amz-Signature=2a3b3576743efc8ba4d34abb165124c8ad9dfec8f9bce70d1963b51ceb0e8d9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFYLT7ND%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCFDs9Z9nE915HW1bu8bHCYoqlKX5gOdO6YzySb%2BPXjMgIhAM0hyL%2BUltEu6BVpY%2BdPHCG%2FlTmHeCPRwVKbICn80FR1Kv8DCGIQABoMNjM3NDIzMTgzODA1IgwoP0Q2HURc5Ij8%2BPkq3AMnCEidpsYetffRg%2FgnsLzJxogs3WbRKAQkrxzte8mwrIGu6%2Fc5rRTMfU1TdiovhCpDMPfRZyWp9Tjp%2BwmOqGTa8kIWeBi2H2GpYqRZ24PR0m3xcGA%2Fw6OTtl5Gv6rn%2B8HREZlXokg117rv6QqGtPeVWm8uewbRTaIgdV4Ig6qWbwdPhodwcZVCYU99deEZerUg8ugL2jLjGQFNN4Uwg7RiX5riCJfdyd1HJpIVl9705VkxVcyMi8T%2B%2F65IJInfa%2FO2tteKkD5z1I%2BJk%2BE%2Fd7uYwmfD%2Bl1rzlPFmZDkHqO4vybmdRPEhXAag%2FIgwX1UBfsqKD9PTzhYAciciAufH313awWjxpk%2F9Vl4340LvjyL7hQrk6BTrW4rEi1BFyDz4LpbyZuNYuDpwylfrszs79kGd4AWR0Qh2TvmfFLbf9kF0WBBg3LFZev2sF%2F5Ik91K5zaVwHtvBdMZ4%2B%2BtXmJCEAJwNutXozvDHPWW3NRiy%2BB9an8sVqgzwGd5rOuYMAM3pdblisCC5fiD9cmf72Rgu%2BHz6zM0tQpME4rSPR9fMLrBeHlRNyJDlVdJK6HRJmyeqJcTpDEdcMn31oq8nUo9WWxRrgHfb5EIMFdUAqfTPEfjeF9qvUCvkdKHQhiXjCs2v3EBjqkAeAMA%2FH8BuhSBanjtMXg45l6SdOL8rY6JyHBWZ8lKTCqbxzEz%2B9kZw%2BN7POFfymICwPDsIsA6niFpjhUo8iiIbd%2FNCJG%2FlZQw%2B2OF8PNJFKoxAKl0Ny0emXg%2BGPQp7x6e0V3VRZVOEpFtwc96ALD0eQ7tg16udKvIpn1OnniB6KZzaRNYt30J%2Fvg9hdIfhDl29hfry%2B2lqj%2BeMy6xVjHEEYSqGe4&X-Amz-Signature=1feb22fcb32ee99ba92fe8aa811d49d02ba56da7b5078db158453c727b82df24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GFOZBMG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCID2bjF7a2p541uLWwj4s5Zv7hWRNM6jqlpt4dpC12GFuAiEAupOxvMHbnnst%2B%2FYQORQ46cgptuz%2FPsOMs76jxhf%2BEpwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCw%2FO3eiITwyZI0Y8yrcA0KTiIcVlhodwVXSrFbUONZsiiYqpOkCj6HdBcYrpBAqbblux4e062RMVJLVvJkyzm2fxLiAyYRhPLeW9Bh9eu7N8YeekdJzXLirQkCPdOaXxtw3bJWRwb%2Bg0J0aS%2B5CDAVweu9SimAptylWjhc1IodL0s4fVp0%2FdlzLjwhloBruRLmgHxoyyh0nFS04ULaMRXBujWTeMHV%2F7yOHebqSGIBSUwaSl2qIvGaO8mLNt0n3C%2FgZZXAs4PhuawyIIzbqS%2FNzYmn8kuZqu7fh1dS5PCE7Es8My8b6dvFrjo7kQ%2BIbI%2FAtX18zf3UndSZUg0g%2B2ShOrqxWS1%2BNeCJhXF%2BAvbEQ3kRaIMgUHL2tM%2FcoIsGoqrwQOou0tYFrNZvy3YyuIFvlIZ6sXSMQkd%2FfZmRUclXtjQAOJ7F2o%2FHAHryBAu0iMwYXHyt%2FJVfxgBETUrkC1MrV8FgGfaTQ39XsEC0tuW1%2Bc2%2BM4nXGtBuOuS11u8BKc6Fp%2FsFyn4AmW5tSxEwamvlKHTnXQAzc5gF87Phit8VT%2FgAgUF8GWml1Wzy4O366TmRI0zDqGxTcSDzsDohl2KG3U017y3Zccdqfjz2Lecq73Ji%2BxA1l0nRYvayZL37bRKfUEtmML%2FYk3utjMMnb%2FcQGOqUBHZWx887vjdtbkCT4ugC2xawQi%2FMWUrBQTX9qlVQZhJxNVPIuCm%2FzMM5DLpyIv8yhyAfybFvP2FX2ZEqFTVY7cokEMRk1susNQd7K5K9VnpN7R0TSThT1mt5kFOvLehXVY2otL2I%2BfvohtZ3s590v0RhMnhzm2hyx2uNGmMJe9MHpPnuEQ7e3EE9ruTDrE6hJvKB8QPeN8QJ7JCJ%2F1f8eJ3BZvWhq&X-Amz-Signature=fceff76cefdd386ef5454f243fea071c0f81a901de57dec9b395ecee1ace0622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBXNWTTN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCwYG6Gu1X52dAWBL7cgyGdTM8fpz5EhApkweSj7rappwIhAIhoKvKU2lpp2hutDVtvoCqja8lpz0AgM%2FtnhTyXMriIKv8DCGIQABoMNjM3NDIzMTgzODA1IgwG%2FOIbvmhjXa%2BlI1Yq3AOhaMFm4SeGixwzn5O5voaT%2F%2FMKp37cTQT7OgTHIQElBNSKQPh37RVaumJXH46hhv18%2B9PMmlo7dwgbRYNVl1z6k%2BGQv7exwCkzebQsI%2Bd8jZwPi6mFIQ4SC%2B77cYqfX57%2B0Y3%2F7HN3bbHG0LwM1rY%2BsBH%2Bz16JOTbZ3dkTMnNV5xCj2oPtVRRZaqce69s7Y8UWkFn9tcR8ioJcn4sgLcniYzTqwktbfsQzqJba6cZM70scYpPkDGdlx69JZ3Ql5n3%2FUnc8faYjWLFu6hNqpyh8rP3q6Kyjc2%2Fc9Unh11oyNaKZzTi%2BIREYM%2BZUAgn7pan90TJ9sAjJz81uR4Bl0knhftmEDQ3%2B0Jg56ZAk34cAI0rLKPcqNeOxfp4bopAig9mDyLJpe1kDCBmKffY%2FsoJ%2BXjlY359KRCzqhlf0EQsF5le7m7KdTJrio7qSkMYw3iEnz3wdARbRhlcpnFwSr7BH2HgVnFrRUABZ%2BBW%2BBuN0oHDXZuvsaATa301MBX1yvigoJMBwIsMZKXfmtWPzaJss%2F5pL1NisssQ4loKsF8MKBCQEyh5xrVVQDeyTLQX9%2Bba71ZC1WCWPQCowVkTdpI43CJaJzuSFYlYLu6cOMjJVr8c4nBdne4nL6Wn7ETCC2%2F3EBjqkAc%2FFo%2FYK%2BYuU4YTJOVO1LfjImpoobViqpC2E8iSEObTcq9RIvufpfudCspTbiyNOZRLlzY0F0kWP%2F8BsiNyRik88B4fnSyi3cn%2BcPA3EEseNSCp80k%2FVgn3qNabTs82LNhoLb5eiywGwVaKpBu%2Bv7vO9Bl0axhfkcvZ4yF8eBN0SSxIroROCLPKmTgzlENJVn96r3VGkpetgtkhpty0W8KXYb%2FyS&X-Amz-Signature=83093785d8a7d4c3cff8903d06a054c4e1b22f4b2ad472f462c2b9b89864e260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ6NRHP2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIF4DsrbThrfWOaDTnMV45f%2BXKlTX59kszY%2Fr%2FH7U63rEAiBxfNp4hI9Kziunw6BZJgc5v7FM9%2FvNLEubnR2jlhk8BCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMsoCIA0D5ZT9XUIySKtwDMnMk96af37cKkr1N8avIYMatQsgrFn19W%2F5dGViBJeFYe0PQIlF%2BFIdRRPmyMdSvYYS2kpZCfL90k%2BzQgHtxWX7XHRiPJs4V5RDqQQF1jpKNi5YR3S8%2BoMwhzWPpBTmDLXeqaEXMjQkQrH9JJhpkI8Q3MYAC1wP%2BzmaeU3DlHGhuAEzAEg9vmsTWsdlmweP5sL4nVJ1Th1fGOuMqjLyHqzSiPxJFgjKJOhzZBn7Y8g91Wl8jOBMG3gI3J16tzvMROMjMPtDQMkV%2BUBKSmJG%2BUONokhYC4tlELSxBE%2FjWFD19%2BBLCBrioqLNqm0LyovlgbC1t3mtd0S%2FiV4n4Zn3w4vCfmhcLnAojyL19cTOxFva4h5rmQ7fuwsejzblqpvVApNtNm7nmpQSgo39Os9%2FRcXnVb6M7LGbfV7vCM%2FiiSYfmmZi8X6%2FIO116pyx8qeoUEFrXubpfFZhPJmGSxyDibWL5V0k2KAxu59ShpG0CjdBDd2iviVAilyfVNLrRXS6BJcp3gALZKldI931%2BcS0yArRBkig0XR7PDb2xCglL2D4Am%2B68%2FjM05Ph%2FplaDGvNPtJfptuzE7Kmw4goQytz60NutQ2sN40%2FLgXSYWdFkFXXjeHTlT5hIePKM7ycw%2F9r9xAY6pgHfiKF5dvqw4vIPJdl07rrbonuQVBd2l0Cel2kgj%2BNPlAUnLit%2BGtCts8UuJKCy4xIrOctpHA5%2BpRkt0yPJUg%2B%2FQUfBgGwkdim1FPDhm1aYqJE4nddO4J2%2Fy9PRAVuMojHjcO7jUL2iGeUONWEgfhXnW16COoXBdUvepkUVnoypTUWK9vPRd%2BvypLvSj3vihbUbOh1wBPtNQOyTK20nZHi0j2qCieNo&X-Amz-Signature=02aac60f9260cb93270c0f3212e1a4f87774fc76e004c292bb8e37f098f80a32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LVN7OS3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIAtz59dKshq8yx5pHQlanNSeTpe9DASHKg2GKKcUhnOkAiEAzLwKwbY7ynD%2BGr8Fm0j%2B1Q%2B1dp6n6Nn%2FdyYqACcydNwq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDFaLRBBt81laecTf4ircA0aGzlalfbzKWbTefUmOpToBTaHLpMdvHO19HqsQsAAkAKUcPwD%2FJDfOWDxcHzNLuqsXXgPRrOg6THCNroxMD%2BfFmWECeXJmG6XqmQJqR3D9rVuPZ86l4e6Itgb%2FqNavc1rcjELfyDp6hq6JPUZEHU%2BaaLo0LMhYcURqdd%2BlQ4tEn7d%2BTEAK6vgM%2Bo%2B1nxi1gQp3c2%2BtImGB98KHzMPMrlqeHix%2BwDDJmPAZMOQMygrtUcjqvKIBg62PtqW0YzqHyk7z56g3Dxunk5btSt6uhfXVOcECmikgVLVMU42%2B2csWw0DTD3zObm8hLgO%2BMhfoN4f9BnRXs78RMF6PV4Ao4fo6kboPDcwAKCPtThhxuOxVrxRXgTS%2FtYb5a8ihCtZzAAvxskRwzCjNcmN9fHbuyiQNjsGib8w2FA5fQoO5%2B1nm9828LsiM%2BBhiQAEGazPYb%2BjRAiKc3Gl%2FPqlQ%2FIXbeTGM9dphuOG2qnB7zESiF0AlYnhmxUS55BKSzY2Zk%2FQ5oSH%2FQ2YWLHG4D2mMai2E65R%2BLJ4TsJ6LdvGBYxvf82qzHHeK7QIUWoBFYBn6iCj9MQ%2FUf0%2BnOT95kFAX3yX9RyUb6lM4fUdi2vRyLsohVUBO0vc1jjvdJUtf6IP6MPna%2FcQGOqUBvSoN%2BuUCPqjNxVSnSZeAPbL8590YBu5r5YylBqf7ZjIpn4%2Fb6FV1glkPtgr3iLwUGAcg0H4dDNmspq%2FLu89gOP8FI2jsdcw6ZCTPhwMwypPADqwLTjCnCjgnEzlSdQEIdBzatcHm2MumMMSvBGEi%2BoP%2BKaDpYaeFzJvN7DhuDEv0ennXWzlaLOOcx%2BYwVfgK4ZIHaltV1oJGl7%2FtgpjLxFsla6p9&X-Amz-Signature=07c1791a2eb35b054d638505e4db1ac650cef376285e59654fc36aacf35b4c3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ6NRHP2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIF4DsrbThrfWOaDTnMV45f%2BXKlTX59kszY%2Fr%2FH7U63rEAiBxfNp4hI9Kziunw6BZJgc5v7FM9%2FvNLEubnR2jlhk8BCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMsoCIA0D5ZT9XUIySKtwDMnMk96af37cKkr1N8avIYMatQsgrFn19W%2F5dGViBJeFYe0PQIlF%2BFIdRRPmyMdSvYYS2kpZCfL90k%2BzQgHtxWX7XHRiPJs4V5RDqQQF1jpKNi5YR3S8%2BoMwhzWPpBTmDLXeqaEXMjQkQrH9JJhpkI8Q3MYAC1wP%2BzmaeU3DlHGhuAEzAEg9vmsTWsdlmweP5sL4nVJ1Th1fGOuMqjLyHqzSiPxJFgjKJOhzZBn7Y8g91Wl8jOBMG3gI3J16tzvMROMjMPtDQMkV%2BUBKSmJG%2BUONokhYC4tlELSxBE%2FjWFD19%2BBLCBrioqLNqm0LyovlgbC1t3mtd0S%2FiV4n4Zn3w4vCfmhcLnAojyL19cTOxFva4h5rmQ7fuwsejzblqpvVApNtNm7nmpQSgo39Os9%2FRcXnVb6M7LGbfV7vCM%2FiiSYfmmZi8X6%2FIO116pyx8qeoUEFrXubpfFZhPJmGSxyDibWL5V0k2KAxu59ShpG0CjdBDd2iviVAilyfVNLrRXS6BJcp3gALZKldI931%2BcS0yArRBkig0XR7PDb2xCglL2D4Am%2B68%2FjM05Ph%2FplaDGvNPtJfptuzE7Kmw4goQytz60NutQ2sN40%2FLgXSYWdFkFXXjeHTlT5hIePKM7ycw%2F9r9xAY6pgHfiKF5dvqw4vIPJdl07rrbonuQVBd2l0Cel2kgj%2BNPlAUnLit%2BGtCts8UuJKCy4xIrOctpHA5%2BpRkt0yPJUg%2B%2FQUfBgGwkdim1FPDhm1aYqJE4nddO4J2%2Fy9PRAVuMojHjcO7jUL2iGeUONWEgfhXnW16COoXBdUvepkUVnoypTUWK9vPRd%2BvypLvSj3vihbUbOh1wBPtNQOyTK20nZHi0j2qCieNo&X-Amz-Signature=0efd9992eff5dec1ad5e6caddd02f18a952081da008013014689e0e63d305c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2E5W7XC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDbuJq255v87qvcgM4H4AhWPB%2B6HkQf1q0jgVMVd5MCUQIgXsajztZK2VkVhNRRrZpMzLTrfpeDjBmSZ7skkWcbHhEq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDBWXL5Lf2r42bCf6eyrcA%2BeT389cEy5RUv%2BJVbUm67DOaBgh4Q2hbicpWi9iC2%2FHNpukejnVy3h0HsJ3wlf7Sjn5qGYFbAx9xFAFwzFQYwXVzGiS0h50dUTDxj%2FrNhVg962M5hf2%2BEVaYB2qqyxFAlRReZyS1rShF7XAhGjslDOgB69QlavqLsneLsmzBgj58q%2FI%2Fz65zov0MUfNY4WCV%2FQREtpIxPsYX7q9ConvpKt8Abj4F3fxCSYt4tGytnsmQ0xn2ITcopAQ6DAovStEwA8yIGArZHkv41fa92ylv8P4B188PmKMHj3xbfbkhZmCXU5%2BjV33foz8l0W9IoOtzYQmNq1FzYPaAtmsjFenkJRprvyq4D7rCNn9C635P0SyhICD55h0zD900xHwNc1PDvKwpU4PDxi4BSDGrXT%2BdUs9UZ3UpZYfSKWMrTWRGBB53R1neMWF3VuK0dptnXFldnCyXN%2FP4cRkVn8FFhAVnDBJy1q72O9HqZTM1aaneJvmS83iKYx0Cy1KnpV4GDwELhDKeMkg6NWoW4P2aau1HJyLGwy1n2rgQxr0rgLJwOjLUxw7c0X%2BMzFDaPqKDnOs7z%2BRDfMM328hxa8kwumdFp%2FWAgJo9am%2BV570e1ZCwW%2Bbl2m%2F96PINK%2BYvDLcMITb%2FcQGOqUBeZwstGpymxGarvPnGJqLXevYORJ3thMcXJREfQi37YXO%2FKrrZZnAowOAukJsvmcqLcuz%2FdT59GUIHWlgvQPy%2BJh%2BBM2rwPvb%2BjYf%2Ba%2B0oKXc5w%2F4xSOFqJ2nVR2NTVx0l4fTeTOoSmC17JSeArmtCUMYUpY3%2F52yJU8pB4J5ZycKZ99QwchWOIU49EouR%2B%2BXMZ5HZ4kOSHPt%2Fgy0p8YefhuBaYl4&X-Amz-Signature=7b70ad1cd184f6020a95a8ac829de809eaca1f3f17f79eb103ac0057ad7e4c97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ6NRHP2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIF4DsrbThrfWOaDTnMV45f%2BXKlTX59kszY%2Fr%2FH7U63rEAiBxfNp4hI9Kziunw6BZJgc5v7FM9%2FvNLEubnR2jlhk8BCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMsoCIA0D5ZT9XUIySKtwDMnMk96af37cKkr1N8avIYMatQsgrFn19W%2F5dGViBJeFYe0PQIlF%2BFIdRRPmyMdSvYYS2kpZCfL90k%2BzQgHtxWX7XHRiPJs4V5RDqQQF1jpKNi5YR3S8%2BoMwhzWPpBTmDLXeqaEXMjQkQrH9JJhpkI8Q3MYAC1wP%2BzmaeU3DlHGhuAEzAEg9vmsTWsdlmweP5sL4nVJ1Th1fGOuMqjLyHqzSiPxJFgjKJOhzZBn7Y8g91Wl8jOBMG3gI3J16tzvMROMjMPtDQMkV%2BUBKSmJG%2BUONokhYC4tlELSxBE%2FjWFD19%2BBLCBrioqLNqm0LyovlgbC1t3mtd0S%2FiV4n4Zn3w4vCfmhcLnAojyL19cTOxFva4h5rmQ7fuwsejzblqpvVApNtNm7nmpQSgo39Os9%2FRcXnVb6M7LGbfV7vCM%2FiiSYfmmZi8X6%2FIO116pyx8qeoUEFrXubpfFZhPJmGSxyDibWL5V0k2KAxu59ShpG0CjdBDd2iviVAilyfVNLrRXS6BJcp3gALZKldI931%2BcS0yArRBkig0XR7PDb2xCglL2D4Am%2B68%2FjM05Ph%2FplaDGvNPtJfptuzE7Kmw4goQytz60NutQ2sN40%2FLgXSYWdFkFXXjeHTlT5hIePKM7ycw%2F9r9xAY6pgHfiKF5dvqw4vIPJdl07rrbonuQVBd2l0Cel2kgj%2BNPlAUnLit%2BGtCts8UuJKCy4xIrOctpHA5%2BpRkt0yPJUg%2B%2FQUfBgGwkdim1FPDhm1aYqJE4nddO4J2%2Fy9PRAVuMojHjcO7jUL2iGeUONWEgfhXnW16COoXBdUvepkUVnoypTUWK9vPRd%2BvypLvSj3vihbUbOh1wBPtNQOyTK20nZHi0j2qCieNo&X-Amz-Signature=d686f3cc0562724bfd599dc35b47ecddd7852fa7a4899f4deac3089198d1a944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAIMK6BQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIB9bGL2JIAUg1w1QuKd1OCS16OszZCPlVSDBMY9DzbvsAiEAgUCzfQb57DN01fxHgVZwJMWb29XhLn4%2Fc1oc%2BgQAd18q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDGwwsaBF3KeK77htVSrcA7zVtafp%2FDa%2FxESFm4HoRBr3%2F3rrLqTljXsvlxaFxS2k1mauTpPFnizOPBF0vHQQfSZO40KAjVShfWGEeTSAIeIwjiTmN2cEmsvvL8ynNDuPqzLADqeN9tA0I4CE3az4U3vEcPVRmYvqTr9CYKtHhXteMiKmv6D7CGnUganjklGjNi6gWVHcOp37IHRk3ccOPTjLIwM%2BEov%2F4whNY35a1sG6nm5l56IIlW5msynKkzyzhuK8Kyg594TAwNxwcyEddPVAacPyKBMZkcZU6OHCeQqV9R3TBWagKVv0tyxYumkM1CwGaeIICnY4lDVmaz3cTT5W6n3xU5JmNBW98h2Ty5adGJ19uSevqJbOLwcYwbcfWA0SIjcHLW9g6jE%2FNe11gU7fIBcAaIY7LPEl6e3vnMwXwUMUyC6BNMiB7n7okj7iQ7LZc4U9u7Ul1t5ipoBJN3LHCWX%2Fe3LUHWqcnYcGnC5H2OM5lrGFtfWhr6LHU51B3GiG2B7FlCK%2FYrWqJ%2BKXBzxeJfYcIxy9zC9XuI1YPxdTjgo%2BHGNIma9mamu7HAdqhem0fR5hjiSu7K9TUiQd%2FlZiXD8YLIWMQ0%2FW8rDgPN%2BfRZXTBnSKx2f225Ts4fC8CNtVTRk45zHXP600MLXa%2FcQGOqUBMfCQAlFdIL%2FfsF5leOrZxPnvndDUkX83CWyH7PgLKOAqC0sQF82T3D1THNNwTb8vg25AcIQU50ddgBMJMp8JAfVUe%2FtQ8I9a57WS3L4Y6x%2BmDRORbg%2BsnYzYxbA6gK66NRvS%2FqqF%2Fwo%2FfMVA6keOSGxv8c9vyH6vce9yauxu4lXmEZ8FMOhVdlFsKnad9yIxXzn%2BplCiKjO9snUhqkwTIqW%2BJBXF&X-Amz-Signature=63dadd4abfcff15dd0e6b0785c97268c9819740d9295637157a4494fc3c976a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ6NRHP2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIF4DsrbThrfWOaDTnMV45f%2BXKlTX59kszY%2Fr%2FH7U63rEAiBxfNp4hI9Kziunw6BZJgc5v7FM9%2FvNLEubnR2jlhk8BCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMsoCIA0D5ZT9XUIySKtwDMnMk96af37cKkr1N8avIYMatQsgrFn19W%2F5dGViBJeFYe0PQIlF%2BFIdRRPmyMdSvYYS2kpZCfL90k%2BzQgHtxWX7XHRiPJs4V5RDqQQF1jpKNi5YR3S8%2BoMwhzWPpBTmDLXeqaEXMjQkQrH9JJhpkI8Q3MYAC1wP%2BzmaeU3DlHGhuAEzAEg9vmsTWsdlmweP5sL4nVJ1Th1fGOuMqjLyHqzSiPxJFgjKJOhzZBn7Y8g91Wl8jOBMG3gI3J16tzvMROMjMPtDQMkV%2BUBKSmJG%2BUONokhYC4tlELSxBE%2FjWFD19%2BBLCBrioqLNqm0LyovlgbC1t3mtd0S%2FiV4n4Zn3w4vCfmhcLnAojyL19cTOxFva4h5rmQ7fuwsejzblqpvVApNtNm7nmpQSgo39Os9%2FRcXnVb6M7LGbfV7vCM%2FiiSYfmmZi8X6%2FIO116pyx8qeoUEFrXubpfFZhPJmGSxyDibWL5V0k2KAxu59ShpG0CjdBDd2iviVAilyfVNLrRXS6BJcp3gALZKldI931%2BcS0yArRBkig0XR7PDb2xCglL2D4Am%2B68%2FjM05Ph%2FplaDGvNPtJfptuzE7Kmw4goQytz60NutQ2sN40%2FLgXSYWdFkFXXjeHTlT5hIePKM7ycw%2F9r9xAY6pgHfiKF5dvqw4vIPJdl07rrbonuQVBd2l0Cel2kgj%2BNPlAUnLit%2BGtCts8UuJKCy4xIrOctpHA5%2BpRkt0yPJUg%2B%2FQUfBgGwkdim1FPDhm1aYqJE4nddO4J2%2Fy9PRAVuMojHjcO7jUL2iGeUONWEgfhXnW16COoXBdUvepkUVnoypTUWK9vPRd%2BvypLvSj3vihbUbOh1wBPtNQOyTK20nZHi0j2qCieNo&X-Amz-Signature=9c895c47b585117a3730fbff130511fe423b9ce0d7ebda8ccb332cf227807690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHW6MHE6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCnfH3A780JB%2BylrV6JVg63qQ9Goy3iTWb%2BPYtU3kePGwIgPPlmOXYi5Vk5r1FFpvFi9dIQFq%2FudKkW7wmKv9DCXpUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGd3WzNjXQZH3FTkjircA5cy2zcGEXSTidi3R4y80Tn6AhdpBckN1gVv5x9y%2BSofOQbPqFLwDmtbzSYbin8luYwQS2KmmOhrxhpSU2%2BSaF7%2BK4YXAk5QIYwgR0oWf6o7tPY6Mm3dZH46UBbuJ0y7BEGQdWMnMMAssLss%2BLdboCPqCrhD3E9NCYBJV1sjElhtbCCBP3iBx%2B9ShzrBWREOH89ebBkOTZiYujvELDG4Yt62y6esIYY2mMZ4XAD0Cg%2Fy%2BAOvdYmxkjS19VYSb3xSs1nhCFpe2kYWeboN2lxc6iliN2mdqZfvczevWNpLmD%2Fihlt9nS42wiPK0kGY5nXfMbBAn0GfqW4GzJrLWuExF%2Fd3mgJQ7NnBd7NMf5O%2Fe3Y2p%2B3ibeCrlGASK8WZgV6molCAHTah%2BC2O21lyrVIFAQ2RXrtaTZ29lnvZ5GMWaKLTztv8XeOik2tSMfPTCExuBArEWk1Dml5ppSamxoppWCBeqtqGXMGr%2BYTxzpn59UrU1eId%2Bbg2pfp2Jyl%2FwUvtX%2F5hzDOWpVRgTOBBLMHxJwi%2B2cNn6H%2FcFjCDRcIkbGLacM%2BHDkM%2F7km0bbOnVedDYu%2FuuPHSYZ9hgRFIbLjxEZz7zNw5%2BF3xzqgRHM25BCwFTNjj%2F%2BT2T3a5nKrxMKLb%2FcQGOqUBnJO8klWKKAV%2BkNi7acLQG9SNOUPTOhjdm5%2F%2B6XlCSDSC%2BZopRQAJBT2jsxu3iF8hXdBcNxJMw7YiqMkE%2BMJI%2BmMnHVWc6OC%2B%2F0KGY%2B8rboJjP2r%2FHcKwaW8zb06efZT7JTNxf9k8nMKhOY20%2FzfIDIUTueOJbQIUslgLF%2BpAhAu%2BOJWiOMWJzRryAmguE%2BbQ97W%2FpEomEGP8eL67OrxyykoCZPDf&X-Amz-Signature=5cc1df27584fc96e2b00ea6b9be7aa32eb6a2f987168305c122a8459b3c35661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLELDKTV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC6TTKUhrW7wlMKrE6RfBOVELKv4upbcEPAeIFHpNuZVgIgZdHLlURZbF553P3zYZ%2FsTKNVoS84a4%2Bm6PhN%2B6%2FpxKsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPrezfDff3ZZigiLSircA5yLQM4R8KMmerzozbApP9EVGtzgZzCd5JXh1ZWmjIhWoWzLX%2Fn61ppWumoGvjih0c%2F6EozH4j%2Fx0gBasNBWPT5km8Jfgu2UXcfcQ1icTcRO33msYuYj77azq8cwHlOhbOaCOXSOvfknYf3VhnrOt3G7hvvXR6rMBQo6DiO2kFF7MTCpYocoen7pVIO2M98PK2qY6TNeeJiM6A%2BqqB3TKa1h5ZHh8KOk0tWQp37QGsPE7K0hohNG%2BM7JaRcyhII0QFaHGFWbTuNKWo9x0pMxEGrYPjPHymGFlg8cH6HsTG%2BKsGS61Z34dI7XJHFyCFRrIaccnkXVXqyxfpPQxq7D41BTTQBlIMuPmkJM5jB0S7jzpHIxm8XRGTRKV7%2FzsgRxkuWYw4KwIiix4t1AFmvUjiDfsEqp60Eyw8ZTtxesf9be6S64j1IJLBYKnDAfAxlK8ZaWwCOuNATCGSlkAlRUIdU3T2DbZXvzzc9ObZ5oAxB4bJ1TTED73%2FQi1inP7hID0I6XaQFmCyTBHA23IXP2%2Fpb9bc%2FDfiKSAXxHH8Dtd7IVWfuebL414BZ%2B9xlKwHsupvKum7UpijkyJiW%2FzJEl5bkTlqgYLC1QT%2FKqcerYlaLqg0vVTieMikinD4baMMHa%2FcQGOqUBQJMefhRrYYOPE2ZoP%2FVSw8TbmRUCuzk8ZSwdXnJJNw7jiU6byzvJuTxi2TsHgcyhjpx%2FkdGYd6p8fqDrJc9VnXgEwcKQvsxl8W%2Fc7vn0DoquiC3JRmqhcBZDcBsw3m8jLo8vLCTGu2Nvn7SqfpH7xfYoDS4kjCnt%2BfyTCzH%2Fb2TlImmgeS7yp4WGZfzi9YQ9tTZMwUgU51dkPcC0h4Lp03i%2B7wkR&X-Amz-Signature=d904360f4a51b8531e835cb561acb8184f5d2672163080a067d4eed7b6606e78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IYU33MQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCSQs28v7d0oLv7YhVgC%2FShfyCaCXgW9cYIlS0DbkMRgAIhAKyH6%2Fj6F00zrM3F6LRBJMrsmi%2FlW2%2BTKXKltVq1rr6WKv8DCGIQABoMNjM3NDIzMTgzODA1IgzJbTP3tQ9Tlg1iwakq3AOgOZNJj11jpSJDPf%2Bj7ZSVcahebNyRn8w2JXMIPpd%2FYEaZyNYS5Dt1G9j9cVZKaj%2FJj7kZzsh3UEHUkEl3J0ijuTmscptNkOw9%2FIrXrLU9aB%2BcxyQ49LdED2AUpfoQ6urWhb01KbtY9TRRkfWxOqdSdUfy%2FfYtyY%2FdXCu2xIs1FCp9UEpXAdKpBR60hw4txEhCRnpguGxjBffeBWOp9E49au56JdZCrE%2FiI15b%2BzvdAddTkejHY4kMdn8jHUAhz5ET%2FEAflxiU8oPb8MuQpGjm2fg%2BlAv81q7z22E3hHYiFwCJqjxb%2Fmu6uxpVLH9BCXacJ75WUKMN2aW%2FeWJ3UQ03Ym5M%2BgdkQYfMpaFQcf8U2lDcA8xsM7IenK9wkZ7Y4khRBcGrVrclUASf1X6R3h8PKaZX1mKtVi6FQ9j1yVIN8QVNpqT9KQPVwHsf5mUxXkiSRmWqSQVytTincnKNtAOyRcHfnOHzB23gTvEOoCl%2Fh51lrQGeaF21Wg%2Bg7QRo8%2BeBoeVvHREQKISfCwLFVZdHsc7H3vPLQsYbhxG7cDshQXNCaEkgRWYtA3S%2FLt%2B3iIZivJ40U7JyPhvjbqjq%2F%2BBnSUoY4sbyfPCGLRj8UBNb4AsX0KXRDclkP%2Fd%2FJDD72v3EBjqkAWIaV6Jhtl1hvIT2oPAfFjGuZG3tFPkgX%2FQ17Hj%2BBv2a8qHZes09SUvxQ4hkYnTqJJvAWBTNqNfzrb0dQNiDgN9QfyfN%2BbEpjQaCty5FQvNJflXsA%2BAmVSjFzxFCVRJM9IOGqmwG4kYbTpj3HhzTCpBHM6PVbSsCiXkIGR0qSryB5bgKjahsTgVr3pSY%2BXvKGiPLiWD5JFcrXu%2FXRKL9mZv%2B40qL&X-Amz-Signature=65d20b506cb93ab61bba002b7d1695e93ef5735b986674b27937fb6fad3d392d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGUWVYU4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCICObshhIiLwPGUstZjw%2FPF9MTbDIGKi3pyEiB%2BR4A8NwAiBXBvwuecMRL3sIyRnQmiLZopxPwEGrNeMTqHEZo8V1NCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMAENakYsPC%2BNhhjwiKtwDTxc6UqyHF5Y2w66Q6cahQy%2BOLX0TxdKt3IXg4971hVMzf2Bb8nZCd65udgmuZOjFRFWWBHATDX5h3AwIokEx2Dzzv9jt5hyjHKQg824lL2SnYU9tUrFeRVOHfX1a2H1VqXyzI7AJsTY%2Feh33azU%2FrWGbOKT7b3U2EHyldU5jUxoQG1VuqEceGYzDnOgNnQGt%2BenutOCT8dlNxmqe6RwBm0ZZU7OLpJM%2BS4qBCzsD%2FRifvHU9jbOCY2RWnwd9R%2FqE8l8pu5Vl6xS7KHskhK91V0RSop7vIfjEGn4iDbi05QsTGffWMKdk%2Blzyg91TgkfW4DMGK8s9fhW6dtEj5HPZt9F6tqBbvoZicN92ZRCU8H903J0rWLdFPwNa4W0xMhj8lVkBaeObUek26moHKaZtoAipa%2BG5kG9Q90gbJJCFtIaH8cN%2F4m7U%2FswjyY6D8gFzsIy8c%2FfUGmbFX5HJ4%2BXuPkjZohJVDQxb36s%2FYBQ%2FZlZPWBhscmGN%2Fqi%2FSvrz%2BDZMF8Kd1eOUdw1OPY6RsK4TaE6fG4vI%2Bn%2FAoB7ZZACe%2FahUqIg3ivp%2ByTiMrJfGXyWf5fOY4uRIe0IFr5Wnlo8cyvU5VWPp2D1lzs47bc%2BdO71TyPBvk1Xsd8APhtow39r9xAY6pgF6Znc0NDTfnpLF70OBmnbssrMMRHDoWm507wkHJAa%2FNwa%2FOe1rqROhc4o0B%2Bjrme0yikbbiX8tV%2B4euEqggU%2BDxdUA1JPZ1%2BpqIFxWNJ6nvWK%2FE5HJvO%2Bltrkj0Zb8qBS3Hebi%2BtljDHSq1U6KTow6iQHjezwKPq%2BJps7vWc0p8cZ5tFXlBdYfU%2BP3x6zZsyXW%2BhGq1uB66N7sPMg%2BiFKrNe4teynS&X-Amz-Signature=51e80a7694363ad042598a5b3f29236d4a45391bf62248272755b92e831296ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YHIZC4E%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIAfKAVCvMU08x2m5f4isUU70M6CTOwplAEa%2BokaaLEgsAiEAo5uhXz7cJfX1sv3srz6Om%2FMY6FZjtpm2vdnSXQve%2FoUq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDEauwa060%2F7xHtSHMircAyivIFv9eYC2wBWzPxM557Bac33IaBY6azoFmbhW%2BIyX3fT4iRpw2QCHcZUDhfEcOW8rulOW2nrpwo6MRNROi%2FgUlBjfMd4RW4FgQugQP9hfR5wkQn3RCAfhiIiMcb9NBrlYcIqMaVw6ier54Gkm%2FmtwBh5lSABA4jqSm1A450SsbCUjkV%2BFdUAGSEKG0nbIqjrt7EHzNm%2FyFLvHUnPxBYONnXOWwILIUlqNL2GPSIm7BQM8e1YaWtc4rPcW3C5OX9VQFu%2FYfgwaW97v4pmNEqPQggg9iSJo8CtClEWcvmZ7AuyRZcfapU67Lk61SujJ5XYAGXSQMJx8bZvZXWzOj1Il09ppYNRajPdv3nyfiHOznxxht1eDGsaUZCzHlsnAgBPbmkK8%2BF2xekFZPzEheiuO%2BhYKnBr28G1CePJBfFhibNrLhHf7FlTKQBDDb7u6wn7BCZPU7jiLZSt4bQPxHvHYY%2Bohnll9l2CT%2F0kTeKwf7gZ8kN%2FCVpu1Z6l5zym3NdnRRLw5%2B2icUlBwV09oOndwiiUNQRDQe%2BmWyLznfUfARrWArNT3KJlpu%2B%2FWsC5S6J3l8Z2q%2BQZEvh%2Bl4dkW70tnDlr8CnGDd%2BZrX9UgP6K8yIIkFbaCpkEeUivjMKfa%2FcQGOqUBklbE3HQUPeS394%2FNvkP3xcqmIvurZWivsm4qnG1p57FNfYC0QwU%2BmU2MVLqgkIAs2%2Fh7VRto0X5YaHBQKXW9IcHqBpA%2BjBNk86yBXeXl8vGQ%2BI%2FpweGuGIAEbwBpyABiT36hNSZ0nTJSMO6oix8JraM4ySRk46R9iTbp%2B4ylM6YyLXDZ1rLuNa7REV%2FvCOQOyxcjebvKjN6iEy7qlfHPmtaJKnDj&X-Amz-Signature=0b69c05c53d3021d7920760f7f26fe31cdddbf063d84799630591235a21e8838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ6NRHP2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIF4DsrbThrfWOaDTnMV45f%2BXKlTX59kszY%2Fr%2FH7U63rEAiBxfNp4hI9Kziunw6BZJgc5v7FM9%2FvNLEubnR2jlhk8BCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMsoCIA0D5ZT9XUIySKtwDMnMk96af37cKkr1N8avIYMatQsgrFn19W%2F5dGViBJeFYe0PQIlF%2BFIdRRPmyMdSvYYS2kpZCfL90k%2BzQgHtxWX7XHRiPJs4V5RDqQQF1jpKNi5YR3S8%2BoMwhzWPpBTmDLXeqaEXMjQkQrH9JJhpkI8Q3MYAC1wP%2BzmaeU3DlHGhuAEzAEg9vmsTWsdlmweP5sL4nVJ1Th1fGOuMqjLyHqzSiPxJFgjKJOhzZBn7Y8g91Wl8jOBMG3gI3J16tzvMROMjMPtDQMkV%2BUBKSmJG%2BUONokhYC4tlELSxBE%2FjWFD19%2BBLCBrioqLNqm0LyovlgbC1t3mtd0S%2FiV4n4Zn3w4vCfmhcLnAojyL19cTOxFva4h5rmQ7fuwsejzblqpvVApNtNm7nmpQSgo39Os9%2FRcXnVb6M7LGbfV7vCM%2FiiSYfmmZi8X6%2FIO116pyx8qeoUEFrXubpfFZhPJmGSxyDibWL5V0k2KAxu59ShpG0CjdBDd2iviVAilyfVNLrRXS6BJcp3gALZKldI931%2BcS0yArRBkig0XR7PDb2xCglL2D4Am%2B68%2FjM05Ph%2FplaDGvNPtJfptuzE7Kmw4goQytz60NutQ2sN40%2FLgXSYWdFkFXXjeHTlT5hIePKM7ycw%2F9r9xAY6pgHfiKF5dvqw4vIPJdl07rrbonuQVBd2l0Cel2kgj%2BNPlAUnLit%2BGtCts8UuJKCy4xIrOctpHA5%2BpRkt0yPJUg%2B%2FQUfBgGwkdim1FPDhm1aYqJE4nddO4J2%2Fy9PRAVuMojHjcO7jUL2iGeUONWEgfhXnW16COoXBdUvepkUVnoypTUWK9vPRd%2BvypLvSj3vihbUbOh1wBPtNQOyTK20nZHi0j2qCieNo&X-Amz-Signature=f749cf1a4ace683fe729b531fbf23b2309802b1795c55eb5bfebb3120ec6a37a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ6NRHP2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIF4DsrbThrfWOaDTnMV45f%2BXKlTX59kszY%2Fr%2FH7U63rEAiBxfNp4hI9Kziunw6BZJgc5v7FM9%2FvNLEubnR2jlhk8BCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMsoCIA0D5ZT9XUIySKtwDMnMk96af37cKkr1N8avIYMatQsgrFn19W%2F5dGViBJeFYe0PQIlF%2BFIdRRPmyMdSvYYS2kpZCfL90k%2BzQgHtxWX7XHRiPJs4V5RDqQQF1jpKNi5YR3S8%2BoMwhzWPpBTmDLXeqaEXMjQkQrH9JJhpkI8Q3MYAC1wP%2BzmaeU3DlHGhuAEzAEg9vmsTWsdlmweP5sL4nVJ1Th1fGOuMqjLyHqzSiPxJFgjKJOhzZBn7Y8g91Wl8jOBMG3gI3J16tzvMROMjMPtDQMkV%2BUBKSmJG%2BUONokhYC4tlELSxBE%2FjWFD19%2BBLCBrioqLNqm0LyovlgbC1t3mtd0S%2FiV4n4Zn3w4vCfmhcLnAojyL19cTOxFva4h5rmQ7fuwsejzblqpvVApNtNm7nmpQSgo39Os9%2FRcXnVb6M7LGbfV7vCM%2FiiSYfmmZi8X6%2FIO116pyx8qeoUEFrXubpfFZhPJmGSxyDibWL5V0k2KAxu59ShpG0CjdBDd2iviVAilyfVNLrRXS6BJcp3gALZKldI931%2BcS0yArRBkig0XR7PDb2xCglL2D4Am%2B68%2FjM05Ph%2FplaDGvNPtJfptuzE7Kmw4goQytz60NutQ2sN40%2FLgXSYWdFkFXXjeHTlT5hIePKM7ycw%2F9r9xAY6pgHfiKF5dvqw4vIPJdl07rrbonuQVBd2l0Cel2kgj%2BNPlAUnLit%2BGtCts8UuJKCy4xIrOctpHA5%2BpRkt0yPJUg%2B%2FQUfBgGwkdim1FPDhm1aYqJE4nddO4J2%2Fy9PRAVuMojHjcO7jUL2iGeUONWEgfhXnW16COoXBdUvepkUVnoypTUWK9vPRd%2BvypLvSj3vihbUbOh1wBPtNQOyTK20nZHi0j2qCieNo&X-Amz-Signature=fe77e53451e7dbbd00f72a94ddd25d73a4a0a24ef45cf04bff68a60e0f812a72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBYUETMO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCJaXv4K569Zx3rz4HuXw3ZjlIWw62aEuY3AY6aEGkFUQIgFcJP%2BMVTQn3jnGXP2Et8cHe3REkClT0kSE3%2Bbo9gR1Eq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO4OkaX8ueNWUBn%2BoSrcA1Bsq9JxNRW5oAum2mVb4cCKtl4MNI0TtezXHIVyReJmsoZ%2FcRvrtLVwLIts0X5UBqnmTXeXSqQ3q09uQHEmJ20CuMS1WfvRX5lmyIi%2FF2k9oixlW6G2CwbleO0bmptanrDbM8xbwrNNT2YvwIfvrAMieEcH6At3od6iEDXPSqgvTy%2F%2FqRpRv9lWq07mLLVm3yMRHPmnhtgQVd1fupmx%2FfkQJZcd%2B%2FyBm%2BlRoWgEE066CixI1kpY2teJlO9e99e5cm0P%2FY2xHFzrBG6duMAHvaZwojnNttsyb2QeNz48naEO%2BT57aLB2gU8bagOGwoYQudDWKpiyJWWjpy20Cm9eCBnYi9gULyTXMP9TVzZaEbi5oWukx8Jz1z%2Fo022C38OKMRnl6W8sU2I%2BJBD1HADEM4TFzf6I%2FRJIobxdw7tJDZnfkTJ7TbdMHQuJq9wjIpYUBpEGIFvebqoo5rYuQtajiUK5wX4SF5jSA0dAa9jlsZGWw5Ecw2jSyHtd505nzI6XCz3mo8gRQTjXeB1%2Bsw828vYTbXlkbeT%2BTONgoBS8akX%2FkF8iLW7riPvmOluHsSBSbkztMz7CGVAPml%2B3S3aVeuCfXfzEI1qyOEnFVIAAi6M2WAEtsfeyjVuzFPOtMM%2Fb%2FcQGOqUBVnwspDSzmszNPwd5OqqTBcdqZxaqH5mwmB%2FIMRK7WCXSbJpNIqq8oiTJtIu5cqBEUrho4vU%2ByrQ9E%2FxlryEkXStZC%2F5c69vFZkBVuFgb4d0uZJOaJ1zUx6HjikXfoQcwItNYy67Pc3X5Kj2OysWRxw9BuUHhc%2BBiah%2FkNE0EZIdkWROBvXWdNJ0Umxx8dou5sUCIz1h8PtyLjgNfNi02K1CHtmeJ&X-Amz-Signature=3a58d729630be09f4c7ab3d3527341c0fe82b8d3214e996d7611d3b158d74635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBYUETMO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCJaXv4K569Zx3rz4HuXw3ZjlIWw62aEuY3AY6aEGkFUQIgFcJP%2BMVTQn3jnGXP2Et8cHe3REkClT0kSE3%2Bbo9gR1Eq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO4OkaX8ueNWUBn%2BoSrcA1Bsq9JxNRW5oAum2mVb4cCKtl4MNI0TtezXHIVyReJmsoZ%2FcRvrtLVwLIts0X5UBqnmTXeXSqQ3q09uQHEmJ20CuMS1WfvRX5lmyIi%2FF2k9oixlW6G2CwbleO0bmptanrDbM8xbwrNNT2YvwIfvrAMieEcH6At3od6iEDXPSqgvTy%2F%2FqRpRv9lWq07mLLVm3yMRHPmnhtgQVd1fupmx%2FfkQJZcd%2B%2FyBm%2BlRoWgEE066CixI1kpY2teJlO9e99e5cm0P%2FY2xHFzrBG6duMAHvaZwojnNttsyb2QeNz48naEO%2BT57aLB2gU8bagOGwoYQudDWKpiyJWWjpy20Cm9eCBnYi9gULyTXMP9TVzZaEbi5oWukx8Jz1z%2Fo022C38OKMRnl6W8sU2I%2BJBD1HADEM4TFzf6I%2FRJIobxdw7tJDZnfkTJ7TbdMHQuJq9wjIpYUBpEGIFvebqoo5rYuQtajiUK5wX4SF5jSA0dAa9jlsZGWw5Ecw2jSyHtd505nzI6XCz3mo8gRQTjXeB1%2Bsw828vYTbXlkbeT%2BTONgoBS8akX%2FkF8iLW7riPvmOluHsSBSbkztMz7CGVAPml%2B3S3aVeuCfXfzEI1qyOEnFVIAAi6M2WAEtsfeyjVuzFPOtMM%2Fb%2FcQGOqUBVnwspDSzmszNPwd5OqqTBcdqZxaqH5mwmB%2FIMRK7WCXSbJpNIqq8oiTJtIu5cqBEUrho4vU%2ByrQ9E%2FxlryEkXStZC%2F5c69vFZkBVuFgb4d0uZJOaJ1zUx6HjikXfoQcwItNYy67Pc3X5Kj2OysWRxw9BuUHhc%2BBiah%2FkNE0EZIdkWROBvXWdNJ0Umxx8dou5sUCIz1h8PtyLjgNfNi02K1CHtmeJ&X-Amz-Signature=390fe0975c6a1033db913d766b47600e011a494f7ee3dfc44465117401fedc4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBYUETMO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCJaXv4K569Zx3rz4HuXw3ZjlIWw62aEuY3AY6aEGkFUQIgFcJP%2BMVTQn3jnGXP2Et8cHe3REkClT0kSE3%2Bbo9gR1Eq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO4OkaX8ueNWUBn%2BoSrcA1Bsq9JxNRW5oAum2mVb4cCKtl4MNI0TtezXHIVyReJmsoZ%2FcRvrtLVwLIts0X5UBqnmTXeXSqQ3q09uQHEmJ20CuMS1WfvRX5lmyIi%2FF2k9oixlW6G2CwbleO0bmptanrDbM8xbwrNNT2YvwIfvrAMieEcH6At3od6iEDXPSqgvTy%2F%2FqRpRv9lWq07mLLVm3yMRHPmnhtgQVd1fupmx%2FfkQJZcd%2B%2FyBm%2BlRoWgEE066CixI1kpY2teJlO9e99e5cm0P%2FY2xHFzrBG6duMAHvaZwojnNttsyb2QeNz48naEO%2BT57aLB2gU8bagOGwoYQudDWKpiyJWWjpy20Cm9eCBnYi9gULyTXMP9TVzZaEbi5oWukx8Jz1z%2Fo022C38OKMRnl6W8sU2I%2BJBD1HADEM4TFzf6I%2FRJIobxdw7tJDZnfkTJ7TbdMHQuJq9wjIpYUBpEGIFvebqoo5rYuQtajiUK5wX4SF5jSA0dAa9jlsZGWw5Ecw2jSyHtd505nzI6XCz3mo8gRQTjXeB1%2Bsw828vYTbXlkbeT%2BTONgoBS8akX%2FkF8iLW7riPvmOluHsSBSbkztMz7CGVAPml%2B3S3aVeuCfXfzEI1qyOEnFVIAAi6M2WAEtsfeyjVuzFPOtMM%2Fb%2FcQGOqUBVnwspDSzmszNPwd5OqqTBcdqZxaqH5mwmB%2FIMRK7WCXSbJpNIqq8oiTJtIu5cqBEUrho4vU%2ByrQ9E%2FxlryEkXStZC%2F5c69vFZkBVuFgb4d0uZJOaJ1zUx6HjikXfoQcwItNYy67Pc3X5Kj2OysWRxw9BuUHhc%2BBiah%2FkNE0EZIdkWROBvXWdNJ0Umxx8dou5sUCIz1h8PtyLjgNfNi02K1CHtmeJ&X-Amz-Signature=32db76149e0c9c061184a3c88df92a27a5c7b4d78633bf7db8c398501a57a5fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBYUETMO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCJaXv4K569Zx3rz4HuXw3ZjlIWw62aEuY3AY6aEGkFUQIgFcJP%2BMVTQn3jnGXP2Et8cHe3REkClT0kSE3%2Bbo9gR1Eq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO4OkaX8ueNWUBn%2BoSrcA1Bsq9JxNRW5oAum2mVb4cCKtl4MNI0TtezXHIVyReJmsoZ%2FcRvrtLVwLIts0X5UBqnmTXeXSqQ3q09uQHEmJ20CuMS1WfvRX5lmyIi%2FF2k9oixlW6G2CwbleO0bmptanrDbM8xbwrNNT2YvwIfvrAMieEcH6At3od6iEDXPSqgvTy%2F%2FqRpRv9lWq07mLLVm3yMRHPmnhtgQVd1fupmx%2FfkQJZcd%2B%2FyBm%2BlRoWgEE066CixI1kpY2teJlO9e99e5cm0P%2FY2xHFzrBG6duMAHvaZwojnNttsyb2QeNz48naEO%2BT57aLB2gU8bagOGwoYQudDWKpiyJWWjpy20Cm9eCBnYi9gULyTXMP9TVzZaEbi5oWukx8Jz1z%2Fo022C38OKMRnl6W8sU2I%2BJBD1HADEM4TFzf6I%2FRJIobxdw7tJDZnfkTJ7TbdMHQuJq9wjIpYUBpEGIFvebqoo5rYuQtajiUK5wX4SF5jSA0dAa9jlsZGWw5Ecw2jSyHtd505nzI6XCz3mo8gRQTjXeB1%2Bsw828vYTbXlkbeT%2BTONgoBS8akX%2FkF8iLW7riPvmOluHsSBSbkztMz7CGVAPml%2B3S3aVeuCfXfzEI1qyOEnFVIAAi6M2WAEtsfeyjVuzFPOtMM%2Fb%2FcQGOqUBVnwspDSzmszNPwd5OqqTBcdqZxaqH5mwmB%2FIMRK7WCXSbJpNIqq8oiTJtIu5cqBEUrho4vU%2ByrQ9E%2FxlryEkXStZC%2F5c69vFZkBVuFgb4d0uZJOaJ1zUx6HjikXfoQcwItNYy67Pc3X5Kj2OysWRxw9BuUHhc%2BBiah%2FkNE0EZIdkWROBvXWdNJ0Umxx8dou5sUCIz1h8PtyLjgNfNi02K1CHtmeJ&X-Amz-Signature=e74325c4c894fc6dbf68b6c118e4d6a179fa6c16405d06ff85661323292eb41a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBYUETMO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCJaXv4K569Zx3rz4HuXw3ZjlIWw62aEuY3AY6aEGkFUQIgFcJP%2BMVTQn3jnGXP2Et8cHe3REkClT0kSE3%2Bbo9gR1Eq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO4OkaX8ueNWUBn%2BoSrcA1Bsq9JxNRW5oAum2mVb4cCKtl4MNI0TtezXHIVyReJmsoZ%2FcRvrtLVwLIts0X5UBqnmTXeXSqQ3q09uQHEmJ20CuMS1WfvRX5lmyIi%2FF2k9oixlW6G2CwbleO0bmptanrDbM8xbwrNNT2YvwIfvrAMieEcH6At3od6iEDXPSqgvTy%2F%2FqRpRv9lWq07mLLVm3yMRHPmnhtgQVd1fupmx%2FfkQJZcd%2B%2FyBm%2BlRoWgEE066CixI1kpY2teJlO9e99e5cm0P%2FY2xHFzrBG6duMAHvaZwojnNttsyb2QeNz48naEO%2BT57aLB2gU8bagOGwoYQudDWKpiyJWWjpy20Cm9eCBnYi9gULyTXMP9TVzZaEbi5oWukx8Jz1z%2Fo022C38OKMRnl6W8sU2I%2BJBD1HADEM4TFzf6I%2FRJIobxdw7tJDZnfkTJ7TbdMHQuJq9wjIpYUBpEGIFvebqoo5rYuQtajiUK5wX4SF5jSA0dAa9jlsZGWw5Ecw2jSyHtd505nzI6XCz3mo8gRQTjXeB1%2Bsw828vYTbXlkbeT%2BTONgoBS8akX%2FkF8iLW7riPvmOluHsSBSbkztMz7CGVAPml%2B3S3aVeuCfXfzEI1qyOEnFVIAAi6M2WAEtsfeyjVuzFPOtMM%2Fb%2FcQGOqUBVnwspDSzmszNPwd5OqqTBcdqZxaqH5mwmB%2FIMRK7WCXSbJpNIqq8oiTJtIu5cqBEUrho4vU%2ByrQ9E%2FxlryEkXStZC%2F5c69vFZkBVuFgb4d0uZJOaJ1zUx6HjikXfoQcwItNYy67Pc3X5Kj2OysWRxw9BuUHhc%2BBiah%2FkNE0EZIdkWROBvXWdNJ0Umxx8dou5sUCIz1h8PtyLjgNfNi02K1CHtmeJ&X-Amz-Signature=99349638253d8a33a4af8e8e856ad2bdb93c992a0c4be499bcd8f7f72067f359&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBYUETMO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCJaXv4K569Zx3rz4HuXw3ZjlIWw62aEuY3AY6aEGkFUQIgFcJP%2BMVTQn3jnGXP2Et8cHe3REkClT0kSE3%2Bbo9gR1Eq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO4OkaX8ueNWUBn%2BoSrcA1Bsq9JxNRW5oAum2mVb4cCKtl4MNI0TtezXHIVyReJmsoZ%2FcRvrtLVwLIts0X5UBqnmTXeXSqQ3q09uQHEmJ20CuMS1WfvRX5lmyIi%2FF2k9oixlW6G2CwbleO0bmptanrDbM8xbwrNNT2YvwIfvrAMieEcH6At3od6iEDXPSqgvTy%2F%2FqRpRv9lWq07mLLVm3yMRHPmnhtgQVd1fupmx%2FfkQJZcd%2B%2FyBm%2BlRoWgEE066CixI1kpY2teJlO9e99e5cm0P%2FY2xHFzrBG6duMAHvaZwojnNttsyb2QeNz48naEO%2BT57aLB2gU8bagOGwoYQudDWKpiyJWWjpy20Cm9eCBnYi9gULyTXMP9TVzZaEbi5oWukx8Jz1z%2Fo022C38OKMRnl6W8sU2I%2BJBD1HADEM4TFzf6I%2FRJIobxdw7tJDZnfkTJ7TbdMHQuJq9wjIpYUBpEGIFvebqoo5rYuQtajiUK5wX4SF5jSA0dAa9jlsZGWw5Ecw2jSyHtd505nzI6XCz3mo8gRQTjXeB1%2Bsw828vYTbXlkbeT%2BTONgoBS8akX%2FkF8iLW7riPvmOluHsSBSbkztMz7CGVAPml%2B3S3aVeuCfXfzEI1qyOEnFVIAAi6M2WAEtsfeyjVuzFPOtMM%2Fb%2FcQGOqUBVnwspDSzmszNPwd5OqqTBcdqZxaqH5mwmB%2FIMRK7WCXSbJpNIqq8oiTJtIu5cqBEUrho4vU%2ByrQ9E%2FxlryEkXStZC%2F5c69vFZkBVuFgb4d0uZJOaJ1zUx6HjikXfoQcwItNYy67Pc3X5Kj2OysWRxw9BuUHhc%2BBiah%2FkNE0EZIdkWROBvXWdNJ0Umxx8dou5sUCIz1h8PtyLjgNfNi02K1CHtmeJ&X-Amz-Signature=ee02254703444ee2a5cf21a5b254139c253e75e3eeb40377ece3fc048b9a3553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBYUETMO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCJaXv4K569Zx3rz4HuXw3ZjlIWw62aEuY3AY6aEGkFUQIgFcJP%2BMVTQn3jnGXP2Et8cHe3REkClT0kSE3%2Bbo9gR1Eq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO4OkaX8ueNWUBn%2BoSrcA1Bsq9JxNRW5oAum2mVb4cCKtl4MNI0TtezXHIVyReJmsoZ%2FcRvrtLVwLIts0X5UBqnmTXeXSqQ3q09uQHEmJ20CuMS1WfvRX5lmyIi%2FF2k9oixlW6G2CwbleO0bmptanrDbM8xbwrNNT2YvwIfvrAMieEcH6At3od6iEDXPSqgvTy%2F%2FqRpRv9lWq07mLLVm3yMRHPmnhtgQVd1fupmx%2FfkQJZcd%2B%2FyBm%2BlRoWgEE066CixI1kpY2teJlO9e99e5cm0P%2FY2xHFzrBG6duMAHvaZwojnNttsyb2QeNz48naEO%2BT57aLB2gU8bagOGwoYQudDWKpiyJWWjpy20Cm9eCBnYi9gULyTXMP9TVzZaEbi5oWukx8Jz1z%2Fo022C38OKMRnl6W8sU2I%2BJBD1HADEM4TFzf6I%2FRJIobxdw7tJDZnfkTJ7TbdMHQuJq9wjIpYUBpEGIFvebqoo5rYuQtajiUK5wX4SF5jSA0dAa9jlsZGWw5Ecw2jSyHtd505nzI6XCz3mo8gRQTjXeB1%2Bsw828vYTbXlkbeT%2BTONgoBS8akX%2FkF8iLW7riPvmOluHsSBSbkztMz7CGVAPml%2B3S3aVeuCfXfzEI1qyOEnFVIAAi6M2WAEtsfeyjVuzFPOtMM%2Fb%2FcQGOqUBVnwspDSzmszNPwd5OqqTBcdqZxaqH5mwmB%2FIMRK7WCXSbJpNIqq8oiTJtIu5cqBEUrho4vU%2ByrQ9E%2FxlryEkXStZC%2F5c69vFZkBVuFgb4d0uZJOaJ1zUx6HjikXfoQcwItNYy67Pc3X5Kj2OysWRxw9BuUHhc%2BBiah%2FkNE0EZIdkWROBvXWdNJ0Umxx8dou5sUCIz1h8PtyLjgNfNi02K1CHtmeJ&X-Amz-Signature=32db76149e0c9c061184a3c88df92a27a5c7b4d78633bf7db8c398501a57a5fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBYUETMO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCJaXv4K569Zx3rz4HuXw3ZjlIWw62aEuY3AY6aEGkFUQIgFcJP%2BMVTQn3jnGXP2Et8cHe3REkClT0kSE3%2Bbo9gR1Eq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO4OkaX8ueNWUBn%2BoSrcA1Bsq9JxNRW5oAum2mVb4cCKtl4MNI0TtezXHIVyReJmsoZ%2FcRvrtLVwLIts0X5UBqnmTXeXSqQ3q09uQHEmJ20CuMS1WfvRX5lmyIi%2FF2k9oixlW6G2CwbleO0bmptanrDbM8xbwrNNT2YvwIfvrAMieEcH6At3od6iEDXPSqgvTy%2F%2FqRpRv9lWq07mLLVm3yMRHPmnhtgQVd1fupmx%2FfkQJZcd%2B%2FyBm%2BlRoWgEE066CixI1kpY2teJlO9e99e5cm0P%2FY2xHFzrBG6duMAHvaZwojnNttsyb2QeNz48naEO%2BT57aLB2gU8bagOGwoYQudDWKpiyJWWjpy20Cm9eCBnYi9gULyTXMP9TVzZaEbi5oWukx8Jz1z%2Fo022C38OKMRnl6W8sU2I%2BJBD1HADEM4TFzf6I%2FRJIobxdw7tJDZnfkTJ7TbdMHQuJq9wjIpYUBpEGIFvebqoo5rYuQtajiUK5wX4SF5jSA0dAa9jlsZGWw5Ecw2jSyHtd505nzI6XCz3mo8gRQTjXeB1%2Bsw828vYTbXlkbeT%2BTONgoBS8akX%2FkF8iLW7riPvmOluHsSBSbkztMz7CGVAPml%2B3S3aVeuCfXfzEI1qyOEnFVIAAi6M2WAEtsfeyjVuzFPOtMM%2Fb%2FcQGOqUBVnwspDSzmszNPwd5OqqTBcdqZxaqH5mwmB%2FIMRK7WCXSbJpNIqq8oiTJtIu5cqBEUrho4vU%2ByrQ9E%2FxlryEkXStZC%2F5c69vFZkBVuFgb4d0uZJOaJ1zUx6HjikXfoQcwItNYy67Pc3X5Kj2OysWRxw9BuUHhc%2BBiah%2FkNE0EZIdkWROBvXWdNJ0Umxx8dou5sUCIz1h8PtyLjgNfNi02K1CHtmeJ&X-Amz-Signature=639889fe09c6f09ad6383fa5f7ab105e891b81e80f1ead2df3389d092eab8269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBYUETMO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCJaXv4K569Zx3rz4HuXw3ZjlIWw62aEuY3AY6aEGkFUQIgFcJP%2BMVTQn3jnGXP2Et8cHe3REkClT0kSE3%2Bbo9gR1Eq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO4OkaX8ueNWUBn%2BoSrcA1Bsq9JxNRW5oAum2mVb4cCKtl4MNI0TtezXHIVyReJmsoZ%2FcRvrtLVwLIts0X5UBqnmTXeXSqQ3q09uQHEmJ20CuMS1WfvRX5lmyIi%2FF2k9oixlW6G2CwbleO0bmptanrDbM8xbwrNNT2YvwIfvrAMieEcH6At3od6iEDXPSqgvTy%2F%2FqRpRv9lWq07mLLVm3yMRHPmnhtgQVd1fupmx%2FfkQJZcd%2B%2FyBm%2BlRoWgEE066CixI1kpY2teJlO9e99e5cm0P%2FY2xHFzrBG6duMAHvaZwojnNttsyb2QeNz48naEO%2BT57aLB2gU8bagOGwoYQudDWKpiyJWWjpy20Cm9eCBnYi9gULyTXMP9TVzZaEbi5oWukx8Jz1z%2Fo022C38OKMRnl6W8sU2I%2BJBD1HADEM4TFzf6I%2FRJIobxdw7tJDZnfkTJ7TbdMHQuJq9wjIpYUBpEGIFvebqoo5rYuQtajiUK5wX4SF5jSA0dAa9jlsZGWw5Ecw2jSyHtd505nzI6XCz3mo8gRQTjXeB1%2Bsw828vYTbXlkbeT%2BTONgoBS8akX%2FkF8iLW7riPvmOluHsSBSbkztMz7CGVAPml%2B3S3aVeuCfXfzEI1qyOEnFVIAAi6M2WAEtsfeyjVuzFPOtMM%2Fb%2FcQGOqUBVnwspDSzmszNPwd5OqqTBcdqZxaqH5mwmB%2FIMRK7WCXSbJpNIqq8oiTJtIu5cqBEUrho4vU%2ByrQ9E%2FxlryEkXStZC%2F5c69vFZkBVuFgb4d0uZJOaJ1zUx6HjikXfoQcwItNYy67Pc3X5Kj2OysWRxw9BuUHhc%2BBiah%2FkNE0EZIdkWROBvXWdNJ0Umxx8dou5sUCIz1h8PtyLjgNfNi02K1CHtmeJ&X-Amz-Signature=5080dd6d76bcb16712f5951221f29124e7ee906da706b60d075f652e509ae796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBYUETMO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCJaXv4K569Zx3rz4HuXw3ZjlIWw62aEuY3AY6aEGkFUQIgFcJP%2BMVTQn3jnGXP2Et8cHe3REkClT0kSE3%2Bbo9gR1Eq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO4OkaX8ueNWUBn%2BoSrcA1Bsq9JxNRW5oAum2mVb4cCKtl4MNI0TtezXHIVyReJmsoZ%2FcRvrtLVwLIts0X5UBqnmTXeXSqQ3q09uQHEmJ20CuMS1WfvRX5lmyIi%2FF2k9oixlW6G2CwbleO0bmptanrDbM8xbwrNNT2YvwIfvrAMieEcH6At3od6iEDXPSqgvTy%2F%2FqRpRv9lWq07mLLVm3yMRHPmnhtgQVd1fupmx%2FfkQJZcd%2B%2FyBm%2BlRoWgEE066CixI1kpY2teJlO9e99e5cm0P%2FY2xHFzrBG6duMAHvaZwojnNttsyb2QeNz48naEO%2BT57aLB2gU8bagOGwoYQudDWKpiyJWWjpy20Cm9eCBnYi9gULyTXMP9TVzZaEbi5oWukx8Jz1z%2Fo022C38OKMRnl6W8sU2I%2BJBD1HADEM4TFzf6I%2FRJIobxdw7tJDZnfkTJ7TbdMHQuJq9wjIpYUBpEGIFvebqoo5rYuQtajiUK5wX4SF5jSA0dAa9jlsZGWw5Ecw2jSyHtd505nzI6XCz3mo8gRQTjXeB1%2Bsw828vYTbXlkbeT%2BTONgoBS8akX%2FkF8iLW7riPvmOluHsSBSbkztMz7CGVAPml%2B3S3aVeuCfXfzEI1qyOEnFVIAAi6M2WAEtsfeyjVuzFPOtMM%2Fb%2FcQGOqUBVnwspDSzmszNPwd5OqqTBcdqZxaqH5mwmB%2FIMRK7WCXSbJpNIqq8oiTJtIu5cqBEUrho4vU%2ByrQ9E%2FxlryEkXStZC%2F5c69vFZkBVuFgb4d0uZJOaJ1zUx6HjikXfoQcwItNYy67Pc3X5Kj2OysWRxw9BuUHhc%2BBiah%2FkNE0EZIdkWROBvXWdNJ0Umxx8dou5sUCIz1h8PtyLjgNfNi02K1CHtmeJ&X-Amz-Signature=2dd6dcc4112f206d42fbdc8b5be0dfbb03ff9afdb3c87287e7df4cbc6c8c8cbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
