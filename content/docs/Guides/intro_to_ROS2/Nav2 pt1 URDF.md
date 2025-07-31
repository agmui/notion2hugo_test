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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3XSWBLL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB9iuOVcV1t14tmpqoU1cuViDvg%2FCv4b%2FbuQ9yHtUQtQIgOLl5zenjOXD9bCOJ3i4oGjIp3s4s4mR6HwZ4myaKQtYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMubK%2BBxU1XD%2F99%2BRircAz2z1fHfp71oTQRM2y07Wau%2FDJkJVAVaDAoM%2BMqW5nH%2FqQrgqQxYzmj9ZScFHg8h2TxO3OfbVim5UMirzbCHgkxb%2Fdpwk7Y1LCXtdN6s52tPQ%2Fz9rPu%2Bql1Oa6gh1ujAos9pkAaTqEIi5fHvMMs31u9xLx0K22uOvkuFROhMkJQmGsucupm%2B9L1oV%2BJGCX%2FiD5CZoBDGJaJ32B6aMzOlzVfyb7OcSwZaw0%2FUzo6Ny%2BSq3mXd%2BVgjgfwVyMinnsFAMOCHMxSwdVrI3hj1zE9BvJEAzGXyJ1Uc6dzYO0FlTrVwmykF4xbiOdwcBmEzhjY4qRSaOOrdKe%2BrlJwfNO307%2FCmMYJ5Zq7yoX1vhpaPxE2YZbqW08AuLzegVHZjgNINaWPlk4eHP9Bs0RvyDZY3bnFWqzSA40lcg0LYE3Vjdy3tj38ZKx4hT%2B%2BWloeoDtmKTIYbFkYwEI%2Fqvp2u33uCmsW9AcQeYkPaecNt0K4L%2BHGbpY6sqk4gY1DJta%2B7aVccGX9QJno6ph7FHXwjU7pxFou5%2FJ2B2GXdHfferMTMQ2Dy371BEdl84LdY431g%2FU1V7KCbRupfMziOiHOZtcu41sFTQ4fgUHs5F87IihD%2FBOLZpk6i7vMBvL0%2BDTNbMLyiqsQGOqUBLmcD1wwcFTXlr%2FEHPS4HjZhDTW4WHf8hMy0DDUtNaKSu2vzEt%2BfU2ntnFz4jrK2RpaAJXBKSpTTQjeJBMWAIBHcf%2FHLosoIxNbFcW%2BggvtAQhPWfsJqLsWIphWVzxWCZWepDdVK5CIMumtNDr3l8ZuOEL%2BcM7g3QSpgLAa9rmuWL6%2B8Xu47WLEFS0z5akugczh7Dy7%2FuIU6%2Fr%2BXf4nypO3gNPKBf&X-Amz-Signature=c94b0885b93b73c253a806fe139ba6e21f42ec5dfc15a6928d6d0204cba307aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3XSWBLL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB9iuOVcV1t14tmpqoU1cuViDvg%2FCv4b%2FbuQ9yHtUQtQIgOLl5zenjOXD9bCOJ3i4oGjIp3s4s4mR6HwZ4myaKQtYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMubK%2BBxU1XD%2F99%2BRircAz2z1fHfp71oTQRM2y07Wau%2FDJkJVAVaDAoM%2BMqW5nH%2FqQrgqQxYzmj9ZScFHg8h2TxO3OfbVim5UMirzbCHgkxb%2Fdpwk7Y1LCXtdN6s52tPQ%2Fz9rPu%2Bql1Oa6gh1ujAos9pkAaTqEIi5fHvMMs31u9xLx0K22uOvkuFROhMkJQmGsucupm%2B9L1oV%2BJGCX%2FiD5CZoBDGJaJ32B6aMzOlzVfyb7OcSwZaw0%2FUzo6Ny%2BSq3mXd%2BVgjgfwVyMinnsFAMOCHMxSwdVrI3hj1zE9BvJEAzGXyJ1Uc6dzYO0FlTrVwmykF4xbiOdwcBmEzhjY4qRSaOOrdKe%2BrlJwfNO307%2FCmMYJ5Zq7yoX1vhpaPxE2YZbqW08AuLzegVHZjgNINaWPlk4eHP9Bs0RvyDZY3bnFWqzSA40lcg0LYE3Vjdy3tj38ZKx4hT%2B%2BWloeoDtmKTIYbFkYwEI%2Fqvp2u33uCmsW9AcQeYkPaecNt0K4L%2BHGbpY6sqk4gY1DJta%2B7aVccGX9QJno6ph7FHXwjU7pxFou5%2FJ2B2GXdHfferMTMQ2Dy371BEdl84LdY431g%2FU1V7KCbRupfMziOiHOZtcu41sFTQ4fgUHs5F87IihD%2FBOLZpk6i7vMBvL0%2BDTNbMLyiqsQGOqUBLmcD1wwcFTXlr%2FEHPS4HjZhDTW4WHf8hMy0DDUtNaKSu2vzEt%2BfU2ntnFz4jrK2RpaAJXBKSpTTQjeJBMWAIBHcf%2FHLosoIxNbFcW%2BggvtAQhPWfsJqLsWIphWVzxWCZWepDdVK5CIMumtNDr3l8ZuOEL%2BcM7g3QSpgLAa9rmuWL6%2B8Xu47WLEFS0z5akugczh7Dy7%2FuIU6%2Fr%2BXf4nypO3gNPKBf&X-Amz-Signature=0ad6d09a4472d999bb425aff13c19e37ef25d369872c4b5a0ca33e2bcb73de84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3XSWBLL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB9iuOVcV1t14tmpqoU1cuViDvg%2FCv4b%2FbuQ9yHtUQtQIgOLl5zenjOXD9bCOJ3i4oGjIp3s4s4mR6HwZ4myaKQtYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMubK%2BBxU1XD%2F99%2BRircAz2z1fHfp71oTQRM2y07Wau%2FDJkJVAVaDAoM%2BMqW5nH%2FqQrgqQxYzmj9ZScFHg8h2TxO3OfbVim5UMirzbCHgkxb%2Fdpwk7Y1LCXtdN6s52tPQ%2Fz9rPu%2Bql1Oa6gh1ujAos9pkAaTqEIi5fHvMMs31u9xLx0K22uOvkuFROhMkJQmGsucupm%2B9L1oV%2BJGCX%2FiD5CZoBDGJaJ32B6aMzOlzVfyb7OcSwZaw0%2FUzo6Ny%2BSq3mXd%2BVgjgfwVyMinnsFAMOCHMxSwdVrI3hj1zE9BvJEAzGXyJ1Uc6dzYO0FlTrVwmykF4xbiOdwcBmEzhjY4qRSaOOrdKe%2BrlJwfNO307%2FCmMYJ5Zq7yoX1vhpaPxE2YZbqW08AuLzegVHZjgNINaWPlk4eHP9Bs0RvyDZY3bnFWqzSA40lcg0LYE3Vjdy3tj38ZKx4hT%2B%2BWloeoDtmKTIYbFkYwEI%2Fqvp2u33uCmsW9AcQeYkPaecNt0K4L%2BHGbpY6sqk4gY1DJta%2B7aVccGX9QJno6ph7FHXwjU7pxFou5%2FJ2B2GXdHfferMTMQ2Dy371BEdl84LdY431g%2FU1V7KCbRupfMziOiHOZtcu41sFTQ4fgUHs5F87IihD%2FBOLZpk6i7vMBvL0%2BDTNbMLyiqsQGOqUBLmcD1wwcFTXlr%2FEHPS4HjZhDTW4WHf8hMy0DDUtNaKSu2vzEt%2BfU2ntnFz4jrK2RpaAJXBKSpTTQjeJBMWAIBHcf%2FHLosoIxNbFcW%2BggvtAQhPWfsJqLsWIphWVzxWCZWepDdVK5CIMumtNDr3l8ZuOEL%2BcM7g3QSpgLAa9rmuWL6%2B8Xu47WLEFS0z5akugczh7Dy7%2FuIU6%2Fr%2BXf4nypO3gNPKBf&X-Amz-Signature=02f7ecb9d2d1faad74d81c9705b0e18f606cc9a3f7d6da2c03cf20881a51330d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3XSWBLL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB9iuOVcV1t14tmpqoU1cuViDvg%2FCv4b%2FbuQ9yHtUQtQIgOLl5zenjOXD9bCOJ3i4oGjIp3s4s4mR6HwZ4myaKQtYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMubK%2BBxU1XD%2F99%2BRircAz2z1fHfp71oTQRM2y07Wau%2FDJkJVAVaDAoM%2BMqW5nH%2FqQrgqQxYzmj9ZScFHg8h2TxO3OfbVim5UMirzbCHgkxb%2Fdpwk7Y1LCXtdN6s52tPQ%2Fz9rPu%2Bql1Oa6gh1ujAos9pkAaTqEIi5fHvMMs31u9xLx0K22uOvkuFROhMkJQmGsucupm%2B9L1oV%2BJGCX%2FiD5CZoBDGJaJ32B6aMzOlzVfyb7OcSwZaw0%2FUzo6Ny%2BSq3mXd%2BVgjgfwVyMinnsFAMOCHMxSwdVrI3hj1zE9BvJEAzGXyJ1Uc6dzYO0FlTrVwmykF4xbiOdwcBmEzhjY4qRSaOOrdKe%2BrlJwfNO307%2FCmMYJ5Zq7yoX1vhpaPxE2YZbqW08AuLzegVHZjgNINaWPlk4eHP9Bs0RvyDZY3bnFWqzSA40lcg0LYE3Vjdy3tj38ZKx4hT%2B%2BWloeoDtmKTIYbFkYwEI%2Fqvp2u33uCmsW9AcQeYkPaecNt0K4L%2BHGbpY6sqk4gY1DJta%2B7aVccGX9QJno6ph7FHXwjU7pxFou5%2FJ2B2GXdHfferMTMQ2Dy371BEdl84LdY431g%2FU1V7KCbRupfMziOiHOZtcu41sFTQ4fgUHs5F87IihD%2FBOLZpk6i7vMBvL0%2BDTNbMLyiqsQGOqUBLmcD1wwcFTXlr%2FEHPS4HjZhDTW4WHf8hMy0DDUtNaKSu2vzEt%2BfU2ntnFz4jrK2RpaAJXBKSpTTQjeJBMWAIBHcf%2FHLosoIxNbFcW%2BggvtAQhPWfsJqLsWIphWVzxWCZWepDdVK5CIMumtNDr3l8ZuOEL%2BcM7g3QSpgLAa9rmuWL6%2B8Xu47WLEFS0z5akugczh7Dy7%2FuIU6%2Fr%2BXf4nypO3gNPKBf&X-Amz-Signature=cc42f5df066d9a63fe0e5597c17dcb53dff9c2d3353c6b3f06357358d0c29aae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3XSWBLL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB9iuOVcV1t14tmpqoU1cuViDvg%2FCv4b%2FbuQ9yHtUQtQIgOLl5zenjOXD9bCOJ3i4oGjIp3s4s4mR6HwZ4myaKQtYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMubK%2BBxU1XD%2F99%2BRircAz2z1fHfp71oTQRM2y07Wau%2FDJkJVAVaDAoM%2BMqW5nH%2FqQrgqQxYzmj9ZScFHg8h2TxO3OfbVim5UMirzbCHgkxb%2Fdpwk7Y1LCXtdN6s52tPQ%2Fz9rPu%2Bql1Oa6gh1ujAos9pkAaTqEIi5fHvMMs31u9xLx0K22uOvkuFROhMkJQmGsucupm%2B9L1oV%2BJGCX%2FiD5CZoBDGJaJ32B6aMzOlzVfyb7OcSwZaw0%2FUzo6Ny%2BSq3mXd%2BVgjgfwVyMinnsFAMOCHMxSwdVrI3hj1zE9BvJEAzGXyJ1Uc6dzYO0FlTrVwmykF4xbiOdwcBmEzhjY4qRSaOOrdKe%2BrlJwfNO307%2FCmMYJ5Zq7yoX1vhpaPxE2YZbqW08AuLzegVHZjgNINaWPlk4eHP9Bs0RvyDZY3bnFWqzSA40lcg0LYE3Vjdy3tj38ZKx4hT%2B%2BWloeoDtmKTIYbFkYwEI%2Fqvp2u33uCmsW9AcQeYkPaecNt0K4L%2BHGbpY6sqk4gY1DJta%2B7aVccGX9QJno6ph7FHXwjU7pxFou5%2FJ2B2GXdHfferMTMQ2Dy371BEdl84LdY431g%2FU1V7KCbRupfMziOiHOZtcu41sFTQ4fgUHs5F87IihD%2FBOLZpk6i7vMBvL0%2BDTNbMLyiqsQGOqUBLmcD1wwcFTXlr%2FEHPS4HjZhDTW4WHf8hMy0DDUtNaKSu2vzEt%2BfU2ntnFz4jrK2RpaAJXBKSpTTQjeJBMWAIBHcf%2FHLosoIxNbFcW%2BggvtAQhPWfsJqLsWIphWVzxWCZWepDdVK5CIMumtNDr3l8ZuOEL%2BcM7g3QSpgLAa9rmuWL6%2B8Xu47WLEFS0z5akugczh7Dy7%2FuIU6%2Fr%2BXf4nypO3gNPKBf&X-Amz-Signature=58399fdac33d840fce1dbe22e728900b7ac66f4a90b090fc869598ea5bbae4fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3XSWBLL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB9iuOVcV1t14tmpqoU1cuViDvg%2FCv4b%2FbuQ9yHtUQtQIgOLl5zenjOXD9bCOJ3i4oGjIp3s4s4mR6HwZ4myaKQtYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMubK%2BBxU1XD%2F99%2BRircAz2z1fHfp71oTQRM2y07Wau%2FDJkJVAVaDAoM%2BMqW5nH%2FqQrgqQxYzmj9ZScFHg8h2TxO3OfbVim5UMirzbCHgkxb%2Fdpwk7Y1LCXtdN6s52tPQ%2Fz9rPu%2Bql1Oa6gh1ujAos9pkAaTqEIi5fHvMMs31u9xLx0K22uOvkuFROhMkJQmGsucupm%2B9L1oV%2BJGCX%2FiD5CZoBDGJaJ32B6aMzOlzVfyb7OcSwZaw0%2FUzo6Ny%2BSq3mXd%2BVgjgfwVyMinnsFAMOCHMxSwdVrI3hj1zE9BvJEAzGXyJ1Uc6dzYO0FlTrVwmykF4xbiOdwcBmEzhjY4qRSaOOrdKe%2BrlJwfNO307%2FCmMYJ5Zq7yoX1vhpaPxE2YZbqW08AuLzegVHZjgNINaWPlk4eHP9Bs0RvyDZY3bnFWqzSA40lcg0LYE3Vjdy3tj38ZKx4hT%2B%2BWloeoDtmKTIYbFkYwEI%2Fqvp2u33uCmsW9AcQeYkPaecNt0K4L%2BHGbpY6sqk4gY1DJta%2B7aVccGX9QJno6ph7FHXwjU7pxFou5%2FJ2B2GXdHfferMTMQ2Dy371BEdl84LdY431g%2FU1V7KCbRupfMziOiHOZtcu41sFTQ4fgUHs5F87IihD%2FBOLZpk6i7vMBvL0%2BDTNbMLyiqsQGOqUBLmcD1wwcFTXlr%2FEHPS4HjZhDTW4WHf8hMy0DDUtNaKSu2vzEt%2BfU2ntnFz4jrK2RpaAJXBKSpTTQjeJBMWAIBHcf%2FHLosoIxNbFcW%2BggvtAQhPWfsJqLsWIphWVzxWCZWepDdVK5CIMumtNDr3l8ZuOEL%2BcM7g3QSpgLAa9rmuWL6%2B8Xu47WLEFS0z5akugczh7Dy7%2FuIU6%2Fr%2BXf4nypO3gNPKBf&X-Amz-Signature=da833555837aeb48c7b1ac07f461f610f6d2a3ec596c7eef35ce15b161784968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3XSWBLL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB9iuOVcV1t14tmpqoU1cuViDvg%2FCv4b%2FbuQ9yHtUQtQIgOLl5zenjOXD9bCOJ3i4oGjIp3s4s4mR6HwZ4myaKQtYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMubK%2BBxU1XD%2F99%2BRircAz2z1fHfp71oTQRM2y07Wau%2FDJkJVAVaDAoM%2BMqW5nH%2FqQrgqQxYzmj9ZScFHg8h2TxO3OfbVim5UMirzbCHgkxb%2Fdpwk7Y1LCXtdN6s52tPQ%2Fz9rPu%2Bql1Oa6gh1ujAos9pkAaTqEIi5fHvMMs31u9xLx0K22uOvkuFROhMkJQmGsucupm%2B9L1oV%2BJGCX%2FiD5CZoBDGJaJ32B6aMzOlzVfyb7OcSwZaw0%2FUzo6Ny%2BSq3mXd%2BVgjgfwVyMinnsFAMOCHMxSwdVrI3hj1zE9BvJEAzGXyJ1Uc6dzYO0FlTrVwmykF4xbiOdwcBmEzhjY4qRSaOOrdKe%2BrlJwfNO307%2FCmMYJ5Zq7yoX1vhpaPxE2YZbqW08AuLzegVHZjgNINaWPlk4eHP9Bs0RvyDZY3bnFWqzSA40lcg0LYE3Vjdy3tj38ZKx4hT%2B%2BWloeoDtmKTIYbFkYwEI%2Fqvp2u33uCmsW9AcQeYkPaecNt0K4L%2BHGbpY6sqk4gY1DJta%2B7aVccGX9QJno6ph7FHXwjU7pxFou5%2FJ2B2GXdHfferMTMQ2Dy371BEdl84LdY431g%2FU1V7KCbRupfMziOiHOZtcu41sFTQ4fgUHs5F87IihD%2FBOLZpk6i7vMBvL0%2BDTNbMLyiqsQGOqUBLmcD1wwcFTXlr%2FEHPS4HjZhDTW4WHf8hMy0DDUtNaKSu2vzEt%2BfU2ntnFz4jrK2RpaAJXBKSpTTQjeJBMWAIBHcf%2FHLosoIxNbFcW%2BggvtAQhPWfsJqLsWIphWVzxWCZWepDdVK5CIMumtNDr3l8ZuOEL%2BcM7g3QSpgLAa9rmuWL6%2B8Xu47WLEFS0z5akugczh7Dy7%2FuIU6%2Fr%2BXf4nypO3gNPKBf&X-Amz-Signature=0f15abd6b32ac821bc0b0b0cf9ed1e9e6d0c5c6736436424dfbe0bb7f62be0ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3XSWBLL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB9iuOVcV1t14tmpqoU1cuViDvg%2FCv4b%2FbuQ9yHtUQtQIgOLl5zenjOXD9bCOJ3i4oGjIp3s4s4mR6HwZ4myaKQtYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMubK%2BBxU1XD%2F99%2BRircAz2z1fHfp71oTQRM2y07Wau%2FDJkJVAVaDAoM%2BMqW5nH%2FqQrgqQxYzmj9ZScFHg8h2TxO3OfbVim5UMirzbCHgkxb%2Fdpwk7Y1LCXtdN6s52tPQ%2Fz9rPu%2Bql1Oa6gh1ujAos9pkAaTqEIi5fHvMMs31u9xLx0K22uOvkuFROhMkJQmGsucupm%2B9L1oV%2BJGCX%2FiD5CZoBDGJaJ32B6aMzOlzVfyb7OcSwZaw0%2FUzo6Ny%2BSq3mXd%2BVgjgfwVyMinnsFAMOCHMxSwdVrI3hj1zE9BvJEAzGXyJ1Uc6dzYO0FlTrVwmykF4xbiOdwcBmEzhjY4qRSaOOrdKe%2BrlJwfNO307%2FCmMYJ5Zq7yoX1vhpaPxE2YZbqW08AuLzegVHZjgNINaWPlk4eHP9Bs0RvyDZY3bnFWqzSA40lcg0LYE3Vjdy3tj38ZKx4hT%2B%2BWloeoDtmKTIYbFkYwEI%2Fqvp2u33uCmsW9AcQeYkPaecNt0K4L%2BHGbpY6sqk4gY1DJta%2B7aVccGX9QJno6ph7FHXwjU7pxFou5%2FJ2B2GXdHfferMTMQ2Dy371BEdl84LdY431g%2FU1V7KCbRupfMziOiHOZtcu41sFTQ4fgUHs5F87IihD%2FBOLZpk6i7vMBvL0%2BDTNbMLyiqsQGOqUBLmcD1wwcFTXlr%2FEHPS4HjZhDTW4WHf8hMy0DDUtNaKSu2vzEt%2BfU2ntnFz4jrK2RpaAJXBKSpTTQjeJBMWAIBHcf%2FHLosoIxNbFcW%2BggvtAQhPWfsJqLsWIphWVzxWCZWepDdVK5CIMumtNDr3l8ZuOEL%2BcM7g3QSpgLAa9rmuWL6%2B8Xu47WLEFS0z5akugczh7Dy7%2FuIU6%2Fr%2BXf4nypO3gNPKBf&X-Amz-Signature=4a2ff0272dc6d186bf45d5b7868457e11ac099ccbc272691ee99df62fe6d4503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3XSWBLL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB9iuOVcV1t14tmpqoU1cuViDvg%2FCv4b%2FbuQ9yHtUQtQIgOLl5zenjOXD9bCOJ3i4oGjIp3s4s4mR6HwZ4myaKQtYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMubK%2BBxU1XD%2F99%2BRircAz2z1fHfp71oTQRM2y07Wau%2FDJkJVAVaDAoM%2BMqW5nH%2FqQrgqQxYzmj9ZScFHg8h2TxO3OfbVim5UMirzbCHgkxb%2Fdpwk7Y1LCXtdN6s52tPQ%2Fz9rPu%2Bql1Oa6gh1ujAos9pkAaTqEIi5fHvMMs31u9xLx0K22uOvkuFROhMkJQmGsucupm%2B9L1oV%2BJGCX%2FiD5CZoBDGJaJ32B6aMzOlzVfyb7OcSwZaw0%2FUzo6Ny%2BSq3mXd%2BVgjgfwVyMinnsFAMOCHMxSwdVrI3hj1zE9BvJEAzGXyJ1Uc6dzYO0FlTrVwmykF4xbiOdwcBmEzhjY4qRSaOOrdKe%2BrlJwfNO307%2FCmMYJ5Zq7yoX1vhpaPxE2YZbqW08AuLzegVHZjgNINaWPlk4eHP9Bs0RvyDZY3bnFWqzSA40lcg0LYE3Vjdy3tj38ZKx4hT%2B%2BWloeoDtmKTIYbFkYwEI%2Fqvp2u33uCmsW9AcQeYkPaecNt0K4L%2BHGbpY6sqk4gY1DJta%2B7aVccGX9QJno6ph7FHXwjU7pxFou5%2FJ2B2GXdHfferMTMQ2Dy371BEdl84LdY431g%2FU1V7KCbRupfMziOiHOZtcu41sFTQ4fgUHs5F87IihD%2FBOLZpk6i7vMBvL0%2BDTNbMLyiqsQGOqUBLmcD1wwcFTXlr%2FEHPS4HjZhDTW4WHf8hMy0DDUtNaKSu2vzEt%2BfU2ntnFz4jrK2RpaAJXBKSpTTQjeJBMWAIBHcf%2FHLosoIxNbFcW%2BggvtAQhPWfsJqLsWIphWVzxWCZWepDdVK5CIMumtNDr3l8ZuOEL%2BcM7g3QSpgLAa9rmuWL6%2B8Xu47WLEFS0z5akugczh7Dy7%2FuIU6%2Fr%2BXf4nypO3gNPKBf&X-Amz-Signature=404ff27c1a27ae4409d94c5473051b61e572eb9b0e5789fd666f5151f625b600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3XSWBLL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB9iuOVcV1t14tmpqoU1cuViDvg%2FCv4b%2FbuQ9yHtUQtQIgOLl5zenjOXD9bCOJ3i4oGjIp3s4s4mR6HwZ4myaKQtYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMubK%2BBxU1XD%2F99%2BRircAz2z1fHfp71oTQRM2y07Wau%2FDJkJVAVaDAoM%2BMqW5nH%2FqQrgqQxYzmj9ZScFHg8h2TxO3OfbVim5UMirzbCHgkxb%2Fdpwk7Y1LCXtdN6s52tPQ%2Fz9rPu%2Bql1Oa6gh1ujAos9pkAaTqEIi5fHvMMs31u9xLx0K22uOvkuFROhMkJQmGsucupm%2B9L1oV%2BJGCX%2FiD5CZoBDGJaJ32B6aMzOlzVfyb7OcSwZaw0%2FUzo6Ny%2BSq3mXd%2BVgjgfwVyMinnsFAMOCHMxSwdVrI3hj1zE9BvJEAzGXyJ1Uc6dzYO0FlTrVwmykF4xbiOdwcBmEzhjY4qRSaOOrdKe%2BrlJwfNO307%2FCmMYJ5Zq7yoX1vhpaPxE2YZbqW08AuLzegVHZjgNINaWPlk4eHP9Bs0RvyDZY3bnFWqzSA40lcg0LYE3Vjdy3tj38ZKx4hT%2B%2BWloeoDtmKTIYbFkYwEI%2Fqvp2u33uCmsW9AcQeYkPaecNt0K4L%2BHGbpY6sqk4gY1DJta%2B7aVccGX9QJno6ph7FHXwjU7pxFou5%2FJ2B2GXdHfferMTMQ2Dy371BEdl84LdY431g%2FU1V7KCbRupfMziOiHOZtcu41sFTQ4fgUHs5F87IihD%2FBOLZpk6i7vMBvL0%2BDTNbMLyiqsQGOqUBLmcD1wwcFTXlr%2FEHPS4HjZhDTW4WHf8hMy0DDUtNaKSu2vzEt%2BfU2ntnFz4jrK2RpaAJXBKSpTTQjeJBMWAIBHcf%2FHLosoIxNbFcW%2BggvtAQhPWfsJqLsWIphWVzxWCZWepDdVK5CIMumtNDr3l8ZuOEL%2BcM7g3QSpgLAa9rmuWL6%2B8Xu47WLEFS0z5akugczh7Dy7%2FuIU6%2Fr%2BXf4nypO3gNPKBf&X-Amz-Signature=b1df1dd43e4bf76afd151935d14cc8b8c117da0c548a89b869ee0b43257117f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3XSWBLL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB9iuOVcV1t14tmpqoU1cuViDvg%2FCv4b%2FbuQ9yHtUQtQIgOLl5zenjOXD9bCOJ3i4oGjIp3s4s4mR6HwZ4myaKQtYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMubK%2BBxU1XD%2F99%2BRircAz2z1fHfp71oTQRM2y07Wau%2FDJkJVAVaDAoM%2BMqW5nH%2FqQrgqQxYzmj9ZScFHg8h2TxO3OfbVim5UMirzbCHgkxb%2Fdpwk7Y1LCXtdN6s52tPQ%2Fz9rPu%2Bql1Oa6gh1ujAos9pkAaTqEIi5fHvMMs31u9xLx0K22uOvkuFROhMkJQmGsucupm%2B9L1oV%2BJGCX%2FiD5CZoBDGJaJ32B6aMzOlzVfyb7OcSwZaw0%2FUzo6Ny%2BSq3mXd%2BVgjgfwVyMinnsFAMOCHMxSwdVrI3hj1zE9BvJEAzGXyJ1Uc6dzYO0FlTrVwmykF4xbiOdwcBmEzhjY4qRSaOOrdKe%2BrlJwfNO307%2FCmMYJ5Zq7yoX1vhpaPxE2YZbqW08AuLzegVHZjgNINaWPlk4eHP9Bs0RvyDZY3bnFWqzSA40lcg0LYE3Vjdy3tj38ZKx4hT%2B%2BWloeoDtmKTIYbFkYwEI%2Fqvp2u33uCmsW9AcQeYkPaecNt0K4L%2BHGbpY6sqk4gY1DJta%2B7aVccGX9QJno6ph7FHXwjU7pxFou5%2FJ2B2GXdHfferMTMQ2Dy371BEdl84LdY431g%2FU1V7KCbRupfMziOiHOZtcu41sFTQ4fgUHs5F87IihD%2FBOLZpk6i7vMBvL0%2BDTNbMLyiqsQGOqUBLmcD1wwcFTXlr%2FEHPS4HjZhDTW4WHf8hMy0DDUtNaKSu2vzEt%2BfU2ntnFz4jrK2RpaAJXBKSpTTQjeJBMWAIBHcf%2FHLosoIxNbFcW%2BggvtAQhPWfsJqLsWIphWVzxWCZWepDdVK5CIMumtNDr3l8ZuOEL%2BcM7g3QSpgLAa9rmuWL6%2B8Xu47WLEFS0z5akugczh7Dy7%2FuIU6%2Fr%2BXf4nypO3gNPKBf&X-Amz-Signature=5f9049b8b93d4b1d74092b5fa1b4962940e0c116f1f934de77acda4e4d92d5ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3XSWBLL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB9iuOVcV1t14tmpqoU1cuViDvg%2FCv4b%2FbuQ9yHtUQtQIgOLl5zenjOXD9bCOJ3i4oGjIp3s4s4mR6HwZ4myaKQtYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMubK%2BBxU1XD%2F99%2BRircAz2z1fHfp71oTQRM2y07Wau%2FDJkJVAVaDAoM%2BMqW5nH%2FqQrgqQxYzmj9ZScFHg8h2TxO3OfbVim5UMirzbCHgkxb%2Fdpwk7Y1LCXtdN6s52tPQ%2Fz9rPu%2Bql1Oa6gh1ujAos9pkAaTqEIi5fHvMMs31u9xLx0K22uOvkuFROhMkJQmGsucupm%2B9L1oV%2BJGCX%2FiD5CZoBDGJaJ32B6aMzOlzVfyb7OcSwZaw0%2FUzo6Ny%2BSq3mXd%2BVgjgfwVyMinnsFAMOCHMxSwdVrI3hj1zE9BvJEAzGXyJ1Uc6dzYO0FlTrVwmykF4xbiOdwcBmEzhjY4qRSaOOrdKe%2BrlJwfNO307%2FCmMYJ5Zq7yoX1vhpaPxE2YZbqW08AuLzegVHZjgNINaWPlk4eHP9Bs0RvyDZY3bnFWqzSA40lcg0LYE3Vjdy3tj38ZKx4hT%2B%2BWloeoDtmKTIYbFkYwEI%2Fqvp2u33uCmsW9AcQeYkPaecNt0K4L%2BHGbpY6sqk4gY1DJta%2B7aVccGX9QJno6ph7FHXwjU7pxFou5%2FJ2B2GXdHfferMTMQ2Dy371BEdl84LdY431g%2FU1V7KCbRupfMziOiHOZtcu41sFTQ4fgUHs5F87IihD%2FBOLZpk6i7vMBvL0%2BDTNbMLyiqsQGOqUBLmcD1wwcFTXlr%2FEHPS4HjZhDTW4WHf8hMy0DDUtNaKSu2vzEt%2BfU2ntnFz4jrK2RpaAJXBKSpTTQjeJBMWAIBHcf%2FHLosoIxNbFcW%2BggvtAQhPWfsJqLsWIphWVzxWCZWepDdVK5CIMumtNDr3l8ZuOEL%2BcM7g3QSpgLAa9rmuWL6%2B8Xu47WLEFS0z5akugczh7Dy7%2FuIU6%2Fr%2BXf4nypO3gNPKBf&X-Amz-Signature=5b0ede2d24b4b524a854f7cc25b0624a7a217d7629f584889b0ab293b0d2cbf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3XSWBLL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB9iuOVcV1t14tmpqoU1cuViDvg%2FCv4b%2FbuQ9yHtUQtQIgOLl5zenjOXD9bCOJ3i4oGjIp3s4s4mR6HwZ4myaKQtYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMubK%2BBxU1XD%2F99%2BRircAz2z1fHfp71oTQRM2y07Wau%2FDJkJVAVaDAoM%2BMqW5nH%2FqQrgqQxYzmj9ZScFHg8h2TxO3OfbVim5UMirzbCHgkxb%2Fdpwk7Y1LCXtdN6s52tPQ%2Fz9rPu%2Bql1Oa6gh1ujAos9pkAaTqEIi5fHvMMs31u9xLx0K22uOvkuFROhMkJQmGsucupm%2B9L1oV%2BJGCX%2FiD5CZoBDGJaJ32B6aMzOlzVfyb7OcSwZaw0%2FUzo6Ny%2BSq3mXd%2BVgjgfwVyMinnsFAMOCHMxSwdVrI3hj1zE9BvJEAzGXyJ1Uc6dzYO0FlTrVwmykF4xbiOdwcBmEzhjY4qRSaOOrdKe%2BrlJwfNO307%2FCmMYJ5Zq7yoX1vhpaPxE2YZbqW08AuLzegVHZjgNINaWPlk4eHP9Bs0RvyDZY3bnFWqzSA40lcg0LYE3Vjdy3tj38ZKx4hT%2B%2BWloeoDtmKTIYbFkYwEI%2Fqvp2u33uCmsW9AcQeYkPaecNt0K4L%2BHGbpY6sqk4gY1DJta%2B7aVccGX9QJno6ph7FHXwjU7pxFou5%2FJ2B2GXdHfferMTMQ2Dy371BEdl84LdY431g%2FU1V7KCbRupfMziOiHOZtcu41sFTQ4fgUHs5F87IihD%2FBOLZpk6i7vMBvL0%2BDTNbMLyiqsQGOqUBLmcD1wwcFTXlr%2FEHPS4HjZhDTW4WHf8hMy0DDUtNaKSu2vzEt%2BfU2ntnFz4jrK2RpaAJXBKSpTTQjeJBMWAIBHcf%2FHLosoIxNbFcW%2BggvtAQhPWfsJqLsWIphWVzxWCZWepDdVK5CIMumtNDr3l8ZuOEL%2BcM7g3QSpgLAa9rmuWL6%2B8Xu47WLEFS0z5akugczh7Dy7%2FuIU6%2Fr%2BXf4nypO3gNPKBf&X-Amz-Signature=bac4c8376c6b0656d5764e2325dc477d8f774595adfdabe2d6d7d77f44d6df81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7W62WWU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8MmmKC1U%2BgDMOdaumVc2ci1DwIqmCSGCIZSudNXAJuQIhAPgQoCX568DfqQ5hvPOePorwNuFFPMsvqQ9YivKq1qTAKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQiAqqKGyweBTbznUq3AOA%2BviHx79urQWnLxu3pHa9onbNZrq4P99RM6XxYNmpaECq3a52Y6hZiKXB9jGyf1Met%2FjmwcOa3MmWIrszM33aXSPvsuUhNZG381YyTJdIpLe46zBfewhZRnKX5XzG4NiKUhEXjwrVgRrbNRZuCfpuI2%2BCNBy4DEbC8MhgMkHuB%2B4L95fUxPh1MN1Inbi3s0vtYeOHqpMcj4SlR778zNaYwr6EOi9U6ILe%2B72dcCTWTMZPWjknIFZar6pR7mG4S5Z3G%2F56%2FWCcq78cbd76Q%2BLdjqfiNmV0tYa9Or92hJ6OgR8aMwuMGewYI7cF3eavRy2sJH5v2EnoZJt8teCLRfRMoFrfXKwgpDPGxXLUuMXiJY7v%2BhjpxGoSCp0EdtWljfDnE8Sk75jX19Fe3PjzpBLuh3%2Fpq6%2FMJ9ZlihCqMkqHX%2B00uIEci6j%2BUIWtqdRZfdUxrXLhXPrrZ6d5CtYW6SMZOzn11bTrwro7l%2F5lcREnbUIWGnESWcC%2BbjNA0ad4nnTQZw9bEB1pGYKnkGiJEhk9b1YH%2FHtWY8t2TfgLZm1PHXCbPg%2FSTZnUrWoE74LXmmvV3v8AgkwypuPp3iFO9T%2BZ67RUJqwcfk1%2FelrA3a0A%2Bdxh4njhrA4HU00zejDGoKrEBjqkAZR9p68lo7X2H7IikZztqkc490OWBV7vrDAY9R6U8rKYtaHRhABoAxXWEOxvTSWrCjHHMPK9qdBRM97osLg%2Bd0kfvwVaNi9ySXm9w3GMq%2Fat5FDQMZmyGVhP%2BdhxVAJiM%2FbbXRZzS6uES1oRkoRwiW2AmrpjkVqiRnBdY45XdsihpkmBrVgUQWYIsJdi7BYCZhDhdHa%2BuM5dLA6q9VG2hXiO0Xlr&X-Amz-Signature=faa90f206c3ed688d33f7658dc958f9f42ec7a4d2bc9d08746119791ba71ab47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7W62WWU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8MmmKC1U%2BgDMOdaumVc2ci1DwIqmCSGCIZSudNXAJuQIhAPgQoCX568DfqQ5hvPOePorwNuFFPMsvqQ9YivKq1qTAKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQiAqqKGyweBTbznUq3AOA%2BviHx79urQWnLxu3pHa9onbNZrq4P99RM6XxYNmpaECq3a52Y6hZiKXB9jGyf1Met%2FjmwcOa3MmWIrszM33aXSPvsuUhNZG381YyTJdIpLe46zBfewhZRnKX5XzG4NiKUhEXjwrVgRrbNRZuCfpuI2%2BCNBy4DEbC8MhgMkHuB%2B4L95fUxPh1MN1Inbi3s0vtYeOHqpMcj4SlR778zNaYwr6EOi9U6ILe%2B72dcCTWTMZPWjknIFZar6pR7mG4S5Z3G%2F56%2FWCcq78cbd76Q%2BLdjqfiNmV0tYa9Or92hJ6OgR8aMwuMGewYI7cF3eavRy2sJH5v2EnoZJt8teCLRfRMoFrfXKwgpDPGxXLUuMXiJY7v%2BhjpxGoSCp0EdtWljfDnE8Sk75jX19Fe3PjzpBLuh3%2Fpq6%2FMJ9ZlihCqMkqHX%2B00uIEci6j%2BUIWtqdRZfdUxrXLhXPrrZ6d5CtYW6SMZOzn11bTrwro7l%2F5lcREnbUIWGnESWcC%2BbjNA0ad4nnTQZw9bEB1pGYKnkGiJEhk9b1YH%2FHtWY8t2TfgLZm1PHXCbPg%2FSTZnUrWoE74LXmmvV3v8AgkwypuPp3iFO9T%2BZ67RUJqwcfk1%2FelrA3a0A%2Bdxh4njhrA4HU00zejDGoKrEBjqkAZR9p68lo7X2H7IikZztqkc490OWBV7vrDAY9R6U8rKYtaHRhABoAxXWEOxvTSWrCjHHMPK9qdBRM97osLg%2Bd0kfvwVaNi9ySXm9w3GMq%2Fat5FDQMZmyGVhP%2BdhxVAJiM%2FbbXRZzS6uES1oRkoRwiW2AmrpjkVqiRnBdY45XdsihpkmBrVgUQWYIsJdi7BYCZhDhdHa%2BuM5dLA6q9VG2hXiO0Xlr&X-Amz-Signature=079f8af544e3ea08e745f88eac01dcceee646d59d306811f2e2d3b8612613666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7W62WWU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8MmmKC1U%2BgDMOdaumVc2ci1DwIqmCSGCIZSudNXAJuQIhAPgQoCX568DfqQ5hvPOePorwNuFFPMsvqQ9YivKq1qTAKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQiAqqKGyweBTbznUq3AOA%2BviHx79urQWnLxu3pHa9onbNZrq4P99RM6XxYNmpaECq3a52Y6hZiKXB9jGyf1Met%2FjmwcOa3MmWIrszM33aXSPvsuUhNZG381YyTJdIpLe46zBfewhZRnKX5XzG4NiKUhEXjwrVgRrbNRZuCfpuI2%2BCNBy4DEbC8MhgMkHuB%2B4L95fUxPh1MN1Inbi3s0vtYeOHqpMcj4SlR778zNaYwr6EOi9U6ILe%2B72dcCTWTMZPWjknIFZar6pR7mG4S5Z3G%2F56%2FWCcq78cbd76Q%2BLdjqfiNmV0tYa9Or92hJ6OgR8aMwuMGewYI7cF3eavRy2sJH5v2EnoZJt8teCLRfRMoFrfXKwgpDPGxXLUuMXiJY7v%2BhjpxGoSCp0EdtWljfDnE8Sk75jX19Fe3PjzpBLuh3%2Fpq6%2FMJ9ZlihCqMkqHX%2B00uIEci6j%2BUIWtqdRZfdUxrXLhXPrrZ6d5CtYW6SMZOzn11bTrwro7l%2F5lcREnbUIWGnESWcC%2BbjNA0ad4nnTQZw9bEB1pGYKnkGiJEhk9b1YH%2FHtWY8t2TfgLZm1PHXCbPg%2FSTZnUrWoE74LXmmvV3v8AgkwypuPp3iFO9T%2BZ67RUJqwcfk1%2FelrA3a0A%2Bdxh4njhrA4HU00zejDGoKrEBjqkAZR9p68lo7X2H7IikZztqkc490OWBV7vrDAY9R6U8rKYtaHRhABoAxXWEOxvTSWrCjHHMPK9qdBRM97osLg%2Bd0kfvwVaNi9ySXm9w3GMq%2Fat5FDQMZmyGVhP%2BdhxVAJiM%2FbbXRZzS6uES1oRkoRwiW2AmrpjkVqiRnBdY45XdsihpkmBrVgUQWYIsJdi7BYCZhDhdHa%2BuM5dLA6q9VG2hXiO0Xlr&X-Amz-Signature=d6e562bca21939f6662ae2243b189a634f50356d33027fade3f502d6bfd6f025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7W62WWU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8MmmKC1U%2BgDMOdaumVc2ci1DwIqmCSGCIZSudNXAJuQIhAPgQoCX568DfqQ5hvPOePorwNuFFPMsvqQ9YivKq1qTAKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQiAqqKGyweBTbznUq3AOA%2BviHx79urQWnLxu3pHa9onbNZrq4P99RM6XxYNmpaECq3a52Y6hZiKXB9jGyf1Met%2FjmwcOa3MmWIrszM33aXSPvsuUhNZG381YyTJdIpLe46zBfewhZRnKX5XzG4NiKUhEXjwrVgRrbNRZuCfpuI2%2BCNBy4DEbC8MhgMkHuB%2B4L95fUxPh1MN1Inbi3s0vtYeOHqpMcj4SlR778zNaYwr6EOi9U6ILe%2B72dcCTWTMZPWjknIFZar6pR7mG4S5Z3G%2F56%2FWCcq78cbd76Q%2BLdjqfiNmV0tYa9Or92hJ6OgR8aMwuMGewYI7cF3eavRy2sJH5v2EnoZJt8teCLRfRMoFrfXKwgpDPGxXLUuMXiJY7v%2BhjpxGoSCp0EdtWljfDnE8Sk75jX19Fe3PjzpBLuh3%2Fpq6%2FMJ9ZlihCqMkqHX%2B00uIEci6j%2BUIWtqdRZfdUxrXLhXPrrZ6d5CtYW6SMZOzn11bTrwro7l%2F5lcREnbUIWGnESWcC%2BbjNA0ad4nnTQZw9bEB1pGYKnkGiJEhk9b1YH%2FHtWY8t2TfgLZm1PHXCbPg%2FSTZnUrWoE74LXmmvV3v8AgkwypuPp3iFO9T%2BZ67RUJqwcfk1%2FelrA3a0A%2Bdxh4njhrA4HU00zejDGoKrEBjqkAZR9p68lo7X2H7IikZztqkc490OWBV7vrDAY9R6U8rKYtaHRhABoAxXWEOxvTSWrCjHHMPK9qdBRM97osLg%2Bd0kfvwVaNi9ySXm9w3GMq%2Fat5FDQMZmyGVhP%2BdhxVAJiM%2FbbXRZzS6uES1oRkoRwiW2AmrpjkVqiRnBdY45XdsihpkmBrVgUQWYIsJdi7BYCZhDhdHa%2BuM5dLA6q9VG2hXiO0Xlr&X-Amz-Signature=4ccfd51577055c25449978b830e05a4554e3a1b55c29bd0bf58661b5d7366b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7W62WWU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8MmmKC1U%2BgDMOdaumVc2ci1DwIqmCSGCIZSudNXAJuQIhAPgQoCX568DfqQ5hvPOePorwNuFFPMsvqQ9YivKq1qTAKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQiAqqKGyweBTbznUq3AOA%2BviHx79urQWnLxu3pHa9onbNZrq4P99RM6XxYNmpaECq3a52Y6hZiKXB9jGyf1Met%2FjmwcOa3MmWIrszM33aXSPvsuUhNZG381YyTJdIpLe46zBfewhZRnKX5XzG4NiKUhEXjwrVgRrbNRZuCfpuI2%2BCNBy4DEbC8MhgMkHuB%2B4L95fUxPh1MN1Inbi3s0vtYeOHqpMcj4SlR778zNaYwr6EOi9U6ILe%2B72dcCTWTMZPWjknIFZar6pR7mG4S5Z3G%2F56%2FWCcq78cbd76Q%2BLdjqfiNmV0tYa9Or92hJ6OgR8aMwuMGewYI7cF3eavRy2sJH5v2EnoZJt8teCLRfRMoFrfXKwgpDPGxXLUuMXiJY7v%2BhjpxGoSCp0EdtWljfDnE8Sk75jX19Fe3PjzpBLuh3%2Fpq6%2FMJ9ZlihCqMkqHX%2B00uIEci6j%2BUIWtqdRZfdUxrXLhXPrrZ6d5CtYW6SMZOzn11bTrwro7l%2F5lcREnbUIWGnESWcC%2BbjNA0ad4nnTQZw9bEB1pGYKnkGiJEhk9b1YH%2FHtWY8t2TfgLZm1PHXCbPg%2FSTZnUrWoE74LXmmvV3v8AgkwypuPp3iFO9T%2BZ67RUJqwcfk1%2FelrA3a0A%2Bdxh4njhrA4HU00zejDGoKrEBjqkAZR9p68lo7X2H7IikZztqkc490OWBV7vrDAY9R6U8rKYtaHRhABoAxXWEOxvTSWrCjHHMPK9qdBRM97osLg%2Bd0kfvwVaNi9ySXm9w3GMq%2Fat5FDQMZmyGVhP%2BdhxVAJiM%2FbbXRZzS6uES1oRkoRwiW2AmrpjkVqiRnBdY45XdsihpkmBrVgUQWYIsJdi7BYCZhDhdHa%2BuM5dLA6q9VG2hXiO0Xlr&X-Amz-Signature=b5b2933a493d469a2d95d85ff281b48955634dcffd5e4ca83da8ae8fb0800953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7W62WWU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8MmmKC1U%2BgDMOdaumVc2ci1DwIqmCSGCIZSudNXAJuQIhAPgQoCX568DfqQ5hvPOePorwNuFFPMsvqQ9YivKq1qTAKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQiAqqKGyweBTbznUq3AOA%2BviHx79urQWnLxu3pHa9onbNZrq4P99RM6XxYNmpaECq3a52Y6hZiKXB9jGyf1Met%2FjmwcOa3MmWIrszM33aXSPvsuUhNZG381YyTJdIpLe46zBfewhZRnKX5XzG4NiKUhEXjwrVgRrbNRZuCfpuI2%2BCNBy4DEbC8MhgMkHuB%2B4L95fUxPh1MN1Inbi3s0vtYeOHqpMcj4SlR778zNaYwr6EOi9U6ILe%2B72dcCTWTMZPWjknIFZar6pR7mG4S5Z3G%2F56%2FWCcq78cbd76Q%2BLdjqfiNmV0tYa9Or92hJ6OgR8aMwuMGewYI7cF3eavRy2sJH5v2EnoZJt8teCLRfRMoFrfXKwgpDPGxXLUuMXiJY7v%2BhjpxGoSCp0EdtWljfDnE8Sk75jX19Fe3PjzpBLuh3%2Fpq6%2FMJ9ZlihCqMkqHX%2B00uIEci6j%2BUIWtqdRZfdUxrXLhXPrrZ6d5CtYW6SMZOzn11bTrwro7l%2F5lcREnbUIWGnESWcC%2BbjNA0ad4nnTQZw9bEB1pGYKnkGiJEhk9b1YH%2FHtWY8t2TfgLZm1PHXCbPg%2FSTZnUrWoE74LXmmvV3v8AgkwypuPp3iFO9T%2BZ67RUJqwcfk1%2FelrA3a0A%2Bdxh4njhrA4HU00zejDGoKrEBjqkAZR9p68lo7X2H7IikZztqkc490OWBV7vrDAY9R6U8rKYtaHRhABoAxXWEOxvTSWrCjHHMPK9qdBRM97osLg%2Bd0kfvwVaNi9ySXm9w3GMq%2Fat5FDQMZmyGVhP%2BdhxVAJiM%2FbbXRZzS6uES1oRkoRwiW2AmrpjkVqiRnBdY45XdsihpkmBrVgUQWYIsJdi7BYCZhDhdHa%2BuM5dLA6q9VG2hXiO0Xlr&X-Amz-Signature=068f3b94afe6285ee8b7e08420f7d783c996fd81945b51cc238faf1e8261a9ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7W62WWU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8MmmKC1U%2BgDMOdaumVc2ci1DwIqmCSGCIZSudNXAJuQIhAPgQoCX568DfqQ5hvPOePorwNuFFPMsvqQ9YivKq1qTAKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQiAqqKGyweBTbznUq3AOA%2BviHx79urQWnLxu3pHa9onbNZrq4P99RM6XxYNmpaECq3a52Y6hZiKXB9jGyf1Met%2FjmwcOa3MmWIrszM33aXSPvsuUhNZG381YyTJdIpLe46zBfewhZRnKX5XzG4NiKUhEXjwrVgRrbNRZuCfpuI2%2BCNBy4DEbC8MhgMkHuB%2B4L95fUxPh1MN1Inbi3s0vtYeOHqpMcj4SlR778zNaYwr6EOi9U6ILe%2B72dcCTWTMZPWjknIFZar6pR7mG4S5Z3G%2F56%2FWCcq78cbd76Q%2BLdjqfiNmV0tYa9Or92hJ6OgR8aMwuMGewYI7cF3eavRy2sJH5v2EnoZJt8teCLRfRMoFrfXKwgpDPGxXLUuMXiJY7v%2BhjpxGoSCp0EdtWljfDnE8Sk75jX19Fe3PjzpBLuh3%2Fpq6%2FMJ9ZlihCqMkqHX%2B00uIEci6j%2BUIWtqdRZfdUxrXLhXPrrZ6d5CtYW6SMZOzn11bTrwro7l%2F5lcREnbUIWGnESWcC%2BbjNA0ad4nnTQZw9bEB1pGYKnkGiJEhk9b1YH%2FHtWY8t2TfgLZm1PHXCbPg%2FSTZnUrWoE74LXmmvV3v8AgkwypuPp3iFO9T%2BZ67RUJqwcfk1%2FelrA3a0A%2Bdxh4njhrA4HU00zejDGoKrEBjqkAZR9p68lo7X2H7IikZztqkc490OWBV7vrDAY9R6U8rKYtaHRhABoAxXWEOxvTSWrCjHHMPK9qdBRM97osLg%2Bd0kfvwVaNi9ySXm9w3GMq%2Fat5FDQMZmyGVhP%2BdhxVAJiM%2FbbXRZzS6uES1oRkoRwiW2AmrpjkVqiRnBdY45XdsihpkmBrVgUQWYIsJdi7BYCZhDhdHa%2BuM5dLA6q9VG2hXiO0Xlr&X-Amz-Signature=5a9c48a7f212be6a204c33f418e3f6e3c163f2333b113cc87eb7c4b0db4d6458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
