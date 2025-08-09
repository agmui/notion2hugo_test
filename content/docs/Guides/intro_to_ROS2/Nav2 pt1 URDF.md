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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643CX65ZM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB46quRmVw2iw4cYrhNrnxLTGdKnbFulS7tVHtzcwjuvAiBllBOBXiuwWSZxDhCTiQBmBH24bkgIK8JD7PqhqBkQoCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtMK4u3NTpo%2FoiF0xKtwDdwdliJPlgeL44x13S7ArAflaeVafCcTHJY5WDD6atxFl8Ika%2B0vuKfZ%2FLbnyfSY72fmz9WZRsuT1AjyxjCkBdJnEO94YbeMclDYZO%2BVBcA2M9FZ%2BPVpJjyKf9Oi8MhRBvl62zKuaSXKdyWJRreiI5reUUWt33ZAgFCnhEMzEQ3blTXt3Fj2mUQ%2Fc2vxYgrck8GiYB4PaAYPygB34Xx4T%2F8u50bHUH2WJOHTAyy8jQztJPPk%2BDpy3xOjHm43E8bvGAXy%2BBfUbW8VpNCB0AH5%2FvmAlPnvcmv1E4761FYyNMi3TlGTk6xFYUhFAneRqFu0HX7bStVUHDuOMd00yQxHNsoAhpYklVSDmJEw6py%2F5daDstfmOVosTblmaudaqsLeDQ2JA78hEAL%2FniZxRaVVofYzVuNsfUxYP1rS07qmO%2FmJJYQDNFiAzEzZ9j%2FsO2O2waj%2BDs48tzji11FfNZ9yQ%2BD%2F9UWVjDoW2bDWwueAgNo9N54gt4adqedKNiiRcTbCCIRNIr6bUPS13YhQ8Jd3uNCQhKFYpKOksX03OoklLq4l02HwWfTLgQAfhGikowGn%2FbqPFT04%2BuHNlHm7uJ3yndK14vR34QHaZ%2Beq11hYj9LOYQZSMgvLvn0vBbGEw9YrfxAY6pgEXjlPqiT%2FMVCXqIWnIfphhv4CXCKu0iQ5yM5g0XYpP1tZ2z7rk2CvAwmMGafYN0RWKSZzkYzu57m1eq%2FlrSVfo2gApfDwRpuyYgzEoM1UEa7IVeDLEMGNOQx1uUkFVuR52aGuwXY9H7sdrbwclMc1Mu%2FsHuk8W1H6BLhyuphTMXJYxqYpUo2nZZ%2BJzbygwr2PsrvgA%2FFvoywKxqrCWrGZxGicSGjSv&X-Amz-Signature=624335e34237857c85504de59d22b0ef56d0f3be235d72b879c749507d79ef1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643CX65ZM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB46quRmVw2iw4cYrhNrnxLTGdKnbFulS7tVHtzcwjuvAiBllBOBXiuwWSZxDhCTiQBmBH24bkgIK8JD7PqhqBkQoCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtMK4u3NTpo%2FoiF0xKtwDdwdliJPlgeL44x13S7ArAflaeVafCcTHJY5WDD6atxFl8Ika%2B0vuKfZ%2FLbnyfSY72fmz9WZRsuT1AjyxjCkBdJnEO94YbeMclDYZO%2BVBcA2M9FZ%2BPVpJjyKf9Oi8MhRBvl62zKuaSXKdyWJRreiI5reUUWt33ZAgFCnhEMzEQ3blTXt3Fj2mUQ%2Fc2vxYgrck8GiYB4PaAYPygB34Xx4T%2F8u50bHUH2WJOHTAyy8jQztJPPk%2BDpy3xOjHm43E8bvGAXy%2BBfUbW8VpNCB0AH5%2FvmAlPnvcmv1E4761FYyNMi3TlGTk6xFYUhFAneRqFu0HX7bStVUHDuOMd00yQxHNsoAhpYklVSDmJEw6py%2F5daDstfmOVosTblmaudaqsLeDQ2JA78hEAL%2FniZxRaVVofYzVuNsfUxYP1rS07qmO%2FmJJYQDNFiAzEzZ9j%2FsO2O2waj%2BDs48tzji11FfNZ9yQ%2BD%2F9UWVjDoW2bDWwueAgNo9N54gt4adqedKNiiRcTbCCIRNIr6bUPS13YhQ8Jd3uNCQhKFYpKOksX03OoklLq4l02HwWfTLgQAfhGikowGn%2FbqPFT04%2BuHNlHm7uJ3yndK14vR34QHaZ%2Beq11hYj9LOYQZSMgvLvn0vBbGEw9YrfxAY6pgEXjlPqiT%2FMVCXqIWnIfphhv4CXCKu0iQ5yM5g0XYpP1tZ2z7rk2CvAwmMGafYN0RWKSZzkYzu57m1eq%2FlrSVfo2gApfDwRpuyYgzEoM1UEa7IVeDLEMGNOQx1uUkFVuR52aGuwXY9H7sdrbwclMc1Mu%2FsHuk8W1H6BLhyuphTMXJYxqYpUo2nZZ%2BJzbygwr2PsrvgA%2FFvoywKxqrCWrGZxGicSGjSv&X-Amz-Signature=31f74473c39d0ecdfea1573e4ad43b94f2d73f3d11d6b2bc5dbe32cdf927f1cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643CX65ZM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB46quRmVw2iw4cYrhNrnxLTGdKnbFulS7tVHtzcwjuvAiBllBOBXiuwWSZxDhCTiQBmBH24bkgIK8JD7PqhqBkQoCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtMK4u3NTpo%2FoiF0xKtwDdwdliJPlgeL44x13S7ArAflaeVafCcTHJY5WDD6atxFl8Ika%2B0vuKfZ%2FLbnyfSY72fmz9WZRsuT1AjyxjCkBdJnEO94YbeMclDYZO%2BVBcA2M9FZ%2BPVpJjyKf9Oi8MhRBvl62zKuaSXKdyWJRreiI5reUUWt33ZAgFCnhEMzEQ3blTXt3Fj2mUQ%2Fc2vxYgrck8GiYB4PaAYPygB34Xx4T%2F8u50bHUH2WJOHTAyy8jQztJPPk%2BDpy3xOjHm43E8bvGAXy%2BBfUbW8VpNCB0AH5%2FvmAlPnvcmv1E4761FYyNMi3TlGTk6xFYUhFAneRqFu0HX7bStVUHDuOMd00yQxHNsoAhpYklVSDmJEw6py%2F5daDstfmOVosTblmaudaqsLeDQ2JA78hEAL%2FniZxRaVVofYzVuNsfUxYP1rS07qmO%2FmJJYQDNFiAzEzZ9j%2FsO2O2waj%2BDs48tzji11FfNZ9yQ%2BD%2F9UWVjDoW2bDWwueAgNo9N54gt4adqedKNiiRcTbCCIRNIr6bUPS13YhQ8Jd3uNCQhKFYpKOksX03OoklLq4l02HwWfTLgQAfhGikowGn%2FbqPFT04%2BuHNlHm7uJ3yndK14vR34QHaZ%2Beq11hYj9LOYQZSMgvLvn0vBbGEw9YrfxAY6pgEXjlPqiT%2FMVCXqIWnIfphhv4CXCKu0iQ5yM5g0XYpP1tZ2z7rk2CvAwmMGafYN0RWKSZzkYzu57m1eq%2FlrSVfo2gApfDwRpuyYgzEoM1UEa7IVeDLEMGNOQx1uUkFVuR52aGuwXY9H7sdrbwclMc1Mu%2FsHuk8W1H6BLhyuphTMXJYxqYpUo2nZZ%2BJzbygwr2PsrvgA%2FFvoywKxqrCWrGZxGicSGjSv&X-Amz-Signature=c023cbf93ed6f81beed501504334522381498d6a1b80b05a036c77ac20bebf52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643CX65ZM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB46quRmVw2iw4cYrhNrnxLTGdKnbFulS7tVHtzcwjuvAiBllBOBXiuwWSZxDhCTiQBmBH24bkgIK8JD7PqhqBkQoCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtMK4u3NTpo%2FoiF0xKtwDdwdliJPlgeL44x13S7ArAflaeVafCcTHJY5WDD6atxFl8Ika%2B0vuKfZ%2FLbnyfSY72fmz9WZRsuT1AjyxjCkBdJnEO94YbeMclDYZO%2BVBcA2M9FZ%2BPVpJjyKf9Oi8MhRBvl62zKuaSXKdyWJRreiI5reUUWt33ZAgFCnhEMzEQ3blTXt3Fj2mUQ%2Fc2vxYgrck8GiYB4PaAYPygB34Xx4T%2F8u50bHUH2WJOHTAyy8jQztJPPk%2BDpy3xOjHm43E8bvGAXy%2BBfUbW8VpNCB0AH5%2FvmAlPnvcmv1E4761FYyNMi3TlGTk6xFYUhFAneRqFu0HX7bStVUHDuOMd00yQxHNsoAhpYklVSDmJEw6py%2F5daDstfmOVosTblmaudaqsLeDQ2JA78hEAL%2FniZxRaVVofYzVuNsfUxYP1rS07qmO%2FmJJYQDNFiAzEzZ9j%2FsO2O2waj%2BDs48tzji11FfNZ9yQ%2BD%2F9UWVjDoW2bDWwueAgNo9N54gt4adqedKNiiRcTbCCIRNIr6bUPS13YhQ8Jd3uNCQhKFYpKOksX03OoklLq4l02HwWfTLgQAfhGikowGn%2FbqPFT04%2BuHNlHm7uJ3yndK14vR34QHaZ%2Beq11hYj9LOYQZSMgvLvn0vBbGEw9YrfxAY6pgEXjlPqiT%2FMVCXqIWnIfphhv4CXCKu0iQ5yM5g0XYpP1tZ2z7rk2CvAwmMGafYN0RWKSZzkYzu57m1eq%2FlrSVfo2gApfDwRpuyYgzEoM1UEa7IVeDLEMGNOQx1uUkFVuR52aGuwXY9H7sdrbwclMc1Mu%2FsHuk8W1H6BLhyuphTMXJYxqYpUo2nZZ%2BJzbygwr2PsrvgA%2FFvoywKxqrCWrGZxGicSGjSv&X-Amz-Signature=6eaf9147e1cd5ad7a2d50e0d755cee3dc4f941647c139669f838547a3323fddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643CX65ZM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB46quRmVw2iw4cYrhNrnxLTGdKnbFulS7tVHtzcwjuvAiBllBOBXiuwWSZxDhCTiQBmBH24bkgIK8JD7PqhqBkQoCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtMK4u3NTpo%2FoiF0xKtwDdwdliJPlgeL44x13S7ArAflaeVafCcTHJY5WDD6atxFl8Ika%2B0vuKfZ%2FLbnyfSY72fmz9WZRsuT1AjyxjCkBdJnEO94YbeMclDYZO%2BVBcA2M9FZ%2BPVpJjyKf9Oi8MhRBvl62zKuaSXKdyWJRreiI5reUUWt33ZAgFCnhEMzEQ3blTXt3Fj2mUQ%2Fc2vxYgrck8GiYB4PaAYPygB34Xx4T%2F8u50bHUH2WJOHTAyy8jQztJPPk%2BDpy3xOjHm43E8bvGAXy%2BBfUbW8VpNCB0AH5%2FvmAlPnvcmv1E4761FYyNMi3TlGTk6xFYUhFAneRqFu0HX7bStVUHDuOMd00yQxHNsoAhpYklVSDmJEw6py%2F5daDstfmOVosTblmaudaqsLeDQ2JA78hEAL%2FniZxRaVVofYzVuNsfUxYP1rS07qmO%2FmJJYQDNFiAzEzZ9j%2FsO2O2waj%2BDs48tzji11FfNZ9yQ%2BD%2F9UWVjDoW2bDWwueAgNo9N54gt4adqedKNiiRcTbCCIRNIr6bUPS13YhQ8Jd3uNCQhKFYpKOksX03OoklLq4l02HwWfTLgQAfhGikowGn%2FbqPFT04%2BuHNlHm7uJ3yndK14vR34QHaZ%2Beq11hYj9LOYQZSMgvLvn0vBbGEw9YrfxAY6pgEXjlPqiT%2FMVCXqIWnIfphhv4CXCKu0iQ5yM5g0XYpP1tZ2z7rk2CvAwmMGafYN0RWKSZzkYzu57m1eq%2FlrSVfo2gApfDwRpuyYgzEoM1UEa7IVeDLEMGNOQx1uUkFVuR52aGuwXY9H7sdrbwclMc1Mu%2FsHuk8W1H6BLhyuphTMXJYxqYpUo2nZZ%2BJzbygwr2PsrvgA%2FFvoywKxqrCWrGZxGicSGjSv&X-Amz-Signature=742318823195f9ccd278bf903fe8c90abcfbd1b336357ea1350b99088edc5363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643CX65ZM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB46quRmVw2iw4cYrhNrnxLTGdKnbFulS7tVHtzcwjuvAiBllBOBXiuwWSZxDhCTiQBmBH24bkgIK8JD7PqhqBkQoCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtMK4u3NTpo%2FoiF0xKtwDdwdliJPlgeL44x13S7ArAflaeVafCcTHJY5WDD6atxFl8Ika%2B0vuKfZ%2FLbnyfSY72fmz9WZRsuT1AjyxjCkBdJnEO94YbeMclDYZO%2BVBcA2M9FZ%2BPVpJjyKf9Oi8MhRBvl62zKuaSXKdyWJRreiI5reUUWt33ZAgFCnhEMzEQ3blTXt3Fj2mUQ%2Fc2vxYgrck8GiYB4PaAYPygB34Xx4T%2F8u50bHUH2WJOHTAyy8jQztJPPk%2BDpy3xOjHm43E8bvGAXy%2BBfUbW8VpNCB0AH5%2FvmAlPnvcmv1E4761FYyNMi3TlGTk6xFYUhFAneRqFu0HX7bStVUHDuOMd00yQxHNsoAhpYklVSDmJEw6py%2F5daDstfmOVosTblmaudaqsLeDQ2JA78hEAL%2FniZxRaVVofYzVuNsfUxYP1rS07qmO%2FmJJYQDNFiAzEzZ9j%2FsO2O2waj%2BDs48tzji11FfNZ9yQ%2BD%2F9UWVjDoW2bDWwueAgNo9N54gt4adqedKNiiRcTbCCIRNIr6bUPS13YhQ8Jd3uNCQhKFYpKOksX03OoklLq4l02HwWfTLgQAfhGikowGn%2FbqPFT04%2BuHNlHm7uJ3yndK14vR34QHaZ%2Beq11hYj9LOYQZSMgvLvn0vBbGEw9YrfxAY6pgEXjlPqiT%2FMVCXqIWnIfphhv4CXCKu0iQ5yM5g0XYpP1tZ2z7rk2CvAwmMGafYN0RWKSZzkYzu57m1eq%2FlrSVfo2gApfDwRpuyYgzEoM1UEa7IVeDLEMGNOQx1uUkFVuR52aGuwXY9H7sdrbwclMc1Mu%2FsHuk8W1H6BLhyuphTMXJYxqYpUo2nZZ%2BJzbygwr2PsrvgA%2FFvoywKxqrCWrGZxGicSGjSv&X-Amz-Signature=0a366867f97fa148f6d1762b731f56ef39fcd1e9545a577c7e322bfd7602b7c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643CX65ZM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB46quRmVw2iw4cYrhNrnxLTGdKnbFulS7tVHtzcwjuvAiBllBOBXiuwWSZxDhCTiQBmBH24bkgIK8JD7PqhqBkQoCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtMK4u3NTpo%2FoiF0xKtwDdwdliJPlgeL44x13S7ArAflaeVafCcTHJY5WDD6atxFl8Ika%2B0vuKfZ%2FLbnyfSY72fmz9WZRsuT1AjyxjCkBdJnEO94YbeMclDYZO%2BVBcA2M9FZ%2BPVpJjyKf9Oi8MhRBvl62zKuaSXKdyWJRreiI5reUUWt33ZAgFCnhEMzEQ3blTXt3Fj2mUQ%2Fc2vxYgrck8GiYB4PaAYPygB34Xx4T%2F8u50bHUH2WJOHTAyy8jQztJPPk%2BDpy3xOjHm43E8bvGAXy%2BBfUbW8VpNCB0AH5%2FvmAlPnvcmv1E4761FYyNMi3TlGTk6xFYUhFAneRqFu0HX7bStVUHDuOMd00yQxHNsoAhpYklVSDmJEw6py%2F5daDstfmOVosTblmaudaqsLeDQ2JA78hEAL%2FniZxRaVVofYzVuNsfUxYP1rS07qmO%2FmJJYQDNFiAzEzZ9j%2FsO2O2waj%2BDs48tzji11FfNZ9yQ%2BD%2F9UWVjDoW2bDWwueAgNo9N54gt4adqedKNiiRcTbCCIRNIr6bUPS13YhQ8Jd3uNCQhKFYpKOksX03OoklLq4l02HwWfTLgQAfhGikowGn%2FbqPFT04%2BuHNlHm7uJ3yndK14vR34QHaZ%2Beq11hYj9LOYQZSMgvLvn0vBbGEw9YrfxAY6pgEXjlPqiT%2FMVCXqIWnIfphhv4CXCKu0iQ5yM5g0XYpP1tZ2z7rk2CvAwmMGafYN0RWKSZzkYzu57m1eq%2FlrSVfo2gApfDwRpuyYgzEoM1UEa7IVeDLEMGNOQx1uUkFVuR52aGuwXY9H7sdrbwclMc1Mu%2FsHuk8W1H6BLhyuphTMXJYxqYpUo2nZZ%2BJzbygwr2PsrvgA%2FFvoywKxqrCWrGZxGicSGjSv&X-Amz-Signature=364e567cde2ef0de0507df293813edf1352d86b193750401952c66fa0b955db5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643CX65ZM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB46quRmVw2iw4cYrhNrnxLTGdKnbFulS7tVHtzcwjuvAiBllBOBXiuwWSZxDhCTiQBmBH24bkgIK8JD7PqhqBkQoCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtMK4u3NTpo%2FoiF0xKtwDdwdliJPlgeL44x13S7ArAflaeVafCcTHJY5WDD6atxFl8Ika%2B0vuKfZ%2FLbnyfSY72fmz9WZRsuT1AjyxjCkBdJnEO94YbeMclDYZO%2BVBcA2M9FZ%2BPVpJjyKf9Oi8MhRBvl62zKuaSXKdyWJRreiI5reUUWt33ZAgFCnhEMzEQ3blTXt3Fj2mUQ%2Fc2vxYgrck8GiYB4PaAYPygB34Xx4T%2F8u50bHUH2WJOHTAyy8jQztJPPk%2BDpy3xOjHm43E8bvGAXy%2BBfUbW8VpNCB0AH5%2FvmAlPnvcmv1E4761FYyNMi3TlGTk6xFYUhFAneRqFu0HX7bStVUHDuOMd00yQxHNsoAhpYklVSDmJEw6py%2F5daDstfmOVosTblmaudaqsLeDQ2JA78hEAL%2FniZxRaVVofYzVuNsfUxYP1rS07qmO%2FmJJYQDNFiAzEzZ9j%2FsO2O2waj%2BDs48tzji11FfNZ9yQ%2BD%2F9UWVjDoW2bDWwueAgNo9N54gt4adqedKNiiRcTbCCIRNIr6bUPS13YhQ8Jd3uNCQhKFYpKOksX03OoklLq4l02HwWfTLgQAfhGikowGn%2FbqPFT04%2BuHNlHm7uJ3yndK14vR34QHaZ%2Beq11hYj9LOYQZSMgvLvn0vBbGEw9YrfxAY6pgEXjlPqiT%2FMVCXqIWnIfphhv4CXCKu0iQ5yM5g0XYpP1tZ2z7rk2CvAwmMGafYN0RWKSZzkYzu57m1eq%2FlrSVfo2gApfDwRpuyYgzEoM1UEa7IVeDLEMGNOQx1uUkFVuR52aGuwXY9H7sdrbwclMc1Mu%2FsHuk8W1H6BLhyuphTMXJYxqYpUo2nZZ%2BJzbygwr2PsrvgA%2FFvoywKxqrCWrGZxGicSGjSv&X-Amz-Signature=45ca8a01508d737c985333f920e0aba4819e8b0f2257d9a401e1a2ee88f59d55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643CX65ZM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB46quRmVw2iw4cYrhNrnxLTGdKnbFulS7tVHtzcwjuvAiBllBOBXiuwWSZxDhCTiQBmBH24bkgIK8JD7PqhqBkQoCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtMK4u3NTpo%2FoiF0xKtwDdwdliJPlgeL44x13S7ArAflaeVafCcTHJY5WDD6atxFl8Ika%2B0vuKfZ%2FLbnyfSY72fmz9WZRsuT1AjyxjCkBdJnEO94YbeMclDYZO%2BVBcA2M9FZ%2BPVpJjyKf9Oi8MhRBvl62zKuaSXKdyWJRreiI5reUUWt33ZAgFCnhEMzEQ3blTXt3Fj2mUQ%2Fc2vxYgrck8GiYB4PaAYPygB34Xx4T%2F8u50bHUH2WJOHTAyy8jQztJPPk%2BDpy3xOjHm43E8bvGAXy%2BBfUbW8VpNCB0AH5%2FvmAlPnvcmv1E4761FYyNMi3TlGTk6xFYUhFAneRqFu0HX7bStVUHDuOMd00yQxHNsoAhpYklVSDmJEw6py%2F5daDstfmOVosTblmaudaqsLeDQ2JA78hEAL%2FniZxRaVVofYzVuNsfUxYP1rS07qmO%2FmJJYQDNFiAzEzZ9j%2FsO2O2waj%2BDs48tzji11FfNZ9yQ%2BD%2F9UWVjDoW2bDWwueAgNo9N54gt4adqedKNiiRcTbCCIRNIr6bUPS13YhQ8Jd3uNCQhKFYpKOksX03OoklLq4l02HwWfTLgQAfhGikowGn%2FbqPFT04%2BuHNlHm7uJ3yndK14vR34QHaZ%2Beq11hYj9LOYQZSMgvLvn0vBbGEw9YrfxAY6pgEXjlPqiT%2FMVCXqIWnIfphhv4CXCKu0iQ5yM5g0XYpP1tZ2z7rk2CvAwmMGafYN0RWKSZzkYzu57m1eq%2FlrSVfo2gApfDwRpuyYgzEoM1UEa7IVeDLEMGNOQx1uUkFVuR52aGuwXY9H7sdrbwclMc1Mu%2FsHuk8W1H6BLhyuphTMXJYxqYpUo2nZZ%2BJzbygwr2PsrvgA%2FFvoywKxqrCWrGZxGicSGjSv&X-Amz-Signature=afdf751113d4e9c62a8c90f31a2271d963668c5787f3fa81e0fde71760391a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643CX65ZM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB46quRmVw2iw4cYrhNrnxLTGdKnbFulS7tVHtzcwjuvAiBllBOBXiuwWSZxDhCTiQBmBH24bkgIK8JD7PqhqBkQoCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtMK4u3NTpo%2FoiF0xKtwDdwdliJPlgeL44x13S7ArAflaeVafCcTHJY5WDD6atxFl8Ika%2B0vuKfZ%2FLbnyfSY72fmz9WZRsuT1AjyxjCkBdJnEO94YbeMclDYZO%2BVBcA2M9FZ%2BPVpJjyKf9Oi8MhRBvl62zKuaSXKdyWJRreiI5reUUWt33ZAgFCnhEMzEQ3blTXt3Fj2mUQ%2Fc2vxYgrck8GiYB4PaAYPygB34Xx4T%2F8u50bHUH2WJOHTAyy8jQztJPPk%2BDpy3xOjHm43E8bvGAXy%2BBfUbW8VpNCB0AH5%2FvmAlPnvcmv1E4761FYyNMi3TlGTk6xFYUhFAneRqFu0HX7bStVUHDuOMd00yQxHNsoAhpYklVSDmJEw6py%2F5daDstfmOVosTblmaudaqsLeDQ2JA78hEAL%2FniZxRaVVofYzVuNsfUxYP1rS07qmO%2FmJJYQDNFiAzEzZ9j%2FsO2O2waj%2BDs48tzji11FfNZ9yQ%2BD%2F9UWVjDoW2bDWwueAgNo9N54gt4adqedKNiiRcTbCCIRNIr6bUPS13YhQ8Jd3uNCQhKFYpKOksX03OoklLq4l02HwWfTLgQAfhGikowGn%2FbqPFT04%2BuHNlHm7uJ3yndK14vR34QHaZ%2Beq11hYj9LOYQZSMgvLvn0vBbGEw9YrfxAY6pgEXjlPqiT%2FMVCXqIWnIfphhv4CXCKu0iQ5yM5g0XYpP1tZ2z7rk2CvAwmMGafYN0RWKSZzkYzu57m1eq%2FlrSVfo2gApfDwRpuyYgzEoM1UEa7IVeDLEMGNOQx1uUkFVuR52aGuwXY9H7sdrbwclMc1Mu%2FsHuk8W1H6BLhyuphTMXJYxqYpUo2nZZ%2BJzbygwr2PsrvgA%2FFvoywKxqrCWrGZxGicSGjSv&X-Amz-Signature=d80a8edf7091e7be19858186090b31519d62fbc1377e8f95a88ea062527fec95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWDI3WS7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX96KkQ0qvcr7M9vV1PATrnLWoCioKOtK8Jgf4E4rdmwIhAKjSftgkGAzdkv4YRyMZOnzi92X9htmZu7Jr8osFisQKKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOvovU8sivnR93t7kq3AMJGQ%2BQy3RTYw960RVGe0Xzvn2PAkOAKx%2F2dqcmbEz%2F8vUJzyM5jJ7KP6BLtIsbV5shF9e0hoxN2KhWk%2F3yOT0VDKULE1tZlskNjfcJR%2FzIUX58zCAU0feb1S%2FOFSEYDmxFGam6gzXfK7xkFY%2F%2Bowtxt5Ht7uGEi6IUafg4HDIwh9SjRYPsNEmVE5uXzL7yOzDkHb7nmrjfX2HbgZO2BNMfdKB8SrZFoQ5EQWL7umWq5we64pYsGOOzaJDzKYgNDnfHTPTKw5z2p%2B8wxxe6n0RXpSw43NTJYzIaqySK23caeow3BYV2aSCILf2%2Fzg84armVizRHa%2FhtxGCYmvNtByyHTfQCn%2B1cD5PicV7Qt9oQ9avgZGrngouMKhjsWkkAS2B5nXak9v7mlJ4UtHMItv2L8lwU4MNovrtpmLUQ%2BoLhhUMv5uSS4OziHilEYp%2BENFPQx%2BnnEcb9P3GvW3TxSoYe7y58qH1fzWr65Gcl%2BZeQlWwxBwzilosiRqvU8XHocYyH771cpcOD3hDxsTs%2FqpGt%2FjCIoBormpiRkXjpilsopdczGMnirpVSS%2BPHty7P7WnH%2Fb%2BpMX40RvxZ%2FavwB5vSTlcHOaYCaimGLkmchCCnmyx%2B0f9nwSBzkCgOAzDxit%2FEBjqkAf4nVwyPlK98O9IkZGTM9NoUUgvvDr%2FlZbH%2FJlbRHb8wXpVWREVDhapvqRejaObyL3zOmliiYJOnSUkukvkL7uACQacVpMIB6Y%2BoyKSODdcdAEU2mTwJMRWikrjrnCH5purJsNu13%2FdCI2OVOPH8F2auWc3cT5Bd6cQPspG9DnkJSeCl7RVe3ZF6mix8L8u3JqA%2BSfEmwJ7mhfp0%2F6A5Cny1nR1i&X-Amz-Signature=eb534d125f817c13d84d9ffd0c6da5623bf369c86e7aa7553fe6d20f343614fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQJX32N7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICVZwtvWdX9mhxrm60U1WciHbcIQ5lfKywBJiECGjRmmAiEAnUGgEvQ4iy4amuKXFqYbg6qXb14TnmdFM3MZd2uKgA0qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLT4qEDTAiiiWd2uCSrcAw6uU0KOIkQYyAU5ze1Tbr1NFVtvaJshbZE2A76HYGRdW4%2FzwPbgSSN4I6c85GB%2F%2BO7DwQkvG420k76I2P5GOX%2FbMqqbW%2FgBYQMd1ivrk8YjnVNXYkgJBosrg9i7YtnMCQf07r2EpDGxNffyU3sj0CSesoM1ezvPFJc%2FceScy%2Fh7ZoCL7HMSSvrm5BgJVOQSqeuLHkglS78K3Kg2n%2Bv9T0hRPWkGgaewaydBIv1srxXfa3MlJ2kD21BfG5vqlG%2BQ4Al%2FxsoIVsmrLlE3o4yFVn%2F7KxBWdMURlaDtiWLD2E5YzoaGyTXo3v1xxZPybmXL3zAzvKwToscuuG%2BIKODZcUrCXM%2BJT0KZ%2F7EST4b84rtb3%2FKdkTrTVfxjBxf1FItlBnky6sThWrLdg0zA0COaOOU488o8SRRR%2BNRpeukOXe%2BVh78FRIATVaLBicNbK8lc4KY%2FRcotHpdbbYSUWUC6ROOws1fdsS7FWDkNmcXcsBOKi7G1qgOFawLubgHIkzqKQUndQJl1TwAOR1NFK%2Fwl7sz8B87dyuVHZwdVLaBADLVtN4ZMT7cj850wc7crgVofdU2waOOJgHN7657oGpis0QfkXXQwNvrRYe1ccP4FT3nrAEt87SBg2TQycZgGMJaL38QGOqUBIgdKnHBBWhnpVOJAHC7HeZBTKDoiAiDp61CW6noPFjQ5CnTXKZSJ2uNKXet1eRtijX%2FCYFLCvSurPPGw15gMaCMbxkMP7stGIpyTbDmHBDer%2BtGIIu8ahQos%2Bcr%2F%2Fd3SHiOt4WmTmgUD2oIwpT8EwBp%2BIzOk%2BdP6OhD807Bioj0f%2Bh%2B6E1mbFR8In4v%2Fax3%2BAyLQaULELfv2FUIIxeFE1ARRFC7p&X-Amz-Signature=f5a5e4c49e446e7774a4460afcb7fd508e217f04582f2491fc78121ec3c4741a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDCEQJY2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FqZvTAnUpJCFgNWxBe9H0EVUNT%2FouW8mFvKjg4VSDVgIgSOE4LWTm7S8wxkLAiEYkdXJJOg4f48zAwUoR0cAEjS4qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGfLjU2UugOA%2F6XlyrcAxd%2BFdX4LhIQSbv%2F08vDFMAT0x59dgtY1GRQxjPPhrmmDAu%2FeJO4glmB104z23iFV4Wn3L4BXTsTYolLtTbopfYQKP6UP1XzJJqDKnxtx%2FE6vgRkxhmybzamto6vg7I23yxh530fOaIT70WkoIzhrddeGMuDXy7wdr3Z4sD8YN6RvHVtlC2r0tXd99ILhK5o%2FS6fxKozgvhuj8JP20b6JG5lcxI0p69FjH1fwxKYInJdUhRVoNDhmCRoJlis%2F8DDDUKT1kbWCcqV9fEIV7UGqKkCroDSgaqn1CkBtHUMvQrtq692Svr2u%2B%2FIM0g4Gl%2FOIZnrKT9rBaH4wjgsODJ9T9HqJXVcYQKMdNSyo0aYl5yxR1GqEvHx1sKZ17rt9s9bYzHVvWW98tCBUZ3%2Bp8u%2FQ9tYvhoiRz0G3xSXiDfYdN0NXZw5OFHrjyy8Am7yghu1iud9095Iu6JvetF%2BMnlsnWT6mUjwmnszGu5JexIFz6KH35%2BnRH7FUC8LUDuoPePfNPAPsuFvaeC4uRfxfb4fJGxUjl8qgt4UVycR6mWltuWa2bcrnk%2Fvb8uMuxBk4%2FTr7lVDzQPW7sVxoE16bTpbz5chdFCm%2B%2FC8OewxyHPGxyGMRea5j%2FcBkXQe9TBjMMCL38QGOqUBKzUEt99szzpX9v5%2B2QLZlpaKSZvJ2YR31IgSIh%2BWNdUE0%2BVNraz2CirC6lZKMojJRQZGTjzWsLOF%2BJSOYXuMHwlGIfLI%2B7jwYOp7ADByhec2W5Q%2BZFnPUr2FRH74g8nh6GdMeLVYzfy6dn5NoDwNLCEyRu4lqMj4%2FzGnOFxPYARw2lwI8qJAQvYky3zPpSI5vZC5m1bt2HxYo0B6xt3WsvAMUm6u&X-Amz-Signature=c48ea39b42cd7453cb0515853cc699d50a1e2b505c0ef25283b32d00232e2589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643CX65ZM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB46quRmVw2iw4cYrhNrnxLTGdKnbFulS7tVHtzcwjuvAiBllBOBXiuwWSZxDhCTiQBmBH24bkgIK8JD7PqhqBkQoCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtMK4u3NTpo%2FoiF0xKtwDdwdliJPlgeL44x13S7ArAflaeVafCcTHJY5WDD6atxFl8Ika%2B0vuKfZ%2FLbnyfSY72fmz9WZRsuT1AjyxjCkBdJnEO94YbeMclDYZO%2BVBcA2M9FZ%2BPVpJjyKf9Oi8MhRBvl62zKuaSXKdyWJRreiI5reUUWt33ZAgFCnhEMzEQ3blTXt3Fj2mUQ%2Fc2vxYgrck8GiYB4PaAYPygB34Xx4T%2F8u50bHUH2WJOHTAyy8jQztJPPk%2BDpy3xOjHm43E8bvGAXy%2BBfUbW8VpNCB0AH5%2FvmAlPnvcmv1E4761FYyNMi3TlGTk6xFYUhFAneRqFu0HX7bStVUHDuOMd00yQxHNsoAhpYklVSDmJEw6py%2F5daDstfmOVosTblmaudaqsLeDQ2JA78hEAL%2FniZxRaVVofYzVuNsfUxYP1rS07qmO%2FmJJYQDNFiAzEzZ9j%2FsO2O2waj%2BDs48tzji11FfNZ9yQ%2BD%2F9UWVjDoW2bDWwueAgNo9N54gt4adqedKNiiRcTbCCIRNIr6bUPS13YhQ8Jd3uNCQhKFYpKOksX03OoklLq4l02HwWfTLgQAfhGikowGn%2FbqPFT04%2BuHNlHm7uJ3yndK14vR34QHaZ%2Beq11hYj9LOYQZSMgvLvn0vBbGEw9YrfxAY6pgEXjlPqiT%2FMVCXqIWnIfphhv4CXCKu0iQ5yM5g0XYpP1tZ2z7rk2CvAwmMGafYN0RWKSZzkYzu57m1eq%2FlrSVfo2gApfDwRpuyYgzEoM1UEa7IVeDLEMGNOQx1uUkFVuR52aGuwXY9H7sdrbwclMc1Mu%2FsHuk8W1H6BLhyuphTMXJYxqYpUo2nZZ%2BJzbygwr2PsrvgA%2FFvoywKxqrCWrGZxGicSGjSv&X-Amz-Signature=415bb0bec0b96755b0fe178e7937b189eb72be9f1a951c27f8493768dda6cdb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSYIZL7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0w9X75h5BliAelcQckIz7gHfwKxWs8j%2BPbWrb8Ym0oAiBG9aLoH0N0SXTxrxABCVjdP6UqO8hcOwO17XAOYYSKTCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMgGhxIGVKtaryqmrKtwDI7YXqpA8AODWNt68K7bQuZ68M7ZE0FtPuVsasCunu230i6%2FEFBpy7GiuDPX2d0sLmN8P8i6eki0GOS7UcCZ5WzBGUEBNe%2BOAkcobZ9AAUoTEkobJHy0c9c%2FJ9bdSATDpy68prqwAxNjYDATz2Zi0RDvK%2B4AW0efe%2FshwlN3c7lVDx8F7vtvtXp2G1mmnk5QQDBUcDe9npMTibYrYyStSeASkYUOht9G6GxK4Uu24xdyad6oXwQ%2BQkdhIFlO57c%2FvnfK4UuFC4iaCWkRO4nNNjZBb64w%2BhFCXvWeOjQ0KTOudhZUh9eV6k86%2F%2BwCP4O4hGMSWLwKXfSyMTwPy2ec5igBjzZatyqKTxTQy9rp3g0VKgVKby9rV6%2BYspqDSdWuX3WwlFfXF0Z6a4KvcyPi0eEw8Wxn4R%2BdDodJsogCNig8Oxinvac2cYXLxsr%2BFHC3CbtvR04yzmzMFNyqzrB4vST1p%2BECmzKmlhIvgDeqYWYMqEmjBBBqjn%2FEcL8k9a70YAQVTH002qllaWcbbYrcNwvZLQE48yrYPskBq7syBoxc3v%2F2SO7b8mKCDQ2Ei4xvP9R%2F3ueKLDG2CY%2F7rr2w9I5AoBdXFBO700KDuHbKutt6vnXF3GEL5u5K0iQ4wk4vfxAY6pgFq5Nd8iFFcmgIdDY8BmjP6NuwtvwxW6VAbCU4dxeTtF6SGeFjI1LhEf%2FDCH%2FJbuvO4ts9QbE97ssUKvnkOpmNnbYtun2%2F8FXnHylBKjl3N%2BJM99Oi5ciTLRosjd5i27pPzfVqgBI%2Bjqvgueu%2FXiDKehYdSxd9YGEbDsZJBdUSUtttsLi55YxqJQZ5wkBMks0BsRJc3UCRVHZZfQE6LIxKCKo29bkJM&X-Amz-Signature=8993b316b223f03c68df534e97205eb5157d9dfe6d70149aafc7cdd25858b1a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643CX65ZM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB46quRmVw2iw4cYrhNrnxLTGdKnbFulS7tVHtzcwjuvAiBllBOBXiuwWSZxDhCTiQBmBH24bkgIK8JD7PqhqBkQoCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtMK4u3NTpo%2FoiF0xKtwDdwdliJPlgeL44x13S7ArAflaeVafCcTHJY5WDD6atxFl8Ika%2B0vuKfZ%2FLbnyfSY72fmz9WZRsuT1AjyxjCkBdJnEO94YbeMclDYZO%2BVBcA2M9FZ%2BPVpJjyKf9Oi8MhRBvl62zKuaSXKdyWJRreiI5reUUWt33ZAgFCnhEMzEQ3blTXt3Fj2mUQ%2Fc2vxYgrck8GiYB4PaAYPygB34Xx4T%2F8u50bHUH2WJOHTAyy8jQztJPPk%2BDpy3xOjHm43E8bvGAXy%2BBfUbW8VpNCB0AH5%2FvmAlPnvcmv1E4761FYyNMi3TlGTk6xFYUhFAneRqFu0HX7bStVUHDuOMd00yQxHNsoAhpYklVSDmJEw6py%2F5daDstfmOVosTblmaudaqsLeDQ2JA78hEAL%2FniZxRaVVofYzVuNsfUxYP1rS07qmO%2FmJJYQDNFiAzEzZ9j%2FsO2O2waj%2BDs48tzji11FfNZ9yQ%2BD%2F9UWVjDoW2bDWwueAgNo9N54gt4adqedKNiiRcTbCCIRNIr6bUPS13YhQ8Jd3uNCQhKFYpKOksX03OoklLq4l02HwWfTLgQAfhGikowGn%2FbqPFT04%2BuHNlHm7uJ3yndK14vR34QHaZ%2Beq11hYj9LOYQZSMgvLvn0vBbGEw9YrfxAY6pgEXjlPqiT%2FMVCXqIWnIfphhv4CXCKu0iQ5yM5g0XYpP1tZ2z7rk2CvAwmMGafYN0RWKSZzkYzu57m1eq%2FlrSVfo2gApfDwRpuyYgzEoM1UEa7IVeDLEMGNOQx1uUkFVuR52aGuwXY9H7sdrbwclMc1Mu%2FsHuk8W1H6BLhyuphTMXJYxqYpUo2nZZ%2BJzbygwr2PsrvgA%2FFvoywKxqrCWrGZxGicSGjSv&X-Amz-Signature=0dfb60f7d1a476aa008a9112f5ed957eea6cc9c8fae81059c10a5bfcafdeb595&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCLS7L7P%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg0vxpgfXka8vD7z6i3uNK1Uws5uZHGwPQ1Vh3SZrFUAIhAL2sBdnDOuwJmItapzvpN47uFMNXSiMdja4Qm7udvZuYKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzy6R4%2BYCw687fda54q3APNDRzpy%2BJo%2BzhlXo8uuiUv3XGyN9ooBjhkwsU%2FxkyD874hmwAReGiUs4GojQnDSbFGQ%2F5RT2cU%2Fl7fuBcJrk2VQun%2BqiTwP3oDdlDQkpJlrx6OE7puONFFaljl1qWYh3tSr2djovgzbWr9fYb0ISjYRj%2FXUha5hOqQqYuKu9SiB6A8figDQgkLmNECEpzU2nwU0fk62VbVPXeBiJHI8e0CG1h8NK%2Bg8uPQXsUAbMEf6iH63EYHf5jEZxAuSMMELV1gxyOUnHl7%2FaI0ycaFDiUTYzmvomCsLQihNj5%2B3KDkKIvLwRE9J4wlk%2BF2rPrWZ0%2BCmzWqNsd9EftSlodKe7Kv1GkT5gVRqp1o0yfW26IPgYGvq3n7GWKkJbslF8J7yYRY5g%2BeoBiXlkd2oWgPrqVbExcLZ6ghvhFQg5CHCGwL0xQtb945qZzLRys6XiKwNAAymSyKXFwJhzaGtuJeGNneJXpUhhKHnrQTMGMoG48PaqDUuKY4cS%2BwO94jjki3zbmlFMnIXMowGrqv5O%2FCfylR2%2BtKCZvipCh8aoen50GgOd6sfofuQdqO40%2BymG%2BajjbTD1Mw3Q8jpne5vVbvIlA05pB4xQqjiQ541w8DEQHeSmp70xT6%2Ft6hShuWYDDVi9%2FEBjqkAZtsxfKMF6El6jtp9Eut0xAoDOzgZrMd9uoJrI11hBnmBsrxO8zmx3bh0uxaJkYJvxlRBRFPx5tsDWTQIEeOQnPC4MCdtJ1zeexUWLeWpdfocq46EUSOns4RmtwsvHS7Lze3VnRY1Hxj8goCN6h8eFGeCAJZ%2FvU%2FQeP6Y6%2FQTf%2BoiaV4jwRix22I98BbOZQhCtSy5FZyKPe1cNbuLJM1NXI8YP3J&X-Amz-Signature=65097d05eda965175bb30ffafb18217e012e5cc3e510a4ca64e875ba0dd5abd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643CX65ZM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB46quRmVw2iw4cYrhNrnxLTGdKnbFulS7tVHtzcwjuvAiBllBOBXiuwWSZxDhCTiQBmBH24bkgIK8JD7PqhqBkQoCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtMK4u3NTpo%2FoiF0xKtwDdwdliJPlgeL44x13S7ArAflaeVafCcTHJY5WDD6atxFl8Ika%2B0vuKfZ%2FLbnyfSY72fmz9WZRsuT1AjyxjCkBdJnEO94YbeMclDYZO%2BVBcA2M9FZ%2BPVpJjyKf9Oi8MhRBvl62zKuaSXKdyWJRreiI5reUUWt33ZAgFCnhEMzEQ3blTXt3Fj2mUQ%2Fc2vxYgrck8GiYB4PaAYPygB34Xx4T%2F8u50bHUH2WJOHTAyy8jQztJPPk%2BDpy3xOjHm43E8bvGAXy%2BBfUbW8VpNCB0AH5%2FvmAlPnvcmv1E4761FYyNMi3TlGTk6xFYUhFAneRqFu0HX7bStVUHDuOMd00yQxHNsoAhpYklVSDmJEw6py%2F5daDstfmOVosTblmaudaqsLeDQ2JA78hEAL%2FniZxRaVVofYzVuNsfUxYP1rS07qmO%2FmJJYQDNFiAzEzZ9j%2FsO2O2waj%2BDs48tzji11FfNZ9yQ%2BD%2F9UWVjDoW2bDWwueAgNo9N54gt4adqedKNiiRcTbCCIRNIr6bUPS13YhQ8Jd3uNCQhKFYpKOksX03OoklLq4l02HwWfTLgQAfhGikowGn%2FbqPFT04%2BuHNlHm7uJ3yndK14vR34QHaZ%2Beq11hYj9LOYQZSMgvLvn0vBbGEw9YrfxAY6pgEXjlPqiT%2FMVCXqIWnIfphhv4CXCKu0iQ5yM5g0XYpP1tZ2z7rk2CvAwmMGafYN0RWKSZzkYzu57m1eq%2FlrSVfo2gApfDwRpuyYgzEoM1UEa7IVeDLEMGNOQx1uUkFVuR52aGuwXY9H7sdrbwclMc1Mu%2FsHuk8W1H6BLhyuphTMXJYxqYpUo2nZZ%2BJzbygwr2PsrvgA%2FFvoywKxqrCWrGZxGicSGjSv&X-Amz-Signature=dfe76d732419b67502dc15ddfcf3f4c2ccc06b9c3bb31fcf15156f2f52a6967d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FWOKSE2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERaVkIZSYubYbJZd5mhuYU16eWwTYhG5SlFLhcG%2BaeYAiEA4LkOa52Jm9yCyZuLrPob3njkHBPJjPLIfNonWohDeIsqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGF%2FrKHiaeZjRd13JircA90Ouf5yJ9FKy77suuO5ceeErhoy9nhsZemIpU1FbKaBAgPnQ%2Bba1y0fWjp7RZU%2F6DeQXOnQHAXEULdDGk24sx7FdODeZjScUa1m9wmQG%2BUVnDw5ANxz7iC%2BKyIoOw8oW9pBzY0o%2FbduuvN11a1eWiI4Vb3I6nmSZtK0FqVj1MdDz9v1kmAeGqfzXQPriFghc444tbw2fn%2Fw7o5uIDyFNaaeUuh4EDVkalkkLIHFnXOLTbcLLHFmTudwlTrAMCypG3XL3Z2wmjHoEr5bGzv13I4%2Fe15OF1li%2FQ%2BqYf3pIHf0yiqZH%2Bw3%2B1uTVUvzOO4Ztg92YeY%2BJUmyRPFpdlZkuiBI9LDQvdf82RLNtjSUBPNgTmhXXsgdoNRLwekNHp54Zlu6DRgoCUAREw%2FZxAtNkLIkRCRpRZpXb8Wdwc%2Fj2%2BGWhJ7AFOUB05KYQ5B5O5MJoXyaYpEOTX5CHZ9VtNMnPU1NoDkUA%2FLWOm8XNtEVhzApXrhLOxzaTkKTMuZdF99p%2BoesLwuSWvpHwAJXqS9IkV59QznYGbNdemlgZPdBoHioutac0E3NLsr9G93oqKiIfb3zxHjbO%2Bry%2B1R%2FeIAENalyUc13I2E8uVztPkJuKGhklp37uBIUQC93UUjMMOWL38QGOqUB9EgdK%2B5N7MR00lhSSx9uqdfDTa8vqdiMW2b486a9G%2FNhJIiy79CqOgV0zZDV1TBHLpoIv5RcYF3H%2Bm7QFbXUR14F8XYANUFX3TqP6kH%2BrKV%2FSN30ot98G1ODTt7djIWOquT6z%2F8gOf%2Fi4vjhg6BVYF54fXRqjzcCu7TNsRkuV%2F%2BHgTqAKM81MGjuNgDTsad3R7SgsykuGQT%2FUyoqUgMOw7YU5%2F%2Bd&X-Amz-Signature=4ba42ebf962ae29c0de0dd6f9b3f06fc8b9f55738ef59bd389abd946b23f124c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643CX65ZM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB46quRmVw2iw4cYrhNrnxLTGdKnbFulS7tVHtzcwjuvAiBllBOBXiuwWSZxDhCTiQBmBH24bkgIK8JD7PqhqBkQoCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtMK4u3NTpo%2FoiF0xKtwDdwdliJPlgeL44x13S7ArAflaeVafCcTHJY5WDD6atxFl8Ika%2B0vuKfZ%2FLbnyfSY72fmz9WZRsuT1AjyxjCkBdJnEO94YbeMclDYZO%2BVBcA2M9FZ%2BPVpJjyKf9Oi8MhRBvl62zKuaSXKdyWJRreiI5reUUWt33ZAgFCnhEMzEQ3blTXt3Fj2mUQ%2Fc2vxYgrck8GiYB4PaAYPygB34Xx4T%2F8u50bHUH2WJOHTAyy8jQztJPPk%2BDpy3xOjHm43E8bvGAXy%2BBfUbW8VpNCB0AH5%2FvmAlPnvcmv1E4761FYyNMi3TlGTk6xFYUhFAneRqFu0HX7bStVUHDuOMd00yQxHNsoAhpYklVSDmJEw6py%2F5daDstfmOVosTblmaudaqsLeDQ2JA78hEAL%2FniZxRaVVofYzVuNsfUxYP1rS07qmO%2FmJJYQDNFiAzEzZ9j%2FsO2O2waj%2BDs48tzji11FfNZ9yQ%2BD%2F9UWVjDoW2bDWwueAgNo9N54gt4adqedKNiiRcTbCCIRNIr6bUPS13YhQ8Jd3uNCQhKFYpKOksX03OoklLq4l02HwWfTLgQAfhGikowGn%2FbqPFT04%2BuHNlHm7uJ3yndK14vR34QHaZ%2Beq11hYj9LOYQZSMgvLvn0vBbGEw9YrfxAY6pgEXjlPqiT%2FMVCXqIWnIfphhv4CXCKu0iQ5yM5g0XYpP1tZ2z7rk2CvAwmMGafYN0RWKSZzkYzu57m1eq%2FlrSVfo2gApfDwRpuyYgzEoM1UEa7IVeDLEMGNOQx1uUkFVuR52aGuwXY9H7sdrbwclMc1Mu%2FsHuk8W1H6BLhyuphTMXJYxqYpUo2nZZ%2BJzbygwr2PsrvgA%2FFvoywKxqrCWrGZxGicSGjSv&X-Amz-Signature=181a3210214bc94b4c3c170cf1c6b6425fe65bfb348bf5d8348d118d3fd7a011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676RLXHXJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5Nil10%2FIPbw5aKkDZwJ%2F6uayPsF0ou%2BXN3xB5R4GPYAiEA4YA0XkHvt5aq2QzpgxCFZB7D1eYL2KnSLS5YSAOrEh4qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFdfxuYdxpArGcdEdSrcA2cJsM7uFy6J8VqTZ7cBhR7psvpe4%2BEmW25h6%2B5eddGZyQCXVZIa5yYp2J1%2BenO60JFJYpHN2ektv8kJ7LHc03nxaxHoNSvekpfqhdVuL%2FAQiEKDG9tZCWBErw4Qy7uyyuhWAIroLn225uxExWai8TIV%2FRi2NgTtwZ%2BIYNlJZ9JceRyXG3NIM9ml1oXGhlmGt9v0gxhEWB4qC6tUZ4jcKOecqErbITJZZugWFkXHRAzMTSsPM6HPZnIBG16wvN1GY%2Bt40HhHd7UKsMW1OWao%2F79SzcjG5uOKtEoPtz2aAgoAstIqHKmeKaMLwHD%2FQTR5UfN4E%2BmF9NqO9Kxjbm0NbWgsYItXF1wRp7396sQFEn5ETel9VIrXhhVPyWnJ74KSOqBd32B63qJ0%2FFEEbpMxHXDrAa963egkOunlJf516VLImVGeUEWLtU9lk%2BRUhDdVotmi%2FtXqCmGUrxcld4n7rlYn4PXmUH2%2BuuQkkT5Yh7IbdBDYW2V5g%2BlpTEmFtDv5ZlNG3V6BTWpnaiNn18DbMkWgNalTuYIt494BykZpvxjPGHloNP1MwpzK5wc0lJw74pJgbFzM18aN1XYbqKBAIEFCKAy1bhQzbb6kd9tH3CpXUUjJ84UPlPQuqAmnMMyL38QGOqUBiqaSx4yQP40jSHNdc8XGDNPJnd2jfW7yagcmC%2FWoviOnmoZgPoVmt4mRk5d4U5%2FiCa05KOKLIlqScZL1x%2Bo%2FCK4KU3vtPliG%2B4K6YEFXzmO19af6P5aPlPjrhUAkv%2Fm1Ug7Dh3qH9yIU%2B2jzHurEDPWSYxJ2l1pmLZlQ6bj8wHX4SoyZgyqXZFXIQ2za2Rf6kGlLHM809DyQrUmL%2BDXkCsgJM7VN&X-Amz-Signature=f23e9c10257efefdd104e7ab0fc47856fddf967edb49cba93518ddfb1b16591a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PQ755YF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1XJoOVSsVYWZY2jvddFl0hk45MQsBl1bwyOUve2apyAIgUl%2BPLydzbiBAvcAjdRi3jtz5lyN8IK1sUC0pgul82BIqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOscsd3yTtULzb48FSrcAwj%2FFiUv6HsIexwQTkhQhJuetoZXC2gbSJcIjQLAssLjZc8cFS9kx%2BSI%2FXqyN020ShbJd6my%2BomuEqMghzVjeMXODP%2BAgYO8P8bWRiHkF0nHVZgh90vYCvbh2dB5Z33q1WDF3F1pTWEpfIdBhAfyreI3TqRdmw9XFjtK%2FYhU35YC7Kw0EHxJSjuo7GhOXbgGkPGiIjJ3xZOsj9pupr4Ggw%2Bh%2F7EO3%2BK10BHuqas4U2beMQqY08mx3qUysq4YO5wzoBffR0vli7JW%2B3b0RSIGk3wHVR1Qtuva0EOJZa4gs1WTYp4D4NTxktCymnBe20oR2kOMlzuBrcImy5b110WB8HleXxf6zZ1Y8K5u63tBU6LC8WJZuRLHkJoHwIdv0LJD6HJo5ZbDPpDDD8ytAZzh1aT9XoMc4IBlkMtx2x7KNWoay35li63JlthNItYkfWVHa4a1uq%2Fr6muAKUstzK%2BCDPvtmxcFfx9NYP4pCYJMuHF3UBedYpTiVBtR0V56SU8elYEIX40V5%2Fym3VuoEYhK4F7N%2Fqnu5Lr0LOvfv5nCUNiHqN7bzKk6SQNQGsQ%2BJDetOHfL5LEBeuB1wgvh06ZU3IfWi%2Bn1GbjVmS3N6TYQajTUlGWAty8j7f4oU1ZyMNeL38QGOqUBqK6zPMQm79nBAm9NsfHI1V5w9ci2HkzzqByK3z1Z9weXrYP%2FEkQp%2F%2BrOExYm7rIGV2iZDhzRkhV0Rtaj1yNfrYfyzD%2FPFVQVy2D%2F%2BiKpoa1%2Bp%2FvrfNtEpckKHhQZ1bD%2B%2FCtFOQ5gHxdXBwPeePhuQ7aQJjDWNvbJrdegm0IyP53VVcJvwbuADDVDZPNllZPna3s3AH3zErkenhIS4a%2Baohzxzf1P&X-Amz-Signature=358d31b1d232e6db36ac7f9eec025e9ebb51ee0a32ea897585a77042b1d9c8b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663322DKV6%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX2zW3qQunDCGpUOIVP3xQjguzMQWYKYHA%2FVNHyjSGSwIhAIUGWDBp9KO%2BCbcBni6LF3QZV2OOkYphKjklR0WE1rTvKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrvVlKpEfb3hK6epsq3AMZXi1W57DYTYP%2F8mOuPUIvUfqz%2Brxbsek8%2FZha1ewZOCswTlsS5Xb3bbn1IFRIJiTbWyYb1bZNGCI8rzULalRtdkj7n%2FI2mkTaBmSwjb3769ydWhlBTBDYRpHt6dhl9kxJ28DjF7j125JQHrOOOrfpea2OGdBSrNQ4bfHnLUo%2FSELwdfUUy0%2BeVwAoKyhNoxdigjybRK0AY25%2BuFC4OEu8NHlIzyAevSbRlxwxkXuBbOYUVhOjkrceiCDRM8LLNUmO4vtk7WUeq9LZw3xyEf3cxPxSn03ummn0ElNDHyvgyXAXUDfETyxRLFast7JE5VP0u5Ttc3o3rbf9WClR%2FSAeRwmDomcuB80wkxgc8xom1WBPKSR0EmU1ffuu7A5273sBZiBrl5eFGGfEpBpsXMjeEH%2B%2BqayM1HFTVaHEWbJDfjeHGd%2BSTNU55Ni9xOkLHAdbDPLg9tUwriAiQcmFMjhXp4zoNziXjJWiJNua%2BhHYFg5ecbVuUz4l4X2PmK%2FYd30TCAYt662%2BjwSsVXGTjvFroQAXzripRwtFxbnzbg4lOqoPfBnxt4si8iJGWfeMOxvNvdzlxyFhg1fNogmLQ06TEnBNZRGn%2BhuB7K59CS2G6A3RXsMXcLRO2NeKvTCoi9%2FEBjqkAaM9Omj%2BvYXTWGHBfbMjCzDn5AjA2WQcoy2o1PTuZt3pxfhNCqKWpUuAvfTUBdjTEJSbezfOWPI5daOkrdrgAq9yKKUCe%2B7T1qe500QhTkjfuY9pBHp%2FTYSf7kfpblkgCja8CNiuP6bpT%2B9X8sI9scNicsILNuxQjJhY19XFSvohNW4qTbMqe90ALsTYYCi307iLJ2QeYMGPQ%2BH4KGP0n5VM4cYA&X-Amz-Signature=d9fc4b56a046feb8474e4c961f7101c9f0b94c3df34331cbdda12c50728ff60c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLL6HMDG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhDrJ5mBXc58eQJPgDq3sdJV0RD1MJzS33EBNDWKAUPgIhAOh7FYbglnqR5avXXC%2B72%2FusKveBsaeqOWUI8VsjpAh5KogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6BeI0x2j89fqlMF4q3APviB6IlJ4zcf93zj2usgL48MP1wVXg%2Fxzqbl%2FYDFjYNgZTxbVDTz%2FossGhyixhfKEUmgzah%2BSdxzXbfp3eRYIhxvpp%2FAgDCh3n2sZcfnECKVF%2Fgjhxe3E25yCs4Mxj4sacuhj2OOJREnjQ50wx4hdg0LtXm4YcpZ52hSLr96Pb79Dh8QmNOk1LIOxHeDxH25g9YtJJiqP4LoqB46mUUzgdagcOAM2egzfaJZIMTbeEr1eWSXoK7kXB9vCBmsQCq3tfkJIWCg3rK8q0NOT2H7Sm1HNJQNWSOaiT5qm6dX9uEyHkyBewlpENhEEkcLY8pbjMoXqMutD1jlAEGy5YsOUnkUAAK1r2Z47O4Brpsp3%2FICLkSHupt432h9jgES0VWALlYx4GEMFnGQ3T%2FWHc8HAmbsFJpTrxl58AGQFulxXXvWoZutUNwnVbmxOD%2BABUCRsdtKYyfGrR4DFjxzgwtdt8HjrXHF%2FExW9ZiI4jZ6IBMj63SuArt%2BEjN772sbh72yr9UAL0jMvFslYKpDc3lUIg553xeAocYy%2BwGSDxsU1Q8ePf61JEvZLIxFKA%2BsYX7z3uz5DJJh6lH0z3RhbyJotgdiabAWSP67yffky13TVg0f1coYGPb4HBQBGcoTDZi9%2FEBjqkAWaVegJILCL8gPuYAK9tjIRMl4Z9xRD%2BfNBDvJ8wtEOM96UBc%2BxzzgXUL5cYGs0%2Fmy1VuiUIBgIrGhXaH6u0qWLZvW8QLT%2FIHfMaFPjdR4UUetnA8hk30vHVlUANhijkYe8c7TaCoI29Ci9E5BK1dWFgaBNQTIBcAlbD20KONb2O2e6KnMjgFtdi%2BwqWyzBUFq%2FhrhQMHwhrNHm5z4vMXqRgvYkL&X-Amz-Signature=6c29109d12dbea88646e50cfe0fea0b2b01f882bc064c902e8a2f6b274bd46b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5TIV4O2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTVPosVElrcAkMXkGy6nRZx9nLN3PDIJ0o3MfK6CtnCQIhALPLkybszRwgknSmk%2Bs4BSpUEy334JOM6Ehd2A2cT8gvKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8iVZyQKJED7spBtIq3AOZu1R4ILGOPnGjmNXjO2Fwtles8qLeV1k7BtQmX%2BLgup1POEoWF64FCP5l4d%2BDH6vIv8B6h39qJvUIq7Wqs9LXyEFVvIRm7nyMzpvljESLltKg2H6ArwXgEvljzm39wIe2NSKuoTuIGIDBvnaR%2Bqmb94goTRl3dRmxsfWOkOsft4%2BlEmS6lctKLXadTwyN%2FMaS%2BTplqjhVl7z%2B4wKMX0qkiBn5AonptquHHTgaDQDyoMfsCqVzpl7e2Z6XBsSROgUfEbiUz6FNbfmh9zKH3mJ9lPjcXEW5sHKfVPwQU2wtaVB2s%2B8Em6h%2FM%2BAxYxOO2R%2BhuSaREVDIcboxTu6%2BNLRMoY1ETOkKQkj1g4e92iB%2FWy8JVBC9GpoAPbN4kBbEIk7%2B0xkKBAWWPMb0RyTYmTQtGl1WIIILZmvtkaCRu4mFKkX3Cdo22EvcnnRfOwogHXq4YWenDI%2Fr7Rrz1O91%2BTmQFEBLhlah%2FaM7BsX5XDOOTmj0%2FH6hBrCiny059nF3Syt8bWw69Ep%2Buz%2BvPngCt%2BkhEth7S3psEGdGizO2j2XPHMkLODWVM7%2Fd2%2FnMrjJq0j%2Bb76t2D86xraMSw8adCBQx9NgsAd2VW%2BVXcqhbHcamIQpUDguR7Pz5tvdgzTDvit%2FEBjqkAYyHTy%2BpEEGwo9O9jnFpkoHu1Iqw8RsPjbpWONBh3QSlGRxArO0LMTAAPG5LFcYHUHQdWkiuJUUsKFQjKoBpGuxAlNmoon0ogs5NFE5EwHk2%2BCk0xCMvbI%2BWG4GpVWbO35%2F5U8E9NpM3zNMnsqmM8AUqkR5%2Bo6FeipQzeUq4d67FTYyj1X2gFRnN7RGwkeuqLd12c08lwzV%2FEpsF9p9zIFDP3Wym&X-Amz-Signature=7e8bcd9bb20acada4d0cf1a2212c1546778d613ff2a1cb3443ae91e2d4327790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643CX65ZM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB46quRmVw2iw4cYrhNrnxLTGdKnbFulS7tVHtzcwjuvAiBllBOBXiuwWSZxDhCTiQBmBH24bkgIK8JD7PqhqBkQoCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtMK4u3NTpo%2FoiF0xKtwDdwdliJPlgeL44x13S7ArAflaeVafCcTHJY5WDD6atxFl8Ika%2B0vuKfZ%2FLbnyfSY72fmz9WZRsuT1AjyxjCkBdJnEO94YbeMclDYZO%2BVBcA2M9FZ%2BPVpJjyKf9Oi8MhRBvl62zKuaSXKdyWJRreiI5reUUWt33ZAgFCnhEMzEQ3blTXt3Fj2mUQ%2Fc2vxYgrck8GiYB4PaAYPygB34Xx4T%2F8u50bHUH2WJOHTAyy8jQztJPPk%2BDpy3xOjHm43E8bvGAXy%2BBfUbW8VpNCB0AH5%2FvmAlPnvcmv1E4761FYyNMi3TlGTk6xFYUhFAneRqFu0HX7bStVUHDuOMd00yQxHNsoAhpYklVSDmJEw6py%2F5daDstfmOVosTblmaudaqsLeDQ2JA78hEAL%2FniZxRaVVofYzVuNsfUxYP1rS07qmO%2FmJJYQDNFiAzEzZ9j%2FsO2O2waj%2BDs48tzji11FfNZ9yQ%2BD%2F9UWVjDoW2bDWwueAgNo9N54gt4adqedKNiiRcTbCCIRNIr6bUPS13YhQ8Jd3uNCQhKFYpKOksX03OoklLq4l02HwWfTLgQAfhGikowGn%2FbqPFT04%2BuHNlHm7uJ3yndK14vR34QHaZ%2Beq11hYj9LOYQZSMgvLvn0vBbGEw9YrfxAY6pgEXjlPqiT%2FMVCXqIWnIfphhv4CXCKu0iQ5yM5g0XYpP1tZ2z7rk2CvAwmMGafYN0RWKSZzkYzu57m1eq%2FlrSVfo2gApfDwRpuyYgzEoM1UEa7IVeDLEMGNOQx1uUkFVuR52aGuwXY9H7sdrbwclMc1Mu%2FsHuk8W1H6BLhyuphTMXJYxqYpUo2nZZ%2BJzbygwr2PsrvgA%2FFvoywKxqrCWrGZxGicSGjSv&X-Amz-Signature=bd5e4cc29dbb2699536e4639796a0dfa97b205c857048f29732ccce45a2814da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643CX65ZM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB46quRmVw2iw4cYrhNrnxLTGdKnbFulS7tVHtzcwjuvAiBllBOBXiuwWSZxDhCTiQBmBH24bkgIK8JD7PqhqBkQoCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtMK4u3NTpo%2FoiF0xKtwDdwdliJPlgeL44x13S7ArAflaeVafCcTHJY5WDD6atxFl8Ika%2B0vuKfZ%2FLbnyfSY72fmz9WZRsuT1AjyxjCkBdJnEO94YbeMclDYZO%2BVBcA2M9FZ%2BPVpJjyKf9Oi8MhRBvl62zKuaSXKdyWJRreiI5reUUWt33ZAgFCnhEMzEQ3blTXt3Fj2mUQ%2Fc2vxYgrck8GiYB4PaAYPygB34Xx4T%2F8u50bHUH2WJOHTAyy8jQztJPPk%2BDpy3xOjHm43E8bvGAXy%2BBfUbW8VpNCB0AH5%2FvmAlPnvcmv1E4761FYyNMi3TlGTk6xFYUhFAneRqFu0HX7bStVUHDuOMd00yQxHNsoAhpYklVSDmJEw6py%2F5daDstfmOVosTblmaudaqsLeDQ2JA78hEAL%2FniZxRaVVofYzVuNsfUxYP1rS07qmO%2FmJJYQDNFiAzEzZ9j%2FsO2O2waj%2BDs48tzji11FfNZ9yQ%2BD%2F9UWVjDoW2bDWwueAgNo9N54gt4adqedKNiiRcTbCCIRNIr6bUPS13YhQ8Jd3uNCQhKFYpKOksX03OoklLq4l02HwWfTLgQAfhGikowGn%2FbqPFT04%2BuHNlHm7uJ3yndK14vR34QHaZ%2Beq11hYj9LOYQZSMgvLvn0vBbGEw9YrfxAY6pgEXjlPqiT%2FMVCXqIWnIfphhv4CXCKu0iQ5yM5g0XYpP1tZ2z7rk2CvAwmMGafYN0RWKSZzkYzu57m1eq%2FlrSVfo2gApfDwRpuyYgzEoM1UEa7IVeDLEMGNOQx1uUkFVuR52aGuwXY9H7sdrbwclMc1Mu%2FsHuk8W1H6BLhyuphTMXJYxqYpUo2nZZ%2BJzbygwr2PsrvgA%2FFvoywKxqrCWrGZxGicSGjSv&X-Amz-Signature=b387347eb602ad9ebb61c8f731266d71a662b590402303af4c3df2d06b6a9cf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SHZYTPW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiU8k3vsqLgrxCcI4tcbvxkFQYzliSrfCh1AGTCyMHwQIgWSTrjIKqhpH7uAslRj7XlcvkWsw%2BQ2jtAZNCjyyaoO8qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWGF%2FjYRpVyb7akpCrcA7UiRS%2F2tAVKF9cUoYomNsR%2F720IVvGPQ%2FO47QVb6NV2LxgWUgzTFse4dSvsVCYfGM2ILY%2FAMn9YwHHTN90WJBGN5nRPOHjEFAXztyh2lIeoLjyb%2BFo6wjnU4CDMhq5q45AhwwVEAnRKoY%2FwfoPCB72zYFr8ezKVLJnDrOpIcI0UuIiuWoJ3OxYgV%2Bku6BEwX1cWMktERkflkad3pqXT52AIqpnddXy2KexJJiXAZSgg1wzYslwKeG%2BBpvVLvc1X5fPZOioKWT%2BpdpbC%2FPwgqPqx4h1ez5Jr8yuNhW6v6vpT%2BJCGVpvlC7tF%2FNLKjfYSYqlqgJTmqMz8nr5gH2OVLmRlaN8QHDuPUUxdtUiizexIriVgv9hJFtU6daYxGygiuUJ5jpVEPrFTBckfIXkTlWBVXvVwQjxeb2VdkPJkY64tiDANuwA5sXf07uSSeHIIq%2FteekA9MFzh72UBEmMb4LXXvV8f6H%2FS3ElCh9%2F7SgbTL2U3uBFDm0o1cho4ghlWpIPel4plDksHi%2FefCtKVKd0Gh0yce1Y3SSJOOgrTL%2FMV1lf8zMWFRgJieqY113Vq1jhZsJE0oZleVwmWZRHeHF2UvfzgA4o%2FVeq2AF%2FFQUUprApvPoENH1HGEm26MMyL38QGOqUBJWHmfIk0lOm4RtzPIdCy%2BLJvTd5gNgKLMCDCkAQOEw95sAA7fu0dZIoR1umei4wCgxqHkxDDqzzpIW2yH83l11rpc5EPuNRNCPSGgMBbsjiHpCevVaiXO9YfcQi0%2FA%2FY5wSMHKtO1YerWSdBUtEEWijQvkcF2JAk4hQUcawnAwf0xy0%2FKmv2SDyTw6k36sFkYITUIKMRIumt9808KIHzYuG1Ch%2Bo&X-Amz-Signature=4e359846df22e9927389230e5b0467054cb708119d0469acca51c504de9d93ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SHZYTPW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiU8k3vsqLgrxCcI4tcbvxkFQYzliSrfCh1AGTCyMHwQIgWSTrjIKqhpH7uAslRj7XlcvkWsw%2BQ2jtAZNCjyyaoO8qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWGF%2FjYRpVyb7akpCrcA7UiRS%2F2tAVKF9cUoYomNsR%2F720IVvGPQ%2FO47QVb6NV2LxgWUgzTFse4dSvsVCYfGM2ILY%2FAMn9YwHHTN90WJBGN5nRPOHjEFAXztyh2lIeoLjyb%2BFo6wjnU4CDMhq5q45AhwwVEAnRKoY%2FwfoPCB72zYFr8ezKVLJnDrOpIcI0UuIiuWoJ3OxYgV%2Bku6BEwX1cWMktERkflkad3pqXT52AIqpnddXy2KexJJiXAZSgg1wzYslwKeG%2BBpvVLvc1X5fPZOioKWT%2BpdpbC%2FPwgqPqx4h1ez5Jr8yuNhW6v6vpT%2BJCGVpvlC7tF%2FNLKjfYSYqlqgJTmqMz8nr5gH2OVLmRlaN8QHDuPUUxdtUiizexIriVgv9hJFtU6daYxGygiuUJ5jpVEPrFTBckfIXkTlWBVXvVwQjxeb2VdkPJkY64tiDANuwA5sXf07uSSeHIIq%2FteekA9MFzh72UBEmMb4LXXvV8f6H%2FS3ElCh9%2F7SgbTL2U3uBFDm0o1cho4ghlWpIPel4plDksHi%2FefCtKVKd0Gh0yce1Y3SSJOOgrTL%2FMV1lf8zMWFRgJieqY113Vq1jhZsJE0oZleVwmWZRHeHF2UvfzgA4o%2FVeq2AF%2FFQUUprApvPoENH1HGEm26MMyL38QGOqUBJWHmfIk0lOm4RtzPIdCy%2BLJvTd5gNgKLMCDCkAQOEw95sAA7fu0dZIoR1umei4wCgxqHkxDDqzzpIW2yH83l11rpc5EPuNRNCPSGgMBbsjiHpCevVaiXO9YfcQi0%2FA%2FY5wSMHKtO1YerWSdBUtEEWijQvkcF2JAk4hQUcawnAwf0xy0%2FKmv2SDyTw6k36sFkYITUIKMRIumt9808KIHzYuG1Ch%2Bo&X-Amz-Signature=f79cc3984cb0d194648449b9a085417c074a56a8c412e3c70bfdc3df2c9f8cd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SHZYTPW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiU8k3vsqLgrxCcI4tcbvxkFQYzliSrfCh1AGTCyMHwQIgWSTrjIKqhpH7uAslRj7XlcvkWsw%2BQ2jtAZNCjyyaoO8qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWGF%2FjYRpVyb7akpCrcA7UiRS%2F2tAVKF9cUoYomNsR%2F720IVvGPQ%2FO47QVb6NV2LxgWUgzTFse4dSvsVCYfGM2ILY%2FAMn9YwHHTN90WJBGN5nRPOHjEFAXztyh2lIeoLjyb%2BFo6wjnU4CDMhq5q45AhwwVEAnRKoY%2FwfoPCB72zYFr8ezKVLJnDrOpIcI0UuIiuWoJ3OxYgV%2Bku6BEwX1cWMktERkflkad3pqXT52AIqpnddXy2KexJJiXAZSgg1wzYslwKeG%2BBpvVLvc1X5fPZOioKWT%2BpdpbC%2FPwgqPqx4h1ez5Jr8yuNhW6v6vpT%2BJCGVpvlC7tF%2FNLKjfYSYqlqgJTmqMz8nr5gH2OVLmRlaN8QHDuPUUxdtUiizexIriVgv9hJFtU6daYxGygiuUJ5jpVEPrFTBckfIXkTlWBVXvVwQjxeb2VdkPJkY64tiDANuwA5sXf07uSSeHIIq%2FteekA9MFzh72UBEmMb4LXXvV8f6H%2FS3ElCh9%2F7SgbTL2U3uBFDm0o1cho4ghlWpIPel4plDksHi%2FefCtKVKd0Gh0yce1Y3SSJOOgrTL%2FMV1lf8zMWFRgJieqY113Vq1jhZsJE0oZleVwmWZRHeHF2UvfzgA4o%2FVeq2AF%2FFQUUprApvPoENH1HGEm26MMyL38QGOqUBJWHmfIk0lOm4RtzPIdCy%2BLJvTd5gNgKLMCDCkAQOEw95sAA7fu0dZIoR1umei4wCgxqHkxDDqzzpIW2yH83l11rpc5EPuNRNCPSGgMBbsjiHpCevVaiXO9YfcQi0%2FA%2FY5wSMHKtO1YerWSdBUtEEWijQvkcF2JAk4hQUcawnAwf0xy0%2FKmv2SDyTw6k36sFkYITUIKMRIumt9808KIHzYuG1Ch%2Bo&X-Amz-Signature=afa1d69b7b9479cfb7633ed490fcc4b24293ef64154ae4a7939c663aa167da6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SHZYTPW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiU8k3vsqLgrxCcI4tcbvxkFQYzliSrfCh1AGTCyMHwQIgWSTrjIKqhpH7uAslRj7XlcvkWsw%2BQ2jtAZNCjyyaoO8qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWGF%2FjYRpVyb7akpCrcA7UiRS%2F2tAVKF9cUoYomNsR%2F720IVvGPQ%2FO47QVb6NV2LxgWUgzTFse4dSvsVCYfGM2ILY%2FAMn9YwHHTN90WJBGN5nRPOHjEFAXztyh2lIeoLjyb%2BFo6wjnU4CDMhq5q45AhwwVEAnRKoY%2FwfoPCB72zYFr8ezKVLJnDrOpIcI0UuIiuWoJ3OxYgV%2Bku6BEwX1cWMktERkflkad3pqXT52AIqpnddXy2KexJJiXAZSgg1wzYslwKeG%2BBpvVLvc1X5fPZOioKWT%2BpdpbC%2FPwgqPqx4h1ez5Jr8yuNhW6v6vpT%2BJCGVpvlC7tF%2FNLKjfYSYqlqgJTmqMz8nr5gH2OVLmRlaN8QHDuPUUxdtUiizexIriVgv9hJFtU6daYxGygiuUJ5jpVEPrFTBckfIXkTlWBVXvVwQjxeb2VdkPJkY64tiDANuwA5sXf07uSSeHIIq%2FteekA9MFzh72UBEmMb4LXXvV8f6H%2FS3ElCh9%2F7SgbTL2U3uBFDm0o1cho4ghlWpIPel4plDksHi%2FefCtKVKd0Gh0yce1Y3SSJOOgrTL%2FMV1lf8zMWFRgJieqY113Vq1jhZsJE0oZleVwmWZRHeHF2UvfzgA4o%2FVeq2AF%2FFQUUprApvPoENH1HGEm26MMyL38QGOqUBJWHmfIk0lOm4RtzPIdCy%2BLJvTd5gNgKLMCDCkAQOEw95sAA7fu0dZIoR1umei4wCgxqHkxDDqzzpIW2yH83l11rpc5EPuNRNCPSGgMBbsjiHpCevVaiXO9YfcQi0%2FA%2FY5wSMHKtO1YerWSdBUtEEWijQvkcF2JAk4hQUcawnAwf0xy0%2FKmv2SDyTw6k36sFkYITUIKMRIumt9808KIHzYuG1Ch%2Bo&X-Amz-Signature=9d3f7c8917f621c6864d164f770559fa5c1c757e7041294d9c6d9aa7f0945710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SHZYTPW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiU8k3vsqLgrxCcI4tcbvxkFQYzliSrfCh1AGTCyMHwQIgWSTrjIKqhpH7uAslRj7XlcvkWsw%2BQ2jtAZNCjyyaoO8qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWGF%2FjYRpVyb7akpCrcA7UiRS%2F2tAVKF9cUoYomNsR%2F720IVvGPQ%2FO47QVb6NV2LxgWUgzTFse4dSvsVCYfGM2ILY%2FAMn9YwHHTN90WJBGN5nRPOHjEFAXztyh2lIeoLjyb%2BFo6wjnU4CDMhq5q45AhwwVEAnRKoY%2FwfoPCB72zYFr8ezKVLJnDrOpIcI0UuIiuWoJ3OxYgV%2Bku6BEwX1cWMktERkflkad3pqXT52AIqpnddXy2KexJJiXAZSgg1wzYslwKeG%2BBpvVLvc1X5fPZOioKWT%2BpdpbC%2FPwgqPqx4h1ez5Jr8yuNhW6v6vpT%2BJCGVpvlC7tF%2FNLKjfYSYqlqgJTmqMz8nr5gH2OVLmRlaN8QHDuPUUxdtUiizexIriVgv9hJFtU6daYxGygiuUJ5jpVEPrFTBckfIXkTlWBVXvVwQjxeb2VdkPJkY64tiDANuwA5sXf07uSSeHIIq%2FteekA9MFzh72UBEmMb4LXXvV8f6H%2FS3ElCh9%2F7SgbTL2U3uBFDm0o1cho4ghlWpIPel4plDksHi%2FefCtKVKd0Gh0yce1Y3SSJOOgrTL%2FMV1lf8zMWFRgJieqY113Vq1jhZsJE0oZleVwmWZRHeHF2UvfzgA4o%2FVeq2AF%2FFQUUprApvPoENH1HGEm26MMyL38QGOqUBJWHmfIk0lOm4RtzPIdCy%2BLJvTd5gNgKLMCDCkAQOEw95sAA7fu0dZIoR1umei4wCgxqHkxDDqzzpIW2yH83l11rpc5EPuNRNCPSGgMBbsjiHpCevVaiXO9YfcQi0%2FA%2FY5wSMHKtO1YerWSdBUtEEWijQvkcF2JAk4hQUcawnAwf0xy0%2FKmv2SDyTw6k36sFkYITUIKMRIumt9808KIHzYuG1Ch%2Bo&X-Amz-Signature=e2019601b43092ea245ecd8706c58bc4325f47d450d2b44b6b74e021f8655e09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SHZYTPW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiU8k3vsqLgrxCcI4tcbvxkFQYzliSrfCh1AGTCyMHwQIgWSTrjIKqhpH7uAslRj7XlcvkWsw%2BQ2jtAZNCjyyaoO8qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWGF%2FjYRpVyb7akpCrcA7UiRS%2F2tAVKF9cUoYomNsR%2F720IVvGPQ%2FO47QVb6NV2LxgWUgzTFse4dSvsVCYfGM2ILY%2FAMn9YwHHTN90WJBGN5nRPOHjEFAXztyh2lIeoLjyb%2BFo6wjnU4CDMhq5q45AhwwVEAnRKoY%2FwfoPCB72zYFr8ezKVLJnDrOpIcI0UuIiuWoJ3OxYgV%2Bku6BEwX1cWMktERkflkad3pqXT52AIqpnddXy2KexJJiXAZSgg1wzYslwKeG%2BBpvVLvc1X5fPZOioKWT%2BpdpbC%2FPwgqPqx4h1ez5Jr8yuNhW6v6vpT%2BJCGVpvlC7tF%2FNLKjfYSYqlqgJTmqMz8nr5gH2OVLmRlaN8QHDuPUUxdtUiizexIriVgv9hJFtU6daYxGygiuUJ5jpVEPrFTBckfIXkTlWBVXvVwQjxeb2VdkPJkY64tiDANuwA5sXf07uSSeHIIq%2FteekA9MFzh72UBEmMb4LXXvV8f6H%2FS3ElCh9%2F7SgbTL2U3uBFDm0o1cho4ghlWpIPel4plDksHi%2FefCtKVKd0Gh0yce1Y3SSJOOgrTL%2FMV1lf8zMWFRgJieqY113Vq1jhZsJE0oZleVwmWZRHeHF2UvfzgA4o%2FVeq2AF%2FFQUUprApvPoENH1HGEm26MMyL38QGOqUBJWHmfIk0lOm4RtzPIdCy%2BLJvTd5gNgKLMCDCkAQOEw95sAA7fu0dZIoR1umei4wCgxqHkxDDqzzpIW2yH83l11rpc5EPuNRNCPSGgMBbsjiHpCevVaiXO9YfcQi0%2FA%2FY5wSMHKtO1YerWSdBUtEEWijQvkcF2JAk4hQUcawnAwf0xy0%2FKmv2SDyTw6k36sFkYITUIKMRIumt9808KIHzYuG1Ch%2Bo&X-Amz-Signature=ca4d2920d2f8e4fe05fc06e9356127d1fca3b5c6bc2e5b20a0ecd2d569189c5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SHZYTPW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiU8k3vsqLgrxCcI4tcbvxkFQYzliSrfCh1AGTCyMHwQIgWSTrjIKqhpH7uAslRj7XlcvkWsw%2BQ2jtAZNCjyyaoO8qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWGF%2FjYRpVyb7akpCrcA7UiRS%2F2tAVKF9cUoYomNsR%2F720IVvGPQ%2FO47QVb6NV2LxgWUgzTFse4dSvsVCYfGM2ILY%2FAMn9YwHHTN90WJBGN5nRPOHjEFAXztyh2lIeoLjyb%2BFo6wjnU4CDMhq5q45AhwwVEAnRKoY%2FwfoPCB72zYFr8ezKVLJnDrOpIcI0UuIiuWoJ3OxYgV%2Bku6BEwX1cWMktERkflkad3pqXT52AIqpnddXy2KexJJiXAZSgg1wzYslwKeG%2BBpvVLvc1X5fPZOioKWT%2BpdpbC%2FPwgqPqx4h1ez5Jr8yuNhW6v6vpT%2BJCGVpvlC7tF%2FNLKjfYSYqlqgJTmqMz8nr5gH2OVLmRlaN8QHDuPUUxdtUiizexIriVgv9hJFtU6daYxGygiuUJ5jpVEPrFTBckfIXkTlWBVXvVwQjxeb2VdkPJkY64tiDANuwA5sXf07uSSeHIIq%2FteekA9MFzh72UBEmMb4LXXvV8f6H%2FS3ElCh9%2F7SgbTL2U3uBFDm0o1cho4ghlWpIPel4plDksHi%2FefCtKVKd0Gh0yce1Y3SSJOOgrTL%2FMV1lf8zMWFRgJieqY113Vq1jhZsJE0oZleVwmWZRHeHF2UvfzgA4o%2FVeq2AF%2FFQUUprApvPoENH1HGEm26MMyL38QGOqUBJWHmfIk0lOm4RtzPIdCy%2BLJvTd5gNgKLMCDCkAQOEw95sAA7fu0dZIoR1umei4wCgxqHkxDDqzzpIW2yH83l11rpc5EPuNRNCPSGgMBbsjiHpCevVaiXO9YfcQi0%2FA%2FY5wSMHKtO1YerWSdBUtEEWijQvkcF2JAk4hQUcawnAwf0xy0%2FKmv2SDyTw6k36sFkYITUIKMRIumt9808KIHzYuG1Ch%2Bo&X-Amz-Signature=afa1d69b7b9479cfb7633ed490fcc4b24293ef64154ae4a7939c663aa167da6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SHZYTPW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiU8k3vsqLgrxCcI4tcbvxkFQYzliSrfCh1AGTCyMHwQIgWSTrjIKqhpH7uAslRj7XlcvkWsw%2BQ2jtAZNCjyyaoO8qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWGF%2FjYRpVyb7akpCrcA7UiRS%2F2tAVKF9cUoYomNsR%2F720IVvGPQ%2FO47QVb6NV2LxgWUgzTFse4dSvsVCYfGM2ILY%2FAMn9YwHHTN90WJBGN5nRPOHjEFAXztyh2lIeoLjyb%2BFo6wjnU4CDMhq5q45AhwwVEAnRKoY%2FwfoPCB72zYFr8ezKVLJnDrOpIcI0UuIiuWoJ3OxYgV%2Bku6BEwX1cWMktERkflkad3pqXT52AIqpnddXy2KexJJiXAZSgg1wzYslwKeG%2BBpvVLvc1X5fPZOioKWT%2BpdpbC%2FPwgqPqx4h1ez5Jr8yuNhW6v6vpT%2BJCGVpvlC7tF%2FNLKjfYSYqlqgJTmqMz8nr5gH2OVLmRlaN8QHDuPUUxdtUiizexIriVgv9hJFtU6daYxGygiuUJ5jpVEPrFTBckfIXkTlWBVXvVwQjxeb2VdkPJkY64tiDANuwA5sXf07uSSeHIIq%2FteekA9MFzh72UBEmMb4LXXvV8f6H%2FS3ElCh9%2F7SgbTL2U3uBFDm0o1cho4ghlWpIPel4plDksHi%2FefCtKVKd0Gh0yce1Y3SSJOOgrTL%2FMV1lf8zMWFRgJieqY113Vq1jhZsJE0oZleVwmWZRHeHF2UvfzgA4o%2FVeq2AF%2FFQUUprApvPoENH1HGEm26MMyL38QGOqUBJWHmfIk0lOm4RtzPIdCy%2BLJvTd5gNgKLMCDCkAQOEw95sAA7fu0dZIoR1umei4wCgxqHkxDDqzzpIW2yH83l11rpc5EPuNRNCPSGgMBbsjiHpCevVaiXO9YfcQi0%2FA%2FY5wSMHKtO1YerWSdBUtEEWijQvkcF2JAk4hQUcawnAwf0xy0%2FKmv2SDyTw6k36sFkYITUIKMRIumt9808KIHzYuG1Ch%2Bo&X-Amz-Signature=c5420cb46e583a612db67538e7689e6c3379795ccbba0aedb7a02adee31d1a0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SHZYTPW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiU8k3vsqLgrxCcI4tcbvxkFQYzliSrfCh1AGTCyMHwQIgWSTrjIKqhpH7uAslRj7XlcvkWsw%2BQ2jtAZNCjyyaoO8qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWGF%2FjYRpVyb7akpCrcA7UiRS%2F2tAVKF9cUoYomNsR%2F720IVvGPQ%2FO47QVb6NV2LxgWUgzTFse4dSvsVCYfGM2ILY%2FAMn9YwHHTN90WJBGN5nRPOHjEFAXztyh2lIeoLjyb%2BFo6wjnU4CDMhq5q45AhwwVEAnRKoY%2FwfoPCB72zYFr8ezKVLJnDrOpIcI0UuIiuWoJ3OxYgV%2Bku6BEwX1cWMktERkflkad3pqXT52AIqpnddXy2KexJJiXAZSgg1wzYslwKeG%2BBpvVLvc1X5fPZOioKWT%2BpdpbC%2FPwgqPqx4h1ez5Jr8yuNhW6v6vpT%2BJCGVpvlC7tF%2FNLKjfYSYqlqgJTmqMz8nr5gH2OVLmRlaN8QHDuPUUxdtUiizexIriVgv9hJFtU6daYxGygiuUJ5jpVEPrFTBckfIXkTlWBVXvVwQjxeb2VdkPJkY64tiDANuwA5sXf07uSSeHIIq%2FteekA9MFzh72UBEmMb4LXXvV8f6H%2FS3ElCh9%2F7SgbTL2U3uBFDm0o1cho4ghlWpIPel4plDksHi%2FefCtKVKd0Gh0yce1Y3SSJOOgrTL%2FMV1lf8zMWFRgJieqY113Vq1jhZsJE0oZleVwmWZRHeHF2UvfzgA4o%2FVeq2AF%2FFQUUprApvPoENH1HGEm26MMyL38QGOqUBJWHmfIk0lOm4RtzPIdCy%2BLJvTd5gNgKLMCDCkAQOEw95sAA7fu0dZIoR1umei4wCgxqHkxDDqzzpIW2yH83l11rpc5EPuNRNCPSGgMBbsjiHpCevVaiXO9YfcQi0%2FA%2FY5wSMHKtO1YerWSdBUtEEWijQvkcF2JAk4hQUcawnAwf0xy0%2FKmv2SDyTw6k36sFkYITUIKMRIumt9808KIHzYuG1Ch%2Bo&X-Amz-Signature=c1eb44705cd8a47ad4dddbc0fbfc5f678b10c57ef6de5ea6a751db28d32baeae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SHZYTPW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiU8k3vsqLgrxCcI4tcbvxkFQYzliSrfCh1AGTCyMHwQIgWSTrjIKqhpH7uAslRj7XlcvkWsw%2BQ2jtAZNCjyyaoO8qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWGF%2FjYRpVyb7akpCrcA7UiRS%2F2tAVKF9cUoYomNsR%2F720IVvGPQ%2FO47QVb6NV2LxgWUgzTFse4dSvsVCYfGM2ILY%2FAMn9YwHHTN90WJBGN5nRPOHjEFAXztyh2lIeoLjyb%2BFo6wjnU4CDMhq5q45AhwwVEAnRKoY%2FwfoPCB72zYFr8ezKVLJnDrOpIcI0UuIiuWoJ3OxYgV%2Bku6BEwX1cWMktERkflkad3pqXT52AIqpnddXy2KexJJiXAZSgg1wzYslwKeG%2BBpvVLvc1X5fPZOioKWT%2BpdpbC%2FPwgqPqx4h1ez5Jr8yuNhW6v6vpT%2BJCGVpvlC7tF%2FNLKjfYSYqlqgJTmqMz8nr5gH2OVLmRlaN8QHDuPUUxdtUiizexIriVgv9hJFtU6daYxGygiuUJ5jpVEPrFTBckfIXkTlWBVXvVwQjxeb2VdkPJkY64tiDANuwA5sXf07uSSeHIIq%2FteekA9MFzh72UBEmMb4LXXvV8f6H%2FS3ElCh9%2F7SgbTL2U3uBFDm0o1cho4ghlWpIPel4plDksHi%2FefCtKVKd0Gh0yce1Y3SSJOOgrTL%2FMV1lf8zMWFRgJieqY113Vq1jhZsJE0oZleVwmWZRHeHF2UvfzgA4o%2FVeq2AF%2FFQUUprApvPoENH1HGEm26MMyL38QGOqUBJWHmfIk0lOm4RtzPIdCy%2BLJvTd5gNgKLMCDCkAQOEw95sAA7fu0dZIoR1umei4wCgxqHkxDDqzzpIW2yH83l11rpc5EPuNRNCPSGgMBbsjiHpCevVaiXO9YfcQi0%2FA%2FY5wSMHKtO1YerWSdBUtEEWijQvkcF2JAk4hQUcawnAwf0xy0%2FKmv2SDyTw6k36sFkYITUIKMRIumt9808KIHzYuG1Ch%2Bo&X-Amz-Signature=0c2964b2d69209f25a8a95b295a23ef9ee6ad68f1a94c18943264d05c6492c5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
