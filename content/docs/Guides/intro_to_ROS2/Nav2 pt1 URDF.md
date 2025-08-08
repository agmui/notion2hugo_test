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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646OUW3ZV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDEhbx5zm5wierMKTXVuwfmO6LLnCHhswWH8ErJ95GYfAIgAvwlt6A3WKPJF5e0S%2BUHwhBW2mswTyF4yVvGVLTuaiwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGZUxsaQc1URgy9UyrcA%2FQ%2FPWUcKb%2FIMwVGQIAmqOgGac%2BxUywL8MOkj544r5xIyZcYbBnBPZW79MzuTPwU7PL2Tw6wZGwUBj8jqMOtpMOogBXeZFovSLwKi8ifyqMeQ4qF%2FIlGdvO8eSvTD3EPI2Q5DSSWGb38NJCYbKsPJWgYCHrR3C4O4Bzx1hkNJY2XqJJr%2BrsQVMnQCgFJu5R3iJGAcDUp0i3FSKwguaMN1t5yPQRWwHyXw%2FPBddXWZTZ5%2Fg%2Fo5v5k9JxZ4c5LEa7%2Bz%2FupGZVZ2Xf49cu0fc8tdQCnYUYWJZ9pMzwOQ7N%2BsbefFFPRjesogBmF0HBdJSuJbSRRyqIxpxdtTNWSxveAJgOhWsWBtzpUijHmvuKXPa%2BUAxWSjmVtqOunxJs6%2BvaVsiLMLSTla%2B7Oerx5whjTLD2jAZNZZet3bwp6K0he4xaiYu%2BOsXeLmafRdEpoCG6tQuvgdn1R8SQh%2FS0bnN%2Bh5tJzcdwZ81VDUThjJDwGhNKAwsnOqnY0ocWWTAVGwEOhSr3kRgPwGpfAWdKuclT0d88bGNULI%2FBFEmTC%2FYs79IZXev6eli4Dn88zzeErE3%2BxjiurHozYpNNKaRkvGz1aZQT4gGNqbFDjz4l4M4ItYFITq7AZZ4sUamuxPEDlMOb61cQGOqUBkvT6hA4FkhKOBjHz%2BLFe%2FZ7Z3BggjthMbYA8q8xykAVDJ6vwUD38OoCkYDVjl%2FAxoLMk9szpWknPOlWZxvWBCmrKbg8IPBBeusHZshgMTPKhGtWOOtdf%2Bm91AwhC%2F%2B7pl0XCNwDOUj4Yc4hIe17WdN0bmty9sL%2FhhVMbxnXE1NEinAX6W465oyZYPFClL6LdjSg4LFPB3xUM9liXcJHxyd3%2BrpJ0&X-Amz-Signature=559f0f66d6214da585c3606b6f3dabbbf5e1e2804b476d0bae2512516895fafd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646OUW3ZV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDEhbx5zm5wierMKTXVuwfmO6LLnCHhswWH8ErJ95GYfAIgAvwlt6A3WKPJF5e0S%2BUHwhBW2mswTyF4yVvGVLTuaiwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGZUxsaQc1URgy9UyrcA%2FQ%2FPWUcKb%2FIMwVGQIAmqOgGac%2BxUywL8MOkj544r5xIyZcYbBnBPZW79MzuTPwU7PL2Tw6wZGwUBj8jqMOtpMOogBXeZFovSLwKi8ifyqMeQ4qF%2FIlGdvO8eSvTD3EPI2Q5DSSWGb38NJCYbKsPJWgYCHrR3C4O4Bzx1hkNJY2XqJJr%2BrsQVMnQCgFJu5R3iJGAcDUp0i3FSKwguaMN1t5yPQRWwHyXw%2FPBddXWZTZ5%2Fg%2Fo5v5k9JxZ4c5LEa7%2Bz%2FupGZVZ2Xf49cu0fc8tdQCnYUYWJZ9pMzwOQ7N%2BsbefFFPRjesogBmF0HBdJSuJbSRRyqIxpxdtTNWSxveAJgOhWsWBtzpUijHmvuKXPa%2BUAxWSjmVtqOunxJs6%2BvaVsiLMLSTla%2B7Oerx5whjTLD2jAZNZZet3bwp6K0he4xaiYu%2BOsXeLmafRdEpoCG6tQuvgdn1R8SQh%2FS0bnN%2Bh5tJzcdwZ81VDUThjJDwGhNKAwsnOqnY0ocWWTAVGwEOhSr3kRgPwGpfAWdKuclT0d88bGNULI%2FBFEmTC%2FYs79IZXev6eli4Dn88zzeErE3%2BxjiurHozYpNNKaRkvGz1aZQT4gGNqbFDjz4l4M4ItYFITq7AZZ4sUamuxPEDlMOb61cQGOqUBkvT6hA4FkhKOBjHz%2BLFe%2FZ7Z3BggjthMbYA8q8xykAVDJ6vwUD38OoCkYDVjl%2FAxoLMk9szpWknPOlWZxvWBCmrKbg8IPBBeusHZshgMTPKhGtWOOtdf%2Bm91AwhC%2F%2B7pl0XCNwDOUj4Yc4hIe17WdN0bmty9sL%2FhhVMbxnXE1NEinAX6W465oyZYPFClL6LdjSg4LFPB3xUM9liXcJHxyd3%2BrpJ0&X-Amz-Signature=b97f5f24120cc5ac451259a4103223fd398aa6fe6daa757202f10ca7081360ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646OUW3ZV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDEhbx5zm5wierMKTXVuwfmO6LLnCHhswWH8ErJ95GYfAIgAvwlt6A3WKPJF5e0S%2BUHwhBW2mswTyF4yVvGVLTuaiwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGZUxsaQc1URgy9UyrcA%2FQ%2FPWUcKb%2FIMwVGQIAmqOgGac%2BxUywL8MOkj544r5xIyZcYbBnBPZW79MzuTPwU7PL2Tw6wZGwUBj8jqMOtpMOogBXeZFovSLwKi8ifyqMeQ4qF%2FIlGdvO8eSvTD3EPI2Q5DSSWGb38NJCYbKsPJWgYCHrR3C4O4Bzx1hkNJY2XqJJr%2BrsQVMnQCgFJu5R3iJGAcDUp0i3FSKwguaMN1t5yPQRWwHyXw%2FPBddXWZTZ5%2Fg%2Fo5v5k9JxZ4c5LEa7%2Bz%2FupGZVZ2Xf49cu0fc8tdQCnYUYWJZ9pMzwOQ7N%2BsbefFFPRjesogBmF0HBdJSuJbSRRyqIxpxdtTNWSxveAJgOhWsWBtzpUijHmvuKXPa%2BUAxWSjmVtqOunxJs6%2BvaVsiLMLSTla%2B7Oerx5whjTLD2jAZNZZet3bwp6K0he4xaiYu%2BOsXeLmafRdEpoCG6tQuvgdn1R8SQh%2FS0bnN%2Bh5tJzcdwZ81VDUThjJDwGhNKAwsnOqnY0ocWWTAVGwEOhSr3kRgPwGpfAWdKuclT0d88bGNULI%2FBFEmTC%2FYs79IZXev6eli4Dn88zzeErE3%2BxjiurHozYpNNKaRkvGz1aZQT4gGNqbFDjz4l4M4ItYFITq7AZZ4sUamuxPEDlMOb61cQGOqUBkvT6hA4FkhKOBjHz%2BLFe%2FZ7Z3BggjthMbYA8q8xykAVDJ6vwUD38OoCkYDVjl%2FAxoLMk9szpWknPOlWZxvWBCmrKbg8IPBBeusHZshgMTPKhGtWOOtdf%2Bm91AwhC%2F%2B7pl0XCNwDOUj4Yc4hIe17WdN0bmty9sL%2FhhVMbxnXE1NEinAX6W465oyZYPFClL6LdjSg4LFPB3xUM9liXcJHxyd3%2BrpJ0&X-Amz-Signature=06a8d6ba1b33af9cd4338f26a8bea0029dbe35214bd06388e29f9636fa9ee447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646OUW3ZV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDEhbx5zm5wierMKTXVuwfmO6LLnCHhswWH8ErJ95GYfAIgAvwlt6A3WKPJF5e0S%2BUHwhBW2mswTyF4yVvGVLTuaiwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGZUxsaQc1URgy9UyrcA%2FQ%2FPWUcKb%2FIMwVGQIAmqOgGac%2BxUywL8MOkj544r5xIyZcYbBnBPZW79MzuTPwU7PL2Tw6wZGwUBj8jqMOtpMOogBXeZFovSLwKi8ifyqMeQ4qF%2FIlGdvO8eSvTD3EPI2Q5DSSWGb38NJCYbKsPJWgYCHrR3C4O4Bzx1hkNJY2XqJJr%2BrsQVMnQCgFJu5R3iJGAcDUp0i3FSKwguaMN1t5yPQRWwHyXw%2FPBddXWZTZ5%2Fg%2Fo5v5k9JxZ4c5LEa7%2Bz%2FupGZVZ2Xf49cu0fc8tdQCnYUYWJZ9pMzwOQ7N%2BsbefFFPRjesogBmF0HBdJSuJbSRRyqIxpxdtTNWSxveAJgOhWsWBtzpUijHmvuKXPa%2BUAxWSjmVtqOunxJs6%2BvaVsiLMLSTla%2B7Oerx5whjTLD2jAZNZZet3bwp6K0he4xaiYu%2BOsXeLmafRdEpoCG6tQuvgdn1R8SQh%2FS0bnN%2Bh5tJzcdwZ81VDUThjJDwGhNKAwsnOqnY0ocWWTAVGwEOhSr3kRgPwGpfAWdKuclT0d88bGNULI%2FBFEmTC%2FYs79IZXev6eli4Dn88zzeErE3%2BxjiurHozYpNNKaRkvGz1aZQT4gGNqbFDjz4l4M4ItYFITq7AZZ4sUamuxPEDlMOb61cQGOqUBkvT6hA4FkhKOBjHz%2BLFe%2FZ7Z3BggjthMbYA8q8xykAVDJ6vwUD38OoCkYDVjl%2FAxoLMk9szpWknPOlWZxvWBCmrKbg8IPBBeusHZshgMTPKhGtWOOtdf%2Bm91AwhC%2F%2B7pl0XCNwDOUj4Yc4hIe17WdN0bmty9sL%2FhhVMbxnXE1NEinAX6W465oyZYPFClL6LdjSg4LFPB3xUM9liXcJHxyd3%2BrpJ0&X-Amz-Signature=fc4decf314d0dbc0271fe76fe94ad2c1ec4f5ed5e90be184210ac00010043676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646OUW3ZV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDEhbx5zm5wierMKTXVuwfmO6LLnCHhswWH8ErJ95GYfAIgAvwlt6A3WKPJF5e0S%2BUHwhBW2mswTyF4yVvGVLTuaiwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGZUxsaQc1URgy9UyrcA%2FQ%2FPWUcKb%2FIMwVGQIAmqOgGac%2BxUywL8MOkj544r5xIyZcYbBnBPZW79MzuTPwU7PL2Tw6wZGwUBj8jqMOtpMOogBXeZFovSLwKi8ifyqMeQ4qF%2FIlGdvO8eSvTD3EPI2Q5DSSWGb38NJCYbKsPJWgYCHrR3C4O4Bzx1hkNJY2XqJJr%2BrsQVMnQCgFJu5R3iJGAcDUp0i3FSKwguaMN1t5yPQRWwHyXw%2FPBddXWZTZ5%2Fg%2Fo5v5k9JxZ4c5LEa7%2Bz%2FupGZVZ2Xf49cu0fc8tdQCnYUYWJZ9pMzwOQ7N%2BsbefFFPRjesogBmF0HBdJSuJbSRRyqIxpxdtTNWSxveAJgOhWsWBtzpUijHmvuKXPa%2BUAxWSjmVtqOunxJs6%2BvaVsiLMLSTla%2B7Oerx5whjTLD2jAZNZZet3bwp6K0he4xaiYu%2BOsXeLmafRdEpoCG6tQuvgdn1R8SQh%2FS0bnN%2Bh5tJzcdwZ81VDUThjJDwGhNKAwsnOqnY0ocWWTAVGwEOhSr3kRgPwGpfAWdKuclT0d88bGNULI%2FBFEmTC%2FYs79IZXev6eli4Dn88zzeErE3%2BxjiurHozYpNNKaRkvGz1aZQT4gGNqbFDjz4l4M4ItYFITq7AZZ4sUamuxPEDlMOb61cQGOqUBkvT6hA4FkhKOBjHz%2BLFe%2FZ7Z3BggjthMbYA8q8xykAVDJ6vwUD38OoCkYDVjl%2FAxoLMk9szpWknPOlWZxvWBCmrKbg8IPBBeusHZshgMTPKhGtWOOtdf%2Bm91AwhC%2F%2B7pl0XCNwDOUj4Yc4hIe17WdN0bmty9sL%2FhhVMbxnXE1NEinAX6W465oyZYPFClL6LdjSg4LFPB3xUM9liXcJHxyd3%2BrpJ0&X-Amz-Signature=644e66d78211a2b1e6d8e4da15b8842644b319ba2220eada0b29eb7546348ce8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646OUW3ZV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDEhbx5zm5wierMKTXVuwfmO6LLnCHhswWH8ErJ95GYfAIgAvwlt6A3WKPJF5e0S%2BUHwhBW2mswTyF4yVvGVLTuaiwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGZUxsaQc1URgy9UyrcA%2FQ%2FPWUcKb%2FIMwVGQIAmqOgGac%2BxUywL8MOkj544r5xIyZcYbBnBPZW79MzuTPwU7PL2Tw6wZGwUBj8jqMOtpMOogBXeZFovSLwKi8ifyqMeQ4qF%2FIlGdvO8eSvTD3EPI2Q5DSSWGb38NJCYbKsPJWgYCHrR3C4O4Bzx1hkNJY2XqJJr%2BrsQVMnQCgFJu5R3iJGAcDUp0i3FSKwguaMN1t5yPQRWwHyXw%2FPBddXWZTZ5%2Fg%2Fo5v5k9JxZ4c5LEa7%2Bz%2FupGZVZ2Xf49cu0fc8tdQCnYUYWJZ9pMzwOQ7N%2BsbefFFPRjesogBmF0HBdJSuJbSRRyqIxpxdtTNWSxveAJgOhWsWBtzpUijHmvuKXPa%2BUAxWSjmVtqOunxJs6%2BvaVsiLMLSTla%2B7Oerx5whjTLD2jAZNZZet3bwp6K0he4xaiYu%2BOsXeLmafRdEpoCG6tQuvgdn1R8SQh%2FS0bnN%2Bh5tJzcdwZ81VDUThjJDwGhNKAwsnOqnY0ocWWTAVGwEOhSr3kRgPwGpfAWdKuclT0d88bGNULI%2FBFEmTC%2FYs79IZXev6eli4Dn88zzeErE3%2BxjiurHozYpNNKaRkvGz1aZQT4gGNqbFDjz4l4M4ItYFITq7AZZ4sUamuxPEDlMOb61cQGOqUBkvT6hA4FkhKOBjHz%2BLFe%2FZ7Z3BggjthMbYA8q8xykAVDJ6vwUD38OoCkYDVjl%2FAxoLMk9szpWknPOlWZxvWBCmrKbg8IPBBeusHZshgMTPKhGtWOOtdf%2Bm91AwhC%2F%2B7pl0XCNwDOUj4Yc4hIe17WdN0bmty9sL%2FhhVMbxnXE1NEinAX6W465oyZYPFClL6LdjSg4LFPB3xUM9liXcJHxyd3%2BrpJ0&X-Amz-Signature=d2f9f569a391e61d80cb2f7c8529bdb45e5691bb6332b8a90a0f81af4dab10b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646OUW3ZV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDEhbx5zm5wierMKTXVuwfmO6LLnCHhswWH8ErJ95GYfAIgAvwlt6A3WKPJF5e0S%2BUHwhBW2mswTyF4yVvGVLTuaiwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGZUxsaQc1URgy9UyrcA%2FQ%2FPWUcKb%2FIMwVGQIAmqOgGac%2BxUywL8MOkj544r5xIyZcYbBnBPZW79MzuTPwU7PL2Tw6wZGwUBj8jqMOtpMOogBXeZFovSLwKi8ifyqMeQ4qF%2FIlGdvO8eSvTD3EPI2Q5DSSWGb38NJCYbKsPJWgYCHrR3C4O4Bzx1hkNJY2XqJJr%2BrsQVMnQCgFJu5R3iJGAcDUp0i3FSKwguaMN1t5yPQRWwHyXw%2FPBddXWZTZ5%2Fg%2Fo5v5k9JxZ4c5LEa7%2Bz%2FupGZVZ2Xf49cu0fc8tdQCnYUYWJZ9pMzwOQ7N%2BsbefFFPRjesogBmF0HBdJSuJbSRRyqIxpxdtTNWSxveAJgOhWsWBtzpUijHmvuKXPa%2BUAxWSjmVtqOunxJs6%2BvaVsiLMLSTla%2B7Oerx5whjTLD2jAZNZZet3bwp6K0he4xaiYu%2BOsXeLmafRdEpoCG6tQuvgdn1R8SQh%2FS0bnN%2Bh5tJzcdwZ81VDUThjJDwGhNKAwsnOqnY0ocWWTAVGwEOhSr3kRgPwGpfAWdKuclT0d88bGNULI%2FBFEmTC%2FYs79IZXev6eli4Dn88zzeErE3%2BxjiurHozYpNNKaRkvGz1aZQT4gGNqbFDjz4l4M4ItYFITq7AZZ4sUamuxPEDlMOb61cQGOqUBkvT6hA4FkhKOBjHz%2BLFe%2FZ7Z3BggjthMbYA8q8xykAVDJ6vwUD38OoCkYDVjl%2FAxoLMk9szpWknPOlWZxvWBCmrKbg8IPBBeusHZshgMTPKhGtWOOtdf%2Bm91AwhC%2F%2B7pl0XCNwDOUj4Yc4hIe17WdN0bmty9sL%2FhhVMbxnXE1NEinAX6W465oyZYPFClL6LdjSg4LFPB3xUM9liXcJHxyd3%2BrpJ0&X-Amz-Signature=9a5f69d74e5b8d60a676513e04773bb350b49feec5fd6719b8cd6c7b2dbb8b9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646OUW3ZV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDEhbx5zm5wierMKTXVuwfmO6LLnCHhswWH8ErJ95GYfAIgAvwlt6A3WKPJF5e0S%2BUHwhBW2mswTyF4yVvGVLTuaiwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGZUxsaQc1URgy9UyrcA%2FQ%2FPWUcKb%2FIMwVGQIAmqOgGac%2BxUywL8MOkj544r5xIyZcYbBnBPZW79MzuTPwU7PL2Tw6wZGwUBj8jqMOtpMOogBXeZFovSLwKi8ifyqMeQ4qF%2FIlGdvO8eSvTD3EPI2Q5DSSWGb38NJCYbKsPJWgYCHrR3C4O4Bzx1hkNJY2XqJJr%2BrsQVMnQCgFJu5R3iJGAcDUp0i3FSKwguaMN1t5yPQRWwHyXw%2FPBddXWZTZ5%2Fg%2Fo5v5k9JxZ4c5LEa7%2Bz%2FupGZVZ2Xf49cu0fc8tdQCnYUYWJZ9pMzwOQ7N%2BsbefFFPRjesogBmF0HBdJSuJbSRRyqIxpxdtTNWSxveAJgOhWsWBtzpUijHmvuKXPa%2BUAxWSjmVtqOunxJs6%2BvaVsiLMLSTla%2B7Oerx5whjTLD2jAZNZZet3bwp6K0he4xaiYu%2BOsXeLmafRdEpoCG6tQuvgdn1R8SQh%2FS0bnN%2Bh5tJzcdwZ81VDUThjJDwGhNKAwsnOqnY0ocWWTAVGwEOhSr3kRgPwGpfAWdKuclT0d88bGNULI%2FBFEmTC%2FYs79IZXev6eli4Dn88zzeErE3%2BxjiurHozYpNNKaRkvGz1aZQT4gGNqbFDjz4l4M4ItYFITq7AZZ4sUamuxPEDlMOb61cQGOqUBkvT6hA4FkhKOBjHz%2BLFe%2FZ7Z3BggjthMbYA8q8xykAVDJ6vwUD38OoCkYDVjl%2FAxoLMk9szpWknPOlWZxvWBCmrKbg8IPBBeusHZshgMTPKhGtWOOtdf%2Bm91AwhC%2F%2B7pl0XCNwDOUj4Yc4hIe17WdN0bmty9sL%2FhhVMbxnXE1NEinAX6W465oyZYPFClL6LdjSg4LFPB3xUM9liXcJHxyd3%2BrpJ0&X-Amz-Signature=a7e8f42866d7106735b9edff5b88f345f5a3540230957d7e13add22c0b075a2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646OUW3ZV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDEhbx5zm5wierMKTXVuwfmO6LLnCHhswWH8ErJ95GYfAIgAvwlt6A3WKPJF5e0S%2BUHwhBW2mswTyF4yVvGVLTuaiwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGZUxsaQc1URgy9UyrcA%2FQ%2FPWUcKb%2FIMwVGQIAmqOgGac%2BxUywL8MOkj544r5xIyZcYbBnBPZW79MzuTPwU7PL2Tw6wZGwUBj8jqMOtpMOogBXeZFovSLwKi8ifyqMeQ4qF%2FIlGdvO8eSvTD3EPI2Q5DSSWGb38NJCYbKsPJWgYCHrR3C4O4Bzx1hkNJY2XqJJr%2BrsQVMnQCgFJu5R3iJGAcDUp0i3FSKwguaMN1t5yPQRWwHyXw%2FPBddXWZTZ5%2Fg%2Fo5v5k9JxZ4c5LEa7%2Bz%2FupGZVZ2Xf49cu0fc8tdQCnYUYWJZ9pMzwOQ7N%2BsbefFFPRjesogBmF0HBdJSuJbSRRyqIxpxdtTNWSxveAJgOhWsWBtzpUijHmvuKXPa%2BUAxWSjmVtqOunxJs6%2BvaVsiLMLSTla%2B7Oerx5whjTLD2jAZNZZet3bwp6K0he4xaiYu%2BOsXeLmafRdEpoCG6tQuvgdn1R8SQh%2FS0bnN%2Bh5tJzcdwZ81VDUThjJDwGhNKAwsnOqnY0ocWWTAVGwEOhSr3kRgPwGpfAWdKuclT0d88bGNULI%2FBFEmTC%2FYs79IZXev6eli4Dn88zzeErE3%2BxjiurHozYpNNKaRkvGz1aZQT4gGNqbFDjz4l4M4ItYFITq7AZZ4sUamuxPEDlMOb61cQGOqUBkvT6hA4FkhKOBjHz%2BLFe%2FZ7Z3BggjthMbYA8q8xykAVDJ6vwUD38OoCkYDVjl%2FAxoLMk9szpWknPOlWZxvWBCmrKbg8IPBBeusHZshgMTPKhGtWOOtdf%2Bm91AwhC%2F%2B7pl0XCNwDOUj4Yc4hIe17WdN0bmty9sL%2FhhVMbxnXE1NEinAX6W465oyZYPFClL6LdjSg4LFPB3xUM9liXcJHxyd3%2BrpJ0&X-Amz-Signature=62a9a0aa2948917ca4fb0f210853b272ca712c557a4b95ce0395f1d4d01667d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646OUW3ZV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDEhbx5zm5wierMKTXVuwfmO6LLnCHhswWH8ErJ95GYfAIgAvwlt6A3WKPJF5e0S%2BUHwhBW2mswTyF4yVvGVLTuaiwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGZUxsaQc1URgy9UyrcA%2FQ%2FPWUcKb%2FIMwVGQIAmqOgGac%2BxUywL8MOkj544r5xIyZcYbBnBPZW79MzuTPwU7PL2Tw6wZGwUBj8jqMOtpMOogBXeZFovSLwKi8ifyqMeQ4qF%2FIlGdvO8eSvTD3EPI2Q5DSSWGb38NJCYbKsPJWgYCHrR3C4O4Bzx1hkNJY2XqJJr%2BrsQVMnQCgFJu5R3iJGAcDUp0i3FSKwguaMN1t5yPQRWwHyXw%2FPBddXWZTZ5%2Fg%2Fo5v5k9JxZ4c5LEa7%2Bz%2FupGZVZ2Xf49cu0fc8tdQCnYUYWJZ9pMzwOQ7N%2BsbefFFPRjesogBmF0HBdJSuJbSRRyqIxpxdtTNWSxveAJgOhWsWBtzpUijHmvuKXPa%2BUAxWSjmVtqOunxJs6%2BvaVsiLMLSTla%2B7Oerx5whjTLD2jAZNZZet3bwp6K0he4xaiYu%2BOsXeLmafRdEpoCG6tQuvgdn1R8SQh%2FS0bnN%2Bh5tJzcdwZ81VDUThjJDwGhNKAwsnOqnY0ocWWTAVGwEOhSr3kRgPwGpfAWdKuclT0d88bGNULI%2FBFEmTC%2FYs79IZXev6eli4Dn88zzeErE3%2BxjiurHozYpNNKaRkvGz1aZQT4gGNqbFDjz4l4M4ItYFITq7AZZ4sUamuxPEDlMOb61cQGOqUBkvT6hA4FkhKOBjHz%2BLFe%2FZ7Z3BggjthMbYA8q8xykAVDJ6vwUD38OoCkYDVjl%2FAxoLMk9szpWknPOlWZxvWBCmrKbg8IPBBeusHZshgMTPKhGtWOOtdf%2Bm91AwhC%2F%2B7pl0XCNwDOUj4Yc4hIe17WdN0bmty9sL%2FhhVMbxnXE1NEinAX6W465oyZYPFClL6LdjSg4LFPB3xUM9liXcJHxyd3%2BrpJ0&X-Amz-Signature=9e6a2e9e8458a01b00ce9b06d8dd751b7d8a22427760fb761f05c6952cf897f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWD775MW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCSmsyFsgRlODVKM1QjCqHj1y%2BM27F25IikcWRNUEuVsQIhANRvPoatfL6a1v629xOtxSdFbc50xc4bzTJrQiF0%2Fxa2KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySD39nLQc4eSDcf6wq3APgLeEqIgPj3esMmMDLQG%2FV3CqG4R54%2BT%2FpiQiQwf1y1FkiP7%2BAQ1%2BsEfDBi2IO3DNR0ktY3e1xPhxUNKU1gyABCbk37oYWFOFnmCeXF7mUYbAdnJ9bXQfReW5XkviWHDgm%2B%2FxKJkWSysxMUZv54kFhurGY%2BXX5pYtVNF1UXama4DZgTkAlKNBzBnsDrPRu23nSek%2BGgN13OppoJKO%2F75vAvvY%2Bjb11kxZII%2BHQz2ZpJTh9rEa5nEoV3YfNMtQ1nSd1vNmfSQdafFbRljeEdKqkj9WquA%2FH%2BILNNdTJED3mozXX%2BTI3XTOushavFU01KW8tCYoD7k7PiR7%2BrWf3kZjNzI2nIvJ%2FQ0eV%2BCUc8dhdTkrrz9HKh8g9oBalLfnYe7cql4PyH3rkMRhQ46O5sqPuriABeYnlZADhJkHTfiMmeJVnZsW7uG5TsX%2FpMja3DU%2Bby2zy1tEpDzw1OjArzjHX2xbkRmbEY%2FdCwZvHvp9gAXboC045UJTfyc7I5i6dNb759wSiMEfN4%2BPv4vaMxR1itZcOYcBAyrnyDDzYlJWAvx%2B6EyFXiq5Xbo2aWkFbTesZNwne4bUS%2BVkujPZHsoHI8C7xL%2BUkFjONDsuOZpVaJKc4WNipupsIvKg36zCa%2B9XEBjqkAaRZNpkC7%2BfxIL25tLy1b1utC5e22r%2FxpCbPX1yVbBYhUsMLK1agR2Rn5B5FUWD8CchwW4b77N5apQTaZ8xmfWTRwv%2FemsWWI8LydbE3RB5ksDcnLapUBhLyo%2FYTqRNK3semMfibpUxevX2X6IoMkppHBXpTC6oE9%2BAtNuDoQ5BVBCIun8zk55uhyRB44Z4Kbrhze43JYCzGTxRxUBrQdCIwHxIN&X-Amz-Signature=056b79d4b1c76cf7bec827b2a7cdf203ab486424d240adec247f87399fda9704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KLHTPLM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIB1Dn%2FRaziGx7AXTsYy2U1yB%2FzbBlG9QEwwUWouKoprUAiEA6Zs4mpCCUlNnwxtQJ6t7%2BZn6J%2BKptbvEcp4mGGO6GQoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5cBxXrLJ2ou9m7uCrcA75JBnXE5b8theBxAr28Hz9MWMXafw05OY4WiK0toX4zhJLzdDek7sqXQLYMCxM3%2BG8j8WRYsVh0yXN4CC%2FhNZWX7hqIAxw9zN69niiEWL0YJTuZRhvBuOpB%2F9%2FcMDGhHCa2l7SfI8wpF9FGe%2Fk188Nr8GyhXhluxJ%2B67KTvL6%2FCI1mNam0Fg4YXE1%2Fgq9JCE1u%2FjsOCzvAX561XsJdHp9oydte0NUPUs6kCakNCSOz8oocWRDCt76swblojpk%2F9NEGNKni0pKb4tynY3%2F4MQRtP6izPzxgPbyi8959q1knvJkfLDuVE9ZxDwG0vgySt%2BmeXb3axAnVku8Yh4Dx%2FtTvuJ4F0Hj3cBRHqdOweB%2BdyN4UusXD0FNkE110xRY9uGg1rxfqIm01D2BNjIjO5txSuxDGvabRvzoPSVx5Zt%2FnxV8%2BtUS5gU1Fe4%2BPRhTSBK24qJ6MY1Cw%2BgtQupT1A%2BuYpslNeGuYlnvHtu0LqsNQ2ppky3Mda1ytB6CBk2H3f76sDTZqw32hx4IxpyeK1PsJGCCF4Po5k4x7DesAvArAgkRcs9yvtMPtyuNnTyCkgUwdQb%2FjxRs%2FA7OqBNRcqtMelrkqwSWmyF%2BqsytOu4t4zKYayBelxDm0pXH%2FeMN361cQGOqUBvtPqrRCUIHnbsYhCaD0vS%2BqKHcGFPFE5CXm49JpYN3hYIa%2FdXDbyxuc3cimA31bmmqYUq72rzA2QnsCYec5ognuUUrSSjXSlXerEU9mMluCdSnEoWTcu277DZWeaMfx75yWJQDDCWNPcKKe1FAszNLfa7gl9mMpVLbImJ4dmu6yAxjPD%2B4C4%2BnwZfTsiRe2xV1aa0MFv6fulDNG%2B9y1LbQJvFBSP&X-Amz-Signature=78864977e742857de966ea4c3c5371ba66140a22dd32ca3f33163b10b96d3274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC7NCPRY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQC4EtnFZGq%2F0jPSBdZ3C85gkn3pHcMLJKEYPw4qdmOnvAIhAIJebJiyGdl8Bzprb5gpcvDg4zMqQ3mm7BjpByJHh5dAKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzobT7tn%2FyKYqCUP%2Bkq3APW9k%2Fw0xbITCG9IDew1spk%2FKXObHnHnmeZvEBL1iLCra8DN6bkXshjswbq%2Fy%2FBlA0k%2F8UmuWQSmSrirsOADvp55BVbZHncZbfFBq3uaSr9t9nrLczz9jsluLuWQiAOrkCCVqWFvmuVfvMlhahrFWj0CO3bzHrKsX8DFCp6QfvfQzr1eeMVxDMTNguump1SZya9nW3Vr%2F3w6ng7OOWv8WVoZ7rZJyUBL0FpRD3dYmZ9jVm26%2BYWI1HxOkMb5ZPUTK3w3cefuT4DKhCXCch3bChwb26tT3hA1ZehZUPBe3TbzIp2ayLBaCSiZvI%2BJpwsDJBSaDbnZzk58598F0lYNjqbZ01CQB3GYuHNpL%2F5i%2BYImoz3OwOQ79I%2FdpQ4brhmSL7bcEntKlUTLAcV0niVPW7F10mZf1SXRF0R3ogqibyGUUm3Im75mKlDX6AS8GIeGtS70cPFughLLZvtdzLi7eA3gxmumcNW6vCBsPkCXeNmRQq5FX3vjCh%2F%2FoYgoHk%2BelNzrYa%2FUC4rJ17dWIAb2Lzis5VYQXDVNBeqAzQwK%2B%2FacQxirU7i4jGioGzHECJx9DLPxAa2BVefJpS464mKuA1JpChrL8HO%2F2GK4U0fE9I08Bl5qJg6GSHq6UEbozDl%2BtXEBjqkAcpSkBIFXdQgc%2B0ulHMzPeyYjusrtbGp7pSKTa5kC7fvcxGFNBdE%2Foy2HaO6wXpGy99QjQFgZInx893oRoqpfCQfMH1voAd5gPPoQv6nV2n1YOcu%2FGHyug7PttiD4hoy4rS%2B2k6ReSELvUsaLX3Gw6%2FL8hrzw41IsYUIz5Fd9BBXNoctfgm7TNdrtKnmdHLheHGk95DEyx4f1hNPQavi7LXIdMgf&X-Amz-Signature=d6274139029e869859601e0145d35be990f3d9432e8b892738e535c742a8a453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646OUW3ZV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDEhbx5zm5wierMKTXVuwfmO6LLnCHhswWH8ErJ95GYfAIgAvwlt6A3WKPJF5e0S%2BUHwhBW2mswTyF4yVvGVLTuaiwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGZUxsaQc1URgy9UyrcA%2FQ%2FPWUcKb%2FIMwVGQIAmqOgGac%2BxUywL8MOkj544r5xIyZcYbBnBPZW79MzuTPwU7PL2Tw6wZGwUBj8jqMOtpMOogBXeZFovSLwKi8ifyqMeQ4qF%2FIlGdvO8eSvTD3EPI2Q5DSSWGb38NJCYbKsPJWgYCHrR3C4O4Bzx1hkNJY2XqJJr%2BrsQVMnQCgFJu5R3iJGAcDUp0i3FSKwguaMN1t5yPQRWwHyXw%2FPBddXWZTZ5%2Fg%2Fo5v5k9JxZ4c5LEa7%2Bz%2FupGZVZ2Xf49cu0fc8tdQCnYUYWJZ9pMzwOQ7N%2BsbefFFPRjesogBmF0HBdJSuJbSRRyqIxpxdtTNWSxveAJgOhWsWBtzpUijHmvuKXPa%2BUAxWSjmVtqOunxJs6%2BvaVsiLMLSTla%2B7Oerx5whjTLD2jAZNZZet3bwp6K0he4xaiYu%2BOsXeLmafRdEpoCG6tQuvgdn1R8SQh%2FS0bnN%2Bh5tJzcdwZ81VDUThjJDwGhNKAwsnOqnY0ocWWTAVGwEOhSr3kRgPwGpfAWdKuclT0d88bGNULI%2FBFEmTC%2FYs79IZXev6eli4Dn88zzeErE3%2BxjiurHozYpNNKaRkvGz1aZQT4gGNqbFDjz4l4M4ItYFITq7AZZ4sUamuxPEDlMOb61cQGOqUBkvT6hA4FkhKOBjHz%2BLFe%2FZ7Z3BggjthMbYA8q8xykAVDJ6vwUD38OoCkYDVjl%2FAxoLMk9szpWknPOlWZxvWBCmrKbg8IPBBeusHZshgMTPKhGtWOOtdf%2Bm91AwhC%2F%2B7pl0XCNwDOUj4Yc4hIe17WdN0bmty9sL%2FhhVMbxnXE1NEinAX6W465oyZYPFClL6LdjSg4LFPB3xUM9liXcJHxyd3%2BrpJ0&X-Amz-Signature=1a79d6db1853309d332ec8427efc494bd2b126f72f2b01ba91863b68eb63158e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC65RUSF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAzMzUwQoupegRcjcN%2BuEPiIH6YoTWzz58EhVeSjttTDAiAbL3MQGeELRdtP06GC9m60hvewqC6G%2FobKUosnkQXf0CqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBI%2FxIXfQz0SwiH%2FDKtwDuvSDJ4rW%2BOwZ076wtymQ7MQprlc1C5GM4j35Bnvw4FfWs2CnzdUQzzvSJHid5vr3IjCEGKHTYjjCck6Nxmm6yA40TNGmdtDNH7Uhl9GyvmbYQ9d%2FVPLvlFlq2shfhLTRR90LSSMGuh7XcrKIQUU1TkvpNnAYx5hjd2r9GjOyjt0uD%2BveMzE2xIBFexVauHWhNeAlavXsRWOnETDLBRjWukFGoOqjs3aZ99RFnha7VVXZNoxr82PBXf4r1lpEmJdAbXnZqBp%2FC0PNiIYvK%2Fvh31cKW9o6%2F98MSs2irtQ0dy57MUEQsBz23fApHl2Qcn6QVYXePRZQQoCNG14FWuVfdiMuE4xYFvnlN1Glv%2F62dSgRGXG0MZ0RmY3gf8Lf5%2FaeffeF5swg3QVl%2FB%2BjZ6fFPHFKra6rNqiUJijNa%2F8bMhNP%2B4DQ5FMbw7mlhGB4v9K0ric%2BtRJbIDJ11pWfDUeTJmxK6ZVPWhgtiWJ2KiEmJG5ib6KO%2FDjFyJackoWrBpVLiXaLITiLSfCFu00VXZ2xxWEEnkwywmaadd9VHaW0UI1M%2FujOdqScT1NFYqqhFmCAfelV8FGbE7WN2xF3oR1ODnI8EFqrsd6kgBll3US9aorTG3NzfudS6KT7GPkw3frVxAY6pgGhXOZxhQBj8UNn7ootOjHZpaC0c21SRKipOZSdeBOjkCXtYD0wovAFt81oNj0IKyAl8DndlJ2olYW0SMdA5rZQIwaGZ8qowhnK1kLpRtprccSb%2F9JD4W%2B1VmD2MUjqHpmciDFWTuELW1OLGy5jyhsg5aD0bOCZxtfJVHqAX9x3KRL7XrtlYcwSGPomx2Mx%2BOA6iedq7x3T%2F6%2BJ%2BhF3WLh9oPorgQ1D&X-Amz-Signature=06fcdd44379a0ef105fda760753e5e389752893938316b45b5434dafe7934915&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646OUW3ZV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDEhbx5zm5wierMKTXVuwfmO6LLnCHhswWH8ErJ95GYfAIgAvwlt6A3WKPJF5e0S%2BUHwhBW2mswTyF4yVvGVLTuaiwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGZUxsaQc1URgy9UyrcA%2FQ%2FPWUcKb%2FIMwVGQIAmqOgGac%2BxUywL8MOkj544r5xIyZcYbBnBPZW79MzuTPwU7PL2Tw6wZGwUBj8jqMOtpMOogBXeZFovSLwKi8ifyqMeQ4qF%2FIlGdvO8eSvTD3EPI2Q5DSSWGb38NJCYbKsPJWgYCHrR3C4O4Bzx1hkNJY2XqJJr%2BrsQVMnQCgFJu5R3iJGAcDUp0i3FSKwguaMN1t5yPQRWwHyXw%2FPBddXWZTZ5%2Fg%2Fo5v5k9JxZ4c5LEa7%2Bz%2FupGZVZ2Xf49cu0fc8tdQCnYUYWJZ9pMzwOQ7N%2BsbefFFPRjesogBmF0HBdJSuJbSRRyqIxpxdtTNWSxveAJgOhWsWBtzpUijHmvuKXPa%2BUAxWSjmVtqOunxJs6%2BvaVsiLMLSTla%2B7Oerx5whjTLD2jAZNZZet3bwp6K0he4xaiYu%2BOsXeLmafRdEpoCG6tQuvgdn1R8SQh%2FS0bnN%2Bh5tJzcdwZ81VDUThjJDwGhNKAwsnOqnY0ocWWTAVGwEOhSr3kRgPwGpfAWdKuclT0d88bGNULI%2FBFEmTC%2FYs79IZXev6eli4Dn88zzeErE3%2BxjiurHozYpNNKaRkvGz1aZQT4gGNqbFDjz4l4M4ItYFITq7AZZ4sUamuxPEDlMOb61cQGOqUBkvT6hA4FkhKOBjHz%2BLFe%2FZ7Z3BggjthMbYA8q8xykAVDJ6vwUD38OoCkYDVjl%2FAxoLMk9szpWknPOlWZxvWBCmrKbg8IPBBeusHZshgMTPKhGtWOOtdf%2Bm91AwhC%2F%2B7pl0XCNwDOUj4Yc4hIe17WdN0bmty9sL%2FhhVMbxnXE1NEinAX6W465oyZYPFClL6LdjSg4LFPB3xUM9liXcJHxyd3%2BrpJ0&X-Amz-Signature=e86a9a9922b9b0a9821ca7e16523e682b7ea178870a98fa2cfe9cb80b2412f75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB7EZWEZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDJ%2FdB%2B6nggjm3RVi20vvjFVAAadxQxTp1qeZnPAULziAiEAj9esmDzvKNFqtMTiNQ22ae0TgFLUhbciJGjmPimz4MwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxUITb8tHvSOuCZLyrcA0EsFOeXuczoSOq4i0PE6Olqrg%2BjdSOzyPCurb%2BQgwpdVmXCYOigPolFcd7myNbP2LO1mUKl2JX8EvQl%2FVwG%2BqsrNYQUTRCehPBLNuYAEbqRm3PAl87BAZWvaDnUM0SF%2Fu7qkIolcbSdD3cesEA3PMTFxBFCjhJwVGOLk2HVbbbJID5%2BJgprA2NtSjM5X6HvaNacSFqqspAXuP7EfIwUlx1EM%2BbtBKHmSLbUvI%2FgFxoH7DHRaWyM4YTGqr3UAD3Vq5%2BWryo3uoJjtj3Ih%2By4jyo41PsJ%2FCFTd%2FqSW8A8DIAZoID%2BL5x%2BImMDwTB6nWVWnPTfjsKtRpcslpQ7QzcLmS%2BfcMreXcrgbrNKgmPxWrVPoHDUwHC2gGdnTB4yYEcnwbMankGHLVp7VDSXo9qHc70VYck4xZpR80qfG%2FHXQ%2F5yqR%2BaIAbK9fTG876zFioGFNKGHD2xO4UQsdiexLU0oiy0wMU1i6AyLliAHl0%2BcZhol0%2Bb2LDM6Fv5lJb3vCvurvtz5oOr4V6waUnyS4xp3e%2FaVqX%2BSPU07Q3XYD0Mw7tmUkFutwXyLDb%2BdIQCI6zEMqUNNOdvFEIXJ6zt6kZRvAL4RR79Hy5IfCyR2bwFT2%2FF190V6X3SY5KmZLL2MJr71cQGOqUBSSY0d5ImAsn2Qdfni3Q6Xp6odD4xnOwHI1AIGek3f7S3IAyiCgZtr8sRr%2BbiWuYDx%2Fmue1UI7f6D9qx%2BJwPWALaq651x1h2NAD0AwVxAPwyFUjl5h4Pgi%2B44Y8KWePkIZQdT9SAhq1gmA%2FPL8yTVEfZTi80BZf6DeIbil3QyEjYNzTLXfTJmbgb9TKIkePSouSZcS8U1GVXRhqIdz1Ea4kQlGAd%2F&X-Amz-Signature=a1e54826b12bf8900ed44342195d7f19c8fcfde0a27613d35eed7248a4e941b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646OUW3ZV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDEhbx5zm5wierMKTXVuwfmO6LLnCHhswWH8ErJ95GYfAIgAvwlt6A3WKPJF5e0S%2BUHwhBW2mswTyF4yVvGVLTuaiwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGZUxsaQc1URgy9UyrcA%2FQ%2FPWUcKb%2FIMwVGQIAmqOgGac%2BxUywL8MOkj544r5xIyZcYbBnBPZW79MzuTPwU7PL2Tw6wZGwUBj8jqMOtpMOogBXeZFovSLwKi8ifyqMeQ4qF%2FIlGdvO8eSvTD3EPI2Q5DSSWGb38NJCYbKsPJWgYCHrR3C4O4Bzx1hkNJY2XqJJr%2BrsQVMnQCgFJu5R3iJGAcDUp0i3FSKwguaMN1t5yPQRWwHyXw%2FPBddXWZTZ5%2Fg%2Fo5v5k9JxZ4c5LEa7%2Bz%2FupGZVZ2Xf49cu0fc8tdQCnYUYWJZ9pMzwOQ7N%2BsbefFFPRjesogBmF0HBdJSuJbSRRyqIxpxdtTNWSxveAJgOhWsWBtzpUijHmvuKXPa%2BUAxWSjmVtqOunxJs6%2BvaVsiLMLSTla%2B7Oerx5whjTLD2jAZNZZet3bwp6K0he4xaiYu%2BOsXeLmafRdEpoCG6tQuvgdn1R8SQh%2FS0bnN%2Bh5tJzcdwZ81VDUThjJDwGhNKAwsnOqnY0ocWWTAVGwEOhSr3kRgPwGpfAWdKuclT0d88bGNULI%2FBFEmTC%2FYs79IZXev6eli4Dn88zzeErE3%2BxjiurHozYpNNKaRkvGz1aZQT4gGNqbFDjz4l4M4ItYFITq7AZZ4sUamuxPEDlMOb61cQGOqUBkvT6hA4FkhKOBjHz%2BLFe%2FZ7Z3BggjthMbYA8q8xykAVDJ6vwUD38OoCkYDVjl%2FAxoLMk9szpWknPOlWZxvWBCmrKbg8IPBBeusHZshgMTPKhGtWOOtdf%2Bm91AwhC%2F%2B7pl0XCNwDOUj4Yc4hIe17WdN0bmty9sL%2FhhVMbxnXE1NEinAX6W465oyZYPFClL6LdjSg4LFPB3xUM9liXcJHxyd3%2BrpJ0&X-Amz-Signature=2f3bbd7b3ccf9b7fef912b1e550ef2cb81b790800f147828d5d86eca70c489fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HROIFFN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCEjd%2FEgh2BrfufOY9%2FAnrloPPQ6MYVcOf1JRShd%2BB%2F1wIgPyeGLKacGsLS9BwkpxkBtnLVxE7oa1LYj9cg6asOdy4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsWbQMsPP9WssVMCircA0IN8xKSKFbShsK27HyOMtbtkwGO0tHQ%2FDwWcvnKY7YWvv1AAxNTBIZ79YxlU%2FNufs5kbFu%2FpOwmCxN0R9MBrurvuAFVM9zWkVFRsFAcdtYsxAA9WkLZPKeRqaH4%2F6VgqRrnfh35Tmkw8TSByj1upgDpAxcGZY7T9DFQ%2B0PxAl056BPbK5ldAykpaCEUAnNKdeQgnO0wLTBQHTqsHkaQBctOAMUqKGhRHYfugGDbDQpdX6SmMs8DZUbw24ffKwkhfLAz1twO1HFC31R6L59gCrRuf4Mga0i2FHwQSLPbctYCVHmGYINkG9k2Y7mNfA6AAIhz03KeV8ZPKBjOM0VKZlswHnePfn9xUIS6AXLBzFIQKPNVwNIenWIkxtfR3cZgCNAfveoyK32QOdOdZ7tsXvocXKcKYh1F8D9xM7%2BDtgI6R9eAfLxJ11B9JhM0l78DseL5hCUuV1x99%2Fba1A3MgQVTeZONpnACwzbbTy3cL1hSrT%2FZT%2B509napz0zE3KZ%2B0we%2F1%2BK7%2BNnc6%2FCmzMkDqJ2s78S9bjvsay7fn7WFr%2BW7AejuEEpnzx7%2B2CbPdwbWWHrjGe%2ByFY831DNqmr5ONZADS7AbuBHLPP33UFk64ZTD51n4rYg8J4oWZReMMN%2F61cQGOqUBH2B2hTPsNuADOkAIyMYQmRKHWMZTXqCcMSve83%2F3JQzYINfV60rm%2Bh%2BcU35fhmLguDAXJEmWTK%2FJPhH920%2F%2FAvHPum2m%2FSCka1J9PAT0ar49YuEGCiOzCSfIa8nBoQGMVFK8hrcrTcdHq2b5XyoWnejCwul6NIt1ioNG2BsiUq8J92UIOu0DzjJH9f8YZ%2BF5PMssGQmcyYv0zNaooOOWX6o9%2Fd%2Ft&X-Amz-Signature=d9331e516d7221ddf4493ab698c8658a8e3a40929d0dfe24eeaf6e7a03aa2dec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646OUW3ZV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDEhbx5zm5wierMKTXVuwfmO6LLnCHhswWH8ErJ95GYfAIgAvwlt6A3WKPJF5e0S%2BUHwhBW2mswTyF4yVvGVLTuaiwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGZUxsaQc1URgy9UyrcA%2FQ%2FPWUcKb%2FIMwVGQIAmqOgGac%2BxUywL8MOkj544r5xIyZcYbBnBPZW79MzuTPwU7PL2Tw6wZGwUBj8jqMOtpMOogBXeZFovSLwKi8ifyqMeQ4qF%2FIlGdvO8eSvTD3EPI2Q5DSSWGb38NJCYbKsPJWgYCHrR3C4O4Bzx1hkNJY2XqJJr%2BrsQVMnQCgFJu5R3iJGAcDUp0i3FSKwguaMN1t5yPQRWwHyXw%2FPBddXWZTZ5%2Fg%2Fo5v5k9JxZ4c5LEa7%2Bz%2FupGZVZ2Xf49cu0fc8tdQCnYUYWJZ9pMzwOQ7N%2BsbefFFPRjesogBmF0HBdJSuJbSRRyqIxpxdtTNWSxveAJgOhWsWBtzpUijHmvuKXPa%2BUAxWSjmVtqOunxJs6%2BvaVsiLMLSTla%2B7Oerx5whjTLD2jAZNZZet3bwp6K0he4xaiYu%2BOsXeLmafRdEpoCG6tQuvgdn1R8SQh%2FS0bnN%2Bh5tJzcdwZ81VDUThjJDwGhNKAwsnOqnY0ocWWTAVGwEOhSr3kRgPwGpfAWdKuclT0d88bGNULI%2FBFEmTC%2FYs79IZXev6eli4Dn88zzeErE3%2BxjiurHozYpNNKaRkvGz1aZQT4gGNqbFDjz4l4M4ItYFITq7AZZ4sUamuxPEDlMOb61cQGOqUBkvT6hA4FkhKOBjHz%2BLFe%2FZ7Z3BggjthMbYA8q8xykAVDJ6vwUD38OoCkYDVjl%2FAxoLMk9szpWknPOlWZxvWBCmrKbg8IPBBeusHZshgMTPKhGtWOOtdf%2Bm91AwhC%2F%2B7pl0XCNwDOUj4Yc4hIe17WdN0bmty9sL%2FhhVMbxnXE1NEinAX6W465oyZYPFClL6LdjSg4LFPB3xUM9liXcJHxyd3%2BrpJ0&X-Amz-Signature=236120ef7ee15a6d855ed3b73dcf048e92fd07c8615aea9cbdd669d94fa6b4cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYMKONLS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDr244Hz3UxLP5a2v0cKPxN5jLAMsjRaJAO1NSCYiX66wIgA1hx5Z5wput2SWzLizEJsfIUsyukSrG%2BHFkHPM%2FHbD0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BYhFk9hxa8rDSh%2BSrcAyqlOcuilMRfpXk4WZfVYdvXrK7qbn9zqzKGW0cmH4J%2FqckxA8bxndVVL7KbD5oagUxJReIqQGHSiWbS9%2Fh7MfEuSmG1Xm4tVLHcPtBGFXEQAfCa1IOE4RkNAY1yfGtmk9Nlc8GqfHBYh%2B3Rn5a6cTa9sV%2F77%2FOGPBEJzx2Sfk1NfVqWaBxwPtHpZan9ninTqC%2F0QC3uq8fSFd7l9gSblkIH5YDGDQIIN%2BwkrS92H2%2FLGeXeV2X9YFc7B%2BP6t6%2FVc43Um2LLf9%2BhB%2BELXEydMfZEx9hWZPhJPqe4crMqy815cXV2vc0t7ummzCXIt0ROGAjIF0Y59PjWjmsZNljaG3Sz2ubDbqq5BtbnSQf5UOpWIXusU%2BadFoK4znysJ7k%2FG6y3Y9sCYQ%2Ft8RQXAbPD6aNOa8VYQub6ibkIESqe28WmAd7U%2FcQKCrYRMS1FXUp8vXV4mYhYWSb23zeIYG1usQBMXIhUlf63LBgR1LeYmNK88sZTZdSUE5ZWKr4wXPW3%2BGREnkrOE7J7SDzKwo9OUrYKszaZyUBhDCDklYQ5nEu0VlBOZMU%2BFz62IBNLtFn1kWZgJtwT80SSRHxez%2BhtXT9egMJoUHUZEFKdyhR1l7jfDbseptgZ625TUrtDMKX71cQGOqUBo5gPP%2Fkc06PUka2kZsV%2B8d9J%2B5TjGlbDglcMitGq7XBOIplAYDxDclrTfnzVlHAusVpfeRyV%2F6a4Ld7Aw8x04YgCt4t6YyN7r8l%2FFJhtICd1e2TpJzfG6C3c3d17LZJ9meThkrfhf2VslAstyB7LDTH1grmiCxij6A%2F1I6dQn5EtQzxt7UHv1ULoQXPzvnx2V%2BvLHIxgFUHSdbcmfXHW5olJgImm&X-Amz-Signature=42748be81a5c113b3f84f8089d8e2acbca8bb04621dd1e54ac0c2e589fa6f9e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z56NDPAO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDZKmaw5lPVvZEZt0DebbCiE77%2FyqLBargmV8l29CpmSQIgA58J%2Bw0pblMAqM25nmJHeQiahwjnBW4%2FFUY4MQ5QCnkqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAoO%2F1fxgug0sCvSSrcA3v8Tid5NCZ3FSsC1cwynBqFbZwhnsiSnnK2mI8juFiirwbbc9JNHOhFdzgvGeEWKzmFXzq%2FtSjZtcBuCG5SkMJDJhKez4E0WO2WIbwey45gRPkfVmNFg5V5VPvuqRtA7CdyG6oBMubw5UBxHm6nVC08wewHvhaNsgUDphqk0FxOZ9EyzwvG6sCsrAIUiAnDcRGRa3UdWYQlJM3OfLho8NAVmSRHQAb9RgSsmxPnGzbNcZYy7kC9Q5iiQxB0hgNhMe7jLmJvgbx1NCkNPwyv6sGBl%2Bz6O2IFEPCOWA9lNNWlg5iG2PAfwwSiX0tP4HzyQv%2Fq5o7CrsVRA1PfoPwJLr%2FR%2FmI1o8H9%2B2X676A44dDSkQiaTUPWUA0JUDiLDMg%2FrcO8ALXZ6w0XCTvrCdixC3QDHGf5nIAlj1t3Jn0B24hqaY8UXSMkD%2FeGOsQVkWz8PDPeCuwa7rrdIAeJadhlSgS%2Fvz4M3jHIakP2KsFKX%2BasBceaXi2FrT9i4BM%2BvLdY0TfV2JbpkXzUySGHDvtgDsuQGJLav3LJ2Uyv2%2F9UPOqBRYMXzSu6LLSfuPiBxtF8L6316ZuGTy3G4P7bzaxKhJRrS0u34hhOPb3rUIUbZuMJOPnfL6I%2BNvzr8tf2MJ361cQGOqUB%2FqlwEidYUij0hzk3hKUmbwONHFOtyvqNlN1vAY8AHiNvFQUYb%2FGCAhEy7LiRNws%2F8KuXNIiwoCW%2F58d%2FwJiDa%2F1VfBtEnEp%2FQLRl3GmUCc1y6C4uExzFbGwKlDKbcgBXM78iuwbTlMEEvORwNHRCXZgj7b7Pk6GUJKPUMwS4MvUnisVO6M9B10451Ly15y3QsPIZAbAq4upeEXiGGD4Ux6Z2z%2BlB&X-Amz-Signature=383551a77efac591f40cfd79939cb8aaaf9c39b135668b0658e769da0c03c84d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAMUQPZX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIFkNStUFRzaMSaA9subZybogqq0cQPW%2B3Khg4VohfbSGAiEA%2BJ%2BGRBMVyBOzDPyeUuZkEpFPWComR3vCPA9LuYFQiG0qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBFhDd%2BFQdj5%2FrSMSrcA6IB2ieBdRm0MJTDeEj%2FZftAEZAeGdURKrv91fElAUprkV5W%2Bv1C4EzqpwStbbVdRnYmH%2FTwcDrcwOXKv7ZUgEsJaVsEomDjOmxPh%2FU5OJn%2F0HCPAmSvAsEomavIdpGq7APANEgiZJMXK2Kq6%2Fe1A5b0snTGRWFl531YkmPndhECSMtzxuQG3PPrfcHF7VO5xZ0Vo0T5YqPEXw1PO5ho75j8603Eq%2BB2nFSrOgLzP8waakGhC1ESmVGF1GuENn4VQ6eHJYJdJkV9KYQuaMj6SlW3omXlA6eM0IlPWloPsb2rX8G0CLiNAq%2B3l1FYxs0QKdXTA6Zo29QK6CqBywVIBVwNeTg1rCi84fZvsTHicyR%2B52YCi5LSszcfZtpOHP9CY9%2BOzZS%2BiUT7C8WEqHeHgROdE3domriloRw2HTpK2XXg%2BU5lX5fW5BWvpE3V48w83eR%2BLvI0p7BZHXt2PDYyxBKuUw3EO%2FZij0cA2K6pgAtNYr2tZL89mYUFlIoaVgVeY9oKLspUntjztLqJN835JzV8x%2FqRHdsAZvlVKnCibwD8KtbkPpSTArcav5L969F25%2FqAl1TCpXKQ2oZLUi985V2F746eAr2nGSo5JCsQPtvBpCNtlvGNatYHvRUaMKX61cQGOqUB8fl68tcAPLqMC79MNj%2F4LIdTJFybK1%2BSmgl49PvrJCusNcTRW7gWpCYVTpxy32K%2BHOGWVv2VJ12tA%2Fm858lllZnrbf6vX4J%2BDK6Z4flcnTmEryYOiUe%2FrmP8lcjnMRopsbB%2BRK8DnJOa0HP%2FY%2Fikvv8oOPsNz521gkKm1IiwVT1HOg2Xqvf%2FmvuSLojgw5NwnzVDouXMeIxrFy8CkYyhDttUvHGS&X-Amz-Signature=84b691fa36e29e693403d9a38817980afd77f0e8cd9ec3dae386fdc5e1575d5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EHOWECV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCsK1oylpQAVYXePTi6EQvZevhs3In2P6d4deATzLdSbwIgNs4F8Q3lVCgUkznb3q35wAdfAb%2Ft29hwGApYYoM8WCUqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGM%2F3jK3P%2F9g%2BvsJryrcA1%2FIZDiSA3EQkvqHQcmweKAIurIarvM%2F97tX7eM02FUfeoZ40kuqTvd9AlxEYmZD5eBTzN3eiHPnPQpa80XCcbXbx05TE3iTl%2FH8Zeyh1iQCUOd8DmCb9OSGMi9LupUE2pbR9JY46ubDn91BV9PPsLboP7yVNvONfxlhuFshHYqZ2hH35Bo8co6%2BJWyuGkWULm0Pxa%2Bi%2Bm7T3ye1zPMhJfRzewLQuTCnxW14vBG%2FOoT13Y%2Fc5baDmIOAJqMIC9v78upu1URtdzz41fnes9UxVbKgSLbX0NRt7VMKXQAadyP2nxqaEQGbym1uGt5lioJZAVCQXwLc88VqpfsyuS%2BVCexXk0J7bI3WtPJwIj%2F8bE3w9g9h7Evba7aLgJJtSSNcdV8zV4%2F8NsdJf0320k9HFoicMdcQejp4kOkURmGXE5bnNh1c0j9E%2FUx4duqP9ruEmShiiLjn9k57gaQZ8lfgJPbYQXJif5tyEdcgwLAsB%2FyIE%2BWpKtCEGyUrUMoOv7HUAhc6l2%2BmGBZmrkl3u6l273HsJFHb%2F2Z%2B5ucIwOLfX8ny0h4O4VCBKydPaHJUgNmmi1fHTidL662lJJsc0b55JLqwkjcobo7JNdFqP3q9KA47Zau1%2Bz0nxY5Kw4kBMJr71cQGOqUB7uRtU2glq5t%2Bi5cZFD6kyZT2lpdmiYpJ1WSusI4vX6KosnMOnQYzkuWwaSqLAEM93goididKnoD0yVL8AIZlTw1owB3q8dSEXJkmzPl%2FnnK%2FfUvM22kENuJ%2BK5pMaQK%2FxpTzS4Kz7BHV5CWkz6jQ62aTGENIQUxTUG%2FXBgMCBGmyrdLdzHIJ0OCBo3ZLTJeKfeYjm0KK4qqC9Yt9%2FuSnGZLLJWqF&X-Amz-Signature=5fe57f2a5f5f610b0ebdea000da99e2e66e39ee90f66d99c217c76e47c133650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466744A6T5X%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIEvNZjnTeHyAULUev2Da1p8oXCjsYLM%2FTF49H16Ahx%2FXAiEAwksAYoPRN3CvZFXH5Zaj7eiohTOKtp4W7vPRXUz%2FwpoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7fPNPsUiYDUdv9jSrcA5YAGGTF5jiYGoWFeBYSecOU4oeX5Bo%2BhgK2Zuim7Sgn4VuCfYfi6beWvCkGla0IrSZbc4PsIi7wH5J9p6dLZfIhQkPLwumrG5GAHamxtZXyUaPxaV9XowqfMWTInny3KdUfwiEEKAvsDl%2B3p1i2NPYMlXTWgXSqsQeNZcs7CdvtRDs33xLpttAFAhLoKGo5fJ6VJK1ovNNF%2FJre5UJgcu%2FA9%2BuCe5uzWHCp8tXoV7I%2BXdNYPu0Tp75UcU7R38kaaXhBdUCT1%2BODvF1Vcz9EwwfzwMlMAVCLIPvWQIdYKmYCHFmUU0KdIROiaWgvC5rXUOIWqokhNKsh3S0%2BFNJd4BQCiDCkYy7mLY3kdTaHkW6N9UhLo1tlT3MeyasS5ZPGNbfc1YWgwNexocm12YFkhsoc21cUFr4Q7%2BqtxQ3%2FBo6JisOko1Gy3SbrKJeH5cSb%2B%2FgQjIIbPSThKrBXchA8uYD3Ymc5ksQ8RoJd5NbaaTJBQxjHwB2yB5J%2FWQJVm5Ltu3JMrj9nEXhCByncW%2F5TrFxIu8o%2FUh4MK7b9ROC9vxiM8W5AF9cLtyGWjn7qgwNvrazqa5UPLy9KVIvfWFR5c5NowqVbHtpT7pkUsW5UxSf%2FXbcn%2B9kHgYuEvyNsMN%2F61cQGOqUB1U3vxbUbrg3OUEuA2UowsgI7LyQT1iXp4UZighGVnM40FTxMy7QwbRIFv5rqmBIQU3jFeF6e3EU49W5YSk3JTxfTwhZIzz6EWdJdUCziyPwfxFf%2BFGKNWDyruwuXDrkAf1m2%2Fq%2FZBvnj0ugeNW0lPGleeuvxsAHnQDk43PyH3L0GsIrwN3XiNGtY6tLiD9sKHTO18bLGdWV8%2BsOZCKwZpGriSe4j&X-Amz-Signature=e3f8df87ad72ab79ed4be105b5c12f54a3bd106dae466045045d6c36247eb019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646OUW3ZV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDEhbx5zm5wierMKTXVuwfmO6LLnCHhswWH8ErJ95GYfAIgAvwlt6A3WKPJF5e0S%2BUHwhBW2mswTyF4yVvGVLTuaiwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGZUxsaQc1URgy9UyrcA%2FQ%2FPWUcKb%2FIMwVGQIAmqOgGac%2BxUywL8MOkj544r5xIyZcYbBnBPZW79MzuTPwU7PL2Tw6wZGwUBj8jqMOtpMOogBXeZFovSLwKi8ifyqMeQ4qF%2FIlGdvO8eSvTD3EPI2Q5DSSWGb38NJCYbKsPJWgYCHrR3C4O4Bzx1hkNJY2XqJJr%2BrsQVMnQCgFJu5R3iJGAcDUp0i3FSKwguaMN1t5yPQRWwHyXw%2FPBddXWZTZ5%2Fg%2Fo5v5k9JxZ4c5LEa7%2Bz%2FupGZVZ2Xf49cu0fc8tdQCnYUYWJZ9pMzwOQ7N%2BsbefFFPRjesogBmF0HBdJSuJbSRRyqIxpxdtTNWSxveAJgOhWsWBtzpUijHmvuKXPa%2BUAxWSjmVtqOunxJs6%2BvaVsiLMLSTla%2B7Oerx5whjTLD2jAZNZZet3bwp6K0he4xaiYu%2BOsXeLmafRdEpoCG6tQuvgdn1R8SQh%2FS0bnN%2Bh5tJzcdwZ81VDUThjJDwGhNKAwsnOqnY0ocWWTAVGwEOhSr3kRgPwGpfAWdKuclT0d88bGNULI%2FBFEmTC%2FYs79IZXev6eli4Dn88zzeErE3%2BxjiurHozYpNNKaRkvGz1aZQT4gGNqbFDjz4l4M4ItYFITq7AZZ4sUamuxPEDlMOb61cQGOqUBkvT6hA4FkhKOBjHz%2BLFe%2FZ7Z3BggjthMbYA8q8xykAVDJ6vwUD38OoCkYDVjl%2FAxoLMk9szpWknPOlWZxvWBCmrKbg8IPBBeusHZshgMTPKhGtWOOtdf%2Bm91AwhC%2F%2B7pl0XCNwDOUj4Yc4hIe17WdN0bmty9sL%2FhhVMbxnXE1NEinAX6W465oyZYPFClL6LdjSg4LFPB3xUM9liXcJHxyd3%2BrpJ0&X-Amz-Signature=691de236c6ae5832f73828f0de308aeb1a532e842770bf140eca791214b6eaa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646OUW3ZV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDEhbx5zm5wierMKTXVuwfmO6LLnCHhswWH8ErJ95GYfAIgAvwlt6A3WKPJF5e0S%2BUHwhBW2mswTyF4yVvGVLTuaiwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGZUxsaQc1URgy9UyrcA%2FQ%2FPWUcKb%2FIMwVGQIAmqOgGac%2BxUywL8MOkj544r5xIyZcYbBnBPZW79MzuTPwU7PL2Tw6wZGwUBj8jqMOtpMOogBXeZFovSLwKi8ifyqMeQ4qF%2FIlGdvO8eSvTD3EPI2Q5DSSWGb38NJCYbKsPJWgYCHrR3C4O4Bzx1hkNJY2XqJJr%2BrsQVMnQCgFJu5R3iJGAcDUp0i3FSKwguaMN1t5yPQRWwHyXw%2FPBddXWZTZ5%2Fg%2Fo5v5k9JxZ4c5LEa7%2Bz%2FupGZVZ2Xf49cu0fc8tdQCnYUYWJZ9pMzwOQ7N%2BsbefFFPRjesogBmF0HBdJSuJbSRRyqIxpxdtTNWSxveAJgOhWsWBtzpUijHmvuKXPa%2BUAxWSjmVtqOunxJs6%2BvaVsiLMLSTla%2B7Oerx5whjTLD2jAZNZZet3bwp6K0he4xaiYu%2BOsXeLmafRdEpoCG6tQuvgdn1R8SQh%2FS0bnN%2Bh5tJzcdwZ81VDUThjJDwGhNKAwsnOqnY0ocWWTAVGwEOhSr3kRgPwGpfAWdKuclT0d88bGNULI%2FBFEmTC%2FYs79IZXev6eli4Dn88zzeErE3%2BxjiurHozYpNNKaRkvGz1aZQT4gGNqbFDjz4l4M4ItYFITq7AZZ4sUamuxPEDlMOb61cQGOqUBkvT6hA4FkhKOBjHz%2BLFe%2FZ7Z3BggjthMbYA8q8xykAVDJ6vwUD38OoCkYDVjl%2FAxoLMk9szpWknPOlWZxvWBCmrKbg8IPBBeusHZshgMTPKhGtWOOtdf%2Bm91AwhC%2F%2B7pl0XCNwDOUj4Yc4hIe17WdN0bmty9sL%2FhhVMbxnXE1NEinAX6W465oyZYPFClL6LdjSg4LFPB3xUM9liXcJHxyd3%2BrpJ0&X-Amz-Signature=8af9633e3975f5a204c5a13bfaea1a3d8c91b77c08dee27fe2181b701225b167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYRK5RQU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCQaa5%2FNGOOjDstAyEvj3hiIDhcA1MV4ABFvves%2Fm2DDAIhANp4S5iy3gPpMP4U67IM5w5HIJfinG43ylKXLVZ4QHR8KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyF9lweHZMoeP%2FEs%2Boq3APkYZ3EWXWfTYfkOBjZSa2NiVlnny%2FvhK3rxL8Sm26Ypa27yx1RW5c1Tc7LZFq4vKM%2Bi03qQhBzbiB6fgo4KPW7xtZM7MeDtZcPFP%2F%2B3G9QSsXkc3dSNi1k0SWNxesDTc0ctPo5ut45n8sne6Aw687xzHMi1z%2FmgzTmEjJGMceeM6pFazERK%2FQvh4GZ0papRnCsinKUYl21uOmCfLX99Xu3E6e4Jflkjttn1c39ra8QyNLJyExv21%2FAMC47c5JvczzAdVsRbTflxu4J0J5ufdr7bAWDKu6d3zno%2FFIsweSux8OYXIu8swY9QeCltFXKJHfkpqqtzonvUKprwFKkzysclAXxdQoDT1HoKU6I7uCljCcqMkDiXNBdB1%2BYk22Wc5VZvZa474JlW0yZYrID8XwJuQHZWJqlTTUNIPi9ixS5z5GpmpjPzV3ZXC58gNjl4BctVStdQXfiH4%2Fweu0RWv3xwvUShRBNCb5gmY2VKc8ExJjMtSiOCZzeowbjWikmpBO%2FadUjuAvMoqMy1htD97Shql6gS3f1OOF1y%2BUjC186%2FNvBkqeA0HeraWwcZXNzxonh5TdXIibxTPqdD7THNx11EytEMLD5CXYxlDRLxOofNux0pzjY27guZy4pUjCP%2BtXEBjqkAZV5IPjI9DYAv9zP3iZHuRj8nqMD%2BSvcGBvHqqbrurKyloBHPHk8zd2PAesbz8OWGVdNs0vR8mY9BtoB1aoudBgttah0OGfAoz1Ykail460r7C6Edc2eZ6RS1T8IgUzIXxLZ6G4j5sN3W1I4g9ivd73fLHPzM%2Fo8mSn4CH6Wmr2GXwXG%2BZwuZuMgBGXoQ1S6W7RfpcXQIlSRtypJLeD0%2FKi50IH7&X-Amz-Signature=3e227a6b0abebec8c95fc4b9c22e82b9c9c9eeaa6c0d488665ea35256a25edb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYRK5RQU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCQaa5%2FNGOOjDstAyEvj3hiIDhcA1MV4ABFvves%2Fm2DDAIhANp4S5iy3gPpMP4U67IM5w5HIJfinG43ylKXLVZ4QHR8KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyF9lweHZMoeP%2FEs%2Boq3APkYZ3EWXWfTYfkOBjZSa2NiVlnny%2FvhK3rxL8Sm26Ypa27yx1RW5c1Tc7LZFq4vKM%2Bi03qQhBzbiB6fgo4KPW7xtZM7MeDtZcPFP%2F%2B3G9QSsXkc3dSNi1k0SWNxesDTc0ctPo5ut45n8sne6Aw687xzHMi1z%2FmgzTmEjJGMceeM6pFazERK%2FQvh4GZ0papRnCsinKUYl21uOmCfLX99Xu3E6e4Jflkjttn1c39ra8QyNLJyExv21%2FAMC47c5JvczzAdVsRbTflxu4J0J5ufdr7bAWDKu6d3zno%2FFIsweSux8OYXIu8swY9QeCltFXKJHfkpqqtzonvUKprwFKkzysclAXxdQoDT1HoKU6I7uCljCcqMkDiXNBdB1%2BYk22Wc5VZvZa474JlW0yZYrID8XwJuQHZWJqlTTUNIPi9ixS5z5GpmpjPzV3ZXC58gNjl4BctVStdQXfiH4%2Fweu0RWv3xwvUShRBNCb5gmY2VKc8ExJjMtSiOCZzeowbjWikmpBO%2FadUjuAvMoqMy1htD97Shql6gS3f1OOF1y%2BUjC186%2FNvBkqeA0HeraWwcZXNzxonh5TdXIibxTPqdD7THNx11EytEMLD5CXYxlDRLxOofNux0pzjY27guZy4pUjCP%2BtXEBjqkAZV5IPjI9DYAv9zP3iZHuRj8nqMD%2BSvcGBvHqqbrurKyloBHPHk8zd2PAesbz8OWGVdNs0vR8mY9BtoB1aoudBgttah0OGfAoz1Ykail460r7C6Edc2eZ6RS1T8IgUzIXxLZ6G4j5sN3W1I4g9ivd73fLHPzM%2Fo8mSn4CH6Wmr2GXwXG%2BZwuZuMgBGXoQ1S6W7RfpcXQIlSRtypJLeD0%2FKi50IH7&X-Amz-Signature=7bad119fd75d1bfd72cb10a8abcc93d6ab6b529a8bad11207f9a35ff31811bd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYRK5RQU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCQaa5%2FNGOOjDstAyEvj3hiIDhcA1MV4ABFvves%2Fm2DDAIhANp4S5iy3gPpMP4U67IM5w5HIJfinG43ylKXLVZ4QHR8KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyF9lweHZMoeP%2FEs%2Boq3APkYZ3EWXWfTYfkOBjZSa2NiVlnny%2FvhK3rxL8Sm26Ypa27yx1RW5c1Tc7LZFq4vKM%2Bi03qQhBzbiB6fgo4KPW7xtZM7MeDtZcPFP%2F%2B3G9QSsXkc3dSNi1k0SWNxesDTc0ctPo5ut45n8sne6Aw687xzHMi1z%2FmgzTmEjJGMceeM6pFazERK%2FQvh4GZ0papRnCsinKUYl21uOmCfLX99Xu3E6e4Jflkjttn1c39ra8QyNLJyExv21%2FAMC47c5JvczzAdVsRbTflxu4J0J5ufdr7bAWDKu6d3zno%2FFIsweSux8OYXIu8swY9QeCltFXKJHfkpqqtzonvUKprwFKkzysclAXxdQoDT1HoKU6I7uCljCcqMkDiXNBdB1%2BYk22Wc5VZvZa474JlW0yZYrID8XwJuQHZWJqlTTUNIPi9ixS5z5GpmpjPzV3ZXC58gNjl4BctVStdQXfiH4%2Fweu0RWv3xwvUShRBNCb5gmY2VKc8ExJjMtSiOCZzeowbjWikmpBO%2FadUjuAvMoqMy1htD97Shql6gS3f1OOF1y%2BUjC186%2FNvBkqeA0HeraWwcZXNzxonh5TdXIibxTPqdD7THNx11EytEMLD5CXYxlDRLxOofNux0pzjY27guZy4pUjCP%2BtXEBjqkAZV5IPjI9DYAv9zP3iZHuRj8nqMD%2BSvcGBvHqqbrurKyloBHPHk8zd2PAesbz8OWGVdNs0vR8mY9BtoB1aoudBgttah0OGfAoz1Ykail460r7C6Edc2eZ6RS1T8IgUzIXxLZ6G4j5sN3W1I4g9ivd73fLHPzM%2Fo8mSn4CH6Wmr2GXwXG%2BZwuZuMgBGXoQ1S6W7RfpcXQIlSRtypJLeD0%2FKi50IH7&X-Amz-Signature=32c228ed3da8e6def4db133ccc7b95e1ba119679bfff11ba9406e0c1ca87249d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYRK5RQU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCQaa5%2FNGOOjDstAyEvj3hiIDhcA1MV4ABFvves%2Fm2DDAIhANp4S5iy3gPpMP4U67IM5w5HIJfinG43ylKXLVZ4QHR8KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyF9lweHZMoeP%2FEs%2Boq3APkYZ3EWXWfTYfkOBjZSa2NiVlnny%2FvhK3rxL8Sm26Ypa27yx1RW5c1Tc7LZFq4vKM%2Bi03qQhBzbiB6fgo4KPW7xtZM7MeDtZcPFP%2F%2B3G9QSsXkc3dSNi1k0SWNxesDTc0ctPo5ut45n8sne6Aw687xzHMi1z%2FmgzTmEjJGMceeM6pFazERK%2FQvh4GZ0papRnCsinKUYl21uOmCfLX99Xu3E6e4Jflkjttn1c39ra8QyNLJyExv21%2FAMC47c5JvczzAdVsRbTflxu4J0J5ufdr7bAWDKu6d3zno%2FFIsweSux8OYXIu8swY9QeCltFXKJHfkpqqtzonvUKprwFKkzysclAXxdQoDT1HoKU6I7uCljCcqMkDiXNBdB1%2BYk22Wc5VZvZa474JlW0yZYrID8XwJuQHZWJqlTTUNIPi9ixS5z5GpmpjPzV3ZXC58gNjl4BctVStdQXfiH4%2Fweu0RWv3xwvUShRBNCb5gmY2VKc8ExJjMtSiOCZzeowbjWikmpBO%2FadUjuAvMoqMy1htD97Shql6gS3f1OOF1y%2BUjC186%2FNvBkqeA0HeraWwcZXNzxonh5TdXIibxTPqdD7THNx11EytEMLD5CXYxlDRLxOofNux0pzjY27guZy4pUjCP%2BtXEBjqkAZV5IPjI9DYAv9zP3iZHuRj8nqMD%2BSvcGBvHqqbrurKyloBHPHk8zd2PAesbz8OWGVdNs0vR8mY9BtoB1aoudBgttah0OGfAoz1Ykail460r7C6Edc2eZ6RS1T8IgUzIXxLZ6G4j5sN3W1I4g9ivd73fLHPzM%2Fo8mSn4CH6Wmr2GXwXG%2BZwuZuMgBGXoQ1S6W7RfpcXQIlSRtypJLeD0%2FKi50IH7&X-Amz-Signature=7deb4ec3032572ea219349ef830b84edd8f345d87ef6eefd6a791f20ddce1399&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYRK5RQU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCQaa5%2FNGOOjDstAyEvj3hiIDhcA1MV4ABFvves%2Fm2DDAIhANp4S5iy3gPpMP4U67IM5w5HIJfinG43ylKXLVZ4QHR8KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyF9lweHZMoeP%2FEs%2Boq3APkYZ3EWXWfTYfkOBjZSa2NiVlnny%2FvhK3rxL8Sm26Ypa27yx1RW5c1Tc7LZFq4vKM%2Bi03qQhBzbiB6fgo4KPW7xtZM7MeDtZcPFP%2F%2B3G9QSsXkc3dSNi1k0SWNxesDTc0ctPo5ut45n8sne6Aw687xzHMi1z%2FmgzTmEjJGMceeM6pFazERK%2FQvh4GZ0papRnCsinKUYl21uOmCfLX99Xu3E6e4Jflkjttn1c39ra8QyNLJyExv21%2FAMC47c5JvczzAdVsRbTflxu4J0J5ufdr7bAWDKu6d3zno%2FFIsweSux8OYXIu8swY9QeCltFXKJHfkpqqtzonvUKprwFKkzysclAXxdQoDT1HoKU6I7uCljCcqMkDiXNBdB1%2BYk22Wc5VZvZa474JlW0yZYrID8XwJuQHZWJqlTTUNIPi9ixS5z5GpmpjPzV3ZXC58gNjl4BctVStdQXfiH4%2Fweu0RWv3xwvUShRBNCb5gmY2VKc8ExJjMtSiOCZzeowbjWikmpBO%2FadUjuAvMoqMy1htD97Shql6gS3f1OOF1y%2BUjC186%2FNvBkqeA0HeraWwcZXNzxonh5TdXIibxTPqdD7THNx11EytEMLD5CXYxlDRLxOofNux0pzjY27guZy4pUjCP%2BtXEBjqkAZV5IPjI9DYAv9zP3iZHuRj8nqMD%2BSvcGBvHqqbrurKyloBHPHk8zd2PAesbz8OWGVdNs0vR8mY9BtoB1aoudBgttah0OGfAoz1Ykail460r7C6Edc2eZ6RS1T8IgUzIXxLZ6G4j5sN3W1I4g9ivd73fLHPzM%2Fo8mSn4CH6Wmr2GXwXG%2BZwuZuMgBGXoQ1S6W7RfpcXQIlSRtypJLeD0%2FKi50IH7&X-Amz-Signature=6c7460ba76232cbd2a671e783591862899b685a95cea6a81a3a96afdd7015d41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYRK5RQU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCQaa5%2FNGOOjDstAyEvj3hiIDhcA1MV4ABFvves%2Fm2DDAIhANp4S5iy3gPpMP4U67IM5w5HIJfinG43ylKXLVZ4QHR8KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyF9lweHZMoeP%2FEs%2Boq3APkYZ3EWXWfTYfkOBjZSa2NiVlnny%2FvhK3rxL8Sm26Ypa27yx1RW5c1Tc7LZFq4vKM%2Bi03qQhBzbiB6fgo4KPW7xtZM7MeDtZcPFP%2F%2B3G9QSsXkc3dSNi1k0SWNxesDTc0ctPo5ut45n8sne6Aw687xzHMi1z%2FmgzTmEjJGMceeM6pFazERK%2FQvh4GZ0papRnCsinKUYl21uOmCfLX99Xu3E6e4Jflkjttn1c39ra8QyNLJyExv21%2FAMC47c5JvczzAdVsRbTflxu4J0J5ufdr7bAWDKu6d3zno%2FFIsweSux8OYXIu8swY9QeCltFXKJHfkpqqtzonvUKprwFKkzysclAXxdQoDT1HoKU6I7uCljCcqMkDiXNBdB1%2BYk22Wc5VZvZa474JlW0yZYrID8XwJuQHZWJqlTTUNIPi9ixS5z5GpmpjPzV3ZXC58gNjl4BctVStdQXfiH4%2Fweu0RWv3xwvUShRBNCb5gmY2VKc8ExJjMtSiOCZzeowbjWikmpBO%2FadUjuAvMoqMy1htD97Shql6gS3f1OOF1y%2BUjC186%2FNvBkqeA0HeraWwcZXNzxonh5TdXIibxTPqdD7THNx11EytEMLD5CXYxlDRLxOofNux0pzjY27guZy4pUjCP%2BtXEBjqkAZV5IPjI9DYAv9zP3iZHuRj8nqMD%2BSvcGBvHqqbrurKyloBHPHk8zd2PAesbz8OWGVdNs0vR8mY9BtoB1aoudBgttah0OGfAoz1Ykail460r7C6Edc2eZ6RS1T8IgUzIXxLZ6G4j5sN3W1I4g9ivd73fLHPzM%2Fo8mSn4CH6Wmr2GXwXG%2BZwuZuMgBGXoQ1S6W7RfpcXQIlSRtypJLeD0%2FKi50IH7&X-Amz-Signature=4c72000d032a5d20a36c43e0edc13b240f7a80e6934edff7e028fb9e10a0f70f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYRK5RQU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCQaa5%2FNGOOjDstAyEvj3hiIDhcA1MV4ABFvves%2Fm2DDAIhANp4S5iy3gPpMP4U67IM5w5HIJfinG43ylKXLVZ4QHR8KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyF9lweHZMoeP%2FEs%2Boq3APkYZ3EWXWfTYfkOBjZSa2NiVlnny%2FvhK3rxL8Sm26Ypa27yx1RW5c1Tc7LZFq4vKM%2Bi03qQhBzbiB6fgo4KPW7xtZM7MeDtZcPFP%2F%2B3G9QSsXkc3dSNi1k0SWNxesDTc0ctPo5ut45n8sne6Aw687xzHMi1z%2FmgzTmEjJGMceeM6pFazERK%2FQvh4GZ0papRnCsinKUYl21uOmCfLX99Xu3E6e4Jflkjttn1c39ra8QyNLJyExv21%2FAMC47c5JvczzAdVsRbTflxu4J0J5ufdr7bAWDKu6d3zno%2FFIsweSux8OYXIu8swY9QeCltFXKJHfkpqqtzonvUKprwFKkzysclAXxdQoDT1HoKU6I7uCljCcqMkDiXNBdB1%2BYk22Wc5VZvZa474JlW0yZYrID8XwJuQHZWJqlTTUNIPi9ixS5z5GpmpjPzV3ZXC58gNjl4BctVStdQXfiH4%2Fweu0RWv3xwvUShRBNCb5gmY2VKc8ExJjMtSiOCZzeowbjWikmpBO%2FadUjuAvMoqMy1htD97Shql6gS3f1OOF1y%2BUjC186%2FNvBkqeA0HeraWwcZXNzxonh5TdXIibxTPqdD7THNx11EytEMLD5CXYxlDRLxOofNux0pzjY27guZy4pUjCP%2BtXEBjqkAZV5IPjI9DYAv9zP3iZHuRj8nqMD%2BSvcGBvHqqbrurKyloBHPHk8zd2PAesbz8OWGVdNs0vR8mY9BtoB1aoudBgttah0OGfAoz1Ykail460r7C6Edc2eZ6RS1T8IgUzIXxLZ6G4j5sN3W1I4g9ivd73fLHPzM%2Fo8mSn4CH6Wmr2GXwXG%2BZwuZuMgBGXoQ1S6W7RfpcXQIlSRtypJLeD0%2FKi50IH7&X-Amz-Signature=32c228ed3da8e6def4db133ccc7b95e1ba119679bfff11ba9406e0c1ca87249d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYRK5RQU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCQaa5%2FNGOOjDstAyEvj3hiIDhcA1MV4ABFvves%2Fm2DDAIhANp4S5iy3gPpMP4U67IM5w5HIJfinG43ylKXLVZ4QHR8KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyF9lweHZMoeP%2FEs%2Boq3APkYZ3EWXWfTYfkOBjZSa2NiVlnny%2FvhK3rxL8Sm26Ypa27yx1RW5c1Tc7LZFq4vKM%2Bi03qQhBzbiB6fgo4KPW7xtZM7MeDtZcPFP%2F%2B3G9QSsXkc3dSNi1k0SWNxesDTc0ctPo5ut45n8sne6Aw687xzHMi1z%2FmgzTmEjJGMceeM6pFazERK%2FQvh4GZ0papRnCsinKUYl21uOmCfLX99Xu3E6e4Jflkjttn1c39ra8QyNLJyExv21%2FAMC47c5JvczzAdVsRbTflxu4J0J5ufdr7bAWDKu6d3zno%2FFIsweSux8OYXIu8swY9QeCltFXKJHfkpqqtzonvUKprwFKkzysclAXxdQoDT1HoKU6I7uCljCcqMkDiXNBdB1%2BYk22Wc5VZvZa474JlW0yZYrID8XwJuQHZWJqlTTUNIPi9ixS5z5GpmpjPzV3ZXC58gNjl4BctVStdQXfiH4%2Fweu0RWv3xwvUShRBNCb5gmY2VKc8ExJjMtSiOCZzeowbjWikmpBO%2FadUjuAvMoqMy1htD97Shql6gS3f1OOF1y%2BUjC186%2FNvBkqeA0HeraWwcZXNzxonh5TdXIibxTPqdD7THNx11EytEMLD5CXYxlDRLxOofNux0pzjY27guZy4pUjCP%2BtXEBjqkAZV5IPjI9DYAv9zP3iZHuRj8nqMD%2BSvcGBvHqqbrurKyloBHPHk8zd2PAesbz8OWGVdNs0vR8mY9BtoB1aoudBgttah0OGfAoz1Ykail460r7C6Edc2eZ6RS1T8IgUzIXxLZ6G4j5sN3W1I4g9ivd73fLHPzM%2Fo8mSn4CH6Wmr2GXwXG%2BZwuZuMgBGXoQ1S6W7RfpcXQIlSRtypJLeD0%2FKi50IH7&X-Amz-Signature=4d4a093f8d95c04e5f33c22abbbcc37a3340ab155313e4d67bca88ff5613e208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYRK5RQU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCQaa5%2FNGOOjDstAyEvj3hiIDhcA1MV4ABFvves%2Fm2DDAIhANp4S5iy3gPpMP4U67IM5w5HIJfinG43ylKXLVZ4QHR8KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyF9lweHZMoeP%2FEs%2Boq3APkYZ3EWXWfTYfkOBjZSa2NiVlnny%2FvhK3rxL8Sm26Ypa27yx1RW5c1Tc7LZFq4vKM%2Bi03qQhBzbiB6fgo4KPW7xtZM7MeDtZcPFP%2F%2B3G9QSsXkc3dSNi1k0SWNxesDTc0ctPo5ut45n8sne6Aw687xzHMi1z%2FmgzTmEjJGMceeM6pFazERK%2FQvh4GZ0papRnCsinKUYl21uOmCfLX99Xu3E6e4Jflkjttn1c39ra8QyNLJyExv21%2FAMC47c5JvczzAdVsRbTflxu4J0J5ufdr7bAWDKu6d3zno%2FFIsweSux8OYXIu8swY9QeCltFXKJHfkpqqtzonvUKprwFKkzysclAXxdQoDT1HoKU6I7uCljCcqMkDiXNBdB1%2BYk22Wc5VZvZa474JlW0yZYrID8XwJuQHZWJqlTTUNIPi9ixS5z5GpmpjPzV3ZXC58gNjl4BctVStdQXfiH4%2Fweu0RWv3xwvUShRBNCb5gmY2VKc8ExJjMtSiOCZzeowbjWikmpBO%2FadUjuAvMoqMy1htD97Shql6gS3f1OOF1y%2BUjC186%2FNvBkqeA0HeraWwcZXNzxonh5TdXIibxTPqdD7THNx11EytEMLD5CXYxlDRLxOofNux0pzjY27guZy4pUjCP%2BtXEBjqkAZV5IPjI9DYAv9zP3iZHuRj8nqMD%2BSvcGBvHqqbrurKyloBHPHk8zd2PAesbz8OWGVdNs0vR8mY9BtoB1aoudBgttah0OGfAoz1Ykail460r7C6Edc2eZ6RS1T8IgUzIXxLZ6G4j5sN3W1I4g9ivd73fLHPzM%2Fo8mSn4CH6Wmr2GXwXG%2BZwuZuMgBGXoQ1S6W7RfpcXQIlSRtypJLeD0%2FKi50IH7&X-Amz-Signature=9bd2bfb0f9cbe45e692ac56d01e2a2732623a79952bec1ef408c05b054f37280&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYRK5RQU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCQaa5%2FNGOOjDstAyEvj3hiIDhcA1MV4ABFvves%2Fm2DDAIhANp4S5iy3gPpMP4U67IM5w5HIJfinG43ylKXLVZ4QHR8KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyF9lweHZMoeP%2FEs%2Boq3APkYZ3EWXWfTYfkOBjZSa2NiVlnny%2FvhK3rxL8Sm26Ypa27yx1RW5c1Tc7LZFq4vKM%2Bi03qQhBzbiB6fgo4KPW7xtZM7MeDtZcPFP%2F%2B3G9QSsXkc3dSNi1k0SWNxesDTc0ctPo5ut45n8sne6Aw687xzHMi1z%2FmgzTmEjJGMceeM6pFazERK%2FQvh4GZ0papRnCsinKUYl21uOmCfLX99Xu3E6e4Jflkjttn1c39ra8QyNLJyExv21%2FAMC47c5JvczzAdVsRbTflxu4J0J5ufdr7bAWDKu6d3zno%2FFIsweSux8OYXIu8swY9QeCltFXKJHfkpqqtzonvUKprwFKkzysclAXxdQoDT1HoKU6I7uCljCcqMkDiXNBdB1%2BYk22Wc5VZvZa474JlW0yZYrID8XwJuQHZWJqlTTUNIPi9ixS5z5GpmpjPzV3ZXC58gNjl4BctVStdQXfiH4%2Fweu0RWv3xwvUShRBNCb5gmY2VKc8ExJjMtSiOCZzeowbjWikmpBO%2FadUjuAvMoqMy1htD97Shql6gS3f1OOF1y%2BUjC186%2FNvBkqeA0HeraWwcZXNzxonh5TdXIibxTPqdD7THNx11EytEMLD5CXYxlDRLxOofNux0pzjY27guZy4pUjCP%2BtXEBjqkAZV5IPjI9DYAv9zP3iZHuRj8nqMD%2BSvcGBvHqqbrurKyloBHPHk8zd2PAesbz8OWGVdNs0vR8mY9BtoB1aoudBgttah0OGfAoz1Ykail460r7C6Edc2eZ6RS1T8IgUzIXxLZ6G4j5sN3W1I4g9ivd73fLHPzM%2Fo8mSn4CH6Wmr2GXwXG%2BZwuZuMgBGXoQ1S6W7RfpcXQIlSRtypJLeD0%2FKi50IH7&X-Amz-Signature=9c685b5572d6a2a4cab8a9a3b5266e04cf3e5dc2b36860fcaa4bc1057248f4e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
