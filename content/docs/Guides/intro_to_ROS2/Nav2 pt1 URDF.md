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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K6G5PNK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC7ZE%2FtVyC4SnXktlHvxN5t2n72LHkwIOIEvtTniK3dugIhALXNzGW2d5%2FMNcdkYm3uhkXBsL1IquMXm5XdKcMyglD%2FKv8DCD0QABoMNjM3NDIzMTgzODA1IgzZ3dfhi1JE241nyhoq3AMsIvBtoYKDmQ%2F9Q9TTG56%2FBPhjG8v%2Bg0441defPo96ZMeMl0kwth9jymjzCiI%2FFrqlnGeLeJcRTvOUlzGuWLQIznmAfxFR2NwJ98UgpE7RDSfKA3ioRaEh4X%2FeZevz5e%2FxE6Om5Ug%2FdWcrcF4mZSRvMxJq92jcUck79YBWaonIRJORbTWCtlI9gmYtZo3C4wOcZ30W40z4wIdnpRwVkI2bkqX61wTb9hCaEn4tfPEN9%2B1JeI9c8TSXRLS4llSWhKccc%2FESiGrcyOf9nbrDbBvgEOWZnS5QW1FQd1Qso5GByL9e5c%2BwWK5VDDPMkrnRmnUOQb2%2F8gypX2TSWTAbPEe2m9wSsjimBnHTuR8%2BehQpdoOAyd2jO5hK7%2Fg7RNZpF%2FgtoX%2BKn0DoOKp4Gzp%2BbFkpk4XDsCLuLRkw6NYF%2FQv7UH5gcQYCFvZnkWIwdrhApcl9LKc%2BjxPLi0cetIIJ%2BFkBnyQ4lDYZHwX3WC8%2B78A%2FDj1O5bSEPYw70Bms5r4%2BqDCEK4AawgdsYkLKFBGn%2F3xWew8nWCjPmv3QkBcOlcds3woCpAVOk1%2FUY1YNzglOzJATrbmd%2BzE8xhJ6a4htEeg3BiMnhUOnYKInvNRSPCjkO7toC3EwFdPuZAzZ8DC06cDEBjqkAVOhIin8tPN8%2BJLZj0jfvwBKUcmqFJmOstC9LLDLaCWh7jS2jnuheBd07lVuX052T%2Bfpy4cheu56c6rYiP530AFnxbAdAu9P35xLqC1%2FEkzq5oNQkO%2BtnKr5KPzFg%2BHTTgsdMDuw0gEFpp9OBXAsoIdr4feiIGC8UdUMWi1aBZL%2F4auWWIwxt60pqGrGsgkSMWzoFjMO5VJgpvr6zxiidSG47Gr%2F&X-Amz-Signature=ae9648c31c90ec151019852b3a83cf67ad9c6eab8c8a679e6322db051b45450a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K6G5PNK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC7ZE%2FtVyC4SnXktlHvxN5t2n72LHkwIOIEvtTniK3dugIhALXNzGW2d5%2FMNcdkYm3uhkXBsL1IquMXm5XdKcMyglD%2FKv8DCD0QABoMNjM3NDIzMTgzODA1IgzZ3dfhi1JE241nyhoq3AMsIvBtoYKDmQ%2F9Q9TTG56%2FBPhjG8v%2Bg0441defPo96ZMeMl0kwth9jymjzCiI%2FFrqlnGeLeJcRTvOUlzGuWLQIznmAfxFR2NwJ98UgpE7RDSfKA3ioRaEh4X%2FeZevz5e%2FxE6Om5Ug%2FdWcrcF4mZSRvMxJq92jcUck79YBWaonIRJORbTWCtlI9gmYtZo3C4wOcZ30W40z4wIdnpRwVkI2bkqX61wTb9hCaEn4tfPEN9%2B1JeI9c8TSXRLS4llSWhKccc%2FESiGrcyOf9nbrDbBvgEOWZnS5QW1FQd1Qso5GByL9e5c%2BwWK5VDDPMkrnRmnUOQb2%2F8gypX2TSWTAbPEe2m9wSsjimBnHTuR8%2BehQpdoOAyd2jO5hK7%2Fg7RNZpF%2FgtoX%2BKn0DoOKp4Gzp%2BbFkpk4XDsCLuLRkw6NYF%2FQv7UH5gcQYCFvZnkWIwdrhApcl9LKc%2BjxPLi0cetIIJ%2BFkBnyQ4lDYZHwX3WC8%2B78A%2FDj1O5bSEPYw70Bms5r4%2BqDCEK4AawgdsYkLKFBGn%2F3xWew8nWCjPmv3QkBcOlcds3woCpAVOk1%2FUY1YNzglOzJATrbmd%2BzE8xhJ6a4htEeg3BiMnhUOnYKInvNRSPCjkO7toC3EwFdPuZAzZ8DC06cDEBjqkAVOhIin8tPN8%2BJLZj0jfvwBKUcmqFJmOstC9LLDLaCWh7jS2jnuheBd07lVuX052T%2Bfpy4cheu56c6rYiP530AFnxbAdAu9P35xLqC1%2FEkzq5oNQkO%2BtnKr5KPzFg%2BHTTgsdMDuw0gEFpp9OBXAsoIdr4feiIGC8UdUMWi1aBZL%2F4auWWIwxt60pqGrGsgkSMWzoFjMO5VJgpvr6zxiidSG47Gr%2F&X-Amz-Signature=f48b695f20b8837c7697c13f20ec2c52098d55b414b5b884e708289a7a9b7622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K6G5PNK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC7ZE%2FtVyC4SnXktlHvxN5t2n72LHkwIOIEvtTniK3dugIhALXNzGW2d5%2FMNcdkYm3uhkXBsL1IquMXm5XdKcMyglD%2FKv8DCD0QABoMNjM3NDIzMTgzODA1IgzZ3dfhi1JE241nyhoq3AMsIvBtoYKDmQ%2F9Q9TTG56%2FBPhjG8v%2Bg0441defPo96ZMeMl0kwth9jymjzCiI%2FFrqlnGeLeJcRTvOUlzGuWLQIznmAfxFR2NwJ98UgpE7RDSfKA3ioRaEh4X%2FeZevz5e%2FxE6Om5Ug%2FdWcrcF4mZSRvMxJq92jcUck79YBWaonIRJORbTWCtlI9gmYtZo3C4wOcZ30W40z4wIdnpRwVkI2bkqX61wTb9hCaEn4tfPEN9%2B1JeI9c8TSXRLS4llSWhKccc%2FESiGrcyOf9nbrDbBvgEOWZnS5QW1FQd1Qso5GByL9e5c%2BwWK5VDDPMkrnRmnUOQb2%2F8gypX2TSWTAbPEe2m9wSsjimBnHTuR8%2BehQpdoOAyd2jO5hK7%2Fg7RNZpF%2FgtoX%2BKn0DoOKp4Gzp%2BbFkpk4XDsCLuLRkw6NYF%2FQv7UH5gcQYCFvZnkWIwdrhApcl9LKc%2BjxPLi0cetIIJ%2BFkBnyQ4lDYZHwX3WC8%2B78A%2FDj1O5bSEPYw70Bms5r4%2BqDCEK4AawgdsYkLKFBGn%2F3xWew8nWCjPmv3QkBcOlcds3woCpAVOk1%2FUY1YNzglOzJATrbmd%2BzE8xhJ6a4htEeg3BiMnhUOnYKInvNRSPCjkO7toC3EwFdPuZAzZ8DC06cDEBjqkAVOhIin8tPN8%2BJLZj0jfvwBKUcmqFJmOstC9LLDLaCWh7jS2jnuheBd07lVuX052T%2Bfpy4cheu56c6rYiP530AFnxbAdAu9P35xLqC1%2FEkzq5oNQkO%2BtnKr5KPzFg%2BHTTgsdMDuw0gEFpp9OBXAsoIdr4feiIGC8UdUMWi1aBZL%2F4auWWIwxt60pqGrGsgkSMWzoFjMO5VJgpvr6zxiidSG47Gr%2F&X-Amz-Signature=57e843499e298fac21b112b31b660ca1035e04316774879b3d35427c9dc869a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K6G5PNK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC7ZE%2FtVyC4SnXktlHvxN5t2n72LHkwIOIEvtTniK3dugIhALXNzGW2d5%2FMNcdkYm3uhkXBsL1IquMXm5XdKcMyglD%2FKv8DCD0QABoMNjM3NDIzMTgzODA1IgzZ3dfhi1JE241nyhoq3AMsIvBtoYKDmQ%2F9Q9TTG56%2FBPhjG8v%2Bg0441defPo96ZMeMl0kwth9jymjzCiI%2FFrqlnGeLeJcRTvOUlzGuWLQIznmAfxFR2NwJ98UgpE7RDSfKA3ioRaEh4X%2FeZevz5e%2FxE6Om5Ug%2FdWcrcF4mZSRvMxJq92jcUck79YBWaonIRJORbTWCtlI9gmYtZo3C4wOcZ30W40z4wIdnpRwVkI2bkqX61wTb9hCaEn4tfPEN9%2B1JeI9c8TSXRLS4llSWhKccc%2FESiGrcyOf9nbrDbBvgEOWZnS5QW1FQd1Qso5GByL9e5c%2BwWK5VDDPMkrnRmnUOQb2%2F8gypX2TSWTAbPEe2m9wSsjimBnHTuR8%2BehQpdoOAyd2jO5hK7%2Fg7RNZpF%2FgtoX%2BKn0DoOKp4Gzp%2BbFkpk4XDsCLuLRkw6NYF%2FQv7UH5gcQYCFvZnkWIwdrhApcl9LKc%2BjxPLi0cetIIJ%2BFkBnyQ4lDYZHwX3WC8%2B78A%2FDj1O5bSEPYw70Bms5r4%2BqDCEK4AawgdsYkLKFBGn%2F3xWew8nWCjPmv3QkBcOlcds3woCpAVOk1%2FUY1YNzglOzJATrbmd%2BzE8xhJ6a4htEeg3BiMnhUOnYKInvNRSPCjkO7toC3EwFdPuZAzZ8DC06cDEBjqkAVOhIin8tPN8%2BJLZj0jfvwBKUcmqFJmOstC9LLDLaCWh7jS2jnuheBd07lVuX052T%2Bfpy4cheu56c6rYiP530AFnxbAdAu9P35xLqC1%2FEkzq5oNQkO%2BtnKr5KPzFg%2BHTTgsdMDuw0gEFpp9OBXAsoIdr4feiIGC8UdUMWi1aBZL%2F4auWWIwxt60pqGrGsgkSMWzoFjMO5VJgpvr6zxiidSG47Gr%2F&X-Amz-Signature=5a59f7354c5ab2783624cee19332aa1ad3159515cdb0c61e2dd4af8136721638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K6G5PNK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC7ZE%2FtVyC4SnXktlHvxN5t2n72LHkwIOIEvtTniK3dugIhALXNzGW2d5%2FMNcdkYm3uhkXBsL1IquMXm5XdKcMyglD%2FKv8DCD0QABoMNjM3NDIzMTgzODA1IgzZ3dfhi1JE241nyhoq3AMsIvBtoYKDmQ%2F9Q9TTG56%2FBPhjG8v%2Bg0441defPo96ZMeMl0kwth9jymjzCiI%2FFrqlnGeLeJcRTvOUlzGuWLQIznmAfxFR2NwJ98UgpE7RDSfKA3ioRaEh4X%2FeZevz5e%2FxE6Om5Ug%2FdWcrcF4mZSRvMxJq92jcUck79YBWaonIRJORbTWCtlI9gmYtZo3C4wOcZ30W40z4wIdnpRwVkI2bkqX61wTb9hCaEn4tfPEN9%2B1JeI9c8TSXRLS4llSWhKccc%2FESiGrcyOf9nbrDbBvgEOWZnS5QW1FQd1Qso5GByL9e5c%2BwWK5VDDPMkrnRmnUOQb2%2F8gypX2TSWTAbPEe2m9wSsjimBnHTuR8%2BehQpdoOAyd2jO5hK7%2Fg7RNZpF%2FgtoX%2BKn0DoOKp4Gzp%2BbFkpk4XDsCLuLRkw6NYF%2FQv7UH5gcQYCFvZnkWIwdrhApcl9LKc%2BjxPLi0cetIIJ%2BFkBnyQ4lDYZHwX3WC8%2B78A%2FDj1O5bSEPYw70Bms5r4%2BqDCEK4AawgdsYkLKFBGn%2F3xWew8nWCjPmv3QkBcOlcds3woCpAVOk1%2FUY1YNzglOzJATrbmd%2BzE8xhJ6a4htEeg3BiMnhUOnYKInvNRSPCjkO7toC3EwFdPuZAzZ8DC06cDEBjqkAVOhIin8tPN8%2BJLZj0jfvwBKUcmqFJmOstC9LLDLaCWh7jS2jnuheBd07lVuX052T%2Bfpy4cheu56c6rYiP530AFnxbAdAu9P35xLqC1%2FEkzq5oNQkO%2BtnKr5KPzFg%2BHTTgsdMDuw0gEFpp9OBXAsoIdr4feiIGC8UdUMWi1aBZL%2F4auWWIwxt60pqGrGsgkSMWzoFjMO5VJgpvr6zxiidSG47Gr%2F&X-Amz-Signature=01fdcf1dc41cea9e41dcae3b940a946403edc5878ad195c575f24ce1cad9fad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K6G5PNK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC7ZE%2FtVyC4SnXktlHvxN5t2n72LHkwIOIEvtTniK3dugIhALXNzGW2d5%2FMNcdkYm3uhkXBsL1IquMXm5XdKcMyglD%2FKv8DCD0QABoMNjM3NDIzMTgzODA1IgzZ3dfhi1JE241nyhoq3AMsIvBtoYKDmQ%2F9Q9TTG56%2FBPhjG8v%2Bg0441defPo96ZMeMl0kwth9jymjzCiI%2FFrqlnGeLeJcRTvOUlzGuWLQIznmAfxFR2NwJ98UgpE7RDSfKA3ioRaEh4X%2FeZevz5e%2FxE6Om5Ug%2FdWcrcF4mZSRvMxJq92jcUck79YBWaonIRJORbTWCtlI9gmYtZo3C4wOcZ30W40z4wIdnpRwVkI2bkqX61wTb9hCaEn4tfPEN9%2B1JeI9c8TSXRLS4llSWhKccc%2FESiGrcyOf9nbrDbBvgEOWZnS5QW1FQd1Qso5GByL9e5c%2BwWK5VDDPMkrnRmnUOQb2%2F8gypX2TSWTAbPEe2m9wSsjimBnHTuR8%2BehQpdoOAyd2jO5hK7%2Fg7RNZpF%2FgtoX%2BKn0DoOKp4Gzp%2BbFkpk4XDsCLuLRkw6NYF%2FQv7UH5gcQYCFvZnkWIwdrhApcl9LKc%2BjxPLi0cetIIJ%2BFkBnyQ4lDYZHwX3WC8%2B78A%2FDj1O5bSEPYw70Bms5r4%2BqDCEK4AawgdsYkLKFBGn%2F3xWew8nWCjPmv3QkBcOlcds3woCpAVOk1%2FUY1YNzglOzJATrbmd%2BzE8xhJ6a4htEeg3BiMnhUOnYKInvNRSPCjkO7toC3EwFdPuZAzZ8DC06cDEBjqkAVOhIin8tPN8%2BJLZj0jfvwBKUcmqFJmOstC9LLDLaCWh7jS2jnuheBd07lVuX052T%2Bfpy4cheu56c6rYiP530AFnxbAdAu9P35xLqC1%2FEkzq5oNQkO%2BtnKr5KPzFg%2BHTTgsdMDuw0gEFpp9OBXAsoIdr4feiIGC8UdUMWi1aBZL%2F4auWWIwxt60pqGrGsgkSMWzoFjMO5VJgpvr6zxiidSG47Gr%2F&X-Amz-Signature=a700e55375f9a063b275bdcf92cc348e731ebb15b817ed8f43f386b40efcaaae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K6G5PNK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC7ZE%2FtVyC4SnXktlHvxN5t2n72LHkwIOIEvtTniK3dugIhALXNzGW2d5%2FMNcdkYm3uhkXBsL1IquMXm5XdKcMyglD%2FKv8DCD0QABoMNjM3NDIzMTgzODA1IgzZ3dfhi1JE241nyhoq3AMsIvBtoYKDmQ%2F9Q9TTG56%2FBPhjG8v%2Bg0441defPo96ZMeMl0kwth9jymjzCiI%2FFrqlnGeLeJcRTvOUlzGuWLQIznmAfxFR2NwJ98UgpE7RDSfKA3ioRaEh4X%2FeZevz5e%2FxE6Om5Ug%2FdWcrcF4mZSRvMxJq92jcUck79YBWaonIRJORbTWCtlI9gmYtZo3C4wOcZ30W40z4wIdnpRwVkI2bkqX61wTb9hCaEn4tfPEN9%2B1JeI9c8TSXRLS4llSWhKccc%2FESiGrcyOf9nbrDbBvgEOWZnS5QW1FQd1Qso5GByL9e5c%2BwWK5VDDPMkrnRmnUOQb2%2F8gypX2TSWTAbPEe2m9wSsjimBnHTuR8%2BehQpdoOAyd2jO5hK7%2Fg7RNZpF%2FgtoX%2BKn0DoOKp4Gzp%2BbFkpk4XDsCLuLRkw6NYF%2FQv7UH5gcQYCFvZnkWIwdrhApcl9LKc%2BjxPLi0cetIIJ%2BFkBnyQ4lDYZHwX3WC8%2B78A%2FDj1O5bSEPYw70Bms5r4%2BqDCEK4AawgdsYkLKFBGn%2F3xWew8nWCjPmv3QkBcOlcds3woCpAVOk1%2FUY1YNzglOzJATrbmd%2BzE8xhJ6a4htEeg3BiMnhUOnYKInvNRSPCjkO7toC3EwFdPuZAzZ8DC06cDEBjqkAVOhIin8tPN8%2BJLZj0jfvwBKUcmqFJmOstC9LLDLaCWh7jS2jnuheBd07lVuX052T%2Bfpy4cheu56c6rYiP530AFnxbAdAu9P35xLqC1%2FEkzq5oNQkO%2BtnKr5KPzFg%2BHTTgsdMDuw0gEFpp9OBXAsoIdr4feiIGC8UdUMWi1aBZL%2F4auWWIwxt60pqGrGsgkSMWzoFjMO5VJgpvr6zxiidSG47Gr%2F&X-Amz-Signature=7f0cbb0244a75c1cdd3e30d2bc1976f40d059b5ad680e96adbbafbfc0f7dd1fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K6G5PNK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC7ZE%2FtVyC4SnXktlHvxN5t2n72LHkwIOIEvtTniK3dugIhALXNzGW2d5%2FMNcdkYm3uhkXBsL1IquMXm5XdKcMyglD%2FKv8DCD0QABoMNjM3NDIzMTgzODA1IgzZ3dfhi1JE241nyhoq3AMsIvBtoYKDmQ%2F9Q9TTG56%2FBPhjG8v%2Bg0441defPo96ZMeMl0kwth9jymjzCiI%2FFrqlnGeLeJcRTvOUlzGuWLQIznmAfxFR2NwJ98UgpE7RDSfKA3ioRaEh4X%2FeZevz5e%2FxE6Om5Ug%2FdWcrcF4mZSRvMxJq92jcUck79YBWaonIRJORbTWCtlI9gmYtZo3C4wOcZ30W40z4wIdnpRwVkI2bkqX61wTb9hCaEn4tfPEN9%2B1JeI9c8TSXRLS4llSWhKccc%2FESiGrcyOf9nbrDbBvgEOWZnS5QW1FQd1Qso5GByL9e5c%2BwWK5VDDPMkrnRmnUOQb2%2F8gypX2TSWTAbPEe2m9wSsjimBnHTuR8%2BehQpdoOAyd2jO5hK7%2Fg7RNZpF%2FgtoX%2BKn0DoOKp4Gzp%2BbFkpk4XDsCLuLRkw6NYF%2FQv7UH5gcQYCFvZnkWIwdrhApcl9LKc%2BjxPLi0cetIIJ%2BFkBnyQ4lDYZHwX3WC8%2B78A%2FDj1O5bSEPYw70Bms5r4%2BqDCEK4AawgdsYkLKFBGn%2F3xWew8nWCjPmv3QkBcOlcds3woCpAVOk1%2FUY1YNzglOzJATrbmd%2BzE8xhJ6a4htEeg3BiMnhUOnYKInvNRSPCjkO7toC3EwFdPuZAzZ8DC06cDEBjqkAVOhIin8tPN8%2BJLZj0jfvwBKUcmqFJmOstC9LLDLaCWh7jS2jnuheBd07lVuX052T%2Bfpy4cheu56c6rYiP530AFnxbAdAu9P35xLqC1%2FEkzq5oNQkO%2BtnKr5KPzFg%2BHTTgsdMDuw0gEFpp9OBXAsoIdr4feiIGC8UdUMWi1aBZL%2F4auWWIwxt60pqGrGsgkSMWzoFjMO5VJgpvr6zxiidSG47Gr%2F&X-Amz-Signature=e5d30456979feb486a0b6f5f57077607c909d3f9b06d4e3c0aadc4bbf0617a76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K6G5PNK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC7ZE%2FtVyC4SnXktlHvxN5t2n72LHkwIOIEvtTniK3dugIhALXNzGW2d5%2FMNcdkYm3uhkXBsL1IquMXm5XdKcMyglD%2FKv8DCD0QABoMNjM3NDIzMTgzODA1IgzZ3dfhi1JE241nyhoq3AMsIvBtoYKDmQ%2F9Q9TTG56%2FBPhjG8v%2Bg0441defPo96ZMeMl0kwth9jymjzCiI%2FFrqlnGeLeJcRTvOUlzGuWLQIznmAfxFR2NwJ98UgpE7RDSfKA3ioRaEh4X%2FeZevz5e%2FxE6Om5Ug%2FdWcrcF4mZSRvMxJq92jcUck79YBWaonIRJORbTWCtlI9gmYtZo3C4wOcZ30W40z4wIdnpRwVkI2bkqX61wTb9hCaEn4tfPEN9%2B1JeI9c8TSXRLS4llSWhKccc%2FESiGrcyOf9nbrDbBvgEOWZnS5QW1FQd1Qso5GByL9e5c%2BwWK5VDDPMkrnRmnUOQb2%2F8gypX2TSWTAbPEe2m9wSsjimBnHTuR8%2BehQpdoOAyd2jO5hK7%2Fg7RNZpF%2FgtoX%2BKn0DoOKp4Gzp%2BbFkpk4XDsCLuLRkw6NYF%2FQv7UH5gcQYCFvZnkWIwdrhApcl9LKc%2BjxPLi0cetIIJ%2BFkBnyQ4lDYZHwX3WC8%2B78A%2FDj1O5bSEPYw70Bms5r4%2BqDCEK4AawgdsYkLKFBGn%2F3xWew8nWCjPmv3QkBcOlcds3woCpAVOk1%2FUY1YNzglOzJATrbmd%2BzE8xhJ6a4htEeg3BiMnhUOnYKInvNRSPCjkO7toC3EwFdPuZAzZ8DC06cDEBjqkAVOhIin8tPN8%2BJLZj0jfvwBKUcmqFJmOstC9LLDLaCWh7jS2jnuheBd07lVuX052T%2Bfpy4cheu56c6rYiP530AFnxbAdAu9P35xLqC1%2FEkzq5oNQkO%2BtnKr5KPzFg%2BHTTgsdMDuw0gEFpp9OBXAsoIdr4feiIGC8UdUMWi1aBZL%2F4auWWIwxt60pqGrGsgkSMWzoFjMO5VJgpvr6zxiidSG47Gr%2F&X-Amz-Signature=bca5a632aa27c1e75e248d7b4587422b2d76cb01432e90afd364672daf45b337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K6G5PNK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC7ZE%2FtVyC4SnXktlHvxN5t2n72LHkwIOIEvtTniK3dugIhALXNzGW2d5%2FMNcdkYm3uhkXBsL1IquMXm5XdKcMyglD%2FKv8DCD0QABoMNjM3NDIzMTgzODA1IgzZ3dfhi1JE241nyhoq3AMsIvBtoYKDmQ%2F9Q9TTG56%2FBPhjG8v%2Bg0441defPo96ZMeMl0kwth9jymjzCiI%2FFrqlnGeLeJcRTvOUlzGuWLQIznmAfxFR2NwJ98UgpE7RDSfKA3ioRaEh4X%2FeZevz5e%2FxE6Om5Ug%2FdWcrcF4mZSRvMxJq92jcUck79YBWaonIRJORbTWCtlI9gmYtZo3C4wOcZ30W40z4wIdnpRwVkI2bkqX61wTb9hCaEn4tfPEN9%2B1JeI9c8TSXRLS4llSWhKccc%2FESiGrcyOf9nbrDbBvgEOWZnS5QW1FQd1Qso5GByL9e5c%2BwWK5VDDPMkrnRmnUOQb2%2F8gypX2TSWTAbPEe2m9wSsjimBnHTuR8%2BehQpdoOAyd2jO5hK7%2Fg7RNZpF%2FgtoX%2BKn0DoOKp4Gzp%2BbFkpk4XDsCLuLRkw6NYF%2FQv7UH5gcQYCFvZnkWIwdrhApcl9LKc%2BjxPLi0cetIIJ%2BFkBnyQ4lDYZHwX3WC8%2B78A%2FDj1O5bSEPYw70Bms5r4%2BqDCEK4AawgdsYkLKFBGn%2F3xWew8nWCjPmv3QkBcOlcds3woCpAVOk1%2FUY1YNzglOzJATrbmd%2BzE8xhJ6a4htEeg3BiMnhUOnYKInvNRSPCjkO7toC3EwFdPuZAzZ8DC06cDEBjqkAVOhIin8tPN8%2BJLZj0jfvwBKUcmqFJmOstC9LLDLaCWh7jS2jnuheBd07lVuX052T%2Bfpy4cheu56c6rYiP530AFnxbAdAu9P35xLqC1%2FEkzq5oNQkO%2BtnKr5KPzFg%2BHTTgsdMDuw0gEFpp9OBXAsoIdr4feiIGC8UdUMWi1aBZL%2F4auWWIwxt60pqGrGsgkSMWzoFjMO5VJgpvr6zxiidSG47Gr%2F&X-Amz-Signature=81bb0a310b13f806f017b05dae36d0cf5896ac77664d8530601f3568f9ee41a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVZSZLCC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHGsFkyfunhuG%2Blrhbb6dNzy32GCy2ezqUGZqU890PYGAiAUwvjsxCjG2g%2FPmEr30LEM1CZsU6isTBoU%2Brwl5bvBBSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMwV4D0paECeK6c6QhKtwDOtAAMYpgBPxCXmEFtfr9NIb5aK7n%2FFovZG%2FeDsRReVLVIFhMRtIvB9%2Fx206l4Fm2dpWE3clNtEww6q7lp468H%2FzK%2FZWjSCa4ZOqixYHZ5sQwwpkOL6xvm8y1DERg0skNXAUHOmdB21Fj%2FaCi0Jd%2B8vpGXtBAvDjZMBYJVx3R7Atw0EWdmwL4uywN5J6In8QMjhTfyZufsObIyH82%2F0pcVyEGVnIjlv2hlsIzCKX1KFuvqKbOE9hT4XXXNpXfL7JW0rHMM7la%2FbBatqFyePBODquZV8tw0ZEVpr6sDJTZE4Pt1bIyWmtpNzNKgvnOzFrFoFJMKXNfiQSY65mMvnpL4g5Jb5AVsxBB1JlTU9j8qk9vvHQ5W9qNDV5IFJQDod1%2BLfVziY9Iw5J5UBoC3RXq1GshzjkJUd6B4CoZw%2F6c%2BM8ycTvY9y3B2Vx2Kus4dgwfGOxmGvbW3YJK6vfJgTqsS6dO6L4JR6qSOnyr8JQGXhgbYSzYftLW5n9X%2BLh7vLyz8GglYxAHXvzpKBphUEf%2BzW8VOft6WESH5ieS0k1KAklbcDDQb9ucO0z4IJz5w2hGUBuHWjV%2BTJaBcrQqzBVbtBPkwCYKlO4d5Ujm3bfEtXeN3HTAgnyfAOXxW0owhenAxAY6pgH4gRzVocCE4AqZpvafKBBiPrtsXocqXQeEOy82iIQLXufzVukseC60QJ2CuoC1c3PFrutVig08Mpb5%2FuCwmK9D7L13%2Fo49dNOgw%2FB4ic4xn825YOh%2FCJyYiXsmzHL3vu4IoT77%2FNVf3a7BYzbsMBlSiuN0zEyhj6XcVzA2gqnrP3oAbxjaKSVsCol8aKGlljZlaxRP9KqfXmWrY3wmctEbDWBTo036&X-Amz-Signature=de4fb00234f67ea52bfaa793bb60fbdcc9eed27c0bf1ec618a201028078e5276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBRX7SKK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDgYe0SXJX9K9AvPozcrLVKZzcBatGjLrAsqkmFop%2F5sQIgZxLAMOXD3v3Z917S7uKoHaqtxHiWGeGIpxSZ7Lb6%2BPsq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDBlMe%2BAGjo%2BzqN2S3yrcA9XSssHF0CLm0hL07tdddaZB3gw2TBBsRr4ZyR6jyitciAAWjsvRcgwObj2%2F%2B%2FkBW8l%2BqsIfpx4oQRxyAfFU2ORRaIsxmhxVTeou8mzXM51jcrsH0fkCJ%2BYD0QJ90xt%2BnXXTubo2CUKilZvzUxu9lI7luE9q7ewiJCBzogWyxaSqGlFK6SKnD9jdUKbNEVGrbL5AiGFJHC6c%2B%2FGF8U2OyHfWEkaKZ0zb%2Fn%2FAfgNTiWPXm%2BIPc9x7U64dyQSKdGhHBnigBgdMXNcYgpkTmgoJVgEAUkjY6YjPqAp9n2OdJCirIV9d6nNhijzCYR6nwItyaqcJJWhUCIOo%2BqK03MNEUnHVMlRaCuLN45vlK%2F%2BnudtchLRpQyeLKiNANktwu%2FGhmdtd9SKmLeZ43OyJan%2F7I8vXHbTuzR9ysfJ2hNa%2B0r5gfy6bQ8fhTe7D8BiuVYVjHUgZG7MiVgPveQvOT7txZEKWXAgHkMtespt4AWovpZ0zcWpn4OYZJFhe2CoH78GwbZ%2Fwc9ceVm9HUpVMzaKFdOMcgkTc%2BD%2BoWII3RhIJoN3zXfLp9DSVeVrW75a%2B60noRhjOdLRrTEjKmWzEL2duHy%2FN%2BL%2FK1LIYsExHRR26inaibD6lElqOHZ3343iEMPDpwMQGOqUBRc7Fwe6XQQEHbvgkrdhgnctlK9xuPU%2BJPJsoAqmy%2BH0fgMW%2FQ7b5d%2FauSa6BLBrMKoxORPcLSJHnDkXdZfNw4NBr%2FPMFNwPCVgk%2FcIrhc4GLphfLmxxGAkI%2BqMS0pL1XUEbpqBo6KClnxopkNbhUHTpgvpODKoFyCQ3L9uwC7uckgXUbbWEMawos38BhQ2M6oAZaENqdVyflDA3PwBPCGbeLopAo&X-Amz-Signature=e29de831bb9ee6b0702a0457634d46b2bd66a85c0543ebe2394f006b48935b05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VGM52RZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCICfi6ZNrj9XcGXika%2Bp%2Fs2Y1jmfh1M0C37veOfGu73TiAiAqSw66nw1aROKdC44Xw3zFNZQ4DLOefHeiYeHf4HxrKCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMYeDZBVFaiTnvD5v%2BKtwDmLHRvWBB1OCGgj5IfHiFl7gyVHX5AeaEw3IKsER%2B71ofh1RC5fL3iS%2B9HJ80D2PB3iU9PzWIuR7dyCW9QXQ868mUrY7OhpV4%2F0%2FXynJkcrSBU3BchD%2FBnB7Xse%2FdcsFjqgMTzwHYEjcj9iY%2Br7XKhmOr4QFHVSiIRD8e1V8%2Fjst8PrXkhOdDzpFeplE1ROEZ6jBBWBIvKztt5DXS1VoD9nRWyjaCPAeZKp6dl6VJlEvbI%2FMimnHHviGAji3QyxE95T1OFAM2eGSqydhkvT%2FIiOTCors8IjcD6RiwXZOKtQCB85QN89f4mgU7c9hMObvu8g8lIsZah2rYyP3UHDAFXzPIbWG8kztwiFkhsMIirFSQRX5%2FapOcNBrYeUsV9AD2tJvtFquNiyCHV%2B1AZEBuvdaIb%2FwVQVTXLbkNZ8WvNt5FVBT7NNQBDXGQ4V8dTAQZMFiqqo97tu2TAhhG%2FbX%2BoOtP%2FZiEuSQqpSY19VbCx7hqk%2F%2FjHrFMnJp%2FPXkB%2BrGhD323mNggonwYoiGMZfYZWyJPOikIADCmNpf%2BLier4c%2BHevQqDYL8ZmxsgzVFTISo8NXEnj0ePYU1Qme37Pdz9n3k5bk0zU9WSEniFFLY%2FGdyurj6TF5PZvNXAM8w7enAxAY6pgGBjhBfOLXotNEikXHwzLhomdoTRaP4brW%2BTFAYMNG7Uf5Yp2DS7YmGKKf0t7tCPX0fFx%2FlsNlmdbexqTg7qSZfgpcbpZZyjHWeaHri4bbSbJCa%2BvT1018jaTdhD0tbnoGkG9xyp3vXgBiCwAH9ShFrH1C%2BKafSRSHo%2FAJts88lSOaHz%2FKBOkY%2B%2F72JyWkBSNFhC958oMO1LtVjBzC0tdS4YoZNm5bk&X-Amz-Signature=4e622dc6f0530e2bc2fcb58d1e94e44e4f9146f312342fab2b932c6ddaa29e84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K6G5PNK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC7ZE%2FtVyC4SnXktlHvxN5t2n72LHkwIOIEvtTniK3dugIhALXNzGW2d5%2FMNcdkYm3uhkXBsL1IquMXm5XdKcMyglD%2FKv8DCD0QABoMNjM3NDIzMTgzODA1IgzZ3dfhi1JE241nyhoq3AMsIvBtoYKDmQ%2F9Q9TTG56%2FBPhjG8v%2Bg0441defPo96ZMeMl0kwth9jymjzCiI%2FFrqlnGeLeJcRTvOUlzGuWLQIznmAfxFR2NwJ98UgpE7RDSfKA3ioRaEh4X%2FeZevz5e%2FxE6Om5Ug%2FdWcrcF4mZSRvMxJq92jcUck79YBWaonIRJORbTWCtlI9gmYtZo3C4wOcZ30W40z4wIdnpRwVkI2bkqX61wTb9hCaEn4tfPEN9%2B1JeI9c8TSXRLS4llSWhKccc%2FESiGrcyOf9nbrDbBvgEOWZnS5QW1FQd1Qso5GByL9e5c%2BwWK5VDDPMkrnRmnUOQb2%2F8gypX2TSWTAbPEe2m9wSsjimBnHTuR8%2BehQpdoOAyd2jO5hK7%2Fg7RNZpF%2FgtoX%2BKn0DoOKp4Gzp%2BbFkpk4XDsCLuLRkw6NYF%2FQv7UH5gcQYCFvZnkWIwdrhApcl9LKc%2BjxPLi0cetIIJ%2BFkBnyQ4lDYZHwX3WC8%2B78A%2FDj1O5bSEPYw70Bms5r4%2BqDCEK4AawgdsYkLKFBGn%2F3xWew8nWCjPmv3QkBcOlcds3woCpAVOk1%2FUY1YNzglOzJATrbmd%2BzE8xhJ6a4htEeg3BiMnhUOnYKInvNRSPCjkO7toC3EwFdPuZAzZ8DC06cDEBjqkAVOhIin8tPN8%2BJLZj0jfvwBKUcmqFJmOstC9LLDLaCWh7jS2jnuheBd07lVuX052T%2Bfpy4cheu56c6rYiP530AFnxbAdAu9P35xLqC1%2FEkzq5oNQkO%2BtnKr5KPzFg%2BHTTgsdMDuw0gEFpp9OBXAsoIdr4feiIGC8UdUMWi1aBZL%2F4auWWIwxt60pqGrGsgkSMWzoFjMO5VJgpvr6zxiidSG47Gr%2F&X-Amz-Signature=cb21e228b1fa133321c3846c91bb02dbac7452380fe8ffc4a1bc36ef16a60906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRUEH5TI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDsEHi63J5J7%2BTr7kB%2FWgLsOSifrk6%2BFdmminM%2BfrAIaAIgR0dnJZfmmvi%2Bf0N1BOJiW6cc%2BEbA%2FCEChojPL0ByM90q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHA9d8aiUU61GJF1rircA9B%2FOYpmsn%2B%2Bjqxkb%2FdBZh42OmIwXj8OOn1Pzp%2Fhy2WJZmks1m%2Batdu9KDcmTc%2B%2Fomo%2FHL6SqQdv1sx83jsg4P4ftYim5uUharFuplAV7ggdSQyAQSGV2WMxv7kg7Edx9Iv3cgD6x65X2%2BwqcoslBGiQ43ZBk7636p83wyHiinoLCIllEIXizbIyuznVpg5nodhfriPhqlPi%2F92UsuY3jm0ZXhxBNd%2BnYJEKAVYE79ksmp%2B1BBLDdwGg6ICV8nBOBOqE7ZK692Q4%2BjNdUs8m3DTvkxbRUtQezfQHAdJ4zdLbqOUAVZDxDXvd5KGY32JzGKOdEyiWxWZAInV9KYDhzmNfNP%2Fl3rDrME5fWcrELCDMkD%2Fha2CZnEID%2FZDh56crfzhCKoC7pnfV6uW2WzhI0wyEFq2zPaGJJKJtVWAQcudV1V8Thfzpo6X61uIilyoI%2F9Xd2Jqp76ODWN%2F%2Fw5bAUbftmWokgJNEak0mIHTas5ztzZXsY2MKMoplwbmH%2BuUxerW4Tto8wpOOq8ueNUR%2BOmXjZ1AWvN5W9djA%2F480kLrQOXmOMb2N0HMiiKpxic7RA36dbYivIGItLojAt2nW5r1g7owqCAvBpEjO3fzasSs6chxhotwJZ5dCGTcUMIbpwMQGOqUB%2BZBBuAQqCRT9E6L8VOMsOEpOjIdCBndE00x1WFB3TdPiLotA8AQvCXYdAQm8ySs2BOcojRY8rmU%2Fi7TuHAjUdTAJDtG6YUcJnkqKSqp1XFDzddZMeMWRaix8e%2BPhhoV0rQ20Tdffft3Cbzth%2FyarEqctxm2jx3p7FJmxHivGoZxBbyOPG9QqRJwK0QjN%2BBxyDTIOutWamDbqSUlI77exANq9kYsD&X-Amz-Signature=6da38ff444563878707dac13900f1b8a5cefe64b0d33f9774815bee516098cbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K6G5PNK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC7ZE%2FtVyC4SnXktlHvxN5t2n72LHkwIOIEvtTniK3dugIhALXNzGW2d5%2FMNcdkYm3uhkXBsL1IquMXm5XdKcMyglD%2FKv8DCD0QABoMNjM3NDIzMTgzODA1IgzZ3dfhi1JE241nyhoq3AMsIvBtoYKDmQ%2F9Q9TTG56%2FBPhjG8v%2Bg0441defPo96ZMeMl0kwth9jymjzCiI%2FFrqlnGeLeJcRTvOUlzGuWLQIznmAfxFR2NwJ98UgpE7RDSfKA3ioRaEh4X%2FeZevz5e%2FxE6Om5Ug%2FdWcrcF4mZSRvMxJq92jcUck79YBWaonIRJORbTWCtlI9gmYtZo3C4wOcZ30W40z4wIdnpRwVkI2bkqX61wTb9hCaEn4tfPEN9%2B1JeI9c8TSXRLS4llSWhKccc%2FESiGrcyOf9nbrDbBvgEOWZnS5QW1FQd1Qso5GByL9e5c%2BwWK5VDDPMkrnRmnUOQb2%2F8gypX2TSWTAbPEe2m9wSsjimBnHTuR8%2BehQpdoOAyd2jO5hK7%2Fg7RNZpF%2FgtoX%2BKn0DoOKp4Gzp%2BbFkpk4XDsCLuLRkw6NYF%2FQv7UH5gcQYCFvZnkWIwdrhApcl9LKc%2BjxPLi0cetIIJ%2BFkBnyQ4lDYZHwX3WC8%2B78A%2FDj1O5bSEPYw70Bms5r4%2BqDCEK4AawgdsYkLKFBGn%2F3xWew8nWCjPmv3QkBcOlcds3woCpAVOk1%2FUY1YNzglOzJATrbmd%2BzE8xhJ6a4htEeg3BiMnhUOnYKInvNRSPCjkO7toC3EwFdPuZAzZ8DC06cDEBjqkAVOhIin8tPN8%2BJLZj0jfvwBKUcmqFJmOstC9LLDLaCWh7jS2jnuheBd07lVuX052T%2Bfpy4cheu56c6rYiP530AFnxbAdAu9P35xLqC1%2FEkzq5oNQkO%2BtnKr5KPzFg%2BHTTgsdMDuw0gEFpp9OBXAsoIdr4feiIGC8UdUMWi1aBZL%2F4auWWIwxt60pqGrGsgkSMWzoFjMO5VJgpvr6zxiidSG47Gr%2F&X-Amz-Signature=42223f8e8f230bec2b8070b48b0b546564a01dc430fc0d0bcb402a1d691823a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBADMAIB%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCtKLBhIWmxIL5hZMCYzD5qyXJb5S5dn6bytMhdhk99iAIgWSEyP5V3qio14qq%2BJmHk2UGrFU%2BV8WQInaK07HLAgNMq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDxnLnUTieUYut%2BaAyrcA%2BaIm9%2FqNhtvfvXfMla%2BEMMMQev49vKHEvEsDjOgwWQ077AbkcUBZWg6WsgYy8IRLTvTv7HSu8kpUbtQbbXHl8D3TIbIkv9Ne3xcjuzIAlnf8n%2FV1RsdwiB4pf%2F15d3YuN%2BfPJq0HR4vNe%2BmOgwSDlhkYuvA0tA6UoXek6FbGslrG79JN2szSqq%2BnvTjRMR7HlolRa9vr3siGpJN56oM8cxIKmsxhdQYy7GMKbSFeq%2B9BFDwvR7Ci6fBpUlqgjFYuED9HnGw3E8owst2aIH8Ye0Cp%2FHJkgewaKnCK7v6PcsnxMThoRkXW3HisJHMOqXa47tqO%2FYR72RWCVUqoJeYOdwqTRVd1fDDnK77x%2FwsTT6poubitln8sEz8c7mbARFeaG9GeFIQR0%2FmlzaZjXxiDmwD0Z03F87isj1JFugsalrZwCSJsfQrCVZslG1R9D4i2sQrExKTLUbHflus7ketgWNmteexiRWc5APstmIzNc4J%2FCAYps%2Baj3aJzfq5FG91a%2B64l6MJ1DQORYaW1%2FXBfT6eddKjhHCbroyeC0MuVoREUYUC%2FF%2FpSUbB0HHmRvV9e%2B9xktmsd%2BiyzwYiHuwLuZJUZioGHpvVMl36JUf83aLlgqTh79RcRnbmcdk8MLbpwMQGOqUB1ZbDLjd%2B%2Bqxg%2BZLj6q3k8ZDm%2B5ZGrOr05afTQHdnhREbfw7bKaUO2POy8HHGvPZo9gVxE1PwS2XTnYoj%2FR5arTYOMorFP4PPkGRwbek6h5qxNxdnACjNipUsDVTkpRrRXYm07diuWE5GSrDrTb%2F1%2Bk3LIyBrmzogSu6x6BuDYJTMWRji9gH9ZDI80rnrlwhN1fkCa0Pv2k8RKurPcsb9M3VOiHW4&X-Amz-Signature=d5ce979b70c44993a691252f6ac54728fb89e7c9066b638bba642824669e07c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K6G5PNK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC7ZE%2FtVyC4SnXktlHvxN5t2n72LHkwIOIEvtTniK3dugIhALXNzGW2d5%2FMNcdkYm3uhkXBsL1IquMXm5XdKcMyglD%2FKv8DCD0QABoMNjM3NDIzMTgzODA1IgzZ3dfhi1JE241nyhoq3AMsIvBtoYKDmQ%2F9Q9TTG56%2FBPhjG8v%2Bg0441defPo96ZMeMl0kwth9jymjzCiI%2FFrqlnGeLeJcRTvOUlzGuWLQIznmAfxFR2NwJ98UgpE7RDSfKA3ioRaEh4X%2FeZevz5e%2FxE6Om5Ug%2FdWcrcF4mZSRvMxJq92jcUck79YBWaonIRJORbTWCtlI9gmYtZo3C4wOcZ30W40z4wIdnpRwVkI2bkqX61wTb9hCaEn4tfPEN9%2B1JeI9c8TSXRLS4llSWhKccc%2FESiGrcyOf9nbrDbBvgEOWZnS5QW1FQd1Qso5GByL9e5c%2BwWK5VDDPMkrnRmnUOQb2%2F8gypX2TSWTAbPEe2m9wSsjimBnHTuR8%2BehQpdoOAyd2jO5hK7%2Fg7RNZpF%2FgtoX%2BKn0DoOKp4Gzp%2BbFkpk4XDsCLuLRkw6NYF%2FQv7UH5gcQYCFvZnkWIwdrhApcl9LKc%2BjxPLi0cetIIJ%2BFkBnyQ4lDYZHwX3WC8%2B78A%2FDj1O5bSEPYw70Bms5r4%2BqDCEK4AawgdsYkLKFBGn%2F3xWew8nWCjPmv3QkBcOlcds3woCpAVOk1%2FUY1YNzglOzJATrbmd%2BzE8xhJ6a4htEeg3BiMnhUOnYKInvNRSPCjkO7toC3EwFdPuZAzZ8DC06cDEBjqkAVOhIin8tPN8%2BJLZj0jfvwBKUcmqFJmOstC9LLDLaCWh7jS2jnuheBd07lVuX052T%2Bfpy4cheu56c6rYiP530AFnxbAdAu9P35xLqC1%2FEkzq5oNQkO%2BtnKr5KPzFg%2BHTTgsdMDuw0gEFpp9OBXAsoIdr4feiIGC8UdUMWi1aBZL%2F4auWWIwxt60pqGrGsgkSMWzoFjMO5VJgpvr6zxiidSG47Gr%2F&X-Amz-Signature=8ea40d32c19f6c9c86b496c13f5e47a962684e12d4d5c598efd96bae55658691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCJET7PY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFvbgLNXJ1hf33b2xZwMywlZswlceb9wrUVqx0GUsgoZAiEAkgzWQK2SRMTT6GkpwLAFZLz5XFh3V%2FMSV%2FMA3gKqCm8q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCpm1aITIa5ERh0aqCrcA%2BJEYxp89qVsb0Dutye5QKvz7%2BX%2B784TkI9ZkgGbatT9xXDHHTXwL0WHqctLRVvHYlFWvfFJgMrylullk3%2BTpv70s%2FPGLOCp%2FKDqevzd1mH6K1A8xCjMrobqzWN%2B%2BWuNi1JG3oBfvYnwbDoozbdkHc6wdsyZKffuZFimXCcNUi1lotVIEZ1Q0svO3tWg7j8WOS4So%2BXLb%2FSVJf4clkJz2BBaca1oZA93k0kHlz7LCT5YSj8qy45otTxuDdG2ED0zLzWWevPcxu%2B1pyIQmrM5a%2B%2BgHvDSLeU905XgIM0EmV2sQcBRM4EeuX2hBvlnwkylOrq3GBH7hXtw1L2Kvqqvv0zRofYT5m2ZqO3b%2F6f1VUDQHhcPiSumnoU0YpG80xjgoba8HT%2Ft4N5lCRcG0qSizCOL4DSVl9o4Zsx9bIi1oMGRHFiasf1IpQgYt4%2FmPY35wpc8XdgO%2FgxghLFLuVZAgpFd9Meyz3RkjS12LXiWBB5UtARUEWpmpgk%2FLUtmtLAFo4qKgvPVumXIaLFk1o3tcpY%2BF%2B5G8%2FiQQKEkZvUaEeOoW9jS1JIinW67DWPod62EJnqofdu8l1gw8UfLPLdNIsCMqq9DolZQLEkRTWRUYm%2Fn%2BqP94rTSWM6fWUZfMILqwMQGOqUB1uPFuC5t3uXveMbrecntyue9mYxkmRoDDyA0WHGoEYYwl%2F%2BgqFOM2AxlmYZ4u70h1LeA2y6T5FZJdOywB3LmFg8vjxOumJYfF68VVCjwQMB2NF%2F3PmVAhpGToch%2FyckC65pQRfC0dOY1U46VbCOTZqPqTOmmbykZggRQ9j8nF7wpcOcTcsg%2FG2JZOw9%2FKcoiatLjHpTwcynYit0%2Fyz4KxiI6Omlv&X-Amz-Signature=b6fc450372a2ffacda7baeba020f177f6250a6951a6d39065a81027c38522f6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K6G5PNK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC7ZE%2FtVyC4SnXktlHvxN5t2n72LHkwIOIEvtTniK3dugIhALXNzGW2d5%2FMNcdkYm3uhkXBsL1IquMXm5XdKcMyglD%2FKv8DCD0QABoMNjM3NDIzMTgzODA1IgzZ3dfhi1JE241nyhoq3AMsIvBtoYKDmQ%2F9Q9TTG56%2FBPhjG8v%2Bg0441defPo96ZMeMl0kwth9jymjzCiI%2FFrqlnGeLeJcRTvOUlzGuWLQIznmAfxFR2NwJ98UgpE7RDSfKA3ioRaEh4X%2FeZevz5e%2FxE6Om5Ug%2FdWcrcF4mZSRvMxJq92jcUck79YBWaonIRJORbTWCtlI9gmYtZo3C4wOcZ30W40z4wIdnpRwVkI2bkqX61wTb9hCaEn4tfPEN9%2B1JeI9c8TSXRLS4llSWhKccc%2FESiGrcyOf9nbrDbBvgEOWZnS5QW1FQd1Qso5GByL9e5c%2BwWK5VDDPMkrnRmnUOQb2%2F8gypX2TSWTAbPEe2m9wSsjimBnHTuR8%2BehQpdoOAyd2jO5hK7%2Fg7RNZpF%2FgtoX%2BKn0DoOKp4Gzp%2BbFkpk4XDsCLuLRkw6NYF%2FQv7UH5gcQYCFvZnkWIwdrhApcl9LKc%2BjxPLi0cetIIJ%2BFkBnyQ4lDYZHwX3WC8%2B78A%2FDj1O5bSEPYw70Bms5r4%2BqDCEK4AawgdsYkLKFBGn%2F3xWew8nWCjPmv3QkBcOlcds3woCpAVOk1%2FUY1YNzglOzJATrbmd%2BzE8xhJ6a4htEeg3BiMnhUOnYKInvNRSPCjkO7toC3EwFdPuZAzZ8DC06cDEBjqkAVOhIin8tPN8%2BJLZj0jfvwBKUcmqFJmOstC9LLDLaCWh7jS2jnuheBd07lVuX052T%2Bfpy4cheu56c6rYiP530AFnxbAdAu9P35xLqC1%2FEkzq5oNQkO%2BtnKr5KPzFg%2BHTTgsdMDuw0gEFpp9OBXAsoIdr4feiIGC8UdUMWi1aBZL%2F4auWWIwxt60pqGrGsgkSMWzoFjMO5VJgpvr6zxiidSG47Gr%2F&X-Amz-Signature=8102bf365c0246231f08643cbae67815b56c64c3907212d6b87ea9250fec08ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T356R6QE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIFM%2Fufu%2BTzAxviYIuitYsw6%2BlfsCYEuFablCXkwUQYX8AiBBp3bCJal%2BsJVj2jhZ%2FJeNKQyuvWBBylBtaLc1NWorayr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMqse3u8VtZWYDtdX%2BKtwDAG%2Fubc971C6SZ3PI%2Bv3A5zVyyU4vZFlEktQ8B6HIiPksJAcXECjsLK3FUlJnuRu3MNlBEG9dz7Ha%2BZfXgSYRyMp66XokAcLnhLQ%2F9BOoi4WLT5o5ZfQGW7gRbvG4KMSPgSECQ2RDoELig0S%2BwwtHYoXhbTLwt5eQCPiVj9cTKdlb3WZAUxf50AbGcoYC6FQp%2FFQLlEVl0YREG5cgKCkJcSdiQ%2FoBmoeoLviCNX%2FWA7gmqTiw9mI02%2FWmSAv8hhVcgS%2FJVYr2O5ezozVw%2BBUMHSotbQLJVjeILd08QGPsV5dhGhu1kX6OBMjCNvJpSunGchCFfpoGGSKuhtIeG0NurtUSaCNt%2F1L6rUeYFODmmKdUzj7T%2Bdt%2BfILN8VjCAAzcvUNAgjkco5Dhsl69nuc9Mv%2FVQN0Lcp0xGBmjSAJDN%2FFzYdYyYOpkYvq4k%2BT4ldW%2F9UBeT7%2FYhzQW2%2F%2Fsp5C7QQQzoFmW8l3l%2BGoKjaJJDTQTVPgt744ksZQzbWTm4Pny%2F7Y%2BTLQzZ1%2FeRxegU9DpyiVvRpKT7pGdL7Dyt1zFbvMuqrEyWl2bfl5%2B5AKf80rIgvg2zl2hE%2BBV4Gzp55fxM%2B2gKbetCONb8Qs%2FYOkDVEXvxv%2BQltCqi5Hn%2BmYw9unAxAY6pgE9htBAoyakVW7Ty0GWWjwD2WPndD9MzpSvSQMPPl1FsRfhMq8FyqY%2Fe%2Fzf6VckcSfTCJnhFDm51IEWl56MiOC8cues5lg0KJhmQfmB1K2TRCqtzwIAGgWZ4uqd8OBpL%2F8yF6VKH2PMmjHAjcXFbCOJCu8hY%2F7XtsOkO%2Fgrayp060eSoxf0GLCFV09zCVJD4n%2FSke6Ha3cMlHqKfAFjTM6ObGrVN08H&X-Amz-Signature=559ea57b0f36f05ed70bcb46a9e0ac7c3828db19bb9a8aa4ee646113d2aabfc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYVBBEZP%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDjZYgdGy4LFynCr7j%2B3wVliCh5OUwWtbqjqXZLTwDCfAIgZo6MfBHcRlAUcHz0FlXMa75to2Mg7BEJ%2FuVH4Ey2%2BPIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPhtHo0l2xGYynNcqircA%2BTntZlpf%2FJjzdOAOlzxkh1kM4r%2FZOl4MyON9hpfwUJABPLyWhmiP5885qjpqvKF3Yf8%2FoFXW3HwNGbwlNm%2BNMAa%2FTMsUY4X7iTMpViI2h12FdUWPaX%2FMd2ba%2B5y93e89imEYBfhmkOgH%2FzvLO%2Bl5ACmcK%2BBWOawALldf%2Fy1302Mg%2Fvu5cETzL%2F8bYng0dOH59rvgH2HOFANfatvuKIww2fmVnb7qraU23ro1e2xCTtP6kltP9i2v7gzoVqLi9HjhbFMD9jsNAKsckjP%2B9x2hxsl6jEOOexJvoZIgxUhc4RiDUq1i%2FqyqTMviUZ7WbZQA80kyiyeB6EfwrvR%2FOiHsLBqOsfyubO%2F20NfOSIhe%2Bwwosucb%2F3TXuJV8%2BLTYYfTWr4vohmO5zXtjn4dA7iFICubalcJUmZKtZe3od3WCapVXh3pAzShHhACVss%2BZP41Evc9l9N%2FhrSNBcXcW6XRgJ89pWkgWBYnzbez74RK6fQF17FQcRrpWi9l24dslZHZPehxnZ%2B8Pzyf58vL6N29ULwgs0gvjUJvPuQ093fyI%2BcwdPj3w07rrjolE3T9tcfGoyS8resaKcpUkd7Y6V69KubrEGd8C2OisjIgcqR6ucxuRKjlcxZRnEgyV5NdMP3owMQGOqUBhglsge4ZRCqZcFGwdI9hxtI5M7cmh1OO38CfBxY272QSID9KiZPfUn1ffHiiPogE8bNrDDyGpv2kqpZMOqGRSj%2BC37bIKn1r%2BDYA7eV0gS%2BkUTrC98zdZWGflmzQGhEqpIcs8pzAe6WWvNNSK55q5KbFBfEMhgGrMQ%2BcNnnL2uUQGQQubpNIdpkhKA4gTJBZHRm2qJsUvob%2BgL0HVPlicikV2tZO&X-Amz-Signature=9b4a29e40cfb4496601750560461b6b23a35fe5b36b68485c582e31cb10ee925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24UUT7I%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIEYKUPgPfFCESoXiSNt1IKMSZ1O0eBYM3Q%2Frfq%2BUoJYBAiEAqPDxu7n27Fg%2F2RiWmsUyWn%2Fo8lNzDuxkv7Wcand85EMq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDJ6%2BuEP9e1vCR%2FXXFircA2n6UjGAx53bJ2L%2FqCUXOMFSREowyOX%2BQa947RL04j6eBP0IS0g4zzIcRIWccPXZEs%2FyFHJpUeiHvf9E3ZA4GTDaiF0uZ3sN0r1SaNO85VvSJ80859LBsE59htEuQNhYXDvALi%2F3KqMGsDs0UL3WBNxsBOXxWH%2B%2BhpAYaxipL0wa100BPNr%2BiuwcCSaw98wgxhIvRLF9Jrd8XX806THNGLn7VZ%2BdNRUq6E6MyxcI0aWYpva3sdrOUOylKVjaYfiSTw3d%2F%2FmMqFRKTrrDFm1MK7y1OyjmYrgzLrnF%2B%2Fncvyv34Ik7K99oQyaELsrFb0EgNdSgVm8jAfXZvBrJv0nr4IyDExgX4VJT74YhTqzYJrkkVUSR5SyLnHqwoQMKHoL9%2Fsbowz1bEheHeivgSmBOmE3RejunLY8rvUvJIZkHXQf2muUOoZ2uSammoH3avqZfdbwKAfpeZY5ZCyeXA9M8S611oxVXbxQz3Cr%2B37nZoRZkVxLW2f35X0HQfmSreJ4JBCmaNHgycDXcdmvL62%2BD7mL%2BWkbnFFNsOiYEZSQGAP081qgQio7pSnOc82wEMGbLMYsyLSLVMY6dVONGMqzJuTDRXW7gMXXCr7pVfEHn2cO5XKm2nPkI5yEF34%2F8MJfpwMQGOqUBuy31oKgkRhXnO352MBAzTGwOBey69Sk7tAj72xXZp6L8eL9cvJrIUxF8HqP1c8MMfNAgHBTHe654tyU5J%2Fl46I%2B%2FE1c2o2TTGHqil3IJSCvC3bN%2BfCOR%2FG1d%2BRQG9akJ4bv2%2FxHLg%2B5n0pHs%2FUJOlg6pJFGb%2BsZ7uuBhKTS5QW8bhcx0eFtgiExCWoqShv0TqqUV%2BnbQAKen26nOX%2BDIspDl5ew9&X-Amz-Signature=e5ebd225269d69f0987682116624c997845c4869b2410cd7e5c01b82c7a8ebb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662MQZEQO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCs0LbXtTYYg5PwnobR8RgdVAcE9QEgFhgAwafEUJEoBAIhAKBba7o%2BCwgEDWRYHfC5Z5nnIK7z3TRkF4JAHQ7o51vpKv8DCD0QABoMNjM3NDIzMTgzODA1IgyyVCsLCUczrt3HMRMq3APGdHxQeasvc1Mbmlhm2Q81CJ%2Bxcj0WjX5xn9I%2BOrZIuD8N%2FuGjCIF8bFcqOgyEJANDZd7JXpOAdgQXDgEY%2Fh4sR0SeDiKtujzW%2FILcevtycfPuJbCTPrHLrmbz7fKqY2C97%2BTdYwkEZUoS%2B4spv9wzUTXuUhxo1BQLFXg4GQ064tIYH6%2F4AbSPPsQdW9oj4JmVrkIvSdhEwVdGpNvmOYT83LsVHOksXyLSzTfiGXkhMLuSYG36ixfbJD6ljtTdgKfuhSqnPsVgHJsA3aswB%2BJG253NmwhcbCkV%2B%2BM%2B9Bdq5RPUlU7pmmKGfxQoNb2wj853THt2z0bWBHQRmiQ8YbRz4vUDm1kaFp%2BrG4qR7BDrtRC8zwn1f4Cq9%2BuoTclhGtLfGnelfjr%2Bvq7NaueMci7LKdugbPU%2Fx4lrRUhEEkMD4DmaN65hX%2BUeYCII6LSWE7nBY91N5B6gIfFAQOBN5L%2FvMn%2FZijI0MPayL%2FKpcqbOxCn%2BmuHkw2V0EWVNEL4X3GdPEIPAi%2Bnf7LyEo0FyLjnasIEw%2F1ihiUFOGlZ73caIftorzvYjpDiQNH83PXTGwKG36zOTg80Q%2B2EpHwOJFdoUxyvk2Rc%2FlcX%2FGkFBoJlcucyJcfTE0gbwNO5gfDDB6cDEBjqkAWUQ09LnZbAl84tbFqMDxKppd8G%2B8%2F%2FPyNrvYpXrY4k9eF4%2FT7uagWvzafFrGwQUoxd2wCidiAxAY%2BBcq0E7PrUsHwL7etPeye59Dwzrzbn%2BlvhM0PZDZOx8%2B5Y8D74TyJ8%2B6lEgZUP7A5jW0sePU4aZ%2F%2FDq%2FmWFIUlAqUk4fUEhuqkYpuZvPT4jmqpwYzTlEzWvmpUyzWh81yM748Q8qDqKLTcQ&X-Amz-Signature=67482b7b94ea41d46d0fad9cb4e059afa4a42f8a9cb49b10c48ca6b53ab4bf37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCYGPUU4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBEFIKuWC9jeXUrBQbpn2fHOnT22O6DXSg%2BfvMXgUGptAiBYc%2B9JBV4tOulYa8lBZQ5ODBcNC7MGvqb2OldSsAN8rir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM9ighBpiqWz0Z9bzGKtwDhsQGD7nm%2BjL7lIG%2B8cX9hzAUju2Xr%2FP1rL7ApcnZ%2BJHCHlog%2B1zhRUlUHVjTkPHD1nM4pFAwgUmBFJIH16wLlWHZxr7dP11k0uwnOQWM%2FHNZp197QD3dpLXlOVGJv0ElZgncOgBeInpyZOWcL%2BUtz8Gb91n9cP3Id%2BJRQCvPouoJ%2FSgNYCitI9ZjIu%2FsimCE5l8wwh6pn6PFUOt4tV50%2F%2FnfoFhnuWeU5%2B7BN3FWjuBjHUydSjo5AaoQvVYsWP8pT6Qq40l6ZdoBgvzXC%2FYf6Fp%2BkVPlCoxFwq9L77Mtd4rTw1JFbgOmD7e1yVAER43nUD7tXccjppNrtEPXeoEe5hnH4pxEAYOhbKBDIA9aTnoYfnkHEh23fGVpP2sfjoW3O2DIU6x1y76sNqC1rgI%2Fr7l86zVMfEZJivnsGHIrY7w31bAYQC9%2B0BlLefWZhbnENiRn3UDP1rYa34NtnCesCnd3pfK8wrJNOesKoECv3GSJdncUNhIlKqmoXmjPDQyOg33MX%2BklOBNo5aA5hqkSzcqtwVfTwQsHNWdR5EevORURr%2BJLz4pkFVXx0EEitBUcThdLlpBKrXFPb2TBfokD1GYGvJUeIEIqss%2FZBqovUF2yakWno9TUlaoq8FMw%2BOjAxAY6pgGlwB3Ho5ZWh%2FuQK2VvlZSwvrEcVBdkyN3c%2BUdGTb2jw7mvegtCW0KGELJeKqmi7cWZ6M%2BOfl7tMefSZlAH3TAZNR5zL%2Bb0UbQJtuJg1rc9rZJ1fmc5L%2Bf99CEK6CQPGoCS%2FQ5YAiAYwwWsjDWbsR7jxDJtbenXKzzMe%2FJOj%2Bk4231fkfuAEkIePGfkgph81OYyjPAdpQdrSHaqQA5A9fe9RRNo3NZP&X-Amz-Signature=74adc92fb860295de782421dc8fb61b1180f2c0089ba879eeb53b8e1c6b17351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K6G5PNK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC7ZE%2FtVyC4SnXktlHvxN5t2n72LHkwIOIEvtTniK3dugIhALXNzGW2d5%2FMNcdkYm3uhkXBsL1IquMXm5XdKcMyglD%2FKv8DCD0QABoMNjM3NDIzMTgzODA1IgzZ3dfhi1JE241nyhoq3AMsIvBtoYKDmQ%2F9Q9TTG56%2FBPhjG8v%2Bg0441defPo96ZMeMl0kwth9jymjzCiI%2FFrqlnGeLeJcRTvOUlzGuWLQIznmAfxFR2NwJ98UgpE7RDSfKA3ioRaEh4X%2FeZevz5e%2FxE6Om5Ug%2FdWcrcF4mZSRvMxJq92jcUck79YBWaonIRJORbTWCtlI9gmYtZo3C4wOcZ30W40z4wIdnpRwVkI2bkqX61wTb9hCaEn4tfPEN9%2B1JeI9c8TSXRLS4llSWhKccc%2FESiGrcyOf9nbrDbBvgEOWZnS5QW1FQd1Qso5GByL9e5c%2BwWK5VDDPMkrnRmnUOQb2%2F8gypX2TSWTAbPEe2m9wSsjimBnHTuR8%2BehQpdoOAyd2jO5hK7%2Fg7RNZpF%2FgtoX%2BKn0DoOKp4Gzp%2BbFkpk4XDsCLuLRkw6NYF%2FQv7UH5gcQYCFvZnkWIwdrhApcl9LKc%2BjxPLi0cetIIJ%2BFkBnyQ4lDYZHwX3WC8%2B78A%2FDj1O5bSEPYw70Bms5r4%2BqDCEK4AawgdsYkLKFBGn%2F3xWew8nWCjPmv3QkBcOlcds3woCpAVOk1%2FUY1YNzglOzJATrbmd%2BzE8xhJ6a4htEeg3BiMnhUOnYKInvNRSPCjkO7toC3EwFdPuZAzZ8DC06cDEBjqkAVOhIin8tPN8%2BJLZj0jfvwBKUcmqFJmOstC9LLDLaCWh7jS2jnuheBd07lVuX052T%2Bfpy4cheu56c6rYiP530AFnxbAdAu9P35xLqC1%2FEkzq5oNQkO%2BtnKr5KPzFg%2BHTTgsdMDuw0gEFpp9OBXAsoIdr4feiIGC8UdUMWi1aBZL%2F4auWWIwxt60pqGrGsgkSMWzoFjMO5VJgpvr6zxiidSG47Gr%2F&X-Amz-Signature=674be40ff91e73de301b2a68137bf2fc4707c26de7714690bc2c5655c3cdf4bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K6G5PNK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC7ZE%2FtVyC4SnXktlHvxN5t2n72LHkwIOIEvtTniK3dugIhALXNzGW2d5%2FMNcdkYm3uhkXBsL1IquMXm5XdKcMyglD%2FKv8DCD0QABoMNjM3NDIzMTgzODA1IgzZ3dfhi1JE241nyhoq3AMsIvBtoYKDmQ%2F9Q9TTG56%2FBPhjG8v%2Bg0441defPo96ZMeMl0kwth9jymjzCiI%2FFrqlnGeLeJcRTvOUlzGuWLQIznmAfxFR2NwJ98UgpE7RDSfKA3ioRaEh4X%2FeZevz5e%2FxE6Om5Ug%2FdWcrcF4mZSRvMxJq92jcUck79YBWaonIRJORbTWCtlI9gmYtZo3C4wOcZ30W40z4wIdnpRwVkI2bkqX61wTb9hCaEn4tfPEN9%2B1JeI9c8TSXRLS4llSWhKccc%2FESiGrcyOf9nbrDbBvgEOWZnS5QW1FQd1Qso5GByL9e5c%2BwWK5VDDPMkrnRmnUOQb2%2F8gypX2TSWTAbPEe2m9wSsjimBnHTuR8%2BehQpdoOAyd2jO5hK7%2Fg7RNZpF%2FgtoX%2BKn0DoOKp4Gzp%2BbFkpk4XDsCLuLRkw6NYF%2FQv7UH5gcQYCFvZnkWIwdrhApcl9LKc%2BjxPLi0cetIIJ%2BFkBnyQ4lDYZHwX3WC8%2B78A%2FDj1O5bSEPYw70Bms5r4%2BqDCEK4AawgdsYkLKFBGn%2F3xWew8nWCjPmv3QkBcOlcds3woCpAVOk1%2FUY1YNzglOzJATrbmd%2BzE8xhJ6a4htEeg3BiMnhUOnYKInvNRSPCjkO7toC3EwFdPuZAzZ8DC06cDEBjqkAVOhIin8tPN8%2BJLZj0jfvwBKUcmqFJmOstC9LLDLaCWh7jS2jnuheBd07lVuX052T%2Bfpy4cheu56c6rYiP530AFnxbAdAu9P35xLqC1%2FEkzq5oNQkO%2BtnKr5KPzFg%2BHTTgsdMDuw0gEFpp9OBXAsoIdr4feiIGC8UdUMWi1aBZL%2F4auWWIwxt60pqGrGsgkSMWzoFjMO5VJgpvr6zxiidSG47Gr%2F&X-Amz-Signature=d5f177022a336bf0e4593b3a96a3ce7aa0ad8445fba754f40f6bc9324ed05d88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DOOW37M%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBT2z1xHA7CmvRa6lE8F8%2BVxbYYZlXFou4XriOKgVoVrAiBav2kJv9k88Vg%2BZyZ5r6Z%2FK0gnfYXlwY2wHSJeyAa4ayr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMqYFNxldHHh3NIVVkKtwDgHbgMfVtHHwC2wFeQk2GHG8%2BRAajcaTPrt7mFLB2y991hAZO8%2FbvJsmmTspfJKxRBDo31ZCXUimXzM0zKTvJ0DpDMt0BlE2pXdAhQZynWRuDir4xacrAyyIlejN60EfeURUE4APV713xcWnBZUkSUHQjTZ%2FwBTVb2xkN4fj04seRIjN5725kuzD8OtTCHyPNx%2FrKVA2i%2Fl0bVrDFW%2Fd6ZV1UIYc95k2IEvhbZqbOFpxFYr8ji%2FWYhPC3sXd6phMkepuL5JONUiugiykZMBFR5%2F%2F194BPZNsXXZiAOBQiExrQFVGGdyrnZOQ7rrnBer%2BrkgQpLqr5xIbpdPuJCCjqmm4e55mrPJZG40hG%2F3mUBOrdmtNld%2FK3HONzwrJyMVb0zPS%2FyA5vHo7AuBkJEIv3ndG0b9ot2i3uygF1ShUhW%2Bj7quBwpkWqp4RbjFybycke9eoNU0FtEGm8gVaFIYYsHy3abqTWnJrsPjuQ6oqotBSk7xHsxwytByViWBNNcfXOQ8mth28Cs8k91UrlckGGeL27gDkQBPdQo2V%2BlXJXeu7pohJa7Xil77Dv8gdLmjqhWLjGSgckDMGb0bYQ5VEe3tfAr2D7SG%2F1qoq%2Buv3A2w71VvJRBe576O%2BQ2Xsw7unAxAY6pgEMqrG8CrOC1Bff7kDUIzvyUq8E2HicbzFDgts%2FKLv9fzqFsLYjWQ49ukp3ppX%2Fp239p11hJJbypPQcOHgijFso7dLe9sWojUmCkWaBlehgA4ZVmBqEVii3q82DRu29n0lJRHO4yadeqEsQ0siwe%2Bye779oInItAvVYmhtCB4yrtEqMz%2BHejOgNoSs%2F6ZIgKSmPZY8%2ByJ%2BIqkrFvXecThlj7qUFxQq0&X-Amz-Signature=5a70c7c0aabd3f1ca3c4cc295d2d5baad08ad7036bddeb443568160bf4ba7912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DOOW37M%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBT2z1xHA7CmvRa6lE8F8%2BVxbYYZlXFou4XriOKgVoVrAiBav2kJv9k88Vg%2BZyZ5r6Z%2FK0gnfYXlwY2wHSJeyAa4ayr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMqYFNxldHHh3NIVVkKtwDgHbgMfVtHHwC2wFeQk2GHG8%2BRAajcaTPrt7mFLB2y991hAZO8%2FbvJsmmTspfJKxRBDo31ZCXUimXzM0zKTvJ0DpDMt0BlE2pXdAhQZynWRuDir4xacrAyyIlejN60EfeURUE4APV713xcWnBZUkSUHQjTZ%2FwBTVb2xkN4fj04seRIjN5725kuzD8OtTCHyPNx%2FrKVA2i%2Fl0bVrDFW%2Fd6ZV1UIYc95k2IEvhbZqbOFpxFYr8ji%2FWYhPC3sXd6phMkepuL5JONUiugiykZMBFR5%2F%2F194BPZNsXXZiAOBQiExrQFVGGdyrnZOQ7rrnBer%2BrkgQpLqr5xIbpdPuJCCjqmm4e55mrPJZG40hG%2F3mUBOrdmtNld%2FK3HONzwrJyMVb0zPS%2FyA5vHo7AuBkJEIv3ndG0b9ot2i3uygF1ShUhW%2Bj7quBwpkWqp4RbjFybycke9eoNU0FtEGm8gVaFIYYsHy3abqTWnJrsPjuQ6oqotBSk7xHsxwytByViWBNNcfXOQ8mth28Cs8k91UrlckGGeL27gDkQBPdQo2V%2BlXJXeu7pohJa7Xil77Dv8gdLmjqhWLjGSgckDMGb0bYQ5VEe3tfAr2D7SG%2F1qoq%2Buv3A2w71VvJRBe576O%2BQ2Xsw7unAxAY6pgEMqrG8CrOC1Bff7kDUIzvyUq8E2HicbzFDgts%2FKLv9fzqFsLYjWQ49ukp3ppX%2Fp239p11hJJbypPQcOHgijFso7dLe9sWojUmCkWaBlehgA4ZVmBqEVii3q82DRu29n0lJRHO4yadeqEsQ0siwe%2Bye779oInItAvVYmhtCB4yrtEqMz%2BHejOgNoSs%2F6ZIgKSmPZY8%2ByJ%2BIqkrFvXecThlj7qUFxQq0&X-Amz-Signature=49d6ac34c0977aa10184317b26bb70721250231db7b2e23bd2196091a887b7f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DOOW37M%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBT2z1xHA7CmvRa6lE8F8%2BVxbYYZlXFou4XriOKgVoVrAiBav2kJv9k88Vg%2BZyZ5r6Z%2FK0gnfYXlwY2wHSJeyAa4ayr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMqYFNxldHHh3NIVVkKtwDgHbgMfVtHHwC2wFeQk2GHG8%2BRAajcaTPrt7mFLB2y991hAZO8%2FbvJsmmTspfJKxRBDo31ZCXUimXzM0zKTvJ0DpDMt0BlE2pXdAhQZynWRuDir4xacrAyyIlejN60EfeURUE4APV713xcWnBZUkSUHQjTZ%2FwBTVb2xkN4fj04seRIjN5725kuzD8OtTCHyPNx%2FrKVA2i%2Fl0bVrDFW%2Fd6ZV1UIYc95k2IEvhbZqbOFpxFYr8ji%2FWYhPC3sXd6phMkepuL5JONUiugiykZMBFR5%2F%2F194BPZNsXXZiAOBQiExrQFVGGdyrnZOQ7rrnBer%2BrkgQpLqr5xIbpdPuJCCjqmm4e55mrPJZG40hG%2F3mUBOrdmtNld%2FK3HONzwrJyMVb0zPS%2FyA5vHo7AuBkJEIv3ndG0b9ot2i3uygF1ShUhW%2Bj7quBwpkWqp4RbjFybycke9eoNU0FtEGm8gVaFIYYsHy3abqTWnJrsPjuQ6oqotBSk7xHsxwytByViWBNNcfXOQ8mth28Cs8k91UrlckGGeL27gDkQBPdQo2V%2BlXJXeu7pohJa7Xil77Dv8gdLmjqhWLjGSgckDMGb0bYQ5VEe3tfAr2D7SG%2F1qoq%2Buv3A2w71VvJRBe576O%2BQ2Xsw7unAxAY6pgEMqrG8CrOC1Bff7kDUIzvyUq8E2HicbzFDgts%2FKLv9fzqFsLYjWQ49ukp3ppX%2Fp239p11hJJbypPQcOHgijFso7dLe9sWojUmCkWaBlehgA4ZVmBqEVii3q82DRu29n0lJRHO4yadeqEsQ0siwe%2Bye779oInItAvVYmhtCB4yrtEqMz%2BHejOgNoSs%2F6ZIgKSmPZY8%2ByJ%2BIqkrFvXecThlj7qUFxQq0&X-Amz-Signature=6c0316c23b0b6257025e864f5baac73fa43c3f8d081fb62af152eb792a6d5fe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DOOW37M%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBT2z1xHA7CmvRa6lE8F8%2BVxbYYZlXFou4XriOKgVoVrAiBav2kJv9k88Vg%2BZyZ5r6Z%2FK0gnfYXlwY2wHSJeyAa4ayr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMqYFNxldHHh3NIVVkKtwDgHbgMfVtHHwC2wFeQk2GHG8%2BRAajcaTPrt7mFLB2y991hAZO8%2FbvJsmmTspfJKxRBDo31ZCXUimXzM0zKTvJ0DpDMt0BlE2pXdAhQZynWRuDir4xacrAyyIlejN60EfeURUE4APV713xcWnBZUkSUHQjTZ%2FwBTVb2xkN4fj04seRIjN5725kuzD8OtTCHyPNx%2FrKVA2i%2Fl0bVrDFW%2Fd6ZV1UIYc95k2IEvhbZqbOFpxFYr8ji%2FWYhPC3sXd6phMkepuL5JONUiugiykZMBFR5%2F%2F194BPZNsXXZiAOBQiExrQFVGGdyrnZOQ7rrnBer%2BrkgQpLqr5xIbpdPuJCCjqmm4e55mrPJZG40hG%2F3mUBOrdmtNld%2FK3HONzwrJyMVb0zPS%2FyA5vHo7AuBkJEIv3ndG0b9ot2i3uygF1ShUhW%2Bj7quBwpkWqp4RbjFybycke9eoNU0FtEGm8gVaFIYYsHy3abqTWnJrsPjuQ6oqotBSk7xHsxwytByViWBNNcfXOQ8mth28Cs8k91UrlckGGeL27gDkQBPdQo2V%2BlXJXeu7pohJa7Xil77Dv8gdLmjqhWLjGSgckDMGb0bYQ5VEe3tfAr2D7SG%2F1qoq%2Buv3A2w71VvJRBe576O%2BQ2Xsw7unAxAY6pgEMqrG8CrOC1Bff7kDUIzvyUq8E2HicbzFDgts%2FKLv9fzqFsLYjWQ49ukp3ppX%2Fp239p11hJJbypPQcOHgijFso7dLe9sWojUmCkWaBlehgA4ZVmBqEVii3q82DRu29n0lJRHO4yadeqEsQ0siwe%2Bye779oInItAvVYmhtCB4yrtEqMz%2BHejOgNoSs%2F6ZIgKSmPZY8%2ByJ%2BIqkrFvXecThlj7qUFxQq0&X-Amz-Signature=6e276b73c35c2f508858a0bfc79c91ebd7aa29e2dee7d65f961aa56f557652af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DOOW37M%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBT2z1xHA7CmvRa6lE8F8%2BVxbYYZlXFou4XriOKgVoVrAiBav2kJv9k88Vg%2BZyZ5r6Z%2FK0gnfYXlwY2wHSJeyAa4ayr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMqYFNxldHHh3NIVVkKtwDgHbgMfVtHHwC2wFeQk2GHG8%2BRAajcaTPrt7mFLB2y991hAZO8%2FbvJsmmTspfJKxRBDo31ZCXUimXzM0zKTvJ0DpDMt0BlE2pXdAhQZynWRuDir4xacrAyyIlejN60EfeURUE4APV713xcWnBZUkSUHQjTZ%2FwBTVb2xkN4fj04seRIjN5725kuzD8OtTCHyPNx%2FrKVA2i%2Fl0bVrDFW%2Fd6ZV1UIYc95k2IEvhbZqbOFpxFYr8ji%2FWYhPC3sXd6phMkepuL5JONUiugiykZMBFR5%2F%2F194BPZNsXXZiAOBQiExrQFVGGdyrnZOQ7rrnBer%2BrkgQpLqr5xIbpdPuJCCjqmm4e55mrPJZG40hG%2F3mUBOrdmtNld%2FK3HONzwrJyMVb0zPS%2FyA5vHo7AuBkJEIv3ndG0b9ot2i3uygF1ShUhW%2Bj7quBwpkWqp4RbjFybycke9eoNU0FtEGm8gVaFIYYsHy3abqTWnJrsPjuQ6oqotBSk7xHsxwytByViWBNNcfXOQ8mth28Cs8k91UrlckGGeL27gDkQBPdQo2V%2BlXJXeu7pohJa7Xil77Dv8gdLmjqhWLjGSgckDMGb0bYQ5VEe3tfAr2D7SG%2F1qoq%2Buv3A2w71VvJRBe576O%2BQ2Xsw7unAxAY6pgEMqrG8CrOC1Bff7kDUIzvyUq8E2HicbzFDgts%2FKLv9fzqFsLYjWQ49ukp3ppX%2Fp239p11hJJbypPQcOHgijFso7dLe9sWojUmCkWaBlehgA4ZVmBqEVii3q82DRu29n0lJRHO4yadeqEsQ0siwe%2Bye779oInItAvVYmhtCB4yrtEqMz%2BHejOgNoSs%2F6ZIgKSmPZY8%2ByJ%2BIqkrFvXecThlj7qUFxQq0&X-Amz-Signature=85db175d24d17c4c537572ce1e0eef14e64503df3e2b65b3572efbf96f2d874e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DOOW37M%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBT2z1xHA7CmvRa6lE8F8%2BVxbYYZlXFou4XriOKgVoVrAiBav2kJv9k88Vg%2BZyZ5r6Z%2FK0gnfYXlwY2wHSJeyAa4ayr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMqYFNxldHHh3NIVVkKtwDgHbgMfVtHHwC2wFeQk2GHG8%2BRAajcaTPrt7mFLB2y991hAZO8%2FbvJsmmTspfJKxRBDo31ZCXUimXzM0zKTvJ0DpDMt0BlE2pXdAhQZynWRuDir4xacrAyyIlejN60EfeURUE4APV713xcWnBZUkSUHQjTZ%2FwBTVb2xkN4fj04seRIjN5725kuzD8OtTCHyPNx%2FrKVA2i%2Fl0bVrDFW%2Fd6ZV1UIYc95k2IEvhbZqbOFpxFYr8ji%2FWYhPC3sXd6phMkepuL5JONUiugiykZMBFR5%2F%2F194BPZNsXXZiAOBQiExrQFVGGdyrnZOQ7rrnBer%2BrkgQpLqr5xIbpdPuJCCjqmm4e55mrPJZG40hG%2F3mUBOrdmtNld%2FK3HONzwrJyMVb0zPS%2FyA5vHo7AuBkJEIv3ndG0b9ot2i3uygF1ShUhW%2Bj7quBwpkWqp4RbjFybycke9eoNU0FtEGm8gVaFIYYsHy3abqTWnJrsPjuQ6oqotBSk7xHsxwytByViWBNNcfXOQ8mth28Cs8k91UrlckGGeL27gDkQBPdQo2V%2BlXJXeu7pohJa7Xil77Dv8gdLmjqhWLjGSgckDMGb0bYQ5VEe3tfAr2D7SG%2F1qoq%2Buv3A2w71VvJRBe576O%2BQ2Xsw7unAxAY6pgEMqrG8CrOC1Bff7kDUIzvyUq8E2HicbzFDgts%2FKLv9fzqFsLYjWQ49ukp3ppX%2Fp239p11hJJbypPQcOHgijFso7dLe9sWojUmCkWaBlehgA4ZVmBqEVii3q82DRu29n0lJRHO4yadeqEsQ0siwe%2Bye779oInItAvVYmhtCB4yrtEqMz%2BHejOgNoSs%2F6ZIgKSmPZY8%2ByJ%2BIqkrFvXecThlj7qUFxQq0&X-Amz-Signature=000858bd9c35313194c291a83a63f290e5399bc44cdf4dcb435c786e07cd12fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DOOW37M%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBT2z1xHA7CmvRa6lE8F8%2BVxbYYZlXFou4XriOKgVoVrAiBav2kJv9k88Vg%2BZyZ5r6Z%2FK0gnfYXlwY2wHSJeyAa4ayr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMqYFNxldHHh3NIVVkKtwDgHbgMfVtHHwC2wFeQk2GHG8%2BRAajcaTPrt7mFLB2y991hAZO8%2FbvJsmmTspfJKxRBDo31ZCXUimXzM0zKTvJ0DpDMt0BlE2pXdAhQZynWRuDir4xacrAyyIlejN60EfeURUE4APV713xcWnBZUkSUHQjTZ%2FwBTVb2xkN4fj04seRIjN5725kuzD8OtTCHyPNx%2FrKVA2i%2Fl0bVrDFW%2Fd6ZV1UIYc95k2IEvhbZqbOFpxFYr8ji%2FWYhPC3sXd6phMkepuL5JONUiugiykZMBFR5%2F%2F194BPZNsXXZiAOBQiExrQFVGGdyrnZOQ7rrnBer%2BrkgQpLqr5xIbpdPuJCCjqmm4e55mrPJZG40hG%2F3mUBOrdmtNld%2FK3HONzwrJyMVb0zPS%2FyA5vHo7AuBkJEIv3ndG0b9ot2i3uygF1ShUhW%2Bj7quBwpkWqp4RbjFybycke9eoNU0FtEGm8gVaFIYYsHy3abqTWnJrsPjuQ6oqotBSk7xHsxwytByViWBNNcfXOQ8mth28Cs8k91UrlckGGeL27gDkQBPdQo2V%2BlXJXeu7pohJa7Xil77Dv8gdLmjqhWLjGSgckDMGb0bYQ5VEe3tfAr2D7SG%2F1qoq%2Buv3A2w71VvJRBe576O%2BQ2Xsw7unAxAY6pgEMqrG8CrOC1Bff7kDUIzvyUq8E2HicbzFDgts%2FKLv9fzqFsLYjWQ49ukp3ppX%2Fp239p11hJJbypPQcOHgijFso7dLe9sWojUmCkWaBlehgA4ZVmBqEVii3q82DRu29n0lJRHO4yadeqEsQ0siwe%2Bye779oInItAvVYmhtCB4yrtEqMz%2BHejOgNoSs%2F6ZIgKSmPZY8%2ByJ%2BIqkrFvXecThlj7qUFxQq0&X-Amz-Signature=6c0316c23b0b6257025e864f5baac73fa43c3f8d081fb62af152eb792a6d5fe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DOOW37M%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBT2z1xHA7CmvRa6lE8F8%2BVxbYYZlXFou4XriOKgVoVrAiBav2kJv9k88Vg%2BZyZ5r6Z%2FK0gnfYXlwY2wHSJeyAa4ayr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMqYFNxldHHh3NIVVkKtwDgHbgMfVtHHwC2wFeQk2GHG8%2BRAajcaTPrt7mFLB2y991hAZO8%2FbvJsmmTspfJKxRBDo31ZCXUimXzM0zKTvJ0DpDMt0BlE2pXdAhQZynWRuDir4xacrAyyIlejN60EfeURUE4APV713xcWnBZUkSUHQjTZ%2FwBTVb2xkN4fj04seRIjN5725kuzD8OtTCHyPNx%2FrKVA2i%2Fl0bVrDFW%2Fd6ZV1UIYc95k2IEvhbZqbOFpxFYr8ji%2FWYhPC3sXd6phMkepuL5JONUiugiykZMBFR5%2F%2F194BPZNsXXZiAOBQiExrQFVGGdyrnZOQ7rrnBer%2BrkgQpLqr5xIbpdPuJCCjqmm4e55mrPJZG40hG%2F3mUBOrdmtNld%2FK3HONzwrJyMVb0zPS%2FyA5vHo7AuBkJEIv3ndG0b9ot2i3uygF1ShUhW%2Bj7quBwpkWqp4RbjFybycke9eoNU0FtEGm8gVaFIYYsHy3abqTWnJrsPjuQ6oqotBSk7xHsxwytByViWBNNcfXOQ8mth28Cs8k91UrlckGGeL27gDkQBPdQo2V%2BlXJXeu7pohJa7Xil77Dv8gdLmjqhWLjGSgckDMGb0bYQ5VEe3tfAr2D7SG%2F1qoq%2Buv3A2w71VvJRBe576O%2BQ2Xsw7unAxAY6pgEMqrG8CrOC1Bff7kDUIzvyUq8E2HicbzFDgts%2FKLv9fzqFsLYjWQ49ukp3ppX%2Fp239p11hJJbypPQcOHgijFso7dLe9sWojUmCkWaBlehgA4ZVmBqEVii3q82DRu29n0lJRHO4yadeqEsQ0siwe%2Bye779oInItAvVYmhtCB4yrtEqMz%2BHejOgNoSs%2F6ZIgKSmPZY8%2ByJ%2BIqkrFvXecThlj7qUFxQq0&X-Amz-Signature=ba16ecf221b706d39860a4c68464e1dee43029b8083852f18485a1abcbd2931c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DOOW37M%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBT2z1xHA7CmvRa6lE8F8%2BVxbYYZlXFou4XriOKgVoVrAiBav2kJv9k88Vg%2BZyZ5r6Z%2FK0gnfYXlwY2wHSJeyAa4ayr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMqYFNxldHHh3NIVVkKtwDgHbgMfVtHHwC2wFeQk2GHG8%2BRAajcaTPrt7mFLB2y991hAZO8%2FbvJsmmTspfJKxRBDo31ZCXUimXzM0zKTvJ0DpDMt0BlE2pXdAhQZynWRuDir4xacrAyyIlejN60EfeURUE4APV713xcWnBZUkSUHQjTZ%2FwBTVb2xkN4fj04seRIjN5725kuzD8OtTCHyPNx%2FrKVA2i%2Fl0bVrDFW%2Fd6ZV1UIYc95k2IEvhbZqbOFpxFYr8ji%2FWYhPC3sXd6phMkepuL5JONUiugiykZMBFR5%2F%2F194BPZNsXXZiAOBQiExrQFVGGdyrnZOQ7rrnBer%2BrkgQpLqr5xIbpdPuJCCjqmm4e55mrPJZG40hG%2F3mUBOrdmtNld%2FK3HONzwrJyMVb0zPS%2FyA5vHo7AuBkJEIv3ndG0b9ot2i3uygF1ShUhW%2Bj7quBwpkWqp4RbjFybycke9eoNU0FtEGm8gVaFIYYsHy3abqTWnJrsPjuQ6oqotBSk7xHsxwytByViWBNNcfXOQ8mth28Cs8k91UrlckGGeL27gDkQBPdQo2V%2BlXJXeu7pohJa7Xil77Dv8gdLmjqhWLjGSgckDMGb0bYQ5VEe3tfAr2D7SG%2F1qoq%2Buv3A2w71VvJRBe576O%2BQ2Xsw7unAxAY6pgEMqrG8CrOC1Bff7kDUIzvyUq8E2HicbzFDgts%2FKLv9fzqFsLYjWQ49ukp3ppX%2Fp239p11hJJbypPQcOHgijFso7dLe9sWojUmCkWaBlehgA4ZVmBqEVii3q82DRu29n0lJRHO4yadeqEsQ0siwe%2Bye779oInItAvVYmhtCB4yrtEqMz%2BHejOgNoSs%2F6ZIgKSmPZY8%2ByJ%2BIqkrFvXecThlj7qUFxQq0&X-Amz-Signature=599a8a3ad31ca91d3d395ffbedad1b3d6a45ad0006b0638c8da2f524ed8f2d7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DOOW37M%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBT2z1xHA7CmvRa6lE8F8%2BVxbYYZlXFou4XriOKgVoVrAiBav2kJv9k88Vg%2BZyZ5r6Z%2FK0gnfYXlwY2wHSJeyAa4ayr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMqYFNxldHHh3NIVVkKtwDgHbgMfVtHHwC2wFeQk2GHG8%2BRAajcaTPrt7mFLB2y991hAZO8%2FbvJsmmTspfJKxRBDo31ZCXUimXzM0zKTvJ0DpDMt0BlE2pXdAhQZynWRuDir4xacrAyyIlejN60EfeURUE4APV713xcWnBZUkSUHQjTZ%2FwBTVb2xkN4fj04seRIjN5725kuzD8OtTCHyPNx%2FrKVA2i%2Fl0bVrDFW%2Fd6ZV1UIYc95k2IEvhbZqbOFpxFYr8ji%2FWYhPC3sXd6phMkepuL5JONUiugiykZMBFR5%2F%2F194BPZNsXXZiAOBQiExrQFVGGdyrnZOQ7rrnBer%2BrkgQpLqr5xIbpdPuJCCjqmm4e55mrPJZG40hG%2F3mUBOrdmtNld%2FK3HONzwrJyMVb0zPS%2FyA5vHo7AuBkJEIv3ndG0b9ot2i3uygF1ShUhW%2Bj7quBwpkWqp4RbjFybycke9eoNU0FtEGm8gVaFIYYsHy3abqTWnJrsPjuQ6oqotBSk7xHsxwytByViWBNNcfXOQ8mth28Cs8k91UrlckGGeL27gDkQBPdQo2V%2BlXJXeu7pohJa7Xil77Dv8gdLmjqhWLjGSgckDMGb0bYQ5VEe3tfAr2D7SG%2F1qoq%2Buv3A2w71VvJRBe576O%2BQ2Xsw7unAxAY6pgEMqrG8CrOC1Bff7kDUIzvyUq8E2HicbzFDgts%2FKLv9fzqFsLYjWQ49ukp3ppX%2Fp239p11hJJbypPQcOHgijFso7dLe9sWojUmCkWaBlehgA4ZVmBqEVii3q82DRu29n0lJRHO4yadeqEsQ0siwe%2Bye779oInItAvVYmhtCB4yrtEqMz%2BHejOgNoSs%2F6ZIgKSmPZY8%2ByJ%2BIqkrFvXecThlj7qUFxQq0&X-Amz-Signature=e7f3b4b2ad5fcd2d06e767ea0080110eaa5816882921b83fdd9cb58ba965446a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
