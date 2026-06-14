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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4BZE2W5%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDO6B%2FwBR9nkwfuGvGkPzN52cIdXMutqUzcObznz3AqKQIgJd983gBDo2jNZVkbGeRt%2FcmL%2FimlBQp61HPj9pXwVUIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMR7L0NcTQ0KCwfZLyrcAxMNgadLFRDwJgEmyUt%2Bpt9jx5WeISWxKf5wVrZu93EMcAh1ramj8PMOs9BblVUbjZH13Y0HQ9DioB3YjLvxnH6udWmCCZ1VGu5aHMcNWbZXVT%2BNuvGP%2BMEP7u0fo%2B6%2FG%2FqRMG4ddtBUMFUo0mqfr3DMJfQokqLE92TgTg2s47Wzfogz%2FXk5VsCZnonBmGNutXKC7ORNg%2FuGUBSdWt6JaqYCDVENLkE8zSfRs01QcMgUDUv%2Bk3zJq1TUEjmGo0Ta6NnX0wcdPFtqyHdhxkCpk%2FWaVxrdcCbNxxl28G7koj8aUQl%2F735kmBMJ5CSWTiQjfWXResRrMj5TY0Sh9lzmwIv9zU5251dZoV9pBqG4wznTZ5SsMLOZ%2BpwbVVXil54lliUbVTe%2BcHuuTBPwmXysbJHu9ysxuZDnRc8NqrrgQKH1ru2YEaj3j3XhOHzCCrABWVE8SDyadcPA1DfA0MfjG%2BQei3IEKThNnKTdZmtKsR7mCg1j9v1BQaHOPMtCph3ACiXL5BQ0kglChdZmxxpj6cG4pDuEsb0YjBzkhBo0SiTZyjQ0q6EZcQEtBSSOR%2FMmXKKamAqF0HMBRd9TEf9nG8FzwTVJxbNiEgYPaz9FcVEtyVmJAYVxY3V5SUmGMOibuNEGOqUBx7nbEdYBjC3FqIjCMi1G%2FjSC2ofIuqlMRMWNSFjNKN9kSzq5ahD3EmphZhOrKabQvmnwszhZkabc5Pj2f77xSNgJkceMguVhT5AfLEDPFzSI7doHvzQrr6cZPyvxwRAWai5%2FH%2B6Y%2FeF0AYCR%2BWnpToon3pclWI3JjdG0YV6A%2B10lODs0cM%2FPUZZwWKqERhDNJmtzR9T%2FtSXXTR%2Bz1yR7LEyfbite&X-Amz-Signature=3ceb081edbee5db67041be51647f5d890a781930d28d12f8f631e468f4f3a931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4BZE2W5%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDO6B%2FwBR9nkwfuGvGkPzN52cIdXMutqUzcObznz3AqKQIgJd983gBDo2jNZVkbGeRt%2FcmL%2FimlBQp61HPj9pXwVUIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMR7L0NcTQ0KCwfZLyrcAxMNgadLFRDwJgEmyUt%2Bpt9jx5WeISWxKf5wVrZu93EMcAh1ramj8PMOs9BblVUbjZH13Y0HQ9DioB3YjLvxnH6udWmCCZ1VGu5aHMcNWbZXVT%2BNuvGP%2BMEP7u0fo%2B6%2FG%2FqRMG4ddtBUMFUo0mqfr3DMJfQokqLE92TgTg2s47Wzfogz%2FXk5VsCZnonBmGNutXKC7ORNg%2FuGUBSdWt6JaqYCDVENLkE8zSfRs01QcMgUDUv%2Bk3zJq1TUEjmGo0Ta6NnX0wcdPFtqyHdhxkCpk%2FWaVxrdcCbNxxl28G7koj8aUQl%2F735kmBMJ5CSWTiQjfWXResRrMj5TY0Sh9lzmwIv9zU5251dZoV9pBqG4wznTZ5SsMLOZ%2BpwbVVXil54lliUbVTe%2BcHuuTBPwmXysbJHu9ysxuZDnRc8NqrrgQKH1ru2YEaj3j3XhOHzCCrABWVE8SDyadcPA1DfA0MfjG%2BQei3IEKThNnKTdZmtKsR7mCg1j9v1BQaHOPMtCph3ACiXL5BQ0kglChdZmxxpj6cG4pDuEsb0YjBzkhBo0SiTZyjQ0q6EZcQEtBSSOR%2FMmXKKamAqF0HMBRd9TEf9nG8FzwTVJxbNiEgYPaz9FcVEtyVmJAYVxY3V5SUmGMOibuNEGOqUBx7nbEdYBjC3FqIjCMi1G%2FjSC2ofIuqlMRMWNSFjNKN9kSzq5ahD3EmphZhOrKabQvmnwszhZkabc5Pj2f77xSNgJkceMguVhT5AfLEDPFzSI7doHvzQrr6cZPyvxwRAWai5%2FH%2B6Y%2FeF0AYCR%2BWnpToon3pclWI3JjdG0YV6A%2B10lODs0cM%2FPUZZwWKqERhDNJmtzR9T%2FtSXXTR%2Bz1yR7LEyfbite&X-Amz-Signature=e052df6d27ac28aaca717b24df96da15b43bd1d5453759d273994fb3b3bbeeec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4BZE2W5%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDO6B%2FwBR9nkwfuGvGkPzN52cIdXMutqUzcObznz3AqKQIgJd983gBDo2jNZVkbGeRt%2FcmL%2FimlBQp61HPj9pXwVUIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMR7L0NcTQ0KCwfZLyrcAxMNgadLFRDwJgEmyUt%2Bpt9jx5WeISWxKf5wVrZu93EMcAh1ramj8PMOs9BblVUbjZH13Y0HQ9DioB3YjLvxnH6udWmCCZ1VGu5aHMcNWbZXVT%2BNuvGP%2BMEP7u0fo%2B6%2FG%2FqRMG4ddtBUMFUo0mqfr3DMJfQokqLE92TgTg2s47Wzfogz%2FXk5VsCZnonBmGNutXKC7ORNg%2FuGUBSdWt6JaqYCDVENLkE8zSfRs01QcMgUDUv%2Bk3zJq1TUEjmGo0Ta6NnX0wcdPFtqyHdhxkCpk%2FWaVxrdcCbNxxl28G7koj8aUQl%2F735kmBMJ5CSWTiQjfWXResRrMj5TY0Sh9lzmwIv9zU5251dZoV9pBqG4wznTZ5SsMLOZ%2BpwbVVXil54lliUbVTe%2BcHuuTBPwmXysbJHu9ysxuZDnRc8NqrrgQKH1ru2YEaj3j3XhOHzCCrABWVE8SDyadcPA1DfA0MfjG%2BQei3IEKThNnKTdZmtKsR7mCg1j9v1BQaHOPMtCph3ACiXL5BQ0kglChdZmxxpj6cG4pDuEsb0YjBzkhBo0SiTZyjQ0q6EZcQEtBSSOR%2FMmXKKamAqF0HMBRd9TEf9nG8FzwTVJxbNiEgYPaz9FcVEtyVmJAYVxY3V5SUmGMOibuNEGOqUBx7nbEdYBjC3FqIjCMi1G%2FjSC2ofIuqlMRMWNSFjNKN9kSzq5ahD3EmphZhOrKabQvmnwszhZkabc5Pj2f77xSNgJkceMguVhT5AfLEDPFzSI7doHvzQrr6cZPyvxwRAWai5%2FH%2B6Y%2FeF0AYCR%2BWnpToon3pclWI3JjdG0YV6A%2B10lODs0cM%2FPUZZwWKqERhDNJmtzR9T%2FtSXXTR%2Bz1yR7LEyfbite&X-Amz-Signature=b326590f3a21b3ce7116aedec5c2442a222447fdcc67815d47a493f9178775d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4BZE2W5%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDO6B%2FwBR9nkwfuGvGkPzN52cIdXMutqUzcObznz3AqKQIgJd983gBDo2jNZVkbGeRt%2FcmL%2FimlBQp61HPj9pXwVUIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMR7L0NcTQ0KCwfZLyrcAxMNgadLFRDwJgEmyUt%2Bpt9jx5WeISWxKf5wVrZu93EMcAh1ramj8PMOs9BblVUbjZH13Y0HQ9DioB3YjLvxnH6udWmCCZ1VGu5aHMcNWbZXVT%2BNuvGP%2BMEP7u0fo%2B6%2FG%2FqRMG4ddtBUMFUo0mqfr3DMJfQokqLE92TgTg2s47Wzfogz%2FXk5VsCZnonBmGNutXKC7ORNg%2FuGUBSdWt6JaqYCDVENLkE8zSfRs01QcMgUDUv%2Bk3zJq1TUEjmGo0Ta6NnX0wcdPFtqyHdhxkCpk%2FWaVxrdcCbNxxl28G7koj8aUQl%2F735kmBMJ5CSWTiQjfWXResRrMj5TY0Sh9lzmwIv9zU5251dZoV9pBqG4wznTZ5SsMLOZ%2BpwbVVXil54lliUbVTe%2BcHuuTBPwmXysbJHu9ysxuZDnRc8NqrrgQKH1ru2YEaj3j3XhOHzCCrABWVE8SDyadcPA1DfA0MfjG%2BQei3IEKThNnKTdZmtKsR7mCg1j9v1BQaHOPMtCph3ACiXL5BQ0kglChdZmxxpj6cG4pDuEsb0YjBzkhBo0SiTZyjQ0q6EZcQEtBSSOR%2FMmXKKamAqF0HMBRd9TEf9nG8FzwTVJxbNiEgYPaz9FcVEtyVmJAYVxY3V5SUmGMOibuNEGOqUBx7nbEdYBjC3FqIjCMi1G%2FjSC2ofIuqlMRMWNSFjNKN9kSzq5ahD3EmphZhOrKabQvmnwszhZkabc5Pj2f77xSNgJkceMguVhT5AfLEDPFzSI7doHvzQrr6cZPyvxwRAWai5%2FH%2B6Y%2FeF0AYCR%2BWnpToon3pclWI3JjdG0YV6A%2B10lODs0cM%2FPUZZwWKqERhDNJmtzR9T%2FtSXXTR%2Bz1yR7LEyfbite&X-Amz-Signature=183100f039d2859a5ac9c30d3ae56eac01241516f98c548fc21e7b6c26c8c842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4BZE2W5%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDO6B%2FwBR9nkwfuGvGkPzN52cIdXMutqUzcObznz3AqKQIgJd983gBDo2jNZVkbGeRt%2FcmL%2FimlBQp61HPj9pXwVUIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMR7L0NcTQ0KCwfZLyrcAxMNgadLFRDwJgEmyUt%2Bpt9jx5WeISWxKf5wVrZu93EMcAh1ramj8PMOs9BblVUbjZH13Y0HQ9DioB3YjLvxnH6udWmCCZ1VGu5aHMcNWbZXVT%2BNuvGP%2BMEP7u0fo%2B6%2FG%2FqRMG4ddtBUMFUo0mqfr3DMJfQokqLE92TgTg2s47Wzfogz%2FXk5VsCZnonBmGNutXKC7ORNg%2FuGUBSdWt6JaqYCDVENLkE8zSfRs01QcMgUDUv%2Bk3zJq1TUEjmGo0Ta6NnX0wcdPFtqyHdhxkCpk%2FWaVxrdcCbNxxl28G7koj8aUQl%2F735kmBMJ5CSWTiQjfWXResRrMj5TY0Sh9lzmwIv9zU5251dZoV9pBqG4wznTZ5SsMLOZ%2BpwbVVXil54lliUbVTe%2BcHuuTBPwmXysbJHu9ysxuZDnRc8NqrrgQKH1ru2YEaj3j3XhOHzCCrABWVE8SDyadcPA1DfA0MfjG%2BQei3IEKThNnKTdZmtKsR7mCg1j9v1BQaHOPMtCph3ACiXL5BQ0kglChdZmxxpj6cG4pDuEsb0YjBzkhBo0SiTZyjQ0q6EZcQEtBSSOR%2FMmXKKamAqF0HMBRd9TEf9nG8FzwTVJxbNiEgYPaz9FcVEtyVmJAYVxY3V5SUmGMOibuNEGOqUBx7nbEdYBjC3FqIjCMi1G%2FjSC2ofIuqlMRMWNSFjNKN9kSzq5ahD3EmphZhOrKabQvmnwszhZkabc5Pj2f77xSNgJkceMguVhT5AfLEDPFzSI7doHvzQrr6cZPyvxwRAWai5%2FH%2B6Y%2FeF0AYCR%2BWnpToon3pclWI3JjdG0YV6A%2B10lODs0cM%2FPUZZwWKqERhDNJmtzR9T%2FtSXXTR%2Bz1yR7LEyfbite&X-Amz-Signature=76c703011569e29fb255bc392ba64ff6b041d69f8824742a9c846a0579f04705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4BZE2W5%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDO6B%2FwBR9nkwfuGvGkPzN52cIdXMutqUzcObznz3AqKQIgJd983gBDo2jNZVkbGeRt%2FcmL%2FimlBQp61HPj9pXwVUIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMR7L0NcTQ0KCwfZLyrcAxMNgadLFRDwJgEmyUt%2Bpt9jx5WeISWxKf5wVrZu93EMcAh1ramj8PMOs9BblVUbjZH13Y0HQ9DioB3YjLvxnH6udWmCCZ1VGu5aHMcNWbZXVT%2BNuvGP%2BMEP7u0fo%2B6%2FG%2FqRMG4ddtBUMFUo0mqfr3DMJfQokqLE92TgTg2s47Wzfogz%2FXk5VsCZnonBmGNutXKC7ORNg%2FuGUBSdWt6JaqYCDVENLkE8zSfRs01QcMgUDUv%2Bk3zJq1TUEjmGo0Ta6NnX0wcdPFtqyHdhxkCpk%2FWaVxrdcCbNxxl28G7koj8aUQl%2F735kmBMJ5CSWTiQjfWXResRrMj5TY0Sh9lzmwIv9zU5251dZoV9pBqG4wznTZ5SsMLOZ%2BpwbVVXil54lliUbVTe%2BcHuuTBPwmXysbJHu9ysxuZDnRc8NqrrgQKH1ru2YEaj3j3XhOHzCCrABWVE8SDyadcPA1DfA0MfjG%2BQei3IEKThNnKTdZmtKsR7mCg1j9v1BQaHOPMtCph3ACiXL5BQ0kglChdZmxxpj6cG4pDuEsb0YjBzkhBo0SiTZyjQ0q6EZcQEtBSSOR%2FMmXKKamAqF0HMBRd9TEf9nG8FzwTVJxbNiEgYPaz9FcVEtyVmJAYVxY3V5SUmGMOibuNEGOqUBx7nbEdYBjC3FqIjCMi1G%2FjSC2ofIuqlMRMWNSFjNKN9kSzq5ahD3EmphZhOrKabQvmnwszhZkabc5Pj2f77xSNgJkceMguVhT5AfLEDPFzSI7doHvzQrr6cZPyvxwRAWai5%2FH%2B6Y%2FeF0AYCR%2BWnpToon3pclWI3JjdG0YV6A%2B10lODs0cM%2FPUZZwWKqERhDNJmtzR9T%2FtSXXTR%2Bz1yR7LEyfbite&X-Amz-Signature=62faac1ee3f0e06744464e71d3147621d9ea958923de3e5cec4e1cca9cabb418&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4BZE2W5%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDO6B%2FwBR9nkwfuGvGkPzN52cIdXMutqUzcObznz3AqKQIgJd983gBDo2jNZVkbGeRt%2FcmL%2FimlBQp61HPj9pXwVUIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMR7L0NcTQ0KCwfZLyrcAxMNgadLFRDwJgEmyUt%2Bpt9jx5WeISWxKf5wVrZu93EMcAh1ramj8PMOs9BblVUbjZH13Y0HQ9DioB3YjLvxnH6udWmCCZ1VGu5aHMcNWbZXVT%2BNuvGP%2BMEP7u0fo%2B6%2FG%2FqRMG4ddtBUMFUo0mqfr3DMJfQokqLE92TgTg2s47Wzfogz%2FXk5VsCZnonBmGNutXKC7ORNg%2FuGUBSdWt6JaqYCDVENLkE8zSfRs01QcMgUDUv%2Bk3zJq1TUEjmGo0Ta6NnX0wcdPFtqyHdhxkCpk%2FWaVxrdcCbNxxl28G7koj8aUQl%2F735kmBMJ5CSWTiQjfWXResRrMj5TY0Sh9lzmwIv9zU5251dZoV9pBqG4wznTZ5SsMLOZ%2BpwbVVXil54lliUbVTe%2BcHuuTBPwmXysbJHu9ysxuZDnRc8NqrrgQKH1ru2YEaj3j3XhOHzCCrABWVE8SDyadcPA1DfA0MfjG%2BQei3IEKThNnKTdZmtKsR7mCg1j9v1BQaHOPMtCph3ACiXL5BQ0kglChdZmxxpj6cG4pDuEsb0YjBzkhBo0SiTZyjQ0q6EZcQEtBSSOR%2FMmXKKamAqF0HMBRd9TEf9nG8FzwTVJxbNiEgYPaz9FcVEtyVmJAYVxY3V5SUmGMOibuNEGOqUBx7nbEdYBjC3FqIjCMi1G%2FjSC2ofIuqlMRMWNSFjNKN9kSzq5ahD3EmphZhOrKabQvmnwszhZkabc5Pj2f77xSNgJkceMguVhT5AfLEDPFzSI7doHvzQrr6cZPyvxwRAWai5%2FH%2B6Y%2FeF0AYCR%2BWnpToon3pclWI3JjdG0YV6A%2B10lODs0cM%2FPUZZwWKqERhDNJmtzR9T%2FtSXXTR%2Bz1yR7LEyfbite&X-Amz-Signature=664d262be77ed48e81e520ca9f604a2696e23be45fd30724c192d9d9492df7bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4BZE2W5%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDO6B%2FwBR9nkwfuGvGkPzN52cIdXMutqUzcObznz3AqKQIgJd983gBDo2jNZVkbGeRt%2FcmL%2FimlBQp61HPj9pXwVUIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMR7L0NcTQ0KCwfZLyrcAxMNgadLFRDwJgEmyUt%2Bpt9jx5WeISWxKf5wVrZu93EMcAh1ramj8PMOs9BblVUbjZH13Y0HQ9DioB3YjLvxnH6udWmCCZ1VGu5aHMcNWbZXVT%2BNuvGP%2BMEP7u0fo%2B6%2FG%2FqRMG4ddtBUMFUo0mqfr3DMJfQokqLE92TgTg2s47Wzfogz%2FXk5VsCZnonBmGNutXKC7ORNg%2FuGUBSdWt6JaqYCDVENLkE8zSfRs01QcMgUDUv%2Bk3zJq1TUEjmGo0Ta6NnX0wcdPFtqyHdhxkCpk%2FWaVxrdcCbNxxl28G7koj8aUQl%2F735kmBMJ5CSWTiQjfWXResRrMj5TY0Sh9lzmwIv9zU5251dZoV9pBqG4wznTZ5SsMLOZ%2BpwbVVXil54lliUbVTe%2BcHuuTBPwmXysbJHu9ysxuZDnRc8NqrrgQKH1ru2YEaj3j3XhOHzCCrABWVE8SDyadcPA1DfA0MfjG%2BQei3IEKThNnKTdZmtKsR7mCg1j9v1BQaHOPMtCph3ACiXL5BQ0kglChdZmxxpj6cG4pDuEsb0YjBzkhBo0SiTZyjQ0q6EZcQEtBSSOR%2FMmXKKamAqF0HMBRd9TEf9nG8FzwTVJxbNiEgYPaz9FcVEtyVmJAYVxY3V5SUmGMOibuNEGOqUBx7nbEdYBjC3FqIjCMi1G%2FjSC2ofIuqlMRMWNSFjNKN9kSzq5ahD3EmphZhOrKabQvmnwszhZkabc5Pj2f77xSNgJkceMguVhT5AfLEDPFzSI7doHvzQrr6cZPyvxwRAWai5%2FH%2B6Y%2FeF0AYCR%2BWnpToon3pclWI3JjdG0YV6A%2B10lODs0cM%2FPUZZwWKqERhDNJmtzR9T%2FtSXXTR%2Bz1yR7LEyfbite&X-Amz-Signature=20b28a2d37e530a675fd7f40f22cb9d5b76ae1a5211ddee0dbc3753ca0cfd7e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4BZE2W5%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDO6B%2FwBR9nkwfuGvGkPzN52cIdXMutqUzcObznz3AqKQIgJd983gBDo2jNZVkbGeRt%2FcmL%2FimlBQp61HPj9pXwVUIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMR7L0NcTQ0KCwfZLyrcAxMNgadLFRDwJgEmyUt%2Bpt9jx5WeISWxKf5wVrZu93EMcAh1ramj8PMOs9BblVUbjZH13Y0HQ9DioB3YjLvxnH6udWmCCZ1VGu5aHMcNWbZXVT%2BNuvGP%2BMEP7u0fo%2B6%2FG%2FqRMG4ddtBUMFUo0mqfr3DMJfQokqLE92TgTg2s47Wzfogz%2FXk5VsCZnonBmGNutXKC7ORNg%2FuGUBSdWt6JaqYCDVENLkE8zSfRs01QcMgUDUv%2Bk3zJq1TUEjmGo0Ta6NnX0wcdPFtqyHdhxkCpk%2FWaVxrdcCbNxxl28G7koj8aUQl%2F735kmBMJ5CSWTiQjfWXResRrMj5TY0Sh9lzmwIv9zU5251dZoV9pBqG4wznTZ5SsMLOZ%2BpwbVVXil54lliUbVTe%2BcHuuTBPwmXysbJHu9ysxuZDnRc8NqrrgQKH1ru2YEaj3j3XhOHzCCrABWVE8SDyadcPA1DfA0MfjG%2BQei3IEKThNnKTdZmtKsR7mCg1j9v1BQaHOPMtCph3ACiXL5BQ0kglChdZmxxpj6cG4pDuEsb0YjBzkhBo0SiTZyjQ0q6EZcQEtBSSOR%2FMmXKKamAqF0HMBRd9TEf9nG8FzwTVJxbNiEgYPaz9FcVEtyVmJAYVxY3V5SUmGMOibuNEGOqUBx7nbEdYBjC3FqIjCMi1G%2FjSC2ofIuqlMRMWNSFjNKN9kSzq5ahD3EmphZhOrKabQvmnwszhZkabc5Pj2f77xSNgJkceMguVhT5AfLEDPFzSI7doHvzQrr6cZPyvxwRAWai5%2FH%2B6Y%2FeF0AYCR%2BWnpToon3pclWI3JjdG0YV6A%2B10lODs0cM%2FPUZZwWKqERhDNJmtzR9T%2FtSXXTR%2Bz1yR7LEyfbite&X-Amz-Signature=7350c4e6610e7d3ae15188bbebc6712ab6d1a415389071d2e66373454327128d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4BZE2W5%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDO6B%2FwBR9nkwfuGvGkPzN52cIdXMutqUzcObznz3AqKQIgJd983gBDo2jNZVkbGeRt%2FcmL%2FimlBQp61HPj9pXwVUIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMR7L0NcTQ0KCwfZLyrcAxMNgadLFRDwJgEmyUt%2Bpt9jx5WeISWxKf5wVrZu93EMcAh1ramj8PMOs9BblVUbjZH13Y0HQ9DioB3YjLvxnH6udWmCCZ1VGu5aHMcNWbZXVT%2BNuvGP%2BMEP7u0fo%2B6%2FG%2FqRMG4ddtBUMFUo0mqfr3DMJfQokqLE92TgTg2s47Wzfogz%2FXk5VsCZnonBmGNutXKC7ORNg%2FuGUBSdWt6JaqYCDVENLkE8zSfRs01QcMgUDUv%2Bk3zJq1TUEjmGo0Ta6NnX0wcdPFtqyHdhxkCpk%2FWaVxrdcCbNxxl28G7koj8aUQl%2F735kmBMJ5CSWTiQjfWXResRrMj5TY0Sh9lzmwIv9zU5251dZoV9pBqG4wznTZ5SsMLOZ%2BpwbVVXil54lliUbVTe%2BcHuuTBPwmXysbJHu9ysxuZDnRc8NqrrgQKH1ru2YEaj3j3XhOHzCCrABWVE8SDyadcPA1DfA0MfjG%2BQei3IEKThNnKTdZmtKsR7mCg1j9v1BQaHOPMtCph3ACiXL5BQ0kglChdZmxxpj6cG4pDuEsb0YjBzkhBo0SiTZyjQ0q6EZcQEtBSSOR%2FMmXKKamAqF0HMBRd9TEf9nG8FzwTVJxbNiEgYPaz9FcVEtyVmJAYVxY3V5SUmGMOibuNEGOqUBx7nbEdYBjC3FqIjCMi1G%2FjSC2ofIuqlMRMWNSFjNKN9kSzq5ahD3EmphZhOrKabQvmnwszhZkabc5Pj2f77xSNgJkceMguVhT5AfLEDPFzSI7doHvzQrr6cZPyvxwRAWai5%2FH%2B6Y%2FeF0AYCR%2BWnpToon3pclWI3JjdG0YV6A%2B10lODs0cM%2FPUZZwWKqERhDNJmtzR9T%2FtSXXTR%2Bz1yR7LEyfbite&X-Amz-Signature=8d06a825cb8f1bacc6d087afd996807da42c52dea742211b4680c7f4de54883d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EW5Z53P%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDpaxQ5r7HgGY6jqfEfLcLbCn8fO9q74OS%2BF6JnBmaXYAiEA%2BlGLjBeocgZWjwCC%2FdAUDgS%2FvZHHYz6vEF%2BKWNC5d7sq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFGAFEkvSI8MZhComSrcA7rsrxWg1cSpYBStfCrhgSacEEd2ZppiCZRqn1wxZT2pZMOf5ezKN1z%2BFn%2F4EAX4jts3aknogakSOn39Tz81Y6MvhmARc7jX2NqfHUuItKRHSkAnaRZ9q7ZOGDBsUKRRk4WIMX0ZM8kQBuhjtLotWuYTXmirTD4ipymVCVhHroG8xrmKuwf5prFur6mRZuJBMJyDBuhrRpWzrumPq2wjnKqo6qjewDawgzOPoL5VJhui5HS2GcXghKer7U71fJbB5P%2B5BeaJpQ%2Bz5qIr68otE918KU8QXNfJQWnE04zhvB%2FLi2ika4VCFwRUHCeinXGJ%2FJSN2NQwtdTMswNe5MNTQpQPMlVDoq0jM03vGhuIl77JWwwOGL547avvVD3E7fDujj4TH0VOg87T1rUrvaMemLEhZ0crZGauhR%2F%2B1k9ZuEpbVjwJGQJr7X5oAvg1OSsrrSC5IkeeEEpmdnelTCykFrvxk0IPaJkHvx0EgL6VEp%2FAzGeLFMKihU3bRdyogvRALOLZ6RVTDVGmSK6ZeU7j4xEYmWPJuRCkZJJMx98JRHWNv3tSILIkh5v0n6DAV%2Bt3NiCfIAUPDOKpGtjZowpu6V1me%2ByyokV39NmQdoU4CTtyrLFotRK3ON%2BFzS6CMPSbuNEGOqUBPPi8a8uZi3iRxKJIIyqaC4gvXtcZDTIxNUBGqjDt9vZrZs9Tn1sDmyxj%2BHvZQHYffVAw5%2BuzdfZ77ITn3ziw67%2BxRMwSSQM%2FeVY3jrIwRKjPnjfprtPDMeDphVXwpdba8fKbDOzrCTfdgBID9M1XZW%2FSIzNFI1ZzZPm79LD0ZnjE5NpzUU6xEyaa6e%2BbRUZi7T8EjgVGwcfBZvuA8rjOlLcYlV59&X-Amz-Signature=f5d382a367f8e39bd442d6b56920d52dd1ff413c7bcfef0af339cdf004414738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5YKCJTS%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC8sWfqxuV%2BVFs2YAOxMTPJD8FGNqzWx3oXT0DvgsX94gIgR5QXq6w6jlKc5hw0mLn9hqavxyjt9Pumxg3YN0Q%2BAy4q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKgbRYau1oOFWUWEgCrcA8sCDxelVRaE72D%2FvkPIsZoNb1FYvxir8k03QAV%2BdbhFNyUUj5PZ%2Fg4vUexMfe4yzo%2BCarL%2FzvC1k8OGBDWwDd7uRz%2BXgb4rEFH%2Fo5GXXfSOOKCL7j0cQQqN8kcPvOEeR0P4mgLGqMLzI%2B8%2B9GKbQo505TO%2FXf%2BLqebQYuHg8n9Ak7Kr5NegL4SStnY3I2u8judUfunTAlbueU7Pq8Q9dOf26IM6mr4dJNOiVmSbujbZ4Esw8PtgNY5s7TXL2C074tt%2BpDi7bTqML8IP7P9gjSVPknPqViyVACm7CkVv1JKLAdH1KNc2bVWlXX20UkjPfO2xAt%2FET8js3YvZ%2FVjSeGtcCu99PKUimYd5gcqR7NLzy8CG1O4Oueu3tvDrq3M2Jo%2BzIvP9aCrPtxsTmKQRcvQv7meprummMkBRP%2BA%2BKrMFbE16ghOB5PXSlmHOzk1Ex%2BRHxuHm2OWMCPgSRoDE0%2FHn6cucFm%2FnPNIAJl4MoKHO%2Bs7w5ASeh7DRbMU2aqp3XzXvQXSzr40IUZicGYQcCe3z5okSwbZ4FBEkTcTWs%2Fc0qAXyvTzuPGqFy3frJdR3MT3PZ2UklzRiFxneLj5zqLj8TDhHwUUU43zkL7tJrCvh8zNQl0yw2fwP18PLMJCduNEGOqUBBS%2FF3Xg9%2BDTR1uLzGlFd4BnDZG%2BnvnhUddCL89yIGyoBeocunWVhDNfeXJKMIv8d1BTiPw%2FoxepLNiPxYEZdEN7KxMKLP6DSM2RB4vqGfxndRGWU4%2Fo7l0mElMy7JUN1wOX8Mnk2v7v1b5mtCb1GtAGHKkBxSckKDBuRu3oYWCz8%2FQKboptrc%2BECoXM9o2x%2BgKorZ8ZafPjuFuUZwTVz0c0SDkE8&X-Amz-Signature=14ae063112c862487132c7d391d71c12d9217f2315965b039ed1213cb8d3de8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AZEPMQR%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEKTHv37bndlm0DFvaqPXnmzARUgNVcAo5LUkhRK6KkbAiEAjgkqegHt9mLr8gnU086niNhqK%2FZh%2B8V7LyW8bQsoVdEq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDOa%2BBLizm8PMpD6Q2yrcA68jRQoyKrK7ttb6W%2BC%2BClnNsIGJGeXy1yrYxZJP1ovZ%2BUXuW3j8UO6B0eYsHXizLqOgd76iZmusJRGW9mZfFX5hzZFPJ0lhAxtyLgoITTSMoIoFgmsYb%2F7YuUUuTQUtvRE2MKThm90Z0%2BW8BHAl2fY3AZ1t2Y5aqQGFS2p9XNxD8cUe0GKbB0s49IaO%2BpZoljyM0%2Fq6tA8M3tXb53CW%2B%2BndZ2l2T2eI5B661MLimZ0PLjimnsDQecR9rjH5uSDAqCsP3kSrcizeqOORkM5E8i%2BXs8to7bT7y7BHE2%2Bti2MJddLl7EXcYrtAKxHwiFBo77FJPTOupF%2FLxRzUyGAeXYUSSsMLgZPpWWMZegWp9M%2BEIhVcpeJlwVkthwi9TI4ronzQXloNpR5LZ7EhvbaUA93%2Bc0lT%2FR3j7zMAz40q%2FsyWv90T71TGyEHPjm4Uy%2FSAKqFslOvG9yE03f26VpDllfqQuB0fDVfANbMveH5aGRhR%2BaxngsR6VogBWfJowcAlprG8rWTKykF0tjDKZJfpPItXZ4Tcdzbod4IVbJNqIkT6ONUrU2Ox3yG7orniRXoQq4HVZtR9JPc1QMtzP1tKhqVRdVRh%2B3yogSDBLaILFky1MF2eeWCVGCxTXTCIMKqcuNEGOqUBG4hDmKnbVbGXvi%2Bp0A%2BcaKyb%2FzJjLLho8oqailvf2TlcNg2A7usgxoriconNAjffjTjqPfaRmBwEpHhN8U0xWxZpvCmyRWp7oiwy0GPZv4TYN2lngKlV1QP0W2y0waoT6J566L5qJMFu5jKZN8ktrbAqa%2BjlG%2FMzl%2FY2uDtSGWqy6pGZOpQaCt8q9Btmyr7NEbBtx57kwZahaZDFzR8%2FO%2FP39qyt&X-Amz-Signature=dfb05f9e0fb864e6258da69772e5a2878083f39a5ee88fa92359d16b69a8e824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4BZE2W5%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDO6B%2FwBR9nkwfuGvGkPzN52cIdXMutqUzcObznz3AqKQIgJd983gBDo2jNZVkbGeRt%2FcmL%2FimlBQp61HPj9pXwVUIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMR7L0NcTQ0KCwfZLyrcAxMNgadLFRDwJgEmyUt%2Bpt9jx5WeISWxKf5wVrZu93EMcAh1ramj8PMOs9BblVUbjZH13Y0HQ9DioB3YjLvxnH6udWmCCZ1VGu5aHMcNWbZXVT%2BNuvGP%2BMEP7u0fo%2B6%2FG%2FqRMG4ddtBUMFUo0mqfr3DMJfQokqLE92TgTg2s47Wzfogz%2FXk5VsCZnonBmGNutXKC7ORNg%2FuGUBSdWt6JaqYCDVENLkE8zSfRs01QcMgUDUv%2Bk3zJq1TUEjmGo0Ta6NnX0wcdPFtqyHdhxkCpk%2FWaVxrdcCbNxxl28G7koj8aUQl%2F735kmBMJ5CSWTiQjfWXResRrMj5TY0Sh9lzmwIv9zU5251dZoV9pBqG4wznTZ5SsMLOZ%2BpwbVVXil54lliUbVTe%2BcHuuTBPwmXysbJHu9ysxuZDnRc8NqrrgQKH1ru2YEaj3j3XhOHzCCrABWVE8SDyadcPA1DfA0MfjG%2BQei3IEKThNnKTdZmtKsR7mCg1j9v1BQaHOPMtCph3ACiXL5BQ0kglChdZmxxpj6cG4pDuEsb0YjBzkhBo0SiTZyjQ0q6EZcQEtBSSOR%2FMmXKKamAqF0HMBRd9TEf9nG8FzwTVJxbNiEgYPaz9FcVEtyVmJAYVxY3V5SUmGMOibuNEGOqUBx7nbEdYBjC3FqIjCMi1G%2FjSC2ofIuqlMRMWNSFjNKN9kSzq5ahD3EmphZhOrKabQvmnwszhZkabc5Pj2f77xSNgJkceMguVhT5AfLEDPFzSI7doHvzQrr6cZPyvxwRAWai5%2FH%2B6Y%2FeF0AYCR%2BWnpToon3pclWI3JjdG0YV6A%2B10lODs0cM%2FPUZZwWKqERhDNJmtzR9T%2FtSXXTR%2Bz1yR7LEyfbite&X-Amz-Signature=16a7ab02901d02963d3506e1407cbd7c44bdb3c7a9ebce40ecb1f1419582f07e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEKHUEEQ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD1JFv6MsRJWIO8wnGzvrKdcPDZMEBBZ3Pb1XvO7btNgQIgDxAeDhKlBGh%2FwLnYhgHl3Cki6YylGTdM9e9ThA6rBPcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDNu5A5gD4R9tbL4y6CrcA8gRji1bQFmeur6N%2FJxZw9vPFOTbjBBvKdyVTkF28WAvWszIMLzj9LkH%2Br%2BZoUqzt%2B5K%2FeyppYPQsdseCpSi88F1RDbd7gqYqtlfqQJgNsrO4zBTtcEqRtpzfEiTAG08SD9m8019Qq%2B%2Bx6kNuVSJQr6uv0oluxywEb2zEn3YUA%2Bgr%2BhTw%2Btnbw7NBP1zo%2Fz1bZiSqr4Nuwn%2B%2F7x6YIch4tmjlenRWrvgxykopsbD5d%2FLG06gi116Ujt%2BVP2IPO2BYpRDp3Y5Imyt0CruVjG1NkPtluXk6x4XD8xpxKb8zvCvvAvNhc8U33JeGDNAGpt0%2B4lqVTdWqkHtadgGcg0SJTVVmkwAAALrgPojlCBz6EG5tKJ81MsFt958RtVCr4R8VfG5%2BD9oM%2BYcWGnbBj3HyVaNMJ0qjvnSSV8hmwqqcpMl0Muia6ifuYtmbukfxieaGGkPMGZ8KKgFP7hi8LqDBjAx5u7%2FDYwdRzMQhWC9rwB%2BGBLogn5CYHeWRVEUTwTqM3uQG0eW8ggDV4uCQrcV0daqi5NJHFuKjs8A8uMsxR5V%2BNuEchyz5KS9xu62K9POWpAhS7pfZKruRXdAaOABRnp%2BEcAfCzuwNy3Py3UCNn4TmWeH71vPXdjNhAUaMKKcuNEGOqUBWssgZqNVb%2Biw3H6IzXo0V9Y4z8uabiAJk9xcDAylbe%2BK2VI08nldnHzJUcjzclvcl8XY8HLUWUbqlccqMA0CUZ1KT5w7OaGKPmNG3lRBkDQS4NYeQvMitk%2FNDO3xz3UcILbjBl3sXi%2Fi0%2Fi%2BjR3f%2FZ6KlWsXKnfoSipGqJDL%2FRqBBNO9s18OKB5jtfmLjw1m0PTxwh%2FvN8TtIByE7Jm%2BjJwLZ%2FD1&X-Amz-Signature=9e26be7caa671a87ab765cf5917ee7584b7d7f0d6af76e6cd64e3985d51d9962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4BZE2W5%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDO6B%2FwBR9nkwfuGvGkPzN52cIdXMutqUzcObznz3AqKQIgJd983gBDo2jNZVkbGeRt%2FcmL%2FimlBQp61HPj9pXwVUIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMR7L0NcTQ0KCwfZLyrcAxMNgadLFRDwJgEmyUt%2Bpt9jx5WeISWxKf5wVrZu93EMcAh1ramj8PMOs9BblVUbjZH13Y0HQ9DioB3YjLvxnH6udWmCCZ1VGu5aHMcNWbZXVT%2BNuvGP%2BMEP7u0fo%2B6%2FG%2FqRMG4ddtBUMFUo0mqfr3DMJfQokqLE92TgTg2s47Wzfogz%2FXk5VsCZnonBmGNutXKC7ORNg%2FuGUBSdWt6JaqYCDVENLkE8zSfRs01QcMgUDUv%2Bk3zJq1TUEjmGo0Ta6NnX0wcdPFtqyHdhxkCpk%2FWaVxrdcCbNxxl28G7koj8aUQl%2F735kmBMJ5CSWTiQjfWXResRrMj5TY0Sh9lzmwIv9zU5251dZoV9pBqG4wznTZ5SsMLOZ%2BpwbVVXil54lliUbVTe%2BcHuuTBPwmXysbJHu9ysxuZDnRc8NqrrgQKH1ru2YEaj3j3XhOHzCCrABWVE8SDyadcPA1DfA0MfjG%2BQei3IEKThNnKTdZmtKsR7mCg1j9v1BQaHOPMtCph3ACiXL5BQ0kglChdZmxxpj6cG4pDuEsb0YjBzkhBo0SiTZyjQ0q6EZcQEtBSSOR%2FMmXKKamAqF0HMBRd9TEf9nG8FzwTVJxbNiEgYPaz9FcVEtyVmJAYVxY3V5SUmGMOibuNEGOqUBx7nbEdYBjC3FqIjCMi1G%2FjSC2ofIuqlMRMWNSFjNKN9kSzq5ahD3EmphZhOrKabQvmnwszhZkabc5Pj2f77xSNgJkceMguVhT5AfLEDPFzSI7doHvzQrr6cZPyvxwRAWai5%2FH%2B6Y%2FeF0AYCR%2BWnpToon3pclWI3JjdG0YV6A%2B10lODs0cM%2FPUZZwWKqERhDNJmtzR9T%2FtSXXTR%2Bz1yR7LEyfbite&X-Amz-Signature=cec712f7a3badf0aba79b5d696877637f4917b155640f74dc7de66725a3b3fd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLPSCS4T%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIDcHzVqlyy2%2Bo3mBFddtmNvSojxyLghoo%2BX0BCn6%2FFpqAiBTP%2F9OH1pAban8HNZEijV%2Ba3rcDZzvWFAoYZ0kJafbMyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMy%2FAdDWhMhUMiOPjcKtwDFUFe4V%2Btz9ekcZsFJcCnHHf8kosJlSVzwRqpedkDugAi22coSfH2LTGwdqzt1zj0r7N0PdeNis7pkaxbD7JnLXLKIPYjkovY0sG3Y5U8PX4oc9WnfAXeJ1WtUSs%2FgyaS9LPB6iiZhnn12AGzi%2B7wR3JHctRWO%2F%2FhJH2cibT2MWuiX5tgEbk%2BU1C4KdBjP0EBTfiI%2B0oUAp%2FyN96Op9OaPP7982F6XlkfwRqdr6X4lARno1q4fBAXEhnuGZwXEFlB66%2BhCjwqPYWNgIH1p4XqwLo5igcR0Syelge%2F6YWEnH%2BjfrbxqqT8L%2Bh9XAKVagkbBf%2FiGR4CcTnc6MwCqDakZaNZDix1nHt9eNG7oJS1RoMbxvY1M6LagNhjRtp3039XqOXB%2FIlJKYARicMVBr4ozrOZA%2BDL0HF24h6yETP1p%2BqiiVToKblFeNUmgAXA7zhJgpFxr2cDmNV9M5IcPEhnNz0t9J20Xp%2FC4cCXhDV1k9XKD890HgQ8Znlm%2FImzOiLXwpBXA1pRY%2Bh8mSUI0KRg68OOS5J1in4qvtOH%2BcV2NJtGTBN4n6SVkcbIga6%2FxoFJ4d0s1xSnrKwVhjDuJnNx81aoQc2qvg4J4ao4XfzvwqAp9sFGAv08vgNXBmgw6py40QY6pgEK8MmK1uRgk3SE0CZzuXbTgLpII7yVksPU5nXkva45E9a9zS2G5Rv0K68jxK2SY4wCoOjdyB0r4YE9FaXNZZW41r0hdCq5EPZA0zBhaSkHO%2F5O2BVT1%2FYtps%2F6NPTYuPny4jhCdr2FTZji5mQCXx29eZ19KXtkOqEQaGIPqIZxyz2gPCStZpuMdLcneWeoUz5yQEdUS9RJBi9xM7cpNjbbQiNaG63n&X-Amz-Signature=1b8d798e879a06c03a0381ef79d175f6ea2af406f606ecf56491e65fd0e142e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4BZE2W5%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDO6B%2FwBR9nkwfuGvGkPzN52cIdXMutqUzcObznz3AqKQIgJd983gBDo2jNZVkbGeRt%2FcmL%2FimlBQp61HPj9pXwVUIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMR7L0NcTQ0KCwfZLyrcAxMNgadLFRDwJgEmyUt%2Bpt9jx5WeISWxKf5wVrZu93EMcAh1ramj8PMOs9BblVUbjZH13Y0HQ9DioB3YjLvxnH6udWmCCZ1VGu5aHMcNWbZXVT%2BNuvGP%2BMEP7u0fo%2B6%2FG%2FqRMG4ddtBUMFUo0mqfr3DMJfQokqLE92TgTg2s47Wzfogz%2FXk5VsCZnonBmGNutXKC7ORNg%2FuGUBSdWt6JaqYCDVENLkE8zSfRs01QcMgUDUv%2Bk3zJq1TUEjmGo0Ta6NnX0wcdPFtqyHdhxkCpk%2FWaVxrdcCbNxxl28G7koj8aUQl%2F735kmBMJ5CSWTiQjfWXResRrMj5TY0Sh9lzmwIv9zU5251dZoV9pBqG4wznTZ5SsMLOZ%2BpwbVVXil54lliUbVTe%2BcHuuTBPwmXysbJHu9ysxuZDnRc8NqrrgQKH1ru2YEaj3j3XhOHzCCrABWVE8SDyadcPA1DfA0MfjG%2BQei3IEKThNnKTdZmtKsR7mCg1j9v1BQaHOPMtCph3ACiXL5BQ0kglChdZmxxpj6cG4pDuEsb0YjBzkhBo0SiTZyjQ0q6EZcQEtBSSOR%2FMmXKKamAqF0HMBRd9TEf9nG8FzwTVJxbNiEgYPaz9FcVEtyVmJAYVxY3V5SUmGMOibuNEGOqUBx7nbEdYBjC3FqIjCMi1G%2FjSC2ofIuqlMRMWNSFjNKN9kSzq5ahD3EmphZhOrKabQvmnwszhZkabc5Pj2f77xSNgJkceMguVhT5AfLEDPFzSI7doHvzQrr6cZPyvxwRAWai5%2FH%2B6Y%2FeF0AYCR%2BWnpToon3pclWI3JjdG0YV6A%2B10lODs0cM%2FPUZZwWKqERhDNJmtzR9T%2FtSXXTR%2Bz1yR7LEyfbite&X-Amz-Signature=9cdf26c172e6013919e6b6c411deb4276d9dc4951e4c139bc8d102e1db54ae31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674NMFV6R%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFX%2FQzK23Jtm2zdljOD1R9KqoE32tIl1EGxfGCFB8gvIAiEA8hMpSe6YGVub3MKlq87q79kCwoLcJp0xyz4hbtv5hpgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCPdoL5Gywp8ZUHD8SrcA9cGqDgY1XvbJDyu8iMX7lc7fLDg5VIsSZQLYmIDA48IBDYeP5GRu35TjMVY0nAFnErqaqdoAYK4K8VPdzFbld5iFWb3NSH1Xth7o%2BEldr3PK0VIOWl%2Fx2LysS0ZS6%2Fnse8HFbthxSRamXMHrCRDGrOs2om9tafNUxNIVyoozuJLE0ZU8FCli4QhBUKjDAubfRMHhpdy8Il5v43DaZdV3HqoCpoqy%2FeNRiDqF3X%2Brv%2BuIeNljKZq3GNfn%2FBOIr94Is9TXOQM5Hdv2olyRNoZ8JJntLvIbQLPvsGF3vAb%2FaEEpu7ZlmaG5AfxEh9cmujKC7Da4b2cjvQ1xiq4C64rPtbVFJo1PZA%2BF93yoreXG6%2Fy7HnecmtOHTZTLxeYcjZBUQFtyHlZHle2OpY%2Bdd%2FIf%2B8Wwkytun1kZ%2BvG%2FT2uGsV2zDy%2B7qNLDJ2rhQtW3nc0adGqvelXINavcpuz0MRdWfXobByZp24MlQZJFG1lGWNJR0v5Iw2qQx92Prj3CXI1mlL1%2BFOSMVb1k2rVUaq0CHs7Jp%2Fn2NKr5MsfH3n0RDMoYOxVwcoSCd6Wpr9cW%2Fxjert8PAeW7B9p%2BGeA0g8ECNasqGGhFWoMQQUBhWcyYcuIDOO0%2FdBA792yMC9HMJGduNEGOqUB7t9Fmfsj5oe0RqXk50j5uagacW0vA3qQLMqMwhGTicbhIDQ9fKpdtWReEDdf05LToZsf%2BwZgnm5c2K%2BFdhxjQlnW5JCKn0ZlkSQ43sv%2BKfhKoENp2Gas4jGUxTXW2i4X%2BXEjFXaDTKZQpajnqzk9%2F2uGUI8DC02N8Qzs3T%2F93Hfxf969euc0CqYHW%2BD59lBxNDAldr9gdfCjb8psd4%2BpH8to%2B9IF&X-Amz-Signature=c4ad7a4446573fd35b7dc0e336768769167a757ce908aea41909f98bb856466d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4BZE2W5%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDO6B%2FwBR9nkwfuGvGkPzN52cIdXMutqUzcObznz3AqKQIgJd983gBDo2jNZVkbGeRt%2FcmL%2FimlBQp61HPj9pXwVUIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMR7L0NcTQ0KCwfZLyrcAxMNgadLFRDwJgEmyUt%2Bpt9jx5WeISWxKf5wVrZu93EMcAh1ramj8PMOs9BblVUbjZH13Y0HQ9DioB3YjLvxnH6udWmCCZ1VGu5aHMcNWbZXVT%2BNuvGP%2BMEP7u0fo%2B6%2FG%2FqRMG4ddtBUMFUo0mqfr3DMJfQokqLE92TgTg2s47Wzfogz%2FXk5VsCZnonBmGNutXKC7ORNg%2FuGUBSdWt6JaqYCDVENLkE8zSfRs01QcMgUDUv%2Bk3zJq1TUEjmGo0Ta6NnX0wcdPFtqyHdhxkCpk%2FWaVxrdcCbNxxl28G7koj8aUQl%2F735kmBMJ5CSWTiQjfWXResRrMj5TY0Sh9lzmwIv9zU5251dZoV9pBqG4wznTZ5SsMLOZ%2BpwbVVXil54lliUbVTe%2BcHuuTBPwmXysbJHu9ysxuZDnRc8NqrrgQKH1ru2YEaj3j3XhOHzCCrABWVE8SDyadcPA1DfA0MfjG%2BQei3IEKThNnKTdZmtKsR7mCg1j9v1BQaHOPMtCph3ACiXL5BQ0kglChdZmxxpj6cG4pDuEsb0YjBzkhBo0SiTZyjQ0q6EZcQEtBSSOR%2FMmXKKamAqF0HMBRd9TEf9nG8FzwTVJxbNiEgYPaz9FcVEtyVmJAYVxY3V5SUmGMOibuNEGOqUBx7nbEdYBjC3FqIjCMi1G%2FjSC2ofIuqlMRMWNSFjNKN9kSzq5ahD3EmphZhOrKabQvmnwszhZkabc5Pj2f77xSNgJkceMguVhT5AfLEDPFzSI7doHvzQrr6cZPyvxwRAWai5%2FH%2B6Y%2FeF0AYCR%2BWnpToon3pclWI3JjdG0YV6A%2B10lODs0cM%2FPUZZwWKqERhDNJmtzR9T%2FtSXXTR%2Bz1yR7LEyfbite&X-Amz-Signature=96b81b468296d1b2bff32991a8ccccc212eb3eb030de43062e2fb9ecd44f3bf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSFNR2EB%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDhwpoi4isc34QoJKjhN7x%2BMsogFNlEcSmhNarabQ7IiwIhAM0kkE70AmgMT6yQCPrAf0cXyDLlsD8DQIszD8YOx4MNKv8DCDsQABoMNjM3NDIzMTgzODA1Igy80PIbekeOOgDirKIq3ANq9EAJUNVrdjx%2FswHf5m100zW1C2BauswOkUStRhmNzyzuRQiEEaurGkmjNIFtWeYdvsVMLe3YzqQMT5Bp0xl1PwlC%2F1ojIAQSmptEUi90hbnZYo72Lrp0ZioI6OyrnEXxlN9NPiCdoimhYlNuQKNwjAN300nlKYH3gHtYwcMYrmB3XsvuPPgGQ2k2q%2BqfPUUYGb1jZNVTzZhWYmAtMsPqsqx1K0%2BCDS5TzguRRMkab6EFZk2acLgwSIMsMR4N3nJKOkcTIqyXLITY5S24xOh2szIxrzIKX0CKzyaysfjfjSTcwMtP8LUDcsPuUwSW4A87vK83gSadqLGICb83Eejo9h1qCEG%2FMSKEEFVURdLM3CbH8qKJTOYe%2FMSmrpcNHRfiNY3tWDlGs6IVuXmJxvZp2wo8BEl67YlZzIRB%2Fd%2FxADvNCscR0JnMd4EupiEBF6oedCywe6WRfyfwzWPYlVeeforNA7ehcR4XMx%2FJW5r09RZl0VvmJRat%2BhHiLv9%2BvLMHBk9N7GKvezVK9nQ0Wa5MHQCDpRf5dJYL2lrbNrdltR6geMMOSwMmhHhhrGA5sKGOK2ksHTBu0V2MINpn1Pao3OT55rSzbG0%2FUrwOtTLwboWjI4UPbyzTHxfyxDDGm7jRBjqkAWFAVM0FAcmyobjUj7Qjwqq2zWskccTNqLcjxg1Sf3tNqnCjBrcPBB4iiD0Rf2rwgV0ZLpChQB4xtetXl2vYQ%2FJG69VXyhBMub0HLzZKE7%2F%2FcuVqKTOFKtA59ucP9wttU%2BFSokXS0CRo4l2vR2RMLD4DELOf69ev4S01%2FR9BBBFvseXeQIttdYtDnZKUyxIGymFdt%2FepYJAXgMb6oGYVazqiHULW&X-Amz-Signature=a9ea1d7afec635c37d70e7f3be7dc8414b393e0ca287ae14e1a1698ee6a9e396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4BZE2W5%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDO6B%2FwBR9nkwfuGvGkPzN52cIdXMutqUzcObznz3AqKQIgJd983gBDo2jNZVkbGeRt%2FcmL%2FimlBQp61HPj9pXwVUIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMR7L0NcTQ0KCwfZLyrcAxMNgadLFRDwJgEmyUt%2Bpt9jx5WeISWxKf5wVrZu93EMcAh1ramj8PMOs9BblVUbjZH13Y0HQ9DioB3YjLvxnH6udWmCCZ1VGu5aHMcNWbZXVT%2BNuvGP%2BMEP7u0fo%2B6%2FG%2FqRMG4ddtBUMFUo0mqfr3DMJfQokqLE92TgTg2s47Wzfogz%2FXk5VsCZnonBmGNutXKC7ORNg%2FuGUBSdWt6JaqYCDVENLkE8zSfRs01QcMgUDUv%2Bk3zJq1TUEjmGo0Ta6NnX0wcdPFtqyHdhxkCpk%2FWaVxrdcCbNxxl28G7koj8aUQl%2F735kmBMJ5CSWTiQjfWXResRrMj5TY0Sh9lzmwIv9zU5251dZoV9pBqG4wznTZ5SsMLOZ%2BpwbVVXil54lliUbVTe%2BcHuuTBPwmXysbJHu9ysxuZDnRc8NqrrgQKH1ru2YEaj3j3XhOHzCCrABWVE8SDyadcPA1DfA0MfjG%2BQei3IEKThNnKTdZmtKsR7mCg1j9v1BQaHOPMtCph3ACiXL5BQ0kglChdZmxxpj6cG4pDuEsb0YjBzkhBo0SiTZyjQ0q6EZcQEtBSSOR%2FMmXKKamAqF0HMBRd9TEf9nG8FzwTVJxbNiEgYPaz9FcVEtyVmJAYVxY3V5SUmGMOibuNEGOqUBx7nbEdYBjC3FqIjCMi1G%2FjSC2ofIuqlMRMWNSFjNKN9kSzq5ahD3EmphZhOrKabQvmnwszhZkabc5Pj2f77xSNgJkceMguVhT5AfLEDPFzSI7doHvzQrr6cZPyvxwRAWai5%2FH%2B6Y%2FeF0AYCR%2BWnpToon3pclWI3JjdG0YV6A%2B10lODs0cM%2FPUZZwWKqERhDNJmtzR9T%2FtSXXTR%2Bz1yR7LEyfbite&X-Amz-Signature=dd707e31489af63794ab48657b1b1fc13adc69a67fdb9ed02f58b4e8fc0a945f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWBDYXNT%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDnAphxMBZLswdaJzoqZLMm0POIiayXfDrmzxI9HJueuAiEAr9cet3FdQu7NJgKIjnx1clfkfaQfMsRvZtfTgMkETWsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDC5iEY8mks5bGsamJSrcA7EducDJinCS0RM08jPR3j7ZLMHA%2BghPbWnUVkMus3%2Bvuo4uXNWLiKSoVulH%2BgZ%2Fcydi6eO%2BnWgYv25szDZKeR54PuLAsQec9nCJvi0GCOtf1%2BnYrDWN03ZUuTyZCyOwqV3q6oCjV0PN%2FLbzgEfUoKnfAgjf%2FKCW3MlDZoXtjKHZDCLemy%2Blh0%2BWY%2B%2Favpjhwt%2BitrZ%2BjMIHGGbQpUK8cqPQZBusRk57hL8VZHtxQoxNGvaIfHmk3OIAbXWxpDAHsMXeMckCIgH6XSiU9yoyEai105Cu4xchQqjWrCWIlvuoD6ltZxzuldgiCJwtqHKPmVd%2FCYsc%2FG20OLeWsZgy1Wc8LY%2BGUUMewH0ZO7TIxyGbOokI0fTJCmcG6wsIfSB6FVHxJyw4B%2Bfg8yCG%2BQJyLL9A9noAv2UFlqUFYPWqaEndkOr2YYXlDLybVnlQ0ic3NDHm9gNhQFqrfc30ufmu5F5ad3XCC22psLtPu1HXdhd%2BMcEER5qJPjwUjZ%2FLcvxlXywTmoCAEClmqOig%2B%2BirLJOVceKuLJPHM83kMl1zW2gugyEf9Y%2BOnabgTFeBdmH7dHeeJ4nf8eEO1X%2B4Y9gpDtblLqtHrXV%2B%2FFADkO4FBsAmwA%2Fxmxy8gPrPLZNzMNecuNEGOqUBzp1yuuNDjTb%2F5zzEXldsJ%2Ff%2B1mxmXfPOJBLM0YS6PNSPSvksP3BLh%2FSzMCh%2BbtVrheROTHv1MZdtmvdxMEIHjkn3ceku9VmzyJRO8n3XRstY%2F%2FcRQT7Fc%2FsZeU6f41rTPfswiPgYeZtv6CHWhwApafgheU%2BfUYW6dJWP53VsYQVXVxzji5t2MsPfxpc2apPqRBXXtQcDArUu6SipGHQv2Kvyr5Re&X-Amz-Signature=f2ea12aa10e6ae42fdcac5f69854f3603bb97c1f8d30b19f7236ff4933d17ce7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LEEF3Z6%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCeEeGEIf5I38flwupUo7QSX3IT7r7jEejPCPaRvp0ZYQIhAIeSI8rFoBH%2F5vGAdiHsyI0wf70yobhM6rg8ynaM0tbVKv8DCDsQABoMNjM3NDIzMTgzODA1IgyUfgO5m6ktwGLHjmYq3AO4Rn7o6O1GB1aF4dZaj5Kkh0Ilh8ZMYso7yBTtY5XNBUVHHiRTrhwY0GVXLksVGhJDpljGFTMuHvtyRqsDXtUWEPDenqUmAaLE1vZBhw2AXknfvM%2FGMMQEcyLNOCXNOmusnOBoORhlFtOCdpb5ec0k5NqL7oDsAYimF4aUxmp2I%2FOqDpfjvojIb%2BODcfjbN1xVrhDa1JC86ipFUR7grf9ivh7BsGCQ4BJAeUHVcyNshmUzT9xSrmhKE5w%2BHXTQfLlcClWUkLQPvInLYmy5TuJii%2BTOJW2v62KkuHSXdnsEEHEFR5M6OP3SBmm%2BNnVIVSeGHpciUE1aWM2MIcsxlsi%2FGgLonCBKPTUp%2Fg5kqhhfbPodA%2F%2F%2FsumogL7Jur7jo%2B%2B5Og3RcRjzseuHxtylBS2uNsakoSMetDxSuwyJ6EzkEqkbKPMwc69m%2BbYT855ENEAfGDUwWx%2B%2Be%2FWh2mDoLZsaJQbhibT0n%2BM3aQDxfG%2BmFJyZLizDV%2BUg5iUb05szh%2Bkm85Y2M5qqv04Ew6z%2B6%2Bl77xdPMhfMLVch8JeINLWtijpqxMp3ZLRj%2Ffpkz7mJDHbHqemTlGoZC1xv96Fa78lfcaWMC2jVY3ZPpbxPGgJghDgt4FA%2FdroqJ9172jCUnbjRBjqkAUEf%2FtmUQLRiNm7Ta4jqPDgh90%2FVoebYUHPqa8MQyGgk5v3TbL89jNdCbLbq2FanIpbYD0gzF0beYu0VXm5i9GFT4yevDKk3WgX1STPhgRyMBU5acN%2B%2BgaqNC0U9epBQBNZarjgUvDEEtEGMzGrNbRr8prC3IaUjo2Pa9Z8by6V3nso3ERGCCLUNthK5WErbVBWnh2ld3IoyYKUjVd02Z5Bf6UTM&X-Amz-Signature=f0983a94066ea0dfc2554e2c528b2a25be5f2979de1bffa4325b1b48b664c8da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UNNNDZQ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIAuoqxhVEIDcyF6UYd262f4VHOAuviHEVBiaMoA1x0SIAiBdqvp79t3Q6Xn8i2MjQVNU5CHb0q1v72bYZ1TXCRcDtir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMMxhU%2FVBd7Btje1T6KtwDwrOudrPqAcdrIbkpka1EKdliTpjHFMqj1JTa9qcJK46cVAI3XPOrRG06ji3aqhIuzgQsduMSa7chWqTv%2BJMNHBIF56NO1fv18JOs3VXEuq%2FDtuHwhG%2Bw1%2FNDWREBdP0URnnZXHblvq2eZn%2B0G7QTQP0%2FR7qXL6Zk5k5Zaokk9wS7R5k0SwT%2B1PKOuu%2BN%2FVL1EVp6N%2Fs4xnw50XZ152ku7L6WMRi9z4fF3HFxGc7CcI9cwey3Jr1B2SHh4zZVtxs8XyH0y0rAvJr6Yq1h2j1mlvbz%2FvsODk51BKKVAHYHdKuCv%2F83aVTVUMbY89gUPORPvelP4eLbmE5HUihjdOSUDdx0OGM1FPQjaAqevKvO%2F45UJMNpFTEzopf6b7scrKgdE86yiOXBC3DYVEqPet56ZufwZ8dIZxvdIyQweDFtGS7%2BTRKbmQvUmE0ONeIGypJ%2FyvewikoNOHPs5KgvDjwFztthiwgMZatuzOEyvjbzxdAv5hsNCECVbbv0Z2yk0m8WGTFONS93PPO1BE1ctgETdsrZ2b5KVjO3sTy6SeBOhLDHxS2j2cVm1Ne97gBB9wIZevvhDpMp7sNKLgM02PnJFdX%2FzUlud5ffnNPElAx4mgi0PoxvIqodiisrZ4swx5y40QY6pgGh6Br2Z097ekd%2FLM8HkeahE2%2Fnsulg%2Btehp5VrUU9NIouJRgDaj88ZRGX9hWjF%2BNfhtaFaQcb0PXPLiSf1MIoHHy6ANzETxnqMsUBspHIjHbQQd21RV1Y2V57sMa3xrV90Et9ei1ZTS9i08SmwPhLGK17%2BerD%2B9qofAwDAZ9bp%2BtCGdFbO6H%2Bw87Zuc5fDE3tfNNu%2FM8JvCgUqlx97Eqn86iAmC7et&X-Amz-Signature=369ed8dc13aea22a373598743aa8f0b07968c61f7444a6f0cd3fa545b7d17c8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4BZE2W5%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDO6B%2FwBR9nkwfuGvGkPzN52cIdXMutqUzcObznz3AqKQIgJd983gBDo2jNZVkbGeRt%2FcmL%2FimlBQp61HPj9pXwVUIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMR7L0NcTQ0KCwfZLyrcAxMNgadLFRDwJgEmyUt%2Bpt9jx5WeISWxKf5wVrZu93EMcAh1ramj8PMOs9BblVUbjZH13Y0HQ9DioB3YjLvxnH6udWmCCZ1VGu5aHMcNWbZXVT%2BNuvGP%2BMEP7u0fo%2B6%2FG%2FqRMG4ddtBUMFUo0mqfr3DMJfQokqLE92TgTg2s47Wzfogz%2FXk5VsCZnonBmGNutXKC7ORNg%2FuGUBSdWt6JaqYCDVENLkE8zSfRs01QcMgUDUv%2Bk3zJq1TUEjmGo0Ta6NnX0wcdPFtqyHdhxkCpk%2FWaVxrdcCbNxxl28G7koj8aUQl%2F735kmBMJ5CSWTiQjfWXResRrMj5TY0Sh9lzmwIv9zU5251dZoV9pBqG4wznTZ5SsMLOZ%2BpwbVVXil54lliUbVTe%2BcHuuTBPwmXysbJHu9ysxuZDnRc8NqrrgQKH1ru2YEaj3j3XhOHzCCrABWVE8SDyadcPA1DfA0MfjG%2BQei3IEKThNnKTdZmtKsR7mCg1j9v1BQaHOPMtCph3ACiXL5BQ0kglChdZmxxpj6cG4pDuEsb0YjBzkhBo0SiTZyjQ0q6EZcQEtBSSOR%2FMmXKKamAqF0HMBRd9TEf9nG8FzwTVJxbNiEgYPaz9FcVEtyVmJAYVxY3V5SUmGMOibuNEGOqUBx7nbEdYBjC3FqIjCMi1G%2FjSC2ofIuqlMRMWNSFjNKN9kSzq5ahD3EmphZhOrKabQvmnwszhZkabc5Pj2f77xSNgJkceMguVhT5AfLEDPFzSI7doHvzQrr6cZPyvxwRAWai5%2FH%2B6Y%2FeF0AYCR%2BWnpToon3pclWI3JjdG0YV6A%2B10lODs0cM%2FPUZZwWKqERhDNJmtzR9T%2FtSXXTR%2Bz1yR7LEyfbite&X-Amz-Signature=f4402b025532b550339e0bc633036f280912f81c5ba8baac4128c6fc8dd2d0e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4BZE2W5%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDO6B%2FwBR9nkwfuGvGkPzN52cIdXMutqUzcObznz3AqKQIgJd983gBDo2jNZVkbGeRt%2FcmL%2FimlBQp61HPj9pXwVUIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMR7L0NcTQ0KCwfZLyrcAxMNgadLFRDwJgEmyUt%2Bpt9jx5WeISWxKf5wVrZu93EMcAh1ramj8PMOs9BblVUbjZH13Y0HQ9DioB3YjLvxnH6udWmCCZ1VGu5aHMcNWbZXVT%2BNuvGP%2BMEP7u0fo%2B6%2FG%2FqRMG4ddtBUMFUo0mqfr3DMJfQokqLE92TgTg2s47Wzfogz%2FXk5VsCZnonBmGNutXKC7ORNg%2FuGUBSdWt6JaqYCDVENLkE8zSfRs01QcMgUDUv%2Bk3zJq1TUEjmGo0Ta6NnX0wcdPFtqyHdhxkCpk%2FWaVxrdcCbNxxl28G7koj8aUQl%2F735kmBMJ5CSWTiQjfWXResRrMj5TY0Sh9lzmwIv9zU5251dZoV9pBqG4wznTZ5SsMLOZ%2BpwbVVXil54lliUbVTe%2BcHuuTBPwmXysbJHu9ysxuZDnRc8NqrrgQKH1ru2YEaj3j3XhOHzCCrABWVE8SDyadcPA1DfA0MfjG%2BQei3IEKThNnKTdZmtKsR7mCg1j9v1BQaHOPMtCph3ACiXL5BQ0kglChdZmxxpj6cG4pDuEsb0YjBzkhBo0SiTZyjQ0q6EZcQEtBSSOR%2FMmXKKamAqF0HMBRd9TEf9nG8FzwTVJxbNiEgYPaz9FcVEtyVmJAYVxY3V5SUmGMOibuNEGOqUBx7nbEdYBjC3FqIjCMi1G%2FjSC2ofIuqlMRMWNSFjNKN9kSzq5ahD3EmphZhOrKabQvmnwszhZkabc5Pj2f77xSNgJkceMguVhT5AfLEDPFzSI7doHvzQrr6cZPyvxwRAWai5%2FH%2B6Y%2FeF0AYCR%2BWnpToon3pclWI3JjdG0YV6A%2B10lODs0cM%2FPUZZwWKqERhDNJmtzR9T%2FtSXXTR%2Bz1yR7LEyfbite&X-Amz-Signature=81b2813312d70b9d796708b2c785b6a68ac54587c133728f2e3d868bde9214ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLQFNOAZ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD66OC%2BgnteZ7bbDXMYPOLr4x%2BtCx%2Biu2QMixE2HoHWVQIgf7Jt8pLG5h%2FeTT0Mfjojf4zs0URkr3DnwEFdXYZFksUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDATpxx3vTGPHz6oPtircA%2Fz8TvOOSod1%2Fr%2BRV6qShZjTHvQwM1rjJiNVcp0XpKxtYq6cKwn3ryj9qAWDGncvQcXSyPcAgVPyPnFuBhhWJVCSQ%2FJl9LFDNqRGy23AwvNz8cI4MjM%2FNZj70%2BblDl62GCjk%2FJWTo0PVrkjPyDn3yx2qrqbsAXAvDlNczaQI%2FBhqexCFpJVX90K6I6sqJ7yDIUqcN%2FnJ5gcr3ciQo5uSICboZddL52uA%2Ff%2FScCJ25vfu0IlUeFTwyZYSJ1CNK0wLp7KrMZq7dGSPWzinby1Hs%2BVerWeGFRGgXp2WmXbNvQr8hQlvXeBfdL3%2Bhbb4b25OOQozbLtYAexljEdzqx1JNN0kEkJDlbUo3XCcZ%2F5J5oxSmKVE1EbDd2IpFN2eZK8ot%2B5A9PNKsJM2%2BDfptcRTwcUUbWx3Z4ndd%2Ff65oIQYy1S5C%2BuvpEX98JPoO4ivpbpaC2kPiVMshIWjW9LCURlXsQtZX7rveCTcfZLa4NxcMSCTWnWS9%2FjAkPcfFnZQXo0KliCQM9qrWN0e3pXlr5IlYVT9dDqbD0K5%2FwaqbFEvD0H2FhUlfqHrsqEeVSVSoPC6wMGKM%2F2%2BWeVsM6d4vB%2B2Ar4oCNt2kByv3AZ1CacLUuSx7xCEJJyfF%2BjekSqMMucuNEGOqUB%2Fdg5Tv7frp8ITmn4cvrayhRantvzT5wjkg2YeJ8U6Pambx2lPV5%2Bp9LeLv1rTdxzOZU5f4qaxsdnRTI5fm9Pkgf2Cx%2Bw9Sc9ypFLe%2Bol1qhAiF9cueSH%2F1Zo5XTSBCx2OLTPNixrYvKkEA42aUqHjgzXmPM7OPh97CJ4kWSOfmUGD%2BW1ab8ZO0kiSPkqXHXXNkvYA3RACnokx1DCPZbWSLpTA2TK&X-Amz-Signature=f2c877502bea2e1b7b7ecfbb0f391fc6c242d09632c97248a86565cc69a47d48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLQFNOAZ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD66OC%2BgnteZ7bbDXMYPOLr4x%2BtCx%2Biu2QMixE2HoHWVQIgf7Jt8pLG5h%2FeTT0Mfjojf4zs0URkr3DnwEFdXYZFksUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDATpxx3vTGPHz6oPtircA%2Fz8TvOOSod1%2Fr%2BRV6qShZjTHvQwM1rjJiNVcp0XpKxtYq6cKwn3ryj9qAWDGncvQcXSyPcAgVPyPnFuBhhWJVCSQ%2FJl9LFDNqRGy23AwvNz8cI4MjM%2FNZj70%2BblDl62GCjk%2FJWTo0PVrkjPyDn3yx2qrqbsAXAvDlNczaQI%2FBhqexCFpJVX90K6I6sqJ7yDIUqcN%2FnJ5gcr3ciQo5uSICboZddL52uA%2Ff%2FScCJ25vfu0IlUeFTwyZYSJ1CNK0wLp7KrMZq7dGSPWzinby1Hs%2BVerWeGFRGgXp2WmXbNvQr8hQlvXeBfdL3%2Bhbb4b25OOQozbLtYAexljEdzqx1JNN0kEkJDlbUo3XCcZ%2F5J5oxSmKVE1EbDd2IpFN2eZK8ot%2B5A9PNKsJM2%2BDfptcRTwcUUbWx3Z4ndd%2Ff65oIQYy1S5C%2BuvpEX98JPoO4ivpbpaC2kPiVMshIWjW9LCURlXsQtZX7rveCTcfZLa4NxcMSCTWnWS9%2FjAkPcfFnZQXo0KliCQM9qrWN0e3pXlr5IlYVT9dDqbD0K5%2FwaqbFEvD0H2FhUlfqHrsqEeVSVSoPC6wMGKM%2F2%2BWeVsM6d4vB%2B2Ar4oCNt2kByv3AZ1CacLUuSx7xCEJJyfF%2BjekSqMMucuNEGOqUB%2Fdg5Tv7frp8ITmn4cvrayhRantvzT5wjkg2YeJ8U6Pambx2lPV5%2Bp9LeLv1rTdxzOZU5f4qaxsdnRTI5fm9Pkgf2Cx%2Bw9Sc9ypFLe%2Bol1qhAiF9cueSH%2F1Zo5XTSBCx2OLTPNixrYvKkEA42aUqHjgzXmPM7OPh97CJ4kWSOfmUGD%2BW1ab8ZO0kiSPkqXHXXNkvYA3RACnokx1DCPZbWSLpTA2TK&X-Amz-Signature=37d9d065d526acbbccb78bb65da46df07f6562a0f16122214a5738378c9077cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLQFNOAZ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD66OC%2BgnteZ7bbDXMYPOLr4x%2BtCx%2Biu2QMixE2HoHWVQIgf7Jt8pLG5h%2FeTT0Mfjojf4zs0URkr3DnwEFdXYZFksUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDATpxx3vTGPHz6oPtircA%2Fz8TvOOSod1%2Fr%2BRV6qShZjTHvQwM1rjJiNVcp0XpKxtYq6cKwn3ryj9qAWDGncvQcXSyPcAgVPyPnFuBhhWJVCSQ%2FJl9LFDNqRGy23AwvNz8cI4MjM%2FNZj70%2BblDl62GCjk%2FJWTo0PVrkjPyDn3yx2qrqbsAXAvDlNczaQI%2FBhqexCFpJVX90K6I6sqJ7yDIUqcN%2FnJ5gcr3ciQo5uSICboZddL52uA%2Ff%2FScCJ25vfu0IlUeFTwyZYSJ1CNK0wLp7KrMZq7dGSPWzinby1Hs%2BVerWeGFRGgXp2WmXbNvQr8hQlvXeBfdL3%2Bhbb4b25OOQozbLtYAexljEdzqx1JNN0kEkJDlbUo3XCcZ%2F5J5oxSmKVE1EbDd2IpFN2eZK8ot%2B5A9PNKsJM2%2BDfptcRTwcUUbWx3Z4ndd%2Ff65oIQYy1S5C%2BuvpEX98JPoO4ivpbpaC2kPiVMshIWjW9LCURlXsQtZX7rveCTcfZLa4NxcMSCTWnWS9%2FjAkPcfFnZQXo0KliCQM9qrWN0e3pXlr5IlYVT9dDqbD0K5%2FwaqbFEvD0H2FhUlfqHrsqEeVSVSoPC6wMGKM%2F2%2BWeVsM6d4vB%2B2Ar4oCNt2kByv3AZ1CacLUuSx7xCEJJyfF%2BjekSqMMucuNEGOqUB%2Fdg5Tv7frp8ITmn4cvrayhRantvzT5wjkg2YeJ8U6Pambx2lPV5%2Bp9LeLv1rTdxzOZU5f4qaxsdnRTI5fm9Pkgf2Cx%2Bw9Sc9ypFLe%2Bol1qhAiF9cueSH%2F1Zo5XTSBCx2OLTPNixrYvKkEA42aUqHjgzXmPM7OPh97CJ4kWSOfmUGD%2BW1ab8ZO0kiSPkqXHXXNkvYA3RACnokx1DCPZbWSLpTA2TK&X-Amz-Signature=7bc7929105c28bdec60115a998661ced3906c39022ec97b1d4474712e64e1052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLQFNOAZ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD66OC%2BgnteZ7bbDXMYPOLr4x%2BtCx%2Biu2QMixE2HoHWVQIgf7Jt8pLG5h%2FeTT0Mfjojf4zs0URkr3DnwEFdXYZFksUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDATpxx3vTGPHz6oPtircA%2Fz8TvOOSod1%2Fr%2BRV6qShZjTHvQwM1rjJiNVcp0XpKxtYq6cKwn3ryj9qAWDGncvQcXSyPcAgVPyPnFuBhhWJVCSQ%2FJl9LFDNqRGy23AwvNz8cI4MjM%2FNZj70%2BblDl62GCjk%2FJWTo0PVrkjPyDn3yx2qrqbsAXAvDlNczaQI%2FBhqexCFpJVX90K6I6sqJ7yDIUqcN%2FnJ5gcr3ciQo5uSICboZddL52uA%2Ff%2FScCJ25vfu0IlUeFTwyZYSJ1CNK0wLp7KrMZq7dGSPWzinby1Hs%2BVerWeGFRGgXp2WmXbNvQr8hQlvXeBfdL3%2Bhbb4b25OOQozbLtYAexljEdzqx1JNN0kEkJDlbUo3XCcZ%2F5J5oxSmKVE1EbDd2IpFN2eZK8ot%2B5A9PNKsJM2%2BDfptcRTwcUUbWx3Z4ndd%2Ff65oIQYy1S5C%2BuvpEX98JPoO4ivpbpaC2kPiVMshIWjW9LCURlXsQtZX7rveCTcfZLa4NxcMSCTWnWS9%2FjAkPcfFnZQXo0KliCQM9qrWN0e3pXlr5IlYVT9dDqbD0K5%2FwaqbFEvD0H2FhUlfqHrsqEeVSVSoPC6wMGKM%2F2%2BWeVsM6d4vB%2B2Ar4oCNt2kByv3AZ1CacLUuSx7xCEJJyfF%2BjekSqMMucuNEGOqUB%2Fdg5Tv7frp8ITmn4cvrayhRantvzT5wjkg2YeJ8U6Pambx2lPV5%2Bp9LeLv1rTdxzOZU5f4qaxsdnRTI5fm9Pkgf2Cx%2Bw9Sc9ypFLe%2Bol1qhAiF9cueSH%2F1Zo5XTSBCx2OLTPNixrYvKkEA42aUqHjgzXmPM7OPh97CJ4kWSOfmUGD%2BW1ab8ZO0kiSPkqXHXXNkvYA3RACnokx1DCPZbWSLpTA2TK&X-Amz-Signature=64d1cd2faaf2c3b67d8e1b46bc8198f6bcc97d838cf136498978b8e7704d58d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5FVNFGX%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDDM7q0eHx29x5Mzfe%2FfR%2B%2BJTc2tTVr3Rk7N1hheD8PGAIhAOib%2BAIRdY8AKw1de5C3WigsW41XP4XAgGm4Pyv%2Fy4sYKv8DCDsQABoMNjM3NDIzMTgzODA1Igy5mL3%2FStsaY2QAxE0q3AN7rdoc8Sfu3FuIM2%2B0q6hqA5lnRVVPSF82b5aLX2h8S%2BYkcaNAuc24I6WfX%2FHA4j1Uppxjzz1W%2FHxEBdrxhKoKO3OeRcMsSP3n5a%2BcSCVmIxuLBaoPuafJpgiKgNGPxVQCz03dxgFwo8p%2FUyejx%2ByhlMmOAL%2Bw1jjWuxKCjA0at7YtttQaEh3YYpafIg5NOLk2qVgjWTUrOIBoqhDqi9JSFvqiFpJ9w2Zq%2BJaP9taw9mXxUk%2BNS5dSMbyQO5QV6s1lRugArwakidKgCGC9830Sn6DtjrL7q90QXihreqXiA3i0JUiZhGAu9VfRDkWQlfR4yIJjZbSRtw0lWnGjYBnYgekZ2hSqTyGtprE%2B40MY5ltx7ldmrXUvurHSynoMMN3pDmOB%2FFRWFq9GCs0Ga9D8alzkKgAJUvUCZdyLyyqqM3KYfjIhaqmARb18yXhhM2P1jxHrVyFVas%2FnHUmGp02P0TJW%2BN9i4XIh9GL1MFfcWnPLl8CDvsTtwL2dszlo5YGE%2FgOEBGX9NashBwkMwzWv6yJ84d6hJ7JCM0VTRwRZZL%2FWmRkg%2FEHGdtEwB7cqRczOkE9N%2FGD20NluhNV0ioMGr0w0VaFqu4KQSG7DnMqlDbmKXBH5uURVQv318DD5m7jRBjqkASwevFq4vQ96Jq2TDA82HSXkd7jX3dHKgU235fEVGLOYzX7N2Ja92XRE4xJivbhUUpJAhNf6958wbCzw55QiWQz94H1DynJ2obbspqMQaXdBlVqgHjajU5DC7nTnTpXRTS0Q4GDXOWiOuZTcbpi104TfYf5mHfv1GuWWdQjUGD0%2BL8AwQAbraroGDz1qXLZXTXClrTdB5ztWg8OkhOqEYpYijXMu&X-Amz-Signature=709fe760a82a8e90585c32941ed919510b8e37a81a743bdf2368491b11dc0a5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLQFNOAZ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD66OC%2BgnteZ7bbDXMYPOLr4x%2BtCx%2Biu2QMixE2HoHWVQIgf7Jt8pLG5h%2FeTT0Mfjojf4zs0URkr3DnwEFdXYZFksUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDATpxx3vTGPHz6oPtircA%2Fz8TvOOSod1%2Fr%2BRV6qShZjTHvQwM1rjJiNVcp0XpKxtYq6cKwn3ryj9qAWDGncvQcXSyPcAgVPyPnFuBhhWJVCSQ%2FJl9LFDNqRGy23AwvNz8cI4MjM%2FNZj70%2BblDl62GCjk%2FJWTo0PVrkjPyDn3yx2qrqbsAXAvDlNczaQI%2FBhqexCFpJVX90K6I6sqJ7yDIUqcN%2FnJ5gcr3ciQo5uSICboZddL52uA%2Ff%2FScCJ25vfu0IlUeFTwyZYSJ1CNK0wLp7KrMZq7dGSPWzinby1Hs%2BVerWeGFRGgXp2WmXbNvQr8hQlvXeBfdL3%2Bhbb4b25OOQozbLtYAexljEdzqx1JNN0kEkJDlbUo3XCcZ%2F5J5oxSmKVE1EbDd2IpFN2eZK8ot%2B5A9PNKsJM2%2BDfptcRTwcUUbWx3Z4ndd%2Ff65oIQYy1S5C%2BuvpEX98JPoO4ivpbpaC2kPiVMshIWjW9LCURlXsQtZX7rveCTcfZLa4NxcMSCTWnWS9%2FjAkPcfFnZQXo0KliCQM9qrWN0e3pXlr5IlYVT9dDqbD0K5%2FwaqbFEvD0H2FhUlfqHrsqEeVSVSoPC6wMGKM%2F2%2BWeVsM6d4vB%2B2Ar4oCNt2kByv3AZ1CacLUuSx7xCEJJyfF%2BjekSqMMucuNEGOqUB%2Fdg5Tv7frp8ITmn4cvrayhRantvzT5wjkg2YeJ8U6Pambx2lPV5%2Bp9LeLv1rTdxzOZU5f4qaxsdnRTI5fm9Pkgf2Cx%2Bw9Sc9ypFLe%2Bol1qhAiF9cueSH%2F1Zo5XTSBCx2OLTPNixrYvKkEA42aUqHjgzXmPM7OPh97CJ4kWSOfmUGD%2BW1ab8ZO0kiSPkqXHXXNkvYA3RACnokx1DCPZbWSLpTA2TK&X-Amz-Signature=c07fd12fce87cca8da7d8966df4c014781ee14712d1c0a43181f25a0538ee690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLQFNOAZ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD66OC%2BgnteZ7bbDXMYPOLr4x%2BtCx%2Biu2QMixE2HoHWVQIgf7Jt8pLG5h%2FeTT0Mfjojf4zs0URkr3DnwEFdXYZFksUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDATpxx3vTGPHz6oPtircA%2Fz8TvOOSod1%2Fr%2BRV6qShZjTHvQwM1rjJiNVcp0XpKxtYq6cKwn3ryj9qAWDGncvQcXSyPcAgVPyPnFuBhhWJVCSQ%2FJl9LFDNqRGy23AwvNz8cI4MjM%2FNZj70%2BblDl62GCjk%2FJWTo0PVrkjPyDn3yx2qrqbsAXAvDlNczaQI%2FBhqexCFpJVX90K6I6sqJ7yDIUqcN%2FnJ5gcr3ciQo5uSICboZddL52uA%2Ff%2FScCJ25vfu0IlUeFTwyZYSJ1CNK0wLp7KrMZq7dGSPWzinby1Hs%2BVerWeGFRGgXp2WmXbNvQr8hQlvXeBfdL3%2Bhbb4b25OOQozbLtYAexljEdzqx1JNN0kEkJDlbUo3XCcZ%2F5J5oxSmKVE1EbDd2IpFN2eZK8ot%2B5A9PNKsJM2%2BDfptcRTwcUUbWx3Z4ndd%2Ff65oIQYy1S5C%2BuvpEX98JPoO4ivpbpaC2kPiVMshIWjW9LCURlXsQtZX7rveCTcfZLa4NxcMSCTWnWS9%2FjAkPcfFnZQXo0KliCQM9qrWN0e3pXlr5IlYVT9dDqbD0K5%2FwaqbFEvD0H2FhUlfqHrsqEeVSVSoPC6wMGKM%2F2%2BWeVsM6d4vB%2B2Ar4oCNt2kByv3AZ1CacLUuSx7xCEJJyfF%2BjekSqMMucuNEGOqUB%2Fdg5Tv7frp8ITmn4cvrayhRantvzT5wjkg2YeJ8U6Pambx2lPV5%2Bp9LeLv1rTdxzOZU5f4qaxsdnRTI5fm9Pkgf2Cx%2Bw9Sc9ypFLe%2Bol1qhAiF9cueSH%2F1Zo5XTSBCx2OLTPNixrYvKkEA42aUqHjgzXmPM7OPh97CJ4kWSOfmUGD%2BW1ab8ZO0kiSPkqXHXXNkvYA3RACnokx1DCPZbWSLpTA2TK&X-Amz-Signature=aa15b67af3205c13427db24e7261408f707c979da0f843792fe7380a9390800a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLQFNOAZ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD66OC%2BgnteZ7bbDXMYPOLr4x%2BtCx%2Biu2QMixE2HoHWVQIgf7Jt8pLG5h%2FeTT0Mfjojf4zs0URkr3DnwEFdXYZFksUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDATpxx3vTGPHz6oPtircA%2Fz8TvOOSod1%2Fr%2BRV6qShZjTHvQwM1rjJiNVcp0XpKxtYq6cKwn3ryj9qAWDGncvQcXSyPcAgVPyPnFuBhhWJVCSQ%2FJl9LFDNqRGy23AwvNz8cI4MjM%2FNZj70%2BblDl62GCjk%2FJWTo0PVrkjPyDn3yx2qrqbsAXAvDlNczaQI%2FBhqexCFpJVX90K6I6sqJ7yDIUqcN%2FnJ5gcr3ciQo5uSICboZddL52uA%2Ff%2FScCJ25vfu0IlUeFTwyZYSJ1CNK0wLp7KrMZq7dGSPWzinby1Hs%2BVerWeGFRGgXp2WmXbNvQr8hQlvXeBfdL3%2Bhbb4b25OOQozbLtYAexljEdzqx1JNN0kEkJDlbUo3XCcZ%2F5J5oxSmKVE1EbDd2IpFN2eZK8ot%2B5A9PNKsJM2%2BDfptcRTwcUUbWx3Z4ndd%2Ff65oIQYy1S5C%2BuvpEX98JPoO4ivpbpaC2kPiVMshIWjW9LCURlXsQtZX7rveCTcfZLa4NxcMSCTWnWS9%2FjAkPcfFnZQXo0KliCQM9qrWN0e3pXlr5IlYVT9dDqbD0K5%2FwaqbFEvD0H2FhUlfqHrsqEeVSVSoPC6wMGKM%2F2%2BWeVsM6d4vB%2B2Ar4oCNt2kByv3AZ1CacLUuSx7xCEJJyfF%2BjekSqMMucuNEGOqUB%2Fdg5Tv7frp8ITmn4cvrayhRantvzT5wjkg2YeJ8U6Pambx2lPV5%2Bp9LeLv1rTdxzOZU5f4qaxsdnRTI5fm9Pkgf2Cx%2Bw9Sc9ypFLe%2Bol1qhAiF9cueSH%2F1Zo5XTSBCx2OLTPNixrYvKkEA42aUqHjgzXmPM7OPh97CJ4kWSOfmUGD%2BW1ab8ZO0kiSPkqXHXXNkvYA3RACnokx1DCPZbWSLpTA2TK&X-Amz-Signature=7bc7929105c28bdec60115a998661ced3906c39022ec97b1d4474712e64e1052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLQFNOAZ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD66OC%2BgnteZ7bbDXMYPOLr4x%2BtCx%2Biu2QMixE2HoHWVQIgf7Jt8pLG5h%2FeTT0Mfjojf4zs0URkr3DnwEFdXYZFksUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDATpxx3vTGPHz6oPtircA%2Fz8TvOOSod1%2Fr%2BRV6qShZjTHvQwM1rjJiNVcp0XpKxtYq6cKwn3ryj9qAWDGncvQcXSyPcAgVPyPnFuBhhWJVCSQ%2FJl9LFDNqRGy23AwvNz8cI4MjM%2FNZj70%2BblDl62GCjk%2FJWTo0PVrkjPyDn3yx2qrqbsAXAvDlNczaQI%2FBhqexCFpJVX90K6I6sqJ7yDIUqcN%2FnJ5gcr3ciQo5uSICboZddL52uA%2Ff%2FScCJ25vfu0IlUeFTwyZYSJ1CNK0wLp7KrMZq7dGSPWzinby1Hs%2BVerWeGFRGgXp2WmXbNvQr8hQlvXeBfdL3%2Bhbb4b25OOQozbLtYAexljEdzqx1JNN0kEkJDlbUo3XCcZ%2F5J5oxSmKVE1EbDd2IpFN2eZK8ot%2B5A9PNKsJM2%2BDfptcRTwcUUbWx3Z4ndd%2Ff65oIQYy1S5C%2BuvpEX98JPoO4ivpbpaC2kPiVMshIWjW9LCURlXsQtZX7rveCTcfZLa4NxcMSCTWnWS9%2FjAkPcfFnZQXo0KliCQM9qrWN0e3pXlr5IlYVT9dDqbD0K5%2FwaqbFEvD0H2FhUlfqHrsqEeVSVSoPC6wMGKM%2F2%2BWeVsM6d4vB%2B2Ar4oCNt2kByv3AZ1CacLUuSx7xCEJJyfF%2BjekSqMMucuNEGOqUB%2Fdg5Tv7frp8ITmn4cvrayhRantvzT5wjkg2YeJ8U6Pambx2lPV5%2Bp9LeLv1rTdxzOZU5f4qaxsdnRTI5fm9Pkgf2Cx%2Bw9Sc9ypFLe%2Bol1qhAiF9cueSH%2F1Zo5XTSBCx2OLTPNixrYvKkEA42aUqHjgzXmPM7OPh97CJ4kWSOfmUGD%2BW1ab8ZO0kiSPkqXHXXNkvYA3RACnokx1DCPZbWSLpTA2TK&X-Amz-Signature=be0c925f0f21c43833769a57957d1943bf61179f75ca6e0415d66d9268321073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLQFNOAZ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD66OC%2BgnteZ7bbDXMYPOLr4x%2BtCx%2Biu2QMixE2HoHWVQIgf7Jt8pLG5h%2FeTT0Mfjojf4zs0URkr3DnwEFdXYZFksUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDATpxx3vTGPHz6oPtircA%2Fz8TvOOSod1%2Fr%2BRV6qShZjTHvQwM1rjJiNVcp0XpKxtYq6cKwn3ryj9qAWDGncvQcXSyPcAgVPyPnFuBhhWJVCSQ%2FJl9LFDNqRGy23AwvNz8cI4MjM%2FNZj70%2BblDl62GCjk%2FJWTo0PVrkjPyDn3yx2qrqbsAXAvDlNczaQI%2FBhqexCFpJVX90K6I6sqJ7yDIUqcN%2FnJ5gcr3ciQo5uSICboZddL52uA%2Ff%2FScCJ25vfu0IlUeFTwyZYSJ1CNK0wLp7KrMZq7dGSPWzinby1Hs%2BVerWeGFRGgXp2WmXbNvQr8hQlvXeBfdL3%2Bhbb4b25OOQozbLtYAexljEdzqx1JNN0kEkJDlbUo3XCcZ%2F5J5oxSmKVE1EbDd2IpFN2eZK8ot%2B5A9PNKsJM2%2BDfptcRTwcUUbWx3Z4ndd%2Ff65oIQYy1S5C%2BuvpEX98JPoO4ivpbpaC2kPiVMshIWjW9LCURlXsQtZX7rveCTcfZLa4NxcMSCTWnWS9%2FjAkPcfFnZQXo0KliCQM9qrWN0e3pXlr5IlYVT9dDqbD0K5%2FwaqbFEvD0H2FhUlfqHrsqEeVSVSoPC6wMGKM%2F2%2BWeVsM6d4vB%2B2Ar4oCNt2kByv3AZ1CacLUuSx7xCEJJyfF%2BjekSqMMucuNEGOqUB%2Fdg5Tv7frp8ITmn4cvrayhRantvzT5wjkg2YeJ8U6Pambx2lPV5%2Bp9LeLv1rTdxzOZU5f4qaxsdnRTI5fm9Pkgf2Cx%2Bw9Sc9ypFLe%2Bol1qhAiF9cueSH%2F1Zo5XTSBCx2OLTPNixrYvKkEA42aUqHjgzXmPM7OPh97CJ4kWSOfmUGD%2BW1ab8ZO0kiSPkqXHXXNkvYA3RACnokx1DCPZbWSLpTA2TK&X-Amz-Signature=ca96f263615deed5f1ff5caacfd74660e2b43c4b3285b01eded8a229bc7c98b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLQFNOAZ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD66OC%2BgnteZ7bbDXMYPOLr4x%2BtCx%2Biu2QMixE2HoHWVQIgf7Jt8pLG5h%2FeTT0Mfjojf4zs0URkr3DnwEFdXYZFksUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDATpxx3vTGPHz6oPtircA%2Fz8TvOOSod1%2Fr%2BRV6qShZjTHvQwM1rjJiNVcp0XpKxtYq6cKwn3ryj9qAWDGncvQcXSyPcAgVPyPnFuBhhWJVCSQ%2FJl9LFDNqRGy23AwvNz8cI4MjM%2FNZj70%2BblDl62GCjk%2FJWTo0PVrkjPyDn3yx2qrqbsAXAvDlNczaQI%2FBhqexCFpJVX90K6I6sqJ7yDIUqcN%2FnJ5gcr3ciQo5uSICboZddL52uA%2Ff%2FScCJ25vfu0IlUeFTwyZYSJ1CNK0wLp7KrMZq7dGSPWzinby1Hs%2BVerWeGFRGgXp2WmXbNvQr8hQlvXeBfdL3%2Bhbb4b25OOQozbLtYAexljEdzqx1JNN0kEkJDlbUo3XCcZ%2F5J5oxSmKVE1EbDd2IpFN2eZK8ot%2B5A9PNKsJM2%2BDfptcRTwcUUbWx3Z4ndd%2Ff65oIQYy1S5C%2BuvpEX98JPoO4ivpbpaC2kPiVMshIWjW9LCURlXsQtZX7rveCTcfZLa4NxcMSCTWnWS9%2FjAkPcfFnZQXo0KliCQM9qrWN0e3pXlr5IlYVT9dDqbD0K5%2FwaqbFEvD0H2FhUlfqHrsqEeVSVSoPC6wMGKM%2F2%2BWeVsM6d4vB%2B2Ar4oCNt2kByv3AZ1CacLUuSx7xCEJJyfF%2BjekSqMMucuNEGOqUB%2Fdg5Tv7frp8ITmn4cvrayhRantvzT5wjkg2YeJ8U6Pambx2lPV5%2Bp9LeLv1rTdxzOZU5f4qaxsdnRTI5fm9Pkgf2Cx%2Bw9Sc9ypFLe%2Bol1qhAiF9cueSH%2F1Zo5XTSBCx2OLTPNixrYvKkEA42aUqHjgzXmPM7OPh97CJ4kWSOfmUGD%2BW1ab8ZO0kiSPkqXHXXNkvYA3RACnokx1DCPZbWSLpTA2TK&X-Amz-Signature=023368501dbaa9bd53a0e506f96e2315070c1e4105b9d3d9d0e0aa23cbc35528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


