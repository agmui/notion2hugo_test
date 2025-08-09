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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RCDZV2S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAWFM44L%2BWGHyE69PupUyaGLlNGXOOmDIxf7XDaed6uAiBoPZ0dd56N3ZPOAtd4SQcE7rCeUL%2FPPtNxS%2FFN3BQRCyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWtSNPTen%2BZnCswPZKtwDl2nI00E4L3cZC3Co0EQvSeLvSf9NCUKB%2FtlhQkOlX%2FJrRlRtC6S6z1FTFQ8kUjHf9zI19E7A0IERTJVgnn1vu0%2BGkbjvOLaWn1TD5tkytRv58DmE%2Fz2QgAOyTguUW0g5ZzC01TCPMq5zu4yh6vT%2Bz3G5Im2vGubNOK3xMe2TDINGbo%2FqB%2Fvmy2U3aaGLNJ4S52hRGi0FaW6Ms1QGJRr0c%2FkyXxsh%2BgOGBAoOJI2hbl%2FuhyqgZJQ37C8QEc3UdKBLQh%2Fqghex5j2Xhfz1yHkcrbp6SWjNborPjxwJ2nleD3%2FVey1D0VZ0kGUUn%2F%2Be0dbKJ47wX8eXdspbEPU36YKov8bS1yAXlHLhf1MwcRKmGEVOUa99z8aTe0ipVUNbhDRAfyg%2BGz5wmsz2ffU2jyONzR2a4Pb67ogutsrvLYbarQrkNB%2BuIDeLPKsPqCmXzSkNEo4VGfVMD6t1sp7TopbhPQWlyETxUSVXuX7e5Ktz0GLH1YvKY8lvE3zNYHYPnh4Qt1ine1CNUnmawE5hufZXTn32i%2FeE5hRipz2Q2SF9o1f5Hckkst2wF1Dj%2BXnwBkRqqSulZ%2F33h4LvO8JlaPcxXU1CdjwmiRlJG9l4WyuRaCz1stywC1NY1%2FbAk5QwlencxAY6pgFRvmsj%2FoUz8%2FC3PAIqwxtwuwyXx%2Bd26egw4W4GDAHTEcC4wYKGx1fzLjKGTF%2Ft8gRrV%2FEATDP6MbHWAD%2BtPqunuFG7rGY5BxRXqmEPvSIAOUeokFK1%2FJwXB9ZfnCVIZ8L3S7EUMm62pEwl095mExPL0yi%2Fqwj5vZokc2HamaV5WxXVF1R3aTwL4HtPrjA5MiWEhMf5fvK0wBdeyQADgYfGntneevpp&X-Amz-Signature=a029025e7089af0acecf1a96902a5ac3d344d927771fcef9afc733d3dd0dbc10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RCDZV2S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAWFM44L%2BWGHyE69PupUyaGLlNGXOOmDIxf7XDaed6uAiBoPZ0dd56N3ZPOAtd4SQcE7rCeUL%2FPPtNxS%2FFN3BQRCyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWtSNPTen%2BZnCswPZKtwDl2nI00E4L3cZC3Co0EQvSeLvSf9NCUKB%2FtlhQkOlX%2FJrRlRtC6S6z1FTFQ8kUjHf9zI19E7A0IERTJVgnn1vu0%2BGkbjvOLaWn1TD5tkytRv58DmE%2Fz2QgAOyTguUW0g5ZzC01TCPMq5zu4yh6vT%2Bz3G5Im2vGubNOK3xMe2TDINGbo%2FqB%2Fvmy2U3aaGLNJ4S52hRGi0FaW6Ms1QGJRr0c%2FkyXxsh%2BgOGBAoOJI2hbl%2FuhyqgZJQ37C8QEc3UdKBLQh%2Fqghex5j2Xhfz1yHkcrbp6SWjNborPjxwJ2nleD3%2FVey1D0VZ0kGUUn%2F%2Be0dbKJ47wX8eXdspbEPU36YKov8bS1yAXlHLhf1MwcRKmGEVOUa99z8aTe0ipVUNbhDRAfyg%2BGz5wmsz2ffU2jyONzR2a4Pb67ogutsrvLYbarQrkNB%2BuIDeLPKsPqCmXzSkNEo4VGfVMD6t1sp7TopbhPQWlyETxUSVXuX7e5Ktz0GLH1YvKY8lvE3zNYHYPnh4Qt1ine1CNUnmawE5hufZXTn32i%2FeE5hRipz2Q2SF9o1f5Hckkst2wF1Dj%2BXnwBkRqqSulZ%2F33h4LvO8JlaPcxXU1CdjwmiRlJG9l4WyuRaCz1stywC1NY1%2FbAk5QwlencxAY6pgFRvmsj%2FoUz8%2FC3PAIqwxtwuwyXx%2Bd26egw4W4GDAHTEcC4wYKGx1fzLjKGTF%2Ft8gRrV%2FEATDP6MbHWAD%2BtPqunuFG7rGY5BxRXqmEPvSIAOUeokFK1%2FJwXB9ZfnCVIZ8L3S7EUMm62pEwl095mExPL0yi%2Fqwj5vZokc2HamaV5WxXVF1R3aTwL4HtPrjA5MiWEhMf5fvK0wBdeyQADgYfGntneevpp&X-Amz-Signature=1abf9c5f712febf135dc61b56dfef030fcbe8db263f229776f0cfc134657267e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RCDZV2S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAWFM44L%2BWGHyE69PupUyaGLlNGXOOmDIxf7XDaed6uAiBoPZ0dd56N3ZPOAtd4SQcE7rCeUL%2FPPtNxS%2FFN3BQRCyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWtSNPTen%2BZnCswPZKtwDl2nI00E4L3cZC3Co0EQvSeLvSf9NCUKB%2FtlhQkOlX%2FJrRlRtC6S6z1FTFQ8kUjHf9zI19E7A0IERTJVgnn1vu0%2BGkbjvOLaWn1TD5tkytRv58DmE%2Fz2QgAOyTguUW0g5ZzC01TCPMq5zu4yh6vT%2Bz3G5Im2vGubNOK3xMe2TDINGbo%2FqB%2Fvmy2U3aaGLNJ4S52hRGi0FaW6Ms1QGJRr0c%2FkyXxsh%2BgOGBAoOJI2hbl%2FuhyqgZJQ37C8QEc3UdKBLQh%2Fqghex5j2Xhfz1yHkcrbp6SWjNborPjxwJ2nleD3%2FVey1D0VZ0kGUUn%2F%2Be0dbKJ47wX8eXdspbEPU36YKov8bS1yAXlHLhf1MwcRKmGEVOUa99z8aTe0ipVUNbhDRAfyg%2BGz5wmsz2ffU2jyONzR2a4Pb67ogutsrvLYbarQrkNB%2BuIDeLPKsPqCmXzSkNEo4VGfVMD6t1sp7TopbhPQWlyETxUSVXuX7e5Ktz0GLH1YvKY8lvE3zNYHYPnh4Qt1ine1CNUnmawE5hufZXTn32i%2FeE5hRipz2Q2SF9o1f5Hckkst2wF1Dj%2BXnwBkRqqSulZ%2F33h4LvO8JlaPcxXU1CdjwmiRlJG9l4WyuRaCz1stywC1NY1%2FbAk5QwlencxAY6pgFRvmsj%2FoUz8%2FC3PAIqwxtwuwyXx%2Bd26egw4W4GDAHTEcC4wYKGx1fzLjKGTF%2Ft8gRrV%2FEATDP6MbHWAD%2BtPqunuFG7rGY5BxRXqmEPvSIAOUeokFK1%2FJwXB9ZfnCVIZ8L3S7EUMm62pEwl095mExPL0yi%2Fqwj5vZokc2HamaV5WxXVF1R3aTwL4HtPrjA5MiWEhMf5fvK0wBdeyQADgYfGntneevpp&X-Amz-Signature=3e269e88055d6a8b57d67503e265b5b2c66e25c6d736ab95f3bb15621251dad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RCDZV2S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAWFM44L%2BWGHyE69PupUyaGLlNGXOOmDIxf7XDaed6uAiBoPZ0dd56N3ZPOAtd4SQcE7rCeUL%2FPPtNxS%2FFN3BQRCyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWtSNPTen%2BZnCswPZKtwDl2nI00E4L3cZC3Co0EQvSeLvSf9NCUKB%2FtlhQkOlX%2FJrRlRtC6S6z1FTFQ8kUjHf9zI19E7A0IERTJVgnn1vu0%2BGkbjvOLaWn1TD5tkytRv58DmE%2Fz2QgAOyTguUW0g5ZzC01TCPMq5zu4yh6vT%2Bz3G5Im2vGubNOK3xMe2TDINGbo%2FqB%2Fvmy2U3aaGLNJ4S52hRGi0FaW6Ms1QGJRr0c%2FkyXxsh%2BgOGBAoOJI2hbl%2FuhyqgZJQ37C8QEc3UdKBLQh%2Fqghex5j2Xhfz1yHkcrbp6SWjNborPjxwJ2nleD3%2FVey1D0VZ0kGUUn%2F%2Be0dbKJ47wX8eXdspbEPU36YKov8bS1yAXlHLhf1MwcRKmGEVOUa99z8aTe0ipVUNbhDRAfyg%2BGz5wmsz2ffU2jyONzR2a4Pb67ogutsrvLYbarQrkNB%2BuIDeLPKsPqCmXzSkNEo4VGfVMD6t1sp7TopbhPQWlyETxUSVXuX7e5Ktz0GLH1YvKY8lvE3zNYHYPnh4Qt1ine1CNUnmawE5hufZXTn32i%2FeE5hRipz2Q2SF9o1f5Hckkst2wF1Dj%2BXnwBkRqqSulZ%2F33h4LvO8JlaPcxXU1CdjwmiRlJG9l4WyuRaCz1stywC1NY1%2FbAk5QwlencxAY6pgFRvmsj%2FoUz8%2FC3PAIqwxtwuwyXx%2Bd26egw4W4GDAHTEcC4wYKGx1fzLjKGTF%2Ft8gRrV%2FEATDP6MbHWAD%2BtPqunuFG7rGY5BxRXqmEPvSIAOUeokFK1%2FJwXB9ZfnCVIZ8L3S7EUMm62pEwl095mExPL0yi%2Fqwj5vZokc2HamaV5WxXVF1R3aTwL4HtPrjA5MiWEhMf5fvK0wBdeyQADgYfGntneevpp&X-Amz-Signature=5a516f42f63a4990b7234738444cf7a0b9b103846b5f5d2ac81a2b2558c2aace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RCDZV2S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAWFM44L%2BWGHyE69PupUyaGLlNGXOOmDIxf7XDaed6uAiBoPZ0dd56N3ZPOAtd4SQcE7rCeUL%2FPPtNxS%2FFN3BQRCyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWtSNPTen%2BZnCswPZKtwDl2nI00E4L3cZC3Co0EQvSeLvSf9NCUKB%2FtlhQkOlX%2FJrRlRtC6S6z1FTFQ8kUjHf9zI19E7A0IERTJVgnn1vu0%2BGkbjvOLaWn1TD5tkytRv58DmE%2Fz2QgAOyTguUW0g5ZzC01TCPMq5zu4yh6vT%2Bz3G5Im2vGubNOK3xMe2TDINGbo%2FqB%2Fvmy2U3aaGLNJ4S52hRGi0FaW6Ms1QGJRr0c%2FkyXxsh%2BgOGBAoOJI2hbl%2FuhyqgZJQ37C8QEc3UdKBLQh%2Fqghex5j2Xhfz1yHkcrbp6SWjNborPjxwJ2nleD3%2FVey1D0VZ0kGUUn%2F%2Be0dbKJ47wX8eXdspbEPU36YKov8bS1yAXlHLhf1MwcRKmGEVOUa99z8aTe0ipVUNbhDRAfyg%2BGz5wmsz2ffU2jyONzR2a4Pb67ogutsrvLYbarQrkNB%2BuIDeLPKsPqCmXzSkNEo4VGfVMD6t1sp7TopbhPQWlyETxUSVXuX7e5Ktz0GLH1YvKY8lvE3zNYHYPnh4Qt1ine1CNUnmawE5hufZXTn32i%2FeE5hRipz2Q2SF9o1f5Hckkst2wF1Dj%2BXnwBkRqqSulZ%2F33h4LvO8JlaPcxXU1CdjwmiRlJG9l4WyuRaCz1stywC1NY1%2FbAk5QwlencxAY6pgFRvmsj%2FoUz8%2FC3PAIqwxtwuwyXx%2Bd26egw4W4GDAHTEcC4wYKGx1fzLjKGTF%2Ft8gRrV%2FEATDP6MbHWAD%2BtPqunuFG7rGY5BxRXqmEPvSIAOUeokFK1%2FJwXB9ZfnCVIZ8L3S7EUMm62pEwl095mExPL0yi%2Fqwj5vZokc2HamaV5WxXVF1R3aTwL4HtPrjA5MiWEhMf5fvK0wBdeyQADgYfGntneevpp&X-Amz-Signature=a7412d63cfae6e6b556b181c93877e7f526648d3e9350ee5174a1891e63a82b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RCDZV2S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAWFM44L%2BWGHyE69PupUyaGLlNGXOOmDIxf7XDaed6uAiBoPZ0dd56N3ZPOAtd4SQcE7rCeUL%2FPPtNxS%2FFN3BQRCyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWtSNPTen%2BZnCswPZKtwDl2nI00E4L3cZC3Co0EQvSeLvSf9NCUKB%2FtlhQkOlX%2FJrRlRtC6S6z1FTFQ8kUjHf9zI19E7A0IERTJVgnn1vu0%2BGkbjvOLaWn1TD5tkytRv58DmE%2Fz2QgAOyTguUW0g5ZzC01TCPMq5zu4yh6vT%2Bz3G5Im2vGubNOK3xMe2TDINGbo%2FqB%2Fvmy2U3aaGLNJ4S52hRGi0FaW6Ms1QGJRr0c%2FkyXxsh%2BgOGBAoOJI2hbl%2FuhyqgZJQ37C8QEc3UdKBLQh%2Fqghex5j2Xhfz1yHkcrbp6SWjNborPjxwJ2nleD3%2FVey1D0VZ0kGUUn%2F%2Be0dbKJ47wX8eXdspbEPU36YKov8bS1yAXlHLhf1MwcRKmGEVOUa99z8aTe0ipVUNbhDRAfyg%2BGz5wmsz2ffU2jyONzR2a4Pb67ogutsrvLYbarQrkNB%2BuIDeLPKsPqCmXzSkNEo4VGfVMD6t1sp7TopbhPQWlyETxUSVXuX7e5Ktz0GLH1YvKY8lvE3zNYHYPnh4Qt1ine1CNUnmawE5hufZXTn32i%2FeE5hRipz2Q2SF9o1f5Hckkst2wF1Dj%2BXnwBkRqqSulZ%2F33h4LvO8JlaPcxXU1CdjwmiRlJG9l4WyuRaCz1stywC1NY1%2FbAk5QwlencxAY6pgFRvmsj%2FoUz8%2FC3PAIqwxtwuwyXx%2Bd26egw4W4GDAHTEcC4wYKGx1fzLjKGTF%2Ft8gRrV%2FEATDP6MbHWAD%2BtPqunuFG7rGY5BxRXqmEPvSIAOUeokFK1%2FJwXB9ZfnCVIZ8L3S7EUMm62pEwl095mExPL0yi%2Fqwj5vZokc2HamaV5WxXVF1R3aTwL4HtPrjA5MiWEhMf5fvK0wBdeyQADgYfGntneevpp&X-Amz-Signature=d2d187bced2b5a9c70f155ccdd3d4dc96179f50fb846a88be4888b7afe2e4d18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RCDZV2S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAWFM44L%2BWGHyE69PupUyaGLlNGXOOmDIxf7XDaed6uAiBoPZ0dd56N3ZPOAtd4SQcE7rCeUL%2FPPtNxS%2FFN3BQRCyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWtSNPTen%2BZnCswPZKtwDl2nI00E4L3cZC3Co0EQvSeLvSf9NCUKB%2FtlhQkOlX%2FJrRlRtC6S6z1FTFQ8kUjHf9zI19E7A0IERTJVgnn1vu0%2BGkbjvOLaWn1TD5tkytRv58DmE%2Fz2QgAOyTguUW0g5ZzC01TCPMq5zu4yh6vT%2Bz3G5Im2vGubNOK3xMe2TDINGbo%2FqB%2Fvmy2U3aaGLNJ4S52hRGi0FaW6Ms1QGJRr0c%2FkyXxsh%2BgOGBAoOJI2hbl%2FuhyqgZJQ37C8QEc3UdKBLQh%2Fqghex5j2Xhfz1yHkcrbp6SWjNborPjxwJ2nleD3%2FVey1D0VZ0kGUUn%2F%2Be0dbKJ47wX8eXdspbEPU36YKov8bS1yAXlHLhf1MwcRKmGEVOUa99z8aTe0ipVUNbhDRAfyg%2BGz5wmsz2ffU2jyONzR2a4Pb67ogutsrvLYbarQrkNB%2BuIDeLPKsPqCmXzSkNEo4VGfVMD6t1sp7TopbhPQWlyETxUSVXuX7e5Ktz0GLH1YvKY8lvE3zNYHYPnh4Qt1ine1CNUnmawE5hufZXTn32i%2FeE5hRipz2Q2SF9o1f5Hckkst2wF1Dj%2BXnwBkRqqSulZ%2F33h4LvO8JlaPcxXU1CdjwmiRlJG9l4WyuRaCz1stywC1NY1%2FbAk5QwlencxAY6pgFRvmsj%2FoUz8%2FC3PAIqwxtwuwyXx%2Bd26egw4W4GDAHTEcC4wYKGx1fzLjKGTF%2Ft8gRrV%2FEATDP6MbHWAD%2BtPqunuFG7rGY5BxRXqmEPvSIAOUeokFK1%2FJwXB9ZfnCVIZ8L3S7EUMm62pEwl095mExPL0yi%2Fqwj5vZokc2HamaV5WxXVF1R3aTwL4HtPrjA5MiWEhMf5fvK0wBdeyQADgYfGntneevpp&X-Amz-Signature=b74652a6f3bd82ac3a7765a8440137057a59a37571d6e521edb6b326732e320a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RCDZV2S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAWFM44L%2BWGHyE69PupUyaGLlNGXOOmDIxf7XDaed6uAiBoPZ0dd56N3ZPOAtd4SQcE7rCeUL%2FPPtNxS%2FFN3BQRCyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWtSNPTen%2BZnCswPZKtwDl2nI00E4L3cZC3Co0EQvSeLvSf9NCUKB%2FtlhQkOlX%2FJrRlRtC6S6z1FTFQ8kUjHf9zI19E7A0IERTJVgnn1vu0%2BGkbjvOLaWn1TD5tkytRv58DmE%2Fz2QgAOyTguUW0g5ZzC01TCPMq5zu4yh6vT%2Bz3G5Im2vGubNOK3xMe2TDINGbo%2FqB%2Fvmy2U3aaGLNJ4S52hRGi0FaW6Ms1QGJRr0c%2FkyXxsh%2BgOGBAoOJI2hbl%2FuhyqgZJQ37C8QEc3UdKBLQh%2Fqghex5j2Xhfz1yHkcrbp6SWjNborPjxwJ2nleD3%2FVey1D0VZ0kGUUn%2F%2Be0dbKJ47wX8eXdspbEPU36YKov8bS1yAXlHLhf1MwcRKmGEVOUa99z8aTe0ipVUNbhDRAfyg%2BGz5wmsz2ffU2jyONzR2a4Pb67ogutsrvLYbarQrkNB%2BuIDeLPKsPqCmXzSkNEo4VGfVMD6t1sp7TopbhPQWlyETxUSVXuX7e5Ktz0GLH1YvKY8lvE3zNYHYPnh4Qt1ine1CNUnmawE5hufZXTn32i%2FeE5hRipz2Q2SF9o1f5Hckkst2wF1Dj%2BXnwBkRqqSulZ%2F33h4LvO8JlaPcxXU1CdjwmiRlJG9l4WyuRaCz1stywC1NY1%2FbAk5QwlencxAY6pgFRvmsj%2FoUz8%2FC3PAIqwxtwuwyXx%2Bd26egw4W4GDAHTEcC4wYKGx1fzLjKGTF%2Ft8gRrV%2FEATDP6MbHWAD%2BtPqunuFG7rGY5BxRXqmEPvSIAOUeokFK1%2FJwXB9ZfnCVIZ8L3S7EUMm62pEwl095mExPL0yi%2Fqwj5vZokc2HamaV5WxXVF1R3aTwL4HtPrjA5MiWEhMf5fvK0wBdeyQADgYfGntneevpp&X-Amz-Signature=ebe7372d7f880e982ad52ed077a7a5fe008ebb87fd990560e9a87421c852d7b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RCDZV2S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAWFM44L%2BWGHyE69PupUyaGLlNGXOOmDIxf7XDaed6uAiBoPZ0dd56N3ZPOAtd4SQcE7rCeUL%2FPPtNxS%2FFN3BQRCyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWtSNPTen%2BZnCswPZKtwDl2nI00E4L3cZC3Co0EQvSeLvSf9NCUKB%2FtlhQkOlX%2FJrRlRtC6S6z1FTFQ8kUjHf9zI19E7A0IERTJVgnn1vu0%2BGkbjvOLaWn1TD5tkytRv58DmE%2Fz2QgAOyTguUW0g5ZzC01TCPMq5zu4yh6vT%2Bz3G5Im2vGubNOK3xMe2TDINGbo%2FqB%2Fvmy2U3aaGLNJ4S52hRGi0FaW6Ms1QGJRr0c%2FkyXxsh%2BgOGBAoOJI2hbl%2FuhyqgZJQ37C8QEc3UdKBLQh%2Fqghex5j2Xhfz1yHkcrbp6SWjNborPjxwJ2nleD3%2FVey1D0VZ0kGUUn%2F%2Be0dbKJ47wX8eXdspbEPU36YKov8bS1yAXlHLhf1MwcRKmGEVOUa99z8aTe0ipVUNbhDRAfyg%2BGz5wmsz2ffU2jyONzR2a4Pb67ogutsrvLYbarQrkNB%2BuIDeLPKsPqCmXzSkNEo4VGfVMD6t1sp7TopbhPQWlyETxUSVXuX7e5Ktz0GLH1YvKY8lvE3zNYHYPnh4Qt1ine1CNUnmawE5hufZXTn32i%2FeE5hRipz2Q2SF9o1f5Hckkst2wF1Dj%2BXnwBkRqqSulZ%2F33h4LvO8JlaPcxXU1CdjwmiRlJG9l4WyuRaCz1stywC1NY1%2FbAk5QwlencxAY6pgFRvmsj%2FoUz8%2FC3PAIqwxtwuwyXx%2Bd26egw4W4GDAHTEcC4wYKGx1fzLjKGTF%2Ft8gRrV%2FEATDP6MbHWAD%2BtPqunuFG7rGY5BxRXqmEPvSIAOUeokFK1%2FJwXB9ZfnCVIZ8L3S7EUMm62pEwl095mExPL0yi%2Fqwj5vZokc2HamaV5WxXVF1R3aTwL4HtPrjA5MiWEhMf5fvK0wBdeyQADgYfGntneevpp&X-Amz-Signature=ea38a4da0456f14ae97540dcea6f2c372064f8573b1a57d4048facdf83e225af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RCDZV2S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAWFM44L%2BWGHyE69PupUyaGLlNGXOOmDIxf7XDaed6uAiBoPZ0dd56N3ZPOAtd4SQcE7rCeUL%2FPPtNxS%2FFN3BQRCyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWtSNPTen%2BZnCswPZKtwDl2nI00E4L3cZC3Co0EQvSeLvSf9NCUKB%2FtlhQkOlX%2FJrRlRtC6S6z1FTFQ8kUjHf9zI19E7A0IERTJVgnn1vu0%2BGkbjvOLaWn1TD5tkytRv58DmE%2Fz2QgAOyTguUW0g5ZzC01TCPMq5zu4yh6vT%2Bz3G5Im2vGubNOK3xMe2TDINGbo%2FqB%2Fvmy2U3aaGLNJ4S52hRGi0FaW6Ms1QGJRr0c%2FkyXxsh%2BgOGBAoOJI2hbl%2FuhyqgZJQ37C8QEc3UdKBLQh%2Fqghex5j2Xhfz1yHkcrbp6SWjNborPjxwJ2nleD3%2FVey1D0VZ0kGUUn%2F%2Be0dbKJ47wX8eXdspbEPU36YKov8bS1yAXlHLhf1MwcRKmGEVOUa99z8aTe0ipVUNbhDRAfyg%2BGz5wmsz2ffU2jyONzR2a4Pb67ogutsrvLYbarQrkNB%2BuIDeLPKsPqCmXzSkNEo4VGfVMD6t1sp7TopbhPQWlyETxUSVXuX7e5Ktz0GLH1YvKY8lvE3zNYHYPnh4Qt1ine1CNUnmawE5hufZXTn32i%2FeE5hRipz2Q2SF9o1f5Hckkst2wF1Dj%2BXnwBkRqqSulZ%2F33h4LvO8JlaPcxXU1CdjwmiRlJG9l4WyuRaCz1stywC1NY1%2FbAk5QwlencxAY6pgFRvmsj%2FoUz8%2FC3PAIqwxtwuwyXx%2Bd26egw4W4GDAHTEcC4wYKGx1fzLjKGTF%2Ft8gRrV%2FEATDP6MbHWAD%2BtPqunuFG7rGY5BxRXqmEPvSIAOUeokFK1%2FJwXB9ZfnCVIZ8L3S7EUMm62pEwl095mExPL0yi%2Fqwj5vZokc2HamaV5WxXVF1R3aTwL4HtPrjA5MiWEhMf5fvK0wBdeyQADgYfGntneevpp&X-Amz-Signature=0523f81317a1c09a7eed7a5972d52471fc08e931774112eb62f48e4b010dc2c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD2KZ27T%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFM9ZNKBS3ABY4YP1GWR9u5xUzrrPSECBVUtb%2FmWDVOAiEAjvPS4KMnGBcrsHe1VGA4TBGEudVrxpPP82Pa0gXSdFwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXt7MwNi7N8W4H8HSrcA1oh7YW34%2FO6RHY%2B1y6NrBtpbCZkQBnaAIzQMDvbGwjEelGbuDESO10J726bq1Y8LsQHz8eCGl0fsjeykmRmQP0wkZETXIxKJyKLDt%2FhoGgtnbQu5etdMcBTnLpmYF%2BxvNWZdJsZH2PRIZIJv%2Fw48bcnmwjThQZz%2Bd7S6Xs9dxwbzmyfoLQyKpintHnF2bWqBM4%2FWaEAVNgKq%2FJH%2FLWs%2BD0cKkYfTzusHNj2F%2FUidRfDATAF6hY4NEPSGp816DRCaSaAMqBWJyM3zFM8AjJ0R%2BIMn2DFfF1%2BwGYJEifp0vO%2B1b%2FiQZ7qf1m409P7CE2zFhcxuyw0jbEn5u%2F6%2F9HSJpCcQfdadwzoQSU5QudA8Qi4Pbgd6Tq7nTq2RYjmFT%2FHaWEkRamrlUZeAZSSXca71ePXvgRhnYSOtDqe2hYDyg9LCjXRcNeoc7d09KqX%2FMV2sTXavgkBwOip6ywOgFYeSA917GLim0cbO5B3j3zCO1x31yYL0%2BYRQGeUwVIzkCmS1Tu5EvgVAvA9kc4i91RlwOSfwsotzXQjtb7YguwwVO%2Bsa7W0SsETNPyPdHjaH5Nwo%2BqyXRoROHEvEhRSITbbNpwC6CnCrA8rNctgSpMQB4tx7nvA4QIyEktAFkXOMKHq3MQGOqUBBSAkjctn5M%2BWQNdUHxM%2Bf33YfmY0iUxx9KbheKFzHVBEHmM6tCv40KTQwGXZvlPiYkIKP%2B2mczsr1in%2BDr%2FSCfNQzijuIQZYPOhiah72RESQLjfHISsAjiL3QWupXGrSYA9ZaaLynkVV70DRRBpB86l4jePAhKE4Z5xa0m9SAV9dhzcfWrQHjyF5GfRIBX6dxDZUYRJRlE5IIOh6iga1j6AfcT5K&X-Amz-Signature=69049773ad1aa2ce0ff336500260c746562fe12394032a62fc823576d7593b92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZJGHSDW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcfsDCa6ZJg2dLh74gkVMFZLuukmxZvHuRMS19bJB9jwIhAK0WXW24bZM49Xl%2B3Z5onv7wKo3o79EWBAT7h74oatFvKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqQ9cokvKXZatyG7Iq3AMcENDD%2BKxyi9YZGOuUWYvtcqSPgFjuNJdKWo4m3TBi4j%2BfX34vfKGGGYRjnj74r9i3Uvr0dyH2SGHPENFDtDcc6HYv%2BdwO3vbmp8%2BtIME%2BHQ83l0mH3rVEHturRMUt7GeLeceVrBX3tU5VwPyu%2FcRl6pzoqDzo5uG3K4GEUaknKMLb21QaRrQNiAMIyYHQoC46gydTtawUTXJ7SuM7%2FjI%2BIv6P7seiDsGsXhNTsaB0gKnaNouycfz9iHLXR9ycXG48acpArJD4Fje2hODaGVoufA%2FxqnufWAmhmTpuQkhxPmlwyDfx1Zneq5Dq%2Fo4bzLEyTf0N2H%2BcRGkDkDtYvsfQt5LB2f5n%2FK24LU3tqWUtLOWnvdc5pLLIZYRlFyD0e2iopkIivok6D7dXS2hgmO860F%2F7XXVBG13EH0v04FiUtfae52DO78ytMEPNaxvOktamMBmfuN0EKhKGSXXw9Yvj1kAqfmz2I6Q%2Fq6BDmfDW6tM1Cl6sz6cLtPV5j5%2FFvI5CnnagYb6XILQxJDJa85NUSFIVjPnB9EeysrUD25twG68%2FK99Ddbmv1SHirJcvcYcwlRk4r0Nx12tqqg9k8sr%2B%2B64JLYYHDNJLE3A1OYG0pC8T45CWiVkBDYqA2jCx5NzEBjqkAfiOnN64%2F3TPYS4KxaqRDeODwu5rYfVGvvRUkfOVKxY6G0j8kPBcXXBL8XJ8NHRKjTVuUBYlLY2UEhGhP6SST6pdt7aXaCI3R5IN8fNfxCn9i6G8UdXg0Mq%2FuuEuLhC2u1V%2FAvyi3OWklmnhkiRRGX9z4n6GmkMvtHjmdDaXxuA0vIcqthMz5g5VLcF7EaXD%2BKFd5kNizqXcsKzbnHKNicerdQPL&X-Amz-Signature=13f53043d74b1c725164e7be71845af26d5d86805f0baa3cb39e1b7e9cad4b44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T3BRNQ3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqJeCyxl8pBi%2BRKhuRT5si%2B7t7YY0gbAfX0jFoHCXUlAiEA0ehZOAtf3%2FG4F7O%2BVFttOmxMH8xFxsQXGvnQU6iozU8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLUFrIfpjkWosGuTSrcA57jm%2BXXGr5eXCW6l%2F6JGcmfPgKtHIvibDTE3%2FyrXlQK0eg8htvunflruQgtR6U%2FU31YAJoKKB3Hh2KiALZ3cOy9%2BkT6R%2BvLNCU9WtfhGHOwbWVLjCrHqZ8rybih%2FgaBOekXwb1RmfJxKf2hOp2xcbB1Kfn2DcdVCVx7mVTUhMSFBPa0hxWQxvmUu8yi988B6TsxT2TCfZvhFiyatIKkFe7k3V8%2BNeqCJnasiHhq%2F%2FNpHNSoY60qLiclEyCNbYNZooGU4XYLW%2Fa6IQUSL1PNwhSrmF2luP2eRuywViHX4zStcKuRW9EEeICYSU4ByP0NShrXKcRQjZCSug8gE6EDIHJsdnTskVirIKVes1NTRGK5i%2BH9KEWz2nffuGRkq7O%2F%2F511%2BcXTL2V9WhdbUN5F7%2FSnWeQZ0Jr%2FN4XZ%2FWdRQag3S7Rd2Ke7dB%2F0vxNFCTGvn8HiwnMifpdzWDlrTcRG5zbuAnhJGK0OgytWtDgQcSCjYxl7Xy%2FmpeLK%2F5OxOqhe9r8v2wh6R466%2B8WqpMNcIfISeNzUCrZN0bOkeHjJxLXCEyy%2BYdmOusP7e7YeMeMLe74W1XGZWmPp9Tl48YFRSyg0QfAYapYIpFQ5Gha%2F%2Bu48BBuSqgzTzwTJShMFMJfn3MQGOqUBj%2FGOQGOeh24yu65mRdDvbagKMervxEf3dhuXHBW7KgFZccGcwPQxOlQsyGdeuXak25HL62WT%2FQvTBocAhz4bE33EfTKLdxL1vZTDUy0NvYNJCrKB8bE6aa4fR1S%2FXij6rUM7qwQ5TLlVpl%2FllYi3PHDagEcmpb2a17DdGb58eDIRylnrIY%2FLLZpMgrST8kRT85xsBjIgKEVeivCx%2FgLTtvKZ9aT5&X-Amz-Signature=a2ae34ac4b7036ecaff95ca2337951204f535a27dc0640299036e023bca84d39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RCDZV2S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAWFM44L%2BWGHyE69PupUyaGLlNGXOOmDIxf7XDaed6uAiBoPZ0dd56N3ZPOAtd4SQcE7rCeUL%2FPPtNxS%2FFN3BQRCyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWtSNPTen%2BZnCswPZKtwDl2nI00E4L3cZC3Co0EQvSeLvSf9NCUKB%2FtlhQkOlX%2FJrRlRtC6S6z1FTFQ8kUjHf9zI19E7A0IERTJVgnn1vu0%2BGkbjvOLaWn1TD5tkytRv58DmE%2Fz2QgAOyTguUW0g5ZzC01TCPMq5zu4yh6vT%2Bz3G5Im2vGubNOK3xMe2TDINGbo%2FqB%2Fvmy2U3aaGLNJ4S52hRGi0FaW6Ms1QGJRr0c%2FkyXxsh%2BgOGBAoOJI2hbl%2FuhyqgZJQ37C8QEc3UdKBLQh%2Fqghex5j2Xhfz1yHkcrbp6SWjNborPjxwJ2nleD3%2FVey1D0VZ0kGUUn%2F%2Be0dbKJ47wX8eXdspbEPU36YKov8bS1yAXlHLhf1MwcRKmGEVOUa99z8aTe0ipVUNbhDRAfyg%2BGz5wmsz2ffU2jyONzR2a4Pb67ogutsrvLYbarQrkNB%2BuIDeLPKsPqCmXzSkNEo4VGfVMD6t1sp7TopbhPQWlyETxUSVXuX7e5Ktz0GLH1YvKY8lvE3zNYHYPnh4Qt1ine1CNUnmawE5hufZXTn32i%2FeE5hRipz2Q2SF9o1f5Hckkst2wF1Dj%2BXnwBkRqqSulZ%2F33h4LvO8JlaPcxXU1CdjwmiRlJG9l4WyuRaCz1stywC1NY1%2FbAk5QwlencxAY6pgFRvmsj%2FoUz8%2FC3PAIqwxtwuwyXx%2Bd26egw4W4GDAHTEcC4wYKGx1fzLjKGTF%2Ft8gRrV%2FEATDP6MbHWAD%2BtPqunuFG7rGY5BxRXqmEPvSIAOUeokFK1%2FJwXB9ZfnCVIZ8L3S7EUMm62pEwl095mExPL0yi%2Fqwj5vZokc2HamaV5WxXVF1R3aTwL4HtPrjA5MiWEhMf5fvK0wBdeyQADgYfGntneevpp&X-Amz-Signature=207276ef99f1cecafc4ce646564538d7af4ce22c8d809f7493192cb5bba3b332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U73FEMKL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGZoQi7fshM9rxPMGpVWBsHF2OV0HHLgHYMhnCb9cbNQIhALEC2acCkm%2F258a48v0LuHoBP86f9BhGb0AMEDd5mWCVKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWbPCMkDrdw9lAk14q3APvTK5byRQox4kQg6zmbUaSa2jfSignbY%2FyCZIJ%2FSps0QgiGANamIBLai58uLnUlIP82IQRRMhcIn89OLuMHE7ewdMK8L9J2%2FW%2FmiAeJNzfx14GJBh32KJV0uS4srDTf7DumTcC4KamAMZoIGrrnF5lm4rjOJfs3gvZ2wqVB4MKVaKf1qBtB%2FO971IiHaWqSqh%2F2l%2FAfxirXb7kUjg76m%2B0xhBl5dWl6ftsyPgfBz6cGndn8gJ7qIEsiRx8tlX6r15SfroWprmV%2FOSLjbdw%2FN%2BrOEhdGhKgRpwZ2X4iHgNMBZIkU9lq4f0LPpveRkf1bGQoLB2N5YKhiQDbRf2O1ftJNAGg31DNyVQaMYG%2BNm5jChla89SqXwkRihbrV%2BJ0DleSOVXTRgrFbtTEluDU%2FyFBaimCDC2bN1ayRlisqXPUjIoZHXfuxi8HsUnaNjOnx9iui9u2qyXW2o51WRfIyfkMNb47zl3TJ1pD00e2LZfpeX61el2xWarJN3takdXkDQLHWzrDoLj%2BPEcYdbQEhsmNUl%2F07pd3UA0MRp83ovYYBW%2FBY7s1BNuZ%2FbVd3YnhxeHzUiP%2FxZjy9xVpiC%2FMGm9vEWPnx3DosF0hi9TeVIoszPoVhp8r32MG4fIeZTDc5NzEBjqkASYEoe8vtQ1sNTHpaQeZZg6ZQ3CDDlQ%2BwzDsNRbQRdD%2FSHH6UXre%2BiDAEc5We90gQPEYLw39JmJHTrgYuIXGpmaC%2FlYzp%2F3iicRMmMAB5iy3oKyPkoUVWyZKyZmL5gjWWjWu5yT0mlXNBC00DnNboyESGBW1TDpnJw%2BtXK7q15elKhcGhEHjEBDl716Ft95ZtSkIKgQy82TsM3dDvAI2sCP1nsFB&X-Amz-Signature=284f1bb07e93173b62e8804e31ffe5988c6e2c839b8dbf5ddf8266ffd7cb3e60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RCDZV2S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAWFM44L%2BWGHyE69PupUyaGLlNGXOOmDIxf7XDaed6uAiBoPZ0dd56N3ZPOAtd4SQcE7rCeUL%2FPPtNxS%2FFN3BQRCyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWtSNPTen%2BZnCswPZKtwDl2nI00E4L3cZC3Co0EQvSeLvSf9NCUKB%2FtlhQkOlX%2FJrRlRtC6S6z1FTFQ8kUjHf9zI19E7A0IERTJVgnn1vu0%2BGkbjvOLaWn1TD5tkytRv58DmE%2Fz2QgAOyTguUW0g5ZzC01TCPMq5zu4yh6vT%2Bz3G5Im2vGubNOK3xMe2TDINGbo%2FqB%2Fvmy2U3aaGLNJ4S52hRGi0FaW6Ms1QGJRr0c%2FkyXxsh%2BgOGBAoOJI2hbl%2FuhyqgZJQ37C8QEc3UdKBLQh%2Fqghex5j2Xhfz1yHkcrbp6SWjNborPjxwJ2nleD3%2FVey1D0VZ0kGUUn%2F%2Be0dbKJ47wX8eXdspbEPU36YKov8bS1yAXlHLhf1MwcRKmGEVOUa99z8aTe0ipVUNbhDRAfyg%2BGz5wmsz2ffU2jyONzR2a4Pb67ogutsrvLYbarQrkNB%2BuIDeLPKsPqCmXzSkNEo4VGfVMD6t1sp7TopbhPQWlyETxUSVXuX7e5Ktz0GLH1YvKY8lvE3zNYHYPnh4Qt1ine1CNUnmawE5hufZXTn32i%2FeE5hRipz2Q2SF9o1f5Hckkst2wF1Dj%2BXnwBkRqqSulZ%2F33h4LvO8JlaPcxXU1CdjwmiRlJG9l4WyuRaCz1stywC1NY1%2FbAk5QwlencxAY6pgFRvmsj%2FoUz8%2FC3PAIqwxtwuwyXx%2Bd26egw4W4GDAHTEcC4wYKGx1fzLjKGTF%2Ft8gRrV%2FEATDP6MbHWAD%2BtPqunuFG7rGY5BxRXqmEPvSIAOUeokFK1%2FJwXB9ZfnCVIZ8L3S7EUMm62pEwl095mExPL0yi%2Fqwj5vZokc2HamaV5WxXVF1R3aTwL4HtPrjA5MiWEhMf5fvK0wBdeyQADgYfGntneevpp&X-Amz-Signature=5760dd4d1a1e8eccdabd3833f0bea69a986f56e20ef641a9fe90709b887d1d1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM6PGZJ4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhJ1fpEIQKUFst23SRaKTZgyTOiUAxkgkbIuPri%2FmD6AiBJPF91EYDDIjH2c0R6jKSZenjFQwOj5sYmTVHNjceedyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKDxP6a19PumGYkvoKtwDLPhUMo5qDdGMwxnwZ7AHQpZ2s11Z9uWOQ3zsZQyePGHWUJWj8A2ddK51BlIebSrX1d2miIyATCvDsfVqS5cq4yqF9iyDReHFcDs68KPNhRKF5y0Dhy87QX%2F1ZUfCE4S2S5l3bVJXbOc9SVNeeCM7Of4J4IrSw%2B8ZAsjoWwesLJ0h%2B9yFH0l4OXDKUiRAhQAHPohosRjiTuxK8pe7ksMLw8mJSbNYN9aT73R6qkfV0B%2FsciJ1cvjq%2BUcn8peSGG1E3aNgCw%2B4x%2BLMX81XxUokFZrWkGUgYsgbwmV8Wm3FBt4EuHP8QTYYyaphanS4aiVQn2ofQl%2B%2BKgIUQvMRIwwg2mV1Gm%2Ba%2BlaEprmaxQzEBhieWrC2L5oA52cF8YX5DAfNWOpP3gCMypazBxrTP4qlldDB%2BBJM1%2BTMNwxWspzprb2tMQiKvC%2BYZzQyA1eOJacp5qqdyQEOMIiFY7nyj7Wh%2B7SEdAibsSZhuiZ5KRbNE5wHRMx1WyiQfWh4rhTIBz7l0U6bJikHz33lBhliUSCDZyUoy%2F5YU%2Fp0CvOVfs4sYJUkzk43AYEDPzQAI8ZYcFipcSLWSxFqzd2J5xCLqw6NuLJpFsQI%2B%2FQgw1CgV7srTqfvwc5h46UMJNl5yuUw1%2BXcxAY6pgEfbsTrlfXUZ37S6EsgczXfZ1IgsrgsTfLoammlvRgE4I88%2FHyzfcA%2FtDHQxNGHuXZJhbyMh74ivcluEAGi8naL5F8BArjgtzh%2BMkhlEVAVHhYkGY6UrXfL0pqO7DC7meySkbqI3R47CKG0d%2BCBCjlwbNslzcmRTXtdoC9BgrGrB4WiwsO8LyfQrjvh%2BglMMVdiUSOOlN%2FzVMz%2F9gUTzxTuX4jwhYt4&X-Amz-Signature=da4c336cf0487a2538d50b606a26cdc4b68644de8943f2bc2415ef20a95501b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RCDZV2S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAWFM44L%2BWGHyE69PupUyaGLlNGXOOmDIxf7XDaed6uAiBoPZ0dd56N3ZPOAtd4SQcE7rCeUL%2FPPtNxS%2FFN3BQRCyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWtSNPTen%2BZnCswPZKtwDl2nI00E4L3cZC3Co0EQvSeLvSf9NCUKB%2FtlhQkOlX%2FJrRlRtC6S6z1FTFQ8kUjHf9zI19E7A0IERTJVgnn1vu0%2BGkbjvOLaWn1TD5tkytRv58DmE%2Fz2QgAOyTguUW0g5ZzC01TCPMq5zu4yh6vT%2Bz3G5Im2vGubNOK3xMe2TDINGbo%2FqB%2Fvmy2U3aaGLNJ4S52hRGi0FaW6Ms1QGJRr0c%2FkyXxsh%2BgOGBAoOJI2hbl%2FuhyqgZJQ37C8QEc3UdKBLQh%2Fqghex5j2Xhfz1yHkcrbp6SWjNborPjxwJ2nleD3%2FVey1D0VZ0kGUUn%2F%2Be0dbKJ47wX8eXdspbEPU36YKov8bS1yAXlHLhf1MwcRKmGEVOUa99z8aTe0ipVUNbhDRAfyg%2BGz5wmsz2ffU2jyONzR2a4Pb67ogutsrvLYbarQrkNB%2BuIDeLPKsPqCmXzSkNEo4VGfVMD6t1sp7TopbhPQWlyETxUSVXuX7e5Ktz0GLH1YvKY8lvE3zNYHYPnh4Qt1ine1CNUnmawE5hufZXTn32i%2FeE5hRipz2Q2SF9o1f5Hckkst2wF1Dj%2BXnwBkRqqSulZ%2F33h4LvO8JlaPcxXU1CdjwmiRlJG9l4WyuRaCz1stywC1NY1%2FbAk5QwlencxAY6pgFRvmsj%2FoUz8%2FC3PAIqwxtwuwyXx%2Bd26egw4W4GDAHTEcC4wYKGx1fzLjKGTF%2Ft8gRrV%2FEATDP6MbHWAD%2BtPqunuFG7rGY5BxRXqmEPvSIAOUeokFK1%2FJwXB9ZfnCVIZ8L3S7EUMm62pEwl095mExPL0yi%2Fqwj5vZokc2HamaV5WxXVF1R3aTwL4HtPrjA5MiWEhMf5fvK0wBdeyQADgYfGntneevpp&X-Amz-Signature=9c52186c967a362bc20def75a710bd15857921b872c6498fba1bd1c8a3671f5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZDQOMWQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6u53IiDZUpglLulwYbfTAr%2FYP2EMVA%2FBrCT%2B6tyGF4AIgb%2FtEZbJBtmAOWR%2FWZalJ6fh8sAE9CsGVV4yFJzCaUmQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKv4jeRjBl6eMWo3NSrcAzHoJNV9PyckGUUFZHmMd9aNHMasLvyu19mWp0pWM3vPJBMhHIB6WrLLVq2fBHasX5Emxiy%2FXGrhALwZuXU9%2BDNY%2B4Q6h8C8joGq5CEv6gYAsjslWtusvaMrJJ1w7Pab%2FZMWv3dE5bFs%2FCCBXmivwEi%2Bq7v0j9%2FD1Y%2FKAd0H9KDHDzvzeKDbhwKU1rEmBgaoWmvHrcBbdy2QVKrhw81CfsYYPdc8L%2FsUSMeziifMKlwQ%2BxNdmtNNK6G1fQap4pL1OOJikIveKJcAYAexzPlTngxJ2MdfENClPU5czCbdVSfCENLaPZ2Qit7r21czLDBSavnOCIco5UZRRE08xsvHC%2F52mImVwyFWgm6%2BR%2FXJEd7%2BOg0W8V0LGKR%2FvDDNsICd%2BXy%2FT9DBV3fRYpHTrOpTubCMigCs3%2B0pvF2%2FZYVvn7nExMP0NiYu3LAo2ZECHf%2F5ctjm0p9joLuwU9SOAdCKWw0qH99Hi7IOVaJ14TChIaxh4T%2Fa0g1rjs6JhxW%2BjA5uk9HCSNFS8DQ3744tspvEnZ5Vh8hElAbbVI7z3zyz62R8rlVGArUQzKXPOkt4olIH6e25VUfQI5aOZXbA9bqOupVHfR2ioDOsfAFDJOrILk6HBfVJfGLNoJHqr%2BKWMMjl3MQGOqUBcBGjGNsD1RTPMVtNjppcMUIPxsevxgEoPf2%2B6Uo5JBtGwdNrcQonqBrwqzWySdM0%2Fkxoil3Jr%2FNhb76JtEboQCCp7GZLBNcBnUPOHa2wN2By0HcmOA9zACaZbdT%2BJ%2FEe8pCUy%2FFHeN%2BJs08sP12hlK1qPxeh49mmmytdmQmonBXVIMVhcYuDo97%2FTD3MiggjQXLwhr58UTn2c8e3EKhgMGvGdCmR&X-Amz-Signature=c65999748af849916f512db8bd373b2524c0a3be4f126ad991cc73aa83e83855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RCDZV2S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAWFM44L%2BWGHyE69PupUyaGLlNGXOOmDIxf7XDaed6uAiBoPZ0dd56N3ZPOAtd4SQcE7rCeUL%2FPPtNxS%2FFN3BQRCyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWtSNPTen%2BZnCswPZKtwDl2nI00E4L3cZC3Co0EQvSeLvSf9NCUKB%2FtlhQkOlX%2FJrRlRtC6S6z1FTFQ8kUjHf9zI19E7A0IERTJVgnn1vu0%2BGkbjvOLaWn1TD5tkytRv58DmE%2Fz2QgAOyTguUW0g5ZzC01TCPMq5zu4yh6vT%2Bz3G5Im2vGubNOK3xMe2TDINGbo%2FqB%2Fvmy2U3aaGLNJ4S52hRGi0FaW6Ms1QGJRr0c%2FkyXxsh%2BgOGBAoOJI2hbl%2FuhyqgZJQ37C8QEc3UdKBLQh%2Fqghex5j2Xhfz1yHkcrbp6SWjNborPjxwJ2nleD3%2FVey1D0VZ0kGUUn%2F%2Be0dbKJ47wX8eXdspbEPU36YKov8bS1yAXlHLhf1MwcRKmGEVOUa99z8aTe0ipVUNbhDRAfyg%2BGz5wmsz2ffU2jyONzR2a4Pb67ogutsrvLYbarQrkNB%2BuIDeLPKsPqCmXzSkNEo4VGfVMD6t1sp7TopbhPQWlyETxUSVXuX7e5Ktz0GLH1YvKY8lvE3zNYHYPnh4Qt1ine1CNUnmawE5hufZXTn32i%2FeE5hRipz2Q2SF9o1f5Hckkst2wF1Dj%2BXnwBkRqqSulZ%2F33h4LvO8JlaPcxXU1CdjwmiRlJG9l4WyuRaCz1stywC1NY1%2FbAk5QwlencxAY6pgFRvmsj%2FoUz8%2FC3PAIqwxtwuwyXx%2Bd26egw4W4GDAHTEcC4wYKGx1fzLjKGTF%2Ft8gRrV%2FEATDP6MbHWAD%2BtPqunuFG7rGY5BxRXqmEPvSIAOUeokFK1%2FJwXB9ZfnCVIZ8L3S7EUMm62pEwl095mExPL0yi%2Fqwj5vZokc2HamaV5WxXVF1R3aTwL4HtPrjA5MiWEhMf5fvK0wBdeyQADgYfGntneevpp&X-Amz-Signature=4783609528eb1f4df904a19f39223e65cc3162069ddb0ef69fe7c1a96edae71d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFCMHCEJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFSIGYMb5TsZeusMqzyGmYQbSEFggaExufgVahgnrLMwIgdjUhKaiTjh5E4%2BSNNHmoEzzMUHY%2BuT0NSulZRmQCnh4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0yz9wb59tMlB0HOSrcAyCpXGgQbuIfMQs16XoMFwCUwfD4cSjt5af%2FNtIoOo743c6J6KziPkPhffP58eBifEOT6dljCpxc3HjSS%2FHt%2F43SQJHL%2B1QmW6SMRye0Pstc02tCPHBs14brHnAysXJUhd4wL6JfJOBis%2BV9nV%2BL7NhwiTfu4Cp6BKYiMOybfcoi75iyHGypSZ5sN7VGTH1M5lUemw%2B98zsb4AU8kG6R%2F8l4K643VWj2J80Vh5MH27V4pbWD85fzGnxxMmcR7jDLwjZumS7raS23DrUIM2sdugHgbXD41vNwfkySu5yk%2Fqkjm9GywnZiERdbpoyqAgtG3zdag3W6jicAavk7epnxwPUAoO3Te3tAnNbbn7QVYAuHYDM134kxvmkQAACTOhzDxnrH3dK35qY6n8hl8DC4xBzxPFcPTTtGJHM59kKH3sKF19pxxZQmS8eGZVnkSpKLF8jklTQaziXCY%2B%2FoIP3GY%2BYmpVWBJ7U8x34MdW7mhKmZoBAu9P7tT6nkqJdLcLp%2FmivZPRdomOCzngXt1zLhv%2FtYtRV6K5IEy3VgvU%2BhGl2S3p2b3j3RQyU%2FZemBX2K0cuAHShhSgW37oEBaEZcUOJXF6oll58lveOz%2BOajWkARji72F4TPdLFXTjDOhMKvq3MQGOqUBLjSJC0nCBYMe26tP56j8hJlQQs7%2FuXOqhzaJLS54z9Kouk8Zdsn%2FxTQasXH8e%2Bx4JaSqP76vALPSvoi0zB%2FJE7Te71EyDEvplRXJ7zY%2BfKlAyDW0FmpFONjU0MbudHAmuVE4%2BhqXOTY%2FgqFLav7J4wuWTwJ9aqsQEA0vh1H%2FnjRJVfiADehITAphIqOiVnci2vz5fonIBowyTbvspkLvsDMapaCy&X-Amz-Signature=b2cfe2f064585af6e80cb0cabba83860ef1d01606e9d16bc62a7f1b2a7a85a45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPAVIP4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsMbDsNHS4XIkpuKWYpKLuZRG%2BmJFb%2F4nptmf4VOAbyAiB6%2BAntOg4tXjgfDfFQhMyroWrUa7813NUGyBOXtIODbSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsKkVXmNK4qbuHUZ6KtwDFS03E9yaJ4SrJ6CU6C2%2BFQjMKpQ0lQJ8Wsty4aS39A3tVOsxvP8jUnW9xWdAHXjybe7I16JQh8ZZMV7bs%2FuD0UxqiT3ZW484FPGISPneaQQOTeDk9UhE5q3tiRJoZXI4zgZ5Wuf25FbkN06NW1M5KNV%2BKU0KLMmQCBowfyAyzBvfmQIob5EZar4pEw3EPa1h%2FL7r4nF0Kfg5HOHdw3dHLBYj7Yc7vH7%2FOZMSWAAmsCoaSzKMwfGPbRYzXhrn562hbtPfPliC9RvYC58mPUsR0JRRc1sbhg85eGm5sd2rd4jYVMg1RpwFERBShYu4%2BiJgMbqPstwzTR5DVzfTFFiUDUwkebwJJolc46xdMGo4P2rcKYarLlHTcBuiXSzRfjop6nGu57U9XCJ8rX9NrSFgEQnJofwG7twa%2Fh2qKvjE0KGfyfbyX7dYSvj3t3IHf0bojURte0J9m%2FOwlXuZMFfrjxYmmot47k6RbzZTpXlvd4CqiuKbt8grs4D3lKiTn1bR2h%2Ff9qW2QWP5kCQIjSeUSwyj4q0xikXxPRwonapnN%2BIspFfVJaAH3VzLhVugGmZKV9vg4vZjzTcFbzBtXdIWW9%2BrFVO7r7L4nXbB8CTgjkmXy07QCYullIcZ72MwyOXcxAY6pgFU6evvEaUea00%2Bdm1RZxB%2BsyaSO0FIHjPZ55QLutGrgpveGDIONzyR8SGXNkOqW0xjFx8Kye%2FM%2FiI8jD%2FLOgcVM47G%2F0AtLl0Ond1IJdKQP8NJLhIsJiqcaoEqGpMxbjAhf5SOGNNHuexCiBgf7dnUWxfstzckCs0yYhcUgHRn%2FLP0qUpsa9j70a5Hhgve9nNoNnlG1xGy4gMeY63QeXAtnye64wcW&X-Amz-Signature=2b01ae6395d91fcb7c0169fd2429ceeb6f5675b9fc6ad78243b6db7bd365c1d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIA6G3FW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUOK2wqUQB2vBj8DDm1PU3kztHHAGkvVdgdxYDSz1xLQIgS%2BZz9gRf0cAXo3OUdL7D8q3QDChZggnH8MKt2GGu5JUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEylBrBR%2BscqhoFjEyrcA%2B5%2BTljqbhiMLAE4lZBT%2F1ZFsOvXEsUu50KHQISf%2Fhae%2FlwQqzhSwOu3V8sMn5EexcWCs7mvgBUwZ%2BDeE3RDmpyp0l%2BA9TMNzQDazlo4o%2FnMmDA8EB%2F8%2FQO1kbmeCvya50cZRYHFrMqbkiAUaNHr68yer8l0SRjtCy8LGwXWqvEAH%2Fy1bLayuH5QRrOKjibQCq3KhZBJ5VYZ4UxkBEBYxV4n69V7VcIrj2QY7lXNlW6DLvq%2B6RITptYjf%2BQAENGdpABmg%2BlcFRbwO6TJ5L48tSaGBhtZ1sN6EYTriI0zzIk1bjdQ5KtsOpkqObWsViTWs9%2BzU%2F4Xw0Pr6mpdDkFAZPDQqHeebqxI6yT83uqds0vq0ouoqGqLPJThkdrwhDG3bSma0bOOQlcvXcrPQdJwH%2Blv6EIZ7MoHE5jzd1FMHkaZAPdQx06x6HKwi2GsdUfmMvlF4ExnzjZ4LNlid8iIfvT1c1jMXDeVTLwZ7AD0pOHDFWbfNRsXci1KSc1AYoPiJ2sumMGT5yfrIKTScoOR9YW2nTWMNS3qcL47b5R4%2FEgNm699wLQ%2F5cTE0RCNWYTx4JUvHbBWYrT4t%2BSqllWzhQLe9N9VrOICi1SVcD%2BYImyZmw%2BmaP0YSIXF1Bv5MMLl3MQGOqUBm5olM1shWgWXHyywScS3T1r%2F3Dmh6NDTHDJMrQE822wmApk4lT1fl%2FTYkkurwOEuhRwliqzyd5hXS%2FgAk8J0OOVqJmKi1c1AYhPp3a%2FeDbIunT4WR%2BXmFyY2w71rOKT6XPQXBU93LPtXvQTbzvT638Rki6lPbMtpcWZ1r0ptq4afWxsduaVZfFMmlXJrMDhp2dHZU%2BTvS%2Ba3496JwPDbDsyAE%2BF%2F&X-Amz-Signature=8b3d2eaa066dc6800958304c97131893ac126f0261095f5e26deea7d0c8faa93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XETY26BL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaJreBKJgpF6Ud6hIQNwfxNIGPERC4a4ddo61KOcVyMAiEAwe1QYhCys4XWxO67z0BHsd0KtZiafBXonGQ5qsZ%2F73MqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4IhT4Efcq7pj3QtCrcA9YNjl8AJqI29098tfNTk3DIiFGfXNMeC3xsm7nVTPFwnqYOpbZOhUFBXv6lNWymjlHyxen6VA%2Bt28K64qnbuSOeD463scgMiH6C6YgYatzyRsP1qVybab6fIRn7JPSIZ28Z7NepJWiHgHHZkxwnpxK5c2PLHhEJ%2FWBJclXMUsmpeop3DvYvyTvXW%2FcjDKKgaU1P1mP2WMboK00L%2FPcqBfD%2FmRDqWh8vKDbKgxvPTY8sMHbVa9bp5uhdsajqhtLo7KM1UnmeQvh%2BsvzzxfT2b1SFA%2BySaQCGvS8%2Fpmq96JvwWEHRPJY4JtgrWrtfLUbf4N8PtuxlDqZf%2FFYvWYpZu8j7Z38nQXP3hmwps4zfgmwLwgy2ygUNyovjtqlCZ%2FdsXoZg1bY1iEUE4WOYQTJbZivmCvx3%2F9v4em1px%2Fj1fgB5tYt%2BSQekS%2FHwkgIIZEp%2Bxs28Ank4chRsBqaL5Fc%2BkiQaTv%2BY2lSW%2F1bxFdK5FTMAHK8oFS0iOFPP2mOnhwKXfeDT%2Ft33DRZ2YQcJU45iovVbbBs6Tt5Y4EgCk0MnDJgiGY8T%2F7mLJdIS%2BH%2BJzjS%2FncZV%2FPp5UPz1kZ2ppteuwpRGElNkQEzp8JkIf2g6tQfnukeXnxRnFTZ4ov1qMInp3MQGOqUB3LGGGl1MGHTbdUI9YflJs51t7hg4zJCcOPFIywHS%2BJiPi93nzlGaVUzVfWBMPb%2FQUnLyvl%2BT%2BAGlzl91E8S4W5%2FTB1PhGucf8AuHkHE77u3NnyUwO4A8bNTFMDgwZNYw%2FaFp%2FfWeeIXnWeeFoZbQtKbxCTAFTfG1%2Ba%2B97s8eU6LWGr10rbiaN62pvughSGDDJi13JDkwhNkNN%2Bm7KcMBw9L7uccI&X-Amz-Signature=3f3be8d988dc1922ce6a19185655bc9997d6931dd1724767ce52f72bf4df658f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NDX7VRN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICnMBxX%2FoAnKsXViopzkfgq3raV7XHpx1ky3kRpeYFimAiAtMEhJV8t8qyoV3GFOZ62%2FUCRI%2BESPGGwJKBAPAYjMQyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUsgEdlGiu04oG8%2BsKtwDH2CLoarifR0zmCKvs8mT5Ma%2Bm6wTog4PYDak50i9GEXhdgT1YKJalifITCYbBf43zhXLI7C8LpAcvar4VTGks0mTRhTWoByAlISmxyJ9Fg7P%2FdWYT8tepKoCQXj5aV2ngF0eQ7Jdn15fAmDNYM%2FvoPheDwfQOGP7h%2BYhibktRF8913Y%2FM4lpy%2FJIHI%2BP7gn87NwfGwQp5F8jK5yxIz%2FLbehgumR2E4iiza5vy0kSjnnoUIZ9Fnu7SMBQ%2BXKF9kfsarPTO6GSbOn5QDtLtE1PDw2KxY7dJacNXP9%2B0WzMlbMfWRtNBvY2Dl7tDYiJGYY7uXxs8bgCCNwLK15hB%2BlvqmphpUzK2Df%2FwO0lnF%2FjFkYdhoGE7V2kluXanHdpXvVSaSnel0%2B65%2FCWjwe3PlCJ33CPoJ11HvaYD8OelTcH%2BOZljGWLpG2G08uwahsE3VTo7hAyqQQvwOwgak1YP42txGhp8gJPNVoh5yJp1U6Dth5Wztb4bGDhdejVUs7xeyrTRRHawoq6e1mz7Pj4yBatVy0%2BwxY22%2BUdICS4Avw0mmdk8KpwDWxMYaS7HCCy%2F%2FkqMsBh3xeRbRZAU9l6GyUQT2qZBcqk6aFkg55t%2BPU3YSvmrjpH8sVvchA8xLQwk%2BncxAY6pgEvqodLnSL%2F6n8VDa8GWoKG%2BmxDRxGBlvzFUCeY0%2FwC0GrqupqRNPGxo8T2cFZjm6xWwCF8finrpK%2BcBfMpwRyuCJw2aoasHLkJHJnJBm%2FL2ZmlUkjsSQAa8vJzOqncl7frVWT7fIy0dqUXlsvWe8Kilji0%2Feed7wDYuRUai%2BSoxep%2Bs9pQ27fWQdbal%2BnVaOmAoJfZlKlv0WFLMjUqjjXhVXTPi6UW&X-Amz-Signature=9833bebe8d9dee493da46e215a27172eda16d0fb1c4d9a3b9b7ba99b67b403d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RCDZV2S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAWFM44L%2BWGHyE69PupUyaGLlNGXOOmDIxf7XDaed6uAiBoPZ0dd56N3ZPOAtd4SQcE7rCeUL%2FPPtNxS%2FFN3BQRCyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWtSNPTen%2BZnCswPZKtwDl2nI00E4L3cZC3Co0EQvSeLvSf9NCUKB%2FtlhQkOlX%2FJrRlRtC6S6z1FTFQ8kUjHf9zI19E7A0IERTJVgnn1vu0%2BGkbjvOLaWn1TD5tkytRv58DmE%2Fz2QgAOyTguUW0g5ZzC01TCPMq5zu4yh6vT%2Bz3G5Im2vGubNOK3xMe2TDINGbo%2FqB%2Fvmy2U3aaGLNJ4S52hRGi0FaW6Ms1QGJRr0c%2FkyXxsh%2BgOGBAoOJI2hbl%2FuhyqgZJQ37C8QEc3UdKBLQh%2Fqghex5j2Xhfz1yHkcrbp6SWjNborPjxwJ2nleD3%2FVey1D0VZ0kGUUn%2F%2Be0dbKJ47wX8eXdspbEPU36YKov8bS1yAXlHLhf1MwcRKmGEVOUa99z8aTe0ipVUNbhDRAfyg%2BGz5wmsz2ffU2jyONzR2a4Pb67ogutsrvLYbarQrkNB%2BuIDeLPKsPqCmXzSkNEo4VGfVMD6t1sp7TopbhPQWlyETxUSVXuX7e5Ktz0GLH1YvKY8lvE3zNYHYPnh4Qt1ine1CNUnmawE5hufZXTn32i%2FeE5hRipz2Q2SF9o1f5Hckkst2wF1Dj%2BXnwBkRqqSulZ%2F33h4LvO8JlaPcxXU1CdjwmiRlJG9l4WyuRaCz1stywC1NY1%2FbAk5QwlencxAY6pgFRvmsj%2FoUz8%2FC3PAIqwxtwuwyXx%2Bd26egw4W4GDAHTEcC4wYKGx1fzLjKGTF%2Ft8gRrV%2FEATDP6MbHWAD%2BtPqunuFG7rGY5BxRXqmEPvSIAOUeokFK1%2FJwXB9ZfnCVIZ8L3S7EUMm62pEwl095mExPL0yi%2Fqwj5vZokc2HamaV5WxXVF1R3aTwL4HtPrjA5MiWEhMf5fvK0wBdeyQADgYfGntneevpp&X-Amz-Signature=d537b601b82186de0e5243c5d8cb5e966c942e4624be42144b4c65b41fd355a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RCDZV2S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAWFM44L%2BWGHyE69PupUyaGLlNGXOOmDIxf7XDaed6uAiBoPZ0dd56N3ZPOAtd4SQcE7rCeUL%2FPPtNxS%2FFN3BQRCyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWtSNPTen%2BZnCswPZKtwDl2nI00E4L3cZC3Co0EQvSeLvSf9NCUKB%2FtlhQkOlX%2FJrRlRtC6S6z1FTFQ8kUjHf9zI19E7A0IERTJVgnn1vu0%2BGkbjvOLaWn1TD5tkytRv58DmE%2Fz2QgAOyTguUW0g5ZzC01TCPMq5zu4yh6vT%2Bz3G5Im2vGubNOK3xMe2TDINGbo%2FqB%2Fvmy2U3aaGLNJ4S52hRGi0FaW6Ms1QGJRr0c%2FkyXxsh%2BgOGBAoOJI2hbl%2FuhyqgZJQ37C8QEc3UdKBLQh%2Fqghex5j2Xhfz1yHkcrbp6SWjNborPjxwJ2nleD3%2FVey1D0VZ0kGUUn%2F%2Be0dbKJ47wX8eXdspbEPU36YKov8bS1yAXlHLhf1MwcRKmGEVOUa99z8aTe0ipVUNbhDRAfyg%2BGz5wmsz2ffU2jyONzR2a4Pb67ogutsrvLYbarQrkNB%2BuIDeLPKsPqCmXzSkNEo4VGfVMD6t1sp7TopbhPQWlyETxUSVXuX7e5Ktz0GLH1YvKY8lvE3zNYHYPnh4Qt1ine1CNUnmawE5hufZXTn32i%2FeE5hRipz2Q2SF9o1f5Hckkst2wF1Dj%2BXnwBkRqqSulZ%2F33h4LvO8JlaPcxXU1CdjwmiRlJG9l4WyuRaCz1stywC1NY1%2FbAk5QwlencxAY6pgFRvmsj%2FoUz8%2FC3PAIqwxtwuwyXx%2Bd26egw4W4GDAHTEcC4wYKGx1fzLjKGTF%2Ft8gRrV%2FEATDP6MbHWAD%2BtPqunuFG7rGY5BxRXqmEPvSIAOUeokFK1%2FJwXB9ZfnCVIZ8L3S7EUMm62pEwl095mExPL0yi%2Fqwj5vZokc2HamaV5WxXVF1R3aTwL4HtPrjA5MiWEhMf5fvK0wBdeyQADgYfGntneevpp&X-Amz-Signature=fe6291a67bacd9309b456920e21e56f223cda9c8e0ca3a88b0536c509403777d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWIJQETB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5bNlVRpAfzgxDEUU6IE%2FQLF3e%2BtVJMCTxeYz1ZJ5KwAiEAoHTZpf%2FTNmepplUn89t1rPhXsXDmIkiHGR1w2W804BMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhw0uQJj%2BIskNROHSrcA6A4%2BYjdunZUum1m2FLvxSIW%2BWtIDQ6Bh%2Byp787yUQ88i4xKYr9d5%2Fe0m7WgrDQiMdCG6RX9o8LpweI%2F9a0NO4UAVZ3ElQC4f%2BO3b2Stz9e4QFCK486GxHkbT2PCpqL0yYIHUUCQ0nxe8U1liWBSbxsRtEgZGsDtkr%2Fngi8GSoAfXJ5xCkROZ5vPIfjTR%2BzfX5Rkd83dCr20IE61imdZ7JPDTgVwcnDAJ5u%2FJxw4CFslTv6rY2%2FJWo9W3BV6ARW9c4ffbi%2FDwf5PB4o%2FZeUkRpW4cnV8%2B7Erq1YyD3ZMBMB071C6sWMvRo5gUPtl6l18seLb6386rPk9F%2Bdm75Qj7QmCPhlqNq%2BJBghGOJAVZMqt%2FNZoIJD1nd%2FOCSjgfcweq0lOQjehIXMiQGi58MhWsPh8yAOXh8cumdVm3qE2FrctSFHw7rSPzheVoP3T4bJlx2kymMVd8%2FhS7oZ3kZvJy7CVHCg01LAIi5c2s%2FGxLSJzSfZXwGZNUypjHwteQ2JDkdq9HGT9FAZJgmbfepxYaR8Hr%2BSORjnTVd%2FFWMTO422iHbV7L9yM7e%2Fftc6wtVoMBtPiy2FERNLuEww3kIxsmI9LPSgsSfEzLf4KoqtJiweTRQEFhnvxNtHCblIIMNDi3MQGOqUBfKqRbXw82GYD02k998RMplifpQBfeWwGAlk59WG8MchOkuwbQS596w8A2yo5ZUNvguc6S%2Bd2gRulfIaRFDQU1LRk6gDoYRb0K6ulCNcQa4CyS2BMBtTNyH7b0tgqqq4hEuM4skicUI5McL5JrSlZ3sHw%2BthiGN1dQOkLVmS0c3yQOq5NT5VBUgqA6E5kD4LKMdmX7ObT9w1skiUQe3fR7VznZsYI&X-Amz-Signature=c5ca0f333b63e82908c7c95e992e981bda1480e48269d02ba4ca719638c26e11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWIJQETB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5bNlVRpAfzgxDEUU6IE%2FQLF3e%2BtVJMCTxeYz1ZJ5KwAiEAoHTZpf%2FTNmepplUn89t1rPhXsXDmIkiHGR1w2W804BMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhw0uQJj%2BIskNROHSrcA6A4%2BYjdunZUum1m2FLvxSIW%2BWtIDQ6Bh%2Byp787yUQ88i4xKYr9d5%2Fe0m7WgrDQiMdCG6RX9o8LpweI%2F9a0NO4UAVZ3ElQC4f%2BO3b2Stz9e4QFCK486GxHkbT2PCpqL0yYIHUUCQ0nxe8U1liWBSbxsRtEgZGsDtkr%2Fngi8GSoAfXJ5xCkROZ5vPIfjTR%2BzfX5Rkd83dCr20IE61imdZ7JPDTgVwcnDAJ5u%2FJxw4CFslTv6rY2%2FJWo9W3BV6ARW9c4ffbi%2FDwf5PB4o%2FZeUkRpW4cnV8%2B7Erq1YyD3ZMBMB071C6sWMvRo5gUPtl6l18seLb6386rPk9F%2Bdm75Qj7QmCPhlqNq%2BJBghGOJAVZMqt%2FNZoIJD1nd%2FOCSjgfcweq0lOQjehIXMiQGi58MhWsPh8yAOXh8cumdVm3qE2FrctSFHw7rSPzheVoP3T4bJlx2kymMVd8%2FhS7oZ3kZvJy7CVHCg01LAIi5c2s%2FGxLSJzSfZXwGZNUypjHwteQ2JDkdq9HGT9FAZJgmbfepxYaR8Hr%2BSORjnTVd%2FFWMTO422iHbV7L9yM7e%2Fftc6wtVoMBtPiy2FERNLuEww3kIxsmI9LPSgsSfEzLf4KoqtJiweTRQEFhnvxNtHCblIIMNDi3MQGOqUBfKqRbXw82GYD02k998RMplifpQBfeWwGAlk59WG8MchOkuwbQS596w8A2yo5ZUNvguc6S%2Bd2gRulfIaRFDQU1LRk6gDoYRb0K6ulCNcQa4CyS2BMBtTNyH7b0tgqqq4hEuM4skicUI5McL5JrSlZ3sHw%2BthiGN1dQOkLVmS0c3yQOq5NT5VBUgqA6E5kD4LKMdmX7ObT9w1skiUQe3fR7VznZsYI&X-Amz-Signature=a94e4a3210a10a9f98574e20963068f49b775d5e16a766632d365d6f54e08c4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWIJQETB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5bNlVRpAfzgxDEUU6IE%2FQLF3e%2BtVJMCTxeYz1ZJ5KwAiEAoHTZpf%2FTNmepplUn89t1rPhXsXDmIkiHGR1w2W804BMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhw0uQJj%2BIskNROHSrcA6A4%2BYjdunZUum1m2FLvxSIW%2BWtIDQ6Bh%2Byp787yUQ88i4xKYr9d5%2Fe0m7WgrDQiMdCG6RX9o8LpweI%2F9a0NO4UAVZ3ElQC4f%2BO3b2Stz9e4QFCK486GxHkbT2PCpqL0yYIHUUCQ0nxe8U1liWBSbxsRtEgZGsDtkr%2Fngi8GSoAfXJ5xCkROZ5vPIfjTR%2BzfX5Rkd83dCr20IE61imdZ7JPDTgVwcnDAJ5u%2FJxw4CFslTv6rY2%2FJWo9W3BV6ARW9c4ffbi%2FDwf5PB4o%2FZeUkRpW4cnV8%2B7Erq1YyD3ZMBMB071C6sWMvRo5gUPtl6l18seLb6386rPk9F%2Bdm75Qj7QmCPhlqNq%2BJBghGOJAVZMqt%2FNZoIJD1nd%2FOCSjgfcweq0lOQjehIXMiQGi58MhWsPh8yAOXh8cumdVm3qE2FrctSFHw7rSPzheVoP3T4bJlx2kymMVd8%2FhS7oZ3kZvJy7CVHCg01LAIi5c2s%2FGxLSJzSfZXwGZNUypjHwteQ2JDkdq9HGT9FAZJgmbfepxYaR8Hr%2BSORjnTVd%2FFWMTO422iHbV7L9yM7e%2Fftc6wtVoMBtPiy2FERNLuEww3kIxsmI9LPSgsSfEzLf4KoqtJiweTRQEFhnvxNtHCblIIMNDi3MQGOqUBfKqRbXw82GYD02k998RMplifpQBfeWwGAlk59WG8MchOkuwbQS596w8A2yo5ZUNvguc6S%2Bd2gRulfIaRFDQU1LRk6gDoYRb0K6ulCNcQa4CyS2BMBtTNyH7b0tgqqq4hEuM4skicUI5McL5JrSlZ3sHw%2BthiGN1dQOkLVmS0c3yQOq5NT5VBUgqA6E5kD4LKMdmX7ObT9w1skiUQe3fR7VznZsYI&X-Amz-Signature=27fdb1e0b06107e25bb0399475fcc3a881f3d25c184462a62bbc177de080e813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWIJQETB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5bNlVRpAfzgxDEUU6IE%2FQLF3e%2BtVJMCTxeYz1ZJ5KwAiEAoHTZpf%2FTNmepplUn89t1rPhXsXDmIkiHGR1w2W804BMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhw0uQJj%2BIskNROHSrcA6A4%2BYjdunZUum1m2FLvxSIW%2BWtIDQ6Bh%2Byp787yUQ88i4xKYr9d5%2Fe0m7WgrDQiMdCG6RX9o8LpweI%2F9a0NO4UAVZ3ElQC4f%2BO3b2Stz9e4QFCK486GxHkbT2PCpqL0yYIHUUCQ0nxe8U1liWBSbxsRtEgZGsDtkr%2Fngi8GSoAfXJ5xCkROZ5vPIfjTR%2BzfX5Rkd83dCr20IE61imdZ7JPDTgVwcnDAJ5u%2FJxw4CFslTv6rY2%2FJWo9W3BV6ARW9c4ffbi%2FDwf5PB4o%2FZeUkRpW4cnV8%2B7Erq1YyD3ZMBMB071C6sWMvRo5gUPtl6l18seLb6386rPk9F%2Bdm75Qj7QmCPhlqNq%2BJBghGOJAVZMqt%2FNZoIJD1nd%2FOCSjgfcweq0lOQjehIXMiQGi58MhWsPh8yAOXh8cumdVm3qE2FrctSFHw7rSPzheVoP3T4bJlx2kymMVd8%2FhS7oZ3kZvJy7CVHCg01LAIi5c2s%2FGxLSJzSfZXwGZNUypjHwteQ2JDkdq9HGT9FAZJgmbfepxYaR8Hr%2BSORjnTVd%2FFWMTO422iHbV7L9yM7e%2Fftc6wtVoMBtPiy2FERNLuEww3kIxsmI9LPSgsSfEzLf4KoqtJiweTRQEFhnvxNtHCblIIMNDi3MQGOqUBfKqRbXw82GYD02k998RMplifpQBfeWwGAlk59WG8MchOkuwbQS596w8A2yo5ZUNvguc6S%2Bd2gRulfIaRFDQU1LRk6gDoYRb0K6ulCNcQa4CyS2BMBtTNyH7b0tgqqq4hEuM4skicUI5McL5JrSlZ3sHw%2BthiGN1dQOkLVmS0c3yQOq5NT5VBUgqA6E5kD4LKMdmX7ObT9w1skiUQe3fR7VznZsYI&X-Amz-Signature=6b6e75b6d6a300423a2fb6b6abdf2ee5cecad27a75103f24920b8f0bd6685491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWIJQETB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5bNlVRpAfzgxDEUU6IE%2FQLF3e%2BtVJMCTxeYz1ZJ5KwAiEAoHTZpf%2FTNmepplUn89t1rPhXsXDmIkiHGR1w2W804BMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhw0uQJj%2BIskNROHSrcA6A4%2BYjdunZUum1m2FLvxSIW%2BWtIDQ6Bh%2Byp787yUQ88i4xKYr9d5%2Fe0m7WgrDQiMdCG6RX9o8LpweI%2F9a0NO4UAVZ3ElQC4f%2BO3b2Stz9e4QFCK486GxHkbT2PCpqL0yYIHUUCQ0nxe8U1liWBSbxsRtEgZGsDtkr%2Fngi8GSoAfXJ5xCkROZ5vPIfjTR%2BzfX5Rkd83dCr20IE61imdZ7JPDTgVwcnDAJ5u%2FJxw4CFslTv6rY2%2FJWo9W3BV6ARW9c4ffbi%2FDwf5PB4o%2FZeUkRpW4cnV8%2B7Erq1YyD3ZMBMB071C6sWMvRo5gUPtl6l18seLb6386rPk9F%2Bdm75Qj7QmCPhlqNq%2BJBghGOJAVZMqt%2FNZoIJD1nd%2FOCSjgfcweq0lOQjehIXMiQGi58MhWsPh8yAOXh8cumdVm3qE2FrctSFHw7rSPzheVoP3T4bJlx2kymMVd8%2FhS7oZ3kZvJy7CVHCg01LAIi5c2s%2FGxLSJzSfZXwGZNUypjHwteQ2JDkdq9HGT9FAZJgmbfepxYaR8Hr%2BSORjnTVd%2FFWMTO422iHbV7L9yM7e%2Fftc6wtVoMBtPiy2FERNLuEww3kIxsmI9LPSgsSfEzLf4KoqtJiweTRQEFhnvxNtHCblIIMNDi3MQGOqUBfKqRbXw82GYD02k998RMplifpQBfeWwGAlk59WG8MchOkuwbQS596w8A2yo5ZUNvguc6S%2Bd2gRulfIaRFDQU1LRk6gDoYRb0K6ulCNcQa4CyS2BMBtTNyH7b0tgqqq4hEuM4skicUI5McL5JrSlZ3sHw%2BthiGN1dQOkLVmS0c3yQOq5NT5VBUgqA6E5kD4LKMdmX7ObT9w1skiUQe3fR7VznZsYI&X-Amz-Signature=9233bd49e98776cfc35e6bbd69f0876401d852be68c6331ad00ee300f5b752e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWIJQETB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5bNlVRpAfzgxDEUU6IE%2FQLF3e%2BtVJMCTxeYz1ZJ5KwAiEAoHTZpf%2FTNmepplUn89t1rPhXsXDmIkiHGR1w2W804BMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhw0uQJj%2BIskNROHSrcA6A4%2BYjdunZUum1m2FLvxSIW%2BWtIDQ6Bh%2Byp787yUQ88i4xKYr9d5%2Fe0m7WgrDQiMdCG6RX9o8LpweI%2F9a0NO4UAVZ3ElQC4f%2BO3b2Stz9e4QFCK486GxHkbT2PCpqL0yYIHUUCQ0nxe8U1liWBSbxsRtEgZGsDtkr%2Fngi8GSoAfXJ5xCkROZ5vPIfjTR%2BzfX5Rkd83dCr20IE61imdZ7JPDTgVwcnDAJ5u%2FJxw4CFslTv6rY2%2FJWo9W3BV6ARW9c4ffbi%2FDwf5PB4o%2FZeUkRpW4cnV8%2B7Erq1YyD3ZMBMB071C6sWMvRo5gUPtl6l18seLb6386rPk9F%2Bdm75Qj7QmCPhlqNq%2BJBghGOJAVZMqt%2FNZoIJD1nd%2FOCSjgfcweq0lOQjehIXMiQGi58MhWsPh8yAOXh8cumdVm3qE2FrctSFHw7rSPzheVoP3T4bJlx2kymMVd8%2FhS7oZ3kZvJy7CVHCg01LAIi5c2s%2FGxLSJzSfZXwGZNUypjHwteQ2JDkdq9HGT9FAZJgmbfepxYaR8Hr%2BSORjnTVd%2FFWMTO422iHbV7L9yM7e%2Fftc6wtVoMBtPiy2FERNLuEww3kIxsmI9LPSgsSfEzLf4KoqtJiweTRQEFhnvxNtHCblIIMNDi3MQGOqUBfKqRbXw82GYD02k998RMplifpQBfeWwGAlk59WG8MchOkuwbQS596w8A2yo5ZUNvguc6S%2Bd2gRulfIaRFDQU1LRk6gDoYRb0K6ulCNcQa4CyS2BMBtTNyH7b0tgqqq4hEuM4skicUI5McL5JrSlZ3sHw%2BthiGN1dQOkLVmS0c3yQOq5NT5VBUgqA6E5kD4LKMdmX7ObT9w1skiUQe3fR7VznZsYI&X-Amz-Signature=813fd7a91961fbf058dc2e0d406f862451d4e9dd615209e604a6b448992aa968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWIJQETB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5bNlVRpAfzgxDEUU6IE%2FQLF3e%2BtVJMCTxeYz1ZJ5KwAiEAoHTZpf%2FTNmepplUn89t1rPhXsXDmIkiHGR1w2W804BMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhw0uQJj%2BIskNROHSrcA6A4%2BYjdunZUum1m2FLvxSIW%2BWtIDQ6Bh%2Byp787yUQ88i4xKYr9d5%2Fe0m7WgrDQiMdCG6RX9o8LpweI%2F9a0NO4UAVZ3ElQC4f%2BO3b2Stz9e4QFCK486GxHkbT2PCpqL0yYIHUUCQ0nxe8U1liWBSbxsRtEgZGsDtkr%2Fngi8GSoAfXJ5xCkROZ5vPIfjTR%2BzfX5Rkd83dCr20IE61imdZ7JPDTgVwcnDAJ5u%2FJxw4CFslTv6rY2%2FJWo9W3BV6ARW9c4ffbi%2FDwf5PB4o%2FZeUkRpW4cnV8%2B7Erq1YyD3ZMBMB071C6sWMvRo5gUPtl6l18seLb6386rPk9F%2Bdm75Qj7QmCPhlqNq%2BJBghGOJAVZMqt%2FNZoIJD1nd%2FOCSjgfcweq0lOQjehIXMiQGi58MhWsPh8yAOXh8cumdVm3qE2FrctSFHw7rSPzheVoP3T4bJlx2kymMVd8%2FhS7oZ3kZvJy7CVHCg01LAIi5c2s%2FGxLSJzSfZXwGZNUypjHwteQ2JDkdq9HGT9FAZJgmbfepxYaR8Hr%2BSORjnTVd%2FFWMTO422iHbV7L9yM7e%2Fftc6wtVoMBtPiy2FERNLuEww3kIxsmI9LPSgsSfEzLf4KoqtJiweTRQEFhnvxNtHCblIIMNDi3MQGOqUBfKqRbXw82GYD02k998RMplifpQBfeWwGAlk59WG8MchOkuwbQS596w8A2yo5ZUNvguc6S%2Bd2gRulfIaRFDQU1LRk6gDoYRb0K6ulCNcQa4CyS2BMBtTNyH7b0tgqqq4hEuM4skicUI5McL5JrSlZ3sHw%2BthiGN1dQOkLVmS0c3yQOq5NT5VBUgqA6E5kD4LKMdmX7ObT9w1skiUQe3fR7VznZsYI&X-Amz-Signature=6429c553f12828602b601185a41649da03d3413b2e61b42421617e5767d417af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWIJQETB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5bNlVRpAfzgxDEUU6IE%2FQLF3e%2BtVJMCTxeYz1ZJ5KwAiEAoHTZpf%2FTNmepplUn89t1rPhXsXDmIkiHGR1w2W804BMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhw0uQJj%2BIskNROHSrcA6A4%2BYjdunZUum1m2FLvxSIW%2BWtIDQ6Bh%2Byp787yUQ88i4xKYr9d5%2Fe0m7WgrDQiMdCG6RX9o8LpweI%2F9a0NO4UAVZ3ElQC4f%2BO3b2Stz9e4QFCK486GxHkbT2PCpqL0yYIHUUCQ0nxe8U1liWBSbxsRtEgZGsDtkr%2Fngi8GSoAfXJ5xCkROZ5vPIfjTR%2BzfX5Rkd83dCr20IE61imdZ7JPDTgVwcnDAJ5u%2FJxw4CFslTv6rY2%2FJWo9W3BV6ARW9c4ffbi%2FDwf5PB4o%2FZeUkRpW4cnV8%2B7Erq1YyD3ZMBMB071C6sWMvRo5gUPtl6l18seLb6386rPk9F%2Bdm75Qj7QmCPhlqNq%2BJBghGOJAVZMqt%2FNZoIJD1nd%2FOCSjgfcweq0lOQjehIXMiQGi58MhWsPh8yAOXh8cumdVm3qE2FrctSFHw7rSPzheVoP3T4bJlx2kymMVd8%2FhS7oZ3kZvJy7CVHCg01LAIi5c2s%2FGxLSJzSfZXwGZNUypjHwteQ2JDkdq9HGT9FAZJgmbfepxYaR8Hr%2BSORjnTVd%2FFWMTO422iHbV7L9yM7e%2Fftc6wtVoMBtPiy2FERNLuEww3kIxsmI9LPSgsSfEzLf4KoqtJiweTRQEFhnvxNtHCblIIMNDi3MQGOqUBfKqRbXw82GYD02k998RMplifpQBfeWwGAlk59WG8MchOkuwbQS596w8A2yo5ZUNvguc6S%2Bd2gRulfIaRFDQU1LRk6gDoYRb0K6ulCNcQa4CyS2BMBtTNyH7b0tgqqq4hEuM4skicUI5McL5JrSlZ3sHw%2BthiGN1dQOkLVmS0c3yQOq5NT5VBUgqA6E5kD4LKMdmX7ObT9w1skiUQe3fR7VznZsYI&X-Amz-Signature=cb7193f65800f07393168027275b35047496d89fe71dd175e13636d0aa0b9d13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWIJQETB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5bNlVRpAfzgxDEUU6IE%2FQLF3e%2BtVJMCTxeYz1ZJ5KwAiEAoHTZpf%2FTNmepplUn89t1rPhXsXDmIkiHGR1w2W804BMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhw0uQJj%2BIskNROHSrcA6A4%2BYjdunZUum1m2FLvxSIW%2BWtIDQ6Bh%2Byp787yUQ88i4xKYr9d5%2Fe0m7WgrDQiMdCG6RX9o8LpweI%2F9a0NO4UAVZ3ElQC4f%2BO3b2Stz9e4QFCK486GxHkbT2PCpqL0yYIHUUCQ0nxe8U1liWBSbxsRtEgZGsDtkr%2Fngi8GSoAfXJ5xCkROZ5vPIfjTR%2BzfX5Rkd83dCr20IE61imdZ7JPDTgVwcnDAJ5u%2FJxw4CFslTv6rY2%2FJWo9W3BV6ARW9c4ffbi%2FDwf5PB4o%2FZeUkRpW4cnV8%2B7Erq1YyD3ZMBMB071C6sWMvRo5gUPtl6l18seLb6386rPk9F%2Bdm75Qj7QmCPhlqNq%2BJBghGOJAVZMqt%2FNZoIJD1nd%2FOCSjgfcweq0lOQjehIXMiQGi58MhWsPh8yAOXh8cumdVm3qE2FrctSFHw7rSPzheVoP3T4bJlx2kymMVd8%2FhS7oZ3kZvJy7CVHCg01LAIi5c2s%2FGxLSJzSfZXwGZNUypjHwteQ2JDkdq9HGT9FAZJgmbfepxYaR8Hr%2BSORjnTVd%2FFWMTO422iHbV7L9yM7e%2Fftc6wtVoMBtPiy2FERNLuEww3kIxsmI9LPSgsSfEzLf4KoqtJiweTRQEFhnvxNtHCblIIMNDi3MQGOqUBfKqRbXw82GYD02k998RMplifpQBfeWwGAlk59WG8MchOkuwbQS596w8A2yo5ZUNvguc6S%2Bd2gRulfIaRFDQU1LRk6gDoYRb0K6ulCNcQa4CyS2BMBtTNyH7b0tgqqq4hEuM4skicUI5McL5JrSlZ3sHw%2BthiGN1dQOkLVmS0c3yQOq5NT5VBUgqA6E5kD4LKMdmX7ObT9w1skiUQe3fR7VznZsYI&X-Amz-Signature=c0684b4d82ecf23c9d11a3acbb516258ae9952b1c338a363a28592775f65bc47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWIJQETB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5bNlVRpAfzgxDEUU6IE%2FQLF3e%2BtVJMCTxeYz1ZJ5KwAiEAoHTZpf%2FTNmepplUn89t1rPhXsXDmIkiHGR1w2W804BMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhw0uQJj%2BIskNROHSrcA6A4%2BYjdunZUum1m2FLvxSIW%2BWtIDQ6Bh%2Byp787yUQ88i4xKYr9d5%2Fe0m7WgrDQiMdCG6RX9o8LpweI%2F9a0NO4UAVZ3ElQC4f%2BO3b2Stz9e4QFCK486GxHkbT2PCpqL0yYIHUUCQ0nxe8U1liWBSbxsRtEgZGsDtkr%2Fngi8GSoAfXJ5xCkROZ5vPIfjTR%2BzfX5Rkd83dCr20IE61imdZ7JPDTgVwcnDAJ5u%2FJxw4CFslTv6rY2%2FJWo9W3BV6ARW9c4ffbi%2FDwf5PB4o%2FZeUkRpW4cnV8%2B7Erq1YyD3ZMBMB071C6sWMvRo5gUPtl6l18seLb6386rPk9F%2Bdm75Qj7QmCPhlqNq%2BJBghGOJAVZMqt%2FNZoIJD1nd%2FOCSjgfcweq0lOQjehIXMiQGi58MhWsPh8yAOXh8cumdVm3qE2FrctSFHw7rSPzheVoP3T4bJlx2kymMVd8%2FhS7oZ3kZvJy7CVHCg01LAIi5c2s%2FGxLSJzSfZXwGZNUypjHwteQ2JDkdq9HGT9FAZJgmbfepxYaR8Hr%2BSORjnTVd%2FFWMTO422iHbV7L9yM7e%2Fftc6wtVoMBtPiy2FERNLuEww3kIxsmI9LPSgsSfEzLf4KoqtJiweTRQEFhnvxNtHCblIIMNDi3MQGOqUBfKqRbXw82GYD02k998RMplifpQBfeWwGAlk59WG8MchOkuwbQS596w8A2yo5ZUNvguc6S%2Bd2gRulfIaRFDQU1LRk6gDoYRb0K6ulCNcQa4CyS2BMBtTNyH7b0tgqqq4hEuM4skicUI5McL5JrSlZ3sHw%2BthiGN1dQOkLVmS0c3yQOq5NT5VBUgqA6E5kD4LKMdmX7ObT9w1skiUQe3fR7VznZsYI&X-Amz-Signature=96c1218a86472256becedbf711a2f84e70ba182a9fffcfde9a923a6fe3176796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
