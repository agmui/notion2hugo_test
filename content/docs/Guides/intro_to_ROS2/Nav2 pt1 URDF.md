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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4J6RXNN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDx2wGsY6Sw%2B6EmDOgGTAcpJvV3CbPJ0HlxHwB4D9HY6AIhANVXZ6bfDiOg3TbImMBL8tFvXKrrRPvGPaNq1xHdz3rKKv8DCF4QABoMNjM3NDIzMTgzODA1Igz3gHilFiGswIKHarkq3AMCltCIgYqYrInD%2FDGLS081cz%2BzqIuH3QUe%2BjSpeYCBsBV8lloRHBA%2FAedCaGYaW%2FVeyQQ7r5aK8baIGmdyVoLBHZM%2B9jObzbtVBCZO1ESFG5Yd6jK7EjJMMPxwXu5WDiGgI2cRSP7EvByWvGCVirHOyPgSAJxPXzp4CThc0zVe3pYsX7l18zwK%2FuWGURcV40z3fiwQuSh4mIP1EYvGMKByeOkOGlKJHYSd8A4zto2kUkIrb%2BuZglWBuHASvzQeApmnkMbaT9Dz0AAHqUUBB7x0pHJAs981DyUky66vG69Mh6Q5HgNjjOuUqo%2Bu54J%2BO2I3FqCxfYOSNCu3GVxZf5wbhfHdk1asiAVh40CCjAXepPXQveZ%2FszyNDcTswEzLmk%2B7l2S1LLVgc2I0mJIF9bTUptz%2BM5t3BL2lAhlZozlnF0P0zXXfBLlZJVoOPOcyUKrz7hzAr9p%2BJo6xsjBkT2PAeVtAWC0S%2FRw6j1uQmpmu4If21Yn7WgiR26fnqZoMnBNOMKRP2fKimilbcNFCbmyOYds95o09UNj2RbEPYGbfYuaYJBDF%2BxpqNwfFaphK2CzSwrU8X91ItifClWp%2Ft%2FQE%2BDnn1ZGQP%2B1ZGq1d%2FVyeWjjySacLMxBX%2FjToADDIhMjEBjqkAbfhKNDh9EpY4yPHGs1ejRlDAUwxIyDDlf%2BhoHLXqQ8l1iOQ1EoqBvRFAaYHD%2BJUPPttX1Ddys2jzySxmrgmnV5Xq2QZYtN0B2f6ihhYvm9ALi%2BeK2WrQ0utKQokzhCj1ydCmACfYzElX03Ah3RGqWzxGzgHmGbWeWr%2BaIcIPoh0SW8qwOE39R4RswtmkzzqYqaXYdN5emYqQ%2BJ2wkyIAajBmOuv&X-Amz-Signature=d91187db4e93e9761bf8af84661f30a68fbcac1d35fb5c068479198e88eac8ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4J6RXNN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDx2wGsY6Sw%2B6EmDOgGTAcpJvV3CbPJ0HlxHwB4D9HY6AIhANVXZ6bfDiOg3TbImMBL8tFvXKrrRPvGPaNq1xHdz3rKKv8DCF4QABoMNjM3NDIzMTgzODA1Igz3gHilFiGswIKHarkq3AMCltCIgYqYrInD%2FDGLS081cz%2BzqIuH3QUe%2BjSpeYCBsBV8lloRHBA%2FAedCaGYaW%2FVeyQQ7r5aK8baIGmdyVoLBHZM%2B9jObzbtVBCZO1ESFG5Yd6jK7EjJMMPxwXu5WDiGgI2cRSP7EvByWvGCVirHOyPgSAJxPXzp4CThc0zVe3pYsX7l18zwK%2FuWGURcV40z3fiwQuSh4mIP1EYvGMKByeOkOGlKJHYSd8A4zto2kUkIrb%2BuZglWBuHASvzQeApmnkMbaT9Dz0AAHqUUBB7x0pHJAs981DyUky66vG69Mh6Q5HgNjjOuUqo%2Bu54J%2BO2I3FqCxfYOSNCu3GVxZf5wbhfHdk1asiAVh40CCjAXepPXQveZ%2FszyNDcTswEzLmk%2B7l2S1LLVgc2I0mJIF9bTUptz%2BM5t3BL2lAhlZozlnF0P0zXXfBLlZJVoOPOcyUKrz7hzAr9p%2BJo6xsjBkT2PAeVtAWC0S%2FRw6j1uQmpmu4If21Yn7WgiR26fnqZoMnBNOMKRP2fKimilbcNFCbmyOYds95o09UNj2RbEPYGbfYuaYJBDF%2BxpqNwfFaphK2CzSwrU8X91ItifClWp%2Ft%2FQE%2BDnn1ZGQP%2B1ZGq1d%2FVyeWjjySacLMxBX%2FjToADDIhMjEBjqkAbfhKNDh9EpY4yPHGs1ejRlDAUwxIyDDlf%2BhoHLXqQ8l1iOQ1EoqBvRFAaYHD%2BJUPPttX1Ddys2jzySxmrgmnV5Xq2QZYtN0B2f6ihhYvm9ALi%2BeK2WrQ0utKQokzhCj1ydCmACfYzElX03Ah3RGqWzxGzgHmGbWeWr%2BaIcIPoh0SW8qwOE39R4RswtmkzzqYqaXYdN5emYqQ%2BJ2wkyIAajBmOuv&X-Amz-Signature=d18fa68c2bb9f528fa4eb6a5f7525852554e94ff50fd7b8cfc57da8306cde2e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4J6RXNN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDx2wGsY6Sw%2B6EmDOgGTAcpJvV3CbPJ0HlxHwB4D9HY6AIhANVXZ6bfDiOg3TbImMBL8tFvXKrrRPvGPaNq1xHdz3rKKv8DCF4QABoMNjM3NDIzMTgzODA1Igz3gHilFiGswIKHarkq3AMCltCIgYqYrInD%2FDGLS081cz%2BzqIuH3QUe%2BjSpeYCBsBV8lloRHBA%2FAedCaGYaW%2FVeyQQ7r5aK8baIGmdyVoLBHZM%2B9jObzbtVBCZO1ESFG5Yd6jK7EjJMMPxwXu5WDiGgI2cRSP7EvByWvGCVirHOyPgSAJxPXzp4CThc0zVe3pYsX7l18zwK%2FuWGURcV40z3fiwQuSh4mIP1EYvGMKByeOkOGlKJHYSd8A4zto2kUkIrb%2BuZglWBuHASvzQeApmnkMbaT9Dz0AAHqUUBB7x0pHJAs981DyUky66vG69Mh6Q5HgNjjOuUqo%2Bu54J%2BO2I3FqCxfYOSNCu3GVxZf5wbhfHdk1asiAVh40CCjAXepPXQveZ%2FszyNDcTswEzLmk%2B7l2S1LLVgc2I0mJIF9bTUptz%2BM5t3BL2lAhlZozlnF0P0zXXfBLlZJVoOPOcyUKrz7hzAr9p%2BJo6xsjBkT2PAeVtAWC0S%2FRw6j1uQmpmu4If21Yn7WgiR26fnqZoMnBNOMKRP2fKimilbcNFCbmyOYds95o09UNj2RbEPYGbfYuaYJBDF%2BxpqNwfFaphK2CzSwrU8X91ItifClWp%2Ft%2FQE%2BDnn1ZGQP%2B1ZGq1d%2FVyeWjjySacLMxBX%2FjToADDIhMjEBjqkAbfhKNDh9EpY4yPHGs1ejRlDAUwxIyDDlf%2BhoHLXqQ8l1iOQ1EoqBvRFAaYHD%2BJUPPttX1Ddys2jzySxmrgmnV5Xq2QZYtN0B2f6ihhYvm9ALi%2BeK2WrQ0utKQokzhCj1ydCmACfYzElX03Ah3RGqWzxGzgHmGbWeWr%2BaIcIPoh0SW8qwOE39R4RswtmkzzqYqaXYdN5emYqQ%2BJ2wkyIAajBmOuv&X-Amz-Signature=73a590fbc92765b8e0d5acd491e08727a20f1151330b2d6b503e486c7c456b91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4J6RXNN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDx2wGsY6Sw%2B6EmDOgGTAcpJvV3CbPJ0HlxHwB4D9HY6AIhANVXZ6bfDiOg3TbImMBL8tFvXKrrRPvGPaNq1xHdz3rKKv8DCF4QABoMNjM3NDIzMTgzODA1Igz3gHilFiGswIKHarkq3AMCltCIgYqYrInD%2FDGLS081cz%2BzqIuH3QUe%2BjSpeYCBsBV8lloRHBA%2FAedCaGYaW%2FVeyQQ7r5aK8baIGmdyVoLBHZM%2B9jObzbtVBCZO1ESFG5Yd6jK7EjJMMPxwXu5WDiGgI2cRSP7EvByWvGCVirHOyPgSAJxPXzp4CThc0zVe3pYsX7l18zwK%2FuWGURcV40z3fiwQuSh4mIP1EYvGMKByeOkOGlKJHYSd8A4zto2kUkIrb%2BuZglWBuHASvzQeApmnkMbaT9Dz0AAHqUUBB7x0pHJAs981DyUky66vG69Mh6Q5HgNjjOuUqo%2Bu54J%2BO2I3FqCxfYOSNCu3GVxZf5wbhfHdk1asiAVh40CCjAXepPXQveZ%2FszyNDcTswEzLmk%2B7l2S1LLVgc2I0mJIF9bTUptz%2BM5t3BL2lAhlZozlnF0P0zXXfBLlZJVoOPOcyUKrz7hzAr9p%2BJo6xsjBkT2PAeVtAWC0S%2FRw6j1uQmpmu4If21Yn7WgiR26fnqZoMnBNOMKRP2fKimilbcNFCbmyOYds95o09UNj2RbEPYGbfYuaYJBDF%2BxpqNwfFaphK2CzSwrU8X91ItifClWp%2Ft%2FQE%2BDnn1ZGQP%2B1ZGq1d%2FVyeWjjySacLMxBX%2FjToADDIhMjEBjqkAbfhKNDh9EpY4yPHGs1ejRlDAUwxIyDDlf%2BhoHLXqQ8l1iOQ1EoqBvRFAaYHD%2BJUPPttX1Ddys2jzySxmrgmnV5Xq2QZYtN0B2f6ihhYvm9ALi%2BeK2WrQ0utKQokzhCj1ydCmACfYzElX03Ah3RGqWzxGzgHmGbWeWr%2BaIcIPoh0SW8qwOE39R4RswtmkzzqYqaXYdN5emYqQ%2BJ2wkyIAajBmOuv&X-Amz-Signature=17287ac4e4fe9fafa3ab92012815202c3296f41ccd9c908676a061faae6f1849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4J6RXNN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDx2wGsY6Sw%2B6EmDOgGTAcpJvV3CbPJ0HlxHwB4D9HY6AIhANVXZ6bfDiOg3TbImMBL8tFvXKrrRPvGPaNq1xHdz3rKKv8DCF4QABoMNjM3NDIzMTgzODA1Igz3gHilFiGswIKHarkq3AMCltCIgYqYrInD%2FDGLS081cz%2BzqIuH3QUe%2BjSpeYCBsBV8lloRHBA%2FAedCaGYaW%2FVeyQQ7r5aK8baIGmdyVoLBHZM%2B9jObzbtVBCZO1ESFG5Yd6jK7EjJMMPxwXu5WDiGgI2cRSP7EvByWvGCVirHOyPgSAJxPXzp4CThc0zVe3pYsX7l18zwK%2FuWGURcV40z3fiwQuSh4mIP1EYvGMKByeOkOGlKJHYSd8A4zto2kUkIrb%2BuZglWBuHASvzQeApmnkMbaT9Dz0AAHqUUBB7x0pHJAs981DyUky66vG69Mh6Q5HgNjjOuUqo%2Bu54J%2BO2I3FqCxfYOSNCu3GVxZf5wbhfHdk1asiAVh40CCjAXepPXQveZ%2FszyNDcTswEzLmk%2B7l2S1LLVgc2I0mJIF9bTUptz%2BM5t3BL2lAhlZozlnF0P0zXXfBLlZJVoOPOcyUKrz7hzAr9p%2BJo6xsjBkT2PAeVtAWC0S%2FRw6j1uQmpmu4If21Yn7WgiR26fnqZoMnBNOMKRP2fKimilbcNFCbmyOYds95o09UNj2RbEPYGbfYuaYJBDF%2BxpqNwfFaphK2CzSwrU8X91ItifClWp%2Ft%2FQE%2BDnn1ZGQP%2B1ZGq1d%2FVyeWjjySacLMxBX%2FjToADDIhMjEBjqkAbfhKNDh9EpY4yPHGs1ejRlDAUwxIyDDlf%2BhoHLXqQ8l1iOQ1EoqBvRFAaYHD%2BJUPPttX1Ddys2jzySxmrgmnV5Xq2QZYtN0B2f6ihhYvm9ALi%2BeK2WrQ0utKQokzhCj1ydCmACfYzElX03Ah3RGqWzxGzgHmGbWeWr%2BaIcIPoh0SW8qwOE39R4RswtmkzzqYqaXYdN5emYqQ%2BJ2wkyIAajBmOuv&X-Amz-Signature=d0c0cbda53b506b284aa02ab109727296252560e127e541274d84aed09feae0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4J6RXNN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDx2wGsY6Sw%2B6EmDOgGTAcpJvV3CbPJ0HlxHwB4D9HY6AIhANVXZ6bfDiOg3TbImMBL8tFvXKrrRPvGPaNq1xHdz3rKKv8DCF4QABoMNjM3NDIzMTgzODA1Igz3gHilFiGswIKHarkq3AMCltCIgYqYrInD%2FDGLS081cz%2BzqIuH3QUe%2BjSpeYCBsBV8lloRHBA%2FAedCaGYaW%2FVeyQQ7r5aK8baIGmdyVoLBHZM%2B9jObzbtVBCZO1ESFG5Yd6jK7EjJMMPxwXu5WDiGgI2cRSP7EvByWvGCVirHOyPgSAJxPXzp4CThc0zVe3pYsX7l18zwK%2FuWGURcV40z3fiwQuSh4mIP1EYvGMKByeOkOGlKJHYSd8A4zto2kUkIrb%2BuZglWBuHASvzQeApmnkMbaT9Dz0AAHqUUBB7x0pHJAs981DyUky66vG69Mh6Q5HgNjjOuUqo%2Bu54J%2BO2I3FqCxfYOSNCu3GVxZf5wbhfHdk1asiAVh40CCjAXepPXQveZ%2FszyNDcTswEzLmk%2B7l2S1LLVgc2I0mJIF9bTUptz%2BM5t3BL2lAhlZozlnF0P0zXXfBLlZJVoOPOcyUKrz7hzAr9p%2BJo6xsjBkT2PAeVtAWC0S%2FRw6j1uQmpmu4If21Yn7WgiR26fnqZoMnBNOMKRP2fKimilbcNFCbmyOYds95o09UNj2RbEPYGbfYuaYJBDF%2BxpqNwfFaphK2CzSwrU8X91ItifClWp%2Ft%2FQE%2BDnn1ZGQP%2B1ZGq1d%2FVyeWjjySacLMxBX%2FjToADDIhMjEBjqkAbfhKNDh9EpY4yPHGs1ejRlDAUwxIyDDlf%2BhoHLXqQ8l1iOQ1EoqBvRFAaYHD%2BJUPPttX1Ddys2jzySxmrgmnV5Xq2QZYtN0B2f6ihhYvm9ALi%2BeK2WrQ0utKQokzhCj1ydCmACfYzElX03Ah3RGqWzxGzgHmGbWeWr%2BaIcIPoh0SW8qwOE39R4RswtmkzzqYqaXYdN5emYqQ%2BJ2wkyIAajBmOuv&X-Amz-Signature=f160a97464dc0e3b8828c4dcb751beec135ad523b339aaeecbbd1f0a920113ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4J6RXNN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDx2wGsY6Sw%2B6EmDOgGTAcpJvV3CbPJ0HlxHwB4D9HY6AIhANVXZ6bfDiOg3TbImMBL8tFvXKrrRPvGPaNq1xHdz3rKKv8DCF4QABoMNjM3NDIzMTgzODA1Igz3gHilFiGswIKHarkq3AMCltCIgYqYrInD%2FDGLS081cz%2BzqIuH3QUe%2BjSpeYCBsBV8lloRHBA%2FAedCaGYaW%2FVeyQQ7r5aK8baIGmdyVoLBHZM%2B9jObzbtVBCZO1ESFG5Yd6jK7EjJMMPxwXu5WDiGgI2cRSP7EvByWvGCVirHOyPgSAJxPXzp4CThc0zVe3pYsX7l18zwK%2FuWGURcV40z3fiwQuSh4mIP1EYvGMKByeOkOGlKJHYSd8A4zto2kUkIrb%2BuZglWBuHASvzQeApmnkMbaT9Dz0AAHqUUBB7x0pHJAs981DyUky66vG69Mh6Q5HgNjjOuUqo%2Bu54J%2BO2I3FqCxfYOSNCu3GVxZf5wbhfHdk1asiAVh40CCjAXepPXQveZ%2FszyNDcTswEzLmk%2B7l2S1LLVgc2I0mJIF9bTUptz%2BM5t3BL2lAhlZozlnF0P0zXXfBLlZJVoOPOcyUKrz7hzAr9p%2BJo6xsjBkT2PAeVtAWC0S%2FRw6j1uQmpmu4If21Yn7WgiR26fnqZoMnBNOMKRP2fKimilbcNFCbmyOYds95o09UNj2RbEPYGbfYuaYJBDF%2BxpqNwfFaphK2CzSwrU8X91ItifClWp%2Ft%2FQE%2BDnn1ZGQP%2B1ZGq1d%2FVyeWjjySacLMxBX%2FjToADDIhMjEBjqkAbfhKNDh9EpY4yPHGs1ejRlDAUwxIyDDlf%2BhoHLXqQ8l1iOQ1EoqBvRFAaYHD%2BJUPPttX1Ddys2jzySxmrgmnV5Xq2QZYtN0B2f6ihhYvm9ALi%2BeK2WrQ0utKQokzhCj1ydCmACfYzElX03Ah3RGqWzxGzgHmGbWeWr%2BaIcIPoh0SW8qwOE39R4RswtmkzzqYqaXYdN5emYqQ%2BJ2wkyIAajBmOuv&X-Amz-Signature=5b117291d379ea8204253f9afde32d05e4150cb8fe1abf50abc2d31341dbd75e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4J6RXNN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDx2wGsY6Sw%2B6EmDOgGTAcpJvV3CbPJ0HlxHwB4D9HY6AIhANVXZ6bfDiOg3TbImMBL8tFvXKrrRPvGPaNq1xHdz3rKKv8DCF4QABoMNjM3NDIzMTgzODA1Igz3gHilFiGswIKHarkq3AMCltCIgYqYrInD%2FDGLS081cz%2BzqIuH3QUe%2BjSpeYCBsBV8lloRHBA%2FAedCaGYaW%2FVeyQQ7r5aK8baIGmdyVoLBHZM%2B9jObzbtVBCZO1ESFG5Yd6jK7EjJMMPxwXu5WDiGgI2cRSP7EvByWvGCVirHOyPgSAJxPXzp4CThc0zVe3pYsX7l18zwK%2FuWGURcV40z3fiwQuSh4mIP1EYvGMKByeOkOGlKJHYSd8A4zto2kUkIrb%2BuZglWBuHASvzQeApmnkMbaT9Dz0AAHqUUBB7x0pHJAs981DyUky66vG69Mh6Q5HgNjjOuUqo%2Bu54J%2BO2I3FqCxfYOSNCu3GVxZf5wbhfHdk1asiAVh40CCjAXepPXQveZ%2FszyNDcTswEzLmk%2B7l2S1LLVgc2I0mJIF9bTUptz%2BM5t3BL2lAhlZozlnF0P0zXXfBLlZJVoOPOcyUKrz7hzAr9p%2BJo6xsjBkT2PAeVtAWC0S%2FRw6j1uQmpmu4If21Yn7WgiR26fnqZoMnBNOMKRP2fKimilbcNFCbmyOYds95o09UNj2RbEPYGbfYuaYJBDF%2BxpqNwfFaphK2CzSwrU8X91ItifClWp%2Ft%2FQE%2BDnn1ZGQP%2B1ZGq1d%2FVyeWjjySacLMxBX%2FjToADDIhMjEBjqkAbfhKNDh9EpY4yPHGs1ejRlDAUwxIyDDlf%2BhoHLXqQ8l1iOQ1EoqBvRFAaYHD%2BJUPPttX1Ddys2jzySxmrgmnV5Xq2QZYtN0B2f6ihhYvm9ALi%2BeK2WrQ0utKQokzhCj1ydCmACfYzElX03Ah3RGqWzxGzgHmGbWeWr%2BaIcIPoh0SW8qwOE39R4RswtmkzzqYqaXYdN5emYqQ%2BJ2wkyIAajBmOuv&X-Amz-Signature=01d0210a3999a49a3e918adba0223bc7297bb823ae12b92c3e6b704b47bc34a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4J6RXNN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDx2wGsY6Sw%2B6EmDOgGTAcpJvV3CbPJ0HlxHwB4D9HY6AIhANVXZ6bfDiOg3TbImMBL8tFvXKrrRPvGPaNq1xHdz3rKKv8DCF4QABoMNjM3NDIzMTgzODA1Igz3gHilFiGswIKHarkq3AMCltCIgYqYrInD%2FDGLS081cz%2BzqIuH3QUe%2BjSpeYCBsBV8lloRHBA%2FAedCaGYaW%2FVeyQQ7r5aK8baIGmdyVoLBHZM%2B9jObzbtVBCZO1ESFG5Yd6jK7EjJMMPxwXu5WDiGgI2cRSP7EvByWvGCVirHOyPgSAJxPXzp4CThc0zVe3pYsX7l18zwK%2FuWGURcV40z3fiwQuSh4mIP1EYvGMKByeOkOGlKJHYSd8A4zto2kUkIrb%2BuZglWBuHASvzQeApmnkMbaT9Dz0AAHqUUBB7x0pHJAs981DyUky66vG69Mh6Q5HgNjjOuUqo%2Bu54J%2BO2I3FqCxfYOSNCu3GVxZf5wbhfHdk1asiAVh40CCjAXepPXQveZ%2FszyNDcTswEzLmk%2B7l2S1LLVgc2I0mJIF9bTUptz%2BM5t3BL2lAhlZozlnF0P0zXXfBLlZJVoOPOcyUKrz7hzAr9p%2BJo6xsjBkT2PAeVtAWC0S%2FRw6j1uQmpmu4If21Yn7WgiR26fnqZoMnBNOMKRP2fKimilbcNFCbmyOYds95o09UNj2RbEPYGbfYuaYJBDF%2BxpqNwfFaphK2CzSwrU8X91ItifClWp%2Ft%2FQE%2BDnn1ZGQP%2B1ZGq1d%2FVyeWjjySacLMxBX%2FjToADDIhMjEBjqkAbfhKNDh9EpY4yPHGs1ejRlDAUwxIyDDlf%2BhoHLXqQ8l1iOQ1EoqBvRFAaYHD%2BJUPPttX1Ddys2jzySxmrgmnV5Xq2QZYtN0B2f6ihhYvm9ALi%2BeK2WrQ0utKQokzhCj1ydCmACfYzElX03Ah3RGqWzxGzgHmGbWeWr%2BaIcIPoh0SW8qwOE39R4RswtmkzzqYqaXYdN5emYqQ%2BJ2wkyIAajBmOuv&X-Amz-Signature=ba93b008eaf0263e08096d8b8c3953968b23d305bdd95b696d470454cd9c6ea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4J6RXNN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDx2wGsY6Sw%2B6EmDOgGTAcpJvV3CbPJ0HlxHwB4D9HY6AIhANVXZ6bfDiOg3TbImMBL8tFvXKrrRPvGPaNq1xHdz3rKKv8DCF4QABoMNjM3NDIzMTgzODA1Igz3gHilFiGswIKHarkq3AMCltCIgYqYrInD%2FDGLS081cz%2BzqIuH3QUe%2BjSpeYCBsBV8lloRHBA%2FAedCaGYaW%2FVeyQQ7r5aK8baIGmdyVoLBHZM%2B9jObzbtVBCZO1ESFG5Yd6jK7EjJMMPxwXu5WDiGgI2cRSP7EvByWvGCVirHOyPgSAJxPXzp4CThc0zVe3pYsX7l18zwK%2FuWGURcV40z3fiwQuSh4mIP1EYvGMKByeOkOGlKJHYSd8A4zto2kUkIrb%2BuZglWBuHASvzQeApmnkMbaT9Dz0AAHqUUBB7x0pHJAs981DyUky66vG69Mh6Q5HgNjjOuUqo%2Bu54J%2BO2I3FqCxfYOSNCu3GVxZf5wbhfHdk1asiAVh40CCjAXepPXQveZ%2FszyNDcTswEzLmk%2B7l2S1LLVgc2I0mJIF9bTUptz%2BM5t3BL2lAhlZozlnF0P0zXXfBLlZJVoOPOcyUKrz7hzAr9p%2BJo6xsjBkT2PAeVtAWC0S%2FRw6j1uQmpmu4If21Yn7WgiR26fnqZoMnBNOMKRP2fKimilbcNFCbmyOYds95o09UNj2RbEPYGbfYuaYJBDF%2BxpqNwfFaphK2CzSwrU8X91ItifClWp%2Ft%2FQE%2BDnn1ZGQP%2B1ZGq1d%2FVyeWjjySacLMxBX%2FjToADDIhMjEBjqkAbfhKNDh9EpY4yPHGs1ejRlDAUwxIyDDlf%2BhoHLXqQ8l1iOQ1EoqBvRFAaYHD%2BJUPPttX1Ddys2jzySxmrgmnV5Xq2QZYtN0B2f6ihhYvm9ALi%2BeK2WrQ0utKQokzhCj1ydCmACfYzElX03Ah3RGqWzxGzgHmGbWeWr%2BaIcIPoh0SW8qwOE39R4RswtmkzzqYqaXYdN5emYqQ%2BJ2wkyIAajBmOuv&X-Amz-Signature=c0c9834d4eeff254e5369c4d2a431c7d9f40da304234b4864fd696a7ea6f5740&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662INWPGBN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIBrd%2FHeKt0VelAJunOplHVlep%2Bq65x%2FYbSHLY0IbWZx9AiBTRXnvzksboisUjdfVSusim%2FU6IyGFyMNq2MduCHqsTCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMdaGN2Nk9w12avE7pKtwDgCgWR9ZMilo5678CXA%2BK7U2hX64MpaS0UEB5Zp4mUyxiy0QGQSjwMyGuu0B360k5m77npm0pQnyz85O%2B9GXnTrSLTbszIMK1hr05hToxSVA5qFCXkMXZhBJcg3TiE6QN8o9j1xz9sPL%2FANXucDEGT1sEPPZ%2FqUrRh%2FjWbjcfcPdzg2BkYN5WrjHzllr4Culi2oeHirNBiESx76zpkrOjgZFHhKGbCITI2CHQaP1g40PflN13MaDtFnQIcKPZ9jMlZaDHDHnhSzujStVxdIu%2FO6Nalv7Hpp2AtFf3ItM3GgjP%2FQufY9tj3F%2BCGNxplmXlYd709rGmGu%2BUFXRPsVeDRtcH42Ecsn2jk2IsJqwpZ%2FzQOE%2BiTIG8HPL3%2F%2BxQtKg8R4sdGVIzPZzqCnJx5PL8wy%2Bpo5t7waNAoHyBBgwQAbhVpBOgQ77ujF2eLTiNpYRc%2BiqgZZEMcpc0M5s4L%2FiCycF%2FsamFiCNF%2FP2i%2F%2B2fmPDyYh2cmepIhL27rV34ZhF9i14A4clFX65aJ0dd%2FRZf2Hbk7EA5nM9q2vTBopHFW1Cjq4XGVdPon4YVMYvV2isIokH8%2BoCpaQoKdib1iK3G%2B0SHdHtISBGskBKOla4fdskGjn%2FFgaMIy8eSy0kwuYTIxAY6pgF7t9cMfFtvIHE%2BNVyI7mncFT7xHVW%2FzjDyeiCNjPOR97Gr5QY8YB7z%2Bv3tjdklswCKiq3L1rPDN%2BNg9PWLdQO5SuzX8fzKP9qohG%2FdrG5Ssg%2FtCmPyhOvAxOpfk7zWe%2Fkujj%2BeQxO57mYvjWkPdc58XkET%2BeI7hAeZ3WJHYaaxzxUrzQXqGWYz8YfNBnv7JwGaaLNMi5FUfFBZL0Udf5qSkh0IamaU&X-Amz-Signature=e013ba0ea3ffb564e7ba58f91857086aad021983ba1494384e5c909724efe51b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHH5OBDP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCktfA2iiXgzdcSLnJ9Jnz9xVcaEiVJUKm5WageJOAz9gIgGtDyWptmr7sTEFZ0ZZpx487ETP7ZfQWlFdGMih0HqkMq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDHV2BTdudq6IvzdQQyrcAyjyEVPce%2F2RMqPCSjqFx3W7J57v5VeQ4G9jIv0Lfc9L1VS5SUL%2FCcrD0%2F0BLrnPxUn7TLx2maNmnYyOwj1alJFt9lP9r0FFwJTTkQ%2BS72e%2FkKqEfW5cNVa%2BC7baYPYZCeq4AEaV7CCbIuGr1D9YGZBZWRMFqbk4crBs5Ho0J62zQz50EopDuqZ0rGpJgp2vUtWts4HZQCB3E3pIIlAXuTq2sP1OFw8qeUhEI0jne%2F7%2Bkvmf4rz6WTwb9tw0mfPxydxKvS6S%2FuHQ2XaJ6k79R5Mn0TeqhBisczxcJtp%2FDIPjxoB9RpRh%2BmYWGKLSSTWDov3AC0Q3ucCjaA6d%2B1VtTHKij4ViS%2BgClp06fTAgGQbj%2FNdvUEOAfvu7lceb88ETZfwCXRyaJW5Dznb8c%2Fycj4lAdQROiDqeFOfY%2Fb9FS6UVjY6yp4YkF1YaDvS6mw1yXgS6gHlVvSNUd%2FssBSPvZ6axIwbjmVXZZ03Dr02i3cthkQwje70pMkLs68YDME%2Bf80ARumPwDA6hPcp%2FA6LcXzlz8roUnCuQ5AQIYq8YOItdyk2OAZlVnP3AQKbdKU1vZOEOoQmn7nhhrG35x%2FQxnuZNvEMBoOZbngth1%2BmZIlPD%2FjwewTnO5oaZxRs6MK6DyMQGOqUB3frQ2fE0IaDHRjD63hhwYnXVw7qzHXQ6OZ5TpI3vkkS8YF%2FkMwLHndBioqPZlVnbb1fEkhSPU5fhR0%2Bj2lxduykHzqVOcq21l6vq2hObTVa2r5535nsxDRsXoi3jM4WY%2FDAuMthsYs0OmN%2BH4bzCK1WLqkrZC76%2FYwSTGBetV4YHA359BVLkiN3HZJZEBw6Ys2RQcm0ZJLueNJE1S8AFn%2F9m0Ymr&X-Amz-Signature=71f8aff446e70ec61c364eb953510d228b314a1f12c0c6bdb1a6016f43272dce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAB4OMQF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDKof1ZB39yru%2FIAdeeGxf7zm%2FChDYtjqsq%2BNIUv7Dd0QIhAKLerKxZBeo5svp%2BPHo9dL8QBI5XulNxOPN6SRBeuAO2Kv8DCF4QABoMNjM3NDIzMTgzODA1Igx%2BJm3Cq2fKb%2FbLIjUq3AMKCY9gG%2BgTXgetdA561I5KdO6wyrmdaSCQ4mILk%2F4GracGNV8Dz%2BvF8xNLi79u3J38BW5tC0B9Y9ubCSyYZcm9kF7fUdHrYOXPqTs9hlASjL99lTD17uZoC8sMV37%2B5b0mNJB3cdM%2BeDz2tncOjvjUwii%2B%2BcwNPS0UYn4lb6qQTll%2BgPpHuXUpJPhS01RCihMzSR%2Fmtyef0%2FZWWvw2tIW7%2BLO0En2d1byDYlm85tCghBCWjxbnpLUxOKcAi4oXjpX6XOClw23JpSDklJ25kSBfozuTWOOmqFYRvpO43VM%2Fi5O28kh4wz%2FEDA0qMjdIdN0QXXnRpWSnL4pSKMsKIeYudb9qC9ess%2BK0D9KGhuFitjkmGgLqI5IPgREuK7LBoQZ9RJD38rpBy7g91O6PglAyaVyPjXMNu4%2Fnn%2BcWJt7MHWDKbNClP9oSVOKHju0PqkqBoO33AOWB6ZRS%2BjmyaDVOK%2FX3dI%2BxhDvRzqBz%2Br5TSxHiounCtov%2FeA2aLiXG1Fit3ajwZe3ekKNXf%2FkwaVaW7u6Yn8F%2BShxUyxwZqmEyzN4Q09yfdWGLROFDebo5I7bqOIhXuwMHIfskS7fN1lFIY%2BewGp2SEzoyvCcbM31HQ9skE6psnyNtVH255jCkg8jEBjqkARtphptK1Lox5pDnmx7eshT3SQ5I4EQEN66%2BVYHcvJ6DCRsu8vT00oKZjsOa0pJufiLy1jiFGFeW8CAZEynBD7CgXNoHWOLRfpetl9swhNDbyzFhpKV%2Bfg6VJsXJh8ZAHBSJlozQ5l%2B%2Fnvk0y0%2BvXvbXRsbcFzfuVw4dd%2FZa7%2Bu%2FHtSuGdN5pYvtQ3SwYn4%2Fh4itZi%2B4zrCi%2FBqQLf89uSyLk6HJ&X-Amz-Signature=3c5ec3b27806dafee0fd572c23cdf5fa5446d590f0a96ae60669692395530800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4J6RXNN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDx2wGsY6Sw%2B6EmDOgGTAcpJvV3CbPJ0HlxHwB4D9HY6AIhANVXZ6bfDiOg3TbImMBL8tFvXKrrRPvGPaNq1xHdz3rKKv8DCF4QABoMNjM3NDIzMTgzODA1Igz3gHilFiGswIKHarkq3AMCltCIgYqYrInD%2FDGLS081cz%2BzqIuH3QUe%2BjSpeYCBsBV8lloRHBA%2FAedCaGYaW%2FVeyQQ7r5aK8baIGmdyVoLBHZM%2B9jObzbtVBCZO1ESFG5Yd6jK7EjJMMPxwXu5WDiGgI2cRSP7EvByWvGCVirHOyPgSAJxPXzp4CThc0zVe3pYsX7l18zwK%2FuWGURcV40z3fiwQuSh4mIP1EYvGMKByeOkOGlKJHYSd8A4zto2kUkIrb%2BuZglWBuHASvzQeApmnkMbaT9Dz0AAHqUUBB7x0pHJAs981DyUky66vG69Mh6Q5HgNjjOuUqo%2Bu54J%2BO2I3FqCxfYOSNCu3GVxZf5wbhfHdk1asiAVh40CCjAXepPXQveZ%2FszyNDcTswEzLmk%2B7l2S1LLVgc2I0mJIF9bTUptz%2BM5t3BL2lAhlZozlnF0P0zXXfBLlZJVoOPOcyUKrz7hzAr9p%2BJo6xsjBkT2PAeVtAWC0S%2FRw6j1uQmpmu4If21Yn7WgiR26fnqZoMnBNOMKRP2fKimilbcNFCbmyOYds95o09UNj2RbEPYGbfYuaYJBDF%2BxpqNwfFaphK2CzSwrU8X91ItifClWp%2Ft%2FQE%2BDnn1ZGQP%2B1ZGq1d%2FVyeWjjySacLMxBX%2FjToADDIhMjEBjqkAbfhKNDh9EpY4yPHGs1ejRlDAUwxIyDDlf%2BhoHLXqQ8l1iOQ1EoqBvRFAaYHD%2BJUPPttX1Ddys2jzySxmrgmnV5Xq2QZYtN0B2f6ihhYvm9ALi%2BeK2WrQ0utKQokzhCj1ydCmACfYzElX03Ah3RGqWzxGzgHmGbWeWr%2BaIcIPoh0SW8qwOE39R4RswtmkzzqYqaXYdN5emYqQ%2BJ2wkyIAajBmOuv&X-Amz-Signature=09aafe401fd5353e38368bcd7fb4d424f212204bf4121d7a71f33039a5d2d94a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWELX3VY%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD0DYGIIC0uxoD4CKWsnCBYArJvqJAdi7zbsf3QmadZCAIgWzbw33O03E%2Fjm2S%2FP6kgrMuiQH%2FDXvaFB6iVC7h7HJ0q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDFh3WTZ%2Buf1mkg%2BQ4SrcA2IOO5XX4crR3zic%2BJ2OchR%2BmvL3lOzjwX61ZcI%2BF8cVPIajGRNyQHuCADj%2F%2FBMq3CkPcOlqQqpLK9cE8BRtXlmZez2%2BoWBqPOrLGPzGi86Ppu0%2BV5hOLLNQeETokIewxKSJj7EiEho938WE0CgVBas60%2F6YngVpucNsEkUo4hVU4ZhBHkKw1Vty1FNbrA%2BCFnoOjf8lehlXhvxP6%2BjtgtpSW8jMYBpKurKrM0opbC3vljRPaB07DVHdXTMvU%2Fza5VXBPjNxFX9WelvZcZQzvr%2Fon9b1%2BSgYN1OKWtWijzpSGgGLDVaGWpZMuny%2BSNKgGVg8keGyKuL%2F7d3djZuSJyzaRhAg9Rzz9vOs89A215dxf%2FciSXNufb1OAUFcy6mjRytX2d4SPTWlJSOxnU7QThbblXekKMEXW2gbH4Oa6je%2Ba5V9nN6jWGtR%2BVUiAwFbsBpd9tYwVPVbem8lGKtgKWXFq8dadkXSQAlqLqpqRXTUg%2BUBUacpTyERitMTveBE25eYterTpzoNxvxgMlnCFXlDKzOv0z9DXydL54FHfKOKCHsX4AuQ4kVeLpPYmTdx%2FQFgJwF%2F7JixBOVrm6ocrQ7G4d4DaL9EqGcWvlXzhS1VDrkzUQieVNa4jQinMJ%2BEyMQGOqUB9etmqZpRo536od%2Fi08RM12RdxEPggZqwZOHOedVtMA04jXYCmUYPvrvJsD8ZLzpICD1BH71zdc0pCPSZUMeZTbGR9QsVYJgJh7nY31qIWlnlX0kJX7vmG4%2F81Rb9fxSNAzKTo72yxm7rhd%2FxmiXoQCky1Gpb%2BsrmtVx0uSCoiae4vptXdHLn%2F1oISqnAQkKmLe4su0XUu9YIcDQeXZnSkPFxLTTP&X-Amz-Signature=d32743e74572ed78355f9c1306f78c682c054af726016cda8d3fd6d8bb4cd2b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4J6RXNN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDx2wGsY6Sw%2B6EmDOgGTAcpJvV3CbPJ0HlxHwB4D9HY6AIhANVXZ6bfDiOg3TbImMBL8tFvXKrrRPvGPaNq1xHdz3rKKv8DCF4QABoMNjM3NDIzMTgzODA1Igz3gHilFiGswIKHarkq3AMCltCIgYqYrInD%2FDGLS081cz%2BzqIuH3QUe%2BjSpeYCBsBV8lloRHBA%2FAedCaGYaW%2FVeyQQ7r5aK8baIGmdyVoLBHZM%2B9jObzbtVBCZO1ESFG5Yd6jK7EjJMMPxwXu5WDiGgI2cRSP7EvByWvGCVirHOyPgSAJxPXzp4CThc0zVe3pYsX7l18zwK%2FuWGURcV40z3fiwQuSh4mIP1EYvGMKByeOkOGlKJHYSd8A4zto2kUkIrb%2BuZglWBuHASvzQeApmnkMbaT9Dz0AAHqUUBB7x0pHJAs981DyUky66vG69Mh6Q5HgNjjOuUqo%2Bu54J%2BO2I3FqCxfYOSNCu3GVxZf5wbhfHdk1asiAVh40CCjAXepPXQveZ%2FszyNDcTswEzLmk%2B7l2S1LLVgc2I0mJIF9bTUptz%2BM5t3BL2lAhlZozlnF0P0zXXfBLlZJVoOPOcyUKrz7hzAr9p%2BJo6xsjBkT2PAeVtAWC0S%2FRw6j1uQmpmu4If21Yn7WgiR26fnqZoMnBNOMKRP2fKimilbcNFCbmyOYds95o09UNj2RbEPYGbfYuaYJBDF%2BxpqNwfFaphK2CzSwrU8X91ItifClWp%2Ft%2FQE%2BDnn1ZGQP%2B1ZGq1d%2FVyeWjjySacLMxBX%2FjToADDIhMjEBjqkAbfhKNDh9EpY4yPHGs1ejRlDAUwxIyDDlf%2BhoHLXqQ8l1iOQ1EoqBvRFAaYHD%2BJUPPttX1Ddys2jzySxmrgmnV5Xq2QZYtN0B2f6ihhYvm9ALi%2BeK2WrQ0utKQokzhCj1ydCmACfYzElX03Ah3RGqWzxGzgHmGbWeWr%2BaIcIPoh0SW8qwOE39R4RswtmkzzqYqaXYdN5emYqQ%2BJ2wkyIAajBmOuv&X-Amz-Signature=915b9a745a03b3e6b77e03d1b8c0ccf55ac99782221975b14056ef3e4aa21c82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VMJP6EF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIHRBDMw%2FwpdsnyHEzVxMhzub9nh63LdL2Sm7ysiDaBo7AiAzP224fH3BVAk0qKLeC0ur3Z3E3MUoH%2FtilXsnxLewFir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMJMMsxGbUVRF86XfwKtwDO%2BdJXN084wTVFKB48apTytPVFZGgaXDhPHo1KfilSMTAegd2g5AD9dcUkymLv4NCW8SZ1yLFILODE2l7i758DZnLee1HYgNr%2Fq3IXWB42RXQZiXpGpIEzhSDCHtP6Fi1Wa2tSlOlC0ybQ%2Bf7gRkUAbJkWYRFIgKZVDzx3Is4VQ8U8yVg89x4DGjhOGi7GEPvG8ICXPIqTaFNL0%2BAiEsCQLB7q5%2Fd2E62DHl4pTM%2FHTldHRuX%2Bph6Hpt4VSb9DXVILB4PRXgJ%2Bk7D%2FuV5BrLhSGrmZ%2B%2BCpLSwbFS444vFIS9QTwhReDzhSKJG%2F4f7KM99%2B%2FuNjB0iHhYy1RCrqbhTIZyTPWXCiNbfFMxYHKUj63PKA34Ngfcd%2F5OaI8FhpIO1KvkQr1MJLgLT5FLYsIi%2FpqDw62kvF%2FOfb4rBl959%2BoFQHv3idgIl1nlaWunpF%2FHza8hXbQFu383ROlwKAKiUCZF%2FBSx%2F7Zc4AKARkhXC1c9YDMTTGcDULqoogodBv5my2HrWz6zpIhAOiIr0kglCl%2B1do0SorON35Z0cazh99LpGYQjbY02ZpW0ygwHywAXOQDDwlkbZBwe8IZ546Scu1waIzHMBkFhWcl0qKA7gj9XZNFg%2BiXJHgP%2BJ2QQwsITIxAY6pgFA%2FkOhDQvZEAl7UcHp0SDxW4nyZh9yA59YWL8%2BaWVY7rpj2DoAu3isLnBSf2%2BIqQw5yQxM1LqJ9FaMFSR1p8fidsa6yFN54ImtXl4QiCtcbFjGnwxMHTVJAt%2F1uZeL%2FrNuvT9w4qFnme1gG3PwBHjSCZSLnykklDvr09qDXVKWZMZrKl3SfD5XHkxijIerpbD9SsjTKDwnpc1pH%2FiW3yi5Vx3LeFJ0&X-Amz-Signature=4ff4405f6c3fec25264085bd700f7054a587d4a0c2ed9ac0f50225fa95ec3d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4J6RXNN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDx2wGsY6Sw%2B6EmDOgGTAcpJvV3CbPJ0HlxHwB4D9HY6AIhANVXZ6bfDiOg3TbImMBL8tFvXKrrRPvGPaNq1xHdz3rKKv8DCF4QABoMNjM3NDIzMTgzODA1Igz3gHilFiGswIKHarkq3AMCltCIgYqYrInD%2FDGLS081cz%2BzqIuH3QUe%2BjSpeYCBsBV8lloRHBA%2FAedCaGYaW%2FVeyQQ7r5aK8baIGmdyVoLBHZM%2B9jObzbtVBCZO1ESFG5Yd6jK7EjJMMPxwXu5WDiGgI2cRSP7EvByWvGCVirHOyPgSAJxPXzp4CThc0zVe3pYsX7l18zwK%2FuWGURcV40z3fiwQuSh4mIP1EYvGMKByeOkOGlKJHYSd8A4zto2kUkIrb%2BuZglWBuHASvzQeApmnkMbaT9Dz0AAHqUUBB7x0pHJAs981DyUky66vG69Mh6Q5HgNjjOuUqo%2Bu54J%2BO2I3FqCxfYOSNCu3GVxZf5wbhfHdk1asiAVh40CCjAXepPXQveZ%2FszyNDcTswEzLmk%2B7l2S1LLVgc2I0mJIF9bTUptz%2BM5t3BL2lAhlZozlnF0P0zXXfBLlZJVoOPOcyUKrz7hzAr9p%2BJo6xsjBkT2PAeVtAWC0S%2FRw6j1uQmpmu4If21Yn7WgiR26fnqZoMnBNOMKRP2fKimilbcNFCbmyOYds95o09UNj2RbEPYGbfYuaYJBDF%2BxpqNwfFaphK2CzSwrU8X91ItifClWp%2Ft%2FQE%2BDnn1ZGQP%2B1ZGq1d%2FVyeWjjySacLMxBX%2FjToADDIhMjEBjqkAbfhKNDh9EpY4yPHGs1ejRlDAUwxIyDDlf%2BhoHLXqQ8l1iOQ1EoqBvRFAaYHD%2BJUPPttX1Ddys2jzySxmrgmnV5Xq2QZYtN0B2f6ihhYvm9ALi%2BeK2WrQ0utKQokzhCj1ydCmACfYzElX03Ah3RGqWzxGzgHmGbWeWr%2BaIcIPoh0SW8qwOE39R4RswtmkzzqYqaXYdN5emYqQ%2BJ2wkyIAajBmOuv&X-Amz-Signature=4831adfa916003a6d64c175124bbc336f1a9dabe975c9907dbd4aca580159793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663TAB4IH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIAQN1AKHduqeJ%2FZi6DW%2F7lkvAncKQbZfFAATEGRyiliDAiEAhLt0EjBdI4AjzM1NtfaT0nfZ1D2wlyqxiaPTCW4FkQIq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDEvg%2B5D7FeDLJjpHbyrcA3kGLBVwvCVKAIYroSccDum5GVYK1OdyHX%2BudlulJipRvndhaXFRKzb9IHwVV0FZNPKLRn0m0y82i3WhWzI%2Blmx5M6mvTs9zfeQpkIjmSoF%2BFl71eUfHTIfzbC2Kl7sj0LqfMNoKZFdygzP9JHGOUS%2B8yXJ%2FKgWqZNHz71RupP7463Dl%2BDh96vicFeRobNGg4jh9EzXN5CEc6C%2BPpe%2Bnq4Hd8A78jVzXoxlyVmB0BvWwQ1Mg9%2B3TEvEPprVPycgr%2B0hVn9FrlttGmX8qfQtYo%2FoziWSdr8ZuzRLz2%2FCSq%2FpaSbkMBMAhUhunCpuMIWj94mKrW059f%2BpI9cwJzIEUDE9O47gZvYkPy4WGu%2BX1Q2cz%2B8ZmhAg0PJvKIRkm7KCgeDQnMsEhaRfJRYeW%2F9ZB7gEav%2BS%2FOvC2772OhegPl6b0huPJo4NEq8gzGYbapEqpMKiLn4UsfsUmzyoPi%2Fjv1kfpUwBp7uwNw%2FzV1gfjYy5F0MScOJWXyV8koGhCU6yb6S8QWP2lNivcaO9zDjISkKfCHHVmyOOSZFMDw3G6ILuwuPkkvd99Ya4qMXWoTn6F6HMYMjt%2BB0K%2BiaJzq82Y%2B03hbMEINAmGoNaRpJDEmSDQMo%2BQiUJ27ZVkV9yUMMaEyMQGOqUBN9wmMQVMJvzrQx0EyjeLAsNZGBVO7aKp6KO6dvooK5YznR09qg8jI0ZnfJqSut8Jmmz2ZAS9Bs2fVb7Ct1JxOtSQNOn%2BAVafMYZnq31Q1KOmDmRtT1H%2BL8dVzDJvzE2CRt%2BFqWfCF%2FWK72%2Fi%2F7FIopmYUHp4X1eVrUR7W57i%2B9wseSnemh4f1tVALHYaE8H5Qs3myXj9IqVYqW5QklQ2dgGuPItU&X-Amz-Signature=7f59fe1235ee50b1121a6bd43f5958447a773540c53aeb2d13ceca22b43d2050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4J6RXNN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDx2wGsY6Sw%2B6EmDOgGTAcpJvV3CbPJ0HlxHwB4D9HY6AIhANVXZ6bfDiOg3TbImMBL8tFvXKrrRPvGPaNq1xHdz3rKKv8DCF4QABoMNjM3NDIzMTgzODA1Igz3gHilFiGswIKHarkq3AMCltCIgYqYrInD%2FDGLS081cz%2BzqIuH3QUe%2BjSpeYCBsBV8lloRHBA%2FAedCaGYaW%2FVeyQQ7r5aK8baIGmdyVoLBHZM%2B9jObzbtVBCZO1ESFG5Yd6jK7EjJMMPxwXu5WDiGgI2cRSP7EvByWvGCVirHOyPgSAJxPXzp4CThc0zVe3pYsX7l18zwK%2FuWGURcV40z3fiwQuSh4mIP1EYvGMKByeOkOGlKJHYSd8A4zto2kUkIrb%2BuZglWBuHASvzQeApmnkMbaT9Dz0AAHqUUBB7x0pHJAs981DyUky66vG69Mh6Q5HgNjjOuUqo%2Bu54J%2BO2I3FqCxfYOSNCu3GVxZf5wbhfHdk1asiAVh40CCjAXepPXQveZ%2FszyNDcTswEzLmk%2B7l2S1LLVgc2I0mJIF9bTUptz%2BM5t3BL2lAhlZozlnF0P0zXXfBLlZJVoOPOcyUKrz7hzAr9p%2BJo6xsjBkT2PAeVtAWC0S%2FRw6j1uQmpmu4If21Yn7WgiR26fnqZoMnBNOMKRP2fKimilbcNFCbmyOYds95o09UNj2RbEPYGbfYuaYJBDF%2BxpqNwfFaphK2CzSwrU8X91ItifClWp%2Ft%2FQE%2BDnn1ZGQP%2B1ZGq1d%2FVyeWjjySacLMxBX%2FjToADDIhMjEBjqkAbfhKNDh9EpY4yPHGs1ejRlDAUwxIyDDlf%2BhoHLXqQ8l1iOQ1EoqBvRFAaYHD%2BJUPPttX1Ddys2jzySxmrgmnV5Xq2QZYtN0B2f6ihhYvm9ALi%2BeK2WrQ0utKQokzhCj1ydCmACfYzElX03Ah3RGqWzxGzgHmGbWeWr%2BaIcIPoh0SW8qwOE39R4RswtmkzzqYqaXYdN5emYqQ%2BJ2wkyIAajBmOuv&X-Amz-Signature=5ec86d8fee72eb324e3b17b5e2f7200217a47ab2fd5b95ad6d027bfc9f940d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIUDTHIX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCICzcfQNXm8c2eFqDJB2VNf5r5Hl2poDYDS8er5m3Yc6sAiB4BxWALP9sfJZWeBdUbITqWF35HU4w13oEu3X4ByftMSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMNsXeIDFT5Z3oXRuNKtwD4RNt2PNI0W8eIYdIkadPpoBgKi3YVYPSeMPU%2F4S59za6%2F1%2FK%2F2l3sK7jlplr0mwZJRuVCUe2Zbnmxh6pljYiqCN5DbGlJwv4wLsEUO%2BdjO8v2Qm%2B0U%2F7zx%2FjhgqSSMxZqWYHyGoEiN3vtiDCk7ktegekOzMwv8AC2mj%2BDc1yO0rmxJl1X0ENjinlmOBqTtcRL3pzbt%2BWJ4pV9uAWtQIx4XETXqtC%2F5PYx0btb%2B3K2laizbG1L8N5IVVuad7VTf0h7WjwLpJZKL9ujwYw9Fb9%2FMOpoUZk1nrSVPH7ekRhMapvr0setjCIIBn%2BSr72MN5YDhts0tbqlwnhmZp16DjSd29YjsbOCUpOfzs7s4p%2Bu40hRfJbWikt6PZEc1Ph1k8xAfTDWJho8YVhpdFfFo3hhjHaED5b5VIMxMD%2BV%2B%2BN1yQTRs%2FSJ2gAteshmZUj16iTzDskGa31Q5KRZxe5f8t0ErAfW9rMMU1iQQ%2FArntab5IYDik9c3yrauAIuDlLWH6uFAnxNZf6YekgAuOtcQCRDHi5tIfCN6TfVy4nOkqnxOCRfrOLq1boNXCTTCY%2FCNiZav36zmINlk9YUk%2BfdfVCHYqufGyXoRtzwB1e8W%2FlRDhmykoTBB5RUr9gFqIwqYPIxAY6pgEXkfm3hK%2BWaYL%2BTwM33kzqgGFwKdd8CKppI2bz4hagW8JDyjEfowE81ft6tUI2HhAVVABve4CuKqIN%2FSQj5q2Xd4LBTsnS6h3OIAMKS0D1jaGdI7ZpTOa5eIrzgL6BSlrueQmwSSDoPD91BiZ1%2BGXJyrY6PUULaw3w5Dur4%2FkafU%2BPynTvuBzCaH01F%2FjDq0yb4i8l2xVz2%2FSFbc7XviY5idLPr2CH&X-Amz-Signature=c6b05b1e4c273c4d7842805f3cfb47ec0ae09f1756292e59906813a9fb496eeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVN3S3BZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBsdvCHcXTBPKJaVDS9kkK3kXRc4%2BF88pZdArU1OvvHWAiEAljf7q7bXpTdJqAVUS1iDuSVhlhBHiLVoJ3GzcqlvkqEq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDEE1nzTv7USlUKZOkircA4muyhdn%2FdDLTqw%2Bmt%2BvzCxWp4FnVvz8hfSRs6eI246XA6r30PhARIfzSsr1lO0hOIVDH%2BsRsjHLw%2B4KtTIfm7M6q0kwkpSpubNaBy7x98wHe2wiQlgHW1ZA3eYiEhaqXSfQOG15AnAt6x9QO5Sc7gpRGq107REUwZACvlEXyV15aimspmhhf5nt5NIqD70NFYOiz6YzVSifXLuP1WuwZyhbSjOtB8MzFtkTpV2FuQ8lq40UXlTiDXna74D5BOe01aiQqIw1Geo9po0Onvbfnh%2FDaDes7g2UD9aOBayaOLFamn99DScoTUp4E3jpwB9DbTL63EexHxNV2XBFho9DAXuumqleEG29y3ZHuobuQEQoiahu88%2FXXvzwmhJRHvmlm8yBUHBh2AMphnKxvxFnJG8HFI%2FKVf26jw0ySz%2B2%2BqA62GatHOezHdGemjF3Smbq8gPPkCMa%2BJzYU0kENGjVyHAhUiGUv2ryKBHPm1FlCCSACLNl2XsC7vABd3iWUUcJETd2uxA9TfUtvWGyi%2FhPIAVabRhMu6L0VcTukypTBjVIgvtWXueo%2F71EsJ%2BZIhTZW1vBDOmZZMkeU9G6DZjjGQ4qAV5PDhwJublMN9bYUhNL6T0XwBq617SKJSALMMGDyMQGOqUB7Hyf8uOkUDqUfiBbG23XpQe1o1iHt9iSu9sngO0YrQrhhmP2PqzJodkmGp1trRW578ILR7jN%2FL5j1N8jDjzhles2RGg0WVPRy0i9bA6AR34G3vS4FGKqm05NPtp64sOdRU9GrHWdHZ1Aymoy0OxP4dJn8mG%2FRLlSYrEl5%2BF8F6%2FTqsCWuhPutkkVAFh%2BRgbuFtIi1kwc%2F%2Bd4faVjkMjplVfVtroX&X-Amz-Signature=6440613ed09254a50fb65b51b843ad9782f67cc5a20cb1d6be916b951e8b0500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624AWXUIX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIF5DV9o7F%2Bx%2Fc14OsGTep8vNS6ZSQJvn%2BHbv3sVlvyAMAiEA9zSBDokm6Q%2BNhh53i7V22pkvgt1iTBoZhIdpQTpgorcq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDJ8G88rImuk%2Fg8B%2FtyrcA7XTY6TpQ6C6LX2K%2FFyBanpCMP4gNCon9akWKpFtXC6%2F%2BHTuwlNycHxqtVbFKMWlJzMDOQtB6kWp3bE7cYI%2Bs24vbLEzyWK%2FIo1RBKGQIGLX4H2h%2FaXw3Vaai1Cj3HwCyuJ52hbxWGS5iHDx1d1LKnWsFxOaPBTLSlFNhC4go0%2FjQSULrdINMepxFWMnnPKzzIp5HTLlMwv3zEGVc7pefiOaaMmbO5IDmdgjnAeOM%2FTjn6vjl8OCJ215QSsqOzM2KkIOzJaw51e3Cr68EE9mjJ12OEuuL1a7iWXR39BsPPiMlI8SB815vlOg%2BvH6CEoHJKRvwIKm%2FKftT%2BSAAvi0d1a4iAkcoCSTi%2FMsvv3b%2BNFNXp5eeHSHxkOAQnzK9AEKm49NeaEaiREFXfteBlmjRb2wKYgr0XVwVPhDrCiZ0V7Cm1c%2B%2Fx0s1lIQQw4TJDyxT8%2B9Wd%2FiXBz7N6H%2Bu5MJoHx%2F4i8c6J%2FA%2FSxsogZAGkIEVsgwn21Ty2dWG71tmIzNOiQDKahlgnFD%2Fs987CXoJGK6gf5sEgeFRfuJIrmtZtpcq%2BRunHqvib0WpmRx9w9nJI7dal7qMvqEHp%2BhDXENRgmLWJqEKYMQITVdvVrT4eTBdi3ys%2F6c1r6vxPVsMK%2BEyMQGOqUBXTtNAaeloFTOAXXFuUyigdAsTWXf5HceoKE2fogIJZWvkLokL%2BS1RGb7JNPRJ3oqR5e3HIYV4lYO7HtfzHvgCYe8QgPv%2BU2yLR%2BYaMvJBL%2FoL7fyTHN%2Bz0PZ41eMOrWEBHnJMdzuxH2j1aT61aHSRpCtCx3i%2FQa5dhx55rEBGIyRWOzmt7LPQLkmOtKEdcqWA30%2BynuKD2OWIJpuANO1G7SeC%2B%2F6&X-Amz-Signature=ed426696374d3ce46e3ab4b64367ca22026e1b9ad8bec724d9b5fe75d0b44eb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GUJOFM3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC1f1EPeU3QUwXI1WXwqw%2BeOKF%2FkqFVxx06z1KcsZ2OcAIgKjR8%2BMGd4skHfNAxh2Jn8U1xhzlujq7ISjxqKB87BVwq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDG9aQ7UuoKLQf19DaSrcAweImdel1OsEHUW481nQ4con%2FUsbzgMC2gABKObnSG8dcBcvoh6k3kOWghXobP3ppc%2BZPaxLogmLDhLK16wTPxig7WNoBCelvXoDbKr%2FL3aHNcDMudbc21t1vudKQjtKTk8dihWUjUtpUiCM%2Fjacma3ZvPgYg8mVGcwQ8Ti1XhnlrlJZggRnqun7ZSppwtZfxRgjpa4CZBCsl3zg%2BZKDNY3eKy4j86nOhzye6pU34%2FgZbM0ffqMqbpxZVFgTMFRo8bvst3ovGfLjlg24pILxlLJujQ5V9T%2B8Ckmw4itGNArJHqpbSLfggHT8R2ka4nFXiIU8Wj1njg2FgqqYA2izyjz1G6s%2BY5zUpLQHozfEOcwXl5QViIaAbroSsSUQI13LtGwkahXVKdypZbDgFx%2BfBscXYVrh5RrcgSrx6QLcQDxLSedd%2BQ1aNSJ%2B5jmVvfHyYRcSw7y5PErlCbSOCNImdAN%2FTEQCcQgaLPyOnJQHExdTvUXzMwppI%2FUdGCCYY2cZRm51RPZnXOC4T6Ke2vnnZ3EOICPgd3Fw3pfFjYDnlovYmqD13MUU33VIL%2Bw3tI3Ben4FgEbI22pnaQmYUISq%2B%2FRrqEDTbQLPxCO2ny%2Fy5lzrjYeFnctNpWVXq13eMPeDyMQGOqUB89764eJ69k3EmVtqIod2YF7rr%2FBlFI3JMZlI6Kc115sJGwa070bsveyE0kq5OGeNApTp3GRUe%2BTxFCR3VBXo87k9uJJOM9QiY%2FVq5NlXWf6R7vL6Mvhoi83zlWsBFhNM3EDexws5BWX1153rC1gelxB8k2vs9l2B0xTcApiLwSwy%2FQKeWd%2BhW94XPawvURcD6JWphMGXW%2Fstff2CJunPA1Q%2Bfc00&X-Amz-Signature=bdecc703d5b6296fd4da9bd2e510bbe2283e064d889116d7e0e5c0fd1f04725d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677DDFPWZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGfd%2B9Ui0B4XyEOZx0EaguO1mABROywe1uUFSwZVfUHjAiAke2XaUntWSogTZPMr9Gq5QVdnuuYkaKzuESQ6Gtjv3ir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMPR67K5QvdzGuvJH8KtwDAkY1WuR3Coe2veLgXcR4VYUig%2F8G6A9tUEKIlz75n%2B7cGxzjil6mFrkZJqjf7QAZfYSRYSTZT92FBRoYAEoozmf3SxHptBqdCxWSKmgd%2FAFWKY8iZYEuSSQ50bepys4HmlMCBN7aiKWWI%2FXht8K8J8aZjnocbcSPpIlRLszylic751Yr1KfZQC1lalxFHled%2Fq%2BhzETfd3Ylb71xEAi%2F4og2bCgc4DqQd6NSVyuGaZUbJX7Nph8q2G246igSUY1oFfkcUSeSQsJvELyUSufJshPwXFXBy3pRRMISC5Em2G7JL%2BFkdu%2BhGQdKmgzGHRyI%2BTDGr52DNE1fsCZGaUnCyzU2kQKuzrSO1nTDZsAcqosd4aJk0lyzXoFWYQpOXMrO555Z0GBNP0vcLWWF1ldq9wZKtlRwRQcGXwD4Gh6FfDL9%2FHld%2B1ljDOK4n%2BA3TCIiPbzcmfgHFE7sF3rzxRLbfM90BsbEK4wbQY90F4trPpAubypVZMexy0alX9rhlNOTHr6EBEcU9askuDw5bV1WjOu%2FeFpZaLCHMqPbGhnfGfUt6%2BlWPiT8pg1FfHB0rFbAK48%2B1NHTT0qIa4nNlYCZfSnljrFw0XibjspT43j0PPXBomDFItO6FtTf0rYwi4PIxAY6pgFz8qOTL0DYEaoUdbPn4a1vt8cOi0dLGEQfyz%2Bf9%2BW0O7M4rj3z3J5HGB7SQmNYM%2F3SdJp7ZzoX2S%2BU1Wy3Ryy5%2FcahDdYFn1EuqE%2BpiRP2rd3vmxW1Rq4J9kY8jPJmo58O3Fwb7uCf5I7ON%2F6ooJkEqJx5TZGq4xFb4uAAvrRoUESZfTyKTqZvVdMRte2L7%2FjswJpdikhLskNIE39alSuCHxfSz30u&X-Amz-Signature=00b51cf55caa741411b5157785727e3b1dccc4cad1edcfe1949fa84a39704dea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4J6RXNN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDx2wGsY6Sw%2B6EmDOgGTAcpJvV3CbPJ0HlxHwB4D9HY6AIhANVXZ6bfDiOg3TbImMBL8tFvXKrrRPvGPaNq1xHdz3rKKv8DCF4QABoMNjM3NDIzMTgzODA1Igz3gHilFiGswIKHarkq3AMCltCIgYqYrInD%2FDGLS081cz%2BzqIuH3QUe%2BjSpeYCBsBV8lloRHBA%2FAedCaGYaW%2FVeyQQ7r5aK8baIGmdyVoLBHZM%2B9jObzbtVBCZO1ESFG5Yd6jK7EjJMMPxwXu5WDiGgI2cRSP7EvByWvGCVirHOyPgSAJxPXzp4CThc0zVe3pYsX7l18zwK%2FuWGURcV40z3fiwQuSh4mIP1EYvGMKByeOkOGlKJHYSd8A4zto2kUkIrb%2BuZglWBuHASvzQeApmnkMbaT9Dz0AAHqUUBB7x0pHJAs981DyUky66vG69Mh6Q5HgNjjOuUqo%2Bu54J%2BO2I3FqCxfYOSNCu3GVxZf5wbhfHdk1asiAVh40CCjAXepPXQveZ%2FszyNDcTswEzLmk%2B7l2S1LLVgc2I0mJIF9bTUptz%2BM5t3BL2lAhlZozlnF0P0zXXfBLlZJVoOPOcyUKrz7hzAr9p%2BJo6xsjBkT2PAeVtAWC0S%2FRw6j1uQmpmu4If21Yn7WgiR26fnqZoMnBNOMKRP2fKimilbcNFCbmyOYds95o09UNj2RbEPYGbfYuaYJBDF%2BxpqNwfFaphK2CzSwrU8X91ItifClWp%2Ft%2FQE%2BDnn1ZGQP%2B1ZGq1d%2FVyeWjjySacLMxBX%2FjToADDIhMjEBjqkAbfhKNDh9EpY4yPHGs1ejRlDAUwxIyDDlf%2BhoHLXqQ8l1iOQ1EoqBvRFAaYHD%2BJUPPttX1Ddys2jzySxmrgmnV5Xq2QZYtN0B2f6ihhYvm9ALi%2BeK2WrQ0utKQokzhCj1ydCmACfYzElX03Ah3RGqWzxGzgHmGbWeWr%2BaIcIPoh0SW8qwOE39R4RswtmkzzqYqaXYdN5emYqQ%2BJ2wkyIAajBmOuv&X-Amz-Signature=9e2f4b3105892395e7647e0df8977f68078f3a199427ae9fcdf142310b684b73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4J6RXNN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDx2wGsY6Sw%2B6EmDOgGTAcpJvV3CbPJ0HlxHwB4D9HY6AIhANVXZ6bfDiOg3TbImMBL8tFvXKrrRPvGPaNq1xHdz3rKKv8DCF4QABoMNjM3NDIzMTgzODA1Igz3gHilFiGswIKHarkq3AMCltCIgYqYrInD%2FDGLS081cz%2BzqIuH3QUe%2BjSpeYCBsBV8lloRHBA%2FAedCaGYaW%2FVeyQQ7r5aK8baIGmdyVoLBHZM%2B9jObzbtVBCZO1ESFG5Yd6jK7EjJMMPxwXu5WDiGgI2cRSP7EvByWvGCVirHOyPgSAJxPXzp4CThc0zVe3pYsX7l18zwK%2FuWGURcV40z3fiwQuSh4mIP1EYvGMKByeOkOGlKJHYSd8A4zto2kUkIrb%2BuZglWBuHASvzQeApmnkMbaT9Dz0AAHqUUBB7x0pHJAs981DyUky66vG69Mh6Q5HgNjjOuUqo%2Bu54J%2BO2I3FqCxfYOSNCu3GVxZf5wbhfHdk1asiAVh40CCjAXepPXQveZ%2FszyNDcTswEzLmk%2B7l2S1LLVgc2I0mJIF9bTUptz%2BM5t3BL2lAhlZozlnF0P0zXXfBLlZJVoOPOcyUKrz7hzAr9p%2BJo6xsjBkT2PAeVtAWC0S%2FRw6j1uQmpmu4If21Yn7WgiR26fnqZoMnBNOMKRP2fKimilbcNFCbmyOYds95o09UNj2RbEPYGbfYuaYJBDF%2BxpqNwfFaphK2CzSwrU8X91ItifClWp%2Ft%2FQE%2BDnn1ZGQP%2B1ZGq1d%2FVyeWjjySacLMxBX%2FjToADDIhMjEBjqkAbfhKNDh9EpY4yPHGs1ejRlDAUwxIyDDlf%2BhoHLXqQ8l1iOQ1EoqBvRFAaYHD%2BJUPPttX1Ddys2jzySxmrgmnV5Xq2QZYtN0B2f6ihhYvm9ALi%2BeK2WrQ0utKQokzhCj1ydCmACfYzElX03Ah3RGqWzxGzgHmGbWeWr%2BaIcIPoh0SW8qwOE39R4RswtmkzzqYqaXYdN5emYqQ%2BJ2wkyIAajBmOuv&X-Amz-Signature=3f5b0fad139a2efbfca07fc1889cfb70b14c20d63eaad3ac9e5b33659849c01b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7XPLBIR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCFk5esnz9%2F89JHXTjSGj5yejYvNDr7z%2Bi4VejVhXLgiQIhAIghsg5W5%2BUAydhGOvbTf7X9P9Ck8Qlivhxv1CTptDtWKv8DCF4QABoMNjM3NDIzMTgzODA1IgwCqSau51qHfYQx0Xoq3ANRDy3FCIqrvM4Um%2B7BHZEaLtMKGtCcUWmHbAcro6Ujo%2BbE3WHxw0Ia9BVb2w9%2FlKxfBmrGqO4CHygiFV36uyqNzGfzRCBXZsFrayxtirkz3pnYiZG6UOdyOR7YxghqWCmmYLPkkAdWPKYTgBjcpkbSQDWqu%2B45xin12XYNvjYT9KMbM4hyUahCT4EbHqL6IP3Fo6FmclfnIrW%2BQxagIo33F1G%2BvCUCwYN6nsr1i4qn3LrxBnC4tIvT2fQhuGB3IeCOd5x6cDmqYX9K9vSLRtdt4%2FkkzVmbhbKznuAXx10lQnHRo9q3eUg0UEkMjvhkNLBKKfsQE%2FvaVqcOFNJC8k5HhtnSjw9o8LBg27mLSsoNX9ecI6b3ZbGhHke4soZT9JtsFnTJgxR3W5UFkifiQAvZ4uy8pWA2KNSrgq9y4yo5qnCCo%2BQIp9a6CQie0dKXv9ePi62DtdY5dcr0Ibd5JvNumd0wjy3I6xMLlUQCF9mXA6cn54Q5ZuaPdwHWblHWOFDanZv8HwrM2D93lRjSrEaNTCA3tfa4CW46ufoYxoPERkJJTtxrq%2F7neQJYXx6Cm97nnX8eaX1KkEFVUCLuLD6ucUjsqXGP2%2BL1oR8joZodDQslqqoEzZPmI0iZwDDCg8jEBjqkAUIRKICocSMRHBkQZcdswDc2%2Ff5tZ%2Bp0m79uN3qQCsMA62MwR8deOm%2FAfDPfZTD91xn7a%2BAtxPq1K7QYQ6zhkU8BGYzuBx8Zaqp6IsNe7pHGDWygMOkUCLJyFdbApNMKiGBH6WB3qUhnH8ptW%2FcXTkSkYqr8Igm8GmqSOLE7WE44nI1FVbjP7p1u%2FYoJeRC9fsWzHXj51QI0RwFtr%2F6m6yDj4jaC&X-Amz-Signature=393407835ca52155bc249ff6537d61125ca1a0e1624346ad70caf64b763e2a9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7XPLBIR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCFk5esnz9%2F89JHXTjSGj5yejYvNDr7z%2Bi4VejVhXLgiQIhAIghsg5W5%2BUAydhGOvbTf7X9P9Ck8Qlivhxv1CTptDtWKv8DCF4QABoMNjM3NDIzMTgzODA1IgwCqSau51qHfYQx0Xoq3ANRDy3FCIqrvM4Um%2B7BHZEaLtMKGtCcUWmHbAcro6Ujo%2BbE3WHxw0Ia9BVb2w9%2FlKxfBmrGqO4CHygiFV36uyqNzGfzRCBXZsFrayxtirkz3pnYiZG6UOdyOR7YxghqWCmmYLPkkAdWPKYTgBjcpkbSQDWqu%2B45xin12XYNvjYT9KMbM4hyUahCT4EbHqL6IP3Fo6FmclfnIrW%2BQxagIo33F1G%2BvCUCwYN6nsr1i4qn3LrxBnC4tIvT2fQhuGB3IeCOd5x6cDmqYX9K9vSLRtdt4%2FkkzVmbhbKznuAXx10lQnHRo9q3eUg0UEkMjvhkNLBKKfsQE%2FvaVqcOFNJC8k5HhtnSjw9o8LBg27mLSsoNX9ecI6b3ZbGhHke4soZT9JtsFnTJgxR3W5UFkifiQAvZ4uy8pWA2KNSrgq9y4yo5qnCCo%2BQIp9a6CQie0dKXv9ePi62DtdY5dcr0Ibd5JvNumd0wjy3I6xMLlUQCF9mXA6cn54Q5ZuaPdwHWblHWOFDanZv8HwrM2D93lRjSrEaNTCA3tfa4CW46ufoYxoPERkJJTtxrq%2F7neQJYXx6Cm97nnX8eaX1KkEFVUCLuLD6ucUjsqXGP2%2BL1oR8joZodDQslqqoEzZPmI0iZwDDCg8jEBjqkAUIRKICocSMRHBkQZcdswDc2%2Ff5tZ%2Bp0m79uN3qQCsMA62MwR8deOm%2FAfDPfZTD91xn7a%2BAtxPq1K7QYQ6zhkU8BGYzuBx8Zaqp6IsNe7pHGDWygMOkUCLJyFdbApNMKiGBH6WB3qUhnH8ptW%2FcXTkSkYqr8Igm8GmqSOLE7WE44nI1FVbjP7p1u%2FYoJeRC9fsWzHXj51QI0RwFtr%2F6m6yDj4jaC&X-Amz-Signature=74a7378d647daf7560e7679ee081e80c33bd8393fbc55006996732198fc6b851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7XPLBIR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCFk5esnz9%2F89JHXTjSGj5yejYvNDr7z%2Bi4VejVhXLgiQIhAIghsg5W5%2BUAydhGOvbTf7X9P9Ck8Qlivhxv1CTptDtWKv8DCF4QABoMNjM3NDIzMTgzODA1IgwCqSau51qHfYQx0Xoq3ANRDy3FCIqrvM4Um%2B7BHZEaLtMKGtCcUWmHbAcro6Ujo%2BbE3WHxw0Ia9BVb2w9%2FlKxfBmrGqO4CHygiFV36uyqNzGfzRCBXZsFrayxtirkz3pnYiZG6UOdyOR7YxghqWCmmYLPkkAdWPKYTgBjcpkbSQDWqu%2B45xin12XYNvjYT9KMbM4hyUahCT4EbHqL6IP3Fo6FmclfnIrW%2BQxagIo33F1G%2BvCUCwYN6nsr1i4qn3LrxBnC4tIvT2fQhuGB3IeCOd5x6cDmqYX9K9vSLRtdt4%2FkkzVmbhbKznuAXx10lQnHRo9q3eUg0UEkMjvhkNLBKKfsQE%2FvaVqcOFNJC8k5HhtnSjw9o8LBg27mLSsoNX9ecI6b3ZbGhHke4soZT9JtsFnTJgxR3W5UFkifiQAvZ4uy8pWA2KNSrgq9y4yo5qnCCo%2BQIp9a6CQie0dKXv9ePi62DtdY5dcr0Ibd5JvNumd0wjy3I6xMLlUQCF9mXA6cn54Q5ZuaPdwHWblHWOFDanZv8HwrM2D93lRjSrEaNTCA3tfa4CW46ufoYxoPERkJJTtxrq%2F7neQJYXx6Cm97nnX8eaX1KkEFVUCLuLD6ucUjsqXGP2%2BL1oR8joZodDQslqqoEzZPmI0iZwDDCg8jEBjqkAUIRKICocSMRHBkQZcdswDc2%2Ff5tZ%2Bp0m79uN3qQCsMA62MwR8deOm%2FAfDPfZTD91xn7a%2BAtxPq1K7QYQ6zhkU8BGYzuBx8Zaqp6IsNe7pHGDWygMOkUCLJyFdbApNMKiGBH6WB3qUhnH8ptW%2FcXTkSkYqr8Igm8GmqSOLE7WE44nI1FVbjP7p1u%2FYoJeRC9fsWzHXj51QI0RwFtr%2F6m6yDj4jaC&X-Amz-Signature=3066ac3591ae8b2222dbe8d244e6cf5616ec68e08f1d965c1b0d88859a72e785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7XPLBIR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCFk5esnz9%2F89JHXTjSGj5yejYvNDr7z%2Bi4VejVhXLgiQIhAIghsg5W5%2BUAydhGOvbTf7X9P9Ck8Qlivhxv1CTptDtWKv8DCF4QABoMNjM3NDIzMTgzODA1IgwCqSau51qHfYQx0Xoq3ANRDy3FCIqrvM4Um%2B7BHZEaLtMKGtCcUWmHbAcro6Ujo%2BbE3WHxw0Ia9BVb2w9%2FlKxfBmrGqO4CHygiFV36uyqNzGfzRCBXZsFrayxtirkz3pnYiZG6UOdyOR7YxghqWCmmYLPkkAdWPKYTgBjcpkbSQDWqu%2B45xin12XYNvjYT9KMbM4hyUahCT4EbHqL6IP3Fo6FmclfnIrW%2BQxagIo33F1G%2BvCUCwYN6nsr1i4qn3LrxBnC4tIvT2fQhuGB3IeCOd5x6cDmqYX9K9vSLRtdt4%2FkkzVmbhbKznuAXx10lQnHRo9q3eUg0UEkMjvhkNLBKKfsQE%2FvaVqcOFNJC8k5HhtnSjw9o8LBg27mLSsoNX9ecI6b3ZbGhHke4soZT9JtsFnTJgxR3W5UFkifiQAvZ4uy8pWA2KNSrgq9y4yo5qnCCo%2BQIp9a6CQie0dKXv9ePi62DtdY5dcr0Ibd5JvNumd0wjy3I6xMLlUQCF9mXA6cn54Q5ZuaPdwHWblHWOFDanZv8HwrM2D93lRjSrEaNTCA3tfa4CW46ufoYxoPERkJJTtxrq%2F7neQJYXx6Cm97nnX8eaX1KkEFVUCLuLD6ucUjsqXGP2%2BL1oR8joZodDQslqqoEzZPmI0iZwDDCg8jEBjqkAUIRKICocSMRHBkQZcdswDc2%2Ff5tZ%2Bp0m79uN3qQCsMA62MwR8deOm%2FAfDPfZTD91xn7a%2BAtxPq1K7QYQ6zhkU8BGYzuBx8Zaqp6IsNe7pHGDWygMOkUCLJyFdbApNMKiGBH6WB3qUhnH8ptW%2FcXTkSkYqr8Igm8GmqSOLE7WE44nI1FVbjP7p1u%2FYoJeRC9fsWzHXj51QI0RwFtr%2F6m6yDj4jaC&X-Amz-Signature=1acb5c9735e6ac99a7120a622162b1987ab48bfa2e70ecc2d382a3a339a1d43f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7XPLBIR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCFk5esnz9%2F89JHXTjSGj5yejYvNDr7z%2Bi4VejVhXLgiQIhAIghsg5W5%2BUAydhGOvbTf7X9P9Ck8Qlivhxv1CTptDtWKv8DCF4QABoMNjM3NDIzMTgzODA1IgwCqSau51qHfYQx0Xoq3ANRDy3FCIqrvM4Um%2B7BHZEaLtMKGtCcUWmHbAcro6Ujo%2BbE3WHxw0Ia9BVb2w9%2FlKxfBmrGqO4CHygiFV36uyqNzGfzRCBXZsFrayxtirkz3pnYiZG6UOdyOR7YxghqWCmmYLPkkAdWPKYTgBjcpkbSQDWqu%2B45xin12XYNvjYT9KMbM4hyUahCT4EbHqL6IP3Fo6FmclfnIrW%2BQxagIo33F1G%2BvCUCwYN6nsr1i4qn3LrxBnC4tIvT2fQhuGB3IeCOd5x6cDmqYX9K9vSLRtdt4%2FkkzVmbhbKznuAXx10lQnHRo9q3eUg0UEkMjvhkNLBKKfsQE%2FvaVqcOFNJC8k5HhtnSjw9o8LBg27mLSsoNX9ecI6b3ZbGhHke4soZT9JtsFnTJgxR3W5UFkifiQAvZ4uy8pWA2KNSrgq9y4yo5qnCCo%2BQIp9a6CQie0dKXv9ePi62DtdY5dcr0Ibd5JvNumd0wjy3I6xMLlUQCF9mXA6cn54Q5ZuaPdwHWblHWOFDanZv8HwrM2D93lRjSrEaNTCA3tfa4CW46ufoYxoPERkJJTtxrq%2F7neQJYXx6Cm97nnX8eaX1KkEFVUCLuLD6ucUjsqXGP2%2BL1oR8joZodDQslqqoEzZPmI0iZwDDCg8jEBjqkAUIRKICocSMRHBkQZcdswDc2%2Ff5tZ%2Bp0m79uN3qQCsMA62MwR8deOm%2FAfDPfZTD91xn7a%2BAtxPq1K7QYQ6zhkU8BGYzuBx8Zaqp6IsNe7pHGDWygMOkUCLJyFdbApNMKiGBH6WB3qUhnH8ptW%2FcXTkSkYqr8Igm8GmqSOLE7WE44nI1FVbjP7p1u%2FYoJeRC9fsWzHXj51QI0RwFtr%2F6m6yDj4jaC&X-Amz-Signature=a5ce4d2f9b844f2f0382625816d8d83047bfd99bbca411e7d8ec46abdd0778bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7XPLBIR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCFk5esnz9%2F89JHXTjSGj5yejYvNDr7z%2Bi4VejVhXLgiQIhAIghsg5W5%2BUAydhGOvbTf7X9P9Ck8Qlivhxv1CTptDtWKv8DCF4QABoMNjM3NDIzMTgzODA1IgwCqSau51qHfYQx0Xoq3ANRDy3FCIqrvM4Um%2B7BHZEaLtMKGtCcUWmHbAcro6Ujo%2BbE3WHxw0Ia9BVb2w9%2FlKxfBmrGqO4CHygiFV36uyqNzGfzRCBXZsFrayxtirkz3pnYiZG6UOdyOR7YxghqWCmmYLPkkAdWPKYTgBjcpkbSQDWqu%2B45xin12XYNvjYT9KMbM4hyUahCT4EbHqL6IP3Fo6FmclfnIrW%2BQxagIo33F1G%2BvCUCwYN6nsr1i4qn3LrxBnC4tIvT2fQhuGB3IeCOd5x6cDmqYX9K9vSLRtdt4%2FkkzVmbhbKznuAXx10lQnHRo9q3eUg0UEkMjvhkNLBKKfsQE%2FvaVqcOFNJC8k5HhtnSjw9o8LBg27mLSsoNX9ecI6b3ZbGhHke4soZT9JtsFnTJgxR3W5UFkifiQAvZ4uy8pWA2KNSrgq9y4yo5qnCCo%2BQIp9a6CQie0dKXv9ePi62DtdY5dcr0Ibd5JvNumd0wjy3I6xMLlUQCF9mXA6cn54Q5ZuaPdwHWblHWOFDanZv8HwrM2D93lRjSrEaNTCA3tfa4CW46ufoYxoPERkJJTtxrq%2F7neQJYXx6Cm97nnX8eaX1KkEFVUCLuLD6ucUjsqXGP2%2BL1oR8joZodDQslqqoEzZPmI0iZwDDCg8jEBjqkAUIRKICocSMRHBkQZcdswDc2%2Ff5tZ%2Bp0m79uN3qQCsMA62MwR8deOm%2FAfDPfZTD91xn7a%2BAtxPq1K7QYQ6zhkU8BGYzuBx8Zaqp6IsNe7pHGDWygMOkUCLJyFdbApNMKiGBH6WB3qUhnH8ptW%2FcXTkSkYqr8Igm8GmqSOLE7WE44nI1FVbjP7p1u%2FYoJeRC9fsWzHXj51QI0RwFtr%2F6m6yDj4jaC&X-Amz-Signature=6692f0cd3f56f42d31777398105c45c203ea44a6e800f45f6c3fe9f0d510589b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7XPLBIR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCFk5esnz9%2F89JHXTjSGj5yejYvNDr7z%2Bi4VejVhXLgiQIhAIghsg5W5%2BUAydhGOvbTf7X9P9Ck8Qlivhxv1CTptDtWKv8DCF4QABoMNjM3NDIzMTgzODA1IgwCqSau51qHfYQx0Xoq3ANRDy3FCIqrvM4Um%2B7BHZEaLtMKGtCcUWmHbAcro6Ujo%2BbE3WHxw0Ia9BVb2w9%2FlKxfBmrGqO4CHygiFV36uyqNzGfzRCBXZsFrayxtirkz3pnYiZG6UOdyOR7YxghqWCmmYLPkkAdWPKYTgBjcpkbSQDWqu%2B45xin12XYNvjYT9KMbM4hyUahCT4EbHqL6IP3Fo6FmclfnIrW%2BQxagIo33F1G%2BvCUCwYN6nsr1i4qn3LrxBnC4tIvT2fQhuGB3IeCOd5x6cDmqYX9K9vSLRtdt4%2FkkzVmbhbKznuAXx10lQnHRo9q3eUg0UEkMjvhkNLBKKfsQE%2FvaVqcOFNJC8k5HhtnSjw9o8LBg27mLSsoNX9ecI6b3ZbGhHke4soZT9JtsFnTJgxR3W5UFkifiQAvZ4uy8pWA2KNSrgq9y4yo5qnCCo%2BQIp9a6CQie0dKXv9ePi62DtdY5dcr0Ibd5JvNumd0wjy3I6xMLlUQCF9mXA6cn54Q5ZuaPdwHWblHWOFDanZv8HwrM2D93lRjSrEaNTCA3tfa4CW46ufoYxoPERkJJTtxrq%2F7neQJYXx6Cm97nnX8eaX1KkEFVUCLuLD6ucUjsqXGP2%2BL1oR8joZodDQslqqoEzZPmI0iZwDDCg8jEBjqkAUIRKICocSMRHBkQZcdswDc2%2Ff5tZ%2Bp0m79uN3qQCsMA62MwR8deOm%2FAfDPfZTD91xn7a%2BAtxPq1K7QYQ6zhkU8BGYzuBx8Zaqp6IsNe7pHGDWygMOkUCLJyFdbApNMKiGBH6WB3qUhnH8ptW%2FcXTkSkYqr8Igm8GmqSOLE7WE44nI1FVbjP7p1u%2FYoJeRC9fsWzHXj51QI0RwFtr%2F6m6yDj4jaC&X-Amz-Signature=3066ac3591ae8b2222dbe8d244e6cf5616ec68e08f1d965c1b0d88859a72e785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7XPLBIR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCFk5esnz9%2F89JHXTjSGj5yejYvNDr7z%2Bi4VejVhXLgiQIhAIghsg5W5%2BUAydhGOvbTf7X9P9Ck8Qlivhxv1CTptDtWKv8DCF4QABoMNjM3NDIzMTgzODA1IgwCqSau51qHfYQx0Xoq3ANRDy3FCIqrvM4Um%2B7BHZEaLtMKGtCcUWmHbAcro6Ujo%2BbE3WHxw0Ia9BVb2w9%2FlKxfBmrGqO4CHygiFV36uyqNzGfzRCBXZsFrayxtirkz3pnYiZG6UOdyOR7YxghqWCmmYLPkkAdWPKYTgBjcpkbSQDWqu%2B45xin12XYNvjYT9KMbM4hyUahCT4EbHqL6IP3Fo6FmclfnIrW%2BQxagIo33F1G%2BvCUCwYN6nsr1i4qn3LrxBnC4tIvT2fQhuGB3IeCOd5x6cDmqYX9K9vSLRtdt4%2FkkzVmbhbKznuAXx10lQnHRo9q3eUg0UEkMjvhkNLBKKfsQE%2FvaVqcOFNJC8k5HhtnSjw9o8LBg27mLSsoNX9ecI6b3ZbGhHke4soZT9JtsFnTJgxR3W5UFkifiQAvZ4uy8pWA2KNSrgq9y4yo5qnCCo%2BQIp9a6CQie0dKXv9ePi62DtdY5dcr0Ibd5JvNumd0wjy3I6xMLlUQCF9mXA6cn54Q5ZuaPdwHWblHWOFDanZv8HwrM2D93lRjSrEaNTCA3tfa4CW46ufoYxoPERkJJTtxrq%2F7neQJYXx6Cm97nnX8eaX1KkEFVUCLuLD6ucUjsqXGP2%2BL1oR8joZodDQslqqoEzZPmI0iZwDDCg8jEBjqkAUIRKICocSMRHBkQZcdswDc2%2Ff5tZ%2Bp0m79uN3qQCsMA62MwR8deOm%2FAfDPfZTD91xn7a%2BAtxPq1K7QYQ6zhkU8BGYzuBx8Zaqp6IsNe7pHGDWygMOkUCLJyFdbApNMKiGBH6WB3qUhnH8ptW%2FcXTkSkYqr8Igm8GmqSOLE7WE44nI1FVbjP7p1u%2FYoJeRC9fsWzHXj51QI0RwFtr%2F6m6yDj4jaC&X-Amz-Signature=95e1ce22817fa4940cb71bd2b36d1e8e4177a08fe231cf812ebddade5d061fad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7XPLBIR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCFk5esnz9%2F89JHXTjSGj5yejYvNDr7z%2Bi4VejVhXLgiQIhAIghsg5W5%2BUAydhGOvbTf7X9P9Ck8Qlivhxv1CTptDtWKv8DCF4QABoMNjM3NDIzMTgzODA1IgwCqSau51qHfYQx0Xoq3ANRDy3FCIqrvM4Um%2B7BHZEaLtMKGtCcUWmHbAcro6Ujo%2BbE3WHxw0Ia9BVb2w9%2FlKxfBmrGqO4CHygiFV36uyqNzGfzRCBXZsFrayxtirkz3pnYiZG6UOdyOR7YxghqWCmmYLPkkAdWPKYTgBjcpkbSQDWqu%2B45xin12XYNvjYT9KMbM4hyUahCT4EbHqL6IP3Fo6FmclfnIrW%2BQxagIo33F1G%2BvCUCwYN6nsr1i4qn3LrxBnC4tIvT2fQhuGB3IeCOd5x6cDmqYX9K9vSLRtdt4%2FkkzVmbhbKznuAXx10lQnHRo9q3eUg0UEkMjvhkNLBKKfsQE%2FvaVqcOFNJC8k5HhtnSjw9o8LBg27mLSsoNX9ecI6b3ZbGhHke4soZT9JtsFnTJgxR3W5UFkifiQAvZ4uy8pWA2KNSrgq9y4yo5qnCCo%2BQIp9a6CQie0dKXv9ePi62DtdY5dcr0Ibd5JvNumd0wjy3I6xMLlUQCF9mXA6cn54Q5ZuaPdwHWblHWOFDanZv8HwrM2D93lRjSrEaNTCA3tfa4CW46ufoYxoPERkJJTtxrq%2F7neQJYXx6Cm97nnX8eaX1KkEFVUCLuLD6ucUjsqXGP2%2BL1oR8joZodDQslqqoEzZPmI0iZwDDCg8jEBjqkAUIRKICocSMRHBkQZcdswDc2%2Ff5tZ%2Bp0m79uN3qQCsMA62MwR8deOm%2FAfDPfZTD91xn7a%2BAtxPq1K7QYQ6zhkU8BGYzuBx8Zaqp6IsNe7pHGDWygMOkUCLJyFdbApNMKiGBH6WB3qUhnH8ptW%2FcXTkSkYqr8Igm8GmqSOLE7WE44nI1FVbjP7p1u%2FYoJeRC9fsWzHXj51QI0RwFtr%2F6m6yDj4jaC&X-Amz-Signature=6ad8e53166bafc68d7b5a36de2f9a67bea3fdf5176e8e26859b07478064517a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7XPLBIR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCFk5esnz9%2F89JHXTjSGj5yejYvNDr7z%2Bi4VejVhXLgiQIhAIghsg5W5%2BUAydhGOvbTf7X9P9Ck8Qlivhxv1CTptDtWKv8DCF4QABoMNjM3NDIzMTgzODA1IgwCqSau51qHfYQx0Xoq3ANRDy3FCIqrvM4Um%2B7BHZEaLtMKGtCcUWmHbAcro6Ujo%2BbE3WHxw0Ia9BVb2w9%2FlKxfBmrGqO4CHygiFV36uyqNzGfzRCBXZsFrayxtirkz3pnYiZG6UOdyOR7YxghqWCmmYLPkkAdWPKYTgBjcpkbSQDWqu%2B45xin12XYNvjYT9KMbM4hyUahCT4EbHqL6IP3Fo6FmclfnIrW%2BQxagIo33F1G%2BvCUCwYN6nsr1i4qn3LrxBnC4tIvT2fQhuGB3IeCOd5x6cDmqYX9K9vSLRtdt4%2FkkzVmbhbKznuAXx10lQnHRo9q3eUg0UEkMjvhkNLBKKfsQE%2FvaVqcOFNJC8k5HhtnSjw9o8LBg27mLSsoNX9ecI6b3ZbGhHke4soZT9JtsFnTJgxR3W5UFkifiQAvZ4uy8pWA2KNSrgq9y4yo5qnCCo%2BQIp9a6CQie0dKXv9ePi62DtdY5dcr0Ibd5JvNumd0wjy3I6xMLlUQCF9mXA6cn54Q5ZuaPdwHWblHWOFDanZv8HwrM2D93lRjSrEaNTCA3tfa4CW46ufoYxoPERkJJTtxrq%2F7neQJYXx6Cm97nnX8eaX1KkEFVUCLuLD6ucUjsqXGP2%2BL1oR8joZodDQslqqoEzZPmI0iZwDDCg8jEBjqkAUIRKICocSMRHBkQZcdswDc2%2Ff5tZ%2Bp0m79uN3qQCsMA62MwR8deOm%2FAfDPfZTD91xn7a%2BAtxPq1K7QYQ6zhkU8BGYzuBx8Zaqp6IsNe7pHGDWygMOkUCLJyFdbApNMKiGBH6WB3qUhnH8ptW%2FcXTkSkYqr8Igm8GmqSOLE7WE44nI1FVbjP7p1u%2FYoJeRC9fsWzHXj51QI0RwFtr%2F6m6yDj4jaC&X-Amz-Signature=9b2d27a600c677c030c4eed3539f8ce99d82fe669444bbbf7eb9480ac7f39993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
