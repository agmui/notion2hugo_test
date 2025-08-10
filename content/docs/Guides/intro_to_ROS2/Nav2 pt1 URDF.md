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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FE6YNFH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH9YeiVyt0uSm7v5Aza8icUuYSHtvv7eD8YylKIqkETwIgYW9%2BRYDw%2BUM9y%2B2bGD3kZ5%2Fp90BsBzkrx4RwWcWwtOUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG2zzQRGPjU%2FACl1yrcAw1yQ2EJ5XhtrATCDguJ9UfpmeotQLBJcXKXz26mFu5yNjgb2x1jHvC%2F%2FDQbCb6%2FMmXsrIir2Ok4HMyIXhGQ0aRuMaqwbYpIZYJrOjfATh8SKNlied0vAVGYGFNYRMoHhiWyasQ19m4uq7ek%2BtUTNtwAO0ZsGm4iJ2BG6BQseZ0EmxA%2BqJJ%2Bt9U%2BDPL%2BEao4Uj5Elnu8JjhKMo2neSEUaXUVdUf9AQ3hvtUKkcMX9nTp81fIHQNAU63MAFMrDDFOY5B%2F4%2FEXrwekShVKYlBaJhJxTeGwwh5%2F439v3mcayJWNBD%2F%2B1vWor%2FUERN8d7L%2FwE315ZNEihwnwmpXRo8iwKKIyUw3k7pQZUKpcz3q3yGOQVyN31Y2xNQ%2BEjyslzG%2FnwGBkz8mUE4SIfFmhcc%2Bw3bSqOQ0yTQlezonHP%2FbXYRNegfmILVeS8mPapAOOhCbQA8WIUys4YKm0wMVomVyriRcK9jkfh1uidOE2hLzZRJuiDT9X5N2sLGFABYHarv1kJ%2FSf9x3dGsqIhEeGkfi8xWgtVzAYW%2BZDil1ohJYqQT%2BCb3m9JzoJvYYCYTjTpURr7GxJ14OrB1w5jRKaOe4dxXVva48hg5EOpK6DfcqopZ41%2FhzFxy70f5ib%2BiJ3MPu%2B4sQGOqUBcF2HJPyHEiGH%2FtRH5oL7fE6ew%2FSKXugecyNkYZFA2sIO2s%2BLD1C73VE0SfX3hXPvQv638M5h0vk5L6SEPciligSj2l9IQLD%2FTjRpqoYsJncwchXJpcEOCbxZ74EIpMfA1jNwLvekQNrHdK%2FStSpRph1lzv54TUo46QOuYE7DgBdlh%2FWMw2gsBx9ACEDz%2Bi2oTrNaVjLmQ8%2BinOLcWuOrbLrmdYBz&X-Amz-Signature=d9e2fe37578a14df473d046fbdc2842895d72d8439e6a2588488ee95b9beffbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FE6YNFH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH9YeiVyt0uSm7v5Aza8icUuYSHtvv7eD8YylKIqkETwIgYW9%2BRYDw%2BUM9y%2B2bGD3kZ5%2Fp90BsBzkrx4RwWcWwtOUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG2zzQRGPjU%2FACl1yrcAw1yQ2EJ5XhtrATCDguJ9UfpmeotQLBJcXKXz26mFu5yNjgb2x1jHvC%2F%2FDQbCb6%2FMmXsrIir2Ok4HMyIXhGQ0aRuMaqwbYpIZYJrOjfATh8SKNlied0vAVGYGFNYRMoHhiWyasQ19m4uq7ek%2BtUTNtwAO0ZsGm4iJ2BG6BQseZ0EmxA%2BqJJ%2Bt9U%2BDPL%2BEao4Uj5Elnu8JjhKMo2neSEUaXUVdUf9AQ3hvtUKkcMX9nTp81fIHQNAU63MAFMrDDFOY5B%2F4%2FEXrwekShVKYlBaJhJxTeGwwh5%2F439v3mcayJWNBD%2F%2B1vWor%2FUERN8d7L%2FwE315ZNEihwnwmpXRo8iwKKIyUw3k7pQZUKpcz3q3yGOQVyN31Y2xNQ%2BEjyslzG%2FnwGBkz8mUE4SIfFmhcc%2Bw3bSqOQ0yTQlezonHP%2FbXYRNegfmILVeS8mPapAOOhCbQA8WIUys4YKm0wMVomVyriRcK9jkfh1uidOE2hLzZRJuiDT9X5N2sLGFABYHarv1kJ%2FSf9x3dGsqIhEeGkfi8xWgtVzAYW%2BZDil1ohJYqQT%2BCb3m9JzoJvYYCYTjTpURr7GxJ14OrB1w5jRKaOe4dxXVva48hg5EOpK6DfcqopZ41%2FhzFxy70f5ib%2BiJ3MPu%2B4sQGOqUBcF2HJPyHEiGH%2FtRH5oL7fE6ew%2FSKXugecyNkYZFA2sIO2s%2BLD1C73VE0SfX3hXPvQv638M5h0vk5L6SEPciligSj2l9IQLD%2FTjRpqoYsJncwchXJpcEOCbxZ74EIpMfA1jNwLvekQNrHdK%2FStSpRph1lzv54TUo46QOuYE7DgBdlh%2FWMw2gsBx9ACEDz%2Bi2oTrNaVjLmQ8%2BinOLcWuOrbLrmdYBz&X-Amz-Signature=432535469abda33514c082ae558b757aaa378d14277ba3fe3d822df560bc455d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FE6YNFH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH9YeiVyt0uSm7v5Aza8icUuYSHtvv7eD8YylKIqkETwIgYW9%2BRYDw%2BUM9y%2B2bGD3kZ5%2Fp90BsBzkrx4RwWcWwtOUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG2zzQRGPjU%2FACl1yrcAw1yQ2EJ5XhtrATCDguJ9UfpmeotQLBJcXKXz26mFu5yNjgb2x1jHvC%2F%2FDQbCb6%2FMmXsrIir2Ok4HMyIXhGQ0aRuMaqwbYpIZYJrOjfATh8SKNlied0vAVGYGFNYRMoHhiWyasQ19m4uq7ek%2BtUTNtwAO0ZsGm4iJ2BG6BQseZ0EmxA%2BqJJ%2Bt9U%2BDPL%2BEao4Uj5Elnu8JjhKMo2neSEUaXUVdUf9AQ3hvtUKkcMX9nTp81fIHQNAU63MAFMrDDFOY5B%2F4%2FEXrwekShVKYlBaJhJxTeGwwh5%2F439v3mcayJWNBD%2F%2B1vWor%2FUERN8d7L%2FwE315ZNEihwnwmpXRo8iwKKIyUw3k7pQZUKpcz3q3yGOQVyN31Y2xNQ%2BEjyslzG%2FnwGBkz8mUE4SIfFmhcc%2Bw3bSqOQ0yTQlezonHP%2FbXYRNegfmILVeS8mPapAOOhCbQA8WIUys4YKm0wMVomVyriRcK9jkfh1uidOE2hLzZRJuiDT9X5N2sLGFABYHarv1kJ%2FSf9x3dGsqIhEeGkfi8xWgtVzAYW%2BZDil1ohJYqQT%2BCb3m9JzoJvYYCYTjTpURr7GxJ14OrB1w5jRKaOe4dxXVva48hg5EOpK6DfcqopZ41%2FhzFxy70f5ib%2BiJ3MPu%2B4sQGOqUBcF2HJPyHEiGH%2FtRH5oL7fE6ew%2FSKXugecyNkYZFA2sIO2s%2BLD1C73VE0SfX3hXPvQv638M5h0vk5L6SEPciligSj2l9IQLD%2FTjRpqoYsJncwchXJpcEOCbxZ74EIpMfA1jNwLvekQNrHdK%2FStSpRph1lzv54TUo46QOuYE7DgBdlh%2FWMw2gsBx9ACEDz%2Bi2oTrNaVjLmQ8%2BinOLcWuOrbLrmdYBz&X-Amz-Signature=4d28a85b776e8bcf96fb8b485480a440c53c6288e4905041541fd06fd7466be5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FE6YNFH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH9YeiVyt0uSm7v5Aza8icUuYSHtvv7eD8YylKIqkETwIgYW9%2BRYDw%2BUM9y%2B2bGD3kZ5%2Fp90BsBzkrx4RwWcWwtOUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG2zzQRGPjU%2FACl1yrcAw1yQ2EJ5XhtrATCDguJ9UfpmeotQLBJcXKXz26mFu5yNjgb2x1jHvC%2F%2FDQbCb6%2FMmXsrIir2Ok4HMyIXhGQ0aRuMaqwbYpIZYJrOjfATh8SKNlied0vAVGYGFNYRMoHhiWyasQ19m4uq7ek%2BtUTNtwAO0ZsGm4iJ2BG6BQseZ0EmxA%2BqJJ%2Bt9U%2BDPL%2BEao4Uj5Elnu8JjhKMo2neSEUaXUVdUf9AQ3hvtUKkcMX9nTp81fIHQNAU63MAFMrDDFOY5B%2F4%2FEXrwekShVKYlBaJhJxTeGwwh5%2F439v3mcayJWNBD%2F%2B1vWor%2FUERN8d7L%2FwE315ZNEihwnwmpXRo8iwKKIyUw3k7pQZUKpcz3q3yGOQVyN31Y2xNQ%2BEjyslzG%2FnwGBkz8mUE4SIfFmhcc%2Bw3bSqOQ0yTQlezonHP%2FbXYRNegfmILVeS8mPapAOOhCbQA8WIUys4YKm0wMVomVyriRcK9jkfh1uidOE2hLzZRJuiDT9X5N2sLGFABYHarv1kJ%2FSf9x3dGsqIhEeGkfi8xWgtVzAYW%2BZDil1ohJYqQT%2BCb3m9JzoJvYYCYTjTpURr7GxJ14OrB1w5jRKaOe4dxXVva48hg5EOpK6DfcqopZ41%2FhzFxy70f5ib%2BiJ3MPu%2B4sQGOqUBcF2HJPyHEiGH%2FtRH5oL7fE6ew%2FSKXugecyNkYZFA2sIO2s%2BLD1C73VE0SfX3hXPvQv638M5h0vk5L6SEPciligSj2l9IQLD%2FTjRpqoYsJncwchXJpcEOCbxZ74EIpMfA1jNwLvekQNrHdK%2FStSpRph1lzv54TUo46QOuYE7DgBdlh%2FWMw2gsBx9ACEDz%2Bi2oTrNaVjLmQ8%2BinOLcWuOrbLrmdYBz&X-Amz-Signature=e98015be3af82b9c297f9f3e60fcd36cccb0a67b3c4cdd4d6f02075b1a581f93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FE6YNFH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH9YeiVyt0uSm7v5Aza8icUuYSHtvv7eD8YylKIqkETwIgYW9%2BRYDw%2BUM9y%2B2bGD3kZ5%2Fp90BsBzkrx4RwWcWwtOUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG2zzQRGPjU%2FACl1yrcAw1yQ2EJ5XhtrATCDguJ9UfpmeotQLBJcXKXz26mFu5yNjgb2x1jHvC%2F%2FDQbCb6%2FMmXsrIir2Ok4HMyIXhGQ0aRuMaqwbYpIZYJrOjfATh8SKNlied0vAVGYGFNYRMoHhiWyasQ19m4uq7ek%2BtUTNtwAO0ZsGm4iJ2BG6BQseZ0EmxA%2BqJJ%2Bt9U%2BDPL%2BEao4Uj5Elnu8JjhKMo2neSEUaXUVdUf9AQ3hvtUKkcMX9nTp81fIHQNAU63MAFMrDDFOY5B%2F4%2FEXrwekShVKYlBaJhJxTeGwwh5%2F439v3mcayJWNBD%2F%2B1vWor%2FUERN8d7L%2FwE315ZNEihwnwmpXRo8iwKKIyUw3k7pQZUKpcz3q3yGOQVyN31Y2xNQ%2BEjyslzG%2FnwGBkz8mUE4SIfFmhcc%2Bw3bSqOQ0yTQlezonHP%2FbXYRNegfmILVeS8mPapAOOhCbQA8WIUys4YKm0wMVomVyriRcK9jkfh1uidOE2hLzZRJuiDT9X5N2sLGFABYHarv1kJ%2FSf9x3dGsqIhEeGkfi8xWgtVzAYW%2BZDil1ohJYqQT%2BCb3m9JzoJvYYCYTjTpURr7GxJ14OrB1w5jRKaOe4dxXVva48hg5EOpK6DfcqopZ41%2FhzFxy70f5ib%2BiJ3MPu%2B4sQGOqUBcF2HJPyHEiGH%2FtRH5oL7fE6ew%2FSKXugecyNkYZFA2sIO2s%2BLD1C73VE0SfX3hXPvQv638M5h0vk5L6SEPciligSj2l9IQLD%2FTjRpqoYsJncwchXJpcEOCbxZ74EIpMfA1jNwLvekQNrHdK%2FStSpRph1lzv54TUo46QOuYE7DgBdlh%2FWMw2gsBx9ACEDz%2Bi2oTrNaVjLmQ8%2BinOLcWuOrbLrmdYBz&X-Amz-Signature=e22b77af3fd628097d201b9585609068f5a109621a223aae2667c809b7cfe98c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FE6YNFH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH9YeiVyt0uSm7v5Aza8icUuYSHtvv7eD8YylKIqkETwIgYW9%2BRYDw%2BUM9y%2B2bGD3kZ5%2Fp90BsBzkrx4RwWcWwtOUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG2zzQRGPjU%2FACl1yrcAw1yQ2EJ5XhtrATCDguJ9UfpmeotQLBJcXKXz26mFu5yNjgb2x1jHvC%2F%2FDQbCb6%2FMmXsrIir2Ok4HMyIXhGQ0aRuMaqwbYpIZYJrOjfATh8SKNlied0vAVGYGFNYRMoHhiWyasQ19m4uq7ek%2BtUTNtwAO0ZsGm4iJ2BG6BQseZ0EmxA%2BqJJ%2Bt9U%2BDPL%2BEao4Uj5Elnu8JjhKMo2neSEUaXUVdUf9AQ3hvtUKkcMX9nTp81fIHQNAU63MAFMrDDFOY5B%2F4%2FEXrwekShVKYlBaJhJxTeGwwh5%2F439v3mcayJWNBD%2F%2B1vWor%2FUERN8d7L%2FwE315ZNEihwnwmpXRo8iwKKIyUw3k7pQZUKpcz3q3yGOQVyN31Y2xNQ%2BEjyslzG%2FnwGBkz8mUE4SIfFmhcc%2Bw3bSqOQ0yTQlezonHP%2FbXYRNegfmILVeS8mPapAOOhCbQA8WIUys4YKm0wMVomVyriRcK9jkfh1uidOE2hLzZRJuiDT9X5N2sLGFABYHarv1kJ%2FSf9x3dGsqIhEeGkfi8xWgtVzAYW%2BZDil1ohJYqQT%2BCb3m9JzoJvYYCYTjTpURr7GxJ14OrB1w5jRKaOe4dxXVva48hg5EOpK6DfcqopZ41%2FhzFxy70f5ib%2BiJ3MPu%2B4sQGOqUBcF2HJPyHEiGH%2FtRH5oL7fE6ew%2FSKXugecyNkYZFA2sIO2s%2BLD1C73VE0SfX3hXPvQv638M5h0vk5L6SEPciligSj2l9IQLD%2FTjRpqoYsJncwchXJpcEOCbxZ74EIpMfA1jNwLvekQNrHdK%2FStSpRph1lzv54TUo46QOuYE7DgBdlh%2FWMw2gsBx9ACEDz%2Bi2oTrNaVjLmQ8%2BinOLcWuOrbLrmdYBz&X-Amz-Signature=28fb1c05c96131b9fc8814c05f63dabff03b8fa8cfd8f3d73448f51f069a6b41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FE6YNFH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH9YeiVyt0uSm7v5Aza8icUuYSHtvv7eD8YylKIqkETwIgYW9%2BRYDw%2BUM9y%2B2bGD3kZ5%2Fp90BsBzkrx4RwWcWwtOUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG2zzQRGPjU%2FACl1yrcAw1yQ2EJ5XhtrATCDguJ9UfpmeotQLBJcXKXz26mFu5yNjgb2x1jHvC%2F%2FDQbCb6%2FMmXsrIir2Ok4HMyIXhGQ0aRuMaqwbYpIZYJrOjfATh8SKNlied0vAVGYGFNYRMoHhiWyasQ19m4uq7ek%2BtUTNtwAO0ZsGm4iJ2BG6BQseZ0EmxA%2BqJJ%2Bt9U%2BDPL%2BEao4Uj5Elnu8JjhKMo2neSEUaXUVdUf9AQ3hvtUKkcMX9nTp81fIHQNAU63MAFMrDDFOY5B%2F4%2FEXrwekShVKYlBaJhJxTeGwwh5%2F439v3mcayJWNBD%2F%2B1vWor%2FUERN8d7L%2FwE315ZNEihwnwmpXRo8iwKKIyUw3k7pQZUKpcz3q3yGOQVyN31Y2xNQ%2BEjyslzG%2FnwGBkz8mUE4SIfFmhcc%2Bw3bSqOQ0yTQlezonHP%2FbXYRNegfmILVeS8mPapAOOhCbQA8WIUys4YKm0wMVomVyriRcK9jkfh1uidOE2hLzZRJuiDT9X5N2sLGFABYHarv1kJ%2FSf9x3dGsqIhEeGkfi8xWgtVzAYW%2BZDil1ohJYqQT%2BCb3m9JzoJvYYCYTjTpURr7GxJ14OrB1w5jRKaOe4dxXVva48hg5EOpK6DfcqopZ41%2FhzFxy70f5ib%2BiJ3MPu%2B4sQGOqUBcF2HJPyHEiGH%2FtRH5oL7fE6ew%2FSKXugecyNkYZFA2sIO2s%2BLD1C73VE0SfX3hXPvQv638M5h0vk5L6SEPciligSj2l9IQLD%2FTjRpqoYsJncwchXJpcEOCbxZ74EIpMfA1jNwLvekQNrHdK%2FStSpRph1lzv54TUo46QOuYE7DgBdlh%2FWMw2gsBx9ACEDz%2Bi2oTrNaVjLmQ8%2BinOLcWuOrbLrmdYBz&X-Amz-Signature=f51d54fe3f1d8ae11dd710610e137fe18e88865c83c23f1e120673b4400286eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FE6YNFH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH9YeiVyt0uSm7v5Aza8icUuYSHtvv7eD8YylKIqkETwIgYW9%2BRYDw%2BUM9y%2B2bGD3kZ5%2Fp90BsBzkrx4RwWcWwtOUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG2zzQRGPjU%2FACl1yrcAw1yQ2EJ5XhtrATCDguJ9UfpmeotQLBJcXKXz26mFu5yNjgb2x1jHvC%2F%2FDQbCb6%2FMmXsrIir2Ok4HMyIXhGQ0aRuMaqwbYpIZYJrOjfATh8SKNlied0vAVGYGFNYRMoHhiWyasQ19m4uq7ek%2BtUTNtwAO0ZsGm4iJ2BG6BQseZ0EmxA%2BqJJ%2Bt9U%2BDPL%2BEao4Uj5Elnu8JjhKMo2neSEUaXUVdUf9AQ3hvtUKkcMX9nTp81fIHQNAU63MAFMrDDFOY5B%2F4%2FEXrwekShVKYlBaJhJxTeGwwh5%2F439v3mcayJWNBD%2F%2B1vWor%2FUERN8d7L%2FwE315ZNEihwnwmpXRo8iwKKIyUw3k7pQZUKpcz3q3yGOQVyN31Y2xNQ%2BEjyslzG%2FnwGBkz8mUE4SIfFmhcc%2Bw3bSqOQ0yTQlezonHP%2FbXYRNegfmILVeS8mPapAOOhCbQA8WIUys4YKm0wMVomVyriRcK9jkfh1uidOE2hLzZRJuiDT9X5N2sLGFABYHarv1kJ%2FSf9x3dGsqIhEeGkfi8xWgtVzAYW%2BZDil1ohJYqQT%2BCb3m9JzoJvYYCYTjTpURr7GxJ14OrB1w5jRKaOe4dxXVva48hg5EOpK6DfcqopZ41%2FhzFxy70f5ib%2BiJ3MPu%2B4sQGOqUBcF2HJPyHEiGH%2FtRH5oL7fE6ew%2FSKXugecyNkYZFA2sIO2s%2BLD1C73VE0SfX3hXPvQv638M5h0vk5L6SEPciligSj2l9IQLD%2FTjRpqoYsJncwchXJpcEOCbxZ74EIpMfA1jNwLvekQNrHdK%2FStSpRph1lzv54TUo46QOuYE7DgBdlh%2FWMw2gsBx9ACEDz%2Bi2oTrNaVjLmQ8%2BinOLcWuOrbLrmdYBz&X-Amz-Signature=db23422831d578e6b9a97a7da3e9a77e4d18f5780032881de4c624a2f59ac7a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FE6YNFH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH9YeiVyt0uSm7v5Aza8icUuYSHtvv7eD8YylKIqkETwIgYW9%2BRYDw%2BUM9y%2B2bGD3kZ5%2Fp90BsBzkrx4RwWcWwtOUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG2zzQRGPjU%2FACl1yrcAw1yQ2EJ5XhtrATCDguJ9UfpmeotQLBJcXKXz26mFu5yNjgb2x1jHvC%2F%2FDQbCb6%2FMmXsrIir2Ok4HMyIXhGQ0aRuMaqwbYpIZYJrOjfATh8SKNlied0vAVGYGFNYRMoHhiWyasQ19m4uq7ek%2BtUTNtwAO0ZsGm4iJ2BG6BQseZ0EmxA%2BqJJ%2Bt9U%2BDPL%2BEao4Uj5Elnu8JjhKMo2neSEUaXUVdUf9AQ3hvtUKkcMX9nTp81fIHQNAU63MAFMrDDFOY5B%2F4%2FEXrwekShVKYlBaJhJxTeGwwh5%2F439v3mcayJWNBD%2F%2B1vWor%2FUERN8d7L%2FwE315ZNEihwnwmpXRo8iwKKIyUw3k7pQZUKpcz3q3yGOQVyN31Y2xNQ%2BEjyslzG%2FnwGBkz8mUE4SIfFmhcc%2Bw3bSqOQ0yTQlezonHP%2FbXYRNegfmILVeS8mPapAOOhCbQA8WIUys4YKm0wMVomVyriRcK9jkfh1uidOE2hLzZRJuiDT9X5N2sLGFABYHarv1kJ%2FSf9x3dGsqIhEeGkfi8xWgtVzAYW%2BZDil1ohJYqQT%2BCb3m9JzoJvYYCYTjTpURr7GxJ14OrB1w5jRKaOe4dxXVva48hg5EOpK6DfcqopZ41%2FhzFxy70f5ib%2BiJ3MPu%2B4sQGOqUBcF2HJPyHEiGH%2FtRH5oL7fE6ew%2FSKXugecyNkYZFA2sIO2s%2BLD1C73VE0SfX3hXPvQv638M5h0vk5L6SEPciligSj2l9IQLD%2FTjRpqoYsJncwchXJpcEOCbxZ74EIpMfA1jNwLvekQNrHdK%2FStSpRph1lzv54TUo46QOuYE7DgBdlh%2FWMw2gsBx9ACEDz%2Bi2oTrNaVjLmQ8%2BinOLcWuOrbLrmdYBz&X-Amz-Signature=79013d7a244c582344f1fd36fd08a43de83ebe373452a64906ee40f431b6dafc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FE6YNFH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH9YeiVyt0uSm7v5Aza8icUuYSHtvv7eD8YylKIqkETwIgYW9%2BRYDw%2BUM9y%2B2bGD3kZ5%2Fp90BsBzkrx4RwWcWwtOUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG2zzQRGPjU%2FACl1yrcAw1yQ2EJ5XhtrATCDguJ9UfpmeotQLBJcXKXz26mFu5yNjgb2x1jHvC%2F%2FDQbCb6%2FMmXsrIir2Ok4HMyIXhGQ0aRuMaqwbYpIZYJrOjfATh8SKNlied0vAVGYGFNYRMoHhiWyasQ19m4uq7ek%2BtUTNtwAO0ZsGm4iJ2BG6BQseZ0EmxA%2BqJJ%2Bt9U%2BDPL%2BEao4Uj5Elnu8JjhKMo2neSEUaXUVdUf9AQ3hvtUKkcMX9nTp81fIHQNAU63MAFMrDDFOY5B%2F4%2FEXrwekShVKYlBaJhJxTeGwwh5%2F439v3mcayJWNBD%2F%2B1vWor%2FUERN8d7L%2FwE315ZNEihwnwmpXRo8iwKKIyUw3k7pQZUKpcz3q3yGOQVyN31Y2xNQ%2BEjyslzG%2FnwGBkz8mUE4SIfFmhcc%2Bw3bSqOQ0yTQlezonHP%2FbXYRNegfmILVeS8mPapAOOhCbQA8WIUys4YKm0wMVomVyriRcK9jkfh1uidOE2hLzZRJuiDT9X5N2sLGFABYHarv1kJ%2FSf9x3dGsqIhEeGkfi8xWgtVzAYW%2BZDil1ohJYqQT%2BCb3m9JzoJvYYCYTjTpURr7GxJ14OrB1w5jRKaOe4dxXVva48hg5EOpK6DfcqopZ41%2FhzFxy70f5ib%2BiJ3MPu%2B4sQGOqUBcF2HJPyHEiGH%2FtRH5oL7fE6ew%2FSKXugecyNkYZFA2sIO2s%2BLD1C73VE0SfX3hXPvQv638M5h0vk5L6SEPciligSj2l9IQLD%2FTjRpqoYsJncwchXJpcEOCbxZ74EIpMfA1jNwLvekQNrHdK%2FStSpRph1lzv54TUo46QOuYE7DgBdlh%2FWMw2gsBx9ACEDz%2Bi2oTrNaVjLmQ8%2BinOLcWuOrbLrmdYBz&X-Amz-Signature=e62ceff0c937d4643b722c965c4a9f06330ca4870dc19ef90f44184de9874ee4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XJAG47B%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEL8uIh7l%2FhhDeCBO89TrWaSZyepThcw3DWc%2Br4AS9tPAiEA7NQvKNpf3rBQjlQqBrumWyj0KU4tNxg726ltf8ni2MIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI17KYYtQ6df%2FgD4VyrcA%2FhtNa1Sz44xCI7ZfQBxH4tnFrdi2De9JCKBjr2FdwF%2Fk7lcm1TErK6rhGoLqtSuEhMYuN6JcptTo%2Fjx4385bDazvtWCC7IsTQGTNMKQ2kXzgzWuE5IDE3QF5TVxVCSJBKaIh%2B3wo%2BNgPH27SrlDVq9nb5Bu4rhRuHiJt8fnE6bmkNAF9mt9wQ36NjBwyAndToQ8HD1zSERyRSR7bjKcNhVp%2BeLXSSCJTrA%2BF%2BpEPgYjULDLfjupkQYRj5acEhmSAxFA6wNEGGH%2BjPeWfZ%2FlDhavLrbrwdL8QE6zyura5ARIAxUZEpHWlEpWfC%2FvKFhLvJrFNiITguF23fEoLCJ5lIKe5DHzMxNjHDuFCp%2F3ZRmybbkKxUnqEa9h8PW%2FlDp4Q8n%2FIydCsalrD6PgjGVivo9TUBHH5rxUt8lcjhzPt53EkgVzWm5vg3A5kWPVQooavPjON6ZDo2d8XuFokEUgs8OGzjWem0%2Fml03wRRYYKYnTy2dRG0S%2Bi2nus6CanOG50lnUUxNYDBXEqoBRR4vN%2BTxesyaJHEswyHz9HrC1RJgrwuj8cDwu8OFefyY3JLixnAVYE3Vbk7cyk1Go1Lp6rz4uf%2B%2BXX2P4mwWXEpD29uS6vyNPqmqbqnpDYqZTMIW%2F4sQGOqUBqzNbqeAzXSLDrcBVhEeHKmlCf7fX6n15qOdy0cCZh3TRtQPYc%2BuWA1ooUuQDhwzSrBi78SOU7cnXi%2FzLqkAoT9lGcNn%2Fq%2B9%2FpVn4dcNFX5uk%2FbmTm7dLRSpYF7BwDF9YXQ4ADb%2BEOXyl8o09m%2FClTEVpLpPDDB%2F0yCpIO0oi7DXc%2F9qpjuq6CTUHceKMRFa0ORDZOaMZ2RzKiBOrqOrnhaVaKSZH&X-Amz-Signature=2d12c1ccbe9c64c5d7c799217e6a410ae54b98d5ec1c7fbcaaf20f80cf8b3961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H5ZJ5JS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu8B1HMan6yn66x93hxhBCZlY7wjIMV6Zfdyg81oBagQIgFuxCRfvqc5P5Q3qNakLhLcA0wua7V7LwmJrUDP0HBlkqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTDcaA3lVPIEQf2WCrcAyV5%2BHIZIOcNM6lMg%2FBhEW6PeF5BBXWb0XgTSFVM7mGqOiqOpprtqkEmK9xXuMZkCqJqko7B2otZek8Mab%2FZRPgzb610RKQcVmb1ec9Z8uAnoA9bgTpYD5w11%2FxxxvbHE16o%2FQiXE%2Bwp8FrHR1T2JXsu5oyAmatILbxdaVGOir2WhDo5TyCSF35nu0KfSgbsOTjo1Tctyk24QUvGoPwXGnUl1k26By1%2F5ty5C3Lett6%2BHSznTdE0uR2jyKf5rCQGWIDOAiRXQeFiTEtr3aa7sBZCmw1ECTfOn5NvFZJq6ObdnHP4O4TdlNb721KKL%2B68b8OgHN20v0dfqtt2iuJw%2BY4bvOCZ%2BMyhGsfqWmqmC0bWSQl0TJL1KBIfSUC3Vad7D%2FGsANeR4UiNJzATc6cj%2BgFZfVI04kgPo6397fB896YYZO8QbArnotJ2SHHIHcSs9k2RTGvEABH8SPO6SoWsW5XXzddBjoSQnKpNbJFxIvGllfoZaAz4M%2BEilIMMJzPMdKeS2KPun0xEUOOdRZ9%2BJ6I%2FN2Qd%2BMBQ5SG7lXFy8jM6NObeB0sH8d1WJVzQ0J4SgpCIxFK1y4wCt8ljug1CWWbCDusUbluBG1ZtOghjMjp35ztJ6Bce2cyetF0DMKW%2F4sQGOqUB%2F9N8oEi97kqnyvP5x7niw8yKBkBE92se%2FTz41yCKXsPzOf8TBQp8Tz3k0YTDEudw5g7JwAYTwMH9GUiYH1%2BArjJQxNofk%2BE28hV0V1MwaOH4hRGuhmd0XP7Qdyp%2B8q1jYuhmye2kK8UnoeQcHNeiyiicCfVLOIzElfWqV2iYzkgl12QRfIVt4JTmk%2BbcRsbHp7iUbg%2FFrnVQj4ayCFLTYOGHxHYh&X-Amz-Signature=e16170f19684f3ef825806015d498fc0d4fb54073dd3ccc963244d6d78e7b0a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIT7BSE4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6MeEMP00LTjSBLMJwMwpaxZMVEnXghdw%2FU1X9EUWMrwIgUvENXD%2FGHEyG2MJdMQGZDISeBZo%2FRA8j5l4FYzhAF0kqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFI2ly%2F7VwQhFX7myrcA%2FiAYTGBCKV9EMOqE3cSZCM%2B4%2Bi%2FimZNqqHIY4P3jzL1tFm4KYBMhpe6%2FG0hByzU%2BiE4tehNpcuVMpnhxKBsrLqTwbu2UnGGVjvE2iiMt40JqJUvh3TJ2pgD4Wb8kO3HW1BncqMs04mxyrSXK5SEeJQ%2BGiUNk3fqM%2F%2FwpzkkRi60%2ByMiMOe3q1JINYpN6ArBEkMrXduRhNGYA4xFNabjG%2FgbHLLFerTjP35aLk7MUynoE%2BLkpXrqdUsFZRiWU6xaGKnqQQELrKYXFd9iRHQsk10OtQIzoxlh76Ba%2BQOhwMf26WJrIhimiHa1MZogtKF2tlTFIJYtsN3BWYaZnwZAZG8U02sgaB5k6asWdj5VfxR%2FaU4goqSUPVLWb79u08hen4nFRiL4XxTXav08slic0wWZBAnexBv83IWlr7Qjzuk98BVmhwTiz2kimUrkDxfQkTILHJUVQ9PJy8yBNRhfPw1reJoFNKsL8hDF880WFbhEI%2FkSFmmu%2FthRP85dXaR1UM8lMZf0bm0X1CTi%2FJcN3ATE9aVAFhvrtNbgviZpl1lEmWFdwYRvulmCRdVyiao%2F24efc4tv466SmpqDMm%2BPi%2B5LvLbhPLfOKwkfULq4z8pI7dFBvxfLW9e6jhCtMPW%2F4sQGOqUBknevq3lZgt0seMF4TomEmucsEMZ86N7wPYSFgfstWj2nA3NR9vnKVt5AouaQztPVMu7FiRWn0HDuy6SzpXJ5qIUU0a7r2Xu%2BF8BYELdoKeffy45LbLubCotnKp1ytBgPQ9Gvwf8ZFW94lDfjbPrZ7294iNPE90ppNK9ssMfaAgsrKZ2BJbbiUPeZi7zOosdkvZj7CNERKl2mAd%2FUclis%2BP2cUzMJ&X-Amz-Signature=9db415e7e4223e2613295088a1b2c261c1f3bcd64593d99f3b2d119f665b6518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FE6YNFH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH9YeiVyt0uSm7v5Aza8icUuYSHtvv7eD8YylKIqkETwIgYW9%2BRYDw%2BUM9y%2B2bGD3kZ5%2Fp90BsBzkrx4RwWcWwtOUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG2zzQRGPjU%2FACl1yrcAw1yQ2EJ5XhtrATCDguJ9UfpmeotQLBJcXKXz26mFu5yNjgb2x1jHvC%2F%2FDQbCb6%2FMmXsrIir2Ok4HMyIXhGQ0aRuMaqwbYpIZYJrOjfATh8SKNlied0vAVGYGFNYRMoHhiWyasQ19m4uq7ek%2BtUTNtwAO0ZsGm4iJ2BG6BQseZ0EmxA%2BqJJ%2Bt9U%2BDPL%2BEao4Uj5Elnu8JjhKMo2neSEUaXUVdUf9AQ3hvtUKkcMX9nTp81fIHQNAU63MAFMrDDFOY5B%2F4%2FEXrwekShVKYlBaJhJxTeGwwh5%2F439v3mcayJWNBD%2F%2B1vWor%2FUERN8d7L%2FwE315ZNEihwnwmpXRo8iwKKIyUw3k7pQZUKpcz3q3yGOQVyN31Y2xNQ%2BEjyslzG%2FnwGBkz8mUE4SIfFmhcc%2Bw3bSqOQ0yTQlezonHP%2FbXYRNegfmILVeS8mPapAOOhCbQA8WIUys4YKm0wMVomVyriRcK9jkfh1uidOE2hLzZRJuiDT9X5N2sLGFABYHarv1kJ%2FSf9x3dGsqIhEeGkfi8xWgtVzAYW%2BZDil1ohJYqQT%2BCb3m9JzoJvYYCYTjTpURr7GxJ14OrB1w5jRKaOe4dxXVva48hg5EOpK6DfcqopZ41%2FhzFxy70f5ib%2BiJ3MPu%2B4sQGOqUBcF2HJPyHEiGH%2FtRH5oL7fE6ew%2FSKXugecyNkYZFA2sIO2s%2BLD1C73VE0SfX3hXPvQv638M5h0vk5L6SEPciligSj2l9IQLD%2FTjRpqoYsJncwchXJpcEOCbxZ74EIpMfA1jNwLvekQNrHdK%2FStSpRph1lzv54TUo46QOuYE7DgBdlh%2FWMw2gsBx9ACEDz%2Bi2oTrNaVjLmQ8%2BinOLcWuOrbLrmdYBz&X-Amz-Signature=c1968167101c5e11182eccf34a7cff6ecfd2b167331b193e0c6c27b4f80b2d39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI55LGLF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9pN1XIs4YJ%2BGDl7RXI6D5MG6xFWv7sS4ZQIFlQZKlhQIgTYcnup9trPqF0cPI01%2BHbDsz8vOXktp3Dppyv%2FyHDpQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEhG9z3wYrUjwGGpyrcA22GcVGd1OKzUTrPHJZ1PNft%2FFVlnXldLUjvig3IsHZ3%2FdsFR0C9FJsMbzAfjUK%2FOCw1UfTzKgDTJG1xufacJxeK7OJdhLMcZJTi6JF2RtTj0v1BKq%2BzgDjpsDi2Ywjo2T2cW15zO97YBsLJS4Q0Sjn3zgME%2BfCvYnEfvyNKY9gsRXvPxjWwWvU%2BAJQUUcRC0D0%2F7JMuOhd4iGoT2sE4ZPtATGYWtCD5GVUC%2BropOq7Lb3vaArStcI1dzGBjFqF03sprCpuZ%2BjK0ffz47MN3%2FxnwRGwb3ChiQhSewmIKrqQCivGdCRU2JDQfbqPYvxTAhwTWtEqJTocdaNhTUy3Y%2F8gTGPhK6EdUMxQ1WJrlMC5VK1tI6IFjBqRR941blNJLM5xqkeDAtYvK4QyLnKpRGXAyygoWV7wT78rlKgrMg3ypmq5S%2BKzIJ1bFXirOtO2yJJ1BbPB3ejVui%2F%2FOqLM2Do%2BzRri45X5AwPqiqcSD5wXSBTc1aXknvSlofRrcfOak4m8k5NtjQisfCiArla%2BMXhwYVaGPHnBtoOIYEMzdMVzoYQeV8TA0RTU3kcer8RkLzd0pJtpUPnXaMuvobGmdxCc%2BLzciSYKL76RKmYlG2MECOILugF38ytPAI0DFMMW%2F4sQGOqUBxqdzSRH58N0BrhvUGhUh4Y2GtFzBPIvfz4XxCLwS4UJa%2F%2BxZjWPF8%2B%2BG3ZenLZ5ZL7wnT9u6h1m2MrkF2ic4Ch265Oy5uF5HTAYG2p%2F0M0dcmAKmfRabNyjYPFpN00hHJ3Hem%2BB2EBs8s70RsCoXgWr6yqTkVuhmdE4c2JUeC%2Fy6HbPsCRHdLW8aneBhjwzF%2BrbENK2a7fyRgByt3xZa2cFWEdG4&X-Amz-Signature=15ede516a0739bc2bb21aef268401ca452a81d4a125872869e00803cfff23f05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FE6YNFH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH9YeiVyt0uSm7v5Aza8icUuYSHtvv7eD8YylKIqkETwIgYW9%2BRYDw%2BUM9y%2B2bGD3kZ5%2Fp90BsBzkrx4RwWcWwtOUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG2zzQRGPjU%2FACl1yrcAw1yQ2EJ5XhtrATCDguJ9UfpmeotQLBJcXKXz26mFu5yNjgb2x1jHvC%2F%2FDQbCb6%2FMmXsrIir2Ok4HMyIXhGQ0aRuMaqwbYpIZYJrOjfATh8SKNlied0vAVGYGFNYRMoHhiWyasQ19m4uq7ek%2BtUTNtwAO0ZsGm4iJ2BG6BQseZ0EmxA%2BqJJ%2Bt9U%2BDPL%2BEao4Uj5Elnu8JjhKMo2neSEUaXUVdUf9AQ3hvtUKkcMX9nTp81fIHQNAU63MAFMrDDFOY5B%2F4%2FEXrwekShVKYlBaJhJxTeGwwh5%2F439v3mcayJWNBD%2F%2B1vWor%2FUERN8d7L%2FwE315ZNEihwnwmpXRo8iwKKIyUw3k7pQZUKpcz3q3yGOQVyN31Y2xNQ%2BEjyslzG%2FnwGBkz8mUE4SIfFmhcc%2Bw3bSqOQ0yTQlezonHP%2FbXYRNegfmILVeS8mPapAOOhCbQA8WIUys4YKm0wMVomVyriRcK9jkfh1uidOE2hLzZRJuiDT9X5N2sLGFABYHarv1kJ%2FSf9x3dGsqIhEeGkfi8xWgtVzAYW%2BZDil1ohJYqQT%2BCb3m9JzoJvYYCYTjTpURr7GxJ14OrB1w5jRKaOe4dxXVva48hg5EOpK6DfcqopZ41%2FhzFxy70f5ib%2BiJ3MPu%2B4sQGOqUBcF2HJPyHEiGH%2FtRH5oL7fE6ew%2FSKXugecyNkYZFA2sIO2s%2BLD1C73VE0SfX3hXPvQv638M5h0vk5L6SEPciligSj2l9IQLD%2FTjRpqoYsJncwchXJpcEOCbxZ74EIpMfA1jNwLvekQNrHdK%2FStSpRph1lzv54TUo46QOuYE7DgBdlh%2FWMw2gsBx9ACEDz%2Bi2oTrNaVjLmQ8%2BinOLcWuOrbLrmdYBz&X-Amz-Signature=e9062fbce65b7bdce15ce970190d8ef2f17c9b5eceb71b20e88726c019a85807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SEKCN4M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNHq2j5pJ7xbwfh4GB5cfH90A0tpY4ttX41HWCvzyuDAiEAhP3A6ogG6t3Wfo8%2BpQvyTZKXAqz%2Fl42bt%2Fkc%2FjWk1KsqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2rreDN%2Bsg0n%2FtrFCrcA0Ry%2Fflw%2BeRT6YvylyGP1YHQ6RRF1PibMiKEUnyhWIg987cJ44tTh3Ra7adnggjWTSlfegibMf9KATR9PckfGszsfwFE4OJusKgdnZr4l1aRSlGd5HdAL7K6ki2tnOPTaRco7ql7NP7tS072mIdKw2ZURRSeMoq53Y8fb50dHxAtLW2%2Fyd6nu07xOq%2BsvfNNfKZHAOOb9wxVjCICQPH4%2F2fVLDymq%2Ft1CVVYMit9yRRM5t69qGVXG%2BzosR6PY9W93B56YcNAagb4QDJvHLA2WyZWzz%2BEoAckPoH65%2BnZV%2BPwwmeChyVNi%2F45s4%2BOPTKU25%2FmhAzfpzVw0N80wmak6xqeTDSqjehKLqwLonjlJoKf5mM8bEhTEmCIpJguXwn58egppcTvapX5oWsFGQXg4Zz5NjrCGPi%2Bn2m3iod%2BFqPlHq7ZX1VazZycAYgkAkg4Sj25RmpfoThIvUWTACP1GV6CsbOXrCndXACav2x4ofRO5%2BNnGwpOXUgVYG1%2FsWHmesEWvHMx1iUpaceliYzlteZmrnNMIRNH1hUrvubXKtSdfMrIUBPDrkdXSqUEmgTgaG7H3ex5jWt0fUJWbCw1sg6%2B2dt7O4gNIHJTHDODsoQiR74GiXVbLUo%2B5gdiMN6%2B4sQGOqUB1wKpstZKCCz0jNSjF1JqJMYqK1zbsHuRNUQwAAPu6M1d3t5Mj2CSEdVydqlDfsAhQlfJgWov%2B2geHT%2F8Kqy1Gvs%2BpfZ2Kd10P4G%2FMszgdjQ5LwCgGmpsvkm0d6QJjuKwDI5mQr3zRIMUI1thildp%2FIvMz8iKYfFiG72Mb64TWS7o4bMVj%2Fol0AKqAMOdvMXjN3eW2FiVSQg4XmpacpuGn9JPFb%2F1&X-Amz-Signature=cd95e30c5d1292337a3471868dfafcd02cb851ff701fffc11b8e769c44c74403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FE6YNFH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH9YeiVyt0uSm7v5Aza8icUuYSHtvv7eD8YylKIqkETwIgYW9%2BRYDw%2BUM9y%2B2bGD3kZ5%2Fp90BsBzkrx4RwWcWwtOUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG2zzQRGPjU%2FACl1yrcAw1yQ2EJ5XhtrATCDguJ9UfpmeotQLBJcXKXz26mFu5yNjgb2x1jHvC%2F%2FDQbCb6%2FMmXsrIir2Ok4HMyIXhGQ0aRuMaqwbYpIZYJrOjfATh8SKNlied0vAVGYGFNYRMoHhiWyasQ19m4uq7ek%2BtUTNtwAO0ZsGm4iJ2BG6BQseZ0EmxA%2BqJJ%2Bt9U%2BDPL%2BEao4Uj5Elnu8JjhKMo2neSEUaXUVdUf9AQ3hvtUKkcMX9nTp81fIHQNAU63MAFMrDDFOY5B%2F4%2FEXrwekShVKYlBaJhJxTeGwwh5%2F439v3mcayJWNBD%2F%2B1vWor%2FUERN8d7L%2FwE315ZNEihwnwmpXRo8iwKKIyUw3k7pQZUKpcz3q3yGOQVyN31Y2xNQ%2BEjyslzG%2FnwGBkz8mUE4SIfFmhcc%2Bw3bSqOQ0yTQlezonHP%2FbXYRNegfmILVeS8mPapAOOhCbQA8WIUys4YKm0wMVomVyriRcK9jkfh1uidOE2hLzZRJuiDT9X5N2sLGFABYHarv1kJ%2FSf9x3dGsqIhEeGkfi8xWgtVzAYW%2BZDil1ohJYqQT%2BCb3m9JzoJvYYCYTjTpURr7GxJ14OrB1w5jRKaOe4dxXVva48hg5EOpK6DfcqopZ41%2FhzFxy70f5ib%2BiJ3MPu%2B4sQGOqUBcF2HJPyHEiGH%2FtRH5oL7fE6ew%2FSKXugecyNkYZFA2sIO2s%2BLD1C73VE0SfX3hXPvQv638M5h0vk5L6SEPciligSj2l9IQLD%2FTjRpqoYsJncwchXJpcEOCbxZ74EIpMfA1jNwLvekQNrHdK%2FStSpRph1lzv54TUo46QOuYE7DgBdlh%2FWMw2gsBx9ACEDz%2Bi2oTrNaVjLmQ8%2BinOLcWuOrbLrmdYBz&X-Amz-Signature=7aec46e19275fd4bbdb3cac25823eaa26411c67a42507ecaf01d5ade2248f165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IUCYZ35%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtbbGyMZcFOx9x2QXuTvVj%2Fs55IKpZs%2FI4Xr2XHqGIhQIgdQViHAp2hYjRqs9T3JtmWoe%2F2IuRm3%2BKR13HFbiBvXsqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHT36tKIWOxh5xqSEircA%2FZL3wc6eKuuABK4HeLezDWwmMWexi%2F%2FaFRkuNzaUqhjYKJ7lhhNnxOJIsav9LbowC4Q5v51UYHZY9XXue6pofJmAVOCkOQCAv0RFYvA5cvw%2BfjnPZ4pciSOEg4FJM1DGXXfMoX8G50Ux2rYOmQleDkgXiSiJ0oz7ixeXsOqNPFDazadWkPP8k9VU%2BcgFrPWJiHE4a93JdyCWlTy462NhpAo%2F2OZdIstDMLun9iKLS61Qv5LdgRzjLrO3vz5PVhuUz8pTTaplzzrc9BQSYciVa90UVO%2FvWjG57YaAcWuyQE380Uq2lDTUody%2BgmoU6LfvOk5pyFnbiQf87DePZzyQz94wcwZ88G9vudTYfUfK4Suy7xNTaHRHTPqHhk3LyHeMcuByF%2FThvqyF%2FM6aCO%2Bf%2FdbxuHw%2B8SzkwveYKNXv3xG6p7GKi9HQETmhDS8fxsFYa0VX1kZ8PwDcVvyECCWk9hcvrG59ZSQbb2IS%2F2l4s2LvcoQq%2Fn688qiNh%2FEYdZjQmZZPVJ2JvILtdwXUeRpC1%2BL%2FeRS0C0UMF8DuGAlui8z515%2B%2BC2yu0wFfm4qQA%2BMvPxhSrEO25r97qnwdYqeeQAYPz4DX8Km9wPCKZl3K9yto0EDfHQR1%2BIe3wZzMJu%2F4sQGOqUBKaa6q0fEaR9joinxdNyX%2BURwQrMFHp8Y0cFV2kVGVMcgMlP%2F9rMCakJoJVi7bQznkceGENhPsCGdnky1XgbMjQ2AI3%2Bi3%2B8sB1oGFFd6hG9BiClvtkzHWIQPssnPO7Y5QboxMfw6s6RaRfhaN5wR0C6a3HQqDwwXLesaPupQKK%2BoNR5%2FTwfkf2AcYmQjiQRyJSQfjhGrwWkMFpz%2F0kKS%2FN%2BU5nrm&X-Amz-Signature=89f7b7414b1a326ce020bccdfeb7dbf9f6564561dacc5505bcccbb8784e9e1b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FE6YNFH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH9YeiVyt0uSm7v5Aza8icUuYSHtvv7eD8YylKIqkETwIgYW9%2BRYDw%2BUM9y%2B2bGD3kZ5%2Fp90BsBzkrx4RwWcWwtOUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG2zzQRGPjU%2FACl1yrcAw1yQ2EJ5XhtrATCDguJ9UfpmeotQLBJcXKXz26mFu5yNjgb2x1jHvC%2F%2FDQbCb6%2FMmXsrIir2Ok4HMyIXhGQ0aRuMaqwbYpIZYJrOjfATh8SKNlied0vAVGYGFNYRMoHhiWyasQ19m4uq7ek%2BtUTNtwAO0ZsGm4iJ2BG6BQseZ0EmxA%2BqJJ%2Bt9U%2BDPL%2BEao4Uj5Elnu8JjhKMo2neSEUaXUVdUf9AQ3hvtUKkcMX9nTp81fIHQNAU63MAFMrDDFOY5B%2F4%2FEXrwekShVKYlBaJhJxTeGwwh5%2F439v3mcayJWNBD%2F%2B1vWor%2FUERN8d7L%2FwE315ZNEihwnwmpXRo8iwKKIyUw3k7pQZUKpcz3q3yGOQVyN31Y2xNQ%2BEjyslzG%2FnwGBkz8mUE4SIfFmhcc%2Bw3bSqOQ0yTQlezonHP%2FbXYRNegfmILVeS8mPapAOOhCbQA8WIUys4YKm0wMVomVyriRcK9jkfh1uidOE2hLzZRJuiDT9X5N2sLGFABYHarv1kJ%2FSf9x3dGsqIhEeGkfi8xWgtVzAYW%2BZDil1ohJYqQT%2BCb3m9JzoJvYYCYTjTpURr7GxJ14OrB1w5jRKaOe4dxXVva48hg5EOpK6DfcqopZ41%2FhzFxy70f5ib%2BiJ3MPu%2B4sQGOqUBcF2HJPyHEiGH%2FtRH5oL7fE6ew%2FSKXugecyNkYZFA2sIO2s%2BLD1C73VE0SfX3hXPvQv638M5h0vk5L6SEPciligSj2l9IQLD%2FTjRpqoYsJncwchXJpcEOCbxZ74EIpMfA1jNwLvekQNrHdK%2FStSpRph1lzv54TUo46QOuYE7DgBdlh%2FWMw2gsBx9ACEDz%2Bi2oTrNaVjLmQ8%2BinOLcWuOrbLrmdYBz&X-Amz-Signature=0251097c24d7d27ec9cba648350b2dc0799225e0e9bfcfee87b132357e2c5872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFIEUV65%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj3y8PgTaGekl%2BkhfweRlRnBievfRwv8EHT3agjsZ1MwIhAMMjFAhhK99xgNSUF9CXgu7hXpxmIY13lLFiX54%2FvnkGKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3Ww9ODppwdUMn2V0q3AMWHtkVNbqaSwhDULSQ7QzKYvM%2F0H2W6%2Bqs7ImDwPhxkV5cVoiAEeBXLwgmsBvbA2kjy925CSsxh3xIWRTHj76xukfP2NYQjGtwqUd4Xz1nxLSqSh8XRmghXoe%2F9waUXxg0a3lEZNUrI8vMm%2FVpmDMiloVYIheCX2flx%2F9Cu02ugD2EZoB2IHU5sn%2F1kg0xqzKKQmJQYboZ9rx3ecrD2y1upInRQ%2Bls7%2BEFwCafwml11oU28omsa7gb3kFw0M%2BXxZ5KxwLUnprrbq1noryT2MOl1JtAKw1T1MX%2FjUfENbJ8mu8kMB81rQSi%2FFCYRBVNFe3PcRM3ADbZUBpwwWw%2BBgbvp1UVkzjte%2F5M%2B2BhP60HucJIMuEYEeCs72varMqy95QuORfoo%2FFHdgoWmLf8fxeSO3axAneju0X2%2BYxGPINKht6DDkyB1Vpx3RBtBW%2B5jYLQMgIxrG4AoaXcZbHY%2F14DvqY3gmXXTSmFF50Ds9MSRp3%2F1Zpj6p7ygvIRa4gaPUq1Pd46%2B78nQKna8QG28iv0XU2jLjyK%2FEbsLJMGvfBCskUUy%2BgIWmcmr%2Bea4KIlr1%2FGM1ES2Gc7gmf%2Bp6L%2F%2FTeOLCZzkuCLQ5tR4FZ2ZGQeCJcDNMEeyoa950PEMDCDv%2BLEBjqkAUYUoOkJk0avc6FiwY226KcAaLyzZmkp4X5llU36xee5NIhNwlLLz3mZfqHWyjHPMcGrTk2qo9qdms2gM1AUL6vKS0GkuNg1vN7QpsHLbQKehoDUlYVvS%2Fn2S1xNrNIRwo14jpSX5BQYDleCuoMj16N0Ek7MxFE3EhHTPUIJ3%2BEtmLdoUuTYj5MbEQLUJR0pbWr9o4iMqA6d65z3XsxxjhjuZqKZ&X-Amz-Signature=c50b86de987146c6d3ec209d05ff0ff1f6ee0db317e477b474935c32246e2322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647YS5L3T%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsc2AT5wTiZ2w23SBL6PxcUr%2BdgpZ%2F5InRIRY50NOM6QIhAIDDga5aFLeNLJha%2B%2FI5oeFdVYZN0bhjlfV5H3C53ZpGKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHk8QpJTUCxzmdbBUq3AMOlIgCvZTOSyYuJ%2FSBF0Qtl7qta%2FzP6TZ61%2F96YJ3EBxPsF6x8QkaQ2gSOanirMiIroyMPEH%2BR3BKzdgVIbB6r9RpuLdX6NzBei6CJGRrsxeyrV6FxZRBwpdbVB%2BRs5scKUlH7lmMetgdV%2BFjGfSNPiiLOwsz9W8x7mWNfvjEwja2sYO%2BGX47rTu5Vp5RbQTFSUVw1iJfDGF4NLrFJwS3jygfRrdGxxGQcqe4r4W1X4Q2wvuFpMbzPirq8pIkKxjf0Eul4yGJN97Ku%2Fye24%2FFbsPja6vuDUIhGmLgEAKZU2jIe2q66orSp5iKNk2d0lCqDPpbGxD3GsLm4%2B9%2BTEPAa1Gx2Kjgj7AOogr6jS%2Fcg8oTpe95%2FuK0rhK0enyFpnJIxIOlZCehLuoEaoW2Xku5IatKIF8In1lNdqAz06m%2Bhr%2BJZ%2FlJCPtP8NFGCsYSMjp595fO7RMLKm0hkvvetBJ6o78xrZkQJxSMgI4qYd37oQkNAQ2b9HhTogMNUIRX35%2Fhv0hdgEjt00YOoryOkfhmRM571sB%2BZaoOM4Ln7XMV9ctT0ZOMcO7f2G1xt0Mzu3%2BKdhtKqKZJ9ElcasFZidsBEFjOfzRY%2FEmrDiY7drYHrKfw3gwVoc9%2Fd76yi9jCPv%2BLEBjqkAVWBoQrloJi9uuGJEElekh6zz1p26kpl8sboPZIPOLNnRt637m9dqtXURdLGP%2FXtqG8%2Fa5DL0j00g8QkvqxFHLljzk11nzAI%2BJkYbrmG82Wi793f83eE7D5mvDa%2FGQL3ddEJmROmqYFkbJGCyiv2M0z9ouPmw3irTm50iuIs6wL1sG%2BMUrujmAKuvZ6xyjjJwgBzWZZrz2o69jT1CvceigwODGh9&X-Amz-Signature=1e2df576df55fe618498a17550d8b176d97abf3319c37f01c21a4b9ab4dcc318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIWDKB23%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDssKTZBeAj9isr%2Fggz6oDEfLe92QKnKfr9WBM388l5CAiEA7bMc9F6DMdlE3h9F6mqvV5hogFqLTeS5xoYcTfKbfFsqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtVWqyPVLU5uz3H3CrcAzepwTSFos65nV6ApKOKA86oI6psSvy%2FIM5b%2BzIsSk89HQSmRBwxSMYYosRShQzacC%2Bd%2F%2BlPhExN7zO7I%2BfI5yEYfjadbD4gRy7%2BoXWINhJAOYogbouQBt1SwlQBK2Ggv1iBU4bYdUuxwAXA1r8Y%2BUjueL9lBgeSUokQewqMBBVFhYsXCG40fu6t08yqkZjsxw1s82dVqa5%2BIGyU4Yh7mfGmJWT0XNt37pc%2BIauMLBj3N5rYUuIRfrIcwUcvzxs3qMyW4hTCQpA5%2FJLrfCiKCn0aJ8RHfIuh%2FHvE29vzXj3CXtVUvj5%2FHd5vDuLUPdA0DT9aP8ch4gIdvVYyO8kJpPv9u87IXjt%2BhwP1E2cBngGfV%2BTMEcYK%2FqQbsAUsi4efIuuB2NcHDDyZoMo7STdWn3FIwdx%2BQ9OOJsCSmWrMfv7T%2Fb4TYjf4BfQkNhuLA0No1S4mcZl9%2BJFfzXaAU9D9Cd69cP%2B%2B%2BF25DgPpHYqWbr4PG6i8W1HhQRdsN3onaFmbLKIOzDxyBzrciIXkuYYuiGwWG4168T4IdmMKtvd9apfeEeFpCrVuhplx9H8Zlufzl%2BGnNnOEKuko9CH1Ktt8IEYEnBEOjRd%2F8ruDnS1Haw5hYFu5km9kftXCU7LFMNu%2B4sQGOqUBZB2itDeUSXbgNFKt5eoNc939U9ChwHxcWKF75lj6Se5czw6eE%2Bly6GtIQcwY7uamJxXLS13fzpUtaschmUQ2SRm8kGNYg11vhOnavK%2FHRBcltj0k01FZFr0PeX79Iuy4D%2B92b5et%2BF8YRiUlEHI6luzM3UKKAgJY0fPGIDwB3rFWAnK5SxbEtsFWFwMUKfMd%2Bzn2YiZH%2FJmUHK8eEkQxbCn5QxFy&X-Amz-Signature=41f736ef18b0b0cd591a56821460e86f700ce00f6ccb467ca9dd12788b803e08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C6CMA6A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh4i8vsWQJYou5iHvlcsrbp3jF33X10Wi4QBG3aCVfGgIhALpocWXt6u0uTOYa0mtZocB0fmynVzPXYpkI6zKfkYeKKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9KcoKyBQT1hvnJAcq3AMfDlE4i2E%2BOu%2FL5iSlxh6tv1YAmvOQNq5ViKXCLNU8%2FKiMWQfHoagqXjORE69ZnHaljgZ9P8nlUPRNPd01%2Fm2TyiOxO%2Fn5LDZm6jnledEvxUR%2FTLVL%2Bs2fWIaYQvJRUG8R1e6FZRA82mq3r0TBV%2FVKRB28UY8KSkWaIA48CJ%2FLF1t%2F3vfYcM4SgOzbmAZb0SZrr5YSG2P7CCgSYVJW8G7vSmIsB2BKel8GOVZIhWC0EtIo%2BKRa2k2erzoqlkg%2FnXCti45nLrAmyOl6bcJs3zy0rOMvAS3ZQ8fhaYmNtugtkHKqLWu%2BBjJQB9RdwjeB7o2atSdFJ8fBrE0W01SVIcFzwS3uLRykboe9C2NC2yZEh%2FE6L9qkOcpYiz8a4bLfkm8wnXsqDXTogvlX3NK5RNHQzCTIhx%2BT083Qb0vp%2FKs5RnKpQi449d1wcQiPxB7mbeB3S5a9UjD%2Fdpoh00J9u6PlIosII%2BUMHN173PJe8g7ga0zHjmxNt%2FkgbqV6O48DPLEWaqozaY7pHVrFgPyKZoF1jpID%2F7UvtYfitFynOpKlkCocRdPZCOhmE0tpp04zsfWA5lBRa6CUsMq0RNKl6IVOXNTjaYoTDdRjSFQiBn%2FKPX0wH1FiS59bsRcfmDDjv%2BLEBjqkAffmlzQcvdrOGDBf0pQY5tYBzLNEzbadvYWjD0grj3VGzhSf1eghq2eSjyQn1Wz9k9SOW9MhGMawlLd9j6YcibJ9iMoNgHP%2B1%2Ba70YPS23hUiWbOny4y4Nerqu7vDEMsNgGp9YFCUgH5Oy6T%2F28x0HSzwxryIkR%2B2Qc55qX7q%2FAkn0JO3g2JqxqevweKoh60fY9RkxPAoGBsi%2FvZYLk65NQsfTnV&X-Amz-Signature=858151374bbe8ebe9ee58cd883f7b660f48a5a5a6ec1a9363acfc9597889cb11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRYNKCSB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXn6DBqJl5tDxV52ESijeDNWdBs67m%2FFj7L9hTepQklQIgeMGIwKJHwV06cx2t7okX6LXkQHPKKQ4MKOGCVS6BAAAqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5Mvqf%2F775bCz93ayrcA2yfp%2BN4W7ntR%2BLCxi3JqWKpZIv%2FNWIPBHi9VJooBsfAJTndMzVMdx2COMsxtSPmHuF27crcPBUOCFHIls4qnP3FN9EayiMzBHUypE1yjm5GXd%2F4x3CIBzCa6keMjSRvU1thQIm9n2nYMuownFC7ezYx2wiJTL8MaaiGWxW5%2FUdBSnP6NPwpx3AYfjlsk19jaLgEujhRHZdckbSiLZ2Sb8x%2BSddZ0wToU%2FS%2FnWdNYA%2Brw3bPqFLJZmGEhXAfbSFVP8p3QHTh3otxfY2x06FePu61n9EcaSDa6Mpn%2BfME9CknwzHxqCXfYXR94jj2ScTxA6BVHdurShU1RAIof5KGX6iUn72R31eVfeWTqI8gQnyvdYJveRZHk9h1130XPF6QFU%2BFYv1xYb8OgujVqz2jEhhkUxS3fCxtIhG9rgy9eKJeAvL8brGd1exBvTpTJrFuVcBnKVBmeRS1iMzq9Esr8n6scioGdNCUjQHSuBcTnZojmFF8PiFx7dYKaGp%2FPpcxs5gLLq1Qa1QoTRndUlcRVn%2BMBLT0oP2nDaCnxC%2Fv3oaHreinRwg%2BWwPKjDd3LY5IJgsMmYh3B1b8L7hMgxQ20SmCv36%2FaB91Y1rX3jHyjoN7GZLNLI3r2d2x1C19MI%2B%2F4sQGOqUBWvgu3Jnh%2BJc11a1ippp67jnSqOAAcS7CIrPSGZ0nrHVUid%2F7vu3lyoS7NufxjlAbRMdJ2L7wb3jYR%2FdxVowm4D%2BjDnmGRUOJHh8ScsGwFPIghigjuhCUty0NlKHpmCCj7r8eDembzapOCWZPCEtw66s9cSrcJUQZenPD3htjJKZgQTgDJmZ%2BAwLvWx0sxjS0sn2iFLNK40jlTMtcC8wbgzgvo4VX&X-Amz-Signature=ddd4fc77d82e6fec4566a7ec9af975a66b9cd4906028c7cbefb1b20798e7e26f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FE6YNFH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH9YeiVyt0uSm7v5Aza8icUuYSHtvv7eD8YylKIqkETwIgYW9%2BRYDw%2BUM9y%2B2bGD3kZ5%2Fp90BsBzkrx4RwWcWwtOUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG2zzQRGPjU%2FACl1yrcAw1yQ2EJ5XhtrATCDguJ9UfpmeotQLBJcXKXz26mFu5yNjgb2x1jHvC%2F%2FDQbCb6%2FMmXsrIir2Ok4HMyIXhGQ0aRuMaqwbYpIZYJrOjfATh8SKNlied0vAVGYGFNYRMoHhiWyasQ19m4uq7ek%2BtUTNtwAO0ZsGm4iJ2BG6BQseZ0EmxA%2BqJJ%2Bt9U%2BDPL%2BEao4Uj5Elnu8JjhKMo2neSEUaXUVdUf9AQ3hvtUKkcMX9nTp81fIHQNAU63MAFMrDDFOY5B%2F4%2FEXrwekShVKYlBaJhJxTeGwwh5%2F439v3mcayJWNBD%2F%2B1vWor%2FUERN8d7L%2FwE315ZNEihwnwmpXRo8iwKKIyUw3k7pQZUKpcz3q3yGOQVyN31Y2xNQ%2BEjyslzG%2FnwGBkz8mUE4SIfFmhcc%2Bw3bSqOQ0yTQlezonHP%2FbXYRNegfmILVeS8mPapAOOhCbQA8WIUys4YKm0wMVomVyriRcK9jkfh1uidOE2hLzZRJuiDT9X5N2sLGFABYHarv1kJ%2FSf9x3dGsqIhEeGkfi8xWgtVzAYW%2BZDil1ohJYqQT%2BCb3m9JzoJvYYCYTjTpURr7GxJ14OrB1w5jRKaOe4dxXVva48hg5EOpK6DfcqopZ41%2FhzFxy70f5ib%2BiJ3MPu%2B4sQGOqUBcF2HJPyHEiGH%2FtRH5oL7fE6ew%2FSKXugecyNkYZFA2sIO2s%2BLD1C73VE0SfX3hXPvQv638M5h0vk5L6SEPciligSj2l9IQLD%2FTjRpqoYsJncwchXJpcEOCbxZ74EIpMfA1jNwLvekQNrHdK%2FStSpRph1lzv54TUo46QOuYE7DgBdlh%2FWMw2gsBx9ACEDz%2Bi2oTrNaVjLmQ8%2BinOLcWuOrbLrmdYBz&X-Amz-Signature=ffe559c5e7407fab5210f457e11a8e9ba2b914a11b21ffb661ec768b2128c81d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FE6YNFH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH9YeiVyt0uSm7v5Aza8icUuYSHtvv7eD8YylKIqkETwIgYW9%2BRYDw%2BUM9y%2B2bGD3kZ5%2Fp90BsBzkrx4RwWcWwtOUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG2zzQRGPjU%2FACl1yrcAw1yQ2EJ5XhtrATCDguJ9UfpmeotQLBJcXKXz26mFu5yNjgb2x1jHvC%2F%2FDQbCb6%2FMmXsrIir2Ok4HMyIXhGQ0aRuMaqwbYpIZYJrOjfATh8SKNlied0vAVGYGFNYRMoHhiWyasQ19m4uq7ek%2BtUTNtwAO0ZsGm4iJ2BG6BQseZ0EmxA%2BqJJ%2Bt9U%2BDPL%2BEao4Uj5Elnu8JjhKMo2neSEUaXUVdUf9AQ3hvtUKkcMX9nTp81fIHQNAU63MAFMrDDFOY5B%2F4%2FEXrwekShVKYlBaJhJxTeGwwh5%2F439v3mcayJWNBD%2F%2B1vWor%2FUERN8d7L%2FwE315ZNEihwnwmpXRo8iwKKIyUw3k7pQZUKpcz3q3yGOQVyN31Y2xNQ%2BEjyslzG%2FnwGBkz8mUE4SIfFmhcc%2Bw3bSqOQ0yTQlezonHP%2FbXYRNegfmILVeS8mPapAOOhCbQA8WIUys4YKm0wMVomVyriRcK9jkfh1uidOE2hLzZRJuiDT9X5N2sLGFABYHarv1kJ%2FSf9x3dGsqIhEeGkfi8xWgtVzAYW%2BZDil1ohJYqQT%2BCb3m9JzoJvYYCYTjTpURr7GxJ14OrB1w5jRKaOe4dxXVva48hg5EOpK6DfcqopZ41%2FhzFxy70f5ib%2BiJ3MPu%2B4sQGOqUBcF2HJPyHEiGH%2FtRH5oL7fE6ew%2FSKXugecyNkYZFA2sIO2s%2BLD1C73VE0SfX3hXPvQv638M5h0vk5L6SEPciligSj2l9IQLD%2FTjRpqoYsJncwchXJpcEOCbxZ74EIpMfA1jNwLvekQNrHdK%2FStSpRph1lzv54TUo46QOuYE7DgBdlh%2FWMw2gsBx9ACEDz%2Bi2oTrNaVjLmQ8%2BinOLcWuOrbLrmdYBz&X-Amz-Signature=4b17c76e3aa3ca69ca8f4a0cbf31ceb1964007a77cf2a7ad752e04f0ef1201c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5MLLXT4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFfklzsAbtvIxmRa8RverfEmAGPQgKYBnofnKMRN421QIgO33JbZ7NlhmyE2r3D%2Bp0CazhpIt23lI9F9XtM1NwgasqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDL7U0Ayj9Rin31PBircA3wiavx7djWIuDf%2Fju%2FCml62IuKBhhY56tBWqHoP1%2B6XsEnD1dKwYN53NVOfD10ToysIZP9IPNAjwDIrgUNr3wkhz0UWbW2TJeRk%2FcSq7ce%2FRQqEIIQje4ax%2FC1Unn8WadX%2B4amqEFVq%2B7FVrHre2slspnhp7HWHBGUjeGAaBIrEzrhz2xtlOZJRKB9JOxT%2F9GMiq%2BYRtuxPElk6bEEbFfAUhSTe%2Blbwd9chqLLOsGBz7qtEHARpX3u76kIOMWsneBM0ioD7%2FfByfs6XYhNEgVsmwOPoRALEJ95kxnJZ7ajwhLgcLCZm4pcAI5XnWDjQj9ZeiyLJTpKwLuFP%2FxgnTgsc5FKbcasamSJjBIDTZ4bljGqesCQjViFtv7crhc%2FLRXiq%2BNcogKvyQrUSTHWNs4pLQ%2B7C83biw5S861cdy4k3DHHtEDDlIbmN0kKkmLoxy%2Fw6ZA2yq6TsF7J2r9zTpJEzAVVVME%2FBpcguq%2BpKYvVfrI%2Bj2HXlis3gkJNBdGPpmvOI0YN82%2BFkAEjoYc6LtCrR4mPsqaINWxtMHBLqx3O5fAQPuCTxvkunR%2BzT8a8EGEU%2BNlgi%2B5l%2FrjU1lc%2FirqDjbpkJTRH8QTaR%2FdQxZBzlAsP3rz%2BxNLJg07ICMI2%2F4sQGOqUBgDQUz1Oz6TXoPoa1gUT7YnAshU2JQVOUtrCOFzQElQA3bdmT82HY5Ybqcs%2FfnlzJRU%2Br01QNxQq%2BMi48NCcsnk3dkkk19CTzISUiF%2BJwgFdy5tBcr0ZPpdy0sBXDG9uQcHLK8H1Q3ODEgjP9TLFYnHiXjr85f1321hYo67FhI7MIJooQOWUD0qd6A2YcPvpZgx1HLDcqyHz57Ha4qwjk2cN6HSKW&X-Amz-Signature=a8b9cbac5bc682c45dbe255ad05d3328f056b375f61a7307aad529efd4288aad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5MLLXT4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFfklzsAbtvIxmRa8RverfEmAGPQgKYBnofnKMRN421QIgO33JbZ7NlhmyE2r3D%2Bp0CazhpIt23lI9F9XtM1NwgasqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDL7U0Ayj9Rin31PBircA3wiavx7djWIuDf%2Fju%2FCml62IuKBhhY56tBWqHoP1%2B6XsEnD1dKwYN53NVOfD10ToysIZP9IPNAjwDIrgUNr3wkhz0UWbW2TJeRk%2FcSq7ce%2FRQqEIIQje4ax%2FC1Unn8WadX%2B4amqEFVq%2B7FVrHre2slspnhp7HWHBGUjeGAaBIrEzrhz2xtlOZJRKB9JOxT%2F9GMiq%2BYRtuxPElk6bEEbFfAUhSTe%2Blbwd9chqLLOsGBz7qtEHARpX3u76kIOMWsneBM0ioD7%2FfByfs6XYhNEgVsmwOPoRALEJ95kxnJZ7ajwhLgcLCZm4pcAI5XnWDjQj9ZeiyLJTpKwLuFP%2FxgnTgsc5FKbcasamSJjBIDTZ4bljGqesCQjViFtv7crhc%2FLRXiq%2BNcogKvyQrUSTHWNs4pLQ%2B7C83biw5S861cdy4k3DHHtEDDlIbmN0kKkmLoxy%2Fw6ZA2yq6TsF7J2r9zTpJEzAVVVME%2FBpcguq%2BpKYvVfrI%2Bj2HXlis3gkJNBdGPpmvOI0YN82%2BFkAEjoYc6LtCrR4mPsqaINWxtMHBLqx3O5fAQPuCTxvkunR%2BzT8a8EGEU%2BNlgi%2B5l%2FrjU1lc%2FirqDjbpkJTRH8QTaR%2FdQxZBzlAsP3rz%2BxNLJg07ICMI2%2F4sQGOqUBgDQUz1Oz6TXoPoa1gUT7YnAshU2JQVOUtrCOFzQElQA3bdmT82HY5Ybqcs%2FfnlzJRU%2Br01QNxQq%2BMi48NCcsnk3dkkk19CTzISUiF%2BJwgFdy5tBcr0ZPpdy0sBXDG9uQcHLK8H1Q3ODEgjP9TLFYnHiXjr85f1321hYo67FhI7MIJooQOWUD0qd6A2YcPvpZgx1HLDcqyHz57Ha4qwjk2cN6HSKW&X-Amz-Signature=56bcab4edcf3257fac30f201039508b5d3d5a41167d66456dcbaf5a98a17c20d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5MLLXT4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFfklzsAbtvIxmRa8RverfEmAGPQgKYBnofnKMRN421QIgO33JbZ7NlhmyE2r3D%2Bp0CazhpIt23lI9F9XtM1NwgasqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDL7U0Ayj9Rin31PBircA3wiavx7djWIuDf%2Fju%2FCml62IuKBhhY56tBWqHoP1%2B6XsEnD1dKwYN53NVOfD10ToysIZP9IPNAjwDIrgUNr3wkhz0UWbW2TJeRk%2FcSq7ce%2FRQqEIIQje4ax%2FC1Unn8WadX%2B4amqEFVq%2B7FVrHre2slspnhp7HWHBGUjeGAaBIrEzrhz2xtlOZJRKB9JOxT%2F9GMiq%2BYRtuxPElk6bEEbFfAUhSTe%2Blbwd9chqLLOsGBz7qtEHARpX3u76kIOMWsneBM0ioD7%2FfByfs6XYhNEgVsmwOPoRALEJ95kxnJZ7ajwhLgcLCZm4pcAI5XnWDjQj9ZeiyLJTpKwLuFP%2FxgnTgsc5FKbcasamSJjBIDTZ4bljGqesCQjViFtv7crhc%2FLRXiq%2BNcogKvyQrUSTHWNs4pLQ%2B7C83biw5S861cdy4k3DHHtEDDlIbmN0kKkmLoxy%2Fw6ZA2yq6TsF7J2r9zTpJEzAVVVME%2FBpcguq%2BpKYvVfrI%2Bj2HXlis3gkJNBdGPpmvOI0YN82%2BFkAEjoYc6LtCrR4mPsqaINWxtMHBLqx3O5fAQPuCTxvkunR%2BzT8a8EGEU%2BNlgi%2B5l%2FrjU1lc%2FirqDjbpkJTRH8QTaR%2FdQxZBzlAsP3rz%2BxNLJg07ICMI2%2F4sQGOqUBgDQUz1Oz6TXoPoa1gUT7YnAshU2JQVOUtrCOFzQElQA3bdmT82HY5Ybqcs%2FfnlzJRU%2Br01QNxQq%2BMi48NCcsnk3dkkk19CTzISUiF%2BJwgFdy5tBcr0ZPpdy0sBXDG9uQcHLK8H1Q3ODEgjP9TLFYnHiXjr85f1321hYo67FhI7MIJooQOWUD0qd6A2YcPvpZgx1HLDcqyHz57Ha4qwjk2cN6HSKW&X-Amz-Signature=7e317e7481ae478e8eb893c76bb6b687412dc850a06b58ead6f40a0d735efd5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5MLLXT4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFfklzsAbtvIxmRa8RverfEmAGPQgKYBnofnKMRN421QIgO33JbZ7NlhmyE2r3D%2Bp0CazhpIt23lI9F9XtM1NwgasqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDL7U0Ayj9Rin31PBircA3wiavx7djWIuDf%2Fju%2FCml62IuKBhhY56tBWqHoP1%2B6XsEnD1dKwYN53NVOfD10ToysIZP9IPNAjwDIrgUNr3wkhz0UWbW2TJeRk%2FcSq7ce%2FRQqEIIQje4ax%2FC1Unn8WadX%2B4amqEFVq%2B7FVrHre2slspnhp7HWHBGUjeGAaBIrEzrhz2xtlOZJRKB9JOxT%2F9GMiq%2BYRtuxPElk6bEEbFfAUhSTe%2Blbwd9chqLLOsGBz7qtEHARpX3u76kIOMWsneBM0ioD7%2FfByfs6XYhNEgVsmwOPoRALEJ95kxnJZ7ajwhLgcLCZm4pcAI5XnWDjQj9ZeiyLJTpKwLuFP%2FxgnTgsc5FKbcasamSJjBIDTZ4bljGqesCQjViFtv7crhc%2FLRXiq%2BNcogKvyQrUSTHWNs4pLQ%2B7C83biw5S861cdy4k3DHHtEDDlIbmN0kKkmLoxy%2Fw6ZA2yq6TsF7J2r9zTpJEzAVVVME%2FBpcguq%2BpKYvVfrI%2Bj2HXlis3gkJNBdGPpmvOI0YN82%2BFkAEjoYc6LtCrR4mPsqaINWxtMHBLqx3O5fAQPuCTxvkunR%2BzT8a8EGEU%2BNlgi%2B5l%2FrjU1lc%2FirqDjbpkJTRH8QTaR%2FdQxZBzlAsP3rz%2BxNLJg07ICMI2%2F4sQGOqUBgDQUz1Oz6TXoPoa1gUT7YnAshU2JQVOUtrCOFzQElQA3bdmT82HY5Ybqcs%2FfnlzJRU%2Br01QNxQq%2BMi48NCcsnk3dkkk19CTzISUiF%2BJwgFdy5tBcr0ZPpdy0sBXDG9uQcHLK8H1Q3ODEgjP9TLFYnHiXjr85f1321hYo67FhI7MIJooQOWUD0qd6A2YcPvpZgx1HLDcqyHz57Ha4qwjk2cN6HSKW&X-Amz-Signature=94f04cde32db3c6c8d08e35a6a0689d85cb35d2e04fcee7a03379c44f0d16c2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5MLLXT4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFfklzsAbtvIxmRa8RverfEmAGPQgKYBnofnKMRN421QIgO33JbZ7NlhmyE2r3D%2Bp0CazhpIt23lI9F9XtM1NwgasqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDL7U0Ayj9Rin31PBircA3wiavx7djWIuDf%2Fju%2FCml62IuKBhhY56tBWqHoP1%2B6XsEnD1dKwYN53NVOfD10ToysIZP9IPNAjwDIrgUNr3wkhz0UWbW2TJeRk%2FcSq7ce%2FRQqEIIQje4ax%2FC1Unn8WadX%2B4amqEFVq%2B7FVrHre2slspnhp7HWHBGUjeGAaBIrEzrhz2xtlOZJRKB9JOxT%2F9GMiq%2BYRtuxPElk6bEEbFfAUhSTe%2Blbwd9chqLLOsGBz7qtEHARpX3u76kIOMWsneBM0ioD7%2FfByfs6XYhNEgVsmwOPoRALEJ95kxnJZ7ajwhLgcLCZm4pcAI5XnWDjQj9ZeiyLJTpKwLuFP%2FxgnTgsc5FKbcasamSJjBIDTZ4bljGqesCQjViFtv7crhc%2FLRXiq%2BNcogKvyQrUSTHWNs4pLQ%2B7C83biw5S861cdy4k3DHHtEDDlIbmN0kKkmLoxy%2Fw6ZA2yq6TsF7J2r9zTpJEzAVVVME%2FBpcguq%2BpKYvVfrI%2Bj2HXlis3gkJNBdGPpmvOI0YN82%2BFkAEjoYc6LtCrR4mPsqaINWxtMHBLqx3O5fAQPuCTxvkunR%2BzT8a8EGEU%2BNlgi%2B5l%2FrjU1lc%2FirqDjbpkJTRH8QTaR%2FdQxZBzlAsP3rz%2BxNLJg07ICMI2%2F4sQGOqUBgDQUz1Oz6TXoPoa1gUT7YnAshU2JQVOUtrCOFzQElQA3bdmT82HY5Ybqcs%2FfnlzJRU%2Br01QNxQq%2BMi48NCcsnk3dkkk19CTzISUiF%2BJwgFdy5tBcr0ZPpdy0sBXDG9uQcHLK8H1Q3ODEgjP9TLFYnHiXjr85f1321hYo67FhI7MIJooQOWUD0qd6A2YcPvpZgx1HLDcqyHz57Ha4qwjk2cN6HSKW&X-Amz-Signature=f81953b7e96e270593610cae7cdf4cdcc9e025b56f3f354c8404ef03ffb3970b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5MLLXT4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFfklzsAbtvIxmRa8RverfEmAGPQgKYBnofnKMRN421QIgO33JbZ7NlhmyE2r3D%2Bp0CazhpIt23lI9F9XtM1NwgasqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDL7U0Ayj9Rin31PBircA3wiavx7djWIuDf%2Fju%2FCml62IuKBhhY56tBWqHoP1%2B6XsEnD1dKwYN53NVOfD10ToysIZP9IPNAjwDIrgUNr3wkhz0UWbW2TJeRk%2FcSq7ce%2FRQqEIIQje4ax%2FC1Unn8WadX%2B4amqEFVq%2B7FVrHre2slspnhp7HWHBGUjeGAaBIrEzrhz2xtlOZJRKB9JOxT%2F9GMiq%2BYRtuxPElk6bEEbFfAUhSTe%2Blbwd9chqLLOsGBz7qtEHARpX3u76kIOMWsneBM0ioD7%2FfByfs6XYhNEgVsmwOPoRALEJ95kxnJZ7ajwhLgcLCZm4pcAI5XnWDjQj9ZeiyLJTpKwLuFP%2FxgnTgsc5FKbcasamSJjBIDTZ4bljGqesCQjViFtv7crhc%2FLRXiq%2BNcogKvyQrUSTHWNs4pLQ%2B7C83biw5S861cdy4k3DHHtEDDlIbmN0kKkmLoxy%2Fw6ZA2yq6TsF7J2r9zTpJEzAVVVME%2FBpcguq%2BpKYvVfrI%2Bj2HXlis3gkJNBdGPpmvOI0YN82%2BFkAEjoYc6LtCrR4mPsqaINWxtMHBLqx3O5fAQPuCTxvkunR%2BzT8a8EGEU%2BNlgi%2B5l%2FrjU1lc%2FirqDjbpkJTRH8QTaR%2FdQxZBzlAsP3rz%2BxNLJg07ICMI2%2F4sQGOqUBgDQUz1Oz6TXoPoa1gUT7YnAshU2JQVOUtrCOFzQElQA3bdmT82HY5Ybqcs%2FfnlzJRU%2Br01QNxQq%2BMi48NCcsnk3dkkk19CTzISUiF%2BJwgFdy5tBcr0ZPpdy0sBXDG9uQcHLK8H1Q3ODEgjP9TLFYnHiXjr85f1321hYo67FhI7MIJooQOWUD0qd6A2YcPvpZgx1HLDcqyHz57Ha4qwjk2cN6HSKW&X-Amz-Signature=68608d86e4b27e0e6871765540e39dbfb33a48a7553d98a1cc9e2fa52495e598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5MLLXT4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFfklzsAbtvIxmRa8RverfEmAGPQgKYBnofnKMRN421QIgO33JbZ7NlhmyE2r3D%2Bp0CazhpIt23lI9F9XtM1NwgasqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDL7U0Ayj9Rin31PBircA3wiavx7djWIuDf%2Fju%2FCml62IuKBhhY56tBWqHoP1%2B6XsEnD1dKwYN53NVOfD10ToysIZP9IPNAjwDIrgUNr3wkhz0UWbW2TJeRk%2FcSq7ce%2FRQqEIIQje4ax%2FC1Unn8WadX%2B4amqEFVq%2B7FVrHre2slspnhp7HWHBGUjeGAaBIrEzrhz2xtlOZJRKB9JOxT%2F9GMiq%2BYRtuxPElk6bEEbFfAUhSTe%2Blbwd9chqLLOsGBz7qtEHARpX3u76kIOMWsneBM0ioD7%2FfByfs6XYhNEgVsmwOPoRALEJ95kxnJZ7ajwhLgcLCZm4pcAI5XnWDjQj9ZeiyLJTpKwLuFP%2FxgnTgsc5FKbcasamSJjBIDTZ4bljGqesCQjViFtv7crhc%2FLRXiq%2BNcogKvyQrUSTHWNs4pLQ%2B7C83biw5S861cdy4k3DHHtEDDlIbmN0kKkmLoxy%2Fw6ZA2yq6TsF7J2r9zTpJEzAVVVME%2FBpcguq%2BpKYvVfrI%2Bj2HXlis3gkJNBdGPpmvOI0YN82%2BFkAEjoYc6LtCrR4mPsqaINWxtMHBLqx3O5fAQPuCTxvkunR%2BzT8a8EGEU%2BNlgi%2B5l%2FrjU1lc%2FirqDjbpkJTRH8QTaR%2FdQxZBzlAsP3rz%2BxNLJg07ICMI2%2F4sQGOqUBgDQUz1Oz6TXoPoa1gUT7YnAshU2JQVOUtrCOFzQElQA3bdmT82HY5Ybqcs%2FfnlzJRU%2Br01QNxQq%2BMi48NCcsnk3dkkk19CTzISUiF%2BJwgFdy5tBcr0ZPpdy0sBXDG9uQcHLK8H1Q3ODEgjP9TLFYnHiXjr85f1321hYo67FhI7MIJooQOWUD0qd6A2YcPvpZgx1HLDcqyHz57Ha4qwjk2cN6HSKW&X-Amz-Signature=f17ac8ada5ae980a6ba05c06dedbef76e7303b47dd74181f0296e61921a95026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5MLLXT4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFfklzsAbtvIxmRa8RverfEmAGPQgKYBnofnKMRN421QIgO33JbZ7NlhmyE2r3D%2Bp0CazhpIt23lI9F9XtM1NwgasqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDL7U0Ayj9Rin31PBircA3wiavx7djWIuDf%2Fju%2FCml62IuKBhhY56tBWqHoP1%2B6XsEnD1dKwYN53NVOfD10ToysIZP9IPNAjwDIrgUNr3wkhz0UWbW2TJeRk%2FcSq7ce%2FRQqEIIQje4ax%2FC1Unn8WadX%2B4amqEFVq%2B7FVrHre2slspnhp7HWHBGUjeGAaBIrEzrhz2xtlOZJRKB9JOxT%2F9GMiq%2BYRtuxPElk6bEEbFfAUhSTe%2Blbwd9chqLLOsGBz7qtEHARpX3u76kIOMWsneBM0ioD7%2FfByfs6XYhNEgVsmwOPoRALEJ95kxnJZ7ajwhLgcLCZm4pcAI5XnWDjQj9ZeiyLJTpKwLuFP%2FxgnTgsc5FKbcasamSJjBIDTZ4bljGqesCQjViFtv7crhc%2FLRXiq%2BNcogKvyQrUSTHWNs4pLQ%2B7C83biw5S861cdy4k3DHHtEDDlIbmN0kKkmLoxy%2Fw6ZA2yq6TsF7J2r9zTpJEzAVVVME%2FBpcguq%2BpKYvVfrI%2Bj2HXlis3gkJNBdGPpmvOI0YN82%2BFkAEjoYc6LtCrR4mPsqaINWxtMHBLqx3O5fAQPuCTxvkunR%2BzT8a8EGEU%2BNlgi%2B5l%2FrjU1lc%2FirqDjbpkJTRH8QTaR%2FdQxZBzlAsP3rz%2BxNLJg07ICMI2%2F4sQGOqUBgDQUz1Oz6TXoPoa1gUT7YnAshU2JQVOUtrCOFzQElQA3bdmT82HY5Ybqcs%2FfnlzJRU%2Br01QNxQq%2BMi48NCcsnk3dkkk19CTzISUiF%2BJwgFdy5tBcr0ZPpdy0sBXDG9uQcHLK8H1Q3ODEgjP9TLFYnHiXjr85f1321hYo67FhI7MIJooQOWUD0qd6A2YcPvpZgx1HLDcqyHz57Ha4qwjk2cN6HSKW&X-Amz-Signature=bd68685cc7cfcd0a5d24e9977efc3244d6e6fd64a3f6c1cc87c23b3b45a29118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5MLLXT4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFfklzsAbtvIxmRa8RverfEmAGPQgKYBnofnKMRN421QIgO33JbZ7NlhmyE2r3D%2Bp0CazhpIt23lI9F9XtM1NwgasqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDL7U0Ayj9Rin31PBircA3wiavx7djWIuDf%2Fju%2FCml62IuKBhhY56tBWqHoP1%2B6XsEnD1dKwYN53NVOfD10ToysIZP9IPNAjwDIrgUNr3wkhz0UWbW2TJeRk%2FcSq7ce%2FRQqEIIQje4ax%2FC1Unn8WadX%2B4amqEFVq%2B7FVrHre2slspnhp7HWHBGUjeGAaBIrEzrhz2xtlOZJRKB9JOxT%2F9GMiq%2BYRtuxPElk6bEEbFfAUhSTe%2Blbwd9chqLLOsGBz7qtEHARpX3u76kIOMWsneBM0ioD7%2FfByfs6XYhNEgVsmwOPoRALEJ95kxnJZ7ajwhLgcLCZm4pcAI5XnWDjQj9ZeiyLJTpKwLuFP%2FxgnTgsc5FKbcasamSJjBIDTZ4bljGqesCQjViFtv7crhc%2FLRXiq%2BNcogKvyQrUSTHWNs4pLQ%2B7C83biw5S861cdy4k3DHHtEDDlIbmN0kKkmLoxy%2Fw6ZA2yq6TsF7J2r9zTpJEzAVVVME%2FBpcguq%2BpKYvVfrI%2Bj2HXlis3gkJNBdGPpmvOI0YN82%2BFkAEjoYc6LtCrR4mPsqaINWxtMHBLqx3O5fAQPuCTxvkunR%2BzT8a8EGEU%2BNlgi%2B5l%2FrjU1lc%2FirqDjbpkJTRH8QTaR%2FdQxZBzlAsP3rz%2BxNLJg07ICMI2%2F4sQGOqUBgDQUz1Oz6TXoPoa1gUT7YnAshU2JQVOUtrCOFzQElQA3bdmT82HY5Ybqcs%2FfnlzJRU%2Br01QNxQq%2BMi48NCcsnk3dkkk19CTzISUiF%2BJwgFdy5tBcr0ZPpdy0sBXDG9uQcHLK8H1Q3ODEgjP9TLFYnHiXjr85f1321hYo67FhI7MIJooQOWUD0qd6A2YcPvpZgx1HLDcqyHz57Ha4qwjk2cN6HSKW&X-Amz-Signature=21e5f4fcf6987e24fa970af8d61738fc3e8a02c0563ad254560153d96981404f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5MLLXT4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFfklzsAbtvIxmRa8RverfEmAGPQgKYBnofnKMRN421QIgO33JbZ7NlhmyE2r3D%2Bp0CazhpIt23lI9F9XtM1NwgasqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDL7U0Ayj9Rin31PBircA3wiavx7djWIuDf%2Fju%2FCml62IuKBhhY56tBWqHoP1%2B6XsEnD1dKwYN53NVOfD10ToysIZP9IPNAjwDIrgUNr3wkhz0UWbW2TJeRk%2FcSq7ce%2FRQqEIIQje4ax%2FC1Unn8WadX%2B4amqEFVq%2B7FVrHre2slspnhp7HWHBGUjeGAaBIrEzrhz2xtlOZJRKB9JOxT%2F9GMiq%2BYRtuxPElk6bEEbFfAUhSTe%2Blbwd9chqLLOsGBz7qtEHARpX3u76kIOMWsneBM0ioD7%2FfByfs6XYhNEgVsmwOPoRALEJ95kxnJZ7ajwhLgcLCZm4pcAI5XnWDjQj9ZeiyLJTpKwLuFP%2FxgnTgsc5FKbcasamSJjBIDTZ4bljGqesCQjViFtv7crhc%2FLRXiq%2BNcogKvyQrUSTHWNs4pLQ%2B7C83biw5S861cdy4k3DHHtEDDlIbmN0kKkmLoxy%2Fw6ZA2yq6TsF7J2r9zTpJEzAVVVME%2FBpcguq%2BpKYvVfrI%2Bj2HXlis3gkJNBdGPpmvOI0YN82%2BFkAEjoYc6LtCrR4mPsqaINWxtMHBLqx3O5fAQPuCTxvkunR%2BzT8a8EGEU%2BNlgi%2B5l%2FrjU1lc%2FirqDjbpkJTRH8QTaR%2FdQxZBzlAsP3rz%2BxNLJg07ICMI2%2F4sQGOqUBgDQUz1Oz6TXoPoa1gUT7YnAshU2JQVOUtrCOFzQElQA3bdmT82HY5Ybqcs%2FfnlzJRU%2Br01QNxQq%2BMi48NCcsnk3dkkk19CTzISUiF%2BJwgFdy5tBcr0ZPpdy0sBXDG9uQcHLK8H1Q3ODEgjP9TLFYnHiXjr85f1321hYo67FhI7MIJooQOWUD0qd6A2YcPvpZgx1HLDcqyHz57Ha4qwjk2cN6HSKW&X-Amz-Signature=097bf6487eac598584a9283863806cd59934a7b9bfa9de105f9badc5e6b1a877&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
