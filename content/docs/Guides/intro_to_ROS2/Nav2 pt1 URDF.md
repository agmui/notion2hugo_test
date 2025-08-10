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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IKKNPJ2%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7taqbNQTGxSC6o%2BmKS4NztTe98ZKZVQcGEMPhwFm9uAiEAmLou%2Fv4of9zlIXZalbiQWchA3yiRmj6aupfWM%2FqxjdIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWYtgW8K1SeKqQWIyrcA6ITwrJmihgwXcA1vH1yaBPkcXUp44E7GI2Xi0%2BuwwUZNt4VGl3DbbqYNhUVMTbmlC3wwkTGa%2Fr4JTCy3Qr3j8b6QvBq7q%2Ff5C12Z0eC1wSFkBPB5vbIcHwsWHOlLmtprFy1FPoCjhRiMK0OFGek69LnxYsNPsUR%2F1bc%2FV3wVwLMOOvDTmFEPK6ymmC9w2%2Fl%2B3uWdBklMrhL3jdkZ7Bzv1pZD0JuvCHHFEdRE9SO6jFs9SA0sam7gGVOhG8BVy6Tc3FL2xsumx2v0vcW2PMQbaUZePbyhkq2rdiDWqAa7Lr1hBn3G%2FKw7C2GAgthUiln2eAduah%2FWYctRk7luXbq6BH52wIoX1LAWTT%2BYf0RPon9JR2wSxoubGvXzJgJZ4LwkqYOeGDnROMThbHf9bmaiWUarlNptbmvUg2rda6Sn%2FcFwt87B2FV1jMCZPoDpqF7QYbtJ0l%2BfVGX9asyoHbeBezBTWUk17xGW3XaG3%2B6zHjlMV%2B2UinGK8dJLSV5bBmjEXB5fppt2yG86JndrzvoQJlAX7cuhgEFqwuzMZECIcMkQr1oySsFcSTcR1Q67JYDO1BZAQ5kLQsIVNWaNtf5xytF6O07gb89eyXjIHioFjvmkhb6j1P%2Bdjcqf6mVMJez38QGOqUBAVI5b%2B6PSlcPWjQ92O9y7RsBK%2FysePy6PC5GD5Z6tSsN48vOntpIUdSZJO%2BHzHwfmU2Ucckk%2BCE6BAHMt37rwZ4kprUdgM9U3rYXLpQq6n1%2BM6B7gqBjt06yWAy33PIage7gqIA3VBZnACJPaICsaZvgIiluqxa2KtxIrNJ0fuZLHDSo6bD6XEEQYa3lw%2FPLlKASNkSk124shvOflgXIMVEdAu4s&X-Amz-Signature=085d48c4f769468194a32bcfedbfacc48a5f7a469b2b396125a87a006046a736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IKKNPJ2%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7taqbNQTGxSC6o%2BmKS4NztTe98ZKZVQcGEMPhwFm9uAiEAmLou%2Fv4of9zlIXZalbiQWchA3yiRmj6aupfWM%2FqxjdIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWYtgW8K1SeKqQWIyrcA6ITwrJmihgwXcA1vH1yaBPkcXUp44E7GI2Xi0%2BuwwUZNt4VGl3DbbqYNhUVMTbmlC3wwkTGa%2Fr4JTCy3Qr3j8b6QvBq7q%2Ff5C12Z0eC1wSFkBPB5vbIcHwsWHOlLmtprFy1FPoCjhRiMK0OFGek69LnxYsNPsUR%2F1bc%2FV3wVwLMOOvDTmFEPK6ymmC9w2%2Fl%2B3uWdBklMrhL3jdkZ7Bzv1pZD0JuvCHHFEdRE9SO6jFs9SA0sam7gGVOhG8BVy6Tc3FL2xsumx2v0vcW2PMQbaUZePbyhkq2rdiDWqAa7Lr1hBn3G%2FKw7C2GAgthUiln2eAduah%2FWYctRk7luXbq6BH52wIoX1LAWTT%2BYf0RPon9JR2wSxoubGvXzJgJZ4LwkqYOeGDnROMThbHf9bmaiWUarlNptbmvUg2rda6Sn%2FcFwt87B2FV1jMCZPoDpqF7QYbtJ0l%2BfVGX9asyoHbeBezBTWUk17xGW3XaG3%2B6zHjlMV%2B2UinGK8dJLSV5bBmjEXB5fppt2yG86JndrzvoQJlAX7cuhgEFqwuzMZECIcMkQr1oySsFcSTcR1Q67JYDO1BZAQ5kLQsIVNWaNtf5xytF6O07gb89eyXjIHioFjvmkhb6j1P%2Bdjcqf6mVMJez38QGOqUBAVI5b%2B6PSlcPWjQ92O9y7RsBK%2FysePy6PC5GD5Z6tSsN48vOntpIUdSZJO%2BHzHwfmU2Ucckk%2BCE6BAHMt37rwZ4kprUdgM9U3rYXLpQq6n1%2BM6B7gqBjt06yWAy33PIage7gqIA3VBZnACJPaICsaZvgIiluqxa2KtxIrNJ0fuZLHDSo6bD6XEEQYa3lw%2FPLlKASNkSk124shvOflgXIMVEdAu4s&X-Amz-Signature=1c10a5d1c0db8b86655309f3b2cef690d1cffd82fc7ee3dd01e4d4b277b7bd80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IKKNPJ2%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7taqbNQTGxSC6o%2BmKS4NztTe98ZKZVQcGEMPhwFm9uAiEAmLou%2Fv4of9zlIXZalbiQWchA3yiRmj6aupfWM%2FqxjdIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWYtgW8K1SeKqQWIyrcA6ITwrJmihgwXcA1vH1yaBPkcXUp44E7GI2Xi0%2BuwwUZNt4VGl3DbbqYNhUVMTbmlC3wwkTGa%2Fr4JTCy3Qr3j8b6QvBq7q%2Ff5C12Z0eC1wSFkBPB5vbIcHwsWHOlLmtprFy1FPoCjhRiMK0OFGek69LnxYsNPsUR%2F1bc%2FV3wVwLMOOvDTmFEPK6ymmC9w2%2Fl%2B3uWdBklMrhL3jdkZ7Bzv1pZD0JuvCHHFEdRE9SO6jFs9SA0sam7gGVOhG8BVy6Tc3FL2xsumx2v0vcW2PMQbaUZePbyhkq2rdiDWqAa7Lr1hBn3G%2FKw7C2GAgthUiln2eAduah%2FWYctRk7luXbq6BH52wIoX1LAWTT%2BYf0RPon9JR2wSxoubGvXzJgJZ4LwkqYOeGDnROMThbHf9bmaiWUarlNptbmvUg2rda6Sn%2FcFwt87B2FV1jMCZPoDpqF7QYbtJ0l%2BfVGX9asyoHbeBezBTWUk17xGW3XaG3%2B6zHjlMV%2B2UinGK8dJLSV5bBmjEXB5fppt2yG86JndrzvoQJlAX7cuhgEFqwuzMZECIcMkQr1oySsFcSTcR1Q67JYDO1BZAQ5kLQsIVNWaNtf5xytF6O07gb89eyXjIHioFjvmkhb6j1P%2Bdjcqf6mVMJez38QGOqUBAVI5b%2B6PSlcPWjQ92O9y7RsBK%2FysePy6PC5GD5Z6tSsN48vOntpIUdSZJO%2BHzHwfmU2Ucckk%2BCE6BAHMt37rwZ4kprUdgM9U3rYXLpQq6n1%2BM6B7gqBjt06yWAy33PIage7gqIA3VBZnACJPaICsaZvgIiluqxa2KtxIrNJ0fuZLHDSo6bD6XEEQYa3lw%2FPLlKASNkSk124shvOflgXIMVEdAu4s&X-Amz-Signature=1b159e20ecb956d0079a9e381052c54a1aa1e84b7931d10fe2bfbaddc7d80214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IKKNPJ2%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7taqbNQTGxSC6o%2BmKS4NztTe98ZKZVQcGEMPhwFm9uAiEAmLou%2Fv4of9zlIXZalbiQWchA3yiRmj6aupfWM%2FqxjdIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWYtgW8K1SeKqQWIyrcA6ITwrJmihgwXcA1vH1yaBPkcXUp44E7GI2Xi0%2BuwwUZNt4VGl3DbbqYNhUVMTbmlC3wwkTGa%2Fr4JTCy3Qr3j8b6QvBq7q%2Ff5C12Z0eC1wSFkBPB5vbIcHwsWHOlLmtprFy1FPoCjhRiMK0OFGek69LnxYsNPsUR%2F1bc%2FV3wVwLMOOvDTmFEPK6ymmC9w2%2Fl%2B3uWdBklMrhL3jdkZ7Bzv1pZD0JuvCHHFEdRE9SO6jFs9SA0sam7gGVOhG8BVy6Tc3FL2xsumx2v0vcW2PMQbaUZePbyhkq2rdiDWqAa7Lr1hBn3G%2FKw7C2GAgthUiln2eAduah%2FWYctRk7luXbq6BH52wIoX1LAWTT%2BYf0RPon9JR2wSxoubGvXzJgJZ4LwkqYOeGDnROMThbHf9bmaiWUarlNptbmvUg2rda6Sn%2FcFwt87B2FV1jMCZPoDpqF7QYbtJ0l%2BfVGX9asyoHbeBezBTWUk17xGW3XaG3%2B6zHjlMV%2B2UinGK8dJLSV5bBmjEXB5fppt2yG86JndrzvoQJlAX7cuhgEFqwuzMZECIcMkQr1oySsFcSTcR1Q67JYDO1BZAQ5kLQsIVNWaNtf5xytF6O07gb89eyXjIHioFjvmkhb6j1P%2Bdjcqf6mVMJez38QGOqUBAVI5b%2B6PSlcPWjQ92O9y7RsBK%2FysePy6PC5GD5Z6tSsN48vOntpIUdSZJO%2BHzHwfmU2Ucckk%2BCE6BAHMt37rwZ4kprUdgM9U3rYXLpQq6n1%2BM6B7gqBjt06yWAy33PIage7gqIA3VBZnACJPaICsaZvgIiluqxa2KtxIrNJ0fuZLHDSo6bD6XEEQYa3lw%2FPLlKASNkSk124shvOflgXIMVEdAu4s&X-Amz-Signature=19f572ecbed2b4f6b414c1474996b006dc3d0f07d9ffaf554b1523ee3cd6b962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IKKNPJ2%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7taqbNQTGxSC6o%2BmKS4NztTe98ZKZVQcGEMPhwFm9uAiEAmLou%2Fv4of9zlIXZalbiQWchA3yiRmj6aupfWM%2FqxjdIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWYtgW8K1SeKqQWIyrcA6ITwrJmihgwXcA1vH1yaBPkcXUp44E7GI2Xi0%2BuwwUZNt4VGl3DbbqYNhUVMTbmlC3wwkTGa%2Fr4JTCy3Qr3j8b6QvBq7q%2Ff5C12Z0eC1wSFkBPB5vbIcHwsWHOlLmtprFy1FPoCjhRiMK0OFGek69LnxYsNPsUR%2F1bc%2FV3wVwLMOOvDTmFEPK6ymmC9w2%2Fl%2B3uWdBklMrhL3jdkZ7Bzv1pZD0JuvCHHFEdRE9SO6jFs9SA0sam7gGVOhG8BVy6Tc3FL2xsumx2v0vcW2PMQbaUZePbyhkq2rdiDWqAa7Lr1hBn3G%2FKw7C2GAgthUiln2eAduah%2FWYctRk7luXbq6BH52wIoX1LAWTT%2BYf0RPon9JR2wSxoubGvXzJgJZ4LwkqYOeGDnROMThbHf9bmaiWUarlNptbmvUg2rda6Sn%2FcFwt87B2FV1jMCZPoDpqF7QYbtJ0l%2BfVGX9asyoHbeBezBTWUk17xGW3XaG3%2B6zHjlMV%2B2UinGK8dJLSV5bBmjEXB5fppt2yG86JndrzvoQJlAX7cuhgEFqwuzMZECIcMkQr1oySsFcSTcR1Q67JYDO1BZAQ5kLQsIVNWaNtf5xytF6O07gb89eyXjIHioFjvmkhb6j1P%2Bdjcqf6mVMJez38QGOqUBAVI5b%2B6PSlcPWjQ92O9y7RsBK%2FysePy6PC5GD5Z6tSsN48vOntpIUdSZJO%2BHzHwfmU2Ucckk%2BCE6BAHMt37rwZ4kprUdgM9U3rYXLpQq6n1%2BM6B7gqBjt06yWAy33PIage7gqIA3VBZnACJPaICsaZvgIiluqxa2KtxIrNJ0fuZLHDSo6bD6XEEQYa3lw%2FPLlKASNkSk124shvOflgXIMVEdAu4s&X-Amz-Signature=33f97763a6a51cb3ddbd2f8caa4bc0807812d6b39e8a526178aad85fbd382e1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IKKNPJ2%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7taqbNQTGxSC6o%2BmKS4NztTe98ZKZVQcGEMPhwFm9uAiEAmLou%2Fv4of9zlIXZalbiQWchA3yiRmj6aupfWM%2FqxjdIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWYtgW8K1SeKqQWIyrcA6ITwrJmihgwXcA1vH1yaBPkcXUp44E7GI2Xi0%2BuwwUZNt4VGl3DbbqYNhUVMTbmlC3wwkTGa%2Fr4JTCy3Qr3j8b6QvBq7q%2Ff5C12Z0eC1wSFkBPB5vbIcHwsWHOlLmtprFy1FPoCjhRiMK0OFGek69LnxYsNPsUR%2F1bc%2FV3wVwLMOOvDTmFEPK6ymmC9w2%2Fl%2B3uWdBklMrhL3jdkZ7Bzv1pZD0JuvCHHFEdRE9SO6jFs9SA0sam7gGVOhG8BVy6Tc3FL2xsumx2v0vcW2PMQbaUZePbyhkq2rdiDWqAa7Lr1hBn3G%2FKw7C2GAgthUiln2eAduah%2FWYctRk7luXbq6BH52wIoX1LAWTT%2BYf0RPon9JR2wSxoubGvXzJgJZ4LwkqYOeGDnROMThbHf9bmaiWUarlNptbmvUg2rda6Sn%2FcFwt87B2FV1jMCZPoDpqF7QYbtJ0l%2BfVGX9asyoHbeBezBTWUk17xGW3XaG3%2B6zHjlMV%2B2UinGK8dJLSV5bBmjEXB5fppt2yG86JndrzvoQJlAX7cuhgEFqwuzMZECIcMkQr1oySsFcSTcR1Q67JYDO1BZAQ5kLQsIVNWaNtf5xytF6O07gb89eyXjIHioFjvmkhb6j1P%2Bdjcqf6mVMJez38QGOqUBAVI5b%2B6PSlcPWjQ92O9y7RsBK%2FysePy6PC5GD5Z6tSsN48vOntpIUdSZJO%2BHzHwfmU2Ucckk%2BCE6BAHMt37rwZ4kprUdgM9U3rYXLpQq6n1%2BM6B7gqBjt06yWAy33PIage7gqIA3VBZnACJPaICsaZvgIiluqxa2KtxIrNJ0fuZLHDSo6bD6XEEQYa3lw%2FPLlKASNkSk124shvOflgXIMVEdAu4s&X-Amz-Signature=62e355398d695476d8fd37a30bf2c2fc3ab66636e611e783c4c31170846f3358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IKKNPJ2%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7taqbNQTGxSC6o%2BmKS4NztTe98ZKZVQcGEMPhwFm9uAiEAmLou%2Fv4of9zlIXZalbiQWchA3yiRmj6aupfWM%2FqxjdIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWYtgW8K1SeKqQWIyrcA6ITwrJmihgwXcA1vH1yaBPkcXUp44E7GI2Xi0%2BuwwUZNt4VGl3DbbqYNhUVMTbmlC3wwkTGa%2Fr4JTCy3Qr3j8b6QvBq7q%2Ff5C12Z0eC1wSFkBPB5vbIcHwsWHOlLmtprFy1FPoCjhRiMK0OFGek69LnxYsNPsUR%2F1bc%2FV3wVwLMOOvDTmFEPK6ymmC9w2%2Fl%2B3uWdBklMrhL3jdkZ7Bzv1pZD0JuvCHHFEdRE9SO6jFs9SA0sam7gGVOhG8BVy6Tc3FL2xsumx2v0vcW2PMQbaUZePbyhkq2rdiDWqAa7Lr1hBn3G%2FKw7C2GAgthUiln2eAduah%2FWYctRk7luXbq6BH52wIoX1LAWTT%2BYf0RPon9JR2wSxoubGvXzJgJZ4LwkqYOeGDnROMThbHf9bmaiWUarlNptbmvUg2rda6Sn%2FcFwt87B2FV1jMCZPoDpqF7QYbtJ0l%2BfVGX9asyoHbeBezBTWUk17xGW3XaG3%2B6zHjlMV%2B2UinGK8dJLSV5bBmjEXB5fppt2yG86JndrzvoQJlAX7cuhgEFqwuzMZECIcMkQr1oySsFcSTcR1Q67JYDO1BZAQ5kLQsIVNWaNtf5xytF6O07gb89eyXjIHioFjvmkhb6j1P%2Bdjcqf6mVMJez38QGOqUBAVI5b%2B6PSlcPWjQ92O9y7RsBK%2FysePy6PC5GD5Z6tSsN48vOntpIUdSZJO%2BHzHwfmU2Ucckk%2BCE6BAHMt37rwZ4kprUdgM9U3rYXLpQq6n1%2BM6B7gqBjt06yWAy33PIage7gqIA3VBZnACJPaICsaZvgIiluqxa2KtxIrNJ0fuZLHDSo6bD6XEEQYa3lw%2FPLlKASNkSk124shvOflgXIMVEdAu4s&X-Amz-Signature=70aa75d0f4c0c5c5ce6565a1abad65bd262cb47ea9c0b1360e5e69860702365d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IKKNPJ2%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7taqbNQTGxSC6o%2BmKS4NztTe98ZKZVQcGEMPhwFm9uAiEAmLou%2Fv4of9zlIXZalbiQWchA3yiRmj6aupfWM%2FqxjdIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWYtgW8K1SeKqQWIyrcA6ITwrJmihgwXcA1vH1yaBPkcXUp44E7GI2Xi0%2BuwwUZNt4VGl3DbbqYNhUVMTbmlC3wwkTGa%2Fr4JTCy3Qr3j8b6QvBq7q%2Ff5C12Z0eC1wSFkBPB5vbIcHwsWHOlLmtprFy1FPoCjhRiMK0OFGek69LnxYsNPsUR%2F1bc%2FV3wVwLMOOvDTmFEPK6ymmC9w2%2Fl%2B3uWdBklMrhL3jdkZ7Bzv1pZD0JuvCHHFEdRE9SO6jFs9SA0sam7gGVOhG8BVy6Tc3FL2xsumx2v0vcW2PMQbaUZePbyhkq2rdiDWqAa7Lr1hBn3G%2FKw7C2GAgthUiln2eAduah%2FWYctRk7luXbq6BH52wIoX1LAWTT%2BYf0RPon9JR2wSxoubGvXzJgJZ4LwkqYOeGDnROMThbHf9bmaiWUarlNptbmvUg2rda6Sn%2FcFwt87B2FV1jMCZPoDpqF7QYbtJ0l%2BfVGX9asyoHbeBezBTWUk17xGW3XaG3%2B6zHjlMV%2B2UinGK8dJLSV5bBmjEXB5fppt2yG86JndrzvoQJlAX7cuhgEFqwuzMZECIcMkQr1oySsFcSTcR1Q67JYDO1BZAQ5kLQsIVNWaNtf5xytF6O07gb89eyXjIHioFjvmkhb6j1P%2Bdjcqf6mVMJez38QGOqUBAVI5b%2B6PSlcPWjQ92O9y7RsBK%2FysePy6PC5GD5Z6tSsN48vOntpIUdSZJO%2BHzHwfmU2Ucckk%2BCE6BAHMt37rwZ4kprUdgM9U3rYXLpQq6n1%2BM6B7gqBjt06yWAy33PIage7gqIA3VBZnACJPaICsaZvgIiluqxa2KtxIrNJ0fuZLHDSo6bD6XEEQYa3lw%2FPLlKASNkSk124shvOflgXIMVEdAu4s&X-Amz-Signature=4a98c1333e94317ff4c506679a2297b0dc55cd0b309f79975eba7d825594b5a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IKKNPJ2%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7taqbNQTGxSC6o%2BmKS4NztTe98ZKZVQcGEMPhwFm9uAiEAmLou%2Fv4of9zlIXZalbiQWchA3yiRmj6aupfWM%2FqxjdIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWYtgW8K1SeKqQWIyrcA6ITwrJmihgwXcA1vH1yaBPkcXUp44E7GI2Xi0%2BuwwUZNt4VGl3DbbqYNhUVMTbmlC3wwkTGa%2Fr4JTCy3Qr3j8b6QvBq7q%2Ff5C12Z0eC1wSFkBPB5vbIcHwsWHOlLmtprFy1FPoCjhRiMK0OFGek69LnxYsNPsUR%2F1bc%2FV3wVwLMOOvDTmFEPK6ymmC9w2%2Fl%2B3uWdBklMrhL3jdkZ7Bzv1pZD0JuvCHHFEdRE9SO6jFs9SA0sam7gGVOhG8BVy6Tc3FL2xsumx2v0vcW2PMQbaUZePbyhkq2rdiDWqAa7Lr1hBn3G%2FKw7C2GAgthUiln2eAduah%2FWYctRk7luXbq6BH52wIoX1LAWTT%2BYf0RPon9JR2wSxoubGvXzJgJZ4LwkqYOeGDnROMThbHf9bmaiWUarlNptbmvUg2rda6Sn%2FcFwt87B2FV1jMCZPoDpqF7QYbtJ0l%2BfVGX9asyoHbeBezBTWUk17xGW3XaG3%2B6zHjlMV%2B2UinGK8dJLSV5bBmjEXB5fppt2yG86JndrzvoQJlAX7cuhgEFqwuzMZECIcMkQr1oySsFcSTcR1Q67JYDO1BZAQ5kLQsIVNWaNtf5xytF6O07gb89eyXjIHioFjvmkhb6j1P%2Bdjcqf6mVMJez38QGOqUBAVI5b%2B6PSlcPWjQ92O9y7RsBK%2FysePy6PC5GD5Z6tSsN48vOntpIUdSZJO%2BHzHwfmU2Ucckk%2BCE6BAHMt37rwZ4kprUdgM9U3rYXLpQq6n1%2BM6B7gqBjt06yWAy33PIage7gqIA3VBZnACJPaICsaZvgIiluqxa2KtxIrNJ0fuZLHDSo6bD6XEEQYa3lw%2FPLlKASNkSk124shvOflgXIMVEdAu4s&X-Amz-Signature=42d5c46b0f8b2f863778ff947e89d8edaff26009e9fbc4a27e8b120bdac1d8d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IKKNPJ2%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7taqbNQTGxSC6o%2BmKS4NztTe98ZKZVQcGEMPhwFm9uAiEAmLou%2Fv4of9zlIXZalbiQWchA3yiRmj6aupfWM%2FqxjdIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWYtgW8K1SeKqQWIyrcA6ITwrJmihgwXcA1vH1yaBPkcXUp44E7GI2Xi0%2BuwwUZNt4VGl3DbbqYNhUVMTbmlC3wwkTGa%2Fr4JTCy3Qr3j8b6QvBq7q%2Ff5C12Z0eC1wSFkBPB5vbIcHwsWHOlLmtprFy1FPoCjhRiMK0OFGek69LnxYsNPsUR%2F1bc%2FV3wVwLMOOvDTmFEPK6ymmC9w2%2Fl%2B3uWdBklMrhL3jdkZ7Bzv1pZD0JuvCHHFEdRE9SO6jFs9SA0sam7gGVOhG8BVy6Tc3FL2xsumx2v0vcW2PMQbaUZePbyhkq2rdiDWqAa7Lr1hBn3G%2FKw7C2GAgthUiln2eAduah%2FWYctRk7luXbq6BH52wIoX1LAWTT%2BYf0RPon9JR2wSxoubGvXzJgJZ4LwkqYOeGDnROMThbHf9bmaiWUarlNptbmvUg2rda6Sn%2FcFwt87B2FV1jMCZPoDpqF7QYbtJ0l%2BfVGX9asyoHbeBezBTWUk17xGW3XaG3%2B6zHjlMV%2B2UinGK8dJLSV5bBmjEXB5fppt2yG86JndrzvoQJlAX7cuhgEFqwuzMZECIcMkQr1oySsFcSTcR1Q67JYDO1BZAQ5kLQsIVNWaNtf5xytF6O07gb89eyXjIHioFjvmkhb6j1P%2Bdjcqf6mVMJez38QGOqUBAVI5b%2B6PSlcPWjQ92O9y7RsBK%2FysePy6PC5GD5Z6tSsN48vOntpIUdSZJO%2BHzHwfmU2Ucckk%2BCE6BAHMt37rwZ4kprUdgM9U3rYXLpQq6n1%2BM6B7gqBjt06yWAy33PIage7gqIA3VBZnACJPaICsaZvgIiluqxa2KtxIrNJ0fuZLHDSo6bD6XEEQYa3lw%2FPLlKASNkSk124shvOflgXIMVEdAu4s&X-Amz-Signature=2d03751ded2a1f41305cb1fd19e19f91e475a941431080b3fe762d29a975164b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AVN4KRL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxo3rZu9r%2FPm6c50%2Fl4ZJhHQrSlhHmEn1yqXj094r6AQIgM5DmNdW6g3JyRN4Zd5vgh46k5Z5lTauvVicyceJ%2FpjcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhe%2FuyBKUskjhHzwCrcA%2FxE7V8ECYz5m2SlRJr3KLY21CFw3zh1deJhXJ1XhsN3mkw45S0vkBd13gbvfvcap%2BzFN7kBgr5pETNMWPPyzfyZizRoBQBqnWWKeS9b0RjJbQbpgvYqGMb3QLXTYKBurVica2xiOEXcc6oNkO5oEuAMig1Qm8NtIbMztV62kzdxR1kU6k3C3TJRvER11NxT0mLO%2BOU1g4t6RqW%2B2guZbQ%2FLD%2FRenQ4epamFMzQwlCDwev0zvhIwJjW4y%2FMphlUMV7N%2FqmqjGpo%2BeCQ4DdwGEwiyGmYxkQ98wwl%2FFRl%2FFbulrvRxMRtikuPRAGFpbWCsrcWiQZe%2BinMif9VKHuhO606bz1onIQehT%2BnPPTStPx4CEzNByE3hbmy87ikuNt%2BcrtYqZE7aaFHP7xBxW8VjPPySldNL%2FeixS6WsnzgtbL9CgIGQoKjbfjG475J6TlWWNGRPmBXR4gUFCdHFp5CwuY6S2cfntxGuzIcRc4aGxd9zuDTwRkQhIjnDwSVmmcP8xoHZEsoCM7HtTxFiDaFHC9Ma6OPe6izCYQzjWYkTnkBSumdzPGYRwyuT3aCpNsdGZCmeq3205Z0uTxNkePRjSOUFHlVT5IuOairB4eEUsORF%2FuGDIy%2Bbi%2FoLvwu1MKaz38QGOqUB6FXdiZiXWW1r%2Bu6Ydxdjq24%2FuEP1s2noNV9GWzME2P97O9%2FIh5iaGvX9wIPgMOJ7SC2dkI3Gbou7MomsS%2FJ0%2FEt5a4iCdh%2B1xfIpQKxjbZQJtUhuMeU8wUwyZbt2TU1feOogbW4sPRa3LvseasjnXiK3%2BFBW5RntSIZrKLASQ236O7rNhMgaYsI05FR2S2Bb25xQy8ESWawU%2Bu2QtvYaACSnFL4p&X-Amz-Signature=98a9a03435a4c688dd8a5cbd583ff8a5c2e78d6f04d9ffb29a3e97fa100df436&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T57WA7LB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBZUCzINaR%2FVbnTC7Oa8RtlQN1a4qGEYaomIhIvcHSpAiBUU26m3TDwqFtMk3IPFMBtahyVdW4%2BkFARpAg19v%2BXpiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRZ3vS7sCqgJR7S8UKtwD5Tp6z%2FpCedmU5wS9vYOO5fLQusCEvq6bMtTVC0Xjgvvw1O69XRZqthrsx7Z4FezMdI7NSLktLa%2BiyZZidjeOACtCDKXgIiZ8Ck09FqYMNz2QPCc0NW%2FEcEs%2FaO8GrbceUXlidobVJZZ3IE%2B2z7umePYDm2AG1nB7asVe7mA%2Bb1qu9K3hxC2LAQY8SEuOH1u%2FdYpK2jEo%2B2NzRHVyWyu94rNKOWTkW9uKtzOX0eyzncuWhtfU%2FX8Lp5E3UesYF5BoIxUat01a7KXdAYHgN3xC96jI%2FcfqxDYc08zm%2Bz954fVEOhoviQiOIeAby%2BKu75cUtKGzJjHEdSvsS%2BCe%2BDkV0pOdoVVFga02pRsy0MdCTnMUZtMp86j8yg7JeYHezj5WFHMlM4WKumEm6kCl0SVvy2bV7MPFOol%2FT0PAgedzIR7fSbwgCZ6WFzVBw2VVPwGTgVbv3YIPhJRomJFUNutFKeKrwtpuDvsFaGte%2F8bKWCWf5xx1xj17HoI3Pyu7yeI5TJQBz%2BIgCspBDfeazhecDh%2Bpq7pUPe0%2BAx1GUCKrLuIxk1tWTYVCLbHvfeBD6WZi81ZgJHuR%2FJZhpSOKcDSjEkwhhFkYV2T2SafPK3FyCvj1D%2Fs7eF5OsPQIpV4w6rLfxAY6pgG1rp%2FT4XFqngkKra56hGAiTtH8Uml7aMX5i8wwlxSFQAdAmptpOyRP4M29nDIXYYrO57TMuaN9TH7cf42HIIz4RKrKykYCRbnEUUUUK52uDaJrod0V7%2F4Rq8xnlAbAlROQE29FntcJdpYTKSnJVDwH6I0zV8SWdGzwQ5U%2FOOsQgqLkIPs2YGONVDmSx0zFpr83xAoED25jI8Jw1LYgKLp95WvVUNbS&X-Amz-Signature=595acb1d7226f068cbf9a320299358c06b4482cd81e6cd27e5341a8e96b1f620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6DLFJWA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2FhhJOBmHT8N74b9G3jAauXx1XhPJJ2GyJWmVzKeJahAiAVHpKJqn2objDMlOqVz3IFS8o9wWFbXarsKDJEHyR6pSqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkbd9UCuI9K%2FnWgeEKtwDG7qB55DXfGc%2BXt2EJnvU5%2BOTpo1un%2BNyMaAYuIRHH5e1%2FViOdGmKO3oyaZCt5ErvbCYz7PrzIFtU6FYeNo5pHlDYjEBSMdq7t66hLVYn2cUSF2BaMvFV6J%2BnQW6MptSAKpHQ2a%2BnnbdnBNreVIwMSEvyZj8drpaxMuHa7NeAMzuHW2kJMVFSiegOHrfPWtQt6yxfqLkkRBKVhLa6yh5bfgpH7P7rNvmIaKRoYuYPWeXabRLjAHIe8htDLMdH%2BmDrIQbxD8722IcT%2B04u05iDl1zjm3yZdnTnAijP7ZLJz9iU7jfpqyUMvGd1hrehjrUT0ynAyn%2Bw6GBIfqvuREMToGJ3gToZ1F7%2Fa1%2BQgWUgVfeckjwyB4oWjHSEdEzVvRV5luU7ERvrFhPywV8jAh2jx6U1zDue5GorrUHzVskEBFlwW60xXtfMNoqbt2qfHVZ%2FBqlSWy9yhpKj20neCQn4JiPfEnhrT%2FpNo5NttxyMUd6MfJj0%2Fe%2BxanMqBmP4z3H3HNeDVkN%2BckSR8y2t1fELvNwd5qmB3nUq9ZVmc9g1qo2VBL9q9HhawZosvY7t%2B7UnmQ4fEJNSzJy%2ByKwUdcCtkXMPVZC%2F320XPP4AAM4wH32%2FPDVIEye7FHABk28w5rLfxAY6pgEnMFCAxx7v%2BnteHRX2onAIOhP7kuTXAOxxsmtAUhovO4f2G4SnDAOJXi6GEwv1SQJsJcSihA1bzJk0kudlqHarCDG3XEgz4jERuDTzaqI%2BI3hLeAtOMyFPFP%2FO1g%2B8NfI%2FEI4gpkZw4IUfCvdB%2FDgak4WvyFOlTcRRcEm%2BTobdMOKpO8qybBd77RI6heLt%2BxGeu9N9Q06TwITlJGXK0ePeIk5otJho&X-Amz-Signature=69cb05742a167ba48fa0c12c48b852fe0c6d667cf0cfef4f2932799b6eece157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IKKNPJ2%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7taqbNQTGxSC6o%2BmKS4NztTe98ZKZVQcGEMPhwFm9uAiEAmLou%2Fv4of9zlIXZalbiQWchA3yiRmj6aupfWM%2FqxjdIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWYtgW8K1SeKqQWIyrcA6ITwrJmihgwXcA1vH1yaBPkcXUp44E7GI2Xi0%2BuwwUZNt4VGl3DbbqYNhUVMTbmlC3wwkTGa%2Fr4JTCy3Qr3j8b6QvBq7q%2Ff5C12Z0eC1wSFkBPB5vbIcHwsWHOlLmtprFy1FPoCjhRiMK0OFGek69LnxYsNPsUR%2F1bc%2FV3wVwLMOOvDTmFEPK6ymmC9w2%2Fl%2B3uWdBklMrhL3jdkZ7Bzv1pZD0JuvCHHFEdRE9SO6jFs9SA0sam7gGVOhG8BVy6Tc3FL2xsumx2v0vcW2PMQbaUZePbyhkq2rdiDWqAa7Lr1hBn3G%2FKw7C2GAgthUiln2eAduah%2FWYctRk7luXbq6BH52wIoX1LAWTT%2BYf0RPon9JR2wSxoubGvXzJgJZ4LwkqYOeGDnROMThbHf9bmaiWUarlNptbmvUg2rda6Sn%2FcFwt87B2FV1jMCZPoDpqF7QYbtJ0l%2BfVGX9asyoHbeBezBTWUk17xGW3XaG3%2B6zHjlMV%2B2UinGK8dJLSV5bBmjEXB5fppt2yG86JndrzvoQJlAX7cuhgEFqwuzMZECIcMkQr1oySsFcSTcR1Q67JYDO1BZAQ5kLQsIVNWaNtf5xytF6O07gb89eyXjIHioFjvmkhb6j1P%2Bdjcqf6mVMJez38QGOqUBAVI5b%2B6PSlcPWjQ92O9y7RsBK%2FysePy6PC5GD5Z6tSsN48vOntpIUdSZJO%2BHzHwfmU2Ucckk%2BCE6BAHMt37rwZ4kprUdgM9U3rYXLpQq6n1%2BM6B7gqBjt06yWAy33PIage7gqIA3VBZnACJPaICsaZvgIiluqxa2KtxIrNJ0fuZLHDSo6bD6XEEQYa3lw%2FPLlKASNkSk124shvOflgXIMVEdAu4s&X-Amz-Signature=888001a98f31275444aa9a3ec4586a9323b1680f575ce08d815d921a8f32448f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4NREFT2%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRcEPjS1E64LgfWowSbDxHZ6Eq%2BsGf4IkhIpJz7r%2BuOAIgdX33rzTt%2B%2FiBzLVymRtwQqYPLCnf8iIbP6CwMEPnu6MqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7uGG5GGsBKrYx6QyrcA4cWostUr%2Fd6Asl6%2B0f6H0gXt%2F9sDFKLnrmFJeRDb4pSPeWBgVm7HyQ3WtE1k%2FMRbAzkEzS3eD9%2Br0J1AodG3ddD42B5haGsFfjimhhGhQDhZW9rRT8ZPwOqOp0wDk0%2Bp5rHOBbBlCQ0tviMs%2B3uI2FT3RYwZR8Lg%2FZESZjwicbwz2g7mivSCVNt%2BRFa%2Byn8njyunkftU5Huaf3PJKHPxPtaHgvIc3W0t%2BELFNHnrSZ360i2ZZ8FYmx9shxH7lDSbPyf78mBfVPuyzx%2BH8dAzvHKouL6IiW15hQVt2J5cEINVOtMOoLaL5qAMCm4UeDSNaatNn5Emsx13ZoX40meC4y714JHKOAL%2F8rnzjEyC8EwIYEmjcYLclO2r2vldL3mAJdstwGZHfypZuxYQPztHWel5%2FPzNmm%2B1kC3r1O8li3uhQQBzWE323fE3x1PtXur7ZYhpIIg0jef2Q47ySNJAlLt0wKH0gc5enjaaBVUIp3KS7wdE2N4voDToZRA2AS9VGDVc%2B3Pn2rpcZGsllyuPs0L5xxNcC5Ac%2FwzxdRowwLg2bbF4JYQ%2FwPXETtkw51fuM6673Pvbl5%2F8xJyAHkdCf1igFNSSQtIv0G57jrjJdd99YQDgteDWHuk8rFIMJ%2Bz38QGOqUBj4JP9dpGu%2FyQQ6dVHXN7qzIuwd7lLYVfCP2Toid7SIwBxZlVHVzWeAeZBjt7tF5ucCnrBjFqFG2nO7ipLAEHWvOu1PhUdzBjjKmgSQnbXpPN23RZ1iWM7MJy1CVOlYehyexSKQ43PWXZn8YMyjhkb2M7GdRWE8mwsA9xMFQpZ50TIta71GUfYF6KrRGZmYHwx6yCVe8LcXiQxCjAflcvvS7jdaz0&X-Amz-Signature=229b33b45593ec85c1cc08bc868e96b10aa05e7ab76e18b39787dafd8664f584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IKKNPJ2%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7taqbNQTGxSC6o%2BmKS4NztTe98ZKZVQcGEMPhwFm9uAiEAmLou%2Fv4of9zlIXZalbiQWchA3yiRmj6aupfWM%2FqxjdIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWYtgW8K1SeKqQWIyrcA6ITwrJmihgwXcA1vH1yaBPkcXUp44E7GI2Xi0%2BuwwUZNt4VGl3DbbqYNhUVMTbmlC3wwkTGa%2Fr4JTCy3Qr3j8b6QvBq7q%2Ff5C12Z0eC1wSFkBPB5vbIcHwsWHOlLmtprFy1FPoCjhRiMK0OFGek69LnxYsNPsUR%2F1bc%2FV3wVwLMOOvDTmFEPK6ymmC9w2%2Fl%2B3uWdBklMrhL3jdkZ7Bzv1pZD0JuvCHHFEdRE9SO6jFs9SA0sam7gGVOhG8BVy6Tc3FL2xsumx2v0vcW2PMQbaUZePbyhkq2rdiDWqAa7Lr1hBn3G%2FKw7C2GAgthUiln2eAduah%2FWYctRk7luXbq6BH52wIoX1LAWTT%2BYf0RPon9JR2wSxoubGvXzJgJZ4LwkqYOeGDnROMThbHf9bmaiWUarlNptbmvUg2rda6Sn%2FcFwt87B2FV1jMCZPoDpqF7QYbtJ0l%2BfVGX9asyoHbeBezBTWUk17xGW3XaG3%2B6zHjlMV%2B2UinGK8dJLSV5bBmjEXB5fppt2yG86JndrzvoQJlAX7cuhgEFqwuzMZECIcMkQr1oySsFcSTcR1Q67JYDO1BZAQ5kLQsIVNWaNtf5xytF6O07gb89eyXjIHioFjvmkhb6j1P%2Bdjcqf6mVMJez38QGOqUBAVI5b%2B6PSlcPWjQ92O9y7RsBK%2FysePy6PC5GD5Z6tSsN48vOntpIUdSZJO%2BHzHwfmU2Ucckk%2BCE6BAHMt37rwZ4kprUdgM9U3rYXLpQq6n1%2BM6B7gqBjt06yWAy33PIage7gqIA3VBZnACJPaICsaZvgIiluqxa2KtxIrNJ0fuZLHDSo6bD6XEEQYa3lw%2FPLlKASNkSk124shvOflgXIMVEdAu4s&X-Amz-Signature=a511704965bce9e3ccfd4cf4f26acf93f334a9a60e1d39337db4fd2dd930e264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCRBQUKH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsDB%2BfYodAGnw9KIFVtDD0%2FoHnLCcWt3HZborNw6AuDQIhAI07DqvXMwtVSUGWLgoG%2FVTzazTEv8Ugb01FyUNcffOvKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz75iAo6VUIh377RXsq3APBJGnHRediGzMof0FuYnjD1thP6GCEgdIyWuDC35I48BvPjLBG4hczSxpHC84p%2BB8XC9xPNjckuvLazN6UKSLiVhjKkT4MGUpLcengHtEtFKVX4JXKrQvSp55RkWWh8gFH54j4wI91mkIda4FeiD1f3iIZknxxa%2BVq1xfWu%2Fy9F4FWIFEXLV5IbVXW0%2B2Q5citWWrvbW9dL3A6U1G5CrYBrBh6rlpiCkilie8Y0kP7FiBHOfpfpCRLTgdeTr1uW0EMamg3eh1hLnlWpmXfZ6uhI9avJLraSPHDZPqIU5JNVwP7x82zp0OwNFl2pq7tPGW%2F6WMu%2FYnDL%2BKEhrSwYFW%2F2datgv%2FwbvDucOu0YkDSCGM%2BM3wMVlYvcjDYAfZBpoCO7QRdkCPoCHwc9qs79esCPqYRz8VKvoyMNsCbOSzhx1HKZuXxTXZsEKJibtffjI1feziXQrSAE1idW5XEYOxNjmuynrXBFlTPkgKrijarrp7IN1WtbJznWXJCerWVryHWhrARxFGCGlELpMZRVv%2F7husXN%2F4dNHxJ44QLQ5EExnOeLNPml6wWVDZiVrH5im56FrqPEjPWNtQrV58Km1EmPpmz7l%2BN970o5NQ4G48QXdGtV26R%2BnBczKNFVDDAst%2FEBjqkAcL8jeqrVAB8wkXU8imRm78PUyX0lTaREq3iEOS76R8pxkyjY56nNeOkIokEPnP9%2Bqc7BAEgxeoyhGpcXETu2p6ix%2F438HSoLc2n%2BQcydeYLpMjFkKqgwfHtz1PB%2BCzvvgV438N8h5Nv%2B6%2Bk%2BG9vRCOBXV4hkez0y%2FHkyI%2Bt1%2BmxxE8TjBVk8NQ1sgaDUXe9LRJL8Nx5Ncrg%2B4gBm9GybKPn6CBP&X-Amz-Signature=29b9a5f21dc31733d7b04bcd49f91714e635ee9ab55f7edf92d5b6d40f8980a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IKKNPJ2%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7taqbNQTGxSC6o%2BmKS4NztTe98ZKZVQcGEMPhwFm9uAiEAmLou%2Fv4of9zlIXZalbiQWchA3yiRmj6aupfWM%2FqxjdIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWYtgW8K1SeKqQWIyrcA6ITwrJmihgwXcA1vH1yaBPkcXUp44E7GI2Xi0%2BuwwUZNt4VGl3DbbqYNhUVMTbmlC3wwkTGa%2Fr4JTCy3Qr3j8b6QvBq7q%2Ff5C12Z0eC1wSFkBPB5vbIcHwsWHOlLmtprFy1FPoCjhRiMK0OFGek69LnxYsNPsUR%2F1bc%2FV3wVwLMOOvDTmFEPK6ymmC9w2%2Fl%2B3uWdBklMrhL3jdkZ7Bzv1pZD0JuvCHHFEdRE9SO6jFs9SA0sam7gGVOhG8BVy6Tc3FL2xsumx2v0vcW2PMQbaUZePbyhkq2rdiDWqAa7Lr1hBn3G%2FKw7C2GAgthUiln2eAduah%2FWYctRk7luXbq6BH52wIoX1LAWTT%2BYf0RPon9JR2wSxoubGvXzJgJZ4LwkqYOeGDnROMThbHf9bmaiWUarlNptbmvUg2rda6Sn%2FcFwt87B2FV1jMCZPoDpqF7QYbtJ0l%2BfVGX9asyoHbeBezBTWUk17xGW3XaG3%2B6zHjlMV%2B2UinGK8dJLSV5bBmjEXB5fppt2yG86JndrzvoQJlAX7cuhgEFqwuzMZECIcMkQr1oySsFcSTcR1Q67JYDO1BZAQ5kLQsIVNWaNtf5xytF6O07gb89eyXjIHioFjvmkhb6j1P%2Bdjcqf6mVMJez38QGOqUBAVI5b%2B6PSlcPWjQ92O9y7RsBK%2FysePy6PC5GD5Z6tSsN48vOntpIUdSZJO%2BHzHwfmU2Ucckk%2BCE6BAHMt37rwZ4kprUdgM9U3rYXLpQq6n1%2BM6B7gqBjt06yWAy33PIage7gqIA3VBZnACJPaICsaZvgIiluqxa2KtxIrNJ0fuZLHDSo6bD6XEEQYa3lw%2FPLlKASNkSk124shvOflgXIMVEdAu4s&X-Amz-Signature=a3dc16ac86b5835cd201a0d43a7c46b5bd1e807876998839ce029a0ed63ffe96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYUYVUNP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6a7kvM3fgwRdKi7q6XgxYC9sKz2N9z8cuvs0%2FuIe4lQIgdMato0dCY3eeL52xeBnSByDfAqxSwZj%2FRLT5rdYh%2FNcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbLcMyaCnyvj7FdeircA0ujiTTzQ%2BJ66bo8vk9h4FvWZuiqanp%2BD9ELufOZcBH%2Fd3oivTPZ%2Fz%2BmM99cpqvSrSDZQORIPG6Jvoiv8rUJziNvJ6jqW088FrqhoFuXBe6MNasYtdVSiQuc1dtnlCEuGaulUMi1x0NqTzeg1aQssHZqwAGgssmk4LwGBIOfSP1Gzkxpm6eRGyZxIvkkmNor4mrmj8bTNNeE7rkHlVNKK91WMlJeW8eSfKBpfLyCU1%2Fhkg2CsKPD6A61PWZzEhvluWXfhVCoBSwtOLjjNPQQyd85vId79DG7MXmzWpuRdu8QQwCSv8gc7mnLY0A1y3bC1sbLjgfRt7SY%2B222IztQiDGNBfMVgk1JuBKA%2Fojc2qlZ20WtuEGWZVHSM6YbUdqlcSIS7QGqM3x9r3VNRNR7y9fSXYn1x%2BDTBb7JDgWm%2BhOInBvldTqiA0IzfbTmwU4Ae4VYuUK3khH%2FLuX8SgPb8zdp4yV59mNGeEzPk84wL%2B0%2Br2%2Fo9iDksvyP2N49z%2BPk1Hqlx7bGgy6KKcux8Opfd9BIS3WnKvjJp0FavYFRFaYmqb4tUXKAvNcqcMATV3RlS26gpIMg2wa7SkOfN7yaVuoex4DZoGWtjtOACLHdJzNufqC33I5HJMRs0uoDMIaz38QGOqUBYAvxalRJsm%2ByNah5nAWF%2FhTq%2FxBvqlaVAP2gYBc%2FvpwFyDsucejG%2BLBNsbDYCsUdXuj8UERRlVUmdk7eSx2tU8YM1JSB2c9OdncsVtkSsF5AasO8AbOfTEJu1nMBAuVLoMDLbauVyGCv6z%2FQ7dxkzDXG1VFyFsWAwG1dFr5End5YYPyohCH%2BwzEIPtLvetNHs6BGGXCy5s4M130O2eNq4wqlXDFh&X-Amz-Signature=5ecc44270879a380b5d54eb388e09719c9c4681ef13aaf8d73017b98f48f4744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IKKNPJ2%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7taqbNQTGxSC6o%2BmKS4NztTe98ZKZVQcGEMPhwFm9uAiEAmLou%2Fv4of9zlIXZalbiQWchA3yiRmj6aupfWM%2FqxjdIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWYtgW8K1SeKqQWIyrcA6ITwrJmihgwXcA1vH1yaBPkcXUp44E7GI2Xi0%2BuwwUZNt4VGl3DbbqYNhUVMTbmlC3wwkTGa%2Fr4JTCy3Qr3j8b6QvBq7q%2Ff5C12Z0eC1wSFkBPB5vbIcHwsWHOlLmtprFy1FPoCjhRiMK0OFGek69LnxYsNPsUR%2F1bc%2FV3wVwLMOOvDTmFEPK6ymmC9w2%2Fl%2B3uWdBklMrhL3jdkZ7Bzv1pZD0JuvCHHFEdRE9SO6jFs9SA0sam7gGVOhG8BVy6Tc3FL2xsumx2v0vcW2PMQbaUZePbyhkq2rdiDWqAa7Lr1hBn3G%2FKw7C2GAgthUiln2eAduah%2FWYctRk7luXbq6BH52wIoX1LAWTT%2BYf0RPon9JR2wSxoubGvXzJgJZ4LwkqYOeGDnROMThbHf9bmaiWUarlNptbmvUg2rda6Sn%2FcFwt87B2FV1jMCZPoDpqF7QYbtJ0l%2BfVGX9asyoHbeBezBTWUk17xGW3XaG3%2B6zHjlMV%2B2UinGK8dJLSV5bBmjEXB5fppt2yG86JndrzvoQJlAX7cuhgEFqwuzMZECIcMkQr1oySsFcSTcR1Q67JYDO1BZAQ5kLQsIVNWaNtf5xytF6O07gb89eyXjIHioFjvmkhb6j1P%2Bdjcqf6mVMJez38QGOqUBAVI5b%2B6PSlcPWjQ92O9y7RsBK%2FysePy6PC5GD5Z6tSsN48vOntpIUdSZJO%2BHzHwfmU2Ucckk%2BCE6BAHMt37rwZ4kprUdgM9U3rYXLpQq6n1%2BM6B7gqBjt06yWAy33PIage7gqIA3VBZnACJPaICsaZvgIiluqxa2KtxIrNJ0fuZLHDSo6bD6XEEQYa3lw%2FPLlKASNkSk124shvOflgXIMVEdAu4s&X-Amz-Signature=c2e7e91e8b8f077438941f718a1305ad803772a8e8e8f5e8e0d5e84757643b8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WGWLSC6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ5e6gneHYOIgWgndJ%2BKw819%2FOF0GW7Y59pfJGOVDiTAIgRwrEANEzuMQLcqaI2mw59Rxhxs9hkGog97d9rHWLp8AqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ797Oe00XHodBHd7ircA6C8NkRrRTxi%2BAy4QLccpG3fOflRE6NhOuBrVToDEGcqLwqt0Z%2BoRyarW5nDGixm6v7bscz3OdUVeUYTd7sBZKDW9jIi7yXDfnjeLO44GzBvQfxw6w%2BH%2B%2Fax9vw6mqm%2FC0Yhp278Uy4AxLh34kVOLJU%2BuofTvkF1CRma4iCPYMAyC8%2BFyS4QYFF241aBfWATUNCOg7%2BAjMbH9QJKdicUxsZq7fHH1AiD5rstB%2BtHXKFU1iDKwNF88MCsNLD1BAFylyiS7quzr5lnofOflW1jQxnYR4mGZwPQoPtYioiiX8Zqh%2BuDSPRri29vHGxmoP085ZQjplOP%2FmOYZ32m4EwxOCi%2Bjjm4vyxbqC553gG%2B8fL9bjZP%2BZUvHEHs5%2Fz8K3Ev%2FLxT8hgCeIDYQpQhQoIOCocq2z5MWmOXzujuX29uEBdaUBmUgMSJ2qZrSNofbQkN421iC4zqZOUQStGhfEH%2BS2xFDM%2Fy2EOwbMALc8oMhPmLztrHSpMwOEVvbDVD0p4bfIYf9EtSfhfauvSBzC%2BfDdpQ7J%2BpWSi%2FfRCoQMUs%2FUgPQ2CNb2r3i7rjUmXgkqmHI1Hb%2FNHe%2BEP3ByTb15CgK6WBDXtMSiayIBIOd6uZWl3nANDtWkLsSNvtYKskMKCz38QGOqUB1p8foIa22F56UcJqnv0UdNDDo9Y53dAxu0erNl7966B39BFYMzIVe6JRhHYOlBp5KXlvSz7n5wQlONEuJ4C33QiYdGob1AVAG8Cu8LiOG6WsiECPRMgWSXWoBMnZo5xscPHXiR03B2xDl56%2FPq9w%2B6Jnyb2yHFDmtciuadCtci8FmttaRTVnhymoR%2FNWbHCjFxmFdN3%2BfzfM4cqZcROCRrTPD8wc&X-Amz-Signature=523126a735858465a0241c4f978d6d53f7f9277142b692e281a88d99171132dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H23BTWT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDc%2BNKTToMJuhIjAbZT4cUn%2B%2BumSpr9WZmBYco8W7EiSAiBaAxj3BafOzwRjEYx554hAB2N19EPRq92pYgiLqsH39CqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFLpRUQkPIdDj6BlYKtwDXvOuLkXMV2Rv2s%2F5uxRqkP5O5CIHfAOr3A3wdcONIf7MS6EFJVppdCjwqmOPZx71Kw3Ru5HTaGmF30R%2FxQM2Q%2FbLkW3RV8CCxEuoKPXp28EehQOInCTTgPHND5XwIUm7PNtXNQTkEpMY5T1IQPfuReCoq4vAE9bCmD54EXZoO9o%2BRrDUDhjk%2FU96c18aVGIgnHFT%2BKIzqKL5t1L0UnvXG2qPSzB8R2kCGt5BX2PGRKNRrwJqRnSMbtBEBKTBmEYLCKnwlPa5HgmEWxYknymuoY8N47cGreoF2hNwpHe%2BhgERDZCrFPCPYp8Xse5n7ze49B%2FLxYW4pLIi99X9F5tc9QWoq8n4oFgAtExIl%2FeK2QReCIRVU%2B85G%2BBroG4J7Z1DxzeFCQazrAqHUX0UnmZWL42g97u72adfs7GXgE07iqn5pBXxRyC9pwLGxDf%2FTWCYb%2B4tKiYkZxAR8gygJkv4jO%2BMNgywMi5rp2RYEBmAe7r7meL%2BVj1QJhZAW7Kn6TsFaTf3tZmOJgIH%2Bbecke1iVGb31gNYusnvrmwAF9gtKNz6wEe1Jy4XzeJNyDaIKqxSYmAuiNiGkqZpWaYwcnkFT6kogtMyZBmVZhyLCoEn8y5v1mQXE0z7Saj7N68w4tXfxAY6pgGm3dR5%2F9doQQhtWf5otoIBIt%2BxO0P3tTUd0uqxnr0D0nJxtVPGocdYY6vi3%2F31RVHMVAaptS56BPD3fflkmETQlnfxwpXCCefp5%2FbYG5LdqB9Jj9B4l3lVLgdrKlAKyD%2B3Wy4nzytz1PozpZL78lRwfTwbpjkOPcQpie5Ww8Owgv3XWHvHWrQGAwAOH%2FPlYGCEd12IgOwLZnopr8ONz06FQZACL8mO&X-Amz-Signature=bdf3a6ad679162561e00090ea82b88e74b135113fe4644ccbf8e02089e5ab062&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ4XGAFN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIMI8HMcHdgbH%2F6uHNMyeTdtCr1xa7FhKxi5cn0Fbi4QIgJdD1VtX8MTGzLTD3Xwx2H81qcojuCC0urXW0MnNO6I8qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKp9ow9zeLnFTAl4hSrcAx1bBoqj77Akh89h%2FtDmaxkFBbG9AFjshKCV%2FFTb9eFLRqSBHJW1zgduSKJ2oCFCxHTN001s6UqK1FnSM6zd2snSaqbym4MQXsZQ5pedfuFOhmm6D5zSxCiKCddgrEOu3TMMlobzaWocNcYPcSPeX4aGPYaVhcJcKZOgJwjtdp%2BWFwbEdhPlLLuJ0zsXT7B%2BOx%2FFeTiRaCDsyoCxs0jbXcUxftqNWUoJbX8QDsF45co4DdXb8A3O2JiMPkOknj%2FU%2Bov2K1ZRC0pd29Qra212YIjdfMaTZ864X9EMxP4ezNm%2FsoAQ0uJs5TwB%2FoiZp3ErhJBS%2BoxmE4HsT1HBJbSRryKEI%2F30EZh4Mg5WbUfEVnWBDmB0MSwweR89d8RAYaevsRTr6LWXNpoo40s0xv0Es6SfdU23KpwiwqHgJY0j05FFGsuADQqPHo8m%2BeZ9luwuxqDmO1yrgbvPrGJfq1SnM2mdpiB7N3G9kkIi5o3roGpbUj%2F8Z36YOP0Kd4J%2F4CHr51xsSbfwIQ2DFrnucoXWIH1AyjlxI8ICgKn5uM433XDVbQY6DloFMmGyul36z9%2F8S%2FCF3YhbXui4ppH0l2mhF3oKTqVw%2Br%2BUUKTXXSQbvAWGHsfz%2BF%2BDkq9CSEn3MPmy38QGOqUBe9cgziZWnGvSIGiSn0wKgAoRuOIFzPQaaD4lcbENkqbG3YRbS9v6F0%2B823Ito1ct9L4eLGByZcR6930%2BRrGhSoRJL5NetX2GgzMdst0LwrozJZdwgFKfEbuTylJaD3xWSaA5c4D3VD5WZbg7%2FjmdmhRkxR%2Fqq7hbLaf9dyS%2F5wWOTmco4Nfn%2BEMs1sTInzAhqpJ1bPbwqwL3JfXrai3f3BlvPmdQ&X-Amz-Signature=1789c7fcb58ca6dccdf2dc91065aad37058f3af389d784d1660bf8afcac25932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSFF4PXJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj7VDBA0bKHQd2pF9TOI1w2YMaLSL1OUracaGG29ZZaQIgKpWzyUhMM1a2oR6a7aV5TE4fSNoJipfwGwmyRfxgyroqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQsft05cpVctbRTLyrcA7LtAzuSepO%2FFPAS2IVV0tOKQj%2BE72i2DZUBzrR1oMK9JeVWzkUvQcX76ibFjOoAeMcYryXxwWZM3TaU3lSeWB8IHgDK8xdhA%2BTFHRNaVi7nubgUruJcmTj0zHzQfDnxClIyaPXMrqM97tolJ23K%2B3%2BWlBO7Rvmi3nprmG%2FUDg4NFu3l0hX1pNJDoLCylh%2F9E6a%2ByVDt8OcPiQr2TB2uRfja5r6%2Bmdk7Txm7%2F%2BmIrnfEW99qmi%2BuH9L%2BsNJsxBP6lQiTpfznK%2B2XVXtf60ncXZ9pLcvoMdsnAiNQ%2FVdDDJVi%2BWFD6MQuRxpKK8fc37WP1f85AUfEB0KqXQedTE%2B9Mz3noJfuNCpiFCTG77uXLndnVYnI3JGkFCijAC%2F%2FbK4SYuU%2BDd2FRAWU8M3wNokwTtnlFrw8Mzw%2BoPFzoK%2BW%2F9Nvgmpl3dT%2FcyHAeAthkIt4cCA8YCt7eRgT5u%2FTxNW15aMKym1KvFYiVKz%2FwJOHVIFrgtH6Z5rGGTtimR3UeRjk8M8wyBfAWntmQYIthetfB45Gexgj13mi%2Bzt5BY8TY4uz618wmmOBv8d9fpMKM4znGg9GQggeoe1nOZZklzALf%2B%2F92vT1n5BbXlgCmPKQKRNp%2FFM4tPIvgLRqaih7MLey38QGOqUB%2FKjVQIsfIahpKHHRL40i4OzjYHmRup0lf1qxTBqMkedmBIAdMrvXzMxMO8KZM2UicCCm%2BNh1%2B7ZYudNi3S%2B2GLDZtiMcmY6Xt083S%2Few6GQabshd9lJxXVOt7Xd68YTgTqzgc0T9s1NQcIPlce5cWIlPGvgUoziDK%2FfFwRNTLqfFJOKkG%2B8cJhFvlnLVQ%2F9WbvSBqes9b4gxFAmbnjdZasFA7%2B4n&X-Amz-Signature=8eda4add6a0f79a884766d6880250e86183df446862799009676c3d0c7536cb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UBGPYYO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChGm%2B5xg4Y8w9l0%2BztOJ5qUCY2MhsHoT3gb2pZ48gIBAIgVBv39kVbgHLgTEh8BgEI3KK%2FrIMlcq%2FGDnKHl84mGQ4qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI29fJZsWFR6ruB1zSrcAy3KB5CCJu6O1G6KYFltVvbrZrUqIDf3PxwttDVy7LjVm8ln1qaSP38q5zz66kgRPxrbqUCO4am3qBvt9G5m5HyGZRj1p6UyxFnQeH%2B4J6X6mAUXn5KxGSCppJUe6OL4BPmOz3HkfubYUJHYswKULo%2B69ESXqI6M8p0E%2F1SU%2BN4ZckQ%2F64iGRM2%2F2Izc6fsbFLdqljSeakxuGRqIJcILj1MgPGJHSg4DrXSTs65%2FNDDoUw4dCkBGyzMS44jyyphpeyQsUNdo1KXcjb5RpsLhudYSFiDUs%2FNl7bo224r1rIXJiACeMbLfAerx8V0c0D0qf2zaoVo7T6CB1qAf2NgnOvTU8k2cNQgRDLy%2FSpvWc3d2FQhf%2BzzuifGav4H93lBj4FUza%2FzkRUGRf7tnDtc6uZ53pPWSzjZ13N%2FaEMIwMuzLeuYnqeZ%2BRIMe43WL60Cg3%2BJ4v2AfrjjAfSO%2B5D%2FwXuh7RFQRNa17zixzOMWz5n6C3IQZovCZFf0QjvhJf0Xqr%2BEU1ITqe7wILLsvKRvYBYGJyb7ckXP6i7KVTllTuhZK9cdMjsO16MBXg57xYcLdsTlxA%2BvWkbdGwZRunEJh8Ju1GtNFSSJXGWdKi6fjRcNr8NjHFyS4emWjTKXeMLiy38QGOqUBRLMikpXfMHf%2BqjLh2LMcP7VJzGUi%2FRBWgwh7oW9d%2B2bdxPynlMkzvdeJwHGeGUggSlsokSTlZC2tRFim%2BYr6eM%2BWh7SumBq9bHIpYBGqzP1TF0xpN5P3TVEShljhlJRraNVXc%2F4x2t%2Frk6P74N%2B%2FPk4%2FCjbk4epNU3EZ0imD2X9twKmOLVwEXx4elN%2FSAoKUxV8jaDnXMP5CbJsE%2F2SYP8I1b2qq&X-Amz-Signature=0d616623efe0a22891d6f0670b02b8c0e6e02fce5139d43d1f0db6a2f1e18053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IKKNPJ2%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7taqbNQTGxSC6o%2BmKS4NztTe98ZKZVQcGEMPhwFm9uAiEAmLou%2Fv4of9zlIXZalbiQWchA3yiRmj6aupfWM%2FqxjdIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWYtgW8K1SeKqQWIyrcA6ITwrJmihgwXcA1vH1yaBPkcXUp44E7GI2Xi0%2BuwwUZNt4VGl3DbbqYNhUVMTbmlC3wwkTGa%2Fr4JTCy3Qr3j8b6QvBq7q%2Ff5C12Z0eC1wSFkBPB5vbIcHwsWHOlLmtprFy1FPoCjhRiMK0OFGek69LnxYsNPsUR%2F1bc%2FV3wVwLMOOvDTmFEPK6ymmC9w2%2Fl%2B3uWdBklMrhL3jdkZ7Bzv1pZD0JuvCHHFEdRE9SO6jFs9SA0sam7gGVOhG8BVy6Tc3FL2xsumx2v0vcW2PMQbaUZePbyhkq2rdiDWqAa7Lr1hBn3G%2FKw7C2GAgthUiln2eAduah%2FWYctRk7luXbq6BH52wIoX1LAWTT%2BYf0RPon9JR2wSxoubGvXzJgJZ4LwkqYOeGDnROMThbHf9bmaiWUarlNptbmvUg2rda6Sn%2FcFwt87B2FV1jMCZPoDpqF7QYbtJ0l%2BfVGX9asyoHbeBezBTWUk17xGW3XaG3%2B6zHjlMV%2B2UinGK8dJLSV5bBmjEXB5fppt2yG86JndrzvoQJlAX7cuhgEFqwuzMZECIcMkQr1oySsFcSTcR1Q67JYDO1BZAQ5kLQsIVNWaNtf5xytF6O07gb89eyXjIHioFjvmkhb6j1P%2Bdjcqf6mVMJez38QGOqUBAVI5b%2B6PSlcPWjQ92O9y7RsBK%2FysePy6PC5GD5Z6tSsN48vOntpIUdSZJO%2BHzHwfmU2Ucckk%2BCE6BAHMt37rwZ4kprUdgM9U3rYXLpQq6n1%2BM6B7gqBjt06yWAy33PIage7gqIA3VBZnACJPaICsaZvgIiluqxa2KtxIrNJ0fuZLHDSo6bD6XEEQYa3lw%2FPLlKASNkSk124shvOflgXIMVEdAu4s&X-Amz-Signature=ca8c4be3ed92ab04ebe64b2ecb78593b7ee4c90966192a05ab7888f1bb187da4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IKKNPJ2%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7taqbNQTGxSC6o%2BmKS4NztTe98ZKZVQcGEMPhwFm9uAiEAmLou%2Fv4of9zlIXZalbiQWchA3yiRmj6aupfWM%2FqxjdIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWYtgW8K1SeKqQWIyrcA6ITwrJmihgwXcA1vH1yaBPkcXUp44E7GI2Xi0%2BuwwUZNt4VGl3DbbqYNhUVMTbmlC3wwkTGa%2Fr4JTCy3Qr3j8b6QvBq7q%2Ff5C12Z0eC1wSFkBPB5vbIcHwsWHOlLmtprFy1FPoCjhRiMK0OFGek69LnxYsNPsUR%2F1bc%2FV3wVwLMOOvDTmFEPK6ymmC9w2%2Fl%2B3uWdBklMrhL3jdkZ7Bzv1pZD0JuvCHHFEdRE9SO6jFs9SA0sam7gGVOhG8BVy6Tc3FL2xsumx2v0vcW2PMQbaUZePbyhkq2rdiDWqAa7Lr1hBn3G%2FKw7C2GAgthUiln2eAduah%2FWYctRk7luXbq6BH52wIoX1LAWTT%2BYf0RPon9JR2wSxoubGvXzJgJZ4LwkqYOeGDnROMThbHf9bmaiWUarlNptbmvUg2rda6Sn%2FcFwt87B2FV1jMCZPoDpqF7QYbtJ0l%2BfVGX9asyoHbeBezBTWUk17xGW3XaG3%2B6zHjlMV%2B2UinGK8dJLSV5bBmjEXB5fppt2yG86JndrzvoQJlAX7cuhgEFqwuzMZECIcMkQr1oySsFcSTcR1Q67JYDO1BZAQ5kLQsIVNWaNtf5xytF6O07gb89eyXjIHioFjvmkhb6j1P%2Bdjcqf6mVMJez38QGOqUBAVI5b%2B6PSlcPWjQ92O9y7RsBK%2FysePy6PC5GD5Z6tSsN48vOntpIUdSZJO%2BHzHwfmU2Ucckk%2BCE6BAHMt37rwZ4kprUdgM9U3rYXLpQq6n1%2BM6B7gqBjt06yWAy33PIage7gqIA3VBZnACJPaICsaZvgIiluqxa2KtxIrNJ0fuZLHDSo6bD6XEEQYa3lw%2FPLlKASNkSk124shvOflgXIMVEdAu4s&X-Amz-Signature=cbd2dd6fc7086eec110f373f2c4b04d41fbf32ea8ab51b935cce2fc954877cd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KNHRCWU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5wscMcIG1oMPm5%2Fy7QoiB7dPAjDdiPDdaT%2FdF0ZhOYwIgQ129dJk9XO5%2BJ2XuuWDwTS0UTPt18VEW8PxXQKsh0nYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCt0zK5rkSSfJgaZVCrcA0Vaa15H7%2FdFBw2ELqTuX5tw5afvD3pCjD3u1pDp5x15D9Eu6JgIZWB60t%2FKXWvOSGe%2BmmWRZ9mUJGu%2BZN1Ucki6JP%2BevgLqCZUaCIwYLFZ7rP%2Bu7N1jmWyaQNUFPglrl384eY50vNn260LzYJYOBH7foTB%2FK5bBifZRjGNlv67DjgE0u5NZjRT2yXGx58hkl7dX4CanvwPRKNBlISm69NJK%2BJtS5kMRvkxgtSNQQ7SyvwyfyAhV4MaYxHJoUfpt%2FYH%2Bhh5ZmPEbZczOqS7328Y6iopPbn2MNibkpKanT2uluuAhbbX6T0dF3t9ZL4b%2FZZ%2Bz5lTTtOjCeygU82x1KnmMTeD9Gub%2F9anG7U%2B08HxHFy7m9Fd0mqRiHW8A%2BFPSv6kuh%2F8JwE6cdMnsjkuGyCYTu1MjIU%2F2uBjTyOfI14bm10CbxdkK%2B3hpnNJ98yxVsD2sLSmsGSyjPqizaWGFB%2FiQ%2FApLQQEzJbyEFElIf8oZNtH1fFTHcLGEl7bIyS3xdtKJT8nlLZi3sFJrrR%2FksgHbwgGWSeiNa6akFW%2Fqxb0GuKeU7K3r566xe0aaVG1WZrH6%2BimcZr9chPC8EqoPkDirQV%2F3cg5uJXu%2F9aDjwluGSbA9sfrz7t0yBFB9MJmz38QGOqUBmPaofsxXv%2Bs5tF2z7zI9bJ7swnr%2FpsGVCLpBKablArZDghTiokAFpbZ64XkA5mq%2BnQIuUTPDcOUCb4VySfD1IztJzf71ZdKQINWR%2F2fmQAF4X%2BjY2XPyklzv6kR8oLq79gGeyjWbl%2BDbm070hJ7%2Bj78VmSdWcwfblhY2aOwXJxK9bNndZW%2BJQJDS1Wg%2BQZJ2dr9cgQ4rO5lnA5GmF3B2NRJCdeV3&X-Amz-Signature=d93d120fb842ebb858909c76e5a7737cf0de739d039b3fc67bb0aa976b094de7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KNHRCWU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5wscMcIG1oMPm5%2Fy7QoiB7dPAjDdiPDdaT%2FdF0ZhOYwIgQ129dJk9XO5%2BJ2XuuWDwTS0UTPt18VEW8PxXQKsh0nYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCt0zK5rkSSfJgaZVCrcA0Vaa15H7%2FdFBw2ELqTuX5tw5afvD3pCjD3u1pDp5x15D9Eu6JgIZWB60t%2FKXWvOSGe%2BmmWRZ9mUJGu%2BZN1Ucki6JP%2BevgLqCZUaCIwYLFZ7rP%2Bu7N1jmWyaQNUFPglrl384eY50vNn260LzYJYOBH7foTB%2FK5bBifZRjGNlv67DjgE0u5NZjRT2yXGx58hkl7dX4CanvwPRKNBlISm69NJK%2BJtS5kMRvkxgtSNQQ7SyvwyfyAhV4MaYxHJoUfpt%2FYH%2Bhh5ZmPEbZczOqS7328Y6iopPbn2MNibkpKanT2uluuAhbbX6T0dF3t9ZL4b%2FZZ%2Bz5lTTtOjCeygU82x1KnmMTeD9Gub%2F9anG7U%2B08HxHFy7m9Fd0mqRiHW8A%2BFPSv6kuh%2F8JwE6cdMnsjkuGyCYTu1MjIU%2F2uBjTyOfI14bm10CbxdkK%2B3hpnNJ98yxVsD2sLSmsGSyjPqizaWGFB%2FiQ%2FApLQQEzJbyEFElIf8oZNtH1fFTHcLGEl7bIyS3xdtKJT8nlLZi3sFJrrR%2FksgHbwgGWSeiNa6akFW%2Fqxb0GuKeU7K3r566xe0aaVG1WZrH6%2BimcZr9chPC8EqoPkDirQV%2F3cg5uJXu%2F9aDjwluGSbA9sfrz7t0yBFB9MJmz38QGOqUBmPaofsxXv%2Bs5tF2z7zI9bJ7swnr%2FpsGVCLpBKablArZDghTiokAFpbZ64XkA5mq%2BnQIuUTPDcOUCb4VySfD1IztJzf71ZdKQINWR%2F2fmQAF4X%2BjY2XPyklzv6kR8oLq79gGeyjWbl%2BDbm070hJ7%2Bj78VmSdWcwfblhY2aOwXJxK9bNndZW%2BJQJDS1Wg%2BQZJ2dr9cgQ4rO5lnA5GmF3B2NRJCdeV3&X-Amz-Signature=a5c74f4548bf444f443c95bd646b5dbc752d3d64a99a3d62e9479e90fe774108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KNHRCWU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5wscMcIG1oMPm5%2Fy7QoiB7dPAjDdiPDdaT%2FdF0ZhOYwIgQ129dJk9XO5%2BJ2XuuWDwTS0UTPt18VEW8PxXQKsh0nYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCt0zK5rkSSfJgaZVCrcA0Vaa15H7%2FdFBw2ELqTuX5tw5afvD3pCjD3u1pDp5x15D9Eu6JgIZWB60t%2FKXWvOSGe%2BmmWRZ9mUJGu%2BZN1Ucki6JP%2BevgLqCZUaCIwYLFZ7rP%2Bu7N1jmWyaQNUFPglrl384eY50vNn260LzYJYOBH7foTB%2FK5bBifZRjGNlv67DjgE0u5NZjRT2yXGx58hkl7dX4CanvwPRKNBlISm69NJK%2BJtS5kMRvkxgtSNQQ7SyvwyfyAhV4MaYxHJoUfpt%2FYH%2Bhh5ZmPEbZczOqS7328Y6iopPbn2MNibkpKanT2uluuAhbbX6T0dF3t9ZL4b%2FZZ%2Bz5lTTtOjCeygU82x1KnmMTeD9Gub%2F9anG7U%2B08HxHFy7m9Fd0mqRiHW8A%2BFPSv6kuh%2F8JwE6cdMnsjkuGyCYTu1MjIU%2F2uBjTyOfI14bm10CbxdkK%2B3hpnNJ98yxVsD2sLSmsGSyjPqizaWGFB%2FiQ%2FApLQQEzJbyEFElIf8oZNtH1fFTHcLGEl7bIyS3xdtKJT8nlLZi3sFJrrR%2FksgHbwgGWSeiNa6akFW%2Fqxb0GuKeU7K3r566xe0aaVG1WZrH6%2BimcZr9chPC8EqoPkDirQV%2F3cg5uJXu%2F9aDjwluGSbA9sfrz7t0yBFB9MJmz38QGOqUBmPaofsxXv%2Bs5tF2z7zI9bJ7swnr%2FpsGVCLpBKablArZDghTiokAFpbZ64XkA5mq%2BnQIuUTPDcOUCb4VySfD1IztJzf71ZdKQINWR%2F2fmQAF4X%2BjY2XPyklzv6kR8oLq79gGeyjWbl%2BDbm070hJ7%2Bj78VmSdWcwfblhY2aOwXJxK9bNndZW%2BJQJDS1Wg%2BQZJ2dr9cgQ4rO5lnA5GmF3B2NRJCdeV3&X-Amz-Signature=4c92491573b530537d053bff8e34363b1f4a469f148b402cb20b181e2b96772c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KNHRCWU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5wscMcIG1oMPm5%2Fy7QoiB7dPAjDdiPDdaT%2FdF0ZhOYwIgQ129dJk9XO5%2BJ2XuuWDwTS0UTPt18VEW8PxXQKsh0nYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCt0zK5rkSSfJgaZVCrcA0Vaa15H7%2FdFBw2ELqTuX5tw5afvD3pCjD3u1pDp5x15D9Eu6JgIZWB60t%2FKXWvOSGe%2BmmWRZ9mUJGu%2BZN1Ucki6JP%2BevgLqCZUaCIwYLFZ7rP%2Bu7N1jmWyaQNUFPglrl384eY50vNn260LzYJYOBH7foTB%2FK5bBifZRjGNlv67DjgE0u5NZjRT2yXGx58hkl7dX4CanvwPRKNBlISm69NJK%2BJtS5kMRvkxgtSNQQ7SyvwyfyAhV4MaYxHJoUfpt%2FYH%2Bhh5ZmPEbZczOqS7328Y6iopPbn2MNibkpKanT2uluuAhbbX6T0dF3t9ZL4b%2FZZ%2Bz5lTTtOjCeygU82x1KnmMTeD9Gub%2F9anG7U%2B08HxHFy7m9Fd0mqRiHW8A%2BFPSv6kuh%2F8JwE6cdMnsjkuGyCYTu1MjIU%2F2uBjTyOfI14bm10CbxdkK%2B3hpnNJ98yxVsD2sLSmsGSyjPqizaWGFB%2FiQ%2FApLQQEzJbyEFElIf8oZNtH1fFTHcLGEl7bIyS3xdtKJT8nlLZi3sFJrrR%2FksgHbwgGWSeiNa6akFW%2Fqxb0GuKeU7K3r566xe0aaVG1WZrH6%2BimcZr9chPC8EqoPkDirQV%2F3cg5uJXu%2F9aDjwluGSbA9sfrz7t0yBFB9MJmz38QGOqUBmPaofsxXv%2Bs5tF2z7zI9bJ7swnr%2FpsGVCLpBKablArZDghTiokAFpbZ64XkA5mq%2BnQIuUTPDcOUCb4VySfD1IztJzf71ZdKQINWR%2F2fmQAF4X%2BjY2XPyklzv6kR8oLq79gGeyjWbl%2BDbm070hJ7%2Bj78VmSdWcwfblhY2aOwXJxK9bNndZW%2BJQJDS1Wg%2BQZJ2dr9cgQ4rO5lnA5GmF3B2NRJCdeV3&X-Amz-Signature=96b5b576cbcab7a9347440b199e0c23bae56765245e31769313693385d6cd331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KNHRCWU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5wscMcIG1oMPm5%2Fy7QoiB7dPAjDdiPDdaT%2FdF0ZhOYwIgQ129dJk9XO5%2BJ2XuuWDwTS0UTPt18VEW8PxXQKsh0nYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCt0zK5rkSSfJgaZVCrcA0Vaa15H7%2FdFBw2ELqTuX5tw5afvD3pCjD3u1pDp5x15D9Eu6JgIZWB60t%2FKXWvOSGe%2BmmWRZ9mUJGu%2BZN1Ucki6JP%2BevgLqCZUaCIwYLFZ7rP%2Bu7N1jmWyaQNUFPglrl384eY50vNn260LzYJYOBH7foTB%2FK5bBifZRjGNlv67DjgE0u5NZjRT2yXGx58hkl7dX4CanvwPRKNBlISm69NJK%2BJtS5kMRvkxgtSNQQ7SyvwyfyAhV4MaYxHJoUfpt%2FYH%2Bhh5ZmPEbZczOqS7328Y6iopPbn2MNibkpKanT2uluuAhbbX6T0dF3t9ZL4b%2FZZ%2Bz5lTTtOjCeygU82x1KnmMTeD9Gub%2F9anG7U%2B08HxHFy7m9Fd0mqRiHW8A%2BFPSv6kuh%2F8JwE6cdMnsjkuGyCYTu1MjIU%2F2uBjTyOfI14bm10CbxdkK%2B3hpnNJ98yxVsD2sLSmsGSyjPqizaWGFB%2FiQ%2FApLQQEzJbyEFElIf8oZNtH1fFTHcLGEl7bIyS3xdtKJT8nlLZi3sFJrrR%2FksgHbwgGWSeiNa6akFW%2Fqxb0GuKeU7K3r566xe0aaVG1WZrH6%2BimcZr9chPC8EqoPkDirQV%2F3cg5uJXu%2F9aDjwluGSbA9sfrz7t0yBFB9MJmz38QGOqUBmPaofsxXv%2Bs5tF2z7zI9bJ7swnr%2FpsGVCLpBKablArZDghTiokAFpbZ64XkA5mq%2BnQIuUTPDcOUCb4VySfD1IztJzf71ZdKQINWR%2F2fmQAF4X%2BjY2XPyklzv6kR8oLq79gGeyjWbl%2BDbm070hJ7%2Bj78VmSdWcwfblhY2aOwXJxK9bNndZW%2BJQJDS1Wg%2BQZJ2dr9cgQ4rO5lnA5GmF3B2NRJCdeV3&X-Amz-Signature=e8d9db0368df15985a30e12eb040c3e5b76bf250984f46eafd0c9e52fb6cdef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KNHRCWU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5wscMcIG1oMPm5%2Fy7QoiB7dPAjDdiPDdaT%2FdF0ZhOYwIgQ129dJk9XO5%2BJ2XuuWDwTS0UTPt18VEW8PxXQKsh0nYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCt0zK5rkSSfJgaZVCrcA0Vaa15H7%2FdFBw2ELqTuX5tw5afvD3pCjD3u1pDp5x15D9Eu6JgIZWB60t%2FKXWvOSGe%2BmmWRZ9mUJGu%2BZN1Ucki6JP%2BevgLqCZUaCIwYLFZ7rP%2Bu7N1jmWyaQNUFPglrl384eY50vNn260LzYJYOBH7foTB%2FK5bBifZRjGNlv67DjgE0u5NZjRT2yXGx58hkl7dX4CanvwPRKNBlISm69NJK%2BJtS5kMRvkxgtSNQQ7SyvwyfyAhV4MaYxHJoUfpt%2FYH%2Bhh5ZmPEbZczOqS7328Y6iopPbn2MNibkpKanT2uluuAhbbX6T0dF3t9ZL4b%2FZZ%2Bz5lTTtOjCeygU82x1KnmMTeD9Gub%2F9anG7U%2B08HxHFy7m9Fd0mqRiHW8A%2BFPSv6kuh%2F8JwE6cdMnsjkuGyCYTu1MjIU%2F2uBjTyOfI14bm10CbxdkK%2B3hpnNJ98yxVsD2sLSmsGSyjPqizaWGFB%2FiQ%2FApLQQEzJbyEFElIf8oZNtH1fFTHcLGEl7bIyS3xdtKJT8nlLZi3sFJrrR%2FksgHbwgGWSeiNa6akFW%2Fqxb0GuKeU7K3r566xe0aaVG1WZrH6%2BimcZr9chPC8EqoPkDirQV%2F3cg5uJXu%2F9aDjwluGSbA9sfrz7t0yBFB9MJmz38QGOqUBmPaofsxXv%2Bs5tF2z7zI9bJ7swnr%2FpsGVCLpBKablArZDghTiokAFpbZ64XkA5mq%2BnQIuUTPDcOUCb4VySfD1IztJzf71ZdKQINWR%2F2fmQAF4X%2BjY2XPyklzv6kR8oLq79gGeyjWbl%2BDbm070hJ7%2Bj78VmSdWcwfblhY2aOwXJxK9bNndZW%2BJQJDS1Wg%2BQZJ2dr9cgQ4rO5lnA5GmF3B2NRJCdeV3&X-Amz-Signature=e9db554c5a09374a72688958346840bc5da97d9e1364cbb0a0ee9d8ef7957f7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KNHRCWU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5wscMcIG1oMPm5%2Fy7QoiB7dPAjDdiPDdaT%2FdF0ZhOYwIgQ129dJk9XO5%2BJ2XuuWDwTS0UTPt18VEW8PxXQKsh0nYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCt0zK5rkSSfJgaZVCrcA0Vaa15H7%2FdFBw2ELqTuX5tw5afvD3pCjD3u1pDp5x15D9Eu6JgIZWB60t%2FKXWvOSGe%2BmmWRZ9mUJGu%2BZN1Ucki6JP%2BevgLqCZUaCIwYLFZ7rP%2Bu7N1jmWyaQNUFPglrl384eY50vNn260LzYJYOBH7foTB%2FK5bBifZRjGNlv67DjgE0u5NZjRT2yXGx58hkl7dX4CanvwPRKNBlISm69NJK%2BJtS5kMRvkxgtSNQQ7SyvwyfyAhV4MaYxHJoUfpt%2FYH%2Bhh5ZmPEbZczOqS7328Y6iopPbn2MNibkpKanT2uluuAhbbX6T0dF3t9ZL4b%2FZZ%2Bz5lTTtOjCeygU82x1KnmMTeD9Gub%2F9anG7U%2B08HxHFy7m9Fd0mqRiHW8A%2BFPSv6kuh%2F8JwE6cdMnsjkuGyCYTu1MjIU%2F2uBjTyOfI14bm10CbxdkK%2B3hpnNJ98yxVsD2sLSmsGSyjPqizaWGFB%2FiQ%2FApLQQEzJbyEFElIf8oZNtH1fFTHcLGEl7bIyS3xdtKJT8nlLZi3sFJrrR%2FksgHbwgGWSeiNa6akFW%2Fqxb0GuKeU7K3r566xe0aaVG1WZrH6%2BimcZr9chPC8EqoPkDirQV%2F3cg5uJXu%2F9aDjwluGSbA9sfrz7t0yBFB9MJmz38QGOqUBmPaofsxXv%2Bs5tF2z7zI9bJ7swnr%2FpsGVCLpBKablArZDghTiokAFpbZ64XkA5mq%2BnQIuUTPDcOUCb4VySfD1IztJzf71ZdKQINWR%2F2fmQAF4X%2BjY2XPyklzv6kR8oLq79gGeyjWbl%2BDbm070hJ7%2Bj78VmSdWcwfblhY2aOwXJxK9bNndZW%2BJQJDS1Wg%2BQZJ2dr9cgQ4rO5lnA5GmF3B2NRJCdeV3&X-Amz-Signature=4c92491573b530537d053bff8e34363b1f4a469f148b402cb20b181e2b96772c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KNHRCWU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5wscMcIG1oMPm5%2Fy7QoiB7dPAjDdiPDdaT%2FdF0ZhOYwIgQ129dJk9XO5%2BJ2XuuWDwTS0UTPt18VEW8PxXQKsh0nYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCt0zK5rkSSfJgaZVCrcA0Vaa15H7%2FdFBw2ELqTuX5tw5afvD3pCjD3u1pDp5x15D9Eu6JgIZWB60t%2FKXWvOSGe%2BmmWRZ9mUJGu%2BZN1Ucki6JP%2BevgLqCZUaCIwYLFZ7rP%2Bu7N1jmWyaQNUFPglrl384eY50vNn260LzYJYOBH7foTB%2FK5bBifZRjGNlv67DjgE0u5NZjRT2yXGx58hkl7dX4CanvwPRKNBlISm69NJK%2BJtS5kMRvkxgtSNQQ7SyvwyfyAhV4MaYxHJoUfpt%2FYH%2Bhh5ZmPEbZczOqS7328Y6iopPbn2MNibkpKanT2uluuAhbbX6T0dF3t9ZL4b%2FZZ%2Bz5lTTtOjCeygU82x1KnmMTeD9Gub%2F9anG7U%2B08HxHFy7m9Fd0mqRiHW8A%2BFPSv6kuh%2F8JwE6cdMnsjkuGyCYTu1MjIU%2F2uBjTyOfI14bm10CbxdkK%2B3hpnNJ98yxVsD2sLSmsGSyjPqizaWGFB%2FiQ%2FApLQQEzJbyEFElIf8oZNtH1fFTHcLGEl7bIyS3xdtKJT8nlLZi3sFJrrR%2FksgHbwgGWSeiNa6akFW%2Fqxb0GuKeU7K3r566xe0aaVG1WZrH6%2BimcZr9chPC8EqoPkDirQV%2F3cg5uJXu%2F9aDjwluGSbA9sfrz7t0yBFB9MJmz38QGOqUBmPaofsxXv%2Bs5tF2z7zI9bJ7swnr%2FpsGVCLpBKablArZDghTiokAFpbZ64XkA5mq%2BnQIuUTPDcOUCb4VySfD1IztJzf71ZdKQINWR%2F2fmQAF4X%2BjY2XPyklzv6kR8oLq79gGeyjWbl%2BDbm070hJ7%2Bj78VmSdWcwfblhY2aOwXJxK9bNndZW%2BJQJDS1Wg%2BQZJ2dr9cgQ4rO5lnA5GmF3B2NRJCdeV3&X-Amz-Signature=3be49653788a2343eefb03eafe8c6574017998e4d2765749f8961327ec4e4d3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KNHRCWU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5wscMcIG1oMPm5%2Fy7QoiB7dPAjDdiPDdaT%2FdF0ZhOYwIgQ129dJk9XO5%2BJ2XuuWDwTS0UTPt18VEW8PxXQKsh0nYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCt0zK5rkSSfJgaZVCrcA0Vaa15H7%2FdFBw2ELqTuX5tw5afvD3pCjD3u1pDp5x15D9Eu6JgIZWB60t%2FKXWvOSGe%2BmmWRZ9mUJGu%2BZN1Ucki6JP%2BevgLqCZUaCIwYLFZ7rP%2Bu7N1jmWyaQNUFPglrl384eY50vNn260LzYJYOBH7foTB%2FK5bBifZRjGNlv67DjgE0u5NZjRT2yXGx58hkl7dX4CanvwPRKNBlISm69NJK%2BJtS5kMRvkxgtSNQQ7SyvwyfyAhV4MaYxHJoUfpt%2FYH%2Bhh5ZmPEbZczOqS7328Y6iopPbn2MNibkpKanT2uluuAhbbX6T0dF3t9ZL4b%2FZZ%2Bz5lTTtOjCeygU82x1KnmMTeD9Gub%2F9anG7U%2B08HxHFy7m9Fd0mqRiHW8A%2BFPSv6kuh%2F8JwE6cdMnsjkuGyCYTu1MjIU%2F2uBjTyOfI14bm10CbxdkK%2B3hpnNJ98yxVsD2sLSmsGSyjPqizaWGFB%2FiQ%2FApLQQEzJbyEFElIf8oZNtH1fFTHcLGEl7bIyS3xdtKJT8nlLZi3sFJrrR%2FksgHbwgGWSeiNa6akFW%2Fqxb0GuKeU7K3r566xe0aaVG1WZrH6%2BimcZr9chPC8EqoPkDirQV%2F3cg5uJXu%2F9aDjwluGSbA9sfrz7t0yBFB9MJmz38QGOqUBmPaofsxXv%2Bs5tF2z7zI9bJ7swnr%2FpsGVCLpBKablArZDghTiokAFpbZ64XkA5mq%2BnQIuUTPDcOUCb4VySfD1IztJzf71ZdKQINWR%2F2fmQAF4X%2BjY2XPyklzv6kR8oLq79gGeyjWbl%2BDbm070hJ7%2Bj78VmSdWcwfblhY2aOwXJxK9bNndZW%2BJQJDS1Wg%2BQZJ2dr9cgQ4rO5lnA5GmF3B2NRJCdeV3&X-Amz-Signature=bb1cf72543f113950f27099cfbbb514769558c71d11a0b983309a73c548b9126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KNHRCWU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5wscMcIG1oMPm5%2Fy7QoiB7dPAjDdiPDdaT%2FdF0ZhOYwIgQ129dJk9XO5%2BJ2XuuWDwTS0UTPt18VEW8PxXQKsh0nYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCt0zK5rkSSfJgaZVCrcA0Vaa15H7%2FdFBw2ELqTuX5tw5afvD3pCjD3u1pDp5x15D9Eu6JgIZWB60t%2FKXWvOSGe%2BmmWRZ9mUJGu%2BZN1Ucki6JP%2BevgLqCZUaCIwYLFZ7rP%2Bu7N1jmWyaQNUFPglrl384eY50vNn260LzYJYOBH7foTB%2FK5bBifZRjGNlv67DjgE0u5NZjRT2yXGx58hkl7dX4CanvwPRKNBlISm69NJK%2BJtS5kMRvkxgtSNQQ7SyvwyfyAhV4MaYxHJoUfpt%2FYH%2Bhh5ZmPEbZczOqS7328Y6iopPbn2MNibkpKanT2uluuAhbbX6T0dF3t9ZL4b%2FZZ%2Bz5lTTtOjCeygU82x1KnmMTeD9Gub%2F9anG7U%2B08HxHFy7m9Fd0mqRiHW8A%2BFPSv6kuh%2F8JwE6cdMnsjkuGyCYTu1MjIU%2F2uBjTyOfI14bm10CbxdkK%2B3hpnNJ98yxVsD2sLSmsGSyjPqizaWGFB%2FiQ%2FApLQQEzJbyEFElIf8oZNtH1fFTHcLGEl7bIyS3xdtKJT8nlLZi3sFJrrR%2FksgHbwgGWSeiNa6akFW%2Fqxb0GuKeU7K3r566xe0aaVG1WZrH6%2BimcZr9chPC8EqoPkDirQV%2F3cg5uJXu%2F9aDjwluGSbA9sfrz7t0yBFB9MJmz38QGOqUBmPaofsxXv%2Bs5tF2z7zI9bJ7swnr%2FpsGVCLpBKablArZDghTiokAFpbZ64XkA5mq%2BnQIuUTPDcOUCb4VySfD1IztJzf71ZdKQINWR%2F2fmQAF4X%2BjY2XPyklzv6kR8oLq79gGeyjWbl%2BDbm070hJ7%2Bj78VmSdWcwfblhY2aOwXJxK9bNndZW%2BJQJDS1Wg%2BQZJ2dr9cgQ4rO5lnA5GmF3B2NRJCdeV3&X-Amz-Signature=c9cb5d3d8c7dcc0517e980b5f86bec5014273f51264520a45b8a7ce4246a1e49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
