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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMW63SWD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIB9hml%2FGAO3Yhw0z4A89dVzFHXJdYVyhkxC%2FybcNFK7pAiEA3blD8HD1bSe4AsQx%2B3d7LFhCz1qN6X99C2%2FsplM7M4oq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMm4ipFbX9NzPQW99CrcAw7GSo5iFzzKSpWa0qQMAkftD%2FMMdoNBaYD%2BhIg39LuXo%2BjK0hNu9vHqZVCcV6huhDWku%2FpmlAvyC%2FcPD%2BWCuKjReErTXMJKUMwQBVn5%2F5cne6V%2BUHorFhpUIPvZRmu52ZjE4juxuNbb7hSe1DmLxar5CJIId2x3EFwnSLCiPz8jNUKKQel5%2BsGktnwaPJA7E21KUrpNDjSbCilLMkb3Yir3AXy0TRrlnPeyAdqF5k59CIlW%2BLPj71UVJCIlCYvD45zhP%2FQTjgPhWmVB3hat%2BammEsuw1RbL3HacuyToBXsNVwyqZXJP%2F2EFROmLCNmnZ1hPGJsWsnJq9e339CNykTsgk%2F0srXOMrglQKqwn1wM9t2efO1CCeEDJLrmxyNfL64IsuKpPCXf6LN6fyH9uDivlFSCpQdY%2B8%2ByzoQwJ6X4tdNx1bo2RM%2BDwvzZt4OCwsvCr1efzCuOGhJ4fZnRP2BKkI8AAo3Qi8WzxRSgKrpg9vJGH0YrgfKlIw0VcaC9ZbHnwbOhUNmumD%2FQ79rtBQZeYwP0lEhTxwyG042gtWqX6HGAqR0oRJsLeVmGo01T0G3vX42NBxBiSswamXvaTszEGtytJBRfb3zQtqvX%2FHAQL3pzo9ZblBo7mNATwMJSYzMQGOqUBs8DNjJRRwEXFeQyZIKrkzt2gW%2BMrJLL4vWGiIbJDolZ0CkTza7l32TMaYhhjZ%2FDh2KnxlghB%2BRit%2BxPyBcZdmvsk5rU6laP8%2FT0lBQdfLyaI1O0FN2AYykGHsB%2BxBn51Tl8eWNn9o%2FpIr6X5O%2Bjl%2BN72%2BRzbEAu9YV2Ws%2BXWfun85D83r6hbxgku1zPsMmJWEvE9eajMD24WdIsVtNuNW803YDZT&X-Amz-Signature=7799c2c5ae01b4c1a2647c32a24609c2f613a07a45552c42674ccde7fb0d1b21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMW63SWD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIB9hml%2FGAO3Yhw0z4A89dVzFHXJdYVyhkxC%2FybcNFK7pAiEA3blD8HD1bSe4AsQx%2B3d7LFhCz1qN6X99C2%2FsplM7M4oq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMm4ipFbX9NzPQW99CrcAw7GSo5iFzzKSpWa0qQMAkftD%2FMMdoNBaYD%2BhIg39LuXo%2BjK0hNu9vHqZVCcV6huhDWku%2FpmlAvyC%2FcPD%2BWCuKjReErTXMJKUMwQBVn5%2F5cne6V%2BUHorFhpUIPvZRmu52ZjE4juxuNbb7hSe1DmLxar5CJIId2x3EFwnSLCiPz8jNUKKQel5%2BsGktnwaPJA7E21KUrpNDjSbCilLMkb3Yir3AXy0TRrlnPeyAdqF5k59CIlW%2BLPj71UVJCIlCYvD45zhP%2FQTjgPhWmVB3hat%2BammEsuw1RbL3HacuyToBXsNVwyqZXJP%2F2EFROmLCNmnZ1hPGJsWsnJq9e339CNykTsgk%2F0srXOMrglQKqwn1wM9t2efO1CCeEDJLrmxyNfL64IsuKpPCXf6LN6fyH9uDivlFSCpQdY%2B8%2ByzoQwJ6X4tdNx1bo2RM%2BDwvzZt4OCwsvCr1efzCuOGhJ4fZnRP2BKkI8AAo3Qi8WzxRSgKrpg9vJGH0YrgfKlIw0VcaC9ZbHnwbOhUNmumD%2FQ79rtBQZeYwP0lEhTxwyG042gtWqX6HGAqR0oRJsLeVmGo01T0G3vX42NBxBiSswamXvaTszEGtytJBRfb3zQtqvX%2FHAQL3pzo9ZblBo7mNATwMJSYzMQGOqUBs8DNjJRRwEXFeQyZIKrkzt2gW%2BMrJLL4vWGiIbJDolZ0CkTza7l32TMaYhhjZ%2FDh2KnxlghB%2BRit%2BxPyBcZdmvsk5rU6laP8%2FT0lBQdfLyaI1O0FN2AYykGHsB%2BxBn51Tl8eWNn9o%2FpIr6X5O%2Bjl%2BN72%2BRzbEAu9YV2Ws%2BXWfun85D83r6hbxgku1zPsMmJWEvE9eajMD24WdIsVtNuNW803YDZT&X-Amz-Signature=45db9fad66cf235c6c4acd9a878a5c6ebe44783211b1fed777ba304375116d9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMW63SWD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIB9hml%2FGAO3Yhw0z4A89dVzFHXJdYVyhkxC%2FybcNFK7pAiEA3blD8HD1bSe4AsQx%2B3d7LFhCz1qN6X99C2%2FsplM7M4oq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMm4ipFbX9NzPQW99CrcAw7GSo5iFzzKSpWa0qQMAkftD%2FMMdoNBaYD%2BhIg39LuXo%2BjK0hNu9vHqZVCcV6huhDWku%2FpmlAvyC%2FcPD%2BWCuKjReErTXMJKUMwQBVn5%2F5cne6V%2BUHorFhpUIPvZRmu52ZjE4juxuNbb7hSe1DmLxar5CJIId2x3EFwnSLCiPz8jNUKKQel5%2BsGktnwaPJA7E21KUrpNDjSbCilLMkb3Yir3AXy0TRrlnPeyAdqF5k59CIlW%2BLPj71UVJCIlCYvD45zhP%2FQTjgPhWmVB3hat%2BammEsuw1RbL3HacuyToBXsNVwyqZXJP%2F2EFROmLCNmnZ1hPGJsWsnJq9e339CNykTsgk%2F0srXOMrglQKqwn1wM9t2efO1CCeEDJLrmxyNfL64IsuKpPCXf6LN6fyH9uDivlFSCpQdY%2B8%2ByzoQwJ6X4tdNx1bo2RM%2BDwvzZt4OCwsvCr1efzCuOGhJ4fZnRP2BKkI8AAo3Qi8WzxRSgKrpg9vJGH0YrgfKlIw0VcaC9ZbHnwbOhUNmumD%2FQ79rtBQZeYwP0lEhTxwyG042gtWqX6HGAqR0oRJsLeVmGo01T0G3vX42NBxBiSswamXvaTszEGtytJBRfb3zQtqvX%2FHAQL3pzo9ZblBo7mNATwMJSYzMQGOqUBs8DNjJRRwEXFeQyZIKrkzt2gW%2BMrJLL4vWGiIbJDolZ0CkTza7l32TMaYhhjZ%2FDh2KnxlghB%2BRit%2BxPyBcZdmvsk5rU6laP8%2FT0lBQdfLyaI1O0FN2AYykGHsB%2BxBn51Tl8eWNn9o%2FpIr6X5O%2Bjl%2BN72%2BRzbEAu9YV2Ws%2BXWfun85D83r6hbxgku1zPsMmJWEvE9eajMD24WdIsVtNuNW803YDZT&X-Amz-Signature=1b6a6400828ae7f46301f74b6bd6215aa25ffd468e44449949db07a61fd6cf74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMW63SWD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIB9hml%2FGAO3Yhw0z4A89dVzFHXJdYVyhkxC%2FybcNFK7pAiEA3blD8HD1bSe4AsQx%2B3d7LFhCz1qN6X99C2%2FsplM7M4oq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMm4ipFbX9NzPQW99CrcAw7GSo5iFzzKSpWa0qQMAkftD%2FMMdoNBaYD%2BhIg39LuXo%2BjK0hNu9vHqZVCcV6huhDWku%2FpmlAvyC%2FcPD%2BWCuKjReErTXMJKUMwQBVn5%2F5cne6V%2BUHorFhpUIPvZRmu52ZjE4juxuNbb7hSe1DmLxar5CJIId2x3EFwnSLCiPz8jNUKKQel5%2BsGktnwaPJA7E21KUrpNDjSbCilLMkb3Yir3AXy0TRrlnPeyAdqF5k59CIlW%2BLPj71UVJCIlCYvD45zhP%2FQTjgPhWmVB3hat%2BammEsuw1RbL3HacuyToBXsNVwyqZXJP%2F2EFROmLCNmnZ1hPGJsWsnJq9e339CNykTsgk%2F0srXOMrglQKqwn1wM9t2efO1CCeEDJLrmxyNfL64IsuKpPCXf6LN6fyH9uDivlFSCpQdY%2B8%2ByzoQwJ6X4tdNx1bo2RM%2BDwvzZt4OCwsvCr1efzCuOGhJ4fZnRP2BKkI8AAo3Qi8WzxRSgKrpg9vJGH0YrgfKlIw0VcaC9ZbHnwbOhUNmumD%2FQ79rtBQZeYwP0lEhTxwyG042gtWqX6HGAqR0oRJsLeVmGo01T0G3vX42NBxBiSswamXvaTszEGtytJBRfb3zQtqvX%2FHAQL3pzo9ZblBo7mNATwMJSYzMQGOqUBs8DNjJRRwEXFeQyZIKrkzt2gW%2BMrJLL4vWGiIbJDolZ0CkTza7l32TMaYhhjZ%2FDh2KnxlghB%2BRit%2BxPyBcZdmvsk5rU6laP8%2FT0lBQdfLyaI1O0FN2AYykGHsB%2BxBn51Tl8eWNn9o%2FpIr6X5O%2Bjl%2BN72%2BRzbEAu9YV2Ws%2BXWfun85D83r6hbxgku1zPsMmJWEvE9eajMD24WdIsVtNuNW803YDZT&X-Amz-Signature=6de893534920bb92e75f99bae3d03941c0e4d503cef174cb744ef91470296f03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMW63SWD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIB9hml%2FGAO3Yhw0z4A89dVzFHXJdYVyhkxC%2FybcNFK7pAiEA3blD8HD1bSe4AsQx%2B3d7LFhCz1qN6X99C2%2FsplM7M4oq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMm4ipFbX9NzPQW99CrcAw7GSo5iFzzKSpWa0qQMAkftD%2FMMdoNBaYD%2BhIg39LuXo%2BjK0hNu9vHqZVCcV6huhDWku%2FpmlAvyC%2FcPD%2BWCuKjReErTXMJKUMwQBVn5%2F5cne6V%2BUHorFhpUIPvZRmu52ZjE4juxuNbb7hSe1DmLxar5CJIId2x3EFwnSLCiPz8jNUKKQel5%2BsGktnwaPJA7E21KUrpNDjSbCilLMkb3Yir3AXy0TRrlnPeyAdqF5k59CIlW%2BLPj71UVJCIlCYvD45zhP%2FQTjgPhWmVB3hat%2BammEsuw1RbL3HacuyToBXsNVwyqZXJP%2F2EFROmLCNmnZ1hPGJsWsnJq9e339CNykTsgk%2F0srXOMrglQKqwn1wM9t2efO1CCeEDJLrmxyNfL64IsuKpPCXf6LN6fyH9uDivlFSCpQdY%2B8%2ByzoQwJ6X4tdNx1bo2RM%2BDwvzZt4OCwsvCr1efzCuOGhJ4fZnRP2BKkI8AAo3Qi8WzxRSgKrpg9vJGH0YrgfKlIw0VcaC9ZbHnwbOhUNmumD%2FQ79rtBQZeYwP0lEhTxwyG042gtWqX6HGAqR0oRJsLeVmGo01T0G3vX42NBxBiSswamXvaTszEGtytJBRfb3zQtqvX%2FHAQL3pzo9ZblBo7mNATwMJSYzMQGOqUBs8DNjJRRwEXFeQyZIKrkzt2gW%2BMrJLL4vWGiIbJDolZ0CkTza7l32TMaYhhjZ%2FDh2KnxlghB%2BRit%2BxPyBcZdmvsk5rU6laP8%2FT0lBQdfLyaI1O0FN2AYykGHsB%2BxBn51Tl8eWNn9o%2FpIr6X5O%2Bjl%2BN72%2BRzbEAu9YV2Ws%2BXWfun85D83r6hbxgku1zPsMmJWEvE9eajMD24WdIsVtNuNW803YDZT&X-Amz-Signature=d4cb69639ecc4b55273d2cfd98dbef7508dbe0e9863104b6da49822720341f1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMW63SWD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIB9hml%2FGAO3Yhw0z4A89dVzFHXJdYVyhkxC%2FybcNFK7pAiEA3blD8HD1bSe4AsQx%2B3d7LFhCz1qN6X99C2%2FsplM7M4oq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMm4ipFbX9NzPQW99CrcAw7GSo5iFzzKSpWa0qQMAkftD%2FMMdoNBaYD%2BhIg39LuXo%2BjK0hNu9vHqZVCcV6huhDWku%2FpmlAvyC%2FcPD%2BWCuKjReErTXMJKUMwQBVn5%2F5cne6V%2BUHorFhpUIPvZRmu52ZjE4juxuNbb7hSe1DmLxar5CJIId2x3EFwnSLCiPz8jNUKKQel5%2BsGktnwaPJA7E21KUrpNDjSbCilLMkb3Yir3AXy0TRrlnPeyAdqF5k59CIlW%2BLPj71UVJCIlCYvD45zhP%2FQTjgPhWmVB3hat%2BammEsuw1RbL3HacuyToBXsNVwyqZXJP%2F2EFROmLCNmnZ1hPGJsWsnJq9e339CNykTsgk%2F0srXOMrglQKqwn1wM9t2efO1CCeEDJLrmxyNfL64IsuKpPCXf6LN6fyH9uDivlFSCpQdY%2B8%2ByzoQwJ6X4tdNx1bo2RM%2BDwvzZt4OCwsvCr1efzCuOGhJ4fZnRP2BKkI8AAo3Qi8WzxRSgKrpg9vJGH0YrgfKlIw0VcaC9ZbHnwbOhUNmumD%2FQ79rtBQZeYwP0lEhTxwyG042gtWqX6HGAqR0oRJsLeVmGo01T0G3vX42NBxBiSswamXvaTszEGtytJBRfb3zQtqvX%2FHAQL3pzo9ZblBo7mNATwMJSYzMQGOqUBs8DNjJRRwEXFeQyZIKrkzt2gW%2BMrJLL4vWGiIbJDolZ0CkTza7l32TMaYhhjZ%2FDh2KnxlghB%2BRit%2BxPyBcZdmvsk5rU6laP8%2FT0lBQdfLyaI1O0FN2AYykGHsB%2BxBn51Tl8eWNn9o%2FpIr6X5O%2Bjl%2BN72%2BRzbEAu9YV2Ws%2BXWfun85D83r6hbxgku1zPsMmJWEvE9eajMD24WdIsVtNuNW803YDZT&X-Amz-Signature=d3970c903137c9e360d34ff43636c1eb71100bda1764386e14a9bd48161f59aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMW63SWD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIB9hml%2FGAO3Yhw0z4A89dVzFHXJdYVyhkxC%2FybcNFK7pAiEA3blD8HD1bSe4AsQx%2B3d7LFhCz1qN6X99C2%2FsplM7M4oq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMm4ipFbX9NzPQW99CrcAw7GSo5iFzzKSpWa0qQMAkftD%2FMMdoNBaYD%2BhIg39LuXo%2BjK0hNu9vHqZVCcV6huhDWku%2FpmlAvyC%2FcPD%2BWCuKjReErTXMJKUMwQBVn5%2F5cne6V%2BUHorFhpUIPvZRmu52ZjE4juxuNbb7hSe1DmLxar5CJIId2x3EFwnSLCiPz8jNUKKQel5%2BsGktnwaPJA7E21KUrpNDjSbCilLMkb3Yir3AXy0TRrlnPeyAdqF5k59CIlW%2BLPj71UVJCIlCYvD45zhP%2FQTjgPhWmVB3hat%2BammEsuw1RbL3HacuyToBXsNVwyqZXJP%2F2EFROmLCNmnZ1hPGJsWsnJq9e339CNykTsgk%2F0srXOMrglQKqwn1wM9t2efO1CCeEDJLrmxyNfL64IsuKpPCXf6LN6fyH9uDivlFSCpQdY%2B8%2ByzoQwJ6X4tdNx1bo2RM%2BDwvzZt4OCwsvCr1efzCuOGhJ4fZnRP2BKkI8AAo3Qi8WzxRSgKrpg9vJGH0YrgfKlIw0VcaC9ZbHnwbOhUNmumD%2FQ79rtBQZeYwP0lEhTxwyG042gtWqX6HGAqR0oRJsLeVmGo01T0G3vX42NBxBiSswamXvaTszEGtytJBRfb3zQtqvX%2FHAQL3pzo9ZblBo7mNATwMJSYzMQGOqUBs8DNjJRRwEXFeQyZIKrkzt2gW%2BMrJLL4vWGiIbJDolZ0CkTza7l32TMaYhhjZ%2FDh2KnxlghB%2BRit%2BxPyBcZdmvsk5rU6laP8%2FT0lBQdfLyaI1O0FN2AYykGHsB%2BxBn51Tl8eWNn9o%2FpIr6X5O%2Bjl%2BN72%2BRzbEAu9YV2Ws%2BXWfun85D83r6hbxgku1zPsMmJWEvE9eajMD24WdIsVtNuNW803YDZT&X-Amz-Signature=ee94a5e744fbc450190b1ff3682dfc4173b7cd2d9a8765664d06441353fd4431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMW63SWD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIB9hml%2FGAO3Yhw0z4A89dVzFHXJdYVyhkxC%2FybcNFK7pAiEA3blD8HD1bSe4AsQx%2B3d7LFhCz1qN6X99C2%2FsplM7M4oq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMm4ipFbX9NzPQW99CrcAw7GSo5iFzzKSpWa0qQMAkftD%2FMMdoNBaYD%2BhIg39LuXo%2BjK0hNu9vHqZVCcV6huhDWku%2FpmlAvyC%2FcPD%2BWCuKjReErTXMJKUMwQBVn5%2F5cne6V%2BUHorFhpUIPvZRmu52ZjE4juxuNbb7hSe1DmLxar5CJIId2x3EFwnSLCiPz8jNUKKQel5%2BsGktnwaPJA7E21KUrpNDjSbCilLMkb3Yir3AXy0TRrlnPeyAdqF5k59CIlW%2BLPj71UVJCIlCYvD45zhP%2FQTjgPhWmVB3hat%2BammEsuw1RbL3HacuyToBXsNVwyqZXJP%2F2EFROmLCNmnZ1hPGJsWsnJq9e339CNykTsgk%2F0srXOMrglQKqwn1wM9t2efO1CCeEDJLrmxyNfL64IsuKpPCXf6LN6fyH9uDivlFSCpQdY%2B8%2ByzoQwJ6X4tdNx1bo2RM%2BDwvzZt4OCwsvCr1efzCuOGhJ4fZnRP2BKkI8AAo3Qi8WzxRSgKrpg9vJGH0YrgfKlIw0VcaC9ZbHnwbOhUNmumD%2FQ79rtBQZeYwP0lEhTxwyG042gtWqX6HGAqR0oRJsLeVmGo01T0G3vX42NBxBiSswamXvaTszEGtytJBRfb3zQtqvX%2FHAQL3pzo9ZblBo7mNATwMJSYzMQGOqUBs8DNjJRRwEXFeQyZIKrkzt2gW%2BMrJLL4vWGiIbJDolZ0CkTza7l32TMaYhhjZ%2FDh2KnxlghB%2BRit%2BxPyBcZdmvsk5rU6laP8%2FT0lBQdfLyaI1O0FN2AYykGHsB%2BxBn51Tl8eWNn9o%2FpIr6X5O%2Bjl%2BN72%2BRzbEAu9YV2Ws%2BXWfun85D83r6hbxgku1zPsMmJWEvE9eajMD24WdIsVtNuNW803YDZT&X-Amz-Signature=64305f9ad09fdb2bd7bc00edad78bfa2bfd025a1de0618f38207398b3fd33815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMW63SWD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIB9hml%2FGAO3Yhw0z4A89dVzFHXJdYVyhkxC%2FybcNFK7pAiEA3blD8HD1bSe4AsQx%2B3d7LFhCz1qN6X99C2%2FsplM7M4oq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMm4ipFbX9NzPQW99CrcAw7GSo5iFzzKSpWa0qQMAkftD%2FMMdoNBaYD%2BhIg39LuXo%2BjK0hNu9vHqZVCcV6huhDWku%2FpmlAvyC%2FcPD%2BWCuKjReErTXMJKUMwQBVn5%2F5cne6V%2BUHorFhpUIPvZRmu52ZjE4juxuNbb7hSe1DmLxar5CJIId2x3EFwnSLCiPz8jNUKKQel5%2BsGktnwaPJA7E21KUrpNDjSbCilLMkb3Yir3AXy0TRrlnPeyAdqF5k59CIlW%2BLPj71UVJCIlCYvD45zhP%2FQTjgPhWmVB3hat%2BammEsuw1RbL3HacuyToBXsNVwyqZXJP%2F2EFROmLCNmnZ1hPGJsWsnJq9e339CNykTsgk%2F0srXOMrglQKqwn1wM9t2efO1CCeEDJLrmxyNfL64IsuKpPCXf6LN6fyH9uDivlFSCpQdY%2B8%2ByzoQwJ6X4tdNx1bo2RM%2BDwvzZt4OCwsvCr1efzCuOGhJ4fZnRP2BKkI8AAo3Qi8WzxRSgKrpg9vJGH0YrgfKlIw0VcaC9ZbHnwbOhUNmumD%2FQ79rtBQZeYwP0lEhTxwyG042gtWqX6HGAqR0oRJsLeVmGo01T0G3vX42NBxBiSswamXvaTszEGtytJBRfb3zQtqvX%2FHAQL3pzo9ZblBo7mNATwMJSYzMQGOqUBs8DNjJRRwEXFeQyZIKrkzt2gW%2BMrJLL4vWGiIbJDolZ0CkTza7l32TMaYhhjZ%2FDh2KnxlghB%2BRit%2BxPyBcZdmvsk5rU6laP8%2FT0lBQdfLyaI1O0FN2AYykGHsB%2BxBn51Tl8eWNn9o%2FpIr6X5O%2Bjl%2BN72%2BRzbEAu9YV2Ws%2BXWfun85D83r6hbxgku1zPsMmJWEvE9eajMD24WdIsVtNuNW803YDZT&X-Amz-Signature=630dcd20115db193dbb8ac658b73e385604590dc51db4deb2eb397f01e3a32a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMW63SWD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIB9hml%2FGAO3Yhw0z4A89dVzFHXJdYVyhkxC%2FybcNFK7pAiEA3blD8HD1bSe4AsQx%2B3d7LFhCz1qN6X99C2%2FsplM7M4oq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMm4ipFbX9NzPQW99CrcAw7GSo5iFzzKSpWa0qQMAkftD%2FMMdoNBaYD%2BhIg39LuXo%2BjK0hNu9vHqZVCcV6huhDWku%2FpmlAvyC%2FcPD%2BWCuKjReErTXMJKUMwQBVn5%2F5cne6V%2BUHorFhpUIPvZRmu52ZjE4juxuNbb7hSe1DmLxar5CJIId2x3EFwnSLCiPz8jNUKKQel5%2BsGktnwaPJA7E21KUrpNDjSbCilLMkb3Yir3AXy0TRrlnPeyAdqF5k59CIlW%2BLPj71UVJCIlCYvD45zhP%2FQTjgPhWmVB3hat%2BammEsuw1RbL3HacuyToBXsNVwyqZXJP%2F2EFROmLCNmnZ1hPGJsWsnJq9e339CNykTsgk%2F0srXOMrglQKqwn1wM9t2efO1CCeEDJLrmxyNfL64IsuKpPCXf6LN6fyH9uDivlFSCpQdY%2B8%2ByzoQwJ6X4tdNx1bo2RM%2BDwvzZt4OCwsvCr1efzCuOGhJ4fZnRP2BKkI8AAo3Qi8WzxRSgKrpg9vJGH0YrgfKlIw0VcaC9ZbHnwbOhUNmumD%2FQ79rtBQZeYwP0lEhTxwyG042gtWqX6HGAqR0oRJsLeVmGo01T0G3vX42NBxBiSswamXvaTszEGtytJBRfb3zQtqvX%2FHAQL3pzo9ZblBo7mNATwMJSYzMQGOqUBs8DNjJRRwEXFeQyZIKrkzt2gW%2BMrJLL4vWGiIbJDolZ0CkTza7l32TMaYhhjZ%2FDh2KnxlghB%2BRit%2BxPyBcZdmvsk5rU6laP8%2FT0lBQdfLyaI1O0FN2AYykGHsB%2BxBn51Tl8eWNn9o%2FpIr6X5O%2Bjl%2BN72%2BRzbEAu9YV2Ws%2BXWfun85D83r6hbxgku1zPsMmJWEvE9eajMD24WdIsVtNuNW803YDZT&X-Amz-Signature=9524e27dc054c5abd6527b0c1323038d15dd5c989376fd96e84e09f5c4787024&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRK7VNHP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQC9x9FX2mJSg8SMmdGy47SS5KgAZMXPBn40nmsgG1mBUAIgZw4YIsG9iKZPc%2BK7JIk4ndzJz9sTbzgeRq%2FZl9TZxHIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHacToZDRz94yP%2FszircA15CyLXInRt2jp2U5bYFf24Vle%2BLULx3UNWutzBn27%2FhAwgDtUs8pTORGrnTKOMVrnQ3zWUxUJzLIHmU8LpPuAs0NWPpZvaTPDUqiGDfNhKAzpp5DldTP%2BohagZWbx1Zb88dAl7rb2LZ4UKnpem3L6t6XqK5RheMHTIo4zvDuQlJrRVM%2FmZcoa%2FTpIIcz4g7zaiCA%2BNhWRRi40S823icwVxNj%2Bhw1ACUQQqzrPd2OJq7Qjjk0NTW98RQpx7jS12AD0RA9ooZe6HZMjwSDsDdRB5QqTqrv5n%2FTKi2M7a2f8KweFWonVZwGcJjMLVvhWYEuLNMIt9wW1XlRxXmnZPkIghAySxKd%2FMYOs7L70Rfo2aBiIoN%2F0%2B2j42uLI0%2F2ppb669lvsBmEyEk6SPacqNEMmkKKbxnb9GC4h3IQ%2Bf%2BxB%2BfgeoWnLCBM7PXRxiBmLUtfS8zwSzcz4HYunC95Flez3jBH9mTabJu5hKidpwstm9ylpqvlyMNecTC6VNbPCLy60mLsasItYzmsWmMu5R6dT%2BtWybHzDc8T%2F963clhSaDV84fVo6WfwHJ5qdQC5L2bt7WWvrjjGR3fTQzD%2FDZRH%2BTMegFUKODARVZHZxwc60dANzltK7%2FFruXwPNS%2FMICXzMQGOqUBX2%2BDjEsqJxJ3W6gOsEyk9D5jYv%2B7NTWkUjmu0hFkHI7THxrFC2XdgPP9C4R1u1zsP39U61%2B5VCqhtm1tFKjm08I7AuKW3bFmVX%2F47BTYOu3Vj3EkRzurUXN1gV4R7o7dwQbzSzIXia0Q9cOXljbgZaNu86ry%2FxS1mPbplp9XAzlw%2FIPJ9vanbhc2TAQjLKJhgeCTHChtSkb9wDQGNI0%2Beh8hy9n3&X-Amz-Signature=1befacddbf751add1b86a87a2266cb6928ae0945f232581b4cbe70b72c908dc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V5TDYRP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCICzZamXpi4FXO14EVPApsGlAcJyEaAB4NEGPiWDOjqS1AiBhdMjNE7g%2B6kOgq2VEyTHY%2BuOp1lFYFGIZq8e%2B%2Fr7e3ir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMXAsVxY%2BDVlksGNLGKtwDZ7YHSmQPYkTpD6Rjejc138IftoN9nwvHNbHDWVKwI3jLFH23I%2BHLYazAclLnvnJsEGHNPo4%2B%2B8DZ0nr3obJ0bx8EgszK3EbWOVVCJbGqHVN9ynvbMGxxLZzgjL5sK%2B4L5zeaVoZsTQtzlCSErYOyX0iTQDt5PZcSvM2aeDupEi1rf0HJcjnLsbCpjipiQIDspFLZcrLa7%2BbbR3tszViRvKJWsezfuidNYHGXKUjASSCCOW4oBiWtmMnETe159dYSNRY%2F0hEenOOMlY9cqhuFEqkDJKenj5fxGXHfLR0V07S0ph7s2bMhUoxhymbhc9rvxcejTN174euMfidfZpLGLEZD0J%2Bb1QpUspny0etWHVPiKeAcfXOT%2F4y3QEwgFiustaixMlRuEatVOQPR4bG1ZjA84NylkM7qq5mIl63K%2FgsJcUfG06CSqJy%2F4dj5UslWX9I5Ai%2FB6ZJzPQicKRmChcT5QoWiuIgZiU5GPAZV9cnWIy1Jd2imfrdx5InjLv4jUJ97yAdoOiDwTvupFiMzTWoR67YckH1u3SPn4IudP%2FxQZDwmb4QvCVrYwPlfXoy9lyIOE1NMYi0sS4NndNLw2Su29lAAqpjcCERjcHpZmkx7R1mnGOnCcLPLY2kwoZbMxAY6pgFoQHf8TT2bnJRMXICoXlebcO8pl%2BXeG5IorXBto3%2FuVpSyVj5b73a5t0EdKWCXV2bfhhb%2FrMqeRqsQ54kexWAAf1DFaSeGriJ%2BL17ma4lNpfpej8Xa6q25VqirLKUq3ysbVQinpKgBSxcF7c%2FARDwDR7uVVgLU%2F6NTKPnmy%2FV71B1XVVmYddyIExhq70EzR7iR%2Bz9N9O4F2Jvo7xQd37%2F1FimttgY%2F&X-Amz-Signature=457d0529ff0d4af754e5e4803759df6f942e4377cdf9d5302754ec6ebac90e26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBIU56NM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCBT4aVBtyp11VtX69xHeWewAdJB%2FdoltA0qjop1%2FnFYQIhAIsxQFDqJNLXrhI9PEnpXs0yvtYa0AytoVOltbJS%2BZNEKv8DCHEQABoMNjM3NDIzMTgzODA1IgyaJUhihbJIg4th7bwq3AOiSX52wOtq8IZ2xRH7ZcYCgXXdknvNFyBYdqN10bKF8TGlm7i98kT6n5S9HptzU8Fq6Orv9wy41UoqCxn9oiR%2FTFpbNX8BceIr5raLHhFKgMymLM55KsipEvGoywPfiAuxkL%2B04PpsYt%2B6ajO8%2B2fpdI3KaOMLdGzT8W9oZHewU9Q1ovbyDLq0bduUA9yve3diY2TmVtRMSrKWMdeIZrC0ehcoSMYZdZ13HfmLPXXvMofMaUtYTndFwr8of2iMXGWovvJD22gW3w%2ByoAH5fmukG8x9HYLQkwSa5KWHFjbRoeIOi1pn5sD6Xsz4fRpPOSUjT8u9GbHO%2BPBpOII95X618PjBAGWaEHzL7iAeGAWAVr2HyTmHRZMdEn2XK0m4YGRN89WElhFSWlg3CLdv0H2%2F0joQ5MYZQQKKL9hoIjkeiEKEsuh%2FS%2BuBFOXuPaYXZFKdBJijBgVaL%2F%2B00e77D6dVTfxBi%2B2XNT9yQcrQ6EUtYG%2FeMpItU6SGTu2Sff6%2Fq2vtkygCxQJ35MA9XVqq4CiTIADoPt1kOr8gLNp121x8Bu6pDxAH9PxjcQ50VSARBuls17Tb3fbg1kxn1s6RlK%2BjxteSDd%2FzEMY%2FBnKwDo5pDa36CZDDS3AGh1lnMzCml8zEBjqkAcN9iZKOa7StN4zuNn%2FzEfZaAVt3BzikEhkSPtGDHKmtNbvpMX1q4C0kLwS%2Bh5CX8x6stRviHgdjTM064FVMZiqxEYoVi71N%2F7EokCRE4wwmxb4OWSsyx39f5cqPwolalZuRIg5tSLCtRrVMtBeE%2FQHGTiJP6LaNngnDcgyABH9haF108j8fL%2FTdX%2B%2BOnrSULafACoBnV9KdADlQf9FU8o2Ggy6Z&X-Amz-Signature=3c6a089115d75ef6ed74a9049a762dfc270c9a528b5a2db9ef82cc59f9e1ab8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMW63SWD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIB9hml%2FGAO3Yhw0z4A89dVzFHXJdYVyhkxC%2FybcNFK7pAiEA3blD8HD1bSe4AsQx%2B3d7LFhCz1qN6X99C2%2FsplM7M4oq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMm4ipFbX9NzPQW99CrcAw7GSo5iFzzKSpWa0qQMAkftD%2FMMdoNBaYD%2BhIg39LuXo%2BjK0hNu9vHqZVCcV6huhDWku%2FpmlAvyC%2FcPD%2BWCuKjReErTXMJKUMwQBVn5%2F5cne6V%2BUHorFhpUIPvZRmu52ZjE4juxuNbb7hSe1DmLxar5CJIId2x3EFwnSLCiPz8jNUKKQel5%2BsGktnwaPJA7E21KUrpNDjSbCilLMkb3Yir3AXy0TRrlnPeyAdqF5k59CIlW%2BLPj71UVJCIlCYvD45zhP%2FQTjgPhWmVB3hat%2BammEsuw1RbL3HacuyToBXsNVwyqZXJP%2F2EFROmLCNmnZ1hPGJsWsnJq9e339CNykTsgk%2F0srXOMrglQKqwn1wM9t2efO1CCeEDJLrmxyNfL64IsuKpPCXf6LN6fyH9uDivlFSCpQdY%2B8%2ByzoQwJ6X4tdNx1bo2RM%2BDwvzZt4OCwsvCr1efzCuOGhJ4fZnRP2BKkI8AAo3Qi8WzxRSgKrpg9vJGH0YrgfKlIw0VcaC9ZbHnwbOhUNmumD%2FQ79rtBQZeYwP0lEhTxwyG042gtWqX6HGAqR0oRJsLeVmGo01T0G3vX42NBxBiSswamXvaTszEGtytJBRfb3zQtqvX%2FHAQL3pzo9ZblBo7mNATwMJSYzMQGOqUBs8DNjJRRwEXFeQyZIKrkzt2gW%2BMrJLL4vWGiIbJDolZ0CkTza7l32TMaYhhjZ%2FDh2KnxlghB%2BRit%2BxPyBcZdmvsk5rU6laP8%2FT0lBQdfLyaI1O0FN2AYykGHsB%2BxBn51Tl8eWNn9o%2FpIr6X5O%2Bjl%2BN72%2BRzbEAu9YV2Ws%2BXWfun85D83r6hbxgku1zPsMmJWEvE9eajMD24WdIsVtNuNW803YDZT&X-Amz-Signature=c41589b45bda793ec0bd07f427f60af39ed307e8f6638a197625943d6cc0c799&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GQOHCZP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIF2kHBTmwu%2F4tk58WSCqyADyJRDgzuGHH9TWjMfjEFnCAiB2u6C%2BgFU8XZGE6yjKB5Kt%2F2D8K%2BTcJqO%2BnSGj0zkwtyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMFqfnt2ZjN2GQ2e2mKtwDDhv8uniNGJpAtuOkF4HIcTJ2VbYNquK9LNkQX1eQ0WyUqAOjmPp%2BuMzp60146BCuA%2B%2BeqfqtKogBB54vS6e3FBjsnSUaUNqhmHSrLiE4ZDZswxY6onldJOVXkAzipZX06VN7krG0yqUx3vQWWvmNKNFOxQ%2FgYv3JyLoT3u6aV5ftW12Jfo3CDuLKyHzdJqAhzMbyiZ7%2F7sVWaHLmD9v9aEjtDO49mq8rJj6DTrgv4L39hsXGOhIXkM7L62IIccKndF6OLZqPxuT4jwrPT%2B5clM26LVTblNO5pbv1E7QE7o5H%2F7N3rzYPmBXfRt8%2BareQCElMva%2F4QEpd7zMZpN0D8M3%2B%2Bwb4r9%2BW%2BhcopVYHioo9970U7bibSPoVAu9vEbl4rJLGGN%2FpQVvnjGcaCk3ZvXfycCBozDIj6Ncx7HxOidTr%2FZe3xP4HWtG0cHRWXhI%2FRcWblMe7Z%2Ffq39xjsRi3KItd6RcGlHZOCs0tkHvpIqW18ZPYHE9TdPx%2FpcdTLyLBwZ8drMNQIA03hU0zo3civUgb%2BHT5gz6q1CUKjMVGPT97HortZggcFdZnnty%2F9mSBuVFvI8ckRTUqZJ81C1ay7q7e4F84QDbP8w%2FDvD1DsZZ8XXdarf9fd23e%2BxAw%2FJbMxAY6pgEamW4YxLzqOAllL%2FY3XHtiHnxP033y03jJPlCGDwKTotODoEjH%2FK5plc7hEm4o4kZuraG6sDPJJZUVjjvmcikyzpbIv4cGT0rwtylHiT71Oh2trrD0wEv%2F9Fmbtn0%2BrVhorc14a5tSAndlpma6GuSNLBcwJl8wLClcxsLmigJOaI9KwDnqZXP9V%2BezKUmtru0ZDEhCHIyhzw5i0%2B%2BNaSZAQHVxyA5g&X-Amz-Signature=8ad1bcfb58cc582206c433434fcce1f120d3c2263cc8ef27fefc45b727aea42d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMW63SWD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIB9hml%2FGAO3Yhw0z4A89dVzFHXJdYVyhkxC%2FybcNFK7pAiEA3blD8HD1bSe4AsQx%2B3d7LFhCz1qN6X99C2%2FsplM7M4oq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMm4ipFbX9NzPQW99CrcAw7GSo5iFzzKSpWa0qQMAkftD%2FMMdoNBaYD%2BhIg39LuXo%2BjK0hNu9vHqZVCcV6huhDWku%2FpmlAvyC%2FcPD%2BWCuKjReErTXMJKUMwQBVn5%2F5cne6V%2BUHorFhpUIPvZRmu52ZjE4juxuNbb7hSe1DmLxar5CJIId2x3EFwnSLCiPz8jNUKKQel5%2BsGktnwaPJA7E21KUrpNDjSbCilLMkb3Yir3AXy0TRrlnPeyAdqF5k59CIlW%2BLPj71UVJCIlCYvD45zhP%2FQTjgPhWmVB3hat%2BammEsuw1RbL3HacuyToBXsNVwyqZXJP%2F2EFROmLCNmnZ1hPGJsWsnJq9e339CNykTsgk%2F0srXOMrglQKqwn1wM9t2efO1CCeEDJLrmxyNfL64IsuKpPCXf6LN6fyH9uDivlFSCpQdY%2B8%2ByzoQwJ6X4tdNx1bo2RM%2BDwvzZt4OCwsvCr1efzCuOGhJ4fZnRP2BKkI8AAo3Qi8WzxRSgKrpg9vJGH0YrgfKlIw0VcaC9ZbHnwbOhUNmumD%2FQ79rtBQZeYwP0lEhTxwyG042gtWqX6HGAqR0oRJsLeVmGo01T0G3vX42NBxBiSswamXvaTszEGtytJBRfb3zQtqvX%2FHAQL3pzo9ZblBo7mNATwMJSYzMQGOqUBs8DNjJRRwEXFeQyZIKrkzt2gW%2BMrJLL4vWGiIbJDolZ0CkTza7l32TMaYhhjZ%2FDh2KnxlghB%2BRit%2BxPyBcZdmvsk5rU6laP8%2FT0lBQdfLyaI1O0FN2AYykGHsB%2BxBn51Tl8eWNn9o%2FpIr6X5O%2Bjl%2BN72%2BRzbEAu9YV2Ws%2BXWfun85D83r6hbxgku1zPsMmJWEvE9eajMD24WdIsVtNuNW803YDZT&X-Amz-Signature=5d2ac3ca20dc7d84ddfa90f1fb33247112d7d77413560828cbcc97ca16d6740a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647AZJY2L%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDHdBTxznbNNvQpHK049PmjiNxF20jWPpxm0RkwQxkXwQIgElgoL7Gcr%2BYCbQcgW0CfAkDFhdHVFUO32lPHMxkW66gq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDITZGVkSNfeEZUJ1ryrcA0pZ43Ox%2FOAkxle4i8AjVb8Ijf4%2BcLdz10pKgkA2CaEKWAwvtamx3OLkx4Qvoo64qDXor5uRdp0%2FvLVWutRyBLplRE0IebPon5v3FHsL305TC7Izfm2ipOWDt0NmwdA3MUvGVPB%2BQva07Kno7vzFeqbm8dPE%2BVr9OwSnkSMmjHNJ9UApge53VQwDiIUml0nBadC4yIKfFLwof4AYZhDQXdrJWROkv3Zy6oZR5VJ0a%2FKhxj%2BwA7hoa55kXc8BdrAZobBec1eRCGbZAH3x84BfizWfGe8EouqtMJBEzOR52BDdf4B9fNa6EVCVNTzghtveqTji3TIObnJW5VqvBQ4WYlb79q6lkgx236EfzU0R8IqXcqY15SqEwIz1vtsOuojjVuemiJWakI71zZWaxETkR7pqFsqp%2Becqk9jqvZBRztpQQl1yBkdRNNxPO7TUyMZaN4wjWqmla2BZCaOQm4kBCrRvXOF3K0CE5ZmsK0%2FbsmDxDQFM%2FF7l4z73OwqGTyQ1DVaO4qxUnjIxKP1xhP2kKxN6jBZSaXFcOVOAWuBwZUAR%2FAMD819nkpt92zH%2F0L1BhEg9B15FsbwoJo%2Fh48fR13UhyRSDLzFlZi7SzaloG1phv%2F5tB39gu8K89TdmMO2XzMQGOqUBUSoMgA%2FcjnvXk8okErfS3My8ksuopT86QcvLiMhIXpthUkmSQWQwakGpQA84mUknmxyaJngSWZVT%2Bvj7hC4O3zmbqXnU52V43hOoBmbU30iV7KXuhcn8LpwsjmydxbiZ%2BkCo1f%2BgFbYI0MdCQVb15NfjjUIOXTEiQ%2FnfHPkLh6SDGQnSPqXx6RI1s%2FhFiRth1bq9Y0XGpqzqEeXjHRnDxyIN20q8&X-Amz-Signature=7ff67b6647e2b55fcd0c6ad4d2904e5b6f609db9e5d1131a2d5db0d98a475be3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMW63SWD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIB9hml%2FGAO3Yhw0z4A89dVzFHXJdYVyhkxC%2FybcNFK7pAiEA3blD8HD1bSe4AsQx%2B3d7LFhCz1qN6X99C2%2FsplM7M4oq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMm4ipFbX9NzPQW99CrcAw7GSo5iFzzKSpWa0qQMAkftD%2FMMdoNBaYD%2BhIg39LuXo%2BjK0hNu9vHqZVCcV6huhDWku%2FpmlAvyC%2FcPD%2BWCuKjReErTXMJKUMwQBVn5%2F5cne6V%2BUHorFhpUIPvZRmu52ZjE4juxuNbb7hSe1DmLxar5CJIId2x3EFwnSLCiPz8jNUKKQel5%2BsGktnwaPJA7E21KUrpNDjSbCilLMkb3Yir3AXy0TRrlnPeyAdqF5k59CIlW%2BLPj71UVJCIlCYvD45zhP%2FQTjgPhWmVB3hat%2BammEsuw1RbL3HacuyToBXsNVwyqZXJP%2F2EFROmLCNmnZ1hPGJsWsnJq9e339CNykTsgk%2F0srXOMrglQKqwn1wM9t2efO1CCeEDJLrmxyNfL64IsuKpPCXf6LN6fyH9uDivlFSCpQdY%2B8%2ByzoQwJ6X4tdNx1bo2RM%2BDwvzZt4OCwsvCr1efzCuOGhJ4fZnRP2BKkI8AAo3Qi8WzxRSgKrpg9vJGH0YrgfKlIw0VcaC9ZbHnwbOhUNmumD%2FQ79rtBQZeYwP0lEhTxwyG042gtWqX6HGAqR0oRJsLeVmGo01T0G3vX42NBxBiSswamXvaTszEGtytJBRfb3zQtqvX%2FHAQL3pzo9ZblBo7mNATwMJSYzMQGOqUBs8DNjJRRwEXFeQyZIKrkzt2gW%2BMrJLL4vWGiIbJDolZ0CkTza7l32TMaYhhjZ%2FDh2KnxlghB%2BRit%2BxPyBcZdmvsk5rU6laP8%2FT0lBQdfLyaI1O0FN2AYykGHsB%2BxBn51Tl8eWNn9o%2FpIr6X5O%2Bjl%2BN72%2BRzbEAu9YV2Ws%2BXWfun85D83r6hbxgku1zPsMmJWEvE9eajMD24WdIsVtNuNW803YDZT&X-Amz-Signature=8d887564b533166ebf2e0048c4f0acfc9c253a8c664a7a6027e3834512d052f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSJ6L4YK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDHfadzDfN9QeaUr8EA2FjO3xFvkNjyK20BgB%2FqpVOaPQIgf6HUXSHxiYR3QhDbTSSeNbv6GdMWBdvkT7QjkeKNdtkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJ4w3UO%2BmV8tu0p1NyrcA%2BHZJASiSzjf0qq1K9t7Sw%2BRan%2F1%2F6AZVwphAKrn3sNGRtsBJYkcYwmAFpTxXyTEmeYY8QtPonGCHhxtwficFIZJCPJgpKuG5fmN7o10SpNTyibq1DYQHoiDBsV4goeTWb%2FlpOah6FxNG%2FtlPA3Vjwn2DLU%2FRD%2BXSV9bK66cqLjkAv7nEvwa3xh0iBoCYK8g1rRKcOXKeA2gZTs%2BPOOOWIXsErRf7lfyUBprKRn95rX%2FLry6i0K1%2F%2BuXgKXv%2B1q3WwiCkrVkvowvzxs6w8g%2FNaLdSp4d%2Fu3cx6WhYAVyF2YtQ8QXvy9cIm6Ck6YTwIW11c8c6GuDs39JzErp2%2BhFUsNFQubhG77RtmcUuo31yG6f3dBDujUB2bq1RDFvnJjO01LvMSDv%2FZ5MznZ4pwxRCL7di8fuxasKQLd2fKoG7Ss8cw1wXD%2BPyIWQtBPIWabQjxm0PaUI%2Bkm7Be4t39HIY0WD7vgNMTh%2BqvsLwxkYpp8H2%2B9OMWSa2pjND4UEwVGCuuZrpPgk9LRgq%2Fc2oze0EA5V1fBjq1jeTM45k6uqHIye6P3WcloZvaJ9HpJhfUKRkeAos1YRDM3yAGZPQJFc8ahua%2F6OvO1eQxgTxLDIo%2BBvs7fos84Uo7FqBPYvMNuXzMQGOqUB1Dd10XS%2B99NOvAzpHSPnrQKSIHpWIwktLxmIytQfoqY2HhO%2BetZDJ7Fl7Uh4NnxRpyU4S91OlRkRPG16PGPMelQirAhsZx67SKkrHsQJFeWEVxqnZuz%2FMZplB79RM%2FdgJXv5k1F7SkbmKvdPQHcuoPCoRL%2FN6u2ZfjBEymP%2Bd0NMlGNXjglDDaWtK5Ay5oMKKl%2Fb7J2MqmWUpy1rZNox%2FdlTaCpy&X-Amz-Signature=0d1d5640777ba17fdd427a7a49726f0401741016a2b1ee4d70cee05a939cbed7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMW63SWD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIB9hml%2FGAO3Yhw0z4A89dVzFHXJdYVyhkxC%2FybcNFK7pAiEA3blD8HD1bSe4AsQx%2B3d7LFhCz1qN6X99C2%2FsplM7M4oq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMm4ipFbX9NzPQW99CrcAw7GSo5iFzzKSpWa0qQMAkftD%2FMMdoNBaYD%2BhIg39LuXo%2BjK0hNu9vHqZVCcV6huhDWku%2FpmlAvyC%2FcPD%2BWCuKjReErTXMJKUMwQBVn5%2F5cne6V%2BUHorFhpUIPvZRmu52ZjE4juxuNbb7hSe1DmLxar5CJIId2x3EFwnSLCiPz8jNUKKQel5%2BsGktnwaPJA7E21KUrpNDjSbCilLMkb3Yir3AXy0TRrlnPeyAdqF5k59CIlW%2BLPj71UVJCIlCYvD45zhP%2FQTjgPhWmVB3hat%2BammEsuw1RbL3HacuyToBXsNVwyqZXJP%2F2EFROmLCNmnZ1hPGJsWsnJq9e339CNykTsgk%2F0srXOMrglQKqwn1wM9t2efO1CCeEDJLrmxyNfL64IsuKpPCXf6LN6fyH9uDivlFSCpQdY%2B8%2ByzoQwJ6X4tdNx1bo2RM%2BDwvzZt4OCwsvCr1efzCuOGhJ4fZnRP2BKkI8AAo3Qi8WzxRSgKrpg9vJGH0YrgfKlIw0VcaC9ZbHnwbOhUNmumD%2FQ79rtBQZeYwP0lEhTxwyG042gtWqX6HGAqR0oRJsLeVmGo01T0G3vX42NBxBiSswamXvaTszEGtytJBRfb3zQtqvX%2FHAQL3pzo9ZblBo7mNATwMJSYzMQGOqUBs8DNjJRRwEXFeQyZIKrkzt2gW%2BMrJLL4vWGiIbJDolZ0CkTza7l32TMaYhhjZ%2FDh2KnxlghB%2BRit%2BxPyBcZdmvsk5rU6laP8%2FT0lBQdfLyaI1O0FN2AYykGHsB%2BxBn51Tl8eWNn9o%2FpIr6X5O%2Bjl%2BN72%2BRzbEAu9YV2Ws%2BXWfun85D83r6hbxgku1zPsMmJWEvE9eajMD24WdIsVtNuNW803YDZT&X-Amz-Signature=144f9df67f122d970924eafcbf49b41464cbf86f15f47621c6284464d69221cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIPRL3RA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIDKA%2B6FncEB3pOpCTcEunuyyz0EV%2FHbU7BQg9CvFNJi1AiAWQS5i1BaMEPn%2FVj8JZLq1%2BEzdaQA%2F5DwCSNj55TNXkSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMFsb0%2BOZQUr%2BlZMiTKtwD%2FD%2FqJv8aeExor3Tr%2FhOJPNm8%2FlNxZAA0pB1e7rQNmmBYkAlsbbBoLzOw4O%2BFXpd1hfr7yKOYDE7NfdS6DzmyhPQCErYZZcxBHZtEpmlhdLYaM%2Fd4wJ0Br%2FqPk%2Bsm7ZpQe%2B83P8%2F1zRw69okvRtzN%2F5AT8j9w34c3GH15R%2FmzwXS03dr4N8PCeIlqx2Pe2xOcp%2BMbqaLPTL%2FT7Wzf75S6hVDuuIlj%2FvP91QGPHD6aQKAvF%2F3fyxtlmlkZCjKtudOsV70FXtIvWoOll8sdXVtCDeHuZKx4zPS0QFBXnd7siKzd%2F1P%2B1tBWy5hpGEiFqr%2BNpc1VIFYJRx9T3qmpraVvHWQqIfYI13AmGdC4NxKgc%2FPnjuYs%2BjXAPjj1C2MwuxmeV1jq7X0netSS7g8JDZuYcJr4oF1v%2FjA%2FnyrvyMBN1L1WaBN5bbUNr9oG5siaipi2oZJuCPkdZTfrroUffzEloLE%2FD69dxunLJpyI7q0Oy3AesEvqCgJqAs29rl55yfSnRTLrKAu87JJDlmxUebmY6KjTqPp1YBuQmZS20nNpgX7VbkhRK96itvLs7UfPYDYSx1b%2BHJs6spkUTmrinNnKrKvXiqhDgfs8CALzLBj3xBPIKmfofJ7a6JFH1Pwwm5fMxAY6pgEC90vRRUbc7MgGFxOtKpo2VxPDHqXtW24wee%2BByUYV4i9NNkAHVAuLnk2yp1QkSa64UEqR97mbgC7nFmzNLTnnz6NVspMHkfHU8mtxa%2BiAHn5oEN6%2BbbmZPnuxyOAtIwGG5k228%2Fc0J81gS0qlIDMG2TqxkXU53RUVxC0fWrGZsjW8gNveiQx%2FwejcjIZH8s6QNWIeY2yhOSf1ytidUNPGZEHtHswk&X-Amz-Signature=8e63ec3f7d96cd591a024a752f3409e08d5990c8ead8d7f4a8149e853e79be31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIQIBFT2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIH3JHQq96KuPJV%2FdMN5cX1W7QIgX4u%2Fam1If8P8nZXCEAiAW5cziLHarBAYOOyVS%2Bnd8CAWHIzcDxYWGv2bNgmndjir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMO3H8hVDFp4EI7kkAKtwDiB1J7kZlfe1YLJbXgssjEn2LFrbQHBBVy7FMpSEAr1SFaZGjk%2BQeNhogFgx8QXld38fPIfvQ6LGQzzERCQvGvC2%2BggrFvYNKXUQ7iWujuDsc7bt7rkD5YSJmhgifZAE7vUt67sGWyY%2B8VIjH%2F7z1vFR7OwArZfMn%2B%2BFYpFsvjrnNOQhBumtag43%2BjjCELPb3JKj0tYryO2mSuH1%2FRNRNSSUmQmLt25CWiYfmUyXE7dPEJ2Ms0%2BPhT3MJFBjhlDAv1psuUJDVao7HFbPERu8dFcfKBa9oPqaPu6OF3W5%2BNf0O05P8UylfkdYuz8c0%2B0512pQTBwSM2hU95l0RjrdIlpunhqxbk6yBEKz8hB3%2FrLSycX%2FrcsZ7Z165VZxBURwSe9a14%2BNvTeL3P0BxOc1%2F4TeqIcrW94iD7JvDFCM5eF1H6xU4GMfYfIeTLH9Lko3BggFw3GTakS7MUjRGV3CvDH%2F4kvEqvd24ztvGIuGG2zN6pnfH5ho7QVST2f5XmW9e3by4me6IImkzby3c1vzy7wCpBYB0Jdl5iHu8TMMK8tvqmN%2F%2B53ZEO8FTU0qJhhM6B4f2oCOwrx3sl%2FWz83B4P1kIdb4KGfMd5tR8iyRkbxEzfEEvBy759RfcY4Iw%2F5fMxAY6pgG4PORtFlCe8KeIx46v%2BYUK74Vku4LtMsU3q8GpFAT%2B%2BdPm%2FcvgIyzznqDo%2BrN15fBjx0v6ByxO980dAT2GaUOyT%2Fj%2FwvmvYQvXkIfA6q04Q%2B2iqWL3fmZQxcRmp9nmhUeFvQRs1cPNjZLC4ljMS9NAsn%2Bgp3GUPj%2FQwcUgVf0kMS3O3HNBwnpQx5rqKSx57SUOYQ2w%2B802rAADdXulkiQ%2FFehmd3iQ&X-Amz-Signature=ad24a0b9da632d11c3705abbaf27f128d564bdd32131354b6feb879ff7e649a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QICNKIC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCICqjW0fF%2BMHkWvJA9NM0DE%2BdDzq%2Feoj0oQu6hlBYT9jYAiEAwPxchacfGdri8tPgv5G94Ic7Jz8RY6fOeyH094D6Y4wq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBEZ0WEiaxNA%2FdEEjSrcA%2BoiHWfiFzo7deJkq252%2FZb1FupyKfcTxZX%2BVZR3lJt9Xxs02R%2FE%2BJuGTz4EnQugLDNQNdsBxOYcXIhEZOP7qd3Mko4JJlu8sGefrCNtzsu%2FC5MAsmNgsQHKv5V0D8v%2BtzlMoeCYGN%2FG38%2Fo%2BD8izVPBG7e8ZA%2BbExDdX7pnBm%2B3Wb%2Fz0%2F3IiADb5behg5a1EdEJtD7pE9ygT4oHV6Ns740BespeSqa%2B7eWK6xpRTrEhKwzzfRk4vnMi3%2BxK3Pm2f%2BWuUIEWEz10lbgPsk%2FhYRx9R8fMdxUhdAcGtZatGIMMptNqkHaMTMNBtSQZ3FWVF82LegCAPKZgtEQo64WvuahqUsJ%2F307%2F2gUJx1Qh%2BnfjgpFD0RN6LRZ3OmcYDD5ixI0dVR7i5KkcKJfAjcjtAjcyVFTsor4p1VRP2R5CgEvYcHONlyguKkcdzFC8jg9cpzmc2eMVj9EKrQcIleSepmKNGz5BL59SK5gB4436QL94L7%2Fh4l63Uozgv3XDySN0eds6%2BRECKKuPITaLejK4SumH1Ma6tmhBpfhHk68RYwn4tXt4H9S1h1NXk0B%2FULijju8UHQHsM%2FvYIILuErVjQocur6P0WkyqfBAC9%2B76LlX1TrBeXYIbLLIXMCCLMOKYzMQGOqUBwK0zFm3m52goOUgNeP9yJRbdmfeGyEotFQg2MPPaCzCuKaa6pqCcs23BDswa0%2Fwx5yq%2BT%2FhLnnjesW8%2BLiaT3B2PhkoobnjUVpW613yHHIGpnRNSOkLY5KKz9xof1Z6cBMHK9KBU40do%2FXwe%2Fk97B1yr1p3iX65PMEsXZ%2BCfs1TZKNX%2BKMz8lQgk%2BRF2Ybdum1%2BgvFr4XwMRQd3x4VuirwSnq7Dd&X-Amz-Signature=cdbbdefa974ffdca23207d2642bab4b8d88c9922bd1cd231bc28450c861aa54c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FKJFC4S%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIEzYbYnUNHG6NPLw64mcQc6iwEmiyVXICdeWTb7DoJPpAiBxjOpWs7IFeckwzOB8eFCE6epNrwWYbipOG5UTnt0gkSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMBs6zFuACJ5tTcULaKtwD1iraNwh8mzQI010my1pVqoh3K4dR4yPG6blOl3uiM%2BJ9pGucullL6juFhbXAZDdI0l47%2FcwmwXkkILTVxll8Ipazzpkq3plN40opaTzLRarg0%2BqZ73zvfuWeiGAedCVjO91kWu4q%2FNdAO107q%2BVAc1NvFmFDrE9L47FaecODb3I2BboJMsvtLMKZtA3pyej0uospgU1GqVV42qQfnMwAXFe%2BdZjUAUQkOoHaJcprI%2BIwnsjB66KsxE79tsjxLzzf71%2Ff%2FWLI2iO7TAnFvS9p6UgQAjjh3YbM1fxoNT9EvdKHDyq20LIE3PAGBSj3spgJans3Mu2egaQO2XnJ%2BHFa1jaoHQ1Im6tT8NDpkJcKpY53GCOYkIyKyKNL5QwktRKPPN4Pk6uZRBi%2B8m10%2BKyc2VvxwpqgyAMaKZPXNALjhrWlUsw70Ky1GbJE0u3SQ%2BalMKdyG82IsmYx0pa5DUPYhZWYVkpjjannV2hk3P17Wm%2BQMjDGMFccDbc4mQv0l4qZVZwD0fUnKLc2UP2SxaNDdNrNLGnK3oX0YBT%2BqfivOZGPktb35JGGtyjS0%2BWf4eR2bWH49wXAGO7N9DYYNrXjjmJIYMOy3JONEPysS68d12GsrN1El76jjKA2rRswnJbMxAY6pgGqP4CB5eziOZslcGUbNnh7xPMBwSB1KLd7dhB47anbg4WkjVu%2Fg0cEr1K1OVtg3nNScKDYTKdmTXZSy61O39zl6B%2BUI6D5PF2PFDj5V7Kwj4E7Y%2FNGUjfDWUoGwoqF%2BHls2Jdu3Ygzzc2rfQImjHW1hXfLk850qVPdKcNJk21rNf%2BzmjnqEqV6fw5%2BakKaZMMSUt2O45l7%2BEmvTDbNXkeo9dQpgjXt&X-Amz-Signature=d70ce16716f02ba2bc3ca05dd0c7694605e9f8cc1d4e2f75fd501f241d33660c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIUYILIW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCYcZTy0NRWk113pc3CgPCPCYf5OVY5zxyTlEaB1Tu3GgIhAOXypQrXwlvh1AZoJLv2pJKjkQ%2F36eJiiafk6WtJRMspKv8DCHEQABoMNjM3NDIzMTgzODA1IgzoLhEsMAOBwFjsoVIq3APGhF4io4h9%2BpiVghISpoq5VItPuPSaVr4puAmT%2B2PqZp%2Fnnhj0VdbvbHsdQjL0QCnvuwLNs0ea8PAaSREHl4QJ%2Bmy9kQR3OhxlcQkMdDS5JlqBAWAadcU%2BbeNdYervoP2IX7qLLV2oq9jT6tKTIDgBlIKId%2B4kQovhd2eNLHWgnbXIZm00QJPtxvevlDVrvzrKWDl1R5eNz%2FCg4AU21mUbtBxd5E0McYteJ%2FhG4iMd98XiPWc%2FwMHHq7hcHH%2BUa2Rl8k8v0FLKEI0SbIUYh0huuyq1Khm2K4r%2FQMOwy5yhHcONBuikQ50qxy8HpmMg%2BKi2e1k5AbVdBafS0nUlsj8aK7XN4aWGRc7SS0D%2FOuJ83v3uFNc0Ra3SF9peMhzZyaKaOYgC262AcIyZKxO0tp26vfgeWUesP4lnJLnrohNICbVrFXFAHrrsY%2FE5CUoAZOCF6pTswdQe1rk28RJCJzpKE3IBAZybsSWhomZD93OSThTKwOypuoIpgJefXcJlQYBYlIYqq%2BMEzU7f9ZGiP1GNiWAszTd5DKQhNYFOc4226ylKIR2lC5p5jmdGZHDzWFb%2BvIUdYJVEop9IwGvrhd07tWu67lFE43pFJZaEHEJl%2BOIJrnpoG6j0oLsC4DDOl8zEBjqkARhyvzouha%2F5cL4Wh%2B99QMWJfU45BPyArSe8Z7IWLSs9VwJJcKV3igS%2Fb7lC2%2BT%2BCxji8VI64Nn7S6MdQc67kWSm2u%2Fe6jByQ0eFW%2F1Jrag2rXwfzNIR%2F6ZpxsIXdW5wk%2BM1EMBCfdJzZnrDVD0gz9jmWKmIolsiqbPxBbIauebzyfJjkQP7%2BCXpbZ52AGK3hUWJ6hpWZt0hEhS9ELIhVKK4Z0Y0&X-Amz-Signature=99059bf0b36b04ea6f65f227f13aba52b3fda098123b1f54543954c6b94f1a3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMW63SWD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIB9hml%2FGAO3Yhw0z4A89dVzFHXJdYVyhkxC%2FybcNFK7pAiEA3blD8HD1bSe4AsQx%2B3d7LFhCz1qN6X99C2%2FsplM7M4oq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMm4ipFbX9NzPQW99CrcAw7GSo5iFzzKSpWa0qQMAkftD%2FMMdoNBaYD%2BhIg39LuXo%2BjK0hNu9vHqZVCcV6huhDWku%2FpmlAvyC%2FcPD%2BWCuKjReErTXMJKUMwQBVn5%2F5cne6V%2BUHorFhpUIPvZRmu52ZjE4juxuNbb7hSe1DmLxar5CJIId2x3EFwnSLCiPz8jNUKKQel5%2BsGktnwaPJA7E21KUrpNDjSbCilLMkb3Yir3AXy0TRrlnPeyAdqF5k59CIlW%2BLPj71UVJCIlCYvD45zhP%2FQTjgPhWmVB3hat%2BammEsuw1RbL3HacuyToBXsNVwyqZXJP%2F2EFROmLCNmnZ1hPGJsWsnJq9e339CNykTsgk%2F0srXOMrglQKqwn1wM9t2efO1CCeEDJLrmxyNfL64IsuKpPCXf6LN6fyH9uDivlFSCpQdY%2B8%2ByzoQwJ6X4tdNx1bo2RM%2BDwvzZt4OCwsvCr1efzCuOGhJ4fZnRP2BKkI8AAo3Qi8WzxRSgKrpg9vJGH0YrgfKlIw0VcaC9ZbHnwbOhUNmumD%2FQ79rtBQZeYwP0lEhTxwyG042gtWqX6HGAqR0oRJsLeVmGo01T0G3vX42NBxBiSswamXvaTszEGtytJBRfb3zQtqvX%2FHAQL3pzo9ZblBo7mNATwMJSYzMQGOqUBs8DNjJRRwEXFeQyZIKrkzt2gW%2BMrJLL4vWGiIbJDolZ0CkTza7l32TMaYhhjZ%2FDh2KnxlghB%2BRit%2BxPyBcZdmvsk5rU6laP8%2FT0lBQdfLyaI1O0FN2AYykGHsB%2BxBn51Tl8eWNn9o%2FpIr6X5O%2Bjl%2BN72%2BRzbEAu9YV2Ws%2BXWfun85D83r6hbxgku1zPsMmJWEvE9eajMD24WdIsVtNuNW803YDZT&X-Amz-Signature=a4d431f46a99bcb9daf71ae225ed481ad4b31e6dc85961d6bb26c0fb1d98a820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMW63SWD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIB9hml%2FGAO3Yhw0z4A89dVzFHXJdYVyhkxC%2FybcNFK7pAiEA3blD8HD1bSe4AsQx%2B3d7LFhCz1qN6X99C2%2FsplM7M4oq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMm4ipFbX9NzPQW99CrcAw7GSo5iFzzKSpWa0qQMAkftD%2FMMdoNBaYD%2BhIg39LuXo%2BjK0hNu9vHqZVCcV6huhDWku%2FpmlAvyC%2FcPD%2BWCuKjReErTXMJKUMwQBVn5%2F5cne6V%2BUHorFhpUIPvZRmu52ZjE4juxuNbb7hSe1DmLxar5CJIId2x3EFwnSLCiPz8jNUKKQel5%2BsGktnwaPJA7E21KUrpNDjSbCilLMkb3Yir3AXy0TRrlnPeyAdqF5k59CIlW%2BLPj71UVJCIlCYvD45zhP%2FQTjgPhWmVB3hat%2BammEsuw1RbL3HacuyToBXsNVwyqZXJP%2F2EFROmLCNmnZ1hPGJsWsnJq9e339CNykTsgk%2F0srXOMrglQKqwn1wM9t2efO1CCeEDJLrmxyNfL64IsuKpPCXf6LN6fyH9uDivlFSCpQdY%2B8%2ByzoQwJ6X4tdNx1bo2RM%2BDwvzZt4OCwsvCr1efzCuOGhJ4fZnRP2BKkI8AAo3Qi8WzxRSgKrpg9vJGH0YrgfKlIw0VcaC9ZbHnwbOhUNmumD%2FQ79rtBQZeYwP0lEhTxwyG042gtWqX6HGAqR0oRJsLeVmGo01T0G3vX42NBxBiSswamXvaTszEGtytJBRfb3zQtqvX%2FHAQL3pzo9ZblBo7mNATwMJSYzMQGOqUBs8DNjJRRwEXFeQyZIKrkzt2gW%2BMrJLL4vWGiIbJDolZ0CkTza7l32TMaYhhjZ%2FDh2KnxlghB%2BRit%2BxPyBcZdmvsk5rU6laP8%2FT0lBQdfLyaI1O0FN2AYykGHsB%2BxBn51Tl8eWNn9o%2FpIr6X5O%2Bjl%2BN72%2BRzbEAu9YV2Ws%2BXWfun85D83r6hbxgku1zPsMmJWEvE9eajMD24WdIsVtNuNW803YDZT&X-Amz-Signature=82914dfd56438a554b8306bc33a1bc39f5810ab3b72471e6ed6b9292b7a0cd78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3AFNWDF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIBBm7m0gjdVJYw66249aIKw5p7tNhQ42QGWmZP%2FEoGFRAiEAqTTfj%2BXSdFrVlbkh9UBM97za5V3Qewe9jCmxujFZUwgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPWHsj5X%2Fq6lY%2FGuECrcAxErN%2FutKC53AyF%2BFI4WuNtat4wjsnI7cYbE%2B5ZoBH%2F8L3PbO2Cbl4XToqXVpnVAsXWBrAbKaoQ70fz3Gv2cWOEzIvyvQZvIHgLf%2BjrtGzbVf9zwQxOqJ0tf2AviOVqD%2F3605XvL%2BgXAMf3HKfVgTLOZ%2BANQsXXTv8hxGGtTRxF062mao9%2B5kygdVX7zXJIEztxv16Kqar2e7beP%2BBBORG57U6ivma5Lz8JrhRgftMAFIN1EVsy8QzWWPR2GYWUBLji5WqPEEDIVUIqhbgrTDlaMYnDz5s7te%2BYrp5rCNSCKaLpZEM8NhhNttUchQ37JnwCGo5SbzJSkX%2FIxcMfVRhnkm8%2B3MJVgS7eVd2mdrjiLlEcnxq3vVTYElJFhKSEf348Mrp2xfD5IH%2BLFyAs3N8%2F1rujcwY2052qaMkToN6E9QK6PcAvyJ9rIgvPowdor873vFFfaeti6EZ0WIHNLZ9fWWnwefItg36UlyOM71gKGyi%2BZ5y898a2o6Si3FJaD%2B8%2BKNFNkavAAjBUqI%2F9bU%2Bl1mEFS7rUjIGTY5TsuBv4tjZHTIy562bF8ngQTXSaZY1zKXst46k%2Bbs1PHocdoKWUPFlDA3reKX6x%2FnbsJNnufHfIssx4wmqxRdmRMMJuXzMQGOqUBTpgL8VzC7SqukGXYAJHkmYJ6tWNMDJBwpMrmLt5RY0xmf17FvHP6a8A3MP6ZoQ6d9tfGV5nHdHdAZwEQ92qQlrl5hl%2Bp%2B7YWj%2B3Bbm1D0do6dOo7RDuxL62kIVnhrgWpuVgoDz0GFVJDHfnRV0SqSoiYJ0aepnOB8GoO19GvnufzFy6GBC%2B23j0PU2CoH0ow0uGbDwG%2FMeGpU4ZHJCcn5wwxy5L5&X-Amz-Signature=c7a2419bd1265019749c8cdccc19bf133c0c99047ac2c180d11379939f8319c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3AFNWDF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIBBm7m0gjdVJYw66249aIKw5p7tNhQ42QGWmZP%2FEoGFRAiEAqTTfj%2BXSdFrVlbkh9UBM97za5V3Qewe9jCmxujFZUwgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPWHsj5X%2Fq6lY%2FGuECrcAxErN%2FutKC53AyF%2BFI4WuNtat4wjsnI7cYbE%2B5ZoBH%2F8L3PbO2Cbl4XToqXVpnVAsXWBrAbKaoQ70fz3Gv2cWOEzIvyvQZvIHgLf%2BjrtGzbVf9zwQxOqJ0tf2AviOVqD%2F3605XvL%2BgXAMf3HKfVgTLOZ%2BANQsXXTv8hxGGtTRxF062mao9%2B5kygdVX7zXJIEztxv16Kqar2e7beP%2BBBORG57U6ivma5Lz8JrhRgftMAFIN1EVsy8QzWWPR2GYWUBLji5WqPEEDIVUIqhbgrTDlaMYnDz5s7te%2BYrp5rCNSCKaLpZEM8NhhNttUchQ37JnwCGo5SbzJSkX%2FIxcMfVRhnkm8%2B3MJVgS7eVd2mdrjiLlEcnxq3vVTYElJFhKSEf348Mrp2xfD5IH%2BLFyAs3N8%2F1rujcwY2052qaMkToN6E9QK6PcAvyJ9rIgvPowdor873vFFfaeti6EZ0WIHNLZ9fWWnwefItg36UlyOM71gKGyi%2BZ5y898a2o6Si3FJaD%2B8%2BKNFNkavAAjBUqI%2F9bU%2Bl1mEFS7rUjIGTY5TsuBv4tjZHTIy562bF8ngQTXSaZY1zKXst46k%2Bbs1PHocdoKWUPFlDA3reKX6x%2FnbsJNnufHfIssx4wmqxRdmRMMJuXzMQGOqUBTpgL8VzC7SqukGXYAJHkmYJ6tWNMDJBwpMrmLt5RY0xmf17FvHP6a8A3MP6ZoQ6d9tfGV5nHdHdAZwEQ92qQlrl5hl%2Bp%2B7YWj%2B3Bbm1D0do6dOo7RDuxL62kIVnhrgWpuVgoDz0GFVJDHfnRV0SqSoiYJ0aepnOB8GoO19GvnufzFy6GBC%2B23j0PU2CoH0ow0uGbDwG%2FMeGpU4ZHJCcn5wwxy5L5&X-Amz-Signature=2b6444b4924f7c937b436295bc33dabcbd09bef6274147c9c815739cbcba956c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3AFNWDF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIBBm7m0gjdVJYw66249aIKw5p7tNhQ42QGWmZP%2FEoGFRAiEAqTTfj%2BXSdFrVlbkh9UBM97za5V3Qewe9jCmxujFZUwgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPWHsj5X%2Fq6lY%2FGuECrcAxErN%2FutKC53AyF%2BFI4WuNtat4wjsnI7cYbE%2B5ZoBH%2F8L3PbO2Cbl4XToqXVpnVAsXWBrAbKaoQ70fz3Gv2cWOEzIvyvQZvIHgLf%2BjrtGzbVf9zwQxOqJ0tf2AviOVqD%2F3605XvL%2BgXAMf3HKfVgTLOZ%2BANQsXXTv8hxGGtTRxF062mao9%2B5kygdVX7zXJIEztxv16Kqar2e7beP%2BBBORG57U6ivma5Lz8JrhRgftMAFIN1EVsy8QzWWPR2GYWUBLji5WqPEEDIVUIqhbgrTDlaMYnDz5s7te%2BYrp5rCNSCKaLpZEM8NhhNttUchQ37JnwCGo5SbzJSkX%2FIxcMfVRhnkm8%2B3MJVgS7eVd2mdrjiLlEcnxq3vVTYElJFhKSEf348Mrp2xfD5IH%2BLFyAs3N8%2F1rujcwY2052qaMkToN6E9QK6PcAvyJ9rIgvPowdor873vFFfaeti6EZ0WIHNLZ9fWWnwefItg36UlyOM71gKGyi%2BZ5y898a2o6Si3FJaD%2B8%2BKNFNkavAAjBUqI%2F9bU%2Bl1mEFS7rUjIGTY5TsuBv4tjZHTIy562bF8ngQTXSaZY1zKXst46k%2Bbs1PHocdoKWUPFlDA3reKX6x%2FnbsJNnufHfIssx4wmqxRdmRMMJuXzMQGOqUBTpgL8VzC7SqukGXYAJHkmYJ6tWNMDJBwpMrmLt5RY0xmf17FvHP6a8A3MP6ZoQ6d9tfGV5nHdHdAZwEQ92qQlrl5hl%2Bp%2B7YWj%2B3Bbm1D0do6dOo7RDuxL62kIVnhrgWpuVgoDz0GFVJDHfnRV0SqSoiYJ0aepnOB8GoO19GvnufzFy6GBC%2B23j0PU2CoH0ow0uGbDwG%2FMeGpU4ZHJCcn5wwxy5L5&X-Amz-Signature=436fc5b3db4028e0bc46c30ec4a2ba561387969315efd8b462cda6e97c018713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3AFNWDF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIBBm7m0gjdVJYw66249aIKw5p7tNhQ42QGWmZP%2FEoGFRAiEAqTTfj%2BXSdFrVlbkh9UBM97za5V3Qewe9jCmxujFZUwgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPWHsj5X%2Fq6lY%2FGuECrcAxErN%2FutKC53AyF%2BFI4WuNtat4wjsnI7cYbE%2B5ZoBH%2F8L3PbO2Cbl4XToqXVpnVAsXWBrAbKaoQ70fz3Gv2cWOEzIvyvQZvIHgLf%2BjrtGzbVf9zwQxOqJ0tf2AviOVqD%2F3605XvL%2BgXAMf3HKfVgTLOZ%2BANQsXXTv8hxGGtTRxF062mao9%2B5kygdVX7zXJIEztxv16Kqar2e7beP%2BBBORG57U6ivma5Lz8JrhRgftMAFIN1EVsy8QzWWPR2GYWUBLji5WqPEEDIVUIqhbgrTDlaMYnDz5s7te%2BYrp5rCNSCKaLpZEM8NhhNttUchQ37JnwCGo5SbzJSkX%2FIxcMfVRhnkm8%2B3MJVgS7eVd2mdrjiLlEcnxq3vVTYElJFhKSEf348Mrp2xfD5IH%2BLFyAs3N8%2F1rujcwY2052qaMkToN6E9QK6PcAvyJ9rIgvPowdor873vFFfaeti6EZ0WIHNLZ9fWWnwefItg36UlyOM71gKGyi%2BZ5y898a2o6Si3FJaD%2B8%2BKNFNkavAAjBUqI%2F9bU%2Bl1mEFS7rUjIGTY5TsuBv4tjZHTIy562bF8ngQTXSaZY1zKXst46k%2Bbs1PHocdoKWUPFlDA3reKX6x%2FnbsJNnufHfIssx4wmqxRdmRMMJuXzMQGOqUBTpgL8VzC7SqukGXYAJHkmYJ6tWNMDJBwpMrmLt5RY0xmf17FvHP6a8A3MP6ZoQ6d9tfGV5nHdHdAZwEQ92qQlrl5hl%2Bp%2B7YWj%2B3Bbm1D0do6dOo7RDuxL62kIVnhrgWpuVgoDz0GFVJDHfnRV0SqSoiYJ0aepnOB8GoO19GvnufzFy6GBC%2B23j0PU2CoH0ow0uGbDwG%2FMeGpU4ZHJCcn5wwxy5L5&X-Amz-Signature=fd009d5426dae5e147c38689b02039fbf0cb2be181452f479c84c495298df638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3AFNWDF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIBBm7m0gjdVJYw66249aIKw5p7tNhQ42QGWmZP%2FEoGFRAiEAqTTfj%2BXSdFrVlbkh9UBM97za5V3Qewe9jCmxujFZUwgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPWHsj5X%2Fq6lY%2FGuECrcAxErN%2FutKC53AyF%2BFI4WuNtat4wjsnI7cYbE%2B5ZoBH%2F8L3PbO2Cbl4XToqXVpnVAsXWBrAbKaoQ70fz3Gv2cWOEzIvyvQZvIHgLf%2BjrtGzbVf9zwQxOqJ0tf2AviOVqD%2F3605XvL%2BgXAMf3HKfVgTLOZ%2BANQsXXTv8hxGGtTRxF062mao9%2B5kygdVX7zXJIEztxv16Kqar2e7beP%2BBBORG57U6ivma5Lz8JrhRgftMAFIN1EVsy8QzWWPR2GYWUBLji5WqPEEDIVUIqhbgrTDlaMYnDz5s7te%2BYrp5rCNSCKaLpZEM8NhhNttUchQ37JnwCGo5SbzJSkX%2FIxcMfVRhnkm8%2B3MJVgS7eVd2mdrjiLlEcnxq3vVTYElJFhKSEf348Mrp2xfD5IH%2BLFyAs3N8%2F1rujcwY2052qaMkToN6E9QK6PcAvyJ9rIgvPowdor873vFFfaeti6EZ0WIHNLZ9fWWnwefItg36UlyOM71gKGyi%2BZ5y898a2o6Si3FJaD%2B8%2BKNFNkavAAjBUqI%2F9bU%2Bl1mEFS7rUjIGTY5TsuBv4tjZHTIy562bF8ngQTXSaZY1zKXst46k%2Bbs1PHocdoKWUPFlDA3reKX6x%2FnbsJNnufHfIssx4wmqxRdmRMMJuXzMQGOqUBTpgL8VzC7SqukGXYAJHkmYJ6tWNMDJBwpMrmLt5RY0xmf17FvHP6a8A3MP6ZoQ6d9tfGV5nHdHdAZwEQ92qQlrl5hl%2Bp%2B7YWj%2B3Bbm1D0do6dOo7RDuxL62kIVnhrgWpuVgoDz0GFVJDHfnRV0SqSoiYJ0aepnOB8GoO19GvnufzFy6GBC%2B23j0PU2CoH0ow0uGbDwG%2FMeGpU4ZHJCcn5wwxy5L5&X-Amz-Signature=805994ad4b9f8d66f6b88e7e15023c2cef879d5fdd4553436ca0acd19a144cbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3AFNWDF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIBBm7m0gjdVJYw66249aIKw5p7tNhQ42QGWmZP%2FEoGFRAiEAqTTfj%2BXSdFrVlbkh9UBM97za5V3Qewe9jCmxujFZUwgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPWHsj5X%2Fq6lY%2FGuECrcAxErN%2FutKC53AyF%2BFI4WuNtat4wjsnI7cYbE%2B5ZoBH%2F8L3PbO2Cbl4XToqXVpnVAsXWBrAbKaoQ70fz3Gv2cWOEzIvyvQZvIHgLf%2BjrtGzbVf9zwQxOqJ0tf2AviOVqD%2F3605XvL%2BgXAMf3HKfVgTLOZ%2BANQsXXTv8hxGGtTRxF062mao9%2B5kygdVX7zXJIEztxv16Kqar2e7beP%2BBBORG57U6ivma5Lz8JrhRgftMAFIN1EVsy8QzWWPR2GYWUBLji5WqPEEDIVUIqhbgrTDlaMYnDz5s7te%2BYrp5rCNSCKaLpZEM8NhhNttUchQ37JnwCGo5SbzJSkX%2FIxcMfVRhnkm8%2B3MJVgS7eVd2mdrjiLlEcnxq3vVTYElJFhKSEf348Mrp2xfD5IH%2BLFyAs3N8%2F1rujcwY2052qaMkToN6E9QK6PcAvyJ9rIgvPowdor873vFFfaeti6EZ0WIHNLZ9fWWnwefItg36UlyOM71gKGyi%2BZ5y898a2o6Si3FJaD%2B8%2BKNFNkavAAjBUqI%2F9bU%2Bl1mEFS7rUjIGTY5TsuBv4tjZHTIy562bF8ngQTXSaZY1zKXst46k%2Bbs1PHocdoKWUPFlDA3reKX6x%2FnbsJNnufHfIssx4wmqxRdmRMMJuXzMQGOqUBTpgL8VzC7SqukGXYAJHkmYJ6tWNMDJBwpMrmLt5RY0xmf17FvHP6a8A3MP6ZoQ6d9tfGV5nHdHdAZwEQ92qQlrl5hl%2Bp%2B7YWj%2B3Bbm1D0do6dOo7RDuxL62kIVnhrgWpuVgoDz0GFVJDHfnRV0SqSoiYJ0aepnOB8GoO19GvnufzFy6GBC%2B23j0PU2CoH0ow0uGbDwG%2FMeGpU4ZHJCcn5wwxy5L5&X-Amz-Signature=f59f595d44fb9da9ba990333aab75038af321fea33243ac7de0f1cf7645e7cbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3AFNWDF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIBBm7m0gjdVJYw66249aIKw5p7tNhQ42QGWmZP%2FEoGFRAiEAqTTfj%2BXSdFrVlbkh9UBM97za5V3Qewe9jCmxujFZUwgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPWHsj5X%2Fq6lY%2FGuECrcAxErN%2FutKC53AyF%2BFI4WuNtat4wjsnI7cYbE%2B5ZoBH%2F8L3PbO2Cbl4XToqXVpnVAsXWBrAbKaoQ70fz3Gv2cWOEzIvyvQZvIHgLf%2BjrtGzbVf9zwQxOqJ0tf2AviOVqD%2F3605XvL%2BgXAMf3HKfVgTLOZ%2BANQsXXTv8hxGGtTRxF062mao9%2B5kygdVX7zXJIEztxv16Kqar2e7beP%2BBBORG57U6ivma5Lz8JrhRgftMAFIN1EVsy8QzWWPR2GYWUBLji5WqPEEDIVUIqhbgrTDlaMYnDz5s7te%2BYrp5rCNSCKaLpZEM8NhhNttUchQ37JnwCGo5SbzJSkX%2FIxcMfVRhnkm8%2B3MJVgS7eVd2mdrjiLlEcnxq3vVTYElJFhKSEf348Mrp2xfD5IH%2BLFyAs3N8%2F1rujcwY2052qaMkToN6E9QK6PcAvyJ9rIgvPowdor873vFFfaeti6EZ0WIHNLZ9fWWnwefItg36UlyOM71gKGyi%2BZ5y898a2o6Si3FJaD%2B8%2BKNFNkavAAjBUqI%2F9bU%2Bl1mEFS7rUjIGTY5TsuBv4tjZHTIy562bF8ngQTXSaZY1zKXst46k%2Bbs1PHocdoKWUPFlDA3reKX6x%2FnbsJNnufHfIssx4wmqxRdmRMMJuXzMQGOqUBTpgL8VzC7SqukGXYAJHkmYJ6tWNMDJBwpMrmLt5RY0xmf17FvHP6a8A3MP6ZoQ6d9tfGV5nHdHdAZwEQ92qQlrl5hl%2Bp%2B7YWj%2B3Bbm1D0do6dOo7RDuxL62kIVnhrgWpuVgoDz0GFVJDHfnRV0SqSoiYJ0aepnOB8GoO19GvnufzFy6GBC%2B23j0PU2CoH0ow0uGbDwG%2FMeGpU4ZHJCcn5wwxy5L5&X-Amz-Signature=436fc5b3db4028e0bc46c30ec4a2ba561387969315efd8b462cda6e97c018713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3AFNWDF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIBBm7m0gjdVJYw66249aIKw5p7tNhQ42QGWmZP%2FEoGFRAiEAqTTfj%2BXSdFrVlbkh9UBM97za5V3Qewe9jCmxujFZUwgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPWHsj5X%2Fq6lY%2FGuECrcAxErN%2FutKC53AyF%2BFI4WuNtat4wjsnI7cYbE%2B5ZoBH%2F8L3PbO2Cbl4XToqXVpnVAsXWBrAbKaoQ70fz3Gv2cWOEzIvyvQZvIHgLf%2BjrtGzbVf9zwQxOqJ0tf2AviOVqD%2F3605XvL%2BgXAMf3HKfVgTLOZ%2BANQsXXTv8hxGGtTRxF062mao9%2B5kygdVX7zXJIEztxv16Kqar2e7beP%2BBBORG57U6ivma5Lz8JrhRgftMAFIN1EVsy8QzWWPR2GYWUBLji5WqPEEDIVUIqhbgrTDlaMYnDz5s7te%2BYrp5rCNSCKaLpZEM8NhhNttUchQ37JnwCGo5SbzJSkX%2FIxcMfVRhnkm8%2B3MJVgS7eVd2mdrjiLlEcnxq3vVTYElJFhKSEf348Mrp2xfD5IH%2BLFyAs3N8%2F1rujcwY2052qaMkToN6E9QK6PcAvyJ9rIgvPowdor873vFFfaeti6EZ0WIHNLZ9fWWnwefItg36UlyOM71gKGyi%2BZ5y898a2o6Si3FJaD%2B8%2BKNFNkavAAjBUqI%2F9bU%2Bl1mEFS7rUjIGTY5TsuBv4tjZHTIy562bF8ngQTXSaZY1zKXst46k%2Bbs1PHocdoKWUPFlDA3reKX6x%2FnbsJNnufHfIssx4wmqxRdmRMMJuXzMQGOqUBTpgL8VzC7SqukGXYAJHkmYJ6tWNMDJBwpMrmLt5RY0xmf17FvHP6a8A3MP6ZoQ6d9tfGV5nHdHdAZwEQ92qQlrl5hl%2Bp%2B7YWj%2B3Bbm1D0do6dOo7RDuxL62kIVnhrgWpuVgoDz0GFVJDHfnRV0SqSoiYJ0aepnOB8GoO19GvnufzFy6GBC%2B23j0PU2CoH0ow0uGbDwG%2FMeGpU4ZHJCcn5wwxy5L5&X-Amz-Signature=d9cb8c428651f3bf159f410cebb238cdcc8ef6a6c33dd4f686505a18d88fa96a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3AFNWDF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIBBm7m0gjdVJYw66249aIKw5p7tNhQ42QGWmZP%2FEoGFRAiEAqTTfj%2BXSdFrVlbkh9UBM97za5V3Qewe9jCmxujFZUwgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPWHsj5X%2Fq6lY%2FGuECrcAxErN%2FutKC53AyF%2BFI4WuNtat4wjsnI7cYbE%2B5ZoBH%2F8L3PbO2Cbl4XToqXVpnVAsXWBrAbKaoQ70fz3Gv2cWOEzIvyvQZvIHgLf%2BjrtGzbVf9zwQxOqJ0tf2AviOVqD%2F3605XvL%2BgXAMf3HKfVgTLOZ%2BANQsXXTv8hxGGtTRxF062mao9%2B5kygdVX7zXJIEztxv16Kqar2e7beP%2BBBORG57U6ivma5Lz8JrhRgftMAFIN1EVsy8QzWWPR2GYWUBLji5WqPEEDIVUIqhbgrTDlaMYnDz5s7te%2BYrp5rCNSCKaLpZEM8NhhNttUchQ37JnwCGo5SbzJSkX%2FIxcMfVRhnkm8%2B3MJVgS7eVd2mdrjiLlEcnxq3vVTYElJFhKSEf348Mrp2xfD5IH%2BLFyAs3N8%2F1rujcwY2052qaMkToN6E9QK6PcAvyJ9rIgvPowdor873vFFfaeti6EZ0WIHNLZ9fWWnwefItg36UlyOM71gKGyi%2BZ5y898a2o6Si3FJaD%2B8%2BKNFNkavAAjBUqI%2F9bU%2Bl1mEFS7rUjIGTY5TsuBv4tjZHTIy562bF8ngQTXSaZY1zKXst46k%2Bbs1PHocdoKWUPFlDA3reKX6x%2FnbsJNnufHfIssx4wmqxRdmRMMJuXzMQGOqUBTpgL8VzC7SqukGXYAJHkmYJ6tWNMDJBwpMrmLt5RY0xmf17FvHP6a8A3MP6ZoQ6d9tfGV5nHdHdAZwEQ92qQlrl5hl%2Bp%2B7YWj%2B3Bbm1D0do6dOo7RDuxL62kIVnhrgWpuVgoDz0GFVJDHfnRV0SqSoiYJ0aepnOB8GoO19GvnufzFy6GBC%2B23j0PU2CoH0ow0uGbDwG%2FMeGpU4ZHJCcn5wwxy5L5&X-Amz-Signature=416acca1f64481452d3937ffae719974b74898928831ead9c19d76804fb5aecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3AFNWDF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIBBm7m0gjdVJYw66249aIKw5p7tNhQ42QGWmZP%2FEoGFRAiEAqTTfj%2BXSdFrVlbkh9UBM97za5V3Qewe9jCmxujFZUwgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPWHsj5X%2Fq6lY%2FGuECrcAxErN%2FutKC53AyF%2BFI4WuNtat4wjsnI7cYbE%2B5ZoBH%2F8L3PbO2Cbl4XToqXVpnVAsXWBrAbKaoQ70fz3Gv2cWOEzIvyvQZvIHgLf%2BjrtGzbVf9zwQxOqJ0tf2AviOVqD%2F3605XvL%2BgXAMf3HKfVgTLOZ%2BANQsXXTv8hxGGtTRxF062mao9%2B5kygdVX7zXJIEztxv16Kqar2e7beP%2BBBORG57U6ivma5Lz8JrhRgftMAFIN1EVsy8QzWWPR2GYWUBLji5WqPEEDIVUIqhbgrTDlaMYnDz5s7te%2BYrp5rCNSCKaLpZEM8NhhNttUchQ37JnwCGo5SbzJSkX%2FIxcMfVRhnkm8%2B3MJVgS7eVd2mdrjiLlEcnxq3vVTYElJFhKSEf348Mrp2xfD5IH%2BLFyAs3N8%2F1rujcwY2052qaMkToN6E9QK6PcAvyJ9rIgvPowdor873vFFfaeti6EZ0WIHNLZ9fWWnwefItg36UlyOM71gKGyi%2BZ5y898a2o6Si3FJaD%2B8%2BKNFNkavAAjBUqI%2F9bU%2Bl1mEFS7rUjIGTY5TsuBv4tjZHTIy562bF8ngQTXSaZY1zKXst46k%2Bbs1PHocdoKWUPFlDA3reKX6x%2FnbsJNnufHfIssx4wmqxRdmRMMJuXzMQGOqUBTpgL8VzC7SqukGXYAJHkmYJ6tWNMDJBwpMrmLt5RY0xmf17FvHP6a8A3MP6ZoQ6d9tfGV5nHdHdAZwEQ92qQlrl5hl%2Bp%2B7YWj%2B3Bbm1D0do6dOo7RDuxL62kIVnhrgWpuVgoDz0GFVJDHfnRV0SqSoiYJ0aepnOB8GoO19GvnufzFy6GBC%2B23j0PU2CoH0ow0uGbDwG%2FMeGpU4ZHJCcn5wwxy5L5&X-Amz-Signature=d8992e08494d505afecdd02a1e80b0067d29cbbfe7a549103535201034f1281e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
