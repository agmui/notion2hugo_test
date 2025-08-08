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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O2JGGE5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC57kySgX9XCxGFh7qvuGxHUQECFO9LAKqpOTDJyfGlDAiB4wBDkTcvCDTKEcIYT7uDBsXNEakJlLHqNvp%2FCl8uRQSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH8XEwAZsu%2Bgugb3WKtwDLn7XJH5qInCgpMiNfYYt4l9xVjY%2FG0xjtekIlFsTgfzi9dDpfrsCR8woJ8P%2FaSM%2BWRmGwtpP%2B7fyLcUbPtZeKZ862Jwr%2Ffbdj3FPrnqq5orAtCWJ8dK%2FLYBi9eIi48osKXWfrtoxJyRKKsCG2vk1nlTHN%2FJxcuj%2F7KRVX77lC3ELYhMuvxlGNDlnWWD92KjQRKReVceLox4JmxdOpixydeN8qd2vheVqkp8KyMdRJqxROONf%2FvgaNaNM2uM8uYlzPvQgvWstLmNCtSfIitiKHWyuzX%2BYdFhPqDYxq3otbL0nf6vQOBtogS7nX%2FFAF2wTPM6hCKHZad4teW%2B4iVYG8amub1IauFn4ueCjEl2tBq3X4J%2FaXA4hi70jaLa0PNGaFwTeihdL7P3s1bhtXRq574G2WBkU6m%2BECWannr%2FOuPU9ljsHPGRPYgva3m9Y9fDStrDk2OIciKeXb7cYq5b0AFE%2FFXneAkOjtcfOjd8tnDUIM%2Bp65Ywn6gi7iY0t9A34Y2cwY3tAC%2F0Ho3Ur3fMv6B0kpwV16aEsz2lx18yLS3tC012Db1B%2FT8q7jb3Z7ywU3XpX%2Bckq5D5tjOBpDpM5V3rJNNcx6rEFHZowrf595hi3nfSXwraZKWrQe4Uw8pLXxAY6pgGw%2Fh7Vh%2Bkngt4hjGSInsZ7i3GretMUUUcjE0N0J4gqu8dMftLVmls4H3NDgSLcIhulejORVmCap16TbWtgANcHBNkmcfoGLBprsZqlWBgZlW%2Bn5EXTZ0hpyo86GX7U7w5XesCle1b1wrt1sS64M6TyvMwx8rsodgbNaxQLZRxVfJ7E6XVw%2FB%2BnLQwTjC%2BpLjtvNJRl6dvKo2yLc%2B0sbUrAnjJdE7Ij&X-Amz-Signature=51ae50b8043c6c4dcd4003bb0fbadef4f9266fde2809d50af012d975feb60f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O2JGGE5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC57kySgX9XCxGFh7qvuGxHUQECFO9LAKqpOTDJyfGlDAiB4wBDkTcvCDTKEcIYT7uDBsXNEakJlLHqNvp%2FCl8uRQSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH8XEwAZsu%2Bgugb3WKtwDLn7XJH5qInCgpMiNfYYt4l9xVjY%2FG0xjtekIlFsTgfzi9dDpfrsCR8woJ8P%2FaSM%2BWRmGwtpP%2B7fyLcUbPtZeKZ862Jwr%2Ffbdj3FPrnqq5orAtCWJ8dK%2FLYBi9eIi48osKXWfrtoxJyRKKsCG2vk1nlTHN%2FJxcuj%2F7KRVX77lC3ELYhMuvxlGNDlnWWD92KjQRKReVceLox4JmxdOpixydeN8qd2vheVqkp8KyMdRJqxROONf%2FvgaNaNM2uM8uYlzPvQgvWstLmNCtSfIitiKHWyuzX%2BYdFhPqDYxq3otbL0nf6vQOBtogS7nX%2FFAF2wTPM6hCKHZad4teW%2B4iVYG8amub1IauFn4ueCjEl2tBq3X4J%2FaXA4hi70jaLa0PNGaFwTeihdL7P3s1bhtXRq574G2WBkU6m%2BECWannr%2FOuPU9ljsHPGRPYgva3m9Y9fDStrDk2OIciKeXb7cYq5b0AFE%2FFXneAkOjtcfOjd8tnDUIM%2Bp65Ywn6gi7iY0t9A34Y2cwY3tAC%2F0Ho3Ur3fMv6B0kpwV16aEsz2lx18yLS3tC012Db1B%2FT8q7jb3Z7ywU3XpX%2Bckq5D5tjOBpDpM5V3rJNNcx6rEFHZowrf595hi3nfSXwraZKWrQe4Uw8pLXxAY6pgGw%2Fh7Vh%2Bkngt4hjGSInsZ7i3GretMUUUcjE0N0J4gqu8dMftLVmls4H3NDgSLcIhulejORVmCap16TbWtgANcHBNkmcfoGLBprsZqlWBgZlW%2Bn5EXTZ0hpyo86GX7U7w5XesCle1b1wrt1sS64M6TyvMwx8rsodgbNaxQLZRxVfJ7E6XVw%2FB%2BnLQwTjC%2BpLjtvNJRl6dvKo2yLc%2B0sbUrAnjJdE7Ij&X-Amz-Signature=a021c3931e306c7c7bcfe937029431a781948939b002cf26d3b52d01b17a3556&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O2JGGE5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC57kySgX9XCxGFh7qvuGxHUQECFO9LAKqpOTDJyfGlDAiB4wBDkTcvCDTKEcIYT7uDBsXNEakJlLHqNvp%2FCl8uRQSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH8XEwAZsu%2Bgugb3WKtwDLn7XJH5qInCgpMiNfYYt4l9xVjY%2FG0xjtekIlFsTgfzi9dDpfrsCR8woJ8P%2FaSM%2BWRmGwtpP%2B7fyLcUbPtZeKZ862Jwr%2Ffbdj3FPrnqq5orAtCWJ8dK%2FLYBi9eIi48osKXWfrtoxJyRKKsCG2vk1nlTHN%2FJxcuj%2F7KRVX77lC3ELYhMuvxlGNDlnWWD92KjQRKReVceLox4JmxdOpixydeN8qd2vheVqkp8KyMdRJqxROONf%2FvgaNaNM2uM8uYlzPvQgvWstLmNCtSfIitiKHWyuzX%2BYdFhPqDYxq3otbL0nf6vQOBtogS7nX%2FFAF2wTPM6hCKHZad4teW%2B4iVYG8amub1IauFn4ueCjEl2tBq3X4J%2FaXA4hi70jaLa0PNGaFwTeihdL7P3s1bhtXRq574G2WBkU6m%2BECWannr%2FOuPU9ljsHPGRPYgva3m9Y9fDStrDk2OIciKeXb7cYq5b0AFE%2FFXneAkOjtcfOjd8tnDUIM%2Bp65Ywn6gi7iY0t9A34Y2cwY3tAC%2F0Ho3Ur3fMv6B0kpwV16aEsz2lx18yLS3tC012Db1B%2FT8q7jb3Z7ywU3XpX%2Bckq5D5tjOBpDpM5V3rJNNcx6rEFHZowrf595hi3nfSXwraZKWrQe4Uw8pLXxAY6pgGw%2Fh7Vh%2Bkngt4hjGSInsZ7i3GretMUUUcjE0N0J4gqu8dMftLVmls4H3NDgSLcIhulejORVmCap16TbWtgANcHBNkmcfoGLBprsZqlWBgZlW%2Bn5EXTZ0hpyo86GX7U7w5XesCle1b1wrt1sS64M6TyvMwx8rsodgbNaxQLZRxVfJ7E6XVw%2FB%2BnLQwTjC%2BpLjtvNJRl6dvKo2yLc%2B0sbUrAnjJdE7Ij&X-Amz-Signature=8e62ff851846fb3e6d7705f65307fd19f17488b95fa3308253f6ee223ac47d96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O2JGGE5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC57kySgX9XCxGFh7qvuGxHUQECFO9LAKqpOTDJyfGlDAiB4wBDkTcvCDTKEcIYT7uDBsXNEakJlLHqNvp%2FCl8uRQSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH8XEwAZsu%2Bgugb3WKtwDLn7XJH5qInCgpMiNfYYt4l9xVjY%2FG0xjtekIlFsTgfzi9dDpfrsCR8woJ8P%2FaSM%2BWRmGwtpP%2B7fyLcUbPtZeKZ862Jwr%2Ffbdj3FPrnqq5orAtCWJ8dK%2FLYBi9eIi48osKXWfrtoxJyRKKsCG2vk1nlTHN%2FJxcuj%2F7KRVX77lC3ELYhMuvxlGNDlnWWD92KjQRKReVceLox4JmxdOpixydeN8qd2vheVqkp8KyMdRJqxROONf%2FvgaNaNM2uM8uYlzPvQgvWstLmNCtSfIitiKHWyuzX%2BYdFhPqDYxq3otbL0nf6vQOBtogS7nX%2FFAF2wTPM6hCKHZad4teW%2B4iVYG8amub1IauFn4ueCjEl2tBq3X4J%2FaXA4hi70jaLa0PNGaFwTeihdL7P3s1bhtXRq574G2WBkU6m%2BECWannr%2FOuPU9ljsHPGRPYgva3m9Y9fDStrDk2OIciKeXb7cYq5b0AFE%2FFXneAkOjtcfOjd8tnDUIM%2Bp65Ywn6gi7iY0t9A34Y2cwY3tAC%2F0Ho3Ur3fMv6B0kpwV16aEsz2lx18yLS3tC012Db1B%2FT8q7jb3Z7ywU3XpX%2Bckq5D5tjOBpDpM5V3rJNNcx6rEFHZowrf595hi3nfSXwraZKWrQe4Uw8pLXxAY6pgGw%2Fh7Vh%2Bkngt4hjGSInsZ7i3GretMUUUcjE0N0J4gqu8dMftLVmls4H3NDgSLcIhulejORVmCap16TbWtgANcHBNkmcfoGLBprsZqlWBgZlW%2Bn5EXTZ0hpyo86GX7U7w5XesCle1b1wrt1sS64M6TyvMwx8rsodgbNaxQLZRxVfJ7E6XVw%2FB%2BnLQwTjC%2BpLjtvNJRl6dvKo2yLc%2B0sbUrAnjJdE7Ij&X-Amz-Signature=8fcf60f7404456bd087860d38568e3fd4ed1673d6801cff6f726e6782c073ede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O2JGGE5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC57kySgX9XCxGFh7qvuGxHUQECFO9LAKqpOTDJyfGlDAiB4wBDkTcvCDTKEcIYT7uDBsXNEakJlLHqNvp%2FCl8uRQSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH8XEwAZsu%2Bgugb3WKtwDLn7XJH5qInCgpMiNfYYt4l9xVjY%2FG0xjtekIlFsTgfzi9dDpfrsCR8woJ8P%2FaSM%2BWRmGwtpP%2B7fyLcUbPtZeKZ862Jwr%2Ffbdj3FPrnqq5orAtCWJ8dK%2FLYBi9eIi48osKXWfrtoxJyRKKsCG2vk1nlTHN%2FJxcuj%2F7KRVX77lC3ELYhMuvxlGNDlnWWD92KjQRKReVceLox4JmxdOpixydeN8qd2vheVqkp8KyMdRJqxROONf%2FvgaNaNM2uM8uYlzPvQgvWstLmNCtSfIitiKHWyuzX%2BYdFhPqDYxq3otbL0nf6vQOBtogS7nX%2FFAF2wTPM6hCKHZad4teW%2B4iVYG8amub1IauFn4ueCjEl2tBq3X4J%2FaXA4hi70jaLa0PNGaFwTeihdL7P3s1bhtXRq574G2WBkU6m%2BECWannr%2FOuPU9ljsHPGRPYgva3m9Y9fDStrDk2OIciKeXb7cYq5b0AFE%2FFXneAkOjtcfOjd8tnDUIM%2Bp65Ywn6gi7iY0t9A34Y2cwY3tAC%2F0Ho3Ur3fMv6B0kpwV16aEsz2lx18yLS3tC012Db1B%2FT8q7jb3Z7ywU3XpX%2Bckq5D5tjOBpDpM5V3rJNNcx6rEFHZowrf595hi3nfSXwraZKWrQe4Uw8pLXxAY6pgGw%2Fh7Vh%2Bkngt4hjGSInsZ7i3GretMUUUcjE0N0J4gqu8dMftLVmls4H3NDgSLcIhulejORVmCap16TbWtgANcHBNkmcfoGLBprsZqlWBgZlW%2Bn5EXTZ0hpyo86GX7U7w5XesCle1b1wrt1sS64M6TyvMwx8rsodgbNaxQLZRxVfJ7E6XVw%2FB%2BnLQwTjC%2BpLjtvNJRl6dvKo2yLc%2B0sbUrAnjJdE7Ij&X-Amz-Signature=b1135c760fd4cd4aab077c9ad0877c4e59b1b5fc61e63ce6c4eb2a18a5a3f39a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O2JGGE5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC57kySgX9XCxGFh7qvuGxHUQECFO9LAKqpOTDJyfGlDAiB4wBDkTcvCDTKEcIYT7uDBsXNEakJlLHqNvp%2FCl8uRQSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH8XEwAZsu%2Bgugb3WKtwDLn7XJH5qInCgpMiNfYYt4l9xVjY%2FG0xjtekIlFsTgfzi9dDpfrsCR8woJ8P%2FaSM%2BWRmGwtpP%2B7fyLcUbPtZeKZ862Jwr%2Ffbdj3FPrnqq5orAtCWJ8dK%2FLYBi9eIi48osKXWfrtoxJyRKKsCG2vk1nlTHN%2FJxcuj%2F7KRVX77lC3ELYhMuvxlGNDlnWWD92KjQRKReVceLox4JmxdOpixydeN8qd2vheVqkp8KyMdRJqxROONf%2FvgaNaNM2uM8uYlzPvQgvWstLmNCtSfIitiKHWyuzX%2BYdFhPqDYxq3otbL0nf6vQOBtogS7nX%2FFAF2wTPM6hCKHZad4teW%2B4iVYG8amub1IauFn4ueCjEl2tBq3X4J%2FaXA4hi70jaLa0PNGaFwTeihdL7P3s1bhtXRq574G2WBkU6m%2BECWannr%2FOuPU9ljsHPGRPYgva3m9Y9fDStrDk2OIciKeXb7cYq5b0AFE%2FFXneAkOjtcfOjd8tnDUIM%2Bp65Ywn6gi7iY0t9A34Y2cwY3tAC%2F0Ho3Ur3fMv6B0kpwV16aEsz2lx18yLS3tC012Db1B%2FT8q7jb3Z7ywU3XpX%2Bckq5D5tjOBpDpM5V3rJNNcx6rEFHZowrf595hi3nfSXwraZKWrQe4Uw8pLXxAY6pgGw%2Fh7Vh%2Bkngt4hjGSInsZ7i3GretMUUUcjE0N0J4gqu8dMftLVmls4H3NDgSLcIhulejORVmCap16TbWtgANcHBNkmcfoGLBprsZqlWBgZlW%2Bn5EXTZ0hpyo86GX7U7w5XesCle1b1wrt1sS64M6TyvMwx8rsodgbNaxQLZRxVfJ7E6XVw%2FB%2BnLQwTjC%2BpLjtvNJRl6dvKo2yLc%2B0sbUrAnjJdE7Ij&X-Amz-Signature=bf5c00b65722f238a5e0a6856f0497cb5c1642837ddef8530edf0e0077e086dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O2JGGE5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC57kySgX9XCxGFh7qvuGxHUQECFO9LAKqpOTDJyfGlDAiB4wBDkTcvCDTKEcIYT7uDBsXNEakJlLHqNvp%2FCl8uRQSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH8XEwAZsu%2Bgugb3WKtwDLn7XJH5qInCgpMiNfYYt4l9xVjY%2FG0xjtekIlFsTgfzi9dDpfrsCR8woJ8P%2FaSM%2BWRmGwtpP%2B7fyLcUbPtZeKZ862Jwr%2Ffbdj3FPrnqq5orAtCWJ8dK%2FLYBi9eIi48osKXWfrtoxJyRKKsCG2vk1nlTHN%2FJxcuj%2F7KRVX77lC3ELYhMuvxlGNDlnWWD92KjQRKReVceLox4JmxdOpixydeN8qd2vheVqkp8KyMdRJqxROONf%2FvgaNaNM2uM8uYlzPvQgvWstLmNCtSfIitiKHWyuzX%2BYdFhPqDYxq3otbL0nf6vQOBtogS7nX%2FFAF2wTPM6hCKHZad4teW%2B4iVYG8amub1IauFn4ueCjEl2tBq3X4J%2FaXA4hi70jaLa0PNGaFwTeihdL7P3s1bhtXRq574G2WBkU6m%2BECWannr%2FOuPU9ljsHPGRPYgva3m9Y9fDStrDk2OIciKeXb7cYq5b0AFE%2FFXneAkOjtcfOjd8tnDUIM%2Bp65Ywn6gi7iY0t9A34Y2cwY3tAC%2F0Ho3Ur3fMv6B0kpwV16aEsz2lx18yLS3tC012Db1B%2FT8q7jb3Z7ywU3XpX%2Bckq5D5tjOBpDpM5V3rJNNcx6rEFHZowrf595hi3nfSXwraZKWrQe4Uw8pLXxAY6pgGw%2Fh7Vh%2Bkngt4hjGSInsZ7i3GretMUUUcjE0N0J4gqu8dMftLVmls4H3NDgSLcIhulejORVmCap16TbWtgANcHBNkmcfoGLBprsZqlWBgZlW%2Bn5EXTZ0hpyo86GX7U7w5XesCle1b1wrt1sS64M6TyvMwx8rsodgbNaxQLZRxVfJ7E6XVw%2FB%2BnLQwTjC%2BpLjtvNJRl6dvKo2yLc%2B0sbUrAnjJdE7Ij&X-Amz-Signature=086704e1372495d20900ad420c426fe04dfdb57cbeeb8fdf930fde5b059c1548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O2JGGE5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC57kySgX9XCxGFh7qvuGxHUQECFO9LAKqpOTDJyfGlDAiB4wBDkTcvCDTKEcIYT7uDBsXNEakJlLHqNvp%2FCl8uRQSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH8XEwAZsu%2Bgugb3WKtwDLn7XJH5qInCgpMiNfYYt4l9xVjY%2FG0xjtekIlFsTgfzi9dDpfrsCR8woJ8P%2FaSM%2BWRmGwtpP%2B7fyLcUbPtZeKZ862Jwr%2Ffbdj3FPrnqq5orAtCWJ8dK%2FLYBi9eIi48osKXWfrtoxJyRKKsCG2vk1nlTHN%2FJxcuj%2F7KRVX77lC3ELYhMuvxlGNDlnWWD92KjQRKReVceLox4JmxdOpixydeN8qd2vheVqkp8KyMdRJqxROONf%2FvgaNaNM2uM8uYlzPvQgvWstLmNCtSfIitiKHWyuzX%2BYdFhPqDYxq3otbL0nf6vQOBtogS7nX%2FFAF2wTPM6hCKHZad4teW%2B4iVYG8amub1IauFn4ueCjEl2tBq3X4J%2FaXA4hi70jaLa0PNGaFwTeihdL7P3s1bhtXRq574G2WBkU6m%2BECWannr%2FOuPU9ljsHPGRPYgva3m9Y9fDStrDk2OIciKeXb7cYq5b0AFE%2FFXneAkOjtcfOjd8tnDUIM%2Bp65Ywn6gi7iY0t9A34Y2cwY3tAC%2F0Ho3Ur3fMv6B0kpwV16aEsz2lx18yLS3tC012Db1B%2FT8q7jb3Z7ywU3XpX%2Bckq5D5tjOBpDpM5V3rJNNcx6rEFHZowrf595hi3nfSXwraZKWrQe4Uw8pLXxAY6pgGw%2Fh7Vh%2Bkngt4hjGSInsZ7i3GretMUUUcjE0N0J4gqu8dMftLVmls4H3NDgSLcIhulejORVmCap16TbWtgANcHBNkmcfoGLBprsZqlWBgZlW%2Bn5EXTZ0hpyo86GX7U7w5XesCle1b1wrt1sS64M6TyvMwx8rsodgbNaxQLZRxVfJ7E6XVw%2FB%2BnLQwTjC%2BpLjtvNJRl6dvKo2yLc%2B0sbUrAnjJdE7Ij&X-Amz-Signature=ef6c75467dadd577b81a4dcb91812e1815e5a5ee13f53609c4270170adac577a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O2JGGE5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC57kySgX9XCxGFh7qvuGxHUQECFO9LAKqpOTDJyfGlDAiB4wBDkTcvCDTKEcIYT7uDBsXNEakJlLHqNvp%2FCl8uRQSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH8XEwAZsu%2Bgugb3WKtwDLn7XJH5qInCgpMiNfYYt4l9xVjY%2FG0xjtekIlFsTgfzi9dDpfrsCR8woJ8P%2FaSM%2BWRmGwtpP%2B7fyLcUbPtZeKZ862Jwr%2Ffbdj3FPrnqq5orAtCWJ8dK%2FLYBi9eIi48osKXWfrtoxJyRKKsCG2vk1nlTHN%2FJxcuj%2F7KRVX77lC3ELYhMuvxlGNDlnWWD92KjQRKReVceLox4JmxdOpixydeN8qd2vheVqkp8KyMdRJqxROONf%2FvgaNaNM2uM8uYlzPvQgvWstLmNCtSfIitiKHWyuzX%2BYdFhPqDYxq3otbL0nf6vQOBtogS7nX%2FFAF2wTPM6hCKHZad4teW%2B4iVYG8amub1IauFn4ueCjEl2tBq3X4J%2FaXA4hi70jaLa0PNGaFwTeihdL7P3s1bhtXRq574G2WBkU6m%2BECWannr%2FOuPU9ljsHPGRPYgva3m9Y9fDStrDk2OIciKeXb7cYq5b0AFE%2FFXneAkOjtcfOjd8tnDUIM%2Bp65Ywn6gi7iY0t9A34Y2cwY3tAC%2F0Ho3Ur3fMv6B0kpwV16aEsz2lx18yLS3tC012Db1B%2FT8q7jb3Z7ywU3XpX%2Bckq5D5tjOBpDpM5V3rJNNcx6rEFHZowrf595hi3nfSXwraZKWrQe4Uw8pLXxAY6pgGw%2Fh7Vh%2Bkngt4hjGSInsZ7i3GretMUUUcjE0N0J4gqu8dMftLVmls4H3NDgSLcIhulejORVmCap16TbWtgANcHBNkmcfoGLBprsZqlWBgZlW%2Bn5EXTZ0hpyo86GX7U7w5XesCle1b1wrt1sS64M6TyvMwx8rsodgbNaxQLZRxVfJ7E6XVw%2FB%2BnLQwTjC%2BpLjtvNJRl6dvKo2yLc%2B0sbUrAnjJdE7Ij&X-Amz-Signature=1ecc154c7743619b6d6e9026825fea0efcb9bb08551966fdcb6c2f7dc4d2c1bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O2JGGE5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC57kySgX9XCxGFh7qvuGxHUQECFO9LAKqpOTDJyfGlDAiB4wBDkTcvCDTKEcIYT7uDBsXNEakJlLHqNvp%2FCl8uRQSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH8XEwAZsu%2Bgugb3WKtwDLn7XJH5qInCgpMiNfYYt4l9xVjY%2FG0xjtekIlFsTgfzi9dDpfrsCR8woJ8P%2FaSM%2BWRmGwtpP%2B7fyLcUbPtZeKZ862Jwr%2Ffbdj3FPrnqq5orAtCWJ8dK%2FLYBi9eIi48osKXWfrtoxJyRKKsCG2vk1nlTHN%2FJxcuj%2F7KRVX77lC3ELYhMuvxlGNDlnWWD92KjQRKReVceLox4JmxdOpixydeN8qd2vheVqkp8KyMdRJqxROONf%2FvgaNaNM2uM8uYlzPvQgvWstLmNCtSfIitiKHWyuzX%2BYdFhPqDYxq3otbL0nf6vQOBtogS7nX%2FFAF2wTPM6hCKHZad4teW%2B4iVYG8amub1IauFn4ueCjEl2tBq3X4J%2FaXA4hi70jaLa0PNGaFwTeihdL7P3s1bhtXRq574G2WBkU6m%2BECWannr%2FOuPU9ljsHPGRPYgva3m9Y9fDStrDk2OIciKeXb7cYq5b0AFE%2FFXneAkOjtcfOjd8tnDUIM%2Bp65Ywn6gi7iY0t9A34Y2cwY3tAC%2F0Ho3Ur3fMv6B0kpwV16aEsz2lx18yLS3tC012Db1B%2FT8q7jb3Z7ywU3XpX%2Bckq5D5tjOBpDpM5V3rJNNcx6rEFHZowrf595hi3nfSXwraZKWrQe4Uw8pLXxAY6pgGw%2Fh7Vh%2Bkngt4hjGSInsZ7i3GretMUUUcjE0N0J4gqu8dMftLVmls4H3NDgSLcIhulejORVmCap16TbWtgANcHBNkmcfoGLBprsZqlWBgZlW%2Bn5EXTZ0hpyo86GX7U7w5XesCle1b1wrt1sS64M6TyvMwx8rsodgbNaxQLZRxVfJ7E6XVw%2FB%2BnLQwTjC%2BpLjtvNJRl6dvKo2yLc%2B0sbUrAnjJdE7Ij&X-Amz-Signature=62389aca41a8ff7d04313c720dfe9d85c0aa20a03419a5f14bcf3eb09c86d526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TVKAP4R%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIG3mNw%2B%2FlMAkh2%2F2B83X7%2B7nItaixhyFNvmCnMCS8PisAiEAyU1H0MwgtoPGD8RMtbbkbwAzKJMvc1b8VfbUPA8jTXcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcB%2BmBq%2F0YOBbxBMircA7Sb%2BopQkfK0DjDBG4DM5%2BcOhOfDm0ZcJigZlRltIgiCR3%2FhVCEFWFmX8o3dASlsQDDvOb3R47hySi6k0K7hWSkK8qckjNHTL5up9UoGWYG%2F%2BlVh3pxaYrJMQA%2FpP1Kg8pVJBxX%2BBnzHU%2F7wo6%2Bf1noL7mMWAwCaRsr703jYBB10mA0rLNgDWGNZhXtKFgBwXJkvKGmEv7a4%2FJdQyJ8GpKDL6nMqfOyorTjM9A6CTzvV2sVx78QMuX1BM20REWHoib3MwbWBbBPoGldHm0onNhNyovRqjlElIEPr22G65%2BYUOIhfExSwckaD1Ylq452VrBnaBB1FcIrLJ8HGXHAVFx%2FOUSC8p1zc7I9%2BT8MU633OKc75HnVfrPRYBJGCvKcI2294VkmIVnr7dWUQXfLBllytvnVYmUlFNGqCehclIvoumxVPitMGveQ6UfGBwOjV8iccHk2LgUVdWvJy4FC%2FmzTISDeQuemG6oLj53WW5fl6uHGU7ODp9Q23Ny111Pn79Tnho4J5v9g6kHHA3P3HSmTxzGLsShDJsa94p7x86J0A7qDgiY93WHN3VjyKqPJ7UN4aiR%2BvaxSmQx%2BmbYETaUgyefzQ2fNgR2PrNu61zet6vVoHr%2BFGyPEqpnvcMP2S18QGOqUBbDTJisO3uhd%2FkJKwSiknScZ5L0%2Bcdd4BkzTr%2BQ30Kvar3GgExps8agqrYRXi3V5Vds%2FMIOnLAlYP%2FQi6UMCHCDZBqf2tePLgi1xaXSRGGgK4wX4qkTYa1Xgt9T2xP8TBYgaWsX%2FbAFRx06ZuAjD7aJVgrbGeXxySPVKmmtXFocxTtobUwlZi7TRY%2BkU9eBIPrG2fPYWDdjBxC1BLBlMd3yhBwxGE&X-Amz-Signature=7db108250cd816fa9e4ced4de90464abdf68ac83426a8e15163d753e9ff9d58a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZU4574A%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T111000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIFciKKppOJE7cBGA%2BmLWrnV3UlTmBP9nyRnOiIzCP%2Ft2AiEA18BAuMimtJNHrvUpFW37zPYmrDi5X3aPWptKnznNvJkqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeK7z3xj3u5UPnk5CrcAyfx1piW0Gl8hHGgknZdIH2i9ipLJWNNXaijW4e1k12FFIwhpo5hyPJFcgIyOwvMTtyBl0SeMQU%2FKLqrA1JMJVEKJtf1dVRaVlSmeFpv%2FAenTPLD4%2FotCsMGvi6xiWgwt8hp5EZfaF0PeNwV9%2BvqiSWKEWn69aRf7q9Czf8mogDOY6M%2F6xR7qNFyk2n2L0vCsRghGixig9%2BuMAdH2tNdQS6Ronk6M68DtKgUIabSkAkbDcD4gyKtHqKyC4T8Ihz9Fzu3kyIq5orK90EblAigMhmU2lqZE15ZmK5smMXn%2B0yaB0R09MCkQigQ18sRlpev24g72Xa3%2F4RN%2Bzim%2B%2F%2BNpfET29WkbQmxflNxgIlxoJrB21tc46myMSIXgbnTmpgsvnau%2FU6HgFFwdTmFq4mCCvrQACf8SeWjN4963J4ufWOtX2zNKLVQSB%2FC3LZU%2FF2GiyNEO2TEVSY9VXYYrTzi00xzeXLGXAHxhGlSRCFsksUJVNo1Jnew%2B33kp8O5eRrbej%2B%2FZ3BQ51xkoff49rQ6RquvpkVertDIPQBrFQzg%2F29i5uYXAvBcVMC%2BFl4rq%2BsUh4Ufm04SxFFSpvPOw8IAFW9ehLa2x3dBEosfblJNY50N74YGcWs6BbhL6MfiMN2S18QGOqUB0J24ayjJPxvooW4vMsLrIKtsKXW2y%2BJnaWv45x09s0qb9hkiLZkzGJpTDDXxuH8vpQNIUSSY8m04wQT3t0B0xXUz6p5%2F%2Fc%2Fw3xycI0p1fYt4eB4xkuOim%2FDNzCJgT9aqGrLSocNDyvk7MlohN%2B4W4Uc%2FdoXFKNcQesknKHsxx2WIoDlo1OfElKygK0IuNO7TrK1IBi3Bvqy6HRuxaYlVQqFYy2nj&X-Amz-Signature=3184ab93977a887dab594ceb1202287b78be7740987e1d0baa3c304c12d20c4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FE743LX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T111002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIGmoeWEPh0YJJUInVH6sL51739%2FAkPcVtkwiKQ0npIFWAiAZYLGtKERKDJPMmZvP5k61TG5cIcUgUssx29OJIBhYiSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhNIXRwoNaLlDOvMVKtwDYCcjGFwJmeEIXzUfA2eBgvNke%2By5QOlsupcAkOEglpNV4Wgexb1UDiO45UIBZA35PM7T5nCPbEtJcdZ57hXGGkl%2BDWPgyB4AUp7zJyVJnd1gt%2BFlIvum0brBqh0RfXdQDjHD8VhMJ3abfMKqgN6qqyisjMWNY0392I0mWF8DWWGKmmsc3Y3pSrqenAH0GSkstcECJdgd1JnTcRrUmy%2Fj4%2B%2BRFAgP8xAsquiAkXKc%2BfDatC%2FuyJWYX%2BPR0daaMuTxP0hpimkdDAvrBgDJ0W%2BH3WWAn%2BD5NH%2BAa03zaKYQ26k4OdsggXK8wQ2YQzn406RhsBskSFwuLd3TWY%2BpwlGAH%2Bhewe0%2FJALpib9eIkf4CnKzCNMHoMCd4FWoFecXIJb%2FY0kImXjO0qEH%2FwjsyaIUrjG2eKPuNpFZbfENPuNXM8jBV6ingEEGf5JO%2Fr7Rqj1%2B31L2F0d5oIixDEq7CvoX36Khd5Z%2B6TzF0Qm%2F5b5ze7Sw0leP2xKaG6B6VsTKF0f6HAr1QMNEDwAwGMiR2IOdPQaEocyPXP%2B1%2FX9E65fZbuzIoS5wGqEW1lKqkxzbsb89rQ1%2BILUzj3%2FnDp51plDAIRRYYyJryqx4nMixYrrIC5H6DN%2FmB7KekLe3Cmgwg5PXxAY6pgHux4kpczE%2FJeaZUrUD84apMfXbjxnfmU%2BtgT%2FEeDzEwS3GOrmbqkvi8Y%2FeOcvDWo20ZJzF3PLdS%2BLXIQ2FPK%2Ft9%2F6kBUZI6fo5EcbcZoHB75ti3sqAlDSDJ6yetDJVax5Cf3l3whBvUM1Z5aYD7xSHyHaxdHNWedTNQHNt7O5xhsfCkeJbeDimIc4MTCPm7qpaYMIzHGDCvH7zBbU8I452BX9PzufF&X-Amz-Signature=b6bbac79ab4f7bc5ed7ef3a767979037d45a02fb0af035eec72eb3ac256c18d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O2JGGE5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC57kySgX9XCxGFh7qvuGxHUQECFO9LAKqpOTDJyfGlDAiB4wBDkTcvCDTKEcIYT7uDBsXNEakJlLHqNvp%2FCl8uRQSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH8XEwAZsu%2Bgugb3WKtwDLn7XJH5qInCgpMiNfYYt4l9xVjY%2FG0xjtekIlFsTgfzi9dDpfrsCR8woJ8P%2FaSM%2BWRmGwtpP%2B7fyLcUbPtZeKZ862Jwr%2Ffbdj3FPrnqq5orAtCWJ8dK%2FLYBi9eIi48osKXWfrtoxJyRKKsCG2vk1nlTHN%2FJxcuj%2F7KRVX77lC3ELYhMuvxlGNDlnWWD92KjQRKReVceLox4JmxdOpixydeN8qd2vheVqkp8KyMdRJqxROONf%2FvgaNaNM2uM8uYlzPvQgvWstLmNCtSfIitiKHWyuzX%2BYdFhPqDYxq3otbL0nf6vQOBtogS7nX%2FFAF2wTPM6hCKHZad4teW%2B4iVYG8amub1IauFn4ueCjEl2tBq3X4J%2FaXA4hi70jaLa0PNGaFwTeihdL7P3s1bhtXRq574G2WBkU6m%2BECWannr%2FOuPU9ljsHPGRPYgva3m9Y9fDStrDk2OIciKeXb7cYq5b0AFE%2FFXneAkOjtcfOjd8tnDUIM%2Bp65Ywn6gi7iY0t9A34Y2cwY3tAC%2F0Ho3Ur3fMv6B0kpwV16aEsz2lx18yLS3tC012Db1B%2FT8q7jb3Z7ywU3XpX%2Bckq5D5tjOBpDpM5V3rJNNcx6rEFHZowrf595hi3nfSXwraZKWrQe4Uw8pLXxAY6pgGw%2Fh7Vh%2Bkngt4hjGSInsZ7i3GretMUUUcjE0N0J4gqu8dMftLVmls4H3NDgSLcIhulejORVmCap16TbWtgANcHBNkmcfoGLBprsZqlWBgZlW%2Bn5EXTZ0hpyo86GX7U7w5XesCle1b1wrt1sS64M6TyvMwx8rsodgbNaxQLZRxVfJ7E6XVw%2FB%2BnLQwTjC%2BpLjtvNJRl6dvKo2yLc%2B0sbUrAnjJdE7Ij&X-Amz-Signature=ab602a70957235dd8776f3e7a5f023029ca3d145de6433f9bdf9fb339cd7f0b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY4R45LT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T111003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIAK4py6szHhpwXCEGpYIJoamfHvCldE%2BEZH3R27X5WEbAiEA7yAW0HA0PU1rU04l1Q0hliN0kMMCFFEbxSA3Ly8M8gwqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKmZE0crQafpfilVCrcA%2B9eQ378gD1GFyAmoAlxrEVcFkKONJuCZUrZzMOk%2Fr2CDIHussQCxsgrcX3a2IUCGIo1KU3hIVPW74EEpYMCThmhUnwPuDZsKC0UH1LPnzSwrWmrAy%2FwFfxPVTfebEbG9TlZ5CKEgjtXyGwb7GIGPV4I0Xn9y1PhSro6lE1t64nLioq3R9jKcbzE2NsBTXokxIVJJBhQSp%2F8rq30YQhGpaNjGIVJtt%2FbFME9Z5z9tQwSBphUOranNUG5cm%2Bj1GyuH0J7dDF9ojeE31ntlCMFz8sABN3ZqP%2BgG53SRRv9a%2BilH%2BhISJDuQrWlNUV3J2bvWGp4Ied4fmk5kzO%2FpssB5DuCjhcs%2FB1S8Z7vjwF2iNrUi1756jgHmaeCNZQtj7i%2BwSU2ngupo%2FXcoAxEMycCihvt299mS1kvf7mxSgMFOu23RmibyOVNxBtbvXnGCjGIwqn6Sj3QpFoUSQ3NBpFsp2QySdW2VvKWCYOogElu0Md7lSmFH1GUSCWwU6uCD%2BcFyIRz9MhLv%2BACQkgF1n2LpuPMv51qT%2BDbYxt%2BbTAdvLe6kljKeuks6Oz%2BOOsdV2GTj3O50usC1M4nmTCRpL9KMIQKzUZqwMS32lYIaYZpXF8FN1JwZlZHTz4SgbzIMIOT18QGOqUBVs6%2FLApgEW%2FAriE2CzPuBPaGADC4v2niMe3H1thDmUG1y02l6hkr0rwiNU4PyyEcKHhtGHYinWsxIhSZvffnnqgkFQxo%2FCUPgvDNF8rQNKU7tYZQAtljng0re9LJHwBA%2FmYNvYXf7TBuwTzcXXDm2a18raScZ9HTay5njLNzqssQpAKuFJ7G0ukkTbajBcziHJXe2QS8Kpfd%2FOXDavLlX%2FbIwL6v&X-Amz-Signature=1ecadd2dd241814c9a59436701f18ba57b2a47886e43ddc586a6a0980c378a68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O2JGGE5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC57kySgX9XCxGFh7qvuGxHUQECFO9LAKqpOTDJyfGlDAiB4wBDkTcvCDTKEcIYT7uDBsXNEakJlLHqNvp%2FCl8uRQSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH8XEwAZsu%2Bgugb3WKtwDLn7XJH5qInCgpMiNfYYt4l9xVjY%2FG0xjtekIlFsTgfzi9dDpfrsCR8woJ8P%2FaSM%2BWRmGwtpP%2B7fyLcUbPtZeKZ862Jwr%2Ffbdj3FPrnqq5orAtCWJ8dK%2FLYBi9eIi48osKXWfrtoxJyRKKsCG2vk1nlTHN%2FJxcuj%2F7KRVX77lC3ELYhMuvxlGNDlnWWD92KjQRKReVceLox4JmxdOpixydeN8qd2vheVqkp8KyMdRJqxROONf%2FvgaNaNM2uM8uYlzPvQgvWstLmNCtSfIitiKHWyuzX%2BYdFhPqDYxq3otbL0nf6vQOBtogS7nX%2FFAF2wTPM6hCKHZad4teW%2B4iVYG8amub1IauFn4ueCjEl2tBq3X4J%2FaXA4hi70jaLa0PNGaFwTeihdL7P3s1bhtXRq574G2WBkU6m%2BECWannr%2FOuPU9ljsHPGRPYgva3m9Y9fDStrDk2OIciKeXb7cYq5b0AFE%2FFXneAkOjtcfOjd8tnDUIM%2Bp65Ywn6gi7iY0t9A34Y2cwY3tAC%2F0Ho3Ur3fMv6B0kpwV16aEsz2lx18yLS3tC012Db1B%2FT8q7jb3Z7ywU3XpX%2Bckq5D5tjOBpDpM5V3rJNNcx6rEFHZowrf595hi3nfSXwraZKWrQe4Uw8pLXxAY6pgGw%2Fh7Vh%2Bkngt4hjGSInsZ7i3GretMUUUcjE0N0J4gqu8dMftLVmls4H3NDgSLcIhulejORVmCap16TbWtgANcHBNkmcfoGLBprsZqlWBgZlW%2Bn5EXTZ0hpyo86GX7U7w5XesCle1b1wrt1sS64M6TyvMwx8rsodgbNaxQLZRxVfJ7E6XVw%2FB%2BnLQwTjC%2BpLjtvNJRl6dvKo2yLc%2B0sbUrAnjJdE7Ij&X-Amz-Signature=1dfd54df4b933f97e1c4258d65307c2959a3b9f4b564fc58c664ec57d768a521&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FOX422S%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T111006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEf9YVaUD0%2FIZXrFvk5ngyK43jqPFcvmbqrBeTKmNbv9AiAZuE2w%2B7N8L2w%2B7A4mxUUfy2QH46uTdIAUJVnj3QMIRiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiqTRATuVMcWaNb2DKtwD2bTxV%2By1AEry7bPVV7DkGfucsFBOTuOL9C6dR5TNtof6kpiyM4nexD9dG4fuZ891lp%2BJuHwwCf88u8T8S2sIBUrXzvhV0ENeREToZI%2FB8TSTLVOtLoO%2Beu2UTCid4Ur%2BfMuffnr%2FPmbTSm%2FvxPsCHpdrMMmd2w8D3iNqg02jB3pYapZrqEYRHL0begcwzsf3jlmz1UVxiKwy9NP3u%2BiBEmqeXw6IXcVAWsAIyrtKE85XFfb635YmH%2F%2Ba4RroPcvATEkkIToJwCnA2lMYclg8%2FfLv%2F69YQrp0sViKlgLE0CVIFGMBMuGt0HpjzAiRtN5lfPoFI5n6eN%2FmBhuwnwbN6L0z3iOFE%2Fr4HUWNTEah41a4Hj1phO9WqBKqnz%2FDTebhXNZnw7RiOsGIllAJgaLcCbAfN5ldbZPGHvSrA6PTYVlnqChDo6%2BYeX9eD0fjd1SCk%2F%2BaQJgfm2x1lZ2gStbES5muwC8Oj8hRm74yK4GzqKZ4KgGY6tyQxFcoTSUx7%2B3Hp%2FnR9XxEOpWHBcwVEB8ieQKseuba5bhcF4ZbuSBkiSFuffJhWnPwlRdzW9t0xUL%2FrAivO%2FclPLthqcPVnn7uyNzSXwXGB8TMW1i%2FcmZeRs2fmOWVwNtyYYYxmX8whJPXxAY6pgE%2FXsPbpWagjx6Azs5F1bFnvxLF85gXBNN3VXgvaGKDMzRLymdr%2Bl%2FKJH8AdfaV3mgWcmlMyw89MXiJzAfmQaCaoSpnJH2rD0W4v19Q4w7p4rRoV%2FWc9hwxevmW%2FvRxt9CnKTXMv21cPPo1nsaWQDetH79E%2Fh6OcfOcPugNEDV5m0lJe%2F72I2gRGt3T%2Bw8X7fFxA8Gq9dOlvfPfrraE5x1XFQnfYQAq&X-Amz-Signature=f2cef17c6adc187fb0ce6e9316b9687bcdcaea985d47db85423b25e1760893ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O2JGGE5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC57kySgX9XCxGFh7qvuGxHUQECFO9LAKqpOTDJyfGlDAiB4wBDkTcvCDTKEcIYT7uDBsXNEakJlLHqNvp%2FCl8uRQSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH8XEwAZsu%2Bgugb3WKtwDLn7XJH5qInCgpMiNfYYt4l9xVjY%2FG0xjtekIlFsTgfzi9dDpfrsCR8woJ8P%2FaSM%2BWRmGwtpP%2B7fyLcUbPtZeKZ862Jwr%2Ffbdj3FPrnqq5orAtCWJ8dK%2FLYBi9eIi48osKXWfrtoxJyRKKsCG2vk1nlTHN%2FJxcuj%2F7KRVX77lC3ELYhMuvxlGNDlnWWD92KjQRKReVceLox4JmxdOpixydeN8qd2vheVqkp8KyMdRJqxROONf%2FvgaNaNM2uM8uYlzPvQgvWstLmNCtSfIitiKHWyuzX%2BYdFhPqDYxq3otbL0nf6vQOBtogS7nX%2FFAF2wTPM6hCKHZad4teW%2B4iVYG8amub1IauFn4ueCjEl2tBq3X4J%2FaXA4hi70jaLa0PNGaFwTeihdL7P3s1bhtXRq574G2WBkU6m%2BECWannr%2FOuPU9ljsHPGRPYgva3m9Y9fDStrDk2OIciKeXb7cYq5b0AFE%2FFXneAkOjtcfOjd8tnDUIM%2Bp65Ywn6gi7iY0t9A34Y2cwY3tAC%2F0Ho3Ur3fMv6B0kpwV16aEsz2lx18yLS3tC012Db1B%2FT8q7jb3Z7ywU3XpX%2Bckq5D5tjOBpDpM5V3rJNNcx6rEFHZowrf595hi3nfSXwraZKWrQe4Uw8pLXxAY6pgGw%2Fh7Vh%2Bkngt4hjGSInsZ7i3GretMUUUcjE0N0J4gqu8dMftLVmls4H3NDgSLcIhulejORVmCap16TbWtgANcHBNkmcfoGLBprsZqlWBgZlW%2Bn5EXTZ0hpyo86GX7U7w5XesCle1b1wrt1sS64M6TyvMwx8rsodgbNaxQLZRxVfJ7E6XVw%2FB%2BnLQwTjC%2BpLjtvNJRl6dvKo2yLc%2B0sbUrAnjJdE7Ij&X-Amz-Signature=c35f4d079c1957950a2ad555265efa586e9b2ebebd087c805e17d0a0c42914cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRVR7INI%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T111009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCICTM7sPXwPPGNaazYgqJhrM7TRwXqgVm8kvDsV6t%2FqceAiEAkO%2Fzz8swHIXb%2BMO19U3sovg7E3FEBTQmGq8c63qHZK4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvOu795WQ6pI1ii%2FSrcA4TXIZc3VOhqfdEJo5%2FISA7rGssxOCYvfi8c%2BhGV2Hdd8S5HSIe4q55gjSIenmxLOz7O8m06cwweNhTw7NwVCwCHtVuylbP404AlBOa0tc%2FbZUJcnLwbo2lubofUSl19uMPRT5nIMea03jhx6NqHr6dS%2BDEJcDMKeGFirgEWC%2FXSluLsBZhUuMd7364WkViwiPPdqfs5Gic3JrjA0Dr8ynmRpMkU4rPebXWDnRhZ0CzKwY7X%2B4cBClav9vhXqrrFMk79uJGRDffoJbNR8maNAGnggGECyup%2BDXj%2Ft0RyjjRCHMpm8xLBHVVq%2BGFaWSkDAWsGx8eei1pNg%2BVzuv3tgiP3EJO%2Bnl0ZOfHmvYxIHNGd8GyHkTaIn9KQ%2FPdx4VRfOAWebXkZjVEEjMD0YzsngAs922wjebfqnd%2FiqpLicTo6RR08QEEo5C%2FnS6J1PUE9kCqZapuzkxSHnUGoVbd7a97AXqXngPq36%2BGI6VhmWH2IwR8kpCKKX16WquxkQJtbkS%2FbgcAJuguubGuPg3X2qXx%2FJwWCGjN%2Bu6djBU7DwqTV%2F35bqBp1zSmZ8X8S%2BBI92FnObYiHOTJ2V6SXyYoQWr4xXaC7LxeaBIr9BGZLs71%2BxriI8xhvDIOJnL2jMI%2BT18QGOqUBxc3UWGBXz7tARjQpnwcjpHGCAV7PNzR0d7JRnEPaVSHa4qOgAvfhNuZIu%2Fkm2LiIvNtVyvm6Fhun%2BioGSdeeuYbA3Skis4MxvOWen8exMSBziJ4ikLaXq%2Fs6GXbm2Le%2Bu6YEjN42F2AumxYkT3ITmolbGnX3oZKIPHBEs78oyJ3GwHwtEhyIbxhGeI9%2FS%2FQI17sxOWbaTe7QgulZDljfQzvvQH7M&X-Amz-Signature=17d7d2062d9e8fa7a31b48d8cbeb753f3cb517d72441cb6ce9722d4115dcdc65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O2JGGE5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC57kySgX9XCxGFh7qvuGxHUQECFO9LAKqpOTDJyfGlDAiB4wBDkTcvCDTKEcIYT7uDBsXNEakJlLHqNvp%2FCl8uRQSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH8XEwAZsu%2Bgugb3WKtwDLn7XJH5qInCgpMiNfYYt4l9xVjY%2FG0xjtekIlFsTgfzi9dDpfrsCR8woJ8P%2FaSM%2BWRmGwtpP%2B7fyLcUbPtZeKZ862Jwr%2Ffbdj3FPrnqq5orAtCWJ8dK%2FLYBi9eIi48osKXWfrtoxJyRKKsCG2vk1nlTHN%2FJxcuj%2F7KRVX77lC3ELYhMuvxlGNDlnWWD92KjQRKReVceLox4JmxdOpixydeN8qd2vheVqkp8KyMdRJqxROONf%2FvgaNaNM2uM8uYlzPvQgvWstLmNCtSfIitiKHWyuzX%2BYdFhPqDYxq3otbL0nf6vQOBtogS7nX%2FFAF2wTPM6hCKHZad4teW%2B4iVYG8amub1IauFn4ueCjEl2tBq3X4J%2FaXA4hi70jaLa0PNGaFwTeihdL7P3s1bhtXRq574G2WBkU6m%2BECWannr%2FOuPU9ljsHPGRPYgva3m9Y9fDStrDk2OIciKeXb7cYq5b0AFE%2FFXneAkOjtcfOjd8tnDUIM%2Bp65Ywn6gi7iY0t9A34Y2cwY3tAC%2F0Ho3Ur3fMv6B0kpwV16aEsz2lx18yLS3tC012Db1B%2FT8q7jb3Z7ywU3XpX%2Bckq5D5tjOBpDpM5V3rJNNcx6rEFHZowrf595hi3nfSXwraZKWrQe4Uw8pLXxAY6pgGw%2Fh7Vh%2Bkngt4hjGSInsZ7i3GretMUUUcjE0N0J4gqu8dMftLVmls4H3NDgSLcIhulejORVmCap16TbWtgANcHBNkmcfoGLBprsZqlWBgZlW%2Bn5EXTZ0hpyo86GX7U7w5XesCle1b1wrt1sS64M6TyvMwx8rsodgbNaxQLZRxVfJ7E6XVw%2FB%2BnLQwTjC%2BpLjtvNJRl6dvKo2yLc%2B0sbUrAnjJdE7Ij&X-Amz-Signature=3552947c4fc1af6d8f23df1c09062c0ddebcae32245d97bcfbf06cd36332f910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHA3HLXS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T111012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDEfxqRDOPz%2BwHF1I9llRLkJKhd4TRBKr36mEiPlOKdRgIhANf3VYoANn0tZMCEu2HZSaz1CtFn9qhcuI3gi1n52UI1KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVHO92H5%2BSVwJNIxsq3AMMRRPpF1d6GizDwFgXB1fK9wvVFrvJ4cbk2MUOkzprjH2P%2F0Zx5Nm95V7WoxU9nM9mMyt43mXDTuX4dw4ywavZ9fApRoBSZ2dGkJ7XWIb9yKuxPHln2ZfunaCycvcaOs7prdtlTuG17SJNXatonDXTljIGTa%2FrA3xM9i2Hc8H%2B3ESuPoq4LFfH62Zewpp%2B6%2BfiHBRQ%2B1Wq0UGrCpD%2BLMhGwlWkkZyRpaTAXomUgyvrYK5ARb22jGY6l3XnhxyFWXrQuzA3qo%2FCkhmknA0PfM8xpP1bPAZ%2FKDG1TIdzfsjT2MBEdV%2B5gNiS6HuZCPPT%2B2w9KPgQUMjYJ0A7xIZCzrN8YX5va4FyRaCyGhUW3AjM3nRNMOx6b%2FDak%2Fz4FGKe05iIcI10fhYD2AGMcizYku%2BE9ne9q0o3mAX8CePEuKGCClfww5MNTYGe%2BgAruST%2FKCNu5qZzk4YScxRMvGG9WvfYie%2BRjqHxx0h4LrbF9AJT%2B4yWIjRdAdWyI3HItk0BmiKwaOHvzKzvrSnT7P%2Faioc8IbNKEF8FKrEpolxJJMGtn7ggnD0KQkIL1z3Dv5%2BYzHA91iPllxJgpEooqb9DGpEbwUSSCkaU2hn%2BT8w6kYpeZp6GSwK%2F3eEOL1zijzCEk9fEBjqkAWT09xxYEELfMDCnaNLxE7LAkGUNSQ9PlmDhM15tvjJLkrSMK%2B60gnVGZD732V2xPsHAn5Srh4JGdepPk1HlIRGvlEkc0FNJGJdv5ccL9jpiqOHWbWiWQHGdS0kJLn3CrNBwd1sWJzCZ3EM7bCG2uCt8vLkp%2FKhN95X%2BKnaQIAZCNEnIPzbg%2FIJhrZhwEbix7S%2BnBX8lZIJ%2FDcjTtkrCfX9UGCJl&X-Amz-Signature=769b4b5e3037784959e01b31a535777a7d21e61a79c62f7a9a5e78ac410d3c5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CL33OW2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T111015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCDASYsHl2bM79A0hOcNc231xqIDwC9Yc3jZ46Fz8iXPQIgXvxriBkeVUBZtfx8KCUIhEjBTWO8PTnVvEZ8jmhXsLQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3%2Bw6k%2BdFfFMVy2UCrcA4GtDFGLKX89MhecUgTYbmFd2jzY22qm%2F1K8v%2FCOPBGgj9be4FFJlfksTAWWL3MA4FCf%2BZI81g3Dwxb6FVyRTdTdD3E6fxgcOl9ALUUYlEsJMBGQLtNHLmGDa3JRWasMGSudb3Nw7El69Id2DeFCSdD1xZlyJ1wSnsHMQAHGZOGdHsLCJ03GxmcNnnZXIsJdv6C%2BOUw1WOIgMexsgPqIzCpVcJp8fZXngJxJUNJm31ekmYdmobA5bQ0gXriWd56vNN9mSGZABuX2OTZN6tS%2FrJxBLEldi%2Fg84EBoPY634EqKuawllGUK4O7SeCutPi%2Fe9wuVD815UHH469IXTQzUpUEe%2Bm6zU%2BY5aI1Wio2Akl9aWnrkpu6ocVQmRSL9vKxfIw64p7qcDASOKGz9xQEq53NuHCsoA5SfuXJsRs5EOB8yl2i0r%2F%2B4qF2RTMnw27nbj%2F9hwMMoPmfuCmgOvOfR7PUO7PayfmRQ8OGnwKRoukE89xRDzpKIKyPbaxuwGj60RO%2FzJ57QL6aaDGVkzj97fsrGoGV4Lz%2BVm7JJY%2BBhfx56v0EBDKqBT8DOs83kcVUPr2Cpltt0gGg22poUqLVXfZyg0T2DNCVzlUfHIvmXEMOD8Bh8IRJF6Rm3s6OpMNWS18QGOqUB2L1tkb86vWAgyBNtY38b2JbPPMGTGs7F5ATlQk7VESGn9ivecop5KM95JsW0VNU0hmosZwPyCs9S6FiSPy33VWNmFFXvLXA5C6a4UjWQBSdHiDXJX7Z2SolgQiSSO7PgNCizi%2FK6sEbz8h0YXBuVM4uPgp0g0Xi9JVPH8KXLm54v2bOADxRfv29cwWkJ%2BIw98gpjR3mMVrwuZ09tk%2BJv1heG8cSn&X-Amz-Signature=515ae4dc33af1420ca8981834831061c431715960fb4b54b9eed68983348d7d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHK7FX67%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T111016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIHsO0zAd4FcpiZcPUizG1rlc0e1Nyi6ZSNusKZ1xw1voAiEA6CtuFfN02BJ%2F%2BD9bmOFEWszO5xjKJuoDvfLjnRER%2BlAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGevS4NIE710CQjJ%2BSrcA6ltPEpmjv2MsaeHHL340joIsFyOyLm%2BpRllsOLdC7dbs231FvNxowCkwjM8TrWe1%2B5zBI5caHrLF8cWFMU9ty5EKSeL4ajPjCBVDYfA3AYAZypz82DfvzfEuTS3j%2BSg2W%2F8fkF%2BqAjEF5LSq8JdICuEqNQauZPz9%2F5AQNPYW5%2FLJhdJC70ZdKk3LD9KRdvMXZqFQpsnDpb%2BeYpLyk6ogPwnuMXkm%2BFxmYWiycaDEH7NQc3NKbRJYNfSOaI5B2lLnvdb%2F4O5ELauR00KNzVvI4rDFeFdGPr6tjFSpvMDtUzD69RqLcgub9MnT7n5boDV3N0dOP3d7znRGFDlodWuSbOQG5xA4fmQvbPYKydezZacxUAhLqOnfmZMzP2jp2BXl2sXjsktYnfFLHUqBQs0uP7N%2BP7jZFPr2qggKEuMMa4%2F1Guoyx32wAi%2BmsIeug7e%2BqG%2FMjUzpWp8dBZpfeuz9h9BMwHrQuonOiyWpcFH%2F1EENUznysgDL0yO819x8rGZb36Y3JLqujhO0MgY5wrvSas%2FZms%2FAMxtHEyV%2Bzrvm6ovSoQkqJX%2F0uIhnvR9c3KFPaf99Uh8jP8EJG68BW2DAWToxKdNgEzQ97mvvcGBNK8cWe%2BMtU5fR%2B6oB5A7MIST18QGOqUB6Qd4y%2BBb3KOf%2Fr7x9fDjO18kGDCxlF0mSvhcoZbR5oLQJC0h9ZzAo2gkh1m2Nbag1paPSE1FdJAvke%2BdNFIiQrKvO9wyduz898l8BejYl5jodlEO2wjvTtqztb2AxrRoc9oub4U4YyM2Y8eyri4AmBuuzS5IiB1sXoj%2BCR%2BI8dCASVRYHPxWqTLIh1C4Ro5djaPU0utA4oaANevlcX%2FrKQ4INil%2F&X-Amz-Signature=833bed2bb36ae36689256cb7b94277a30c904395dcae4317ff72fd7cca82404e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCPRPRQW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T111018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDCZSnuIjMjv0YStyZQyYLIrysh4Ut0F8yBuV7R41HITAiAYLB9uGEKo%2Fo%2FWTUah0GJiwdZ84MvEZW1WIXeJp3tZiyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrnmEGzflDaP0ynLwKtwD4FImhjJN0f7lCYJ33oAoOz9WPSqRc28wnJBi8z4uu43RANGaLkSIoeCYsVnakUKwAmAtk9FffBgUNcClvL%2FvHno5sFcTRYi6VFgaeFljAH%2Bajnv%2Frve067LZCmfvY4hrJ0oa8UUDZbZcGmAHF9zKQ7j44TqC%2BNh3ugZlRwYItA1tZ2wsoZqoVKurtzfZHZJOt9Eit6wxuDwM5QgspLn7tF%2FiK9sD4uRVeHFvOjknzXdUnZ%2FQ6k%2BbWRPWADQoAnJT9n4ZpNibS64gc2rgkeZa2GiAEA9dNG8HuFAcD5c0m9FUE%2FG33gGTNna6JA9d1I6TVJhLjkoJ4vYKfUAmWpaowncLcUsdtwmxyymX5q8Gfa15%2BaAY9jkJzU3HhES%2FHwf5dWeYIKvMXGHre3%2BCwu8xj3A%2FR4JQWJ%2FXipWasq1b7Hq3kKmVKCCMxgCk2hdZpSoKK9B80%2BYyZUlNulSm7dOoqM%2FRMqD%2FKYOibaFNsDwbT6jdf71H5H%2BAdmnL6LU04vS4uoXRL4w5fMk6xtJmkkDhvMmVcHteAavSY8fuzw4NkOeGAMjOxQ27RBH3OtwBHeOrNbpwQRqaUcsx0xi1qcx5AjErOi2g6qwibGryoR0K9SkgQrPXUfIfiKbB3hswq5PXxAY6pgGkNxkL9ZbHrUL9%2FHZ1t6FJgzJG%2FayK1%2BDIhEgTmWCCWnS0S2PV6AihYwqzM3myHNmV7BhcO2WMg2Sa9jJW3tyl4lpDVdR%2BOwRaFBUTY4HrmR5ry85Q3XrCN7J6Cl7tzSgfEh4RDZg8vt26euklwG1gCwRVecCFvFaZ5LxRML4xMoln%2FTrge0GX6EK0sGt9aDY%2BJUmFzdIaGCqI6URMvWdr8Sd%2FERey&X-Amz-Signature=ba88d748d1b7c95150e190d2c8a0ae9848d265ac1a44c992a8b05d88fb4d34c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAIRIWRA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T111020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCkc%2F4aDh0Z3g%2BohWRgsNGv4%2BNw5wwCArQyoUeZJDsXpwIhAPLjXMAI5jBl6xYREoUsmFXL9ghSfD7awtVyM9JeTIrMKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZ%2FPik3qZIuE09wKkq3ANNOv8UJaOzc%2F7OzlM4EKNfUxTkUYlgL2Fszxfi5cjsNW3ZM3pe3C3oL3qN92%2FNMStp8VzHBadMI1UBVhIqnILCln5bpQfUjEmc%2Fon5AtoQpFhzZ1a%2FLS40dP9IoPh4uK5AUY%2FB8aK4OrJleTmGIrOMM6ZijuQyThKr%2FS3ByukNHJUrIzvJZCiIEnBUxrXKH9ovfP06i%2FvyqQ2fyv7rZnYw57OereXfi0YS7%2FmCk8H5UEIawAD45OhcLX4Dm3pXGKrpaQle3NBNQr8rquEHm8etmufcWUXUf25pKjTQm5khIxb4icjfcRjGYdwPhg2Tc54ze3yQ0wTdg5sRBdXBl7E99pNPcRwxHqV6oTJ1McWbSbQcQfdP3JDWylwNZzSEJA1bWvvR7jVC7y%2BMhzcc6WFu9ks6dsOiqljZskPEQWKc4fb5mz3Q0QOhjMgd6aCzFHl3og8HWp7VjqJ5ihfNQHi6uNet3OP71W6RUFB87ICe3JdSwuXTmlhtGmUl1%2B%2F5h8fykbaiHdaGyFOTSUKKS1ENSbJ1372aYxLi4vF%2FlP7P3WV3m2qE4xWwVQq352C%2BH1GJFS65dH8eaVMxM5r71fk27RT%2BCRX6Kce7umDhgZAOoRsddn9UzJyNzfnqGjCmk9fEBjqkAS7t0JIlG2j178Gq5j9CoICj9kMohUk0WbAdiwzLOg8aoKZN7OrF5LLA7IDWPqFTt%2FbVmKNA3%2B5CHiL6aoszzS0n7KzBl2Coa5%2F3VSL0dAznWeNf0bcrBOPvoWgHzGCsoBBbUi7FgzliClILi4OxJJ5TTVnBi%2Bi%2B%2BdGMxq%2F9G475CADj82Qgt%2Bv09Znng12im5mmcaFGz2qSUIxVH%2FFlMOYIaWHV&X-Amz-Signature=1df6ed5dddafaaa9e066c8ea9d37ef943856112441a87e51aad899d5d2a8c46b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O2JGGE5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC57kySgX9XCxGFh7qvuGxHUQECFO9LAKqpOTDJyfGlDAiB4wBDkTcvCDTKEcIYT7uDBsXNEakJlLHqNvp%2FCl8uRQSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH8XEwAZsu%2Bgugb3WKtwDLn7XJH5qInCgpMiNfYYt4l9xVjY%2FG0xjtekIlFsTgfzi9dDpfrsCR8woJ8P%2FaSM%2BWRmGwtpP%2B7fyLcUbPtZeKZ862Jwr%2Ffbdj3FPrnqq5orAtCWJ8dK%2FLYBi9eIi48osKXWfrtoxJyRKKsCG2vk1nlTHN%2FJxcuj%2F7KRVX77lC3ELYhMuvxlGNDlnWWD92KjQRKReVceLox4JmxdOpixydeN8qd2vheVqkp8KyMdRJqxROONf%2FvgaNaNM2uM8uYlzPvQgvWstLmNCtSfIitiKHWyuzX%2BYdFhPqDYxq3otbL0nf6vQOBtogS7nX%2FFAF2wTPM6hCKHZad4teW%2B4iVYG8amub1IauFn4ueCjEl2tBq3X4J%2FaXA4hi70jaLa0PNGaFwTeihdL7P3s1bhtXRq574G2WBkU6m%2BECWannr%2FOuPU9ljsHPGRPYgva3m9Y9fDStrDk2OIciKeXb7cYq5b0AFE%2FFXneAkOjtcfOjd8tnDUIM%2Bp65Ywn6gi7iY0t9A34Y2cwY3tAC%2F0Ho3Ur3fMv6B0kpwV16aEsz2lx18yLS3tC012Db1B%2FT8q7jb3Z7ywU3XpX%2Bckq5D5tjOBpDpM5V3rJNNcx6rEFHZowrf595hi3nfSXwraZKWrQe4Uw8pLXxAY6pgGw%2Fh7Vh%2Bkngt4hjGSInsZ7i3GretMUUUcjE0N0J4gqu8dMftLVmls4H3NDgSLcIhulejORVmCap16TbWtgANcHBNkmcfoGLBprsZqlWBgZlW%2Bn5EXTZ0hpyo86GX7U7w5XesCle1b1wrt1sS64M6TyvMwx8rsodgbNaxQLZRxVfJ7E6XVw%2FB%2BnLQwTjC%2BpLjtvNJRl6dvKo2yLc%2B0sbUrAnjJdE7Ij&X-Amz-Signature=9a916155cecbd1ba46a568fdc825a69024c7ea5060a936fccf4f83cca2a360ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O2JGGE5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC57kySgX9XCxGFh7qvuGxHUQECFO9LAKqpOTDJyfGlDAiB4wBDkTcvCDTKEcIYT7uDBsXNEakJlLHqNvp%2FCl8uRQSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH8XEwAZsu%2Bgugb3WKtwDLn7XJH5qInCgpMiNfYYt4l9xVjY%2FG0xjtekIlFsTgfzi9dDpfrsCR8woJ8P%2FaSM%2BWRmGwtpP%2B7fyLcUbPtZeKZ862Jwr%2Ffbdj3FPrnqq5orAtCWJ8dK%2FLYBi9eIi48osKXWfrtoxJyRKKsCG2vk1nlTHN%2FJxcuj%2F7KRVX77lC3ELYhMuvxlGNDlnWWD92KjQRKReVceLox4JmxdOpixydeN8qd2vheVqkp8KyMdRJqxROONf%2FvgaNaNM2uM8uYlzPvQgvWstLmNCtSfIitiKHWyuzX%2BYdFhPqDYxq3otbL0nf6vQOBtogS7nX%2FFAF2wTPM6hCKHZad4teW%2B4iVYG8amub1IauFn4ueCjEl2tBq3X4J%2FaXA4hi70jaLa0PNGaFwTeihdL7P3s1bhtXRq574G2WBkU6m%2BECWannr%2FOuPU9ljsHPGRPYgva3m9Y9fDStrDk2OIciKeXb7cYq5b0AFE%2FFXneAkOjtcfOjd8tnDUIM%2Bp65Ywn6gi7iY0t9A34Y2cwY3tAC%2F0Ho3Ur3fMv6B0kpwV16aEsz2lx18yLS3tC012Db1B%2FT8q7jb3Z7ywU3XpX%2Bckq5D5tjOBpDpM5V3rJNNcx6rEFHZowrf595hi3nfSXwraZKWrQe4Uw8pLXxAY6pgGw%2Fh7Vh%2Bkngt4hjGSInsZ7i3GretMUUUcjE0N0J4gqu8dMftLVmls4H3NDgSLcIhulejORVmCap16TbWtgANcHBNkmcfoGLBprsZqlWBgZlW%2Bn5EXTZ0hpyo86GX7U7w5XesCle1b1wrt1sS64M6TyvMwx8rsodgbNaxQLZRxVfJ7E6XVw%2FB%2BnLQwTjC%2BpLjtvNJRl6dvKo2yLc%2B0sbUrAnjJdE7Ij&X-Amz-Signature=55ddb67257017268c9361b5b5c77e563478ee776f544ee765730584eaab18901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CVMLTEM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCCJ5%2FNCyrWBalQh2eBvjPscoN8Q2Xor3MzH65WaqT27wIhANhrKUMs94B0oef3qcVtxSYtfr8DkSJrVHjqGoYnwXJkKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl9EsMLRghzAbiSycq3AMocmr53x3WNWYGOiwiO6Wx1HG%2Fv%2BM6uzE1P7yGaA2sHT5FhxMfWOU0crvnu5WcvZ6ZsJBudHfcyypU0ExIHtO3ja3CSiEUdrqM2NW642mFyZ55ISm%2Fn6SZnkyW79FOpvJgOwTbhTFxPcK8UP1eiKcxDF%2FtuIi1Ti0eAqBQndcL%2BV%2FEnpnch3l%2Fcjj%2BiFaii1xY9YQAqKWnFOHaWqZmT45CgwsUu%2BwOmikiSRsMUXxOxS3JRedHNWM6a91jyJP5s2qJenumhU4wxLIKIzLpWsh09vTLpg6CJr%2Fc7qItnBfQImy4da%2B54z84jzF8Z0weGGF5r9z9P9EFy74Ka0SSeN8KgNkxjo35%2BA0%2BePvLi3CUjxqgCQudXPwWKFnKtbEoJNVCvzYpofjuIBtMO3QDzy3Ki9qLcjKYBGq1hDSjUtDnpb296LGSflU5EW5tS5oHztir22V%2F5E02u3qApyJAoHbsYpty%2FJDHqfEucChcgK1FpMkugpRTwlyLWRMYM%2F8YQUg9P5nuJ9tiSN1RssTthNOwy63MTkgHqVJqMvwlyHlr4nwn9uszBrz0jKKEcSowt0h%2FZZix%2BwbUp0LkUrxJ2jsx44XVJLmRtchwayHWjxydBogQB1HhS0pNliHEezDxktfEBjqkAa6PvhaVlxOOgvG734H5LIbEGiKQqQqWG4R1fPZ8HBPJ2i38y%2Fl850q3W9Fa4Yn285AjAIImAU8qS7%2BIDk%2BciDq0b%2BCEDPPQnS3VxitCn3AgwAN6QdAByoYookicxUHDd%2Bg7ggtq7cw%2FyA4URbNDR0Gxfbb3XeFhGvl4%2FdNMJ5%2FpmR2XFeEVGN%2BMVs%2BRgMq5a49u96E2mguW6CVZRxZWflL4x8SZ&X-Amz-Signature=762061c06c8bdd5dc80aeb384bdca5d84eb3f4946aedccd280393f2c260e1f36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CVMLTEM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCCJ5%2FNCyrWBalQh2eBvjPscoN8Q2Xor3MzH65WaqT27wIhANhrKUMs94B0oef3qcVtxSYtfr8DkSJrVHjqGoYnwXJkKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl9EsMLRghzAbiSycq3AMocmr53x3WNWYGOiwiO6Wx1HG%2Fv%2BM6uzE1P7yGaA2sHT5FhxMfWOU0crvnu5WcvZ6ZsJBudHfcyypU0ExIHtO3ja3CSiEUdrqM2NW642mFyZ55ISm%2Fn6SZnkyW79FOpvJgOwTbhTFxPcK8UP1eiKcxDF%2FtuIi1Ti0eAqBQndcL%2BV%2FEnpnch3l%2Fcjj%2BiFaii1xY9YQAqKWnFOHaWqZmT45CgwsUu%2BwOmikiSRsMUXxOxS3JRedHNWM6a91jyJP5s2qJenumhU4wxLIKIzLpWsh09vTLpg6CJr%2Fc7qItnBfQImy4da%2B54z84jzF8Z0weGGF5r9z9P9EFy74Ka0SSeN8KgNkxjo35%2BA0%2BePvLi3CUjxqgCQudXPwWKFnKtbEoJNVCvzYpofjuIBtMO3QDzy3Ki9qLcjKYBGq1hDSjUtDnpb296LGSflU5EW5tS5oHztir22V%2F5E02u3qApyJAoHbsYpty%2FJDHqfEucChcgK1FpMkugpRTwlyLWRMYM%2F8YQUg9P5nuJ9tiSN1RssTthNOwy63MTkgHqVJqMvwlyHlr4nwn9uszBrz0jKKEcSowt0h%2FZZix%2BwbUp0LkUrxJ2jsx44XVJLmRtchwayHWjxydBogQB1HhS0pNliHEezDxktfEBjqkAa6PvhaVlxOOgvG734H5LIbEGiKQqQqWG4R1fPZ8HBPJ2i38y%2Fl850q3W9Fa4Yn285AjAIImAU8qS7%2BIDk%2BciDq0b%2BCEDPPQnS3VxitCn3AgwAN6QdAByoYookicxUHDd%2Bg7ggtq7cw%2FyA4URbNDR0Gxfbb3XeFhGvl4%2FdNMJ5%2FpmR2XFeEVGN%2BMVs%2BRgMq5a49u96E2mguW6CVZRxZWflL4x8SZ&X-Amz-Signature=a627c1b3e5d288bcb91fa90c4d29ec933b4e546b3733e25062878e1998df32a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CVMLTEM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCCJ5%2FNCyrWBalQh2eBvjPscoN8Q2Xor3MzH65WaqT27wIhANhrKUMs94B0oef3qcVtxSYtfr8DkSJrVHjqGoYnwXJkKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl9EsMLRghzAbiSycq3AMocmr53x3WNWYGOiwiO6Wx1HG%2Fv%2BM6uzE1P7yGaA2sHT5FhxMfWOU0crvnu5WcvZ6ZsJBudHfcyypU0ExIHtO3ja3CSiEUdrqM2NW642mFyZ55ISm%2Fn6SZnkyW79FOpvJgOwTbhTFxPcK8UP1eiKcxDF%2FtuIi1Ti0eAqBQndcL%2BV%2FEnpnch3l%2Fcjj%2BiFaii1xY9YQAqKWnFOHaWqZmT45CgwsUu%2BwOmikiSRsMUXxOxS3JRedHNWM6a91jyJP5s2qJenumhU4wxLIKIzLpWsh09vTLpg6CJr%2Fc7qItnBfQImy4da%2B54z84jzF8Z0weGGF5r9z9P9EFy74Ka0SSeN8KgNkxjo35%2BA0%2BePvLi3CUjxqgCQudXPwWKFnKtbEoJNVCvzYpofjuIBtMO3QDzy3Ki9qLcjKYBGq1hDSjUtDnpb296LGSflU5EW5tS5oHztir22V%2F5E02u3qApyJAoHbsYpty%2FJDHqfEucChcgK1FpMkugpRTwlyLWRMYM%2F8YQUg9P5nuJ9tiSN1RssTthNOwy63MTkgHqVJqMvwlyHlr4nwn9uszBrz0jKKEcSowt0h%2FZZix%2BwbUp0LkUrxJ2jsx44XVJLmRtchwayHWjxydBogQB1HhS0pNliHEezDxktfEBjqkAa6PvhaVlxOOgvG734H5LIbEGiKQqQqWG4R1fPZ8HBPJ2i38y%2Fl850q3W9Fa4Yn285AjAIImAU8qS7%2BIDk%2BciDq0b%2BCEDPPQnS3VxitCn3AgwAN6QdAByoYookicxUHDd%2Bg7ggtq7cw%2FyA4URbNDR0Gxfbb3XeFhGvl4%2FdNMJ5%2FpmR2XFeEVGN%2BMVs%2BRgMq5a49u96E2mguW6CVZRxZWflL4x8SZ&X-Amz-Signature=27ea8d301880d6056ec121b35c7dba12f1ad3af79d2a371950067ac1c7d4419e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CVMLTEM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCCJ5%2FNCyrWBalQh2eBvjPscoN8Q2Xor3MzH65WaqT27wIhANhrKUMs94B0oef3qcVtxSYtfr8DkSJrVHjqGoYnwXJkKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl9EsMLRghzAbiSycq3AMocmr53x3WNWYGOiwiO6Wx1HG%2Fv%2BM6uzE1P7yGaA2sHT5FhxMfWOU0crvnu5WcvZ6ZsJBudHfcyypU0ExIHtO3ja3CSiEUdrqM2NW642mFyZ55ISm%2Fn6SZnkyW79FOpvJgOwTbhTFxPcK8UP1eiKcxDF%2FtuIi1Ti0eAqBQndcL%2BV%2FEnpnch3l%2Fcjj%2BiFaii1xY9YQAqKWnFOHaWqZmT45CgwsUu%2BwOmikiSRsMUXxOxS3JRedHNWM6a91jyJP5s2qJenumhU4wxLIKIzLpWsh09vTLpg6CJr%2Fc7qItnBfQImy4da%2B54z84jzF8Z0weGGF5r9z9P9EFy74Ka0SSeN8KgNkxjo35%2BA0%2BePvLi3CUjxqgCQudXPwWKFnKtbEoJNVCvzYpofjuIBtMO3QDzy3Ki9qLcjKYBGq1hDSjUtDnpb296LGSflU5EW5tS5oHztir22V%2F5E02u3qApyJAoHbsYpty%2FJDHqfEucChcgK1FpMkugpRTwlyLWRMYM%2F8YQUg9P5nuJ9tiSN1RssTthNOwy63MTkgHqVJqMvwlyHlr4nwn9uszBrz0jKKEcSowt0h%2FZZix%2BwbUp0LkUrxJ2jsx44XVJLmRtchwayHWjxydBogQB1HhS0pNliHEezDxktfEBjqkAa6PvhaVlxOOgvG734H5LIbEGiKQqQqWG4R1fPZ8HBPJ2i38y%2Fl850q3W9Fa4Yn285AjAIImAU8qS7%2BIDk%2BciDq0b%2BCEDPPQnS3VxitCn3AgwAN6QdAByoYookicxUHDd%2Bg7ggtq7cw%2FyA4URbNDR0Gxfbb3XeFhGvl4%2FdNMJ5%2FpmR2XFeEVGN%2BMVs%2BRgMq5a49u96E2mguW6CVZRxZWflL4x8SZ&X-Amz-Signature=893f548b4b767c397e886cb495a258f648d03d474fec2f3c1dbfa1b8021a9c62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CVMLTEM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCCJ5%2FNCyrWBalQh2eBvjPscoN8Q2Xor3MzH65WaqT27wIhANhrKUMs94B0oef3qcVtxSYtfr8DkSJrVHjqGoYnwXJkKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl9EsMLRghzAbiSycq3AMocmr53x3WNWYGOiwiO6Wx1HG%2Fv%2BM6uzE1P7yGaA2sHT5FhxMfWOU0crvnu5WcvZ6ZsJBudHfcyypU0ExIHtO3ja3CSiEUdrqM2NW642mFyZ55ISm%2Fn6SZnkyW79FOpvJgOwTbhTFxPcK8UP1eiKcxDF%2FtuIi1Ti0eAqBQndcL%2BV%2FEnpnch3l%2Fcjj%2BiFaii1xY9YQAqKWnFOHaWqZmT45CgwsUu%2BwOmikiSRsMUXxOxS3JRedHNWM6a91jyJP5s2qJenumhU4wxLIKIzLpWsh09vTLpg6CJr%2Fc7qItnBfQImy4da%2B54z84jzF8Z0weGGF5r9z9P9EFy74Ka0SSeN8KgNkxjo35%2BA0%2BePvLi3CUjxqgCQudXPwWKFnKtbEoJNVCvzYpofjuIBtMO3QDzy3Ki9qLcjKYBGq1hDSjUtDnpb296LGSflU5EW5tS5oHztir22V%2F5E02u3qApyJAoHbsYpty%2FJDHqfEucChcgK1FpMkugpRTwlyLWRMYM%2F8YQUg9P5nuJ9tiSN1RssTthNOwy63MTkgHqVJqMvwlyHlr4nwn9uszBrz0jKKEcSowt0h%2FZZix%2BwbUp0LkUrxJ2jsx44XVJLmRtchwayHWjxydBogQB1HhS0pNliHEezDxktfEBjqkAa6PvhaVlxOOgvG734H5LIbEGiKQqQqWG4R1fPZ8HBPJ2i38y%2Fl850q3W9Fa4Yn285AjAIImAU8qS7%2BIDk%2BciDq0b%2BCEDPPQnS3VxitCn3AgwAN6QdAByoYookicxUHDd%2Bg7ggtq7cw%2FyA4URbNDR0Gxfbb3XeFhGvl4%2FdNMJ5%2FpmR2XFeEVGN%2BMVs%2BRgMq5a49u96E2mguW6CVZRxZWflL4x8SZ&X-Amz-Signature=cf28225c501d9e42adf42cc561d05c67bb7ef71c66cc70072b7befc215bfbe02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CVMLTEM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCCJ5%2FNCyrWBalQh2eBvjPscoN8Q2Xor3MzH65WaqT27wIhANhrKUMs94B0oef3qcVtxSYtfr8DkSJrVHjqGoYnwXJkKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl9EsMLRghzAbiSycq3AMocmr53x3WNWYGOiwiO6Wx1HG%2Fv%2BM6uzE1P7yGaA2sHT5FhxMfWOU0crvnu5WcvZ6ZsJBudHfcyypU0ExIHtO3ja3CSiEUdrqM2NW642mFyZ55ISm%2Fn6SZnkyW79FOpvJgOwTbhTFxPcK8UP1eiKcxDF%2FtuIi1Ti0eAqBQndcL%2BV%2FEnpnch3l%2Fcjj%2BiFaii1xY9YQAqKWnFOHaWqZmT45CgwsUu%2BwOmikiSRsMUXxOxS3JRedHNWM6a91jyJP5s2qJenumhU4wxLIKIzLpWsh09vTLpg6CJr%2Fc7qItnBfQImy4da%2B54z84jzF8Z0weGGF5r9z9P9EFy74Ka0SSeN8KgNkxjo35%2BA0%2BePvLi3CUjxqgCQudXPwWKFnKtbEoJNVCvzYpofjuIBtMO3QDzy3Ki9qLcjKYBGq1hDSjUtDnpb296LGSflU5EW5tS5oHztir22V%2F5E02u3qApyJAoHbsYpty%2FJDHqfEucChcgK1FpMkugpRTwlyLWRMYM%2F8YQUg9P5nuJ9tiSN1RssTthNOwy63MTkgHqVJqMvwlyHlr4nwn9uszBrz0jKKEcSowt0h%2FZZix%2BwbUp0LkUrxJ2jsx44XVJLmRtchwayHWjxydBogQB1HhS0pNliHEezDxktfEBjqkAa6PvhaVlxOOgvG734H5LIbEGiKQqQqWG4R1fPZ8HBPJ2i38y%2Fl850q3W9Fa4Yn285AjAIImAU8qS7%2BIDk%2BciDq0b%2BCEDPPQnS3VxitCn3AgwAN6QdAByoYookicxUHDd%2Bg7ggtq7cw%2FyA4URbNDR0Gxfbb3XeFhGvl4%2FdNMJ5%2FpmR2XFeEVGN%2BMVs%2BRgMq5a49u96E2mguW6CVZRxZWflL4x8SZ&X-Amz-Signature=d9d2469bc2474507eeb1e86c364f7997a999cbbf17e0129577db145c255f24d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CVMLTEM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCCJ5%2FNCyrWBalQh2eBvjPscoN8Q2Xor3MzH65WaqT27wIhANhrKUMs94B0oef3qcVtxSYtfr8DkSJrVHjqGoYnwXJkKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl9EsMLRghzAbiSycq3AMocmr53x3WNWYGOiwiO6Wx1HG%2Fv%2BM6uzE1P7yGaA2sHT5FhxMfWOU0crvnu5WcvZ6ZsJBudHfcyypU0ExIHtO3ja3CSiEUdrqM2NW642mFyZ55ISm%2Fn6SZnkyW79FOpvJgOwTbhTFxPcK8UP1eiKcxDF%2FtuIi1Ti0eAqBQndcL%2BV%2FEnpnch3l%2Fcjj%2BiFaii1xY9YQAqKWnFOHaWqZmT45CgwsUu%2BwOmikiSRsMUXxOxS3JRedHNWM6a91jyJP5s2qJenumhU4wxLIKIzLpWsh09vTLpg6CJr%2Fc7qItnBfQImy4da%2B54z84jzF8Z0weGGF5r9z9P9EFy74Ka0SSeN8KgNkxjo35%2BA0%2BePvLi3CUjxqgCQudXPwWKFnKtbEoJNVCvzYpofjuIBtMO3QDzy3Ki9qLcjKYBGq1hDSjUtDnpb296LGSflU5EW5tS5oHztir22V%2F5E02u3qApyJAoHbsYpty%2FJDHqfEucChcgK1FpMkugpRTwlyLWRMYM%2F8YQUg9P5nuJ9tiSN1RssTthNOwy63MTkgHqVJqMvwlyHlr4nwn9uszBrz0jKKEcSowt0h%2FZZix%2BwbUp0LkUrxJ2jsx44XVJLmRtchwayHWjxydBogQB1HhS0pNliHEezDxktfEBjqkAa6PvhaVlxOOgvG734H5LIbEGiKQqQqWG4R1fPZ8HBPJ2i38y%2Fl850q3W9Fa4Yn285AjAIImAU8qS7%2BIDk%2BciDq0b%2BCEDPPQnS3VxitCn3AgwAN6QdAByoYookicxUHDd%2Bg7ggtq7cw%2FyA4URbNDR0Gxfbb3XeFhGvl4%2FdNMJ5%2FpmR2XFeEVGN%2BMVs%2BRgMq5a49u96E2mguW6CVZRxZWflL4x8SZ&X-Amz-Signature=27ea8d301880d6056ec121b35c7dba12f1ad3af79d2a371950067ac1c7d4419e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CVMLTEM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCCJ5%2FNCyrWBalQh2eBvjPscoN8Q2Xor3MzH65WaqT27wIhANhrKUMs94B0oef3qcVtxSYtfr8DkSJrVHjqGoYnwXJkKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl9EsMLRghzAbiSycq3AMocmr53x3WNWYGOiwiO6Wx1HG%2Fv%2BM6uzE1P7yGaA2sHT5FhxMfWOU0crvnu5WcvZ6ZsJBudHfcyypU0ExIHtO3ja3CSiEUdrqM2NW642mFyZ55ISm%2Fn6SZnkyW79FOpvJgOwTbhTFxPcK8UP1eiKcxDF%2FtuIi1Ti0eAqBQndcL%2BV%2FEnpnch3l%2Fcjj%2BiFaii1xY9YQAqKWnFOHaWqZmT45CgwsUu%2BwOmikiSRsMUXxOxS3JRedHNWM6a91jyJP5s2qJenumhU4wxLIKIzLpWsh09vTLpg6CJr%2Fc7qItnBfQImy4da%2B54z84jzF8Z0weGGF5r9z9P9EFy74Ka0SSeN8KgNkxjo35%2BA0%2BePvLi3CUjxqgCQudXPwWKFnKtbEoJNVCvzYpofjuIBtMO3QDzy3Ki9qLcjKYBGq1hDSjUtDnpb296LGSflU5EW5tS5oHztir22V%2F5E02u3qApyJAoHbsYpty%2FJDHqfEucChcgK1FpMkugpRTwlyLWRMYM%2F8YQUg9P5nuJ9tiSN1RssTthNOwy63MTkgHqVJqMvwlyHlr4nwn9uszBrz0jKKEcSowt0h%2FZZix%2BwbUp0LkUrxJ2jsx44XVJLmRtchwayHWjxydBogQB1HhS0pNliHEezDxktfEBjqkAa6PvhaVlxOOgvG734H5LIbEGiKQqQqWG4R1fPZ8HBPJ2i38y%2Fl850q3W9Fa4Yn285AjAIImAU8qS7%2BIDk%2BciDq0b%2BCEDPPQnS3VxitCn3AgwAN6QdAByoYookicxUHDd%2Bg7ggtq7cw%2FyA4URbNDR0Gxfbb3XeFhGvl4%2FdNMJ5%2FpmR2XFeEVGN%2BMVs%2BRgMq5a49u96E2mguW6CVZRxZWflL4x8SZ&X-Amz-Signature=490c9a2ee41880c584b25e33b72fa2fa0ec7cf7864cfd18b06d397bd3084e964&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CVMLTEM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCCJ5%2FNCyrWBalQh2eBvjPscoN8Q2Xor3MzH65WaqT27wIhANhrKUMs94B0oef3qcVtxSYtfr8DkSJrVHjqGoYnwXJkKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl9EsMLRghzAbiSycq3AMocmr53x3WNWYGOiwiO6Wx1HG%2Fv%2BM6uzE1P7yGaA2sHT5FhxMfWOU0crvnu5WcvZ6ZsJBudHfcyypU0ExIHtO3ja3CSiEUdrqM2NW642mFyZ55ISm%2Fn6SZnkyW79FOpvJgOwTbhTFxPcK8UP1eiKcxDF%2FtuIi1Ti0eAqBQndcL%2BV%2FEnpnch3l%2Fcjj%2BiFaii1xY9YQAqKWnFOHaWqZmT45CgwsUu%2BwOmikiSRsMUXxOxS3JRedHNWM6a91jyJP5s2qJenumhU4wxLIKIzLpWsh09vTLpg6CJr%2Fc7qItnBfQImy4da%2B54z84jzF8Z0weGGF5r9z9P9EFy74Ka0SSeN8KgNkxjo35%2BA0%2BePvLi3CUjxqgCQudXPwWKFnKtbEoJNVCvzYpofjuIBtMO3QDzy3Ki9qLcjKYBGq1hDSjUtDnpb296LGSflU5EW5tS5oHztir22V%2F5E02u3qApyJAoHbsYpty%2FJDHqfEucChcgK1FpMkugpRTwlyLWRMYM%2F8YQUg9P5nuJ9tiSN1RssTthNOwy63MTkgHqVJqMvwlyHlr4nwn9uszBrz0jKKEcSowt0h%2FZZix%2BwbUp0LkUrxJ2jsx44XVJLmRtchwayHWjxydBogQB1HhS0pNliHEezDxktfEBjqkAa6PvhaVlxOOgvG734H5LIbEGiKQqQqWG4R1fPZ8HBPJ2i38y%2Fl850q3W9Fa4Yn285AjAIImAU8qS7%2BIDk%2BciDq0b%2BCEDPPQnS3VxitCn3AgwAN6QdAByoYookicxUHDd%2Bg7ggtq7cw%2FyA4URbNDR0Gxfbb3XeFhGvl4%2FdNMJ5%2FpmR2XFeEVGN%2BMVs%2BRgMq5a49u96E2mguW6CVZRxZWflL4x8SZ&X-Amz-Signature=061a69c1e20585dba659377d79eab9a254311ddbb014ecc99c0d317c1afe90f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CVMLTEM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCCJ5%2FNCyrWBalQh2eBvjPscoN8Q2Xor3MzH65WaqT27wIhANhrKUMs94B0oef3qcVtxSYtfr8DkSJrVHjqGoYnwXJkKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl9EsMLRghzAbiSycq3AMocmr53x3WNWYGOiwiO6Wx1HG%2Fv%2BM6uzE1P7yGaA2sHT5FhxMfWOU0crvnu5WcvZ6ZsJBudHfcyypU0ExIHtO3ja3CSiEUdrqM2NW642mFyZ55ISm%2Fn6SZnkyW79FOpvJgOwTbhTFxPcK8UP1eiKcxDF%2FtuIi1Ti0eAqBQndcL%2BV%2FEnpnch3l%2Fcjj%2BiFaii1xY9YQAqKWnFOHaWqZmT45CgwsUu%2BwOmikiSRsMUXxOxS3JRedHNWM6a91jyJP5s2qJenumhU4wxLIKIzLpWsh09vTLpg6CJr%2Fc7qItnBfQImy4da%2B54z84jzF8Z0weGGF5r9z9P9EFy74Ka0SSeN8KgNkxjo35%2BA0%2BePvLi3CUjxqgCQudXPwWKFnKtbEoJNVCvzYpofjuIBtMO3QDzy3Ki9qLcjKYBGq1hDSjUtDnpb296LGSflU5EW5tS5oHztir22V%2F5E02u3qApyJAoHbsYpty%2FJDHqfEucChcgK1FpMkugpRTwlyLWRMYM%2F8YQUg9P5nuJ9tiSN1RssTthNOwy63MTkgHqVJqMvwlyHlr4nwn9uszBrz0jKKEcSowt0h%2FZZix%2BwbUp0LkUrxJ2jsx44XVJLmRtchwayHWjxydBogQB1HhS0pNliHEezDxktfEBjqkAa6PvhaVlxOOgvG734H5LIbEGiKQqQqWG4R1fPZ8HBPJ2i38y%2Fl850q3W9Fa4Yn285AjAIImAU8qS7%2BIDk%2BciDq0b%2BCEDPPQnS3VxitCn3AgwAN6QdAByoYookicxUHDd%2Bg7ggtq7cw%2FyA4URbNDR0Gxfbb3XeFhGvl4%2FdNMJ5%2FpmR2XFeEVGN%2BMVs%2BRgMq5a49u96E2mguW6CVZRxZWflL4x8SZ&X-Amz-Signature=4662e50c8c1f073067596a552e7c612709a8f449e3a9895e616bbb897bc32750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
