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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644STJRNY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3sk1sBN%2ByDoFcc03iNPYOejSTnBhtGgQyl%2F5rRSdKRAiEAzP%2FLd3WeQ%2BpwJ2zZeVFoxEJXw1GedkR1ERmkq1WZpPUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkqOiJuGwbI%2BUPLDircA2i00wxKgl4I%2FEJWsUt0LTZlTYoT%2FN%2FtTWVu31rX3xE%2BRDHBPqx9QZg9xwkI%2BILFsswKJ0JA6Ue1LDI1p3F3kw39jj0%2BzzSzpbZfYQV50hIxIoFkVp%2F5Yj5VmebSExrHCc9frsxnX1ve28U2v8JZZuky3CmIWd0PqoQo9EzCHblhTl4mSvKjlN4hgJuHQhTjrgnrkxSi%2BU3d6NiPY5BX7KGghMIAq3RKTARu5OxkEsIOf%2FFKWO%2Bwq7BSbYT7L5zH7cjH6Yn9%2BUMuvk43JUHLb6JT6apLYs9lx67Y2QKDi4WYOVsC8a6%2BKJFFaBi4%2FRlC7J64O3Cj%2BO%2FDa6QYeKpHdwfW94%2FTfRopPzdLvHvzpkNGnHo%2BPz2rDeAt0YVnUoZw5Vg7gK931xbcBKL9DzIZSSXSJtrntwDhJeQzQy2%2BOZGBs0KGG4IA2j33I%2FAE6wK6MpIGO9oog3xPih%2FlFnHbTMVvOsURCxM3rN0qi5mE8TIfHRZF6wX%2BUtoWUUK8%2FhZFGARWBOtTUqCRed6sq%2BEuaUshZCriL69BBCioC9MijSpKO6Otx8q6eikURPkIwGxzA9SNwfURAZusyI96PhMR7JoxicIC4eNVzw61cOdx1QFTrHlpAgqVn9AJO44OMPD14MQGOqUBH%2FL1LzwnGv3kuELyNDM%2F%2FWTd0vydltXm0jNBe8VAekGkqksa8ArMh3XufJ4DrPJ3Kly7KUUICKm5i4AfS51iYXJovGU5lwWVcDjeT2deuiEKW0Q63Phdu05eP5tuG8rXuii2wN7MUUcmHA9Hgk0133rIotY2%2B07l1h7PtXnWq%2BonVjsfdtCnxq%2FTYZ4xFM5zcD4SpwbznPYF7lG7rRVWKELhDe6m&X-Amz-Signature=8e96ce5090a6698507f20ca060c4fdf8dfc310d6256c0650a98b6c609be7487a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644STJRNY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3sk1sBN%2ByDoFcc03iNPYOejSTnBhtGgQyl%2F5rRSdKRAiEAzP%2FLd3WeQ%2BpwJ2zZeVFoxEJXw1GedkR1ERmkq1WZpPUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkqOiJuGwbI%2BUPLDircA2i00wxKgl4I%2FEJWsUt0LTZlTYoT%2FN%2FtTWVu31rX3xE%2BRDHBPqx9QZg9xwkI%2BILFsswKJ0JA6Ue1LDI1p3F3kw39jj0%2BzzSzpbZfYQV50hIxIoFkVp%2F5Yj5VmebSExrHCc9frsxnX1ve28U2v8JZZuky3CmIWd0PqoQo9EzCHblhTl4mSvKjlN4hgJuHQhTjrgnrkxSi%2BU3d6NiPY5BX7KGghMIAq3RKTARu5OxkEsIOf%2FFKWO%2Bwq7BSbYT7L5zH7cjH6Yn9%2BUMuvk43JUHLb6JT6apLYs9lx67Y2QKDi4WYOVsC8a6%2BKJFFaBi4%2FRlC7J64O3Cj%2BO%2FDa6QYeKpHdwfW94%2FTfRopPzdLvHvzpkNGnHo%2BPz2rDeAt0YVnUoZw5Vg7gK931xbcBKL9DzIZSSXSJtrntwDhJeQzQy2%2BOZGBs0KGG4IA2j33I%2FAE6wK6MpIGO9oog3xPih%2FlFnHbTMVvOsURCxM3rN0qi5mE8TIfHRZF6wX%2BUtoWUUK8%2FhZFGARWBOtTUqCRed6sq%2BEuaUshZCriL69BBCioC9MijSpKO6Otx8q6eikURPkIwGxzA9SNwfURAZusyI96PhMR7JoxicIC4eNVzw61cOdx1QFTrHlpAgqVn9AJO44OMPD14MQGOqUBH%2FL1LzwnGv3kuELyNDM%2F%2FWTd0vydltXm0jNBe8VAekGkqksa8ArMh3XufJ4DrPJ3Kly7KUUICKm5i4AfS51iYXJovGU5lwWVcDjeT2deuiEKW0Q63Phdu05eP5tuG8rXuii2wN7MUUcmHA9Hgk0133rIotY2%2B07l1h7PtXnWq%2BonVjsfdtCnxq%2FTYZ4xFM5zcD4SpwbznPYF7lG7rRVWKELhDe6m&X-Amz-Signature=65058d8daae7fa1be9b03992f2c0c76648ef111ae1d1f6ec42043040cbd89d27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644STJRNY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3sk1sBN%2ByDoFcc03iNPYOejSTnBhtGgQyl%2F5rRSdKRAiEAzP%2FLd3WeQ%2BpwJ2zZeVFoxEJXw1GedkR1ERmkq1WZpPUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkqOiJuGwbI%2BUPLDircA2i00wxKgl4I%2FEJWsUt0LTZlTYoT%2FN%2FtTWVu31rX3xE%2BRDHBPqx9QZg9xwkI%2BILFsswKJ0JA6Ue1LDI1p3F3kw39jj0%2BzzSzpbZfYQV50hIxIoFkVp%2F5Yj5VmebSExrHCc9frsxnX1ve28U2v8JZZuky3CmIWd0PqoQo9EzCHblhTl4mSvKjlN4hgJuHQhTjrgnrkxSi%2BU3d6NiPY5BX7KGghMIAq3RKTARu5OxkEsIOf%2FFKWO%2Bwq7BSbYT7L5zH7cjH6Yn9%2BUMuvk43JUHLb6JT6apLYs9lx67Y2QKDi4WYOVsC8a6%2BKJFFaBi4%2FRlC7J64O3Cj%2BO%2FDa6QYeKpHdwfW94%2FTfRopPzdLvHvzpkNGnHo%2BPz2rDeAt0YVnUoZw5Vg7gK931xbcBKL9DzIZSSXSJtrntwDhJeQzQy2%2BOZGBs0KGG4IA2j33I%2FAE6wK6MpIGO9oog3xPih%2FlFnHbTMVvOsURCxM3rN0qi5mE8TIfHRZF6wX%2BUtoWUUK8%2FhZFGARWBOtTUqCRed6sq%2BEuaUshZCriL69BBCioC9MijSpKO6Otx8q6eikURPkIwGxzA9SNwfURAZusyI96PhMR7JoxicIC4eNVzw61cOdx1QFTrHlpAgqVn9AJO44OMPD14MQGOqUBH%2FL1LzwnGv3kuELyNDM%2F%2FWTd0vydltXm0jNBe8VAekGkqksa8ArMh3XufJ4DrPJ3Kly7KUUICKm5i4AfS51iYXJovGU5lwWVcDjeT2deuiEKW0Q63Phdu05eP5tuG8rXuii2wN7MUUcmHA9Hgk0133rIotY2%2B07l1h7PtXnWq%2BonVjsfdtCnxq%2FTYZ4xFM5zcD4SpwbznPYF7lG7rRVWKELhDe6m&X-Amz-Signature=0187edf7f933eb471c4de1d11408e6f5d483151cde90442dd221b50ad51136b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644STJRNY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3sk1sBN%2ByDoFcc03iNPYOejSTnBhtGgQyl%2F5rRSdKRAiEAzP%2FLd3WeQ%2BpwJ2zZeVFoxEJXw1GedkR1ERmkq1WZpPUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkqOiJuGwbI%2BUPLDircA2i00wxKgl4I%2FEJWsUt0LTZlTYoT%2FN%2FtTWVu31rX3xE%2BRDHBPqx9QZg9xwkI%2BILFsswKJ0JA6Ue1LDI1p3F3kw39jj0%2BzzSzpbZfYQV50hIxIoFkVp%2F5Yj5VmebSExrHCc9frsxnX1ve28U2v8JZZuky3CmIWd0PqoQo9EzCHblhTl4mSvKjlN4hgJuHQhTjrgnrkxSi%2BU3d6NiPY5BX7KGghMIAq3RKTARu5OxkEsIOf%2FFKWO%2Bwq7BSbYT7L5zH7cjH6Yn9%2BUMuvk43JUHLb6JT6apLYs9lx67Y2QKDi4WYOVsC8a6%2BKJFFaBi4%2FRlC7J64O3Cj%2BO%2FDa6QYeKpHdwfW94%2FTfRopPzdLvHvzpkNGnHo%2BPz2rDeAt0YVnUoZw5Vg7gK931xbcBKL9DzIZSSXSJtrntwDhJeQzQy2%2BOZGBs0KGG4IA2j33I%2FAE6wK6MpIGO9oog3xPih%2FlFnHbTMVvOsURCxM3rN0qi5mE8TIfHRZF6wX%2BUtoWUUK8%2FhZFGARWBOtTUqCRed6sq%2BEuaUshZCriL69BBCioC9MijSpKO6Otx8q6eikURPkIwGxzA9SNwfURAZusyI96PhMR7JoxicIC4eNVzw61cOdx1QFTrHlpAgqVn9AJO44OMPD14MQGOqUBH%2FL1LzwnGv3kuELyNDM%2F%2FWTd0vydltXm0jNBe8VAekGkqksa8ArMh3XufJ4DrPJ3Kly7KUUICKm5i4AfS51iYXJovGU5lwWVcDjeT2deuiEKW0Q63Phdu05eP5tuG8rXuii2wN7MUUcmHA9Hgk0133rIotY2%2B07l1h7PtXnWq%2BonVjsfdtCnxq%2FTYZ4xFM5zcD4SpwbznPYF7lG7rRVWKELhDe6m&X-Amz-Signature=0d4b463f396988630529c749c7c43677185e69f5db278465f1085304dadf3416&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644STJRNY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3sk1sBN%2ByDoFcc03iNPYOejSTnBhtGgQyl%2F5rRSdKRAiEAzP%2FLd3WeQ%2BpwJ2zZeVFoxEJXw1GedkR1ERmkq1WZpPUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkqOiJuGwbI%2BUPLDircA2i00wxKgl4I%2FEJWsUt0LTZlTYoT%2FN%2FtTWVu31rX3xE%2BRDHBPqx9QZg9xwkI%2BILFsswKJ0JA6Ue1LDI1p3F3kw39jj0%2BzzSzpbZfYQV50hIxIoFkVp%2F5Yj5VmebSExrHCc9frsxnX1ve28U2v8JZZuky3CmIWd0PqoQo9EzCHblhTl4mSvKjlN4hgJuHQhTjrgnrkxSi%2BU3d6NiPY5BX7KGghMIAq3RKTARu5OxkEsIOf%2FFKWO%2Bwq7BSbYT7L5zH7cjH6Yn9%2BUMuvk43JUHLb6JT6apLYs9lx67Y2QKDi4WYOVsC8a6%2BKJFFaBi4%2FRlC7J64O3Cj%2BO%2FDa6QYeKpHdwfW94%2FTfRopPzdLvHvzpkNGnHo%2BPz2rDeAt0YVnUoZw5Vg7gK931xbcBKL9DzIZSSXSJtrntwDhJeQzQy2%2BOZGBs0KGG4IA2j33I%2FAE6wK6MpIGO9oog3xPih%2FlFnHbTMVvOsURCxM3rN0qi5mE8TIfHRZF6wX%2BUtoWUUK8%2FhZFGARWBOtTUqCRed6sq%2BEuaUshZCriL69BBCioC9MijSpKO6Otx8q6eikURPkIwGxzA9SNwfURAZusyI96PhMR7JoxicIC4eNVzw61cOdx1QFTrHlpAgqVn9AJO44OMPD14MQGOqUBH%2FL1LzwnGv3kuELyNDM%2F%2FWTd0vydltXm0jNBe8VAekGkqksa8ArMh3XufJ4DrPJ3Kly7KUUICKm5i4AfS51iYXJovGU5lwWVcDjeT2deuiEKW0Q63Phdu05eP5tuG8rXuii2wN7MUUcmHA9Hgk0133rIotY2%2B07l1h7PtXnWq%2BonVjsfdtCnxq%2FTYZ4xFM5zcD4SpwbznPYF7lG7rRVWKELhDe6m&X-Amz-Signature=e762e9b9cbc65a776b62d24a643dfb89d0127508668177fe5db1599275697a38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644STJRNY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3sk1sBN%2ByDoFcc03iNPYOejSTnBhtGgQyl%2F5rRSdKRAiEAzP%2FLd3WeQ%2BpwJ2zZeVFoxEJXw1GedkR1ERmkq1WZpPUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkqOiJuGwbI%2BUPLDircA2i00wxKgl4I%2FEJWsUt0LTZlTYoT%2FN%2FtTWVu31rX3xE%2BRDHBPqx9QZg9xwkI%2BILFsswKJ0JA6Ue1LDI1p3F3kw39jj0%2BzzSzpbZfYQV50hIxIoFkVp%2F5Yj5VmebSExrHCc9frsxnX1ve28U2v8JZZuky3CmIWd0PqoQo9EzCHblhTl4mSvKjlN4hgJuHQhTjrgnrkxSi%2BU3d6NiPY5BX7KGghMIAq3RKTARu5OxkEsIOf%2FFKWO%2Bwq7BSbYT7L5zH7cjH6Yn9%2BUMuvk43JUHLb6JT6apLYs9lx67Y2QKDi4WYOVsC8a6%2BKJFFaBi4%2FRlC7J64O3Cj%2BO%2FDa6QYeKpHdwfW94%2FTfRopPzdLvHvzpkNGnHo%2BPz2rDeAt0YVnUoZw5Vg7gK931xbcBKL9DzIZSSXSJtrntwDhJeQzQy2%2BOZGBs0KGG4IA2j33I%2FAE6wK6MpIGO9oog3xPih%2FlFnHbTMVvOsURCxM3rN0qi5mE8TIfHRZF6wX%2BUtoWUUK8%2FhZFGARWBOtTUqCRed6sq%2BEuaUshZCriL69BBCioC9MijSpKO6Otx8q6eikURPkIwGxzA9SNwfURAZusyI96PhMR7JoxicIC4eNVzw61cOdx1QFTrHlpAgqVn9AJO44OMPD14MQGOqUBH%2FL1LzwnGv3kuELyNDM%2F%2FWTd0vydltXm0jNBe8VAekGkqksa8ArMh3XufJ4DrPJ3Kly7KUUICKm5i4AfS51iYXJovGU5lwWVcDjeT2deuiEKW0Q63Phdu05eP5tuG8rXuii2wN7MUUcmHA9Hgk0133rIotY2%2B07l1h7PtXnWq%2BonVjsfdtCnxq%2FTYZ4xFM5zcD4SpwbznPYF7lG7rRVWKELhDe6m&X-Amz-Signature=e715637ebaaf147bc027b95540c3c8cf186ec06a449537f6545acf31e47f5692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644STJRNY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3sk1sBN%2ByDoFcc03iNPYOejSTnBhtGgQyl%2F5rRSdKRAiEAzP%2FLd3WeQ%2BpwJ2zZeVFoxEJXw1GedkR1ERmkq1WZpPUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkqOiJuGwbI%2BUPLDircA2i00wxKgl4I%2FEJWsUt0LTZlTYoT%2FN%2FtTWVu31rX3xE%2BRDHBPqx9QZg9xwkI%2BILFsswKJ0JA6Ue1LDI1p3F3kw39jj0%2BzzSzpbZfYQV50hIxIoFkVp%2F5Yj5VmebSExrHCc9frsxnX1ve28U2v8JZZuky3CmIWd0PqoQo9EzCHblhTl4mSvKjlN4hgJuHQhTjrgnrkxSi%2BU3d6NiPY5BX7KGghMIAq3RKTARu5OxkEsIOf%2FFKWO%2Bwq7BSbYT7L5zH7cjH6Yn9%2BUMuvk43JUHLb6JT6apLYs9lx67Y2QKDi4WYOVsC8a6%2BKJFFaBi4%2FRlC7J64O3Cj%2BO%2FDa6QYeKpHdwfW94%2FTfRopPzdLvHvzpkNGnHo%2BPz2rDeAt0YVnUoZw5Vg7gK931xbcBKL9DzIZSSXSJtrntwDhJeQzQy2%2BOZGBs0KGG4IA2j33I%2FAE6wK6MpIGO9oog3xPih%2FlFnHbTMVvOsURCxM3rN0qi5mE8TIfHRZF6wX%2BUtoWUUK8%2FhZFGARWBOtTUqCRed6sq%2BEuaUshZCriL69BBCioC9MijSpKO6Otx8q6eikURPkIwGxzA9SNwfURAZusyI96PhMR7JoxicIC4eNVzw61cOdx1QFTrHlpAgqVn9AJO44OMPD14MQGOqUBH%2FL1LzwnGv3kuELyNDM%2F%2FWTd0vydltXm0jNBe8VAekGkqksa8ArMh3XufJ4DrPJ3Kly7KUUICKm5i4AfS51iYXJovGU5lwWVcDjeT2deuiEKW0Q63Phdu05eP5tuG8rXuii2wN7MUUcmHA9Hgk0133rIotY2%2B07l1h7PtXnWq%2BonVjsfdtCnxq%2FTYZ4xFM5zcD4SpwbznPYF7lG7rRVWKELhDe6m&X-Amz-Signature=2aaebd833d0b85b0750490550eeae153b4e01412f818af7c878cbcc6815d394d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644STJRNY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3sk1sBN%2ByDoFcc03iNPYOejSTnBhtGgQyl%2F5rRSdKRAiEAzP%2FLd3WeQ%2BpwJ2zZeVFoxEJXw1GedkR1ERmkq1WZpPUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkqOiJuGwbI%2BUPLDircA2i00wxKgl4I%2FEJWsUt0LTZlTYoT%2FN%2FtTWVu31rX3xE%2BRDHBPqx9QZg9xwkI%2BILFsswKJ0JA6Ue1LDI1p3F3kw39jj0%2BzzSzpbZfYQV50hIxIoFkVp%2F5Yj5VmebSExrHCc9frsxnX1ve28U2v8JZZuky3CmIWd0PqoQo9EzCHblhTl4mSvKjlN4hgJuHQhTjrgnrkxSi%2BU3d6NiPY5BX7KGghMIAq3RKTARu5OxkEsIOf%2FFKWO%2Bwq7BSbYT7L5zH7cjH6Yn9%2BUMuvk43JUHLb6JT6apLYs9lx67Y2QKDi4WYOVsC8a6%2BKJFFaBi4%2FRlC7J64O3Cj%2BO%2FDa6QYeKpHdwfW94%2FTfRopPzdLvHvzpkNGnHo%2BPz2rDeAt0YVnUoZw5Vg7gK931xbcBKL9DzIZSSXSJtrntwDhJeQzQy2%2BOZGBs0KGG4IA2j33I%2FAE6wK6MpIGO9oog3xPih%2FlFnHbTMVvOsURCxM3rN0qi5mE8TIfHRZF6wX%2BUtoWUUK8%2FhZFGARWBOtTUqCRed6sq%2BEuaUshZCriL69BBCioC9MijSpKO6Otx8q6eikURPkIwGxzA9SNwfURAZusyI96PhMR7JoxicIC4eNVzw61cOdx1QFTrHlpAgqVn9AJO44OMPD14MQGOqUBH%2FL1LzwnGv3kuELyNDM%2F%2FWTd0vydltXm0jNBe8VAekGkqksa8ArMh3XufJ4DrPJ3Kly7KUUICKm5i4AfS51iYXJovGU5lwWVcDjeT2deuiEKW0Q63Phdu05eP5tuG8rXuii2wN7MUUcmHA9Hgk0133rIotY2%2B07l1h7PtXnWq%2BonVjsfdtCnxq%2FTYZ4xFM5zcD4SpwbznPYF7lG7rRVWKELhDe6m&X-Amz-Signature=f57c2d6d04bf5fc1b3cb4f84130000ae02c4c51e9ee89c986d728e70a4ad21a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644STJRNY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3sk1sBN%2ByDoFcc03iNPYOejSTnBhtGgQyl%2F5rRSdKRAiEAzP%2FLd3WeQ%2BpwJ2zZeVFoxEJXw1GedkR1ERmkq1WZpPUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkqOiJuGwbI%2BUPLDircA2i00wxKgl4I%2FEJWsUt0LTZlTYoT%2FN%2FtTWVu31rX3xE%2BRDHBPqx9QZg9xwkI%2BILFsswKJ0JA6Ue1LDI1p3F3kw39jj0%2BzzSzpbZfYQV50hIxIoFkVp%2F5Yj5VmebSExrHCc9frsxnX1ve28U2v8JZZuky3CmIWd0PqoQo9EzCHblhTl4mSvKjlN4hgJuHQhTjrgnrkxSi%2BU3d6NiPY5BX7KGghMIAq3RKTARu5OxkEsIOf%2FFKWO%2Bwq7BSbYT7L5zH7cjH6Yn9%2BUMuvk43JUHLb6JT6apLYs9lx67Y2QKDi4WYOVsC8a6%2BKJFFaBi4%2FRlC7J64O3Cj%2BO%2FDa6QYeKpHdwfW94%2FTfRopPzdLvHvzpkNGnHo%2BPz2rDeAt0YVnUoZw5Vg7gK931xbcBKL9DzIZSSXSJtrntwDhJeQzQy2%2BOZGBs0KGG4IA2j33I%2FAE6wK6MpIGO9oog3xPih%2FlFnHbTMVvOsURCxM3rN0qi5mE8TIfHRZF6wX%2BUtoWUUK8%2FhZFGARWBOtTUqCRed6sq%2BEuaUshZCriL69BBCioC9MijSpKO6Otx8q6eikURPkIwGxzA9SNwfURAZusyI96PhMR7JoxicIC4eNVzw61cOdx1QFTrHlpAgqVn9AJO44OMPD14MQGOqUBH%2FL1LzwnGv3kuELyNDM%2F%2FWTd0vydltXm0jNBe8VAekGkqksa8ArMh3XufJ4DrPJ3Kly7KUUICKm5i4AfS51iYXJovGU5lwWVcDjeT2deuiEKW0Q63Phdu05eP5tuG8rXuii2wN7MUUcmHA9Hgk0133rIotY2%2B07l1h7PtXnWq%2BonVjsfdtCnxq%2FTYZ4xFM5zcD4SpwbznPYF7lG7rRVWKELhDe6m&X-Amz-Signature=9e6bcb1c95f7fd5cf4661aaf123c5ae5fe4f3e3ae40d865c1a5b8fe020d7fc90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644STJRNY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3sk1sBN%2ByDoFcc03iNPYOejSTnBhtGgQyl%2F5rRSdKRAiEAzP%2FLd3WeQ%2BpwJ2zZeVFoxEJXw1GedkR1ERmkq1WZpPUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkqOiJuGwbI%2BUPLDircA2i00wxKgl4I%2FEJWsUt0LTZlTYoT%2FN%2FtTWVu31rX3xE%2BRDHBPqx9QZg9xwkI%2BILFsswKJ0JA6Ue1LDI1p3F3kw39jj0%2BzzSzpbZfYQV50hIxIoFkVp%2F5Yj5VmebSExrHCc9frsxnX1ve28U2v8JZZuky3CmIWd0PqoQo9EzCHblhTl4mSvKjlN4hgJuHQhTjrgnrkxSi%2BU3d6NiPY5BX7KGghMIAq3RKTARu5OxkEsIOf%2FFKWO%2Bwq7BSbYT7L5zH7cjH6Yn9%2BUMuvk43JUHLb6JT6apLYs9lx67Y2QKDi4WYOVsC8a6%2BKJFFaBi4%2FRlC7J64O3Cj%2BO%2FDa6QYeKpHdwfW94%2FTfRopPzdLvHvzpkNGnHo%2BPz2rDeAt0YVnUoZw5Vg7gK931xbcBKL9DzIZSSXSJtrntwDhJeQzQy2%2BOZGBs0KGG4IA2j33I%2FAE6wK6MpIGO9oog3xPih%2FlFnHbTMVvOsURCxM3rN0qi5mE8TIfHRZF6wX%2BUtoWUUK8%2FhZFGARWBOtTUqCRed6sq%2BEuaUshZCriL69BBCioC9MijSpKO6Otx8q6eikURPkIwGxzA9SNwfURAZusyI96PhMR7JoxicIC4eNVzw61cOdx1QFTrHlpAgqVn9AJO44OMPD14MQGOqUBH%2FL1LzwnGv3kuELyNDM%2F%2FWTd0vydltXm0jNBe8VAekGkqksa8ArMh3XufJ4DrPJ3Kly7KUUICKm5i4AfS51iYXJovGU5lwWVcDjeT2deuiEKW0Q63Phdu05eP5tuG8rXuii2wN7MUUcmHA9Hgk0133rIotY2%2B07l1h7PtXnWq%2BonVjsfdtCnxq%2FTYZ4xFM5zcD4SpwbznPYF7lG7rRVWKELhDe6m&X-Amz-Signature=cab2d61bd2ee7f5b8880be1cfe318c0f0f84256c3917c8352c6e2166c4d5f28f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW5YYHKN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8a3OxPCeAAQ%2BPd8afqV3bHHkSPGJENP335WmfhYZ2MQIhAIPqxGA%2FLJ0E8yY2pmi9ae5GFC4a15dnOxS18JZwtJ%2FMKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiO0RsskwdhozBrGIq3ANpX4YhH3mdRL8Ih9V31mVUqpyEa77fbBJ4QyB3w6olN6VdX2OiPWfNaTEiRi9oOFBUDvzlLL271iTXgy07g5LwgyHyJ6hDgbiPDGRIAptmlokvXCHydQQPOvYFBa6wR5C0EEJkuQNlidhQ4YHgBI7umJJ8lCcRglfC2EDIY2Iz1yYBBQzPPWUPs7CrR9jgMG4nRtZV7TklrG2wFu6aF48zUxcurwDGy1apJ4CSRIu7UzdY2YrV6s532SeAKwVxuD5u6epcZlb%2FjN1TI%2BiYe7MbYl7vZZuETJC4Fy%2B0KFOx4W0zH11vAa%2FXQrujv5qRpr%2BbPxzhWC%2FgcxMh8KvQpNXWxGyQKKwgsYtV%2BQEHYolFHxsBV8JmjD0QtUW%2BSiRlo8UfobkLuhhNLqL7T%2FehsSYLOOYWKEiPtRPSUG4jH%2Bcubs1Kx%2BXRiA%2BO%2FxOYVPG1tcIUWxBJGZSnOfljwakeN%2Bfhl0QJOxZMu30V9XR9qCkPn7zctxWFamSjy3kcQcF4eFktgKUmlVAbejV0ggiNOJERLCvsHrrt1BpiI7%2FdjmBsXowCl2VGTxHdnwJ%2BAtH8Gz8Qd7EA2SKSxFlQCenysHZG%2BeI%2BThkEZhCyj17A3dKyzsv4WkIGMA25XkfE7TDD9eDEBjqkARGGEUOhQ4ebykuSf2TLAjE7isC3En01YoI4p4ImFd2zDTNyXndSGED%2BPVYySE6OJO5Ei%2BFNCKSB%2BINdVo%2BG6%2FGHwztGWfecSyG3vW4F1q64%2BeEFRtq4XpXIvKmwPEjnGK5ZS3uTfpiWhhxcMZ0J2%2FaD8OCD53lqu69VOiCnEhqtoLvf%2F0eCUeK%2BCg3Yd8aAO273qCXdvj5K9pPtDXlFeqg9VYzG&X-Amz-Signature=420f14bc43f2312c6d299414d9651ff5772a4fbd6e5df2c75b11b18f2c110337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NTEENBO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS%2BuDEVVJkFV13iMeGCXtELLfwReh%2FE%2B%2Fd4ugvMtxHXQIhAOG0KgBV9IbnbxV63XAX5nnuI2gzG9wG5zP63Co%2BRCbmKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpWVi%2BZrxfToPhKnYq3APSWEv36OrStoa0HKDwxGQj6rLuXO7Ufgencm8%2F9cB6Zz1twawzVKqB6zofHvGKb0uu0XLTD29UQEPLnBil9UUT5MjfmpIXH3eqbmjMpq7ZcBDcmpzDHm4z1xo9asovkZRjXw7ocEfZjFKzmfnkr%2BPNxBrx%2Frr3EngerJ2CNPWsan8u%2BSTt4pWFMOLdIyDVdCkcwKFIKFR44CEM%2FeaXwPc2e5cJjrjQ02iMgSnP1NN%2FVzwBkkrlzSWe4qvhYN668KLn%2F0jrr9mFRDbMSoS%2FTp1y%2Fbvlc86vwHGdCJHMYuntqXDqnFtgh6qaSbeMs2IKxqgHmlDYRwfUvsCR8oJ%2F9anHhNJZYQ9cEB0YhrepxXl1oBKuF9aBbwPqRYlgeYscVdWYUpX9KsrPGDRqgOxF%2BrbYeCuvVfRnNMC2O9DrFOl5tfg3O3K0nXQLj2iv4OhtSAQkQSGlZaA2qskuGrxtz7NmF%2FUA4dMhiBL1VZuFMOjOcVfVdzMLXDEXe%2FNSLbtAqidZ3k4PM6u4wGkwiRfQqWEQNdLwh%2F9UdZysCs8MlRlJUOLA5Kg2cikFYPV74Pp7n7nJ0GL%2FawXwR1bh9gnW4z7Y6Zs438b6qEdC9Ah8HctkDGjRQRQwqXqxI24FbTDt9eDEBjqkAZEUjvU5JdGJqYZp69cXciu6%2BGtQ9kBcCLWyNMjA%2FHXRqxjuhXOQoO92B79S4RMNCFlrBQJiNMqRLp2BycKWU0moUeEgGeejIFD%2FbVjzVfs99Nc1oBb0f4wMKLjJXztpUVHiWpr5uCi7laLQJ2oW8GozEEGil6CSzfKl8Sjic5Dsq%2BOetUwiZ1%2BLwFv6rhCjDYrOrFOMaKre0HzwPyc0d13%2Bfa2e&X-Amz-Signature=36511625bf126bcc06c74918f98fbff28bfdeab5ae1a286d9cfcccd3c688daf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRBXURVX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV%2FlFe5SJJlNDwqHly0jazVKEw3NBaimjack9m7klwHAIhAN0AOecT%2BJq5iKPdxlEc7oDmYxrhsQgWk05DTTyyIUTjKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvxjoC%2Bal604v8BLAq3ANdWL4n9E64vvfcarxdl8y56EUd%2F9k4z1Wc10ztyZ7Wq6rd2BhW%2FBhdgRAUdz%2BlZrR9IPeKooOe981LSPB2T2wcZPxBw4AkJnczZiwjU31WgpixI6XsbCA2V8t4a9J5TcBF8fs7%2FB9q4d80I7GDywMxWE1kMwA7h9GKJjGbbcC%2Bi%2FOLSugZQ9MkxrBmMEn9qTERsjyYF10%2F0qZp0MV%2Bco6PaVZNVeUknSnBo1VCGz5je5RJo%2FKcC7Lwuwv3r9PkfbW4ZAWiO9iY2Js33C2X%2BJA%2BCeDa8aojfAMdRyN2n8pfVaFDVIWldpW8aMuY%2B5n6J51NNFeNEVFfS86umMywiG47y8y3%2BjFUiaZjLgIz0y4KR91Q0qVl57kk%2B2iWm5PRxVLiLosACKFkCggObVVyu96hGNN1fyx8BEBhfKBYAVoXwx3YE4B5eYiieLsf39sue1y7wNGWBudin7VEFNN%2Buy2HhXtdcR4eDglXeAGCXTlM3STS4K%2FemIOIyoWM5gV%2BE8a3i5x%2FyOTomxZbx8jdACZ84KJhdV%2FCePUD64KwQx9COzhxQ1NyrDATAC6mqxsnS2qybtYUpWibR7fQ%2FenI5aedrWuiXLntyN3NlVjo%2F0MI601v%2BurpV0CWzizitDDk9eDEBjqkAdDnP12ekk4kLIF2qaBT0mPc7M0zBwnhrUEGQm1Pbv8neWEVqIGymO7QCgM%2ByJkreBOOhH1Zeb3CN6NOmjaqHay33jkcUS4nLBXZyfPy1ORBXs0TacRqTQ7qMq1r4wd2fGTkqf3cLtfFYPCDLkTqwsgWpToExVjkkajVhwdB2q3XVBiJvPo0Ia3H%2Fhvkztgv0nZnHELYqzgzlgp3xyg2Y%2BV%2Bmg7d&X-Amz-Signature=767f07cc3e0adaef0788d3b0721b16a7770f80d0231c4420486854207f6aafaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644STJRNY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3sk1sBN%2ByDoFcc03iNPYOejSTnBhtGgQyl%2F5rRSdKRAiEAzP%2FLd3WeQ%2BpwJ2zZeVFoxEJXw1GedkR1ERmkq1WZpPUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkqOiJuGwbI%2BUPLDircA2i00wxKgl4I%2FEJWsUt0LTZlTYoT%2FN%2FtTWVu31rX3xE%2BRDHBPqx9QZg9xwkI%2BILFsswKJ0JA6Ue1LDI1p3F3kw39jj0%2BzzSzpbZfYQV50hIxIoFkVp%2F5Yj5VmebSExrHCc9frsxnX1ve28U2v8JZZuky3CmIWd0PqoQo9EzCHblhTl4mSvKjlN4hgJuHQhTjrgnrkxSi%2BU3d6NiPY5BX7KGghMIAq3RKTARu5OxkEsIOf%2FFKWO%2Bwq7BSbYT7L5zH7cjH6Yn9%2BUMuvk43JUHLb6JT6apLYs9lx67Y2QKDi4WYOVsC8a6%2BKJFFaBi4%2FRlC7J64O3Cj%2BO%2FDa6QYeKpHdwfW94%2FTfRopPzdLvHvzpkNGnHo%2BPz2rDeAt0YVnUoZw5Vg7gK931xbcBKL9DzIZSSXSJtrntwDhJeQzQy2%2BOZGBs0KGG4IA2j33I%2FAE6wK6MpIGO9oog3xPih%2FlFnHbTMVvOsURCxM3rN0qi5mE8TIfHRZF6wX%2BUtoWUUK8%2FhZFGARWBOtTUqCRed6sq%2BEuaUshZCriL69BBCioC9MijSpKO6Otx8q6eikURPkIwGxzA9SNwfURAZusyI96PhMR7JoxicIC4eNVzw61cOdx1QFTrHlpAgqVn9AJO44OMPD14MQGOqUBH%2FL1LzwnGv3kuELyNDM%2F%2FWTd0vydltXm0jNBe8VAekGkqksa8ArMh3XufJ4DrPJ3Kly7KUUICKm5i4AfS51iYXJovGU5lwWVcDjeT2deuiEKW0Q63Phdu05eP5tuG8rXuii2wN7MUUcmHA9Hgk0133rIotY2%2B07l1h7PtXnWq%2BonVjsfdtCnxq%2FTYZ4xFM5zcD4SpwbznPYF7lG7rRVWKELhDe6m&X-Amz-Signature=ca12e8c347190e3146ef4b4aee8ebfe3f3f9fb345b4c4fd59ab452bc32bd629f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675VLFTMH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxAbG%2FHqd2ObR8ckanzMv8k7WfRKUqMc4MZSi8o8mDNgIgTzkU8jed8Bhg3uMPPoy05yUpagEXG2s96OUTEXFUHQkqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBHpg40nYNa99jjEJCrcA8tSUQSMhb%2BzE%2Fvwz5UC2GIUERo9fUFgDYX4APnAxHlxJHCivt1qyOofkzyLdEAhYoUDK%2BBa9a%2F%2BQVCY%2BaxFcSCA9diOFfBXxY5ZWDde4Otlechu82B%2Bq3g2CoBHQ%2BN6hZ5EGyLqwRDzY6jtFNY2E2wE%2BlN%2FPPtF58nYbC7h3PgT3pUg9MQFdk%2F1TVNsInLPjpFQqg9M4O9oGybkIbH7QU5YOH7lnJtFo2PwYLQHbLo5EEgOkrQpKTq51s75V%2FVfAciIL3OCkZ4c%2FvMPjuieVnKlwZE8zu6uZ955KRFpfe1a0Ck%2BGNd3VUuPrJ9A7R090jgscK718%2BNWOgysWo%2F2vfwnTuL5s7EacqtgWCHdnoRwDanmX6uEYgqbQqv7sCHIY4WM7jpV75slPBj%2BGQWxfTdEymepjKvipZM71i2DO%2FMjYjs86WNrP9I5H9YFx9c4cOoAxcGNEyci%2B1lUuaYPY0jUoXVb0WGnsK4%2B7PuoiifKVxMfSWi7SXJwOQfp%2FPxbv%2BaYGvjMA%2FrXwgKasej8r8PQklZ053iCtE5j0XLc7G8evB9rtrTQyGPiyo4lglIdqOaykGsFcOFQU7hxC%2F%2Bg55upl%2BLuD3w6L3r78bZOUNWnhLrIo7FbTo03jhsQMO704MQGOqUBcmP7RfuOdQuuq3ky1uI6djh%2FYYVCMnAXIJvjjIb76%2FLCsUDIlGY%2Bvv0GtzhwXwHBJX7oc%2BYnY%2FC8szn3y60mq6hsRpezJx%2BcM%2BdBMHJzv8WnXgsQ1jZVA085IC0aSzIdZBl%2FDh8NXa86b1MStt2PGMU4d9FGflPDeTA6cyfVDx2agSLateyGnZgX%2BWFQ6VKG%2BybfA4NuXIURLLbyksz6INgVDsXv&X-Amz-Signature=f0f3ff0d7061d8a36a9a0fd212a8fca8fec98b1d88aea786026ced33597a2437&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644STJRNY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3sk1sBN%2ByDoFcc03iNPYOejSTnBhtGgQyl%2F5rRSdKRAiEAzP%2FLd3WeQ%2BpwJ2zZeVFoxEJXw1GedkR1ERmkq1WZpPUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkqOiJuGwbI%2BUPLDircA2i00wxKgl4I%2FEJWsUt0LTZlTYoT%2FN%2FtTWVu31rX3xE%2BRDHBPqx9QZg9xwkI%2BILFsswKJ0JA6Ue1LDI1p3F3kw39jj0%2BzzSzpbZfYQV50hIxIoFkVp%2F5Yj5VmebSExrHCc9frsxnX1ve28U2v8JZZuky3CmIWd0PqoQo9EzCHblhTl4mSvKjlN4hgJuHQhTjrgnrkxSi%2BU3d6NiPY5BX7KGghMIAq3RKTARu5OxkEsIOf%2FFKWO%2Bwq7BSbYT7L5zH7cjH6Yn9%2BUMuvk43JUHLb6JT6apLYs9lx67Y2QKDi4WYOVsC8a6%2BKJFFaBi4%2FRlC7J64O3Cj%2BO%2FDa6QYeKpHdwfW94%2FTfRopPzdLvHvzpkNGnHo%2BPz2rDeAt0YVnUoZw5Vg7gK931xbcBKL9DzIZSSXSJtrntwDhJeQzQy2%2BOZGBs0KGG4IA2j33I%2FAE6wK6MpIGO9oog3xPih%2FlFnHbTMVvOsURCxM3rN0qi5mE8TIfHRZF6wX%2BUtoWUUK8%2FhZFGARWBOtTUqCRed6sq%2BEuaUshZCriL69BBCioC9MijSpKO6Otx8q6eikURPkIwGxzA9SNwfURAZusyI96PhMR7JoxicIC4eNVzw61cOdx1QFTrHlpAgqVn9AJO44OMPD14MQGOqUBH%2FL1LzwnGv3kuELyNDM%2F%2FWTd0vydltXm0jNBe8VAekGkqksa8ArMh3XufJ4DrPJ3Kly7KUUICKm5i4AfS51iYXJovGU5lwWVcDjeT2deuiEKW0Q63Phdu05eP5tuG8rXuii2wN7MUUcmHA9Hgk0133rIotY2%2B07l1h7PtXnWq%2BonVjsfdtCnxq%2FTYZ4xFM5zcD4SpwbznPYF7lG7rRVWKELhDe6m&X-Amz-Signature=19b5ab4d317bfe7862c708673313d264521d8b2bbf49ea7ee24849162ab773a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVB32EGW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMDlbj3qO87gEs5c%2FcwMk4Nbg1sSKGf6eKv9xTMvzu7wIhAPmDXacBAIRp2RVOTvUWR8BhiHY%2BefKWH%2BYYcgvJ%2FOA5KogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyhhhd%2F2TEIe69lMQYq3ANdMZnB4VSpHuxr9bGtzfCcaZZ9qTWh7%2FnnMr5v3jlyo%2Fxm27ToaBHVcyPo4CgZZQwFsjeSwbKmX6IE0wklbL%2FQypiW1XXl0ljPP%2ByG0etsVUxNCAilz4JXEAE9oFjl8YCyH1rSCoDtVnFw9BCH%2BaRs80X2GpWpYx6BR5W0Ssef7v6%2BnOr8Nsu2jWHBmprI14rZyCRUZK6nMqByO0iZf2YeyF4a1wD2z96Dgb%2BPCTFh0L3wLZYc7KtvOJezw4QhLOeM%2BkJKOAPRKnfkQI%2BblUyFbNgJYBClXPt5vuxcoUWv%2FKKNO5B%2F0t%2FD%2FTdEscLtYOU%2Fxx8dubgq5nKyov3zHh2wnZvrlilqEiEJ9pfpo9IfyPR87mtdiRpnUdtmoGPS8ZGWBuDpI8qdpvsBBAHqrhsy1dWJo%2Fqjp2AFpRsFJf6sgXjhISUvUWZwblsEZbHxFUT9oeOo4f4i9EKp59dCfzU6Ro0yrb5QtnGxakSLqV4vyidKMLr9mc%2B4qCMOmeblNap8TqyTOTHe%2FiAO5u5NwKQqJDlVJM%2FizSMDo4LlaMyQ%2Bbq3vP84TkN1VGP%2FGo2IO8xzV2%2BQNLRTp0E3ovoPGtCMjUBJ9TThH8nRhUIkOA00JRn%2FO2pJyyBqGKygijDz9ODEBjqkAUVNG88PPT0Fts38KkVDXl29xpfy%2FyOFeuCX%2F8KPMArvvsnZtlHLUucjcECAq%2BX6HZ6P5aXNEO8GFpIk3tN3wknqEeb6MIBb4fajhyQClsyYCxNTl8lkm44lq2Qu8p1hAePkrwCy66B7%2BYWcUkVUafaPaLZAWlxpQHEWfRUPRtpr4eNU4E5zJCa7%2Bp8A3W1opvG1JkQHSzdNdE1nDZ4xjRUpCQCV&X-Amz-Signature=25e100f4137a3e6bfcdc76b0b58347d383f3f3439a9a2830105070a9aed3b217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644STJRNY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3sk1sBN%2ByDoFcc03iNPYOejSTnBhtGgQyl%2F5rRSdKRAiEAzP%2FLd3WeQ%2BpwJ2zZeVFoxEJXw1GedkR1ERmkq1WZpPUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkqOiJuGwbI%2BUPLDircA2i00wxKgl4I%2FEJWsUt0LTZlTYoT%2FN%2FtTWVu31rX3xE%2BRDHBPqx9QZg9xwkI%2BILFsswKJ0JA6Ue1LDI1p3F3kw39jj0%2BzzSzpbZfYQV50hIxIoFkVp%2F5Yj5VmebSExrHCc9frsxnX1ve28U2v8JZZuky3CmIWd0PqoQo9EzCHblhTl4mSvKjlN4hgJuHQhTjrgnrkxSi%2BU3d6NiPY5BX7KGghMIAq3RKTARu5OxkEsIOf%2FFKWO%2Bwq7BSbYT7L5zH7cjH6Yn9%2BUMuvk43JUHLb6JT6apLYs9lx67Y2QKDi4WYOVsC8a6%2BKJFFaBi4%2FRlC7J64O3Cj%2BO%2FDa6QYeKpHdwfW94%2FTfRopPzdLvHvzpkNGnHo%2BPz2rDeAt0YVnUoZw5Vg7gK931xbcBKL9DzIZSSXSJtrntwDhJeQzQy2%2BOZGBs0KGG4IA2j33I%2FAE6wK6MpIGO9oog3xPih%2FlFnHbTMVvOsURCxM3rN0qi5mE8TIfHRZF6wX%2BUtoWUUK8%2FhZFGARWBOtTUqCRed6sq%2BEuaUshZCriL69BBCioC9MijSpKO6Otx8q6eikURPkIwGxzA9SNwfURAZusyI96PhMR7JoxicIC4eNVzw61cOdx1QFTrHlpAgqVn9AJO44OMPD14MQGOqUBH%2FL1LzwnGv3kuELyNDM%2F%2FWTd0vydltXm0jNBe8VAekGkqksa8ArMh3XufJ4DrPJ3Kly7KUUICKm5i4AfS51iYXJovGU5lwWVcDjeT2deuiEKW0Q63Phdu05eP5tuG8rXuii2wN7MUUcmHA9Hgk0133rIotY2%2B07l1h7PtXnWq%2BonVjsfdtCnxq%2FTYZ4xFM5zcD4SpwbznPYF7lG7rRVWKELhDe6m&X-Amz-Signature=032bc16ae8b882f7dfc775943a124d42fa2a89e4f853fad7ed9268d193bd8a6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXQ67X23%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5QMcuyb3iDN4GH%2FwAnnZtSS%2B7qx0vHbGQKHJVq7ZqzAiEAphSQaYBIKdtcncoepD%2F0jtGqZX%2BXuDzljEiM4%2F7KJkMqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMCS95LIq%2BmhEp4QyrcAxx0ti20qSCNOpPpx2YlqZT0LTrxnEQoQDnhpucVWE12Xvp%2BdhaHznwQ6ayb5heljD0qTfr5UXm%2FBSt%2FAGOXKkrQ93uMp%2BMf9HQKtzad2WaqwK0%2BcY6ufme1X9Vc6aFf1rOVaAg8clSPqPC341km3usf7MskHyaN1rXy8zxX6QQW1PdbHXQWftN0JJrwlJ6DNafEpgfs8BVHUVHgmC8BYMKPjOKCqTCGbkFq%2FY5ervPeDwGyMslzcCcW%2Bs8JZ4A6eWoeDdjAx8AhUpu%2BbTr%2FGYoJI7Gcy0w%2FX%2FOIPGd2%2F8mO6urMSeCPjabtbSO7jYRPX2jAOZS7ULYItRPqIsqErgp4ikbezk1%2FUKwOUObGLVs%2FYvcUoKKyN%2F0gIgYQmUg3pThzdAm3zR%2FHIkv%2Bc8F4chOMAAqs8Rqfc0wOjZ8CV%2BgU%2BM2%2FeZbeh2FpbOreMbguGjDg5lDdGngdaUrC%2BVQbgl72pb9EQiHq7e0ZMhtN5Zu46t%2BTf9KCCw4YHXW%2BICMQJeNQmwUNpq7kOkTUo49%2Bvj1Yo4dOGQjhInaNGcj0A0vZrHLMObycxiN1L%2FPEePGs%2Bav8YMPKyTuARblgX2SxJG4HbeC9eXQ4Yf3JNkuixG1tiXaTTj0N7FpsHSaEMPv04MQGOqUBOz4V%2FoD2tp9UzZB2prXynI8CqCnhk5rz1F1mLynstyLiosn7zxaOtPrc16%2FEdFQLEaCyfaQ1i6ALpHY6VHfSEdektlh5ZzSrWF3nwXcdIa9wpzX8nux5lWRiKWyJmyKCh3DARDn4TdXXOa1BbwO2iFAHndr4CIjv7A3hINsA7ntfYcOgociD3y5bzhExvnAhpwGsqSBDWoWVRciVgw0E%2B5TJhpen&X-Amz-Signature=be2698f9c3ab40d7875046164cf3debf6c7a89983d1ec700aff4c4cc6e1831de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644STJRNY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3sk1sBN%2ByDoFcc03iNPYOejSTnBhtGgQyl%2F5rRSdKRAiEAzP%2FLd3WeQ%2BpwJ2zZeVFoxEJXw1GedkR1ERmkq1WZpPUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkqOiJuGwbI%2BUPLDircA2i00wxKgl4I%2FEJWsUt0LTZlTYoT%2FN%2FtTWVu31rX3xE%2BRDHBPqx9QZg9xwkI%2BILFsswKJ0JA6Ue1LDI1p3F3kw39jj0%2BzzSzpbZfYQV50hIxIoFkVp%2F5Yj5VmebSExrHCc9frsxnX1ve28U2v8JZZuky3CmIWd0PqoQo9EzCHblhTl4mSvKjlN4hgJuHQhTjrgnrkxSi%2BU3d6NiPY5BX7KGghMIAq3RKTARu5OxkEsIOf%2FFKWO%2Bwq7BSbYT7L5zH7cjH6Yn9%2BUMuvk43JUHLb6JT6apLYs9lx67Y2QKDi4WYOVsC8a6%2BKJFFaBi4%2FRlC7J64O3Cj%2BO%2FDa6QYeKpHdwfW94%2FTfRopPzdLvHvzpkNGnHo%2BPz2rDeAt0YVnUoZw5Vg7gK931xbcBKL9DzIZSSXSJtrntwDhJeQzQy2%2BOZGBs0KGG4IA2j33I%2FAE6wK6MpIGO9oog3xPih%2FlFnHbTMVvOsURCxM3rN0qi5mE8TIfHRZF6wX%2BUtoWUUK8%2FhZFGARWBOtTUqCRed6sq%2BEuaUshZCriL69BBCioC9MijSpKO6Otx8q6eikURPkIwGxzA9SNwfURAZusyI96PhMR7JoxicIC4eNVzw61cOdx1QFTrHlpAgqVn9AJO44OMPD14MQGOqUBH%2FL1LzwnGv3kuELyNDM%2F%2FWTd0vydltXm0jNBe8VAekGkqksa8ArMh3XufJ4DrPJ3Kly7KUUICKm5i4AfS51iYXJovGU5lwWVcDjeT2deuiEKW0Q63Phdu05eP5tuG8rXuii2wN7MUUcmHA9Hgk0133rIotY2%2B07l1h7PtXnWq%2BonVjsfdtCnxq%2FTYZ4xFM5zcD4SpwbznPYF7lG7rRVWKELhDe6m&X-Amz-Signature=82e0a313f111da3cfcc03f5e7e26e7da8fc10ebdc3f5a653c2abb070a270843e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YTN3VAG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtPTpKEWQdeLCpihPlilzPt7W7VwpSlgiCcsi5StMmEgIgUoCCMsO8ub7lh%2FZY48%2FXI%2BFRYLvmnuq2%2Fe1ltkGsjhUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf5h1Z9klvdiK8wNSrcAzOruXLVmW8twhk4%2FYDV9492UImvuu36ktFF6PexpozgvK11XhDQJBotcLHmRtzJFLKfdteJ3hu9YRdZXgSri5Wvh29D8uxeggAqxuIg6%2Bb5LfieT6E9BfbubafRyAiXAtLn%2BdQl65tUO8p5hkmKzJ5J6rVjHH5yJ9RG8nPTMeFg5F0W9vZIpHboGSGIbol7wRO4%2F4mIJfYj0qMYmBr7QA%2B198etecGk9GZK5InipiI78N15D7xBfYb5XgbemnQrbNKpM2tS4j7lRXC7jQ8nZ1SzniT60UDZqDR511axkOmyHtSZQl38BceQYpl4%2BKsKc3qpiCkWnhXzgqrvpb%2FdgPojlvx0OzXRhfnjcEPVWbP%2FTqp6A4UDTDPqT6NuqhpH2vT8nrQdJEz0oaX3UF3w5%2FHK%2BvX5jANvmWBuEr4t2V6MwjKlxhT3DmaeTtDV6YLIBJbwbSNP1SbJBgRCpBHbnNN6k%2FGuoJizBsW8spoAcFy98xI%2Bhi6k74nwf8t7FMoQ5CQMXZYINm4HegGKBT6XgmbEqGeUQNnaV%2Fmni%2Bc0XsQsHYfb%2BsW2XkKfNO5oQ1t1ImyiW6t%2BUDeXmcsv5XIAyIrxvahDjb9%2FCL1lDS2oNIyZE57c7pv%2BltAEa7jHMPH04MQGOqUBB5q8ognx8SmPTIGrRal9%2BYi5CwHJnegVipFUaf%2FqBxAFo0hFw5FXpWpuDHMnSRgaglle3H%2Fx5r37A3th7F1h72R%2FhqQT9bcIE3Q8zpHxBWNjBLMvFOIhe6Z1FXhPLyPHr7zvpdYtnXH%2Fo8DoWzGfF6g4jthZ9E6HA2yjhjtKKTy0Xx35Ekq%2FTO7ArMBxLfgM0vKwCXoN5aaaJiZt9ICpYwEuhLg4&X-Amz-Signature=b56d8d26cd568b932efbec38a4840ab96d06ed48e686501fdf46e85b0f625505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RKH3NIL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQI4U1HGsnobfz2oXQoSo1XxaXkZP2hAZuf5NdV4bGzwIhAJ7LrTKp3%2FHs2zak5DR%2FgEyo6%2BsIbOWTSiaRk2P8C%2BucKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm1R91IklSOVnelqwq3AMwuUXIBlekg%2Be%2Bp36zUC2Z3fYO99oC9ZNl2FOSMHYT8G7peeLYzxGy%2BgH2r%2FmhUx8%2Bg6aRZrNHfiAFZdzJ4wqOtj8gFnEmGBIxGGRFTn6tKcpuY98sNHYGTH5bMvVMAKJbOWWqbHrgZhDaECcjAy0PyI2tQyKG1o%2F3drJi0pTUILEspZksIWY6DVm4oDIyclSu%2Fl0N90tNx%2BmFMz7iEnqm7o1JHpJKusbm9ux0HopmxXmKsJHrZ1jX9d3QzQzIh0hmU%2BCRWM86lOKRybfzVYKuZaGXCeCo0ilJZhmO%2FwT%2Fl1gkZUYP41ElWOILGqnp3YdUhn3O3L0EsaHFM6DAHqXULBcIIDTSyUpbJelcQZmwUdQhWsPEfLK4XISWOf%2FUCrZAi3EdPURMshleUd5htZ27oL9DiLBDfZPmOJBQGzQzknSp%2Fu8hN2KU2jfA6QqJw3dKWvHh55V5I1kTk%2Bo8Kj9xHZY4a7U0TQVpC2%2B9RnHySLBD2U9TO9z8uMPMLbcS3tXL7f1OhrjZxwAiikFZb%2BdY5JgYAfh3E8QBjSUYsKFhO8bj8od7JowEcBQu4CM4jPf7N7qXhhoXPZ7LqTjZpAwbRMTJLA4vRbWoaAr%2BBbl3r%2FbGMUO%2F9WB2qufEmjCf9eDEBjqkAQ6iuDuu1nFaSOmkHJ9HVB9lVxy5fAS829wZSu0LSx8EBMkTTRt6OJsqRa%2Fx5mJvpMyxEKwC6vF7EDfBz8Qy5mZ5sU6CkoCgHtHJPmWxqar0YajjRfPjNED9pe1AP%2F6FLFbLkpMPtf1nXciCyuhDUgRAMeO8dd6wDOYRsfdpz8SHpJnpS07y2wE7zR6nkArOqLk5JTaugzvicpwUMqIw1tfksVPd&X-Amz-Signature=2d729643c9ee4cd05aa1501ef6fa7289f8a9a049c405a025cbe50aa43dde8346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HGXS2W3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH7xB1GRa6j868k4dOL%2BNAvRXKzQTnhiFgbjsGAypb5QIgV1C9gTunwyeh1m2jW%2B4gjJgUo8frHU79ptuFSbHQAP4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuObxsHy1Hun0KTQSrcAwjG9gXCaueCtKChEjA6IqlBkiEZ6dhlLq2SdVrXufl0KMUbytfZ8ZHE1vh0KmZ4JxCV24uh3Tgo%2FXjNMcRULUyLj0MWf89adFQLMDCpuq2YT93WLd79YMNw73LfKbLI5HZcUWvaC%2FPJM4cMeIOjdAvJm%2BAhTJGYDqHrSEf%2Fqr0JSd2AFWakTXL%2Fr%2BDc2IFX9HGZ1fWyYs1a1e5NVngXoeXVrWYGRcSLWArdcWKN79G6NHbyNw80mqsxL0ahLb07BWJE9%2FMVf7wncggEwN6xdassFd8MFTQeVbc8JqRS8PYVI2oS45pmXAaclswGjZ9mEEzmPjIGsShNw89IF89c4A%2FMkqeykELW8EackcPdpZm0Ush7qwAQDqY6PMs7F0KABfcHnRvTZXZ%2BNvNlHb%2Fw8o54fgPu1I66lQhAV4hv6ieRgtJdUpERX1TEg5zIjWedp5sPKKv8RXMmxF6b1EH%2FvcvkmgE7g4PcbaiDG37JEc3SWfQDD8Fmojgu3f%2BxbzwjUY7QQjIHyfazLIR0Ag4WhgPl0ykDPcIJk9bWifu1t9fVWQ3p0QFGcdlMgdJFH%2BUAAr%2Bq%2BkVIHjhjubtjKucFZT5uiYbuuS4h5rDbYfzq0wivWydaS4uQee9oIKTkMJz14MQGOqUBJ7YaBkm5o%2FMMMv4nXy9H56gi2YQl4nJsMPQS%2BlEZt5JZW1Z7ZAW3yspagoGl5p5V0JUD5zWkc8jQlTOylMcE0yVbj7f0BjEnX8QCX7W9iuLrPscTbSc1VHr2Gd5XtDwlu4wfz2winApcwC78WZVJnausnx88k9rzoZHVsLMM6WakHwNHQgrTATcSIWvATvtzLfO61Ksgbr%2BTVy0gWevL4b6geIBM&X-Amz-Signature=c6d56a60bb0e9baee4af74752085e81aa0db79027bcb11bd88bbc036890307a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U57EEPMZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1Jut9DPbhiKyNHrURBYhlkYPAcJRtw9kQ9QmlkBrPhAiBWgd3ZxG0Oq5%2FuOWkkBWd6eABUqgBK8XsE7dJ2Hj4aliqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6FFemI%2B0dTK%2BbE7dKtwDVo6zs%2Fl5oDssOU%2BW5kOMkkjHq8Ruv6TePJS6ryx2mj3vqX5T7DC6xmwKTTSVzokcW2d25p9edMz7c14iV9Ud%2FJAcC8QfcSd9lIqO%2F1sKSORnBGB6mNV0i2bJfIuqqImlebvqOhYv10sXbm7EaPFTt1ZIN8I2wSQS4msZsSXX%2FtkiY1F7hTUyqvoQ%2BqSuV7jYrC%2F%2BFd6JSDY8GeWGa%2BsXUOLgH97zLZM4ArLNwD02gTquD5PBCDRGU875xen%2BgKoqpHfNzsiofj64bLsKaj7Bzu27kYsEEXOAh7cqdpLfyamtMrMX38ISpnP2%2B5ZrU2D3zdKnxMjCeylmZzATXY%2F22i0l5WURggTRQWxTMdrh%2B36bAdKQ9%2BUpbGVKc13R1M4lIu0MG7PLROD1MPa67%2BDK83h6t5TnSYPPlBf2EUcwCIvQ5BU1hjykBR07ak8fu%2BVYeR6BkuA%2FHBqI0f09jHOTYbRk%2BB3Hk%2FjP2sybng3jXRu57Ea6K10BvfuoW2Smcpt80Nv287rcEvx6ZngL%2BKRrS7mTUVWamCMTZkeBLQnOGvm%2Fj7EMd2W2xfM0%2FrieDWPEvyvcrJ9r%2Fyl7NBhTfjgDJBKf9ynqv7LdpW2sjxlvl6WhVMPL0pJRfWIM%2FpYwmPXgxAY6pgGJ6bHDX2IfPXY%2FkUHTeQ4xBcJlixXg7qVp0TciI8hgQyJhSBq2W0CQyCv7eu02z%2Fp%2BWM0D1a2Mywstovy2dmUa4iuLsvEmTh0kFd6H1LTqs4E6sUGmWkdT%2FNckjKmNQunlfIGijiWb4RrVMzsAC1BJdUBsV2mrp35eYa2eoElof%2Bkqv2SDX3Ic%2BIadhwHP%2Bm0f%2FtutoEvVGog%2BrzkV60%2B4HPC4IjzL&X-Amz-Signature=96be2f4c7b5274a35e00d820f8d9dec0728460233d8df72468d20ccef8c30333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJGUMPXN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqyFNQkqpQOqtts8PllVbSxVZdfyt%2FPWmZnqgCeLsQ9AiEAil0%2BFvBUTwU05YTtuhCfCloUcfXYezeKELYp8%2FBqb34qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNxNk7g5YTgV1wZ4CrcA2n7Z8oqDapI7xxEt%2BJnBYifGfx8SGQdME7t79fqu47BVljh0%2Bzvo8cP3vyE0AZaigLppdbmIRyV2qFvGC5Uv1aqh3JRwJGbnuMxvs7WYVUIILw1ycQL69DH0fYejDNY%2F3F5d328cCTsAL04aEBn8PTZP%2BWDZAEztrOaFXRTg43%2Fk0nc8SGBq5aMdRGdNbor5RlGv5n8%2FsoplLSTixSstTD36TzwLbJYZCGoN6MBVWWa3h7Rv31saeUtlnHaZxBqIpS45ApXlo5nwKIBOQFN9xKkfRXGt7OWuJeg0DKTn7WMG4KRQ6Y18LEf7hrkDhcelrRwegwzghtm7fShUvxm2bRG87YTzbX%2Fllg%2BC7RRCMTsgRPmQpmIWPkGjorp%2BWU50CX3VWXnnNLFXNgCbi7fnzdogcZQrPmkN49VbeluAA5b8AVia9G0Hpf35Al3RdPfwXt88IBARWWL8kalRp4Cl6dhj7uaHEEvdibLxYNTdN4yum%2B9NoroZVoERlRYPR1jvqHVlbqxYmdV%2FbyuGQDdGs4pQ8wKX1tYw6Ednwopy02ESgJ9A1UwWfOUsmGDgbv%2FNAbbFuCzLMGCNAZz%2FOZdYwOaWPW7IzNvERQZFOUgfB0uKcLEKDJVKaaU%2BBl1MIf14MQGOqUBrKXAxLgMo3WSulPCQKlzh9bJHk0YbJ4j%2F2e9SFeySI2VEJj631hb%2FLV80d%2Fn0zwtWG9XburcV3oejQA%2BKdgMnLl2y1rb1PigIVwni5b1n3xgnjsokvMXusH2O977cj8JOu5ybg6mzUvu0I9LkXqdbnFa16gUbsY30JIu3D1OuwhYot09TkCaehM0zBdaIPfCWz%2BRHamSsQgmXUW7kF%2FMbywqa21J&X-Amz-Signature=9dfcaa4a93fb10fac574815e647659b15592b5373444bc1efffff551607ab520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644STJRNY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3sk1sBN%2ByDoFcc03iNPYOejSTnBhtGgQyl%2F5rRSdKRAiEAzP%2FLd3WeQ%2BpwJ2zZeVFoxEJXw1GedkR1ERmkq1WZpPUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkqOiJuGwbI%2BUPLDircA2i00wxKgl4I%2FEJWsUt0LTZlTYoT%2FN%2FtTWVu31rX3xE%2BRDHBPqx9QZg9xwkI%2BILFsswKJ0JA6Ue1LDI1p3F3kw39jj0%2BzzSzpbZfYQV50hIxIoFkVp%2F5Yj5VmebSExrHCc9frsxnX1ve28U2v8JZZuky3CmIWd0PqoQo9EzCHblhTl4mSvKjlN4hgJuHQhTjrgnrkxSi%2BU3d6NiPY5BX7KGghMIAq3RKTARu5OxkEsIOf%2FFKWO%2Bwq7BSbYT7L5zH7cjH6Yn9%2BUMuvk43JUHLb6JT6apLYs9lx67Y2QKDi4WYOVsC8a6%2BKJFFaBi4%2FRlC7J64O3Cj%2BO%2FDa6QYeKpHdwfW94%2FTfRopPzdLvHvzpkNGnHo%2BPz2rDeAt0YVnUoZw5Vg7gK931xbcBKL9DzIZSSXSJtrntwDhJeQzQy2%2BOZGBs0KGG4IA2j33I%2FAE6wK6MpIGO9oog3xPih%2FlFnHbTMVvOsURCxM3rN0qi5mE8TIfHRZF6wX%2BUtoWUUK8%2FhZFGARWBOtTUqCRed6sq%2BEuaUshZCriL69BBCioC9MijSpKO6Otx8q6eikURPkIwGxzA9SNwfURAZusyI96PhMR7JoxicIC4eNVzw61cOdx1QFTrHlpAgqVn9AJO44OMPD14MQGOqUBH%2FL1LzwnGv3kuELyNDM%2F%2FWTd0vydltXm0jNBe8VAekGkqksa8ArMh3XufJ4DrPJ3Kly7KUUICKm5i4AfS51iYXJovGU5lwWVcDjeT2deuiEKW0Q63Phdu05eP5tuG8rXuii2wN7MUUcmHA9Hgk0133rIotY2%2B07l1h7PtXnWq%2BonVjsfdtCnxq%2FTYZ4xFM5zcD4SpwbznPYF7lG7rRVWKELhDe6m&X-Amz-Signature=6190f468782883745264945eb4d096baa7051523fb91936379a3e167c93f55ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644STJRNY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3sk1sBN%2ByDoFcc03iNPYOejSTnBhtGgQyl%2F5rRSdKRAiEAzP%2FLd3WeQ%2BpwJ2zZeVFoxEJXw1GedkR1ERmkq1WZpPUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkqOiJuGwbI%2BUPLDircA2i00wxKgl4I%2FEJWsUt0LTZlTYoT%2FN%2FtTWVu31rX3xE%2BRDHBPqx9QZg9xwkI%2BILFsswKJ0JA6Ue1LDI1p3F3kw39jj0%2BzzSzpbZfYQV50hIxIoFkVp%2F5Yj5VmebSExrHCc9frsxnX1ve28U2v8JZZuky3CmIWd0PqoQo9EzCHblhTl4mSvKjlN4hgJuHQhTjrgnrkxSi%2BU3d6NiPY5BX7KGghMIAq3RKTARu5OxkEsIOf%2FFKWO%2Bwq7BSbYT7L5zH7cjH6Yn9%2BUMuvk43JUHLb6JT6apLYs9lx67Y2QKDi4WYOVsC8a6%2BKJFFaBi4%2FRlC7J64O3Cj%2BO%2FDa6QYeKpHdwfW94%2FTfRopPzdLvHvzpkNGnHo%2BPz2rDeAt0YVnUoZw5Vg7gK931xbcBKL9DzIZSSXSJtrntwDhJeQzQy2%2BOZGBs0KGG4IA2j33I%2FAE6wK6MpIGO9oog3xPih%2FlFnHbTMVvOsURCxM3rN0qi5mE8TIfHRZF6wX%2BUtoWUUK8%2FhZFGARWBOtTUqCRed6sq%2BEuaUshZCriL69BBCioC9MijSpKO6Otx8q6eikURPkIwGxzA9SNwfURAZusyI96PhMR7JoxicIC4eNVzw61cOdx1QFTrHlpAgqVn9AJO44OMPD14MQGOqUBH%2FL1LzwnGv3kuELyNDM%2F%2FWTd0vydltXm0jNBe8VAekGkqksa8ArMh3XufJ4DrPJ3Kly7KUUICKm5i4AfS51iYXJovGU5lwWVcDjeT2deuiEKW0Q63Phdu05eP5tuG8rXuii2wN7MUUcmHA9Hgk0133rIotY2%2B07l1h7PtXnWq%2BonVjsfdtCnxq%2FTYZ4xFM5zcD4SpwbznPYF7lG7rRVWKELhDe6m&X-Amz-Signature=b41913edd28935b4d4b72182a94c58348c322873d5b46f7334ad9b8bad1b4920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI3FPYWV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtbe9UDMv1rvFPTPgjepGrVwnmNauPkn4Zx5f6uqOqLwIhAIQmPPFqpBWGsc5FaylAtEpBchaSk0gQV4UD8Xy2TEV7KogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjYVBJlkVGBfENjswq3ANNB4rQWNnp8dpu%2FHzyquK6fGUeprel3H04AdzdXiPB%2BO4kQEqxCyT2r%2B4k%2BKo2CjcHB9mR%2FLAjb3x8F8hhp6jwu5SIQXwwRQeK1UyPrwh5Xrr0qa6aLtRBnkLNJoqlmscJSk5MPQCNVVNgnXIVTn9VpUhtQag3DLAcODnBcLlXCYBmDMzULxfwM7t6rZQY5LIWIq8NjJ2xhkgzeCkmEYPcxxNQ62idiEvCKKlO77SZ3hecfZ4NuCyjQqEdFg3NhZqnODM3TGPpT5WaRBxw9kF8zDhMvMbDYAoCQTWBeOPhPkmOb0gljd8Y9GropMeFnlGmLWgB4xC7EKCbf%2FAVdCmB0EfAFFsKNhnlX4YJPNhBqWQqbHrJ0rcvCKn8FYHEstwNfn5euBJVWFiWwzLQfRZgY5camwBbKOQpM21a4ftH0TpXtylnHUgpSMJDfcZkXZ1w5r1BpcRmZo6zUHrxrnvaBmxD%2BaU4R9UvP7iCrsrONPHSQ2KOVoztRvxs52i2IWaRQKqHgHvSduuS8cGgO7SM%2F4a3eW%2BUoTE32sC3QBo8oh1yhbklEfmHOsjXvqKS%2BvGUF1cUU70oieCj0Bs3Zs6pIRoWYjzK%2BTZvgz9Z7XXTefK%2FQfMf%2FQnnZpSifjDw9ODEBjqkAdqrM0TZ127p2bPpAKz%2Bd41gNeijPIiE6caM%2Bq%2FpCSoYkhn7ZiHMYRTj12Xr6IhxzaLz%2BwyjbTf2CZcB1P0ASaBiI7QLgDkvz5NMZaEXbH16nUypgcBb1a5I7%2FDyapvxp9EUDy7KJvyjO1r4VDJ9HCvGQHw6U9%2FQcjmRiOoHFefzlaHu1ukJ60yR7RXk68U9OW451mova9xUq479BboPCdS3kz%2Bv&X-Amz-Signature=923b6f241df2bac694f05cb48890249e915d10ef3523ae495834680a151b95fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI3FPYWV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtbe9UDMv1rvFPTPgjepGrVwnmNauPkn4Zx5f6uqOqLwIhAIQmPPFqpBWGsc5FaylAtEpBchaSk0gQV4UD8Xy2TEV7KogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjYVBJlkVGBfENjswq3ANNB4rQWNnp8dpu%2FHzyquK6fGUeprel3H04AdzdXiPB%2BO4kQEqxCyT2r%2B4k%2BKo2CjcHB9mR%2FLAjb3x8F8hhp6jwu5SIQXwwRQeK1UyPrwh5Xrr0qa6aLtRBnkLNJoqlmscJSk5MPQCNVVNgnXIVTn9VpUhtQag3DLAcODnBcLlXCYBmDMzULxfwM7t6rZQY5LIWIq8NjJ2xhkgzeCkmEYPcxxNQ62idiEvCKKlO77SZ3hecfZ4NuCyjQqEdFg3NhZqnODM3TGPpT5WaRBxw9kF8zDhMvMbDYAoCQTWBeOPhPkmOb0gljd8Y9GropMeFnlGmLWgB4xC7EKCbf%2FAVdCmB0EfAFFsKNhnlX4YJPNhBqWQqbHrJ0rcvCKn8FYHEstwNfn5euBJVWFiWwzLQfRZgY5camwBbKOQpM21a4ftH0TpXtylnHUgpSMJDfcZkXZ1w5r1BpcRmZo6zUHrxrnvaBmxD%2BaU4R9UvP7iCrsrONPHSQ2KOVoztRvxs52i2IWaRQKqHgHvSduuS8cGgO7SM%2F4a3eW%2BUoTE32sC3QBo8oh1yhbklEfmHOsjXvqKS%2BvGUF1cUU70oieCj0Bs3Zs6pIRoWYjzK%2BTZvgz9Z7XXTefK%2FQfMf%2FQnnZpSifjDw9ODEBjqkAdqrM0TZ127p2bPpAKz%2Bd41gNeijPIiE6caM%2Bq%2FpCSoYkhn7ZiHMYRTj12Xr6IhxzaLz%2BwyjbTf2CZcB1P0ASaBiI7QLgDkvz5NMZaEXbH16nUypgcBb1a5I7%2FDyapvxp9EUDy7KJvyjO1r4VDJ9HCvGQHw6U9%2FQcjmRiOoHFefzlaHu1ukJ60yR7RXk68U9OW451mova9xUq479BboPCdS3kz%2Bv&X-Amz-Signature=e67a72ff72546f524df4fcfebbe7cae2a05af5f0871e1eda5e0f9af8c4c2786d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI3FPYWV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtbe9UDMv1rvFPTPgjepGrVwnmNauPkn4Zx5f6uqOqLwIhAIQmPPFqpBWGsc5FaylAtEpBchaSk0gQV4UD8Xy2TEV7KogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjYVBJlkVGBfENjswq3ANNB4rQWNnp8dpu%2FHzyquK6fGUeprel3H04AdzdXiPB%2BO4kQEqxCyT2r%2B4k%2BKo2CjcHB9mR%2FLAjb3x8F8hhp6jwu5SIQXwwRQeK1UyPrwh5Xrr0qa6aLtRBnkLNJoqlmscJSk5MPQCNVVNgnXIVTn9VpUhtQag3DLAcODnBcLlXCYBmDMzULxfwM7t6rZQY5LIWIq8NjJ2xhkgzeCkmEYPcxxNQ62idiEvCKKlO77SZ3hecfZ4NuCyjQqEdFg3NhZqnODM3TGPpT5WaRBxw9kF8zDhMvMbDYAoCQTWBeOPhPkmOb0gljd8Y9GropMeFnlGmLWgB4xC7EKCbf%2FAVdCmB0EfAFFsKNhnlX4YJPNhBqWQqbHrJ0rcvCKn8FYHEstwNfn5euBJVWFiWwzLQfRZgY5camwBbKOQpM21a4ftH0TpXtylnHUgpSMJDfcZkXZ1w5r1BpcRmZo6zUHrxrnvaBmxD%2BaU4R9UvP7iCrsrONPHSQ2KOVoztRvxs52i2IWaRQKqHgHvSduuS8cGgO7SM%2F4a3eW%2BUoTE32sC3QBo8oh1yhbklEfmHOsjXvqKS%2BvGUF1cUU70oieCj0Bs3Zs6pIRoWYjzK%2BTZvgz9Z7XXTefK%2FQfMf%2FQnnZpSifjDw9ODEBjqkAdqrM0TZ127p2bPpAKz%2Bd41gNeijPIiE6caM%2Bq%2FpCSoYkhn7ZiHMYRTj12Xr6IhxzaLz%2BwyjbTf2CZcB1P0ASaBiI7QLgDkvz5NMZaEXbH16nUypgcBb1a5I7%2FDyapvxp9EUDy7KJvyjO1r4VDJ9HCvGQHw6U9%2FQcjmRiOoHFefzlaHu1ukJ60yR7RXk68U9OW451mova9xUq479BboPCdS3kz%2Bv&X-Amz-Signature=2247517dad1411dbcdd9ea2c0692636c6f0a3b435e5fdde77c6edcd3755ab6f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI3FPYWV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtbe9UDMv1rvFPTPgjepGrVwnmNauPkn4Zx5f6uqOqLwIhAIQmPPFqpBWGsc5FaylAtEpBchaSk0gQV4UD8Xy2TEV7KogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjYVBJlkVGBfENjswq3ANNB4rQWNnp8dpu%2FHzyquK6fGUeprel3H04AdzdXiPB%2BO4kQEqxCyT2r%2B4k%2BKo2CjcHB9mR%2FLAjb3x8F8hhp6jwu5SIQXwwRQeK1UyPrwh5Xrr0qa6aLtRBnkLNJoqlmscJSk5MPQCNVVNgnXIVTn9VpUhtQag3DLAcODnBcLlXCYBmDMzULxfwM7t6rZQY5LIWIq8NjJ2xhkgzeCkmEYPcxxNQ62idiEvCKKlO77SZ3hecfZ4NuCyjQqEdFg3NhZqnODM3TGPpT5WaRBxw9kF8zDhMvMbDYAoCQTWBeOPhPkmOb0gljd8Y9GropMeFnlGmLWgB4xC7EKCbf%2FAVdCmB0EfAFFsKNhnlX4YJPNhBqWQqbHrJ0rcvCKn8FYHEstwNfn5euBJVWFiWwzLQfRZgY5camwBbKOQpM21a4ftH0TpXtylnHUgpSMJDfcZkXZ1w5r1BpcRmZo6zUHrxrnvaBmxD%2BaU4R9UvP7iCrsrONPHSQ2KOVoztRvxs52i2IWaRQKqHgHvSduuS8cGgO7SM%2F4a3eW%2BUoTE32sC3QBo8oh1yhbklEfmHOsjXvqKS%2BvGUF1cUU70oieCj0Bs3Zs6pIRoWYjzK%2BTZvgz9Z7XXTefK%2FQfMf%2FQnnZpSifjDw9ODEBjqkAdqrM0TZ127p2bPpAKz%2Bd41gNeijPIiE6caM%2Bq%2FpCSoYkhn7ZiHMYRTj12Xr6IhxzaLz%2BwyjbTf2CZcB1P0ASaBiI7QLgDkvz5NMZaEXbH16nUypgcBb1a5I7%2FDyapvxp9EUDy7KJvyjO1r4VDJ9HCvGQHw6U9%2FQcjmRiOoHFefzlaHu1ukJ60yR7RXk68U9OW451mova9xUq479BboPCdS3kz%2Bv&X-Amz-Signature=ecf3432eb12fd7a201f72d26dbf4d457fbb5fc1f5ef09affdf675b639d86368a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI3FPYWV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtbe9UDMv1rvFPTPgjepGrVwnmNauPkn4Zx5f6uqOqLwIhAIQmPPFqpBWGsc5FaylAtEpBchaSk0gQV4UD8Xy2TEV7KogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjYVBJlkVGBfENjswq3ANNB4rQWNnp8dpu%2FHzyquK6fGUeprel3H04AdzdXiPB%2BO4kQEqxCyT2r%2B4k%2BKo2CjcHB9mR%2FLAjb3x8F8hhp6jwu5SIQXwwRQeK1UyPrwh5Xrr0qa6aLtRBnkLNJoqlmscJSk5MPQCNVVNgnXIVTn9VpUhtQag3DLAcODnBcLlXCYBmDMzULxfwM7t6rZQY5LIWIq8NjJ2xhkgzeCkmEYPcxxNQ62idiEvCKKlO77SZ3hecfZ4NuCyjQqEdFg3NhZqnODM3TGPpT5WaRBxw9kF8zDhMvMbDYAoCQTWBeOPhPkmOb0gljd8Y9GropMeFnlGmLWgB4xC7EKCbf%2FAVdCmB0EfAFFsKNhnlX4YJPNhBqWQqbHrJ0rcvCKn8FYHEstwNfn5euBJVWFiWwzLQfRZgY5camwBbKOQpM21a4ftH0TpXtylnHUgpSMJDfcZkXZ1w5r1BpcRmZo6zUHrxrnvaBmxD%2BaU4R9UvP7iCrsrONPHSQ2KOVoztRvxs52i2IWaRQKqHgHvSduuS8cGgO7SM%2F4a3eW%2BUoTE32sC3QBo8oh1yhbklEfmHOsjXvqKS%2BvGUF1cUU70oieCj0Bs3Zs6pIRoWYjzK%2BTZvgz9Z7XXTefK%2FQfMf%2FQnnZpSifjDw9ODEBjqkAdqrM0TZ127p2bPpAKz%2Bd41gNeijPIiE6caM%2Bq%2FpCSoYkhn7ZiHMYRTj12Xr6IhxzaLz%2BwyjbTf2CZcB1P0ASaBiI7QLgDkvz5NMZaEXbH16nUypgcBb1a5I7%2FDyapvxp9EUDy7KJvyjO1r4VDJ9HCvGQHw6U9%2FQcjmRiOoHFefzlaHu1ukJ60yR7RXk68U9OW451mova9xUq479BboPCdS3kz%2Bv&X-Amz-Signature=5f8f0d14accb7600b27acf02361622af7ada87791f8b7f3ddfd32d892d4c562a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI3FPYWV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtbe9UDMv1rvFPTPgjepGrVwnmNauPkn4Zx5f6uqOqLwIhAIQmPPFqpBWGsc5FaylAtEpBchaSk0gQV4UD8Xy2TEV7KogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjYVBJlkVGBfENjswq3ANNB4rQWNnp8dpu%2FHzyquK6fGUeprel3H04AdzdXiPB%2BO4kQEqxCyT2r%2B4k%2BKo2CjcHB9mR%2FLAjb3x8F8hhp6jwu5SIQXwwRQeK1UyPrwh5Xrr0qa6aLtRBnkLNJoqlmscJSk5MPQCNVVNgnXIVTn9VpUhtQag3DLAcODnBcLlXCYBmDMzULxfwM7t6rZQY5LIWIq8NjJ2xhkgzeCkmEYPcxxNQ62idiEvCKKlO77SZ3hecfZ4NuCyjQqEdFg3NhZqnODM3TGPpT5WaRBxw9kF8zDhMvMbDYAoCQTWBeOPhPkmOb0gljd8Y9GropMeFnlGmLWgB4xC7EKCbf%2FAVdCmB0EfAFFsKNhnlX4YJPNhBqWQqbHrJ0rcvCKn8FYHEstwNfn5euBJVWFiWwzLQfRZgY5camwBbKOQpM21a4ftH0TpXtylnHUgpSMJDfcZkXZ1w5r1BpcRmZo6zUHrxrnvaBmxD%2BaU4R9UvP7iCrsrONPHSQ2KOVoztRvxs52i2IWaRQKqHgHvSduuS8cGgO7SM%2F4a3eW%2BUoTE32sC3QBo8oh1yhbklEfmHOsjXvqKS%2BvGUF1cUU70oieCj0Bs3Zs6pIRoWYjzK%2BTZvgz9Z7XXTefK%2FQfMf%2FQnnZpSifjDw9ODEBjqkAdqrM0TZ127p2bPpAKz%2Bd41gNeijPIiE6caM%2Bq%2FpCSoYkhn7ZiHMYRTj12Xr6IhxzaLz%2BwyjbTf2CZcB1P0ASaBiI7QLgDkvz5NMZaEXbH16nUypgcBb1a5I7%2FDyapvxp9EUDy7KJvyjO1r4VDJ9HCvGQHw6U9%2FQcjmRiOoHFefzlaHu1ukJ60yR7RXk68U9OW451mova9xUq479BboPCdS3kz%2Bv&X-Amz-Signature=2e66d8343e1efe2088ac9617432f43eceb3e4eef2522e3080a0c98608ed52de2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI3FPYWV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtbe9UDMv1rvFPTPgjepGrVwnmNauPkn4Zx5f6uqOqLwIhAIQmPPFqpBWGsc5FaylAtEpBchaSk0gQV4UD8Xy2TEV7KogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjYVBJlkVGBfENjswq3ANNB4rQWNnp8dpu%2FHzyquK6fGUeprel3H04AdzdXiPB%2BO4kQEqxCyT2r%2B4k%2BKo2CjcHB9mR%2FLAjb3x8F8hhp6jwu5SIQXwwRQeK1UyPrwh5Xrr0qa6aLtRBnkLNJoqlmscJSk5MPQCNVVNgnXIVTn9VpUhtQag3DLAcODnBcLlXCYBmDMzULxfwM7t6rZQY5LIWIq8NjJ2xhkgzeCkmEYPcxxNQ62idiEvCKKlO77SZ3hecfZ4NuCyjQqEdFg3NhZqnODM3TGPpT5WaRBxw9kF8zDhMvMbDYAoCQTWBeOPhPkmOb0gljd8Y9GropMeFnlGmLWgB4xC7EKCbf%2FAVdCmB0EfAFFsKNhnlX4YJPNhBqWQqbHrJ0rcvCKn8FYHEstwNfn5euBJVWFiWwzLQfRZgY5camwBbKOQpM21a4ftH0TpXtylnHUgpSMJDfcZkXZ1w5r1BpcRmZo6zUHrxrnvaBmxD%2BaU4R9UvP7iCrsrONPHSQ2KOVoztRvxs52i2IWaRQKqHgHvSduuS8cGgO7SM%2F4a3eW%2BUoTE32sC3QBo8oh1yhbklEfmHOsjXvqKS%2BvGUF1cUU70oieCj0Bs3Zs6pIRoWYjzK%2BTZvgz9Z7XXTefK%2FQfMf%2FQnnZpSifjDw9ODEBjqkAdqrM0TZ127p2bPpAKz%2Bd41gNeijPIiE6caM%2Bq%2FpCSoYkhn7ZiHMYRTj12Xr6IhxzaLz%2BwyjbTf2CZcB1P0ASaBiI7QLgDkvz5NMZaEXbH16nUypgcBb1a5I7%2FDyapvxp9EUDy7KJvyjO1r4VDJ9HCvGQHw6U9%2FQcjmRiOoHFefzlaHu1ukJ60yR7RXk68U9OW451mova9xUq479BboPCdS3kz%2Bv&X-Amz-Signature=2247517dad1411dbcdd9ea2c0692636c6f0a3b435e5fdde77c6edcd3755ab6f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI3FPYWV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtbe9UDMv1rvFPTPgjepGrVwnmNauPkn4Zx5f6uqOqLwIhAIQmPPFqpBWGsc5FaylAtEpBchaSk0gQV4UD8Xy2TEV7KogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjYVBJlkVGBfENjswq3ANNB4rQWNnp8dpu%2FHzyquK6fGUeprel3H04AdzdXiPB%2BO4kQEqxCyT2r%2B4k%2BKo2CjcHB9mR%2FLAjb3x8F8hhp6jwu5SIQXwwRQeK1UyPrwh5Xrr0qa6aLtRBnkLNJoqlmscJSk5MPQCNVVNgnXIVTn9VpUhtQag3DLAcODnBcLlXCYBmDMzULxfwM7t6rZQY5LIWIq8NjJ2xhkgzeCkmEYPcxxNQ62idiEvCKKlO77SZ3hecfZ4NuCyjQqEdFg3NhZqnODM3TGPpT5WaRBxw9kF8zDhMvMbDYAoCQTWBeOPhPkmOb0gljd8Y9GropMeFnlGmLWgB4xC7EKCbf%2FAVdCmB0EfAFFsKNhnlX4YJPNhBqWQqbHrJ0rcvCKn8FYHEstwNfn5euBJVWFiWwzLQfRZgY5camwBbKOQpM21a4ftH0TpXtylnHUgpSMJDfcZkXZ1w5r1BpcRmZo6zUHrxrnvaBmxD%2BaU4R9UvP7iCrsrONPHSQ2KOVoztRvxs52i2IWaRQKqHgHvSduuS8cGgO7SM%2F4a3eW%2BUoTE32sC3QBo8oh1yhbklEfmHOsjXvqKS%2BvGUF1cUU70oieCj0Bs3Zs6pIRoWYjzK%2BTZvgz9Z7XXTefK%2FQfMf%2FQnnZpSifjDw9ODEBjqkAdqrM0TZ127p2bPpAKz%2Bd41gNeijPIiE6caM%2Bq%2FpCSoYkhn7ZiHMYRTj12Xr6IhxzaLz%2BwyjbTf2CZcB1P0ASaBiI7QLgDkvz5NMZaEXbH16nUypgcBb1a5I7%2FDyapvxp9EUDy7KJvyjO1r4VDJ9HCvGQHw6U9%2FQcjmRiOoHFefzlaHu1ukJ60yR7RXk68U9OW451mova9xUq479BboPCdS3kz%2Bv&X-Amz-Signature=14af107a8c04b2cfc8ca3f745948441fc6f762bcc3ba232dde3272bee65a04c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI3FPYWV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtbe9UDMv1rvFPTPgjepGrVwnmNauPkn4Zx5f6uqOqLwIhAIQmPPFqpBWGsc5FaylAtEpBchaSk0gQV4UD8Xy2TEV7KogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjYVBJlkVGBfENjswq3ANNB4rQWNnp8dpu%2FHzyquK6fGUeprel3H04AdzdXiPB%2BO4kQEqxCyT2r%2B4k%2BKo2CjcHB9mR%2FLAjb3x8F8hhp6jwu5SIQXwwRQeK1UyPrwh5Xrr0qa6aLtRBnkLNJoqlmscJSk5MPQCNVVNgnXIVTn9VpUhtQag3DLAcODnBcLlXCYBmDMzULxfwM7t6rZQY5LIWIq8NjJ2xhkgzeCkmEYPcxxNQ62idiEvCKKlO77SZ3hecfZ4NuCyjQqEdFg3NhZqnODM3TGPpT5WaRBxw9kF8zDhMvMbDYAoCQTWBeOPhPkmOb0gljd8Y9GropMeFnlGmLWgB4xC7EKCbf%2FAVdCmB0EfAFFsKNhnlX4YJPNhBqWQqbHrJ0rcvCKn8FYHEstwNfn5euBJVWFiWwzLQfRZgY5camwBbKOQpM21a4ftH0TpXtylnHUgpSMJDfcZkXZ1w5r1BpcRmZo6zUHrxrnvaBmxD%2BaU4R9UvP7iCrsrONPHSQ2KOVoztRvxs52i2IWaRQKqHgHvSduuS8cGgO7SM%2F4a3eW%2BUoTE32sC3QBo8oh1yhbklEfmHOsjXvqKS%2BvGUF1cUU70oieCj0Bs3Zs6pIRoWYjzK%2BTZvgz9Z7XXTefK%2FQfMf%2FQnnZpSifjDw9ODEBjqkAdqrM0TZ127p2bPpAKz%2Bd41gNeijPIiE6caM%2Bq%2FpCSoYkhn7ZiHMYRTj12Xr6IhxzaLz%2BwyjbTf2CZcB1P0ASaBiI7QLgDkvz5NMZaEXbH16nUypgcBb1a5I7%2FDyapvxp9EUDy7KJvyjO1r4VDJ9HCvGQHw6U9%2FQcjmRiOoHFefzlaHu1ukJ60yR7RXk68U9OW451mova9xUq479BboPCdS3kz%2Bv&X-Amz-Signature=8f15b570925ef7a4fc2c84a96071a9a402933bb2efa41c79b2634bfce8571633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI3FPYWV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtbe9UDMv1rvFPTPgjepGrVwnmNauPkn4Zx5f6uqOqLwIhAIQmPPFqpBWGsc5FaylAtEpBchaSk0gQV4UD8Xy2TEV7KogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjYVBJlkVGBfENjswq3ANNB4rQWNnp8dpu%2FHzyquK6fGUeprel3H04AdzdXiPB%2BO4kQEqxCyT2r%2B4k%2BKo2CjcHB9mR%2FLAjb3x8F8hhp6jwu5SIQXwwRQeK1UyPrwh5Xrr0qa6aLtRBnkLNJoqlmscJSk5MPQCNVVNgnXIVTn9VpUhtQag3DLAcODnBcLlXCYBmDMzULxfwM7t6rZQY5LIWIq8NjJ2xhkgzeCkmEYPcxxNQ62idiEvCKKlO77SZ3hecfZ4NuCyjQqEdFg3NhZqnODM3TGPpT5WaRBxw9kF8zDhMvMbDYAoCQTWBeOPhPkmOb0gljd8Y9GropMeFnlGmLWgB4xC7EKCbf%2FAVdCmB0EfAFFsKNhnlX4YJPNhBqWQqbHrJ0rcvCKn8FYHEstwNfn5euBJVWFiWwzLQfRZgY5camwBbKOQpM21a4ftH0TpXtylnHUgpSMJDfcZkXZ1w5r1BpcRmZo6zUHrxrnvaBmxD%2BaU4R9UvP7iCrsrONPHSQ2KOVoztRvxs52i2IWaRQKqHgHvSduuS8cGgO7SM%2F4a3eW%2BUoTE32sC3QBo8oh1yhbklEfmHOsjXvqKS%2BvGUF1cUU70oieCj0Bs3Zs6pIRoWYjzK%2BTZvgz9Z7XXTefK%2FQfMf%2FQnnZpSifjDw9ODEBjqkAdqrM0TZ127p2bPpAKz%2Bd41gNeijPIiE6caM%2Bq%2FpCSoYkhn7ZiHMYRTj12Xr6IhxzaLz%2BwyjbTf2CZcB1P0ASaBiI7QLgDkvz5NMZaEXbH16nUypgcBb1a5I7%2FDyapvxp9EUDy7KJvyjO1r4VDJ9HCvGQHw6U9%2FQcjmRiOoHFefzlaHu1ukJ60yR7RXk68U9OW451mova9xUq479BboPCdS3kz%2Bv&X-Amz-Signature=fec02650cef7ecfb61630300ec827f3d01cb301adb6e3b7528aaf368025b5963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
