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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663776RIZN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFwBOvlrk3JWkYuEjOk5q%2BIK0vwaOWSli3lxNNCbj6tAiBhRn5Y4ZhmlneLuMTgzhqB5NuRCxUZ81YlPUDkNIKE%2BCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEPylCcHJY0edMxuZKtwD3yjKmErIqztr80r17zLwDaHj7mk8wVVTZf%2FiEk9Ws5VbeXGOyL3cgP65J2fRgmaJQ75Kl2uVzLx3DXvvHvYlHdRR31MTsH5J%2Fuj3K80npg7FrgyZf7uNf5MEW9REqLzs%2BuD3bwzO79%2FG76s32%2BOx0XUmYVTpi87Y%2BvP%2FHf6VgfvSsnO%2BV34nkObL%2BLHeKMfpZ6EWe3zBE6RuFMMM5zIM%2F9VGN3pocOM06wrZdd1GwMwRdX5rP8ph5x5e0nbKpJPaEx3XIcBSM9UggjJnhC2%2Bvp%2BLwqAlhgm%2FIAc%2BPUE7pgeNRhEi%2FU9SkJunRMls31LHu33xxG%2FwoHa%2BecaZu4HrOBN1lU%2FrOkkg7ZahlFWWmjTIERQXorti0MReK5wKZ9%2BneFrW7TAkmpyQQ9q69%2B%2FjlfZOhhIXki5jnaKizl28JOx5RAOOroizvc2b8nBWEyPKu0PzCav5KHOrmfIxaXogOPVumAvzH4Lufkvov4rR%2BS1aPuD5dktMYHerwCzRqzzrjN1nCD1tNE%2FeRF8o2JVNsYJCBnazo9l%2BSDgFwMvJ1mIy6wokFYzSECz41w5p8aX15fAeWdr9mRMll2Mr57bISXBJF4X3WSrAfxodNgwbflK93EpVe2w5p7GoWWAw7smrxAY6pgHRmYR9lP2fK1lf8HnQ9Y%2B8xuNoxIlp6AX0iOHaXrv0dZHs4DKAK4y1Ktt%2BejWSy29effMCs7iJ1EL%2BWJTToxJsUiEeIIzkhjSBHiYnT6HW%2BXiEr48LX7lpvtvHwdpRvDhJR5%2Ble94bNP7JkToX6nVvqoepN2JFscidF8YDrdo%2Ff%2FR8iluNMVMa14EA47wdDpPPrtIbwHG7rmyJmv46l68ue6VDqUxZ&X-Amz-Signature=0c6d014a2b51b75278456cc07be91a27d105c56cbd0a8cc14b6ea98088fcdff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663776RIZN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFwBOvlrk3JWkYuEjOk5q%2BIK0vwaOWSli3lxNNCbj6tAiBhRn5Y4ZhmlneLuMTgzhqB5NuRCxUZ81YlPUDkNIKE%2BCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEPylCcHJY0edMxuZKtwD3yjKmErIqztr80r17zLwDaHj7mk8wVVTZf%2FiEk9Ws5VbeXGOyL3cgP65J2fRgmaJQ75Kl2uVzLx3DXvvHvYlHdRR31MTsH5J%2Fuj3K80npg7FrgyZf7uNf5MEW9REqLzs%2BuD3bwzO79%2FG76s32%2BOx0XUmYVTpi87Y%2BvP%2FHf6VgfvSsnO%2BV34nkObL%2BLHeKMfpZ6EWe3zBE6RuFMMM5zIM%2F9VGN3pocOM06wrZdd1GwMwRdX5rP8ph5x5e0nbKpJPaEx3XIcBSM9UggjJnhC2%2Bvp%2BLwqAlhgm%2FIAc%2BPUE7pgeNRhEi%2FU9SkJunRMls31LHu33xxG%2FwoHa%2BecaZu4HrOBN1lU%2FrOkkg7ZahlFWWmjTIERQXorti0MReK5wKZ9%2BneFrW7TAkmpyQQ9q69%2B%2FjlfZOhhIXki5jnaKizl28JOx5RAOOroizvc2b8nBWEyPKu0PzCav5KHOrmfIxaXogOPVumAvzH4Lufkvov4rR%2BS1aPuD5dktMYHerwCzRqzzrjN1nCD1tNE%2FeRF8o2JVNsYJCBnazo9l%2BSDgFwMvJ1mIy6wokFYzSECz41w5p8aX15fAeWdr9mRMll2Mr57bISXBJF4X3WSrAfxodNgwbflK93EpVe2w5p7GoWWAw7smrxAY6pgHRmYR9lP2fK1lf8HnQ9Y%2B8xuNoxIlp6AX0iOHaXrv0dZHs4DKAK4y1Ktt%2BejWSy29effMCs7iJ1EL%2BWJTToxJsUiEeIIzkhjSBHiYnT6HW%2BXiEr48LX7lpvtvHwdpRvDhJR5%2Ble94bNP7JkToX6nVvqoepN2JFscidF8YDrdo%2Ff%2FR8iluNMVMa14EA47wdDpPPrtIbwHG7rmyJmv46l68ue6VDqUxZ&X-Amz-Signature=0bee00b80e8deeca6767f685ecc55fcc2be8dfcef4fc2dd129d65755c7279566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663776RIZN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFwBOvlrk3JWkYuEjOk5q%2BIK0vwaOWSli3lxNNCbj6tAiBhRn5Y4ZhmlneLuMTgzhqB5NuRCxUZ81YlPUDkNIKE%2BCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEPylCcHJY0edMxuZKtwD3yjKmErIqztr80r17zLwDaHj7mk8wVVTZf%2FiEk9Ws5VbeXGOyL3cgP65J2fRgmaJQ75Kl2uVzLx3DXvvHvYlHdRR31MTsH5J%2Fuj3K80npg7FrgyZf7uNf5MEW9REqLzs%2BuD3bwzO79%2FG76s32%2BOx0XUmYVTpi87Y%2BvP%2FHf6VgfvSsnO%2BV34nkObL%2BLHeKMfpZ6EWe3zBE6RuFMMM5zIM%2F9VGN3pocOM06wrZdd1GwMwRdX5rP8ph5x5e0nbKpJPaEx3XIcBSM9UggjJnhC2%2Bvp%2BLwqAlhgm%2FIAc%2BPUE7pgeNRhEi%2FU9SkJunRMls31LHu33xxG%2FwoHa%2BecaZu4HrOBN1lU%2FrOkkg7ZahlFWWmjTIERQXorti0MReK5wKZ9%2BneFrW7TAkmpyQQ9q69%2B%2FjlfZOhhIXki5jnaKizl28JOx5RAOOroizvc2b8nBWEyPKu0PzCav5KHOrmfIxaXogOPVumAvzH4Lufkvov4rR%2BS1aPuD5dktMYHerwCzRqzzrjN1nCD1tNE%2FeRF8o2JVNsYJCBnazo9l%2BSDgFwMvJ1mIy6wokFYzSECz41w5p8aX15fAeWdr9mRMll2Mr57bISXBJF4X3WSrAfxodNgwbflK93EpVe2w5p7GoWWAw7smrxAY6pgHRmYR9lP2fK1lf8HnQ9Y%2B8xuNoxIlp6AX0iOHaXrv0dZHs4DKAK4y1Ktt%2BejWSy29effMCs7iJ1EL%2BWJTToxJsUiEeIIzkhjSBHiYnT6HW%2BXiEr48LX7lpvtvHwdpRvDhJR5%2Ble94bNP7JkToX6nVvqoepN2JFscidF8YDrdo%2Ff%2FR8iluNMVMa14EA47wdDpPPrtIbwHG7rmyJmv46l68ue6VDqUxZ&X-Amz-Signature=869352960feda5436f12aad0cedef3f4fcc27feb642f2842f789be69edaa38d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663776RIZN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFwBOvlrk3JWkYuEjOk5q%2BIK0vwaOWSli3lxNNCbj6tAiBhRn5Y4ZhmlneLuMTgzhqB5NuRCxUZ81YlPUDkNIKE%2BCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEPylCcHJY0edMxuZKtwD3yjKmErIqztr80r17zLwDaHj7mk8wVVTZf%2FiEk9Ws5VbeXGOyL3cgP65J2fRgmaJQ75Kl2uVzLx3DXvvHvYlHdRR31MTsH5J%2Fuj3K80npg7FrgyZf7uNf5MEW9REqLzs%2BuD3bwzO79%2FG76s32%2BOx0XUmYVTpi87Y%2BvP%2FHf6VgfvSsnO%2BV34nkObL%2BLHeKMfpZ6EWe3zBE6RuFMMM5zIM%2F9VGN3pocOM06wrZdd1GwMwRdX5rP8ph5x5e0nbKpJPaEx3XIcBSM9UggjJnhC2%2Bvp%2BLwqAlhgm%2FIAc%2BPUE7pgeNRhEi%2FU9SkJunRMls31LHu33xxG%2FwoHa%2BecaZu4HrOBN1lU%2FrOkkg7ZahlFWWmjTIERQXorti0MReK5wKZ9%2BneFrW7TAkmpyQQ9q69%2B%2FjlfZOhhIXki5jnaKizl28JOx5RAOOroizvc2b8nBWEyPKu0PzCav5KHOrmfIxaXogOPVumAvzH4Lufkvov4rR%2BS1aPuD5dktMYHerwCzRqzzrjN1nCD1tNE%2FeRF8o2JVNsYJCBnazo9l%2BSDgFwMvJ1mIy6wokFYzSECz41w5p8aX15fAeWdr9mRMll2Mr57bISXBJF4X3WSrAfxodNgwbflK93EpVe2w5p7GoWWAw7smrxAY6pgHRmYR9lP2fK1lf8HnQ9Y%2B8xuNoxIlp6AX0iOHaXrv0dZHs4DKAK4y1Ktt%2BejWSy29effMCs7iJ1EL%2BWJTToxJsUiEeIIzkhjSBHiYnT6HW%2BXiEr48LX7lpvtvHwdpRvDhJR5%2Ble94bNP7JkToX6nVvqoepN2JFscidF8YDrdo%2Ff%2FR8iluNMVMa14EA47wdDpPPrtIbwHG7rmyJmv46l68ue6VDqUxZ&X-Amz-Signature=8d2d57fd1193ecb16f27daf2d4f62a3f6276f3bb0fc4d1d221e961029deaa513&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663776RIZN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFwBOvlrk3JWkYuEjOk5q%2BIK0vwaOWSli3lxNNCbj6tAiBhRn5Y4ZhmlneLuMTgzhqB5NuRCxUZ81YlPUDkNIKE%2BCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEPylCcHJY0edMxuZKtwD3yjKmErIqztr80r17zLwDaHj7mk8wVVTZf%2FiEk9Ws5VbeXGOyL3cgP65J2fRgmaJQ75Kl2uVzLx3DXvvHvYlHdRR31MTsH5J%2Fuj3K80npg7FrgyZf7uNf5MEW9REqLzs%2BuD3bwzO79%2FG76s32%2BOx0XUmYVTpi87Y%2BvP%2FHf6VgfvSsnO%2BV34nkObL%2BLHeKMfpZ6EWe3zBE6RuFMMM5zIM%2F9VGN3pocOM06wrZdd1GwMwRdX5rP8ph5x5e0nbKpJPaEx3XIcBSM9UggjJnhC2%2Bvp%2BLwqAlhgm%2FIAc%2BPUE7pgeNRhEi%2FU9SkJunRMls31LHu33xxG%2FwoHa%2BecaZu4HrOBN1lU%2FrOkkg7ZahlFWWmjTIERQXorti0MReK5wKZ9%2BneFrW7TAkmpyQQ9q69%2B%2FjlfZOhhIXki5jnaKizl28JOx5RAOOroizvc2b8nBWEyPKu0PzCav5KHOrmfIxaXogOPVumAvzH4Lufkvov4rR%2BS1aPuD5dktMYHerwCzRqzzrjN1nCD1tNE%2FeRF8o2JVNsYJCBnazo9l%2BSDgFwMvJ1mIy6wokFYzSECz41w5p8aX15fAeWdr9mRMll2Mr57bISXBJF4X3WSrAfxodNgwbflK93EpVe2w5p7GoWWAw7smrxAY6pgHRmYR9lP2fK1lf8HnQ9Y%2B8xuNoxIlp6AX0iOHaXrv0dZHs4DKAK4y1Ktt%2BejWSy29effMCs7iJ1EL%2BWJTToxJsUiEeIIzkhjSBHiYnT6HW%2BXiEr48LX7lpvtvHwdpRvDhJR5%2Ble94bNP7JkToX6nVvqoepN2JFscidF8YDrdo%2Ff%2FR8iluNMVMa14EA47wdDpPPrtIbwHG7rmyJmv46l68ue6VDqUxZ&X-Amz-Signature=3f7aa2146ab5e281d44c7f5445dafd4333960017d42ac5606f051833f7fbe694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663776RIZN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFwBOvlrk3JWkYuEjOk5q%2BIK0vwaOWSli3lxNNCbj6tAiBhRn5Y4ZhmlneLuMTgzhqB5NuRCxUZ81YlPUDkNIKE%2BCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEPylCcHJY0edMxuZKtwD3yjKmErIqztr80r17zLwDaHj7mk8wVVTZf%2FiEk9Ws5VbeXGOyL3cgP65J2fRgmaJQ75Kl2uVzLx3DXvvHvYlHdRR31MTsH5J%2Fuj3K80npg7FrgyZf7uNf5MEW9REqLzs%2BuD3bwzO79%2FG76s32%2BOx0XUmYVTpi87Y%2BvP%2FHf6VgfvSsnO%2BV34nkObL%2BLHeKMfpZ6EWe3zBE6RuFMMM5zIM%2F9VGN3pocOM06wrZdd1GwMwRdX5rP8ph5x5e0nbKpJPaEx3XIcBSM9UggjJnhC2%2Bvp%2BLwqAlhgm%2FIAc%2BPUE7pgeNRhEi%2FU9SkJunRMls31LHu33xxG%2FwoHa%2BecaZu4HrOBN1lU%2FrOkkg7ZahlFWWmjTIERQXorti0MReK5wKZ9%2BneFrW7TAkmpyQQ9q69%2B%2FjlfZOhhIXki5jnaKizl28JOx5RAOOroizvc2b8nBWEyPKu0PzCav5KHOrmfIxaXogOPVumAvzH4Lufkvov4rR%2BS1aPuD5dktMYHerwCzRqzzrjN1nCD1tNE%2FeRF8o2JVNsYJCBnazo9l%2BSDgFwMvJ1mIy6wokFYzSECz41w5p8aX15fAeWdr9mRMll2Mr57bISXBJF4X3WSrAfxodNgwbflK93EpVe2w5p7GoWWAw7smrxAY6pgHRmYR9lP2fK1lf8HnQ9Y%2B8xuNoxIlp6AX0iOHaXrv0dZHs4DKAK4y1Ktt%2BejWSy29effMCs7iJ1EL%2BWJTToxJsUiEeIIzkhjSBHiYnT6HW%2BXiEr48LX7lpvtvHwdpRvDhJR5%2Ble94bNP7JkToX6nVvqoepN2JFscidF8YDrdo%2Ff%2FR8iluNMVMa14EA47wdDpPPrtIbwHG7rmyJmv46l68ue6VDqUxZ&X-Amz-Signature=7c608e877c1072eecbe578ee5e2f0d266dfbe520f166b38ab56020f062a542da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663776RIZN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFwBOvlrk3JWkYuEjOk5q%2BIK0vwaOWSli3lxNNCbj6tAiBhRn5Y4ZhmlneLuMTgzhqB5NuRCxUZ81YlPUDkNIKE%2BCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEPylCcHJY0edMxuZKtwD3yjKmErIqztr80r17zLwDaHj7mk8wVVTZf%2FiEk9Ws5VbeXGOyL3cgP65J2fRgmaJQ75Kl2uVzLx3DXvvHvYlHdRR31MTsH5J%2Fuj3K80npg7FrgyZf7uNf5MEW9REqLzs%2BuD3bwzO79%2FG76s32%2BOx0XUmYVTpi87Y%2BvP%2FHf6VgfvSsnO%2BV34nkObL%2BLHeKMfpZ6EWe3zBE6RuFMMM5zIM%2F9VGN3pocOM06wrZdd1GwMwRdX5rP8ph5x5e0nbKpJPaEx3XIcBSM9UggjJnhC2%2Bvp%2BLwqAlhgm%2FIAc%2BPUE7pgeNRhEi%2FU9SkJunRMls31LHu33xxG%2FwoHa%2BecaZu4HrOBN1lU%2FrOkkg7ZahlFWWmjTIERQXorti0MReK5wKZ9%2BneFrW7TAkmpyQQ9q69%2B%2FjlfZOhhIXki5jnaKizl28JOx5RAOOroizvc2b8nBWEyPKu0PzCav5KHOrmfIxaXogOPVumAvzH4Lufkvov4rR%2BS1aPuD5dktMYHerwCzRqzzrjN1nCD1tNE%2FeRF8o2JVNsYJCBnazo9l%2BSDgFwMvJ1mIy6wokFYzSECz41w5p8aX15fAeWdr9mRMll2Mr57bISXBJF4X3WSrAfxodNgwbflK93EpVe2w5p7GoWWAw7smrxAY6pgHRmYR9lP2fK1lf8HnQ9Y%2B8xuNoxIlp6AX0iOHaXrv0dZHs4DKAK4y1Ktt%2BejWSy29effMCs7iJ1EL%2BWJTToxJsUiEeIIzkhjSBHiYnT6HW%2BXiEr48LX7lpvtvHwdpRvDhJR5%2Ble94bNP7JkToX6nVvqoepN2JFscidF8YDrdo%2Ff%2FR8iluNMVMa14EA47wdDpPPrtIbwHG7rmyJmv46l68ue6VDqUxZ&X-Amz-Signature=6d84d5ef45c8e8036437e9d4a50912e73916d6be266070b34199cd02cf55b7a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663776RIZN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFwBOvlrk3JWkYuEjOk5q%2BIK0vwaOWSli3lxNNCbj6tAiBhRn5Y4ZhmlneLuMTgzhqB5NuRCxUZ81YlPUDkNIKE%2BCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEPylCcHJY0edMxuZKtwD3yjKmErIqztr80r17zLwDaHj7mk8wVVTZf%2FiEk9Ws5VbeXGOyL3cgP65J2fRgmaJQ75Kl2uVzLx3DXvvHvYlHdRR31MTsH5J%2Fuj3K80npg7FrgyZf7uNf5MEW9REqLzs%2BuD3bwzO79%2FG76s32%2BOx0XUmYVTpi87Y%2BvP%2FHf6VgfvSsnO%2BV34nkObL%2BLHeKMfpZ6EWe3zBE6RuFMMM5zIM%2F9VGN3pocOM06wrZdd1GwMwRdX5rP8ph5x5e0nbKpJPaEx3XIcBSM9UggjJnhC2%2Bvp%2BLwqAlhgm%2FIAc%2BPUE7pgeNRhEi%2FU9SkJunRMls31LHu33xxG%2FwoHa%2BecaZu4HrOBN1lU%2FrOkkg7ZahlFWWmjTIERQXorti0MReK5wKZ9%2BneFrW7TAkmpyQQ9q69%2B%2FjlfZOhhIXki5jnaKizl28JOx5RAOOroizvc2b8nBWEyPKu0PzCav5KHOrmfIxaXogOPVumAvzH4Lufkvov4rR%2BS1aPuD5dktMYHerwCzRqzzrjN1nCD1tNE%2FeRF8o2JVNsYJCBnazo9l%2BSDgFwMvJ1mIy6wokFYzSECz41w5p8aX15fAeWdr9mRMll2Mr57bISXBJF4X3WSrAfxodNgwbflK93EpVe2w5p7GoWWAw7smrxAY6pgHRmYR9lP2fK1lf8HnQ9Y%2B8xuNoxIlp6AX0iOHaXrv0dZHs4DKAK4y1Ktt%2BejWSy29effMCs7iJ1EL%2BWJTToxJsUiEeIIzkhjSBHiYnT6HW%2BXiEr48LX7lpvtvHwdpRvDhJR5%2Ble94bNP7JkToX6nVvqoepN2JFscidF8YDrdo%2Ff%2FR8iluNMVMa14EA47wdDpPPrtIbwHG7rmyJmv46l68ue6VDqUxZ&X-Amz-Signature=2aec1e8c5f305ea943a3c2ab0c4bc996521c60addc60f62fcc0a9ebd0c5cdc6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663776RIZN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFwBOvlrk3JWkYuEjOk5q%2BIK0vwaOWSli3lxNNCbj6tAiBhRn5Y4ZhmlneLuMTgzhqB5NuRCxUZ81YlPUDkNIKE%2BCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEPylCcHJY0edMxuZKtwD3yjKmErIqztr80r17zLwDaHj7mk8wVVTZf%2FiEk9Ws5VbeXGOyL3cgP65J2fRgmaJQ75Kl2uVzLx3DXvvHvYlHdRR31MTsH5J%2Fuj3K80npg7FrgyZf7uNf5MEW9REqLzs%2BuD3bwzO79%2FG76s32%2BOx0XUmYVTpi87Y%2BvP%2FHf6VgfvSsnO%2BV34nkObL%2BLHeKMfpZ6EWe3zBE6RuFMMM5zIM%2F9VGN3pocOM06wrZdd1GwMwRdX5rP8ph5x5e0nbKpJPaEx3XIcBSM9UggjJnhC2%2Bvp%2BLwqAlhgm%2FIAc%2BPUE7pgeNRhEi%2FU9SkJunRMls31LHu33xxG%2FwoHa%2BecaZu4HrOBN1lU%2FrOkkg7ZahlFWWmjTIERQXorti0MReK5wKZ9%2BneFrW7TAkmpyQQ9q69%2B%2FjlfZOhhIXki5jnaKizl28JOx5RAOOroizvc2b8nBWEyPKu0PzCav5KHOrmfIxaXogOPVumAvzH4Lufkvov4rR%2BS1aPuD5dktMYHerwCzRqzzrjN1nCD1tNE%2FeRF8o2JVNsYJCBnazo9l%2BSDgFwMvJ1mIy6wokFYzSECz41w5p8aX15fAeWdr9mRMll2Mr57bISXBJF4X3WSrAfxodNgwbflK93EpVe2w5p7GoWWAw7smrxAY6pgHRmYR9lP2fK1lf8HnQ9Y%2B8xuNoxIlp6AX0iOHaXrv0dZHs4DKAK4y1Ktt%2BejWSy29effMCs7iJ1EL%2BWJTToxJsUiEeIIzkhjSBHiYnT6HW%2BXiEr48LX7lpvtvHwdpRvDhJR5%2Ble94bNP7JkToX6nVvqoepN2JFscidF8YDrdo%2Ff%2FR8iluNMVMa14EA47wdDpPPrtIbwHG7rmyJmv46l68ue6VDqUxZ&X-Amz-Signature=e714bd2215b0f79fb041b29bf932364e4212af7f87a1e20b9e0190b402918ad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663776RIZN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFwBOvlrk3JWkYuEjOk5q%2BIK0vwaOWSli3lxNNCbj6tAiBhRn5Y4ZhmlneLuMTgzhqB5NuRCxUZ81YlPUDkNIKE%2BCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEPylCcHJY0edMxuZKtwD3yjKmErIqztr80r17zLwDaHj7mk8wVVTZf%2FiEk9Ws5VbeXGOyL3cgP65J2fRgmaJQ75Kl2uVzLx3DXvvHvYlHdRR31MTsH5J%2Fuj3K80npg7FrgyZf7uNf5MEW9REqLzs%2BuD3bwzO79%2FG76s32%2BOx0XUmYVTpi87Y%2BvP%2FHf6VgfvSsnO%2BV34nkObL%2BLHeKMfpZ6EWe3zBE6RuFMMM5zIM%2F9VGN3pocOM06wrZdd1GwMwRdX5rP8ph5x5e0nbKpJPaEx3XIcBSM9UggjJnhC2%2Bvp%2BLwqAlhgm%2FIAc%2BPUE7pgeNRhEi%2FU9SkJunRMls31LHu33xxG%2FwoHa%2BecaZu4HrOBN1lU%2FrOkkg7ZahlFWWmjTIERQXorti0MReK5wKZ9%2BneFrW7TAkmpyQQ9q69%2B%2FjlfZOhhIXki5jnaKizl28JOx5RAOOroizvc2b8nBWEyPKu0PzCav5KHOrmfIxaXogOPVumAvzH4Lufkvov4rR%2BS1aPuD5dktMYHerwCzRqzzrjN1nCD1tNE%2FeRF8o2JVNsYJCBnazo9l%2BSDgFwMvJ1mIy6wokFYzSECz41w5p8aX15fAeWdr9mRMll2Mr57bISXBJF4X3WSrAfxodNgwbflK93EpVe2w5p7GoWWAw7smrxAY6pgHRmYR9lP2fK1lf8HnQ9Y%2B8xuNoxIlp6AX0iOHaXrv0dZHs4DKAK4y1Ktt%2BejWSy29effMCs7iJ1EL%2BWJTToxJsUiEeIIzkhjSBHiYnT6HW%2BXiEr48LX7lpvtvHwdpRvDhJR5%2Ble94bNP7JkToX6nVvqoepN2JFscidF8YDrdo%2Ff%2FR8iluNMVMa14EA47wdDpPPrtIbwHG7rmyJmv46l68ue6VDqUxZ&X-Amz-Signature=4307ac827d229748188110955e97eaad21960bb86a455cfa2478e86b2e5ba0ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663776RIZN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFwBOvlrk3JWkYuEjOk5q%2BIK0vwaOWSli3lxNNCbj6tAiBhRn5Y4ZhmlneLuMTgzhqB5NuRCxUZ81YlPUDkNIKE%2BCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEPylCcHJY0edMxuZKtwD3yjKmErIqztr80r17zLwDaHj7mk8wVVTZf%2FiEk9Ws5VbeXGOyL3cgP65J2fRgmaJQ75Kl2uVzLx3DXvvHvYlHdRR31MTsH5J%2Fuj3K80npg7FrgyZf7uNf5MEW9REqLzs%2BuD3bwzO79%2FG76s32%2BOx0XUmYVTpi87Y%2BvP%2FHf6VgfvSsnO%2BV34nkObL%2BLHeKMfpZ6EWe3zBE6RuFMMM5zIM%2F9VGN3pocOM06wrZdd1GwMwRdX5rP8ph5x5e0nbKpJPaEx3XIcBSM9UggjJnhC2%2Bvp%2BLwqAlhgm%2FIAc%2BPUE7pgeNRhEi%2FU9SkJunRMls31LHu33xxG%2FwoHa%2BecaZu4HrOBN1lU%2FrOkkg7ZahlFWWmjTIERQXorti0MReK5wKZ9%2BneFrW7TAkmpyQQ9q69%2B%2FjlfZOhhIXki5jnaKizl28JOx5RAOOroizvc2b8nBWEyPKu0PzCav5KHOrmfIxaXogOPVumAvzH4Lufkvov4rR%2BS1aPuD5dktMYHerwCzRqzzrjN1nCD1tNE%2FeRF8o2JVNsYJCBnazo9l%2BSDgFwMvJ1mIy6wokFYzSECz41w5p8aX15fAeWdr9mRMll2Mr57bISXBJF4X3WSrAfxodNgwbflK93EpVe2w5p7GoWWAw7smrxAY6pgHRmYR9lP2fK1lf8HnQ9Y%2B8xuNoxIlp6AX0iOHaXrv0dZHs4DKAK4y1Ktt%2BejWSy29effMCs7iJ1EL%2BWJTToxJsUiEeIIzkhjSBHiYnT6HW%2BXiEr48LX7lpvtvHwdpRvDhJR5%2Ble94bNP7JkToX6nVvqoepN2JFscidF8YDrdo%2Ff%2FR8iluNMVMa14EA47wdDpPPrtIbwHG7rmyJmv46l68ue6VDqUxZ&X-Amz-Signature=bf45742c9361d3e10553ba2593c742de01a9b6417b37013586b82c27e80914d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663776RIZN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFwBOvlrk3JWkYuEjOk5q%2BIK0vwaOWSli3lxNNCbj6tAiBhRn5Y4ZhmlneLuMTgzhqB5NuRCxUZ81YlPUDkNIKE%2BCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEPylCcHJY0edMxuZKtwD3yjKmErIqztr80r17zLwDaHj7mk8wVVTZf%2FiEk9Ws5VbeXGOyL3cgP65J2fRgmaJQ75Kl2uVzLx3DXvvHvYlHdRR31MTsH5J%2Fuj3K80npg7FrgyZf7uNf5MEW9REqLzs%2BuD3bwzO79%2FG76s32%2BOx0XUmYVTpi87Y%2BvP%2FHf6VgfvSsnO%2BV34nkObL%2BLHeKMfpZ6EWe3zBE6RuFMMM5zIM%2F9VGN3pocOM06wrZdd1GwMwRdX5rP8ph5x5e0nbKpJPaEx3XIcBSM9UggjJnhC2%2Bvp%2BLwqAlhgm%2FIAc%2BPUE7pgeNRhEi%2FU9SkJunRMls31LHu33xxG%2FwoHa%2BecaZu4HrOBN1lU%2FrOkkg7ZahlFWWmjTIERQXorti0MReK5wKZ9%2BneFrW7TAkmpyQQ9q69%2B%2FjlfZOhhIXki5jnaKizl28JOx5RAOOroizvc2b8nBWEyPKu0PzCav5KHOrmfIxaXogOPVumAvzH4Lufkvov4rR%2BS1aPuD5dktMYHerwCzRqzzrjN1nCD1tNE%2FeRF8o2JVNsYJCBnazo9l%2BSDgFwMvJ1mIy6wokFYzSECz41w5p8aX15fAeWdr9mRMll2Mr57bISXBJF4X3WSrAfxodNgwbflK93EpVe2w5p7GoWWAw7smrxAY6pgHRmYR9lP2fK1lf8HnQ9Y%2B8xuNoxIlp6AX0iOHaXrv0dZHs4DKAK4y1Ktt%2BejWSy29effMCs7iJ1EL%2BWJTToxJsUiEeIIzkhjSBHiYnT6HW%2BXiEr48LX7lpvtvHwdpRvDhJR5%2Ble94bNP7JkToX6nVvqoepN2JFscidF8YDrdo%2Ff%2FR8iluNMVMa14EA47wdDpPPrtIbwHG7rmyJmv46l68ue6VDqUxZ&X-Amz-Signature=f420d1a467b82d0ba947e3e86ab609652bad72590fe9db9b338bae9cf85cfa99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663776RIZN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFwBOvlrk3JWkYuEjOk5q%2BIK0vwaOWSli3lxNNCbj6tAiBhRn5Y4ZhmlneLuMTgzhqB5NuRCxUZ81YlPUDkNIKE%2BCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEPylCcHJY0edMxuZKtwD3yjKmErIqztr80r17zLwDaHj7mk8wVVTZf%2FiEk9Ws5VbeXGOyL3cgP65J2fRgmaJQ75Kl2uVzLx3DXvvHvYlHdRR31MTsH5J%2Fuj3K80npg7FrgyZf7uNf5MEW9REqLzs%2BuD3bwzO79%2FG76s32%2BOx0XUmYVTpi87Y%2BvP%2FHf6VgfvSsnO%2BV34nkObL%2BLHeKMfpZ6EWe3zBE6RuFMMM5zIM%2F9VGN3pocOM06wrZdd1GwMwRdX5rP8ph5x5e0nbKpJPaEx3XIcBSM9UggjJnhC2%2Bvp%2BLwqAlhgm%2FIAc%2BPUE7pgeNRhEi%2FU9SkJunRMls31LHu33xxG%2FwoHa%2BecaZu4HrOBN1lU%2FrOkkg7ZahlFWWmjTIERQXorti0MReK5wKZ9%2BneFrW7TAkmpyQQ9q69%2B%2FjlfZOhhIXki5jnaKizl28JOx5RAOOroizvc2b8nBWEyPKu0PzCav5KHOrmfIxaXogOPVumAvzH4Lufkvov4rR%2BS1aPuD5dktMYHerwCzRqzzrjN1nCD1tNE%2FeRF8o2JVNsYJCBnazo9l%2BSDgFwMvJ1mIy6wokFYzSECz41w5p8aX15fAeWdr9mRMll2Mr57bISXBJF4X3WSrAfxodNgwbflK93EpVe2w5p7GoWWAw7smrxAY6pgHRmYR9lP2fK1lf8HnQ9Y%2B8xuNoxIlp6AX0iOHaXrv0dZHs4DKAK4y1Ktt%2BejWSy29effMCs7iJ1EL%2BWJTToxJsUiEeIIzkhjSBHiYnT6HW%2BXiEr48LX7lpvtvHwdpRvDhJR5%2Ble94bNP7JkToX6nVvqoepN2JFscidF8YDrdo%2Ff%2FR8iluNMVMa14EA47wdDpPPrtIbwHG7rmyJmv46l68ue6VDqUxZ&X-Amz-Signature=924711a865712ae701e26989fc68f4bd2e2bd6dd22c70926839219e52da4c175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6AYEJAN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWzkBpNyWGEMudRNbk3p6qOdNmH91pFtLzVn6hXcPBBAiEA1RCvfVz0ZNP3iz7hSGgf4AyMlvo1UAlM9otanFi8xZ0qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE46Xu14ojNpNVqzoyrcA%2Bi2%2BtGiSTP9xb42zPNZPfz4XPrD5%2B2OKCcwxGQIIn4M8mMi0q8FIWSP38quKO29n5uMflSmp2DWzPFeB%2BKSYRCE%2BUKAKqwK6IQpIH%2FWgUA6vHIAm50VmhqAz%2F3f%2FPUY1LA5L0g9G6uK%2B93b1mBUMQWppFeN8z2R1DwMpAWdxcCAoO5ZXi7avL64cBYnw3xU4Vn%2FGqCSHbrfXszA%2BcQWFF5mr4fe3fBqJYZ3aDQ8tjdF3Tl5mFIiZlXzD8Ep02ev7jRIgVH5beLL1jPTdp3G49lbT6i2zy4BPod3xWQYz00LdtRWewX9wpaB9D9zIDlP2FQaL2xY0f5PHrZqSwolqCn%2FBxbqn6hD9JwE00zMkZdv8QsV%2BW%2FwVbMjcRKirfOXjja3cH06KB5boK78F6o5sKLRfspFCdAGS8qcGAnxVc%2F57NvT8eHZmHzJT9ULGZq923TbfBzALnEnayt4VQFLCnuSp0JSG2CsuhFhrFKMVXLim5o5EESTkflsImLnGbAGPAxJKtjgV28%2Fb31epRIikgdJewUQJ%2FKL%2BsyG00SG1UAIyhQDQ%2F4AUh9dJJKaFKlUH0KAlHtFxbNXBU4ObXJljcSXGPb%2FsnQulqMc1FlZlY7lvbI4zHtAjak09sXrMNDKq8QGOqUBqyDL5PwT3h1oIlHJU9Cdl8D%2Fi19T7uUYZ5%2B8USWOCV%2FlGYhiuyGVshch7bQFjLFwWslA2jH6We8ixGz7idCpJ1VhVNipDEewUeXMuvahX8zs2be8ozh1dYwNTlJsokyhylpqHJC5bGJ6Vy9TKw%2BnArqzmtVZYbju0lHnKohCyXqe7gL5AzZgNIzye2aUmC%2FjiyHXPe19ZfNhTQ%2FTQ0PNB0D%2FnJdu&X-Amz-Signature=25d708f0d4571b9aa1bd49fcac609b432bf1e1cae62f8024d12885e6c8599957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6AYEJAN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWzkBpNyWGEMudRNbk3p6qOdNmH91pFtLzVn6hXcPBBAiEA1RCvfVz0ZNP3iz7hSGgf4AyMlvo1UAlM9otanFi8xZ0qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE46Xu14ojNpNVqzoyrcA%2Bi2%2BtGiSTP9xb42zPNZPfz4XPrD5%2B2OKCcwxGQIIn4M8mMi0q8FIWSP38quKO29n5uMflSmp2DWzPFeB%2BKSYRCE%2BUKAKqwK6IQpIH%2FWgUA6vHIAm50VmhqAz%2F3f%2FPUY1LA5L0g9G6uK%2B93b1mBUMQWppFeN8z2R1DwMpAWdxcCAoO5ZXi7avL64cBYnw3xU4Vn%2FGqCSHbrfXszA%2BcQWFF5mr4fe3fBqJYZ3aDQ8tjdF3Tl5mFIiZlXzD8Ep02ev7jRIgVH5beLL1jPTdp3G49lbT6i2zy4BPod3xWQYz00LdtRWewX9wpaB9D9zIDlP2FQaL2xY0f5PHrZqSwolqCn%2FBxbqn6hD9JwE00zMkZdv8QsV%2BW%2FwVbMjcRKirfOXjja3cH06KB5boK78F6o5sKLRfspFCdAGS8qcGAnxVc%2F57NvT8eHZmHzJT9ULGZq923TbfBzALnEnayt4VQFLCnuSp0JSG2CsuhFhrFKMVXLim5o5EESTkflsImLnGbAGPAxJKtjgV28%2Fb31epRIikgdJewUQJ%2FKL%2BsyG00SG1UAIyhQDQ%2F4AUh9dJJKaFKlUH0KAlHtFxbNXBU4ObXJljcSXGPb%2FsnQulqMc1FlZlY7lvbI4zHtAjak09sXrMNDKq8QGOqUBqyDL5PwT3h1oIlHJU9Cdl8D%2Fi19T7uUYZ5%2B8USWOCV%2FlGYhiuyGVshch7bQFjLFwWslA2jH6We8ixGz7idCpJ1VhVNipDEewUeXMuvahX8zs2be8ozh1dYwNTlJsokyhylpqHJC5bGJ6Vy9TKw%2BnArqzmtVZYbju0lHnKohCyXqe7gL5AzZgNIzye2aUmC%2FjiyHXPe19ZfNhTQ%2FTQ0PNB0D%2FnJdu&X-Amz-Signature=c9393be8c0865e889d2d50157636266e64161cae65ae5d5a2a12cc76f8ebc006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6AYEJAN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWzkBpNyWGEMudRNbk3p6qOdNmH91pFtLzVn6hXcPBBAiEA1RCvfVz0ZNP3iz7hSGgf4AyMlvo1UAlM9otanFi8xZ0qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE46Xu14ojNpNVqzoyrcA%2Bi2%2BtGiSTP9xb42zPNZPfz4XPrD5%2B2OKCcwxGQIIn4M8mMi0q8FIWSP38quKO29n5uMflSmp2DWzPFeB%2BKSYRCE%2BUKAKqwK6IQpIH%2FWgUA6vHIAm50VmhqAz%2F3f%2FPUY1LA5L0g9G6uK%2B93b1mBUMQWppFeN8z2R1DwMpAWdxcCAoO5ZXi7avL64cBYnw3xU4Vn%2FGqCSHbrfXszA%2BcQWFF5mr4fe3fBqJYZ3aDQ8tjdF3Tl5mFIiZlXzD8Ep02ev7jRIgVH5beLL1jPTdp3G49lbT6i2zy4BPod3xWQYz00LdtRWewX9wpaB9D9zIDlP2FQaL2xY0f5PHrZqSwolqCn%2FBxbqn6hD9JwE00zMkZdv8QsV%2BW%2FwVbMjcRKirfOXjja3cH06KB5boK78F6o5sKLRfspFCdAGS8qcGAnxVc%2F57NvT8eHZmHzJT9ULGZq923TbfBzALnEnayt4VQFLCnuSp0JSG2CsuhFhrFKMVXLim5o5EESTkflsImLnGbAGPAxJKtjgV28%2Fb31epRIikgdJewUQJ%2FKL%2BsyG00SG1UAIyhQDQ%2F4AUh9dJJKaFKlUH0KAlHtFxbNXBU4ObXJljcSXGPb%2FsnQulqMc1FlZlY7lvbI4zHtAjak09sXrMNDKq8QGOqUBqyDL5PwT3h1oIlHJU9Cdl8D%2Fi19T7uUYZ5%2B8USWOCV%2FlGYhiuyGVshch7bQFjLFwWslA2jH6We8ixGz7idCpJ1VhVNipDEewUeXMuvahX8zs2be8ozh1dYwNTlJsokyhylpqHJC5bGJ6Vy9TKw%2BnArqzmtVZYbju0lHnKohCyXqe7gL5AzZgNIzye2aUmC%2FjiyHXPe19ZfNhTQ%2FTQ0PNB0D%2FnJdu&X-Amz-Signature=724a0fca22105f59da88095b4fde6c7151ef00ea5b3beea4e576eebd1d7082f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6AYEJAN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWzkBpNyWGEMudRNbk3p6qOdNmH91pFtLzVn6hXcPBBAiEA1RCvfVz0ZNP3iz7hSGgf4AyMlvo1UAlM9otanFi8xZ0qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE46Xu14ojNpNVqzoyrcA%2Bi2%2BtGiSTP9xb42zPNZPfz4XPrD5%2B2OKCcwxGQIIn4M8mMi0q8FIWSP38quKO29n5uMflSmp2DWzPFeB%2BKSYRCE%2BUKAKqwK6IQpIH%2FWgUA6vHIAm50VmhqAz%2F3f%2FPUY1LA5L0g9G6uK%2B93b1mBUMQWppFeN8z2R1DwMpAWdxcCAoO5ZXi7avL64cBYnw3xU4Vn%2FGqCSHbrfXszA%2BcQWFF5mr4fe3fBqJYZ3aDQ8tjdF3Tl5mFIiZlXzD8Ep02ev7jRIgVH5beLL1jPTdp3G49lbT6i2zy4BPod3xWQYz00LdtRWewX9wpaB9D9zIDlP2FQaL2xY0f5PHrZqSwolqCn%2FBxbqn6hD9JwE00zMkZdv8QsV%2BW%2FwVbMjcRKirfOXjja3cH06KB5boK78F6o5sKLRfspFCdAGS8qcGAnxVc%2F57NvT8eHZmHzJT9ULGZq923TbfBzALnEnayt4VQFLCnuSp0JSG2CsuhFhrFKMVXLim5o5EESTkflsImLnGbAGPAxJKtjgV28%2Fb31epRIikgdJewUQJ%2FKL%2BsyG00SG1UAIyhQDQ%2F4AUh9dJJKaFKlUH0KAlHtFxbNXBU4ObXJljcSXGPb%2FsnQulqMc1FlZlY7lvbI4zHtAjak09sXrMNDKq8QGOqUBqyDL5PwT3h1oIlHJU9Cdl8D%2Fi19T7uUYZ5%2B8USWOCV%2FlGYhiuyGVshch7bQFjLFwWslA2jH6We8ixGz7idCpJ1VhVNipDEewUeXMuvahX8zs2be8ozh1dYwNTlJsokyhylpqHJC5bGJ6Vy9TKw%2BnArqzmtVZYbju0lHnKohCyXqe7gL5AzZgNIzye2aUmC%2FjiyHXPe19ZfNhTQ%2FTQ0PNB0D%2FnJdu&X-Amz-Signature=e4231d3a71e94a01970ef1791fc5c9e38df3b237468ca4da75c1fd7be30e7203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6AYEJAN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWzkBpNyWGEMudRNbk3p6qOdNmH91pFtLzVn6hXcPBBAiEA1RCvfVz0ZNP3iz7hSGgf4AyMlvo1UAlM9otanFi8xZ0qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE46Xu14ojNpNVqzoyrcA%2Bi2%2BtGiSTP9xb42zPNZPfz4XPrD5%2B2OKCcwxGQIIn4M8mMi0q8FIWSP38quKO29n5uMflSmp2DWzPFeB%2BKSYRCE%2BUKAKqwK6IQpIH%2FWgUA6vHIAm50VmhqAz%2F3f%2FPUY1LA5L0g9G6uK%2B93b1mBUMQWppFeN8z2R1DwMpAWdxcCAoO5ZXi7avL64cBYnw3xU4Vn%2FGqCSHbrfXszA%2BcQWFF5mr4fe3fBqJYZ3aDQ8tjdF3Tl5mFIiZlXzD8Ep02ev7jRIgVH5beLL1jPTdp3G49lbT6i2zy4BPod3xWQYz00LdtRWewX9wpaB9D9zIDlP2FQaL2xY0f5PHrZqSwolqCn%2FBxbqn6hD9JwE00zMkZdv8QsV%2BW%2FwVbMjcRKirfOXjja3cH06KB5boK78F6o5sKLRfspFCdAGS8qcGAnxVc%2F57NvT8eHZmHzJT9ULGZq923TbfBzALnEnayt4VQFLCnuSp0JSG2CsuhFhrFKMVXLim5o5EESTkflsImLnGbAGPAxJKtjgV28%2Fb31epRIikgdJewUQJ%2FKL%2BsyG00SG1UAIyhQDQ%2F4AUh9dJJKaFKlUH0KAlHtFxbNXBU4ObXJljcSXGPb%2FsnQulqMc1FlZlY7lvbI4zHtAjak09sXrMNDKq8QGOqUBqyDL5PwT3h1oIlHJU9Cdl8D%2Fi19T7uUYZ5%2B8USWOCV%2FlGYhiuyGVshch7bQFjLFwWslA2jH6We8ixGz7idCpJ1VhVNipDEewUeXMuvahX8zs2be8ozh1dYwNTlJsokyhylpqHJC5bGJ6Vy9TKw%2BnArqzmtVZYbju0lHnKohCyXqe7gL5AzZgNIzye2aUmC%2FjiyHXPe19ZfNhTQ%2FTQ0PNB0D%2FnJdu&X-Amz-Signature=96eb5d972073aaadd819b07fbada042b28a4259fcca0642ef18931212fcfa131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6AYEJAN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWzkBpNyWGEMudRNbk3p6qOdNmH91pFtLzVn6hXcPBBAiEA1RCvfVz0ZNP3iz7hSGgf4AyMlvo1UAlM9otanFi8xZ0qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE46Xu14ojNpNVqzoyrcA%2Bi2%2BtGiSTP9xb42zPNZPfz4XPrD5%2B2OKCcwxGQIIn4M8mMi0q8FIWSP38quKO29n5uMflSmp2DWzPFeB%2BKSYRCE%2BUKAKqwK6IQpIH%2FWgUA6vHIAm50VmhqAz%2F3f%2FPUY1LA5L0g9G6uK%2B93b1mBUMQWppFeN8z2R1DwMpAWdxcCAoO5ZXi7avL64cBYnw3xU4Vn%2FGqCSHbrfXszA%2BcQWFF5mr4fe3fBqJYZ3aDQ8tjdF3Tl5mFIiZlXzD8Ep02ev7jRIgVH5beLL1jPTdp3G49lbT6i2zy4BPod3xWQYz00LdtRWewX9wpaB9D9zIDlP2FQaL2xY0f5PHrZqSwolqCn%2FBxbqn6hD9JwE00zMkZdv8QsV%2BW%2FwVbMjcRKirfOXjja3cH06KB5boK78F6o5sKLRfspFCdAGS8qcGAnxVc%2F57NvT8eHZmHzJT9ULGZq923TbfBzALnEnayt4VQFLCnuSp0JSG2CsuhFhrFKMVXLim5o5EESTkflsImLnGbAGPAxJKtjgV28%2Fb31epRIikgdJewUQJ%2FKL%2BsyG00SG1UAIyhQDQ%2F4AUh9dJJKaFKlUH0KAlHtFxbNXBU4ObXJljcSXGPb%2FsnQulqMc1FlZlY7lvbI4zHtAjak09sXrMNDKq8QGOqUBqyDL5PwT3h1oIlHJU9Cdl8D%2Fi19T7uUYZ5%2B8USWOCV%2FlGYhiuyGVshch7bQFjLFwWslA2jH6We8ixGz7idCpJ1VhVNipDEewUeXMuvahX8zs2be8ozh1dYwNTlJsokyhylpqHJC5bGJ6Vy9TKw%2BnArqzmtVZYbju0lHnKohCyXqe7gL5AzZgNIzye2aUmC%2FjiyHXPe19ZfNhTQ%2FTQ0PNB0D%2FnJdu&X-Amz-Signature=8aef49be828659b9ee0c1c4489a365a4e61e9e1e63ddbb9a27b30308b9af63b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6AYEJAN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWzkBpNyWGEMudRNbk3p6qOdNmH91pFtLzVn6hXcPBBAiEA1RCvfVz0ZNP3iz7hSGgf4AyMlvo1UAlM9otanFi8xZ0qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE46Xu14ojNpNVqzoyrcA%2Bi2%2BtGiSTP9xb42zPNZPfz4XPrD5%2B2OKCcwxGQIIn4M8mMi0q8FIWSP38quKO29n5uMflSmp2DWzPFeB%2BKSYRCE%2BUKAKqwK6IQpIH%2FWgUA6vHIAm50VmhqAz%2F3f%2FPUY1LA5L0g9G6uK%2B93b1mBUMQWppFeN8z2R1DwMpAWdxcCAoO5ZXi7avL64cBYnw3xU4Vn%2FGqCSHbrfXszA%2BcQWFF5mr4fe3fBqJYZ3aDQ8tjdF3Tl5mFIiZlXzD8Ep02ev7jRIgVH5beLL1jPTdp3G49lbT6i2zy4BPod3xWQYz00LdtRWewX9wpaB9D9zIDlP2FQaL2xY0f5PHrZqSwolqCn%2FBxbqn6hD9JwE00zMkZdv8QsV%2BW%2FwVbMjcRKirfOXjja3cH06KB5boK78F6o5sKLRfspFCdAGS8qcGAnxVc%2F57NvT8eHZmHzJT9ULGZq923TbfBzALnEnayt4VQFLCnuSp0JSG2CsuhFhrFKMVXLim5o5EESTkflsImLnGbAGPAxJKtjgV28%2Fb31epRIikgdJewUQJ%2FKL%2BsyG00SG1UAIyhQDQ%2F4AUh9dJJKaFKlUH0KAlHtFxbNXBU4ObXJljcSXGPb%2FsnQulqMc1FlZlY7lvbI4zHtAjak09sXrMNDKq8QGOqUBqyDL5PwT3h1oIlHJU9Cdl8D%2Fi19T7uUYZ5%2B8USWOCV%2FlGYhiuyGVshch7bQFjLFwWslA2jH6We8ixGz7idCpJ1VhVNipDEewUeXMuvahX8zs2be8ozh1dYwNTlJsokyhylpqHJC5bGJ6Vy9TKw%2BnArqzmtVZYbju0lHnKohCyXqe7gL5AzZgNIzye2aUmC%2FjiyHXPe19ZfNhTQ%2FTQ0PNB0D%2FnJdu&X-Amz-Signature=354790b611e0041e015e1f90d0884b445a639607af79c0af7ff2b846dd0246ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
