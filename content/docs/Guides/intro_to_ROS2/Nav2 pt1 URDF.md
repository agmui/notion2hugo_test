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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQPNFFQK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCByOezirYgbPXLPNujw2CVvVSMD6%2FLTavopZSgXd8jHAIgB%2BpjJ7PsQEX0e%2Bsk9i2h2OL%2BpYQAFn8A5xZm7KLhP04q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDFFv9wXthGcH2T68OSrcAxyqKYMKZKM9vHkGXgN6LfPHgBNBIeat%2Fl76dJlqT%2FNqBeK4Zi6qqa%2B89lK2MxFZGb8vnV7VxcJRHvYsRrd7NvZeW9sMplncnekQRsZUkxRKadWX4IcSs%2FCwkGA3mXf0Y%2B56vlut3dDCCcL3j882WkYrL%2F0eNK63vM4FGYD7iTmBCoeYgpevIgJwfM8fV9Zj72moMLsOCnKbWC7k3lYcc20z3uuI3uFql1q9c9qwj4pw9hFY8e8nbk6qBLZeDLkEhlIG%2FT2tiQPlRZNjvTjUnfRB7xJPC%2FOuS71J2ZnVAZzIs18pIkYsonkwTzyhfdB3l%2Bq9xi3%2BaotMHEGqeeby6EetVr1Pne39cln6xuz00lvEzXAvIwMZ3mnWdVN32aluYf0BY377CjIoOpvxg7eXWkkMdMXY7K3%2FxcN70adPQAANsjbl8BcK67I88UsS1Zp%2FALyRLXtfHdoWhVTrO655gmZHTZUh4bz%2BMELcStnYhcW0Wv8lJdvBTlOjQakbwGKEPb8kX0QpzMwMui0QsJucmHKn8w2P%2B9wQkMVN54N51BIvGAQsrYiZ6Bd%2B6sqhZ4%2BvWhqX6pzjhTJq46GJvxJdEnISzm7n%2FnMIrnQY8jOV0dIqw34PYpZ%2BjT2Kc7EeMM2r8MQGOqUB7cgjMMWiK4IYxm%2BzA3ZFPPl2TPNudaknHH5Bl1ZaAdk6GZd1hOQroFljQJh8unbk3yQIZPSzh0nNbfOa6DXxCrAkG%2FGDak8HsX956JqDfd3bxmKrWykNr5r9ffojU9mRBdazHtPaCrTdP6YDwWrpP0e%2FlWT%2BsGIy%2Fp%2FOgLoSWIM18XQ%2BAGrwi2ZmUDaBkHZ7sYGenBzFZqCjhEWFLgXRswrV5HGG&X-Amz-Signature=231bd7c0187a128546f8f7516667d684441c0b9b66a762c8c9d3a7fc7901542a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQPNFFQK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCByOezirYgbPXLPNujw2CVvVSMD6%2FLTavopZSgXd8jHAIgB%2BpjJ7PsQEX0e%2Bsk9i2h2OL%2BpYQAFn8A5xZm7KLhP04q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDFFv9wXthGcH2T68OSrcAxyqKYMKZKM9vHkGXgN6LfPHgBNBIeat%2Fl76dJlqT%2FNqBeK4Zi6qqa%2B89lK2MxFZGb8vnV7VxcJRHvYsRrd7NvZeW9sMplncnekQRsZUkxRKadWX4IcSs%2FCwkGA3mXf0Y%2B56vlut3dDCCcL3j882WkYrL%2F0eNK63vM4FGYD7iTmBCoeYgpevIgJwfM8fV9Zj72moMLsOCnKbWC7k3lYcc20z3uuI3uFql1q9c9qwj4pw9hFY8e8nbk6qBLZeDLkEhlIG%2FT2tiQPlRZNjvTjUnfRB7xJPC%2FOuS71J2ZnVAZzIs18pIkYsonkwTzyhfdB3l%2Bq9xi3%2BaotMHEGqeeby6EetVr1Pne39cln6xuz00lvEzXAvIwMZ3mnWdVN32aluYf0BY377CjIoOpvxg7eXWkkMdMXY7K3%2FxcN70adPQAANsjbl8BcK67I88UsS1Zp%2FALyRLXtfHdoWhVTrO655gmZHTZUh4bz%2BMELcStnYhcW0Wv8lJdvBTlOjQakbwGKEPb8kX0QpzMwMui0QsJucmHKn8w2P%2B9wQkMVN54N51BIvGAQsrYiZ6Bd%2B6sqhZ4%2BvWhqX6pzjhTJq46GJvxJdEnISzm7n%2FnMIrnQY8jOV0dIqw34PYpZ%2BjT2Kc7EeMM2r8MQGOqUB7cgjMMWiK4IYxm%2BzA3ZFPPl2TPNudaknHH5Bl1ZaAdk6GZd1hOQroFljQJh8unbk3yQIZPSzh0nNbfOa6DXxCrAkG%2FGDak8HsX956JqDfd3bxmKrWykNr5r9ffojU9mRBdazHtPaCrTdP6YDwWrpP0e%2FlWT%2BsGIy%2Fp%2FOgLoSWIM18XQ%2BAGrwi2ZmUDaBkHZ7sYGenBzFZqCjhEWFLgXRswrV5HGG&X-Amz-Signature=c12f8dc0e631ad0e882a48fa380af6b485a796eada777ed53d686fbce8e21e34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQPNFFQK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCByOezirYgbPXLPNujw2CVvVSMD6%2FLTavopZSgXd8jHAIgB%2BpjJ7PsQEX0e%2Bsk9i2h2OL%2BpYQAFn8A5xZm7KLhP04q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDFFv9wXthGcH2T68OSrcAxyqKYMKZKM9vHkGXgN6LfPHgBNBIeat%2Fl76dJlqT%2FNqBeK4Zi6qqa%2B89lK2MxFZGb8vnV7VxcJRHvYsRrd7NvZeW9sMplncnekQRsZUkxRKadWX4IcSs%2FCwkGA3mXf0Y%2B56vlut3dDCCcL3j882WkYrL%2F0eNK63vM4FGYD7iTmBCoeYgpevIgJwfM8fV9Zj72moMLsOCnKbWC7k3lYcc20z3uuI3uFql1q9c9qwj4pw9hFY8e8nbk6qBLZeDLkEhlIG%2FT2tiQPlRZNjvTjUnfRB7xJPC%2FOuS71J2ZnVAZzIs18pIkYsonkwTzyhfdB3l%2Bq9xi3%2BaotMHEGqeeby6EetVr1Pne39cln6xuz00lvEzXAvIwMZ3mnWdVN32aluYf0BY377CjIoOpvxg7eXWkkMdMXY7K3%2FxcN70adPQAANsjbl8BcK67I88UsS1Zp%2FALyRLXtfHdoWhVTrO655gmZHTZUh4bz%2BMELcStnYhcW0Wv8lJdvBTlOjQakbwGKEPb8kX0QpzMwMui0QsJucmHKn8w2P%2B9wQkMVN54N51BIvGAQsrYiZ6Bd%2B6sqhZ4%2BvWhqX6pzjhTJq46GJvxJdEnISzm7n%2FnMIrnQY8jOV0dIqw34PYpZ%2BjT2Kc7EeMM2r8MQGOqUB7cgjMMWiK4IYxm%2BzA3ZFPPl2TPNudaknHH5Bl1ZaAdk6GZd1hOQroFljQJh8unbk3yQIZPSzh0nNbfOa6DXxCrAkG%2FGDak8HsX956JqDfd3bxmKrWykNr5r9ffojU9mRBdazHtPaCrTdP6YDwWrpP0e%2FlWT%2BsGIy%2Fp%2FOgLoSWIM18XQ%2BAGrwi2ZmUDaBkHZ7sYGenBzFZqCjhEWFLgXRswrV5HGG&X-Amz-Signature=3d26a492f4c9d98b2242f951b0666f30861bb14ca0db5bff0409370ced25327b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQPNFFQK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCByOezirYgbPXLPNujw2CVvVSMD6%2FLTavopZSgXd8jHAIgB%2BpjJ7PsQEX0e%2Bsk9i2h2OL%2BpYQAFn8A5xZm7KLhP04q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDFFv9wXthGcH2T68OSrcAxyqKYMKZKM9vHkGXgN6LfPHgBNBIeat%2Fl76dJlqT%2FNqBeK4Zi6qqa%2B89lK2MxFZGb8vnV7VxcJRHvYsRrd7NvZeW9sMplncnekQRsZUkxRKadWX4IcSs%2FCwkGA3mXf0Y%2B56vlut3dDCCcL3j882WkYrL%2F0eNK63vM4FGYD7iTmBCoeYgpevIgJwfM8fV9Zj72moMLsOCnKbWC7k3lYcc20z3uuI3uFql1q9c9qwj4pw9hFY8e8nbk6qBLZeDLkEhlIG%2FT2tiQPlRZNjvTjUnfRB7xJPC%2FOuS71J2ZnVAZzIs18pIkYsonkwTzyhfdB3l%2Bq9xi3%2BaotMHEGqeeby6EetVr1Pne39cln6xuz00lvEzXAvIwMZ3mnWdVN32aluYf0BY377CjIoOpvxg7eXWkkMdMXY7K3%2FxcN70adPQAANsjbl8BcK67I88UsS1Zp%2FALyRLXtfHdoWhVTrO655gmZHTZUh4bz%2BMELcStnYhcW0Wv8lJdvBTlOjQakbwGKEPb8kX0QpzMwMui0QsJucmHKn8w2P%2B9wQkMVN54N51BIvGAQsrYiZ6Bd%2B6sqhZ4%2BvWhqX6pzjhTJq46GJvxJdEnISzm7n%2FnMIrnQY8jOV0dIqw34PYpZ%2BjT2Kc7EeMM2r8MQGOqUB7cgjMMWiK4IYxm%2BzA3ZFPPl2TPNudaknHH5Bl1ZaAdk6GZd1hOQroFljQJh8unbk3yQIZPSzh0nNbfOa6DXxCrAkG%2FGDak8HsX956JqDfd3bxmKrWykNr5r9ffojU9mRBdazHtPaCrTdP6YDwWrpP0e%2FlWT%2BsGIy%2Fp%2FOgLoSWIM18XQ%2BAGrwi2ZmUDaBkHZ7sYGenBzFZqCjhEWFLgXRswrV5HGG&X-Amz-Signature=8762cd43d498d5fc45d1a4b90396475bb296c12d5ad5b656202390ffe04995e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQPNFFQK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCByOezirYgbPXLPNujw2CVvVSMD6%2FLTavopZSgXd8jHAIgB%2BpjJ7PsQEX0e%2Bsk9i2h2OL%2BpYQAFn8A5xZm7KLhP04q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDFFv9wXthGcH2T68OSrcAxyqKYMKZKM9vHkGXgN6LfPHgBNBIeat%2Fl76dJlqT%2FNqBeK4Zi6qqa%2B89lK2MxFZGb8vnV7VxcJRHvYsRrd7NvZeW9sMplncnekQRsZUkxRKadWX4IcSs%2FCwkGA3mXf0Y%2B56vlut3dDCCcL3j882WkYrL%2F0eNK63vM4FGYD7iTmBCoeYgpevIgJwfM8fV9Zj72moMLsOCnKbWC7k3lYcc20z3uuI3uFql1q9c9qwj4pw9hFY8e8nbk6qBLZeDLkEhlIG%2FT2tiQPlRZNjvTjUnfRB7xJPC%2FOuS71J2ZnVAZzIs18pIkYsonkwTzyhfdB3l%2Bq9xi3%2BaotMHEGqeeby6EetVr1Pne39cln6xuz00lvEzXAvIwMZ3mnWdVN32aluYf0BY377CjIoOpvxg7eXWkkMdMXY7K3%2FxcN70adPQAANsjbl8BcK67I88UsS1Zp%2FALyRLXtfHdoWhVTrO655gmZHTZUh4bz%2BMELcStnYhcW0Wv8lJdvBTlOjQakbwGKEPb8kX0QpzMwMui0QsJucmHKn8w2P%2B9wQkMVN54N51BIvGAQsrYiZ6Bd%2B6sqhZ4%2BvWhqX6pzjhTJq46GJvxJdEnISzm7n%2FnMIrnQY8jOV0dIqw34PYpZ%2BjT2Kc7EeMM2r8MQGOqUB7cgjMMWiK4IYxm%2BzA3ZFPPl2TPNudaknHH5Bl1ZaAdk6GZd1hOQroFljQJh8unbk3yQIZPSzh0nNbfOa6DXxCrAkG%2FGDak8HsX956JqDfd3bxmKrWykNr5r9ffojU9mRBdazHtPaCrTdP6YDwWrpP0e%2FlWT%2BsGIy%2Fp%2FOgLoSWIM18XQ%2BAGrwi2ZmUDaBkHZ7sYGenBzFZqCjhEWFLgXRswrV5HGG&X-Amz-Signature=dd1db3e03a47aa3fb2efe231107ca0e989c3c02c11af1fae304b0fd18e4546cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQPNFFQK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCByOezirYgbPXLPNujw2CVvVSMD6%2FLTavopZSgXd8jHAIgB%2BpjJ7PsQEX0e%2Bsk9i2h2OL%2BpYQAFn8A5xZm7KLhP04q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDFFv9wXthGcH2T68OSrcAxyqKYMKZKM9vHkGXgN6LfPHgBNBIeat%2Fl76dJlqT%2FNqBeK4Zi6qqa%2B89lK2MxFZGb8vnV7VxcJRHvYsRrd7NvZeW9sMplncnekQRsZUkxRKadWX4IcSs%2FCwkGA3mXf0Y%2B56vlut3dDCCcL3j882WkYrL%2F0eNK63vM4FGYD7iTmBCoeYgpevIgJwfM8fV9Zj72moMLsOCnKbWC7k3lYcc20z3uuI3uFql1q9c9qwj4pw9hFY8e8nbk6qBLZeDLkEhlIG%2FT2tiQPlRZNjvTjUnfRB7xJPC%2FOuS71J2ZnVAZzIs18pIkYsonkwTzyhfdB3l%2Bq9xi3%2BaotMHEGqeeby6EetVr1Pne39cln6xuz00lvEzXAvIwMZ3mnWdVN32aluYf0BY377CjIoOpvxg7eXWkkMdMXY7K3%2FxcN70adPQAANsjbl8BcK67I88UsS1Zp%2FALyRLXtfHdoWhVTrO655gmZHTZUh4bz%2BMELcStnYhcW0Wv8lJdvBTlOjQakbwGKEPb8kX0QpzMwMui0QsJucmHKn8w2P%2B9wQkMVN54N51BIvGAQsrYiZ6Bd%2B6sqhZ4%2BvWhqX6pzjhTJq46GJvxJdEnISzm7n%2FnMIrnQY8jOV0dIqw34PYpZ%2BjT2Kc7EeMM2r8MQGOqUB7cgjMMWiK4IYxm%2BzA3ZFPPl2TPNudaknHH5Bl1ZaAdk6GZd1hOQroFljQJh8unbk3yQIZPSzh0nNbfOa6DXxCrAkG%2FGDak8HsX956JqDfd3bxmKrWykNr5r9ffojU9mRBdazHtPaCrTdP6YDwWrpP0e%2FlWT%2BsGIy%2Fp%2FOgLoSWIM18XQ%2BAGrwi2ZmUDaBkHZ7sYGenBzFZqCjhEWFLgXRswrV5HGG&X-Amz-Signature=513e6d0f1e570e49f6b61ff7944a9bbb41d79175523fa1cab64470f1e336e5b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQPNFFQK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCByOezirYgbPXLPNujw2CVvVSMD6%2FLTavopZSgXd8jHAIgB%2BpjJ7PsQEX0e%2Bsk9i2h2OL%2BpYQAFn8A5xZm7KLhP04q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDFFv9wXthGcH2T68OSrcAxyqKYMKZKM9vHkGXgN6LfPHgBNBIeat%2Fl76dJlqT%2FNqBeK4Zi6qqa%2B89lK2MxFZGb8vnV7VxcJRHvYsRrd7NvZeW9sMplncnekQRsZUkxRKadWX4IcSs%2FCwkGA3mXf0Y%2B56vlut3dDCCcL3j882WkYrL%2F0eNK63vM4FGYD7iTmBCoeYgpevIgJwfM8fV9Zj72moMLsOCnKbWC7k3lYcc20z3uuI3uFql1q9c9qwj4pw9hFY8e8nbk6qBLZeDLkEhlIG%2FT2tiQPlRZNjvTjUnfRB7xJPC%2FOuS71J2ZnVAZzIs18pIkYsonkwTzyhfdB3l%2Bq9xi3%2BaotMHEGqeeby6EetVr1Pne39cln6xuz00lvEzXAvIwMZ3mnWdVN32aluYf0BY377CjIoOpvxg7eXWkkMdMXY7K3%2FxcN70adPQAANsjbl8BcK67I88UsS1Zp%2FALyRLXtfHdoWhVTrO655gmZHTZUh4bz%2BMELcStnYhcW0Wv8lJdvBTlOjQakbwGKEPb8kX0QpzMwMui0QsJucmHKn8w2P%2B9wQkMVN54N51BIvGAQsrYiZ6Bd%2B6sqhZ4%2BvWhqX6pzjhTJq46GJvxJdEnISzm7n%2FnMIrnQY8jOV0dIqw34PYpZ%2BjT2Kc7EeMM2r8MQGOqUB7cgjMMWiK4IYxm%2BzA3ZFPPl2TPNudaknHH5Bl1ZaAdk6GZd1hOQroFljQJh8unbk3yQIZPSzh0nNbfOa6DXxCrAkG%2FGDak8HsX956JqDfd3bxmKrWykNr5r9ffojU9mRBdazHtPaCrTdP6YDwWrpP0e%2FlWT%2BsGIy%2Fp%2FOgLoSWIM18XQ%2BAGrwi2ZmUDaBkHZ7sYGenBzFZqCjhEWFLgXRswrV5HGG&X-Amz-Signature=82c98e032eb8daed965d3c72e0e05a6ce139fabc18d8b77cfb2e47443c7e35a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQPNFFQK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCByOezirYgbPXLPNujw2CVvVSMD6%2FLTavopZSgXd8jHAIgB%2BpjJ7PsQEX0e%2Bsk9i2h2OL%2BpYQAFn8A5xZm7KLhP04q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDFFv9wXthGcH2T68OSrcAxyqKYMKZKM9vHkGXgN6LfPHgBNBIeat%2Fl76dJlqT%2FNqBeK4Zi6qqa%2B89lK2MxFZGb8vnV7VxcJRHvYsRrd7NvZeW9sMplncnekQRsZUkxRKadWX4IcSs%2FCwkGA3mXf0Y%2B56vlut3dDCCcL3j882WkYrL%2F0eNK63vM4FGYD7iTmBCoeYgpevIgJwfM8fV9Zj72moMLsOCnKbWC7k3lYcc20z3uuI3uFql1q9c9qwj4pw9hFY8e8nbk6qBLZeDLkEhlIG%2FT2tiQPlRZNjvTjUnfRB7xJPC%2FOuS71J2ZnVAZzIs18pIkYsonkwTzyhfdB3l%2Bq9xi3%2BaotMHEGqeeby6EetVr1Pne39cln6xuz00lvEzXAvIwMZ3mnWdVN32aluYf0BY377CjIoOpvxg7eXWkkMdMXY7K3%2FxcN70adPQAANsjbl8BcK67I88UsS1Zp%2FALyRLXtfHdoWhVTrO655gmZHTZUh4bz%2BMELcStnYhcW0Wv8lJdvBTlOjQakbwGKEPb8kX0QpzMwMui0QsJucmHKn8w2P%2B9wQkMVN54N51BIvGAQsrYiZ6Bd%2B6sqhZ4%2BvWhqX6pzjhTJq46GJvxJdEnISzm7n%2FnMIrnQY8jOV0dIqw34PYpZ%2BjT2Kc7EeMM2r8MQGOqUB7cgjMMWiK4IYxm%2BzA3ZFPPl2TPNudaknHH5Bl1ZaAdk6GZd1hOQroFljQJh8unbk3yQIZPSzh0nNbfOa6DXxCrAkG%2FGDak8HsX956JqDfd3bxmKrWykNr5r9ffojU9mRBdazHtPaCrTdP6YDwWrpP0e%2FlWT%2BsGIy%2Fp%2FOgLoSWIM18XQ%2BAGrwi2ZmUDaBkHZ7sYGenBzFZqCjhEWFLgXRswrV5HGG&X-Amz-Signature=0f1fd5a0fabe4e3b5f08c83096bc166df9746ee339a0a7eb6549fc49954692e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQPNFFQK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCByOezirYgbPXLPNujw2CVvVSMD6%2FLTavopZSgXd8jHAIgB%2BpjJ7PsQEX0e%2Bsk9i2h2OL%2BpYQAFn8A5xZm7KLhP04q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDFFv9wXthGcH2T68OSrcAxyqKYMKZKM9vHkGXgN6LfPHgBNBIeat%2Fl76dJlqT%2FNqBeK4Zi6qqa%2B89lK2MxFZGb8vnV7VxcJRHvYsRrd7NvZeW9sMplncnekQRsZUkxRKadWX4IcSs%2FCwkGA3mXf0Y%2B56vlut3dDCCcL3j882WkYrL%2F0eNK63vM4FGYD7iTmBCoeYgpevIgJwfM8fV9Zj72moMLsOCnKbWC7k3lYcc20z3uuI3uFql1q9c9qwj4pw9hFY8e8nbk6qBLZeDLkEhlIG%2FT2tiQPlRZNjvTjUnfRB7xJPC%2FOuS71J2ZnVAZzIs18pIkYsonkwTzyhfdB3l%2Bq9xi3%2BaotMHEGqeeby6EetVr1Pne39cln6xuz00lvEzXAvIwMZ3mnWdVN32aluYf0BY377CjIoOpvxg7eXWkkMdMXY7K3%2FxcN70adPQAANsjbl8BcK67I88UsS1Zp%2FALyRLXtfHdoWhVTrO655gmZHTZUh4bz%2BMELcStnYhcW0Wv8lJdvBTlOjQakbwGKEPb8kX0QpzMwMui0QsJucmHKn8w2P%2B9wQkMVN54N51BIvGAQsrYiZ6Bd%2B6sqhZ4%2BvWhqX6pzjhTJq46GJvxJdEnISzm7n%2FnMIrnQY8jOV0dIqw34PYpZ%2BjT2Kc7EeMM2r8MQGOqUB7cgjMMWiK4IYxm%2BzA3ZFPPl2TPNudaknHH5Bl1ZaAdk6GZd1hOQroFljQJh8unbk3yQIZPSzh0nNbfOa6DXxCrAkG%2FGDak8HsX956JqDfd3bxmKrWykNr5r9ffojU9mRBdazHtPaCrTdP6YDwWrpP0e%2FlWT%2BsGIy%2Fp%2FOgLoSWIM18XQ%2BAGrwi2ZmUDaBkHZ7sYGenBzFZqCjhEWFLgXRswrV5HGG&X-Amz-Signature=1293cfb9d7c645085ce6397fa4e04dcd69e237b07a0e0ddfb1c437c353dee1c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQPNFFQK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCByOezirYgbPXLPNujw2CVvVSMD6%2FLTavopZSgXd8jHAIgB%2BpjJ7PsQEX0e%2Bsk9i2h2OL%2BpYQAFn8A5xZm7KLhP04q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDFFv9wXthGcH2T68OSrcAxyqKYMKZKM9vHkGXgN6LfPHgBNBIeat%2Fl76dJlqT%2FNqBeK4Zi6qqa%2B89lK2MxFZGb8vnV7VxcJRHvYsRrd7NvZeW9sMplncnekQRsZUkxRKadWX4IcSs%2FCwkGA3mXf0Y%2B56vlut3dDCCcL3j882WkYrL%2F0eNK63vM4FGYD7iTmBCoeYgpevIgJwfM8fV9Zj72moMLsOCnKbWC7k3lYcc20z3uuI3uFql1q9c9qwj4pw9hFY8e8nbk6qBLZeDLkEhlIG%2FT2tiQPlRZNjvTjUnfRB7xJPC%2FOuS71J2ZnVAZzIs18pIkYsonkwTzyhfdB3l%2Bq9xi3%2BaotMHEGqeeby6EetVr1Pne39cln6xuz00lvEzXAvIwMZ3mnWdVN32aluYf0BY377CjIoOpvxg7eXWkkMdMXY7K3%2FxcN70adPQAANsjbl8BcK67I88UsS1Zp%2FALyRLXtfHdoWhVTrO655gmZHTZUh4bz%2BMELcStnYhcW0Wv8lJdvBTlOjQakbwGKEPb8kX0QpzMwMui0QsJucmHKn8w2P%2B9wQkMVN54N51BIvGAQsrYiZ6Bd%2B6sqhZ4%2BvWhqX6pzjhTJq46GJvxJdEnISzm7n%2FnMIrnQY8jOV0dIqw34PYpZ%2BjT2Kc7EeMM2r8MQGOqUB7cgjMMWiK4IYxm%2BzA3ZFPPl2TPNudaknHH5Bl1ZaAdk6GZd1hOQroFljQJh8unbk3yQIZPSzh0nNbfOa6DXxCrAkG%2FGDak8HsX956JqDfd3bxmKrWykNr5r9ffojU9mRBdazHtPaCrTdP6YDwWrpP0e%2FlWT%2BsGIy%2Fp%2FOgLoSWIM18XQ%2BAGrwi2ZmUDaBkHZ7sYGenBzFZqCjhEWFLgXRswrV5HGG&X-Amz-Signature=cc20972fdc684720a24cef9d7d297f90b5385f0e103b447eb726557d86ea1ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTNK2GLX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsTQZ%2BXJl6eNwKkzcNkYpJ3gSScCO6doFOX9cyaje56wIhAKxmoiyBlZ9gSK9yA0C0Bu1Wk6SpQomYIHSZDYn00qJsKv8DCCYQABoMNjM3NDIzMTgzODA1Igwx8AWHyp96iBDj01kq3ANzCXdNm2YSI5Yl7ekAPnQ8ClX%2BDKGfiiYYvgsN98USNrBl7DbwROnw4yqHnccwFc3BP%2BnxmkCuipjLhQ3%2F57t4HUkJJTILzbAmOBrtuNdWFgDa0%2FyPllG7skaTZLQI6D%2FkMWfmIQdUeLNDxSWXljp4SxRVfraA0xtElCJGkagPPZEXMHelPxOoE%2BEfzpF3YKw4nUR35K69rv5jfi5stpobwmip6byoqT59ZeKpxbPX6w0EB%2FDNulxlln7NOKBCI7SRKjPkOA4FutOc3nOo7X4FMfAHCei0ZIjX%2Bl0LY%2BoJiq116ajpNocGGZBuFw%2FxOhoVQ33g5X7OZzNt728NkQifTQz7OKs%2BMp2K1Fzm224IgIuo5ZEZRMRqvGq%2FEozwBNI9Z%2BBruQBQdvVT6CJ5ko0PBWjqVPnnje3ji3pJLk%2FVpWIwUfTWvYnXNJBRRI46VV17%2BdAqWW9tKfrdjGuXnh3VaPyo1Ii6zjVr7nx2XBsMT8VIr%2BQ1IwEmwaJXtJdvztjIOkAoh0%2B6TO6UByUDQxOVY7HNePQWpzUcgw7Lp8inQoSlVDdlm0RXVBoYcCl0oaEuFhs9VVnW%2FsD5xUPv317F7G4BJXsDpNMTPputgHSv9oAU78jQ6u16DDKQQjDlqvDEBjqkAeu4Ch%2F1ndidMqWp264ffoBtbDoG7SmUTPVqOY%2BaDRPdTLqFSP3ZJ%2F7i07r1qERIYmwvL6fU4vsybbPlqWnk1jfa3M2XxTEtGVO4i5uI3sywn%2Bn8k25nfB7%2FQgoBZRi0nY1D9DUxJT1HlPxJINVv9By6ZuEiCDJWB4In0wPwHOXaYUHzNemK473Xy69HCFoNiwH%2Bj42RjGdG045zobCaDjn9S%2B13&X-Amz-Signature=4fcccd9c43eb2d9834b9522f067cc8e041b1124accff4e6f0630102562d43dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFMHZT24%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJtM4TL3oUDE2SOF7NVnZfQqdmRTPUcTpMIh1W7%2Ba%2BXwIgQAVIZIblbtUZ%2FmIPoBrG0EAe2SO3%2BUkUQQr1eHXYaNIq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDIOpbK%2B93RcoqUhCJyrcA86CJLBScSNieVk1kLgZ4E0qb0TYLH8wx%2FqPEQUuVIdtoCvXaQVv%2Fjq3qSSgh49e2tH0mh5JMxUJpt90n%2Fw%2BHxu9%2FGJ%2F3Ah0owbPij%2ByTVcEACeeBPovdDp3Y34xkpt%2Fwf%2FFnt8KQAS0sKq9J%2FQeKUYGMN%2BG%2BeqpFtSBRXOnMBfA%2B0DiSyfCiTHdJ5QzB90ILRUiYSA1oPzgIUe8NE6uQGS6z29TCyo5NQPgIZRMzOgHjUkqYmNZmtocssvA7bA2SFYjLOiZT6HU49xw0Ni0lYu%2B6ckHM9Y1KoB2JAaESCQCSTSieazPuSZVORcMTAl7ERCgHKSjrrzBYqWqo5eaJFwYNoezeh48asC6WfaH%2F2mG7q04jQ3WMA6e3Dr4y3ospMmPc9DFLgXVn0J36t2n%2B9WiUwCZXGQky%2Bv%2FHIQzn%2F8glAWyjzSMUDdFrZxo7VFSqyUe5A2Fw%2BOKldKANHRFEfLD9UhvbK48lleT2Yd%2FKpuhxxN0xMKuL1n7B%2FVCvCtEMoNAVncy%2Bbp7cX3GrDhXOOws3VJt%2B5XINFqovLCdP%2BbfTBK79gCN%2Foyo7mSh2iADpyuuyTp9FKEEvB890ND7v0q%2FN4kNKnQgC0dKWQYQQwzgJ6osAnjBdRsTllsiMOqr8MQGOqUBxU3WBDcl%2Fpq0ehce3wUG7e8h%2BGxjwBHik2kUQPO68DDXJVjCo72%2BMSamp2x9GJiAhyFURk%2FzMP3bJNFrxZc7mfpVtohtiqOISAm27lyOiDt%2BbELoxwkZ0k%2FT%2BBdlsNb8wPso2Ey8drsAKzoUu%2BhpkKiWK7iaKKTemUr1p5rTw2%2BPVnkySRMvilnp3xs7sL7EoEvjvRLFu9T3UG1BNdUxeOKhmc8K&X-Amz-Signature=47073b2113e4b1f123adba5d889eb20762ebaddc3dd5f1f0273300a208456c1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AII54DY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV1O34afJah%2FKizPwx%2FUM8Z%2Bp6bieZZ6xfH1fAyiP%2BbgIhAIaAdIUmd8pSQeoyawz%2FPBembs33cUiucGgkmIzEQk5WKv8DCCYQABoMNjM3NDIzMTgzODA1IgwbdYn4truW1gSoWM0q3AOeTxvaxHCncu9W7tjNNTSZZhsjqpkyQ38LMD9OQU1IauGnVlJqBGvPo%2Be9h9l%2B4eT1M%2BbRfrXWCspnmrmLhdUMzxXhOtANIeCx16b2wr67VRKjKQR%2FbCoa61dJQ06sgB0dJzTc2kqmmtCa%2FscAyh6ArOWamfHkr9hJUr70zQle%2BJ%2B3Tn0LFEBdi0eFqa5gY%2BH7%2BzQsMXgrr8uZS76ApOMtWbKuJnRplSwJwXK5A2jvfynHpCCFRPe3dEfVz14EFxiJkc%2FmFW2DJec5AgTLBmxTiYjAYoLpaw8EggeLWOjvC6psJsBu4Nt9N2Ov%2B3jYBR6YxiTmaFS%2FEy0arqLwhOo1BayFhWpp%2FdjCbnx4MDnFjQUCCn2wp40TigEYRRYDFtQ%2BZP0UGJR1QrpJvNXhoME6ZClC4k82fb3%2Fr%2FviuJuVtM3Mlz8n4bElWiUW2mHK%2BryDgU40Nd2M1cx8eROuRWSYm8yBmjm2R70e1WSaLwpRMKE5ZdSjd%2BQmvrSYoqViV%2F9W2RGNQLR2TPp44sROQDMJRTeqw9Fe5F5sNtRGq9VFKwFetPu%2B2%2BJYrPs8G3DD%2F3yXBnbPYJKW%2BnmTqlT4AhHPdCoLlFPrbcVoXK7ilh4FaL8CAPfvCcU34X%2Bm7jCvq%2FDEBjqkAWOko835WfckyEidejPKEIvZWjYf8TWNqhQpifYokDoj7l2Vm8VPDaS2KfwObaEc9iLD4qfUTbHY6YDccSKLKdTWH%2FTtse%2FmY%2FP2%2F7OoBEW5Fb1xNO1rAnBZVTE7mWDt68qfar7ys58T4iWqGZBilrQmRrJly%2FAMT1WhglfiQMhw0jwwrP%2B9eEDhV521nXp9J13YUfHTdD5x6Q%2BKYnfUrxt2opnw&X-Amz-Signature=2b1281f3184a4f893528226a0dfc81ea5ef790c6f3446109539330afbf547a08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQPNFFQK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCByOezirYgbPXLPNujw2CVvVSMD6%2FLTavopZSgXd8jHAIgB%2BpjJ7PsQEX0e%2Bsk9i2h2OL%2BpYQAFn8A5xZm7KLhP04q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDFFv9wXthGcH2T68OSrcAxyqKYMKZKM9vHkGXgN6LfPHgBNBIeat%2Fl76dJlqT%2FNqBeK4Zi6qqa%2B89lK2MxFZGb8vnV7VxcJRHvYsRrd7NvZeW9sMplncnekQRsZUkxRKadWX4IcSs%2FCwkGA3mXf0Y%2B56vlut3dDCCcL3j882WkYrL%2F0eNK63vM4FGYD7iTmBCoeYgpevIgJwfM8fV9Zj72moMLsOCnKbWC7k3lYcc20z3uuI3uFql1q9c9qwj4pw9hFY8e8nbk6qBLZeDLkEhlIG%2FT2tiQPlRZNjvTjUnfRB7xJPC%2FOuS71J2ZnVAZzIs18pIkYsonkwTzyhfdB3l%2Bq9xi3%2BaotMHEGqeeby6EetVr1Pne39cln6xuz00lvEzXAvIwMZ3mnWdVN32aluYf0BY377CjIoOpvxg7eXWkkMdMXY7K3%2FxcN70adPQAANsjbl8BcK67I88UsS1Zp%2FALyRLXtfHdoWhVTrO655gmZHTZUh4bz%2BMELcStnYhcW0Wv8lJdvBTlOjQakbwGKEPb8kX0QpzMwMui0QsJucmHKn8w2P%2B9wQkMVN54N51BIvGAQsrYiZ6Bd%2B6sqhZ4%2BvWhqX6pzjhTJq46GJvxJdEnISzm7n%2FnMIrnQY8jOV0dIqw34PYpZ%2BjT2Kc7EeMM2r8MQGOqUB7cgjMMWiK4IYxm%2BzA3ZFPPl2TPNudaknHH5Bl1ZaAdk6GZd1hOQroFljQJh8unbk3yQIZPSzh0nNbfOa6DXxCrAkG%2FGDak8HsX956JqDfd3bxmKrWykNr5r9ffojU9mRBdazHtPaCrTdP6YDwWrpP0e%2FlWT%2BsGIy%2Fp%2FOgLoSWIM18XQ%2BAGrwi2ZmUDaBkHZ7sYGenBzFZqCjhEWFLgXRswrV5HGG&X-Amz-Signature=e76c7960bf25c09e84e3446ffbe6b74c4625d732ac6d12ecbab4cf5c74879f3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY2QU5FY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpwZoZ9aHxWvjXF9GGPolx7ub4PrDEULZd%2FRsrq0P5DwIgXv5r05ZsLLhGaaj6r0%2B3k%2Fi6LsmParKo7C8hHP6RieMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDB7bPZA2txkOYTP0cCrcA8ryCHKQeUFbGMDYTLVvP%2BuFIsNtrQDD8xi95grfBCXC0N23VIGKJsMhPbnljBjdZZjfYbY1SFeKXUM1fyNMVrobusp2SXqDdKei7HTitI2uNlsgHuXsCQY7rEgiHBXFe7R3BkTewqQ78R67N2GcJV6hosVpUJO9SYdbn36ePfrUSxfSWum3eA1ockrZWDZU7i7OK%2F3t53bsf6aZP6MvVNL4q4kizpywNYMPEJZkgUG1qZxC5uPW3XkzuzNbhFM2q2I1IOP1MajOKAlFUoCKH1CHf1zrUAB2U2HR9wiQ%2BPOy4CkRW0EVpztiC%2BpXgjhttzhB5O7jGTWf3iVl4rK90VVhEbHw97TX5gCfAXnnGfGYMqcjLU30hwoCsfaBL%2BSI7WgkTBn6ru4GBhbZbE%2BOqFVEq9UAzxzcsOFimbO5Qxki%2F7HLAYFv%2Bfb4hh0R8caBhIJhwUNKDXUmkV%2BuxLvyHfDnUFNCtDL64aNUxEUXXcE4HSwgjGiT%2F%2FIkghxGw8%2F5ANaHZpTtRP3OqXdOT1JUZIMq%2BaIwsa5y%2BPHdyOQDGwSHjY42UBdS9GN98ATJnYdyO1GWGwxHBiD7pc%2FMdgbWOqeBCuIaI0AvhYtkuHGhjMp4jpj4Sc8SQIAMsTUTMIyr8MQGOqUBUlN%2Fnu0B%2BxtN8W3g5%2BFgikCBVm83%2Fe3ryZBYuhD9Y95hq7eZudsjaGTltQPA0c9GOLMKSeES9FRsybE8iYux84MYkqa%2F7IYarTIW9NJyCclI3oJgioOJaMUavKz7CczygozexN43B25BxDB%2F43Zua1txoONCZmbLz3N4%2FRy%2Bxysc3XlTs%2Fs5Jdf0hoDXVhRisT9fumcFnrHudj8BrjbeUOpZtyWJ&X-Amz-Signature=f9503541be2bfb805316f0ecc3b281ea5045e32754c35b867514898a1ae47a09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQPNFFQK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCByOezirYgbPXLPNujw2CVvVSMD6%2FLTavopZSgXd8jHAIgB%2BpjJ7PsQEX0e%2Bsk9i2h2OL%2BpYQAFn8A5xZm7KLhP04q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDFFv9wXthGcH2T68OSrcAxyqKYMKZKM9vHkGXgN6LfPHgBNBIeat%2Fl76dJlqT%2FNqBeK4Zi6qqa%2B89lK2MxFZGb8vnV7VxcJRHvYsRrd7NvZeW9sMplncnekQRsZUkxRKadWX4IcSs%2FCwkGA3mXf0Y%2B56vlut3dDCCcL3j882WkYrL%2F0eNK63vM4FGYD7iTmBCoeYgpevIgJwfM8fV9Zj72moMLsOCnKbWC7k3lYcc20z3uuI3uFql1q9c9qwj4pw9hFY8e8nbk6qBLZeDLkEhlIG%2FT2tiQPlRZNjvTjUnfRB7xJPC%2FOuS71J2ZnVAZzIs18pIkYsonkwTzyhfdB3l%2Bq9xi3%2BaotMHEGqeeby6EetVr1Pne39cln6xuz00lvEzXAvIwMZ3mnWdVN32aluYf0BY377CjIoOpvxg7eXWkkMdMXY7K3%2FxcN70adPQAANsjbl8BcK67I88UsS1Zp%2FALyRLXtfHdoWhVTrO655gmZHTZUh4bz%2BMELcStnYhcW0Wv8lJdvBTlOjQakbwGKEPb8kX0QpzMwMui0QsJucmHKn8w2P%2B9wQkMVN54N51BIvGAQsrYiZ6Bd%2B6sqhZ4%2BvWhqX6pzjhTJq46GJvxJdEnISzm7n%2FnMIrnQY8jOV0dIqw34PYpZ%2BjT2Kc7EeMM2r8MQGOqUB7cgjMMWiK4IYxm%2BzA3ZFPPl2TPNudaknHH5Bl1ZaAdk6GZd1hOQroFljQJh8unbk3yQIZPSzh0nNbfOa6DXxCrAkG%2FGDak8HsX956JqDfd3bxmKrWykNr5r9ffojU9mRBdazHtPaCrTdP6YDwWrpP0e%2FlWT%2BsGIy%2Fp%2FOgLoSWIM18XQ%2BAGrwi2ZmUDaBkHZ7sYGenBzFZqCjhEWFLgXRswrV5HGG&X-Amz-Signature=8058e2231e44d78188cdbb6d772b7b44e4d0c7206757de5be0a209d4cadef6bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZU2XLBJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzPub4RXlMslwisaz89pqYFRtKWENdnLcYGlriL2MXqAIgR0jvzXnU7Qmh1jKjUPIu7Md70NjoiVyJNWoHg%2BY9daIq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDB38oLPmPNlaHH25dSrcA69TiZhM9Xd2DcRxtce73EdzzYVXqLBqbWc5bk0YFhRsboBRapKEN33qjeTj93R6XqgmmZRcu6weaHinhIvRqoAFlzTBGmTVL82zhGafP2L4ZiMq4xQkYy4MlLxvIOV1GDsXPq1qAlR%2B3hpGy4KCBHJIsZhH2t%2Bt1FlgoRppS%2F%2BDILY3HDM3MxoqUMH6btuFAD%2BZxPoFdKkvNxjrqiYvry34Uf89h2CuTnmMi2C2y59LgoOcBocGO8Aqq%2FSEov07BojY8qM9P2QRhVpaKvqefl1ldJ3EeUG1SlwugvAWt%2BjiuJZXVmyK6amJ%2BSH3F8Iue2C%2B9XzJDbWDfiCWekXmORX2hXWaBPAurnzlGtMQpTYMRd%2FEepJmv8ox%2FWHu2KgAFAd6dNVcw%2Br0M1vl2JV1YyVqQQ7rXR7LyDx6Fz8mGlb066jzPvya8XTcX1yF5DM5Ll9uhAohu9Q2lgSiWl%2FTdGd401SAOVwFgj0jHS0NW96JLPy44cKcnD%2BOi9N6YMVOGMs%2B3ZoCTCAgSw176d0LdiloCF6ytfoRK6ng93Z9%2B1Lcm3TVgJvZH38v45f7pksk31Zz2E2ksVSLm4SdZdtgzw%2F%2Fgos4ZBk1aue95QdetHgAXR6y9eBmLiHQ%2BWItMJWr8MQGOqUBTGZexTT1tHqp06zVWwA44d3qMy2RjdQ8QaO3eE%2BNAag48bgpXfTBH3dX%2FYcG2ckDJeMJUjmatQ32EcYsIxetCX3HdRbm5QfWlm6oMQjx9uNzixwZHCkOqVDz0Rqtj51C%2F%2FMdGYND1gJUJN0AcBCovBHtOY%2Fy8iQQZ2VWpKMeG9SI4g%2BUrU7PbnV9WUOVBWUiwcxDHTblO0mdabWyBPQgeyaYA3rQ&X-Amz-Signature=d6d9213fcaea89fd5bbd21fc46ec0f4eaee5f3b8564472469d8207b3ded2b4d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQPNFFQK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCByOezirYgbPXLPNujw2CVvVSMD6%2FLTavopZSgXd8jHAIgB%2BpjJ7PsQEX0e%2Bsk9i2h2OL%2BpYQAFn8A5xZm7KLhP04q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDFFv9wXthGcH2T68OSrcAxyqKYMKZKM9vHkGXgN6LfPHgBNBIeat%2Fl76dJlqT%2FNqBeK4Zi6qqa%2B89lK2MxFZGb8vnV7VxcJRHvYsRrd7NvZeW9sMplncnekQRsZUkxRKadWX4IcSs%2FCwkGA3mXf0Y%2B56vlut3dDCCcL3j882WkYrL%2F0eNK63vM4FGYD7iTmBCoeYgpevIgJwfM8fV9Zj72moMLsOCnKbWC7k3lYcc20z3uuI3uFql1q9c9qwj4pw9hFY8e8nbk6qBLZeDLkEhlIG%2FT2tiQPlRZNjvTjUnfRB7xJPC%2FOuS71J2ZnVAZzIs18pIkYsonkwTzyhfdB3l%2Bq9xi3%2BaotMHEGqeeby6EetVr1Pne39cln6xuz00lvEzXAvIwMZ3mnWdVN32aluYf0BY377CjIoOpvxg7eXWkkMdMXY7K3%2FxcN70adPQAANsjbl8BcK67I88UsS1Zp%2FALyRLXtfHdoWhVTrO655gmZHTZUh4bz%2BMELcStnYhcW0Wv8lJdvBTlOjQakbwGKEPb8kX0QpzMwMui0QsJucmHKn8w2P%2B9wQkMVN54N51BIvGAQsrYiZ6Bd%2B6sqhZ4%2BvWhqX6pzjhTJq46GJvxJdEnISzm7n%2FnMIrnQY8jOV0dIqw34PYpZ%2BjT2Kc7EeMM2r8MQGOqUB7cgjMMWiK4IYxm%2BzA3ZFPPl2TPNudaknHH5Bl1ZaAdk6GZd1hOQroFljQJh8unbk3yQIZPSzh0nNbfOa6DXxCrAkG%2FGDak8HsX956JqDfd3bxmKrWykNr5r9ffojU9mRBdazHtPaCrTdP6YDwWrpP0e%2FlWT%2BsGIy%2Fp%2FOgLoSWIM18XQ%2BAGrwi2ZmUDaBkHZ7sYGenBzFZqCjhEWFLgXRswrV5HGG&X-Amz-Signature=09a89b166516480b0fc8c1f296a8c449016280db3bb845a5c9d832fac93c03a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZJPQ6OR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsXzUTs69hkchDVlypmqPIai82SlQBlSg7OmRXhYJBCgIgfpwYxZKKGBQOg3gJrBKMGgSb%2Bz5bS3tS%2BmR5U9lmIwIq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDGpy%2B7%2FvkW9H8yQdaSrcA8S8%2BM%2FMOVXFvlkYxFeTDHs433M70lJ%2Bfv24w%2BE5yNZ8Qe37IDDVwfB06MvtNM2HYw0iCYcKzOQ9NGhRli0wTbcD9qf%2BRtxOZmhPpGseS%2BXudf88328%2Bzc6AmHdS%2FKDAJdOjzd9j5g%2FBVZhzl%2FNuvDzdnCmg8LT7SpFLQLa2%2FeUUUz6wB14SdvQTE1gzXAGTKAmMsbFq2qLyFooX2JZNEGSLsXUudWerWxzW0yn22Vij6fB2z62nKNtKCwKKVZOf3SAo8j7AvNUSve%2BtT%2FPZf9YN9E18GMzOLJRJLyEySQivSDKHIkV8EgF4JHw4vAbA26Y2ifzjq99sdiLHh9kV%2BlObnbIPd%2F0vErnXwXjywqMM8d1twdX8qUTVYlcDcrp5tlObl4IEWPmFdZS8MCf4ZoyP0zX7WyCtlyNbzkurNM42g3vdSbQrLPS5h25nHt8hYZBilCH6AAx99Rh0rpA6eY35I0TRb4xpmXrzNgWGsTzbKXLcRjR1Gbx5LBgK6HhfK72WQ6rLXb51JoC03qHwilmIA5FFKytomJ5qUZtrFVBqZtpJlQHejPetfdgZPqveg6fjvwhaXjL%2FT4%2BVHOmvqWInJK8VSV8MJ6IgEE%2BHdw7mePpsVHXQr6GQDnSTMOar8MQGOqUBeWD%2BtuChkQztdaI82ztgTVQ8vz%2FJKwmXpPJAejmrv0FlBGsjHQZZd%2B7rk12bqH5Me8V047ilb8NLNVzGPizU06IpCr6gBfLpIyzXsFx3%2FEJCjJ0nbryucjfac5IcCWUNCLlF%2BPc%2Fb4ms172Tb8u%2BG2DcvF7PaQw8DnWclogFTRM%2FrmASnqqzYS5lpvTJLvh4WXsN7Ya3yE%2B2zXn4X2pji4xUAr3E&X-Amz-Signature=3e7f20565dcd87a84453b7b0efa85511bc67e184458ce863f8646f21561a95ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQPNFFQK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCByOezirYgbPXLPNujw2CVvVSMD6%2FLTavopZSgXd8jHAIgB%2BpjJ7PsQEX0e%2Bsk9i2h2OL%2BpYQAFn8A5xZm7KLhP04q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDFFv9wXthGcH2T68OSrcAxyqKYMKZKM9vHkGXgN6LfPHgBNBIeat%2Fl76dJlqT%2FNqBeK4Zi6qqa%2B89lK2MxFZGb8vnV7VxcJRHvYsRrd7NvZeW9sMplncnekQRsZUkxRKadWX4IcSs%2FCwkGA3mXf0Y%2B56vlut3dDCCcL3j882WkYrL%2F0eNK63vM4FGYD7iTmBCoeYgpevIgJwfM8fV9Zj72moMLsOCnKbWC7k3lYcc20z3uuI3uFql1q9c9qwj4pw9hFY8e8nbk6qBLZeDLkEhlIG%2FT2tiQPlRZNjvTjUnfRB7xJPC%2FOuS71J2ZnVAZzIs18pIkYsonkwTzyhfdB3l%2Bq9xi3%2BaotMHEGqeeby6EetVr1Pne39cln6xuz00lvEzXAvIwMZ3mnWdVN32aluYf0BY377CjIoOpvxg7eXWkkMdMXY7K3%2FxcN70adPQAANsjbl8BcK67I88UsS1Zp%2FALyRLXtfHdoWhVTrO655gmZHTZUh4bz%2BMELcStnYhcW0Wv8lJdvBTlOjQakbwGKEPb8kX0QpzMwMui0QsJucmHKn8w2P%2B9wQkMVN54N51BIvGAQsrYiZ6Bd%2B6sqhZ4%2BvWhqX6pzjhTJq46GJvxJdEnISzm7n%2FnMIrnQY8jOV0dIqw34PYpZ%2BjT2Kc7EeMM2r8MQGOqUB7cgjMMWiK4IYxm%2BzA3ZFPPl2TPNudaknHH5Bl1ZaAdk6GZd1hOQroFljQJh8unbk3yQIZPSzh0nNbfOa6DXxCrAkG%2FGDak8HsX956JqDfd3bxmKrWykNr5r9ffojU9mRBdazHtPaCrTdP6YDwWrpP0e%2FlWT%2BsGIy%2Fp%2FOgLoSWIM18XQ%2BAGrwi2ZmUDaBkHZ7sYGenBzFZqCjhEWFLgXRswrV5HGG&X-Amz-Signature=e4764778a929336d7eda489599bb534a1d7563ef6ebff26c82d5365ea99a331a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PASIVX2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR1oa4Wf3atj%2F2g5Xse7GI55PCUp2mSqsXKHf7UvsG4AiAK%2B4ZTYlvklylAw9hh20xTpRJmrhMS1N%2FqxOioOSQY%2BSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMeEpkn8mfxZfvZtRfKtwDtIJPOh6vL1rDsBba8%2BSdivMsabvA1Lh7n9bkhXIQR1Y6hJTYbogqFL1Sux0mrhiq%2F7jO10JpZJzNwc5hYFsoUAKoma%2BKqGv7zZbyt3eAyxkcYN8qPu5U5vz%2F1uTJKAuOcssqrjUWq0Ak0hx3anN3C0V1mVDLONWYZQQ1UKl5UWTsGu35KJReNWihreZGGpPi%2BL%2FMfv55nh5qJPi3uxZDI8vOsjd4Zh4YYjeh7I%2FaSFFVr%2B0u8OkJ2Xe5U20TujyGeb2oTusC9JLwlxdVsHW6nLQdGXPUf0%2FKs3t%2FlAZ8gECDe5%2FhLTgUwzLtQYFRMGWHk9HVEiFVGvM0%2Bjn5nC%2FdcseFNp0mL6gWVj%2Fv%2BIpxioFXWzhH4Z9kweIQVrW5Zk%2FZbvBybEcQswwLm65zF3FysHg8gdgQdfiZDtbIXSxluTC9XCTMa7Jh%2BxJlO2uqtI2q2bIuEgdVE7zeMmSpBgu%2BkMYY1YWW1aQH%2B5OYEczD831AFKkI2LfBUzEyWrVm9zCaLAU7Jetp9npNeF179KF7EhzSGCjWNdv1wkXNS4wSfOoNnHVnd0T9AJKmuaa1cXb1N%2FSOxuupfzVWWFj7ZDniawZG6Qj%2Bc6OMAOWlIzG5EZP2xtKNmp9QQUBL58MwrqvwxAY6pgFG7rYskaxD95RorPH49TlJJ9%2FOvpx8Yjm%2FwC8Qcwm70AkzArCMHU17hKYQnvUBBhxbb9fCZBqea9WBVDS%2BHNWbjuU5t8aHwJQGPa4JbnO4yczF9IHYMKgS3LhVxTGEo%2FgYbFjXQgHWEuqU4dh60jDY9eGF0Yr6zM54dk9NXItMycm02AaJUPXHFb39XlVhiP%2BV0L0AWQF3AEiznGjjPHOerAhM0pUr&X-Amz-Signature=debe7469fdbdec02f0458d61b737ccf1c850e6237528da8133f484e33958093a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V2HQZJO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICy5ppxgUzJNBQlCx6TvLuagmowlSZRKvPhsJeGyYqfkAiAQjjjbtx%2FE%2FY8u7aiEn7vr%2F0Pe1ncklmKUFNkqEdyJwyr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIM4O7A%2Bkg09aHXeqQ3KtwDlRULQvb1Wje9ywxm61PsfRuzFLdlxUx%2FTRGpDG%2B%2BeCujBWHK%2BdrfjcK3iJnbF8bDBINvuEITqCDz0l8hE7NdtHkKMKLMOWOX%2Fn%2FBQb5YOtVqjd3KhlzMEMYAQ4OOZqVOLeIQ3ELtgK0VocmOWtqq5s5w3Ikul4ax5Jo%2FsSxtOY66eVSGWX4hsUnnpmXkriscOiMmilNYU3JLAoBs15KY0hQHYY5vydOghia5j%2F6CcCWqyQT499%2FXYfTPF0aFKHQtEAY%2FUvYUM1MfjYbLuWumTPvEjak1NesKYbRCvCE9UJHiQ%2FF7tiX2b85V%2FTm3fbA9y7lzjThiUVrgw%2BWPYXGlAi9ugt95vi%2FTaOshmetN6UxIF%2FK2tJ64V4OyCysRN%2FcQ9z2QPTKrN7OrgOIN7u7Nz790iBKrZT7fEkNF57YX0QxTFNVJ9EVLnfEZC2tlHZfCqrLgtN%2BDZp3w79Z%2FEwNr6powxbABlaXIm%2FoufjVRLQVqRbh0V%2BaO7o0GAtecV3BkkIxM00omZmNIdXNUZa6E0e6mRF70H9OdlgGNSLjiO2QLa9FY3IkYqqVv6cwiWjnsaAt64eQ0%2BkQu23akktKC7Tj4AMAqCDWN0%2BmNPyFwdBz8IU8fB5e%2BxWLaRDswjavwxAY6pgHWx%2FKb8mglQWNMNTDc1ue0elZzWIT08iuA4G55da7J4WmFK0dk9waLwSwMnX0WJLsIht%2Be9K0MrbGaxYQUI9qZzCcthE2%2FPKHYq%2BPJDVO%2BNSAbLFSuHKdpMHeJa2xRTXuFQOiGyJmI5HTpjuH%2BFSWzE%2BvuKQ%2Bp4aydBbbaAkX4Vp0a0H%2FwgyOH7DDedDczXQaa3CSmafzHDuBqE3xDZrROKquKcM9w&X-Amz-Signature=6a23f3f8dff68f8c7a4da2060a3464cdd419d2a56d3ee7939083abc741919a75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEUTJD6A%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2cTMFCleT%2FEXpAP4shGYLz5Gr0tp8oQH2npsEyci03AiAiT8xhY8F5jhzgXhp4EQunT9txHRaxPm%2F16fZSJtQpvir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMoGcGUwpoE5rC4GMuKtwDX9ryYQ0PHEk0VLpCENDgkJzRB85eHkhof1WMSm8R5DykV1yDZTwuM8Wa%2B%2FkI9V6bxU4dtVTOLOiH6faOUYRsoOVVmEFaPwyR9Sxt4qPIB2WYe6MZ0c%2FgCndQKrzlRc5Znnt2fT1asivoIaCLL6Zoadou9GXvBARflaqrcOhKgg5hfmP3PCYWOjCNHds6kFkNJ2%2FwqSkv90Eya%2BtMSJqWODGR1Yzq9iqOgUFqIDGzEBGp2b2knk1TsgF5N59SVLNqruRiW6bzsoUx0%2BBOYChMPAz1PbZ3nsulBaAtMonk%2BgRRF3TPvOVAkCUA6lgyyqOnT6buq%2BsidTWN1N4260eJWuxx8dZhX3lO6%2BB2jimWOc86DwWnTN0hTUA26dh%2Bol3CQrcX8%2BTfW1Vg%2BDtJIxgPYR%2Fa1ZJMdKJrNxeFMyzIxFF0LsNVjQuBammUqkTVHK23ScLaeWeZDV%2B2iVmu6lv0Ce9pNqM1C2QgJkiX%2B4r9Ua7YhRvjkhJFbuYSzoA1ueIdBD9os%2BFaPRSFsfUeV7Gsvzm2LKTh3Bv37NWr3dLSsn7htqB3p23kSQLXPCZ7R%2BH1nxvx8S7dYCRRAG2281fc%2BHnA7UDtPXbtvR4MTlVolX%2BpACPdDB5t0FUhxWAwhavwxAY6pgGU333ojRO8XBBolWXDbyhR5Qmto8W8v9yd5%2B%2BK%2FlySchWxn8Bz%2Ba4Nh7FJab08KkeMQIFJuTS7kcHOSScNVh82HOrAlcmE%2FIEjszVdLHcflgwHYfM3SkEjBoGg4Xys19md03bNYliD0wq1CYPZUS9DM8rOTKlUcYAZGyE1AMGQgLVywScFNcEFsRu8GNXYD1hmTS4rAR7vVzurtlpaXixUtlVaY9fu&X-Amz-Signature=f19b3692e1c1a63dcee0f0277d7376991eb60a9a06b665cea79fffce398d09c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M5SD3BE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBwtTVWZBTTY2v4Ro3C6zih3EInbWqIncK0Yv0T2xONAiA3czQoppFayzeEHiWxKuRrs%2BN7KZqEI0lD82VhTHPigir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMwRoI1Ag4FgpRgxAHKtwDy%2FPPL9k7KbhGkDd6DrHGXzeZNaOKvY%2B4X4GadWj0NjmyESEVnAre97E9C8qiyC9OqPaJu9r2KSifo7k9l0iPOQWqg6zWkIVLOEgh9cCR1jPc7vUhl065E2Yjj65j3hw5KA7VKLAxeoJs570E3tbAJTZ1D4XjXii%2Bfm%2BPJbl2kEuKbu%2B41W%2BbzatZXb%2Ft4%2FQ6Zl4WR7jZfbCheYGZS1MO24BAz3d6U8jsD%2Fk%2Bq3vMKErBKkG0zA7ILYO9nOQfazWEf%2BbgObGf0ALbmX9I3kGls%2Bx4OGablyer9S%2BpsKSOBhtzW93%2Bc9S%2Ft%2B7%2B6r0baDkgiZzJkmX4ZHWDLUHRymWng0FKyImwPrhzU85pHFFre5%2FMMUxPPvxBn7PEBB2YzrvlSBADw1FLW%2BEf2IWzsak0dkXjKybcFS2R0VT27%2BF2VpkU9TOGh5hw4sMIcDdXst6LDEyjJbuDMGv7jMkcsvwv5p7M2QG40iNLeLDgK07e67gymmyoCTXsvQLgKqR9%2BfGD3VMof%2FE5QF4A2PWDbAqPtrecOyk%2FJ7tfeE93JMxJVqiy2jPP9xt01U%2FoVX75qs75%2B3jCMME3FRzHsTzHIRnnSGc6rC%2Fstdbd6tpuWHwcoDXsB5etCRgyHE7WOoUwqqzwxAY6pgH%2F50to6pIiqqcR00PyFRxU6ehuzzameiVafmaO5ITI6UvQ9UNDTS%2B0Blt0VvHsUCHjNHpoTv07atzcF9%2Fbtp1oxjcjJEJNWUMjNKArIGzieYSvdcOS2DodbPbLxyfC%2BeKYbL3CUNApvOrv%2BTxm6UJkrx73MKu4kcHHDOZ3PTngzFlfj258qD86wniRY5JuYoJsPAJeEV5Crr%2BDgjkRoSDLMYfnFW1D&X-Amz-Signature=209ef3bf02b9364ddf27980023e239593583eaa1a112fbdaed2323efdb15094c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI2H5BSJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgD06wxIjEIr3Im9I3RAPjh9KLiEp3ujFIG0J8eMCm3AiAz8w6dIh5c4dyIMuSwjrif7uwyAGBAtv6vFSSB0Wpq0Cr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMIRckMqeTIbDhPxS5KtwDq9ucF%2F1JXHy%2BeW1wpoIZd3NxDErdqMNYLi1STufCRwihyvWurnSYzFUgvzZEccU%2BvLUEVier%2FKzlxMkMHT6bxjd%2FW%2Fp%2FRX8wQCNPphahs3HjGyThF0ApMkIQ3yh%2FOlwTohja%2BYRwFolchobircJ7UubiBADE4QERDr7lADh8kG3kPziJKgI9RmaPhrNtPWIT1P8TJX6aEJ3cstxnuf2VGl2q6gpTAA%2BZ6vezlpPiw8NjsFLmHZv4qGGDV8XyRkMrbqth37FDH9zkhUM9x9neM2Am0JzRY96o92j91S9BABc0NBf8KGU%2BoOFYLldwUloWCkhv%2BwHX%2FdvTt7pxpJ4Kq8BTL6urhq0RmH5Vyd2efB%2BBUNc4IMnlCBlLFuNPzsHjvg3gv0lZ5hYSTBGuiAPLlNPmtkik8wqV6rom1Q2waHeZWCTiYJkWCfSYWi49Ya1qJdijtcuvuXNXYyDMd178P451JtjVb%2FKktkCqzHB7qjt%2Fge3jeIIW0JYgDIgVMqPjUxEfg5FSHAM7H8urivHRaT39xr6Q8vJPaf0BI37jFEfeibfqsmzRV0c0679m8gTczh69kQgKOmzx8UBzMQjeWjjGcL%2FiWck8PNKjhr2hZdymN0x6ViHaWUlJUMwwgKvwxAY6pgHRu%2BshU3pSUeX4WvKKLW9IBVMkIj%2FfBtixkzSADpez9g1%2F5mvki%2BYOykJUGY4CUslDxR6znJwHNXMZOSgVdcZEpXnzjh7ZEK2RwEQQMxH%2BqWalQ9iH71GphRmMVHnw4rReo8j8fFbDH0KTgVnHRFhBFs8wa2iLHLYDsdCwypL%2BUU57zNwvL4BQBXx%2FfW0Ve1IELjiJhsjDskWQocsqO4EeBlZiwGEn&X-Amz-Signature=fdff3e1ff78c024baf3a36af7b22ebb7b5cfbcdace52f1eb8105b021798b0215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQPNFFQK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCByOezirYgbPXLPNujw2CVvVSMD6%2FLTavopZSgXd8jHAIgB%2BpjJ7PsQEX0e%2Bsk9i2h2OL%2BpYQAFn8A5xZm7KLhP04q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDFFv9wXthGcH2T68OSrcAxyqKYMKZKM9vHkGXgN6LfPHgBNBIeat%2Fl76dJlqT%2FNqBeK4Zi6qqa%2B89lK2MxFZGb8vnV7VxcJRHvYsRrd7NvZeW9sMplncnekQRsZUkxRKadWX4IcSs%2FCwkGA3mXf0Y%2B56vlut3dDCCcL3j882WkYrL%2F0eNK63vM4FGYD7iTmBCoeYgpevIgJwfM8fV9Zj72moMLsOCnKbWC7k3lYcc20z3uuI3uFql1q9c9qwj4pw9hFY8e8nbk6qBLZeDLkEhlIG%2FT2tiQPlRZNjvTjUnfRB7xJPC%2FOuS71J2ZnVAZzIs18pIkYsonkwTzyhfdB3l%2Bq9xi3%2BaotMHEGqeeby6EetVr1Pne39cln6xuz00lvEzXAvIwMZ3mnWdVN32aluYf0BY377CjIoOpvxg7eXWkkMdMXY7K3%2FxcN70adPQAANsjbl8BcK67I88UsS1Zp%2FALyRLXtfHdoWhVTrO655gmZHTZUh4bz%2BMELcStnYhcW0Wv8lJdvBTlOjQakbwGKEPb8kX0QpzMwMui0QsJucmHKn8w2P%2B9wQkMVN54N51BIvGAQsrYiZ6Bd%2B6sqhZ4%2BvWhqX6pzjhTJq46GJvxJdEnISzm7n%2FnMIrnQY8jOV0dIqw34PYpZ%2BjT2Kc7EeMM2r8MQGOqUB7cgjMMWiK4IYxm%2BzA3ZFPPl2TPNudaknHH5Bl1ZaAdk6GZd1hOQroFljQJh8unbk3yQIZPSzh0nNbfOa6DXxCrAkG%2FGDak8HsX956JqDfd3bxmKrWykNr5r9ffojU9mRBdazHtPaCrTdP6YDwWrpP0e%2FlWT%2BsGIy%2Fp%2FOgLoSWIM18XQ%2BAGrwi2ZmUDaBkHZ7sYGenBzFZqCjhEWFLgXRswrV5HGG&X-Amz-Signature=12ba9a2a6ea0b4c8f8ffb11987adbe50ab28c9798cc4aee9c950aa780153d2f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQPNFFQK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCByOezirYgbPXLPNujw2CVvVSMD6%2FLTavopZSgXd8jHAIgB%2BpjJ7PsQEX0e%2Bsk9i2h2OL%2BpYQAFn8A5xZm7KLhP04q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDFFv9wXthGcH2T68OSrcAxyqKYMKZKM9vHkGXgN6LfPHgBNBIeat%2Fl76dJlqT%2FNqBeK4Zi6qqa%2B89lK2MxFZGb8vnV7VxcJRHvYsRrd7NvZeW9sMplncnekQRsZUkxRKadWX4IcSs%2FCwkGA3mXf0Y%2B56vlut3dDCCcL3j882WkYrL%2F0eNK63vM4FGYD7iTmBCoeYgpevIgJwfM8fV9Zj72moMLsOCnKbWC7k3lYcc20z3uuI3uFql1q9c9qwj4pw9hFY8e8nbk6qBLZeDLkEhlIG%2FT2tiQPlRZNjvTjUnfRB7xJPC%2FOuS71J2ZnVAZzIs18pIkYsonkwTzyhfdB3l%2Bq9xi3%2BaotMHEGqeeby6EetVr1Pne39cln6xuz00lvEzXAvIwMZ3mnWdVN32aluYf0BY377CjIoOpvxg7eXWkkMdMXY7K3%2FxcN70adPQAANsjbl8BcK67I88UsS1Zp%2FALyRLXtfHdoWhVTrO655gmZHTZUh4bz%2BMELcStnYhcW0Wv8lJdvBTlOjQakbwGKEPb8kX0QpzMwMui0QsJucmHKn8w2P%2B9wQkMVN54N51BIvGAQsrYiZ6Bd%2B6sqhZ4%2BvWhqX6pzjhTJq46GJvxJdEnISzm7n%2FnMIrnQY8jOV0dIqw34PYpZ%2BjT2Kc7EeMM2r8MQGOqUB7cgjMMWiK4IYxm%2BzA3ZFPPl2TPNudaknHH5Bl1ZaAdk6GZd1hOQroFljQJh8unbk3yQIZPSzh0nNbfOa6DXxCrAkG%2FGDak8HsX956JqDfd3bxmKrWykNr5r9ffojU9mRBdazHtPaCrTdP6YDwWrpP0e%2FlWT%2BsGIy%2Fp%2FOgLoSWIM18XQ%2BAGrwi2ZmUDaBkHZ7sYGenBzFZqCjhEWFLgXRswrV5HGG&X-Amz-Signature=5c3638fe3cfd88cfb36fc4d7e051c5ce3d67aae53528382f7722a9290e11e101&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HYZVX7R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbgjs9ym0tmJ%2B4hvtjEr2t%2FNApeleAR9iuN1EooYy2awIgUhGAVr5Ovhuyub7JmZ8gHlqpb%2F10888TatC2Wg37O9wq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHgUdQke1GgLqo%2F%2F0SrcA5O4Hojkr9ykcjf3dWACWW9ipPShKDPrK8jgV52Ofjms1F3BKf6oqw5hYdgcFn3je91IUC%2FLw3m%2FsW%2Fj1%2Fy2xaIjphsp0%2FhcDGi0ye564J%2F697gQf7YOctkKEH7JAmlONIRaOPSRvL4hceEYVKhvldAYq%2BngefzYsEcd3aAZJRUghc7GnHDG09fs3KZh4%2BJKN1%2BPVanDPrsoe98457vmEAvcr0RSGU9RasIWLZq%2BNmROYK%2BKQqesl2Tl7QsB%2B07E1f0hJNtAm%2BdsD0dECwIg8%2FFk7HT0Z3GWlKhYR14gtRtq53C3EMmEyyry7usMRgNilFpX4iuMow16VOQeND1L%2BxtI2tbsCLNezlq2k8zHoO6X2StQ0Yz7nnfs4%2Bop4u4lddVToyc8EuDcG%2FrrlQ756qrA8sAACVlppDcPAIXiJgc5TcFZrdef3rTjeOIdu9iqV1oIpWqeuWi7sl2cKfy9ZqyLL7wZWCh4V1lA1mdORv1wnAc5q%2FJn%2F79zUItcXgVScWzWGnvmCJzeblatNOS7EnYPefjvn75A99H%2F8kqGKLXgYLqpm69%2BZJXWQxeGzTGUcFh2fiRwJGcNI4nEe6UOmtjPuBPinPmg%2FKcNA%2BOd7ebjWYZfiGod8QIdXt5OMLCr8MQGOqUBpfr3F0sEA5CShhDaiwJiPTopkhoUIc5J%2BmHLdaADH5a7qRKOaDH0JbFkv6ewwZW6rM2P47gl7odsPNjKtjGq1Q30d5W6qDOm9sG5dxsIYrqoT8k1g3N7UX0QPaknpW2ag%2Fo7sgRaLItSRmvUm%2Fxvk%2FC0ZQNpIbPzptOnITFKArOQ6sROfpmQ%2BrgGUTcaWIxQqpcxMfaM9q92vNw%2BuyZjA8cM973g&X-Amz-Signature=0979ba654b601da44c69390d0d17517839dbe7307ee6e04be6fa16224072f45e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HYZVX7R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbgjs9ym0tmJ%2B4hvtjEr2t%2FNApeleAR9iuN1EooYy2awIgUhGAVr5Ovhuyub7JmZ8gHlqpb%2F10888TatC2Wg37O9wq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHgUdQke1GgLqo%2F%2F0SrcA5O4Hojkr9ykcjf3dWACWW9ipPShKDPrK8jgV52Ofjms1F3BKf6oqw5hYdgcFn3je91IUC%2FLw3m%2FsW%2Fj1%2Fy2xaIjphsp0%2FhcDGi0ye564J%2F697gQf7YOctkKEH7JAmlONIRaOPSRvL4hceEYVKhvldAYq%2BngefzYsEcd3aAZJRUghc7GnHDG09fs3KZh4%2BJKN1%2BPVanDPrsoe98457vmEAvcr0RSGU9RasIWLZq%2BNmROYK%2BKQqesl2Tl7QsB%2B07E1f0hJNtAm%2BdsD0dECwIg8%2FFk7HT0Z3GWlKhYR14gtRtq53C3EMmEyyry7usMRgNilFpX4iuMow16VOQeND1L%2BxtI2tbsCLNezlq2k8zHoO6X2StQ0Yz7nnfs4%2Bop4u4lddVToyc8EuDcG%2FrrlQ756qrA8sAACVlppDcPAIXiJgc5TcFZrdef3rTjeOIdu9iqV1oIpWqeuWi7sl2cKfy9ZqyLL7wZWCh4V1lA1mdORv1wnAc5q%2FJn%2F79zUItcXgVScWzWGnvmCJzeblatNOS7EnYPefjvn75A99H%2F8kqGKLXgYLqpm69%2BZJXWQxeGzTGUcFh2fiRwJGcNI4nEe6UOmtjPuBPinPmg%2FKcNA%2BOd7ebjWYZfiGod8QIdXt5OMLCr8MQGOqUBpfr3F0sEA5CShhDaiwJiPTopkhoUIc5J%2BmHLdaADH5a7qRKOaDH0JbFkv6ewwZW6rM2P47gl7odsPNjKtjGq1Q30d5W6qDOm9sG5dxsIYrqoT8k1g3N7UX0QPaknpW2ag%2Fo7sgRaLItSRmvUm%2Fxvk%2FC0ZQNpIbPzptOnITFKArOQ6sROfpmQ%2BrgGUTcaWIxQqpcxMfaM9q92vNw%2BuyZjA8cM973g&X-Amz-Signature=2882db0504c8d23be4b1a7501e7e57ea69306bf4c90e55e2ca66a69a7ffc4a68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HYZVX7R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbgjs9ym0tmJ%2B4hvtjEr2t%2FNApeleAR9iuN1EooYy2awIgUhGAVr5Ovhuyub7JmZ8gHlqpb%2F10888TatC2Wg37O9wq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHgUdQke1GgLqo%2F%2F0SrcA5O4Hojkr9ykcjf3dWACWW9ipPShKDPrK8jgV52Ofjms1F3BKf6oqw5hYdgcFn3je91IUC%2FLw3m%2FsW%2Fj1%2Fy2xaIjphsp0%2FhcDGi0ye564J%2F697gQf7YOctkKEH7JAmlONIRaOPSRvL4hceEYVKhvldAYq%2BngefzYsEcd3aAZJRUghc7GnHDG09fs3KZh4%2BJKN1%2BPVanDPrsoe98457vmEAvcr0RSGU9RasIWLZq%2BNmROYK%2BKQqesl2Tl7QsB%2B07E1f0hJNtAm%2BdsD0dECwIg8%2FFk7HT0Z3GWlKhYR14gtRtq53C3EMmEyyry7usMRgNilFpX4iuMow16VOQeND1L%2BxtI2tbsCLNezlq2k8zHoO6X2StQ0Yz7nnfs4%2Bop4u4lddVToyc8EuDcG%2FrrlQ756qrA8sAACVlppDcPAIXiJgc5TcFZrdef3rTjeOIdu9iqV1oIpWqeuWi7sl2cKfy9ZqyLL7wZWCh4V1lA1mdORv1wnAc5q%2FJn%2F79zUItcXgVScWzWGnvmCJzeblatNOS7EnYPefjvn75A99H%2F8kqGKLXgYLqpm69%2BZJXWQxeGzTGUcFh2fiRwJGcNI4nEe6UOmtjPuBPinPmg%2FKcNA%2BOd7ebjWYZfiGod8QIdXt5OMLCr8MQGOqUBpfr3F0sEA5CShhDaiwJiPTopkhoUIc5J%2BmHLdaADH5a7qRKOaDH0JbFkv6ewwZW6rM2P47gl7odsPNjKtjGq1Q30d5W6qDOm9sG5dxsIYrqoT8k1g3N7UX0QPaknpW2ag%2Fo7sgRaLItSRmvUm%2Fxvk%2FC0ZQNpIbPzptOnITFKArOQ6sROfpmQ%2BrgGUTcaWIxQqpcxMfaM9q92vNw%2BuyZjA8cM973g&X-Amz-Signature=bf9f0f91b2885ceb9c9dee3e8c9475de1c1b0da174ccd2d43d71e65ab99ef4b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HYZVX7R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbgjs9ym0tmJ%2B4hvtjEr2t%2FNApeleAR9iuN1EooYy2awIgUhGAVr5Ovhuyub7JmZ8gHlqpb%2F10888TatC2Wg37O9wq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHgUdQke1GgLqo%2F%2F0SrcA5O4Hojkr9ykcjf3dWACWW9ipPShKDPrK8jgV52Ofjms1F3BKf6oqw5hYdgcFn3je91IUC%2FLw3m%2FsW%2Fj1%2Fy2xaIjphsp0%2FhcDGi0ye564J%2F697gQf7YOctkKEH7JAmlONIRaOPSRvL4hceEYVKhvldAYq%2BngefzYsEcd3aAZJRUghc7GnHDG09fs3KZh4%2BJKN1%2BPVanDPrsoe98457vmEAvcr0RSGU9RasIWLZq%2BNmROYK%2BKQqesl2Tl7QsB%2B07E1f0hJNtAm%2BdsD0dECwIg8%2FFk7HT0Z3GWlKhYR14gtRtq53C3EMmEyyry7usMRgNilFpX4iuMow16VOQeND1L%2BxtI2tbsCLNezlq2k8zHoO6X2StQ0Yz7nnfs4%2Bop4u4lddVToyc8EuDcG%2FrrlQ756qrA8sAACVlppDcPAIXiJgc5TcFZrdef3rTjeOIdu9iqV1oIpWqeuWi7sl2cKfy9ZqyLL7wZWCh4V1lA1mdORv1wnAc5q%2FJn%2F79zUItcXgVScWzWGnvmCJzeblatNOS7EnYPefjvn75A99H%2F8kqGKLXgYLqpm69%2BZJXWQxeGzTGUcFh2fiRwJGcNI4nEe6UOmtjPuBPinPmg%2FKcNA%2BOd7ebjWYZfiGod8QIdXt5OMLCr8MQGOqUBpfr3F0sEA5CShhDaiwJiPTopkhoUIc5J%2BmHLdaADH5a7qRKOaDH0JbFkv6ewwZW6rM2P47gl7odsPNjKtjGq1Q30d5W6qDOm9sG5dxsIYrqoT8k1g3N7UX0QPaknpW2ag%2Fo7sgRaLItSRmvUm%2Fxvk%2FC0ZQNpIbPzptOnITFKArOQ6sROfpmQ%2BrgGUTcaWIxQqpcxMfaM9q92vNw%2BuyZjA8cM973g&X-Amz-Signature=094a064e060f885531faa957c5bf4b542297cce185a2b9c301ffcff7c0473f84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HYZVX7R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbgjs9ym0tmJ%2B4hvtjEr2t%2FNApeleAR9iuN1EooYy2awIgUhGAVr5Ovhuyub7JmZ8gHlqpb%2F10888TatC2Wg37O9wq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHgUdQke1GgLqo%2F%2F0SrcA5O4Hojkr9ykcjf3dWACWW9ipPShKDPrK8jgV52Ofjms1F3BKf6oqw5hYdgcFn3je91IUC%2FLw3m%2FsW%2Fj1%2Fy2xaIjphsp0%2FhcDGi0ye564J%2F697gQf7YOctkKEH7JAmlONIRaOPSRvL4hceEYVKhvldAYq%2BngefzYsEcd3aAZJRUghc7GnHDG09fs3KZh4%2BJKN1%2BPVanDPrsoe98457vmEAvcr0RSGU9RasIWLZq%2BNmROYK%2BKQqesl2Tl7QsB%2B07E1f0hJNtAm%2BdsD0dECwIg8%2FFk7HT0Z3GWlKhYR14gtRtq53C3EMmEyyry7usMRgNilFpX4iuMow16VOQeND1L%2BxtI2tbsCLNezlq2k8zHoO6X2StQ0Yz7nnfs4%2Bop4u4lddVToyc8EuDcG%2FrrlQ756qrA8sAACVlppDcPAIXiJgc5TcFZrdef3rTjeOIdu9iqV1oIpWqeuWi7sl2cKfy9ZqyLL7wZWCh4V1lA1mdORv1wnAc5q%2FJn%2F79zUItcXgVScWzWGnvmCJzeblatNOS7EnYPefjvn75A99H%2F8kqGKLXgYLqpm69%2BZJXWQxeGzTGUcFh2fiRwJGcNI4nEe6UOmtjPuBPinPmg%2FKcNA%2BOd7ebjWYZfiGod8QIdXt5OMLCr8MQGOqUBpfr3F0sEA5CShhDaiwJiPTopkhoUIc5J%2BmHLdaADH5a7qRKOaDH0JbFkv6ewwZW6rM2P47gl7odsPNjKtjGq1Q30d5W6qDOm9sG5dxsIYrqoT8k1g3N7UX0QPaknpW2ag%2Fo7sgRaLItSRmvUm%2Fxvk%2FC0ZQNpIbPzptOnITFKArOQ6sROfpmQ%2BrgGUTcaWIxQqpcxMfaM9q92vNw%2BuyZjA8cM973g&X-Amz-Signature=f20057f2df91564afc3c65e592c31fd94501f288c1850b31b60453ec42bef595&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HYZVX7R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbgjs9ym0tmJ%2B4hvtjEr2t%2FNApeleAR9iuN1EooYy2awIgUhGAVr5Ovhuyub7JmZ8gHlqpb%2F10888TatC2Wg37O9wq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHgUdQke1GgLqo%2F%2F0SrcA5O4Hojkr9ykcjf3dWACWW9ipPShKDPrK8jgV52Ofjms1F3BKf6oqw5hYdgcFn3je91IUC%2FLw3m%2FsW%2Fj1%2Fy2xaIjphsp0%2FhcDGi0ye564J%2F697gQf7YOctkKEH7JAmlONIRaOPSRvL4hceEYVKhvldAYq%2BngefzYsEcd3aAZJRUghc7GnHDG09fs3KZh4%2BJKN1%2BPVanDPrsoe98457vmEAvcr0RSGU9RasIWLZq%2BNmROYK%2BKQqesl2Tl7QsB%2B07E1f0hJNtAm%2BdsD0dECwIg8%2FFk7HT0Z3GWlKhYR14gtRtq53C3EMmEyyry7usMRgNilFpX4iuMow16VOQeND1L%2BxtI2tbsCLNezlq2k8zHoO6X2StQ0Yz7nnfs4%2Bop4u4lddVToyc8EuDcG%2FrrlQ756qrA8sAACVlppDcPAIXiJgc5TcFZrdef3rTjeOIdu9iqV1oIpWqeuWi7sl2cKfy9ZqyLL7wZWCh4V1lA1mdORv1wnAc5q%2FJn%2F79zUItcXgVScWzWGnvmCJzeblatNOS7EnYPefjvn75A99H%2F8kqGKLXgYLqpm69%2BZJXWQxeGzTGUcFh2fiRwJGcNI4nEe6UOmtjPuBPinPmg%2FKcNA%2BOd7ebjWYZfiGod8QIdXt5OMLCr8MQGOqUBpfr3F0sEA5CShhDaiwJiPTopkhoUIc5J%2BmHLdaADH5a7qRKOaDH0JbFkv6ewwZW6rM2P47gl7odsPNjKtjGq1Q30d5W6qDOm9sG5dxsIYrqoT8k1g3N7UX0QPaknpW2ag%2Fo7sgRaLItSRmvUm%2Fxvk%2FC0ZQNpIbPzptOnITFKArOQ6sROfpmQ%2BrgGUTcaWIxQqpcxMfaM9q92vNw%2BuyZjA8cM973g&X-Amz-Signature=6d74f026fd24b9c9d7b7b2514b3685195bbb07f8e97ab28fd9763d6d24bd0b5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HYZVX7R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbgjs9ym0tmJ%2B4hvtjEr2t%2FNApeleAR9iuN1EooYy2awIgUhGAVr5Ovhuyub7JmZ8gHlqpb%2F10888TatC2Wg37O9wq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHgUdQke1GgLqo%2F%2F0SrcA5O4Hojkr9ykcjf3dWACWW9ipPShKDPrK8jgV52Ofjms1F3BKf6oqw5hYdgcFn3je91IUC%2FLw3m%2FsW%2Fj1%2Fy2xaIjphsp0%2FhcDGi0ye564J%2F697gQf7YOctkKEH7JAmlONIRaOPSRvL4hceEYVKhvldAYq%2BngefzYsEcd3aAZJRUghc7GnHDG09fs3KZh4%2BJKN1%2BPVanDPrsoe98457vmEAvcr0RSGU9RasIWLZq%2BNmROYK%2BKQqesl2Tl7QsB%2B07E1f0hJNtAm%2BdsD0dECwIg8%2FFk7HT0Z3GWlKhYR14gtRtq53C3EMmEyyry7usMRgNilFpX4iuMow16VOQeND1L%2BxtI2tbsCLNezlq2k8zHoO6X2StQ0Yz7nnfs4%2Bop4u4lddVToyc8EuDcG%2FrrlQ756qrA8sAACVlppDcPAIXiJgc5TcFZrdef3rTjeOIdu9iqV1oIpWqeuWi7sl2cKfy9ZqyLL7wZWCh4V1lA1mdORv1wnAc5q%2FJn%2F79zUItcXgVScWzWGnvmCJzeblatNOS7EnYPefjvn75A99H%2F8kqGKLXgYLqpm69%2BZJXWQxeGzTGUcFh2fiRwJGcNI4nEe6UOmtjPuBPinPmg%2FKcNA%2BOd7ebjWYZfiGod8QIdXt5OMLCr8MQGOqUBpfr3F0sEA5CShhDaiwJiPTopkhoUIc5J%2BmHLdaADH5a7qRKOaDH0JbFkv6ewwZW6rM2P47gl7odsPNjKtjGq1Q30d5W6qDOm9sG5dxsIYrqoT8k1g3N7UX0QPaknpW2ag%2Fo7sgRaLItSRmvUm%2Fxvk%2FC0ZQNpIbPzptOnITFKArOQ6sROfpmQ%2BrgGUTcaWIxQqpcxMfaM9q92vNw%2BuyZjA8cM973g&X-Amz-Signature=d15bafce5103461bc70ad61a43f008d5ff2f6ab449ebb264bfe13e8aace32e02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HYZVX7R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbgjs9ym0tmJ%2B4hvtjEr2t%2FNApeleAR9iuN1EooYy2awIgUhGAVr5Ovhuyub7JmZ8gHlqpb%2F10888TatC2Wg37O9wq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHgUdQke1GgLqo%2F%2F0SrcA5O4Hojkr9ykcjf3dWACWW9ipPShKDPrK8jgV52Ofjms1F3BKf6oqw5hYdgcFn3je91IUC%2FLw3m%2FsW%2Fj1%2Fy2xaIjphsp0%2FhcDGi0ye564J%2F697gQf7YOctkKEH7JAmlONIRaOPSRvL4hceEYVKhvldAYq%2BngefzYsEcd3aAZJRUghc7GnHDG09fs3KZh4%2BJKN1%2BPVanDPrsoe98457vmEAvcr0RSGU9RasIWLZq%2BNmROYK%2BKQqesl2Tl7QsB%2B07E1f0hJNtAm%2BdsD0dECwIg8%2FFk7HT0Z3GWlKhYR14gtRtq53C3EMmEyyry7usMRgNilFpX4iuMow16VOQeND1L%2BxtI2tbsCLNezlq2k8zHoO6X2StQ0Yz7nnfs4%2Bop4u4lddVToyc8EuDcG%2FrrlQ756qrA8sAACVlppDcPAIXiJgc5TcFZrdef3rTjeOIdu9iqV1oIpWqeuWi7sl2cKfy9ZqyLL7wZWCh4V1lA1mdORv1wnAc5q%2FJn%2F79zUItcXgVScWzWGnvmCJzeblatNOS7EnYPefjvn75A99H%2F8kqGKLXgYLqpm69%2BZJXWQxeGzTGUcFh2fiRwJGcNI4nEe6UOmtjPuBPinPmg%2FKcNA%2BOd7ebjWYZfiGod8QIdXt5OMLCr8MQGOqUBpfr3F0sEA5CShhDaiwJiPTopkhoUIc5J%2BmHLdaADH5a7qRKOaDH0JbFkv6ewwZW6rM2P47gl7odsPNjKtjGq1Q30d5W6qDOm9sG5dxsIYrqoT8k1g3N7UX0QPaknpW2ag%2Fo7sgRaLItSRmvUm%2Fxvk%2FC0ZQNpIbPzptOnITFKArOQ6sROfpmQ%2BrgGUTcaWIxQqpcxMfaM9q92vNw%2BuyZjA8cM973g&X-Amz-Signature=ab433b4d17a0862b83ed43429486c17305e3055ae52d28210fb167accfbaff70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HYZVX7R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbgjs9ym0tmJ%2B4hvtjEr2t%2FNApeleAR9iuN1EooYy2awIgUhGAVr5Ovhuyub7JmZ8gHlqpb%2F10888TatC2Wg37O9wq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHgUdQke1GgLqo%2F%2F0SrcA5O4Hojkr9ykcjf3dWACWW9ipPShKDPrK8jgV52Ofjms1F3BKf6oqw5hYdgcFn3je91IUC%2FLw3m%2FsW%2Fj1%2Fy2xaIjphsp0%2FhcDGi0ye564J%2F697gQf7YOctkKEH7JAmlONIRaOPSRvL4hceEYVKhvldAYq%2BngefzYsEcd3aAZJRUghc7GnHDG09fs3KZh4%2BJKN1%2BPVanDPrsoe98457vmEAvcr0RSGU9RasIWLZq%2BNmROYK%2BKQqesl2Tl7QsB%2B07E1f0hJNtAm%2BdsD0dECwIg8%2FFk7HT0Z3GWlKhYR14gtRtq53C3EMmEyyry7usMRgNilFpX4iuMow16VOQeND1L%2BxtI2tbsCLNezlq2k8zHoO6X2StQ0Yz7nnfs4%2Bop4u4lddVToyc8EuDcG%2FrrlQ756qrA8sAACVlppDcPAIXiJgc5TcFZrdef3rTjeOIdu9iqV1oIpWqeuWi7sl2cKfy9ZqyLL7wZWCh4V1lA1mdORv1wnAc5q%2FJn%2F79zUItcXgVScWzWGnvmCJzeblatNOS7EnYPefjvn75A99H%2F8kqGKLXgYLqpm69%2BZJXWQxeGzTGUcFh2fiRwJGcNI4nEe6UOmtjPuBPinPmg%2FKcNA%2BOd7ebjWYZfiGod8QIdXt5OMLCr8MQGOqUBpfr3F0sEA5CShhDaiwJiPTopkhoUIc5J%2BmHLdaADH5a7qRKOaDH0JbFkv6ewwZW6rM2P47gl7odsPNjKtjGq1Q30d5W6qDOm9sG5dxsIYrqoT8k1g3N7UX0QPaknpW2ag%2Fo7sgRaLItSRmvUm%2Fxvk%2FC0ZQNpIbPzptOnITFKArOQ6sROfpmQ%2BrgGUTcaWIxQqpcxMfaM9q92vNw%2BuyZjA8cM973g&X-Amz-Signature=231cd2866fa3f0b7fd37b2a9ccb9d33f685287a2bf6a4ff1e12647985804dd12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HYZVX7R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbgjs9ym0tmJ%2B4hvtjEr2t%2FNApeleAR9iuN1EooYy2awIgUhGAVr5Ovhuyub7JmZ8gHlqpb%2F10888TatC2Wg37O9wq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHgUdQke1GgLqo%2F%2F0SrcA5O4Hojkr9ykcjf3dWACWW9ipPShKDPrK8jgV52Ofjms1F3BKf6oqw5hYdgcFn3je91IUC%2FLw3m%2FsW%2Fj1%2Fy2xaIjphsp0%2FhcDGi0ye564J%2F697gQf7YOctkKEH7JAmlONIRaOPSRvL4hceEYVKhvldAYq%2BngefzYsEcd3aAZJRUghc7GnHDG09fs3KZh4%2BJKN1%2BPVanDPrsoe98457vmEAvcr0RSGU9RasIWLZq%2BNmROYK%2BKQqesl2Tl7QsB%2B07E1f0hJNtAm%2BdsD0dECwIg8%2FFk7HT0Z3GWlKhYR14gtRtq53C3EMmEyyry7usMRgNilFpX4iuMow16VOQeND1L%2BxtI2tbsCLNezlq2k8zHoO6X2StQ0Yz7nnfs4%2Bop4u4lddVToyc8EuDcG%2FrrlQ756qrA8sAACVlppDcPAIXiJgc5TcFZrdef3rTjeOIdu9iqV1oIpWqeuWi7sl2cKfy9ZqyLL7wZWCh4V1lA1mdORv1wnAc5q%2FJn%2F79zUItcXgVScWzWGnvmCJzeblatNOS7EnYPefjvn75A99H%2F8kqGKLXgYLqpm69%2BZJXWQxeGzTGUcFh2fiRwJGcNI4nEe6UOmtjPuBPinPmg%2FKcNA%2BOd7ebjWYZfiGod8QIdXt5OMLCr8MQGOqUBpfr3F0sEA5CShhDaiwJiPTopkhoUIc5J%2BmHLdaADH5a7qRKOaDH0JbFkv6ewwZW6rM2P47gl7odsPNjKtjGq1Q30d5W6qDOm9sG5dxsIYrqoT8k1g3N7UX0QPaknpW2ag%2Fo7sgRaLItSRmvUm%2Fxvk%2FC0ZQNpIbPzptOnITFKArOQ6sROfpmQ%2BrgGUTcaWIxQqpcxMfaM9q92vNw%2BuyZjA8cM973g&X-Amz-Signature=537908fb902f162f5ad8b5f19157598fe5c042cea31eb29ae5b1f48c15346106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
