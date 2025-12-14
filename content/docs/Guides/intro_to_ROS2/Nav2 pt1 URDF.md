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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKBSIVVU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDNYWOrjwRAds0vl3Dj6FvJhqojwxUzYSZ29bcK3zFYzAiAwb61%2F4HPeKbJXDxfNDWzX9ahomyieVnQgSpI8MJpEAyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM0j%2FIR%2FB71dfMYmmpKtwDalD%2FKZiPP5rPYQ%2BfW5y6gd%2FaSwUCqjrby7GzXYQ4r9lUr0gMgh82uDe5j5ecuDqE62deU%2F5GUJz9HPkrFm39Urj%2Fyr%2FzHYSdJc%2B0qs18g9qNH3tNLHUcyyGE8sNmUijqUC1CbedL37MceHfoWAJ1jNOVpJk624r0APS93oJHGv%2Bw3sERf8QtF1fJdQb11gUGrddvm8C5PuiGOyGcZMPt7%2Fa6OJpQHaXeyQItZgdJcMkHUmBx1BXdQKe4rvBCpH8dZ8%2BaG3pUiCbeMQdXqDIv2sWl53tBOc11GNOJ9TXBYd30I4H3pm8xZs42n21h5T5izsxTbJ3w3p353km7i0fLC34IGdeWKn2UNwx2yZa1RVAiLyWwHfxECvLvdyISyI0Vq2ZIgb5%2BmgZ%2Fno2dxwV2b3xD1w4jaeIJyFStodpynfuGj3SyWnGgOWkFqLnSyn4QqvknBqlfB8m6NySvkaPMpsm1lmTeqDUFIiWcLG9dxACWAXUc8gVRKIZnoLTipvgCwrbv18HK%2Fi6XO%2BuFafXTvm4mmqCHTmlwivlb%2BWnf5JC60Uo47JdF8PjU9Q%2BU68fIBapLdrkoBIOrrUXVM%2FS9tRRQ54i7w9XhVsw%2BotFqeJ2Eu%2FSfnQiUBKheSC0wlpf4yQY6pgHvs6C16hMwL1%2Fq0tVmiONJRYqw%2FyrJBDgKRjxPvFZXAndp1mVgT4yF5mjKOL8te6kDNTQQ3z9q%2FA40swn5UH2PrNMf9cGNtuxaeoQykB0tl2Oj9GOEtQAnAGjn93OlbpXgCSSpqUUTgW1Kf%2FQXbjbFlaodGlkrN2T3bpW94RjjW1%2FxH%2FQa2cIYsLJdr%2FGEYdOsy57ULnefnSkliHvJaqh3MTnjqYTc&X-Amz-Signature=5294af18199c5ef193569d3ed9cc48518d03d43b3b8f34b91e8e8172ab510310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKBSIVVU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDNYWOrjwRAds0vl3Dj6FvJhqojwxUzYSZ29bcK3zFYzAiAwb61%2F4HPeKbJXDxfNDWzX9ahomyieVnQgSpI8MJpEAyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM0j%2FIR%2FB71dfMYmmpKtwDalD%2FKZiPP5rPYQ%2BfW5y6gd%2FaSwUCqjrby7GzXYQ4r9lUr0gMgh82uDe5j5ecuDqE62deU%2F5GUJz9HPkrFm39Urj%2Fyr%2FzHYSdJc%2B0qs18g9qNH3tNLHUcyyGE8sNmUijqUC1CbedL37MceHfoWAJ1jNOVpJk624r0APS93oJHGv%2Bw3sERf8QtF1fJdQb11gUGrddvm8C5PuiGOyGcZMPt7%2Fa6OJpQHaXeyQItZgdJcMkHUmBx1BXdQKe4rvBCpH8dZ8%2BaG3pUiCbeMQdXqDIv2sWl53tBOc11GNOJ9TXBYd30I4H3pm8xZs42n21h5T5izsxTbJ3w3p353km7i0fLC34IGdeWKn2UNwx2yZa1RVAiLyWwHfxECvLvdyISyI0Vq2ZIgb5%2BmgZ%2Fno2dxwV2b3xD1w4jaeIJyFStodpynfuGj3SyWnGgOWkFqLnSyn4QqvknBqlfB8m6NySvkaPMpsm1lmTeqDUFIiWcLG9dxACWAXUc8gVRKIZnoLTipvgCwrbv18HK%2Fi6XO%2BuFafXTvm4mmqCHTmlwivlb%2BWnf5JC60Uo47JdF8PjU9Q%2BU68fIBapLdrkoBIOrrUXVM%2FS9tRRQ54i7w9XhVsw%2BotFqeJ2Eu%2FSfnQiUBKheSC0wlpf4yQY6pgHvs6C16hMwL1%2Fq0tVmiONJRYqw%2FyrJBDgKRjxPvFZXAndp1mVgT4yF5mjKOL8te6kDNTQQ3z9q%2FA40swn5UH2PrNMf9cGNtuxaeoQykB0tl2Oj9GOEtQAnAGjn93OlbpXgCSSpqUUTgW1Kf%2FQXbjbFlaodGlkrN2T3bpW94RjjW1%2FxH%2FQa2cIYsLJdr%2FGEYdOsy57ULnefnSkliHvJaqh3MTnjqYTc&X-Amz-Signature=4c0c6d67440571177e573143befeb0b52cfe3d26cccfaae5ed8d983eb5f6d201&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKBSIVVU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDNYWOrjwRAds0vl3Dj6FvJhqojwxUzYSZ29bcK3zFYzAiAwb61%2F4HPeKbJXDxfNDWzX9ahomyieVnQgSpI8MJpEAyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM0j%2FIR%2FB71dfMYmmpKtwDalD%2FKZiPP5rPYQ%2BfW5y6gd%2FaSwUCqjrby7GzXYQ4r9lUr0gMgh82uDe5j5ecuDqE62deU%2F5GUJz9HPkrFm39Urj%2Fyr%2FzHYSdJc%2B0qs18g9qNH3tNLHUcyyGE8sNmUijqUC1CbedL37MceHfoWAJ1jNOVpJk624r0APS93oJHGv%2Bw3sERf8QtF1fJdQb11gUGrddvm8C5PuiGOyGcZMPt7%2Fa6OJpQHaXeyQItZgdJcMkHUmBx1BXdQKe4rvBCpH8dZ8%2BaG3pUiCbeMQdXqDIv2sWl53tBOc11GNOJ9TXBYd30I4H3pm8xZs42n21h5T5izsxTbJ3w3p353km7i0fLC34IGdeWKn2UNwx2yZa1RVAiLyWwHfxECvLvdyISyI0Vq2ZIgb5%2BmgZ%2Fno2dxwV2b3xD1w4jaeIJyFStodpynfuGj3SyWnGgOWkFqLnSyn4QqvknBqlfB8m6NySvkaPMpsm1lmTeqDUFIiWcLG9dxACWAXUc8gVRKIZnoLTipvgCwrbv18HK%2Fi6XO%2BuFafXTvm4mmqCHTmlwivlb%2BWnf5JC60Uo47JdF8PjU9Q%2BU68fIBapLdrkoBIOrrUXVM%2FS9tRRQ54i7w9XhVsw%2BotFqeJ2Eu%2FSfnQiUBKheSC0wlpf4yQY6pgHvs6C16hMwL1%2Fq0tVmiONJRYqw%2FyrJBDgKRjxPvFZXAndp1mVgT4yF5mjKOL8te6kDNTQQ3z9q%2FA40swn5UH2PrNMf9cGNtuxaeoQykB0tl2Oj9GOEtQAnAGjn93OlbpXgCSSpqUUTgW1Kf%2FQXbjbFlaodGlkrN2T3bpW94RjjW1%2FxH%2FQa2cIYsLJdr%2FGEYdOsy57ULnefnSkliHvJaqh3MTnjqYTc&X-Amz-Signature=55b13bb8d7a74e16e6814206e5ed01a62ee15a46f5d8ec2bd5590c76d88fe02f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKBSIVVU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDNYWOrjwRAds0vl3Dj6FvJhqojwxUzYSZ29bcK3zFYzAiAwb61%2F4HPeKbJXDxfNDWzX9ahomyieVnQgSpI8MJpEAyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM0j%2FIR%2FB71dfMYmmpKtwDalD%2FKZiPP5rPYQ%2BfW5y6gd%2FaSwUCqjrby7GzXYQ4r9lUr0gMgh82uDe5j5ecuDqE62deU%2F5GUJz9HPkrFm39Urj%2Fyr%2FzHYSdJc%2B0qs18g9qNH3tNLHUcyyGE8sNmUijqUC1CbedL37MceHfoWAJ1jNOVpJk624r0APS93oJHGv%2Bw3sERf8QtF1fJdQb11gUGrddvm8C5PuiGOyGcZMPt7%2Fa6OJpQHaXeyQItZgdJcMkHUmBx1BXdQKe4rvBCpH8dZ8%2BaG3pUiCbeMQdXqDIv2sWl53tBOc11GNOJ9TXBYd30I4H3pm8xZs42n21h5T5izsxTbJ3w3p353km7i0fLC34IGdeWKn2UNwx2yZa1RVAiLyWwHfxECvLvdyISyI0Vq2ZIgb5%2BmgZ%2Fno2dxwV2b3xD1w4jaeIJyFStodpynfuGj3SyWnGgOWkFqLnSyn4QqvknBqlfB8m6NySvkaPMpsm1lmTeqDUFIiWcLG9dxACWAXUc8gVRKIZnoLTipvgCwrbv18HK%2Fi6XO%2BuFafXTvm4mmqCHTmlwivlb%2BWnf5JC60Uo47JdF8PjU9Q%2BU68fIBapLdrkoBIOrrUXVM%2FS9tRRQ54i7w9XhVsw%2BotFqeJ2Eu%2FSfnQiUBKheSC0wlpf4yQY6pgHvs6C16hMwL1%2Fq0tVmiONJRYqw%2FyrJBDgKRjxPvFZXAndp1mVgT4yF5mjKOL8te6kDNTQQ3z9q%2FA40swn5UH2PrNMf9cGNtuxaeoQykB0tl2Oj9GOEtQAnAGjn93OlbpXgCSSpqUUTgW1Kf%2FQXbjbFlaodGlkrN2T3bpW94RjjW1%2FxH%2FQa2cIYsLJdr%2FGEYdOsy57ULnefnSkliHvJaqh3MTnjqYTc&X-Amz-Signature=b32e425b45d2db3adf2472cb0b621bad5f32d4be4ce6e0f26116acd1143c942d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKBSIVVU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDNYWOrjwRAds0vl3Dj6FvJhqojwxUzYSZ29bcK3zFYzAiAwb61%2F4HPeKbJXDxfNDWzX9ahomyieVnQgSpI8MJpEAyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM0j%2FIR%2FB71dfMYmmpKtwDalD%2FKZiPP5rPYQ%2BfW5y6gd%2FaSwUCqjrby7GzXYQ4r9lUr0gMgh82uDe5j5ecuDqE62deU%2F5GUJz9HPkrFm39Urj%2Fyr%2FzHYSdJc%2B0qs18g9qNH3tNLHUcyyGE8sNmUijqUC1CbedL37MceHfoWAJ1jNOVpJk624r0APS93oJHGv%2Bw3sERf8QtF1fJdQb11gUGrddvm8C5PuiGOyGcZMPt7%2Fa6OJpQHaXeyQItZgdJcMkHUmBx1BXdQKe4rvBCpH8dZ8%2BaG3pUiCbeMQdXqDIv2sWl53tBOc11GNOJ9TXBYd30I4H3pm8xZs42n21h5T5izsxTbJ3w3p353km7i0fLC34IGdeWKn2UNwx2yZa1RVAiLyWwHfxECvLvdyISyI0Vq2ZIgb5%2BmgZ%2Fno2dxwV2b3xD1w4jaeIJyFStodpynfuGj3SyWnGgOWkFqLnSyn4QqvknBqlfB8m6NySvkaPMpsm1lmTeqDUFIiWcLG9dxACWAXUc8gVRKIZnoLTipvgCwrbv18HK%2Fi6XO%2BuFafXTvm4mmqCHTmlwivlb%2BWnf5JC60Uo47JdF8PjU9Q%2BU68fIBapLdrkoBIOrrUXVM%2FS9tRRQ54i7w9XhVsw%2BotFqeJ2Eu%2FSfnQiUBKheSC0wlpf4yQY6pgHvs6C16hMwL1%2Fq0tVmiONJRYqw%2FyrJBDgKRjxPvFZXAndp1mVgT4yF5mjKOL8te6kDNTQQ3z9q%2FA40swn5UH2PrNMf9cGNtuxaeoQykB0tl2Oj9GOEtQAnAGjn93OlbpXgCSSpqUUTgW1Kf%2FQXbjbFlaodGlkrN2T3bpW94RjjW1%2FxH%2FQa2cIYsLJdr%2FGEYdOsy57ULnefnSkliHvJaqh3MTnjqYTc&X-Amz-Signature=898660f019283de49bc177002724a3d10d98c6a262d8f9912221e2d75cdda4d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKBSIVVU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDNYWOrjwRAds0vl3Dj6FvJhqojwxUzYSZ29bcK3zFYzAiAwb61%2F4HPeKbJXDxfNDWzX9ahomyieVnQgSpI8MJpEAyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM0j%2FIR%2FB71dfMYmmpKtwDalD%2FKZiPP5rPYQ%2BfW5y6gd%2FaSwUCqjrby7GzXYQ4r9lUr0gMgh82uDe5j5ecuDqE62deU%2F5GUJz9HPkrFm39Urj%2Fyr%2FzHYSdJc%2B0qs18g9qNH3tNLHUcyyGE8sNmUijqUC1CbedL37MceHfoWAJ1jNOVpJk624r0APS93oJHGv%2Bw3sERf8QtF1fJdQb11gUGrddvm8C5PuiGOyGcZMPt7%2Fa6OJpQHaXeyQItZgdJcMkHUmBx1BXdQKe4rvBCpH8dZ8%2BaG3pUiCbeMQdXqDIv2sWl53tBOc11GNOJ9TXBYd30I4H3pm8xZs42n21h5T5izsxTbJ3w3p353km7i0fLC34IGdeWKn2UNwx2yZa1RVAiLyWwHfxECvLvdyISyI0Vq2ZIgb5%2BmgZ%2Fno2dxwV2b3xD1w4jaeIJyFStodpynfuGj3SyWnGgOWkFqLnSyn4QqvknBqlfB8m6NySvkaPMpsm1lmTeqDUFIiWcLG9dxACWAXUc8gVRKIZnoLTipvgCwrbv18HK%2Fi6XO%2BuFafXTvm4mmqCHTmlwivlb%2BWnf5JC60Uo47JdF8PjU9Q%2BU68fIBapLdrkoBIOrrUXVM%2FS9tRRQ54i7w9XhVsw%2BotFqeJ2Eu%2FSfnQiUBKheSC0wlpf4yQY6pgHvs6C16hMwL1%2Fq0tVmiONJRYqw%2FyrJBDgKRjxPvFZXAndp1mVgT4yF5mjKOL8te6kDNTQQ3z9q%2FA40swn5UH2PrNMf9cGNtuxaeoQykB0tl2Oj9GOEtQAnAGjn93OlbpXgCSSpqUUTgW1Kf%2FQXbjbFlaodGlkrN2T3bpW94RjjW1%2FxH%2FQa2cIYsLJdr%2FGEYdOsy57ULnefnSkliHvJaqh3MTnjqYTc&X-Amz-Signature=7c411732d4def60dad3ab84f337f36a9221322d93b3abf8d1c919a551a96f09b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKBSIVVU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDNYWOrjwRAds0vl3Dj6FvJhqojwxUzYSZ29bcK3zFYzAiAwb61%2F4HPeKbJXDxfNDWzX9ahomyieVnQgSpI8MJpEAyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM0j%2FIR%2FB71dfMYmmpKtwDalD%2FKZiPP5rPYQ%2BfW5y6gd%2FaSwUCqjrby7GzXYQ4r9lUr0gMgh82uDe5j5ecuDqE62deU%2F5GUJz9HPkrFm39Urj%2Fyr%2FzHYSdJc%2B0qs18g9qNH3tNLHUcyyGE8sNmUijqUC1CbedL37MceHfoWAJ1jNOVpJk624r0APS93oJHGv%2Bw3sERf8QtF1fJdQb11gUGrddvm8C5PuiGOyGcZMPt7%2Fa6OJpQHaXeyQItZgdJcMkHUmBx1BXdQKe4rvBCpH8dZ8%2BaG3pUiCbeMQdXqDIv2sWl53tBOc11GNOJ9TXBYd30I4H3pm8xZs42n21h5T5izsxTbJ3w3p353km7i0fLC34IGdeWKn2UNwx2yZa1RVAiLyWwHfxECvLvdyISyI0Vq2ZIgb5%2BmgZ%2Fno2dxwV2b3xD1w4jaeIJyFStodpynfuGj3SyWnGgOWkFqLnSyn4QqvknBqlfB8m6NySvkaPMpsm1lmTeqDUFIiWcLG9dxACWAXUc8gVRKIZnoLTipvgCwrbv18HK%2Fi6XO%2BuFafXTvm4mmqCHTmlwivlb%2BWnf5JC60Uo47JdF8PjU9Q%2BU68fIBapLdrkoBIOrrUXVM%2FS9tRRQ54i7w9XhVsw%2BotFqeJ2Eu%2FSfnQiUBKheSC0wlpf4yQY6pgHvs6C16hMwL1%2Fq0tVmiONJRYqw%2FyrJBDgKRjxPvFZXAndp1mVgT4yF5mjKOL8te6kDNTQQ3z9q%2FA40swn5UH2PrNMf9cGNtuxaeoQykB0tl2Oj9GOEtQAnAGjn93OlbpXgCSSpqUUTgW1Kf%2FQXbjbFlaodGlkrN2T3bpW94RjjW1%2FxH%2FQa2cIYsLJdr%2FGEYdOsy57ULnefnSkliHvJaqh3MTnjqYTc&X-Amz-Signature=f65f0e0d35d55780b92f2b9169de4a27f8582b05e9ea5efe95e22b02c361d103&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKBSIVVU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDNYWOrjwRAds0vl3Dj6FvJhqojwxUzYSZ29bcK3zFYzAiAwb61%2F4HPeKbJXDxfNDWzX9ahomyieVnQgSpI8MJpEAyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM0j%2FIR%2FB71dfMYmmpKtwDalD%2FKZiPP5rPYQ%2BfW5y6gd%2FaSwUCqjrby7GzXYQ4r9lUr0gMgh82uDe5j5ecuDqE62deU%2F5GUJz9HPkrFm39Urj%2Fyr%2FzHYSdJc%2B0qs18g9qNH3tNLHUcyyGE8sNmUijqUC1CbedL37MceHfoWAJ1jNOVpJk624r0APS93oJHGv%2Bw3sERf8QtF1fJdQb11gUGrddvm8C5PuiGOyGcZMPt7%2Fa6OJpQHaXeyQItZgdJcMkHUmBx1BXdQKe4rvBCpH8dZ8%2BaG3pUiCbeMQdXqDIv2sWl53tBOc11GNOJ9TXBYd30I4H3pm8xZs42n21h5T5izsxTbJ3w3p353km7i0fLC34IGdeWKn2UNwx2yZa1RVAiLyWwHfxECvLvdyISyI0Vq2ZIgb5%2BmgZ%2Fno2dxwV2b3xD1w4jaeIJyFStodpynfuGj3SyWnGgOWkFqLnSyn4QqvknBqlfB8m6NySvkaPMpsm1lmTeqDUFIiWcLG9dxACWAXUc8gVRKIZnoLTipvgCwrbv18HK%2Fi6XO%2BuFafXTvm4mmqCHTmlwivlb%2BWnf5JC60Uo47JdF8PjU9Q%2BU68fIBapLdrkoBIOrrUXVM%2FS9tRRQ54i7w9XhVsw%2BotFqeJ2Eu%2FSfnQiUBKheSC0wlpf4yQY6pgHvs6C16hMwL1%2Fq0tVmiONJRYqw%2FyrJBDgKRjxPvFZXAndp1mVgT4yF5mjKOL8te6kDNTQQ3z9q%2FA40swn5UH2PrNMf9cGNtuxaeoQykB0tl2Oj9GOEtQAnAGjn93OlbpXgCSSpqUUTgW1Kf%2FQXbjbFlaodGlkrN2T3bpW94RjjW1%2FxH%2FQa2cIYsLJdr%2FGEYdOsy57ULnefnSkliHvJaqh3MTnjqYTc&X-Amz-Signature=797cb91cdae2c6944e731036d46fc356916cb30b946c5fe885e3b1352fb110b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKBSIVVU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDNYWOrjwRAds0vl3Dj6FvJhqojwxUzYSZ29bcK3zFYzAiAwb61%2F4HPeKbJXDxfNDWzX9ahomyieVnQgSpI8MJpEAyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM0j%2FIR%2FB71dfMYmmpKtwDalD%2FKZiPP5rPYQ%2BfW5y6gd%2FaSwUCqjrby7GzXYQ4r9lUr0gMgh82uDe5j5ecuDqE62deU%2F5GUJz9HPkrFm39Urj%2Fyr%2FzHYSdJc%2B0qs18g9qNH3tNLHUcyyGE8sNmUijqUC1CbedL37MceHfoWAJ1jNOVpJk624r0APS93oJHGv%2Bw3sERf8QtF1fJdQb11gUGrddvm8C5PuiGOyGcZMPt7%2Fa6OJpQHaXeyQItZgdJcMkHUmBx1BXdQKe4rvBCpH8dZ8%2BaG3pUiCbeMQdXqDIv2sWl53tBOc11GNOJ9TXBYd30I4H3pm8xZs42n21h5T5izsxTbJ3w3p353km7i0fLC34IGdeWKn2UNwx2yZa1RVAiLyWwHfxECvLvdyISyI0Vq2ZIgb5%2BmgZ%2Fno2dxwV2b3xD1w4jaeIJyFStodpynfuGj3SyWnGgOWkFqLnSyn4QqvknBqlfB8m6NySvkaPMpsm1lmTeqDUFIiWcLG9dxACWAXUc8gVRKIZnoLTipvgCwrbv18HK%2Fi6XO%2BuFafXTvm4mmqCHTmlwivlb%2BWnf5JC60Uo47JdF8PjU9Q%2BU68fIBapLdrkoBIOrrUXVM%2FS9tRRQ54i7w9XhVsw%2BotFqeJ2Eu%2FSfnQiUBKheSC0wlpf4yQY6pgHvs6C16hMwL1%2Fq0tVmiONJRYqw%2FyrJBDgKRjxPvFZXAndp1mVgT4yF5mjKOL8te6kDNTQQ3z9q%2FA40swn5UH2PrNMf9cGNtuxaeoQykB0tl2Oj9GOEtQAnAGjn93OlbpXgCSSpqUUTgW1Kf%2FQXbjbFlaodGlkrN2T3bpW94RjjW1%2FxH%2FQa2cIYsLJdr%2FGEYdOsy57ULnefnSkliHvJaqh3MTnjqYTc&X-Amz-Signature=329b9706317e222c2bdf206200698a69d1740598f9c147ccc7904abe1c1fb5c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKBSIVVU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDNYWOrjwRAds0vl3Dj6FvJhqojwxUzYSZ29bcK3zFYzAiAwb61%2F4HPeKbJXDxfNDWzX9ahomyieVnQgSpI8MJpEAyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM0j%2FIR%2FB71dfMYmmpKtwDalD%2FKZiPP5rPYQ%2BfW5y6gd%2FaSwUCqjrby7GzXYQ4r9lUr0gMgh82uDe5j5ecuDqE62deU%2F5GUJz9HPkrFm39Urj%2Fyr%2FzHYSdJc%2B0qs18g9qNH3tNLHUcyyGE8sNmUijqUC1CbedL37MceHfoWAJ1jNOVpJk624r0APS93oJHGv%2Bw3sERf8QtF1fJdQb11gUGrddvm8C5PuiGOyGcZMPt7%2Fa6OJpQHaXeyQItZgdJcMkHUmBx1BXdQKe4rvBCpH8dZ8%2BaG3pUiCbeMQdXqDIv2sWl53tBOc11GNOJ9TXBYd30I4H3pm8xZs42n21h5T5izsxTbJ3w3p353km7i0fLC34IGdeWKn2UNwx2yZa1RVAiLyWwHfxECvLvdyISyI0Vq2ZIgb5%2BmgZ%2Fno2dxwV2b3xD1w4jaeIJyFStodpynfuGj3SyWnGgOWkFqLnSyn4QqvknBqlfB8m6NySvkaPMpsm1lmTeqDUFIiWcLG9dxACWAXUc8gVRKIZnoLTipvgCwrbv18HK%2Fi6XO%2BuFafXTvm4mmqCHTmlwivlb%2BWnf5JC60Uo47JdF8PjU9Q%2BU68fIBapLdrkoBIOrrUXVM%2FS9tRRQ54i7w9XhVsw%2BotFqeJ2Eu%2FSfnQiUBKheSC0wlpf4yQY6pgHvs6C16hMwL1%2Fq0tVmiONJRYqw%2FyrJBDgKRjxPvFZXAndp1mVgT4yF5mjKOL8te6kDNTQQ3z9q%2FA40swn5UH2PrNMf9cGNtuxaeoQykB0tl2Oj9GOEtQAnAGjn93OlbpXgCSSpqUUTgW1Kf%2FQXbjbFlaodGlkrN2T3bpW94RjjW1%2FxH%2FQa2cIYsLJdr%2FGEYdOsy57ULnefnSkliHvJaqh3MTnjqYTc&X-Amz-Signature=12f18891deaaa68a383f68562ef4774709691f756b4cd83dd098c6ee2e2f2890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZAXARXS%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICabf9Omf%2FSPvmFoU5ez06AbF2pgBAeglWx8r39zfts9AiEAyNg59ped4Nm9IzFyDFL1MEmWBr6nCyux4dKdL0552%2FAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJIN4gaHMtpxtmSiDyrcA7IgiO6XrDHrYEwKC%2FbdM1ol967Hfv4%2BOrzPB92DWwUH9NETmh2if84fCtBK1B3cJ3jfIfQc4%2BwfdWFiqr4prkTqdefwd%2BPcxIan0r0bVUUvdmhZ7BdlQi5wDy4WTQsgt6f8EQRjucq3%2FFFApDNqqRik74gc%2FvCtjCiVTlDvAsEM4n9SDeRC9AluB3GETVkNGQUnT%2FsTnoXYzGlneIVpKhTYzsTsmmoEBEzfWh4lfEZCpJr9S1aH92HDiqvMua2XCNk9gXcvghz5%2ByEcAAhBkosxRCNs%2FwbpVGVy2mqCESyyEcclBpNNUGghxKVagvF7pFBoQsw74BNwsJxS1bEN%2FDmnWCeOSsXNP9y7iSSZQg0SM12WlXPsiY%2FZ1p4DQERZrsR6yLIQm%2FJM9lRPSfJnPagooNdcy8PNY3pjYMfqwrVTixtX46%2Fl36IynM%2FzyE4PZfyFCm8FMd7%2Fu9nJ622OIO%2FSw6ljdvubls853%2F1T5eGKUmxs%2FrqWI8sR6%2BKxVAbtkFGmFDKHhdXjRR3cX4sguXX8aitp%2BiVqvdCIS%2FyuBP%2FNpuudWKKrO0%2BoShnYcZNs1PSyvFwAkILs13dpfl9F383LcWwPzMNZTgYCAxVEX7QHouOmVFkMPkvcgkMFML2W%2BMkGOqUBZOWdDHeoed7A6VveI9%2BbrdJBFMnFa9xWlNeHpe68fm9ugL5SHNyKxNPrVtjFpu97kEsxfYOCviIQ1CG33MDSLAjwfZ1an%2FRKd9CFNKh5yTi8mzMiRjqiIQYT4DZBIMPFW1CQuamoupFIxR4bnsQx9swUBQfIxDS1suqkCWCjIRHjiOn3TZTfqGUjqzOzx8iQcxamJH5Qwt7ob%2BzcQnqiEeRBbfEH&X-Amz-Signature=77bf2b67e3872666c4d3e3e6830deedd3e966d03f34a44f92d65ba332c714d51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKNBGU3D%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDNn5%2FszTQ3PSFgju81uOHjyfu6aG2%2F5OrKisFZQc04dgIgMvRcrIgFuxly4%2Be8ophpHF4FTu5ZLL2uPw%2Bgkjj9VSsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHnx19RzahIxiiwmXyrcA3xWhzB7uIp404H0fhbF1W%2FqSPLGe5IWcEFm4fSPYXsJKH9JZW3WI8CwZVUk3Wysj%2BXZ1FcTKzaYmULyEBLz%2FL2RE90ghIqW0VxPJKWm86M07tMnfm%2FAtFhC9c2tKHuFFk7tVZzRADHYnLI9DIoiLC%2FVwa%2B%2FR2Iq0iTsfOElWvHTqt%2BA27Y8IJ8gwmhtRtmvBtIxNUkdj4u7MY5C%2B1wRyScAWFqShIcChRu78IkWiroy%2BKHYeQyd54HQW0vQRH5INclP21BxTxSGX1iblS5R9gMoR6Z3fHMJBQTF%2FRXwp%2B0KjQN9ke3EL8OqlG7t0qUyqXE%2FPqJhIa6W42YIKKWA9TxL2tubI0wHpaK%2FyS7zBx8elhUEJ42NiXqsQuBaKnGgCHFI6V8Ah1NXZc5RzL6kk3kEr0raoQjrp5unLy50oyQZrV3jRAu%2Fg8Jh9WGFFEZT1gZ4pb%2Bld4wHH9gWRJsVlTNxLwuhp0JHA4YthNjOx0lodSXbahvPmmWwe1XTm8mZXw2%2BzfZIkIs2onroMN1jj5lSiPMXSSGvIV0RZxZQiSh5DICLoliww%2BIlXlphYlb1d57SKeVyJpFIDJG7bmp3wG0VBKf9Q2RLssHaDKNbGEkQqUM1mfgCLmSthOV0MKSW%2BMkGOqUBCkX38qieZ6vmz5Rs8kldBmeqaxwbOSn5HkHqhhhFTHVBjcBFvJQnBGabVJ0rrBKDlZwacuNwd0SoCdpW1UkAW3hYXY8zRtl8WuzlSXgbJeRFnEaPkgJo3PcahT9RQVclmGU7Cn4FAsBmjf%2FLf7Lu99t5UZnXFjqSKxk9BrjtGjfLKJHt5R2EpeNT1hEXOuQqTUZ5ofVj8OxzIN3Us0GnTzAKoni0&X-Amz-Signature=c1c8aa6265cd17164f837b187c59db9ec4dcb8b94e7f98a280dac76e49e54a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7MRWGWH%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFxzJcfK78N%2BrPTp%2FWgzIceSSMY7ZjGMXJhTD2Chl7guAiBxMfQD3g9R%2BxEHK4LUZPkSUMEbpJ4zpV3d9nbjc2RVTSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMT00r4XfcdX21sTH1KtwDhIpUsF%2B1ep11OhdqgWj82gy4aqTxfEVsV4UuSvqMIZziLdjjsvcLJkHENuNhp2q%2B3cTzjZaURkTBblXz%2F0goZJmqbO5mH5y2YX2aMCYDcXd42nOTA7OvTx3191uGe5gKmEzzlXoCB%2FrlYt8jQksXH9gH7ZGpVLwT%2Bh%2Fy4u33tjzWqB7jaj6ZlTuBOMTEZ%2BQAyZhBVqN4iDncFT%2BWwzF%2FClrBl8kxD1mrrIO3f6kKjzQLg4Q6TAa8WJbxamUt3Rzp8bi82cjfJ%2BnBRudzWPSyVf5OmV%2B4d0dFD9ouKzxiN6RA87dfr1uEaCoqKLlFn9QWH4dN0D%2B1NE1V48ZQ3WHhqrzwJka02Lqn%2BDDMKUYbvGvztIHfuqr0rRkD%2FxAWQ%2F7F58E5dOOOLXN1U1jjm6sETOdWukvR6lNE7u1MQHDlkMHb1%2F1zPjrOGhTN2ag44oeGZA2nC0lpOJwwIgG4qx%2B0y2y2kx5SXVvubczOE8WRmPZh62DDpShBr5ufstimRJR01fNxfcsdTcHJzeu0DGVQkEqrVjyt1KnY3SPNKWu8QoCqGKsnNFqKzfuL9hZmrc7TMZRtUoh3bdlzUK1meCqD3eXLxlYRBheyx49yQ0hO08Bg%2BS0PQLJPsCODWEcw0pb4yQY6pgFa%2FaU2sNlN38ynqy1PHkRZk%2BoyCa%2FhaB00e5Q2fILQVk2X8u3O86SGyqFirwmbqBAMiyGScBkCAvUnmBE4pmn%2BvcN7DOyXtXbEwTzZczlLMQuTbnSFoMiLv9Z3e3KLD35b4lX0cAA7%2Bffdec3lWyqDAsKVSIWMgeej496SrUodvHU4vw3gIj%2FOv7WXYeCxok7s1p%2BGpVBiK49beMepKwR%2B%2BbkuQ6Ep&X-Amz-Signature=815aa9466034c4a7d3389b67c48b29b7067a7cb59a08a31e95a717fb0bc8e0f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKBSIVVU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDNYWOrjwRAds0vl3Dj6FvJhqojwxUzYSZ29bcK3zFYzAiAwb61%2F4HPeKbJXDxfNDWzX9ahomyieVnQgSpI8MJpEAyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM0j%2FIR%2FB71dfMYmmpKtwDalD%2FKZiPP5rPYQ%2BfW5y6gd%2FaSwUCqjrby7GzXYQ4r9lUr0gMgh82uDe5j5ecuDqE62deU%2F5GUJz9HPkrFm39Urj%2Fyr%2FzHYSdJc%2B0qs18g9qNH3tNLHUcyyGE8sNmUijqUC1CbedL37MceHfoWAJ1jNOVpJk624r0APS93oJHGv%2Bw3sERf8QtF1fJdQb11gUGrddvm8C5PuiGOyGcZMPt7%2Fa6OJpQHaXeyQItZgdJcMkHUmBx1BXdQKe4rvBCpH8dZ8%2BaG3pUiCbeMQdXqDIv2sWl53tBOc11GNOJ9TXBYd30I4H3pm8xZs42n21h5T5izsxTbJ3w3p353km7i0fLC34IGdeWKn2UNwx2yZa1RVAiLyWwHfxECvLvdyISyI0Vq2ZIgb5%2BmgZ%2Fno2dxwV2b3xD1w4jaeIJyFStodpynfuGj3SyWnGgOWkFqLnSyn4QqvknBqlfB8m6NySvkaPMpsm1lmTeqDUFIiWcLG9dxACWAXUc8gVRKIZnoLTipvgCwrbv18HK%2Fi6XO%2BuFafXTvm4mmqCHTmlwivlb%2BWnf5JC60Uo47JdF8PjU9Q%2BU68fIBapLdrkoBIOrrUXVM%2FS9tRRQ54i7w9XhVsw%2BotFqeJ2Eu%2FSfnQiUBKheSC0wlpf4yQY6pgHvs6C16hMwL1%2Fq0tVmiONJRYqw%2FyrJBDgKRjxPvFZXAndp1mVgT4yF5mjKOL8te6kDNTQQ3z9q%2FA40swn5UH2PrNMf9cGNtuxaeoQykB0tl2Oj9GOEtQAnAGjn93OlbpXgCSSpqUUTgW1Kf%2FQXbjbFlaodGlkrN2T3bpW94RjjW1%2FxH%2FQa2cIYsLJdr%2FGEYdOsy57ULnefnSkliHvJaqh3MTnjqYTc&X-Amz-Signature=fc395a687d96f7a0c0fa954daaf90a8c9168be3e664b4a70fbc7aa284c3271ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY6H3OSM%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIHDEZWI%2Ff78%2FRL0MOoqnmShY2%2B2aW31PRL0ZTBdccSpSAiBGB%2FsS7vi3dNj4alj5vCbVO3BhiQgWrOW0jR9ZvjB%2F7Cr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMUp%2B%2BEQmYdk0MtOpjKtwDpMsUtcuyCj3UANNc2NUdrPQMCHm%2BEQ7ETjIWJtI61CZBqU7V6Yx7%2FM2qWuKcJAnHAyVz2Mxs2pUKXvrUdPEJAoxGC3D%2FZa8xfH%2FFh8%2Bv8ienBs%2B5IvPff6M4aLOXCjNUAMuVJjzssApZg67ftHttMTvJau9Gdz1Q%2FuhdHmMpOSzPE4tdLb1svZjLrl2%2BjMP8hiZhClRaX5hmHRR3CxOenlrQy6ux1kXEgsug5MHjU1RTvSasWHaCgkRXNbW4eSaH4Y0aSTwUf4M7A%2FAN1D2bo%2FcMmu6xMTH8TjL4slm%2B79JTq%2F11k883oCZUFfbgDQPlN9T%2BzY33bvaav078VY9obX2UukXBgeXv6u631w%2FuVwqrPjxbo%2BUNymNXRjosnLtnai8YAq1dD2YdVyyScB04KxAsyaVESLvGJ2OnsJ90pl2%2BBso0hnxo9%2BQA8csIRYo4s4aBVHTN3QAeXHZPSEhuVLz5eVu5mV5%2FIiCvLpXjNXQ8uqlYabEBUWOBuT4nmI2nfSsYthdcDs2jea0ETTofAEQL0RVLy47%2BeLPhN4iXwe2Izm5CqhcMnHDAMT%2BiJAaL1o1sv5IpMR%2FErp5%2F7DTov5XybsTWLaWdy5eB0o5lByjdgTIXjLY%2B7YCaD4Yw0pb4yQY6pgFH7PYbSDSShD9X4eY%2B6pLaUISpy3fCdhrZfHsU2rfDSqgifnTtH0kf6aasbMXF%2BA3wqXT3oH0t1aVF1Bb3gruAfxhEMrm9JucHhtJPWFhfzJnUDZx2P%2BT5nSWy%2FqrFiRS5zE7CKC2heLuicncY7m8qsKnDdCehxeXCtPzhlHjPSgkLp%2FTAx1nsjtYp8eh4DrbMA8daYBXFiMddC7KEMzWzJu0jtz4g&X-Amz-Signature=1b15f71b2a3a4677345082f3706c8d3dd83cfbfad008cd72247c311193d5c8c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKBSIVVU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDNYWOrjwRAds0vl3Dj6FvJhqojwxUzYSZ29bcK3zFYzAiAwb61%2F4HPeKbJXDxfNDWzX9ahomyieVnQgSpI8MJpEAyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM0j%2FIR%2FB71dfMYmmpKtwDalD%2FKZiPP5rPYQ%2BfW5y6gd%2FaSwUCqjrby7GzXYQ4r9lUr0gMgh82uDe5j5ecuDqE62deU%2F5GUJz9HPkrFm39Urj%2Fyr%2FzHYSdJc%2B0qs18g9qNH3tNLHUcyyGE8sNmUijqUC1CbedL37MceHfoWAJ1jNOVpJk624r0APS93oJHGv%2Bw3sERf8QtF1fJdQb11gUGrddvm8C5PuiGOyGcZMPt7%2Fa6OJpQHaXeyQItZgdJcMkHUmBx1BXdQKe4rvBCpH8dZ8%2BaG3pUiCbeMQdXqDIv2sWl53tBOc11GNOJ9TXBYd30I4H3pm8xZs42n21h5T5izsxTbJ3w3p353km7i0fLC34IGdeWKn2UNwx2yZa1RVAiLyWwHfxECvLvdyISyI0Vq2ZIgb5%2BmgZ%2Fno2dxwV2b3xD1w4jaeIJyFStodpynfuGj3SyWnGgOWkFqLnSyn4QqvknBqlfB8m6NySvkaPMpsm1lmTeqDUFIiWcLG9dxACWAXUc8gVRKIZnoLTipvgCwrbv18HK%2Fi6XO%2BuFafXTvm4mmqCHTmlwivlb%2BWnf5JC60Uo47JdF8PjU9Q%2BU68fIBapLdrkoBIOrrUXVM%2FS9tRRQ54i7w9XhVsw%2BotFqeJ2Eu%2FSfnQiUBKheSC0wlpf4yQY6pgHvs6C16hMwL1%2Fq0tVmiONJRYqw%2FyrJBDgKRjxPvFZXAndp1mVgT4yF5mjKOL8te6kDNTQQ3z9q%2FA40swn5UH2PrNMf9cGNtuxaeoQykB0tl2Oj9GOEtQAnAGjn93OlbpXgCSSpqUUTgW1Kf%2FQXbjbFlaodGlkrN2T3bpW94RjjW1%2FxH%2FQa2cIYsLJdr%2FGEYdOsy57ULnefnSkliHvJaqh3MTnjqYTc&X-Amz-Signature=bbf1423c34aa477478c412b87b5f5f0cee06bbb861c2d2d25432dbaae5441c79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXDND4R%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIC%2FdmbjZLjrwAMzqBQzJYte5SLdZROJG%2BN0zmTO1OIbgAiEA7uoQZRrcEw6J9fotZhMv%2BR1r8D9TNvSeNMmE16jVrWsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDNOMnpYawBIfTfN5SrcAwh9Mx45Q%2FsX8nx7yuh%2FeRumz%2Bv0%2F1j%2FAeF18YktojzoYYRV58RrarzdA7BPGp818mbxrhTWiBUV0aCQTdfE3KAMNKr3QuVZhSJPcXpkdKAdhsR9ICAdo61kZUeDo5zqtR1wQdBJFNmsjI%2BI71NrN%2BUcJg%2B3Bu8mOmTRffKhVgNuS%2F5UkHdnofvFrYjq4mW77%2B2rKcQzPmLEimMANpGQppGF152kbmYcTsGAZTx31CXi3hahPd2whgzxosY1hAWJjuPnCWFeEjnJQE%2F6EdjeLNqfQccv1rgL8C5GF9cuRu%2BefHCOxlvVnuL0f0KxGHAompN2u99ONtHl79rBvSkU5bFFp9EfZ%2BFTAvBHGPjkBjS1cMArJ4ANobidUxzsvV9rR2JX8dCwU1jpRtK67w01uxSGv6y18P5NUsFvFQpstsuRJwLi9oXF%2BdFFUsMK%2F%2BysoFOt8hWnP323Bw5KuCDGrhqgFkrYb2exAs2te2Wr5i5Q66KhiiLKYt8Lwn7tQe3j14QbN%2FQJf%2FNFsJMYJgXVnUVm4Rnw3Lzvu4pmCqqem4kVeiNWhjG%2BStvmAD2eYRelg%2BvIcQDd%2BO1Xjf%2FxVafloRZwyMbVSe35SFL%2F%2FfDdZG6O8YAWP2Qvh7oOe2ZtMM%2BW%2BMkGOqUBElIy%2Bk7S1MuXLidGk4LaMksjJDaSJ19Oy1ZbgaUNbTyAkS7KePK91j1wPuiJsv2YUxwNUOnA1zO5Vsk1Vicz3GZB30Bl8BrXyC3k9B09CIxe1YxDKzi9TzbP4fcatPa9k59%2Bf95jj%2BWZHJV8jmv1BingaCj72NmoWMi1J%2FWBkef%2FIvdvIZbUaX94NIBhn9%2F2EhEZV3m%2BxFVcazwTBUNit6nhGqFP&X-Amz-Signature=7087ca294699c5801e1d3d888e96cdcdc827d1f643c353cc7bb5cfaed32e4139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKBSIVVU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDNYWOrjwRAds0vl3Dj6FvJhqojwxUzYSZ29bcK3zFYzAiAwb61%2F4HPeKbJXDxfNDWzX9ahomyieVnQgSpI8MJpEAyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM0j%2FIR%2FB71dfMYmmpKtwDalD%2FKZiPP5rPYQ%2BfW5y6gd%2FaSwUCqjrby7GzXYQ4r9lUr0gMgh82uDe5j5ecuDqE62deU%2F5GUJz9HPkrFm39Urj%2Fyr%2FzHYSdJc%2B0qs18g9qNH3tNLHUcyyGE8sNmUijqUC1CbedL37MceHfoWAJ1jNOVpJk624r0APS93oJHGv%2Bw3sERf8QtF1fJdQb11gUGrddvm8C5PuiGOyGcZMPt7%2Fa6OJpQHaXeyQItZgdJcMkHUmBx1BXdQKe4rvBCpH8dZ8%2BaG3pUiCbeMQdXqDIv2sWl53tBOc11GNOJ9TXBYd30I4H3pm8xZs42n21h5T5izsxTbJ3w3p353km7i0fLC34IGdeWKn2UNwx2yZa1RVAiLyWwHfxECvLvdyISyI0Vq2ZIgb5%2BmgZ%2Fno2dxwV2b3xD1w4jaeIJyFStodpynfuGj3SyWnGgOWkFqLnSyn4QqvknBqlfB8m6NySvkaPMpsm1lmTeqDUFIiWcLG9dxACWAXUc8gVRKIZnoLTipvgCwrbv18HK%2Fi6XO%2BuFafXTvm4mmqCHTmlwivlb%2BWnf5JC60Uo47JdF8PjU9Q%2BU68fIBapLdrkoBIOrrUXVM%2FS9tRRQ54i7w9XhVsw%2BotFqeJ2Eu%2FSfnQiUBKheSC0wlpf4yQY6pgHvs6C16hMwL1%2Fq0tVmiONJRYqw%2FyrJBDgKRjxPvFZXAndp1mVgT4yF5mjKOL8te6kDNTQQ3z9q%2FA40swn5UH2PrNMf9cGNtuxaeoQykB0tl2Oj9GOEtQAnAGjn93OlbpXgCSSpqUUTgW1Kf%2FQXbjbFlaodGlkrN2T3bpW94RjjW1%2FxH%2FQa2cIYsLJdr%2FGEYdOsy57ULnefnSkliHvJaqh3MTnjqYTc&X-Amz-Signature=9b553eae81b5f57baa2d95f63c8a2467a0d2a441826e9479be149ada1c9d36a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G4TPAOY%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCID7oW6n6aKU2VoUvteYHBagp1v9UxHFfRHjlnO054lZaAiEA4ZcIdrJEF0NZYvBJVoiPQ1Us5Zs%2Bjw1zPgQinvTGrhkq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDG8BvGXkL5WAq9I%2BJyrcA2fEdWaM%2F94UuYQrkVkIeXr4QVY5ei0uGdWs3FGW6p2gfuwE3efTHlGHARlc6fM3BVNGG%2BZCV2S%2FBZxz6%2BpDZV4ECHlUx76ha0Wi1J41i%2FqNwphn56ijdudwf2JrUuDfEffSUIbfGClpBGzYB6k4Mwp07fzxHKG72uptJNOkT%2F9Q7f1WLzzZFj%2BRTY2FS%2FeJGN%2FMLr9dD%2FTjppU066R9V8RzMr0IBxcTW6KMsSNDABXkzYXAvudkx82rlUINyzjHw23w7%2FhJx%2Bk15cXDvxyMDfYfWFdVRjOZtyS9RuUWER1mIg99THJHQARZd3k0Dd%2BH7bqL%2BxDZfCMIiTMzerHy28RKAn%2Bg0OHduEoD4rtZZTtHQE3nDXx94PTta94H%2FXsa7Zu3c8EkiEb3cgCnHSgIEBm6e7%2FWppRwxJYLeRx%2F2DnoumLP3DM536JyGsFtZcrrZWNhnXqbXxQJ9scmOUz0qFEuk2WxIdiZpP%2F%2BWpV3JwDuYjr8wtBK1nbpVTSitQvZ26k3pyd1cwrYJOTUIDh%2BWIBGIf2Tql8Ma3l29KpmmUUTfIuvBrcnpM7HIRgo0RGfl95rWanl1CruO%2BRWKZeowGeIS08aX5Wxqw1d%2B60riyTcIS7MR0%2B5P9BGstNbMK6X%2BMkGOqUBXLeeCNZ9jbrqDUq4iTZ%2FJ%2Bpo%2BI47l%2BpIpMRMj1KpZigazL4taAKhiB1KwkjOopThxS7vCs6OLlr%2FEtPtn7PjnP6G2mWDwgZgbCik15VTXbA7am3xBb%2F3WVnaM%2BMDe0TNlEwXrpu60xb05Gb152nkd8Sjn7YVMf%2FhOm2Pu597d9L9oYUVWmp%2Fc0Rap3igqrQ2c8MjJ3vCETTTeg8%2FHfecTfsc3OTJ&X-Amz-Signature=c51902a27b45cb2b07d78cc22e4ab28a8058d70f4f02328f2ff441bdae2c8450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKBSIVVU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDNYWOrjwRAds0vl3Dj6FvJhqojwxUzYSZ29bcK3zFYzAiAwb61%2F4HPeKbJXDxfNDWzX9ahomyieVnQgSpI8MJpEAyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM0j%2FIR%2FB71dfMYmmpKtwDalD%2FKZiPP5rPYQ%2BfW5y6gd%2FaSwUCqjrby7GzXYQ4r9lUr0gMgh82uDe5j5ecuDqE62deU%2F5GUJz9HPkrFm39Urj%2Fyr%2FzHYSdJc%2B0qs18g9qNH3tNLHUcyyGE8sNmUijqUC1CbedL37MceHfoWAJ1jNOVpJk624r0APS93oJHGv%2Bw3sERf8QtF1fJdQb11gUGrddvm8C5PuiGOyGcZMPt7%2Fa6OJpQHaXeyQItZgdJcMkHUmBx1BXdQKe4rvBCpH8dZ8%2BaG3pUiCbeMQdXqDIv2sWl53tBOc11GNOJ9TXBYd30I4H3pm8xZs42n21h5T5izsxTbJ3w3p353km7i0fLC34IGdeWKn2UNwx2yZa1RVAiLyWwHfxECvLvdyISyI0Vq2ZIgb5%2BmgZ%2Fno2dxwV2b3xD1w4jaeIJyFStodpynfuGj3SyWnGgOWkFqLnSyn4QqvknBqlfB8m6NySvkaPMpsm1lmTeqDUFIiWcLG9dxACWAXUc8gVRKIZnoLTipvgCwrbv18HK%2Fi6XO%2BuFafXTvm4mmqCHTmlwivlb%2BWnf5JC60Uo47JdF8PjU9Q%2BU68fIBapLdrkoBIOrrUXVM%2FS9tRRQ54i7w9XhVsw%2BotFqeJ2Eu%2FSfnQiUBKheSC0wlpf4yQY6pgHvs6C16hMwL1%2Fq0tVmiONJRYqw%2FyrJBDgKRjxPvFZXAndp1mVgT4yF5mjKOL8te6kDNTQQ3z9q%2FA40swn5UH2PrNMf9cGNtuxaeoQykB0tl2Oj9GOEtQAnAGjn93OlbpXgCSSpqUUTgW1Kf%2FQXbjbFlaodGlkrN2T3bpW94RjjW1%2FxH%2FQa2cIYsLJdr%2FGEYdOsy57ULnefnSkliHvJaqh3MTnjqYTc&X-Amz-Signature=ce6f465acb88ef6e8d1280646ea19d28ff988d48da2d33a5b34612bdd198935d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULFSFIDS%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEz7QoYHXvjCaBM%2B%2FpGLMnbVHJGpcSMGDYseq%2FZQe3XyAiBPKEy3Z28499BEpdRvG3dw9Tzwt4eWAB6klw1CwJ5TBir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMY0tqnSLoiCpXdNH2KtwDGChCpmJl%2FZdn5hZVY0hNqSy7tIRUnRaEGmdFrk%2BjBuq5BKB3NJQiX8gte224V5SbDkXbNLZ4QtU%2Byd3Za%2FKenV%2BZjw3uVcPWalvJrO4thushzJpFNnSzLK08TSf8zoMmbutvtwsm2q7X5RdQepjUDlYhSgzp4%2FXhkvrb%2FardNl8lpkoCsN2bWmsKpapLsSXzbHEvyHVK%2BCIUs9SXPkqTod1K1gIUsRL78HfjG2TQ36gTR99GFI409%2FKAiC1oyAPVY6CCiutU%2BiuaDeIUmg67%2F%2FPxrGL%2FpvnzuxkBtek63KmIEH5JVlErPAQRnueZH%2BQxMTloesgs80%2Fuhz3xn5cIzC8Lf0qs81fWnNtrhOF5LGu3lbKViy6EvSpAsMqP03dvWRm1PHDduMeg2eKIlOm3hb7d5pjMVfhDoQUWn5yXVFhPQUP7UOIJDVWCYhsGb%2BWb3LjrF8JEbSMYpEsMA4G4%2FapKXI%2FHraILCGhoQaNwvSYfjaLSqTFozg4AIgt83%2B9Rqa29nysQ4DMqoFgD8ND8%2FqnIFRtWvJtwTm1kz%2FjvfrwBwHP8AdyMCX%2BeDqz4%2Bdm7zVVMmtmuCgJPMLB6RZagk5z5atmbsjxSzms5dbH%2FwlTx9%2Fv%2B%2FHPNb5mEXNow9Zb4yQY6pgGHLZUeKIcjedL3w7sR9DiRk9jpefbvvUVSMGYKPnThERrvKk2Lg6%2BY1NgAld54DPlbE0NpWqwFB%2BOnR2eDFpyf3o3P%2BljFVz7rILQGeN5rzs9KAYXRRmKa5V4MBShsx8NNAVBzqLJtRoyhDC8makAjTXjKtGAHWqi0HE0X8ez2r4RlGBSa17Au73hl60TRRDO9wqdePnZnM48CeUT0Xh%2FyHXCW7MQr&X-Amz-Signature=44dc2623dbe0724b339a5a0404188a61989ab9501bc16b4332e017cb2e3148b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKBSIVVU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDNYWOrjwRAds0vl3Dj6FvJhqojwxUzYSZ29bcK3zFYzAiAwb61%2F4HPeKbJXDxfNDWzX9ahomyieVnQgSpI8MJpEAyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM0j%2FIR%2FB71dfMYmmpKtwDalD%2FKZiPP5rPYQ%2BfW5y6gd%2FaSwUCqjrby7GzXYQ4r9lUr0gMgh82uDe5j5ecuDqE62deU%2F5GUJz9HPkrFm39Urj%2Fyr%2FzHYSdJc%2B0qs18g9qNH3tNLHUcyyGE8sNmUijqUC1CbedL37MceHfoWAJ1jNOVpJk624r0APS93oJHGv%2Bw3sERf8QtF1fJdQb11gUGrddvm8C5PuiGOyGcZMPt7%2Fa6OJpQHaXeyQItZgdJcMkHUmBx1BXdQKe4rvBCpH8dZ8%2BaG3pUiCbeMQdXqDIv2sWl53tBOc11GNOJ9TXBYd30I4H3pm8xZs42n21h5T5izsxTbJ3w3p353km7i0fLC34IGdeWKn2UNwx2yZa1RVAiLyWwHfxECvLvdyISyI0Vq2ZIgb5%2BmgZ%2Fno2dxwV2b3xD1w4jaeIJyFStodpynfuGj3SyWnGgOWkFqLnSyn4QqvknBqlfB8m6NySvkaPMpsm1lmTeqDUFIiWcLG9dxACWAXUc8gVRKIZnoLTipvgCwrbv18HK%2Fi6XO%2BuFafXTvm4mmqCHTmlwivlb%2BWnf5JC60Uo47JdF8PjU9Q%2BU68fIBapLdrkoBIOrrUXVM%2FS9tRRQ54i7w9XhVsw%2BotFqeJ2Eu%2FSfnQiUBKheSC0wlpf4yQY6pgHvs6C16hMwL1%2Fq0tVmiONJRYqw%2FyrJBDgKRjxPvFZXAndp1mVgT4yF5mjKOL8te6kDNTQQ3z9q%2FA40swn5UH2PrNMf9cGNtuxaeoQykB0tl2Oj9GOEtQAnAGjn93OlbpXgCSSpqUUTgW1Kf%2FQXbjbFlaodGlkrN2T3bpW94RjjW1%2FxH%2FQa2cIYsLJdr%2FGEYdOsy57ULnefnSkliHvJaqh3MTnjqYTc&X-Amz-Signature=9c679316ad3ccbdeb549a5eb7f9cb3959a0b36f11a9d8e61351cc2ec0037b5e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWOXHSYS%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCPGycYtXfoAq24gayuCIqjRQ36XPVev9VHecG20azoKAIgEm00v9VtMOB%2FKEQPbVzmDvNL2na7672MlTfvS4JelD4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDG2SqfKJKH%2BbMsxzWyrcAwfkvnvDe%2BlnGQvf4GdWcrgZ7YZVHcarAfOub57EaESTGyZCD207XYzLCbj4AT4Nbp9oxXyNuPQOovpaI1ivjGVYqV4tO0s8kLsBcN13IIC%2FkotkiXnEXDm3p2wTvwKtR00drIQbjib5LsGqiTbWY4zOXxAMeLl8xqEEd85EYmUnZDUud20%2FKWaXpNt0%2FSr6ECfxDWoCa4G0eDiBByDOkT4jE9it8GzF5YRU33fVdn6kSa5DVtLvnT9hpMcTtn%2BTJjzY64kX5YyRtTaIlMuaomfCcxFqbGzajiBgg4IomkeQTVDBXVlOC3VsjMwA5clODu4HxWqoRxEJxtdgtOHPHpHHyoc5rbDQn%2BEx5WkArsITamQKh%2FFM%2BTdyqkHnF5zwWjHspN40clk1ArJJ94CJC8oamNLja8Ps3bZfJjjNdf70bh%2F7wRKQ7jwrGgdki7t974nHcHpTys3Wbf8PcTIfUZDAtVBNpwjWRaEqxWZSg5u1nlJbX6BYNK57AFLXNPcDbrD26xxmtzxnf2yzLJsnx5owMcsYzOlFmavou3eOzECK2vV8wijlCK%2B6mU%2FT4ioSKEXp4zkbzQL8EFEnXVHCqGO%2FKOTTNOKeZWgRn%2Fxkxm%2Bjl1loCVQMz224lGHTMPGW%2BMkGOqUBS4soSIjQlASEGwTygGTkQUTKnMohIbZ3pSOvBl5DJe4UI3nlTGRW3RCASo4%2B1UI%2BJqZMwJ%2BGApbNxHjrEOE96jFuB8WgKHZLwifPPeonnNBu%2BKRc65gMcqhiYg85JnbddWkPTWZcHb0Q113Ze4E8IoAOb4cESlOn7TsJ4z6imj%2BqFogqBtvaH3SFSlFfzlFWI%2Bod%2BBWWBMfngu1sK8PGGNqQgTcD&X-Amz-Signature=c7a71dbc5cadcb7c1267b8faa3f856fc47e1f7e3e6512d300fe7f0a203f450d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URMJPVD3%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDQlOBOFjgwheDgYPrD0GWHs5D32vcUBfzZEfOiC2sSnAiA0IlX4s1eTavOzRo%2Bme0Oubah3Y%2BigGcK2SnDUfOcS3Sr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMYwWRHef0t9vBy7PyKtwDqcR9zXyhuTI3SyKr66wmikhAzozana1ghjjRYI8gW6kc2n%2B5FSB1NyjpGPX9fMF0rbWf2tF5DU%2BELYK9XAQJRRANYpxIB%2FhXdCHhXx8%2FPTe7Dv3EFaXfxGn%2BGUmQzF7wPD9A7w88stzYvlYRM8V%2Fc465VU1LcFyBQG5HpdFe37AWX0bsuSBMN3o39i2qoc0WCdCP%2FFk7wWHP8aKtE1odD8wusjwAPiUwBrDvuxQUKkXAcElPa0hIvOUjLtzbsQeVgWPhHf1ewfADKjNbInt4TcPLA72VXHWen135oynZ%2B2XzzzCtUcviKVIOutm%2F6wgyYhLq8dieHpwaBr0Q1As5fxQmTYs9tsWR9T8GzGuciLGqi%2Fu911K4zzPNUscUXjpfbtl5hijRq9Xw5NsvXFjS9DIVqGw5UeXOQ5VOwxggZ5P12mxvt%2BxySecbOJp%2F5woDGFcapSNu%2BnfGUGeu2RqnL4Jr74vY%2F5MWI5TfGxnR%2FREjPWMR6M0Srx72A8a682BK2qAR4GeuRyPlTcW8%2FQpHeigf9uztqEDOgJhZPoqtj9W1dp5gNV6NgreAmG7cjnoCHfORCwNce%2Fwk3SUAyZT3k1ioLDm8fPP%2Fkj%2FqGd4DGipYiDv6g20s0iCY%2Boswgpb4yQY6pgHt99LzFZ3Iz%2FrzQTVgyFkgXyWg0BlFpTtvN9oMr5X9QZD4Arm7zhxdNwiM4%2F6xHTJpr295XE8Dn8ocv4KXt0ekcqwnTV4Y%2Fv6h2kXFhlzIQpJA%2BXFJ5YNA46o%2BjT3JcDZk47Lu%2BC%2FukOAq73M7zqjgihp9MpmeT6TXFu%2FCMhkj9ZBICwjTcYbD8B6sf1hSYs9QS2JjvON8wxgb%2FUZb8GHdKFiLtt9I&X-Amz-Signature=6775e18e7cb59ab3e66cf3e572902d1c7a235316d26a6ed88a14d6e35557c25d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WUYI2PR%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIF2bOadtRWK7jbRYhMCdRTe%2B6AqbnT94c6gV6Cm%2BKRFjAiEA8zUaAGUI%2BikRsRMhUo%2BlO9asOrC%2BTQ59KuW07i1qGzkq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDG6aqRvpbRHbc7Kw1SrcAyZpN%2BM%2BNsucZCrNRPLHwMOSBHDNoqgtYyJEZb4AcC6OC006btXNhywzweHFmdQHioNbpMgGuKWZsl4Ew43UdbOWZUNVIK2P7sh9uff1aDYN%2BZ73z1%2FU4S5toOZh6ZyVCAwHY%2BpcL1Dn%2BT2w%2B6zqQhdkvC%2FCVEcT6Hc5CK9%2BuLuO34Kccjm5BFcx5Y3ELivJklTTwTtEWaTPPAOfSXKRvgiqH%2Bk9i5wzV0PUIgpciPhgaqkcHS4t0%2BjBhaw4uEAw2JXdepHJMv8LVtZcJYjFt34alXZ%2FN%2F8eRsrpsvIY0cmiX8lQdEaHScfQFJu0WS1Io5oIvXZf%2BJ4cwgTv%2B0Q63No4DYfy5a%2FZS%2BxQ1UMj8eMJF1r17ciUvxKnSij%2F9py0xxxmeIIXUNHNAKCILSjoE6sVDRi%2FRnKNahDQSNVsZ8c%2FY6ttZtOT2Wsvo%2B%2F9wlLbMf9F4Uu8tVFZ%2Fv%2F%2FkelGUlRJ1EP2FzxxXb9d6IXX2t51z3Bp29j0ZX09nc8XY%2FVdF1B28Pg3UG%2Fz3npT7my74ojawbdMZP3KJdMvRTYU4qf%2FFXxvTwXYUevkr%2FdJyBzTHI5aGSADEfGHVvqwkLlvnF2vo8TP54IGsUKT1v22%2B3uJwur%2FIY5DXKm0tE3QMK%2BW%2BMkGOqUBUWvhrWbdL%2FR9qanM%2B%2FCZp5l0N390DIK5A8GiqPXaUIK3W42IYbeFafCrPOVujruC1w9z1dPujG6QizGNjk1XpAejlYByxTR4i%2Bt%2Bbs2DIthi5r7%2BwxkZd3JJb0qC54nF0qOU41knzWINcrEphKd%2BgLJGzKiSW0hPbBlVqa%2BM3zpItwyNJTvBX8%2FwL4uMzzpE1Ur2BQvWaPJl1RCNcKR2KQ%2BJdr%2BJ&X-Amz-Signature=f14518f53d7dd5dbd30cf54f96617f345a4837201f4e66ec6002b72ab320def5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKBSIVVU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDNYWOrjwRAds0vl3Dj6FvJhqojwxUzYSZ29bcK3zFYzAiAwb61%2F4HPeKbJXDxfNDWzX9ahomyieVnQgSpI8MJpEAyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM0j%2FIR%2FB71dfMYmmpKtwDalD%2FKZiPP5rPYQ%2BfW5y6gd%2FaSwUCqjrby7GzXYQ4r9lUr0gMgh82uDe5j5ecuDqE62deU%2F5GUJz9HPkrFm39Urj%2Fyr%2FzHYSdJc%2B0qs18g9qNH3tNLHUcyyGE8sNmUijqUC1CbedL37MceHfoWAJ1jNOVpJk624r0APS93oJHGv%2Bw3sERf8QtF1fJdQb11gUGrddvm8C5PuiGOyGcZMPt7%2Fa6OJpQHaXeyQItZgdJcMkHUmBx1BXdQKe4rvBCpH8dZ8%2BaG3pUiCbeMQdXqDIv2sWl53tBOc11GNOJ9TXBYd30I4H3pm8xZs42n21h5T5izsxTbJ3w3p353km7i0fLC34IGdeWKn2UNwx2yZa1RVAiLyWwHfxECvLvdyISyI0Vq2ZIgb5%2BmgZ%2Fno2dxwV2b3xD1w4jaeIJyFStodpynfuGj3SyWnGgOWkFqLnSyn4QqvknBqlfB8m6NySvkaPMpsm1lmTeqDUFIiWcLG9dxACWAXUc8gVRKIZnoLTipvgCwrbv18HK%2Fi6XO%2BuFafXTvm4mmqCHTmlwivlb%2BWnf5JC60Uo47JdF8PjU9Q%2BU68fIBapLdrkoBIOrrUXVM%2FS9tRRQ54i7w9XhVsw%2BotFqeJ2Eu%2FSfnQiUBKheSC0wlpf4yQY6pgHvs6C16hMwL1%2Fq0tVmiONJRYqw%2FyrJBDgKRjxPvFZXAndp1mVgT4yF5mjKOL8te6kDNTQQ3z9q%2FA40swn5UH2PrNMf9cGNtuxaeoQykB0tl2Oj9GOEtQAnAGjn93OlbpXgCSSpqUUTgW1Kf%2FQXbjbFlaodGlkrN2T3bpW94RjjW1%2FxH%2FQa2cIYsLJdr%2FGEYdOsy57ULnefnSkliHvJaqh3MTnjqYTc&X-Amz-Signature=52179f0f0291a8368400a3d0a8b07c1439218efbc399add285229a789deff58c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKBSIVVU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDNYWOrjwRAds0vl3Dj6FvJhqojwxUzYSZ29bcK3zFYzAiAwb61%2F4HPeKbJXDxfNDWzX9ahomyieVnQgSpI8MJpEAyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM0j%2FIR%2FB71dfMYmmpKtwDalD%2FKZiPP5rPYQ%2BfW5y6gd%2FaSwUCqjrby7GzXYQ4r9lUr0gMgh82uDe5j5ecuDqE62deU%2F5GUJz9HPkrFm39Urj%2Fyr%2FzHYSdJc%2B0qs18g9qNH3tNLHUcyyGE8sNmUijqUC1CbedL37MceHfoWAJ1jNOVpJk624r0APS93oJHGv%2Bw3sERf8QtF1fJdQb11gUGrddvm8C5PuiGOyGcZMPt7%2Fa6OJpQHaXeyQItZgdJcMkHUmBx1BXdQKe4rvBCpH8dZ8%2BaG3pUiCbeMQdXqDIv2sWl53tBOc11GNOJ9TXBYd30I4H3pm8xZs42n21h5T5izsxTbJ3w3p353km7i0fLC34IGdeWKn2UNwx2yZa1RVAiLyWwHfxECvLvdyISyI0Vq2ZIgb5%2BmgZ%2Fno2dxwV2b3xD1w4jaeIJyFStodpynfuGj3SyWnGgOWkFqLnSyn4QqvknBqlfB8m6NySvkaPMpsm1lmTeqDUFIiWcLG9dxACWAXUc8gVRKIZnoLTipvgCwrbv18HK%2Fi6XO%2BuFafXTvm4mmqCHTmlwivlb%2BWnf5JC60Uo47JdF8PjU9Q%2BU68fIBapLdrkoBIOrrUXVM%2FS9tRRQ54i7w9XhVsw%2BotFqeJ2Eu%2FSfnQiUBKheSC0wlpf4yQY6pgHvs6C16hMwL1%2Fq0tVmiONJRYqw%2FyrJBDgKRjxPvFZXAndp1mVgT4yF5mjKOL8te6kDNTQQ3z9q%2FA40swn5UH2PrNMf9cGNtuxaeoQykB0tl2Oj9GOEtQAnAGjn93OlbpXgCSSpqUUTgW1Kf%2FQXbjbFlaodGlkrN2T3bpW94RjjW1%2FxH%2FQa2cIYsLJdr%2FGEYdOsy57ULnefnSkliHvJaqh3MTnjqYTc&X-Amz-Signature=cede6dd141ee917dd16640ce49f00639fe6e636b0195d69aad92f899179afa29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S52YOIIR%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDOyMtR9NVll2YhHyNHEW0vb2Z0DnJJ%2B5PX7ZVo64q8PAiB6iy8R6MhZ%2FXWL%2Fku2VHDtUkA1UmjK6jrHmxmnMM2uuyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM03Nkg1ds1i2Z%2FXiHKtwD9lyie9KVUs7ujXz9jvTGDA31j8i4iGPA06x33vuRkUch%2FpFLIiyAj6gT061aqOGvWzEuLQoeUpXWymAchsd0TulHBTdAeFI87yMlJCSZcD6UlOarVMwhVVRrLDMrQIduhj8ZqZHgQWdWulFUopJWHdH2vY%2BLA4vFdvQuax%2FvL5OOQ2WCFgf132UXuf0Cnd1HEM%2BhRYdENDjOjmgUpt%2BYGSxGH1tyk0npWdXWngXY%2BYcjojzf8OS8DlCLgPd1YxfevTjIzfpc8l0%2BBED1BDE8cjs7v1fbVib5jYv28HFLMlMO6Mus3ORkixlrxCHVfyufB3mb28c7qX4iz8ySoy3Pz2peuoqS2ynE2GtYvyASq%2BEXc7WM5mN2CK7lxZebHtiXFsWczk7USILrrYZoNRUCJwemGQ6sodTbHn18PfWQ93ByceKJGDUB0818Gx%2Fj3bgD5no3HxkhqYhpxhUtFOn4Us6Or%2FZttBvbYFraDbvwRd3GUCFni0PZpe4GWOeNn49cbiofrT22TULjXZeEyrbfmBDmL8hW0DxRNdFvZ5vYcSRknHPvTrRUd3oMpDXJAOe%2BuMlkZd8SjOzi664f5eSDIkB4rVcyUWoU7TyMkJRmlGKOEf3syvTyAQXtSvow8pb4yQY6pgEgcbYV4Ke1iRNq4fv0KoTky5ETZf3dRrw3rrOBGSkX3NsIUe94%2B9KBhhXwv6utMZCkx%2FDVbxT4eMQ9x90HswLrMGzC5Ujd3HKDN9%2BU3z8fHbWkUbfCQYBd%2FUbhrZgJ48QKEE%2BLFbpga0VCWQcFqytGgqU%2BIrTFKr9Kid2vXQvFcs7JrhLdORlZioQ9uMSNpUyyY39dlM%2FNf4mQ4Fxz6L0Zv9DCMglz&X-Amz-Signature=33cb5e4328091c70f38dd736f7a3c9cd0e2e4261ee03eade0eb05d75912433fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S52YOIIR%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDOyMtR9NVll2YhHyNHEW0vb2Z0DnJJ%2B5PX7ZVo64q8PAiB6iy8R6MhZ%2FXWL%2Fku2VHDtUkA1UmjK6jrHmxmnMM2uuyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM03Nkg1ds1i2Z%2FXiHKtwD9lyie9KVUs7ujXz9jvTGDA31j8i4iGPA06x33vuRkUch%2FpFLIiyAj6gT061aqOGvWzEuLQoeUpXWymAchsd0TulHBTdAeFI87yMlJCSZcD6UlOarVMwhVVRrLDMrQIduhj8ZqZHgQWdWulFUopJWHdH2vY%2BLA4vFdvQuax%2FvL5OOQ2WCFgf132UXuf0Cnd1HEM%2BhRYdENDjOjmgUpt%2BYGSxGH1tyk0npWdXWngXY%2BYcjojzf8OS8DlCLgPd1YxfevTjIzfpc8l0%2BBED1BDE8cjs7v1fbVib5jYv28HFLMlMO6Mus3ORkixlrxCHVfyufB3mb28c7qX4iz8ySoy3Pz2peuoqS2ynE2GtYvyASq%2BEXc7WM5mN2CK7lxZebHtiXFsWczk7USILrrYZoNRUCJwemGQ6sodTbHn18PfWQ93ByceKJGDUB0818Gx%2Fj3bgD5no3HxkhqYhpxhUtFOn4Us6Or%2FZttBvbYFraDbvwRd3GUCFni0PZpe4GWOeNn49cbiofrT22TULjXZeEyrbfmBDmL8hW0DxRNdFvZ5vYcSRknHPvTrRUd3oMpDXJAOe%2BuMlkZd8SjOzi664f5eSDIkB4rVcyUWoU7TyMkJRmlGKOEf3syvTyAQXtSvow8pb4yQY6pgEgcbYV4Ke1iRNq4fv0KoTky5ETZf3dRrw3rrOBGSkX3NsIUe94%2B9KBhhXwv6utMZCkx%2FDVbxT4eMQ9x90HswLrMGzC5Ujd3HKDN9%2BU3z8fHbWkUbfCQYBd%2FUbhrZgJ48QKEE%2BLFbpga0VCWQcFqytGgqU%2BIrTFKr9Kid2vXQvFcs7JrhLdORlZioQ9uMSNpUyyY39dlM%2FNf4mQ4Fxz6L0Zv9DCMglz&X-Amz-Signature=8631667244e9856ff5114d6df670d921733ebd8e3e22d35b27e28f895387b43f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S52YOIIR%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDOyMtR9NVll2YhHyNHEW0vb2Z0DnJJ%2B5PX7ZVo64q8PAiB6iy8R6MhZ%2FXWL%2Fku2VHDtUkA1UmjK6jrHmxmnMM2uuyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM03Nkg1ds1i2Z%2FXiHKtwD9lyie9KVUs7ujXz9jvTGDA31j8i4iGPA06x33vuRkUch%2FpFLIiyAj6gT061aqOGvWzEuLQoeUpXWymAchsd0TulHBTdAeFI87yMlJCSZcD6UlOarVMwhVVRrLDMrQIduhj8ZqZHgQWdWulFUopJWHdH2vY%2BLA4vFdvQuax%2FvL5OOQ2WCFgf132UXuf0Cnd1HEM%2BhRYdENDjOjmgUpt%2BYGSxGH1tyk0npWdXWngXY%2BYcjojzf8OS8DlCLgPd1YxfevTjIzfpc8l0%2BBED1BDE8cjs7v1fbVib5jYv28HFLMlMO6Mus3ORkixlrxCHVfyufB3mb28c7qX4iz8ySoy3Pz2peuoqS2ynE2GtYvyASq%2BEXc7WM5mN2CK7lxZebHtiXFsWczk7USILrrYZoNRUCJwemGQ6sodTbHn18PfWQ93ByceKJGDUB0818Gx%2Fj3bgD5no3HxkhqYhpxhUtFOn4Us6Or%2FZttBvbYFraDbvwRd3GUCFni0PZpe4GWOeNn49cbiofrT22TULjXZeEyrbfmBDmL8hW0DxRNdFvZ5vYcSRknHPvTrRUd3oMpDXJAOe%2BuMlkZd8SjOzi664f5eSDIkB4rVcyUWoU7TyMkJRmlGKOEf3syvTyAQXtSvow8pb4yQY6pgEgcbYV4Ke1iRNq4fv0KoTky5ETZf3dRrw3rrOBGSkX3NsIUe94%2B9KBhhXwv6utMZCkx%2FDVbxT4eMQ9x90HswLrMGzC5Ujd3HKDN9%2BU3z8fHbWkUbfCQYBd%2FUbhrZgJ48QKEE%2BLFbpga0VCWQcFqytGgqU%2BIrTFKr9Kid2vXQvFcs7JrhLdORlZioQ9uMSNpUyyY39dlM%2FNf4mQ4Fxz6L0Zv9DCMglz&X-Amz-Signature=0892cb63cee31831eaee46338923d2ef59f141ef67323dc3ebd36f8c3570183b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S52YOIIR%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDOyMtR9NVll2YhHyNHEW0vb2Z0DnJJ%2B5PX7ZVo64q8PAiB6iy8R6MhZ%2FXWL%2Fku2VHDtUkA1UmjK6jrHmxmnMM2uuyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM03Nkg1ds1i2Z%2FXiHKtwD9lyie9KVUs7ujXz9jvTGDA31j8i4iGPA06x33vuRkUch%2FpFLIiyAj6gT061aqOGvWzEuLQoeUpXWymAchsd0TulHBTdAeFI87yMlJCSZcD6UlOarVMwhVVRrLDMrQIduhj8ZqZHgQWdWulFUopJWHdH2vY%2BLA4vFdvQuax%2FvL5OOQ2WCFgf132UXuf0Cnd1HEM%2BhRYdENDjOjmgUpt%2BYGSxGH1tyk0npWdXWngXY%2BYcjojzf8OS8DlCLgPd1YxfevTjIzfpc8l0%2BBED1BDE8cjs7v1fbVib5jYv28HFLMlMO6Mus3ORkixlrxCHVfyufB3mb28c7qX4iz8ySoy3Pz2peuoqS2ynE2GtYvyASq%2BEXc7WM5mN2CK7lxZebHtiXFsWczk7USILrrYZoNRUCJwemGQ6sodTbHn18PfWQ93ByceKJGDUB0818Gx%2Fj3bgD5no3HxkhqYhpxhUtFOn4Us6Or%2FZttBvbYFraDbvwRd3GUCFni0PZpe4GWOeNn49cbiofrT22TULjXZeEyrbfmBDmL8hW0DxRNdFvZ5vYcSRknHPvTrRUd3oMpDXJAOe%2BuMlkZd8SjOzi664f5eSDIkB4rVcyUWoU7TyMkJRmlGKOEf3syvTyAQXtSvow8pb4yQY6pgEgcbYV4Ke1iRNq4fv0KoTky5ETZf3dRrw3rrOBGSkX3NsIUe94%2B9KBhhXwv6utMZCkx%2FDVbxT4eMQ9x90HswLrMGzC5Ujd3HKDN9%2BU3z8fHbWkUbfCQYBd%2FUbhrZgJ48QKEE%2BLFbpga0VCWQcFqytGgqU%2BIrTFKr9Kid2vXQvFcs7JrhLdORlZioQ9uMSNpUyyY39dlM%2FNf4mQ4Fxz6L0Zv9DCMglz&X-Amz-Signature=4de5853390e2839e765d418ae54abeacd584aab163824bea3669e6156e67e66b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKFUPAOD%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICe5CBkQqP50UEPD1YLSzqBCPGmYTAPFPBfkklZ2q2BpAiEA1gC0CrZDyRlWQJ5gTxcUh6J044cdfhySOjel%2FYh%2BTssq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCelWoBkPFk8YIHB%2FircA5h4PL3sCZjPrkddcBC%2B5hCb6H01s8kB0lL90t7vnXb%2F2wnCeq1j8zYNyEt3shE0BoR3JwprUL4wXF3LxcRGW4Iqe3OUFfZ5LCeAZYc8%2FHSwKah%2FOWAMxOmo18KCrryvsj7K%2BLgwjMFwII%2FyyLsuea%2FwIbgDB9T187CnGs%2FoxQ0xKQi3iLfV1YwDtpnrfC9TwrpKpi9GuMFVpR4tlsm21rwpfaz3MUrJjOI%2BeHEquRgFcPW59QMUHZI28X3OG7KbDbXLYrIkQZ9TjG2Jn10Qm6EqZGfYTYSZ3AOiZgu3A6XGxBo0dOI4%2ByrU9tmaXOR20hgBtlGcVqslTuhpZoIY%2Fj0hkepdpPnqR3jDYUJD8mzEG3U%2FkaDiwx7bc7DelQUHFEI0S2d6kX%2F9LkhMaidlgoBoMR7znQfLFxPv%2BCTsTlIQ66Gr40HaxslNvgKr7JLuRGZWq054YELkydr14YbumhstUKLWhQxv0UPgjXYfzWNg0JMFb4iepA37iQF8ywoN15ITkUI%2B0ddBuz8n%2FURzosyFHKkZoSAja46tedNvSHuykovmJkiGG8Uw1xKLUKaoQ%2F4zJEJ7dX3G6QQ59%2F8ZXRPg4OeTgtx84eqa%2FLAtMIAXF5n84NWOZLeGhdIAMN6X%2BMkGOqUB%2FKfQewXTWu%2F22Uzh8wavDGKV6oM2bjkrK1J25RDXPCVA3rcnZ50B5YDaouO%2BEJqykfX5X9NbKNGErYrmd7brHmAMpIOpSZpHRtIhetQ1VWBgQsCFn98ysltqFBlhon8LqKIHrhapha88ozKBFTUavZYqi3K1SFMLkaRrMmUG1%2BRvEigH2x%2BnHxbAqd9loEWcjBzOEI%2FR03ZVKG47qb4ssgFQHsru&X-Amz-Signature=c5a3fc4850c4d13164f8020abb708838806b5d93411af48b78135ed8f5a8726a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S52YOIIR%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDOyMtR9NVll2YhHyNHEW0vb2Z0DnJJ%2B5PX7ZVo64q8PAiB6iy8R6MhZ%2FXWL%2Fku2VHDtUkA1UmjK6jrHmxmnMM2uuyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM03Nkg1ds1i2Z%2FXiHKtwD9lyie9KVUs7ujXz9jvTGDA31j8i4iGPA06x33vuRkUch%2FpFLIiyAj6gT061aqOGvWzEuLQoeUpXWymAchsd0TulHBTdAeFI87yMlJCSZcD6UlOarVMwhVVRrLDMrQIduhj8ZqZHgQWdWulFUopJWHdH2vY%2BLA4vFdvQuax%2FvL5OOQ2WCFgf132UXuf0Cnd1HEM%2BhRYdENDjOjmgUpt%2BYGSxGH1tyk0npWdXWngXY%2BYcjojzf8OS8DlCLgPd1YxfevTjIzfpc8l0%2BBED1BDE8cjs7v1fbVib5jYv28HFLMlMO6Mus3ORkixlrxCHVfyufB3mb28c7qX4iz8ySoy3Pz2peuoqS2ynE2GtYvyASq%2BEXc7WM5mN2CK7lxZebHtiXFsWczk7USILrrYZoNRUCJwemGQ6sodTbHn18PfWQ93ByceKJGDUB0818Gx%2Fj3bgD5no3HxkhqYhpxhUtFOn4Us6Or%2FZttBvbYFraDbvwRd3GUCFni0PZpe4GWOeNn49cbiofrT22TULjXZeEyrbfmBDmL8hW0DxRNdFvZ5vYcSRknHPvTrRUd3oMpDXJAOe%2BuMlkZd8SjOzi664f5eSDIkB4rVcyUWoU7TyMkJRmlGKOEf3syvTyAQXtSvow8pb4yQY6pgEgcbYV4Ke1iRNq4fv0KoTky5ETZf3dRrw3rrOBGSkX3NsIUe94%2B9KBhhXwv6utMZCkx%2FDVbxT4eMQ9x90HswLrMGzC5Ujd3HKDN9%2BU3z8fHbWkUbfCQYBd%2FUbhrZgJ48QKEE%2BLFbpga0VCWQcFqytGgqU%2BIrTFKr9Kid2vXQvFcs7JrhLdORlZioQ9uMSNpUyyY39dlM%2FNf4mQ4Fxz6L0Zv9DCMglz&X-Amz-Signature=8f14f27d40d28eb8ca2281f4c140df8a3a3c4e6cc8063e84826c19d4255dd0a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S52YOIIR%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDOyMtR9NVll2YhHyNHEW0vb2Z0DnJJ%2B5PX7ZVo64q8PAiB6iy8R6MhZ%2FXWL%2Fku2VHDtUkA1UmjK6jrHmxmnMM2uuyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM03Nkg1ds1i2Z%2FXiHKtwD9lyie9KVUs7ujXz9jvTGDA31j8i4iGPA06x33vuRkUch%2FpFLIiyAj6gT061aqOGvWzEuLQoeUpXWymAchsd0TulHBTdAeFI87yMlJCSZcD6UlOarVMwhVVRrLDMrQIduhj8ZqZHgQWdWulFUopJWHdH2vY%2BLA4vFdvQuax%2FvL5OOQ2WCFgf132UXuf0Cnd1HEM%2BhRYdENDjOjmgUpt%2BYGSxGH1tyk0npWdXWngXY%2BYcjojzf8OS8DlCLgPd1YxfevTjIzfpc8l0%2BBED1BDE8cjs7v1fbVib5jYv28HFLMlMO6Mus3ORkixlrxCHVfyufB3mb28c7qX4iz8ySoy3Pz2peuoqS2ynE2GtYvyASq%2BEXc7WM5mN2CK7lxZebHtiXFsWczk7USILrrYZoNRUCJwemGQ6sodTbHn18PfWQ93ByceKJGDUB0818Gx%2Fj3bgD5no3HxkhqYhpxhUtFOn4Us6Or%2FZttBvbYFraDbvwRd3GUCFni0PZpe4GWOeNn49cbiofrT22TULjXZeEyrbfmBDmL8hW0DxRNdFvZ5vYcSRknHPvTrRUd3oMpDXJAOe%2BuMlkZd8SjOzi664f5eSDIkB4rVcyUWoU7TyMkJRmlGKOEf3syvTyAQXtSvow8pb4yQY6pgEgcbYV4Ke1iRNq4fv0KoTky5ETZf3dRrw3rrOBGSkX3NsIUe94%2B9KBhhXwv6utMZCkx%2FDVbxT4eMQ9x90HswLrMGzC5Ujd3HKDN9%2BU3z8fHbWkUbfCQYBd%2FUbhrZgJ48QKEE%2BLFbpga0VCWQcFqytGgqU%2BIrTFKr9Kid2vXQvFcs7JrhLdORlZioQ9uMSNpUyyY39dlM%2FNf4mQ4Fxz6L0Zv9DCMglz&X-Amz-Signature=31d071825efa80d3068843c9d8f16962160be35e2d7ac65d97fb20df61a46728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S52YOIIR%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDOyMtR9NVll2YhHyNHEW0vb2Z0DnJJ%2B5PX7ZVo64q8PAiB6iy8R6MhZ%2FXWL%2Fku2VHDtUkA1UmjK6jrHmxmnMM2uuyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM03Nkg1ds1i2Z%2FXiHKtwD9lyie9KVUs7ujXz9jvTGDA31j8i4iGPA06x33vuRkUch%2FpFLIiyAj6gT061aqOGvWzEuLQoeUpXWymAchsd0TulHBTdAeFI87yMlJCSZcD6UlOarVMwhVVRrLDMrQIduhj8ZqZHgQWdWulFUopJWHdH2vY%2BLA4vFdvQuax%2FvL5OOQ2WCFgf132UXuf0Cnd1HEM%2BhRYdENDjOjmgUpt%2BYGSxGH1tyk0npWdXWngXY%2BYcjojzf8OS8DlCLgPd1YxfevTjIzfpc8l0%2BBED1BDE8cjs7v1fbVib5jYv28HFLMlMO6Mus3ORkixlrxCHVfyufB3mb28c7qX4iz8ySoy3Pz2peuoqS2ynE2GtYvyASq%2BEXc7WM5mN2CK7lxZebHtiXFsWczk7USILrrYZoNRUCJwemGQ6sodTbHn18PfWQ93ByceKJGDUB0818Gx%2Fj3bgD5no3HxkhqYhpxhUtFOn4Us6Or%2FZttBvbYFraDbvwRd3GUCFni0PZpe4GWOeNn49cbiofrT22TULjXZeEyrbfmBDmL8hW0DxRNdFvZ5vYcSRknHPvTrRUd3oMpDXJAOe%2BuMlkZd8SjOzi664f5eSDIkB4rVcyUWoU7TyMkJRmlGKOEf3syvTyAQXtSvow8pb4yQY6pgEgcbYV4Ke1iRNq4fv0KoTky5ETZf3dRrw3rrOBGSkX3NsIUe94%2B9KBhhXwv6utMZCkx%2FDVbxT4eMQ9x90HswLrMGzC5Ujd3HKDN9%2BU3z8fHbWkUbfCQYBd%2FUbhrZgJ48QKEE%2BLFbpga0VCWQcFqytGgqU%2BIrTFKr9Kid2vXQvFcs7JrhLdORlZioQ9uMSNpUyyY39dlM%2FNf4mQ4Fxz6L0Zv9DCMglz&X-Amz-Signature=0892cb63cee31831eaee46338923d2ef59f141ef67323dc3ebd36f8c3570183b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S52YOIIR%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDOyMtR9NVll2YhHyNHEW0vb2Z0DnJJ%2B5PX7ZVo64q8PAiB6iy8R6MhZ%2FXWL%2Fku2VHDtUkA1UmjK6jrHmxmnMM2uuyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM03Nkg1ds1i2Z%2FXiHKtwD9lyie9KVUs7ujXz9jvTGDA31j8i4iGPA06x33vuRkUch%2FpFLIiyAj6gT061aqOGvWzEuLQoeUpXWymAchsd0TulHBTdAeFI87yMlJCSZcD6UlOarVMwhVVRrLDMrQIduhj8ZqZHgQWdWulFUopJWHdH2vY%2BLA4vFdvQuax%2FvL5OOQ2WCFgf132UXuf0Cnd1HEM%2BhRYdENDjOjmgUpt%2BYGSxGH1tyk0npWdXWngXY%2BYcjojzf8OS8DlCLgPd1YxfevTjIzfpc8l0%2BBED1BDE8cjs7v1fbVib5jYv28HFLMlMO6Mus3ORkixlrxCHVfyufB3mb28c7qX4iz8ySoy3Pz2peuoqS2ynE2GtYvyASq%2BEXc7WM5mN2CK7lxZebHtiXFsWczk7USILrrYZoNRUCJwemGQ6sodTbHn18PfWQ93ByceKJGDUB0818Gx%2Fj3bgD5no3HxkhqYhpxhUtFOn4Us6Or%2FZttBvbYFraDbvwRd3GUCFni0PZpe4GWOeNn49cbiofrT22TULjXZeEyrbfmBDmL8hW0DxRNdFvZ5vYcSRknHPvTrRUd3oMpDXJAOe%2BuMlkZd8SjOzi664f5eSDIkB4rVcyUWoU7TyMkJRmlGKOEf3syvTyAQXtSvow8pb4yQY6pgEgcbYV4Ke1iRNq4fv0KoTky5ETZf3dRrw3rrOBGSkX3NsIUe94%2B9KBhhXwv6utMZCkx%2FDVbxT4eMQ9x90HswLrMGzC5Ujd3HKDN9%2BU3z8fHbWkUbfCQYBd%2FUbhrZgJ48QKEE%2BLFbpga0VCWQcFqytGgqU%2BIrTFKr9Kid2vXQvFcs7JrhLdORlZioQ9uMSNpUyyY39dlM%2FNf4mQ4Fxz6L0Zv9DCMglz&X-Amz-Signature=f18769f4ed7fc55808080812cdfcf3bbc6ad84c1c845c3bc22c553c78d4be311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S52YOIIR%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDOyMtR9NVll2YhHyNHEW0vb2Z0DnJJ%2B5PX7ZVo64q8PAiB6iy8R6MhZ%2FXWL%2Fku2VHDtUkA1UmjK6jrHmxmnMM2uuyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM03Nkg1ds1i2Z%2FXiHKtwD9lyie9KVUs7ujXz9jvTGDA31j8i4iGPA06x33vuRkUch%2FpFLIiyAj6gT061aqOGvWzEuLQoeUpXWymAchsd0TulHBTdAeFI87yMlJCSZcD6UlOarVMwhVVRrLDMrQIduhj8ZqZHgQWdWulFUopJWHdH2vY%2BLA4vFdvQuax%2FvL5OOQ2WCFgf132UXuf0Cnd1HEM%2BhRYdENDjOjmgUpt%2BYGSxGH1tyk0npWdXWngXY%2BYcjojzf8OS8DlCLgPd1YxfevTjIzfpc8l0%2BBED1BDE8cjs7v1fbVib5jYv28HFLMlMO6Mus3ORkixlrxCHVfyufB3mb28c7qX4iz8ySoy3Pz2peuoqS2ynE2GtYvyASq%2BEXc7WM5mN2CK7lxZebHtiXFsWczk7USILrrYZoNRUCJwemGQ6sodTbHn18PfWQ93ByceKJGDUB0818Gx%2Fj3bgD5no3HxkhqYhpxhUtFOn4Us6Or%2FZttBvbYFraDbvwRd3GUCFni0PZpe4GWOeNn49cbiofrT22TULjXZeEyrbfmBDmL8hW0DxRNdFvZ5vYcSRknHPvTrRUd3oMpDXJAOe%2BuMlkZd8SjOzi664f5eSDIkB4rVcyUWoU7TyMkJRmlGKOEf3syvTyAQXtSvow8pb4yQY6pgEgcbYV4Ke1iRNq4fv0KoTky5ETZf3dRrw3rrOBGSkX3NsIUe94%2B9KBhhXwv6utMZCkx%2FDVbxT4eMQ9x90HswLrMGzC5Ujd3HKDN9%2BU3z8fHbWkUbfCQYBd%2FUbhrZgJ48QKEE%2BLFbpga0VCWQcFqytGgqU%2BIrTFKr9Kid2vXQvFcs7JrhLdORlZioQ9uMSNpUyyY39dlM%2FNf4mQ4Fxz6L0Zv9DCMglz&X-Amz-Signature=1f0651c9e260cf2edb75c4115e56adeb618a85f6adc56620b6a10dfa63038865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S52YOIIR%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDOyMtR9NVll2YhHyNHEW0vb2Z0DnJJ%2B5PX7ZVo64q8PAiB6iy8R6MhZ%2FXWL%2Fku2VHDtUkA1UmjK6jrHmxmnMM2uuyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM03Nkg1ds1i2Z%2FXiHKtwD9lyie9KVUs7ujXz9jvTGDA31j8i4iGPA06x33vuRkUch%2FpFLIiyAj6gT061aqOGvWzEuLQoeUpXWymAchsd0TulHBTdAeFI87yMlJCSZcD6UlOarVMwhVVRrLDMrQIduhj8ZqZHgQWdWulFUopJWHdH2vY%2BLA4vFdvQuax%2FvL5OOQ2WCFgf132UXuf0Cnd1HEM%2BhRYdENDjOjmgUpt%2BYGSxGH1tyk0npWdXWngXY%2BYcjojzf8OS8DlCLgPd1YxfevTjIzfpc8l0%2BBED1BDE8cjs7v1fbVib5jYv28HFLMlMO6Mus3ORkixlrxCHVfyufB3mb28c7qX4iz8ySoy3Pz2peuoqS2ynE2GtYvyASq%2BEXc7WM5mN2CK7lxZebHtiXFsWczk7USILrrYZoNRUCJwemGQ6sodTbHn18PfWQ93ByceKJGDUB0818Gx%2Fj3bgD5no3HxkhqYhpxhUtFOn4Us6Or%2FZttBvbYFraDbvwRd3GUCFni0PZpe4GWOeNn49cbiofrT22TULjXZeEyrbfmBDmL8hW0DxRNdFvZ5vYcSRknHPvTrRUd3oMpDXJAOe%2BuMlkZd8SjOzi664f5eSDIkB4rVcyUWoU7TyMkJRmlGKOEf3syvTyAQXtSvow8pb4yQY6pgEgcbYV4Ke1iRNq4fv0KoTky5ETZf3dRrw3rrOBGSkX3NsIUe94%2B9KBhhXwv6utMZCkx%2FDVbxT4eMQ9x90HswLrMGzC5Ujd3HKDN9%2BU3z8fHbWkUbfCQYBd%2FUbhrZgJ48QKEE%2BLFbpga0VCWQcFqytGgqU%2BIrTFKr9Kid2vXQvFcs7JrhLdORlZioQ9uMSNpUyyY39dlM%2FNf4mQ4Fxz6L0Zv9DCMglz&X-Amz-Signature=2d74da16fa6d43a2b1e8daf2e865a68a661aad9333435b4962beb8ae6cfcded0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


