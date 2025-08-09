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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3SUKL5X%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQHrzuTfUIKaKOhD%2Fmv439D7BGBpBllAq1IeqWsUzmqwIgRnx99BXjGJefhjQQunGVptN7fRMdlBd%2F3LAMJK4X0W0qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoDowRhd7mAAN1ZjircAyhdcxNMK1%2FqN%2FDxb%2BTgJVsksIE%2Fkdznh3AZC6P4ji31fpCTbZN7Yt98%2F8xZNe0qYCsKdOaBudkBNWOpDqezDB6xEY20V%2BBB3P3fwYFlBSw%2BwgteK4FSf8WRqIDs%2FFOqmbTgaIwU73OwfG1NSBM7bUrl88uNXjHyrD7xyW5FKFgFfOGMIaFNangyDfXkOUsEA0c8vLViADydM2lpGL1h4m64iTc5L1AKUTM%2B2INM%2F5vsacTVYYwB%2Bs7zk1e8Na%2BvkB%2FwoIXzizzEl%2FH%2B3ph0R28fOPBDE%2F4yy1WgDerm%2FlQ6wRSjq3wtCPOGSpXY1l4PzDyNN34HSvVwSCDcRM86gXw0k7C%2FNHHisUoOgx69wzFMxy5hz5zzahFR9HjCQ5xmQedML7b0cxLzdmPQEWOvDfyk%2Blf6gaPMTg8AzDYXt2sCrAJSTlOb2P8iEclJJWXaklS%2FrA5MrKZvGw1vD3mioG95r57LHAM%2F9LueUJXgZ7UTQnDoDRvbYU%2FAKvEK%2BUqMD7hue1MBvtluh14B2Ahk98Oy2k8a6ZywGFNa%2F76Yi9XfJpGzlODDjLoU4ViaQO%2BFiiu0%2F3dfbIFV8f1qlH%2F8L54GwdrI%2B1wpC7UQ6I6eBHM7IWCgtecW139LwSD6MKeM38QGOqUB5wYnjDvdmYU5V3pgG2gf20tlSzgLpEysZw%2BI5FmcgfAqYP%2Fh%2F5f7y5thcdB0lKTUDX2JH1LW0t4kAQYDRz51%2FYmh1Ijc0TKOAhy9tpcx7GoPvXCG6%2BH9w30bO1QfjDk9HVQACPYE%2F88POo74506MHl4CXyogTgE4hDfAxyp1adxyW5IIrbBkRrdQmGeZIgQE51jTB6uCm8H9flulA0zUpDjWpWAa&X-Amz-Signature=5590c891c4830aa58060dd786ddc4c8921cba1391473c5334aa67dd16ce3cb02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3SUKL5X%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQHrzuTfUIKaKOhD%2Fmv439D7BGBpBllAq1IeqWsUzmqwIgRnx99BXjGJefhjQQunGVptN7fRMdlBd%2F3LAMJK4X0W0qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoDowRhd7mAAN1ZjircAyhdcxNMK1%2FqN%2FDxb%2BTgJVsksIE%2Fkdznh3AZC6P4ji31fpCTbZN7Yt98%2F8xZNe0qYCsKdOaBudkBNWOpDqezDB6xEY20V%2BBB3P3fwYFlBSw%2BwgteK4FSf8WRqIDs%2FFOqmbTgaIwU73OwfG1NSBM7bUrl88uNXjHyrD7xyW5FKFgFfOGMIaFNangyDfXkOUsEA0c8vLViADydM2lpGL1h4m64iTc5L1AKUTM%2B2INM%2F5vsacTVYYwB%2Bs7zk1e8Na%2BvkB%2FwoIXzizzEl%2FH%2B3ph0R28fOPBDE%2F4yy1WgDerm%2FlQ6wRSjq3wtCPOGSpXY1l4PzDyNN34HSvVwSCDcRM86gXw0k7C%2FNHHisUoOgx69wzFMxy5hz5zzahFR9HjCQ5xmQedML7b0cxLzdmPQEWOvDfyk%2Blf6gaPMTg8AzDYXt2sCrAJSTlOb2P8iEclJJWXaklS%2FrA5MrKZvGw1vD3mioG95r57LHAM%2F9LueUJXgZ7UTQnDoDRvbYU%2FAKvEK%2BUqMD7hue1MBvtluh14B2Ahk98Oy2k8a6ZywGFNa%2F76Yi9XfJpGzlODDjLoU4ViaQO%2BFiiu0%2F3dfbIFV8f1qlH%2F8L54GwdrI%2B1wpC7UQ6I6eBHM7IWCgtecW139LwSD6MKeM38QGOqUB5wYnjDvdmYU5V3pgG2gf20tlSzgLpEysZw%2BI5FmcgfAqYP%2Fh%2F5f7y5thcdB0lKTUDX2JH1LW0t4kAQYDRz51%2FYmh1Ijc0TKOAhy9tpcx7GoPvXCG6%2BH9w30bO1QfjDk9HVQACPYE%2F88POo74506MHl4CXyogTgE4hDfAxyp1adxyW5IIrbBkRrdQmGeZIgQE51jTB6uCm8H9flulA0zUpDjWpWAa&X-Amz-Signature=20a83606a64c8b38c4590fa5e68ea60056b91fca5334232464a5a071f4777b40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3SUKL5X%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQHrzuTfUIKaKOhD%2Fmv439D7BGBpBllAq1IeqWsUzmqwIgRnx99BXjGJefhjQQunGVptN7fRMdlBd%2F3LAMJK4X0W0qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoDowRhd7mAAN1ZjircAyhdcxNMK1%2FqN%2FDxb%2BTgJVsksIE%2Fkdznh3AZC6P4ji31fpCTbZN7Yt98%2F8xZNe0qYCsKdOaBudkBNWOpDqezDB6xEY20V%2BBB3P3fwYFlBSw%2BwgteK4FSf8WRqIDs%2FFOqmbTgaIwU73OwfG1NSBM7bUrl88uNXjHyrD7xyW5FKFgFfOGMIaFNangyDfXkOUsEA0c8vLViADydM2lpGL1h4m64iTc5L1AKUTM%2B2INM%2F5vsacTVYYwB%2Bs7zk1e8Na%2BvkB%2FwoIXzizzEl%2FH%2B3ph0R28fOPBDE%2F4yy1WgDerm%2FlQ6wRSjq3wtCPOGSpXY1l4PzDyNN34HSvVwSCDcRM86gXw0k7C%2FNHHisUoOgx69wzFMxy5hz5zzahFR9HjCQ5xmQedML7b0cxLzdmPQEWOvDfyk%2Blf6gaPMTg8AzDYXt2sCrAJSTlOb2P8iEclJJWXaklS%2FrA5MrKZvGw1vD3mioG95r57LHAM%2F9LueUJXgZ7UTQnDoDRvbYU%2FAKvEK%2BUqMD7hue1MBvtluh14B2Ahk98Oy2k8a6ZywGFNa%2F76Yi9XfJpGzlODDjLoU4ViaQO%2BFiiu0%2F3dfbIFV8f1qlH%2F8L54GwdrI%2B1wpC7UQ6I6eBHM7IWCgtecW139LwSD6MKeM38QGOqUB5wYnjDvdmYU5V3pgG2gf20tlSzgLpEysZw%2BI5FmcgfAqYP%2Fh%2F5f7y5thcdB0lKTUDX2JH1LW0t4kAQYDRz51%2FYmh1Ijc0TKOAhy9tpcx7GoPvXCG6%2BH9w30bO1QfjDk9HVQACPYE%2F88POo74506MHl4CXyogTgE4hDfAxyp1adxyW5IIrbBkRrdQmGeZIgQE51jTB6uCm8H9flulA0zUpDjWpWAa&X-Amz-Signature=dd3eabfd8680455af2285ff2f080b1ed16717bdc97fecfa2014b917f138cd5a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3SUKL5X%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQHrzuTfUIKaKOhD%2Fmv439D7BGBpBllAq1IeqWsUzmqwIgRnx99BXjGJefhjQQunGVptN7fRMdlBd%2F3LAMJK4X0W0qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoDowRhd7mAAN1ZjircAyhdcxNMK1%2FqN%2FDxb%2BTgJVsksIE%2Fkdznh3AZC6P4ji31fpCTbZN7Yt98%2F8xZNe0qYCsKdOaBudkBNWOpDqezDB6xEY20V%2BBB3P3fwYFlBSw%2BwgteK4FSf8WRqIDs%2FFOqmbTgaIwU73OwfG1NSBM7bUrl88uNXjHyrD7xyW5FKFgFfOGMIaFNangyDfXkOUsEA0c8vLViADydM2lpGL1h4m64iTc5L1AKUTM%2B2INM%2F5vsacTVYYwB%2Bs7zk1e8Na%2BvkB%2FwoIXzizzEl%2FH%2B3ph0R28fOPBDE%2F4yy1WgDerm%2FlQ6wRSjq3wtCPOGSpXY1l4PzDyNN34HSvVwSCDcRM86gXw0k7C%2FNHHisUoOgx69wzFMxy5hz5zzahFR9HjCQ5xmQedML7b0cxLzdmPQEWOvDfyk%2Blf6gaPMTg8AzDYXt2sCrAJSTlOb2P8iEclJJWXaklS%2FrA5MrKZvGw1vD3mioG95r57LHAM%2F9LueUJXgZ7UTQnDoDRvbYU%2FAKvEK%2BUqMD7hue1MBvtluh14B2Ahk98Oy2k8a6ZywGFNa%2F76Yi9XfJpGzlODDjLoU4ViaQO%2BFiiu0%2F3dfbIFV8f1qlH%2F8L54GwdrI%2B1wpC7UQ6I6eBHM7IWCgtecW139LwSD6MKeM38QGOqUB5wYnjDvdmYU5V3pgG2gf20tlSzgLpEysZw%2BI5FmcgfAqYP%2Fh%2F5f7y5thcdB0lKTUDX2JH1LW0t4kAQYDRz51%2FYmh1Ijc0TKOAhy9tpcx7GoPvXCG6%2BH9w30bO1QfjDk9HVQACPYE%2F88POo74506MHl4CXyogTgE4hDfAxyp1adxyW5IIrbBkRrdQmGeZIgQE51jTB6uCm8H9flulA0zUpDjWpWAa&X-Amz-Signature=764cf11f7b418ae05f6ab5c6b27f0a219651317267297cdf0c9a9b34619dc69e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3SUKL5X%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQHrzuTfUIKaKOhD%2Fmv439D7BGBpBllAq1IeqWsUzmqwIgRnx99BXjGJefhjQQunGVptN7fRMdlBd%2F3LAMJK4X0W0qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoDowRhd7mAAN1ZjircAyhdcxNMK1%2FqN%2FDxb%2BTgJVsksIE%2Fkdznh3AZC6P4ji31fpCTbZN7Yt98%2F8xZNe0qYCsKdOaBudkBNWOpDqezDB6xEY20V%2BBB3P3fwYFlBSw%2BwgteK4FSf8WRqIDs%2FFOqmbTgaIwU73OwfG1NSBM7bUrl88uNXjHyrD7xyW5FKFgFfOGMIaFNangyDfXkOUsEA0c8vLViADydM2lpGL1h4m64iTc5L1AKUTM%2B2INM%2F5vsacTVYYwB%2Bs7zk1e8Na%2BvkB%2FwoIXzizzEl%2FH%2B3ph0R28fOPBDE%2F4yy1WgDerm%2FlQ6wRSjq3wtCPOGSpXY1l4PzDyNN34HSvVwSCDcRM86gXw0k7C%2FNHHisUoOgx69wzFMxy5hz5zzahFR9HjCQ5xmQedML7b0cxLzdmPQEWOvDfyk%2Blf6gaPMTg8AzDYXt2sCrAJSTlOb2P8iEclJJWXaklS%2FrA5MrKZvGw1vD3mioG95r57LHAM%2F9LueUJXgZ7UTQnDoDRvbYU%2FAKvEK%2BUqMD7hue1MBvtluh14B2Ahk98Oy2k8a6ZywGFNa%2F76Yi9XfJpGzlODDjLoU4ViaQO%2BFiiu0%2F3dfbIFV8f1qlH%2F8L54GwdrI%2B1wpC7UQ6I6eBHM7IWCgtecW139LwSD6MKeM38QGOqUB5wYnjDvdmYU5V3pgG2gf20tlSzgLpEysZw%2BI5FmcgfAqYP%2Fh%2F5f7y5thcdB0lKTUDX2JH1LW0t4kAQYDRz51%2FYmh1Ijc0TKOAhy9tpcx7GoPvXCG6%2BH9w30bO1QfjDk9HVQACPYE%2F88POo74506MHl4CXyogTgE4hDfAxyp1adxyW5IIrbBkRrdQmGeZIgQE51jTB6uCm8H9flulA0zUpDjWpWAa&X-Amz-Signature=f848d83bbc1ff3f132d43c8b4e02ea4b1a561b0ab813341f4299ec6df3b79317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3SUKL5X%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQHrzuTfUIKaKOhD%2Fmv439D7BGBpBllAq1IeqWsUzmqwIgRnx99BXjGJefhjQQunGVptN7fRMdlBd%2F3LAMJK4X0W0qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoDowRhd7mAAN1ZjircAyhdcxNMK1%2FqN%2FDxb%2BTgJVsksIE%2Fkdznh3AZC6P4ji31fpCTbZN7Yt98%2F8xZNe0qYCsKdOaBudkBNWOpDqezDB6xEY20V%2BBB3P3fwYFlBSw%2BwgteK4FSf8WRqIDs%2FFOqmbTgaIwU73OwfG1NSBM7bUrl88uNXjHyrD7xyW5FKFgFfOGMIaFNangyDfXkOUsEA0c8vLViADydM2lpGL1h4m64iTc5L1AKUTM%2B2INM%2F5vsacTVYYwB%2Bs7zk1e8Na%2BvkB%2FwoIXzizzEl%2FH%2B3ph0R28fOPBDE%2F4yy1WgDerm%2FlQ6wRSjq3wtCPOGSpXY1l4PzDyNN34HSvVwSCDcRM86gXw0k7C%2FNHHisUoOgx69wzFMxy5hz5zzahFR9HjCQ5xmQedML7b0cxLzdmPQEWOvDfyk%2Blf6gaPMTg8AzDYXt2sCrAJSTlOb2P8iEclJJWXaklS%2FrA5MrKZvGw1vD3mioG95r57LHAM%2F9LueUJXgZ7UTQnDoDRvbYU%2FAKvEK%2BUqMD7hue1MBvtluh14B2Ahk98Oy2k8a6ZywGFNa%2F76Yi9XfJpGzlODDjLoU4ViaQO%2BFiiu0%2F3dfbIFV8f1qlH%2F8L54GwdrI%2B1wpC7UQ6I6eBHM7IWCgtecW139LwSD6MKeM38QGOqUB5wYnjDvdmYU5V3pgG2gf20tlSzgLpEysZw%2BI5FmcgfAqYP%2Fh%2F5f7y5thcdB0lKTUDX2JH1LW0t4kAQYDRz51%2FYmh1Ijc0TKOAhy9tpcx7GoPvXCG6%2BH9w30bO1QfjDk9HVQACPYE%2F88POo74506MHl4CXyogTgE4hDfAxyp1adxyW5IIrbBkRrdQmGeZIgQE51jTB6uCm8H9flulA0zUpDjWpWAa&X-Amz-Signature=88a10779818401f9cd9629d8f3f0a0a69b79f3073eaa380ea109b2b242e81362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3SUKL5X%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQHrzuTfUIKaKOhD%2Fmv439D7BGBpBllAq1IeqWsUzmqwIgRnx99BXjGJefhjQQunGVptN7fRMdlBd%2F3LAMJK4X0W0qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoDowRhd7mAAN1ZjircAyhdcxNMK1%2FqN%2FDxb%2BTgJVsksIE%2Fkdznh3AZC6P4ji31fpCTbZN7Yt98%2F8xZNe0qYCsKdOaBudkBNWOpDqezDB6xEY20V%2BBB3P3fwYFlBSw%2BwgteK4FSf8WRqIDs%2FFOqmbTgaIwU73OwfG1NSBM7bUrl88uNXjHyrD7xyW5FKFgFfOGMIaFNangyDfXkOUsEA0c8vLViADydM2lpGL1h4m64iTc5L1AKUTM%2B2INM%2F5vsacTVYYwB%2Bs7zk1e8Na%2BvkB%2FwoIXzizzEl%2FH%2B3ph0R28fOPBDE%2F4yy1WgDerm%2FlQ6wRSjq3wtCPOGSpXY1l4PzDyNN34HSvVwSCDcRM86gXw0k7C%2FNHHisUoOgx69wzFMxy5hz5zzahFR9HjCQ5xmQedML7b0cxLzdmPQEWOvDfyk%2Blf6gaPMTg8AzDYXt2sCrAJSTlOb2P8iEclJJWXaklS%2FrA5MrKZvGw1vD3mioG95r57LHAM%2F9LueUJXgZ7UTQnDoDRvbYU%2FAKvEK%2BUqMD7hue1MBvtluh14B2Ahk98Oy2k8a6ZywGFNa%2F76Yi9XfJpGzlODDjLoU4ViaQO%2BFiiu0%2F3dfbIFV8f1qlH%2F8L54GwdrI%2B1wpC7UQ6I6eBHM7IWCgtecW139LwSD6MKeM38QGOqUB5wYnjDvdmYU5V3pgG2gf20tlSzgLpEysZw%2BI5FmcgfAqYP%2Fh%2F5f7y5thcdB0lKTUDX2JH1LW0t4kAQYDRz51%2FYmh1Ijc0TKOAhy9tpcx7GoPvXCG6%2BH9w30bO1QfjDk9HVQACPYE%2F88POo74506MHl4CXyogTgE4hDfAxyp1adxyW5IIrbBkRrdQmGeZIgQE51jTB6uCm8H9flulA0zUpDjWpWAa&X-Amz-Signature=e6887c54aa6198f741d3e2de3dd2a33e16df3506b779b59a2b5ff1f611479453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3SUKL5X%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQHrzuTfUIKaKOhD%2Fmv439D7BGBpBllAq1IeqWsUzmqwIgRnx99BXjGJefhjQQunGVptN7fRMdlBd%2F3LAMJK4X0W0qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoDowRhd7mAAN1ZjircAyhdcxNMK1%2FqN%2FDxb%2BTgJVsksIE%2Fkdznh3AZC6P4ji31fpCTbZN7Yt98%2F8xZNe0qYCsKdOaBudkBNWOpDqezDB6xEY20V%2BBB3P3fwYFlBSw%2BwgteK4FSf8WRqIDs%2FFOqmbTgaIwU73OwfG1NSBM7bUrl88uNXjHyrD7xyW5FKFgFfOGMIaFNangyDfXkOUsEA0c8vLViADydM2lpGL1h4m64iTc5L1AKUTM%2B2INM%2F5vsacTVYYwB%2Bs7zk1e8Na%2BvkB%2FwoIXzizzEl%2FH%2B3ph0R28fOPBDE%2F4yy1WgDerm%2FlQ6wRSjq3wtCPOGSpXY1l4PzDyNN34HSvVwSCDcRM86gXw0k7C%2FNHHisUoOgx69wzFMxy5hz5zzahFR9HjCQ5xmQedML7b0cxLzdmPQEWOvDfyk%2Blf6gaPMTg8AzDYXt2sCrAJSTlOb2P8iEclJJWXaklS%2FrA5MrKZvGw1vD3mioG95r57LHAM%2F9LueUJXgZ7UTQnDoDRvbYU%2FAKvEK%2BUqMD7hue1MBvtluh14B2Ahk98Oy2k8a6ZywGFNa%2F76Yi9XfJpGzlODDjLoU4ViaQO%2BFiiu0%2F3dfbIFV8f1qlH%2F8L54GwdrI%2B1wpC7UQ6I6eBHM7IWCgtecW139LwSD6MKeM38QGOqUB5wYnjDvdmYU5V3pgG2gf20tlSzgLpEysZw%2BI5FmcgfAqYP%2Fh%2F5f7y5thcdB0lKTUDX2JH1LW0t4kAQYDRz51%2FYmh1Ijc0TKOAhy9tpcx7GoPvXCG6%2BH9w30bO1QfjDk9HVQACPYE%2F88POo74506MHl4CXyogTgE4hDfAxyp1adxyW5IIrbBkRrdQmGeZIgQE51jTB6uCm8H9flulA0zUpDjWpWAa&X-Amz-Signature=798b14053ff349cfa073bcbf76e221c3fd0b51f324cdb99f515b1e0ed16a6744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3SUKL5X%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQHrzuTfUIKaKOhD%2Fmv439D7BGBpBllAq1IeqWsUzmqwIgRnx99BXjGJefhjQQunGVptN7fRMdlBd%2F3LAMJK4X0W0qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoDowRhd7mAAN1ZjircAyhdcxNMK1%2FqN%2FDxb%2BTgJVsksIE%2Fkdznh3AZC6P4ji31fpCTbZN7Yt98%2F8xZNe0qYCsKdOaBudkBNWOpDqezDB6xEY20V%2BBB3P3fwYFlBSw%2BwgteK4FSf8WRqIDs%2FFOqmbTgaIwU73OwfG1NSBM7bUrl88uNXjHyrD7xyW5FKFgFfOGMIaFNangyDfXkOUsEA0c8vLViADydM2lpGL1h4m64iTc5L1AKUTM%2B2INM%2F5vsacTVYYwB%2Bs7zk1e8Na%2BvkB%2FwoIXzizzEl%2FH%2B3ph0R28fOPBDE%2F4yy1WgDerm%2FlQ6wRSjq3wtCPOGSpXY1l4PzDyNN34HSvVwSCDcRM86gXw0k7C%2FNHHisUoOgx69wzFMxy5hz5zzahFR9HjCQ5xmQedML7b0cxLzdmPQEWOvDfyk%2Blf6gaPMTg8AzDYXt2sCrAJSTlOb2P8iEclJJWXaklS%2FrA5MrKZvGw1vD3mioG95r57LHAM%2F9LueUJXgZ7UTQnDoDRvbYU%2FAKvEK%2BUqMD7hue1MBvtluh14B2Ahk98Oy2k8a6ZywGFNa%2F76Yi9XfJpGzlODDjLoU4ViaQO%2BFiiu0%2F3dfbIFV8f1qlH%2F8L54GwdrI%2B1wpC7UQ6I6eBHM7IWCgtecW139LwSD6MKeM38QGOqUB5wYnjDvdmYU5V3pgG2gf20tlSzgLpEysZw%2BI5FmcgfAqYP%2Fh%2F5f7y5thcdB0lKTUDX2JH1LW0t4kAQYDRz51%2FYmh1Ijc0TKOAhy9tpcx7GoPvXCG6%2BH9w30bO1QfjDk9HVQACPYE%2F88POo74506MHl4CXyogTgE4hDfAxyp1adxyW5IIrbBkRrdQmGeZIgQE51jTB6uCm8H9flulA0zUpDjWpWAa&X-Amz-Signature=4dcdbb5c844e130ca22baa144cc49a66e4efeab12916145a5021b61c7fb25836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3SUKL5X%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQHrzuTfUIKaKOhD%2Fmv439D7BGBpBllAq1IeqWsUzmqwIgRnx99BXjGJefhjQQunGVptN7fRMdlBd%2F3LAMJK4X0W0qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoDowRhd7mAAN1ZjircAyhdcxNMK1%2FqN%2FDxb%2BTgJVsksIE%2Fkdznh3AZC6P4ji31fpCTbZN7Yt98%2F8xZNe0qYCsKdOaBudkBNWOpDqezDB6xEY20V%2BBB3P3fwYFlBSw%2BwgteK4FSf8WRqIDs%2FFOqmbTgaIwU73OwfG1NSBM7bUrl88uNXjHyrD7xyW5FKFgFfOGMIaFNangyDfXkOUsEA0c8vLViADydM2lpGL1h4m64iTc5L1AKUTM%2B2INM%2F5vsacTVYYwB%2Bs7zk1e8Na%2BvkB%2FwoIXzizzEl%2FH%2B3ph0R28fOPBDE%2F4yy1WgDerm%2FlQ6wRSjq3wtCPOGSpXY1l4PzDyNN34HSvVwSCDcRM86gXw0k7C%2FNHHisUoOgx69wzFMxy5hz5zzahFR9HjCQ5xmQedML7b0cxLzdmPQEWOvDfyk%2Blf6gaPMTg8AzDYXt2sCrAJSTlOb2P8iEclJJWXaklS%2FrA5MrKZvGw1vD3mioG95r57LHAM%2F9LueUJXgZ7UTQnDoDRvbYU%2FAKvEK%2BUqMD7hue1MBvtluh14B2Ahk98Oy2k8a6ZywGFNa%2F76Yi9XfJpGzlODDjLoU4ViaQO%2BFiiu0%2F3dfbIFV8f1qlH%2F8L54GwdrI%2B1wpC7UQ6I6eBHM7IWCgtecW139LwSD6MKeM38QGOqUB5wYnjDvdmYU5V3pgG2gf20tlSzgLpEysZw%2BI5FmcgfAqYP%2Fh%2F5f7y5thcdB0lKTUDX2JH1LW0t4kAQYDRz51%2FYmh1Ijc0TKOAhy9tpcx7GoPvXCG6%2BH9w30bO1QfjDk9HVQACPYE%2F88POo74506MHl4CXyogTgE4hDfAxyp1adxyW5IIrbBkRrdQmGeZIgQE51jTB6uCm8H9flulA0zUpDjWpWAa&X-Amz-Signature=d30e2468fc15a640498959c8c2f5b3ef95f1505353b7c82006cadc0ce1a48d80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I4GS5CW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICENShPNzbdqcgRk0aAH5Bw5sajuvCZ5nsZmA9FF2yqUAiEAno2nmZNfivc4ZdiTzg%2BOos8BI17nXpZc9Ij%2BLdEGpn4qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfiqGqqfafpb2EfTyrcA9OtEA9nS1V7RQJAA6aM2Nvn%2B7AKV6Ol%2Bh6MdREZnUZeYmbOawFUWJe%2F%2BDjIizL%2FwDzH9ZBDt7LR%2BPqSItFZqOsgW2LsgPr57xV1VO2lnoSqjP7XT4vhxXfEYDW2FQUlrYqnPCt%2FVuqJaeyW80O92FbTkVLg4884wwvaZ%2FHIGm6hNaZiGUoTWEhhYY7BteVO0fBTA76Ttfsq%2BLQH2PVtuy9PKzKziB5N3uKamKa7SGe44GBjGgCU5iMOynW3ajvreQOG3CG%2FwGhl8x48X9E%2BobeBb9uXrewfpXhSROaWRxCXga8HOFGaP1mKywDSdn9Y4WqjzqdAd4go5Dd0pBE9qxZnAaekwkPic5DmMqFbA8WDEwnFZrCLuI49dZwpUiu8NgbUZQ5fFSLPw9Qlm4ZikvJcJt%2BKzXkqv%2BUEEsMvGPhF13e4hcnjrTUHix02XfPBdgTC%2BfZ6adlevosrpwA%2FCsfhBbIV0%2FApF8yt%2Bk5LxEUqj0HHO1iylal5ckdCvdCGRlL4B8yA4CDyP7iGhSRR945mkMuIqoAxjIWWchf20ezPYm1ZWwWp3zHCQKaAoiB%2BCCU0aIbu7gib8%2BaFJPZ6pQs5RLJ7OBL%2Fv3Oe3QOBM2zA3VcmeimTGPPYQx%2FcMOeL38QGOqUB%2B7ziJ%2FdOYPGg40Jjs5yuzgp8fli1w8SKFrgwBPyak9D0Cvh%2FnnS4JA20IMVsF4ZSC3hjut8Q%2Fwtj9v3tKdCHDJ3HlAEbjnFyIqyZD1UrsWVMmA0XCyXsA9yv5hV5OwZnNPZuLoTfFGYuBbKiA404rtKizOwAg1bcEgqOq9666w7tdpBw7pXu%2BxDAXcgHPHfaU5IBVn%2F9TlNvoYxNgFGgdr0iNGFn&X-Amz-Signature=ed89d222758ad6ad9cf7ff1b55d709ba6e3184440ab48341e745267689ad96f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B65XD6B%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0noyn7nkI0%2Fjb4540XenG3%2B0xnUJCa%2BANVM7kqlrw9AiBMTQ01BEyKYHDGOJmqKZZZD5y8eYo0zLOhnWQ2RkttjiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzwBoCqyfY8jpXRaiKtwDZ8L%2FHIpGoUsz6F1olXsBr9Fyzl8Xr4b41zHTZQbwpbm5xpW4mh1GSAwgvUtHnsVf4wIRoJTy8h6%2BYaFYR57PEN9GMZpCdGAQvzkOXHdY2cvKSr1zydRp3qZywar6hFNQxWsPWXW1wNaiXMFCfEtl4u0YY511SKKgJ6YebkUgWrRSACsCuNovSF5oRnJv8VLFHNaCqeEWMgzgmTWdz3l2eyM3VInCZWmPgy3ObEK2dyUDzCl5UKuzyMGEdOirwwNyPCzbT5oMv3rxC3DOHXsUSP%2FBAkbBHdpVrymmjnw5E04rOfwADl9M5jbJbCqlqHHWuDZbXmsWUbVd1kQSaYXc81ynFV4J4nKd97zbeshjzzZX%2BnSt6BdsZ%2FuHyI%2BprElyPLwB1IunYsDWU%2BifrJZ5kLQ3zEnmR%2BUj9k9YR7tWqRLQAkjk2Z3HrakBrsaodmRyLFg3ZiyR9LQ5AboafjlASiTydbLcGiRyLL4CjI29J7%2Bk8frOHfNzB9LKeBWoprk9uVF0WMB5EA0NGSrsc%2FMxOYRUkEYbnmsn0S0OTIQ1RtoijJBXJ%2F14mRD%2BKtTYyNxKdfRi9nAyorvPBKv4XVJUIbjrRf7rbJXgo%2FcsJ8rlhNv5BVwkMtVwxYEH4Q0wk4vfxAY6pgGmgkJzNwulqHp8CyXwMW2P9edXmDgHvkC%2BMYcbiLzvbbBdQ9PyvmBHJFlNW6PLTIW6pOAMim299nRYArob%2BEr8jsB3gyFRikZuFyau0MZXx5pRE81qzG2clwMYBBTBaC8i38TLApzeTJV35NCOphma4DFK%2FFqpOvEwKS1OuYYDNyyjl2QvREe3cwF0MyRP0a8eOeA7odMppxXk3tRHWA2PoN53RFeO&X-Amz-Signature=f9e7ba9297515e7c559cbe0f94aed3bc00882fb0cca492974d1819f50be02049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZJZB3Q%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw4LyQczmI0ZLwTzY6prSvP%2BxrRl2QhAh7zHOmCqJdnQIgUTA79EBGNQbh8A1vKWD18NoJb3THzPBuqNeF%2BJU08vwqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2CFuwrjR0fG1O4lSrcA50lNdSUMi3VfE90JtY7R%2FrP%2FjvOvygM7lshkU4hDEbLEYsidBZHzO1JNZQuB4HkEepYOx9sGlE9odhpOmptXZNwpt6U4o3rIDE%2FbshMwz%2BXCu8SSeFu5kUvJS2vnjJrUqZTqaaDj6lGAHIYhVDbb55VzRDylMCbdWPeWTEjK8MVZUAcDW03TFSGptUf4UfceSyjrbqYFwwjonBz%2FjFrRTHHusXWgy9fzp2F33SZphWxA8h7ZqxlacjJu%2FwCmjyziKlwPti%2F4uZkLxgBISn7Grue8R4eGTvEWNrQaKnf8dXg7UHDl%2BjrrYt7frXPIedtIgl33tq7FxEjWCI%2F7vYr39iOkk1HTsxhzbH%2FmURfLmZ4TOXGjV3h1F1Jbb%2Bj4k9Ed6Xtf01EwSINgBX0tdgtwj5M%2FFKA1%2BXTMyDuiBoZTumEYz0bgPLAxVSVvtND9r76Xb5uz%2FodwYp2ce88ERVPGSO8nRD1y7%2BJ98Zdgh%2FJx2BeYvalZGXg9UZf4wE%2BHiQVL6StZNmTFPP13E5p642PZoWXVc%2Bofdv8UDqLfsSBtYkpIm5G3RqjL19uJo8k2ocz6AlSt09ogjOUj%2FPPytRSj4McrvNCN%2BbfX%2BzxWaD9WyhCBkkEheMzlO1%2FC7SLMImL38QGOqUBz5Nl0cJKSnT44W8%2FyCdcX7xtvWYBmqMbIEMEyZh1AtleCHvjcB1xJGexgM9k1bbbavbK%2FY%2BneHGmU%2Be9H2gotgvU5df6WiotbQ8lUW356UBKo66%2FWcb3DPFiv1ieTZ1nQsEKPKLg%2BofDW%2BDbUe1uvzMvUxS%2FKXlYyaPRe4mks%2BaA3Hht9uEZ7n5sVZFuobr51hQJUBfpusr9qnjO5oyZmvNaTxNP&X-Amz-Signature=e2b4e8bf096fec7619f2c9903755eca894f10de685e7669035997231f7d16b29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3SUKL5X%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQHrzuTfUIKaKOhD%2Fmv439D7BGBpBllAq1IeqWsUzmqwIgRnx99BXjGJefhjQQunGVptN7fRMdlBd%2F3LAMJK4X0W0qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoDowRhd7mAAN1ZjircAyhdcxNMK1%2FqN%2FDxb%2BTgJVsksIE%2Fkdznh3AZC6P4ji31fpCTbZN7Yt98%2F8xZNe0qYCsKdOaBudkBNWOpDqezDB6xEY20V%2BBB3P3fwYFlBSw%2BwgteK4FSf8WRqIDs%2FFOqmbTgaIwU73OwfG1NSBM7bUrl88uNXjHyrD7xyW5FKFgFfOGMIaFNangyDfXkOUsEA0c8vLViADydM2lpGL1h4m64iTc5L1AKUTM%2B2INM%2F5vsacTVYYwB%2Bs7zk1e8Na%2BvkB%2FwoIXzizzEl%2FH%2B3ph0R28fOPBDE%2F4yy1WgDerm%2FlQ6wRSjq3wtCPOGSpXY1l4PzDyNN34HSvVwSCDcRM86gXw0k7C%2FNHHisUoOgx69wzFMxy5hz5zzahFR9HjCQ5xmQedML7b0cxLzdmPQEWOvDfyk%2Blf6gaPMTg8AzDYXt2sCrAJSTlOb2P8iEclJJWXaklS%2FrA5MrKZvGw1vD3mioG95r57LHAM%2F9LueUJXgZ7UTQnDoDRvbYU%2FAKvEK%2BUqMD7hue1MBvtluh14B2Ahk98Oy2k8a6ZywGFNa%2F76Yi9XfJpGzlODDjLoU4ViaQO%2BFiiu0%2F3dfbIFV8f1qlH%2F8L54GwdrI%2B1wpC7UQ6I6eBHM7IWCgtecW139LwSD6MKeM38QGOqUB5wYnjDvdmYU5V3pgG2gf20tlSzgLpEysZw%2BI5FmcgfAqYP%2Fh%2F5f7y5thcdB0lKTUDX2JH1LW0t4kAQYDRz51%2FYmh1Ijc0TKOAhy9tpcx7GoPvXCG6%2BH9w30bO1QfjDk9HVQACPYE%2F88POo74506MHl4CXyogTgE4hDfAxyp1adxyW5IIrbBkRrdQmGeZIgQE51jTB6uCm8H9flulA0zUpDjWpWAa&X-Amz-Signature=50f1de7ede7d29158550a3c42cac2f85868767af654094e03188710ae53ceee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KZXWVTK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5bf9PlAiaqKmGml7KgkEffU7Ivsx2qPNilBwI0wrivwIga9%2FKmNyGhnQrc390evJQ4PqOG2VtPeZ27Y1rsCBPxIYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMtMFkUACmRcX8RTyrcA2s3lL2RSVW%2BNf8eN4WQZ0%2Fq5gDBJt1qH6m6pu2WRdt18J01fKTNa%2B9Ea8D5lJKt4qa87Oka0ieCMs43v8%2FWF%2BhcHG2qbcMifbw6Hdm8EdaOPK3%2F66pv9u3JsUKngQ2ARHAicC5IkDPso6HD1r%2FGoUuFZCjORhfKMcuF4%2BAbhrkrp2pHTyzx0E8%2B8C5ihSbB9Fu%2F4tlHp%2Fnckoo0c8rt9%2B4LNSPJvs9CkJurTdCwACq2HBWgm2v6wQ4yZQf2Cy22ZjmREpEH88pDsplSHwXHZ5wykPDr2HpgkS4QyEemsE4Axn4P28IIkKh%2BZHq5%2BjLYAY5WQ24OCYG%2BUJFnz9W%2FYx1u3figqyuKOzagoUKY2yAyAGXsUMV9r0fAfBxpzLN%2F8pOBE2EcsJIIgyQWEGXaxJOVbJpQOI6bL86Qt8W50EDFchlPRxoPF%2BYkAsbghsKDkDwpFStTP8M7qNXVaZK86zsKWl%2B1V9av8OQBb0oTDq8ByG6N%2BLOUqH%2F0Hell89Krkcpj8fAPzu1Y5Emfh%2FAJ%2BQLlB0obQlQ9aBVoRrs0S4lKjfqH1oFZmeae7Nb4Wt2WCoJoxJWkvT%2FPjtABTy%2BkyShGUoqApOl0lvfvoe%2FOB3ZI3vrzsdP%2BkC%2B7I71gMKuL38QGOqUBvCaO1hQJTpoFCkwkpcymLSM3r8dvCBP%2B0%2Fex5mVupbB668C8RJ%2BdykBvkYXFwuMj%2BT%2F45MGww2ETJnArwSX9MgPrWxbp0BLD%2BJbnEzsWSK89Hpa%2BlEe81uimw15PxMpBgYxab%2F5JaiA8pQ5OX%2Fy%2F5OR%2BhzkmAxaTfIwSMZ3lsoMKMgdxLeU4%2BwDcpI7sncZZqOfZWhOzYYdRDem7MfkkTwhFxqxU&X-Amz-Signature=480d427a3f98f4c6267c07882c9c4ecf84a359e9397f4a5f44bbda544e311253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3SUKL5X%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQHrzuTfUIKaKOhD%2Fmv439D7BGBpBllAq1IeqWsUzmqwIgRnx99BXjGJefhjQQunGVptN7fRMdlBd%2F3LAMJK4X0W0qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoDowRhd7mAAN1ZjircAyhdcxNMK1%2FqN%2FDxb%2BTgJVsksIE%2Fkdznh3AZC6P4ji31fpCTbZN7Yt98%2F8xZNe0qYCsKdOaBudkBNWOpDqezDB6xEY20V%2BBB3P3fwYFlBSw%2BwgteK4FSf8WRqIDs%2FFOqmbTgaIwU73OwfG1NSBM7bUrl88uNXjHyrD7xyW5FKFgFfOGMIaFNangyDfXkOUsEA0c8vLViADydM2lpGL1h4m64iTc5L1AKUTM%2B2INM%2F5vsacTVYYwB%2Bs7zk1e8Na%2BvkB%2FwoIXzizzEl%2FH%2B3ph0R28fOPBDE%2F4yy1WgDerm%2FlQ6wRSjq3wtCPOGSpXY1l4PzDyNN34HSvVwSCDcRM86gXw0k7C%2FNHHisUoOgx69wzFMxy5hz5zzahFR9HjCQ5xmQedML7b0cxLzdmPQEWOvDfyk%2Blf6gaPMTg8AzDYXt2sCrAJSTlOb2P8iEclJJWXaklS%2FrA5MrKZvGw1vD3mioG95r57LHAM%2F9LueUJXgZ7UTQnDoDRvbYU%2FAKvEK%2BUqMD7hue1MBvtluh14B2Ahk98Oy2k8a6ZywGFNa%2F76Yi9XfJpGzlODDjLoU4ViaQO%2BFiiu0%2F3dfbIFV8f1qlH%2F8L54GwdrI%2B1wpC7UQ6I6eBHM7IWCgtecW139LwSD6MKeM38QGOqUB5wYnjDvdmYU5V3pgG2gf20tlSzgLpEysZw%2BI5FmcgfAqYP%2Fh%2F5f7y5thcdB0lKTUDX2JH1LW0t4kAQYDRz51%2FYmh1Ijc0TKOAhy9tpcx7GoPvXCG6%2BH9w30bO1QfjDk9HVQACPYE%2F88POo74506MHl4CXyogTgE4hDfAxyp1adxyW5IIrbBkRrdQmGeZIgQE51jTB6uCm8H9flulA0zUpDjWpWAa&X-Amz-Signature=f8ab5d373f7d2c697ab9f30030a69316d34fcd30a61eb7a66a4919e95a1a8fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4N3BFZU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTBSsMuqNI2YWK77e8SKvY%2FCQAT7EHG3lO7%2BfoysTD8AiALMsfg3nytZcWJOWtcAboRhoVXlVX%2BwrJmBJhasSJfnCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrKtASNW2UGlLxK2qKtwDaG%2F6pGv%2BY19WsRAz43Snb7R5Rslb6WzSbkrrk0t7LWDK%2Fuq0eJPsOLpJlVMiNUBUypag8QNp1gJNgrW%2B0%2Bm1UFrpRYSmd4nlJoa%2BaiZQsG9NzHe%2BAIygQpzB07H1rDR6MddnIy961M6mGLFsJ8hEPUbT3MYMzorB5hVrY4lUxFKylI1C%2BEDlGfSMYN%2BWMWysUqN3B5OaihuXseYZ73WTksw7%2FZN82ztc4MbLM4sfOTLaOsAvXuTZ2m7AXdj3Zf%2FNZDcTsmKIMl%2BpXWroKESigG7gWr6dRupuxp7VYnTKyXWpMwTWLskwuLszxlpvFD2KDcDz9xavWbm57p2vhXaa3pcU28adpGtC9smTAdzm%2FSQIuCytgGAqVpLJzsWvb7EFuta2fleiq2PqMl90yq7DzY%2B%2FhnC1cOcjvKBJCGu2BVfNwRI8oh771PYG9j4E0XodieXEmOft6Rq%2BkuZmdxWeLQH14VXmY7T1jgZbHeitvR9XnXdMwUjeZ4GwdygFZWHsmEWwqQ639TWYUUxKnYiWtAwaCp3yziI5G9PiO2FnGjKfQNnkuELs1LAKJf6BB3wFiGfEa%2FY8Gw%2B6qC9OARYbzTu0yzpOlSQqbZ9q1usaY8PvuMPJ6zL%2Fo3NYcu4wnIvfxAY6pgEg7qAPCfomNmK71JFdPOBmulADVBr2L2Whl82WIsKibsPoDiSqKhQw5tNLBdLFHWefdKzIrJJ1WkCe5phRGSJ7qN03boiYm7celjzLqm0YtUcPXWS%2BMbYO9Mm%2BrdxUAMomKW%2F51GRr6UQ1p1WtIbnHYbfNJVPVyiKevnteb9vO2cxTt33ZSBtalq%2FwPIGxnMYwya%2BlQom1qm9uYO%2BOFRGCsDFqkl7t&X-Amz-Signature=72a3320067329ca494e7eae5565ad411c2abb6422fec7ac816705d4590293ce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3SUKL5X%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQHrzuTfUIKaKOhD%2Fmv439D7BGBpBllAq1IeqWsUzmqwIgRnx99BXjGJefhjQQunGVptN7fRMdlBd%2F3LAMJK4X0W0qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoDowRhd7mAAN1ZjircAyhdcxNMK1%2FqN%2FDxb%2BTgJVsksIE%2Fkdznh3AZC6P4ji31fpCTbZN7Yt98%2F8xZNe0qYCsKdOaBudkBNWOpDqezDB6xEY20V%2BBB3P3fwYFlBSw%2BwgteK4FSf8WRqIDs%2FFOqmbTgaIwU73OwfG1NSBM7bUrl88uNXjHyrD7xyW5FKFgFfOGMIaFNangyDfXkOUsEA0c8vLViADydM2lpGL1h4m64iTc5L1AKUTM%2B2INM%2F5vsacTVYYwB%2Bs7zk1e8Na%2BvkB%2FwoIXzizzEl%2FH%2B3ph0R28fOPBDE%2F4yy1WgDerm%2FlQ6wRSjq3wtCPOGSpXY1l4PzDyNN34HSvVwSCDcRM86gXw0k7C%2FNHHisUoOgx69wzFMxy5hz5zzahFR9HjCQ5xmQedML7b0cxLzdmPQEWOvDfyk%2Blf6gaPMTg8AzDYXt2sCrAJSTlOb2P8iEclJJWXaklS%2FrA5MrKZvGw1vD3mioG95r57LHAM%2F9LueUJXgZ7UTQnDoDRvbYU%2FAKvEK%2BUqMD7hue1MBvtluh14B2Ahk98Oy2k8a6ZywGFNa%2F76Yi9XfJpGzlODDjLoU4ViaQO%2BFiiu0%2F3dfbIFV8f1qlH%2F8L54GwdrI%2B1wpC7UQ6I6eBHM7IWCgtecW139LwSD6MKeM38QGOqUB5wYnjDvdmYU5V3pgG2gf20tlSzgLpEysZw%2BI5FmcgfAqYP%2Fh%2F5f7y5thcdB0lKTUDX2JH1LW0t4kAQYDRz51%2FYmh1Ijc0TKOAhy9tpcx7GoPvXCG6%2BH9w30bO1QfjDk9HVQACPYE%2F88POo74506MHl4CXyogTgE4hDfAxyp1adxyW5IIrbBkRrdQmGeZIgQE51jTB6uCm8H9flulA0zUpDjWpWAa&X-Amz-Signature=18326b47032c2fafe1101fe1282cbfcf66a3da350072340df9db1cff7bdcef8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV4GL4JD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BMyGn3%2BzeFa4aRSzqz35l0Qjxy2cdrueNC1nMYBvtCAIgIvUeNs51oY%2BT2oj40OeA86LUnEOGpo5SKgSXOJM5x7EqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIvFmm7GTjb7LpAeXyrcA%2FzYgk%2FF6tSmx6sKCKrJfKr5mrCzdzX8r1EO1AeRLDWJqMl4%2B805Ulta0kDlHidNDMk5CyU1w0%2FzFyYaXQKJmyBZcuwHY9Sn6%2FtSGKd7S1w0CDuL%2FjmUNoBH3SiUXC0pfcTQowEgiJoql%2BpZ%2BvnrdnZKfBlJWhYaCkXYDwHkwvBrcngfYb1bidhWpg4FGj%2F3s6kwOu3u7U8FJEDB%2FtQlZ4nP%2B3024AX9HENADRXQiitAbGozidOw4J2eGTwilVWiNrkfoS0l8x13cC67pLpdd15liwVqSw9UQR0ktOA4gfAMNDD%2Bcq7SCfJ7%2FdITMYNajjBx7L%2BU74mXFgBVdzvKJXYykks1TckB0AyzmJWc7lt%2But6Xh3H17B%2FOXXRxva3zvTxoaEe9QX4fZEL9WJ9VKhlYk6GAGAA1sXmE%2Be0a%2Fs6dID9w6TsGdOujTzS0bBzaqegB9yiuNClmYo3xgafOUpm%2Fshi9Tks%2F1allHxSpgPLsQen5o0OnP%2F48ZZIHvaerqzftAuyYOH%2BlGNvzC7d0%2BMlv1YlcDM1x3cVfMkIjNhFAYbMT39%2FJKJNYFOde%2FEhXY9slJ1hhgktGmKmRzOLyoP9o1LBjo98uX7KRUfpwxeP6To9vPh43YW8pbQXSMPyK38QGOqUBeFahOHQ%2F5g3dHF15FtO9BpHcgGbbsKutwx%2FXRs8os2og%2FlWfXvKJyaTk1x9ZJf12OpFEXENlWZShHvJXGQUAH7e3Ky6VmjfL7ybl2czRS1ka6Ku2AI2IjiYt7ku2%2BYCawW4nA87NTDe8w1OAR14tqkJFBPdwjMJEnZKsSxl5Mhq9EE%2BMhnsyVpJCsiAW8%2F%2Bk7aMl3bqolDeOnuMox%2FcyMYnf55AX&X-Amz-Signature=2603df1e8bd7664d4ce2c3b7326686d28ef9a7a174f4d48ed93212c3212c8318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3SUKL5X%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQHrzuTfUIKaKOhD%2Fmv439D7BGBpBllAq1IeqWsUzmqwIgRnx99BXjGJefhjQQunGVptN7fRMdlBd%2F3LAMJK4X0W0qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoDowRhd7mAAN1ZjircAyhdcxNMK1%2FqN%2FDxb%2BTgJVsksIE%2Fkdznh3AZC6P4ji31fpCTbZN7Yt98%2F8xZNe0qYCsKdOaBudkBNWOpDqezDB6xEY20V%2BBB3P3fwYFlBSw%2BwgteK4FSf8WRqIDs%2FFOqmbTgaIwU73OwfG1NSBM7bUrl88uNXjHyrD7xyW5FKFgFfOGMIaFNangyDfXkOUsEA0c8vLViADydM2lpGL1h4m64iTc5L1AKUTM%2B2INM%2F5vsacTVYYwB%2Bs7zk1e8Na%2BvkB%2FwoIXzizzEl%2FH%2B3ph0R28fOPBDE%2F4yy1WgDerm%2FlQ6wRSjq3wtCPOGSpXY1l4PzDyNN34HSvVwSCDcRM86gXw0k7C%2FNHHisUoOgx69wzFMxy5hz5zzahFR9HjCQ5xmQedML7b0cxLzdmPQEWOvDfyk%2Blf6gaPMTg8AzDYXt2sCrAJSTlOb2P8iEclJJWXaklS%2FrA5MrKZvGw1vD3mioG95r57LHAM%2F9LueUJXgZ7UTQnDoDRvbYU%2FAKvEK%2BUqMD7hue1MBvtluh14B2Ahk98Oy2k8a6ZywGFNa%2F76Yi9XfJpGzlODDjLoU4ViaQO%2BFiiu0%2F3dfbIFV8f1qlH%2F8L54GwdrI%2B1wpC7UQ6I6eBHM7IWCgtecW139LwSD6MKeM38QGOqUB5wYnjDvdmYU5V3pgG2gf20tlSzgLpEysZw%2BI5FmcgfAqYP%2Fh%2F5f7y5thcdB0lKTUDX2JH1LW0t4kAQYDRz51%2FYmh1Ijc0TKOAhy9tpcx7GoPvXCG6%2BH9w30bO1QfjDk9HVQACPYE%2F88POo74506MHl4CXyogTgE4hDfAxyp1adxyW5IIrbBkRrdQmGeZIgQE51jTB6uCm8H9flulA0zUpDjWpWAa&X-Amz-Signature=652ee9dffdb8d2c704feafd74195a0b60d7dfbb394d8b834ffde5019c3097abd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4CONB35%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJ12rc2bn2QdEGJ4IngsyzJGKRULL%2F8wse1xiQahQfOAiEA05CoCeJf4cFSSOPAHTUK3F%2BYUHc6s9c7TheQBbyY5PcqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoxNOhxNZrLkYaE%2FircA0WtfjtYlz1NyPjjkzTgu8r27vUiM52RTcd1B8IxIgGGRiWPtqyj8%2FJbj7CkqnLD0kC9uA7nJ3mFNHh8aW8cw5zDQOB%2BGwt%2FSyQneaB756AVyspZfh9O1Sj5JIAIAZz7fT4sUrLK3%2BsZ1z96w%2Fn11X%2BAbNoszt9s%2BeKcGdvSDpNck%2BPi1RI3mw7rhnWBq6lwxmb7mUbpsab6SKTwIDIFcax%2FsPHoObMkhUfzldFlBGI51WM%2B6R8qQ1IcoHMW29gO0YD2o9b%2FRiSyM8jxIyGuSFYqAHkCtgdllaNBcpuu2ZP%2FNi7K%2BXWwx0ZTz20UA8j6wGb17t0GXfIcUELZNCLJwU2l4bZO1OLSLb8EHEZdoERdDvxMt36xZUrvZYhKn9lC50DVBL8Mu6zDrwz5APzv%2BLwVdeW6WoANUzxUQL62i6gd1mGY9c8%2Bnz9rntJ8ZbeS7v%2FvB2f3UBOUGRRS2diz7ZX%2B%2FaTD2QRMFE1sSkDqz4PCM1EcOOBysy0mp2z8sX3oMfQUWIOPpGdwUEGPuBoNSjCyPcnvpHnsHVbrojDtFaXc2rRw%2Fg9lRe0uFtUqsfyh%2B5t%2BJ%2FzEtBqrQuQ7dcmu3GnF7eUAD%2B2bzW2QNWwjs5p6r7rp3Vq7D1Jdmx%2F9MOWL38QGOqUBjzcvX8u6pZZYlyezVVi%2Batciqr%2BkxLIJYHCNDtWVhJWre0EtuMw24O5qc5EU4qMA1zucoRPItNlRREzaEOStVGLWrdposNWwHFY7jl%2BwwVGxSFcg30egVywspV%2Bv1aWGBWTot8pRRMcdwGMdS%2ByZuTWLrIs2ofioL%2BUUHOXDfC%2Bx5DIN%2BxpTiJNgpI1n5qs82pJH7a1zF9v%2FXt5tQD9m5Tf%2BAWlH&X-Amz-Signature=9dac6a437d12d0887556a4cfce9f4e8d6f75770221e03c41d7298bde60055957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQYS4UOL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9EEjbZDPd7PqUi%2F%2FmRfBZB990t6dcpPbH3YX%2BiIVHTAiEAnOP41ngqN1AL32lqSJZdSIuQ0fwx1b0QSPn4X1TyS%2BwqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJnu5wTySl8LJlSySrcA4PlwrBLMckfG3TQt1c4%2FjaEWcqlpcpDavTeOiMDTF5SXVA%2B7igIP93MaRnwUvmz28l3vgYuzePyVQ2iFQB2Fvpap3x9PaJvE5zSfmk2HGz6KaxNgisfVIIm%2FiTX4V6ysKYTe5kNNsp9lFXgIN0GNuzS%2FkJZ2pwFxFteCtuShqY5%2FWCJi%2BprMA1WS%2BrviC6xVK6uOg%2B%2Fm4pthiKHAkfLXe2v%2FMJFMIlgZ0HfRhsKMfIDsHGJp0l2xMvieWUtVXhWI%2FWpz%2BIcDs3D20dW8bldE99KC1GNk2K%2B%2Brh8spQa8KaqC%2BXrYLt5idsI6S%2Fcq2a1GAWq9llzk9RQqLViTanbPmrl6GxygFUQDEIKmm0YhWGwFTK7JXVW4CV85Fm9rSkML9jfLwPWOh1P1JvzIWpLG40CoonKKGD6EMyZ7k0uNtW90HtBUE%2BuLvJLH50CoVv%2FVtBTEWJXTeHLA%2BmMr7nQb7E4K7I4K0oQJS1upIfW0gBAkEdsI0CnpuCBulIV1BM8z8wrr10qamgG0VAPzwUa9xwE7%2FJNwclyJSTUoA9JbvK1g8Ln3ujj1%2BPBFsJ%2F9Fph%2FVsBj0D%2FIpJzZldKmYIJ52CNyfnrWgXjsX8jpimNSqKZIvei5E66krvSwFQWMKKL38QGOqUBk7YL09HdDZ%2FBmpmJ9gniZK5s9J0IhvEy3lYHhIQ3OE6KdDsluWnqFIcgzUOAb2bFjI9upWRZyc2rjcpcPq9rvqKgAds5gIo%2FWdOhMENvHm6xKg8mdu8g0UrMYBpuCVNVYoe7aa9U69oI9PzIh6f7VWT%2Flj%2BO%2F3E8JedU%2FSXMdVVhYMuLcD%2BhNf5Wz%2BxkdimxhIlojsm046PYV%2FESr4eviA9%2BPf8I&X-Amz-Signature=27e12621310b06ef50607d76ac57338400e87e1e4c447b3e7c45bc19865ae0c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGZ4K6ZD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUoVAdg%2BkkN9zcy5r1m%2FckcP%2BmpzVnr5CvLZ58fx7YAwIga74NaqQ6ztACTRekFkNFPzLNCv6UIfZCr4oT6ZM%2BsEsqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEtIJSpwPeoSnMGHircA8D3EF6jPrp%2BxCWajcKVSIfDVqUiUv8xlxI7J%2BzDkwo2voO44tt%2B3hA%2BucJvwf6i4Azxvr8hYM7ib04T9EhA53m6Kw53Q01Pd%2ByrDkzaxbAcF6wtUHvIMT%2BVm%2BfaiPVRyiOV5TLBFes2%2FT3KG93GyZJYXTS94SUBljb9BJq1Ez9ua4hXswQHOyJKJ94Q21R47b23%2B2QS1n0By09xFiIRxLdScriA91hF1QwSaY4dgcSAGeM7E6hoMrEioZCaJm85dxZXWZY7ZPVb9ot%2BjR7wWZmrRZnDeRsAqlXJHQTXhj7UBQ7CJkjKcB%2FMvlNu9NsZAnvWn3kk1syPSlzJzLwgqFKwYc2K9RSJNsovFYfnw5C9HO37czF52YdpT68kzxh198nhTKJr9Zx7aFrSCZVfsk5SyatBRfGxSZDA1DZiGbWaOF5L88PzqrGeLQfscxdVItiWxMXwC6XtvQhOfoem3qbFmZnuVnnWsaXH3oA8eZAEMNZpEXaPffBygLUjw4vEDgH60VzwM4TQunaGbGoOfdpKtE5yyyoXUJljeiEGbRCGFqyc7%2FtZSc76wfOd1v0i%2BuhhPF%2FKjKkEDAdrTPCLyqz%2FlfA2N83h7CaKgeiRK7EbjBAqCE3noWv2bZLjMPWK38QGOqUBTWKsEWsP73nsOiGQbq4MuqvKhfwGEkuqnu9kWDysdZIW11b35LgESEke047zW%2B9HgtqoWH%2B0%2FQCRNRe8fVtKCvE1M14gICijQw93E5dBDyh6g374X3ZLL9qOxviOwMf43W%2BpnOmGU1UOCgY%2BCc6wzcWxOnefk%2FzpomgswS28DFYbtTBUZ46bVBrk0RPS%2Fp76JFkjv0XfssKEcvR0VVvSNpnnJ3uR&X-Amz-Signature=5af9af954073272b75546dd4c03075f746785491f4b7c362d0cfaaaeae4fa944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZDHIX4C%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdVnXP%2FYRmHI82fFwjwc8dUjWBj02Xcr5xK4xrKxznogIhALYymj2KA41Ge9H4r2Dxe67Bg4%2F23mggKAz8FkhYxkMnKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCw9%2FVwkHRuVc1WmAq3ANTP8YyT8eyMQim8XHWGoJkUAhh7FZ8J8zGP1TmlsdI%2BBqvpb5op8Azi%2B3o5to0Mk9NXK0ZF6qpAB%2B%2B%2FAQKABz6k8jtjxFbqRIjKyHj8PIs3UGvjPpssId4170bo99GFMsT1EUMRdOdheetbEyYA8UxBm1KiP8V%2BGtwDLPC29AbYowLp0qX%2FXkrQFJ5pHPBVG5qkbAfT%2Fk9v9U5G8HeYP9zr5uxb%2FNwsecnCCDWSc67bx0iLYkvWpgZn556ri%2F4%2FrGb6e%2BoNvObG9RvP41SOW9M3J5pJcbOO9oBQcH0ljVV6UCFHnTtjfz1NuUAwWk9Y5ileneYK5z0EAQ8VTKPFYwj7DE73IJSP5FTpGsUPSwuo8nIua1ZE9fAcALNgX73GCo9uFse47mfVMnBPDcOTSxVl6YNvSyv9lGmb3rB%2BbmM0bptrWKT5a9s%2FYyeu2WM0RIo6j62sfunMqBblVjo6ZLhmX419L1oWocxum397bhTkKh7lyfV6yU9rHbauqXM9Ey8gg2Iiasb8cWgEO6rdGCV71c7hVEwA5XdCvbSg2HOpemYV60y3vFcN7YwO8MNh%2Bc5arj%2FNnhgtK3FUtUcFcjixds68xRdevCYzoTiU%2FaDCfaMuBCQyuWfQql3aTDXi9%2FEBjqkARfUVjE9aoStHofh0nvIdS50IKTBJrxqMdwv6SgLwyaaYlrAdJv76Knvp7oo97d0Ehzaie7vNO2J0sBxIxxqXzVO%2BOyk7NTXOZDWNLwVi0DZfKYrGdRAc2WztyLkCsf0LIF2TdZTBiLEtnsHMwHjTXwCY%2BgfuXrjd7Vvs45VkS1WBEXVTWsqpa%2FJZpO2Rcbj7zBTJkXH9IgD%2FHSQXXt5nJFUK9UR&X-Amz-Signature=a5bea825dd19ce5d3f5e4cf6e686572961d2a4b3a9100a9759598301e822a7f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VKMNN2U%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvKFEwF%2B7YV4%2BgRT9nBJQzD3cVHLoQd5rbBQDpc7AyOQIgLgP073%2BYfRcqDlYpdVebdQuKQQ4UzP6yGx6%2BEcXvxKwqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRjHvqsSSKSGMMtKircA8CaJta%2FTAJCxfFg0SVUoa%2Bd2JwTW4qbNIf348drRuyJ6dnhrakQ1%2FXf328egMrPGN51saELCKTXDVRYMcxCXHNaiYZLFffp9Hb1t0%2FZWg27jghIkjqsy95n9q4LDrUpCRduVU%2FxjcfA2%2F4O7CGreNc%2FE%2Bdb7Itb08fyJrt%2FRwX6EfSWaEf3yyB%2BT46cSji6Lt%2Btt0XzPk2Lh8ZGBoxVfUMDvOGGnqHxLxP%2BP0NWZHRBoDPAUhF3Q62fH3Hh3DyfG9WvOGpjFeguYem2%2BX4mFZOEX2s6ldR0i0OiNZHrrklCKI5V%2F6NSkArrqW6EESNoUxT99sPSGBnxzQC2NsiQ6%2BAT6VaitiPkM9UPXJzYIHwSDrt%2FkjDjH3A33bK7Us9c7l%2FDQbXYB%2FgPzL20Phny0jWwbdTH5LQ3ig3qo0CdB3TrMTTVb0ETYvlraKgEgBkIKszY8mM4DexDpa39IdxwR3cWcFF6SD0XBx%2FVADXACCkok8jW3R4bxt3Ys5bYn6AvHtWwlyb0mGdDF1sVyMIC4RfEtxHh37pgAhyLIQLi7MKECUKwSCd0r%2B5p23HeS9PJauhSFzM1INVYn%2FbpErGqEUoTPdD8Vnp1%2FjdyT70YsZTuTjZpT%2FsH%2BHtq%2BLa6MKWL38QGOqUB61YY9w4eew5gkfQ%2BVG9H5DOIJ9Cj5SlVZVIMi79ECNrM8MejZ0YDRMVZaB9xDdFrNUoufiW32QweOHu9ESp8gXHF4q5tSpNRvhOQxrB4wzja8b6paFtDfnwPLhRUJkp%2BvwpzyeLg24pjVc6j6d7jSUjHD%2FB1CWHtawBOsKlHSLMMBOngPG%2BhtNSf85YHMI%2FxYABok%2FXkmyA6O1ajoSYBHfRFxJpU&X-Amz-Signature=94af3b0072106432b945ee55323f44a854090e4cb645863d9b5a991457a4915b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3SUKL5X%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQHrzuTfUIKaKOhD%2Fmv439D7BGBpBllAq1IeqWsUzmqwIgRnx99BXjGJefhjQQunGVptN7fRMdlBd%2F3LAMJK4X0W0qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoDowRhd7mAAN1ZjircAyhdcxNMK1%2FqN%2FDxb%2BTgJVsksIE%2Fkdznh3AZC6P4ji31fpCTbZN7Yt98%2F8xZNe0qYCsKdOaBudkBNWOpDqezDB6xEY20V%2BBB3P3fwYFlBSw%2BwgteK4FSf8WRqIDs%2FFOqmbTgaIwU73OwfG1NSBM7bUrl88uNXjHyrD7xyW5FKFgFfOGMIaFNangyDfXkOUsEA0c8vLViADydM2lpGL1h4m64iTc5L1AKUTM%2B2INM%2F5vsacTVYYwB%2Bs7zk1e8Na%2BvkB%2FwoIXzizzEl%2FH%2B3ph0R28fOPBDE%2F4yy1WgDerm%2FlQ6wRSjq3wtCPOGSpXY1l4PzDyNN34HSvVwSCDcRM86gXw0k7C%2FNHHisUoOgx69wzFMxy5hz5zzahFR9HjCQ5xmQedML7b0cxLzdmPQEWOvDfyk%2Blf6gaPMTg8AzDYXt2sCrAJSTlOb2P8iEclJJWXaklS%2FrA5MrKZvGw1vD3mioG95r57LHAM%2F9LueUJXgZ7UTQnDoDRvbYU%2FAKvEK%2BUqMD7hue1MBvtluh14B2Ahk98Oy2k8a6ZywGFNa%2F76Yi9XfJpGzlODDjLoU4ViaQO%2BFiiu0%2F3dfbIFV8f1qlH%2F8L54GwdrI%2B1wpC7UQ6I6eBHM7IWCgtecW139LwSD6MKeM38QGOqUB5wYnjDvdmYU5V3pgG2gf20tlSzgLpEysZw%2BI5FmcgfAqYP%2Fh%2F5f7y5thcdB0lKTUDX2JH1LW0t4kAQYDRz51%2FYmh1Ijc0TKOAhy9tpcx7GoPvXCG6%2BH9w30bO1QfjDk9HVQACPYE%2F88POo74506MHl4CXyogTgE4hDfAxyp1adxyW5IIrbBkRrdQmGeZIgQE51jTB6uCm8H9flulA0zUpDjWpWAa&X-Amz-Signature=267bad1f7125cded54872c979b413a2e7e48423fee7fe30d782fa0cb52565ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3SUKL5X%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQHrzuTfUIKaKOhD%2Fmv439D7BGBpBllAq1IeqWsUzmqwIgRnx99BXjGJefhjQQunGVptN7fRMdlBd%2F3LAMJK4X0W0qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoDowRhd7mAAN1ZjircAyhdcxNMK1%2FqN%2FDxb%2BTgJVsksIE%2Fkdznh3AZC6P4ji31fpCTbZN7Yt98%2F8xZNe0qYCsKdOaBudkBNWOpDqezDB6xEY20V%2BBB3P3fwYFlBSw%2BwgteK4FSf8WRqIDs%2FFOqmbTgaIwU73OwfG1NSBM7bUrl88uNXjHyrD7xyW5FKFgFfOGMIaFNangyDfXkOUsEA0c8vLViADydM2lpGL1h4m64iTc5L1AKUTM%2B2INM%2F5vsacTVYYwB%2Bs7zk1e8Na%2BvkB%2FwoIXzizzEl%2FH%2B3ph0R28fOPBDE%2F4yy1WgDerm%2FlQ6wRSjq3wtCPOGSpXY1l4PzDyNN34HSvVwSCDcRM86gXw0k7C%2FNHHisUoOgx69wzFMxy5hz5zzahFR9HjCQ5xmQedML7b0cxLzdmPQEWOvDfyk%2Blf6gaPMTg8AzDYXt2sCrAJSTlOb2P8iEclJJWXaklS%2FrA5MrKZvGw1vD3mioG95r57LHAM%2F9LueUJXgZ7UTQnDoDRvbYU%2FAKvEK%2BUqMD7hue1MBvtluh14B2Ahk98Oy2k8a6ZywGFNa%2F76Yi9XfJpGzlODDjLoU4ViaQO%2BFiiu0%2F3dfbIFV8f1qlH%2F8L54GwdrI%2B1wpC7UQ6I6eBHM7IWCgtecW139LwSD6MKeM38QGOqUB5wYnjDvdmYU5V3pgG2gf20tlSzgLpEysZw%2BI5FmcgfAqYP%2Fh%2F5f7y5thcdB0lKTUDX2JH1LW0t4kAQYDRz51%2FYmh1Ijc0TKOAhy9tpcx7GoPvXCG6%2BH9w30bO1QfjDk9HVQACPYE%2F88POo74506MHl4CXyogTgE4hDfAxyp1adxyW5IIrbBkRrdQmGeZIgQE51jTB6uCm8H9flulA0zUpDjWpWAa&X-Amz-Signature=6c6191f3e825521e8ebaa87f92ef49abcdfdb729f969a1b1fda7261eedf87be7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U34KCCF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtBPh%2Bgchh%2BTFdYcI671%2FykKz1TlVfJZOCshH%2FCmSvRAiEA%2BMzIkcAKw%2FaGDHi5jTLbYUjfHLzYqpQLbp79S4uJKjYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCu9Fa1hcM6WzuBpmSrcA%2BWxCRKLyjBPlHW1Uj7gapw0ESVS6%2B9mPR%2F56fiqtBb%2FlByVIc59xPDhYFhxsEpzDG9x44TVMrvoc4pFrIF9MZeGx4V2RyR8oGO4DU9PrbcgmY5AuQ6%2BqR8ArNWGkoFmjVwh%2FC0OQdp%2FgUkkP%2BWPaXRRwDnXAEw0De%2BtI5oZjNnkxOJkDTjCJOHPBRlAKDy448iADTNoyHnAFd00EeLHHHYv7dVM4IX2K8FmGRgjHsm0cPsVuqbhDfq8h1zlpYbLpwKg%2BRyfNCeTPXeBlLzDGwfRgPfQ77f1uhDjJICSUTRk3tBP%2Bp5QPEP0%2F%2FwNw%2FdxqBgAG6DDKxWtFhFVsfYpzD1r6kdHbhjdVoiz3lg40eZ8gDLbQePulbhyECCtOI3ZXw1%2FicVeKJAyl9bIifKXR7LOrAIqndpDzmC2WzxaovvREmqbsUHjdLILVIITLHfdih0TrNiqZTvpO3GoCTQqQhyhDTL9oc5iRKCRDSTvTweU8hwQriCfNdAoEKrAY5kxmVcB4OIKBGk5MNv7g%2Brp9QpXa72NXsM3v27Nu15gMKnIMJ8mhWrdItLQG8%2FcMH%2F%2FGrGfm9praF%2Fu4ScMWm9uVPG%2Bvnq3EuMig9U2sqRhtDLyjYWlhe20BtlSR%2BpoMP6K38QGOqUBJX2AIdljs%2FsztXeWRAeoZ6JGani%2FVq8O%2BaZ0ilrL82BImLiAIKzLSWzY27r912P86dmobfFZ63dXb1BUCm7b4LbJ6dLv6b2ZKJECLgvORMMe05KYPyONkVm29rpudGNODsR8IoM9TA6xQutnXw8iD7X43eEhWBQYu%2BcCdVf9EmUtoqGhQmUyAE8cZrbxPOf%2BJlWf2L45ad3Weg37DKqKbSyKLIZm&X-Amz-Signature=0955e4acb0cce4f728ae8cd6965c60004b5b1d6999ba083b5905a004810f9420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U34KCCF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtBPh%2Bgchh%2BTFdYcI671%2FykKz1TlVfJZOCshH%2FCmSvRAiEA%2BMzIkcAKw%2FaGDHi5jTLbYUjfHLzYqpQLbp79S4uJKjYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCu9Fa1hcM6WzuBpmSrcA%2BWxCRKLyjBPlHW1Uj7gapw0ESVS6%2B9mPR%2F56fiqtBb%2FlByVIc59xPDhYFhxsEpzDG9x44TVMrvoc4pFrIF9MZeGx4V2RyR8oGO4DU9PrbcgmY5AuQ6%2BqR8ArNWGkoFmjVwh%2FC0OQdp%2FgUkkP%2BWPaXRRwDnXAEw0De%2BtI5oZjNnkxOJkDTjCJOHPBRlAKDy448iADTNoyHnAFd00EeLHHHYv7dVM4IX2K8FmGRgjHsm0cPsVuqbhDfq8h1zlpYbLpwKg%2BRyfNCeTPXeBlLzDGwfRgPfQ77f1uhDjJICSUTRk3tBP%2Bp5QPEP0%2F%2FwNw%2FdxqBgAG6DDKxWtFhFVsfYpzD1r6kdHbhjdVoiz3lg40eZ8gDLbQePulbhyECCtOI3ZXw1%2FicVeKJAyl9bIifKXR7LOrAIqndpDzmC2WzxaovvREmqbsUHjdLILVIITLHfdih0TrNiqZTvpO3GoCTQqQhyhDTL9oc5iRKCRDSTvTweU8hwQriCfNdAoEKrAY5kxmVcB4OIKBGk5MNv7g%2Brp9QpXa72NXsM3v27Nu15gMKnIMJ8mhWrdItLQG8%2FcMH%2F%2FGrGfm9praF%2Fu4ScMWm9uVPG%2Bvnq3EuMig9U2sqRhtDLyjYWlhe20BtlSR%2BpoMP6K38QGOqUBJX2AIdljs%2FsztXeWRAeoZ6JGani%2FVq8O%2BaZ0ilrL82BImLiAIKzLSWzY27r912P86dmobfFZ63dXb1BUCm7b4LbJ6dLv6b2ZKJECLgvORMMe05KYPyONkVm29rpudGNODsR8IoM9TA6xQutnXw8iD7X43eEhWBQYu%2BcCdVf9EmUtoqGhQmUyAE8cZrbxPOf%2BJlWf2L45ad3Weg37DKqKbSyKLIZm&X-Amz-Signature=17061e1fa3eefb81b3ef2e710a4d3156d04372e792452c4b450aefd0372869cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U34KCCF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtBPh%2Bgchh%2BTFdYcI671%2FykKz1TlVfJZOCshH%2FCmSvRAiEA%2BMzIkcAKw%2FaGDHi5jTLbYUjfHLzYqpQLbp79S4uJKjYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCu9Fa1hcM6WzuBpmSrcA%2BWxCRKLyjBPlHW1Uj7gapw0ESVS6%2B9mPR%2F56fiqtBb%2FlByVIc59xPDhYFhxsEpzDG9x44TVMrvoc4pFrIF9MZeGx4V2RyR8oGO4DU9PrbcgmY5AuQ6%2BqR8ArNWGkoFmjVwh%2FC0OQdp%2FgUkkP%2BWPaXRRwDnXAEw0De%2BtI5oZjNnkxOJkDTjCJOHPBRlAKDy448iADTNoyHnAFd00EeLHHHYv7dVM4IX2K8FmGRgjHsm0cPsVuqbhDfq8h1zlpYbLpwKg%2BRyfNCeTPXeBlLzDGwfRgPfQ77f1uhDjJICSUTRk3tBP%2Bp5QPEP0%2F%2FwNw%2FdxqBgAG6DDKxWtFhFVsfYpzD1r6kdHbhjdVoiz3lg40eZ8gDLbQePulbhyECCtOI3ZXw1%2FicVeKJAyl9bIifKXR7LOrAIqndpDzmC2WzxaovvREmqbsUHjdLILVIITLHfdih0TrNiqZTvpO3GoCTQqQhyhDTL9oc5iRKCRDSTvTweU8hwQriCfNdAoEKrAY5kxmVcB4OIKBGk5MNv7g%2Brp9QpXa72NXsM3v27Nu15gMKnIMJ8mhWrdItLQG8%2FcMH%2F%2FGrGfm9praF%2Fu4ScMWm9uVPG%2Bvnq3EuMig9U2sqRhtDLyjYWlhe20BtlSR%2BpoMP6K38QGOqUBJX2AIdljs%2FsztXeWRAeoZ6JGani%2FVq8O%2BaZ0ilrL82BImLiAIKzLSWzY27r912P86dmobfFZ63dXb1BUCm7b4LbJ6dLv6b2ZKJECLgvORMMe05KYPyONkVm29rpudGNODsR8IoM9TA6xQutnXw8iD7X43eEhWBQYu%2BcCdVf9EmUtoqGhQmUyAE8cZrbxPOf%2BJlWf2L45ad3Weg37DKqKbSyKLIZm&X-Amz-Signature=6bc98f4361ada506ac8fce30452b263b37d30e2af8c3d3c62c1fabe52fa06791&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U34KCCF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtBPh%2Bgchh%2BTFdYcI671%2FykKz1TlVfJZOCshH%2FCmSvRAiEA%2BMzIkcAKw%2FaGDHi5jTLbYUjfHLzYqpQLbp79S4uJKjYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCu9Fa1hcM6WzuBpmSrcA%2BWxCRKLyjBPlHW1Uj7gapw0ESVS6%2B9mPR%2F56fiqtBb%2FlByVIc59xPDhYFhxsEpzDG9x44TVMrvoc4pFrIF9MZeGx4V2RyR8oGO4DU9PrbcgmY5AuQ6%2BqR8ArNWGkoFmjVwh%2FC0OQdp%2FgUkkP%2BWPaXRRwDnXAEw0De%2BtI5oZjNnkxOJkDTjCJOHPBRlAKDy448iADTNoyHnAFd00EeLHHHYv7dVM4IX2K8FmGRgjHsm0cPsVuqbhDfq8h1zlpYbLpwKg%2BRyfNCeTPXeBlLzDGwfRgPfQ77f1uhDjJICSUTRk3tBP%2Bp5QPEP0%2F%2FwNw%2FdxqBgAG6DDKxWtFhFVsfYpzD1r6kdHbhjdVoiz3lg40eZ8gDLbQePulbhyECCtOI3ZXw1%2FicVeKJAyl9bIifKXR7LOrAIqndpDzmC2WzxaovvREmqbsUHjdLILVIITLHfdih0TrNiqZTvpO3GoCTQqQhyhDTL9oc5iRKCRDSTvTweU8hwQriCfNdAoEKrAY5kxmVcB4OIKBGk5MNv7g%2Brp9QpXa72NXsM3v27Nu15gMKnIMJ8mhWrdItLQG8%2FcMH%2F%2FGrGfm9praF%2Fu4ScMWm9uVPG%2Bvnq3EuMig9U2sqRhtDLyjYWlhe20BtlSR%2BpoMP6K38QGOqUBJX2AIdljs%2FsztXeWRAeoZ6JGani%2FVq8O%2BaZ0ilrL82BImLiAIKzLSWzY27r912P86dmobfFZ63dXb1BUCm7b4LbJ6dLv6b2ZKJECLgvORMMe05KYPyONkVm29rpudGNODsR8IoM9TA6xQutnXw8iD7X43eEhWBQYu%2BcCdVf9EmUtoqGhQmUyAE8cZrbxPOf%2BJlWf2L45ad3Weg37DKqKbSyKLIZm&X-Amz-Signature=73b88a2808d605953d95b69f08f1f4381ba473b73e815f9031fe42cddaf6a6d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U34KCCF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtBPh%2Bgchh%2BTFdYcI671%2FykKz1TlVfJZOCshH%2FCmSvRAiEA%2BMzIkcAKw%2FaGDHi5jTLbYUjfHLzYqpQLbp79S4uJKjYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCu9Fa1hcM6WzuBpmSrcA%2BWxCRKLyjBPlHW1Uj7gapw0ESVS6%2B9mPR%2F56fiqtBb%2FlByVIc59xPDhYFhxsEpzDG9x44TVMrvoc4pFrIF9MZeGx4V2RyR8oGO4DU9PrbcgmY5AuQ6%2BqR8ArNWGkoFmjVwh%2FC0OQdp%2FgUkkP%2BWPaXRRwDnXAEw0De%2BtI5oZjNnkxOJkDTjCJOHPBRlAKDy448iADTNoyHnAFd00EeLHHHYv7dVM4IX2K8FmGRgjHsm0cPsVuqbhDfq8h1zlpYbLpwKg%2BRyfNCeTPXeBlLzDGwfRgPfQ77f1uhDjJICSUTRk3tBP%2Bp5QPEP0%2F%2FwNw%2FdxqBgAG6DDKxWtFhFVsfYpzD1r6kdHbhjdVoiz3lg40eZ8gDLbQePulbhyECCtOI3ZXw1%2FicVeKJAyl9bIifKXR7LOrAIqndpDzmC2WzxaovvREmqbsUHjdLILVIITLHfdih0TrNiqZTvpO3GoCTQqQhyhDTL9oc5iRKCRDSTvTweU8hwQriCfNdAoEKrAY5kxmVcB4OIKBGk5MNv7g%2Brp9QpXa72NXsM3v27Nu15gMKnIMJ8mhWrdItLQG8%2FcMH%2F%2FGrGfm9praF%2Fu4ScMWm9uVPG%2Bvnq3EuMig9U2sqRhtDLyjYWlhe20BtlSR%2BpoMP6K38QGOqUBJX2AIdljs%2FsztXeWRAeoZ6JGani%2FVq8O%2BaZ0ilrL82BImLiAIKzLSWzY27r912P86dmobfFZ63dXb1BUCm7b4LbJ6dLv6b2ZKJECLgvORMMe05KYPyONkVm29rpudGNODsR8IoM9TA6xQutnXw8iD7X43eEhWBQYu%2BcCdVf9EmUtoqGhQmUyAE8cZrbxPOf%2BJlWf2L45ad3Weg37DKqKbSyKLIZm&X-Amz-Signature=9d7d7ca9e28b78d938e8918802d78b53b196981885a31dd4bbd1122603dd032c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U34KCCF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtBPh%2Bgchh%2BTFdYcI671%2FykKz1TlVfJZOCshH%2FCmSvRAiEA%2BMzIkcAKw%2FaGDHi5jTLbYUjfHLzYqpQLbp79S4uJKjYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCu9Fa1hcM6WzuBpmSrcA%2BWxCRKLyjBPlHW1Uj7gapw0ESVS6%2B9mPR%2F56fiqtBb%2FlByVIc59xPDhYFhxsEpzDG9x44TVMrvoc4pFrIF9MZeGx4V2RyR8oGO4DU9PrbcgmY5AuQ6%2BqR8ArNWGkoFmjVwh%2FC0OQdp%2FgUkkP%2BWPaXRRwDnXAEw0De%2BtI5oZjNnkxOJkDTjCJOHPBRlAKDy448iADTNoyHnAFd00EeLHHHYv7dVM4IX2K8FmGRgjHsm0cPsVuqbhDfq8h1zlpYbLpwKg%2BRyfNCeTPXeBlLzDGwfRgPfQ77f1uhDjJICSUTRk3tBP%2Bp5QPEP0%2F%2FwNw%2FdxqBgAG6DDKxWtFhFVsfYpzD1r6kdHbhjdVoiz3lg40eZ8gDLbQePulbhyECCtOI3ZXw1%2FicVeKJAyl9bIifKXR7LOrAIqndpDzmC2WzxaovvREmqbsUHjdLILVIITLHfdih0TrNiqZTvpO3GoCTQqQhyhDTL9oc5iRKCRDSTvTweU8hwQriCfNdAoEKrAY5kxmVcB4OIKBGk5MNv7g%2Brp9QpXa72NXsM3v27Nu15gMKnIMJ8mhWrdItLQG8%2FcMH%2F%2FGrGfm9praF%2Fu4ScMWm9uVPG%2Bvnq3EuMig9U2sqRhtDLyjYWlhe20BtlSR%2BpoMP6K38QGOqUBJX2AIdljs%2FsztXeWRAeoZ6JGani%2FVq8O%2BaZ0ilrL82BImLiAIKzLSWzY27r912P86dmobfFZ63dXb1BUCm7b4LbJ6dLv6b2ZKJECLgvORMMe05KYPyONkVm29rpudGNODsR8IoM9TA6xQutnXw8iD7X43eEhWBQYu%2BcCdVf9EmUtoqGhQmUyAE8cZrbxPOf%2BJlWf2L45ad3Weg37DKqKbSyKLIZm&X-Amz-Signature=85968513afe1bf93287b7e36fd2431724c5d2d83d968619f668c86f393b5ae15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U34KCCF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtBPh%2Bgchh%2BTFdYcI671%2FykKz1TlVfJZOCshH%2FCmSvRAiEA%2BMzIkcAKw%2FaGDHi5jTLbYUjfHLzYqpQLbp79S4uJKjYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCu9Fa1hcM6WzuBpmSrcA%2BWxCRKLyjBPlHW1Uj7gapw0ESVS6%2B9mPR%2F56fiqtBb%2FlByVIc59xPDhYFhxsEpzDG9x44TVMrvoc4pFrIF9MZeGx4V2RyR8oGO4DU9PrbcgmY5AuQ6%2BqR8ArNWGkoFmjVwh%2FC0OQdp%2FgUkkP%2BWPaXRRwDnXAEw0De%2BtI5oZjNnkxOJkDTjCJOHPBRlAKDy448iADTNoyHnAFd00EeLHHHYv7dVM4IX2K8FmGRgjHsm0cPsVuqbhDfq8h1zlpYbLpwKg%2BRyfNCeTPXeBlLzDGwfRgPfQ77f1uhDjJICSUTRk3tBP%2Bp5QPEP0%2F%2FwNw%2FdxqBgAG6DDKxWtFhFVsfYpzD1r6kdHbhjdVoiz3lg40eZ8gDLbQePulbhyECCtOI3ZXw1%2FicVeKJAyl9bIifKXR7LOrAIqndpDzmC2WzxaovvREmqbsUHjdLILVIITLHfdih0TrNiqZTvpO3GoCTQqQhyhDTL9oc5iRKCRDSTvTweU8hwQriCfNdAoEKrAY5kxmVcB4OIKBGk5MNv7g%2Brp9QpXa72NXsM3v27Nu15gMKnIMJ8mhWrdItLQG8%2FcMH%2F%2FGrGfm9praF%2Fu4ScMWm9uVPG%2Bvnq3EuMig9U2sqRhtDLyjYWlhe20BtlSR%2BpoMP6K38QGOqUBJX2AIdljs%2FsztXeWRAeoZ6JGani%2FVq8O%2BaZ0ilrL82BImLiAIKzLSWzY27r912P86dmobfFZ63dXb1BUCm7b4LbJ6dLv6b2ZKJECLgvORMMe05KYPyONkVm29rpudGNODsR8IoM9TA6xQutnXw8iD7X43eEhWBQYu%2BcCdVf9EmUtoqGhQmUyAE8cZrbxPOf%2BJlWf2L45ad3Weg37DKqKbSyKLIZm&X-Amz-Signature=6bc98f4361ada506ac8fce30452b263b37d30e2af8c3d3c62c1fabe52fa06791&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U34KCCF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtBPh%2Bgchh%2BTFdYcI671%2FykKz1TlVfJZOCshH%2FCmSvRAiEA%2BMzIkcAKw%2FaGDHi5jTLbYUjfHLzYqpQLbp79S4uJKjYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCu9Fa1hcM6WzuBpmSrcA%2BWxCRKLyjBPlHW1Uj7gapw0ESVS6%2B9mPR%2F56fiqtBb%2FlByVIc59xPDhYFhxsEpzDG9x44TVMrvoc4pFrIF9MZeGx4V2RyR8oGO4DU9PrbcgmY5AuQ6%2BqR8ArNWGkoFmjVwh%2FC0OQdp%2FgUkkP%2BWPaXRRwDnXAEw0De%2BtI5oZjNnkxOJkDTjCJOHPBRlAKDy448iADTNoyHnAFd00EeLHHHYv7dVM4IX2K8FmGRgjHsm0cPsVuqbhDfq8h1zlpYbLpwKg%2BRyfNCeTPXeBlLzDGwfRgPfQ77f1uhDjJICSUTRk3tBP%2Bp5QPEP0%2F%2FwNw%2FdxqBgAG6DDKxWtFhFVsfYpzD1r6kdHbhjdVoiz3lg40eZ8gDLbQePulbhyECCtOI3ZXw1%2FicVeKJAyl9bIifKXR7LOrAIqndpDzmC2WzxaovvREmqbsUHjdLILVIITLHfdih0TrNiqZTvpO3GoCTQqQhyhDTL9oc5iRKCRDSTvTweU8hwQriCfNdAoEKrAY5kxmVcB4OIKBGk5MNv7g%2Brp9QpXa72NXsM3v27Nu15gMKnIMJ8mhWrdItLQG8%2FcMH%2F%2FGrGfm9praF%2Fu4ScMWm9uVPG%2Bvnq3EuMig9U2sqRhtDLyjYWlhe20BtlSR%2BpoMP6K38QGOqUBJX2AIdljs%2FsztXeWRAeoZ6JGani%2FVq8O%2BaZ0ilrL82BImLiAIKzLSWzY27r912P86dmobfFZ63dXb1BUCm7b4LbJ6dLv6b2ZKJECLgvORMMe05KYPyONkVm29rpudGNODsR8IoM9TA6xQutnXw8iD7X43eEhWBQYu%2BcCdVf9EmUtoqGhQmUyAE8cZrbxPOf%2BJlWf2L45ad3Weg37DKqKbSyKLIZm&X-Amz-Signature=f896ebb9f767f564d68792056716a77b5aa5eb7e483fb1602431f22e85952ddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U34KCCF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtBPh%2Bgchh%2BTFdYcI671%2FykKz1TlVfJZOCshH%2FCmSvRAiEA%2BMzIkcAKw%2FaGDHi5jTLbYUjfHLzYqpQLbp79S4uJKjYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCu9Fa1hcM6WzuBpmSrcA%2BWxCRKLyjBPlHW1Uj7gapw0ESVS6%2B9mPR%2F56fiqtBb%2FlByVIc59xPDhYFhxsEpzDG9x44TVMrvoc4pFrIF9MZeGx4V2RyR8oGO4DU9PrbcgmY5AuQ6%2BqR8ArNWGkoFmjVwh%2FC0OQdp%2FgUkkP%2BWPaXRRwDnXAEw0De%2BtI5oZjNnkxOJkDTjCJOHPBRlAKDy448iADTNoyHnAFd00EeLHHHYv7dVM4IX2K8FmGRgjHsm0cPsVuqbhDfq8h1zlpYbLpwKg%2BRyfNCeTPXeBlLzDGwfRgPfQ77f1uhDjJICSUTRk3tBP%2Bp5QPEP0%2F%2FwNw%2FdxqBgAG6DDKxWtFhFVsfYpzD1r6kdHbhjdVoiz3lg40eZ8gDLbQePulbhyECCtOI3ZXw1%2FicVeKJAyl9bIifKXR7LOrAIqndpDzmC2WzxaovvREmqbsUHjdLILVIITLHfdih0TrNiqZTvpO3GoCTQqQhyhDTL9oc5iRKCRDSTvTweU8hwQriCfNdAoEKrAY5kxmVcB4OIKBGk5MNv7g%2Brp9QpXa72NXsM3v27Nu15gMKnIMJ8mhWrdItLQG8%2FcMH%2F%2FGrGfm9praF%2Fu4ScMWm9uVPG%2Bvnq3EuMig9U2sqRhtDLyjYWlhe20BtlSR%2BpoMP6K38QGOqUBJX2AIdljs%2FsztXeWRAeoZ6JGani%2FVq8O%2BaZ0ilrL82BImLiAIKzLSWzY27r912P86dmobfFZ63dXb1BUCm7b4LbJ6dLv6b2ZKJECLgvORMMe05KYPyONkVm29rpudGNODsR8IoM9TA6xQutnXw8iD7X43eEhWBQYu%2BcCdVf9EmUtoqGhQmUyAE8cZrbxPOf%2BJlWf2L45ad3Weg37DKqKbSyKLIZm&X-Amz-Signature=10d9c3771ae3b47fe191e41ed933cd1af2140fa119bbb263318d8ae08ecb8fea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U34KCCF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtBPh%2Bgchh%2BTFdYcI671%2FykKz1TlVfJZOCshH%2FCmSvRAiEA%2BMzIkcAKw%2FaGDHi5jTLbYUjfHLzYqpQLbp79S4uJKjYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCu9Fa1hcM6WzuBpmSrcA%2BWxCRKLyjBPlHW1Uj7gapw0ESVS6%2B9mPR%2F56fiqtBb%2FlByVIc59xPDhYFhxsEpzDG9x44TVMrvoc4pFrIF9MZeGx4V2RyR8oGO4DU9PrbcgmY5AuQ6%2BqR8ArNWGkoFmjVwh%2FC0OQdp%2FgUkkP%2BWPaXRRwDnXAEw0De%2BtI5oZjNnkxOJkDTjCJOHPBRlAKDy448iADTNoyHnAFd00EeLHHHYv7dVM4IX2K8FmGRgjHsm0cPsVuqbhDfq8h1zlpYbLpwKg%2BRyfNCeTPXeBlLzDGwfRgPfQ77f1uhDjJICSUTRk3tBP%2Bp5QPEP0%2F%2FwNw%2FdxqBgAG6DDKxWtFhFVsfYpzD1r6kdHbhjdVoiz3lg40eZ8gDLbQePulbhyECCtOI3ZXw1%2FicVeKJAyl9bIifKXR7LOrAIqndpDzmC2WzxaovvREmqbsUHjdLILVIITLHfdih0TrNiqZTvpO3GoCTQqQhyhDTL9oc5iRKCRDSTvTweU8hwQriCfNdAoEKrAY5kxmVcB4OIKBGk5MNv7g%2Brp9QpXa72NXsM3v27Nu15gMKnIMJ8mhWrdItLQG8%2FcMH%2F%2FGrGfm9praF%2Fu4ScMWm9uVPG%2Bvnq3EuMig9U2sqRhtDLyjYWlhe20BtlSR%2BpoMP6K38QGOqUBJX2AIdljs%2FsztXeWRAeoZ6JGani%2FVq8O%2BaZ0ilrL82BImLiAIKzLSWzY27r912P86dmobfFZ63dXb1BUCm7b4LbJ6dLv6b2ZKJECLgvORMMe05KYPyONkVm29rpudGNODsR8IoM9TA6xQutnXw8iD7X43eEhWBQYu%2BcCdVf9EmUtoqGhQmUyAE8cZrbxPOf%2BJlWf2L45ad3Weg37DKqKbSyKLIZm&X-Amz-Signature=c377af045ead12db90e0e9ac82912f81bd507d8bfe8df1cb97f149e42007beef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
