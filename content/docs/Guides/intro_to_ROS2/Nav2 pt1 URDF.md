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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM676CXY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJ47Im1%2FnNrmgifPy53oI4c6mB%2FyJaV0PwvLtN2NmnfAiBXXV%2FacHDxhck68qKGFySz%2FqX65NgFai2kmTYzSniQ2yqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6GxdBwYXGan%2B%2BaB4KtwDvnLfihEFznvgMb3vZUMUF5s4lkJh50PCGlsBtuUcsxnvvnjbEDJE4ygkWr3eacjHym6BzwykIMODD5vhQNtx1H%2BILU9XgLdfglfDrUJNIPicgpctZBikdmQoIT%2F4OCUhb%2BQj6LaWWhE621PR40a%2FiorQIEBx9ly7%2BzPaGIB0%2Bhv3Jk%2BIxpC3AnuxTkabb26sSlis59SCBTFkmt8gRZY1s8eNaiGnH0KtthuuxIPvBp4vxoDGX8lyEDjvlpd%2FFKyj5fI9CIRafoEtEXlB%2Bks8SSa8NotYp31UItzMltc2Ibx0XuUXjVJkCmjes%2F%2BfiJap7D8R4KOozOsElLxQoOV9XenS9uwvQ%2B4HMp1fxX6LTIiEstaz3KUg1i%2BA4nO1QqItCzkvjhmQk0cjBVV4f%2BKOx32iFnz%2FXVgeo3qsvhpt521RxwLLwOprV4gP6rkiE9IjRr7cPZjlhpUTbZDN%2FooUW1hZ6vU4HSzqS%2BHbvDXOeCSPKhsnzsvGiAHyJVD25gQZoiaud0W3OcvOPgiG5DjArO5YRtPUWJOOGI0xmn%2FwW4FwBnIFV%2Bk3bd4GOESD4upPvwtgMvfH4GyNzFM34ut1qkel7lVyujYUT%2FRi%2FmzYgwl52cxaBuXXtBcn2QQwo6zmxAY6pgGSoITqY%2FnkD6ezyX7HMq%2B03dmKh2%2Bh%2BZQLeXOVPnE%2BhQl3Z4d9bo%2F3IQvm3%2BOQnHfnvAu%2BI7R3tjm4712Dgdv67W0PAOoEI1GExvaTX8J2dNqrRCpXIEubjLmf8ERYRAYjytKM%2BCLiIoO7%2BtlpWB24qpzzxCkQpKSdcXeiwew0cn9S82Bkv20ZNy7tFr9flv7dMHx8hz1y4R0Ib%2Bp8IN9S%2FeOXOmsL&X-Amz-Signature=fe416b82c11b5eb67d088ea99f270c0b3f51e1ebb07f31509a259cc72cc8f7ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM676CXY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJ47Im1%2FnNrmgifPy53oI4c6mB%2FyJaV0PwvLtN2NmnfAiBXXV%2FacHDxhck68qKGFySz%2FqX65NgFai2kmTYzSniQ2yqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6GxdBwYXGan%2B%2BaB4KtwDvnLfihEFznvgMb3vZUMUF5s4lkJh50PCGlsBtuUcsxnvvnjbEDJE4ygkWr3eacjHym6BzwykIMODD5vhQNtx1H%2BILU9XgLdfglfDrUJNIPicgpctZBikdmQoIT%2F4OCUhb%2BQj6LaWWhE621PR40a%2FiorQIEBx9ly7%2BzPaGIB0%2Bhv3Jk%2BIxpC3AnuxTkabb26sSlis59SCBTFkmt8gRZY1s8eNaiGnH0KtthuuxIPvBp4vxoDGX8lyEDjvlpd%2FFKyj5fI9CIRafoEtEXlB%2Bks8SSa8NotYp31UItzMltc2Ibx0XuUXjVJkCmjes%2F%2BfiJap7D8R4KOozOsElLxQoOV9XenS9uwvQ%2B4HMp1fxX6LTIiEstaz3KUg1i%2BA4nO1QqItCzkvjhmQk0cjBVV4f%2BKOx32iFnz%2FXVgeo3qsvhpt521RxwLLwOprV4gP6rkiE9IjRr7cPZjlhpUTbZDN%2FooUW1hZ6vU4HSzqS%2BHbvDXOeCSPKhsnzsvGiAHyJVD25gQZoiaud0W3OcvOPgiG5DjArO5YRtPUWJOOGI0xmn%2FwW4FwBnIFV%2Bk3bd4GOESD4upPvwtgMvfH4GyNzFM34ut1qkel7lVyujYUT%2FRi%2FmzYgwl52cxaBuXXtBcn2QQwo6zmxAY6pgGSoITqY%2FnkD6ezyX7HMq%2B03dmKh2%2Bh%2BZQLeXOVPnE%2BhQl3Z4d9bo%2F3IQvm3%2BOQnHfnvAu%2BI7R3tjm4712Dgdv67W0PAOoEI1GExvaTX8J2dNqrRCpXIEubjLmf8ERYRAYjytKM%2BCLiIoO7%2BtlpWB24qpzzxCkQpKSdcXeiwew0cn9S82Bkv20ZNy7tFr9flv7dMHx8hz1y4R0Ib%2Bp8IN9S%2FeOXOmsL&X-Amz-Signature=6399c563c32885120c68a0f01511ff13c96c7bc665ee9d4179060f9bc75606a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM676CXY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJ47Im1%2FnNrmgifPy53oI4c6mB%2FyJaV0PwvLtN2NmnfAiBXXV%2FacHDxhck68qKGFySz%2FqX65NgFai2kmTYzSniQ2yqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6GxdBwYXGan%2B%2BaB4KtwDvnLfihEFznvgMb3vZUMUF5s4lkJh50PCGlsBtuUcsxnvvnjbEDJE4ygkWr3eacjHym6BzwykIMODD5vhQNtx1H%2BILU9XgLdfglfDrUJNIPicgpctZBikdmQoIT%2F4OCUhb%2BQj6LaWWhE621PR40a%2FiorQIEBx9ly7%2BzPaGIB0%2Bhv3Jk%2BIxpC3AnuxTkabb26sSlis59SCBTFkmt8gRZY1s8eNaiGnH0KtthuuxIPvBp4vxoDGX8lyEDjvlpd%2FFKyj5fI9CIRafoEtEXlB%2Bks8SSa8NotYp31UItzMltc2Ibx0XuUXjVJkCmjes%2F%2BfiJap7D8R4KOozOsElLxQoOV9XenS9uwvQ%2B4HMp1fxX6LTIiEstaz3KUg1i%2BA4nO1QqItCzkvjhmQk0cjBVV4f%2BKOx32iFnz%2FXVgeo3qsvhpt521RxwLLwOprV4gP6rkiE9IjRr7cPZjlhpUTbZDN%2FooUW1hZ6vU4HSzqS%2BHbvDXOeCSPKhsnzsvGiAHyJVD25gQZoiaud0W3OcvOPgiG5DjArO5YRtPUWJOOGI0xmn%2FwW4FwBnIFV%2Bk3bd4GOESD4upPvwtgMvfH4GyNzFM34ut1qkel7lVyujYUT%2FRi%2FmzYgwl52cxaBuXXtBcn2QQwo6zmxAY6pgGSoITqY%2FnkD6ezyX7HMq%2B03dmKh2%2Bh%2BZQLeXOVPnE%2BhQl3Z4d9bo%2F3IQvm3%2BOQnHfnvAu%2BI7R3tjm4712Dgdv67W0PAOoEI1GExvaTX8J2dNqrRCpXIEubjLmf8ERYRAYjytKM%2BCLiIoO7%2BtlpWB24qpzzxCkQpKSdcXeiwew0cn9S82Bkv20ZNy7tFr9flv7dMHx8hz1y4R0Ib%2Bp8IN9S%2FeOXOmsL&X-Amz-Signature=217573555fcf9123e1ddbeedcad88034acff49b9719d6343c9f3313b1da4d36a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM676CXY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJ47Im1%2FnNrmgifPy53oI4c6mB%2FyJaV0PwvLtN2NmnfAiBXXV%2FacHDxhck68qKGFySz%2FqX65NgFai2kmTYzSniQ2yqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6GxdBwYXGan%2B%2BaB4KtwDvnLfihEFznvgMb3vZUMUF5s4lkJh50PCGlsBtuUcsxnvvnjbEDJE4ygkWr3eacjHym6BzwykIMODD5vhQNtx1H%2BILU9XgLdfglfDrUJNIPicgpctZBikdmQoIT%2F4OCUhb%2BQj6LaWWhE621PR40a%2FiorQIEBx9ly7%2BzPaGIB0%2Bhv3Jk%2BIxpC3AnuxTkabb26sSlis59SCBTFkmt8gRZY1s8eNaiGnH0KtthuuxIPvBp4vxoDGX8lyEDjvlpd%2FFKyj5fI9CIRafoEtEXlB%2Bks8SSa8NotYp31UItzMltc2Ibx0XuUXjVJkCmjes%2F%2BfiJap7D8R4KOozOsElLxQoOV9XenS9uwvQ%2B4HMp1fxX6LTIiEstaz3KUg1i%2BA4nO1QqItCzkvjhmQk0cjBVV4f%2BKOx32iFnz%2FXVgeo3qsvhpt521RxwLLwOprV4gP6rkiE9IjRr7cPZjlhpUTbZDN%2FooUW1hZ6vU4HSzqS%2BHbvDXOeCSPKhsnzsvGiAHyJVD25gQZoiaud0W3OcvOPgiG5DjArO5YRtPUWJOOGI0xmn%2FwW4FwBnIFV%2Bk3bd4GOESD4upPvwtgMvfH4GyNzFM34ut1qkel7lVyujYUT%2FRi%2FmzYgwl52cxaBuXXtBcn2QQwo6zmxAY6pgGSoITqY%2FnkD6ezyX7HMq%2B03dmKh2%2Bh%2BZQLeXOVPnE%2BhQl3Z4d9bo%2F3IQvm3%2BOQnHfnvAu%2BI7R3tjm4712Dgdv67W0PAOoEI1GExvaTX8J2dNqrRCpXIEubjLmf8ERYRAYjytKM%2BCLiIoO7%2BtlpWB24qpzzxCkQpKSdcXeiwew0cn9S82Bkv20ZNy7tFr9flv7dMHx8hz1y4R0Ib%2Bp8IN9S%2FeOXOmsL&X-Amz-Signature=b105a599dfdd372c0b9a1703a0eefc4da000ec8d123ed491ab417421a31c0b04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM676CXY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJ47Im1%2FnNrmgifPy53oI4c6mB%2FyJaV0PwvLtN2NmnfAiBXXV%2FacHDxhck68qKGFySz%2FqX65NgFai2kmTYzSniQ2yqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6GxdBwYXGan%2B%2BaB4KtwDvnLfihEFznvgMb3vZUMUF5s4lkJh50PCGlsBtuUcsxnvvnjbEDJE4ygkWr3eacjHym6BzwykIMODD5vhQNtx1H%2BILU9XgLdfglfDrUJNIPicgpctZBikdmQoIT%2F4OCUhb%2BQj6LaWWhE621PR40a%2FiorQIEBx9ly7%2BzPaGIB0%2Bhv3Jk%2BIxpC3AnuxTkabb26sSlis59SCBTFkmt8gRZY1s8eNaiGnH0KtthuuxIPvBp4vxoDGX8lyEDjvlpd%2FFKyj5fI9CIRafoEtEXlB%2Bks8SSa8NotYp31UItzMltc2Ibx0XuUXjVJkCmjes%2F%2BfiJap7D8R4KOozOsElLxQoOV9XenS9uwvQ%2B4HMp1fxX6LTIiEstaz3KUg1i%2BA4nO1QqItCzkvjhmQk0cjBVV4f%2BKOx32iFnz%2FXVgeo3qsvhpt521RxwLLwOprV4gP6rkiE9IjRr7cPZjlhpUTbZDN%2FooUW1hZ6vU4HSzqS%2BHbvDXOeCSPKhsnzsvGiAHyJVD25gQZoiaud0W3OcvOPgiG5DjArO5YRtPUWJOOGI0xmn%2FwW4FwBnIFV%2Bk3bd4GOESD4upPvwtgMvfH4GyNzFM34ut1qkel7lVyujYUT%2FRi%2FmzYgwl52cxaBuXXtBcn2QQwo6zmxAY6pgGSoITqY%2FnkD6ezyX7HMq%2B03dmKh2%2Bh%2BZQLeXOVPnE%2BhQl3Z4d9bo%2F3IQvm3%2BOQnHfnvAu%2BI7R3tjm4712Dgdv67W0PAOoEI1GExvaTX8J2dNqrRCpXIEubjLmf8ERYRAYjytKM%2BCLiIoO7%2BtlpWB24qpzzxCkQpKSdcXeiwew0cn9S82Bkv20ZNy7tFr9flv7dMHx8hz1y4R0Ib%2Bp8IN9S%2FeOXOmsL&X-Amz-Signature=a9eea46df01110071f443c14948b4c6127e84abb02742a31f0fd2450e53bad31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM676CXY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJ47Im1%2FnNrmgifPy53oI4c6mB%2FyJaV0PwvLtN2NmnfAiBXXV%2FacHDxhck68qKGFySz%2FqX65NgFai2kmTYzSniQ2yqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6GxdBwYXGan%2B%2BaB4KtwDvnLfihEFznvgMb3vZUMUF5s4lkJh50PCGlsBtuUcsxnvvnjbEDJE4ygkWr3eacjHym6BzwykIMODD5vhQNtx1H%2BILU9XgLdfglfDrUJNIPicgpctZBikdmQoIT%2F4OCUhb%2BQj6LaWWhE621PR40a%2FiorQIEBx9ly7%2BzPaGIB0%2Bhv3Jk%2BIxpC3AnuxTkabb26sSlis59SCBTFkmt8gRZY1s8eNaiGnH0KtthuuxIPvBp4vxoDGX8lyEDjvlpd%2FFKyj5fI9CIRafoEtEXlB%2Bks8SSa8NotYp31UItzMltc2Ibx0XuUXjVJkCmjes%2F%2BfiJap7D8R4KOozOsElLxQoOV9XenS9uwvQ%2B4HMp1fxX6LTIiEstaz3KUg1i%2BA4nO1QqItCzkvjhmQk0cjBVV4f%2BKOx32iFnz%2FXVgeo3qsvhpt521RxwLLwOprV4gP6rkiE9IjRr7cPZjlhpUTbZDN%2FooUW1hZ6vU4HSzqS%2BHbvDXOeCSPKhsnzsvGiAHyJVD25gQZoiaud0W3OcvOPgiG5DjArO5YRtPUWJOOGI0xmn%2FwW4FwBnIFV%2Bk3bd4GOESD4upPvwtgMvfH4GyNzFM34ut1qkel7lVyujYUT%2FRi%2FmzYgwl52cxaBuXXtBcn2QQwo6zmxAY6pgGSoITqY%2FnkD6ezyX7HMq%2B03dmKh2%2Bh%2BZQLeXOVPnE%2BhQl3Z4d9bo%2F3IQvm3%2BOQnHfnvAu%2BI7R3tjm4712Dgdv67W0PAOoEI1GExvaTX8J2dNqrRCpXIEubjLmf8ERYRAYjytKM%2BCLiIoO7%2BtlpWB24qpzzxCkQpKSdcXeiwew0cn9S82Bkv20ZNy7tFr9flv7dMHx8hz1y4R0Ib%2Bp8IN9S%2FeOXOmsL&X-Amz-Signature=ee8acb9537085216f9083371c36a1149aa6a5c1b23b2a0ab70a7059a0b2f2f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM676CXY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJ47Im1%2FnNrmgifPy53oI4c6mB%2FyJaV0PwvLtN2NmnfAiBXXV%2FacHDxhck68qKGFySz%2FqX65NgFai2kmTYzSniQ2yqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6GxdBwYXGan%2B%2BaB4KtwDvnLfihEFznvgMb3vZUMUF5s4lkJh50PCGlsBtuUcsxnvvnjbEDJE4ygkWr3eacjHym6BzwykIMODD5vhQNtx1H%2BILU9XgLdfglfDrUJNIPicgpctZBikdmQoIT%2F4OCUhb%2BQj6LaWWhE621PR40a%2FiorQIEBx9ly7%2BzPaGIB0%2Bhv3Jk%2BIxpC3AnuxTkabb26sSlis59SCBTFkmt8gRZY1s8eNaiGnH0KtthuuxIPvBp4vxoDGX8lyEDjvlpd%2FFKyj5fI9CIRafoEtEXlB%2Bks8SSa8NotYp31UItzMltc2Ibx0XuUXjVJkCmjes%2F%2BfiJap7D8R4KOozOsElLxQoOV9XenS9uwvQ%2B4HMp1fxX6LTIiEstaz3KUg1i%2BA4nO1QqItCzkvjhmQk0cjBVV4f%2BKOx32iFnz%2FXVgeo3qsvhpt521RxwLLwOprV4gP6rkiE9IjRr7cPZjlhpUTbZDN%2FooUW1hZ6vU4HSzqS%2BHbvDXOeCSPKhsnzsvGiAHyJVD25gQZoiaud0W3OcvOPgiG5DjArO5YRtPUWJOOGI0xmn%2FwW4FwBnIFV%2Bk3bd4GOESD4upPvwtgMvfH4GyNzFM34ut1qkel7lVyujYUT%2FRi%2FmzYgwl52cxaBuXXtBcn2QQwo6zmxAY6pgGSoITqY%2FnkD6ezyX7HMq%2B03dmKh2%2Bh%2BZQLeXOVPnE%2BhQl3Z4d9bo%2F3IQvm3%2BOQnHfnvAu%2BI7R3tjm4712Dgdv67W0PAOoEI1GExvaTX8J2dNqrRCpXIEubjLmf8ERYRAYjytKM%2BCLiIoO7%2BtlpWB24qpzzxCkQpKSdcXeiwew0cn9S82Bkv20ZNy7tFr9flv7dMHx8hz1y4R0Ib%2Bp8IN9S%2FeOXOmsL&X-Amz-Signature=82052cb37df796ebe233bf6cfadcfe0870443c82376a808ea8c81c03f9d3035b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM676CXY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJ47Im1%2FnNrmgifPy53oI4c6mB%2FyJaV0PwvLtN2NmnfAiBXXV%2FacHDxhck68qKGFySz%2FqX65NgFai2kmTYzSniQ2yqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6GxdBwYXGan%2B%2BaB4KtwDvnLfihEFznvgMb3vZUMUF5s4lkJh50PCGlsBtuUcsxnvvnjbEDJE4ygkWr3eacjHym6BzwykIMODD5vhQNtx1H%2BILU9XgLdfglfDrUJNIPicgpctZBikdmQoIT%2F4OCUhb%2BQj6LaWWhE621PR40a%2FiorQIEBx9ly7%2BzPaGIB0%2Bhv3Jk%2BIxpC3AnuxTkabb26sSlis59SCBTFkmt8gRZY1s8eNaiGnH0KtthuuxIPvBp4vxoDGX8lyEDjvlpd%2FFKyj5fI9CIRafoEtEXlB%2Bks8SSa8NotYp31UItzMltc2Ibx0XuUXjVJkCmjes%2F%2BfiJap7D8R4KOozOsElLxQoOV9XenS9uwvQ%2B4HMp1fxX6LTIiEstaz3KUg1i%2BA4nO1QqItCzkvjhmQk0cjBVV4f%2BKOx32iFnz%2FXVgeo3qsvhpt521RxwLLwOprV4gP6rkiE9IjRr7cPZjlhpUTbZDN%2FooUW1hZ6vU4HSzqS%2BHbvDXOeCSPKhsnzsvGiAHyJVD25gQZoiaud0W3OcvOPgiG5DjArO5YRtPUWJOOGI0xmn%2FwW4FwBnIFV%2Bk3bd4GOESD4upPvwtgMvfH4GyNzFM34ut1qkel7lVyujYUT%2FRi%2FmzYgwl52cxaBuXXtBcn2QQwo6zmxAY6pgGSoITqY%2FnkD6ezyX7HMq%2B03dmKh2%2Bh%2BZQLeXOVPnE%2BhQl3Z4d9bo%2F3IQvm3%2BOQnHfnvAu%2BI7R3tjm4712Dgdv67W0PAOoEI1GExvaTX8J2dNqrRCpXIEubjLmf8ERYRAYjytKM%2BCLiIoO7%2BtlpWB24qpzzxCkQpKSdcXeiwew0cn9S82Bkv20ZNy7tFr9flv7dMHx8hz1y4R0Ib%2Bp8IN9S%2FeOXOmsL&X-Amz-Signature=b1b30c3afa0f1db471dd800520e1693bd9685220aa5b959a49a8cea391274ca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM676CXY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJ47Im1%2FnNrmgifPy53oI4c6mB%2FyJaV0PwvLtN2NmnfAiBXXV%2FacHDxhck68qKGFySz%2FqX65NgFai2kmTYzSniQ2yqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6GxdBwYXGan%2B%2BaB4KtwDvnLfihEFznvgMb3vZUMUF5s4lkJh50PCGlsBtuUcsxnvvnjbEDJE4ygkWr3eacjHym6BzwykIMODD5vhQNtx1H%2BILU9XgLdfglfDrUJNIPicgpctZBikdmQoIT%2F4OCUhb%2BQj6LaWWhE621PR40a%2FiorQIEBx9ly7%2BzPaGIB0%2Bhv3Jk%2BIxpC3AnuxTkabb26sSlis59SCBTFkmt8gRZY1s8eNaiGnH0KtthuuxIPvBp4vxoDGX8lyEDjvlpd%2FFKyj5fI9CIRafoEtEXlB%2Bks8SSa8NotYp31UItzMltc2Ibx0XuUXjVJkCmjes%2F%2BfiJap7D8R4KOozOsElLxQoOV9XenS9uwvQ%2B4HMp1fxX6LTIiEstaz3KUg1i%2BA4nO1QqItCzkvjhmQk0cjBVV4f%2BKOx32iFnz%2FXVgeo3qsvhpt521RxwLLwOprV4gP6rkiE9IjRr7cPZjlhpUTbZDN%2FooUW1hZ6vU4HSzqS%2BHbvDXOeCSPKhsnzsvGiAHyJVD25gQZoiaud0W3OcvOPgiG5DjArO5YRtPUWJOOGI0xmn%2FwW4FwBnIFV%2Bk3bd4GOESD4upPvwtgMvfH4GyNzFM34ut1qkel7lVyujYUT%2FRi%2FmzYgwl52cxaBuXXtBcn2QQwo6zmxAY6pgGSoITqY%2FnkD6ezyX7HMq%2B03dmKh2%2Bh%2BZQLeXOVPnE%2BhQl3Z4d9bo%2F3IQvm3%2BOQnHfnvAu%2BI7R3tjm4712Dgdv67W0PAOoEI1GExvaTX8J2dNqrRCpXIEubjLmf8ERYRAYjytKM%2BCLiIoO7%2BtlpWB24qpzzxCkQpKSdcXeiwew0cn9S82Bkv20ZNy7tFr9flv7dMHx8hz1y4R0Ib%2Bp8IN9S%2FeOXOmsL&X-Amz-Signature=ddd7e650757938fa133e782ec38fc3c83c4296f49f517abfe497af79aa23510c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM676CXY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJ47Im1%2FnNrmgifPy53oI4c6mB%2FyJaV0PwvLtN2NmnfAiBXXV%2FacHDxhck68qKGFySz%2FqX65NgFai2kmTYzSniQ2yqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6GxdBwYXGan%2B%2BaB4KtwDvnLfihEFznvgMb3vZUMUF5s4lkJh50PCGlsBtuUcsxnvvnjbEDJE4ygkWr3eacjHym6BzwykIMODD5vhQNtx1H%2BILU9XgLdfglfDrUJNIPicgpctZBikdmQoIT%2F4OCUhb%2BQj6LaWWhE621PR40a%2FiorQIEBx9ly7%2BzPaGIB0%2Bhv3Jk%2BIxpC3AnuxTkabb26sSlis59SCBTFkmt8gRZY1s8eNaiGnH0KtthuuxIPvBp4vxoDGX8lyEDjvlpd%2FFKyj5fI9CIRafoEtEXlB%2Bks8SSa8NotYp31UItzMltc2Ibx0XuUXjVJkCmjes%2F%2BfiJap7D8R4KOozOsElLxQoOV9XenS9uwvQ%2B4HMp1fxX6LTIiEstaz3KUg1i%2BA4nO1QqItCzkvjhmQk0cjBVV4f%2BKOx32iFnz%2FXVgeo3qsvhpt521RxwLLwOprV4gP6rkiE9IjRr7cPZjlhpUTbZDN%2FooUW1hZ6vU4HSzqS%2BHbvDXOeCSPKhsnzsvGiAHyJVD25gQZoiaud0W3OcvOPgiG5DjArO5YRtPUWJOOGI0xmn%2FwW4FwBnIFV%2Bk3bd4GOESD4upPvwtgMvfH4GyNzFM34ut1qkel7lVyujYUT%2FRi%2FmzYgwl52cxaBuXXtBcn2QQwo6zmxAY6pgGSoITqY%2FnkD6ezyX7HMq%2B03dmKh2%2Bh%2BZQLeXOVPnE%2BhQl3Z4d9bo%2F3IQvm3%2BOQnHfnvAu%2BI7R3tjm4712Dgdv67W0PAOoEI1GExvaTX8J2dNqrRCpXIEubjLmf8ERYRAYjytKM%2BCLiIoO7%2BtlpWB24qpzzxCkQpKSdcXeiwew0cn9S82Bkv20ZNy7tFr9flv7dMHx8hz1y4R0Ib%2Bp8IN9S%2FeOXOmsL&X-Amz-Signature=2176d4e035026ad7e5918a49d33fdc76547369c51f103ad225bb78bea073df08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZK3LMSH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYt5F%2FdCf2ir0NzJah41tyjlWdLUGlOhCy5xzlPi6uGAiEA2p%2BgbK%2BfWMPK5%2FyJD2%2Fln0WAaAGLPw%2FCPhoYnh%2F3foMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLloM7GxFuLix3O2OyrcA3SdlUQz2ToydGV5Bk31TqG2THuHm1gyLYWeoL4az2kBePoOTNRKLy9E4j6BL%2FNIAEbVAPVWCZw%2BFVAy9l%2FkJ1KauVhDXwUJxndQz63PHecaD7rjWxwUMo8mbYkHbZxSIPUC3lOGIiq5PZs5FgZmcTGdVABAx5up2d8A71afs7OXR%2B%2FN2QZXDVBHVXUybN3DKfHIZBBvmboupPGY6t7ry5TAobaDxDFcgj6c%2FqOkxXu%2FU67QCGc6SZ3NuycqXQ%2B4PSmhjOVMWZMJGM85azdlP%2BCMIlRL2qsqBbEGrsLojabDckk2OtFYBC%2B%2BzGpZg9xEZaUKbsa1xxv2alVRgP1ofa098VkjyMJGZySwQuwlJ%2FR6babyHXdeH%2BqqiWWF7qKa9RXnltGkHLggk4wxzojCfXJH8X6VjBm0z61iBBoUDMgxe%2FzykZWx5RmPZER%2F%2FLsORBR2JEXtRwsTdxqiBh7hQOnEyvIyv%2Fgt%2Bh5Pxzg7a8KRCksoIyg7DnKZQFYdBoYArD5SufowLxz9FCUtGtRpnpgcu%2FYbSmtkXQCkFzhlN0w7PBqlAunqYoTOimC2jmS1h1lGHqtGxuJYYMdXMgXbnvZz2zOEok6W9pk1m46UsFeaWvr5n89F236qdBpqMIer5sQGOqUBgwIcKjvdG32qfdikBe53X%2Bf%2F%2FxeWz163It%2BtJaOLoDaHu3YCBPldLes2ZH2zp00f4pRwvkmaoZ9zikvH%2BM6PzT%2F3D7vY%2FG%2FaokJidMtbFs3TW6TE3oYoqjR0D4aQ%2FuTloL5VPMP3IlJOFm1aochdjWaKIiyutJL0GDU5lnrVou9x92DrPXKoym063opXz%2FRuuw%2B0YKv5DM1P%2B4rGfi4P6Gb7kPfK&X-Amz-Signature=30da2407748b6b2f9dd4ecee2400b9f0385b5cc9fdb3e00ee39209819a5587bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQCZM2SU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh2aqomeR2PeW9M%2FDt3Kz2CwF2JAslKdh9HuYaDZ1LIAIga1Sv4IMtdpu%2FopUPqLTLKOlJqqBt3Jd%2B4A9ah5uPcEsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFyLF4N7WbJw01ZsCrcA4w7KeC%2BTSXvNI7RN2W3RmrSfWOvQBb8FvSyxuCZ8gfbuKFS0N8bfoZ3Cdh%2F5m7xMxrpmfJGhEN0ECM9UTN6t34JWA7J4RFNCFCJAhANhtYPolusbMxefJ1e7mIYIKIeQbm2LcAMKqSLiNnZBwFEfTBhhUz5%2Bczcs38O8MnEbkxHCwoPYIUaPLrbe8d8tb316BvdbnuO8ra8HHw8u69fqoDM7Kp2Ts%2BtDd8zIMtuJ%2Bs%2FMydfD4eff%2BG6a1mygZshcP%2FYed1JxI44jrTraicdUb9EhW0K7u75Q86leSG1BjHfh2a1PdHcZrp0PF6Abz2P974pMjqNLmrIewtvqDHNfaVWTluZ4a7sMdTUZtf%2FslenQtOOTTdwz9M93Hk2S%2BPXb8ujq8%2BOlXJfD6u956kr%2FXeyjslAjA10eKWDuusS3aAxo65Iq8crVDBoMkqdV0ISR1ptOxBiWP%2BuhXAlqYvJ0moKOYg%2FlXniD4spEKijyJAKDSFyBVWZ%2BgwiHoP%2Fp1LM2vgSEyFVlDVJ83Y96JpgG1iSBaM6J3BfgW7HDxSal6pZF3ST2ZyiUxIM7Zr8yOipidGNIx%2Fr7CJqf%2FxbhnQSrZlIiE9JaT4V9Wq9v%2FzJsM%2BTlT%2BAyTWqYI1ZHFG4MLCt5sQGOqUBIDziFx6yIIMYV6HKfpqwlEKu4JxH9%2Ft7LcFYp5mzauVLsPccK1MgLpI7IHvwZ5PdW9zeyrjRdWB2r77DiJFcBLnEZTIfL9DvKHzBNbxHlZb6qRILGBCnHNBplHucDR4vTvAs9uuRnajSLztlhCyyj0dFrzojCN%2FTOWRo9ErH%2FSpwZKovafdqOLx1VpDmM1CMQZsgDiEt9Pq0f7WnWVVrKRtGTFOg&X-Amz-Signature=01649e81e2726aed34a5836d00d8ea11ca171098f02542dadd9800668622b532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PIESVAN%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjOb0YpoXIaW2qDD5z3Ior8OoUb3hklrCPrh22%2F9Ob2AiA05ZXAOyIdH7H4I1clJ5K0f57OMsjA4bGYh1BKY8p5oyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI7RHadMNyrKwy5asKtwDQLJNC4DeYnspEVdGX9YFKNiiKHfzhp%2Bn5LxwXx6E9Lx%2BtapsM5m9L%2Bq4d0zFLXmDjSqSYNjUHacXlu0ewD62QIhGFJUHohCsb3it0LoE2LwmLs0D0tczoXECxiQvZcX44TGrnx57WCUqDmGlLgpuvDro5lf2ornyAfvEQgoMulF%2BrZEUwxTHycg46atlZtTl2eajPWS86rvMKWzV2O9Dzu30eeSYjo959bkNgx1ZPZe5SnDcSJfgVZyB8vfouQSVXPTqUpRmo7Qp5EAHbcfy%2B5SZiXrJKYi0FrqhCcatMRHTSOti9f8YvSsy4G9ke1RHqVXoSIEcAywgYh01qKaJvYjt6IUfSzi%2B1cnXBDz4FMiTlg%2BSbR%2FjtKQd514DbQsM3YnX9YR00%2FnSjTbe7rmoeb65J0BcLShL3zxwJmf%2BI2M6g6C%2B4ivR%2FhshZPTtrCHwxp8huOLnRC8jah0S%2Fl0ZSw7cd7NP3IlFeAkxMnCVRBz2NIR98lS1Tsvpx4Edvp1CI75VRzV4zCmKoeNBoNpe9UKx0LCA4xBMFr1AYiH%2FD9zwU5GEVlbqFF2xsNqCP06Kmt8c3bxDsLBYvz9TZxrAUoUg8OaI%2FsYmgkukCZH5GpzrXmiXN6E%2B1Do8RGgw46vmxAY6pgHUIyIKz1blZxpiPC83hvI4ArCjKuVzjUDQ6%2FkQzsBYEdPYJi32N%2BZ2xFXTf%2Fv1BSjy%2FIt1IfJELtcXKWUz%2BbDlXtGhpN3l6ASkJU7XYj1pchvwu7Zq65P5EkS8ht22XCJNoIyM%2B88SxtGa8ySzFAa4NkV8s9QA9THoCknvtRzTNkWKMHk7ukebtIsyMkSUn4rUDRABSYup8UFG8wa41Ewl2kseo6D1&X-Amz-Signature=f2b2312c519750127d65f67e17ee522f764978cf81c4a8d8332dcf35cbbe1958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM676CXY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJ47Im1%2FnNrmgifPy53oI4c6mB%2FyJaV0PwvLtN2NmnfAiBXXV%2FacHDxhck68qKGFySz%2FqX65NgFai2kmTYzSniQ2yqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6GxdBwYXGan%2B%2BaB4KtwDvnLfihEFznvgMb3vZUMUF5s4lkJh50PCGlsBtuUcsxnvvnjbEDJE4ygkWr3eacjHym6BzwykIMODD5vhQNtx1H%2BILU9XgLdfglfDrUJNIPicgpctZBikdmQoIT%2F4OCUhb%2BQj6LaWWhE621PR40a%2FiorQIEBx9ly7%2BzPaGIB0%2Bhv3Jk%2BIxpC3AnuxTkabb26sSlis59SCBTFkmt8gRZY1s8eNaiGnH0KtthuuxIPvBp4vxoDGX8lyEDjvlpd%2FFKyj5fI9CIRafoEtEXlB%2Bks8SSa8NotYp31UItzMltc2Ibx0XuUXjVJkCmjes%2F%2BfiJap7D8R4KOozOsElLxQoOV9XenS9uwvQ%2B4HMp1fxX6LTIiEstaz3KUg1i%2BA4nO1QqItCzkvjhmQk0cjBVV4f%2BKOx32iFnz%2FXVgeo3qsvhpt521RxwLLwOprV4gP6rkiE9IjRr7cPZjlhpUTbZDN%2FooUW1hZ6vU4HSzqS%2BHbvDXOeCSPKhsnzsvGiAHyJVD25gQZoiaud0W3OcvOPgiG5DjArO5YRtPUWJOOGI0xmn%2FwW4FwBnIFV%2Bk3bd4GOESD4upPvwtgMvfH4GyNzFM34ut1qkel7lVyujYUT%2FRi%2FmzYgwl52cxaBuXXtBcn2QQwo6zmxAY6pgGSoITqY%2FnkD6ezyX7HMq%2B03dmKh2%2Bh%2BZQLeXOVPnE%2BhQl3Z4d9bo%2F3IQvm3%2BOQnHfnvAu%2BI7R3tjm4712Dgdv67W0PAOoEI1GExvaTX8J2dNqrRCpXIEubjLmf8ERYRAYjytKM%2BCLiIoO7%2BtlpWB24qpzzxCkQpKSdcXeiwew0cn9S82Bkv20ZNy7tFr9flv7dMHx8hz1y4R0Ib%2Bp8IN9S%2FeOXOmsL&X-Amz-Signature=cffc2593d1d3dd29b4dd0523e249d620df8f5863dbf37eb15fef2d5f998c4745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LETYIOO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDT%2FWm7Ey7Zk7HYgZd4V8uK5wQ%2BzFrb%2FeWB0B9hHN63JgIgBu8odJ4q12LkBZb%2BdCeFR7Bsw9WM4STKX8ysN41OHewqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxCAOo9HL1Vs2KT3yrcAx0MO3Yj19ewgDYK52bAWulzkHORtysifpzXphk8E8za3hQ2WkcNZq1pu49ngSEPsuQAF7st7YrZ29JpqXusZ2AMXsfRS2U4qGPJ1aPVBoiTaQa56WcyKryH2U1pqolSvux55XlVqFrpzPgELW%2FK4WkdhN6WC5EtMNMXtnGYSBzLX0ZPHUaMJa2xqE9DKjy6b%2FN%2BrxMQMK7KiwwWgAExWUllTmEVW543EqURVY8Td8Q3DrNYmYXzyoZjuj8JCpr5S2f3eAKpyC63J58vWggyEUzVuM7LKaxmTEWhjqtuBg3TxzXeqOlTRdOzvjdadAIee66ydU05N3QRNO6khtlqxxORMGWtcA86zIYfIHN1TYusjAxCf59OrMP9yaXNktQjNL7QZ5VwyKAC4X2agY9dGl1JQMzihkveeI8pB8CeOziizWJpeeNouIGsK5gfilEV%2Bb040IilZXA3gNUM%2F2XX6tqvx3lLJUcWT4XRUedZoNv9DKiRvTcx3vCL4n9sZTzSRcCbVCmO9v6U1xF88%2BnJEOTKW1ZQNaUPRRg9O65YjcTUBWaf4r2W9TJ7%2BqAX2IxgUSRZmV7Q%2Bw%2FtGvpccHL5QTWt5Rvofjpq4RLok8yEjOWYDh%2BAKiOvejrOD00xMIer5sQGOqUB8drEsAskgoNVxPemd29YCEbGt7wSssyxrJ8VHiBXnsTXddh1VmJBrCmiIrO3DYzKaPPPyWVOD5yVCqNeoMju1qlOG8IodjsZ%2FSIhIMBxP8TtK6G5tppyoWJUSKBURV%2BbVaJ%2BK8L25uZThZeFR1H3H4TSQVQEt%2BsexJwqyeKfuxjj%2FGSnbde0oKhn7r49eVLefpdfeA6%2FYTBHnJRil%2FUbcDnMjZTf&X-Amz-Signature=9b943dd358ddf6ccdf7b5971b60f197ffaf61137edee2866f9e452ae7346e5f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM676CXY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJ47Im1%2FnNrmgifPy53oI4c6mB%2FyJaV0PwvLtN2NmnfAiBXXV%2FacHDxhck68qKGFySz%2FqX65NgFai2kmTYzSniQ2yqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6GxdBwYXGan%2B%2BaB4KtwDvnLfihEFznvgMb3vZUMUF5s4lkJh50PCGlsBtuUcsxnvvnjbEDJE4ygkWr3eacjHym6BzwykIMODD5vhQNtx1H%2BILU9XgLdfglfDrUJNIPicgpctZBikdmQoIT%2F4OCUhb%2BQj6LaWWhE621PR40a%2FiorQIEBx9ly7%2BzPaGIB0%2Bhv3Jk%2BIxpC3AnuxTkabb26sSlis59SCBTFkmt8gRZY1s8eNaiGnH0KtthuuxIPvBp4vxoDGX8lyEDjvlpd%2FFKyj5fI9CIRafoEtEXlB%2Bks8SSa8NotYp31UItzMltc2Ibx0XuUXjVJkCmjes%2F%2BfiJap7D8R4KOozOsElLxQoOV9XenS9uwvQ%2B4HMp1fxX6LTIiEstaz3KUg1i%2BA4nO1QqItCzkvjhmQk0cjBVV4f%2BKOx32iFnz%2FXVgeo3qsvhpt521RxwLLwOprV4gP6rkiE9IjRr7cPZjlhpUTbZDN%2FooUW1hZ6vU4HSzqS%2BHbvDXOeCSPKhsnzsvGiAHyJVD25gQZoiaud0W3OcvOPgiG5DjArO5YRtPUWJOOGI0xmn%2FwW4FwBnIFV%2Bk3bd4GOESD4upPvwtgMvfH4GyNzFM34ut1qkel7lVyujYUT%2FRi%2FmzYgwl52cxaBuXXtBcn2QQwo6zmxAY6pgGSoITqY%2FnkD6ezyX7HMq%2B03dmKh2%2Bh%2BZQLeXOVPnE%2BhQl3Z4d9bo%2F3IQvm3%2BOQnHfnvAu%2BI7R3tjm4712Dgdv67W0PAOoEI1GExvaTX8J2dNqrRCpXIEubjLmf8ERYRAYjytKM%2BCLiIoO7%2BtlpWB24qpzzxCkQpKSdcXeiwew0cn9S82Bkv20ZNy7tFr9flv7dMHx8hz1y4R0Ib%2Bp8IN9S%2FeOXOmsL&X-Amz-Signature=7b5abc5a443322f59a9fce3590a53b4b333ceebf1edfc4d5ad424408ddf1f704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVC3F6RG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYZEg4hl8RlPD3qHX2702c9YesfxsCzWGw3d0tkuOCgAIgNVs%2B3kJoepr7wLYjDpEfn7wvZ6U7beU2S0%2FGEEEprmEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNflZEkFHru5Upb%2BircA4%2Bl4QfcuS7r%2FWIzbVR2jTWNGEJvjBv6TEK9q%2ByzMHF1lffajXDbOVo9LjLk1cvbivCx6kCPetWOaim7N4rJDWdTXpLzicOF%2FSzJfe69WerPX5jGizL4Knz4ILhh6pZZBmbBGYw51KfIfUXxol7nad%2BwQ2SpaPRLLHQ9lwhPsjYFk%2BT1Z5D1kPI%2FKf1jeTRQWip2Nxh0p9wPOczEDUrlaUMEnlQU55qVpbVFH8qULsfcS12t24QX6pHFTcAhccFzny9CgtfyMX508nl3qZ9fxYvYqxXOPxoDS0S3e0JVofgvcJ4F3335nXDIUSAEaPvAR7uGQLNFnIghKkZ4U%2FeSrNn%2FWdnshHxyfpe17LA2qDYDuyRdvj8jpqCKhHSsphHpHEf8iOv21juPRA0JGZmZfr870krRhKIb2zMOX1yBP1YNdo8rCQslAggLr3pYQZucTOMkvuVPJlO8A9H1rrBAZZ6%2BMYLLH9bb7pHeGCAREfI4%2Ftyu3Cmv0DHdGUWZucY0tfoVuW9UFapOu62g9HT944CNm%2BiSq21snB1a%2Fg%2BRSRJ%2B%2FVG2CLyD5Am2eNHBRCix6X5r53Jr0TyS2qsYOVB6Bp0glyKxEk90SJUST1WblHR6mWqhTy9gNm%2B6KWlPML2r5sQGOqUB0Y%2FvVgPBuac2U%2BFCUf0ydaCslrXWflD68w%2FyEpRs53aaH9VNhK24bKWaxiL3G2cjQhK1w3THc%2BZJxir0U11My4HDWXbyID0ZVDP8eYEfwLVUNYKShycTzysULYWu1%2BWiqot6WvEzjVocya5mLufN%2BWSz8nrmQParBJVeBioGs%2FxIKCJwSBJUI8XeuumMM0aKtQeHxTw3HJ%2FOErAt%2FHBK3MGyW80J&X-Amz-Signature=6d8583caf603ca0e285a25ebba8f6cb7043087c2b0682e1ad2ab3436b829fd9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM676CXY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJ47Im1%2FnNrmgifPy53oI4c6mB%2FyJaV0PwvLtN2NmnfAiBXXV%2FacHDxhck68qKGFySz%2FqX65NgFai2kmTYzSniQ2yqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6GxdBwYXGan%2B%2BaB4KtwDvnLfihEFznvgMb3vZUMUF5s4lkJh50PCGlsBtuUcsxnvvnjbEDJE4ygkWr3eacjHym6BzwykIMODD5vhQNtx1H%2BILU9XgLdfglfDrUJNIPicgpctZBikdmQoIT%2F4OCUhb%2BQj6LaWWhE621PR40a%2FiorQIEBx9ly7%2BzPaGIB0%2Bhv3Jk%2BIxpC3AnuxTkabb26sSlis59SCBTFkmt8gRZY1s8eNaiGnH0KtthuuxIPvBp4vxoDGX8lyEDjvlpd%2FFKyj5fI9CIRafoEtEXlB%2Bks8SSa8NotYp31UItzMltc2Ibx0XuUXjVJkCmjes%2F%2BfiJap7D8R4KOozOsElLxQoOV9XenS9uwvQ%2B4HMp1fxX6LTIiEstaz3KUg1i%2BA4nO1QqItCzkvjhmQk0cjBVV4f%2BKOx32iFnz%2FXVgeo3qsvhpt521RxwLLwOprV4gP6rkiE9IjRr7cPZjlhpUTbZDN%2FooUW1hZ6vU4HSzqS%2BHbvDXOeCSPKhsnzsvGiAHyJVD25gQZoiaud0W3OcvOPgiG5DjArO5YRtPUWJOOGI0xmn%2FwW4FwBnIFV%2Bk3bd4GOESD4upPvwtgMvfH4GyNzFM34ut1qkel7lVyujYUT%2FRi%2FmzYgwl52cxaBuXXtBcn2QQwo6zmxAY6pgGSoITqY%2FnkD6ezyX7HMq%2B03dmKh2%2Bh%2BZQLeXOVPnE%2BhQl3Z4d9bo%2F3IQvm3%2BOQnHfnvAu%2BI7R3tjm4712Dgdv67W0PAOoEI1GExvaTX8J2dNqrRCpXIEubjLmf8ERYRAYjytKM%2BCLiIoO7%2BtlpWB24qpzzxCkQpKSdcXeiwew0cn9S82Bkv20ZNy7tFr9flv7dMHx8hz1y4R0Ib%2Bp8IN9S%2FeOXOmsL&X-Amz-Signature=3126a624e37cef4fc8a6cb2fad7524a25807fa92ddceded744b6c3282dda38c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7YDZUUF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmiL9caYxXZunMuPuc463MhqPTluuKYmEm5d%2F3RrBN0AiBeSptfPCQrNBS%2BBdtAXrc7qCjqsXDMN7yNPNdpsIwC3iqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F0WnW7nObworbY9oKtwDS0Qi2iCCIcl%2FdWuOgGYyF%2BIMZRp9HcOH8GSNAYZjvpzCIS6vpdGNqQk9JgTXqfb9fLB0M0j2MY8zje2CUi%2FUviGIu5rillsY%2Frjjna4oRcdF27KSo9R7rtsL8VSYLxrIs7kqjeR5EsTRIfhZ14%2BoETL%2B1fTBXEiU709gFjRvpkOTTycCeKjv1rgBx6p8TyUrm5SyytQoXdwbbXv2Ua%2FZpqFuYIUW49BIcPmsYPN%2BZK25K0Cgva5zzgGJlowSH0EkiaucBrtMz3Ny5fdu6bF6dh2Rv3xylrJi0bVfksTxg5TfyofLn1gC7NghjjOICoDSxaPMjsnTCobjx5E4RQqJzYDomvCEXMBPQWr2Jpe17FjeQX%2Fc0vASCkCoMMN6DoBBQjcJl1DfUFNb1u71jkOd6UQPZM3%2FVSbibx%2BaHib%2FfCrxqiuvCU0eGNUVpTmKzvvH9wX9A9%2BENE1jhoTqAqNmsxZJxbmyL0I1v4e9TUxkzZTncccN79a87YP9FO8ban4hXyB2DCSm2b86uddj2kTI1ZkDkaYzH9sHWyUY%2BoVgIwXke4jQPcljNCORipy4gmgPn7zPk7HZCZy5YY%2F8TWafRcnHUAVF%2BjLBbEPJgRDpNUl9wVV5%2BJUzJ2qm93sw%2FavmxAY6pgGKS8ACQuGbxsR88MU2bB8Un9yV8dVz75%2Bfntjs8%2BRpyFkBxXxWMscPkePImwp9xGey1kTVJl%2FT1rD%2FhGSfvq7Vx7YGZLJ3pudnCon4imxZv9GuypRzLuljHVGggYkm%2BcKBe9C4%2Fl6yDxHSu4uiexB1rxcRelDjbmYvER2K9deWnX90fq7vZ42B3J0yDP8V67Fui6I%2FVbi20OBuR1%2BB3nWK5jen7khx&X-Amz-Signature=22006e39b10a539cd4c879d0c6570ad5f8fd3394a210bfd4d8b5a6e17a1bda6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM676CXY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJ47Im1%2FnNrmgifPy53oI4c6mB%2FyJaV0PwvLtN2NmnfAiBXXV%2FacHDxhck68qKGFySz%2FqX65NgFai2kmTYzSniQ2yqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6GxdBwYXGan%2B%2BaB4KtwDvnLfihEFznvgMb3vZUMUF5s4lkJh50PCGlsBtuUcsxnvvnjbEDJE4ygkWr3eacjHym6BzwykIMODD5vhQNtx1H%2BILU9XgLdfglfDrUJNIPicgpctZBikdmQoIT%2F4OCUhb%2BQj6LaWWhE621PR40a%2FiorQIEBx9ly7%2BzPaGIB0%2Bhv3Jk%2BIxpC3AnuxTkabb26sSlis59SCBTFkmt8gRZY1s8eNaiGnH0KtthuuxIPvBp4vxoDGX8lyEDjvlpd%2FFKyj5fI9CIRafoEtEXlB%2Bks8SSa8NotYp31UItzMltc2Ibx0XuUXjVJkCmjes%2F%2BfiJap7D8R4KOozOsElLxQoOV9XenS9uwvQ%2B4HMp1fxX6LTIiEstaz3KUg1i%2BA4nO1QqItCzkvjhmQk0cjBVV4f%2BKOx32iFnz%2FXVgeo3qsvhpt521RxwLLwOprV4gP6rkiE9IjRr7cPZjlhpUTbZDN%2FooUW1hZ6vU4HSzqS%2BHbvDXOeCSPKhsnzsvGiAHyJVD25gQZoiaud0W3OcvOPgiG5DjArO5YRtPUWJOOGI0xmn%2FwW4FwBnIFV%2Bk3bd4GOESD4upPvwtgMvfH4GyNzFM34ut1qkel7lVyujYUT%2FRi%2FmzYgwl52cxaBuXXtBcn2QQwo6zmxAY6pgGSoITqY%2FnkD6ezyX7HMq%2B03dmKh2%2Bh%2BZQLeXOVPnE%2BhQl3Z4d9bo%2F3IQvm3%2BOQnHfnvAu%2BI7R3tjm4712Dgdv67W0PAOoEI1GExvaTX8J2dNqrRCpXIEubjLmf8ERYRAYjytKM%2BCLiIoO7%2BtlpWB24qpzzxCkQpKSdcXeiwew0cn9S82Bkv20ZNy7tFr9flv7dMHx8hz1y4R0Ib%2Bp8IN9S%2FeOXOmsL&X-Amz-Signature=0a8c7fd496bd1b760ae61d31b74814744f6e9cc77c4dde7088c762f44805fc40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCJ56MTR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFae8NGKMqSut9LmiXJsaDsFA9AEZV%2F43PXMCN%2FbbfOMAiEA4jeqOo%2FFVXx%2B8bLkyh%2FoCm5yxMdoNmL5PFQTl2pQlLYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNcUVspj9R0b7WSTCrcAwKC3h%2BONITCSJIp5ZvB3JiHXlrr7HiipIzPzGb3ioCyaaA2yonYeH1LFlaS4CjRyWuATbAj%2F9jLN2KPg7h0z724AsQBJhrCbslQaAV2ht%2BIphRgb%2Fr1AlOYKrgUH7t8liNNBglAPw41sRKNmvZgo1SZjlbHVQWgj%2FRf3j%2BNBvkvk4yzlyDwibVb%2F7lZ1RF0xN7SoySdWa%2FkvXSPUPHKvfRkdif0eaUmeXbtGuO4iunxrjphHkmr5HAx2BFCZ9IY0Izu61ReXeYNK2Num3t55WAnDknxhJ4GOIrc532V1yrdb%2FRvi60%2BnqpRXPVbX7ejDlmX449MkePcyCjKaguX%2BoRaiXPkkYJEiDG8dCIrusINvVxEXTkyitCEL9TO7ylruKE%2FYWS%2BbqpsQZxFo8pe4jauTZLkIGOwiOsYTySZgDeb8HeQbc7D9Db746k9UcX%2F3eQPrw5HLTgMSmkoDRzZTzwTtATvSWaht8Yq5FawieRxKaVCXq7S5AgeXaCzzdDEl1MxqmM1EqnTMrlHwwCAoTQp2VzxtiE%2FLSO%2BcTAWg9GO82%2F1%2BNebXmw80Hpr4iv%2B6I6iFB8e%2FvcI3Pb6JId0GdOA0Zvv9H36SUbXe%2Fn5q53mvGb8ZwcHQdN5RLk8MMqs5sQGOqUBvJEI8GSH2gG13uwSYYkdImUDPXNKptYD4MzUdMpEJxa8OSk2QIpRZ5L2FuTb4iHUKVip%2FFCMWvKfiGptS3EW1CDWMG%2BjrVSqVmKEPFzJWAkKiMMr2XyZUem4AubRy4ugIbExjLC903tnLmV%2BAjVLQO2T3vJFZqO3ITXsfqszFAMfN7tMcerou4oFoQukpL2jbFxrU4xWlXfy%2BAwTCdfrLreFMp8A&X-Amz-Signature=76cbfcca3e61c261cf41126b213d12084b636053a1d21d5ebf6f3e9818cf06cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E43ORHB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9vUdcbI3qwnImYcFTt5HJ%2FqHC8FInFNvpg4n9LZVwkAiEAppts1uYi%2FKoL2MupnfYS974FlE1blob1fqmU0O2xPwkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FHmu8zD9o00DVH%2BircA8wmRjUpJcYF9v%2FfR1M0bsGpRtlbbpvkZmaDSV%2BTzt7me6Yz3G7R%2Brktimflc54a4Fe9JIpsyV%2Fyc6SPdRxhqOaEXq0bS0%2F%2B9atLH3itmQDN8y3QG%2FWaSnS%2Fk%2FBLEPnShRrs8I%2Fcgzifp2ImUFwydwToLbgjKR507N7a6LO6l5%2FgyWfJ5QPdZiH6cskVUFuGQuJMR2S3bKbjAaB4NnZrFVk8XwU1FRa9G6rdiRrq6oL9GyfCertjWjqDnNdhGpf4zdfEKVATEp8Ltcmdpjtd82054U8Aq%2BABCNrN9BbepWeLsYlMYbs91pgRHOub9Urr0HMqrZqUwVhtjFO7qhUnW2wrUOHNglz5RfaJq%2Br4FBaoq2WDVK4yMQXIxYoK1eHy6YFTOTRdDvUNBSR0uBuqpeWzzmDEJ%2BHtgMRxPLujc2c63BZDK7Zcw2HlCpSiGWVrgBnTkTTGRyn692VafkVb7SEBs3fJEt5PpJ1%2BxBzWjyT8Uhk4fzi3S%2BDdfbyhN4AHy58LGJy1Hz%2BleJLilrrlIJzpS1lsUckOxaL5UoNNSL4y%2BOMyZ%2BQHwlt4U985%2FEApo1GyJcZYT1peL22n7fwZ3Ji71vJNgKNm%2FoOkIUhDxOTUPEOKNyQFsAuaVczTMMir5sQGOqUBFHwdt%2BiGyrR5DBkMybhwRiotjSkjSYuvEjDe2ci%2BbTH0nlMlVqQTOLz33SZhyHWJtsoaVAg8byIbWWjjC6IphzieHJwXbIE08nUGuOMNNL5El482vTB8z3NDmuaMq2nzUPYiXGasWMEjgMSOujF0x9%2BWadfgpyaT%2Bhhomf2kVtb8lI5C2m4r03h1YL8BAVp4zJQ4JPvwZgbFM5e%2FO%2F7JF3mkPnOD&X-Amz-Signature=f58fb683e7e8af477a2de02077a5c1b53137d67e629f01b2bd59abfd406b6709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LIIK7SS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmMU%2BKp9r5mPsqF3nbeeTXk4PRC9Z%2FipAznBCgwSnShAiBb8iglLZfUJIdlfnzDKNuY3kptMi%2F3TT5XgQr2pMC3wyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Zgy4Lz%2BaqcOe1D4KtwDYatpDUGl6DC0%2F0%2FUR7WiaTSFVmpUydMTiBwgYm22oRNOA9UblIYtDnIaavRpLhLXuZeIm2Z0w1%2FeiejUwKRk31IRjM8Q5p%2BljIGAZ7dKM9Ns2tDblGUhmPeKs6TfWCCI5eSkw7uXrA5ZLNNcHCUKmysgwJXkR1loAkdIOVJvE4DRfyjIQnH1eMmNKQpNjX77lSdoa%2FD2NR%2BpdsphZtQdJGYW5RDwXtsQLQj9hwqOqanconfQ2DOlWahEeHWwE%2FyI1oUq1MZcjWv%2BsLYuW%2BCB9zLzKiPWGSSmxuIpe%2FTAF83QBkaFVsFUcSzk2coDXrYJo96k7aKpHMxu0Ml%2Fuw6R17QH5z1H8FLDqZRDRYsvjrBY%2F4TUcsKmQuqe0QAdqxQacdjo6RPf%2FTklalE7DxvgmQdyuALfxJuh81ULlBNdjPhqy5uxCvnlHB9LmlPsA9oghRpKRHuW2gHcok%2Bnd05uFXsSMbtKgLUjkbwSr%2FaSlp7xf396WLbUo9fHVETQWwO1OZUJcdQq2yi1uXpfMighCe3s5xpEx%2BDz8ndZ1qQ9bZxjOtTaWXtZic5fRSuoprP%2Fm0egvoJe816kf1AngkLMGy08dhYwVb%2BUxKgrAeA22ovHWTF5xit6IEaZSCIwv6vmxAY6pgFPq9l4TN1oHAWP4sH8SOyxNao7OCj2CrnczNh8a%2BNUUFctbsp0giEJQNolnizTNET%2FDi41ZUMVOd%2Bw31u2fsOWdaMf6uylMJCU0JCWTu39n9wmK6oHwKQabpMsYqavWyXMOKJ%2BNznd5Cks%2B8obPp3FDfQbRXznoqq31IJpjMkXLBpNiLOl6LJzSp0lPZsM7pfFyCkF1nYJPxjZ1siu4G5IBMrYCd7b&X-Amz-Signature=ed6eb8fae1f33ad0cb84f132224f4060e70984731a15a955d27babbf5c60e919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XYG6DHV%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYyTgCtra%2BK429IIyqAe44MZ4IN3nXNFBJ%2BRaPNot1mAiB8f4scOdjjAMbTyPHFdRBqEINvmUAJlrIMPMP19YOZPSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJd2%2FDxWjaeKA%2BvxfKtwDdwrndS8r0WdoXsUnZp%2Br%2BaJpNMee%2FFZS5OjCLSDLccHFWGN6VRwXM1y2ZVHvMeoi3s9nrUq1HrDVM%2FHDQE%2BBzFxYO0ArahQhweNa11o3fjxM7mhRc9CLwWag8atiEDWWVorGgtw%2FASt3ManOQY%2Fq2%2BCY9bfgTY4xx%2BUmdNFqL6wMwFAA1FzYwbfxXIpDClGo7SvRHk4oDgeT5eVC%2FkBmjtQPAKl%2BZpaOW8dN9M%2BR3aSE%2BcrXZarHvegdNO2S24WmSFv34ySnVRaVcbVbCnFKUE05cfqw1L%2Bn25OfASNCIL15bSGgJlPguVF2baRJiM6srsXF59hcZY3YyVCkNIpa5uv3zeF4qcU%2FkJJVPoqTFrPpScR8P9W%2FyDmXsLMewSSZzQ5MpFIdkoAxyqytsuGQJUHgwLg1JBBkhb4qWvZb1R5kTWMU6U%2FGGDxEwO4IO8mwjz8f3C9FoH208ECn50cEYIgDUA7ibBcO9PJ8TUnUzLTJvEE73psfL8SckJRAgFURos%2Bmm0QVmJEduAUzNFBHHIvricXdPH5yqKG4rkThiNbn4V4vOpUUmxovdV0ajBcfzcwFQSLmseBliSukDjMVc27UJMdKN27fw1O3pzqD%2FMcxi9OyTRtLoPc%2BnAIwyavmxAY6pgHmzWkJPx2E1JZcJXxz1hrtMa0kPSmJ0r9lew31z3pmvGoNJHG0%2B0Gbp4yhXdjmTXKDqBMik5eKhY%2B0jFEC%2BkX2mZOzo4cYzjIW8DsC%2FUYvvzg%2BYue57MjjnrNbB7Oatoug49K%2FGYnirI7Ak%2FoFVsAbbtM4Z2aYuiYoTMo3uGRcqyif7QiLi%2BbAG9aGoYocXFFTp9%2FJDVeutDokDEGIGHm65lci62PT&X-Amz-Signature=fc3509df6a3af1c87d115386bd27c5239068f8d35ebb30b454de3526dd7dece9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUXP62DE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1CaM0OLyVVORlh4kXEiwaGuZzpUnIbcAD%2BOBY%2BySUFAiBq6sSbgYTqfVdBbrVYT4vMB6g6G13AvXJUhIigT4DN2yqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQehGenDZoDDFpcumKtwDXy2JO%2FgZyeE7ScasuMctrF6feiwVcUWuNddj9jcrni6tDt%2FMJwmxyNUNUqIm1HD9yDHu4gyafCiToMqvwsJ1kjcH3kK9FnMhYcRW7l%2FKV7XLrsRwwYyeZx7HFjDHeah7LoVxz9Ka9Z0xMmnagtpK2DZ7e0lZJG0ye13l%2BVoXY8KMSghvZqh9hG3mqSWcPg12MgZU%2BCMuSvMoLYqxaVOwv860VQ4S22cLkvEx7pqTq6Ua1R%2Fx7i2hhLf%2BIITLhZdkrf0A%2BZyUcNq0EXLpB8vIH9%2BwfrHorImvaO2TLkc4RCBJnMx66V88TVTdzPZHJoxr6dvkznE%2B1A7hcSwY%2Bm%2B%2BXGyWEGbFMRlXsqB8gq3z63BiH8P%2B2GqKnfYTyb3%2BXzeqGRuIsvZ7Phvy2gk0LfroY0U%2FB0moYTu3xwqNK1EgdVDwqVbwjN0VAl6gVm8rIIm0OGLKvQY6PGNK7wGOqpIb6RtDTpchY5Lsr4a0RwFhFiut3GCNuHc9Zw5yj1SnoT%2F0I0VNS28cCjYkAFDc9pfoi%2BSspKQm69oO70FbznUXEUKR%2FZc%2BaqorOh8chGf7DubsD5n%2BuoFvGBbkr11tkkNn5%2BIXMOsM4ASYToi7x6luZtq1wAq2XN7ubIcDG94wtqvmxAY6pgHOLHFe6%2BPJeqV4OXioJLKc2KGtyMZJzSbz6ZAP%2FCPvKpIWhRSfhmfBwnEV%2FwRhNd1xccEPhQGHUZE%2FtwsuKv74oPPOAnPVU4CnkI91ZOhOPprtlCtI4TG76BxTXG5rKOMDR2%2FTNcjMBNAZdrJHunNgIkIGoiHE6yIWoeXKqNk9vh5dh%2Fi%2FuIiNRnW5YZG33FNrsd9u0gvGXdixVYHUOmfRsu97%2FGX6&X-Amz-Signature=72ee290a9878340c8e3af30440383c7e69e9a06a6a0db6e57c1c149f3168b5e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM676CXY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJ47Im1%2FnNrmgifPy53oI4c6mB%2FyJaV0PwvLtN2NmnfAiBXXV%2FacHDxhck68qKGFySz%2FqX65NgFai2kmTYzSniQ2yqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6GxdBwYXGan%2B%2BaB4KtwDvnLfihEFznvgMb3vZUMUF5s4lkJh50PCGlsBtuUcsxnvvnjbEDJE4ygkWr3eacjHym6BzwykIMODD5vhQNtx1H%2BILU9XgLdfglfDrUJNIPicgpctZBikdmQoIT%2F4OCUhb%2BQj6LaWWhE621PR40a%2FiorQIEBx9ly7%2BzPaGIB0%2Bhv3Jk%2BIxpC3AnuxTkabb26sSlis59SCBTFkmt8gRZY1s8eNaiGnH0KtthuuxIPvBp4vxoDGX8lyEDjvlpd%2FFKyj5fI9CIRafoEtEXlB%2Bks8SSa8NotYp31UItzMltc2Ibx0XuUXjVJkCmjes%2F%2BfiJap7D8R4KOozOsElLxQoOV9XenS9uwvQ%2B4HMp1fxX6LTIiEstaz3KUg1i%2BA4nO1QqItCzkvjhmQk0cjBVV4f%2BKOx32iFnz%2FXVgeo3qsvhpt521RxwLLwOprV4gP6rkiE9IjRr7cPZjlhpUTbZDN%2FooUW1hZ6vU4HSzqS%2BHbvDXOeCSPKhsnzsvGiAHyJVD25gQZoiaud0W3OcvOPgiG5DjArO5YRtPUWJOOGI0xmn%2FwW4FwBnIFV%2Bk3bd4GOESD4upPvwtgMvfH4GyNzFM34ut1qkel7lVyujYUT%2FRi%2FmzYgwl52cxaBuXXtBcn2QQwo6zmxAY6pgGSoITqY%2FnkD6ezyX7HMq%2B03dmKh2%2Bh%2BZQLeXOVPnE%2BhQl3Z4d9bo%2F3IQvm3%2BOQnHfnvAu%2BI7R3tjm4712Dgdv67W0PAOoEI1GExvaTX8J2dNqrRCpXIEubjLmf8ERYRAYjytKM%2BCLiIoO7%2BtlpWB24qpzzxCkQpKSdcXeiwew0cn9S82Bkv20ZNy7tFr9flv7dMHx8hz1y4R0Ib%2Bp8IN9S%2FeOXOmsL&X-Amz-Signature=490364e3fbb957e10fe2fb4db84e23c4a5647c253e4388f19c36ec72033de57b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM676CXY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJ47Im1%2FnNrmgifPy53oI4c6mB%2FyJaV0PwvLtN2NmnfAiBXXV%2FacHDxhck68qKGFySz%2FqX65NgFai2kmTYzSniQ2yqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6GxdBwYXGan%2B%2BaB4KtwDvnLfihEFznvgMb3vZUMUF5s4lkJh50PCGlsBtuUcsxnvvnjbEDJE4ygkWr3eacjHym6BzwykIMODD5vhQNtx1H%2BILU9XgLdfglfDrUJNIPicgpctZBikdmQoIT%2F4OCUhb%2BQj6LaWWhE621PR40a%2FiorQIEBx9ly7%2BzPaGIB0%2Bhv3Jk%2BIxpC3AnuxTkabb26sSlis59SCBTFkmt8gRZY1s8eNaiGnH0KtthuuxIPvBp4vxoDGX8lyEDjvlpd%2FFKyj5fI9CIRafoEtEXlB%2Bks8SSa8NotYp31UItzMltc2Ibx0XuUXjVJkCmjes%2F%2BfiJap7D8R4KOozOsElLxQoOV9XenS9uwvQ%2B4HMp1fxX6LTIiEstaz3KUg1i%2BA4nO1QqItCzkvjhmQk0cjBVV4f%2BKOx32iFnz%2FXVgeo3qsvhpt521RxwLLwOprV4gP6rkiE9IjRr7cPZjlhpUTbZDN%2FooUW1hZ6vU4HSzqS%2BHbvDXOeCSPKhsnzsvGiAHyJVD25gQZoiaud0W3OcvOPgiG5DjArO5YRtPUWJOOGI0xmn%2FwW4FwBnIFV%2Bk3bd4GOESD4upPvwtgMvfH4GyNzFM34ut1qkel7lVyujYUT%2FRi%2FmzYgwl52cxaBuXXtBcn2QQwo6zmxAY6pgGSoITqY%2FnkD6ezyX7HMq%2B03dmKh2%2Bh%2BZQLeXOVPnE%2BhQl3Z4d9bo%2F3IQvm3%2BOQnHfnvAu%2BI7R3tjm4712Dgdv67W0PAOoEI1GExvaTX8J2dNqrRCpXIEubjLmf8ERYRAYjytKM%2BCLiIoO7%2BtlpWB24qpzzxCkQpKSdcXeiwew0cn9S82Bkv20ZNy7tFr9flv7dMHx8hz1y4R0Ib%2Bp8IN9S%2FeOXOmsL&X-Amz-Signature=09f5270b68e560e52853b2bd9f39295e9afa068c7672a4b27dfc520e59f249bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6AJSKYE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN1nBlljMhddZn0do2RpQEVBi2IeSrTaThGjApt1NpOgIhANrzjfkAjmkhQjnxkLpY3CrQ%2BpFAnPemVoD2KSfq0J2BKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTOwelfCygq%2B2%2Bb%2BAq3AOb64Yr5GPshL2kUhwdKCI8j2MWT%2Bhc7Vfj1%2BoHF3b7%2FNHBnG236c11RmN9FdckbYh8kbNOS9NvkZX9Urfi6%2BbLScmXujhgLlfD6CIlNY32oHo4%2BCbMIQyedDBtoKbBNku3WxFirYsGk1liCSJ6zgu%2FmXDeF2rAXS1TGR6D6krQXhjTnPfuKFmaXvgC%2B3rdQgCA0ZrhTwP4sFw%2B9Kuy%2FmN6RFtxo%2FhIR6rNFLpP%2BhZsrzRQOkSXpLmTvn4LMu4ZQMlsraO0ahTvl23HNHTnnb8LIMcVAR6UjnHvWc70SwiP73eZIdh3Q7M9ZT1fp3ToSagWFzir6j3QAurQsXRJRnqLvHeeKrHblYZY0LT1vqSl1J0W%2F8SlrgVWxA4%2BjVufpVFE1f%2F1AC8qI2keS0CRviU9vMQ0%2FbNOk%2BaV6W3lIsHQvpOrVl3iR0R9UnAwxbzYa8G9VwB8r5tr27HFWfYR9TWKZ%2Bo084YOYdK7ilSD9xajmZWbEmqjC2PqJzH7do2s8enjDq%2FNz%2F0Qz0bbizWArWiepULimMY8k2tswkpU5BvYRU6hOWhXqbUM9oBSUQjIE2NQX4NL4yFxm1efygzljAXXThqIwhqdk8j%2Bm6MGlikAp7y7L%2Bh9BrRkbyDCIjD8qubEBjqkAdkj0QVTZZWfMYmcbnglekIug38LP5QYNBeeuMj0xkJN3fUdv22nzCe1iZH6I7a0GeBQk3Bc6FFcbRXGtvK2MG89u6DxA6XqoFqm24VE0uNZQwMztTryhRfEtMOOGjFDNAyiHqocUqDXzXDOr8RnU6eSfKlX1TWf0rVxsZrJVrZyyErYWk5SJaZpBmQzAJYSisA09h%2FHrpOVdYAoXuq7kgkjHfdO&X-Amz-Signature=b06abb08255518aee08ebeec9e37fefc2cb83516e33b69de6a7443c66184b65c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6AJSKYE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN1nBlljMhddZn0do2RpQEVBi2IeSrTaThGjApt1NpOgIhANrzjfkAjmkhQjnxkLpY3CrQ%2BpFAnPemVoD2KSfq0J2BKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTOwelfCygq%2B2%2Bb%2BAq3AOb64Yr5GPshL2kUhwdKCI8j2MWT%2Bhc7Vfj1%2BoHF3b7%2FNHBnG236c11RmN9FdckbYh8kbNOS9NvkZX9Urfi6%2BbLScmXujhgLlfD6CIlNY32oHo4%2BCbMIQyedDBtoKbBNku3WxFirYsGk1liCSJ6zgu%2FmXDeF2rAXS1TGR6D6krQXhjTnPfuKFmaXvgC%2B3rdQgCA0ZrhTwP4sFw%2B9Kuy%2FmN6RFtxo%2FhIR6rNFLpP%2BhZsrzRQOkSXpLmTvn4LMu4ZQMlsraO0ahTvl23HNHTnnb8LIMcVAR6UjnHvWc70SwiP73eZIdh3Q7M9ZT1fp3ToSagWFzir6j3QAurQsXRJRnqLvHeeKrHblYZY0LT1vqSl1J0W%2F8SlrgVWxA4%2BjVufpVFE1f%2F1AC8qI2keS0CRviU9vMQ0%2FbNOk%2BaV6W3lIsHQvpOrVl3iR0R9UnAwxbzYa8G9VwB8r5tr27HFWfYR9TWKZ%2Bo084YOYdK7ilSD9xajmZWbEmqjC2PqJzH7do2s8enjDq%2FNz%2F0Qz0bbizWArWiepULimMY8k2tswkpU5BvYRU6hOWhXqbUM9oBSUQjIE2NQX4NL4yFxm1efygzljAXXThqIwhqdk8j%2Bm6MGlikAp7y7L%2Bh9BrRkbyDCIjD8qubEBjqkAdkj0QVTZZWfMYmcbnglekIug38LP5QYNBeeuMj0xkJN3fUdv22nzCe1iZH6I7a0GeBQk3Bc6FFcbRXGtvK2MG89u6DxA6XqoFqm24VE0uNZQwMztTryhRfEtMOOGjFDNAyiHqocUqDXzXDOr8RnU6eSfKlX1TWf0rVxsZrJVrZyyErYWk5SJaZpBmQzAJYSisA09h%2FHrpOVdYAoXuq7kgkjHfdO&X-Amz-Signature=433e477219ecf46b78879780dedff6a59ce90f634870e5882ca3b236a5707199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6AJSKYE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN1nBlljMhddZn0do2RpQEVBi2IeSrTaThGjApt1NpOgIhANrzjfkAjmkhQjnxkLpY3CrQ%2BpFAnPemVoD2KSfq0J2BKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTOwelfCygq%2B2%2Bb%2BAq3AOb64Yr5GPshL2kUhwdKCI8j2MWT%2Bhc7Vfj1%2BoHF3b7%2FNHBnG236c11RmN9FdckbYh8kbNOS9NvkZX9Urfi6%2BbLScmXujhgLlfD6CIlNY32oHo4%2BCbMIQyedDBtoKbBNku3WxFirYsGk1liCSJ6zgu%2FmXDeF2rAXS1TGR6D6krQXhjTnPfuKFmaXvgC%2B3rdQgCA0ZrhTwP4sFw%2B9Kuy%2FmN6RFtxo%2FhIR6rNFLpP%2BhZsrzRQOkSXpLmTvn4LMu4ZQMlsraO0ahTvl23HNHTnnb8LIMcVAR6UjnHvWc70SwiP73eZIdh3Q7M9ZT1fp3ToSagWFzir6j3QAurQsXRJRnqLvHeeKrHblYZY0LT1vqSl1J0W%2F8SlrgVWxA4%2BjVufpVFE1f%2F1AC8qI2keS0CRviU9vMQ0%2FbNOk%2BaV6W3lIsHQvpOrVl3iR0R9UnAwxbzYa8G9VwB8r5tr27HFWfYR9TWKZ%2Bo084YOYdK7ilSD9xajmZWbEmqjC2PqJzH7do2s8enjDq%2FNz%2F0Qz0bbizWArWiepULimMY8k2tswkpU5BvYRU6hOWhXqbUM9oBSUQjIE2NQX4NL4yFxm1efygzljAXXThqIwhqdk8j%2Bm6MGlikAp7y7L%2Bh9BrRkbyDCIjD8qubEBjqkAdkj0QVTZZWfMYmcbnglekIug38LP5QYNBeeuMj0xkJN3fUdv22nzCe1iZH6I7a0GeBQk3Bc6FFcbRXGtvK2MG89u6DxA6XqoFqm24VE0uNZQwMztTryhRfEtMOOGjFDNAyiHqocUqDXzXDOr8RnU6eSfKlX1TWf0rVxsZrJVrZyyErYWk5SJaZpBmQzAJYSisA09h%2FHrpOVdYAoXuq7kgkjHfdO&X-Amz-Signature=7a671744d0b647f6c47de1efcab93bfe631128f9575fedc4fbc09b1fbf2a34a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6AJSKYE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN1nBlljMhddZn0do2RpQEVBi2IeSrTaThGjApt1NpOgIhANrzjfkAjmkhQjnxkLpY3CrQ%2BpFAnPemVoD2KSfq0J2BKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTOwelfCygq%2B2%2Bb%2BAq3AOb64Yr5GPshL2kUhwdKCI8j2MWT%2Bhc7Vfj1%2BoHF3b7%2FNHBnG236c11RmN9FdckbYh8kbNOS9NvkZX9Urfi6%2BbLScmXujhgLlfD6CIlNY32oHo4%2BCbMIQyedDBtoKbBNku3WxFirYsGk1liCSJ6zgu%2FmXDeF2rAXS1TGR6D6krQXhjTnPfuKFmaXvgC%2B3rdQgCA0ZrhTwP4sFw%2B9Kuy%2FmN6RFtxo%2FhIR6rNFLpP%2BhZsrzRQOkSXpLmTvn4LMu4ZQMlsraO0ahTvl23HNHTnnb8LIMcVAR6UjnHvWc70SwiP73eZIdh3Q7M9ZT1fp3ToSagWFzir6j3QAurQsXRJRnqLvHeeKrHblYZY0LT1vqSl1J0W%2F8SlrgVWxA4%2BjVufpVFE1f%2F1AC8qI2keS0CRviU9vMQ0%2FbNOk%2BaV6W3lIsHQvpOrVl3iR0R9UnAwxbzYa8G9VwB8r5tr27HFWfYR9TWKZ%2Bo084YOYdK7ilSD9xajmZWbEmqjC2PqJzH7do2s8enjDq%2FNz%2F0Qz0bbizWArWiepULimMY8k2tswkpU5BvYRU6hOWhXqbUM9oBSUQjIE2NQX4NL4yFxm1efygzljAXXThqIwhqdk8j%2Bm6MGlikAp7y7L%2Bh9BrRkbyDCIjD8qubEBjqkAdkj0QVTZZWfMYmcbnglekIug38LP5QYNBeeuMj0xkJN3fUdv22nzCe1iZH6I7a0GeBQk3Bc6FFcbRXGtvK2MG89u6DxA6XqoFqm24VE0uNZQwMztTryhRfEtMOOGjFDNAyiHqocUqDXzXDOr8RnU6eSfKlX1TWf0rVxsZrJVrZyyErYWk5SJaZpBmQzAJYSisA09h%2FHrpOVdYAoXuq7kgkjHfdO&X-Amz-Signature=9d7851cca46c6d2614856a6f394bde7db66ccdf8bb933ade6071b00f72f0d6b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6AJSKYE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN1nBlljMhddZn0do2RpQEVBi2IeSrTaThGjApt1NpOgIhANrzjfkAjmkhQjnxkLpY3CrQ%2BpFAnPemVoD2KSfq0J2BKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTOwelfCygq%2B2%2Bb%2BAq3AOb64Yr5GPshL2kUhwdKCI8j2MWT%2Bhc7Vfj1%2BoHF3b7%2FNHBnG236c11RmN9FdckbYh8kbNOS9NvkZX9Urfi6%2BbLScmXujhgLlfD6CIlNY32oHo4%2BCbMIQyedDBtoKbBNku3WxFirYsGk1liCSJ6zgu%2FmXDeF2rAXS1TGR6D6krQXhjTnPfuKFmaXvgC%2B3rdQgCA0ZrhTwP4sFw%2B9Kuy%2FmN6RFtxo%2FhIR6rNFLpP%2BhZsrzRQOkSXpLmTvn4LMu4ZQMlsraO0ahTvl23HNHTnnb8LIMcVAR6UjnHvWc70SwiP73eZIdh3Q7M9ZT1fp3ToSagWFzir6j3QAurQsXRJRnqLvHeeKrHblYZY0LT1vqSl1J0W%2F8SlrgVWxA4%2BjVufpVFE1f%2F1AC8qI2keS0CRviU9vMQ0%2FbNOk%2BaV6W3lIsHQvpOrVl3iR0R9UnAwxbzYa8G9VwB8r5tr27HFWfYR9TWKZ%2Bo084YOYdK7ilSD9xajmZWbEmqjC2PqJzH7do2s8enjDq%2FNz%2F0Qz0bbizWArWiepULimMY8k2tswkpU5BvYRU6hOWhXqbUM9oBSUQjIE2NQX4NL4yFxm1efygzljAXXThqIwhqdk8j%2Bm6MGlikAp7y7L%2Bh9BrRkbyDCIjD8qubEBjqkAdkj0QVTZZWfMYmcbnglekIug38LP5QYNBeeuMj0xkJN3fUdv22nzCe1iZH6I7a0GeBQk3Bc6FFcbRXGtvK2MG89u6DxA6XqoFqm24VE0uNZQwMztTryhRfEtMOOGjFDNAyiHqocUqDXzXDOr8RnU6eSfKlX1TWf0rVxsZrJVrZyyErYWk5SJaZpBmQzAJYSisA09h%2FHrpOVdYAoXuq7kgkjHfdO&X-Amz-Signature=8b4e7798b553039b6bd0a3bd1c0574d8dd2ceb2621fa394262d09ee6e8cc39ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6AJSKYE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN1nBlljMhddZn0do2RpQEVBi2IeSrTaThGjApt1NpOgIhANrzjfkAjmkhQjnxkLpY3CrQ%2BpFAnPemVoD2KSfq0J2BKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTOwelfCygq%2B2%2Bb%2BAq3AOb64Yr5GPshL2kUhwdKCI8j2MWT%2Bhc7Vfj1%2BoHF3b7%2FNHBnG236c11RmN9FdckbYh8kbNOS9NvkZX9Urfi6%2BbLScmXujhgLlfD6CIlNY32oHo4%2BCbMIQyedDBtoKbBNku3WxFirYsGk1liCSJ6zgu%2FmXDeF2rAXS1TGR6D6krQXhjTnPfuKFmaXvgC%2B3rdQgCA0ZrhTwP4sFw%2B9Kuy%2FmN6RFtxo%2FhIR6rNFLpP%2BhZsrzRQOkSXpLmTvn4LMu4ZQMlsraO0ahTvl23HNHTnnb8LIMcVAR6UjnHvWc70SwiP73eZIdh3Q7M9ZT1fp3ToSagWFzir6j3QAurQsXRJRnqLvHeeKrHblYZY0LT1vqSl1J0W%2F8SlrgVWxA4%2BjVufpVFE1f%2F1AC8qI2keS0CRviU9vMQ0%2FbNOk%2BaV6W3lIsHQvpOrVl3iR0R9UnAwxbzYa8G9VwB8r5tr27HFWfYR9TWKZ%2Bo084YOYdK7ilSD9xajmZWbEmqjC2PqJzH7do2s8enjDq%2FNz%2F0Qz0bbizWArWiepULimMY8k2tswkpU5BvYRU6hOWhXqbUM9oBSUQjIE2NQX4NL4yFxm1efygzljAXXThqIwhqdk8j%2Bm6MGlikAp7y7L%2Bh9BrRkbyDCIjD8qubEBjqkAdkj0QVTZZWfMYmcbnglekIug38LP5QYNBeeuMj0xkJN3fUdv22nzCe1iZH6I7a0GeBQk3Bc6FFcbRXGtvK2MG89u6DxA6XqoFqm24VE0uNZQwMztTryhRfEtMOOGjFDNAyiHqocUqDXzXDOr8RnU6eSfKlX1TWf0rVxsZrJVrZyyErYWk5SJaZpBmQzAJYSisA09h%2FHrpOVdYAoXuq7kgkjHfdO&X-Amz-Signature=32fb65f07e5dbc02de6cdf4063282ac116cc1aa23847d5c765a3523f6d9c39fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6AJSKYE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN1nBlljMhddZn0do2RpQEVBi2IeSrTaThGjApt1NpOgIhANrzjfkAjmkhQjnxkLpY3CrQ%2BpFAnPemVoD2KSfq0J2BKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTOwelfCygq%2B2%2Bb%2BAq3AOb64Yr5GPshL2kUhwdKCI8j2MWT%2Bhc7Vfj1%2BoHF3b7%2FNHBnG236c11RmN9FdckbYh8kbNOS9NvkZX9Urfi6%2BbLScmXujhgLlfD6CIlNY32oHo4%2BCbMIQyedDBtoKbBNku3WxFirYsGk1liCSJ6zgu%2FmXDeF2rAXS1TGR6D6krQXhjTnPfuKFmaXvgC%2B3rdQgCA0ZrhTwP4sFw%2B9Kuy%2FmN6RFtxo%2FhIR6rNFLpP%2BhZsrzRQOkSXpLmTvn4LMu4ZQMlsraO0ahTvl23HNHTnnb8LIMcVAR6UjnHvWc70SwiP73eZIdh3Q7M9ZT1fp3ToSagWFzir6j3QAurQsXRJRnqLvHeeKrHblYZY0LT1vqSl1J0W%2F8SlrgVWxA4%2BjVufpVFE1f%2F1AC8qI2keS0CRviU9vMQ0%2FbNOk%2BaV6W3lIsHQvpOrVl3iR0R9UnAwxbzYa8G9VwB8r5tr27HFWfYR9TWKZ%2Bo084YOYdK7ilSD9xajmZWbEmqjC2PqJzH7do2s8enjDq%2FNz%2F0Qz0bbizWArWiepULimMY8k2tswkpU5BvYRU6hOWhXqbUM9oBSUQjIE2NQX4NL4yFxm1efygzljAXXThqIwhqdk8j%2Bm6MGlikAp7y7L%2Bh9BrRkbyDCIjD8qubEBjqkAdkj0QVTZZWfMYmcbnglekIug38LP5QYNBeeuMj0xkJN3fUdv22nzCe1iZH6I7a0GeBQk3Bc6FFcbRXGtvK2MG89u6DxA6XqoFqm24VE0uNZQwMztTryhRfEtMOOGjFDNAyiHqocUqDXzXDOr8RnU6eSfKlX1TWf0rVxsZrJVrZyyErYWk5SJaZpBmQzAJYSisA09h%2FHrpOVdYAoXuq7kgkjHfdO&X-Amz-Signature=7a671744d0b647f6c47de1efcab93bfe631128f9575fedc4fbc09b1fbf2a34a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6AJSKYE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN1nBlljMhddZn0do2RpQEVBi2IeSrTaThGjApt1NpOgIhANrzjfkAjmkhQjnxkLpY3CrQ%2BpFAnPemVoD2KSfq0J2BKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTOwelfCygq%2B2%2Bb%2BAq3AOb64Yr5GPshL2kUhwdKCI8j2MWT%2Bhc7Vfj1%2BoHF3b7%2FNHBnG236c11RmN9FdckbYh8kbNOS9NvkZX9Urfi6%2BbLScmXujhgLlfD6CIlNY32oHo4%2BCbMIQyedDBtoKbBNku3WxFirYsGk1liCSJ6zgu%2FmXDeF2rAXS1TGR6D6krQXhjTnPfuKFmaXvgC%2B3rdQgCA0ZrhTwP4sFw%2B9Kuy%2FmN6RFtxo%2FhIR6rNFLpP%2BhZsrzRQOkSXpLmTvn4LMu4ZQMlsraO0ahTvl23HNHTnnb8LIMcVAR6UjnHvWc70SwiP73eZIdh3Q7M9ZT1fp3ToSagWFzir6j3QAurQsXRJRnqLvHeeKrHblYZY0LT1vqSl1J0W%2F8SlrgVWxA4%2BjVufpVFE1f%2F1AC8qI2keS0CRviU9vMQ0%2FbNOk%2BaV6W3lIsHQvpOrVl3iR0R9UnAwxbzYa8G9VwB8r5tr27HFWfYR9TWKZ%2Bo084YOYdK7ilSD9xajmZWbEmqjC2PqJzH7do2s8enjDq%2FNz%2F0Qz0bbizWArWiepULimMY8k2tswkpU5BvYRU6hOWhXqbUM9oBSUQjIE2NQX4NL4yFxm1efygzljAXXThqIwhqdk8j%2Bm6MGlikAp7y7L%2Bh9BrRkbyDCIjD8qubEBjqkAdkj0QVTZZWfMYmcbnglekIug38LP5QYNBeeuMj0xkJN3fUdv22nzCe1iZH6I7a0GeBQk3Bc6FFcbRXGtvK2MG89u6DxA6XqoFqm24VE0uNZQwMztTryhRfEtMOOGjFDNAyiHqocUqDXzXDOr8RnU6eSfKlX1TWf0rVxsZrJVrZyyErYWk5SJaZpBmQzAJYSisA09h%2FHrpOVdYAoXuq7kgkjHfdO&X-Amz-Signature=3006509b8cb4863c97973f9fa1e539c34d55ce11a6819698b103cea7e2725bcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6AJSKYE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN1nBlljMhddZn0do2RpQEVBi2IeSrTaThGjApt1NpOgIhANrzjfkAjmkhQjnxkLpY3CrQ%2BpFAnPemVoD2KSfq0J2BKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTOwelfCygq%2B2%2Bb%2BAq3AOb64Yr5GPshL2kUhwdKCI8j2MWT%2Bhc7Vfj1%2BoHF3b7%2FNHBnG236c11RmN9FdckbYh8kbNOS9NvkZX9Urfi6%2BbLScmXujhgLlfD6CIlNY32oHo4%2BCbMIQyedDBtoKbBNku3WxFirYsGk1liCSJ6zgu%2FmXDeF2rAXS1TGR6D6krQXhjTnPfuKFmaXvgC%2B3rdQgCA0ZrhTwP4sFw%2B9Kuy%2FmN6RFtxo%2FhIR6rNFLpP%2BhZsrzRQOkSXpLmTvn4LMu4ZQMlsraO0ahTvl23HNHTnnb8LIMcVAR6UjnHvWc70SwiP73eZIdh3Q7M9ZT1fp3ToSagWFzir6j3QAurQsXRJRnqLvHeeKrHblYZY0LT1vqSl1J0W%2F8SlrgVWxA4%2BjVufpVFE1f%2F1AC8qI2keS0CRviU9vMQ0%2FbNOk%2BaV6W3lIsHQvpOrVl3iR0R9UnAwxbzYa8G9VwB8r5tr27HFWfYR9TWKZ%2Bo084YOYdK7ilSD9xajmZWbEmqjC2PqJzH7do2s8enjDq%2FNz%2F0Qz0bbizWArWiepULimMY8k2tswkpU5BvYRU6hOWhXqbUM9oBSUQjIE2NQX4NL4yFxm1efygzljAXXThqIwhqdk8j%2Bm6MGlikAp7y7L%2Bh9BrRkbyDCIjD8qubEBjqkAdkj0QVTZZWfMYmcbnglekIug38LP5QYNBeeuMj0xkJN3fUdv22nzCe1iZH6I7a0GeBQk3Bc6FFcbRXGtvK2MG89u6DxA6XqoFqm24VE0uNZQwMztTryhRfEtMOOGjFDNAyiHqocUqDXzXDOr8RnU6eSfKlX1TWf0rVxsZrJVrZyyErYWk5SJaZpBmQzAJYSisA09h%2FHrpOVdYAoXuq7kgkjHfdO&X-Amz-Signature=6f6ba718334b1d7f04084e4914ed39197e681a2c2dee4505032dcde1131fc831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6AJSKYE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN1nBlljMhddZn0do2RpQEVBi2IeSrTaThGjApt1NpOgIhANrzjfkAjmkhQjnxkLpY3CrQ%2BpFAnPemVoD2KSfq0J2BKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTOwelfCygq%2B2%2Bb%2BAq3AOb64Yr5GPshL2kUhwdKCI8j2MWT%2Bhc7Vfj1%2BoHF3b7%2FNHBnG236c11RmN9FdckbYh8kbNOS9NvkZX9Urfi6%2BbLScmXujhgLlfD6CIlNY32oHo4%2BCbMIQyedDBtoKbBNku3WxFirYsGk1liCSJ6zgu%2FmXDeF2rAXS1TGR6D6krQXhjTnPfuKFmaXvgC%2B3rdQgCA0ZrhTwP4sFw%2B9Kuy%2FmN6RFtxo%2FhIR6rNFLpP%2BhZsrzRQOkSXpLmTvn4LMu4ZQMlsraO0ahTvl23HNHTnnb8LIMcVAR6UjnHvWc70SwiP73eZIdh3Q7M9ZT1fp3ToSagWFzir6j3QAurQsXRJRnqLvHeeKrHblYZY0LT1vqSl1J0W%2F8SlrgVWxA4%2BjVufpVFE1f%2F1AC8qI2keS0CRviU9vMQ0%2FbNOk%2BaV6W3lIsHQvpOrVl3iR0R9UnAwxbzYa8G9VwB8r5tr27HFWfYR9TWKZ%2Bo084YOYdK7ilSD9xajmZWbEmqjC2PqJzH7do2s8enjDq%2FNz%2F0Qz0bbizWArWiepULimMY8k2tswkpU5BvYRU6hOWhXqbUM9oBSUQjIE2NQX4NL4yFxm1efygzljAXXThqIwhqdk8j%2Bm6MGlikAp7y7L%2Bh9BrRkbyDCIjD8qubEBjqkAdkj0QVTZZWfMYmcbnglekIug38LP5QYNBeeuMj0xkJN3fUdv22nzCe1iZH6I7a0GeBQk3Bc6FFcbRXGtvK2MG89u6DxA6XqoFqm24VE0uNZQwMztTryhRfEtMOOGjFDNAyiHqocUqDXzXDOr8RnU6eSfKlX1TWf0rVxsZrJVrZyyErYWk5SJaZpBmQzAJYSisA09h%2FHrpOVdYAoXuq7kgkjHfdO&X-Amz-Signature=cb343dd54de849bf4cef6ae61fd100571cbcaf1e25737a9eb6fb618333e8c927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
