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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USWOWDD%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmV%2FfSv7XmunA9W538OVmdcwH%2Bgvc8Bt5S5bEc4RAznAiEAykvJVKw4SLMgBGGC4tyFktTvSpcs8aHDlwr8kxmW95kqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0XVIT9K6sp%2FZL6qCrcA5cDGr%2B%2F3fjsdflvHRlICETz5XXu0FAbtPtH2MFFtMjqT4h6qKk7BmugzFeKDoR3m%2FLKKN9luqbQtZsL0prN8b4au31vy%2ByJt8MU6WSI267P3O1fvXWWUqCP9grBxTUqYzplDsdEGd17BLkB4UaA%2FS8YB1Q3ccwC%2BkpMeuBquaWPcxg4%2F9GaggwvgelQi3ZDno%2Fk9mmciO%2Bp2lvRay9sXy9UggujYkK1l2CSj6ss6fma2s86SIw%2Bwd4D4eBjhA9%2BpOCmTFqDBny8G4JxRp0VeK87H89fabNqc%2BXCyvSHSjC3NBZUSHDihfbVHNEgNLuc%2B39hRwmJGYUmnYZckdhpWvjxrH2%2BzmNcKcJ2Cr0E94edgbcm5%2BINF5ZO4R%2Bi29E4uESQJLiCxcO0YJNF7hIH6YBbg3g9cHDozQ40jcmcK80iOmrwyTyHRhqI44f%2FJJ%2BxS620F%2FsZ05M%2F6QPGyNnRLdeimea%2BtWfMSWVaZov7V1rgUyiO8F4Vl2BzTUIbiKcaXcKmmvKkmiNa1%2FkvAAy92Er4pRQxkj7q%2BakbCDX5BYY8Q7FDqZQ0EUA6Wv4Rb8xiyGDpgl9yVhfYEfsPAZBBAMJU0sgrLIH3ED2CuYvAqX%2BogZeRAQ7mV2zzPwB8MJifgtIGOqUBoUpF9JwTD4tfke9Wyjs8j3DH5SSzaaVBTAmj7WyahpuQvbAjJPQtnTEhjWaUO8wDrgcTHDphCPs%2BZLu5zzLPVGqA4U5lgTA0JG%2FhFbPoXR4CZC28XT8yTJDeJuqFIvpExMrGgmmwWidJZ%2B%2BWb6hq4vDC1XFImUgM0B6pQEz%2FETLeVQK%2F%2BEY6iDYAY%2F1l0vJtsjjPcIPi9ZWsomPcFgG7ni2qOPG6&X-Amz-Signature=faeb32ec3d76023a7fa43584ef924f6f946e977f6b11f35b6387e552f4db57f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USWOWDD%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmV%2FfSv7XmunA9W538OVmdcwH%2Bgvc8Bt5S5bEc4RAznAiEAykvJVKw4SLMgBGGC4tyFktTvSpcs8aHDlwr8kxmW95kqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0XVIT9K6sp%2FZL6qCrcA5cDGr%2B%2F3fjsdflvHRlICETz5XXu0FAbtPtH2MFFtMjqT4h6qKk7BmugzFeKDoR3m%2FLKKN9luqbQtZsL0prN8b4au31vy%2ByJt8MU6WSI267P3O1fvXWWUqCP9grBxTUqYzplDsdEGd17BLkB4UaA%2FS8YB1Q3ccwC%2BkpMeuBquaWPcxg4%2F9GaggwvgelQi3ZDno%2Fk9mmciO%2Bp2lvRay9sXy9UggujYkK1l2CSj6ss6fma2s86SIw%2Bwd4D4eBjhA9%2BpOCmTFqDBny8G4JxRp0VeK87H89fabNqc%2BXCyvSHSjC3NBZUSHDihfbVHNEgNLuc%2B39hRwmJGYUmnYZckdhpWvjxrH2%2BzmNcKcJ2Cr0E94edgbcm5%2BINF5ZO4R%2Bi29E4uESQJLiCxcO0YJNF7hIH6YBbg3g9cHDozQ40jcmcK80iOmrwyTyHRhqI44f%2FJJ%2BxS620F%2FsZ05M%2F6QPGyNnRLdeimea%2BtWfMSWVaZov7V1rgUyiO8F4Vl2BzTUIbiKcaXcKmmvKkmiNa1%2FkvAAy92Er4pRQxkj7q%2BakbCDX5BYY8Q7FDqZQ0EUA6Wv4Rb8xiyGDpgl9yVhfYEfsPAZBBAMJU0sgrLIH3ED2CuYvAqX%2BogZeRAQ7mV2zzPwB8MJifgtIGOqUBoUpF9JwTD4tfke9Wyjs8j3DH5SSzaaVBTAmj7WyahpuQvbAjJPQtnTEhjWaUO8wDrgcTHDphCPs%2BZLu5zzLPVGqA4U5lgTA0JG%2FhFbPoXR4CZC28XT8yTJDeJuqFIvpExMrGgmmwWidJZ%2B%2BWb6hq4vDC1XFImUgM0B6pQEz%2FETLeVQK%2F%2BEY6iDYAY%2F1l0vJtsjjPcIPi9ZWsomPcFgG7ni2qOPG6&X-Amz-Signature=a83e7208e0b3cf38da4463bec533fced0231cd268b9fbdacee25c4d2bfc8a762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USWOWDD%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmV%2FfSv7XmunA9W538OVmdcwH%2Bgvc8Bt5S5bEc4RAznAiEAykvJVKw4SLMgBGGC4tyFktTvSpcs8aHDlwr8kxmW95kqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0XVIT9K6sp%2FZL6qCrcA5cDGr%2B%2F3fjsdflvHRlICETz5XXu0FAbtPtH2MFFtMjqT4h6qKk7BmugzFeKDoR3m%2FLKKN9luqbQtZsL0prN8b4au31vy%2ByJt8MU6WSI267P3O1fvXWWUqCP9grBxTUqYzplDsdEGd17BLkB4UaA%2FS8YB1Q3ccwC%2BkpMeuBquaWPcxg4%2F9GaggwvgelQi3ZDno%2Fk9mmciO%2Bp2lvRay9sXy9UggujYkK1l2CSj6ss6fma2s86SIw%2Bwd4D4eBjhA9%2BpOCmTFqDBny8G4JxRp0VeK87H89fabNqc%2BXCyvSHSjC3NBZUSHDihfbVHNEgNLuc%2B39hRwmJGYUmnYZckdhpWvjxrH2%2BzmNcKcJ2Cr0E94edgbcm5%2BINF5ZO4R%2Bi29E4uESQJLiCxcO0YJNF7hIH6YBbg3g9cHDozQ40jcmcK80iOmrwyTyHRhqI44f%2FJJ%2BxS620F%2FsZ05M%2F6QPGyNnRLdeimea%2BtWfMSWVaZov7V1rgUyiO8F4Vl2BzTUIbiKcaXcKmmvKkmiNa1%2FkvAAy92Er4pRQxkj7q%2BakbCDX5BYY8Q7FDqZQ0EUA6Wv4Rb8xiyGDpgl9yVhfYEfsPAZBBAMJU0sgrLIH3ED2CuYvAqX%2BogZeRAQ7mV2zzPwB8MJifgtIGOqUBoUpF9JwTD4tfke9Wyjs8j3DH5SSzaaVBTAmj7WyahpuQvbAjJPQtnTEhjWaUO8wDrgcTHDphCPs%2BZLu5zzLPVGqA4U5lgTA0JG%2FhFbPoXR4CZC28XT8yTJDeJuqFIvpExMrGgmmwWidJZ%2B%2BWb6hq4vDC1XFImUgM0B6pQEz%2FETLeVQK%2F%2BEY6iDYAY%2F1l0vJtsjjPcIPi9ZWsomPcFgG7ni2qOPG6&X-Amz-Signature=455f5a14c624dd5b5f31962ac0468826db8eea5640fa70eb531fe934e8b3cc8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USWOWDD%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmV%2FfSv7XmunA9W538OVmdcwH%2Bgvc8Bt5S5bEc4RAznAiEAykvJVKw4SLMgBGGC4tyFktTvSpcs8aHDlwr8kxmW95kqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0XVIT9K6sp%2FZL6qCrcA5cDGr%2B%2F3fjsdflvHRlICETz5XXu0FAbtPtH2MFFtMjqT4h6qKk7BmugzFeKDoR3m%2FLKKN9luqbQtZsL0prN8b4au31vy%2ByJt8MU6WSI267P3O1fvXWWUqCP9grBxTUqYzplDsdEGd17BLkB4UaA%2FS8YB1Q3ccwC%2BkpMeuBquaWPcxg4%2F9GaggwvgelQi3ZDno%2Fk9mmciO%2Bp2lvRay9sXy9UggujYkK1l2CSj6ss6fma2s86SIw%2Bwd4D4eBjhA9%2BpOCmTFqDBny8G4JxRp0VeK87H89fabNqc%2BXCyvSHSjC3NBZUSHDihfbVHNEgNLuc%2B39hRwmJGYUmnYZckdhpWvjxrH2%2BzmNcKcJ2Cr0E94edgbcm5%2BINF5ZO4R%2Bi29E4uESQJLiCxcO0YJNF7hIH6YBbg3g9cHDozQ40jcmcK80iOmrwyTyHRhqI44f%2FJJ%2BxS620F%2FsZ05M%2F6QPGyNnRLdeimea%2BtWfMSWVaZov7V1rgUyiO8F4Vl2BzTUIbiKcaXcKmmvKkmiNa1%2FkvAAy92Er4pRQxkj7q%2BakbCDX5BYY8Q7FDqZQ0EUA6Wv4Rb8xiyGDpgl9yVhfYEfsPAZBBAMJU0sgrLIH3ED2CuYvAqX%2BogZeRAQ7mV2zzPwB8MJifgtIGOqUBoUpF9JwTD4tfke9Wyjs8j3DH5SSzaaVBTAmj7WyahpuQvbAjJPQtnTEhjWaUO8wDrgcTHDphCPs%2BZLu5zzLPVGqA4U5lgTA0JG%2FhFbPoXR4CZC28XT8yTJDeJuqFIvpExMrGgmmwWidJZ%2B%2BWb6hq4vDC1XFImUgM0B6pQEz%2FETLeVQK%2F%2BEY6iDYAY%2F1l0vJtsjjPcIPi9ZWsomPcFgG7ni2qOPG6&X-Amz-Signature=fc3fd658eefb9346e7d081a2f83466853204fb4b1094ad500728edac993f48fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USWOWDD%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmV%2FfSv7XmunA9W538OVmdcwH%2Bgvc8Bt5S5bEc4RAznAiEAykvJVKw4SLMgBGGC4tyFktTvSpcs8aHDlwr8kxmW95kqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0XVIT9K6sp%2FZL6qCrcA5cDGr%2B%2F3fjsdflvHRlICETz5XXu0FAbtPtH2MFFtMjqT4h6qKk7BmugzFeKDoR3m%2FLKKN9luqbQtZsL0prN8b4au31vy%2ByJt8MU6WSI267P3O1fvXWWUqCP9grBxTUqYzplDsdEGd17BLkB4UaA%2FS8YB1Q3ccwC%2BkpMeuBquaWPcxg4%2F9GaggwvgelQi3ZDno%2Fk9mmciO%2Bp2lvRay9sXy9UggujYkK1l2CSj6ss6fma2s86SIw%2Bwd4D4eBjhA9%2BpOCmTFqDBny8G4JxRp0VeK87H89fabNqc%2BXCyvSHSjC3NBZUSHDihfbVHNEgNLuc%2B39hRwmJGYUmnYZckdhpWvjxrH2%2BzmNcKcJ2Cr0E94edgbcm5%2BINF5ZO4R%2Bi29E4uESQJLiCxcO0YJNF7hIH6YBbg3g9cHDozQ40jcmcK80iOmrwyTyHRhqI44f%2FJJ%2BxS620F%2FsZ05M%2F6QPGyNnRLdeimea%2BtWfMSWVaZov7V1rgUyiO8F4Vl2BzTUIbiKcaXcKmmvKkmiNa1%2FkvAAy92Er4pRQxkj7q%2BakbCDX5BYY8Q7FDqZQ0EUA6Wv4Rb8xiyGDpgl9yVhfYEfsPAZBBAMJU0sgrLIH3ED2CuYvAqX%2BogZeRAQ7mV2zzPwB8MJifgtIGOqUBoUpF9JwTD4tfke9Wyjs8j3DH5SSzaaVBTAmj7WyahpuQvbAjJPQtnTEhjWaUO8wDrgcTHDphCPs%2BZLu5zzLPVGqA4U5lgTA0JG%2FhFbPoXR4CZC28XT8yTJDeJuqFIvpExMrGgmmwWidJZ%2B%2BWb6hq4vDC1XFImUgM0B6pQEz%2FETLeVQK%2F%2BEY6iDYAY%2F1l0vJtsjjPcIPi9ZWsomPcFgG7ni2qOPG6&X-Amz-Signature=ac1d196bca8e839b413dd832f7f8971b6e2768645171d7a3eb287d7cae36998c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USWOWDD%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmV%2FfSv7XmunA9W538OVmdcwH%2Bgvc8Bt5S5bEc4RAznAiEAykvJVKw4SLMgBGGC4tyFktTvSpcs8aHDlwr8kxmW95kqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0XVIT9K6sp%2FZL6qCrcA5cDGr%2B%2F3fjsdflvHRlICETz5XXu0FAbtPtH2MFFtMjqT4h6qKk7BmugzFeKDoR3m%2FLKKN9luqbQtZsL0prN8b4au31vy%2ByJt8MU6WSI267P3O1fvXWWUqCP9grBxTUqYzplDsdEGd17BLkB4UaA%2FS8YB1Q3ccwC%2BkpMeuBquaWPcxg4%2F9GaggwvgelQi3ZDno%2Fk9mmciO%2Bp2lvRay9sXy9UggujYkK1l2CSj6ss6fma2s86SIw%2Bwd4D4eBjhA9%2BpOCmTFqDBny8G4JxRp0VeK87H89fabNqc%2BXCyvSHSjC3NBZUSHDihfbVHNEgNLuc%2B39hRwmJGYUmnYZckdhpWvjxrH2%2BzmNcKcJ2Cr0E94edgbcm5%2BINF5ZO4R%2Bi29E4uESQJLiCxcO0YJNF7hIH6YBbg3g9cHDozQ40jcmcK80iOmrwyTyHRhqI44f%2FJJ%2BxS620F%2FsZ05M%2F6QPGyNnRLdeimea%2BtWfMSWVaZov7V1rgUyiO8F4Vl2BzTUIbiKcaXcKmmvKkmiNa1%2FkvAAy92Er4pRQxkj7q%2BakbCDX5BYY8Q7FDqZQ0EUA6Wv4Rb8xiyGDpgl9yVhfYEfsPAZBBAMJU0sgrLIH3ED2CuYvAqX%2BogZeRAQ7mV2zzPwB8MJifgtIGOqUBoUpF9JwTD4tfke9Wyjs8j3DH5SSzaaVBTAmj7WyahpuQvbAjJPQtnTEhjWaUO8wDrgcTHDphCPs%2BZLu5zzLPVGqA4U5lgTA0JG%2FhFbPoXR4CZC28XT8yTJDeJuqFIvpExMrGgmmwWidJZ%2B%2BWb6hq4vDC1XFImUgM0B6pQEz%2FETLeVQK%2F%2BEY6iDYAY%2F1l0vJtsjjPcIPi9ZWsomPcFgG7ni2qOPG6&X-Amz-Signature=35ae42b742958464d9ca334133e874cd56d9f8866878f1a47f97bc20871b4324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USWOWDD%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmV%2FfSv7XmunA9W538OVmdcwH%2Bgvc8Bt5S5bEc4RAznAiEAykvJVKw4SLMgBGGC4tyFktTvSpcs8aHDlwr8kxmW95kqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0XVIT9K6sp%2FZL6qCrcA5cDGr%2B%2F3fjsdflvHRlICETz5XXu0FAbtPtH2MFFtMjqT4h6qKk7BmugzFeKDoR3m%2FLKKN9luqbQtZsL0prN8b4au31vy%2ByJt8MU6WSI267P3O1fvXWWUqCP9grBxTUqYzplDsdEGd17BLkB4UaA%2FS8YB1Q3ccwC%2BkpMeuBquaWPcxg4%2F9GaggwvgelQi3ZDno%2Fk9mmciO%2Bp2lvRay9sXy9UggujYkK1l2CSj6ss6fma2s86SIw%2Bwd4D4eBjhA9%2BpOCmTFqDBny8G4JxRp0VeK87H89fabNqc%2BXCyvSHSjC3NBZUSHDihfbVHNEgNLuc%2B39hRwmJGYUmnYZckdhpWvjxrH2%2BzmNcKcJ2Cr0E94edgbcm5%2BINF5ZO4R%2Bi29E4uESQJLiCxcO0YJNF7hIH6YBbg3g9cHDozQ40jcmcK80iOmrwyTyHRhqI44f%2FJJ%2BxS620F%2FsZ05M%2F6QPGyNnRLdeimea%2BtWfMSWVaZov7V1rgUyiO8F4Vl2BzTUIbiKcaXcKmmvKkmiNa1%2FkvAAy92Er4pRQxkj7q%2BakbCDX5BYY8Q7FDqZQ0EUA6Wv4Rb8xiyGDpgl9yVhfYEfsPAZBBAMJU0sgrLIH3ED2CuYvAqX%2BogZeRAQ7mV2zzPwB8MJifgtIGOqUBoUpF9JwTD4tfke9Wyjs8j3DH5SSzaaVBTAmj7WyahpuQvbAjJPQtnTEhjWaUO8wDrgcTHDphCPs%2BZLu5zzLPVGqA4U5lgTA0JG%2FhFbPoXR4CZC28XT8yTJDeJuqFIvpExMrGgmmwWidJZ%2B%2BWb6hq4vDC1XFImUgM0B6pQEz%2FETLeVQK%2F%2BEY6iDYAY%2F1l0vJtsjjPcIPi9ZWsomPcFgG7ni2qOPG6&X-Amz-Signature=dc035a43060d3a30c86e3da53a2dee1b83e0e7cf97b1f6d1f4407dc1117230fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USWOWDD%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmV%2FfSv7XmunA9W538OVmdcwH%2Bgvc8Bt5S5bEc4RAznAiEAykvJVKw4SLMgBGGC4tyFktTvSpcs8aHDlwr8kxmW95kqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0XVIT9K6sp%2FZL6qCrcA5cDGr%2B%2F3fjsdflvHRlICETz5XXu0FAbtPtH2MFFtMjqT4h6qKk7BmugzFeKDoR3m%2FLKKN9luqbQtZsL0prN8b4au31vy%2ByJt8MU6WSI267P3O1fvXWWUqCP9grBxTUqYzplDsdEGd17BLkB4UaA%2FS8YB1Q3ccwC%2BkpMeuBquaWPcxg4%2F9GaggwvgelQi3ZDno%2Fk9mmciO%2Bp2lvRay9sXy9UggujYkK1l2CSj6ss6fma2s86SIw%2Bwd4D4eBjhA9%2BpOCmTFqDBny8G4JxRp0VeK87H89fabNqc%2BXCyvSHSjC3NBZUSHDihfbVHNEgNLuc%2B39hRwmJGYUmnYZckdhpWvjxrH2%2BzmNcKcJ2Cr0E94edgbcm5%2BINF5ZO4R%2Bi29E4uESQJLiCxcO0YJNF7hIH6YBbg3g9cHDozQ40jcmcK80iOmrwyTyHRhqI44f%2FJJ%2BxS620F%2FsZ05M%2F6QPGyNnRLdeimea%2BtWfMSWVaZov7V1rgUyiO8F4Vl2BzTUIbiKcaXcKmmvKkmiNa1%2FkvAAy92Er4pRQxkj7q%2BakbCDX5BYY8Q7FDqZQ0EUA6Wv4Rb8xiyGDpgl9yVhfYEfsPAZBBAMJU0sgrLIH3ED2CuYvAqX%2BogZeRAQ7mV2zzPwB8MJifgtIGOqUBoUpF9JwTD4tfke9Wyjs8j3DH5SSzaaVBTAmj7WyahpuQvbAjJPQtnTEhjWaUO8wDrgcTHDphCPs%2BZLu5zzLPVGqA4U5lgTA0JG%2FhFbPoXR4CZC28XT8yTJDeJuqFIvpExMrGgmmwWidJZ%2B%2BWb6hq4vDC1XFImUgM0B6pQEz%2FETLeVQK%2F%2BEY6iDYAY%2F1l0vJtsjjPcIPi9ZWsomPcFgG7ni2qOPG6&X-Amz-Signature=640e4166efd433d6fc9a2c384871785f2de5880b4dff1b00a3a006e8b6c1ebca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USWOWDD%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmV%2FfSv7XmunA9W538OVmdcwH%2Bgvc8Bt5S5bEc4RAznAiEAykvJVKw4SLMgBGGC4tyFktTvSpcs8aHDlwr8kxmW95kqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0XVIT9K6sp%2FZL6qCrcA5cDGr%2B%2F3fjsdflvHRlICETz5XXu0FAbtPtH2MFFtMjqT4h6qKk7BmugzFeKDoR3m%2FLKKN9luqbQtZsL0prN8b4au31vy%2ByJt8MU6WSI267P3O1fvXWWUqCP9grBxTUqYzplDsdEGd17BLkB4UaA%2FS8YB1Q3ccwC%2BkpMeuBquaWPcxg4%2F9GaggwvgelQi3ZDno%2Fk9mmciO%2Bp2lvRay9sXy9UggujYkK1l2CSj6ss6fma2s86SIw%2Bwd4D4eBjhA9%2BpOCmTFqDBny8G4JxRp0VeK87H89fabNqc%2BXCyvSHSjC3NBZUSHDihfbVHNEgNLuc%2B39hRwmJGYUmnYZckdhpWvjxrH2%2BzmNcKcJ2Cr0E94edgbcm5%2BINF5ZO4R%2Bi29E4uESQJLiCxcO0YJNF7hIH6YBbg3g9cHDozQ40jcmcK80iOmrwyTyHRhqI44f%2FJJ%2BxS620F%2FsZ05M%2F6QPGyNnRLdeimea%2BtWfMSWVaZov7V1rgUyiO8F4Vl2BzTUIbiKcaXcKmmvKkmiNa1%2FkvAAy92Er4pRQxkj7q%2BakbCDX5BYY8Q7FDqZQ0EUA6Wv4Rb8xiyGDpgl9yVhfYEfsPAZBBAMJU0sgrLIH3ED2CuYvAqX%2BogZeRAQ7mV2zzPwB8MJifgtIGOqUBoUpF9JwTD4tfke9Wyjs8j3DH5SSzaaVBTAmj7WyahpuQvbAjJPQtnTEhjWaUO8wDrgcTHDphCPs%2BZLu5zzLPVGqA4U5lgTA0JG%2FhFbPoXR4CZC28XT8yTJDeJuqFIvpExMrGgmmwWidJZ%2B%2BWb6hq4vDC1XFImUgM0B6pQEz%2FETLeVQK%2F%2BEY6iDYAY%2F1l0vJtsjjPcIPi9ZWsomPcFgG7ni2qOPG6&X-Amz-Signature=9e0e8de56b128f0001db0a3f050b04c8ece138ba9a0f5d89ac5f9b89740913b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USWOWDD%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmV%2FfSv7XmunA9W538OVmdcwH%2Bgvc8Bt5S5bEc4RAznAiEAykvJVKw4SLMgBGGC4tyFktTvSpcs8aHDlwr8kxmW95kqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0XVIT9K6sp%2FZL6qCrcA5cDGr%2B%2F3fjsdflvHRlICETz5XXu0FAbtPtH2MFFtMjqT4h6qKk7BmugzFeKDoR3m%2FLKKN9luqbQtZsL0prN8b4au31vy%2ByJt8MU6WSI267P3O1fvXWWUqCP9grBxTUqYzplDsdEGd17BLkB4UaA%2FS8YB1Q3ccwC%2BkpMeuBquaWPcxg4%2F9GaggwvgelQi3ZDno%2Fk9mmciO%2Bp2lvRay9sXy9UggujYkK1l2CSj6ss6fma2s86SIw%2Bwd4D4eBjhA9%2BpOCmTFqDBny8G4JxRp0VeK87H89fabNqc%2BXCyvSHSjC3NBZUSHDihfbVHNEgNLuc%2B39hRwmJGYUmnYZckdhpWvjxrH2%2BzmNcKcJ2Cr0E94edgbcm5%2BINF5ZO4R%2Bi29E4uESQJLiCxcO0YJNF7hIH6YBbg3g9cHDozQ40jcmcK80iOmrwyTyHRhqI44f%2FJJ%2BxS620F%2FsZ05M%2F6QPGyNnRLdeimea%2BtWfMSWVaZov7V1rgUyiO8F4Vl2BzTUIbiKcaXcKmmvKkmiNa1%2FkvAAy92Er4pRQxkj7q%2BakbCDX5BYY8Q7FDqZQ0EUA6Wv4Rb8xiyGDpgl9yVhfYEfsPAZBBAMJU0sgrLIH3ED2CuYvAqX%2BogZeRAQ7mV2zzPwB8MJifgtIGOqUBoUpF9JwTD4tfke9Wyjs8j3DH5SSzaaVBTAmj7WyahpuQvbAjJPQtnTEhjWaUO8wDrgcTHDphCPs%2BZLu5zzLPVGqA4U5lgTA0JG%2FhFbPoXR4CZC28XT8yTJDeJuqFIvpExMrGgmmwWidJZ%2B%2BWb6hq4vDC1XFImUgM0B6pQEz%2FETLeVQK%2F%2BEY6iDYAY%2F1l0vJtsjjPcIPi9ZWsomPcFgG7ni2qOPG6&X-Amz-Signature=8247cc962c382dcd021b161098737f46611c33febc9f47df2e7e1be7992f852a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH64PJCE%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaLYMkDR7aUsHHxz6BlPrYXkpuUH9caSR0mIdYqrQbdQIgabfVRfo2sxVwCepEA579s6nRu%2F6DNLkpnjdtm2dXfD0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATHpHAHEIMx7htr7SrcAz49GIw4hKc4tvslPBilbI6cviKySoaANLNgxf39YrkLMm1UJh4dvqwInYb4L%2FiO6wO2MMjPQXm1OVkTSBLjiC9RZa%2BNj4Z2OyRajiNZZESw4zCf5m%2BfI1Q06OuTbcx51kv7IlTyjW1Ph99rB%2FRJgvIRGQFgm46rKoTjb%2Btmao8bgQRuhlQksjf72nViBSawyf6gW9N%2BTLUAEh9tP%2BlUSSvbhSiCK%2FUc6FCTQd3XfO1fXBd5ywj8Lh4GIaqJLh4zMK5LfF8C9BVDinV%2BteWbQtym3VjELQ%2BOYNTfOQKCpVTfrNKRVpr8%2FihhC9hCKEPllLbl0g%2FAa5wPNA6WpN%2BodRBzR5aaos90Z4Z6048R7I7zKVxkfEPra7ZXyZg5VuLa8LVILtOQRlwWzjg1ZUaTpG2a9TpgKFtlQdeo7rHLSPOMet92Mssqw6hs%2Fby6HyDj0I2bLVN%2Fa%2Bv30s%2FEDGl6tRyqaTsQm%2B7oFgCS5%2B0gKZwc%2FEjx%2FSDG3r5%2FjE7KUNiT9AhggzTyxG4w1RKm5%2FppmQsHE5OIoHap%2B7ovjGtJ%2F0KF3ZMGqpEhkcbnq7sJgNXUsR3ZS14hA453I9jItYefsQMfvl2O2F43WDXdnMCL6B%2F1wZ%2BrVdRA6%2FwdfQ2wMKiggtIGOqUBRb20KLM3RJkIs7D%2BcN3HVxjVpZNqJs%2FpqAc8TJOHTDXelwefwhpAIXRHJUrSFQfPCl%2B79n9OZUe0MS8MVQcUAzjznirlyjDyiLLxzg7ygn1wKkcZUmjxh9jhW3s0k86WeUncTnh4y0DNc5aQv9gy9fq2WFsHw2RBzCROzX9IIhhvILqZABjLLjxaIFDofqsNRF3OWGXiz06rHFNyOUAnaYntEnSu&X-Amz-Signature=2df146b40671ceba323c4243c93a85c8385ad17c4a06119d807476016ac6ee6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FZUDOAB%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFUS7c3DKwFhLQSvrBbEA1acrAkVpd1gC6JxETYyES9AIhAKe8BSympNt8wlUxYET6Xwep2IBALRQJQ%2BD%2BVbNskH29KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BGGG2W0hBNe0tWAMq3AOtWfCK3Ifa3rWBPWQeNcNMmJBK3Mo%2FKGkaIijUHcCbVwDu%2BUPZiJ0guF2W6l%2BmLkqyv39XNgyQtpDLovEX%2BZLMM8yiKI09ADerSrndKE40G3dwoBgljIo9vBFmzb6XSfNVe59iaOy88YVcESjw2gn8Y%2FhCegrbYsMUlhVYzxpaMbPbkrDbOnHP76CkiEftTRfEq0rOIFgRQgCAq8ivy%2BS4qamPNohgg7GDeF%2B6LC3sNJVc8AGPjWN92u%2BSmf0MO4wsUkpmzoRkvxhcUTPe%2FsTJmSw5nCwZY3et7MfXmqCIkqA0O0XiYk5E0%2B4j3KB%2FwTxxw7vYofjOlISk%2Bf80%2FU7IaNjXVZevA%2BxFdhewxB2AkMEh07YKoy0ocE42arsNxQwSxNmYpiICd7h5zz5yR%2BlTkBXIGDPnKDy8EiVvQfZUAC%2F4aamA92uWE%2Fccf9QjaFLFyl8Xm3l9KXSFgTSczfteMsl2VZuPnIxU%2BMR70PZuYIvKjxPooOS8JYvi2sK69HdetkPI37oMjAoPYsW7An6WEq0csPtrduKxFpXdTnTmNfWpe%2FfxUuC8UxcRQ9sHu4di0TFOy13pwaSGi1vkVC7UGgJrjxS1jk4x2owFfar%2F04qO1aTG%2F3nex9AdAjChoYLSBjqkAQwPrdREWxMSZ6M8evFDs967%2BKd6CfbPzCuUIFRI3pvUWEefGvtnCxBSIjqcAH5AbkTi7ZhS1EMqgPlHwZ%2FF0guTTeGnoK7TEoSFurkvCYvTwOVSDiH5tEsMMNrF6ORGcFu4mEHGdD3%2FJ6Rq9VetFWiXafWFJhDUV%2BgeEeP%2BCa1dFo4m8OdcAbKhb2Wkx48Oo2yqpIE0zyslPggvk3bN4kEqBjPX&X-Amz-Signature=4455fead081fe7e7278ed47dd4fe2bd6644d162ad17a1ef21fb525e5aa8376e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2AD2W3%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzD8lnId%2FbaZhH16hV4qPa2UNaRmSEFD%2FPeGhl0lEZQAiA1lko3wpnsHa5Azm7%2BlC8VoREOPDzPr%2BJ6Yn08mjNktiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6GaLaknlqp5D%2Bh0gKtwDnuq7gqKcZmbASD2h%2Bza5Na0K3y9jYhM1UJzW5evvXBx%2FKn1EMYGCzt%2FrzMV7632W5vz4DGxYvCVXOFPlRzXfZ%2B5vv2TzQghYzmF6Po%2FJf1q%2BB%2F0uHnaNP78PNqbYzzrDmv95GQ0ddFbr5aH6%2FX2qJTWeLc38%2FGUCEIkcoQIH%2FVVrcukaaRPlG9Kuo%2FjX5AzQnfLft2KC1PKum8FNaxoolp9zsnuoj6pCZdLn4zZ%2FfrEe7Z1zxz39jVG9sGDWDEBgK9hLlQAS8MWiBkazh4bgdKMr3dxz4aHEzXq50paMpE1hs8KURsWoWwYlxA9N8deY66EDXAf5KowIZPOslSnSJFzx7I8dynoUe%2BAjGTDNxonDFE49jI%2BR2%2B%2BvnqquQlp5c3sqxyxN77ROnt9d1HzsS5TCxaFjIOfOfBjH2SO7wwm5zD76sPAGrdzCdX0Xt9mWTMhojnQru%2FlchJVbfgydJca74ReoN2aKL0W9tUHbvrqynKjRyIRoRZ13D%2B57WA3IGFbz1shamxAUL7XZGFnerIYjBUAZdxmTW8E%2FbxaQ2e0q2Tp1UgqEAKaub5Dl8VRLRQmG9BcMOsS%2Frihf9EphxDFx5uYoMJ%2F5w9or%2BKHz6F8yEcsAY%2Fl6OuXxDZAwj56C0gY6pgH1zB3DDuuyB1TvwHVnlst26XYc3dhreWtI1ozwKWATV8kqfl3W5cQsAa6qicgyjeof2uXyDKS5FM%2F0pN3zzvwwLPGIwYj1tceZUZ1d4yS0%2BL01%2BWYhYRGXGNRSx58jv7BwNIfqH5cVpRVf5tbFf%2FnHsBpjnbUcNNvJjQ9rIte0jMpVljFtjGnjosnpcNSS%2B0czVxv6oXDkB2PyrR2CyrpCr0AFC6R9&X-Amz-Signature=56d306716a03fd142aad1a6ca7ca55a001411f5bf287519dfcfd60ca7d55825e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USWOWDD%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmV%2FfSv7XmunA9W538OVmdcwH%2Bgvc8Bt5S5bEc4RAznAiEAykvJVKw4SLMgBGGC4tyFktTvSpcs8aHDlwr8kxmW95kqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0XVIT9K6sp%2FZL6qCrcA5cDGr%2B%2F3fjsdflvHRlICETz5XXu0FAbtPtH2MFFtMjqT4h6qKk7BmugzFeKDoR3m%2FLKKN9luqbQtZsL0prN8b4au31vy%2ByJt8MU6WSI267P3O1fvXWWUqCP9grBxTUqYzplDsdEGd17BLkB4UaA%2FS8YB1Q3ccwC%2BkpMeuBquaWPcxg4%2F9GaggwvgelQi3ZDno%2Fk9mmciO%2Bp2lvRay9sXy9UggujYkK1l2CSj6ss6fma2s86SIw%2Bwd4D4eBjhA9%2BpOCmTFqDBny8G4JxRp0VeK87H89fabNqc%2BXCyvSHSjC3NBZUSHDihfbVHNEgNLuc%2B39hRwmJGYUmnYZckdhpWvjxrH2%2BzmNcKcJ2Cr0E94edgbcm5%2BINF5ZO4R%2Bi29E4uESQJLiCxcO0YJNF7hIH6YBbg3g9cHDozQ40jcmcK80iOmrwyTyHRhqI44f%2FJJ%2BxS620F%2FsZ05M%2F6QPGyNnRLdeimea%2BtWfMSWVaZov7V1rgUyiO8F4Vl2BzTUIbiKcaXcKmmvKkmiNa1%2FkvAAy92Er4pRQxkj7q%2BakbCDX5BYY8Q7FDqZQ0EUA6Wv4Rb8xiyGDpgl9yVhfYEfsPAZBBAMJU0sgrLIH3ED2CuYvAqX%2BogZeRAQ7mV2zzPwB8MJifgtIGOqUBoUpF9JwTD4tfke9Wyjs8j3DH5SSzaaVBTAmj7WyahpuQvbAjJPQtnTEhjWaUO8wDrgcTHDphCPs%2BZLu5zzLPVGqA4U5lgTA0JG%2FhFbPoXR4CZC28XT8yTJDeJuqFIvpExMrGgmmwWidJZ%2B%2BWb6hq4vDC1XFImUgM0B6pQEz%2FETLeVQK%2F%2BEY6iDYAY%2F1l0vJtsjjPcIPi9ZWsomPcFgG7ni2qOPG6&X-Amz-Signature=358e3af3b5987c27f4f2dd919f124f226d31f6280baed5e59e15cf81e0c173f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLA7JJV6%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdh41eCPEsVty67zdTwru4gXLQrcsOY2HGK4Qmxiw7VAiEA%2FhmAs748t8PY7l1KSKI0%2BTQ402eaxaQnFfPpg0TCl8IqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHhQS3b25HYxjRw1SrcA1jQ1ufpEtbjZ%2Bita%2FZ%2F9nISv0d%2Fwl2uRJ9O8QeLzpB00yTDLeAGerFOhiUoqLVMEnrzOZZO8JWABdGPCcDQwZ1%2BzurWJW8Bo8cnhNqbOTVWYNZSpB5fyMsTqGZZdzLYPUmMCHzm57UG40GzgZFQ3eMHpjZSyVgyI1uXJSrd8UKn%2FFtlcDcxfoTN%2Bg2VUs63zhPODlbWbbBtY7SqFNXGxDTvvcQt061onF5QSvBLNBKuN94W8s%2FzKMZLtRuSkJnKHvq%2FVRcb0ezUZZiWpF%2BloEyQJG9UsCv9tXSRRXTIMUQ6%2BK9HMuaJMOdD87cEQ1uPMIyjXgweaaFPCRihF0uXvYNjpdhbMsZneEWv12goyjnC7uJ7FcbvsHxYdduFluELr7a1tGtnsI%2FH1AVzgrg%2FvM9YgYLS%2BVhkYblzK6uE33p8967rGwQbxnN290Y1m04qBdRdMNplt%2Bwzgs1Iv72QZEW9ZGK0LZ6%2Bw1gdh%2FpAYG7%2FJcGyHH6e7PQ7oKXkyu9WNrqJjtbbhu7svYn85GHqIIEqf7oFCydwczMfZMccp5E17rikj52qRZQP2%2BxKf3Uza5EE%2BMvldIy8XgvUhSm0q5TIAHgz6rpHzq2jAWN7Q9JZFB%2BG3r5xbBCirwXYMLyggtIGOqUBoh0%2F69F6dotva9VlMET%2Bp3blZDNjgMhG5dAbNWhbFRsbNVeHxMTTXaUUA4Eu5kPSTR5HbmZSAVvEcU0CV8zNT9EaBViXknawhBZLWTdbum1yd82YekIBykKl5qHinH7j9sxn1vXOjPbI8QOKT3X%2BYsbxE94bDD6smjShB6s%2FYy0Th%2BeFI0yem7k2jc8beS88Qr3LARIwxlvBRSrkllHM8X3glj3%2B&X-Amz-Signature=8d3a36b06225639f0a5afed761ea2cc4b3feeeaf44525055f8b0ab0403fb437c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USWOWDD%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmV%2FfSv7XmunA9W538OVmdcwH%2Bgvc8Bt5S5bEc4RAznAiEAykvJVKw4SLMgBGGC4tyFktTvSpcs8aHDlwr8kxmW95kqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0XVIT9K6sp%2FZL6qCrcA5cDGr%2B%2F3fjsdflvHRlICETz5XXu0FAbtPtH2MFFtMjqT4h6qKk7BmugzFeKDoR3m%2FLKKN9luqbQtZsL0prN8b4au31vy%2ByJt8MU6WSI267P3O1fvXWWUqCP9grBxTUqYzplDsdEGd17BLkB4UaA%2FS8YB1Q3ccwC%2BkpMeuBquaWPcxg4%2F9GaggwvgelQi3ZDno%2Fk9mmciO%2Bp2lvRay9sXy9UggujYkK1l2CSj6ss6fma2s86SIw%2Bwd4D4eBjhA9%2BpOCmTFqDBny8G4JxRp0VeK87H89fabNqc%2BXCyvSHSjC3NBZUSHDihfbVHNEgNLuc%2B39hRwmJGYUmnYZckdhpWvjxrH2%2BzmNcKcJ2Cr0E94edgbcm5%2BINF5ZO4R%2Bi29E4uESQJLiCxcO0YJNF7hIH6YBbg3g9cHDozQ40jcmcK80iOmrwyTyHRhqI44f%2FJJ%2BxS620F%2FsZ05M%2F6QPGyNnRLdeimea%2BtWfMSWVaZov7V1rgUyiO8F4Vl2BzTUIbiKcaXcKmmvKkmiNa1%2FkvAAy92Er4pRQxkj7q%2BakbCDX5BYY8Q7FDqZQ0EUA6Wv4Rb8xiyGDpgl9yVhfYEfsPAZBBAMJU0sgrLIH3ED2CuYvAqX%2BogZeRAQ7mV2zzPwB8MJifgtIGOqUBoUpF9JwTD4tfke9Wyjs8j3DH5SSzaaVBTAmj7WyahpuQvbAjJPQtnTEhjWaUO8wDrgcTHDphCPs%2BZLu5zzLPVGqA4U5lgTA0JG%2FhFbPoXR4CZC28XT8yTJDeJuqFIvpExMrGgmmwWidJZ%2B%2BWb6hq4vDC1XFImUgM0B6pQEz%2FETLeVQK%2F%2BEY6iDYAY%2F1l0vJtsjjPcIPi9ZWsomPcFgG7ni2qOPG6&X-Amz-Signature=98c776dde85dc3575ef4c082b362a0220c4848fb5a8d8e40dbc7a309b212328a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB6DWWXF%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHJ3DiO6FOowAHU5MbAwA3%2BZ185Xzei%2BClGNNHwhi1dAiBSE9%2FNUBKh8BAJU%2FzueqOouedW7eZQE9GpzRkJOTX5eCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZB7rtDJQrsIOA6LyKtwD%2BnLUErS6VKRNjR1FveV%2B0tpfaTbSmWV1d0JYBvsrGVYs1vTQcFgtEg8ziFECRE%2Be%2BLCDR8H4%2Bt8XXcxfpWmgpJWCbe3tSbahdv%2FBF7erQOfUNAMo5ZBS7TfAmmEKO9KO2GmaatnYmHElbhOuMGinTsgMT%2FRTF4SrJy8m6QNPqP%2FibEUAeR%2BbKm9ER5%2F35371vJlaBbxXBtonU2yoXUU8OJ3xsx2670pv1qi5SRhf92Birb761heLVwV93hU3CYmEe42grTf2BH2rDKSviiLIqlt2nL87jtZJnfnsnmbF5T4vw1%2BUrf%2FjKCDblVvgHZ4DmVJ%2B9aOz5%2BK5G9gbs3R2fc8TA5K0xDw%2FBTilT5ciQuAUmPCr4gCaZUMWrYKjz2pTaGR5euCTJCbn6RiZWSY8cgZ0ZZJa8CyNmVFZ4uSAHaubdRM7sCmozofuBGf60NKV2KbTTvmtCMXWN3rFozumPoafFCTHOJbL9uoaWUjPClpfwAQRiYkScjGaoI2i8YFjOIT6C36Hkpn1Nm0s0Wjl%2BAgvj58LQPvyIZ4nL5oSnZW%2BE9bCmSirc26gWwoFgNBxygHXPcVyAf76L7K%2BuP2ZNPah9%2FRe42S7Pb1qoxUjAOcAbF91vsGbYOZccdcwgp6C0gY6pgH%2Fd4TO%2BTDoJSanEMq4dIqm7Tuqso5oSj%2B%2B1Y%2Fzi2VCd6R%2FfcL%2Bij4oiaHJzEQwvnMETjoxtt1wnuWUGZzFbXt%2F7Beek7OScbGmXRnus7EsEC%2Fp5hhmMrIYJatq10z1kqAeR1jW%2FFGNw%2BiBQ7CcIXBhIC4O7891xJQi5O1HaNpYWn5xcLHjD8dKXc883uXECt65B9usaKAd4Gfj93qxmRkfR0lX2UlM&X-Amz-Signature=54891e32777994473b633aa15cb9f8a8f0eb48fde9114a3352b102beafb3d569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USWOWDD%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmV%2FfSv7XmunA9W538OVmdcwH%2Bgvc8Bt5S5bEc4RAznAiEAykvJVKw4SLMgBGGC4tyFktTvSpcs8aHDlwr8kxmW95kqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0XVIT9K6sp%2FZL6qCrcA5cDGr%2B%2F3fjsdflvHRlICETz5XXu0FAbtPtH2MFFtMjqT4h6qKk7BmugzFeKDoR3m%2FLKKN9luqbQtZsL0prN8b4au31vy%2ByJt8MU6WSI267P3O1fvXWWUqCP9grBxTUqYzplDsdEGd17BLkB4UaA%2FS8YB1Q3ccwC%2BkpMeuBquaWPcxg4%2F9GaggwvgelQi3ZDno%2Fk9mmciO%2Bp2lvRay9sXy9UggujYkK1l2CSj6ss6fma2s86SIw%2Bwd4D4eBjhA9%2BpOCmTFqDBny8G4JxRp0VeK87H89fabNqc%2BXCyvSHSjC3NBZUSHDihfbVHNEgNLuc%2B39hRwmJGYUmnYZckdhpWvjxrH2%2BzmNcKcJ2Cr0E94edgbcm5%2BINF5ZO4R%2Bi29E4uESQJLiCxcO0YJNF7hIH6YBbg3g9cHDozQ40jcmcK80iOmrwyTyHRhqI44f%2FJJ%2BxS620F%2FsZ05M%2F6QPGyNnRLdeimea%2BtWfMSWVaZov7V1rgUyiO8F4Vl2BzTUIbiKcaXcKmmvKkmiNa1%2FkvAAy92Er4pRQxkj7q%2BakbCDX5BYY8Q7FDqZQ0EUA6Wv4Rb8xiyGDpgl9yVhfYEfsPAZBBAMJU0sgrLIH3ED2CuYvAqX%2BogZeRAQ7mV2zzPwB8MJifgtIGOqUBoUpF9JwTD4tfke9Wyjs8j3DH5SSzaaVBTAmj7WyahpuQvbAjJPQtnTEhjWaUO8wDrgcTHDphCPs%2BZLu5zzLPVGqA4U5lgTA0JG%2FhFbPoXR4CZC28XT8yTJDeJuqFIvpExMrGgmmwWidJZ%2B%2BWb6hq4vDC1XFImUgM0B6pQEz%2FETLeVQK%2F%2BEY6iDYAY%2F1l0vJtsjjPcIPi9ZWsomPcFgG7ni2qOPG6&X-Amz-Signature=f0e27193b156eac56dbca2623a402f1fdb862ea176406bbcd57242ede90957ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MYQJMYV%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACiqWScqqKuFEaHwuxbZAwMz2DVyuabqKInUX2kFzZLAiBYgD7occCsox8u4IQvqG%2FMVa1yH4R1U1bloOqz7ZAC%2BCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd5wCOcxpFjMK4ELuKtwDmnCTt2K1OFrsJpragzbsJidZPepKXbFyUfarlIZgPrKDPjnzeP4GRjDV339mWD%2FilDjv6wNvaIyhJKdPaXOQ3IKB5C5QhgH9pVZikoL5iIUVPAZwRUz%2BeuNQh6DHrX%2BzW6F61YC7jnXUBKxYkqPMpNdR7vrLjnQBOxTbGeQ2Ghv%2Fw89wSniL0zr0Eg9gvY6RzavT5gBmL%2Bu9V7R6sb1RzQb35%2FDYJCXjJqoApox%2BZjaeE4zaisKt4fZ03YdmeulJNfdGdXLBxDP5wbn0hDDU5zhgkmn5TaKBuSNd1%2FuxXbruTrZucntQHiEY5UCQqXCq8t3Dja7NaXPVDOd2Bni5ScemJychFlZD%2FpERWGNXeVBjo3YPvUxKGPWnqzX4kajy9tJgm31TcJFt3iT6IHG9qI1KtpbhiXODaOPuoGdd1wl49vnNd4D2TDlFmyVQKJWHz%2B8uX0tI6lF2QxIv6DQpsFk4Mxwm8kyRsCtIYXgy4NgvdudJ%2BIEnkJ5QXR7uVXemUVYOWZe%2B%2FsxY1EUpkV1GFrhlVbRHbGQbGAaetdnHEueYpLo8l5mv2py%2Fb2fXK3MIwkVRVrZFyNoQvVvjA3j6mO5lUQ455oYo37YDVP2kCNhvRbzQK0GsNqGQwR8ww5%2BC0gY6pgF0QE4DrixicY32QsGsUbuu9lgCzZmwAF3bctRpE8vouZXRKJy%2FMlTYwSBA2H%2BWy8quGSprFMR7COKkZsE5R0pSy8eDzLTWO6kO8No%2B7bLHQnsxzUKjOA7IjbVHDGuttHmpCdJEez22BhesPvKCU9Byg%2FUuEbAI0FvjZw9QwuCGoVMK%2FEnmiUeBil6NdZMen48KxOHVNU9LjA%2BPsQvk0TytFPghVOEO&X-Amz-Signature=6f04fa4e43c1b2b75ffd3f124b4a8623e9216124f7bd9108d9056a905a5f66f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USWOWDD%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmV%2FfSv7XmunA9W538OVmdcwH%2Bgvc8Bt5S5bEc4RAznAiEAykvJVKw4SLMgBGGC4tyFktTvSpcs8aHDlwr8kxmW95kqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0XVIT9K6sp%2FZL6qCrcA5cDGr%2B%2F3fjsdflvHRlICETz5XXu0FAbtPtH2MFFtMjqT4h6qKk7BmugzFeKDoR3m%2FLKKN9luqbQtZsL0prN8b4au31vy%2ByJt8MU6WSI267P3O1fvXWWUqCP9grBxTUqYzplDsdEGd17BLkB4UaA%2FS8YB1Q3ccwC%2BkpMeuBquaWPcxg4%2F9GaggwvgelQi3ZDno%2Fk9mmciO%2Bp2lvRay9sXy9UggujYkK1l2CSj6ss6fma2s86SIw%2Bwd4D4eBjhA9%2BpOCmTFqDBny8G4JxRp0VeK87H89fabNqc%2BXCyvSHSjC3NBZUSHDihfbVHNEgNLuc%2B39hRwmJGYUmnYZckdhpWvjxrH2%2BzmNcKcJ2Cr0E94edgbcm5%2BINF5ZO4R%2Bi29E4uESQJLiCxcO0YJNF7hIH6YBbg3g9cHDozQ40jcmcK80iOmrwyTyHRhqI44f%2FJJ%2BxS620F%2FsZ05M%2F6QPGyNnRLdeimea%2BtWfMSWVaZov7V1rgUyiO8F4Vl2BzTUIbiKcaXcKmmvKkmiNa1%2FkvAAy92Er4pRQxkj7q%2BakbCDX5BYY8Q7FDqZQ0EUA6Wv4Rb8xiyGDpgl9yVhfYEfsPAZBBAMJU0sgrLIH3ED2CuYvAqX%2BogZeRAQ7mV2zzPwB8MJifgtIGOqUBoUpF9JwTD4tfke9Wyjs8j3DH5SSzaaVBTAmj7WyahpuQvbAjJPQtnTEhjWaUO8wDrgcTHDphCPs%2BZLu5zzLPVGqA4U5lgTA0JG%2FhFbPoXR4CZC28XT8yTJDeJuqFIvpExMrGgmmwWidJZ%2B%2BWb6hq4vDC1XFImUgM0B6pQEz%2FETLeVQK%2F%2BEY6iDYAY%2F1l0vJtsjjPcIPi9ZWsomPcFgG7ni2qOPG6&X-Amz-Signature=588e6bd36ed14ef294b758b927f6b635f5f22056101474d9ee191e9348012618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5IJV5H3%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB08Zh9sgnZKMHSTfneznKGojbW1xvK%2F8KRNjzezr%2FvwAiEAkj9aZTIklZMMfTqGJ3DLMURtLZZ4hGsch0bWSdT4GHIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaOpSs7JOB96uvCyircA4TpBsrgwiawuEGS08TMWxsSdTCUmG62FEENW%2FPHr9ATtLKAFhU%2FVibGi6WCv2dxb4%2Bw%2FjAsZHCb7sI9WXZSWQMxPVpTcx1kFG2rE1NWs2avJkjDZjExgaBcWWuPHMqCaYzJcSpN3YMJFYMZpklIYMMsMe3k4T0zHRLCLpYzEIjquR6lKHYY4skRu1Q7ulFLbMkG1b9b3VQZSJkJNr0tFTIC%2BNRigLCVYDv9W4tvnm4DDY03tu2mzqsLU%2FML1iSlMt0%2FkVkVv75HQscG2JFlHny0kWoY2m%2F%2F7OIUXswMxrfmoiQWDXo6Qmga%2BW4nQ43sKQ%2Fk3%2BLtx2WPoDMHORxNn%2BonKSnbgKkDrjDXx%2FlS%2FNQRD0ZubfMttOBtpWzX%2B1Y57dV5sNNrYutYgo0PHqzyGIdMKMLI76VN28G0JDDc2MOhpUzUXiOqva3g%2BVJOh1xOz3Ddy5KoOo6nUD27Hvv%2F%2F9eTNYKGY%2FDqxBMeddcT2%2FhiUb5rspjcg82xYJTR5Jz6Z7ryKdR1tQhL0bFmqjXCNBL0vgCTqbSVvnQvkGZJWDcJhNr6RHldwbO6yf6WO80RFsy12Ij%2B0j3fj96kwofw7zfQ%2BsmMnhKQ0YmxoSrLwx9DCVuT%2B%2FerK15V%2FebiMIOegtIGOqUB3AJ9a2MDzdeS86xDz8dMxmMa%2FMo2av4MrIOi8vqwIIoYGQ1GBe16TUwNcZt%2BGJg3y536VVzZhBrARy8qvdjgSMH1PUp4Kh3vxVLd3%2FqqqSM5mvQKsTCf6DiLCjWKhtDD34HofRuXDEZXCWyzd3OF97UYAGs%2Bx6A3bTZx3MgO5jPyIbhlQ2I865%2FBNL%2FTvr%2BBL1k62jqw85MzfRuLZ3SMaZR99FwZ&X-Amz-Signature=1911109d42af2e39ca3a319a4686cac363d738fcecd56b7d689d116353315cc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USWOWDD%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmV%2FfSv7XmunA9W538OVmdcwH%2Bgvc8Bt5S5bEc4RAznAiEAykvJVKw4SLMgBGGC4tyFktTvSpcs8aHDlwr8kxmW95kqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0XVIT9K6sp%2FZL6qCrcA5cDGr%2B%2F3fjsdflvHRlICETz5XXu0FAbtPtH2MFFtMjqT4h6qKk7BmugzFeKDoR3m%2FLKKN9luqbQtZsL0prN8b4au31vy%2ByJt8MU6WSI267P3O1fvXWWUqCP9grBxTUqYzplDsdEGd17BLkB4UaA%2FS8YB1Q3ccwC%2BkpMeuBquaWPcxg4%2F9GaggwvgelQi3ZDno%2Fk9mmciO%2Bp2lvRay9sXy9UggujYkK1l2CSj6ss6fma2s86SIw%2Bwd4D4eBjhA9%2BpOCmTFqDBny8G4JxRp0VeK87H89fabNqc%2BXCyvSHSjC3NBZUSHDihfbVHNEgNLuc%2B39hRwmJGYUmnYZckdhpWvjxrH2%2BzmNcKcJ2Cr0E94edgbcm5%2BINF5ZO4R%2Bi29E4uESQJLiCxcO0YJNF7hIH6YBbg3g9cHDozQ40jcmcK80iOmrwyTyHRhqI44f%2FJJ%2BxS620F%2FsZ05M%2F6QPGyNnRLdeimea%2BtWfMSWVaZov7V1rgUyiO8F4Vl2BzTUIbiKcaXcKmmvKkmiNa1%2FkvAAy92Er4pRQxkj7q%2BakbCDX5BYY8Q7FDqZQ0EUA6Wv4Rb8xiyGDpgl9yVhfYEfsPAZBBAMJU0sgrLIH3ED2CuYvAqX%2BogZeRAQ7mV2zzPwB8MJifgtIGOqUBoUpF9JwTD4tfke9Wyjs8j3DH5SSzaaVBTAmj7WyahpuQvbAjJPQtnTEhjWaUO8wDrgcTHDphCPs%2BZLu5zzLPVGqA4U5lgTA0JG%2FhFbPoXR4CZC28XT8yTJDeJuqFIvpExMrGgmmwWidJZ%2B%2BWb6hq4vDC1XFImUgM0B6pQEz%2FETLeVQK%2F%2BEY6iDYAY%2F1l0vJtsjjPcIPi9ZWsomPcFgG7ni2qOPG6&X-Amz-Signature=b89905bc8a1d27be51b3bd5007d88094e71eedc07ac36a37114a17590dc87702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YNV6LL5%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfe8oxa6C1DOw0zZ2ZZHUhOmSXG%2B%2BmTG0kQ%2BcVkZheuAiEArTWZz9uyI1KgoW0i3J%2BqVFeFzNlIlNBvCz0a4RkLbjYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKP7JvJGy0WSAzMEvyrcAzi4J5SzqHLZ2WnbSsmXWArlnqWhxD%2BFYfvY1DZrc25HdnStRp27yz0iHlT9c6z3EduEKJhY4sKUi1mTAFU60pxu7aX443qbP0umC20t6RzKOfGwTIwPgzCYzkOIMVKsPCyrOXEX%2B4TmW7poiX1cNGwtvoMVaGRrZB2CP1h9pw5KpAnBEOhsjfxxjyC%2FeWwq5GVu6F4uqoXaKH1IXnXMUv2xsEgdr0HRVPPkNe%2BthcUnRFuOA7ICTUZfmD1x%2BvJgl2zp9YQ3fkWmOWzt1zteOZhSzOpcoA0C2Dxh1yqO6HkmiudxbVWMmRRicfhNhYHeUlRU6ERyfij1y%2Fgo%2BFL%2FGgrZuLc%2F3yd82vPR9RnMerPgFL6tXSP74Od5Es7f6CKTc5HutnS8OrHJ%2FPkwkOsRWiFw9i1HSe0PUHEMTxZSXHXf2UXkfDsX5ayMKHjGbR5dwkibybZ1geMaHznmQE9HQnDDitvlSGR0Qu53wLXehmC4ucdXH03igxTm17uEAC6gOXvC3VkYTpmRtM3pRk8mRn0WNCRj9mTi1Xig6%2BOs3F9g%2BVTb6DJQsPy%2B%2BOZD2XAUc8MEyBm9NMa86vFh8NCxdnv%2FDAH3r1ULiryaua1pUuX3z33WTk0lp3hAFpS%2BMNWegtIGOqUB3cjrGqEhjBD1oqJ9Kmq5V47EbTxeSPjy%2FfJWcSZqn9pjnPC5WVHC1AphGZM46JBwaurnRxe1%2BeGIsYRrPrNiTxkdTVRqcd6%2FVzoWV2JMQCNdYKF4Ohds1o%2FcawHWE9%2FvmUXxH1IjtqmO3b0eL1tQrBu3nDcZCk8EtPeF4diXY%2FkDiwbS8au%2Ba7Fs5%2BKbiCy6X0Mjq3FtKTepIUeUubTXuQh8v%2B%2FQ&X-Amz-Signature=85e4584262c574c72265654a7dec9c0ea2c4764a950abd08a85a07c49c3143e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GEMCLQ4%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD497bKJf0P8mGpYq7cSOuoGO8Yd1E1rLEEpKv7wSyW8wIgGkGTv7WqFLXSiBibsU823QTBj9NQcI%2F4kWESc29zZssqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2ApRgEJ0bxkec%2BIircA1Y9e%2Bkqv4%2B1uUY1IqeVK9RQYhKM56wSv76l8zuU1LBb32lzaZh%2BOnJe%2BT6jHbmIU58DBzaAQtSm16dO98B%2BpaQuzgViXourEW37yhbA8MB66omVa7w6UgnHLp4DDSw3Y4dOjtwtKTQ4ysgjxjRj2vD4siMVSIINg2QSPVvjlEpf9ZOsPsnMFKbiTDV5RHXPf3gkdwbgbWgFjdhSGPJdp0%2By9rG86juKREW4drW4kNBpLo9Xl4X3%2FKhe15K4HrenIDd56gTRA%2BRj2KkLVcJnnhHIDJWTd40P6hTJlHmHV%2FEyx8nXxMUbCL5PBD2cRqNTQ41dtYQ7hQpxzTzkTWj%2BXrCNovzu0%2Bc1iciidTmxUbRec9kIIF6YSOJHL857oxMGeiUdpX7HB%2BtDwcA09X9a6PcLZHWCSWsNFEJHYWg4xJolE0lcxUueck9IpVHWeEyWB1Q%2B83Q5BfIkm%2B1Yps7Q3Auyv%2Fbf5xjLvGj%2Fa9e0h%2BiCznIHmU9Ry%2BBrpNzR3GUvDcOaJxyn5bF8dNLXNiPGeMLCrQIGD04drxR4v%2FZtGAVxU8gSUjctC3TtY%2BWg7YmwQpuEYMwyoTxJtdYw4%2FB4HEG3GvVyTFbjoij97AQwprl7bd5HDSI4CAeNKvtLMJyegtIGOqUBavEhR5%2FkpVB52XxaMVTIechJZ1vcIVtVMBO0gVTVwnJJvKZGgeCjl5jMX%2BEbolsSl%2FppdN%2Fpy2QTfkRPUY%2F96Nz7GTAtXlXpsr6a0t%2FRIW3r%2FbKrsB3t8Zdr%2FfjKo0YizNOl75ubGZoBZHmaZ3ni%2Fz21rQmUUcKpcVRADjDP5sBHKHzxp%2B5pRnlVGFkmOUtdX4jb8xxcPG8FXYU%2F1Ohhvjg7YPl1&X-Amz-Signature=1949f85f75f88ea94180849505497407988132a464205a9b05f2199f46b0a962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C7SZSTE%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID474NMH3cLCMRGvO3xcruP2QSohO9zciBz%2FJcEXOFZNAiEAoaXMgrQaK6QUYMBuB6uKyvI6rTjnCb3RaH2sXmnAzJwqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2jQhalvANNJ67afCrcAz9XpyuVghj6ve9p77adRauvxZGbSUdBRb%2Bjr%2FCBh9xKewzQWq9zUwAsrEp7Tve3KSBMG40pYuno090uMDYC0oZEqLlApbFIwcnlWadUmPa9FnI%2BLjKxx9OwACteawBq9Q84zu3zCxtnZcPBS9enOuFC7cVLYeeLP3QBSkneujpdaTp50OZ4SNUe9V7YNbmmeKh9%2FzF23iziH%2BaDqLEu6akI4RF8kODBkQNimg95hRYXhBUu0M5Z%2FQnGnLN%2BfH%2FBQxutIhuUZIemxMYeKDoUGc6Xqej0qVqBRbNzQk6A5sifAEqfsPYo51vsnO968ecIjbfba7W5AZ20vjYmn8nMl%2FOhnT2q657ErMZTTvvQSDGbExgoljoKDwpbwsrYnOSZH1XHA88Hb9mcTCpKm0MQcFbet19zPFS80968JhqgDKJYGiVs8MVV1gY7RkTqm0UPiaZYkjiU9iLv5CQKNjsKY7hz4bWvWOiONcpnvYCOZEMlwDeTtQTknLXiXdH1o25mBZG0BRW%2FcSfe7Ty5s6WgG2eoozDE3LT9rqQ9ZQbkcDMVXh5Cf%2FVNfFaAD%2BleSe9NF3khJkFzuvYgFE7P6MZquKFN%2B1g9KWN37tJy5ooBCwgTasG%2BwmjMA7aQm%2BZ6MKmegtIGOqUBW7XhHPPdq9HAnX7zGwz%2FG2n7ENtK32cQX5vJwlYrkKigw%2BbgIldEfJqbbLDTIWiuX%2Fo1%2FJedtvp80lSTEucsTqCumDtV8l3%2BzAxDxpS%2Bd8zobEfhmpJapWn41%2BuF16gRngJaQdECHBmp0UDavzT5w0eHcfn%2F0a1MbTV%2F84wwNggHfOA9W1YxI%2FUsTr7%2FhZ2Iou8rl4FA3NdoJBvihMpX0qmQiyic&X-Amz-Signature=b1ed1877f3c59f5863593ac2b2a78ded6dbc4f0b621abd557a04cb07fbf6ab73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USWOWDD%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmV%2FfSv7XmunA9W538OVmdcwH%2Bgvc8Bt5S5bEc4RAznAiEAykvJVKw4SLMgBGGC4tyFktTvSpcs8aHDlwr8kxmW95kqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0XVIT9K6sp%2FZL6qCrcA5cDGr%2B%2F3fjsdflvHRlICETz5XXu0FAbtPtH2MFFtMjqT4h6qKk7BmugzFeKDoR3m%2FLKKN9luqbQtZsL0prN8b4au31vy%2ByJt8MU6WSI267P3O1fvXWWUqCP9grBxTUqYzplDsdEGd17BLkB4UaA%2FS8YB1Q3ccwC%2BkpMeuBquaWPcxg4%2F9GaggwvgelQi3ZDno%2Fk9mmciO%2Bp2lvRay9sXy9UggujYkK1l2CSj6ss6fma2s86SIw%2Bwd4D4eBjhA9%2BpOCmTFqDBny8G4JxRp0VeK87H89fabNqc%2BXCyvSHSjC3NBZUSHDihfbVHNEgNLuc%2B39hRwmJGYUmnYZckdhpWvjxrH2%2BzmNcKcJ2Cr0E94edgbcm5%2BINF5ZO4R%2Bi29E4uESQJLiCxcO0YJNF7hIH6YBbg3g9cHDozQ40jcmcK80iOmrwyTyHRhqI44f%2FJJ%2BxS620F%2FsZ05M%2F6QPGyNnRLdeimea%2BtWfMSWVaZov7V1rgUyiO8F4Vl2BzTUIbiKcaXcKmmvKkmiNa1%2FkvAAy92Er4pRQxkj7q%2BakbCDX5BYY8Q7FDqZQ0EUA6Wv4Rb8xiyGDpgl9yVhfYEfsPAZBBAMJU0sgrLIH3ED2CuYvAqX%2BogZeRAQ7mV2zzPwB8MJifgtIGOqUBoUpF9JwTD4tfke9Wyjs8j3DH5SSzaaVBTAmj7WyahpuQvbAjJPQtnTEhjWaUO8wDrgcTHDphCPs%2BZLu5zzLPVGqA4U5lgTA0JG%2FhFbPoXR4CZC28XT8yTJDeJuqFIvpExMrGgmmwWidJZ%2B%2BWb6hq4vDC1XFImUgM0B6pQEz%2FETLeVQK%2F%2BEY6iDYAY%2F1l0vJtsjjPcIPi9ZWsomPcFgG7ni2qOPG6&X-Amz-Signature=0cbe6dce5b122186819b795cec12368df51eba5d1ce0a4e8160cae4dac4642a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USWOWDD%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmV%2FfSv7XmunA9W538OVmdcwH%2Bgvc8Bt5S5bEc4RAznAiEAykvJVKw4SLMgBGGC4tyFktTvSpcs8aHDlwr8kxmW95kqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0XVIT9K6sp%2FZL6qCrcA5cDGr%2B%2F3fjsdflvHRlICETz5XXu0FAbtPtH2MFFtMjqT4h6qKk7BmugzFeKDoR3m%2FLKKN9luqbQtZsL0prN8b4au31vy%2ByJt8MU6WSI267P3O1fvXWWUqCP9grBxTUqYzplDsdEGd17BLkB4UaA%2FS8YB1Q3ccwC%2BkpMeuBquaWPcxg4%2F9GaggwvgelQi3ZDno%2Fk9mmciO%2Bp2lvRay9sXy9UggujYkK1l2CSj6ss6fma2s86SIw%2Bwd4D4eBjhA9%2BpOCmTFqDBny8G4JxRp0VeK87H89fabNqc%2BXCyvSHSjC3NBZUSHDihfbVHNEgNLuc%2B39hRwmJGYUmnYZckdhpWvjxrH2%2BzmNcKcJ2Cr0E94edgbcm5%2BINF5ZO4R%2Bi29E4uESQJLiCxcO0YJNF7hIH6YBbg3g9cHDozQ40jcmcK80iOmrwyTyHRhqI44f%2FJJ%2BxS620F%2FsZ05M%2F6QPGyNnRLdeimea%2BtWfMSWVaZov7V1rgUyiO8F4Vl2BzTUIbiKcaXcKmmvKkmiNa1%2FkvAAy92Er4pRQxkj7q%2BakbCDX5BYY8Q7FDqZQ0EUA6Wv4Rb8xiyGDpgl9yVhfYEfsPAZBBAMJU0sgrLIH3ED2CuYvAqX%2BogZeRAQ7mV2zzPwB8MJifgtIGOqUBoUpF9JwTD4tfke9Wyjs8j3DH5SSzaaVBTAmj7WyahpuQvbAjJPQtnTEhjWaUO8wDrgcTHDphCPs%2BZLu5zzLPVGqA4U5lgTA0JG%2FhFbPoXR4CZC28XT8yTJDeJuqFIvpExMrGgmmwWidJZ%2B%2BWb6hq4vDC1XFImUgM0B6pQEz%2FETLeVQK%2F%2BEY6iDYAY%2F1l0vJtsjjPcIPi9ZWsomPcFgG7ni2qOPG6&X-Amz-Signature=e1f6c00ca798431acfb8601c6dea8159b0170acc50370b1b04099a6c2df4d9a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DZCZTA%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwc0XBhn%2BnbCimxxWdfDqb%2FdfQXkJ9pkXNPfg4gZ7AzAiEAtziNc0sppBUrooALo3wwL2Ty%2FNX36iK2WBBh%2FfxohsUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLge9BqyO2er8aow9CrcAxNjWNjut99b%2Ftzn5mXKxDtoZ5u3M51ke3WWqcjnXI57Pc%2FNLvKidzQ5rStJw2OwosS2hi7l4uwnx%2FJ%2BOPHaMKUBfpG74O5Heb72BtDrjmkxr3v5IOkSZNfdMnrPDRCSxUlBJT31Is2otUnLZ%2B%2FjWrwKcE0Yl%2FFAIbp74SRwKO%2BJ2qzEObBlSG%2BD0zbY3w%2FAGl1y1eXYDd6UX23kwoDIbComyMHbOGu3kQlAW7G00KeX1xCtbfa0mcsnfnd2c1VoHbskwMSZSx18bSINmZX7NSf6i755H36kU3Tdok2ie1k5tgC08sPKQwRCQwNqeH6rJWi8tU7vVsGsV4dTvUkd%2BlOOhW5XcTzDzePk0f%2FBks3UV%2Ba%2FOlLU3N38YqFLdATqkhSNEmynUHpX1OV%2B7kQ3HId8c8nvOIUp4egW9F1yOdB1dftJjTOLiIEuXPQ%2BZENuJuWIZ17a%2Fzj10t2J1l0CHGmE5AG9FTlYt6veWXp6jR%2FaUEH03oPmwQUGdA2scddsTLDHm8VtjYmkT3iZWYti2pWP%2FDXGrPGVGEOWNXpUc44LQjZH1qfQ%2BApUuMxPGGZFPGv2wexNofgH%2FHrwL07AymLZ0FB04mhqxlnZDXhRF%2B0PRVf8xFNj8FmYNDMbMM2ggtIGOqUB7Io4ZBhN%2F6YIm1Qt2vjeEjv1mVUwNpfoCJZN%2ByUvigE5%2FMMdYLlJu9vtW6EAb3ge8zisyqRpamMS41xsOc7WLPT9M3Q9tbRiPPdhceI6dIRU6oxY9cBc91ZGtqLQAqzGzQevAJg9w7XEjtMllTFJfmmS%2B3Dc0gD%2BAp7tTn7a7%2FqzcGKFNH2uylSpXK4ZTPx%2Bo1sjnansJECakKmF9japILImtkXP&X-Amz-Signature=3de226ee06f76d3ace6576a8b0d895d4e11543b6ef3f8ce8a59a9cec35f60b24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DZCZTA%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwc0XBhn%2BnbCimxxWdfDqb%2FdfQXkJ9pkXNPfg4gZ7AzAiEAtziNc0sppBUrooALo3wwL2Ty%2FNX36iK2WBBh%2FfxohsUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLge9BqyO2er8aow9CrcAxNjWNjut99b%2Ftzn5mXKxDtoZ5u3M51ke3WWqcjnXI57Pc%2FNLvKidzQ5rStJw2OwosS2hi7l4uwnx%2FJ%2BOPHaMKUBfpG74O5Heb72BtDrjmkxr3v5IOkSZNfdMnrPDRCSxUlBJT31Is2otUnLZ%2B%2FjWrwKcE0Yl%2FFAIbp74SRwKO%2BJ2qzEObBlSG%2BD0zbY3w%2FAGl1y1eXYDd6UX23kwoDIbComyMHbOGu3kQlAW7G00KeX1xCtbfa0mcsnfnd2c1VoHbskwMSZSx18bSINmZX7NSf6i755H36kU3Tdok2ie1k5tgC08sPKQwRCQwNqeH6rJWi8tU7vVsGsV4dTvUkd%2BlOOhW5XcTzDzePk0f%2FBks3UV%2Ba%2FOlLU3N38YqFLdATqkhSNEmynUHpX1OV%2B7kQ3HId8c8nvOIUp4egW9F1yOdB1dftJjTOLiIEuXPQ%2BZENuJuWIZ17a%2Fzj10t2J1l0CHGmE5AG9FTlYt6veWXp6jR%2FaUEH03oPmwQUGdA2scddsTLDHm8VtjYmkT3iZWYti2pWP%2FDXGrPGVGEOWNXpUc44LQjZH1qfQ%2BApUuMxPGGZFPGv2wexNofgH%2FHrwL07AymLZ0FB04mhqxlnZDXhRF%2B0PRVf8xFNj8FmYNDMbMM2ggtIGOqUB7Io4ZBhN%2F6YIm1Qt2vjeEjv1mVUwNpfoCJZN%2ByUvigE5%2FMMdYLlJu9vtW6EAb3ge8zisyqRpamMS41xsOc7WLPT9M3Q9tbRiPPdhceI6dIRU6oxY9cBc91ZGtqLQAqzGzQevAJg9w7XEjtMllTFJfmmS%2B3Dc0gD%2BAp7tTn7a7%2FqzcGKFNH2uylSpXK4ZTPx%2Bo1sjnansJECakKmF9japILImtkXP&X-Amz-Signature=9c1af3e5b0c93f484212f4fa346a3d529e5d5f3d9216cb983fdcf9ccd31de023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DZCZTA%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwc0XBhn%2BnbCimxxWdfDqb%2FdfQXkJ9pkXNPfg4gZ7AzAiEAtziNc0sppBUrooALo3wwL2Ty%2FNX36iK2WBBh%2FfxohsUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLge9BqyO2er8aow9CrcAxNjWNjut99b%2Ftzn5mXKxDtoZ5u3M51ke3WWqcjnXI57Pc%2FNLvKidzQ5rStJw2OwosS2hi7l4uwnx%2FJ%2BOPHaMKUBfpG74O5Heb72BtDrjmkxr3v5IOkSZNfdMnrPDRCSxUlBJT31Is2otUnLZ%2B%2FjWrwKcE0Yl%2FFAIbp74SRwKO%2BJ2qzEObBlSG%2BD0zbY3w%2FAGl1y1eXYDd6UX23kwoDIbComyMHbOGu3kQlAW7G00KeX1xCtbfa0mcsnfnd2c1VoHbskwMSZSx18bSINmZX7NSf6i755H36kU3Tdok2ie1k5tgC08sPKQwRCQwNqeH6rJWi8tU7vVsGsV4dTvUkd%2BlOOhW5XcTzDzePk0f%2FBks3UV%2Ba%2FOlLU3N38YqFLdATqkhSNEmynUHpX1OV%2B7kQ3HId8c8nvOIUp4egW9F1yOdB1dftJjTOLiIEuXPQ%2BZENuJuWIZ17a%2Fzj10t2J1l0CHGmE5AG9FTlYt6veWXp6jR%2FaUEH03oPmwQUGdA2scddsTLDHm8VtjYmkT3iZWYti2pWP%2FDXGrPGVGEOWNXpUc44LQjZH1qfQ%2BApUuMxPGGZFPGv2wexNofgH%2FHrwL07AymLZ0FB04mhqxlnZDXhRF%2B0PRVf8xFNj8FmYNDMbMM2ggtIGOqUB7Io4ZBhN%2F6YIm1Qt2vjeEjv1mVUwNpfoCJZN%2ByUvigE5%2FMMdYLlJu9vtW6EAb3ge8zisyqRpamMS41xsOc7WLPT9M3Q9tbRiPPdhceI6dIRU6oxY9cBc91ZGtqLQAqzGzQevAJg9w7XEjtMllTFJfmmS%2B3Dc0gD%2BAp7tTn7a7%2FqzcGKFNH2uylSpXK4ZTPx%2Bo1sjnansJECakKmF9japILImtkXP&X-Amz-Signature=ee4de7ddf805cc906932ac2d89697c312e405911388d9a9c0d7fbd48dd9fa8cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DZCZTA%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwc0XBhn%2BnbCimxxWdfDqb%2FdfQXkJ9pkXNPfg4gZ7AzAiEAtziNc0sppBUrooALo3wwL2Ty%2FNX36iK2WBBh%2FfxohsUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLge9BqyO2er8aow9CrcAxNjWNjut99b%2Ftzn5mXKxDtoZ5u3M51ke3WWqcjnXI57Pc%2FNLvKidzQ5rStJw2OwosS2hi7l4uwnx%2FJ%2BOPHaMKUBfpG74O5Heb72BtDrjmkxr3v5IOkSZNfdMnrPDRCSxUlBJT31Is2otUnLZ%2B%2FjWrwKcE0Yl%2FFAIbp74SRwKO%2BJ2qzEObBlSG%2BD0zbY3w%2FAGl1y1eXYDd6UX23kwoDIbComyMHbOGu3kQlAW7G00KeX1xCtbfa0mcsnfnd2c1VoHbskwMSZSx18bSINmZX7NSf6i755H36kU3Tdok2ie1k5tgC08sPKQwRCQwNqeH6rJWi8tU7vVsGsV4dTvUkd%2BlOOhW5XcTzDzePk0f%2FBks3UV%2Ba%2FOlLU3N38YqFLdATqkhSNEmynUHpX1OV%2B7kQ3HId8c8nvOIUp4egW9F1yOdB1dftJjTOLiIEuXPQ%2BZENuJuWIZ17a%2Fzj10t2J1l0CHGmE5AG9FTlYt6veWXp6jR%2FaUEH03oPmwQUGdA2scddsTLDHm8VtjYmkT3iZWYti2pWP%2FDXGrPGVGEOWNXpUc44LQjZH1qfQ%2BApUuMxPGGZFPGv2wexNofgH%2FHrwL07AymLZ0FB04mhqxlnZDXhRF%2B0PRVf8xFNj8FmYNDMbMM2ggtIGOqUB7Io4ZBhN%2F6YIm1Qt2vjeEjv1mVUwNpfoCJZN%2ByUvigE5%2FMMdYLlJu9vtW6EAb3ge8zisyqRpamMS41xsOc7WLPT9M3Q9tbRiPPdhceI6dIRU6oxY9cBc91ZGtqLQAqzGzQevAJg9w7XEjtMllTFJfmmS%2B3Dc0gD%2BAp7tTn7a7%2FqzcGKFNH2uylSpXK4ZTPx%2Bo1sjnansJECakKmF9japILImtkXP&X-Amz-Signature=04846e3721347e81bcacba57b75f8b104f9e35b5e93914833bb27d10a80065cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YB3OYB2%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdBKvvrrcQqxc%2BDhR%2FhyHMOlAFkElaqe1BGqrpGQ%2B3vAiB1Db%2FNGPz461KSYwwTHSzxLd%2Fd2P5p8KyFbuoW8T3GwiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh6XcvXCKgVWs2jZdKtwDjhfEBoJ9pwqT%2BjP%2BEzkHZGM93nVqJHge9tJeb5GUC5Q7%2FygqQAzMBphZ%2BFXvUNiJR%2Bk3R%2F%2BmRBFj7ymzmLUwbpbOB1u%2FsUIBcOsDzAT%2FghZsqvl9FUe%2BEbWsJhcoZLkzoVC3OlP7jYwfTURzub1x1i52l436bQyMz%2BTKxbNMPYy6QKeuabgo4H8Kov8Ugmi0NYd5K2lrNCS4TZF9o8VQrNeMCZGMX6rlTdb2PHL3WD1M8qxSTHW%2FrhtmtRGSZfKSqFWm6WlRKTIDXZeo%2BDHrG80TO%2FEEj%2B09P0J1WMYXBNZyYfroRzaFzuN8XJyhRsX6mOGo8vvZdiJhRygfw9VGocuGk445bx9u80HT9%2BBVi0Wjxah5v%2FIpYuRpTG89rN5FwfYjhlE0ATqOJdw89QrW64XANk2ecwt%2BD3EIkog2U0KGXBpAec4bGHKd4lEaH0HpWb%2BRkoWnKrsxQZd7A0IYdbaa7KrQvUCvczxExhXNw%2BUyO5aX0dZigvHCawoPQr2554806n3l2BxScVWgr%2FfGx%2Bq8GFcfeBrvVVmz8mDHa6FW3LFUjcUqP4A1hfnukNJ9dbA%2BtcDPL9o4rAg5GT465WsZW5BdDkmxp6Rb2jnrAb6adXbY8c4tskIcBlww056C0gY6pgFq9zO7VxWcB5QPPDjYLZGrFVnc%2FZxhzPubDMKOgbGb1Mg7T217zcppwV3sxjmdbioPBz4ve6LPx29vn%2FNj0PuniFq%2Ftv84ybiZsvtslCQqawmpPs9WSunEm%2BeGnsrW53JNmuf3Q2VNIBOSdS6w7XLlHi70KoEoeP3Ar46685rg9KQ7nhHIJ2VLlU8XyBkQvAPNQjgmInC1R1lghb71fCI4vH%2FNYyvs&X-Amz-Signature=3fb9a9cc4c1d6c7377b24d2ec25c05d681f99d746390816a482ad709fa205955&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DZCZTA%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwc0XBhn%2BnbCimxxWdfDqb%2FdfQXkJ9pkXNPfg4gZ7AzAiEAtziNc0sppBUrooALo3wwL2Ty%2FNX36iK2WBBh%2FfxohsUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLge9BqyO2er8aow9CrcAxNjWNjut99b%2Ftzn5mXKxDtoZ5u3M51ke3WWqcjnXI57Pc%2FNLvKidzQ5rStJw2OwosS2hi7l4uwnx%2FJ%2BOPHaMKUBfpG74O5Heb72BtDrjmkxr3v5IOkSZNfdMnrPDRCSxUlBJT31Is2otUnLZ%2B%2FjWrwKcE0Yl%2FFAIbp74SRwKO%2BJ2qzEObBlSG%2BD0zbY3w%2FAGl1y1eXYDd6UX23kwoDIbComyMHbOGu3kQlAW7G00KeX1xCtbfa0mcsnfnd2c1VoHbskwMSZSx18bSINmZX7NSf6i755H36kU3Tdok2ie1k5tgC08sPKQwRCQwNqeH6rJWi8tU7vVsGsV4dTvUkd%2BlOOhW5XcTzDzePk0f%2FBks3UV%2Ba%2FOlLU3N38YqFLdATqkhSNEmynUHpX1OV%2B7kQ3HId8c8nvOIUp4egW9F1yOdB1dftJjTOLiIEuXPQ%2BZENuJuWIZ17a%2Fzj10t2J1l0CHGmE5AG9FTlYt6veWXp6jR%2FaUEH03oPmwQUGdA2scddsTLDHm8VtjYmkT3iZWYti2pWP%2FDXGrPGVGEOWNXpUc44LQjZH1qfQ%2BApUuMxPGGZFPGv2wexNofgH%2FHrwL07AymLZ0FB04mhqxlnZDXhRF%2B0PRVf8xFNj8FmYNDMbMM2ggtIGOqUB7Io4ZBhN%2F6YIm1Qt2vjeEjv1mVUwNpfoCJZN%2ByUvigE5%2FMMdYLlJu9vtW6EAb3ge8zisyqRpamMS41xsOc7WLPT9M3Q9tbRiPPdhceI6dIRU6oxY9cBc91ZGtqLQAqzGzQevAJg9w7XEjtMllTFJfmmS%2B3Dc0gD%2BAp7tTn7a7%2FqzcGKFNH2uylSpXK4ZTPx%2Bo1sjnansJECakKmF9japILImtkXP&X-Amz-Signature=b25857ae22aa2c6d889766e51bfec27b9b086a1feebbd536fc2ace08c0ce6e32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DZCZTA%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwc0XBhn%2BnbCimxxWdfDqb%2FdfQXkJ9pkXNPfg4gZ7AzAiEAtziNc0sppBUrooALo3wwL2Ty%2FNX36iK2WBBh%2FfxohsUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLge9BqyO2er8aow9CrcAxNjWNjut99b%2Ftzn5mXKxDtoZ5u3M51ke3WWqcjnXI57Pc%2FNLvKidzQ5rStJw2OwosS2hi7l4uwnx%2FJ%2BOPHaMKUBfpG74O5Heb72BtDrjmkxr3v5IOkSZNfdMnrPDRCSxUlBJT31Is2otUnLZ%2B%2FjWrwKcE0Yl%2FFAIbp74SRwKO%2BJ2qzEObBlSG%2BD0zbY3w%2FAGl1y1eXYDd6UX23kwoDIbComyMHbOGu3kQlAW7G00KeX1xCtbfa0mcsnfnd2c1VoHbskwMSZSx18bSINmZX7NSf6i755H36kU3Tdok2ie1k5tgC08sPKQwRCQwNqeH6rJWi8tU7vVsGsV4dTvUkd%2BlOOhW5XcTzDzePk0f%2FBks3UV%2Ba%2FOlLU3N38YqFLdATqkhSNEmynUHpX1OV%2B7kQ3HId8c8nvOIUp4egW9F1yOdB1dftJjTOLiIEuXPQ%2BZENuJuWIZ17a%2Fzj10t2J1l0CHGmE5AG9FTlYt6veWXp6jR%2FaUEH03oPmwQUGdA2scddsTLDHm8VtjYmkT3iZWYti2pWP%2FDXGrPGVGEOWNXpUc44LQjZH1qfQ%2BApUuMxPGGZFPGv2wexNofgH%2FHrwL07AymLZ0FB04mhqxlnZDXhRF%2B0PRVf8xFNj8FmYNDMbMM2ggtIGOqUB7Io4ZBhN%2F6YIm1Qt2vjeEjv1mVUwNpfoCJZN%2ByUvigE5%2FMMdYLlJu9vtW6EAb3ge8zisyqRpamMS41xsOc7WLPT9M3Q9tbRiPPdhceI6dIRU6oxY9cBc91ZGtqLQAqzGzQevAJg9w7XEjtMllTFJfmmS%2B3Dc0gD%2BAp7tTn7a7%2FqzcGKFNH2uylSpXK4ZTPx%2Bo1sjnansJECakKmF9japILImtkXP&X-Amz-Signature=db3d7a2842cb8f1017489ebc78165b7621f66e8f000b73d238888f5ae4f9c6e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DZCZTA%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwc0XBhn%2BnbCimxxWdfDqb%2FdfQXkJ9pkXNPfg4gZ7AzAiEAtziNc0sppBUrooALo3wwL2Ty%2FNX36iK2WBBh%2FfxohsUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLge9BqyO2er8aow9CrcAxNjWNjut99b%2Ftzn5mXKxDtoZ5u3M51ke3WWqcjnXI57Pc%2FNLvKidzQ5rStJw2OwosS2hi7l4uwnx%2FJ%2BOPHaMKUBfpG74O5Heb72BtDrjmkxr3v5IOkSZNfdMnrPDRCSxUlBJT31Is2otUnLZ%2B%2FjWrwKcE0Yl%2FFAIbp74SRwKO%2BJ2qzEObBlSG%2BD0zbY3w%2FAGl1y1eXYDd6UX23kwoDIbComyMHbOGu3kQlAW7G00KeX1xCtbfa0mcsnfnd2c1VoHbskwMSZSx18bSINmZX7NSf6i755H36kU3Tdok2ie1k5tgC08sPKQwRCQwNqeH6rJWi8tU7vVsGsV4dTvUkd%2BlOOhW5XcTzDzePk0f%2FBks3UV%2Ba%2FOlLU3N38YqFLdATqkhSNEmynUHpX1OV%2B7kQ3HId8c8nvOIUp4egW9F1yOdB1dftJjTOLiIEuXPQ%2BZENuJuWIZ17a%2Fzj10t2J1l0CHGmE5AG9FTlYt6veWXp6jR%2FaUEH03oPmwQUGdA2scddsTLDHm8VtjYmkT3iZWYti2pWP%2FDXGrPGVGEOWNXpUc44LQjZH1qfQ%2BApUuMxPGGZFPGv2wexNofgH%2FHrwL07AymLZ0FB04mhqxlnZDXhRF%2B0PRVf8xFNj8FmYNDMbMM2ggtIGOqUB7Io4ZBhN%2F6YIm1Qt2vjeEjv1mVUwNpfoCJZN%2ByUvigE5%2FMMdYLlJu9vtW6EAb3ge8zisyqRpamMS41xsOc7WLPT9M3Q9tbRiPPdhceI6dIRU6oxY9cBc91ZGtqLQAqzGzQevAJg9w7XEjtMllTFJfmmS%2B3Dc0gD%2BAp7tTn7a7%2FqzcGKFNH2uylSpXK4ZTPx%2Bo1sjnansJECakKmF9japILImtkXP&X-Amz-Signature=ee4de7ddf805cc906932ac2d89697c312e405911388d9a9c0d7fbd48dd9fa8cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DZCZTA%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwc0XBhn%2BnbCimxxWdfDqb%2FdfQXkJ9pkXNPfg4gZ7AzAiEAtziNc0sppBUrooALo3wwL2Ty%2FNX36iK2WBBh%2FfxohsUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLge9BqyO2er8aow9CrcAxNjWNjut99b%2Ftzn5mXKxDtoZ5u3M51ke3WWqcjnXI57Pc%2FNLvKidzQ5rStJw2OwosS2hi7l4uwnx%2FJ%2BOPHaMKUBfpG74O5Heb72BtDrjmkxr3v5IOkSZNfdMnrPDRCSxUlBJT31Is2otUnLZ%2B%2FjWrwKcE0Yl%2FFAIbp74SRwKO%2BJ2qzEObBlSG%2BD0zbY3w%2FAGl1y1eXYDd6UX23kwoDIbComyMHbOGu3kQlAW7G00KeX1xCtbfa0mcsnfnd2c1VoHbskwMSZSx18bSINmZX7NSf6i755H36kU3Tdok2ie1k5tgC08sPKQwRCQwNqeH6rJWi8tU7vVsGsV4dTvUkd%2BlOOhW5XcTzDzePk0f%2FBks3UV%2Ba%2FOlLU3N38YqFLdATqkhSNEmynUHpX1OV%2B7kQ3HId8c8nvOIUp4egW9F1yOdB1dftJjTOLiIEuXPQ%2BZENuJuWIZ17a%2Fzj10t2J1l0CHGmE5AG9FTlYt6veWXp6jR%2FaUEH03oPmwQUGdA2scddsTLDHm8VtjYmkT3iZWYti2pWP%2FDXGrPGVGEOWNXpUc44LQjZH1qfQ%2BApUuMxPGGZFPGv2wexNofgH%2FHrwL07AymLZ0FB04mhqxlnZDXhRF%2B0PRVf8xFNj8FmYNDMbMM2ggtIGOqUB7Io4ZBhN%2F6YIm1Qt2vjeEjv1mVUwNpfoCJZN%2ByUvigE5%2FMMdYLlJu9vtW6EAb3ge8zisyqRpamMS41xsOc7WLPT9M3Q9tbRiPPdhceI6dIRU6oxY9cBc91ZGtqLQAqzGzQevAJg9w7XEjtMllTFJfmmS%2B3Dc0gD%2BAp7tTn7a7%2FqzcGKFNH2uylSpXK4ZTPx%2Bo1sjnansJECakKmF9japILImtkXP&X-Amz-Signature=1ebc30a614df753d41d1f119debf79f3611a38afef6e69169d0a9217eb5b497d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DZCZTA%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwc0XBhn%2BnbCimxxWdfDqb%2FdfQXkJ9pkXNPfg4gZ7AzAiEAtziNc0sppBUrooALo3wwL2Ty%2FNX36iK2WBBh%2FfxohsUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLge9BqyO2er8aow9CrcAxNjWNjut99b%2Ftzn5mXKxDtoZ5u3M51ke3WWqcjnXI57Pc%2FNLvKidzQ5rStJw2OwosS2hi7l4uwnx%2FJ%2BOPHaMKUBfpG74O5Heb72BtDrjmkxr3v5IOkSZNfdMnrPDRCSxUlBJT31Is2otUnLZ%2B%2FjWrwKcE0Yl%2FFAIbp74SRwKO%2BJ2qzEObBlSG%2BD0zbY3w%2FAGl1y1eXYDd6UX23kwoDIbComyMHbOGu3kQlAW7G00KeX1xCtbfa0mcsnfnd2c1VoHbskwMSZSx18bSINmZX7NSf6i755H36kU3Tdok2ie1k5tgC08sPKQwRCQwNqeH6rJWi8tU7vVsGsV4dTvUkd%2BlOOhW5XcTzDzePk0f%2FBks3UV%2Ba%2FOlLU3N38YqFLdATqkhSNEmynUHpX1OV%2B7kQ3HId8c8nvOIUp4egW9F1yOdB1dftJjTOLiIEuXPQ%2BZENuJuWIZ17a%2Fzj10t2J1l0CHGmE5AG9FTlYt6veWXp6jR%2FaUEH03oPmwQUGdA2scddsTLDHm8VtjYmkT3iZWYti2pWP%2FDXGrPGVGEOWNXpUc44LQjZH1qfQ%2BApUuMxPGGZFPGv2wexNofgH%2FHrwL07AymLZ0FB04mhqxlnZDXhRF%2B0PRVf8xFNj8FmYNDMbMM2ggtIGOqUB7Io4ZBhN%2F6YIm1Qt2vjeEjv1mVUwNpfoCJZN%2ByUvigE5%2FMMdYLlJu9vtW6EAb3ge8zisyqRpamMS41xsOc7WLPT9M3Q9tbRiPPdhceI6dIRU6oxY9cBc91ZGtqLQAqzGzQevAJg9w7XEjtMllTFJfmmS%2B3Dc0gD%2BAp7tTn7a7%2FqzcGKFNH2uylSpXK4ZTPx%2Bo1sjnansJECakKmF9japILImtkXP&X-Amz-Signature=dc2faa1142c4bbeea1c38ac858d2c43b694ca1c6502c870f783223dd7c7738ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DZCZTA%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwc0XBhn%2BnbCimxxWdfDqb%2FdfQXkJ9pkXNPfg4gZ7AzAiEAtziNc0sppBUrooALo3wwL2Ty%2FNX36iK2WBBh%2FfxohsUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLge9BqyO2er8aow9CrcAxNjWNjut99b%2Ftzn5mXKxDtoZ5u3M51ke3WWqcjnXI57Pc%2FNLvKidzQ5rStJw2OwosS2hi7l4uwnx%2FJ%2BOPHaMKUBfpG74O5Heb72BtDrjmkxr3v5IOkSZNfdMnrPDRCSxUlBJT31Is2otUnLZ%2B%2FjWrwKcE0Yl%2FFAIbp74SRwKO%2BJ2qzEObBlSG%2BD0zbY3w%2FAGl1y1eXYDd6UX23kwoDIbComyMHbOGu3kQlAW7G00KeX1xCtbfa0mcsnfnd2c1VoHbskwMSZSx18bSINmZX7NSf6i755H36kU3Tdok2ie1k5tgC08sPKQwRCQwNqeH6rJWi8tU7vVsGsV4dTvUkd%2BlOOhW5XcTzDzePk0f%2FBks3UV%2Ba%2FOlLU3N38YqFLdATqkhSNEmynUHpX1OV%2B7kQ3HId8c8nvOIUp4egW9F1yOdB1dftJjTOLiIEuXPQ%2BZENuJuWIZ17a%2Fzj10t2J1l0CHGmE5AG9FTlYt6veWXp6jR%2FaUEH03oPmwQUGdA2scddsTLDHm8VtjYmkT3iZWYti2pWP%2FDXGrPGVGEOWNXpUc44LQjZH1qfQ%2BApUuMxPGGZFPGv2wexNofgH%2FHrwL07AymLZ0FB04mhqxlnZDXhRF%2B0PRVf8xFNj8FmYNDMbMM2ggtIGOqUB7Io4ZBhN%2F6YIm1Qt2vjeEjv1mVUwNpfoCJZN%2ByUvigE5%2FMMdYLlJu9vtW6EAb3ge8zisyqRpamMS41xsOc7WLPT9M3Q9tbRiPPdhceI6dIRU6oxY9cBc91ZGtqLQAqzGzQevAJg9w7XEjtMllTFJfmmS%2B3Dc0gD%2BAp7tTn7a7%2FqzcGKFNH2uylSpXK4ZTPx%2Bo1sjnansJECakKmF9japILImtkXP&X-Amz-Signature=b7579f4056a7a1adcb5844d01779740ad7eafd617aaa2534d51471aebef7690c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


