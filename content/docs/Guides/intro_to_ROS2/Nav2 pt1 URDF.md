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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAC5BINQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD%2FGEUQk13nwnKxu4thz7xcRsihcrjAp9xInnGZXlsw9gIhAKpMWWoXkAjU3KH9IDdgzbRWrkWDjB6d0gGB17keDt%2FAKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx79j8zDF%2BfYshjheUq3ANaio82pPrr32%2FozwX%2B%2BzvwjGkVx2pKZA2X%2BxakuvZUiP0sx2g7r%2BIrOHsCP1FHyWYfbReZTdZZCuzF4iSlMjpDsuCPkZwrZEfaVW4iUWpkxSM450ctMUJgCmVx99QLPC66tKef9kD6dqvw0JVT4WeHM6jyyf1GBdzQZKIHXji3TdlbYtrqFKKbbByjMK92nwgUWFCrxH31XgaEcBJLCFVaYXRQvW8qlgcuCYMX05Bcx0ljyU5NYBL%2FBEFclkkHjLtJwLKK8HabfMT2yj6FaufRWo7luTPFruj5y5By2OOIXeNDg%2FjmvQm3dcw9IyinwWyzXnctcaizkAuLhjESG9iy70f7QGPzbDJnbTcOiJiAIM40O4FVy4SFFakOT%2FLoB%2F0GK8bvPATUiI1NrphgyFNvhtNuwBc72Eyqfd6YvxQzIfXdvh3fRd1CqyEqE6QSif%2FLa9gsybKPPACiKkVxIAEOhYy0y2xaV4iDIkChfmNS7B5xga3mHM09RRs4%2B%2FKSK7NSk%2Bd8R04nPklx%2FNEt4VHBr0r6gEO6DbhHya4t9hW4l665qfHOoZo7J6jDZhBrZGXN4bF%2FheOWFV2gLcmdcjGSNgSe4IPnDJVeEp4Oly8W4LDHS8l7vztD6wcUPDDixtbEBjqkAR5ubeIrEz8SJFulXEiZzoPz9bwOfqY9z8nwhxGI6zyJM7r4GcZOX%2FxFrF72zsDlrJqz6GRCvr5ZKFMxWjGgTguuC%2Ba8BpcnsKiQZJErsl%2BaDHg%2BqTVN7ZykQGWlyFfGyxG%2BqYWBIDgljdvV9r8HOYigi%2B%2BDCyptYTKzcA1PK%2BD437ynN%2FMSXlYcdYcj%2BLgAQkwtBhbqnebtcd1tHI0WmSmC3qhe&X-Amz-Signature=bfeda247bf1c7703009fd9ebc3b8ae5b928343040965d52dec09bef8baf6ac2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAC5BINQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD%2FGEUQk13nwnKxu4thz7xcRsihcrjAp9xInnGZXlsw9gIhAKpMWWoXkAjU3KH9IDdgzbRWrkWDjB6d0gGB17keDt%2FAKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx79j8zDF%2BfYshjheUq3ANaio82pPrr32%2FozwX%2B%2BzvwjGkVx2pKZA2X%2BxakuvZUiP0sx2g7r%2BIrOHsCP1FHyWYfbReZTdZZCuzF4iSlMjpDsuCPkZwrZEfaVW4iUWpkxSM450ctMUJgCmVx99QLPC66tKef9kD6dqvw0JVT4WeHM6jyyf1GBdzQZKIHXji3TdlbYtrqFKKbbByjMK92nwgUWFCrxH31XgaEcBJLCFVaYXRQvW8qlgcuCYMX05Bcx0ljyU5NYBL%2FBEFclkkHjLtJwLKK8HabfMT2yj6FaufRWo7luTPFruj5y5By2OOIXeNDg%2FjmvQm3dcw9IyinwWyzXnctcaizkAuLhjESG9iy70f7QGPzbDJnbTcOiJiAIM40O4FVy4SFFakOT%2FLoB%2F0GK8bvPATUiI1NrphgyFNvhtNuwBc72Eyqfd6YvxQzIfXdvh3fRd1CqyEqE6QSif%2FLa9gsybKPPACiKkVxIAEOhYy0y2xaV4iDIkChfmNS7B5xga3mHM09RRs4%2B%2FKSK7NSk%2Bd8R04nPklx%2FNEt4VHBr0r6gEO6DbhHya4t9hW4l665qfHOoZo7J6jDZhBrZGXN4bF%2FheOWFV2gLcmdcjGSNgSe4IPnDJVeEp4Oly8W4LDHS8l7vztD6wcUPDDixtbEBjqkAR5ubeIrEz8SJFulXEiZzoPz9bwOfqY9z8nwhxGI6zyJM7r4GcZOX%2FxFrF72zsDlrJqz6GRCvr5ZKFMxWjGgTguuC%2Ba8BpcnsKiQZJErsl%2BaDHg%2BqTVN7ZykQGWlyFfGyxG%2BqYWBIDgljdvV9r8HOYigi%2B%2BDCyptYTKzcA1PK%2BD437ynN%2FMSXlYcdYcj%2BLgAQkwtBhbqnebtcd1tHI0WmSmC3qhe&X-Amz-Signature=2a3c26245009c692be97c60115f84b6a874539e66b5de03ba8c3b629239595b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAC5BINQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD%2FGEUQk13nwnKxu4thz7xcRsihcrjAp9xInnGZXlsw9gIhAKpMWWoXkAjU3KH9IDdgzbRWrkWDjB6d0gGB17keDt%2FAKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx79j8zDF%2BfYshjheUq3ANaio82pPrr32%2FozwX%2B%2BzvwjGkVx2pKZA2X%2BxakuvZUiP0sx2g7r%2BIrOHsCP1FHyWYfbReZTdZZCuzF4iSlMjpDsuCPkZwrZEfaVW4iUWpkxSM450ctMUJgCmVx99QLPC66tKef9kD6dqvw0JVT4WeHM6jyyf1GBdzQZKIHXji3TdlbYtrqFKKbbByjMK92nwgUWFCrxH31XgaEcBJLCFVaYXRQvW8qlgcuCYMX05Bcx0ljyU5NYBL%2FBEFclkkHjLtJwLKK8HabfMT2yj6FaufRWo7luTPFruj5y5By2OOIXeNDg%2FjmvQm3dcw9IyinwWyzXnctcaizkAuLhjESG9iy70f7QGPzbDJnbTcOiJiAIM40O4FVy4SFFakOT%2FLoB%2F0GK8bvPATUiI1NrphgyFNvhtNuwBc72Eyqfd6YvxQzIfXdvh3fRd1CqyEqE6QSif%2FLa9gsybKPPACiKkVxIAEOhYy0y2xaV4iDIkChfmNS7B5xga3mHM09RRs4%2B%2FKSK7NSk%2Bd8R04nPklx%2FNEt4VHBr0r6gEO6DbhHya4t9hW4l665qfHOoZo7J6jDZhBrZGXN4bF%2FheOWFV2gLcmdcjGSNgSe4IPnDJVeEp4Oly8W4LDHS8l7vztD6wcUPDDixtbEBjqkAR5ubeIrEz8SJFulXEiZzoPz9bwOfqY9z8nwhxGI6zyJM7r4GcZOX%2FxFrF72zsDlrJqz6GRCvr5ZKFMxWjGgTguuC%2Ba8BpcnsKiQZJErsl%2BaDHg%2BqTVN7ZykQGWlyFfGyxG%2BqYWBIDgljdvV9r8HOYigi%2B%2BDCyptYTKzcA1PK%2BD437ynN%2FMSXlYcdYcj%2BLgAQkwtBhbqnebtcd1tHI0WmSmC3qhe&X-Amz-Signature=71222453539201538f4e2776e4ca0c121b6ff4129a19498cd0d3e6065e77b885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAC5BINQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD%2FGEUQk13nwnKxu4thz7xcRsihcrjAp9xInnGZXlsw9gIhAKpMWWoXkAjU3KH9IDdgzbRWrkWDjB6d0gGB17keDt%2FAKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx79j8zDF%2BfYshjheUq3ANaio82pPrr32%2FozwX%2B%2BzvwjGkVx2pKZA2X%2BxakuvZUiP0sx2g7r%2BIrOHsCP1FHyWYfbReZTdZZCuzF4iSlMjpDsuCPkZwrZEfaVW4iUWpkxSM450ctMUJgCmVx99QLPC66tKef9kD6dqvw0JVT4WeHM6jyyf1GBdzQZKIHXji3TdlbYtrqFKKbbByjMK92nwgUWFCrxH31XgaEcBJLCFVaYXRQvW8qlgcuCYMX05Bcx0ljyU5NYBL%2FBEFclkkHjLtJwLKK8HabfMT2yj6FaufRWo7luTPFruj5y5By2OOIXeNDg%2FjmvQm3dcw9IyinwWyzXnctcaizkAuLhjESG9iy70f7QGPzbDJnbTcOiJiAIM40O4FVy4SFFakOT%2FLoB%2F0GK8bvPATUiI1NrphgyFNvhtNuwBc72Eyqfd6YvxQzIfXdvh3fRd1CqyEqE6QSif%2FLa9gsybKPPACiKkVxIAEOhYy0y2xaV4iDIkChfmNS7B5xga3mHM09RRs4%2B%2FKSK7NSk%2Bd8R04nPklx%2FNEt4VHBr0r6gEO6DbhHya4t9hW4l665qfHOoZo7J6jDZhBrZGXN4bF%2FheOWFV2gLcmdcjGSNgSe4IPnDJVeEp4Oly8W4LDHS8l7vztD6wcUPDDixtbEBjqkAR5ubeIrEz8SJFulXEiZzoPz9bwOfqY9z8nwhxGI6zyJM7r4GcZOX%2FxFrF72zsDlrJqz6GRCvr5ZKFMxWjGgTguuC%2Ba8BpcnsKiQZJErsl%2BaDHg%2BqTVN7ZykQGWlyFfGyxG%2BqYWBIDgljdvV9r8HOYigi%2B%2BDCyptYTKzcA1PK%2BD437ynN%2FMSXlYcdYcj%2BLgAQkwtBhbqnebtcd1tHI0WmSmC3qhe&X-Amz-Signature=527c46488ebdc3316614cdc53829b850ed89e4ef999f2fe9cf57159c3ea8a6cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAC5BINQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD%2FGEUQk13nwnKxu4thz7xcRsihcrjAp9xInnGZXlsw9gIhAKpMWWoXkAjU3KH9IDdgzbRWrkWDjB6d0gGB17keDt%2FAKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx79j8zDF%2BfYshjheUq3ANaio82pPrr32%2FozwX%2B%2BzvwjGkVx2pKZA2X%2BxakuvZUiP0sx2g7r%2BIrOHsCP1FHyWYfbReZTdZZCuzF4iSlMjpDsuCPkZwrZEfaVW4iUWpkxSM450ctMUJgCmVx99QLPC66tKef9kD6dqvw0JVT4WeHM6jyyf1GBdzQZKIHXji3TdlbYtrqFKKbbByjMK92nwgUWFCrxH31XgaEcBJLCFVaYXRQvW8qlgcuCYMX05Bcx0ljyU5NYBL%2FBEFclkkHjLtJwLKK8HabfMT2yj6FaufRWo7luTPFruj5y5By2OOIXeNDg%2FjmvQm3dcw9IyinwWyzXnctcaizkAuLhjESG9iy70f7QGPzbDJnbTcOiJiAIM40O4FVy4SFFakOT%2FLoB%2F0GK8bvPATUiI1NrphgyFNvhtNuwBc72Eyqfd6YvxQzIfXdvh3fRd1CqyEqE6QSif%2FLa9gsybKPPACiKkVxIAEOhYy0y2xaV4iDIkChfmNS7B5xga3mHM09RRs4%2B%2FKSK7NSk%2Bd8R04nPklx%2FNEt4VHBr0r6gEO6DbhHya4t9hW4l665qfHOoZo7J6jDZhBrZGXN4bF%2FheOWFV2gLcmdcjGSNgSe4IPnDJVeEp4Oly8W4LDHS8l7vztD6wcUPDDixtbEBjqkAR5ubeIrEz8SJFulXEiZzoPz9bwOfqY9z8nwhxGI6zyJM7r4GcZOX%2FxFrF72zsDlrJqz6GRCvr5ZKFMxWjGgTguuC%2Ba8BpcnsKiQZJErsl%2BaDHg%2BqTVN7ZykQGWlyFfGyxG%2BqYWBIDgljdvV9r8HOYigi%2B%2BDCyptYTKzcA1PK%2BD437ynN%2FMSXlYcdYcj%2BLgAQkwtBhbqnebtcd1tHI0WmSmC3qhe&X-Amz-Signature=57660557ade8e14539b5280cd63f88ecd9fdc1d716721a2bcd15f719c6802beb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAC5BINQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD%2FGEUQk13nwnKxu4thz7xcRsihcrjAp9xInnGZXlsw9gIhAKpMWWoXkAjU3KH9IDdgzbRWrkWDjB6d0gGB17keDt%2FAKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx79j8zDF%2BfYshjheUq3ANaio82pPrr32%2FozwX%2B%2BzvwjGkVx2pKZA2X%2BxakuvZUiP0sx2g7r%2BIrOHsCP1FHyWYfbReZTdZZCuzF4iSlMjpDsuCPkZwrZEfaVW4iUWpkxSM450ctMUJgCmVx99QLPC66tKef9kD6dqvw0JVT4WeHM6jyyf1GBdzQZKIHXji3TdlbYtrqFKKbbByjMK92nwgUWFCrxH31XgaEcBJLCFVaYXRQvW8qlgcuCYMX05Bcx0ljyU5NYBL%2FBEFclkkHjLtJwLKK8HabfMT2yj6FaufRWo7luTPFruj5y5By2OOIXeNDg%2FjmvQm3dcw9IyinwWyzXnctcaizkAuLhjESG9iy70f7QGPzbDJnbTcOiJiAIM40O4FVy4SFFakOT%2FLoB%2F0GK8bvPATUiI1NrphgyFNvhtNuwBc72Eyqfd6YvxQzIfXdvh3fRd1CqyEqE6QSif%2FLa9gsybKPPACiKkVxIAEOhYy0y2xaV4iDIkChfmNS7B5xga3mHM09RRs4%2B%2FKSK7NSk%2Bd8R04nPklx%2FNEt4VHBr0r6gEO6DbhHya4t9hW4l665qfHOoZo7J6jDZhBrZGXN4bF%2FheOWFV2gLcmdcjGSNgSe4IPnDJVeEp4Oly8W4LDHS8l7vztD6wcUPDDixtbEBjqkAR5ubeIrEz8SJFulXEiZzoPz9bwOfqY9z8nwhxGI6zyJM7r4GcZOX%2FxFrF72zsDlrJqz6GRCvr5ZKFMxWjGgTguuC%2Ba8BpcnsKiQZJErsl%2BaDHg%2BqTVN7ZykQGWlyFfGyxG%2BqYWBIDgljdvV9r8HOYigi%2B%2BDCyptYTKzcA1PK%2BD437ynN%2FMSXlYcdYcj%2BLgAQkwtBhbqnebtcd1tHI0WmSmC3qhe&X-Amz-Signature=a3538fe26da9a5ec78147e556b3cbe9c4fa6ddd30c0c0b0850699ccded8d7955&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAC5BINQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD%2FGEUQk13nwnKxu4thz7xcRsihcrjAp9xInnGZXlsw9gIhAKpMWWoXkAjU3KH9IDdgzbRWrkWDjB6d0gGB17keDt%2FAKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx79j8zDF%2BfYshjheUq3ANaio82pPrr32%2FozwX%2B%2BzvwjGkVx2pKZA2X%2BxakuvZUiP0sx2g7r%2BIrOHsCP1FHyWYfbReZTdZZCuzF4iSlMjpDsuCPkZwrZEfaVW4iUWpkxSM450ctMUJgCmVx99QLPC66tKef9kD6dqvw0JVT4WeHM6jyyf1GBdzQZKIHXji3TdlbYtrqFKKbbByjMK92nwgUWFCrxH31XgaEcBJLCFVaYXRQvW8qlgcuCYMX05Bcx0ljyU5NYBL%2FBEFclkkHjLtJwLKK8HabfMT2yj6FaufRWo7luTPFruj5y5By2OOIXeNDg%2FjmvQm3dcw9IyinwWyzXnctcaizkAuLhjESG9iy70f7QGPzbDJnbTcOiJiAIM40O4FVy4SFFakOT%2FLoB%2F0GK8bvPATUiI1NrphgyFNvhtNuwBc72Eyqfd6YvxQzIfXdvh3fRd1CqyEqE6QSif%2FLa9gsybKPPACiKkVxIAEOhYy0y2xaV4iDIkChfmNS7B5xga3mHM09RRs4%2B%2FKSK7NSk%2Bd8R04nPklx%2FNEt4VHBr0r6gEO6DbhHya4t9hW4l665qfHOoZo7J6jDZhBrZGXN4bF%2FheOWFV2gLcmdcjGSNgSe4IPnDJVeEp4Oly8W4LDHS8l7vztD6wcUPDDixtbEBjqkAR5ubeIrEz8SJFulXEiZzoPz9bwOfqY9z8nwhxGI6zyJM7r4GcZOX%2FxFrF72zsDlrJqz6GRCvr5ZKFMxWjGgTguuC%2Ba8BpcnsKiQZJErsl%2BaDHg%2BqTVN7ZykQGWlyFfGyxG%2BqYWBIDgljdvV9r8HOYigi%2B%2BDCyptYTKzcA1PK%2BD437ynN%2FMSXlYcdYcj%2BLgAQkwtBhbqnebtcd1tHI0WmSmC3qhe&X-Amz-Signature=05cf8035052962af5d31c0eb8f0aa793347c4b606914eb97a308241d716a7365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAC5BINQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD%2FGEUQk13nwnKxu4thz7xcRsihcrjAp9xInnGZXlsw9gIhAKpMWWoXkAjU3KH9IDdgzbRWrkWDjB6d0gGB17keDt%2FAKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx79j8zDF%2BfYshjheUq3ANaio82pPrr32%2FozwX%2B%2BzvwjGkVx2pKZA2X%2BxakuvZUiP0sx2g7r%2BIrOHsCP1FHyWYfbReZTdZZCuzF4iSlMjpDsuCPkZwrZEfaVW4iUWpkxSM450ctMUJgCmVx99QLPC66tKef9kD6dqvw0JVT4WeHM6jyyf1GBdzQZKIHXji3TdlbYtrqFKKbbByjMK92nwgUWFCrxH31XgaEcBJLCFVaYXRQvW8qlgcuCYMX05Bcx0ljyU5NYBL%2FBEFclkkHjLtJwLKK8HabfMT2yj6FaufRWo7luTPFruj5y5By2OOIXeNDg%2FjmvQm3dcw9IyinwWyzXnctcaizkAuLhjESG9iy70f7QGPzbDJnbTcOiJiAIM40O4FVy4SFFakOT%2FLoB%2F0GK8bvPATUiI1NrphgyFNvhtNuwBc72Eyqfd6YvxQzIfXdvh3fRd1CqyEqE6QSif%2FLa9gsybKPPACiKkVxIAEOhYy0y2xaV4iDIkChfmNS7B5xga3mHM09RRs4%2B%2FKSK7NSk%2Bd8R04nPklx%2FNEt4VHBr0r6gEO6DbhHya4t9hW4l665qfHOoZo7J6jDZhBrZGXN4bF%2FheOWFV2gLcmdcjGSNgSe4IPnDJVeEp4Oly8W4LDHS8l7vztD6wcUPDDixtbEBjqkAR5ubeIrEz8SJFulXEiZzoPz9bwOfqY9z8nwhxGI6zyJM7r4GcZOX%2FxFrF72zsDlrJqz6GRCvr5ZKFMxWjGgTguuC%2Ba8BpcnsKiQZJErsl%2BaDHg%2BqTVN7ZykQGWlyFfGyxG%2BqYWBIDgljdvV9r8HOYigi%2B%2BDCyptYTKzcA1PK%2BD437ynN%2FMSXlYcdYcj%2BLgAQkwtBhbqnebtcd1tHI0WmSmC3qhe&X-Amz-Signature=2b33f772df762c51c50ae8f0bf521d818b60ac0cb498dc2d15de9fa59a316c59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAC5BINQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD%2FGEUQk13nwnKxu4thz7xcRsihcrjAp9xInnGZXlsw9gIhAKpMWWoXkAjU3KH9IDdgzbRWrkWDjB6d0gGB17keDt%2FAKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx79j8zDF%2BfYshjheUq3ANaio82pPrr32%2FozwX%2B%2BzvwjGkVx2pKZA2X%2BxakuvZUiP0sx2g7r%2BIrOHsCP1FHyWYfbReZTdZZCuzF4iSlMjpDsuCPkZwrZEfaVW4iUWpkxSM450ctMUJgCmVx99QLPC66tKef9kD6dqvw0JVT4WeHM6jyyf1GBdzQZKIHXji3TdlbYtrqFKKbbByjMK92nwgUWFCrxH31XgaEcBJLCFVaYXRQvW8qlgcuCYMX05Bcx0ljyU5NYBL%2FBEFclkkHjLtJwLKK8HabfMT2yj6FaufRWo7luTPFruj5y5By2OOIXeNDg%2FjmvQm3dcw9IyinwWyzXnctcaizkAuLhjESG9iy70f7QGPzbDJnbTcOiJiAIM40O4FVy4SFFakOT%2FLoB%2F0GK8bvPATUiI1NrphgyFNvhtNuwBc72Eyqfd6YvxQzIfXdvh3fRd1CqyEqE6QSif%2FLa9gsybKPPACiKkVxIAEOhYy0y2xaV4iDIkChfmNS7B5xga3mHM09RRs4%2B%2FKSK7NSk%2Bd8R04nPklx%2FNEt4VHBr0r6gEO6DbhHya4t9hW4l665qfHOoZo7J6jDZhBrZGXN4bF%2FheOWFV2gLcmdcjGSNgSe4IPnDJVeEp4Oly8W4LDHS8l7vztD6wcUPDDixtbEBjqkAR5ubeIrEz8SJFulXEiZzoPz9bwOfqY9z8nwhxGI6zyJM7r4GcZOX%2FxFrF72zsDlrJqz6GRCvr5ZKFMxWjGgTguuC%2Ba8BpcnsKiQZJErsl%2BaDHg%2BqTVN7ZykQGWlyFfGyxG%2BqYWBIDgljdvV9r8HOYigi%2B%2BDCyptYTKzcA1PK%2BD437ynN%2FMSXlYcdYcj%2BLgAQkwtBhbqnebtcd1tHI0WmSmC3qhe&X-Amz-Signature=0dde0c8d9f51aeb378f91f901884ebf200bbe42b9bb22d06d13970fae9479f4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAC5BINQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD%2FGEUQk13nwnKxu4thz7xcRsihcrjAp9xInnGZXlsw9gIhAKpMWWoXkAjU3KH9IDdgzbRWrkWDjB6d0gGB17keDt%2FAKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx79j8zDF%2BfYshjheUq3ANaio82pPrr32%2FozwX%2B%2BzvwjGkVx2pKZA2X%2BxakuvZUiP0sx2g7r%2BIrOHsCP1FHyWYfbReZTdZZCuzF4iSlMjpDsuCPkZwrZEfaVW4iUWpkxSM450ctMUJgCmVx99QLPC66tKef9kD6dqvw0JVT4WeHM6jyyf1GBdzQZKIHXji3TdlbYtrqFKKbbByjMK92nwgUWFCrxH31XgaEcBJLCFVaYXRQvW8qlgcuCYMX05Bcx0ljyU5NYBL%2FBEFclkkHjLtJwLKK8HabfMT2yj6FaufRWo7luTPFruj5y5By2OOIXeNDg%2FjmvQm3dcw9IyinwWyzXnctcaizkAuLhjESG9iy70f7QGPzbDJnbTcOiJiAIM40O4FVy4SFFakOT%2FLoB%2F0GK8bvPATUiI1NrphgyFNvhtNuwBc72Eyqfd6YvxQzIfXdvh3fRd1CqyEqE6QSif%2FLa9gsybKPPACiKkVxIAEOhYy0y2xaV4iDIkChfmNS7B5xga3mHM09RRs4%2B%2FKSK7NSk%2Bd8R04nPklx%2FNEt4VHBr0r6gEO6DbhHya4t9hW4l665qfHOoZo7J6jDZhBrZGXN4bF%2FheOWFV2gLcmdcjGSNgSe4IPnDJVeEp4Oly8W4LDHS8l7vztD6wcUPDDixtbEBjqkAR5ubeIrEz8SJFulXEiZzoPz9bwOfqY9z8nwhxGI6zyJM7r4GcZOX%2FxFrF72zsDlrJqz6GRCvr5ZKFMxWjGgTguuC%2Ba8BpcnsKiQZJErsl%2BaDHg%2BqTVN7ZykQGWlyFfGyxG%2BqYWBIDgljdvV9r8HOYigi%2B%2BDCyptYTKzcA1PK%2BD437ynN%2FMSXlYcdYcj%2BLgAQkwtBhbqnebtcd1tHI0WmSmC3qhe&X-Amz-Signature=c2c417fe8f809df163aab547acaa1a9d07220df284914a0177352cf071148591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJSFEUN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQC12d1X2wjRxn%2BZnJnX3PI%2BQHT77FF0k0jeBPpbbGKVZAIgc%2F5JorVxlhCkJafYLmQ%2BA4dAAeiwH7K2kjFngnVsLAYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkZeTJdMFWW24GMpircAwzR%2FxXFqGNubiOeY%2B9v5ypPLaDXLZhPwJtVGJCvKe%2FbOhAemJDH2erpT8lc0jj9ZqnkVZhT0QU%2B8dvmrwXRP5fdQTKPTz2ZRBjGUtbY7w300etVbKCOSdfR7MJ%2FUM4jXJbXhxdZdP3JTXyC2DqZRg5158juAAaVtGItAiSRcVEwkQQmAfZo4%2B%2BpRCK7djED4oxmS0xObzfZ%2B%2FuUfYOydzfIv9PonEq1W4SiQfyyaZfXjzRYP9kvqd1afzh%2Br4Ec6C5D2gw89zoqrMYhz5h61%2BkM6raVI1P1WnFBM8HSBxa49W%2BG4c5afiRczZfozWjB36bJQyxrt1gBw2RK4KvgXR%2FTA3H7HLK7r549UVXbOCV16THkKrsn6%2B3w%2B6hdrM%2FFkQcAuxAuDNz3kEOV5IER1p80nzmhUL5Ymn%2FOviQilBev47acXDOtDXfAAekLAshDGDDGgwCAFMChz8txH%2Fr41S9XaiqjCOm023P%2FU%2FrbQUTx1ODx90yAIMbDqnznJ6rjMdn9iEW0nMW%2FQ67t1DejdyxqcnxlM%2FXdLIda0p0U6PZyc5FpTPxGOlCuWG0KPsW6N%2Ff3tzNYavpMM2bIWGUnyQSgEzQxhWGVRYxbLqaSpnLGBQKVH2s7%2FpiWLfbKMKDH1sQGOqUBzAfiEcXmOHJ5I858ALUV1dk%2Fva07kmiz2eziz3dVQc5bWqO4LPjUL5to8HNaQ2HuS8fyeSGrwhKYcC1UCCxR7ADUse32%2FLFyK3JEnNEbXxiy9nuFLohO9szKAsYD1jFAuXRspsrrakUaKG6Mw%2FjWjC2%2FRg2AH66Dekn%2BJa2kUZY4j8vubNUshJi76gO0i9gI%2FlLwwHHIMUV36FkWnC2QhpaYwGSr&X-Amz-Signature=22bcd9e7fc00eedab9df79eb1723348c3a124d9d8e51e46c521f292d9d2dd447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634IN6BH6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDjO2CmT5gE3ENVgSZuNKY35LyJB7HVoIgo%2BBgYd0f33wIhAIa%2ByL%2BJMANUDjOZN94JsFMZTjmYLm4TtIn8bTpuUHUuKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytZDk3lktDwlabnRMq3ANUiZXOV%2B1L9SuMSuvujuyi1LaoIT5Xepe4xz%2B0NQbdTG61TL6EIN2aOS3GCRVDYR9GFLRJZ6OXo%2BKcDKL5YF66rJN4CdhG25mBbGq%2BCxX9k8kMkFyfzOVjgcf0QY%2FnsmFcO5Jelk2bJ0WFFn88PkRcQmAgQ16O6glBNPesq4gjmgTzoJiUhG7N4SRh8jKrHR7FWGvUwz76w0aqBW97dlkO1X2Isgxhf1f5WraKyytcmP9775Ue9POaJ6G75ptsQc8rey%2BtiNG81MniNa38BCi%2FV0hu4rtgqEyT9BMw4Z%2Fmu1rlgDIQS4YEifNewtS0PQOfkUBZ48%2BJ4dDERhO4U99MoT2cZM4vPVjeeIXNLVg89rpQgbn%2FYk83LJx8wy6UFJImTpDWmBvjeTrcCIqDeVWhO9RD3i23DkBRn88P%2F45rqvcEYVA2dyPcpHAMGhjY%2BJl9mhiy27e5u%2BhH7EF6BeKC7lMRdWqMBzT%2FTbQgPK%2BWfsBw%2BoLqOwslh14rgzY5XGxDaURUIvGZ2drX9VuJEcThohcYbf2XvUKlr1BXZzYCWaE4oko%2Bgv%2BNTdt3uUCos6tJeBUyQGW6s3XzIA8mUUie0bL6ykY7E2Ou4CRAxDPFpFkF6jH6ZCqkSppWfjCGx9bEBjqkAZs5aWT34o2YszjPqn57Zq2CmhrwAUF%2F4Zqt0294HOuYD25UYh9x35bZiizEmcY4a50rzXQpc3wUSZ%2FRYYPapuCUeZqsvGRgjswipw8FA75zuT0VWxESCIvglgq6l%2BCQNryB3GCxUYd0dKdfBAsdmi5aoUO%2FIxDw9BFI1zcZR0bGIFJOwLcwqujiK0XqwiNZm7IVJubuqN%2B6pv0yVj140kc09VMJ&X-Amz-Signature=b074ab795c4bc84a639f076941b4dc48073c3ff02b76d641cae25097a630f09f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGUAZ5MC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIDX4DyooV6ND18etvO0T4JzgednYYeWd7rQBGrSS2aZ7AiEAvYtpEZAHXdG9MPz6bJwwJ76XP%2FQXto4e8cSY3tQpxdkqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtQYs4R2TaFjMV0lyrcA1Eysroh49As5Y4dMYtm1wgiWI81aRMF3SlNPtnlGpN7ryy0mLMZEvoNR2f2i3qXSiL2kOm7R3u73KZqL51zRhHeQFIEnrqj9Mv6jjQdBe6F2rB7VmtMBgJBFD9AnFZd8mI2CpDWIRfLQ7Q26UQszljxF484EbJDpxKy5mx5xPkUf4Mfyubs3pdEkcCr3x8MsfgRpon6IiaCywwPXQWOqtjwWIYqhIYv%2Fu2of8gqIMxyZ2QF%2FhuHEMNE1OC4HlCVivhbDJzABmAbbcR29BT7MZ1PZE6rnRuClI9sqYrv9wzCLzPwRTIYE4lxdi18jbkVj5%2BOk8IxzwAyLut5h%2BXEiWgrAiNiFaV6DQb%2FEf3UdOtqLJaQSTIK1rpc1ffrtg6pUn3Lwhk%2BGeVl8NfTB%2Fd%2FOrivLhq4FpaNGvhvlDF5jqbNQIlrTCeqdxdV0gDgOg0G7SNZpYnQ5DUYa7kTh4FBPQwTM40MLE1eKye0qLBhaczGgjbnJLPmNBUX4AiKKlaDfRX1t5GRCM4LhYXurvYpafpeAU8c%2BcDbAr39m%2FSWlby3qyCq6n7T450mo%2FFopkezpLMW5sQlEhulFxaqHtweI2Cgy7MJobBh5bpszEE72GCr%2F6U7GTVSOWjBM2OHMOfG1sQGOqUBFsqq4Sba0OF48pNJjhZ1oL85%2BXdx7%2BFfak7EW51XsMTtv1CV823VLlla19%2BSbxZMkaIhMbRDXLYdQtGqGPMfXJf2lknWx3zJGLFPzFICJSOCPHJNRSKeP3U3Upby3800v%2F7%2F6r36hlSBWjMierST8QAed%2Ba%2FL1I%2FdTHVOzOyBQo%2Baa9FncDr%2B0vPOxkEeeqvLmTzgNdvhmv%2Fw8G5I1C1BIrymv7x&X-Amz-Signature=4b1c6df35f0caceee9b806e66c038c3098c0ebf3fb3407291754f7c52a8ce1fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAC5BINQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD%2FGEUQk13nwnKxu4thz7xcRsihcrjAp9xInnGZXlsw9gIhAKpMWWoXkAjU3KH9IDdgzbRWrkWDjB6d0gGB17keDt%2FAKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx79j8zDF%2BfYshjheUq3ANaio82pPrr32%2FozwX%2B%2BzvwjGkVx2pKZA2X%2BxakuvZUiP0sx2g7r%2BIrOHsCP1FHyWYfbReZTdZZCuzF4iSlMjpDsuCPkZwrZEfaVW4iUWpkxSM450ctMUJgCmVx99QLPC66tKef9kD6dqvw0JVT4WeHM6jyyf1GBdzQZKIHXji3TdlbYtrqFKKbbByjMK92nwgUWFCrxH31XgaEcBJLCFVaYXRQvW8qlgcuCYMX05Bcx0ljyU5NYBL%2FBEFclkkHjLtJwLKK8HabfMT2yj6FaufRWo7luTPFruj5y5By2OOIXeNDg%2FjmvQm3dcw9IyinwWyzXnctcaizkAuLhjESG9iy70f7QGPzbDJnbTcOiJiAIM40O4FVy4SFFakOT%2FLoB%2F0GK8bvPATUiI1NrphgyFNvhtNuwBc72Eyqfd6YvxQzIfXdvh3fRd1CqyEqE6QSif%2FLa9gsybKPPACiKkVxIAEOhYy0y2xaV4iDIkChfmNS7B5xga3mHM09RRs4%2B%2FKSK7NSk%2Bd8R04nPklx%2FNEt4VHBr0r6gEO6DbhHya4t9hW4l665qfHOoZo7J6jDZhBrZGXN4bF%2FheOWFV2gLcmdcjGSNgSe4IPnDJVeEp4Oly8W4LDHS8l7vztD6wcUPDDixtbEBjqkAR5ubeIrEz8SJFulXEiZzoPz9bwOfqY9z8nwhxGI6zyJM7r4GcZOX%2FxFrF72zsDlrJqz6GRCvr5ZKFMxWjGgTguuC%2Ba8BpcnsKiQZJErsl%2BaDHg%2BqTVN7ZykQGWlyFfGyxG%2BqYWBIDgljdvV9r8HOYigi%2B%2BDCyptYTKzcA1PK%2BD437ynN%2FMSXlYcdYcj%2BLgAQkwtBhbqnebtcd1tHI0WmSmC3qhe&X-Amz-Signature=47be1423d3d40268e0fb782c3a4b58ffe67acd9929b706afec7776dc834027d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MJMZA6I%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDYAhYLX6Uz7qTOiTIJEsAqqtktRvhIacMEJ6UX8bK8pQIhAOGRyamo6XxwZJnsCZetCqPmfEIcFLlCAEfP6gBOVHiaKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq0hgxOdK5srZ5ZsAq3AOEFbutNOkmT%2FNHpErzpyQumoL8Ob8yVqYwyncV5qb6Wa%2FS8dd7CvtVEYIh3GQR45L4lMvbcqF4V8Zc4I%2B7JfcP%2FpkGbVFaS8WAYuSp5ZUkmG8P8gcNnf5uGbZa9cnXH4i%2F5LbksmA5c1lyOZsaKkrQVyW1jdMWdmGSI6ZWqHcpx2VYYwEFm91xCbklpWhZ8pgBQvE%2BCVSQXIBnahlaOl3Vfb8%2FBAhnKwuJrmxKK4JJZjA%2Be2aka2j%2FyTRnQ%2FoTFErwBa4pFCJRmfMrE46qJB0j8ZoF1stAguCYtt7BsU7emnprvfVsgxrJHUO%2BJfLma0FSbl%2FswE1XiWzv%2BfQBapTaMPOJfX4FqwwX%2FhK64ecxn%2Fqi9NK9WAUjQpLf91SYXM0FwfAYVO1AeHfdmlNNqqJ%2FQfqxvQkV8Yk%2BOWg%2F%2B%2B6ItWePIGkkKOumbnmqJNuhhl216xYSHdseZy9X0FIJvMf38m1NOeoUuleQOA13UQVG5Bej%2B3eUhE7NkzygYnqp%2F5lfc6fuQwts37tYRamhr7lKpZbJSge532qauIag94lytCHWdxRDO5dM1EDDx8TJIILE9i0QgXe6Q8AK5uTn1GMafkPczy%2B4wCQMt6cb2NVhP5ohGTFHtdosNeDpETCrx9bEBjqkAaCK9AwCwMrCZbeSYMBSkuA3YMAi0kx0qF29FNWilCwqTzOEzl5fzeXvCxtV7y%2BuC%2B%2BxcQQB9fjZUNmXnjYL%2BL1HlKMlSxjHdnUS711INVQPdYRn1yrIvuWVdTZ7tgG2GbZ22nxyKBZvQ67Y4GMiweTUo%2FUvKiacfn0AZIKsgjTHsbzwA%2FclmUqgoTAeROFZ%2Bz0zlAzLsfg1y08rk970D98h8PQ1&X-Amz-Signature=2b6bad3087c87204e25de783473d70ab99fc16040e45bcf68b3d4173fe1bb57c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAC5BINQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD%2FGEUQk13nwnKxu4thz7xcRsihcrjAp9xInnGZXlsw9gIhAKpMWWoXkAjU3KH9IDdgzbRWrkWDjB6d0gGB17keDt%2FAKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx79j8zDF%2BfYshjheUq3ANaio82pPrr32%2FozwX%2B%2BzvwjGkVx2pKZA2X%2BxakuvZUiP0sx2g7r%2BIrOHsCP1FHyWYfbReZTdZZCuzF4iSlMjpDsuCPkZwrZEfaVW4iUWpkxSM450ctMUJgCmVx99QLPC66tKef9kD6dqvw0JVT4WeHM6jyyf1GBdzQZKIHXji3TdlbYtrqFKKbbByjMK92nwgUWFCrxH31XgaEcBJLCFVaYXRQvW8qlgcuCYMX05Bcx0ljyU5NYBL%2FBEFclkkHjLtJwLKK8HabfMT2yj6FaufRWo7luTPFruj5y5By2OOIXeNDg%2FjmvQm3dcw9IyinwWyzXnctcaizkAuLhjESG9iy70f7QGPzbDJnbTcOiJiAIM40O4FVy4SFFakOT%2FLoB%2F0GK8bvPATUiI1NrphgyFNvhtNuwBc72Eyqfd6YvxQzIfXdvh3fRd1CqyEqE6QSif%2FLa9gsybKPPACiKkVxIAEOhYy0y2xaV4iDIkChfmNS7B5xga3mHM09RRs4%2B%2FKSK7NSk%2Bd8R04nPklx%2FNEt4VHBr0r6gEO6DbhHya4t9hW4l665qfHOoZo7J6jDZhBrZGXN4bF%2FheOWFV2gLcmdcjGSNgSe4IPnDJVeEp4Oly8W4LDHS8l7vztD6wcUPDDixtbEBjqkAR5ubeIrEz8SJFulXEiZzoPz9bwOfqY9z8nwhxGI6zyJM7r4GcZOX%2FxFrF72zsDlrJqz6GRCvr5ZKFMxWjGgTguuC%2Ba8BpcnsKiQZJErsl%2BaDHg%2BqTVN7ZykQGWlyFfGyxG%2BqYWBIDgljdvV9r8HOYigi%2B%2BDCyptYTKzcA1PK%2BD437ynN%2FMSXlYcdYcj%2BLgAQkwtBhbqnebtcd1tHI0WmSmC3qhe&X-Amz-Signature=8ac6aa2522df8463911c5d89c1cab82f0abbbcc57eab353d5ab2c618f70c251f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPTKN32Q%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIEceDMisPNJ1b7xlwLYIB7tB%2B2%2Fcvht66vuyPeOEkRf3AiEApNmdYOt5%2Fl9n%2BUmj4nkyZ52ntRsKKNHGSDExvMKDWvwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1vkxROOH8nsiihPSrcA9DRMZAkprWMKdAvw7atwuIGfRefpcqvfMWdj5Pgq1DW6kb1OFUNlOFcfWBHDwCGxH7D5F26vRjs%2B1QPXu2fExMa5ve9bXpJb5I6n7V7jXlOYd3GGMzYuXMPzcs%2BPfdiFgFCVVFD8MUaZEj5IXwelONb9f1t8XyO1EG8jpbRaCRXS0MaMc5LfLWptgvVMIeIQZyhglcILlFM4gCm09bJyasgf30WZvRbOdJJ923rOUEWlpckmwoeWEFab5qRZh%2B2kdfwDKlXY%2BaCI1rw0dKmF%2FZZzHuQLjAzHkbTyQU3Z1BHW2Lb0LRsMw64MdBHIQckCgr3P6lLov9r10c%2FccbU%2FA17jJPtFoU1r71QwzkDhpyhfiZlcqVfRY9LBwodq4N3wwFLeBmEg5vobaIh%2F2hxks9R37y9hTTM7chn1pPrgDVCHATa2xgIH4eVzKmBttnzpz6C5aaL4%2BMfzOr5T0rbqPLQEG3q1vGuZAmUtZKGSWV0jJ65nMoylm7snt8d6div%2FRYJjZF1IPJo9cdI2YV6ObwmW6AN9dCQn2hYnzUjS%2F0M6sj6rNDlaDbt0LuLTu6bhxMdHh0JFivf7x5U0fQKtXMdtTXspq0RTUzD9mEITpachRJ2JdJx4hOnEJMTMNzH1sQGOqUBcdx%2BCkx%2BE3Spjr1hb1s38337gbkrQdeJScmrv7XN47egjcQXT5cgemRKPKsBPXMHvJp1S92vNY4qddDR8aqK%2B6s1Eo5GqMgmdFIwIj0W5QSxU6C77Z7ncRJpD1Ni9KeuoX2ayN96BHjC33EDOcBi3Yf3rafv9dW9orZ8mbnxg%2FmfGmn6bSVv07IrRCOxx4IyOk%2F9aKt1EkaeICBXJlvzcnRR4%2FGN&X-Amz-Signature=6b9b1a2780ba1c56d2383dfeb7fd4ca4ea89af7f7ef838aeabaa18b750951678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAC5BINQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD%2FGEUQk13nwnKxu4thz7xcRsihcrjAp9xInnGZXlsw9gIhAKpMWWoXkAjU3KH9IDdgzbRWrkWDjB6d0gGB17keDt%2FAKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx79j8zDF%2BfYshjheUq3ANaio82pPrr32%2FozwX%2B%2BzvwjGkVx2pKZA2X%2BxakuvZUiP0sx2g7r%2BIrOHsCP1FHyWYfbReZTdZZCuzF4iSlMjpDsuCPkZwrZEfaVW4iUWpkxSM450ctMUJgCmVx99QLPC66tKef9kD6dqvw0JVT4WeHM6jyyf1GBdzQZKIHXji3TdlbYtrqFKKbbByjMK92nwgUWFCrxH31XgaEcBJLCFVaYXRQvW8qlgcuCYMX05Bcx0ljyU5NYBL%2FBEFclkkHjLtJwLKK8HabfMT2yj6FaufRWo7luTPFruj5y5By2OOIXeNDg%2FjmvQm3dcw9IyinwWyzXnctcaizkAuLhjESG9iy70f7QGPzbDJnbTcOiJiAIM40O4FVy4SFFakOT%2FLoB%2F0GK8bvPATUiI1NrphgyFNvhtNuwBc72Eyqfd6YvxQzIfXdvh3fRd1CqyEqE6QSif%2FLa9gsybKPPACiKkVxIAEOhYy0y2xaV4iDIkChfmNS7B5xga3mHM09RRs4%2B%2FKSK7NSk%2Bd8R04nPklx%2FNEt4VHBr0r6gEO6DbhHya4t9hW4l665qfHOoZo7J6jDZhBrZGXN4bF%2FheOWFV2gLcmdcjGSNgSe4IPnDJVeEp4Oly8W4LDHS8l7vztD6wcUPDDixtbEBjqkAR5ubeIrEz8SJFulXEiZzoPz9bwOfqY9z8nwhxGI6zyJM7r4GcZOX%2FxFrF72zsDlrJqz6GRCvr5ZKFMxWjGgTguuC%2Ba8BpcnsKiQZJErsl%2BaDHg%2BqTVN7ZykQGWlyFfGyxG%2BqYWBIDgljdvV9r8HOYigi%2B%2BDCyptYTKzcA1PK%2BD437ynN%2FMSXlYcdYcj%2BLgAQkwtBhbqnebtcd1tHI0WmSmC3qhe&X-Amz-Signature=c5938ceb87eb8fd474850c7a24d7e7427a19362a1814fc0d2fdb4fa30c243004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466644DHFZH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCSvYQeCpFzSx2OySNYSZZdy%2BFidQPfZRR%2BCkLbk%2FUNNAIhAJ26S3cuS6c8PI7yhFgnJE1NQCeNwVLuepXz%2BTDiCVlTKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxtb8ClXqglGNDzc8kq3AN9I5TrbfytOlB92n43Mf56pii9Ta89oK67fHobwCeswRw2wAAQibxaeQGZdPWkUvdnr47QUMMVKvYkEDj1ar3SIILaAaA%2B81LueDMd4RdkhjKbR5WssEOeXzYYKLALVj3A7T0iuTe2xo1HA40OzrjQyOO0gAxLs1uz1IuMLZP%2B4fEab51Cx6V1%2FMWlbzkM6LTJiWQrC7gIlMMyN2BUimQO1N9V%2BGTXe1DgFeROWeNcKZ%2BYOg1VHvz0U%2FniZR5PuhL6V1h0JnhOGT6YlV2T6hX3hT1XIJjpVjwrQ0Tv8l5LMQw2w6mGjS%2F%2Bb9evPVJNmQySz8LDy1OTkbF0LeQfWW1KDQvcdEDqsVlIPZf%2FL%2FmLFzKKeof5QVrZ0UZquDfFy3RLPHs7ISJR2MmrbpBCNn7Mt62zkueRTgZRfCDzl8LlYcyAIacKNS%2BztaExTbjfQ2uxcr0UvGg%2BK%2Beq49RQuDV4qs5vGi0hPfRMeg4yIifYBaSqiZO5S9ffoxaWlDKnTrM5Sl0ZPOuFoUe8rU0ji5jkXMwWkYeEqy%2Bcw%2F5PN6jkR1nJ2wUCc4e4kS%2BjteIolGaZtyYNjDzOIKGVv2rboTndG%2B2TKCqwA7AY6bcG6FiRjqxY2CYycglsTV0aezDtx9bEBjqkAfgxMTJie08eaLcAqjcUL3i8%2FSjKcsC46vltWFDe%2F5OZbrwjMXoB9EfRWTVKRTcdVS7bbo59xt3QRVrD%2BcI%2BBCzd53LPE7nWsojifEiwN%2B4Euh19D%2BbeOOHrPjZGi75HoeVeNvWxbQAoomGEM3mLXt8rrr%2BdSiMJKRiK2kAdyKlj%2FlXwTiI0XSjDgDtbt5OHjUODQe75jVSvCYt4tvjGtO2ivZ%2FU&X-Amz-Signature=0ab1ac1763938be1f3c5509726230eea414c0680983371e569d242ce2fae0a4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAC5BINQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD%2FGEUQk13nwnKxu4thz7xcRsihcrjAp9xInnGZXlsw9gIhAKpMWWoXkAjU3KH9IDdgzbRWrkWDjB6d0gGB17keDt%2FAKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx79j8zDF%2BfYshjheUq3ANaio82pPrr32%2FozwX%2B%2BzvwjGkVx2pKZA2X%2BxakuvZUiP0sx2g7r%2BIrOHsCP1FHyWYfbReZTdZZCuzF4iSlMjpDsuCPkZwrZEfaVW4iUWpkxSM450ctMUJgCmVx99QLPC66tKef9kD6dqvw0JVT4WeHM6jyyf1GBdzQZKIHXji3TdlbYtrqFKKbbByjMK92nwgUWFCrxH31XgaEcBJLCFVaYXRQvW8qlgcuCYMX05Bcx0ljyU5NYBL%2FBEFclkkHjLtJwLKK8HabfMT2yj6FaufRWo7luTPFruj5y5By2OOIXeNDg%2FjmvQm3dcw9IyinwWyzXnctcaizkAuLhjESG9iy70f7QGPzbDJnbTcOiJiAIM40O4FVy4SFFakOT%2FLoB%2F0GK8bvPATUiI1NrphgyFNvhtNuwBc72Eyqfd6YvxQzIfXdvh3fRd1CqyEqE6QSif%2FLa9gsybKPPACiKkVxIAEOhYy0y2xaV4iDIkChfmNS7B5xga3mHM09RRs4%2B%2FKSK7NSk%2Bd8R04nPklx%2FNEt4VHBr0r6gEO6DbhHya4t9hW4l665qfHOoZo7J6jDZhBrZGXN4bF%2FheOWFV2gLcmdcjGSNgSe4IPnDJVeEp4Oly8W4LDHS8l7vztD6wcUPDDixtbEBjqkAR5ubeIrEz8SJFulXEiZzoPz9bwOfqY9z8nwhxGI6zyJM7r4GcZOX%2FxFrF72zsDlrJqz6GRCvr5ZKFMxWjGgTguuC%2Ba8BpcnsKiQZJErsl%2BaDHg%2BqTVN7ZykQGWlyFfGyxG%2BqYWBIDgljdvV9r8HOYigi%2B%2BDCyptYTKzcA1PK%2BD437ynN%2FMSXlYcdYcj%2BLgAQkwtBhbqnebtcd1tHI0WmSmC3qhe&X-Amz-Signature=c0a7c425cae6d454f42bf82c00fa2437c682efe206d0855747e8220937ec11be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXNUPOOS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIE3lDJE5nqO1ykcdIIF14X8P82oOoCe8HsR4aZ5P23H4AiB7aNNjok01rjcVaPlSOI21jQHjpWK08%2F8G2m6X7z8MCyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHB3svxnMSSYVdy1tKtwDW9sxC0pLDBYwVEXo9I2k%2Bma3L5mUXnf4QRcg%2Baubdrj1ycCdomCyavDsHqY%2FDMiBQQ78NT67YJ2Lyejt7eR%2BPZ3Bx%2FNQzTpSgaLiUZ%2BFw4K0sRPw3m9erehmZD6rRCUY%2FPG2n9X1Lb82JLMQgMAB1E0VcSL5iZmcL3HF3BseremISAvWUIxdc8mx3DHtKj1ZMXX51tgGZhO9%2Bog9oqTwoLCZArvg2fRAUptzHWEmJ0lfD9pYiUX0OMZ4C4BZCzs9PdRRiphpu8HVkIrlvErxnpkGyyYNqzy9JTDk%2BUfpeVNXsGEjpBd5S%2BRv9Sjk7hEj8%2BR3h9DGeIlhPyCMaBt%2FWw6p%2FXhULjFWQ4vT%2FkOW2rTFlyfP4aijBf3ZB6uSA4Kea0JmOy1pUfuwOiBSeC4FmlSMSbcbyh78kfNxjTD41Y%2BAUgzZzLNo04SVyIkDI4YgyrybUokWc7cAIh82yaLd1%2BmuIJyW1OfrOsJLFa2lM%2BduUVv%2FyHvAbAjjk9MmHbTZzha2Xu3NNdBeR64%2BwiprFtQi1SVDu381RK7gwQh%2Fx9nQqQj0PkLB44KPwuAJ6S84Gg61I%2F0aRQ9SajltK9ww%2F%2FB7w88rH3eIL%2BSlXuzBcPSs4Kr1Tet8PguZhVAwmsfWxAY6pgG6hzAcxpkW0ECaOZZruXgfqwv%2BMaDzUqwwACkzGhOwEAifxX3UWfPQGH%2F4u2ILj7Bba%2FemDV9G182OOy6OgiODOR1Ze6c28cTEE%2BDqEzHiVNl1HnG%2F3yRRjqZr7VmbP53G6pdPdnbFyWenuwEOtfR1yFBPsgvomvzrLYR12KnmJXWQ%2BN2%2BjEXzxxfO60pg76Iq4eraWH1wOcht8WJf3df5ZTByw48r&X-Amz-Signature=c7f1731a4642a72884cf7b9291feb8e432c8ec833db2ac6cf1e902190bd26a7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664FO5DFW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDhKnVqyCC3qSmO1F43eNAw1WGG%2BXSv6xf1%2BOeDzfmlMwIhAMdDGHmaqmmq1nyAwslgPoCKjuEctJV5L0n15i5mKxbMKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8K8b6G8ohBvyrfLUq3AP%2BKjsSm6wIvrFkC5eeTOvKLLxttiuRwpFTFRJFva%2F9z2UTsUWmzhAa%2FegG%2FPNGn1j3SzCbEvB9suk%2BysKF0IKhTmxDc3XCYFjDVOiUZXMHkpQ%2FUcraJhULeS4YgCsDn3iZu7nOmXTBGWwjo4uVJDZfidrXeooypILuNUJOVkTyswGtKueuTTZekBx8up88Fhf%2Bcu8tnhChZCNBpuNOPHwAXNdkfWDiiiXj5%2FBTXAWy8CMF33FapDIcmkFHEpyVNq9IgXk%2Bop2HTohcrwVP%2B%2FaQeneURZFCpFfPXDWTTJOvoNw8%2FtpiN%2Bwo75O4UpTNX4B8cowKSh6cVu6rjueYKBuDelkOYFUsdu0Klcn5LKmSS464GA8rvFDBqFBEZZiERw5W7uXdBk7LsCLqu6FjRLWdUTmaFvuDmDwDwmRqSqTsoT%2Fk1js7GfFEjde1EBPW%2B6uC3Q4fjzTUz%2F3aT720j2CNCZZwxIY55VhhOTbH%2FP3fxr5%2BpqQiKYtxOKYeqo%2FPsn2ZbSNFT0eiZhz5gG%2F5b94L1F0bUSSeqR1BHjngs8zjvcXXXcUKJiPoi8%2BXMbBIO8iSOwZzBmOYilZuwucoY9M37vJHJkLZYlvWT4rjGLQ5c8aXtL%2FIcx5EbZABijC6x9bEBjqkAc4kiyjjdB2zMKH%2FIUQtO%2F3DO6MxylpKExPIBzRrHltOilUosSU51Vq2IUaJsWdHINNRGcHDmxVLfztJcOc3lfLGcZpDe9CFZfF609kkqwnnRGMEE8YGpi9%2B1ekkSNUpaU4TYDAoxNIKk%2BnBxYqS0P3HpT9h2i00G64rsx1VCiqh1ALGshNw1qQo00yGjuWS4LDm67W8LrzhpUDcP%2BATuFsksNvv&X-Amz-Signature=d8b772efaaeb2b9a4b6e04a521c0133caaa815248f270b67760321b54438a84e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VH35WFV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCynB3YwwaLpkJMPhPrP23YfBDzTGQJ153Tadx%2BOWp0%2BwIhALcsaqBPK1bWgXjqOyLcoXKXIB1gGLfavZ46yk%2Fn%2FwR0KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FCUOHy4NCXQkC7KUq3AOBQltfael8BdQt1iPBvIel4gZjikQpcqt%2FjV1f8TGx3NfA2KIltNzZ9kJ98Z38yJX5ECLOSDmBGMG7g4Wnpiq8Vp4lBYBaj6EmEwJr8421g0M%2FFqXm0oinCPLcq8tJYZyk5ELkNZCiPSdWCw9OUZq4WV8KzrNp6%2BK78gIeJ9gZC6TxefhDODJrqUlzWrJ%2F2FTtVQRcMHVqjVHa%2BfGFzm4Wn9d5qHOycczKxN%2FtDc1TvRpt63%2F8AC%2Fpu0vgoMpO1D2ZNJdqdaK5XZq4fIcmQgCfx3wznOGmB7dVJn3JPgXIH5faixhntaSaC71THijLrB8G5mxFWIjfp4mzqTAKVtYe9VvxC%2FnQJtVPyeRBkI0M68VsSDM7KlNV%2BV%2B6DPfD6%2Fu5iuohg%2B7KqaNXqPuBkjHBfDoj3O%2BXoMKcasLHtambZLZWYBXU6w29kmQMDIR27qhJAZnr8xdwEqRgK6eaK7BkXtkSGKTEfSj8JDkBEQxT5XmuU9s1N%2BsNqSfmgFUJzibtLMhiK0i0h%2FmsRoCVAcZdjOOLc%2BmyGlTdMhlj07%2FJYMonbRsq6ykgY%2Fc2E10C5IQjKuR81fdOyICY667A26yVjsY2MLaKXNKXQezwQX4j4XnsYD6T5%2Bu%2BLzcNgTC8x9bEBjqkAXghVjxfi1insjH99TE64z%2BGmwGHCnGz2l%2FJveqbXy7fpAxrDd%2FuyPuXZPvj2UUlyNeCmTxpDl1THBKHr0%2But5DO3GALOoni8F3eyxjCs3oKoqh%2F3iwPKQVtVZXxeizoEgMEK7ygOB%2FpsVEwjuQ4Jihh90iHvQPfslTpYsgSmFrK6mk%2BaQAEZbG7EI8VQAjKNxa93MJjgKPF4hzOuKIrlGhl0qf%2F&X-Amz-Signature=d07f7369aed9e57a0805fa597292321a9ff1b22387f99f92b4aaba5c3201fc1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KAMZGSU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIHPTJtQObRjXssoUYmY5RRHz0k0j3GKNsL1A9fIQDJ0hAiEA5%2FRuqumuAZGgt0ewSpCWRpEpmfJ9D4iWO4B%2F6O3jvMcqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM0o63eFAt0j2aiIhyrcA1af%2FsAeauZZyKU7SSkGIPnEJTB4aSJWz%2FjqClGnzeu8t0Ihy%2BF02jtfZp%2BVQgRm0ZhbWJVPVLtazQtKbZzAC4RRKTVF1TlxkYY7Q%2FTJR4gFs73bC%2Beo8ZFJi488RG%2BzQPI0S3zNAHtd%2B3cW2qsSKNQWF9rJP7nOFlxZ27wETVWxSDFTZwGmw1GcXtpaBqHLRpSpFLz2hahps2yUWHy50fvrZb2mKcnTx2riAvPg1%2FlPvlJoSoVGlxQFJjq%2Bajh%2FxTgsIkslNETOEobgezl7bMbfgziga6rALhs3Xvck9rFFEx2Ff1AM133Kk4L37TNR34dKbiK%2FJVgzAAGpgPpSjd58reJSZGAlY0KF5cvCtWsi5zqfq%2FCiceCrJzhCfaOK9FGl072NVZh4tdcXMWY5mM3eboucNVg%2B%2BJRfmzDWoRBkWmG8kTu%2B68EvD7uW0xmosUclLeKscrTBDBEaAZ0c7WSAVpCeV%2FDhZyH3X0R6uD9GG1vlUsgIhoE6%2FDtgN0NBgMVdOpsMhcy3tmfbRTDspL1j8UUa3FEjexBqmOEbaCgiQtqHAXXGWZ24M3KpjroxQHsMZ2fWUxtgTx27GNmkN%2BWxlJ9qyZk%2BYW4iMctpdZsTl8M1SpJ7lqWT6sryMJ%2FH1sQGOqUBlCCaYxVGPYwGybKinv%2BD%2BkfhgEss8WV1etc5PLl6GJQYz6NbsBC0aqUE8SE9NWPMUSnxf1xaURP84jMWS7Z%2B0u5BukvqBjQJS0wpsFc9%2Bnagq4GUjFRb3BvMwibhWSDp2sMwuiUkfc9CGw7mqX%2FhQYUWeeEMNu9D5dPoOzKfrYMm3EOAf1a98hIfVbIj2XAO%2BEOZF%2B2L%2Fy8%2Fs%2BlV2IQK%2Fghb5WQ%2B&X-Amz-Signature=1b7d7018f4a58f18725dc1bddb3c61bb42c0df6420b8b38de71f0ccece080511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWMTGV3E%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCICzM9ks3fr4Ls1usSY7ohr1RZwtLDQwVGmc6Zwj9xfgiAiBUJ7S3kMwFovtEXK%2FsqxxQzBYziWWubHG%2FQ%2B6HQ%2F7CQyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2oAhOOdxq%2FCCp%2F3BKtwDqC%2FJKiRzwWlwgYyZ0Lg%2B77KK9TgCDn2L79fo7PTP9ULwvjG%2FGx0mAuweXj%2Fdr3lR96TWFii8AkZDpF2LdrwEXHbrhtd81ZVgK6h7NsMzx4jwx8JKHfwcaJeR8WedtGCBgEvDwCymFSW1csrW1L94PrvEVry2bovt5TGl%2F0BqJpO0bAmfD8w7%2BEIupeu9b%2BPRP2MgJF8ZvBhHyYlkaFGxrh50o0bqxpAzjzKDc1QwWdHZCCXPFiHqifT5Env06rJoqv1Z2PoIA4OLa03IbGjslF0U1wieI%2F8H3jXA5mEIFDDipfxzB1Twk5cn13HPdVyJRiA2oPbjsYJqcfHAtCH1lJE1eINDUu5vPXc2zCK71hAjUVKiziKqKohVi7GCos8RDCOgtR72sVfM7u5Ax%2FGwjzRTjvl2qhPpVLeUtcQSDzUo2nYfqWZLmYqntbv8P%2ByDhGoS1LduP7kO4Ht5VBq5SHpLbnNTz5Kyn2Da4tKREB10nxy72yNJ86cYcD1OGmpCrxqu2PZB0yajM%2F1%2BOAhy8Nls%2Ft8i8K7o%2Fthm4pzaJEVdakPsIJnzsb5rtTaxp9jQJ8I1nZVbrk4KF6Z5XM%2BUdrdkp%2Fh6epTkc2E9pdzQ%2B%2FT%2Bpf%2F36VT3uD2Vr%2F4w28fWxAY6pgGYsRd6%2FjIE360VXXoHf4mpdQpgLEwg%2FpSg0LHVK581uFc56Zj52UVmYrNJMR6%2BeK80o7L9BcWAi33QKIbR0pRQWZIQOd3qr7qwk8nte6A1YcRVSHJopJIfZMHZkFasPcnOIH9AdkayV13fGfseK7IkGAfoJq6xzrzEZ47%2Bt4vJjgYRzJUnSS7HriDF4zPL6ebnbunYcxuWA8UNHXY39rDRdIMci5ie&X-Amz-Signature=a12a9ca84487a1f6e8627dab1243fa461d9998d387e2399749f5b5599d552ae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAC5BINQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD%2FGEUQk13nwnKxu4thz7xcRsihcrjAp9xInnGZXlsw9gIhAKpMWWoXkAjU3KH9IDdgzbRWrkWDjB6d0gGB17keDt%2FAKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx79j8zDF%2BfYshjheUq3ANaio82pPrr32%2FozwX%2B%2BzvwjGkVx2pKZA2X%2BxakuvZUiP0sx2g7r%2BIrOHsCP1FHyWYfbReZTdZZCuzF4iSlMjpDsuCPkZwrZEfaVW4iUWpkxSM450ctMUJgCmVx99QLPC66tKef9kD6dqvw0JVT4WeHM6jyyf1GBdzQZKIHXji3TdlbYtrqFKKbbByjMK92nwgUWFCrxH31XgaEcBJLCFVaYXRQvW8qlgcuCYMX05Bcx0ljyU5NYBL%2FBEFclkkHjLtJwLKK8HabfMT2yj6FaufRWo7luTPFruj5y5By2OOIXeNDg%2FjmvQm3dcw9IyinwWyzXnctcaizkAuLhjESG9iy70f7QGPzbDJnbTcOiJiAIM40O4FVy4SFFakOT%2FLoB%2F0GK8bvPATUiI1NrphgyFNvhtNuwBc72Eyqfd6YvxQzIfXdvh3fRd1CqyEqE6QSif%2FLa9gsybKPPACiKkVxIAEOhYy0y2xaV4iDIkChfmNS7B5xga3mHM09RRs4%2B%2FKSK7NSk%2Bd8R04nPklx%2FNEt4VHBr0r6gEO6DbhHya4t9hW4l665qfHOoZo7J6jDZhBrZGXN4bF%2FheOWFV2gLcmdcjGSNgSe4IPnDJVeEp4Oly8W4LDHS8l7vztD6wcUPDDixtbEBjqkAR5ubeIrEz8SJFulXEiZzoPz9bwOfqY9z8nwhxGI6zyJM7r4GcZOX%2FxFrF72zsDlrJqz6GRCvr5ZKFMxWjGgTguuC%2Ba8BpcnsKiQZJErsl%2BaDHg%2BqTVN7ZykQGWlyFfGyxG%2BqYWBIDgljdvV9r8HOYigi%2B%2BDCyptYTKzcA1PK%2BD437ynN%2FMSXlYcdYcj%2BLgAQkwtBhbqnebtcd1tHI0WmSmC3qhe&X-Amz-Signature=8264d113093ad9c3260e1c083e8a5c52a71202c6072d1428759ccf4127b00ebd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAC5BINQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD%2FGEUQk13nwnKxu4thz7xcRsihcrjAp9xInnGZXlsw9gIhAKpMWWoXkAjU3KH9IDdgzbRWrkWDjB6d0gGB17keDt%2FAKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx79j8zDF%2BfYshjheUq3ANaio82pPrr32%2FozwX%2B%2BzvwjGkVx2pKZA2X%2BxakuvZUiP0sx2g7r%2BIrOHsCP1FHyWYfbReZTdZZCuzF4iSlMjpDsuCPkZwrZEfaVW4iUWpkxSM450ctMUJgCmVx99QLPC66tKef9kD6dqvw0JVT4WeHM6jyyf1GBdzQZKIHXji3TdlbYtrqFKKbbByjMK92nwgUWFCrxH31XgaEcBJLCFVaYXRQvW8qlgcuCYMX05Bcx0ljyU5NYBL%2FBEFclkkHjLtJwLKK8HabfMT2yj6FaufRWo7luTPFruj5y5By2OOIXeNDg%2FjmvQm3dcw9IyinwWyzXnctcaizkAuLhjESG9iy70f7QGPzbDJnbTcOiJiAIM40O4FVy4SFFakOT%2FLoB%2F0GK8bvPATUiI1NrphgyFNvhtNuwBc72Eyqfd6YvxQzIfXdvh3fRd1CqyEqE6QSif%2FLa9gsybKPPACiKkVxIAEOhYy0y2xaV4iDIkChfmNS7B5xga3mHM09RRs4%2B%2FKSK7NSk%2Bd8R04nPklx%2FNEt4VHBr0r6gEO6DbhHya4t9hW4l665qfHOoZo7J6jDZhBrZGXN4bF%2FheOWFV2gLcmdcjGSNgSe4IPnDJVeEp4Oly8W4LDHS8l7vztD6wcUPDDixtbEBjqkAR5ubeIrEz8SJFulXEiZzoPz9bwOfqY9z8nwhxGI6zyJM7r4GcZOX%2FxFrF72zsDlrJqz6GRCvr5ZKFMxWjGgTguuC%2Ba8BpcnsKiQZJErsl%2BaDHg%2BqTVN7ZykQGWlyFfGyxG%2BqYWBIDgljdvV9r8HOYigi%2B%2BDCyptYTKzcA1PK%2BD437ynN%2FMSXlYcdYcj%2BLgAQkwtBhbqnebtcd1tHI0WmSmC3qhe&X-Amz-Signature=38820d0e4f6a7fc745a6b3130af212e7a485e84d7f93bd4b3411034509a4edd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOF2AUSU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCpBURK5s8hNtWaE8SAp57LIxKaL2hQ8nR%2Fl2cs1%2FhwrAIgRtSFf%2BMCXOjJjDlDVW8qvB0mhq61UBlRyH1KdJ%2FX%2B1oqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHKOA1C6sxqUFzrFircA038LfjFRtNCJNy9ziQNsJ5COuDyOM5FP5E9IKRNxpawDg2f2RzLIpNt%2B6ENhXC7KDzqg1Mz2TyWacQggm3PcHvZoC7khBPEBitf114s2CzM9oVTc4uBtr%2FYzpDV%2Bb9csMBrf%2B3MQ2lz9EYdeRkSjU90kzdjopbLnDA1ZHPyclWwGGFZ8m0VBg%2BU8HznXZL9M%2FEsp1X2kPLK%2FkVRcJHAjCpLVJzK0fp0TnTz0SDCm3Acc%2BM5UUEljfbQsHFtvn4gmzo9%2FbB1EBW4nMsTaqYvpyV7yITOlOQrSr973mj%2FgHdp07QHrLsyLyfTv6%2BPcde89MJnnw5C4o2wKPC5qMExRmJ%2BDfjIEdIgfSgC4alg3KNZ46gyZM0vuUV1qruGn8JAnoItKmrD7%2FAXqYqehcmG9g%2B4xfHHh4qp4KFQolKhLdtNVT9NmvBFILkqnyya7iYJcrN2noyIQvsdGVdBqw9z0io82%2BFpZFt%2FW4xYE0tX7UNDCo63GzpDObP33iImplPCnhqS3XIyLEjO9y4RsFyVf%2BCuf0CRspUzseyELK30VFCMeuDBUIbPteBoHd8oB2hbHc9lJ18q9OpMv7fn8CNiZJg8HQcWpNFUg7FnNzxT2NDAzwlR2b7Umlky%2BTGnMObH1sQGOqUBuQm4onbma4j5mqvdf1DfpecvjbFKKSdipT%2Fkl3rikWDIKT8W%2FYdPv3OO52k5a%2Fr9bUEjWlqry%2BFVXFVODQyzfFvbSATHwufIXVYGG2liSDPFajFGjy%2Bk%2Bb%2BgjioB%2BXS1tIsejsXTquCK17jMUXL50JM2GgJnJMejrL4xMpESVV57dm8bZImRvQ4hVfmFcVis3YYJqYL6na3t8lcQFQgQl%2BIJhUci&X-Amz-Signature=fb23497b2534bd5c2b2b48abbbd2604a48f640c3363498cebb96b9201e321596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOF2AUSU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCpBURK5s8hNtWaE8SAp57LIxKaL2hQ8nR%2Fl2cs1%2FhwrAIgRtSFf%2BMCXOjJjDlDVW8qvB0mhq61UBlRyH1KdJ%2FX%2B1oqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHKOA1C6sxqUFzrFircA038LfjFRtNCJNy9ziQNsJ5COuDyOM5FP5E9IKRNxpawDg2f2RzLIpNt%2B6ENhXC7KDzqg1Mz2TyWacQggm3PcHvZoC7khBPEBitf114s2CzM9oVTc4uBtr%2FYzpDV%2Bb9csMBrf%2B3MQ2lz9EYdeRkSjU90kzdjopbLnDA1ZHPyclWwGGFZ8m0VBg%2BU8HznXZL9M%2FEsp1X2kPLK%2FkVRcJHAjCpLVJzK0fp0TnTz0SDCm3Acc%2BM5UUEljfbQsHFtvn4gmzo9%2FbB1EBW4nMsTaqYvpyV7yITOlOQrSr973mj%2FgHdp07QHrLsyLyfTv6%2BPcde89MJnnw5C4o2wKPC5qMExRmJ%2BDfjIEdIgfSgC4alg3KNZ46gyZM0vuUV1qruGn8JAnoItKmrD7%2FAXqYqehcmG9g%2B4xfHHh4qp4KFQolKhLdtNVT9NmvBFILkqnyya7iYJcrN2noyIQvsdGVdBqw9z0io82%2BFpZFt%2FW4xYE0tX7UNDCo63GzpDObP33iImplPCnhqS3XIyLEjO9y4RsFyVf%2BCuf0CRspUzseyELK30VFCMeuDBUIbPteBoHd8oB2hbHc9lJ18q9OpMv7fn8CNiZJg8HQcWpNFUg7FnNzxT2NDAzwlR2b7Umlky%2BTGnMObH1sQGOqUBuQm4onbma4j5mqvdf1DfpecvjbFKKSdipT%2Fkl3rikWDIKT8W%2FYdPv3OO52k5a%2Fr9bUEjWlqry%2BFVXFVODQyzfFvbSATHwufIXVYGG2liSDPFajFGjy%2Bk%2Bb%2BgjioB%2BXS1tIsejsXTquCK17jMUXL50JM2GgJnJMejrL4xMpESVV57dm8bZImRvQ4hVfmFcVis3YYJqYL6na3t8lcQFQgQl%2BIJhUci&X-Amz-Signature=d675cab7fc3da5d739d5ffa66b47e9229945f1cdd0d9ccc38186501bb9f9979e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOF2AUSU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCpBURK5s8hNtWaE8SAp57LIxKaL2hQ8nR%2Fl2cs1%2FhwrAIgRtSFf%2BMCXOjJjDlDVW8qvB0mhq61UBlRyH1KdJ%2FX%2B1oqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHKOA1C6sxqUFzrFircA038LfjFRtNCJNy9ziQNsJ5COuDyOM5FP5E9IKRNxpawDg2f2RzLIpNt%2B6ENhXC7KDzqg1Mz2TyWacQggm3PcHvZoC7khBPEBitf114s2CzM9oVTc4uBtr%2FYzpDV%2Bb9csMBrf%2B3MQ2lz9EYdeRkSjU90kzdjopbLnDA1ZHPyclWwGGFZ8m0VBg%2BU8HznXZL9M%2FEsp1X2kPLK%2FkVRcJHAjCpLVJzK0fp0TnTz0SDCm3Acc%2BM5UUEljfbQsHFtvn4gmzo9%2FbB1EBW4nMsTaqYvpyV7yITOlOQrSr973mj%2FgHdp07QHrLsyLyfTv6%2BPcde89MJnnw5C4o2wKPC5qMExRmJ%2BDfjIEdIgfSgC4alg3KNZ46gyZM0vuUV1qruGn8JAnoItKmrD7%2FAXqYqehcmG9g%2B4xfHHh4qp4KFQolKhLdtNVT9NmvBFILkqnyya7iYJcrN2noyIQvsdGVdBqw9z0io82%2BFpZFt%2FW4xYE0tX7UNDCo63GzpDObP33iImplPCnhqS3XIyLEjO9y4RsFyVf%2BCuf0CRspUzseyELK30VFCMeuDBUIbPteBoHd8oB2hbHc9lJ18q9OpMv7fn8CNiZJg8HQcWpNFUg7FnNzxT2NDAzwlR2b7Umlky%2BTGnMObH1sQGOqUBuQm4onbma4j5mqvdf1DfpecvjbFKKSdipT%2Fkl3rikWDIKT8W%2FYdPv3OO52k5a%2Fr9bUEjWlqry%2BFVXFVODQyzfFvbSATHwufIXVYGG2liSDPFajFGjy%2Bk%2Bb%2BgjioB%2BXS1tIsejsXTquCK17jMUXL50JM2GgJnJMejrL4xMpESVV57dm8bZImRvQ4hVfmFcVis3YYJqYL6na3t8lcQFQgQl%2BIJhUci&X-Amz-Signature=2ddc2477e7c71bd9251a5b3cd4e4799d7723bcecc26acbf67e392aabbf37a749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOF2AUSU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCpBURK5s8hNtWaE8SAp57LIxKaL2hQ8nR%2Fl2cs1%2FhwrAIgRtSFf%2BMCXOjJjDlDVW8qvB0mhq61UBlRyH1KdJ%2FX%2B1oqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHKOA1C6sxqUFzrFircA038LfjFRtNCJNy9ziQNsJ5COuDyOM5FP5E9IKRNxpawDg2f2RzLIpNt%2B6ENhXC7KDzqg1Mz2TyWacQggm3PcHvZoC7khBPEBitf114s2CzM9oVTc4uBtr%2FYzpDV%2Bb9csMBrf%2B3MQ2lz9EYdeRkSjU90kzdjopbLnDA1ZHPyclWwGGFZ8m0VBg%2BU8HznXZL9M%2FEsp1X2kPLK%2FkVRcJHAjCpLVJzK0fp0TnTz0SDCm3Acc%2BM5UUEljfbQsHFtvn4gmzo9%2FbB1EBW4nMsTaqYvpyV7yITOlOQrSr973mj%2FgHdp07QHrLsyLyfTv6%2BPcde89MJnnw5C4o2wKPC5qMExRmJ%2BDfjIEdIgfSgC4alg3KNZ46gyZM0vuUV1qruGn8JAnoItKmrD7%2FAXqYqehcmG9g%2B4xfHHh4qp4KFQolKhLdtNVT9NmvBFILkqnyya7iYJcrN2noyIQvsdGVdBqw9z0io82%2BFpZFt%2FW4xYE0tX7UNDCo63GzpDObP33iImplPCnhqS3XIyLEjO9y4RsFyVf%2BCuf0CRspUzseyELK30VFCMeuDBUIbPteBoHd8oB2hbHc9lJ18q9OpMv7fn8CNiZJg8HQcWpNFUg7FnNzxT2NDAzwlR2b7Umlky%2BTGnMObH1sQGOqUBuQm4onbma4j5mqvdf1DfpecvjbFKKSdipT%2Fkl3rikWDIKT8W%2FYdPv3OO52k5a%2Fr9bUEjWlqry%2BFVXFVODQyzfFvbSATHwufIXVYGG2liSDPFajFGjy%2Bk%2Bb%2BgjioB%2BXS1tIsejsXTquCK17jMUXL50JM2GgJnJMejrL4xMpESVV57dm8bZImRvQ4hVfmFcVis3YYJqYL6na3t8lcQFQgQl%2BIJhUci&X-Amz-Signature=4eefaa48b3c59364d90e05ae4fb84e3c0129db7aa08dcff5072111df9529d576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOF2AUSU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCpBURK5s8hNtWaE8SAp57LIxKaL2hQ8nR%2Fl2cs1%2FhwrAIgRtSFf%2BMCXOjJjDlDVW8qvB0mhq61UBlRyH1KdJ%2FX%2B1oqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHKOA1C6sxqUFzrFircA038LfjFRtNCJNy9ziQNsJ5COuDyOM5FP5E9IKRNxpawDg2f2RzLIpNt%2B6ENhXC7KDzqg1Mz2TyWacQggm3PcHvZoC7khBPEBitf114s2CzM9oVTc4uBtr%2FYzpDV%2Bb9csMBrf%2B3MQ2lz9EYdeRkSjU90kzdjopbLnDA1ZHPyclWwGGFZ8m0VBg%2BU8HznXZL9M%2FEsp1X2kPLK%2FkVRcJHAjCpLVJzK0fp0TnTz0SDCm3Acc%2BM5UUEljfbQsHFtvn4gmzo9%2FbB1EBW4nMsTaqYvpyV7yITOlOQrSr973mj%2FgHdp07QHrLsyLyfTv6%2BPcde89MJnnw5C4o2wKPC5qMExRmJ%2BDfjIEdIgfSgC4alg3KNZ46gyZM0vuUV1qruGn8JAnoItKmrD7%2FAXqYqehcmG9g%2B4xfHHh4qp4KFQolKhLdtNVT9NmvBFILkqnyya7iYJcrN2noyIQvsdGVdBqw9z0io82%2BFpZFt%2FW4xYE0tX7UNDCo63GzpDObP33iImplPCnhqS3XIyLEjO9y4RsFyVf%2BCuf0CRspUzseyELK30VFCMeuDBUIbPteBoHd8oB2hbHc9lJ18q9OpMv7fn8CNiZJg8HQcWpNFUg7FnNzxT2NDAzwlR2b7Umlky%2BTGnMObH1sQGOqUBuQm4onbma4j5mqvdf1DfpecvjbFKKSdipT%2Fkl3rikWDIKT8W%2FYdPv3OO52k5a%2Fr9bUEjWlqry%2BFVXFVODQyzfFvbSATHwufIXVYGG2liSDPFajFGjy%2Bk%2Bb%2BgjioB%2BXS1tIsejsXTquCK17jMUXL50JM2GgJnJMejrL4xMpESVV57dm8bZImRvQ4hVfmFcVis3YYJqYL6na3t8lcQFQgQl%2BIJhUci&X-Amz-Signature=ca15593cb1d221a4aa9ea04c88e8ac99dd2644d05358acc14b1bd4dfe0dd16f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOF2AUSU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCpBURK5s8hNtWaE8SAp57LIxKaL2hQ8nR%2Fl2cs1%2FhwrAIgRtSFf%2BMCXOjJjDlDVW8qvB0mhq61UBlRyH1KdJ%2FX%2B1oqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHKOA1C6sxqUFzrFircA038LfjFRtNCJNy9ziQNsJ5COuDyOM5FP5E9IKRNxpawDg2f2RzLIpNt%2B6ENhXC7KDzqg1Mz2TyWacQggm3PcHvZoC7khBPEBitf114s2CzM9oVTc4uBtr%2FYzpDV%2Bb9csMBrf%2B3MQ2lz9EYdeRkSjU90kzdjopbLnDA1ZHPyclWwGGFZ8m0VBg%2BU8HznXZL9M%2FEsp1X2kPLK%2FkVRcJHAjCpLVJzK0fp0TnTz0SDCm3Acc%2BM5UUEljfbQsHFtvn4gmzo9%2FbB1EBW4nMsTaqYvpyV7yITOlOQrSr973mj%2FgHdp07QHrLsyLyfTv6%2BPcde89MJnnw5C4o2wKPC5qMExRmJ%2BDfjIEdIgfSgC4alg3KNZ46gyZM0vuUV1qruGn8JAnoItKmrD7%2FAXqYqehcmG9g%2B4xfHHh4qp4KFQolKhLdtNVT9NmvBFILkqnyya7iYJcrN2noyIQvsdGVdBqw9z0io82%2BFpZFt%2FW4xYE0tX7UNDCo63GzpDObP33iImplPCnhqS3XIyLEjO9y4RsFyVf%2BCuf0CRspUzseyELK30VFCMeuDBUIbPteBoHd8oB2hbHc9lJ18q9OpMv7fn8CNiZJg8HQcWpNFUg7FnNzxT2NDAzwlR2b7Umlky%2BTGnMObH1sQGOqUBuQm4onbma4j5mqvdf1DfpecvjbFKKSdipT%2Fkl3rikWDIKT8W%2FYdPv3OO52k5a%2Fr9bUEjWlqry%2BFVXFVODQyzfFvbSATHwufIXVYGG2liSDPFajFGjy%2Bk%2Bb%2BgjioB%2BXS1tIsejsXTquCK17jMUXL50JM2GgJnJMejrL4xMpESVV57dm8bZImRvQ4hVfmFcVis3YYJqYL6na3t8lcQFQgQl%2BIJhUci&X-Amz-Signature=c1396f35805613594609a2c67f466704191b9728554dc4ceecd3d42ed622a387&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOF2AUSU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCpBURK5s8hNtWaE8SAp57LIxKaL2hQ8nR%2Fl2cs1%2FhwrAIgRtSFf%2BMCXOjJjDlDVW8qvB0mhq61UBlRyH1KdJ%2FX%2B1oqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHKOA1C6sxqUFzrFircA038LfjFRtNCJNy9ziQNsJ5COuDyOM5FP5E9IKRNxpawDg2f2RzLIpNt%2B6ENhXC7KDzqg1Mz2TyWacQggm3PcHvZoC7khBPEBitf114s2CzM9oVTc4uBtr%2FYzpDV%2Bb9csMBrf%2B3MQ2lz9EYdeRkSjU90kzdjopbLnDA1ZHPyclWwGGFZ8m0VBg%2BU8HznXZL9M%2FEsp1X2kPLK%2FkVRcJHAjCpLVJzK0fp0TnTz0SDCm3Acc%2BM5UUEljfbQsHFtvn4gmzo9%2FbB1EBW4nMsTaqYvpyV7yITOlOQrSr973mj%2FgHdp07QHrLsyLyfTv6%2BPcde89MJnnw5C4o2wKPC5qMExRmJ%2BDfjIEdIgfSgC4alg3KNZ46gyZM0vuUV1qruGn8JAnoItKmrD7%2FAXqYqehcmG9g%2B4xfHHh4qp4KFQolKhLdtNVT9NmvBFILkqnyya7iYJcrN2noyIQvsdGVdBqw9z0io82%2BFpZFt%2FW4xYE0tX7UNDCo63GzpDObP33iImplPCnhqS3XIyLEjO9y4RsFyVf%2BCuf0CRspUzseyELK30VFCMeuDBUIbPteBoHd8oB2hbHc9lJ18q9OpMv7fn8CNiZJg8HQcWpNFUg7FnNzxT2NDAzwlR2b7Umlky%2BTGnMObH1sQGOqUBuQm4onbma4j5mqvdf1DfpecvjbFKKSdipT%2Fkl3rikWDIKT8W%2FYdPv3OO52k5a%2Fr9bUEjWlqry%2BFVXFVODQyzfFvbSATHwufIXVYGG2liSDPFajFGjy%2Bk%2Bb%2BgjioB%2BXS1tIsejsXTquCK17jMUXL50JM2GgJnJMejrL4xMpESVV57dm8bZImRvQ4hVfmFcVis3YYJqYL6na3t8lcQFQgQl%2BIJhUci&X-Amz-Signature=ca66e529b746154ba1afeca21f6158c93d96eeb0b87c41cad55acf5dd6069030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOF2AUSU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCpBURK5s8hNtWaE8SAp57LIxKaL2hQ8nR%2Fl2cs1%2FhwrAIgRtSFf%2BMCXOjJjDlDVW8qvB0mhq61UBlRyH1KdJ%2FX%2B1oqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHKOA1C6sxqUFzrFircA038LfjFRtNCJNy9ziQNsJ5COuDyOM5FP5E9IKRNxpawDg2f2RzLIpNt%2B6ENhXC7KDzqg1Mz2TyWacQggm3PcHvZoC7khBPEBitf114s2CzM9oVTc4uBtr%2FYzpDV%2Bb9csMBrf%2B3MQ2lz9EYdeRkSjU90kzdjopbLnDA1ZHPyclWwGGFZ8m0VBg%2BU8HznXZL9M%2FEsp1X2kPLK%2FkVRcJHAjCpLVJzK0fp0TnTz0SDCm3Acc%2BM5UUEljfbQsHFtvn4gmzo9%2FbB1EBW4nMsTaqYvpyV7yITOlOQrSr973mj%2FgHdp07QHrLsyLyfTv6%2BPcde89MJnnw5C4o2wKPC5qMExRmJ%2BDfjIEdIgfSgC4alg3KNZ46gyZM0vuUV1qruGn8JAnoItKmrD7%2FAXqYqehcmG9g%2B4xfHHh4qp4KFQolKhLdtNVT9NmvBFILkqnyya7iYJcrN2noyIQvsdGVdBqw9z0io82%2BFpZFt%2FW4xYE0tX7UNDCo63GzpDObP33iImplPCnhqS3XIyLEjO9y4RsFyVf%2BCuf0CRspUzseyELK30VFCMeuDBUIbPteBoHd8oB2hbHc9lJ18q9OpMv7fn8CNiZJg8HQcWpNFUg7FnNzxT2NDAzwlR2b7Umlky%2BTGnMObH1sQGOqUBuQm4onbma4j5mqvdf1DfpecvjbFKKSdipT%2Fkl3rikWDIKT8W%2FYdPv3OO52k5a%2Fr9bUEjWlqry%2BFVXFVODQyzfFvbSATHwufIXVYGG2liSDPFajFGjy%2Bk%2Bb%2BgjioB%2BXS1tIsejsXTquCK17jMUXL50JM2GgJnJMejrL4xMpESVV57dm8bZImRvQ4hVfmFcVis3YYJqYL6na3t8lcQFQgQl%2BIJhUci&X-Amz-Signature=44088cf34e484901680e20ad1a8fc40e2277648e2c6485551cd532887c8b711a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOF2AUSU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCpBURK5s8hNtWaE8SAp57LIxKaL2hQ8nR%2Fl2cs1%2FhwrAIgRtSFf%2BMCXOjJjDlDVW8qvB0mhq61UBlRyH1KdJ%2FX%2B1oqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHKOA1C6sxqUFzrFircA038LfjFRtNCJNy9ziQNsJ5COuDyOM5FP5E9IKRNxpawDg2f2RzLIpNt%2B6ENhXC7KDzqg1Mz2TyWacQggm3PcHvZoC7khBPEBitf114s2CzM9oVTc4uBtr%2FYzpDV%2Bb9csMBrf%2B3MQ2lz9EYdeRkSjU90kzdjopbLnDA1ZHPyclWwGGFZ8m0VBg%2BU8HznXZL9M%2FEsp1X2kPLK%2FkVRcJHAjCpLVJzK0fp0TnTz0SDCm3Acc%2BM5UUEljfbQsHFtvn4gmzo9%2FbB1EBW4nMsTaqYvpyV7yITOlOQrSr973mj%2FgHdp07QHrLsyLyfTv6%2BPcde89MJnnw5C4o2wKPC5qMExRmJ%2BDfjIEdIgfSgC4alg3KNZ46gyZM0vuUV1qruGn8JAnoItKmrD7%2FAXqYqehcmG9g%2B4xfHHh4qp4KFQolKhLdtNVT9NmvBFILkqnyya7iYJcrN2noyIQvsdGVdBqw9z0io82%2BFpZFt%2FW4xYE0tX7UNDCo63GzpDObP33iImplPCnhqS3XIyLEjO9y4RsFyVf%2BCuf0CRspUzseyELK30VFCMeuDBUIbPteBoHd8oB2hbHc9lJ18q9OpMv7fn8CNiZJg8HQcWpNFUg7FnNzxT2NDAzwlR2b7Umlky%2BTGnMObH1sQGOqUBuQm4onbma4j5mqvdf1DfpecvjbFKKSdipT%2Fkl3rikWDIKT8W%2FYdPv3OO52k5a%2Fr9bUEjWlqry%2BFVXFVODQyzfFvbSATHwufIXVYGG2liSDPFajFGjy%2Bk%2Bb%2BgjioB%2BXS1tIsejsXTquCK17jMUXL50JM2GgJnJMejrL4xMpESVV57dm8bZImRvQ4hVfmFcVis3YYJqYL6na3t8lcQFQgQl%2BIJhUci&X-Amz-Signature=a814c802482d39c263df9e640ceb0abe5461290ebf845462680b3c8351059f70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOF2AUSU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCpBURK5s8hNtWaE8SAp57LIxKaL2hQ8nR%2Fl2cs1%2FhwrAIgRtSFf%2BMCXOjJjDlDVW8qvB0mhq61UBlRyH1KdJ%2FX%2B1oqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHKOA1C6sxqUFzrFircA038LfjFRtNCJNy9ziQNsJ5COuDyOM5FP5E9IKRNxpawDg2f2RzLIpNt%2B6ENhXC7KDzqg1Mz2TyWacQggm3PcHvZoC7khBPEBitf114s2CzM9oVTc4uBtr%2FYzpDV%2Bb9csMBrf%2B3MQ2lz9EYdeRkSjU90kzdjopbLnDA1ZHPyclWwGGFZ8m0VBg%2BU8HznXZL9M%2FEsp1X2kPLK%2FkVRcJHAjCpLVJzK0fp0TnTz0SDCm3Acc%2BM5UUEljfbQsHFtvn4gmzo9%2FbB1EBW4nMsTaqYvpyV7yITOlOQrSr973mj%2FgHdp07QHrLsyLyfTv6%2BPcde89MJnnw5C4o2wKPC5qMExRmJ%2BDfjIEdIgfSgC4alg3KNZ46gyZM0vuUV1qruGn8JAnoItKmrD7%2FAXqYqehcmG9g%2B4xfHHh4qp4KFQolKhLdtNVT9NmvBFILkqnyya7iYJcrN2noyIQvsdGVdBqw9z0io82%2BFpZFt%2FW4xYE0tX7UNDCo63GzpDObP33iImplPCnhqS3XIyLEjO9y4RsFyVf%2BCuf0CRspUzseyELK30VFCMeuDBUIbPteBoHd8oB2hbHc9lJ18q9OpMv7fn8CNiZJg8HQcWpNFUg7FnNzxT2NDAzwlR2b7Umlky%2BTGnMObH1sQGOqUBuQm4onbma4j5mqvdf1DfpecvjbFKKSdipT%2Fkl3rikWDIKT8W%2FYdPv3OO52k5a%2Fr9bUEjWlqry%2BFVXFVODQyzfFvbSATHwufIXVYGG2liSDPFajFGjy%2Bk%2Bb%2BgjioB%2BXS1tIsejsXTquCK17jMUXL50JM2GgJnJMejrL4xMpESVV57dm8bZImRvQ4hVfmFcVis3YYJqYL6na3t8lcQFQgQl%2BIJhUci&X-Amz-Signature=879800f35bc1ceb1dfb5fca1fbb27a087cf76183d248b88278a1448fb9d844f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
