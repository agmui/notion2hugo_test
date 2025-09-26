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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2FX5M35%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBYGIUkgVYtduku1QvImUp57W%2FUWN74HZTqKQsjHDJhAIgG61XB38KX3gmOQ6cIBl8Mb4OfguJ60KiwmjX5VGvWOYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJhpGAZzeUAudJONyrcA8z36JcDAtqpDKixSeFYysiXHdxR8gnvtGIrQdLK0K7YXOkMRVjkCEB0ZJmgii14I3KSKd8nokqtDZe5i2zWJjGu6IKsrv%2FJ1qm6r4dwHE26vCtkzPszr9gJjRb6nV2kv03wFCyrVKyfTU5uFQcrrevBuc9rIdQgP7%2F7%2B3t%2F6Tnr1OBqiOv9Udfi2L6tEhizvHRIVKZKj6e4Bt3lx5CJuLxRLBjz8lbylBBzCGYTHH%2Bw%2F2IVbUkQGehZuTinuL2hw710Kz2Ae6GgtMBo%2BrGVloKYDB2R71X5rm%2B1zP9DGDXzSAENUIbCtGmK05r2ylZOUo%2FgnwLG8UPslrA%2FgeyetmX8GfzKa0K%2FosvM19NLVVnMQzs%2F0ypizFONMjqnNVlQ9hW%2F2G1zRMz2jLE9sYWJ1dmLZjhcvF2XAaAvyjq4XTnRAgZzMcd3cetXms6a0LoJtwD9aCDzgBzSPn0x9qzKr8fKZApMC3YM7fvkpO8vNW8iyPpPfJY4BxQqs%2BgN40m%2BjBWCVlv7RQ2ct5UcFIbX8Bgw32CtBHuqkS6roxlo9xxw3V1phMWCb7kdTsfvN5X%2Bm83uqgiP3CyZiqQ6%2BmRMKiWy5uetj%2F0SX0hgFPpyDL2cfN4cv7GrPjf2wP3MMM6n18YGOqUBeQA24BFFCtGgILClHSVI7rH%2F9b%2BDzaBcrOULf%2Ff3uklRmYEv9fqpBLeN3OdUO%2BdqZcNFY8jRCz%2B2mc4ya6n1a4aRuNCwZkZJmoNxCqhRsc%2BpwbpVbRUhN7df0K8JJD%2FgheF0cwf9LSiqmY24f8Y8DotHla0jsPRZvfrlMCKGXnSMv5EVgbfQPhVTz5hqysyXe48v2SdNPKT75MWWnvq1Ubt3qXKw&X-Amz-Signature=6723ca39f20c3c26714279c13f89ce77826db864dbc1bb3afd793e4059fc0d33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2FX5M35%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBYGIUkgVYtduku1QvImUp57W%2FUWN74HZTqKQsjHDJhAIgG61XB38KX3gmOQ6cIBl8Mb4OfguJ60KiwmjX5VGvWOYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJhpGAZzeUAudJONyrcA8z36JcDAtqpDKixSeFYysiXHdxR8gnvtGIrQdLK0K7YXOkMRVjkCEB0ZJmgii14I3KSKd8nokqtDZe5i2zWJjGu6IKsrv%2FJ1qm6r4dwHE26vCtkzPszr9gJjRb6nV2kv03wFCyrVKyfTU5uFQcrrevBuc9rIdQgP7%2F7%2B3t%2F6Tnr1OBqiOv9Udfi2L6tEhizvHRIVKZKj6e4Bt3lx5CJuLxRLBjz8lbylBBzCGYTHH%2Bw%2F2IVbUkQGehZuTinuL2hw710Kz2Ae6GgtMBo%2BrGVloKYDB2R71X5rm%2B1zP9DGDXzSAENUIbCtGmK05r2ylZOUo%2FgnwLG8UPslrA%2FgeyetmX8GfzKa0K%2FosvM19NLVVnMQzs%2F0ypizFONMjqnNVlQ9hW%2F2G1zRMz2jLE9sYWJ1dmLZjhcvF2XAaAvyjq4XTnRAgZzMcd3cetXms6a0LoJtwD9aCDzgBzSPn0x9qzKr8fKZApMC3YM7fvkpO8vNW8iyPpPfJY4BxQqs%2BgN40m%2BjBWCVlv7RQ2ct5UcFIbX8Bgw32CtBHuqkS6roxlo9xxw3V1phMWCb7kdTsfvN5X%2Bm83uqgiP3CyZiqQ6%2BmRMKiWy5uetj%2F0SX0hgFPpyDL2cfN4cv7GrPjf2wP3MMM6n18YGOqUBeQA24BFFCtGgILClHSVI7rH%2F9b%2BDzaBcrOULf%2Ff3uklRmYEv9fqpBLeN3OdUO%2BdqZcNFY8jRCz%2B2mc4ya6n1a4aRuNCwZkZJmoNxCqhRsc%2BpwbpVbRUhN7df0K8JJD%2FgheF0cwf9LSiqmY24f8Y8DotHla0jsPRZvfrlMCKGXnSMv5EVgbfQPhVTz5hqysyXe48v2SdNPKT75MWWnvq1Ubt3qXKw&X-Amz-Signature=acb3ee96f7b481da6b5bf7ae85a61eea6dc19862e7c977b3d0ea791e56d0634f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2FX5M35%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBYGIUkgVYtduku1QvImUp57W%2FUWN74HZTqKQsjHDJhAIgG61XB38KX3gmOQ6cIBl8Mb4OfguJ60KiwmjX5VGvWOYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJhpGAZzeUAudJONyrcA8z36JcDAtqpDKixSeFYysiXHdxR8gnvtGIrQdLK0K7YXOkMRVjkCEB0ZJmgii14I3KSKd8nokqtDZe5i2zWJjGu6IKsrv%2FJ1qm6r4dwHE26vCtkzPszr9gJjRb6nV2kv03wFCyrVKyfTU5uFQcrrevBuc9rIdQgP7%2F7%2B3t%2F6Tnr1OBqiOv9Udfi2L6tEhizvHRIVKZKj6e4Bt3lx5CJuLxRLBjz8lbylBBzCGYTHH%2Bw%2F2IVbUkQGehZuTinuL2hw710Kz2Ae6GgtMBo%2BrGVloKYDB2R71X5rm%2B1zP9DGDXzSAENUIbCtGmK05r2ylZOUo%2FgnwLG8UPslrA%2FgeyetmX8GfzKa0K%2FosvM19NLVVnMQzs%2F0ypizFONMjqnNVlQ9hW%2F2G1zRMz2jLE9sYWJ1dmLZjhcvF2XAaAvyjq4XTnRAgZzMcd3cetXms6a0LoJtwD9aCDzgBzSPn0x9qzKr8fKZApMC3YM7fvkpO8vNW8iyPpPfJY4BxQqs%2BgN40m%2BjBWCVlv7RQ2ct5UcFIbX8Bgw32CtBHuqkS6roxlo9xxw3V1phMWCb7kdTsfvN5X%2Bm83uqgiP3CyZiqQ6%2BmRMKiWy5uetj%2F0SX0hgFPpyDL2cfN4cv7GrPjf2wP3MMM6n18YGOqUBeQA24BFFCtGgILClHSVI7rH%2F9b%2BDzaBcrOULf%2Ff3uklRmYEv9fqpBLeN3OdUO%2BdqZcNFY8jRCz%2B2mc4ya6n1a4aRuNCwZkZJmoNxCqhRsc%2BpwbpVbRUhN7df0K8JJD%2FgheF0cwf9LSiqmY24f8Y8DotHla0jsPRZvfrlMCKGXnSMv5EVgbfQPhVTz5hqysyXe48v2SdNPKT75MWWnvq1Ubt3qXKw&X-Amz-Signature=d7a2f2db5053648ab093ff77995351a2a41c29cca0181f3225ba97109bfeff5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2FX5M35%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBYGIUkgVYtduku1QvImUp57W%2FUWN74HZTqKQsjHDJhAIgG61XB38KX3gmOQ6cIBl8Mb4OfguJ60KiwmjX5VGvWOYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJhpGAZzeUAudJONyrcA8z36JcDAtqpDKixSeFYysiXHdxR8gnvtGIrQdLK0K7YXOkMRVjkCEB0ZJmgii14I3KSKd8nokqtDZe5i2zWJjGu6IKsrv%2FJ1qm6r4dwHE26vCtkzPszr9gJjRb6nV2kv03wFCyrVKyfTU5uFQcrrevBuc9rIdQgP7%2F7%2B3t%2F6Tnr1OBqiOv9Udfi2L6tEhizvHRIVKZKj6e4Bt3lx5CJuLxRLBjz8lbylBBzCGYTHH%2Bw%2F2IVbUkQGehZuTinuL2hw710Kz2Ae6GgtMBo%2BrGVloKYDB2R71X5rm%2B1zP9DGDXzSAENUIbCtGmK05r2ylZOUo%2FgnwLG8UPslrA%2FgeyetmX8GfzKa0K%2FosvM19NLVVnMQzs%2F0ypizFONMjqnNVlQ9hW%2F2G1zRMz2jLE9sYWJ1dmLZjhcvF2XAaAvyjq4XTnRAgZzMcd3cetXms6a0LoJtwD9aCDzgBzSPn0x9qzKr8fKZApMC3YM7fvkpO8vNW8iyPpPfJY4BxQqs%2BgN40m%2BjBWCVlv7RQ2ct5UcFIbX8Bgw32CtBHuqkS6roxlo9xxw3V1phMWCb7kdTsfvN5X%2Bm83uqgiP3CyZiqQ6%2BmRMKiWy5uetj%2F0SX0hgFPpyDL2cfN4cv7GrPjf2wP3MMM6n18YGOqUBeQA24BFFCtGgILClHSVI7rH%2F9b%2BDzaBcrOULf%2Ff3uklRmYEv9fqpBLeN3OdUO%2BdqZcNFY8jRCz%2B2mc4ya6n1a4aRuNCwZkZJmoNxCqhRsc%2BpwbpVbRUhN7df0K8JJD%2FgheF0cwf9LSiqmY24f8Y8DotHla0jsPRZvfrlMCKGXnSMv5EVgbfQPhVTz5hqysyXe48v2SdNPKT75MWWnvq1Ubt3qXKw&X-Amz-Signature=f850740821f4f96f71c31a8493c8b530f434903fd3b2fb30820947ffff8cf46c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2FX5M35%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBYGIUkgVYtduku1QvImUp57W%2FUWN74HZTqKQsjHDJhAIgG61XB38KX3gmOQ6cIBl8Mb4OfguJ60KiwmjX5VGvWOYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJhpGAZzeUAudJONyrcA8z36JcDAtqpDKixSeFYysiXHdxR8gnvtGIrQdLK0K7YXOkMRVjkCEB0ZJmgii14I3KSKd8nokqtDZe5i2zWJjGu6IKsrv%2FJ1qm6r4dwHE26vCtkzPszr9gJjRb6nV2kv03wFCyrVKyfTU5uFQcrrevBuc9rIdQgP7%2F7%2B3t%2F6Tnr1OBqiOv9Udfi2L6tEhizvHRIVKZKj6e4Bt3lx5CJuLxRLBjz8lbylBBzCGYTHH%2Bw%2F2IVbUkQGehZuTinuL2hw710Kz2Ae6GgtMBo%2BrGVloKYDB2R71X5rm%2B1zP9DGDXzSAENUIbCtGmK05r2ylZOUo%2FgnwLG8UPslrA%2FgeyetmX8GfzKa0K%2FosvM19NLVVnMQzs%2F0ypizFONMjqnNVlQ9hW%2F2G1zRMz2jLE9sYWJ1dmLZjhcvF2XAaAvyjq4XTnRAgZzMcd3cetXms6a0LoJtwD9aCDzgBzSPn0x9qzKr8fKZApMC3YM7fvkpO8vNW8iyPpPfJY4BxQqs%2BgN40m%2BjBWCVlv7RQ2ct5UcFIbX8Bgw32CtBHuqkS6roxlo9xxw3V1phMWCb7kdTsfvN5X%2Bm83uqgiP3CyZiqQ6%2BmRMKiWy5uetj%2F0SX0hgFPpyDL2cfN4cv7GrPjf2wP3MMM6n18YGOqUBeQA24BFFCtGgILClHSVI7rH%2F9b%2BDzaBcrOULf%2Ff3uklRmYEv9fqpBLeN3OdUO%2BdqZcNFY8jRCz%2B2mc4ya6n1a4aRuNCwZkZJmoNxCqhRsc%2BpwbpVbRUhN7df0K8JJD%2FgheF0cwf9LSiqmY24f8Y8DotHla0jsPRZvfrlMCKGXnSMv5EVgbfQPhVTz5hqysyXe48v2SdNPKT75MWWnvq1Ubt3qXKw&X-Amz-Signature=39e945ee66a21fdb7711485d54b1041b2fa253c3322625345accb2db992ddfa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2FX5M35%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBYGIUkgVYtduku1QvImUp57W%2FUWN74HZTqKQsjHDJhAIgG61XB38KX3gmOQ6cIBl8Mb4OfguJ60KiwmjX5VGvWOYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJhpGAZzeUAudJONyrcA8z36JcDAtqpDKixSeFYysiXHdxR8gnvtGIrQdLK0K7YXOkMRVjkCEB0ZJmgii14I3KSKd8nokqtDZe5i2zWJjGu6IKsrv%2FJ1qm6r4dwHE26vCtkzPszr9gJjRb6nV2kv03wFCyrVKyfTU5uFQcrrevBuc9rIdQgP7%2F7%2B3t%2F6Tnr1OBqiOv9Udfi2L6tEhizvHRIVKZKj6e4Bt3lx5CJuLxRLBjz8lbylBBzCGYTHH%2Bw%2F2IVbUkQGehZuTinuL2hw710Kz2Ae6GgtMBo%2BrGVloKYDB2R71X5rm%2B1zP9DGDXzSAENUIbCtGmK05r2ylZOUo%2FgnwLG8UPslrA%2FgeyetmX8GfzKa0K%2FosvM19NLVVnMQzs%2F0ypizFONMjqnNVlQ9hW%2F2G1zRMz2jLE9sYWJ1dmLZjhcvF2XAaAvyjq4XTnRAgZzMcd3cetXms6a0LoJtwD9aCDzgBzSPn0x9qzKr8fKZApMC3YM7fvkpO8vNW8iyPpPfJY4BxQqs%2BgN40m%2BjBWCVlv7RQ2ct5UcFIbX8Bgw32CtBHuqkS6roxlo9xxw3V1phMWCb7kdTsfvN5X%2Bm83uqgiP3CyZiqQ6%2BmRMKiWy5uetj%2F0SX0hgFPpyDL2cfN4cv7GrPjf2wP3MMM6n18YGOqUBeQA24BFFCtGgILClHSVI7rH%2F9b%2BDzaBcrOULf%2Ff3uklRmYEv9fqpBLeN3OdUO%2BdqZcNFY8jRCz%2B2mc4ya6n1a4aRuNCwZkZJmoNxCqhRsc%2BpwbpVbRUhN7df0K8JJD%2FgheF0cwf9LSiqmY24f8Y8DotHla0jsPRZvfrlMCKGXnSMv5EVgbfQPhVTz5hqysyXe48v2SdNPKT75MWWnvq1Ubt3qXKw&X-Amz-Signature=3801482424fa867f119960301454b47f41061562362c8be412963e6fac9ddff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2FX5M35%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBYGIUkgVYtduku1QvImUp57W%2FUWN74HZTqKQsjHDJhAIgG61XB38KX3gmOQ6cIBl8Mb4OfguJ60KiwmjX5VGvWOYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJhpGAZzeUAudJONyrcA8z36JcDAtqpDKixSeFYysiXHdxR8gnvtGIrQdLK0K7YXOkMRVjkCEB0ZJmgii14I3KSKd8nokqtDZe5i2zWJjGu6IKsrv%2FJ1qm6r4dwHE26vCtkzPszr9gJjRb6nV2kv03wFCyrVKyfTU5uFQcrrevBuc9rIdQgP7%2F7%2B3t%2F6Tnr1OBqiOv9Udfi2L6tEhizvHRIVKZKj6e4Bt3lx5CJuLxRLBjz8lbylBBzCGYTHH%2Bw%2F2IVbUkQGehZuTinuL2hw710Kz2Ae6GgtMBo%2BrGVloKYDB2R71X5rm%2B1zP9DGDXzSAENUIbCtGmK05r2ylZOUo%2FgnwLG8UPslrA%2FgeyetmX8GfzKa0K%2FosvM19NLVVnMQzs%2F0ypizFONMjqnNVlQ9hW%2F2G1zRMz2jLE9sYWJ1dmLZjhcvF2XAaAvyjq4XTnRAgZzMcd3cetXms6a0LoJtwD9aCDzgBzSPn0x9qzKr8fKZApMC3YM7fvkpO8vNW8iyPpPfJY4BxQqs%2BgN40m%2BjBWCVlv7RQ2ct5UcFIbX8Bgw32CtBHuqkS6roxlo9xxw3V1phMWCb7kdTsfvN5X%2Bm83uqgiP3CyZiqQ6%2BmRMKiWy5uetj%2F0SX0hgFPpyDL2cfN4cv7GrPjf2wP3MMM6n18YGOqUBeQA24BFFCtGgILClHSVI7rH%2F9b%2BDzaBcrOULf%2Ff3uklRmYEv9fqpBLeN3OdUO%2BdqZcNFY8jRCz%2B2mc4ya6n1a4aRuNCwZkZJmoNxCqhRsc%2BpwbpVbRUhN7df0K8JJD%2FgheF0cwf9LSiqmY24f8Y8DotHla0jsPRZvfrlMCKGXnSMv5EVgbfQPhVTz5hqysyXe48v2SdNPKT75MWWnvq1Ubt3qXKw&X-Amz-Signature=e6f4222ac1585abad26b34c2644d6b71b974fc42733a28ee9dc2485b1494c8ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2FX5M35%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBYGIUkgVYtduku1QvImUp57W%2FUWN74HZTqKQsjHDJhAIgG61XB38KX3gmOQ6cIBl8Mb4OfguJ60KiwmjX5VGvWOYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJhpGAZzeUAudJONyrcA8z36JcDAtqpDKixSeFYysiXHdxR8gnvtGIrQdLK0K7YXOkMRVjkCEB0ZJmgii14I3KSKd8nokqtDZe5i2zWJjGu6IKsrv%2FJ1qm6r4dwHE26vCtkzPszr9gJjRb6nV2kv03wFCyrVKyfTU5uFQcrrevBuc9rIdQgP7%2F7%2B3t%2F6Tnr1OBqiOv9Udfi2L6tEhizvHRIVKZKj6e4Bt3lx5CJuLxRLBjz8lbylBBzCGYTHH%2Bw%2F2IVbUkQGehZuTinuL2hw710Kz2Ae6GgtMBo%2BrGVloKYDB2R71X5rm%2B1zP9DGDXzSAENUIbCtGmK05r2ylZOUo%2FgnwLG8UPslrA%2FgeyetmX8GfzKa0K%2FosvM19NLVVnMQzs%2F0ypizFONMjqnNVlQ9hW%2F2G1zRMz2jLE9sYWJ1dmLZjhcvF2XAaAvyjq4XTnRAgZzMcd3cetXms6a0LoJtwD9aCDzgBzSPn0x9qzKr8fKZApMC3YM7fvkpO8vNW8iyPpPfJY4BxQqs%2BgN40m%2BjBWCVlv7RQ2ct5UcFIbX8Bgw32CtBHuqkS6roxlo9xxw3V1phMWCb7kdTsfvN5X%2Bm83uqgiP3CyZiqQ6%2BmRMKiWy5uetj%2F0SX0hgFPpyDL2cfN4cv7GrPjf2wP3MMM6n18YGOqUBeQA24BFFCtGgILClHSVI7rH%2F9b%2BDzaBcrOULf%2Ff3uklRmYEv9fqpBLeN3OdUO%2BdqZcNFY8jRCz%2B2mc4ya6n1a4aRuNCwZkZJmoNxCqhRsc%2BpwbpVbRUhN7df0K8JJD%2FgheF0cwf9LSiqmY24f8Y8DotHla0jsPRZvfrlMCKGXnSMv5EVgbfQPhVTz5hqysyXe48v2SdNPKT75MWWnvq1Ubt3qXKw&X-Amz-Signature=197bfb42d24fc3ef3ae5af01c8733b06b76d2aaad900b38071f30489712dcf3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2FX5M35%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBYGIUkgVYtduku1QvImUp57W%2FUWN74HZTqKQsjHDJhAIgG61XB38KX3gmOQ6cIBl8Mb4OfguJ60KiwmjX5VGvWOYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJhpGAZzeUAudJONyrcA8z36JcDAtqpDKixSeFYysiXHdxR8gnvtGIrQdLK0K7YXOkMRVjkCEB0ZJmgii14I3KSKd8nokqtDZe5i2zWJjGu6IKsrv%2FJ1qm6r4dwHE26vCtkzPszr9gJjRb6nV2kv03wFCyrVKyfTU5uFQcrrevBuc9rIdQgP7%2F7%2B3t%2F6Tnr1OBqiOv9Udfi2L6tEhizvHRIVKZKj6e4Bt3lx5CJuLxRLBjz8lbylBBzCGYTHH%2Bw%2F2IVbUkQGehZuTinuL2hw710Kz2Ae6GgtMBo%2BrGVloKYDB2R71X5rm%2B1zP9DGDXzSAENUIbCtGmK05r2ylZOUo%2FgnwLG8UPslrA%2FgeyetmX8GfzKa0K%2FosvM19NLVVnMQzs%2F0ypizFONMjqnNVlQ9hW%2F2G1zRMz2jLE9sYWJ1dmLZjhcvF2XAaAvyjq4XTnRAgZzMcd3cetXms6a0LoJtwD9aCDzgBzSPn0x9qzKr8fKZApMC3YM7fvkpO8vNW8iyPpPfJY4BxQqs%2BgN40m%2BjBWCVlv7RQ2ct5UcFIbX8Bgw32CtBHuqkS6roxlo9xxw3V1phMWCb7kdTsfvN5X%2Bm83uqgiP3CyZiqQ6%2BmRMKiWy5uetj%2F0SX0hgFPpyDL2cfN4cv7GrPjf2wP3MMM6n18YGOqUBeQA24BFFCtGgILClHSVI7rH%2F9b%2BDzaBcrOULf%2Ff3uklRmYEv9fqpBLeN3OdUO%2BdqZcNFY8jRCz%2B2mc4ya6n1a4aRuNCwZkZJmoNxCqhRsc%2BpwbpVbRUhN7df0K8JJD%2FgheF0cwf9LSiqmY24f8Y8DotHla0jsPRZvfrlMCKGXnSMv5EVgbfQPhVTz5hqysyXe48v2SdNPKT75MWWnvq1Ubt3qXKw&X-Amz-Signature=c2f6ee130d023de9e2b9cf069593582871c3b0f6aa281edf5f946cd0f84c40d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2FX5M35%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBYGIUkgVYtduku1QvImUp57W%2FUWN74HZTqKQsjHDJhAIgG61XB38KX3gmOQ6cIBl8Mb4OfguJ60KiwmjX5VGvWOYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJhpGAZzeUAudJONyrcA8z36JcDAtqpDKixSeFYysiXHdxR8gnvtGIrQdLK0K7YXOkMRVjkCEB0ZJmgii14I3KSKd8nokqtDZe5i2zWJjGu6IKsrv%2FJ1qm6r4dwHE26vCtkzPszr9gJjRb6nV2kv03wFCyrVKyfTU5uFQcrrevBuc9rIdQgP7%2F7%2B3t%2F6Tnr1OBqiOv9Udfi2L6tEhizvHRIVKZKj6e4Bt3lx5CJuLxRLBjz8lbylBBzCGYTHH%2Bw%2F2IVbUkQGehZuTinuL2hw710Kz2Ae6GgtMBo%2BrGVloKYDB2R71X5rm%2B1zP9DGDXzSAENUIbCtGmK05r2ylZOUo%2FgnwLG8UPslrA%2FgeyetmX8GfzKa0K%2FosvM19NLVVnMQzs%2F0ypizFONMjqnNVlQ9hW%2F2G1zRMz2jLE9sYWJ1dmLZjhcvF2XAaAvyjq4XTnRAgZzMcd3cetXms6a0LoJtwD9aCDzgBzSPn0x9qzKr8fKZApMC3YM7fvkpO8vNW8iyPpPfJY4BxQqs%2BgN40m%2BjBWCVlv7RQ2ct5UcFIbX8Bgw32CtBHuqkS6roxlo9xxw3V1phMWCb7kdTsfvN5X%2Bm83uqgiP3CyZiqQ6%2BmRMKiWy5uetj%2F0SX0hgFPpyDL2cfN4cv7GrPjf2wP3MMM6n18YGOqUBeQA24BFFCtGgILClHSVI7rH%2F9b%2BDzaBcrOULf%2Ff3uklRmYEv9fqpBLeN3OdUO%2BdqZcNFY8jRCz%2B2mc4ya6n1a4aRuNCwZkZJmoNxCqhRsc%2BpwbpVbRUhN7df0K8JJD%2FgheF0cwf9LSiqmY24f8Y8DotHla0jsPRZvfrlMCKGXnSMv5EVgbfQPhVTz5hqysyXe48v2SdNPKT75MWWnvq1Ubt3qXKw&X-Amz-Signature=d6def85db9b736db9757b5d51cfa7ff2fddc54b4212b5378c5350811ede70451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBTYVXTC%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkjqNvwlA1RFHHAbfFZuplqxzCDRIEFxAeg1IDbgkvcAiBTwdICH3Ppj7babeKQZJE%2FLD5niXXYpeu91FilJuAG0iqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmLSY6mnU2dHhhTenKtwDV5en%2BxFwfeA0STnkDs2B7gp3YH7V2z0Bja8SFXAqsLK7wdwVKdTczOksGrADAuHtR1gp%2F2leu9y%2BexhNnKchfHSf%2B%2FxMOR4xksJwKdmsMSw7Z7ICICPsNdr8CcKWVc1bIb2RcHm6YfLqUFadjowYZpL75doo%2B0o9nKtYqEsY5bccvfl3nRlEvQSA3v8CviJEbhPy2Ii2KGpNKLlE7mRtUt8%2BHfex99QQxyqG37k3ke%2F25KmkJlE7l33fksRUsy1Ew7xiBTJac1H5o8MOghKoszyRQACrvXHFSxxna%2BqjewUMUhYBuOIn2RCLQN9XQunK%2FUz6qmqhnOzzB4xBTK316wQy0osp5Ym3MwtCnHoY%2BIZNGlP%2FxfxywZtpZS5rPZWdqnVgUBX18ktQEwc2T9EWmmEPUTv%2FDsSY4C3diiih0nx9cn5OgG00Aq9EF%2BlvACTV%2BC%2F%2Bjxas%2BSqB6LNXGRsoeNeObeC0zjZVoYseoJtvL4xqlllE1siFh%2B9oIlTqjm8ebktLks2%2BBbMAKY0pmGFgBP9wS9cPe4%2FIRBCN392Rdcguh0U6A2Q6Mqc047ne82EypLT5LZvniYkTC2nqgMtnm8zL4FpQCOfzyFtDWH3vxcROlMwEXgSgw2%2BX19IwjqjXxgY6pgGZil2uAaqLzj8r1tD1e7Pa5dVX7NRrMq2MM9y1v6lm%2FkLrnwZ5JeycZcZ5j6uP2E0Lvd6do7kK983NmD8bF0gBVbVGppwAeIRC9EtFsIgGeCtUHVwioQ03DrwLNRNxQWUUA9IChll%2ByQ6J8LeqXvao34fyulnKg%2B25AqHKrUmMqd6u1r0RXzrhHQQD6iVcDuAXgB%2FIFMpc5beFm3Jnje9DrRZvzYx0&X-Amz-Signature=71eeb91975a95a800e1886ef1bfa75c18ace4acc5e5533353244a03cb690ef58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MY6SQJI%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtanfcl%2B37ahbmx%2B0MM4vqj05GgTKfOoDyZC7DxIz78AiBPotOlRdnPBH0x2eQll35UBLSNuRxVPrTl8yN5OspCmSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6%2B0hGwgnP5%2F1BKEgKtwDzdZW6kjOwM%2Fp2uAEJ5q6yBugPgnGvLZtOWtMLJrA5OTUTxb1VzyNgEX9JWyx50uHK76TlLsTKrorSpUdyqKChntSJez8Il00cakSkhdv2XBHOMI8x5Uti7TEAaYXfSol0ReQX7bCkR3X99Zaip9wqHRt4Hh4H81ZZVR4SYklTqXzbSxISL%2BrixVtTgfTPgXbuf6c2XeZ8Om7ss4MjWiD80gBDxlrhOqwcQm8HJFNg5xQt4pontFeRe%2FMVuDEJxEgYfrOAYTOT8TqvM2eDdQU2i3VeBCAdukVAfzQBDjXWeg%2FcQxzW0SipaXUluqoZzhHc3jC9dx91ql8Aj9wiPXhtzTHr%2BkIeh16U7A716EUc%2BRDuEFeBLC9aodDaLZsgkER%2FSXJ8CkTb7b%2B9nUxkScCODSGYjjDfWXIlXcETYr3jvV%2B6m13YaiNH2LuRqTV81UIclCHpg5%2BOF%2B20aMycho4%2FFpxFCuIJNQxo3bk8ctHrCebK%2F3LPvoyZ5%2FHIRFvkQmOjrT4DIXcL212Uaze9YK3nrZw7lPZXUDyPZZatCxBu6d1lipL%2FBc%2BfiPG%2FWva%2Fvg7HUa22Rp%2BBnk%2BP8MAxPrVH54DKRenGKtiHRJnl78S7QdYX%2BghiC6N8vkQ5ogwwqfXxgY6pgEdwa9oSzNu6io1HlvmomAV3qy9OyNtUp4v3SwAC6QtFeT5Ii%2FUyUh%2FnVv0gcSd%2BkHtj0NZtOHoPVGN6MYkov1d%2B6HxHelHioZWsmNsNKpAW4qze7KyZUSblMJSbO38o%2F4AQhWbpLuLPHFoH6qfSGGyHISNsCRS7X4%2F5Yl%2FMtm9j18N1iduE5lrpXGhAZSItsutWRvdbFj8pQu7VcG7l9Ry4hOIN5yo&X-Amz-Signature=54dda3ddde5bafae8bed3f7bf585438414b0b33ef14893d2606af239f9251adf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVMAWRR6%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVPrdQiWc4LCyOFv6Hxd1fSjXT0DZQdxyB2HLcCopF%2BAIgFrnVf1MNl%2FjpoVgTtOojnHCTuVSo2KSrR%2B2Pjnzx81YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbhNWiABCncGg20xSrcA1OBdB5MLiYdAD8GPvETsyjZxw1h%2FvceIJ6yJ4kqer6ypS48%2FaUhjrBckhCPuNBsIK4gW4%2FJfkOu2xr4iDEGquOySDnpDgLG403sCe6rJwTc0uRv5saz7vFAtLWlSstyZhq8EkAekROd3gnhrGNUSC1%2Fb5tuWUOWuO1%2FaiDuEX1PNeAw61a6w5GsqiTTnlIGPy1nZh%2FYAbwrayp9nfzGVhNq%2BQ6jvyDd5t6wFif193WKT%2BZFkCWBUGC04MSK1fMObqF7dC5xbxEME9pp2TG5OYH6u54NXv1waVCzTmbG18G8QWfBnoDbNKsOoVmt2yurDVvz%2FS%2Fps0bteCHhBx%2FjE6T1qUHb2DmJ%2FMw%2FpoZL6pjDA97Ij0www86MY5z%2FAIq03GgZvSzYj5svAcZvSlMlU9Ch5xOQOoWBtiabmuRE4J7K0nfQRgPllQCcQ2EO3R9DXsipV%2Bp8V17L7C%2F1xIY93HJltj3wJDcXLeaLwWqpQnT8bMj6fYETZdP5Rrnf%2FbNAjNUj7a5SF3aymVDSqjRBzw2HCCR9BMgUMnUEZWt0ZEy19Y%2BkmvTZPFePG7koSDHITe7InCL811Hq8u3MEZL2UyxjTY%2F7%2FgM0OXF6%2F8WUUeCnhjzKwmvF41WNhQ0FMO6n18YGOqUBeHGxB7Adzxn3KzXokDOLUAgtk3zhu%2B2GN2Ykyvj9%2F6QgLJXHEV9caCkHzapWLH%2BDK7czXyDkbF%2FIq6ULMQZ2VCGC8fhgLPc1je82U7ZlrxpN331ILXelnci3VIGU1nTyvkiLi6RiPa7GWG4LJb4eWnDxGrGZYaUQ8vSyWeMoEbRvjx1N2snhD1zCgEE5BeG2szGVaMU5K8B5jX8YX14bT3YZJASD&X-Amz-Signature=323d3ff6715f8ccf54e4f6c452f674bc93363bfb4175e4dbd60ecb5c28e91e69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2FX5M35%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBYGIUkgVYtduku1QvImUp57W%2FUWN74HZTqKQsjHDJhAIgG61XB38KX3gmOQ6cIBl8Mb4OfguJ60KiwmjX5VGvWOYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJhpGAZzeUAudJONyrcA8z36JcDAtqpDKixSeFYysiXHdxR8gnvtGIrQdLK0K7YXOkMRVjkCEB0ZJmgii14I3KSKd8nokqtDZe5i2zWJjGu6IKsrv%2FJ1qm6r4dwHE26vCtkzPszr9gJjRb6nV2kv03wFCyrVKyfTU5uFQcrrevBuc9rIdQgP7%2F7%2B3t%2F6Tnr1OBqiOv9Udfi2L6tEhizvHRIVKZKj6e4Bt3lx5CJuLxRLBjz8lbylBBzCGYTHH%2Bw%2F2IVbUkQGehZuTinuL2hw710Kz2Ae6GgtMBo%2BrGVloKYDB2R71X5rm%2B1zP9DGDXzSAENUIbCtGmK05r2ylZOUo%2FgnwLG8UPslrA%2FgeyetmX8GfzKa0K%2FosvM19NLVVnMQzs%2F0ypizFONMjqnNVlQ9hW%2F2G1zRMz2jLE9sYWJ1dmLZjhcvF2XAaAvyjq4XTnRAgZzMcd3cetXms6a0LoJtwD9aCDzgBzSPn0x9qzKr8fKZApMC3YM7fvkpO8vNW8iyPpPfJY4BxQqs%2BgN40m%2BjBWCVlv7RQ2ct5UcFIbX8Bgw32CtBHuqkS6roxlo9xxw3V1phMWCb7kdTsfvN5X%2Bm83uqgiP3CyZiqQ6%2BmRMKiWy5uetj%2F0SX0hgFPpyDL2cfN4cv7GrPjf2wP3MMM6n18YGOqUBeQA24BFFCtGgILClHSVI7rH%2F9b%2BDzaBcrOULf%2Ff3uklRmYEv9fqpBLeN3OdUO%2BdqZcNFY8jRCz%2B2mc4ya6n1a4aRuNCwZkZJmoNxCqhRsc%2BpwbpVbRUhN7df0K8JJD%2FgheF0cwf9LSiqmY24f8Y8DotHla0jsPRZvfrlMCKGXnSMv5EVgbfQPhVTz5hqysyXe48v2SdNPKT75MWWnvq1Ubt3qXKw&X-Amz-Signature=ce4236f29908135dc00f98313a9ef0920311dd64e5a681d59fed203a52687d79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D7RNEMA%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmO0%2BfXJxePKEzc1SuyOZvmpG0OFnRjGuXMPVXVEXEFwIgHx32StvTYuUkUDfIPhGtVLy9KEWzHsmMYBglCeFUCQYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEaIWfHfpP8TAJnp5CrcAzC4qO7GeYrZaSHme%2FO38OovC4WLo%2B8rJRFtfceAgtblB%2BhMiGJqi07o1xzKNUGp%2FCLGRhRL1X4Z%2FFe6smazezM9%2B5LLi%2FPHHRjaIZZIUsB9XPKFWodgxC61GzEtRsO4UaxcFuL%2F1RXjGHkaT1NntI9psAzeP4JFdQdQdW3EdnbO71dRQ3q%2FRBKRXH0GoX0dwJDy2%2FSSX5MIpippmoG4eNCPAIgKpJZy9E1TaJMkWlfgVfj9ZT8RIQ0Ln1QTDn%2B8vNrHfMD3w7o6GivUkHlNmlolOPbKt%2FDlIohVTW%2B80W3PP5k4bxHX5plbIz8jGtwi3k7FN3KIY7nQM2T6NwpmhMIorna%2FIOA3cqXtWihvw4eU7ehh1brEC%2FIWaxiG1WxZifaXQO2K%2FnAMCN6C7VUtRMH7usgFaYWwUQjwQFO6tTxOh%2FF0MZTOD7MuZjy4WWQRSeca7dIjx7d2nufAVsiYXqeLC9CEzoqw3%2BCAl1BphZ8AgJ2KaOLIMNdcKPh23ivoiu2Nr1itsg3V6cdfO1hfnVRR62xRA04xODDBMiD9hqwKw3oSkEEbq8oO93RoxM1sMZguCtvH80Bs42DhNS3RQcmoEYuNoXdtLaQNjn2u8X0m9pSeeccDTJnvq86dMM2n18YGOqUBzvKYB5fpoCNtPoT8QdYe4%2B7prOYQT%2FJhhrmAi96YC9CawQdYWj3qzi3tSelzbL36X%2BIpqXAHtWDKoXQ5Qd8oWE%2Flq1mCviIyO4jk7VQOnYqFsxE862qJt%2BstnSugtW3OWjxZfPJqnZu51CWRwWYOWzuliP%2FbyYHaacqy5T8vWrL8LmYtdf8yBgIP6ffY897JdjI%2FKyDhEy052XKuVvoqvNMphPn7&X-Amz-Signature=1b0a65a6880525b6d6d3d87acf5bb4d8cd88570190eeeb2e7411a051f47109a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2FX5M35%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBYGIUkgVYtduku1QvImUp57W%2FUWN74HZTqKQsjHDJhAIgG61XB38KX3gmOQ6cIBl8Mb4OfguJ60KiwmjX5VGvWOYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJhpGAZzeUAudJONyrcA8z36JcDAtqpDKixSeFYysiXHdxR8gnvtGIrQdLK0K7YXOkMRVjkCEB0ZJmgii14I3KSKd8nokqtDZe5i2zWJjGu6IKsrv%2FJ1qm6r4dwHE26vCtkzPszr9gJjRb6nV2kv03wFCyrVKyfTU5uFQcrrevBuc9rIdQgP7%2F7%2B3t%2F6Tnr1OBqiOv9Udfi2L6tEhizvHRIVKZKj6e4Bt3lx5CJuLxRLBjz8lbylBBzCGYTHH%2Bw%2F2IVbUkQGehZuTinuL2hw710Kz2Ae6GgtMBo%2BrGVloKYDB2R71X5rm%2B1zP9DGDXzSAENUIbCtGmK05r2ylZOUo%2FgnwLG8UPslrA%2FgeyetmX8GfzKa0K%2FosvM19NLVVnMQzs%2F0ypizFONMjqnNVlQ9hW%2F2G1zRMz2jLE9sYWJ1dmLZjhcvF2XAaAvyjq4XTnRAgZzMcd3cetXms6a0LoJtwD9aCDzgBzSPn0x9qzKr8fKZApMC3YM7fvkpO8vNW8iyPpPfJY4BxQqs%2BgN40m%2BjBWCVlv7RQ2ct5UcFIbX8Bgw32CtBHuqkS6roxlo9xxw3V1phMWCb7kdTsfvN5X%2Bm83uqgiP3CyZiqQ6%2BmRMKiWy5uetj%2F0SX0hgFPpyDL2cfN4cv7GrPjf2wP3MMM6n18YGOqUBeQA24BFFCtGgILClHSVI7rH%2F9b%2BDzaBcrOULf%2Ff3uklRmYEv9fqpBLeN3OdUO%2BdqZcNFY8jRCz%2B2mc4ya6n1a4aRuNCwZkZJmoNxCqhRsc%2BpwbpVbRUhN7df0K8JJD%2FgheF0cwf9LSiqmY24f8Y8DotHla0jsPRZvfrlMCKGXnSMv5EVgbfQPhVTz5hqysyXe48v2SdNPKT75MWWnvq1Ubt3qXKw&X-Amz-Signature=d8e5c177b192a34eaf36f9b4654ff0a1639c07f9ddf54c92a262b78e35fd2d47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRIRZ24%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9cGD57p4j0QOIhOjhRp8%2FP61HHCDIDEYR6jE%2FM%2FWyFAiEA4DQLi0s8EcpuVMPLodO0Jetj1EYCWNYiirmiHqsaCpYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0TvjF7IwSq4xliOyrcA627uhn3h7TQKVh2UQY8jl93CXhLs4Gi5cT3yKJ9RyDw4AunYAIsLGsPu0Z71%2FVT0gDKqRymg%2BbkcWV2ZoI3r1y20ccJkvx0CqXIzWT1q7MvQ1IEc8XO4ZKGqCXElcuTwX7pdHm%2FbZHmvhjrQZbcJxIY40QsGyjs0FK8AUAfg57pRKcnaZBuxT%2Byr4lheNKgjIzf9Vbs9XjMFwOZNcyBwsc6p4FRZyTtYocnqqRa8xUx%2BK1lk56W%2F9hYRPKgIoj%2FO49WGwOK8llU6MurquvXGawpLNU3VsTubdwyM20s8k52YcRhOXVzacnpgBr2%2B5cfY7KpjyRJzFcG28PaLvJGWP7alDvliWRtbkcia9nuL%2BjMvEZA08p7NbKwUU8bVm12nbnA3%2B7m6GgJCTl32SZwA%2FKqT9dJmoczHRcsg%2Bc1BUAbUFzPRtt0AfIFeWGL%2FcGMmNLjjwAzP1Wt%2FzIhDcDZ71nzYONW9fALa9O2G54IStMyqZMS0VmCDkAm74BCbtTPTuPtSBAspNBjrIx9H6hYmgnciWjjoDQ93kLrQpHa8SmhoVHY6TELHnG4eUdjFmT%2BJF0nmtV%2F0WaIZSEaMeoNRx3I8NiIepLMzatZYENrWenvgaQb35V4wV88xWpHMJCo18YGOqUBT9qgHfn5l8x2QisJiXgO%2BjdYikjc%2FvHskmbvDQQmWGjv7hDTrIqJHqu71tYQOyLpTy4dZFGa%2BjLWis8UziEYbPz6XDlsv2eQusRyFvg%2F%2BBgIBOwyADkj0cz7b310QZw5mcUM%2Fycbgzhenuo%2FoFSDJ7fgwIfVglHrvpvcoqPn2FwpOHdfWYdE0rYwCHNdnFcNLcy9%2FZxIm6Fj6qcK7QVx9RYKmR0S&X-Amz-Signature=0b4acc426568492462b432d4bca4a1a798f6f1dc06331d56ee05a40bdd77dab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2FX5M35%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBYGIUkgVYtduku1QvImUp57W%2FUWN74HZTqKQsjHDJhAIgG61XB38KX3gmOQ6cIBl8Mb4OfguJ60KiwmjX5VGvWOYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJhpGAZzeUAudJONyrcA8z36JcDAtqpDKixSeFYysiXHdxR8gnvtGIrQdLK0K7YXOkMRVjkCEB0ZJmgii14I3KSKd8nokqtDZe5i2zWJjGu6IKsrv%2FJ1qm6r4dwHE26vCtkzPszr9gJjRb6nV2kv03wFCyrVKyfTU5uFQcrrevBuc9rIdQgP7%2F7%2B3t%2F6Tnr1OBqiOv9Udfi2L6tEhizvHRIVKZKj6e4Bt3lx5CJuLxRLBjz8lbylBBzCGYTHH%2Bw%2F2IVbUkQGehZuTinuL2hw710Kz2Ae6GgtMBo%2BrGVloKYDB2R71X5rm%2B1zP9DGDXzSAENUIbCtGmK05r2ylZOUo%2FgnwLG8UPslrA%2FgeyetmX8GfzKa0K%2FosvM19NLVVnMQzs%2F0ypizFONMjqnNVlQ9hW%2F2G1zRMz2jLE9sYWJ1dmLZjhcvF2XAaAvyjq4XTnRAgZzMcd3cetXms6a0LoJtwD9aCDzgBzSPn0x9qzKr8fKZApMC3YM7fvkpO8vNW8iyPpPfJY4BxQqs%2BgN40m%2BjBWCVlv7RQ2ct5UcFIbX8Bgw32CtBHuqkS6roxlo9xxw3V1phMWCb7kdTsfvN5X%2Bm83uqgiP3CyZiqQ6%2BmRMKiWy5uetj%2F0SX0hgFPpyDL2cfN4cv7GrPjf2wP3MMM6n18YGOqUBeQA24BFFCtGgILClHSVI7rH%2F9b%2BDzaBcrOULf%2Ff3uklRmYEv9fqpBLeN3OdUO%2BdqZcNFY8jRCz%2B2mc4ya6n1a4aRuNCwZkZJmoNxCqhRsc%2BpwbpVbRUhN7df0K8JJD%2FgheF0cwf9LSiqmY24f8Y8DotHla0jsPRZvfrlMCKGXnSMv5EVgbfQPhVTz5hqysyXe48v2SdNPKT75MWWnvq1Ubt3qXKw&X-Amz-Signature=1e79e7ffc435581c3bd3d07c7eb988abff478489184afc1d907138dca4af8750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CUIH2I4%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgLKDXlW6p0bb8D4CSREUe1XjVzj59HT0qIeiqB9R2ngIhAJlg5ypZliW5cuvAst55LmnrnUDBw2lT1QpojrITrag0KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzB8d4WA5%2BO2uHefMcq3ANnH9QSQnkQuNBT86iIDnV8Co0jJSLPZa536ikHaoV5tmTeC1l7mUDI3Px75w3D4EcHRkwKVMMSTXUeghJ4%2B5Lr4kL0RmdbGMYDY%2Bh%2BMBlava4l8eFMAgWMETbhGMTl5g5cHOP%2FaDM7pHr2VUjOZ7HwWLDT%2F4N6Zrl5cO5P%2BqmY%2BVM9BvYz3e5nF4xfzBzdWCB3ATH6BiiwaSYNozPpDm47WlS2hs1BD3a4TRa9q03WUMztE%2FPqtx8Jm12he0fFBXJPOsuXdZQvbSZGcZKHOpmrqMzgoGhtD%2BbXAcyWR9l%2F2f1N%2FlB86ppuxggvvGruPMkzz4Tbjo57B2G8kg4nOjNmnx4WF74D9wtnae%2ByoQbiLzFU9%2BIavyxROQxp3Hh5g8BcXmtweUerqtAWDwFKdBUk4Rur6a6VoLcT47VIch0H5lP3vNZYREJyboZ7G25cG41tjRdNdKDOMAKqw5Bjfwf0J0YWc86hej%2BH4ODtR7mgVmLC2JGx5YkI3uuslK5ZV%2FXBG7W4jVJ96huLOZ2xW1uOuC81vHzN3kNsdiChXpzbv2MiZXGse6SFdiT5f1WQifMmAhcZKreCBOs%2Bnsls%2BZ1TQNwmu5o88Hw5K4OCeej%2BSf%2BNWDjCeVzjLxfioTCfqNfGBjqkAUApTLrHQqaTUzOqx6peKthJNnrJ56YDWOUQnL2G4MA1mDAc6NjZ4t%2FuNXDEIZa3SjtNb8Wa%2FF6Bx1rL48B8ncCea%2B4C2qXCc6v%2B4y4ul%2BBB0SXTd5T%2Bg4TQxP4dJjtbgEeEz30ppa1Jtxwf8%2Frw2PmuotsVTbA%2Blowqv%2F%2BwtUT%2FHO9xa%2BYpFdSUTLrRMQvi83hWOCjdEfvRGGF57ClQ02QzIT%2BW&X-Amz-Signature=094e8aeb8c1e09d0c087bb10dca6d26b79a7cebab778d8aa8ee026eab37e09af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2FX5M35%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBYGIUkgVYtduku1QvImUp57W%2FUWN74HZTqKQsjHDJhAIgG61XB38KX3gmOQ6cIBl8Mb4OfguJ60KiwmjX5VGvWOYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJhpGAZzeUAudJONyrcA8z36JcDAtqpDKixSeFYysiXHdxR8gnvtGIrQdLK0K7YXOkMRVjkCEB0ZJmgii14I3KSKd8nokqtDZe5i2zWJjGu6IKsrv%2FJ1qm6r4dwHE26vCtkzPszr9gJjRb6nV2kv03wFCyrVKyfTU5uFQcrrevBuc9rIdQgP7%2F7%2B3t%2F6Tnr1OBqiOv9Udfi2L6tEhizvHRIVKZKj6e4Bt3lx5CJuLxRLBjz8lbylBBzCGYTHH%2Bw%2F2IVbUkQGehZuTinuL2hw710Kz2Ae6GgtMBo%2BrGVloKYDB2R71X5rm%2B1zP9DGDXzSAENUIbCtGmK05r2ylZOUo%2FgnwLG8UPslrA%2FgeyetmX8GfzKa0K%2FosvM19NLVVnMQzs%2F0ypizFONMjqnNVlQ9hW%2F2G1zRMz2jLE9sYWJ1dmLZjhcvF2XAaAvyjq4XTnRAgZzMcd3cetXms6a0LoJtwD9aCDzgBzSPn0x9qzKr8fKZApMC3YM7fvkpO8vNW8iyPpPfJY4BxQqs%2BgN40m%2BjBWCVlv7RQ2ct5UcFIbX8Bgw32CtBHuqkS6roxlo9xxw3V1phMWCb7kdTsfvN5X%2Bm83uqgiP3CyZiqQ6%2BmRMKiWy5uetj%2F0SX0hgFPpyDL2cfN4cv7GrPjf2wP3MMM6n18YGOqUBeQA24BFFCtGgILClHSVI7rH%2F9b%2BDzaBcrOULf%2Ff3uklRmYEv9fqpBLeN3OdUO%2BdqZcNFY8jRCz%2B2mc4ya6n1a4aRuNCwZkZJmoNxCqhRsc%2BpwbpVbRUhN7df0K8JJD%2FgheF0cwf9LSiqmY24f8Y8DotHla0jsPRZvfrlMCKGXnSMv5EVgbfQPhVTz5hqysyXe48v2SdNPKT75MWWnvq1Ubt3qXKw&X-Amz-Signature=0418b95466909c6103e90f2acf7161d6cf2778f5e663c25e3772fa1468bb3f31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z76XGZUE%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgHAFDC5S7im5Yt8drTOpJNJV2gfiQVOnOKDlVHKIUxAiBRSvFmY9Ac05uYnDyPkhhJocuPKR5gVIC%2FNKGcgzBwViqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8EgakHnns%2FPg%2BAHGKtwDD95WWSTKvty3CYL36oHkERUogGQQn%2F9nyKiBRXfy2GFt6AQiL8h2D7WX1UhZYazuSMAumTckCnRsC%2B%2BBjYbKXiiWpLSl5nNTFXdbRPKRdm%2BcOGL4VVQ2exo4vdaeuytDduQom%2F%2Brk2Sd9dcUX3dbYXbYZwlhWtEetGnor6hEqRVgM7yMaLCokpI6h72nrnWEraTWfLIqX4%2B5QWn3Q4I5dRgYPR8LdtNZfFA0NFD%2F56SYKvRJYAN1F6uhrKOIGKQOYTzjRKkRi2341vPAc%2Fi%2FDTYzyUOn6iQsUVBG5HZbigFZS91Nf8TqkucXi3qjOnePhK4Tjao9P4Gmg7A7rWx6bc3aTkNy5E99YvIbkWPnXa3MxamiaReF2CZMK0L6faGiM2DAu98%2BmuKj6kNh2sshZ32YsGXPaymGz0zGEUAOuj4dcP3dqnYzzClVX3B1k40h5pCaJQ3OyUUk5Fl0QDbHXpqt7V%2FEdPTrenWa2nQODdaWFUj%2Fak59jwOpSOrVVawboqCrQhJEeHLi%2BobDpynl8bK1%2FssAla1KUupYW9%2BQxrFdGJCvS8mN2VRirA1Y9kIY%2BFgR6M5VRTXN0xNCXj2%2B6q0FjFRLsTQ5APxYSfqeAo3XesyBQRkEa7T9ueMw%2B6fXxgY6pgFITWTTqQ131mGT0Fyj4Bse4gf4Mg9wIz1cZ4A5yDt%2FyDC19ZrzOfy1S1KBNHZ8Gvwmixt6xp1hb858EWiRiLGZW4NS4BtwUCQPH%2BzSoWyAQtGrd%2Fa3ASoKS1C%2BNinalWJ0GTd%2B%2Fjb1q%2F9X%2F6Ygsg39%2F4nffbmyaHNHJvXSW%2Fv%2F9z8WJYERWseuN6rFKjg5c0xc4KI2XNZ77MnI7GzAYraus6ySDp6d&X-Amz-Signature=26bb0a970d3732ab40c6e328658b9c3d6ce016b457cb798108a5d981c16388d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2FX5M35%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBYGIUkgVYtduku1QvImUp57W%2FUWN74HZTqKQsjHDJhAIgG61XB38KX3gmOQ6cIBl8Mb4OfguJ60KiwmjX5VGvWOYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJhpGAZzeUAudJONyrcA8z36JcDAtqpDKixSeFYysiXHdxR8gnvtGIrQdLK0K7YXOkMRVjkCEB0ZJmgii14I3KSKd8nokqtDZe5i2zWJjGu6IKsrv%2FJ1qm6r4dwHE26vCtkzPszr9gJjRb6nV2kv03wFCyrVKyfTU5uFQcrrevBuc9rIdQgP7%2F7%2B3t%2F6Tnr1OBqiOv9Udfi2L6tEhizvHRIVKZKj6e4Bt3lx5CJuLxRLBjz8lbylBBzCGYTHH%2Bw%2F2IVbUkQGehZuTinuL2hw710Kz2Ae6GgtMBo%2BrGVloKYDB2R71X5rm%2B1zP9DGDXzSAENUIbCtGmK05r2ylZOUo%2FgnwLG8UPslrA%2FgeyetmX8GfzKa0K%2FosvM19NLVVnMQzs%2F0ypizFONMjqnNVlQ9hW%2F2G1zRMz2jLE9sYWJ1dmLZjhcvF2XAaAvyjq4XTnRAgZzMcd3cetXms6a0LoJtwD9aCDzgBzSPn0x9qzKr8fKZApMC3YM7fvkpO8vNW8iyPpPfJY4BxQqs%2BgN40m%2BjBWCVlv7RQ2ct5UcFIbX8Bgw32CtBHuqkS6roxlo9xxw3V1phMWCb7kdTsfvN5X%2Bm83uqgiP3CyZiqQ6%2BmRMKiWy5uetj%2F0SX0hgFPpyDL2cfN4cv7GrPjf2wP3MMM6n18YGOqUBeQA24BFFCtGgILClHSVI7rH%2F9b%2BDzaBcrOULf%2Ff3uklRmYEv9fqpBLeN3OdUO%2BdqZcNFY8jRCz%2B2mc4ya6n1a4aRuNCwZkZJmoNxCqhRsc%2BpwbpVbRUhN7df0K8JJD%2FgheF0cwf9LSiqmY24f8Y8DotHla0jsPRZvfrlMCKGXnSMv5EVgbfQPhVTz5hqysyXe48v2SdNPKT75MWWnvq1Ubt3qXKw&X-Amz-Signature=d8806b8a7a394d05ad16dd2c565cb42c82d0458ffb6a4d8621251de543fe2922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGUHWPG6%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnyg%2BvGuQXswspoqP%2F5SuHzogzkY0yZqoknVkxRwa%2BQAiEA6Mh6zMaUhXLoVNq2Tn97U0A9QB65BoZ3GijD8LcK%2B4QqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnpGn19QBIDeRbQByrcA1Maad3qo031PtvWwa%2BaEwPzv8jk0h2SxQXXnqoLGGyDX%2FOQOkCYPl%2BpHrvAFhPgqotdKvXaC1RnjR6YMaUmgZV%2B7F9I7ZwIq6El%2F57oTBzHX%2B0xKsZPyj993HOAeFMhgrzSwxQDmnEk1F1fmPYzJVPRHcj2Vume2pAJF6B%2BKnm%2BIaEMx1gJqY4p2k8l9wReukdkWxG0E3XV7FKgNJMIlgWsmp9fBf%2BBpB3wp4c9PJ9HlAw7WTl9AY6dAN9HdkGi%2BeP2pUayQrGnrOOkI%2F7WZgE08ELL8oQCKAvcQjfyTeVxbpliGGwrNosxzTJD9RkW50lX9PgWuY2sBuR5KgCwUxNjb1Ny70N2R7jRAiIhMHvKMz3Oy4l3NUyJXxX2EQNJqPcEzZ55SkGkYC%2FMTYyjjIaCAzyowBY2zyhTbfH9VMrM0o8KqMOO9Rurt8zwZT8zwxFlzx3M3e3xgjOWb2SZWaJ1okXsfAoQrrwM2Et0i%2FFxPpcUVdo3ay%2B%2BpLb9ykYCWpQSi%2FhXUmOgCvHa0B8tTqPtE1dKmSnkJsb0aSnHqzMHbTuvuSs5yJMscoWl5oo5SnEdJiZ3KQMVCOvASvt7ZAKYZYLbTKJPgHMa1SbArzJM11bm7UdnZcWSx8GTMJCo18YGOqUBIlbWPONV2exHXUu6NiBFYb3vnUgDRapI1KjEKa50bCStR%2FTGixsC2FaXaxkHIr37uG3xBWhP%2BUhVQWKEk8IpG%2F8zQmKMVQi68ny%2FaXCTQYkWSbUKC97Z3RjdFiWPQNVjgJObqqPDh%2FTmot034WK1SEZGmrUdJShuq7uxV%2BodoAuSLXnsp2GBSTTkGYccLy8vvPomUGRA4YiThkj8SM227qkfgPlw&X-Amz-Signature=83481b892643dedd0ea487fb322eb59ceb4709396b553c8e3b9d3acf9d3dc692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHJ47RBT%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEyqHPVQtU6jhT%2B6MZoe9cy1rJ4H1tQ0UW9YgjDzpguSAiAxfmH1Y6y%2B%2BM1Xwgf%2FqpzIX0i7if44exVeRJrj9ultbyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRrC%2BPiZvBEfnGIOlKtwDil5hIjyGDPiGdOq6v%2FqtS9iy%2BGuyxmHPjXRjFUk89V%2FBfz%2BTbmsQgITdjcROf7BLkmdH%2BXpVzllTWEn38rrGxfslSyl66dgUuzP1W8U5uWQz%2FRqurgYiuOMjL%2By2QqgZwkAMvg%2Fu4IZYhWtO8WML4k%2FFvEuRLleGlh%2FfKfkTkeqBrMi4rOD1VepmdMjYF5Kn1NYj5dTPZlORsGw09GMb4%2B4wAbZquWq0t0L9mhwRHczMQPJdKvFeT9ngK9nBhLwX00yOJOryInEIlRb3w403LfK2aav82xBwtgPJ%2BXNAVrZP63uWEqKD8tOLb0R7rA4WY%2BJBht6%2FH7UKqJrlRaOtBj8v9iP6fKAbA1o9OlKk%2FjtVlxWUoUXMz31ReJ4k1zn9Q9PYeREiT%2FcufeLOwuqFn1%2F4WOXTE3JcYMFjk05%2F2D%2BeZE4vZEH7rgOZAhKYVjX%2BuxRe1LPQL8lMVvGfZgtgnRiIfbTMwDN3zYWRBlvHb7FIpoHBJab0DiyFGx11L6Yx9e8op6fBxBR%2BzUa3B12KjCac2aeOyqYjmeVQAyuGELYYZclMfWB4zr5Q3VxZiNCVInfMMfNeP4y7kOsIfWCe3WUvWi64Zlkn0nByjeb90TWdjrvVTcHeh2OBS58wrKfXxgY6pgFILDGvaR5wNupFgyvqb8D125pEbhXcUgXcxl7ovAkt1dNa73gew7Gf3wEkafsvGjuZw6RMbTxTl9d521kKBW8qukIRx%2BaOSsvrAvXX9N8lTc%2BTSolwm%2FlaWuTfEc8cFf%2F1eKj1vMQDVLXiGaBx%2B4SR6sRLsfdT2vihZjcr79K8P8MWDK6ke2ZpIePXMu9dTjB8Y0QhD%2BUuNWj%2BVoLxdHT7wUKAId2r&X-Amz-Signature=0f3765c4b27e33ed6a39333d6dfa896f8cac5cef6daecb652dfe08e3fcba3393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF6WAORT%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSIvY6HN%2BFa1uwYG8y5VmZNzHTUgzp0jBcRvp14R8c1QIgSUnDkUQ7dWhK7rLYmBpjyGS2q%2BJgpEQGue%2B9PgdwfSUqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrjeQG8ldRQQCLDXyrcA6MhE4w8%2FEVFOC50hCifBY8JHlpw0vTLqENGOsaAfPTHL9mI%2FYD4J70Y7z0T6QCu%2B0rqHmeZwSoQ8NQpTXeDI7bN1aaAeH3UiqNxwBbG1T7EAmtYqxDDXHSHnmDNtIEzcPKbmeCFEwlnBkSV4oiJ0XLAyjZlIFHcjQzLicJbkT3GR%2BejpeQqgfoIU%2BiSJ%2F86zFXyFdzmTArED69AXkLasPyRsUpRQvjnu2QL37BbftcP2BVZ17uOsxmZcXmaoUarA0OoyTGdITxF3S22NpCKqg10jszzQ0uC60p%2BPn2Ik4gE6JVoeGqlcqeAsIyCTh5vK3xsBZ%2FHCMVPuisTgWSg3fsJL4llGWdy6uSHPM6mvLpiKG%2BDGtnrZJNFfG5L6FXjF7cVBAyEsj%2Fc0Q%2FAWaZmwFMRze8wac8qYoURqS9GYnu%2FYlWlRUDK8IUPoRuHfD2e8uAYec%2BXZv252u639nyzYMbZZOCEb1Gp7suH3g04k8uFxd%2BXUviOJCiniDZWDorZRkMYEAZBpjnZMj4htLdtOtgdpMzfm1fSjDWsfLNOmoYxYC%2FMgifDy%2B3GyBda4FQjl81E%2FR6iDk2zIBREi3cGlPVCqTPzrt%2BS5JbhosrgcgMtEdWEV9Nq%2BiwjYDzLMNjV18YGOqUBaOU8bbZDPz5UDwfDQ2Jgb2IlqqWFlD2Mmqj%2BGnauklxiNsJQdtP45HcD90TZzbwma4KaYalYz%2B25Si%2B5tNjA8mPErimajl%2F4wHKOCinAibrZGP%2FUq%2BTN47ubDKVAJvHEuVDvl3I7YYZ2k%2BZHK1k%2FpEm5oRluvHPA1%2FcEPymWZFb05RltoIo%2ByonwMG0wYcluG9%2FJZdmw%2FVhwvMO9uoCfM4meziWm&X-Amz-Signature=62cffa05ae10a483cb23c43b1cd259f51f5e6c54a1aff11352ff670be19ebfce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2FX5M35%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBYGIUkgVYtduku1QvImUp57W%2FUWN74HZTqKQsjHDJhAIgG61XB38KX3gmOQ6cIBl8Mb4OfguJ60KiwmjX5VGvWOYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJhpGAZzeUAudJONyrcA8z36JcDAtqpDKixSeFYysiXHdxR8gnvtGIrQdLK0K7YXOkMRVjkCEB0ZJmgii14I3KSKd8nokqtDZe5i2zWJjGu6IKsrv%2FJ1qm6r4dwHE26vCtkzPszr9gJjRb6nV2kv03wFCyrVKyfTU5uFQcrrevBuc9rIdQgP7%2F7%2B3t%2F6Tnr1OBqiOv9Udfi2L6tEhizvHRIVKZKj6e4Bt3lx5CJuLxRLBjz8lbylBBzCGYTHH%2Bw%2F2IVbUkQGehZuTinuL2hw710Kz2Ae6GgtMBo%2BrGVloKYDB2R71X5rm%2B1zP9DGDXzSAENUIbCtGmK05r2ylZOUo%2FgnwLG8UPslrA%2FgeyetmX8GfzKa0K%2FosvM19NLVVnMQzs%2F0ypizFONMjqnNVlQ9hW%2F2G1zRMz2jLE9sYWJ1dmLZjhcvF2XAaAvyjq4XTnRAgZzMcd3cetXms6a0LoJtwD9aCDzgBzSPn0x9qzKr8fKZApMC3YM7fvkpO8vNW8iyPpPfJY4BxQqs%2BgN40m%2BjBWCVlv7RQ2ct5UcFIbX8Bgw32CtBHuqkS6roxlo9xxw3V1phMWCb7kdTsfvN5X%2Bm83uqgiP3CyZiqQ6%2BmRMKiWy5uetj%2F0SX0hgFPpyDL2cfN4cv7GrPjf2wP3MMM6n18YGOqUBeQA24BFFCtGgILClHSVI7rH%2F9b%2BDzaBcrOULf%2Ff3uklRmYEv9fqpBLeN3OdUO%2BdqZcNFY8jRCz%2B2mc4ya6n1a4aRuNCwZkZJmoNxCqhRsc%2BpwbpVbRUhN7df0K8JJD%2FgheF0cwf9LSiqmY24f8Y8DotHla0jsPRZvfrlMCKGXnSMv5EVgbfQPhVTz5hqysyXe48v2SdNPKT75MWWnvq1Ubt3qXKw&X-Amz-Signature=ea556fc2e19d27045574748e258b61c11c26f8b152fb6476867af6bb0bfdf064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2FX5M35%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBYGIUkgVYtduku1QvImUp57W%2FUWN74HZTqKQsjHDJhAIgG61XB38KX3gmOQ6cIBl8Mb4OfguJ60KiwmjX5VGvWOYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJhpGAZzeUAudJONyrcA8z36JcDAtqpDKixSeFYysiXHdxR8gnvtGIrQdLK0K7YXOkMRVjkCEB0ZJmgii14I3KSKd8nokqtDZe5i2zWJjGu6IKsrv%2FJ1qm6r4dwHE26vCtkzPszr9gJjRb6nV2kv03wFCyrVKyfTU5uFQcrrevBuc9rIdQgP7%2F7%2B3t%2F6Tnr1OBqiOv9Udfi2L6tEhizvHRIVKZKj6e4Bt3lx5CJuLxRLBjz8lbylBBzCGYTHH%2Bw%2F2IVbUkQGehZuTinuL2hw710Kz2Ae6GgtMBo%2BrGVloKYDB2R71X5rm%2B1zP9DGDXzSAENUIbCtGmK05r2ylZOUo%2FgnwLG8UPslrA%2FgeyetmX8GfzKa0K%2FosvM19NLVVnMQzs%2F0ypizFONMjqnNVlQ9hW%2F2G1zRMz2jLE9sYWJ1dmLZjhcvF2XAaAvyjq4XTnRAgZzMcd3cetXms6a0LoJtwD9aCDzgBzSPn0x9qzKr8fKZApMC3YM7fvkpO8vNW8iyPpPfJY4BxQqs%2BgN40m%2BjBWCVlv7RQ2ct5UcFIbX8Bgw32CtBHuqkS6roxlo9xxw3V1phMWCb7kdTsfvN5X%2Bm83uqgiP3CyZiqQ6%2BmRMKiWy5uetj%2F0SX0hgFPpyDL2cfN4cv7GrPjf2wP3MMM6n18YGOqUBeQA24BFFCtGgILClHSVI7rH%2F9b%2BDzaBcrOULf%2Ff3uklRmYEv9fqpBLeN3OdUO%2BdqZcNFY8jRCz%2B2mc4ya6n1a4aRuNCwZkZJmoNxCqhRsc%2BpwbpVbRUhN7df0K8JJD%2FgheF0cwf9LSiqmY24f8Y8DotHla0jsPRZvfrlMCKGXnSMv5EVgbfQPhVTz5hqysyXe48v2SdNPKT75MWWnvq1Ubt3qXKw&X-Amz-Signature=b89b86e27cf533dbbf6cd94abe2bfee033244d1ba107bbc8bf3ad5e663c566d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HU3YIIG%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHth1FBfl8jKLkU2nY%2Ba%2BPZN8FFR3VS%2FB0RAOmV6uP8NAiB%2FYbdlA2mvnpTplzRHWszhVhK2uqMzT%2BYy4EitCxXVtiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPSccbE8pDCjnwdfWKtwD3lzZBqCyZs8hWXpHx0dc8bW744adnxUeIb8F5yfe5YkYhsm2u%2FZH8OW5WNsunKrkF2OOLjpyl7XU9%2BCazcPhuBolxH9INwqrxu8Yft8pDxngIqSnHLN8K06uoWdfOityUqvVs%2BQ0zlvRIQV0EjeMZSrWVHs%2F7mONKGJyOZQBE8Edg%2FXh%2Bev78ccf26yMVZBkQEEt0pPyWrDQXGz%2BAz8WzkrOuVS4LJGSDAIxfi9jrQEp97UoBXyDNC3ZmZKqcHdlZqfP3O%2B53w31kMONF9FP5S%2F3hUg%2BBcJhfTZVyHTIQd9SKT7eFtXXR4FnmshO%2FB7kFzpnqSrs8NKMcFoK9mMpZb5HVcbQwu5KaIUIXQQ%2B8GLWuKq26jrHWjhFPwDafJOPrSaxiYF9lIZmWF4J4LMJ5kfNUd%2Fdtqvh%2BNwDUXeXVagF34zZvOCOvXY%2F7NzUb6cIiWcjGv5K1YrWuK8ILr3iDqIuFINrS28jrMrDmA9gf7gB6XbSfqdIMPnwFAUypqJmkT6nIQYuSei%2FrWYvTMXjpPWlRcjAKUBv44zwdY7b7ZZYKladdWZFVrvzkwINspSF0GakqXTM8wPJuFyuEHmjlV74Vc4LQ0%2FPTiLs0eIZILCVjmn9OYH73Yx8oJowrtXXxgY6pgGgd282AbBo5ioLzPOAxWjrcimKRavxT8dK6pmnU%2BCNqcdxKbYCGxt2txpZ5Yl7CFqdCopN5Q5psoJDDZofNz1ZMFbr8DoeH0tGr7fFrQsNmEDhHNvkS5nMr0cJR%2FwLJT5yW9QIryHCdeo8yknLPNTBujnbwEQmV1ejw7vcG8vt3BVWIzmczh0H1TlvANtiIsiy2t%2FB0gjIFwTAGjg7NoyjFRgmX0fs&X-Amz-Signature=d54e9cf073a3ab93241b6a6b3c2737154f863a891be10bd7b97a13fc29f8eb82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HU3YIIG%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHth1FBfl8jKLkU2nY%2Ba%2BPZN8FFR3VS%2FB0RAOmV6uP8NAiB%2FYbdlA2mvnpTplzRHWszhVhK2uqMzT%2BYy4EitCxXVtiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPSccbE8pDCjnwdfWKtwD3lzZBqCyZs8hWXpHx0dc8bW744adnxUeIb8F5yfe5YkYhsm2u%2FZH8OW5WNsunKrkF2OOLjpyl7XU9%2BCazcPhuBolxH9INwqrxu8Yft8pDxngIqSnHLN8K06uoWdfOityUqvVs%2BQ0zlvRIQV0EjeMZSrWVHs%2F7mONKGJyOZQBE8Edg%2FXh%2Bev78ccf26yMVZBkQEEt0pPyWrDQXGz%2BAz8WzkrOuVS4LJGSDAIxfi9jrQEp97UoBXyDNC3ZmZKqcHdlZqfP3O%2B53w31kMONF9FP5S%2F3hUg%2BBcJhfTZVyHTIQd9SKT7eFtXXR4FnmshO%2FB7kFzpnqSrs8NKMcFoK9mMpZb5HVcbQwu5KaIUIXQQ%2B8GLWuKq26jrHWjhFPwDafJOPrSaxiYF9lIZmWF4J4LMJ5kfNUd%2Fdtqvh%2BNwDUXeXVagF34zZvOCOvXY%2F7NzUb6cIiWcjGv5K1YrWuK8ILr3iDqIuFINrS28jrMrDmA9gf7gB6XbSfqdIMPnwFAUypqJmkT6nIQYuSei%2FrWYvTMXjpPWlRcjAKUBv44zwdY7b7ZZYKladdWZFVrvzkwINspSF0GakqXTM8wPJuFyuEHmjlV74Vc4LQ0%2FPTiLs0eIZILCVjmn9OYH73Yx8oJowrtXXxgY6pgGgd282AbBo5ioLzPOAxWjrcimKRavxT8dK6pmnU%2BCNqcdxKbYCGxt2txpZ5Yl7CFqdCopN5Q5psoJDDZofNz1ZMFbr8DoeH0tGr7fFrQsNmEDhHNvkS5nMr0cJR%2FwLJT5yW9QIryHCdeo8yknLPNTBujnbwEQmV1ejw7vcG8vt3BVWIzmczh0H1TlvANtiIsiy2t%2FB0gjIFwTAGjg7NoyjFRgmX0fs&X-Amz-Signature=9fb27502a8b84b1d3a75374b5aed1cabc6a9a3ad3c84958ce7dad4c641eb17cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HU3YIIG%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHth1FBfl8jKLkU2nY%2Ba%2BPZN8FFR3VS%2FB0RAOmV6uP8NAiB%2FYbdlA2mvnpTplzRHWszhVhK2uqMzT%2BYy4EitCxXVtiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPSccbE8pDCjnwdfWKtwD3lzZBqCyZs8hWXpHx0dc8bW744adnxUeIb8F5yfe5YkYhsm2u%2FZH8OW5WNsunKrkF2OOLjpyl7XU9%2BCazcPhuBolxH9INwqrxu8Yft8pDxngIqSnHLN8K06uoWdfOityUqvVs%2BQ0zlvRIQV0EjeMZSrWVHs%2F7mONKGJyOZQBE8Edg%2FXh%2Bev78ccf26yMVZBkQEEt0pPyWrDQXGz%2BAz8WzkrOuVS4LJGSDAIxfi9jrQEp97UoBXyDNC3ZmZKqcHdlZqfP3O%2B53w31kMONF9FP5S%2F3hUg%2BBcJhfTZVyHTIQd9SKT7eFtXXR4FnmshO%2FB7kFzpnqSrs8NKMcFoK9mMpZb5HVcbQwu5KaIUIXQQ%2B8GLWuKq26jrHWjhFPwDafJOPrSaxiYF9lIZmWF4J4LMJ5kfNUd%2Fdtqvh%2BNwDUXeXVagF34zZvOCOvXY%2F7NzUb6cIiWcjGv5K1YrWuK8ILr3iDqIuFINrS28jrMrDmA9gf7gB6XbSfqdIMPnwFAUypqJmkT6nIQYuSei%2FrWYvTMXjpPWlRcjAKUBv44zwdY7b7ZZYKladdWZFVrvzkwINspSF0GakqXTM8wPJuFyuEHmjlV74Vc4LQ0%2FPTiLs0eIZILCVjmn9OYH73Yx8oJowrtXXxgY6pgGgd282AbBo5ioLzPOAxWjrcimKRavxT8dK6pmnU%2BCNqcdxKbYCGxt2txpZ5Yl7CFqdCopN5Q5psoJDDZofNz1ZMFbr8DoeH0tGr7fFrQsNmEDhHNvkS5nMr0cJR%2FwLJT5yW9QIryHCdeo8yknLPNTBujnbwEQmV1ejw7vcG8vt3BVWIzmczh0H1TlvANtiIsiy2t%2FB0gjIFwTAGjg7NoyjFRgmX0fs&X-Amz-Signature=18bcbf5625079743a629db4ce0ca60ccb8f7afa29cfda26cd20b2060a58879c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HU3YIIG%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHth1FBfl8jKLkU2nY%2Ba%2BPZN8FFR3VS%2FB0RAOmV6uP8NAiB%2FYbdlA2mvnpTplzRHWszhVhK2uqMzT%2BYy4EitCxXVtiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPSccbE8pDCjnwdfWKtwD3lzZBqCyZs8hWXpHx0dc8bW744adnxUeIb8F5yfe5YkYhsm2u%2FZH8OW5WNsunKrkF2OOLjpyl7XU9%2BCazcPhuBolxH9INwqrxu8Yft8pDxngIqSnHLN8K06uoWdfOityUqvVs%2BQ0zlvRIQV0EjeMZSrWVHs%2F7mONKGJyOZQBE8Edg%2FXh%2Bev78ccf26yMVZBkQEEt0pPyWrDQXGz%2BAz8WzkrOuVS4LJGSDAIxfi9jrQEp97UoBXyDNC3ZmZKqcHdlZqfP3O%2B53w31kMONF9FP5S%2F3hUg%2BBcJhfTZVyHTIQd9SKT7eFtXXR4FnmshO%2FB7kFzpnqSrs8NKMcFoK9mMpZb5HVcbQwu5KaIUIXQQ%2B8GLWuKq26jrHWjhFPwDafJOPrSaxiYF9lIZmWF4J4LMJ5kfNUd%2Fdtqvh%2BNwDUXeXVagF34zZvOCOvXY%2F7NzUb6cIiWcjGv5K1YrWuK8ILr3iDqIuFINrS28jrMrDmA9gf7gB6XbSfqdIMPnwFAUypqJmkT6nIQYuSei%2FrWYvTMXjpPWlRcjAKUBv44zwdY7b7ZZYKladdWZFVrvzkwINspSF0GakqXTM8wPJuFyuEHmjlV74Vc4LQ0%2FPTiLs0eIZILCVjmn9OYH73Yx8oJowrtXXxgY6pgGgd282AbBo5ioLzPOAxWjrcimKRavxT8dK6pmnU%2BCNqcdxKbYCGxt2txpZ5Yl7CFqdCopN5Q5psoJDDZofNz1ZMFbr8DoeH0tGr7fFrQsNmEDhHNvkS5nMr0cJR%2FwLJT5yW9QIryHCdeo8yknLPNTBujnbwEQmV1ejw7vcG8vt3BVWIzmczh0H1TlvANtiIsiy2t%2FB0gjIFwTAGjg7NoyjFRgmX0fs&X-Amz-Signature=4ab500f27328ce6f8cf420e26c3da99d1c0c7a50e4063860cd810020821a47d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4JOQ4IS%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNKAI45fXqULCTIzq5zEgPyY0bhrcf4%2FsOxJLxEFfjgAiA7rCU3UHuTYUlrzI%2BxZr90Mb3Cxw6wx9KpKrtZDRTIMCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdIIOfgOfovvItDZ8KtwDK4h52WYWvyZe7rklASuaHwdkpQdF6i9OjCGp%2ByfjMuw4C2QVIN345q%2Fl2Sz8g%2FZN1wczi7oYLp5yp5pESgVW4zVQHKeAyx8Wh9NeAIpbp68zPQwG9H6%2FBFRJZj0%2BDQwamUtObpFm5zmLVMOlLRvltafsNy57MQ7Q%2B7A%2Fzgwaq%2BciFFBDVxNI4ir6oa8TfvPjNeFOGlxnck%2FpqEu%2F4IDV8DuxA2Qz9umLwqmduAy0MaaXz1xZdj1xR62RHKqvyfq7dDXutzX2ftXBMT3gU9RFRZFBWQMwLNdOZH9BKcMiF0FW3OK9Hg7EyzBUkaZg47LSbGxHwPjgiyMEqn8dZ1tr5JWYI6dvRtmcVXf573xv9tIhyqtHRF2WbH%2BDUdOceUl5eOtvVlIQTbNewIwKQqFCeu8vNRBp1CAGOw1rPHDifruR680XDFkFSBBvdSTr9kbMZfu6aNrYybmMeSJvPtu9H4Swxc00vjpUaNXf8matkwo39puD4RtRuTao83eegilDXwYnXTtDOqLNdlzJzsApaNxkVku1491DmUxaltkZx5%2F%2BXDgMLLS%2B%2B0%2BfdfLgLIvLdABCMoRFBwtXxU%2Fqwgil2ct90CGpDEDu3Cmx%2F6r6%2FFFRTc58JaVcTtYVO%2FMw09XXxgY6pgEFxqVCQOThi0BHxk9lYoNBQI%2FynBXrNODePwSYh8UEECtdBpurVH3L3%2BS%2FWM0XH1mbCULv%2BDrTxwB%2BmVzltmhc9M9oVzNW59nTqKOwuWEIucThsQV2%2BJVqci2bmHHbo6BXB77hU4YWfVsDMH6%2BTpUO%2FUkiAkbJPf23xfr%2Fygv9910lThZGu%2BVMxie8Ik9BJBEpp1ZvJ%2F5XwmL%2FJFyLCVXpCgw2Kjq2&X-Amz-Signature=8b83d0dc401a79c0f2e7f216f950932b9a37940a05d610cb8a5904197b6c9f20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HU3YIIG%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHth1FBfl8jKLkU2nY%2Ba%2BPZN8FFR3VS%2FB0RAOmV6uP8NAiB%2FYbdlA2mvnpTplzRHWszhVhK2uqMzT%2BYy4EitCxXVtiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPSccbE8pDCjnwdfWKtwD3lzZBqCyZs8hWXpHx0dc8bW744adnxUeIb8F5yfe5YkYhsm2u%2FZH8OW5WNsunKrkF2OOLjpyl7XU9%2BCazcPhuBolxH9INwqrxu8Yft8pDxngIqSnHLN8K06uoWdfOityUqvVs%2BQ0zlvRIQV0EjeMZSrWVHs%2F7mONKGJyOZQBE8Edg%2FXh%2Bev78ccf26yMVZBkQEEt0pPyWrDQXGz%2BAz8WzkrOuVS4LJGSDAIxfi9jrQEp97UoBXyDNC3ZmZKqcHdlZqfP3O%2B53w31kMONF9FP5S%2F3hUg%2BBcJhfTZVyHTIQd9SKT7eFtXXR4FnmshO%2FB7kFzpnqSrs8NKMcFoK9mMpZb5HVcbQwu5KaIUIXQQ%2B8GLWuKq26jrHWjhFPwDafJOPrSaxiYF9lIZmWF4J4LMJ5kfNUd%2Fdtqvh%2BNwDUXeXVagF34zZvOCOvXY%2F7NzUb6cIiWcjGv5K1YrWuK8ILr3iDqIuFINrS28jrMrDmA9gf7gB6XbSfqdIMPnwFAUypqJmkT6nIQYuSei%2FrWYvTMXjpPWlRcjAKUBv44zwdY7b7ZZYKladdWZFVrvzkwINspSF0GakqXTM8wPJuFyuEHmjlV74Vc4LQ0%2FPTiLs0eIZILCVjmn9OYH73Yx8oJowrtXXxgY6pgGgd282AbBo5ioLzPOAxWjrcimKRavxT8dK6pmnU%2BCNqcdxKbYCGxt2txpZ5Yl7CFqdCopN5Q5psoJDDZofNz1ZMFbr8DoeH0tGr7fFrQsNmEDhHNvkS5nMr0cJR%2FwLJT5yW9QIryHCdeo8yknLPNTBujnbwEQmV1ejw7vcG8vt3BVWIzmczh0H1TlvANtiIsiy2t%2FB0gjIFwTAGjg7NoyjFRgmX0fs&X-Amz-Signature=84d2b45a00050a899a2905134c7ff876b05ad0d35d2787b9400fb4b1c9e8906d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HU3YIIG%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHth1FBfl8jKLkU2nY%2Ba%2BPZN8FFR3VS%2FB0RAOmV6uP8NAiB%2FYbdlA2mvnpTplzRHWszhVhK2uqMzT%2BYy4EitCxXVtiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPSccbE8pDCjnwdfWKtwD3lzZBqCyZs8hWXpHx0dc8bW744adnxUeIb8F5yfe5YkYhsm2u%2FZH8OW5WNsunKrkF2OOLjpyl7XU9%2BCazcPhuBolxH9INwqrxu8Yft8pDxngIqSnHLN8K06uoWdfOityUqvVs%2BQ0zlvRIQV0EjeMZSrWVHs%2F7mONKGJyOZQBE8Edg%2FXh%2Bev78ccf26yMVZBkQEEt0pPyWrDQXGz%2BAz8WzkrOuVS4LJGSDAIxfi9jrQEp97UoBXyDNC3ZmZKqcHdlZqfP3O%2B53w31kMONF9FP5S%2F3hUg%2BBcJhfTZVyHTIQd9SKT7eFtXXR4FnmshO%2FB7kFzpnqSrs8NKMcFoK9mMpZb5HVcbQwu5KaIUIXQQ%2B8GLWuKq26jrHWjhFPwDafJOPrSaxiYF9lIZmWF4J4LMJ5kfNUd%2Fdtqvh%2BNwDUXeXVagF34zZvOCOvXY%2F7NzUb6cIiWcjGv5K1YrWuK8ILr3iDqIuFINrS28jrMrDmA9gf7gB6XbSfqdIMPnwFAUypqJmkT6nIQYuSei%2FrWYvTMXjpPWlRcjAKUBv44zwdY7b7ZZYKladdWZFVrvzkwINspSF0GakqXTM8wPJuFyuEHmjlV74Vc4LQ0%2FPTiLs0eIZILCVjmn9OYH73Yx8oJowrtXXxgY6pgGgd282AbBo5ioLzPOAxWjrcimKRavxT8dK6pmnU%2BCNqcdxKbYCGxt2txpZ5Yl7CFqdCopN5Q5psoJDDZofNz1ZMFbr8DoeH0tGr7fFrQsNmEDhHNvkS5nMr0cJR%2FwLJT5yW9QIryHCdeo8yknLPNTBujnbwEQmV1ejw7vcG8vt3BVWIzmczh0H1TlvANtiIsiy2t%2FB0gjIFwTAGjg7NoyjFRgmX0fs&X-Amz-Signature=6a89b698bc95498b760ccc4e81a98defaf93608f74e56c832020117263059e2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HU3YIIG%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHth1FBfl8jKLkU2nY%2Ba%2BPZN8FFR3VS%2FB0RAOmV6uP8NAiB%2FYbdlA2mvnpTplzRHWszhVhK2uqMzT%2BYy4EitCxXVtiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPSccbE8pDCjnwdfWKtwD3lzZBqCyZs8hWXpHx0dc8bW744adnxUeIb8F5yfe5YkYhsm2u%2FZH8OW5WNsunKrkF2OOLjpyl7XU9%2BCazcPhuBolxH9INwqrxu8Yft8pDxngIqSnHLN8K06uoWdfOityUqvVs%2BQ0zlvRIQV0EjeMZSrWVHs%2F7mONKGJyOZQBE8Edg%2FXh%2Bev78ccf26yMVZBkQEEt0pPyWrDQXGz%2BAz8WzkrOuVS4LJGSDAIxfi9jrQEp97UoBXyDNC3ZmZKqcHdlZqfP3O%2B53w31kMONF9FP5S%2F3hUg%2BBcJhfTZVyHTIQd9SKT7eFtXXR4FnmshO%2FB7kFzpnqSrs8NKMcFoK9mMpZb5HVcbQwu5KaIUIXQQ%2B8GLWuKq26jrHWjhFPwDafJOPrSaxiYF9lIZmWF4J4LMJ5kfNUd%2Fdtqvh%2BNwDUXeXVagF34zZvOCOvXY%2F7NzUb6cIiWcjGv5K1YrWuK8ILr3iDqIuFINrS28jrMrDmA9gf7gB6XbSfqdIMPnwFAUypqJmkT6nIQYuSei%2FrWYvTMXjpPWlRcjAKUBv44zwdY7b7ZZYKladdWZFVrvzkwINspSF0GakqXTM8wPJuFyuEHmjlV74Vc4LQ0%2FPTiLs0eIZILCVjmn9OYH73Yx8oJowrtXXxgY6pgGgd282AbBo5ioLzPOAxWjrcimKRavxT8dK6pmnU%2BCNqcdxKbYCGxt2txpZ5Yl7CFqdCopN5Q5psoJDDZofNz1ZMFbr8DoeH0tGr7fFrQsNmEDhHNvkS5nMr0cJR%2FwLJT5yW9QIryHCdeo8yknLPNTBujnbwEQmV1ejw7vcG8vt3BVWIzmczh0H1TlvANtiIsiy2t%2FB0gjIFwTAGjg7NoyjFRgmX0fs&X-Amz-Signature=18bcbf5625079743a629db4ce0ca60ccb8f7afa29cfda26cd20b2060a58879c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HU3YIIG%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHth1FBfl8jKLkU2nY%2Ba%2BPZN8FFR3VS%2FB0RAOmV6uP8NAiB%2FYbdlA2mvnpTplzRHWszhVhK2uqMzT%2BYy4EitCxXVtiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPSccbE8pDCjnwdfWKtwD3lzZBqCyZs8hWXpHx0dc8bW744adnxUeIb8F5yfe5YkYhsm2u%2FZH8OW5WNsunKrkF2OOLjpyl7XU9%2BCazcPhuBolxH9INwqrxu8Yft8pDxngIqSnHLN8K06uoWdfOityUqvVs%2BQ0zlvRIQV0EjeMZSrWVHs%2F7mONKGJyOZQBE8Edg%2FXh%2Bev78ccf26yMVZBkQEEt0pPyWrDQXGz%2BAz8WzkrOuVS4LJGSDAIxfi9jrQEp97UoBXyDNC3ZmZKqcHdlZqfP3O%2B53w31kMONF9FP5S%2F3hUg%2BBcJhfTZVyHTIQd9SKT7eFtXXR4FnmshO%2FB7kFzpnqSrs8NKMcFoK9mMpZb5HVcbQwu5KaIUIXQQ%2B8GLWuKq26jrHWjhFPwDafJOPrSaxiYF9lIZmWF4J4LMJ5kfNUd%2Fdtqvh%2BNwDUXeXVagF34zZvOCOvXY%2F7NzUb6cIiWcjGv5K1YrWuK8ILr3iDqIuFINrS28jrMrDmA9gf7gB6XbSfqdIMPnwFAUypqJmkT6nIQYuSei%2FrWYvTMXjpPWlRcjAKUBv44zwdY7b7ZZYKladdWZFVrvzkwINspSF0GakqXTM8wPJuFyuEHmjlV74Vc4LQ0%2FPTiLs0eIZILCVjmn9OYH73Yx8oJowrtXXxgY6pgGgd282AbBo5ioLzPOAxWjrcimKRavxT8dK6pmnU%2BCNqcdxKbYCGxt2txpZ5Yl7CFqdCopN5Q5psoJDDZofNz1ZMFbr8DoeH0tGr7fFrQsNmEDhHNvkS5nMr0cJR%2FwLJT5yW9QIryHCdeo8yknLPNTBujnbwEQmV1ejw7vcG8vt3BVWIzmczh0H1TlvANtiIsiy2t%2FB0gjIFwTAGjg7NoyjFRgmX0fs&X-Amz-Signature=b289ad3dee40df4d21580489de3c8a1bf540a6e28ba64b92d7edc0cdaf3a06e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HU3YIIG%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHth1FBfl8jKLkU2nY%2Ba%2BPZN8FFR3VS%2FB0RAOmV6uP8NAiB%2FYbdlA2mvnpTplzRHWszhVhK2uqMzT%2BYy4EitCxXVtiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPSccbE8pDCjnwdfWKtwD3lzZBqCyZs8hWXpHx0dc8bW744adnxUeIb8F5yfe5YkYhsm2u%2FZH8OW5WNsunKrkF2OOLjpyl7XU9%2BCazcPhuBolxH9INwqrxu8Yft8pDxngIqSnHLN8K06uoWdfOityUqvVs%2BQ0zlvRIQV0EjeMZSrWVHs%2F7mONKGJyOZQBE8Edg%2FXh%2Bev78ccf26yMVZBkQEEt0pPyWrDQXGz%2BAz8WzkrOuVS4LJGSDAIxfi9jrQEp97UoBXyDNC3ZmZKqcHdlZqfP3O%2B53w31kMONF9FP5S%2F3hUg%2BBcJhfTZVyHTIQd9SKT7eFtXXR4FnmshO%2FB7kFzpnqSrs8NKMcFoK9mMpZb5HVcbQwu5KaIUIXQQ%2B8GLWuKq26jrHWjhFPwDafJOPrSaxiYF9lIZmWF4J4LMJ5kfNUd%2Fdtqvh%2BNwDUXeXVagF34zZvOCOvXY%2F7NzUb6cIiWcjGv5K1YrWuK8ILr3iDqIuFINrS28jrMrDmA9gf7gB6XbSfqdIMPnwFAUypqJmkT6nIQYuSei%2FrWYvTMXjpPWlRcjAKUBv44zwdY7b7ZZYKladdWZFVrvzkwINspSF0GakqXTM8wPJuFyuEHmjlV74Vc4LQ0%2FPTiLs0eIZILCVjmn9OYH73Yx8oJowrtXXxgY6pgGgd282AbBo5ioLzPOAxWjrcimKRavxT8dK6pmnU%2BCNqcdxKbYCGxt2txpZ5Yl7CFqdCopN5Q5psoJDDZofNz1ZMFbr8DoeH0tGr7fFrQsNmEDhHNvkS5nMr0cJR%2FwLJT5yW9QIryHCdeo8yknLPNTBujnbwEQmV1ejw7vcG8vt3BVWIzmczh0H1TlvANtiIsiy2t%2FB0gjIFwTAGjg7NoyjFRgmX0fs&X-Amz-Signature=ad0215e3d92987c43993a36c1764c2d0135fd52b15356ae60e291ddf8fa868c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HU3YIIG%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHth1FBfl8jKLkU2nY%2Ba%2BPZN8FFR3VS%2FB0RAOmV6uP8NAiB%2FYbdlA2mvnpTplzRHWszhVhK2uqMzT%2BYy4EitCxXVtiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPSccbE8pDCjnwdfWKtwD3lzZBqCyZs8hWXpHx0dc8bW744adnxUeIb8F5yfe5YkYhsm2u%2FZH8OW5WNsunKrkF2OOLjpyl7XU9%2BCazcPhuBolxH9INwqrxu8Yft8pDxngIqSnHLN8K06uoWdfOityUqvVs%2BQ0zlvRIQV0EjeMZSrWVHs%2F7mONKGJyOZQBE8Edg%2FXh%2Bev78ccf26yMVZBkQEEt0pPyWrDQXGz%2BAz8WzkrOuVS4LJGSDAIxfi9jrQEp97UoBXyDNC3ZmZKqcHdlZqfP3O%2B53w31kMONF9FP5S%2F3hUg%2BBcJhfTZVyHTIQd9SKT7eFtXXR4FnmshO%2FB7kFzpnqSrs8NKMcFoK9mMpZb5HVcbQwu5KaIUIXQQ%2B8GLWuKq26jrHWjhFPwDafJOPrSaxiYF9lIZmWF4J4LMJ5kfNUd%2Fdtqvh%2BNwDUXeXVagF34zZvOCOvXY%2F7NzUb6cIiWcjGv5K1YrWuK8ILr3iDqIuFINrS28jrMrDmA9gf7gB6XbSfqdIMPnwFAUypqJmkT6nIQYuSei%2FrWYvTMXjpPWlRcjAKUBv44zwdY7b7ZZYKladdWZFVrvzkwINspSF0GakqXTM8wPJuFyuEHmjlV74Vc4LQ0%2FPTiLs0eIZILCVjmn9OYH73Yx8oJowrtXXxgY6pgGgd282AbBo5ioLzPOAxWjrcimKRavxT8dK6pmnU%2BCNqcdxKbYCGxt2txpZ5Yl7CFqdCopN5Q5psoJDDZofNz1ZMFbr8DoeH0tGr7fFrQsNmEDhHNvkS5nMr0cJR%2FwLJT5yW9QIryHCdeo8yknLPNTBujnbwEQmV1ejw7vcG8vt3BVWIzmczh0H1TlvANtiIsiy2t%2FB0gjIFwTAGjg7NoyjFRgmX0fs&X-Amz-Signature=8ed5b9df50f176154aa1efcd1b9990210d2c153a8e4e5c152ac1d806c217c4fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


