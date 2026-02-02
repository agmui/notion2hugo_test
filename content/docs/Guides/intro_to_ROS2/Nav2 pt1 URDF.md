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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DFWRSFZ%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIBxLFi9dJZsIiuiIU54aXvafpYw6VYeD%2BYM4YNNpxO2pAiBIy2%2FwTUHXvEyX30tWzHsXX3tPxBvteR79uUMMnR3riiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNrEuKN3V2FjQZWeEKtwDTlV%2BStwIETsxaLV2Hs8nj1qlcuZvmzcK06mzXfNkfmu1ErVeF7CHs6Y5O5OA53ICgWGVtniqBfBcoPH%2FXxrPPltobqZMEOKKCmZh6uepYPYsm2kZmSyiNAKpuqe5csp7ADr9divPOTeLRVMlX5l2mvkH%2BsdUuiAa%2BchupgPObF%2BtvfF5DWCQCjBSlFFy5ZcnDU5qFiAA9QEXHnEF7zEA0cPpa%2FFTzmnmT4W6br%2BobYArGvGACUTeb4q3UbniDCTdsvIYza43kFOt4Rhv%2Bqe1cUeEhV7Es6Dmi%2Bh650UogDRY91OgWyNq0mXXK03N0DRH3QpadcQ8IQIVpGsdil6VVZhkaB09p1YgTN4Wtzr2XXMcIUFCPHJqU3eYRpC46VQy%2FkgUovglK8sSm1hrSdlgnF4fUtpWT%2BieeKBFmt1NrrYFdK4%2BRTVu%2BAmgkmpg2GsfHO3nvQJGykZmTFNNuTJdSqD5NxD1HSHogBGTZCvf7OSlzW01WqBvtP89Fsb39ciZlO%2F7d5NIOessJ2MjVuzlis22CLV78BOLfrpFENbybi3ph%2BLT1kC2CbjEmoxb3gZT4YmLU7BLQY4IrpULnBsiQmz1YYkTbUxB2BCDGZ32iggGIBhBum9mjIVKgokw3oaAzAY6pgEUmB5hYrDLzt1bacO4IYfc2wcfTG36EDqeUNk4O48LWa%2BPsuDvjmirl52O%2BxLs6Xl53VNVTymCjWGqsIhbqNNlEwC0uA233s%2B0djQ8BYrRN%2FB8ovjtYKknrjtjP2gujDFzyS6TWb3lmwvK8M5gkoV7QpvrYPkJKt%2FINlmF1AVIShZNHDk1eFwhHnxxMk6%2Biuc6euxNoHyvKlgyXtoSaEZ3z7vwQpJF&X-Amz-Signature=791ff917e0f346bc09f4539b932f90263f42e7d257dc1d5dfeffb79574a233ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DFWRSFZ%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIBxLFi9dJZsIiuiIU54aXvafpYw6VYeD%2BYM4YNNpxO2pAiBIy2%2FwTUHXvEyX30tWzHsXX3tPxBvteR79uUMMnR3riiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNrEuKN3V2FjQZWeEKtwDTlV%2BStwIETsxaLV2Hs8nj1qlcuZvmzcK06mzXfNkfmu1ErVeF7CHs6Y5O5OA53ICgWGVtniqBfBcoPH%2FXxrPPltobqZMEOKKCmZh6uepYPYsm2kZmSyiNAKpuqe5csp7ADr9divPOTeLRVMlX5l2mvkH%2BsdUuiAa%2BchupgPObF%2BtvfF5DWCQCjBSlFFy5ZcnDU5qFiAA9QEXHnEF7zEA0cPpa%2FFTzmnmT4W6br%2BobYArGvGACUTeb4q3UbniDCTdsvIYza43kFOt4Rhv%2Bqe1cUeEhV7Es6Dmi%2Bh650UogDRY91OgWyNq0mXXK03N0DRH3QpadcQ8IQIVpGsdil6VVZhkaB09p1YgTN4Wtzr2XXMcIUFCPHJqU3eYRpC46VQy%2FkgUovglK8sSm1hrSdlgnF4fUtpWT%2BieeKBFmt1NrrYFdK4%2BRTVu%2BAmgkmpg2GsfHO3nvQJGykZmTFNNuTJdSqD5NxD1HSHogBGTZCvf7OSlzW01WqBvtP89Fsb39ciZlO%2F7d5NIOessJ2MjVuzlis22CLV78BOLfrpFENbybi3ph%2BLT1kC2CbjEmoxb3gZT4YmLU7BLQY4IrpULnBsiQmz1YYkTbUxB2BCDGZ32iggGIBhBum9mjIVKgokw3oaAzAY6pgEUmB5hYrDLzt1bacO4IYfc2wcfTG36EDqeUNk4O48LWa%2BPsuDvjmirl52O%2BxLs6Xl53VNVTymCjWGqsIhbqNNlEwC0uA233s%2B0djQ8BYrRN%2FB8ovjtYKknrjtjP2gujDFzyS6TWb3lmwvK8M5gkoV7QpvrYPkJKt%2FINlmF1AVIShZNHDk1eFwhHnxxMk6%2Biuc6euxNoHyvKlgyXtoSaEZ3z7vwQpJF&X-Amz-Signature=37bc69a7245c1c7250646fd1b19059cff3f7b8e4ed51ab98c29828fe09d704e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DFWRSFZ%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIBxLFi9dJZsIiuiIU54aXvafpYw6VYeD%2BYM4YNNpxO2pAiBIy2%2FwTUHXvEyX30tWzHsXX3tPxBvteR79uUMMnR3riiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNrEuKN3V2FjQZWeEKtwDTlV%2BStwIETsxaLV2Hs8nj1qlcuZvmzcK06mzXfNkfmu1ErVeF7CHs6Y5O5OA53ICgWGVtniqBfBcoPH%2FXxrPPltobqZMEOKKCmZh6uepYPYsm2kZmSyiNAKpuqe5csp7ADr9divPOTeLRVMlX5l2mvkH%2BsdUuiAa%2BchupgPObF%2BtvfF5DWCQCjBSlFFy5ZcnDU5qFiAA9QEXHnEF7zEA0cPpa%2FFTzmnmT4W6br%2BobYArGvGACUTeb4q3UbniDCTdsvIYza43kFOt4Rhv%2Bqe1cUeEhV7Es6Dmi%2Bh650UogDRY91OgWyNq0mXXK03N0DRH3QpadcQ8IQIVpGsdil6VVZhkaB09p1YgTN4Wtzr2XXMcIUFCPHJqU3eYRpC46VQy%2FkgUovglK8sSm1hrSdlgnF4fUtpWT%2BieeKBFmt1NrrYFdK4%2BRTVu%2BAmgkmpg2GsfHO3nvQJGykZmTFNNuTJdSqD5NxD1HSHogBGTZCvf7OSlzW01WqBvtP89Fsb39ciZlO%2F7d5NIOessJ2MjVuzlis22CLV78BOLfrpFENbybi3ph%2BLT1kC2CbjEmoxb3gZT4YmLU7BLQY4IrpULnBsiQmz1YYkTbUxB2BCDGZ32iggGIBhBum9mjIVKgokw3oaAzAY6pgEUmB5hYrDLzt1bacO4IYfc2wcfTG36EDqeUNk4O48LWa%2BPsuDvjmirl52O%2BxLs6Xl53VNVTymCjWGqsIhbqNNlEwC0uA233s%2B0djQ8BYrRN%2FB8ovjtYKknrjtjP2gujDFzyS6TWb3lmwvK8M5gkoV7QpvrYPkJKt%2FINlmF1AVIShZNHDk1eFwhHnxxMk6%2Biuc6euxNoHyvKlgyXtoSaEZ3z7vwQpJF&X-Amz-Signature=2f0aea526705bc4cc561023d880791ccfebc607fd5c4d2fe5b794692d0b12e05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DFWRSFZ%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIBxLFi9dJZsIiuiIU54aXvafpYw6VYeD%2BYM4YNNpxO2pAiBIy2%2FwTUHXvEyX30tWzHsXX3tPxBvteR79uUMMnR3riiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNrEuKN3V2FjQZWeEKtwDTlV%2BStwIETsxaLV2Hs8nj1qlcuZvmzcK06mzXfNkfmu1ErVeF7CHs6Y5O5OA53ICgWGVtniqBfBcoPH%2FXxrPPltobqZMEOKKCmZh6uepYPYsm2kZmSyiNAKpuqe5csp7ADr9divPOTeLRVMlX5l2mvkH%2BsdUuiAa%2BchupgPObF%2BtvfF5DWCQCjBSlFFy5ZcnDU5qFiAA9QEXHnEF7zEA0cPpa%2FFTzmnmT4W6br%2BobYArGvGACUTeb4q3UbniDCTdsvIYza43kFOt4Rhv%2Bqe1cUeEhV7Es6Dmi%2Bh650UogDRY91OgWyNq0mXXK03N0DRH3QpadcQ8IQIVpGsdil6VVZhkaB09p1YgTN4Wtzr2XXMcIUFCPHJqU3eYRpC46VQy%2FkgUovglK8sSm1hrSdlgnF4fUtpWT%2BieeKBFmt1NrrYFdK4%2BRTVu%2BAmgkmpg2GsfHO3nvQJGykZmTFNNuTJdSqD5NxD1HSHogBGTZCvf7OSlzW01WqBvtP89Fsb39ciZlO%2F7d5NIOessJ2MjVuzlis22CLV78BOLfrpFENbybi3ph%2BLT1kC2CbjEmoxb3gZT4YmLU7BLQY4IrpULnBsiQmz1YYkTbUxB2BCDGZ32iggGIBhBum9mjIVKgokw3oaAzAY6pgEUmB5hYrDLzt1bacO4IYfc2wcfTG36EDqeUNk4O48LWa%2BPsuDvjmirl52O%2BxLs6Xl53VNVTymCjWGqsIhbqNNlEwC0uA233s%2B0djQ8BYrRN%2FB8ovjtYKknrjtjP2gujDFzyS6TWb3lmwvK8M5gkoV7QpvrYPkJKt%2FINlmF1AVIShZNHDk1eFwhHnxxMk6%2Biuc6euxNoHyvKlgyXtoSaEZ3z7vwQpJF&X-Amz-Signature=f6a5ce7cdee6471cb63a2aaa702ad652dcad9635f97fcc6ac265c583d0ea025a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DFWRSFZ%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIBxLFi9dJZsIiuiIU54aXvafpYw6VYeD%2BYM4YNNpxO2pAiBIy2%2FwTUHXvEyX30tWzHsXX3tPxBvteR79uUMMnR3riiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNrEuKN3V2FjQZWeEKtwDTlV%2BStwIETsxaLV2Hs8nj1qlcuZvmzcK06mzXfNkfmu1ErVeF7CHs6Y5O5OA53ICgWGVtniqBfBcoPH%2FXxrPPltobqZMEOKKCmZh6uepYPYsm2kZmSyiNAKpuqe5csp7ADr9divPOTeLRVMlX5l2mvkH%2BsdUuiAa%2BchupgPObF%2BtvfF5DWCQCjBSlFFy5ZcnDU5qFiAA9QEXHnEF7zEA0cPpa%2FFTzmnmT4W6br%2BobYArGvGACUTeb4q3UbniDCTdsvIYza43kFOt4Rhv%2Bqe1cUeEhV7Es6Dmi%2Bh650UogDRY91OgWyNq0mXXK03N0DRH3QpadcQ8IQIVpGsdil6VVZhkaB09p1YgTN4Wtzr2XXMcIUFCPHJqU3eYRpC46VQy%2FkgUovglK8sSm1hrSdlgnF4fUtpWT%2BieeKBFmt1NrrYFdK4%2BRTVu%2BAmgkmpg2GsfHO3nvQJGykZmTFNNuTJdSqD5NxD1HSHogBGTZCvf7OSlzW01WqBvtP89Fsb39ciZlO%2F7d5NIOessJ2MjVuzlis22CLV78BOLfrpFENbybi3ph%2BLT1kC2CbjEmoxb3gZT4YmLU7BLQY4IrpULnBsiQmz1YYkTbUxB2BCDGZ32iggGIBhBum9mjIVKgokw3oaAzAY6pgEUmB5hYrDLzt1bacO4IYfc2wcfTG36EDqeUNk4O48LWa%2BPsuDvjmirl52O%2BxLs6Xl53VNVTymCjWGqsIhbqNNlEwC0uA233s%2B0djQ8BYrRN%2FB8ovjtYKknrjtjP2gujDFzyS6TWb3lmwvK8M5gkoV7QpvrYPkJKt%2FINlmF1AVIShZNHDk1eFwhHnxxMk6%2Biuc6euxNoHyvKlgyXtoSaEZ3z7vwQpJF&X-Amz-Signature=dc0382df150fd5a2170b6321127e5b41e2d17c14f5f8841cb9b6819f4b8fab33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DFWRSFZ%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIBxLFi9dJZsIiuiIU54aXvafpYw6VYeD%2BYM4YNNpxO2pAiBIy2%2FwTUHXvEyX30tWzHsXX3tPxBvteR79uUMMnR3riiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNrEuKN3V2FjQZWeEKtwDTlV%2BStwIETsxaLV2Hs8nj1qlcuZvmzcK06mzXfNkfmu1ErVeF7CHs6Y5O5OA53ICgWGVtniqBfBcoPH%2FXxrPPltobqZMEOKKCmZh6uepYPYsm2kZmSyiNAKpuqe5csp7ADr9divPOTeLRVMlX5l2mvkH%2BsdUuiAa%2BchupgPObF%2BtvfF5DWCQCjBSlFFy5ZcnDU5qFiAA9QEXHnEF7zEA0cPpa%2FFTzmnmT4W6br%2BobYArGvGACUTeb4q3UbniDCTdsvIYza43kFOt4Rhv%2Bqe1cUeEhV7Es6Dmi%2Bh650UogDRY91OgWyNq0mXXK03N0DRH3QpadcQ8IQIVpGsdil6VVZhkaB09p1YgTN4Wtzr2XXMcIUFCPHJqU3eYRpC46VQy%2FkgUovglK8sSm1hrSdlgnF4fUtpWT%2BieeKBFmt1NrrYFdK4%2BRTVu%2BAmgkmpg2GsfHO3nvQJGykZmTFNNuTJdSqD5NxD1HSHogBGTZCvf7OSlzW01WqBvtP89Fsb39ciZlO%2F7d5NIOessJ2MjVuzlis22CLV78BOLfrpFENbybi3ph%2BLT1kC2CbjEmoxb3gZT4YmLU7BLQY4IrpULnBsiQmz1YYkTbUxB2BCDGZ32iggGIBhBum9mjIVKgokw3oaAzAY6pgEUmB5hYrDLzt1bacO4IYfc2wcfTG36EDqeUNk4O48LWa%2BPsuDvjmirl52O%2BxLs6Xl53VNVTymCjWGqsIhbqNNlEwC0uA233s%2B0djQ8BYrRN%2FB8ovjtYKknrjtjP2gujDFzyS6TWb3lmwvK8M5gkoV7QpvrYPkJKt%2FINlmF1AVIShZNHDk1eFwhHnxxMk6%2Biuc6euxNoHyvKlgyXtoSaEZ3z7vwQpJF&X-Amz-Signature=beecde2c9f6678fe521fcf1afc2a31141da5bca99b652de64f23c21015b26e41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DFWRSFZ%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIBxLFi9dJZsIiuiIU54aXvafpYw6VYeD%2BYM4YNNpxO2pAiBIy2%2FwTUHXvEyX30tWzHsXX3tPxBvteR79uUMMnR3riiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNrEuKN3V2FjQZWeEKtwDTlV%2BStwIETsxaLV2Hs8nj1qlcuZvmzcK06mzXfNkfmu1ErVeF7CHs6Y5O5OA53ICgWGVtniqBfBcoPH%2FXxrPPltobqZMEOKKCmZh6uepYPYsm2kZmSyiNAKpuqe5csp7ADr9divPOTeLRVMlX5l2mvkH%2BsdUuiAa%2BchupgPObF%2BtvfF5DWCQCjBSlFFy5ZcnDU5qFiAA9QEXHnEF7zEA0cPpa%2FFTzmnmT4W6br%2BobYArGvGACUTeb4q3UbniDCTdsvIYza43kFOt4Rhv%2Bqe1cUeEhV7Es6Dmi%2Bh650UogDRY91OgWyNq0mXXK03N0DRH3QpadcQ8IQIVpGsdil6VVZhkaB09p1YgTN4Wtzr2XXMcIUFCPHJqU3eYRpC46VQy%2FkgUovglK8sSm1hrSdlgnF4fUtpWT%2BieeKBFmt1NrrYFdK4%2BRTVu%2BAmgkmpg2GsfHO3nvQJGykZmTFNNuTJdSqD5NxD1HSHogBGTZCvf7OSlzW01WqBvtP89Fsb39ciZlO%2F7d5NIOessJ2MjVuzlis22CLV78BOLfrpFENbybi3ph%2BLT1kC2CbjEmoxb3gZT4YmLU7BLQY4IrpULnBsiQmz1YYkTbUxB2BCDGZ32iggGIBhBum9mjIVKgokw3oaAzAY6pgEUmB5hYrDLzt1bacO4IYfc2wcfTG36EDqeUNk4O48LWa%2BPsuDvjmirl52O%2BxLs6Xl53VNVTymCjWGqsIhbqNNlEwC0uA233s%2B0djQ8BYrRN%2FB8ovjtYKknrjtjP2gujDFzyS6TWb3lmwvK8M5gkoV7QpvrYPkJKt%2FINlmF1AVIShZNHDk1eFwhHnxxMk6%2Biuc6euxNoHyvKlgyXtoSaEZ3z7vwQpJF&X-Amz-Signature=1f1b74b7ec66fdc03b7c45cac244190a2b44a791d1a59eec12ea52e367391cdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DFWRSFZ%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIBxLFi9dJZsIiuiIU54aXvafpYw6VYeD%2BYM4YNNpxO2pAiBIy2%2FwTUHXvEyX30tWzHsXX3tPxBvteR79uUMMnR3riiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNrEuKN3V2FjQZWeEKtwDTlV%2BStwIETsxaLV2Hs8nj1qlcuZvmzcK06mzXfNkfmu1ErVeF7CHs6Y5O5OA53ICgWGVtniqBfBcoPH%2FXxrPPltobqZMEOKKCmZh6uepYPYsm2kZmSyiNAKpuqe5csp7ADr9divPOTeLRVMlX5l2mvkH%2BsdUuiAa%2BchupgPObF%2BtvfF5DWCQCjBSlFFy5ZcnDU5qFiAA9QEXHnEF7zEA0cPpa%2FFTzmnmT4W6br%2BobYArGvGACUTeb4q3UbniDCTdsvIYza43kFOt4Rhv%2Bqe1cUeEhV7Es6Dmi%2Bh650UogDRY91OgWyNq0mXXK03N0DRH3QpadcQ8IQIVpGsdil6VVZhkaB09p1YgTN4Wtzr2XXMcIUFCPHJqU3eYRpC46VQy%2FkgUovglK8sSm1hrSdlgnF4fUtpWT%2BieeKBFmt1NrrYFdK4%2BRTVu%2BAmgkmpg2GsfHO3nvQJGykZmTFNNuTJdSqD5NxD1HSHogBGTZCvf7OSlzW01WqBvtP89Fsb39ciZlO%2F7d5NIOessJ2MjVuzlis22CLV78BOLfrpFENbybi3ph%2BLT1kC2CbjEmoxb3gZT4YmLU7BLQY4IrpULnBsiQmz1YYkTbUxB2BCDGZ32iggGIBhBum9mjIVKgokw3oaAzAY6pgEUmB5hYrDLzt1bacO4IYfc2wcfTG36EDqeUNk4O48LWa%2BPsuDvjmirl52O%2BxLs6Xl53VNVTymCjWGqsIhbqNNlEwC0uA233s%2B0djQ8BYrRN%2FB8ovjtYKknrjtjP2gujDFzyS6TWb3lmwvK8M5gkoV7QpvrYPkJKt%2FINlmF1AVIShZNHDk1eFwhHnxxMk6%2Biuc6euxNoHyvKlgyXtoSaEZ3z7vwQpJF&X-Amz-Signature=0efb3ac007f64dfce8f47100464a60206a9dd6d3fbd2b7cc21759074067cc8ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DFWRSFZ%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIBxLFi9dJZsIiuiIU54aXvafpYw6VYeD%2BYM4YNNpxO2pAiBIy2%2FwTUHXvEyX30tWzHsXX3tPxBvteR79uUMMnR3riiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNrEuKN3V2FjQZWeEKtwDTlV%2BStwIETsxaLV2Hs8nj1qlcuZvmzcK06mzXfNkfmu1ErVeF7CHs6Y5O5OA53ICgWGVtniqBfBcoPH%2FXxrPPltobqZMEOKKCmZh6uepYPYsm2kZmSyiNAKpuqe5csp7ADr9divPOTeLRVMlX5l2mvkH%2BsdUuiAa%2BchupgPObF%2BtvfF5DWCQCjBSlFFy5ZcnDU5qFiAA9QEXHnEF7zEA0cPpa%2FFTzmnmT4W6br%2BobYArGvGACUTeb4q3UbniDCTdsvIYza43kFOt4Rhv%2Bqe1cUeEhV7Es6Dmi%2Bh650UogDRY91OgWyNq0mXXK03N0DRH3QpadcQ8IQIVpGsdil6VVZhkaB09p1YgTN4Wtzr2XXMcIUFCPHJqU3eYRpC46VQy%2FkgUovglK8sSm1hrSdlgnF4fUtpWT%2BieeKBFmt1NrrYFdK4%2BRTVu%2BAmgkmpg2GsfHO3nvQJGykZmTFNNuTJdSqD5NxD1HSHogBGTZCvf7OSlzW01WqBvtP89Fsb39ciZlO%2F7d5NIOessJ2MjVuzlis22CLV78BOLfrpFENbybi3ph%2BLT1kC2CbjEmoxb3gZT4YmLU7BLQY4IrpULnBsiQmz1YYkTbUxB2BCDGZ32iggGIBhBum9mjIVKgokw3oaAzAY6pgEUmB5hYrDLzt1bacO4IYfc2wcfTG36EDqeUNk4O48LWa%2BPsuDvjmirl52O%2BxLs6Xl53VNVTymCjWGqsIhbqNNlEwC0uA233s%2B0djQ8BYrRN%2FB8ovjtYKknrjtjP2gujDFzyS6TWb3lmwvK8M5gkoV7QpvrYPkJKt%2FINlmF1AVIShZNHDk1eFwhHnxxMk6%2Biuc6euxNoHyvKlgyXtoSaEZ3z7vwQpJF&X-Amz-Signature=afe24c72b020bf34ed8deab0834eee825ae0f408e48101f3e19f67ecd46dbb34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DFWRSFZ%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIBxLFi9dJZsIiuiIU54aXvafpYw6VYeD%2BYM4YNNpxO2pAiBIy2%2FwTUHXvEyX30tWzHsXX3tPxBvteR79uUMMnR3riiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNrEuKN3V2FjQZWeEKtwDTlV%2BStwIETsxaLV2Hs8nj1qlcuZvmzcK06mzXfNkfmu1ErVeF7CHs6Y5O5OA53ICgWGVtniqBfBcoPH%2FXxrPPltobqZMEOKKCmZh6uepYPYsm2kZmSyiNAKpuqe5csp7ADr9divPOTeLRVMlX5l2mvkH%2BsdUuiAa%2BchupgPObF%2BtvfF5DWCQCjBSlFFy5ZcnDU5qFiAA9QEXHnEF7zEA0cPpa%2FFTzmnmT4W6br%2BobYArGvGACUTeb4q3UbniDCTdsvIYza43kFOt4Rhv%2Bqe1cUeEhV7Es6Dmi%2Bh650UogDRY91OgWyNq0mXXK03N0DRH3QpadcQ8IQIVpGsdil6VVZhkaB09p1YgTN4Wtzr2XXMcIUFCPHJqU3eYRpC46VQy%2FkgUovglK8sSm1hrSdlgnF4fUtpWT%2BieeKBFmt1NrrYFdK4%2BRTVu%2BAmgkmpg2GsfHO3nvQJGykZmTFNNuTJdSqD5NxD1HSHogBGTZCvf7OSlzW01WqBvtP89Fsb39ciZlO%2F7d5NIOessJ2MjVuzlis22CLV78BOLfrpFENbybi3ph%2BLT1kC2CbjEmoxb3gZT4YmLU7BLQY4IrpULnBsiQmz1YYkTbUxB2BCDGZ32iggGIBhBum9mjIVKgokw3oaAzAY6pgEUmB5hYrDLzt1bacO4IYfc2wcfTG36EDqeUNk4O48LWa%2BPsuDvjmirl52O%2BxLs6Xl53VNVTymCjWGqsIhbqNNlEwC0uA233s%2B0djQ8BYrRN%2FB8ovjtYKknrjtjP2gujDFzyS6TWb3lmwvK8M5gkoV7QpvrYPkJKt%2FINlmF1AVIShZNHDk1eFwhHnxxMk6%2Biuc6euxNoHyvKlgyXtoSaEZ3z7vwQpJF&X-Amz-Signature=4ab072b50476e3f1d714288cc8c146411cfdbc578254ee6c51b5a8fb108b68e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHQE7V66%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCRj6UxNZ%2BuXzYQnwLqgFdz4E0tLF7nCMgCUW73na34eQIgd8X35uMwRo9TFzS1qDK%2FrrvvUHFLGQ%2BOphdK5XCSLC8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2Fc3PE4zpc0grDcnircA8iXXkmIpIETWb7PgW6jmgYcO%2F4mF9AJyW%2BiPIl1A1PX%2BouKS%2Fy0sH8oVR%2FwDPXJSqjWdRXVndHAn2mZKzUuu2npnh62jqdGAfRX5harw8v1Bn1apfOV1x0%2BubVbj%2BUNyMphQSC3rG5mrKakcr4afIo0Y1bDgNa9ZHuvM8t1v4qdOOzjamHnUxIo6f9O4Ij2yCowgi6Di2z3v%2FZDmrVpYKhDa5B8TQD5fgZ%2FGwFHvTEEg%2B9t39LutSmTMZaTKOnG7HvI6HtZOq6ujY5hCp25oFpOzpSry5FAJ1yQxOHlw07H663b3YVon2MXEGS7BCQcOszPzym58ZYV4WLstlSFROUvov2fXT%2FPBCBGT7qdiOXZVVZzzrTj1DFqOtpWZiQIAD7LI5GGVr%2BKtUeoPIv4bdv36DRpedgZN4oXjt9Uo%2BFPboX8v8R9h7ne3%2B8YH0KgOfPhT8u1L5O8nD8Wt7cID0DATFtUYefA8wdf3Ont%2Ff9YY8O5irZSjoohiIlr3nltgvDR28uD7vJNiGwzexTP6WVtJznax8cE%2FZdZ31pUu3MkduPWkjD1kZ%2Bw5oImVLUpDLabHo899250K12WfLM961g3HL%2FrsoTE5RW%2BRUdd%2Fq%2FgkYb9kmSs8rGthCZxMNCGgMwGOqUBTHnoAit4Pu5HppbNfvhT2QG1XwJs4inJeM7FIpIaOR7Ogt5kwoWLePqGpZKSNOxu8UCX1TlkvL6LT29wmxz2sYV1eXzCjwvPnwlN%2FWhh2zYC6ceH3R4otBzXRvJLNcoMCjkOmrF4RYDPS7rR8W77BCUw%2FjCcG5jHqbalqgAD15I2GJjyhFzYwaYAHjbvTQlPr99klm19Q1QOqvZnp%2FV%2BKK%2F8ZYXa&X-Amz-Signature=8f9abe54ad0d4b8d77e840437286c5acc0c1ad45eb85859bf67a808eb17e03c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FKPXOV6%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIFkQaRkMV15TfAsK2byD05wuiS6tV2rEmfsROnEwAhlCAiAoVWulUmzb%2F%2BY4gqZIyzUKO4IJRxixXPZO6egIXuFQ%2FiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoAGYUNEdSUhsGXNzKtwDnpDbPjgVetNVr89OD8aN4RUR3vGB19IjB5cVLmTAveA9wA9dq6eKcrjBHY2ry66MdAh0vM%2BwfLJLo6RGpsPFP3x%2FVfpw4vNxTABfWyB%2BEU0AIwYoRizOAeLtMEHlX94%2B9a4%2FX2sI%2BZ7Ti8GJtMnX8AgpgRD0is%2F%2BCgqlbx6kr25mijT0LlZnRWbdi5bJIFfSfcDSoAZLLX3udTuWm9IuRrCLcUQhqliitW9SV%2FhQUfkjAz6yr7fehma%2F2ReIrfouoloLVCTcjXDNQJjP0RKiHHlpBmUak%2FNKyNq4Vlp2EKpJ785VZVUj9lzWxeOlUsTR%2B%2Fz8k2xsXBz31HrEhDBXDpsTcdH9gS2AuvGSK4E%2Bxw5CZktnsG6uu6e8yuPAtlIVtX5qmFpjiUzCOXGPLLzyINKEXzrdUinSl2cx2m1uFHvfyTSI9wnAyl3a7r8%2BYWipNY%2FLfghIZug6%2BqBdolD5sMQzgFP%2F4faoZfTMMxh4pQ0t0boPsOy2M%2F4096qLKSsk8qmuhuJ7mBZvCWTpa1cwCCgLeC7Ny32fKJPFnd4uhzl9nzH9bhZJs13b9dWS6G1S9AaLO9U5wXOP7oDCSbaEXBNXzw3Nz3TLgDN%2Bv7lTUrd6ioZUIKfBcIh%2F8TMwzYaAzAY6pgHYVhI9gUoG0VOVIMKosOkZjoOzYMRASnngDraYuMOzKFqTnua0aOs840HUXwjjXrDWvww4Ecz57khIfUPlOWQqYCYsXIjAaCm9ZVCNbBW6NIemroyzeSZNHT7020UTnj9leqGuo9lYEN8OPddVXGql4IRsg6lBxR77GPFgiIeSZosh7ZJh5hh%2B43Wtk8BmiPiqB%2FPcS0XxQyP4miX8sjsMbb0bgjUU&X-Amz-Signature=6fcc5afa8780f834134c5dbc8fa2bcd7d89a188d6485a54656ade7dc5de28ee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BKTVWRV%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIHNgIeG8xG%2BM0Yfan2UoSU0hUYmnmB9ZLLDPqeaAWrTuAiAWhghLBT4hKonB%2F3Wh5MBkK4E6VbMOy53KvN3r%2FwxTZCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgCHnsekjklxhnpR2KtwDgknjsW6odH0Em0oBuNBDgB6NbQ0CwYnJ5QPuSM448K7GWQ5v%2Fo4ECjlKQUYXo7zrtJxkswLHsFdbyxhqWMIp9fX%2BLNRqOb2PwQHt17KFTEHfjeBWWh8m0JE2jIhT4dm0kJerJVIUDisMEmeCHofRaVcnhb4tMGqMWRya5e7ycGndd55rt17m1riGehym9CgXaqS%2FMUUPvOxa6t9I%2FD4KfN%2BHaVoypP52pMpCXkHmA6p1cwhhRaA8z%2FQBZK5zMJ4evAGSOvXTBOae1KOpvgBuKIY6aCULZgyGhEIZ9VANSUdHS0N%2BsWSCFopy7YhgaXEtBCXrC45uLch8N53V3dTBN0h6utA54YKJxLg7boLNDhsUhSv%2FHytSt06K3fSql22npXK5jRIkMRjVV7e7NoH46CUEKFhYwVJxlFDkqxUDoVyuuvVVJFPCYRc%2BTP7%2BDjcjvBNgxI17Sugp0v%2FzXTuRHvwUiuGeMhxrn6f57JS5tDLH2UtVOSru3hRhUyD3LeRH5wNE7gaEUCBbPx8HyECfUqh2Xk8SHVV59r2xEEI8tQXxTSYvQYc%2B3YE2GREwDoLX5cubOrD44o4U2zk%2FW9vopQLkyL7cQetTuMpznkBgnQ4kb5b0B%2Fmh50TNFLow4IiAzAY6pgEqNdyWkS3Df33%2BJOUl5v3Rro32D1bmBtnJ1me0ATDaKQjiEstOQvN6EFefN7P9%2Fzc37TKVEgyfyv1BZO097ukcYRdaSer9FBjDCcBQmoTrUWpIRjF0luENGNUH906xQ9GxZOReZzR8U71LGZbh9f8JfeaxjwzQUxXP6GxYx2Iwu2EQuwoYMr2ahlyBzGHR5eh3oqxHk8ax3IrFJy4k%2BF3CJBKwGVEZ&X-Amz-Signature=680af4dfe8e1db6d558120c9f7f529e81098f7faab594744a626afd3cceab9bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DFWRSFZ%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIBxLFi9dJZsIiuiIU54aXvafpYw6VYeD%2BYM4YNNpxO2pAiBIy2%2FwTUHXvEyX30tWzHsXX3tPxBvteR79uUMMnR3riiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNrEuKN3V2FjQZWeEKtwDTlV%2BStwIETsxaLV2Hs8nj1qlcuZvmzcK06mzXfNkfmu1ErVeF7CHs6Y5O5OA53ICgWGVtniqBfBcoPH%2FXxrPPltobqZMEOKKCmZh6uepYPYsm2kZmSyiNAKpuqe5csp7ADr9divPOTeLRVMlX5l2mvkH%2BsdUuiAa%2BchupgPObF%2BtvfF5DWCQCjBSlFFy5ZcnDU5qFiAA9QEXHnEF7zEA0cPpa%2FFTzmnmT4W6br%2BobYArGvGACUTeb4q3UbniDCTdsvIYza43kFOt4Rhv%2Bqe1cUeEhV7Es6Dmi%2Bh650UogDRY91OgWyNq0mXXK03N0DRH3QpadcQ8IQIVpGsdil6VVZhkaB09p1YgTN4Wtzr2XXMcIUFCPHJqU3eYRpC46VQy%2FkgUovglK8sSm1hrSdlgnF4fUtpWT%2BieeKBFmt1NrrYFdK4%2BRTVu%2BAmgkmpg2GsfHO3nvQJGykZmTFNNuTJdSqD5NxD1HSHogBGTZCvf7OSlzW01WqBvtP89Fsb39ciZlO%2F7d5NIOessJ2MjVuzlis22CLV78BOLfrpFENbybi3ph%2BLT1kC2CbjEmoxb3gZT4YmLU7BLQY4IrpULnBsiQmz1YYkTbUxB2BCDGZ32iggGIBhBum9mjIVKgokw3oaAzAY6pgEUmB5hYrDLzt1bacO4IYfc2wcfTG36EDqeUNk4O48LWa%2BPsuDvjmirl52O%2BxLs6Xl53VNVTymCjWGqsIhbqNNlEwC0uA233s%2B0djQ8BYrRN%2FB8ovjtYKknrjtjP2gujDFzyS6TWb3lmwvK8M5gkoV7QpvrYPkJKt%2FINlmF1AVIShZNHDk1eFwhHnxxMk6%2Biuc6euxNoHyvKlgyXtoSaEZ3z7vwQpJF&X-Amz-Signature=f0617b3a49a3ff91d6c30051c2b4326bc33fe49bca50d967a9c554aab7003305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7GGVOC7%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIGy%2Fwzjx%2B%2BmP1KahlAsfMmrbgPipfOD0ZRxO21uH7l7LAiAsw2lIzz1i9Vvmt0zeTyG8yBNCePO5y3gWsj1vrVHkkCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BFM5K%2BhN%2Bru0LGWsKtwDWCEpaoxjXibM522qkuUVIUczFAptiHxdOfW38oL1MfJIN4UpLrpVTjhZWiVQ650i9ZSoAde2MDaGxHwo81AyxupNpVUeQO5aNUcvGjd%2FoltJm6ShczRy4aYfzonob7K0%2F%2FRRf7C9ey9ey%2FawSro%2BQkygapEqwi0WI56f%2BA%2BphWDvt7636wr63HUb%2FHGXhy7zRBjV8m7tszRq3YI6la0zwKc1Vd4Ng25NNNWTUoEMTRLzb%2B%2FQ1eWK0od7EsScrI1oPOB8GhLU%2B1Jxcbh2lE1Ah0Ey8rCWICTln3mDiu4bGBceMcvgvGTVJClfwWhF5osRX2Blc4Lx8aHh55DbkIcDWLe1nzlfgn0Jy6NUCtAkNUBEVAIcvkOZGfcPoS1bRo%2BdfDKCHJN5kEps07Y061ONgZeo8%2FBbWMb7NXMhcPOjmkiHJChdFCL1gE%2BBAjrjdjfl7hNJzPRJOR9rhtr8MltRz%2BqSHaI3f2m%2F7Zvj3l5w2va0iCRJsK0SNadEuw0uqKFoQAGTdBxq0ltlBmbr4ofT5kAbs2RoU%2Fke5oV6zdkHW6mlIi%2FxSfMnPuWPTeyhHaoIqPwvvnd3VXN%2F%2BdLxwtTEy3GOOBtPyMI4w%2BoDGST03qOkf2vxTUHu9m1e6tkw34eAzAY6pgEWxtMo4G2TAA1a%2FivURhPiwjXwM%2BQC%2Fi6qJK98%2BvvMF9HdvpYDFY%2BXKEad0eIeRGGPIDnsNvzisL1S01WeJ8EIePRMQ%2FxcTXpJILTS3oUmPWCjXPTsxzgv2jXD3ecUiGW1aQlMvXae%2FVkanQIWYHuJ%2F9SK1t1c4DdZAqTaUbMLi%2F4u9wVeEpc59gigGCXbLBuGayz2GiuRd67jrpZfqIWvoHjXIf5q&X-Amz-Signature=f1eebadf3498332db81d294654c908ac3ca0b7aab1983006dd45f8e140b6cbe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DFWRSFZ%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIBxLFi9dJZsIiuiIU54aXvafpYw6VYeD%2BYM4YNNpxO2pAiBIy2%2FwTUHXvEyX30tWzHsXX3tPxBvteR79uUMMnR3riiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNrEuKN3V2FjQZWeEKtwDTlV%2BStwIETsxaLV2Hs8nj1qlcuZvmzcK06mzXfNkfmu1ErVeF7CHs6Y5O5OA53ICgWGVtniqBfBcoPH%2FXxrPPltobqZMEOKKCmZh6uepYPYsm2kZmSyiNAKpuqe5csp7ADr9divPOTeLRVMlX5l2mvkH%2BsdUuiAa%2BchupgPObF%2BtvfF5DWCQCjBSlFFy5ZcnDU5qFiAA9QEXHnEF7zEA0cPpa%2FFTzmnmT4W6br%2BobYArGvGACUTeb4q3UbniDCTdsvIYza43kFOt4Rhv%2Bqe1cUeEhV7Es6Dmi%2Bh650UogDRY91OgWyNq0mXXK03N0DRH3QpadcQ8IQIVpGsdil6VVZhkaB09p1YgTN4Wtzr2XXMcIUFCPHJqU3eYRpC46VQy%2FkgUovglK8sSm1hrSdlgnF4fUtpWT%2BieeKBFmt1NrrYFdK4%2BRTVu%2BAmgkmpg2GsfHO3nvQJGykZmTFNNuTJdSqD5NxD1HSHogBGTZCvf7OSlzW01WqBvtP89Fsb39ciZlO%2F7d5NIOessJ2MjVuzlis22CLV78BOLfrpFENbybi3ph%2BLT1kC2CbjEmoxb3gZT4YmLU7BLQY4IrpULnBsiQmz1YYkTbUxB2BCDGZ32iggGIBhBum9mjIVKgokw3oaAzAY6pgEUmB5hYrDLzt1bacO4IYfc2wcfTG36EDqeUNk4O48LWa%2BPsuDvjmirl52O%2BxLs6Xl53VNVTymCjWGqsIhbqNNlEwC0uA233s%2B0djQ8BYrRN%2FB8ovjtYKknrjtjP2gujDFzyS6TWb3lmwvK8M5gkoV7QpvrYPkJKt%2FINlmF1AVIShZNHDk1eFwhHnxxMk6%2Biuc6euxNoHyvKlgyXtoSaEZ3z7vwQpJF&X-Amz-Signature=ff19c0578eacc0b6b9d5f683dc82566c090915c21b4da399343f20a75bd9632b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JX2TLHI%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDkY%2FYG2O8PkvtFnc1Us6NlRzHxKkZ1opNKUOyhGjaUAAIgYKMd1YJQl6%2FpCMacdYVB2qBj3J6Ehw8y%2BplMfOaehCQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJco1U2pc9%2FzMBhLQircA2ltPm9OVnsBwwe2CZmbEyPxPnJO8TMlvuQz%2Fq95GeGowb7tGczsjLOeYTcFWtwjI2NxAVmiqq2Tu%2F2knskFzRbWdLfaAITZgBj0J17w7oXSbdPIkLwNYORCE9ZAhHC%2FwI2sF5bqd7HHjw9wK3HmbgQyBACSSEJOOPOvZhEsTA8hxXP2m8eIZSdyyZYL7tzTCP1MbYa%2Bz%2BWzUB3%2BV3eoU7PtttIVBw6I6OA1y3OoAnYfEi8vIlDScRbQ90OXyGcY%2B%2FZTJqn269zTjn3qIuDyLI8P4Whi6yCeY6wzNbexhQsjV7DlHnW03qkIGCHL6J7B%2BTcdiWuAvOlzzP%2B%2FoHdV2RX8VkRn8UBWb90RAauVxT%2FkCb6jW0oJqvRp50%2Fy4Bki4nlDuuBxlzVJna0wpOvnaoRbg8XY%2FAccXGrQTwyA4msvy0YUbqoQAgRF0m69%2FGj5TfxrPmnbY0Jh0ulkCEzlQj5dIm6H%2FkhpdofrxQ3e9obSYvJ6ElkYBSYtDIbLtAoajtPUyq%2BfKKUjyutym3ngWcqlQgeK3sti%2FqFLAJo2iKbYAmh2Zft3Jy5DNGO5ja2au0ZxOKY%2BxLJ6acsmRGRI%2BMweVpOTtRe9HPcQyK%2Bdww5qtx6IxnTMW0MOa81mMN%2BHgMwGOqUB%2BEECGH7EcUgDjhqictMa10FcRa6Ie%2BoPBZjPCWxprSTnaXTg6Z3Uw4tZlR9JQ4pk0%2FLp0SblvlVOlToymOrUmfkSG4hbEZzIvc6ZRbGZxWVxHCV4qzvD3DVIlstGFOCN8Z2fo55Ryjh8FUphEqqvp%2FOlCM%2FOb9EvfMEEuGIo3f5z7xwrm0f2a7wYaZYwJA1u2JpDKNHf7SsvW0VqwI4DP8uS3ECt&X-Amz-Signature=8d05000596b0b81ed5440485e6719b6afa546fff297f4601610b343b3a846570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DFWRSFZ%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIBxLFi9dJZsIiuiIU54aXvafpYw6VYeD%2BYM4YNNpxO2pAiBIy2%2FwTUHXvEyX30tWzHsXX3tPxBvteR79uUMMnR3riiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNrEuKN3V2FjQZWeEKtwDTlV%2BStwIETsxaLV2Hs8nj1qlcuZvmzcK06mzXfNkfmu1ErVeF7CHs6Y5O5OA53ICgWGVtniqBfBcoPH%2FXxrPPltobqZMEOKKCmZh6uepYPYsm2kZmSyiNAKpuqe5csp7ADr9divPOTeLRVMlX5l2mvkH%2BsdUuiAa%2BchupgPObF%2BtvfF5DWCQCjBSlFFy5ZcnDU5qFiAA9QEXHnEF7zEA0cPpa%2FFTzmnmT4W6br%2BobYArGvGACUTeb4q3UbniDCTdsvIYza43kFOt4Rhv%2Bqe1cUeEhV7Es6Dmi%2Bh650UogDRY91OgWyNq0mXXK03N0DRH3QpadcQ8IQIVpGsdil6VVZhkaB09p1YgTN4Wtzr2XXMcIUFCPHJqU3eYRpC46VQy%2FkgUovglK8sSm1hrSdlgnF4fUtpWT%2BieeKBFmt1NrrYFdK4%2BRTVu%2BAmgkmpg2GsfHO3nvQJGykZmTFNNuTJdSqD5NxD1HSHogBGTZCvf7OSlzW01WqBvtP89Fsb39ciZlO%2F7d5NIOessJ2MjVuzlis22CLV78BOLfrpFENbybi3ph%2BLT1kC2CbjEmoxb3gZT4YmLU7BLQY4IrpULnBsiQmz1YYkTbUxB2BCDGZ32iggGIBhBum9mjIVKgokw3oaAzAY6pgEUmB5hYrDLzt1bacO4IYfc2wcfTG36EDqeUNk4O48LWa%2BPsuDvjmirl52O%2BxLs6Xl53VNVTymCjWGqsIhbqNNlEwC0uA233s%2B0djQ8BYrRN%2FB8ovjtYKknrjtjP2gujDFzyS6TWb3lmwvK8M5gkoV7QpvrYPkJKt%2FINlmF1AVIShZNHDk1eFwhHnxxMk6%2Biuc6euxNoHyvKlgyXtoSaEZ3z7vwQpJF&X-Amz-Signature=f5a73130fbefffe4b7c7ea17e3334bb46c05f5e6b79a9883f565d0f972c187dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7ZSK264%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBtZybw%2FHTCRQkdYiv0cKfxCJIYe2BWnOGFbzvjvb7yEAiEA6zuhi2Uc1WiBRxjVW9gVyGjwnNeEZbliw%2FpoKopt%2FhUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNA%2Bq%2FxdciMyib0VLCrcA60J1GK5AmG3MwajevCnI6V9OF4IxGlaX8zdIyRsQOieUp0ROUg8nEatd9FcRNzEE9paPwkrX3v1DTj5UlzTY93QlSupXp4AYURITCM7bGLj9Mau4I2QDTv8Pkpk3a6TcPFsgISu5t8L4i%2FwMhsdY0jca6t%2BZJE0EhnTGjjWTa4U%2BkZGs8SspCBzPtfmHwmRJGS2eSFRPL5hwzT55VnhUa5sjszidog8%2FHITZAqbxLApR9uTaGrD1RAA3AVUH9zfJ%2FWi34EB51Pe69xeunE1uO2g%2Ba4gaEAbX6lhjBUiiaQA6y590L042AIgiKA9RsTdrSrxlDCnjam8b8oAfWjrL4DvYnvLRalqRxR693MXxTS%2FcX9D6LiiQ5g0W%2BVpR4UO1nvFbMmcHR6e4tV9sZuiGq%2B4NAaguzCdVeXpTt4ADs5jw7qTaL%2F0bnTnMK%2BQiTjb53V8KWajHoDFdwvKtux7UdtlguJjVnpeCFhUUe%2FCWSi7%2F3cVREHFywA8REGTrFuxEdwP1nPpq42ZlwnFzA1ma09ABN3EZztKCcgoV7KkDZC27Pk6N0qn2h0Mya4CXWqnLNZDHmdx9Qny1V%2FGpJl7y0qmTq9gVfwhxFBuamizYYVeXyhIOPW7MMn4R60mMOGHgMwGOqUBg4C2J53py9Q8CLocgpaAX6cA3AYhndlPDb%2FHRiWpdVaY1Ziivc3Aq3nRuXtQaci6qIg16slo2MEi2daCaZmELIOVTMgWPKlaQON6gy2RzvpyWdPP5sWmRkU7ZFO1An3rXPmYCGFygmE4bftRca9yq7VMRMCAscFtacvhaKMKZqpjhoFmMmDIGsy2weLl2KzmCAOR3ieWM6hE4BQUSt6p9im7uWHU&X-Amz-Signature=38fadabb514368f9ea1207fde8e62c997f11c3d3ac989b3e6edadfb9b689e212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DFWRSFZ%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIBxLFi9dJZsIiuiIU54aXvafpYw6VYeD%2BYM4YNNpxO2pAiBIy2%2FwTUHXvEyX30tWzHsXX3tPxBvteR79uUMMnR3riiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNrEuKN3V2FjQZWeEKtwDTlV%2BStwIETsxaLV2Hs8nj1qlcuZvmzcK06mzXfNkfmu1ErVeF7CHs6Y5O5OA53ICgWGVtniqBfBcoPH%2FXxrPPltobqZMEOKKCmZh6uepYPYsm2kZmSyiNAKpuqe5csp7ADr9divPOTeLRVMlX5l2mvkH%2BsdUuiAa%2BchupgPObF%2BtvfF5DWCQCjBSlFFy5ZcnDU5qFiAA9QEXHnEF7zEA0cPpa%2FFTzmnmT4W6br%2BobYArGvGACUTeb4q3UbniDCTdsvIYza43kFOt4Rhv%2Bqe1cUeEhV7Es6Dmi%2Bh650UogDRY91OgWyNq0mXXK03N0DRH3QpadcQ8IQIVpGsdil6VVZhkaB09p1YgTN4Wtzr2XXMcIUFCPHJqU3eYRpC46VQy%2FkgUovglK8sSm1hrSdlgnF4fUtpWT%2BieeKBFmt1NrrYFdK4%2BRTVu%2BAmgkmpg2GsfHO3nvQJGykZmTFNNuTJdSqD5NxD1HSHogBGTZCvf7OSlzW01WqBvtP89Fsb39ciZlO%2F7d5NIOessJ2MjVuzlis22CLV78BOLfrpFENbybi3ph%2BLT1kC2CbjEmoxb3gZT4YmLU7BLQY4IrpULnBsiQmz1YYkTbUxB2BCDGZ32iggGIBhBum9mjIVKgokw3oaAzAY6pgEUmB5hYrDLzt1bacO4IYfc2wcfTG36EDqeUNk4O48LWa%2BPsuDvjmirl52O%2BxLs6Xl53VNVTymCjWGqsIhbqNNlEwC0uA233s%2B0djQ8BYrRN%2FB8ovjtYKknrjtjP2gujDFzyS6TWb3lmwvK8M5gkoV7QpvrYPkJKt%2FINlmF1AVIShZNHDk1eFwhHnxxMk6%2Biuc6euxNoHyvKlgyXtoSaEZ3z7vwQpJF&X-Amz-Signature=70781bfbfa2639e28e224c50e65b45cc7f58feb43098c462f8479248e37ea53e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY5BO53D%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDbdT7lw6PpdsI%2F9ee0dYtGCvXzetAiPwRHa%2BNuZSrSwQIhAKKJXljUFxUpAxBxqKpa7zuTBT6lCXe9voDpyq2D04F8KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKuj5GNaSTe3ZS7Rgq3ANeuGQe3d8W9dUF7S2cAWtQxm3Uq8BRwgjBrgseTJV%2Fun3V5hsy9jbglnR4UIbUbgbWgUJHvDKydd7h6gddHAk0bVg6%2BWlFWbwUMTm%2F%2F5G31ja%2FS2tDIXUsa%2BD7T9%2BW4BQWVTdcD%2BPcMk%2Ff8zWq2GOSJTqmuPB24l2jSGryY24PWwX37viCZTxxilm5R4A%2FHW7MuMXdMAh1e%2BMyXvqtsCwDtO3vAKbaSQCUX3prIlMLzdMSnQrlsGCofwkSxMKa9wL1lxf6uAAO%2Bq7kOC0B6Qd1is8asj5LG%2FV0Apb1ICSxM1B5K%2Fzjsw6CN47q8WPaJFO9p%2BRV%2B2TQIdcjjdyicmSgM0ORp%2ByQnWVgzcBcFXy0fD%2BWsekLnTUDLrCDwm0K31%2Bp3qARk2bde0%2FOZ87Rw02bgULGz06FYKtK7VLhrv20nrBZV%2Br1wxdAIJPMhExhSCfyOn7IT6OMEeqTTBAw2xnmawevm9SEoXsicPyeQC1uYorLEnA0AHD49M9U2JbvdKn1Vi65h6j6vaYHI0lJgc88nefgIXIWZnzXokGOkBEbYfNEZTX4F4PRUrUdoSRCgc53hWwAI4iL9KopfzGvyeVv0vzsWDybbGlGGzo77C4LbzoaAcfr6NwLcIOwaDDJhoDMBjqkAVphIEUQv137UaXKFAMyQJhrqeQIX%2BJCdKOugFnBQ8kv72L0%2BADc6odlMzHwxiini1XAvSZQQsT%2BYbma0gzeMoeYlazRYfed%2Bvp%2B70hp8trsfdR%2Fxzpf7VS77ElumsBF3b%2BcDfkLqHNjW7%2BLclQ%2B4nZ79kio1xWFPmd4W%2FTdS6xjT4fmfLNSYWGvO%2FAPMsmmHKhjB%2BWm5GsPLHyhRciogl0dZFcj&X-Amz-Signature=49f38aadbe5d8b4bf2dcf59066d131b12f3c9cd419fb2285753ddb72fac51ce1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DFWRSFZ%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIBxLFi9dJZsIiuiIU54aXvafpYw6VYeD%2BYM4YNNpxO2pAiBIy2%2FwTUHXvEyX30tWzHsXX3tPxBvteR79uUMMnR3riiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNrEuKN3V2FjQZWeEKtwDTlV%2BStwIETsxaLV2Hs8nj1qlcuZvmzcK06mzXfNkfmu1ErVeF7CHs6Y5O5OA53ICgWGVtniqBfBcoPH%2FXxrPPltobqZMEOKKCmZh6uepYPYsm2kZmSyiNAKpuqe5csp7ADr9divPOTeLRVMlX5l2mvkH%2BsdUuiAa%2BchupgPObF%2BtvfF5DWCQCjBSlFFy5ZcnDU5qFiAA9QEXHnEF7zEA0cPpa%2FFTzmnmT4W6br%2BobYArGvGACUTeb4q3UbniDCTdsvIYza43kFOt4Rhv%2Bqe1cUeEhV7Es6Dmi%2Bh650UogDRY91OgWyNq0mXXK03N0DRH3QpadcQ8IQIVpGsdil6VVZhkaB09p1YgTN4Wtzr2XXMcIUFCPHJqU3eYRpC46VQy%2FkgUovglK8sSm1hrSdlgnF4fUtpWT%2BieeKBFmt1NrrYFdK4%2BRTVu%2BAmgkmpg2GsfHO3nvQJGykZmTFNNuTJdSqD5NxD1HSHogBGTZCvf7OSlzW01WqBvtP89Fsb39ciZlO%2F7d5NIOessJ2MjVuzlis22CLV78BOLfrpFENbybi3ph%2BLT1kC2CbjEmoxb3gZT4YmLU7BLQY4IrpULnBsiQmz1YYkTbUxB2BCDGZ32iggGIBhBum9mjIVKgokw3oaAzAY6pgEUmB5hYrDLzt1bacO4IYfc2wcfTG36EDqeUNk4O48LWa%2BPsuDvjmirl52O%2BxLs6Xl53VNVTymCjWGqsIhbqNNlEwC0uA233s%2B0djQ8BYrRN%2FB8ovjtYKknrjtjP2gujDFzyS6TWb3lmwvK8M5gkoV7QpvrYPkJKt%2FINlmF1AVIShZNHDk1eFwhHnxxMk6%2Biuc6euxNoHyvKlgyXtoSaEZ3z7vwQpJF&X-Amz-Signature=6f7e5b834983cfb15ac4c279746e3f3d9736b3450f687d214beb33bd14b44455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBJ3F2Z6%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCICaFKC08tEznpyrgIQL7EUWdpb5cjIvT8I%2BphzfRDgOlAiAKWQpMbJLYANjIHFNIWxmJwY9WJg4Le7JWK1UrKy9mrSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUhMH%2FJYZ9FGjBa%2F%2BKtwDOwO3fwC67yqZ%2FG8GVDYY8v%2FyLEK3WYY%2FW4RjJXuuHpDTh9NVWb%2Brs98ciYL0i75LqV47BnSLy6K%2F6epUoFdlZCw7KqFCIwoXhOddAbyA2KsjkmrvKVN8BteW9nDzD08YhSMWi9z3GxCSTA7cOCUwVXDikVdjEB2O9UXc20YkWCkHy6g6Cj6opW6u2GSFbpopBRcMwZrW0dHpQhOibdwggsfFMGm1b6Ju3cufqOm55INeMm0dDqFw3YxhzdbsJv2lZKnVmSBqhig3JFsTPUn5bkSxZ9XOQ5riOcv9Q2xukU2K5JfD4jYCh%2FqAvg5gWnoCpSpYl5rUdGhk75tP7QTCV9oSaw1HAxnMYuzwLpVuGWPmJf12Jh9zIjyGgjpKNU2c7KGf0I5lHUeNhJ9qRCI%2BRECjC2c5iLZzn4dh%2BEF0M9hXLp%2F69uSjuctLOvzOb4uKKHO84CT6gCb7Y8Rb%2BdaUQisknBcTjRB%2FuyfYvqoXw9VGiiSwAJKBlgZegJXiWEAbFfG09AZcxi%2FledRZ4bI8eZ%2Bl5iMuqLjSfHq007VXjZgwWP8msjSCVb92ZyNMl13bXQ3eeLpiLzO4TZP8HZ3mLgur41ibIRrXxU7yCgdubwmuFUkEaCMR8Ebzm10wm4iAzAY6pgHaPVxRjCEn7GHWTkW0HuaRYgbOgijGSXxrKcmArA4rjuCppBhvfp%2Bs9xGDba%2BoD6DMu%2B38WGOiPbIYcnzAAXd4r2dPc66JFRAWXqHggVmmvm46qRRs3nNG7DAbVSApJdDCTpoUaJAckIEe%2FgW2ltguGzZCzkG3E%2Byh6jxV9NUVwqAmf2h3Jq5dlICZWPuC0BYabpADK8SpmE2xhHFS0s4xw2hWRivc&X-Amz-Signature=ec09e3877dfaa8794abf5717b228185234fc2dff3e4a3a1359a48e108647ef6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGZNFS52%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCnJc2cIRwQLQSDs4Jd9T9%2BdPi48nuIiXcueTaG8Ou2rAIhAJ4p9DTScU0BD5V9t6GrlmxzS7dFLvgNUnEVVz%2BuF6ovKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3%2B%2BEvRbkJV%2FKiamwq3AMBnBtDGbONwCJ7agaV6kykzrBCZ4H8eL%2F1claYNASeyGNRxqmCfXpSkXsk4wl9jcKDCRxUuzDr7NOl4vSLdZlwBt7l6TR%2BFjnK%2BWfwKXqHZyQ6R1Pmp2zXP395zcGgLvdEwVCBnyVWoOmMaOd0PlsUNuFVJstTeh1PJ316LZRdz1hYgaPe6Fr9XHgIkSRmExmD5jBr7qkKBONdPgFf%2FPvdEsdO8JcdHkB7gJAdvNbIwTshQZRxMGIYPTpESgX825xeT8OWaCrww6ndj1cXVZ9iP6kuy76ft02n1x6z%2BnHHxTCZLnx5p5TVI5oj6VZUQc91I108b8akOADiJvuWaNIdZd52MT3zdFfDQaEXQ1IAEERqt%2FKJBfCxvs%2BcR4gRzw1iQe6d28H1HOuUtHwqrquLLizS0Sf%2B3C5%2Fne4B7Z4jx6zNtUhoj2ljqEarHbhrHQ9JOXzbRC63NEXMPUqyE4Jss0haVnQO1MDsQBbTNOjDKJ%2F04ja0blQ%2BHJqsqDyevsMW3NfLHYZ3u6qpXhzAVs21S5vvOg7cPYAOL8OVKXSmTNyC8shOVLuBhEA2R1ZZTuhe7BsRerItx1KfvrsIY8TjPhNF%2FIqI7Y4qwRq0gmLlQr6IWu1YlobQs2roMTCBiIDMBjqkAfb6aljWNNyvrXOLlI%2FBM8tshyIwSGx70PZLRm9osXflRtSRlbrk%2Fb%2Bt18TFiUncZzmyX2MNw0O%2F%2BMufqlqTRHw6QeJ5PxaeGYTzIZAUg8TI2HIeblrGCQ4FiZdVA5ephkIi7o4udssJ4fOvhr70WMAHDvXJuiZbH6SAe7p8PNUHCPq14Qda2tb4HW88iSOb1kjj3gbcF5%2FzqHzUStk5XVDwSSwG&X-Amz-Signature=fe32f8a96ddc16dd4a9b1c765fad5af6cc35a2ae6c400119e92608bb5a4c2e0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAA55FY5%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIG11POlfjeFmq7El1MS%2B6WBtdHzxQBp4uDDw23MsRjggAiBJk5oBfz7JsonCk2elmpUvPWj5u1LrnHLID00TRNDJAyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpifR6qekxloUj%2B9UKtwDGTt380V6QRUoSjPusejjhpaaiHZIk%2F8wIdz%2Bh%2BHieuvNeBhdK42qPa2UgmOTVdExfw%2BHvk0By%2FI61JU3538M5jxmI98YGFyTEGwji17eUvyx24zsU1ONRlFqRN4GjuEoX%2BgnsHbUkAc2g0KCogCdrGIrGiDSH%2BvFhJJ0y%2BUihfQjGZ7LQaVjChNUxnDqOVHhyDDaJIj92ZPRQXslFF8gErdwPsK3KzmG7E12cbmzF6v%2BRFMoXlUqwo0Ax6oN40HkzvaD0BLNBgnPTpLtR3b4AmePAHrbMMXZaDyalm%2F4v7h5NE57ABG4B3K8hPCAHEh0sKTXorwUEJSlZq6S2uQZDEOkhZl4wIuIwerLpz8lRvZK8Vhq6sXhA6wd%2BWdoBxzx%2BCS9rcYeem7EuQohkph5D31w6jgS6PmbSaQ1sDy3oYbtyaBk84247NTzru9kwSGCC0D8PvGdPKJdGK6PXReBtQdFU%2F1WL9PZ30rret9RLRhTbE%2Fcbd5xlv9PY3ahlWKsp1RNJpoh%2BUVyDL8whSt2TMsA7jg0Mm2al2qmCyuxowFBgv6hnjoAb6QQKw%2BbLd4jMID%2FxNFlRq%2Bwr%2FEgHsLnKMWcJcEWnlgmTS1hqNpBPWJDihgs5ehC9fVeyJ0wzIaAzAY6pgHimcAl%2BQVr139MYPBoRXKtLko142vNTefbuu%2Fl2xwFPp1IY3eohakOzshU4iV%2FPqAYJXxZ%2F07toPo4oog79VXPlNvhHmvKIuZFiDEJYQ3j1gSQ0VotY8gJfVjKKJTI0zyiEABkCHmCvEkw408w7telqfXdQRimxOvd858fGbaqWfz%2F2oBWgalJbaTFGkdSvlJrGtruj%2F1ptGHgeldsR6onk0p7GXdT&X-Amz-Signature=45aa50861b2ac4959b3247b0b9949d8e1d5961563329cee99c6fbffd9e8b49c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DFWRSFZ%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIBxLFi9dJZsIiuiIU54aXvafpYw6VYeD%2BYM4YNNpxO2pAiBIy2%2FwTUHXvEyX30tWzHsXX3tPxBvteR79uUMMnR3riiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNrEuKN3V2FjQZWeEKtwDTlV%2BStwIETsxaLV2Hs8nj1qlcuZvmzcK06mzXfNkfmu1ErVeF7CHs6Y5O5OA53ICgWGVtniqBfBcoPH%2FXxrPPltobqZMEOKKCmZh6uepYPYsm2kZmSyiNAKpuqe5csp7ADr9divPOTeLRVMlX5l2mvkH%2BsdUuiAa%2BchupgPObF%2BtvfF5DWCQCjBSlFFy5ZcnDU5qFiAA9QEXHnEF7zEA0cPpa%2FFTzmnmT4W6br%2BobYArGvGACUTeb4q3UbniDCTdsvIYza43kFOt4Rhv%2Bqe1cUeEhV7Es6Dmi%2Bh650UogDRY91OgWyNq0mXXK03N0DRH3QpadcQ8IQIVpGsdil6VVZhkaB09p1YgTN4Wtzr2XXMcIUFCPHJqU3eYRpC46VQy%2FkgUovglK8sSm1hrSdlgnF4fUtpWT%2BieeKBFmt1NrrYFdK4%2BRTVu%2BAmgkmpg2GsfHO3nvQJGykZmTFNNuTJdSqD5NxD1HSHogBGTZCvf7OSlzW01WqBvtP89Fsb39ciZlO%2F7d5NIOessJ2MjVuzlis22CLV78BOLfrpFENbybi3ph%2BLT1kC2CbjEmoxb3gZT4YmLU7BLQY4IrpULnBsiQmz1YYkTbUxB2BCDGZ32iggGIBhBum9mjIVKgokw3oaAzAY6pgEUmB5hYrDLzt1bacO4IYfc2wcfTG36EDqeUNk4O48LWa%2BPsuDvjmirl52O%2BxLs6Xl53VNVTymCjWGqsIhbqNNlEwC0uA233s%2B0djQ8BYrRN%2FB8ovjtYKknrjtjP2gujDFzyS6TWb3lmwvK8M5gkoV7QpvrYPkJKt%2FINlmF1AVIShZNHDk1eFwhHnxxMk6%2Biuc6euxNoHyvKlgyXtoSaEZ3z7vwQpJF&X-Amz-Signature=c61fc02d3a008a7b921f960389818370dec24da81fe9b3de7d708ab5f9ce1133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DFWRSFZ%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIBxLFi9dJZsIiuiIU54aXvafpYw6VYeD%2BYM4YNNpxO2pAiBIy2%2FwTUHXvEyX30tWzHsXX3tPxBvteR79uUMMnR3riiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNrEuKN3V2FjQZWeEKtwDTlV%2BStwIETsxaLV2Hs8nj1qlcuZvmzcK06mzXfNkfmu1ErVeF7CHs6Y5O5OA53ICgWGVtniqBfBcoPH%2FXxrPPltobqZMEOKKCmZh6uepYPYsm2kZmSyiNAKpuqe5csp7ADr9divPOTeLRVMlX5l2mvkH%2BsdUuiAa%2BchupgPObF%2BtvfF5DWCQCjBSlFFy5ZcnDU5qFiAA9QEXHnEF7zEA0cPpa%2FFTzmnmT4W6br%2BobYArGvGACUTeb4q3UbniDCTdsvIYza43kFOt4Rhv%2Bqe1cUeEhV7Es6Dmi%2Bh650UogDRY91OgWyNq0mXXK03N0DRH3QpadcQ8IQIVpGsdil6VVZhkaB09p1YgTN4Wtzr2XXMcIUFCPHJqU3eYRpC46VQy%2FkgUovglK8sSm1hrSdlgnF4fUtpWT%2BieeKBFmt1NrrYFdK4%2BRTVu%2BAmgkmpg2GsfHO3nvQJGykZmTFNNuTJdSqD5NxD1HSHogBGTZCvf7OSlzW01WqBvtP89Fsb39ciZlO%2F7d5NIOessJ2MjVuzlis22CLV78BOLfrpFENbybi3ph%2BLT1kC2CbjEmoxb3gZT4YmLU7BLQY4IrpULnBsiQmz1YYkTbUxB2BCDGZ32iggGIBhBum9mjIVKgokw3oaAzAY6pgEUmB5hYrDLzt1bacO4IYfc2wcfTG36EDqeUNk4O48LWa%2BPsuDvjmirl52O%2BxLs6Xl53VNVTymCjWGqsIhbqNNlEwC0uA233s%2B0djQ8BYrRN%2FB8ovjtYKknrjtjP2gujDFzyS6TWb3lmwvK8M5gkoV7QpvrYPkJKt%2FINlmF1AVIShZNHDk1eFwhHnxxMk6%2Biuc6euxNoHyvKlgyXtoSaEZ3z7vwQpJF&X-Amz-Signature=c1e4c78baaa5846e0d8a2694464e604ef82127903f5db7fdac06ae3219950913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWJDLWKL%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQD0UIzqiulWCSyxifX1hBRZI%2FG8kGlV55bwpnYLvW6mWQIgRH2%2Bb%2FB1TDN2XYS6BR9F1OhSZxo3fNiDDWQewo3eRSkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeeZ5qMg6nRtcAKqSrcA9usm6O5tdfHeTaEPR5Ub13w02%2BysKLeVKzfD%2FtKbtuPyz8C7QCnS7V0oINnpq0eM6eyanWi%2FvniISN6PunMP7cBTg96%2BDETPo0iSTmxawnLmU5HZmN1LDB6jIrEuls7mvFG9D7b2C3eUBl2n9l6K5ykz77CvyN5cq%2F2E75iueJLqlIoaFtsZPDnc5war5SIdc4I4092KuACHRdLlgVQ%2B6AeCH4u6e3CmPk5fnU%2Fdy3qgUUC7cd7K28Z%2Ftik1oV8jGXI8w61a6grh7Q0cem7nnq9s5OYKe8oggalqvZfKAC%2FPqxK%2FrD53Kw8LS%2Fg2X5dsHnvqdD1e944Xnnvv712jmHcL85drM9CsuFbY7BJ1ZjNjyxMJkFcJUnakJoeMChhRLE%2B6xYxG3cHNDErzp3wr5XINo7RSzERA37FU0xy5xS6C%2Fc5u84%2FdD4vheoO76Ll7nP5GQvgkmaoGW6v6s8BtZTN3H6ZWYoU2MqK4z9KbWEgdDv2uLM4EqtD2No57QqZY8BpvfSXWkLxwJfcF%2BdIHdDuawbIdh8u4BWe9UkV0HA2IT6OKrrI%2F0wTOw1OsgZqrb5R4BPREECFfNoy%2BljEOmI5xKR0ZzTXV%2BI%2FBYeIhLILVUm7RSO9IA3qT2jIMImIgMwGOqUB2v2AzRZOXr5eHqmrOhbiUZ9CacoWT8TiMhPwykruaD0ZJHiwSWVap%2B6PHCeuycxHbzCPDQKDM3nIwI0gOMjY7pqEprD9aYR6kUOOsf2ILN4P55ppQIpi%2FJqj4vBdTLOKwur%2BeTF5l4L8piwLD%2BMusmLzbn3cTulhqkEJyuPMwb6RgWpF3T6EpJdHVmDF5iCXpBkZE0Hx6LlwnJypIz2ibtZiJhJI&X-Amz-Signature=b372727883ae5c4f7d19fef2a874762e2c7f11c610d1c8a9d42769086b3ccba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWJDLWKL%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQD0UIzqiulWCSyxifX1hBRZI%2FG8kGlV55bwpnYLvW6mWQIgRH2%2Bb%2FB1TDN2XYS6BR9F1OhSZxo3fNiDDWQewo3eRSkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeeZ5qMg6nRtcAKqSrcA9usm6O5tdfHeTaEPR5Ub13w02%2BysKLeVKzfD%2FtKbtuPyz8C7QCnS7V0oINnpq0eM6eyanWi%2FvniISN6PunMP7cBTg96%2BDETPo0iSTmxawnLmU5HZmN1LDB6jIrEuls7mvFG9D7b2C3eUBl2n9l6K5ykz77CvyN5cq%2F2E75iueJLqlIoaFtsZPDnc5war5SIdc4I4092KuACHRdLlgVQ%2B6AeCH4u6e3CmPk5fnU%2Fdy3qgUUC7cd7K28Z%2Ftik1oV8jGXI8w61a6grh7Q0cem7nnq9s5OYKe8oggalqvZfKAC%2FPqxK%2FrD53Kw8LS%2Fg2X5dsHnvqdD1e944Xnnvv712jmHcL85drM9CsuFbY7BJ1ZjNjyxMJkFcJUnakJoeMChhRLE%2B6xYxG3cHNDErzp3wr5XINo7RSzERA37FU0xy5xS6C%2Fc5u84%2FdD4vheoO76Ll7nP5GQvgkmaoGW6v6s8BtZTN3H6ZWYoU2MqK4z9KbWEgdDv2uLM4EqtD2No57QqZY8BpvfSXWkLxwJfcF%2BdIHdDuawbIdh8u4BWe9UkV0HA2IT6OKrrI%2F0wTOw1OsgZqrb5R4BPREECFfNoy%2BljEOmI5xKR0ZzTXV%2BI%2FBYeIhLILVUm7RSO9IA3qT2jIMImIgMwGOqUB2v2AzRZOXr5eHqmrOhbiUZ9CacoWT8TiMhPwykruaD0ZJHiwSWVap%2B6PHCeuycxHbzCPDQKDM3nIwI0gOMjY7pqEprD9aYR6kUOOsf2ILN4P55ppQIpi%2FJqj4vBdTLOKwur%2BeTF5l4L8piwLD%2BMusmLzbn3cTulhqkEJyuPMwb6RgWpF3T6EpJdHVmDF5iCXpBkZE0Hx6LlwnJypIz2ibtZiJhJI&X-Amz-Signature=27f26fd475f9c950ed57d4beb4655362baab06436e3b0a38f156c1e3c0d4ed26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWJDLWKL%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQD0UIzqiulWCSyxifX1hBRZI%2FG8kGlV55bwpnYLvW6mWQIgRH2%2Bb%2FB1TDN2XYS6BR9F1OhSZxo3fNiDDWQewo3eRSkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeeZ5qMg6nRtcAKqSrcA9usm6O5tdfHeTaEPR5Ub13w02%2BysKLeVKzfD%2FtKbtuPyz8C7QCnS7V0oINnpq0eM6eyanWi%2FvniISN6PunMP7cBTg96%2BDETPo0iSTmxawnLmU5HZmN1LDB6jIrEuls7mvFG9D7b2C3eUBl2n9l6K5ykz77CvyN5cq%2F2E75iueJLqlIoaFtsZPDnc5war5SIdc4I4092KuACHRdLlgVQ%2B6AeCH4u6e3CmPk5fnU%2Fdy3qgUUC7cd7K28Z%2Ftik1oV8jGXI8w61a6grh7Q0cem7nnq9s5OYKe8oggalqvZfKAC%2FPqxK%2FrD53Kw8LS%2Fg2X5dsHnvqdD1e944Xnnvv712jmHcL85drM9CsuFbY7BJ1ZjNjyxMJkFcJUnakJoeMChhRLE%2B6xYxG3cHNDErzp3wr5XINo7RSzERA37FU0xy5xS6C%2Fc5u84%2FdD4vheoO76Ll7nP5GQvgkmaoGW6v6s8BtZTN3H6ZWYoU2MqK4z9KbWEgdDv2uLM4EqtD2No57QqZY8BpvfSXWkLxwJfcF%2BdIHdDuawbIdh8u4BWe9UkV0HA2IT6OKrrI%2F0wTOw1OsgZqrb5R4BPREECFfNoy%2BljEOmI5xKR0ZzTXV%2BI%2FBYeIhLILVUm7RSO9IA3qT2jIMImIgMwGOqUB2v2AzRZOXr5eHqmrOhbiUZ9CacoWT8TiMhPwykruaD0ZJHiwSWVap%2B6PHCeuycxHbzCPDQKDM3nIwI0gOMjY7pqEprD9aYR6kUOOsf2ILN4P55ppQIpi%2FJqj4vBdTLOKwur%2BeTF5l4L8piwLD%2BMusmLzbn3cTulhqkEJyuPMwb6RgWpF3T6EpJdHVmDF5iCXpBkZE0Hx6LlwnJypIz2ibtZiJhJI&X-Amz-Signature=a120cce9d6c22d6146bb5596b08e3540283ce77c8cf71862d0d2c2567a40f114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWJDLWKL%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQD0UIzqiulWCSyxifX1hBRZI%2FG8kGlV55bwpnYLvW6mWQIgRH2%2Bb%2FB1TDN2XYS6BR9F1OhSZxo3fNiDDWQewo3eRSkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeeZ5qMg6nRtcAKqSrcA9usm6O5tdfHeTaEPR5Ub13w02%2BysKLeVKzfD%2FtKbtuPyz8C7QCnS7V0oINnpq0eM6eyanWi%2FvniISN6PunMP7cBTg96%2BDETPo0iSTmxawnLmU5HZmN1LDB6jIrEuls7mvFG9D7b2C3eUBl2n9l6K5ykz77CvyN5cq%2F2E75iueJLqlIoaFtsZPDnc5war5SIdc4I4092KuACHRdLlgVQ%2B6AeCH4u6e3CmPk5fnU%2Fdy3qgUUC7cd7K28Z%2Ftik1oV8jGXI8w61a6grh7Q0cem7nnq9s5OYKe8oggalqvZfKAC%2FPqxK%2FrD53Kw8LS%2Fg2X5dsHnvqdD1e944Xnnvv712jmHcL85drM9CsuFbY7BJ1ZjNjyxMJkFcJUnakJoeMChhRLE%2B6xYxG3cHNDErzp3wr5XINo7RSzERA37FU0xy5xS6C%2Fc5u84%2FdD4vheoO76Ll7nP5GQvgkmaoGW6v6s8BtZTN3H6ZWYoU2MqK4z9KbWEgdDv2uLM4EqtD2No57QqZY8BpvfSXWkLxwJfcF%2BdIHdDuawbIdh8u4BWe9UkV0HA2IT6OKrrI%2F0wTOw1OsgZqrb5R4BPREECFfNoy%2BljEOmI5xKR0ZzTXV%2BI%2FBYeIhLILVUm7RSO9IA3qT2jIMImIgMwGOqUB2v2AzRZOXr5eHqmrOhbiUZ9CacoWT8TiMhPwykruaD0ZJHiwSWVap%2B6PHCeuycxHbzCPDQKDM3nIwI0gOMjY7pqEprD9aYR6kUOOsf2ILN4P55ppQIpi%2FJqj4vBdTLOKwur%2BeTF5l4L8piwLD%2BMusmLzbn3cTulhqkEJyuPMwb6RgWpF3T6EpJdHVmDF5iCXpBkZE0Hx6LlwnJypIz2ibtZiJhJI&X-Amz-Signature=7bcdc3d0a00a6d099c4239f1e8bbaa77d36e6aec7195e550e45497d79787758a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MQPKFQ5%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIGsbE%2BVf3Xx6LjeHvLou9LzYC%2FyEbldaL7L4fiOPq0OJAiBIRpuJ0SJvyhoJjqto%2FQHYPk37A%2BDFlD%2Funy2eKwPdPyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiIBs9P37ojVUXFXNKtwDgOAAUsCEIJicgsObXJSV7iQ6mM68Tw%2BTTlXi5heWiGMfviC6N4lcLbZc6cgXwz5hH5X2gRRBlnG%2B5zBcH%2FFoQHYmGg7pClIQ050cMHQXdxVDIzT2xyF78tDfHp%2FTA12rQiC4gsROjJEueazmkkJTIWD4H8V%2BR8bvAXh5%2B2hPJudqxIsU5uJV9ARteENE1ZoM%2B6lstmJ0gdMNODcD2caZuOVK7ir3gmg3Sy946QTH%2FDraHWwknQs%2Bf%2BHicoSPU01YCghNHQmeqJ1Xvs3iLmGKrmWakaCmqLgcIhSJeKCdenriUm6rxIYWxlzrvjzM1C7Mb%2BPZdOKKYTL8yafKL55fh%2FGw5S3aEIyKivdVX4rPVuJNzLtfSU8y4CgNT2mrbgsBYCqE1dlmMz1r4ChSGUTeJo2RlsU9eckPDqkVSYALu5dJtMcvTOHC7v0NIQARgH%2BRxCHRxXPoRJAOMvkbQ5EpCMJLm59ownpPvgWbUXd2kI1SqzH3B68yJK9wFwkG01BoU%2BbO3pXURnF2h0HOSZvcsMWqkjtdXju2BrE%2FGb8SS2miXoybiHZBZ5oFJUPSJ7YCwECR45yQ6ilFLAMvP3WMXLdxPRREg615H00WFzxCqS1vz0rZMRw1SYav%2FQwwrYiAzAY6pgEYcLhTybqW1KEEQHvqL1yBwtizFTu0igHTSKeNFgS5tAdK%2FJMEOy9V%2BDv93ctIct55ZbDxcTKNFRkL3A%2FFq2n709iBWM7LgXt81d%2F8tNX8rQvpP6PWTM2AN%2FyhPRMYVne%2FnF9Uxb7Uiy6mOr6TcBs8DdLcc2Ph8UkdcOb2%2FJsNAgZ0i1IT25Fxlq%2FOMkpyh2JpMCO%2B3W5LIEMEK5rtWg95tyY2n%2F1Y&X-Amz-Signature=6118945708ef70bdf51195732c89f457327b34e557b6f2f1120d25b07eb221b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWJDLWKL%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQD0UIzqiulWCSyxifX1hBRZI%2FG8kGlV55bwpnYLvW6mWQIgRH2%2Bb%2FB1TDN2XYS6BR9F1OhSZxo3fNiDDWQewo3eRSkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeeZ5qMg6nRtcAKqSrcA9usm6O5tdfHeTaEPR5Ub13w02%2BysKLeVKzfD%2FtKbtuPyz8C7QCnS7V0oINnpq0eM6eyanWi%2FvniISN6PunMP7cBTg96%2BDETPo0iSTmxawnLmU5HZmN1LDB6jIrEuls7mvFG9D7b2C3eUBl2n9l6K5ykz77CvyN5cq%2F2E75iueJLqlIoaFtsZPDnc5war5SIdc4I4092KuACHRdLlgVQ%2B6AeCH4u6e3CmPk5fnU%2Fdy3qgUUC7cd7K28Z%2Ftik1oV8jGXI8w61a6grh7Q0cem7nnq9s5OYKe8oggalqvZfKAC%2FPqxK%2FrD53Kw8LS%2Fg2X5dsHnvqdD1e944Xnnvv712jmHcL85drM9CsuFbY7BJ1ZjNjyxMJkFcJUnakJoeMChhRLE%2B6xYxG3cHNDErzp3wr5XINo7RSzERA37FU0xy5xS6C%2Fc5u84%2FdD4vheoO76Ll7nP5GQvgkmaoGW6v6s8BtZTN3H6ZWYoU2MqK4z9KbWEgdDv2uLM4EqtD2No57QqZY8BpvfSXWkLxwJfcF%2BdIHdDuawbIdh8u4BWe9UkV0HA2IT6OKrrI%2F0wTOw1OsgZqrb5R4BPREECFfNoy%2BljEOmI5xKR0ZzTXV%2BI%2FBYeIhLILVUm7RSO9IA3qT2jIMImIgMwGOqUB2v2AzRZOXr5eHqmrOhbiUZ9CacoWT8TiMhPwykruaD0ZJHiwSWVap%2B6PHCeuycxHbzCPDQKDM3nIwI0gOMjY7pqEprD9aYR6kUOOsf2ILN4P55ppQIpi%2FJqj4vBdTLOKwur%2BeTF5l4L8piwLD%2BMusmLzbn3cTulhqkEJyuPMwb6RgWpF3T6EpJdHVmDF5iCXpBkZE0Hx6LlwnJypIz2ibtZiJhJI&X-Amz-Signature=58be624e28d1bff8bdfa9bacad104c7d8f2deeb73b9866ce4d56e160b1a59b99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWJDLWKL%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQD0UIzqiulWCSyxifX1hBRZI%2FG8kGlV55bwpnYLvW6mWQIgRH2%2Bb%2FB1TDN2XYS6BR9F1OhSZxo3fNiDDWQewo3eRSkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeeZ5qMg6nRtcAKqSrcA9usm6O5tdfHeTaEPR5Ub13w02%2BysKLeVKzfD%2FtKbtuPyz8C7QCnS7V0oINnpq0eM6eyanWi%2FvniISN6PunMP7cBTg96%2BDETPo0iSTmxawnLmU5HZmN1LDB6jIrEuls7mvFG9D7b2C3eUBl2n9l6K5ykz77CvyN5cq%2F2E75iueJLqlIoaFtsZPDnc5war5SIdc4I4092KuACHRdLlgVQ%2B6AeCH4u6e3CmPk5fnU%2Fdy3qgUUC7cd7K28Z%2Ftik1oV8jGXI8w61a6grh7Q0cem7nnq9s5OYKe8oggalqvZfKAC%2FPqxK%2FrD53Kw8LS%2Fg2X5dsHnvqdD1e944Xnnvv712jmHcL85drM9CsuFbY7BJ1ZjNjyxMJkFcJUnakJoeMChhRLE%2B6xYxG3cHNDErzp3wr5XINo7RSzERA37FU0xy5xS6C%2Fc5u84%2FdD4vheoO76Ll7nP5GQvgkmaoGW6v6s8BtZTN3H6ZWYoU2MqK4z9KbWEgdDv2uLM4EqtD2No57QqZY8BpvfSXWkLxwJfcF%2BdIHdDuawbIdh8u4BWe9UkV0HA2IT6OKrrI%2F0wTOw1OsgZqrb5R4BPREECFfNoy%2BljEOmI5xKR0ZzTXV%2BI%2FBYeIhLILVUm7RSO9IA3qT2jIMImIgMwGOqUB2v2AzRZOXr5eHqmrOhbiUZ9CacoWT8TiMhPwykruaD0ZJHiwSWVap%2B6PHCeuycxHbzCPDQKDM3nIwI0gOMjY7pqEprD9aYR6kUOOsf2ILN4P55ppQIpi%2FJqj4vBdTLOKwur%2BeTF5l4L8piwLD%2BMusmLzbn3cTulhqkEJyuPMwb6RgWpF3T6EpJdHVmDF5iCXpBkZE0Hx6LlwnJypIz2ibtZiJhJI&X-Amz-Signature=538d9299ecb2949f9521460a5bffe786740276176cc3f0cdf0b986bedf43abec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWJDLWKL%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQD0UIzqiulWCSyxifX1hBRZI%2FG8kGlV55bwpnYLvW6mWQIgRH2%2Bb%2FB1TDN2XYS6BR9F1OhSZxo3fNiDDWQewo3eRSkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeeZ5qMg6nRtcAKqSrcA9usm6O5tdfHeTaEPR5Ub13w02%2BysKLeVKzfD%2FtKbtuPyz8C7QCnS7V0oINnpq0eM6eyanWi%2FvniISN6PunMP7cBTg96%2BDETPo0iSTmxawnLmU5HZmN1LDB6jIrEuls7mvFG9D7b2C3eUBl2n9l6K5ykz77CvyN5cq%2F2E75iueJLqlIoaFtsZPDnc5war5SIdc4I4092KuACHRdLlgVQ%2B6AeCH4u6e3CmPk5fnU%2Fdy3qgUUC7cd7K28Z%2Ftik1oV8jGXI8w61a6grh7Q0cem7nnq9s5OYKe8oggalqvZfKAC%2FPqxK%2FrD53Kw8LS%2Fg2X5dsHnvqdD1e944Xnnvv712jmHcL85drM9CsuFbY7BJ1ZjNjyxMJkFcJUnakJoeMChhRLE%2B6xYxG3cHNDErzp3wr5XINo7RSzERA37FU0xy5xS6C%2Fc5u84%2FdD4vheoO76Ll7nP5GQvgkmaoGW6v6s8BtZTN3H6ZWYoU2MqK4z9KbWEgdDv2uLM4EqtD2No57QqZY8BpvfSXWkLxwJfcF%2BdIHdDuawbIdh8u4BWe9UkV0HA2IT6OKrrI%2F0wTOw1OsgZqrb5R4BPREECFfNoy%2BljEOmI5xKR0ZzTXV%2BI%2FBYeIhLILVUm7RSO9IA3qT2jIMImIgMwGOqUB2v2AzRZOXr5eHqmrOhbiUZ9CacoWT8TiMhPwykruaD0ZJHiwSWVap%2B6PHCeuycxHbzCPDQKDM3nIwI0gOMjY7pqEprD9aYR6kUOOsf2ILN4P55ppQIpi%2FJqj4vBdTLOKwur%2BeTF5l4L8piwLD%2BMusmLzbn3cTulhqkEJyuPMwb6RgWpF3T6EpJdHVmDF5iCXpBkZE0Hx6LlwnJypIz2ibtZiJhJI&X-Amz-Signature=13c27c09f2fba6d686ab9e0bc172c101a7b1a852f78ebf2649c174557fac32f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWJDLWKL%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQD0UIzqiulWCSyxifX1hBRZI%2FG8kGlV55bwpnYLvW6mWQIgRH2%2Bb%2FB1TDN2XYS6BR9F1OhSZxo3fNiDDWQewo3eRSkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeeZ5qMg6nRtcAKqSrcA9usm6O5tdfHeTaEPR5Ub13w02%2BysKLeVKzfD%2FtKbtuPyz8C7QCnS7V0oINnpq0eM6eyanWi%2FvniISN6PunMP7cBTg96%2BDETPo0iSTmxawnLmU5HZmN1LDB6jIrEuls7mvFG9D7b2C3eUBl2n9l6K5ykz77CvyN5cq%2F2E75iueJLqlIoaFtsZPDnc5war5SIdc4I4092KuACHRdLlgVQ%2B6AeCH4u6e3CmPk5fnU%2Fdy3qgUUC7cd7K28Z%2Ftik1oV8jGXI8w61a6grh7Q0cem7nnq9s5OYKe8oggalqvZfKAC%2FPqxK%2FrD53Kw8LS%2Fg2X5dsHnvqdD1e944Xnnvv712jmHcL85drM9CsuFbY7BJ1ZjNjyxMJkFcJUnakJoeMChhRLE%2B6xYxG3cHNDErzp3wr5XINo7RSzERA37FU0xy5xS6C%2Fc5u84%2FdD4vheoO76Ll7nP5GQvgkmaoGW6v6s8BtZTN3H6ZWYoU2MqK4z9KbWEgdDv2uLM4EqtD2No57QqZY8BpvfSXWkLxwJfcF%2BdIHdDuawbIdh8u4BWe9UkV0HA2IT6OKrrI%2F0wTOw1OsgZqrb5R4BPREECFfNoy%2BljEOmI5xKR0ZzTXV%2BI%2FBYeIhLILVUm7RSO9IA3qT2jIMImIgMwGOqUB2v2AzRZOXr5eHqmrOhbiUZ9CacoWT8TiMhPwykruaD0ZJHiwSWVap%2B6PHCeuycxHbzCPDQKDM3nIwI0gOMjY7pqEprD9aYR6kUOOsf2ILN4P55ppQIpi%2FJqj4vBdTLOKwur%2BeTF5l4L8piwLD%2BMusmLzbn3cTulhqkEJyuPMwb6RgWpF3T6EpJdHVmDF5iCXpBkZE0Hx6LlwnJypIz2ibtZiJhJI&X-Amz-Signature=1d2b0928c9d2354e7d44819cd0b62c34762b7c9d15cab4c063a08dcf16d232e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWJDLWKL%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQD0UIzqiulWCSyxifX1hBRZI%2FG8kGlV55bwpnYLvW6mWQIgRH2%2Bb%2FB1TDN2XYS6BR9F1OhSZxo3fNiDDWQewo3eRSkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeeZ5qMg6nRtcAKqSrcA9usm6O5tdfHeTaEPR5Ub13w02%2BysKLeVKzfD%2FtKbtuPyz8C7QCnS7V0oINnpq0eM6eyanWi%2FvniISN6PunMP7cBTg96%2BDETPo0iSTmxawnLmU5HZmN1LDB6jIrEuls7mvFG9D7b2C3eUBl2n9l6K5ykz77CvyN5cq%2F2E75iueJLqlIoaFtsZPDnc5war5SIdc4I4092KuACHRdLlgVQ%2B6AeCH4u6e3CmPk5fnU%2Fdy3qgUUC7cd7K28Z%2Ftik1oV8jGXI8w61a6grh7Q0cem7nnq9s5OYKe8oggalqvZfKAC%2FPqxK%2FrD53Kw8LS%2Fg2X5dsHnvqdD1e944Xnnvv712jmHcL85drM9CsuFbY7BJ1ZjNjyxMJkFcJUnakJoeMChhRLE%2B6xYxG3cHNDErzp3wr5XINo7RSzERA37FU0xy5xS6C%2Fc5u84%2FdD4vheoO76Ll7nP5GQvgkmaoGW6v6s8BtZTN3H6ZWYoU2MqK4z9KbWEgdDv2uLM4EqtD2No57QqZY8BpvfSXWkLxwJfcF%2BdIHdDuawbIdh8u4BWe9UkV0HA2IT6OKrrI%2F0wTOw1OsgZqrb5R4BPREECFfNoy%2BljEOmI5xKR0ZzTXV%2BI%2FBYeIhLILVUm7RSO9IA3qT2jIMImIgMwGOqUB2v2AzRZOXr5eHqmrOhbiUZ9CacoWT8TiMhPwykruaD0ZJHiwSWVap%2B6PHCeuycxHbzCPDQKDM3nIwI0gOMjY7pqEprD9aYR6kUOOsf2ILN4P55ppQIpi%2FJqj4vBdTLOKwur%2BeTF5l4L8piwLD%2BMusmLzbn3cTulhqkEJyuPMwb6RgWpF3T6EpJdHVmDF5iCXpBkZE0Hx6LlwnJypIz2ibtZiJhJI&X-Amz-Signature=34ff686893102d4378af0c50dcd74e27d81d7b62b17c8c668b860290d5870118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWJDLWKL%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQD0UIzqiulWCSyxifX1hBRZI%2FG8kGlV55bwpnYLvW6mWQIgRH2%2Bb%2FB1TDN2XYS6BR9F1OhSZxo3fNiDDWQewo3eRSkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeeZ5qMg6nRtcAKqSrcA9usm6O5tdfHeTaEPR5Ub13w02%2BysKLeVKzfD%2FtKbtuPyz8C7QCnS7V0oINnpq0eM6eyanWi%2FvniISN6PunMP7cBTg96%2BDETPo0iSTmxawnLmU5HZmN1LDB6jIrEuls7mvFG9D7b2C3eUBl2n9l6K5ykz77CvyN5cq%2F2E75iueJLqlIoaFtsZPDnc5war5SIdc4I4092KuACHRdLlgVQ%2B6AeCH4u6e3CmPk5fnU%2Fdy3qgUUC7cd7K28Z%2Ftik1oV8jGXI8w61a6grh7Q0cem7nnq9s5OYKe8oggalqvZfKAC%2FPqxK%2FrD53Kw8LS%2Fg2X5dsHnvqdD1e944Xnnvv712jmHcL85drM9CsuFbY7BJ1ZjNjyxMJkFcJUnakJoeMChhRLE%2B6xYxG3cHNDErzp3wr5XINo7RSzERA37FU0xy5xS6C%2Fc5u84%2FdD4vheoO76Ll7nP5GQvgkmaoGW6v6s8BtZTN3H6ZWYoU2MqK4z9KbWEgdDv2uLM4EqtD2No57QqZY8BpvfSXWkLxwJfcF%2BdIHdDuawbIdh8u4BWe9UkV0HA2IT6OKrrI%2F0wTOw1OsgZqrb5R4BPREECFfNoy%2BljEOmI5xKR0ZzTXV%2BI%2FBYeIhLILVUm7RSO9IA3qT2jIMImIgMwGOqUB2v2AzRZOXr5eHqmrOhbiUZ9CacoWT8TiMhPwykruaD0ZJHiwSWVap%2B6PHCeuycxHbzCPDQKDM3nIwI0gOMjY7pqEprD9aYR6kUOOsf2ILN4P55ppQIpi%2FJqj4vBdTLOKwur%2BeTF5l4L8piwLD%2BMusmLzbn3cTulhqkEJyuPMwb6RgWpF3T6EpJdHVmDF5iCXpBkZE0Hx6LlwnJypIz2ibtZiJhJI&X-Amz-Signature=e7df7eb72abebe53a3be83047e905ca4e6e86980d27cbd51df567fa623d6de80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


