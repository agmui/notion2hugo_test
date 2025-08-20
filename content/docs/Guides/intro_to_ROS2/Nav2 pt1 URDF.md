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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGVDRX6E%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFINmrL4v9AQmpxMAWAonS3BDBoMZWf8NbgRT2p0ay2PAiEA01cqhnNwIdt%2Fka%2BfFovF25HzCMaP99kIQdRz5rBytKsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDNTeR9EoXaGZWR%2FyrcA9islXhGhhb54IVFAneVTf6jngd0%2FFa9sas28F5i07FaGvYnS3knJ%2FafKZfjFQwU1HMEiWGktEtIjUNF1zCEvD8x%2BM4j2to2V8YuiYZutaiUmn1uxVTaQnnPJJ4o%2BhZB7Bayd2TRqhX%2FvVpyJqG4LspT26YAb1ZcRjdHHabo2pkwRbgKlDzfqe3wx9Luspp0zZ8o4Yi0hphzOKxYxQBU5uMT1Y8InUcSYv0gpMdSQzgbGhIgT6BA48dAO%2FnR9RNhovS%2BWsGGWyPnFFdak6DrYid5fDk3O0NkmoT1SiRDvY2GtJoA1J3NkIE%2FSdXaSL1wYUGMapIaUq2Z5MA49uAlCxSKsj%2BcsWIpRQVTCOQjtzXT9%2Bn8nEU1ZDyYlarG1i6lKbUGPVj6BOZZVTuhLAbFgtf8GuwzFh5sUQw4lnkY7YhZJzyPdEmiE2noY6n%2FoDWBE5jOu4sTsgmeB75dl%2BEjHErIZcF5oui6P3Ga4k1m%2FclIg6RiGKqjEyEwZRYIywWs0yPdd6RURjVhtWM4dCCIMSJ9w0zDpSABGY1NUoAuV9GTITpao%2Bu8bofQLlqwT3%2Fkm2ChUHAZuZ5mRD4xfNXJsVDd2uENiK71VCwKAEP58FYLRMhAhuXMJWrs%2BMTcMP34lcUGOqUBIunsH8yi6D1%2BlfVEmxyAM5F4ns9kUEDxQyjFzuosdfVv%2FY3GVmvrcOSin4jB0CqSBT4oo91VW91Ucbc0HAcuA6ECCKzUp3aVSgu1lSerT%2BbU2XcBObZa9BNVARbmomwQ0QFpKUnBZ%2BioR8%2FgR5JbwclhNJcPhp90UO6h7JW%2Bdu2lVmdsrRa%2BnZykuStOnD4fMvhA0O9iPZ%2FU3gh5Ui51LiR1vbUx&X-Amz-Signature=ee5d487d5b3fe8d0b40bbd8c4d4858a176af617aba7dd6ef33f22367f9eb00e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGVDRX6E%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFINmrL4v9AQmpxMAWAonS3BDBoMZWf8NbgRT2p0ay2PAiEA01cqhnNwIdt%2Fka%2BfFovF25HzCMaP99kIQdRz5rBytKsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDNTeR9EoXaGZWR%2FyrcA9islXhGhhb54IVFAneVTf6jngd0%2FFa9sas28F5i07FaGvYnS3knJ%2FafKZfjFQwU1HMEiWGktEtIjUNF1zCEvD8x%2BM4j2to2V8YuiYZutaiUmn1uxVTaQnnPJJ4o%2BhZB7Bayd2TRqhX%2FvVpyJqG4LspT26YAb1ZcRjdHHabo2pkwRbgKlDzfqe3wx9Luspp0zZ8o4Yi0hphzOKxYxQBU5uMT1Y8InUcSYv0gpMdSQzgbGhIgT6BA48dAO%2FnR9RNhovS%2BWsGGWyPnFFdak6DrYid5fDk3O0NkmoT1SiRDvY2GtJoA1J3NkIE%2FSdXaSL1wYUGMapIaUq2Z5MA49uAlCxSKsj%2BcsWIpRQVTCOQjtzXT9%2Bn8nEU1ZDyYlarG1i6lKbUGPVj6BOZZVTuhLAbFgtf8GuwzFh5sUQw4lnkY7YhZJzyPdEmiE2noY6n%2FoDWBE5jOu4sTsgmeB75dl%2BEjHErIZcF5oui6P3Ga4k1m%2FclIg6RiGKqjEyEwZRYIywWs0yPdd6RURjVhtWM4dCCIMSJ9w0zDpSABGY1NUoAuV9GTITpao%2Bu8bofQLlqwT3%2Fkm2ChUHAZuZ5mRD4xfNXJsVDd2uENiK71VCwKAEP58FYLRMhAhuXMJWrs%2BMTcMP34lcUGOqUBIunsH8yi6D1%2BlfVEmxyAM5F4ns9kUEDxQyjFzuosdfVv%2FY3GVmvrcOSin4jB0CqSBT4oo91VW91Ucbc0HAcuA6ECCKzUp3aVSgu1lSerT%2BbU2XcBObZa9BNVARbmomwQ0QFpKUnBZ%2BioR8%2FgR5JbwclhNJcPhp90UO6h7JW%2Bdu2lVmdsrRa%2BnZykuStOnD4fMvhA0O9iPZ%2FU3gh5Ui51LiR1vbUx&X-Amz-Signature=b3ded1900199c9840bce82aa8147b69107a9c6cbcb1920e3ad48bb8dffde59bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGVDRX6E%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFINmrL4v9AQmpxMAWAonS3BDBoMZWf8NbgRT2p0ay2PAiEA01cqhnNwIdt%2Fka%2BfFovF25HzCMaP99kIQdRz5rBytKsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDNTeR9EoXaGZWR%2FyrcA9islXhGhhb54IVFAneVTf6jngd0%2FFa9sas28F5i07FaGvYnS3knJ%2FafKZfjFQwU1HMEiWGktEtIjUNF1zCEvD8x%2BM4j2to2V8YuiYZutaiUmn1uxVTaQnnPJJ4o%2BhZB7Bayd2TRqhX%2FvVpyJqG4LspT26YAb1ZcRjdHHabo2pkwRbgKlDzfqe3wx9Luspp0zZ8o4Yi0hphzOKxYxQBU5uMT1Y8InUcSYv0gpMdSQzgbGhIgT6BA48dAO%2FnR9RNhovS%2BWsGGWyPnFFdak6DrYid5fDk3O0NkmoT1SiRDvY2GtJoA1J3NkIE%2FSdXaSL1wYUGMapIaUq2Z5MA49uAlCxSKsj%2BcsWIpRQVTCOQjtzXT9%2Bn8nEU1ZDyYlarG1i6lKbUGPVj6BOZZVTuhLAbFgtf8GuwzFh5sUQw4lnkY7YhZJzyPdEmiE2noY6n%2FoDWBE5jOu4sTsgmeB75dl%2BEjHErIZcF5oui6P3Ga4k1m%2FclIg6RiGKqjEyEwZRYIywWs0yPdd6RURjVhtWM4dCCIMSJ9w0zDpSABGY1NUoAuV9GTITpao%2Bu8bofQLlqwT3%2Fkm2ChUHAZuZ5mRD4xfNXJsVDd2uENiK71VCwKAEP58FYLRMhAhuXMJWrs%2BMTcMP34lcUGOqUBIunsH8yi6D1%2BlfVEmxyAM5F4ns9kUEDxQyjFzuosdfVv%2FY3GVmvrcOSin4jB0CqSBT4oo91VW91Ucbc0HAcuA6ECCKzUp3aVSgu1lSerT%2BbU2XcBObZa9BNVARbmomwQ0QFpKUnBZ%2BioR8%2FgR5JbwclhNJcPhp90UO6h7JW%2Bdu2lVmdsrRa%2BnZykuStOnD4fMvhA0O9iPZ%2FU3gh5Ui51LiR1vbUx&X-Amz-Signature=43c9774c5495c2ee80bf75b429473847ecf1c4f72aad88ffac9f9b83121cd74a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGVDRX6E%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFINmrL4v9AQmpxMAWAonS3BDBoMZWf8NbgRT2p0ay2PAiEA01cqhnNwIdt%2Fka%2BfFovF25HzCMaP99kIQdRz5rBytKsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDNTeR9EoXaGZWR%2FyrcA9islXhGhhb54IVFAneVTf6jngd0%2FFa9sas28F5i07FaGvYnS3knJ%2FafKZfjFQwU1HMEiWGktEtIjUNF1zCEvD8x%2BM4j2to2V8YuiYZutaiUmn1uxVTaQnnPJJ4o%2BhZB7Bayd2TRqhX%2FvVpyJqG4LspT26YAb1ZcRjdHHabo2pkwRbgKlDzfqe3wx9Luspp0zZ8o4Yi0hphzOKxYxQBU5uMT1Y8InUcSYv0gpMdSQzgbGhIgT6BA48dAO%2FnR9RNhovS%2BWsGGWyPnFFdak6DrYid5fDk3O0NkmoT1SiRDvY2GtJoA1J3NkIE%2FSdXaSL1wYUGMapIaUq2Z5MA49uAlCxSKsj%2BcsWIpRQVTCOQjtzXT9%2Bn8nEU1ZDyYlarG1i6lKbUGPVj6BOZZVTuhLAbFgtf8GuwzFh5sUQw4lnkY7YhZJzyPdEmiE2noY6n%2FoDWBE5jOu4sTsgmeB75dl%2BEjHErIZcF5oui6P3Ga4k1m%2FclIg6RiGKqjEyEwZRYIywWs0yPdd6RURjVhtWM4dCCIMSJ9w0zDpSABGY1NUoAuV9GTITpao%2Bu8bofQLlqwT3%2Fkm2ChUHAZuZ5mRD4xfNXJsVDd2uENiK71VCwKAEP58FYLRMhAhuXMJWrs%2BMTcMP34lcUGOqUBIunsH8yi6D1%2BlfVEmxyAM5F4ns9kUEDxQyjFzuosdfVv%2FY3GVmvrcOSin4jB0CqSBT4oo91VW91Ucbc0HAcuA6ECCKzUp3aVSgu1lSerT%2BbU2XcBObZa9BNVARbmomwQ0QFpKUnBZ%2BioR8%2FgR5JbwclhNJcPhp90UO6h7JW%2Bdu2lVmdsrRa%2BnZykuStOnD4fMvhA0O9iPZ%2FU3gh5Ui51LiR1vbUx&X-Amz-Signature=56883b774b969f951d6227ada325c648c663f2792bb5214afcb6769bced86843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGVDRX6E%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFINmrL4v9AQmpxMAWAonS3BDBoMZWf8NbgRT2p0ay2PAiEA01cqhnNwIdt%2Fka%2BfFovF25HzCMaP99kIQdRz5rBytKsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDNTeR9EoXaGZWR%2FyrcA9islXhGhhb54IVFAneVTf6jngd0%2FFa9sas28F5i07FaGvYnS3knJ%2FafKZfjFQwU1HMEiWGktEtIjUNF1zCEvD8x%2BM4j2to2V8YuiYZutaiUmn1uxVTaQnnPJJ4o%2BhZB7Bayd2TRqhX%2FvVpyJqG4LspT26YAb1ZcRjdHHabo2pkwRbgKlDzfqe3wx9Luspp0zZ8o4Yi0hphzOKxYxQBU5uMT1Y8InUcSYv0gpMdSQzgbGhIgT6BA48dAO%2FnR9RNhovS%2BWsGGWyPnFFdak6DrYid5fDk3O0NkmoT1SiRDvY2GtJoA1J3NkIE%2FSdXaSL1wYUGMapIaUq2Z5MA49uAlCxSKsj%2BcsWIpRQVTCOQjtzXT9%2Bn8nEU1ZDyYlarG1i6lKbUGPVj6BOZZVTuhLAbFgtf8GuwzFh5sUQw4lnkY7YhZJzyPdEmiE2noY6n%2FoDWBE5jOu4sTsgmeB75dl%2BEjHErIZcF5oui6P3Ga4k1m%2FclIg6RiGKqjEyEwZRYIywWs0yPdd6RURjVhtWM4dCCIMSJ9w0zDpSABGY1NUoAuV9GTITpao%2Bu8bofQLlqwT3%2Fkm2ChUHAZuZ5mRD4xfNXJsVDd2uENiK71VCwKAEP58FYLRMhAhuXMJWrs%2BMTcMP34lcUGOqUBIunsH8yi6D1%2BlfVEmxyAM5F4ns9kUEDxQyjFzuosdfVv%2FY3GVmvrcOSin4jB0CqSBT4oo91VW91Ucbc0HAcuA6ECCKzUp3aVSgu1lSerT%2BbU2XcBObZa9BNVARbmomwQ0QFpKUnBZ%2BioR8%2FgR5JbwclhNJcPhp90UO6h7JW%2Bdu2lVmdsrRa%2BnZykuStOnD4fMvhA0O9iPZ%2FU3gh5Ui51LiR1vbUx&X-Amz-Signature=0edd8090b1d9507b25a4cb4b425db4453ff8f65748eaed9906b40bc7c433f2b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGVDRX6E%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFINmrL4v9AQmpxMAWAonS3BDBoMZWf8NbgRT2p0ay2PAiEA01cqhnNwIdt%2Fka%2BfFovF25HzCMaP99kIQdRz5rBytKsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDNTeR9EoXaGZWR%2FyrcA9islXhGhhb54IVFAneVTf6jngd0%2FFa9sas28F5i07FaGvYnS3knJ%2FafKZfjFQwU1HMEiWGktEtIjUNF1zCEvD8x%2BM4j2to2V8YuiYZutaiUmn1uxVTaQnnPJJ4o%2BhZB7Bayd2TRqhX%2FvVpyJqG4LspT26YAb1ZcRjdHHabo2pkwRbgKlDzfqe3wx9Luspp0zZ8o4Yi0hphzOKxYxQBU5uMT1Y8InUcSYv0gpMdSQzgbGhIgT6BA48dAO%2FnR9RNhovS%2BWsGGWyPnFFdak6DrYid5fDk3O0NkmoT1SiRDvY2GtJoA1J3NkIE%2FSdXaSL1wYUGMapIaUq2Z5MA49uAlCxSKsj%2BcsWIpRQVTCOQjtzXT9%2Bn8nEU1ZDyYlarG1i6lKbUGPVj6BOZZVTuhLAbFgtf8GuwzFh5sUQw4lnkY7YhZJzyPdEmiE2noY6n%2FoDWBE5jOu4sTsgmeB75dl%2BEjHErIZcF5oui6P3Ga4k1m%2FclIg6RiGKqjEyEwZRYIywWs0yPdd6RURjVhtWM4dCCIMSJ9w0zDpSABGY1NUoAuV9GTITpao%2Bu8bofQLlqwT3%2Fkm2ChUHAZuZ5mRD4xfNXJsVDd2uENiK71VCwKAEP58FYLRMhAhuXMJWrs%2BMTcMP34lcUGOqUBIunsH8yi6D1%2BlfVEmxyAM5F4ns9kUEDxQyjFzuosdfVv%2FY3GVmvrcOSin4jB0CqSBT4oo91VW91Ucbc0HAcuA6ECCKzUp3aVSgu1lSerT%2BbU2XcBObZa9BNVARbmomwQ0QFpKUnBZ%2BioR8%2FgR5JbwclhNJcPhp90UO6h7JW%2Bdu2lVmdsrRa%2BnZykuStOnD4fMvhA0O9iPZ%2FU3gh5Ui51LiR1vbUx&X-Amz-Signature=8f54b4c897b48ee8ff9c1d4a53213be33405f5b9cc8fc8a9a4b5968a737f7eea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGVDRX6E%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFINmrL4v9AQmpxMAWAonS3BDBoMZWf8NbgRT2p0ay2PAiEA01cqhnNwIdt%2Fka%2BfFovF25HzCMaP99kIQdRz5rBytKsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDNTeR9EoXaGZWR%2FyrcA9islXhGhhb54IVFAneVTf6jngd0%2FFa9sas28F5i07FaGvYnS3knJ%2FafKZfjFQwU1HMEiWGktEtIjUNF1zCEvD8x%2BM4j2to2V8YuiYZutaiUmn1uxVTaQnnPJJ4o%2BhZB7Bayd2TRqhX%2FvVpyJqG4LspT26YAb1ZcRjdHHabo2pkwRbgKlDzfqe3wx9Luspp0zZ8o4Yi0hphzOKxYxQBU5uMT1Y8InUcSYv0gpMdSQzgbGhIgT6BA48dAO%2FnR9RNhovS%2BWsGGWyPnFFdak6DrYid5fDk3O0NkmoT1SiRDvY2GtJoA1J3NkIE%2FSdXaSL1wYUGMapIaUq2Z5MA49uAlCxSKsj%2BcsWIpRQVTCOQjtzXT9%2Bn8nEU1ZDyYlarG1i6lKbUGPVj6BOZZVTuhLAbFgtf8GuwzFh5sUQw4lnkY7YhZJzyPdEmiE2noY6n%2FoDWBE5jOu4sTsgmeB75dl%2BEjHErIZcF5oui6P3Ga4k1m%2FclIg6RiGKqjEyEwZRYIywWs0yPdd6RURjVhtWM4dCCIMSJ9w0zDpSABGY1NUoAuV9GTITpao%2Bu8bofQLlqwT3%2Fkm2ChUHAZuZ5mRD4xfNXJsVDd2uENiK71VCwKAEP58FYLRMhAhuXMJWrs%2BMTcMP34lcUGOqUBIunsH8yi6D1%2BlfVEmxyAM5F4ns9kUEDxQyjFzuosdfVv%2FY3GVmvrcOSin4jB0CqSBT4oo91VW91Ucbc0HAcuA6ECCKzUp3aVSgu1lSerT%2BbU2XcBObZa9BNVARbmomwQ0QFpKUnBZ%2BioR8%2FgR5JbwclhNJcPhp90UO6h7JW%2Bdu2lVmdsrRa%2BnZykuStOnD4fMvhA0O9iPZ%2FU3gh5Ui51LiR1vbUx&X-Amz-Signature=d43c7ea18203357a97e12b699e92efb4916ca1f90a5bd86fc3838eaa2c3f55a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGVDRX6E%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFINmrL4v9AQmpxMAWAonS3BDBoMZWf8NbgRT2p0ay2PAiEA01cqhnNwIdt%2Fka%2BfFovF25HzCMaP99kIQdRz5rBytKsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDNTeR9EoXaGZWR%2FyrcA9islXhGhhb54IVFAneVTf6jngd0%2FFa9sas28F5i07FaGvYnS3knJ%2FafKZfjFQwU1HMEiWGktEtIjUNF1zCEvD8x%2BM4j2to2V8YuiYZutaiUmn1uxVTaQnnPJJ4o%2BhZB7Bayd2TRqhX%2FvVpyJqG4LspT26YAb1ZcRjdHHabo2pkwRbgKlDzfqe3wx9Luspp0zZ8o4Yi0hphzOKxYxQBU5uMT1Y8InUcSYv0gpMdSQzgbGhIgT6BA48dAO%2FnR9RNhovS%2BWsGGWyPnFFdak6DrYid5fDk3O0NkmoT1SiRDvY2GtJoA1J3NkIE%2FSdXaSL1wYUGMapIaUq2Z5MA49uAlCxSKsj%2BcsWIpRQVTCOQjtzXT9%2Bn8nEU1ZDyYlarG1i6lKbUGPVj6BOZZVTuhLAbFgtf8GuwzFh5sUQw4lnkY7YhZJzyPdEmiE2noY6n%2FoDWBE5jOu4sTsgmeB75dl%2BEjHErIZcF5oui6P3Ga4k1m%2FclIg6RiGKqjEyEwZRYIywWs0yPdd6RURjVhtWM4dCCIMSJ9w0zDpSABGY1NUoAuV9GTITpao%2Bu8bofQLlqwT3%2Fkm2ChUHAZuZ5mRD4xfNXJsVDd2uENiK71VCwKAEP58FYLRMhAhuXMJWrs%2BMTcMP34lcUGOqUBIunsH8yi6D1%2BlfVEmxyAM5F4ns9kUEDxQyjFzuosdfVv%2FY3GVmvrcOSin4jB0CqSBT4oo91VW91Ucbc0HAcuA6ECCKzUp3aVSgu1lSerT%2BbU2XcBObZa9BNVARbmomwQ0QFpKUnBZ%2BioR8%2FgR5JbwclhNJcPhp90UO6h7JW%2Bdu2lVmdsrRa%2BnZykuStOnD4fMvhA0O9iPZ%2FU3gh5Ui51LiR1vbUx&X-Amz-Signature=64aecf5faafb7aecea48d114fed47ce28f595c64002416bc49f6be204d57f462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGVDRX6E%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFINmrL4v9AQmpxMAWAonS3BDBoMZWf8NbgRT2p0ay2PAiEA01cqhnNwIdt%2Fka%2BfFovF25HzCMaP99kIQdRz5rBytKsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDNTeR9EoXaGZWR%2FyrcA9islXhGhhb54IVFAneVTf6jngd0%2FFa9sas28F5i07FaGvYnS3knJ%2FafKZfjFQwU1HMEiWGktEtIjUNF1zCEvD8x%2BM4j2to2V8YuiYZutaiUmn1uxVTaQnnPJJ4o%2BhZB7Bayd2TRqhX%2FvVpyJqG4LspT26YAb1ZcRjdHHabo2pkwRbgKlDzfqe3wx9Luspp0zZ8o4Yi0hphzOKxYxQBU5uMT1Y8InUcSYv0gpMdSQzgbGhIgT6BA48dAO%2FnR9RNhovS%2BWsGGWyPnFFdak6DrYid5fDk3O0NkmoT1SiRDvY2GtJoA1J3NkIE%2FSdXaSL1wYUGMapIaUq2Z5MA49uAlCxSKsj%2BcsWIpRQVTCOQjtzXT9%2Bn8nEU1ZDyYlarG1i6lKbUGPVj6BOZZVTuhLAbFgtf8GuwzFh5sUQw4lnkY7YhZJzyPdEmiE2noY6n%2FoDWBE5jOu4sTsgmeB75dl%2BEjHErIZcF5oui6P3Ga4k1m%2FclIg6RiGKqjEyEwZRYIywWs0yPdd6RURjVhtWM4dCCIMSJ9w0zDpSABGY1NUoAuV9GTITpao%2Bu8bofQLlqwT3%2Fkm2ChUHAZuZ5mRD4xfNXJsVDd2uENiK71VCwKAEP58FYLRMhAhuXMJWrs%2BMTcMP34lcUGOqUBIunsH8yi6D1%2BlfVEmxyAM5F4ns9kUEDxQyjFzuosdfVv%2FY3GVmvrcOSin4jB0CqSBT4oo91VW91Ucbc0HAcuA6ECCKzUp3aVSgu1lSerT%2BbU2XcBObZa9BNVARbmomwQ0QFpKUnBZ%2BioR8%2FgR5JbwclhNJcPhp90UO6h7JW%2Bdu2lVmdsrRa%2BnZykuStOnD4fMvhA0O9iPZ%2FU3gh5Ui51LiR1vbUx&X-Amz-Signature=b63a29ec8b0c7f82f4ce57406e39e38414c2246fa6f5acdf605fa7f49b031130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGVDRX6E%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFINmrL4v9AQmpxMAWAonS3BDBoMZWf8NbgRT2p0ay2PAiEA01cqhnNwIdt%2Fka%2BfFovF25HzCMaP99kIQdRz5rBytKsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDNTeR9EoXaGZWR%2FyrcA9islXhGhhb54IVFAneVTf6jngd0%2FFa9sas28F5i07FaGvYnS3knJ%2FafKZfjFQwU1HMEiWGktEtIjUNF1zCEvD8x%2BM4j2to2V8YuiYZutaiUmn1uxVTaQnnPJJ4o%2BhZB7Bayd2TRqhX%2FvVpyJqG4LspT26YAb1ZcRjdHHabo2pkwRbgKlDzfqe3wx9Luspp0zZ8o4Yi0hphzOKxYxQBU5uMT1Y8InUcSYv0gpMdSQzgbGhIgT6BA48dAO%2FnR9RNhovS%2BWsGGWyPnFFdak6DrYid5fDk3O0NkmoT1SiRDvY2GtJoA1J3NkIE%2FSdXaSL1wYUGMapIaUq2Z5MA49uAlCxSKsj%2BcsWIpRQVTCOQjtzXT9%2Bn8nEU1ZDyYlarG1i6lKbUGPVj6BOZZVTuhLAbFgtf8GuwzFh5sUQw4lnkY7YhZJzyPdEmiE2noY6n%2FoDWBE5jOu4sTsgmeB75dl%2BEjHErIZcF5oui6P3Ga4k1m%2FclIg6RiGKqjEyEwZRYIywWs0yPdd6RURjVhtWM4dCCIMSJ9w0zDpSABGY1NUoAuV9GTITpao%2Bu8bofQLlqwT3%2Fkm2ChUHAZuZ5mRD4xfNXJsVDd2uENiK71VCwKAEP58FYLRMhAhuXMJWrs%2BMTcMP34lcUGOqUBIunsH8yi6D1%2BlfVEmxyAM5F4ns9kUEDxQyjFzuosdfVv%2FY3GVmvrcOSin4jB0CqSBT4oo91VW91Ucbc0HAcuA6ECCKzUp3aVSgu1lSerT%2BbU2XcBObZa9BNVARbmomwQ0QFpKUnBZ%2BioR8%2FgR5JbwclhNJcPhp90UO6h7JW%2Bdu2lVmdsrRa%2BnZykuStOnD4fMvhA0O9iPZ%2FU3gh5Ui51LiR1vbUx&X-Amz-Signature=ad9677ae5699eaa8545cd2bef23e1e54f05cc4b3fdcc70f5ec5cbcce8b680617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYGUU7W%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8Ze0oBDO6VUnJhuxO74rQ4d1buSnuEvOPZ2djXBTIOAiATQX%2B3U9SD18BDlKU3gbyKOECCyk8%2FlXc4EJj9wWJGZSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwAZALEU9k8TJY6tqKtwDQv2zTI7j7ff4xnFboBlBXy6CHpljEkFmb7kXrqMYT7aiPFO%2FMO5XtSIpZ46Qd8HgaSGU5DChv3340h%2BDSxw%2F%2Bv%2B7iXQ%2Bd4nFeUPVef9g%2Fcrqzp6zPB25ccz%2BNZ85rI0MhT8avtaZTVM%2F%2FS1ePNd4VlAHHJL05%2F2VHyzkerf5Hux30LzkyOvb%2BIC7YCURtB3Oem6UTUiQ5muK3row0pFx3tsT5yeFCs4Ctpoe8l%2FJkOxa3fYQlInqRyCOE929vw3uUN2mjRN25qr%2BPPMznCV1vxNItosdWjrYpV%2B%2BAAk96FEaEPYCsea%2B4KvS%2B6hTjVjmSuwD68Yr5qUwVySQhCvf%2FVyweL7fDu9fvi9%2B27F%2FQCLUZ5FBsunulNFYsEwHNkQIO4zsi%2FnBZpvJobIrO5v6cRCcNg2yPX9nhhGfEU4wta1JkNjfQBtg75yRbJa%2F3XXJOrQBDD5xu4qzJgHK0UvDuB9jIPnqBJZxvuZSUlY4uaoeFL6sZBaiqeDaNiank9B0M2%2BoeQn0jF6VCN3gUuP1DxvajwkpIbOj39HQ%2B1OnlB3UTuH1NfxNoBgkNfiuSn0vgnFOlIfadW7y12LF8CK9opFdmjyqOpRzp57rDg6%2BR04PGPyq%2B5gtH8fngFMwr%2FmVxQY6pgFJlftazOybXntbLb6h16yKXlog4RZcm9SFfs2%2F3yK%2FtUzYhomPstO0cR0CRGCWJW5LRYhNLuDnqqYg1YL0J41gfoISHKYUs5ImgMxqQ4RKqeSVDLWsXrzJihvKHVgEKsTQEmvJKHRFQfm3wMHqvi3OGDbdWWon53EZqgVGN2j8ENxtWBuUemBRyNWVgJAYRnENIgcboBbbd7YANkDPH2AkTCvQ3cHc&X-Amz-Signature=775bde86a0d47b644f576dab0eedeb883d788067ed6ea632de322252f348ed33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRWXX4AZ%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB36KrJAHF%2FrS1zsdwXP51IDOSOduIabyfX1zcKmRBl%2FAiBZxFyCt1%2FOcj6PxFcAIaUXqnq4t0T7mDTd1Zct56fg3yqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV9e8RKjDeyC82Bu3KtwDLu%2FRNYlLXoNY08ydZp85YUpUW6GLkyf1hKYAdTApZEtFyGC1%2BDjXUHSORwIYDoWXiNW%2Biq0pOJQ3XyM7fOH5g%2FzFjF%2FEyUmPZGetuWVW89VvM3kLvvoeUTn6VLHPUDgrTnyYkdDEPhN05yTXLc5103VlWjhMYsq8NKmLxhtisvje8CpvDpKJxKIej1Yj4hD04Vtmns%2BV3sg0lWF419Ao6hsJgYXNsFh%2FJ%2F6Pn409pyIFrFZ6ynBp924%2F0JlM%2Fw5DZ%2FAx2c0lrtu%2FzP5iQIEAE3zm1E79SaGDPtFav5tjrPAFdMxtY0wScyAx52Z2lqmYj2g%2BN4AXcuEy4N9Ai4XDhm%2FU%2FRJO4UPV7cXbOz3r3jMYukjDDAriDWsNdba8i1AnCcZpV3OzkfP094vPekX9q%2B%2FR52EKQk5%2BA%2BXHuDbb3JhzwAVIibiwBdqJ2XD7KhyaCjfelcfid9FZXpqlSNIezpCwX42V5V8b0FCR80%2BgsTJ88S3vOc2fOjWwxGOUs0a2IjN6UI49WiiMeVs5pZsASZPR91YX4ayeDIoESxpUnj4oV3hs0zatKZnyUsZBuMtKVaj8NVCnqmhU2Dahv0wXbrzf%2BxlED9FdTi5szQf1ZrX87LyHxEkyaYCrG7kwj%2FmVxQY6pgF67Nd8sw3X%2Bdbl0zRU3SJPZH3o9RFzciU4WKZKOG9jjqUKjJmVFqdxrok4F1AsWa6HKoiGATvvkwW9SOK5Ugm%2F4mLWCDfK1fLQ%2BcLsK%2BXe7GPCGotYEbCIntYd%2Bx08RbKRySFSjWqAl1lDG9uS7niwn91Wbc3FNHTGC%2FD8VOYTk2sIfm7Zrl4QfvjwJ1LKT9xRk5L0%2FWbRG22ifcNghGy7b892lvr6&X-Amz-Signature=c0356df92a45ecd87c04e7f9d1f3aa02765ddd75c1c55363ce377a2eb6414bae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MRBXCDT%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfIln7pzqzXtN2z9pPJNdxLOseOMCoEAQc9hHK2qdjuAiBfDY1ZoHpUrxyehQX9EocmN%2BkNXxV6VNp4911pAP2hSiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzi0VL7Zj%2Bq72OqNFKtwD7PDETTO3hALKl7c2g7ENMtCBXOsxrEJTBnjf9mXGIRxHnoqCSERhx72mVQwD3%2BEtiRXwGgBxEb4CI4adi2OHDsuhY11h1osyaMC%2BAW69WRMmcBmDpGWlGRGrZltmtBJPNptnJT2j9Fez4g2zhUJLLRRnqFymmE%2FhPPNgrB8oG6ZrBmB9gQb7aED6NTGm9amXs%2B%2BHMXluVUblfSgctDs%2Fd%2BIPPrnvQn9CopddwqETEQPd%2Fsj4Jck2J4J9CcH2PmX63jiVywVGUg5zfRnD%2FGD9Eg0aVo6Lj%2FOGGyjRW1l8pFAoFT%2FUuAcwm8KXMiz%2BwPpGampENILB5b7oLlPW9jayZo3JQUHkL1xXPmf%2FRE2l4b6AghOZOb3YeRfxDNNIwjdaunFcxJAwk%2BhhtSW%2BVdmU3vMAYYswgLz4tJSDKFe1My3ZR5sdk6WSpIRrix5DJgJjgtaNzp1W7bH3mTVe%2FgxTfzywVzMlQlxrO%2Fohp%2Fz%2BpXxRKWqn8ZM1hRK2xnjbFNR7ihaJVnudScfds06xHmHzR4BEXtTRYIt47GupiiX6v1ekfGmLNoNBnKskr%2BFf2ZkEv%2BtEIc5Nxnxt1Q%2Bk4Z3Un3c2X6TOT5vUZuWT1Dc1JD5yZPOlQGI7z0%2B%2FUYcwyvmVxQY6pgG%2Fm8A2EaCSsHaTGfkE4Weq9UmQkUNTmEhR4wixu7UPhB1BLS5bjuhGYfuGi7rSEmwlSnIv%2BXMigaU6jz0JgpqIl3asD56RH2mIulvkQc60Rf119If7duOtaCbYMvD7Xr6kE2i5xvde4PMxPzvSFWRSKsLu%2Bj8g8SpjqADhjY340P6j8B5K2MDJDrT%2Fj9kiAP4ymw8Lv%2B4yHmfR20Xm4ocW%2FGDg4jPf&X-Amz-Signature=359492e9ca8b707479cfbeefc0b672ab1ae1a8d7bfa0f32a692ccbb17022ac02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGVDRX6E%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFINmrL4v9AQmpxMAWAonS3BDBoMZWf8NbgRT2p0ay2PAiEA01cqhnNwIdt%2Fka%2BfFovF25HzCMaP99kIQdRz5rBytKsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDNTeR9EoXaGZWR%2FyrcA9islXhGhhb54IVFAneVTf6jngd0%2FFa9sas28F5i07FaGvYnS3knJ%2FafKZfjFQwU1HMEiWGktEtIjUNF1zCEvD8x%2BM4j2to2V8YuiYZutaiUmn1uxVTaQnnPJJ4o%2BhZB7Bayd2TRqhX%2FvVpyJqG4LspT26YAb1ZcRjdHHabo2pkwRbgKlDzfqe3wx9Luspp0zZ8o4Yi0hphzOKxYxQBU5uMT1Y8InUcSYv0gpMdSQzgbGhIgT6BA48dAO%2FnR9RNhovS%2BWsGGWyPnFFdak6DrYid5fDk3O0NkmoT1SiRDvY2GtJoA1J3NkIE%2FSdXaSL1wYUGMapIaUq2Z5MA49uAlCxSKsj%2BcsWIpRQVTCOQjtzXT9%2Bn8nEU1ZDyYlarG1i6lKbUGPVj6BOZZVTuhLAbFgtf8GuwzFh5sUQw4lnkY7YhZJzyPdEmiE2noY6n%2FoDWBE5jOu4sTsgmeB75dl%2BEjHErIZcF5oui6P3Ga4k1m%2FclIg6RiGKqjEyEwZRYIywWs0yPdd6RURjVhtWM4dCCIMSJ9w0zDpSABGY1NUoAuV9GTITpao%2Bu8bofQLlqwT3%2Fkm2ChUHAZuZ5mRD4xfNXJsVDd2uENiK71VCwKAEP58FYLRMhAhuXMJWrs%2BMTcMP34lcUGOqUBIunsH8yi6D1%2BlfVEmxyAM5F4ns9kUEDxQyjFzuosdfVv%2FY3GVmvrcOSin4jB0CqSBT4oo91VW91Ucbc0HAcuA6ECCKzUp3aVSgu1lSerT%2BbU2XcBObZa9BNVARbmomwQ0QFpKUnBZ%2BioR8%2FgR5JbwclhNJcPhp90UO6h7JW%2Bdu2lVmdsrRa%2BnZykuStOnD4fMvhA0O9iPZ%2FU3gh5Ui51LiR1vbUx&X-Amz-Signature=cd233fb7d99d22b90cf3eb99857ec55ecd0b1990959bb8d07bfd616ef1877fc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQIVCBRB%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCURAGaaBRvJc%2FjXTLS%2B0NLQL8R%2BAIpP5MiSav16fRsdQIgMObpnRKQ8%2FDP4Pmj6J349x0tY8X%2FMAyo8GgOTQ6f3dkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJPu0qZtl%2B7KV0XYircA8%2FYTDHhE1fFO7%2F5ZFc6Cig1TMUY8HSDNVJp4UlJbcxF9BerH6fkZrEDJs2riDxctLA1aBoieQjTywTrb33zcs7xUJ4plLWy0QSy%2BlKxr9VxneDrEz%2FwIJ2jP7zOJPo9cFl8S1qRAYu2l1B65gErBOqgf9cYyCdabZxjTIu63%2BqsKtYqFXGr9fh3tDyiWilGhpnhLiv6h77w2Oyy6JD7ef4aqCyvUJ0Ul6Abb5V8fCLTqb%2B9ZfYXdLE7q%2FH7KAkILSp5%2F7HmSV0%2BpDcFjdII2nzug%2Fll5RwMTV61xZT1qThFdXVUXI%2BvbbmiXjH7Nb4YUh0x3qtY%2Br%2BqYNfL4QmFyf9kFuWjXG9LjfMvv4ekPFmefyUQkIXJkDscZAF7MptTTJsalsWu8dUMPnPjAWsQSLq39DonpHkR9F0yvLG6Xdbf2hyGU54GcKfo12RFgPznMdwtSoWQ9i8pfEkXVYOD%2FXJMZLSBn6cyo9%2B5SI0Az5KvsPX0y%2Be%2F6qcGLGCD7FB8svpVYPC7qtOkRt%2FKd6H0FiehmQv0XoxUm%2FOLEOM%2Bi%2Br0Jjjg4AKxi8Y58yfauV4I%2B%2BCuq1ErS35L961rg1miomApLQb%2FqcsKVoeevSub1dZU0JANBtPy40p3vKroMKn4lcUGOqUB5S9%2FBa9reFKbAMBd6zowhaE2kv5OePvMQagETxX2Q8lVb69i8t%2BsZdIrF4angDJBVKVuXN92l1Yz40En8OnXUXiwsxC6jZ28ykbSf4GRYVxLoFiPuVQCzo%2Fd9el58iuDKMpx7FcOL01YC%2B9B9WCV8xJjbQC9CnW5u7qF3mdI%2FUHLS26tM3CmJErsZo6THZ1wkGdKC8EfO1fPkNrKK3u7xS4JPG1J&X-Amz-Signature=0ce272695d5ba689a3a555f19f3499bb7b501624aea84e3626d86a4dc4754718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGVDRX6E%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFINmrL4v9AQmpxMAWAonS3BDBoMZWf8NbgRT2p0ay2PAiEA01cqhnNwIdt%2Fka%2BfFovF25HzCMaP99kIQdRz5rBytKsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDNTeR9EoXaGZWR%2FyrcA9islXhGhhb54IVFAneVTf6jngd0%2FFa9sas28F5i07FaGvYnS3knJ%2FafKZfjFQwU1HMEiWGktEtIjUNF1zCEvD8x%2BM4j2to2V8YuiYZutaiUmn1uxVTaQnnPJJ4o%2BhZB7Bayd2TRqhX%2FvVpyJqG4LspT26YAb1ZcRjdHHabo2pkwRbgKlDzfqe3wx9Luspp0zZ8o4Yi0hphzOKxYxQBU5uMT1Y8InUcSYv0gpMdSQzgbGhIgT6BA48dAO%2FnR9RNhovS%2BWsGGWyPnFFdak6DrYid5fDk3O0NkmoT1SiRDvY2GtJoA1J3NkIE%2FSdXaSL1wYUGMapIaUq2Z5MA49uAlCxSKsj%2BcsWIpRQVTCOQjtzXT9%2Bn8nEU1ZDyYlarG1i6lKbUGPVj6BOZZVTuhLAbFgtf8GuwzFh5sUQw4lnkY7YhZJzyPdEmiE2noY6n%2FoDWBE5jOu4sTsgmeB75dl%2BEjHErIZcF5oui6P3Ga4k1m%2FclIg6RiGKqjEyEwZRYIywWs0yPdd6RURjVhtWM4dCCIMSJ9w0zDpSABGY1NUoAuV9GTITpao%2Bu8bofQLlqwT3%2Fkm2ChUHAZuZ5mRD4xfNXJsVDd2uENiK71VCwKAEP58FYLRMhAhuXMJWrs%2BMTcMP34lcUGOqUBIunsH8yi6D1%2BlfVEmxyAM5F4ns9kUEDxQyjFzuosdfVv%2FY3GVmvrcOSin4jB0CqSBT4oo91VW91Ucbc0HAcuA6ECCKzUp3aVSgu1lSerT%2BbU2XcBObZa9BNVARbmomwQ0QFpKUnBZ%2BioR8%2FgR5JbwclhNJcPhp90UO6h7JW%2Bdu2lVmdsrRa%2BnZykuStOnD4fMvhA0O9iPZ%2FU3gh5Ui51LiR1vbUx&X-Amz-Signature=f9303f6ccd68e7343ff74aa63816e231fd7d5805bf3a284b5a4f69c64087117d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIXFNHCB%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfP8HhmWEjJAjcqy40LZAiRBcauJ1hcKf%2FOlJHgdLMbAiAyWZStLLk9sZnxzqQxZuhcdMyWcZP%2FaiGL8DaLc2jEpyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5cgzshuo3cR92jqAKtwDzz9RXOn2oBxuZhfBFwnstz%2F8UWrikd1Yi%2F00uaO35l02X1UkrwApjMkojip%2Bv1Y1uU4HjGrcwI5nWWVPYQJmWydKWPwuVk4l5xVaPsmYIPh8cQ55aY5lTk31cIBViINCri61ceW0ZMg1DM8xZNScwaq94l%2BgDwpi959xUna4zGBs%2BkNOV8gf1%2FjbQYvIdBhc0K6C41CHd0IArUk6Kc0yCniffT%2FPbWOcL2NkgYk2pujj2GQlqE7eiYFieyb2oyoO7hR5e2aSKKl%2Bpdym3wSZt78UDiMik0Fy4HOqS72eVbTSKp4MktfZA77%2FuDFceLhbh0WC%2BwfF9vQJHsazIP9D1M3HkVNzF74J5XBEkgq9y2jgQMvv7hMfzIgZIrjPSxV%2BX40OhfdYu3zvpRneVSmL8Aa7%2F2diH%2F67MWtZwzKS1TLmVnpVjFs2zKUD%2BlDh7eTiuasMhFXEamX5WO9QT%2BYcYcjYw0rF68bXPMFx3yRwtoIqA61u5t5yOEuLM9aBrrnt2pGM5jsU8z9uBBq2Qt6TkNyG9sMo9g1OlWLTw2ZBAY2vtErZJI2rXae4pM3gP6nOvt6kZQWR4n0vBLTi4a1N8CxEB23QwYjq7hfCJocmu37wP1io%2FKV%2Fs%2BWkigUw2fmVxQY6pgFMyvbFJpluJX%2BUneA8YkBwE4klPFRlFAI2Bb4ZipGk8VFRNPEz3GdTWO8thcmjrTmkmwoIn9NEcaTzP8SajAP7MPsASoDIYgmpSYr0RtEFmE4QaIO4CiUFZbvdX7m%2BoGIB5l8U86NtLxDhofzdHB7D%2B7PseiORVZWtD%2BX96Uqb0c4ig0Pvg%2Frc%2FZcq6BNcj64%2BWEs1NselB7d0wYJ95BnpzdkjY8TO&X-Amz-Signature=d6cf17dcd3d3d4075bc701dd5aff84e0d2efad9f5443ac01e91e9fcbd81379a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGVDRX6E%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFINmrL4v9AQmpxMAWAonS3BDBoMZWf8NbgRT2p0ay2PAiEA01cqhnNwIdt%2Fka%2BfFovF25HzCMaP99kIQdRz5rBytKsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDNTeR9EoXaGZWR%2FyrcA9islXhGhhb54IVFAneVTf6jngd0%2FFa9sas28F5i07FaGvYnS3knJ%2FafKZfjFQwU1HMEiWGktEtIjUNF1zCEvD8x%2BM4j2to2V8YuiYZutaiUmn1uxVTaQnnPJJ4o%2BhZB7Bayd2TRqhX%2FvVpyJqG4LspT26YAb1ZcRjdHHabo2pkwRbgKlDzfqe3wx9Luspp0zZ8o4Yi0hphzOKxYxQBU5uMT1Y8InUcSYv0gpMdSQzgbGhIgT6BA48dAO%2FnR9RNhovS%2BWsGGWyPnFFdak6DrYid5fDk3O0NkmoT1SiRDvY2GtJoA1J3NkIE%2FSdXaSL1wYUGMapIaUq2Z5MA49uAlCxSKsj%2BcsWIpRQVTCOQjtzXT9%2Bn8nEU1ZDyYlarG1i6lKbUGPVj6BOZZVTuhLAbFgtf8GuwzFh5sUQw4lnkY7YhZJzyPdEmiE2noY6n%2FoDWBE5jOu4sTsgmeB75dl%2BEjHErIZcF5oui6P3Ga4k1m%2FclIg6RiGKqjEyEwZRYIywWs0yPdd6RURjVhtWM4dCCIMSJ9w0zDpSABGY1NUoAuV9GTITpao%2Bu8bofQLlqwT3%2Fkm2ChUHAZuZ5mRD4xfNXJsVDd2uENiK71VCwKAEP58FYLRMhAhuXMJWrs%2BMTcMP34lcUGOqUBIunsH8yi6D1%2BlfVEmxyAM5F4ns9kUEDxQyjFzuosdfVv%2FY3GVmvrcOSin4jB0CqSBT4oo91VW91Ucbc0HAcuA6ECCKzUp3aVSgu1lSerT%2BbU2XcBObZa9BNVARbmomwQ0QFpKUnBZ%2BioR8%2FgR5JbwclhNJcPhp90UO6h7JW%2Bdu2lVmdsrRa%2BnZykuStOnD4fMvhA0O9iPZ%2FU3gh5Ui51LiR1vbUx&X-Amz-Signature=9e4376f95ed7ec1c62a7ff0545263e6e91477ac7aaee2c10bf77cb9abab9e65d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRM5FRLE%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH3Kw%2FxLuklQ6b1yZ0AlJjstFThLJVu3cAjrWWMQnqzMCIQCkfE45HMRXWPhWziQ%2B8o%2F%2BzgU3VTulosLJCpS8gO9nySqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz2DRP7htGjNA%2FAg1KtwDvRuHxweYyXY35QK8yq9lPFp2Qm2HWPaTGDj%2B1Atv4fvFeCbz%2FQWkEKMBtSSNue4QgmesqbBysOCYIWwU%2BVqYqFy4m4khu3gnFlDvPYZzByOvB1%2FgolQip0mlQ6bdJC05o9LsYMEphwc4cukLgLShlcSH8ML9xvitrShm4AVRG5F1dTh3g10GEaf6SDkvNgFbSE34SwiJn1MybZuKH%2FoGkA%2B%2BaBrAkt1dvI%2BhpleYqTG7%2BvDOOIYqn%2FBoLPTvwGSGMytb8gzxkti52pPEucAVv8EamePwMaRrnRjhhJXaRslw5JdNlMovox70GAtU94rszirWZsoqqOlZVefs2wDB92MmjOsem33JF3L25IWz%2BOLX5jLXVNgqJDbm7vow1UDXhMSkrBycSfxevKFjv8uOrFn8Mq5dysTam5rJVvLNQSchUSKj%2B72xgSnbDMHIfT7Tep84ts0ZEIfu4WHQot0cOJeruxGKz7RP3HCv7VFrij1vZXU0OzEyJB3RggfBJoBVaWBjeuVP3selm8JBO3xCysTGKg0NerrRWi5kUGElP66%2BJN9nWy0F%2B1h7uKO%2Foufp7l21GGFfP0J61wVwNj3DUd%2FCNpWnDOu1TImmRJt77gzb25uJ7b16gHE4USUwwPiVxQY6pgEuA7hu6OZ%2F4X0nv3RUR18XaDU4apLAgZUBMx0r1x%2BbN2i62IlTxoIPu6EtY1ExEN5qiuz2Da2RniXbXHPcM2m4dAdl7THAP6UvyxotXb%2F%2F7qnZv46JiABrl%2BSIusRAuOS35q6loEl0JwhNRP4704H56r3r6Xh0krx3%2FCRWHpaXJqaKnKU%2FKRgNVG3h2PrR%2FeqMdx3iI%2FUWNWYG%2FcvK8ZbfTOBeBrXr&X-Amz-Signature=3ce3274b80ee281a61523820b689967373c9125add0d30605c776075bf7cfe83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGVDRX6E%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFINmrL4v9AQmpxMAWAonS3BDBoMZWf8NbgRT2p0ay2PAiEA01cqhnNwIdt%2Fka%2BfFovF25HzCMaP99kIQdRz5rBytKsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDNTeR9EoXaGZWR%2FyrcA9islXhGhhb54IVFAneVTf6jngd0%2FFa9sas28F5i07FaGvYnS3knJ%2FafKZfjFQwU1HMEiWGktEtIjUNF1zCEvD8x%2BM4j2to2V8YuiYZutaiUmn1uxVTaQnnPJJ4o%2BhZB7Bayd2TRqhX%2FvVpyJqG4LspT26YAb1ZcRjdHHabo2pkwRbgKlDzfqe3wx9Luspp0zZ8o4Yi0hphzOKxYxQBU5uMT1Y8InUcSYv0gpMdSQzgbGhIgT6BA48dAO%2FnR9RNhovS%2BWsGGWyPnFFdak6DrYid5fDk3O0NkmoT1SiRDvY2GtJoA1J3NkIE%2FSdXaSL1wYUGMapIaUq2Z5MA49uAlCxSKsj%2BcsWIpRQVTCOQjtzXT9%2Bn8nEU1ZDyYlarG1i6lKbUGPVj6BOZZVTuhLAbFgtf8GuwzFh5sUQw4lnkY7YhZJzyPdEmiE2noY6n%2FoDWBE5jOu4sTsgmeB75dl%2BEjHErIZcF5oui6P3Ga4k1m%2FclIg6RiGKqjEyEwZRYIywWs0yPdd6RURjVhtWM4dCCIMSJ9w0zDpSABGY1NUoAuV9GTITpao%2Bu8bofQLlqwT3%2Fkm2ChUHAZuZ5mRD4xfNXJsVDd2uENiK71VCwKAEP58FYLRMhAhuXMJWrs%2BMTcMP34lcUGOqUBIunsH8yi6D1%2BlfVEmxyAM5F4ns9kUEDxQyjFzuosdfVv%2FY3GVmvrcOSin4jB0CqSBT4oo91VW91Ucbc0HAcuA6ECCKzUp3aVSgu1lSerT%2BbU2XcBObZa9BNVARbmomwQ0QFpKUnBZ%2BioR8%2FgR5JbwclhNJcPhp90UO6h7JW%2Bdu2lVmdsrRa%2BnZykuStOnD4fMvhA0O9iPZ%2FU3gh5Ui51LiR1vbUx&X-Amz-Signature=294b92f7eb367cc898326703e58819314c84d62e720757db00bb5b2b6c08ef40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWDSK4YG%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxhGSBpooLaX1mVWJkK%2FMfMQdn2k4VLgjubbj%2F1NSTvAiBxkZ2%2BGqRE1MyfJPyox4WD0sJKXVXFZmKRdhYmYyXsOiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjhdf4%2Bw65ap5xjQWKtwDexlhdUNhAYkPtcKEB76BYzdOwhYIxsv%2F4eHi3WNgbnipJHtwGH1VF8C9LOn3pufe%2FvLAwnOD%2BdNl6y4FmxxC84w%2F1hZ9UKl%2Fr%2FLzjcjbTzhem9zHlrIH8vtaz%2BSwcuU%2FRZmI9R9%2FtsM9BVM139UrGmKHF8GfXbOTe6mcN3qRx%2Bg7e10iHV533tERKntWuBXIQI9BXTAlz6MGRvzQZZPM1X%2BRVI%2B3vwMkx06feXTIq8DoZXNt8PaznwWoUKWjGDGIvy3xBggvPbS8DxDkl%2F60567NcV6Ux296ciohMjS8Eliq9xa0KKTGjs8INzMfQ4n9CBJmxKeNXAGwGtfy9kzmffzhC3hWD5DQrVYq07sDRMwQoP%2BoQRaxHkWra8RB385%2FgSMwJAU%2FjcHVoMT1o4tiX8hHppY97h60b9VfeDYA%2BCVaHy51OI30WQvMfEznbRl37Hfqqzfu%2FLc8%2FMTpDPDmOlaQstwViWnKIrM4cVwMVEFxoUIvtUeZ7s7KMRl6tJwHmPd8SajHi4L0sBZ6RNes9WVcYSkd8Pg86zc3n1bu0GQYHapTuCGFKGdBtfo2l2U29hg041A7%2F5%2FwfxROin%2BuGpkc%2B895rj5hFiJylqgei%2F5lhsOhZZrQFWnrA04w%2BfiVxQY6pgE12EX173Vg3xI7%2F%2BCD%2BY3DIPYxa3qKM2ck1mk10EywSykiGqEI%2FfvUTMGkMAAIQsJ3%2BN0VCePwK83jb15HcEPPG%2FZqZjQMmBrn%2FqFCp%2Fy%2Ft03Dvfg38sw2kNAlVhX0OtH0Au%2FCBtP1RBkuZARyR0V%2FXDKZ0yLYmp2UmnDbj9NkmxzZonYyAofOoQ01Qd9pCJmA88%2FxIiPdhmSPNPr4tQ8YarHchI5B&X-Amz-Signature=cdcb8c0de661dedbc2dc66223903c65e4fd808b8b79b29c046a0bde743e61a94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGVDRX6E%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFINmrL4v9AQmpxMAWAonS3BDBoMZWf8NbgRT2p0ay2PAiEA01cqhnNwIdt%2Fka%2BfFovF25HzCMaP99kIQdRz5rBytKsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDNTeR9EoXaGZWR%2FyrcA9islXhGhhb54IVFAneVTf6jngd0%2FFa9sas28F5i07FaGvYnS3knJ%2FafKZfjFQwU1HMEiWGktEtIjUNF1zCEvD8x%2BM4j2to2V8YuiYZutaiUmn1uxVTaQnnPJJ4o%2BhZB7Bayd2TRqhX%2FvVpyJqG4LspT26YAb1ZcRjdHHabo2pkwRbgKlDzfqe3wx9Luspp0zZ8o4Yi0hphzOKxYxQBU5uMT1Y8InUcSYv0gpMdSQzgbGhIgT6BA48dAO%2FnR9RNhovS%2BWsGGWyPnFFdak6DrYid5fDk3O0NkmoT1SiRDvY2GtJoA1J3NkIE%2FSdXaSL1wYUGMapIaUq2Z5MA49uAlCxSKsj%2BcsWIpRQVTCOQjtzXT9%2Bn8nEU1ZDyYlarG1i6lKbUGPVj6BOZZVTuhLAbFgtf8GuwzFh5sUQw4lnkY7YhZJzyPdEmiE2noY6n%2FoDWBE5jOu4sTsgmeB75dl%2BEjHErIZcF5oui6P3Ga4k1m%2FclIg6RiGKqjEyEwZRYIywWs0yPdd6RURjVhtWM4dCCIMSJ9w0zDpSABGY1NUoAuV9GTITpao%2Bu8bofQLlqwT3%2Fkm2ChUHAZuZ5mRD4xfNXJsVDd2uENiK71VCwKAEP58FYLRMhAhuXMJWrs%2BMTcMP34lcUGOqUBIunsH8yi6D1%2BlfVEmxyAM5F4ns9kUEDxQyjFzuosdfVv%2FY3GVmvrcOSin4jB0CqSBT4oo91VW91Ucbc0HAcuA6ECCKzUp3aVSgu1lSerT%2BbU2XcBObZa9BNVARbmomwQ0QFpKUnBZ%2BioR8%2FgR5JbwclhNJcPhp90UO6h7JW%2Bdu2lVmdsrRa%2BnZykuStOnD4fMvhA0O9iPZ%2FU3gh5Ui51LiR1vbUx&X-Amz-Signature=29a1a0298be00bac72632f9ded4b524976a53ddf564ced0dcba64ec8c3264ea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWANWVIQ%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkr9n%2F3i%2BXgDqoNvhu7mTnbPVtMsN50oCZx98fDF8HtAiEA46g%2FQdntgE11hLXZbI3qsHu0IsorpsVLRwp5cV09nDQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAR0DWG0N9hDOuy71CrcA1%2FXWZ%2BjKLQK01N1a427DEUl9jFmFrlbLRVgJ3j785EFPQPM5SjYwa9XpItYADUJA4HNhLWpD%2BmbwAqjttKkqKW0EcxqoBCoq8nN8tgJ6hKj%2BmhHwydDIlbj3RZDC94bPQ1zffpK68qiK5etZiOUoQYQ9x7J0c7JkbDeRmk%2F1dAQ9bwNMdzXL6TCXsje5kk8EJx340L2CaTfWxO9lRzZLckNHIrNFqAYbDfiwlAzNkbpzKQmxnku4d5woX9Fg0jDBOSqgCu5%2FOQxFgoLVU24vyU1NU8wRBegTjWJFxGM0ZWWvdi%2FS8S6n5eMbq%2FZUrXGuZ9csrmXpvfxm4LUbTNs85H0zhYfsvfAhKilgoyFd3OJIXQri%2BXaWYQrvuFaw3KPMpZsW1LvXxuMi4jW01gajNpDA6Ob1FUIZz7JNhM88Y5cKQ4NyrkzTzRwYqMpRl8uXyVphgCoIvKL0HQDCeirHO0trP0Kg1mYC%2BOb3QSM8QjDxGpVj6ac8tMUpokxY9%2BuxNNSwPO0k05Zz%2FteNsjvq54gzvzosoSaztBzb1bbNLfDWWVmsewCP7z26JgEWJxATQfNVYaCEzKpALy1Bij%2FafXMNCaTP%2BVG6OiFsZzObfmAc4JhDcD2sKqGBQYZMNz3lcUGOqUBz%2Fq%2FcCwXPfou0soBG%2B3z8AXKEA9KKzwwOHsz77d0yws07FcOFb2ioiLXSnSOwpZApxHPv9IYb1wigh%2BE1PXnw3bB%2FOQWMrBuaheKRNbxMhykPjEYKwBUrNyaKANjyOAWyKhIlGl0otEJKZMWDMAvOqXA%2BfPfVZtie6uCO0pVf00QW0AYRUScVPaNsatwA3TbKJ2qgqVwDW4VxP0jX6xwmwB6RjK0&X-Amz-Signature=041ba0f15f5822aeb0c63f1a45c5eac4495a914112c723ad8414e769e1d89fdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLH5OBVR%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCL9X%2BRVMLunPxIKkhb91GI3MalMIGtF4nkGxFocX9YvgIgRCtkBs0ZTh8Ux8371mfEzvkPJ1%2B0PCdq%2B4%2BwLoXdxKkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUxk0rZZ3fksMQAhSrcA8IYQxDuH%2BLgdeYK%2FJ2OG9813V0LvVKVcYjdwv%2B%2BNiCRnCkikBp4webm4%2F6cULQYUXHPZQranNJM4002I6wpL7nDyrxR%2Fv6ZIiptzHGAZpAAKI%2B8zPFEYyRtQzTNOfa5svkstvlB7M5J5kFWfwKSWXGidlnxBj3pTgWj8g8OU7UGaDsbj9BPahkGpf%2B%2BALxFQvYwYt1s%2F8UVWAG2ypHawlDIOHL07%2BfhvY7keZLM1qyhrH%2BwmzA2%2B2K5mT8SYZehz%2BHLu6nsLzSTF8F6ZyhZevJ%2FGU2qXh8IbpmjWO2vrwHZQKrBGtna4pB5%2FQUex8v6CXfbtzoGfIQ8%2B3IIAS5PS%2B8KcNG049lFb6utvypY2iB7uOPwrEtcqTvDG1Agl9swdehk3bIT9fqnCMjH9shyqs0yL74CH4m1ha9vGf85W5hjmXDNBf5kIsrMTF%2FM76l4iXsOhgbHwlG3vdkX6jSTUrPcGEUePFdk9pZSXJj9F8GbxXDOId7jkdLyHh77fK8fwZ5c%2FRm4KpYn2Bx1OcC8ngPfdaI%2FWU6s0xxmksUbLKrIAvWSxHKEmzAaI%2B0PP0hq%2FRUKj1QAHKvwOZnhQeVAOxPC%2B3Kah%2Bq01Kz9ksno40wsE8Dr1T702UXRRXWqMLD4lcUGOqUB%2FQdLOnR0%2Btu36S443UmJDgNGVIoRXtDHAq1yLNQ1xVMd3MxWjz7FZNwlIyCklapSrzwG%2BYv5jIpXNRFpMltmCtpr30JOqM%2BdlkfK4lOdcdxZiGaRWYm9W7u9GSgDSdG9MGtDIMgDHX6lnn26C%2FYvove3%2FsFEvYsooBFmPzrAMZbFVtoOjiZbK5bZ4KrTj3tdye0oMhjO67Vt6veYR2avyNAl863T&X-Amz-Signature=f048bb723e4dc9729e05a3383136491af9b0b7018b17bcb68ad1da5ddbd36eba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646HB6DAI%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvRxZHDU6xICz0juRwRxpKZpWRPCSazEhWWR1XHroj7AiEA1yG%2F68bckCIhxN1x%2FkXp2FfirH5fpSKZ%2BmDytPXIAAEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNRyc2Z5eaSQ%2BbgjSrcA2p1jZ6tTaSvCG%2FONZ7xWP2eWyb%2Fnde8IGs3hyOuTpkkbmc9eikZu29zSt5ICGaaZ6t1kD4QA2qAcY4sldaVhl4PYZsQ3%2BKeMhh5%2FH6zW7q8D3uepcUZV8qpaQPyHti9hYLLKeiA8tAB6jFgqvpWKjrmpZiH9g2gXQDO5R%2F7yUVeWSvTI%2Fi%2FFw%2F52JJcRCdMIwZ7%2Bm3NJdfpDUy86F8U%2FtsMXEFtVfjCXZ7ueS3omBLaZiFBk7LHiyuFsoY9P5Nue%2ByILnn9TWRSfipYRo8unGC54q0842cidl6yYlHwVK3HCAZiT91%2BNr%2FlyPGJn%2B2X1aFnyf88lvu7UV00C7SIfYeVkqWqAdp3gXxb5jKE5k3okJT7Uz3h3s1TpFbIovz%2BAoCI%2Fxn828dQrg36l7wKLtFBVlrsh0rO69YQo80ikhBuILXCthzNp5PSXnxHyexobSB7Sm8TaUQME0JDKLJdSwC%2FNCm2powlc0lIi73i5wA%2FI8tuf%2BRVNaHtiyF3KCPYNJo4xs0Yp2%2FsYBqccp9SdHE66iSFt9cSir89mk4rEJChYRmqQ7bWegIfQkaUrYuqDdsp%2FCWan3OzXqtpg9aQ78Kh2jj0moDawxApnzderTHbm%2F9uyhA%2FpqhxOXSwMNP4lcUGOqUBk%2BYpj0L7cNmLPjgkZ0qhmhDmekrhNedmDbsXQxDFhrKkXRCWCUo0gsKdq2oG3uv6NdpYCdUiGvWxTcKmE1cpk9cEmNkqUCHPLo%2BLnNDoIvN2m6mlq%2FFEenhRhZIDUuzGeqiSpQWvwW3uBNuCyZTorrdeChYNRWWHtvDkZ2P48xzbbC52mZz%2Bft668UG8kzxrYNy0EDVpZW5VqVA7g7x1HQwpn1FT&X-Amz-Signature=818e500f8c13fa0cbf2b931f8ed19bb45ba638b4b2d8651eb43f0bbe17254835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGVDRX6E%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFINmrL4v9AQmpxMAWAonS3BDBoMZWf8NbgRT2p0ay2PAiEA01cqhnNwIdt%2Fka%2BfFovF25HzCMaP99kIQdRz5rBytKsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDNTeR9EoXaGZWR%2FyrcA9islXhGhhb54IVFAneVTf6jngd0%2FFa9sas28F5i07FaGvYnS3knJ%2FafKZfjFQwU1HMEiWGktEtIjUNF1zCEvD8x%2BM4j2to2V8YuiYZutaiUmn1uxVTaQnnPJJ4o%2BhZB7Bayd2TRqhX%2FvVpyJqG4LspT26YAb1ZcRjdHHabo2pkwRbgKlDzfqe3wx9Luspp0zZ8o4Yi0hphzOKxYxQBU5uMT1Y8InUcSYv0gpMdSQzgbGhIgT6BA48dAO%2FnR9RNhovS%2BWsGGWyPnFFdak6DrYid5fDk3O0NkmoT1SiRDvY2GtJoA1J3NkIE%2FSdXaSL1wYUGMapIaUq2Z5MA49uAlCxSKsj%2BcsWIpRQVTCOQjtzXT9%2Bn8nEU1ZDyYlarG1i6lKbUGPVj6BOZZVTuhLAbFgtf8GuwzFh5sUQw4lnkY7YhZJzyPdEmiE2noY6n%2FoDWBE5jOu4sTsgmeB75dl%2BEjHErIZcF5oui6P3Ga4k1m%2FclIg6RiGKqjEyEwZRYIywWs0yPdd6RURjVhtWM4dCCIMSJ9w0zDpSABGY1NUoAuV9GTITpao%2Bu8bofQLlqwT3%2Fkm2ChUHAZuZ5mRD4xfNXJsVDd2uENiK71VCwKAEP58FYLRMhAhuXMJWrs%2BMTcMP34lcUGOqUBIunsH8yi6D1%2BlfVEmxyAM5F4ns9kUEDxQyjFzuosdfVv%2FY3GVmvrcOSin4jB0CqSBT4oo91VW91Ucbc0HAcuA6ECCKzUp3aVSgu1lSerT%2BbU2XcBObZa9BNVARbmomwQ0QFpKUnBZ%2BioR8%2FgR5JbwclhNJcPhp90UO6h7JW%2Bdu2lVmdsrRa%2BnZykuStOnD4fMvhA0O9iPZ%2FU3gh5Ui51LiR1vbUx&X-Amz-Signature=996a97fdc5ee572277bd5179dbee6fcf4ed950d18259988cd932d59272ecd79e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGVDRX6E%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFINmrL4v9AQmpxMAWAonS3BDBoMZWf8NbgRT2p0ay2PAiEA01cqhnNwIdt%2Fka%2BfFovF25HzCMaP99kIQdRz5rBytKsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDNTeR9EoXaGZWR%2FyrcA9islXhGhhb54IVFAneVTf6jngd0%2FFa9sas28F5i07FaGvYnS3knJ%2FafKZfjFQwU1HMEiWGktEtIjUNF1zCEvD8x%2BM4j2to2V8YuiYZutaiUmn1uxVTaQnnPJJ4o%2BhZB7Bayd2TRqhX%2FvVpyJqG4LspT26YAb1ZcRjdHHabo2pkwRbgKlDzfqe3wx9Luspp0zZ8o4Yi0hphzOKxYxQBU5uMT1Y8InUcSYv0gpMdSQzgbGhIgT6BA48dAO%2FnR9RNhovS%2BWsGGWyPnFFdak6DrYid5fDk3O0NkmoT1SiRDvY2GtJoA1J3NkIE%2FSdXaSL1wYUGMapIaUq2Z5MA49uAlCxSKsj%2BcsWIpRQVTCOQjtzXT9%2Bn8nEU1ZDyYlarG1i6lKbUGPVj6BOZZVTuhLAbFgtf8GuwzFh5sUQw4lnkY7YhZJzyPdEmiE2noY6n%2FoDWBE5jOu4sTsgmeB75dl%2BEjHErIZcF5oui6P3Ga4k1m%2FclIg6RiGKqjEyEwZRYIywWs0yPdd6RURjVhtWM4dCCIMSJ9w0zDpSABGY1NUoAuV9GTITpao%2Bu8bofQLlqwT3%2Fkm2ChUHAZuZ5mRD4xfNXJsVDd2uENiK71VCwKAEP58FYLRMhAhuXMJWrs%2BMTcMP34lcUGOqUBIunsH8yi6D1%2BlfVEmxyAM5F4ns9kUEDxQyjFzuosdfVv%2FY3GVmvrcOSin4jB0CqSBT4oo91VW91Ucbc0HAcuA6ECCKzUp3aVSgu1lSerT%2BbU2XcBObZa9BNVARbmomwQ0QFpKUnBZ%2BioR8%2FgR5JbwclhNJcPhp90UO6h7JW%2Bdu2lVmdsrRa%2BnZykuStOnD4fMvhA0O9iPZ%2FU3gh5Ui51LiR1vbUx&X-Amz-Signature=1a2a4efca3f8d11a423792f694346dadcb209b4fe90892626f34b890aa7a13aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZVYOKYK%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWihWvdDF%2Ba4Xn%2FgdYLTeoDR6VKfMH1YH%2BT4ZMIRoI%2FAiEAn4CdC1zVzfjmi%2F1paKKcWPMamdAVVJBMdPq9SYkCKVsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3QKm2F6RSfcFgpiircA%2FrZ4kP5a%2BvX4Ggb1laSUOgyQlSFAzux0mPteA7%2Bq9eBuN07nYacMD2iogcUO0DQrn3ox02aBoYpk4t0vZqGf3DV1En3AZGmeU5v1wBq%2FKsqn6z9yWT0z4OmI52liB0DrvydiRdxyVinBm%2FgVfEfsvIKzZZn7LoBJtgqJ38uJfsIwj2jRoFdmIxwwTh1IpwBgCoGiaeG6vWtWt1dFzDO%2BfsUoE0pVECTbvSeUYzvbBahYN6Qy5xujRYUCypKwcELU9IZ1HzSQxNPHxVhem0qhTRVYhjXdJ5RESIvglYZpwIH6mWH3t3%2BcDUO4DIRMg8OS9kKk9YCHpMJTcH%2BCTB%2Bz3i3fQC7KU53W1eWKIf1bqdVH0hBZ3TABJyXcNpZ9q3QHcjuthu4%2BGgLckPF7z5kyAVeG7NmyKe9JHV56W0xOAJH%2FSV8tA%2BTJwAltaMYBY1PZMjAHKF6SmRyCKN2HarK6wytQVNIB1WwCTICN%2BtT0w0h0cgg01DGvySb4%2FV91xLMe0ahgfHsNoEafb3zEILlUKCZrabqBWivGSAIquwBSjyKUS8K9zS2OkkeZ3qtnY2sgetoGyE3JwqjQnMulAfZwpon4bb7r30DLWSWSe9HE87ErhBUcpSDj7Wz4BOzMJf5lcUGOqUBq5%2FCpXV52qTbpcsPRgYvzXemHBAZ3jCpDHy7oZcCnKnranbghj6urnyxAewmH%2Bh3htsdILptaP%2FPMG25tyP378SK6hh7WCuRGkYjEYpbq2CM3RqGba%2BpYHdVYIzIZX9Cg%2FHjzUMm4GneX%2Ff8y1YJHjqRp1XztauWik%2BIKXdX4VZJLga8lFek3i2%2BCr6S%2BfAMHDhfQZRHW5VwjtcDsYk4%2Fenpz5i5&X-Amz-Signature=0da21ff0c1180cb14a230a3a4370e1dc4e83f38afbd52b3ded8db0872560478e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZVYOKYK%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWihWvdDF%2Ba4Xn%2FgdYLTeoDR6VKfMH1YH%2BT4ZMIRoI%2FAiEAn4CdC1zVzfjmi%2F1paKKcWPMamdAVVJBMdPq9SYkCKVsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3QKm2F6RSfcFgpiircA%2FrZ4kP5a%2BvX4Ggb1laSUOgyQlSFAzux0mPteA7%2Bq9eBuN07nYacMD2iogcUO0DQrn3ox02aBoYpk4t0vZqGf3DV1En3AZGmeU5v1wBq%2FKsqn6z9yWT0z4OmI52liB0DrvydiRdxyVinBm%2FgVfEfsvIKzZZn7LoBJtgqJ38uJfsIwj2jRoFdmIxwwTh1IpwBgCoGiaeG6vWtWt1dFzDO%2BfsUoE0pVECTbvSeUYzvbBahYN6Qy5xujRYUCypKwcELU9IZ1HzSQxNPHxVhem0qhTRVYhjXdJ5RESIvglYZpwIH6mWH3t3%2BcDUO4DIRMg8OS9kKk9YCHpMJTcH%2BCTB%2Bz3i3fQC7KU53W1eWKIf1bqdVH0hBZ3TABJyXcNpZ9q3QHcjuthu4%2BGgLckPF7z5kyAVeG7NmyKe9JHV56W0xOAJH%2FSV8tA%2BTJwAltaMYBY1PZMjAHKF6SmRyCKN2HarK6wytQVNIB1WwCTICN%2BtT0w0h0cgg01DGvySb4%2FV91xLMe0ahgfHsNoEafb3zEILlUKCZrabqBWivGSAIquwBSjyKUS8K9zS2OkkeZ3qtnY2sgetoGyE3JwqjQnMulAfZwpon4bb7r30DLWSWSe9HE87ErhBUcpSDj7Wz4BOzMJf5lcUGOqUBq5%2FCpXV52qTbpcsPRgYvzXemHBAZ3jCpDHy7oZcCnKnranbghj6urnyxAewmH%2Bh3htsdILptaP%2FPMG25tyP378SK6hh7WCuRGkYjEYpbq2CM3RqGba%2BpYHdVYIzIZX9Cg%2FHjzUMm4GneX%2Ff8y1YJHjqRp1XztauWik%2BIKXdX4VZJLga8lFek3i2%2BCr6S%2BfAMHDhfQZRHW5VwjtcDsYk4%2Fenpz5i5&X-Amz-Signature=b1d623a0b05758a0dcd81d3e17380869c142f853458834e4c1128b73caf47b6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZVYOKYK%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWihWvdDF%2Ba4Xn%2FgdYLTeoDR6VKfMH1YH%2BT4ZMIRoI%2FAiEAn4CdC1zVzfjmi%2F1paKKcWPMamdAVVJBMdPq9SYkCKVsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3QKm2F6RSfcFgpiircA%2FrZ4kP5a%2BvX4Ggb1laSUOgyQlSFAzux0mPteA7%2Bq9eBuN07nYacMD2iogcUO0DQrn3ox02aBoYpk4t0vZqGf3DV1En3AZGmeU5v1wBq%2FKsqn6z9yWT0z4OmI52liB0DrvydiRdxyVinBm%2FgVfEfsvIKzZZn7LoBJtgqJ38uJfsIwj2jRoFdmIxwwTh1IpwBgCoGiaeG6vWtWt1dFzDO%2BfsUoE0pVECTbvSeUYzvbBahYN6Qy5xujRYUCypKwcELU9IZ1HzSQxNPHxVhem0qhTRVYhjXdJ5RESIvglYZpwIH6mWH3t3%2BcDUO4DIRMg8OS9kKk9YCHpMJTcH%2BCTB%2Bz3i3fQC7KU53W1eWKIf1bqdVH0hBZ3TABJyXcNpZ9q3QHcjuthu4%2BGgLckPF7z5kyAVeG7NmyKe9JHV56W0xOAJH%2FSV8tA%2BTJwAltaMYBY1PZMjAHKF6SmRyCKN2HarK6wytQVNIB1WwCTICN%2BtT0w0h0cgg01DGvySb4%2FV91xLMe0ahgfHsNoEafb3zEILlUKCZrabqBWivGSAIquwBSjyKUS8K9zS2OkkeZ3qtnY2sgetoGyE3JwqjQnMulAfZwpon4bb7r30DLWSWSe9HE87ErhBUcpSDj7Wz4BOzMJf5lcUGOqUBq5%2FCpXV52qTbpcsPRgYvzXemHBAZ3jCpDHy7oZcCnKnranbghj6urnyxAewmH%2Bh3htsdILptaP%2FPMG25tyP378SK6hh7WCuRGkYjEYpbq2CM3RqGba%2BpYHdVYIzIZX9Cg%2FHjzUMm4GneX%2Ff8y1YJHjqRp1XztauWik%2BIKXdX4VZJLga8lFek3i2%2BCr6S%2BfAMHDhfQZRHW5VwjtcDsYk4%2Fenpz5i5&X-Amz-Signature=ec810ec2e0cb7867db77b37f5b691c6c7ca89fb740d928afbd222a62a18f1908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZVYOKYK%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWihWvdDF%2Ba4Xn%2FgdYLTeoDR6VKfMH1YH%2BT4ZMIRoI%2FAiEAn4CdC1zVzfjmi%2F1paKKcWPMamdAVVJBMdPq9SYkCKVsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3QKm2F6RSfcFgpiircA%2FrZ4kP5a%2BvX4Ggb1laSUOgyQlSFAzux0mPteA7%2Bq9eBuN07nYacMD2iogcUO0DQrn3ox02aBoYpk4t0vZqGf3DV1En3AZGmeU5v1wBq%2FKsqn6z9yWT0z4OmI52liB0DrvydiRdxyVinBm%2FgVfEfsvIKzZZn7LoBJtgqJ38uJfsIwj2jRoFdmIxwwTh1IpwBgCoGiaeG6vWtWt1dFzDO%2BfsUoE0pVECTbvSeUYzvbBahYN6Qy5xujRYUCypKwcELU9IZ1HzSQxNPHxVhem0qhTRVYhjXdJ5RESIvglYZpwIH6mWH3t3%2BcDUO4DIRMg8OS9kKk9YCHpMJTcH%2BCTB%2Bz3i3fQC7KU53W1eWKIf1bqdVH0hBZ3TABJyXcNpZ9q3QHcjuthu4%2BGgLckPF7z5kyAVeG7NmyKe9JHV56W0xOAJH%2FSV8tA%2BTJwAltaMYBY1PZMjAHKF6SmRyCKN2HarK6wytQVNIB1WwCTICN%2BtT0w0h0cgg01DGvySb4%2FV91xLMe0ahgfHsNoEafb3zEILlUKCZrabqBWivGSAIquwBSjyKUS8K9zS2OkkeZ3qtnY2sgetoGyE3JwqjQnMulAfZwpon4bb7r30DLWSWSe9HE87ErhBUcpSDj7Wz4BOzMJf5lcUGOqUBq5%2FCpXV52qTbpcsPRgYvzXemHBAZ3jCpDHy7oZcCnKnranbghj6urnyxAewmH%2Bh3htsdILptaP%2FPMG25tyP378SK6hh7WCuRGkYjEYpbq2CM3RqGba%2BpYHdVYIzIZX9Cg%2FHjzUMm4GneX%2Ff8y1YJHjqRp1XztauWik%2BIKXdX4VZJLga8lFek3i2%2BCr6S%2BfAMHDhfQZRHW5VwjtcDsYk4%2Fenpz5i5&X-Amz-Signature=0d007d6de350d901e4304f0c47d0e653931dd91815138b5d4a9d548c8afdeb5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YZYFK3%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfiLP4TfeYt3fltO4D1kq3d%2BU0%2BrzUTBUPQOn%2FHpe7%2FAiA%2FCe3VZKaFtGcd2109Azlmg%2Bayym%2FrsEhyd2%2BzRAkwhiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFHufd%2BbZiFXztDnDKtwDJ8Q2MJ8eCJlwk3VC3nEStvWYjEcx41HhCe%2BU0QSdV7xOEJN%2BuTI%2BWZ%2BVaMO4Zlz%2Fh22JoladQzoDGryr%2BkALDyfE3nUkroT7nOi4cbIPZlItehEU%2Box8P1wIH02VTWRwa24Frwf9ETUhV4tu9kSC23sy9rdLRgLq14EQRoqr8pmQZiFqO%2FFwHqKEmsbPkyLc%2F12Bo3x5gv7O9mp6AUvio4dvgvTCdbqX9Cz88%2BepY0SCvxvvVXfpAyr4AC6X9SIurLuF0WgpXVEo%2FuLSIpMU8lQHGbymEhJCD6nD8mvHKe%2BDxm7LD48O%2FAf5i3uxQR1P%2B8N8DcRTkE789lrVxwyCstmY61ObI7rRUyLMOhImJsAB%2BOg1YLB0OYVcVTg49jpcX8HBn%2BMHocbK1pZ6IxsKv%2BNJQTNTczsx5WFjw0fn9HJ0rD2yeFWj4GwawYyZio06RjLTVIQsnZ4kp2G2Lhs4Pk7ZF6VJZI1vZHRvLhZ7LYFxo%2Fd83BsSk5x5QuOrl35%2FtzCQo9XLoMwIbSQ7wBN%2FAyIuw9iOV7NmkPZxoji9kZ4HDbK3QIquTW7mp58oy0Ie8RGMOwVZXAJnMSUNowO%2F%2BNG%2BPaDMAJqn38omRKJZm0IRKJ%2BPPr6OKUc%2Btw8wwviVxQY6pgGmMbdpCc60g7TvyPbSbdYGC7BGtT8mL1Z6yvNmihZUO0W8X5oXMpfsLBfZhCBp%2BxsBSCPIStmmT2OHG798DWjSlY%2B3XXFlEBQWdCerfU0OzkcfeFs330aCgowbc0wOKWNY3tMouKuSIyMrk%2BFkxGdlFO7n%2F2lIlCkAI9qZGI74ejUn7YkElxgUL3zZHKo%2BMDlLpOlnQKeQPlq5%2BPjgAgwS031ZxlQZ&X-Amz-Signature=3ff5c134034c1ecf6b9e50343dab23f45a3084e8f7862a81dd191898f10117e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZVYOKYK%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWihWvdDF%2Ba4Xn%2FgdYLTeoDR6VKfMH1YH%2BT4ZMIRoI%2FAiEAn4CdC1zVzfjmi%2F1paKKcWPMamdAVVJBMdPq9SYkCKVsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3QKm2F6RSfcFgpiircA%2FrZ4kP5a%2BvX4Ggb1laSUOgyQlSFAzux0mPteA7%2Bq9eBuN07nYacMD2iogcUO0DQrn3ox02aBoYpk4t0vZqGf3DV1En3AZGmeU5v1wBq%2FKsqn6z9yWT0z4OmI52liB0DrvydiRdxyVinBm%2FgVfEfsvIKzZZn7LoBJtgqJ38uJfsIwj2jRoFdmIxwwTh1IpwBgCoGiaeG6vWtWt1dFzDO%2BfsUoE0pVECTbvSeUYzvbBahYN6Qy5xujRYUCypKwcELU9IZ1HzSQxNPHxVhem0qhTRVYhjXdJ5RESIvglYZpwIH6mWH3t3%2BcDUO4DIRMg8OS9kKk9YCHpMJTcH%2BCTB%2Bz3i3fQC7KU53W1eWKIf1bqdVH0hBZ3TABJyXcNpZ9q3QHcjuthu4%2BGgLckPF7z5kyAVeG7NmyKe9JHV56W0xOAJH%2FSV8tA%2BTJwAltaMYBY1PZMjAHKF6SmRyCKN2HarK6wytQVNIB1WwCTICN%2BtT0w0h0cgg01DGvySb4%2FV91xLMe0ahgfHsNoEafb3zEILlUKCZrabqBWivGSAIquwBSjyKUS8K9zS2OkkeZ3qtnY2sgetoGyE3JwqjQnMulAfZwpon4bb7r30DLWSWSe9HE87ErhBUcpSDj7Wz4BOzMJf5lcUGOqUBq5%2FCpXV52qTbpcsPRgYvzXemHBAZ3jCpDHy7oZcCnKnranbghj6urnyxAewmH%2Bh3htsdILptaP%2FPMG25tyP378SK6hh7WCuRGkYjEYpbq2CM3RqGba%2BpYHdVYIzIZX9Cg%2FHjzUMm4GneX%2Ff8y1YJHjqRp1XztauWik%2BIKXdX4VZJLga8lFek3i2%2BCr6S%2BfAMHDhfQZRHW5VwjtcDsYk4%2Fenpz5i5&X-Amz-Signature=eefce3156fc40980467f404b0947ce57413b7fdbb252710d013a76fb621e0d08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZVYOKYK%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWihWvdDF%2Ba4Xn%2FgdYLTeoDR6VKfMH1YH%2BT4ZMIRoI%2FAiEAn4CdC1zVzfjmi%2F1paKKcWPMamdAVVJBMdPq9SYkCKVsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3QKm2F6RSfcFgpiircA%2FrZ4kP5a%2BvX4Ggb1laSUOgyQlSFAzux0mPteA7%2Bq9eBuN07nYacMD2iogcUO0DQrn3ox02aBoYpk4t0vZqGf3DV1En3AZGmeU5v1wBq%2FKsqn6z9yWT0z4OmI52liB0DrvydiRdxyVinBm%2FgVfEfsvIKzZZn7LoBJtgqJ38uJfsIwj2jRoFdmIxwwTh1IpwBgCoGiaeG6vWtWt1dFzDO%2BfsUoE0pVECTbvSeUYzvbBahYN6Qy5xujRYUCypKwcELU9IZ1HzSQxNPHxVhem0qhTRVYhjXdJ5RESIvglYZpwIH6mWH3t3%2BcDUO4DIRMg8OS9kKk9YCHpMJTcH%2BCTB%2Bz3i3fQC7KU53W1eWKIf1bqdVH0hBZ3TABJyXcNpZ9q3QHcjuthu4%2BGgLckPF7z5kyAVeG7NmyKe9JHV56W0xOAJH%2FSV8tA%2BTJwAltaMYBY1PZMjAHKF6SmRyCKN2HarK6wytQVNIB1WwCTICN%2BtT0w0h0cgg01DGvySb4%2FV91xLMe0ahgfHsNoEafb3zEILlUKCZrabqBWivGSAIquwBSjyKUS8K9zS2OkkeZ3qtnY2sgetoGyE3JwqjQnMulAfZwpon4bb7r30DLWSWSe9HE87ErhBUcpSDj7Wz4BOzMJf5lcUGOqUBq5%2FCpXV52qTbpcsPRgYvzXemHBAZ3jCpDHy7oZcCnKnranbghj6urnyxAewmH%2Bh3htsdILptaP%2FPMG25tyP378SK6hh7WCuRGkYjEYpbq2CM3RqGba%2BpYHdVYIzIZX9Cg%2FHjzUMm4GneX%2Ff8y1YJHjqRp1XztauWik%2BIKXdX4VZJLga8lFek3i2%2BCr6S%2BfAMHDhfQZRHW5VwjtcDsYk4%2Fenpz5i5&X-Amz-Signature=e86420fbcd42f416ab4ff1a4cf5084168647bb8336c216d39805200d9913008a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZVYOKYK%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWihWvdDF%2Ba4Xn%2FgdYLTeoDR6VKfMH1YH%2BT4ZMIRoI%2FAiEAn4CdC1zVzfjmi%2F1paKKcWPMamdAVVJBMdPq9SYkCKVsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3QKm2F6RSfcFgpiircA%2FrZ4kP5a%2BvX4Ggb1laSUOgyQlSFAzux0mPteA7%2Bq9eBuN07nYacMD2iogcUO0DQrn3ox02aBoYpk4t0vZqGf3DV1En3AZGmeU5v1wBq%2FKsqn6z9yWT0z4OmI52liB0DrvydiRdxyVinBm%2FgVfEfsvIKzZZn7LoBJtgqJ38uJfsIwj2jRoFdmIxwwTh1IpwBgCoGiaeG6vWtWt1dFzDO%2BfsUoE0pVECTbvSeUYzvbBahYN6Qy5xujRYUCypKwcELU9IZ1HzSQxNPHxVhem0qhTRVYhjXdJ5RESIvglYZpwIH6mWH3t3%2BcDUO4DIRMg8OS9kKk9YCHpMJTcH%2BCTB%2Bz3i3fQC7KU53W1eWKIf1bqdVH0hBZ3TABJyXcNpZ9q3QHcjuthu4%2BGgLckPF7z5kyAVeG7NmyKe9JHV56W0xOAJH%2FSV8tA%2BTJwAltaMYBY1PZMjAHKF6SmRyCKN2HarK6wytQVNIB1WwCTICN%2BtT0w0h0cgg01DGvySb4%2FV91xLMe0ahgfHsNoEafb3zEILlUKCZrabqBWivGSAIquwBSjyKUS8K9zS2OkkeZ3qtnY2sgetoGyE3JwqjQnMulAfZwpon4bb7r30DLWSWSe9HE87ErhBUcpSDj7Wz4BOzMJf5lcUGOqUBq5%2FCpXV52qTbpcsPRgYvzXemHBAZ3jCpDHy7oZcCnKnranbghj6urnyxAewmH%2Bh3htsdILptaP%2FPMG25tyP378SK6hh7WCuRGkYjEYpbq2CM3RqGba%2BpYHdVYIzIZX9Cg%2FHjzUMm4GneX%2Ff8y1YJHjqRp1XztauWik%2BIKXdX4VZJLga8lFek3i2%2BCr6S%2BfAMHDhfQZRHW5VwjtcDsYk4%2Fenpz5i5&X-Amz-Signature=ec810ec2e0cb7867db77b37f5b691c6c7ca89fb740d928afbd222a62a18f1908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZVYOKYK%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWihWvdDF%2Ba4Xn%2FgdYLTeoDR6VKfMH1YH%2BT4ZMIRoI%2FAiEAn4CdC1zVzfjmi%2F1paKKcWPMamdAVVJBMdPq9SYkCKVsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3QKm2F6RSfcFgpiircA%2FrZ4kP5a%2BvX4Ggb1laSUOgyQlSFAzux0mPteA7%2Bq9eBuN07nYacMD2iogcUO0DQrn3ox02aBoYpk4t0vZqGf3DV1En3AZGmeU5v1wBq%2FKsqn6z9yWT0z4OmI52liB0DrvydiRdxyVinBm%2FgVfEfsvIKzZZn7LoBJtgqJ38uJfsIwj2jRoFdmIxwwTh1IpwBgCoGiaeG6vWtWt1dFzDO%2BfsUoE0pVECTbvSeUYzvbBahYN6Qy5xujRYUCypKwcELU9IZ1HzSQxNPHxVhem0qhTRVYhjXdJ5RESIvglYZpwIH6mWH3t3%2BcDUO4DIRMg8OS9kKk9YCHpMJTcH%2BCTB%2Bz3i3fQC7KU53W1eWKIf1bqdVH0hBZ3TABJyXcNpZ9q3QHcjuthu4%2BGgLckPF7z5kyAVeG7NmyKe9JHV56W0xOAJH%2FSV8tA%2BTJwAltaMYBY1PZMjAHKF6SmRyCKN2HarK6wytQVNIB1WwCTICN%2BtT0w0h0cgg01DGvySb4%2FV91xLMe0ahgfHsNoEafb3zEILlUKCZrabqBWivGSAIquwBSjyKUS8K9zS2OkkeZ3qtnY2sgetoGyE3JwqjQnMulAfZwpon4bb7r30DLWSWSe9HE87ErhBUcpSDj7Wz4BOzMJf5lcUGOqUBq5%2FCpXV52qTbpcsPRgYvzXemHBAZ3jCpDHy7oZcCnKnranbghj6urnyxAewmH%2Bh3htsdILptaP%2FPMG25tyP378SK6hh7WCuRGkYjEYpbq2CM3RqGba%2BpYHdVYIzIZX9Cg%2FHjzUMm4GneX%2Ff8y1YJHjqRp1XztauWik%2BIKXdX4VZJLga8lFek3i2%2BCr6S%2BfAMHDhfQZRHW5VwjtcDsYk4%2Fenpz5i5&X-Amz-Signature=2080f162aa847bdafe26b036ff67812a76ca8f1fb5f3c2ab2746d8f923047579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZVYOKYK%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWihWvdDF%2Ba4Xn%2FgdYLTeoDR6VKfMH1YH%2BT4ZMIRoI%2FAiEAn4CdC1zVzfjmi%2F1paKKcWPMamdAVVJBMdPq9SYkCKVsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3QKm2F6RSfcFgpiircA%2FrZ4kP5a%2BvX4Ggb1laSUOgyQlSFAzux0mPteA7%2Bq9eBuN07nYacMD2iogcUO0DQrn3ox02aBoYpk4t0vZqGf3DV1En3AZGmeU5v1wBq%2FKsqn6z9yWT0z4OmI52liB0DrvydiRdxyVinBm%2FgVfEfsvIKzZZn7LoBJtgqJ38uJfsIwj2jRoFdmIxwwTh1IpwBgCoGiaeG6vWtWt1dFzDO%2BfsUoE0pVECTbvSeUYzvbBahYN6Qy5xujRYUCypKwcELU9IZ1HzSQxNPHxVhem0qhTRVYhjXdJ5RESIvglYZpwIH6mWH3t3%2BcDUO4DIRMg8OS9kKk9YCHpMJTcH%2BCTB%2Bz3i3fQC7KU53W1eWKIf1bqdVH0hBZ3TABJyXcNpZ9q3QHcjuthu4%2BGgLckPF7z5kyAVeG7NmyKe9JHV56W0xOAJH%2FSV8tA%2BTJwAltaMYBY1PZMjAHKF6SmRyCKN2HarK6wytQVNIB1WwCTICN%2BtT0w0h0cgg01DGvySb4%2FV91xLMe0ahgfHsNoEafb3zEILlUKCZrabqBWivGSAIquwBSjyKUS8K9zS2OkkeZ3qtnY2sgetoGyE3JwqjQnMulAfZwpon4bb7r30DLWSWSe9HE87ErhBUcpSDj7Wz4BOzMJf5lcUGOqUBq5%2FCpXV52qTbpcsPRgYvzXemHBAZ3jCpDHy7oZcCnKnranbghj6urnyxAewmH%2Bh3htsdILptaP%2FPMG25tyP378SK6hh7WCuRGkYjEYpbq2CM3RqGba%2BpYHdVYIzIZX9Cg%2FHjzUMm4GneX%2Ff8y1YJHjqRp1XztauWik%2BIKXdX4VZJLga8lFek3i2%2BCr6S%2BfAMHDhfQZRHW5VwjtcDsYk4%2Fenpz5i5&X-Amz-Signature=78ba8542d37f01796f817364030f3e5ae89037f330b148d19009ec30474e63ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZVYOKYK%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWihWvdDF%2Ba4Xn%2FgdYLTeoDR6VKfMH1YH%2BT4ZMIRoI%2FAiEAn4CdC1zVzfjmi%2F1paKKcWPMamdAVVJBMdPq9SYkCKVsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3QKm2F6RSfcFgpiircA%2FrZ4kP5a%2BvX4Ggb1laSUOgyQlSFAzux0mPteA7%2Bq9eBuN07nYacMD2iogcUO0DQrn3ox02aBoYpk4t0vZqGf3DV1En3AZGmeU5v1wBq%2FKsqn6z9yWT0z4OmI52liB0DrvydiRdxyVinBm%2FgVfEfsvIKzZZn7LoBJtgqJ38uJfsIwj2jRoFdmIxwwTh1IpwBgCoGiaeG6vWtWt1dFzDO%2BfsUoE0pVECTbvSeUYzvbBahYN6Qy5xujRYUCypKwcELU9IZ1HzSQxNPHxVhem0qhTRVYhjXdJ5RESIvglYZpwIH6mWH3t3%2BcDUO4DIRMg8OS9kKk9YCHpMJTcH%2BCTB%2Bz3i3fQC7KU53W1eWKIf1bqdVH0hBZ3TABJyXcNpZ9q3QHcjuthu4%2BGgLckPF7z5kyAVeG7NmyKe9JHV56W0xOAJH%2FSV8tA%2BTJwAltaMYBY1PZMjAHKF6SmRyCKN2HarK6wytQVNIB1WwCTICN%2BtT0w0h0cgg01DGvySb4%2FV91xLMe0ahgfHsNoEafb3zEILlUKCZrabqBWivGSAIquwBSjyKUS8K9zS2OkkeZ3qtnY2sgetoGyE3JwqjQnMulAfZwpon4bb7r30DLWSWSe9HE87ErhBUcpSDj7Wz4BOzMJf5lcUGOqUBq5%2FCpXV52qTbpcsPRgYvzXemHBAZ3jCpDHy7oZcCnKnranbghj6urnyxAewmH%2Bh3htsdILptaP%2FPMG25tyP378SK6hh7WCuRGkYjEYpbq2CM3RqGba%2BpYHdVYIzIZX9Cg%2FHjzUMm4GneX%2Ff8y1YJHjqRp1XztauWik%2BIKXdX4VZJLga8lFek3i2%2BCr6S%2BfAMHDhfQZRHW5VwjtcDsYk4%2Fenpz5i5&X-Amz-Signature=93290565d477667247582035fdd6c7a5e5cf8d404058dff67186a9bd73418154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


