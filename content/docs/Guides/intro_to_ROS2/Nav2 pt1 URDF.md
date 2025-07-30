---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-30T07:10:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-30T07:10:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ERJM5CM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKqFvfTYGXesgEEVlQfVSB2z5sBgDJoXGGyPldVwMGbAiEA9%2F1OGRGRlJ3IRIdkhh4ildRW9E5puVcmNS%2FZ%2BfDZd5wqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiZ1THba0npvB6DBircAw6PP%2FJNLW09PaVe9Ug4mpsvELem5EV2UC4jWEEy2iZbzp2ul4XXRHTUpQjFsZUAsW7GKObsBTriSULgAeEnlA1IA0XauVax9LgE9iPT7M8L78Cp2piqlxjebNeJRUBeO6rDgheeEMJjgxYEg9PmZ9gWkIYyVdyjoa%2FgeNDGKeV4vrgqahwVEIy%2B6K4TTo0ScQPJy4AA%2FYEVsLfJjQ5r7bMLyaw9E0%2BeeripBuFZ7sRLo9bkDoaDtqi9HpKU3nENRfhlHlqCm%2F%2FpIbRF9s6cYqMToLQFvs6FQkBQ0aDlRlqpQro6iAw98XTdgxlyAMF2HhNZulGThp%2BiAqe2OvKjEBTKMiFsGgVMB%2BKTib0rxppiNYdSr1MXxRZVHSiEGJuxGL1UyLitMvwlUAhowR8Ou6b5Yfkw0t%2BudCAT2jAnkU2DiJzeEpIpmL4cFiuwvdecspz5E2%2FY4fnvcEml0lnp9%2F98FwAkBWFJDqWj1U%2BrRMClcYe9YP0hqXI%2BcEFlRh1QJ1FfASwJzHyeJxxEMyihzRI3LmDvanG0%2BMA9vIjjD5QQexUOHp2vdsIZPNidIG%2BpdbKPEVTmIF%2FFrMG%2B%2FK0I29fHGH7tY%2BRCZIn8eVDPTNev0B6fivEvHiFzsKh2MLiMp8QGOqUB3a%2FRseWqTTYxINtGwsnRau18VlEXXAzTC%2F5GoKGEH7CrLUsO%2Fbf%2FXDFV6MPebi4RI2HIt%2BKSJB%2B7Vq4sdlbg7PpI%2FOWosXc5hNM5Hg46iRcwd2rybE5ztMWPWijOKnrrOhGnrIH1gr8FKlVf%2FqynGN5fXFlwLw8bUwwi7Eo5LyLso8Bhdx7bWgUi4%2FIfVve2KlYU1052Nl7Tc4UtdT9Uo0sYc%2BL2&X-Amz-Signature=28ddaa1f226fa986cc39894aa9cf175ae1ca9a3b6dcf07fccc5784b918cba836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ERJM5CM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKqFvfTYGXesgEEVlQfVSB2z5sBgDJoXGGyPldVwMGbAiEA9%2F1OGRGRlJ3IRIdkhh4ildRW9E5puVcmNS%2FZ%2BfDZd5wqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiZ1THba0npvB6DBircAw6PP%2FJNLW09PaVe9Ug4mpsvELem5EV2UC4jWEEy2iZbzp2ul4XXRHTUpQjFsZUAsW7GKObsBTriSULgAeEnlA1IA0XauVax9LgE9iPT7M8L78Cp2piqlxjebNeJRUBeO6rDgheeEMJjgxYEg9PmZ9gWkIYyVdyjoa%2FgeNDGKeV4vrgqahwVEIy%2B6K4TTo0ScQPJy4AA%2FYEVsLfJjQ5r7bMLyaw9E0%2BeeripBuFZ7sRLo9bkDoaDtqi9HpKU3nENRfhlHlqCm%2F%2FpIbRF9s6cYqMToLQFvs6FQkBQ0aDlRlqpQro6iAw98XTdgxlyAMF2HhNZulGThp%2BiAqe2OvKjEBTKMiFsGgVMB%2BKTib0rxppiNYdSr1MXxRZVHSiEGJuxGL1UyLitMvwlUAhowR8Ou6b5Yfkw0t%2BudCAT2jAnkU2DiJzeEpIpmL4cFiuwvdecspz5E2%2FY4fnvcEml0lnp9%2F98FwAkBWFJDqWj1U%2BrRMClcYe9YP0hqXI%2BcEFlRh1QJ1FfASwJzHyeJxxEMyihzRI3LmDvanG0%2BMA9vIjjD5QQexUOHp2vdsIZPNidIG%2BpdbKPEVTmIF%2FFrMG%2B%2FK0I29fHGH7tY%2BRCZIn8eVDPTNev0B6fivEvHiFzsKh2MLiMp8QGOqUB3a%2FRseWqTTYxINtGwsnRau18VlEXXAzTC%2F5GoKGEH7CrLUsO%2Fbf%2FXDFV6MPebi4RI2HIt%2BKSJB%2B7Vq4sdlbg7PpI%2FOWosXc5hNM5Hg46iRcwd2rybE5ztMWPWijOKnrrOhGnrIH1gr8FKlVf%2FqynGN5fXFlwLw8bUwwi7Eo5LyLso8Bhdx7bWgUi4%2FIfVve2KlYU1052Nl7Tc4UtdT9Uo0sYc%2BL2&X-Amz-Signature=bb1b86fd515adc34722cee05a2bc8669031e2d4eade10a1c532719df37d29961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ERJM5CM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKqFvfTYGXesgEEVlQfVSB2z5sBgDJoXGGyPldVwMGbAiEA9%2F1OGRGRlJ3IRIdkhh4ildRW9E5puVcmNS%2FZ%2BfDZd5wqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiZ1THba0npvB6DBircAw6PP%2FJNLW09PaVe9Ug4mpsvELem5EV2UC4jWEEy2iZbzp2ul4XXRHTUpQjFsZUAsW7GKObsBTriSULgAeEnlA1IA0XauVax9LgE9iPT7M8L78Cp2piqlxjebNeJRUBeO6rDgheeEMJjgxYEg9PmZ9gWkIYyVdyjoa%2FgeNDGKeV4vrgqahwVEIy%2B6K4TTo0ScQPJy4AA%2FYEVsLfJjQ5r7bMLyaw9E0%2BeeripBuFZ7sRLo9bkDoaDtqi9HpKU3nENRfhlHlqCm%2F%2FpIbRF9s6cYqMToLQFvs6FQkBQ0aDlRlqpQro6iAw98XTdgxlyAMF2HhNZulGThp%2BiAqe2OvKjEBTKMiFsGgVMB%2BKTib0rxppiNYdSr1MXxRZVHSiEGJuxGL1UyLitMvwlUAhowR8Ou6b5Yfkw0t%2BudCAT2jAnkU2DiJzeEpIpmL4cFiuwvdecspz5E2%2FY4fnvcEml0lnp9%2F98FwAkBWFJDqWj1U%2BrRMClcYe9YP0hqXI%2BcEFlRh1QJ1FfASwJzHyeJxxEMyihzRI3LmDvanG0%2BMA9vIjjD5QQexUOHp2vdsIZPNidIG%2BpdbKPEVTmIF%2FFrMG%2B%2FK0I29fHGH7tY%2BRCZIn8eVDPTNev0B6fivEvHiFzsKh2MLiMp8QGOqUB3a%2FRseWqTTYxINtGwsnRau18VlEXXAzTC%2F5GoKGEH7CrLUsO%2Fbf%2FXDFV6MPebi4RI2HIt%2BKSJB%2B7Vq4sdlbg7PpI%2FOWosXc5hNM5Hg46iRcwd2rybE5ztMWPWijOKnrrOhGnrIH1gr8FKlVf%2FqynGN5fXFlwLw8bUwwi7Eo5LyLso8Bhdx7bWgUi4%2FIfVve2KlYU1052Nl7Tc4UtdT9Uo0sYc%2BL2&X-Amz-Signature=4eb1471d144e95826d752dd5d7d3345fc4d21a8655dd988a621ede5b05ed3969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ERJM5CM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKqFvfTYGXesgEEVlQfVSB2z5sBgDJoXGGyPldVwMGbAiEA9%2F1OGRGRlJ3IRIdkhh4ildRW9E5puVcmNS%2FZ%2BfDZd5wqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiZ1THba0npvB6DBircAw6PP%2FJNLW09PaVe9Ug4mpsvELem5EV2UC4jWEEy2iZbzp2ul4XXRHTUpQjFsZUAsW7GKObsBTriSULgAeEnlA1IA0XauVax9LgE9iPT7M8L78Cp2piqlxjebNeJRUBeO6rDgheeEMJjgxYEg9PmZ9gWkIYyVdyjoa%2FgeNDGKeV4vrgqahwVEIy%2B6K4TTo0ScQPJy4AA%2FYEVsLfJjQ5r7bMLyaw9E0%2BeeripBuFZ7sRLo9bkDoaDtqi9HpKU3nENRfhlHlqCm%2F%2FpIbRF9s6cYqMToLQFvs6FQkBQ0aDlRlqpQro6iAw98XTdgxlyAMF2HhNZulGThp%2BiAqe2OvKjEBTKMiFsGgVMB%2BKTib0rxppiNYdSr1MXxRZVHSiEGJuxGL1UyLitMvwlUAhowR8Ou6b5Yfkw0t%2BudCAT2jAnkU2DiJzeEpIpmL4cFiuwvdecspz5E2%2FY4fnvcEml0lnp9%2F98FwAkBWFJDqWj1U%2BrRMClcYe9YP0hqXI%2BcEFlRh1QJ1FfASwJzHyeJxxEMyihzRI3LmDvanG0%2BMA9vIjjD5QQexUOHp2vdsIZPNidIG%2BpdbKPEVTmIF%2FFrMG%2B%2FK0I29fHGH7tY%2BRCZIn8eVDPTNev0B6fivEvHiFzsKh2MLiMp8QGOqUB3a%2FRseWqTTYxINtGwsnRau18VlEXXAzTC%2F5GoKGEH7CrLUsO%2Fbf%2FXDFV6MPebi4RI2HIt%2BKSJB%2B7Vq4sdlbg7PpI%2FOWosXc5hNM5Hg46iRcwd2rybE5ztMWPWijOKnrrOhGnrIH1gr8FKlVf%2FqynGN5fXFlwLw8bUwwi7Eo5LyLso8Bhdx7bWgUi4%2FIfVve2KlYU1052Nl7Tc4UtdT9Uo0sYc%2BL2&X-Amz-Signature=0c3b03fe4293326565a1650ea5668e77e9afde6c8c5a989f4e61e29ed2405240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ERJM5CM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKqFvfTYGXesgEEVlQfVSB2z5sBgDJoXGGyPldVwMGbAiEA9%2F1OGRGRlJ3IRIdkhh4ildRW9E5puVcmNS%2FZ%2BfDZd5wqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiZ1THba0npvB6DBircAw6PP%2FJNLW09PaVe9Ug4mpsvELem5EV2UC4jWEEy2iZbzp2ul4XXRHTUpQjFsZUAsW7GKObsBTriSULgAeEnlA1IA0XauVax9LgE9iPT7M8L78Cp2piqlxjebNeJRUBeO6rDgheeEMJjgxYEg9PmZ9gWkIYyVdyjoa%2FgeNDGKeV4vrgqahwVEIy%2B6K4TTo0ScQPJy4AA%2FYEVsLfJjQ5r7bMLyaw9E0%2BeeripBuFZ7sRLo9bkDoaDtqi9HpKU3nENRfhlHlqCm%2F%2FpIbRF9s6cYqMToLQFvs6FQkBQ0aDlRlqpQro6iAw98XTdgxlyAMF2HhNZulGThp%2BiAqe2OvKjEBTKMiFsGgVMB%2BKTib0rxppiNYdSr1MXxRZVHSiEGJuxGL1UyLitMvwlUAhowR8Ou6b5Yfkw0t%2BudCAT2jAnkU2DiJzeEpIpmL4cFiuwvdecspz5E2%2FY4fnvcEml0lnp9%2F98FwAkBWFJDqWj1U%2BrRMClcYe9YP0hqXI%2BcEFlRh1QJ1FfASwJzHyeJxxEMyihzRI3LmDvanG0%2BMA9vIjjD5QQexUOHp2vdsIZPNidIG%2BpdbKPEVTmIF%2FFrMG%2B%2FK0I29fHGH7tY%2BRCZIn8eVDPTNev0B6fivEvHiFzsKh2MLiMp8QGOqUB3a%2FRseWqTTYxINtGwsnRau18VlEXXAzTC%2F5GoKGEH7CrLUsO%2Fbf%2FXDFV6MPebi4RI2HIt%2BKSJB%2B7Vq4sdlbg7PpI%2FOWosXc5hNM5Hg46iRcwd2rybE5ztMWPWijOKnrrOhGnrIH1gr8FKlVf%2FqynGN5fXFlwLw8bUwwi7Eo5LyLso8Bhdx7bWgUi4%2FIfVve2KlYU1052Nl7Tc4UtdT9Uo0sYc%2BL2&X-Amz-Signature=da296ea8c67e0c1fff318ea04ccfdcde5116e865027dea0fa4c825f61234c4cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ERJM5CM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKqFvfTYGXesgEEVlQfVSB2z5sBgDJoXGGyPldVwMGbAiEA9%2F1OGRGRlJ3IRIdkhh4ildRW9E5puVcmNS%2FZ%2BfDZd5wqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiZ1THba0npvB6DBircAw6PP%2FJNLW09PaVe9Ug4mpsvELem5EV2UC4jWEEy2iZbzp2ul4XXRHTUpQjFsZUAsW7GKObsBTriSULgAeEnlA1IA0XauVax9LgE9iPT7M8L78Cp2piqlxjebNeJRUBeO6rDgheeEMJjgxYEg9PmZ9gWkIYyVdyjoa%2FgeNDGKeV4vrgqahwVEIy%2B6K4TTo0ScQPJy4AA%2FYEVsLfJjQ5r7bMLyaw9E0%2BeeripBuFZ7sRLo9bkDoaDtqi9HpKU3nENRfhlHlqCm%2F%2FpIbRF9s6cYqMToLQFvs6FQkBQ0aDlRlqpQro6iAw98XTdgxlyAMF2HhNZulGThp%2BiAqe2OvKjEBTKMiFsGgVMB%2BKTib0rxppiNYdSr1MXxRZVHSiEGJuxGL1UyLitMvwlUAhowR8Ou6b5Yfkw0t%2BudCAT2jAnkU2DiJzeEpIpmL4cFiuwvdecspz5E2%2FY4fnvcEml0lnp9%2F98FwAkBWFJDqWj1U%2BrRMClcYe9YP0hqXI%2BcEFlRh1QJ1FfASwJzHyeJxxEMyihzRI3LmDvanG0%2BMA9vIjjD5QQexUOHp2vdsIZPNidIG%2BpdbKPEVTmIF%2FFrMG%2B%2FK0I29fHGH7tY%2BRCZIn8eVDPTNev0B6fivEvHiFzsKh2MLiMp8QGOqUB3a%2FRseWqTTYxINtGwsnRau18VlEXXAzTC%2F5GoKGEH7CrLUsO%2Fbf%2FXDFV6MPebi4RI2HIt%2BKSJB%2B7Vq4sdlbg7PpI%2FOWosXc5hNM5Hg46iRcwd2rybE5ztMWPWijOKnrrOhGnrIH1gr8FKlVf%2FqynGN5fXFlwLw8bUwwi7Eo5LyLso8Bhdx7bWgUi4%2FIfVve2KlYU1052Nl7Tc4UtdT9Uo0sYc%2BL2&X-Amz-Signature=b7117e3f5048ce175c943e2e9fe2bc449a5089b62a18bb2031bf1f6ff42d5f57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ERJM5CM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKqFvfTYGXesgEEVlQfVSB2z5sBgDJoXGGyPldVwMGbAiEA9%2F1OGRGRlJ3IRIdkhh4ildRW9E5puVcmNS%2FZ%2BfDZd5wqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiZ1THba0npvB6DBircAw6PP%2FJNLW09PaVe9Ug4mpsvELem5EV2UC4jWEEy2iZbzp2ul4XXRHTUpQjFsZUAsW7GKObsBTriSULgAeEnlA1IA0XauVax9LgE9iPT7M8L78Cp2piqlxjebNeJRUBeO6rDgheeEMJjgxYEg9PmZ9gWkIYyVdyjoa%2FgeNDGKeV4vrgqahwVEIy%2B6K4TTo0ScQPJy4AA%2FYEVsLfJjQ5r7bMLyaw9E0%2BeeripBuFZ7sRLo9bkDoaDtqi9HpKU3nENRfhlHlqCm%2F%2FpIbRF9s6cYqMToLQFvs6FQkBQ0aDlRlqpQro6iAw98XTdgxlyAMF2HhNZulGThp%2BiAqe2OvKjEBTKMiFsGgVMB%2BKTib0rxppiNYdSr1MXxRZVHSiEGJuxGL1UyLitMvwlUAhowR8Ou6b5Yfkw0t%2BudCAT2jAnkU2DiJzeEpIpmL4cFiuwvdecspz5E2%2FY4fnvcEml0lnp9%2F98FwAkBWFJDqWj1U%2BrRMClcYe9YP0hqXI%2BcEFlRh1QJ1FfASwJzHyeJxxEMyihzRI3LmDvanG0%2BMA9vIjjD5QQexUOHp2vdsIZPNidIG%2BpdbKPEVTmIF%2FFrMG%2B%2FK0I29fHGH7tY%2BRCZIn8eVDPTNev0B6fivEvHiFzsKh2MLiMp8QGOqUB3a%2FRseWqTTYxINtGwsnRau18VlEXXAzTC%2F5GoKGEH7CrLUsO%2Fbf%2FXDFV6MPebi4RI2HIt%2BKSJB%2B7Vq4sdlbg7PpI%2FOWosXc5hNM5Hg46iRcwd2rybE5ztMWPWijOKnrrOhGnrIH1gr8FKlVf%2FqynGN5fXFlwLw8bUwwi7Eo5LyLso8Bhdx7bWgUi4%2FIfVve2KlYU1052Nl7Tc4UtdT9Uo0sYc%2BL2&X-Amz-Signature=b9afa41b5284720dc870583bb64edf1a1e7f6782f6e4041d9ac781ac4204f754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ERJM5CM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKqFvfTYGXesgEEVlQfVSB2z5sBgDJoXGGyPldVwMGbAiEA9%2F1OGRGRlJ3IRIdkhh4ildRW9E5puVcmNS%2FZ%2BfDZd5wqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiZ1THba0npvB6DBircAw6PP%2FJNLW09PaVe9Ug4mpsvELem5EV2UC4jWEEy2iZbzp2ul4XXRHTUpQjFsZUAsW7GKObsBTriSULgAeEnlA1IA0XauVax9LgE9iPT7M8L78Cp2piqlxjebNeJRUBeO6rDgheeEMJjgxYEg9PmZ9gWkIYyVdyjoa%2FgeNDGKeV4vrgqahwVEIy%2B6K4TTo0ScQPJy4AA%2FYEVsLfJjQ5r7bMLyaw9E0%2BeeripBuFZ7sRLo9bkDoaDtqi9HpKU3nENRfhlHlqCm%2F%2FpIbRF9s6cYqMToLQFvs6FQkBQ0aDlRlqpQro6iAw98XTdgxlyAMF2HhNZulGThp%2BiAqe2OvKjEBTKMiFsGgVMB%2BKTib0rxppiNYdSr1MXxRZVHSiEGJuxGL1UyLitMvwlUAhowR8Ou6b5Yfkw0t%2BudCAT2jAnkU2DiJzeEpIpmL4cFiuwvdecspz5E2%2FY4fnvcEml0lnp9%2F98FwAkBWFJDqWj1U%2BrRMClcYe9YP0hqXI%2BcEFlRh1QJ1FfASwJzHyeJxxEMyihzRI3LmDvanG0%2BMA9vIjjD5QQexUOHp2vdsIZPNidIG%2BpdbKPEVTmIF%2FFrMG%2B%2FK0I29fHGH7tY%2BRCZIn8eVDPTNev0B6fivEvHiFzsKh2MLiMp8QGOqUB3a%2FRseWqTTYxINtGwsnRau18VlEXXAzTC%2F5GoKGEH7CrLUsO%2Fbf%2FXDFV6MPebi4RI2HIt%2BKSJB%2B7Vq4sdlbg7PpI%2FOWosXc5hNM5Hg46iRcwd2rybE5ztMWPWijOKnrrOhGnrIH1gr8FKlVf%2FqynGN5fXFlwLw8bUwwi7Eo5LyLso8Bhdx7bWgUi4%2FIfVve2KlYU1052Nl7Tc4UtdT9Uo0sYc%2BL2&X-Amz-Signature=baed9fa60ef6f4bbc78b7f053e65bee8bd5b630c3c15653f002be22d7b4689fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ERJM5CM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKqFvfTYGXesgEEVlQfVSB2z5sBgDJoXGGyPldVwMGbAiEA9%2F1OGRGRlJ3IRIdkhh4ildRW9E5puVcmNS%2FZ%2BfDZd5wqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiZ1THba0npvB6DBircAw6PP%2FJNLW09PaVe9Ug4mpsvELem5EV2UC4jWEEy2iZbzp2ul4XXRHTUpQjFsZUAsW7GKObsBTriSULgAeEnlA1IA0XauVax9LgE9iPT7M8L78Cp2piqlxjebNeJRUBeO6rDgheeEMJjgxYEg9PmZ9gWkIYyVdyjoa%2FgeNDGKeV4vrgqahwVEIy%2B6K4TTo0ScQPJy4AA%2FYEVsLfJjQ5r7bMLyaw9E0%2BeeripBuFZ7sRLo9bkDoaDtqi9HpKU3nENRfhlHlqCm%2F%2FpIbRF9s6cYqMToLQFvs6FQkBQ0aDlRlqpQro6iAw98XTdgxlyAMF2HhNZulGThp%2BiAqe2OvKjEBTKMiFsGgVMB%2BKTib0rxppiNYdSr1MXxRZVHSiEGJuxGL1UyLitMvwlUAhowR8Ou6b5Yfkw0t%2BudCAT2jAnkU2DiJzeEpIpmL4cFiuwvdecspz5E2%2FY4fnvcEml0lnp9%2F98FwAkBWFJDqWj1U%2BrRMClcYe9YP0hqXI%2BcEFlRh1QJ1FfASwJzHyeJxxEMyihzRI3LmDvanG0%2BMA9vIjjD5QQexUOHp2vdsIZPNidIG%2BpdbKPEVTmIF%2FFrMG%2B%2FK0I29fHGH7tY%2BRCZIn8eVDPTNev0B6fivEvHiFzsKh2MLiMp8QGOqUB3a%2FRseWqTTYxINtGwsnRau18VlEXXAzTC%2F5GoKGEH7CrLUsO%2Fbf%2FXDFV6MPebi4RI2HIt%2BKSJB%2B7Vq4sdlbg7PpI%2FOWosXc5hNM5Hg46iRcwd2rybE5ztMWPWijOKnrrOhGnrIH1gr8FKlVf%2FqynGN5fXFlwLw8bUwwi7Eo5LyLso8Bhdx7bWgUi4%2FIfVve2KlYU1052Nl7Tc4UtdT9Uo0sYc%2BL2&X-Amz-Signature=9fedf27e19256906bb81e525826658759cdc111b152976a0f3d82a007e61faac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ERJM5CM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKqFvfTYGXesgEEVlQfVSB2z5sBgDJoXGGyPldVwMGbAiEA9%2F1OGRGRlJ3IRIdkhh4ildRW9E5puVcmNS%2FZ%2BfDZd5wqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiZ1THba0npvB6DBircAw6PP%2FJNLW09PaVe9Ug4mpsvELem5EV2UC4jWEEy2iZbzp2ul4XXRHTUpQjFsZUAsW7GKObsBTriSULgAeEnlA1IA0XauVax9LgE9iPT7M8L78Cp2piqlxjebNeJRUBeO6rDgheeEMJjgxYEg9PmZ9gWkIYyVdyjoa%2FgeNDGKeV4vrgqahwVEIy%2B6K4TTo0ScQPJy4AA%2FYEVsLfJjQ5r7bMLyaw9E0%2BeeripBuFZ7sRLo9bkDoaDtqi9HpKU3nENRfhlHlqCm%2F%2FpIbRF9s6cYqMToLQFvs6FQkBQ0aDlRlqpQro6iAw98XTdgxlyAMF2HhNZulGThp%2BiAqe2OvKjEBTKMiFsGgVMB%2BKTib0rxppiNYdSr1MXxRZVHSiEGJuxGL1UyLitMvwlUAhowR8Ou6b5Yfkw0t%2BudCAT2jAnkU2DiJzeEpIpmL4cFiuwvdecspz5E2%2FY4fnvcEml0lnp9%2F98FwAkBWFJDqWj1U%2BrRMClcYe9YP0hqXI%2BcEFlRh1QJ1FfASwJzHyeJxxEMyihzRI3LmDvanG0%2BMA9vIjjD5QQexUOHp2vdsIZPNidIG%2BpdbKPEVTmIF%2FFrMG%2B%2FK0I29fHGH7tY%2BRCZIn8eVDPTNev0B6fivEvHiFzsKh2MLiMp8QGOqUB3a%2FRseWqTTYxINtGwsnRau18VlEXXAzTC%2F5GoKGEH7CrLUsO%2Fbf%2FXDFV6MPebi4RI2HIt%2BKSJB%2B7Vq4sdlbg7PpI%2FOWosXc5hNM5Hg46iRcwd2rybE5ztMWPWijOKnrrOhGnrIH1gr8FKlVf%2FqynGN5fXFlwLw8bUwwi7Eo5LyLso8Bhdx7bWgUi4%2FIfVve2KlYU1052Nl7Tc4UtdT9Uo0sYc%2BL2&X-Amz-Signature=6975cbbfe69ad92639638f7f42d806274a266632e69d77ff666804f5110d8efa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

Types of blocks in URDF:

- robot
- vars/Properties
- macros
- link:
	- visual
		- geometry
		- material
	- collision
		- origin
		- geometry
		- friction
	- inertial
- joint:
	- parent
	- child
	- origin

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
        <surface><friction><ode>
          <mu>1.0</mu>
          <mu2>1.0</mu2>
          <fdir1>1 0 0</fdir1>
        </ode></friction></surface>
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

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ERJM5CM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKqFvfTYGXesgEEVlQfVSB2z5sBgDJoXGGyPldVwMGbAiEA9%2F1OGRGRlJ3IRIdkhh4ildRW9E5puVcmNS%2FZ%2BfDZd5wqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiZ1THba0npvB6DBircAw6PP%2FJNLW09PaVe9Ug4mpsvELem5EV2UC4jWEEy2iZbzp2ul4XXRHTUpQjFsZUAsW7GKObsBTriSULgAeEnlA1IA0XauVax9LgE9iPT7M8L78Cp2piqlxjebNeJRUBeO6rDgheeEMJjgxYEg9PmZ9gWkIYyVdyjoa%2FgeNDGKeV4vrgqahwVEIy%2B6K4TTo0ScQPJy4AA%2FYEVsLfJjQ5r7bMLyaw9E0%2BeeripBuFZ7sRLo9bkDoaDtqi9HpKU3nENRfhlHlqCm%2F%2FpIbRF9s6cYqMToLQFvs6FQkBQ0aDlRlqpQro6iAw98XTdgxlyAMF2HhNZulGThp%2BiAqe2OvKjEBTKMiFsGgVMB%2BKTib0rxppiNYdSr1MXxRZVHSiEGJuxGL1UyLitMvwlUAhowR8Ou6b5Yfkw0t%2BudCAT2jAnkU2DiJzeEpIpmL4cFiuwvdecspz5E2%2FY4fnvcEml0lnp9%2F98FwAkBWFJDqWj1U%2BrRMClcYe9YP0hqXI%2BcEFlRh1QJ1FfASwJzHyeJxxEMyihzRI3LmDvanG0%2BMA9vIjjD5QQexUOHp2vdsIZPNidIG%2BpdbKPEVTmIF%2FFrMG%2B%2FK0I29fHGH7tY%2BRCZIn8eVDPTNev0B6fivEvHiFzsKh2MLiMp8QGOqUB3a%2FRseWqTTYxINtGwsnRau18VlEXXAzTC%2F5GoKGEH7CrLUsO%2Fbf%2FXDFV6MPebi4RI2HIt%2BKSJB%2B7Vq4sdlbg7PpI%2FOWosXc5hNM5Hg46iRcwd2rybE5ztMWPWijOKnrrOhGnrIH1gr8FKlVf%2FqynGN5fXFlwLw8bUwwi7Eo5LyLso8Bhdx7bWgUi4%2FIfVve2KlYU1052Nl7Tc4UtdT9Uo0sYc%2BL2&X-Amz-Signature=6adc7fe9f5a8e400281da59011a10b72317d5268ecd4f8c6ff9f647e48cef026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ERJM5CM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKqFvfTYGXesgEEVlQfVSB2z5sBgDJoXGGyPldVwMGbAiEA9%2F1OGRGRlJ3IRIdkhh4ildRW9E5puVcmNS%2FZ%2BfDZd5wqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiZ1THba0npvB6DBircAw6PP%2FJNLW09PaVe9Ug4mpsvELem5EV2UC4jWEEy2iZbzp2ul4XXRHTUpQjFsZUAsW7GKObsBTriSULgAeEnlA1IA0XauVax9LgE9iPT7M8L78Cp2piqlxjebNeJRUBeO6rDgheeEMJjgxYEg9PmZ9gWkIYyVdyjoa%2FgeNDGKeV4vrgqahwVEIy%2B6K4TTo0ScQPJy4AA%2FYEVsLfJjQ5r7bMLyaw9E0%2BeeripBuFZ7sRLo9bkDoaDtqi9HpKU3nENRfhlHlqCm%2F%2FpIbRF9s6cYqMToLQFvs6FQkBQ0aDlRlqpQro6iAw98XTdgxlyAMF2HhNZulGThp%2BiAqe2OvKjEBTKMiFsGgVMB%2BKTib0rxppiNYdSr1MXxRZVHSiEGJuxGL1UyLitMvwlUAhowR8Ou6b5Yfkw0t%2BudCAT2jAnkU2DiJzeEpIpmL4cFiuwvdecspz5E2%2FY4fnvcEml0lnp9%2F98FwAkBWFJDqWj1U%2BrRMClcYe9YP0hqXI%2BcEFlRh1QJ1FfASwJzHyeJxxEMyihzRI3LmDvanG0%2BMA9vIjjD5QQexUOHp2vdsIZPNidIG%2BpdbKPEVTmIF%2FFrMG%2B%2FK0I29fHGH7tY%2BRCZIn8eVDPTNev0B6fivEvHiFzsKh2MLiMp8QGOqUB3a%2FRseWqTTYxINtGwsnRau18VlEXXAzTC%2F5GoKGEH7CrLUsO%2Fbf%2FXDFV6MPebi4RI2HIt%2BKSJB%2B7Vq4sdlbg7PpI%2FOWosXc5hNM5Hg46iRcwd2rybE5ztMWPWijOKnrrOhGnrIH1gr8FKlVf%2FqynGN5fXFlwLw8bUwwi7Eo5LyLso8Bhdx7bWgUi4%2FIfVve2KlYU1052Nl7Tc4UtdT9Uo0sYc%2BL2&X-Amz-Signature=e16e34287a1026bb16c880bbfe32c4f6f71b8bf4480d965c3d886a71db11a1a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ERJM5CM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKqFvfTYGXesgEEVlQfVSB2z5sBgDJoXGGyPldVwMGbAiEA9%2F1OGRGRlJ3IRIdkhh4ildRW9E5puVcmNS%2FZ%2BfDZd5wqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiZ1THba0npvB6DBircAw6PP%2FJNLW09PaVe9Ug4mpsvELem5EV2UC4jWEEy2iZbzp2ul4XXRHTUpQjFsZUAsW7GKObsBTriSULgAeEnlA1IA0XauVax9LgE9iPT7M8L78Cp2piqlxjebNeJRUBeO6rDgheeEMJjgxYEg9PmZ9gWkIYyVdyjoa%2FgeNDGKeV4vrgqahwVEIy%2B6K4TTo0ScQPJy4AA%2FYEVsLfJjQ5r7bMLyaw9E0%2BeeripBuFZ7sRLo9bkDoaDtqi9HpKU3nENRfhlHlqCm%2F%2FpIbRF9s6cYqMToLQFvs6FQkBQ0aDlRlqpQro6iAw98XTdgxlyAMF2HhNZulGThp%2BiAqe2OvKjEBTKMiFsGgVMB%2BKTib0rxppiNYdSr1MXxRZVHSiEGJuxGL1UyLitMvwlUAhowR8Ou6b5Yfkw0t%2BudCAT2jAnkU2DiJzeEpIpmL4cFiuwvdecspz5E2%2FY4fnvcEml0lnp9%2F98FwAkBWFJDqWj1U%2BrRMClcYe9YP0hqXI%2BcEFlRh1QJ1FfASwJzHyeJxxEMyihzRI3LmDvanG0%2BMA9vIjjD5QQexUOHp2vdsIZPNidIG%2BpdbKPEVTmIF%2FFrMG%2B%2FK0I29fHGH7tY%2BRCZIn8eVDPTNev0B6fivEvHiFzsKh2MLiMp8QGOqUB3a%2FRseWqTTYxINtGwsnRau18VlEXXAzTC%2F5GoKGEH7CrLUsO%2Fbf%2FXDFV6MPebi4RI2HIt%2BKSJB%2B7Vq4sdlbg7PpI%2FOWosXc5hNM5Hg46iRcwd2rybE5ztMWPWijOKnrrOhGnrIH1gr8FKlVf%2FqynGN5fXFlwLw8bUwwi7Eo5LyLso8Bhdx7bWgUi4%2FIfVve2KlYU1052Nl7Tc4UtdT9Uo0sYc%2BL2&X-Amz-Signature=5adb081cebe6db2103afd52c2e60eaecf460cc44dcf815d9e618342e7959fa89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDZHFXU2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRhU0Mi9JKi%2BNnruKD61diF3hRrsBaRIU5X8F3AJsj0QIgbhZhAPMZEDQJwrR7rxpRp5GUmpgTOzlGz2vKmyj9a1gqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2Ban8WJgU1%2BTUE7ZyrcAy%2F924q5Ky5xI%2FkvhCOEBEjlFHPl88aYtFar55yE1eracyndlVdaR3rZgAxW8ZIKxpnsWWtlPAOszniRa9UBHgPqF%2F0oweq2nvsS3dpHRsT1coUuNfGFKrTV9pSCtYqz1HQeDWjsJZoYWmU8PfBz%2Bijxny38NyKU6gNWf2vOhY5NiNmmVglA4X9zYJfphKdIP7yW1o1svjtIqwhWt288T13zA%2FlrsmejiVw13e3%2FcLiKhWoRchomyB4PBtc4Rlg9i2N0QPhniocJ9lmhOmXU9bYB8VvZHdAaPNPQ8olGypTKn0j7va4A1R4pWEwFv2lnFv08poKR3XmZKbKvCh2X0F7OIvm4maWHvO3s6OBepvpYo6Xq8rEJDHJFqpihf8USrDSK7Khb5%2F9BfeMh2pJ4QFNsWtR0dfYW4X4%2FCZJ0IDYbxrbF73%2BCMmYyMYwaYVZWjuEtJ4a%2FiWgQUhB2pAHZG8hmKKq6j3szBeOdA1W95nGYt40vUM72jzIYMgIQ%2FniDlObHfz7MNyOOaF3AbAhPsEZDFAKVvn2tzsEVMMJVuCEFUwpmYDua4u%2Fi8i7gGeimIFkJg032MjoRgrX9c0xYpvplnqaIF0oA4cs8P0BrcyuZBwXrlb1bEQc6vC64MPeMp8QGOqUBCCDgLzvsQVJjAR4GN4i2FyYT3wnruayPzxICJf1IwdDHwjhQm8H%2BJokwUPjURVhklPvJ%2BHlsHFsCHF%2BhHAoJfhhIc6jTGB6I8z%2BmrhiuZkmUB%2Fyr%2FzEddXQmPXopiX%2F2kvdKjwlG%2Be2TUbRv2QzhJ8bCV97lqtzcGfIZeNhb4sxVahGc1pvgotfJTBvYOK2yfyoFpwiwebpoFOAEKwolSjDIAf7n&X-Amz-Signature=e837369ce7a45e406c6ddec4cd8f3093c5be360fed51385f88cae3637556f9f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDZHFXU2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRhU0Mi9JKi%2BNnruKD61diF3hRrsBaRIU5X8F3AJsj0QIgbhZhAPMZEDQJwrR7rxpRp5GUmpgTOzlGz2vKmyj9a1gqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2Ban8WJgU1%2BTUE7ZyrcAy%2F924q5Ky5xI%2FkvhCOEBEjlFHPl88aYtFar55yE1eracyndlVdaR3rZgAxW8ZIKxpnsWWtlPAOszniRa9UBHgPqF%2F0oweq2nvsS3dpHRsT1coUuNfGFKrTV9pSCtYqz1HQeDWjsJZoYWmU8PfBz%2Bijxny38NyKU6gNWf2vOhY5NiNmmVglA4X9zYJfphKdIP7yW1o1svjtIqwhWt288T13zA%2FlrsmejiVw13e3%2FcLiKhWoRchomyB4PBtc4Rlg9i2N0QPhniocJ9lmhOmXU9bYB8VvZHdAaPNPQ8olGypTKn0j7va4A1R4pWEwFv2lnFv08poKR3XmZKbKvCh2X0F7OIvm4maWHvO3s6OBepvpYo6Xq8rEJDHJFqpihf8USrDSK7Khb5%2F9BfeMh2pJ4QFNsWtR0dfYW4X4%2FCZJ0IDYbxrbF73%2BCMmYyMYwaYVZWjuEtJ4a%2FiWgQUhB2pAHZG8hmKKq6j3szBeOdA1W95nGYt40vUM72jzIYMgIQ%2FniDlObHfz7MNyOOaF3AbAhPsEZDFAKVvn2tzsEVMMJVuCEFUwpmYDua4u%2Fi8i7gGeimIFkJg032MjoRgrX9c0xYpvplnqaIF0oA4cs8P0BrcyuZBwXrlb1bEQc6vC64MPeMp8QGOqUBCCDgLzvsQVJjAR4GN4i2FyYT3wnruayPzxICJf1IwdDHwjhQm8H%2BJokwUPjURVhklPvJ%2BHlsHFsCHF%2BhHAoJfhhIc6jTGB6I8z%2BmrhiuZkmUB%2Fyr%2FzEddXQmPXopiX%2F2kvdKjwlG%2Be2TUbRv2QzhJ8bCV97lqtzcGfIZeNhb4sxVahGc1pvgotfJTBvYOK2yfyoFpwiwebpoFOAEKwolSjDIAf7n&X-Amz-Signature=196afa7f6bdbaebf0c6549688769183ac8dce373c016add2daa1d19ef1cc91ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDZHFXU2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRhU0Mi9JKi%2BNnruKD61diF3hRrsBaRIU5X8F3AJsj0QIgbhZhAPMZEDQJwrR7rxpRp5GUmpgTOzlGz2vKmyj9a1gqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2Ban8WJgU1%2BTUE7ZyrcAy%2F924q5Ky5xI%2FkvhCOEBEjlFHPl88aYtFar55yE1eracyndlVdaR3rZgAxW8ZIKxpnsWWtlPAOszniRa9UBHgPqF%2F0oweq2nvsS3dpHRsT1coUuNfGFKrTV9pSCtYqz1HQeDWjsJZoYWmU8PfBz%2Bijxny38NyKU6gNWf2vOhY5NiNmmVglA4X9zYJfphKdIP7yW1o1svjtIqwhWt288T13zA%2FlrsmejiVw13e3%2FcLiKhWoRchomyB4PBtc4Rlg9i2N0QPhniocJ9lmhOmXU9bYB8VvZHdAaPNPQ8olGypTKn0j7va4A1R4pWEwFv2lnFv08poKR3XmZKbKvCh2X0F7OIvm4maWHvO3s6OBepvpYo6Xq8rEJDHJFqpihf8USrDSK7Khb5%2F9BfeMh2pJ4QFNsWtR0dfYW4X4%2FCZJ0IDYbxrbF73%2BCMmYyMYwaYVZWjuEtJ4a%2FiWgQUhB2pAHZG8hmKKq6j3szBeOdA1W95nGYt40vUM72jzIYMgIQ%2FniDlObHfz7MNyOOaF3AbAhPsEZDFAKVvn2tzsEVMMJVuCEFUwpmYDua4u%2Fi8i7gGeimIFkJg032MjoRgrX9c0xYpvplnqaIF0oA4cs8P0BrcyuZBwXrlb1bEQc6vC64MPeMp8QGOqUBCCDgLzvsQVJjAR4GN4i2FyYT3wnruayPzxICJf1IwdDHwjhQm8H%2BJokwUPjURVhklPvJ%2BHlsHFsCHF%2BhHAoJfhhIc6jTGB6I8z%2BmrhiuZkmUB%2Fyr%2FzEddXQmPXopiX%2F2kvdKjwlG%2Be2TUbRv2QzhJ8bCV97lqtzcGfIZeNhb4sxVahGc1pvgotfJTBvYOK2yfyoFpwiwebpoFOAEKwolSjDIAf7n&X-Amz-Signature=e935353eab445619b253c8ac52acc8859067814751c52b63eff3a81ee9cf9b87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Launch file

<details>
      <summary>What is in this launch file?</summary>
      TODO:
  </details>

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

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDZHFXU2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRhU0Mi9JKi%2BNnruKD61diF3hRrsBaRIU5X8F3AJsj0QIgbhZhAPMZEDQJwrR7rxpRp5GUmpgTOzlGz2vKmyj9a1gqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2Ban8WJgU1%2BTUE7ZyrcAy%2F924q5Ky5xI%2FkvhCOEBEjlFHPl88aYtFar55yE1eracyndlVdaR3rZgAxW8ZIKxpnsWWtlPAOszniRa9UBHgPqF%2F0oweq2nvsS3dpHRsT1coUuNfGFKrTV9pSCtYqz1HQeDWjsJZoYWmU8PfBz%2Bijxny38NyKU6gNWf2vOhY5NiNmmVglA4X9zYJfphKdIP7yW1o1svjtIqwhWt288T13zA%2FlrsmejiVw13e3%2FcLiKhWoRchomyB4PBtc4Rlg9i2N0QPhniocJ9lmhOmXU9bYB8VvZHdAaPNPQ8olGypTKn0j7va4A1R4pWEwFv2lnFv08poKR3XmZKbKvCh2X0F7OIvm4maWHvO3s6OBepvpYo6Xq8rEJDHJFqpihf8USrDSK7Khb5%2F9BfeMh2pJ4QFNsWtR0dfYW4X4%2FCZJ0IDYbxrbF73%2BCMmYyMYwaYVZWjuEtJ4a%2FiWgQUhB2pAHZG8hmKKq6j3szBeOdA1W95nGYt40vUM72jzIYMgIQ%2FniDlObHfz7MNyOOaF3AbAhPsEZDFAKVvn2tzsEVMMJVuCEFUwpmYDua4u%2Fi8i7gGeimIFkJg032MjoRgrX9c0xYpvplnqaIF0oA4cs8P0BrcyuZBwXrlb1bEQc6vC64MPeMp8QGOqUBCCDgLzvsQVJjAR4GN4i2FyYT3wnruayPzxICJf1IwdDHwjhQm8H%2BJokwUPjURVhklPvJ%2BHlsHFsCHF%2BhHAoJfhhIc6jTGB6I8z%2BmrhiuZkmUB%2Fyr%2FzEddXQmPXopiX%2F2kvdKjwlG%2Be2TUbRv2QzhJ8bCV97lqtzcGfIZeNhb4sxVahGc1pvgotfJTBvYOK2yfyoFpwiwebpoFOAEKwolSjDIAf7n&X-Amz-Signature=f1f591c8141ed373189a71500824a7101ad1b157964755beb0906297b6f5d1a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDZHFXU2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRhU0Mi9JKi%2BNnruKD61diF3hRrsBaRIU5X8F3AJsj0QIgbhZhAPMZEDQJwrR7rxpRp5GUmpgTOzlGz2vKmyj9a1gqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2Ban8WJgU1%2BTUE7ZyrcAy%2F924q5Ky5xI%2FkvhCOEBEjlFHPl88aYtFar55yE1eracyndlVdaR3rZgAxW8ZIKxpnsWWtlPAOszniRa9UBHgPqF%2F0oweq2nvsS3dpHRsT1coUuNfGFKrTV9pSCtYqz1HQeDWjsJZoYWmU8PfBz%2Bijxny38NyKU6gNWf2vOhY5NiNmmVglA4X9zYJfphKdIP7yW1o1svjtIqwhWt288T13zA%2FlrsmejiVw13e3%2FcLiKhWoRchomyB4PBtc4Rlg9i2N0QPhniocJ9lmhOmXU9bYB8VvZHdAaPNPQ8olGypTKn0j7va4A1R4pWEwFv2lnFv08poKR3XmZKbKvCh2X0F7OIvm4maWHvO3s6OBepvpYo6Xq8rEJDHJFqpihf8USrDSK7Khb5%2F9BfeMh2pJ4QFNsWtR0dfYW4X4%2FCZJ0IDYbxrbF73%2BCMmYyMYwaYVZWjuEtJ4a%2FiWgQUhB2pAHZG8hmKKq6j3szBeOdA1W95nGYt40vUM72jzIYMgIQ%2FniDlObHfz7MNyOOaF3AbAhPsEZDFAKVvn2tzsEVMMJVuCEFUwpmYDua4u%2Fi8i7gGeimIFkJg032MjoRgrX9c0xYpvplnqaIF0oA4cs8P0BrcyuZBwXrlb1bEQc6vC64MPeMp8QGOqUBCCDgLzvsQVJjAR4GN4i2FyYT3wnruayPzxICJf1IwdDHwjhQm8H%2BJokwUPjURVhklPvJ%2BHlsHFsCHF%2BhHAoJfhhIc6jTGB6I8z%2BmrhiuZkmUB%2Fyr%2FzEddXQmPXopiX%2F2kvdKjwlG%2Be2TUbRv2QzhJ8bCV97lqtzcGfIZeNhb4sxVahGc1pvgotfJTBvYOK2yfyoFpwiwebpoFOAEKwolSjDIAf7n&X-Amz-Signature=f71dfc09d4096471f28f100fa04e8ac6585c49c35cb85a908996f041dc36bb7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDZHFXU2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRhU0Mi9JKi%2BNnruKD61diF3hRrsBaRIU5X8F3AJsj0QIgbhZhAPMZEDQJwrR7rxpRp5GUmpgTOzlGz2vKmyj9a1gqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2Ban8WJgU1%2BTUE7ZyrcAy%2F924q5Ky5xI%2FkvhCOEBEjlFHPl88aYtFar55yE1eracyndlVdaR3rZgAxW8ZIKxpnsWWtlPAOszniRa9UBHgPqF%2F0oweq2nvsS3dpHRsT1coUuNfGFKrTV9pSCtYqz1HQeDWjsJZoYWmU8PfBz%2Bijxny38NyKU6gNWf2vOhY5NiNmmVglA4X9zYJfphKdIP7yW1o1svjtIqwhWt288T13zA%2FlrsmejiVw13e3%2FcLiKhWoRchomyB4PBtc4Rlg9i2N0QPhniocJ9lmhOmXU9bYB8VvZHdAaPNPQ8olGypTKn0j7va4A1R4pWEwFv2lnFv08poKR3XmZKbKvCh2X0F7OIvm4maWHvO3s6OBepvpYo6Xq8rEJDHJFqpihf8USrDSK7Khb5%2F9BfeMh2pJ4QFNsWtR0dfYW4X4%2FCZJ0IDYbxrbF73%2BCMmYyMYwaYVZWjuEtJ4a%2FiWgQUhB2pAHZG8hmKKq6j3szBeOdA1W95nGYt40vUM72jzIYMgIQ%2FniDlObHfz7MNyOOaF3AbAhPsEZDFAKVvn2tzsEVMMJVuCEFUwpmYDua4u%2Fi8i7gGeimIFkJg032MjoRgrX9c0xYpvplnqaIF0oA4cs8P0BrcyuZBwXrlb1bEQc6vC64MPeMp8QGOqUBCCDgLzvsQVJjAR4GN4i2FyYT3wnruayPzxICJf1IwdDHwjhQm8H%2BJokwUPjURVhklPvJ%2BHlsHFsCHF%2BhHAoJfhhIc6jTGB6I8z%2BmrhiuZkmUB%2Fyr%2FzEddXQmPXopiX%2F2kvdKjwlG%2Be2TUbRv2QzhJ8bCV97lqtzcGfIZeNhb4sxVahGc1pvgotfJTBvYOK2yfyoFpwiwebpoFOAEKwolSjDIAf7n&X-Amz-Signature=305458c9d13b84ae4f915570b24d3bc8ce222108e8ce37594458b223c34c61e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDZHFXU2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRhU0Mi9JKi%2BNnruKD61diF3hRrsBaRIU5X8F3AJsj0QIgbhZhAPMZEDQJwrR7rxpRp5GUmpgTOzlGz2vKmyj9a1gqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2Ban8WJgU1%2BTUE7ZyrcAy%2F924q5Ky5xI%2FkvhCOEBEjlFHPl88aYtFar55yE1eracyndlVdaR3rZgAxW8ZIKxpnsWWtlPAOszniRa9UBHgPqF%2F0oweq2nvsS3dpHRsT1coUuNfGFKrTV9pSCtYqz1HQeDWjsJZoYWmU8PfBz%2Bijxny38NyKU6gNWf2vOhY5NiNmmVglA4X9zYJfphKdIP7yW1o1svjtIqwhWt288T13zA%2FlrsmejiVw13e3%2FcLiKhWoRchomyB4PBtc4Rlg9i2N0QPhniocJ9lmhOmXU9bYB8VvZHdAaPNPQ8olGypTKn0j7va4A1R4pWEwFv2lnFv08poKR3XmZKbKvCh2X0F7OIvm4maWHvO3s6OBepvpYo6Xq8rEJDHJFqpihf8USrDSK7Khb5%2F9BfeMh2pJ4QFNsWtR0dfYW4X4%2FCZJ0IDYbxrbF73%2BCMmYyMYwaYVZWjuEtJ4a%2FiWgQUhB2pAHZG8hmKKq6j3szBeOdA1W95nGYt40vUM72jzIYMgIQ%2FniDlObHfz7MNyOOaF3AbAhPsEZDFAKVvn2tzsEVMMJVuCEFUwpmYDua4u%2Fi8i7gGeimIFkJg032MjoRgrX9c0xYpvplnqaIF0oA4cs8P0BrcyuZBwXrlb1bEQc6vC64MPeMp8QGOqUBCCDgLzvsQVJjAR4GN4i2FyYT3wnruayPzxICJf1IwdDHwjhQm8H%2BJokwUPjURVhklPvJ%2BHlsHFsCHF%2BhHAoJfhhIc6jTGB6I8z%2BmrhiuZkmUB%2Fyr%2FzEddXQmPXopiX%2F2kvdKjwlG%2Be2TUbRv2QzhJ8bCV97lqtzcGfIZeNhb4sxVahGc1pvgotfJTBvYOK2yfyoFpwiwebpoFOAEKwolSjDIAf7n&X-Amz-Signature=7ddf06532bd3beed6ee863240ca6c24d587afdace93a2ad880c38a18260195c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
