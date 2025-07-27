---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T23:33:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T23:33:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHOGOWL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDBOIad8OfzzFlA1HNwT44vxa%2BomaWoXlF8%2FzvbBtsXbwIhAMD1tZg1UhIJCgmX9hRILYvBGdeacIIQ260tjUoBYlgUKv8DCHIQABoMNjM3NDIzMTgzODA1IgzTiIWxxK44L2MfSHEq3AOn7v4y59hoEbjagKTKlcEBhMvVzLjHIzzcxzvpgA%2FJ%2B3WOS4SAvs7RAPr0o4Pf48nGbkn37dKkG70gQjcf4G56NvnyIXVMsKnDwIuQNBuyjLHrkoL6Oek%2FU3asDMR5aNsvnxlYy%2F%2Bhr5I7tZeGGdPeNeckKSwJFCe3jcKkT5esdsNzgMaSGOP75lxXPeJ5ti7mQTfJsHjNEjvu9ym9brTBJxrMiaQhTNX1OxOnydclJi7hZiniHPg%2BzAhfbfUaD133M6al7NxNqV3BFeGKamzQpNGlZKUyL4MUTJjHkEAYA3S1%2BjDHa%2FECV46KOE1tcNlSz7gInr7CfF13IWL1HOWqlJRWioBmV9Et3XjS5UHAOeP6GmnyTbVPx4hzPU85Qwf%2Fhj%2BDVSb9zenc9ij60lnDTAaC3ITQXygeCOty9IP2YEWPA2Nzt0Q8SkGmXNrPESId7NfUdUCNI5ZyGUQaFJxzsQ6Z8S4nss5cdWU%2FzUrKqubsKLyJzsatVwU6pHZ%2F9sv6LV6L4guUlnULPQIbSB4vFVbx2p5HjAmHOI6xJ32I8rx7C5Ku5Ak%2FCcq3CEQSo%2FbfwB3lTcz%2Bjmt%2F7LLZTor5WPi4ioQOIGnn%2BI8%2FJcQI7jDmOUmmOqQ2lbqhCzDs3pfEBjqkAU7kSJn%2F7psHJ8FD5i0TAK%2ByxtGAl37%2FMdg5N0X4DX8uy%2BxFJn%2B02g%2BsAWjRO6H4Kjrvya9ObfJEcuHccb73t7A0Z2K%2BMV%2BlqMwOctzAu%2Bz788gX9HCOwXNpM6XsiLGw0tUfr%2BDtA1SwrEs8KQzCNoBIR8%2B9tPS7za2bLAmxTx6PCEY%2B1RKJhnQAwNX1JNKljj3hgSy5rjehXeNV4rTPdWc%2FjUWF&X-Amz-Signature=73a7a19b6120ced46c56ac33f13b8edd12b2b36ffc024e3fd0597bc5b26a3782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHOGOWL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDBOIad8OfzzFlA1HNwT44vxa%2BomaWoXlF8%2FzvbBtsXbwIhAMD1tZg1UhIJCgmX9hRILYvBGdeacIIQ260tjUoBYlgUKv8DCHIQABoMNjM3NDIzMTgzODA1IgzTiIWxxK44L2MfSHEq3AOn7v4y59hoEbjagKTKlcEBhMvVzLjHIzzcxzvpgA%2FJ%2B3WOS4SAvs7RAPr0o4Pf48nGbkn37dKkG70gQjcf4G56NvnyIXVMsKnDwIuQNBuyjLHrkoL6Oek%2FU3asDMR5aNsvnxlYy%2F%2Bhr5I7tZeGGdPeNeckKSwJFCe3jcKkT5esdsNzgMaSGOP75lxXPeJ5ti7mQTfJsHjNEjvu9ym9brTBJxrMiaQhTNX1OxOnydclJi7hZiniHPg%2BzAhfbfUaD133M6al7NxNqV3BFeGKamzQpNGlZKUyL4MUTJjHkEAYA3S1%2BjDHa%2FECV46KOE1tcNlSz7gInr7CfF13IWL1HOWqlJRWioBmV9Et3XjS5UHAOeP6GmnyTbVPx4hzPU85Qwf%2Fhj%2BDVSb9zenc9ij60lnDTAaC3ITQXygeCOty9IP2YEWPA2Nzt0Q8SkGmXNrPESId7NfUdUCNI5ZyGUQaFJxzsQ6Z8S4nss5cdWU%2FzUrKqubsKLyJzsatVwU6pHZ%2F9sv6LV6L4guUlnULPQIbSB4vFVbx2p5HjAmHOI6xJ32I8rx7C5Ku5Ak%2FCcq3CEQSo%2FbfwB3lTcz%2Bjmt%2F7LLZTor5WPi4ioQOIGnn%2BI8%2FJcQI7jDmOUmmOqQ2lbqhCzDs3pfEBjqkAU7kSJn%2F7psHJ8FD5i0TAK%2ByxtGAl37%2FMdg5N0X4DX8uy%2BxFJn%2B02g%2BsAWjRO6H4Kjrvya9ObfJEcuHccb73t7A0Z2K%2BMV%2BlqMwOctzAu%2Bz788gX9HCOwXNpM6XsiLGw0tUfr%2BDtA1SwrEs8KQzCNoBIR8%2B9tPS7za2bLAmxTx6PCEY%2B1RKJhnQAwNX1JNKljj3hgSy5rjehXeNV4rTPdWc%2FjUWF&X-Amz-Signature=5fb280de6486607391e89414f84e1c3a465493066d381cb977b235012c63bd17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHOGOWL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDBOIad8OfzzFlA1HNwT44vxa%2BomaWoXlF8%2FzvbBtsXbwIhAMD1tZg1UhIJCgmX9hRILYvBGdeacIIQ260tjUoBYlgUKv8DCHIQABoMNjM3NDIzMTgzODA1IgzTiIWxxK44L2MfSHEq3AOn7v4y59hoEbjagKTKlcEBhMvVzLjHIzzcxzvpgA%2FJ%2B3WOS4SAvs7RAPr0o4Pf48nGbkn37dKkG70gQjcf4G56NvnyIXVMsKnDwIuQNBuyjLHrkoL6Oek%2FU3asDMR5aNsvnxlYy%2F%2Bhr5I7tZeGGdPeNeckKSwJFCe3jcKkT5esdsNzgMaSGOP75lxXPeJ5ti7mQTfJsHjNEjvu9ym9brTBJxrMiaQhTNX1OxOnydclJi7hZiniHPg%2BzAhfbfUaD133M6al7NxNqV3BFeGKamzQpNGlZKUyL4MUTJjHkEAYA3S1%2BjDHa%2FECV46KOE1tcNlSz7gInr7CfF13IWL1HOWqlJRWioBmV9Et3XjS5UHAOeP6GmnyTbVPx4hzPU85Qwf%2Fhj%2BDVSb9zenc9ij60lnDTAaC3ITQXygeCOty9IP2YEWPA2Nzt0Q8SkGmXNrPESId7NfUdUCNI5ZyGUQaFJxzsQ6Z8S4nss5cdWU%2FzUrKqubsKLyJzsatVwU6pHZ%2F9sv6LV6L4guUlnULPQIbSB4vFVbx2p5HjAmHOI6xJ32I8rx7C5Ku5Ak%2FCcq3CEQSo%2FbfwB3lTcz%2Bjmt%2F7LLZTor5WPi4ioQOIGnn%2BI8%2FJcQI7jDmOUmmOqQ2lbqhCzDs3pfEBjqkAU7kSJn%2F7psHJ8FD5i0TAK%2ByxtGAl37%2FMdg5N0X4DX8uy%2BxFJn%2B02g%2BsAWjRO6H4Kjrvya9ObfJEcuHccb73t7A0Z2K%2BMV%2BlqMwOctzAu%2Bz788gX9HCOwXNpM6XsiLGw0tUfr%2BDtA1SwrEs8KQzCNoBIR8%2B9tPS7za2bLAmxTx6PCEY%2B1RKJhnQAwNX1JNKljj3hgSy5rjehXeNV4rTPdWc%2FjUWF&X-Amz-Signature=2fd02d632b1fcf3fcc7f841162a8b8724a6ba8f1b73c544f694d4040bd4de4ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHOGOWL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDBOIad8OfzzFlA1HNwT44vxa%2BomaWoXlF8%2FzvbBtsXbwIhAMD1tZg1UhIJCgmX9hRILYvBGdeacIIQ260tjUoBYlgUKv8DCHIQABoMNjM3NDIzMTgzODA1IgzTiIWxxK44L2MfSHEq3AOn7v4y59hoEbjagKTKlcEBhMvVzLjHIzzcxzvpgA%2FJ%2B3WOS4SAvs7RAPr0o4Pf48nGbkn37dKkG70gQjcf4G56NvnyIXVMsKnDwIuQNBuyjLHrkoL6Oek%2FU3asDMR5aNsvnxlYy%2F%2Bhr5I7tZeGGdPeNeckKSwJFCe3jcKkT5esdsNzgMaSGOP75lxXPeJ5ti7mQTfJsHjNEjvu9ym9brTBJxrMiaQhTNX1OxOnydclJi7hZiniHPg%2BzAhfbfUaD133M6al7NxNqV3BFeGKamzQpNGlZKUyL4MUTJjHkEAYA3S1%2BjDHa%2FECV46KOE1tcNlSz7gInr7CfF13IWL1HOWqlJRWioBmV9Et3XjS5UHAOeP6GmnyTbVPx4hzPU85Qwf%2Fhj%2BDVSb9zenc9ij60lnDTAaC3ITQXygeCOty9IP2YEWPA2Nzt0Q8SkGmXNrPESId7NfUdUCNI5ZyGUQaFJxzsQ6Z8S4nss5cdWU%2FzUrKqubsKLyJzsatVwU6pHZ%2F9sv6LV6L4guUlnULPQIbSB4vFVbx2p5HjAmHOI6xJ32I8rx7C5Ku5Ak%2FCcq3CEQSo%2FbfwB3lTcz%2Bjmt%2F7LLZTor5WPi4ioQOIGnn%2BI8%2FJcQI7jDmOUmmOqQ2lbqhCzDs3pfEBjqkAU7kSJn%2F7psHJ8FD5i0TAK%2ByxtGAl37%2FMdg5N0X4DX8uy%2BxFJn%2B02g%2BsAWjRO6H4Kjrvya9ObfJEcuHccb73t7A0Z2K%2BMV%2BlqMwOctzAu%2Bz788gX9HCOwXNpM6XsiLGw0tUfr%2BDtA1SwrEs8KQzCNoBIR8%2B9tPS7za2bLAmxTx6PCEY%2B1RKJhnQAwNX1JNKljj3hgSy5rjehXeNV4rTPdWc%2FjUWF&X-Amz-Signature=e5146fc36f54187ef30376fed54a67b36e0d33d93e5683569b6fd68eb0c610e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHOGOWL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDBOIad8OfzzFlA1HNwT44vxa%2BomaWoXlF8%2FzvbBtsXbwIhAMD1tZg1UhIJCgmX9hRILYvBGdeacIIQ260tjUoBYlgUKv8DCHIQABoMNjM3NDIzMTgzODA1IgzTiIWxxK44L2MfSHEq3AOn7v4y59hoEbjagKTKlcEBhMvVzLjHIzzcxzvpgA%2FJ%2B3WOS4SAvs7RAPr0o4Pf48nGbkn37dKkG70gQjcf4G56NvnyIXVMsKnDwIuQNBuyjLHrkoL6Oek%2FU3asDMR5aNsvnxlYy%2F%2Bhr5I7tZeGGdPeNeckKSwJFCe3jcKkT5esdsNzgMaSGOP75lxXPeJ5ti7mQTfJsHjNEjvu9ym9brTBJxrMiaQhTNX1OxOnydclJi7hZiniHPg%2BzAhfbfUaD133M6al7NxNqV3BFeGKamzQpNGlZKUyL4MUTJjHkEAYA3S1%2BjDHa%2FECV46KOE1tcNlSz7gInr7CfF13IWL1HOWqlJRWioBmV9Et3XjS5UHAOeP6GmnyTbVPx4hzPU85Qwf%2Fhj%2BDVSb9zenc9ij60lnDTAaC3ITQXygeCOty9IP2YEWPA2Nzt0Q8SkGmXNrPESId7NfUdUCNI5ZyGUQaFJxzsQ6Z8S4nss5cdWU%2FzUrKqubsKLyJzsatVwU6pHZ%2F9sv6LV6L4guUlnULPQIbSB4vFVbx2p5HjAmHOI6xJ32I8rx7C5Ku5Ak%2FCcq3CEQSo%2FbfwB3lTcz%2Bjmt%2F7LLZTor5WPi4ioQOIGnn%2BI8%2FJcQI7jDmOUmmOqQ2lbqhCzDs3pfEBjqkAU7kSJn%2F7psHJ8FD5i0TAK%2ByxtGAl37%2FMdg5N0X4DX8uy%2BxFJn%2B02g%2BsAWjRO6H4Kjrvya9ObfJEcuHccb73t7A0Z2K%2BMV%2BlqMwOctzAu%2Bz788gX9HCOwXNpM6XsiLGw0tUfr%2BDtA1SwrEs8KQzCNoBIR8%2B9tPS7za2bLAmxTx6PCEY%2B1RKJhnQAwNX1JNKljj3hgSy5rjehXeNV4rTPdWc%2FjUWF&X-Amz-Signature=c3705525e25dda46a27881f75ae0f45cb0dfd956590fcbbf88383fd4a60f2141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHOGOWL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDBOIad8OfzzFlA1HNwT44vxa%2BomaWoXlF8%2FzvbBtsXbwIhAMD1tZg1UhIJCgmX9hRILYvBGdeacIIQ260tjUoBYlgUKv8DCHIQABoMNjM3NDIzMTgzODA1IgzTiIWxxK44L2MfSHEq3AOn7v4y59hoEbjagKTKlcEBhMvVzLjHIzzcxzvpgA%2FJ%2B3WOS4SAvs7RAPr0o4Pf48nGbkn37dKkG70gQjcf4G56NvnyIXVMsKnDwIuQNBuyjLHrkoL6Oek%2FU3asDMR5aNsvnxlYy%2F%2Bhr5I7tZeGGdPeNeckKSwJFCe3jcKkT5esdsNzgMaSGOP75lxXPeJ5ti7mQTfJsHjNEjvu9ym9brTBJxrMiaQhTNX1OxOnydclJi7hZiniHPg%2BzAhfbfUaD133M6al7NxNqV3BFeGKamzQpNGlZKUyL4MUTJjHkEAYA3S1%2BjDHa%2FECV46KOE1tcNlSz7gInr7CfF13IWL1HOWqlJRWioBmV9Et3XjS5UHAOeP6GmnyTbVPx4hzPU85Qwf%2Fhj%2BDVSb9zenc9ij60lnDTAaC3ITQXygeCOty9IP2YEWPA2Nzt0Q8SkGmXNrPESId7NfUdUCNI5ZyGUQaFJxzsQ6Z8S4nss5cdWU%2FzUrKqubsKLyJzsatVwU6pHZ%2F9sv6LV6L4guUlnULPQIbSB4vFVbx2p5HjAmHOI6xJ32I8rx7C5Ku5Ak%2FCcq3CEQSo%2FbfwB3lTcz%2Bjmt%2F7LLZTor5WPi4ioQOIGnn%2BI8%2FJcQI7jDmOUmmOqQ2lbqhCzDs3pfEBjqkAU7kSJn%2F7psHJ8FD5i0TAK%2ByxtGAl37%2FMdg5N0X4DX8uy%2BxFJn%2B02g%2BsAWjRO6H4Kjrvya9ObfJEcuHccb73t7A0Z2K%2BMV%2BlqMwOctzAu%2Bz788gX9HCOwXNpM6XsiLGw0tUfr%2BDtA1SwrEs8KQzCNoBIR8%2B9tPS7za2bLAmxTx6PCEY%2B1RKJhnQAwNX1JNKljj3hgSy5rjehXeNV4rTPdWc%2FjUWF&X-Amz-Signature=3a5678a416b87020b441e6fb38c86ba29d0681b1740db3ff089d24555a429945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHOGOWL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDBOIad8OfzzFlA1HNwT44vxa%2BomaWoXlF8%2FzvbBtsXbwIhAMD1tZg1UhIJCgmX9hRILYvBGdeacIIQ260tjUoBYlgUKv8DCHIQABoMNjM3NDIzMTgzODA1IgzTiIWxxK44L2MfSHEq3AOn7v4y59hoEbjagKTKlcEBhMvVzLjHIzzcxzvpgA%2FJ%2B3WOS4SAvs7RAPr0o4Pf48nGbkn37dKkG70gQjcf4G56NvnyIXVMsKnDwIuQNBuyjLHrkoL6Oek%2FU3asDMR5aNsvnxlYy%2F%2Bhr5I7tZeGGdPeNeckKSwJFCe3jcKkT5esdsNzgMaSGOP75lxXPeJ5ti7mQTfJsHjNEjvu9ym9brTBJxrMiaQhTNX1OxOnydclJi7hZiniHPg%2BzAhfbfUaD133M6al7NxNqV3BFeGKamzQpNGlZKUyL4MUTJjHkEAYA3S1%2BjDHa%2FECV46KOE1tcNlSz7gInr7CfF13IWL1HOWqlJRWioBmV9Et3XjS5UHAOeP6GmnyTbVPx4hzPU85Qwf%2Fhj%2BDVSb9zenc9ij60lnDTAaC3ITQXygeCOty9IP2YEWPA2Nzt0Q8SkGmXNrPESId7NfUdUCNI5ZyGUQaFJxzsQ6Z8S4nss5cdWU%2FzUrKqubsKLyJzsatVwU6pHZ%2F9sv6LV6L4guUlnULPQIbSB4vFVbx2p5HjAmHOI6xJ32I8rx7C5Ku5Ak%2FCcq3CEQSo%2FbfwB3lTcz%2Bjmt%2F7LLZTor5WPi4ioQOIGnn%2BI8%2FJcQI7jDmOUmmOqQ2lbqhCzDs3pfEBjqkAU7kSJn%2F7psHJ8FD5i0TAK%2ByxtGAl37%2FMdg5N0X4DX8uy%2BxFJn%2B02g%2BsAWjRO6H4Kjrvya9ObfJEcuHccb73t7A0Z2K%2BMV%2BlqMwOctzAu%2Bz788gX9HCOwXNpM6XsiLGw0tUfr%2BDtA1SwrEs8KQzCNoBIR8%2B9tPS7za2bLAmxTx6PCEY%2B1RKJhnQAwNX1JNKljj3hgSy5rjehXeNV4rTPdWc%2FjUWF&X-Amz-Signature=052d0e9c3f631a6bc82ee18bb7711f8b8f80875566abfff54af4f3f861b8b4a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHOGOWL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDBOIad8OfzzFlA1HNwT44vxa%2BomaWoXlF8%2FzvbBtsXbwIhAMD1tZg1UhIJCgmX9hRILYvBGdeacIIQ260tjUoBYlgUKv8DCHIQABoMNjM3NDIzMTgzODA1IgzTiIWxxK44L2MfSHEq3AOn7v4y59hoEbjagKTKlcEBhMvVzLjHIzzcxzvpgA%2FJ%2B3WOS4SAvs7RAPr0o4Pf48nGbkn37dKkG70gQjcf4G56NvnyIXVMsKnDwIuQNBuyjLHrkoL6Oek%2FU3asDMR5aNsvnxlYy%2F%2Bhr5I7tZeGGdPeNeckKSwJFCe3jcKkT5esdsNzgMaSGOP75lxXPeJ5ti7mQTfJsHjNEjvu9ym9brTBJxrMiaQhTNX1OxOnydclJi7hZiniHPg%2BzAhfbfUaD133M6al7NxNqV3BFeGKamzQpNGlZKUyL4MUTJjHkEAYA3S1%2BjDHa%2FECV46KOE1tcNlSz7gInr7CfF13IWL1HOWqlJRWioBmV9Et3XjS5UHAOeP6GmnyTbVPx4hzPU85Qwf%2Fhj%2BDVSb9zenc9ij60lnDTAaC3ITQXygeCOty9IP2YEWPA2Nzt0Q8SkGmXNrPESId7NfUdUCNI5ZyGUQaFJxzsQ6Z8S4nss5cdWU%2FzUrKqubsKLyJzsatVwU6pHZ%2F9sv6LV6L4guUlnULPQIbSB4vFVbx2p5HjAmHOI6xJ32I8rx7C5Ku5Ak%2FCcq3CEQSo%2FbfwB3lTcz%2Bjmt%2F7LLZTor5WPi4ioQOIGnn%2BI8%2FJcQI7jDmOUmmOqQ2lbqhCzDs3pfEBjqkAU7kSJn%2F7psHJ8FD5i0TAK%2ByxtGAl37%2FMdg5N0X4DX8uy%2BxFJn%2B02g%2BsAWjRO6H4Kjrvya9ObfJEcuHccb73t7A0Z2K%2BMV%2BlqMwOctzAu%2Bz788gX9HCOwXNpM6XsiLGw0tUfr%2BDtA1SwrEs8KQzCNoBIR8%2B9tPS7za2bLAmxTx6PCEY%2B1RKJhnQAwNX1JNKljj3hgSy5rjehXeNV4rTPdWc%2FjUWF&X-Amz-Signature=9565b7fce521f16acd9fb68a4b1e99f450048120a1a08672e1864b1bae76c4d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHOGOWL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDBOIad8OfzzFlA1HNwT44vxa%2BomaWoXlF8%2FzvbBtsXbwIhAMD1tZg1UhIJCgmX9hRILYvBGdeacIIQ260tjUoBYlgUKv8DCHIQABoMNjM3NDIzMTgzODA1IgzTiIWxxK44L2MfSHEq3AOn7v4y59hoEbjagKTKlcEBhMvVzLjHIzzcxzvpgA%2FJ%2B3WOS4SAvs7RAPr0o4Pf48nGbkn37dKkG70gQjcf4G56NvnyIXVMsKnDwIuQNBuyjLHrkoL6Oek%2FU3asDMR5aNsvnxlYy%2F%2Bhr5I7tZeGGdPeNeckKSwJFCe3jcKkT5esdsNzgMaSGOP75lxXPeJ5ti7mQTfJsHjNEjvu9ym9brTBJxrMiaQhTNX1OxOnydclJi7hZiniHPg%2BzAhfbfUaD133M6al7NxNqV3BFeGKamzQpNGlZKUyL4MUTJjHkEAYA3S1%2BjDHa%2FECV46KOE1tcNlSz7gInr7CfF13IWL1HOWqlJRWioBmV9Et3XjS5UHAOeP6GmnyTbVPx4hzPU85Qwf%2Fhj%2BDVSb9zenc9ij60lnDTAaC3ITQXygeCOty9IP2YEWPA2Nzt0Q8SkGmXNrPESId7NfUdUCNI5ZyGUQaFJxzsQ6Z8S4nss5cdWU%2FzUrKqubsKLyJzsatVwU6pHZ%2F9sv6LV6L4guUlnULPQIbSB4vFVbx2p5HjAmHOI6xJ32I8rx7C5Ku5Ak%2FCcq3CEQSo%2FbfwB3lTcz%2Bjmt%2F7LLZTor5WPi4ioQOIGnn%2BI8%2FJcQI7jDmOUmmOqQ2lbqhCzDs3pfEBjqkAU7kSJn%2F7psHJ8FD5i0TAK%2ByxtGAl37%2FMdg5N0X4DX8uy%2BxFJn%2B02g%2BsAWjRO6H4Kjrvya9ObfJEcuHccb73t7A0Z2K%2BMV%2BlqMwOctzAu%2Bz788gX9HCOwXNpM6XsiLGw0tUfr%2BDtA1SwrEs8KQzCNoBIR8%2B9tPS7za2bLAmxTx6PCEY%2B1RKJhnQAwNX1JNKljj3hgSy5rjehXeNV4rTPdWc%2FjUWF&X-Amz-Signature=536f561a453b1a3785dafd05f19e684433b37f6ebf10c000e883063e745c8417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHOGOWL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDBOIad8OfzzFlA1HNwT44vxa%2BomaWoXlF8%2FzvbBtsXbwIhAMD1tZg1UhIJCgmX9hRILYvBGdeacIIQ260tjUoBYlgUKv8DCHIQABoMNjM3NDIzMTgzODA1IgzTiIWxxK44L2MfSHEq3AOn7v4y59hoEbjagKTKlcEBhMvVzLjHIzzcxzvpgA%2FJ%2B3WOS4SAvs7RAPr0o4Pf48nGbkn37dKkG70gQjcf4G56NvnyIXVMsKnDwIuQNBuyjLHrkoL6Oek%2FU3asDMR5aNsvnxlYy%2F%2Bhr5I7tZeGGdPeNeckKSwJFCe3jcKkT5esdsNzgMaSGOP75lxXPeJ5ti7mQTfJsHjNEjvu9ym9brTBJxrMiaQhTNX1OxOnydclJi7hZiniHPg%2BzAhfbfUaD133M6al7NxNqV3BFeGKamzQpNGlZKUyL4MUTJjHkEAYA3S1%2BjDHa%2FECV46KOE1tcNlSz7gInr7CfF13IWL1HOWqlJRWioBmV9Et3XjS5UHAOeP6GmnyTbVPx4hzPU85Qwf%2Fhj%2BDVSb9zenc9ij60lnDTAaC3ITQXygeCOty9IP2YEWPA2Nzt0Q8SkGmXNrPESId7NfUdUCNI5ZyGUQaFJxzsQ6Z8S4nss5cdWU%2FzUrKqubsKLyJzsatVwU6pHZ%2F9sv6LV6L4guUlnULPQIbSB4vFVbx2p5HjAmHOI6xJ32I8rx7C5Ku5Ak%2FCcq3CEQSo%2FbfwB3lTcz%2Bjmt%2F7LLZTor5WPi4ioQOIGnn%2BI8%2FJcQI7jDmOUmmOqQ2lbqhCzDs3pfEBjqkAU7kSJn%2F7psHJ8FD5i0TAK%2ByxtGAl37%2FMdg5N0X4DX8uy%2BxFJn%2B02g%2BsAWjRO6H4Kjrvya9ObfJEcuHccb73t7A0Z2K%2BMV%2BlqMwOctzAu%2Bz788gX9HCOwXNpM6XsiLGw0tUfr%2BDtA1SwrEs8KQzCNoBIR8%2B9tPS7za2bLAmxTx6PCEY%2B1RKJhnQAwNX1JNKljj3hgSy5rjehXeNV4rTPdWc%2FjUWF&X-Amz-Signature=a07315cf4cdc972ab0a3051a8a9afe6aa169b6de44c92ceb3a9e40a5cb12205f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

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
      
      <collision>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
      </collision>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHOGOWL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDBOIad8OfzzFlA1HNwT44vxa%2BomaWoXlF8%2FzvbBtsXbwIhAMD1tZg1UhIJCgmX9hRILYvBGdeacIIQ260tjUoBYlgUKv8DCHIQABoMNjM3NDIzMTgzODA1IgzTiIWxxK44L2MfSHEq3AOn7v4y59hoEbjagKTKlcEBhMvVzLjHIzzcxzvpgA%2FJ%2B3WOS4SAvs7RAPr0o4Pf48nGbkn37dKkG70gQjcf4G56NvnyIXVMsKnDwIuQNBuyjLHrkoL6Oek%2FU3asDMR5aNsvnxlYy%2F%2Bhr5I7tZeGGdPeNeckKSwJFCe3jcKkT5esdsNzgMaSGOP75lxXPeJ5ti7mQTfJsHjNEjvu9ym9brTBJxrMiaQhTNX1OxOnydclJi7hZiniHPg%2BzAhfbfUaD133M6al7NxNqV3BFeGKamzQpNGlZKUyL4MUTJjHkEAYA3S1%2BjDHa%2FECV46KOE1tcNlSz7gInr7CfF13IWL1HOWqlJRWioBmV9Et3XjS5UHAOeP6GmnyTbVPx4hzPU85Qwf%2Fhj%2BDVSb9zenc9ij60lnDTAaC3ITQXygeCOty9IP2YEWPA2Nzt0Q8SkGmXNrPESId7NfUdUCNI5ZyGUQaFJxzsQ6Z8S4nss5cdWU%2FzUrKqubsKLyJzsatVwU6pHZ%2F9sv6LV6L4guUlnULPQIbSB4vFVbx2p5HjAmHOI6xJ32I8rx7C5Ku5Ak%2FCcq3CEQSo%2FbfwB3lTcz%2Bjmt%2F7LLZTor5WPi4ioQOIGnn%2BI8%2FJcQI7jDmOUmmOqQ2lbqhCzDs3pfEBjqkAU7kSJn%2F7psHJ8FD5i0TAK%2ByxtGAl37%2FMdg5N0X4DX8uy%2BxFJn%2B02g%2BsAWjRO6H4Kjrvya9ObfJEcuHccb73t7A0Z2K%2BMV%2BlqMwOctzAu%2Bz788gX9HCOwXNpM6XsiLGw0tUfr%2BDtA1SwrEs8KQzCNoBIR8%2B9tPS7za2bLAmxTx6PCEY%2B1RKJhnQAwNX1JNKljj3hgSy5rjehXeNV4rTPdWc%2FjUWF&X-Amz-Signature=06857063d1c2ce6a3459be4e0c8199d7bc6d36b5ed0a63a7b9746524905b75cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHOGOWL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDBOIad8OfzzFlA1HNwT44vxa%2BomaWoXlF8%2FzvbBtsXbwIhAMD1tZg1UhIJCgmX9hRILYvBGdeacIIQ260tjUoBYlgUKv8DCHIQABoMNjM3NDIzMTgzODA1IgzTiIWxxK44L2MfSHEq3AOn7v4y59hoEbjagKTKlcEBhMvVzLjHIzzcxzvpgA%2FJ%2B3WOS4SAvs7RAPr0o4Pf48nGbkn37dKkG70gQjcf4G56NvnyIXVMsKnDwIuQNBuyjLHrkoL6Oek%2FU3asDMR5aNsvnxlYy%2F%2Bhr5I7tZeGGdPeNeckKSwJFCe3jcKkT5esdsNzgMaSGOP75lxXPeJ5ti7mQTfJsHjNEjvu9ym9brTBJxrMiaQhTNX1OxOnydclJi7hZiniHPg%2BzAhfbfUaD133M6al7NxNqV3BFeGKamzQpNGlZKUyL4MUTJjHkEAYA3S1%2BjDHa%2FECV46KOE1tcNlSz7gInr7CfF13IWL1HOWqlJRWioBmV9Et3XjS5UHAOeP6GmnyTbVPx4hzPU85Qwf%2Fhj%2BDVSb9zenc9ij60lnDTAaC3ITQXygeCOty9IP2YEWPA2Nzt0Q8SkGmXNrPESId7NfUdUCNI5ZyGUQaFJxzsQ6Z8S4nss5cdWU%2FzUrKqubsKLyJzsatVwU6pHZ%2F9sv6LV6L4guUlnULPQIbSB4vFVbx2p5HjAmHOI6xJ32I8rx7C5Ku5Ak%2FCcq3CEQSo%2FbfwB3lTcz%2Bjmt%2F7LLZTor5WPi4ioQOIGnn%2BI8%2FJcQI7jDmOUmmOqQ2lbqhCzDs3pfEBjqkAU7kSJn%2F7psHJ8FD5i0TAK%2ByxtGAl37%2FMdg5N0X4DX8uy%2BxFJn%2B02g%2BsAWjRO6H4Kjrvya9ObfJEcuHccb73t7A0Z2K%2BMV%2BlqMwOctzAu%2Bz788gX9HCOwXNpM6XsiLGw0tUfr%2BDtA1SwrEs8KQzCNoBIR8%2B9tPS7za2bLAmxTx6PCEY%2B1RKJhnQAwNX1JNKljj3hgSy5rjehXeNV4rTPdWc%2FjUWF&X-Amz-Signature=8ab5dad99bb7a63f847bc314c69e7aa6c398dc8a074827ede8458c686753fa6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHOGOWL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDBOIad8OfzzFlA1HNwT44vxa%2BomaWoXlF8%2FzvbBtsXbwIhAMD1tZg1UhIJCgmX9hRILYvBGdeacIIQ260tjUoBYlgUKv8DCHIQABoMNjM3NDIzMTgzODA1IgzTiIWxxK44L2MfSHEq3AOn7v4y59hoEbjagKTKlcEBhMvVzLjHIzzcxzvpgA%2FJ%2B3WOS4SAvs7RAPr0o4Pf48nGbkn37dKkG70gQjcf4G56NvnyIXVMsKnDwIuQNBuyjLHrkoL6Oek%2FU3asDMR5aNsvnxlYy%2F%2Bhr5I7tZeGGdPeNeckKSwJFCe3jcKkT5esdsNzgMaSGOP75lxXPeJ5ti7mQTfJsHjNEjvu9ym9brTBJxrMiaQhTNX1OxOnydclJi7hZiniHPg%2BzAhfbfUaD133M6al7NxNqV3BFeGKamzQpNGlZKUyL4MUTJjHkEAYA3S1%2BjDHa%2FECV46KOE1tcNlSz7gInr7CfF13IWL1HOWqlJRWioBmV9Et3XjS5UHAOeP6GmnyTbVPx4hzPU85Qwf%2Fhj%2BDVSb9zenc9ij60lnDTAaC3ITQXygeCOty9IP2YEWPA2Nzt0Q8SkGmXNrPESId7NfUdUCNI5ZyGUQaFJxzsQ6Z8S4nss5cdWU%2FzUrKqubsKLyJzsatVwU6pHZ%2F9sv6LV6L4guUlnULPQIbSB4vFVbx2p5HjAmHOI6xJ32I8rx7C5Ku5Ak%2FCcq3CEQSo%2FbfwB3lTcz%2Bjmt%2F7LLZTor5WPi4ioQOIGnn%2BI8%2FJcQI7jDmOUmmOqQ2lbqhCzDs3pfEBjqkAU7kSJn%2F7psHJ8FD5i0TAK%2ByxtGAl37%2FMdg5N0X4DX8uy%2BxFJn%2B02g%2BsAWjRO6H4Kjrvya9ObfJEcuHccb73t7A0Z2K%2BMV%2BlqMwOctzAu%2Bz788gX9HCOwXNpM6XsiLGw0tUfr%2BDtA1SwrEs8KQzCNoBIR8%2B9tPS7za2bLAmxTx6PCEY%2B1RKJhnQAwNX1JNKljj3hgSy5rjehXeNV4rTPdWc%2FjUWF&X-Amz-Signature=cb2d0a5135ead8261b83ddc1d389bb013563b81e554fcb4f1f4563fd0124f8c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHOGOWL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDBOIad8OfzzFlA1HNwT44vxa%2BomaWoXlF8%2FzvbBtsXbwIhAMD1tZg1UhIJCgmX9hRILYvBGdeacIIQ260tjUoBYlgUKv8DCHIQABoMNjM3NDIzMTgzODA1IgzTiIWxxK44L2MfSHEq3AOn7v4y59hoEbjagKTKlcEBhMvVzLjHIzzcxzvpgA%2FJ%2B3WOS4SAvs7RAPr0o4Pf48nGbkn37dKkG70gQjcf4G56NvnyIXVMsKnDwIuQNBuyjLHrkoL6Oek%2FU3asDMR5aNsvnxlYy%2F%2Bhr5I7tZeGGdPeNeckKSwJFCe3jcKkT5esdsNzgMaSGOP75lxXPeJ5ti7mQTfJsHjNEjvu9ym9brTBJxrMiaQhTNX1OxOnydclJi7hZiniHPg%2BzAhfbfUaD133M6al7NxNqV3BFeGKamzQpNGlZKUyL4MUTJjHkEAYA3S1%2BjDHa%2FECV46KOE1tcNlSz7gInr7CfF13IWL1HOWqlJRWioBmV9Et3XjS5UHAOeP6GmnyTbVPx4hzPU85Qwf%2Fhj%2BDVSb9zenc9ij60lnDTAaC3ITQXygeCOty9IP2YEWPA2Nzt0Q8SkGmXNrPESId7NfUdUCNI5ZyGUQaFJxzsQ6Z8S4nss5cdWU%2FzUrKqubsKLyJzsatVwU6pHZ%2F9sv6LV6L4guUlnULPQIbSB4vFVbx2p5HjAmHOI6xJ32I8rx7C5Ku5Ak%2FCcq3CEQSo%2FbfwB3lTcz%2Bjmt%2F7LLZTor5WPi4ioQOIGnn%2BI8%2FJcQI7jDmOUmmOqQ2lbqhCzDs3pfEBjqkAU7kSJn%2F7psHJ8FD5i0TAK%2ByxtGAl37%2FMdg5N0X4DX8uy%2BxFJn%2B02g%2BsAWjRO6H4Kjrvya9ObfJEcuHccb73t7A0Z2K%2BMV%2BlqMwOctzAu%2Bz788gX9HCOwXNpM6XsiLGw0tUfr%2BDtA1SwrEs8KQzCNoBIR8%2B9tPS7za2bLAmxTx6PCEY%2B1RKJhnQAwNX1JNKljj3hgSy5rjehXeNV4rTPdWc%2FjUWF&X-Amz-Signature=680b6ca1903fc99ab1156a9e37f15b17fd9e518cc05db5dd82b65ca58b90ba63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S2EB26C%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICDR0UH75IdsGVIp1yGnQ5w71VTeVzpWaQH2s1SyxHMYAiEAkrc94kvncJ7oBDF%2BAYmFycyfe1Kf5VvxobhOg6NsQyQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKnvdo0tjJNI%2F%2BEgRircA3OgHURldWSJTCpfyAsb3oR986%2FfbbHSbaLhh4tI0F%2BAE4t0sjJqlqXYfxcybkml9iRvO5YiwoexiU0vFd%2FhveLsJHMhbPEgQOYn4UKC%2BpGfykAySUHBHtZzmhnjeg2gv5YRso2R%2FYu09pDZ7rde5lHRzjfSNTeIiy7C5tStv4av67TaeCTjQEbwqqNxFhLeU7dH%2BpBSkrQO5cu6H%2BhX%2BV9sBeMynFuz3hwkpy4qHjGlEmnbtOi7Ji%2BASowiUQgkHINbpSguxztbY0WaNXmzCyQA%2Bx7se2ilBvMc6pgTlzevOk%2BvALwtcSBjPhY7pS%2BWPHegXmKPaqqJYoqRFVScIVirPDhhJTV%2B7ah7zuP31S1moiYHJ4QyyaEwUmXDhjuuxMGk0ttL9EtVPxlxat5u4Jh6L209CckKQ%2BgDVj1sXKN%2BQ7IHfiTDArOifbPrkMtfceLtltVF21Of3%2Bt3XEF6W5PWl5ol%2BrDJi2XPsWh5AXkKL2Q6ff7xNv7GONAXPLfAMndUgPIN6tcxN%2BFCSfX2afsnEQD9PPCgb%2F84EWeLUoeBcJtYIzIKXS1qkF2ZIEHNJy%2FYQRKB%2FJYH8%2FP%2BuMdYDTTtGUK6LbcmzLh0pE%2FYqONq3mqYZ4IF5RtI0r9UMIHal8QGOqUBy7pIaVxQbAoJZN0TaAZhH0SBvXfuDQHFGvCpQTdAJF6IJOR%2F7aBq8bc5B7ZXUhq%2Fjf%2F5%2BWF2dGIhGtjHMFjHkj%2FKFJLQxNw%2B3d32PVscM6aja0jXQFt88LwxHNP9clX8OlkygywOwLaJ0GUjsw4O%2FLQ%2FC4H8JaRg7CCB%2BswPn%2FuJWjo4JNBKJCo%2FVejS5%2BZ3bUyNhrMUEuMCQw3vmG02nCmICbk1&X-Amz-Signature=33ac7113d16e69e98a999203a1a817351a7208bae80f153336d99d855e1041ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S2EB26C%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICDR0UH75IdsGVIp1yGnQ5w71VTeVzpWaQH2s1SyxHMYAiEAkrc94kvncJ7oBDF%2BAYmFycyfe1Kf5VvxobhOg6NsQyQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKnvdo0tjJNI%2F%2BEgRircA3OgHURldWSJTCpfyAsb3oR986%2FfbbHSbaLhh4tI0F%2BAE4t0sjJqlqXYfxcybkml9iRvO5YiwoexiU0vFd%2FhveLsJHMhbPEgQOYn4UKC%2BpGfykAySUHBHtZzmhnjeg2gv5YRso2R%2FYu09pDZ7rde5lHRzjfSNTeIiy7C5tStv4av67TaeCTjQEbwqqNxFhLeU7dH%2BpBSkrQO5cu6H%2BhX%2BV9sBeMynFuz3hwkpy4qHjGlEmnbtOi7Ji%2BASowiUQgkHINbpSguxztbY0WaNXmzCyQA%2Bx7se2ilBvMc6pgTlzevOk%2BvALwtcSBjPhY7pS%2BWPHegXmKPaqqJYoqRFVScIVirPDhhJTV%2B7ah7zuP31S1moiYHJ4QyyaEwUmXDhjuuxMGk0ttL9EtVPxlxat5u4Jh6L209CckKQ%2BgDVj1sXKN%2BQ7IHfiTDArOifbPrkMtfceLtltVF21Of3%2Bt3XEF6W5PWl5ol%2BrDJi2XPsWh5AXkKL2Q6ff7xNv7GONAXPLfAMndUgPIN6tcxN%2BFCSfX2afsnEQD9PPCgb%2F84EWeLUoeBcJtYIzIKXS1qkF2ZIEHNJy%2FYQRKB%2FJYH8%2FP%2BuMdYDTTtGUK6LbcmzLh0pE%2FYqONq3mqYZ4IF5RtI0r9UMIHal8QGOqUBy7pIaVxQbAoJZN0TaAZhH0SBvXfuDQHFGvCpQTdAJF6IJOR%2F7aBq8bc5B7ZXUhq%2Fjf%2F5%2BWF2dGIhGtjHMFjHkj%2FKFJLQxNw%2B3d32PVscM6aja0jXQFt88LwxHNP9clX8OlkygywOwLaJ0GUjsw4O%2FLQ%2FC4H8JaRg7CCB%2BswPn%2FuJWjo4JNBKJCo%2FVejS5%2BZ3bUyNhrMUEuMCQw3vmG02nCmICbk1&X-Amz-Signature=3e6f0e7f7270767c2ea97bb7f484f25480b4d9a4cf7e205d9d2173f990ddc9c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S2EB26C%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICDR0UH75IdsGVIp1yGnQ5w71VTeVzpWaQH2s1SyxHMYAiEAkrc94kvncJ7oBDF%2BAYmFycyfe1Kf5VvxobhOg6NsQyQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKnvdo0tjJNI%2F%2BEgRircA3OgHURldWSJTCpfyAsb3oR986%2FfbbHSbaLhh4tI0F%2BAE4t0sjJqlqXYfxcybkml9iRvO5YiwoexiU0vFd%2FhveLsJHMhbPEgQOYn4UKC%2BpGfykAySUHBHtZzmhnjeg2gv5YRso2R%2FYu09pDZ7rde5lHRzjfSNTeIiy7C5tStv4av67TaeCTjQEbwqqNxFhLeU7dH%2BpBSkrQO5cu6H%2BhX%2BV9sBeMynFuz3hwkpy4qHjGlEmnbtOi7Ji%2BASowiUQgkHINbpSguxztbY0WaNXmzCyQA%2Bx7se2ilBvMc6pgTlzevOk%2BvALwtcSBjPhY7pS%2BWPHegXmKPaqqJYoqRFVScIVirPDhhJTV%2B7ah7zuP31S1moiYHJ4QyyaEwUmXDhjuuxMGk0ttL9EtVPxlxat5u4Jh6L209CckKQ%2BgDVj1sXKN%2BQ7IHfiTDArOifbPrkMtfceLtltVF21Of3%2Bt3XEF6W5PWl5ol%2BrDJi2XPsWh5AXkKL2Q6ff7xNv7GONAXPLfAMndUgPIN6tcxN%2BFCSfX2afsnEQD9PPCgb%2F84EWeLUoeBcJtYIzIKXS1qkF2ZIEHNJy%2FYQRKB%2FJYH8%2FP%2BuMdYDTTtGUK6LbcmzLh0pE%2FYqONq3mqYZ4IF5RtI0r9UMIHal8QGOqUBy7pIaVxQbAoJZN0TaAZhH0SBvXfuDQHFGvCpQTdAJF6IJOR%2F7aBq8bc5B7ZXUhq%2Fjf%2F5%2BWF2dGIhGtjHMFjHkj%2FKFJLQxNw%2B3d32PVscM6aja0jXQFt88LwxHNP9clX8OlkygywOwLaJ0GUjsw4O%2FLQ%2FC4H8JaRg7CCB%2BswPn%2FuJWjo4JNBKJCo%2FVejS5%2BZ3bUyNhrMUEuMCQw3vmG02nCmICbk1&X-Amz-Signature=ce8ae974d5b24f9b464f70e999d88be06abc07b85e586f7fc40ae0abc067ca0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S2EB26C%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICDR0UH75IdsGVIp1yGnQ5w71VTeVzpWaQH2s1SyxHMYAiEAkrc94kvncJ7oBDF%2BAYmFycyfe1Kf5VvxobhOg6NsQyQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKnvdo0tjJNI%2F%2BEgRircA3OgHURldWSJTCpfyAsb3oR986%2FfbbHSbaLhh4tI0F%2BAE4t0sjJqlqXYfxcybkml9iRvO5YiwoexiU0vFd%2FhveLsJHMhbPEgQOYn4UKC%2BpGfykAySUHBHtZzmhnjeg2gv5YRso2R%2FYu09pDZ7rde5lHRzjfSNTeIiy7C5tStv4av67TaeCTjQEbwqqNxFhLeU7dH%2BpBSkrQO5cu6H%2BhX%2BV9sBeMynFuz3hwkpy4qHjGlEmnbtOi7Ji%2BASowiUQgkHINbpSguxztbY0WaNXmzCyQA%2Bx7se2ilBvMc6pgTlzevOk%2BvALwtcSBjPhY7pS%2BWPHegXmKPaqqJYoqRFVScIVirPDhhJTV%2B7ah7zuP31S1moiYHJ4QyyaEwUmXDhjuuxMGk0ttL9EtVPxlxat5u4Jh6L209CckKQ%2BgDVj1sXKN%2BQ7IHfiTDArOifbPrkMtfceLtltVF21Of3%2Bt3XEF6W5PWl5ol%2BrDJi2XPsWh5AXkKL2Q6ff7xNv7GONAXPLfAMndUgPIN6tcxN%2BFCSfX2afsnEQD9PPCgb%2F84EWeLUoeBcJtYIzIKXS1qkF2ZIEHNJy%2FYQRKB%2FJYH8%2FP%2BuMdYDTTtGUK6LbcmzLh0pE%2FYqONq3mqYZ4IF5RtI0r9UMIHal8QGOqUBy7pIaVxQbAoJZN0TaAZhH0SBvXfuDQHFGvCpQTdAJF6IJOR%2F7aBq8bc5B7ZXUhq%2Fjf%2F5%2BWF2dGIhGtjHMFjHkj%2FKFJLQxNw%2B3d32PVscM6aja0jXQFt88LwxHNP9clX8OlkygywOwLaJ0GUjsw4O%2FLQ%2FC4H8JaRg7CCB%2BswPn%2FuJWjo4JNBKJCo%2FVejS5%2BZ3bUyNhrMUEuMCQw3vmG02nCmICbk1&X-Amz-Signature=5a2e4079bce2d317d774a258af3de290d883c365cacc1605d262fb7c90a365a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S2EB26C%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICDR0UH75IdsGVIp1yGnQ5w71VTeVzpWaQH2s1SyxHMYAiEAkrc94kvncJ7oBDF%2BAYmFycyfe1Kf5VvxobhOg6NsQyQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKnvdo0tjJNI%2F%2BEgRircA3OgHURldWSJTCpfyAsb3oR986%2FfbbHSbaLhh4tI0F%2BAE4t0sjJqlqXYfxcybkml9iRvO5YiwoexiU0vFd%2FhveLsJHMhbPEgQOYn4UKC%2BpGfykAySUHBHtZzmhnjeg2gv5YRso2R%2FYu09pDZ7rde5lHRzjfSNTeIiy7C5tStv4av67TaeCTjQEbwqqNxFhLeU7dH%2BpBSkrQO5cu6H%2BhX%2BV9sBeMynFuz3hwkpy4qHjGlEmnbtOi7Ji%2BASowiUQgkHINbpSguxztbY0WaNXmzCyQA%2Bx7se2ilBvMc6pgTlzevOk%2BvALwtcSBjPhY7pS%2BWPHegXmKPaqqJYoqRFVScIVirPDhhJTV%2B7ah7zuP31S1moiYHJ4QyyaEwUmXDhjuuxMGk0ttL9EtVPxlxat5u4Jh6L209CckKQ%2BgDVj1sXKN%2BQ7IHfiTDArOifbPrkMtfceLtltVF21Of3%2Bt3XEF6W5PWl5ol%2BrDJi2XPsWh5AXkKL2Q6ff7xNv7GONAXPLfAMndUgPIN6tcxN%2BFCSfX2afsnEQD9PPCgb%2F84EWeLUoeBcJtYIzIKXS1qkF2ZIEHNJy%2FYQRKB%2FJYH8%2FP%2BuMdYDTTtGUK6LbcmzLh0pE%2FYqONq3mqYZ4IF5RtI0r9UMIHal8QGOqUBy7pIaVxQbAoJZN0TaAZhH0SBvXfuDQHFGvCpQTdAJF6IJOR%2F7aBq8bc5B7ZXUhq%2Fjf%2F5%2BWF2dGIhGtjHMFjHkj%2FKFJLQxNw%2B3d32PVscM6aja0jXQFt88LwxHNP9clX8OlkygywOwLaJ0GUjsw4O%2FLQ%2FC4H8JaRg7CCB%2BswPn%2FuJWjo4JNBKJCo%2FVejS5%2BZ3bUyNhrMUEuMCQw3vmG02nCmICbk1&X-Amz-Signature=b33173552f1f1558dda30e8883080ac8fe2fa200f80d2ef3c86fcf3d12faaa0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S2EB26C%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICDR0UH75IdsGVIp1yGnQ5w71VTeVzpWaQH2s1SyxHMYAiEAkrc94kvncJ7oBDF%2BAYmFycyfe1Kf5VvxobhOg6NsQyQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKnvdo0tjJNI%2F%2BEgRircA3OgHURldWSJTCpfyAsb3oR986%2FfbbHSbaLhh4tI0F%2BAE4t0sjJqlqXYfxcybkml9iRvO5YiwoexiU0vFd%2FhveLsJHMhbPEgQOYn4UKC%2BpGfykAySUHBHtZzmhnjeg2gv5YRso2R%2FYu09pDZ7rde5lHRzjfSNTeIiy7C5tStv4av67TaeCTjQEbwqqNxFhLeU7dH%2BpBSkrQO5cu6H%2BhX%2BV9sBeMynFuz3hwkpy4qHjGlEmnbtOi7Ji%2BASowiUQgkHINbpSguxztbY0WaNXmzCyQA%2Bx7se2ilBvMc6pgTlzevOk%2BvALwtcSBjPhY7pS%2BWPHegXmKPaqqJYoqRFVScIVirPDhhJTV%2B7ah7zuP31S1moiYHJ4QyyaEwUmXDhjuuxMGk0ttL9EtVPxlxat5u4Jh6L209CckKQ%2BgDVj1sXKN%2BQ7IHfiTDArOifbPrkMtfceLtltVF21Of3%2Bt3XEF6W5PWl5ol%2BrDJi2XPsWh5AXkKL2Q6ff7xNv7GONAXPLfAMndUgPIN6tcxN%2BFCSfX2afsnEQD9PPCgb%2F84EWeLUoeBcJtYIzIKXS1qkF2ZIEHNJy%2FYQRKB%2FJYH8%2FP%2BuMdYDTTtGUK6LbcmzLh0pE%2FYqONq3mqYZ4IF5RtI0r9UMIHal8QGOqUBy7pIaVxQbAoJZN0TaAZhH0SBvXfuDQHFGvCpQTdAJF6IJOR%2F7aBq8bc5B7ZXUhq%2Fjf%2F5%2BWF2dGIhGtjHMFjHkj%2FKFJLQxNw%2B3d32PVscM6aja0jXQFt88LwxHNP9clX8OlkygywOwLaJ0GUjsw4O%2FLQ%2FC4H8JaRg7CCB%2BswPn%2FuJWjo4JNBKJCo%2FVejS5%2BZ3bUyNhrMUEuMCQw3vmG02nCmICbk1&X-Amz-Signature=25065b81d750f69b08dae26990f9c8186dc162923c0f1b983a20b7b176d487c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
