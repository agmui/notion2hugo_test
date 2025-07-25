---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T23:33:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T23:33:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Y2V6XW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCyguZ0g8PKbquO03uDpdqFfpjHy9DJknYGuF0CCRgEngIhAIOxZOuBvI7t3KiNdJWrHw5lYWIFXHoUyjbbA%2FI8F%2BoRKv8DCEEQABoMNjM3NDIzMTgzODA1IgweHwafEtJ3zdTDIYcq3AP6MbSoI%2B69j09zLxkT%2BDwfirusVXm0SZHiIJKupQWdSk5sU5%2BeZx%2BtSItsIOEBqreObnyjJfw8dirmDpgQTYiR7a%2FoE64WsF%2FVVg2EP%2Bue%2FJDzrVzth%2Bqe%2Fov8iwQU6xlISLZ%2BdDGgjoTn70nyNtxdWsS2r7EIWQ19m7Bm%2Bff4Xjx9dDF09tKSduYyCYv5kLL%2B%2F0bdCb%2Brl7DS%2BxoKvJLtt5tmH303qPRFtqQAUfD1T%2Fvs5%2FcSH%2F2uy1fHir80Uw3ExGVu2DwHYV9JGVLv4wEVkDY07NpHtvHA%2BhqMa4ZyZzqPaO8Jx3f%2B%2BAI6t%2Bf2ShLaI3Rx%2BqSdgzL9EaYnTiTNLYFWhIrrdWrNC1DuoC3fJHQkE%2FLJB1tvc3W5lz2LF0Jz3%2BV5gppAITBywh7fGJoYuV0zIJ7id%2F8vavWRXZKb4iwHZflLQAuXJWt3akrfccecl70%2FTckQ0bxSNA7GwyJWvCGOjAyIhCeZxO%2Bx5KVTGplV0JQ2w8aNqpW3ClgUbSkM%2BOdXpSfzj3TDXrW%2FbaTWYp0cjONQLMe0T8zDyav%2BUAu52CcKqR6KmZIP7QP8q5r1iKQxOvG7nN4zZOQ7NXUdtDWGHA5ShBtmhOVn0EXPephAW2zqPrMqEZ8YEjDB6IzEBjqkAQygkJ26kTpfuQAoi7pLqr54sPv5HZ4TEQU8Md5Y2vkilyxELEB3bZbFLqQp%2FIO48fS8W4nWKLzjVxj7Uw2h5GE1wXMlo3E%2FOI%2FY98G8Cef5kFdNUNbG%2FzCNxBfZlvsSqQUdsFTelsDVjs2WHw2OeabeKg1RCcQ8pRm8hXsRlp98Ekxnb7FtTfFmDOxmmqVohWD4n5%2Fdhqv2p9XlW0WeValTwrs0&X-Amz-Signature=fe6c914a59ac629e55aae2c9f3f15cf9f606bbcb10a10c0288b187cd8e71c14a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Y2V6XW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCyguZ0g8PKbquO03uDpdqFfpjHy9DJknYGuF0CCRgEngIhAIOxZOuBvI7t3KiNdJWrHw5lYWIFXHoUyjbbA%2FI8F%2BoRKv8DCEEQABoMNjM3NDIzMTgzODA1IgweHwafEtJ3zdTDIYcq3AP6MbSoI%2B69j09zLxkT%2BDwfirusVXm0SZHiIJKupQWdSk5sU5%2BeZx%2BtSItsIOEBqreObnyjJfw8dirmDpgQTYiR7a%2FoE64WsF%2FVVg2EP%2Bue%2FJDzrVzth%2Bqe%2Fov8iwQU6xlISLZ%2BdDGgjoTn70nyNtxdWsS2r7EIWQ19m7Bm%2Bff4Xjx9dDF09tKSduYyCYv5kLL%2B%2F0bdCb%2Brl7DS%2BxoKvJLtt5tmH303qPRFtqQAUfD1T%2Fvs5%2FcSH%2F2uy1fHir80Uw3ExGVu2DwHYV9JGVLv4wEVkDY07NpHtvHA%2BhqMa4ZyZzqPaO8Jx3f%2B%2BAI6t%2Bf2ShLaI3Rx%2BqSdgzL9EaYnTiTNLYFWhIrrdWrNC1DuoC3fJHQkE%2FLJB1tvc3W5lz2LF0Jz3%2BV5gppAITBywh7fGJoYuV0zIJ7id%2F8vavWRXZKb4iwHZflLQAuXJWt3akrfccecl70%2FTckQ0bxSNA7GwyJWvCGOjAyIhCeZxO%2Bx5KVTGplV0JQ2w8aNqpW3ClgUbSkM%2BOdXpSfzj3TDXrW%2FbaTWYp0cjONQLMe0T8zDyav%2BUAu52CcKqR6KmZIP7QP8q5r1iKQxOvG7nN4zZOQ7NXUdtDWGHA5ShBtmhOVn0EXPephAW2zqPrMqEZ8YEjDB6IzEBjqkAQygkJ26kTpfuQAoi7pLqr54sPv5HZ4TEQU8Md5Y2vkilyxELEB3bZbFLqQp%2FIO48fS8W4nWKLzjVxj7Uw2h5GE1wXMlo3E%2FOI%2FY98G8Cef5kFdNUNbG%2FzCNxBfZlvsSqQUdsFTelsDVjs2WHw2OeabeKg1RCcQ8pRm8hXsRlp98Ekxnb7FtTfFmDOxmmqVohWD4n5%2Fdhqv2p9XlW0WeValTwrs0&X-Amz-Signature=0173fb4081c7f8ea89b07aae7dcb7483a24f2c469ea996b2161cdd71e20e1d45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Y2V6XW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCyguZ0g8PKbquO03uDpdqFfpjHy9DJknYGuF0CCRgEngIhAIOxZOuBvI7t3KiNdJWrHw5lYWIFXHoUyjbbA%2FI8F%2BoRKv8DCEEQABoMNjM3NDIzMTgzODA1IgweHwafEtJ3zdTDIYcq3AP6MbSoI%2B69j09zLxkT%2BDwfirusVXm0SZHiIJKupQWdSk5sU5%2BeZx%2BtSItsIOEBqreObnyjJfw8dirmDpgQTYiR7a%2FoE64WsF%2FVVg2EP%2Bue%2FJDzrVzth%2Bqe%2Fov8iwQU6xlISLZ%2BdDGgjoTn70nyNtxdWsS2r7EIWQ19m7Bm%2Bff4Xjx9dDF09tKSduYyCYv5kLL%2B%2F0bdCb%2Brl7DS%2BxoKvJLtt5tmH303qPRFtqQAUfD1T%2Fvs5%2FcSH%2F2uy1fHir80Uw3ExGVu2DwHYV9JGVLv4wEVkDY07NpHtvHA%2BhqMa4ZyZzqPaO8Jx3f%2B%2BAI6t%2Bf2ShLaI3Rx%2BqSdgzL9EaYnTiTNLYFWhIrrdWrNC1DuoC3fJHQkE%2FLJB1tvc3W5lz2LF0Jz3%2BV5gppAITBywh7fGJoYuV0zIJ7id%2F8vavWRXZKb4iwHZflLQAuXJWt3akrfccecl70%2FTckQ0bxSNA7GwyJWvCGOjAyIhCeZxO%2Bx5KVTGplV0JQ2w8aNqpW3ClgUbSkM%2BOdXpSfzj3TDXrW%2FbaTWYp0cjONQLMe0T8zDyav%2BUAu52CcKqR6KmZIP7QP8q5r1iKQxOvG7nN4zZOQ7NXUdtDWGHA5ShBtmhOVn0EXPephAW2zqPrMqEZ8YEjDB6IzEBjqkAQygkJ26kTpfuQAoi7pLqr54sPv5HZ4TEQU8Md5Y2vkilyxELEB3bZbFLqQp%2FIO48fS8W4nWKLzjVxj7Uw2h5GE1wXMlo3E%2FOI%2FY98G8Cef5kFdNUNbG%2FzCNxBfZlvsSqQUdsFTelsDVjs2WHw2OeabeKg1RCcQ8pRm8hXsRlp98Ekxnb7FtTfFmDOxmmqVohWD4n5%2Fdhqv2p9XlW0WeValTwrs0&X-Amz-Signature=2737f1733df5bc3400c89137decb2429cf76ef0e112e0cb391cc147263024068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Y2V6XW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCyguZ0g8PKbquO03uDpdqFfpjHy9DJknYGuF0CCRgEngIhAIOxZOuBvI7t3KiNdJWrHw5lYWIFXHoUyjbbA%2FI8F%2BoRKv8DCEEQABoMNjM3NDIzMTgzODA1IgweHwafEtJ3zdTDIYcq3AP6MbSoI%2B69j09zLxkT%2BDwfirusVXm0SZHiIJKupQWdSk5sU5%2BeZx%2BtSItsIOEBqreObnyjJfw8dirmDpgQTYiR7a%2FoE64WsF%2FVVg2EP%2Bue%2FJDzrVzth%2Bqe%2Fov8iwQU6xlISLZ%2BdDGgjoTn70nyNtxdWsS2r7EIWQ19m7Bm%2Bff4Xjx9dDF09tKSduYyCYv5kLL%2B%2F0bdCb%2Brl7DS%2BxoKvJLtt5tmH303qPRFtqQAUfD1T%2Fvs5%2FcSH%2F2uy1fHir80Uw3ExGVu2DwHYV9JGVLv4wEVkDY07NpHtvHA%2BhqMa4ZyZzqPaO8Jx3f%2B%2BAI6t%2Bf2ShLaI3Rx%2BqSdgzL9EaYnTiTNLYFWhIrrdWrNC1DuoC3fJHQkE%2FLJB1tvc3W5lz2LF0Jz3%2BV5gppAITBywh7fGJoYuV0zIJ7id%2F8vavWRXZKb4iwHZflLQAuXJWt3akrfccecl70%2FTckQ0bxSNA7GwyJWvCGOjAyIhCeZxO%2Bx5KVTGplV0JQ2w8aNqpW3ClgUbSkM%2BOdXpSfzj3TDXrW%2FbaTWYp0cjONQLMe0T8zDyav%2BUAu52CcKqR6KmZIP7QP8q5r1iKQxOvG7nN4zZOQ7NXUdtDWGHA5ShBtmhOVn0EXPephAW2zqPrMqEZ8YEjDB6IzEBjqkAQygkJ26kTpfuQAoi7pLqr54sPv5HZ4TEQU8Md5Y2vkilyxELEB3bZbFLqQp%2FIO48fS8W4nWKLzjVxj7Uw2h5GE1wXMlo3E%2FOI%2FY98G8Cef5kFdNUNbG%2FzCNxBfZlvsSqQUdsFTelsDVjs2WHw2OeabeKg1RCcQ8pRm8hXsRlp98Ekxnb7FtTfFmDOxmmqVohWD4n5%2Fdhqv2p9XlW0WeValTwrs0&X-Amz-Signature=b281e547f186a01cbd4a80c846948334fbc67155c464376433462f0d50dfb270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Y2V6XW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCyguZ0g8PKbquO03uDpdqFfpjHy9DJknYGuF0CCRgEngIhAIOxZOuBvI7t3KiNdJWrHw5lYWIFXHoUyjbbA%2FI8F%2BoRKv8DCEEQABoMNjM3NDIzMTgzODA1IgweHwafEtJ3zdTDIYcq3AP6MbSoI%2B69j09zLxkT%2BDwfirusVXm0SZHiIJKupQWdSk5sU5%2BeZx%2BtSItsIOEBqreObnyjJfw8dirmDpgQTYiR7a%2FoE64WsF%2FVVg2EP%2Bue%2FJDzrVzth%2Bqe%2Fov8iwQU6xlISLZ%2BdDGgjoTn70nyNtxdWsS2r7EIWQ19m7Bm%2Bff4Xjx9dDF09tKSduYyCYv5kLL%2B%2F0bdCb%2Brl7DS%2BxoKvJLtt5tmH303qPRFtqQAUfD1T%2Fvs5%2FcSH%2F2uy1fHir80Uw3ExGVu2DwHYV9JGVLv4wEVkDY07NpHtvHA%2BhqMa4ZyZzqPaO8Jx3f%2B%2BAI6t%2Bf2ShLaI3Rx%2BqSdgzL9EaYnTiTNLYFWhIrrdWrNC1DuoC3fJHQkE%2FLJB1tvc3W5lz2LF0Jz3%2BV5gppAITBywh7fGJoYuV0zIJ7id%2F8vavWRXZKb4iwHZflLQAuXJWt3akrfccecl70%2FTckQ0bxSNA7GwyJWvCGOjAyIhCeZxO%2Bx5KVTGplV0JQ2w8aNqpW3ClgUbSkM%2BOdXpSfzj3TDXrW%2FbaTWYp0cjONQLMe0T8zDyav%2BUAu52CcKqR6KmZIP7QP8q5r1iKQxOvG7nN4zZOQ7NXUdtDWGHA5ShBtmhOVn0EXPephAW2zqPrMqEZ8YEjDB6IzEBjqkAQygkJ26kTpfuQAoi7pLqr54sPv5HZ4TEQU8Md5Y2vkilyxELEB3bZbFLqQp%2FIO48fS8W4nWKLzjVxj7Uw2h5GE1wXMlo3E%2FOI%2FY98G8Cef5kFdNUNbG%2FzCNxBfZlvsSqQUdsFTelsDVjs2WHw2OeabeKg1RCcQ8pRm8hXsRlp98Ekxnb7FtTfFmDOxmmqVohWD4n5%2Fdhqv2p9XlW0WeValTwrs0&X-Amz-Signature=576069e3a040a85c837f650fca7d2dbf4575a0eaee3dfaecb6872ba15e790b3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Y2V6XW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCyguZ0g8PKbquO03uDpdqFfpjHy9DJknYGuF0CCRgEngIhAIOxZOuBvI7t3KiNdJWrHw5lYWIFXHoUyjbbA%2FI8F%2BoRKv8DCEEQABoMNjM3NDIzMTgzODA1IgweHwafEtJ3zdTDIYcq3AP6MbSoI%2B69j09zLxkT%2BDwfirusVXm0SZHiIJKupQWdSk5sU5%2BeZx%2BtSItsIOEBqreObnyjJfw8dirmDpgQTYiR7a%2FoE64WsF%2FVVg2EP%2Bue%2FJDzrVzth%2Bqe%2Fov8iwQU6xlISLZ%2BdDGgjoTn70nyNtxdWsS2r7EIWQ19m7Bm%2Bff4Xjx9dDF09tKSduYyCYv5kLL%2B%2F0bdCb%2Brl7DS%2BxoKvJLtt5tmH303qPRFtqQAUfD1T%2Fvs5%2FcSH%2F2uy1fHir80Uw3ExGVu2DwHYV9JGVLv4wEVkDY07NpHtvHA%2BhqMa4ZyZzqPaO8Jx3f%2B%2BAI6t%2Bf2ShLaI3Rx%2BqSdgzL9EaYnTiTNLYFWhIrrdWrNC1DuoC3fJHQkE%2FLJB1tvc3W5lz2LF0Jz3%2BV5gppAITBywh7fGJoYuV0zIJ7id%2F8vavWRXZKb4iwHZflLQAuXJWt3akrfccecl70%2FTckQ0bxSNA7GwyJWvCGOjAyIhCeZxO%2Bx5KVTGplV0JQ2w8aNqpW3ClgUbSkM%2BOdXpSfzj3TDXrW%2FbaTWYp0cjONQLMe0T8zDyav%2BUAu52CcKqR6KmZIP7QP8q5r1iKQxOvG7nN4zZOQ7NXUdtDWGHA5ShBtmhOVn0EXPephAW2zqPrMqEZ8YEjDB6IzEBjqkAQygkJ26kTpfuQAoi7pLqr54sPv5HZ4TEQU8Md5Y2vkilyxELEB3bZbFLqQp%2FIO48fS8W4nWKLzjVxj7Uw2h5GE1wXMlo3E%2FOI%2FY98G8Cef5kFdNUNbG%2FzCNxBfZlvsSqQUdsFTelsDVjs2WHw2OeabeKg1RCcQ8pRm8hXsRlp98Ekxnb7FtTfFmDOxmmqVohWD4n5%2Fdhqv2p9XlW0WeValTwrs0&X-Amz-Signature=be67aaa198f6e1b76dae4190bd6e4b19e5d3bc69e7fdded123b50e25e11ea6ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Y2V6XW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCyguZ0g8PKbquO03uDpdqFfpjHy9DJknYGuF0CCRgEngIhAIOxZOuBvI7t3KiNdJWrHw5lYWIFXHoUyjbbA%2FI8F%2BoRKv8DCEEQABoMNjM3NDIzMTgzODA1IgweHwafEtJ3zdTDIYcq3AP6MbSoI%2B69j09zLxkT%2BDwfirusVXm0SZHiIJKupQWdSk5sU5%2BeZx%2BtSItsIOEBqreObnyjJfw8dirmDpgQTYiR7a%2FoE64WsF%2FVVg2EP%2Bue%2FJDzrVzth%2Bqe%2Fov8iwQU6xlISLZ%2BdDGgjoTn70nyNtxdWsS2r7EIWQ19m7Bm%2Bff4Xjx9dDF09tKSduYyCYv5kLL%2B%2F0bdCb%2Brl7DS%2BxoKvJLtt5tmH303qPRFtqQAUfD1T%2Fvs5%2FcSH%2F2uy1fHir80Uw3ExGVu2DwHYV9JGVLv4wEVkDY07NpHtvHA%2BhqMa4ZyZzqPaO8Jx3f%2B%2BAI6t%2Bf2ShLaI3Rx%2BqSdgzL9EaYnTiTNLYFWhIrrdWrNC1DuoC3fJHQkE%2FLJB1tvc3W5lz2LF0Jz3%2BV5gppAITBywh7fGJoYuV0zIJ7id%2F8vavWRXZKb4iwHZflLQAuXJWt3akrfccecl70%2FTckQ0bxSNA7GwyJWvCGOjAyIhCeZxO%2Bx5KVTGplV0JQ2w8aNqpW3ClgUbSkM%2BOdXpSfzj3TDXrW%2FbaTWYp0cjONQLMe0T8zDyav%2BUAu52CcKqR6KmZIP7QP8q5r1iKQxOvG7nN4zZOQ7NXUdtDWGHA5ShBtmhOVn0EXPephAW2zqPrMqEZ8YEjDB6IzEBjqkAQygkJ26kTpfuQAoi7pLqr54sPv5HZ4TEQU8Md5Y2vkilyxELEB3bZbFLqQp%2FIO48fS8W4nWKLzjVxj7Uw2h5GE1wXMlo3E%2FOI%2FY98G8Cef5kFdNUNbG%2FzCNxBfZlvsSqQUdsFTelsDVjs2WHw2OeabeKg1RCcQ8pRm8hXsRlp98Ekxnb7FtTfFmDOxmmqVohWD4n5%2Fdhqv2p9XlW0WeValTwrs0&X-Amz-Signature=26b47f5e7e622338b35dd21ffc995efbe3885ee8219655aa941c9380f5338c94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Y2V6XW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCyguZ0g8PKbquO03uDpdqFfpjHy9DJknYGuF0CCRgEngIhAIOxZOuBvI7t3KiNdJWrHw5lYWIFXHoUyjbbA%2FI8F%2BoRKv8DCEEQABoMNjM3NDIzMTgzODA1IgweHwafEtJ3zdTDIYcq3AP6MbSoI%2B69j09zLxkT%2BDwfirusVXm0SZHiIJKupQWdSk5sU5%2BeZx%2BtSItsIOEBqreObnyjJfw8dirmDpgQTYiR7a%2FoE64WsF%2FVVg2EP%2Bue%2FJDzrVzth%2Bqe%2Fov8iwQU6xlISLZ%2BdDGgjoTn70nyNtxdWsS2r7EIWQ19m7Bm%2Bff4Xjx9dDF09tKSduYyCYv5kLL%2B%2F0bdCb%2Brl7DS%2BxoKvJLtt5tmH303qPRFtqQAUfD1T%2Fvs5%2FcSH%2F2uy1fHir80Uw3ExGVu2DwHYV9JGVLv4wEVkDY07NpHtvHA%2BhqMa4ZyZzqPaO8Jx3f%2B%2BAI6t%2Bf2ShLaI3Rx%2BqSdgzL9EaYnTiTNLYFWhIrrdWrNC1DuoC3fJHQkE%2FLJB1tvc3W5lz2LF0Jz3%2BV5gppAITBywh7fGJoYuV0zIJ7id%2F8vavWRXZKb4iwHZflLQAuXJWt3akrfccecl70%2FTckQ0bxSNA7GwyJWvCGOjAyIhCeZxO%2Bx5KVTGplV0JQ2w8aNqpW3ClgUbSkM%2BOdXpSfzj3TDXrW%2FbaTWYp0cjONQLMe0T8zDyav%2BUAu52CcKqR6KmZIP7QP8q5r1iKQxOvG7nN4zZOQ7NXUdtDWGHA5ShBtmhOVn0EXPephAW2zqPrMqEZ8YEjDB6IzEBjqkAQygkJ26kTpfuQAoi7pLqr54sPv5HZ4TEQU8Md5Y2vkilyxELEB3bZbFLqQp%2FIO48fS8W4nWKLzjVxj7Uw2h5GE1wXMlo3E%2FOI%2FY98G8Cef5kFdNUNbG%2FzCNxBfZlvsSqQUdsFTelsDVjs2WHw2OeabeKg1RCcQ8pRm8hXsRlp98Ekxnb7FtTfFmDOxmmqVohWD4n5%2Fdhqv2p9XlW0WeValTwrs0&X-Amz-Signature=f6633d7ad4db0a4b543386bdc81697d0c52719d22f44fc106f44149bf6c118d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Y2V6XW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCyguZ0g8PKbquO03uDpdqFfpjHy9DJknYGuF0CCRgEngIhAIOxZOuBvI7t3KiNdJWrHw5lYWIFXHoUyjbbA%2FI8F%2BoRKv8DCEEQABoMNjM3NDIzMTgzODA1IgweHwafEtJ3zdTDIYcq3AP6MbSoI%2B69j09zLxkT%2BDwfirusVXm0SZHiIJKupQWdSk5sU5%2BeZx%2BtSItsIOEBqreObnyjJfw8dirmDpgQTYiR7a%2FoE64WsF%2FVVg2EP%2Bue%2FJDzrVzth%2Bqe%2Fov8iwQU6xlISLZ%2BdDGgjoTn70nyNtxdWsS2r7EIWQ19m7Bm%2Bff4Xjx9dDF09tKSduYyCYv5kLL%2B%2F0bdCb%2Brl7DS%2BxoKvJLtt5tmH303qPRFtqQAUfD1T%2Fvs5%2FcSH%2F2uy1fHir80Uw3ExGVu2DwHYV9JGVLv4wEVkDY07NpHtvHA%2BhqMa4ZyZzqPaO8Jx3f%2B%2BAI6t%2Bf2ShLaI3Rx%2BqSdgzL9EaYnTiTNLYFWhIrrdWrNC1DuoC3fJHQkE%2FLJB1tvc3W5lz2LF0Jz3%2BV5gppAITBywh7fGJoYuV0zIJ7id%2F8vavWRXZKb4iwHZflLQAuXJWt3akrfccecl70%2FTckQ0bxSNA7GwyJWvCGOjAyIhCeZxO%2Bx5KVTGplV0JQ2w8aNqpW3ClgUbSkM%2BOdXpSfzj3TDXrW%2FbaTWYp0cjONQLMe0T8zDyav%2BUAu52CcKqR6KmZIP7QP8q5r1iKQxOvG7nN4zZOQ7NXUdtDWGHA5ShBtmhOVn0EXPephAW2zqPrMqEZ8YEjDB6IzEBjqkAQygkJ26kTpfuQAoi7pLqr54sPv5HZ4TEQU8Md5Y2vkilyxELEB3bZbFLqQp%2FIO48fS8W4nWKLzjVxj7Uw2h5GE1wXMlo3E%2FOI%2FY98G8Cef5kFdNUNbG%2FzCNxBfZlvsSqQUdsFTelsDVjs2WHw2OeabeKg1RCcQ8pRm8hXsRlp98Ekxnb7FtTfFmDOxmmqVohWD4n5%2Fdhqv2p9XlW0WeValTwrs0&X-Amz-Signature=ee6636f57030782dc8534f9d9cfea4285e4aede337057b986ee26445692d55c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Y2V6XW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCyguZ0g8PKbquO03uDpdqFfpjHy9DJknYGuF0CCRgEngIhAIOxZOuBvI7t3KiNdJWrHw5lYWIFXHoUyjbbA%2FI8F%2BoRKv8DCEEQABoMNjM3NDIzMTgzODA1IgweHwafEtJ3zdTDIYcq3AP6MbSoI%2B69j09zLxkT%2BDwfirusVXm0SZHiIJKupQWdSk5sU5%2BeZx%2BtSItsIOEBqreObnyjJfw8dirmDpgQTYiR7a%2FoE64WsF%2FVVg2EP%2Bue%2FJDzrVzth%2Bqe%2Fov8iwQU6xlISLZ%2BdDGgjoTn70nyNtxdWsS2r7EIWQ19m7Bm%2Bff4Xjx9dDF09tKSduYyCYv5kLL%2B%2F0bdCb%2Brl7DS%2BxoKvJLtt5tmH303qPRFtqQAUfD1T%2Fvs5%2FcSH%2F2uy1fHir80Uw3ExGVu2DwHYV9JGVLv4wEVkDY07NpHtvHA%2BhqMa4ZyZzqPaO8Jx3f%2B%2BAI6t%2Bf2ShLaI3Rx%2BqSdgzL9EaYnTiTNLYFWhIrrdWrNC1DuoC3fJHQkE%2FLJB1tvc3W5lz2LF0Jz3%2BV5gppAITBywh7fGJoYuV0zIJ7id%2F8vavWRXZKb4iwHZflLQAuXJWt3akrfccecl70%2FTckQ0bxSNA7GwyJWvCGOjAyIhCeZxO%2Bx5KVTGplV0JQ2w8aNqpW3ClgUbSkM%2BOdXpSfzj3TDXrW%2FbaTWYp0cjONQLMe0T8zDyav%2BUAu52CcKqR6KmZIP7QP8q5r1iKQxOvG7nN4zZOQ7NXUdtDWGHA5ShBtmhOVn0EXPephAW2zqPrMqEZ8YEjDB6IzEBjqkAQygkJ26kTpfuQAoi7pLqr54sPv5HZ4TEQU8Md5Y2vkilyxELEB3bZbFLqQp%2FIO48fS8W4nWKLzjVxj7Uw2h5GE1wXMlo3E%2FOI%2FY98G8Cef5kFdNUNbG%2FzCNxBfZlvsSqQUdsFTelsDVjs2WHw2OeabeKg1RCcQ8pRm8hXsRlp98Ekxnb7FtTfFmDOxmmqVohWD4n5%2Fdhqv2p9XlW0WeValTwrs0&X-Amz-Signature=cb1713699e58405b754a478b6ef4645114828b8a72818fe967dafa0f1479faea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

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
      
      <collision>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
      </collision>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Y2V6XW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCyguZ0g8PKbquO03uDpdqFfpjHy9DJknYGuF0CCRgEngIhAIOxZOuBvI7t3KiNdJWrHw5lYWIFXHoUyjbbA%2FI8F%2BoRKv8DCEEQABoMNjM3NDIzMTgzODA1IgweHwafEtJ3zdTDIYcq3AP6MbSoI%2B69j09zLxkT%2BDwfirusVXm0SZHiIJKupQWdSk5sU5%2BeZx%2BtSItsIOEBqreObnyjJfw8dirmDpgQTYiR7a%2FoE64WsF%2FVVg2EP%2Bue%2FJDzrVzth%2Bqe%2Fov8iwQU6xlISLZ%2BdDGgjoTn70nyNtxdWsS2r7EIWQ19m7Bm%2Bff4Xjx9dDF09tKSduYyCYv5kLL%2B%2F0bdCb%2Brl7DS%2BxoKvJLtt5tmH303qPRFtqQAUfD1T%2Fvs5%2FcSH%2F2uy1fHir80Uw3ExGVu2DwHYV9JGVLv4wEVkDY07NpHtvHA%2BhqMa4ZyZzqPaO8Jx3f%2B%2BAI6t%2Bf2ShLaI3Rx%2BqSdgzL9EaYnTiTNLYFWhIrrdWrNC1DuoC3fJHQkE%2FLJB1tvc3W5lz2LF0Jz3%2BV5gppAITBywh7fGJoYuV0zIJ7id%2F8vavWRXZKb4iwHZflLQAuXJWt3akrfccecl70%2FTckQ0bxSNA7GwyJWvCGOjAyIhCeZxO%2Bx5KVTGplV0JQ2w8aNqpW3ClgUbSkM%2BOdXpSfzj3TDXrW%2FbaTWYp0cjONQLMe0T8zDyav%2BUAu52CcKqR6KmZIP7QP8q5r1iKQxOvG7nN4zZOQ7NXUdtDWGHA5ShBtmhOVn0EXPephAW2zqPrMqEZ8YEjDB6IzEBjqkAQygkJ26kTpfuQAoi7pLqr54sPv5HZ4TEQU8Md5Y2vkilyxELEB3bZbFLqQp%2FIO48fS8W4nWKLzjVxj7Uw2h5GE1wXMlo3E%2FOI%2FY98G8Cef5kFdNUNbG%2FzCNxBfZlvsSqQUdsFTelsDVjs2WHw2OeabeKg1RCcQ8pRm8hXsRlp98Ekxnb7FtTfFmDOxmmqVohWD4n5%2Fdhqv2p9XlW0WeValTwrs0&X-Amz-Signature=14a0160eb1d0983a0015a55d7b6a8e2616ec936c55c5dfe2465a135aaa3f3b8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Y2V6XW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCyguZ0g8PKbquO03uDpdqFfpjHy9DJknYGuF0CCRgEngIhAIOxZOuBvI7t3KiNdJWrHw5lYWIFXHoUyjbbA%2FI8F%2BoRKv8DCEEQABoMNjM3NDIzMTgzODA1IgweHwafEtJ3zdTDIYcq3AP6MbSoI%2B69j09zLxkT%2BDwfirusVXm0SZHiIJKupQWdSk5sU5%2BeZx%2BtSItsIOEBqreObnyjJfw8dirmDpgQTYiR7a%2FoE64WsF%2FVVg2EP%2Bue%2FJDzrVzth%2Bqe%2Fov8iwQU6xlISLZ%2BdDGgjoTn70nyNtxdWsS2r7EIWQ19m7Bm%2Bff4Xjx9dDF09tKSduYyCYv5kLL%2B%2F0bdCb%2Brl7DS%2BxoKvJLtt5tmH303qPRFtqQAUfD1T%2Fvs5%2FcSH%2F2uy1fHir80Uw3ExGVu2DwHYV9JGVLv4wEVkDY07NpHtvHA%2BhqMa4ZyZzqPaO8Jx3f%2B%2BAI6t%2Bf2ShLaI3Rx%2BqSdgzL9EaYnTiTNLYFWhIrrdWrNC1DuoC3fJHQkE%2FLJB1tvc3W5lz2LF0Jz3%2BV5gppAITBywh7fGJoYuV0zIJ7id%2F8vavWRXZKb4iwHZflLQAuXJWt3akrfccecl70%2FTckQ0bxSNA7GwyJWvCGOjAyIhCeZxO%2Bx5KVTGplV0JQ2w8aNqpW3ClgUbSkM%2BOdXpSfzj3TDXrW%2FbaTWYp0cjONQLMe0T8zDyav%2BUAu52CcKqR6KmZIP7QP8q5r1iKQxOvG7nN4zZOQ7NXUdtDWGHA5ShBtmhOVn0EXPephAW2zqPrMqEZ8YEjDB6IzEBjqkAQygkJ26kTpfuQAoi7pLqr54sPv5HZ4TEQU8Md5Y2vkilyxELEB3bZbFLqQp%2FIO48fS8W4nWKLzjVxj7Uw2h5GE1wXMlo3E%2FOI%2FY98G8Cef5kFdNUNbG%2FzCNxBfZlvsSqQUdsFTelsDVjs2WHw2OeabeKg1RCcQ8pRm8hXsRlp98Ekxnb7FtTfFmDOxmmqVohWD4n5%2Fdhqv2p9XlW0WeValTwrs0&X-Amz-Signature=237067d8858d5704f663f934a4f02b3b9461f7d7bbaed3f4f852637d33b6ca60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Y2V6XW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCyguZ0g8PKbquO03uDpdqFfpjHy9DJknYGuF0CCRgEngIhAIOxZOuBvI7t3KiNdJWrHw5lYWIFXHoUyjbbA%2FI8F%2BoRKv8DCEEQABoMNjM3NDIzMTgzODA1IgweHwafEtJ3zdTDIYcq3AP6MbSoI%2B69j09zLxkT%2BDwfirusVXm0SZHiIJKupQWdSk5sU5%2BeZx%2BtSItsIOEBqreObnyjJfw8dirmDpgQTYiR7a%2FoE64WsF%2FVVg2EP%2Bue%2FJDzrVzth%2Bqe%2Fov8iwQU6xlISLZ%2BdDGgjoTn70nyNtxdWsS2r7EIWQ19m7Bm%2Bff4Xjx9dDF09tKSduYyCYv5kLL%2B%2F0bdCb%2Brl7DS%2BxoKvJLtt5tmH303qPRFtqQAUfD1T%2Fvs5%2FcSH%2F2uy1fHir80Uw3ExGVu2DwHYV9JGVLv4wEVkDY07NpHtvHA%2BhqMa4ZyZzqPaO8Jx3f%2B%2BAI6t%2Bf2ShLaI3Rx%2BqSdgzL9EaYnTiTNLYFWhIrrdWrNC1DuoC3fJHQkE%2FLJB1tvc3W5lz2LF0Jz3%2BV5gppAITBywh7fGJoYuV0zIJ7id%2F8vavWRXZKb4iwHZflLQAuXJWt3akrfccecl70%2FTckQ0bxSNA7GwyJWvCGOjAyIhCeZxO%2Bx5KVTGplV0JQ2w8aNqpW3ClgUbSkM%2BOdXpSfzj3TDXrW%2FbaTWYp0cjONQLMe0T8zDyav%2BUAu52CcKqR6KmZIP7QP8q5r1iKQxOvG7nN4zZOQ7NXUdtDWGHA5ShBtmhOVn0EXPephAW2zqPrMqEZ8YEjDB6IzEBjqkAQygkJ26kTpfuQAoi7pLqr54sPv5HZ4TEQU8Md5Y2vkilyxELEB3bZbFLqQp%2FIO48fS8W4nWKLzjVxj7Uw2h5GE1wXMlo3E%2FOI%2FY98G8Cef5kFdNUNbG%2FzCNxBfZlvsSqQUdsFTelsDVjs2WHw2OeabeKg1RCcQ8pRm8hXsRlp98Ekxnb7FtTfFmDOxmmqVohWD4n5%2Fdhqv2p9XlW0WeValTwrs0&X-Amz-Signature=9d5291782fef4c8e9cab099404b7e1b2b47dbec908f2e67e020303157038522f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Y2V6XW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCyguZ0g8PKbquO03uDpdqFfpjHy9DJknYGuF0CCRgEngIhAIOxZOuBvI7t3KiNdJWrHw5lYWIFXHoUyjbbA%2FI8F%2BoRKv8DCEEQABoMNjM3NDIzMTgzODA1IgweHwafEtJ3zdTDIYcq3AP6MbSoI%2B69j09zLxkT%2BDwfirusVXm0SZHiIJKupQWdSk5sU5%2BeZx%2BtSItsIOEBqreObnyjJfw8dirmDpgQTYiR7a%2FoE64WsF%2FVVg2EP%2Bue%2FJDzrVzth%2Bqe%2Fov8iwQU6xlISLZ%2BdDGgjoTn70nyNtxdWsS2r7EIWQ19m7Bm%2Bff4Xjx9dDF09tKSduYyCYv5kLL%2B%2F0bdCb%2Brl7DS%2BxoKvJLtt5tmH303qPRFtqQAUfD1T%2Fvs5%2FcSH%2F2uy1fHir80Uw3ExGVu2DwHYV9JGVLv4wEVkDY07NpHtvHA%2BhqMa4ZyZzqPaO8Jx3f%2B%2BAI6t%2Bf2ShLaI3Rx%2BqSdgzL9EaYnTiTNLYFWhIrrdWrNC1DuoC3fJHQkE%2FLJB1tvc3W5lz2LF0Jz3%2BV5gppAITBywh7fGJoYuV0zIJ7id%2F8vavWRXZKb4iwHZflLQAuXJWt3akrfccecl70%2FTckQ0bxSNA7GwyJWvCGOjAyIhCeZxO%2Bx5KVTGplV0JQ2w8aNqpW3ClgUbSkM%2BOdXpSfzj3TDXrW%2FbaTWYp0cjONQLMe0T8zDyav%2BUAu52CcKqR6KmZIP7QP8q5r1iKQxOvG7nN4zZOQ7NXUdtDWGHA5ShBtmhOVn0EXPephAW2zqPrMqEZ8YEjDB6IzEBjqkAQygkJ26kTpfuQAoi7pLqr54sPv5HZ4TEQU8Md5Y2vkilyxELEB3bZbFLqQp%2FIO48fS8W4nWKLzjVxj7Uw2h5GE1wXMlo3E%2FOI%2FY98G8Cef5kFdNUNbG%2FzCNxBfZlvsSqQUdsFTelsDVjs2WHw2OeabeKg1RCcQ8pRm8hXsRlp98Ekxnb7FtTfFmDOxmmqVohWD4n5%2Fdhqv2p9XlW0WeValTwrs0&X-Amz-Signature=f7bd9ca9e890545237cd4fb2309bf5c026ec0f15b151218c0e1e8e36f0aa1b0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663763BKHE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIF4W7EMX9DY6p7JwgwlTiJceqwrpPalDLicQdANYqTcUAiA5ImfEPx3rymuCfHBqlpGcEqNqEhq0R7WRhD69m34qESr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMpoBmHn37eb3H5IwPKtwD7w735XQkYpsO8Ces0SaZDDCYNOIN6qywFnrD9Se1gj13YpA38XkRrP4Fxq4f%2FMSjHWPT9g8GvfITMfNvW08xGUlQBDWbyvj4ELYyIt5boegMGwJxU1bY2VWzeQkYmgoAid2Js1FGw5n%2BRdNC9tFNDokGHr5loenlMaE%2FcGjKnDvVtZ0UvESZorI%2BWq7GdK8u36dt3rPmoONPeseDBwR49uLb4mYK5NaltTMOuxF8Jk8CuToO0sxk2t6QYSpHN2wff6nDbOFSebLyzYI1ghsA001iW3NNWtNY7QK03nSSU9oJK6tuxPvOXWbsnnkNXP2MVxo5AA%2FrOCXDIbK07PutBGbKILnmJ4UuK27WPVOgoc9Q%2Bapm7t3AVsaJSKlYBm%2BhymvICsUjxWBiA6Cx6RJTyfRAyRLTaUfK9bMx8IXBAUpFSkpgAiu%2FVK3%2FBhDxex0pMDEUVlZfPwHu8ZUSEo2X5qHGcmyRMjf6BQgMstFjzNh16G7VCtqqBxXFJFjO3sXisjFv9ZoD05LNDTS6wDbDipK%2FoQ9keIS0qFwBOvlV6%2B7fivvnrkq%2BxvC3VD3f%2BgYN%2FqAIJQYtPiotrJ0DvZBDt0fXX8pNd7WpItqu6W2YWIgPMvNBPdL7IwiNiQIwiumMxAY6pgHC%2Bpr3NH8d%2BWtJVjYtRcWqbZlXM%2FfKNTjvhWPsmOVfu4rUyEU10BQdTi%2FL6ESHtza43aNuDzIiZtLTICEpoptJIy7V%2FcdeG2v%2B3CW9gPwcfhrzTkqPSTnNvvN3ywl6hG582KCuusLSSJE24uWqbV1BlMBETh7gqS5TcBqYE4FUwnR8cpC8yOniZs7O5a6i4Ml3M34RwOgvAA%2BamJRdm%2Faz9VjHGRqV&X-Amz-Signature=99ecce2c3593780dce214f283fd8519da8b722931867d868918bde5c4634df9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663763BKHE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIF4W7EMX9DY6p7JwgwlTiJceqwrpPalDLicQdANYqTcUAiA5ImfEPx3rymuCfHBqlpGcEqNqEhq0R7WRhD69m34qESr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMpoBmHn37eb3H5IwPKtwD7w735XQkYpsO8Ces0SaZDDCYNOIN6qywFnrD9Se1gj13YpA38XkRrP4Fxq4f%2FMSjHWPT9g8GvfITMfNvW08xGUlQBDWbyvj4ELYyIt5boegMGwJxU1bY2VWzeQkYmgoAid2Js1FGw5n%2BRdNC9tFNDokGHr5loenlMaE%2FcGjKnDvVtZ0UvESZorI%2BWq7GdK8u36dt3rPmoONPeseDBwR49uLb4mYK5NaltTMOuxF8Jk8CuToO0sxk2t6QYSpHN2wff6nDbOFSebLyzYI1ghsA001iW3NNWtNY7QK03nSSU9oJK6tuxPvOXWbsnnkNXP2MVxo5AA%2FrOCXDIbK07PutBGbKILnmJ4UuK27WPVOgoc9Q%2Bapm7t3AVsaJSKlYBm%2BhymvICsUjxWBiA6Cx6RJTyfRAyRLTaUfK9bMx8IXBAUpFSkpgAiu%2FVK3%2FBhDxex0pMDEUVlZfPwHu8ZUSEo2X5qHGcmyRMjf6BQgMstFjzNh16G7VCtqqBxXFJFjO3sXisjFv9ZoD05LNDTS6wDbDipK%2FoQ9keIS0qFwBOvlV6%2B7fivvnrkq%2BxvC3VD3f%2BgYN%2FqAIJQYtPiotrJ0DvZBDt0fXX8pNd7WpItqu6W2YWIgPMvNBPdL7IwiNiQIwiumMxAY6pgHC%2Bpr3NH8d%2BWtJVjYtRcWqbZlXM%2FfKNTjvhWPsmOVfu4rUyEU10BQdTi%2FL6ESHtza43aNuDzIiZtLTICEpoptJIy7V%2FcdeG2v%2B3CW9gPwcfhrzTkqPSTnNvvN3ywl6hG582KCuusLSSJE24uWqbV1BlMBETh7gqS5TcBqYE4FUwnR8cpC8yOniZs7O5a6i4Ml3M34RwOgvAA%2BamJRdm%2Faz9VjHGRqV&X-Amz-Signature=dd2cf5264130cd46a63b422757f0379ab5a7cb8ff1efa977aca5fafcd26cabe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663763BKHE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIF4W7EMX9DY6p7JwgwlTiJceqwrpPalDLicQdANYqTcUAiA5ImfEPx3rymuCfHBqlpGcEqNqEhq0R7WRhD69m34qESr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMpoBmHn37eb3H5IwPKtwD7w735XQkYpsO8Ces0SaZDDCYNOIN6qywFnrD9Se1gj13YpA38XkRrP4Fxq4f%2FMSjHWPT9g8GvfITMfNvW08xGUlQBDWbyvj4ELYyIt5boegMGwJxU1bY2VWzeQkYmgoAid2Js1FGw5n%2BRdNC9tFNDokGHr5loenlMaE%2FcGjKnDvVtZ0UvESZorI%2BWq7GdK8u36dt3rPmoONPeseDBwR49uLb4mYK5NaltTMOuxF8Jk8CuToO0sxk2t6QYSpHN2wff6nDbOFSebLyzYI1ghsA001iW3NNWtNY7QK03nSSU9oJK6tuxPvOXWbsnnkNXP2MVxo5AA%2FrOCXDIbK07PutBGbKILnmJ4UuK27WPVOgoc9Q%2Bapm7t3AVsaJSKlYBm%2BhymvICsUjxWBiA6Cx6RJTyfRAyRLTaUfK9bMx8IXBAUpFSkpgAiu%2FVK3%2FBhDxex0pMDEUVlZfPwHu8ZUSEo2X5qHGcmyRMjf6BQgMstFjzNh16G7VCtqqBxXFJFjO3sXisjFv9ZoD05LNDTS6wDbDipK%2FoQ9keIS0qFwBOvlV6%2B7fivvnrkq%2BxvC3VD3f%2BgYN%2FqAIJQYtPiotrJ0DvZBDt0fXX8pNd7WpItqu6W2YWIgPMvNBPdL7IwiNiQIwiumMxAY6pgHC%2Bpr3NH8d%2BWtJVjYtRcWqbZlXM%2FfKNTjvhWPsmOVfu4rUyEU10BQdTi%2FL6ESHtza43aNuDzIiZtLTICEpoptJIy7V%2FcdeG2v%2B3CW9gPwcfhrzTkqPSTnNvvN3ywl6hG582KCuusLSSJE24uWqbV1BlMBETh7gqS5TcBqYE4FUwnR8cpC8yOniZs7O5a6i4Ml3M34RwOgvAA%2BamJRdm%2Faz9VjHGRqV&X-Amz-Signature=2a2d7b592a4cb5ce043e30de86f9a819adabe4ada650de4c3b2b6201c104b957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663763BKHE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIF4W7EMX9DY6p7JwgwlTiJceqwrpPalDLicQdANYqTcUAiA5ImfEPx3rymuCfHBqlpGcEqNqEhq0R7WRhD69m34qESr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMpoBmHn37eb3H5IwPKtwD7w735XQkYpsO8Ces0SaZDDCYNOIN6qywFnrD9Se1gj13YpA38XkRrP4Fxq4f%2FMSjHWPT9g8GvfITMfNvW08xGUlQBDWbyvj4ELYyIt5boegMGwJxU1bY2VWzeQkYmgoAid2Js1FGw5n%2BRdNC9tFNDokGHr5loenlMaE%2FcGjKnDvVtZ0UvESZorI%2BWq7GdK8u36dt3rPmoONPeseDBwR49uLb4mYK5NaltTMOuxF8Jk8CuToO0sxk2t6QYSpHN2wff6nDbOFSebLyzYI1ghsA001iW3NNWtNY7QK03nSSU9oJK6tuxPvOXWbsnnkNXP2MVxo5AA%2FrOCXDIbK07PutBGbKILnmJ4UuK27WPVOgoc9Q%2Bapm7t3AVsaJSKlYBm%2BhymvICsUjxWBiA6Cx6RJTyfRAyRLTaUfK9bMx8IXBAUpFSkpgAiu%2FVK3%2FBhDxex0pMDEUVlZfPwHu8ZUSEo2X5qHGcmyRMjf6BQgMstFjzNh16G7VCtqqBxXFJFjO3sXisjFv9ZoD05LNDTS6wDbDipK%2FoQ9keIS0qFwBOvlV6%2B7fivvnrkq%2BxvC3VD3f%2BgYN%2FqAIJQYtPiotrJ0DvZBDt0fXX8pNd7WpItqu6W2YWIgPMvNBPdL7IwiNiQIwiumMxAY6pgHC%2Bpr3NH8d%2BWtJVjYtRcWqbZlXM%2FfKNTjvhWPsmOVfu4rUyEU10BQdTi%2FL6ESHtza43aNuDzIiZtLTICEpoptJIy7V%2FcdeG2v%2B3CW9gPwcfhrzTkqPSTnNvvN3ywl6hG582KCuusLSSJE24uWqbV1BlMBETh7gqS5TcBqYE4FUwnR8cpC8yOniZs7O5a6i4Ml3M34RwOgvAA%2BamJRdm%2Faz9VjHGRqV&X-Amz-Signature=fba5790a2231b9b0bd54e050e5a93ecbb1eb2f9abd501fc79c8e60625bbe7dbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663763BKHE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIF4W7EMX9DY6p7JwgwlTiJceqwrpPalDLicQdANYqTcUAiA5ImfEPx3rymuCfHBqlpGcEqNqEhq0R7WRhD69m34qESr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMpoBmHn37eb3H5IwPKtwD7w735XQkYpsO8Ces0SaZDDCYNOIN6qywFnrD9Se1gj13YpA38XkRrP4Fxq4f%2FMSjHWPT9g8GvfITMfNvW08xGUlQBDWbyvj4ELYyIt5boegMGwJxU1bY2VWzeQkYmgoAid2Js1FGw5n%2BRdNC9tFNDokGHr5loenlMaE%2FcGjKnDvVtZ0UvESZorI%2BWq7GdK8u36dt3rPmoONPeseDBwR49uLb4mYK5NaltTMOuxF8Jk8CuToO0sxk2t6QYSpHN2wff6nDbOFSebLyzYI1ghsA001iW3NNWtNY7QK03nSSU9oJK6tuxPvOXWbsnnkNXP2MVxo5AA%2FrOCXDIbK07PutBGbKILnmJ4UuK27WPVOgoc9Q%2Bapm7t3AVsaJSKlYBm%2BhymvICsUjxWBiA6Cx6RJTyfRAyRLTaUfK9bMx8IXBAUpFSkpgAiu%2FVK3%2FBhDxex0pMDEUVlZfPwHu8ZUSEo2X5qHGcmyRMjf6BQgMstFjzNh16G7VCtqqBxXFJFjO3sXisjFv9ZoD05LNDTS6wDbDipK%2FoQ9keIS0qFwBOvlV6%2B7fivvnrkq%2BxvC3VD3f%2BgYN%2FqAIJQYtPiotrJ0DvZBDt0fXX8pNd7WpItqu6W2YWIgPMvNBPdL7IwiNiQIwiumMxAY6pgHC%2Bpr3NH8d%2BWtJVjYtRcWqbZlXM%2FfKNTjvhWPsmOVfu4rUyEU10BQdTi%2FL6ESHtza43aNuDzIiZtLTICEpoptJIy7V%2FcdeG2v%2B3CW9gPwcfhrzTkqPSTnNvvN3ywl6hG582KCuusLSSJE24uWqbV1BlMBETh7gqS5TcBqYE4FUwnR8cpC8yOniZs7O5a6i4Ml3M34RwOgvAA%2BamJRdm%2Faz9VjHGRqV&X-Amz-Signature=325863215afc8d8305e9230f11e9d9dffb3f0ea26b46705f3d8d654a58023e8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663763BKHE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIF4W7EMX9DY6p7JwgwlTiJceqwrpPalDLicQdANYqTcUAiA5ImfEPx3rymuCfHBqlpGcEqNqEhq0R7WRhD69m34qESr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMpoBmHn37eb3H5IwPKtwD7w735XQkYpsO8Ces0SaZDDCYNOIN6qywFnrD9Se1gj13YpA38XkRrP4Fxq4f%2FMSjHWPT9g8GvfITMfNvW08xGUlQBDWbyvj4ELYyIt5boegMGwJxU1bY2VWzeQkYmgoAid2Js1FGw5n%2BRdNC9tFNDokGHr5loenlMaE%2FcGjKnDvVtZ0UvESZorI%2BWq7GdK8u36dt3rPmoONPeseDBwR49uLb4mYK5NaltTMOuxF8Jk8CuToO0sxk2t6QYSpHN2wff6nDbOFSebLyzYI1ghsA001iW3NNWtNY7QK03nSSU9oJK6tuxPvOXWbsnnkNXP2MVxo5AA%2FrOCXDIbK07PutBGbKILnmJ4UuK27WPVOgoc9Q%2Bapm7t3AVsaJSKlYBm%2BhymvICsUjxWBiA6Cx6RJTyfRAyRLTaUfK9bMx8IXBAUpFSkpgAiu%2FVK3%2FBhDxex0pMDEUVlZfPwHu8ZUSEo2X5qHGcmyRMjf6BQgMstFjzNh16G7VCtqqBxXFJFjO3sXisjFv9ZoD05LNDTS6wDbDipK%2FoQ9keIS0qFwBOvlV6%2B7fivvnrkq%2BxvC3VD3f%2BgYN%2FqAIJQYtPiotrJ0DvZBDt0fXX8pNd7WpItqu6W2YWIgPMvNBPdL7IwiNiQIwiumMxAY6pgHC%2Bpr3NH8d%2BWtJVjYtRcWqbZlXM%2FfKNTjvhWPsmOVfu4rUyEU10BQdTi%2FL6ESHtza43aNuDzIiZtLTICEpoptJIy7V%2FcdeG2v%2B3CW9gPwcfhrzTkqPSTnNvvN3ywl6hG582KCuusLSSJE24uWqbV1BlMBETh7gqS5TcBqYE4FUwnR8cpC8yOniZs7O5a6i4Ml3M34RwOgvAA%2BamJRdm%2Faz9VjHGRqV&X-Amz-Signature=3c75831da07b970030ef0e852498822b29fd7b1c5c72ee554ffd122d05218489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
