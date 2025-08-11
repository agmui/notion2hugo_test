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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JIGXSB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7NXnIGwRD0BAoqY1E4E467AwI6NS3I4BaMu1y7%2BIYoAiBofIlkuL9fHwbyqcEvASGC540chv%2FRTr%2BAFOxFI4YDESqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz5ELcLBT30XpFsDPKtwDl%2F0XqL7Hd6CcntVml1%2BJduJSRUKIcWMJAuUhs7lrKnoD7%2BQmS57S1by3kXk5Fak6erAa6j29Ut%2FaCSm%2F3qDheqaeRdL%2BnSJ1RIPdRzaTDMLyG0SiD9wOkcq6tJc4KDuRUbifnJrups88528HHvtAHes%2Bh%2FsOw2XtxMNGFSjjtPB4ldeUxQvnFXUaeIRz%2FxwFd%2BYpVh1gx6S0TsRAaGSMrHS7LF8xK%2FG2NxdvcPVATL3nK%2FGUVLDLQJa5I9wmoggFqamNsdTBet3CPti6kzHfBXTxXIgVeYH1e3j58rdduBTUkyYs%2BcnCtBO3ns4CTFRT3sV98RRQDrvnQEh43sowM47vVhBEQaGqPNy9rJermj16t05HdRWGo%2BAw0vxgUwwtp7DVJHpaRniUfHzlWh2vz8w0vBmutaqQAA3opLFdJFFR5M%2FuGTchTGVl1Bz2tUUUqxZfTlYaTdGnxcjAswmvpI6cRXRqD4vWngCknNE%2FdERWoqkyb%2BEO9%2BLWUatBug%2FQeDeLpe5C8DopB57G3rr5PRusnFuaoH%2BwsXZcU1DZnWv5qw6ZfjV%2B%2FMuqIabpINRS%2B3%2FZBx1HHGf9QOtxOgaxR%2BBOLDEKjrT4A4O6LcYYCnnGydxBChHX17TNwj4wpfflxAY6pgHdsP%2FihKbINxmG6IJcsL%2FCK7diBcLV3vvGJyibkxcxQKv2hIfOM3wgpfOgGC%2BQXs0mX5wKE3Q3E68CyalWo3Nq6iX09JEclQzRx7IWR%2BI7aOYOZpGheUEdxpQaRl71Q74XshkIcFj3lb3OPU4bwZpKqxBty6uPHpzxJcmUAzWI0DK0i%2B1aqsS9p1BBd9wIUxEN%2B5nlRYbuTQCUiyJsW8SeDg%2FFY1wV&X-Amz-Signature=28625812ab6983f8187bd7c4ffc10cee05b6242a2c1ddbd32aca3dea02a95dc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JIGXSB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7NXnIGwRD0BAoqY1E4E467AwI6NS3I4BaMu1y7%2BIYoAiBofIlkuL9fHwbyqcEvASGC540chv%2FRTr%2BAFOxFI4YDESqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz5ELcLBT30XpFsDPKtwDl%2F0XqL7Hd6CcntVml1%2BJduJSRUKIcWMJAuUhs7lrKnoD7%2BQmS57S1by3kXk5Fak6erAa6j29Ut%2FaCSm%2F3qDheqaeRdL%2BnSJ1RIPdRzaTDMLyG0SiD9wOkcq6tJc4KDuRUbifnJrups88528HHvtAHes%2Bh%2FsOw2XtxMNGFSjjtPB4ldeUxQvnFXUaeIRz%2FxwFd%2BYpVh1gx6S0TsRAaGSMrHS7LF8xK%2FG2NxdvcPVATL3nK%2FGUVLDLQJa5I9wmoggFqamNsdTBet3CPti6kzHfBXTxXIgVeYH1e3j58rdduBTUkyYs%2BcnCtBO3ns4CTFRT3sV98RRQDrvnQEh43sowM47vVhBEQaGqPNy9rJermj16t05HdRWGo%2BAw0vxgUwwtp7DVJHpaRniUfHzlWh2vz8w0vBmutaqQAA3opLFdJFFR5M%2FuGTchTGVl1Bz2tUUUqxZfTlYaTdGnxcjAswmvpI6cRXRqD4vWngCknNE%2FdERWoqkyb%2BEO9%2BLWUatBug%2FQeDeLpe5C8DopB57G3rr5PRusnFuaoH%2BwsXZcU1DZnWv5qw6ZfjV%2B%2FMuqIabpINRS%2B3%2FZBx1HHGf9QOtxOgaxR%2BBOLDEKjrT4A4O6LcYYCnnGydxBChHX17TNwj4wpfflxAY6pgHdsP%2FihKbINxmG6IJcsL%2FCK7diBcLV3vvGJyibkxcxQKv2hIfOM3wgpfOgGC%2BQXs0mX5wKE3Q3E68CyalWo3Nq6iX09JEclQzRx7IWR%2BI7aOYOZpGheUEdxpQaRl71Q74XshkIcFj3lb3OPU4bwZpKqxBty6uPHpzxJcmUAzWI0DK0i%2B1aqsS9p1BBd9wIUxEN%2B5nlRYbuTQCUiyJsW8SeDg%2FFY1wV&X-Amz-Signature=f91eecf879410a3a61e5fdc279c358dc85539fc5b6e9037da9010afc36b306d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JIGXSB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7NXnIGwRD0BAoqY1E4E467AwI6NS3I4BaMu1y7%2BIYoAiBofIlkuL9fHwbyqcEvASGC540chv%2FRTr%2BAFOxFI4YDESqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz5ELcLBT30XpFsDPKtwDl%2F0XqL7Hd6CcntVml1%2BJduJSRUKIcWMJAuUhs7lrKnoD7%2BQmS57S1by3kXk5Fak6erAa6j29Ut%2FaCSm%2F3qDheqaeRdL%2BnSJ1RIPdRzaTDMLyG0SiD9wOkcq6tJc4KDuRUbifnJrups88528HHvtAHes%2Bh%2FsOw2XtxMNGFSjjtPB4ldeUxQvnFXUaeIRz%2FxwFd%2BYpVh1gx6S0TsRAaGSMrHS7LF8xK%2FG2NxdvcPVATL3nK%2FGUVLDLQJa5I9wmoggFqamNsdTBet3CPti6kzHfBXTxXIgVeYH1e3j58rdduBTUkyYs%2BcnCtBO3ns4CTFRT3sV98RRQDrvnQEh43sowM47vVhBEQaGqPNy9rJermj16t05HdRWGo%2BAw0vxgUwwtp7DVJHpaRniUfHzlWh2vz8w0vBmutaqQAA3opLFdJFFR5M%2FuGTchTGVl1Bz2tUUUqxZfTlYaTdGnxcjAswmvpI6cRXRqD4vWngCknNE%2FdERWoqkyb%2BEO9%2BLWUatBug%2FQeDeLpe5C8DopB57G3rr5PRusnFuaoH%2BwsXZcU1DZnWv5qw6ZfjV%2B%2FMuqIabpINRS%2B3%2FZBx1HHGf9QOtxOgaxR%2BBOLDEKjrT4A4O6LcYYCnnGydxBChHX17TNwj4wpfflxAY6pgHdsP%2FihKbINxmG6IJcsL%2FCK7diBcLV3vvGJyibkxcxQKv2hIfOM3wgpfOgGC%2BQXs0mX5wKE3Q3E68CyalWo3Nq6iX09JEclQzRx7IWR%2BI7aOYOZpGheUEdxpQaRl71Q74XshkIcFj3lb3OPU4bwZpKqxBty6uPHpzxJcmUAzWI0DK0i%2B1aqsS9p1BBd9wIUxEN%2B5nlRYbuTQCUiyJsW8SeDg%2FFY1wV&X-Amz-Signature=de426746d710dba521fe594ced5620bfc9765ce559c2bcfa40d3ade90660ec9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JIGXSB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7NXnIGwRD0BAoqY1E4E467AwI6NS3I4BaMu1y7%2BIYoAiBofIlkuL9fHwbyqcEvASGC540chv%2FRTr%2BAFOxFI4YDESqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz5ELcLBT30XpFsDPKtwDl%2F0XqL7Hd6CcntVml1%2BJduJSRUKIcWMJAuUhs7lrKnoD7%2BQmS57S1by3kXk5Fak6erAa6j29Ut%2FaCSm%2F3qDheqaeRdL%2BnSJ1RIPdRzaTDMLyG0SiD9wOkcq6tJc4KDuRUbifnJrups88528HHvtAHes%2Bh%2FsOw2XtxMNGFSjjtPB4ldeUxQvnFXUaeIRz%2FxwFd%2BYpVh1gx6S0TsRAaGSMrHS7LF8xK%2FG2NxdvcPVATL3nK%2FGUVLDLQJa5I9wmoggFqamNsdTBet3CPti6kzHfBXTxXIgVeYH1e3j58rdduBTUkyYs%2BcnCtBO3ns4CTFRT3sV98RRQDrvnQEh43sowM47vVhBEQaGqPNy9rJermj16t05HdRWGo%2BAw0vxgUwwtp7DVJHpaRniUfHzlWh2vz8w0vBmutaqQAA3opLFdJFFR5M%2FuGTchTGVl1Bz2tUUUqxZfTlYaTdGnxcjAswmvpI6cRXRqD4vWngCknNE%2FdERWoqkyb%2BEO9%2BLWUatBug%2FQeDeLpe5C8DopB57G3rr5PRusnFuaoH%2BwsXZcU1DZnWv5qw6ZfjV%2B%2FMuqIabpINRS%2B3%2FZBx1HHGf9QOtxOgaxR%2BBOLDEKjrT4A4O6LcYYCnnGydxBChHX17TNwj4wpfflxAY6pgHdsP%2FihKbINxmG6IJcsL%2FCK7diBcLV3vvGJyibkxcxQKv2hIfOM3wgpfOgGC%2BQXs0mX5wKE3Q3E68CyalWo3Nq6iX09JEclQzRx7IWR%2BI7aOYOZpGheUEdxpQaRl71Q74XshkIcFj3lb3OPU4bwZpKqxBty6uPHpzxJcmUAzWI0DK0i%2B1aqsS9p1BBd9wIUxEN%2B5nlRYbuTQCUiyJsW8SeDg%2FFY1wV&X-Amz-Signature=d714ae0bd52aea87059b610c29d0f3a9dcd7e10ce51a67493d2d13fcd5b33e17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JIGXSB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7NXnIGwRD0BAoqY1E4E467AwI6NS3I4BaMu1y7%2BIYoAiBofIlkuL9fHwbyqcEvASGC540chv%2FRTr%2BAFOxFI4YDESqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz5ELcLBT30XpFsDPKtwDl%2F0XqL7Hd6CcntVml1%2BJduJSRUKIcWMJAuUhs7lrKnoD7%2BQmS57S1by3kXk5Fak6erAa6j29Ut%2FaCSm%2F3qDheqaeRdL%2BnSJ1RIPdRzaTDMLyG0SiD9wOkcq6tJc4KDuRUbifnJrups88528HHvtAHes%2Bh%2FsOw2XtxMNGFSjjtPB4ldeUxQvnFXUaeIRz%2FxwFd%2BYpVh1gx6S0TsRAaGSMrHS7LF8xK%2FG2NxdvcPVATL3nK%2FGUVLDLQJa5I9wmoggFqamNsdTBet3CPti6kzHfBXTxXIgVeYH1e3j58rdduBTUkyYs%2BcnCtBO3ns4CTFRT3sV98RRQDrvnQEh43sowM47vVhBEQaGqPNy9rJermj16t05HdRWGo%2BAw0vxgUwwtp7DVJHpaRniUfHzlWh2vz8w0vBmutaqQAA3opLFdJFFR5M%2FuGTchTGVl1Bz2tUUUqxZfTlYaTdGnxcjAswmvpI6cRXRqD4vWngCknNE%2FdERWoqkyb%2BEO9%2BLWUatBug%2FQeDeLpe5C8DopB57G3rr5PRusnFuaoH%2BwsXZcU1DZnWv5qw6ZfjV%2B%2FMuqIabpINRS%2B3%2FZBx1HHGf9QOtxOgaxR%2BBOLDEKjrT4A4O6LcYYCnnGydxBChHX17TNwj4wpfflxAY6pgHdsP%2FihKbINxmG6IJcsL%2FCK7diBcLV3vvGJyibkxcxQKv2hIfOM3wgpfOgGC%2BQXs0mX5wKE3Q3E68CyalWo3Nq6iX09JEclQzRx7IWR%2BI7aOYOZpGheUEdxpQaRl71Q74XshkIcFj3lb3OPU4bwZpKqxBty6uPHpzxJcmUAzWI0DK0i%2B1aqsS9p1BBd9wIUxEN%2B5nlRYbuTQCUiyJsW8SeDg%2FFY1wV&X-Amz-Signature=8306475ac24230ece63d80186f3d2d98943d0549dd8bcc99e1173a04a2412010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JIGXSB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7NXnIGwRD0BAoqY1E4E467AwI6NS3I4BaMu1y7%2BIYoAiBofIlkuL9fHwbyqcEvASGC540chv%2FRTr%2BAFOxFI4YDESqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz5ELcLBT30XpFsDPKtwDl%2F0XqL7Hd6CcntVml1%2BJduJSRUKIcWMJAuUhs7lrKnoD7%2BQmS57S1by3kXk5Fak6erAa6j29Ut%2FaCSm%2F3qDheqaeRdL%2BnSJ1RIPdRzaTDMLyG0SiD9wOkcq6tJc4KDuRUbifnJrups88528HHvtAHes%2Bh%2FsOw2XtxMNGFSjjtPB4ldeUxQvnFXUaeIRz%2FxwFd%2BYpVh1gx6S0TsRAaGSMrHS7LF8xK%2FG2NxdvcPVATL3nK%2FGUVLDLQJa5I9wmoggFqamNsdTBet3CPti6kzHfBXTxXIgVeYH1e3j58rdduBTUkyYs%2BcnCtBO3ns4CTFRT3sV98RRQDrvnQEh43sowM47vVhBEQaGqPNy9rJermj16t05HdRWGo%2BAw0vxgUwwtp7DVJHpaRniUfHzlWh2vz8w0vBmutaqQAA3opLFdJFFR5M%2FuGTchTGVl1Bz2tUUUqxZfTlYaTdGnxcjAswmvpI6cRXRqD4vWngCknNE%2FdERWoqkyb%2BEO9%2BLWUatBug%2FQeDeLpe5C8DopB57G3rr5PRusnFuaoH%2BwsXZcU1DZnWv5qw6ZfjV%2B%2FMuqIabpINRS%2B3%2FZBx1HHGf9QOtxOgaxR%2BBOLDEKjrT4A4O6LcYYCnnGydxBChHX17TNwj4wpfflxAY6pgHdsP%2FihKbINxmG6IJcsL%2FCK7diBcLV3vvGJyibkxcxQKv2hIfOM3wgpfOgGC%2BQXs0mX5wKE3Q3E68CyalWo3Nq6iX09JEclQzRx7IWR%2BI7aOYOZpGheUEdxpQaRl71Q74XshkIcFj3lb3OPU4bwZpKqxBty6uPHpzxJcmUAzWI0DK0i%2B1aqsS9p1BBd9wIUxEN%2B5nlRYbuTQCUiyJsW8SeDg%2FFY1wV&X-Amz-Signature=2674cc31e8fcc0127794fa4d6c0ddfb4beb33bd4c9b761d3cb15cc3641c67bda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JIGXSB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7NXnIGwRD0BAoqY1E4E467AwI6NS3I4BaMu1y7%2BIYoAiBofIlkuL9fHwbyqcEvASGC540chv%2FRTr%2BAFOxFI4YDESqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz5ELcLBT30XpFsDPKtwDl%2F0XqL7Hd6CcntVml1%2BJduJSRUKIcWMJAuUhs7lrKnoD7%2BQmS57S1by3kXk5Fak6erAa6j29Ut%2FaCSm%2F3qDheqaeRdL%2BnSJ1RIPdRzaTDMLyG0SiD9wOkcq6tJc4KDuRUbifnJrups88528HHvtAHes%2Bh%2FsOw2XtxMNGFSjjtPB4ldeUxQvnFXUaeIRz%2FxwFd%2BYpVh1gx6S0TsRAaGSMrHS7LF8xK%2FG2NxdvcPVATL3nK%2FGUVLDLQJa5I9wmoggFqamNsdTBet3CPti6kzHfBXTxXIgVeYH1e3j58rdduBTUkyYs%2BcnCtBO3ns4CTFRT3sV98RRQDrvnQEh43sowM47vVhBEQaGqPNy9rJermj16t05HdRWGo%2BAw0vxgUwwtp7DVJHpaRniUfHzlWh2vz8w0vBmutaqQAA3opLFdJFFR5M%2FuGTchTGVl1Bz2tUUUqxZfTlYaTdGnxcjAswmvpI6cRXRqD4vWngCknNE%2FdERWoqkyb%2BEO9%2BLWUatBug%2FQeDeLpe5C8DopB57G3rr5PRusnFuaoH%2BwsXZcU1DZnWv5qw6ZfjV%2B%2FMuqIabpINRS%2B3%2FZBx1HHGf9QOtxOgaxR%2BBOLDEKjrT4A4O6LcYYCnnGydxBChHX17TNwj4wpfflxAY6pgHdsP%2FihKbINxmG6IJcsL%2FCK7diBcLV3vvGJyibkxcxQKv2hIfOM3wgpfOgGC%2BQXs0mX5wKE3Q3E68CyalWo3Nq6iX09JEclQzRx7IWR%2BI7aOYOZpGheUEdxpQaRl71Q74XshkIcFj3lb3OPU4bwZpKqxBty6uPHpzxJcmUAzWI0DK0i%2B1aqsS9p1BBd9wIUxEN%2B5nlRYbuTQCUiyJsW8SeDg%2FFY1wV&X-Amz-Signature=bd9d6564946314a9ce88681200aee77ef517da827b15d40aebe2fff8a6c4d98e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JIGXSB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7NXnIGwRD0BAoqY1E4E467AwI6NS3I4BaMu1y7%2BIYoAiBofIlkuL9fHwbyqcEvASGC540chv%2FRTr%2BAFOxFI4YDESqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz5ELcLBT30XpFsDPKtwDl%2F0XqL7Hd6CcntVml1%2BJduJSRUKIcWMJAuUhs7lrKnoD7%2BQmS57S1by3kXk5Fak6erAa6j29Ut%2FaCSm%2F3qDheqaeRdL%2BnSJ1RIPdRzaTDMLyG0SiD9wOkcq6tJc4KDuRUbifnJrups88528HHvtAHes%2Bh%2FsOw2XtxMNGFSjjtPB4ldeUxQvnFXUaeIRz%2FxwFd%2BYpVh1gx6S0TsRAaGSMrHS7LF8xK%2FG2NxdvcPVATL3nK%2FGUVLDLQJa5I9wmoggFqamNsdTBet3CPti6kzHfBXTxXIgVeYH1e3j58rdduBTUkyYs%2BcnCtBO3ns4CTFRT3sV98RRQDrvnQEh43sowM47vVhBEQaGqPNy9rJermj16t05HdRWGo%2BAw0vxgUwwtp7DVJHpaRniUfHzlWh2vz8w0vBmutaqQAA3opLFdJFFR5M%2FuGTchTGVl1Bz2tUUUqxZfTlYaTdGnxcjAswmvpI6cRXRqD4vWngCknNE%2FdERWoqkyb%2BEO9%2BLWUatBug%2FQeDeLpe5C8DopB57G3rr5PRusnFuaoH%2BwsXZcU1DZnWv5qw6ZfjV%2B%2FMuqIabpINRS%2B3%2FZBx1HHGf9QOtxOgaxR%2BBOLDEKjrT4A4O6LcYYCnnGydxBChHX17TNwj4wpfflxAY6pgHdsP%2FihKbINxmG6IJcsL%2FCK7diBcLV3vvGJyibkxcxQKv2hIfOM3wgpfOgGC%2BQXs0mX5wKE3Q3E68CyalWo3Nq6iX09JEclQzRx7IWR%2BI7aOYOZpGheUEdxpQaRl71Q74XshkIcFj3lb3OPU4bwZpKqxBty6uPHpzxJcmUAzWI0DK0i%2B1aqsS9p1BBd9wIUxEN%2B5nlRYbuTQCUiyJsW8SeDg%2FFY1wV&X-Amz-Signature=c50fbf0b9cf120d024a4210864b6dd7f617e1f38a1973e645e8e636cdfa7828d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JIGXSB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7NXnIGwRD0BAoqY1E4E467AwI6NS3I4BaMu1y7%2BIYoAiBofIlkuL9fHwbyqcEvASGC540chv%2FRTr%2BAFOxFI4YDESqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz5ELcLBT30XpFsDPKtwDl%2F0XqL7Hd6CcntVml1%2BJduJSRUKIcWMJAuUhs7lrKnoD7%2BQmS57S1by3kXk5Fak6erAa6j29Ut%2FaCSm%2F3qDheqaeRdL%2BnSJ1RIPdRzaTDMLyG0SiD9wOkcq6tJc4KDuRUbifnJrups88528HHvtAHes%2Bh%2FsOw2XtxMNGFSjjtPB4ldeUxQvnFXUaeIRz%2FxwFd%2BYpVh1gx6S0TsRAaGSMrHS7LF8xK%2FG2NxdvcPVATL3nK%2FGUVLDLQJa5I9wmoggFqamNsdTBet3CPti6kzHfBXTxXIgVeYH1e3j58rdduBTUkyYs%2BcnCtBO3ns4CTFRT3sV98RRQDrvnQEh43sowM47vVhBEQaGqPNy9rJermj16t05HdRWGo%2BAw0vxgUwwtp7DVJHpaRniUfHzlWh2vz8w0vBmutaqQAA3opLFdJFFR5M%2FuGTchTGVl1Bz2tUUUqxZfTlYaTdGnxcjAswmvpI6cRXRqD4vWngCknNE%2FdERWoqkyb%2BEO9%2BLWUatBug%2FQeDeLpe5C8DopB57G3rr5PRusnFuaoH%2BwsXZcU1DZnWv5qw6ZfjV%2B%2FMuqIabpINRS%2B3%2FZBx1HHGf9QOtxOgaxR%2BBOLDEKjrT4A4O6LcYYCnnGydxBChHX17TNwj4wpfflxAY6pgHdsP%2FihKbINxmG6IJcsL%2FCK7diBcLV3vvGJyibkxcxQKv2hIfOM3wgpfOgGC%2BQXs0mX5wKE3Q3E68CyalWo3Nq6iX09JEclQzRx7IWR%2BI7aOYOZpGheUEdxpQaRl71Q74XshkIcFj3lb3OPU4bwZpKqxBty6uPHpzxJcmUAzWI0DK0i%2B1aqsS9p1BBd9wIUxEN%2B5nlRYbuTQCUiyJsW8SeDg%2FFY1wV&X-Amz-Signature=522e31bff9e08e373ffd5ef6a6e11e31f76265158626faa5d7e261105b898ce2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JIGXSB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7NXnIGwRD0BAoqY1E4E467AwI6NS3I4BaMu1y7%2BIYoAiBofIlkuL9fHwbyqcEvASGC540chv%2FRTr%2BAFOxFI4YDESqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz5ELcLBT30XpFsDPKtwDl%2F0XqL7Hd6CcntVml1%2BJduJSRUKIcWMJAuUhs7lrKnoD7%2BQmS57S1by3kXk5Fak6erAa6j29Ut%2FaCSm%2F3qDheqaeRdL%2BnSJ1RIPdRzaTDMLyG0SiD9wOkcq6tJc4KDuRUbifnJrups88528HHvtAHes%2Bh%2FsOw2XtxMNGFSjjtPB4ldeUxQvnFXUaeIRz%2FxwFd%2BYpVh1gx6S0TsRAaGSMrHS7LF8xK%2FG2NxdvcPVATL3nK%2FGUVLDLQJa5I9wmoggFqamNsdTBet3CPti6kzHfBXTxXIgVeYH1e3j58rdduBTUkyYs%2BcnCtBO3ns4CTFRT3sV98RRQDrvnQEh43sowM47vVhBEQaGqPNy9rJermj16t05HdRWGo%2BAw0vxgUwwtp7DVJHpaRniUfHzlWh2vz8w0vBmutaqQAA3opLFdJFFR5M%2FuGTchTGVl1Bz2tUUUqxZfTlYaTdGnxcjAswmvpI6cRXRqD4vWngCknNE%2FdERWoqkyb%2BEO9%2BLWUatBug%2FQeDeLpe5C8DopB57G3rr5PRusnFuaoH%2BwsXZcU1DZnWv5qw6ZfjV%2B%2FMuqIabpINRS%2B3%2FZBx1HHGf9QOtxOgaxR%2BBOLDEKjrT4A4O6LcYYCnnGydxBChHX17TNwj4wpfflxAY6pgHdsP%2FihKbINxmG6IJcsL%2FCK7diBcLV3vvGJyibkxcxQKv2hIfOM3wgpfOgGC%2BQXs0mX5wKE3Q3E68CyalWo3Nq6iX09JEclQzRx7IWR%2BI7aOYOZpGheUEdxpQaRl71Q74XshkIcFj3lb3OPU4bwZpKqxBty6uPHpzxJcmUAzWI0DK0i%2B1aqsS9p1BBd9wIUxEN%2B5nlRYbuTQCUiyJsW8SeDg%2FFY1wV&X-Amz-Signature=a5b01a9c0b92c931dd080a0a60ed8796f6d75cf336d5c93d250acd80ee40e093&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHBYZODU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsnakhUvYa9eKnhMpavKr5jHO%2F1Ys9Wod9VBAt4nkRVAiEAtKO1J1PXNu6cD8BdJbqNwH3WToMARKy2XhQG987Pl54qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLtLdPXc6sVrvZ1vSrcA1gk0baAcf0xLxequZ64QtMlvnzjyOKv64sKw11dh%2FQMS7%2BL7sDU0xFbMU4EP%2B7wiEjoi1PvuM%2BDFXHOahNVecit6M7UebOmNbtUrmQMPoljuiVrPK77%2BCkgjFmyaToFpw4cEHnXtPcIsbKM38jmRtrn0bSQj3yg%2F6ab4bGc3VNaIvHRZLOlNmCKiSWgS3j6QFjv0AB0dqsjvfjCSMV8LaIrOmwKW1jZloHYtDo25NXvlO59U3W6X%2BPUjO2vfj4ey9UtPPTmnnX77OiRw94K5LQkwT6GBUpeXtrivdaKR4vmT8%2F%2FDGtBv3SQIJ%2F%2FkNSgINaEgy4Q1boqQzPkpfLwAymVenmLxOm25uweSXt1WDDwoj4KbZq0xT7FabCP03fs6sYarVONjacOIe3Ah3KAY3lqGywY42gI%2BSYwDwKdTs1ewAaLhfbGfIpMdsZBpcU2Bx4SGimkk6VYAUKTFToOpdbaICfRA%2B2eLM0FWcKo0vihbTq3jSoSGDs%2FZfpZbV52x7n8N2MzhoRpI7BO%2Fz%2BrOP0H5qwFG0bAhTPAFSwECibUCoYuzXJIY1DhI2EmZTdI3w2HshMeQ9BFlgaWwuECgqiKPyf3CzBdttF2OrpxdkiEJVbd6GpR6t2jAi96MNv35cQGOqUBe45%2BRByuKR0S2IhqEPZAokgClFp3V7kBmpgyMfIV0m8clO6KI5sRESToimki3C76wZkRXcjdT5ji%2FXO3mFu6HJmQuOtNoAci70S%2F%2FQFfGLOHpPY%2Flaz2%2FSsVa%2B08qVHoGgzcxrjuU7%2F%2F70ADzWwC1ubMIRxnf5Xii5pOewwfaqCG00oXwO1kgTwfn193lUU2bYtlhW4ni1FmilGDVVRE4Wk%2B5gR9&X-Amz-Signature=298deaf34660cd817646933910cdabac4a55c2b32f5e05056195bf559ba4de2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665EFNMXC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEQt1Gzaz8mScQh9J0DDcWqaq45s5h55kqzKw61WLqbQIgL6laamG9JvYCQSq%2FO2Pf0nSbABHEqBAfYZfkmxZdfTQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAmrlYmBQGN8qEYmyrcAzXtlg9YjaPHa8qdUiJQcTkxPF2isWH4RKHd5PpIoP67ljTNDSJVVEfpBlgLG2co%2BO2UvTC72N%2FJJiWaptEjONB4ey%2F2jvCV9ouh%2BSGT2oyqgOHtzwFBMwEw3qnrqcnJbzQN1oCG7L1UbpYtBHUDy7rvHo9NJ%2BgdiTGNDUgAGwurMkAK5kZjMktpal%2FSs1AC1EjdEBWeLMhhjTjEWLfSXSTQw8HKaSXLd7kCqe9YyDoLZg6dOeI2lTm3tqrvzZ77bMjfFGFhfNf3RYeU1LPg0SxILeVhRUp925NE3X3VNzGpdkKAeqTmxaLORaBmRPetUOtuOlx7i8l7Tg8DqQMwNqvWod5pJD%2BGdaeDDBHs2uDrVt%2BEE7OA3uH7MIlZQZ%2FmfP8vy4weIPcDyMuUvrIqpRDxDr7KHNu2A3C3%2BWljpF%2BNGhMuvLNXjh20eE0UVfwdnQ%2BUjsSCgcg41l4SaG9gmd%2BvAk8YkiCcIdQ4KKdd5Pgu1qO5UGRNZMXuzrMluckpNAd0hyWogXgCXNQ3Hh8lRGSNivUE3oKJBnisJNFsjSlzV9JxSEr801M%2F414EojMHV%2FjdV80RTNDD%2FZUmi8wfWnQQuS9LnDZC%2B4zjE%2FHBo9vopGaCBWOXJingQ1DoMJL45cQGOqUBo09vm%2B%2BRaOBwCtGqpYZinsCwS6Z7hoYrgEgE%2BabxwgAJudCTYwvc4x0Z5GNkF5yk%2F5Kbh3anl4fknIOjJn6T4Fer5FiV4ikwf1pP8ackuyArTFIGdaG8RWoa7E%2B5QqntNH9oKDRFStVcpoYVFO5Sq1FIuwzZbrr28fdEwtg3XGdya08a%2Bzzv9JSHaQQq8J7yOfDqoU2LiJBi7X7ZI%2B4tA3A%2BNpaL&X-Amz-Signature=7ce7dfb77f7eda85fabb268ad7bb7c888c83c5d6e72563d0a913afe92946c698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY22IR4A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApCdPU5GBhNzSxDD7slY2xZLIE3%2BfEgwoKMeo0jRyyEAiEA%2B7WBtbmcM0iZx2VAqPjkLHUiEn74RTQ0YHh934JO9dgqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBi2gGlB4%2FFhp1w%2ByrcA9gWRFCGZWXr4xpyp5zBRaPzx%2FtNKHyTW2N3BWl1QawtOsW8pGkZ1nq8aOE0E66jcJCGEZh1Mtr%2BVF7Dws3auPpcPnDDl9uArkmhBj9P%2FdQB3WM%2F1kS8dvGW1cUi%2FP4yJxN1Q6nybI2CfQ3hFd%2F8VqocMSpzOITcH%2FHCiV44W02Qc5OIWEfVlRRFs1Aqxv4xFFhfu2wndoVdyr0Akh0QpLrjl4%2BmuRnQyWH6IwLmC7Nq3NSwlgjTrBRcD3NZ2QfUUDvwi6EEQarrJWnfOfXBhq3GJqujmo%2FWUkwDJhD0LXhhfPzB09BhfYGlscOLWYxwtnEjCKTx0VyAg7RciiksSxzuRBP1hwXBYaxmxSOUnAmucUMesqRwDCoay1%2FA0pD3j6QavPmLvT5TCkUI%2FlWc3WmbwQ8GerP0TahhlJsrjD4bpSAjMto0B2Dgw8t7KTEHATiULtniNBZc4DK7wZUGUyrRf5CacRr%2FSUktCojBcls%2BwPNenTOEok2HshijwZ6qUsl%2ForJf29qIhqzUT8ZJd5fu1%2FWNxPemmEcnbiGQSg7MMUrCCC8zEvatmCObuqYdiyNtU0vLhpllLv2rGsNwkOT3xIH6pi7jKC%2FRhGVq3wJ8MD8%2F%2FeHOdW6qG34aMMP35cQGOqUBTb1%2BQBIWjbs9QqHRa8KZoAwGfo0GLyJR7UQMvTPQkxcP1I8ykAy3lFV7DNoyQqNrPE2rQrBHcRVw5hH9i5m5p6m0S1JmxuJ758BuytevdL0i1zfY8UTjV9v7t10lQMWS2fZHIudNG7TCa7cj5voA4S2SzywOzK3y5NpOmgU9O11ZXDlkCYfNtPJqctAKe0NF4AmwNTD35CwWwChZXMhOZ6d%2BDYZU&X-Amz-Signature=ed6ebbd7d1b1ea8b9aa2a29c8cce0c8a9ce68de901817f61b4013353cc2b0d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JIGXSB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7NXnIGwRD0BAoqY1E4E467AwI6NS3I4BaMu1y7%2BIYoAiBofIlkuL9fHwbyqcEvASGC540chv%2FRTr%2BAFOxFI4YDESqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz5ELcLBT30XpFsDPKtwDl%2F0XqL7Hd6CcntVml1%2BJduJSRUKIcWMJAuUhs7lrKnoD7%2BQmS57S1by3kXk5Fak6erAa6j29Ut%2FaCSm%2F3qDheqaeRdL%2BnSJ1RIPdRzaTDMLyG0SiD9wOkcq6tJc4KDuRUbifnJrups88528HHvtAHes%2Bh%2FsOw2XtxMNGFSjjtPB4ldeUxQvnFXUaeIRz%2FxwFd%2BYpVh1gx6S0TsRAaGSMrHS7LF8xK%2FG2NxdvcPVATL3nK%2FGUVLDLQJa5I9wmoggFqamNsdTBet3CPti6kzHfBXTxXIgVeYH1e3j58rdduBTUkyYs%2BcnCtBO3ns4CTFRT3sV98RRQDrvnQEh43sowM47vVhBEQaGqPNy9rJermj16t05HdRWGo%2BAw0vxgUwwtp7DVJHpaRniUfHzlWh2vz8w0vBmutaqQAA3opLFdJFFR5M%2FuGTchTGVl1Bz2tUUUqxZfTlYaTdGnxcjAswmvpI6cRXRqD4vWngCknNE%2FdERWoqkyb%2BEO9%2BLWUatBug%2FQeDeLpe5C8DopB57G3rr5PRusnFuaoH%2BwsXZcU1DZnWv5qw6ZfjV%2B%2FMuqIabpINRS%2B3%2FZBx1HHGf9QOtxOgaxR%2BBOLDEKjrT4A4O6LcYYCnnGydxBChHX17TNwj4wpfflxAY6pgHdsP%2FihKbINxmG6IJcsL%2FCK7diBcLV3vvGJyibkxcxQKv2hIfOM3wgpfOgGC%2BQXs0mX5wKE3Q3E68CyalWo3Nq6iX09JEclQzRx7IWR%2BI7aOYOZpGheUEdxpQaRl71Q74XshkIcFj3lb3OPU4bwZpKqxBty6uPHpzxJcmUAzWI0DK0i%2B1aqsS9p1BBd9wIUxEN%2B5nlRYbuTQCUiyJsW8SeDg%2FFY1wV&X-Amz-Signature=d2770af24348a24b4a568a9b4df8c9e1abd9c388047e1d101a4065ab37c34d47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHUP5GNF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBYfxH1FgGdQhVE5QKm2lXevvRvKt2dYSNABujY5RmKAiEA875d9wVSNbaaaz3uGVe3IOht1kylV0eqx7%2FVnQlbkX8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDrJw%2FPGGeSRpwA%2FSrcAxE1wJ%2BbTSC0Ry0LK3vV%2Fhoa5UuV933gTAxipMsAy62pZfguR3JdRvQYROxAgSgKwxDExBSA6VHmB000xStWXXAKbqAWOGGkuJaalknA8qfWUDxR7iEQe1zyUbDNxtbFrUtu5SIL9EExT11IyR1VdKQai92%2FmFx7vGNkDrwwuFANa6b4DZBaDZQEIMaquqrfDftLpuMGcQr%2BjWoKkRKeQ8OUpoqO6viyXzd4oGKs8UBvRIW4rLkY3aq9SRYtf1WdwpP1u7Oad1wyALOpxrGI0HU0Xh55TTSZeL%2BXFlYRKj9Hylt4qAT0nJ2VPEYxiZcoaAhjisw0HEROUkQpnD9JjBr7CqruNkoN5R9ZydNLBxsvDfw2f8ZVEuT3qBuIbwFapz2brI8RHzcGls67m9TaO2vlsLWTpJMaLodfr1VvvfUifwTnGWSrXB9RSP%2FDd7uojrxcBRNDUUu76NMlZjlP5TbUX72hYvi9x15kGNjpPklhSikhFK1FgnrwgDymGwRSkhopwCstw2ilWObrOu%2FIz9Tc6Y2b6v%2F5ll1T6XoM4fy83%2BIllFu422Iwl4D%2FhcUMZWvJtMNQKomYu419AIcjXfizXStK%2FvUQbwyRp3UiqU10HG6R69gs0MlIcjWmMJL45cQGOqUB884H0UkWNRLIz0q1%2B8sFfXx5i%2Fc2tzUt6dv3IZpy2j9qWTSx1VNLUHoarG3AyAZ8LOOWiKyTTAYxxAuJsmGvVr%2BZDcZRGbZhwFAIdApPlSZKzo5iPB0B0LhKZug6Y1oeJKufmv8BB72PwVKfCeiOh8pN0JxgAt%2B%2FLgXyMg2fSa6HCWYTGyziM8GnFvJEZ3wSUukmGhTCYL9c7mkrnd6y4rfTBXsE&X-Amz-Signature=1add1ad7be770b0660b4f7cf958b762944ee0c9d6b15d9527705de192b6341ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JIGXSB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7NXnIGwRD0BAoqY1E4E467AwI6NS3I4BaMu1y7%2BIYoAiBofIlkuL9fHwbyqcEvASGC540chv%2FRTr%2BAFOxFI4YDESqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz5ELcLBT30XpFsDPKtwDl%2F0XqL7Hd6CcntVml1%2BJduJSRUKIcWMJAuUhs7lrKnoD7%2BQmS57S1by3kXk5Fak6erAa6j29Ut%2FaCSm%2F3qDheqaeRdL%2BnSJ1RIPdRzaTDMLyG0SiD9wOkcq6tJc4KDuRUbifnJrups88528HHvtAHes%2Bh%2FsOw2XtxMNGFSjjtPB4ldeUxQvnFXUaeIRz%2FxwFd%2BYpVh1gx6S0TsRAaGSMrHS7LF8xK%2FG2NxdvcPVATL3nK%2FGUVLDLQJa5I9wmoggFqamNsdTBet3CPti6kzHfBXTxXIgVeYH1e3j58rdduBTUkyYs%2BcnCtBO3ns4CTFRT3sV98RRQDrvnQEh43sowM47vVhBEQaGqPNy9rJermj16t05HdRWGo%2BAw0vxgUwwtp7DVJHpaRniUfHzlWh2vz8w0vBmutaqQAA3opLFdJFFR5M%2FuGTchTGVl1Bz2tUUUqxZfTlYaTdGnxcjAswmvpI6cRXRqD4vWngCknNE%2FdERWoqkyb%2BEO9%2BLWUatBug%2FQeDeLpe5C8DopB57G3rr5PRusnFuaoH%2BwsXZcU1DZnWv5qw6ZfjV%2B%2FMuqIabpINRS%2B3%2FZBx1HHGf9QOtxOgaxR%2BBOLDEKjrT4A4O6LcYYCnnGydxBChHX17TNwj4wpfflxAY6pgHdsP%2FihKbINxmG6IJcsL%2FCK7diBcLV3vvGJyibkxcxQKv2hIfOM3wgpfOgGC%2BQXs0mX5wKE3Q3E68CyalWo3Nq6iX09JEclQzRx7IWR%2BI7aOYOZpGheUEdxpQaRl71Q74XshkIcFj3lb3OPU4bwZpKqxBty6uPHpzxJcmUAzWI0DK0i%2B1aqsS9p1BBd9wIUxEN%2B5nlRYbuTQCUiyJsW8SeDg%2FFY1wV&X-Amz-Signature=b6d665a0e86de966dad17678240382f983ad413b6aabc9f28e98629483d07102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z4C5BSM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOJhWYoFvjh0mc7KC4nFJezq8rDyr9kPMDOCOzvPdsiAiB2d%2FUhXs%2BwS3UmMeDTKB8j%2BZ75xwmVmkDqYvpvOekQBiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC1xYy5F01jShUBjGKtwDEKHhL2eJTriXD4W1ZASAe1Wc5Gy73YoZjj1cIAqVNjan1Bpd03nN%2FqnOeK2nJsqy0A2cRs0y9x7bmss09ThYFvR%2FvBlv0dviIyRy0Qi8uLZsxI%2Bm%2Bq26%2Bdz9wvPiMZN%2FXkibFRJzO2NbcWtReDyLIMDbjTtnlid5vZGRuO5XyhLVDz1CZxhLv9pdKbse8Ekvt6hn8KE5T0mELsLvZNmEEla4tlMrIGuQr1pzdcVrEXjM%2BTiDad3uq1%2F2Ij0y%2BXhJXU2l7CRBqGoAB4%2Fb7NEmlaREtVWpQW79I%2BHqvaFzMasfhE2lCeL8K3LpXjpBF8uR9fkun16MMaq%2BzDFBgJYsKqE94qgwYwMDhczm8wcxNkrCKYKWyl4ddlcb4n161ePXXdp9KGimJYdnLplzSUVsuRJXX%2BjnO3jWEPxTWWHAD0ZbyyCSMaaDtTuhVHcOmfUdhnuy4moqUi5h9Mzf315csu1MEV5D50sW8f2a1yaEcI3%2BWvvjPhxwdIN0kSwRC1IrGp10Jhhm1tUrBPbLTUw19dah%2Fqda9zaWGzgIwLu0%2B4VXUnUz9QUu55S3cniEegQ7YSVl5f0vL2sxPt0cQjpRd%2BjUPU7A9CT%2Fs%2Bl5zJheTjQ8%2BTIrbMZqS8yE%2BFswmvflxAY6pgGymaOwDyo3KnBA9YAk%2FZjw%2FQ%2BQykoDHP0m3hkYJiR3iVHpFwRF%2FNBeYbKoA0EWqWmIuCv530%2Fku1shW1EhJA75xfz4jf7bkHSwUvrhjRnHcfb9zR7NGB47DHXByxjuiLbqGx1pZjUaVHCbB1jRGVX%2BfHqttZa5a9ZnuZG%2F0MNzWD%2Biz5lGUZ5ED6AmHUFA47HxwyINU93Nc9S7UzzXBsz8vCmqN9Hw&X-Amz-Signature=419c2bab4d90635fc12b93f06e894b35296ec22d4c9d8822ab099dd4b64cbc0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JIGXSB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7NXnIGwRD0BAoqY1E4E467AwI6NS3I4BaMu1y7%2BIYoAiBofIlkuL9fHwbyqcEvASGC540chv%2FRTr%2BAFOxFI4YDESqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz5ELcLBT30XpFsDPKtwDl%2F0XqL7Hd6CcntVml1%2BJduJSRUKIcWMJAuUhs7lrKnoD7%2BQmS57S1by3kXk5Fak6erAa6j29Ut%2FaCSm%2F3qDheqaeRdL%2BnSJ1RIPdRzaTDMLyG0SiD9wOkcq6tJc4KDuRUbifnJrups88528HHvtAHes%2Bh%2FsOw2XtxMNGFSjjtPB4ldeUxQvnFXUaeIRz%2FxwFd%2BYpVh1gx6S0TsRAaGSMrHS7LF8xK%2FG2NxdvcPVATL3nK%2FGUVLDLQJa5I9wmoggFqamNsdTBet3CPti6kzHfBXTxXIgVeYH1e3j58rdduBTUkyYs%2BcnCtBO3ns4CTFRT3sV98RRQDrvnQEh43sowM47vVhBEQaGqPNy9rJermj16t05HdRWGo%2BAw0vxgUwwtp7DVJHpaRniUfHzlWh2vz8w0vBmutaqQAA3opLFdJFFR5M%2FuGTchTGVl1Bz2tUUUqxZfTlYaTdGnxcjAswmvpI6cRXRqD4vWngCknNE%2FdERWoqkyb%2BEO9%2BLWUatBug%2FQeDeLpe5C8DopB57G3rr5PRusnFuaoH%2BwsXZcU1DZnWv5qw6ZfjV%2B%2FMuqIabpINRS%2B3%2FZBx1HHGf9QOtxOgaxR%2BBOLDEKjrT4A4O6LcYYCnnGydxBChHX17TNwj4wpfflxAY6pgHdsP%2FihKbINxmG6IJcsL%2FCK7diBcLV3vvGJyibkxcxQKv2hIfOM3wgpfOgGC%2BQXs0mX5wKE3Q3E68CyalWo3Nq6iX09JEclQzRx7IWR%2BI7aOYOZpGheUEdxpQaRl71Q74XshkIcFj3lb3OPU4bwZpKqxBty6uPHpzxJcmUAzWI0DK0i%2B1aqsS9p1BBd9wIUxEN%2B5nlRYbuTQCUiyJsW8SeDg%2FFY1wV&X-Amz-Signature=95a798fa78558086be7d748f183dc38c99df3a8ca07f802886c135137838b0a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6577NE6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGcK9rM0HgF3CWInewTy7WaXyQRlc3i8hwsnzX1YP3eAiB1v%2FOiP6IDTyOHvHUq9nNtDsIg1CoIpMWau8FRia3CziqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpSLQD6Z0H6VQenI6KtwD5BWrLoWI9sUqIlyLHkm6D%2BK%2B2dSdqRdKJyvDy4vCi30ll3WCzmqZw96HY1NyU6MT980W5pbyFnYxXMWarHZ9UN8QL3SUtu5LOM7XTTV%2FXBuZ1b4TFrIPrrm1US1jwM5wLvg8JVtH9FJSvUVQUX1ZF92GEjeV5lEbs7qo2tUJN%2Bik%2FcgtTkduR4jfJGuSYrLMD%2B6TegyrhTm1hm2qskubQ4m4KFg8qB1KwuXyPYu5DEA3F6aGhRyQBR7wEqx77%2Fsi5Cu81wEmbQAESaurEOayo0fvxkCIj7QVu%2FuVLGyijrclJaPPl4F6esVYcq3Rz2%2BIlY3zYYqubDwSiKxXPPpf%2BFpBZh301ONjL7bWyvHtfZShIVm0Pzn8ePTJnLHEk0alxVJITi6xpUd8wMpuvxXxrvGVGjT0%2Fjjyyn106KOpC7LXR0CtABbUvFjh0Gs2pYinTz1IcYgQRgxIs0rdYuE%2F3u5y3ezOOaZznQKmrrFm%2FeWhXZpmmqwKvKkW%2BimqVnaV546WSdM3AnH0vZgoyNiqka4sH9%2FwIkTnJExI2AMZVIcCi%2BrE9msoR19zqb%2F%2BeXoINl%2BmzLrGWjAJMPQ821qgOs9bVMOW%2BBoMwqSPhNgdPr%2FGue9KgOWVHuoy6W0wrvflxAY6pgE7151fTn1t0NgaLLnBqzpQpNlNp9qleTgxJiLMesTuw%2B3DIGQfL%2BegMwPRo5%2B7emE7Bx4cjcsmvvA5jszM0xh80EgPZiSOORxs8WDqWpP7V%2BvDp%2FNvpW6VfbF2DYBZ6IfbTe6%2BvY2JrkY8GydnL5%2FfkeT%2FiGj2NiTixA1gECa3L%2FAcBZ20FBaJKcMP5nhjBcwtVOV6MAKRTrEfA58zOhA5r4VuE0UE&X-Amz-Signature=b17b7d1de010d15a16143656c0eee048c80f186fc94499a32c1f5d613ddc165c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JIGXSB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7NXnIGwRD0BAoqY1E4E467AwI6NS3I4BaMu1y7%2BIYoAiBofIlkuL9fHwbyqcEvASGC540chv%2FRTr%2BAFOxFI4YDESqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz5ELcLBT30XpFsDPKtwDl%2F0XqL7Hd6CcntVml1%2BJduJSRUKIcWMJAuUhs7lrKnoD7%2BQmS57S1by3kXk5Fak6erAa6j29Ut%2FaCSm%2F3qDheqaeRdL%2BnSJ1RIPdRzaTDMLyG0SiD9wOkcq6tJc4KDuRUbifnJrups88528HHvtAHes%2Bh%2FsOw2XtxMNGFSjjtPB4ldeUxQvnFXUaeIRz%2FxwFd%2BYpVh1gx6S0TsRAaGSMrHS7LF8xK%2FG2NxdvcPVATL3nK%2FGUVLDLQJa5I9wmoggFqamNsdTBet3CPti6kzHfBXTxXIgVeYH1e3j58rdduBTUkyYs%2BcnCtBO3ns4CTFRT3sV98RRQDrvnQEh43sowM47vVhBEQaGqPNy9rJermj16t05HdRWGo%2BAw0vxgUwwtp7DVJHpaRniUfHzlWh2vz8w0vBmutaqQAA3opLFdJFFR5M%2FuGTchTGVl1Bz2tUUUqxZfTlYaTdGnxcjAswmvpI6cRXRqD4vWngCknNE%2FdERWoqkyb%2BEO9%2BLWUatBug%2FQeDeLpe5C8DopB57G3rr5PRusnFuaoH%2BwsXZcU1DZnWv5qw6ZfjV%2B%2FMuqIabpINRS%2B3%2FZBx1HHGf9QOtxOgaxR%2BBOLDEKjrT4A4O6LcYYCnnGydxBChHX17TNwj4wpfflxAY6pgHdsP%2FihKbINxmG6IJcsL%2FCK7diBcLV3vvGJyibkxcxQKv2hIfOM3wgpfOgGC%2BQXs0mX5wKE3Q3E68CyalWo3Nq6iX09JEclQzRx7IWR%2BI7aOYOZpGheUEdxpQaRl71Q74XshkIcFj3lb3OPU4bwZpKqxBty6uPHpzxJcmUAzWI0DK0i%2B1aqsS9p1BBd9wIUxEN%2B5nlRYbuTQCUiyJsW8SeDg%2FFY1wV&X-Amz-Signature=efd41f111a8090269e9cbe7a392705ac614a677670b9d68183606be8f41a3521&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466457N5VAT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSqF1vs99fDxol2AfMLxiNjrIBS0p1TFTUBuq33XLIgAiBVOqV4ZXYeANMLT764mvici1MEbWiWCqlROIhUNISiKSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6qAXpVxUZCfCeQbjKtwDGS8rlV62aEwdnFdu%2BDX8MhGV68qbovDELY83nRPpcNtJc%2FINh0z3RUK37pG2tRqnO9AfaYoYrZDw93A3gK6FFxC7eXVN%2FhdbNPVKBM%2F8JTYgfx0qZ4eyLajqCxIMEC3css6OClun%2Bi%2F%2FZDWFzdrnExR0D7ueNH2ITeznOX4h3iB931S61FDTFyltbth1QE0Il8TymO3pyiudm7E1nm%2BaOYgp4TEBh%2F%2B3PV9Jq4jfAn9cpoEXi1m%2BeOjJw%2BZXyjYh%2FHflsvkiIzTPY8g75Xut%2FxVEyoivv%2BTaPtb8%2FhmWDsqPEFFlC3ilGcuLHcBRLHIxjvgF4FRZNf3ylAIlbSyK9jiel4s%2FMm%2BKYnWyTmCpBEZwKNNOHzsLf7ur8uYgN2%2FbRui3%2BIT29iOXRKTTt9gA4auhbIkT0y7KpXXSDww8QviFiz3LgAQV2Sh19E7%2B7SQ55aHv6aJbq8m1Za56IxreGQkXhEuJiDrH3IgGrtcwXUSiPzAtYfH9B4iD8C3MUB9CbXGkWtwM%2B9FqFVbYg0ZMY2YrV2mDCE8LEyCzfPExFqWSKFKXR2gjH39D1Lt1YQLv4I9TT1%2BZJOWim5q%2B2QFnF5Db6J0lSuH6FSRTzuQEnBugDa0Ub%2Bm7yi21%2BUkw5vflxAY6pgH96qeXx3utb523wIFRw4CowUnoJ%2By0E1EvBaQlKnAYvpNY%2F4rIeDVJUkbi73EUVSGQMJvgI75LcKA5dc7%2BBSPiMx9mqtfO74aFry8IEs9YdjWm066xvQpdgfeFlj%2BMCRxMQEpBKCbB0%2FeSYQdnZuOx5kJSfmGQPtKT5rw2HyxEvuUPsfzyqbpVzCxw%2FtaP%2FoysryEKpmZi42ZsTbtHYvcLBCyaB7KE&X-Amz-Signature=b20bf26b9db4bd730de1e38a7a5939a0b0917ec5f0e314272f0e93d38d3d9dc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIJLI3LV%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2JeV%2FF1FcJtyQAYlhKY1yKQ%2FHOuzqSYnCD1woi%2F0uDAiEAsOqQLYu1bb0LC0pzvd340CCxphO9bkUIPDeSQQrn1XMqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtHwFdA6sQe6dAHbSrcA0jwx1uSNZi32%2B03CseomLCtovK7VCPRDlRHUHXCuOO8noWA7gyIuhbtMXtIALoTEk17s9PyAwGFzCdSmz%2FFyqHB36qU18H1T5ksE9GzuSY6etM3sOkLKL3drqs4GWhyvWVwdf5a6bUYRN1iFLsAYpN6ojoYHSNfHyhHIZUAX3sF2wWb3RM6qOerbY6IVbsXTc%2BDRRJl9yeU%2B9ZkruC9vDw2xKn6aNXs%2FfRcNV5JqzfNjWnNtqMHQ2QlndncIWTBptatBAjfpIIpOO6QzQ13g7yx%2FSVfO3LA5D1XGYYzARXeF3Fnif3majbZXxC6o%2FyHlFYP5B6zDGIxENJ7kAexFGTHZHbrqZSHL2kUpsPr388bqlaepHRcfF9dIY9YGf0atO67lDiT1bZJUEpiIIVnpyMSpCS8jsoW5BPYegNH8CjI4o%2FD448fQyOwYuurs4uP%2FIeyOF06AdPcBhau%2BlSNT8f38GCoutYaFVYWgMJjExI%2BWnEIHGOL%2BuEKYQLM2bERSZ%2Btht1XoKYl18OqlgCt0VAKUkOwxM7TqHOrO%2FqEjVasi%2BLKVZxaVQlHWvJVbdTULxjuc1WGIlTczYesg3L1%2F7cq4b2owF%2Bg0z%2FF4vhqv3yAfbNMneR1C7j3IpnbMOr35cQGOqUBFez8ptDTjuiqjklfGTw%2FTjxGXA%2FCGePL640FNGbamow%2BMi830hrN3i3bAuvAwdNDrMP3xZ3Y2MI4rDpec6SnuMd1R8KynoYSq7IhQIBDrsQ1BSmw7wLebezjg2kYO4Qnvr0FyTUMEbuPEBSYSgLZq%2BD7qrExEOkW1X1m7UizWk5m%2FuQ%2B2U5WVR5BjNGPxwnfC7bcLwWsDXMmgeoYHmyq9%2BzvOS9O&X-Amz-Signature=020beee3032ac6974ede7b67e51e91e8fb666e3092f52c38ed7f79473c71f950&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665REYNT5%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvOmKsJMjPOUwPXQOKNpCvf8%2Ff9ia%2BL7PfFFPuuK%2F0aAiBFB0MocY6kEsehRJgONeQGNQPsI6OB8pgnSrJCpZyIJCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuq4IrlssGM9OCkJfKtwDRzLW90BChS5q2ZlOiNbOqfnwcEVDGdo%2BtbveOiqBBmVggX6Ab4gugn2yI%2FAfzMUMcLOZxP3Xj1TDFbtokwJYgs4Z8GWfOu3AOZoDXz4d2sPsDcVWrNLRZpcSbm7L7z3SnS4bN3GO8KW9YTnG7NXM7eKgPbIZgtXjKKXUAEdXVUqu%2FHUuj1sS56AzZ%2BQdfjB%2F7c1PLUFyHWXyZ4vZbsBsQndyaGrJVWpPCj3AJpW1UqKxwNFQBgGGFvMsbZ3vJ53dMDthHU37WOezzHRVNfsM0jQgG0RTyJy7%2BZs6w6o3dXC0Zsy0sjNdHSqS2LUJ%2FaTX9yt4TGAzLktaz8%2BQVdUuFRg2Z8B%2FD0cp%2Fa5BaL%2BoltBDqW7pipfunry1prGS93aHU5oMyDGe%2Bf3mDUerZ0zyZVS6o1wRvC2%2FM8EBKbxeTz9svADNbbngH%2Fb%2FyAL36h34YQIf55DoTM6KDXvkUBQ7yG8VWeYyJNyDU0Q%2FmK51RmzD7n9wAKwO46QgS6rrZS4C3bSI9aGZNzN%2FyuVzwAtDdJC1tdkrE6x6o5nkuwUeJuFb432nBUKxS0MEVauUOrcHHz0XSi8i%2Fbv%2BYBjNiyQg7LAdY3Q65YueDXlrBFOJwTo7otDpsD15vHhvQD0wkPjlxAY6pgEZiwFWnqxo4SrtGyHU67gps3Zkkq6eHJn1MFue7fA6YrqMmzliKfln5rA%2FjMooEus82qaXXVOybCRdyIEpJSxtCQtjb2H77nz86pdWBCsePPfIpDmKB%2BCtMgNYPGbVlPNhocZQt78fq53wnc6QF1exWqBnfnRecolczcIDg3AzG5f37fMLZAIALvx3Y0D%2FSevOakdpoFa7W7%2BOxziGe2J%2Bc0tgCOgi&X-Amz-Signature=96da1bb14a38cd054b3ed866af46212e275b898117387e5f4948adc17997d0c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CVLTHH3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoIOhxsnjjY0Wk3EkndhBC59%2F1TGTKSPGEUNomBNe48AiAcMUyPwtjOdIDzGenppTO0DNsg2jA1ApPAWexJWTEg6SqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdCEDGeO%2BKIcSa7UlKtwDogP5H6ET%2Bu6v6U7NrFN7IhzhjTvdqb32qnNCrn8sITJcLeOoZEQlZZTWBKiFNeznOULzyUChRTVaQGR%2Fejk1bcNn7%2BWuYlwGjLyy5c0wjXQ1KVWTtPylhOkhj7E%2B14OWQyIirlSIPULExM2B18fPOLlNCwyId4JUfSJmtX5fl6Lv5dVJYRjySW8RDVQ6VBXe5Vlh%2FDwYW%2FKRoO0M50unhZNBlP5IBT6qzCK%2FnDZXD4GGqbi0jmTykosokSaCXEVHOP0aPOnumpJgmCAOPN7UCXq0BLSLIQo7AhzL6KpGBy6kXvQIDvkWIjVGlCDEidkSTWXraKY9jawPe71FbfdKG8cHXfozd84Eujaeawi3s2T1R8VMB6DxlXkeh44R6Jvicb%2F5LqT%2FbPt6ZF%2BUOF%2BIrAgwpOzanokHTT9Gvax7w3i%2FJPKWAEC%2F2qvrmL%2FKbmsUYJGZIhLuBL%2BCRIr9wlsyCkgerkO8fHgFHPZWT%2BuFCBkh9ePgSVO3JJQMKvBH%2B7FrgESlWNuJVgP7iB3l%2BWNHVc2cfQmNX%2BewCWZNl9Qidhbqh76%2BSTDFMpjsz2NkW2c6SqpFSeYEFAyz0t1TN%2FOIg6iV0rNFmb7oUae%2BQ%2Fup1LrdgBz%2Bjtx%2Fz8QnTXww3fflxAY6pgEDQNGVMcGGfxBvzSKTT6yp3%2BzAsmmCOZuLdO0KHmO%2BOWLjJ21aafI1ENU5GXuBp4rzmfR1z4YficCJdjbkb3nEjUjteeSQeVngsXnQhIy9QWvbJSkI%2FqYv9C4dF5UPk6OCJERG9ZYTvAMIVgd2XVZoUUkc3MHaNTpPKHqLpao9j36VHMSNGZoLydAF3hSMMk5aWaCgWgLUyOJQThb%2Fs12zOLoAIr%2Fu&X-Amz-Signature=f19a8da867b198cfce1f59461ebbe7f96c264424ce7e2cfd17aad9483330347e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YREKB5F6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvNOKgOBpW3jivLNqQGhOrSN2s7Trt%2Bcxe1pbUCUeeIAIhAN1AWzzteuDlj3SvaUo7QgLACPAzmFLxpsRtsSNUTXPjKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2%2F1RyB1zct9jTtU8q3ANaeYr8K9NNX3GrQXYfC7DXVEt%2Fj1gcIeWsXKN6HBwBLtzdLhmJfDDe5edMRy2FW%2B8BgKxtafM9pbDLABrVQOalrZ2kEEkzE2Ui6v5J57L2khMfUS3XCg04BrGR9XSoo1mx5UWNTTzJQw2K21KRTPSgVXsq%2BQUo%2FF5q5NyST2X2pZtzSNJNhqaR6BpIcm7%2B%2Fwyjia6qz1cBqPxJjkDorYY0pKzLBm2tgkWUjlj5LKxOv52Hu5ALmPoBapxTnYKCAJ8wLbhXVNSu88Fgl16seT%2FjX9S4K7kLXugVUKgGUftBNR2DfrN1i%2BkB%2FlzVmMlU0RlPKehDpuxcnuHJor2t4stKibvl%2F2wdDPaqAJy2tV9KHwleu8Q1X4LQO7KuIRDWc0IiBxOn3AV6RTIOssuN4GSBpvoSbk5%2BSfESuSY6I4h%2B31injP8YHbQv5kyiBFMbDUARZtW7uvp9Wvh0YWXDIJNX9H2lWldpuf5MTyy%2B7xIN2VvR5fzTWC%2FzQ%2Bvwar6HcIMxumAcgLdu6Fzn51WV31Cv3uIK5L9G409AXxBRLI4DdVeXLp%2FwZFDiNH8ROuQXuny3dZ3s81NF3o%2Fc%2FgVT50K1ti1jhKQt0XHfQnpRH9nQCVdYLR3uHS4Tnl3aijCO%2BOXEBjqkAVq6vKmJL%2FfivoNYLEjzv5NnBvupN7ZPPwK5JU7yVXsELgwh%2BTj3%2F4pI0c7SbOx8o4ymQdSvvvH0eFV3gNDDaWhnLYRcjlEbP4Gf8PpZE3cqiqfTBgeTYQzpH8gSezgTnYcZA6zzok3EYYICInjuLFYEuOKOBpRNpmbUch4f%2FFHPo7%2BTd3ecXl3cbkRmPhjHJD7zapS9tQmlzFN%2F1UErtz%2B2vk1B&X-Amz-Signature=dccf55fa5eae8532f65ad0ac29b2bd08c42887aae7576a382d83d280665f3f63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JIGXSB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7NXnIGwRD0BAoqY1E4E467AwI6NS3I4BaMu1y7%2BIYoAiBofIlkuL9fHwbyqcEvASGC540chv%2FRTr%2BAFOxFI4YDESqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz5ELcLBT30XpFsDPKtwDl%2F0XqL7Hd6CcntVml1%2BJduJSRUKIcWMJAuUhs7lrKnoD7%2BQmS57S1by3kXk5Fak6erAa6j29Ut%2FaCSm%2F3qDheqaeRdL%2BnSJ1RIPdRzaTDMLyG0SiD9wOkcq6tJc4KDuRUbifnJrups88528HHvtAHes%2Bh%2FsOw2XtxMNGFSjjtPB4ldeUxQvnFXUaeIRz%2FxwFd%2BYpVh1gx6S0TsRAaGSMrHS7LF8xK%2FG2NxdvcPVATL3nK%2FGUVLDLQJa5I9wmoggFqamNsdTBet3CPti6kzHfBXTxXIgVeYH1e3j58rdduBTUkyYs%2BcnCtBO3ns4CTFRT3sV98RRQDrvnQEh43sowM47vVhBEQaGqPNy9rJermj16t05HdRWGo%2BAw0vxgUwwtp7DVJHpaRniUfHzlWh2vz8w0vBmutaqQAA3opLFdJFFR5M%2FuGTchTGVl1Bz2tUUUqxZfTlYaTdGnxcjAswmvpI6cRXRqD4vWngCknNE%2FdERWoqkyb%2BEO9%2BLWUatBug%2FQeDeLpe5C8DopB57G3rr5PRusnFuaoH%2BwsXZcU1DZnWv5qw6ZfjV%2B%2FMuqIabpINRS%2B3%2FZBx1HHGf9QOtxOgaxR%2BBOLDEKjrT4A4O6LcYYCnnGydxBChHX17TNwj4wpfflxAY6pgHdsP%2FihKbINxmG6IJcsL%2FCK7diBcLV3vvGJyibkxcxQKv2hIfOM3wgpfOgGC%2BQXs0mX5wKE3Q3E68CyalWo3Nq6iX09JEclQzRx7IWR%2BI7aOYOZpGheUEdxpQaRl71Q74XshkIcFj3lb3OPU4bwZpKqxBty6uPHpzxJcmUAzWI0DK0i%2B1aqsS9p1BBd9wIUxEN%2B5nlRYbuTQCUiyJsW8SeDg%2FFY1wV&X-Amz-Signature=04713904d72ef9853c4e54de35ad789c98b76a1cc59f69beb6c179f298fd46d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JIGXSB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7NXnIGwRD0BAoqY1E4E467AwI6NS3I4BaMu1y7%2BIYoAiBofIlkuL9fHwbyqcEvASGC540chv%2FRTr%2BAFOxFI4YDESqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz5ELcLBT30XpFsDPKtwDl%2F0XqL7Hd6CcntVml1%2BJduJSRUKIcWMJAuUhs7lrKnoD7%2BQmS57S1by3kXk5Fak6erAa6j29Ut%2FaCSm%2F3qDheqaeRdL%2BnSJ1RIPdRzaTDMLyG0SiD9wOkcq6tJc4KDuRUbifnJrups88528HHvtAHes%2Bh%2FsOw2XtxMNGFSjjtPB4ldeUxQvnFXUaeIRz%2FxwFd%2BYpVh1gx6S0TsRAaGSMrHS7LF8xK%2FG2NxdvcPVATL3nK%2FGUVLDLQJa5I9wmoggFqamNsdTBet3CPti6kzHfBXTxXIgVeYH1e3j58rdduBTUkyYs%2BcnCtBO3ns4CTFRT3sV98RRQDrvnQEh43sowM47vVhBEQaGqPNy9rJermj16t05HdRWGo%2BAw0vxgUwwtp7DVJHpaRniUfHzlWh2vz8w0vBmutaqQAA3opLFdJFFR5M%2FuGTchTGVl1Bz2tUUUqxZfTlYaTdGnxcjAswmvpI6cRXRqD4vWngCknNE%2FdERWoqkyb%2BEO9%2BLWUatBug%2FQeDeLpe5C8DopB57G3rr5PRusnFuaoH%2BwsXZcU1DZnWv5qw6ZfjV%2B%2FMuqIabpINRS%2B3%2FZBx1HHGf9QOtxOgaxR%2BBOLDEKjrT4A4O6LcYYCnnGydxBChHX17TNwj4wpfflxAY6pgHdsP%2FihKbINxmG6IJcsL%2FCK7diBcLV3vvGJyibkxcxQKv2hIfOM3wgpfOgGC%2BQXs0mX5wKE3Q3E68CyalWo3Nq6iX09JEclQzRx7IWR%2BI7aOYOZpGheUEdxpQaRl71Q74XshkIcFj3lb3OPU4bwZpKqxBty6uPHpzxJcmUAzWI0DK0i%2B1aqsS9p1BBd9wIUxEN%2B5nlRYbuTQCUiyJsW8SeDg%2FFY1wV&X-Amz-Signature=b74559a8b203214cd838688628bc6fd72d6a25986a70f9aa412261e186bf4fa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKJITJM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSaHlZeR7QOAXzWasTaDof6G10FK8Pat%2B%2FiUf0zZSpjAiEAyV67HfdPbeRWKNqLkKeDR3BcRsxnFk6nkPI8Yzf6kNIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfzs8p7Ua611855aCrcAyN7vMhtN%2BOexf%2FtPR5%2Fc8G0OtxG3mEewSU%2FiMJxthLDof%2F4vWOBli92icZiVlYtjOQv28oHqPNkpBbeA%2BzQKB38WZkNRZvqC4%2BEgAL2g7SbUyJx8c7tryf0w6NK26JuNEUKOh3iwjTg1R7jWpiRjTZRZEg6PJ1mDpLUZiBT4H6mYCJR4sHEbFTqJu%2BM1rKoywin9dgRkgFvdu6DTCkRklV42rMM2OiAbwTAFM%2BXgKbzcDhrwrgwdDF5xt%2FtK7pTiNOhjNnJ2bLmgxx4%2FfC5paxJSZ8eW0XEsxF4jvJxa5kzGhrBTBh1W78YjJRVo0TLdKFo1ggQPnBcTR2I5HmAGuHDZWHG0BaPZdWJE%2BINUBOB%2FBuwefQ8Z4RCA9d1UDCHldXC9hERLImo9Gzd2KsacMHLoXUlxv6%2BKf1whJ531IK4F35zor5NAQzwCNkZXWQA8YPTJ8gRs42oLLGq9vNViqi6WTUJ0hnJPRBpRvOOaHbUhVlimAjvE8pFUeZzWYybAwrx1Lx%2FlEHJ6gYKaHbLmAVPWtkENttfkMTquYMFzFK2pWQwqbeQK8d4%2FgsWBj4zWm57O0JPMxUAY5vtUk8AK3PEANfl8cJjrprrHDA94%2FIAy0QeLfFOovFbFHjuMKH35cQGOqUBQK0XCqwVEsvLA2hd05GIqbKCNKrSVrRrnS06jfa8KqJya9cWCB4QdHV1amr0CjZUPvvBlvkisO9ZCJWdMbNF9yH7Ar%2Bq5vOMqMFEcPwuFtLAUE7Gtj8SrYk1x5yVz658QSV5kPqYF%2FA9R1xIo4k9OVhfF%2B6BH22kQWA%2BQI4KEJNH%2FesEUcVI1HAuAkXUERdkU9jS%2FBFk8sEQK92jyzgk%2Fb9imItp&X-Amz-Signature=08b8d3e5dd638ace1945770d1817474704c8efe1f0afcf7bf8699f4adac9eb88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKJITJM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSaHlZeR7QOAXzWasTaDof6G10FK8Pat%2B%2FiUf0zZSpjAiEAyV67HfdPbeRWKNqLkKeDR3BcRsxnFk6nkPI8Yzf6kNIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfzs8p7Ua611855aCrcAyN7vMhtN%2BOexf%2FtPR5%2Fc8G0OtxG3mEewSU%2FiMJxthLDof%2F4vWOBli92icZiVlYtjOQv28oHqPNkpBbeA%2BzQKB38WZkNRZvqC4%2BEgAL2g7SbUyJx8c7tryf0w6NK26JuNEUKOh3iwjTg1R7jWpiRjTZRZEg6PJ1mDpLUZiBT4H6mYCJR4sHEbFTqJu%2BM1rKoywin9dgRkgFvdu6DTCkRklV42rMM2OiAbwTAFM%2BXgKbzcDhrwrgwdDF5xt%2FtK7pTiNOhjNnJ2bLmgxx4%2FfC5paxJSZ8eW0XEsxF4jvJxa5kzGhrBTBh1W78YjJRVo0TLdKFo1ggQPnBcTR2I5HmAGuHDZWHG0BaPZdWJE%2BINUBOB%2FBuwefQ8Z4RCA9d1UDCHldXC9hERLImo9Gzd2KsacMHLoXUlxv6%2BKf1whJ531IK4F35zor5NAQzwCNkZXWQA8YPTJ8gRs42oLLGq9vNViqi6WTUJ0hnJPRBpRvOOaHbUhVlimAjvE8pFUeZzWYybAwrx1Lx%2FlEHJ6gYKaHbLmAVPWtkENttfkMTquYMFzFK2pWQwqbeQK8d4%2FgsWBj4zWm57O0JPMxUAY5vtUk8AK3PEANfl8cJjrprrHDA94%2FIAy0QeLfFOovFbFHjuMKH35cQGOqUBQK0XCqwVEsvLA2hd05GIqbKCNKrSVrRrnS06jfa8KqJya9cWCB4QdHV1amr0CjZUPvvBlvkisO9ZCJWdMbNF9yH7Ar%2Bq5vOMqMFEcPwuFtLAUE7Gtj8SrYk1x5yVz658QSV5kPqYF%2FA9R1xIo4k9OVhfF%2B6BH22kQWA%2BQI4KEJNH%2FesEUcVI1HAuAkXUERdkU9jS%2FBFk8sEQK92jyzgk%2Fb9imItp&X-Amz-Signature=d2f08709fa774c0a84e4a686a8eb073a68db2809f085c0b232b2b8243946b026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKJITJM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSaHlZeR7QOAXzWasTaDof6G10FK8Pat%2B%2FiUf0zZSpjAiEAyV67HfdPbeRWKNqLkKeDR3BcRsxnFk6nkPI8Yzf6kNIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfzs8p7Ua611855aCrcAyN7vMhtN%2BOexf%2FtPR5%2Fc8G0OtxG3mEewSU%2FiMJxthLDof%2F4vWOBli92icZiVlYtjOQv28oHqPNkpBbeA%2BzQKB38WZkNRZvqC4%2BEgAL2g7SbUyJx8c7tryf0w6NK26JuNEUKOh3iwjTg1R7jWpiRjTZRZEg6PJ1mDpLUZiBT4H6mYCJR4sHEbFTqJu%2BM1rKoywin9dgRkgFvdu6DTCkRklV42rMM2OiAbwTAFM%2BXgKbzcDhrwrgwdDF5xt%2FtK7pTiNOhjNnJ2bLmgxx4%2FfC5paxJSZ8eW0XEsxF4jvJxa5kzGhrBTBh1W78YjJRVo0TLdKFo1ggQPnBcTR2I5HmAGuHDZWHG0BaPZdWJE%2BINUBOB%2FBuwefQ8Z4RCA9d1UDCHldXC9hERLImo9Gzd2KsacMHLoXUlxv6%2BKf1whJ531IK4F35zor5NAQzwCNkZXWQA8YPTJ8gRs42oLLGq9vNViqi6WTUJ0hnJPRBpRvOOaHbUhVlimAjvE8pFUeZzWYybAwrx1Lx%2FlEHJ6gYKaHbLmAVPWtkENttfkMTquYMFzFK2pWQwqbeQK8d4%2FgsWBj4zWm57O0JPMxUAY5vtUk8AK3PEANfl8cJjrprrHDA94%2FIAy0QeLfFOovFbFHjuMKH35cQGOqUBQK0XCqwVEsvLA2hd05GIqbKCNKrSVrRrnS06jfa8KqJya9cWCB4QdHV1amr0CjZUPvvBlvkisO9ZCJWdMbNF9yH7Ar%2Bq5vOMqMFEcPwuFtLAUE7Gtj8SrYk1x5yVz658QSV5kPqYF%2FA9R1xIo4k9OVhfF%2B6BH22kQWA%2BQI4KEJNH%2FesEUcVI1HAuAkXUERdkU9jS%2FBFk8sEQK92jyzgk%2Fb9imItp&X-Amz-Signature=ea22c46d3988d06fd2b8fa791714f61e5a9e029c5c923907e6c6744977332ccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKJITJM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSaHlZeR7QOAXzWasTaDof6G10FK8Pat%2B%2FiUf0zZSpjAiEAyV67HfdPbeRWKNqLkKeDR3BcRsxnFk6nkPI8Yzf6kNIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfzs8p7Ua611855aCrcAyN7vMhtN%2BOexf%2FtPR5%2Fc8G0OtxG3mEewSU%2FiMJxthLDof%2F4vWOBli92icZiVlYtjOQv28oHqPNkpBbeA%2BzQKB38WZkNRZvqC4%2BEgAL2g7SbUyJx8c7tryf0w6NK26JuNEUKOh3iwjTg1R7jWpiRjTZRZEg6PJ1mDpLUZiBT4H6mYCJR4sHEbFTqJu%2BM1rKoywin9dgRkgFvdu6DTCkRklV42rMM2OiAbwTAFM%2BXgKbzcDhrwrgwdDF5xt%2FtK7pTiNOhjNnJ2bLmgxx4%2FfC5paxJSZ8eW0XEsxF4jvJxa5kzGhrBTBh1W78YjJRVo0TLdKFo1ggQPnBcTR2I5HmAGuHDZWHG0BaPZdWJE%2BINUBOB%2FBuwefQ8Z4RCA9d1UDCHldXC9hERLImo9Gzd2KsacMHLoXUlxv6%2BKf1whJ531IK4F35zor5NAQzwCNkZXWQA8YPTJ8gRs42oLLGq9vNViqi6WTUJ0hnJPRBpRvOOaHbUhVlimAjvE8pFUeZzWYybAwrx1Lx%2FlEHJ6gYKaHbLmAVPWtkENttfkMTquYMFzFK2pWQwqbeQK8d4%2FgsWBj4zWm57O0JPMxUAY5vtUk8AK3PEANfl8cJjrprrHDA94%2FIAy0QeLfFOovFbFHjuMKH35cQGOqUBQK0XCqwVEsvLA2hd05GIqbKCNKrSVrRrnS06jfa8KqJya9cWCB4QdHV1amr0CjZUPvvBlvkisO9ZCJWdMbNF9yH7Ar%2Bq5vOMqMFEcPwuFtLAUE7Gtj8SrYk1x5yVz658QSV5kPqYF%2FA9R1xIo4k9OVhfF%2B6BH22kQWA%2BQI4KEJNH%2FesEUcVI1HAuAkXUERdkU9jS%2FBFk8sEQK92jyzgk%2Fb9imItp&X-Amz-Signature=8602c7b00dae95acad8fef2e4ded85017c462ac2200db9c700d2f5fa52c9c9bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKJITJM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSaHlZeR7QOAXzWasTaDof6G10FK8Pat%2B%2FiUf0zZSpjAiEAyV67HfdPbeRWKNqLkKeDR3BcRsxnFk6nkPI8Yzf6kNIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfzs8p7Ua611855aCrcAyN7vMhtN%2BOexf%2FtPR5%2Fc8G0OtxG3mEewSU%2FiMJxthLDof%2F4vWOBli92icZiVlYtjOQv28oHqPNkpBbeA%2BzQKB38WZkNRZvqC4%2BEgAL2g7SbUyJx8c7tryf0w6NK26JuNEUKOh3iwjTg1R7jWpiRjTZRZEg6PJ1mDpLUZiBT4H6mYCJR4sHEbFTqJu%2BM1rKoywin9dgRkgFvdu6DTCkRklV42rMM2OiAbwTAFM%2BXgKbzcDhrwrgwdDF5xt%2FtK7pTiNOhjNnJ2bLmgxx4%2FfC5paxJSZ8eW0XEsxF4jvJxa5kzGhrBTBh1W78YjJRVo0TLdKFo1ggQPnBcTR2I5HmAGuHDZWHG0BaPZdWJE%2BINUBOB%2FBuwefQ8Z4RCA9d1UDCHldXC9hERLImo9Gzd2KsacMHLoXUlxv6%2BKf1whJ531IK4F35zor5NAQzwCNkZXWQA8YPTJ8gRs42oLLGq9vNViqi6WTUJ0hnJPRBpRvOOaHbUhVlimAjvE8pFUeZzWYybAwrx1Lx%2FlEHJ6gYKaHbLmAVPWtkENttfkMTquYMFzFK2pWQwqbeQK8d4%2FgsWBj4zWm57O0JPMxUAY5vtUk8AK3PEANfl8cJjrprrHDA94%2FIAy0QeLfFOovFbFHjuMKH35cQGOqUBQK0XCqwVEsvLA2hd05GIqbKCNKrSVrRrnS06jfa8KqJya9cWCB4QdHV1amr0CjZUPvvBlvkisO9ZCJWdMbNF9yH7Ar%2Bq5vOMqMFEcPwuFtLAUE7Gtj8SrYk1x5yVz658QSV5kPqYF%2FA9R1xIo4k9OVhfF%2B6BH22kQWA%2BQI4KEJNH%2FesEUcVI1HAuAkXUERdkU9jS%2FBFk8sEQK92jyzgk%2Fb9imItp&X-Amz-Signature=0980ffe7a7974949250dd9df42830a9d2cd69dfd364519468fd8685d036bc8a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKJITJM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSaHlZeR7QOAXzWasTaDof6G10FK8Pat%2B%2FiUf0zZSpjAiEAyV67HfdPbeRWKNqLkKeDR3BcRsxnFk6nkPI8Yzf6kNIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfzs8p7Ua611855aCrcAyN7vMhtN%2BOexf%2FtPR5%2Fc8G0OtxG3mEewSU%2FiMJxthLDof%2F4vWOBli92icZiVlYtjOQv28oHqPNkpBbeA%2BzQKB38WZkNRZvqC4%2BEgAL2g7SbUyJx8c7tryf0w6NK26JuNEUKOh3iwjTg1R7jWpiRjTZRZEg6PJ1mDpLUZiBT4H6mYCJR4sHEbFTqJu%2BM1rKoywin9dgRkgFvdu6DTCkRklV42rMM2OiAbwTAFM%2BXgKbzcDhrwrgwdDF5xt%2FtK7pTiNOhjNnJ2bLmgxx4%2FfC5paxJSZ8eW0XEsxF4jvJxa5kzGhrBTBh1W78YjJRVo0TLdKFo1ggQPnBcTR2I5HmAGuHDZWHG0BaPZdWJE%2BINUBOB%2FBuwefQ8Z4RCA9d1UDCHldXC9hERLImo9Gzd2KsacMHLoXUlxv6%2BKf1whJ531IK4F35zor5NAQzwCNkZXWQA8YPTJ8gRs42oLLGq9vNViqi6WTUJ0hnJPRBpRvOOaHbUhVlimAjvE8pFUeZzWYybAwrx1Lx%2FlEHJ6gYKaHbLmAVPWtkENttfkMTquYMFzFK2pWQwqbeQK8d4%2FgsWBj4zWm57O0JPMxUAY5vtUk8AK3PEANfl8cJjrprrHDA94%2FIAy0QeLfFOovFbFHjuMKH35cQGOqUBQK0XCqwVEsvLA2hd05GIqbKCNKrSVrRrnS06jfa8KqJya9cWCB4QdHV1amr0CjZUPvvBlvkisO9ZCJWdMbNF9yH7Ar%2Bq5vOMqMFEcPwuFtLAUE7Gtj8SrYk1x5yVz658QSV5kPqYF%2FA9R1xIo4k9OVhfF%2B6BH22kQWA%2BQI4KEJNH%2FesEUcVI1HAuAkXUERdkU9jS%2FBFk8sEQK92jyzgk%2Fb9imItp&X-Amz-Signature=57afe79631c0d8ddcc7991ee47d5a341234a6fd26afd407c8c072b3fa1505fec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKJITJM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSaHlZeR7QOAXzWasTaDof6G10FK8Pat%2B%2FiUf0zZSpjAiEAyV67HfdPbeRWKNqLkKeDR3BcRsxnFk6nkPI8Yzf6kNIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfzs8p7Ua611855aCrcAyN7vMhtN%2BOexf%2FtPR5%2Fc8G0OtxG3mEewSU%2FiMJxthLDof%2F4vWOBli92icZiVlYtjOQv28oHqPNkpBbeA%2BzQKB38WZkNRZvqC4%2BEgAL2g7SbUyJx8c7tryf0w6NK26JuNEUKOh3iwjTg1R7jWpiRjTZRZEg6PJ1mDpLUZiBT4H6mYCJR4sHEbFTqJu%2BM1rKoywin9dgRkgFvdu6DTCkRklV42rMM2OiAbwTAFM%2BXgKbzcDhrwrgwdDF5xt%2FtK7pTiNOhjNnJ2bLmgxx4%2FfC5paxJSZ8eW0XEsxF4jvJxa5kzGhrBTBh1W78YjJRVo0TLdKFo1ggQPnBcTR2I5HmAGuHDZWHG0BaPZdWJE%2BINUBOB%2FBuwefQ8Z4RCA9d1UDCHldXC9hERLImo9Gzd2KsacMHLoXUlxv6%2BKf1whJ531IK4F35zor5NAQzwCNkZXWQA8YPTJ8gRs42oLLGq9vNViqi6WTUJ0hnJPRBpRvOOaHbUhVlimAjvE8pFUeZzWYybAwrx1Lx%2FlEHJ6gYKaHbLmAVPWtkENttfkMTquYMFzFK2pWQwqbeQK8d4%2FgsWBj4zWm57O0JPMxUAY5vtUk8AK3PEANfl8cJjrprrHDA94%2FIAy0QeLfFOovFbFHjuMKH35cQGOqUBQK0XCqwVEsvLA2hd05GIqbKCNKrSVrRrnS06jfa8KqJya9cWCB4QdHV1amr0CjZUPvvBlvkisO9ZCJWdMbNF9yH7Ar%2Bq5vOMqMFEcPwuFtLAUE7Gtj8SrYk1x5yVz658QSV5kPqYF%2FA9R1xIo4k9OVhfF%2B6BH22kQWA%2BQI4KEJNH%2FesEUcVI1HAuAkXUERdkU9jS%2FBFk8sEQK92jyzgk%2Fb9imItp&X-Amz-Signature=ea22c46d3988d06fd2b8fa791714f61e5a9e029c5c923907e6c6744977332ccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKJITJM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSaHlZeR7QOAXzWasTaDof6G10FK8Pat%2B%2FiUf0zZSpjAiEAyV67HfdPbeRWKNqLkKeDR3BcRsxnFk6nkPI8Yzf6kNIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfzs8p7Ua611855aCrcAyN7vMhtN%2BOexf%2FtPR5%2Fc8G0OtxG3mEewSU%2FiMJxthLDof%2F4vWOBli92icZiVlYtjOQv28oHqPNkpBbeA%2BzQKB38WZkNRZvqC4%2BEgAL2g7SbUyJx8c7tryf0w6NK26JuNEUKOh3iwjTg1R7jWpiRjTZRZEg6PJ1mDpLUZiBT4H6mYCJR4sHEbFTqJu%2BM1rKoywin9dgRkgFvdu6DTCkRklV42rMM2OiAbwTAFM%2BXgKbzcDhrwrgwdDF5xt%2FtK7pTiNOhjNnJ2bLmgxx4%2FfC5paxJSZ8eW0XEsxF4jvJxa5kzGhrBTBh1W78YjJRVo0TLdKFo1ggQPnBcTR2I5HmAGuHDZWHG0BaPZdWJE%2BINUBOB%2FBuwefQ8Z4RCA9d1UDCHldXC9hERLImo9Gzd2KsacMHLoXUlxv6%2BKf1whJ531IK4F35zor5NAQzwCNkZXWQA8YPTJ8gRs42oLLGq9vNViqi6WTUJ0hnJPRBpRvOOaHbUhVlimAjvE8pFUeZzWYybAwrx1Lx%2FlEHJ6gYKaHbLmAVPWtkENttfkMTquYMFzFK2pWQwqbeQK8d4%2FgsWBj4zWm57O0JPMxUAY5vtUk8AK3PEANfl8cJjrprrHDA94%2FIAy0QeLfFOovFbFHjuMKH35cQGOqUBQK0XCqwVEsvLA2hd05GIqbKCNKrSVrRrnS06jfa8KqJya9cWCB4QdHV1amr0CjZUPvvBlvkisO9ZCJWdMbNF9yH7Ar%2Bq5vOMqMFEcPwuFtLAUE7Gtj8SrYk1x5yVz658QSV5kPqYF%2FA9R1xIo4k9OVhfF%2B6BH22kQWA%2BQI4KEJNH%2FesEUcVI1HAuAkXUERdkU9jS%2FBFk8sEQK92jyzgk%2Fb9imItp&X-Amz-Signature=517033681567d35a70ecd068c6a7c12f4fa8584f8f798f8ebc0dfdea1308679e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKJITJM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSaHlZeR7QOAXzWasTaDof6G10FK8Pat%2B%2FiUf0zZSpjAiEAyV67HfdPbeRWKNqLkKeDR3BcRsxnFk6nkPI8Yzf6kNIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfzs8p7Ua611855aCrcAyN7vMhtN%2BOexf%2FtPR5%2Fc8G0OtxG3mEewSU%2FiMJxthLDof%2F4vWOBli92icZiVlYtjOQv28oHqPNkpBbeA%2BzQKB38WZkNRZvqC4%2BEgAL2g7SbUyJx8c7tryf0w6NK26JuNEUKOh3iwjTg1R7jWpiRjTZRZEg6PJ1mDpLUZiBT4H6mYCJR4sHEbFTqJu%2BM1rKoywin9dgRkgFvdu6DTCkRklV42rMM2OiAbwTAFM%2BXgKbzcDhrwrgwdDF5xt%2FtK7pTiNOhjNnJ2bLmgxx4%2FfC5paxJSZ8eW0XEsxF4jvJxa5kzGhrBTBh1W78YjJRVo0TLdKFo1ggQPnBcTR2I5HmAGuHDZWHG0BaPZdWJE%2BINUBOB%2FBuwefQ8Z4RCA9d1UDCHldXC9hERLImo9Gzd2KsacMHLoXUlxv6%2BKf1whJ531IK4F35zor5NAQzwCNkZXWQA8YPTJ8gRs42oLLGq9vNViqi6WTUJ0hnJPRBpRvOOaHbUhVlimAjvE8pFUeZzWYybAwrx1Lx%2FlEHJ6gYKaHbLmAVPWtkENttfkMTquYMFzFK2pWQwqbeQK8d4%2FgsWBj4zWm57O0JPMxUAY5vtUk8AK3PEANfl8cJjrprrHDA94%2FIAy0QeLfFOovFbFHjuMKH35cQGOqUBQK0XCqwVEsvLA2hd05GIqbKCNKrSVrRrnS06jfa8KqJya9cWCB4QdHV1amr0CjZUPvvBlvkisO9ZCJWdMbNF9yH7Ar%2Bq5vOMqMFEcPwuFtLAUE7Gtj8SrYk1x5yVz658QSV5kPqYF%2FA9R1xIo4k9OVhfF%2B6BH22kQWA%2BQI4KEJNH%2FesEUcVI1HAuAkXUERdkU9jS%2FBFk8sEQK92jyzgk%2Fb9imItp&X-Amz-Signature=e6cdc38e737ca2571ddad442433a6df1b7e0cd341d983428d94bc61b5adf17b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKJITJM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSaHlZeR7QOAXzWasTaDof6G10FK8Pat%2B%2FiUf0zZSpjAiEAyV67HfdPbeRWKNqLkKeDR3BcRsxnFk6nkPI8Yzf6kNIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfzs8p7Ua611855aCrcAyN7vMhtN%2BOexf%2FtPR5%2Fc8G0OtxG3mEewSU%2FiMJxthLDof%2F4vWOBli92icZiVlYtjOQv28oHqPNkpBbeA%2BzQKB38WZkNRZvqC4%2BEgAL2g7SbUyJx8c7tryf0w6NK26JuNEUKOh3iwjTg1R7jWpiRjTZRZEg6PJ1mDpLUZiBT4H6mYCJR4sHEbFTqJu%2BM1rKoywin9dgRkgFvdu6DTCkRklV42rMM2OiAbwTAFM%2BXgKbzcDhrwrgwdDF5xt%2FtK7pTiNOhjNnJ2bLmgxx4%2FfC5paxJSZ8eW0XEsxF4jvJxa5kzGhrBTBh1W78YjJRVo0TLdKFo1ggQPnBcTR2I5HmAGuHDZWHG0BaPZdWJE%2BINUBOB%2FBuwefQ8Z4RCA9d1UDCHldXC9hERLImo9Gzd2KsacMHLoXUlxv6%2BKf1whJ531IK4F35zor5NAQzwCNkZXWQA8YPTJ8gRs42oLLGq9vNViqi6WTUJ0hnJPRBpRvOOaHbUhVlimAjvE8pFUeZzWYybAwrx1Lx%2FlEHJ6gYKaHbLmAVPWtkENttfkMTquYMFzFK2pWQwqbeQK8d4%2FgsWBj4zWm57O0JPMxUAY5vtUk8AK3PEANfl8cJjrprrHDA94%2FIAy0QeLfFOovFbFHjuMKH35cQGOqUBQK0XCqwVEsvLA2hd05GIqbKCNKrSVrRrnS06jfa8KqJya9cWCB4QdHV1amr0CjZUPvvBlvkisO9ZCJWdMbNF9yH7Ar%2Bq5vOMqMFEcPwuFtLAUE7Gtj8SrYk1x5yVz658QSV5kPqYF%2FA9R1xIo4k9OVhfF%2B6BH22kQWA%2BQI4KEJNH%2FesEUcVI1HAuAkXUERdkU9jS%2FBFk8sEQK92jyzgk%2Fb9imItp&X-Amz-Signature=bac5dff1459b0b4caa71264ccd4b828275d1cf7cb0243face368832b35b97c23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
