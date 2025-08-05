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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVSIM4LF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIG43wgV6CfY%2BbyKl1nuPvyp8m6Am5XPi8Yjkr9%2FCd7CjAiEAprbfDAZXwaVuIZQRLoQ38CKa69xzc1snlC7IAsg7Zaoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFMyujoxjuXnljm1NircA1AW9c51qB0KPu5yiMpIeo%2FF1m6nblafmJvlJS9E9uKvb%2FKBf8CdhX4W23pL2u%2FnsE2ZeGI%2FCu50dXgVGDA9v7RxPkWHAAwfDP5fOKE%2BbK0Bat2GlRc706RkqkVz8pROuHOJ3%2FPCK3VX2PAd6FsiKBI1bCcBhicJShjntylcvEMaB19IZJYXZoQ0zv6xxOLWEFLDYGGL5qbcGeey4TMvFIJqt5ce0gaRvaIo0rpr5rFpd2W9e%2FfGeRMZ0pdYOD%2ByZkjxsS9sM3g6PjmrEiCY4z%2F5Oy0EuYhqMim2WzGMr%2FS7vkOyOoYLZ77latdi%2BGlBepyC3jGuiYLoZcAFgpDbbPmU0IvnDjbpEZzwoHocYLp%2BW2HajpVd%2F2lM2RAnkO9499KBcPpabrn9pvz4UuOshFmuWcaIIeGckfQmvphpU3bEvddvuQ6KaZRkoyDHujVUK3aNLGz8tFZdOdTCrqNnvt4SJXtxrtuCRwPzwJYgy6AOcLFzHJ0ChrKtMNlGq14Grm3mZvcGPz6cYfqPtBLqJCc14kgnZVixfHNFC1JqiHhNbiM6joGHkW721ALS8Hs1eNmsT0sAL2AMAwxTIhesJaY9rtVkl1juxyT0zKvnMTJJgZshRSC5fEFCn1z%2FMK%2FhycQGOqUBhOC%2BDkqzXdKVka3JCyk6CfV1GIIURR5aWDBMEHlGindUUfR9iY7zihFfvj4TTcyDEQtftEQvCMA2mu6Kmwz9R4B7TAcB3jjxH2bL6O%2Bsg5Sq84B9%2FEcWcZISl%2B5MTZnQt%2F2cD%2F3nmeZrLkFAarvgBwSRrRIEL4Y3HKq1HYUw7vaakXz97w%2FJB8OW0s3mhzbsrEU1Z%2FeVOQbDkwZdsKL3KwoRu78l&X-Amz-Signature=1268111a25fd6b0ed2c3f6f09a1e7cf6de56c7cdf9133db6a0576ed140af1405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVSIM4LF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIG43wgV6CfY%2BbyKl1nuPvyp8m6Am5XPi8Yjkr9%2FCd7CjAiEAprbfDAZXwaVuIZQRLoQ38CKa69xzc1snlC7IAsg7Zaoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFMyujoxjuXnljm1NircA1AW9c51qB0KPu5yiMpIeo%2FF1m6nblafmJvlJS9E9uKvb%2FKBf8CdhX4W23pL2u%2FnsE2ZeGI%2FCu50dXgVGDA9v7RxPkWHAAwfDP5fOKE%2BbK0Bat2GlRc706RkqkVz8pROuHOJ3%2FPCK3VX2PAd6FsiKBI1bCcBhicJShjntylcvEMaB19IZJYXZoQ0zv6xxOLWEFLDYGGL5qbcGeey4TMvFIJqt5ce0gaRvaIo0rpr5rFpd2W9e%2FfGeRMZ0pdYOD%2ByZkjxsS9sM3g6PjmrEiCY4z%2F5Oy0EuYhqMim2WzGMr%2FS7vkOyOoYLZ77latdi%2BGlBepyC3jGuiYLoZcAFgpDbbPmU0IvnDjbpEZzwoHocYLp%2BW2HajpVd%2F2lM2RAnkO9499KBcPpabrn9pvz4UuOshFmuWcaIIeGckfQmvphpU3bEvddvuQ6KaZRkoyDHujVUK3aNLGz8tFZdOdTCrqNnvt4SJXtxrtuCRwPzwJYgy6AOcLFzHJ0ChrKtMNlGq14Grm3mZvcGPz6cYfqPtBLqJCc14kgnZVixfHNFC1JqiHhNbiM6joGHkW721ALS8Hs1eNmsT0sAL2AMAwxTIhesJaY9rtVkl1juxyT0zKvnMTJJgZshRSC5fEFCn1z%2FMK%2FhycQGOqUBhOC%2BDkqzXdKVka3JCyk6CfV1GIIURR5aWDBMEHlGindUUfR9iY7zihFfvj4TTcyDEQtftEQvCMA2mu6Kmwz9R4B7TAcB3jjxH2bL6O%2Bsg5Sq84B9%2FEcWcZISl%2B5MTZnQt%2F2cD%2F3nmeZrLkFAarvgBwSRrRIEL4Y3HKq1HYUw7vaakXz97w%2FJB8OW0s3mhzbsrEU1Z%2FeVOQbDkwZdsKL3KwoRu78l&X-Amz-Signature=c36ee23d6ef2db05f09abce6318c0d6e407d75bddbad1e169651ec1c60922dbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVSIM4LF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIG43wgV6CfY%2BbyKl1nuPvyp8m6Am5XPi8Yjkr9%2FCd7CjAiEAprbfDAZXwaVuIZQRLoQ38CKa69xzc1snlC7IAsg7Zaoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFMyujoxjuXnljm1NircA1AW9c51qB0KPu5yiMpIeo%2FF1m6nblafmJvlJS9E9uKvb%2FKBf8CdhX4W23pL2u%2FnsE2ZeGI%2FCu50dXgVGDA9v7RxPkWHAAwfDP5fOKE%2BbK0Bat2GlRc706RkqkVz8pROuHOJ3%2FPCK3VX2PAd6FsiKBI1bCcBhicJShjntylcvEMaB19IZJYXZoQ0zv6xxOLWEFLDYGGL5qbcGeey4TMvFIJqt5ce0gaRvaIo0rpr5rFpd2W9e%2FfGeRMZ0pdYOD%2ByZkjxsS9sM3g6PjmrEiCY4z%2F5Oy0EuYhqMim2WzGMr%2FS7vkOyOoYLZ77latdi%2BGlBepyC3jGuiYLoZcAFgpDbbPmU0IvnDjbpEZzwoHocYLp%2BW2HajpVd%2F2lM2RAnkO9499KBcPpabrn9pvz4UuOshFmuWcaIIeGckfQmvphpU3bEvddvuQ6KaZRkoyDHujVUK3aNLGz8tFZdOdTCrqNnvt4SJXtxrtuCRwPzwJYgy6AOcLFzHJ0ChrKtMNlGq14Grm3mZvcGPz6cYfqPtBLqJCc14kgnZVixfHNFC1JqiHhNbiM6joGHkW721ALS8Hs1eNmsT0sAL2AMAwxTIhesJaY9rtVkl1juxyT0zKvnMTJJgZshRSC5fEFCn1z%2FMK%2FhycQGOqUBhOC%2BDkqzXdKVka3JCyk6CfV1GIIURR5aWDBMEHlGindUUfR9iY7zihFfvj4TTcyDEQtftEQvCMA2mu6Kmwz9R4B7TAcB3jjxH2bL6O%2Bsg5Sq84B9%2FEcWcZISl%2B5MTZnQt%2F2cD%2F3nmeZrLkFAarvgBwSRrRIEL4Y3HKq1HYUw7vaakXz97w%2FJB8OW0s3mhzbsrEU1Z%2FeVOQbDkwZdsKL3KwoRu78l&X-Amz-Signature=fd7b8b5ac5f8605c9e580b26bd1c9ccfb826948c5238135769a0af442f75a8f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVSIM4LF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIG43wgV6CfY%2BbyKl1nuPvyp8m6Am5XPi8Yjkr9%2FCd7CjAiEAprbfDAZXwaVuIZQRLoQ38CKa69xzc1snlC7IAsg7Zaoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFMyujoxjuXnljm1NircA1AW9c51qB0KPu5yiMpIeo%2FF1m6nblafmJvlJS9E9uKvb%2FKBf8CdhX4W23pL2u%2FnsE2ZeGI%2FCu50dXgVGDA9v7RxPkWHAAwfDP5fOKE%2BbK0Bat2GlRc706RkqkVz8pROuHOJ3%2FPCK3VX2PAd6FsiKBI1bCcBhicJShjntylcvEMaB19IZJYXZoQ0zv6xxOLWEFLDYGGL5qbcGeey4TMvFIJqt5ce0gaRvaIo0rpr5rFpd2W9e%2FfGeRMZ0pdYOD%2ByZkjxsS9sM3g6PjmrEiCY4z%2F5Oy0EuYhqMim2WzGMr%2FS7vkOyOoYLZ77latdi%2BGlBepyC3jGuiYLoZcAFgpDbbPmU0IvnDjbpEZzwoHocYLp%2BW2HajpVd%2F2lM2RAnkO9499KBcPpabrn9pvz4UuOshFmuWcaIIeGckfQmvphpU3bEvddvuQ6KaZRkoyDHujVUK3aNLGz8tFZdOdTCrqNnvt4SJXtxrtuCRwPzwJYgy6AOcLFzHJ0ChrKtMNlGq14Grm3mZvcGPz6cYfqPtBLqJCc14kgnZVixfHNFC1JqiHhNbiM6joGHkW721ALS8Hs1eNmsT0sAL2AMAwxTIhesJaY9rtVkl1juxyT0zKvnMTJJgZshRSC5fEFCn1z%2FMK%2FhycQGOqUBhOC%2BDkqzXdKVka3JCyk6CfV1GIIURR5aWDBMEHlGindUUfR9iY7zihFfvj4TTcyDEQtftEQvCMA2mu6Kmwz9R4B7TAcB3jjxH2bL6O%2Bsg5Sq84B9%2FEcWcZISl%2B5MTZnQt%2F2cD%2F3nmeZrLkFAarvgBwSRrRIEL4Y3HKq1HYUw7vaakXz97w%2FJB8OW0s3mhzbsrEU1Z%2FeVOQbDkwZdsKL3KwoRu78l&X-Amz-Signature=4dac9efd154025a2d491ea7052c6c502de56d7ccd1c3178f2397f90208b4a9ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVSIM4LF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIG43wgV6CfY%2BbyKl1nuPvyp8m6Am5XPi8Yjkr9%2FCd7CjAiEAprbfDAZXwaVuIZQRLoQ38CKa69xzc1snlC7IAsg7Zaoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFMyujoxjuXnljm1NircA1AW9c51qB0KPu5yiMpIeo%2FF1m6nblafmJvlJS9E9uKvb%2FKBf8CdhX4W23pL2u%2FnsE2ZeGI%2FCu50dXgVGDA9v7RxPkWHAAwfDP5fOKE%2BbK0Bat2GlRc706RkqkVz8pROuHOJ3%2FPCK3VX2PAd6FsiKBI1bCcBhicJShjntylcvEMaB19IZJYXZoQ0zv6xxOLWEFLDYGGL5qbcGeey4TMvFIJqt5ce0gaRvaIo0rpr5rFpd2W9e%2FfGeRMZ0pdYOD%2ByZkjxsS9sM3g6PjmrEiCY4z%2F5Oy0EuYhqMim2WzGMr%2FS7vkOyOoYLZ77latdi%2BGlBepyC3jGuiYLoZcAFgpDbbPmU0IvnDjbpEZzwoHocYLp%2BW2HajpVd%2F2lM2RAnkO9499KBcPpabrn9pvz4UuOshFmuWcaIIeGckfQmvphpU3bEvddvuQ6KaZRkoyDHujVUK3aNLGz8tFZdOdTCrqNnvt4SJXtxrtuCRwPzwJYgy6AOcLFzHJ0ChrKtMNlGq14Grm3mZvcGPz6cYfqPtBLqJCc14kgnZVixfHNFC1JqiHhNbiM6joGHkW721ALS8Hs1eNmsT0sAL2AMAwxTIhesJaY9rtVkl1juxyT0zKvnMTJJgZshRSC5fEFCn1z%2FMK%2FhycQGOqUBhOC%2BDkqzXdKVka3JCyk6CfV1GIIURR5aWDBMEHlGindUUfR9iY7zihFfvj4TTcyDEQtftEQvCMA2mu6Kmwz9R4B7TAcB3jjxH2bL6O%2Bsg5Sq84B9%2FEcWcZISl%2B5MTZnQt%2F2cD%2F3nmeZrLkFAarvgBwSRrRIEL4Y3HKq1HYUw7vaakXz97w%2FJB8OW0s3mhzbsrEU1Z%2FeVOQbDkwZdsKL3KwoRu78l&X-Amz-Signature=d5fd7c8a0d9a6270182b741e8c079358598d3b7ca3d27ac545bdaac4989e44d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVSIM4LF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIG43wgV6CfY%2BbyKl1nuPvyp8m6Am5XPi8Yjkr9%2FCd7CjAiEAprbfDAZXwaVuIZQRLoQ38CKa69xzc1snlC7IAsg7Zaoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFMyujoxjuXnljm1NircA1AW9c51qB0KPu5yiMpIeo%2FF1m6nblafmJvlJS9E9uKvb%2FKBf8CdhX4W23pL2u%2FnsE2ZeGI%2FCu50dXgVGDA9v7RxPkWHAAwfDP5fOKE%2BbK0Bat2GlRc706RkqkVz8pROuHOJ3%2FPCK3VX2PAd6FsiKBI1bCcBhicJShjntylcvEMaB19IZJYXZoQ0zv6xxOLWEFLDYGGL5qbcGeey4TMvFIJqt5ce0gaRvaIo0rpr5rFpd2W9e%2FfGeRMZ0pdYOD%2ByZkjxsS9sM3g6PjmrEiCY4z%2F5Oy0EuYhqMim2WzGMr%2FS7vkOyOoYLZ77latdi%2BGlBepyC3jGuiYLoZcAFgpDbbPmU0IvnDjbpEZzwoHocYLp%2BW2HajpVd%2F2lM2RAnkO9499KBcPpabrn9pvz4UuOshFmuWcaIIeGckfQmvphpU3bEvddvuQ6KaZRkoyDHujVUK3aNLGz8tFZdOdTCrqNnvt4SJXtxrtuCRwPzwJYgy6AOcLFzHJ0ChrKtMNlGq14Grm3mZvcGPz6cYfqPtBLqJCc14kgnZVixfHNFC1JqiHhNbiM6joGHkW721ALS8Hs1eNmsT0sAL2AMAwxTIhesJaY9rtVkl1juxyT0zKvnMTJJgZshRSC5fEFCn1z%2FMK%2FhycQGOqUBhOC%2BDkqzXdKVka3JCyk6CfV1GIIURR5aWDBMEHlGindUUfR9iY7zihFfvj4TTcyDEQtftEQvCMA2mu6Kmwz9R4B7TAcB3jjxH2bL6O%2Bsg5Sq84B9%2FEcWcZISl%2B5MTZnQt%2F2cD%2F3nmeZrLkFAarvgBwSRrRIEL4Y3HKq1HYUw7vaakXz97w%2FJB8OW0s3mhzbsrEU1Z%2FeVOQbDkwZdsKL3KwoRu78l&X-Amz-Signature=ae279a1eef60862e256e7de8afee61fddb4acfba21150e3a471db04acfb3b07a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVSIM4LF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIG43wgV6CfY%2BbyKl1nuPvyp8m6Am5XPi8Yjkr9%2FCd7CjAiEAprbfDAZXwaVuIZQRLoQ38CKa69xzc1snlC7IAsg7Zaoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFMyujoxjuXnljm1NircA1AW9c51qB0KPu5yiMpIeo%2FF1m6nblafmJvlJS9E9uKvb%2FKBf8CdhX4W23pL2u%2FnsE2ZeGI%2FCu50dXgVGDA9v7RxPkWHAAwfDP5fOKE%2BbK0Bat2GlRc706RkqkVz8pROuHOJ3%2FPCK3VX2PAd6FsiKBI1bCcBhicJShjntylcvEMaB19IZJYXZoQ0zv6xxOLWEFLDYGGL5qbcGeey4TMvFIJqt5ce0gaRvaIo0rpr5rFpd2W9e%2FfGeRMZ0pdYOD%2ByZkjxsS9sM3g6PjmrEiCY4z%2F5Oy0EuYhqMim2WzGMr%2FS7vkOyOoYLZ77latdi%2BGlBepyC3jGuiYLoZcAFgpDbbPmU0IvnDjbpEZzwoHocYLp%2BW2HajpVd%2F2lM2RAnkO9499KBcPpabrn9pvz4UuOshFmuWcaIIeGckfQmvphpU3bEvddvuQ6KaZRkoyDHujVUK3aNLGz8tFZdOdTCrqNnvt4SJXtxrtuCRwPzwJYgy6AOcLFzHJ0ChrKtMNlGq14Grm3mZvcGPz6cYfqPtBLqJCc14kgnZVixfHNFC1JqiHhNbiM6joGHkW721ALS8Hs1eNmsT0sAL2AMAwxTIhesJaY9rtVkl1juxyT0zKvnMTJJgZshRSC5fEFCn1z%2FMK%2FhycQGOqUBhOC%2BDkqzXdKVka3JCyk6CfV1GIIURR5aWDBMEHlGindUUfR9iY7zihFfvj4TTcyDEQtftEQvCMA2mu6Kmwz9R4B7TAcB3jjxH2bL6O%2Bsg5Sq84B9%2FEcWcZISl%2B5MTZnQt%2F2cD%2F3nmeZrLkFAarvgBwSRrRIEL4Y3HKq1HYUw7vaakXz97w%2FJB8OW0s3mhzbsrEU1Z%2FeVOQbDkwZdsKL3KwoRu78l&X-Amz-Signature=34b36b8b69deb145df96362a96a39e9554c8b720058595d98248ccadd11af247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVSIM4LF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIG43wgV6CfY%2BbyKl1nuPvyp8m6Am5XPi8Yjkr9%2FCd7CjAiEAprbfDAZXwaVuIZQRLoQ38CKa69xzc1snlC7IAsg7Zaoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFMyujoxjuXnljm1NircA1AW9c51qB0KPu5yiMpIeo%2FF1m6nblafmJvlJS9E9uKvb%2FKBf8CdhX4W23pL2u%2FnsE2ZeGI%2FCu50dXgVGDA9v7RxPkWHAAwfDP5fOKE%2BbK0Bat2GlRc706RkqkVz8pROuHOJ3%2FPCK3VX2PAd6FsiKBI1bCcBhicJShjntylcvEMaB19IZJYXZoQ0zv6xxOLWEFLDYGGL5qbcGeey4TMvFIJqt5ce0gaRvaIo0rpr5rFpd2W9e%2FfGeRMZ0pdYOD%2ByZkjxsS9sM3g6PjmrEiCY4z%2F5Oy0EuYhqMim2WzGMr%2FS7vkOyOoYLZ77latdi%2BGlBepyC3jGuiYLoZcAFgpDbbPmU0IvnDjbpEZzwoHocYLp%2BW2HajpVd%2F2lM2RAnkO9499KBcPpabrn9pvz4UuOshFmuWcaIIeGckfQmvphpU3bEvddvuQ6KaZRkoyDHujVUK3aNLGz8tFZdOdTCrqNnvt4SJXtxrtuCRwPzwJYgy6AOcLFzHJ0ChrKtMNlGq14Grm3mZvcGPz6cYfqPtBLqJCc14kgnZVixfHNFC1JqiHhNbiM6joGHkW721ALS8Hs1eNmsT0sAL2AMAwxTIhesJaY9rtVkl1juxyT0zKvnMTJJgZshRSC5fEFCn1z%2FMK%2FhycQGOqUBhOC%2BDkqzXdKVka3JCyk6CfV1GIIURR5aWDBMEHlGindUUfR9iY7zihFfvj4TTcyDEQtftEQvCMA2mu6Kmwz9R4B7TAcB3jjxH2bL6O%2Bsg5Sq84B9%2FEcWcZISl%2B5MTZnQt%2F2cD%2F3nmeZrLkFAarvgBwSRrRIEL4Y3HKq1HYUw7vaakXz97w%2FJB8OW0s3mhzbsrEU1Z%2FeVOQbDkwZdsKL3KwoRu78l&X-Amz-Signature=01e97fa7fb5e0de7ede70534abdaf1413e2e16eb1d528754415444dcbb435d9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVSIM4LF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIG43wgV6CfY%2BbyKl1nuPvyp8m6Am5XPi8Yjkr9%2FCd7CjAiEAprbfDAZXwaVuIZQRLoQ38CKa69xzc1snlC7IAsg7Zaoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFMyujoxjuXnljm1NircA1AW9c51qB0KPu5yiMpIeo%2FF1m6nblafmJvlJS9E9uKvb%2FKBf8CdhX4W23pL2u%2FnsE2ZeGI%2FCu50dXgVGDA9v7RxPkWHAAwfDP5fOKE%2BbK0Bat2GlRc706RkqkVz8pROuHOJ3%2FPCK3VX2PAd6FsiKBI1bCcBhicJShjntylcvEMaB19IZJYXZoQ0zv6xxOLWEFLDYGGL5qbcGeey4TMvFIJqt5ce0gaRvaIo0rpr5rFpd2W9e%2FfGeRMZ0pdYOD%2ByZkjxsS9sM3g6PjmrEiCY4z%2F5Oy0EuYhqMim2WzGMr%2FS7vkOyOoYLZ77latdi%2BGlBepyC3jGuiYLoZcAFgpDbbPmU0IvnDjbpEZzwoHocYLp%2BW2HajpVd%2F2lM2RAnkO9499KBcPpabrn9pvz4UuOshFmuWcaIIeGckfQmvphpU3bEvddvuQ6KaZRkoyDHujVUK3aNLGz8tFZdOdTCrqNnvt4SJXtxrtuCRwPzwJYgy6AOcLFzHJ0ChrKtMNlGq14Grm3mZvcGPz6cYfqPtBLqJCc14kgnZVixfHNFC1JqiHhNbiM6joGHkW721ALS8Hs1eNmsT0sAL2AMAwxTIhesJaY9rtVkl1juxyT0zKvnMTJJgZshRSC5fEFCn1z%2FMK%2FhycQGOqUBhOC%2BDkqzXdKVka3JCyk6CfV1GIIURR5aWDBMEHlGindUUfR9iY7zihFfvj4TTcyDEQtftEQvCMA2mu6Kmwz9R4B7TAcB3jjxH2bL6O%2Bsg5Sq84B9%2FEcWcZISl%2B5MTZnQt%2F2cD%2F3nmeZrLkFAarvgBwSRrRIEL4Y3HKq1HYUw7vaakXz97w%2FJB8OW0s3mhzbsrEU1Z%2FeVOQbDkwZdsKL3KwoRu78l&X-Amz-Signature=c5f636c0a45cb9c24a40b089a4a2bb81e08958cd0faec875cd0c490d165667bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVSIM4LF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIG43wgV6CfY%2BbyKl1nuPvyp8m6Am5XPi8Yjkr9%2FCd7CjAiEAprbfDAZXwaVuIZQRLoQ38CKa69xzc1snlC7IAsg7Zaoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFMyujoxjuXnljm1NircA1AW9c51qB0KPu5yiMpIeo%2FF1m6nblafmJvlJS9E9uKvb%2FKBf8CdhX4W23pL2u%2FnsE2ZeGI%2FCu50dXgVGDA9v7RxPkWHAAwfDP5fOKE%2BbK0Bat2GlRc706RkqkVz8pROuHOJ3%2FPCK3VX2PAd6FsiKBI1bCcBhicJShjntylcvEMaB19IZJYXZoQ0zv6xxOLWEFLDYGGL5qbcGeey4TMvFIJqt5ce0gaRvaIo0rpr5rFpd2W9e%2FfGeRMZ0pdYOD%2ByZkjxsS9sM3g6PjmrEiCY4z%2F5Oy0EuYhqMim2WzGMr%2FS7vkOyOoYLZ77latdi%2BGlBepyC3jGuiYLoZcAFgpDbbPmU0IvnDjbpEZzwoHocYLp%2BW2HajpVd%2F2lM2RAnkO9499KBcPpabrn9pvz4UuOshFmuWcaIIeGckfQmvphpU3bEvddvuQ6KaZRkoyDHujVUK3aNLGz8tFZdOdTCrqNnvt4SJXtxrtuCRwPzwJYgy6AOcLFzHJ0ChrKtMNlGq14Grm3mZvcGPz6cYfqPtBLqJCc14kgnZVixfHNFC1JqiHhNbiM6joGHkW721ALS8Hs1eNmsT0sAL2AMAwxTIhesJaY9rtVkl1juxyT0zKvnMTJJgZshRSC5fEFCn1z%2FMK%2FhycQGOqUBhOC%2BDkqzXdKVka3JCyk6CfV1GIIURR5aWDBMEHlGindUUfR9iY7zihFfvj4TTcyDEQtftEQvCMA2mu6Kmwz9R4B7TAcB3jjxH2bL6O%2Bsg5Sq84B9%2FEcWcZISl%2B5MTZnQt%2F2cD%2F3nmeZrLkFAarvgBwSRrRIEL4Y3HKq1HYUw7vaakXz97w%2FJB8OW0s3mhzbsrEU1Z%2FeVOQbDkwZdsKL3KwoRu78l&X-Amz-Signature=e5d0483c0ed921411a7ddfe2a3050ecb2c1e854af81a8e11de5321b15a59bbaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TISN63Y5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGH4hxQUJLm0OOrrSAmBImwv2EPsSEUm%2BXTu1OGVGmxYAiEAgpnlOfZczVpF0rE0zgPj0%2FMr95azrwWsgZTi%2FuWpqLcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCR8rLHxPU5hPqXt5SrcAx7zB1otLcYx37vFSAmmiMAx%2FrgBd8Pq9CnAnSsOQ3GZUSBJ88DJ6zKQ1bICHlEoOp9nEYnTxYdKpMiI00q0P4MozxZVUxSxeB9bhQf6rpc2rRhYLwxiLoa2OXq9Q1CCl2wXrrFSd9jK7bNDm%2FX5fUJG9Jn5fP%2B3ERYpyecZo%2F8x3IqLDox2RL%2F6IQ%2BeUl82fH39wZsz4lRe5cgG5ym1WKyvy3HvA%2BFesqF5lqvmFkljbNO4sCzE2c%2F0biAnMJcW9g%2FWcewCiZQURlmf2IYqJD%2FOOF4BtUJhLeDLObCg0xG7Wts89ldtDWqHcHX0AQoVQD68zkdJAORr9IOyy931dtsz3rLzCrcs44iMBjX5a0PM5cKFQxCgrmb0BTbSUv0Vug5Q1ybvkjF4zlK6tx6mESycOh2L410R1HplyAJ%2FUoAMRJnpGyFH6xBsEzXH5lPxVEULZNimYiVmyHOrm6dhipLaVZsfJ6Gjs0i0mfGh7FYf2MDX8B5Iuoe8QnPCtBk0%2BP6IXCE3YfGntmWl4yK1o8JE8C7WlYK5qc8JU3hFEOL4oyZ6Td6efnHbjJyAMUnve%2BSI2cLze1R%2B38TWstvWxwtZnGOkBMTpfxwI5gpjRRXXfGTVf1SpuQnVgINSMM7hycQGOqUBO6A55Sb91CVP%2FHHDOpvCiaAIFyIg7bKuWX390wfs8cv4C%2FGLQ6X1iRUuVLk3mVI%2FxLgfghtRtfXXdR2uHgC2K%2BAolt7XTqCqz5AISteXLWEfEFfD1IhtEKfTV1IYMzwk0Dlw5V9QuJYruhH3QEedeUUbe%2Fehws6Tm8Q%2FaM6PMEdnwvn2XL%2FsYiNPKpKKB9Pyb%2Bij6Kbp5YfasiNs7dBrXRxwclHI&X-Amz-Signature=abfc997d5058bbbd5c49ad1fd57e224006d65a0c114dc681fe0710e90d0721c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634A6OTCW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCOU%2BngtsKjREtFw0bRKJKtcYhKXdSBosyHdfQt2X6W7wIgfK55wv66VkWAkX%2FPiSp7fU3tpk2T%2Baue2dHZ3ari4nEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDGiuRDP%2Br3SVp2TzISrcA8kPij19Ap5UYFT1Z8en7Kl84Etv9%2FXDomhT02hQNJRN09xcOjGoPG6s0Tge02FafcrAsWLt7Nh0Bvwqn%2BrKmtVGsek91NygwR8w0jw09wsTGIDzpqFHBr76rUwThCdOvs%2FVN8snVQZxofV2ZfcYa8dWapgnXm%2FlYXjzS2DNW2lbQl8GeHNGWxWRRiqgp%2FJGUAn1NkGC%2FRFUBfoCVpnuOR91t9%2FGCKRDc%2FRo%2Fh1RSQWB%2Fmx2yP8x%2BofdZaNf7XHQ%2BID%2F0X%2FuAcgjmLie9iwKSTV1aNAHiJDClhpLMb6FHHvMbCMqdtvypVGypx31XWQ%2FYGHDmy9Fynj2cX5KFH69%2BlkhkEvikFCZQdo0z56fpYPp4rgIGAsNylbTJqVO2lG8zsNQ5Tjx%2BvtAOO1rL7Cc2bC1%2B8OvnD5ZFEToRXwVwRzLtATF%2FkQ02ANDpuL4NfPyE6ksSvVWgX%2F6UwnQlJuILLz3hizQFnOt44gKw3UoAcVo0ktokQwd%2Fo1CvKcVCAaZKSE9wD7LY6JozxLaCf75fllN%2F7jq7ZSsEvbpYTvOJnIAd%2BB%2BDoXcKdESs0lvpABU9SzNzKjpJRHLp1m5hUgOyeZSn1E%2FbSKnmQKuSGAeJ%2BhPvpxscfeBimcNe7uDMNHhycQGOqUBvpWPsPd6cqDszetXQrJDTvhgwNMglisOCvnxgEbV%2Bpbc3MAGAiud0e0GRGSG%2FSZGhAjYiCX2hATBw7JUwq4ACGAUtQ4Ya5MeuCYzfLWUq45MPV72uALq%2FqLaUPzTHmvIIq3sS%2Bj3w3t%2FnpFwAmo5poV18n97h6SgnS9YY0WvlOcgCS%2B0bspyghRWWi6%2FImRb3%2Bp1pBEP61%2BKsFAg2yghRdzyrxkG&X-Amz-Signature=361b9d2ceab0fa38e27e38c6ec8e898e75dbdc93acea60c708dc4fbac6065595&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2JO63UP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDgMwdV8ViJ%2FcFBQ4seMTOClNFrfSKXT4FI1w3HTSvBjAIhAPBb9y2sy55pCNFumkk7%2FtihKmo2iYOn5o2rQlxEetVkKv8DCGYQABoMNjM3NDIzMTgzODA1IgytV3sHEa9n%2FRBvsNQq3ANcyhf46gBMLqi4W%2BuHyL2AkNpSQOjvAss2tNqpGVDksTjhgrvBqDEfT813W%2B34W20pcovzL1c%2F5z4Gky3%2B9FI5%2FVWNZZvMmF176%2BVftfujYup8t%2BW%2BDBsjp0fiwZW2LkLZRw4PBaDEDIhn0n0e81WxSP8SlEnb1jnkmAOLXHlYFK771t359SGEg2MaZ11Fx3aIOVFlTRaU8dUhjiTH2PusnwcWt0Cu5ay%2FySOUs3XkpVQpmduFEzMcXOeuIO%2Bw7th4f5bfDDar6NCBT50JtEBQnk26gTp532KJmrSiQF%2F0kbv6MSEf%2Bl81dwBZGIgiG3azVYFXvxVI1rUAZx%2FfmOfZ%2BFUPkFuio%2FIwtlLBaE5PHd%2B6EHGeB71dd4a8jxcbQr3G%2FEr68P5zJGe9voYSC0sIzaYbpknqjfvR5PqCW%2Fk5rgIbuE9QatB2cXvB1ucEcAFQh00fOZkXSzJwHHM9cN97rNZgbX%2BeoarUE%2BAJpJi0NBZw1kZAeqToqABInxslrGBF4F3uWeMuisMBs2qZvnw7XSXaTckc8Qc8rNnHGOabllFArWPofLtMF0v04Fyhqp1XxOEYRXV%2FF0EXflBicjfBMjnnUcbJ5c8l%2Fn7%2B0GhNwWu%2BIfLRC5jIHgTEWDC14snEBjqkAXkEI3SeJV6tIgvH76gdAc8TxzqZuxe%2FipGPQNno0TuzlKcaRnuZTtCI2u3eNwNBlnL9rd1nhoSfnek4K1Mav5z8wVrmt7Jh9uuM4DrgUqIfOPteWcHHYjyhPItVpXw3nygY0QKCWeaSr8ccaki2imPH%2B3RswdeeQImEtprrawcxq2qztR7ybTwnlGMx3%2BHqiXZPUdog0sHct8WcO31%2FPqRHptQS&X-Amz-Signature=e0e6128d0491dbe9a0396f6cc587f6b09d29210b8f3253909cd1db5258026df8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVSIM4LF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIG43wgV6CfY%2BbyKl1nuPvyp8m6Am5XPi8Yjkr9%2FCd7CjAiEAprbfDAZXwaVuIZQRLoQ38CKa69xzc1snlC7IAsg7Zaoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFMyujoxjuXnljm1NircA1AW9c51qB0KPu5yiMpIeo%2FF1m6nblafmJvlJS9E9uKvb%2FKBf8CdhX4W23pL2u%2FnsE2ZeGI%2FCu50dXgVGDA9v7RxPkWHAAwfDP5fOKE%2BbK0Bat2GlRc706RkqkVz8pROuHOJ3%2FPCK3VX2PAd6FsiKBI1bCcBhicJShjntylcvEMaB19IZJYXZoQ0zv6xxOLWEFLDYGGL5qbcGeey4TMvFIJqt5ce0gaRvaIo0rpr5rFpd2W9e%2FfGeRMZ0pdYOD%2ByZkjxsS9sM3g6PjmrEiCY4z%2F5Oy0EuYhqMim2WzGMr%2FS7vkOyOoYLZ77latdi%2BGlBepyC3jGuiYLoZcAFgpDbbPmU0IvnDjbpEZzwoHocYLp%2BW2HajpVd%2F2lM2RAnkO9499KBcPpabrn9pvz4UuOshFmuWcaIIeGckfQmvphpU3bEvddvuQ6KaZRkoyDHujVUK3aNLGz8tFZdOdTCrqNnvt4SJXtxrtuCRwPzwJYgy6AOcLFzHJ0ChrKtMNlGq14Grm3mZvcGPz6cYfqPtBLqJCc14kgnZVixfHNFC1JqiHhNbiM6joGHkW721ALS8Hs1eNmsT0sAL2AMAwxTIhesJaY9rtVkl1juxyT0zKvnMTJJgZshRSC5fEFCn1z%2FMK%2FhycQGOqUBhOC%2BDkqzXdKVka3JCyk6CfV1GIIURR5aWDBMEHlGindUUfR9iY7zihFfvj4TTcyDEQtftEQvCMA2mu6Kmwz9R4B7TAcB3jjxH2bL6O%2Bsg5Sq84B9%2FEcWcZISl%2B5MTZnQt%2F2cD%2F3nmeZrLkFAarvgBwSRrRIEL4Y3HKq1HYUw7vaakXz97w%2FJB8OW0s3mhzbsrEU1Z%2FeVOQbDkwZdsKL3KwoRu78l&X-Amz-Signature=687d1b5ae6068e21038342541a35ec34677cdcc2e589d3a9290918086931a5f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VCFX4U7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIATkxWAlCfWsFafCqX73MNJjutWEjV%2F3pSqbEMQcHvz7AiBI6Zh22f7waDDFu49tfnBThPPNtE3Gr%2F2WMvTmO9ZQnCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMR5ru0tbxo8ENXfrXKtwDNUo8%2BIikQefiG9Z08msPL5ODNNtvcu54Ir4S%2FM1uy83%2BPscvBUwhDv3Tj4ikye0qAWSYAuknAPTsym0VLHnQxVDD0sbowD9scIUjy2tvprCw13n8isqr99oCTBRqh62JNTFrEioEEtE%2Bjvkw%2B2SBE1WPH%2B3C62tpv8vDaNNcR7C20uvgKkcBeexK62L%2FTIN5udPtoKZoSflOauoC6giWs8YjbB7pK6gnce64jP8fIGsGlaW1Om0WeyV1M5UjFmH4fDWb4Br9TXt8JaDhgqreqbCdfibMFDlcf0EDUJyAV8qa56qr5mebmnshG6lYL3tLV3kqTHZOxN2almArxLa0kVTWnlldXeVpaRn2TmDFoPdEQIKOZx0EcdGcSon9aXVOL%2B%2FDS2D8SsMOo2hJbk5je99Bz3oWT6Dbodz%2BXwHVu7sNsVDgzq3cR%2BVn9nE0iKbAtK8YWbFD%2FuDMobCIl3HIjB8g3q3jFkptC7v64L1v36kwcjxAcdN75cKaJt%2FJIzZeyRPyNxJEmzbKz4leaZ%2FM6E1M2RF%2FQDx58q%2FgwnG9XaYcfESUkCtTFDQ4ENMhsGXTc6iCxetuw3CHhjjri8i%2FPDQ0%2FZLFbu%2BAvKPgIIP2RwILTNE47oWPsbnPpqIwj%2BLJxAY6pgGlJIEkB%2FcsfcQYKjLH%2BcwsU6AR0Pz3%2F7ieN889xQ%2BdxqCF4Haqkr30Dz%2FWbVY9lI%2BC8Jr0UNGf%2Fpl6Hw8T94pdis0dVH8jHWFtJtlOOUr7rF2FEA8gwE7j9U%2BPGXiMj15rI4unuoVH33r6HfiFQcJn0bmPgG9vpK4PBIqFJV6AdMOrT13pQVgYvFUw19htlUG8KufMmVITfPhdBKKbMO3rNfbVqyhL&X-Amz-Signature=012f5fe37595c2f7376df29b8cdb583008fdc0d50f82e7f28cddd73bb1ce24aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVSIM4LF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIG43wgV6CfY%2BbyKl1nuPvyp8m6Am5XPi8Yjkr9%2FCd7CjAiEAprbfDAZXwaVuIZQRLoQ38CKa69xzc1snlC7IAsg7Zaoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFMyujoxjuXnljm1NircA1AW9c51qB0KPu5yiMpIeo%2FF1m6nblafmJvlJS9E9uKvb%2FKBf8CdhX4W23pL2u%2FnsE2ZeGI%2FCu50dXgVGDA9v7RxPkWHAAwfDP5fOKE%2BbK0Bat2GlRc706RkqkVz8pROuHOJ3%2FPCK3VX2PAd6FsiKBI1bCcBhicJShjntylcvEMaB19IZJYXZoQ0zv6xxOLWEFLDYGGL5qbcGeey4TMvFIJqt5ce0gaRvaIo0rpr5rFpd2W9e%2FfGeRMZ0pdYOD%2ByZkjxsS9sM3g6PjmrEiCY4z%2F5Oy0EuYhqMim2WzGMr%2FS7vkOyOoYLZ77latdi%2BGlBepyC3jGuiYLoZcAFgpDbbPmU0IvnDjbpEZzwoHocYLp%2BW2HajpVd%2F2lM2RAnkO9499KBcPpabrn9pvz4UuOshFmuWcaIIeGckfQmvphpU3bEvddvuQ6KaZRkoyDHujVUK3aNLGz8tFZdOdTCrqNnvt4SJXtxrtuCRwPzwJYgy6AOcLFzHJ0ChrKtMNlGq14Grm3mZvcGPz6cYfqPtBLqJCc14kgnZVixfHNFC1JqiHhNbiM6joGHkW721ALS8Hs1eNmsT0sAL2AMAwxTIhesJaY9rtVkl1juxyT0zKvnMTJJgZshRSC5fEFCn1z%2FMK%2FhycQGOqUBhOC%2BDkqzXdKVka3JCyk6CfV1GIIURR5aWDBMEHlGindUUfR9iY7zihFfvj4TTcyDEQtftEQvCMA2mu6Kmwz9R4B7TAcB3jjxH2bL6O%2Bsg5Sq84B9%2FEcWcZISl%2B5MTZnQt%2F2cD%2F3nmeZrLkFAarvgBwSRrRIEL4Y3HKq1HYUw7vaakXz97w%2FJB8OW0s3mhzbsrEU1Z%2FeVOQbDkwZdsKL3KwoRu78l&X-Amz-Signature=f0afa0d5898b4fca1548fba0ec1ca68b0ab1110f4b400de9c7dba4b2d2cbe1ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FVXUQQC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCHNO0Dg34cXasaf%2Fy0ukMBkiqpF1stYdun9CQjk4LkGgIhAISoPhu3qjFjadkXoxjmMw7oMmmmAIui0S3eDB7nvhEnKv8DCGYQABoMNjM3NDIzMTgzODA1IgxCCuRykWtAgp3Gofcq3AOHJr3DYRQvvOuYAVEmJ4UwJm4bbMwwrx1JPA28kXOqWTYyb7Sy91FVggrCfV1Y0muphSI390L3s%2B5LgMMf01yxCo6VhQqDhEwTkaYfTuCSKwR5Ss6aXJrLRe7%2BR3zqqUywF9MAdGiNhgPrdGxZ0P03k5h1eyF0MiTdlX74ePxjekgzd3J2J5hESxRz6TNDz2Yk9Z6fVZ6B0HGfzH1x%2FOnTI3jOWGe5TEuZMuDARNUW41OMniBvBfRNB6F6TpIS023kBqsiNJFa5MsjCqpqHP7qRp4Tf75FceUWlWjUam0XKa%2FQg5Uakz8S9gFdkOFMnAJXqI9OF1jeDCCA5SBUTdS3vCBPO4iWseVjLjzdC0J1M2VcOpzy6i12t5p%2FEn1A3UAFVKnTd6da7T9MgdXwlXJDc%2BG%2BXQME3%2BSsNGneAXFPY%2FZPuW5Md7PEe7ST%2BJUlC8tF5iKrHJvJrmzc5H0VWHeDqyszcoq39Qz39KhPWmlybotfmCmaZvRYQrVml36ShgKL44mM%2F2GpuUys2V%2BfzXf63ImVEQZ3jvyedQPSygrcXeG%2Fx%2FN0XZQslnpyqlYHHPHrbABi5VS1sfwpz6Hv44U0PW8zvIJFlln66FFhhd3Nz23T78J4UfTlBRHW2jCa4snEBjqkAfl27qiluivAddhEt7lI3xADkCd4kaqP6EfTYA%2Bd65bCQBufrkH3%2Fzn%2BMbMoxyZcIsce0D7oCUtlydBrqV0fWveRR0WLjdCctRuc6ctnvhE1S85qzzl1Zafh%2Fk626Ih33Pr7pSuhI%2BTt72wDxFUcaIqDJpbhhEL1hgC%2FMtVNvVlH8ppdks6N7J7yeLvuNROCumS7KYdT5pR9xrbNIsE64md1ct13&X-Amz-Signature=14b0399606914339af150a84770c52dc51920c9388c774b27927b0d8410d74f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVSIM4LF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIG43wgV6CfY%2BbyKl1nuPvyp8m6Am5XPi8Yjkr9%2FCd7CjAiEAprbfDAZXwaVuIZQRLoQ38CKa69xzc1snlC7IAsg7Zaoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFMyujoxjuXnljm1NircA1AW9c51qB0KPu5yiMpIeo%2FF1m6nblafmJvlJS9E9uKvb%2FKBf8CdhX4W23pL2u%2FnsE2ZeGI%2FCu50dXgVGDA9v7RxPkWHAAwfDP5fOKE%2BbK0Bat2GlRc706RkqkVz8pROuHOJ3%2FPCK3VX2PAd6FsiKBI1bCcBhicJShjntylcvEMaB19IZJYXZoQ0zv6xxOLWEFLDYGGL5qbcGeey4TMvFIJqt5ce0gaRvaIo0rpr5rFpd2W9e%2FfGeRMZ0pdYOD%2ByZkjxsS9sM3g6PjmrEiCY4z%2F5Oy0EuYhqMim2WzGMr%2FS7vkOyOoYLZ77latdi%2BGlBepyC3jGuiYLoZcAFgpDbbPmU0IvnDjbpEZzwoHocYLp%2BW2HajpVd%2F2lM2RAnkO9499KBcPpabrn9pvz4UuOshFmuWcaIIeGckfQmvphpU3bEvddvuQ6KaZRkoyDHujVUK3aNLGz8tFZdOdTCrqNnvt4SJXtxrtuCRwPzwJYgy6AOcLFzHJ0ChrKtMNlGq14Grm3mZvcGPz6cYfqPtBLqJCc14kgnZVixfHNFC1JqiHhNbiM6joGHkW721ALS8Hs1eNmsT0sAL2AMAwxTIhesJaY9rtVkl1juxyT0zKvnMTJJgZshRSC5fEFCn1z%2FMK%2FhycQGOqUBhOC%2BDkqzXdKVka3JCyk6CfV1GIIURR5aWDBMEHlGindUUfR9iY7zihFfvj4TTcyDEQtftEQvCMA2mu6Kmwz9R4B7TAcB3jjxH2bL6O%2Bsg5Sq84B9%2FEcWcZISl%2B5MTZnQt%2F2cD%2F3nmeZrLkFAarvgBwSRrRIEL4Y3HKq1HYUw7vaakXz97w%2FJB8OW0s3mhzbsrEU1Z%2FeVOQbDkwZdsKL3KwoRu78l&X-Amz-Signature=41cdb51b51d426924e7fa47593e7a1ba81647e44e7ca91672ccf18db9547c71b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673T33SI5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCWrN6dFW8bVpTdSeI1UYIeUOCo4RM%2BHr7qFTiriK1qIwIgJRisdlfL4KVUErOn78Z1RRrkCinmckM2sQdzRKcXE9cq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBeGkgCG7QqYATYk4SrcA7E2LILiJugM77kLBcDtR9gTOd5hcF0BsjEgJ7TV8AzRrooowhBzQh92Tf67WvKUCIpsOV9i5RZ49r583KDKVQfaKIYjEOS8%2Bs7LxNfRX%2F8M6whc5BXJvZA6pYrt7%2Bs5aoZOZh7nwYuxaF6ia3fWgWoHxeVUE7PnAZCXG44UsQegGVTT%2FS1L6imzf6cMv9Q1nTsD0afwZcyARCsZhWvxrCopOL68FPyTZpTf%2B5Be12eZRgYMZaU4giZvwhX3SxIgKZqYA41ypULS6aTUYLZ2Ajb%2Fct%2FPljBmPoE2U1Qr%2FhtH0mfQADCBVpohoXwvgBhpZ2r5zmE%2F9S6OY2A3acyXDdm2PgjS2CJjZ2QL29%2FOPvVIsJ9s3hh0yu7yAm6PL%2BbZp0SLcsjfoOIOJv0tzqA7z0hfkUVx3eINb6ABHqwNIMNyYevPgMfq7RiQdtfN9FCpZxY%2BOko2amoe94T31Wh93EnIC%2FN32b46v0M1ZFzERCJkcLEa9O39zXFc9LvgSWfIqhmiI4T4Cpf8DGLMOg%2BlmT3K2mtKj8ytpuIp00spi2LUr36UZVmikBpyUnSxE2dl%2BJYX1YPs4sixlRioBzXvMlswDJCdAJN0kTrEA%2BOei6DoEUpqEdfDXTvjSBvEMLrhycQGOqUBZF5%2BQBu%2BncaFhGi580ennAJxyVvUtyvC78Ka7EuQx6EkTjA9%2BqFEi7exz7GOOLq6s4grT2LI9UOPbDIK4jjoq4jOliddBgxa4Wu3Fh%2FbvkbCm%2Fkvnr%2BE7icm38DPWjH%2F44Av10uwF8eYykTLv5MvnPAW254wqVxnlizdPEputfyetKdlGCUWxPqey6ayXhsTQ7Yp4a9G2i%2FQ31rfNptY0BgEFLJG&X-Amz-Signature=eac0f32c3e93fcf426a28d5c50cfb7305ce6c0030f4350f774d5ed1cb97314d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVSIM4LF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIG43wgV6CfY%2BbyKl1nuPvyp8m6Am5XPi8Yjkr9%2FCd7CjAiEAprbfDAZXwaVuIZQRLoQ38CKa69xzc1snlC7IAsg7Zaoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFMyujoxjuXnljm1NircA1AW9c51qB0KPu5yiMpIeo%2FF1m6nblafmJvlJS9E9uKvb%2FKBf8CdhX4W23pL2u%2FnsE2ZeGI%2FCu50dXgVGDA9v7RxPkWHAAwfDP5fOKE%2BbK0Bat2GlRc706RkqkVz8pROuHOJ3%2FPCK3VX2PAd6FsiKBI1bCcBhicJShjntylcvEMaB19IZJYXZoQ0zv6xxOLWEFLDYGGL5qbcGeey4TMvFIJqt5ce0gaRvaIo0rpr5rFpd2W9e%2FfGeRMZ0pdYOD%2ByZkjxsS9sM3g6PjmrEiCY4z%2F5Oy0EuYhqMim2WzGMr%2FS7vkOyOoYLZ77latdi%2BGlBepyC3jGuiYLoZcAFgpDbbPmU0IvnDjbpEZzwoHocYLp%2BW2HajpVd%2F2lM2RAnkO9499KBcPpabrn9pvz4UuOshFmuWcaIIeGckfQmvphpU3bEvddvuQ6KaZRkoyDHujVUK3aNLGz8tFZdOdTCrqNnvt4SJXtxrtuCRwPzwJYgy6AOcLFzHJ0ChrKtMNlGq14Grm3mZvcGPz6cYfqPtBLqJCc14kgnZVixfHNFC1JqiHhNbiM6joGHkW721ALS8Hs1eNmsT0sAL2AMAwxTIhesJaY9rtVkl1juxyT0zKvnMTJJgZshRSC5fEFCn1z%2FMK%2FhycQGOqUBhOC%2BDkqzXdKVka3JCyk6CfV1GIIURR5aWDBMEHlGindUUfR9iY7zihFfvj4TTcyDEQtftEQvCMA2mu6Kmwz9R4B7TAcB3jjxH2bL6O%2Bsg5Sq84B9%2FEcWcZISl%2B5MTZnQt%2F2cD%2F3nmeZrLkFAarvgBwSRrRIEL4Y3HKq1HYUw7vaakXz97w%2FJB8OW0s3mhzbsrEU1Z%2FeVOQbDkwZdsKL3KwoRu78l&X-Amz-Signature=9dfcbecd41ccfaccceb28e6323491aa4673b97628f957e5443efdeca3a5935c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7VPODBE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T211001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIACiCGIHe%2FgviyFN62kbXD75MfBtAk5ebIqGnuQGYwCYAiEAywdb8stiPpIXLHCsqWJTqn5Q%2B2Zm8eNKTqnLLcFELjgq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNWmEFr1CgXiqTaK9ircA8Pa1WzOXRDOULeKjn7AGVHguqdHCm43WRtEMyX3NZxjOl%2BOLAFVrx8qAUHfnwgMBNQRzj%2BSaenJ0w7VYOp9VlD6tixNc46lY7v9Xoi%2Fb8Ot15N7FLATT%2F3X5LUOrUFNY9hvn7j%2B3s8%2FuqqATdhhkexWE7W3x1lB0ik7FigFSK5YD4FuwZpKSYHYNlxqFpdHj1ipZxJrNTbVDu6VwxJAVMc5%2F2omgud8sBMCd2xazMZ5r4pQva9QUII3Ox43XqS4qh277M7YLiTr1xQnFihPB6%2BdVwHtjt9azdVtzLIi7qoZWbvVwENkv%2BXWdjlXn68ZC318L%2BHHZmKbrAJjFi9Szlnn%2Byq2gHmwdx%2BBQ5ummMnYmggbKX5%2B%2FzZMMfmUppswWj0MrDxO0FcUQ5pjO6t8%2FLQY4Atrd8sutnZwihGm2tb4siiGyawZYhSywsdrabvlDQmOaSvD3h6ZIvFsWd4TnbSi%2FMGxRC3uaAAYTTC6DoLtdyL%2BiNvn61Iuv6hGjdedvAe%2Be5iHVT97fw2Z3tPCEXy5hERjZtCKIIFFcAAcvuleLJA12Tinu1pt9b7bwc3Qc4GlFSpvhVaKBGXCwi4DWuka%2FOsD0xocxKiStC7UOoGxu0EEm8WVLX162Y5JMNDhycQGOqUBlNv5XI7xXyu4naZmPCvQo7Fx0eOtx3cYAOMDjp7%2Fz8Eegfv3ZYJraW8mfF0P43mFMQRPMph5UC3cILp3NgsrEm7a427%2B%2BUGRYfaJ1bePCfkd2sbYbga59ipI9PxjVEj5r1L2CAnErCFoauYcrcXXioNmVMOfpRXDQJhQCbUXcJ9JSgntKL5N5eu2MhhrV%2BD8hLN4E8an4dYwj%2FwS2enApZuhrH1J&X-Amz-Signature=d87de69fef59c4f4b36223537193a135671487f5b4bc56f85a81dc884c989a19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYLMHD3R%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T211007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCb%2FR0%2FHCHE5H2ddZggShUx3J3w%2BDe%2BEftTbudiE2w1KgIgM%2FJmaVQQneHd5KtyKQM8qI%2B6b8hrxeo5YJmeJMFLnE0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDvPsakaXp0Fl4kWiyrcA5gFcCkq6vLY4Y0mB01aznsJi3op3rznaEjSI%2BJPPnQlXyL1d0YIstnfqjXPPfh2H5ztLlkXXWDtox1QYbcD6m6uclYuTtPoyDIerK5k3o%2BBwY3EvU1u4xuYNT03RWWs%2F8fyFif9iu4jybYZcedUS%2FPmhz98Rl%2FZ746bv9j7JLtch1eSoIIckKRcxczmICTkjfNP0MVgzFZv%2FwERcdw8ZiDsjszju4AdXsZrXDx7KTILEvMxLAauzlH4TuBefDUT1Hjhq46UCwuv38NIN5n71I8io6gKSK86Sx%2FyDjePexLh1TTKekdTTRMMJiZXIlaio6HQ6ym76RsGLMavZw28xDZMPFQnBhp47qof7rLqyEKXuaApkf1P6aH6tvceaaLuHmqPNy3uviN%2FL6%2FKiYMK0mqlNhlJ1DMlQ1wniJLPo3LCkHKMs8JUZojJsVF3kuFTvxFCLyw%2BtjTzjxXJ88euqKq1XPp%2Bea0HI7dqhqoCzpKplfxXaT%2F1O3GZzBKe8%2FXjiSGkYYJkEyFaASFifqyZ1ceEDvtDCTRiOA46MchbwjwRu5zpiuF47gsi4H4Np3eAiwqMurwOBoOIsupCIaDdDWVcW0gviRzr02OKoCVtxFY2PVNLaEobuZ4q76%2BcMKTiycQGOqUBcSZMYDsJXJKnY6dsJ%2F7tKdIH7qSgF2rgyr5X7CKaGMxFcWpQgoVQ8y%2BdxXgvjRtNQmF%2FkCv55S%2FnQh9RVDSfUqwVTvu9mSxGH46hVawYqRoOv5LHqvQhBnaecysxKzoLmwgLMtxhIzaZcRS36of5YpjgQIpCThMGC7Cz7749lJsIWccvQgess9AtgqwGrnC%2B6IudSyhi1stH0Wq6V8EqlTq59x3I&X-Amz-Signature=0987f86fd9512efe9990704f547338c4d29a2effb1f31939785a895f041825f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667627HCZB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T211010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQD%2BZdTWVl9Mv3tKYvp%2BJ4QyG%2F7ifNJuUPEEQ21zjWG5YgIgXqhBW5gwFAgzTx12sEdpYBC2pbE5geaX5Uj8oh5ZLbYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDP27vFvAHrTQ2o%2FDnSrcA20KC3ozHPsi3X9uYxIG3hWkfQMLwWD%2Brx30P%2B7tOMmOV%2F8p%2F6wOx2G5QttzVQ875BNfnA7TvjEOtG4%2BCi0KErSu78fzxB8tgIuaPPLYhTHwSBE3eYk1Su4ghhVG1L9UTA963ptwUb1QZhUvLvzcBVi%2BIz8MnIbBmgLaY5GS9nILPvaSCY7Css2YH93GJ9mLBDq25IRgWv%2BqDTB2QBQKLyN1kMQgQiMzrDe8Rglx9o0KMUpWiwVMcU8Xe5rZ9OVIMs5XcerXWljodNCStYfsWwEJHYmOLk7LHgmHhntINNAKYYJKqpzYHzoEr8gngFmC0EbUAVtyYZyvW1pZmQmjDPYidVUP8%2FRqqQpNEiUYsGVp%2Bom1BCNUkceM8s41PGYry8rkau3nYrMzDG6v%2BXHY0X0wobR7KXgXcMZiOFZHpwGJQO7sn0XTNr7%2BUZ3VdfT5AIiSEc7AjWWb6Jfo4KtGr08bvrgAZFWWTFTWLqQjhh1vqwFAQS8nkjMR3V8ZIa8YOCzp3MVfFj9u%2FmFEML74XyyZ6Hy0rp2bOYWGQgvRDYEwSeEGpiFr3Xo0MR4gLaczwWybjs8g2s1FfqeMug5DUjPzghEzZd7XAbYlF2cyi34wxzISFOsiz7NNrvt4MJriycQGOqUBi4o6Or1MH%2BLvzGZRAza%2BRqbpHbOWyQ7CL4ezYbSzhIJuJcAKrtMjmFiHz2IbK6lXRXqKdcK%2BUNxBAAqXfEsvAZlfzd8kTmJGrvTPEnbiZJUzW881V4cnL1GtotfQJnIsZO%2BuiAStpbu%2B4S31ZJoPVpG3Kz5vbciedonow5DSa1h7TH%2BLMNNIJRJ62guwMGI1gb2mKYp67YOZwfy5BWOTGwVWBdP3&X-Amz-Signature=d86523b69392e8840afa4550ab408ce3adc053de076bb8ca83b589e800326918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLX2OUJQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T211015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIDug9CqoPJDmiq3nefSdpZpCSSfgDVIyB5aKeiB4pngSAiEAuPiiBquzTfGL8PhgbwonOXXsrNiI1liql3esAiD7sD0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNHyXcRojXhTT00YyyrcA2eiZ0lcWGBaxjT6Sn0%2FbxiV%2BaH2psehoS%2BdGpl%2BhgLE4VoEdTnZtw7E0pwNoDI%2FCRXfvLsFpDXUDU4vqCe%2FVrYxW62scS267q0bBBnKBgv8w67WybVfkJfPUVBXBUaV8J1jX4FIDkWN729lh1zxYkqa77nGQ%2B76mEUK8d6H3M9oQbe9JzhiCxe2Ky8hAWtGPR7zgjhMyRwiGu9ihl%2BLq2lgQUNTGJP0GCd3Rdsi0XskDVf3RuxJDMLR8ixsOrRg1wgP4bILbbE6yCgyjEf82IDQFrLVyBfPOwAIEC9o316T7Qf7eislROpRX3tfJYJfVq6qqWP%2BvyQkejBSqV0cKADF0QCfRW%2FfnlRdRCU88ivL6IvoWkWVQA0VnuES0oOsMkVDUnn5LUdIX8MA6zg5lhMx%2B3IugrJ3Mvo92%2FSJECQILYN9gmkVawr6TuKkR8xIIW6PjGUETK3ylbL0YeyehpqjKWPSRZqoCopCpLpTEuXtVhYefJJb73Ja%2Ff7ncoWzWeqz0rKuw8zcfxSmOSJnoX%2FYhliRjjzb21e%2FYdnhC8B2FmZGovfypHSMyemjNPeATx6L0dn6idu4DgUerqXxrf0ghWEyOAFGGa9dm0R83jqFuYqr5roZYV%2FkMBW9MO3hycQGOqUBXxwDGmKvb2JbA4BgC05QMmKl%2BbTl2KFQg7pPIdVYTnGq7XsXIwnoX5YYl7gME%2Brqix8Ulx3w0jGyySB5iO6%2B56QZcVNJvNH9GZKmZkNmzpvJV4CaHacJq0We6J%2B2evS48zwV794OD8e9wiKiDzQRXaGgeIOkWMGEOcVdv6f5RTRj5ShW8tCEvUtBH54hZbxcIZzvpHMmQXGupuEio9OuSCobowDy&X-Amz-Signature=e18d56551641030ba3d1bc6de848571789e093b0b267da32cb6f1d832ba4b9bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSMYXHNY%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T211017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIEmZo7HQBMQ0E8FiCRnhZp%2F5f%2FdyIxJm%2BonZJrvIUyMKAiEA1%2BhUuVAIYXMdnZVbB1k5Jxq8Ya5Ta2vUHxWiRRcVc4Qq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCVK5n%2Fo65LE0Aj8qCrcAwSDw3AJwnJEfMdJ1QNbHaJH337Uu6MHAr5t1nErLL7MstsCqtbTWu7PlQi%2FK8G2LRlFvDu1wai7%2BOUQxw9LY6E5tzsbpLDmtuvZzEC80ynUFz4xdFwiV27k9kIU4ef2Z3iVGrbaevouBslldv1z6bL4iSyPmTdTBkg%2BFnkcOR1djIM1DMX8zzXGM8geMJRXjIqEkVPIMKb77HbGhBVks25YVBFHnxn4UnskiPmObV3sjJ6xmSPg32fpiElE86BXS6btvCQUxUrNFvh2NJoa254JeCGl2hHBoTeBeHfuuc9qGCrxvucCZle63AkQuHF%2B%2Bbll6xnHhezZOjcERV6UusCVHC%2BZccx1S%2B1X0%2FzYDs3LRGmPKyYHuVs%2BTZ94Ck93w9vE4mxBbaglB3MxeT7IxudtvcG9f1D8ji1zpkQkMWt5ySSJZZALNmFo0ZXZI0mZ3MW1WZ6%2BdEdnqLL%2BhM%2Bvg%2FiKSEnUJkCwKrr5CeC0JN8ji4G%2FIErKBw%2Fj2cHNyg2hKM3dGFt9mYtKvhYrIBxEdy9vf%2FuIFygDU7roY7FTCVI8kjkgyVf4Fk0d0dLr0R%2FGsNcTL2oNhMa4p6jqXq%2FFxAeIrOGdFfGKNVmohttShHrj9oY8XsAQl4rk%2BvzCMJviycQGOqUB%2F%2B0iliU2v%2BpGsB0IEpQvqyshzu9kR6QrUIUW8YwcSByI0A5NsA9L%2FHlRhR%2BlGtiT7McTMj2vZo3UgU1gd9VvhHq7hdlOdo1i7TZWeVXvDLXqabpcnb9qWinDbSfuagB%2FiOhJ4klICYE3O3ttkO7sG7JxHchi6D4LvaOHw6PFOCPS039iy6mxOGL8Wb1Fo7S%2FE1%2FBqrny0%2FCcYYAuUK7JtJTngK0k&X-Amz-Signature=43d23d3763081d405def7fb07b46c67abaf210cbc5ca515529a86bfe8ce8ede1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVSIM4LF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIG43wgV6CfY%2BbyKl1nuPvyp8m6Am5XPi8Yjkr9%2FCd7CjAiEAprbfDAZXwaVuIZQRLoQ38CKa69xzc1snlC7IAsg7Zaoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFMyujoxjuXnljm1NircA1AW9c51qB0KPu5yiMpIeo%2FF1m6nblafmJvlJS9E9uKvb%2FKBf8CdhX4W23pL2u%2FnsE2ZeGI%2FCu50dXgVGDA9v7RxPkWHAAwfDP5fOKE%2BbK0Bat2GlRc706RkqkVz8pROuHOJ3%2FPCK3VX2PAd6FsiKBI1bCcBhicJShjntylcvEMaB19IZJYXZoQ0zv6xxOLWEFLDYGGL5qbcGeey4TMvFIJqt5ce0gaRvaIo0rpr5rFpd2W9e%2FfGeRMZ0pdYOD%2ByZkjxsS9sM3g6PjmrEiCY4z%2F5Oy0EuYhqMim2WzGMr%2FS7vkOyOoYLZ77latdi%2BGlBepyC3jGuiYLoZcAFgpDbbPmU0IvnDjbpEZzwoHocYLp%2BW2HajpVd%2F2lM2RAnkO9499KBcPpabrn9pvz4UuOshFmuWcaIIeGckfQmvphpU3bEvddvuQ6KaZRkoyDHujVUK3aNLGz8tFZdOdTCrqNnvt4SJXtxrtuCRwPzwJYgy6AOcLFzHJ0ChrKtMNlGq14Grm3mZvcGPz6cYfqPtBLqJCc14kgnZVixfHNFC1JqiHhNbiM6joGHkW721ALS8Hs1eNmsT0sAL2AMAwxTIhesJaY9rtVkl1juxyT0zKvnMTJJgZshRSC5fEFCn1z%2FMK%2FhycQGOqUBhOC%2BDkqzXdKVka3JCyk6CfV1GIIURR5aWDBMEHlGindUUfR9iY7zihFfvj4TTcyDEQtftEQvCMA2mu6Kmwz9R4B7TAcB3jjxH2bL6O%2Bsg5Sq84B9%2FEcWcZISl%2B5MTZnQt%2F2cD%2F3nmeZrLkFAarvgBwSRrRIEL4Y3HKq1HYUw7vaakXz97w%2FJB8OW0s3mhzbsrEU1Z%2FeVOQbDkwZdsKL3KwoRu78l&X-Amz-Signature=0b1b0e6713ef560deb7fb5611abe0e13cc0d5c4d2fd4ef695328d06858e9f345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVSIM4LF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIG43wgV6CfY%2BbyKl1nuPvyp8m6Am5XPi8Yjkr9%2FCd7CjAiEAprbfDAZXwaVuIZQRLoQ38CKa69xzc1snlC7IAsg7Zaoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFMyujoxjuXnljm1NircA1AW9c51qB0KPu5yiMpIeo%2FF1m6nblafmJvlJS9E9uKvb%2FKBf8CdhX4W23pL2u%2FnsE2ZeGI%2FCu50dXgVGDA9v7RxPkWHAAwfDP5fOKE%2BbK0Bat2GlRc706RkqkVz8pROuHOJ3%2FPCK3VX2PAd6FsiKBI1bCcBhicJShjntylcvEMaB19IZJYXZoQ0zv6xxOLWEFLDYGGL5qbcGeey4TMvFIJqt5ce0gaRvaIo0rpr5rFpd2W9e%2FfGeRMZ0pdYOD%2ByZkjxsS9sM3g6PjmrEiCY4z%2F5Oy0EuYhqMim2WzGMr%2FS7vkOyOoYLZ77latdi%2BGlBepyC3jGuiYLoZcAFgpDbbPmU0IvnDjbpEZzwoHocYLp%2BW2HajpVd%2F2lM2RAnkO9499KBcPpabrn9pvz4UuOshFmuWcaIIeGckfQmvphpU3bEvddvuQ6KaZRkoyDHujVUK3aNLGz8tFZdOdTCrqNnvt4SJXtxrtuCRwPzwJYgy6AOcLFzHJ0ChrKtMNlGq14Grm3mZvcGPz6cYfqPtBLqJCc14kgnZVixfHNFC1JqiHhNbiM6joGHkW721ALS8Hs1eNmsT0sAL2AMAwxTIhesJaY9rtVkl1juxyT0zKvnMTJJgZshRSC5fEFCn1z%2FMK%2FhycQGOqUBhOC%2BDkqzXdKVka3JCyk6CfV1GIIURR5aWDBMEHlGindUUfR9iY7zihFfvj4TTcyDEQtftEQvCMA2mu6Kmwz9R4B7TAcB3jjxH2bL6O%2Bsg5Sq84B9%2FEcWcZISl%2B5MTZnQt%2F2cD%2F3nmeZrLkFAarvgBwSRrRIEL4Y3HKq1HYUw7vaakXz97w%2FJB8OW0s3mhzbsrEU1Z%2FeVOQbDkwZdsKL3KwoRu78l&X-Amz-Signature=c121d5831b5aba6ed6fd116bea78831dd28c680433c3dda60abda9b2a5e1dca5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMHTV6H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGmZb15Vw9zfhma0zi%2B5Jkqsz2benuCys584evR5hGgBAiEA6WNMK5Bu119BNxEsKWZh%2FcBn7zTwfDgHdCYlBjIc%2F%2FEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOfnJiC4I7Qjta2SMSrcA2QI1brd%2FQmZzTOk%2FRVEsb00TIDEu0%2F%2BXotLG3cxld0KxCH6jNxUleJUl1im%2FGltcMpxT3ybky60szVCKsjvKEcu3%2BcBXcxeLB14lu9UK1jeeo62wObjbGDsUAxEmJpzre%2BPqiQguAnY9AEYpAJUPQL9V8l5pSJbXI3vmGPiyY790mc7%2Bb2donrnhdFuIFngMxtlMW3Vova1bRbb7uUqHl7mUh8dzJukYscCMtT7rRhffs%2FOelSE8UH%2B1%2FA15ud6NG4HBsut5o0tCc5NFmjjJDRyewGb%2FKPzxT5g1fnqo3qLcaLy7g1%2FA7b6934WYe1l9U5mAWqnsCg08J6C%2F1cYaxhTvJgR1kWJyVm4D3HYCOGHFSBKcrh5tX9z9tyHsekn4lkllD0CbvxDSQpMg%2BfeJMZCVO4kopnffL1phJ2mck0WWbhVtwWXzxVLrrC5pspwlNOySy%2BnKcjqk5LGrydOsLo0cVN6TgcK2nxAzzvHVBw2ug0dC8fU9P1cy3NxwDCXA%2FZOMtQJiw6%2BnmX3Kp6%2FIwI63DJAHfPUGqItl7FWxqmln%2Fh4KUwIftq6i6bFZOf83NeUSlhExDaNI7xRhCU0ydt8qPR%2F9pUkeiHUeIK7ko8Ek8Rm8OS%2FLQpVpGQSMKjhycQGOqUBC%2B1Vzx5YZvgShMV5254uau3LjT0XWDrHjrxN7wYKjbikbsvPk8kuwOWcszMA0Lw9ecdjU4C0ilHiqVL9PfFM3QlKjsPD0TXheU1G8M8SklK5pvi8MfacSVI0umujpQwroSlAs93inx2eJdRBULaSb1AiPDASLh9uWniazeTlkof2B%2F8RYDMdMBVpMtjaTCR7E8bkS2jECQXdVxXvF4KK3i3PW0j0&X-Amz-Signature=620db9204ee811fd7a8711f7112903ce2e5c81f846bf36adb48b6ec3ad29d2bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMHTV6H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGmZb15Vw9zfhma0zi%2B5Jkqsz2benuCys584evR5hGgBAiEA6WNMK5Bu119BNxEsKWZh%2FcBn7zTwfDgHdCYlBjIc%2F%2FEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOfnJiC4I7Qjta2SMSrcA2QI1brd%2FQmZzTOk%2FRVEsb00TIDEu0%2F%2BXotLG3cxld0KxCH6jNxUleJUl1im%2FGltcMpxT3ybky60szVCKsjvKEcu3%2BcBXcxeLB14lu9UK1jeeo62wObjbGDsUAxEmJpzre%2BPqiQguAnY9AEYpAJUPQL9V8l5pSJbXI3vmGPiyY790mc7%2Bb2donrnhdFuIFngMxtlMW3Vova1bRbb7uUqHl7mUh8dzJukYscCMtT7rRhffs%2FOelSE8UH%2B1%2FA15ud6NG4HBsut5o0tCc5NFmjjJDRyewGb%2FKPzxT5g1fnqo3qLcaLy7g1%2FA7b6934WYe1l9U5mAWqnsCg08J6C%2F1cYaxhTvJgR1kWJyVm4D3HYCOGHFSBKcrh5tX9z9tyHsekn4lkllD0CbvxDSQpMg%2BfeJMZCVO4kopnffL1phJ2mck0WWbhVtwWXzxVLrrC5pspwlNOySy%2BnKcjqk5LGrydOsLo0cVN6TgcK2nxAzzvHVBw2ug0dC8fU9P1cy3NxwDCXA%2FZOMtQJiw6%2BnmX3Kp6%2FIwI63DJAHfPUGqItl7FWxqmln%2Fh4KUwIftq6i6bFZOf83NeUSlhExDaNI7xRhCU0ydt8qPR%2F9pUkeiHUeIK7ko8Ek8Rm8OS%2FLQpVpGQSMKjhycQGOqUBC%2B1Vzx5YZvgShMV5254uau3LjT0XWDrHjrxN7wYKjbikbsvPk8kuwOWcszMA0Lw9ecdjU4C0ilHiqVL9PfFM3QlKjsPD0TXheU1G8M8SklK5pvi8MfacSVI0umujpQwroSlAs93inx2eJdRBULaSb1AiPDASLh9uWniazeTlkof2B%2F8RYDMdMBVpMtjaTCR7E8bkS2jECQXdVxXvF4KK3i3PW0j0&X-Amz-Signature=077415074fb9ad72ee657a349607d45a4c8d9186ad93690e409565de963f8209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMHTV6H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGmZb15Vw9zfhma0zi%2B5Jkqsz2benuCys584evR5hGgBAiEA6WNMK5Bu119BNxEsKWZh%2FcBn7zTwfDgHdCYlBjIc%2F%2FEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOfnJiC4I7Qjta2SMSrcA2QI1brd%2FQmZzTOk%2FRVEsb00TIDEu0%2F%2BXotLG3cxld0KxCH6jNxUleJUl1im%2FGltcMpxT3ybky60szVCKsjvKEcu3%2BcBXcxeLB14lu9UK1jeeo62wObjbGDsUAxEmJpzre%2BPqiQguAnY9AEYpAJUPQL9V8l5pSJbXI3vmGPiyY790mc7%2Bb2donrnhdFuIFngMxtlMW3Vova1bRbb7uUqHl7mUh8dzJukYscCMtT7rRhffs%2FOelSE8UH%2B1%2FA15ud6NG4HBsut5o0tCc5NFmjjJDRyewGb%2FKPzxT5g1fnqo3qLcaLy7g1%2FA7b6934WYe1l9U5mAWqnsCg08J6C%2F1cYaxhTvJgR1kWJyVm4D3HYCOGHFSBKcrh5tX9z9tyHsekn4lkllD0CbvxDSQpMg%2BfeJMZCVO4kopnffL1phJ2mck0WWbhVtwWXzxVLrrC5pspwlNOySy%2BnKcjqk5LGrydOsLo0cVN6TgcK2nxAzzvHVBw2ug0dC8fU9P1cy3NxwDCXA%2FZOMtQJiw6%2BnmX3Kp6%2FIwI63DJAHfPUGqItl7FWxqmln%2Fh4KUwIftq6i6bFZOf83NeUSlhExDaNI7xRhCU0ydt8qPR%2F9pUkeiHUeIK7ko8Ek8Rm8OS%2FLQpVpGQSMKjhycQGOqUBC%2B1Vzx5YZvgShMV5254uau3LjT0XWDrHjrxN7wYKjbikbsvPk8kuwOWcszMA0Lw9ecdjU4C0ilHiqVL9PfFM3QlKjsPD0TXheU1G8M8SklK5pvi8MfacSVI0umujpQwroSlAs93inx2eJdRBULaSb1AiPDASLh9uWniazeTlkof2B%2F8RYDMdMBVpMtjaTCR7E8bkS2jECQXdVxXvF4KK3i3PW0j0&X-Amz-Signature=6f05d9cfa614adc35814d8e6330766b5bbea84c11230ea9845856ada591ea651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMHTV6H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGmZb15Vw9zfhma0zi%2B5Jkqsz2benuCys584evR5hGgBAiEA6WNMK5Bu119BNxEsKWZh%2FcBn7zTwfDgHdCYlBjIc%2F%2FEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOfnJiC4I7Qjta2SMSrcA2QI1brd%2FQmZzTOk%2FRVEsb00TIDEu0%2F%2BXotLG3cxld0KxCH6jNxUleJUl1im%2FGltcMpxT3ybky60szVCKsjvKEcu3%2BcBXcxeLB14lu9UK1jeeo62wObjbGDsUAxEmJpzre%2BPqiQguAnY9AEYpAJUPQL9V8l5pSJbXI3vmGPiyY790mc7%2Bb2donrnhdFuIFngMxtlMW3Vova1bRbb7uUqHl7mUh8dzJukYscCMtT7rRhffs%2FOelSE8UH%2B1%2FA15ud6NG4HBsut5o0tCc5NFmjjJDRyewGb%2FKPzxT5g1fnqo3qLcaLy7g1%2FA7b6934WYe1l9U5mAWqnsCg08J6C%2F1cYaxhTvJgR1kWJyVm4D3HYCOGHFSBKcrh5tX9z9tyHsekn4lkllD0CbvxDSQpMg%2BfeJMZCVO4kopnffL1phJ2mck0WWbhVtwWXzxVLrrC5pspwlNOySy%2BnKcjqk5LGrydOsLo0cVN6TgcK2nxAzzvHVBw2ug0dC8fU9P1cy3NxwDCXA%2FZOMtQJiw6%2BnmX3Kp6%2FIwI63DJAHfPUGqItl7FWxqmln%2Fh4KUwIftq6i6bFZOf83NeUSlhExDaNI7xRhCU0ydt8qPR%2F9pUkeiHUeIK7ko8Ek8Rm8OS%2FLQpVpGQSMKjhycQGOqUBC%2B1Vzx5YZvgShMV5254uau3LjT0XWDrHjrxN7wYKjbikbsvPk8kuwOWcszMA0Lw9ecdjU4C0ilHiqVL9PfFM3QlKjsPD0TXheU1G8M8SklK5pvi8MfacSVI0umujpQwroSlAs93inx2eJdRBULaSb1AiPDASLh9uWniazeTlkof2B%2F8RYDMdMBVpMtjaTCR7E8bkS2jECQXdVxXvF4KK3i3PW0j0&X-Amz-Signature=4b2704262985386734b87072bffde8283816d1229111fc3113d1331f3b0c6ba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMHTV6H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGmZb15Vw9zfhma0zi%2B5Jkqsz2benuCys584evR5hGgBAiEA6WNMK5Bu119BNxEsKWZh%2FcBn7zTwfDgHdCYlBjIc%2F%2FEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOfnJiC4I7Qjta2SMSrcA2QI1brd%2FQmZzTOk%2FRVEsb00TIDEu0%2F%2BXotLG3cxld0KxCH6jNxUleJUl1im%2FGltcMpxT3ybky60szVCKsjvKEcu3%2BcBXcxeLB14lu9UK1jeeo62wObjbGDsUAxEmJpzre%2BPqiQguAnY9AEYpAJUPQL9V8l5pSJbXI3vmGPiyY790mc7%2Bb2donrnhdFuIFngMxtlMW3Vova1bRbb7uUqHl7mUh8dzJukYscCMtT7rRhffs%2FOelSE8UH%2B1%2FA15ud6NG4HBsut5o0tCc5NFmjjJDRyewGb%2FKPzxT5g1fnqo3qLcaLy7g1%2FA7b6934WYe1l9U5mAWqnsCg08J6C%2F1cYaxhTvJgR1kWJyVm4D3HYCOGHFSBKcrh5tX9z9tyHsekn4lkllD0CbvxDSQpMg%2BfeJMZCVO4kopnffL1phJ2mck0WWbhVtwWXzxVLrrC5pspwlNOySy%2BnKcjqk5LGrydOsLo0cVN6TgcK2nxAzzvHVBw2ug0dC8fU9P1cy3NxwDCXA%2FZOMtQJiw6%2BnmX3Kp6%2FIwI63DJAHfPUGqItl7FWxqmln%2Fh4KUwIftq6i6bFZOf83NeUSlhExDaNI7xRhCU0ydt8qPR%2F9pUkeiHUeIK7ko8Ek8Rm8OS%2FLQpVpGQSMKjhycQGOqUBC%2B1Vzx5YZvgShMV5254uau3LjT0XWDrHjrxN7wYKjbikbsvPk8kuwOWcszMA0Lw9ecdjU4C0ilHiqVL9PfFM3QlKjsPD0TXheU1G8M8SklK5pvi8MfacSVI0umujpQwroSlAs93inx2eJdRBULaSb1AiPDASLh9uWniazeTlkof2B%2F8RYDMdMBVpMtjaTCR7E8bkS2jECQXdVxXvF4KK3i3PW0j0&X-Amz-Signature=e2a24e153da37901ff6d08ca71272d9a17dbe4f138d576529a09cb913c2b13ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMHTV6H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGmZb15Vw9zfhma0zi%2B5Jkqsz2benuCys584evR5hGgBAiEA6WNMK5Bu119BNxEsKWZh%2FcBn7zTwfDgHdCYlBjIc%2F%2FEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOfnJiC4I7Qjta2SMSrcA2QI1brd%2FQmZzTOk%2FRVEsb00TIDEu0%2F%2BXotLG3cxld0KxCH6jNxUleJUl1im%2FGltcMpxT3ybky60szVCKsjvKEcu3%2BcBXcxeLB14lu9UK1jeeo62wObjbGDsUAxEmJpzre%2BPqiQguAnY9AEYpAJUPQL9V8l5pSJbXI3vmGPiyY790mc7%2Bb2donrnhdFuIFngMxtlMW3Vova1bRbb7uUqHl7mUh8dzJukYscCMtT7rRhffs%2FOelSE8UH%2B1%2FA15ud6NG4HBsut5o0tCc5NFmjjJDRyewGb%2FKPzxT5g1fnqo3qLcaLy7g1%2FA7b6934WYe1l9U5mAWqnsCg08J6C%2F1cYaxhTvJgR1kWJyVm4D3HYCOGHFSBKcrh5tX9z9tyHsekn4lkllD0CbvxDSQpMg%2BfeJMZCVO4kopnffL1phJ2mck0WWbhVtwWXzxVLrrC5pspwlNOySy%2BnKcjqk5LGrydOsLo0cVN6TgcK2nxAzzvHVBw2ug0dC8fU9P1cy3NxwDCXA%2FZOMtQJiw6%2BnmX3Kp6%2FIwI63DJAHfPUGqItl7FWxqmln%2Fh4KUwIftq6i6bFZOf83NeUSlhExDaNI7xRhCU0ydt8qPR%2F9pUkeiHUeIK7ko8Ek8Rm8OS%2FLQpVpGQSMKjhycQGOqUBC%2B1Vzx5YZvgShMV5254uau3LjT0XWDrHjrxN7wYKjbikbsvPk8kuwOWcszMA0Lw9ecdjU4C0ilHiqVL9PfFM3QlKjsPD0TXheU1G8M8SklK5pvi8MfacSVI0umujpQwroSlAs93inx2eJdRBULaSb1AiPDASLh9uWniazeTlkof2B%2F8RYDMdMBVpMtjaTCR7E8bkS2jECQXdVxXvF4KK3i3PW0j0&X-Amz-Signature=48473825cc3f16f6d090464e972eb6f82cbe085958bae8116dab77d6c1140d86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMHTV6H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGmZb15Vw9zfhma0zi%2B5Jkqsz2benuCys584evR5hGgBAiEA6WNMK5Bu119BNxEsKWZh%2FcBn7zTwfDgHdCYlBjIc%2F%2FEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOfnJiC4I7Qjta2SMSrcA2QI1brd%2FQmZzTOk%2FRVEsb00TIDEu0%2F%2BXotLG3cxld0KxCH6jNxUleJUl1im%2FGltcMpxT3ybky60szVCKsjvKEcu3%2BcBXcxeLB14lu9UK1jeeo62wObjbGDsUAxEmJpzre%2BPqiQguAnY9AEYpAJUPQL9V8l5pSJbXI3vmGPiyY790mc7%2Bb2donrnhdFuIFngMxtlMW3Vova1bRbb7uUqHl7mUh8dzJukYscCMtT7rRhffs%2FOelSE8UH%2B1%2FA15ud6NG4HBsut5o0tCc5NFmjjJDRyewGb%2FKPzxT5g1fnqo3qLcaLy7g1%2FA7b6934WYe1l9U5mAWqnsCg08J6C%2F1cYaxhTvJgR1kWJyVm4D3HYCOGHFSBKcrh5tX9z9tyHsekn4lkllD0CbvxDSQpMg%2BfeJMZCVO4kopnffL1phJ2mck0WWbhVtwWXzxVLrrC5pspwlNOySy%2BnKcjqk5LGrydOsLo0cVN6TgcK2nxAzzvHVBw2ug0dC8fU9P1cy3NxwDCXA%2FZOMtQJiw6%2BnmX3Kp6%2FIwI63DJAHfPUGqItl7FWxqmln%2Fh4KUwIftq6i6bFZOf83NeUSlhExDaNI7xRhCU0ydt8qPR%2F9pUkeiHUeIK7ko8Ek8Rm8OS%2FLQpVpGQSMKjhycQGOqUBC%2B1Vzx5YZvgShMV5254uau3LjT0XWDrHjrxN7wYKjbikbsvPk8kuwOWcszMA0Lw9ecdjU4C0ilHiqVL9PfFM3QlKjsPD0TXheU1G8M8SklK5pvi8MfacSVI0umujpQwroSlAs93inx2eJdRBULaSb1AiPDASLh9uWniazeTlkof2B%2F8RYDMdMBVpMtjaTCR7E8bkS2jECQXdVxXvF4KK3i3PW0j0&X-Amz-Signature=2687bb14201d47e3b762880fb6b06c4eefc6c0ed14e1049da21be9d46e169026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMHTV6H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGmZb15Vw9zfhma0zi%2B5Jkqsz2benuCys584evR5hGgBAiEA6WNMK5Bu119BNxEsKWZh%2FcBn7zTwfDgHdCYlBjIc%2F%2FEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOfnJiC4I7Qjta2SMSrcA2QI1brd%2FQmZzTOk%2FRVEsb00TIDEu0%2F%2BXotLG3cxld0KxCH6jNxUleJUl1im%2FGltcMpxT3ybky60szVCKsjvKEcu3%2BcBXcxeLB14lu9UK1jeeo62wObjbGDsUAxEmJpzre%2BPqiQguAnY9AEYpAJUPQL9V8l5pSJbXI3vmGPiyY790mc7%2Bb2donrnhdFuIFngMxtlMW3Vova1bRbb7uUqHl7mUh8dzJukYscCMtT7rRhffs%2FOelSE8UH%2B1%2FA15ud6NG4HBsut5o0tCc5NFmjjJDRyewGb%2FKPzxT5g1fnqo3qLcaLy7g1%2FA7b6934WYe1l9U5mAWqnsCg08J6C%2F1cYaxhTvJgR1kWJyVm4D3HYCOGHFSBKcrh5tX9z9tyHsekn4lkllD0CbvxDSQpMg%2BfeJMZCVO4kopnffL1phJ2mck0WWbhVtwWXzxVLrrC5pspwlNOySy%2BnKcjqk5LGrydOsLo0cVN6TgcK2nxAzzvHVBw2ug0dC8fU9P1cy3NxwDCXA%2FZOMtQJiw6%2BnmX3Kp6%2FIwI63DJAHfPUGqItl7FWxqmln%2Fh4KUwIftq6i6bFZOf83NeUSlhExDaNI7xRhCU0ydt8qPR%2F9pUkeiHUeIK7ko8Ek8Rm8OS%2FLQpVpGQSMKjhycQGOqUBC%2B1Vzx5YZvgShMV5254uau3LjT0XWDrHjrxN7wYKjbikbsvPk8kuwOWcszMA0Lw9ecdjU4C0ilHiqVL9PfFM3QlKjsPD0TXheU1G8M8SklK5pvi8MfacSVI0umujpQwroSlAs93inx2eJdRBULaSb1AiPDASLh9uWniazeTlkof2B%2F8RYDMdMBVpMtjaTCR7E8bkS2jECQXdVxXvF4KK3i3PW0j0&X-Amz-Signature=434a79bec74a5adc9d762ee176219d7f404c3e5bc33c41c9d83ba995f1b49e2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMHTV6H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGmZb15Vw9zfhma0zi%2B5Jkqsz2benuCys584evR5hGgBAiEA6WNMK5Bu119BNxEsKWZh%2FcBn7zTwfDgHdCYlBjIc%2F%2FEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOfnJiC4I7Qjta2SMSrcA2QI1brd%2FQmZzTOk%2FRVEsb00TIDEu0%2F%2BXotLG3cxld0KxCH6jNxUleJUl1im%2FGltcMpxT3ybky60szVCKsjvKEcu3%2BcBXcxeLB14lu9UK1jeeo62wObjbGDsUAxEmJpzre%2BPqiQguAnY9AEYpAJUPQL9V8l5pSJbXI3vmGPiyY790mc7%2Bb2donrnhdFuIFngMxtlMW3Vova1bRbb7uUqHl7mUh8dzJukYscCMtT7rRhffs%2FOelSE8UH%2B1%2FA15ud6NG4HBsut5o0tCc5NFmjjJDRyewGb%2FKPzxT5g1fnqo3qLcaLy7g1%2FA7b6934WYe1l9U5mAWqnsCg08J6C%2F1cYaxhTvJgR1kWJyVm4D3HYCOGHFSBKcrh5tX9z9tyHsekn4lkllD0CbvxDSQpMg%2BfeJMZCVO4kopnffL1phJ2mck0WWbhVtwWXzxVLrrC5pspwlNOySy%2BnKcjqk5LGrydOsLo0cVN6TgcK2nxAzzvHVBw2ug0dC8fU9P1cy3NxwDCXA%2FZOMtQJiw6%2BnmX3Kp6%2FIwI63DJAHfPUGqItl7FWxqmln%2Fh4KUwIftq6i6bFZOf83NeUSlhExDaNI7xRhCU0ydt8qPR%2F9pUkeiHUeIK7ko8Ek8Rm8OS%2FLQpVpGQSMKjhycQGOqUBC%2B1Vzx5YZvgShMV5254uau3LjT0XWDrHjrxN7wYKjbikbsvPk8kuwOWcszMA0Lw9ecdjU4C0ilHiqVL9PfFM3QlKjsPD0TXheU1G8M8SklK5pvi8MfacSVI0umujpQwroSlAs93inx2eJdRBULaSb1AiPDASLh9uWniazeTlkof2B%2F8RYDMdMBVpMtjaTCR7E8bkS2jECQXdVxXvF4KK3i3PW0j0&X-Amz-Signature=bad864994a233c097fa0ed865e34bcb74ec939bb32df9417fbd5ee6a4eac26a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMHTV6H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGmZb15Vw9zfhma0zi%2B5Jkqsz2benuCys584evR5hGgBAiEA6WNMK5Bu119BNxEsKWZh%2FcBn7zTwfDgHdCYlBjIc%2F%2FEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOfnJiC4I7Qjta2SMSrcA2QI1brd%2FQmZzTOk%2FRVEsb00TIDEu0%2F%2BXotLG3cxld0KxCH6jNxUleJUl1im%2FGltcMpxT3ybky60szVCKsjvKEcu3%2BcBXcxeLB14lu9UK1jeeo62wObjbGDsUAxEmJpzre%2BPqiQguAnY9AEYpAJUPQL9V8l5pSJbXI3vmGPiyY790mc7%2Bb2donrnhdFuIFngMxtlMW3Vova1bRbb7uUqHl7mUh8dzJukYscCMtT7rRhffs%2FOelSE8UH%2B1%2FA15ud6NG4HBsut5o0tCc5NFmjjJDRyewGb%2FKPzxT5g1fnqo3qLcaLy7g1%2FA7b6934WYe1l9U5mAWqnsCg08J6C%2F1cYaxhTvJgR1kWJyVm4D3HYCOGHFSBKcrh5tX9z9tyHsekn4lkllD0CbvxDSQpMg%2BfeJMZCVO4kopnffL1phJ2mck0WWbhVtwWXzxVLrrC5pspwlNOySy%2BnKcjqk5LGrydOsLo0cVN6TgcK2nxAzzvHVBw2ug0dC8fU9P1cy3NxwDCXA%2FZOMtQJiw6%2BnmX3Kp6%2FIwI63DJAHfPUGqItl7FWxqmln%2Fh4KUwIftq6i6bFZOf83NeUSlhExDaNI7xRhCU0ydt8qPR%2F9pUkeiHUeIK7ko8Ek8Rm8OS%2FLQpVpGQSMKjhycQGOqUBC%2B1Vzx5YZvgShMV5254uau3LjT0XWDrHjrxN7wYKjbikbsvPk8kuwOWcszMA0Lw9ecdjU4C0ilHiqVL9PfFM3QlKjsPD0TXheU1G8M8SklK5pvi8MfacSVI0umujpQwroSlAs93inx2eJdRBULaSb1AiPDASLh9uWniazeTlkof2B%2F8RYDMdMBVpMtjaTCR7E8bkS2jECQXdVxXvF4KK3i3PW0j0&X-Amz-Signature=f1c91dee49b603c5fc540cacb257478214431f56306c975a34ae2a558aac7ade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
