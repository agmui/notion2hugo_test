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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJYJGNH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD95DhnWHlkHC5C45wSzFkdq1XI4i%2BK0vLRLQUS8S5UngIgKKrhSSzlcHmpD2%2FAWSTtNSe3MwdZe8N%2B8tgnPJU3fScq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMwoIi8HOEwrLVwt7ircA9cvejhOulERJ7jKVbdOlV5d8KAkboQtbbiEGjSHSUdeX%2Bvtgu12yeQRd%2BHSTEWQ9Irvpy%2FsfDxbSjDKCE80d6dei%2F9eLC2WsDE2kGaH%2FwwYgYnFHyStPYj%2FUj3HIL5fYzsvufFbmYgVKAM4EdlWbn%2FqVCuIO%2FlD4TCZUNuNnqHDq6ph6VNovsajuN8LPXuaxgiturwj7V%2Fe0xSoIP8XYkN9ar98UqR5EFv3WXQATc1IRxxEkZaYF6i%2F0%2FcvOTnr8VGaoVb9Pn2RGKSdE68ZsIdSnXUvvHeRnIh0ks4yEk%2F%2B1ECp3RT%2B7TAQSZ%2FeCd5C8A3qXEnfcQPp5Mo9eYTEb%2F%2FoeZ7sJutKB8MuMTd2cDx3LB0JhmbxfGbxxmkrQNeUhEaBqSOf4nTwoc%2Foz74qr3GRvUqkjtZfCEKtV5Goh1Iy%2B5ZEfvCatCxOvO09f7IYgYowcbTSMYgPFaKX70ox9nIPhDqt45YfFR3alCusycpsOsZE9R8Ry5sGS%2Bj86PBWGRkP2xqPwXE6SPx2T4MnDhxZmagYeqPG3L1nvE%2BLPJHBUsaKnbpIo5Aufb70eZvAVx%2B06DPA7OUP9TWtGQR%2Btqoo8Rt9Diq23UFQZ1rlQZa27uosqethiBLGW9fYMJX7h8oGOqUBSjB%2BLXQuD%2BJz%2BU6H9iVgxf9wH09Tmi1Wo3B%2Fp0cXJwINIFr9qk7kGHxRXHLTgBvGiescbwQCY87WfbpTpUqxMIh0vUbhHyzFLxfs2dfOOTO9H9u2KTC4LRjjjZtm9OSUh628zrX9qphsRcj4iMZyWMzs32RIP0VcaVWsGiaY%2FiSxJJQeQmOjXmBOzDF7%2B%2Fk9mpxnc3TwykKgxW3niH4GOW2Kkm%2BM&X-Amz-Signature=d9f6ef15aceee1fab07634b809bc660ca7b9eeeaacd1f98756629b843b69a63d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJYJGNH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD95DhnWHlkHC5C45wSzFkdq1XI4i%2BK0vLRLQUS8S5UngIgKKrhSSzlcHmpD2%2FAWSTtNSe3MwdZe8N%2B8tgnPJU3fScq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMwoIi8HOEwrLVwt7ircA9cvejhOulERJ7jKVbdOlV5d8KAkboQtbbiEGjSHSUdeX%2Bvtgu12yeQRd%2BHSTEWQ9Irvpy%2FsfDxbSjDKCE80d6dei%2F9eLC2WsDE2kGaH%2FwwYgYnFHyStPYj%2FUj3HIL5fYzsvufFbmYgVKAM4EdlWbn%2FqVCuIO%2FlD4TCZUNuNnqHDq6ph6VNovsajuN8LPXuaxgiturwj7V%2Fe0xSoIP8XYkN9ar98UqR5EFv3WXQATc1IRxxEkZaYF6i%2F0%2FcvOTnr8VGaoVb9Pn2RGKSdE68ZsIdSnXUvvHeRnIh0ks4yEk%2F%2B1ECp3RT%2B7TAQSZ%2FeCd5C8A3qXEnfcQPp5Mo9eYTEb%2F%2FoeZ7sJutKB8MuMTd2cDx3LB0JhmbxfGbxxmkrQNeUhEaBqSOf4nTwoc%2Foz74qr3GRvUqkjtZfCEKtV5Goh1Iy%2B5ZEfvCatCxOvO09f7IYgYowcbTSMYgPFaKX70ox9nIPhDqt45YfFR3alCusycpsOsZE9R8Ry5sGS%2Bj86PBWGRkP2xqPwXE6SPx2T4MnDhxZmagYeqPG3L1nvE%2BLPJHBUsaKnbpIo5Aufb70eZvAVx%2B06DPA7OUP9TWtGQR%2Btqoo8Rt9Diq23UFQZ1rlQZa27uosqethiBLGW9fYMJX7h8oGOqUBSjB%2BLXQuD%2BJz%2BU6H9iVgxf9wH09Tmi1Wo3B%2Fp0cXJwINIFr9qk7kGHxRXHLTgBvGiescbwQCY87WfbpTpUqxMIh0vUbhHyzFLxfs2dfOOTO9H9u2KTC4LRjjjZtm9OSUh628zrX9qphsRcj4iMZyWMzs32RIP0VcaVWsGiaY%2FiSxJJQeQmOjXmBOzDF7%2B%2Fk9mpxnc3TwykKgxW3niH4GOW2Kkm%2BM&X-Amz-Signature=7175b12195780519fe5fb8ecff7215afe906a99dfdb4757ec5f106ed3b8ce558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJYJGNH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD95DhnWHlkHC5C45wSzFkdq1XI4i%2BK0vLRLQUS8S5UngIgKKrhSSzlcHmpD2%2FAWSTtNSe3MwdZe8N%2B8tgnPJU3fScq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMwoIi8HOEwrLVwt7ircA9cvejhOulERJ7jKVbdOlV5d8KAkboQtbbiEGjSHSUdeX%2Bvtgu12yeQRd%2BHSTEWQ9Irvpy%2FsfDxbSjDKCE80d6dei%2F9eLC2WsDE2kGaH%2FwwYgYnFHyStPYj%2FUj3HIL5fYzsvufFbmYgVKAM4EdlWbn%2FqVCuIO%2FlD4TCZUNuNnqHDq6ph6VNovsajuN8LPXuaxgiturwj7V%2Fe0xSoIP8XYkN9ar98UqR5EFv3WXQATc1IRxxEkZaYF6i%2F0%2FcvOTnr8VGaoVb9Pn2RGKSdE68ZsIdSnXUvvHeRnIh0ks4yEk%2F%2B1ECp3RT%2B7TAQSZ%2FeCd5C8A3qXEnfcQPp5Mo9eYTEb%2F%2FoeZ7sJutKB8MuMTd2cDx3LB0JhmbxfGbxxmkrQNeUhEaBqSOf4nTwoc%2Foz74qr3GRvUqkjtZfCEKtV5Goh1Iy%2B5ZEfvCatCxOvO09f7IYgYowcbTSMYgPFaKX70ox9nIPhDqt45YfFR3alCusycpsOsZE9R8Ry5sGS%2Bj86PBWGRkP2xqPwXE6SPx2T4MnDhxZmagYeqPG3L1nvE%2BLPJHBUsaKnbpIo5Aufb70eZvAVx%2B06DPA7OUP9TWtGQR%2Btqoo8Rt9Diq23UFQZ1rlQZa27uosqethiBLGW9fYMJX7h8oGOqUBSjB%2BLXQuD%2BJz%2BU6H9iVgxf9wH09Tmi1Wo3B%2Fp0cXJwINIFr9qk7kGHxRXHLTgBvGiescbwQCY87WfbpTpUqxMIh0vUbhHyzFLxfs2dfOOTO9H9u2KTC4LRjjjZtm9OSUh628zrX9qphsRcj4iMZyWMzs32RIP0VcaVWsGiaY%2FiSxJJQeQmOjXmBOzDF7%2B%2Fk9mpxnc3TwykKgxW3niH4GOW2Kkm%2BM&X-Amz-Signature=30b599ebec9c01c78998ab4c51600bdff4b6dc7c0dd83f12a43ba43f37fcfe4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJYJGNH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD95DhnWHlkHC5C45wSzFkdq1XI4i%2BK0vLRLQUS8S5UngIgKKrhSSzlcHmpD2%2FAWSTtNSe3MwdZe8N%2B8tgnPJU3fScq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMwoIi8HOEwrLVwt7ircA9cvejhOulERJ7jKVbdOlV5d8KAkboQtbbiEGjSHSUdeX%2Bvtgu12yeQRd%2BHSTEWQ9Irvpy%2FsfDxbSjDKCE80d6dei%2F9eLC2WsDE2kGaH%2FwwYgYnFHyStPYj%2FUj3HIL5fYzsvufFbmYgVKAM4EdlWbn%2FqVCuIO%2FlD4TCZUNuNnqHDq6ph6VNovsajuN8LPXuaxgiturwj7V%2Fe0xSoIP8XYkN9ar98UqR5EFv3WXQATc1IRxxEkZaYF6i%2F0%2FcvOTnr8VGaoVb9Pn2RGKSdE68ZsIdSnXUvvHeRnIh0ks4yEk%2F%2B1ECp3RT%2B7TAQSZ%2FeCd5C8A3qXEnfcQPp5Mo9eYTEb%2F%2FoeZ7sJutKB8MuMTd2cDx3LB0JhmbxfGbxxmkrQNeUhEaBqSOf4nTwoc%2Foz74qr3GRvUqkjtZfCEKtV5Goh1Iy%2B5ZEfvCatCxOvO09f7IYgYowcbTSMYgPFaKX70ox9nIPhDqt45YfFR3alCusycpsOsZE9R8Ry5sGS%2Bj86PBWGRkP2xqPwXE6SPx2T4MnDhxZmagYeqPG3L1nvE%2BLPJHBUsaKnbpIo5Aufb70eZvAVx%2B06DPA7OUP9TWtGQR%2Btqoo8Rt9Diq23UFQZ1rlQZa27uosqethiBLGW9fYMJX7h8oGOqUBSjB%2BLXQuD%2BJz%2BU6H9iVgxf9wH09Tmi1Wo3B%2Fp0cXJwINIFr9qk7kGHxRXHLTgBvGiescbwQCY87WfbpTpUqxMIh0vUbhHyzFLxfs2dfOOTO9H9u2KTC4LRjjjZtm9OSUh628zrX9qphsRcj4iMZyWMzs32RIP0VcaVWsGiaY%2FiSxJJQeQmOjXmBOzDF7%2B%2Fk9mpxnc3TwykKgxW3niH4GOW2Kkm%2BM&X-Amz-Signature=3329c9fc19fba4806c6ea44c6dfc384167a007b89690a390c046bae5f825a164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJYJGNH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD95DhnWHlkHC5C45wSzFkdq1XI4i%2BK0vLRLQUS8S5UngIgKKrhSSzlcHmpD2%2FAWSTtNSe3MwdZe8N%2B8tgnPJU3fScq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMwoIi8HOEwrLVwt7ircA9cvejhOulERJ7jKVbdOlV5d8KAkboQtbbiEGjSHSUdeX%2Bvtgu12yeQRd%2BHSTEWQ9Irvpy%2FsfDxbSjDKCE80d6dei%2F9eLC2WsDE2kGaH%2FwwYgYnFHyStPYj%2FUj3HIL5fYzsvufFbmYgVKAM4EdlWbn%2FqVCuIO%2FlD4TCZUNuNnqHDq6ph6VNovsajuN8LPXuaxgiturwj7V%2Fe0xSoIP8XYkN9ar98UqR5EFv3WXQATc1IRxxEkZaYF6i%2F0%2FcvOTnr8VGaoVb9Pn2RGKSdE68ZsIdSnXUvvHeRnIh0ks4yEk%2F%2B1ECp3RT%2B7TAQSZ%2FeCd5C8A3qXEnfcQPp5Mo9eYTEb%2F%2FoeZ7sJutKB8MuMTd2cDx3LB0JhmbxfGbxxmkrQNeUhEaBqSOf4nTwoc%2Foz74qr3GRvUqkjtZfCEKtV5Goh1Iy%2B5ZEfvCatCxOvO09f7IYgYowcbTSMYgPFaKX70ox9nIPhDqt45YfFR3alCusycpsOsZE9R8Ry5sGS%2Bj86PBWGRkP2xqPwXE6SPx2T4MnDhxZmagYeqPG3L1nvE%2BLPJHBUsaKnbpIo5Aufb70eZvAVx%2B06DPA7OUP9TWtGQR%2Btqoo8Rt9Diq23UFQZ1rlQZa27uosqethiBLGW9fYMJX7h8oGOqUBSjB%2BLXQuD%2BJz%2BU6H9iVgxf9wH09Tmi1Wo3B%2Fp0cXJwINIFr9qk7kGHxRXHLTgBvGiescbwQCY87WfbpTpUqxMIh0vUbhHyzFLxfs2dfOOTO9H9u2KTC4LRjjjZtm9OSUh628zrX9qphsRcj4iMZyWMzs32RIP0VcaVWsGiaY%2FiSxJJQeQmOjXmBOzDF7%2B%2Fk9mpxnc3TwykKgxW3niH4GOW2Kkm%2BM&X-Amz-Signature=f5fe1f5b85e3a6289e3e741f23cb4d02f9ec6dbcb3017c9a77dc1d39a15a2aa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJYJGNH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD95DhnWHlkHC5C45wSzFkdq1XI4i%2BK0vLRLQUS8S5UngIgKKrhSSzlcHmpD2%2FAWSTtNSe3MwdZe8N%2B8tgnPJU3fScq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMwoIi8HOEwrLVwt7ircA9cvejhOulERJ7jKVbdOlV5d8KAkboQtbbiEGjSHSUdeX%2Bvtgu12yeQRd%2BHSTEWQ9Irvpy%2FsfDxbSjDKCE80d6dei%2F9eLC2WsDE2kGaH%2FwwYgYnFHyStPYj%2FUj3HIL5fYzsvufFbmYgVKAM4EdlWbn%2FqVCuIO%2FlD4TCZUNuNnqHDq6ph6VNovsajuN8LPXuaxgiturwj7V%2Fe0xSoIP8XYkN9ar98UqR5EFv3WXQATc1IRxxEkZaYF6i%2F0%2FcvOTnr8VGaoVb9Pn2RGKSdE68ZsIdSnXUvvHeRnIh0ks4yEk%2F%2B1ECp3RT%2B7TAQSZ%2FeCd5C8A3qXEnfcQPp5Mo9eYTEb%2F%2FoeZ7sJutKB8MuMTd2cDx3LB0JhmbxfGbxxmkrQNeUhEaBqSOf4nTwoc%2Foz74qr3GRvUqkjtZfCEKtV5Goh1Iy%2B5ZEfvCatCxOvO09f7IYgYowcbTSMYgPFaKX70ox9nIPhDqt45YfFR3alCusycpsOsZE9R8Ry5sGS%2Bj86PBWGRkP2xqPwXE6SPx2T4MnDhxZmagYeqPG3L1nvE%2BLPJHBUsaKnbpIo5Aufb70eZvAVx%2B06DPA7OUP9TWtGQR%2Btqoo8Rt9Diq23UFQZ1rlQZa27uosqethiBLGW9fYMJX7h8oGOqUBSjB%2BLXQuD%2BJz%2BU6H9iVgxf9wH09Tmi1Wo3B%2Fp0cXJwINIFr9qk7kGHxRXHLTgBvGiescbwQCY87WfbpTpUqxMIh0vUbhHyzFLxfs2dfOOTO9H9u2KTC4LRjjjZtm9OSUh628zrX9qphsRcj4iMZyWMzs32RIP0VcaVWsGiaY%2FiSxJJQeQmOjXmBOzDF7%2B%2Fk9mpxnc3TwykKgxW3niH4GOW2Kkm%2BM&X-Amz-Signature=1d7930804930646ed93d2e52f005c0ff4656766dda504d98161901d5c221dcba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJYJGNH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD95DhnWHlkHC5C45wSzFkdq1XI4i%2BK0vLRLQUS8S5UngIgKKrhSSzlcHmpD2%2FAWSTtNSe3MwdZe8N%2B8tgnPJU3fScq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMwoIi8HOEwrLVwt7ircA9cvejhOulERJ7jKVbdOlV5d8KAkboQtbbiEGjSHSUdeX%2Bvtgu12yeQRd%2BHSTEWQ9Irvpy%2FsfDxbSjDKCE80d6dei%2F9eLC2WsDE2kGaH%2FwwYgYnFHyStPYj%2FUj3HIL5fYzsvufFbmYgVKAM4EdlWbn%2FqVCuIO%2FlD4TCZUNuNnqHDq6ph6VNovsajuN8LPXuaxgiturwj7V%2Fe0xSoIP8XYkN9ar98UqR5EFv3WXQATc1IRxxEkZaYF6i%2F0%2FcvOTnr8VGaoVb9Pn2RGKSdE68ZsIdSnXUvvHeRnIh0ks4yEk%2F%2B1ECp3RT%2B7TAQSZ%2FeCd5C8A3qXEnfcQPp5Mo9eYTEb%2F%2FoeZ7sJutKB8MuMTd2cDx3LB0JhmbxfGbxxmkrQNeUhEaBqSOf4nTwoc%2Foz74qr3GRvUqkjtZfCEKtV5Goh1Iy%2B5ZEfvCatCxOvO09f7IYgYowcbTSMYgPFaKX70ox9nIPhDqt45YfFR3alCusycpsOsZE9R8Ry5sGS%2Bj86PBWGRkP2xqPwXE6SPx2T4MnDhxZmagYeqPG3L1nvE%2BLPJHBUsaKnbpIo5Aufb70eZvAVx%2B06DPA7OUP9TWtGQR%2Btqoo8Rt9Diq23UFQZ1rlQZa27uosqethiBLGW9fYMJX7h8oGOqUBSjB%2BLXQuD%2BJz%2BU6H9iVgxf9wH09Tmi1Wo3B%2Fp0cXJwINIFr9qk7kGHxRXHLTgBvGiescbwQCY87WfbpTpUqxMIh0vUbhHyzFLxfs2dfOOTO9H9u2KTC4LRjjjZtm9OSUh628zrX9qphsRcj4iMZyWMzs32RIP0VcaVWsGiaY%2FiSxJJQeQmOjXmBOzDF7%2B%2Fk9mpxnc3TwykKgxW3niH4GOW2Kkm%2BM&X-Amz-Signature=01d5e407101d1bc9047d89cf5ce6bee45ff3ce72715b3ffbc7f1807762d09089&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJYJGNH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD95DhnWHlkHC5C45wSzFkdq1XI4i%2BK0vLRLQUS8S5UngIgKKrhSSzlcHmpD2%2FAWSTtNSe3MwdZe8N%2B8tgnPJU3fScq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMwoIi8HOEwrLVwt7ircA9cvejhOulERJ7jKVbdOlV5d8KAkboQtbbiEGjSHSUdeX%2Bvtgu12yeQRd%2BHSTEWQ9Irvpy%2FsfDxbSjDKCE80d6dei%2F9eLC2WsDE2kGaH%2FwwYgYnFHyStPYj%2FUj3HIL5fYzsvufFbmYgVKAM4EdlWbn%2FqVCuIO%2FlD4TCZUNuNnqHDq6ph6VNovsajuN8LPXuaxgiturwj7V%2Fe0xSoIP8XYkN9ar98UqR5EFv3WXQATc1IRxxEkZaYF6i%2F0%2FcvOTnr8VGaoVb9Pn2RGKSdE68ZsIdSnXUvvHeRnIh0ks4yEk%2F%2B1ECp3RT%2B7TAQSZ%2FeCd5C8A3qXEnfcQPp5Mo9eYTEb%2F%2FoeZ7sJutKB8MuMTd2cDx3LB0JhmbxfGbxxmkrQNeUhEaBqSOf4nTwoc%2Foz74qr3GRvUqkjtZfCEKtV5Goh1Iy%2B5ZEfvCatCxOvO09f7IYgYowcbTSMYgPFaKX70ox9nIPhDqt45YfFR3alCusycpsOsZE9R8Ry5sGS%2Bj86PBWGRkP2xqPwXE6SPx2T4MnDhxZmagYeqPG3L1nvE%2BLPJHBUsaKnbpIo5Aufb70eZvAVx%2B06DPA7OUP9TWtGQR%2Btqoo8Rt9Diq23UFQZ1rlQZa27uosqethiBLGW9fYMJX7h8oGOqUBSjB%2BLXQuD%2BJz%2BU6H9iVgxf9wH09Tmi1Wo3B%2Fp0cXJwINIFr9qk7kGHxRXHLTgBvGiescbwQCY87WfbpTpUqxMIh0vUbhHyzFLxfs2dfOOTO9H9u2KTC4LRjjjZtm9OSUh628zrX9qphsRcj4iMZyWMzs32RIP0VcaVWsGiaY%2FiSxJJQeQmOjXmBOzDF7%2B%2Fk9mpxnc3TwykKgxW3niH4GOW2Kkm%2BM&X-Amz-Signature=c76abefff55943634c95904ea449ec3ed8c5dd58301c7533e6158ee742df9cd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJYJGNH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD95DhnWHlkHC5C45wSzFkdq1XI4i%2BK0vLRLQUS8S5UngIgKKrhSSzlcHmpD2%2FAWSTtNSe3MwdZe8N%2B8tgnPJU3fScq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMwoIi8HOEwrLVwt7ircA9cvejhOulERJ7jKVbdOlV5d8KAkboQtbbiEGjSHSUdeX%2Bvtgu12yeQRd%2BHSTEWQ9Irvpy%2FsfDxbSjDKCE80d6dei%2F9eLC2WsDE2kGaH%2FwwYgYnFHyStPYj%2FUj3HIL5fYzsvufFbmYgVKAM4EdlWbn%2FqVCuIO%2FlD4TCZUNuNnqHDq6ph6VNovsajuN8LPXuaxgiturwj7V%2Fe0xSoIP8XYkN9ar98UqR5EFv3WXQATc1IRxxEkZaYF6i%2F0%2FcvOTnr8VGaoVb9Pn2RGKSdE68ZsIdSnXUvvHeRnIh0ks4yEk%2F%2B1ECp3RT%2B7TAQSZ%2FeCd5C8A3qXEnfcQPp5Mo9eYTEb%2F%2FoeZ7sJutKB8MuMTd2cDx3LB0JhmbxfGbxxmkrQNeUhEaBqSOf4nTwoc%2Foz74qr3GRvUqkjtZfCEKtV5Goh1Iy%2B5ZEfvCatCxOvO09f7IYgYowcbTSMYgPFaKX70ox9nIPhDqt45YfFR3alCusycpsOsZE9R8Ry5sGS%2Bj86PBWGRkP2xqPwXE6SPx2T4MnDhxZmagYeqPG3L1nvE%2BLPJHBUsaKnbpIo5Aufb70eZvAVx%2B06DPA7OUP9TWtGQR%2Btqoo8Rt9Diq23UFQZ1rlQZa27uosqethiBLGW9fYMJX7h8oGOqUBSjB%2BLXQuD%2BJz%2BU6H9iVgxf9wH09Tmi1Wo3B%2Fp0cXJwINIFr9qk7kGHxRXHLTgBvGiescbwQCY87WfbpTpUqxMIh0vUbhHyzFLxfs2dfOOTO9H9u2KTC4LRjjjZtm9OSUh628zrX9qphsRcj4iMZyWMzs32RIP0VcaVWsGiaY%2FiSxJJQeQmOjXmBOzDF7%2B%2Fk9mpxnc3TwykKgxW3niH4GOW2Kkm%2BM&X-Amz-Signature=13198053b02b60cb627f9784ae3f01b9c55803d2889e47ff2df7976529977219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJYJGNH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD95DhnWHlkHC5C45wSzFkdq1XI4i%2BK0vLRLQUS8S5UngIgKKrhSSzlcHmpD2%2FAWSTtNSe3MwdZe8N%2B8tgnPJU3fScq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMwoIi8HOEwrLVwt7ircA9cvejhOulERJ7jKVbdOlV5d8KAkboQtbbiEGjSHSUdeX%2Bvtgu12yeQRd%2BHSTEWQ9Irvpy%2FsfDxbSjDKCE80d6dei%2F9eLC2WsDE2kGaH%2FwwYgYnFHyStPYj%2FUj3HIL5fYzsvufFbmYgVKAM4EdlWbn%2FqVCuIO%2FlD4TCZUNuNnqHDq6ph6VNovsajuN8LPXuaxgiturwj7V%2Fe0xSoIP8XYkN9ar98UqR5EFv3WXQATc1IRxxEkZaYF6i%2F0%2FcvOTnr8VGaoVb9Pn2RGKSdE68ZsIdSnXUvvHeRnIh0ks4yEk%2F%2B1ECp3RT%2B7TAQSZ%2FeCd5C8A3qXEnfcQPp5Mo9eYTEb%2F%2FoeZ7sJutKB8MuMTd2cDx3LB0JhmbxfGbxxmkrQNeUhEaBqSOf4nTwoc%2Foz74qr3GRvUqkjtZfCEKtV5Goh1Iy%2B5ZEfvCatCxOvO09f7IYgYowcbTSMYgPFaKX70ox9nIPhDqt45YfFR3alCusycpsOsZE9R8Ry5sGS%2Bj86PBWGRkP2xqPwXE6SPx2T4MnDhxZmagYeqPG3L1nvE%2BLPJHBUsaKnbpIo5Aufb70eZvAVx%2B06DPA7OUP9TWtGQR%2Btqoo8Rt9Diq23UFQZ1rlQZa27uosqethiBLGW9fYMJX7h8oGOqUBSjB%2BLXQuD%2BJz%2BU6H9iVgxf9wH09Tmi1Wo3B%2Fp0cXJwINIFr9qk7kGHxRXHLTgBvGiescbwQCY87WfbpTpUqxMIh0vUbhHyzFLxfs2dfOOTO9H9u2KTC4LRjjjZtm9OSUh628zrX9qphsRcj4iMZyWMzs32RIP0VcaVWsGiaY%2FiSxJJQeQmOjXmBOzDF7%2B%2Fk9mpxnc3TwykKgxW3niH4GOW2Kkm%2BM&X-Amz-Signature=871196a116dd565b89b52f4d67e3406d6284a29a9c1dcffc7f1aa2457d5e71b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRQBU2EO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB8Vt73FuwU5EiX1WBtqYZIdWdsgpUTIpnT%2Boko9BuzgIgGbhoGz%2B6N5q7bXtySevZAzVErmTqcl8sAPsw0Gq4LP4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDF0wV%2BDZ5SHw9OgTESrcA%2Fsd9p%2F12dstWL4EV7cOJ9hRRQT5aIbfM0U%2BSISi2mhkpbQxxp%2FHd0aQLsyDGWGJzrLdZpOIbcGpW%2F2ieIF%2BNZBxmUDJI17J9sHfnR783RzvMekpc4p1rWQ8891QIPeV6ssG7os485yQe81zcHlMitVHmNwWrHzBVlsHAJlDzkSQgf0L%2FBaJOhQnrfF7ytCCQKQz4n6QGGY3KpHHhXGxOTp02X6nQ2BeCvZm4gElAKpwiOq0OKpddw0REd2MyL%2Fw4JyYBPMNwxwJ5Qzu3did7g9TFMdly%2BpzGHR%2BHC13XiA3sAHUYsPUACMCWkDW3zgzs1JEUwZRIMAZUY%2FrLZ%2FOBqvcemnVZmhU2f%2BPudyfUak50I67yeFBD8thSgtZGE9amFKnzxUCuuXPATWb0rGvhxSRVcpvzL3Lh2cHktIhPd0fgzOtv4WmLynY54N2bFgwyVH8QSsYfMOlnY3zT5R2ASaTpMBGuzm7SizrgYqgbzLR0L32ltlNyj4Qx6D9PUSJtWqvD1C%2BI63zuXr69rIyYmp0z9WTiWLaR%2FEr%2BsucoTYnr1zzlCW%2BjO712EE%2FG4cHoYoRbK%2BqHX5UMlg4CPPCeFjEAtJv%2BYHGqeX674YN9CUqyBrNiOGYo6hKY%2BhRMOH7h8oGOqUBdRSvda9fS5Lb4sk9Fu71ZFzBc7BPhlaXho15h9%2B4R3HqNz3rzzQ03kCE2p8Mawd1kiY7x0GIRlP9QDLsxH6SQsKW2EHj9dAEfOQaJhl07n8lJ0DxrCmyXHEhT%2F2aKOQWIhYNfi9CxJttEj8YkPg6%2FCOShMGE23xyN7UdZQ4%2Be%2B81V%2FWshcT3UuzMwzgz4j1zEQwkFY1kFRttORqaVY1asYkgKQnf&X-Amz-Signature=d1141cf46160b8b373fced47eab6b1e7c67d49e0b9008df1d4d5bf77ab7a00f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS47ZKTW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdrc5TCPnVu1MG%2Fjpw6b6S75kf8wCu%2FpB4avBlP5m3jwIhAJEvtSixQKbENvjyT7WqU3nX4TmxVrJJGtDqlyerTyQ4Kv8DCHIQABoMNjM3NDIzMTgzODA1IgxX%2BA347KVzV%2B2VuOoq3ANr0rkRmNjG8cVkckmI5u1dKyUc9to2u4ZJ8skGKZkwlZsmnGYyy3nHN0j0aj7dQfFvHPYIYKRmxJOgI%2FC%2BzRrFQYVxBGlnwki5hEPf8zrGiXWRkm%2FkACd327yqnZeL1qs8ouRE8C69CpXOyntBrupTKbH3eDkBhHEJIZ8Sjgp36V37PAaEuqJhPccqB0RmqPgVZYIeJOCdtNI4uioqTEibqlUCKMZP7fgK5OPt1pJXymWbzKaVct0Xrdu1sgO2ZkLt%2Bhol2ctjxaUB9KUw8ETLAFLCL5qXpS%2FZH96Uwmo8dD0AK7Z%2BCZNDAnehTupU865L4e7u5OpYoPRzVspCT2u%2BKFV3XYFDw1aAxhq0Ypfnb92EbhEivKKaYRR5%2BupG3AtKm6TeYZtElfbTj%2B9dihLUoEEORxtiBhCdPXtt22iZ35%2BIjh1sxFDETay8xkRJxyPZD0mIkXfJokwgrSGPx7UfuPgLiBkbE3c3ryRHqEbPMz9ybx%2FP%2Bz%2B5X2hRIetgRsJJdjLOEU083HeaLftdNZmk5bn%2FsCBQuR5U%2B0ET4nsZ8T2kx6Z4OnraQv%2BGyFd97bd6HvA2UGstDmf9OXIkZW%2B1MkBj8m1Dfdfb3S6Y%2B%2B1V9sW7fYRGkfq3oe4HMzDN%2B4fKBjqkAWYF2UTkRLxn5t7k6PiczLR7N6dp4F2xaus9y1CpmROIM47puXpCx66PfpLyVBl4CuyGMTRXbnSzTNPVDaI5gm%2FYD1OaYzcVyGJkC%2Fmlo9PxsQ0gGKw4OH3pYFe1O3ZFmEf%2FqjN5FeNeD3NKBy2SeIn%2B3wLtn1Jc98qa1SzNj43Brz0lfrrK%2FTa5UhrGsIOVDs2dYguu0NjrBq3j1W8mmNuRBZM1&X-Amz-Signature=f41b9cd75d0b77d9f2a915787cb0c6a09661dd77d5158cb6c76b12ef80728d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPL52K5C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqfJMzaFwwGK5FqvDCzS7afbqosBAH9DR1wYkLDRNPpQIhAM9U1FYUPbZmG8c43Zf2G98EN%2BZ9ZneH29AQOUpz0EG5Kv8DCHIQABoMNjM3NDIzMTgzODA1IgxIoRKsRoFBqpnhLfIq3ANsHDmHuZj6POHWbKtrOTYSFHYsVRabXlvKlDmPfmuMi7sJU8SYxY2JhGoImTD94KwXpnNPeB0tjjesTWjHrMro3%2F1TgldihuvTICDgeZFBwjoKSnBYh1X%2BpwHGeo%2FfPNFi6pY5G%2BNgAkT7SI2s3SB%2FbZBH4dcDwVL%2Fv7W4s%2B3DJgoBmkznJ593ZENfIw5PgSG4i2Iy13AHIzMtGpqT2VMLIOIeULGC%2FHiyYk%2Bd18JYP72ea7vEUd8yujfFfy0R%2BcmXhGeCUsMXnlTOO%2B4BPxFK%2F23QacZappCN52fA96L0i3JJQexcGD683PxYoaoZgr62rsE%2F%2F2Mo18Z%2B3jLroM%2FpKH4a9mukAm5mGna%2BqP7%2F7CiRA6acwCLiFzUighVDyM10Lw4ll1gchNA%2FJSwzh4p%2Bni5jvx%2BbTfzOyJGLvzRKZOlcHauEAVjNunyYTswmpYHBUGf1%2FHpmJvdaxJgQqN46obgsGTZn%2BxCuMF%2FibZ9Qr17nhSdkaqjERZ3vCZiT06XBaoZdH%2BiQVHmaAlRIIOus2KeEyC89%2BpdjO7rxDCOyG8NnUk%2BIWWhPYQUz7Q7E8sK9tMgnw20G8vFaeTiCrvBABL%2Fx7XGPzPDoGG0XWHanaRxN90%2Bwm4wRo9mvzDCq%2B4fKBjqkAUgYxoCqBy9s4QXgJg%2BKl99geHt74J%2Fw2cDTZT3zVIPhqkJVXEvK6IkYhR7BdlOFxTIbMfraG1E9yLXwqXRVfVb9gJP7xsJj4u1xyjeV2hVT4D8GFjXqeUNM3E9QpbqIG8cutaNi46mDymfss42yBLxhuAT%2F5baLiZ5PEZJFCytC6CF1c1ipMcK6%2Fx1YXc%2BRse1UutkryAU16rKHrFTnCci9SAwh&X-Amz-Signature=c6837217d47727db48d926784b800be29caa0afb193145b3905d4ea42d5c507b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJYJGNH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD95DhnWHlkHC5C45wSzFkdq1XI4i%2BK0vLRLQUS8S5UngIgKKrhSSzlcHmpD2%2FAWSTtNSe3MwdZe8N%2B8tgnPJU3fScq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMwoIi8HOEwrLVwt7ircA9cvejhOulERJ7jKVbdOlV5d8KAkboQtbbiEGjSHSUdeX%2Bvtgu12yeQRd%2BHSTEWQ9Irvpy%2FsfDxbSjDKCE80d6dei%2F9eLC2WsDE2kGaH%2FwwYgYnFHyStPYj%2FUj3HIL5fYzsvufFbmYgVKAM4EdlWbn%2FqVCuIO%2FlD4TCZUNuNnqHDq6ph6VNovsajuN8LPXuaxgiturwj7V%2Fe0xSoIP8XYkN9ar98UqR5EFv3WXQATc1IRxxEkZaYF6i%2F0%2FcvOTnr8VGaoVb9Pn2RGKSdE68ZsIdSnXUvvHeRnIh0ks4yEk%2F%2B1ECp3RT%2B7TAQSZ%2FeCd5C8A3qXEnfcQPp5Mo9eYTEb%2F%2FoeZ7sJutKB8MuMTd2cDx3LB0JhmbxfGbxxmkrQNeUhEaBqSOf4nTwoc%2Foz74qr3GRvUqkjtZfCEKtV5Goh1Iy%2B5ZEfvCatCxOvO09f7IYgYowcbTSMYgPFaKX70ox9nIPhDqt45YfFR3alCusycpsOsZE9R8Ry5sGS%2Bj86PBWGRkP2xqPwXE6SPx2T4MnDhxZmagYeqPG3L1nvE%2BLPJHBUsaKnbpIo5Aufb70eZvAVx%2B06DPA7OUP9TWtGQR%2Btqoo8Rt9Diq23UFQZ1rlQZa27uosqethiBLGW9fYMJX7h8oGOqUBSjB%2BLXQuD%2BJz%2BU6H9iVgxf9wH09Tmi1Wo3B%2Fp0cXJwINIFr9qk7kGHxRXHLTgBvGiescbwQCY87WfbpTpUqxMIh0vUbhHyzFLxfs2dfOOTO9H9u2KTC4LRjjjZtm9OSUh628zrX9qphsRcj4iMZyWMzs32RIP0VcaVWsGiaY%2FiSxJJQeQmOjXmBOzDF7%2B%2Fk9mpxnc3TwykKgxW3niH4GOW2Kkm%2BM&X-Amz-Signature=b3b3b5a2803de0731922eed8f43fde65960a345e36af69e82d8058ab8cdefc3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RWWINS6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkMTivqWnTQSukX2AHgIit44Q%2Fq2IKHKEdEGvvIFX7%2BAiA0CJ%2Fm%2FgShkxtyx%2FovZhbxGrzHUpHyMoa2DKCrfehp5Cr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMKsnT4tnWjZN%2FDT5wKtwDpaFdvy%2BaqggXUnMCRflkSGfUjDo8T9UsIol59y4YR4DFPdfHS2N4AZQ1yFJvHtxwuD6wIwxa0Y60P6W5OXHEJYlfKbKj40J8bm3fqt9TxTp5V7rUBMnrkVfuhkjRjGDtHmniHfVoaqqPKjzTUwEtqTHm4DvkxnQvePOXceW7k6hikr9EDm1XuYm%2FNXgSECOdiL9hF%2FeuhHOA5IBpUAk7mCZdcIXAAX739nqwkLynkk7E4%2FmEDQv74Hi8JvFamxsr%2Fj0UkQGMocvHHQE60mVQuibQtPYaCy4ONL3L6AShDUzvXHQqyJuyK8rTYWE85m6IYKbqrTipJdZQVOqLfp9b3WUkaYBzqBTvumG%2FDs6rGDGGlNmGNe7eSA6ZH%2BGybn2VlhWqJijuF3G9FdrQypneuBis5PLmPM3mLTdG9MRPeyY5sL1sc0bdP8pryzkBKNDaRl6jhJw20kPFhJQakkQWbTtdM6brubYRzHJ%2B8CAJXMoemoxCDVyirOmp7ivVycbwnIXp2sA9MHlu%2BuepCz8Ih7t7MZ6I7QnJmKLihp%2FRDh1GX40%2F9xyEehyAIozmg0Zd4yJanI7QULt8kLQHJdZPYMMOgLB4BwACQOByfMjTcOrtYYTzmixKndjIgMYwrPuHygY6pgE7TGNswGs46iyHFOtMi66cmh3bKRjEuJqlsuWoXFy0Z4469%2F8pXw714RVsOSCnB%2FrwTN%2BmuvV5OM7dLA0R47n8wir2fWoVuPghSro54cutjR6TW8tW4lcKzNRriZWooXRFyuxwvwR5NZphmJeZX4qno0iVM60ttO%2Bx1Vzl9PhXjMRbM8V%2FtclNvySPAUBjZmPvXVTNSjlwsXUR2fku%2Bb19MKtoKqdO&X-Amz-Signature=a6956b64d7079275c013fed987c6d48ec772ebc2d2fd0b6f28c8e3e2a330a714&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJYJGNH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD95DhnWHlkHC5C45wSzFkdq1XI4i%2BK0vLRLQUS8S5UngIgKKrhSSzlcHmpD2%2FAWSTtNSe3MwdZe8N%2B8tgnPJU3fScq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMwoIi8HOEwrLVwt7ircA9cvejhOulERJ7jKVbdOlV5d8KAkboQtbbiEGjSHSUdeX%2Bvtgu12yeQRd%2BHSTEWQ9Irvpy%2FsfDxbSjDKCE80d6dei%2F9eLC2WsDE2kGaH%2FwwYgYnFHyStPYj%2FUj3HIL5fYzsvufFbmYgVKAM4EdlWbn%2FqVCuIO%2FlD4TCZUNuNnqHDq6ph6VNovsajuN8LPXuaxgiturwj7V%2Fe0xSoIP8XYkN9ar98UqR5EFv3WXQATc1IRxxEkZaYF6i%2F0%2FcvOTnr8VGaoVb9Pn2RGKSdE68ZsIdSnXUvvHeRnIh0ks4yEk%2F%2B1ECp3RT%2B7TAQSZ%2FeCd5C8A3qXEnfcQPp5Mo9eYTEb%2F%2FoeZ7sJutKB8MuMTd2cDx3LB0JhmbxfGbxxmkrQNeUhEaBqSOf4nTwoc%2Foz74qr3GRvUqkjtZfCEKtV5Goh1Iy%2B5ZEfvCatCxOvO09f7IYgYowcbTSMYgPFaKX70ox9nIPhDqt45YfFR3alCusycpsOsZE9R8Ry5sGS%2Bj86PBWGRkP2xqPwXE6SPx2T4MnDhxZmagYeqPG3L1nvE%2BLPJHBUsaKnbpIo5Aufb70eZvAVx%2B06DPA7OUP9TWtGQR%2Btqoo8Rt9Diq23UFQZ1rlQZa27uosqethiBLGW9fYMJX7h8oGOqUBSjB%2BLXQuD%2BJz%2BU6H9iVgxf9wH09Tmi1Wo3B%2Fp0cXJwINIFr9qk7kGHxRXHLTgBvGiescbwQCY87WfbpTpUqxMIh0vUbhHyzFLxfs2dfOOTO9H9u2KTC4LRjjjZtm9OSUh628zrX9qphsRcj4iMZyWMzs32RIP0VcaVWsGiaY%2FiSxJJQeQmOjXmBOzDF7%2B%2Fk9mpxnc3TwykKgxW3niH4GOW2Kkm%2BM&X-Amz-Signature=cd6588c5bb5b783628d3291ff8cf362e5a67f034c0e1b60df954d08939b49a73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMG4HVIV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0SOBL%2FMYr4%2FymWDwaqWlLolRR4e3kpsRWlNy1cRBxwgIhAMmwbYdGzk%2FKQahf3IKXP11E6flyx0g4pFjEvFyCHjFcKv8DCHIQABoMNjM3NDIzMTgzODA1IgxNfbGMHGD0Nr%2BtlFAq3APVsYjn4Z6q6QoHxdWxr5WPJ3P%2F0tfZA9UxFxDRoxt8EmyMn21VJBkTc5LK3VHNv8yOJ7EOs877mDxZiAxWl0aAZFL4Eb%2BLhU6fkrDk2GzJDuWhYQr3wIwHAqhDt4VGQYsjQDuBu5%2BNDM4jPlGK3Ig0F2rmdYuBp%2FsGKRVFJqMYztzaNR5FTrqR7SKqZOBsunXAldbmBIjaXKXOMOZLJsUzeNz7Fz%2BmU%2BEs0T%2FqbPZOyglqxpPaCqECwWxl69UAMGk%2Fs0quaH6XiDG9q0qHpTMbKe8cU8f9w5byuoEe88AvUi%2B3YmmVcSqFg7jS1yx0kkdoJXvog94yRLAVhGVHenMi6bS5ZUFNG9DmmyGSre6NYwQFERFaxWjqLLWJGRJ%2BSZUo%2FQRBk%2BFHZBs7gOG6himxTEeknrgd2l%2BFUmYF5P4Upsq3oD7xSfDPDSfBMqzMfBAHVlHPsKC4NGpxfeDQrT44cw5IuvgIzJeShBaQ2%2F08XATWcsWimnrdvt0yD9%2BqtzL4D7aRCZCAgGo1GXJvIiFL1tI8t1mf5DZ5FwxaUszDwOwWZDlnVs%2Fk2UJTVUBTfoHUKNQUpxaK9OKTPRVhLr7I30Ixth02bXQ3JfGxUpdhENNL7V2OZH%2BH8BBeCjC5%2BofKBjqkAfE3B2qMW6mTWLpGU4iNrT5YFmcx8h9dYCehUkn%2FWureKJh3t7N1YeoZZFHkMzrjagkova8k6Rz4qvWj99rYeAzssnXIPX8dResOk3wNv9AsUFsrxhLuqIfUjEw%2BS5mr1pENkNvL6yvtUQLiPGTF0lLCikkLBdlHM4hXjE97RkbA43tENGm5TuLzZ%2FDpw3jGhCpH5OuUFCi8Dvlr6tSap44ofpRe&X-Amz-Signature=ea895bac7ffd5e90cdc712982ff02dd234ce48b1b17d1c9b0655570d4f373d45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJYJGNH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD95DhnWHlkHC5C45wSzFkdq1XI4i%2BK0vLRLQUS8S5UngIgKKrhSSzlcHmpD2%2FAWSTtNSe3MwdZe8N%2B8tgnPJU3fScq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMwoIi8HOEwrLVwt7ircA9cvejhOulERJ7jKVbdOlV5d8KAkboQtbbiEGjSHSUdeX%2Bvtgu12yeQRd%2BHSTEWQ9Irvpy%2FsfDxbSjDKCE80d6dei%2F9eLC2WsDE2kGaH%2FwwYgYnFHyStPYj%2FUj3HIL5fYzsvufFbmYgVKAM4EdlWbn%2FqVCuIO%2FlD4TCZUNuNnqHDq6ph6VNovsajuN8LPXuaxgiturwj7V%2Fe0xSoIP8XYkN9ar98UqR5EFv3WXQATc1IRxxEkZaYF6i%2F0%2FcvOTnr8VGaoVb9Pn2RGKSdE68ZsIdSnXUvvHeRnIh0ks4yEk%2F%2B1ECp3RT%2B7TAQSZ%2FeCd5C8A3qXEnfcQPp5Mo9eYTEb%2F%2FoeZ7sJutKB8MuMTd2cDx3LB0JhmbxfGbxxmkrQNeUhEaBqSOf4nTwoc%2Foz74qr3GRvUqkjtZfCEKtV5Goh1Iy%2B5ZEfvCatCxOvO09f7IYgYowcbTSMYgPFaKX70ox9nIPhDqt45YfFR3alCusycpsOsZE9R8Ry5sGS%2Bj86PBWGRkP2xqPwXE6SPx2T4MnDhxZmagYeqPG3L1nvE%2BLPJHBUsaKnbpIo5Aufb70eZvAVx%2B06DPA7OUP9TWtGQR%2Btqoo8Rt9Diq23UFQZ1rlQZa27uosqethiBLGW9fYMJX7h8oGOqUBSjB%2BLXQuD%2BJz%2BU6H9iVgxf9wH09Tmi1Wo3B%2Fp0cXJwINIFr9qk7kGHxRXHLTgBvGiescbwQCY87WfbpTpUqxMIh0vUbhHyzFLxfs2dfOOTO9H9u2KTC4LRjjjZtm9OSUh628zrX9qphsRcj4iMZyWMzs32RIP0VcaVWsGiaY%2FiSxJJQeQmOjXmBOzDF7%2B%2Fk9mpxnc3TwykKgxW3niH4GOW2Kkm%2BM&X-Amz-Signature=e9b619cd9f5f8f66530048f85f488b00972614f147cd58c6402f17c574481dcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4FPTLI6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B3FTndR95ihbka7zGn3EYQdEpX%2FFNT8lRP3RweFCcPwIgFdd%2Bc%2F%2BPczQTUev%2BfnabtY5shm2IXj1rlpO%2FDi2%2BHuoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDM%2FDly1YWVpqw6ELASrcA2FAgr00KdX3pkmH9UnHJrLb%2F6ttl3TMOgKwHDDLLuLCuKm%2F%2FwRvbiFIUny3XJ%2FFhZngX6oaxvIeLN%2B%2FehEHtivRN9p1YCqpC3wYd14NSlkTcI2rLnXmGeueZfn1B0KMVLR8WEUQED7vCuPcPey4LuvxCpmnxnEwgQqxkWCU4BWu8iPJCa0dqgIT4W%2FPgtQ22yoIjr1NBZKND5sgua0mcUkPAApeBd%2FR9VCP%2Bqo3FGQ3%2BK0zqVJuFHKy7dpVKVStRvc8ukKi2%2Ft%2Bwu6epdEuuKCtSCOWwORIi1sUcIGUiLyrloKP8XWlF6Qqgj%2FCkApif74rOYNlrxFKSON9bPXqF2LhR3AGyKPgpgCp4sc94do4Ac%2BDQ%2FMDhbhiKkJj8xf3mWgborijqXo1fhEKiincz%2BRIj5ChH5OpCspOgS5gpoNdyAeu8D9sERR4WgpOyZuaPnCvbWkGb6y%2F%2BmH%2F6%2BbyKSbSnuzPIaYrH7ldaB32DB72L0S%2BEO7x0SQwArAbRTbkoJRycTCofhA%2BWLYbCT1TPX02l%2BYejyYBqQXrwnwEAA6UMPdqo%2FoiVRyjFurEXbxbLBqqYo2yP4s3E5TqM53sb%2FoNRtjcdfNyIRoTgw56bXLAKDDJoDVmIYHYK%2FZXMMP7h8oGOqUBmdoqTVEHFJt%2Fa0vkfXAKC6c9DlOpMzs2G4wzTYmmQWQzi%2FbcgXahmNNutzG72o4yVA4tPqUWOkt4dKiaRKr3r9wmweDeBc573P2zDTdTQygFxZlkeMi9l22T70P9qFt1jkCCuy4vVsNTDhGi2%2BfVPfCHFAptbSmw%2F5iU0zMzFRIUtl6xGWLq49RKcWKk3hXDO8SA2mFMoMqiztKm1Se1sfnEGSlz&X-Amz-Signature=b6e04655a7e936648dbfb83848d1036f062453b2c7358b257cb9c953abc698d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJYJGNH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD95DhnWHlkHC5C45wSzFkdq1XI4i%2BK0vLRLQUS8S5UngIgKKrhSSzlcHmpD2%2FAWSTtNSe3MwdZe8N%2B8tgnPJU3fScq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMwoIi8HOEwrLVwt7ircA9cvejhOulERJ7jKVbdOlV5d8KAkboQtbbiEGjSHSUdeX%2Bvtgu12yeQRd%2BHSTEWQ9Irvpy%2FsfDxbSjDKCE80d6dei%2F9eLC2WsDE2kGaH%2FwwYgYnFHyStPYj%2FUj3HIL5fYzsvufFbmYgVKAM4EdlWbn%2FqVCuIO%2FlD4TCZUNuNnqHDq6ph6VNovsajuN8LPXuaxgiturwj7V%2Fe0xSoIP8XYkN9ar98UqR5EFv3WXQATc1IRxxEkZaYF6i%2F0%2FcvOTnr8VGaoVb9Pn2RGKSdE68ZsIdSnXUvvHeRnIh0ks4yEk%2F%2B1ECp3RT%2B7TAQSZ%2FeCd5C8A3qXEnfcQPp5Mo9eYTEb%2F%2FoeZ7sJutKB8MuMTd2cDx3LB0JhmbxfGbxxmkrQNeUhEaBqSOf4nTwoc%2Foz74qr3GRvUqkjtZfCEKtV5Goh1Iy%2B5ZEfvCatCxOvO09f7IYgYowcbTSMYgPFaKX70ox9nIPhDqt45YfFR3alCusycpsOsZE9R8Ry5sGS%2Bj86PBWGRkP2xqPwXE6SPx2T4MnDhxZmagYeqPG3L1nvE%2BLPJHBUsaKnbpIo5Aufb70eZvAVx%2B06DPA7OUP9TWtGQR%2Btqoo8Rt9Diq23UFQZ1rlQZa27uosqethiBLGW9fYMJX7h8oGOqUBSjB%2BLXQuD%2BJz%2BU6H9iVgxf9wH09Tmi1Wo3B%2Fp0cXJwINIFr9qk7kGHxRXHLTgBvGiescbwQCY87WfbpTpUqxMIh0vUbhHyzFLxfs2dfOOTO9H9u2KTC4LRjjjZtm9OSUh628zrX9qphsRcj4iMZyWMzs32RIP0VcaVWsGiaY%2FiSxJJQeQmOjXmBOzDF7%2B%2Fk9mpxnc3TwykKgxW3niH4GOW2Kkm%2BM&X-Amz-Signature=12dca86817a671ec20a88142a60de2031d99226b6be2b7630c1f63a817f9077a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y4IKROO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGBzbVkyXOn2Rhwa9LoZno6AmbAOySddOkWubcZqmkqAiBEBVKauqW2nVVD0uyFIlKr474NEindGgDLsI4rU0Asfir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMuR2EORJVHpikiuK%2FKtwDodsJDp95U8C5fqs2RJL7qLIq%2B3kwIYt1B2KyMqbOUBhtywhOjWiqEBDhLOC2Td9hZtZG296FdhlAEg03cNVGZIGM5W6dbB98Y5i83ZdnKZoi3lcPAxCOZTVcvWGuKbfEG4iUFNoWAwhPHNc8hZk0m4HAFQ0qvXq%2FRzSp6r91LaiNqjDYoDXtU25rqfpUjEEUy6jGwOd4cfuYnSdMaMMoJUH5ekUNiuIaDZHOmHh5VJRX4Xv0b%2FMe7o4lwJA6ICkPEaU2u2Us0OqzIESZctIEW5OOQRVjjhkVY4Jd86T3ZQIypyntxSYwIeluXE1AE5GRTQmi7sbm13AwgiVVqLsLC2V38nrdSKEBgAh31kEUTBQGpfHuUWOCzkz7O6bh04%2FCJIzF3dc2F4iReRQ0%2FCh6jTRdNShmKy5EP%2Bah%2FvtX5miNJhybbLBrJpOPXWV0K6bdWkyv3vjMSfy%2Bc3WudV6%2F3fNJ42Jp64xPItMRYDbpZnX6CnRSHB47wvGihi6K%2B5Y39t2H6FPMsKpK%2Bf0eoWItO4RrkMb85%2Fd3DoRhgrOOiBUcjtltSUVsmWyopg%2FPohSx3%2BBYgoNaC65Z7cBV6QwB3fGmjPpY7RR9ZqlYyv1i2xrsxRvdUrrgefVYr8oww%2FuHygY6pgH9ptEQAjGOUCz3k28t%2FI1ngIXwaI3vxwZA7yY578bysBpf8kv6sOnugbcELv2MSu5i%2Flxua5%2F7N257NvRb11z9M1ITHJ%2FNEcNru3brzQIDJrvDRRA5yGEl5LCnjNgaqjfhkkNUBVGTFPwnanLLILCyjAaBt42utu0Nt7jCCiAUM4qZzT2yaspjyKMkC%2FzRZAOy2AcnQADXlqBZNC9BNhX%2Fb7RKqeZv&X-Amz-Signature=76be28efdf8d46b7c27c0a5bea59181187aefb5082957d6549fd6d31e443149e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJYJGNH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD95DhnWHlkHC5C45wSzFkdq1XI4i%2BK0vLRLQUS8S5UngIgKKrhSSzlcHmpD2%2FAWSTtNSe3MwdZe8N%2B8tgnPJU3fScq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMwoIi8HOEwrLVwt7ircA9cvejhOulERJ7jKVbdOlV5d8KAkboQtbbiEGjSHSUdeX%2Bvtgu12yeQRd%2BHSTEWQ9Irvpy%2FsfDxbSjDKCE80d6dei%2F9eLC2WsDE2kGaH%2FwwYgYnFHyStPYj%2FUj3HIL5fYzsvufFbmYgVKAM4EdlWbn%2FqVCuIO%2FlD4TCZUNuNnqHDq6ph6VNovsajuN8LPXuaxgiturwj7V%2Fe0xSoIP8XYkN9ar98UqR5EFv3WXQATc1IRxxEkZaYF6i%2F0%2FcvOTnr8VGaoVb9Pn2RGKSdE68ZsIdSnXUvvHeRnIh0ks4yEk%2F%2B1ECp3RT%2B7TAQSZ%2FeCd5C8A3qXEnfcQPp5Mo9eYTEb%2F%2FoeZ7sJutKB8MuMTd2cDx3LB0JhmbxfGbxxmkrQNeUhEaBqSOf4nTwoc%2Foz74qr3GRvUqkjtZfCEKtV5Goh1Iy%2B5ZEfvCatCxOvO09f7IYgYowcbTSMYgPFaKX70ox9nIPhDqt45YfFR3alCusycpsOsZE9R8Ry5sGS%2Bj86PBWGRkP2xqPwXE6SPx2T4MnDhxZmagYeqPG3L1nvE%2BLPJHBUsaKnbpIo5Aufb70eZvAVx%2B06DPA7OUP9TWtGQR%2Btqoo8Rt9Diq23UFQZ1rlQZa27uosqethiBLGW9fYMJX7h8oGOqUBSjB%2BLXQuD%2BJz%2BU6H9iVgxf9wH09Tmi1Wo3B%2Fp0cXJwINIFr9qk7kGHxRXHLTgBvGiescbwQCY87WfbpTpUqxMIh0vUbhHyzFLxfs2dfOOTO9H9u2KTC4LRjjjZtm9OSUh628zrX9qphsRcj4iMZyWMzs32RIP0VcaVWsGiaY%2FiSxJJQeQmOjXmBOzDF7%2B%2Fk9mpxnc3TwykKgxW3niH4GOW2Kkm%2BM&X-Amz-Signature=ff5c8b5ac0daf62c2d93dce33180edb499c9b680491135ead69f0eb977fb2334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DOTQBBF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF1gRMZumzft%2FQy%2F9SLehIzS8fQBHu%2FFC%2FcrsQzN%2BdFAIgaP95UlrjPyHsrwXdby1BiUghKE0z1Ww7AVeCpxcHUJsq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDNdK%2BHefAOZpNcDKMSrcAwu0Mi52%2BzgcOgWniFW0Bwfs2ipORyrvUYJKq7lOa26bor3%2FI5CpPC8ClnhD%2BMOsEfkhoj8CC3v%2FT%2BOPe58njEc5gZzCMsSkLmWAbHN9w9Ufh8csNE3QrCiFQFl8w3r%2B4ZMw84u0ZHNtUY4PxZqnhKzF%2F60QUW%2Bnk0SCy5VAnr%2FAdQPszMuWxMXSDXFrdxOtY9s31TFuhWwoODBg5yY6i3oCCaDnGgQblDgrMIoGAUdu%2FdnrBsZLU%2B7J0VMqYZBTtErgrA3hgKmzWMFc6K4kP%2BjQXp%2BmA6YyiR9Wo%2BKairyBclxH02Iz8JcZDkcCYtBnMogexrTwXfDsTCLJmRBt4boruHt7JcxuxfdkMnSGXJOnJFrOCWvi5dBHOwIZvrIxbZwH6k4Q1C%2FUQBkri%2FONAzREW01kw7Jr145hu%2B9ivIT8RWT8pAoEjuSEzgrwoC3ZGIr0RSF6bwscA8uU0iVh5cModQNIPZrKi38A3P%2BmkvlieaRxUF3khvQaoGtHiijsa%2F%2F2zS5r4pYbkJGg9V5m32UVTmEVbEQ5nTU0iJMcVovE2mhVDbwbaSDl0WeBkLcqVdfkQ3vTLEJptJOD%2BeTRXa%2Buf5zCIA%2BYYa6mf%2ByqUWgXs%2FN6CEaiEr%2FEIaWyMJz7h8oGOqUBS6eId3AnuZY%2FDKSA5RQATaOGz30p%2BBzYySjhNikMyUB5ShsLsG7E6rueQGp%2BT7Xt5EShdUZi3LXGc6LOHZpBOFV%2BSQHNdVeZzHNQ0aMgOc0m288s1JbPma6V6F6jTMqmS3w85OUknUWFLH5Rz2txnF8q99pLK67qHH1NQEVJhGzYfKKkyR64cs5weuILsxIYxKwnk7vheGkqSEjHNIGFAIvBogT2&X-Amz-Signature=14ee4b4d7fb8afa007ed1f7c9d98693d80c7ff8e51e0895436d09afa708e226f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLQQJJQV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEy%2FT8yd3%2BMV3x6770c5yejzEaQBrHmYE3zAkXluHkFAiEAoGIElvVBnKlTRcHZFU0zcg3BvDQCaRd6nx9aaOkS6DIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCkZNG3AY%2FY41p4VPircAwNjf9faAZQQcEILjtvMTOD0KsdiAGCGG7Bsfj0r6lGeKnJghREvCtt9NXwT7j7v4R5zfNQXc0e5xHHM0bO2%2F%2BXV1iFvclr8J5BTw6zJnVNYcp74hc5QcNh%2BiTWwi%2FFwYmWYF%2BoiMGvf8%2FvarLj6qGCs4BiiGDNjiTcTyPijyYmEGBAG8w2OtdnQzxUC2pE3S1rtCW3WfUrFWypHXd1FCcC24Q2BpYdKQ66gDyrQeHJY15Cu70YYQganNwusobIrlgBTvPfWqR59fqL9h%2FuGfxX4Sd%2BkOXYHjPV3ghtAHF3u687oGoqiD5B5F5PbOlRwiAjfiPmNTOnRG4XR3fpzVGUP9W9chJB5RmFdpWKkneiC%2F55gF4BXedYf3svyDmzoseKtF7MIdHwfV0%2FrsJAruu5LnuSMoAtNi%2BByuU81S3gh08dP%2FR5CYqeq9I2FmjthCi7oFPfSaUOTlQ4DA4aGfVXQ77mvoFtIMSwcV6Mbu7fl9fZ2Cn5%2BOJLf06jF5Z8QL5RPaLsbRty9IW9tVtrHcNG7GjiNvMO6Knf2D0WhoDh%2BQL6OVxnkDGgtMgS8VPSkIHIAdcyAXAL1KFn1jVz12kTntOhTLMidWOPtx85iLJfqab7VauFVAM%2FwiJzUMNr6h8oGOqUBT7R6m5Wn9xP68QDZv2cxoQLY8zuQSbf8JddAC4gqz36i0SbH0xGbOssseNzNFYoPkQaAEDkrXSyYEz8S%2Fn9A83Ou8UP79do9bUXAuRVAjlo3aSzXo%2FELw4m5eocOpleJv0wWAkOnkpltmaHkqs%2BGZWR7Y47jcYHdHUMtFdqR4eRibHqbtK4etL3ZEWIQ2%2FxISds%2FXNHeCCXIhdVhLgXgtloXuEpF&X-Amz-Signature=089cd86d2b0b5587ef7cedc8decd92a8cf9daf639284fbf86dcb40b9e02ffba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HLXL7VB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkhoqmWUO0EdVGAxghB4u0jizxey%2BUdvay5gAaDDSyZQIhAMGYnUvCsdvBWh2KdoxuwpLxZEGO1U18oD6jER9sV2YpKv8DCHIQABoMNjM3NDIzMTgzODA1IgyLO2OFPxtbhZ%2BXh%2B8q3ANecIfnqy9NZGxzhSshgTeQJbi43FqE9XQbnvMcQRI18PMBODjWWilqJqoj%2BBeGSwJKMKkQiP5jfUlwmOvRp3QKjBWBQLfVdBM4u9rduVC00khD2ibDWp%2FA8%2BdnvHTGmmZFwcW9cCQz%2Fo4eD%2BkgK%2BZl8SJENwfi2tyZtvkRgHh%2B7Hh5SPFAAyi6h2Z6Kuc%2ByP06UjzCgvqnTfHFXqWg8ti6mhWMKa2b3TjPeYPL5Abgf0N0BjkjTCcCDN0Wd41NBP2j01uIfHK7v1u9AkuN9Uf%2Bt4cPjnWGsByLSapLGYOVL3pFtFsCx3lAYS9RqESqAqzL7fil7sOA9dVmd9rBO3IeIW%2F7GbkNjIIyUqdXYOJLTQW%2BMmqWz3L1YPTA%2BpgkpHjzmVcg6N277gKBLd0P9WDN8TOYBXFMuMShViJ8uTWl%2BVrSyk4REYe0iL5TYwy94eb9lfmb922vg7ApY0IyxWXoqxGrCbU2om1wWZ%2B%2ByzItN2PUpzfXFSY2lSD8qPfJ38q7pjt9oP9nc4zKPUwT%2Bvmj5g7Q92feVYhEPJHZblAPthTvxczsSRmTUsbwgidNLPQz4CrHYMskphqQIzb1FqACtrtgBTYY9%2BGK6VHsa9VwbGwU0yJEB4YKgO2VYDDm%2B4fKBjqkAQ8uhn3pKfaxZRIVZoXK4%2F3f7hLuXXQxtM2W2xj5PxRVEbFCCNyRy4GsuS43fCgNaklofmh6Fy0N1v3FZYGK%2Bc0zUoa2a9o4oPdNnXeY04VJhP6tHPhyDYLVX%2FovnZVVhaT4kHUmZvwxUjp2S5XDXNBElZFdLqdROC76CiPsV2dUeqppNpJmKo7M7yCiSwWrTIzhmkqsIXi4EKA2C87SeNDnUZkM&X-Amz-Signature=a1e87768fd7e586e220757daef30ca49ef6d8880c82db187ba1f349ac9af9862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJYJGNH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD95DhnWHlkHC5C45wSzFkdq1XI4i%2BK0vLRLQUS8S5UngIgKKrhSSzlcHmpD2%2FAWSTtNSe3MwdZe8N%2B8tgnPJU3fScq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMwoIi8HOEwrLVwt7ircA9cvejhOulERJ7jKVbdOlV5d8KAkboQtbbiEGjSHSUdeX%2Bvtgu12yeQRd%2BHSTEWQ9Irvpy%2FsfDxbSjDKCE80d6dei%2F9eLC2WsDE2kGaH%2FwwYgYnFHyStPYj%2FUj3HIL5fYzsvufFbmYgVKAM4EdlWbn%2FqVCuIO%2FlD4TCZUNuNnqHDq6ph6VNovsajuN8LPXuaxgiturwj7V%2Fe0xSoIP8XYkN9ar98UqR5EFv3WXQATc1IRxxEkZaYF6i%2F0%2FcvOTnr8VGaoVb9Pn2RGKSdE68ZsIdSnXUvvHeRnIh0ks4yEk%2F%2B1ECp3RT%2B7TAQSZ%2FeCd5C8A3qXEnfcQPp5Mo9eYTEb%2F%2FoeZ7sJutKB8MuMTd2cDx3LB0JhmbxfGbxxmkrQNeUhEaBqSOf4nTwoc%2Foz74qr3GRvUqkjtZfCEKtV5Goh1Iy%2B5ZEfvCatCxOvO09f7IYgYowcbTSMYgPFaKX70ox9nIPhDqt45YfFR3alCusycpsOsZE9R8Ry5sGS%2Bj86PBWGRkP2xqPwXE6SPx2T4MnDhxZmagYeqPG3L1nvE%2BLPJHBUsaKnbpIo5Aufb70eZvAVx%2B06DPA7OUP9TWtGQR%2Btqoo8Rt9Diq23UFQZ1rlQZa27uosqethiBLGW9fYMJX7h8oGOqUBSjB%2BLXQuD%2BJz%2BU6H9iVgxf9wH09Tmi1Wo3B%2Fp0cXJwINIFr9qk7kGHxRXHLTgBvGiescbwQCY87WfbpTpUqxMIh0vUbhHyzFLxfs2dfOOTO9H9u2KTC4LRjjjZtm9OSUh628zrX9qphsRcj4iMZyWMzs32RIP0VcaVWsGiaY%2FiSxJJQeQmOjXmBOzDF7%2B%2Fk9mpxnc3TwykKgxW3niH4GOW2Kkm%2BM&X-Amz-Signature=c0699b89a0583fc1a4e5b2f3e8fd9b0b7cd62dc840f5be66deab616603485769&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJYJGNH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD95DhnWHlkHC5C45wSzFkdq1XI4i%2BK0vLRLQUS8S5UngIgKKrhSSzlcHmpD2%2FAWSTtNSe3MwdZe8N%2B8tgnPJU3fScq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMwoIi8HOEwrLVwt7ircA9cvejhOulERJ7jKVbdOlV5d8KAkboQtbbiEGjSHSUdeX%2Bvtgu12yeQRd%2BHSTEWQ9Irvpy%2FsfDxbSjDKCE80d6dei%2F9eLC2WsDE2kGaH%2FwwYgYnFHyStPYj%2FUj3HIL5fYzsvufFbmYgVKAM4EdlWbn%2FqVCuIO%2FlD4TCZUNuNnqHDq6ph6VNovsajuN8LPXuaxgiturwj7V%2Fe0xSoIP8XYkN9ar98UqR5EFv3WXQATc1IRxxEkZaYF6i%2F0%2FcvOTnr8VGaoVb9Pn2RGKSdE68ZsIdSnXUvvHeRnIh0ks4yEk%2F%2B1ECp3RT%2B7TAQSZ%2FeCd5C8A3qXEnfcQPp5Mo9eYTEb%2F%2FoeZ7sJutKB8MuMTd2cDx3LB0JhmbxfGbxxmkrQNeUhEaBqSOf4nTwoc%2Foz74qr3GRvUqkjtZfCEKtV5Goh1Iy%2B5ZEfvCatCxOvO09f7IYgYowcbTSMYgPFaKX70ox9nIPhDqt45YfFR3alCusycpsOsZE9R8Ry5sGS%2Bj86PBWGRkP2xqPwXE6SPx2T4MnDhxZmagYeqPG3L1nvE%2BLPJHBUsaKnbpIo5Aufb70eZvAVx%2B06DPA7OUP9TWtGQR%2Btqoo8Rt9Diq23UFQZ1rlQZa27uosqethiBLGW9fYMJX7h8oGOqUBSjB%2BLXQuD%2BJz%2BU6H9iVgxf9wH09Tmi1Wo3B%2Fp0cXJwINIFr9qk7kGHxRXHLTgBvGiescbwQCY87WfbpTpUqxMIh0vUbhHyzFLxfs2dfOOTO9H9u2KTC4LRjjjZtm9OSUh628zrX9qphsRcj4iMZyWMzs32RIP0VcaVWsGiaY%2FiSxJJQeQmOjXmBOzDF7%2B%2Fk9mpxnc3TwykKgxW3niH4GOW2Kkm%2BM&X-Amz-Signature=63f30bcaf9b1712f38cd1796dfd0694c6bf3866a867692cbf77c748c6fa7cc34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSWXWKAU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCyyLDFJSEYYkJKIbW5tbHVeeNEBotfon9QlWzW1KS%2FAiEAvF%2FwwbsLqhAl0tJDWJ3Ni1pCqWO4vZSJXaX6QjL9zh0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEzmyjIPY9fVyLz4IircA0l4HpzZ79bwZ3NtHXhR%2F7gDILwYE6JUoqgHy4kN12D8wRy%2BADTgep7FoA6hF6zHhftDd%2B5wceaak8sXQorYOYMsX%2F%2F5bRH%2Bgk3ipPjrnPcZpyjel9jXTD7EaUZSfjJV98ZsyFIRiq54%2BgihyNyICko%2BXKim9a5SVGeJolsk56l6tkdDBOHALBFEVRtbCGk%2B%2Bu8E5CsVeDBHTSFZz%2FE6aBma124%2FnEf0VIOwzxc909l2p87%2FRl6RvBBjNKyci6TzltfSko0Xo31FOvHcUFv18DbgbyAjDw9c0k1viQW8vDa9fWb52ier9rqqFjbqPy4UhClDF6PqFR3S5xIag3Xo%2FHa4DShrsUdNDel14mSE0Y%2FpRMbYj7KNcBXYT8hpYpwwAFqEhv7eQvxC%2BKfpR%2BsDpRtpVbQSGss2fu0Vi4v1dOg0b%2F0Sj0YiXDRZg3vO%2BfR%2BH8TO7tz4djecA%2Bf8ObbTWA82yxLsnNNU3fjFSOnc%2BGISret9vbccPd12RW%2FvRNDDorg6aWsolGF%2B2AZXju8nwRib4%2BLQoJC3KN5%2BDVctCHRrkRNQIesegp%2F9UqEvVJeU878EJOxDUfiPXIUI2aJuAoSwICxvg%2BOuCsPcjbgyBiOT%2ByaKBpClQ7pVftVkMOX7h8oGOqUB5RAsVwh3HjulZaay4ldwbMzPWS0QWyb%2BiHfOmhQAm8VOVRnogt5PWh6UlJJaWiD%2FqoL1%2Bdrq8SoMhXRkW8RLYx6O1gTGMRpkqioWbEphbNCFhWu2%2B4wHsa4UwI1cah6SlQxsYeIJejLsoLTjPBkm%2BlcKB12L2OOsiUH2G%2FTPMuCyJ%2FYT%2FqPcMDQW7qRPvTvIQjoVwW2ACYeLZ0Grws9w62dCBhu2&X-Amz-Signature=30b92dc3ecf5646f07ba530a9cbf4a33c673b130bcd40770f24cc6318ec29d7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSWXWKAU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCyyLDFJSEYYkJKIbW5tbHVeeNEBotfon9QlWzW1KS%2FAiEAvF%2FwwbsLqhAl0tJDWJ3Ni1pCqWO4vZSJXaX6QjL9zh0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEzmyjIPY9fVyLz4IircA0l4HpzZ79bwZ3NtHXhR%2F7gDILwYE6JUoqgHy4kN12D8wRy%2BADTgep7FoA6hF6zHhftDd%2B5wceaak8sXQorYOYMsX%2F%2F5bRH%2Bgk3ipPjrnPcZpyjel9jXTD7EaUZSfjJV98ZsyFIRiq54%2BgihyNyICko%2BXKim9a5SVGeJolsk56l6tkdDBOHALBFEVRtbCGk%2B%2Bu8E5CsVeDBHTSFZz%2FE6aBma124%2FnEf0VIOwzxc909l2p87%2FRl6RvBBjNKyci6TzltfSko0Xo31FOvHcUFv18DbgbyAjDw9c0k1viQW8vDa9fWb52ier9rqqFjbqPy4UhClDF6PqFR3S5xIag3Xo%2FHa4DShrsUdNDel14mSE0Y%2FpRMbYj7KNcBXYT8hpYpwwAFqEhv7eQvxC%2BKfpR%2BsDpRtpVbQSGss2fu0Vi4v1dOg0b%2F0Sj0YiXDRZg3vO%2BfR%2BH8TO7tz4djecA%2Bf8ObbTWA82yxLsnNNU3fjFSOnc%2BGISret9vbccPd12RW%2FvRNDDorg6aWsolGF%2B2AZXju8nwRib4%2BLQoJC3KN5%2BDVctCHRrkRNQIesegp%2F9UqEvVJeU878EJOxDUfiPXIUI2aJuAoSwICxvg%2BOuCsPcjbgyBiOT%2ByaKBpClQ7pVftVkMOX7h8oGOqUB5RAsVwh3HjulZaay4ldwbMzPWS0QWyb%2BiHfOmhQAm8VOVRnogt5PWh6UlJJaWiD%2FqoL1%2Bdrq8SoMhXRkW8RLYx6O1gTGMRpkqioWbEphbNCFhWu2%2B4wHsa4UwI1cah6SlQxsYeIJejLsoLTjPBkm%2BlcKB12L2OOsiUH2G%2FTPMuCyJ%2FYT%2FqPcMDQW7qRPvTvIQjoVwW2ACYeLZ0Grws9w62dCBhu2&X-Amz-Signature=ecd76aae2617532bdbdaae05b15b56c42148fe6699acfdcbb45d4b37dacd2227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSWXWKAU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCyyLDFJSEYYkJKIbW5tbHVeeNEBotfon9QlWzW1KS%2FAiEAvF%2FwwbsLqhAl0tJDWJ3Ni1pCqWO4vZSJXaX6QjL9zh0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEzmyjIPY9fVyLz4IircA0l4HpzZ79bwZ3NtHXhR%2F7gDILwYE6JUoqgHy4kN12D8wRy%2BADTgep7FoA6hF6zHhftDd%2B5wceaak8sXQorYOYMsX%2F%2F5bRH%2Bgk3ipPjrnPcZpyjel9jXTD7EaUZSfjJV98ZsyFIRiq54%2BgihyNyICko%2BXKim9a5SVGeJolsk56l6tkdDBOHALBFEVRtbCGk%2B%2Bu8E5CsVeDBHTSFZz%2FE6aBma124%2FnEf0VIOwzxc909l2p87%2FRl6RvBBjNKyci6TzltfSko0Xo31FOvHcUFv18DbgbyAjDw9c0k1viQW8vDa9fWb52ier9rqqFjbqPy4UhClDF6PqFR3S5xIag3Xo%2FHa4DShrsUdNDel14mSE0Y%2FpRMbYj7KNcBXYT8hpYpwwAFqEhv7eQvxC%2BKfpR%2BsDpRtpVbQSGss2fu0Vi4v1dOg0b%2F0Sj0YiXDRZg3vO%2BfR%2BH8TO7tz4djecA%2Bf8ObbTWA82yxLsnNNU3fjFSOnc%2BGISret9vbccPd12RW%2FvRNDDorg6aWsolGF%2B2AZXju8nwRib4%2BLQoJC3KN5%2BDVctCHRrkRNQIesegp%2F9UqEvVJeU878EJOxDUfiPXIUI2aJuAoSwICxvg%2BOuCsPcjbgyBiOT%2ByaKBpClQ7pVftVkMOX7h8oGOqUB5RAsVwh3HjulZaay4ldwbMzPWS0QWyb%2BiHfOmhQAm8VOVRnogt5PWh6UlJJaWiD%2FqoL1%2Bdrq8SoMhXRkW8RLYx6O1gTGMRpkqioWbEphbNCFhWu2%2B4wHsa4UwI1cah6SlQxsYeIJejLsoLTjPBkm%2BlcKB12L2OOsiUH2G%2FTPMuCyJ%2FYT%2FqPcMDQW7qRPvTvIQjoVwW2ACYeLZ0Grws9w62dCBhu2&X-Amz-Signature=e0ffc0afc10475a1a798a2db8669582c0eb9f5ef3e1d222b84d36b068eae0f03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSWXWKAU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCyyLDFJSEYYkJKIbW5tbHVeeNEBotfon9QlWzW1KS%2FAiEAvF%2FwwbsLqhAl0tJDWJ3Ni1pCqWO4vZSJXaX6QjL9zh0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEzmyjIPY9fVyLz4IircA0l4HpzZ79bwZ3NtHXhR%2F7gDILwYE6JUoqgHy4kN12D8wRy%2BADTgep7FoA6hF6zHhftDd%2B5wceaak8sXQorYOYMsX%2F%2F5bRH%2Bgk3ipPjrnPcZpyjel9jXTD7EaUZSfjJV98ZsyFIRiq54%2BgihyNyICko%2BXKim9a5SVGeJolsk56l6tkdDBOHALBFEVRtbCGk%2B%2Bu8E5CsVeDBHTSFZz%2FE6aBma124%2FnEf0VIOwzxc909l2p87%2FRl6RvBBjNKyci6TzltfSko0Xo31FOvHcUFv18DbgbyAjDw9c0k1viQW8vDa9fWb52ier9rqqFjbqPy4UhClDF6PqFR3S5xIag3Xo%2FHa4DShrsUdNDel14mSE0Y%2FpRMbYj7KNcBXYT8hpYpwwAFqEhv7eQvxC%2BKfpR%2BsDpRtpVbQSGss2fu0Vi4v1dOg0b%2F0Sj0YiXDRZg3vO%2BfR%2BH8TO7tz4djecA%2Bf8ObbTWA82yxLsnNNU3fjFSOnc%2BGISret9vbccPd12RW%2FvRNDDorg6aWsolGF%2B2AZXju8nwRib4%2BLQoJC3KN5%2BDVctCHRrkRNQIesegp%2F9UqEvVJeU878EJOxDUfiPXIUI2aJuAoSwICxvg%2BOuCsPcjbgyBiOT%2ByaKBpClQ7pVftVkMOX7h8oGOqUB5RAsVwh3HjulZaay4ldwbMzPWS0QWyb%2BiHfOmhQAm8VOVRnogt5PWh6UlJJaWiD%2FqoL1%2Bdrq8SoMhXRkW8RLYx6O1gTGMRpkqioWbEphbNCFhWu2%2B4wHsa4UwI1cah6SlQxsYeIJejLsoLTjPBkm%2BlcKB12L2OOsiUH2G%2FTPMuCyJ%2FYT%2FqPcMDQW7qRPvTvIQjoVwW2ACYeLZ0Grws9w62dCBhu2&X-Amz-Signature=06e7db8a962bc51364d00944dbc65db55cec5e1f4cc5d90a5135cba3a6fdf65e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q66KYUB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXm8XQtqRm48P%2BS5BoRs6L%2FFEh%2B9ZTfARzfYQzQJohhAIhALGapCkt8jpn6bmPH17yPs34KGf92742uYjXhm3cM1QEKv8DCHIQABoMNjM3NDIzMTgzODA1IgzEYOLYwWFRIhtUU6gq3APm3F26J%2BHLw0P9XmpME2KWtP%2B6Z8cVEpQS3W%2FMP3idmOBRsYynniOb4lECDuSbyPBk6KAYno1dbZhgVBmMp%2B4jE0ajfB0M79YNRHC4H%2BXGtvPbqNqaPKJJpsUpwe6nrCS8aKzu3XwIomVRytBjHqmBgHiACmK24UjrqtJUSE1jp0rTMIZ5APSDzDj08afZgjIwSbKm6ROhC3wBS69oyjO5UtQLaHvVFCjduKU8raaZdIz3rYfVP%2BbF%2B69ReyAcW7dq4HbH%2F01DVXfmU5F9MBJGfep9oeY3PeR0W5PVhCFp414LuMeHSZNy1UNAkKW0yBb%2FRBnVV9to%2B6o2VTK0cvhZttpy5pcoux0JAq6YWhD3WRMVjUaO05fjzPbmRGgBL0ctyM%2BJssuQ7H5BbSHcoF6S8qtNTsYNZTf6fAaTr3Ss0XsWH%2BHei4cIub5kix2Tu6ZTtFI448QR3%2BJQUVjN51giTY9%2BPLgwufn3TDC%2BzGE0c27Is%2BZH6IzESI9DTXKiIc7dS7pcYlmv5ru3HflKGSdTw0h74JJsFVu9WqPedVyO%2F3PBEnisBZDCMlzS8pvXBElG7cHQ3i%2FhAjxQRPB3KkhVwOdD0ROlM3Iyh2p7sEfQIGfV8bwrAj97ll%2BTPzC6%2B4fKBjqkAX%2FQbkanwrS%2FQvXd7ep%2Fj0FTJvuY0prIgPA0JmJ%2B%2FI6oSlEvWkga4NYHk94HFj4BA5hr%2B8F1aNxVWsIjpKf5i09oBiezOAt7%2FoqE3uP%2B8fJ1xsjl3Q39hSEpyyMsOQ4%2BDgqn5KPaaVhQzuI%2Byc31Tn9sHr%2Fk073bwE2GLfElXF7pjJHhhMCGuPPmHYT8yu%2FBeHW6GqDPn2O5PUEL4hEaXdOcIlio&X-Amz-Signature=89df18863659d73fd46006d2ef8c95bfd3a33df4dc352005e8b6c00e91d2b11e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSWXWKAU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCyyLDFJSEYYkJKIbW5tbHVeeNEBotfon9QlWzW1KS%2FAiEAvF%2FwwbsLqhAl0tJDWJ3Ni1pCqWO4vZSJXaX6QjL9zh0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEzmyjIPY9fVyLz4IircA0l4HpzZ79bwZ3NtHXhR%2F7gDILwYE6JUoqgHy4kN12D8wRy%2BADTgep7FoA6hF6zHhftDd%2B5wceaak8sXQorYOYMsX%2F%2F5bRH%2Bgk3ipPjrnPcZpyjel9jXTD7EaUZSfjJV98ZsyFIRiq54%2BgihyNyICko%2BXKim9a5SVGeJolsk56l6tkdDBOHALBFEVRtbCGk%2B%2Bu8E5CsVeDBHTSFZz%2FE6aBma124%2FnEf0VIOwzxc909l2p87%2FRl6RvBBjNKyci6TzltfSko0Xo31FOvHcUFv18DbgbyAjDw9c0k1viQW8vDa9fWb52ier9rqqFjbqPy4UhClDF6PqFR3S5xIag3Xo%2FHa4DShrsUdNDel14mSE0Y%2FpRMbYj7KNcBXYT8hpYpwwAFqEhv7eQvxC%2BKfpR%2BsDpRtpVbQSGss2fu0Vi4v1dOg0b%2F0Sj0YiXDRZg3vO%2BfR%2BH8TO7tz4djecA%2Bf8ObbTWA82yxLsnNNU3fjFSOnc%2BGISret9vbccPd12RW%2FvRNDDorg6aWsolGF%2B2AZXju8nwRib4%2BLQoJC3KN5%2BDVctCHRrkRNQIesegp%2F9UqEvVJeU878EJOxDUfiPXIUI2aJuAoSwICxvg%2BOuCsPcjbgyBiOT%2ByaKBpClQ7pVftVkMOX7h8oGOqUB5RAsVwh3HjulZaay4ldwbMzPWS0QWyb%2BiHfOmhQAm8VOVRnogt5PWh6UlJJaWiD%2FqoL1%2Bdrq8SoMhXRkW8RLYx6O1gTGMRpkqioWbEphbNCFhWu2%2B4wHsa4UwI1cah6SlQxsYeIJejLsoLTjPBkm%2BlcKB12L2OOsiUH2G%2FTPMuCyJ%2FYT%2FqPcMDQW7qRPvTvIQjoVwW2ACYeLZ0Grws9w62dCBhu2&X-Amz-Signature=1378665e53c1495289540438850010e3454ac5f891d15e83f699193d1965edb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSWXWKAU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCyyLDFJSEYYkJKIbW5tbHVeeNEBotfon9QlWzW1KS%2FAiEAvF%2FwwbsLqhAl0tJDWJ3Ni1pCqWO4vZSJXaX6QjL9zh0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEzmyjIPY9fVyLz4IircA0l4HpzZ79bwZ3NtHXhR%2F7gDILwYE6JUoqgHy4kN12D8wRy%2BADTgep7FoA6hF6zHhftDd%2B5wceaak8sXQorYOYMsX%2F%2F5bRH%2Bgk3ipPjrnPcZpyjel9jXTD7EaUZSfjJV98ZsyFIRiq54%2BgihyNyICko%2BXKim9a5SVGeJolsk56l6tkdDBOHALBFEVRtbCGk%2B%2Bu8E5CsVeDBHTSFZz%2FE6aBma124%2FnEf0VIOwzxc909l2p87%2FRl6RvBBjNKyci6TzltfSko0Xo31FOvHcUFv18DbgbyAjDw9c0k1viQW8vDa9fWb52ier9rqqFjbqPy4UhClDF6PqFR3S5xIag3Xo%2FHa4DShrsUdNDel14mSE0Y%2FpRMbYj7KNcBXYT8hpYpwwAFqEhv7eQvxC%2BKfpR%2BsDpRtpVbQSGss2fu0Vi4v1dOg0b%2F0Sj0YiXDRZg3vO%2BfR%2BH8TO7tz4djecA%2Bf8ObbTWA82yxLsnNNU3fjFSOnc%2BGISret9vbccPd12RW%2FvRNDDorg6aWsolGF%2B2AZXju8nwRib4%2BLQoJC3KN5%2BDVctCHRrkRNQIesegp%2F9UqEvVJeU878EJOxDUfiPXIUI2aJuAoSwICxvg%2BOuCsPcjbgyBiOT%2ByaKBpClQ7pVftVkMOX7h8oGOqUB5RAsVwh3HjulZaay4ldwbMzPWS0QWyb%2BiHfOmhQAm8VOVRnogt5PWh6UlJJaWiD%2FqoL1%2Bdrq8SoMhXRkW8RLYx6O1gTGMRpkqioWbEphbNCFhWu2%2B4wHsa4UwI1cah6SlQxsYeIJejLsoLTjPBkm%2BlcKB12L2OOsiUH2G%2FTPMuCyJ%2FYT%2FqPcMDQW7qRPvTvIQjoVwW2ACYeLZ0Grws9w62dCBhu2&X-Amz-Signature=65ae4d8dd09e8997b670568c84a385f1dabec8a144c3c71b5fdbe2652f39a572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSWXWKAU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCyyLDFJSEYYkJKIbW5tbHVeeNEBotfon9QlWzW1KS%2FAiEAvF%2FwwbsLqhAl0tJDWJ3Ni1pCqWO4vZSJXaX6QjL9zh0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEzmyjIPY9fVyLz4IircA0l4HpzZ79bwZ3NtHXhR%2F7gDILwYE6JUoqgHy4kN12D8wRy%2BADTgep7FoA6hF6zHhftDd%2B5wceaak8sXQorYOYMsX%2F%2F5bRH%2Bgk3ipPjrnPcZpyjel9jXTD7EaUZSfjJV98ZsyFIRiq54%2BgihyNyICko%2BXKim9a5SVGeJolsk56l6tkdDBOHALBFEVRtbCGk%2B%2Bu8E5CsVeDBHTSFZz%2FE6aBma124%2FnEf0VIOwzxc909l2p87%2FRl6RvBBjNKyci6TzltfSko0Xo31FOvHcUFv18DbgbyAjDw9c0k1viQW8vDa9fWb52ier9rqqFjbqPy4UhClDF6PqFR3S5xIag3Xo%2FHa4DShrsUdNDel14mSE0Y%2FpRMbYj7KNcBXYT8hpYpwwAFqEhv7eQvxC%2BKfpR%2BsDpRtpVbQSGss2fu0Vi4v1dOg0b%2F0Sj0YiXDRZg3vO%2BfR%2BH8TO7tz4djecA%2Bf8ObbTWA82yxLsnNNU3fjFSOnc%2BGISret9vbccPd12RW%2FvRNDDorg6aWsolGF%2B2AZXju8nwRib4%2BLQoJC3KN5%2BDVctCHRrkRNQIesegp%2F9UqEvVJeU878EJOxDUfiPXIUI2aJuAoSwICxvg%2BOuCsPcjbgyBiOT%2ByaKBpClQ7pVftVkMOX7h8oGOqUB5RAsVwh3HjulZaay4ldwbMzPWS0QWyb%2BiHfOmhQAm8VOVRnogt5PWh6UlJJaWiD%2FqoL1%2Bdrq8SoMhXRkW8RLYx6O1gTGMRpkqioWbEphbNCFhWu2%2B4wHsa4UwI1cah6SlQxsYeIJejLsoLTjPBkm%2BlcKB12L2OOsiUH2G%2FTPMuCyJ%2FYT%2FqPcMDQW7qRPvTvIQjoVwW2ACYeLZ0Grws9w62dCBhu2&X-Amz-Signature=f82e950a102b716b1e4dde860e7d906359df13559a7920fc4261575ad7dcce91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSWXWKAU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCyyLDFJSEYYkJKIbW5tbHVeeNEBotfon9QlWzW1KS%2FAiEAvF%2FwwbsLqhAl0tJDWJ3Ni1pCqWO4vZSJXaX6QjL9zh0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEzmyjIPY9fVyLz4IircA0l4HpzZ79bwZ3NtHXhR%2F7gDILwYE6JUoqgHy4kN12D8wRy%2BADTgep7FoA6hF6zHhftDd%2B5wceaak8sXQorYOYMsX%2F%2F5bRH%2Bgk3ipPjrnPcZpyjel9jXTD7EaUZSfjJV98ZsyFIRiq54%2BgihyNyICko%2BXKim9a5SVGeJolsk56l6tkdDBOHALBFEVRtbCGk%2B%2Bu8E5CsVeDBHTSFZz%2FE6aBma124%2FnEf0VIOwzxc909l2p87%2FRl6RvBBjNKyci6TzltfSko0Xo31FOvHcUFv18DbgbyAjDw9c0k1viQW8vDa9fWb52ier9rqqFjbqPy4UhClDF6PqFR3S5xIag3Xo%2FHa4DShrsUdNDel14mSE0Y%2FpRMbYj7KNcBXYT8hpYpwwAFqEhv7eQvxC%2BKfpR%2BsDpRtpVbQSGss2fu0Vi4v1dOg0b%2F0Sj0YiXDRZg3vO%2BfR%2BH8TO7tz4djecA%2Bf8ObbTWA82yxLsnNNU3fjFSOnc%2BGISret9vbccPd12RW%2FvRNDDorg6aWsolGF%2B2AZXju8nwRib4%2BLQoJC3KN5%2BDVctCHRrkRNQIesegp%2F9UqEvVJeU878EJOxDUfiPXIUI2aJuAoSwICxvg%2BOuCsPcjbgyBiOT%2ByaKBpClQ7pVftVkMOX7h8oGOqUB5RAsVwh3HjulZaay4ldwbMzPWS0QWyb%2BiHfOmhQAm8VOVRnogt5PWh6UlJJaWiD%2FqoL1%2Bdrq8SoMhXRkW8RLYx6O1gTGMRpkqioWbEphbNCFhWu2%2B4wHsa4UwI1cah6SlQxsYeIJejLsoLTjPBkm%2BlcKB12L2OOsiUH2G%2FTPMuCyJ%2FYT%2FqPcMDQW7qRPvTvIQjoVwW2ACYeLZ0Grws9w62dCBhu2&X-Amz-Signature=ad58002d6494e287b0d5af4c0ba6c223e37145645544ad849fc458523ddb98ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSWXWKAU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCyyLDFJSEYYkJKIbW5tbHVeeNEBotfon9QlWzW1KS%2FAiEAvF%2FwwbsLqhAl0tJDWJ3Ni1pCqWO4vZSJXaX6QjL9zh0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEzmyjIPY9fVyLz4IircA0l4HpzZ79bwZ3NtHXhR%2F7gDILwYE6JUoqgHy4kN12D8wRy%2BADTgep7FoA6hF6zHhftDd%2B5wceaak8sXQorYOYMsX%2F%2F5bRH%2Bgk3ipPjrnPcZpyjel9jXTD7EaUZSfjJV98ZsyFIRiq54%2BgihyNyICko%2BXKim9a5SVGeJolsk56l6tkdDBOHALBFEVRtbCGk%2B%2Bu8E5CsVeDBHTSFZz%2FE6aBma124%2FnEf0VIOwzxc909l2p87%2FRl6RvBBjNKyci6TzltfSko0Xo31FOvHcUFv18DbgbyAjDw9c0k1viQW8vDa9fWb52ier9rqqFjbqPy4UhClDF6PqFR3S5xIag3Xo%2FHa4DShrsUdNDel14mSE0Y%2FpRMbYj7KNcBXYT8hpYpwwAFqEhv7eQvxC%2BKfpR%2BsDpRtpVbQSGss2fu0Vi4v1dOg0b%2F0Sj0YiXDRZg3vO%2BfR%2BH8TO7tz4djecA%2Bf8ObbTWA82yxLsnNNU3fjFSOnc%2BGISret9vbccPd12RW%2FvRNDDorg6aWsolGF%2B2AZXju8nwRib4%2BLQoJC3KN5%2BDVctCHRrkRNQIesegp%2F9UqEvVJeU878EJOxDUfiPXIUI2aJuAoSwICxvg%2BOuCsPcjbgyBiOT%2ByaKBpClQ7pVftVkMOX7h8oGOqUB5RAsVwh3HjulZaay4ldwbMzPWS0QWyb%2BiHfOmhQAm8VOVRnogt5PWh6UlJJaWiD%2FqoL1%2Bdrq8SoMhXRkW8RLYx6O1gTGMRpkqioWbEphbNCFhWu2%2B4wHsa4UwI1cah6SlQxsYeIJejLsoLTjPBkm%2BlcKB12L2OOsiUH2G%2FTPMuCyJ%2FYT%2FqPcMDQW7qRPvTvIQjoVwW2ACYeLZ0Grws9w62dCBhu2&X-Amz-Signature=1f2826c221bba2e9666abaf4375f8c60a223846f28bb8253f959c40b2ff0138e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSWXWKAU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCyyLDFJSEYYkJKIbW5tbHVeeNEBotfon9QlWzW1KS%2FAiEAvF%2FwwbsLqhAl0tJDWJ3Ni1pCqWO4vZSJXaX6QjL9zh0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEzmyjIPY9fVyLz4IircA0l4HpzZ79bwZ3NtHXhR%2F7gDILwYE6JUoqgHy4kN12D8wRy%2BADTgep7FoA6hF6zHhftDd%2B5wceaak8sXQorYOYMsX%2F%2F5bRH%2Bgk3ipPjrnPcZpyjel9jXTD7EaUZSfjJV98ZsyFIRiq54%2BgihyNyICko%2BXKim9a5SVGeJolsk56l6tkdDBOHALBFEVRtbCGk%2B%2Bu8E5CsVeDBHTSFZz%2FE6aBma124%2FnEf0VIOwzxc909l2p87%2FRl6RvBBjNKyci6TzltfSko0Xo31FOvHcUFv18DbgbyAjDw9c0k1viQW8vDa9fWb52ier9rqqFjbqPy4UhClDF6PqFR3S5xIag3Xo%2FHa4DShrsUdNDel14mSE0Y%2FpRMbYj7KNcBXYT8hpYpwwAFqEhv7eQvxC%2BKfpR%2BsDpRtpVbQSGss2fu0Vi4v1dOg0b%2F0Sj0YiXDRZg3vO%2BfR%2BH8TO7tz4djecA%2Bf8ObbTWA82yxLsnNNU3fjFSOnc%2BGISret9vbccPd12RW%2FvRNDDorg6aWsolGF%2B2AZXju8nwRib4%2BLQoJC3KN5%2BDVctCHRrkRNQIesegp%2F9UqEvVJeU878EJOxDUfiPXIUI2aJuAoSwICxvg%2BOuCsPcjbgyBiOT%2ByaKBpClQ7pVftVkMOX7h8oGOqUB5RAsVwh3HjulZaay4ldwbMzPWS0QWyb%2BiHfOmhQAm8VOVRnogt5PWh6UlJJaWiD%2FqoL1%2Bdrq8SoMhXRkW8RLYx6O1gTGMRpkqioWbEphbNCFhWu2%2B4wHsa4UwI1cah6SlQxsYeIJejLsoLTjPBkm%2BlcKB12L2OOsiUH2G%2FTPMuCyJ%2FYT%2FqPcMDQW7qRPvTvIQjoVwW2ACYeLZ0Grws9w62dCBhu2&X-Amz-Signature=1a7052755c3537e809c1a329b8c525b8ea1175c2d6eedfd181728b4c22e87059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


