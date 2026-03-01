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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IW6IE3D%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJzEBMWgPdpTzTlrncYpmL0QZvacKO8dgvxCDl7psCeAiB2vrdR5euilCvGcNVZxQGoP7%2Ft8DEESb7BEexjQJahKir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM6c8uXxeU6eg3ik8YKtwD52psVFPvJLYffIXLBIPyAyxagKDgKvetY1myTHn5v6HdQvkbzTCrFCeUyEarzfhayf%2FGhSixzLBrrBa66Ltwst0uo1hNQEGaMTibaHMD57GUvphCIaZ5Tt4QC6Iq%2B85PT0f7N7oY2lHdIQdIjOhYsCcYVTpIpRWHfZHK6kfmHVJxdf0gUYqNK1qVrq3%2Bk2cUEizTIT%2BX5TaPKrZrUb1aZcVPjlOBmisoZkyD00xNLrrwt8WfPzL0bDzFZPNmMdmdNejd%2Bf8RiNOWI0lsi8Q2%2FQBlDKYIDWEMIZehHTYgdE0rh3sdjoHwwd1XcYdpPNVeEON1RIIDW0nMFmLTrwia00zqAchsi9%2FkOTYaFyl7fyAz6quE1NAcQz2zT59aw6xOv7AHNn0kcAzj80GlRT9oMMIHUBNpwv082jsuZz7Xi9Em7sz76GtOJKawaLJEXR9O2rCkzec83RWZ%2FkCsF4ZqkASzYxfwXjyKbGIjy5SNE3Y8LwJOIWs9T%2FDaVBfb30c1LbuUnzj7j8JE1m596plHnGpkg%2FnHdd%2FD3BK8Z1FjzeqvMdxOo7WwUrU0nh1mKFkPRNe1qjZ%2FfZuBeD8nHPNY8sW4GnWRKlVHIsb8rf%2BTiABQPBCiGIJcmNN%2BrWUwwa6OzQY6pgFnMzZDnY3feVSVRlJ%2BRJEb4b6sIqi9rj493IM%2BWC8IlCvtMrQrM%2FRqsxazNyt%2Bh%2Fk7jsnakBL1BjammePxJn8Mw3WMv24GTYS5M%2Bqx41boUFDpaTcv9nGbvijF2hLf4SNRM7JilyuMHXQswP03QdUCimSxjgTsbXQzHvVyWQaWs6ffYyjuUSvRvkX3oypO9DIsGiavP7A4vlF86rBXlCntPZNOvbzG&X-Amz-Signature=eeae445a4f6e4ec6f0bd644abd3ed4878db4dcd3c76e9535c6a06f68209c959a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IW6IE3D%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJzEBMWgPdpTzTlrncYpmL0QZvacKO8dgvxCDl7psCeAiB2vrdR5euilCvGcNVZxQGoP7%2Ft8DEESb7BEexjQJahKir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM6c8uXxeU6eg3ik8YKtwD52psVFPvJLYffIXLBIPyAyxagKDgKvetY1myTHn5v6HdQvkbzTCrFCeUyEarzfhayf%2FGhSixzLBrrBa66Ltwst0uo1hNQEGaMTibaHMD57GUvphCIaZ5Tt4QC6Iq%2B85PT0f7N7oY2lHdIQdIjOhYsCcYVTpIpRWHfZHK6kfmHVJxdf0gUYqNK1qVrq3%2Bk2cUEizTIT%2BX5TaPKrZrUb1aZcVPjlOBmisoZkyD00xNLrrwt8WfPzL0bDzFZPNmMdmdNejd%2Bf8RiNOWI0lsi8Q2%2FQBlDKYIDWEMIZehHTYgdE0rh3sdjoHwwd1XcYdpPNVeEON1RIIDW0nMFmLTrwia00zqAchsi9%2FkOTYaFyl7fyAz6quE1NAcQz2zT59aw6xOv7AHNn0kcAzj80GlRT9oMMIHUBNpwv082jsuZz7Xi9Em7sz76GtOJKawaLJEXR9O2rCkzec83RWZ%2FkCsF4ZqkASzYxfwXjyKbGIjy5SNE3Y8LwJOIWs9T%2FDaVBfb30c1LbuUnzj7j8JE1m596plHnGpkg%2FnHdd%2FD3BK8Z1FjzeqvMdxOo7WwUrU0nh1mKFkPRNe1qjZ%2FfZuBeD8nHPNY8sW4GnWRKlVHIsb8rf%2BTiABQPBCiGIJcmNN%2BrWUwwa6OzQY6pgFnMzZDnY3feVSVRlJ%2BRJEb4b6sIqi9rj493IM%2BWC8IlCvtMrQrM%2FRqsxazNyt%2Bh%2Fk7jsnakBL1BjammePxJn8Mw3WMv24GTYS5M%2Bqx41boUFDpaTcv9nGbvijF2hLf4SNRM7JilyuMHXQswP03QdUCimSxjgTsbXQzHvVyWQaWs6ffYyjuUSvRvkX3oypO9DIsGiavP7A4vlF86rBXlCntPZNOvbzG&X-Amz-Signature=1db07e53d08e8d01b5d66fcfc1823dc8e233ace88ca96aa25bf34e2d53e5dd1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IW6IE3D%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJzEBMWgPdpTzTlrncYpmL0QZvacKO8dgvxCDl7psCeAiB2vrdR5euilCvGcNVZxQGoP7%2Ft8DEESb7BEexjQJahKir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM6c8uXxeU6eg3ik8YKtwD52psVFPvJLYffIXLBIPyAyxagKDgKvetY1myTHn5v6HdQvkbzTCrFCeUyEarzfhayf%2FGhSixzLBrrBa66Ltwst0uo1hNQEGaMTibaHMD57GUvphCIaZ5Tt4QC6Iq%2B85PT0f7N7oY2lHdIQdIjOhYsCcYVTpIpRWHfZHK6kfmHVJxdf0gUYqNK1qVrq3%2Bk2cUEizTIT%2BX5TaPKrZrUb1aZcVPjlOBmisoZkyD00xNLrrwt8WfPzL0bDzFZPNmMdmdNejd%2Bf8RiNOWI0lsi8Q2%2FQBlDKYIDWEMIZehHTYgdE0rh3sdjoHwwd1XcYdpPNVeEON1RIIDW0nMFmLTrwia00zqAchsi9%2FkOTYaFyl7fyAz6quE1NAcQz2zT59aw6xOv7AHNn0kcAzj80GlRT9oMMIHUBNpwv082jsuZz7Xi9Em7sz76GtOJKawaLJEXR9O2rCkzec83RWZ%2FkCsF4ZqkASzYxfwXjyKbGIjy5SNE3Y8LwJOIWs9T%2FDaVBfb30c1LbuUnzj7j8JE1m596plHnGpkg%2FnHdd%2FD3BK8Z1FjzeqvMdxOo7WwUrU0nh1mKFkPRNe1qjZ%2FfZuBeD8nHPNY8sW4GnWRKlVHIsb8rf%2BTiABQPBCiGIJcmNN%2BrWUwwa6OzQY6pgFnMzZDnY3feVSVRlJ%2BRJEb4b6sIqi9rj493IM%2BWC8IlCvtMrQrM%2FRqsxazNyt%2Bh%2Fk7jsnakBL1BjammePxJn8Mw3WMv24GTYS5M%2Bqx41boUFDpaTcv9nGbvijF2hLf4SNRM7JilyuMHXQswP03QdUCimSxjgTsbXQzHvVyWQaWs6ffYyjuUSvRvkX3oypO9DIsGiavP7A4vlF86rBXlCntPZNOvbzG&X-Amz-Signature=2be006f9c8a45944f5e47fae9c13ec42d3659b1f5e5222d3d5edb6f348f301f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IW6IE3D%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJzEBMWgPdpTzTlrncYpmL0QZvacKO8dgvxCDl7psCeAiB2vrdR5euilCvGcNVZxQGoP7%2Ft8DEESb7BEexjQJahKir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM6c8uXxeU6eg3ik8YKtwD52psVFPvJLYffIXLBIPyAyxagKDgKvetY1myTHn5v6HdQvkbzTCrFCeUyEarzfhayf%2FGhSixzLBrrBa66Ltwst0uo1hNQEGaMTibaHMD57GUvphCIaZ5Tt4QC6Iq%2B85PT0f7N7oY2lHdIQdIjOhYsCcYVTpIpRWHfZHK6kfmHVJxdf0gUYqNK1qVrq3%2Bk2cUEizTIT%2BX5TaPKrZrUb1aZcVPjlOBmisoZkyD00xNLrrwt8WfPzL0bDzFZPNmMdmdNejd%2Bf8RiNOWI0lsi8Q2%2FQBlDKYIDWEMIZehHTYgdE0rh3sdjoHwwd1XcYdpPNVeEON1RIIDW0nMFmLTrwia00zqAchsi9%2FkOTYaFyl7fyAz6quE1NAcQz2zT59aw6xOv7AHNn0kcAzj80GlRT9oMMIHUBNpwv082jsuZz7Xi9Em7sz76GtOJKawaLJEXR9O2rCkzec83RWZ%2FkCsF4ZqkASzYxfwXjyKbGIjy5SNE3Y8LwJOIWs9T%2FDaVBfb30c1LbuUnzj7j8JE1m596plHnGpkg%2FnHdd%2FD3BK8Z1FjzeqvMdxOo7WwUrU0nh1mKFkPRNe1qjZ%2FfZuBeD8nHPNY8sW4GnWRKlVHIsb8rf%2BTiABQPBCiGIJcmNN%2BrWUwwa6OzQY6pgFnMzZDnY3feVSVRlJ%2BRJEb4b6sIqi9rj493IM%2BWC8IlCvtMrQrM%2FRqsxazNyt%2Bh%2Fk7jsnakBL1BjammePxJn8Mw3WMv24GTYS5M%2Bqx41boUFDpaTcv9nGbvijF2hLf4SNRM7JilyuMHXQswP03QdUCimSxjgTsbXQzHvVyWQaWs6ffYyjuUSvRvkX3oypO9DIsGiavP7A4vlF86rBXlCntPZNOvbzG&X-Amz-Signature=200c17460fb0089a4bd42394234e11b4e7e345984f9c12a78706ae44d44d8502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IW6IE3D%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJzEBMWgPdpTzTlrncYpmL0QZvacKO8dgvxCDl7psCeAiB2vrdR5euilCvGcNVZxQGoP7%2Ft8DEESb7BEexjQJahKir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM6c8uXxeU6eg3ik8YKtwD52psVFPvJLYffIXLBIPyAyxagKDgKvetY1myTHn5v6HdQvkbzTCrFCeUyEarzfhayf%2FGhSixzLBrrBa66Ltwst0uo1hNQEGaMTibaHMD57GUvphCIaZ5Tt4QC6Iq%2B85PT0f7N7oY2lHdIQdIjOhYsCcYVTpIpRWHfZHK6kfmHVJxdf0gUYqNK1qVrq3%2Bk2cUEizTIT%2BX5TaPKrZrUb1aZcVPjlOBmisoZkyD00xNLrrwt8WfPzL0bDzFZPNmMdmdNejd%2Bf8RiNOWI0lsi8Q2%2FQBlDKYIDWEMIZehHTYgdE0rh3sdjoHwwd1XcYdpPNVeEON1RIIDW0nMFmLTrwia00zqAchsi9%2FkOTYaFyl7fyAz6quE1NAcQz2zT59aw6xOv7AHNn0kcAzj80GlRT9oMMIHUBNpwv082jsuZz7Xi9Em7sz76GtOJKawaLJEXR9O2rCkzec83RWZ%2FkCsF4ZqkASzYxfwXjyKbGIjy5SNE3Y8LwJOIWs9T%2FDaVBfb30c1LbuUnzj7j8JE1m596plHnGpkg%2FnHdd%2FD3BK8Z1FjzeqvMdxOo7WwUrU0nh1mKFkPRNe1qjZ%2FfZuBeD8nHPNY8sW4GnWRKlVHIsb8rf%2BTiABQPBCiGIJcmNN%2BrWUwwa6OzQY6pgFnMzZDnY3feVSVRlJ%2BRJEb4b6sIqi9rj493IM%2BWC8IlCvtMrQrM%2FRqsxazNyt%2Bh%2Fk7jsnakBL1BjammePxJn8Mw3WMv24GTYS5M%2Bqx41boUFDpaTcv9nGbvijF2hLf4SNRM7JilyuMHXQswP03QdUCimSxjgTsbXQzHvVyWQaWs6ffYyjuUSvRvkX3oypO9DIsGiavP7A4vlF86rBXlCntPZNOvbzG&X-Amz-Signature=242ea4156a3a682101289e8a47f719dcb4523616c15ee56dd521ea20907a664d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IW6IE3D%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJzEBMWgPdpTzTlrncYpmL0QZvacKO8dgvxCDl7psCeAiB2vrdR5euilCvGcNVZxQGoP7%2Ft8DEESb7BEexjQJahKir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM6c8uXxeU6eg3ik8YKtwD52psVFPvJLYffIXLBIPyAyxagKDgKvetY1myTHn5v6HdQvkbzTCrFCeUyEarzfhayf%2FGhSixzLBrrBa66Ltwst0uo1hNQEGaMTibaHMD57GUvphCIaZ5Tt4QC6Iq%2B85PT0f7N7oY2lHdIQdIjOhYsCcYVTpIpRWHfZHK6kfmHVJxdf0gUYqNK1qVrq3%2Bk2cUEizTIT%2BX5TaPKrZrUb1aZcVPjlOBmisoZkyD00xNLrrwt8WfPzL0bDzFZPNmMdmdNejd%2Bf8RiNOWI0lsi8Q2%2FQBlDKYIDWEMIZehHTYgdE0rh3sdjoHwwd1XcYdpPNVeEON1RIIDW0nMFmLTrwia00zqAchsi9%2FkOTYaFyl7fyAz6quE1NAcQz2zT59aw6xOv7AHNn0kcAzj80GlRT9oMMIHUBNpwv082jsuZz7Xi9Em7sz76GtOJKawaLJEXR9O2rCkzec83RWZ%2FkCsF4ZqkASzYxfwXjyKbGIjy5SNE3Y8LwJOIWs9T%2FDaVBfb30c1LbuUnzj7j8JE1m596plHnGpkg%2FnHdd%2FD3BK8Z1FjzeqvMdxOo7WwUrU0nh1mKFkPRNe1qjZ%2FfZuBeD8nHPNY8sW4GnWRKlVHIsb8rf%2BTiABQPBCiGIJcmNN%2BrWUwwa6OzQY6pgFnMzZDnY3feVSVRlJ%2BRJEb4b6sIqi9rj493IM%2BWC8IlCvtMrQrM%2FRqsxazNyt%2Bh%2Fk7jsnakBL1BjammePxJn8Mw3WMv24GTYS5M%2Bqx41boUFDpaTcv9nGbvijF2hLf4SNRM7JilyuMHXQswP03QdUCimSxjgTsbXQzHvVyWQaWs6ffYyjuUSvRvkX3oypO9DIsGiavP7A4vlF86rBXlCntPZNOvbzG&X-Amz-Signature=b8e41b070dedbe9c53a4f710f32232239e48bc703e5eba4479bb62be80646c3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IW6IE3D%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJzEBMWgPdpTzTlrncYpmL0QZvacKO8dgvxCDl7psCeAiB2vrdR5euilCvGcNVZxQGoP7%2Ft8DEESb7BEexjQJahKir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM6c8uXxeU6eg3ik8YKtwD52psVFPvJLYffIXLBIPyAyxagKDgKvetY1myTHn5v6HdQvkbzTCrFCeUyEarzfhayf%2FGhSixzLBrrBa66Ltwst0uo1hNQEGaMTibaHMD57GUvphCIaZ5Tt4QC6Iq%2B85PT0f7N7oY2lHdIQdIjOhYsCcYVTpIpRWHfZHK6kfmHVJxdf0gUYqNK1qVrq3%2Bk2cUEizTIT%2BX5TaPKrZrUb1aZcVPjlOBmisoZkyD00xNLrrwt8WfPzL0bDzFZPNmMdmdNejd%2Bf8RiNOWI0lsi8Q2%2FQBlDKYIDWEMIZehHTYgdE0rh3sdjoHwwd1XcYdpPNVeEON1RIIDW0nMFmLTrwia00zqAchsi9%2FkOTYaFyl7fyAz6quE1NAcQz2zT59aw6xOv7AHNn0kcAzj80GlRT9oMMIHUBNpwv082jsuZz7Xi9Em7sz76GtOJKawaLJEXR9O2rCkzec83RWZ%2FkCsF4ZqkASzYxfwXjyKbGIjy5SNE3Y8LwJOIWs9T%2FDaVBfb30c1LbuUnzj7j8JE1m596plHnGpkg%2FnHdd%2FD3BK8Z1FjzeqvMdxOo7WwUrU0nh1mKFkPRNe1qjZ%2FfZuBeD8nHPNY8sW4GnWRKlVHIsb8rf%2BTiABQPBCiGIJcmNN%2BrWUwwa6OzQY6pgFnMzZDnY3feVSVRlJ%2BRJEb4b6sIqi9rj493IM%2BWC8IlCvtMrQrM%2FRqsxazNyt%2Bh%2Fk7jsnakBL1BjammePxJn8Mw3WMv24GTYS5M%2Bqx41boUFDpaTcv9nGbvijF2hLf4SNRM7JilyuMHXQswP03QdUCimSxjgTsbXQzHvVyWQaWs6ffYyjuUSvRvkX3oypO9DIsGiavP7A4vlF86rBXlCntPZNOvbzG&X-Amz-Signature=752f7093eef390b941877cf432fcd5574aafda5621e0481aa5e3e1d5179cb0a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IW6IE3D%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJzEBMWgPdpTzTlrncYpmL0QZvacKO8dgvxCDl7psCeAiB2vrdR5euilCvGcNVZxQGoP7%2Ft8DEESb7BEexjQJahKir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM6c8uXxeU6eg3ik8YKtwD52psVFPvJLYffIXLBIPyAyxagKDgKvetY1myTHn5v6HdQvkbzTCrFCeUyEarzfhayf%2FGhSixzLBrrBa66Ltwst0uo1hNQEGaMTibaHMD57GUvphCIaZ5Tt4QC6Iq%2B85PT0f7N7oY2lHdIQdIjOhYsCcYVTpIpRWHfZHK6kfmHVJxdf0gUYqNK1qVrq3%2Bk2cUEizTIT%2BX5TaPKrZrUb1aZcVPjlOBmisoZkyD00xNLrrwt8WfPzL0bDzFZPNmMdmdNejd%2Bf8RiNOWI0lsi8Q2%2FQBlDKYIDWEMIZehHTYgdE0rh3sdjoHwwd1XcYdpPNVeEON1RIIDW0nMFmLTrwia00zqAchsi9%2FkOTYaFyl7fyAz6quE1NAcQz2zT59aw6xOv7AHNn0kcAzj80GlRT9oMMIHUBNpwv082jsuZz7Xi9Em7sz76GtOJKawaLJEXR9O2rCkzec83RWZ%2FkCsF4ZqkASzYxfwXjyKbGIjy5SNE3Y8LwJOIWs9T%2FDaVBfb30c1LbuUnzj7j8JE1m596plHnGpkg%2FnHdd%2FD3BK8Z1FjzeqvMdxOo7WwUrU0nh1mKFkPRNe1qjZ%2FfZuBeD8nHPNY8sW4GnWRKlVHIsb8rf%2BTiABQPBCiGIJcmNN%2BrWUwwa6OzQY6pgFnMzZDnY3feVSVRlJ%2BRJEb4b6sIqi9rj493IM%2BWC8IlCvtMrQrM%2FRqsxazNyt%2Bh%2Fk7jsnakBL1BjammePxJn8Mw3WMv24GTYS5M%2Bqx41boUFDpaTcv9nGbvijF2hLf4SNRM7JilyuMHXQswP03QdUCimSxjgTsbXQzHvVyWQaWs6ffYyjuUSvRvkX3oypO9DIsGiavP7A4vlF86rBXlCntPZNOvbzG&X-Amz-Signature=234f5b21ba4884829e51c74f9aba6595d3d49327bf3c32c983e853130b189d31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IW6IE3D%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJzEBMWgPdpTzTlrncYpmL0QZvacKO8dgvxCDl7psCeAiB2vrdR5euilCvGcNVZxQGoP7%2Ft8DEESb7BEexjQJahKir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM6c8uXxeU6eg3ik8YKtwD52psVFPvJLYffIXLBIPyAyxagKDgKvetY1myTHn5v6HdQvkbzTCrFCeUyEarzfhayf%2FGhSixzLBrrBa66Ltwst0uo1hNQEGaMTibaHMD57GUvphCIaZ5Tt4QC6Iq%2B85PT0f7N7oY2lHdIQdIjOhYsCcYVTpIpRWHfZHK6kfmHVJxdf0gUYqNK1qVrq3%2Bk2cUEizTIT%2BX5TaPKrZrUb1aZcVPjlOBmisoZkyD00xNLrrwt8WfPzL0bDzFZPNmMdmdNejd%2Bf8RiNOWI0lsi8Q2%2FQBlDKYIDWEMIZehHTYgdE0rh3sdjoHwwd1XcYdpPNVeEON1RIIDW0nMFmLTrwia00zqAchsi9%2FkOTYaFyl7fyAz6quE1NAcQz2zT59aw6xOv7AHNn0kcAzj80GlRT9oMMIHUBNpwv082jsuZz7Xi9Em7sz76GtOJKawaLJEXR9O2rCkzec83RWZ%2FkCsF4ZqkASzYxfwXjyKbGIjy5SNE3Y8LwJOIWs9T%2FDaVBfb30c1LbuUnzj7j8JE1m596plHnGpkg%2FnHdd%2FD3BK8Z1FjzeqvMdxOo7WwUrU0nh1mKFkPRNe1qjZ%2FfZuBeD8nHPNY8sW4GnWRKlVHIsb8rf%2BTiABQPBCiGIJcmNN%2BrWUwwa6OzQY6pgFnMzZDnY3feVSVRlJ%2BRJEb4b6sIqi9rj493IM%2BWC8IlCvtMrQrM%2FRqsxazNyt%2Bh%2Fk7jsnakBL1BjammePxJn8Mw3WMv24GTYS5M%2Bqx41boUFDpaTcv9nGbvijF2hLf4SNRM7JilyuMHXQswP03QdUCimSxjgTsbXQzHvVyWQaWs6ffYyjuUSvRvkX3oypO9DIsGiavP7A4vlF86rBXlCntPZNOvbzG&X-Amz-Signature=c7cb97ca1466a6eba0a6ce69226580702bcabecaf56515d559a2211256f4098b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IW6IE3D%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJzEBMWgPdpTzTlrncYpmL0QZvacKO8dgvxCDl7psCeAiB2vrdR5euilCvGcNVZxQGoP7%2Ft8DEESb7BEexjQJahKir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM6c8uXxeU6eg3ik8YKtwD52psVFPvJLYffIXLBIPyAyxagKDgKvetY1myTHn5v6HdQvkbzTCrFCeUyEarzfhayf%2FGhSixzLBrrBa66Ltwst0uo1hNQEGaMTibaHMD57GUvphCIaZ5Tt4QC6Iq%2B85PT0f7N7oY2lHdIQdIjOhYsCcYVTpIpRWHfZHK6kfmHVJxdf0gUYqNK1qVrq3%2Bk2cUEizTIT%2BX5TaPKrZrUb1aZcVPjlOBmisoZkyD00xNLrrwt8WfPzL0bDzFZPNmMdmdNejd%2Bf8RiNOWI0lsi8Q2%2FQBlDKYIDWEMIZehHTYgdE0rh3sdjoHwwd1XcYdpPNVeEON1RIIDW0nMFmLTrwia00zqAchsi9%2FkOTYaFyl7fyAz6quE1NAcQz2zT59aw6xOv7AHNn0kcAzj80GlRT9oMMIHUBNpwv082jsuZz7Xi9Em7sz76GtOJKawaLJEXR9O2rCkzec83RWZ%2FkCsF4ZqkASzYxfwXjyKbGIjy5SNE3Y8LwJOIWs9T%2FDaVBfb30c1LbuUnzj7j8JE1m596plHnGpkg%2FnHdd%2FD3BK8Z1FjzeqvMdxOo7WwUrU0nh1mKFkPRNe1qjZ%2FfZuBeD8nHPNY8sW4GnWRKlVHIsb8rf%2BTiABQPBCiGIJcmNN%2BrWUwwa6OzQY6pgFnMzZDnY3feVSVRlJ%2BRJEb4b6sIqi9rj493IM%2BWC8IlCvtMrQrM%2FRqsxazNyt%2Bh%2Fk7jsnakBL1BjammePxJn8Mw3WMv24GTYS5M%2Bqx41boUFDpaTcv9nGbvijF2hLf4SNRM7JilyuMHXQswP03QdUCimSxjgTsbXQzHvVyWQaWs6ffYyjuUSvRvkX3oypO9DIsGiavP7A4vlF86rBXlCntPZNOvbzG&X-Amz-Signature=28a02dce793f2596987f91100a22a02e14b34a4335c177432538146f294dff6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BHS72KM%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkPUIBAWe8NFqisukEJoZadz2OVLj0fNUbAiTdmqbKEAiEAzf%2FJ0GP0KkjOxQAi8PBLqtsKYlw0c61Thokjp4KI5lkq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLW7rT3UDlrBOQ%2BSoSrcA0uO1LhEI7nSBDf5zg1jTgDhYjqCMPQvceNqqhF0Pj5NMC6zhYv1Npejh%2FQT9QPkdFnnwDgF6skTLOrNYswyYNBOeuDu1c9eto1ig9MIjGthDosR2VwnZejDAptGGaXANA5KNlE%2BO16mswWeobYFlWxEoe3wnGlr6XzdcNxATqdIF5vy4Q0pWzJkI5DZxINf%2FFvN90Cc3Kl4uhPki01CBsiVTWnyvMQzqpn6M3rOusTQZBpC0RA%2FJ%2B%2FQecot%2F8oJwgCozRnxMKMa2VWXlSfn5IJpYt%2B7MMRtKLIv%2FPuZmzihR5UChuPDnHGMPNslrOTWt5AdYyxxEFvlyZM2qmSukGyZdTfs7xPGFzKL%2FkXe3sETzDwN%2F9bhnttKDP%2Fz5%2BsKgCm%2BEHOR%2FXI14yji2a2tWmFdxzBVJVH7Apb0xsilw26P8fsh7ExR5DBsLX1ZKKDDFRzsc33TTb11%2Biiolz5GZMPG3slcgXBqFhfN6ssja1pprnFamDf%2BT7US2VMJd0r2cWnJ%2B5PdFurdSfAgvsU0xkz8kjl0tuYDROjhoywyQA3sQU5Ttl51%2FyjkTAdo0txZxZPYbJUkPtJs5eIerEHwNB5XX9RqbbyVRZEPQ12CwqAbY6hWyMDvMivUm%2FufMPOujs0GOqUBVNaDyXU0AIHleAv6PRzUS0b11UxtAl4s0HXz3lb4jlaD74toMK5SOxOssc2EpGvOQnLmY%2FV5BSPW5Q9M4H%2Fn5HGDPSM88CTOWBK83kznbZLRAQvXty3F2TxAf%2FsMiS9xp6bAGlZo9%2FUAfGY1OfZ3GOBpyU6Yh0lWojd7TAG31VFBgI2AWXoXEJEFInLCrw4mzgUG%2F%2B7vqh70u88KuBQCXC0HLgmy&X-Amz-Signature=8ed9444977e129fb585c48d5abb04ac190d0a645cb02bbd7a4925a5f081dabdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REUUVBCS%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHsdFzNYGPRkjhACmlxCGHG9CuNztqDBPOX79BGu9dQAiEA%2FzqHI2YS5CtKkzPg73qYdTPgA%2BkKbTgKS%2BIhDPeVtTQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGQK7xM%2BG9FHt5c%2F0CrcA1E%2FmrOEzoPsfIugDWIug74HgkCfq2RL7bX1FfnJqjnjHgbRVv3nPJelMvdwZTxR23bUrvSFk%2FQVS%2Fx2EC%2FR2%2FtwMrGCSW5GUIK6qEbzdOKZIAlknhE7S0CCSPeNEKLLkaMSliyMQG0ANKjcEZqwo6LfMrob%2FxNWfVQHjM2pqVRCYXAOksaMFPsz5sAlHPquYtOulCOfgRZr6cyoY3kc7ioF0u18RZv8o3O%2Fcde1xKvkaG5SiVWoS5j9Dxl0lEUo%2Ft0Ey8IEXLb%2FqkFk3SduhGj%2Fzi8Zj5Hd9HbBw0idyArCqvKHvu3LIe5tOBHk0gsYT8xT%2BYeh7qLIzrW5yXZMBJxJJ%2F4CucoMhb9uUG9g0j5ZBbgW8fJKI4ziQYuKbwPFhRYbZ5IF7BiSZMmoawlQZVfrakVZ%2FL%2Fg94Pu%2BrWULEVDwq3d5uI4aj6crX4xKCBaWlufIb9AnTbiV6csV7qysQuOGyOBGF%2BDdQ0ERAi5aLbIfrnJDzAhXwQyGPG%2BqTgSxmqA4MtLYKSoYnBaZB8lwEMPGVCkKwSx1j7BnBhGcvBN0%2BQS08MwGVI4yrDVxyFIHtdGyp6FCUEqiBcyQodcV4mLh9KjXA4fyMw00X%2FDSQfVvk16D1bxPYe0fVgyMMmujs0GOqUBGpiJrnBYsQn4USUctVmrsc9fh0glLx6L%2FX8DARsd5SWsi7%2BaEUw2MhE0L1PLVcHM3oHQPheXeASEozvwINYHmHfw753qCkUcWZMdO1JdbO8osmz88ECeQIyycxIPCaGgD65rUnHRhTa2JzPbTnRT3papXb%2BmuVftAEmqD69Jx1oMhGesbXR9%2F4lCcj1i4WnPjdEyDFXdxE9%2Be09JJ22LN20rpfyL&X-Amz-Signature=ce73220070dfc9277ffb51a804eb1d3598a8043ebb4f8ffbe1685ca08524d63c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IYQZJSX%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqtCMgR3cPwjJgl38yg1zzdq6rrEnJCZFVRu0wjVFgAgIgCgPZ%2BUcFtTQ8db6p41jBYe6ZiyYl%2FPNzM3pikXbq584q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOyGfr9ISbAB%2FG0%2FHircA7hLzCwTWFmpAl8MzrY2cdaGbRI97epr%2BLjHjMF8Vm6GyENESyToNOzOLlFX3mTCvK%2BTdcc6DTMbHZic49YfueKU%2FlgX1c8amYi9C4%2FxCEYXOKhdmTVZ9ZFWW8SoCAmuMbEujdC4hYy9reqxNB4LSIvahcy97sqaEfMQvn%2Br3F9Sno12F4dLAoXJzAV5PVk1AIdlh7WFUX15iXSY8U%2F8m3ABno3hR3KcmMYwcBXXfo0e657GVATZM4FMk8BlaueOqDDxSHbTnsiaJFfNPZPXTEviUYIEt%2F4DN8%2FIhl6DAWEYPbdPvl%2BH3r1OpgraoTs5wy0LZJ16SONVJ447GNf0c%2Fh7ynZDKyrMXazbuH9iFMp1%2F84dLiIKtE%2F0KRPoIobIbSYxvMRkEgP2Do4NJEfbHMi8tjXJfwCbSbecmSxooPKK7sqeFFgDMTNWgOu4j4xfGe6r7X%2FaUlkKbjUmJQoD9J5lBiq7XBqhrCT%2FgPLwDUujtwKtwISS0YYKVoOIvcY%2FhMjdTtFTTY93Ov1hfeAYY65Xr%2Fs5YG3%2FjwTdqCqICD9kRpXAdt7QfdMAsMNM5R4o4AqyRdncW5CmPNwctoSbc8TOlfq2ImulswfVsfQl2KAQEjSlqiOEHltAzhUMMIOujs0GOqUBVLvUfOxN5%2FnfHQcb6ZVs6QW1ruV2OiivYFbjeqGMDbZTqzRb%2F8t0sfWKoUVf9lWjRc2a5YE9d4XUgVUQSfgQvABdslhKoEyVgrAFQb4aY0vo1aM8iUPrqmE%2BPyQBAs%2FYgfAEY%2FtVnmB%2BTi2S4ERGQpYGKsFX7%2FpdIjS30YVoMSPjZytMurxLOjs6TuPwB90QEFAg7XgMX6vS2DntXPDBtrxlhPcv&X-Amz-Signature=b3874a5cd4629e2446d5bee9c31d5d9beb53ac98865fc2d6ea3f4bcf26413a9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IW6IE3D%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJzEBMWgPdpTzTlrncYpmL0QZvacKO8dgvxCDl7psCeAiB2vrdR5euilCvGcNVZxQGoP7%2Ft8DEESb7BEexjQJahKir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM6c8uXxeU6eg3ik8YKtwD52psVFPvJLYffIXLBIPyAyxagKDgKvetY1myTHn5v6HdQvkbzTCrFCeUyEarzfhayf%2FGhSixzLBrrBa66Ltwst0uo1hNQEGaMTibaHMD57GUvphCIaZ5Tt4QC6Iq%2B85PT0f7N7oY2lHdIQdIjOhYsCcYVTpIpRWHfZHK6kfmHVJxdf0gUYqNK1qVrq3%2Bk2cUEizTIT%2BX5TaPKrZrUb1aZcVPjlOBmisoZkyD00xNLrrwt8WfPzL0bDzFZPNmMdmdNejd%2Bf8RiNOWI0lsi8Q2%2FQBlDKYIDWEMIZehHTYgdE0rh3sdjoHwwd1XcYdpPNVeEON1RIIDW0nMFmLTrwia00zqAchsi9%2FkOTYaFyl7fyAz6quE1NAcQz2zT59aw6xOv7AHNn0kcAzj80GlRT9oMMIHUBNpwv082jsuZz7Xi9Em7sz76GtOJKawaLJEXR9O2rCkzec83RWZ%2FkCsF4ZqkASzYxfwXjyKbGIjy5SNE3Y8LwJOIWs9T%2FDaVBfb30c1LbuUnzj7j8JE1m596plHnGpkg%2FnHdd%2FD3BK8Z1FjzeqvMdxOo7WwUrU0nh1mKFkPRNe1qjZ%2FfZuBeD8nHPNY8sW4GnWRKlVHIsb8rf%2BTiABQPBCiGIJcmNN%2BrWUwwa6OzQY6pgFnMzZDnY3feVSVRlJ%2BRJEb4b6sIqi9rj493IM%2BWC8IlCvtMrQrM%2FRqsxazNyt%2Bh%2Fk7jsnakBL1BjammePxJn8Mw3WMv24GTYS5M%2Bqx41boUFDpaTcv9nGbvijF2hLf4SNRM7JilyuMHXQswP03QdUCimSxjgTsbXQzHvVyWQaWs6ffYyjuUSvRvkX3oypO9DIsGiavP7A4vlF86rBXlCntPZNOvbzG&X-Amz-Signature=dd00ba37fdf8bba5775413afde2d016f7bfa427eb9896618d91ba43ae1e8472f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJBKCGO%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9tpbUhcnyeHfIfCSI3afT0176zMJnXN49VYa0i08hNAiAJlU2bvTzdUhtxyJl9dbERtlVbFgVVPMB2wOp8NBBAkCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMm95CYKyXPCrmhPVQKtwDVKxzJ%2BOpEOc00h8If5X1tDKuLyJ9uip%2BBQmTqXhUNcSq4T8LJ3tzXAfy5MiBfu0YjIUIdl0hLto0BgibASatmSbC%2B2GzcI7I0bfpo%2FIxmrZE4wsRzovwBE7kfQCGh8V8Jpcsv1YuBoNoT1uKuQVzhiNRqYjIBODvpddIpcTEUgUnO%2Fyf6Fknn8GgzpuE%2FU4J%2BNBUBx1VKJjm0qR%2BW7CB0aPFLjYJaU0eXPIwiA1yFD3%2BeGAt985XlwWVcEnIrq28xJO0sh%2BUigy2R2iYac4mr8A5qUGgN%2FsHEDUDozg%2F3NeLQUb%2BT8cbyKlnhQuIkcwnEvhF97jeuNvz6dI65yiklZdII34cWRzE1OuM%2FLqsLpJ895an94OuBpGxqnJW9DBbNxb9hdAQ%2B5egPqWh8%2BdamGcntxALgKbJg5xGSeFA%2FiO1E5uM6Ou0UYFDd7HHVTuPKwPPvYN6lcI4s6yB%2BMniObbn%2B5xLd4%2FSynuv3KesFT0PZRhq6JqWnpazR588lz%2Br9jXT7g5sGIwXCq%2B1f3bxC50rDOvUsQJtXqtGi2vHE6Aeu1yiIZPvVqarmwPpr%2Fh0Z41%2BJJ4pJ77dri%2Ba4d8siFep5Zqfg5xrs%2BWQ71lnEtkLgZy8xjk3THloxu8wjq6OzQY6pgF50Cyfqc%2FuuJHypAllX2wisWGYvs28nDRVWFQLEl%2BGb7yxMwr99ypIBbf8ZDDK3Qnd%2FQMMGIISqVcQKpuNfdFcupKmRlxVUICI9%2BScIUVFf5xOgGylSYvBZsKYZtEPQI2nLYFzBpZ1MVgveKnNmVDwOsr2pmkkmm2M95EGg3HFc81Pgoe%2FG3lqPvRXdQe95UIdoFnw0S1f5%2FhBy2Uu5ut9xo%2FxqgjX&X-Amz-Signature=4364af06b0e7561f58aeef04e4876708e8f3773d10d0e23965f7203fd27b9d77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IW6IE3D%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJzEBMWgPdpTzTlrncYpmL0QZvacKO8dgvxCDl7psCeAiB2vrdR5euilCvGcNVZxQGoP7%2Ft8DEESb7BEexjQJahKir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM6c8uXxeU6eg3ik8YKtwD52psVFPvJLYffIXLBIPyAyxagKDgKvetY1myTHn5v6HdQvkbzTCrFCeUyEarzfhayf%2FGhSixzLBrrBa66Ltwst0uo1hNQEGaMTibaHMD57GUvphCIaZ5Tt4QC6Iq%2B85PT0f7N7oY2lHdIQdIjOhYsCcYVTpIpRWHfZHK6kfmHVJxdf0gUYqNK1qVrq3%2Bk2cUEizTIT%2BX5TaPKrZrUb1aZcVPjlOBmisoZkyD00xNLrrwt8WfPzL0bDzFZPNmMdmdNejd%2Bf8RiNOWI0lsi8Q2%2FQBlDKYIDWEMIZehHTYgdE0rh3sdjoHwwd1XcYdpPNVeEON1RIIDW0nMFmLTrwia00zqAchsi9%2FkOTYaFyl7fyAz6quE1NAcQz2zT59aw6xOv7AHNn0kcAzj80GlRT9oMMIHUBNpwv082jsuZz7Xi9Em7sz76GtOJKawaLJEXR9O2rCkzec83RWZ%2FkCsF4ZqkASzYxfwXjyKbGIjy5SNE3Y8LwJOIWs9T%2FDaVBfb30c1LbuUnzj7j8JE1m596plHnGpkg%2FnHdd%2FD3BK8Z1FjzeqvMdxOo7WwUrU0nh1mKFkPRNe1qjZ%2FfZuBeD8nHPNY8sW4GnWRKlVHIsb8rf%2BTiABQPBCiGIJcmNN%2BrWUwwa6OzQY6pgFnMzZDnY3feVSVRlJ%2BRJEb4b6sIqi9rj493IM%2BWC8IlCvtMrQrM%2FRqsxazNyt%2Bh%2Fk7jsnakBL1BjammePxJn8Mw3WMv24GTYS5M%2Bqx41boUFDpaTcv9nGbvijF2hLf4SNRM7JilyuMHXQswP03QdUCimSxjgTsbXQzHvVyWQaWs6ffYyjuUSvRvkX3oypO9DIsGiavP7A4vlF86rBXlCntPZNOvbzG&X-Amz-Signature=4ea3eae7cda2bb0b7dbf7587654b9ba07b1eabd96910c21fcb5ad56da27f26ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2UVBJF6%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCis7UrBrLDOb5NGRKRQyKWcjRyjsCyMBJJVOvAIiHe2gIgJJTXXX9%2FOEluMjhonyDyHw3t1gFtg41qUwvILoeZkzgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIYkYR%2BxG9HBwEq4wSrcA8TBuVU99kOu%2FKC4loCLQX%2FiLTlMAuawMprbDEAlcEgd7%2FIRLa9MsD%2FcoMNarX5JiBK5SK5YMOO%2BMeUvYwLz4NtbYUV%2Bl6t1zaYlEvA7Hn8nndwOiKqy4V4svZBeK%2Ftx9M7jTlE7xfhIT5u7uB4OhiolZU2sM5FtIRlqkpgOz%2FPxY0wgKJYNaZie7Yyq2mH%2Feu%2F0%2FONxeKE2%2BC1WK7pidTD%2B83KJmffNu%2FLHiocsLfT9RvSIvUNuReZglM0tgOBVoJ8XUSIANBstdtUQK0dfn%2B9Ll0H%2FZ3cQ3iXT41Hz%2BLPQOAcBk4SFDoZhSdrINuBO6ZMNAhug9vhUM%2Bes4izoAppfUoXOU74Kb8iZmX0zZpfv2XxU81yYcfwfHBU7gTshFZB42jC80qFkFhdKI8ub%2Fy2V2uEeh7MGc1%2Bzy6wC4G%2BtqmsUSk5dsRgHvSrq%2FXRa1Fl8QaDMqV9GmJbukSShUFs6JAJbgzvXf7a%2FW1%2FpRq%2BGv6pj%2FXIpw2pKutpf9INx7PPvElm55MwE7UuZQXQu%2BaANnkba5Sy1UxUsH7vjYVE7Ei1SE2lXMyzcbFHbQd4%2BeaNL9O5nhyxUPX8NRbqfCSz%2BRCoJKj3HvVz%2F%2FXj1eQt6lE63q4Fk62AqcF85MMiujs0GOqUB9hhR1b2etLfbWmrU67BXdbQ0uIeKf1dYKbwisdjkS%2FVgsCl%2Bl1c7DsMvs9me%2Fh5FXovshUoxyrH1pp3v2bi%2FD%2B1ayMexlpqNYLzERWsSxKbKy%2FfxP1G93Quiv7NsVwL2svorl8JYBQ2xeTOobp%2Fq8F01nAOSCfGJu6uvL1McBnOOhOy40hSa2TjgqlL4uY8WUr6ofWJJnYGxcGyNnEoo5KqGr9gf&X-Amz-Signature=14fac9e559dd95b2257ff054e47fb1b20af6987867671f4f0f28265fdfd27e85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IW6IE3D%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJzEBMWgPdpTzTlrncYpmL0QZvacKO8dgvxCDl7psCeAiB2vrdR5euilCvGcNVZxQGoP7%2Ft8DEESb7BEexjQJahKir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM6c8uXxeU6eg3ik8YKtwD52psVFPvJLYffIXLBIPyAyxagKDgKvetY1myTHn5v6HdQvkbzTCrFCeUyEarzfhayf%2FGhSixzLBrrBa66Ltwst0uo1hNQEGaMTibaHMD57GUvphCIaZ5Tt4QC6Iq%2B85PT0f7N7oY2lHdIQdIjOhYsCcYVTpIpRWHfZHK6kfmHVJxdf0gUYqNK1qVrq3%2Bk2cUEizTIT%2BX5TaPKrZrUb1aZcVPjlOBmisoZkyD00xNLrrwt8WfPzL0bDzFZPNmMdmdNejd%2Bf8RiNOWI0lsi8Q2%2FQBlDKYIDWEMIZehHTYgdE0rh3sdjoHwwd1XcYdpPNVeEON1RIIDW0nMFmLTrwia00zqAchsi9%2FkOTYaFyl7fyAz6quE1NAcQz2zT59aw6xOv7AHNn0kcAzj80GlRT9oMMIHUBNpwv082jsuZz7Xi9Em7sz76GtOJKawaLJEXR9O2rCkzec83RWZ%2FkCsF4ZqkASzYxfwXjyKbGIjy5SNE3Y8LwJOIWs9T%2FDaVBfb30c1LbuUnzj7j8JE1m596plHnGpkg%2FnHdd%2FD3BK8Z1FjzeqvMdxOo7WwUrU0nh1mKFkPRNe1qjZ%2FfZuBeD8nHPNY8sW4GnWRKlVHIsb8rf%2BTiABQPBCiGIJcmNN%2BrWUwwa6OzQY6pgFnMzZDnY3feVSVRlJ%2BRJEb4b6sIqi9rj493IM%2BWC8IlCvtMrQrM%2FRqsxazNyt%2Bh%2Fk7jsnakBL1BjammePxJn8Mw3WMv24GTYS5M%2Bqx41boUFDpaTcv9nGbvijF2hLf4SNRM7JilyuMHXQswP03QdUCimSxjgTsbXQzHvVyWQaWs6ffYyjuUSvRvkX3oypO9DIsGiavP7A4vlF86rBXlCntPZNOvbzG&X-Amz-Signature=2a6a30e55448b8349f413f06411d71ea2b0c3ecd3f8fe0b539e76852a2a9348f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUH7O4UV%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9L%2FLXkUP9Zd8ZoDdIV8M%2B3zGqOyIjxv8zWhnO7znCfAiAk1LOaL5mV21YL7%2B0RkJG3ZkMFItwu5ZFMsQad6%2BICZSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM%2BE8m1QAlGKQ9o%2FRIKtwDeWwcrFPgFvKamcyhzOVZd%2BlXFdTr5cGJpkFmi5FW%2FhcCNoAqz6Uux1ba1MxOQDxruE8sBQonujExpTnXfzzM0Hw%2BRlC%2FWWd%2BsaDiyzKgZ9oXsf35gaHWKCtdgZaPuYhJvSuea0W%2Fbf%2BZl0F9QOlhpswKMYnOGaYqEemE%2FqPNIUCYxpbYMxEnYkNt33CNnIQwn7q23JwYZhFwrDWhQKYorVpEtX9rpxgJk1mFWICRCkoljccyrWfPKDn9B%2F4W6JvzaRHqRU3Dj8bACPu%2FUpn4mXdCFgl554oEAHgNjUTBHd0i4QOf9V66YCmtfSEun%2FRHsNClfVD18vkd9qyF3shJdZoX5LM8JQLG6CUku%2Fpks89BPgnQm%2FfcetKEFUQUIxlWjhlU6Per8fRj5%2F5u7gyxCETG16xfH%2FPrQbdck0hG0YearJmfjZKqtsUC05N4nn9cuKBd8EYiv7Ca9SDB6JCB0qtjoHRZA3sdf0euV5kzjJh%2F%2BClXc%2BrE4Yo4hfW7r406GHLlCgXO0XjDHnn9t7qGPSazjEGR7YgsoFk%2B0JMzHu1ylYhpBPfbZepWrZ1P0NxxI0XqeiuK6weYt8zPZZWHVQMPnk3LaZQUXYd9fjohrWWq7g%2F7AwXDUlaSh%2BMwhq6OzQY6pgGjpyFlNmddrv6jyhfkl2AFJfg2%2B0oMhQckHs7k4paL5oeoEmpZQaWeXk%2Fl3YiRahG3RCRIgnsk5TC3ru9bGM%2FPoozqLCodrIxgPBbyitDD%2Bx8QZxqUwZpwrBAyp0jHBVZyXSM79VYZD7zIB4u6%2BTpT5ybt%2FlfU0PZIwfN37gjnIgaKIJIRwLBFdoB1xQOo6srcqYs7PwXrZ%2FzQaC8ylVXe%2F2cdO0C2&X-Amz-Signature=2a20f11fe96ac82147da4bb947fe841aa0a1d91765e19489da887b77a717699c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IW6IE3D%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJzEBMWgPdpTzTlrncYpmL0QZvacKO8dgvxCDl7psCeAiB2vrdR5euilCvGcNVZxQGoP7%2Ft8DEESb7BEexjQJahKir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM6c8uXxeU6eg3ik8YKtwD52psVFPvJLYffIXLBIPyAyxagKDgKvetY1myTHn5v6HdQvkbzTCrFCeUyEarzfhayf%2FGhSixzLBrrBa66Ltwst0uo1hNQEGaMTibaHMD57GUvphCIaZ5Tt4QC6Iq%2B85PT0f7N7oY2lHdIQdIjOhYsCcYVTpIpRWHfZHK6kfmHVJxdf0gUYqNK1qVrq3%2Bk2cUEizTIT%2BX5TaPKrZrUb1aZcVPjlOBmisoZkyD00xNLrrwt8WfPzL0bDzFZPNmMdmdNejd%2Bf8RiNOWI0lsi8Q2%2FQBlDKYIDWEMIZehHTYgdE0rh3sdjoHwwd1XcYdpPNVeEON1RIIDW0nMFmLTrwia00zqAchsi9%2FkOTYaFyl7fyAz6quE1NAcQz2zT59aw6xOv7AHNn0kcAzj80GlRT9oMMIHUBNpwv082jsuZz7Xi9Em7sz76GtOJKawaLJEXR9O2rCkzec83RWZ%2FkCsF4ZqkASzYxfwXjyKbGIjy5SNE3Y8LwJOIWs9T%2FDaVBfb30c1LbuUnzj7j8JE1m596plHnGpkg%2FnHdd%2FD3BK8Z1FjzeqvMdxOo7WwUrU0nh1mKFkPRNe1qjZ%2FfZuBeD8nHPNY8sW4GnWRKlVHIsb8rf%2BTiABQPBCiGIJcmNN%2BrWUwwa6OzQY6pgFnMzZDnY3feVSVRlJ%2BRJEb4b6sIqi9rj493IM%2BWC8IlCvtMrQrM%2FRqsxazNyt%2Bh%2Fk7jsnakBL1BjammePxJn8Mw3WMv24GTYS5M%2Bqx41boUFDpaTcv9nGbvijF2hLf4SNRM7JilyuMHXQswP03QdUCimSxjgTsbXQzHvVyWQaWs6ffYyjuUSvRvkX3oypO9DIsGiavP7A4vlF86rBXlCntPZNOvbzG&X-Amz-Signature=7539106d05d1cf3d30a5d40162a5ebf9c07af1b448b5f16d19a6ad6ec8538c01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL7ARNSK%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSoWn1m5OWU390jfJY6K5aYQh%2Bg2LVu%2FNKekScgJmOhAiEAz0OYsFP10i4j3sXT9GfY%2BK6y4pcPrGYYkq%2FJQEBYKmcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLsTKFI%2F%2FA45LhmfGSrcA60MDvDvpDax6A3BNFbCaZl1iVNQGsVelYV0fj44jAiVggZFMejVETu35uBxcWpFV8wRVCSs4LAgDmuoUrtSnuRKb2l9Smy5jDOco5NU42QHqFDYIF1Q7oucgtb4JLZ%2FBP5q5z9DsVbrqrcUzTHThMpfRLSCevSpwPOW2joEZWGO8dVA%2BRsgt9%2FamHSPgKZJ3GQZdk12DRt31h2avN2FkAy95Oc9zLBJQRSnmnr1h7RZul3NsxbhCbLhxmjTym1ltwdeJzF%2Fkty70z77RDLFdT%2B6mI0FLgP21mGP1veLY%2FpKQY8c5fELLV%2BMEjDEUilkuyLff6cgwdLwBfB7rS25MMkLYGUDzj59miaOOA9UAj1hiwIck2sYdEoTJ3MoJsZQQhFdviy%2FVFMV7YIePvGNpPpB8mIRc2n82ka6zVF%2FuhgkJYf4wFJfX3mjGid5SBpggjxqfVENc%2BuKfzBQuuFLJhld4G%2FaX3BNsLqYu4TRY0c0Oo2kb9hbzZdJk1IXSAPgSKyaAdPSDf5RVPU03g2ix9u1Io63UhxQ5r15qZVZHssv%2BIcekrRyZIUhK3vXjIQ5rN0UBB5qTINYiLdw9vmpU1QZ9yXqKWukLBx5e4va52a6sl0GoTqtpCWvc7nhMKOujs0GOqUBPH%2BnexABYacLPTThyxQHrt7582ztMj0m0vpFuEJ5Lj1td7nH07qFQ74LfKYEvtu3TTHlRZIIkNkfSzj2G4NzlCBG0g41%2BCb5iY2C1x%2FcGQhDgTSLaC4BrUsKYnyiP6Ujk1sNdayIhsTAQ29%2FS9OvTlGl6wsZlqMFy%2Bz5M8l0vZ7nNI0gpvXfVd36FrJh3yb1WVZG%2FcDmLmCQJvw6obxknVryMS6E&X-Amz-Signature=3515a99eeda1cb47ec0fbf1324de2478f88fe16971b8f68213a4ebef5f792523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IW6IE3D%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJzEBMWgPdpTzTlrncYpmL0QZvacKO8dgvxCDl7psCeAiB2vrdR5euilCvGcNVZxQGoP7%2Ft8DEESb7BEexjQJahKir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM6c8uXxeU6eg3ik8YKtwD52psVFPvJLYffIXLBIPyAyxagKDgKvetY1myTHn5v6HdQvkbzTCrFCeUyEarzfhayf%2FGhSixzLBrrBa66Ltwst0uo1hNQEGaMTibaHMD57GUvphCIaZ5Tt4QC6Iq%2B85PT0f7N7oY2lHdIQdIjOhYsCcYVTpIpRWHfZHK6kfmHVJxdf0gUYqNK1qVrq3%2Bk2cUEizTIT%2BX5TaPKrZrUb1aZcVPjlOBmisoZkyD00xNLrrwt8WfPzL0bDzFZPNmMdmdNejd%2Bf8RiNOWI0lsi8Q2%2FQBlDKYIDWEMIZehHTYgdE0rh3sdjoHwwd1XcYdpPNVeEON1RIIDW0nMFmLTrwia00zqAchsi9%2FkOTYaFyl7fyAz6quE1NAcQz2zT59aw6xOv7AHNn0kcAzj80GlRT9oMMIHUBNpwv082jsuZz7Xi9Em7sz76GtOJKawaLJEXR9O2rCkzec83RWZ%2FkCsF4ZqkASzYxfwXjyKbGIjy5SNE3Y8LwJOIWs9T%2FDaVBfb30c1LbuUnzj7j8JE1m596plHnGpkg%2FnHdd%2FD3BK8Z1FjzeqvMdxOo7WwUrU0nh1mKFkPRNe1qjZ%2FfZuBeD8nHPNY8sW4GnWRKlVHIsb8rf%2BTiABQPBCiGIJcmNN%2BrWUwwa6OzQY6pgFnMzZDnY3feVSVRlJ%2BRJEb4b6sIqi9rj493IM%2BWC8IlCvtMrQrM%2FRqsxazNyt%2Bh%2Fk7jsnakBL1BjammePxJn8Mw3WMv24GTYS5M%2Bqx41boUFDpaTcv9nGbvijF2hLf4SNRM7JilyuMHXQswP03QdUCimSxjgTsbXQzHvVyWQaWs6ffYyjuUSvRvkX3oypO9DIsGiavP7A4vlF86rBXlCntPZNOvbzG&X-Amz-Signature=42921c57113727af54f0f1c422733238b7ab783f569c8adaa3bf8ff376b1f4a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB2YCSE3%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDK84d6pyeiIv6OZ2Fm8ItzGjZSOYQhTmuedkBpRDaxMAiEAkLKfpT%2BcjkdK0jIQFI%2BZk0zkcRp2ZGQvlKAeYX2DmmIq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJyrde1hdV4HxnocryrcA5rr7fcIJVDufMt6RCZocMEoQuKt7GXyltMJXzXYLf6bfDOCANgM45qwyDapgijtThqc88Z3SIB%2F8KIz3SDYR60ogptsXdu1gB7LOP0G%2FUza63nwWLM6w1LmIxdGatBqoEfhIcWMnW48Et5WD6CiI1phYwc6TN%2BAV58Ew%2FiD7UfUGvF0aoNrAKxUfvDCCdVqYE%2FlgEIi17N1%2Fhv9KE8veYgsDHleStpYIcmWIEWX05jx4yTJh8z6C0az0L5geu14l0KWFzY8uPVHcNVGQNxfHQ8WwG4gQJH7OHO%2BkTnNtYTg8749nywaJvHp72mNtN%2Bn%2FiZjRGorrK2w9OvwJxU3vNfEBBWm2fI4iFW9Ler1vPcA54ncHEi9crnC6ldiCHlEgOhkjKpuObLr7vS8gsHxPb5knXVH6LPLbbRjxAodPqmfO%2BsJRX3x42yckDKd7x1C%2FcGYc2aY%2Fv8dWTdT8dt8gYWPFmB%2FIsGKL%2FPQF%2FSESMItcPmk504hwznf9RW3NrFZWzglQt25hLkW8z12xK6MJ5IO3FjD5atRzweiYtqSs1OQlHMKBvPofUCY0mGaFuCEYTKTK87SZP8VkWeMEpWDA9DsFV6VkM7zxhbiNzlmL%2BxzVrA96bMgz0HhAPRSMKyvjs0GOqUBAun6V06kPpKnhvObz%2BHG4kT8EIg%2Fnrb%2FLY%2BX%2FCwxAfN51HjydrwD03R0dcKAfdt0ZRUCYSZD%2F%2BNA3e0PlNE7MeUfTUxOjkfyDeDKGpUl8AfNhpw%2B%2BMSxNI4qCr0fcI2SueELVoY20vvJciDjD1sJ%2BoTzhY%2F4DUmCeYG8KeKDvK5YJhUZbrPVV5wVuRIw1M0llCMaj792qAdoJgpOCO7vh6n5j7QQ&X-Amz-Signature=617e181eab280838861fe82f9896d56c5065bca1662af34a79b4818c3a533e4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NLCIDRU%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmPxB5zrcYqmMAoY5puA7m0i6TrjVrIji6FU89%2BaYHpAiByXpBi2qFrA5vCZem9VZjPC2ACRxQ1YRIQBrpw9UmNiCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMbh02j2kJlPNC5D5HKtwDyXjUbQddBLdQ9V4JdsF45369nRxn7gM6XWGH3qsZOxfapQCQMPPG0NKF99gV4CT7gDKAS%2Fsn9vI7cOrCGBXwEYaKkW9GIm%2BJWh5FoMx6sukW6WV4GQvs5kaNdE8nd%2BjdRTSbm6yj%2BUxGanVfLSs7GIrPQ0sOWMwASKkxz7KOcakbYFFdGRMTpAkarzkSbB3l5T18IPJf8LP1TGLhlyZc%2BiS7kfNvBc9szmHK0kp7h2aX7%2F9b5ADO8mwbHkO0OoXMVPT1zV8yoNPRWnwzBGzWSVDWP%2B6D7nk1t%2BLZxCyzLJO29hZixsNsGSa5KpYdnvsTTVDUg4qGdmWgH7juZQHDmOMFLzOFBeGVhQpdkUNtJgNUsxq%2BYX%2F8eddDOIFlskW5ZfNZeADJc2jp8rY4BweuAxT%2FslVPlcpFrK62aqf505%2BaeAzpdQB%2BMPRykoFcG5FMhn6SnIh2nmF1P1Hg3libPF0GOE1ZRHvNoWZTpkkYb5qMAPxZTGi9FCwQm4StJGzMvpQpczzhA6vZLWm3tzWsiQKzmzFOFHK5pxtv46lk9rlSFDN2h8AOZ0ZbDY0ZpE6mdua5ZHLd%2BBDoZ%2FlEDo5tqhARyHCTNtlECbAv%2FpCOrvlFhB3%2FBdqa%2FWzz5Kgwoq6OzQY6pgEALjAoC3LHO%2FJRnlwn1hM8weND7JrwsrsnlxZT2PbtOY8X1RHzqhUm8Z%2BcIrahXKkUG%2BOnPbIGvESWV9edT3CxmhecsRy7qg8Ikpem7Ozo%2Bln2xvSEYFuNVvHyc3SeBgg3xJLTANp5NDVrnpbC0QUOKaRfgiv%2BkDIut0s4y69KBnPkQ%2B6D04KOw2oU5KFCVPdDwXo644z%2F%2Fui2kg1lBpENqVnyZfwl&X-Amz-Signature=2b7d4e823c372a01c5f373dd2bfb1b34aaa585ef4d36574ccfd9a7f6b59ce3b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTZNSGCK%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm%2BOq%2Fz%2BgverpAJI%2BTctE7ZLW4FWZyKFyuIAM8lQAw1QIhAPUNcOJ%2B%2FE%2FPIZ5fT9gn1ZUsEytSg5S4atHVwYM8aKq%2BKv8DCGMQABoMNjM3NDIzMTgzODA1IgxcTgalfMOc5wJHxTYq3AN6DACMYgSpVW%2BzAWetD1VTrzYbRFIBa%2BEAUjctZ3oeX8RDjov8DS8MzDRC2lUX2RWBmeCguyCx6H5bcfnQjCM1XHwC%2Bq98pHiV8JyfN9UMUZIMTaRVUO7NRO5iPdwggl%2BCYVJ8nitxotB%2BYnT1k4souDHm1Pn2p8kNvJOAfl59lA5BKZQWN0gm4nGX9G2SFVjTHCtqWcHdbSzqFr5BkQVGDhrJHkq2FLWcoRgugQ1IfcX46LrNf08Fh2HBtJbfGIemL4Pjp%2FXx96eqwe%2F%2FmkZKVLvaumPr%2FBklnPbkhuxiUksKDTY1l7Ed4dvVXPoz%2BL%2BrWKRAGPPrex4T8oTcHuvWvqrqZ4YvOHpxNGANOYIrIAYVi1fY2hAfe0qCealFgUJlP8d0%2BgHmMsXcH4HAEV8xV4vqTtNRezGRkaa4a6PJEZrQymiP57DxFW5RQ1SvvtZvi4MxOy1AGYY%2BJdv7fBkHDvxsF5sWvH%2BuOJdD3NJdZb406dgjP22PcyWSC11a84nnbuMHqjf6XNtTd46VCvqIDh4O13QBvq0My%2BwbxbPiwhfTA9UM9LhYweiRitjEM%2Fw8EW%2F6%2F0K8XMY%2BCcocAlXzY95geyQeo0%2Bj8OuOEktE8z8xa%2BZm%2FGkinskHVTCmro7NBjqkAZpesOagFBFy6TMDUzooKM4aMKAEsMhmx9Ei2OmwRocKSQYHoCXzXVtbx%2FIKgIOI06o49xTrZXSzXddgnPcNJYRsr9oBYF8YCHhYBkPiLIDIUFpbvcUf087FCpjh8gMaA0%2BlrKqKMizrmgwLdiVgcbN7ZHk5nDzS7QWVG1hv9nuhqUUgzSKBgKrP2R%2Bl8UiOv7rd6AxqC%2Fsg5tdd8qnvkZPI%2FqeI&X-Amz-Signature=b8a824a92b0796aa8462cfdb4031ce634ce07d54df50ac1e96ee21772a3327a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IW6IE3D%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJzEBMWgPdpTzTlrncYpmL0QZvacKO8dgvxCDl7psCeAiB2vrdR5euilCvGcNVZxQGoP7%2Ft8DEESb7BEexjQJahKir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM6c8uXxeU6eg3ik8YKtwD52psVFPvJLYffIXLBIPyAyxagKDgKvetY1myTHn5v6HdQvkbzTCrFCeUyEarzfhayf%2FGhSixzLBrrBa66Ltwst0uo1hNQEGaMTibaHMD57GUvphCIaZ5Tt4QC6Iq%2B85PT0f7N7oY2lHdIQdIjOhYsCcYVTpIpRWHfZHK6kfmHVJxdf0gUYqNK1qVrq3%2Bk2cUEizTIT%2BX5TaPKrZrUb1aZcVPjlOBmisoZkyD00xNLrrwt8WfPzL0bDzFZPNmMdmdNejd%2Bf8RiNOWI0lsi8Q2%2FQBlDKYIDWEMIZehHTYgdE0rh3sdjoHwwd1XcYdpPNVeEON1RIIDW0nMFmLTrwia00zqAchsi9%2FkOTYaFyl7fyAz6quE1NAcQz2zT59aw6xOv7AHNn0kcAzj80GlRT9oMMIHUBNpwv082jsuZz7Xi9Em7sz76GtOJKawaLJEXR9O2rCkzec83RWZ%2FkCsF4ZqkASzYxfwXjyKbGIjy5SNE3Y8LwJOIWs9T%2FDaVBfb30c1LbuUnzj7j8JE1m596plHnGpkg%2FnHdd%2FD3BK8Z1FjzeqvMdxOo7WwUrU0nh1mKFkPRNe1qjZ%2FfZuBeD8nHPNY8sW4GnWRKlVHIsb8rf%2BTiABQPBCiGIJcmNN%2BrWUwwa6OzQY6pgFnMzZDnY3feVSVRlJ%2BRJEb4b6sIqi9rj493IM%2BWC8IlCvtMrQrM%2FRqsxazNyt%2Bh%2Fk7jsnakBL1BjammePxJn8Mw3WMv24GTYS5M%2Bqx41boUFDpaTcv9nGbvijF2hLf4SNRM7JilyuMHXQswP03QdUCimSxjgTsbXQzHvVyWQaWs6ffYyjuUSvRvkX3oypO9DIsGiavP7A4vlF86rBXlCntPZNOvbzG&X-Amz-Signature=c5c27b269e3e05f810906c8c2acfd79544204490fdfef90e8db0ed2828d16323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IW6IE3D%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJzEBMWgPdpTzTlrncYpmL0QZvacKO8dgvxCDl7psCeAiB2vrdR5euilCvGcNVZxQGoP7%2Ft8DEESb7BEexjQJahKir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM6c8uXxeU6eg3ik8YKtwD52psVFPvJLYffIXLBIPyAyxagKDgKvetY1myTHn5v6HdQvkbzTCrFCeUyEarzfhayf%2FGhSixzLBrrBa66Ltwst0uo1hNQEGaMTibaHMD57GUvphCIaZ5Tt4QC6Iq%2B85PT0f7N7oY2lHdIQdIjOhYsCcYVTpIpRWHfZHK6kfmHVJxdf0gUYqNK1qVrq3%2Bk2cUEizTIT%2BX5TaPKrZrUb1aZcVPjlOBmisoZkyD00xNLrrwt8WfPzL0bDzFZPNmMdmdNejd%2Bf8RiNOWI0lsi8Q2%2FQBlDKYIDWEMIZehHTYgdE0rh3sdjoHwwd1XcYdpPNVeEON1RIIDW0nMFmLTrwia00zqAchsi9%2FkOTYaFyl7fyAz6quE1NAcQz2zT59aw6xOv7AHNn0kcAzj80GlRT9oMMIHUBNpwv082jsuZz7Xi9Em7sz76GtOJKawaLJEXR9O2rCkzec83RWZ%2FkCsF4ZqkASzYxfwXjyKbGIjy5SNE3Y8LwJOIWs9T%2FDaVBfb30c1LbuUnzj7j8JE1m596plHnGpkg%2FnHdd%2FD3BK8Z1FjzeqvMdxOo7WwUrU0nh1mKFkPRNe1qjZ%2FfZuBeD8nHPNY8sW4GnWRKlVHIsb8rf%2BTiABQPBCiGIJcmNN%2BrWUwwa6OzQY6pgFnMzZDnY3feVSVRlJ%2BRJEb4b6sIqi9rj493IM%2BWC8IlCvtMrQrM%2FRqsxazNyt%2Bh%2Fk7jsnakBL1BjammePxJn8Mw3WMv24GTYS5M%2Bqx41boUFDpaTcv9nGbvijF2hLf4SNRM7JilyuMHXQswP03QdUCimSxjgTsbXQzHvVyWQaWs6ffYyjuUSvRvkX3oypO9DIsGiavP7A4vlF86rBXlCntPZNOvbzG&X-Amz-Signature=a4205688786816e56d0c5fceb8d533d79ab18811f48f154c77d8deb183ef0246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCAJYJ46%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACDZZ733Kmk1BRtI9ddyZTIWKM2ZXWIYRDeTHvBJ6NaAiEA14oVHArdqI0rvq9DNdhNs0%2FeGBcTkoCt1c2Gj1u7Tcwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLJTMPxdRtskRfttjyrcA4qGNySXs0GiWQp1mhmO5iE9wk8iY9eqFPNMFvHOf89JwZ%2FjsKzB0be6TTvRvjUnuF%2F2WlIV6NnW4ruMYfJdxTpdBKLDbs2kaXvYKRV2HtStUc3KVEgH1UAruo5V7A8p2V8Q3ZimXNtVj29d4vJIETUisGiq6kS8fScwoW1818K0ysQA6qFGUGYGSslSlyz5%2BYjW39mJ9MfeNTBTD9BH4jkA1T2hqw19v875HcxjkOIk%2BNT%2Bv1blHw3mxnl8LYwCJ%2Fb1S%2F6%2FedeCHYld90cNGAQSZDV3QcGlfaQq1yaUugHKWWd3PhVPLM8P86qyhfn9gE%2F%2FPL3E5tuS3dxwCk%2Ff1Smk3tT9xHcwKhgg5AudU5ZXE1zjR20oDcKidVPEl5KbL91pLTHChRwP0p%2B6sJDl7Wt4wa154hL%2FlvUBgw%2BhGr1XkVBkvRktgCHQGCsK9UB%2Fbr2jIKfSPiCRlIf30kVm5eemCGTGvFKGrS5agJBCojkQXIB%2FeLofs8N944UjdX5nFJB5aplb4e5O9yosuX6478WqBm8BG183pMSU97KsIlaFNeQETSDIFp4%2BObPP9Fs42Jf8201jckDCdImSV3zIA3VZ0%2FddVZAzaPbM%2Bg%2F0BOG5C93FU4GbKdnSYJHaMKKujs0GOqUBZbqu9iu%2FQDu4fI1RpQ%2FtfIp1Hec%2FMc0EISLiv0FVQtne8kXySZHmxMev13dAJalHpxzZqTlEOahGKuk08%2Bo5WVGsgyG%2FkcSrtVtlCgcIlcDAmIMbni4aA7zw%2B1wTu5ipCRNDgdbWRVP6KgxcAg%2BBoP0NTf%2FWgNjfKJzOa1fga2C4ARduHijjIfpCxZDXVr1QG1Jpi6k5wQlkF0limrRgpTtPDmHk&X-Amz-Signature=29f598a93fa4e2afcce20f06123fc4eb04fad7b980ab027727a67c2ab40e2ecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCAJYJ46%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACDZZ733Kmk1BRtI9ddyZTIWKM2ZXWIYRDeTHvBJ6NaAiEA14oVHArdqI0rvq9DNdhNs0%2FeGBcTkoCt1c2Gj1u7Tcwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLJTMPxdRtskRfttjyrcA4qGNySXs0GiWQp1mhmO5iE9wk8iY9eqFPNMFvHOf89JwZ%2FjsKzB0be6TTvRvjUnuF%2F2WlIV6NnW4ruMYfJdxTpdBKLDbs2kaXvYKRV2HtStUc3KVEgH1UAruo5V7A8p2V8Q3ZimXNtVj29d4vJIETUisGiq6kS8fScwoW1818K0ysQA6qFGUGYGSslSlyz5%2BYjW39mJ9MfeNTBTD9BH4jkA1T2hqw19v875HcxjkOIk%2BNT%2Bv1blHw3mxnl8LYwCJ%2Fb1S%2F6%2FedeCHYld90cNGAQSZDV3QcGlfaQq1yaUugHKWWd3PhVPLM8P86qyhfn9gE%2F%2FPL3E5tuS3dxwCk%2Ff1Smk3tT9xHcwKhgg5AudU5ZXE1zjR20oDcKidVPEl5KbL91pLTHChRwP0p%2B6sJDl7Wt4wa154hL%2FlvUBgw%2BhGr1XkVBkvRktgCHQGCsK9UB%2Fbr2jIKfSPiCRlIf30kVm5eemCGTGvFKGrS5agJBCojkQXIB%2FeLofs8N944UjdX5nFJB5aplb4e5O9yosuX6478WqBm8BG183pMSU97KsIlaFNeQETSDIFp4%2BObPP9Fs42Jf8201jckDCdImSV3zIA3VZ0%2FddVZAzaPbM%2Bg%2F0BOG5C93FU4GbKdnSYJHaMKKujs0GOqUBZbqu9iu%2FQDu4fI1RpQ%2FtfIp1Hec%2FMc0EISLiv0FVQtne8kXySZHmxMev13dAJalHpxzZqTlEOahGKuk08%2Bo5WVGsgyG%2FkcSrtVtlCgcIlcDAmIMbni4aA7zw%2B1wTu5ipCRNDgdbWRVP6KgxcAg%2BBoP0NTf%2FWgNjfKJzOa1fga2C4ARduHijjIfpCxZDXVr1QG1Jpi6k5wQlkF0limrRgpTtPDmHk&X-Amz-Signature=f638a1944f7dad0c288d3d95b4dc720d230db4065776e443b7b66b3b7997f025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCAJYJ46%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACDZZ733Kmk1BRtI9ddyZTIWKM2ZXWIYRDeTHvBJ6NaAiEA14oVHArdqI0rvq9DNdhNs0%2FeGBcTkoCt1c2Gj1u7Tcwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLJTMPxdRtskRfttjyrcA4qGNySXs0GiWQp1mhmO5iE9wk8iY9eqFPNMFvHOf89JwZ%2FjsKzB0be6TTvRvjUnuF%2F2WlIV6NnW4ruMYfJdxTpdBKLDbs2kaXvYKRV2HtStUc3KVEgH1UAruo5V7A8p2V8Q3ZimXNtVj29d4vJIETUisGiq6kS8fScwoW1818K0ysQA6qFGUGYGSslSlyz5%2BYjW39mJ9MfeNTBTD9BH4jkA1T2hqw19v875HcxjkOIk%2BNT%2Bv1blHw3mxnl8LYwCJ%2Fb1S%2F6%2FedeCHYld90cNGAQSZDV3QcGlfaQq1yaUugHKWWd3PhVPLM8P86qyhfn9gE%2F%2FPL3E5tuS3dxwCk%2Ff1Smk3tT9xHcwKhgg5AudU5ZXE1zjR20oDcKidVPEl5KbL91pLTHChRwP0p%2B6sJDl7Wt4wa154hL%2FlvUBgw%2BhGr1XkVBkvRktgCHQGCsK9UB%2Fbr2jIKfSPiCRlIf30kVm5eemCGTGvFKGrS5agJBCojkQXIB%2FeLofs8N944UjdX5nFJB5aplb4e5O9yosuX6478WqBm8BG183pMSU97KsIlaFNeQETSDIFp4%2BObPP9Fs42Jf8201jckDCdImSV3zIA3VZ0%2FddVZAzaPbM%2Bg%2F0BOG5C93FU4GbKdnSYJHaMKKujs0GOqUBZbqu9iu%2FQDu4fI1RpQ%2FtfIp1Hec%2FMc0EISLiv0FVQtne8kXySZHmxMev13dAJalHpxzZqTlEOahGKuk08%2Bo5WVGsgyG%2FkcSrtVtlCgcIlcDAmIMbni4aA7zw%2B1wTu5ipCRNDgdbWRVP6KgxcAg%2BBoP0NTf%2FWgNjfKJzOa1fga2C4ARduHijjIfpCxZDXVr1QG1Jpi6k5wQlkF0limrRgpTtPDmHk&X-Amz-Signature=b2df7f1b286859f914953ae82f142fa17c67b97f8f553a9f1b2e59ad1954b796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCAJYJ46%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACDZZ733Kmk1BRtI9ddyZTIWKM2ZXWIYRDeTHvBJ6NaAiEA14oVHArdqI0rvq9DNdhNs0%2FeGBcTkoCt1c2Gj1u7Tcwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLJTMPxdRtskRfttjyrcA4qGNySXs0GiWQp1mhmO5iE9wk8iY9eqFPNMFvHOf89JwZ%2FjsKzB0be6TTvRvjUnuF%2F2WlIV6NnW4ruMYfJdxTpdBKLDbs2kaXvYKRV2HtStUc3KVEgH1UAruo5V7A8p2V8Q3ZimXNtVj29d4vJIETUisGiq6kS8fScwoW1818K0ysQA6qFGUGYGSslSlyz5%2BYjW39mJ9MfeNTBTD9BH4jkA1T2hqw19v875HcxjkOIk%2BNT%2Bv1blHw3mxnl8LYwCJ%2Fb1S%2F6%2FedeCHYld90cNGAQSZDV3QcGlfaQq1yaUugHKWWd3PhVPLM8P86qyhfn9gE%2F%2FPL3E5tuS3dxwCk%2Ff1Smk3tT9xHcwKhgg5AudU5ZXE1zjR20oDcKidVPEl5KbL91pLTHChRwP0p%2B6sJDl7Wt4wa154hL%2FlvUBgw%2BhGr1XkVBkvRktgCHQGCsK9UB%2Fbr2jIKfSPiCRlIf30kVm5eemCGTGvFKGrS5agJBCojkQXIB%2FeLofs8N944UjdX5nFJB5aplb4e5O9yosuX6478WqBm8BG183pMSU97KsIlaFNeQETSDIFp4%2BObPP9Fs42Jf8201jckDCdImSV3zIA3VZ0%2FddVZAzaPbM%2Bg%2F0BOG5C93FU4GbKdnSYJHaMKKujs0GOqUBZbqu9iu%2FQDu4fI1RpQ%2FtfIp1Hec%2FMc0EISLiv0FVQtne8kXySZHmxMev13dAJalHpxzZqTlEOahGKuk08%2Bo5WVGsgyG%2FkcSrtVtlCgcIlcDAmIMbni4aA7zw%2B1wTu5ipCRNDgdbWRVP6KgxcAg%2BBoP0NTf%2FWgNjfKJzOa1fga2C4ARduHijjIfpCxZDXVr1QG1Jpi6k5wQlkF0limrRgpTtPDmHk&X-Amz-Signature=aae87cbff2c03107c039300d745e7fce5289bdf1d351d14444300b53b3c24f9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGGE2255%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICa9Y%2BraWLuPV8vSRxNxjLHFQJOHEMCG2NFu0dO4gIx1AiA6bH%2Bo5%2BJLm%2BlMN79r%2FMMmB06KivGJatIRooboVbdgZSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMoXaSscIdktAxtza3KtwDme3uTQddqzdeHKTpFHw3ZUADd2qUBRm6GkSMa5qIZ1cQcSLREIo49zL4a4hid52TO4r61tOJdadh7MPYcyrVjT7n5C7A7TTtjAmP9TuNBhVEFVRm0EKARr175qSSToPlwiDvDgPNzuU3PedugSFOpwyYOnfIf82PcETcWgqKFJe3CaujqcNUMkBUnJZwdvqmY7vruYBt3ZpDYchFnJCtPsftpOzC8Uh3yVaaegeE64VchxlLMNsQ808SbZjX0dRkhIDmbhFrzvnY%2BdfD2GtfuG6GHTgRUXLvQqtTpUytODbVSXjaNADUvxZ0eeM8AzbUWKXTDf3wn%2B1GxYgLJihssrkTRKkWAk8C0zsgqttSm%2BP0oXGdOhwR3dsxi34hL7MEksQRg0itit%2B99dw0Nghbplm2DiLeqkblwhZm2rl%2BAJ2IlqYvP1CHbRnIMOxaz66tgtZfmuNECCHENzZNJtL%2Fw97bH3Zvq5dKMSCZasDtEqmrHdN1hc2%2BIeDvAiTADI0QGMu9PhpS52TJN6Fnna4PCLm%2BfI1tunCj6QT%2FkioBIp0hscMxE8y6XeowoSJGzzwaO4qDlZ423YV0mtGuSb8AHeNpxYEX8%2BtMMdOZvDf7aJu98logkBfgAV4s%2Bygwpa%2BOzQY6pgGjE%2BAv09py%2Fi1PBYfYIxUpAkICSabo4EcHURnSoSRY5Yh%2F%2Bh1qoK4P93HKpu%2BuZxhK7eN%2BJL2%2BdumSPa0BQPdKwlUAHWBkRQy55UyF7u4bP4eoni9skExX9cNMcyRCbQQeJJ%2FFSBW1mWRNjv6Z3pjEIiVUys1Ec4V2ykTTNkbmBdLmwxw6vhnDvbekrtXJE2QYl2xBZHFkIQOog3ucqR2zMeLO6rvv&X-Amz-Signature=b297c2ef0692519969a32a69adb910437fc924fe01af681b9e7338fa128b94be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCAJYJ46%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACDZZ733Kmk1BRtI9ddyZTIWKM2ZXWIYRDeTHvBJ6NaAiEA14oVHArdqI0rvq9DNdhNs0%2FeGBcTkoCt1c2Gj1u7Tcwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLJTMPxdRtskRfttjyrcA4qGNySXs0GiWQp1mhmO5iE9wk8iY9eqFPNMFvHOf89JwZ%2FjsKzB0be6TTvRvjUnuF%2F2WlIV6NnW4ruMYfJdxTpdBKLDbs2kaXvYKRV2HtStUc3KVEgH1UAruo5V7A8p2V8Q3ZimXNtVj29d4vJIETUisGiq6kS8fScwoW1818K0ysQA6qFGUGYGSslSlyz5%2BYjW39mJ9MfeNTBTD9BH4jkA1T2hqw19v875HcxjkOIk%2BNT%2Bv1blHw3mxnl8LYwCJ%2Fb1S%2F6%2FedeCHYld90cNGAQSZDV3QcGlfaQq1yaUugHKWWd3PhVPLM8P86qyhfn9gE%2F%2FPL3E5tuS3dxwCk%2Ff1Smk3tT9xHcwKhgg5AudU5ZXE1zjR20oDcKidVPEl5KbL91pLTHChRwP0p%2B6sJDl7Wt4wa154hL%2FlvUBgw%2BhGr1XkVBkvRktgCHQGCsK9UB%2Fbr2jIKfSPiCRlIf30kVm5eemCGTGvFKGrS5agJBCojkQXIB%2FeLofs8N944UjdX5nFJB5aplb4e5O9yosuX6478WqBm8BG183pMSU97KsIlaFNeQETSDIFp4%2BObPP9Fs42Jf8201jckDCdImSV3zIA3VZ0%2FddVZAzaPbM%2Bg%2F0BOG5C93FU4GbKdnSYJHaMKKujs0GOqUBZbqu9iu%2FQDu4fI1RpQ%2FtfIp1Hec%2FMc0EISLiv0FVQtne8kXySZHmxMev13dAJalHpxzZqTlEOahGKuk08%2Bo5WVGsgyG%2FkcSrtVtlCgcIlcDAmIMbni4aA7zw%2B1wTu5ipCRNDgdbWRVP6KgxcAg%2BBoP0NTf%2FWgNjfKJzOa1fga2C4ARduHijjIfpCxZDXVr1QG1Jpi6k5wQlkF0limrRgpTtPDmHk&X-Amz-Signature=37c29a4e24fd521fe8f6e52151f9ad1a14e39c686ebf6b63eb9957cd861c2cdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCAJYJ46%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACDZZ733Kmk1BRtI9ddyZTIWKM2ZXWIYRDeTHvBJ6NaAiEA14oVHArdqI0rvq9DNdhNs0%2FeGBcTkoCt1c2Gj1u7Tcwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLJTMPxdRtskRfttjyrcA4qGNySXs0GiWQp1mhmO5iE9wk8iY9eqFPNMFvHOf89JwZ%2FjsKzB0be6TTvRvjUnuF%2F2WlIV6NnW4ruMYfJdxTpdBKLDbs2kaXvYKRV2HtStUc3KVEgH1UAruo5V7A8p2V8Q3ZimXNtVj29d4vJIETUisGiq6kS8fScwoW1818K0ysQA6qFGUGYGSslSlyz5%2BYjW39mJ9MfeNTBTD9BH4jkA1T2hqw19v875HcxjkOIk%2BNT%2Bv1blHw3mxnl8LYwCJ%2Fb1S%2F6%2FedeCHYld90cNGAQSZDV3QcGlfaQq1yaUugHKWWd3PhVPLM8P86qyhfn9gE%2F%2FPL3E5tuS3dxwCk%2Ff1Smk3tT9xHcwKhgg5AudU5ZXE1zjR20oDcKidVPEl5KbL91pLTHChRwP0p%2B6sJDl7Wt4wa154hL%2FlvUBgw%2BhGr1XkVBkvRktgCHQGCsK9UB%2Fbr2jIKfSPiCRlIf30kVm5eemCGTGvFKGrS5agJBCojkQXIB%2FeLofs8N944UjdX5nFJB5aplb4e5O9yosuX6478WqBm8BG183pMSU97KsIlaFNeQETSDIFp4%2BObPP9Fs42Jf8201jckDCdImSV3zIA3VZ0%2FddVZAzaPbM%2Bg%2F0BOG5C93FU4GbKdnSYJHaMKKujs0GOqUBZbqu9iu%2FQDu4fI1RpQ%2FtfIp1Hec%2FMc0EISLiv0FVQtne8kXySZHmxMev13dAJalHpxzZqTlEOahGKuk08%2Bo5WVGsgyG%2FkcSrtVtlCgcIlcDAmIMbni4aA7zw%2B1wTu5ipCRNDgdbWRVP6KgxcAg%2BBoP0NTf%2FWgNjfKJzOa1fga2C4ARduHijjIfpCxZDXVr1QG1Jpi6k5wQlkF0limrRgpTtPDmHk&X-Amz-Signature=972ad14b4efa6f357bfc3fec9c5e7cbd563373dffaf50b1738765bf5c83a1504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCAJYJ46%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACDZZ733Kmk1BRtI9ddyZTIWKM2ZXWIYRDeTHvBJ6NaAiEA14oVHArdqI0rvq9DNdhNs0%2FeGBcTkoCt1c2Gj1u7Tcwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLJTMPxdRtskRfttjyrcA4qGNySXs0GiWQp1mhmO5iE9wk8iY9eqFPNMFvHOf89JwZ%2FjsKzB0be6TTvRvjUnuF%2F2WlIV6NnW4ruMYfJdxTpdBKLDbs2kaXvYKRV2HtStUc3KVEgH1UAruo5V7A8p2V8Q3ZimXNtVj29d4vJIETUisGiq6kS8fScwoW1818K0ysQA6qFGUGYGSslSlyz5%2BYjW39mJ9MfeNTBTD9BH4jkA1T2hqw19v875HcxjkOIk%2BNT%2Bv1blHw3mxnl8LYwCJ%2Fb1S%2F6%2FedeCHYld90cNGAQSZDV3QcGlfaQq1yaUugHKWWd3PhVPLM8P86qyhfn9gE%2F%2FPL3E5tuS3dxwCk%2Ff1Smk3tT9xHcwKhgg5AudU5ZXE1zjR20oDcKidVPEl5KbL91pLTHChRwP0p%2B6sJDl7Wt4wa154hL%2FlvUBgw%2BhGr1XkVBkvRktgCHQGCsK9UB%2Fbr2jIKfSPiCRlIf30kVm5eemCGTGvFKGrS5agJBCojkQXIB%2FeLofs8N944UjdX5nFJB5aplb4e5O9yosuX6478WqBm8BG183pMSU97KsIlaFNeQETSDIFp4%2BObPP9Fs42Jf8201jckDCdImSV3zIA3VZ0%2FddVZAzaPbM%2Bg%2F0BOG5C93FU4GbKdnSYJHaMKKujs0GOqUBZbqu9iu%2FQDu4fI1RpQ%2FtfIp1Hec%2FMc0EISLiv0FVQtne8kXySZHmxMev13dAJalHpxzZqTlEOahGKuk08%2Bo5WVGsgyG%2FkcSrtVtlCgcIlcDAmIMbni4aA7zw%2B1wTu5ipCRNDgdbWRVP6KgxcAg%2BBoP0NTf%2FWgNjfKJzOa1fga2C4ARduHijjIfpCxZDXVr1QG1Jpi6k5wQlkF0limrRgpTtPDmHk&X-Amz-Signature=7678e4b8a68dc5fdac0242d4d0badf72d1071f198e97e1b2aaa994f4f7f60724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCAJYJ46%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACDZZ733Kmk1BRtI9ddyZTIWKM2ZXWIYRDeTHvBJ6NaAiEA14oVHArdqI0rvq9DNdhNs0%2FeGBcTkoCt1c2Gj1u7Tcwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLJTMPxdRtskRfttjyrcA4qGNySXs0GiWQp1mhmO5iE9wk8iY9eqFPNMFvHOf89JwZ%2FjsKzB0be6TTvRvjUnuF%2F2WlIV6NnW4ruMYfJdxTpdBKLDbs2kaXvYKRV2HtStUc3KVEgH1UAruo5V7A8p2V8Q3ZimXNtVj29d4vJIETUisGiq6kS8fScwoW1818K0ysQA6qFGUGYGSslSlyz5%2BYjW39mJ9MfeNTBTD9BH4jkA1T2hqw19v875HcxjkOIk%2BNT%2Bv1blHw3mxnl8LYwCJ%2Fb1S%2F6%2FedeCHYld90cNGAQSZDV3QcGlfaQq1yaUugHKWWd3PhVPLM8P86qyhfn9gE%2F%2FPL3E5tuS3dxwCk%2Ff1Smk3tT9xHcwKhgg5AudU5ZXE1zjR20oDcKidVPEl5KbL91pLTHChRwP0p%2B6sJDl7Wt4wa154hL%2FlvUBgw%2BhGr1XkVBkvRktgCHQGCsK9UB%2Fbr2jIKfSPiCRlIf30kVm5eemCGTGvFKGrS5agJBCojkQXIB%2FeLofs8N944UjdX5nFJB5aplb4e5O9yosuX6478WqBm8BG183pMSU97KsIlaFNeQETSDIFp4%2BObPP9Fs42Jf8201jckDCdImSV3zIA3VZ0%2FddVZAzaPbM%2Bg%2F0BOG5C93FU4GbKdnSYJHaMKKujs0GOqUBZbqu9iu%2FQDu4fI1RpQ%2FtfIp1Hec%2FMc0EISLiv0FVQtne8kXySZHmxMev13dAJalHpxzZqTlEOahGKuk08%2Bo5WVGsgyG%2FkcSrtVtlCgcIlcDAmIMbni4aA7zw%2B1wTu5ipCRNDgdbWRVP6KgxcAg%2BBoP0NTf%2FWgNjfKJzOa1fga2C4ARduHijjIfpCxZDXVr1QG1Jpi6k5wQlkF0limrRgpTtPDmHk&X-Amz-Signature=bbebff29c56a8e676c0cb06652772c75ca026fd0e1355bf356b28b8172d38761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCAJYJ46%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACDZZ733Kmk1BRtI9ddyZTIWKM2ZXWIYRDeTHvBJ6NaAiEA14oVHArdqI0rvq9DNdhNs0%2FeGBcTkoCt1c2Gj1u7Tcwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLJTMPxdRtskRfttjyrcA4qGNySXs0GiWQp1mhmO5iE9wk8iY9eqFPNMFvHOf89JwZ%2FjsKzB0be6TTvRvjUnuF%2F2WlIV6NnW4ruMYfJdxTpdBKLDbs2kaXvYKRV2HtStUc3KVEgH1UAruo5V7A8p2V8Q3ZimXNtVj29d4vJIETUisGiq6kS8fScwoW1818K0ysQA6qFGUGYGSslSlyz5%2BYjW39mJ9MfeNTBTD9BH4jkA1T2hqw19v875HcxjkOIk%2BNT%2Bv1blHw3mxnl8LYwCJ%2Fb1S%2F6%2FedeCHYld90cNGAQSZDV3QcGlfaQq1yaUugHKWWd3PhVPLM8P86qyhfn9gE%2F%2FPL3E5tuS3dxwCk%2Ff1Smk3tT9xHcwKhgg5AudU5ZXE1zjR20oDcKidVPEl5KbL91pLTHChRwP0p%2B6sJDl7Wt4wa154hL%2FlvUBgw%2BhGr1XkVBkvRktgCHQGCsK9UB%2Fbr2jIKfSPiCRlIf30kVm5eemCGTGvFKGrS5agJBCojkQXIB%2FeLofs8N944UjdX5nFJB5aplb4e5O9yosuX6478WqBm8BG183pMSU97KsIlaFNeQETSDIFp4%2BObPP9Fs42Jf8201jckDCdImSV3zIA3VZ0%2FddVZAzaPbM%2Bg%2F0BOG5C93FU4GbKdnSYJHaMKKujs0GOqUBZbqu9iu%2FQDu4fI1RpQ%2FtfIp1Hec%2FMc0EISLiv0FVQtne8kXySZHmxMev13dAJalHpxzZqTlEOahGKuk08%2Bo5WVGsgyG%2FkcSrtVtlCgcIlcDAmIMbni4aA7zw%2B1wTu5ipCRNDgdbWRVP6KgxcAg%2BBoP0NTf%2FWgNjfKJzOa1fga2C4ARduHijjIfpCxZDXVr1QG1Jpi6k5wQlkF0limrRgpTtPDmHk&X-Amz-Signature=a4b4ef65d5cc4506669d0adc17b13a106499bfb67dda440e049702f933712035&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCAJYJ46%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACDZZ733Kmk1BRtI9ddyZTIWKM2ZXWIYRDeTHvBJ6NaAiEA14oVHArdqI0rvq9DNdhNs0%2FeGBcTkoCt1c2Gj1u7Tcwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLJTMPxdRtskRfttjyrcA4qGNySXs0GiWQp1mhmO5iE9wk8iY9eqFPNMFvHOf89JwZ%2FjsKzB0be6TTvRvjUnuF%2F2WlIV6NnW4ruMYfJdxTpdBKLDbs2kaXvYKRV2HtStUc3KVEgH1UAruo5V7A8p2V8Q3ZimXNtVj29d4vJIETUisGiq6kS8fScwoW1818K0ysQA6qFGUGYGSslSlyz5%2BYjW39mJ9MfeNTBTD9BH4jkA1T2hqw19v875HcxjkOIk%2BNT%2Bv1blHw3mxnl8LYwCJ%2Fb1S%2F6%2FedeCHYld90cNGAQSZDV3QcGlfaQq1yaUugHKWWd3PhVPLM8P86qyhfn9gE%2F%2FPL3E5tuS3dxwCk%2Ff1Smk3tT9xHcwKhgg5AudU5ZXE1zjR20oDcKidVPEl5KbL91pLTHChRwP0p%2B6sJDl7Wt4wa154hL%2FlvUBgw%2BhGr1XkVBkvRktgCHQGCsK9UB%2Fbr2jIKfSPiCRlIf30kVm5eemCGTGvFKGrS5agJBCojkQXIB%2FeLofs8N944UjdX5nFJB5aplb4e5O9yosuX6478WqBm8BG183pMSU97KsIlaFNeQETSDIFp4%2BObPP9Fs42Jf8201jckDCdImSV3zIA3VZ0%2FddVZAzaPbM%2Bg%2F0BOG5C93FU4GbKdnSYJHaMKKujs0GOqUBZbqu9iu%2FQDu4fI1RpQ%2FtfIp1Hec%2FMc0EISLiv0FVQtne8kXySZHmxMev13dAJalHpxzZqTlEOahGKuk08%2Bo5WVGsgyG%2FkcSrtVtlCgcIlcDAmIMbni4aA7zw%2B1wTu5ipCRNDgdbWRVP6KgxcAg%2BBoP0NTf%2FWgNjfKJzOa1fga2C4ARduHijjIfpCxZDXVr1QG1Jpi6k5wQlkF0limrRgpTtPDmHk&X-Amz-Signature=7c1acb6f93575dbcae4dc707374bbb21b5199e837fa049f0772b6be1516115bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


