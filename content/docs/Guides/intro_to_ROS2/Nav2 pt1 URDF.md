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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHW7VCD2%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC1qct3TnhLDLdcGl7UMmQIkZeRcJkyYfRAWsrPpkyUqAiBxaBULu3xD7bKaUjzVoMGOlxAe1yJySyDvllZY5lFEcyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMpdP1U9PEKGs7HoTBKtwDq8zg2PNtJBlBDDBxBsuUwoYUMBQZrJsThyqQNF52Uz%2F5%2B67%2FmiiY5ZptnFySdlo%2FRjTO5KdU8%2FR9t7I8vz1OvQ18mddsaceNZzjHZ4E1jRjr9Kar7pFDpsacVeCBESB44PcBk%2BdijnLBb%2FCN7VIGfDS03xFsM9%2BMD9j7yC3ZFzwxAHyxeISpMNUaESsrP%2FExSWFHUac8QzRe7wfroBrz7bWHIbPMAlwVHWemFDy6gpA%2B3GqiLS6CZMRznhWL2kTPFTZY8X2GVDcS66%2Fviy8juwYDtSLvI00AIn3o368P1PHupfGQJRh%2FBi8utQfFNQYfSHclwryTR1zQ7wrrSFmku4rLiLSZhEDI69F6IPWq%2Bkz2Fb3HgbFLCBkedTXlNprpUhnFiqw2qD5bvH4GlGJhDMDW6%2FjgBkz1A4c%2Fnqch%2Fkv6eaTv1vX7nplUjcOkya%2BQxaxqd%2Fn5iELzy6kltR8SREOLxFJuL%2BeX2oF%2FYN9BVo87R7zy2tDqQwePVLmsREp5ewjuRw4xho5r1ED7OU7pljI0KyEkaft2hQD45sG14UJ1gHtCdcv1Ls0y8H%2FsunRxYL4ufqwDD9gwx4PSRHBbwHPXU1VFTcrLZSjQhWyin01v29NWZYX4Q32bxdgwxqbVzwY6pgEZLkJ6CakJc1V1ZOIU3jMcW7ZWl6BLj%2Bxpl5Bm0jBvkt9MjaS77ch1GYdDqXMQ9FEvw6CYqC7KQYPzdlfZKRGaGJtc9ULwBPEnOprWj614pivuQ29mEJ80DrBH6VvufdMbJud4c5%2BbTstabDrfjVlLFS2f58A0KiPqGILS%2FsfDyGkmVKFrJIh0kbl7zfpku5JIrapNKbidxGnTvFi8qU78n9ldWfXe&X-Amz-Signature=03745ddbc7c3f3d91df86270f847d344bb03d08a8beb056a348dcfbd66a7856d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHW7VCD2%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC1qct3TnhLDLdcGl7UMmQIkZeRcJkyYfRAWsrPpkyUqAiBxaBULu3xD7bKaUjzVoMGOlxAe1yJySyDvllZY5lFEcyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMpdP1U9PEKGs7HoTBKtwDq8zg2PNtJBlBDDBxBsuUwoYUMBQZrJsThyqQNF52Uz%2F5%2B67%2FmiiY5ZptnFySdlo%2FRjTO5KdU8%2FR9t7I8vz1OvQ18mddsaceNZzjHZ4E1jRjr9Kar7pFDpsacVeCBESB44PcBk%2BdijnLBb%2FCN7VIGfDS03xFsM9%2BMD9j7yC3ZFzwxAHyxeISpMNUaESsrP%2FExSWFHUac8QzRe7wfroBrz7bWHIbPMAlwVHWemFDy6gpA%2B3GqiLS6CZMRznhWL2kTPFTZY8X2GVDcS66%2Fviy8juwYDtSLvI00AIn3o368P1PHupfGQJRh%2FBi8utQfFNQYfSHclwryTR1zQ7wrrSFmku4rLiLSZhEDI69F6IPWq%2Bkz2Fb3HgbFLCBkedTXlNprpUhnFiqw2qD5bvH4GlGJhDMDW6%2FjgBkz1A4c%2Fnqch%2Fkv6eaTv1vX7nplUjcOkya%2BQxaxqd%2Fn5iELzy6kltR8SREOLxFJuL%2BeX2oF%2FYN9BVo87R7zy2tDqQwePVLmsREp5ewjuRw4xho5r1ED7OU7pljI0KyEkaft2hQD45sG14UJ1gHtCdcv1Ls0y8H%2FsunRxYL4ufqwDD9gwx4PSRHBbwHPXU1VFTcrLZSjQhWyin01v29NWZYX4Q32bxdgwxqbVzwY6pgEZLkJ6CakJc1V1ZOIU3jMcW7ZWl6BLj%2Bxpl5Bm0jBvkt9MjaS77ch1GYdDqXMQ9FEvw6CYqC7KQYPzdlfZKRGaGJtc9ULwBPEnOprWj614pivuQ29mEJ80DrBH6VvufdMbJud4c5%2BbTstabDrfjVlLFS2f58A0KiPqGILS%2FsfDyGkmVKFrJIh0kbl7zfpku5JIrapNKbidxGnTvFi8qU78n9ldWfXe&X-Amz-Signature=2d3014a5e377290b89853f28cdd70ef169b6bcf326f5a150127b9c4adec8f2c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHW7VCD2%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC1qct3TnhLDLdcGl7UMmQIkZeRcJkyYfRAWsrPpkyUqAiBxaBULu3xD7bKaUjzVoMGOlxAe1yJySyDvllZY5lFEcyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMpdP1U9PEKGs7HoTBKtwDq8zg2PNtJBlBDDBxBsuUwoYUMBQZrJsThyqQNF52Uz%2F5%2B67%2FmiiY5ZptnFySdlo%2FRjTO5KdU8%2FR9t7I8vz1OvQ18mddsaceNZzjHZ4E1jRjr9Kar7pFDpsacVeCBESB44PcBk%2BdijnLBb%2FCN7VIGfDS03xFsM9%2BMD9j7yC3ZFzwxAHyxeISpMNUaESsrP%2FExSWFHUac8QzRe7wfroBrz7bWHIbPMAlwVHWemFDy6gpA%2B3GqiLS6CZMRznhWL2kTPFTZY8X2GVDcS66%2Fviy8juwYDtSLvI00AIn3o368P1PHupfGQJRh%2FBi8utQfFNQYfSHclwryTR1zQ7wrrSFmku4rLiLSZhEDI69F6IPWq%2Bkz2Fb3HgbFLCBkedTXlNprpUhnFiqw2qD5bvH4GlGJhDMDW6%2FjgBkz1A4c%2Fnqch%2Fkv6eaTv1vX7nplUjcOkya%2BQxaxqd%2Fn5iELzy6kltR8SREOLxFJuL%2BeX2oF%2FYN9BVo87R7zy2tDqQwePVLmsREp5ewjuRw4xho5r1ED7OU7pljI0KyEkaft2hQD45sG14UJ1gHtCdcv1Ls0y8H%2FsunRxYL4ufqwDD9gwx4PSRHBbwHPXU1VFTcrLZSjQhWyin01v29NWZYX4Q32bxdgwxqbVzwY6pgEZLkJ6CakJc1V1ZOIU3jMcW7ZWl6BLj%2Bxpl5Bm0jBvkt9MjaS77ch1GYdDqXMQ9FEvw6CYqC7KQYPzdlfZKRGaGJtc9ULwBPEnOprWj614pivuQ29mEJ80DrBH6VvufdMbJud4c5%2BbTstabDrfjVlLFS2f58A0KiPqGILS%2FsfDyGkmVKFrJIh0kbl7zfpku5JIrapNKbidxGnTvFi8qU78n9ldWfXe&X-Amz-Signature=330f620b7c355acd530946ba3022beb43dc89e47a64da0f17be1bee312e69bdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHW7VCD2%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC1qct3TnhLDLdcGl7UMmQIkZeRcJkyYfRAWsrPpkyUqAiBxaBULu3xD7bKaUjzVoMGOlxAe1yJySyDvllZY5lFEcyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMpdP1U9PEKGs7HoTBKtwDq8zg2PNtJBlBDDBxBsuUwoYUMBQZrJsThyqQNF52Uz%2F5%2B67%2FmiiY5ZptnFySdlo%2FRjTO5KdU8%2FR9t7I8vz1OvQ18mddsaceNZzjHZ4E1jRjr9Kar7pFDpsacVeCBESB44PcBk%2BdijnLBb%2FCN7VIGfDS03xFsM9%2BMD9j7yC3ZFzwxAHyxeISpMNUaESsrP%2FExSWFHUac8QzRe7wfroBrz7bWHIbPMAlwVHWemFDy6gpA%2B3GqiLS6CZMRznhWL2kTPFTZY8X2GVDcS66%2Fviy8juwYDtSLvI00AIn3o368P1PHupfGQJRh%2FBi8utQfFNQYfSHclwryTR1zQ7wrrSFmku4rLiLSZhEDI69F6IPWq%2Bkz2Fb3HgbFLCBkedTXlNprpUhnFiqw2qD5bvH4GlGJhDMDW6%2FjgBkz1A4c%2Fnqch%2Fkv6eaTv1vX7nplUjcOkya%2BQxaxqd%2Fn5iELzy6kltR8SREOLxFJuL%2BeX2oF%2FYN9BVo87R7zy2tDqQwePVLmsREp5ewjuRw4xho5r1ED7OU7pljI0KyEkaft2hQD45sG14UJ1gHtCdcv1Ls0y8H%2FsunRxYL4ufqwDD9gwx4PSRHBbwHPXU1VFTcrLZSjQhWyin01v29NWZYX4Q32bxdgwxqbVzwY6pgEZLkJ6CakJc1V1ZOIU3jMcW7ZWl6BLj%2Bxpl5Bm0jBvkt9MjaS77ch1GYdDqXMQ9FEvw6CYqC7KQYPzdlfZKRGaGJtc9ULwBPEnOprWj614pivuQ29mEJ80DrBH6VvufdMbJud4c5%2BbTstabDrfjVlLFS2f58A0KiPqGILS%2FsfDyGkmVKFrJIh0kbl7zfpku5JIrapNKbidxGnTvFi8qU78n9ldWfXe&X-Amz-Signature=8d4b1007e0836b4bf1ceda620b310260527590fb872b6366b04c616b94a914bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHW7VCD2%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC1qct3TnhLDLdcGl7UMmQIkZeRcJkyYfRAWsrPpkyUqAiBxaBULu3xD7bKaUjzVoMGOlxAe1yJySyDvllZY5lFEcyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMpdP1U9PEKGs7HoTBKtwDq8zg2PNtJBlBDDBxBsuUwoYUMBQZrJsThyqQNF52Uz%2F5%2B67%2FmiiY5ZptnFySdlo%2FRjTO5KdU8%2FR9t7I8vz1OvQ18mddsaceNZzjHZ4E1jRjr9Kar7pFDpsacVeCBESB44PcBk%2BdijnLBb%2FCN7VIGfDS03xFsM9%2BMD9j7yC3ZFzwxAHyxeISpMNUaESsrP%2FExSWFHUac8QzRe7wfroBrz7bWHIbPMAlwVHWemFDy6gpA%2B3GqiLS6CZMRznhWL2kTPFTZY8X2GVDcS66%2Fviy8juwYDtSLvI00AIn3o368P1PHupfGQJRh%2FBi8utQfFNQYfSHclwryTR1zQ7wrrSFmku4rLiLSZhEDI69F6IPWq%2Bkz2Fb3HgbFLCBkedTXlNprpUhnFiqw2qD5bvH4GlGJhDMDW6%2FjgBkz1A4c%2Fnqch%2Fkv6eaTv1vX7nplUjcOkya%2BQxaxqd%2Fn5iELzy6kltR8SREOLxFJuL%2BeX2oF%2FYN9BVo87R7zy2tDqQwePVLmsREp5ewjuRw4xho5r1ED7OU7pljI0KyEkaft2hQD45sG14UJ1gHtCdcv1Ls0y8H%2FsunRxYL4ufqwDD9gwx4PSRHBbwHPXU1VFTcrLZSjQhWyin01v29NWZYX4Q32bxdgwxqbVzwY6pgEZLkJ6CakJc1V1ZOIU3jMcW7ZWl6BLj%2Bxpl5Bm0jBvkt9MjaS77ch1GYdDqXMQ9FEvw6CYqC7KQYPzdlfZKRGaGJtc9ULwBPEnOprWj614pivuQ29mEJ80DrBH6VvufdMbJud4c5%2BbTstabDrfjVlLFS2f58A0KiPqGILS%2FsfDyGkmVKFrJIh0kbl7zfpku5JIrapNKbidxGnTvFi8qU78n9ldWfXe&X-Amz-Signature=506c8fad19fd1e2a4bcb34b0a1f16754dc472653ca4ae519124adbe077432a52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHW7VCD2%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC1qct3TnhLDLdcGl7UMmQIkZeRcJkyYfRAWsrPpkyUqAiBxaBULu3xD7bKaUjzVoMGOlxAe1yJySyDvllZY5lFEcyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMpdP1U9PEKGs7HoTBKtwDq8zg2PNtJBlBDDBxBsuUwoYUMBQZrJsThyqQNF52Uz%2F5%2B67%2FmiiY5ZptnFySdlo%2FRjTO5KdU8%2FR9t7I8vz1OvQ18mddsaceNZzjHZ4E1jRjr9Kar7pFDpsacVeCBESB44PcBk%2BdijnLBb%2FCN7VIGfDS03xFsM9%2BMD9j7yC3ZFzwxAHyxeISpMNUaESsrP%2FExSWFHUac8QzRe7wfroBrz7bWHIbPMAlwVHWemFDy6gpA%2B3GqiLS6CZMRznhWL2kTPFTZY8X2GVDcS66%2Fviy8juwYDtSLvI00AIn3o368P1PHupfGQJRh%2FBi8utQfFNQYfSHclwryTR1zQ7wrrSFmku4rLiLSZhEDI69F6IPWq%2Bkz2Fb3HgbFLCBkedTXlNprpUhnFiqw2qD5bvH4GlGJhDMDW6%2FjgBkz1A4c%2Fnqch%2Fkv6eaTv1vX7nplUjcOkya%2BQxaxqd%2Fn5iELzy6kltR8SREOLxFJuL%2BeX2oF%2FYN9BVo87R7zy2tDqQwePVLmsREp5ewjuRw4xho5r1ED7OU7pljI0KyEkaft2hQD45sG14UJ1gHtCdcv1Ls0y8H%2FsunRxYL4ufqwDD9gwx4PSRHBbwHPXU1VFTcrLZSjQhWyin01v29NWZYX4Q32bxdgwxqbVzwY6pgEZLkJ6CakJc1V1ZOIU3jMcW7ZWl6BLj%2Bxpl5Bm0jBvkt9MjaS77ch1GYdDqXMQ9FEvw6CYqC7KQYPzdlfZKRGaGJtc9ULwBPEnOprWj614pivuQ29mEJ80DrBH6VvufdMbJud4c5%2BbTstabDrfjVlLFS2f58A0KiPqGILS%2FsfDyGkmVKFrJIh0kbl7zfpku5JIrapNKbidxGnTvFi8qU78n9ldWfXe&X-Amz-Signature=6f76a1a10bd35f529b0f840f1f9b4d5e6adee1fd62ced865549e0f3b3c229368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHW7VCD2%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC1qct3TnhLDLdcGl7UMmQIkZeRcJkyYfRAWsrPpkyUqAiBxaBULu3xD7bKaUjzVoMGOlxAe1yJySyDvllZY5lFEcyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMpdP1U9PEKGs7HoTBKtwDq8zg2PNtJBlBDDBxBsuUwoYUMBQZrJsThyqQNF52Uz%2F5%2B67%2FmiiY5ZptnFySdlo%2FRjTO5KdU8%2FR9t7I8vz1OvQ18mddsaceNZzjHZ4E1jRjr9Kar7pFDpsacVeCBESB44PcBk%2BdijnLBb%2FCN7VIGfDS03xFsM9%2BMD9j7yC3ZFzwxAHyxeISpMNUaESsrP%2FExSWFHUac8QzRe7wfroBrz7bWHIbPMAlwVHWemFDy6gpA%2B3GqiLS6CZMRznhWL2kTPFTZY8X2GVDcS66%2Fviy8juwYDtSLvI00AIn3o368P1PHupfGQJRh%2FBi8utQfFNQYfSHclwryTR1zQ7wrrSFmku4rLiLSZhEDI69F6IPWq%2Bkz2Fb3HgbFLCBkedTXlNprpUhnFiqw2qD5bvH4GlGJhDMDW6%2FjgBkz1A4c%2Fnqch%2Fkv6eaTv1vX7nplUjcOkya%2BQxaxqd%2Fn5iELzy6kltR8SREOLxFJuL%2BeX2oF%2FYN9BVo87R7zy2tDqQwePVLmsREp5ewjuRw4xho5r1ED7OU7pljI0KyEkaft2hQD45sG14UJ1gHtCdcv1Ls0y8H%2FsunRxYL4ufqwDD9gwx4PSRHBbwHPXU1VFTcrLZSjQhWyin01v29NWZYX4Q32bxdgwxqbVzwY6pgEZLkJ6CakJc1V1ZOIU3jMcW7ZWl6BLj%2Bxpl5Bm0jBvkt9MjaS77ch1GYdDqXMQ9FEvw6CYqC7KQYPzdlfZKRGaGJtc9ULwBPEnOprWj614pivuQ29mEJ80DrBH6VvufdMbJud4c5%2BbTstabDrfjVlLFS2f58A0KiPqGILS%2FsfDyGkmVKFrJIh0kbl7zfpku5JIrapNKbidxGnTvFi8qU78n9ldWfXe&X-Amz-Signature=9f0af7213bd743a4a103b0498ff902d62de1efc48042caa56c0e84581852e226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHW7VCD2%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC1qct3TnhLDLdcGl7UMmQIkZeRcJkyYfRAWsrPpkyUqAiBxaBULu3xD7bKaUjzVoMGOlxAe1yJySyDvllZY5lFEcyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMpdP1U9PEKGs7HoTBKtwDq8zg2PNtJBlBDDBxBsuUwoYUMBQZrJsThyqQNF52Uz%2F5%2B67%2FmiiY5ZptnFySdlo%2FRjTO5KdU8%2FR9t7I8vz1OvQ18mddsaceNZzjHZ4E1jRjr9Kar7pFDpsacVeCBESB44PcBk%2BdijnLBb%2FCN7VIGfDS03xFsM9%2BMD9j7yC3ZFzwxAHyxeISpMNUaESsrP%2FExSWFHUac8QzRe7wfroBrz7bWHIbPMAlwVHWemFDy6gpA%2B3GqiLS6CZMRznhWL2kTPFTZY8X2GVDcS66%2Fviy8juwYDtSLvI00AIn3o368P1PHupfGQJRh%2FBi8utQfFNQYfSHclwryTR1zQ7wrrSFmku4rLiLSZhEDI69F6IPWq%2Bkz2Fb3HgbFLCBkedTXlNprpUhnFiqw2qD5bvH4GlGJhDMDW6%2FjgBkz1A4c%2Fnqch%2Fkv6eaTv1vX7nplUjcOkya%2BQxaxqd%2Fn5iELzy6kltR8SREOLxFJuL%2BeX2oF%2FYN9BVo87R7zy2tDqQwePVLmsREp5ewjuRw4xho5r1ED7OU7pljI0KyEkaft2hQD45sG14UJ1gHtCdcv1Ls0y8H%2FsunRxYL4ufqwDD9gwx4PSRHBbwHPXU1VFTcrLZSjQhWyin01v29NWZYX4Q32bxdgwxqbVzwY6pgEZLkJ6CakJc1V1ZOIU3jMcW7ZWl6BLj%2Bxpl5Bm0jBvkt9MjaS77ch1GYdDqXMQ9FEvw6CYqC7KQYPzdlfZKRGaGJtc9ULwBPEnOprWj614pivuQ29mEJ80DrBH6VvufdMbJud4c5%2BbTstabDrfjVlLFS2f58A0KiPqGILS%2FsfDyGkmVKFrJIh0kbl7zfpku5JIrapNKbidxGnTvFi8qU78n9ldWfXe&X-Amz-Signature=ea23d30863fab6f4102e309f7196d7a867cc38ce0c07be818b8ecbbb747defd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHW7VCD2%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC1qct3TnhLDLdcGl7UMmQIkZeRcJkyYfRAWsrPpkyUqAiBxaBULu3xD7bKaUjzVoMGOlxAe1yJySyDvllZY5lFEcyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMpdP1U9PEKGs7HoTBKtwDq8zg2PNtJBlBDDBxBsuUwoYUMBQZrJsThyqQNF52Uz%2F5%2B67%2FmiiY5ZptnFySdlo%2FRjTO5KdU8%2FR9t7I8vz1OvQ18mddsaceNZzjHZ4E1jRjr9Kar7pFDpsacVeCBESB44PcBk%2BdijnLBb%2FCN7VIGfDS03xFsM9%2BMD9j7yC3ZFzwxAHyxeISpMNUaESsrP%2FExSWFHUac8QzRe7wfroBrz7bWHIbPMAlwVHWemFDy6gpA%2B3GqiLS6CZMRznhWL2kTPFTZY8X2GVDcS66%2Fviy8juwYDtSLvI00AIn3o368P1PHupfGQJRh%2FBi8utQfFNQYfSHclwryTR1zQ7wrrSFmku4rLiLSZhEDI69F6IPWq%2Bkz2Fb3HgbFLCBkedTXlNprpUhnFiqw2qD5bvH4GlGJhDMDW6%2FjgBkz1A4c%2Fnqch%2Fkv6eaTv1vX7nplUjcOkya%2BQxaxqd%2Fn5iELzy6kltR8SREOLxFJuL%2BeX2oF%2FYN9BVo87R7zy2tDqQwePVLmsREp5ewjuRw4xho5r1ED7OU7pljI0KyEkaft2hQD45sG14UJ1gHtCdcv1Ls0y8H%2FsunRxYL4ufqwDD9gwx4PSRHBbwHPXU1VFTcrLZSjQhWyin01v29NWZYX4Q32bxdgwxqbVzwY6pgEZLkJ6CakJc1V1ZOIU3jMcW7ZWl6BLj%2Bxpl5Bm0jBvkt9MjaS77ch1GYdDqXMQ9FEvw6CYqC7KQYPzdlfZKRGaGJtc9ULwBPEnOprWj614pivuQ29mEJ80DrBH6VvufdMbJud4c5%2BbTstabDrfjVlLFS2f58A0KiPqGILS%2FsfDyGkmVKFrJIh0kbl7zfpku5JIrapNKbidxGnTvFi8qU78n9ldWfXe&X-Amz-Signature=26b058cd92a991ca366d953f8b01601efcffc6706d5774f90fbfd44ec4b94dce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHW7VCD2%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC1qct3TnhLDLdcGl7UMmQIkZeRcJkyYfRAWsrPpkyUqAiBxaBULu3xD7bKaUjzVoMGOlxAe1yJySyDvllZY5lFEcyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMpdP1U9PEKGs7HoTBKtwDq8zg2PNtJBlBDDBxBsuUwoYUMBQZrJsThyqQNF52Uz%2F5%2B67%2FmiiY5ZptnFySdlo%2FRjTO5KdU8%2FR9t7I8vz1OvQ18mddsaceNZzjHZ4E1jRjr9Kar7pFDpsacVeCBESB44PcBk%2BdijnLBb%2FCN7VIGfDS03xFsM9%2BMD9j7yC3ZFzwxAHyxeISpMNUaESsrP%2FExSWFHUac8QzRe7wfroBrz7bWHIbPMAlwVHWemFDy6gpA%2B3GqiLS6CZMRznhWL2kTPFTZY8X2GVDcS66%2Fviy8juwYDtSLvI00AIn3o368P1PHupfGQJRh%2FBi8utQfFNQYfSHclwryTR1zQ7wrrSFmku4rLiLSZhEDI69F6IPWq%2Bkz2Fb3HgbFLCBkedTXlNprpUhnFiqw2qD5bvH4GlGJhDMDW6%2FjgBkz1A4c%2Fnqch%2Fkv6eaTv1vX7nplUjcOkya%2BQxaxqd%2Fn5iELzy6kltR8SREOLxFJuL%2BeX2oF%2FYN9BVo87R7zy2tDqQwePVLmsREp5ewjuRw4xho5r1ED7OU7pljI0KyEkaft2hQD45sG14UJ1gHtCdcv1Ls0y8H%2FsunRxYL4ufqwDD9gwx4PSRHBbwHPXU1VFTcrLZSjQhWyin01v29NWZYX4Q32bxdgwxqbVzwY6pgEZLkJ6CakJc1V1ZOIU3jMcW7ZWl6BLj%2Bxpl5Bm0jBvkt9MjaS77ch1GYdDqXMQ9FEvw6CYqC7KQYPzdlfZKRGaGJtc9ULwBPEnOprWj614pivuQ29mEJ80DrBH6VvufdMbJud4c5%2BbTstabDrfjVlLFS2f58A0KiPqGILS%2FsfDyGkmVKFrJIh0kbl7zfpku5JIrapNKbidxGnTvFi8qU78n9ldWfXe&X-Amz-Signature=4770591232f3dfe78d874e3b763bbe9f838229a6bf66c7ed300ca2b3ae3672a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FMBC63U%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC2NU0klehlnmb0PfNuueB4k5%2BwZNlzkfXCmvsnYluZEAIgcaVAsspB3tbF8OAHbv28g8uz0CmfxK8ydazbM9YPV2Iq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDIRry3%2Bse%2F3tfbbnpCrcA8VHUEiBiFpP0LemynZjznEbTizLfVxT4ODOsZVda%2FeEGJsCONachBOxbIK3PLJE%2FmCJ5J6toNOQkvrEOdnHC7bjWPnsDRIWom2JgjGnxhebciwh%2F0hD9AuyPxiCOEvXZ7Hy%2Forkejliehh2o5L22F%2BLio7V%2FD9K4kURM%2FWx181ZvEaqO5tI8EOUZlTgNixc4l6e8L2Y49F27YwKPzt0pNDwKDzq%2BDtY0feu9D2qOI245HOlSVB5eLETaLNDwXY4HZiv%2F2V7qDGkTato2EErVoSZp8ucobmP1yFrJShQQyKPIVCTmT2FrhbRrqX2CAuimRy47urx86ZFQK1mtgAIZ0nmqVs49LMPCgHVzO%2FK%2FYV67TevfwKzhRUVQUc5%2BemDbHxksKffKdsSZ18B%2Bl0nb4%2FcWd2EOMQ9W6FBFW66skuxCNF8uHnL22ZPsvvsoHRJCoVd4kBP2%2FoboTH%2F9mK6%2BgDiRW%2B6uTVzEYTXd9B7%2BjBRDhjecorvEk6pIxYmxhOHDstNjlu5p9SNYwjpXYIEUCLu%2F2Py8Kl%2FBqj06OnXjJ8p0vQhnamN3MPKA4dTwiq6XSZ%2BYlLh9HnzjdmURNdLslmG9gqlIyO9AvCCSWfgSlqJwC%2BO1kBoOYpRLWb5MLem1c8GOqUBT28Shcb4%2BdX6dDGpWEsPNWDadmZpygc6afn%2F462%2Bpq9sHewjmbYDqlmzs8Pfs0L5slBdFXFHkfHOFBzcN0Hgq7gyKzPwcrGX0YaTll5uUEGi7IpTe0eVlZjmAfCBAatTg2jzWeNKZW3fj4d7pFh5pOR1zOfr9W%2FAMbfXwEwsdhmoQM3xNHP3905nu40JYtQrECdh0i3156cgwk7CTW966w3e3FyZ&X-Amz-Signature=fd54191ff29b0dded1f795fae8f01a0bb1df2fabb72b56b30c2572fd0b8c22d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X45P5CQ4%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBys3vjq4IAOxFnDctawbv9U%2FhqMHdTDdOiPQWndbSIRAiBPC5PX0c15taY5dGvoPBCO2NWY9Vmk7Y8SyRXiu5TQgSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMsm9aBBcRi11QSh1xKtwDeWViSsZr58gT0Y2GDn%2B2hFp3wEK99mDL1Sc1u7VU%2FD3eu2ZPWhqlt4gk6cD3LwnAQxpLPxwbmLd0tXUDB6g7r0nJgfliFm%2By7i7XXyCzBHovTMAKb0dktfSq9akZW7TCvDQv7IVjxNkjVLfD%2FFZZxAlxETSEIV7NhMeHjsDdi4COY42Ot7yObsm1yQ3PKIgeEt4VmAn5HK2LYHlwumfHz6XW9R0N%2BjqeVMLYh%2FnzzYUkizteAQWR88PX1FzaG3ocLA9DXS8VCIcadHZMfmzf0FG1OZPigCZ8W8YeDo18avPoHvkG52oB80%2FXt3ddruVikxgQdzogO6giF07GlRcjHgHesiFKd2qEbGdGlwM5l76lR7WAe%2FQ5C%2FnfaHITXFYK2vhswdvHXDExkygM5UGZqj7MQdqXruG9NoVe%2FMQCeYOn6szrHobT2cH%2FrVEuwAgfV1DbwtKjaROrFE4RMzSgOf8XeOVqNzJ2eWmK4s%2FHG3L7Jda4QJoKW%2BQpMQ9YEiANq9s%2FY0k7vvoX8kgrZpJ6uwStRG6wNwjBaBE%2BPxDi%2FDjOOBhpqMeVNjaPk6jz994VjO7LD002NhmseJw5dS1abZK%2BitPnlN7hJU6hyDEyfRwsalHkc0DXUpDxsxIw5KfVzwY6pgF2o7PWrFhBdJ0LIluxi7PidfSsoKHv%2FRgcei20iPw2LlsLLJJoiuvmNMCKDveqGDLpzBI2JXvvjRs8q2hUi9sQJLMb%2F%2BEV3iPGQVsJd2GYxYxKgMuw5h%2FMWp%2ByNVA5tLJZxZnpam6I%2B3PcPHM3wk80AeNNcOg8U1APQsk2Z68NVecCb6ep0GIvw4OVA1k9iZm3CssRuIkWVhTzXOuzkIBSgGzcIsD5&X-Amz-Signature=0887bb468628a3050ae99a2a6bcc637dd28e9f1ece41d6c78c02212fb66036f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JSBDWKN%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIH5Jnznx%2BCpns2%2BRifRi6Kg94kxguaTF2ngu4UdoQ5nKAiEAwkZ%2FEOvg%2FzfC8zzzMHDLZvmx8Aa5sXv9TGiUSwg8KeIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDEyewyGKm1W6KpB0HSrcA4%2B09M8REnksALztfDGGRpptgfsjlS6mIf%2BoP%2FO3%2BaUdhGXP3xujTYHktlbcr9iToPXWh3eq37kmMRkGjy%2Bm91reXOLEChD6Q9xc5sencfqSBJNS5AXnMILC06BiK3YNBJLPYKaLaASxDV3v6KOBBKW%2FFfKzkz1hv8OXoSN6HPfdY75zd%2B8KJbwcWR609y6Vyr5ZbQfnS9%2BOBa7%2F0JNH6PzggR8ZsRAO2kDJBFkN96ErV1QjLqZRFyxZrQeorRcmq5RQ2vExF1yza9KIfj2wKIMusUsX6Ea8X1lJJ%2Fj6B2blJcoJa7dnhzAbctanGl9nisuMXcj730aRuexPBis2G3RXgUB6wTcCCTHQcoIi%2BhLaE%2FYqmSmZdR08uTriywCharx7QNpbNvGNsUzKq%2FDeaxqABHzWyV2iUFchxk%2F42y287EU8oPTOVMr47uK7UWwaWhoxdyo46CCfo9p%2F0Jg8qvGuRus6sIEP7YR8OranpKwaiE8Py14Ywgyl3dono%2BIAPwC7EvWNhvujBXFyDLFgCQVXMqUGR2F%2BC6EkS2ujJowUUrEtbjdR05kLc3V6UReJjGPQHfdx5Nc2K7UnXlv1kIBKufksnh9dTbF%2BUBvASf%2FX7c5osowiBoAHylUiMJe61c8GOqUBBXevHrWynU2Agv5S9anaBykuYLeHFv4Vg1dz62Surb1%2F0h%2B%2FK3xbDGCAMdV%2F6p%2FXHctTKkP3TazY9XvxM5V%2Bj%2BSiTW7peJTa84VwnIPHQNrvGNYgOykAfI07R9uJL01RFXpLP4rSSm0PtHDuHh%2FbfoQFiYXVNihlkb4cz5s1KH6lBFel51Hlv97FwnGwokTnqPg6Z2%2BTLP9EcBMlaM%2Bzzzw%2Bd8Q8&X-Amz-Signature=bea9a6437b7236da85d4a1d7cd129d4054d68313fb7c9d4e27c5f4c14f5c1354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHW7VCD2%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC1qct3TnhLDLdcGl7UMmQIkZeRcJkyYfRAWsrPpkyUqAiBxaBULu3xD7bKaUjzVoMGOlxAe1yJySyDvllZY5lFEcyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMpdP1U9PEKGs7HoTBKtwDq8zg2PNtJBlBDDBxBsuUwoYUMBQZrJsThyqQNF52Uz%2F5%2B67%2FmiiY5ZptnFySdlo%2FRjTO5KdU8%2FR9t7I8vz1OvQ18mddsaceNZzjHZ4E1jRjr9Kar7pFDpsacVeCBESB44PcBk%2BdijnLBb%2FCN7VIGfDS03xFsM9%2BMD9j7yC3ZFzwxAHyxeISpMNUaESsrP%2FExSWFHUac8QzRe7wfroBrz7bWHIbPMAlwVHWemFDy6gpA%2B3GqiLS6CZMRznhWL2kTPFTZY8X2GVDcS66%2Fviy8juwYDtSLvI00AIn3o368P1PHupfGQJRh%2FBi8utQfFNQYfSHclwryTR1zQ7wrrSFmku4rLiLSZhEDI69F6IPWq%2Bkz2Fb3HgbFLCBkedTXlNprpUhnFiqw2qD5bvH4GlGJhDMDW6%2FjgBkz1A4c%2Fnqch%2Fkv6eaTv1vX7nplUjcOkya%2BQxaxqd%2Fn5iELzy6kltR8SREOLxFJuL%2BeX2oF%2FYN9BVo87R7zy2tDqQwePVLmsREp5ewjuRw4xho5r1ED7OU7pljI0KyEkaft2hQD45sG14UJ1gHtCdcv1Ls0y8H%2FsunRxYL4ufqwDD9gwx4PSRHBbwHPXU1VFTcrLZSjQhWyin01v29NWZYX4Q32bxdgwxqbVzwY6pgEZLkJ6CakJc1V1ZOIU3jMcW7ZWl6BLj%2Bxpl5Bm0jBvkt9MjaS77ch1GYdDqXMQ9FEvw6CYqC7KQYPzdlfZKRGaGJtc9ULwBPEnOprWj614pivuQ29mEJ80DrBH6VvufdMbJud4c5%2BbTstabDrfjVlLFS2f58A0KiPqGILS%2FsfDyGkmVKFrJIh0kbl7zfpku5JIrapNKbidxGnTvFi8qU78n9ldWfXe&X-Amz-Signature=aaf0e8338e120fc037c8f952f31682c9da323c9e6e9acd7659b6210544f62cde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR6TZMNC%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBxQEPX51CsKzH%2FI4daZKJkvplZZvxRdTDP7mzb%2BZG5bAiBXlHDsZM9DhYDWPyvxOoV8MQZj7l9smLvPGkMPaTuwoir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMQ8aCb1VA1oKhbzLbKtwDyxmxc0UJxFnkXDE0sXMVPx8YBfN4CpCefMkUyimp2xdlXRbDLseYdzl8GvBzodPLi6pcIRcUGnqeyLlQnet1UwrTaHIKJoh3Zmc9tQVA3fJLY1pn0mgoJ4pfEKUE4xhEuzJTXKyKrBrsiJWslDiner7iHQ8Id82H0I%2BMyT76rA2HP7HV0lP6mUBZADTUZ8tDAGWT0lgWB99k8q3c40PNPHNJaX6Sg58KeFv%2FhoKw8bE3Z2BIzZXl03YGROLbyB7fDC%2BrkmtrBojidYYdL%2BvjOB84KUHy8XBf0t3jx43SbY5eYk7%2FeAwcOb3e6ImD6zThWa%2B1STIlRuKtcjQqAHZHxOeAqP10IGEOnZUG4GDE8O3glbnk6qBOHh3KWHTcN%2Fy2FlzxFqKN56I8x4XzOr%2F2P%2BvYgswHZCdZDE6mXMi2iIBU2u9zvDx2C3ZPOsdcoUTqKOwbRN0mcI6duHj2f8h08O10f%2Ft55SinFLlz%2BiGxA%2FUJpgZOReJ5AAAqdbo%2BmR0YTR9fEVbF9NqiTtwXLDeF%2F1rPASbtyIIBXEI%2BC%2Fd4%2BY7a7VXxZWjFKabhupkuCYZ9YEV0V3IobG8LYLHliMXwj9gwZTU2VOYIkFk7ZqgnJ4Lvq%2BpjdnVixBN7ONcwl6jVzwY6pgGt7t%2B38LPQA09pPzLlcViMhufUVfWBdVZcx4h8APY3aa2ojgeUbu7dlLfkWyGhPsH3JBvT17rexgEAjpIpxaKMYE%2F51S2iBdQDw6g9A%2FvdlWzT07Pl3TuPYv5f0PTeXX5RhIhGIc1gSVEsBadKg0k2DQ%2F%2BjRhtZYp0F8j9ZR5XKsJOU95FK82x6O11ZlP5a4RzZ0ziQxK5%2F6iiSx7TwRbAQDgz%2FWSZ&X-Amz-Signature=7885ddf0f2b474272c5fba75d45097197f876f205a9abd0d57caddf0523173d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHW7VCD2%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC1qct3TnhLDLdcGl7UMmQIkZeRcJkyYfRAWsrPpkyUqAiBxaBULu3xD7bKaUjzVoMGOlxAe1yJySyDvllZY5lFEcyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMpdP1U9PEKGs7HoTBKtwDq8zg2PNtJBlBDDBxBsuUwoYUMBQZrJsThyqQNF52Uz%2F5%2B67%2FmiiY5ZptnFySdlo%2FRjTO5KdU8%2FR9t7I8vz1OvQ18mddsaceNZzjHZ4E1jRjr9Kar7pFDpsacVeCBESB44PcBk%2BdijnLBb%2FCN7VIGfDS03xFsM9%2BMD9j7yC3ZFzwxAHyxeISpMNUaESsrP%2FExSWFHUac8QzRe7wfroBrz7bWHIbPMAlwVHWemFDy6gpA%2B3GqiLS6CZMRznhWL2kTPFTZY8X2GVDcS66%2Fviy8juwYDtSLvI00AIn3o368P1PHupfGQJRh%2FBi8utQfFNQYfSHclwryTR1zQ7wrrSFmku4rLiLSZhEDI69F6IPWq%2Bkz2Fb3HgbFLCBkedTXlNprpUhnFiqw2qD5bvH4GlGJhDMDW6%2FjgBkz1A4c%2Fnqch%2Fkv6eaTv1vX7nplUjcOkya%2BQxaxqd%2Fn5iELzy6kltR8SREOLxFJuL%2BeX2oF%2FYN9BVo87R7zy2tDqQwePVLmsREp5ewjuRw4xho5r1ED7OU7pljI0KyEkaft2hQD45sG14UJ1gHtCdcv1Ls0y8H%2FsunRxYL4ufqwDD9gwx4PSRHBbwHPXU1VFTcrLZSjQhWyin01v29NWZYX4Q32bxdgwxqbVzwY6pgEZLkJ6CakJc1V1ZOIU3jMcW7ZWl6BLj%2Bxpl5Bm0jBvkt9MjaS77ch1GYdDqXMQ9FEvw6CYqC7KQYPzdlfZKRGaGJtc9ULwBPEnOprWj614pivuQ29mEJ80DrBH6VvufdMbJud4c5%2BbTstabDrfjVlLFS2f58A0KiPqGILS%2FsfDyGkmVKFrJIh0kbl7zfpku5JIrapNKbidxGnTvFi8qU78n9ldWfXe&X-Amz-Signature=8fe551b097d8b554fcee16ca7de590bc898839d5b1726ee3a0d72a09f5089389&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WDICDEA%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHKNJTM2aMjk7KwZ8gHsVeuMCQFIUXoTzqmyBST1A8cAAiAGDuYxHTu8LfZ6d4iFPq7lJ39jOOAePwx5VWfg2iBzYSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM632o74E6f8e8YQ0EKtwD6IwfrqfOzewqPfE4uRPJdpdaBhX3rrfUA16yvf7hOAtD5uHgM2WqOOnZgbyuMjODqEP7JK6a5k0Y9JPbbogVtpVqRju0RTK8klPmPYUmRvujDbE5%2Bl3%2BpcXk4uVTV%2FP0ZaOg3oKtfN51BCCLG8R%2BzpE4Hafh4bOGsGQlCOYdez4HP%2B21k%2FTsg02xdlPcwm41Iu4bpPrDdCO8kXMGY5QycrB1SjphCj6vSPhGeVFzvBBibUW40%2FLZtyIaFi3HHvh7h9qX2ScGiyghJJxObrZ793BkunstpEy0A1Fxy3ggiqK3HBjGAeqr%2F7yBnMRxkN0rpcBmMnwGTJeDnwCQLAeZThDp%2F1PO1cc%2Fo737FcSjTpc2oqIsZsc6TOYVaXB%2BMxtmD9bWKqfY0SiV69JUTixLOl75r4ApWPmt90EVfFHqDQ%2FsaVPnF9jPt0SoYl4m0SDgqdNnygGqPQotnJ80TrHFT%2Fbt4ONFgSvG1EKg%2FFIiEHl%2FPadhHjhtWU8idwYTiRQrZU2EJzZl0P17GDxl6knacRMEelp9%2BKPe5%2F%2B4%2FQYfg9J7jTZQ2zZH2%2BzeIURhhcq370wxw68hiGy7v3bDsX4b%2BXhO0iPdt1mrOnS8acakXMO6X5EYdRRUASkFvUYwj6jVzwY6pgGJQiZz23ZTl4B279l4b7v7hmMSTmn1%2B1GPtYD%2F%2BehwODNSLGHRGun%2BM7GdRDngRX%2F4iShbUaThcEod22HyJb07SywBZ7sGp0nWZNASVsqjptje4A3vyjt9KlrlgTrqzj9jxaZjkt41eIJtDFgxDjK%2BHQkiAEDBChmfTXLnTcp4x5w8AyFObxPSakx7zOH2hXx7NEOa9cfA%2BXgXJZI%2FgFdGcvFymZJe&X-Amz-Signature=fdc1830b7fd31b2c1f3cc1ef49d0821e219972e9447b580476baf8facbd4e371&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHW7VCD2%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC1qct3TnhLDLdcGl7UMmQIkZeRcJkyYfRAWsrPpkyUqAiBxaBULu3xD7bKaUjzVoMGOlxAe1yJySyDvllZY5lFEcyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMpdP1U9PEKGs7HoTBKtwDq8zg2PNtJBlBDDBxBsuUwoYUMBQZrJsThyqQNF52Uz%2F5%2B67%2FmiiY5ZptnFySdlo%2FRjTO5KdU8%2FR9t7I8vz1OvQ18mddsaceNZzjHZ4E1jRjr9Kar7pFDpsacVeCBESB44PcBk%2BdijnLBb%2FCN7VIGfDS03xFsM9%2BMD9j7yC3ZFzwxAHyxeISpMNUaESsrP%2FExSWFHUac8QzRe7wfroBrz7bWHIbPMAlwVHWemFDy6gpA%2B3GqiLS6CZMRznhWL2kTPFTZY8X2GVDcS66%2Fviy8juwYDtSLvI00AIn3o368P1PHupfGQJRh%2FBi8utQfFNQYfSHclwryTR1zQ7wrrSFmku4rLiLSZhEDI69F6IPWq%2Bkz2Fb3HgbFLCBkedTXlNprpUhnFiqw2qD5bvH4GlGJhDMDW6%2FjgBkz1A4c%2Fnqch%2Fkv6eaTv1vX7nplUjcOkya%2BQxaxqd%2Fn5iELzy6kltR8SREOLxFJuL%2BeX2oF%2FYN9BVo87R7zy2tDqQwePVLmsREp5ewjuRw4xho5r1ED7OU7pljI0KyEkaft2hQD45sG14UJ1gHtCdcv1Ls0y8H%2FsunRxYL4ufqwDD9gwx4PSRHBbwHPXU1VFTcrLZSjQhWyin01v29NWZYX4Q32bxdgwxqbVzwY6pgEZLkJ6CakJc1V1ZOIU3jMcW7ZWl6BLj%2Bxpl5Bm0jBvkt9MjaS77ch1GYdDqXMQ9FEvw6CYqC7KQYPzdlfZKRGaGJtc9ULwBPEnOprWj614pivuQ29mEJ80DrBH6VvufdMbJud4c5%2BbTstabDrfjVlLFS2f58A0KiPqGILS%2FsfDyGkmVKFrJIh0kbl7zfpku5JIrapNKbidxGnTvFi8qU78n9ldWfXe&X-Amz-Signature=f9c58f06f248f65fc8b23eaa55ea8e76cc73860b82d8c00d1e9befcf40bd20d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGDAAAXL%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCU8Xo11ehmuNqmy0%2BSEHESpjMZtU6JgNQryLCFazeo8AIhAKctefPYVdEZhqdYzKdxdysn4Mwq6U7NGVgCRmuWgxLfKv8DCDMQABoMNjM3NDIzMTgzODA1IgyhOJv%2F%2BnCdifwV0jUq3AOOTA7xBXGkG1MxR0EGBcf3v0YNkduaeL300g%2BfT0KnD%2Fvidg7inMztHjPDGNKygPyoGPCgRojGa15bQSTh5y%2Fqf4WG8IHvIeLsSZDXfh3ScZAad0%2FCttx0MZ%2FEUBG5XXacEUX6wjSCZlRQOSjE9OhJ8RVhZnrbbLL421m0DDXJxjOp6DejGd5uly3jG6unNZB56u%2FQDxUPNifml41BFC8r5r4trV6z%2BiZrLmuYlH23o4d00%2BMc9z2JxnSOawb9sueYPuEPCSY9TkdeANajjo673hmnGil1kGq6%2BFHfXESlQiPOw4UqA5rADWJVaoeZjYfsVfhS3F4T2ViRq%2B06BXWHlZrWv2MThqnuZ01vI%2FrsPjCgVUggM46LcUggS1CLlgLL%2B4AGpdQYQ%2BykQqnPipVf77z%2FNNkbkVsk6egKBvlJRCYa2p3oIZFWm1mFjZDNnvoA7QW3E2uTNJZiwOO3j%2BLrd5XpI1iIgCX%2BH%2BsBnMTPWx5pGHJgng3qGegDFzW6EZWq%2FGiW07nEzwic2ZIEkiQOWqnj11zXDYyjBS04qmVTedVoTg5zVMckhXFX1yIVq6QKbikmg7m4E%2FQ2N6FnON%2FHTHWG4pbEcGn1QsQXQ4%2BRdWKTfopU7014t1kP%2FTCIqdXPBjqkARIQ6n%2BeSGuTinL%2F9IeWUn8vVoGGA9jIglHlVoN00MVj%2B0bWTEqRoFUfw40cxlFELMQI9ecCb1NfXjZGLXZbbgma7kRB0Dg035%2Bi%2FOgEtIKNAY76YB9fuOSWYd24rOCVivpiDapKUfOUm6IyrvR%2F0lI6G8D37tHVeS6q2OT7Akk%2FU0LlQmrRABEaUXZsj6yBIL3nY9QLKg6RpmTGtT6E8R0BzOmM&X-Amz-Signature=af5ca543c2be29d7be30b966e805691270aa1499494fea885a33f428b47eb92f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHW7VCD2%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC1qct3TnhLDLdcGl7UMmQIkZeRcJkyYfRAWsrPpkyUqAiBxaBULu3xD7bKaUjzVoMGOlxAe1yJySyDvllZY5lFEcyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMpdP1U9PEKGs7HoTBKtwDq8zg2PNtJBlBDDBxBsuUwoYUMBQZrJsThyqQNF52Uz%2F5%2B67%2FmiiY5ZptnFySdlo%2FRjTO5KdU8%2FR9t7I8vz1OvQ18mddsaceNZzjHZ4E1jRjr9Kar7pFDpsacVeCBESB44PcBk%2BdijnLBb%2FCN7VIGfDS03xFsM9%2BMD9j7yC3ZFzwxAHyxeISpMNUaESsrP%2FExSWFHUac8QzRe7wfroBrz7bWHIbPMAlwVHWemFDy6gpA%2B3GqiLS6CZMRznhWL2kTPFTZY8X2GVDcS66%2Fviy8juwYDtSLvI00AIn3o368P1PHupfGQJRh%2FBi8utQfFNQYfSHclwryTR1zQ7wrrSFmku4rLiLSZhEDI69F6IPWq%2Bkz2Fb3HgbFLCBkedTXlNprpUhnFiqw2qD5bvH4GlGJhDMDW6%2FjgBkz1A4c%2Fnqch%2Fkv6eaTv1vX7nplUjcOkya%2BQxaxqd%2Fn5iELzy6kltR8SREOLxFJuL%2BeX2oF%2FYN9BVo87R7zy2tDqQwePVLmsREp5ewjuRw4xho5r1ED7OU7pljI0KyEkaft2hQD45sG14UJ1gHtCdcv1Ls0y8H%2FsunRxYL4ufqwDD9gwx4PSRHBbwHPXU1VFTcrLZSjQhWyin01v29NWZYX4Q32bxdgwxqbVzwY6pgEZLkJ6CakJc1V1ZOIU3jMcW7ZWl6BLj%2Bxpl5Bm0jBvkt9MjaS77ch1GYdDqXMQ9FEvw6CYqC7KQYPzdlfZKRGaGJtc9ULwBPEnOprWj614pivuQ29mEJ80DrBH6VvufdMbJud4c5%2BbTstabDrfjVlLFS2f58A0KiPqGILS%2FsfDyGkmVKFrJIh0kbl7zfpku5JIrapNKbidxGnTvFi8qU78n9ldWfXe&X-Amz-Signature=36812093d34dc1462c8f43311dc18aca09f846896fc1a5945039f82be59dd519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BKEK7KN%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIECrLhvNifmXIfBX12kmY%2FmqvAGgkcmx5HdnVRZYwC0xAiACASsGqQKxXEWuzkVfrSszEDZlh7obRWzB132wyQTTXCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMvzaMqKhJLz28oKVSKtwDZ9g3C%2FeTOe1HokDxmX7%2FvopT%2FGTr8rgUvOBhAP5obH5e6Kw0M4rp9BexeSbe1VS5uPdhwmk%2FSWKB%2Fxc9ta5aUh2z5uACpUu4j%2B4tQvhAY40wK9ngsaJrEqNEQ%2Bg8xNo3UE9EnBZ0k%2F0AChsdYSGPx6DFqBzsIp2gp5y95o9YdxgZsoKVbDP7AUeNCcdii02ugVbdWaDYA0sv65u9YHeTTbVY3Hyd%2FNhaV%2B%2BSoO7uCAmRmRqZGEKBtVrRMIvk1v0ztiSzhromopNdlAYDVGf5CYi1PZ%2Fm4O3yRYVCzqebO37WWsF0%2FdqNkxtSxQg9O5MejdWamRdbRRrfLZQI8L2L2r8F8Q5X0kHac4OMTEs18KPnnGyKo1%2Bni5R4BgHZ3XfJ5PavBj%2FM8hnFs53T7%2FaKPzE%2Bo9f72fDSM7AsmwJeKT%2F43ljideyLGqi0IxTNw8BA3jRcaJJHwAEisNq26o4zCFjs8TIGqTLVBSE76s3WfQXaSUKd7Y6v89q5JWAmU%2FrLVPdtX%2BIqCz8slX3Sj0oRr8mHDB%2Bobg0PcpzfYK4qnnWxb%2F6KAKISaVXzUreeCIcFWaEJqaiWyOvLoddYJamCYxuwZYXx1%2FoEn9%2Ftxe1s0DVP7gCDyRCERn1sMrIwqafVzwY6pgFbeK46o6hbebbDdx%2BR%2B0U9RBZtlGpzPftKkiHsQVkQmcggKhDN3Jq17QRg09yW1LdrL6z1dHXQ65OD%2Bjm%2BHUubBI2iYTJe9Y%2BGEWpbXzOXVEzZHsrbfAtxbuxnirEDaQg%2FV4eoKx2RPYkN4cl1IxVAvpi7n5aXC8N6T8SPaNtscghCghOclnomzEvNKtthfmstdTuOSe9ZwrweSpIK4uqrO5Nz1baz&X-Amz-Signature=7748f7504aaa2a138f79a6121a62319f551ac36d8fb882bbdfa9b9966ab0ccbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHW7VCD2%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC1qct3TnhLDLdcGl7UMmQIkZeRcJkyYfRAWsrPpkyUqAiBxaBULu3xD7bKaUjzVoMGOlxAe1yJySyDvllZY5lFEcyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMpdP1U9PEKGs7HoTBKtwDq8zg2PNtJBlBDDBxBsuUwoYUMBQZrJsThyqQNF52Uz%2F5%2B67%2FmiiY5ZptnFySdlo%2FRjTO5KdU8%2FR9t7I8vz1OvQ18mddsaceNZzjHZ4E1jRjr9Kar7pFDpsacVeCBESB44PcBk%2BdijnLBb%2FCN7VIGfDS03xFsM9%2BMD9j7yC3ZFzwxAHyxeISpMNUaESsrP%2FExSWFHUac8QzRe7wfroBrz7bWHIbPMAlwVHWemFDy6gpA%2B3GqiLS6CZMRznhWL2kTPFTZY8X2GVDcS66%2Fviy8juwYDtSLvI00AIn3o368P1PHupfGQJRh%2FBi8utQfFNQYfSHclwryTR1zQ7wrrSFmku4rLiLSZhEDI69F6IPWq%2Bkz2Fb3HgbFLCBkedTXlNprpUhnFiqw2qD5bvH4GlGJhDMDW6%2FjgBkz1A4c%2Fnqch%2Fkv6eaTv1vX7nplUjcOkya%2BQxaxqd%2Fn5iELzy6kltR8SREOLxFJuL%2BeX2oF%2FYN9BVo87R7zy2tDqQwePVLmsREp5ewjuRw4xho5r1ED7OU7pljI0KyEkaft2hQD45sG14UJ1gHtCdcv1Ls0y8H%2FsunRxYL4ufqwDD9gwx4PSRHBbwHPXU1VFTcrLZSjQhWyin01v29NWZYX4Q32bxdgwxqbVzwY6pgEZLkJ6CakJc1V1ZOIU3jMcW7ZWl6BLj%2Bxpl5Bm0jBvkt9MjaS77ch1GYdDqXMQ9FEvw6CYqC7KQYPzdlfZKRGaGJtc9ULwBPEnOprWj614pivuQ29mEJ80DrBH6VvufdMbJud4c5%2BbTstabDrfjVlLFS2f58A0KiPqGILS%2FsfDyGkmVKFrJIh0kbl7zfpku5JIrapNKbidxGnTvFi8qU78n9ldWfXe&X-Amz-Signature=fae94499a3ead21b9b72a64384e0dff1aa8bacdfba4e3adfddf6a07db4192796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVMLLGVC%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDIDC0TUS%2F5f941dbkNRJxejw3xJ9A%2FcaU0TXEDYDoKvQIgZxyebmawnFFecvwJmrrwJ0QTNLGwowO9ta9SE3Bzt8cq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDK8AhroyiLRJzCNHNCrcAz0d8JF4YdS3WGZk5ckFgBLRReZOctzdFHOwCDyK0sP5FR%2BuByfuiA%2B12t7WWiYImQpEoAl6oOfRAgY6SSr8oUrhwquT%2F8Qs8x2ylVOxadLRrxGQzrsvzaBE69OPTwhkammxPZrP3G8LfeRVVVwKQJx6T%2BZD39q5ZJ0zMORxrNhjSNpA2P2pKFk75eQ%2F6W4cVcVomE60arTBQnjy%2Bfw0OIXm67Let49THBVvSVxA2lBZ2hjrgymnd%2Bvhd5vWs%2Fc88vSFs6FOTnPAMaGwbAbn0YzV0zgQ7twsSOw%2FUi70E6nugg0nuDoPe5hLlbCOLAu7gTAIw1sWV3iA6XtgSWXhtF9BGPEqBi%2BjkxvsS8LquBRQ6e5pf7xqPpWpxMFViOYa1mfaooQepPX3KCX2QEuW3cXLubLBcJqiX%2B2t3qc3rWNNvNjUsgrAAFkf6wSSOkYDOK2ix2YpzsIZ41HM4MuNACLXA4v1QFMIdvLS78vHx4OqIjG56f9nxgsuqUxJBjM0dVlZ4aIVRKS25lwWc30vYFUYwFJUYNZCoDBemKPaYJU71gRosuyNW6WIPMzziZYLbfIp1gVJl7VmuzrmmC6Ld%2FL0eDMSDWZL32X3lI%2Bmqm5Mza4baBtrOuSwHjXhMJan1c8GOqUBvHTfTKBgohmeszP5DgWxdzLN1DUpOxQeQAnVGVBdxaoNeZwSi%2F7%2BlhNjQ5nXL0QLm%2BYa7R%2FtquPDc0kRUkGiT6oPMxRFMfeJm7n35l10f%2FVhM63R4doXGVlo7BAB0%2FgajoXqFD126DbmTBcUAbalJ5xiTNOkhhL7OD2I6B4h1w9NiR9lgBTCIah3MUrW25lc0WAEZfRVPdSAqL%2BmlKT05Lk1WBb8&X-Amz-Signature=782a365eb9870c0822fd63d07c1471ad1241babe1b3ccf61df09d7b5305e90d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632C2OILL%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCiwIuvl53c9nfVh6WrXvSsqj91bbt%2FTRFpTiFOiQLjsgIgEFNnQ62nUhlc6m%2FZqCrUsHWTsP%2BrQ9Ap3Eo4eDIiYlgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMdwUf8gox9qnwAcVyrcAzMrLf7baF2woCdEvDwr9rgIzAcPMN%2FH7348fLgaRisueQzKtBAIEecZECdI5bxTzHy49W%2FXjKb23mX8I%2F2RARnIQOHLYQPXmhEvmV3Dk5nyKCrgbSZsgCvBi%2FesJN2QKtmyklaqF2L4zU8UtZ260IzQ0IEThtTKcPUKNjgqrg7NtMfXR3d7gT6PAvcwYUSeg0d8q1ZGyVWGuY0Zjk4CvYUO79WlnnXNPiuRJmf1ZcW2Uc2ra2OYj3GuecEEFZB6sHjHZGsduXsPrA4OOjVTSl%2F26IYvr8XzyyLJQOI9X1b1emF%2B75ZlbTTkC%2F8QSKVfMJPWs%2FUuARbly8EuF77cxZYBj2cOLXSbatJCe1keqrI91wz8MBO%2Fn5Vfe4gculUx562btm7qZPG4AzlddlexFplW%2BiqVeUIljfnILsofTEPvAckhTrqKEx8ki2gdIbcnBetRCZj4C5kXGloKvuST1owoY0rEegp3hk2i4Gk%2FjDKklrT6xVBSsyO4dA3%2FIkWrdlIRJhFtBOc2hYVYqog0QJROHZQ8YTrLIzVo0QFWUVQHLRZ28BVYnlE2EupM54p3uq0t9QI1V5wnVbhmROmPifu5hPbypGFCbAPob5sHJW7iKb1WWykSKjkhzclaMN%2FJ1c8GOqUBj7hGv73%2FIOMYoYe6HstjrH2f4ghc2Pv1qfFwHi4wolPqNlcG%2F9Y%2B3Kf7RYRzT7AiXZewEhJskyzQjL6uAay3F1YXLQA1Wsl6HbT%2Bbg2DXaP4TJ2KxVWDYz85qrIJiFoWykxJOQK96oxTZ1imYNUS%2F76pf1NOSXUR%2BjFjv1FnSQzaBf1Pvsc%2B6b935bdi6UWIRG3atvon6KRVYlYcoyHnEtiNiLdZ&X-Amz-Signature=71c2463598cf5a66c31f31a153257d38eca8f28f82cb29ccd79c1270d52f234a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6J6G6IZ%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIGbp0NJG9bh7uLjlNhQsPLoHZFMyyxTnhJSU6PXgxbl2AiEAj%2F65tRQecxgh3PBjy0cOxvvfR6xJ%2B8XNQiPfCnXmT9Yq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDDoWbUGaiYSCIaKPaCrcA8C8OUflimeOzQjYc%2BLitYURL7XLMFNngL7YRLTOc%2BQzfHSgWlzazjpWSeRwKzdDdAngrjnL0x2pZoKRtFy5DWSIIguUp3tV4Su2OPew%2Bw916melNqc0Iviv05G4fE7UxWug5tvR%2FFQEwMA8G2j%2FdCXGHGsQBlhrjeUBkeA9wm4XH0y%2BKh3aGGrZMzBOeCXQq%2BQFQiux48D4tyrlkJhxsqUWtKyyDcE%2B4XUjID0q%2ByG%2Fj4NRBbbBtiofqcG%2Fpkw1jwMzEgBthKvjmsfJtVkBEoLaQpPWnZ6podTS9gLx2NfilMUfgAPlac3lnamOTqUduwZ1v577EemdmtVE4%2FYUMlbf7GFKZMhj%2F0DtI8ZDVZO7yLbJBBGApnxBVnqEtO1eZ%2BcQ4STv11GaqxHudZYFSGa0c21Zri9l%2FW6XEoWSZJ73fOtDkFrMdzo69ZuO%2FUu6DI0QuEmacF8loGmPsVeq0mjXWEhuKymwJaB0JW1JXLvs2X7aEj%2FrATtxavpMSMsnalIXZ9dIkoB8e8CdNI%2FM3Eg4wsDFyKlW33%2B%2FG90s%2FkkLW7G5i8Fp8SYh8z4KRDYFT2DZlvogKnIFV7mL2aJRb3AiMyr4BySB%2FYbRsAnt5sIrLpI%2Bhx8htKGgoedAMKKp1c8GOqUBpyMXP9VjuEcy9I94M6ATWs32aIXYvGmLXpI6L4WXDRn%2BNIh5DzvQABL7BkN9Z14HUx63PS3B94voTn0oihLbrntmzYlieKa%2BEdM58GvYmFcflU7ZfzOFZyINA1I302wEK0xWymmCwzcer%2F%2Beph7jExTiFDRL76rbIpz%2B2FzTb04T1FMVWHTtGWwEmpepVn1p0%2BNwS4AHesXOxssYnV5rtCu8tOFK&X-Amz-Signature=04723abd77c292ce17510fda3182b6150e2e492c95bf19793f9300d1072e1032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHW7VCD2%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC1qct3TnhLDLdcGl7UMmQIkZeRcJkyYfRAWsrPpkyUqAiBxaBULu3xD7bKaUjzVoMGOlxAe1yJySyDvllZY5lFEcyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMpdP1U9PEKGs7HoTBKtwDq8zg2PNtJBlBDDBxBsuUwoYUMBQZrJsThyqQNF52Uz%2F5%2B67%2FmiiY5ZptnFySdlo%2FRjTO5KdU8%2FR9t7I8vz1OvQ18mddsaceNZzjHZ4E1jRjr9Kar7pFDpsacVeCBESB44PcBk%2BdijnLBb%2FCN7VIGfDS03xFsM9%2BMD9j7yC3ZFzwxAHyxeISpMNUaESsrP%2FExSWFHUac8QzRe7wfroBrz7bWHIbPMAlwVHWemFDy6gpA%2B3GqiLS6CZMRznhWL2kTPFTZY8X2GVDcS66%2Fviy8juwYDtSLvI00AIn3o368P1PHupfGQJRh%2FBi8utQfFNQYfSHclwryTR1zQ7wrrSFmku4rLiLSZhEDI69F6IPWq%2Bkz2Fb3HgbFLCBkedTXlNprpUhnFiqw2qD5bvH4GlGJhDMDW6%2FjgBkz1A4c%2Fnqch%2Fkv6eaTv1vX7nplUjcOkya%2BQxaxqd%2Fn5iELzy6kltR8SREOLxFJuL%2BeX2oF%2FYN9BVo87R7zy2tDqQwePVLmsREp5ewjuRw4xho5r1ED7OU7pljI0KyEkaft2hQD45sG14UJ1gHtCdcv1Ls0y8H%2FsunRxYL4ufqwDD9gwx4PSRHBbwHPXU1VFTcrLZSjQhWyin01v29NWZYX4Q32bxdgwxqbVzwY6pgEZLkJ6CakJc1V1ZOIU3jMcW7ZWl6BLj%2Bxpl5Bm0jBvkt9MjaS77ch1GYdDqXMQ9FEvw6CYqC7KQYPzdlfZKRGaGJtc9ULwBPEnOprWj614pivuQ29mEJ80DrBH6VvufdMbJud4c5%2BbTstabDrfjVlLFS2f58A0KiPqGILS%2FsfDyGkmVKFrJIh0kbl7zfpku5JIrapNKbidxGnTvFi8qU78n9ldWfXe&X-Amz-Signature=befa0a7d1b97d9256186bf041a0e878086d56399420bc3315e79ca4a632d2df2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHW7VCD2%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC1qct3TnhLDLdcGl7UMmQIkZeRcJkyYfRAWsrPpkyUqAiBxaBULu3xD7bKaUjzVoMGOlxAe1yJySyDvllZY5lFEcyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMpdP1U9PEKGs7HoTBKtwDq8zg2PNtJBlBDDBxBsuUwoYUMBQZrJsThyqQNF52Uz%2F5%2B67%2FmiiY5ZptnFySdlo%2FRjTO5KdU8%2FR9t7I8vz1OvQ18mddsaceNZzjHZ4E1jRjr9Kar7pFDpsacVeCBESB44PcBk%2BdijnLBb%2FCN7VIGfDS03xFsM9%2BMD9j7yC3ZFzwxAHyxeISpMNUaESsrP%2FExSWFHUac8QzRe7wfroBrz7bWHIbPMAlwVHWemFDy6gpA%2B3GqiLS6CZMRznhWL2kTPFTZY8X2GVDcS66%2Fviy8juwYDtSLvI00AIn3o368P1PHupfGQJRh%2FBi8utQfFNQYfSHclwryTR1zQ7wrrSFmku4rLiLSZhEDI69F6IPWq%2Bkz2Fb3HgbFLCBkedTXlNprpUhnFiqw2qD5bvH4GlGJhDMDW6%2FjgBkz1A4c%2Fnqch%2Fkv6eaTv1vX7nplUjcOkya%2BQxaxqd%2Fn5iELzy6kltR8SREOLxFJuL%2BeX2oF%2FYN9BVo87R7zy2tDqQwePVLmsREp5ewjuRw4xho5r1ED7OU7pljI0KyEkaft2hQD45sG14UJ1gHtCdcv1Ls0y8H%2FsunRxYL4ufqwDD9gwx4PSRHBbwHPXU1VFTcrLZSjQhWyin01v29NWZYX4Q32bxdgwxqbVzwY6pgEZLkJ6CakJc1V1ZOIU3jMcW7ZWl6BLj%2Bxpl5Bm0jBvkt9MjaS77ch1GYdDqXMQ9FEvw6CYqC7KQYPzdlfZKRGaGJtc9ULwBPEnOprWj614pivuQ29mEJ80DrBH6VvufdMbJud4c5%2BbTstabDrfjVlLFS2f58A0KiPqGILS%2FsfDyGkmVKFrJIh0kbl7zfpku5JIrapNKbidxGnTvFi8qU78n9ldWfXe&X-Amz-Signature=9cdbd587b5f2a00255fedbe31e1ce112df176394f081cdb3dd52236d48d995ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VELF5U5S%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDF7tw%2B1kvw9wDyHmYinglCD64UpJSqM1N7GPWWTfQfvQIgSiKSsODAMxbNI1XcuiCUast1tWXo8VndqSwDA%2FyxRMIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDC0ICrNkpE%2FBkzhn0yrcA%2BpKqMq1QRcGn5zif6ctIrzlp97wj1NnjR4RIGmDZsVgG88I8XWQ13cH%2FnRDGYXSnIeof8sGLnryjf9Dq5D4DO25r74oM2P%2F%2F8XkR0yXuCuIj3l8ypz0BKmf0EuocWJz8A2urUH4Sm9ZSwlFQnNWbZanOiBoJdwwCLRBAuJj8YWljzNM41kkLrOkk8vYlOI4Ww%2FGnHt34HnTm97EU83dJg7DxyFA8KZAGBsrvLwKeiRfczO1qaLHJT2U3GbA3AGnGG7fpB6p%2BknHBvBuoMR3ya8%2FxnGfp3fXq2yFMCMltPTZMtCd%2Bv7SDVT0w6%2FOO8uUuBoEvKPRFMarFbG1Aqmxipa1ZpJL924li16VYT4NBcaEBbTwPR6XyQpg7qFS%2BOkQQBrrxO7XstNUdmnKsxnw2oM4nz38l1EIjgow2Z3ZJeTAN7XYQicIaEd1fosBa%2B0pfF9zueBIk782O%2Ftr8UYaF%2FbCrq6Wxgg6RLCEbjm9q55jbcDbm2PtRhB7Kawv4KrH4b9mQmzagBq%2B7NjdFI3Ude0GEMaRtQIyWD9KmiRdFFQPIil0WEeaVCNKGwMwCrYcGech50yez%2F%2FD1fByosrUi7zPgtYyaUcuF1gQ5%2FzKERys%2FK1%2B6HFHDPdiV8l6MKun1c8GOqUBabwNrHGIh23L9IqADXD1IZDvPc%2Bw86RPhYl4acKr%2FXCi7LfV%2FmFmhSwbscK38BZfPgCzQyru%2BsQYR3Lz5YA0aSXep5iOyIQEtxjENEMAwp2hzD0ZK5JbeBIAYYhh0euBSBDL4sXR%2FMdx1sVdmcpRDa73EWIloZS%2Fu%2B5dbCFadLEqt1ubX2vaKuGN%2BV1TBDSuWUPtxFQYMvQQJuNRyfbFYsg%2F4I4N&X-Amz-Signature=c2bf36d0370672113225be26ac6782666eee8d9a39c11650169f7a4532af3f19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VELF5U5S%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDF7tw%2B1kvw9wDyHmYinglCD64UpJSqM1N7GPWWTfQfvQIgSiKSsODAMxbNI1XcuiCUast1tWXo8VndqSwDA%2FyxRMIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDC0ICrNkpE%2FBkzhn0yrcA%2BpKqMq1QRcGn5zif6ctIrzlp97wj1NnjR4RIGmDZsVgG88I8XWQ13cH%2FnRDGYXSnIeof8sGLnryjf9Dq5D4DO25r74oM2P%2F%2F8XkR0yXuCuIj3l8ypz0BKmf0EuocWJz8A2urUH4Sm9ZSwlFQnNWbZanOiBoJdwwCLRBAuJj8YWljzNM41kkLrOkk8vYlOI4Ww%2FGnHt34HnTm97EU83dJg7DxyFA8KZAGBsrvLwKeiRfczO1qaLHJT2U3GbA3AGnGG7fpB6p%2BknHBvBuoMR3ya8%2FxnGfp3fXq2yFMCMltPTZMtCd%2Bv7SDVT0w6%2FOO8uUuBoEvKPRFMarFbG1Aqmxipa1ZpJL924li16VYT4NBcaEBbTwPR6XyQpg7qFS%2BOkQQBrrxO7XstNUdmnKsxnw2oM4nz38l1EIjgow2Z3ZJeTAN7XYQicIaEd1fosBa%2B0pfF9zueBIk782O%2Ftr8UYaF%2FbCrq6Wxgg6RLCEbjm9q55jbcDbm2PtRhB7Kawv4KrH4b9mQmzagBq%2B7NjdFI3Ude0GEMaRtQIyWD9KmiRdFFQPIil0WEeaVCNKGwMwCrYcGech50yez%2F%2FD1fByosrUi7zPgtYyaUcuF1gQ5%2FzKERys%2FK1%2B6HFHDPdiV8l6MKun1c8GOqUBabwNrHGIh23L9IqADXD1IZDvPc%2Bw86RPhYl4acKr%2FXCi7LfV%2FmFmhSwbscK38BZfPgCzQyru%2BsQYR3Lz5YA0aSXep5iOyIQEtxjENEMAwp2hzD0ZK5JbeBIAYYhh0euBSBDL4sXR%2FMdx1sVdmcpRDa73EWIloZS%2Fu%2B5dbCFadLEqt1ubX2vaKuGN%2BV1TBDSuWUPtxFQYMvQQJuNRyfbFYsg%2F4I4N&X-Amz-Signature=19485dcc3dc631c80b8268cbc4f51da2cdcb9280600f5156cd6f27113cc55ecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VELF5U5S%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDF7tw%2B1kvw9wDyHmYinglCD64UpJSqM1N7GPWWTfQfvQIgSiKSsODAMxbNI1XcuiCUast1tWXo8VndqSwDA%2FyxRMIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDC0ICrNkpE%2FBkzhn0yrcA%2BpKqMq1QRcGn5zif6ctIrzlp97wj1NnjR4RIGmDZsVgG88I8XWQ13cH%2FnRDGYXSnIeof8sGLnryjf9Dq5D4DO25r74oM2P%2F%2F8XkR0yXuCuIj3l8ypz0BKmf0EuocWJz8A2urUH4Sm9ZSwlFQnNWbZanOiBoJdwwCLRBAuJj8YWljzNM41kkLrOkk8vYlOI4Ww%2FGnHt34HnTm97EU83dJg7DxyFA8KZAGBsrvLwKeiRfczO1qaLHJT2U3GbA3AGnGG7fpB6p%2BknHBvBuoMR3ya8%2FxnGfp3fXq2yFMCMltPTZMtCd%2Bv7SDVT0w6%2FOO8uUuBoEvKPRFMarFbG1Aqmxipa1ZpJL924li16VYT4NBcaEBbTwPR6XyQpg7qFS%2BOkQQBrrxO7XstNUdmnKsxnw2oM4nz38l1EIjgow2Z3ZJeTAN7XYQicIaEd1fosBa%2B0pfF9zueBIk782O%2Ftr8UYaF%2FbCrq6Wxgg6RLCEbjm9q55jbcDbm2PtRhB7Kawv4KrH4b9mQmzagBq%2B7NjdFI3Ude0GEMaRtQIyWD9KmiRdFFQPIil0WEeaVCNKGwMwCrYcGech50yez%2F%2FD1fByosrUi7zPgtYyaUcuF1gQ5%2FzKERys%2FK1%2B6HFHDPdiV8l6MKun1c8GOqUBabwNrHGIh23L9IqADXD1IZDvPc%2Bw86RPhYl4acKr%2FXCi7LfV%2FmFmhSwbscK38BZfPgCzQyru%2BsQYR3Lz5YA0aSXep5iOyIQEtxjENEMAwp2hzD0ZK5JbeBIAYYhh0euBSBDL4sXR%2FMdx1sVdmcpRDa73EWIloZS%2Fu%2B5dbCFadLEqt1ubX2vaKuGN%2BV1TBDSuWUPtxFQYMvQQJuNRyfbFYsg%2F4I4N&X-Amz-Signature=702a926469d871b87621f41a7c1db6d89a69b09c093fce96a3a323c4acc7cd48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VELF5U5S%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDF7tw%2B1kvw9wDyHmYinglCD64UpJSqM1N7GPWWTfQfvQIgSiKSsODAMxbNI1XcuiCUast1tWXo8VndqSwDA%2FyxRMIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDC0ICrNkpE%2FBkzhn0yrcA%2BpKqMq1QRcGn5zif6ctIrzlp97wj1NnjR4RIGmDZsVgG88I8XWQ13cH%2FnRDGYXSnIeof8sGLnryjf9Dq5D4DO25r74oM2P%2F%2F8XkR0yXuCuIj3l8ypz0BKmf0EuocWJz8A2urUH4Sm9ZSwlFQnNWbZanOiBoJdwwCLRBAuJj8YWljzNM41kkLrOkk8vYlOI4Ww%2FGnHt34HnTm97EU83dJg7DxyFA8KZAGBsrvLwKeiRfczO1qaLHJT2U3GbA3AGnGG7fpB6p%2BknHBvBuoMR3ya8%2FxnGfp3fXq2yFMCMltPTZMtCd%2Bv7SDVT0w6%2FOO8uUuBoEvKPRFMarFbG1Aqmxipa1ZpJL924li16VYT4NBcaEBbTwPR6XyQpg7qFS%2BOkQQBrrxO7XstNUdmnKsxnw2oM4nz38l1EIjgow2Z3ZJeTAN7XYQicIaEd1fosBa%2B0pfF9zueBIk782O%2Ftr8UYaF%2FbCrq6Wxgg6RLCEbjm9q55jbcDbm2PtRhB7Kawv4KrH4b9mQmzagBq%2B7NjdFI3Ude0GEMaRtQIyWD9KmiRdFFQPIil0WEeaVCNKGwMwCrYcGech50yez%2F%2FD1fByosrUi7zPgtYyaUcuF1gQ5%2FzKERys%2FK1%2B6HFHDPdiV8l6MKun1c8GOqUBabwNrHGIh23L9IqADXD1IZDvPc%2Bw86RPhYl4acKr%2FXCi7LfV%2FmFmhSwbscK38BZfPgCzQyru%2BsQYR3Lz5YA0aSXep5iOyIQEtxjENEMAwp2hzD0ZK5JbeBIAYYhh0euBSBDL4sXR%2FMdx1sVdmcpRDa73EWIloZS%2Fu%2B5dbCFadLEqt1ubX2vaKuGN%2BV1TBDSuWUPtxFQYMvQQJuNRyfbFYsg%2F4I4N&X-Amz-Signature=a09b268b1145269028b2f5f21a0d7c438bd5aebc3b3adb5667ee28b9809f7bca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VCCBZFC%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDihpMN00bnfVLYevD37vk2dqTOvmX%2B3pGzwzk2qLQzhwIgK08HoP6MxzDq1%2FAtJTFPbLFK8vZtHzAzQI48AXk05Ksq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCLvUbiZsC7sS%2BOi3CrcA0Yw1EEcv1lRS8EI15WrNoY1xsXSXUZRkNmAShOgYmn%2FHm%2BpGQ8R3uoK22mDKv0ZeoyiJex%2FYMLlsB9smduAvHVV8dOTyUxVVqfivCJjvijZiEfI1qf6G9kKrP7xxn%2BxH9dKT8po8ubVQbu3pL2ufVE7QFK8O9Q5sfsmHBKOrSd7ji2ysh%2F1bXQbpY6THWdAaVYS7PeU0qajyhmCHUsGYj2FDU3XwdPmXruH3HNy46zcYuT86HnNypF7TkwfgJLZOXOY2KVJR0YTO38%2BLcrm0Nkvn9OQPk%2BUfQUiOuJTTXACchBol5geBJGuayaaNgkACb6dF1BBWC64ymlVTpclGADz07yMw37Val0AMtk%2B2ZjH41sMKgEhZ7Xhpu79umLb0Lg069AFyz%2Bbk6w0wOeexRSeErbBZbjF0qm8DyRk3A25JkidzOH18xI8NFsalVGFHkdEW8bJXDRQoRNGMTF4FwHyzYPKgPEek3nM77hFZvCw0JwdiLjsrNdZNOfwp95pwWuGW%2BdKZCouOxMoPtcDwglCV3G%2B54a1rU4BW0DFgfDSU0Fjlu2qGqEMR2Q6tSmy2YrrDhm3G6fFCDiUYXGkbFc9Fe1IwlExLp1GwirL%2BK7oRSvR%2FimQG1Pcvf%2FTMPvI1c8GOqUBLVeoNsTehLUhmeanPTYkV08uybVNscHrmZCsJfF%2BtM9p%2B47OX7P1LwRsFwb3pLar2f1OnpWfw871s1gttgQ0ttpVGr81ThXFmdORqlPKl9x%2FmuVsQSM2YYh0z9TKJHrhVuY8JvmwVkdxOwerNAD2nlcanYce0C5IHLr5fGYNkddGmZsFupRw%2FHWBhrzGUGlyOXUv08gHE4pZLEX5WSkjcRp0UaEo&X-Amz-Signature=294ebd45ac0428a30ae737e500f71bd486803ccaeb73b328a37f2ddc4d3da41e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VELF5U5S%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDF7tw%2B1kvw9wDyHmYinglCD64UpJSqM1N7GPWWTfQfvQIgSiKSsODAMxbNI1XcuiCUast1tWXo8VndqSwDA%2FyxRMIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDC0ICrNkpE%2FBkzhn0yrcA%2BpKqMq1QRcGn5zif6ctIrzlp97wj1NnjR4RIGmDZsVgG88I8XWQ13cH%2FnRDGYXSnIeof8sGLnryjf9Dq5D4DO25r74oM2P%2F%2F8XkR0yXuCuIj3l8ypz0BKmf0EuocWJz8A2urUH4Sm9ZSwlFQnNWbZanOiBoJdwwCLRBAuJj8YWljzNM41kkLrOkk8vYlOI4Ww%2FGnHt34HnTm97EU83dJg7DxyFA8KZAGBsrvLwKeiRfczO1qaLHJT2U3GbA3AGnGG7fpB6p%2BknHBvBuoMR3ya8%2FxnGfp3fXq2yFMCMltPTZMtCd%2Bv7SDVT0w6%2FOO8uUuBoEvKPRFMarFbG1Aqmxipa1ZpJL924li16VYT4NBcaEBbTwPR6XyQpg7qFS%2BOkQQBrrxO7XstNUdmnKsxnw2oM4nz38l1EIjgow2Z3ZJeTAN7XYQicIaEd1fosBa%2B0pfF9zueBIk782O%2Ftr8UYaF%2FbCrq6Wxgg6RLCEbjm9q55jbcDbm2PtRhB7Kawv4KrH4b9mQmzagBq%2B7NjdFI3Ude0GEMaRtQIyWD9KmiRdFFQPIil0WEeaVCNKGwMwCrYcGech50yez%2F%2FD1fByosrUi7zPgtYyaUcuF1gQ5%2FzKERys%2FK1%2B6HFHDPdiV8l6MKun1c8GOqUBabwNrHGIh23L9IqADXD1IZDvPc%2Bw86RPhYl4acKr%2FXCi7LfV%2FmFmhSwbscK38BZfPgCzQyru%2BsQYR3Lz5YA0aSXep5iOyIQEtxjENEMAwp2hzD0ZK5JbeBIAYYhh0euBSBDL4sXR%2FMdx1sVdmcpRDa73EWIloZS%2Fu%2B5dbCFadLEqt1ubX2vaKuGN%2BV1TBDSuWUPtxFQYMvQQJuNRyfbFYsg%2F4I4N&X-Amz-Signature=393d363e0e381ab8046c83d87d72325e17fd01d15cda8326e8f1b84c4d1c5fa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VELF5U5S%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDF7tw%2B1kvw9wDyHmYinglCD64UpJSqM1N7GPWWTfQfvQIgSiKSsODAMxbNI1XcuiCUast1tWXo8VndqSwDA%2FyxRMIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDC0ICrNkpE%2FBkzhn0yrcA%2BpKqMq1QRcGn5zif6ctIrzlp97wj1NnjR4RIGmDZsVgG88I8XWQ13cH%2FnRDGYXSnIeof8sGLnryjf9Dq5D4DO25r74oM2P%2F%2F8XkR0yXuCuIj3l8ypz0BKmf0EuocWJz8A2urUH4Sm9ZSwlFQnNWbZanOiBoJdwwCLRBAuJj8YWljzNM41kkLrOkk8vYlOI4Ww%2FGnHt34HnTm97EU83dJg7DxyFA8KZAGBsrvLwKeiRfczO1qaLHJT2U3GbA3AGnGG7fpB6p%2BknHBvBuoMR3ya8%2FxnGfp3fXq2yFMCMltPTZMtCd%2Bv7SDVT0w6%2FOO8uUuBoEvKPRFMarFbG1Aqmxipa1ZpJL924li16VYT4NBcaEBbTwPR6XyQpg7qFS%2BOkQQBrrxO7XstNUdmnKsxnw2oM4nz38l1EIjgow2Z3ZJeTAN7XYQicIaEd1fosBa%2B0pfF9zueBIk782O%2Ftr8UYaF%2FbCrq6Wxgg6RLCEbjm9q55jbcDbm2PtRhB7Kawv4KrH4b9mQmzagBq%2B7NjdFI3Ude0GEMaRtQIyWD9KmiRdFFQPIil0WEeaVCNKGwMwCrYcGech50yez%2F%2FD1fByosrUi7zPgtYyaUcuF1gQ5%2FzKERys%2FK1%2B6HFHDPdiV8l6MKun1c8GOqUBabwNrHGIh23L9IqADXD1IZDvPc%2Bw86RPhYl4acKr%2FXCi7LfV%2FmFmhSwbscK38BZfPgCzQyru%2BsQYR3Lz5YA0aSXep5iOyIQEtxjENEMAwp2hzD0ZK5JbeBIAYYhh0euBSBDL4sXR%2FMdx1sVdmcpRDa73EWIloZS%2Fu%2B5dbCFadLEqt1ubX2vaKuGN%2BV1TBDSuWUPtxFQYMvQQJuNRyfbFYsg%2F4I4N&X-Amz-Signature=e554a60da2ec1e613cd0c6f13f1d6b68e1ed7f47f6f9cf0a908e40dfaf6325f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VELF5U5S%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDF7tw%2B1kvw9wDyHmYinglCD64UpJSqM1N7GPWWTfQfvQIgSiKSsODAMxbNI1XcuiCUast1tWXo8VndqSwDA%2FyxRMIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDC0ICrNkpE%2FBkzhn0yrcA%2BpKqMq1QRcGn5zif6ctIrzlp97wj1NnjR4RIGmDZsVgG88I8XWQ13cH%2FnRDGYXSnIeof8sGLnryjf9Dq5D4DO25r74oM2P%2F%2F8XkR0yXuCuIj3l8ypz0BKmf0EuocWJz8A2urUH4Sm9ZSwlFQnNWbZanOiBoJdwwCLRBAuJj8YWljzNM41kkLrOkk8vYlOI4Ww%2FGnHt34HnTm97EU83dJg7DxyFA8KZAGBsrvLwKeiRfczO1qaLHJT2U3GbA3AGnGG7fpB6p%2BknHBvBuoMR3ya8%2FxnGfp3fXq2yFMCMltPTZMtCd%2Bv7SDVT0w6%2FOO8uUuBoEvKPRFMarFbG1Aqmxipa1ZpJL924li16VYT4NBcaEBbTwPR6XyQpg7qFS%2BOkQQBrrxO7XstNUdmnKsxnw2oM4nz38l1EIjgow2Z3ZJeTAN7XYQicIaEd1fosBa%2B0pfF9zueBIk782O%2Ftr8UYaF%2FbCrq6Wxgg6RLCEbjm9q55jbcDbm2PtRhB7Kawv4KrH4b9mQmzagBq%2B7NjdFI3Ude0GEMaRtQIyWD9KmiRdFFQPIil0WEeaVCNKGwMwCrYcGech50yez%2F%2FD1fByosrUi7zPgtYyaUcuF1gQ5%2FzKERys%2FK1%2B6HFHDPdiV8l6MKun1c8GOqUBabwNrHGIh23L9IqADXD1IZDvPc%2Bw86RPhYl4acKr%2FXCi7LfV%2FmFmhSwbscK38BZfPgCzQyru%2BsQYR3Lz5YA0aSXep5iOyIQEtxjENEMAwp2hzD0ZK5JbeBIAYYhh0euBSBDL4sXR%2FMdx1sVdmcpRDa73EWIloZS%2Fu%2B5dbCFadLEqt1ubX2vaKuGN%2BV1TBDSuWUPtxFQYMvQQJuNRyfbFYsg%2F4I4N&X-Amz-Signature=702a926469d871b87621f41a7c1db6d89a69b09c093fce96a3a323c4acc7cd48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VELF5U5S%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDF7tw%2B1kvw9wDyHmYinglCD64UpJSqM1N7GPWWTfQfvQIgSiKSsODAMxbNI1XcuiCUast1tWXo8VndqSwDA%2FyxRMIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDC0ICrNkpE%2FBkzhn0yrcA%2BpKqMq1QRcGn5zif6ctIrzlp97wj1NnjR4RIGmDZsVgG88I8XWQ13cH%2FnRDGYXSnIeof8sGLnryjf9Dq5D4DO25r74oM2P%2F%2F8XkR0yXuCuIj3l8ypz0BKmf0EuocWJz8A2urUH4Sm9ZSwlFQnNWbZanOiBoJdwwCLRBAuJj8YWljzNM41kkLrOkk8vYlOI4Ww%2FGnHt34HnTm97EU83dJg7DxyFA8KZAGBsrvLwKeiRfczO1qaLHJT2U3GbA3AGnGG7fpB6p%2BknHBvBuoMR3ya8%2FxnGfp3fXq2yFMCMltPTZMtCd%2Bv7SDVT0w6%2FOO8uUuBoEvKPRFMarFbG1Aqmxipa1ZpJL924li16VYT4NBcaEBbTwPR6XyQpg7qFS%2BOkQQBrrxO7XstNUdmnKsxnw2oM4nz38l1EIjgow2Z3ZJeTAN7XYQicIaEd1fosBa%2B0pfF9zueBIk782O%2Ftr8UYaF%2FbCrq6Wxgg6RLCEbjm9q55jbcDbm2PtRhB7Kawv4KrH4b9mQmzagBq%2B7NjdFI3Ude0GEMaRtQIyWD9KmiRdFFQPIil0WEeaVCNKGwMwCrYcGech50yez%2F%2FD1fByosrUi7zPgtYyaUcuF1gQ5%2FzKERys%2FK1%2B6HFHDPdiV8l6MKun1c8GOqUBabwNrHGIh23L9IqADXD1IZDvPc%2Bw86RPhYl4acKr%2FXCi7LfV%2FmFmhSwbscK38BZfPgCzQyru%2BsQYR3Lz5YA0aSXep5iOyIQEtxjENEMAwp2hzD0ZK5JbeBIAYYhh0euBSBDL4sXR%2FMdx1sVdmcpRDa73EWIloZS%2Fu%2B5dbCFadLEqt1ubX2vaKuGN%2BV1TBDSuWUPtxFQYMvQQJuNRyfbFYsg%2F4I4N&X-Amz-Signature=ce59c4148b61f6eee049187ae75d7d324de91344f7efaccad2771d566559f621&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VELF5U5S%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDF7tw%2B1kvw9wDyHmYinglCD64UpJSqM1N7GPWWTfQfvQIgSiKSsODAMxbNI1XcuiCUast1tWXo8VndqSwDA%2FyxRMIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDC0ICrNkpE%2FBkzhn0yrcA%2BpKqMq1QRcGn5zif6ctIrzlp97wj1NnjR4RIGmDZsVgG88I8XWQ13cH%2FnRDGYXSnIeof8sGLnryjf9Dq5D4DO25r74oM2P%2F%2F8XkR0yXuCuIj3l8ypz0BKmf0EuocWJz8A2urUH4Sm9ZSwlFQnNWbZanOiBoJdwwCLRBAuJj8YWljzNM41kkLrOkk8vYlOI4Ww%2FGnHt34HnTm97EU83dJg7DxyFA8KZAGBsrvLwKeiRfczO1qaLHJT2U3GbA3AGnGG7fpB6p%2BknHBvBuoMR3ya8%2FxnGfp3fXq2yFMCMltPTZMtCd%2Bv7SDVT0w6%2FOO8uUuBoEvKPRFMarFbG1Aqmxipa1ZpJL924li16VYT4NBcaEBbTwPR6XyQpg7qFS%2BOkQQBrrxO7XstNUdmnKsxnw2oM4nz38l1EIjgow2Z3ZJeTAN7XYQicIaEd1fosBa%2B0pfF9zueBIk782O%2Ftr8UYaF%2FbCrq6Wxgg6RLCEbjm9q55jbcDbm2PtRhB7Kawv4KrH4b9mQmzagBq%2B7NjdFI3Ude0GEMaRtQIyWD9KmiRdFFQPIil0WEeaVCNKGwMwCrYcGech50yez%2F%2FD1fByosrUi7zPgtYyaUcuF1gQ5%2FzKERys%2FK1%2B6HFHDPdiV8l6MKun1c8GOqUBabwNrHGIh23L9IqADXD1IZDvPc%2Bw86RPhYl4acKr%2FXCi7LfV%2FmFmhSwbscK38BZfPgCzQyru%2BsQYR3Lz5YA0aSXep5iOyIQEtxjENEMAwp2hzD0ZK5JbeBIAYYhh0euBSBDL4sXR%2FMdx1sVdmcpRDa73EWIloZS%2Fu%2B5dbCFadLEqt1ubX2vaKuGN%2BV1TBDSuWUPtxFQYMvQQJuNRyfbFYsg%2F4I4N&X-Amz-Signature=e0519182e8278a00ff65d62181fb3d6ecf9eaab8352aa6b944ad94fc332e5379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VELF5U5S%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDF7tw%2B1kvw9wDyHmYinglCD64UpJSqM1N7GPWWTfQfvQIgSiKSsODAMxbNI1XcuiCUast1tWXo8VndqSwDA%2FyxRMIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDC0ICrNkpE%2FBkzhn0yrcA%2BpKqMq1QRcGn5zif6ctIrzlp97wj1NnjR4RIGmDZsVgG88I8XWQ13cH%2FnRDGYXSnIeof8sGLnryjf9Dq5D4DO25r74oM2P%2F%2F8XkR0yXuCuIj3l8ypz0BKmf0EuocWJz8A2urUH4Sm9ZSwlFQnNWbZanOiBoJdwwCLRBAuJj8YWljzNM41kkLrOkk8vYlOI4Ww%2FGnHt34HnTm97EU83dJg7DxyFA8KZAGBsrvLwKeiRfczO1qaLHJT2U3GbA3AGnGG7fpB6p%2BknHBvBuoMR3ya8%2FxnGfp3fXq2yFMCMltPTZMtCd%2Bv7SDVT0w6%2FOO8uUuBoEvKPRFMarFbG1Aqmxipa1ZpJL924li16VYT4NBcaEBbTwPR6XyQpg7qFS%2BOkQQBrrxO7XstNUdmnKsxnw2oM4nz38l1EIjgow2Z3ZJeTAN7XYQicIaEd1fosBa%2B0pfF9zueBIk782O%2Ftr8UYaF%2FbCrq6Wxgg6RLCEbjm9q55jbcDbm2PtRhB7Kawv4KrH4b9mQmzagBq%2B7NjdFI3Ude0GEMaRtQIyWD9KmiRdFFQPIil0WEeaVCNKGwMwCrYcGech50yez%2F%2FD1fByosrUi7zPgtYyaUcuF1gQ5%2FzKERys%2FK1%2B6HFHDPdiV8l6MKun1c8GOqUBabwNrHGIh23L9IqADXD1IZDvPc%2Bw86RPhYl4acKr%2FXCi7LfV%2FmFmhSwbscK38BZfPgCzQyru%2BsQYR3Lz5YA0aSXep5iOyIQEtxjENEMAwp2hzD0ZK5JbeBIAYYhh0euBSBDL4sXR%2FMdx1sVdmcpRDa73EWIloZS%2Fu%2B5dbCFadLEqt1ubX2vaKuGN%2BV1TBDSuWUPtxFQYMvQQJuNRyfbFYsg%2F4I4N&X-Amz-Signature=46a2e0300ce9c96913b23537880315af5dc9cebab5488fa93cf5780dbe58bfe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


