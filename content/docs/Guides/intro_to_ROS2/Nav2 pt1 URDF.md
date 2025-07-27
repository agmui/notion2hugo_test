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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ZXV7AK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC6qXVmynfFGHrkKYNrDyWBv964TqHgbq9omEiGJ%2BImbQIgOycUBZVLo%2FVYzT1GT0KtwTEVvHmmaLnntsBF4LPOE3Qq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDI70%2FnfTg6aDoHFBOSrcAxOuaX9y%2BmuL3zKz3mmd3i3qmDvAXzTyehnkpnRT5GSpF%2FmhGmajkS8K6Qqyk%2BZosrUQ21hOAOvKd9QcYmFDhMdZ7X73DKcTZCg4X0FqhFN588cCfDe2TM8jS5BaRYZu7j2bt14PCn4NUObIgNm%2B0d1BDUCYpibcLamucJhbsMDIGjCOGfVJm6kU10AbYUJ4NON5Y4OKpMmRVL%2FWPFhn6V5TdShU7ZuReUOPkgwoZBih35kfbrgkT5Q%2F5Ud35ay3NTvgudWl%2FKksJ1h3Z3DNtXhHQSsSIOwttAlk6SbEJVU4i%2BNQwjCqYNONaLUJ5ciDC9uDq2Khw4DDhRes4h9f%2BieAuXG2%2FFy0IUxuoGZckkrI1D8GcrtFy4sAQzab8zimJVr3X2JjHanDRGqIZejfdNANIgz6kCZpKYvg%2BTCa%2Fzpui9y%2FFnJFHqRsMFWSQ4PN5XAeX0ZYdolN11QPIP3ap%2FftJtmftrYePrZlr7zMyh7yMBTGsnSanu499Opydj2fjqqzpgAZvbreC973R9y4%2FMh3WrOya5nAkQx28RhM1hkwz3%2BVn2HCAaTQsNdwpkC9RkcyyPnILA09Wxn69MT%2F5DGKpa8iPFxc7XcQ4vlh%2FpWuq%2FRj9XYnDy1Sl3RXMMi7lsQGOqUBhVdr3Px2dmVeFjQ5%2FXn6tYfOuzDpmkG%2BBr%2B%2BpJFp1yQYZmAqc%2F5oHb3ADa6l9%2B1pDI92Tgk9lYEIyCZ7FRxd4iz6cabOmN8uMQjGYlIfyR4qdC0up4ZXMLayfl6JJrVXxCjB968Ssv8MQvTScvMpiOyjYuEEZsetMBiCsQ8SVo1%2FOPH1CmKZf9noo4CA7oDYtCiPnLLy4zkt%2FGWDK3L%2FWLqbK226&X-Amz-Signature=600fbd931b5a0bf1c38c5203c4ac474914a915535ea288f6063571dc97c4df0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ZXV7AK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC6qXVmynfFGHrkKYNrDyWBv964TqHgbq9omEiGJ%2BImbQIgOycUBZVLo%2FVYzT1GT0KtwTEVvHmmaLnntsBF4LPOE3Qq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDI70%2FnfTg6aDoHFBOSrcAxOuaX9y%2BmuL3zKz3mmd3i3qmDvAXzTyehnkpnRT5GSpF%2FmhGmajkS8K6Qqyk%2BZosrUQ21hOAOvKd9QcYmFDhMdZ7X73DKcTZCg4X0FqhFN588cCfDe2TM8jS5BaRYZu7j2bt14PCn4NUObIgNm%2B0d1BDUCYpibcLamucJhbsMDIGjCOGfVJm6kU10AbYUJ4NON5Y4OKpMmRVL%2FWPFhn6V5TdShU7ZuReUOPkgwoZBih35kfbrgkT5Q%2F5Ud35ay3NTvgudWl%2FKksJ1h3Z3DNtXhHQSsSIOwttAlk6SbEJVU4i%2BNQwjCqYNONaLUJ5ciDC9uDq2Khw4DDhRes4h9f%2BieAuXG2%2FFy0IUxuoGZckkrI1D8GcrtFy4sAQzab8zimJVr3X2JjHanDRGqIZejfdNANIgz6kCZpKYvg%2BTCa%2Fzpui9y%2FFnJFHqRsMFWSQ4PN5XAeX0ZYdolN11QPIP3ap%2FftJtmftrYePrZlr7zMyh7yMBTGsnSanu499Opydj2fjqqzpgAZvbreC973R9y4%2FMh3WrOya5nAkQx28RhM1hkwz3%2BVn2HCAaTQsNdwpkC9RkcyyPnILA09Wxn69MT%2F5DGKpa8iPFxc7XcQ4vlh%2FpWuq%2FRj9XYnDy1Sl3RXMMi7lsQGOqUBhVdr3Px2dmVeFjQ5%2FXn6tYfOuzDpmkG%2BBr%2B%2BpJFp1yQYZmAqc%2F5oHb3ADa6l9%2B1pDI92Tgk9lYEIyCZ7FRxd4iz6cabOmN8uMQjGYlIfyR4qdC0up4ZXMLayfl6JJrVXxCjB968Ssv8MQvTScvMpiOyjYuEEZsetMBiCsQ8SVo1%2FOPH1CmKZf9noo4CA7oDYtCiPnLLy4zkt%2FGWDK3L%2FWLqbK226&X-Amz-Signature=7eda2d788dd5215cec9ed80f70ea09f4493dabd05a784ad0bfcb6b3240373fe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ZXV7AK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC6qXVmynfFGHrkKYNrDyWBv964TqHgbq9omEiGJ%2BImbQIgOycUBZVLo%2FVYzT1GT0KtwTEVvHmmaLnntsBF4LPOE3Qq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDI70%2FnfTg6aDoHFBOSrcAxOuaX9y%2BmuL3zKz3mmd3i3qmDvAXzTyehnkpnRT5GSpF%2FmhGmajkS8K6Qqyk%2BZosrUQ21hOAOvKd9QcYmFDhMdZ7X73DKcTZCg4X0FqhFN588cCfDe2TM8jS5BaRYZu7j2bt14PCn4NUObIgNm%2B0d1BDUCYpibcLamucJhbsMDIGjCOGfVJm6kU10AbYUJ4NON5Y4OKpMmRVL%2FWPFhn6V5TdShU7ZuReUOPkgwoZBih35kfbrgkT5Q%2F5Ud35ay3NTvgudWl%2FKksJ1h3Z3DNtXhHQSsSIOwttAlk6SbEJVU4i%2BNQwjCqYNONaLUJ5ciDC9uDq2Khw4DDhRes4h9f%2BieAuXG2%2FFy0IUxuoGZckkrI1D8GcrtFy4sAQzab8zimJVr3X2JjHanDRGqIZejfdNANIgz6kCZpKYvg%2BTCa%2Fzpui9y%2FFnJFHqRsMFWSQ4PN5XAeX0ZYdolN11QPIP3ap%2FftJtmftrYePrZlr7zMyh7yMBTGsnSanu499Opydj2fjqqzpgAZvbreC973R9y4%2FMh3WrOya5nAkQx28RhM1hkwz3%2BVn2HCAaTQsNdwpkC9RkcyyPnILA09Wxn69MT%2F5DGKpa8iPFxc7XcQ4vlh%2FpWuq%2FRj9XYnDy1Sl3RXMMi7lsQGOqUBhVdr3Px2dmVeFjQ5%2FXn6tYfOuzDpmkG%2BBr%2B%2BpJFp1yQYZmAqc%2F5oHb3ADa6l9%2B1pDI92Tgk9lYEIyCZ7FRxd4iz6cabOmN8uMQjGYlIfyR4qdC0up4ZXMLayfl6JJrVXxCjB968Ssv8MQvTScvMpiOyjYuEEZsetMBiCsQ8SVo1%2FOPH1CmKZf9noo4CA7oDYtCiPnLLy4zkt%2FGWDK3L%2FWLqbK226&X-Amz-Signature=93ae48b4517f98cdc4e7f56f9ecad0ccb64047594ae327d11250710b989099fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ZXV7AK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC6qXVmynfFGHrkKYNrDyWBv964TqHgbq9omEiGJ%2BImbQIgOycUBZVLo%2FVYzT1GT0KtwTEVvHmmaLnntsBF4LPOE3Qq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDI70%2FnfTg6aDoHFBOSrcAxOuaX9y%2BmuL3zKz3mmd3i3qmDvAXzTyehnkpnRT5GSpF%2FmhGmajkS8K6Qqyk%2BZosrUQ21hOAOvKd9QcYmFDhMdZ7X73DKcTZCg4X0FqhFN588cCfDe2TM8jS5BaRYZu7j2bt14PCn4NUObIgNm%2B0d1BDUCYpibcLamucJhbsMDIGjCOGfVJm6kU10AbYUJ4NON5Y4OKpMmRVL%2FWPFhn6V5TdShU7ZuReUOPkgwoZBih35kfbrgkT5Q%2F5Ud35ay3NTvgudWl%2FKksJ1h3Z3DNtXhHQSsSIOwttAlk6SbEJVU4i%2BNQwjCqYNONaLUJ5ciDC9uDq2Khw4DDhRes4h9f%2BieAuXG2%2FFy0IUxuoGZckkrI1D8GcrtFy4sAQzab8zimJVr3X2JjHanDRGqIZejfdNANIgz6kCZpKYvg%2BTCa%2Fzpui9y%2FFnJFHqRsMFWSQ4PN5XAeX0ZYdolN11QPIP3ap%2FftJtmftrYePrZlr7zMyh7yMBTGsnSanu499Opydj2fjqqzpgAZvbreC973R9y4%2FMh3WrOya5nAkQx28RhM1hkwz3%2BVn2HCAaTQsNdwpkC9RkcyyPnILA09Wxn69MT%2F5DGKpa8iPFxc7XcQ4vlh%2FpWuq%2FRj9XYnDy1Sl3RXMMi7lsQGOqUBhVdr3Px2dmVeFjQ5%2FXn6tYfOuzDpmkG%2BBr%2B%2BpJFp1yQYZmAqc%2F5oHb3ADa6l9%2B1pDI92Tgk9lYEIyCZ7FRxd4iz6cabOmN8uMQjGYlIfyR4qdC0up4ZXMLayfl6JJrVXxCjB968Ssv8MQvTScvMpiOyjYuEEZsetMBiCsQ8SVo1%2FOPH1CmKZf9noo4CA7oDYtCiPnLLy4zkt%2FGWDK3L%2FWLqbK226&X-Amz-Signature=ea7606f709302a8c626ae11e57f1de857bb27d08be3314991ea536ad9cdaa773&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ZXV7AK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC6qXVmynfFGHrkKYNrDyWBv964TqHgbq9omEiGJ%2BImbQIgOycUBZVLo%2FVYzT1GT0KtwTEVvHmmaLnntsBF4LPOE3Qq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDI70%2FnfTg6aDoHFBOSrcAxOuaX9y%2BmuL3zKz3mmd3i3qmDvAXzTyehnkpnRT5GSpF%2FmhGmajkS8K6Qqyk%2BZosrUQ21hOAOvKd9QcYmFDhMdZ7X73DKcTZCg4X0FqhFN588cCfDe2TM8jS5BaRYZu7j2bt14PCn4NUObIgNm%2B0d1BDUCYpibcLamucJhbsMDIGjCOGfVJm6kU10AbYUJ4NON5Y4OKpMmRVL%2FWPFhn6V5TdShU7ZuReUOPkgwoZBih35kfbrgkT5Q%2F5Ud35ay3NTvgudWl%2FKksJ1h3Z3DNtXhHQSsSIOwttAlk6SbEJVU4i%2BNQwjCqYNONaLUJ5ciDC9uDq2Khw4DDhRes4h9f%2BieAuXG2%2FFy0IUxuoGZckkrI1D8GcrtFy4sAQzab8zimJVr3X2JjHanDRGqIZejfdNANIgz6kCZpKYvg%2BTCa%2Fzpui9y%2FFnJFHqRsMFWSQ4PN5XAeX0ZYdolN11QPIP3ap%2FftJtmftrYePrZlr7zMyh7yMBTGsnSanu499Opydj2fjqqzpgAZvbreC973R9y4%2FMh3WrOya5nAkQx28RhM1hkwz3%2BVn2HCAaTQsNdwpkC9RkcyyPnILA09Wxn69MT%2F5DGKpa8iPFxc7XcQ4vlh%2FpWuq%2FRj9XYnDy1Sl3RXMMi7lsQGOqUBhVdr3Px2dmVeFjQ5%2FXn6tYfOuzDpmkG%2BBr%2B%2BpJFp1yQYZmAqc%2F5oHb3ADa6l9%2B1pDI92Tgk9lYEIyCZ7FRxd4iz6cabOmN8uMQjGYlIfyR4qdC0up4ZXMLayfl6JJrVXxCjB968Ssv8MQvTScvMpiOyjYuEEZsetMBiCsQ8SVo1%2FOPH1CmKZf9noo4CA7oDYtCiPnLLy4zkt%2FGWDK3L%2FWLqbK226&X-Amz-Signature=fe353d0708d290e80460b9829913dc2461e32c11bec14c367678b5d5cc920989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ZXV7AK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC6qXVmynfFGHrkKYNrDyWBv964TqHgbq9omEiGJ%2BImbQIgOycUBZVLo%2FVYzT1GT0KtwTEVvHmmaLnntsBF4LPOE3Qq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDI70%2FnfTg6aDoHFBOSrcAxOuaX9y%2BmuL3zKz3mmd3i3qmDvAXzTyehnkpnRT5GSpF%2FmhGmajkS8K6Qqyk%2BZosrUQ21hOAOvKd9QcYmFDhMdZ7X73DKcTZCg4X0FqhFN588cCfDe2TM8jS5BaRYZu7j2bt14PCn4NUObIgNm%2B0d1BDUCYpibcLamucJhbsMDIGjCOGfVJm6kU10AbYUJ4NON5Y4OKpMmRVL%2FWPFhn6V5TdShU7ZuReUOPkgwoZBih35kfbrgkT5Q%2F5Ud35ay3NTvgudWl%2FKksJ1h3Z3DNtXhHQSsSIOwttAlk6SbEJVU4i%2BNQwjCqYNONaLUJ5ciDC9uDq2Khw4DDhRes4h9f%2BieAuXG2%2FFy0IUxuoGZckkrI1D8GcrtFy4sAQzab8zimJVr3X2JjHanDRGqIZejfdNANIgz6kCZpKYvg%2BTCa%2Fzpui9y%2FFnJFHqRsMFWSQ4PN5XAeX0ZYdolN11QPIP3ap%2FftJtmftrYePrZlr7zMyh7yMBTGsnSanu499Opydj2fjqqzpgAZvbreC973R9y4%2FMh3WrOya5nAkQx28RhM1hkwz3%2BVn2HCAaTQsNdwpkC9RkcyyPnILA09Wxn69MT%2F5DGKpa8iPFxc7XcQ4vlh%2FpWuq%2FRj9XYnDy1Sl3RXMMi7lsQGOqUBhVdr3Px2dmVeFjQ5%2FXn6tYfOuzDpmkG%2BBr%2B%2BpJFp1yQYZmAqc%2F5oHb3ADa6l9%2B1pDI92Tgk9lYEIyCZ7FRxd4iz6cabOmN8uMQjGYlIfyR4qdC0up4ZXMLayfl6JJrVXxCjB968Ssv8MQvTScvMpiOyjYuEEZsetMBiCsQ8SVo1%2FOPH1CmKZf9noo4CA7oDYtCiPnLLy4zkt%2FGWDK3L%2FWLqbK226&X-Amz-Signature=726ec568170083a9d1f287605449d327c6e5684ae3dfab0b5a4a747e082e8a25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ZXV7AK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC6qXVmynfFGHrkKYNrDyWBv964TqHgbq9omEiGJ%2BImbQIgOycUBZVLo%2FVYzT1GT0KtwTEVvHmmaLnntsBF4LPOE3Qq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDI70%2FnfTg6aDoHFBOSrcAxOuaX9y%2BmuL3zKz3mmd3i3qmDvAXzTyehnkpnRT5GSpF%2FmhGmajkS8K6Qqyk%2BZosrUQ21hOAOvKd9QcYmFDhMdZ7X73DKcTZCg4X0FqhFN588cCfDe2TM8jS5BaRYZu7j2bt14PCn4NUObIgNm%2B0d1BDUCYpibcLamucJhbsMDIGjCOGfVJm6kU10AbYUJ4NON5Y4OKpMmRVL%2FWPFhn6V5TdShU7ZuReUOPkgwoZBih35kfbrgkT5Q%2F5Ud35ay3NTvgudWl%2FKksJ1h3Z3DNtXhHQSsSIOwttAlk6SbEJVU4i%2BNQwjCqYNONaLUJ5ciDC9uDq2Khw4DDhRes4h9f%2BieAuXG2%2FFy0IUxuoGZckkrI1D8GcrtFy4sAQzab8zimJVr3X2JjHanDRGqIZejfdNANIgz6kCZpKYvg%2BTCa%2Fzpui9y%2FFnJFHqRsMFWSQ4PN5XAeX0ZYdolN11QPIP3ap%2FftJtmftrYePrZlr7zMyh7yMBTGsnSanu499Opydj2fjqqzpgAZvbreC973R9y4%2FMh3WrOya5nAkQx28RhM1hkwz3%2BVn2HCAaTQsNdwpkC9RkcyyPnILA09Wxn69MT%2F5DGKpa8iPFxc7XcQ4vlh%2FpWuq%2FRj9XYnDy1Sl3RXMMi7lsQGOqUBhVdr3Px2dmVeFjQ5%2FXn6tYfOuzDpmkG%2BBr%2B%2BpJFp1yQYZmAqc%2F5oHb3ADa6l9%2B1pDI92Tgk9lYEIyCZ7FRxd4iz6cabOmN8uMQjGYlIfyR4qdC0up4ZXMLayfl6JJrVXxCjB968Ssv8MQvTScvMpiOyjYuEEZsetMBiCsQ8SVo1%2FOPH1CmKZf9noo4CA7oDYtCiPnLLy4zkt%2FGWDK3L%2FWLqbK226&X-Amz-Signature=0715eb2f36d36f290cebb3e6fe8be9987c446c7406e9ced4db442805499cdb62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ZXV7AK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC6qXVmynfFGHrkKYNrDyWBv964TqHgbq9omEiGJ%2BImbQIgOycUBZVLo%2FVYzT1GT0KtwTEVvHmmaLnntsBF4LPOE3Qq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDI70%2FnfTg6aDoHFBOSrcAxOuaX9y%2BmuL3zKz3mmd3i3qmDvAXzTyehnkpnRT5GSpF%2FmhGmajkS8K6Qqyk%2BZosrUQ21hOAOvKd9QcYmFDhMdZ7X73DKcTZCg4X0FqhFN588cCfDe2TM8jS5BaRYZu7j2bt14PCn4NUObIgNm%2B0d1BDUCYpibcLamucJhbsMDIGjCOGfVJm6kU10AbYUJ4NON5Y4OKpMmRVL%2FWPFhn6V5TdShU7ZuReUOPkgwoZBih35kfbrgkT5Q%2F5Ud35ay3NTvgudWl%2FKksJ1h3Z3DNtXhHQSsSIOwttAlk6SbEJVU4i%2BNQwjCqYNONaLUJ5ciDC9uDq2Khw4DDhRes4h9f%2BieAuXG2%2FFy0IUxuoGZckkrI1D8GcrtFy4sAQzab8zimJVr3X2JjHanDRGqIZejfdNANIgz6kCZpKYvg%2BTCa%2Fzpui9y%2FFnJFHqRsMFWSQ4PN5XAeX0ZYdolN11QPIP3ap%2FftJtmftrYePrZlr7zMyh7yMBTGsnSanu499Opydj2fjqqzpgAZvbreC973R9y4%2FMh3WrOya5nAkQx28RhM1hkwz3%2BVn2HCAaTQsNdwpkC9RkcyyPnILA09Wxn69MT%2F5DGKpa8iPFxc7XcQ4vlh%2FpWuq%2FRj9XYnDy1Sl3RXMMi7lsQGOqUBhVdr3Px2dmVeFjQ5%2FXn6tYfOuzDpmkG%2BBr%2B%2BpJFp1yQYZmAqc%2F5oHb3ADa6l9%2B1pDI92Tgk9lYEIyCZ7FRxd4iz6cabOmN8uMQjGYlIfyR4qdC0up4ZXMLayfl6JJrVXxCjB968Ssv8MQvTScvMpiOyjYuEEZsetMBiCsQ8SVo1%2FOPH1CmKZf9noo4CA7oDYtCiPnLLy4zkt%2FGWDK3L%2FWLqbK226&X-Amz-Signature=4ef6b55e551e5340b0ec7c0b47904342fcf9412adb0a13f895570e572a581167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ZXV7AK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC6qXVmynfFGHrkKYNrDyWBv964TqHgbq9omEiGJ%2BImbQIgOycUBZVLo%2FVYzT1GT0KtwTEVvHmmaLnntsBF4LPOE3Qq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDI70%2FnfTg6aDoHFBOSrcAxOuaX9y%2BmuL3zKz3mmd3i3qmDvAXzTyehnkpnRT5GSpF%2FmhGmajkS8K6Qqyk%2BZosrUQ21hOAOvKd9QcYmFDhMdZ7X73DKcTZCg4X0FqhFN588cCfDe2TM8jS5BaRYZu7j2bt14PCn4NUObIgNm%2B0d1BDUCYpibcLamucJhbsMDIGjCOGfVJm6kU10AbYUJ4NON5Y4OKpMmRVL%2FWPFhn6V5TdShU7ZuReUOPkgwoZBih35kfbrgkT5Q%2F5Ud35ay3NTvgudWl%2FKksJ1h3Z3DNtXhHQSsSIOwttAlk6SbEJVU4i%2BNQwjCqYNONaLUJ5ciDC9uDq2Khw4DDhRes4h9f%2BieAuXG2%2FFy0IUxuoGZckkrI1D8GcrtFy4sAQzab8zimJVr3X2JjHanDRGqIZejfdNANIgz6kCZpKYvg%2BTCa%2Fzpui9y%2FFnJFHqRsMFWSQ4PN5XAeX0ZYdolN11QPIP3ap%2FftJtmftrYePrZlr7zMyh7yMBTGsnSanu499Opydj2fjqqzpgAZvbreC973R9y4%2FMh3WrOya5nAkQx28RhM1hkwz3%2BVn2HCAaTQsNdwpkC9RkcyyPnILA09Wxn69MT%2F5DGKpa8iPFxc7XcQ4vlh%2FpWuq%2FRj9XYnDy1Sl3RXMMi7lsQGOqUBhVdr3Px2dmVeFjQ5%2FXn6tYfOuzDpmkG%2BBr%2B%2BpJFp1yQYZmAqc%2F5oHb3ADa6l9%2B1pDI92Tgk9lYEIyCZ7FRxd4iz6cabOmN8uMQjGYlIfyR4qdC0up4ZXMLayfl6JJrVXxCjB968Ssv8MQvTScvMpiOyjYuEEZsetMBiCsQ8SVo1%2FOPH1CmKZf9noo4CA7oDYtCiPnLLy4zkt%2FGWDK3L%2FWLqbK226&X-Amz-Signature=cdafcf64c08e0494e47a782a6170996501f47d2a4a9ca28e5c5ad0937784cf45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ZXV7AK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC6qXVmynfFGHrkKYNrDyWBv964TqHgbq9omEiGJ%2BImbQIgOycUBZVLo%2FVYzT1GT0KtwTEVvHmmaLnntsBF4LPOE3Qq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDI70%2FnfTg6aDoHFBOSrcAxOuaX9y%2BmuL3zKz3mmd3i3qmDvAXzTyehnkpnRT5GSpF%2FmhGmajkS8K6Qqyk%2BZosrUQ21hOAOvKd9QcYmFDhMdZ7X73DKcTZCg4X0FqhFN588cCfDe2TM8jS5BaRYZu7j2bt14PCn4NUObIgNm%2B0d1BDUCYpibcLamucJhbsMDIGjCOGfVJm6kU10AbYUJ4NON5Y4OKpMmRVL%2FWPFhn6V5TdShU7ZuReUOPkgwoZBih35kfbrgkT5Q%2F5Ud35ay3NTvgudWl%2FKksJ1h3Z3DNtXhHQSsSIOwttAlk6SbEJVU4i%2BNQwjCqYNONaLUJ5ciDC9uDq2Khw4DDhRes4h9f%2BieAuXG2%2FFy0IUxuoGZckkrI1D8GcrtFy4sAQzab8zimJVr3X2JjHanDRGqIZejfdNANIgz6kCZpKYvg%2BTCa%2Fzpui9y%2FFnJFHqRsMFWSQ4PN5XAeX0ZYdolN11QPIP3ap%2FftJtmftrYePrZlr7zMyh7yMBTGsnSanu499Opydj2fjqqzpgAZvbreC973R9y4%2FMh3WrOya5nAkQx28RhM1hkwz3%2BVn2HCAaTQsNdwpkC9RkcyyPnILA09Wxn69MT%2F5DGKpa8iPFxc7XcQ4vlh%2FpWuq%2FRj9XYnDy1Sl3RXMMi7lsQGOqUBhVdr3Px2dmVeFjQ5%2FXn6tYfOuzDpmkG%2BBr%2B%2BpJFp1yQYZmAqc%2F5oHb3ADa6l9%2B1pDI92Tgk9lYEIyCZ7FRxd4iz6cabOmN8uMQjGYlIfyR4qdC0up4ZXMLayfl6JJrVXxCjB968Ssv8MQvTScvMpiOyjYuEEZsetMBiCsQ8SVo1%2FOPH1CmKZf9noo4CA7oDYtCiPnLLy4zkt%2FGWDK3L%2FWLqbK226&X-Amz-Signature=443f61d4b257db07f0b957e7d58b0bc19d1337c1adf8defc72ddc19e70add258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ZXV7AK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC6qXVmynfFGHrkKYNrDyWBv964TqHgbq9omEiGJ%2BImbQIgOycUBZVLo%2FVYzT1GT0KtwTEVvHmmaLnntsBF4LPOE3Qq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDI70%2FnfTg6aDoHFBOSrcAxOuaX9y%2BmuL3zKz3mmd3i3qmDvAXzTyehnkpnRT5GSpF%2FmhGmajkS8K6Qqyk%2BZosrUQ21hOAOvKd9QcYmFDhMdZ7X73DKcTZCg4X0FqhFN588cCfDe2TM8jS5BaRYZu7j2bt14PCn4NUObIgNm%2B0d1BDUCYpibcLamucJhbsMDIGjCOGfVJm6kU10AbYUJ4NON5Y4OKpMmRVL%2FWPFhn6V5TdShU7ZuReUOPkgwoZBih35kfbrgkT5Q%2F5Ud35ay3NTvgudWl%2FKksJ1h3Z3DNtXhHQSsSIOwttAlk6SbEJVU4i%2BNQwjCqYNONaLUJ5ciDC9uDq2Khw4DDhRes4h9f%2BieAuXG2%2FFy0IUxuoGZckkrI1D8GcrtFy4sAQzab8zimJVr3X2JjHanDRGqIZejfdNANIgz6kCZpKYvg%2BTCa%2Fzpui9y%2FFnJFHqRsMFWSQ4PN5XAeX0ZYdolN11QPIP3ap%2FftJtmftrYePrZlr7zMyh7yMBTGsnSanu499Opydj2fjqqzpgAZvbreC973R9y4%2FMh3WrOya5nAkQx28RhM1hkwz3%2BVn2HCAaTQsNdwpkC9RkcyyPnILA09Wxn69MT%2F5DGKpa8iPFxc7XcQ4vlh%2FpWuq%2FRj9XYnDy1Sl3RXMMi7lsQGOqUBhVdr3Px2dmVeFjQ5%2FXn6tYfOuzDpmkG%2BBr%2B%2BpJFp1yQYZmAqc%2F5oHb3ADa6l9%2B1pDI92Tgk9lYEIyCZ7FRxd4iz6cabOmN8uMQjGYlIfyR4qdC0up4ZXMLayfl6JJrVXxCjB968Ssv8MQvTScvMpiOyjYuEEZsetMBiCsQ8SVo1%2FOPH1CmKZf9noo4CA7oDYtCiPnLLy4zkt%2FGWDK3L%2FWLqbK226&X-Amz-Signature=bd4f27254994d2f635d03ef0e31f47f94daf0fbeb663efaf1ef702aa038860f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ZXV7AK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC6qXVmynfFGHrkKYNrDyWBv964TqHgbq9omEiGJ%2BImbQIgOycUBZVLo%2FVYzT1GT0KtwTEVvHmmaLnntsBF4LPOE3Qq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDI70%2FnfTg6aDoHFBOSrcAxOuaX9y%2BmuL3zKz3mmd3i3qmDvAXzTyehnkpnRT5GSpF%2FmhGmajkS8K6Qqyk%2BZosrUQ21hOAOvKd9QcYmFDhMdZ7X73DKcTZCg4X0FqhFN588cCfDe2TM8jS5BaRYZu7j2bt14PCn4NUObIgNm%2B0d1BDUCYpibcLamucJhbsMDIGjCOGfVJm6kU10AbYUJ4NON5Y4OKpMmRVL%2FWPFhn6V5TdShU7ZuReUOPkgwoZBih35kfbrgkT5Q%2F5Ud35ay3NTvgudWl%2FKksJ1h3Z3DNtXhHQSsSIOwttAlk6SbEJVU4i%2BNQwjCqYNONaLUJ5ciDC9uDq2Khw4DDhRes4h9f%2BieAuXG2%2FFy0IUxuoGZckkrI1D8GcrtFy4sAQzab8zimJVr3X2JjHanDRGqIZejfdNANIgz6kCZpKYvg%2BTCa%2Fzpui9y%2FFnJFHqRsMFWSQ4PN5XAeX0ZYdolN11QPIP3ap%2FftJtmftrYePrZlr7zMyh7yMBTGsnSanu499Opydj2fjqqzpgAZvbreC973R9y4%2FMh3WrOya5nAkQx28RhM1hkwz3%2BVn2HCAaTQsNdwpkC9RkcyyPnILA09Wxn69MT%2F5DGKpa8iPFxc7XcQ4vlh%2FpWuq%2FRj9XYnDy1Sl3RXMMi7lsQGOqUBhVdr3Px2dmVeFjQ5%2FXn6tYfOuzDpmkG%2BBr%2B%2BpJFp1yQYZmAqc%2F5oHb3ADa6l9%2B1pDI92Tgk9lYEIyCZ7FRxd4iz6cabOmN8uMQjGYlIfyR4qdC0up4ZXMLayfl6JJrVXxCjB968Ssv8MQvTScvMpiOyjYuEEZsetMBiCsQ8SVo1%2FOPH1CmKZf9noo4CA7oDYtCiPnLLy4zkt%2FGWDK3L%2FWLqbK226&X-Amz-Signature=e85ed686724ddccdfd72bd4bf3e6f34ddb8ad900f1b7b040601b334a55185a39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ZXV7AK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC6qXVmynfFGHrkKYNrDyWBv964TqHgbq9omEiGJ%2BImbQIgOycUBZVLo%2FVYzT1GT0KtwTEVvHmmaLnntsBF4LPOE3Qq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDI70%2FnfTg6aDoHFBOSrcAxOuaX9y%2BmuL3zKz3mmd3i3qmDvAXzTyehnkpnRT5GSpF%2FmhGmajkS8K6Qqyk%2BZosrUQ21hOAOvKd9QcYmFDhMdZ7X73DKcTZCg4X0FqhFN588cCfDe2TM8jS5BaRYZu7j2bt14PCn4NUObIgNm%2B0d1BDUCYpibcLamucJhbsMDIGjCOGfVJm6kU10AbYUJ4NON5Y4OKpMmRVL%2FWPFhn6V5TdShU7ZuReUOPkgwoZBih35kfbrgkT5Q%2F5Ud35ay3NTvgudWl%2FKksJ1h3Z3DNtXhHQSsSIOwttAlk6SbEJVU4i%2BNQwjCqYNONaLUJ5ciDC9uDq2Khw4DDhRes4h9f%2BieAuXG2%2FFy0IUxuoGZckkrI1D8GcrtFy4sAQzab8zimJVr3X2JjHanDRGqIZejfdNANIgz6kCZpKYvg%2BTCa%2Fzpui9y%2FFnJFHqRsMFWSQ4PN5XAeX0ZYdolN11QPIP3ap%2FftJtmftrYePrZlr7zMyh7yMBTGsnSanu499Opydj2fjqqzpgAZvbreC973R9y4%2FMh3WrOya5nAkQx28RhM1hkwz3%2BVn2HCAaTQsNdwpkC9RkcyyPnILA09Wxn69MT%2F5DGKpa8iPFxc7XcQ4vlh%2FpWuq%2FRj9XYnDy1Sl3RXMMi7lsQGOqUBhVdr3Px2dmVeFjQ5%2FXn6tYfOuzDpmkG%2BBr%2B%2BpJFp1yQYZmAqc%2F5oHb3ADa6l9%2B1pDI92Tgk9lYEIyCZ7FRxd4iz6cabOmN8uMQjGYlIfyR4qdC0up4ZXMLayfl6JJrVXxCjB968Ssv8MQvTScvMpiOyjYuEEZsetMBiCsQ8SVo1%2FOPH1CmKZf9noo4CA7oDYtCiPnLLy4zkt%2FGWDK3L%2FWLqbK226&X-Amz-Signature=c6bdfdda52061b8b615a9456a5147e07c0811a94be2ec1761552dfd210beb3a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ZXV7AK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC6qXVmynfFGHrkKYNrDyWBv964TqHgbq9omEiGJ%2BImbQIgOycUBZVLo%2FVYzT1GT0KtwTEVvHmmaLnntsBF4LPOE3Qq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDI70%2FnfTg6aDoHFBOSrcAxOuaX9y%2BmuL3zKz3mmd3i3qmDvAXzTyehnkpnRT5GSpF%2FmhGmajkS8K6Qqyk%2BZosrUQ21hOAOvKd9QcYmFDhMdZ7X73DKcTZCg4X0FqhFN588cCfDe2TM8jS5BaRYZu7j2bt14PCn4NUObIgNm%2B0d1BDUCYpibcLamucJhbsMDIGjCOGfVJm6kU10AbYUJ4NON5Y4OKpMmRVL%2FWPFhn6V5TdShU7ZuReUOPkgwoZBih35kfbrgkT5Q%2F5Ud35ay3NTvgudWl%2FKksJ1h3Z3DNtXhHQSsSIOwttAlk6SbEJVU4i%2BNQwjCqYNONaLUJ5ciDC9uDq2Khw4DDhRes4h9f%2BieAuXG2%2FFy0IUxuoGZckkrI1D8GcrtFy4sAQzab8zimJVr3X2JjHanDRGqIZejfdNANIgz6kCZpKYvg%2BTCa%2Fzpui9y%2FFnJFHqRsMFWSQ4PN5XAeX0ZYdolN11QPIP3ap%2FftJtmftrYePrZlr7zMyh7yMBTGsnSanu499Opydj2fjqqzpgAZvbreC973R9y4%2FMh3WrOya5nAkQx28RhM1hkwz3%2BVn2HCAaTQsNdwpkC9RkcyyPnILA09Wxn69MT%2F5DGKpa8iPFxc7XcQ4vlh%2FpWuq%2FRj9XYnDy1Sl3RXMMi7lsQGOqUBhVdr3Px2dmVeFjQ5%2FXn6tYfOuzDpmkG%2BBr%2B%2BpJFp1yQYZmAqc%2F5oHb3ADa6l9%2B1pDI92Tgk9lYEIyCZ7FRxd4iz6cabOmN8uMQjGYlIfyR4qdC0up4ZXMLayfl6JJrVXxCjB968Ssv8MQvTScvMpiOyjYuEEZsetMBiCsQ8SVo1%2FOPH1CmKZf9noo4CA7oDYtCiPnLLy4zkt%2FGWDK3L%2FWLqbK226&X-Amz-Signature=7cfe939fab252f975662876347a6d06169974f3b69f23c1b7afae8e2689ca4d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TTCKYPU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCan%2Bwk4fbi6Ahy5vRrTkrI9yNyvd7ptObbzxk9NejrgAIhAKndw1WPc%2BTmuVYxOhurldEeNQj6OPBixXdydXbyQEPCKv8DCG0QABoMNjM3NDIzMTgzODA1IgwCge0Gtc742B7TjZoq3ANU10kXfdQJCrnuN555YRbvNEe6Iu%2BXC9BrtRFq2Gwr704EngY0aKalSxwXKaXPwxS2cnOF0vVELhlFmJAJmL1d8AgJ%2BMzL3rwbpxm2nQGHFbwyhYqTCrmSdS6w17Q9u2ielGC99E4x4yKZVKOXJGNUx9kNrjrKm%2BrjIkSBkh%2BWf0x8M5ZKLTvCLYYWcIPIA39rVpFSc0i0AFHPkrN1sj07kDNVdkPBL5%2Bgd8Y6NsdDzuEo7T%2F3ZA5plLqVz53JGqgqSV8AYR64GaQImIClGql5pNaOsHRHBGqGa8z3bKFKg2s%2FC3UQmiIo0ilBM1h36iNThNVWPYSV7GD3f6jmYDaz0ne4xbZADwcV8ruHek%2FetFPQihkuDfA3CPRVYWUsUnKKxAL6mL315f%2FHlyzhZNpDXUyyJ9H%2BfNW8m0Xc68nJlhozzz5THh0lUuWw0z4r1KmQN52NIcYPdAvU%2FbRCBwguBHbelka3jkUjSIlo104PDDfuha5QO%2FDXUM3%2Bsxmt07Hodfp8fwT0CjitqXYoDJE6mRRHVEvwf%2BD2QCEFgs0%2BiWu8zORE7HjpMZqmj84Hck7kzqJxEOck1NrwTtYCzBFALklfh9CYpMz0cnrD71GwxHa6IHMbW4%2B8A%2B%2F28DDWu5bEBjqkARum%2FMQhl4yf1x0jHuUqiEuasXJZUMCnx%2F2H4lKO8pufQs6KJTyURVVMA19vijM1MAi6LgVNxqaK3ICeQuGFZ%2FEOrd5A1%2FNJH3SC5CM0kr1Va3ALB0fWHQZKRwDz0I9Bi7siOU6s38UWZBwsMfaZKcnNubSnasbSXZ34LoE72noiRet%2Fo5oLtwFjpIwXckLq8%2F74uHaTRki62A9I9IzqhI8n1xCH&X-Amz-Signature=cdf8325ab9b75714d026f05ea5701649926bd4bc20399e4447e2e306e5c9ef39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TTCKYPU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCan%2Bwk4fbi6Ahy5vRrTkrI9yNyvd7ptObbzxk9NejrgAIhAKndw1WPc%2BTmuVYxOhurldEeNQj6OPBixXdydXbyQEPCKv8DCG0QABoMNjM3NDIzMTgzODA1IgwCge0Gtc742B7TjZoq3ANU10kXfdQJCrnuN555YRbvNEe6Iu%2BXC9BrtRFq2Gwr704EngY0aKalSxwXKaXPwxS2cnOF0vVELhlFmJAJmL1d8AgJ%2BMzL3rwbpxm2nQGHFbwyhYqTCrmSdS6w17Q9u2ielGC99E4x4yKZVKOXJGNUx9kNrjrKm%2BrjIkSBkh%2BWf0x8M5ZKLTvCLYYWcIPIA39rVpFSc0i0AFHPkrN1sj07kDNVdkPBL5%2Bgd8Y6NsdDzuEo7T%2F3ZA5plLqVz53JGqgqSV8AYR64GaQImIClGql5pNaOsHRHBGqGa8z3bKFKg2s%2FC3UQmiIo0ilBM1h36iNThNVWPYSV7GD3f6jmYDaz0ne4xbZADwcV8ruHek%2FetFPQihkuDfA3CPRVYWUsUnKKxAL6mL315f%2FHlyzhZNpDXUyyJ9H%2BfNW8m0Xc68nJlhozzz5THh0lUuWw0z4r1KmQN52NIcYPdAvU%2FbRCBwguBHbelka3jkUjSIlo104PDDfuha5QO%2FDXUM3%2Bsxmt07Hodfp8fwT0CjitqXYoDJE6mRRHVEvwf%2BD2QCEFgs0%2BiWu8zORE7HjpMZqmj84Hck7kzqJxEOck1NrwTtYCzBFALklfh9CYpMz0cnrD71GwxHa6IHMbW4%2B8A%2B%2F28DDWu5bEBjqkARum%2FMQhl4yf1x0jHuUqiEuasXJZUMCnx%2F2H4lKO8pufQs6KJTyURVVMA19vijM1MAi6LgVNxqaK3ICeQuGFZ%2FEOrd5A1%2FNJH3SC5CM0kr1Va3ALB0fWHQZKRwDz0I9Bi7siOU6s38UWZBwsMfaZKcnNubSnasbSXZ34LoE72noiRet%2Fo5oLtwFjpIwXckLq8%2F74uHaTRki62A9I9IzqhI8n1xCH&X-Amz-Signature=7740cab7362deab50d80b4608612c42b1239411d0af057c2e741847ef7bd4de9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TTCKYPU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCan%2Bwk4fbi6Ahy5vRrTkrI9yNyvd7ptObbzxk9NejrgAIhAKndw1WPc%2BTmuVYxOhurldEeNQj6OPBixXdydXbyQEPCKv8DCG0QABoMNjM3NDIzMTgzODA1IgwCge0Gtc742B7TjZoq3ANU10kXfdQJCrnuN555YRbvNEe6Iu%2BXC9BrtRFq2Gwr704EngY0aKalSxwXKaXPwxS2cnOF0vVELhlFmJAJmL1d8AgJ%2BMzL3rwbpxm2nQGHFbwyhYqTCrmSdS6w17Q9u2ielGC99E4x4yKZVKOXJGNUx9kNrjrKm%2BrjIkSBkh%2BWf0x8M5ZKLTvCLYYWcIPIA39rVpFSc0i0AFHPkrN1sj07kDNVdkPBL5%2Bgd8Y6NsdDzuEo7T%2F3ZA5plLqVz53JGqgqSV8AYR64GaQImIClGql5pNaOsHRHBGqGa8z3bKFKg2s%2FC3UQmiIo0ilBM1h36iNThNVWPYSV7GD3f6jmYDaz0ne4xbZADwcV8ruHek%2FetFPQihkuDfA3CPRVYWUsUnKKxAL6mL315f%2FHlyzhZNpDXUyyJ9H%2BfNW8m0Xc68nJlhozzz5THh0lUuWw0z4r1KmQN52NIcYPdAvU%2FbRCBwguBHbelka3jkUjSIlo104PDDfuha5QO%2FDXUM3%2Bsxmt07Hodfp8fwT0CjitqXYoDJE6mRRHVEvwf%2BD2QCEFgs0%2BiWu8zORE7HjpMZqmj84Hck7kzqJxEOck1NrwTtYCzBFALklfh9CYpMz0cnrD71GwxHa6IHMbW4%2B8A%2B%2F28DDWu5bEBjqkARum%2FMQhl4yf1x0jHuUqiEuasXJZUMCnx%2F2H4lKO8pufQs6KJTyURVVMA19vijM1MAi6LgVNxqaK3ICeQuGFZ%2FEOrd5A1%2FNJH3SC5CM0kr1Va3ALB0fWHQZKRwDz0I9Bi7siOU6s38UWZBwsMfaZKcnNubSnasbSXZ34LoE72noiRet%2Fo5oLtwFjpIwXckLq8%2F74uHaTRki62A9I9IzqhI8n1xCH&X-Amz-Signature=6cc2b426b40f60424a7f3034008a44b5762717acc6f50e8f8f20657009838ab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TTCKYPU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCan%2Bwk4fbi6Ahy5vRrTkrI9yNyvd7ptObbzxk9NejrgAIhAKndw1WPc%2BTmuVYxOhurldEeNQj6OPBixXdydXbyQEPCKv8DCG0QABoMNjM3NDIzMTgzODA1IgwCge0Gtc742B7TjZoq3ANU10kXfdQJCrnuN555YRbvNEe6Iu%2BXC9BrtRFq2Gwr704EngY0aKalSxwXKaXPwxS2cnOF0vVELhlFmJAJmL1d8AgJ%2BMzL3rwbpxm2nQGHFbwyhYqTCrmSdS6w17Q9u2ielGC99E4x4yKZVKOXJGNUx9kNrjrKm%2BrjIkSBkh%2BWf0x8M5ZKLTvCLYYWcIPIA39rVpFSc0i0AFHPkrN1sj07kDNVdkPBL5%2Bgd8Y6NsdDzuEo7T%2F3ZA5plLqVz53JGqgqSV8AYR64GaQImIClGql5pNaOsHRHBGqGa8z3bKFKg2s%2FC3UQmiIo0ilBM1h36iNThNVWPYSV7GD3f6jmYDaz0ne4xbZADwcV8ruHek%2FetFPQihkuDfA3CPRVYWUsUnKKxAL6mL315f%2FHlyzhZNpDXUyyJ9H%2BfNW8m0Xc68nJlhozzz5THh0lUuWw0z4r1KmQN52NIcYPdAvU%2FbRCBwguBHbelka3jkUjSIlo104PDDfuha5QO%2FDXUM3%2Bsxmt07Hodfp8fwT0CjitqXYoDJE6mRRHVEvwf%2BD2QCEFgs0%2BiWu8zORE7HjpMZqmj84Hck7kzqJxEOck1NrwTtYCzBFALklfh9CYpMz0cnrD71GwxHa6IHMbW4%2B8A%2B%2F28DDWu5bEBjqkARum%2FMQhl4yf1x0jHuUqiEuasXJZUMCnx%2F2H4lKO8pufQs6KJTyURVVMA19vijM1MAi6LgVNxqaK3ICeQuGFZ%2FEOrd5A1%2FNJH3SC5CM0kr1Va3ALB0fWHQZKRwDz0I9Bi7siOU6s38UWZBwsMfaZKcnNubSnasbSXZ34LoE72noiRet%2Fo5oLtwFjpIwXckLq8%2F74uHaTRki62A9I9IzqhI8n1xCH&X-Amz-Signature=e581b54a65f576d8d57cc3199c85088e2ffe919baaaa9ad0c29b455cc1eb77bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TTCKYPU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCan%2Bwk4fbi6Ahy5vRrTkrI9yNyvd7ptObbzxk9NejrgAIhAKndw1WPc%2BTmuVYxOhurldEeNQj6OPBixXdydXbyQEPCKv8DCG0QABoMNjM3NDIzMTgzODA1IgwCge0Gtc742B7TjZoq3ANU10kXfdQJCrnuN555YRbvNEe6Iu%2BXC9BrtRFq2Gwr704EngY0aKalSxwXKaXPwxS2cnOF0vVELhlFmJAJmL1d8AgJ%2BMzL3rwbpxm2nQGHFbwyhYqTCrmSdS6w17Q9u2ielGC99E4x4yKZVKOXJGNUx9kNrjrKm%2BrjIkSBkh%2BWf0x8M5ZKLTvCLYYWcIPIA39rVpFSc0i0AFHPkrN1sj07kDNVdkPBL5%2Bgd8Y6NsdDzuEo7T%2F3ZA5plLqVz53JGqgqSV8AYR64GaQImIClGql5pNaOsHRHBGqGa8z3bKFKg2s%2FC3UQmiIo0ilBM1h36iNThNVWPYSV7GD3f6jmYDaz0ne4xbZADwcV8ruHek%2FetFPQihkuDfA3CPRVYWUsUnKKxAL6mL315f%2FHlyzhZNpDXUyyJ9H%2BfNW8m0Xc68nJlhozzz5THh0lUuWw0z4r1KmQN52NIcYPdAvU%2FbRCBwguBHbelka3jkUjSIlo104PDDfuha5QO%2FDXUM3%2Bsxmt07Hodfp8fwT0CjitqXYoDJE6mRRHVEvwf%2BD2QCEFgs0%2BiWu8zORE7HjpMZqmj84Hck7kzqJxEOck1NrwTtYCzBFALklfh9CYpMz0cnrD71GwxHa6IHMbW4%2B8A%2B%2F28DDWu5bEBjqkARum%2FMQhl4yf1x0jHuUqiEuasXJZUMCnx%2F2H4lKO8pufQs6KJTyURVVMA19vijM1MAi6LgVNxqaK3ICeQuGFZ%2FEOrd5A1%2FNJH3SC5CM0kr1Va3ALB0fWHQZKRwDz0I9Bi7siOU6s38UWZBwsMfaZKcnNubSnasbSXZ34LoE72noiRet%2Fo5oLtwFjpIwXckLq8%2F74uHaTRki62A9I9IzqhI8n1xCH&X-Amz-Signature=7ed80a272feeb0149d612e9e13fa02fecf5d195a910b7488a23af9fc6c3d265c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TTCKYPU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCan%2Bwk4fbi6Ahy5vRrTkrI9yNyvd7ptObbzxk9NejrgAIhAKndw1WPc%2BTmuVYxOhurldEeNQj6OPBixXdydXbyQEPCKv8DCG0QABoMNjM3NDIzMTgzODA1IgwCge0Gtc742B7TjZoq3ANU10kXfdQJCrnuN555YRbvNEe6Iu%2BXC9BrtRFq2Gwr704EngY0aKalSxwXKaXPwxS2cnOF0vVELhlFmJAJmL1d8AgJ%2BMzL3rwbpxm2nQGHFbwyhYqTCrmSdS6w17Q9u2ielGC99E4x4yKZVKOXJGNUx9kNrjrKm%2BrjIkSBkh%2BWf0x8M5ZKLTvCLYYWcIPIA39rVpFSc0i0AFHPkrN1sj07kDNVdkPBL5%2Bgd8Y6NsdDzuEo7T%2F3ZA5plLqVz53JGqgqSV8AYR64GaQImIClGql5pNaOsHRHBGqGa8z3bKFKg2s%2FC3UQmiIo0ilBM1h36iNThNVWPYSV7GD3f6jmYDaz0ne4xbZADwcV8ruHek%2FetFPQihkuDfA3CPRVYWUsUnKKxAL6mL315f%2FHlyzhZNpDXUyyJ9H%2BfNW8m0Xc68nJlhozzz5THh0lUuWw0z4r1KmQN52NIcYPdAvU%2FbRCBwguBHbelka3jkUjSIlo104PDDfuha5QO%2FDXUM3%2Bsxmt07Hodfp8fwT0CjitqXYoDJE6mRRHVEvwf%2BD2QCEFgs0%2BiWu8zORE7HjpMZqmj84Hck7kzqJxEOck1NrwTtYCzBFALklfh9CYpMz0cnrD71GwxHa6IHMbW4%2B8A%2B%2F28DDWu5bEBjqkARum%2FMQhl4yf1x0jHuUqiEuasXJZUMCnx%2F2H4lKO8pufQs6KJTyURVVMA19vijM1MAi6LgVNxqaK3ICeQuGFZ%2FEOrd5A1%2FNJH3SC5CM0kr1Va3ALB0fWHQZKRwDz0I9Bi7siOU6s38UWZBwsMfaZKcnNubSnasbSXZ34LoE72noiRet%2Fo5oLtwFjpIwXckLq8%2F74uHaTRki62A9I9IzqhI8n1xCH&X-Amz-Signature=8ded26585a3179b6e7224f763663b4b5e7681bbe25fe08d8820ad0a051ccef57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
