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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676J3U44K%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqPMmXf4RYd21Zk594BUIR%2Fc3BMiwX8YSJCVMrx%2B%2FqwAIhALp5TcMsGpCUTEtfGbYy6SgNs8x9RgLGlTEbXwXAm9hHKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfHEhWa44AlN6ltmQq3AMpydlWXGlyOM0gLD%2BIgoE21W7Wm823Xz8RqXrqdp6RbXULIA7k%2FoBHy1WD6MxDxAJEfeHBuVIF8JQKQeIGwisKMVuDhzIoYwWwIbeOUAJq%2FHXiZOAAKU0Buc4r6oPy%2B0P0II1J8j71MZhCndhc14OD%2BEi3ZdCWvBkSZXNWL70ym%2F7GKJJGuRE5lmZAdYSshYlVSYxCHjeKcUKay3M0N%2BgiTa6RnDxHZUifTnyuRDF%2FqfCDIRsCwTsUn5Okp%2F7bDWqnWgy38MsxZUsdBipDQhKKekTgiPJmtf4qp%2B4RqseXe8HvCicDzXacwY5N8st%2BgjwYTOzVwoMsqV85FfqgsORUenSVm7wyb2wYJV2p2vr%2Fil%2FoTIsFX4tJw2iVEj0tmX0KsDVIfKJPPaXGiv46OuZjF9VwwYRuXd8hy%2B6MfTrIrAvdoWa%2F1FIpeRZX%2FGt583kQkVlhiKTrAP4j2yWPpwW6E22BMKffGmKQWEMV4zoKd2kpYKE1Ok%2BhRODQLdTGmzQKIA8G9Gq6eL1waiuWsSMpfO58xcICgvMNnR3DjxsYcQ%2F6HOk0QskMYSCPH3gYur%2FyQbO6407lWFHQ7eOC8KcmUY9i4s5M58%2BgAeKB2nPB7JQ7J%2FiEKPCmIyZN0zCQyofOBjqkARXEoMDjq3ZI0xqlYym5sbbi%2F%2BCurDwBkDL5r1jfNQts7fkr96aOzLWUmmQndp2j5aKIV400JkcRUPrtXCnwfxQz8dA%2FauvGTqCdNTwkGKsuZ87aXfok6fLhkTU9Py9Ai9rsPpGCyd3lz3S2t3f68PLMBxoI%2BHF2PmdwHIwXiuRtDbievAPZYJjWMV7w9LCz%2F1CxKuXs90nLbgpLvhIFZxPSv%2FRC&X-Amz-Signature=9a21ac3879c72d64ee222c7ed237e16eeae43fead2b0d86f70c4cb0cf304cb9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676J3U44K%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqPMmXf4RYd21Zk594BUIR%2Fc3BMiwX8YSJCVMrx%2B%2FqwAIhALp5TcMsGpCUTEtfGbYy6SgNs8x9RgLGlTEbXwXAm9hHKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfHEhWa44AlN6ltmQq3AMpydlWXGlyOM0gLD%2BIgoE21W7Wm823Xz8RqXrqdp6RbXULIA7k%2FoBHy1WD6MxDxAJEfeHBuVIF8JQKQeIGwisKMVuDhzIoYwWwIbeOUAJq%2FHXiZOAAKU0Buc4r6oPy%2B0P0II1J8j71MZhCndhc14OD%2BEi3ZdCWvBkSZXNWL70ym%2F7GKJJGuRE5lmZAdYSshYlVSYxCHjeKcUKay3M0N%2BgiTa6RnDxHZUifTnyuRDF%2FqfCDIRsCwTsUn5Okp%2F7bDWqnWgy38MsxZUsdBipDQhKKekTgiPJmtf4qp%2B4RqseXe8HvCicDzXacwY5N8st%2BgjwYTOzVwoMsqV85FfqgsORUenSVm7wyb2wYJV2p2vr%2Fil%2FoTIsFX4tJw2iVEj0tmX0KsDVIfKJPPaXGiv46OuZjF9VwwYRuXd8hy%2B6MfTrIrAvdoWa%2F1FIpeRZX%2FGt583kQkVlhiKTrAP4j2yWPpwW6E22BMKffGmKQWEMV4zoKd2kpYKE1Ok%2BhRODQLdTGmzQKIA8G9Gq6eL1waiuWsSMpfO58xcICgvMNnR3DjxsYcQ%2F6HOk0QskMYSCPH3gYur%2FyQbO6407lWFHQ7eOC8KcmUY9i4s5M58%2BgAeKB2nPB7JQ7J%2FiEKPCmIyZN0zCQyofOBjqkARXEoMDjq3ZI0xqlYym5sbbi%2F%2BCurDwBkDL5r1jfNQts7fkr96aOzLWUmmQndp2j5aKIV400JkcRUPrtXCnwfxQz8dA%2FauvGTqCdNTwkGKsuZ87aXfok6fLhkTU9Py9Ai9rsPpGCyd3lz3S2t3f68PLMBxoI%2BHF2PmdwHIwXiuRtDbievAPZYJjWMV7w9LCz%2F1CxKuXs90nLbgpLvhIFZxPSv%2FRC&X-Amz-Signature=229969a56c90f627fd36089b949941a128a21ab054ad58e2f31f4e69ffa0bb0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676J3U44K%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqPMmXf4RYd21Zk594BUIR%2Fc3BMiwX8YSJCVMrx%2B%2FqwAIhALp5TcMsGpCUTEtfGbYy6SgNs8x9RgLGlTEbXwXAm9hHKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfHEhWa44AlN6ltmQq3AMpydlWXGlyOM0gLD%2BIgoE21W7Wm823Xz8RqXrqdp6RbXULIA7k%2FoBHy1WD6MxDxAJEfeHBuVIF8JQKQeIGwisKMVuDhzIoYwWwIbeOUAJq%2FHXiZOAAKU0Buc4r6oPy%2B0P0II1J8j71MZhCndhc14OD%2BEi3ZdCWvBkSZXNWL70ym%2F7GKJJGuRE5lmZAdYSshYlVSYxCHjeKcUKay3M0N%2BgiTa6RnDxHZUifTnyuRDF%2FqfCDIRsCwTsUn5Okp%2F7bDWqnWgy38MsxZUsdBipDQhKKekTgiPJmtf4qp%2B4RqseXe8HvCicDzXacwY5N8st%2BgjwYTOzVwoMsqV85FfqgsORUenSVm7wyb2wYJV2p2vr%2Fil%2FoTIsFX4tJw2iVEj0tmX0KsDVIfKJPPaXGiv46OuZjF9VwwYRuXd8hy%2B6MfTrIrAvdoWa%2F1FIpeRZX%2FGt583kQkVlhiKTrAP4j2yWPpwW6E22BMKffGmKQWEMV4zoKd2kpYKE1Ok%2BhRODQLdTGmzQKIA8G9Gq6eL1waiuWsSMpfO58xcICgvMNnR3DjxsYcQ%2F6HOk0QskMYSCPH3gYur%2FyQbO6407lWFHQ7eOC8KcmUY9i4s5M58%2BgAeKB2nPB7JQ7J%2FiEKPCmIyZN0zCQyofOBjqkARXEoMDjq3ZI0xqlYym5sbbi%2F%2BCurDwBkDL5r1jfNQts7fkr96aOzLWUmmQndp2j5aKIV400JkcRUPrtXCnwfxQz8dA%2FauvGTqCdNTwkGKsuZ87aXfok6fLhkTU9Py9Ai9rsPpGCyd3lz3S2t3f68PLMBxoI%2BHF2PmdwHIwXiuRtDbievAPZYJjWMV7w9LCz%2F1CxKuXs90nLbgpLvhIFZxPSv%2FRC&X-Amz-Signature=4c9b4119b97fe89860a39b1d7deb01e588e95969c4adff6063978b662c6ba390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676J3U44K%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqPMmXf4RYd21Zk594BUIR%2Fc3BMiwX8YSJCVMrx%2B%2FqwAIhALp5TcMsGpCUTEtfGbYy6SgNs8x9RgLGlTEbXwXAm9hHKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfHEhWa44AlN6ltmQq3AMpydlWXGlyOM0gLD%2BIgoE21W7Wm823Xz8RqXrqdp6RbXULIA7k%2FoBHy1WD6MxDxAJEfeHBuVIF8JQKQeIGwisKMVuDhzIoYwWwIbeOUAJq%2FHXiZOAAKU0Buc4r6oPy%2B0P0II1J8j71MZhCndhc14OD%2BEi3ZdCWvBkSZXNWL70ym%2F7GKJJGuRE5lmZAdYSshYlVSYxCHjeKcUKay3M0N%2BgiTa6RnDxHZUifTnyuRDF%2FqfCDIRsCwTsUn5Okp%2F7bDWqnWgy38MsxZUsdBipDQhKKekTgiPJmtf4qp%2B4RqseXe8HvCicDzXacwY5N8st%2BgjwYTOzVwoMsqV85FfqgsORUenSVm7wyb2wYJV2p2vr%2Fil%2FoTIsFX4tJw2iVEj0tmX0KsDVIfKJPPaXGiv46OuZjF9VwwYRuXd8hy%2B6MfTrIrAvdoWa%2F1FIpeRZX%2FGt583kQkVlhiKTrAP4j2yWPpwW6E22BMKffGmKQWEMV4zoKd2kpYKE1Ok%2BhRODQLdTGmzQKIA8G9Gq6eL1waiuWsSMpfO58xcICgvMNnR3DjxsYcQ%2F6HOk0QskMYSCPH3gYur%2FyQbO6407lWFHQ7eOC8KcmUY9i4s5M58%2BgAeKB2nPB7JQ7J%2FiEKPCmIyZN0zCQyofOBjqkARXEoMDjq3ZI0xqlYym5sbbi%2F%2BCurDwBkDL5r1jfNQts7fkr96aOzLWUmmQndp2j5aKIV400JkcRUPrtXCnwfxQz8dA%2FauvGTqCdNTwkGKsuZ87aXfok6fLhkTU9Py9Ai9rsPpGCyd3lz3S2t3f68PLMBxoI%2BHF2PmdwHIwXiuRtDbievAPZYJjWMV7w9LCz%2F1CxKuXs90nLbgpLvhIFZxPSv%2FRC&X-Amz-Signature=1df55088e4da9c74a754587396221b78991c4d85b0eb4459a82701b3f781e86e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676J3U44K%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqPMmXf4RYd21Zk594BUIR%2Fc3BMiwX8YSJCVMrx%2B%2FqwAIhALp5TcMsGpCUTEtfGbYy6SgNs8x9RgLGlTEbXwXAm9hHKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfHEhWa44AlN6ltmQq3AMpydlWXGlyOM0gLD%2BIgoE21W7Wm823Xz8RqXrqdp6RbXULIA7k%2FoBHy1WD6MxDxAJEfeHBuVIF8JQKQeIGwisKMVuDhzIoYwWwIbeOUAJq%2FHXiZOAAKU0Buc4r6oPy%2B0P0II1J8j71MZhCndhc14OD%2BEi3ZdCWvBkSZXNWL70ym%2F7GKJJGuRE5lmZAdYSshYlVSYxCHjeKcUKay3M0N%2BgiTa6RnDxHZUifTnyuRDF%2FqfCDIRsCwTsUn5Okp%2F7bDWqnWgy38MsxZUsdBipDQhKKekTgiPJmtf4qp%2B4RqseXe8HvCicDzXacwY5N8st%2BgjwYTOzVwoMsqV85FfqgsORUenSVm7wyb2wYJV2p2vr%2Fil%2FoTIsFX4tJw2iVEj0tmX0KsDVIfKJPPaXGiv46OuZjF9VwwYRuXd8hy%2B6MfTrIrAvdoWa%2F1FIpeRZX%2FGt583kQkVlhiKTrAP4j2yWPpwW6E22BMKffGmKQWEMV4zoKd2kpYKE1Ok%2BhRODQLdTGmzQKIA8G9Gq6eL1waiuWsSMpfO58xcICgvMNnR3DjxsYcQ%2F6HOk0QskMYSCPH3gYur%2FyQbO6407lWFHQ7eOC8KcmUY9i4s5M58%2BgAeKB2nPB7JQ7J%2FiEKPCmIyZN0zCQyofOBjqkARXEoMDjq3ZI0xqlYym5sbbi%2F%2BCurDwBkDL5r1jfNQts7fkr96aOzLWUmmQndp2j5aKIV400JkcRUPrtXCnwfxQz8dA%2FauvGTqCdNTwkGKsuZ87aXfok6fLhkTU9Py9Ai9rsPpGCyd3lz3S2t3f68PLMBxoI%2BHF2PmdwHIwXiuRtDbievAPZYJjWMV7w9LCz%2F1CxKuXs90nLbgpLvhIFZxPSv%2FRC&X-Amz-Signature=43fdf1256944447b895bfb5293c67ff759f52b624c6b6846820e4a40cab0051e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676J3U44K%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqPMmXf4RYd21Zk594BUIR%2Fc3BMiwX8YSJCVMrx%2B%2FqwAIhALp5TcMsGpCUTEtfGbYy6SgNs8x9RgLGlTEbXwXAm9hHKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfHEhWa44AlN6ltmQq3AMpydlWXGlyOM0gLD%2BIgoE21W7Wm823Xz8RqXrqdp6RbXULIA7k%2FoBHy1WD6MxDxAJEfeHBuVIF8JQKQeIGwisKMVuDhzIoYwWwIbeOUAJq%2FHXiZOAAKU0Buc4r6oPy%2B0P0II1J8j71MZhCndhc14OD%2BEi3ZdCWvBkSZXNWL70ym%2F7GKJJGuRE5lmZAdYSshYlVSYxCHjeKcUKay3M0N%2BgiTa6RnDxHZUifTnyuRDF%2FqfCDIRsCwTsUn5Okp%2F7bDWqnWgy38MsxZUsdBipDQhKKekTgiPJmtf4qp%2B4RqseXe8HvCicDzXacwY5N8st%2BgjwYTOzVwoMsqV85FfqgsORUenSVm7wyb2wYJV2p2vr%2Fil%2FoTIsFX4tJw2iVEj0tmX0KsDVIfKJPPaXGiv46OuZjF9VwwYRuXd8hy%2B6MfTrIrAvdoWa%2F1FIpeRZX%2FGt583kQkVlhiKTrAP4j2yWPpwW6E22BMKffGmKQWEMV4zoKd2kpYKE1Ok%2BhRODQLdTGmzQKIA8G9Gq6eL1waiuWsSMpfO58xcICgvMNnR3DjxsYcQ%2F6HOk0QskMYSCPH3gYur%2FyQbO6407lWFHQ7eOC8KcmUY9i4s5M58%2BgAeKB2nPB7JQ7J%2FiEKPCmIyZN0zCQyofOBjqkARXEoMDjq3ZI0xqlYym5sbbi%2F%2BCurDwBkDL5r1jfNQts7fkr96aOzLWUmmQndp2j5aKIV400JkcRUPrtXCnwfxQz8dA%2FauvGTqCdNTwkGKsuZ87aXfok6fLhkTU9Py9Ai9rsPpGCyd3lz3S2t3f68PLMBxoI%2BHF2PmdwHIwXiuRtDbievAPZYJjWMV7w9LCz%2F1CxKuXs90nLbgpLvhIFZxPSv%2FRC&X-Amz-Signature=dd0a0d880fa9670bf8e1375a7a8fab354b44e9efe67c425131abc332f98d0544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676J3U44K%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqPMmXf4RYd21Zk594BUIR%2Fc3BMiwX8YSJCVMrx%2B%2FqwAIhALp5TcMsGpCUTEtfGbYy6SgNs8x9RgLGlTEbXwXAm9hHKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfHEhWa44AlN6ltmQq3AMpydlWXGlyOM0gLD%2BIgoE21W7Wm823Xz8RqXrqdp6RbXULIA7k%2FoBHy1WD6MxDxAJEfeHBuVIF8JQKQeIGwisKMVuDhzIoYwWwIbeOUAJq%2FHXiZOAAKU0Buc4r6oPy%2B0P0II1J8j71MZhCndhc14OD%2BEi3ZdCWvBkSZXNWL70ym%2F7GKJJGuRE5lmZAdYSshYlVSYxCHjeKcUKay3M0N%2BgiTa6RnDxHZUifTnyuRDF%2FqfCDIRsCwTsUn5Okp%2F7bDWqnWgy38MsxZUsdBipDQhKKekTgiPJmtf4qp%2B4RqseXe8HvCicDzXacwY5N8st%2BgjwYTOzVwoMsqV85FfqgsORUenSVm7wyb2wYJV2p2vr%2Fil%2FoTIsFX4tJw2iVEj0tmX0KsDVIfKJPPaXGiv46OuZjF9VwwYRuXd8hy%2B6MfTrIrAvdoWa%2F1FIpeRZX%2FGt583kQkVlhiKTrAP4j2yWPpwW6E22BMKffGmKQWEMV4zoKd2kpYKE1Ok%2BhRODQLdTGmzQKIA8G9Gq6eL1waiuWsSMpfO58xcICgvMNnR3DjxsYcQ%2F6HOk0QskMYSCPH3gYur%2FyQbO6407lWFHQ7eOC8KcmUY9i4s5M58%2BgAeKB2nPB7JQ7J%2FiEKPCmIyZN0zCQyofOBjqkARXEoMDjq3ZI0xqlYym5sbbi%2F%2BCurDwBkDL5r1jfNQts7fkr96aOzLWUmmQndp2j5aKIV400JkcRUPrtXCnwfxQz8dA%2FauvGTqCdNTwkGKsuZ87aXfok6fLhkTU9Py9Ai9rsPpGCyd3lz3S2t3f68PLMBxoI%2BHF2PmdwHIwXiuRtDbievAPZYJjWMV7w9LCz%2F1CxKuXs90nLbgpLvhIFZxPSv%2FRC&X-Amz-Signature=db26a4fed9e4e5560efb7f3c313d1d0bf1ee7be30840b9215e92c3dd7c401b3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676J3U44K%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqPMmXf4RYd21Zk594BUIR%2Fc3BMiwX8YSJCVMrx%2B%2FqwAIhALp5TcMsGpCUTEtfGbYy6SgNs8x9RgLGlTEbXwXAm9hHKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfHEhWa44AlN6ltmQq3AMpydlWXGlyOM0gLD%2BIgoE21W7Wm823Xz8RqXrqdp6RbXULIA7k%2FoBHy1WD6MxDxAJEfeHBuVIF8JQKQeIGwisKMVuDhzIoYwWwIbeOUAJq%2FHXiZOAAKU0Buc4r6oPy%2B0P0II1J8j71MZhCndhc14OD%2BEi3ZdCWvBkSZXNWL70ym%2F7GKJJGuRE5lmZAdYSshYlVSYxCHjeKcUKay3M0N%2BgiTa6RnDxHZUifTnyuRDF%2FqfCDIRsCwTsUn5Okp%2F7bDWqnWgy38MsxZUsdBipDQhKKekTgiPJmtf4qp%2B4RqseXe8HvCicDzXacwY5N8st%2BgjwYTOzVwoMsqV85FfqgsORUenSVm7wyb2wYJV2p2vr%2Fil%2FoTIsFX4tJw2iVEj0tmX0KsDVIfKJPPaXGiv46OuZjF9VwwYRuXd8hy%2B6MfTrIrAvdoWa%2F1FIpeRZX%2FGt583kQkVlhiKTrAP4j2yWPpwW6E22BMKffGmKQWEMV4zoKd2kpYKE1Ok%2BhRODQLdTGmzQKIA8G9Gq6eL1waiuWsSMpfO58xcICgvMNnR3DjxsYcQ%2F6HOk0QskMYSCPH3gYur%2FyQbO6407lWFHQ7eOC8KcmUY9i4s5M58%2BgAeKB2nPB7JQ7J%2FiEKPCmIyZN0zCQyofOBjqkARXEoMDjq3ZI0xqlYym5sbbi%2F%2BCurDwBkDL5r1jfNQts7fkr96aOzLWUmmQndp2j5aKIV400JkcRUPrtXCnwfxQz8dA%2FauvGTqCdNTwkGKsuZ87aXfok6fLhkTU9Py9Ai9rsPpGCyd3lz3S2t3f68PLMBxoI%2BHF2PmdwHIwXiuRtDbievAPZYJjWMV7w9LCz%2F1CxKuXs90nLbgpLvhIFZxPSv%2FRC&X-Amz-Signature=f15f73485ef101c75fd5bcc6e32e385e72bca0088ecc12ffdd507d8c7d2e7619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676J3U44K%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqPMmXf4RYd21Zk594BUIR%2Fc3BMiwX8YSJCVMrx%2B%2FqwAIhALp5TcMsGpCUTEtfGbYy6SgNs8x9RgLGlTEbXwXAm9hHKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfHEhWa44AlN6ltmQq3AMpydlWXGlyOM0gLD%2BIgoE21W7Wm823Xz8RqXrqdp6RbXULIA7k%2FoBHy1WD6MxDxAJEfeHBuVIF8JQKQeIGwisKMVuDhzIoYwWwIbeOUAJq%2FHXiZOAAKU0Buc4r6oPy%2B0P0II1J8j71MZhCndhc14OD%2BEi3ZdCWvBkSZXNWL70ym%2F7GKJJGuRE5lmZAdYSshYlVSYxCHjeKcUKay3M0N%2BgiTa6RnDxHZUifTnyuRDF%2FqfCDIRsCwTsUn5Okp%2F7bDWqnWgy38MsxZUsdBipDQhKKekTgiPJmtf4qp%2B4RqseXe8HvCicDzXacwY5N8st%2BgjwYTOzVwoMsqV85FfqgsORUenSVm7wyb2wYJV2p2vr%2Fil%2FoTIsFX4tJw2iVEj0tmX0KsDVIfKJPPaXGiv46OuZjF9VwwYRuXd8hy%2B6MfTrIrAvdoWa%2F1FIpeRZX%2FGt583kQkVlhiKTrAP4j2yWPpwW6E22BMKffGmKQWEMV4zoKd2kpYKE1Ok%2BhRODQLdTGmzQKIA8G9Gq6eL1waiuWsSMpfO58xcICgvMNnR3DjxsYcQ%2F6HOk0QskMYSCPH3gYur%2FyQbO6407lWFHQ7eOC8KcmUY9i4s5M58%2BgAeKB2nPB7JQ7J%2FiEKPCmIyZN0zCQyofOBjqkARXEoMDjq3ZI0xqlYym5sbbi%2F%2BCurDwBkDL5r1jfNQts7fkr96aOzLWUmmQndp2j5aKIV400JkcRUPrtXCnwfxQz8dA%2FauvGTqCdNTwkGKsuZ87aXfok6fLhkTU9Py9Ai9rsPpGCyd3lz3S2t3f68PLMBxoI%2BHF2PmdwHIwXiuRtDbievAPZYJjWMV7w9LCz%2F1CxKuXs90nLbgpLvhIFZxPSv%2FRC&X-Amz-Signature=99948b8710a60c6cc15d2fa687eeb9bacc7c8a7021efce49acad5522c356f586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676J3U44K%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqPMmXf4RYd21Zk594BUIR%2Fc3BMiwX8YSJCVMrx%2B%2FqwAIhALp5TcMsGpCUTEtfGbYy6SgNs8x9RgLGlTEbXwXAm9hHKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfHEhWa44AlN6ltmQq3AMpydlWXGlyOM0gLD%2BIgoE21W7Wm823Xz8RqXrqdp6RbXULIA7k%2FoBHy1WD6MxDxAJEfeHBuVIF8JQKQeIGwisKMVuDhzIoYwWwIbeOUAJq%2FHXiZOAAKU0Buc4r6oPy%2B0P0II1J8j71MZhCndhc14OD%2BEi3ZdCWvBkSZXNWL70ym%2F7GKJJGuRE5lmZAdYSshYlVSYxCHjeKcUKay3M0N%2BgiTa6RnDxHZUifTnyuRDF%2FqfCDIRsCwTsUn5Okp%2F7bDWqnWgy38MsxZUsdBipDQhKKekTgiPJmtf4qp%2B4RqseXe8HvCicDzXacwY5N8st%2BgjwYTOzVwoMsqV85FfqgsORUenSVm7wyb2wYJV2p2vr%2Fil%2FoTIsFX4tJw2iVEj0tmX0KsDVIfKJPPaXGiv46OuZjF9VwwYRuXd8hy%2B6MfTrIrAvdoWa%2F1FIpeRZX%2FGt583kQkVlhiKTrAP4j2yWPpwW6E22BMKffGmKQWEMV4zoKd2kpYKE1Ok%2BhRODQLdTGmzQKIA8G9Gq6eL1waiuWsSMpfO58xcICgvMNnR3DjxsYcQ%2F6HOk0QskMYSCPH3gYur%2FyQbO6407lWFHQ7eOC8KcmUY9i4s5M58%2BgAeKB2nPB7JQ7J%2FiEKPCmIyZN0zCQyofOBjqkARXEoMDjq3ZI0xqlYym5sbbi%2F%2BCurDwBkDL5r1jfNQts7fkr96aOzLWUmmQndp2j5aKIV400JkcRUPrtXCnwfxQz8dA%2FauvGTqCdNTwkGKsuZ87aXfok6fLhkTU9Py9Ai9rsPpGCyd3lz3S2t3f68PLMBxoI%2BHF2PmdwHIwXiuRtDbievAPZYJjWMV7w9LCz%2F1CxKuXs90nLbgpLvhIFZxPSv%2FRC&X-Amz-Signature=138e993034cb35a44c9785ebcd58a58e45596cca21c43fea042de2a3982344db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJVTAOFQ%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFB0zRLkz6dDOdC5PQwTWpeAdWQ9bZzSRs%2FLSU9oUnVhAiEA%2B0T3VuLNVuvxL8nrBBPNIvFUPTIEqgrKmoKFBZWU3PcqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FbXyg1R2SLYCRuKSrcA18RzSKHX9l8o%2FmzrpU%2BTObfr8C1Q6uovdBTDmWUcU28lA3Vn1JovA2S%2FRgsRTdDuYZ6cqSsgdVf50e%2BUaPyAh125Soim%2BqzQ%2BX7l2N8Rd00UF%2Fvq%2BKb7KvMwxOJap%2FeARfwDeObybCGuhSSaGGc2dMzG8piLU%2FQAG1TaoZACnv%2FXJ1pmzD6l3NBHKv5sJ28wz1OYQMD91hB9AfocFBXuWp2sk1yZrPJ93f0KnMFLuxUaP%2B1CYFx0WDe7URWeBfzpoygJnv4k3aVXJWDt569Homxo%2B6l1rScPTroXfoTcaV7TjLfRbGBCvimKFAStqLIv%2BeL5GJ80%2FNMbb4VBpYCiw65%2Flq6QuxPQPLDLv6NzyXTg%2BWErHaOppgJX9Eg0r8m83m4PJiF61kvM5aXcwDwQUKm2ZwT08odsUgS16ESRr1cHF2PTqjtFBvbVhuVUrUmZaeiJCowtX3za4iXHZRMmZeL5a7Bi6MKgUv%2B7qtv3CzMMhYA5vcEtSK3erWRM6CBK%2FZ6avarOrdvRtCinIu7RoJp%2FyXtPDxNeOuoqfwFLK9AcpjpTdE3h7BLuh%2FUA7KAoMQS1xvIJvP0LH24Lm8z8JYVrUnThd6lJgo7uJp0HM0pDjOa1Uwcu33aw0O8MNbIh84GOqUBauJtz2Vxu2gFrSthU%2Fu7CEPCRCcZuvJji00CluXS60CUMz80vpqFIND2NNbKtfgESrma94VCf5QU6KNeGLaMZD%2FpRaFXgLtSgxaz0mj3q47eSj1SFaDUl1jk%2B1lzwxO3ZsXkVo7PF1yJgtiriNTN66Telneo6fY6XwSJQks3ZxY0MlVOUZgD36l2652zppAJd%2B9KkJiWGD0P0wPNk5qKrGWhRGj2&X-Amz-Signature=eb1b31c1481787f9ec99f5162fb8c945de9e197a075281d542a95620c1128489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCM3THRL%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEr1OXC2n3GBy80gXLR7%2BzJRYKKCxaaYwl7%2Fvxv14vnwIgdc2CK%2Fulc3%2F35UJWD15P%2BgryT1pm53Wmaa4ddMmKEVUqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNG2SUHoAWpecgFdtyrcA77TuyLyPXUtbXCKEucUZ%2BKcmsuccExUY5RTkmp9Fxnd4TS7HKq5A351LHqCDNc1unYNIOO9EcI3ZwFtumkM%2BO8KLensRmm7T31Mh5xTY1R%2FQwws0rKR2fcUMsiz%2Bi%2BbDvL4mN0Sr8wwxPUTUdRz9gseG7YEL1Slm62KS0IBuIDZLUyXy7zmBjksSzFIbABJ%2BNjOe6Xec1gEvoyRPH%2FKmRyYRQ7qduAWHV0289KsVXV0Ft%2FQetRBBd5U7SHb%2Btl%2BrlhqhkwsImzZEbvIXr5Ml4cUYQ%2FDFIGxsIpnTULrYEquKm0DgxtQLtOyF4O%2F8sJdyr2%2B6TT5CBltFnT5Nh3dBBdpjhW9v6yJkjlz0%2F2rvopcnNbu0qAJBsV5kSFSuURvnsSnQ8Jnh8kjJW63hC7gXt6FOAzZf8u3Vj7iem4NHnoRvINomJSmX22v2lEJQyDXrSwrxdVC2iCfTXz6GRKhTjIGtiCW7s%2BKxmRXJbF34s9WnSHQBlmuxrtFoQDAjtZQbcCfGe0O8fYwznCSTA6atpHL7lQpmqUgM3LZwJFqYMM3ybwXyQHyflVOBLCAIKOLZSIcxDC5EpHFROvSWwW9xk0M2cJt5Z5ySaxBN1ww%2BiNyx%2BHJKhbR3vuVzzjMMMvJh84GOqUBrDdyhynpWT3448Ag2TmuVXaKnZ8TERXRDoi3FIAUF3QL8Tx5V3rVxHSA4tO6wMjYlIUlN6TtTLJRXgKHFM5SmSUOcFJu4wWCmb79HgsThyYoLnCNlL3KSOElvqsOkhr4AZpC94%2FfgbvmEYqkayr0nDgVmYfqAZkiNlyWTcjz86o0voVtZOuqmRftshi9SoFmQ6bC9ZPHRGj8oNDr77ljYTSsuY6D&X-Amz-Signature=fd56ddf6079b29df27759fefa5f4295548955c4fc185d6a00d8338a920295363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7BKAKVE%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExvIEUx6UEy3ICT3hG9yv5CHX7OHE5pppUSnGAqEYY4AiEAolHwXlVQpf%2FXVXfjzjL5b3TvAIpRiZXF6zjzg6infSAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNZHjLedJaoN%2B%2BBSSrcA4gESt4sOFM5yGojhaaGtkRbFFruU3VmqIGjs3K0HM%2FhK90KgwJ%2FM0uvsKlZqq7HIObyFtLNfvn0qhXNzkaO4niQi2q%2FdCaoaJQLM4FGq16MZeaw5mU0mltbR0muKim89tBfLv3%2B3XnKcqrZyxnEbyWPnFWNZTtiVg8N7VHtGc7rvMriQdJkZ6lBOMtX3HE6ba6FfuQtjM2e5E0yQThm%2F0HgAUco7rmfhOcH2COXLK%2FWTq5t5%2FoIcxEe0SmAa04JIGi2kBz%2FVtxq60CPoy1I3FPBVyAwrtZ5t5wR2c29uWjiUCAlGF4%2FL9aFtZN020zs%2Fsgy3KBwZgTlDjBsoTN1An8S2PE6og91K8QEYyaXuYNAvhHQ9C%2FM35xby2daLFZORGViY5oNDATdrNhOt3dm6RM3s8W8Nf7GN%2BZkmEiW6ux%2BFdqmBvq5zJ8ISLnBIz28z%2BkplPslzkDQcs6bq7YHTWcIYOxdOBaqMEF6PZY%2F8Z6tCqd5t4wZWzT3IrLcb5k2m%2BD1TsElbpfyX%2FVMYtHyk5DrgCR5hAFo0iO3soeEi7A9Vfq25PuL4JRExSkfcCXhkAdYnFrvUh9jIjJWHkCkjDDSFqt%2BrhF8h9RUjs1A4%2BXXKe2GfdM1ZoaMeCCxMInJh84GOqUBNg%2Bx9lL%2BC%2F5twMoKMRIbwXG2SgSV9uqxCV%2F8U1xPbpB%2BpJ%2BGN0THuJgewRorysQABE6ViNjvIsG%2FOTbkytvek6Clnskv1NHmQPn69x6eb4z%2F09qQzlfS%2BV%2BIOBpEQL6xiXJLPrH3EpYgv%2F8OkyM7piGL8j915JgPjgsQ5n7Q18%2Fq05LJ2K9oAsynX5nCUOn1IXnMjY9C8rqxib21N7cEmT1m0bUb&X-Amz-Signature=fb87ed647eebe9478929f8b2c82ddac9b5cee0df58e4bf3d4981bc279b5f75ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676J3U44K%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqPMmXf4RYd21Zk594BUIR%2Fc3BMiwX8YSJCVMrx%2B%2FqwAIhALp5TcMsGpCUTEtfGbYy6SgNs8x9RgLGlTEbXwXAm9hHKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfHEhWa44AlN6ltmQq3AMpydlWXGlyOM0gLD%2BIgoE21W7Wm823Xz8RqXrqdp6RbXULIA7k%2FoBHy1WD6MxDxAJEfeHBuVIF8JQKQeIGwisKMVuDhzIoYwWwIbeOUAJq%2FHXiZOAAKU0Buc4r6oPy%2B0P0II1J8j71MZhCndhc14OD%2BEi3ZdCWvBkSZXNWL70ym%2F7GKJJGuRE5lmZAdYSshYlVSYxCHjeKcUKay3M0N%2BgiTa6RnDxHZUifTnyuRDF%2FqfCDIRsCwTsUn5Okp%2F7bDWqnWgy38MsxZUsdBipDQhKKekTgiPJmtf4qp%2B4RqseXe8HvCicDzXacwY5N8st%2BgjwYTOzVwoMsqV85FfqgsORUenSVm7wyb2wYJV2p2vr%2Fil%2FoTIsFX4tJw2iVEj0tmX0KsDVIfKJPPaXGiv46OuZjF9VwwYRuXd8hy%2B6MfTrIrAvdoWa%2F1FIpeRZX%2FGt583kQkVlhiKTrAP4j2yWPpwW6E22BMKffGmKQWEMV4zoKd2kpYKE1Ok%2BhRODQLdTGmzQKIA8G9Gq6eL1waiuWsSMpfO58xcICgvMNnR3DjxsYcQ%2F6HOk0QskMYSCPH3gYur%2FyQbO6407lWFHQ7eOC8KcmUY9i4s5M58%2BgAeKB2nPB7JQ7J%2FiEKPCmIyZN0zCQyofOBjqkARXEoMDjq3ZI0xqlYym5sbbi%2F%2BCurDwBkDL5r1jfNQts7fkr96aOzLWUmmQndp2j5aKIV400JkcRUPrtXCnwfxQz8dA%2FauvGTqCdNTwkGKsuZ87aXfok6fLhkTU9Py9Ai9rsPpGCyd3lz3S2t3f68PLMBxoI%2BHF2PmdwHIwXiuRtDbievAPZYJjWMV7w9LCz%2F1CxKuXs90nLbgpLvhIFZxPSv%2FRC&X-Amz-Signature=624028cd32f2bbc32014a588846c9a639b528b47feca69b28f951eda11b10412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDB7J6DU%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBe3iE6TptZPv2c9y9n9iFxRCJn0W90MvesSTiwifS9EAiEAkZ%2F6wqBAHBGUrgh%2B3%2BYV1S8lVHDgaQawgVPo0Tp3hCwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2ojkEIpJbJoezoYCrcAw86uLbve0rLP0nm8aGxFww%2FSZCtqNzE1YzxjsaouCaLemy0%2FJD8LHp8%2BlHDSZVE5FZY1Q67YKdZdhRAsbdTheI13ErOEr%2FOh19QR7TgLunIRkj3mZ%2FBdPHN6yAgaPTA0Mx0Wg%2FxzeaevjjBhgxBXbLQ5r7YjWBmVnMCzdhroBPS89CH%2BezqQhf0p1yfl3QoIrcgX1CJmKGE8VPikZxtKIYmlBYBF27PcIDvwnkQKGdnJYJbW0n6kmn1c1%2FEv8%2BT5sl08p%2F6m97acpAW8RcPHZrAaj7fE%2BTR2hYX7Q%2B9dD70h54Pag1QDD%2FfziaK5Ajzd6rxlDd3zvw6CEUu2FgPXRofE9UByJ%2FCYB4UdMxUNRWVJJbQV%2BYR1SKPehVMZjeTFWM9CyN7PFBCeHT9TRd2gGO6lYBRUKHSpH0KPfi1KqyiRFbbBl%2BOhA0Nj%2B5uLgytg4SN8jzM9GhZ1zuNq8aeUu8ptN7Qh0eKoQBIhTPZnIVXF6OrxWh64ZXoJgeOFwy9Bmpw9F4%2B4%2Ff9wrHUG69gYZc9XYFeHhKtUUTnSWAjWRB6aAQdnFhoacINwOGDhV3Cj031ffEspk97amb7jmE1P4HD3DCI%2BqDhDCah9uWzYwwztNOOhOQYBwuW30HkMO3Jh84GOqUBCc2dRRn5Gl9s1wBRLgJvhBMO7%2F1zeidCXiq13g459c99MuzwWCqhUwVq585oUvlPtdue%2BNVeYuRMgMeYh%2FKZIjk9d6pliLJ7T0Ee5dSDdTAce2M%2B8tLetr3IZMZ%2FJwXFr5WwSFTOXaEXX3wFQ1zczglXqvoOfIyVshDrUnTEgpEU7I4lUscd3s0%2FIsGIC8oB07NwDUvykq938OnzpALrzR0VQLHD&X-Amz-Signature=74f37c4f3a60d442563fd9bae39ba744953c62a12f21f474f47a2b872319a168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676J3U44K%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqPMmXf4RYd21Zk594BUIR%2Fc3BMiwX8YSJCVMrx%2B%2FqwAIhALp5TcMsGpCUTEtfGbYy6SgNs8x9RgLGlTEbXwXAm9hHKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfHEhWa44AlN6ltmQq3AMpydlWXGlyOM0gLD%2BIgoE21W7Wm823Xz8RqXrqdp6RbXULIA7k%2FoBHy1WD6MxDxAJEfeHBuVIF8JQKQeIGwisKMVuDhzIoYwWwIbeOUAJq%2FHXiZOAAKU0Buc4r6oPy%2B0P0II1J8j71MZhCndhc14OD%2BEi3ZdCWvBkSZXNWL70ym%2F7GKJJGuRE5lmZAdYSshYlVSYxCHjeKcUKay3M0N%2BgiTa6RnDxHZUifTnyuRDF%2FqfCDIRsCwTsUn5Okp%2F7bDWqnWgy38MsxZUsdBipDQhKKekTgiPJmtf4qp%2B4RqseXe8HvCicDzXacwY5N8st%2BgjwYTOzVwoMsqV85FfqgsORUenSVm7wyb2wYJV2p2vr%2Fil%2FoTIsFX4tJw2iVEj0tmX0KsDVIfKJPPaXGiv46OuZjF9VwwYRuXd8hy%2B6MfTrIrAvdoWa%2F1FIpeRZX%2FGt583kQkVlhiKTrAP4j2yWPpwW6E22BMKffGmKQWEMV4zoKd2kpYKE1Ok%2BhRODQLdTGmzQKIA8G9Gq6eL1waiuWsSMpfO58xcICgvMNnR3DjxsYcQ%2F6HOk0QskMYSCPH3gYur%2FyQbO6407lWFHQ7eOC8KcmUY9i4s5M58%2BgAeKB2nPB7JQ7J%2FiEKPCmIyZN0zCQyofOBjqkARXEoMDjq3ZI0xqlYym5sbbi%2F%2BCurDwBkDL5r1jfNQts7fkr96aOzLWUmmQndp2j5aKIV400JkcRUPrtXCnwfxQz8dA%2FauvGTqCdNTwkGKsuZ87aXfok6fLhkTU9Py9Ai9rsPpGCyd3lz3S2t3f68PLMBxoI%2BHF2PmdwHIwXiuRtDbievAPZYJjWMV7w9LCz%2F1CxKuXs90nLbgpLvhIFZxPSv%2FRC&X-Amz-Signature=65b19c46c59bc5fa21b9eef6c7ce5b1c33c6d76da5c16dd5c7763d10865ba9e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN7MQ52Y%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8TMcRqDDSN41RmaHERjRPemS6jhF6CtGsTLYZVi1QDQIgKwFlSXqSB42uuzWkBWEVIi6WE4eQxNwmwHin6XOT0ssqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaUuLJKM7Hr0O9%2F4CrcA2LJGwOlSsh%2FoJFURaaY4%2FsK9aw4NPqhz0Lhhl0OwJE566yPDqcC2ehr741HkcY3Dafq5vSFimwo8e54pf8uqzbB6tLFTXPEvR1r0eCqc5oNdHMaRiq19%2Ba7TD0xN6RO3Nho8vHzKkfr18DDnVkXA%2FL1FrWEiBNlHkP9JfXNr7y%2B6iEWuNHNKYh5XSWv0QCLkbyNbkwGLatln%2Bbl%2BQEqJu2jcrnV9nwM7o3lp7jz5FsW3v5%2BVDKEbPJjLzeUvo3%2FEe0V9VFnGZHvwI6crzc6xjBmreRcsJD2YYr6HIddFt0%2BNV40xUONxD47aFnd8SNqaDfA6CUFoMs0D0Wl5Jx%2B%2BUDQxgDA1RDs8KpC66LNFn9PvUMbyIDWWTL7ZnGwF8z%2FcMZ8puNfx4qBPRkwTzlgA88w2LxJxwSLuB4VWHpHXSgHdr7SLK7nxGYAJ1db%2FpCMY%2ByyC%2Bou3py3FOgRYmERfdvQPvOLOCYkwAC5l%2BM%2FonUhd3SbCUWH66Zx21hOJbZmmDWUX6Sqd%2BU%2B%2FgZcA%2FqhIPScTgqSVewFLklHj8LpkL61TEaW4dixH3LHTF077dkLTnqGityzog38B9UBMmFUwj7MA6q39rXITlPw0zuQK3jBcKSAiOkn4mEgMnW%2FMNzIh84GOqUB1JEN8h5gbQO9rVrS7p85UCSp%2BzEobCXVJtHpe4jbrCQxoD3GSVrbGb1Uh0qJuIlifS9afVApZWbvrDcFqIO9LJIZTZF4OZc%2BZIzH3%2BvDYWhG7fB%2F1XEorTnn5iQ48cnAKlP2Fg3DNl%2BuXZZMz6%2B2cH3SKLbn1NEgTjDv8Vf8qHp1wln6SzoOl687wPq66IF%2FtPwSKkaY2cj4aVWfAUxamYF%2Bwodw&X-Amz-Signature=84e28f426ed0576942a84c8387719884677423b2da685bdb5ffefd8fcd519189&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676J3U44K%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqPMmXf4RYd21Zk594BUIR%2Fc3BMiwX8YSJCVMrx%2B%2FqwAIhALp5TcMsGpCUTEtfGbYy6SgNs8x9RgLGlTEbXwXAm9hHKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfHEhWa44AlN6ltmQq3AMpydlWXGlyOM0gLD%2BIgoE21W7Wm823Xz8RqXrqdp6RbXULIA7k%2FoBHy1WD6MxDxAJEfeHBuVIF8JQKQeIGwisKMVuDhzIoYwWwIbeOUAJq%2FHXiZOAAKU0Buc4r6oPy%2B0P0II1J8j71MZhCndhc14OD%2BEi3ZdCWvBkSZXNWL70ym%2F7GKJJGuRE5lmZAdYSshYlVSYxCHjeKcUKay3M0N%2BgiTa6RnDxHZUifTnyuRDF%2FqfCDIRsCwTsUn5Okp%2F7bDWqnWgy38MsxZUsdBipDQhKKekTgiPJmtf4qp%2B4RqseXe8HvCicDzXacwY5N8st%2BgjwYTOzVwoMsqV85FfqgsORUenSVm7wyb2wYJV2p2vr%2Fil%2FoTIsFX4tJw2iVEj0tmX0KsDVIfKJPPaXGiv46OuZjF9VwwYRuXd8hy%2B6MfTrIrAvdoWa%2F1FIpeRZX%2FGt583kQkVlhiKTrAP4j2yWPpwW6E22BMKffGmKQWEMV4zoKd2kpYKE1Ok%2BhRODQLdTGmzQKIA8G9Gq6eL1waiuWsSMpfO58xcICgvMNnR3DjxsYcQ%2F6HOk0QskMYSCPH3gYur%2FyQbO6407lWFHQ7eOC8KcmUY9i4s5M58%2BgAeKB2nPB7JQ7J%2FiEKPCmIyZN0zCQyofOBjqkARXEoMDjq3ZI0xqlYym5sbbi%2F%2BCurDwBkDL5r1jfNQts7fkr96aOzLWUmmQndp2j5aKIV400JkcRUPrtXCnwfxQz8dA%2FauvGTqCdNTwkGKsuZ87aXfok6fLhkTU9Py9Ai9rsPpGCyd3lz3S2t3f68PLMBxoI%2BHF2PmdwHIwXiuRtDbievAPZYJjWMV7w9LCz%2F1CxKuXs90nLbgpLvhIFZxPSv%2FRC&X-Amz-Signature=d58bc642448907754bb447ad407c72e5336f6ff205e1df92e3ec0d5fd6c35df4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGYAZI6%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F8CH%2FkO98%2Ftj8Qg%2BeKSbOcW1vwkAubveXGbrC2pl1PQIhAONC7jJjSoZx9mE6uzKgDip%2BqopC2H6ldwtKI21xLeH%2FKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbG5iTuapInqr1Dj8q3AN0hgAiD90L3SUSrHlVBN4uEbEZy8JB6lQn1xz9yPPyFykVQP%2FZcH%2F0XTlU7Q7WmoFJ1%2BaLUDqRKFa8Yrznn5LsLDPtB7LcDmEba7u97RTjskpcqpbK9f%2F%2FtJYZlqJoLd68kdWm2bQ8p8rQk3LOF%2B1Nhvu3Ect0Nz3i6hga3s674u5ONj%2FzTXhzHZA5CJLnXQoLZ3tfsZle8vZ5Aoea2yvctSufnLlDT0rnTZ%2Fl9K8xpcZMmquGYmxH3pMO5MPTasszUxhMt272rW9Y3UewR1VawmRpmo5rOZCKPULd%2FvtjqrDeQ5Yo0ulp6GAO6ge8bZSPHksopKEVaWcXFewfLD6K3S7k80HGP1GRmOOpDzbEIXaxmWFYgVExKT%2BKvd9G7a6WOI9SWszBUBWTQfOaix1KK7ol7ArTDdXlkYQJ6GJ965NW7kKyO68ydwEGPaFVouPDMwflIUavmUARGR36jAtfAToT3rjkPHRprNoB7X%2BeEyr7cxqbUEWQ2vwAACDbWHF9Vu73kN8noTUJrNHusYHnTBtTWmtiiZQSIWJx4%2FCPUNnOpcFhXAPfobHHj6fJMvJ%2Ff3TsU%2F%2BXuswS3PUOp3U%2F%2FSQrF8PX9i%2FXhUjbOZ84yBg7DMZ39QUa1fPDUzDOyYfOBjqkAfdReFHAtS2AGl4WofgjmmUzylp%2Byl2BjngGoE5AStpoH1q%2BZqeZdinpAU40VvQmPjBogZXLRDhbRsizpb%2FNnPR6CWXbyePFqBWukH9gZxLyi%2FI0BlpIn4XSE%2FqvfAKqmtsq8GsFmAqUHVwLhiSAT%2FsGE2iFxmHntvOrtBxOlceW5xBWolyp8%2B9O5gns1WTt52bApefZg9KgOh9rn%2FMZZsVOkLvd&X-Amz-Signature=5699874f477c9ff4660227a2a69f64f128d92188b0b32021c9e771815267e1b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676J3U44K%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqPMmXf4RYd21Zk594BUIR%2Fc3BMiwX8YSJCVMrx%2B%2FqwAIhALp5TcMsGpCUTEtfGbYy6SgNs8x9RgLGlTEbXwXAm9hHKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfHEhWa44AlN6ltmQq3AMpydlWXGlyOM0gLD%2BIgoE21W7Wm823Xz8RqXrqdp6RbXULIA7k%2FoBHy1WD6MxDxAJEfeHBuVIF8JQKQeIGwisKMVuDhzIoYwWwIbeOUAJq%2FHXiZOAAKU0Buc4r6oPy%2B0P0II1J8j71MZhCndhc14OD%2BEi3ZdCWvBkSZXNWL70ym%2F7GKJJGuRE5lmZAdYSshYlVSYxCHjeKcUKay3M0N%2BgiTa6RnDxHZUifTnyuRDF%2FqfCDIRsCwTsUn5Okp%2F7bDWqnWgy38MsxZUsdBipDQhKKekTgiPJmtf4qp%2B4RqseXe8HvCicDzXacwY5N8st%2BgjwYTOzVwoMsqV85FfqgsORUenSVm7wyb2wYJV2p2vr%2Fil%2FoTIsFX4tJw2iVEj0tmX0KsDVIfKJPPaXGiv46OuZjF9VwwYRuXd8hy%2B6MfTrIrAvdoWa%2F1FIpeRZX%2FGt583kQkVlhiKTrAP4j2yWPpwW6E22BMKffGmKQWEMV4zoKd2kpYKE1Ok%2BhRODQLdTGmzQKIA8G9Gq6eL1waiuWsSMpfO58xcICgvMNnR3DjxsYcQ%2F6HOk0QskMYSCPH3gYur%2FyQbO6407lWFHQ7eOC8KcmUY9i4s5M58%2BgAeKB2nPB7JQ7J%2FiEKPCmIyZN0zCQyofOBjqkARXEoMDjq3ZI0xqlYym5sbbi%2F%2BCurDwBkDL5r1jfNQts7fkr96aOzLWUmmQndp2j5aKIV400JkcRUPrtXCnwfxQz8dA%2FauvGTqCdNTwkGKsuZ87aXfok6fLhkTU9Py9Ai9rsPpGCyd3lz3S2t3f68PLMBxoI%2BHF2PmdwHIwXiuRtDbievAPZYJjWMV7w9LCz%2F1CxKuXs90nLbgpLvhIFZxPSv%2FRC&X-Amz-Signature=75f2e15947485bf3084d33727f8d40dca53d35132c752a7cc2b025d9b8f9762b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P76VGJS%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F9gQm92BYAcq4NSnp9l4avIkVHDYl%2FEm9KUfdVdQ0vgIhAP3wWmCHFoqPovZ%2B0N1GE5lDDcnm1B6KAZG1DH2JnyVEKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzluvlQ16FACcArgbMq3APRO8uSBzLEvL%2BqXksEBW8GnzD9PhBLR2lmK%2BsODs1xUtxjuUNo82OCzDn9fu7mjRrkcHpTYT034h%2BcUE%2BfpVuPeoEcByrY7Nm0cfoPbHLM%2BNjaIqGw0AhzapIZo5l9KwVesBCmcGigbxyCjUFQcz30nalyszcKEw5h06DIBdxOm6s8l1c0brBIatImAo3OZUxtmDJrkU%2BFeLNzx0YnnXi3GB0PfQ6sW6SsjEJ%2FKlOMF2OewlJDLiJeLjCWzsqeaTFENox4l6uzUlFQqSVkWnxsKdZZAxS1jIE1x%2FYc5R4WyC1XeAgO3LHeg1nx5Yakn5bOIUMJ%2BHILF%2F9%2BWKrX8X4R0Dv2ek4J%2BwOMXVLcBSNdItg4OhlgTzyFa7xy%2B3b90fiZ6Sz1rqpYWs0seijwOnBoFjia0aA0Xv0vkzTBSE24sifBu0ZQvGaOwVuXiVf0ZY2GWbUKJn%2BY34qvaPkLElGH4%2F8EySjyw%2FFYRL3dP0pmcOVm6V4st09JmhI2SaeeH2qjoMuXuN1dXEyWstRqJKta2FVSrSdFD1CSpIZwR9PuP4XDHEIod3M8Lm%2BvZQQIb%2FACYXy3zJfnLGy62QTSIELTjXJVusQypEOIJyXg0CFzdmA0uqVFRZqsON7%2FZjDjyYfOBjqkARA%2BEWqu%2BhLcxubLNys9BBARJWjo3PLCjDZ7nNtXwbZMleeKxPizdskOuB%2BBlnGfkUaELp3Nksfb8YcO%2Bonc6v8cZGE5OVu3wGGmDXE8TYdK2Q%2FfB6ImuZDhrY%2BNTdFiUCKRMDkMvvfUpPbk8iXeLWcChw1oOF3k7hZIR1Zmjdzg0Y7bnuwLokSvfiFQYhrFBcCkxGsA2a%2FkgiOomo3WxFaqIqTc&X-Amz-Signature=951d03324584ac7d1db1848bea12f6b01b8ba7b15e0e8598251bfecdbdcdf29c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676J3U44K%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqPMmXf4RYd21Zk594BUIR%2Fc3BMiwX8YSJCVMrx%2B%2FqwAIhALp5TcMsGpCUTEtfGbYy6SgNs8x9RgLGlTEbXwXAm9hHKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfHEhWa44AlN6ltmQq3AMpydlWXGlyOM0gLD%2BIgoE21W7Wm823Xz8RqXrqdp6RbXULIA7k%2FoBHy1WD6MxDxAJEfeHBuVIF8JQKQeIGwisKMVuDhzIoYwWwIbeOUAJq%2FHXiZOAAKU0Buc4r6oPy%2B0P0II1J8j71MZhCndhc14OD%2BEi3ZdCWvBkSZXNWL70ym%2F7GKJJGuRE5lmZAdYSshYlVSYxCHjeKcUKay3M0N%2BgiTa6RnDxHZUifTnyuRDF%2FqfCDIRsCwTsUn5Okp%2F7bDWqnWgy38MsxZUsdBipDQhKKekTgiPJmtf4qp%2B4RqseXe8HvCicDzXacwY5N8st%2BgjwYTOzVwoMsqV85FfqgsORUenSVm7wyb2wYJV2p2vr%2Fil%2FoTIsFX4tJw2iVEj0tmX0KsDVIfKJPPaXGiv46OuZjF9VwwYRuXd8hy%2B6MfTrIrAvdoWa%2F1FIpeRZX%2FGt583kQkVlhiKTrAP4j2yWPpwW6E22BMKffGmKQWEMV4zoKd2kpYKE1Ok%2BhRODQLdTGmzQKIA8G9Gq6eL1waiuWsSMpfO58xcICgvMNnR3DjxsYcQ%2F6HOk0QskMYSCPH3gYur%2FyQbO6407lWFHQ7eOC8KcmUY9i4s5M58%2BgAeKB2nPB7JQ7J%2FiEKPCmIyZN0zCQyofOBjqkARXEoMDjq3ZI0xqlYym5sbbi%2F%2BCurDwBkDL5r1jfNQts7fkr96aOzLWUmmQndp2j5aKIV400JkcRUPrtXCnwfxQz8dA%2FauvGTqCdNTwkGKsuZ87aXfok6fLhkTU9Py9Ai9rsPpGCyd3lz3S2t3f68PLMBxoI%2BHF2PmdwHIwXiuRtDbievAPZYJjWMV7w9LCz%2F1CxKuXs90nLbgpLvhIFZxPSv%2FRC&X-Amz-Signature=de8326e734034725194fcf77d8833748e80918f6aa0889e1aa7a00cc18009e4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z24MTQJL%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7OxSKicEhFkx1WUcvW92Jspp5AkwY87xKS7yMyE8bowIhANwCBPfdU8EE3LPFb0FYxCLyUP9lN%2BgUF74mt2PXjPY%2BKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8%2F6hAGCWzQoxjQUsq3AO0fcLhgJ2ZT9C1kXPixFqga4uVWl5Bn19%2FTE0%2BfglFNWb23qz2PEqCyYjvXDd55srAmUpwxwrM2M%2BObHd0DImrAqJDdIq5SgVfE0AkGf8OTxtHBbve4lhQDdAaH1DTe1SQ9z5Rr3B5zyP4aCY9MDdEZKiQfFoh9NQIdCYnMGQD%2BXrpuoHA%2B2luR0DdBQYSy33Z2LFYlfW%2BKaCfosli0HJ1Lj6iq0%2FrGGkvrvvYuys%2FnHcfzLxzELBUQImAXffvUuD8wvUBIr4h3o%2F2wGaLktOhVU0wo%2BbX1S4zPj0W3BBdZn4sLjevK7aSZRH1KTqsL5E1ll7fPEqkLneIdMDAeMCC3StK1QwU8lKcDYygJm61hoL4E7EM743oggv9cuNF%2BvNvwjpoYtpoQ62JuZqcjYNK%2BRGvT8p1GM5EqGmUCerIOJJwMYPhZlsOJmAVXUuN14YN2mqu5ZRybMuEtS2ngQHbszh8osDXnTQ4wL0vVkd9fOu86veNz7zkAfGFWTCZJZFfjOwz41vqIr8k9TIbZ%2BXyc0dKGXuSFy5YovtOqgO9VLLwY1Vqxz%2F2FIskz7pXzqDY3LwdO82WgfX4JJOryoiI2HKofRWsuM08cnGv3UVg%2BEz0fTjzrt4CxQ5XQzD5yIfOBjqkAY1OE6eo3hBxRhcP7PKRncJzBKm058G8mKugIG7r9EddNEsolbp34AYz1eE7i6zq3vzoegKy5q8hLEUvBO8x3K8v4KuDEPonJAzJfuT%2F7PxkDZgpB5fyyGjCy3KKiqRPKgVzvUDYMVC%2FqPWtgtRRRw7UntJrAlQLL2fAn9J8iNU7YNkIcSrKBFNVAOUThd0DYgGvlbGI7X6hsso9koLeKG5ClWYW&X-Amz-Signature=5106bc77a566e662a8044d47894b739f0527d488f4372d8201dc56baff3ed107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3KNFVPP%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVdC8X2lvwXwcF3uG7z9r37tFv57lr2lf9WfhtHJ8InAIgRMEE7bbu1sVFkXDuknJGzMWOzAX2xw95sZCq8bsMcvcqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEg04HJUhSnl1FMWSrcA%2BW%2FMFj5g6LDhVjWWU9xhZIwGOQT2lwwiiY0lxjugS8lfmoZfgAyoOxwoIoPyR%2Bjeaci9G9k%2BOIo4li538jgdlpYM2p448grA%2Bo5u9tyAbDmwVUfAvFoXnLXN%2BWV5rIJcep83KhoJstXE2RlwqJZVf8vkGqIPAk8GiaLLWLrEdvoBFoOWSbtjiEifASOlPFf5QJaM0sWzUBVyHazeMmuMnCIUTdHyY%2FNfnrpsgrC87yjqj6xi9nHR2UO1osi%2FrXNOHk7jSmQdccHmg%2Fu5YE4S%2BXqz7I4UKAyNM1fhpwnYS5ar8qpB%2BWUtJXKdi7Oyz%2Fb6WNXr78IVeNoAHxXbgHhX0chb6BWGrWu2Y3z5t3l2J8y74ytlFn9Ws3Gg4Um6%2FLgPZ6iA63b1CR9RUkLrmALx1FwP1kxcBa1aL7jp7tdvMcR0px%2FWAyOTqgk4g%2B%2BpshUW%2Fs6yhoWJjKIbukNt0RS4tORyR7Lam8DWX9%2B6ve9RtvohHpgnl3tmkD8d6QuD9ilYa4RmIraVujIEcqZ0YeMZtwl4I1NtIanh9bbuTHvSgJyI12smYAVh7I1bSlpR4rMfKjiuDWxAwQHQjw5xG7lULyZQIzkHUJo0FAVjykBMokEF%2FMsgot98wOc9h5XMJXJh84GOqUB2%2FSfB%2BhqrVKgsL%2BeK9xokEIrJoDuF8c4CQwkwOc6OCeichx98nvGF99cYngZ%2FK3kuhR4SqAAgDI2Z7BU%2B8nQA%2BW0B3NXmrEkjlQtKPb9i3yRgrloSlehxMfj19gm4yt6nT6QbVAgKDiN1Pogslgv9XuLhunlVccoretktTj%2BxSYvDrgxK%2FDRWqhy45uKAqDjkLVDBWHTC8H2xkAyxU25WoVtCjGV&X-Amz-Signature=9a9b9ace8d2352b4495291e14f4821d24d8facfae330247480c06d20aaa5016a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3BM3DL%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLr%2ByPMFQkcWn0b2L%2FHfkOg1mTikFHiBXG3sRiyFc%2FlQIgJ3xkBLbyrqp5aOJ6yQk4C%2Bsv%2FAanodGai5ls0FsWJNcqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlruYadDjcqFKCiGCrcAxQGku4cnn8MjH9VsS3uBhTRf8kmrPC1%2Bf9toxbQHMw78LqWU8StGny3flMupGbAqsy4R1KBYmbRV2Rp6ytKpxEJZsKyyvXWaEjOQJbnVIceAxWNqKr%2BXNbY64oXHIy1k3Aoh0avEjTh7C0qCSoQMR%2Fdke%2FnMjA%2B6VY80whIBlhrGqT7sl%2FY51W5kiESS0HdesaxReeoASrLHw%2FzFi394f4aR7icySvh5w2ZlQe7rabGz1CZl1ov3jQEl8NoHMQGkeoy29S2yu67vDNi5T%2BF1RAgS8%2B%2FfNNxa%2FsgxiUwNEENHqD58WfMA99M6l4V0uaE1S9ZAnKdk8FspubD%2Fy%2Fg%2BGocCrz6Ks%2B9ZQHladHTGeoB6KmXBw7l7MQT5LWiKt0r9go3cyUfAZ8gKFzYo5iGKw3iuwri%2FmXa0A0hVPR%2BhlAuUmGc3uDmwIuxlK9B1ax3DQQZOp1LTj86KoXwtoLD1rKjDT0Oj5inkNfnDEZXiuJJ%2FCDNvSI9B99mqGpYk7kgMcL5fbt8kUqJqduHfVGDvJYYaCCAiCEeVWy6FSOvguHvSUog%2FKM%2FAH0VvBgzRa2CmGtsWURkGbB%2BAXqOGZAi8ykEJ293MjtH6YrB36v1ROVQctMYAq4uIEuJhzVHML7Ih84GOqUBhdrzzeIhdXpkAKJM9NJYfUM9bzBo%2BXBpm886Ekuo5Cfmnn3YQJX06gNkjcckdmacKcLKBO%2F4I2xFGwWaslh2rqGfp%2FYWKWk7yuONaf%2BesJXIVUB92Csd%2FebMX60ReZKunf8tZmruLi7cXyrm%2BILWoSWq3lYkaFp4Uvye3o5WF9miKtWa5zmXw9JbDyVoEb9P%2BPIRdbHWV2IeNxcoxEBqvIJ3sX0a&X-Amz-Signature=03353a279caef6b09e77e1b3c3974c3fc78e45897998f9a2c28f7572d300936a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676J3U44K%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqPMmXf4RYd21Zk594BUIR%2Fc3BMiwX8YSJCVMrx%2B%2FqwAIhALp5TcMsGpCUTEtfGbYy6SgNs8x9RgLGlTEbXwXAm9hHKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfHEhWa44AlN6ltmQq3AMpydlWXGlyOM0gLD%2BIgoE21W7Wm823Xz8RqXrqdp6RbXULIA7k%2FoBHy1WD6MxDxAJEfeHBuVIF8JQKQeIGwisKMVuDhzIoYwWwIbeOUAJq%2FHXiZOAAKU0Buc4r6oPy%2B0P0II1J8j71MZhCndhc14OD%2BEi3ZdCWvBkSZXNWL70ym%2F7GKJJGuRE5lmZAdYSshYlVSYxCHjeKcUKay3M0N%2BgiTa6RnDxHZUifTnyuRDF%2FqfCDIRsCwTsUn5Okp%2F7bDWqnWgy38MsxZUsdBipDQhKKekTgiPJmtf4qp%2B4RqseXe8HvCicDzXacwY5N8st%2BgjwYTOzVwoMsqV85FfqgsORUenSVm7wyb2wYJV2p2vr%2Fil%2FoTIsFX4tJw2iVEj0tmX0KsDVIfKJPPaXGiv46OuZjF9VwwYRuXd8hy%2B6MfTrIrAvdoWa%2F1FIpeRZX%2FGt583kQkVlhiKTrAP4j2yWPpwW6E22BMKffGmKQWEMV4zoKd2kpYKE1Ok%2BhRODQLdTGmzQKIA8G9Gq6eL1waiuWsSMpfO58xcICgvMNnR3DjxsYcQ%2F6HOk0QskMYSCPH3gYur%2FyQbO6407lWFHQ7eOC8KcmUY9i4s5M58%2BgAeKB2nPB7JQ7J%2FiEKPCmIyZN0zCQyofOBjqkARXEoMDjq3ZI0xqlYym5sbbi%2F%2BCurDwBkDL5r1jfNQts7fkr96aOzLWUmmQndp2j5aKIV400JkcRUPrtXCnwfxQz8dA%2FauvGTqCdNTwkGKsuZ87aXfok6fLhkTU9Py9Ai9rsPpGCyd3lz3S2t3f68PLMBxoI%2BHF2PmdwHIwXiuRtDbievAPZYJjWMV7w9LCz%2F1CxKuXs90nLbgpLvhIFZxPSv%2FRC&X-Amz-Signature=b80998c060d3b5b040364bf4625b330d6f2281aaee0abca8f2ba03d8c367a652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676J3U44K%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqPMmXf4RYd21Zk594BUIR%2Fc3BMiwX8YSJCVMrx%2B%2FqwAIhALp5TcMsGpCUTEtfGbYy6SgNs8x9RgLGlTEbXwXAm9hHKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfHEhWa44AlN6ltmQq3AMpydlWXGlyOM0gLD%2BIgoE21W7Wm823Xz8RqXrqdp6RbXULIA7k%2FoBHy1WD6MxDxAJEfeHBuVIF8JQKQeIGwisKMVuDhzIoYwWwIbeOUAJq%2FHXiZOAAKU0Buc4r6oPy%2B0P0II1J8j71MZhCndhc14OD%2BEi3ZdCWvBkSZXNWL70ym%2F7GKJJGuRE5lmZAdYSshYlVSYxCHjeKcUKay3M0N%2BgiTa6RnDxHZUifTnyuRDF%2FqfCDIRsCwTsUn5Okp%2F7bDWqnWgy38MsxZUsdBipDQhKKekTgiPJmtf4qp%2B4RqseXe8HvCicDzXacwY5N8st%2BgjwYTOzVwoMsqV85FfqgsORUenSVm7wyb2wYJV2p2vr%2Fil%2FoTIsFX4tJw2iVEj0tmX0KsDVIfKJPPaXGiv46OuZjF9VwwYRuXd8hy%2B6MfTrIrAvdoWa%2F1FIpeRZX%2FGt583kQkVlhiKTrAP4j2yWPpwW6E22BMKffGmKQWEMV4zoKd2kpYKE1Ok%2BhRODQLdTGmzQKIA8G9Gq6eL1waiuWsSMpfO58xcICgvMNnR3DjxsYcQ%2F6HOk0QskMYSCPH3gYur%2FyQbO6407lWFHQ7eOC8KcmUY9i4s5M58%2BgAeKB2nPB7JQ7J%2FiEKPCmIyZN0zCQyofOBjqkARXEoMDjq3ZI0xqlYym5sbbi%2F%2BCurDwBkDL5r1jfNQts7fkr96aOzLWUmmQndp2j5aKIV400JkcRUPrtXCnwfxQz8dA%2FauvGTqCdNTwkGKsuZ87aXfok6fLhkTU9Py9Ai9rsPpGCyd3lz3S2t3f68PLMBxoI%2BHF2PmdwHIwXiuRtDbievAPZYJjWMV7w9LCz%2F1CxKuXs90nLbgpLvhIFZxPSv%2FRC&X-Amz-Signature=34b6aa4784a468b9ebc51ca12d609d9cecf62794ae5b54069dd7b67545e0262b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBROU6YH%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBR2I7o2w4c3MCk1L99JTAmTlmrvPgOGGcS331hlI5%2FkAiEArjqGJN8BMMgapjlwYpFOmXyA%2BIjLmvdqyMwVq3tGGcAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYfjqa8ayO3lp0uICrcAwYgNe6hPlxE6l%2FC6KR4gPucNaOfHDezNjkWcPd8Lz%2BoGou%2BpqrAqZHriUr5cAyjZNa4s82EZv0bsAb5HGuNR92CbWp%2FMfTYSc%2BNxMPaNJgbR636JXvAX4aUhSae5yMOpseIkLLexLuCjHf38VjlSnqzpXCX1KwvmTqtpfOAa30nrEfTRA2vL8cReYnkn2I%2FpMttCke8OgoHb6WeT%2BDRWzOmWPpKcC%2BDuy0T6CVYKi2mJrjb7CakuYixywrqF7BIMPAQFJewynCXlvuGj13LVYSDrUiBCbF22O7jmSF06hLD31QNfF%2FbTP7a46VQMrg%2FH9q3sjdQBB9aB69suMyHGTLmZ54CY6Jkl%2FrWzQ41K1VbVS7f8ySm1xiT1us%2F3IZrsrSKi4w84rWci7y3qnjA72TZQmseGkWqT3k73caFs6sIWuikwVhiRUQHgZ4vipKk90gIYKNQTIm%2FE3H6QMPRLhsGU5l9DMD9tNqGbLjYC3rAVS2NbhC8B2Bf4UTM%2F5v275P%2Bzhi8Nd64FXYiGfz00L%2FdK929V1lC7X5azYUJ4L3zsorUb1vJRUVIum6q4iRZK3daWYB%2BIXtg3R7TY87SxDbH2pfs3RQu1G2uEzX6ZHkgpVBW56%2BBcYu5OiAuMJXKh84GOqUBLepaY36sSxS%2Bq3y8YwzKOw%2FtLJBdATIQTsl%2FndeZQMwmJQaO5Z9LHjgB0VG4g3JdEs0hd6YL1h4exA6rmxZE3sJHWFzmXhzCzRo6KySGM60rTFqRawzztxhJp2kbq3C6aipt%2Fd52rwVkVw%2Ft2dqSaowcTZylzvVr4Jyms7dB%2ByaDQsvMuIBTikRx%2FSn%2F0G8pnGrwnVLCMEGe%2B0bUaP6HZoaswhQI&X-Amz-Signature=34778c23fbe05900440f844f6aa37b11ecd0d039afe0830926543320697cd02a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBROU6YH%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBR2I7o2w4c3MCk1L99JTAmTlmrvPgOGGcS331hlI5%2FkAiEArjqGJN8BMMgapjlwYpFOmXyA%2BIjLmvdqyMwVq3tGGcAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYfjqa8ayO3lp0uICrcAwYgNe6hPlxE6l%2FC6KR4gPucNaOfHDezNjkWcPd8Lz%2BoGou%2BpqrAqZHriUr5cAyjZNa4s82EZv0bsAb5HGuNR92CbWp%2FMfTYSc%2BNxMPaNJgbR636JXvAX4aUhSae5yMOpseIkLLexLuCjHf38VjlSnqzpXCX1KwvmTqtpfOAa30nrEfTRA2vL8cReYnkn2I%2FpMttCke8OgoHb6WeT%2BDRWzOmWPpKcC%2BDuy0T6CVYKi2mJrjb7CakuYixywrqF7BIMPAQFJewynCXlvuGj13LVYSDrUiBCbF22O7jmSF06hLD31QNfF%2FbTP7a46VQMrg%2FH9q3sjdQBB9aB69suMyHGTLmZ54CY6Jkl%2FrWzQ41K1VbVS7f8ySm1xiT1us%2F3IZrsrSKi4w84rWci7y3qnjA72TZQmseGkWqT3k73caFs6sIWuikwVhiRUQHgZ4vipKk90gIYKNQTIm%2FE3H6QMPRLhsGU5l9DMD9tNqGbLjYC3rAVS2NbhC8B2Bf4UTM%2F5v275P%2Bzhi8Nd64FXYiGfz00L%2FdK929V1lC7X5azYUJ4L3zsorUb1vJRUVIum6q4iRZK3daWYB%2BIXtg3R7TY87SxDbH2pfs3RQu1G2uEzX6ZHkgpVBW56%2BBcYu5OiAuMJXKh84GOqUBLepaY36sSxS%2Bq3y8YwzKOw%2FtLJBdATIQTsl%2FndeZQMwmJQaO5Z9LHjgB0VG4g3JdEs0hd6YL1h4exA6rmxZE3sJHWFzmXhzCzRo6KySGM60rTFqRawzztxhJp2kbq3C6aipt%2Fd52rwVkVw%2Ft2dqSaowcTZylzvVr4Jyms7dB%2ByaDQsvMuIBTikRx%2FSn%2F0G8pnGrwnVLCMEGe%2B0bUaP6HZoaswhQI&X-Amz-Signature=68e088cc44ad864f3497a5f5f8d69afe3c2a2fe94365245ae6fce65f2813a4d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBROU6YH%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBR2I7o2w4c3MCk1L99JTAmTlmrvPgOGGcS331hlI5%2FkAiEArjqGJN8BMMgapjlwYpFOmXyA%2BIjLmvdqyMwVq3tGGcAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYfjqa8ayO3lp0uICrcAwYgNe6hPlxE6l%2FC6KR4gPucNaOfHDezNjkWcPd8Lz%2BoGou%2BpqrAqZHriUr5cAyjZNa4s82EZv0bsAb5HGuNR92CbWp%2FMfTYSc%2BNxMPaNJgbR636JXvAX4aUhSae5yMOpseIkLLexLuCjHf38VjlSnqzpXCX1KwvmTqtpfOAa30nrEfTRA2vL8cReYnkn2I%2FpMttCke8OgoHb6WeT%2BDRWzOmWPpKcC%2BDuy0T6CVYKi2mJrjb7CakuYixywrqF7BIMPAQFJewynCXlvuGj13LVYSDrUiBCbF22O7jmSF06hLD31QNfF%2FbTP7a46VQMrg%2FH9q3sjdQBB9aB69suMyHGTLmZ54CY6Jkl%2FrWzQ41K1VbVS7f8ySm1xiT1us%2F3IZrsrSKi4w84rWci7y3qnjA72TZQmseGkWqT3k73caFs6sIWuikwVhiRUQHgZ4vipKk90gIYKNQTIm%2FE3H6QMPRLhsGU5l9DMD9tNqGbLjYC3rAVS2NbhC8B2Bf4UTM%2F5v275P%2Bzhi8Nd64FXYiGfz00L%2FdK929V1lC7X5azYUJ4L3zsorUb1vJRUVIum6q4iRZK3daWYB%2BIXtg3R7TY87SxDbH2pfs3RQu1G2uEzX6ZHkgpVBW56%2BBcYu5OiAuMJXKh84GOqUBLepaY36sSxS%2Bq3y8YwzKOw%2FtLJBdATIQTsl%2FndeZQMwmJQaO5Z9LHjgB0VG4g3JdEs0hd6YL1h4exA6rmxZE3sJHWFzmXhzCzRo6KySGM60rTFqRawzztxhJp2kbq3C6aipt%2Fd52rwVkVw%2Ft2dqSaowcTZylzvVr4Jyms7dB%2ByaDQsvMuIBTikRx%2FSn%2F0G8pnGrwnVLCMEGe%2B0bUaP6HZoaswhQI&X-Amz-Signature=e85df23e30f64b5a96734b0c4eb4746f30656e27d797cfc70934da6c2e69f41e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBROU6YH%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBR2I7o2w4c3MCk1L99JTAmTlmrvPgOGGcS331hlI5%2FkAiEArjqGJN8BMMgapjlwYpFOmXyA%2BIjLmvdqyMwVq3tGGcAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYfjqa8ayO3lp0uICrcAwYgNe6hPlxE6l%2FC6KR4gPucNaOfHDezNjkWcPd8Lz%2BoGou%2BpqrAqZHriUr5cAyjZNa4s82EZv0bsAb5HGuNR92CbWp%2FMfTYSc%2BNxMPaNJgbR636JXvAX4aUhSae5yMOpseIkLLexLuCjHf38VjlSnqzpXCX1KwvmTqtpfOAa30nrEfTRA2vL8cReYnkn2I%2FpMttCke8OgoHb6WeT%2BDRWzOmWPpKcC%2BDuy0T6CVYKi2mJrjb7CakuYixywrqF7BIMPAQFJewynCXlvuGj13LVYSDrUiBCbF22O7jmSF06hLD31QNfF%2FbTP7a46VQMrg%2FH9q3sjdQBB9aB69suMyHGTLmZ54CY6Jkl%2FrWzQ41K1VbVS7f8ySm1xiT1us%2F3IZrsrSKi4w84rWci7y3qnjA72TZQmseGkWqT3k73caFs6sIWuikwVhiRUQHgZ4vipKk90gIYKNQTIm%2FE3H6QMPRLhsGU5l9DMD9tNqGbLjYC3rAVS2NbhC8B2Bf4UTM%2F5v275P%2Bzhi8Nd64FXYiGfz00L%2FdK929V1lC7X5azYUJ4L3zsorUb1vJRUVIum6q4iRZK3daWYB%2BIXtg3R7TY87SxDbH2pfs3RQu1G2uEzX6ZHkgpVBW56%2BBcYu5OiAuMJXKh84GOqUBLepaY36sSxS%2Bq3y8YwzKOw%2FtLJBdATIQTsl%2FndeZQMwmJQaO5Z9LHjgB0VG4g3JdEs0hd6YL1h4exA6rmxZE3sJHWFzmXhzCzRo6KySGM60rTFqRawzztxhJp2kbq3C6aipt%2Fd52rwVkVw%2Ft2dqSaowcTZylzvVr4Jyms7dB%2ByaDQsvMuIBTikRx%2FSn%2F0G8pnGrwnVLCMEGe%2B0bUaP6HZoaswhQI&X-Amz-Signature=9d8f6a0454bbccc21ad55b574bcd0e12aa8aa18b7e6fcc71b95f398cc2aa36b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EXWXHKF%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwKsDy6s8p0KaSAUYdIGRFwfLt6sodVqTDuVSe8GcNqAiB7BYuCzg9a3zceyyzPtJmh2yXfbAeCuC4nXA1w6h9n9yqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaKRZpJzQGFg%2FptOTKtwDmJkmEX22NawaVJdjb4XATtHCyKc0i%2Bp%2BcHorZ5SlTRNOiE1Mp2StqHXCimRBBH667DK5ql988lkocmF5TuHCIYqE84YQhrn2rF4bV5NePijXMNGjDP1znj9CQXcYuoOgYZ7d4KxYFQfMLpbpB86SFav%2FPiaP4RtmSgVQ3dNH41oS5S955uNdIqJ8iO%2B0OfuwtWI8N44HRCxOmVCfkz5vzRxQo770XZ%2FMY1vuK68PWL1scGCp1SKjtnESzG%2FYi4nkHkQumEe%2BUgYiAvEKk9pH2tWhssM2um6nJbrzuHphlyj3jd%2BxzVbCyEaC9mENwOuXS%2FV5K1PhPhVmAFlCilorIHjP08y55G%2Bg9kNIkFY6ORjOErkro7ravIqqmbtwoDWr8xLeeHV%2Fz7JDpDIo%2FWAgchupyEvpJLXrX%2FFel8urSzVYkTtLfL%2FcbVu5aP5WYDD0VM3R%2FC6IqlpAI9A7SLKcRRlHTnw3VwQ%2FaBV0SLOfa%2BtTIRmgP%2Fw0WD8DWLJ88fPXsNOSzEcTeOVzzZKp4J70is8wW7Q34g3mKzt0nbavASCzB7c2VGL4Yc670UR%2FNx4dwEvw7YU%2BBS0SqaDRMIPTsP2doOkkbfD6baTsMClJYOmugD80MlvZtuMOdTEwuMiHzgY6pgH%2Fv89dP7loFoAcLsPH1jAOYQXgthP9kK%2FS9f6T1xo04xhqCuruPlXvpQxVgWljqsWHmvAvjUgTR0BJV%2BsezFu%2BO1j24%2Fq%2BgEvrp%2BPe36LjfsLuXQ4DNOk0vwXDRhM3TD%2BE8ljqVsJwV3iqP%2BVeWn1Hq8z0oF%2FJ18McbmIMQNpPvCuOCnxNopD1iEkeP2mCWd%2FSMgsfQ0YzPRIUPOpLajH%2BxizOM5Kk&X-Amz-Signature=6cfec16a3c190176dd28ef24609868ae8c7b45632194197f1eda27ad6eea8af3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBROU6YH%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBR2I7o2w4c3MCk1L99JTAmTlmrvPgOGGcS331hlI5%2FkAiEArjqGJN8BMMgapjlwYpFOmXyA%2BIjLmvdqyMwVq3tGGcAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYfjqa8ayO3lp0uICrcAwYgNe6hPlxE6l%2FC6KR4gPucNaOfHDezNjkWcPd8Lz%2BoGou%2BpqrAqZHriUr5cAyjZNa4s82EZv0bsAb5HGuNR92CbWp%2FMfTYSc%2BNxMPaNJgbR636JXvAX4aUhSae5yMOpseIkLLexLuCjHf38VjlSnqzpXCX1KwvmTqtpfOAa30nrEfTRA2vL8cReYnkn2I%2FpMttCke8OgoHb6WeT%2BDRWzOmWPpKcC%2BDuy0T6CVYKi2mJrjb7CakuYixywrqF7BIMPAQFJewynCXlvuGj13LVYSDrUiBCbF22O7jmSF06hLD31QNfF%2FbTP7a46VQMrg%2FH9q3sjdQBB9aB69suMyHGTLmZ54CY6Jkl%2FrWzQ41K1VbVS7f8ySm1xiT1us%2F3IZrsrSKi4w84rWci7y3qnjA72TZQmseGkWqT3k73caFs6sIWuikwVhiRUQHgZ4vipKk90gIYKNQTIm%2FE3H6QMPRLhsGU5l9DMD9tNqGbLjYC3rAVS2NbhC8B2Bf4UTM%2F5v275P%2Bzhi8Nd64FXYiGfz00L%2FdK929V1lC7X5azYUJ4L3zsorUb1vJRUVIum6q4iRZK3daWYB%2BIXtg3R7TY87SxDbH2pfs3RQu1G2uEzX6ZHkgpVBW56%2BBcYu5OiAuMJXKh84GOqUBLepaY36sSxS%2Bq3y8YwzKOw%2FtLJBdATIQTsl%2FndeZQMwmJQaO5Z9LHjgB0VG4g3JdEs0hd6YL1h4exA6rmxZE3sJHWFzmXhzCzRo6KySGM60rTFqRawzztxhJp2kbq3C6aipt%2Fd52rwVkVw%2Ft2dqSaowcTZylzvVr4Jyms7dB%2ByaDQsvMuIBTikRx%2FSn%2F0G8pnGrwnVLCMEGe%2B0bUaP6HZoaswhQI&X-Amz-Signature=8492421671834d50c5c42bb55e3692a8206fcd6bba0e950a7d8fc4200349d231&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBROU6YH%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBR2I7o2w4c3MCk1L99JTAmTlmrvPgOGGcS331hlI5%2FkAiEArjqGJN8BMMgapjlwYpFOmXyA%2BIjLmvdqyMwVq3tGGcAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYfjqa8ayO3lp0uICrcAwYgNe6hPlxE6l%2FC6KR4gPucNaOfHDezNjkWcPd8Lz%2BoGou%2BpqrAqZHriUr5cAyjZNa4s82EZv0bsAb5HGuNR92CbWp%2FMfTYSc%2BNxMPaNJgbR636JXvAX4aUhSae5yMOpseIkLLexLuCjHf38VjlSnqzpXCX1KwvmTqtpfOAa30nrEfTRA2vL8cReYnkn2I%2FpMttCke8OgoHb6WeT%2BDRWzOmWPpKcC%2BDuy0T6CVYKi2mJrjb7CakuYixywrqF7BIMPAQFJewynCXlvuGj13LVYSDrUiBCbF22O7jmSF06hLD31QNfF%2FbTP7a46VQMrg%2FH9q3sjdQBB9aB69suMyHGTLmZ54CY6Jkl%2FrWzQ41K1VbVS7f8ySm1xiT1us%2F3IZrsrSKi4w84rWci7y3qnjA72TZQmseGkWqT3k73caFs6sIWuikwVhiRUQHgZ4vipKk90gIYKNQTIm%2FE3H6QMPRLhsGU5l9DMD9tNqGbLjYC3rAVS2NbhC8B2Bf4UTM%2F5v275P%2Bzhi8Nd64FXYiGfz00L%2FdK929V1lC7X5azYUJ4L3zsorUb1vJRUVIum6q4iRZK3daWYB%2BIXtg3R7TY87SxDbH2pfs3RQu1G2uEzX6ZHkgpVBW56%2BBcYu5OiAuMJXKh84GOqUBLepaY36sSxS%2Bq3y8YwzKOw%2FtLJBdATIQTsl%2FndeZQMwmJQaO5Z9LHjgB0VG4g3JdEs0hd6YL1h4exA6rmxZE3sJHWFzmXhzCzRo6KySGM60rTFqRawzztxhJp2kbq3C6aipt%2Fd52rwVkVw%2Ft2dqSaowcTZylzvVr4Jyms7dB%2ByaDQsvMuIBTikRx%2FSn%2F0G8pnGrwnVLCMEGe%2B0bUaP6HZoaswhQI&X-Amz-Signature=b01c8fcedb31ddafe262bd6a85d6f27f7453e7d88e5b1b0f07c3486efaac2995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBROU6YH%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBR2I7o2w4c3MCk1L99JTAmTlmrvPgOGGcS331hlI5%2FkAiEArjqGJN8BMMgapjlwYpFOmXyA%2BIjLmvdqyMwVq3tGGcAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYfjqa8ayO3lp0uICrcAwYgNe6hPlxE6l%2FC6KR4gPucNaOfHDezNjkWcPd8Lz%2BoGou%2BpqrAqZHriUr5cAyjZNa4s82EZv0bsAb5HGuNR92CbWp%2FMfTYSc%2BNxMPaNJgbR636JXvAX4aUhSae5yMOpseIkLLexLuCjHf38VjlSnqzpXCX1KwvmTqtpfOAa30nrEfTRA2vL8cReYnkn2I%2FpMttCke8OgoHb6WeT%2BDRWzOmWPpKcC%2BDuy0T6CVYKi2mJrjb7CakuYixywrqF7BIMPAQFJewynCXlvuGj13LVYSDrUiBCbF22O7jmSF06hLD31QNfF%2FbTP7a46VQMrg%2FH9q3sjdQBB9aB69suMyHGTLmZ54CY6Jkl%2FrWzQ41K1VbVS7f8ySm1xiT1us%2F3IZrsrSKi4w84rWci7y3qnjA72TZQmseGkWqT3k73caFs6sIWuikwVhiRUQHgZ4vipKk90gIYKNQTIm%2FE3H6QMPRLhsGU5l9DMD9tNqGbLjYC3rAVS2NbhC8B2Bf4UTM%2F5v275P%2Bzhi8Nd64FXYiGfz00L%2FdK929V1lC7X5azYUJ4L3zsorUb1vJRUVIum6q4iRZK3daWYB%2BIXtg3R7TY87SxDbH2pfs3RQu1G2uEzX6ZHkgpVBW56%2BBcYu5OiAuMJXKh84GOqUBLepaY36sSxS%2Bq3y8YwzKOw%2FtLJBdATIQTsl%2FndeZQMwmJQaO5Z9LHjgB0VG4g3JdEs0hd6YL1h4exA6rmxZE3sJHWFzmXhzCzRo6KySGM60rTFqRawzztxhJp2kbq3C6aipt%2Fd52rwVkVw%2Ft2dqSaowcTZylzvVr4Jyms7dB%2ByaDQsvMuIBTikRx%2FSn%2F0G8pnGrwnVLCMEGe%2B0bUaP6HZoaswhQI&X-Amz-Signature=fc96f2a7284d1381cd1a4c1f07406b4e9f43536cd556af04fde4cbdc9184ef68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBROU6YH%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBR2I7o2w4c3MCk1L99JTAmTlmrvPgOGGcS331hlI5%2FkAiEArjqGJN8BMMgapjlwYpFOmXyA%2BIjLmvdqyMwVq3tGGcAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYfjqa8ayO3lp0uICrcAwYgNe6hPlxE6l%2FC6KR4gPucNaOfHDezNjkWcPd8Lz%2BoGou%2BpqrAqZHriUr5cAyjZNa4s82EZv0bsAb5HGuNR92CbWp%2FMfTYSc%2BNxMPaNJgbR636JXvAX4aUhSae5yMOpseIkLLexLuCjHf38VjlSnqzpXCX1KwvmTqtpfOAa30nrEfTRA2vL8cReYnkn2I%2FpMttCke8OgoHb6WeT%2BDRWzOmWPpKcC%2BDuy0T6CVYKi2mJrjb7CakuYixywrqF7BIMPAQFJewynCXlvuGj13LVYSDrUiBCbF22O7jmSF06hLD31QNfF%2FbTP7a46VQMrg%2FH9q3sjdQBB9aB69suMyHGTLmZ54CY6Jkl%2FrWzQ41K1VbVS7f8ySm1xiT1us%2F3IZrsrSKi4w84rWci7y3qnjA72TZQmseGkWqT3k73caFs6sIWuikwVhiRUQHgZ4vipKk90gIYKNQTIm%2FE3H6QMPRLhsGU5l9DMD9tNqGbLjYC3rAVS2NbhC8B2Bf4UTM%2F5v275P%2Bzhi8Nd64FXYiGfz00L%2FdK929V1lC7X5azYUJ4L3zsorUb1vJRUVIum6q4iRZK3daWYB%2BIXtg3R7TY87SxDbH2pfs3RQu1G2uEzX6ZHkgpVBW56%2BBcYu5OiAuMJXKh84GOqUBLepaY36sSxS%2Bq3y8YwzKOw%2FtLJBdATIQTsl%2FndeZQMwmJQaO5Z9LHjgB0VG4g3JdEs0hd6YL1h4exA6rmxZE3sJHWFzmXhzCzRo6KySGM60rTFqRawzztxhJp2kbq3C6aipt%2Fd52rwVkVw%2Ft2dqSaowcTZylzvVr4Jyms7dB%2ByaDQsvMuIBTikRx%2FSn%2F0G8pnGrwnVLCMEGe%2B0bUaP6HZoaswhQI&X-Amz-Signature=eaaf85366f538bc0aee2178bb0c80d1131dac034e758824e92b13c3c8b93a1f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBROU6YH%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBR2I7o2w4c3MCk1L99JTAmTlmrvPgOGGcS331hlI5%2FkAiEArjqGJN8BMMgapjlwYpFOmXyA%2BIjLmvdqyMwVq3tGGcAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYfjqa8ayO3lp0uICrcAwYgNe6hPlxE6l%2FC6KR4gPucNaOfHDezNjkWcPd8Lz%2BoGou%2BpqrAqZHriUr5cAyjZNa4s82EZv0bsAb5HGuNR92CbWp%2FMfTYSc%2BNxMPaNJgbR636JXvAX4aUhSae5yMOpseIkLLexLuCjHf38VjlSnqzpXCX1KwvmTqtpfOAa30nrEfTRA2vL8cReYnkn2I%2FpMttCke8OgoHb6WeT%2BDRWzOmWPpKcC%2BDuy0T6CVYKi2mJrjb7CakuYixywrqF7BIMPAQFJewynCXlvuGj13LVYSDrUiBCbF22O7jmSF06hLD31QNfF%2FbTP7a46VQMrg%2FH9q3sjdQBB9aB69suMyHGTLmZ54CY6Jkl%2FrWzQ41K1VbVS7f8ySm1xiT1us%2F3IZrsrSKi4w84rWci7y3qnjA72TZQmseGkWqT3k73caFs6sIWuikwVhiRUQHgZ4vipKk90gIYKNQTIm%2FE3H6QMPRLhsGU5l9DMD9tNqGbLjYC3rAVS2NbhC8B2Bf4UTM%2F5v275P%2Bzhi8Nd64FXYiGfz00L%2FdK929V1lC7X5azYUJ4L3zsorUb1vJRUVIum6q4iRZK3daWYB%2BIXtg3R7TY87SxDbH2pfs3RQu1G2uEzX6ZHkgpVBW56%2BBcYu5OiAuMJXKh84GOqUBLepaY36sSxS%2Bq3y8YwzKOw%2FtLJBdATIQTsl%2FndeZQMwmJQaO5Z9LHjgB0VG4g3JdEs0hd6YL1h4exA6rmxZE3sJHWFzmXhzCzRo6KySGM60rTFqRawzztxhJp2kbq3C6aipt%2Fd52rwVkVw%2Ft2dqSaowcTZylzvVr4Jyms7dB%2ByaDQsvMuIBTikRx%2FSn%2F0G8pnGrwnVLCMEGe%2B0bUaP6HZoaswhQI&X-Amz-Signature=24c59d18a041446b18626c2e401ea51d05ad5ac98cf0f4a731760c5538cc5cb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBROU6YH%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBR2I7o2w4c3MCk1L99JTAmTlmrvPgOGGcS331hlI5%2FkAiEArjqGJN8BMMgapjlwYpFOmXyA%2BIjLmvdqyMwVq3tGGcAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYfjqa8ayO3lp0uICrcAwYgNe6hPlxE6l%2FC6KR4gPucNaOfHDezNjkWcPd8Lz%2BoGou%2BpqrAqZHriUr5cAyjZNa4s82EZv0bsAb5HGuNR92CbWp%2FMfTYSc%2BNxMPaNJgbR636JXvAX4aUhSae5yMOpseIkLLexLuCjHf38VjlSnqzpXCX1KwvmTqtpfOAa30nrEfTRA2vL8cReYnkn2I%2FpMttCke8OgoHb6WeT%2BDRWzOmWPpKcC%2BDuy0T6CVYKi2mJrjb7CakuYixywrqF7BIMPAQFJewynCXlvuGj13LVYSDrUiBCbF22O7jmSF06hLD31QNfF%2FbTP7a46VQMrg%2FH9q3sjdQBB9aB69suMyHGTLmZ54CY6Jkl%2FrWzQ41K1VbVS7f8ySm1xiT1us%2F3IZrsrSKi4w84rWci7y3qnjA72TZQmseGkWqT3k73caFs6sIWuikwVhiRUQHgZ4vipKk90gIYKNQTIm%2FE3H6QMPRLhsGU5l9DMD9tNqGbLjYC3rAVS2NbhC8B2Bf4UTM%2F5v275P%2Bzhi8Nd64FXYiGfz00L%2FdK929V1lC7X5azYUJ4L3zsorUb1vJRUVIum6q4iRZK3daWYB%2BIXtg3R7TY87SxDbH2pfs3RQu1G2uEzX6ZHkgpVBW56%2BBcYu5OiAuMJXKh84GOqUBLepaY36sSxS%2Bq3y8YwzKOw%2FtLJBdATIQTsl%2FndeZQMwmJQaO5Z9LHjgB0VG4g3JdEs0hd6YL1h4exA6rmxZE3sJHWFzmXhzCzRo6KySGM60rTFqRawzztxhJp2kbq3C6aipt%2Fd52rwVkVw%2Ft2dqSaowcTZylzvVr4Jyms7dB%2ByaDQsvMuIBTikRx%2FSn%2F0G8pnGrwnVLCMEGe%2B0bUaP6HZoaswhQI&X-Amz-Signature=669a54473cee16f87c799a07c53e2feb650e87fff3e8b8359bf31d5496427ffa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


