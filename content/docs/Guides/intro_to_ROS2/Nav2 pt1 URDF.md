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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMIIJPF%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGufVuwEQeTgFGi7to7eLsMiU28VGP94sDkxUI0lfG2AiAdkHEPEdgkSDUhUQgC2NR1BnabtUephnnniG8v0D%2BMESqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BA5eKNbkt9blHQElKtwDv%2FYTw7lSsrSS%2FGL3ulli466p8RkL5t%2FqcDh3sy%2FplzFI2wFtgN41sfKvMNmSrHFP6KuN3y5sgniIdftLfbhGQoWu0c9KJintcG%2FJsVBmK071Tni5%2FaeNxF5OvLoEhVWxSrt7mKZ9PvwMDibbCNCeyVb205dc%2FTztq1TXt8HPhb6425ok97CIDCBjHbW2qBbnEg17erCFZ0JBA0N8EUYD9Kq8l%2BgN8t9t4Uj3%2F0xzqFJqwJHOpfAfprs3HPuUKfS5oznsmgSXlpLtI9Ls7urvZPNyxPBawIWJhSg306hPQTNbWclt56mEQlNQoarCvV7Lys6f1L%2BAjglUiazV8qpHfkXWu6Zwy5vtCOqmYmcI6mB8C5xnHTBzskLSpEG6h6cK49OdP00vGNMaey91zhwbRS1MGU2QO7m2FijStZYWif9r6yPcO7aZ87X3IGoLFYmxaZaF%2FFRRAr8QafvdLJ%2FHjRP7ph4wjsqOJIqTQ0tDSllZOF8qkx%2FPJJZYxxxJb3gX00nw655HghDkpCMta3h0XCDZYIHOnSXPvQ6hbfJv1iCQsOabMOFNzOLAeRUwxWZFWsHKr0SaqJJ7iFm3kxDZZ5pW9aH9d20oHBAbgwAgaIjvQMullaNBMX7LtaMwn%2BjezAY6pgGSG5VZWIHJ3Hplei6O46QLc6LbTRjCF9OyUm5lr8VO1U%2BH4zqvheNtZbQEwwozWI%2FSh2ntNQt6ndvXj5CL89ZTpuns2l%2FWpkQld9F1Z1BRNw3NECKORLZs4YEkrkPpBWFeCtoOHwPIa3nwCsLcfgt2gz7P8KsUew%2BS9k4XtRD9HTKc06eGViuWRolI26I6CM34CWZmmdRKIDes2ycubbI9R91%2Faekb&X-Amz-Signature=f04e7e37049d6bdf96980057fd00db8bc50de4fb27d288bd849700458207d9fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMIIJPF%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGufVuwEQeTgFGi7to7eLsMiU28VGP94sDkxUI0lfG2AiAdkHEPEdgkSDUhUQgC2NR1BnabtUephnnniG8v0D%2BMESqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BA5eKNbkt9blHQElKtwDv%2FYTw7lSsrSS%2FGL3ulli466p8RkL5t%2FqcDh3sy%2FplzFI2wFtgN41sfKvMNmSrHFP6KuN3y5sgniIdftLfbhGQoWu0c9KJintcG%2FJsVBmK071Tni5%2FaeNxF5OvLoEhVWxSrt7mKZ9PvwMDibbCNCeyVb205dc%2FTztq1TXt8HPhb6425ok97CIDCBjHbW2qBbnEg17erCFZ0JBA0N8EUYD9Kq8l%2BgN8t9t4Uj3%2F0xzqFJqwJHOpfAfprs3HPuUKfS5oznsmgSXlpLtI9Ls7urvZPNyxPBawIWJhSg306hPQTNbWclt56mEQlNQoarCvV7Lys6f1L%2BAjglUiazV8qpHfkXWu6Zwy5vtCOqmYmcI6mB8C5xnHTBzskLSpEG6h6cK49OdP00vGNMaey91zhwbRS1MGU2QO7m2FijStZYWif9r6yPcO7aZ87X3IGoLFYmxaZaF%2FFRRAr8QafvdLJ%2FHjRP7ph4wjsqOJIqTQ0tDSllZOF8qkx%2FPJJZYxxxJb3gX00nw655HghDkpCMta3h0XCDZYIHOnSXPvQ6hbfJv1iCQsOabMOFNzOLAeRUwxWZFWsHKr0SaqJJ7iFm3kxDZZ5pW9aH9d20oHBAbgwAgaIjvQMullaNBMX7LtaMwn%2BjezAY6pgGSG5VZWIHJ3Hplei6O46QLc6LbTRjCF9OyUm5lr8VO1U%2BH4zqvheNtZbQEwwozWI%2FSh2ntNQt6ndvXj5CL89ZTpuns2l%2FWpkQld9F1Z1BRNw3NECKORLZs4YEkrkPpBWFeCtoOHwPIa3nwCsLcfgt2gz7P8KsUew%2BS9k4XtRD9HTKc06eGViuWRolI26I6CM34CWZmmdRKIDes2ycubbI9R91%2Faekb&X-Amz-Signature=700deb028703ce508b43e09da8707e31f7d9b3ab666b802b42e19eb90347464d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMIIJPF%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGufVuwEQeTgFGi7to7eLsMiU28VGP94sDkxUI0lfG2AiAdkHEPEdgkSDUhUQgC2NR1BnabtUephnnniG8v0D%2BMESqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BA5eKNbkt9blHQElKtwDv%2FYTw7lSsrSS%2FGL3ulli466p8RkL5t%2FqcDh3sy%2FplzFI2wFtgN41sfKvMNmSrHFP6KuN3y5sgniIdftLfbhGQoWu0c9KJintcG%2FJsVBmK071Tni5%2FaeNxF5OvLoEhVWxSrt7mKZ9PvwMDibbCNCeyVb205dc%2FTztq1TXt8HPhb6425ok97CIDCBjHbW2qBbnEg17erCFZ0JBA0N8EUYD9Kq8l%2BgN8t9t4Uj3%2F0xzqFJqwJHOpfAfprs3HPuUKfS5oznsmgSXlpLtI9Ls7urvZPNyxPBawIWJhSg306hPQTNbWclt56mEQlNQoarCvV7Lys6f1L%2BAjglUiazV8qpHfkXWu6Zwy5vtCOqmYmcI6mB8C5xnHTBzskLSpEG6h6cK49OdP00vGNMaey91zhwbRS1MGU2QO7m2FijStZYWif9r6yPcO7aZ87X3IGoLFYmxaZaF%2FFRRAr8QafvdLJ%2FHjRP7ph4wjsqOJIqTQ0tDSllZOF8qkx%2FPJJZYxxxJb3gX00nw655HghDkpCMta3h0XCDZYIHOnSXPvQ6hbfJv1iCQsOabMOFNzOLAeRUwxWZFWsHKr0SaqJJ7iFm3kxDZZ5pW9aH9d20oHBAbgwAgaIjvQMullaNBMX7LtaMwn%2BjezAY6pgGSG5VZWIHJ3Hplei6O46QLc6LbTRjCF9OyUm5lr8VO1U%2BH4zqvheNtZbQEwwozWI%2FSh2ntNQt6ndvXj5CL89ZTpuns2l%2FWpkQld9F1Z1BRNw3NECKORLZs4YEkrkPpBWFeCtoOHwPIa3nwCsLcfgt2gz7P8KsUew%2BS9k4XtRD9HTKc06eGViuWRolI26I6CM34CWZmmdRKIDes2ycubbI9R91%2Faekb&X-Amz-Signature=75f3ca164d4681b8b5ea93e051c26e1a437c09d4073e4040ed05f623ceda83be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMIIJPF%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGufVuwEQeTgFGi7to7eLsMiU28VGP94sDkxUI0lfG2AiAdkHEPEdgkSDUhUQgC2NR1BnabtUephnnniG8v0D%2BMESqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BA5eKNbkt9blHQElKtwDv%2FYTw7lSsrSS%2FGL3ulli466p8RkL5t%2FqcDh3sy%2FplzFI2wFtgN41sfKvMNmSrHFP6KuN3y5sgniIdftLfbhGQoWu0c9KJintcG%2FJsVBmK071Tni5%2FaeNxF5OvLoEhVWxSrt7mKZ9PvwMDibbCNCeyVb205dc%2FTztq1TXt8HPhb6425ok97CIDCBjHbW2qBbnEg17erCFZ0JBA0N8EUYD9Kq8l%2BgN8t9t4Uj3%2F0xzqFJqwJHOpfAfprs3HPuUKfS5oznsmgSXlpLtI9Ls7urvZPNyxPBawIWJhSg306hPQTNbWclt56mEQlNQoarCvV7Lys6f1L%2BAjglUiazV8qpHfkXWu6Zwy5vtCOqmYmcI6mB8C5xnHTBzskLSpEG6h6cK49OdP00vGNMaey91zhwbRS1MGU2QO7m2FijStZYWif9r6yPcO7aZ87X3IGoLFYmxaZaF%2FFRRAr8QafvdLJ%2FHjRP7ph4wjsqOJIqTQ0tDSllZOF8qkx%2FPJJZYxxxJb3gX00nw655HghDkpCMta3h0XCDZYIHOnSXPvQ6hbfJv1iCQsOabMOFNzOLAeRUwxWZFWsHKr0SaqJJ7iFm3kxDZZ5pW9aH9d20oHBAbgwAgaIjvQMullaNBMX7LtaMwn%2BjezAY6pgGSG5VZWIHJ3Hplei6O46QLc6LbTRjCF9OyUm5lr8VO1U%2BH4zqvheNtZbQEwwozWI%2FSh2ntNQt6ndvXj5CL89ZTpuns2l%2FWpkQld9F1Z1BRNw3NECKORLZs4YEkrkPpBWFeCtoOHwPIa3nwCsLcfgt2gz7P8KsUew%2BS9k4XtRD9HTKc06eGViuWRolI26I6CM34CWZmmdRKIDes2ycubbI9R91%2Faekb&X-Amz-Signature=9f035c599a47ad8cead4a645d8a71c220fd26f3263fb829dea7365c285219b99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMIIJPF%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGufVuwEQeTgFGi7to7eLsMiU28VGP94sDkxUI0lfG2AiAdkHEPEdgkSDUhUQgC2NR1BnabtUephnnniG8v0D%2BMESqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BA5eKNbkt9blHQElKtwDv%2FYTw7lSsrSS%2FGL3ulli466p8RkL5t%2FqcDh3sy%2FplzFI2wFtgN41sfKvMNmSrHFP6KuN3y5sgniIdftLfbhGQoWu0c9KJintcG%2FJsVBmK071Tni5%2FaeNxF5OvLoEhVWxSrt7mKZ9PvwMDibbCNCeyVb205dc%2FTztq1TXt8HPhb6425ok97CIDCBjHbW2qBbnEg17erCFZ0JBA0N8EUYD9Kq8l%2BgN8t9t4Uj3%2F0xzqFJqwJHOpfAfprs3HPuUKfS5oznsmgSXlpLtI9Ls7urvZPNyxPBawIWJhSg306hPQTNbWclt56mEQlNQoarCvV7Lys6f1L%2BAjglUiazV8qpHfkXWu6Zwy5vtCOqmYmcI6mB8C5xnHTBzskLSpEG6h6cK49OdP00vGNMaey91zhwbRS1MGU2QO7m2FijStZYWif9r6yPcO7aZ87X3IGoLFYmxaZaF%2FFRRAr8QafvdLJ%2FHjRP7ph4wjsqOJIqTQ0tDSllZOF8qkx%2FPJJZYxxxJb3gX00nw655HghDkpCMta3h0XCDZYIHOnSXPvQ6hbfJv1iCQsOabMOFNzOLAeRUwxWZFWsHKr0SaqJJ7iFm3kxDZZ5pW9aH9d20oHBAbgwAgaIjvQMullaNBMX7LtaMwn%2BjezAY6pgGSG5VZWIHJ3Hplei6O46QLc6LbTRjCF9OyUm5lr8VO1U%2BH4zqvheNtZbQEwwozWI%2FSh2ntNQt6ndvXj5CL89ZTpuns2l%2FWpkQld9F1Z1BRNw3NECKORLZs4YEkrkPpBWFeCtoOHwPIa3nwCsLcfgt2gz7P8KsUew%2BS9k4XtRD9HTKc06eGViuWRolI26I6CM34CWZmmdRKIDes2ycubbI9R91%2Faekb&X-Amz-Signature=d91d220b172b931b565def31192974976d986d3c112d7ab0f9e28a157de46245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMIIJPF%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGufVuwEQeTgFGi7to7eLsMiU28VGP94sDkxUI0lfG2AiAdkHEPEdgkSDUhUQgC2NR1BnabtUephnnniG8v0D%2BMESqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BA5eKNbkt9blHQElKtwDv%2FYTw7lSsrSS%2FGL3ulli466p8RkL5t%2FqcDh3sy%2FplzFI2wFtgN41sfKvMNmSrHFP6KuN3y5sgniIdftLfbhGQoWu0c9KJintcG%2FJsVBmK071Tni5%2FaeNxF5OvLoEhVWxSrt7mKZ9PvwMDibbCNCeyVb205dc%2FTztq1TXt8HPhb6425ok97CIDCBjHbW2qBbnEg17erCFZ0JBA0N8EUYD9Kq8l%2BgN8t9t4Uj3%2F0xzqFJqwJHOpfAfprs3HPuUKfS5oznsmgSXlpLtI9Ls7urvZPNyxPBawIWJhSg306hPQTNbWclt56mEQlNQoarCvV7Lys6f1L%2BAjglUiazV8qpHfkXWu6Zwy5vtCOqmYmcI6mB8C5xnHTBzskLSpEG6h6cK49OdP00vGNMaey91zhwbRS1MGU2QO7m2FijStZYWif9r6yPcO7aZ87X3IGoLFYmxaZaF%2FFRRAr8QafvdLJ%2FHjRP7ph4wjsqOJIqTQ0tDSllZOF8qkx%2FPJJZYxxxJb3gX00nw655HghDkpCMta3h0XCDZYIHOnSXPvQ6hbfJv1iCQsOabMOFNzOLAeRUwxWZFWsHKr0SaqJJ7iFm3kxDZZ5pW9aH9d20oHBAbgwAgaIjvQMullaNBMX7LtaMwn%2BjezAY6pgGSG5VZWIHJ3Hplei6O46QLc6LbTRjCF9OyUm5lr8VO1U%2BH4zqvheNtZbQEwwozWI%2FSh2ntNQt6ndvXj5CL89ZTpuns2l%2FWpkQld9F1Z1BRNw3NECKORLZs4YEkrkPpBWFeCtoOHwPIa3nwCsLcfgt2gz7P8KsUew%2BS9k4XtRD9HTKc06eGViuWRolI26I6CM34CWZmmdRKIDes2ycubbI9R91%2Faekb&X-Amz-Signature=6eb69e356f860628fa9d6efc8db01fd59db3c5889821e06591dc9c0f6db18882&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMIIJPF%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGufVuwEQeTgFGi7to7eLsMiU28VGP94sDkxUI0lfG2AiAdkHEPEdgkSDUhUQgC2NR1BnabtUephnnniG8v0D%2BMESqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BA5eKNbkt9blHQElKtwDv%2FYTw7lSsrSS%2FGL3ulli466p8RkL5t%2FqcDh3sy%2FplzFI2wFtgN41sfKvMNmSrHFP6KuN3y5sgniIdftLfbhGQoWu0c9KJintcG%2FJsVBmK071Tni5%2FaeNxF5OvLoEhVWxSrt7mKZ9PvwMDibbCNCeyVb205dc%2FTztq1TXt8HPhb6425ok97CIDCBjHbW2qBbnEg17erCFZ0JBA0N8EUYD9Kq8l%2BgN8t9t4Uj3%2F0xzqFJqwJHOpfAfprs3HPuUKfS5oznsmgSXlpLtI9Ls7urvZPNyxPBawIWJhSg306hPQTNbWclt56mEQlNQoarCvV7Lys6f1L%2BAjglUiazV8qpHfkXWu6Zwy5vtCOqmYmcI6mB8C5xnHTBzskLSpEG6h6cK49OdP00vGNMaey91zhwbRS1MGU2QO7m2FijStZYWif9r6yPcO7aZ87X3IGoLFYmxaZaF%2FFRRAr8QafvdLJ%2FHjRP7ph4wjsqOJIqTQ0tDSllZOF8qkx%2FPJJZYxxxJb3gX00nw655HghDkpCMta3h0XCDZYIHOnSXPvQ6hbfJv1iCQsOabMOFNzOLAeRUwxWZFWsHKr0SaqJJ7iFm3kxDZZ5pW9aH9d20oHBAbgwAgaIjvQMullaNBMX7LtaMwn%2BjezAY6pgGSG5VZWIHJ3Hplei6O46QLc6LbTRjCF9OyUm5lr8VO1U%2BH4zqvheNtZbQEwwozWI%2FSh2ntNQt6ndvXj5CL89ZTpuns2l%2FWpkQld9F1Z1BRNw3NECKORLZs4YEkrkPpBWFeCtoOHwPIa3nwCsLcfgt2gz7P8KsUew%2BS9k4XtRD9HTKc06eGViuWRolI26I6CM34CWZmmdRKIDes2ycubbI9R91%2Faekb&X-Amz-Signature=3eac5ca2ea112dd3e289169641010221c8d43765d399f848e5467434bfbc8843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMIIJPF%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGufVuwEQeTgFGi7to7eLsMiU28VGP94sDkxUI0lfG2AiAdkHEPEdgkSDUhUQgC2NR1BnabtUephnnniG8v0D%2BMESqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BA5eKNbkt9blHQElKtwDv%2FYTw7lSsrSS%2FGL3ulli466p8RkL5t%2FqcDh3sy%2FplzFI2wFtgN41sfKvMNmSrHFP6KuN3y5sgniIdftLfbhGQoWu0c9KJintcG%2FJsVBmK071Tni5%2FaeNxF5OvLoEhVWxSrt7mKZ9PvwMDibbCNCeyVb205dc%2FTztq1TXt8HPhb6425ok97CIDCBjHbW2qBbnEg17erCFZ0JBA0N8EUYD9Kq8l%2BgN8t9t4Uj3%2F0xzqFJqwJHOpfAfprs3HPuUKfS5oznsmgSXlpLtI9Ls7urvZPNyxPBawIWJhSg306hPQTNbWclt56mEQlNQoarCvV7Lys6f1L%2BAjglUiazV8qpHfkXWu6Zwy5vtCOqmYmcI6mB8C5xnHTBzskLSpEG6h6cK49OdP00vGNMaey91zhwbRS1MGU2QO7m2FijStZYWif9r6yPcO7aZ87X3IGoLFYmxaZaF%2FFRRAr8QafvdLJ%2FHjRP7ph4wjsqOJIqTQ0tDSllZOF8qkx%2FPJJZYxxxJb3gX00nw655HghDkpCMta3h0XCDZYIHOnSXPvQ6hbfJv1iCQsOabMOFNzOLAeRUwxWZFWsHKr0SaqJJ7iFm3kxDZZ5pW9aH9d20oHBAbgwAgaIjvQMullaNBMX7LtaMwn%2BjezAY6pgGSG5VZWIHJ3Hplei6O46QLc6LbTRjCF9OyUm5lr8VO1U%2BH4zqvheNtZbQEwwozWI%2FSh2ntNQt6ndvXj5CL89ZTpuns2l%2FWpkQld9F1Z1BRNw3NECKORLZs4YEkrkPpBWFeCtoOHwPIa3nwCsLcfgt2gz7P8KsUew%2BS9k4XtRD9HTKc06eGViuWRolI26I6CM34CWZmmdRKIDes2ycubbI9R91%2Faekb&X-Amz-Signature=acddef8dac76b1a7e18369842492132d7fac3fb715cf80d6dd596335da6d518e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMIIJPF%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGufVuwEQeTgFGi7to7eLsMiU28VGP94sDkxUI0lfG2AiAdkHEPEdgkSDUhUQgC2NR1BnabtUephnnniG8v0D%2BMESqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BA5eKNbkt9blHQElKtwDv%2FYTw7lSsrSS%2FGL3ulli466p8RkL5t%2FqcDh3sy%2FplzFI2wFtgN41sfKvMNmSrHFP6KuN3y5sgniIdftLfbhGQoWu0c9KJintcG%2FJsVBmK071Tni5%2FaeNxF5OvLoEhVWxSrt7mKZ9PvwMDibbCNCeyVb205dc%2FTztq1TXt8HPhb6425ok97CIDCBjHbW2qBbnEg17erCFZ0JBA0N8EUYD9Kq8l%2BgN8t9t4Uj3%2F0xzqFJqwJHOpfAfprs3HPuUKfS5oznsmgSXlpLtI9Ls7urvZPNyxPBawIWJhSg306hPQTNbWclt56mEQlNQoarCvV7Lys6f1L%2BAjglUiazV8qpHfkXWu6Zwy5vtCOqmYmcI6mB8C5xnHTBzskLSpEG6h6cK49OdP00vGNMaey91zhwbRS1MGU2QO7m2FijStZYWif9r6yPcO7aZ87X3IGoLFYmxaZaF%2FFRRAr8QafvdLJ%2FHjRP7ph4wjsqOJIqTQ0tDSllZOF8qkx%2FPJJZYxxxJb3gX00nw655HghDkpCMta3h0XCDZYIHOnSXPvQ6hbfJv1iCQsOabMOFNzOLAeRUwxWZFWsHKr0SaqJJ7iFm3kxDZZ5pW9aH9d20oHBAbgwAgaIjvQMullaNBMX7LtaMwn%2BjezAY6pgGSG5VZWIHJ3Hplei6O46QLc6LbTRjCF9OyUm5lr8VO1U%2BH4zqvheNtZbQEwwozWI%2FSh2ntNQt6ndvXj5CL89ZTpuns2l%2FWpkQld9F1Z1BRNw3NECKORLZs4YEkrkPpBWFeCtoOHwPIa3nwCsLcfgt2gz7P8KsUew%2BS9k4XtRD9HTKc06eGViuWRolI26I6CM34CWZmmdRKIDes2ycubbI9R91%2Faekb&X-Amz-Signature=dfa18596ae8018a791ef6ef7117cfcc3918f995e70139c3f3ed59f0fbbc2023e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMIIJPF%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGufVuwEQeTgFGi7to7eLsMiU28VGP94sDkxUI0lfG2AiAdkHEPEdgkSDUhUQgC2NR1BnabtUephnnniG8v0D%2BMESqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BA5eKNbkt9blHQElKtwDv%2FYTw7lSsrSS%2FGL3ulli466p8RkL5t%2FqcDh3sy%2FplzFI2wFtgN41sfKvMNmSrHFP6KuN3y5sgniIdftLfbhGQoWu0c9KJintcG%2FJsVBmK071Tni5%2FaeNxF5OvLoEhVWxSrt7mKZ9PvwMDibbCNCeyVb205dc%2FTztq1TXt8HPhb6425ok97CIDCBjHbW2qBbnEg17erCFZ0JBA0N8EUYD9Kq8l%2BgN8t9t4Uj3%2F0xzqFJqwJHOpfAfprs3HPuUKfS5oznsmgSXlpLtI9Ls7urvZPNyxPBawIWJhSg306hPQTNbWclt56mEQlNQoarCvV7Lys6f1L%2BAjglUiazV8qpHfkXWu6Zwy5vtCOqmYmcI6mB8C5xnHTBzskLSpEG6h6cK49OdP00vGNMaey91zhwbRS1MGU2QO7m2FijStZYWif9r6yPcO7aZ87X3IGoLFYmxaZaF%2FFRRAr8QafvdLJ%2FHjRP7ph4wjsqOJIqTQ0tDSllZOF8qkx%2FPJJZYxxxJb3gX00nw655HghDkpCMta3h0XCDZYIHOnSXPvQ6hbfJv1iCQsOabMOFNzOLAeRUwxWZFWsHKr0SaqJJ7iFm3kxDZZ5pW9aH9d20oHBAbgwAgaIjvQMullaNBMX7LtaMwn%2BjezAY6pgGSG5VZWIHJ3Hplei6O46QLc6LbTRjCF9OyUm5lr8VO1U%2BH4zqvheNtZbQEwwozWI%2FSh2ntNQt6ndvXj5CL89ZTpuns2l%2FWpkQld9F1Z1BRNw3NECKORLZs4YEkrkPpBWFeCtoOHwPIa3nwCsLcfgt2gz7P8KsUew%2BS9k4XtRD9HTKc06eGViuWRolI26I6CM34CWZmmdRKIDes2ycubbI9R91%2Faekb&X-Amz-Signature=15a9c9b004ea8c278521be3e2933dcc7dcf5d3674f2c00c5999b62e834ecc0d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRRORK6U%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvyUJlwHTo2%2FpHIPMP6datlARANp79DKLxzLJz84mY9QIhAJCeFMhUGBMZVxfwLpYW5GJpnL6gYtN3DDjKRWGoydKYKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXq1ZaDkWqUaziUkAq3AOseZ%2B95E5S71G1Q%2FgzxbvSwPWc4ra%2B8A1WGr%2BbeSziq6x1boeSuB5NtILY4JvoJ6AFjBGRNacoOCkeywjfBt2g9U49xp9QeVVKt%2F40ssMW2XdwglsKfS8gF436OxXxuyH8QXvNDODAZmetMU60xxFsctfgEQ7oyTOJ4lkbtLRO7p%2BSiwW87uDSSXw8PwIrGB5ZYh7%2FcCyWpnXI4B%2BYtznceGSBSk%2Bh1rI4FgwO5dMiamjo7VbZp17vYRKKzPXQsIRyLO3utJhk%2FX7MnjHmIV%2FjVFuFMSvgaszBHnlNdwu6i%2FKRkEvzBafsJaLbSgdGg0P7EIrSkXmdXGZqOGYOz6HT5cj3qWMK7lG1rETBZDyMI604%2FNE7s3QLdav7nVB%2F4ezkR0YyQxrYf1WFPyTYgXrvp8yilPKb1JpHQjJOfTPEVpa%2BVqBAWJQuUrL%2BjHYmE0k2ZQ9rn%2FbA9HL16KLPkBZ67YgzMw2xrZkYPAqjtttJb080qt6hYaNY0KJvV5klPmBMnn%2Bseo5oITomtyj8GiY%2FhDTp20ad3ZEJGNM4HUksiA1tFlPer4NkKp%2FeJblCQiuZi1kV%2FskVH1EK4XkPJm9KSDLJXwrdRA3FmAjgRl4KSkvHLQ5XqO7n9eZHJDC5597MBjqkAf2sQN%2BCmJO5AU6NLSjLLrt134YD%2BVYFZd%2FKv0Q%2BlnHOcwX4e8yqNwg46qp3%2FyIMmMaKh2RoXr4fh%2BWjRD%2Frzj9o7wT5Kv7TqsCgcyilM4PIK32RHVY5hmdpPG5MFk2c5d2TQ0jvh%2BgylxyXusLjpdJzmZoecz0wgrrDKtgsHbxeWani2x3Mm04UwXNHNPmEqv9%2F0Xfa6j%2BGb6YhirGkgKMzllsP&X-Amz-Signature=2868c44e573ffc883a615f74b207d33b0763e827fe6c2f306b1c7dbda8c6a21c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLT5Q2YL%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPAPnBYpqyRxgfwnMLW3M7GnNFY5VD%2BRW%2BbJ1odGlKmQIhAOY0EO%2Fc7SKRuZ9BkcbMSU8sQQjzIKC%2BbXacLXfFGC92KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVc2wvKfysBtt7gHIq3APPdcxwk6iaTzABY06WjH31RHg6aecTV1Np4KFiHzJxSDL43YxgTYtlObfQM0eUvbyTf5UJOpAacmPBRoco6WP700igkXt0yWEkL4TUGm4lUeKQMt245xr4dcsJG31BWk01n6ShO4icH7FuJLNw785OTNBMwPY9lWH7Vw7I%2F6EwMSRfyjHEw7uX7h4P6EEKnMzj8%2BWyBQkh9hO977ljYdOUHTJ8aRxZ6MkRBeO3MNGIk2731LS0OZPm2eVn9FEBpTWpQEk36AG6pqGIhRYRZ%2BjBw2vo%2FVRdTViBzfiPMJJafNfmigvezYVBi9YU8bW%2B8zVQ7eVeEKspmWTyqmT9BT9QM54lTCAh2KQXsZ6rA7aRdrCCQ0Ww%2FN5iKeAt6e6A4bsGkO%2BLEhx6ruFX0F7PhE6pzXqMCiHwzQYmBww%2B0lUWkj2PdcJIJbqg76cPitkMqGdfLLOKvIrsdyz0TECB2QFNxzm0f1OJR%2BNuUtqVLlBh7L%2FeiY%2FrY%2BPhzAyKnEt585NdEaOUF1JqNIZnifA1Bhe%2Ft7B6jTrId%2B9eXDGKaAeTLeGmXU9W1ajBbBu4cPPd9S8Hpsy5KLBQJJPvsfERZ3n7xV0S0JoEoplRXBWZwp6%2BrCejyNJpQdInQjBywzDL597MBjqkARVrYUUWJe3q9hoJ6pcKBb6fmG%2BELVUEOQxNHc66iGzJ8hlpjSscJ7orwHowGwdtsVPdMrQ55MqdMm%2FBrFByEYPc3mDZZTr9sGHtBSf6qxyZqyayves5JNqFCm56u7VIAerxQhW1zIIa44eS%2FUYKpU%2BtDHE2i9cH4a4e67D3dHxi7h%2FL%2BzDh%2FKeeNZCPIPeoXGwvu%2BHBtHFSnJEUDXtIWMALggod&X-Amz-Signature=82ab58d3f716e8411d57ad29c75dbbd167fe2f781049cc263eac7c3bd9263111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZGXHUBF%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9u48KFv95JS5eZFlVdspIE8%2FYpq8gcFlSGtrVjbhFwAIgGh4fj1CgjWjF4zKpTi0yjAFB9CDti3M7Q3OiNPuOjpwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEW8IP8piiVnZ6lc5SrcA22R3oCUz9vnXiUc81rDvdxrpqWobMZbbOQSWSYLsaLW5j09MNsqU%2FE%2FmYFIvR1w8qq5DTPRwgf1NgbDfw2Y8ynyAlaYux0ODtovRFOCs4kCQkg1jiJ9Rj4EbRlW%2B0iHJ0fZB4hhf49JKS3reywqdpEzeLxYnWd2HM7d2OkI8nTEaic4dhinadg4At5zueLGGAtAMGH0FODfbScc1kC18wXMzQm9s9idQYR4pwDm7NNSQkMeh%2F%2BB3PbtrLtfVABS9pN19WBA4Me2p8NVxgYKX1F2ztXCj2PXH%2Bvt7sfPs209qJmB0lTX4V2sk9u9Sn6uXFPVQDege74PNmckCjgguzT7l4l6fvpVTf8%2BFPNYTEUtNJ9WeP6KFV0LLkDKkgxXhf6l%2FLz6Ob1I%2FefAyQ57550%2BFQQ%2B17ygqUn%2FlM1FxqFN2xCeLAr60Zrr0oSycyl1873km89ClAXJDQec%2BGcaeG%2BX6UEK6yXE3Mu0IncY%2BIcrCBuLsA%2Fjk5UhXQ7h6HrR9Ctqx0UUWtp5Yfx6b6dTsTbaBgyjjsUtqvRLdaTJ2%2FAcJMV%2F4RVUwJKBPbS8LHddKKRJ9Z5qA22Qi7GjDM7tDRSWS5X4z01hq95%2FVJSgXGKhKpMpdBRUTDK6NgMxMJzo3swGOqUBmP0%2BPqqerZrB2jK6aPysjIHWID%2FDXsFhxRZ2fu1dkltqtIrBtrBxlkD8He4%2BbkbjzC%2BeLVbtcqNwhVofr%2FS4Mlq9ZHOAUIuukfMMrw4Eu%2FODMSImS90BE1hQkSZ4FknKpx0f4N8fZx%2BXc%2B9KHOQUY49AxuMJgMF9VlS%2BWM9KSNzkh7hTuyuNv0p5yVwOkg0oqPwcj5iuKCCwGAGVcoPjUgcTvMJA&X-Amz-Signature=1f405cd6d473d3c595afbadb5bf693f5e0feec09dc6ffd12e551fd3ca9fc270c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMIIJPF%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGufVuwEQeTgFGi7to7eLsMiU28VGP94sDkxUI0lfG2AiAdkHEPEdgkSDUhUQgC2NR1BnabtUephnnniG8v0D%2BMESqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BA5eKNbkt9blHQElKtwDv%2FYTw7lSsrSS%2FGL3ulli466p8RkL5t%2FqcDh3sy%2FplzFI2wFtgN41sfKvMNmSrHFP6KuN3y5sgniIdftLfbhGQoWu0c9KJintcG%2FJsVBmK071Tni5%2FaeNxF5OvLoEhVWxSrt7mKZ9PvwMDibbCNCeyVb205dc%2FTztq1TXt8HPhb6425ok97CIDCBjHbW2qBbnEg17erCFZ0JBA0N8EUYD9Kq8l%2BgN8t9t4Uj3%2F0xzqFJqwJHOpfAfprs3HPuUKfS5oznsmgSXlpLtI9Ls7urvZPNyxPBawIWJhSg306hPQTNbWclt56mEQlNQoarCvV7Lys6f1L%2BAjglUiazV8qpHfkXWu6Zwy5vtCOqmYmcI6mB8C5xnHTBzskLSpEG6h6cK49OdP00vGNMaey91zhwbRS1MGU2QO7m2FijStZYWif9r6yPcO7aZ87X3IGoLFYmxaZaF%2FFRRAr8QafvdLJ%2FHjRP7ph4wjsqOJIqTQ0tDSllZOF8qkx%2FPJJZYxxxJb3gX00nw655HghDkpCMta3h0XCDZYIHOnSXPvQ6hbfJv1iCQsOabMOFNzOLAeRUwxWZFWsHKr0SaqJJ7iFm3kxDZZ5pW9aH9d20oHBAbgwAgaIjvQMullaNBMX7LtaMwn%2BjezAY6pgGSG5VZWIHJ3Hplei6O46QLc6LbTRjCF9OyUm5lr8VO1U%2BH4zqvheNtZbQEwwozWI%2FSh2ntNQt6ndvXj5CL89ZTpuns2l%2FWpkQld9F1Z1BRNw3NECKORLZs4YEkrkPpBWFeCtoOHwPIa3nwCsLcfgt2gz7P8KsUew%2BS9k4XtRD9HTKc06eGViuWRolI26I6CM34CWZmmdRKIDes2ycubbI9R91%2Faekb&X-Amz-Signature=3a27bf9d28e4f199d9ab16ba50384811c2a5efcf4b16b85ff14283eaa4e0f120&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYZJLPLJ%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwoAWp%2B73a1ofc6JmcWU5zke3%2FFxyKwJCs5M6B71Dp0AiBiwT1z7rCCh2YNpf%2F3S87JZYbjwT%2B6QGvk0hUx2dbc3yqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Htx7Xyf8vpAWDeCKtwDdQB7082EHLPhqCaxHsYUQne9aPugNXv7m1MDBz7ODzQuMm%2FNRsVWVQel%2Fr%2FbOUqBlMtIZJY%2B8LYWwslJ5wiMfGmr%2F1zi0AvWnT%2Bi2vPnIPEIEqtmXOCAHjgLOEhh8Asdyn1Jw%2Bi7RYFtnSu3QiwWLWTmTqxveoxHQkVDGZIndtI58ztWNJ2hbs%2FZPXBw281P9D%2B2dIK9gpNgxXQADdQUsgf5HK4SOCNqQrlpYx%2B51IwWjW0z01Pb1CkeRMyG0fs%2BVB6syxl7Y2qN8EEEE7PeCCWR6ZVWhJHkIEwssZVF90%2FBY82JxrvMFkCNl1axVbMIiG%2FECi47ZRPUl0SvCr3EoYjIWa8pUDbOlWH8KFXTzpK7rZHPmA9fY4bNPq19IXuYGb1YAGEDuc2jTpJSh%2Fy0C1oeTY5qGSfvYmvxfIs0qYtsh9ewFfbq5A7aczqOjgsMMzwaYbg0C7utJheqOE%2FoYC8ge4gug%2FDrE7sHgfdXTBIkmiHZFpFucr4eeygnk4jMQU2y%2FfB3OKAIjUA4lEewcR2iuUhB9CnBwJALUHiOjN1jSQI%2FXUatgVKFcTGsYtoEjtrUye2iu9%2BHU92Ta%2FNhm9CCHdKNDArvUTHrn6DVSJK8E%2FVv%2FO0PVb7nhZ4wjejezAY6pgH5x1lV7v0YSD9LWBad4BVcHxzvH15NFPDSZngRkdhxZEYt5hJEyICMgy2dalSqWs8XI%2FkqHFstVNqISjM0Lr1%2BMvdGcW9ueO5CeotvmmHiOi1g5rg2H0oLTX%2BDX%2FHwtE%2FGUZQyt%2B7QtesFJ%2Fk8Vu8%2BJoosIBiq8KBiXU3rhMoeZjafcFlSqaASICQV1u97zO9NIlCJvCUo89OVWiT3VUgzngmOZ%2FyX&X-Amz-Signature=f16b5b14729cf9865172bb3e74c3cc1738aa85973b194a158dda8e0113111346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMIIJPF%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGufVuwEQeTgFGi7to7eLsMiU28VGP94sDkxUI0lfG2AiAdkHEPEdgkSDUhUQgC2NR1BnabtUephnnniG8v0D%2BMESqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BA5eKNbkt9blHQElKtwDv%2FYTw7lSsrSS%2FGL3ulli466p8RkL5t%2FqcDh3sy%2FplzFI2wFtgN41sfKvMNmSrHFP6KuN3y5sgniIdftLfbhGQoWu0c9KJintcG%2FJsVBmK071Tni5%2FaeNxF5OvLoEhVWxSrt7mKZ9PvwMDibbCNCeyVb205dc%2FTztq1TXt8HPhb6425ok97CIDCBjHbW2qBbnEg17erCFZ0JBA0N8EUYD9Kq8l%2BgN8t9t4Uj3%2F0xzqFJqwJHOpfAfprs3HPuUKfS5oznsmgSXlpLtI9Ls7urvZPNyxPBawIWJhSg306hPQTNbWclt56mEQlNQoarCvV7Lys6f1L%2BAjglUiazV8qpHfkXWu6Zwy5vtCOqmYmcI6mB8C5xnHTBzskLSpEG6h6cK49OdP00vGNMaey91zhwbRS1MGU2QO7m2FijStZYWif9r6yPcO7aZ87X3IGoLFYmxaZaF%2FFRRAr8QafvdLJ%2FHjRP7ph4wjsqOJIqTQ0tDSllZOF8qkx%2FPJJZYxxxJb3gX00nw655HghDkpCMta3h0XCDZYIHOnSXPvQ6hbfJv1iCQsOabMOFNzOLAeRUwxWZFWsHKr0SaqJJ7iFm3kxDZZ5pW9aH9d20oHBAbgwAgaIjvQMullaNBMX7LtaMwn%2BjezAY6pgGSG5VZWIHJ3Hplei6O46QLc6LbTRjCF9OyUm5lr8VO1U%2BH4zqvheNtZbQEwwozWI%2FSh2ntNQt6ndvXj5CL89ZTpuns2l%2FWpkQld9F1Z1BRNw3NECKORLZs4YEkrkPpBWFeCtoOHwPIa3nwCsLcfgt2gz7P8KsUew%2BS9k4XtRD9HTKc06eGViuWRolI26I6CM34CWZmmdRKIDes2ycubbI9R91%2Faekb&X-Amz-Signature=f96994b936a855d2bdaf2d7d08a763fea288af4cfc0e7fb36ba97d7c00156153&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GPVHK75%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXAKpWw5V42eB7oKlT5ydTKiX%2Bn3GbDU7OjpCCgc6LpAiAfP7ObGRFJ8MQI%2BUy0lU9JG%2BXStLGT%2FeIADDYsDRn1XiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5Rwec4mjijNkNtPyKtwDAmMgjsU4TBic9acJlb0K%2FCnOtDlSU3QJ%2FCpu8URBtnvRrsWJPJBBjRI%2FnQzD%2BLbrvfyZ0WXuyE%2FBSCpBvlYZ4MOsuqormRGw4IPbuWkkFpvI6OMrWSSlO6wbKO64zwQv0xK5YrCkLBfVYY4uuQw65Ark8fafNIEHDtypKMdAqcAIEdKp9LDWtl2PGpxJMAlwpdVZ5Gpcchw6VfNHeFR3calI7R6CfFapB80gb2KZDntmQokBaPIBLfff6jcQc59g2FU39TrX66lCT32Fm7VKzVUPX6b19B05ElzpKStB7SQgZewxv6zvAi2qJurSdHqLirrc9IULfRg1HAsi6g129C8MfEIgp41ZYHMRzIn4sLd1xfgZMenft0AnwmNeo1nW%2Bd7gaZlqUYyy8WkKy1K%2FGW1bEyiTSKSBqzvTzvA6qD%2F%2B9bK3NNLiSouB%2BnIw0eyHBjOsgcw3O2plI9HBdGytfwbwgq87Brngh06zAjXBgiLdEdzyUr4YSMdEjrKuxnNaikVrAwSZ9DX7YnXch6zbyHJiUmp%2FPiYC8ioJftoaBt2bceT1xki6ESHqmZ%2FtWtt0M4kwd7WqjO%2Bbe0NDgC%2BCCdpb8qSuEADUE%2BAu9W11fkXYFF937pXwE3sZgJcwmujezAY6pgEiEqaHmbl4nNYSt1SBC6kAOX8QbRkmDsDE%2B5xB9p7pjVvQj8NMEDwGeE5Vrf%2BzAIiLI67Gef9Cxqb5B6XohmCwqVe2j5uXoiY1WrpMJyOM%2FvLxQUBWPtgwEqbxW4gRIJ0v42VF4MQoVACIgkDQpDqDcBfh2s7xuXTcqdGgIVfHX7Q%2BO%2BK3UvERLOU0FdzUtYEPfhz7x0G7U7EyaJo7ZGr0F0%2Bv6VXr&X-Amz-Signature=2565c6fb79a904fedccd1b3f8e9e2a0d99c98059afff1cc0ad57f81041f5349c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMIIJPF%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGufVuwEQeTgFGi7to7eLsMiU28VGP94sDkxUI0lfG2AiAdkHEPEdgkSDUhUQgC2NR1BnabtUephnnniG8v0D%2BMESqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BA5eKNbkt9blHQElKtwDv%2FYTw7lSsrSS%2FGL3ulli466p8RkL5t%2FqcDh3sy%2FplzFI2wFtgN41sfKvMNmSrHFP6KuN3y5sgniIdftLfbhGQoWu0c9KJintcG%2FJsVBmK071Tni5%2FaeNxF5OvLoEhVWxSrt7mKZ9PvwMDibbCNCeyVb205dc%2FTztq1TXt8HPhb6425ok97CIDCBjHbW2qBbnEg17erCFZ0JBA0N8EUYD9Kq8l%2BgN8t9t4Uj3%2F0xzqFJqwJHOpfAfprs3HPuUKfS5oznsmgSXlpLtI9Ls7urvZPNyxPBawIWJhSg306hPQTNbWclt56mEQlNQoarCvV7Lys6f1L%2BAjglUiazV8qpHfkXWu6Zwy5vtCOqmYmcI6mB8C5xnHTBzskLSpEG6h6cK49OdP00vGNMaey91zhwbRS1MGU2QO7m2FijStZYWif9r6yPcO7aZ87X3IGoLFYmxaZaF%2FFRRAr8QafvdLJ%2FHjRP7ph4wjsqOJIqTQ0tDSllZOF8qkx%2FPJJZYxxxJb3gX00nw655HghDkpCMta3h0XCDZYIHOnSXPvQ6hbfJv1iCQsOabMOFNzOLAeRUwxWZFWsHKr0SaqJJ7iFm3kxDZZ5pW9aH9d20oHBAbgwAgaIjvQMullaNBMX7LtaMwn%2BjezAY6pgGSG5VZWIHJ3Hplei6O46QLc6LbTRjCF9OyUm5lr8VO1U%2BH4zqvheNtZbQEwwozWI%2FSh2ntNQt6ndvXj5CL89ZTpuns2l%2FWpkQld9F1Z1BRNw3NECKORLZs4YEkrkPpBWFeCtoOHwPIa3nwCsLcfgt2gz7P8KsUew%2BS9k4XtRD9HTKc06eGViuWRolI26I6CM34CWZmmdRKIDes2ycubbI9R91%2Faekb&X-Amz-Signature=09d45a26be6096b8fd8f9a3bff0567cec2b001350de3eb603d74c49b9a5d10d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHYVIHV5%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKc7Tu6HQ28ti2WYAt7XD80IJ0Lvd6v1Q11OPFWxHKqwIhAKlVz3C%2BM3yccM2Hkld0wi7LtIws07xVYSBXsfu8SyEAKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igynx0dgEl7BVFxMikIq3AM8Z0hcRJCJEFaqCVpJFe74gYIKxtLiB6fmNh%2B3tzImIDo9cku5Be8TLS45SUd9e2ZUpNAH6Pxy3icUwHY7N2yeAby22Jn3%2FSznYzFOjRaPt3TR1ucORRe%2BjjrYQBYITBlaUO9W2mHATbhSFPXcb%2FOgY5Rw4%2Be7HIZ42QIIVjY%2FXYCLX8uwKFfg9x24OKPcu1edS0zndLIc9nBaVNScFMNBlyGN2p6VqglKyyzT3ln%2FUzysY8QK7CS7xwlTngA5%2FMUOIu1AKsZ%2Bvi2sJKzJXQhRP0SC%2F0%2BhERrcEe8nspupkwrdzy%2Fl9h7SmphiexkahWTsM5aldQRwLQUw9nR6Ue93P0zberWXeZ3CxXEC3miud5BTQsqLEx%2BOKYPFEBKE6DvxL9mzXlGsAslnsIZXdtg2m01wTDvrqhOTbPzWU6UUP2oO1y%2BL2nAcAzJaViEfgDadE7%2Fr1Qv3ZbpojuVRMRGKnqk8LsIJKCIZlyWzIeZLXfcXVjdlSVe54Umvf2ul70pl6MXS9r%2Buk7yO%2F4hIBC5CqgX8Dp6beHsVm2%2FZWawe9Bz6LG1UMXk3dVCIdLnx3i%2BU1y1x%2BdKzKxvEqxGVUlqLWXpsGTuIxMQ0y6BMPhNMyLQ%2BZrQrBtM8ZBOLqjD%2F6N7MBjqkARxCCunwlijV1vUOMVqRagG%2BBsr05Hf909%2Fs5zlNWaJ5RGL%2BBIoTOzl11S0RHdE4jPZs0iOSFkczYsnGRoc77T9AGGn2A7tukp0fzZBuuWIbGKJtdjvs0zfZYw60MuWLE4OBgpaWriRE62y9U2GmR%2B1p5BxlV13reFnbdbkxn6bRjHAyn8TzFRA1lXgN2tJzwmrTxNScItprirkhqmBolTGAe8Kb&X-Amz-Signature=fbddde76142bbf2cd7f40d201b510d5162275524db8d92ea99e1f10d7a5535fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMIIJPF%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGufVuwEQeTgFGi7to7eLsMiU28VGP94sDkxUI0lfG2AiAdkHEPEdgkSDUhUQgC2NR1BnabtUephnnniG8v0D%2BMESqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BA5eKNbkt9blHQElKtwDv%2FYTw7lSsrSS%2FGL3ulli466p8RkL5t%2FqcDh3sy%2FplzFI2wFtgN41sfKvMNmSrHFP6KuN3y5sgniIdftLfbhGQoWu0c9KJintcG%2FJsVBmK071Tni5%2FaeNxF5OvLoEhVWxSrt7mKZ9PvwMDibbCNCeyVb205dc%2FTztq1TXt8HPhb6425ok97CIDCBjHbW2qBbnEg17erCFZ0JBA0N8EUYD9Kq8l%2BgN8t9t4Uj3%2F0xzqFJqwJHOpfAfprs3HPuUKfS5oznsmgSXlpLtI9Ls7urvZPNyxPBawIWJhSg306hPQTNbWclt56mEQlNQoarCvV7Lys6f1L%2BAjglUiazV8qpHfkXWu6Zwy5vtCOqmYmcI6mB8C5xnHTBzskLSpEG6h6cK49OdP00vGNMaey91zhwbRS1MGU2QO7m2FijStZYWif9r6yPcO7aZ87X3IGoLFYmxaZaF%2FFRRAr8QafvdLJ%2FHjRP7ph4wjsqOJIqTQ0tDSllZOF8qkx%2FPJJZYxxxJb3gX00nw655HghDkpCMta3h0XCDZYIHOnSXPvQ6hbfJv1iCQsOabMOFNzOLAeRUwxWZFWsHKr0SaqJJ7iFm3kxDZZ5pW9aH9d20oHBAbgwAgaIjvQMullaNBMX7LtaMwn%2BjezAY6pgGSG5VZWIHJ3Hplei6O46QLc6LbTRjCF9OyUm5lr8VO1U%2BH4zqvheNtZbQEwwozWI%2FSh2ntNQt6ndvXj5CL89ZTpuns2l%2FWpkQld9F1Z1BRNw3NECKORLZs4YEkrkPpBWFeCtoOHwPIa3nwCsLcfgt2gz7P8KsUew%2BS9k4XtRD9HTKc06eGViuWRolI26I6CM34CWZmmdRKIDes2ycubbI9R91%2Faekb&X-Amz-Signature=0d473b09ccd131335995dfc9f34dddfbeb470c7b6ccb85c3458c41500df6483a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYTEYCV3%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6sJl1hPOSgv3Dc97uICK5UFXt8Utyjb%2Fo0KgGlBHsKQIhALAZOdT5rxvQ443vYy0bpdAETZU4J0fB3w3xdA4dEDYQKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6DbgysAR4aKWKVbIq3AMtHijhrYdIl%2FNIy5Hj6oU6010dpgxQ8TtNoCJKeWKwWxbjqIXH4fxaS%2Fl76wPOAxz8fneLCb8VQnZMjPpkS%2BH0plyFJrWQUndBkVp5%2B5erQtmr0VthHofMKspVJLjPDZoS1GG42wmuip5NFJcJTo%2B8E8PKDynFKRyLOhJVm58miP%2BIaf5oDbTsLiGFh9AqqjfBqB%2F7E0mJtJ3UGjcuqBlHrRvXPaQjCCv75%2BSB%2Bawu8lwfJiLtnkTmFZ0pR%2FsDVf2M31KsuXSjlUHq%2FJYT6TEwIQXea0hclyEO6BWEexYX02pV19y21BOUHMPOkYGue8arb5BSB7X%2FWvahkVc1CxpuI79sjFHlEvdxQoKXGC3TRcq3OCm9W%2F%2Fv9YdpEuPeWx4TySqF33m%2FDV9ctZV%2FwJZM4AmzUBe%2BfkD3EfZw8Q3iwgaVniBreidvgHAC7ayRRoVQt4zMv5caJ8wAvwrY1p%2FALHP7OZFOw4KqwS81R4YprZ%2B%2Fd8qmeC1AoWjlGVYsqBV%2B76QfImibh74qySlyW9WIibFH7QiEVE28lE874UiiK2TIWKZ2yi7sSa3tLGRDuWHiqAmmtA6fwDJgMU%2FQHDqboBQ%2FJJHlL0MOV4NbLfGZKA%2BOwgI69ITzyL1KZTCE6N7MBjqkAXcq2VaF0kQgJPGQYyXi%2B0ekshAVBdqvValrDEkJL7hKVC1uui%2F535EW%2BzLO1VwPwyx6%2Btm%2B1U5cVKOzwVfMpS2IlL7efU7N57A2p7jXZZcQkVaf4xoGZ04c92EROABrPIOgJN8GiWW%2BZZK5jaLJdOOfW4ZxrsT4FPt9eJRyAivhxdqbpYketsBPNCFZVKRO%2FgByYmbX8TJaiyWCNxxRNlXp3lLx&X-Amz-Signature=9cc6aeef94061d663327883dbfc9dd2e4b8a9a9856862f326e4c2fc027c40e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMIIJPF%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGufVuwEQeTgFGi7to7eLsMiU28VGP94sDkxUI0lfG2AiAdkHEPEdgkSDUhUQgC2NR1BnabtUephnnniG8v0D%2BMESqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BA5eKNbkt9blHQElKtwDv%2FYTw7lSsrSS%2FGL3ulli466p8RkL5t%2FqcDh3sy%2FplzFI2wFtgN41sfKvMNmSrHFP6KuN3y5sgniIdftLfbhGQoWu0c9KJintcG%2FJsVBmK071Tni5%2FaeNxF5OvLoEhVWxSrt7mKZ9PvwMDibbCNCeyVb205dc%2FTztq1TXt8HPhb6425ok97CIDCBjHbW2qBbnEg17erCFZ0JBA0N8EUYD9Kq8l%2BgN8t9t4Uj3%2F0xzqFJqwJHOpfAfprs3HPuUKfS5oznsmgSXlpLtI9Ls7urvZPNyxPBawIWJhSg306hPQTNbWclt56mEQlNQoarCvV7Lys6f1L%2BAjglUiazV8qpHfkXWu6Zwy5vtCOqmYmcI6mB8C5xnHTBzskLSpEG6h6cK49OdP00vGNMaey91zhwbRS1MGU2QO7m2FijStZYWif9r6yPcO7aZ87X3IGoLFYmxaZaF%2FFRRAr8QafvdLJ%2FHjRP7ph4wjsqOJIqTQ0tDSllZOF8qkx%2FPJJZYxxxJb3gX00nw655HghDkpCMta3h0XCDZYIHOnSXPvQ6hbfJv1iCQsOabMOFNzOLAeRUwxWZFWsHKr0SaqJJ7iFm3kxDZZ5pW9aH9d20oHBAbgwAgaIjvQMullaNBMX7LtaMwn%2BjezAY6pgGSG5VZWIHJ3Hplei6O46QLc6LbTRjCF9OyUm5lr8VO1U%2BH4zqvheNtZbQEwwozWI%2FSh2ntNQt6ndvXj5CL89ZTpuns2l%2FWpkQld9F1Z1BRNw3NECKORLZs4YEkrkPpBWFeCtoOHwPIa3nwCsLcfgt2gz7P8KsUew%2BS9k4XtRD9HTKc06eGViuWRolI26I6CM34CWZmmdRKIDes2ycubbI9R91%2Faekb&X-Amz-Signature=2957eba5cf80b817ff3f6ca0294db34cc0c7d53086c58c27ef21accc2bdef61b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUXTB5YH%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvVYOxG4NhegigOek%2F3WPsFhGI8j65Thbs9jVqijksdwIhAM18lKR6hQK8eopr%2FJxyT6f7GMpeaPm5bFLJUx7E1c3WKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeNLY7F79biwqrHh4q3APi7cD4%2B7GYCGr6y%2FxEblkkIp4w4s0XpbQBPekYogrthvBdOz1pYSK1ljTFHLEjZHL9QZgGToWVE%2BX6NwZ%2BUt1Ma%2F1BFus%2FIh1P8tsGnSHaTR1aWzOfjwLcKY2CfaYr1bFadPjP0R54tjPN5YnhRJCtto1bHhpSAgDHCF5NIPhYnGn4VJCaC%2BHLjzFD%2FlBxjXQlJj3l8rDQhblLNE50PGnVbmtg7HUMRGw7W0Q45z49Nn3vqODvYQrj7QBrDX9udHEm6OR%2B9hLqdubMooAUS2T0qbmWKkYd8EC88SyrUoo1EwGwikoLBAzL6Igkc5M9Z15YTDnFkkq15CoeheoGwrYM33%2FiHHqcjbXRyVix6lxyC72qJ%2B6fIjGp%2FQLBYe0PoBHhS6pgi%2F0re3DYeBcd%2FiiNmr%2FvkOpoV4Kek61tj1%2Ba7q0RIs%2Brv31OKYnDJIU5gdMAuf8i1qQ2loCz5oyzdcZt98NC6apC6dMti2G63QrelByezEMuUgg9xyGIq9NLYur%2BLaBXy7LOqWQP5axBFShgDbWHap6KO4k2PP59C1VQNNHxjZfaP5r2DrKqyyh6TDFpFQpF2lt9BAia9HzDCCofutl9lhw6RLUWe2cV5%2FF5SqSxi%2FXdCORFw2nTWzDc6N7MBjqkAQ3PyeatSh%2BYJjFK2gUNTvYJjK4PkcGIy2tSj2PwO8NRPPlFnHSeXFom1vyPNl9mCyekdUNQPTBSyLU7PNQ9ekRukNRFoyQ1vMChEVysFMPX5WtLtToIic%2Bm533j2ymIPpYcs9MraL9j531o8r%2F9aHU06eh6DRkQFVFvroWGSrzEEVGkk7uExFoW9upNt6hllZ24Dz9AHk9wLZvDN1OACCfu%2Fgi2&X-Amz-Signature=6918381c96206c5eab264d9e65eab83a3bd6945ca68e2f49fbcc6b457f75dd07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZC33GY6%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0UzO9QHbRb8ub4NUPSMJRo%2FxNygitzl3UwTgm8W7ZEwIgeye7QPxwas5CTy5rcKEDA68hq30KYOZobAz3irjHgs8qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuejdBsdB3Z75UsyyrcA4Tg%2B%2BzrVmM7h7jhgdtSY5mBkYnegPs9lHPmCeNlpOoVZOiR7rvyFHmHUbjUzTV3nyvrQ4CTo2zz8Cpm8JcHDPj4sjXxWYhRkHPqjCbGgpsZgVbhzJYQ5Zb7%2F3R9RiljoZlQGDGtNss4BFknqoVLUVoUGlaL%2FpyjoQPvdYTDDoprYZMjxroZctbulgkATCtLjpsa0NlakYJ%2FG7kukGqiyccI163hETn4ySpgTwBcpcswiSw1A2VSAVeTyk8ZQFutJvGS4bUbC9reE%2FBeF1md3saAxue9TImuL2zRLg5UYfmeYED1w%2FzEoyXe%2FVMTY0jkh115UXu1hQESKD0Y1OdX%2BH5GAdm6RLWZYe3e1tkebUDJ6lVxlBSsvTU%2Bx%2BOFOc9TbTEf1FV2OE8s7dj%2FZQAgEX%2BS5xBwZVqLY7Tj4lL03S%2BKIM9sMxQCj4JdMctTZWG7w9DqV23Hai22eyr6yuwlYDPQ2zys4sSMtk70BLGdK4g01SH05UNRUGXlhgTpinxcGHtsewgnd88OsFKxdhMuLF5%2FfWIzWqxBO3LGmVvLcFyiF8TLz4BPmU6Bo5XYfwPyL72m8flpQ7Jp8A%2Fv9uQqRTXjWRWVWaUd%2FEG2y%2BDkp%2Bq7u79vNu2fCTmf9iQxMNfn3swGOqUBuycWgGeLC6Qn7pTDoKLu8HCKH3aTqnFlMZu0dt1lGresZxSgc3FL%2FT2cB2pWjjNh7fQ%2FDLw6DUAChaoxuqmNulHJIvJyORdVHDwFLYWFnwVDhwqPamfM7kk9sufatizNrmaGO9aw8wgkYFNKDY0Swt3VQOnO5v4ijXgirUxGcfJYY8mA6bc2ImFCRCGSor396Ee5abhjhKqPn4lH5pe9lhdyftqn&X-Amz-Signature=1c981e89dfb73eec4707249bb648849e6d964f16637403b42640b465e9bcc3f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAFI6EUB%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiC%2BMfXneZicwQ8kr80fXur1z0hGOPoleGY0DRoGBhSAiAAwbhEAk2lyyn2UcOaeFHZRHwCqhNc4arfEIbOcF5KgiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwuS0hd%2BWq8eSSZLxKtwDS3inGd27SVVj0O190fBit3fllwQcSSarT0h%2FvE6PDcNzklJdtUYc7qXPAwqtT3ByiBjnko07BG%2Br%2Bx6OuAFqbeXPUSuaNb125omR6zbGn7nmsze%2Bj7%2BCYcvMHjBRi2%2FSy5vNQELxMJG6e00MKOcZtPxZICnhnx61BWW8ex%2Bj%2FDOKP%2F63SOkD0eytL3UjmYzZ6v%2F3cNq%2FxJF9WX%2FMtWJsL7ausO%2FFURy40i9erl1GZZHLmFUhZ1NQqMIpKXlzWFX2boq8qUzNTxmmIvx6TLnuNQ9lik8k8vX%2Fqjf185HLo9F7SH9wKanFHb2N9XkUeuRN7gznmVXj0eWnkIBYZl7zhl7t1rNOkYSRvsswN00UvxpHpny95eYh%2FJ55YrSEXyJZ6%2BVDA3lQPoL52zNBklyR01bZMA4D46woZDoEEyRfyG6oFiXod9KI5PWbDsKfXDPhhlqFbxK8FynWP1U7K4PeUSZlmirjVevV07S9u%2FOs9dnxsOH0CINwfKGDZBE6IWZn6E6G8BzWS0SfJLdb%2B4b%2BsZ2jg9L7V5QftJLevON12ZFnJSfmPIuAYpjHZQCtKwOHTtkn%2FF8%2Bag5aZoetqh2XU19lX%2BfvNP3NKnqwBp%2FO6iyHSsPLKKpzv8iG8IgwjejezAY6pgEhQsHKHRQSVdfrm2a4Y3%2BvT258LVb9sWLIIEW6y7Hju8jwfSRR0obPyiqUN%2FQ0SMQgBDKXZBZwDWIZh5sECZypImukrkzM%2BTOT2aAxyPj1YzyqNNrWex28Q9jA%2Bw95QWC1NcZWILaKwswIGYgouHH6Vm1q6WRMdBT%2FNa7TlqRu8PAdkK9r3Q1E7q8aPh5sGxLPZin4nPwiHmdvpgFhdOzG0dCKIVCn&X-Amz-Signature=e1a745aebaddf7118bc9e34bdfef9261173920620c085fc23c98dfd081402573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMIIJPF%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGufVuwEQeTgFGi7to7eLsMiU28VGP94sDkxUI0lfG2AiAdkHEPEdgkSDUhUQgC2NR1BnabtUephnnniG8v0D%2BMESqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BA5eKNbkt9blHQElKtwDv%2FYTw7lSsrSS%2FGL3ulli466p8RkL5t%2FqcDh3sy%2FplzFI2wFtgN41sfKvMNmSrHFP6KuN3y5sgniIdftLfbhGQoWu0c9KJintcG%2FJsVBmK071Tni5%2FaeNxF5OvLoEhVWxSrt7mKZ9PvwMDibbCNCeyVb205dc%2FTztq1TXt8HPhb6425ok97CIDCBjHbW2qBbnEg17erCFZ0JBA0N8EUYD9Kq8l%2BgN8t9t4Uj3%2F0xzqFJqwJHOpfAfprs3HPuUKfS5oznsmgSXlpLtI9Ls7urvZPNyxPBawIWJhSg306hPQTNbWclt56mEQlNQoarCvV7Lys6f1L%2BAjglUiazV8qpHfkXWu6Zwy5vtCOqmYmcI6mB8C5xnHTBzskLSpEG6h6cK49OdP00vGNMaey91zhwbRS1MGU2QO7m2FijStZYWif9r6yPcO7aZ87X3IGoLFYmxaZaF%2FFRRAr8QafvdLJ%2FHjRP7ph4wjsqOJIqTQ0tDSllZOF8qkx%2FPJJZYxxxJb3gX00nw655HghDkpCMta3h0XCDZYIHOnSXPvQ6hbfJv1iCQsOabMOFNzOLAeRUwxWZFWsHKr0SaqJJ7iFm3kxDZZ5pW9aH9d20oHBAbgwAgaIjvQMullaNBMX7LtaMwn%2BjezAY6pgGSG5VZWIHJ3Hplei6O46QLc6LbTRjCF9OyUm5lr8VO1U%2BH4zqvheNtZbQEwwozWI%2FSh2ntNQt6ndvXj5CL89ZTpuns2l%2FWpkQld9F1Z1BRNw3NECKORLZs4YEkrkPpBWFeCtoOHwPIa3nwCsLcfgt2gz7P8KsUew%2BS9k4XtRD9HTKc06eGViuWRolI26I6CM34CWZmmdRKIDes2ycubbI9R91%2Faekb&X-Amz-Signature=0cc341a677bff2c8298d45053d668e1d4c4147dfdb16df2a16bd4df405f31823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMIIJPF%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGufVuwEQeTgFGi7to7eLsMiU28VGP94sDkxUI0lfG2AiAdkHEPEdgkSDUhUQgC2NR1BnabtUephnnniG8v0D%2BMESqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BA5eKNbkt9blHQElKtwDv%2FYTw7lSsrSS%2FGL3ulli466p8RkL5t%2FqcDh3sy%2FplzFI2wFtgN41sfKvMNmSrHFP6KuN3y5sgniIdftLfbhGQoWu0c9KJintcG%2FJsVBmK071Tni5%2FaeNxF5OvLoEhVWxSrt7mKZ9PvwMDibbCNCeyVb205dc%2FTztq1TXt8HPhb6425ok97CIDCBjHbW2qBbnEg17erCFZ0JBA0N8EUYD9Kq8l%2BgN8t9t4Uj3%2F0xzqFJqwJHOpfAfprs3HPuUKfS5oznsmgSXlpLtI9Ls7urvZPNyxPBawIWJhSg306hPQTNbWclt56mEQlNQoarCvV7Lys6f1L%2BAjglUiazV8qpHfkXWu6Zwy5vtCOqmYmcI6mB8C5xnHTBzskLSpEG6h6cK49OdP00vGNMaey91zhwbRS1MGU2QO7m2FijStZYWif9r6yPcO7aZ87X3IGoLFYmxaZaF%2FFRRAr8QafvdLJ%2FHjRP7ph4wjsqOJIqTQ0tDSllZOF8qkx%2FPJJZYxxxJb3gX00nw655HghDkpCMta3h0XCDZYIHOnSXPvQ6hbfJv1iCQsOabMOFNzOLAeRUwxWZFWsHKr0SaqJJ7iFm3kxDZZ5pW9aH9d20oHBAbgwAgaIjvQMullaNBMX7LtaMwn%2BjezAY6pgGSG5VZWIHJ3Hplei6O46QLc6LbTRjCF9OyUm5lr8VO1U%2BH4zqvheNtZbQEwwozWI%2FSh2ntNQt6ndvXj5CL89ZTpuns2l%2FWpkQld9F1Z1BRNw3NECKORLZs4YEkrkPpBWFeCtoOHwPIa3nwCsLcfgt2gz7P8KsUew%2BS9k4XtRD9HTKc06eGViuWRolI26I6CM34CWZmmdRKIDes2ycubbI9R91%2Faekb&X-Amz-Signature=f367d0fc9f9e0917cc71c586393a38fd8fb84d8e8e2c9198d022124ef483db68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W37FG73B%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnwBA9Um%2BisHtycRuWUAFbwNVkUr7OxBFdvryUhq7NyAiEAprilIxtMHyuVva6LEEIGe4LSkjyeYq4P12h0o67tDmQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjCVwE0dU1gDiQtsyrcA%2F11cv%2F4Z9Goy42bl9emWVGqOISGgB6iVB6%2Fdc%2FXiF4eIANNUtWYaSOzfhaiYj3Kh3TCc0jkYi8QmYq%2BkXzOYab5cE9P6o7Ud8QmpXQU6UKptt3CHkt3FdNDuEkow8Aq%2BVjYKBr9BQiszvg0IiHwYLxN%2BH6v%2Bgsf%2BpLP%2BvtTpQsStEm7%2BJWY1DocyPRAiM2Qk%2F3%2F3JPt%2BKo%2FVlF4S1EurIfr6njL0RnhAtLHXM1l9X2HegKevEldAmmcEY0yDX911YT%2FuUZLzrdMQaqbs%2FDir20hAafDU1ygVxeoLOoIgq0VYNbdNhabmbfbucW3PPyxVnEGrnkoD7ApV0OWRJtRJmvGJP71rO2zyWpPTMEyJl511G1ZbITFq%2FCrwNYdSHEz2PXhUvPVD4aoRSJjiRJQXGRmcaA5eO6UoNhBdy%2FfXD%2FU3sLp9rsG3q%2FEcb1pvloFWFUpjz%2FBgi3BOKZyJ8iv4dI8zud4WZGGRYoZxI7VmZJaKL4mAh4wfEtR%2Bpheve3tX7rRxbS8%2FGT4lCUW5WIPMPL9zVk%2FYkIYohmm5oQ9l4XaTqDXqEaDIXDG8CWxfjXEmP1nFo5Wf53mWFB3MvRMCDiz5RI%2FBNE%2BA61kTzmx64hKChvdkJfe1uZtk7SpMKno3swGOqUBl3oN8ztqGOEKtQT5dYOQM95oaAOEjkbniaC0TdWYv9b9qs2fNk7xgJHWpRtS2ktfp3Ur4YIAsFUJLUk6WSz5c1YA4PdbIpfJjkE6bASG5hd4fWD7nHT0vSSXay8XXYDsm1By6HGnoJAM1C%2BUct1mPZ4Sl5awJ1Anqds3PqGGkQ5Mo5QvpApVb1EIlxcVi%2F4pVL%2F3nCXuTulTkW3C29WOwkxoyjz2&X-Amz-Signature=d67262b2d45978fdccd2f5c8e4badca01ed4bb9aa89da54dada9888a1bc92de7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W37FG73B%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnwBA9Um%2BisHtycRuWUAFbwNVkUr7OxBFdvryUhq7NyAiEAprilIxtMHyuVva6LEEIGe4LSkjyeYq4P12h0o67tDmQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjCVwE0dU1gDiQtsyrcA%2F11cv%2F4Z9Goy42bl9emWVGqOISGgB6iVB6%2Fdc%2FXiF4eIANNUtWYaSOzfhaiYj3Kh3TCc0jkYi8QmYq%2BkXzOYab5cE9P6o7Ud8QmpXQU6UKptt3CHkt3FdNDuEkow8Aq%2BVjYKBr9BQiszvg0IiHwYLxN%2BH6v%2Bgsf%2BpLP%2BvtTpQsStEm7%2BJWY1DocyPRAiM2Qk%2F3%2F3JPt%2BKo%2FVlF4S1EurIfr6njL0RnhAtLHXM1l9X2HegKevEldAmmcEY0yDX911YT%2FuUZLzrdMQaqbs%2FDir20hAafDU1ygVxeoLOoIgq0VYNbdNhabmbfbucW3PPyxVnEGrnkoD7ApV0OWRJtRJmvGJP71rO2zyWpPTMEyJl511G1ZbITFq%2FCrwNYdSHEz2PXhUvPVD4aoRSJjiRJQXGRmcaA5eO6UoNhBdy%2FfXD%2FU3sLp9rsG3q%2FEcb1pvloFWFUpjz%2FBgi3BOKZyJ8iv4dI8zud4WZGGRYoZxI7VmZJaKL4mAh4wfEtR%2Bpheve3tX7rRxbS8%2FGT4lCUW5WIPMPL9zVk%2FYkIYohmm5oQ9l4XaTqDXqEaDIXDG8CWxfjXEmP1nFo5Wf53mWFB3MvRMCDiz5RI%2FBNE%2BA61kTzmx64hKChvdkJfe1uZtk7SpMKno3swGOqUBl3oN8ztqGOEKtQT5dYOQM95oaAOEjkbniaC0TdWYv9b9qs2fNk7xgJHWpRtS2ktfp3Ur4YIAsFUJLUk6WSz5c1YA4PdbIpfJjkE6bASG5hd4fWD7nHT0vSSXay8XXYDsm1By6HGnoJAM1C%2BUct1mPZ4Sl5awJ1Anqds3PqGGkQ5Mo5QvpApVb1EIlxcVi%2F4pVL%2F3nCXuTulTkW3C29WOwkxoyjz2&X-Amz-Signature=d88fd60b9cf09a282ab1695988731dcac20a01381e64e2e7a3b35da40788dbd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W37FG73B%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnwBA9Um%2BisHtycRuWUAFbwNVkUr7OxBFdvryUhq7NyAiEAprilIxtMHyuVva6LEEIGe4LSkjyeYq4P12h0o67tDmQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjCVwE0dU1gDiQtsyrcA%2F11cv%2F4Z9Goy42bl9emWVGqOISGgB6iVB6%2Fdc%2FXiF4eIANNUtWYaSOzfhaiYj3Kh3TCc0jkYi8QmYq%2BkXzOYab5cE9P6o7Ud8QmpXQU6UKptt3CHkt3FdNDuEkow8Aq%2BVjYKBr9BQiszvg0IiHwYLxN%2BH6v%2Bgsf%2BpLP%2BvtTpQsStEm7%2BJWY1DocyPRAiM2Qk%2F3%2F3JPt%2BKo%2FVlF4S1EurIfr6njL0RnhAtLHXM1l9X2HegKevEldAmmcEY0yDX911YT%2FuUZLzrdMQaqbs%2FDir20hAafDU1ygVxeoLOoIgq0VYNbdNhabmbfbucW3PPyxVnEGrnkoD7ApV0OWRJtRJmvGJP71rO2zyWpPTMEyJl511G1ZbITFq%2FCrwNYdSHEz2PXhUvPVD4aoRSJjiRJQXGRmcaA5eO6UoNhBdy%2FfXD%2FU3sLp9rsG3q%2FEcb1pvloFWFUpjz%2FBgi3BOKZyJ8iv4dI8zud4WZGGRYoZxI7VmZJaKL4mAh4wfEtR%2Bpheve3tX7rRxbS8%2FGT4lCUW5WIPMPL9zVk%2FYkIYohmm5oQ9l4XaTqDXqEaDIXDG8CWxfjXEmP1nFo5Wf53mWFB3MvRMCDiz5RI%2FBNE%2BA61kTzmx64hKChvdkJfe1uZtk7SpMKno3swGOqUBl3oN8ztqGOEKtQT5dYOQM95oaAOEjkbniaC0TdWYv9b9qs2fNk7xgJHWpRtS2ktfp3Ur4YIAsFUJLUk6WSz5c1YA4PdbIpfJjkE6bASG5hd4fWD7nHT0vSSXay8XXYDsm1By6HGnoJAM1C%2BUct1mPZ4Sl5awJ1Anqds3PqGGkQ5Mo5QvpApVb1EIlxcVi%2F4pVL%2F3nCXuTulTkW3C29WOwkxoyjz2&X-Amz-Signature=38b06dd7dbc49a96c2b6e9ebda8552d08519f40038cd347d414efba7a2c8b2e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W37FG73B%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnwBA9Um%2BisHtycRuWUAFbwNVkUr7OxBFdvryUhq7NyAiEAprilIxtMHyuVva6LEEIGe4LSkjyeYq4P12h0o67tDmQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjCVwE0dU1gDiQtsyrcA%2F11cv%2F4Z9Goy42bl9emWVGqOISGgB6iVB6%2Fdc%2FXiF4eIANNUtWYaSOzfhaiYj3Kh3TCc0jkYi8QmYq%2BkXzOYab5cE9P6o7Ud8QmpXQU6UKptt3CHkt3FdNDuEkow8Aq%2BVjYKBr9BQiszvg0IiHwYLxN%2BH6v%2Bgsf%2BpLP%2BvtTpQsStEm7%2BJWY1DocyPRAiM2Qk%2F3%2F3JPt%2BKo%2FVlF4S1EurIfr6njL0RnhAtLHXM1l9X2HegKevEldAmmcEY0yDX911YT%2FuUZLzrdMQaqbs%2FDir20hAafDU1ygVxeoLOoIgq0VYNbdNhabmbfbucW3PPyxVnEGrnkoD7ApV0OWRJtRJmvGJP71rO2zyWpPTMEyJl511G1ZbITFq%2FCrwNYdSHEz2PXhUvPVD4aoRSJjiRJQXGRmcaA5eO6UoNhBdy%2FfXD%2FU3sLp9rsG3q%2FEcb1pvloFWFUpjz%2FBgi3BOKZyJ8iv4dI8zud4WZGGRYoZxI7VmZJaKL4mAh4wfEtR%2Bpheve3tX7rRxbS8%2FGT4lCUW5WIPMPL9zVk%2FYkIYohmm5oQ9l4XaTqDXqEaDIXDG8CWxfjXEmP1nFo5Wf53mWFB3MvRMCDiz5RI%2FBNE%2BA61kTzmx64hKChvdkJfe1uZtk7SpMKno3swGOqUBl3oN8ztqGOEKtQT5dYOQM95oaAOEjkbniaC0TdWYv9b9qs2fNk7xgJHWpRtS2ktfp3Ur4YIAsFUJLUk6WSz5c1YA4PdbIpfJjkE6bASG5hd4fWD7nHT0vSSXay8XXYDsm1By6HGnoJAM1C%2BUct1mPZ4Sl5awJ1Anqds3PqGGkQ5Mo5QvpApVb1EIlxcVi%2F4pVL%2F3nCXuTulTkW3C29WOwkxoyjz2&X-Amz-Signature=98821c5851f1e2380c52fa12afb6c4dd89e5f9b4fcf501940dc2667464379126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AKLL3V6%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERk2HyuqZ2lseNOernBK%2FDM%2FJyBxqLE1LMZ6ysiDhuQAiEAqx5DToa5NRyICCgBwKKbmnPtlR8Bx3DGiOkSAkuD9XwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjDwEJWw7mxZhNLxircA2KH5L9RLYLh%2BFkNUkmndwjP60h%2BN%2F47VpWW34Xhv8uFC%2B7jf%2BT0k5xo6tFBM9PFCTxFzbKnkBCy9vWrdssks8VL5hqS0Z65Qc6uHrJM7DLDNpXVN1WK38VIlK5FDS2voVutZIxOxw%2B0x9I%2B54JqKQnY6zeHCvJ6oF8bJv4Ua%2FVX6NyHPHix69QvKzhJmniKBvJcVnvVrwIea4Jpxk6S3YCtqhtUp0Qke8NTlSm6Sfjv%2F3sfCeX1%2Bf6C%2BwyZfjj4x0gxoQoQJJkKGnPXeluOGEVpuRymlVlT6UypEsEaIn7XuT5GYienfy55DBTthFb4OmYGjqoqzA%2FewQSZx8aIq%2Fm28vhu24AWHNVPi6fjjEkH56RCooXX7M2V9nHIDaS5eh7AmMpU7w5gCeX4Gt7X%2FSIKzKMYItbnojUvfkC5A2vdldhwMO%2FpIY5cykeAMyd7IvKXMEl%2BNPjaYtlrQmQ%2FZs%2B3T2KwZ%2FylVbxgqy7gz6q9LphgtZVxcoMhBEaVRxLXLYZ2fl0hN%2BPKO1nW8va2GUIr%2BWo1oymzg1YsmV81DAnDbeMAd532QXwM%2FAmNGD%2B8e6AvxZ4L4jjcD%2BsQrVpmfvREA%2FzANv74DS3AGPBWZpXj4pBPwrQUCKKIMwq5MJDo3swGOqUByyBSyNiYki%2FC5f95hEuN7Xtg0LzRYwI1EM2ASg9%2BM7aK2nCEWfTjfQV4TnTdR6twqzsULxGjIGIZ6hNbXAKXpNlYjR5kPmge%2FQdz1R8PiND8Wo3SA%2BTkAZoGBkNVY0WiDI%2FdfQFk46Gu2QGvyDTYOONDLc%2BYJ6PwQblmOjFDf7wp%2BgZy%2BMAzSuLqyM8yMhLwWDF8z2ynC5Fb2pZ6yNFx9paDHSRH&X-Amz-Signature=367df02034832521367a1d4c4f4ade2bbf856d63a00c3419bf9b03f14481daf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W37FG73B%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnwBA9Um%2BisHtycRuWUAFbwNVkUr7OxBFdvryUhq7NyAiEAprilIxtMHyuVva6LEEIGe4LSkjyeYq4P12h0o67tDmQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjCVwE0dU1gDiQtsyrcA%2F11cv%2F4Z9Goy42bl9emWVGqOISGgB6iVB6%2Fdc%2FXiF4eIANNUtWYaSOzfhaiYj3Kh3TCc0jkYi8QmYq%2BkXzOYab5cE9P6o7Ud8QmpXQU6UKptt3CHkt3FdNDuEkow8Aq%2BVjYKBr9BQiszvg0IiHwYLxN%2BH6v%2Bgsf%2BpLP%2BvtTpQsStEm7%2BJWY1DocyPRAiM2Qk%2F3%2F3JPt%2BKo%2FVlF4S1EurIfr6njL0RnhAtLHXM1l9X2HegKevEldAmmcEY0yDX911YT%2FuUZLzrdMQaqbs%2FDir20hAafDU1ygVxeoLOoIgq0VYNbdNhabmbfbucW3PPyxVnEGrnkoD7ApV0OWRJtRJmvGJP71rO2zyWpPTMEyJl511G1ZbITFq%2FCrwNYdSHEz2PXhUvPVD4aoRSJjiRJQXGRmcaA5eO6UoNhBdy%2FfXD%2FU3sLp9rsG3q%2FEcb1pvloFWFUpjz%2FBgi3BOKZyJ8iv4dI8zud4WZGGRYoZxI7VmZJaKL4mAh4wfEtR%2Bpheve3tX7rRxbS8%2FGT4lCUW5WIPMPL9zVk%2FYkIYohmm5oQ9l4XaTqDXqEaDIXDG8CWxfjXEmP1nFo5Wf53mWFB3MvRMCDiz5RI%2FBNE%2BA61kTzmx64hKChvdkJfe1uZtk7SpMKno3swGOqUBl3oN8ztqGOEKtQT5dYOQM95oaAOEjkbniaC0TdWYv9b9qs2fNk7xgJHWpRtS2ktfp3Ur4YIAsFUJLUk6WSz5c1YA4PdbIpfJjkE6bASG5hd4fWD7nHT0vSSXay8XXYDsm1By6HGnoJAM1C%2BUct1mPZ4Sl5awJ1Anqds3PqGGkQ5Mo5QvpApVb1EIlxcVi%2F4pVL%2F3nCXuTulTkW3C29WOwkxoyjz2&X-Amz-Signature=af995ce867f4de1900f79a85fed461028ede058792e1b715224cf873e3c5aa4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W37FG73B%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnwBA9Um%2BisHtycRuWUAFbwNVkUr7OxBFdvryUhq7NyAiEAprilIxtMHyuVva6LEEIGe4LSkjyeYq4P12h0o67tDmQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjCVwE0dU1gDiQtsyrcA%2F11cv%2F4Z9Goy42bl9emWVGqOISGgB6iVB6%2Fdc%2FXiF4eIANNUtWYaSOzfhaiYj3Kh3TCc0jkYi8QmYq%2BkXzOYab5cE9P6o7Ud8QmpXQU6UKptt3CHkt3FdNDuEkow8Aq%2BVjYKBr9BQiszvg0IiHwYLxN%2BH6v%2Bgsf%2BpLP%2BvtTpQsStEm7%2BJWY1DocyPRAiM2Qk%2F3%2F3JPt%2BKo%2FVlF4S1EurIfr6njL0RnhAtLHXM1l9X2HegKevEldAmmcEY0yDX911YT%2FuUZLzrdMQaqbs%2FDir20hAafDU1ygVxeoLOoIgq0VYNbdNhabmbfbucW3PPyxVnEGrnkoD7ApV0OWRJtRJmvGJP71rO2zyWpPTMEyJl511G1ZbITFq%2FCrwNYdSHEz2PXhUvPVD4aoRSJjiRJQXGRmcaA5eO6UoNhBdy%2FfXD%2FU3sLp9rsG3q%2FEcb1pvloFWFUpjz%2FBgi3BOKZyJ8iv4dI8zud4WZGGRYoZxI7VmZJaKL4mAh4wfEtR%2Bpheve3tX7rRxbS8%2FGT4lCUW5WIPMPL9zVk%2FYkIYohmm5oQ9l4XaTqDXqEaDIXDG8CWxfjXEmP1nFo5Wf53mWFB3MvRMCDiz5RI%2FBNE%2BA61kTzmx64hKChvdkJfe1uZtk7SpMKno3swGOqUBl3oN8ztqGOEKtQT5dYOQM95oaAOEjkbniaC0TdWYv9b9qs2fNk7xgJHWpRtS2ktfp3Ur4YIAsFUJLUk6WSz5c1YA4PdbIpfJjkE6bASG5hd4fWD7nHT0vSSXay8XXYDsm1By6HGnoJAM1C%2BUct1mPZ4Sl5awJ1Anqds3PqGGkQ5Mo5QvpApVb1EIlxcVi%2F4pVL%2F3nCXuTulTkW3C29WOwkxoyjz2&X-Amz-Signature=d07d4b29408e301b3e984a868aa6292f6afd4bfa2638370ae0a2df6b2c44e522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W37FG73B%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnwBA9Um%2BisHtycRuWUAFbwNVkUr7OxBFdvryUhq7NyAiEAprilIxtMHyuVva6LEEIGe4LSkjyeYq4P12h0o67tDmQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjCVwE0dU1gDiQtsyrcA%2F11cv%2F4Z9Goy42bl9emWVGqOISGgB6iVB6%2Fdc%2FXiF4eIANNUtWYaSOzfhaiYj3Kh3TCc0jkYi8QmYq%2BkXzOYab5cE9P6o7Ud8QmpXQU6UKptt3CHkt3FdNDuEkow8Aq%2BVjYKBr9BQiszvg0IiHwYLxN%2BH6v%2Bgsf%2BpLP%2BvtTpQsStEm7%2BJWY1DocyPRAiM2Qk%2F3%2F3JPt%2BKo%2FVlF4S1EurIfr6njL0RnhAtLHXM1l9X2HegKevEldAmmcEY0yDX911YT%2FuUZLzrdMQaqbs%2FDir20hAafDU1ygVxeoLOoIgq0VYNbdNhabmbfbucW3PPyxVnEGrnkoD7ApV0OWRJtRJmvGJP71rO2zyWpPTMEyJl511G1ZbITFq%2FCrwNYdSHEz2PXhUvPVD4aoRSJjiRJQXGRmcaA5eO6UoNhBdy%2FfXD%2FU3sLp9rsG3q%2FEcb1pvloFWFUpjz%2FBgi3BOKZyJ8iv4dI8zud4WZGGRYoZxI7VmZJaKL4mAh4wfEtR%2Bpheve3tX7rRxbS8%2FGT4lCUW5WIPMPL9zVk%2FYkIYohmm5oQ9l4XaTqDXqEaDIXDG8CWxfjXEmP1nFo5Wf53mWFB3MvRMCDiz5RI%2FBNE%2BA61kTzmx64hKChvdkJfe1uZtk7SpMKno3swGOqUBl3oN8ztqGOEKtQT5dYOQM95oaAOEjkbniaC0TdWYv9b9qs2fNk7xgJHWpRtS2ktfp3Ur4YIAsFUJLUk6WSz5c1YA4PdbIpfJjkE6bASG5hd4fWD7nHT0vSSXay8XXYDsm1By6HGnoJAM1C%2BUct1mPZ4Sl5awJ1Anqds3PqGGkQ5Mo5QvpApVb1EIlxcVi%2F4pVL%2F3nCXuTulTkW3C29WOwkxoyjz2&X-Amz-Signature=38b06dd7dbc49a96c2b6e9ebda8552d08519f40038cd347d414efba7a2c8b2e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W37FG73B%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnwBA9Um%2BisHtycRuWUAFbwNVkUr7OxBFdvryUhq7NyAiEAprilIxtMHyuVva6LEEIGe4LSkjyeYq4P12h0o67tDmQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjCVwE0dU1gDiQtsyrcA%2F11cv%2F4Z9Goy42bl9emWVGqOISGgB6iVB6%2Fdc%2FXiF4eIANNUtWYaSOzfhaiYj3Kh3TCc0jkYi8QmYq%2BkXzOYab5cE9P6o7Ud8QmpXQU6UKptt3CHkt3FdNDuEkow8Aq%2BVjYKBr9BQiszvg0IiHwYLxN%2BH6v%2Bgsf%2BpLP%2BvtTpQsStEm7%2BJWY1DocyPRAiM2Qk%2F3%2F3JPt%2BKo%2FVlF4S1EurIfr6njL0RnhAtLHXM1l9X2HegKevEldAmmcEY0yDX911YT%2FuUZLzrdMQaqbs%2FDir20hAafDU1ygVxeoLOoIgq0VYNbdNhabmbfbucW3PPyxVnEGrnkoD7ApV0OWRJtRJmvGJP71rO2zyWpPTMEyJl511G1ZbITFq%2FCrwNYdSHEz2PXhUvPVD4aoRSJjiRJQXGRmcaA5eO6UoNhBdy%2FfXD%2FU3sLp9rsG3q%2FEcb1pvloFWFUpjz%2FBgi3BOKZyJ8iv4dI8zud4WZGGRYoZxI7VmZJaKL4mAh4wfEtR%2Bpheve3tX7rRxbS8%2FGT4lCUW5WIPMPL9zVk%2FYkIYohmm5oQ9l4XaTqDXqEaDIXDG8CWxfjXEmP1nFo5Wf53mWFB3MvRMCDiz5RI%2FBNE%2BA61kTzmx64hKChvdkJfe1uZtk7SpMKno3swGOqUBl3oN8ztqGOEKtQT5dYOQM95oaAOEjkbniaC0TdWYv9b9qs2fNk7xgJHWpRtS2ktfp3Ur4YIAsFUJLUk6WSz5c1YA4PdbIpfJjkE6bASG5hd4fWD7nHT0vSSXay8XXYDsm1By6HGnoJAM1C%2BUct1mPZ4Sl5awJ1Anqds3PqGGkQ5Mo5QvpApVb1EIlxcVi%2F4pVL%2F3nCXuTulTkW3C29WOwkxoyjz2&X-Amz-Signature=9e85de6a4bfce45dbda2d8db16fbecd17a11f77e264e261b8819b3bc765bad57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W37FG73B%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnwBA9Um%2BisHtycRuWUAFbwNVkUr7OxBFdvryUhq7NyAiEAprilIxtMHyuVva6LEEIGe4LSkjyeYq4P12h0o67tDmQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjCVwE0dU1gDiQtsyrcA%2F11cv%2F4Z9Goy42bl9emWVGqOISGgB6iVB6%2Fdc%2FXiF4eIANNUtWYaSOzfhaiYj3Kh3TCc0jkYi8QmYq%2BkXzOYab5cE9P6o7Ud8QmpXQU6UKptt3CHkt3FdNDuEkow8Aq%2BVjYKBr9BQiszvg0IiHwYLxN%2BH6v%2Bgsf%2BpLP%2BvtTpQsStEm7%2BJWY1DocyPRAiM2Qk%2F3%2F3JPt%2BKo%2FVlF4S1EurIfr6njL0RnhAtLHXM1l9X2HegKevEldAmmcEY0yDX911YT%2FuUZLzrdMQaqbs%2FDir20hAafDU1ygVxeoLOoIgq0VYNbdNhabmbfbucW3PPyxVnEGrnkoD7ApV0OWRJtRJmvGJP71rO2zyWpPTMEyJl511G1ZbITFq%2FCrwNYdSHEz2PXhUvPVD4aoRSJjiRJQXGRmcaA5eO6UoNhBdy%2FfXD%2FU3sLp9rsG3q%2FEcb1pvloFWFUpjz%2FBgi3BOKZyJ8iv4dI8zud4WZGGRYoZxI7VmZJaKL4mAh4wfEtR%2Bpheve3tX7rRxbS8%2FGT4lCUW5WIPMPL9zVk%2FYkIYohmm5oQ9l4XaTqDXqEaDIXDG8CWxfjXEmP1nFo5Wf53mWFB3MvRMCDiz5RI%2FBNE%2BA61kTzmx64hKChvdkJfe1uZtk7SpMKno3swGOqUBl3oN8ztqGOEKtQT5dYOQM95oaAOEjkbniaC0TdWYv9b9qs2fNk7xgJHWpRtS2ktfp3Ur4YIAsFUJLUk6WSz5c1YA4PdbIpfJjkE6bASG5hd4fWD7nHT0vSSXay8XXYDsm1By6HGnoJAM1C%2BUct1mPZ4Sl5awJ1Anqds3PqGGkQ5Mo5QvpApVb1EIlxcVi%2F4pVL%2F3nCXuTulTkW3C29WOwkxoyjz2&X-Amz-Signature=b11414811f478eac81ce7b899cc35f40d57d1977918f3b553839b9d2587fad6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W37FG73B%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnwBA9Um%2BisHtycRuWUAFbwNVkUr7OxBFdvryUhq7NyAiEAprilIxtMHyuVva6LEEIGe4LSkjyeYq4P12h0o67tDmQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjCVwE0dU1gDiQtsyrcA%2F11cv%2F4Z9Goy42bl9emWVGqOISGgB6iVB6%2Fdc%2FXiF4eIANNUtWYaSOzfhaiYj3Kh3TCc0jkYi8QmYq%2BkXzOYab5cE9P6o7Ud8QmpXQU6UKptt3CHkt3FdNDuEkow8Aq%2BVjYKBr9BQiszvg0IiHwYLxN%2BH6v%2Bgsf%2BpLP%2BvtTpQsStEm7%2BJWY1DocyPRAiM2Qk%2F3%2F3JPt%2BKo%2FVlF4S1EurIfr6njL0RnhAtLHXM1l9X2HegKevEldAmmcEY0yDX911YT%2FuUZLzrdMQaqbs%2FDir20hAafDU1ygVxeoLOoIgq0VYNbdNhabmbfbucW3PPyxVnEGrnkoD7ApV0OWRJtRJmvGJP71rO2zyWpPTMEyJl511G1ZbITFq%2FCrwNYdSHEz2PXhUvPVD4aoRSJjiRJQXGRmcaA5eO6UoNhBdy%2FfXD%2FU3sLp9rsG3q%2FEcb1pvloFWFUpjz%2FBgi3BOKZyJ8iv4dI8zud4WZGGRYoZxI7VmZJaKL4mAh4wfEtR%2Bpheve3tX7rRxbS8%2FGT4lCUW5WIPMPL9zVk%2FYkIYohmm5oQ9l4XaTqDXqEaDIXDG8CWxfjXEmP1nFo5Wf53mWFB3MvRMCDiz5RI%2FBNE%2BA61kTzmx64hKChvdkJfe1uZtk7SpMKno3swGOqUBl3oN8ztqGOEKtQT5dYOQM95oaAOEjkbniaC0TdWYv9b9qs2fNk7xgJHWpRtS2ktfp3Ur4YIAsFUJLUk6WSz5c1YA4PdbIpfJjkE6bASG5hd4fWD7nHT0vSSXay8XXYDsm1By6HGnoJAM1C%2BUct1mPZ4Sl5awJ1Anqds3PqGGkQ5Mo5QvpApVb1EIlxcVi%2F4pVL%2F3nCXuTulTkW3C29WOwkxoyjz2&X-Amz-Signature=8a5982d3e74a6c253b613fd52379f76cc4db675a45e7cbc7245a5c229d26a34d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


