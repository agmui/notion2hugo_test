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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KNNIHBU%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZO1jE6nQo%2FGcAhdwv4TCGMvMXL7pSqFnwEifUjyld7AiEAwCKJqjuMAAWil94I99rKd4jqoVTDKGoWBmay%2FzP3g%2F0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2sIVOQ%2BrlY5K4MKSrcA4IcmxlE9rcysR%2FP7fSYwh2m%2BsJPxOBS2wFw6vZNv1ue7jzBhW56kHKbY5FD4jdavGG2L4sjv5TI7c4n%2F7Wf8dFOK3VycILJuoY%2FwuDkDrUf8VeofVGL72RLOJm1Ea87HSqRWh2sItr5JXxLT0KH0CFToLpUsmusRjABY0rX6jxlcclPsXeN2BddLMWxnpx8JgKamMKkWXKhvdQeEZZI%2B1YCdv5WtVp2514PMHXWWezFUjkr2x18fIDcb0lL5Xx7yXSOvofsz3%2BR5stEJvgLM0c4dZaOc9CXtdYPU63lt28SmgySLhCODVtE6HYR5VlyRwE3FkhLha3APiLOgTC%2FWKE437lFLtEeb28KB6oiGyWAEdMvw5HEdXfjO0yS2%2BrEHFAVD63J%2FuGJb45CGjTnrcMpq6V89qxcWW9ZPZaLZesYnZDYO7swuLDQhl3WaSFB3BrTfvuWUjciW0u56zQtPbGiLq%2Fnb4f2HyiMNzC%2Fdfluaiz0W%2FDd5mFck475cymDG47t0xGvmCzGd5UkP3RZiI4aHEk3VuWN1I3LAfSzBeok%2BJfrNjheEvkt4rm4ys24JUxSliHvIQQmuiOhh%2BYtEZzs00na3gwjy56UZ7UkzPdcw%2FzF1C2CHAgwsuFHMM%2BezsUGOqUB0VlY79e0g6%2B42mErofarGLwTkifyJXsjBLNiBWPcF4zAj%2FNBU3v1a3QFmEVNUrX9bTiVLAoYfNi%2B8VdY4ryz9%2F4QLclYXHxGdqSY6YK5HNp1NRrDiU9wqlQ%2FGlCxj%2FAk4Oa9vi0Wvq8b8dy7OdUP%2BzBPoKj6qaQFxxClo%2BsKbifUWH1QosXEEBxgsRQXuCfAb%2FvsmxcfGqyq4zraRtAAzY%2FmvS%2Bu&X-Amz-Signature=f00250e9fd3ce25ba1a7a48d905871f0676d298b3ebf8e21bf92ea8b87568d34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KNNIHBU%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZO1jE6nQo%2FGcAhdwv4TCGMvMXL7pSqFnwEifUjyld7AiEAwCKJqjuMAAWil94I99rKd4jqoVTDKGoWBmay%2FzP3g%2F0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2sIVOQ%2BrlY5K4MKSrcA4IcmxlE9rcysR%2FP7fSYwh2m%2BsJPxOBS2wFw6vZNv1ue7jzBhW56kHKbY5FD4jdavGG2L4sjv5TI7c4n%2F7Wf8dFOK3VycILJuoY%2FwuDkDrUf8VeofVGL72RLOJm1Ea87HSqRWh2sItr5JXxLT0KH0CFToLpUsmusRjABY0rX6jxlcclPsXeN2BddLMWxnpx8JgKamMKkWXKhvdQeEZZI%2B1YCdv5WtVp2514PMHXWWezFUjkr2x18fIDcb0lL5Xx7yXSOvofsz3%2BR5stEJvgLM0c4dZaOc9CXtdYPU63lt28SmgySLhCODVtE6HYR5VlyRwE3FkhLha3APiLOgTC%2FWKE437lFLtEeb28KB6oiGyWAEdMvw5HEdXfjO0yS2%2BrEHFAVD63J%2FuGJb45CGjTnrcMpq6V89qxcWW9ZPZaLZesYnZDYO7swuLDQhl3WaSFB3BrTfvuWUjciW0u56zQtPbGiLq%2Fnb4f2HyiMNzC%2Fdfluaiz0W%2FDd5mFck475cymDG47t0xGvmCzGd5UkP3RZiI4aHEk3VuWN1I3LAfSzBeok%2BJfrNjheEvkt4rm4ys24JUxSliHvIQQmuiOhh%2BYtEZzs00na3gwjy56UZ7UkzPdcw%2FzF1C2CHAgwsuFHMM%2BezsUGOqUB0VlY79e0g6%2B42mErofarGLwTkifyJXsjBLNiBWPcF4zAj%2FNBU3v1a3QFmEVNUrX9bTiVLAoYfNi%2B8VdY4ryz9%2F4QLclYXHxGdqSY6YK5HNp1NRrDiU9wqlQ%2FGlCxj%2FAk4Oa9vi0Wvq8b8dy7OdUP%2BzBPoKj6qaQFxxClo%2BsKbifUWH1QosXEEBxgsRQXuCfAb%2FvsmxcfGqyq4zraRtAAzY%2FmvS%2Bu&X-Amz-Signature=a70c90637320868e4387d0ab67257fbf71d10b61f9c91bef083ec6d1b97d6b15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KNNIHBU%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZO1jE6nQo%2FGcAhdwv4TCGMvMXL7pSqFnwEifUjyld7AiEAwCKJqjuMAAWil94I99rKd4jqoVTDKGoWBmay%2FzP3g%2F0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2sIVOQ%2BrlY5K4MKSrcA4IcmxlE9rcysR%2FP7fSYwh2m%2BsJPxOBS2wFw6vZNv1ue7jzBhW56kHKbY5FD4jdavGG2L4sjv5TI7c4n%2F7Wf8dFOK3VycILJuoY%2FwuDkDrUf8VeofVGL72RLOJm1Ea87HSqRWh2sItr5JXxLT0KH0CFToLpUsmusRjABY0rX6jxlcclPsXeN2BddLMWxnpx8JgKamMKkWXKhvdQeEZZI%2B1YCdv5WtVp2514PMHXWWezFUjkr2x18fIDcb0lL5Xx7yXSOvofsz3%2BR5stEJvgLM0c4dZaOc9CXtdYPU63lt28SmgySLhCODVtE6HYR5VlyRwE3FkhLha3APiLOgTC%2FWKE437lFLtEeb28KB6oiGyWAEdMvw5HEdXfjO0yS2%2BrEHFAVD63J%2FuGJb45CGjTnrcMpq6V89qxcWW9ZPZaLZesYnZDYO7swuLDQhl3WaSFB3BrTfvuWUjciW0u56zQtPbGiLq%2Fnb4f2HyiMNzC%2Fdfluaiz0W%2FDd5mFck475cymDG47t0xGvmCzGd5UkP3RZiI4aHEk3VuWN1I3LAfSzBeok%2BJfrNjheEvkt4rm4ys24JUxSliHvIQQmuiOhh%2BYtEZzs00na3gwjy56UZ7UkzPdcw%2FzF1C2CHAgwsuFHMM%2BezsUGOqUB0VlY79e0g6%2B42mErofarGLwTkifyJXsjBLNiBWPcF4zAj%2FNBU3v1a3QFmEVNUrX9bTiVLAoYfNi%2B8VdY4ryz9%2F4QLclYXHxGdqSY6YK5HNp1NRrDiU9wqlQ%2FGlCxj%2FAk4Oa9vi0Wvq8b8dy7OdUP%2BzBPoKj6qaQFxxClo%2BsKbifUWH1QosXEEBxgsRQXuCfAb%2FvsmxcfGqyq4zraRtAAzY%2FmvS%2Bu&X-Amz-Signature=2f2bde534d564de3c0c625ca701b557a50592681acae4ac9aa010aa0177e3834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KNNIHBU%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZO1jE6nQo%2FGcAhdwv4TCGMvMXL7pSqFnwEifUjyld7AiEAwCKJqjuMAAWil94I99rKd4jqoVTDKGoWBmay%2FzP3g%2F0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2sIVOQ%2BrlY5K4MKSrcA4IcmxlE9rcysR%2FP7fSYwh2m%2BsJPxOBS2wFw6vZNv1ue7jzBhW56kHKbY5FD4jdavGG2L4sjv5TI7c4n%2F7Wf8dFOK3VycILJuoY%2FwuDkDrUf8VeofVGL72RLOJm1Ea87HSqRWh2sItr5JXxLT0KH0CFToLpUsmusRjABY0rX6jxlcclPsXeN2BddLMWxnpx8JgKamMKkWXKhvdQeEZZI%2B1YCdv5WtVp2514PMHXWWezFUjkr2x18fIDcb0lL5Xx7yXSOvofsz3%2BR5stEJvgLM0c4dZaOc9CXtdYPU63lt28SmgySLhCODVtE6HYR5VlyRwE3FkhLha3APiLOgTC%2FWKE437lFLtEeb28KB6oiGyWAEdMvw5HEdXfjO0yS2%2BrEHFAVD63J%2FuGJb45CGjTnrcMpq6V89qxcWW9ZPZaLZesYnZDYO7swuLDQhl3WaSFB3BrTfvuWUjciW0u56zQtPbGiLq%2Fnb4f2HyiMNzC%2Fdfluaiz0W%2FDd5mFck475cymDG47t0xGvmCzGd5UkP3RZiI4aHEk3VuWN1I3LAfSzBeok%2BJfrNjheEvkt4rm4ys24JUxSliHvIQQmuiOhh%2BYtEZzs00na3gwjy56UZ7UkzPdcw%2FzF1C2CHAgwsuFHMM%2BezsUGOqUB0VlY79e0g6%2B42mErofarGLwTkifyJXsjBLNiBWPcF4zAj%2FNBU3v1a3QFmEVNUrX9bTiVLAoYfNi%2B8VdY4ryz9%2F4QLclYXHxGdqSY6YK5HNp1NRrDiU9wqlQ%2FGlCxj%2FAk4Oa9vi0Wvq8b8dy7OdUP%2BzBPoKj6qaQFxxClo%2BsKbifUWH1QosXEEBxgsRQXuCfAb%2FvsmxcfGqyq4zraRtAAzY%2FmvS%2Bu&X-Amz-Signature=c215338d534d738945d3f82bae5e56c6c64480bb1eb57a02f7c8f243e1f25e5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KNNIHBU%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZO1jE6nQo%2FGcAhdwv4TCGMvMXL7pSqFnwEifUjyld7AiEAwCKJqjuMAAWil94I99rKd4jqoVTDKGoWBmay%2FzP3g%2F0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2sIVOQ%2BrlY5K4MKSrcA4IcmxlE9rcysR%2FP7fSYwh2m%2BsJPxOBS2wFw6vZNv1ue7jzBhW56kHKbY5FD4jdavGG2L4sjv5TI7c4n%2F7Wf8dFOK3VycILJuoY%2FwuDkDrUf8VeofVGL72RLOJm1Ea87HSqRWh2sItr5JXxLT0KH0CFToLpUsmusRjABY0rX6jxlcclPsXeN2BddLMWxnpx8JgKamMKkWXKhvdQeEZZI%2B1YCdv5WtVp2514PMHXWWezFUjkr2x18fIDcb0lL5Xx7yXSOvofsz3%2BR5stEJvgLM0c4dZaOc9CXtdYPU63lt28SmgySLhCODVtE6HYR5VlyRwE3FkhLha3APiLOgTC%2FWKE437lFLtEeb28KB6oiGyWAEdMvw5HEdXfjO0yS2%2BrEHFAVD63J%2FuGJb45CGjTnrcMpq6V89qxcWW9ZPZaLZesYnZDYO7swuLDQhl3WaSFB3BrTfvuWUjciW0u56zQtPbGiLq%2Fnb4f2HyiMNzC%2Fdfluaiz0W%2FDd5mFck475cymDG47t0xGvmCzGd5UkP3RZiI4aHEk3VuWN1I3LAfSzBeok%2BJfrNjheEvkt4rm4ys24JUxSliHvIQQmuiOhh%2BYtEZzs00na3gwjy56UZ7UkzPdcw%2FzF1C2CHAgwsuFHMM%2BezsUGOqUB0VlY79e0g6%2B42mErofarGLwTkifyJXsjBLNiBWPcF4zAj%2FNBU3v1a3QFmEVNUrX9bTiVLAoYfNi%2B8VdY4ryz9%2F4QLclYXHxGdqSY6YK5HNp1NRrDiU9wqlQ%2FGlCxj%2FAk4Oa9vi0Wvq8b8dy7OdUP%2BzBPoKj6qaQFxxClo%2BsKbifUWH1QosXEEBxgsRQXuCfAb%2FvsmxcfGqyq4zraRtAAzY%2FmvS%2Bu&X-Amz-Signature=a76d7494c81287c661519d9eb463d8a75b92213b2c1754e127af874d171e97f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KNNIHBU%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZO1jE6nQo%2FGcAhdwv4TCGMvMXL7pSqFnwEifUjyld7AiEAwCKJqjuMAAWil94I99rKd4jqoVTDKGoWBmay%2FzP3g%2F0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2sIVOQ%2BrlY5K4MKSrcA4IcmxlE9rcysR%2FP7fSYwh2m%2BsJPxOBS2wFw6vZNv1ue7jzBhW56kHKbY5FD4jdavGG2L4sjv5TI7c4n%2F7Wf8dFOK3VycILJuoY%2FwuDkDrUf8VeofVGL72RLOJm1Ea87HSqRWh2sItr5JXxLT0KH0CFToLpUsmusRjABY0rX6jxlcclPsXeN2BddLMWxnpx8JgKamMKkWXKhvdQeEZZI%2B1YCdv5WtVp2514PMHXWWezFUjkr2x18fIDcb0lL5Xx7yXSOvofsz3%2BR5stEJvgLM0c4dZaOc9CXtdYPU63lt28SmgySLhCODVtE6HYR5VlyRwE3FkhLha3APiLOgTC%2FWKE437lFLtEeb28KB6oiGyWAEdMvw5HEdXfjO0yS2%2BrEHFAVD63J%2FuGJb45CGjTnrcMpq6V89qxcWW9ZPZaLZesYnZDYO7swuLDQhl3WaSFB3BrTfvuWUjciW0u56zQtPbGiLq%2Fnb4f2HyiMNzC%2Fdfluaiz0W%2FDd5mFck475cymDG47t0xGvmCzGd5UkP3RZiI4aHEk3VuWN1I3LAfSzBeok%2BJfrNjheEvkt4rm4ys24JUxSliHvIQQmuiOhh%2BYtEZzs00na3gwjy56UZ7UkzPdcw%2FzF1C2CHAgwsuFHMM%2BezsUGOqUB0VlY79e0g6%2B42mErofarGLwTkifyJXsjBLNiBWPcF4zAj%2FNBU3v1a3QFmEVNUrX9bTiVLAoYfNi%2B8VdY4ryz9%2F4QLclYXHxGdqSY6YK5HNp1NRrDiU9wqlQ%2FGlCxj%2FAk4Oa9vi0Wvq8b8dy7OdUP%2BzBPoKj6qaQFxxClo%2BsKbifUWH1QosXEEBxgsRQXuCfAb%2FvsmxcfGqyq4zraRtAAzY%2FmvS%2Bu&X-Amz-Signature=732530849cdc5c163a8aff98d5e2efd7799b729e3a3105cbac09f6859e697457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KNNIHBU%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZO1jE6nQo%2FGcAhdwv4TCGMvMXL7pSqFnwEifUjyld7AiEAwCKJqjuMAAWil94I99rKd4jqoVTDKGoWBmay%2FzP3g%2F0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2sIVOQ%2BrlY5K4MKSrcA4IcmxlE9rcysR%2FP7fSYwh2m%2BsJPxOBS2wFw6vZNv1ue7jzBhW56kHKbY5FD4jdavGG2L4sjv5TI7c4n%2F7Wf8dFOK3VycILJuoY%2FwuDkDrUf8VeofVGL72RLOJm1Ea87HSqRWh2sItr5JXxLT0KH0CFToLpUsmusRjABY0rX6jxlcclPsXeN2BddLMWxnpx8JgKamMKkWXKhvdQeEZZI%2B1YCdv5WtVp2514PMHXWWezFUjkr2x18fIDcb0lL5Xx7yXSOvofsz3%2BR5stEJvgLM0c4dZaOc9CXtdYPU63lt28SmgySLhCODVtE6HYR5VlyRwE3FkhLha3APiLOgTC%2FWKE437lFLtEeb28KB6oiGyWAEdMvw5HEdXfjO0yS2%2BrEHFAVD63J%2FuGJb45CGjTnrcMpq6V89qxcWW9ZPZaLZesYnZDYO7swuLDQhl3WaSFB3BrTfvuWUjciW0u56zQtPbGiLq%2Fnb4f2HyiMNzC%2Fdfluaiz0W%2FDd5mFck475cymDG47t0xGvmCzGd5UkP3RZiI4aHEk3VuWN1I3LAfSzBeok%2BJfrNjheEvkt4rm4ys24JUxSliHvIQQmuiOhh%2BYtEZzs00na3gwjy56UZ7UkzPdcw%2FzF1C2CHAgwsuFHMM%2BezsUGOqUB0VlY79e0g6%2B42mErofarGLwTkifyJXsjBLNiBWPcF4zAj%2FNBU3v1a3QFmEVNUrX9bTiVLAoYfNi%2B8VdY4ryz9%2F4QLclYXHxGdqSY6YK5HNp1NRrDiU9wqlQ%2FGlCxj%2FAk4Oa9vi0Wvq8b8dy7OdUP%2BzBPoKj6qaQFxxClo%2BsKbifUWH1QosXEEBxgsRQXuCfAb%2FvsmxcfGqyq4zraRtAAzY%2FmvS%2Bu&X-Amz-Signature=0c51d6eca91637136ee59f959d9b3bd41d8907b735cdbaefd954260f87064786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KNNIHBU%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZO1jE6nQo%2FGcAhdwv4TCGMvMXL7pSqFnwEifUjyld7AiEAwCKJqjuMAAWil94I99rKd4jqoVTDKGoWBmay%2FzP3g%2F0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2sIVOQ%2BrlY5K4MKSrcA4IcmxlE9rcysR%2FP7fSYwh2m%2BsJPxOBS2wFw6vZNv1ue7jzBhW56kHKbY5FD4jdavGG2L4sjv5TI7c4n%2F7Wf8dFOK3VycILJuoY%2FwuDkDrUf8VeofVGL72RLOJm1Ea87HSqRWh2sItr5JXxLT0KH0CFToLpUsmusRjABY0rX6jxlcclPsXeN2BddLMWxnpx8JgKamMKkWXKhvdQeEZZI%2B1YCdv5WtVp2514PMHXWWezFUjkr2x18fIDcb0lL5Xx7yXSOvofsz3%2BR5stEJvgLM0c4dZaOc9CXtdYPU63lt28SmgySLhCODVtE6HYR5VlyRwE3FkhLha3APiLOgTC%2FWKE437lFLtEeb28KB6oiGyWAEdMvw5HEdXfjO0yS2%2BrEHFAVD63J%2FuGJb45CGjTnrcMpq6V89qxcWW9ZPZaLZesYnZDYO7swuLDQhl3WaSFB3BrTfvuWUjciW0u56zQtPbGiLq%2Fnb4f2HyiMNzC%2Fdfluaiz0W%2FDd5mFck475cymDG47t0xGvmCzGd5UkP3RZiI4aHEk3VuWN1I3LAfSzBeok%2BJfrNjheEvkt4rm4ys24JUxSliHvIQQmuiOhh%2BYtEZzs00na3gwjy56UZ7UkzPdcw%2FzF1C2CHAgwsuFHMM%2BezsUGOqUB0VlY79e0g6%2B42mErofarGLwTkifyJXsjBLNiBWPcF4zAj%2FNBU3v1a3QFmEVNUrX9bTiVLAoYfNi%2B8VdY4ryz9%2F4QLclYXHxGdqSY6YK5HNp1NRrDiU9wqlQ%2FGlCxj%2FAk4Oa9vi0Wvq8b8dy7OdUP%2BzBPoKj6qaQFxxClo%2BsKbifUWH1QosXEEBxgsRQXuCfAb%2FvsmxcfGqyq4zraRtAAzY%2FmvS%2Bu&X-Amz-Signature=bded4352be7d91ed64ed195a44d65721ef1e0f956e9dabac2452ba5c7fb212c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KNNIHBU%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZO1jE6nQo%2FGcAhdwv4TCGMvMXL7pSqFnwEifUjyld7AiEAwCKJqjuMAAWil94I99rKd4jqoVTDKGoWBmay%2FzP3g%2F0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2sIVOQ%2BrlY5K4MKSrcA4IcmxlE9rcysR%2FP7fSYwh2m%2BsJPxOBS2wFw6vZNv1ue7jzBhW56kHKbY5FD4jdavGG2L4sjv5TI7c4n%2F7Wf8dFOK3VycILJuoY%2FwuDkDrUf8VeofVGL72RLOJm1Ea87HSqRWh2sItr5JXxLT0KH0CFToLpUsmusRjABY0rX6jxlcclPsXeN2BddLMWxnpx8JgKamMKkWXKhvdQeEZZI%2B1YCdv5WtVp2514PMHXWWezFUjkr2x18fIDcb0lL5Xx7yXSOvofsz3%2BR5stEJvgLM0c4dZaOc9CXtdYPU63lt28SmgySLhCODVtE6HYR5VlyRwE3FkhLha3APiLOgTC%2FWKE437lFLtEeb28KB6oiGyWAEdMvw5HEdXfjO0yS2%2BrEHFAVD63J%2FuGJb45CGjTnrcMpq6V89qxcWW9ZPZaLZesYnZDYO7swuLDQhl3WaSFB3BrTfvuWUjciW0u56zQtPbGiLq%2Fnb4f2HyiMNzC%2Fdfluaiz0W%2FDd5mFck475cymDG47t0xGvmCzGd5UkP3RZiI4aHEk3VuWN1I3LAfSzBeok%2BJfrNjheEvkt4rm4ys24JUxSliHvIQQmuiOhh%2BYtEZzs00na3gwjy56UZ7UkzPdcw%2FzF1C2CHAgwsuFHMM%2BezsUGOqUB0VlY79e0g6%2B42mErofarGLwTkifyJXsjBLNiBWPcF4zAj%2FNBU3v1a3QFmEVNUrX9bTiVLAoYfNi%2B8VdY4ryz9%2F4QLclYXHxGdqSY6YK5HNp1NRrDiU9wqlQ%2FGlCxj%2FAk4Oa9vi0Wvq8b8dy7OdUP%2BzBPoKj6qaQFxxClo%2BsKbifUWH1QosXEEBxgsRQXuCfAb%2FvsmxcfGqyq4zraRtAAzY%2FmvS%2Bu&X-Amz-Signature=5ab28431d39e23a26936194267971aeee6c434c11fa987cbf637c82c21e470e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KNNIHBU%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZO1jE6nQo%2FGcAhdwv4TCGMvMXL7pSqFnwEifUjyld7AiEAwCKJqjuMAAWil94I99rKd4jqoVTDKGoWBmay%2FzP3g%2F0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2sIVOQ%2BrlY5K4MKSrcA4IcmxlE9rcysR%2FP7fSYwh2m%2BsJPxOBS2wFw6vZNv1ue7jzBhW56kHKbY5FD4jdavGG2L4sjv5TI7c4n%2F7Wf8dFOK3VycILJuoY%2FwuDkDrUf8VeofVGL72RLOJm1Ea87HSqRWh2sItr5JXxLT0KH0CFToLpUsmusRjABY0rX6jxlcclPsXeN2BddLMWxnpx8JgKamMKkWXKhvdQeEZZI%2B1YCdv5WtVp2514PMHXWWezFUjkr2x18fIDcb0lL5Xx7yXSOvofsz3%2BR5stEJvgLM0c4dZaOc9CXtdYPU63lt28SmgySLhCODVtE6HYR5VlyRwE3FkhLha3APiLOgTC%2FWKE437lFLtEeb28KB6oiGyWAEdMvw5HEdXfjO0yS2%2BrEHFAVD63J%2FuGJb45CGjTnrcMpq6V89qxcWW9ZPZaLZesYnZDYO7swuLDQhl3WaSFB3BrTfvuWUjciW0u56zQtPbGiLq%2Fnb4f2HyiMNzC%2Fdfluaiz0W%2FDd5mFck475cymDG47t0xGvmCzGd5UkP3RZiI4aHEk3VuWN1I3LAfSzBeok%2BJfrNjheEvkt4rm4ys24JUxSliHvIQQmuiOhh%2BYtEZzs00na3gwjy56UZ7UkzPdcw%2FzF1C2CHAgwsuFHMM%2BezsUGOqUB0VlY79e0g6%2B42mErofarGLwTkifyJXsjBLNiBWPcF4zAj%2FNBU3v1a3QFmEVNUrX9bTiVLAoYfNi%2B8VdY4ryz9%2F4QLclYXHxGdqSY6YK5HNp1NRrDiU9wqlQ%2FGlCxj%2FAk4Oa9vi0Wvq8b8dy7OdUP%2BzBPoKj6qaQFxxClo%2BsKbifUWH1QosXEEBxgsRQXuCfAb%2FvsmxcfGqyq4zraRtAAzY%2FmvS%2Bu&X-Amz-Signature=4fc2b8c35380132e6057baadf6ee6acd97dd53bd641a68d00d9ee31b3cc0a71b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU74XERA%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX0B0NKK%2Bi82T%2F3syEluZ7CNfaQUhPL14nnK06JdhdOQIhALbsAknmnwEybKWXcNgYma6l8eURU%2BfU98TzsuLIGrXaKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKP6TrA2vdL18hdckq3AO1G42c5Pgvv9sWroOie1G3%2FHQGJCTSA2u5ovi1YikD06%2F8TSBXFWMaSm2wnYke8kW02Pt3dqpT2gXp5ASVs%2Bj06KtXa4JnigFpgm7Vnh8TneAepYjZUVpOm9ak67L18ZJoXrYGv750FeTQQ2%2FiCTf2XZh09q0xhat0qP%2BcS%2FdwNJHa2hi3%2F9ctsJPU7Z8Zxdhbh4drXGW67GJ9%2BFB6erdPGP9WTsIHmf17T52H%2BDkPaiDpST6FfgdJNw12TRieuSFiTVrUIdUYJFCyKvHxL%2BOY4wbT5Td7BfuNmhOVrfOW2jFFzMj%2FJb4sOgBM3KoW0NFW%2BZZQsr5oJtC5vOg43bjrRS%2F1M7mKe%2FUVA8XVJP11YxPXggeN780P9avvRfrslmYKbXv5TBLj7sZBCn%2B9UEGhp0GpCybY7xNVCEJEawK9JN8ncorL1bQ8CyMu3J09PDF9v3VBeO60mqdf8rO51ZUcWneMEiW3mUc7gy1AjMTUlaQUjGA2O2mp3BRfQ416RExN7toZoOPln3lBehBGkvY0e1SaVRTf2Y7zceVGAKsf0UDJ5HcEhAwNCDSXeOndGVJyFynvDPW4cGqF1cCobdtjI9KsyKC6qG2Ve6pFvqN1OQm8FU%2B3pbmtsBja1jCOns7FBjqkASWdECZZCaz0WITY%2FL6s8H%2FSTJDbqRcsHm8m1SE7ERKAXb5EV0z%2FQXMPQqdfxh4Vqdsi%2B5t0fpmMSM6uXVz2EK1fXWMEPme1SRZKJ9OXNT6%2BItTaRH15s3JLu1VbOvd4c2ciDy1uKgoef%2FiyAXif2rg22R6jqg9cyqRZ%2Fq8V9Q6p6sIFiTK8OsCbkkeqSAL7aXMaqSM8qXPPkZ4w%2F8QEeme6FDaV&X-Amz-Signature=e2aaaeed7f12ab4ffa9c48f86fab5be9139bfb1c65e49929d691bbf6618aabbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLQQVS3L%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLRNfuhyMVAwtqcS1tJf5Nx5CktWubOv9plirbwdN0cAiA8vIZ0shxYlaBLfqpRB%2Fvl%2BHp%2BaOMIWmUHKMlPlfGtRSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCsHlZvGgvOLpERqbKtwDk8oXKQMy10MExuSTtFiBMaimF7xetyAP6FyPJuHjrMNSsZLVkYN3xM1Cd%2FdCz4l72M6YrwxlznCwBk2Jm8E2wv3ItbMUXq%2FrGPaz%2BCeJZXYINP6CTTFRSwwp%2FGbAGIx%2F1M9UC0oJlyg%2FYDstODoK2RiYGRsNQ1%2F%2FbaA%2BUF4RGVuSgkuygkHsNZev7Q4%2BwEaeVmT%2BPTJVONRIDiehcUcyYjl8VY59yITehTFYH42zEWE2cWYWiwVifHfMtJGUL3jvzd6PrrLLV1FG5zAdpALbhc3cOGV2xbSPjk%2Fve9orIFqqCRkBTJkn0eYibATxA2PnGnm4NqrCqFipC8l9jsuO1Z7YE9Q20Zq5mTY4cR%2FZ1p0WSDuAl7EUntzO31rHL4tY%2FZQo1AcFdxA9VZ8gc4KWgF7bo2wDsDkV5yEi%2B1qkAaOO3noSH0vHDJyUB2aTX2Oj%2Bc0HuFSp0BQAUXUWF50y%2FIriBlq5jevRV9MUEXXshfMdi%2Bd1UBGkUmlXpiVKr0L8ui2dntbudt602ZqzJNT06VPr18wFf4UbSwZU7Nf3MSTEB5SSysrPzZvCyaIPctdUs1au3zTZi3w%2FCPxnb2ELou8Ih%2BjdLMFhAsYLTV8O6L4vpLuHRx8C00AlE4Uwpp7OxQY6pgEfYF9dvNjSJCSI%2FbEqnlbOP3GiobON3x2DUr8tYfmJXWI%2Bolz%2BTGvJ1E6%2BMm1tYAJG%2Foe6bxe%2BBDW2kvUANpVROWuS2BdCP6MZi0fvCuLKngIyi9mHfYaHUJtVanzfXq4EeptunRzCKoK1gH%2B0w50nHQ3FCYUsp6anHz38kZawmxgLjJk%2BwTrNGxl3R9NyGsa8tvfgUg2gJw4Xzx1FHxwxdO%2BhktSo&X-Amz-Signature=5ecb9899b8194d293305180780b63a0080036e57c0273b6fe1c0d9689a3c733b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LG7AWYP%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3gA5kmOeTVCcfKskiUZNOVpvUqMRz0faAMeX1I31wbwIgArHNAZCvEGb7tamP75BXZ5ZI0MQeagiIMIe3aYbFjX4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAf7QT%2BpPSkxC3p8yircA%2B1CQXDasb7vvEvLwDY209viCP5deup33riLwGtcnnlIOP67byRnpNSHauYPdBd4wTNMV7SG8wc2qlvbqeGfzVuFmn8gj1IPz4nQjkjA8YQNd3Km8o1Qvorg4rrmd20tnsKLI8CKQpWIuuK%2B1UNhw%2FnOuozdpiatFNRORInXEnBaomP%2FyEZtWQ7zdunzbza%2FYmzx69%2FUn8pQml103ZHAbziG8EeuKwIOw2o1to3FLTm%2Fy1H7jm5986vInMtPlx2szS2bq8ZqKJ7K2yigJH7ggosmYunGIHavTw94VzPFjfUl9PgGWokR308SR%2B6TkG2Z4T2TJRsl1jtU2IJREaX1POEoGrguRSQMd7JS%2BO3IbAyMRpdx6ET0Qt%2FCN0m%2B8mYnb83xPgMCAuTKw3yspN6I%2BA3k%2BSN%2FwKAuD%2BqDyZtAqcHlrIVjlP6QnBEwonvKWFHWlh6qbqc6kVv72VwZJpS1KAk0SFniKrXBPOvblSqmjkedeBl2K5ICz%2BLZZbcuomd4OfTWv7OPRKlZdmotxOtbbO%2FBJ%2FZtytnJaWxgeU2eYHi6U6bkJa6GpqJ1NexO3XHnvuiPOWw%2FazS%2FsVIEVo279mzl6fq%2BoCIdb2PXGxHj3lLLoU3uTBeuI7YFVYChMNuezsUGOqUBlP6PNGihWf4lZUp5dujPRURd707dANglfhYSA03wd2VtDKArG3elIJKEg8B%2FdvwBmpVIMvUfIU4sVlsP9W%2Fqnhsnk0t7d6GPgMPfF5EAJr0DXJ7W%2BHUl%2BpOAqZafMIyWBaYIZmUPoZR56JmzlKL21BU9YULieKCRJ7jXu%2ByK2uOtm6dS%2F5BykyiEWgHcnM2X5jcJ0FNWGrROE3pheqZuDGLy8imm&X-Amz-Signature=cf5e36f3d39b63bb4b63172fa5139b218ac14c09326f090508f63efc0b7cf469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KNNIHBU%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZO1jE6nQo%2FGcAhdwv4TCGMvMXL7pSqFnwEifUjyld7AiEAwCKJqjuMAAWil94I99rKd4jqoVTDKGoWBmay%2FzP3g%2F0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2sIVOQ%2BrlY5K4MKSrcA4IcmxlE9rcysR%2FP7fSYwh2m%2BsJPxOBS2wFw6vZNv1ue7jzBhW56kHKbY5FD4jdavGG2L4sjv5TI7c4n%2F7Wf8dFOK3VycILJuoY%2FwuDkDrUf8VeofVGL72RLOJm1Ea87HSqRWh2sItr5JXxLT0KH0CFToLpUsmusRjABY0rX6jxlcclPsXeN2BddLMWxnpx8JgKamMKkWXKhvdQeEZZI%2B1YCdv5WtVp2514PMHXWWezFUjkr2x18fIDcb0lL5Xx7yXSOvofsz3%2BR5stEJvgLM0c4dZaOc9CXtdYPU63lt28SmgySLhCODVtE6HYR5VlyRwE3FkhLha3APiLOgTC%2FWKE437lFLtEeb28KB6oiGyWAEdMvw5HEdXfjO0yS2%2BrEHFAVD63J%2FuGJb45CGjTnrcMpq6V89qxcWW9ZPZaLZesYnZDYO7swuLDQhl3WaSFB3BrTfvuWUjciW0u56zQtPbGiLq%2Fnb4f2HyiMNzC%2Fdfluaiz0W%2FDd5mFck475cymDG47t0xGvmCzGd5UkP3RZiI4aHEk3VuWN1I3LAfSzBeok%2BJfrNjheEvkt4rm4ys24JUxSliHvIQQmuiOhh%2BYtEZzs00na3gwjy56UZ7UkzPdcw%2FzF1C2CHAgwsuFHMM%2BezsUGOqUB0VlY79e0g6%2B42mErofarGLwTkifyJXsjBLNiBWPcF4zAj%2FNBU3v1a3QFmEVNUrX9bTiVLAoYfNi%2B8VdY4ryz9%2F4QLclYXHxGdqSY6YK5HNp1NRrDiU9wqlQ%2FGlCxj%2FAk4Oa9vi0Wvq8b8dy7OdUP%2BzBPoKj6qaQFxxClo%2BsKbifUWH1QosXEEBxgsRQXuCfAb%2FvsmxcfGqyq4zraRtAAzY%2FmvS%2Bu&X-Amz-Signature=567a53aad1aef1fde710fba5824a85217c5329f146623073107e17fe2a773678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCUK73ES%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCApATqs0mZ%2FXNlEl8cFi%2FRZv%2Bm2MyyNnq0nEQQfwjbJwIhANzNJPFLuBrWavyBcBO8U7lWWei7lBocZ7UbSteY58JaKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrWqOe3GTYUcJc70cq3AMr7ByfO2PA8TPEx2ehWV6fwoy%2FpnvF8um94tC8OEToIHwq5BhpMggiSlI9k%2BVshRFeYsvQN%2F6rzpUnROrNyH9bKUfx9384%2FB%2FXtwtq8o7%2BOs5eU9wDE942sw0KROoiJGTViqRFoPY1pP7uRjX84UVIJInG%2FCqBrTYUv4wlSoe92Ys5bpYSyl%2F%2FsyAoR6Ip0m4rtjvulcXpc%2F5vL0%2BicStgKYXcE6vzCPNXWFhhKodCz1AR%2FYSpHNHeHEY0E2c8GfbjPB9mZplo9VceTYTKByx6kAIV9AL5CaGmlpOkhG258Pw6AhYbW0d1kGwa2buFwGdNCtmjvRG7JqI%2BNyC6uR3fPyBMfQnPTe0pflAkTYkPmBIGTv6r15at9GoNunMJBoz3BcqotH55zVt%2FrMyL%2FpdFpk5899Bo%2BE0bWmVhy4rWRVcDN1Ye6OHR4WaFwvn32YZJ3uF0PG%2Foqnrxl1tz5fncIXPfgjFyqZAm%2FouwsFGdTMW61PK9mzT%2FjObt%2Bv%2FS5vUNUZXfgNd3s3TP9zwbDQwVKc4Y9KLnbOt5k6S30kGGToF4JdE%2BnD563YzRPWKMngpaW6ly995obHKiaRHiv%2FI5njAfTkGukLZufAIhhUDpkgYfmseym7NmuR22pTCQn87FBjqkAYKUM4bEmZJF9MDHAXM%2FvxlCd8MglVa1lNLRMxSPvjfZQOwOhP1MlvszEzCkckAVhtnbLl4LtrbIuA%2B4a8NkXsRXcvnfTsag7vEGcOWsz4prOh6xTJOpWuEada9vkVm4gPw9OK5hD18kQ6qXsvK1dqYwhxPo5Br6Uqy0xCiBigXe1gLO%2BQDLgpp4iN8YepLm9gY6kLS00h2ZSvThVyImosU8hZz8&X-Amz-Signature=eaf01ca68fb93d26b3ed4d4bf74ca55fa4aab854942e9a021c3772d5203b6c70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KNNIHBU%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZO1jE6nQo%2FGcAhdwv4TCGMvMXL7pSqFnwEifUjyld7AiEAwCKJqjuMAAWil94I99rKd4jqoVTDKGoWBmay%2FzP3g%2F0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2sIVOQ%2BrlY5K4MKSrcA4IcmxlE9rcysR%2FP7fSYwh2m%2BsJPxOBS2wFw6vZNv1ue7jzBhW56kHKbY5FD4jdavGG2L4sjv5TI7c4n%2F7Wf8dFOK3VycILJuoY%2FwuDkDrUf8VeofVGL72RLOJm1Ea87HSqRWh2sItr5JXxLT0KH0CFToLpUsmusRjABY0rX6jxlcclPsXeN2BddLMWxnpx8JgKamMKkWXKhvdQeEZZI%2B1YCdv5WtVp2514PMHXWWezFUjkr2x18fIDcb0lL5Xx7yXSOvofsz3%2BR5stEJvgLM0c4dZaOc9CXtdYPU63lt28SmgySLhCODVtE6HYR5VlyRwE3FkhLha3APiLOgTC%2FWKE437lFLtEeb28KB6oiGyWAEdMvw5HEdXfjO0yS2%2BrEHFAVD63J%2FuGJb45CGjTnrcMpq6V89qxcWW9ZPZaLZesYnZDYO7swuLDQhl3WaSFB3BrTfvuWUjciW0u56zQtPbGiLq%2Fnb4f2HyiMNzC%2Fdfluaiz0W%2FDd5mFck475cymDG47t0xGvmCzGd5UkP3RZiI4aHEk3VuWN1I3LAfSzBeok%2BJfrNjheEvkt4rm4ys24JUxSliHvIQQmuiOhh%2BYtEZzs00na3gwjy56UZ7UkzPdcw%2FzF1C2CHAgwsuFHMM%2BezsUGOqUB0VlY79e0g6%2B42mErofarGLwTkifyJXsjBLNiBWPcF4zAj%2FNBU3v1a3QFmEVNUrX9bTiVLAoYfNi%2B8VdY4ryz9%2F4QLclYXHxGdqSY6YK5HNp1NRrDiU9wqlQ%2FGlCxj%2FAk4Oa9vi0Wvq8b8dy7OdUP%2BzBPoKj6qaQFxxClo%2BsKbifUWH1QosXEEBxgsRQXuCfAb%2FvsmxcfGqyq4zraRtAAzY%2FmvS%2Bu&X-Amz-Signature=bcb06a6f88b2f9cb897b0b103b2706227e7b94c5ebeb872d442bbe1be43cf31e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPI76UNE%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGM0WkNEUJAlbfiLj8sjqckrn8hrqn%2F8vesJMTssl%2FnQIgLPBpjrVPkRy3uyGUlJdhxe%2FbdGmpBYLqlNIPGeagYK8qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6vbhVf1%2BlYlCIsxSrcA57VIzPEKs34zE0aAwqJ0sNGXNJoBdfoWH9bgS1k2y7mYcYlpX%2F%2BgQb8HdG%2Fwt1Lf8mqtxhu41C1tZXmDyQvinEZncxvFIGbnyqpcl87%2FFSuRcEi%2B61Kjq3fAXDdQdfdW8Gohf2uq8MDVmhzu3pQ2CuQeS54Ht5x0pWcX62prembf4Tkyegmz3zGUUQJHFRCWoaKNwYVm12Fja%2Fa84NDShgs8%2BGJ56ddDNjfL14MXDxyDFp43lZv7eSKSCtf7OGyaImq5mNHO3zGY01WDpWEqUeACG9Op7deRhj3QK4s0qZp1MXLAwOkSJSGt0qgBBS5l7IEeS%2B%2BWMj%2F9jhyjCaL3VP%2F%2BfiYAW8duY7LF28Z%2FnQXNjgUKfHZ5%2B632lFJjUFMPohvnK%2FJGtJTSo3Dh9ebedzEwLouiOoRBybF%2BRUsQKm6WF%2BzXSk2rVZ9UmE1oDBupDPzii4FPV86Q8a7qLDwKINoMHrbaeJ5TeNbHqUaI4cCjXnBwgCEvDBIDT01eNVY8oiBOacm%2FnCNKuop32%2B8VHvznpvn2dm9TdupEnb0Z2xUXc2L7HWQRD4RiRCZw9D4KIt4fiIpOPD%2BJfJ1b0fNKltVS93NU8bh18sb6llBe1Ssu3a3RGXGK0j%2BBCnuMJ2fzsUGOqUBlYi%2F9BNmOjp0qfCJwfWlNExouR0RACMDacXzxOXf5UGLYfijzo619gBINFj0q0fa6pF99%2B20Swm6TwfaBCyUaVrk5Hrk%2B3Xp3qJX2z5CJe%2BWqb0lQzGc%2Bm8sJ%2Binh3ySRib0qOjZpBDPEm5HB%2F7C9OLoAOcyF8PoWhH9bGrKk6jP15MN3JOD%2BHR30AvmAbj%2BJ3j3pI1jSaLIycYw%2Fj7DmkTCnzVc&X-Amz-Signature=013b2c8ea950a474f81f1391e62e9ea860ce1ac08ae841923c1aeb36b6ee246e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KNNIHBU%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZO1jE6nQo%2FGcAhdwv4TCGMvMXL7pSqFnwEifUjyld7AiEAwCKJqjuMAAWil94I99rKd4jqoVTDKGoWBmay%2FzP3g%2F0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2sIVOQ%2BrlY5K4MKSrcA4IcmxlE9rcysR%2FP7fSYwh2m%2BsJPxOBS2wFw6vZNv1ue7jzBhW56kHKbY5FD4jdavGG2L4sjv5TI7c4n%2F7Wf8dFOK3VycILJuoY%2FwuDkDrUf8VeofVGL72RLOJm1Ea87HSqRWh2sItr5JXxLT0KH0CFToLpUsmusRjABY0rX6jxlcclPsXeN2BddLMWxnpx8JgKamMKkWXKhvdQeEZZI%2B1YCdv5WtVp2514PMHXWWezFUjkr2x18fIDcb0lL5Xx7yXSOvofsz3%2BR5stEJvgLM0c4dZaOc9CXtdYPU63lt28SmgySLhCODVtE6HYR5VlyRwE3FkhLha3APiLOgTC%2FWKE437lFLtEeb28KB6oiGyWAEdMvw5HEdXfjO0yS2%2BrEHFAVD63J%2FuGJb45CGjTnrcMpq6V89qxcWW9ZPZaLZesYnZDYO7swuLDQhl3WaSFB3BrTfvuWUjciW0u56zQtPbGiLq%2Fnb4f2HyiMNzC%2Fdfluaiz0W%2FDd5mFck475cymDG47t0xGvmCzGd5UkP3RZiI4aHEk3VuWN1I3LAfSzBeok%2BJfrNjheEvkt4rm4ys24JUxSliHvIQQmuiOhh%2BYtEZzs00na3gwjy56UZ7UkzPdcw%2FzF1C2CHAgwsuFHMM%2BezsUGOqUB0VlY79e0g6%2B42mErofarGLwTkifyJXsjBLNiBWPcF4zAj%2FNBU3v1a3QFmEVNUrX9bTiVLAoYfNi%2B8VdY4ryz9%2F4QLclYXHxGdqSY6YK5HNp1NRrDiU9wqlQ%2FGlCxj%2FAk4Oa9vi0Wvq8b8dy7OdUP%2BzBPoKj6qaQFxxClo%2BsKbifUWH1QosXEEBxgsRQXuCfAb%2FvsmxcfGqyq4zraRtAAzY%2FmvS%2Bu&X-Amz-Signature=503a5d26c52cb765d510ceb7ff0b762bbcf37e430bb26807e73ccf0ce247956b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ2NBAFD%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3ImYGK7uhQ5S1FLqoG0%2BJgilPZO8VG599FCZYE9Na0QIgCfDkq3Pa2ho9K4fC3WFCssxYu39DtMyk%2B7ciN%2B5CneYqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLOJ1MNhNvyYeZnPSrcA1%2Fn%2BYP0OBMAcPtQ1g9ODXuh%2BEwI3bFHUZ9Lmlu5u%2F1mnYD9bllupRFDukbAGhOoulVT%2B4TYsfqnTyMsHTvpRGNlwPwXttXbl0Hd3AKx1FE6GVSp0OL8AXMIwz3ENZ3%2B1zKrWvP7ql4e6SFEa5x1bz13ZcqcOQApZEBdynue0ZA%2BKJxCyjVli9glbsLICzgGFnwBa9qSf8bexVkxxJoCqtVFxSj2T1b%2FXnGJeifLk7TX19PuxMwP2Rors1zBCmL8K1fOfztPyftofihre9orL9WSQ9Yl%2B3FQmVBSvkQxusRcx6yCxNPh52et%2FfVvZ620yUqn8pP%2FHnlmR8o4HG4l5moolGV6vEqIkzeK10avj9ZfQDBMhypNNPNuDzqJSNLmgqfEoQh1MYK8qQhzMyhVVc30nGLuykSQ7WjUJ%2FdRdOJui4QRXSxCLO5M5oE1s1jx5thhr0Kq1%2Fk5OWge68YLk4Aj5BCbSMu564iVAj%2BRY2KT5cXyYu6nsoZA%2FKT0KIWT8vNeJ5G7R4b9M2cPUe4t6yZ1%2FB8dBrXeIK34UNuU0xsqk2PFSi3sO6onC1PTDIdJajibiRBvv10psuo8nWEmI1ECV%2ByjhmTIypwDH3dHILzB4SaM4yfkr86BkRdXMKSezsUGOqUBRrNaAZW8zQg%2BoNgZIn%2BWgtfcm2XbL%2FWQjanG1BB0vfBWGD6cqp6L%2BQdicfirjU%2F%2Fk%2FspbdmdihjzSCXAIaC9jbBaA1SftwnbfpEn6srO0dOshM2T7lZm%2FEDG3Rxe11IUigq1v55rfHP0DtvtK0dFaarXSD97bLIDFmzwqBz062huN%2Fx%2BTS7%2B7MLKOMVhA44QzDR8F7piHupA%2BtRBxdDtsDlg2XY9&X-Amz-Signature=c8a29bc481eae614308d68f20234f5be3a10711af5de7e1cdb7f69fa0200f29f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KNNIHBU%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZO1jE6nQo%2FGcAhdwv4TCGMvMXL7pSqFnwEifUjyld7AiEAwCKJqjuMAAWil94I99rKd4jqoVTDKGoWBmay%2FzP3g%2F0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2sIVOQ%2BrlY5K4MKSrcA4IcmxlE9rcysR%2FP7fSYwh2m%2BsJPxOBS2wFw6vZNv1ue7jzBhW56kHKbY5FD4jdavGG2L4sjv5TI7c4n%2F7Wf8dFOK3VycILJuoY%2FwuDkDrUf8VeofVGL72RLOJm1Ea87HSqRWh2sItr5JXxLT0KH0CFToLpUsmusRjABY0rX6jxlcclPsXeN2BddLMWxnpx8JgKamMKkWXKhvdQeEZZI%2B1YCdv5WtVp2514PMHXWWezFUjkr2x18fIDcb0lL5Xx7yXSOvofsz3%2BR5stEJvgLM0c4dZaOc9CXtdYPU63lt28SmgySLhCODVtE6HYR5VlyRwE3FkhLha3APiLOgTC%2FWKE437lFLtEeb28KB6oiGyWAEdMvw5HEdXfjO0yS2%2BrEHFAVD63J%2FuGJb45CGjTnrcMpq6V89qxcWW9ZPZaLZesYnZDYO7swuLDQhl3WaSFB3BrTfvuWUjciW0u56zQtPbGiLq%2Fnb4f2HyiMNzC%2Fdfluaiz0W%2FDd5mFck475cymDG47t0xGvmCzGd5UkP3RZiI4aHEk3VuWN1I3LAfSzBeok%2BJfrNjheEvkt4rm4ys24JUxSliHvIQQmuiOhh%2BYtEZzs00na3gwjy56UZ7UkzPdcw%2FzF1C2CHAgwsuFHMM%2BezsUGOqUB0VlY79e0g6%2B42mErofarGLwTkifyJXsjBLNiBWPcF4zAj%2FNBU3v1a3QFmEVNUrX9bTiVLAoYfNi%2B8VdY4ryz9%2F4QLclYXHxGdqSY6YK5HNp1NRrDiU9wqlQ%2FGlCxj%2FAk4Oa9vi0Wvq8b8dy7OdUP%2BzBPoKj6qaQFxxClo%2BsKbifUWH1QosXEEBxgsRQXuCfAb%2FvsmxcfGqyq4zraRtAAzY%2FmvS%2Bu&X-Amz-Signature=9d3bc285214fbfe9e60a9e5632926c81a1bca1ab79e6b7d7adb97e6f638e513e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGX6IQ7R%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHy67D%2BgU35cZHJrCMLIZaFW3wPMu5ZhcllZU3tCiOSUAiBPBqmF6KWxfPUTeXnYo4qgdXUeixwaiU9tVgMmE8wRUCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH9iy4uMc5zjWo5ZHKtwDH8jvHu12oFRtSjiB%2B%2FaAKOaQrT7skKO1Dk1u7PF%2BYjDaXN1cZs9PwYTb8yWx4mgK5YUWgH3ZBnkKIwmHp87Y9kaFBB55dGbaM0noLe3H8QHVKsBvPHdoUU031VIqJBov4Iz4iNElh%2FDQa37HY%2FUYq4i1JPHsrXKrVRoKkJcW9Sbc3jRH9CEL1CFumdMy%2FZlJsC5zfzb6ySoNdKehVRfLOf3Sn%2FDFJ3zCbNFos0qXajrrOJKg6buPQpzxQRztX%2FsvkG4As34652acLmZ73RNeQo8I9dZsWjbiTsx0QZpBRHvpcfchLPgKsZ1r%2BGa408BvYSEnQp5fYN78P9FcSHZRiX64aobUvFW6LZwOYWBJK%2FAU%2BHJduLgD3a9fviNtE4tMhp3dk4zqJWlxcvY9K3Cu0WeGvfbxH87aNss07Pk3q%2BG7ThaNWt5MrHBdr8N3RzzHo%2F83FY7JEfuRVMFsKwpgQJ5XawdIOKF%2B0%2FCr3Lu%2FHdAl4vPpyxXvx4cr4qf8NRVjvt8gkQd3%2Bp5c3x8PTDceTEmjZEuyqMrohe7vEcbhVO%2B7q9Pml77BDI0112J4duZtEEunVJX4tsa5%2Bfd366ejxzJlhSYuAefUzpIvFLBvxwCoW%2FTcTut5r9k3zrMwz57OxQY6pgEqRoHqO3sJpzdFBKOUFdoxL7sQb8X9zOafGWk8kKvPSXMsAYizk4%2FUUTSWkWurhzvlo3y0fBJZxDIFPk1S287l0pDeO9NS1dECeUL88%2BAQ%2B7L%2Fb9M6k4WiXtq7taV6wZRlJgoYEBBEvVot0laE76o4rvKdDyGlvghfRm2l1xN%2FCTlIVYUI%2Fe8nmQMNarjFoukpNyT6YAPzL5U%2Bp%2Fop49KFAOvS7Cab&X-Amz-Signature=9368449145fe51367381315bb6cf4802b1d564d3882e05ccdd7756e48dd317ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KNNIHBU%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZO1jE6nQo%2FGcAhdwv4TCGMvMXL7pSqFnwEifUjyld7AiEAwCKJqjuMAAWil94I99rKd4jqoVTDKGoWBmay%2FzP3g%2F0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2sIVOQ%2BrlY5K4MKSrcA4IcmxlE9rcysR%2FP7fSYwh2m%2BsJPxOBS2wFw6vZNv1ue7jzBhW56kHKbY5FD4jdavGG2L4sjv5TI7c4n%2F7Wf8dFOK3VycILJuoY%2FwuDkDrUf8VeofVGL72RLOJm1Ea87HSqRWh2sItr5JXxLT0KH0CFToLpUsmusRjABY0rX6jxlcclPsXeN2BddLMWxnpx8JgKamMKkWXKhvdQeEZZI%2B1YCdv5WtVp2514PMHXWWezFUjkr2x18fIDcb0lL5Xx7yXSOvofsz3%2BR5stEJvgLM0c4dZaOc9CXtdYPU63lt28SmgySLhCODVtE6HYR5VlyRwE3FkhLha3APiLOgTC%2FWKE437lFLtEeb28KB6oiGyWAEdMvw5HEdXfjO0yS2%2BrEHFAVD63J%2FuGJb45CGjTnrcMpq6V89qxcWW9ZPZaLZesYnZDYO7swuLDQhl3WaSFB3BrTfvuWUjciW0u56zQtPbGiLq%2Fnb4f2HyiMNzC%2Fdfluaiz0W%2FDd5mFck475cymDG47t0xGvmCzGd5UkP3RZiI4aHEk3VuWN1I3LAfSzBeok%2BJfrNjheEvkt4rm4ys24JUxSliHvIQQmuiOhh%2BYtEZzs00na3gwjy56UZ7UkzPdcw%2FzF1C2CHAgwsuFHMM%2BezsUGOqUB0VlY79e0g6%2B42mErofarGLwTkifyJXsjBLNiBWPcF4zAj%2FNBU3v1a3QFmEVNUrX9bTiVLAoYfNi%2B8VdY4ryz9%2F4QLclYXHxGdqSY6YK5HNp1NRrDiU9wqlQ%2FGlCxj%2FAk4Oa9vi0Wvq8b8dy7OdUP%2BzBPoKj6qaQFxxClo%2BsKbifUWH1QosXEEBxgsRQXuCfAb%2FvsmxcfGqyq4zraRtAAzY%2FmvS%2Bu&X-Amz-Signature=ba2d634f25c49de05f94cf9f2e439177fff08c385ae98aa445f6ea0121ac5daf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AMAU2GT%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJr5Ex1Q7nVET64dtKJsG9%2BmT3fig4T7ct5bhX56C5tAiAa0l8Ytdw%2BidWblsA33f8AF0iivA2BGNHB95X1jHs63iqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOqvK%2BIs0%2BrTJQQ1aKtwD4q%2FJAMvTaQJe35aXsUdf2D4hFk3hDAob3uD38%2FMyqDuebXCVDNNqHW6HBQGlnsf8p6WfPGzuIWEg9dRFWJoqtO9QXjo0ZYpGs0MS2OBeZ3xAO9j6N4%2BSHCz9UoZs0Ey%2FZBjkal18giQue228OlTOLfBIS2mxQyjBkxdGf7W%2BGxSp3Zu6juNNSP1OAlpRWVB9jKM9o4IFa9nfAbjuj44kUFdZ5y8FfbnH6nqETnDXDmBK2TkFhfjLHASp88elHrJHtK2D73j7dxJK%2FILib%2Fj4xF1wZizGZ1b%2BhTIoS5E2j%2FQxjBmchT1Po53DeBeHALBaJSKh0GR5mksih2miq5lEmYX%2BXIVCaQdeBkP36JIwAIWeWxR1NF6elspmMLTwpXiY0wMkiZcrZubMf6biH6XjUFzS3USvyvZYuPXN2oDFtJOccbT%2Faz0anKxiwb8EOZnEJTm6X0QC%2BzCYQW963smbsyYg15rDleprkcw76rBSscGhQtZREj%2F6LGFbLojZr2CvF2tqSN9P1xsy8rETJ3%2BOldR2nx7flACNhTrNESQ3x7dg1gczT9OPUkeXwYjpmJE9S45Oi9Aj%2FZNFdxluK3A%2FhIpREi6C0xJnX8N22kvpAOm1deX1KlvcuLLStJ0wxJ7OxQY6pgFNglDY5etgWGyZSdIBPsYw%2FAvzK1B%2Bs4ljiHU9JAWwOkzG3sUPI5pK%2BQEAuuUNR1iph0AZsjz6wlANirnSDHLs90dZh903JqVflR%2BZRU2ZoQmPWfE0tlSw%2FVJM1CYB8bB0cm88V1y89gJKr1LVTB9fWIH84VQjr1%2BbiPWAFfwyWrVL5%2F5w6DKv2WkHOepb00Uyq%2Bdu%2Fhh2yHcSCPeScMPiuc4Lp2R%2F&X-Amz-Signature=ea9cb4b19de14dcd67c0503c3ba8523f7b3c550d7c54c58be125b86ffe00d267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466556ZIBJJ%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBkggBSKNxV2A4IHTTeQ2LH3SAM91gYLgXBHEW428IRsAiEAqZORbWE9kFEv1UQsFuQosx9dJ3ZOFyFAHZZ40viXBHAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmUalFCFmcCSB2K2CrcA2Mdxb%2Fg%2FyEUIeuMn9MMMN%2FSKhpaOpilK1k8Xk9ZsfjP5kCTSdLMBUhfSqRmPcAfScM8I4IA1jYAiNdeUDv8NyBa34Kxoj8SB9DUpgt6o8ZEGOwmbXLfNr3E1LpC%2FOGKuA4CdUIoTGLKYl2OgmxSK6m3YykCRW1BMXWEMDzV5a0h0JbzHRnaMlKDRiHvrKBceu4t5L0Y2mWr6pQOw9t6fZbtUvxFGKeYUAdtu%2FDHXYk7GBO1Y0cqfgBa69tigXjyyJJdbPzWWQ9yQIaV19U9dBEjrqQMgoi7GE59uOUpgFR38W8sQZ7vjMkyaC%2B7GeV48Q682Bd%2B2q56pwQky%2Bq1F9cRefGNywepc3fFCFWt1SAWRCy7fSMIxNlaYvLT8zZM9NmphVx3PGqnsGmXYlLxRA1lZmpjndegtlacnzZIJVaBzzZnUrAAABlkzMMB7LpzoBXSe0RItPiYGnoArWZQa1SBIX7E8EcFIFVTAQue7dYaMCctRVBshuk6gFuDTyXEv4e14oeXg8O7wVIrMCRps3CvlFJ1jVn4TuqRPVl%2FGNWPEq5XEBd4hgjNAE2lazV1WMudW2Z41Qd%2BgOMfJ%2Bf9sPXsEpcUC%2FShAPBPsMvCc%2Bvy%2FQLddNZ%2BPmkAEVjiMOufzsUGOqUB7%2FEUix%2FLnil%2Bg4gTHePcgi%2BRG5gWmh8EkGL3d%2BbBGDab6ub8um3C2aRASqBzYzxUBhJCaRCO5nRo8ss6nnf7%2FeJMI6WJxhn%2BBM4BwSLQh40FRIfPSF7UoTx%2FWh3yLKTZAGS6ZFZ8iDbyjCkXcONTcWrLTD4XxPR8PdQGYvNVh%2F1r%2FkwuQS%2BL4MJHDQTbod1%2FStEZxIxKFlWznuo4F%2Fmt%2FPPtc9ZG&X-Amz-Signature=ae94d3a46976d7b5423466c1af7f80baf24b846d37f7f339b1ae1deef8f3c60f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVMWQSBH%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLXHjjq0LGdg6b8HOAe%2B%2FqzqnP8hrBFimyWs6ZImy2cAIgDYeQ1kojgqgJZfJcTAtVwidYAoZEbB7wvN3VqGmxF9IqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBK0woDKqjG8NFSE2SrcA1H%2BteodMeVxvY6WFJ1aWCKuLpBaoKuMVrhonCjX1eihO4NFtzhIr%2BtY1faXvOSMzTy6leP7r2lOnhHQ9%2BaGiOIZ3vGLBNQZ3cFFw78jgFU4zGkfBpQEPZTE8MIO6jFmYN3mjLJoE4623kZJ%2F3vyj2WYC%2BzseTVdNaZY%2FBO%2B%2BQQMSWK6nt9XR9piTkVGX50SjgoIslwtIfbApCvDEeE9tWFW3387Lpqzdp4BfgtRCogZAd5pbSNbGilXnmd%2BcOuug894AP9r1rO%2B4ErLGThxIJWBN6AxCg0vBHe8EPMXOgs6JmQHgbxw8qocWBc14ZwudfBPYnCQl46ZXAgW76nNJ67pWNGIz%2B%2BJpvWdpiglas0%2Bez%2F6tpXFm7SmWCyVo0Nc8A%2FB%2FqqcDe9WKl0YcdpvgHcnBJ6B02CdM7kSoROdWV2XeZRlhVG0YchOeaJNAonlnyoZ1ipBBLMON7LbXGqYeUOTX6%2FSn%2FCScHSdWqajisA5Jw7SKbUskCOb481ITk1apOoTjWh1SlcNr7K0WEIAp4Wf%2FhbBAAWaw1a4l2hAb1VdBVBG4h4MlHGlilNb6pbuGkczQkViotUYwchbahRevuaOQIYtqAA4gXqLYQwRYknv4AhkpHgr7%2FVGjMiwMOufzsUGOqUB4lUhYAaOxrA7tzsBUSPYQ5RXkaAs3lQiJMVZCYxW7lYuSLfW6kdPm6rzB2t4bs7RTLSci6%2FVGXrTtZbzGMbBF97%2BgvSFj4jKi51WAFTpoDOuYSpIC54sdTMwI%2FTK%2B25nXoS01FwFu9JCEEmrSXpDwPpK6VHJr7Du%2BOa1inNHfogAFHMULXfsT2FwfaNhlGpPNobYrA79L5uqSSe8B2AKXmRmt4nZ&X-Amz-Signature=7b71ec515e298547a0cf399b25da5ddfe3b8331e3f540af483f645728f3b8da7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KNNIHBU%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZO1jE6nQo%2FGcAhdwv4TCGMvMXL7pSqFnwEifUjyld7AiEAwCKJqjuMAAWil94I99rKd4jqoVTDKGoWBmay%2FzP3g%2F0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2sIVOQ%2BrlY5K4MKSrcA4IcmxlE9rcysR%2FP7fSYwh2m%2BsJPxOBS2wFw6vZNv1ue7jzBhW56kHKbY5FD4jdavGG2L4sjv5TI7c4n%2F7Wf8dFOK3VycILJuoY%2FwuDkDrUf8VeofVGL72RLOJm1Ea87HSqRWh2sItr5JXxLT0KH0CFToLpUsmusRjABY0rX6jxlcclPsXeN2BddLMWxnpx8JgKamMKkWXKhvdQeEZZI%2B1YCdv5WtVp2514PMHXWWezFUjkr2x18fIDcb0lL5Xx7yXSOvofsz3%2BR5stEJvgLM0c4dZaOc9CXtdYPU63lt28SmgySLhCODVtE6HYR5VlyRwE3FkhLha3APiLOgTC%2FWKE437lFLtEeb28KB6oiGyWAEdMvw5HEdXfjO0yS2%2BrEHFAVD63J%2FuGJb45CGjTnrcMpq6V89qxcWW9ZPZaLZesYnZDYO7swuLDQhl3WaSFB3BrTfvuWUjciW0u56zQtPbGiLq%2Fnb4f2HyiMNzC%2Fdfluaiz0W%2FDd5mFck475cymDG47t0xGvmCzGd5UkP3RZiI4aHEk3VuWN1I3LAfSzBeok%2BJfrNjheEvkt4rm4ys24JUxSliHvIQQmuiOhh%2BYtEZzs00na3gwjy56UZ7UkzPdcw%2FzF1C2CHAgwsuFHMM%2BezsUGOqUB0VlY79e0g6%2B42mErofarGLwTkifyJXsjBLNiBWPcF4zAj%2FNBU3v1a3QFmEVNUrX9bTiVLAoYfNi%2B8VdY4ryz9%2F4QLclYXHxGdqSY6YK5HNp1NRrDiU9wqlQ%2FGlCxj%2FAk4Oa9vi0Wvq8b8dy7OdUP%2BzBPoKj6qaQFxxClo%2BsKbifUWH1QosXEEBxgsRQXuCfAb%2FvsmxcfGqyq4zraRtAAzY%2FmvS%2Bu&X-Amz-Signature=f6656115ec7d3dcb7bc110587ef457ffd12d795b185b996a26623e2d631e3d02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KNNIHBU%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZO1jE6nQo%2FGcAhdwv4TCGMvMXL7pSqFnwEifUjyld7AiEAwCKJqjuMAAWil94I99rKd4jqoVTDKGoWBmay%2FzP3g%2F0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2sIVOQ%2BrlY5K4MKSrcA4IcmxlE9rcysR%2FP7fSYwh2m%2BsJPxOBS2wFw6vZNv1ue7jzBhW56kHKbY5FD4jdavGG2L4sjv5TI7c4n%2F7Wf8dFOK3VycILJuoY%2FwuDkDrUf8VeofVGL72RLOJm1Ea87HSqRWh2sItr5JXxLT0KH0CFToLpUsmusRjABY0rX6jxlcclPsXeN2BddLMWxnpx8JgKamMKkWXKhvdQeEZZI%2B1YCdv5WtVp2514PMHXWWezFUjkr2x18fIDcb0lL5Xx7yXSOvofsz3%2BR5stEJvgLM0c4dZaOc9CXtdYPU63lt28SmgySLhCODVtE6HYR5VlyRwE3FkhLha3APiLOgTC%2FWKE437lFLtEeb28KB6oiGyWAEdMvw5HEdXfjO0yS2%2BrEHFAVD63J%2FuGJb45CGjTnrcMpq6V89qxcWW9ZPZaLZesYnZDYO7swuLDQhl3WaSFB3BrTfvuWUjciW0u56zQtPbGiLq%2Fnb4f2HyiMNzC%2Fdfluaiz0W%2FDd5mFck475cymDG47t0xGvmCzGd5UkP3RZiI4aHEk3VuWN1I3LAfSzBeok%2BJfrNjheEvkt4rm4ys24JUxSliHvIQQmuiOhh%2BYtEZzs00na3gwjy56UZ7UkzPdcw%2FzF1C2CHAgwsuFHMM%2BezsUGOqUB0VlY79e0g6%2B42mErofarGLwTkifyJXsjBLNiBWPcF4zAj%2FNBU3v1a3QFmEVNUrX9bTiVLAoYfNi%2B8VdY4ryz9%2F4QLclYXHxGdqSY6YK5HNp1NRrDiU9wqlQ%2FGlCxj%2FAk4Oa9vi0Wvq8b8dy7OdUP%2BzBPoKj6qaQFxxClo%2BsKbifUWH1QosXEEBxgsRQXuCfAb%2FvsmxcfGqyq4zraRtAAzY%2FmvS%2Bu&X-Amz-Signature=1dbc00ea2721df86da7e7cc07fec495b5ba973d4a39056fc2412badcf421d186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TW5UGMC%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwBfiEFIhfvOHOQ19PWm3AjUjt3VMW6M5HjED0tYE33wIgMEtRmFN354fwS4XWHUflVqOZEosUmRcIyIZ4feKTOa4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhZKl%2BcCvScfh1DJSrcA%2BWbHgMQNhznxEzzlVrH8fvD3MboejuFH7Z8BcqfYlpX6UM2NFqU4dWO9xazTPYG%2FH7E7jpAtLuDGBy1g7IZrmA2iocDvc660T9YG5LjDQ5qbyo5H0NzhZKtqPYwBIJiLosgmpOWb5SlKlDeStYCV2igrjZKcUwsRJElSIcVk8Ed08z5BPmvNMEtnJaXsn6Qsa8nG4NMPQBD1p6rTo7mincjbaj3izuwFSwNd4gkaG3p%2FONOGrON73nxd3VckS7LIywQtvTZFbVY0PXr%2FuWNspa7H3JLolyvgdRQYPQKTpCSGuDrM5wafuHS4wr7hwh2qxX2y0Z8HB0QyqH0QmEReg48i8UZpE4R4BViFA2dgexuJvi%2BDYPKyRdEothomRcrGPEIgz9P3gprasmko9N%2BtAU2knKGUS0oNLiZx4HqZ54nSWySPujdLUacQ%2BMW7Px%2BiqRVN8dLV5ACsxXpnB84bOxwRwUqWQJlXFDPMW%2FsIt4vmYdjr95JFAFI921uDu0ZUZPlNYu3%2F01vq14BjBPV%2FgiZHN6GsE03KKsITPsFNwE22AjnKfYjselneQSXBidwmaPNnMqL7aTVO%2FyAMS%2BVP1ZCpgTCLxEIrQQ6gWYmP2pmvlqYzHhkpsnWIBYWMNuezsUGOqUBU8OATq0YkahQcIA3qFTkNdNm9aelFsO6e83cVjqWYuc2WE8c7ExVneB3f25uZMPuqLTgIAIS8TaHLbzmkTWvsagFun%2FN4gPfr3iYNubtlZgG%2BUt%2Bc5nhcNsXJcisgcxcK2dvHWtCwONPpOcrLgn6FlHjOOR3PQdfuH7tMhiCiABG3v2m2Ma6Lh68IMfutnem2RbsEJyE1dpiYExdHkWR%2FgOKynz%2B&X-Amz-Signature=c2d5fd44c420a809e15c8b036fa3def85695669ec7c15b5d4ce24dd926ad86d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TW5UGMC%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwBfiEFIhfvOHOQ19PWm3AjUjt3VMW6M5HjED0tYE33wIgMEtRmFN354fwS4XWHUflVqOZEosUmRcIyIZ4feKTOa4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhZKl%2BcCvScfh1DJSrcA%2BWbHgMQNhznxEzzlVrH8fvD3MboejuFH7Z8BcqfYlpX6UM2NFqU4dWO9xazTPYG%2FH7E7jpAtLuDGBy1g7IZrmA2iocDvc660T9YG5LjDQ5qbyo5H0NzhZKtqPYwBIJiLosgmpOWb5SlKlDeStYCV2igrjZKcUwsRJElSIcVk8Ed08z5BPmvNMEtnJaXsn6Qsa8nG4NMPQBD1p6rTo7mincjbaj3izuwFSwNd4gkaG3p%2FONOGrON73nxd3VckS7LIywQtvTZFbVY0PXr%2FuWNspa7H3JLolyvgdRQYPQKTpCSGuDrM5wafuHS4wr7hwh2qxX2y0Z8HB0QyqH0QmEReg48i8UZpE4R4BViFA2dgexuJvi%2BDYPKyRdEothomRcrGPEIgz9P3gprasmko9N%2BtAU2knKGUS0oNLiZx4HqZ54nSWySPujdLUacQ%2BMW7Px%2BiqRVN8dLV5ACsxXpnB84bOxwRwUqWQJlXFDPMW%2FsIt4vmYdjr95JFAFI921uDu0ZUZPlNYu3%2F01vq14BjBPV%2FgiZHN6GsE03KKsITPsFNwE22AjnKfYjselneQSXBidwmaPNnMqL7aTVO%2FyAMS%2BVP1ZCpgTCLxEIrQQ6gWYmP2pmvlqYzHhkpsnWIBYWMNuezsUGOqUBU8OATq0YkahQcIA3qFTkNdNm9aelFsO6e83cVjqWYuc2WE8c7ExVneB3f25uZMPuqLTgIAIS8TaHLbzmkTWvsagFun%2FN4gPfr3iYNubtlZgG%2BUt%2Bc5nhcNsXJcisgcxcK2dvHWtCwONPpOcrLgn6FlHjOOR3PQdfuH7tMhiCiABG3v2m2Ma6Lh68IMfutnem2RbsEJyE1dpiYExdHkWR%2FgOKynz%2B&X-Amz-Signature=0e1c85de751aa9b6c83137b3ed3fad4beeebdd3ba9aee32e3f70a0f4a109bac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TW5UGMC%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwBfiEFIhfvOHOQ19PWm3AjUjt3VMW6M5HjED0tYE33wIgMEtRmFN354fwS4XWHUflVqOZEosUmRcIyIZ4feKTOa4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhZKl%2BcCvScfh1DJSrcA%2BWbHgMQNhznxEzzlVrH8fvD3MboejuFH7Z8BcqfYlpX6UM2NFqU4dWO9xazTPYG%2FH7E7jpAtLuDGBy1g7IZrmA2iocDvc660T9YG5LjDQ5qbyo5H0NzhZKtqPYwBIJiLosgmpOWb5SlKlDeStYCV2igrjZKcUwsRJElSIcVk8Ed08z5BPmvNMEtnJaXsn6Qsa8nG4NMPQBD1p6rTo7mincjbaj3izuwFSwNd4gkaG3p%2FONOGrON73nxd3VckS7LIywQtvTZFbVY0PXr%2FuWNspa7H3JLolyvgdRQYPQKTpCSGuDrM5wafuHS4wr7hwh2qxX2y0Z8HB0QyqH0QmEReg48i8UZpE4R4BViFA2dgexuJvi%2BDYPKyRdEothomRcrGPEIgz9P3gprasmko9N%2BtAU2knKGUS0oNLiZx4HqZ54nSWySPujdLUacQ%2BMW7Px%2BiqRVN8dLV5ACsxXpnB84bOxwRwUqWQJlXFDPMW%2FsIt4vmYdjr95JFAFI921uDu0ZUZPlNYu3%2F01vq14BjBPV%2FgiZHN6GsE03KKsITPsFNwE22AjnKfYjselneQSXBidwmaPNnMqL7aTVO%2FyAMS%2BVP1ZCpgTCLxEIrQQ6gWYmP2pmvlqYzHhkpsnWIBYWMNuezsUGOqUBU8OATq0YkahQcIA3qFTkNdNm9aelFsO6e83cVjqWYuc2WE8c7ExVneB3f25uZMPuqLTgIAIS8TaHLbzmkTWvsagFun%2FN4gPfr3iYNubtlZgG%2BUt%2Bc5nhcNsXJcisgcxcK2dvHWtCwONPpOcrLgn6FlHjOOR3PQdfuH7tMhiCiABG3v2m2Ma6Lh68IMfutnem2RbsEJyE1dpiYExdHkWR%2FgOKynz%2B&X-Amz-Signature=94722d46563e3a672ec9570f43480d98a898856eaaf5a5931b8c6dac48513fca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TW5UGMC%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwBfiEFIhfvOHOQ19PWm3AjUjt3VMW6M5HjED0tYE33wIgMEtRmFN354fwS4XWHUflVqOZEosUmRcIyIZ4feKTOa4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhZKl%2BcCvScfh1DJSrcA%2BWbHgMQNhznxEzzlVrH8fvD3MboejuFH7Z8BcqfYlpX6UM2NFqU4dWO9xazTPYG%2FH7E7jpAtLuDGBy1g7IZrmA2iocDvc660T9YG5LjDQ5qbyo5H0NzhZKtqPYwBIJiLosgmpOWb5SlKlDeStYCV2igrjZKcUwsRJElSIcVk8Ed08z5BPmvNMEtnJaXsn6Qsa8nG4NMPQBD1p6rTo7mincjbaj3izuwFSwNd4gkaG3p%2FONOGrON73nxd3VckS7LIywQtvTZFbVY0PXr%2FuWNspa7H3JLolyvgdRQYPQKTpCSGuDrM5wafuHS4wr7hwh2qxX2y0Z8HB0QyqH0QmEReg48i8UZpE4R4BViFA2dgexuJvi%2BDYPKyRdEothomRcrGPEIgz9P3gprasmko9N%2BtAU2knKGUS0oNLiZx4HqZ54nSWySPujdLUacQ%2BMW7Px%2BiqRVN8dLV5ACsxXpnB84bOxwRwUqWQJlXFDPMW%2FsIt4vmYdjr95JFAFI921uDu0ZUZPlNYu3%2F01vq14BjBPV%2FgiZHN6GsE03KKsITPsFNwE22AjnKfYjselneQSXBidwmaPNnMqL7aTVO%2FyAMS%2BVP1ZCpgTCLxEIrQQ6gWYmP2pmvlqYzHhkpsnWIBYWMNuezsUGOqUBU8OATq0YkahQcIA3qFTkNdNm9aelFsO6e83cVjqWYuc2WE8c7ExVneB3f25uZMPuqLTgIAIS8TaHLbzmkTWvsagFun%2FN4gPfr3iYNubtlZgG%2BUt%2Bc5nhcNsXJcisgcxcK2dvHWtCwONPpOcrLgn6FlHjOOR3PQdfuH7tMhiCiABG3v2m2Ma6Lh68IMfutnem2RbsEJyE1dpiYExdHkWR%2FgOKynz%2B&X-Amz-Signature=b582e63be10ac70f77f49243eb37f6695d6e54c7e821966f53a01ae4f29c7309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDUFR6RU%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMeOzakAY7pR%2B6IYTqs%2FeiDOd6Vyy8wjc41TlSAqQCSAIgSJ2W4hSanbEyrAmnqG%2FAX4o39sLU5WSWgBGWB4ricQkqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjSYEaP5JGlgG8OmSrcA%2F%2FlJMtt4XWo3JRmPzrS8HHcWrenrpks%2Fp1WbyoCrZGJtcY7rhW8GmsBQy1kO4Ur3HnYK3LIr6tHkouu9BlZI53GoJEGX3OuJT0GkOOanU%2FswMqt%2FJIg2TkJHFMMlb2%2BFTwKUmMepCT%2BwgMIqgRkp%2FQSSfhbbtH4rdwNeBT4CwNqWXsPuGlLY%2BT0uMDLwyDAU4VJXNOfVAZJNbnKncv8IZp%2FsTK9rPgb7%2Fl6b46c2IH2zvnoHCIM40pALjzmfzAKKH10Zve%2BLgSAm6DhMcuF%2FovIxFuWx3kSIMwP23WdcGtLiGBj%2BXL9aBFWi2twzUjeAqQ6DPZKpfRklq73FqNdPUBR9rEPjx9WpaKOU0449DmlkwdjSnpQAYI2K6qolus2B%2BnKo%2FuqJi9lgq5a41gXzfCZOG6jZzFegCH4JQxGp9o2g%2B6nik4s7doNy3jyx0esLSvE1HdixVsjpBxTBvD06jiVZrNsR8hLdkKHO%2FhAKV0leyww7c%2B7EfQtBsmdMv5yNyHib%2FaBJzOnk07TyxysZHyyXY2o12w%2BQaVsehQa75Do8rz3Laj2roP%2FRh8CtSDmh1HKASfaQHWl8hkALb3mKrnV5ed2cgoEgC1Hk%2Ff2jVU5nqHTfagnMRStoNFmMImezsUGOqUBMGxtgbko9brDphyLYwaDeS%2B%2FzNmmWPMkzracZMPPOOhZyJeYDTZsmng91UjVoiz0IuHBC0aRYJNph%2FtmP9qtgsFe7WUESRr2JpV4%2FRm8krxn68mkjFcZdyLdD1K3AbufgNsr79BUtMWNH4snH7FsRm75BPBrn7IyAVxW%2BATlpKtyBKGCYhTwlNrOOMr3%2F1I4m8j5qFyG4nYpoGwPktP1CcCvDwbC&X-Amz-Signature=4c3e8ba55887e56ddfd47d16d414d1f89a156ac175e736f8217ee4fbeec0bb6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TW5UGMC%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwBfiEFIhfvOHOQ19PWm3AjUjt3VMW6M5HjED0tYE33wIgMEtRmFN354fwS4XWHUflVqOZEosUmRcIyIZ4feKTOa4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhZKl%2BcCvScfh1DJSrcA%2BWbHgMQNhznxEzzlVrH8fvD3MboejuFH7Z8BcqfYlpX6UM2NFqU4dWO9xazTPYG%2FH7E7jpAtLuDGBy1g7IZrmA2iocDvc660T9YG5LjDQ5qbyo5H0NzhZKtqPYwBIJiLosgmpOWb5SlKlDeStYCV2igrjZKcUwsRJElSIcVk8Ed08z5BPmvNMEtnJaXsn6Qsa8nG4NMPQBD1p6rTo7mincjbaj3izuwFSwNd4gkaG3p%2FONOGrON73nxd3VckS7LIywQtvTZFbVY0PXr%2FuWNspa7H3JLolyvgdRQYPQKTpCSGuDrM5wafuHS4wr7hwh2qxX2y0Z8HB0QyqH0QmEReg48i8UZpE4R4BViFA2dgexuJvi%2BDYPKyRdEothomRcrGPEIgz9P3gprasmko9N%2BtAU2knKGUS0oNLiZx4HqZ54nSWySPujdLUacQ%2BMW7Px%2BiqRVN8dLV5ACsxXpnB84bOxwRwUqWQJlXFDPMW%2FsIt4vmYdjr95JFAFI921uDu0ZUZPlNYu3%2F01vq14BjBPV%2FgiZHN6GsE03KKsITPsFNwE22AjnKfYjselneQSXBidwmaPNnMqL7aTVO%2FyAMS%2BVP1ZCpgTCLxEIrQQ6gWYmP2pmvlqYzHhkpsnWIBYWMNuezsUGOqUBU8OATq0YkahQcIA3qFTkNdNm9aelFsO6e83cVjqWYuc2WE8c7ExVneB3f25uZMPuqLTgIAIS8TaHLbzmkTWvsagFun%2FN4gPfr3iYNubtlZgG%2BUt%2Bc5nhcNsXJcisgcxcK2dvHWtCwONPpOcrLgn6FlHjOOR3PQdfuH7tMhiCiABG3v2m2Ma6Lh68IMfutnem2RbsEJyE1dpiYExdHkWR%2FgOKynz%2B&X-Amz-Signature=5092362ec94fbcb2e2de98f7f5b9ada29706ee7882e87fb3ac10b3aa2bfac86b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TW5UGMC%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwBfiEFIhfvOHOQ19PWm3AjUjt3VMW6M5HjED0tYE33wIgMEtRmFN354fwS4XWHUflVqOZEosUmRcIyIZ4feKTOa4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhZKl%2BcCvScfh1DJSrcA%2BWbHgMQNhznxEzzlVrH8fvD3MboejuFH7Z8BcqfYlpX6UM2NFqU4dWO9xazTPYG%2FH7E7jpAtLuDGBy1g7IZrmA2iocDvc660T9YG5LjDQ5qbyo5H0NzhZKtqPYwBIJiLosgmpOWb5SlKlDeStYCV2igrjZKcUwsRJElSIcVk8Ed08z5BPmvNMEtnJaXsn6Qsa8nG4NMPQBD1p6rTo7mincjbaj3izuwFSwNd4gkaG3p%2FONOGrON73nxd3VckS7LIywQtvTZFbVY0PXr%2FuWNspa7H3JLolyvgdRQYPQKTpCSGuDrM5wafuHS4wr7hwh2qxX2y0Z8HB0QyqH0QmEReg48i8UZpE4R4BViFA2dgexuJvi%2BDYPKyRdEothomRcrGPEIgz9P3gprasmko9N%2BtAU2knKGUS0oNLiZx4HqZ54nSWySPujdLUacQ%2BMW7Px%2BiqRVN8dLV5ACsxXpnB84bOxwRwUqWQJlXFDPMW%2FsIt4vmYdjr95JFAFI921uDu0ZUZPlNYu3%2F01vq14BjBPV%2FgiZHN6GsE03KKsITPsFNwE22AjnKfYjselneQSXBidwmaPNnMqL7aTVO%2FyAMS%2BVP1ZCpgTCLxEIrQQ6gWYmP2pmvlqYzHhkpsnWIBYWMNuezsUGOqUBU8OATq0YkahQcIA3qFTkNdNm9aelFsO6e83cVjqWYuc2WE8c7ExVneB3f25uZMPuqLTgIAIS8TaHLbzmkTWvsagFun%2FN4gPfr3iYNubtlZgG%2BUt%2Bc5nhcNsXJcisgcxcK2dvHWtCwONPpOcrLgn6FlHjOOR3PQdfuH7tMhiCiABG3v2m2Ma6Lh68IMfutnem2RbsEJyE1dpiYExdHkWR%2FgOKynz%2B&X-Amz-Signature=07a752cb1b2d9b43ce4be1c8e0dfbd379e6feb908edef62790f0bf3cee19fa6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TW5UGMC%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwBfiEFIhfvOHOQ19PWm3AjUjt3VMW6M5HjED0tYE33wIgMEtRmFN354fwS4XWHUflVqOZEosUmRcIyIZ4feKTOa4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhZKl%2BcCvScfh1DJSrcA%2BWbHgMQNhznxEzzlVrH8fvD3MboejuFH7Z8BcqfYlpX6UM2NFqU4dWO9xazTPYG%2FH7E7jpAtLuDGBy1g7IZrmA2iocDvc660T9YG5LjDQ5qbyo5H0NzhZKtqPYwBIJiLosgmpOWb5SlKlDeStYCV2igrjZKcUwsRJElSIcVk8Ed08z5BPmvNMEtnJaXsn6Qsa8nG4NMPQBD1p6rTo7mincjbaj3izuwFSwNd4gkaG3p%2FONOGrON73nxd3VckS7LIywQtvTZFbVY0PXr%2FuWNspa7H3JLolyvgdRQYPQKTpCSGuDrM5wafuHS4wr7hwh2qxX2y0Z8HB0QyqH0QmEReg48i8UZpE4R4BViFA2dgexuJvi%2BDYPKyRdEothomRcrGPEIgz9P3gprasmko9N%2BtAU2knKGUS0oNLiZx4HqZ54nSWySPujdLUacQ%2BMW7Px%2BiqRVN8dLV5ACsxXpnB84bOxwRwUqWQJlXFDPMW%2FsIt4vmYdjr95JFAFI921uDu0ZUZPlNYu3%2F01vq14BjBPV%2FgiZHN6GsE03KKsITPsFNwE22AjnKfYjselneQSXBidwmaPNnMqL7aTVO%2FyAMS%2BVP1ZCpgTCLxEIrQQ6gWYmP2pmvlqYzHhkpsnWIBYWMNuezsUGOqUBU8OATq0YkahQcIA3qFTkNdNm9aelFsO6e83cVjqWYuc2WE8c7ExVneB3f25uZMPuqLTgIAIS8TaHLbzmkTWvsagFun%2FN4gPfr3iYNubtlZgG%2BUt%2Bc5nhcNsXJcisgcxcK2dvHWtCwONPpOcrLgn6FlHjOOR3PQdfuH7tMhiCiABG3v2m2Ma6Lh68IMfutnem2RbsEJyE1dpiYExdHkWR%2FgOKynz%2B&X-Amz-Signature=92884a793681a6075d81a35d637bb32cf45239cf4202c078f31b8e2832bd52e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TW5UGMC%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwBfiEFIhfvOHOQ19PWm3AjUjt3VMW6M5HjED0tYE33wIgMEtRmFN354fwS4XWHUflVqOZEosUmRcIyIZ4feKTOa4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhZKl%2BcCvScfh1DJSrcA%2BWbHgMQNhznxEzzlVrH8fvD3MboejuFH7Z8BcqfYlpX6UM2NFqU4dWO9xazTPYG%2FH7E7jpAtLuDGBy1g7IZrmA2iocDvc660T9YG5LjDQ5qbyo5H0NzhZKtqPYwBIJiLosgmpOWb5SlKlDeStYCV2igrjZKcUwsRJElSIcVk8Ed08z5BPmvNMEtnJaXsn6Qsa8nG4NMPQBD1p6rTo7mincjbaj3izuwFSwNd4gkaG3p%2FONOGrON73nxd3VckS7LIywQtvTZFbVY0PXr%2FuWNspa7H3JLolyvgdRQYPQKTpCSGuDrM5wafuHS4wr7hwh2qxX2y0Z8HB0QyqH0QmEReg48i8UZpE4R4BViFA2dgexuJvi%2BDYPKyRdEothomRcrGPEIgz9P3gprasmko9N%2BtAU2knKGUS0oNLiZx4HqZ54nSWySPujdLUacQ%2BMW7Px%2BiqRVN8dLV5ACsxXpnB84bOxwRwUqWQJlXFDPMW%2FsIt4vmYdjr95JFAFI921uDu0ZUZPlNYu3%2F01vq14BjBPV%2FgiZHN6GsE03KKsITPsFNwE22AjnKfYjselneQSXBidwmaPNnMqL7aTVO%2FyAMS%2BVP1ZCpgTCLxEIrQQ6gWYmP2pmvlqYzHhkpsnWIBYWMNuezsUGOqUBU8OATq0YkahQcIA3qFTkNdNm9aelFsO6e83cVjqWYuc2WE8c7ExVneB3f25uZMPuqLTgIAIS8TaHLbzmkTWvsagFun%2FN4gPfr3iYNubtlZgG%2BUt%2Bc5nhcNsXJcisgcxcK2dvHWtCwONPpOcrLgn6FlHjOOR3PQdfuH7tMhiCiABG3v2m2Ma6Lh68IMfutnem2RbsEJyE1dpiYExdHkWR%2FgOKynz%2B&X-Amz-Signature=01d9d276248728e943e051b88fda2b5804defb2deafe9cb72dc8e89fa7c7ed14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TW5UGMC%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwBfiEFIhfvOHOQ19PWm3AjUjt3VMW6M5HjED0tYE33wIgMEtRmFN354fwS4XWHUflVqOZEosUmRcIyIZ4feKTOa4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhZKl%2BcCvScfh1DJSrcA%2BWbHgMQNhznxEzzlVrH8fvD3MboejuFH7Z8BcqfYlpX6UM2NFqU4dWO9xazTPYG%2FH7E7jpAtLuDGBy1g7IZrmA2iocDvc660T9YG5LjDQ5qbyo5H0NzhZKtqPYwBIJiLosgmpOWb5SlKlDeStYCV2igrjZKcUwsRJElSIcVk8Ed08z5BPmvNMEtnJaXsn6Qsa8nG4NMPQBD1p6rTo7mincjbaj3izuwFSwNd4gkaG3p%2FONOGrON73nxd3VckS7LIywQtvTZFbVY0PXr%2FuWNspa7H3JLolyvgdRQYPQKTpCSGuDrM5wafuHS4wr7hwh2qxX2y0Z8HB0QyqH0QmEReg48i8UZpE4R4BViFA2dgexuJvi%2BDYPKyRdEothomRcrGPEIgz9P3gprasmko9N%2BtAU2knKGUS0oNLiZx4HqZ54nSWySPujdLUacQ%2BMW7Px%2BiqRVN8dLV5ACsxXpnB84bOxwRwUqWQJlXFDPMW%2FsIt4vmYdjr95JFAFI921uDu0ZUZPlNYu3%2F01vq14BjBPV%2FgiZHN6GsE03KKsITPsFNwE22AjnKfYjselneQSXBidwmaPNnMqL7aTVO%2FyAMS%2BVP1ZCpgTCLxEIrQQ6gWYmP2pmvlqYzHhkpsnWIBYWMNuezsUGOqUBU8OATq0YkahQcIA3qFTkNdNm9aelFsO6e83cVjqWYuc2WE8c7ExVneB3f25uZMPuqLTgIAIS8TaHLbzmkTWvsagFun%2FN4gPfr3iYNubtlZgG%2BUt%2Bc5nhcNsXJcisgcxcK2dvHWtCwONPpOcrLgn6FlHjOOR3PQdfuH7tMhiCiABG3v2m2Ma6Lh68IMfutnem2RbsEJyE1dpiYExdHkWR%2FgOKynz%2B&X-Amz-Signature=b4f994988187c0678402a735176eb670c11fa08e7db6df0510a66b6aff679371&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TW5UGMC%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwBfiEFIhfvOHOQ19PWm3AjUjt3VMW6M5HjED0tYE33wIgMEtRmFN354fwS4XWHUflVqOZEosUmRcIyIZ4feKTOa4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhZKl%2BcCvScfh1DJSrcA%2BWbHgMQNhznxEzzlVrH8fvD3MboejuFH7Z8BcqfYlpX6UM2NFqU4dWO9xazTPYG%2FH7E7jpAtLuDGBy1g7IZrmA2iocDvc660T9YG5LjDQ5qbyo5H0NzhZKtqPYwBIJiLosgmpOWb5SlKlDeStYCV2igrjZKcUwsRJElSIcVk8Ed08z5BPmvNMEtnJaXsn6Qsa8nG4NMPQBD1p6rTo7mincjbaj3izuwFSwNd4gkaG3p%2FONOGrON73nxd3VckS7LIywQtvTZFbVY0PXr%2FuWNspa7H3JLolyvgdRQYPQKTpCSGuDrM5wafuHS4wr7hwh2qxX2y0Z8HB0QyqH0QmEReg48i8UZpE4R4BViFA2dgexuJvi%2BDYPKyRdEothomRcrGPEIgz9P3gprasmko9N%2BtAU2knKGUS0oNLiZx4HqZ54nSWySPujdLUacQ%2BMW7Px%2BiqRVN8dLV5ACsxXpnB84bOxwRwUqWQJlXFDPMW%2FsIt4vmYdjr95JFAFI921uDu0ZUZPlNYu3%2F01vq14BjBPV%2FgiZHN6GsE03KKsITPsFNwE22AjnKfYjselneQSXBidwmaPNnMqL7aTVO%2FyAMS%2BVP1ZCpgTCLxEIrQQ6gWYmP2pmvlqYzHhkpsnWIBYWMNuezsUGOqUBU8OATq0YkahQcIA3qFTkNdNm9aelFsO6e83cVjqWYuc2WE8c7ExVneB3f25uZMPuqLTgIAIS8TaHLbzmkTWvsagFun%2FN4gPfr3iYNubtlZgG%2BUt%2Bc5nhcNsXJcisgcxcK2dvHWtCwONPpOcrLgn6FlHjOOR3PQdfuH7tMhiCiABG3v2m2Ma6Lh68IMfutnem2RbsEJyE1dpiYExdHkWR%2FgOKynz%2B&X-Amz-Signature=e7d96d536a66b666c37ba019e80292e1ff96bebc3c8827bfa9db58ad5d7e3421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


