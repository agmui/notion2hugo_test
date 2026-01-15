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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42DSWZV%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCvnErcrMjSVCujwIdx6yX72L2gYMdy05u7DQyecIZgwgIgHa6sLM%2BK9BxLYS3kEYZHBeOrpaU4lXcPgf1AhfAz1mYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJNnK2NghmlIMlylDyrcA9GE10PAFiAfrZW0bHe2r8YdBceoeOIZqqvERJq4PARv8nv5bJ2%2BAsPdc1gy4ISBuHtSQn9BzVtizU%2BrxlK3mehQbPFOQ43CoVbiJXgYHZFVzZn1mjsDUeeosja8%2FXLx%2BObwzTxc8rUFBVxliMgxDq766fykqu0SfeWokQB2qr0QtFg5SoJD%2FHYjcvs9V5P584zv9eVlfwufz4ajMH8ra6AoqjI5iOILZ4ZBHEu8r%2Fo8yOoNkZe4EfECGV9ICFOipQ0KHiJ7YhXxyvEOtCB1iGOtuATIrr3UY6Y8%2FBW75%2F%2FPWHln%2Bt3HYFzlGib1eUKw29CUOD2GvrxJOPnNNew3emnR3ufQyBjHsQREu93ZYN9FIpzWomHMelwZb34LxaEHGVEFls3PZOBEhP6Qrz%2Frpu5YsHU%2BQKKQIVrEqDpNUn6fWp%2BqTAZWa4zDGR5DcseX%2BGt5N8%2FUYcDvOJdo3G1aIE0egT6GenV%2FNhhmEtlzPDJ%2BWoASRMC1ZZlUTAgBuNijSwdqWLBw4haRxRdZs0tUMReKtYp%2BoHyB5eMNQu4Y5zKQKcUvZ9bIIu7jXGRUreIqdJWqoTEKecv7%2Fb8gFwmVmErjMVCRjLizZPIiTImPdk3U9l9lXoVIV2%2FC1opbMOn%2BoMsGOqUBM9HxhVxlIIYbeP%2BUu5F1JoadI6PhJflk32VtPDn%2FtO7Oj0bEe%2F75xPkEth2kv3d%2FjOQMFLL085KJdoI4Joauk4HfPYF1PEKV7VfueSlEJKVVvvXWfws%2BFNHlxmU3C4czfILG7zqHEh1STxau6B0GleGsG6Jqzy%2FVWHsfrN8iBK4r9ukqcGIlehM0ROPiJj%2BG6%2BGPJyAJemZzaAUmUc5d9JCA98mf&X-Amz-Signature=85f1a042d4623f729a04216e4d11a2ddd284308c34db727e65bd2c26100bf406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42DSWZV%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCvnErcrMjSVCujwIdx6yX72L2gYMdy05u7DQyecIZgwgIgHa6sLM%2BK9BxLYS3kEYZHBeOrpaU4lXcPgf1AhfAz1mYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJNnK2NghmlIMlylDyrcA9GE10PAFiAfrZW0bHe2r8YdBceoeOIZqqvERJq4PARv8nv5bJ2%2BAsPdc1gy4ISBuHtSQn9BzVtizU%2BrxlK3mehQbPFOQ43CoVbiJXgYHZFVzZn1mjsDUeeosja8%2FXLx%2BObwzTxc8rUFBVxliMgxDq766fykqu0SfeWokQB2qr0QtFg5SoJD%2FHYjcvs9V5P584zv9eVlfwufz4ajMH8ra6AoqjI5iOILZ4ZBHEu8r%2Fo8yOoNkZe4EfECGV9ICFOipQ0KHiJ7YhXxyvEOtCB1iGOtuATIrr3UY6Y8%2FBW75%2F%2FPWHln%2Bt3HYFzlGib1eUKw29CUOD2GvrxJOPnNNew3emnR3ufQyBjHsQREu93ZYN9FIpzWomHMelwZb34LxaEHGVEFls3PZOBEhP6Qrz%2Frpu5YsHU%2BQKKQIVrEqDpNUn6fWp%2BqTAZWa4zDGR5DcseX%2BGt5N8%2FUYcDvOJdo3G1aIE0egT6GenV%2FNhhmEtlzPDJ%2BWoASRMC1ZZlUTAgBuNijSwdqWLBw4haRxRdZs0tUMReKtYp%2BoHyB5eMNQu4Y5zKQKcUvZ9bIIu7jXGRUreIqdJWqoTEKecv7%2Fb8gFwmVmErjMVCRjLizZPIiTImPdk3U9l9lXoVIV2%2FC1opbMOn%2BoMsGOqUBM9HxhVxlIIYbeP%2BUu5F1JoadI6PhJflk32VtPDn%2FtO7Oj0bEe%2F75xPkEth2kv3d%2FjOQMFLL085KJdoI4Joauk4HfPYF1PEKV7VfueSlEJKVVvvXWfws%2BFNHlxmU3C4czfILG7zqHEh1STxau6B0GleGsG6Jqzy%2FVWHsfrN8iBK4r9ukqcGIlehM0ROPiJj%2BG6%2BGPJyAJemZzaAUmUc5d9JCA98mf&X-Amz-Signature=e0a10a492769e57d8f4acfdefa5ad433611726316bea566581b42f830a32521e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42DSWZV%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCvnErcrMjSVCujwIdx6yX72L2gYMdy05u7DQyecIZgwgIgHa6sLM%2BK9BxLYS3kEYZHBeOrpaU4lXcPgf1AhfAz1mYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJNnK2NghmlIMlylDyrcA9GE10PAFiAfrZW0bHe2r8YdBceoeOIZqqvERJq4PARv8nv5bJ2%2BAsPdc1gy4ISBuHtSQn9BzVtizU%2BrxlK3mehQbPFOQ43CoVbiJXgYHZFVzZn1mjsDUeeosja8%2FXLx%2BObwzTxc8rUFBVxliMgxDq766fykqu0SfeWokQB2qr0QtFg5SoJD%2FHYjcvs9V5P584zv9eVlfwufz4ajMH8ra6AoqjI5iOILZ4ZBHEu8r%2Fo8yOoNkZe4EfECGV9ICFOipQ0KHiJ7YhXxyvEOtCB1iGOtuATIrr3UY6Y8%2FBW75%2F%2FPWHln%2Bt3HYFzlGib1eUKw29CUOD2GvrxJOPnNNew3emnR3ufQyBjHsQREu93ZYN9FIpzWomHMelwZb34LxaEHGVEFls3PZOBEhP6Qrz%2Frpu5YsHU%2BQKKQIVrEqDpNUn6fWp%2BqTAZWa4zDGR5DcseX%2BGt5N8%2FUYcDvOJdo3G1aIE0egT6GenV%2FNhhmEtlzPDJ%2BWoASRMC1ZZlUTAgBuNijSwdqWLBw4haRxRdZs0tUMReKtYp%2BoHyB5eMNQu4Y5zKQKcUvZ9bIIu7jXGRUreIqdJWqoTEKecv7%2Fb8gFwmVmErjMVCRjLizZPIiTImPdk3U9l9lXoVIV2%2FC1opbMOn%2BoMsGOqUBM9HxhVxlIIYbeP%2BUu5F1JoadI6PhJflk32VtPDn%2FtO7Oj0bEe%2F75xPkEth2kv3d%2FjOQMFLL085KJdoI4Joauk4HfPYF1PEKV7VfueSlEJKVVvvXWfws%2BFNHlxmU3C4czfILG7zqHEh1STxau6B0GleGsG6Jqzy%2FVWHsfrN8iBK4r9ukqcGIlehM0ROPiJj%2BG6%2BGPJyAJemZzaAUmUc5d9JCA98mf&X-Amz-Signature=7fd8cb8f7948d1762879d05e082d71f70d5b2e5a22d52223596f2f79708fcc19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42DSWZV%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCvnErcrMjSVCujwIdx6yX72L2gYMdy05u7DQyecIZgwgIgHa6sLM%2BK9BxLYS3kEYZHBeOrpaU4lXcPgf1AhfAz1mYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJNnK2NghmlIMlylDyrcA9GE10PAFiAfrZW0bHe2r8YdBceoeOIZqqvERJq4PARv8nv5bJ2%2BAsPdc1gy4ISBuHtSQn9BzVtizU%2BrxlK3mehQbPFOQ43CoVbiJXgYHZFVzZn1mjsDUeeosja8%2FXLx%2BObwzTxc8rUFBVxliMgxDq766fykqu0SfeWokQB2qr0QtFg5SoJD%2FHYjcvs9V5P584zv9eVlfwufz4ajMH8ra6AoqjI5iOILZ4ZBHEu8r%2Fo8yOoNkZe4EfECGV9ICFOipQ0KHiJ7YhXxyvEOtCB1iGOtuATIrr3UY6Y8%2FBW75%2F%2FPWHln%2Bt3HYFzlGib1eUKw29CUOD2GvrxJOPnNNew3emnR3ufQyBjHsQREu93ZYN9FIpzWomHMelwZb34LxaEHGVEFls3PZOBEhP6Qrz%2Frpu5YsHU%2BQKKQIVrEqDpNUn6fWp%2BqTAZWa4zDGR5DcseX%2BGt5N8%2FUYcDvOJdo3G1aIE0egT6GenV%2FNhhmEtlzPDJ%2BWoASRMC1ZZlUTAgBuNijSwdqWLBw4haRxRdZs0tUMReKtYp%2BoHyB5eMNQu4Y5zKQKcUvZ9bIIu7jXGRUreIqdJWqoTEKecv7%2Fb8gFwmVmErjMVCRjLizZPIiTImPdk3U9l9lXoVIV2%2FC1opbMOn%2BoMsGOqUBM9HxhVxlIIYbeP%2BUu5F1JoadI6PhJflk32VtPDn%2FtO7Oj0bEe%2F75xPkEth2kv3d%2FjOQMFLL085KJdoI4Joauk4HfPYF1PEKV7VfueSlEJKVVvvXWfws%2BFNHlxmU3C4czfILG7zqHEh1STxau6B0GleGsG6Jqzy%2FVWHsfrN8iBK4r9ukqcGIlehM0ROPiJj%2BG6%2BGPJyAJemZzaAUmUc5d9JCA98mf&X-Amz-Signature=1a7f4f54d2567c9679d0d08d8fa417828a9cc83a73d40fb45150da90ebe0f37f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42DSWZV%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCvnErcrMjSVCujwIdx6yX72L2gYMdy05u7DQyecIZgwgIgHa6sLM%2BK9BxLYS3kEYZHBeOrpaU4lXcPgf1AhfAz1mYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJNnK2NghmlIMlylDyrcA9GE10PAFiAfrZW0bHe2r8YdBceoeOIZqqvERJq4PARv8nv5bJ2%2BAsPdc1gy4ISBuHtSQn9BzVtizU%2BrxlK3mehQbPFOQ43CoVbiJXgYHZFVzZn1mjsDUeeosja8%2FXLx%2BObwzTxc8rUFBVxliMgxDq766fykqu0SfeWokQB2qr0QtFg5SoJD%2FHYjcvs9V5P584zv9eVlfwufz4ajMH8ra6AoqjI5iOILZ4ZBHEu8r%2Fo8yOoNkZe4EfECGV9ICFOipQ0KHiJ7YhXxyvEOtCB1iGOtuATIrr3UY6Y8%2FBW75%2F%2FPWHln%2Bt3HYFzlGib1eUKw29CUOD2GvrxJOPnNNew3emnR3ufQyBjHsQREu93ZYN9FIpzWomHMelwZb34LxaEHGVEFls3PZOBEhP6Qrz%2Frpu5YsHU%2BQKKQIVrEqDpNUn6fWp%2BqTAZWa4zDGR5DcseX%2BGt5N8%2FUYcDvOJdo3G1aIE0egT6GenV%2FNhhmEtlzPDJ%2BWoASRMC1ZZlUTAgBuNijSwdqWLBw4haRxRdZs0tUMReKtYp%2BoHyB5eMNQu4Y5zKQKcUvZ9bIIu7jXGRUreIqdJWqoTEKecv7%2Fb8gFwmVmErjMVCRjLizZPIiTImPdk3U9l9lXoVIV2%2FC1opbMOn%2BoMsGOqUBM9HxhVxlIIYbeP%2BUu5F1JoadI6PhJflk32VtPDn%2FtO7Oj0bEe%2F75xPkEth2kv3d%2FjOQMFLL085KJdoI4Joauk4HfPYF1PEKV7VfueSlEJKVVvvXWfws%2BFNHlxmU3C4czfILG7zqHEh1STxau6B0GleGsG6Jqzy%2FVWHsfrN8iBK4r9ukqcGIlehM0ROPiJj%2BG6%2BGPJyAJemZzaAUmUc5d9JCA98mf&X-Amz-Signature=8e8728cf591feeeeaffbbc48b043ba3e77f9e9fb4f4fc128170c346c1f8eb8e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42DSWZV%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCvnErcrMjSVCujwIdx6yX72L2gYMdy05u7DQyecIZgwgIgHa6sLM%2BK9BxLYS3kEYZHBeOrpaU4lXcPgf1AhfAz1mYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJNnK2NghmlIMlylDyrcA9GE10PAFiAfrZW0bHe2r8YdBceoeOIZqqvERJq4PARv8nv5bJ2%2BAsPdc1gy4ISBuHtSQn9BzVtizU%2BrxlK3mehQbPFOQ43CoVbiJXgYHZFVzZn1mjsDUeeosja8%2FXLx%2BObwzTxc8rUFBVxliMgxDq766fykqu0SfeWokQB2qr0QtFg5SoJD%2FHYjcvs9V5P584zv9eVlfwufz4ajMH8ra6AoqjI5iOILZ4ZBHEu8r%2Fo8yOoNkZe4EfECGV9ICFOipQ0KHiJ7YhXxyvEOtCB1iGOtuATIrr3UY6Y8%2FBW75%2F%2FPWHln%2Bt3HYFzlGib1eUKw29CUOD2GvrxJOPnNNew3emnR3ufQyBjHsQREu93ZYN9FIpzWomHMelwZb34LxaEHGVEFls3PZOBEhP6Qrz%2Frpu5YsHU%2BQKKQIVrEqDpNUn6fWp%2BqTAZWa4zDGR5DcseX%2BGt5N8%2FUYcDvOJdo3G1aIE0egT6GenV%2FNhhmEtlzPDJ%2BWoASRMC1ZZlUTAgBuNijSwdqWLBw4haRxRdZs0tUMReKtYp%2BoHyB5eMNQu4Y5zKQKcUvZ9bIIu7jXGRUreIqdJWqoTEKecv7%2Fb8gFwmVmErjMVCRjLizZPIiTImPdk3U9l9lXoVIV2%2FC1opbMOn%2BoMsGOqUBM9HxhVxlIIYbeP%2BUu5F1JoadI6PhJflk32VtPDn%2FtO7Oj0bEe%2F75xPkEth2kv3d%2FjOQMFLL085KJdoI4Joauk4HfPYF1PEKV7VfueSlEJKVVvvXWfws%2BFNHlxmU3C4czfILG7zqHEh1STxau6B0GleGsG6Jqzy%2FVWHsfrN8iBK4r9ukqcGIlehM0ROPiJj%2BG6%2BGPJyAJemZzaAUmUc5d9JCA98mf&X-Amz-Signature=963c1014f1af012f445f147fd841053ce95b629856dfc2e541102147d56663df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42DSWZV%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCvnErcrMjSVCujwIdx6yX72L2gYMdy05u7DQyecIZgwgIgHa6sLM%2BK9BxLYS3kEYZHBeOrpaU4lXcPgf1AhfAz1mYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJNnK2NghmlIMlylDyrcA9GE10PAFiAfrZW0bHe2r8YdBceoeOIZqqvERJq4PARv8nv5bJ2%2BAsPdc1gy4ISBuHtSQn9BzVtizU%2BrxlK3mehQbPFOQ43CoVbiJXgYHZFVzZn1mjsDUeeosja8%2FXLx%2BObwzTxc8rUFBVxliMgxDq766fykqu0SfeWokQB2qr0QtFg5SoJD%2FHYjcvs9V5P584zv9eVlfwufz4ajMH8ra6AoqjI5iOILZ4ZBHEu8r%2Fo8yOoNkZe4EfECGV9ICFOipQ0KHiJ7YhXxyvEOtCB1iGOtuATIrr3UY6Y8%2FBW75%2F%2FPWHln%2Bt3HYFzlGib1eUKw29CUOD2GvrxJOPnNNew3emnR3ufQyBjHsQREu93ZYN9FIpzWomHMelwZb34LxaEHGVEFls3PZOBEhP6Qrz%2Frpu5YsHU%2BQKKQIVrEqDpNUn6fWp%2BqTAZWa4zDGR5DcseX%2BGt5N8%2FUYcDvOJdo3G1aIE0egT6GenV%2FNhhmEtlzPDJ%2BWoASRMC1ZZlUTAgBuNijSwdqWLBw4haRxRdZs0tUMReKtYp%2BoHyB5eMNQu4Y5zKQKcUvZ9bIIu7jXGRUreIqdJWqoTEKecv7%2Fb8gFwmVmErjMVCRjLizZPIiTImPdk3U9l9lXoVIV2%2FC1opbMOn%2BoMsGOqUBM9HxhVxlIIYbeP%2BUu5F1JoadI6PhJflk32VtPDn%2FtO7Oj0bEe%2F75xPkEth2kv3d%2FjOQMFLL085KJdoI4Joauk4HfPYF1PEKV7VfueSlEJKVVvvXWfws%2BFNHlxmU3C4czfILG7zqHEh1STxau6B0GleGsG6Jqzy%2FVWHsfrN8iBK4r9ukqcGIlehM0ROPiJj%2BG6%2BGPJyAJemZzaAUmUc5d9JCA98mf&X-Amz-Signature=0a1df5264c2119b2c67b9a093d7d42b4a06f08af16a895ce8fc6ba0df56c57f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42DSWZV%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCvnErcrMjSVCujwIdx6yX72L2gYMdy05u7DQyecIZgwgIgHa6sLM%2BK9BxLYS3kEYZHBeOrpaU4lXcPgf1AhfAz1mYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJNnK2NghmlIMlylDyrcA9GE10PAFiAfrZW0bHe2r8YdBceoeOIZqqvERJq4PARv8nv5bJ2%2BAsPdc1gy4ISBuHtSQn9BzVtizU%2BrxlK3mehQbPFOQ43CoVbiJXgYHZFVzZn1mjsDUeeosja8%2FXLx%2BObwzTxc8rUFBVxliMgxDq766fykqu0SfeWokQB2qr0QtFg5SoJD%2FHYjcvs9V5P584zv9eVlfwufz4ajMH8ra6AoqjI5iOILZ4ZBHEu8r%2Fo8yOoNkZe4EfECGV9ICFOipQ0KHiJ7YhXxyvEOtCB1iGOtuATIrr3UY6Y8%2FBW75%2F%2FPWHln%2Bt3HYFzlGib1eUKw29CUOD2GvrxJOPnNNew3emnR3ufQyBjHsQREu93ZYN9FIpzWomHMelwZb34LxaEHGVEFls3PZOBEhP6Qrz%2Frpu5YsHU%2BQKKQIVrEqDpNUn6fWp%2BqTAZWa4zDGR5DcseX%2BGt5N8%2FUYcDvOJdo3G1aIE0egT6GenV%2FNhhmEtlzPDJ%2BWoASRMC1ZZlUTAgBuNijSwdqWLBw4haRxRdZs0tUMReKtYp%2BoHyB5eMNQu4Y5zKQKcUvZ9bIIu7jXGRUreIqdJWqoTEKecv7%2Fb8gFwmVmErjMVCRjLizZPIiTImPdk3U9l9lXoVIV2%2FC1opbMOn%2BoMsGOqUBM9HxhVxlIIYbeP%2BUu5F1JoadI6PhJflk32VtPDn%2FtO7Oj0bEe%2F75xPkEth2kv3d%2FjOQMFLL085KJdoI4Joauk4HfPYF1PEKV7VfueSlEJKVVvvXWfws%2BFNHlxmU3C4czfILG7zqHEh1STxau6B0GleGsG6Jqzy%2FVWHsfrN8iBK4r9ukqcGIlehM0ROPiJj%2BG6%2BGPJyAJemZzaAUmUc5d9JCA98mf&X-Amz-Signature=c92d02e33083b4b2205fb105b2ad23a072c1eb64a835ca6023f35806de48faad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42DSWZV%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCvnErcrMjSVCujwIdx6yX72L2gYMdy05u7DQyecIZgwgIgHa6sLM%2BK9BxLYS3kEYZHBeOrpaU4lXcPgf1AhfAz1mYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJNnK2NghmlIMlylDyrcA9GE10PAFiAfrZW0bHe2r8YdBceoeOIZqqvERJq4PARv8nv5bJ2%2BAsPdc1gy4ISBuHtSQn9BzVtizU%2BrxlK3mehQbPFOQ43CoVbiJXgYHZFVzZn1mjsDUeeosja8%2FXLx%2BObwzTxc8rUFBVxliMgxDq766fykqu0SfeWokQB2qr0QtFg5SoJD%2FHYjcvs9V5P584zv9eVlfwufz4ajMH8ra6AoqjI5iOILZ4ZBHEu8r%2Fo8yOoNkZe4EfECGV9ICFOipQ0KHiJ7YhXxyvEOtCB1iGOtuATIrr3UY6Y8%2FBW75%2F%2FPWHln%2Bt3HYFzlGib1eUKw29CUOD2GvrxJOPnNNew3emnR3ufQyBjHsQREu93ZYN9FIpzWomHMelwZb34LxaEHGVEFls3PZOBEhP6Qrz%2Frpu5YsHU%2BQKKQIVrEqDpNUn6fWp%2BqTAZWa4zDGR5DcseX%2BGt5N8%2FUYcDvOJdo3G1aIE0egT6GenV%2FNhhmEtlzPDJ%2BWoASRMC1ZZlUTAgBuNijSwdqWLBw4haRxRdZs0tUMReKtYp%2BoHyB5eMNQu4Y5zKQKcUvZ9bIIu7jXGRUreIqdJWqoTEKecv7%2Fb8gFwmVmErjMVCRjLizZPIiTImPdk3U9l9lXoVIV2%2FC1opbMOn%2BoMsGOqUBM9HxhVxlIIYbeP%2BUu5F1JoadI6PhJflk32VtPDn%2FtO7Oj0bEe%2F75xPkEth2kv3d%2FjOQMFLL085KJdoI4Joauk4HfPYF1PEKV7VfueSlEJKVVvvXWfws%2BFNHlxmU3C4czfILG7zqHEh1STxau6B0GleGsG6Jqzy%2FVWHsfrN8iBK4r9ukqcGIlehM0ROPiJj%2BG6%2BGPJyAJemZzaAUmUc5d9JCA98mf&X-Amz-Signature=b97f80277d8c3cfd31d7a425d9d11f2778c1b447d21c660a70a0a0745fef058e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42DSWZV%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCvnErcrMjSVCujwIdx6yX72L2gYMdy05u7DQyecIZgwgIgHa6sLM%2BK9BxLYS3kEYZHBeOrpaU4lXcPgf1AhfAz1mYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJNnK2NghmlIMlylDyrcA9GE10PAFiAfrZW0bHe2r8YdBceoeOIZqqvERJq4PARv8nv5bJ2%2BAsPdc1gy4ISBuHtSQn9BzVtizU%2BrxlK3mehQbPFOQ43CoVbiJXgYHZFVzZn1mjsDUeeosja8%2FXLx%2BObwzTxc8rUFBVxliMgxDq766fykqu0SfeWokQB2qr0QtFg5SoJD%2FHYjcvs9V5P584zv9eVlfwufz4ajMH8ra6AoqjI5iOILZ4ZBHEu8r%2Fo8yOoNkZe4EfECGV9ICFOipQ0KHiJ7YhXxyvEOtCB1iGOtuATIrr3UY6Y8%2FBW75%2F%2FPWHln%2Bt3HYFzlGib1eUKw29CUOD2GvrxJOPnNNew3emnR3ufQyBjHsQREu93ZYN9FIpzWomHMelwZb34LxaEHGVEFls3PZOBEhP6Qrz%2Frpu5YsHU%2BQKKQIVrEqDpNUn6fWp%2BqTAZWa4zDGR5DcseX%2BGt5N8%2FUYcDvOJdo3G1aIE0egT6GenV%2FNhhmEtlzPDJ%2BWoASRMC1ZZlUTAgBuNijSwdqWLBw4haRxRdZs0tUMReKtYp%2BoHyB5eMNQu4Y5zKQKcUvZ9bIIu7jXGRUreIqdJWqoTEKecv7%2Fb8gFwmVmErjMVCRjLizZPIiTImPdk3U9l9lXoVIV2%2FC1opbMOn%2BoMsGOqUBM9HxhVxlIIYbeP%2BUu5F1JoadI6PhJflk32VtPDn%2FtO7Oj0bEe%2F75xPkEth2kv3d%2FjOQMFLL085KJdoI4Joauk4HfPYF1PEKV7VfueSlEJKVVvvXWfws%2BFNHlxmU3C4czfILG7zqHEh1STxau6B0GleGsG6Jqzy%2FVWHsfrN8iBK4r9ukqcGIlehM0ROPiJj%2BG6%2BGPJyAJemZzaAUmUc5d9JCA98mf&X-Amz-Signature=e5421ccd2ea0ea20a53c199cc82f6f9d841fb918d7e9764735c604429fec5fed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCHGJ6LI%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCOL3eDoPKOnz2h3Vvm2PrG6cnNS3uUovIvgJqr%2BolvqwIgU7SSB9Tb9kQmN67oOvbyPIiRnAY9mcU0nG%2FHsOSoyYQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKQi9V51q6uNHUGeqyrcA9ncW6yGRjOd%2FHe4%2FsLAQePP%2B5r119yKpJKWmRAgc79YApJ0tY3cpBd5qCz3ITu0zFT0KfVkLUmSe6uKvuwA4boNYA5UgEemmzWkIZhxSbPt0HoO%2FS8vHSddV5VuHYq%2BuLN0hn7q%2FZd9J1q%2BSbfRBxAQlEHtfm8F9o2lBfngorrCsq5kPLAd1xqyqfjTynVVpRLZ6WTz%2Ba7eabnJhsKtei0r1Xjq4ez4hyO1qDDEojQXCBf8PD3mmghc6zs%2F2rUxwGX%2BxRF1tacf%2FkSoaqp3yrIZVIpSYZ1fVE%2FvSGcHPHdyICE7qCEkv7V2tSc8z0H5fznwErhp5GlGC%2BBCqh2wvuv9P%2BNOKMzEpVkh4KrObbk5O9LhpxsMUnWTGuBTlQV%2Fhudu3QIfqFmiI%2Bvmg7LWm7pOMjwzA%2BTUa6e5zE9pVZ%2FYOT7OZKVf3Sbz4KYZFCb9ngTdijc8lc0hKIjmaD9QypuzMQ6%2FRS%2B7bbsmXA6cyaiguzqPZJRt%2FkNqM2h1TX3r322dbgld1UdUJRHsfGxQqLh8jD%2B53I3MXoxiIxA%2FnqGC3qMUIbCtd0nPvuH6LlfgJepKFm56Yq45IYMUS%2FDVTYIQPYAtJRMNN8hPFtJEaG6WkRX%2BLtxjUek5IrrZMMeAocsGOqUBe8RGIoR1bBFk1CcycW3QKchQzGaRAWxMHnQsrHVESpDLRl5DKvUOL5Ue09e25rYE5rxJ%2BHQXs%2FHvCqBONkZ5s%2BjLXW0iRU%2BsNe%2BhpuJ%2Bk7cNrhz4Pr2m1Dt598NoYjoKDBAHBU7I4mKOYvVw3im6Z66Kyx5BTWSoLLhsQxwGT1lC5Y42q%2F4vQB0B%2BlWdyzmM5tN89wptY9S0VZZIqn7UBDgchCxp&X-Amz-Signature=d5d08cd1af1a29ce39ca96c0286d12497543290f1bdbdaa5ca01fd283d8d3750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MAFJNO6%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIBfGuumXEjS94a9VMgSBFzCHC9D1TDCrcZ59QODBGbLJAiEAmTlXYOtJJtkNd5WxTFy8bH1rNQyfpmrMC6OzlhQEJ10q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDH1SDwYcmBGCI5DiRyrcAyNNbPsca7niR2Pmb4%2FWe3P6ZqakrGOS7xEO%2FipWHhCoSlowX75pIOgBaDvOAdO2%2BPkMCh%2Bo%2BQUBtoppjmTM3cpGG2j%2FaJpSOixyKWh0MBDMD1xat8IdiAUK5qBGWv61RUVyeM4xYZIj5xZYN6qLQBjyF2uEXEll9HoP2PpepAoy29Q%2Blrn7cQy8Ox52KF90Ed%2B0RD1%2FKMKidmxHxrK71n%2FVHrxruFbZy0gKFQJ3%2FQcwbmyJsF%2Be7b3C04J%2FsrYu%2BHghr4l97bOMwPEsfN%2BufUtggoP1eILkWiiaue7%2Bw%2F%2Bb%2Fftb%2F9QHZNqVrmIRn0fVQZwdwR8LC1UImzxuK%2F%2Bj%2F8IImJ4iXg8RceGv1kvAy3%2BXr3B7a44cgpRN8xnmz0LklMbpWqh30H0uCcoIOCq8aWrSrmPT%2FWvC%2Ba2NoE2py77Es1WgH6qYtPOSNWSMFZGoOm7Za4DQZWUD4Jjxj7rNsAkFbsdKh%2BZTjT0eQ7NDgEJKwLpTQU%2FCkgo%2Fs7J8I6YcUJcfDvQfnBEuLnuj38C%2B7DTqKIVForpvuou0znppZK6AGj0TbE0nfdhGIME1NaB4PjMrQin8WJ96pau%2BJZTZYafJgztH3RWsOONIDP99Z7QhlAVQ0bcJIP1bm0ZDMIT%2FoMsGOqUBNApTqbX8TWkD%2F2%2B4ebUXu3KyhtkpTbNxpVsg6OY8dgp2qgAGyyXCPwZzdEl4kf78We057Jg0ts3yXCx%2BIdy7XBmQxB5lkIekwtLuh83tMOYU2xqMkmRyonXti2%2B4wl9FqTneGksaYSP1dufLC7Zn1bV4XtRAqQN8ZcelPtfIiWO3DWg1Y%2FgF%2Fr%2BzTIbL5fwcZlTQJ41cQFn0aLGfLz1h%2Bb3YFheF&X-Amz-Signature=787eea131bb7a52d437147599f82404cf39b22396643662619b877f45c7316a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UFZRFOJ%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDDeh8qvVIb5G1hTnNTSJC7f1yIe3%2BUDHTYzVmVkmQzPQIhAMrGkbQU1kJh5aTjNsamFDB4TmIzagB24Zi5nc1PoRgaKv8DCCoQABoMNjM3NDIzMTgzODA1IgyiskY5Qo6LiDbQGRAq3AP17VKKFt1U3HU5E6VClnmIEa2x4ci4vYajxAB47QVjY06OvbHbzr4BfWPdtz%2FjCQZip9gF9i5AimA%2BYrfFhVBHz8ygj1WfFaQvcx5Vmo1FYZgy%2FOyy6aCSeGVqv6I40%2B1z5TgDqKN39Rz8BTj1GmrGLAz2TI9AC5h2733qABJQvmzDVNrQGYmrblvBk2YLtfX2P5yctZgK7FzFT80rHHGHC%2F0WO0WwOkCGja257LoEkpOQe9ry2A%2Fs0WvPaR2dhYKcs4QYbd5120It64uPC%2BTVmGUOFoWGkhf%2BTFKL9XsMUenAC8Io8nptzo6iXWA7k2KOKfnqPoLCPq5cQD6aSy2QGHw7WR1L2XPpd%2FZHXCCS3g3qdzHwXaXOWuCNn71VEkendKL6qxCNojgcs3eQWMni%2FqFyP%2F%2FNMRphy1L%2FcG8pxsxCLZlZYVJn9bm8H%2B%2F2wLVmLh7EmZc40LV9xIvRiKb7DLZcfzXogJpft9BvPaQ87Asux9r9BhTtUcE9DCwxQ%2FcrjDckL7k%2F6zajiExxDHx8eEfjZNc6CSt8%2BW5ouklX9SK4cwD%2FoMwdYYcPdO9XvHOdcToW0mxHwiwhfD3JnqevjFa7fqUdviMaWAR%2FB53Ugj174v7bXuhr5V5M4jDV%2F6DLBjqkAVBpnTOjGxfvXa72XEHao639mp3GP8MnAVFjig9Jr8vf03AMSwrCfwK962wKx0xN%2BsOeb1WEbIVCQf4lUoh6Q67Rvv8JtZ16IAaXz%2B6lNeaFlIgRxhHXJhFXfB53umZg83Q%2FCGT%2BUehhZedQlN0XIJ455DCuiDBivx6lITzja%2BDAnul50Fd%2BWjWepI%2FEwbG2qPgMh%2F5mANkiPpBZ5brOglZMtBfF&X-Amz-Signature=18b25ca66ea27cc9b846e88bf679c8f03d932c60405e02ef6b9c1779c3ca9d01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42DSWZV%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCvnErcrMjSVCujwIdx6yX72L2gYMdy05u7DQyecIZgwgIgHa6sLM%2BK9BxLYS3kEYZHBeOrpaU4lXcPgf1AhfAz1mYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJNnK2NghmlIMlylDyrcA9GE10PAFiAfrZW0bHe2r8YdBceoeOIZqqvERJq4PARv8nv5bJ2%2BAsPdc1gy4ISBuHtSQn9BzVtizU%2BrxlK3mehQbPFOQ43CoVbiJXgYHZFVzZn1mjsDUeeosja8%2FXLx%2BObwzTxc8rUFBVxliMgxDq766fykqu0SfeWokQB2qr0QtFg5SoJD%2FHYjcvs9V5P584zv9eVlfwufz4ajMH8ra6AoqjI5iOILZ4ZBHEu8r%2Fo8yOoNkZe4EfECGV9ICFOipQ0KHiJ7YhXxyvEOtCB1iGOtuATIrr3UY6Y8%2FBW75%2F%2FPWHln%2Bt3HYFzlGib1eUKw29CUOD2GvrxJOPnNNew3emnR3ufQyBjHsQREu93ZYN9FIpzWomHMelwZb34LxaEHGVEFls3PZOBEhP6Qrz%2Frpu5YsHU%2BQKKQIVrEqDpNUn6fWp%2BqTAZWa4zDGR5DcseX%2BGt5N8%2FUYcDvOJdo3G1aIE0egT6GenV%2FNhhmEtlzPDJ%2BWoASRMC1ZZlUTAgBuNijSwdqWLBw4haRxRdZs0tUMReKtYp%2BoHyB5eMNQu4Y5zKQKcUvZ9bIIu7jXGRUreIqdJWqoTEKecv7%2Fb8gFwmVmErjMVCRjLizZPIiTImPdk3U9l9lXoVIV2%2FC1opbMOn%2BoMsGOqUBM9HxhVxlIIYbeP%2BUu5F1JoadI6PhJflk32VtPDn%2FtO7Oj0bEe%2F75xPkEth2kv3d%2FjOQMFLL085KJdoI4Joauk4HfPYF1PEKV7VfueSlEJKVVvvXWfws%2BFNHlxmU3C4czfILG7zqHEh1STxau6B0GleGsG6Jqzy%2FVWHsfrN8iBK4r9ukqcGIlehM0ROPiJj%2BG6%2BGPJyAJemZzaAUmUc5d9JCA98mf&X-Amz-Signature=e617c7ee9379da50e4f880337ea0ca15bdc89b8291cdbfdbd4514c54e3c6547c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DUDBJBA%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIBQXktZVVXZCrRWGrr0oKXyyyaK9ra2xAJVpt1NyNvy3AiBDf7WLDFc%2BZPiaBi8Wsjy0BZh0JDsy3gwwBI%2BW29stlSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM8gXDA462UVmIb62JKtwDimHXuf0r%2FLKDoJeZBfiuDP56NqSHizasRWNG%2BFCGLJlfyASyMXxZecR4PpbiR%2Fu3xsa1j178J%2FeF1kE%2B6JVCpoFzct7gRV0gPS3gnciEZhPnVRESaywgKWV%2FvKoG%2F1qCBBu%2BQgdVGDzclRfignTLc1DiD0UlpVbZzX1H3HBM%2FZ385pQilqMAyAlNLE%2BxbA1Se9tXTlrYtUDlyQb7dJ%2F%2BY4mu2KSslKPn13OWzDVRZh01OpYK%2BR3fM8OZc66FfwV4Km9c1Ckbr%2FAZsAuBhZRSvacvk3Yu2Em8bWmrUFhUpeBfIGN2EWXgrJbP8e1sWj%2FLJyNZjvJKf8Yl1rskawy0YFoRFyzTXVe0PRATdhl7498MyovwXHP3jV3sQGU0bzWHRYjMHi2aNa921PU5iYbJSa5NI%2FTDdlsIqAJ1KCesfHWDTRmGS7ugG05EwP8AgOxjQQY4cU81sbZd%2F%2FomYBuzs9s%2Bf1XMSvBCa%2BZHiDrX7NDHnP2hW%2BZ6UtygUi1GkO4gQsifs2bEcusTtYHrLy9z%2Bb7Fx3mpwXyrkn0GzoM0E%2FuEfy%2FmVydF2e68f6FIugXibNFzzXB9%2BlmAsBAY2gwb9jv%2BClFhn40f9vOVdmMQZ9im5iVMJTwthLnQJK4wxIGhywY6pgE9qHdofJkBASyKI%2Bs9jxpmvonT7Pq1qnOabFQIbqmrYMoqcLfmBw20dB90exgwczL8oLJbpzHSCutvL6o7m1AcjH%2B8i6D2ofvCPBm3Fju4lMyWYeC17hHy4dJs%2FyFd%2BQUEMAtI6nySeW4jzwEm1sA8GghDsSGqB96Mmtii5lYkau8ruIGnY%2FJN9N5cDdAx0o4eVanJOC63X6ap0TKBsYmNOJQ2zEaU&X-Amz-Signature=7884b0d8a01e1c1f67f9505a19ea03ce77ab5def951999eced44ae54b513f41f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42DSWZV%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCvnErcrMjSVCujwIdx6yX72L2gYMdy05u7DQyecIZgwgIgHa6sLM%2BK9BxLYS3kEYZHBeOrpaU4lXcPgf1AhfAz1mYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJNnK2NghmlIMlylDyrcA9GE10PAFiAfrZW0bHe2r8YdBceoeOIZqqvERJq4PARv8nv5bJ2%2BAsPdc1gy4ISBuHtSQn9BzVtizU%2BrxlK3mehQbPFOQ43CoVbiJXgYHZFVzZn1mjsDUeeosja8%2FXLx%2BObwzTxc8rUFBVxliMgxDq766fykqu0SfeWokQB2qr0QtFg5SoJD%2FHYjcvs9V5P584zv9eVlfwufz4ajMH8ra6AoqjI5iOILZ4ZBHEu8r%2Fo8yOoNkZe4EfECGV9ICFOipQ0KHiJ7YhXxyvEOtCB1iGOtuATIrr3UY6Y8%2FBW75%2F%2FPWHln%2Bt3HYFzlGib1eUKw29CUOD2GvrxJOPnNNew3emnR3ufQyBjHsQREu93ZYN9FIpzWomHMelwZb34LxaEHGVEFls3PZOBEhP6Qrz%2Frpu5YsHU%2BQKKQIVrEqDpNUn6fWp%2BqTAZWa4zDGR5DcseX%2BGt5N8%2FUYcDvOJdo3G1aIE0egT6GenV%2FNhhmEtlzPDJ%2BWoASRMC1ZZlUTAgBuNijSwdqWLBw4haRxRdZs0tUMReKtYp%2BoHyB5eMNQu4Y5zKQKcUvZ9bIIu7jXGRUreIqdJWqoTEKecv7%2Fb8gFwmVmErjMVCRjLizZPIiTImPdk3U9l9lXoVIV2%2FC1opbMOn%2BoMsGOqUBM9HxhVxlIIYbeP%2BUu5F1JoadI6PhJflk32VtPDn%2FtO7Oj0bEe%2F75xPkEth2kv3d%2FjOQMFLL085KJdoI4Joauk4HfPYF1PEKV7VfueSlEJKVVvvXWfws%2BFNHlxmU3C4czfILG7zqHEh1STxau6B0GleGsG6Jqzy%2FVWHsfrN8iBK4r9ukqcGIlehM0ROPiJj%2BG6%2BGPJyAJemZzaAUmUc5d9JCA98mf&X-Amz-Signature=4e8f4216175aeeab94c050e4b8ceba4a9fd15f1da63677b230c74f91a75af89a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLRNN4J5%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDBIYIJorHc6oFcCP%2BYSzCLWcK%2BSt4FA4SD49jjGuUqvAIhANbUWs3iCqxltZlYt8EKjwH9aepzAfyxY7iKccWsXudaKv8DCCoQABoMNjM3NDIzMTgzODA1IgxJdA8F7PAXnUtr%2B6cq3APUEXNpiMBfaEULgG%2BPlf%2FO0T1pkO5mNABolkNcdyeIpAb9IuDCkp1pEx8dOhPuq8C0yvht1JabqjbE7baPgOJmcVbHWBhncJZUey9ip2IsMo8pE9VtN8sPtNRRWmxViBTDUyZOZGOrKm%2FvwQ54XxtlzkKB6YePzxXiIk%2F%2BhteV%2B4ZcBEGXvzl921ZVLp2DGbWFy3VLw3iCHixcZBP48L1eMr0kdnGsXD%2BgGTFJj3kXE7qwYM%2BYZZakH3QbaYov%2F3wmfWg5i2Lo0RC06c7aRbBjWGUGquIazZgYMq1a%2F7XLFWNdZyeahTAXz3jH1pHu9ssD6MhM%2FUffpcFnx99gb2jpEtvkhcUIB%2FeVgyFxehykk2MfNZVzAt7ZW0toM9dMDdyWoAx6q3W2ZGzxveZXAORxnZEGATDaCDAeh%2B3%2FVDcT5J0QeQO1gZlB2KeqeitujkBt8tYSA4DvNN66pBaBwQYuHjP2YuJ8%2B9N7eplG50ZSac0j2PXOf90%2FFkE6F1YsE2h0uOYTSFQzmzLtNkGDQG7sBwyL%2BAfrUh0IMoz4kc8BxJPq5cbes3oLtF8W7e5OxdcKNxu9mAecW2SsgjDCXZLv%2FOdXhngB4Q%2Bxj8qQlrGdunJJq7Db759lj8Ti4DDf%2FqDLBjqkAcRQkLg4kz8bWG85UblaSfPBIWEeXn291l3oe2YuE60MY%2BVmggcZMLnqkerle3NPALHNwK8BWsRhLa0A1yvGs0Y5QtMz6QdUVefD7P%2B0Boa9iZUhRBP%2FBD912rf5DVfuvSSMHerflBC%2BESyaJokeau6bQXDMdXazJPA09bIqpX7sjKLnBvCSCGZ9oVJKjJ1EmYWt3LEQ%2B%2BTc%2B7LlGkn%2B3L6CkoA9&X-Amz-Signature=9e89be35adc110be4540e05514ea632d4ee36728b0be1ed6b3907832c62792a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42DSWZV%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCvnErcrMjSVCujwIdx6yX72L2gYMdy05u7DQyecIZgwgIgHa6sLM%2BK9BxLYS3kEYZHBeOrpaU4lXcPgf1AhfAz1mYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJNnK2NghmlIMlylDyrcA9GE10PAFiAfrZW0bHe2r8YdBceoeOIZqqvERJq4PARv8nv5bJ2%2BAsPdc1gy4ISBuHtSQn9BzVtizU%2BrxlK3mehQbPFOQ43CoVbiJXgYHZFVzZn1mjsDUeeosja8%2FXLx%2BObwzTxc8rUFBVxliMgxDq766fykqu0SfeWokQB2qr0QtFg5SoJD%2FHYjcvs9V5P584zv9eVlfwufz4ajMH8ra6AoqjI5iOILZ4ZBHEu8r%2Fo8yOoNkZe4EfECGV9ICFOipQ0KHiJ7YhXxyvEOtCB1iGOtuATIrr3UY6Y8%2FBW75%2F%2FPWHln%2Bt3HYFzlGib1eUKw29CUOD2GvrxJOPnNNew3emnR3ufQyBjHsQREu93ZYN9FIpzWomHMelwZb34LxaEHGVEFls3PZOBEhP6Qrz%2Frpu5YsHU%2BQKKQIVrEqDpNUn6fWp%2BqTAZWa4zDGR5DcseX%2BGt5N8%2FUYcDvOJdo3G1aIE0egT6GenV%2FNhhmEtlzPDJ%2BWoASRMC1ZZlUTAgBuNijSwdqWLBw4haRxRdZs0tUMReKtYp%2BoHyB5eMNQu4Y5zKQKcUvZ9bIIu7jXGRUreIqdJWqoTEKecv7%2Fb8gFwmVmErjMVCRjLizZPIiTImPdk3U9l9lXoVIV2%2FC1opbMOn%2BoMsGOqUBM9HxhVxlIIYbeP%2BUu5F1JoadI6PhJflk32VtPDn%2FtO7Oj0bEe%2F75xPkEth2kv3d%2FjOQMFLL085KJdoI4Joauk4HfPYF1PEKV7VfueSlEJKVVvvXWfws%2BFNHlxmU3C4czfILG7zqHEh1STxau6B0GleGsG6Jqzy%2FVWHsfrN8iBK4r9ukqcGIlehM0ROPiJj%2BG6%2BGPJyAJemZzaAUmUc5d9JCA98mf&X-Amz-Signature=afd44659c0d343ad6c92d68a7843d5b6d509827170239d11cf621ae8823dc740&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO6V22DO%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIFd82uZ5Nb6B3hQPlFWZIc3ejL05TreJOfCz0gUgIRSQAiEA5k6yROFAP%2FwZv74EbLiP4EaVtw3uZdbsFLI6%2BXeLJWQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEgWvwdKTb5HAtDxvyrcA1ECe2qazeKI4Zvd%2F0%2FbpazpXEjGw%2FyoG8%2Fvou7JEsN8gsDJxgwOcV0soLQaTEdNGJZkSdCLomqXGYbdwPm2vR3V6V56DKFnmw8i2962%2Fiio2yiTKtUbWW808lUnzQbQaHuxQivJnFuwDvemKMytHw3L5G6zTG5YXCwFr%2Fjd4VLfZD%2FrKJvDi9QSzpyftXH5lGcjQbjE8HSp7HtHK0FQZzN%2FTCXY9Mc9CsnEPgXDQOd8hd7YIKeLPEubamUsSXcQKmAmYOoMOCi4AQqCWxSISvjZq%2BKnmSI3eEZwyR3%2B%2BG3D2uX%2FxySW6MiYm4Brvyyup6vuFa18breB0pIkFEa61aFZ8qqw1A4FjxlYttCkHvhAtwh0gji2hFqe6mtsSuIxgQyaM8Y2aEhgCd24o%2FiS1U3DIpS6MWYUCp6c%2B5vWJPoYl6Vb9SZswcQ0VZXyyCIWGAW4F%2FZKeriOKiALi%2FhYtghIhx7THJPl9%2BlGH3brC%2B8LOxxJVM8PZqRKuggQTufEvdZmD0cFKX4DhpN1wNhJce3IR6%2FuHfif2v6%2FhHh%2FiPHDx3G0xKhM7zsqNJFGAC%2FpDuBhYcakiNy18BsBDX6iSnPubhNhADtmRqbTBGiXPhEwvW5CmXL4cEwkqOYXMMeAocsGOqUBVbaZc%2BMhXcUYQ9rfgTeZLt4BnP3rykJsMuBquPaOGGc%2BXNRpbxVX89r3exdqHCxGJYz%2FPrhHriZkSBcZuOnd0ZSWEjJDblKmoUcL8Y6sVNdEMLmpjBaiG1NE1R%2ByiDsltn8qF0YrV0uyi%2FMO0%2FQxpm3Ii7TgF0rYiIoTp3buXJKN0gIbdzxCOSPhJ3m8MNrPeBiDwb14YwMV1e0chGjFNrqAP6mL&X-Amz-Signature=be5fdee7543f5d59a623b6a70309ba62a5f5df218380680a42cb30483b74e033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42DSWZV%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCvnErcrMjSVCujwIdx6yX72L2gYMdy05u7DQyecIZgwgIgHa6sLM%2BK9BxLYS3kEYZHBeOrpaU4lXcPgf1AhfAz1mYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJNnK2NghmlIMlylDyrcA9GE10PAFiAfrZW0bHe2r8YdBceoeOIZqqvERJq4PARv8nv5bJ2%2BAsPdc1gy4ISBuHtSQn9BzVtizU%2BrxlK3mehQbPFOQ43CoVbiJXgYHZFVzZn1mjsDUeeosja8%2FXLx%2BObwzTxc8rUFBVxliMgxDq766fykqu0SfeWokQB2qr0QtFg5SoJD%2FHYjcvs9V5P584zv9eVlfwufz4ajMH8ra6AoqjI5iOILZ4ZBHEu8r%2Fo8yOoNkZe4EfECGV9ICFOipQ0KHiJ7YhXxyvEOtCB1iGOtuATIrr3UY6Y8%2FBW75%2F%2FPWHln%2Bt3HYFzlGib1eUKw29CUOD2GvrxJOPnNNew3emnR3ufQyBjHsQREu93ZYN9FIpzWomHMelwZb34LxaEHGVEFls3PZOBEhP6Qrz%2Frpu5YsHU%2BQKKQIVrEqDpNUn6fWp%2BqTAZWa4zDGR5DcseX%2BGt5N8%2FUYcDvOJdo3G1aIE0egT6GenV%2FNhhmEtlzPDJ%2BWoASRMC1ZZlUTAgBuNijSwdqWLBw4haRxRdZs0tUMReKtYp%2BoHyB5eMNQu4Y5zKQKcUvZ9bIIu7jXGRUreIqdJWqoTEKecv7%2Fb8gFwmVmErjMVCRjLizZPIiTImPdk3U9l9lXoVIV2%2FC1opbMOn%2BoMsGOqUBM9HxhVxlIIYbeP%2BUu5F1JoadI6PhJflk32VtPDn%2FtO7Oj0bEe%2F75xPkEth2kv3d%2FjOQMFLL085KJdoI4Joauk4HfPYF1PEKV7VfueSlEJKVVvvXWfws%2BFNHlxmU3C4czfILG7zqHEh1STxau6B0GleGsG6Jqzy%2FVWHsfrN8iBK4r9ukqcGIlehM0ROPiJj%2BG6%2BGPJyAJemZzaAUmUc5d9JCA98mf&X-Amz-Signature=9aaecfb539b31ea96f8023b795c468bde8b74d4b19a30cda2230184ccc2ebdb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q35AZOMG%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC89270jt5B8W1D1HsGdSTdrq2RCeXJ0mzbaZ4vFckYdgIgC0buEM7XJq2Vrf3MfTeD0vcTu5Wd66pD%2FUeKZBNOgpoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDN7euYI%2B%2BkaznsAHTyrcA9l7%2FdWnTGhL1b5jbbLgroVozLy0OUOn%2Bpa6WiDudbpb00zjr%2BUB1grNogGOUN%2FDQIklUZHmqwq2w6E%2BB%2F%2BtuvURxz9sSr%2FenbZx2sH7U4tcC0ORtUQVXOE46OS%2B0O948Z7pJ3pL8ZFTaau6Shvrgwh56LeyzcDsw2hgtizlp3qCKLYYXAU3r9tlxHePRJjYaJgYyReGt7nBriTCsBqirjyE84ZCPtAdyiASpyHFoQaLmq9NOkqYDq04loWLSass7zry%2FccZnIIN5SohI%2BsZLjZy%2BOStBUVJvFTTgGQI9sZk9n2CzlPtVfZuoV9kdxE%2FXcM4bA6FKfU4Jxwle7GkrYroSWa%2BvY%2B9HvxQAlu506QiW1SM15h59CcIy45FdOiE6Isas8kqJ9pHLx1JLeuu46rUfCYhfw%2Bhfk7x%2BxFTPRXIN5y%2Fh5YWcLItscul5XooavoMM6T3Ki755BWwr1GwrruVkAbEv1bkuD1SXa%2BsIB8q7cEKXwsetxEkXPmHEyp2znL45ytyr%2BDb1foQNchKKsOXdQKsVvbQNNMHoKxlG1TF%2Fza5vrYuEImtCvKqc1Ywqs545qPAt60oi8zF7BEJwLLFj6XK1N5W6dQ8dNtNRz9V54YJ9UgjZip1cgIbMMz%2FoMsGOqUB968mGC8%2BbIbwKTr%2FOmJm2GUdmHzS6htg%2BbRqC4DwErghMULEp8VBvBSurKwOOEMEaYdifKIdEBwbwLBzOtOJl3z5yQd1JCIv7vlm0Ukahq6niHyCJ8jh9KRxsD2WQK1dPOeC5cV9ThYRhVdhkzvPnjey13i27fAPTuKuE4E%2B4VaD%2F6%2Fe5IrsX3ZG%2FtC5jvPp2%2Fw%2FGtdx7LgeRrCPah%2F4GsPT5Dpy&X-Amz-Signature=00e90909404262f6e24abf4061649bb5b7a5a054f897ece478aef61d0d5c1d2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42DSWZV%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCvnErcrMjSVCujwIdx6yX72L2gYMdy05u7DQyecIZgwgIgHa6sLM%2BK9BxLYS3kEYZHBeOrpaU4lXcPgf1AhfAz1mYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJNnK2NghmlIMlylDyrcA9GE10PAFiAfrZW0bHe2r8YdBceoeOIZqqvERJq4PARv8nv5bJ2%2BAsPdc1gy4ISBuHtSQn9BzVtizU%2BrxlK3mehQbPFOQ43CoVbiJXgYHZFVzZn1mjsDUeeosja8%2FXLx%2BObwzTxc8rUFBVxliMgxDq766fykqu0SfeWokQB2qr0QtFg5SoJD%2FHYjcvs9V5P584zv9eVlfwufz4ajMH8ra6AoqjI5iOILZ4ZBHEu8r%2Fo8yOoNkZe4EfECGV9ICFOipQ0KHiJ7YhXxyvEOtCB1iGOtuATIrr3UY6Y8%2FBW75%2F%2FPWHln%2Bt3HYFzlGib1eUKw29CUOD2GvrxJOPnNNew3emnR3ufQyBjHsQREu93ZYN9FIpzWomHMelwZb34LxaEHGVEFls3PZOBEhP6Qrz%2Frpu5YsHU%2BQKKQIVrEqDpNUn6fWp%2BqTAZWa4zDGR5DcseX%2BGt5N8%2FUYcDvOJdo3G1aIE0egT6GenV%2FNhhmEtlzPDJ%2BWoASRMC1ZZlUTAgBuNijSwdqWLBw4haRxRdZs0tUMReKtYp%2BoHyB5eMNQu4Y5zKQKcUvZ9bIIu7jXGRUreIqdJWqoTEKecv7%2Fb8gFwmVmErjMVCRjLizZPIiTImPdk3U9l9lXoVIV2%2FC1opbMOn%2BoMsGOqUBM9HxhVxlIIYbeP%2BUu5F1JoadI6PhJflk32VtPDn%2FtO7Oj0bEe%2F75xPkEth2kv3d%2FjOQMFLL085KJdoI4Joauk4HfPYF1PEKV7VfueSlEJKVVvvXWfws%2BFNHlxmU3C4czfILG7zqHEh1STxau6B0GleGsG6Jqzy%2FVWHsfrN8iBK4r9ukqcGIlehM0ROPiJj%2BG6%2BGPJyAJemZzaAUmUc5d9JCA98mf&X-Amz-Signature=338b3e3557fc9cfde5a452875c01d215772617024b05f86fc70eafa4daa87263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4MJ4FZ3%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDefD83DuzxBWWZxxW7V4QV7zQ7osPtduFSmyho72gw0gIgJzvOBh5OrP3a6Hdr0ZpnA2kol2nx8rnbSoeTngqfvnMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDA6ST%2FblTLNmAoU3rCrcAzNhGyAYNul%2BkYCxXJTIkk5a9ousULBB9YJaoaSEacuaX4hezzCvPKy9RalJLBS4EVGh%2Bm0mWcniK3vHr0tCVyDUUWnzuI%2B%2FrqKGLu55SYZz6EzNOkC0UFALOr%2BvA07Yg%2BHFKHcNdSANJ9x2DzTn87jwxQ58sSTJTtIF2siYgO9CaExcT3SRFEplvMez%2FiV90KueN9EVt3ZZKKz%2FO%2FV8YlSO%2FZ9cOpKEFIHPRABvFj26%2F3ACuqQfUVpFvH7tDOFL1UfObsH0En%2B9QieK8W4eiuECerElnAd6CRIosIYbn%2BSQPEcuHXiH0nrOOTH0JViK2UdOusXLSVOh7%2FchFRBaGSDr0by8a1ALgUlgMhciY1D%2FLBKXc5mKfNoLiNvuqmf3l8Z167GnAprxubBJ%2FrR79%2FDpbfS7IBE3LzAlSPDY007xImok9e4i%2Fl5rKCvc%2BTwtob0PIkOjEnH9YJcFmDINnN1UnXre5jdgtCvL%2B9uO3L4iWVAm0CsOp3Vk8B9T1jTpC5KKaUOg38FP69G4Z0ZK3TeV3oHMfKpg9jCH%2BXhcl4vgVjJKZgkwlbfGCnT0xZocoU%2BaT8jrRa4XYwxmwBCK%2BRxQUDb3A8fRzETqnKx2IOMJwfZsMnQds2Ij0mtOMK6AocsGOqUBdHjeCaARyHGI3OzMhFsPx0fzebv6tvN584qR1D4hO6RvgclWpDutMgCdf%2FebQJLWZ3AmGjVzUe91Ed5bQZ19Wnw%2F97qTu3wBoI%2BlHSzYi4EfrP9Ywf5rl2M%2FbpIe4XQ2w87LzgNBOqJc7zQLHLZmVgb38ydW4zi09gZdfZy73k%2BdDini8TjA0RCcBQUMcdPFcVHJ1K9LPBclu9CrEV8DUeTVBDqG&X-Amz-Signature=40953848ce94e9a126f78f0c2b3dad29928f9e7c7c56e6bbfb1113f6e11a2c66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6IECAQQ%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEZsyobgGesp9%2FXj4WL38Dh%2F5zZvNhqacUi1gZrd%2FSarAiA1W95mvkJGmEm57%2BvH8gGwIhxQsNqBggVD7ZDdp%2FCo4yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM2NxQgvBPfumcXfpWKtwDTI9dsRqto0ODjhwZNO0VfJQb2yfuRT%2BFxBg7WDmmbJjLZDqtsSvP1tYoKGX%2FYXMyjyKLsMDsKVUiobJ1b%2Bzjd43ymnVo6O6XVG2oophJl7PEbswFg9pPPQkKhewqUFHrLYtdpbkxEr2N3urq4DEXMJgr07N9AiMnv8SAeGqI7Pm%2FfIARMr18IdUKwSDn%2FM%2B2s8PaZrOpVYkiAwVkOZ7j0JX4AgxkcEDz8o7X0SN4mUx2A3IapvmSS1Qv40o67MFxe66uzP0Y1GqJHxqCwhfjteQ%2Fuj9eRzr%2FlsqTXIqlbMecyqEI5eP9JOfPRFVrHX2jZJbXlM8FePUUOsKZS0WNFp3s8M8rSFi5TnSWRFeZiqMsL5ROLtpXjWokPENAn6BIJOMBi0pkCuheReTg3M%2F6ZVGouAfTR4j44nL1WC%2FzNVtCSJEIsaTf7dEGCXSIlarnG1diTMwtdP6zp5az41yjlwg7sGdbUNLO3fBeqqSDuLzggvni1R8xss5jnXJDLv6MhI6ZIZ8%2FOiWS%2FYFc6lJE4BoSi1pxqzvJpZsP1BbHLvXs0WgsWMPv6DOBIdK4%2BLXhRDEMKt9ZRMWP7pEUxt2PLwumk%2BnVdpLakWF0ueDEGHprBeST83h93OsjvpYw3v6gywY6pgGC6hLBj3wAV7qjTBAFqt9RleZT7x%2FKTsWw6u%2BV5%2B%2BjvI2o%2FYnGlRFo46sdNgam9AGwiNABebX4rJGTWTojjhF3scfnUKtDFU%2BROXLvsrrMjtGJ4HKROGY8zi2ojsDpV%2ByyHxcYTkBBFJwDMXb6URwuH0ZrR%2BnCCQ%2BcUvOD2VT9xpM61uckX1jCuMEfz%2FPlDS%2BS6QUgCJn6hzSP9MJPNtAxsDcrpPCZ&X-Amz-Signature=cc947963afdbfedb046a0d868627317284050ec25c6590ce5be7e6f489ef8653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7YSJHLP%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGXHmwnhrf3zu%2BtRo9MoDTYFWRrkPn%2FjC8BlaI44oWe1AiBdNd%2FlA5bAZPlCO9%2BO7K7QwV%2B%2BTi%2BbNiLG257WXfpd8ir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMYr6QFCxzpxbabeTiKtwDhTtvC3hOmwkSENqAUM5L1vjrvPJIBKg07MFoWhsqL%2BJcU4BxFrNtWKVzU0H%2BArve3T9ryz6zIi%2FqvTCs4Df2QcMY0mmTLKMLAgKZUneAGtM4gE6FQ7bN0nx2%2BisvPPq8SbLwCzqRtsfRC8t1xu7ddLyV2IKJlrsvAZxXnTQbUIlDiknGt2VlFrWKZSu0288UyYgWwInQ2DyALhTRqrDrxAV7lcOQfd3lopVu4HLeVyx64OjcCBGy8qAAaRF6OIhugMoeo9Aeb%2FiWqc7s0Fj1Scz7QDYa4hr0U4WZpFSIIzblhap2tWA4JPuuSuSU4dI3Tx0maTOpuEQ7i4OBAAiatgwpwX3JDtc%2B2wrnPe%2FJTtb7CSL5kURjlfx5XNRGNdfw%2BjflOYLeGltwTuUsrsNFxlBT%2FLxvrXbU3Dn2A9%2Bc4yitqwZaxksG%2FJJ%2Br0gpx2EX2syiPk5M%2Bx8Wv%2FbROGHiLRdweDHHo8uoxDvyGNU0hRf9dn%2Fc5Pf2jgBvkDV9qdHZfTEngxz4UvlbnLkpwT%2BfQ8EBnIZuSqF%2Bt%2Bds59CDiwKswttqhpO2Oxpmd6U7trI41A4S635H51jvRhh6Gj5PmxTZ%2FhliChi9NnSzp9qb5vApLs7r1N7lcRklrUcwxIGhywY6pgFcXYY5Aekoyj8NX2to8%2FAD1jChSzHVEPSrd6TvzS1SEd%2FPnPtua1NXsUsMvFuSO2QmINOhYwztHGXOfHovryu0h6dWOL%2F%2FjDrniHnAbd0IFpYJoIaCvpHqMyJRkGWxeLsQjhcGdiOAwQd7cMVxQgYuGVCqx5qIsxgySvjp5oCPYLYiLyCfz6vQDGfbHsz%2F%2BGfC9Ux59xyM9bfMyNhSR2pEve6QSYkD&X-Amz-Signature=22c8f787832af5bf0a9f5bb6a79c932bf8c17bd7b356aecb7fd2f4b57658d9c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42DSWZV%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCvnErcrMjSVCujwIdx6yX72L2gYMdy05u7DQyecIZgwgIgHa6sLM%2BK9BxLYS3kEYZHBeOrpaU4lXcPgf1AhfAz1mYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJNnK2NghmlIMlylDyrcA9GE10PAFiAfrZW0bHe2r8YdBceoeOIZqqvERJq4PARv8nv5bJ2%2BAsPdc1gy4ISBuHtSQn9BzVtizU%2BrxlK3mehQbPFOQ43CoVbiJXgYHZFVzZn1mjsDUeeosja8%2FXLx%2BObwzTxc8rUFBVxliMgxDq766fykqu0SfeWokQB2qr0QtFg5SoJD%2FHYjcvs9V5P584zv9eVlfwufz4ajMH8ra6AoqjI5iOILZ4ZBHEu8r%2Fo8yOoNkZe4EfECGV9ICFOipQ0KHiJ7YhXxyvEOtCB1iGOtuATIrr3UY6Y8%2FBW75%2F%2FPWHln%2Bt3HYFzlGib1eUKw29CUOD2GvrxJOPnNNew3emnR3ufQyBjHsQREu93ZYN9FIpzWomHMelwZb34LxaEHGVEFls3PZOBEhP6Qrz%2Frpu5YsHU%2BQKKQIVrEqDpNUn6fWp%2BqTAZWa4zDGR5DcseX%2BGt5N8%2FUYcDvOJdo3G1aIE0egT6GenV%2FNhhmEtlzPDJ%2BWoASRMC1ZZlUTAgBuNijSwdqWLBw4haRxRdZs0tUMReKtYp%2BoHyB5eMNQu4Y5zKQKcUvZ9bIIu7jXGRUreIqdJWqoTEKecv7%2Fb8gFwmVmErjMVCRjLizZPIiTImPdk3U9l9lXoVIV2%2FC1opbMOn%2BoMsGOqUBM9HxhVxlIIYbeP%2BUu5F1JoadI6PhJflk32VtPDn%2FtO7Oj0bEe%2F75xPkEth2kv3d%2FjOQMFLL085KJdoI4Joauk4HfPYF1PEKV7VfueSlEJKVVvvXWfws%2BFNHlxmU3C4czfILG7zqHEh1STxau6B0GleGsG6Jqzy%2FVWHsfrN8iBK4r9ukqcGIlehM0ROPiJj%2BG6%2BGPJyAJemZzaAUmUc5d9JCA98mf&X-Amz-Signature=2616fee5b4c230b7a9e6aa7cf03245e8e5b66a0dba950052128a35c28ce1dd35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42DSWZV%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCvnErcrMjSVCujwIdx6yX72L2gYMdy05u7DQyecIZgwgIgHa6sLM%2BK9BxLYS3kEYZHBeOrpaU4lXcPgf1AhfAz1mYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJNnK2NghmlIMlylDyrcA9GE10PAFiAfrZW0bHe2r8YdBceoeOIZqqvERJq4PARv8nv5bJ2%2BAsPdc1gy4ISBuHtSQn9BzVtizU%2BrxlK3mehQbPFOQ43CoVbiJXgYHZFVzZn1mjsDUeeosja8%2FXLx%2BObwzTxc8rUFBVxliMgxDq766fykqu0SfeWokQB2qr0QtFg5SoJD%2FHYjcvs9V5P584zv9eVlfwufz4ajMH8ra6AoqjI5iOILZ4ZBHEu8r%2Fo8yOoNkZe4EfECGV9ICFOipQ0KHiJ7YhXxyvEOtCB1iGOtuATIrr3UY6Y8%2FBW75%2F%2FPWHln%2Bt3HYFzlGib1eUKw29CUOD2GvrxJOPnNNew3emnR3ufQyBjHsQREu93ZYN9FIpzWomHMelwZb34LxaEHGVEFls3PZOBEhP6Qrz%2Frpu5YsHU%2BQKKQIVrEqDpNUn6fWp%2BqTAZWa4zDGR5DcseX%2BGt5N8%2FUYcDvOJdo3G1aIE0egT6GenV%2FNhhmEtlzPDJ%2BWoASRMC1ZZlUTAgBuNijSwdqWLBw4haRxRdZs0tUMReKtYp%2BoHyB5eMNQu4Y5zKQKcUvZ9bIIu7jXGRUreIqdJWqoTEKecv7%2Fb8gFwmVmErjMVCRjLizZPIiTImPdk3U9l9lXoVIV2%2FC1opbMOn%2BoMsGOqUBM9HxhVxlIIYbeP%2BUu5F1JoadI6PhJflk32VtPDn%2FtO7Oj0bEe%2F75xPkEth2kv3d%2FjOQMFLL085KJdoI4Joauk4HfPYF1PEKV7VfueSlEJKVVvvXWfws%2BFNHlxmU3C4czfILG7zqHEh1STxau6B0GleGsG6Jqzy%2FVWHsfrN8iBK4r9ukqcGIlehM0ROPiJj%2BG6%2BGPJyAJemZzaAUmUc5d9JCA98mf&X-Amz-Signature=81e369810fcb11ff6d258a3fd1184b8fe1d54d2f50fa90ff1081464a936df796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO5EQUMO%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQC%2FtjSUGwGLySnI2oktN4JmJcP0uHPNre5orv6RG%2FYWpAIhAOvd%2F0%2BV3qaYO6pvxbyfOLWl7N877NqBNWeL2M6Yqn3YKv8DCCoQABoMNjM3NDIzMTgzODA1IgwEP3at0zRhM%2FNVTb0q3ANLWtpqKvaGj09bjiWZr53X6pblVU2QYPdlztdWRbwdN8zmjkqxm9tMDfITouqHp8ounzk0c0NOz7ip6wpz%2FwYMM1IjEB%2BQG%2BbWGLmz4JbKGqtHilgKSX7ZTJJ%2BEmufkz%2FyCztD3zDSgBHm5Fq9f9lE1%2BOefxtE66Q0AK6mfiQ8nv%2F2FW0pDTIaaHz7P1YQE17oSAbEEOxE4%2FedhWUa9tV2z7E%2BagNx8%2FA4XJX95gTYAJZtNa8zchdqDPPqbQK9X3%2FonxalSUDvriASmOs7HJVt%2FOsOHyz16ES4ROa4aWHot54oA94rWgKSSwv3iqFAFUlJc%2BBRNoYiQiBcuK2GnjxosAqIXtNvck1dtUy38sOS0TISBZSOeV4bITaVYwGnIp%2Fbz4nvlq15%2FPjoTRXlgT0vhBM%2Bb7uxYds6mX4ImhKM5dQlvYF0dvSJ3GupKYDkT5MGoT62V%2BsuPEpXfPQ4zSOdUY6yGoFBNOxps69UKPWHja17mctaWDrnbylZI62%2Bq0VCG0lSg4J82oQr6lO4%2BuKyVNgiWVJJqNZUNbsRD4kgh29bcQjph39WxwKuElJNq4GJthpNoSjDlaPGiO3w79U59wMZoY6UFjtA5a%2BlQRIKK2RQaJd6y6T4A0%2Fx8zDu%2F6DLBjqkASsA6Rzp12aXQTS7LJ9VC6ilrzYn%2B45xW84W0ZODy74rj4%2FZNnz759%2BblecAnHfviPNk0zvZBlx9f7BbcCmWHomOGCXgFZeASA31hSAdZg4IM26LVfUkrXUxIYsVNHtE5V4AlD5%2Filr%2Fw5cghgO4k8PbgBXIo4UxzSMnNvUc6H%2FkmleKR6kup5Re2zOI5eDN7J7GZdhYRyTrMwLlNcqOQT1PL1QF&X-Amz-Signature=8dcab48d11be99c4141b1d5c872f054ca594e97bb1e91b6a8309eb41a5c84409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO5EQUMO%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQC%2FtjSUGwGLySnI2oktN4JmJcP0uHPNre5orv6RG%2FYWpAIhAOvd%2F0%2BV3qaYO6pvxbyfOLWl7N877NqBNWeL2M6Yqn3YKv8DCCoQABoMNjM3NDIzMTgzODA1IgwEP3at0zRhM%2FNVTb0q3ANLWtpqKvaGj09bjiWZr53X6pblVU2QYPdlztdWRbwdN8zmjkqxm9tMDfITouqHp8ounzk0c0NOz7ip6wpz%2FwYMM1IjEB%2BQG%2BbWGLmz4JbKGqtHilgKSX7ZTJJ%2BEmufkz%2FyCztD3zDSgBHm5Fq9f9lE1%2BOefxtE66Q0AK6mfiQ8nv%2F2FW0pDTIaaHz7P1YQE17oSAbEEOxE4%2FedhWUa9tV2z7E%2BagNx8%2FA4XJX95gTYAJZtNa8zchdqDPPqbQK9X3%2FonxalSUDvriASmOs7HJVt%2FOsOHyz16ES4ROa4aWHot54oA94rWgKSSwv3iqFAFUlJc%2BBRNoYiQiBcuK2GnjxosAqIXtNvck1dtUy38sOS0TISBZSOeV4bITaVYwGnIp%2Fbz4nvlq15%2FPjoTRXlgT0vhBM%2Bb7uxYds6mX4ImhKM5dQlvYF0dvSJ3GupKYDkT5MGoT62V%2BsuPEpXfPQ4zSOdUY6yGoFBNOxps69UKPWHja17mctaWDrnbylZI62%2Bq0VCG0lSg4J82oQr6lO4%2BuKyVNgiWVJJqNZUNbsRD4kgh29bcQjph39WxwKuElJNq4GJthpNoSjDlaPGiO3w79U59wMZoY6UFjtA5a%2BlQRIKK2RQaJd6y6T4A0%2Fx8zDu%2F6DLBjqkASsA6Rzp12aXQTS7LJ9VC6ilrzYn%2B45xW84W0ZODy74rj4%2FZNnz759%2BblecAnHfviPNk0zvZBlx9f7BbcCmWHomOGCXgFZeASA31hSAdZg4IM26LVfUkrXUxIYsVNHtE5V4AlD5%2Filr%2Fw5cghgO4k8PbgBXIo4UxzSMnNvUc6H%2FkmleKR6kup5Re2zOI5eDN7J7GZdhYRyTrMwLlNcqOQT1PL1QF&X-Amz-Signature=ed0a3bc4ae3a1df582e01bfbaba0c252eb488c4eba23bcb444e56ab288bf32cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO5EQUMO%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQC%2FtjSUGwGLySnI2oktN4JmJcP0uHPNre5orv6RG%2FYWpAIhAOvd%2F0%2BV3qaYO6pvxbyfOLWl7N877NqBNWeL2M6Yqn3YKv8DCCoQABoMNjM3NDIzMTgzODA1IgwEP3at0zRhM%2FNVTb0q3ANLWtpqKvaGj09bjiWZr53X6pblVU2QYPdlztdWRbwdN8zmjkqxm9tMDfITouqHp8ounzk0c0NOz7ip6wpz%2FwYMM1IjEB%2BQG%2BbWGLmz4JbKGqtHilgKSX7ZTJJ%2BEmufkz%2FyCztD3zDSgBHm5Fq9f9lE1%2BOefxtE66Q0AK6mfiQ8nv%2F2FW0pDTIaaHz7P1YQE17oSAbEEOxE4%2FedhWUa9tV2z7E%2BagNx8%2FA4XJX95gTYAJZtNa8zchdqDPPqbQK9X3%2FonxalSUDvriASmOs7HJVt%2FOsOHyz16ES4ROa4aWHot54oA94rWgKSSwv3iqFAFUlJc%2BBRNoYiQiBcuK2GnjxosAqIXtNvck1dtUy38sOS0TISBZSOeV4bITaVYwGnIp%2Fbz4nvlq15%2FPjoTRXlgT0vhBM%2Bb7uxYds6mX4ImhKM5dQlvYF0dvSJ3GupKYDkT5MGoT62V%2BsuPEpXfPQ4zSOdUY6yGoFBNOxps69UKPWHja17mctaWDrnbylZI62%2Bq0VCG0lSg4J82oQr6lO4%2BuKyVNgiWVJJqNZUNbsRD4kgh29bcQjph39WxwKuElJNq4GJthpNoSjDlaPGiO3w79U59wMZoY6UFjtA5a%2BlQRIKK2RQaJd6y6T4A0%2Fx8zDu%2F6DLBjqkASsA6Rzp12aXQTS7LJ9VC6ilrzYn%2B45xW84W0ZODy74rj4%2FZNnz759%2BblecAnHfviPNk0zvZBlx9f7BbcCmWHomOGCXgFZeASA31hSAdZg4IM26LVfUkrXUxIYsVNHtE5V4AlD5%2Filr%2Fw5cghgO4k8PbgBXIo4UxzSMnNvUc6H%2FkmleKR6kup5Re2zOI5eDN7J7GZdhYRyTrMwLlNcqOQT1PL1QF&X-Amz-Signature=b1115f009af26c5d243b6e39c58423bc63eaa48d9f934840623b1d7964ffba91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO5EQUMO%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQC%2FtjSUGwGLySnI2oktN4JmJcP0uHPNre5orv6RG%2FYWpAIhAOvd%2F0%2BV3qaYO6pvxbyfOLWl7N877NqBNWeL2M6Yqn3YKv8DCCoQABoMNjM3NDIzMTgzODA1IgwEP3at0zRhM%2FNVTb0q3ANLWtpqKvaGj09bjiWZr53X6pblVU2QYPdlztdWRbwdN8zmjkqxm9tMDfITouqHp8ounzk0c0NOz7ip6wpz%2FwYMM1IjEB%2BQG%2BbWGLmz4JbKGqtHilgKSX7ZTJJ%2BEmufkz%2FyCztD3zDSgBHm5Fq9f9lE1%2BOefxtE66Q0AK6mfiQ8nv%2F2FW0pDTIaaHz7P1YQE17oSAbEEOxE4%2FedhWUa9tV2z7E%2BagNx8%2FA4XJX95gTYAJZtNa8zchdqDPPqbQK9X3%2FonxalSUDvriASmOs7HJVt%2FOsOHyz16ES4ROa4aWHot54oA94rWgKSSwv3iqFAFUlJc%2BBRNoYiQiBcuK2GnjxosAqIXtNvck1dtUy38sOS0TISBZSOeV4bITaVYwGnIp%2Fbz4nvlq15%2FPjoTRXlgT0vhBM%2Bb7uxYds6mX4ImhKM5dQlvYF0dvSJ3GupKYDkT5MGoT62V%2BsuPEpXfPQ4zSOdUY6yGoFBNOxps69UKPWHja17mctaWDrnbylZI62%2Bq0VCG0lSg4J82oQr6lO4%2BuKyVNgiWVJJqNZUNbsRD4kgh29bcQjph39WxwKuElJNq4GJthpNoSjDlaPGiO3w79U59wMZoY6UFjtA5a%2BlQRIKK2RQaJd6y6T4A0%2Fx8zDu%2F6DLBjqkASsA6Rzp12aXQTS7LJ9VC6ilrzYn%2B45xW84W0ZODy74rj4%2FZNnz759%2BblecAnHfviPNk0zvZBlx9f7BbcCmWHomOGCXgFZeASA31hSAdZg4IM26LVfUkrXUxIYsVNHtE5V4AlD5%2Filr%2Fw5cghgO4k8PbgBXIo4UxzSMnNvUc6H%2FkmleKR6kup5Re2zOI5eDN7J7GZdhYRyTrMwLlNcqOQT1PL1QF&X-Amz-Signature=68a6260410edc84f5734c11a77c554876bc4911de89781c5c62a78f48e70a60f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZRZZ7Z5%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIG9RJyxdAEchXUf8CWxZB6lB16B9MfRUEtc3ITIEh%2BR%2BAiADDHEUaTiOSBM46d1%2BPFe%2BpASF3tO3dmCBCa%2BO%2B654HCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMecx6MYkhRKLvlu%2FcKtwD39WtUd0e7S6A3qkrug5BHCJzFFKucrb71ZaZDbM7ch%2F6Djru27SMdpYKnjO7hSIvX7Ec12rw29uvd2tErqwCQ2NtoUIMNELNZd%2F48yH%2FObJfcBDC609pTas2FJNu9DeVESGO40u0nHPLT8TdSiFXSGltYj8MhiDVW5foofOl13zdjfiftqcKG88INU%2BZ9nh%2FBWZ4QUORzKI%2FWb9BLdLxjzCOk0MXQcPm62uJHqfVp7yzNoktIKMSGOb%2BX%2BPh%2BhSU5US%2BdR5bp7libvzrNFw5yb8vpsoyxbd1CIDo7mabGZoRbj8u3JO2EcwGoTHsKBQ60Qct9togYgMcO1BtPEZMCxwNb9fMkdkEG5I08Yc3PpfFOps7%2BLjQkfN81NHhabFevavAzERoWLaIL7GuPpG9lJHCGTPPryX6%2Fsq17nRuyTiz3UGELQxHdFt0UuOYf0Ezn5QGGzi654FC%2FdGC%2BTKD6GOcVbvQXtrVpnYOSyv6VwkPB86pPX6N7wi5TbMJHcTDaMC%2FWbdLkxQKo6RV%2Bpwd74PmwVA%2FAwFYFJ4WrlhldrfR2QEnrvSPMvJzibq8Usp5DtxpdP1jzynzjXIN1CzMSb1C6iiL9mYgk7EUsTht2T6bxvwnVyRaPYsh4UkwxIGhywY6pgHCohmEymhy8aRN9e4SFJMOjf6Wy00jjuvE9%2BZ3jf8Cd4v0VcAWgLkPehgLogfWmkOODujKFpThBigVTov%2BCkTTt%2BGCeMDbCYuTNn85EGNxzOQN%2BZHAJwY%2B3W0%2BngZxSHTIKg0YYXYhPYgmBaeGWmWMUt1jezraf%2FSJaj%2BN50Ga10jrKqMxgznrTDEJoOqJccUK%2FyCVhTg7AGZWQaBdwuyDnDmDUR3R&X-Amz-Signature=fda6ffccac26d92611ca15a38f8c21f7d22dd5a5ec013b1b14a165222c916f8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO5EQUMO%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQC%2FtjSUGwGLySnI2oktN4JmJcP0uHPNre5orv6RG%2FYWpAIhAOvd%2F0%2BV3qaYO6pvxbyfOLWl7N877NqBNWeL2M6Yqn3YKv8DCCoQABoMNjM3NDIzMTgzODA1IgwEP3at0zRhM%2FNVTb0q3ANLWtpqKvaGj09bjiWZr53X6pblVU2QYPdlztdWRbwdN8zmjkqxm9tMDfITouqHp8ounzk0c0NOz7ip6wpz%2FwYMM1IjEB%2BQG%2BbWGLmz4JbKGqtHilgKSX7ZTJJ%2BEmufkz%2FyCztD3zDSgBHm5Fq9f9lE1%2BOefxtE66Q0AK6mfiQ8nv%2F2FW0pDTIaaHz7P1YQE17oSAbEEOxE4%2FedhWUa9tV2z7E%2BagNx8%2FA4XJX95gTYAJZtNa8zchdqDPPqbQK9X3%2FonxalSUDvriASmOs7HJVt%2FOsOHyz16ES4ROa4aWHot54oA94rWgKSSwv3iqFAFUlJc%2BBRNoYiQiBcuK2GnjxosAqIXtNvck1dtUy38sOS0TISBZSOeV4bITaVYwGnIp%2Fbz4nvlq15%2FPjoTRXlgT0vhBM%2Bb7uxYds6mX4ImhKM5dQlvYF0dvSJ3GupKYDkT5MGoT62V%2BsuPEpXfPQ4zSOdUY6yGoFBNOxps69UKPWHja17mctaWDrnbylZI62%2Bq0VCG0lSg4J82oQr6lO4%2BuKyVNgiWVJJqNZUNbsRD4kgh29bcQjph39WxwKuElJNq4GJthpNoSjDlaPGiO3w79U59wMZoY6UFjtA5a%2BlQRIKK2RQaJd6y6T4A0%2Fx8zDu%2F6DLBjqkASsA6Rzp12aXQTS7LJ9VC6ilrzYn%2B45xW84W0ZODy74rj4%2FZNnz759%2BblecAnHfviPNk0zvZBlx9f7BbcCmWHomOGCXgFZeASA31hSAdZg4IM26LVfUkrXUxIYsVNHtE5V4AlD5%2Filr%2Fw5cghgO4k8PbgBXIo4UxzSMnNvUc6H%2FkmleKR6kup5Re2zOI5eDN7J7GZdhYRyTrMwLlNcqOQT1PL1QF&X-Amz-Signature=b623f41572e4f9c8cd03541ac44dbbbfa34ac42bdaf9f6e8a8bce357473273c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO5EQUMO%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQC%2FtjSUGwGLySnI2oktN4JmJcP0uHPNre5orv6RG%2FYWpAIhAOvd%2F0%2BV3qaYO6pvxbyfOLWl7N877NqBNWeL2M6Yqn3YKv8DCCoQABoMNjM3NDIzMTgzODA1IgwEP3at0zRhM%2FNVTb0q3ANLWtpqKvaGj09bjiWZr53X6pblVU2QYPdlztdWRbwdN8zmjkqxm9tMDfITouqHp8ounzk0c0NOz7ip6wpz%2FwYMM1IjEB%2BQG%2BbWGLmz4JbKGqtHilgKSX7ZTJJ%2BEmufkz%2FyCztD3zDSgBHm5Fq9f9lE1%2BOefxtE66Q0AK6mfiQ8nv%2F2FW0pDTIaaHz7P1YQE17oSAbEEOxE4%2FedhWUa9tV2z7E%2BagNx8%2FA4XJX95gTYAJZtNa8zchdqDPPqbQK9X3%2FonxalSUDvriASmOs7HJVt%2FOsOHyz16ES4ROa4aWHot54oA94rWgKSSwv3iqFAFUlJc%2BBRNoYiQiBcuK2GnjxosAqIXtNvck1dtUy38sOS0TISBZSOeV4bITaVYwGnIp%2Fbz4nvlq15%2FPjoTRXlgT0vhBM%2Bb7uxYds6mX4ImhKM5dQlvYF0dvSJ3GupKYDkT5MGoT62V%2BsuPEpXfPQ4zSOdUY6yGoFBNOxps69UKPWHja17mctaWDrnbylZI62%2Bq0VCG0lSg4J82oQr6lO4%2BuKyVNgiWVJJqNZUNbsRD4kgh29bcQjph39WxwKuElJNq4GJthpNoSjDlaPGiO3w79U59wMZoY6UFjtA5a%2BlQRIKK2RQaJd6y6T4A0%2Fx8zDu%2F6DLBjqkASsA6Rzp12aXQTS7LJ9VC6ilrzYn%2B45xW84W0ZODy74rj4%2FZNnz759%2BblecAnHfviPNk0zvZBlx9f7BbcCmWHomOGCXgFZeASA31hSAdZg4IM26LVfUkrXUxIYsVNHtE5V4AlD5%2Filr%2Fw5cghgO4k8PbgBXIo4UxzSMnNvUc6H%2FkmleKR6kup5Re2zOI5eDN7J7GZdhYRyTrMwLlNcqOQT1PL1QF&X-Amz-Signature=bad9dfe809e8c367a079835e2124e4bc83ffa8cfaf446c5567de83b964a9a08e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO5EQUMO%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQC%2FtjSUGwGLySnI2oktN4JmJcP0uHPNre5orv6RG%2FYWpAIhAOvd%2F0%2BV3qaYO6pvxbyfOLWl7N877NqBNWeL2M6Yqn3YKv8DCCoQABoMNjM3NDIzMTgzODA1IgwEP3at0zRhM%2FNVTb0q3ANLWtpqKvaGj09bjiWZr53X6pblVU2QYPdlztdWRbwdN8zmjkqxm9tMDfITouqHp8ounzk0c0NOz7ip6wpz%2FwYMM1IjEB%2BQG%2BbWGLmz4JbKGqtHilgKSX7ZTJJ%2BEmufkz%2FyCztD3zDSgBHm5Fq9f9lE1%2BOefxtE66Q0AK6mfiQ8nv%2F2FW0pDTIaaHz7P1YQE17oSAbEEOxE4%2FedhWUa9tV2z7E%2BagNx8%2FA4XJX95gTYAJZtNa8zchdqDPPqbQK9X3%2FonxalSUDvriASmOs7HJVt%2FOsOHyz16ES4ROa4aWHot54oA94rWgKSSwv3iqFAFUlJc%2BBRNoYiQiBcuK2GnjxosAqIXtNvck1dtUy38sOS0TISBZSOeV4bITaVYwGnIp%2Fbz4nvlq15%2FPjoTRXlgT0vhBM%2Bb7uxYds6mX4ImhKM5dQlvYF0dvSJ3GupKYDkT5MGoT62V%2BsuPEpXfPQ4zSOdUY6yGoFBNOxps69UKPWHja17mctaWDrnbylZI62%2Bq0VCG0lSg4J82oQr6lO4%2BuKyVNgiWVJJqNZUNbsRD4kgh29bcQjph39WxwKuElJNq4GJthpNoSjDlaPGiO3w79U59wMZoY6UFjtA5a%2BlQRIKK2RQaJd6y6T4A0%2Fx8zDu%2F6DLBjqkASsA6Rzp12aXQTS7LJ9VC6ilrzYn%2B45xW84W0ZODy74rj4%2FZNnz759%2BblecAnHfviPNk0zvZBlx9f7BbcCmWHomOGCXgFZeASA31hSAdZg4IM26LVfUkrXUxIYsVNHtE5V4AlD5%2Filr%2Fw5cghgO4k8PbgBXIo4UxzSMnNvUc6H%2FkmleKR6kup5Re2zOI5eDN7J7GZdhYRyTrMwLlNcqOQT1PL1QF&X-Amz-Signature=b1115f009af26c5d243b6e39c58423bc63eaa48d9f934840623b1d7964ffba91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO5EQUMO%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQC%2FtjSUGwGLySnI2oktN4JmJcP0uHPNre5orv6RG%2FYWpAIhAOvd%2F0%2BV3qaYO6pvxbyfOLWl7N877NqBNWeL2M6Yqn3YKv8DCCoQABoMNjM3NDIzMTgzODA1IgwEP3at0zRhM%2FNVTb0q3ANLWtpqKvaGj09bjiWZr53X6pblVU2QYPdlztdWRbwdN8zmjkqxm9tMDfITouqHp8ounzk0c0NOz7ip6wpz%2FwYMM1IjEB%2BQG%2BbWGLmz4JbKGqtHilgKSX7ZTJJ%2BEmufkz%2FyCztD3zDSgBHm5Fq9f9lE1%2BOefxtE66Q0AK6mfiQ8nv%2F2FW0pDTIaaHz7P1YQE17oSAbEEOxE4%2FedhWUa9tV2z7E%2BagNx8%2FA4XJX95gTYAJZtNa8zchdqDPPqbQK9X3%2FonxalSUDvriASmOs7HJVt%2FOsOHyz16ES4ROa4aWHot54oA94rWgKSSwv3iqFAFUlJc%2BBRNoYiQiBcuK2GnjxosAqIXtNvck1dtUy38sOS0TISBZSOeV4bITaVYwGnIp%2Fbz4nvlq15%2FPjoTRXlgT0vhBM%2Bb7uxYds6mX4ImhKM5dQlvYF0dvSJ3GupKYDkT5MGoT62V%2BsuPEpXfPQ4zSOdUY6yGoFBNOxps69UKPWHja17mctaWDrnbylZI62%2Bq0VCG0lSg4J82oQr6lO4%2BuKyVNgiWVJJqNZUNbsRD4kgh29bcQjph39WxwKuElJNq4GJthpNoSjDlaPGiO3w79U59wMZoY6UFjtA5a%2BlQRIKK2RQaJd6y6T4A0%2Fx8zDu%2F6DLBjqkASsA6Rzp12aXQTS7LJ9VC6ilrzYn%2B45xW84W0ZODy74rj4%2FZNnz759%2BblecAnHfviPNk0zvZBlx9f7BbcCmWHomOGCXgFZeASA31hSAdZg4IM26LVfUkrXUxIYsVNHtE5V4AlD5%2Filr%2Fw5cghgO4k8PbgBXIo4UxzSMnNvUc6H%2FkmleKR6kup5Re2zOI5eDN7J7GZdhYRyTrMwLlNcqOQT1PL1QF&X-Amz-Signature=476ace580c9dc63a1a390a446777e6154e727fe5c4bff68dfb6f3a69f36cf623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO5EQUMO%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQC%2FtjSUGwGLySnI2oktN4JmJcP0uHPNre5orv6RG%2FYWpAIhAOvd%2F0%2BV3qaYO6pvxbyfOLWl7N877NqBNWeL2M6Yqn3YKv8DCCoQABoMNjM3NDIzMTgzODA1IgwEP3at0zRhM%2FNVTb0q3ANLWtpqKvaGj09bjiWZr53X6pblVU2QYPdlztdWRbwdN8zmjkqxm9tMDfITouqHp8ounzk0c0NOz7ip6wpz%2FwYMM1IjEB%2BQG%2BbWGLmz4JbKGqtHilgKSX7ZTJJ%2BEmufkz%2FyCztD3zDSgBHm5Fq9f9lE1%2BOefxtE66Q0AK6mfiQ8nv%2F2FW0pDTIaaHz7P1YQE17oSAbEEOxE4%2FedhWUa9tV2z7E%2BagNx8%2FA4XJX95gTYAJZtNa8zchdqDPPqbQK9X3%2FonxalSUDvriASmOs7HJVt%2FOsOHyz16ES4ROa4aWHot54oA94rWgKSSwv3iqFAFUlJc%2BBRNoYiQiBcuK2GnjxosAqIXtNvck1dtUy38sOS0TISBZSOeV4bITaVYwGnIp%2Fbz4nvlq15%2FPjoTRXlgT0vhBM%2Bb7uxYds6mX4ImhKM5dQlvYF0dvSJ3GupKYDkT5MGoT62V%2BsuPEpXfPQ4zSOdUY6yGoFBNOxps69UKPWHja17mctaWDrnbylZI62%2Bq0VCG0lSg4J82oQr6lO4%2BuKyVNgiWVJJqNZUNbsRD4kgh29bcQjph39WxwKuElJNq4GJthpNoSjDlaPGiO3w79U59wMZoY6UFjtA5a%2BlQRIKK2RQaJd6y6T4A0%2Fx8zDu%2F6DLBjqkASsA6Rzp12aXQTS7LJ9VC6ilrzYn%2B45xW84W0ZODy74rj4%2FZNnz759%2BblecAnHfviPNk0zvZBlx9f7BbcCmWHomOGCXgFZeASA31hSAdZg4IM26LVfUkrXUxIYsVNHtE5V4AlD5%2Filr%2Fw5cghgO4k8PbgBXIo4UxzSMnNvUc6H%2FkmleKR6kup5Re2zOI5eDN7J7GZdhYRyTrMwLlNcqOQT1PL1QF&X-Amz-Signature=05780563e1ad2f4f8feb98dd95d4630a64e82b9b96f1ed264bd0800cbc8fe90b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO5EQUMO%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQC%2FtjSUGwGLySnI2oktN4JmJcP0uHPNre5orv6RG%2FYWpAIhAOvd%2F0%2BV3qaYO6pvxbyfOLWl7N877NqBNWeL2M6Yqn3YKv8DCCoQABoMNjM3NDIzMTgzODA1IgwEP3at0zRhM%2FNVTb0q3ANLWtpqKvaGj09bjiWZr53X6pblVU2QYPdlztdWRbwdN8zmjkqxm9tMDfITouqHp8ounzk0c0NOz7ip6wpz%2FwYMM1IjEB%2BQG%2BbWGLmz4JbKGqtHilgKSX7ZTJJ%2BEmufkz%2FyCztD3zDSgBHm5Fq9f9lE1%2BOefxtE66Q0AK6mfiQ8nv%2F2FW0pDTIaaHz7P1YQE17oSAbEEOxE4%2FedhWUa9tV2z7E%2BagNx8%2FA4XJX95gTYAJZtNa8zchdqDPPqbQK9X3%2FonxalSUDvriASmOs7HJVt%2FOsOHyz16ES4ROa4aWHot54oA94rWgKSSwv3iqFAFUlJc%2BBRNoYiQiBcuK2GnjxosAqIXtNvck1dtUy38sOS0TISBZSOeV4bITaVYwGnIp%2Fbz4nvlq15%2FPjoTRXlgT0vhBM%2Bb7uxYds6mX4ImhKM5dQlvYF0dvSJ3GupKYDkT5MGoT62V%2BsuPEpXfPQ4zSOdUY6yGoFBNOxps69UKPWHja17mctaWDrnbylZI62%2Bq0VCG0lSg4J82oQr6lO4%2BuKyVNgiWVJJqNZUNbsRD4kgh29bcQjph39WxwKuElJNq4GJthpNoSjDlaPGiO3w79U59wMZoY6UFjtA5a%2BlQRIKK2RQaJd6y6T4A0%2Fx8zDu%2F6DLBjqkASsA6Rzp12aXQTS7LJ9VC6ilrzYn%2B45xW84W0ZODy74rj4%2FZNnz759%2BblecAnHfviPNk0zvZBlx9f7BbcCmWHomOGCXgFZeASA31hSAdZg4IM26LVfUkrXUxIYsVNHtE5V4AlD5%2Filr%2Fw5cghgO4k8PbgBXIo4UxzSMnNvUc6H%2FkmleKR6kup5Re2zOI5eDN7J7GZdhYRyTrMwLlNcqOQT1PL1QF&X-Amz-Signature=704239ec9a34ca170b46282afeeb2c47406f5ad65ed720cc15ff1d217032056f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


