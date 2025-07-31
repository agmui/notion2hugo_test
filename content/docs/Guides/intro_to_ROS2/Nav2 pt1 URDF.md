---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-30T10:15:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-30T10:15:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5ULC3T7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FFQDqJgKqKY97TD4DVYL%2B4jie7kQV1UUVaCaPWgZWmAiEAh4%2BFf8O1G12HxIScVWyGp5Azqx5S81Yw3qihKjtIhoMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZCeUnmNEMKesjDSyrcA2zf5X4eIRYCspIcaGzZuI7wQaclb7oM4PCTYJqvfY%2BGURBC2eMXXw60fRfH3TPa5jPB945wITpTo%2Fl10LmrcGnB1CU38HLQne7LeWUcEAQIYWFOROABT%2FDCO2vffNTPAYEKCkIxgumOT7L7p7uj4Utpg%2BspC3vZJaPIE9QYCPr69nTbovDX3iV4etW9ZqUP%2FsmaPNiMyKJeWLSI%2FWy7kKIa1j13HMm0OgMelPMY95Bi8zjIZioEJmHxvw6VTsjrM2Od50RSD4V5mCSRoe99KynVSS7ufawlDS%2Fb30akfGSOb%2BiPxNRyvgOWRZrcJP1qvRnjFdqtvMYwiHGSOsqjqDoL5gbXXqWulWia05OJn2TPn8xl10iNjVRGqIO4rw%2FUsCMo9obD53jxN5GJXFssjhpyGhh9%2FDE6jKXjXjcHV32LwDyNGQr4XHQ7tTok9aQRpZ8IT9LzRjMxc3YC8Kx9Wdgw8OCsYrC7rVypMotfvOIBwYdi6QkgOts%2BCNhRASXBQsx4WglsWnrY%2FZCDb5f2MtUNzBODaHgiwNVUw8bnMUvVjOyjc1%2BUsqQNf3NaXhqYXbaqYu07hXKqqPB9H6KN4j0X7R26N9oAqjjFiqTwY%2FUmHDrlfknlyATpgvHmMM%2BcrcQGOqUB3x3rpW5qvvtddPHKqTw9eEsETtMItkTFQX%2B%2FnM0K%2BaKflvabUsuudtx51FT1RHgf5nLUKKPjN30l5NVpyFTuds0uJAjdhAQNKV%2BZNasLocjAxs4%2F87yQ9iejkM5%2Fjd5t5G5NqDtdR8FMLyoH7QQG%2FlTf7rEZ9ZYXrTgdQrK6IQMBL2oC0xWhz%2FbOqFK4diY7p3R1%2FEkk0pkTP2f7VCh%2FsEMnXiPZ&X-Amz-Signature=e9c9507f4bcd32b2e402ea3465e20d724629bcde9fdaaefe70d04263e2a9af8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5ULC3T7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FFQDqJgKqKY97TD4DVYL%2B4jie7kQV1UUVaCaPWgZWmAiEAh4%2BFf8O1G12HxIScVWyGp5Azqx5S81Yw3qihKjtIhoMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZCeUnmNEMKesjDSyrcA2zf5X4eIRYCspIcaGzZuI7wQaclb7oM4PCTYJqvfY%2BGURBC2eMXXw60fRfH3TPa5jPB945wITpTo%2Fl10LmrcGnB1CU38HLQne7LeWUcEAQIYWFOROABT%2FDCO2vffNTPAYEKCkIxgumOT7L7p7uj4Utpg%2BspC3vZJaPIE9QYCPr69nTbovDX3iV4etW9ZqUP%2FsmaPNiMyKJeWLSI%2FWy7kKIa1j13HMm0OgMelPMY95Bi8zjIZioEJmHxvw6VTsjrM2Od50RSD4V5mCSRoe99KynVSS7ufawlDS%2Fb30akfGSOb%2BiPxNRyvgOWRZrcJP1qvRnjFdqtvMYwiHGSOsqjqDoL5gbXXqWulWia05OJn2TPn8xl10iNjVRGqIO4rw%2FUsCMo9obD53jxN5GJXFssjhpyGhh9%2FDE6jKXjXjcHV32LwDyNGQr4XHQ7tTok9aQRpZ8IT9LzRjMxc3YC8Kx9Wdgw8OCsYrC7rVypMotfvOIBwYdi6QkgOts%2BCNhRASXBQsx4WglsWnrY%2FZCDb5f2MtUNzBODaHgiwNVUw8bnMUvVjOyjc1%2BUsqQNf3NaXhqYXbaqYu07hXKqqPB9H6KN4j0X7R26N9oAqjjFiqTwY%2FUmHDrlfknlyATpgvHmMM%2BcrcQGOqUB3x3rpW5qvvtddPHKqTw9eEsETtMItkTFQX%2B%2FnM0K%2BaKflvabUsuudtx51FT1RHgf5nLUKKPjN30l5NVpyFTuds0uJAjdhAQNKV%2BZNasLocjAxs4%2F87yQ9iejkM5%2Fjd5t5G5NqDtdR8FMLyoH7QQG%2FlTf7rEZ9ZYXrTgdQrK6IQMBL2oC0xWhz%2FbOqFK4diY7p3R1%2FEkk0pkTP2f7VCh%2FsEMnXiPZ&X-Amz-Signature=1c2df6583a697c390db607b394098d1a3802dd1b105842fb43e0198ccb17ad94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5ULC3T7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FFQDqJgKqKY97TD4DVYL%2B4jie7kQV1UUVaCaPWgZWmAiEAh4%2BFf8O1G12HxIScVWyGp5Azqx5S81Yw3qihKjtIhoMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZCeUnmNEMKesjDSyrcA2zf5X4eIRYCspIcaGzZuI7wQaclb7oM4PCTYJqvfY%2BGURBC2eMXXw60fRfH3TPa5jPB945wITpTo%2Fl10LmrcGnB1CU38HLQne7LeWUcEAQIYWFOROABT%2FDCO2vffNTPAYEKCkIxgumOT7L7p7uj4Utpg%2BspC3vZJaPIE9QYCPr69nTbovDX3iV4etW9ZqUP%2FsmaPNiMyKJeWLSI%2FWy7kKIa1j13HMm0OgMelPMY95Bi8zjIZioEJmHxvw6VTsjrM2Od50RSD4V5mCSRoe99KynVSS7ufawlDS%2Fb30akfGSOb%2BiPxNRyvgOWRZrcJP1qvRnjFdqtvMYwiHGSOsqjqDoL5gbXXqWulWia05OJn2TPn8xl10iNjVRGqIO4rw%2FUsCMo9obD53jxN5GJXFssjhpyGhh9%2FDE6jKXjXjcHV32LwDyNGQr4XHQ7tTok9aQRpZ8IT9LzRjMxc3YC8Kx9Wdgw8OCsYrC7rVypMotfvOIBwYdi6QkgOts%2BCNhRASXBQsx4WglsWnrY%2FZCDb5f2MtUNzBODaHgiwNVUw8bnMUvVjOyjc1%2BUsqQNf3NaXhqYXbaqYu07hXKqqPB9H6KN4j0X7R26N9oAqjjFiqTwY%2FUmHDrlfknlyATpgvHmMM%2BcrcQGOqUB3x3rpW5qvvtddPHKqTw9eEsETtMItkTFQX%2B%2FnM0K%2BaKflvabUsuudtx51FT1RHgf5nLUKKPjN30l5NVpyFTuds0uJAjdhAQNKV%2BZNasLocjAxs4%2F87yQ9iejkM5%2Fjd5t5G5NqDtdR8FMLyoH7QQG%2FlTf7rEZ9ZYXrTgdQrK6IQMBL2oC0xWhz%2FbOqFK4diY7p3R1%2FEkk0pkTP2f7VCh%2FsEMnXiPZ&X-Amz-Signature=7fb2365344164479949752a3587f9f88c4c05089f274358b176a26aab8fcf1b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5ULC3T7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FFQDqJgKqKY97TD4DVYL%2B4jie7kQV1UUVaCaPWgZWmAiEAh4%2BFf8O1G12HxIScVWyGp5Azqx5S81Yw3qihKjtIhoMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZCeUnmNEMKesjDSyrcA2zf5X4eIRYCspIcaGzZuI7wQaclb7oM4PCTYJqvfY%2BGURBC2eMXXw60fRfH3TPa5jPB945wITpTo%2Fl10LmrcGnB1CU38HLQne7LeWUcEAQIYWFOROABT%2FDCO2vffNTPAYEKCkIxgumOT7L7p7uj4Utpg%2BspC3vZJaPIE9QYCPr69nTbovDX3iV4etW9ZqUP%2FsmaPNiMyKJeWLSI%2FWy7kKIa1j13HMm0OgMelPMY95Bi8zjIZioEJmHxvw6VTsjrM2Od50RSD4V5mCSRoe99KynVSS7ufawlDS%2Fb30akfGSOb%2BiPxNRyvgOWRZrcJP1qvRnjFdqtvMYwiHGSOsqjqDoL5gbXXqWulWia05OJn2TPn8xl10iNjVRGqIO4rw%2FUsCMo9obD53jxN5GJXFssjhpyGhh9%2FDE6jKXjXjcHV32LwDyNGQr4XHQ7tTok9aQRpZ8IT9LzRjMxc3YC8Kx9Wdgw8OCsYrC7rVypMotfvOIBwYdi6QkgOts%2BCNhRASXBQsx4WglsWnrY%2FZCDb5f2MtUNzBODaHgiwNVUw8bnMUvVjOyjc1%2BUsqQNf3NaXhqYXbaqYu07hXKqqPB9H6KN4j0X7R26N9oAqjjFiqTwY%2FUmHDrlfknlyATpgvHmMM%2BcrcQGOqUB3x3rpW5qvvtddPHKqTw9eEsETtMItkTFQX%2B%2FnM0K%2BaKflvabUsuudtx51FT1RHgf5nLUKKPjN30l5NVpyFTuds0uJAjdhAQNKV%2BZNasLocjAxs4%2F87yQ9iejkM5%2Fjd5t5G5NqDtdR8FMLyoH7QQG%2FlTf7rEZ9ZYXrTgdQrK6IQMBL2oC0xWhz%2FbOqFK4diY7p3R1%2FEkk0pkTP2f7VCh%2FsEMnXiPZ&X-Amz-Signature=76bd552e109929f76454cd21f07de750d07b0bb7f8e2201e94b2d36559dca026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5ULC3T7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FFQDqJgKqKY97TD4DVYL%2B4jie7kQV1UUVaCaPWgZWmAiEAh4%2BFf8O1G12HxIScVWyGp5Azqx5S81Yw3qihKjtIhoMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZCeUnmNEMKesjDSyrcA2zf5X4eIRYCspIcaGzZuI7wQaclb7oM4PCTYJqvfY%2BGURBC2eMXXw60fRfH3TPa5jPB945wITpTo%2Fl10LmrcGnB1CU38HLQne7LeWUcEAQIYWFOROABT%2FDCO2vffNTPAYEKCkIxgumOT7L7p7uj4Utpg%2BspC3vZJaPIE9QYCPr69nTbovDX3iV4etW9ZqUP%2FsmaPNiMyKJeWLSI%2FWy7kKIa1j13HMm0OgMelPMY95Bi8zjIZioEJmHxvw6VTsjrM2Od50RSD4V5mCSRoe99KynVSS7ufawlDS%2Fb30akfGSOb%2BiPxNRyvgOWRZrcJP1qvRnjFdqtvMYwiHGSOsqjqDoL5gbXXqWulWia05OJn2TPn8xl10iNjVRGqIO4rw%2FUsCMo9obD53jxN5GJXFssjhpyGhh9%2FDE6jKXjXjcHV32LwDyNGQr4XHQ7tTok9aQRpZ8IT9LzRjMxc3YC8Kx9Wdgw8OCsYrC7rVypMotfvOIBwYdi6QkgOts%2BCNhRASXBQsx4WglsWnrY%2FZCDb5f2MtUNzBODaHgiwNVUw8bnMUvVjOyjc1%2BUsqQNf3NaXhqYXbaqYu07hXKqqPB9H6KN4j0X7R26N9oAqjjFiqTwY%2FUmHDrlfknlyATpgvHmMM%2BcrcQGOqUB3x3rpW5qvvtddPHKqTw9eEsETtMItkTFQX%2B%2FnM0K%2BaKflvabUsuudtx51FT1RHgf5nLUKKPjN30l5NVpyFTuds0uJAjdhAQNKV%2BZNasLocjAxs4%2F87yQ9iejkM5%2Fjd5t5G5NqDtdR8FMLyoH7QQG%2FlTf7rEZ9ZYXrTgdQrK6IQMBL2oC0xWhz%2FbOqFK4diY7p3R1%2FEkk0pkTP2f7VCh%2FsEMnXiPZ&X-Amz-Signature=88f8eae659d03bf2983e45afe26d87c5caf3f3f383c2675d8057b41eed495780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5ULC3T7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FFQDqJgKqKY97TD4DVYL%2B4jie7kQV1UUVaCaPWgZWmAiEAh4%2BFf8O1G12HxIScVWyGp5Azqx5S81Yw3qihKjtIhoMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZCeUnmNEMKesjDSyrcA2zf5X4eIRYCspIcaGzZuI7wQaclb7oM4PCTYJqvfY%2BGURBC2eMXXw60fRfH3TPa5jPB945wITpTo%2Fl10LmrcGnB1CU38HLQne7LeWUcEAQIYWFOROABT%2FDCO2vffNTPAYEKCkIxgumOT7L7p7uj4Utpg%2BspC3vZJaPIE9QYCPr69nTbovDX3iV4etW9ZqUP%2FsmaPNiMyKJeWLSI%2FWy7kKIa1j13HMm0OgMelPMY95Bi8zjIZioEJmHxvw6VTsjrM2Od50RSD4V5mCSRoe99KynVSS7ufawlDS%2Fb30akfGSOb%2BiPxNRyvgOWRZrcJP1qvRnjFdqtvMYwiHGSOsqjqDoL5gbXXqWulWia05OJn2TPn8xl10iNjVRGqIO4rw%2FUsCMo9obD53jxN5GJXFssjhpyGhh9%2FDE6jKXjXjcHV32LwDyNGQr4XHQ7tTok9aQRpZ8IT9LzRjMxc3YC8Kx9Wdgw8OCsYrC7rVypMotfvOIBwYdi6QkgOts%2BCNhRASXBQsx4WglsWnrY%2FZCDb5f2MtUNzBODaHgiwNVUw8bnMUvVjOyjc1%2BUsqQNf3NaXhqYXbaqYu07hXKqqPB9H6KN4j0X7R26N9oAqjjFiqTwY%2FUmHDrlfknlyATpgvHmMM%2BcrcQGOqUB3x3rpW5qvvtddPHKqTw9eEsETtMItkTFQX%2B%2FnM0K%2BaKflvabUsuudtx51FT1RHgf5nLUKKPjN30l5NVpyFTuds0uJAjdhAQNKV%2BZNasLocjAxs4%2F87yQ9iejkM5%2Fjd5t5G5NqDtdR8FMLyoH7QQG%2FlTf7rEZ9ZYXrTgdQrK6IQMBL2oC0xWhz%2FbOqFK4diY7p3R1%2FEkk0pkTP2f7VCh%2FsEMnXiPZ&X-Amz-Signature=5f1981ae73aa311e3dac7b7eeb17366fc56939c917da891e1526eca100fa5e95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5ULC3T7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FFQDqJgKqKY97TD4DVYL%2B4jie7kQV1UUVaCaPWgZWmAiEAh4%2BFf8O1G12HxIScVWyGp5Azqx5S81Yw3qihKjtIhoMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZCeUnmNEMKesjDSyrcA2zf5X4eIRYCspIcaGzZuI7wQaclb7oM4PCTYJqvfY%2BGURBC2eMXXw60fRfH3TPa5jPB945wITpTo%2Fl10LmrcGnB1CU38HLQne7LeWUcEAQIYWFOROABT%2FDCO2vffNTPAYEKCkIxgumOT7L7p7uj4Utpg%2BspC3vZJaPIE9QYCPr69nTbovDX3iV4etW9ZqUP%2FsmaPNiMyKJeWLSI%2FWy7kKIa1j13HMm0OgMelPMY95Bi8zjIZioEJmHxvw6VTsjrM2Od50RSD4V5mCSRoe99KynVSS7ufawlDS%2Fb30akfGSOb%2BiPxNRyvgOWRZrcJP1qvRnjFdqtvMYwiHGSOsqjqDoL5gbXXqWulWia05OJn2TPn8xl10iNjVRGqIO4rw%2FUsCMo9obD53jxN5GJXFssjhpyGhh9%2FDE6jKXjXjcHV32LwDyNGQr4XHQ7tTok9aQRpZ8IT9LzRjMxc3YC8Kx9Wdgw8OCsYrC7rVypMotfvOIBwYdi6QkgOts%2BCNhRASXBQsx4WglsWnrY%2FZCDb5f2MtUNzBODaHgiwNVUw8bnMUvVjOyjc1%2BUsqQNf3NaXhqYXbaqYu07hXKqqPB9H6KN4j0X7R26N9oAqjjFiqTwY%2FUmHDrlfknlyATpgvHmMM%2BcrcQGOqUB3x3rpW5qvvtddPHKqTw9eEsETtMItkTFQX%2B%2FnM0K%2BaKflvabUsuudtx51FT1RHgf5nLUKKPjN30l5NVpyFTuds0uJAjdhAQNKV%2BZNasLocjAxs4%2F87yQ9iejkM5%2Fjd5t5G5NqDtdR8FMLyoH7QQG%2FlTf7rEZ9ZYXrTgdQrK6IQMBL2oC0xWhz%2FbOqFK4diY7p3R1%2FEkk0pkTP2f7VCh%2FsEMnXiPZ&X-Amz-Signature=ee7b03366160701c6cd965a149b9c8f88a2f4fd441577c8c5003d27a771e15d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5ULC3T7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FFQDqJgKqKY97TD4DVYL%2B4jie7kQV1UUVaCaPWgZWmAiEAh4%2BFf8O1G12HxIScVWyGp5Azqx5S81Yw3qihKjtIhoMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZCeUnmNEMKesjDSyrcA2zf5X4eIRYCspIcaGzZuI7wQaclb7oM4PCTYJqvfY%2BGURBC2eMXXw60fRfH3TPa5jPB945wITpTo%2Fl10LmrcGnB1CU38HLQne7LeWUcEAQIYWFOROABT%2FDCO2vffNTPAYEKCkIxgumOT7L7p7uj4Utpg%2BspC3vZJaPIE9QYCPr69nTbovDX3iV4etW9ZqUP%2FsmaPNiMyKJeWLSI%2FWy7kKIa1j13HMm0OgMelPMY95Bi8zjIZioEJmHxvw6VTsjrM2Od50RSD4V5mCSRoe99KynVSS7ufawlDS%2Fb30akfGSOb%2BiPxNRyvgOWRZrcJP1qvRnjFdqtvMYwiHGSOsqjqDoL5gbXXqWulWia05OJn2TPn8xl10iNjVRGqIO4rw%2FUsCMo9obD53jxN5GJXFssjhpyGhh9%2FDE6jKXjXjcHV32LwDyNGQr4XHQ7tTok9aQRpZ8IT9LzRjMxc3YC8Kx9Wdgw8OCsYrC7rVypMotfvOIBwYdi6QkgOts%2BCNhRASXBQsx4WglsWnrY%2FZCDb5f2MtUNzBODaHgiwNVUw8bnMUvVjOyjc1%2BUsqQNf3NaXhqYXbaqYu07hXKqqPB9H6KN4j0X7R26N9oAqjjFiqTwY%2FUmHDrlfknlyATpgvHmMM%2BcrcQGOqUB3x3rpW5qvvtddPHKqTw9eEsETtMItkTFQX%2B%2FnM0K%2BaKflvabUsuudtx51FT1RHgf5nLUKKPjN30l5NVpyFTuds0uJAjdhAQNKV%2BZNasLocjAxs4%2F87yQ9iejkM5%2Fjd5t5G5NqDtdR8FMLyoH7QQG%2FlTf7rEZ9ZYXrTgdQrK6IQMBL2oC0xWhz%2FbOqFK4diY7p3R1%2FEkk0pkTP2f7VCh%2FsEMnXiPZ&X-Amz-Signature=f93053a0341082f5d78e12f34049b213df17553b70a1844df6b013a7bb74b26d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5ULC3T7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FFQDqJgKqKY97TD4DVYL%2B4jie7kQV1UUVaCaPWgZWmAiEAh4%2BFf8O1G12HxIScVWyGp5Azqx5S81Yw3qihKjtIhoMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZCeUnmNEMKesjDSyrcA2zf5X4eIRYCspIcaGzZuI7wQaclb7oM4PCTYJqvfY%2BGURBC2eMXXw60fRfH3TPa5jPB945wITpTo%2Fl10LmrcGnB1CU38HLQne7LeWUcEAQIYWFOROABT%2FDCO2vffNTPAYEKCkIxgumOT7L7p7uj4Utpg%2BspC3vZJaPIE9QYCPr69nTbovDX3iV4etW9ZqUP%2FsmaPNiMyKJeWLSI%2FWy7kKIa1j13HMm0OgMelPMY95Bi8zjIZioEJmHxvw6VTsjrM2Od50RSD4V5mCSRoe99KynVSS7ufawlDS%2Fb30akfGSOb%2BiPxNRyvgOWRZrcJP1qvRnjFdqtvMYwiHGSOsqjqDoL5gbXXqWulWia05OJn2TPn8xl10iNjVRGqIO4rw%2FUsCMo9obD53jxN5GJXFssjhpyGhh9%2FDE6jKXjXjcHV32LwDyNGQr4XHQ7tTok9aQRpZ8IT9LzRjMxc3YC8Kx9Wdgw8OCsYrC7rVypMotfvOIBwYdi6QkgOts%2BCNhRASXBQsx4WglsWnrY%2FZCDb5f2MtUNzBODaHgiwNVUw8bnMUvVjOyjc1%2BUsqQNf3NaXhqYXbaqYu07hXKqqPB9H6KN4j0X7R26N9oAqjjFiqTwY%2FUmHDrlfknlyATpgvHmMM%2BcrcQGOqUB3x3rpW5qvvtddPHKqTw9eEsETtMItkTFQX%2B%2FnM0K%2BaKflvabUsuudtx51FT1RHgf5nLUKKPjN30l5NVpyFTuds0uJAjdhAQNKV%2BZNasLocjAxs4%2F87yQ9iejkM5%2Fjd5t5G5NqDtdR8FMLyoH7QQG%2FlTf7rEZ9ZYXrTgdQrK6IQMBL2oC0xWhz%2FbOqFK4diY7p3R1%2FEkk0pkTP2f7VCh%2FsEMnXiPZ&X-Amz-Signature=a7c6c7cfd77eb2e8dcd23573b9ffd8f44a61609db8d955b10c856900f5e24a35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5ULC3T7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FFQDqJgKqKY97TD4DVYL%2B4jie7kQV1UUVaCaPWgZWmAiEAh4%2BFf8O1G12HxIScVWyGp5Azqx5S81Yw3qihKjtIhoMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZCeUnmNEMKesjDSyrcA2zf5X4eIRYCspIcaGzZuI7wQaclb7oM4PCTYJqvfY%2BGURBC2eMXXw60fRfH3TPa5jPB945wITpTo%2Fl10LmrcGnB1CU38HLQne7LeWUcEAQIYWFOROABT%2FDCO2vffNTPAYEKCkIxgumOT7L7p7uj4Utpg%2BspC3vZJaPIE9QYCPr69nTbovDX3iV4etW9ZqUP%2FsmaPNiMyKJeWLSI%2FWy7kKIa1j13HMm0OgMelPMY95Bi8zjIZioEJmHxvw6VTsjrM2Od50RSD4V5mCSRoe99KynVSS7ufawlDS%2Fb30akfGSOb%2BiPxNRyvgOWRZrcJP1qvRnjFdqtvMYwiHGSOsqjqDoL5gbXXqWulWia05OJn2TPn8xl10iNjVRGqIO4rw%2FUsCMo9obD53jxN5GJXFssjhpyGhh9%2FDE6jKXjXjcHV32LwDyNGQr4XHQ7tTok9aQRpZ8IT9LzRjMxc3YC8Kx9Wdgw8OCsYrC7rVypMotfvOIBwYdi6QkgOts%2BCNhRASXBQsx4WglsWnrY%2FZCDb5f2MtUNzBODaHgiwNVUw8bnMUvVjOyjc1%2BUsqQNf3NaXhqYXbaqYu07hXKqqPB9H6KN4j0X7R26N9oAqjjFiqTwY%2FUmHDrlfknlyATpgvHmMM%2BcrcQGOqUB3x3rpW5qvvtddPHKqTw9eEsETtMItkTFQX%2B%2FnM0K%2BaKflvabUsuudtx51FT1RHgf5nLUKKPjN30l5NVpyFTuds0uJAjdhAQNKV%2BZNasLocjAxs4%2F87yQ9iejkM5%2Fjd5t5G5NqDtdR8FMLyoH7QQG%2FlTf7rEZ9ZYXrTgdQrK6IQMBL2oC0xWhz%2FbOqFK4diY7p3R1%2FEkk0pkTP2f7VCh%2FsEMnXiPZ&X-Amz-Signature=2fa67433b46a5602dadd9131e663aacd9d6a01ce926030a1494cafc26bf65c15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

Types of blocks in URDF:

- robot
- vars/Properties
- macros
- link:
	- visual
		- geometry
		- material
	- collision
		- origin
		- geometry
		- friction
	- inertial
- joint:
	- parent
	- child
	- origin

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
        <surface><friction><ode>
          <mu>1.0</mu>
          <mu2>1.0</mu2>
          <fdir1>1 0 0</fdir1>
        </ode></friction></surface>
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

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5ULC3T7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FFQDqJgKqKY97TD4DVYL%2B4jie7kQV1UUVaCaPWgZWmAiEAh4%2BFf8O1G12HxIScVWyGp5Azqx5S81Yw3qihKjtIhoMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZCeUnmNEMKesjDSyrcA2zf5X4eIRYCspIcaGzZuI7wQaclb7oM4PCTYJqvfY%2BGURBC2eMXXw60fRfH3TPa5jPB945wITpTo%2Fl10LmrcGnB1CU38HLQne7LeWUcEAQIYWFOROABT%2FDCO2vffNTPAYEKCkIxgumOT7L7p7uj4Utpg%2BspC3vZJaPIE9QYCPr69nTbovDX3iV4etW9ZqUP%2FsmaPNiMyKJeWLSI%2FWy7kKIa1j13HMm0OgMelPMY95Bi8zjIZioEJmHxvw6VTsjrM2Od50RSD4V5mCSRoe99KynVSS7ufawlDS%2Fb30akfGSOb%2BiPxNRyvgOWRZrcJP1qvRnjFdqtvMYwiHGSOsqjqDoL5gbXXqWulWia05OJn2TPn8xl10iNjVRGqIO4rw%2FUsCMo9obD53jxN5GJXFssjhpyGhh9%2FDE6jKXjXjcHV32LwDyNGQr4XHQ7tTok9aQRpZ8IT9LzRjMxc3YC8Kx9Wdgw8OCsYrC7rVypMotfvOIBwYdi6QkgOts%2BCNhRASXBQsx4WglsWnrY%2FZCDb5f2MtUNzBODaHgiwNVUw8bnMUvVjOyjc1%2BUsqQNf3NaXhqYXbaqYu07hXKqqPB9H6KN4j0X7R26N9oAqjjFiqTwY%2FUmHDrlfknlyATpgvHmMM%2BcrcQGOqUB3x3rpW5qvvtddPHKqTw9eEsETtMItkTFQX%2B%2FnM0K%2BaKflvabUsuudtx51FT1RHgf5nLUKKPjN30l5NVpyFTuds0uJAjdhAQNKV%2BZNasLocjAxs4%2F87yQ9iejkM5%2Fjd5t5G5NqDtdR8FMLyoH7QQG%2FlTf7rEZ9ZYXrTgdQrK6IQMBL2oC0xWhz%2FbOqFK4diY7p3R1%2FEkk0pkTP2f7VCh%2FsEMnXiPZ&X-Amz-Signature=8a081bb2182cb5d19141a592e67012c0c9cdbd64ec407f262328db27ceb41031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5ULC3T7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FFQDqJgKqKY97TD4DVYL%2B4jie7kQV1UUVaCaPWgZWmAiEAh4%2BFf8O1G12HxIScVWyGp5Azqx5S81Yw3qihKjtIhoMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZCeUnmNEMKesjDSyrcA2zf5X4eIRYCspIcaGzZuI7wQaclb7oM4PCTYJqvfY%2BGURBC2eMXXw60fRfH3TPa5jPB945wITpTo%2Fl10LmrcGnB1CU38HLQne7LeWUcEAQIYWFOROABT%2FDCO2vffNTPAYEKCkIxgumOT7L7p7uj4Utpg%2BspC3vZJaPIE9QYCPr69nTbovDX3iV4etW9ZqUP%2FsmaPNiMyKJeWLSI%2FWy7kKIa1j13HMm0OgMelPMY95Bi8zjIZioEJmHxvw6VTsjrM2Od50RSD4V5mCSRoe99KynVSS7ufawlDS%2Fb30akfGSOb%2BiPxNRyvgOWRZrcJP1qvRnjFdqtvMYwiHGSOsqjqDoL5gbXXqWulWia05OJn2TPn8xl10iNjVRGqIO4rw%2FUsCMo9obD53jxN5GJXFssjhpyGhh9%2FDE6jKXjXjcHV32LwDyNGQr4XHQ7tTok9aQRpZ8IT9LzRjMxc3YC8Kx9Wdgw8OCsYrC7rVypMotfvOIBwYdi6QkgOts%2BCNhRASXBQsx4WglsWnrY%2FZCDb5f2MtUNzBODaHgiwNVUw8bnMUvVjOyjc1%2BUsqQNf3NaXhqYXbaqYu07hXKqqPB9H6KN4j0X7R26N9oAqjjFiqTwY%2FUmHDrlfknlyATpgvHmMM%2BcrcQGOqUB3x3rpW5qvvtddPHKqTw9eEsETtMItkTFQX%2B%2FnM0K%2BaKflvabUsuudtx51FT1RHgf5nLUKKPjN30l5NVpyFTuds0uJAjdhAQNKV%2BZNasLocjAxs4%2F87yQ9iejkM5%2Fjd5t5G5NqDtdR8FMLyoH7QQG%2FlTf7rEZ9ZYXrTgdQrK6IQMBL2oC0xWhz%2FbOqFK4diY7p3R1%2FEkk0pkTP2f7VCh%2FsEMnXiPZ&X-Amz-Signature=29eff7eb1b2a75f07da8e01c7ee8858d5794dff5a9ed97d1780591dfdae4a128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5ULC3T7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FFQDqJgKqKY97TD4DVYL%2B4jie7kQV1UUVaCaPWgZWmAiEAh4%2BFf8O1G12HxIScVWyGp5Azqx5S81Yw3qihKjtIhoMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZCeUnmNEMKesjDSyrcA2zf5X4eIRYCspIcaGzZuI7wQaclb7oM4PCTYJqvfY%2BGURBC2eMXXw60fRfH3TPa5jPB945wITpTo%2Fl10LmrcGnB1CU38HLQne7LeWUcEAQIYWFOROABT%2FDCO2vffNTPAYEKCkIxgumOT7L7p7uj4Utpg%2BspC3vZJaPIE9QYCPr69nTbovDX3iV4etW9ZqUP%2FsmaPNiMyKJeWLSI%2FWy7kKIa1j13HMm0OgMelPMY95Bi8zjIZioEJmHxvw6VTsjrM2Od50RSD4V5mCSRoe99KynVSS7ufawlDS%2Fb30akfGSOb%2BiPxNRyvgOWRZrcJP1qvRnjFdqtvMYwiHGSOsqjqDoL5gbXXqWulWia05OJn2TPn8xl10iNjVRGqIO4rw%2FUsCMo9obD53jxN5GJXFssjhpyGhh9%2FDE6jKXjXjcHV32LwDyNGQr4XHQ7tTok9aQRpZ8IT9LzRjMxc3YC8Kx9Wdgw8OCsYrC7rVypMotfvOIBwYdi6QkgOts%2BCNhRASXBQsx4WglsWnrY%2FZCDb5f2MtUNzBODaHgiwNVUw8bnMUvVjOyjc1%2BUsqQNf3NaXhqYXbaqYu07hXKqqPB9H6KN4j0X7R26N9oAqjjFiqTwY%2FUmHDrlfknlyATpgvHmMM%2BcrcQGOqUB3x3rpW5qvvtddPHKqTw9eEsETtMItkTFQX%2B%2FnM0K%2BaKflvabUsuudtx51FT1RHgf5nLUKKPjN30l5NVpyFTuds0uJAjdhAQNKV%2BZNasLocjAxs4%2F87yQ9iejkM5%2Fjd5t5G5NqDtdR8FMLyoH7QQG%2FlTf7rEZ9ZYXrTgdQrK6IQMBL2oC0xWhz%2FbOqFK4diY7p3R1%2FEkk0pkTP2f7VCh%2FsEMnXiPZ&X-Amz-Signature=9fa6d14018237b83dd75ec28e42eaba07ee4ef3e900ef7ca5be3ac983dd9e918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWFQ3GMG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA6jk38gxUwaKZXUNcV7rDWqOM%2FeIxGdvLgt4S9FqK7AiBPwLMPhjvTCIZ%2F1SUSi1%2Fyq7GPeA8Ausbe%2FMj%2BcEcKtSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSB1O08hBJhdU8qtFKtwDdlt5dSJ%2FoDJ7xgwU3iRD5IUh%2Blcw1pBdRlpbkmAjesbn6PGJAD7AHGeFEh7lKUe9X3qrw1dPQPJgSf8g5lg0oTBdVxDbAkPGeguVi7zfupLHqqt0VLdgBMVQzn6GyHeJk%2F%2FaWvys1VrKwYLQIhh4eTmkAsM2QsjZ1v%2BWCqeU%2BYOniJ7yuyI3UHZsaeTFY61hSvMIGYEbZaBTPKcE77dDtLctzsv4dn1SyRbeb8cBMA9bFH7mf4Oe%2FaMKTDZBULCsV7pWNc8hrn53OIbyZYHY%2B1t%2FAfYWSW2kIUvLXDHJQT7ubaefYBCssHWkZuEBeaY4%2BbZUzAXC33ZguCCIdbAIpINcegO609IIalSvaWOCk%2F3jcgTAIC7q8YJg5kzQvaDT32sfYDoxTjIDgarHd%2FHzAkGMBERYXWSSOoi1XxWb0Dr1hZXtR1nQuVWkBa2nl8JNZlJZnyXOrJtjucYvAcW%2Bz5%2BSE4%2B2x9QeOQhxj2hAEDZcSNkGR%2BCrrJlLXvBSYP1PjtMePELsDfn8RXDVCuhnG%2BA27d4FMG8nLLGyg1eOd3ZN612XFaxlL0jhanulm72ZEt%2BiE2fPwifJGX41fbLyhBUdP8kGbXNH%2Bl4aXDroc3PGVQud3GFMU4OHTX8w1c6sxAY6pgEovyLBdOy8p4%2F1NwuXETAgQLPlZixRyx0uKP2lKG48Fc%2Fz7JZ3B%2F%2FMln4YLZODi5i6vLQ%2FEIx4UlxhG%2FC6aw3zaASEi%2FfAtkB2Nd9MZHuobXt8H4SKAiVu0pkUjTOW2KoEdHf8inq%2FNjaWQgMdYAM%2FNIY0Nz6620fft5a2VguyiTYIGyPNyWVbWLE881SJ6G%2B%2BPUHtq1jkmlLf2A7gnbhM7LiKhe9C&X-Amz-Signature=0298216c787ee5be3c646fc3c8b88cc0a40410fed925f8c784cd2a76483a998a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWFQ3GMG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA6jk38gxUwaKZXUNcV7rDWqOM%2FeIxGdvLgt4S9FqK7AiBPwLMPhjvTCIZ%2F1SUSi1%2Fyq7GPeA8Ausbe%2FMj%2BcEcKtSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSB1O08hBJhdU8qtFKtwDdlt5dSJ%2FoDJ7xgwU3iRD5IUh%2Blcw1pBdRlpbkmAjesbn6PGJAD7AHGeFEh7lKUe9X3qrw1dPQPJgSf8g5lg0oTBdVxDbAkPGeguVi7zfupLHqqt0VLdgBMVQzn6GyHeJk%2F%2FaWvys1VrKwYLQIhh4eTmkAsM2QsjZ1v%2BWCqeU%2BYOniJ7yuyI3UHZsaeTFY61hSvMIGYEbZaBTPKcE77dDtLctzsv4dn1SyRbeb8cBMA9bFH7mf4Oe%2FaMKTDZBULCsV7pWNc8hrn53OIbyZYHY%2B1t%2FAfYWSW2kIUvLXDHJQT7ubaefYBCssHWkZuEBeaY4%2BbZUzAXC33ZguCCIdbAIpINcegO609IIalSvaWOCk%2F3jcgTAIC7q8YJg5kzQvaDT32sfYDoxTjIDgarHd%2FHzAkGMBERYXWSSOoi1XxWb0Dr1hZXtR1nQuVWkBa2nl8JNZlJZnyXOrJtjucYvAcW%2Bz5%2BSE4%2B2x9QeOQhxj2hAEDZcSNkGR%2BCrrJlLXvBSYP1PjtMePELsDfn8RXDVCuhnG%2BA27d4FMG8nLLGyg1eOd3ZN612XFaxlL0jhanulm72ZEt%2BiE2fPwifJGX41fbLyhBUdP8kGbXNH%2Bl4aXDroc3PGVQud3GFMU4OHTX8w1c6sxAY6pgEovyLBdOy8p4%2F1NwuXETAgQLPlZixRyx0uKP2lKG48Fc%2Fz7JZ3B%2F%2FMln4YLZODi5i6vLQ%2FEIx4UlxhG%2FC6aw3zaASEi%2FfAtkB2Nd9MZHuobXt8H4SKAiVu0pkUjTOW2KoEdHf8inq%2FNjaWQgMdYAM%2FNIY0Nz6620fft5a2VguyiTYIGyPNyWVbWLE881SJ6G%2B%2BPUHtq1jkmlLf2A7gnbhM7LiKhe9C&X-Amz-Signature=35bd7440ed7ff1ac2cd4ad57be75f083b43a661aa00773496516bc503dac2423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWFQ3GMG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA6jk38gxUwaKZXUNcV7rDWqOM%2FeIxGdvLgt4S9FqK7AiBPwLMPhjvTCIZ%2F1SUSi1%2Fyq7GPeA8Ausbe%2FMj%2BcEcKtSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSB1O08hBJhdU8qtFKtwDdlt5dSJ%2FoDJ7xgwU3iRD5IUh%2Blcw1pBdRlpbkmAjesbn6PGJAD7AHGeFEh7lKUe9X3qrw1dPQPJgSf8g5lg0oTBdVxDbAkPGeguVi7zfupLHqqt0VLdgBMVQzn6GyHeJk%2F%2FaWvys1VrKwYLQIhh4eTmkAsM2QsjZ1v%2BWCqeU%2BYOniJ7yuyI3UHZsaeTFY61hSvMIGYEbZaBTPKcE77dDtLctzsv4dn1SyRbeb8cBMA9bFH7mf4Oe%2FaMKTDZBULCsV7pWNc8hrn53OIbyZYHY%2B1t%2FAfYWSW2kIUvLXDHJQT7ubaefYBCssHWkZuEBeaY4%2BbZUzAXC33ZguCCIdbAIpINcegO609IIalSvaWOCk%2F3jcgTAIC7q8YJg5kzQvaDT32sfYDoxTjIDgarHd%2FHzAkGMBERYXWSSOoi1XxWb0Dr1hZXtR1nQuVWkBa2nl8JNZlJZnyXOrJtjucYvAcW%2Bz5%2BSE4%2B2x9QeOQhxj2hAEDZcSNkGR%2BCrrJlLXvBSYP1PjtMePELsDfn8RXDVCuhnG%2BA27d4FMG8nLLGyg1eOd3ZN612XFaxlL0jhanulm72ZEt%2BiE2fPwifJGX41fbLyhBUdP8kGbXNH%2Bl4aXDroc3PGVQud3GFMU4OHTX8w1c6sxAY6pgEovyLBdOy8p4%2F1NwuXETAgQLPlZixRyx0uKP2lKG48Fc%2Fz7JZ3B%2F%2FMln4YLZODi5i6vLQ%2FEIx4UlxhG%2FC6aw3zaASEi%2FfAtkB2Nd9MZHuobXt8H4SKAiVu0pkUjTOW2KoEdHf8inq%2FNjaWQgMdYAM%2FNIY0Nz6620fft5a2VguyiTYIGyPNyWVbWLE881SJ6G%2B%2BPUHtq1jkmlLf2A7gnbhM7LiKhe9C&X-Amz-Signature=448efb52a53b0b5388187afa7d1b209bccd2a04c4b4272e2aef491e9759e1511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Launch file

<details>
      <summary>What is in this launch file?</summary>
      TODO:
  </details>

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

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWFQ3GMG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA6jk38gxUwaKZXUNcV7rDWqOM%2FeIxGdvLgt4S9FqK7AiBPwLMPhjvTCIZ%2F1SUSi1%2Fyq7GPeA8Ausbe%2FMj%2BcEcKtSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSB1O08hBJhdU8qtFKtwDdlt5dSJ%2FoDJ7xgwU3iRD5IUh%2Blcw1pBdRlpbkmAjesbn6PGJAD7AHGeFEh7lKUe9X3qrw1dPQPJgSf8g5lg0oTBdVxDbAkPGeguVi7zfupLHqqt0VLdgBMVQzn6GyHeJk%2F%2FaWvys1VrKwYLQIhh4eTmkAsM2QsjZ1v%2BWCqeU%2BYOniJ7yuyI3UHZsaeTFY61hSvMIGYEbZaBTPKcE77dDtLctzsv4dn1SyRbeb8cBMA9bFH7mf4Oe%2FaMKTDZBULCsV7pWNc8hrn53OIbyZYHY%2B1t%2FAfYWSW2kIUvLXDHJQT7ubaefYBCssHWkZuEBeaY4%2BbZUzAXC33ZguCCIdbAIpINcegO609IIalSvaWOCk%2F3jcgTAIC7q8YJg5kzQvaDT32sfYDoxTjIDgarHd%2FHzAkGMBERYXWSSOoi1XxWb0Dr1hZXtR1nQuVWkBa2nl8JNZlJZnyXOrJtjucYvAcW%2Bz5%2BSE4%2B2x9QeOQhxj2hAEDZcSNkGR%2BCrrJlLXvBSYP1PjtMePELsDfn8RXDVCuhnG%2BA27d4FMG8nLLGyg1eOd3ZN612XFaxlL0jhanulm72ZEt%2BiE2fPwifJGX41fbLyhBUdP8kGbXNH%2Bl4aXDroc3PGVQud3GFMU4OHTX8w1c6sxAY6pgEovyLBdOy8p4%2F1NwuXETAgQLPlZixRyx0uKP2lKG48Fc%2Fz7JZ3B%2F%2FMln4YLZODi5i6vLQ%2FEIx4UlxhG%2FC6aw3zaASEi%2FfAtkB2Nd9MZHuobXt8H4SKAiVu0pkUjTOW2KoEdHf8inq%2FNjaWQgMdYAM%2FNIY0Nz6620fft5a2VguyiTYIGyPNyWVbWLE881SJ6G%2B%2BPUHtq1jkmlLf2A7gnbhM7LiKhe9C&X-Amz-Signature=28dad9fb8a49404dd12961d33d7c014ae52eef555e711efb870cd5a822cf235a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWFQ3GMG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA6jk38gxUwaKZXUNcV7rDWqOM%2FeIxGdvLgt4S9FqK7AiBPwLMPhjvTCIZ%2F1SUSi1%2Fyq7GPeA8Ausbe%2FMj%2BcEcKtSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSB1O08hBJhdU8qtFKtwDdlt5dSJ%2FoDJ7xgwU3iRD5IUh%2Blcw1pBdRlpbkmAjesbn6PGJAD7AHGeFEh7lKUe9X3qrw1dPQPJgSf8g5lg0oTBdVxDbAkPGeguVi7zfupLHqqt0VLdgBMVQzn6GyHeJk%2F%2FaWvys1VrKwYLQIhh4eTmkAsM2QsjZ1v%2BWCqeU%2BYOniJ7yuyI3UHZsaeTFY61hSvMIGYEbZaBTPKcE77dDtLctzsv4dn1SyRbeb8cBMA9bFH7mf4Oe%2FaMKTDZBULCsV7pWNc8hrn53OIbyZYHY%2B1t%2FAfYWSW2kIUvLXDHJQT7ubaefYBCssHWkZuEBeaY4%2BbZUzAXC33ZguCCIdbAIpINcegO609IIalSvaWOCk%2F3jcgTAIC7q8YJg5kzQvaDT32sfYDoxTjIDgarHd%2FHzAkGMBERYXWSSOoi1XxWb0Dr1hZXtR1nQuVWkBa2nl8JNZlJZnyXOrJtjucYvAcW%2Bz5%2BSE4%2B2x9QeOQhxj2hAEDZcSNkGR%2BCrrJlLXvBSYP1PjtMePELsDfn8RXDVCuhnG%2BA27d4FMG8nLLGyg1eOd3ZN612XFaxlL0jhanulm72ZEt%2BiE2fPwifJGX41fbLyhBUdP8kGbXNH%2Bl4aXDroc3PGVQud3GFMU4OHTX8w1c6sxAY6pgEovyLBdOy8p4%2F1NwuXETAgQLPlZixRyx0uKP2lKG48Fc%2Fz7JZ3B%2F%2FMln4YLZODi5i6vLQ%2FEIx4UlxhG%2FC6aw3zaASEi%2FfAtkB2Nd9MZHuobXt8H4SKAiVu0pkUjTOW2KoEdHf8inq%2FNjaWQgMdYAM%2FNIY0Nz6620fft5a2VguyiTYIGyPNyWVbWLE881SJ6G%2B%2BPUHtq1jkmlLf2A7gnbhM7LiKhe9C&X-Amz-Signature=4b11eab2127c715bbac85f01fed8a049a6dfdba08e899ec3f959c1c7bf9281e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWFQ3GMG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA6jk38gxUwaKZXUNcV7rDWqOM%2FeIxGdvLgt4S9FqK7AiBPwLMPhjvTCIZ%2F1SUSi1%2Fyq7GPeA8Ausbe%2FMj%2BcEcKtSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSB1O08hBJhdU8qtFKtwDdlt5dSJ%2FoDJ7xgwU3iRD5IUh%2Blcw1pBdRlpbkmAjesbn6PGJAD7AHGeFEh7lKUe9X3qrw1dPQPJgSf8g5lg0oTBdVxDbAkPGeguVi7zfupLHqqt0VLdgBMVQzn6GyHeJk%2F%2FaWvys1VrKwYLQIhh4eTmkAsM2QsjZ1v%2BWCqeU%2BYOniJ7yuyI3UHZsaeTFY61hSvMIGYEbZaBTPKcE77dDtLctzsv4dn1SyRbeb8cBMA9bFH7mf4Oe%2FaMKTDZBULCsV7pWNc8hrn53OIbyZYHY%2B1t%2FAfYWSW2kIUvLXDHJQT7ubaefYBCssHWkZuEBeaY4%2BbZUzAXC33ZguCCIdbAIpINcegO609IIalSvaWOCk%2F3jcgTAIC7q8YJg5kzQvaDT32sfYDoxTjIDgarHd%2FHzAkGMBERYXWSSOoi1XxWb0Dr1hZXtR1nQuVWkBa2nl8JNZlJZnyXOrJtjucYvAcW%2Bz5%2BSE4%2B2x9QeOQhxj2hAEDZcSNkGR%2BCrrJlLXvBSYP1PjtMePELsDfn8RXDVCuhnG%2BA27d4FMG8nLLGyg1eOd3ZN612XFaxlL0jhanulm72ZEt%2BiE2fPwifJGX41fbLyhBUdP8kGbXNH%2Bl4aXDroc3PGVQud3GFMU4OHTX8w1c6sxAY6pgEovyLBdOy8p4%2F1NwuXETAgQLPlZixRyx0uKP2lKG48Fc%2Fz7JZ3B%2F%2FMln4YLZODi5i6vLQ%2FEIx4UlxhG%2FC6aw3zaASEi%2FfAtkB2Nd9MZHuobXt8H4SKAiVu0pkUjTOW2KoEdHf8inq%2FNjaWQgMdYAM%2FNIY0Nz6620fft5a2VguyiTYIGyPNyWVbWLE881SJ6G%2B%2BPUHtq1jkmlLf2A7gnbhM7LiKhe9C&X-Amz-Signature=d590f666e19153930cb4b7350ed5633f50f0453f85034da8e4bef7702f8fa40b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWFQ3GMG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA6jk38gxUwaKZXUNcV7rDWqOM%2FeIxGdvLgt4S9FqK7AiBPwLMPhjvTCIZ%2F1SUSi1%2Fyq7GPeA8Ausbe%2FMj%2BcEcKtSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSB1O08hBJhdU8qtFKtwDdlt5dSJ%2FoDJ7xgwU3iRD5IUh%2Blcw1pBdRlpbkmAjesbn6PGJAD7AHGeFEh7lKUe9X3qrw1dPQPJgSf8g5lg0oTBdVxDbAkPGeguVi7zfupLHqqt0VLdgBMVQzn6GyHeJk%2F%2FaWvys1VrKwYLQIhh4eTmkAsM2QsjZ1v%2BWCqeU%2BYOniJ7yuyI3UHZsaeTFY61hSvMIGYEbZaBTPKcE77dDtLctzsv4dn1SyRbeb8cBMA9bFH7mf4Oe%2FaMKTDZBULCsV7pWNc8hrn53OIbyZYHY%2B1t%2FAfYWSW2kIUvLXDHJQT7ubaefYBCssHWkZuEBeaY4%2BbZUzAXC33ZguCCIdbAIpINcegO609IIalSvaWOCk%2F3jcgTAIC7q8YJg5kzQvaDT32sfYDoxTjIDgarHd%2FHzAkGMBERYXWSSOoi1XxWb0Dr1hZXtR1nQuVWkBa2nl8JNZlJZnyXOrJtjucYvAcW%2Bz5%2BSE4%2B2x9QeOQhxj2hAEDZcSNkGR%2BCrrJlLXvBSYP1PjtMePELsDfn8RXDVCuhnG%2BA27d4FMG8nLLGyg1eOd3ZN612XFaxlL0jhanulm72ZEt%2BiE2fPwifJGX41fbLyhBUdP8kGbXNH%2Bl4aXDroc3PGVQud3GFMU4OHTX8w1c6sxAY6pgEovyLBdOy8p4%2F1NwuXETAgQLPlZixRyx0uKP2lKG48Fc%2Fz7JZ3B%2F%2FMln4YLZODi5i6vLQ%2FEIx4UlxhG%2FC6aw3zaASEi%2FfAtkB2Nd9MZHuobXt8H4SKAiVu0pkUjTOW2KoEdHf8inq%2FNjaWQgMdYAM%2FNIY0Nz6620fft5a2VguyiTYIGyPNyWVbWLE881SJ6G%2B%2BPUHtq1jkmlLf2A7gnbhM7LiKhe9C&X-Amz-Signature=5084131232868926ce06fff4bae9924b8a64a11cc6706c135662dfb923c9be8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
