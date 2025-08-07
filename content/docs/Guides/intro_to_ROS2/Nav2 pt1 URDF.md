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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEJ2HWZA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGSh7As%2FYSl1IxMC4pJwrDBQNQeGFRwi9vBLdtORwDYNAiAbwNuiBkHhH%2Boezj5qRXr%2BqmcQPyHL3yUt5%2FyB4sJ4tCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMANcieiQXVcklbC%2B%2BKtwDXFjE0WojSE7KcjJUoQIfEj1kPJ1hjbNbUgu4SNV3Kj7xNZaCeFNOp%2FY9qcArWTiWEOoF4vya6o3%2FYN1Y3zJgb5xZpx9JqhQVYsHCkYla2KWvdHSUAomnIRW2aFZUUdaUvO7TsuBf2ZueghCum%2FHGxF6cakhQ1wrNnxtqFihb5Kgfcu0np7Y%2FC%2FpEZyt98uxFVdsiLNTfFz3C6zgspbJZSIikyZRdGh5IAOTjVGcolum00TAbCumzfspOJXe%2BZ0T4h5v2ffVsrOXMSmnv7ChPFxhhUTtKrMCsH2GdqtsnCNG6J3vNX7QnZ0L%2FQd2K6Gz5y1JPfwylvmD%2FRqkpFXeVXCl%2BqbprK4ouSSw3bcfBTyDbtDH3sPToeTs103xld5N4MTa4CWz32w6OlScgkcGfL%2B0RzatSFSyoogfzedPI8VGsr7xvdlpJLNJY84%2BUmt%2FZHSbAuiCZnBVeH0WjkLgwwhHmU57%2FpbpPuPjebays%2B3c9yTX8Bm6Pr2N8jodOXDz6yvq46gtgRD3dC4OT5%2FF8zcPJYDjKtETFkT2JsxDBR4ONlSG02ufgkRb7Ws9r2oEvCQZCL87DMSeAWNiweDAOLH%2BicwKmdzrU0fan0aPGw3dSxkK%2ByvqOT9GC2tMwgu7TxAY6pgGTyiMjKsJthPaDWFR7MRwNn9398jidwHfOX2Ym1vfX87OK0LSizt7LhIKkM8%2F7wfGVIlhPiAz0P9%2F99Y3O5d156xews5FrVj4n32z5F%2BCXQakdYw5weeqxK%2BFgZTaB2hy%2BEbUe5t9Y64j6Js23Ly0iWMmmrEV1k23ppDgOMSfZTgcCknqmemaph6N%2B5qtEbfb08tp53a%2Fmf4p8uhcsaB5sigHmoWhk&X-Amz-Signature=fd4bc022482f5f4923767eb1848719d61e28c0dd0ae4e42ce4df9fba19cb7018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEJ2HWZA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGSh7As%2FYSl1IxMC4pJwrDBQNQeGFRwi9vBLdtORwDYNAiAbwNuiBkHhH%2Boezj5qRXr%2BqmcQPyHL3yUt5%2FyB4sJ4tCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMANcieiQXVcklbC%2B%2BKtwDXFjE0WojSE7KcjJUoQIfEj1kPJ1hjbNbUgu4SNV3Kj7xNZaCeFNOp%2FY9qcArWTiWEOoF4vya6o3%2FYN1Y3zJgb5xZpx9JqhQVYsHCkYla2KWvdHSUAomnIRW2aFZUUdaUvO7TsuBf2ZueghCum%2FHGxF6cakhQ1wrNnxtqFihb5Kgfcu0np7Y%2FC%2FpEZyt98uxFVdsiLNTfFz3C6zgspbJZSIikyZRdGh5IAOTjVGcolum00TAbCumzfspOJXe%2BZ0T4h5v2ffVsrOXMSmnv7ChPFxhhUTtKrMCsH2GdqtsnCNG6J3vNX7QnZ0L%2FQd2K6Gz5y1JPfwylvmD%2FRqkpFXeVXCl%2BqbprK4ouSSw3bcfBTyDbtDH3sPToeTs103xld5N4MTa4CWz32w6OlScgkcGfL%2B0RzatSFSyoogfzedPI8VGsr7xvdlpJLNJY84%2BUmt%2FZHSbAuiCZnBVeH0WjkLgwwhHmU57%2FpbpPuPjebays%2B3c9yTX8Bm6Pr2N8jodOXDz6yvq46gtgRD3dC4OT5%2FF8zcPJYDjKtETFkT2JsxDBR4ONlSG02ufgkRb7Ws9r2oEvCQZCL87DMSeAWNiweDAOLH%2BicwKmdzrU0fan0aPGw3dSxkK%2ByvqOT9GC2tMwgu7TxAY6pgGTyiMjKsJthPaDWFR7MRwNn9398jidwHfOX2Ym1vfX87OK0LSizt7LhIKkM8%2F7wfGVIlhPiAz0P9%2F99Y3O5d156xews5FrVj4n32z5F%2BCXQakdYw5weeqxK%2BFgZTaB2hy%2BEbUe5t9Y64j6Js23Ly0iWMmmrEV1k23ppDgOMSfZTgcCknqmemaph6N%2B5qtEbfb08tp53a%2Fmf4p8uhcsaB5sigHmoWhk&X-Amz-Signature=aefaf75622df3d1ed5aef32729bf643c0c259df8a02afc4f18a50973bdf885ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEJ2HWZA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGSh7As%2FYSl1IxMC4pJwrDBQNQeGFRwi9vBLdtORwDYNAiAbwNuiBkHhH%2Boezj5qRXr%2BqmcQPyHL3yUt5%2FyB4sJ4tCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMANcieiQXVcklbC%2B%2BKtwDXFjE0WojSE7KcjJUoQIfEj1kPJ1hjbNbUgu4SNV3Kj7xNZaCeFNOp%2FY9qcArWTiWEOoF4vya6o3%2FYN1Y3zJgb5xZpx9JqhQVYsHCkYla2KWvdHSUAomnIRW2aFZUUdaUvO7TsuBf2ZueghCum%2FHGxF6cakhQ1wrNnxtqFihb5Kgfcu0np7Y%2FC%2FpEZyt98uxFVdsiLNTfFz3C6zgspbJZSIikyZRdGh5IAOTjVGcolum00TAbCumzfspOJXe%2BZ0T4h5v2ffVsrOXMSmnv7ChPFxhhUTtKrMCsH2GdqtsnCNG6J3vNX7QnZ0L%2FQd2K6Gz5y1JPfwylvmD%2FRqkpFXeVXCl%2BqbprK4ouSSw3bcfBTyDbtDH3sPToeTs103xld5N4MTa4CWz32w6OlScgkcGfL%2B0RzatSFSyoogfzedPI8VGsr7xvdlpJLNJY84%2BUmt%2FZHSbAuiCZnBVeH0WjkLgwwhHmU57%2FpbpPuPjebays%2B3c9yTX8Bm6Pr2N8jodOXDz6yvq46gtgRD3dC4OT5%2FF8zcPJYDjKtETFkT2JsxDBR4ONlSG02ufgkRb7Ws9r2oEvCQZCL87DMSeAWNiweDAOLH%2BicwKmdzrU0fan0aPGw3dSxkK%2ByvqOT9GC2tMwgu7TxAY6pgGTyiMjKsJthPaDWFR7MRwNn9398jidwHfOX2Ym1vfX87OK0LSizt7LhIKkM8%2F7wfGVIlhPiAz0P9%2F99Y3O5d156xews5FrVj4n32z5F%2BCXQakdYw5weeqxK%2BFgZTaB2hy%2BEbUe5t9Y64j6Js23Ly0iWMmmrEV1k23ppDgOMSfZTgcCknqmemaph6N%2B5qtEbfb08tp53a%2Fmf4p8uhcsaB5sigHmoWhk&X-Amz-Signature=74aea303a65500074ca60a1bc5481b66e18ab198757d491949ab3d5f3508ed14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEJ2HWZA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGSh7As%2FYSl1IxMC4pJwrDBQNQeGFRwi9vBLdtORwDYNAiAbwNuiBkHhH%2Boezj5qRXr%2BqmcQPyHL3yUt5%2FyB4sJ4tCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMANcieiQXVcklbC%2B%2BKtwDXFjE0WojSE7KcjJUoQIfEj1kPJ1hjbNbUgu4SNV3Kj7xNZaCeFNOp%2FY9qcArWTiWEOoF4vya6o3%2FYN1Y3zJgb5xZpx9JqhQVYsHCkYla2KWvdHSUAomnIRW2aFZUUdaUvO7TsuBf2ZueghCum%2FHGxF6cakhQ1wrNnxtqFihb5Kgfcu0np7Y%2FC%2FpEZyt98uxFVdsiLNTfFz3C6zgspbJZSIikyZRdGh5IAOTjVGcolum00TAbCumzfspOJXe%2BZ0T4h5v2ffVsrOXMSmnv7ChPFxhhUTtKrMCsH2GdqtsnCNG6J3vNX7QnZ0L%2FQd2K6Gz5y1JPfwylvmD%2FRqkpFXeVXCl%2BqbprK4ouSSw3bcfBTyDbtDH3sPToeTs103xld5N4MTa4CWz32w6OlScgkcGfL%2B0RzatSFSyoogfzedPI8VGsr7xvdlpJLNJY84%2BUmt%2FZHSbAuiCZnBVeH0WjkLgwwhHmU57%2FpbpPuPjebays%2B3c9yTX8Bm6Pr2N8jodOXDz6yvq46gtgRD3dC4OT5%2FF8zcPJYDjKtETFkT2JsxDBR4ONlSG02ufgkRb7Ws9r2oEvCQZCL87DMSeAWNiweDAOLH%2BicwKmdzrU0fan0aPGw3dSxkK%2ByvqOT9GC2tMwgu7TxAY6pgGTyiMjKsJthPaDWFR7MRwNn9398jidwHfOX2Ym1vfX87OK0LSizt7LhIKkM8%2F7wfGVIlhPiAz0P9%2F99Y3O5d156xews5FrVj4n32z5F%2BCXQakdYw5weeqxK%2BFgZTaB2hy%2BEbUe5t9Y64j6Js23Ly0iWMmmrEV1k23ppDgOMSfZTgcCknqmemaph6N%2B5qtEbfb08tp53a%2Fmf4p8uhcsaB5sigHmoWhk&X-Amz-Signature=becf57fe560ea97113bea5ba8961c5a3f9f3efff7c84e563ccd6a7d6ab7cee3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEJ2HWZA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGSh7As%2FYSl1IxMC4pJwrDBQNQeGFRwi9vBLdtORwDYNAiAbwNuiBkHhH%2Boezj5qRXr%2BqmcQPyHL3yUt5%2FyB4sJ4tCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMANcieiQXVcklbC%2B%2BKtwDXFjE0WojSE7KcjJUoQIfEj1kPJ1hjbNbUgu4SNV3Kj7xNZaCeFNOp%2FY9qcArWTiWEOoF4vya6o3%2FYN1Y3zJgb5xZpx9JqhQVYsHCkYla2KWvdHSUAomnIRW2aFZUUdaUvO7TsuBf2ZueghCum%2FHGxF6cakhQ1wrNnxtqFihb5Kgfcu0np7Y%2FC%2FpEZyt98uxFVdsiLNTfFz3C6zgspbJZSIikyZRdGh5IAOTjVGcolum00TAbCumzfspOJXe%2BZ0T4h5v2ffVsrOXMSmnv7ChPFxhhUTtKrMCsH2GdqtsnCNG6J3vNX7QnZ0L%2FQd2K6Gz5y1JPfwylvmD%2FRqkpFXeVXCl%2BqbprK4ouSSw3bcfBTyDbtDH3sPToeTs103xld5N4MTa4CWz32w6OlScgkcGfL%2B0RzatSFSyoogfzedPI8VGsr7xvdlpJLNJY84%2BUmt%2FZHSbAuiCZnBVeH0WjkLgwwhHmU57%2FpbpPuPjebays%2B3c9yTX8Bm6Pr2N8jodOXDz6yvq46gtgRD3dC4OT5%2FF8zcPJYDjKtETFkT2JsxDBR4ONlSG02ufgkRb7Ws9r2oEvCQZCL87DMSeAWNiweDAOLH%2BicwKmdzrU0fan0aPGw3dSxkK%2ByvqOT9GC2tMwgu7TxAY6pgGTyiMjKsJthPaDWFR7MRwNn9398jidwHfOX2Ym1vfX87OK0LSizt7LhIKkM8%2F7wfGVIlhPiAz0P9%2F99Y3O5d156xews5FrVj4n32z5F%2BCXQakdYw5weeqxK%2BFgZTaB2hy%2BEbUe5t9Y64j6Js23Ly0iWMmmrEV1k23ppDgOMSfZTgcCknqmemaph6N%2B5qtEbfb08tp53a%2Fmf4p8uhcsaB5sigHmoWhk&X-Amz-Signature=80e00148d8105cf2e7a4ea93f711365a7694c056d17548ee98e509e4a8ec8fc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEJ2HWZA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGSh7As%2FYSl1IxMC4pJwrDBQNQeGFRwi9vBLdtORwDYNAiAbwNuiBkHhH%2Boezj5qRXr%2BqmcQPyHL3yUt5%2FyB4sJ4tCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMANcieiQXVcklbC%2B%2BKtwDXFjE0WojSE7KcjJUoQIfEj1kPJ1hjbNbUgu4SNV3Kj7xNZaCeFNOp%2FY9qcArWTiWEOoF4vya6o3%2FYN1Y3zJgb5xZpx9JqhQVYsHCkYla2KWvdHSUAomnIRW2aFZUUdaUvO7TsuBf2ZueghCum%2FHGxF6cakhQ1wrNnxtqFihb5Kgfcu0np7Y%2FC%2FpEZyt98uxFVdsiLNTfFz3C6zgspbJZSIikyZRdGh5IAOTjVGcolum00TAbCumzfspOJXe%2BZ0T4h5v2ffVsrOXMSmnv7ChPFxhhUTtKrMCsH2GdqtsnCNG6J3vNX7QnZ0L%2FQd2K6Gz5y1JPfwylvmD%2FRqkpFXeVXCl%2BqbprK4ouSSw3bcfBTyDbtDH3sPToeTs103xld5N4MTa4CWz32w6OlScgkcGfL%2B0RzatSFSyoogfzedPI8VGsr7xvdlpJLNJY84%2BUmt%2FZHSbAuiCZnBVeH0WjkLgwwhHmU57%2FpbpPuPjebays%2B3c9yTX8Bm6Pr2N8jodOXDz6yvq46gtgRD3dC4OT5%2FF8zcPJYDjKtETFkT2JsxDBR4ONlSG02ufgkRb7Ws9r2oEvCQZCL87DMSeAWNiweDAOLH%2BicwKmdzrU0fan0aPGw3dSxkK%2ByvqOT9GC2tMwgu7TxAY6pgGTyiMjKsJthPaDWFR7MRwNn9398jidwHfOX2Ym1vfX87OK0LSizt7LhIKkM8%2F7wfGVIlhPiAz0P9%2F99Y3O5d156xews5FrVj4n32z5F%2BCXQakdYw5weeqxK%2BFgZTaB2hy%2BEbUe5t9Y64j6Js23Ly0iWMmmrEV1k23ppDgOMSfZTgcCknqmemaph6N%2B5qtEbfb08tp53a%2Fmf4p8uhcsaB5sigHmoWhk&X-Amz-Signature=0431abaa08e92988b1154889ee113bee783566de5ec10535d073d2583e6b3b34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEJ2HWZA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGSh7As%2FYSl1IxMC4pJwrDBQNQeGFRwi9vBLdtORwDYNAiAbwNuiBkHhH%2Boezj5qRXr%2BqmcQPyHL3yUt5%2FyB4sJ4tCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMANcieiQXVcklbC%2B%2BKtwDXFjE0WojSE7KcjJUoQIfEj1kPJ1hjbNbUgu4SNV3Kj7xNZaCeFNOp%2FY9qcArWTiWEOoF4vya6o3%2FYN1Y3zJgb5xZpx9JqhQVYsHCkYla2KWvdHSUAomnIRW2aFZUUdaUvO7TsuBf2ZueghCum%2FHGxF6cakhQ1wrNnxtqFihb5Kgfcu0np7Y%2FC%2FpEZyt98uxFVdsiLNTfFz3C6zgspbJZSIikyZRdGh5IAOTjVGcolum00TAbCumzfspOJXe%2BZ0T4h5v2ffVsrOXMSmnv7ChPFxhhUTtKrMCsH2GdqtsnCNG6J3vNX7QnZ0L%2FQd2K6Gz5y1JPfwylvmD%2FRqkpFXeVXCl%2BqbprK4ouSSw3bcfBTyDbtDH3sPToeTs103xld5N4MTa4CWz32w6OlScgkcGfL%2B0RzatSFSyoogfzedPI8VGsr7xvdlpJLNJY84%2BUmt%2FZHSbAuiCZnBVeH0WjkLgwwhHmU57%2FpbpPuPjebays%2B3c9yTX8Bm6Pr2N8jodOXDz6yvq46gtgRD3dC4OT5%2FF8zcPJYDjKtETFkT2JsxDBR4ONlSG02ufgkRb7Ws9r2oEvCQZCL87DMSeAWNiweDAOLH%2BicwKmdzrU0fan0aPGw3dSxkK%2ByvqOT9GC2tMwgu7TxAY6pgGTyiMjKsJthPaDWFR7MRwNn9398jidwHfOX2Ym1vfX87OK0LSizt7LhIKkM8%2F7wfGVIlhPiAz0P9%2F99Y3O5d156xews5FrVj4n32z5F%2BCXQakdYw5weeqxK%2BFgZTaB2hy%2BEbUe5t9Y64j6Js23Ly0iWMmmrEV1k23ppDgOMSfZTgcCknqmemaph6N%2B5qtEbfb08tp53a%2Fmf4p8uhcsaB5sigHmoWhk&X-Amz-Signature=11cb3e917df0b1eb7f6224a8d3916b961dbc7db9a2d749d16cdb0272057fccc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEJ2HWZA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGSh7As%2FYSl1IxMC4pJwrDBQNQeGFRwi9vBLdtORwDYNAiAbwNuiBkHhH%2Boezj5qRXr%2BqmcQPyHL3yUt5%2FyB4sJ4tCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMANcieiQXVcklbC%2B%2BKtwDXFjE0WojSE7KcjJUoQIfEj1kPJ1hjbNbUgu4SNV3Kj7xNZaCeFNOp%2FY9qcArWTiWEOoF4vya6o3%2FYN1Y3zJgb5xZpx9JqhQVYsHCkYla2KWvdHSUAomnIRW2aFZUUdaUvO7TsuBf2ZueghCum%2FHGxF6cakhQ1wrNnxtqFihb5Kgfcu0np7Y%2FC%2FpEZyt98uxFVdsiLNTfFz3C6zgspbJZSIikyZRdGh5IAOTjVGcolum00TAbCumzfspOJXe%2BZ0T4h5v2ffVsrOXMSmnv7ChPFxhhUTtKrMCsH2GdqtsnCNG6J3vNX7QnZ0L%2FQd2K6Gz5y1JPfwylvmD%2FRqkpFXeVXCl%2BqbprK4ouSSw3bcfBTyDbtDH3sPToeTs103xld5N4MTa4CWz32w6OlScgkcGfL%2B0RzatSFSyoogfzedPI8VGsr7xvdlpJLNJY84%2BUmt%2FZHSbAuiCZnBVeH0WjkLgwwhHmU57%2FpbpPuPjebays%2B3c9yTX8Bm6Pr2N8jodOXDz6yvq46gtgRD3dC4OT5%2FF8zcPJYDjKtETFkT2JsxDBR4ONlSG02ufgkRb7Ws9r2oEvCQZCL87DMSeAWNiweDAOLH%2BicwKmdzrU0fan0aPGw3dSxkK%2ByvqOT9GC2tMwgu7TxAY6pgGTyiMjKsJthPaDWFR7MRwNn9398jidwHfOX2Ym1vfX87OK0LSizt7LhIKkM8%2F7wfGVIlhPiAz0P9%2F99Y3O5d156xews5FrVj4n32z5F%2BCXQakdYw5weeqxK%2BFgZTaB2hy%2BEbUe5t9Y64j6Js23Ly0iWMmmrEV1k23ppDgOMSfZTgcCknqmemaph6N%2B5qtEbfb08tp53a%2Fmf4p8uhcsaB5sigHmoWhk&X-Amz-Signature=e24f4eede99c9bd1fca250625718b8048801c7ebad315ffb6ef17284f98f925e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEJ2HWZA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGSh7As%2FYSl1IxMC4pJwrDBQNQeGFRwi9vBLdtORwDYNAiAbwNuiBkHhH%2Boezj5qRXr%2BqmcQPyHL3yUt5%2FyB4sJ4tCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMANcieiQXVcklbC%2B%2BKtwDXFjE0WojSE7KcjJUoQIfEj1kPJ1hjbNbUgu4SNV3Kj7xNZaCeFNOp%2FY9qcArWTiWEOoF4vya6o3%2FYN1Y3zJgb5xZpx9JqhQVYsHCkYla2KWvdHSUAomnIRW2aFZUUdaUvO7TsuBf2ZueghCum%2FHGxF6cakhQ1wrNnxtqFihb5Kgfcu0np7Y%2FC%2FpEZyt98uxFVdsiLNTfFz3C6zgspbJZSIikyZRdGh5IAOTjVGcolum00TAbCumzfspOJXe%2BZ0T4h5v2ffVsrOXMSmnv7ChPFxhhUTtKrMCsH2GdqtsnCNG6J3vNX7QnZ0L%2FQd2K6Gz5y1JPfwylvmD%2FRqkpFXeVXCl%2BqbprK4ouSSw3bcfBTyDbtDH3sPToeTs103xld5N4MTa4CWz32w6OlScgkcGfL%2B0RzatSFSyoogfzedPI8VGsr7xvdlpJLNJY84%2BUmt%2FZHSbAuiCZnBVeH0WjkLgwwhHmU57%2FpbpPuPjebays%2B3c9yTX8Bm6Pr2N8jodOXDz6yvq46gtgRD3dC4OT5%2FF8zcPJYDjKtETFkT2JsxDBR4ONlSG02ufgkRb7Ws9r2oEvCQZCL87DMSeAWNiweDAOLH%2BicwKmdzrU0fan0aPGw3dSxkK%2ByvqOT9GC2tMwgu7TxAY6pgGTyiMjKsJthPaDWFR7MRwNn9398jidwHfOX2Ym1vfX87OK0LSizt7LhIKkM8%2F7wfGVIlhPiAz0P9%2F99Y3O5d156xews5FrVj4n32z5F%2BCXQakdYw5weeqxK%2BFgZTaB2hy%2BEbUe5t9Y64j6Js23Ly0iWMmmrEV1k23ppDgOMSfZTgcCknqmemaph6N%2B5qtEbfb08tp53a%2Fmf4p8uhcsaB5sigHmoWhk&X-Amz-Signature=da5bfb48cce831ba2d2f35004efa6fae87952bc43b46a63b4a2cdb10f02a4a56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEJ2HWZA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGSh7As%2FYSl1IxMC4pJwrDBQNQeGFRwi9vBLdtORwDYNAiAbwNuiBkHhH%2Boezj5qRXr%2BqmcQPyHL3yUt5%2FyB4sJ4tCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMANcieiQXVcklbC%2B%2BKtwDXFjE0WojSE7KcjJUoQIfEj1kPJ1hjbNbUgu4SNV3Kj7xNZaCeFNOp%2FY9qcArWTiWEOoF4vya6o3%2FYN1Y3zJgb5xZpx9JqhQVYsHCkYla2KWvdHSUAomnIRW2aFZUUdaUvO7TsuBf2ZueghCum%2FHGxF6cakhQ1wrNnxtqFihb5Kgfcu0np7Y%2FC%2FpEZyt98uxFVdsiLNTfFz3C6zgspbJZSIikyZRdGh5IAOTjVGcolum00TAbCumzfspOJXe%2BZ0T4h5v2ffVsrOXMSmnv7ChPFxhhUTtKrMCsH2GdqtsnCNG6J3vNX7QnZ0L%2FQd2K6Gz5y1JPfwylvmD%2FRqkpFXeVXCl%2BqbprK4ouSSw3bcfBTyDbtDH3sPToeTs103xld5N4MTa4CWz32w6OlScgkcGfL%2B0RzatSFSyoogfzedPI8VGsr7xvdlpJLNJY84%2BUmt%2FZHSbAuiCZnBVeH0WjkLgwwhHmU57%2FpbpPuPjebays%2B3c9yTX8Bm6Pr2N8jodOXDz6yvq46gtgRD3dC4OT5%2FF8zcPJYDjKtETFkT2JsxDBR4ONlSG02ufgkRb7Ws9r2oEvCQZCL87DMSeAWNiweDAOLH%2BicwKmdzrU0fan0aPGw3dSxkK%2ByvqOT9GC2tMwgu7TxAY6pgGTyiMjKsJthPaDWFR7MRwNn9398jidwHfOX2Ym1vfX87OK0LSizt7LhIKkM8%2F7wfGVIlhPiAz0P9%2F99Y3O5d156xews5FrVj4n32z5F%2BCXQakdYw5weeqxK%2BFgZTaB2hy%2BEbUe5t9Y64j6Js23Ly0iWMmmrEV1k23ppDgOMSfZTgcCknqmemaph6N%2B5qtEbfb08tp53a%2Fmf4p8uhcsaB5sigHmoWhk&X-Amz-Signature=074d6001c2ac480b9d5cc03ee7b8101304bea2e0d54edb73ceee380498b62f2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTTG34NM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIElj9I7W3DauYArC5ed%2BSYEOgjwxt5K10UIQNn1C0kXYAiEA%2FiWBn04cqXzOG%2Bxcsdo9oAbzzivIznJul0I24pbF5vAqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnuYrd2Gixo9RqbkSrcAyBDoou%2Fos5iQMnPM69%2Ba2%2BgxPFXHMEIp0LqirSnESiZT1dq3eQlp8O5t49lka%2FcYr1i8LkDTB91VVYQuu%2B3VUnIvuaFTszXv5334fnVqNPJGD29KKWuLcko2qvZzqaBdHJ7VkGNPtQcqDrXMQ9VX6lSZwWSVgK1cdCvmHxDKzH5Z94%2FL40Zzl5FwLmXCTZHqd%2FRxrCK2p1LK0l6%2FtwzdruKSlPqQfxmGzYFf%2FKKXKeCRi9iL0sfBaU2UBumPM0zdvSbQWWv6DBAm2xIzep4CeOd%2Fd%2BamnUGfvRi%2B1P5jTAW%2B%2FVW%2BAzOjIk1iLYq%2F4%2BfWdLO4wR10FyRulLWLvrLHzt2CGd3%2Fj4Wk7T7J1CgTomuQNzTP8IiB4eL%2FT4WrTFGDhcSXibgTIRZT3g4svyvI4kLac8lrHRfiO7oIoAldMUWrIpM%2BSrWi%2BoCsOLz3DSfBhPY0LB5EqAE25ZwHLY0ZXqdZVlJXX%2BFI7iMK1Ne7uyHhGpx7Z8VC%2BbckSL4f2TA8jOMjsLG5KatIuecbaj8c6ZiXJDwRfX9wYN1GEJD5tn7GiQlD9iVt4sOp%2BcqV6d94VSxpKY9zus9h7Jz7oZ1uOg3JeXEv3Gj2gu%2BsaOJBVNGyDe%2F%2B75nUmpMFLZuMIvu08QGOqUB8Rp9aVE9axi11fWST7PkINNgA2LsgXy27tLcV1aOmz1UqKj45UoytDnx1In249N6aPGtwnI3FLB8wdmQWHR6PJXDkFcwVVMrRa3FX2rd5qA4oenAkoqGUt%2B5fI3uTEK0QCq50Uo8xIeWRJtrpw4%2Bzhj76wIxS4wynN0ChqME83KOTA7seoGOOZLC0lcYZrBujkITfzSxecaa%2FeEXplvenoni5QJS&X-Amz-Signature=2b03f5094e7fc39d286c490ada6f5cd6826ba7a74e2d7cceafd7426d0ed747e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL77LGPH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCq7%2Fg7PXdFSo%2FaRx7H%2BGmJNf9KCC9ieuGNeIrNVqd%2B7wIhAPU9q9mCEt6lJmUyA4xGoRgeiiHHV9YvmDG5VQF9kcf8KogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5Zc5O%2FhwHI3QuTYUq3AOWDvJmhhgoZbph%2Bh8mxDizrEmU5HBzvlwqHtknXjdkeHWCCUPGuby1PmbOh6mwqTYcmTt64iz6v6PZ84a%2Bdviymnr9mg9U7KtlzUofAbC4Dk0fW1M1DE7lQ9Uaw7qN8csyCu7yl5b4S6VDHq5ISBQCoydBIJMoewBcSY0yL50hjJwdLEi5U%2FOlrmrc%2BcOW8VtCYWwedY0kYTs4oXEYySRkV%2FHdthJu4qOh2s1uZpcKjRlqoVxecKlTmSMRmmqL80WIkk3rqQ2gUfDeY1SEpIgeik%2BBBZw1dS0%2FbQTNjMipuTOlgqPKMQW4FMtyHKi4ZRrg5An3xPkCDTyUgDnGp73PTcgS5BjLOSmuuu58YuFeyyAt19ir5iBp%2FFXQG1ijwH5AenRMINTquZ8iQ3w3tmaicoy%2BOJEsi3xY7SIqz8VDy%2FZnG2mkAYqhvFXSRvPO2pT1BftUFd8lqMe01kKgueRQGqFbU0G2tKQ2gb8Uu9V30QDdYdSjf96AL5C1RTCK6NlRbcGdZkD8MOj5MsG2FEaF7VXeRR9i%2BITfjVm0%2B4P34fCVFmxnWxuVDGn2%2Fm2xm0k15ZJP1OLAms%2BiYhcZ8qkB35m%2B4%2FyQC4rOnHjxoVWq8VyWGCd8PFJDPaORSzCp79PEBjqkAdCyJ%2F%2Bk08r%2BJ7G5TYtgZx95HZbFNh3aManGOFCF%2B0TzWQBeH0Ix%2BPUHRwUuz2QYnS9OY17Wew2vLLAvZTRZ9q0%2BiHx26Tk4IxynVmNNpIdZnW3%2BIMUGIDVzPKQY%2BkVt%2FzYgIMtiN%2FUvmCVi%2FIobbBdhX44fK1615nW6OqKOL02brxUXP5E5CG3uGXHvMCSwfDkFjVe2wXNLfcTGuaRn7NzPoJq5&X-Amz-Signature=20708a79c62bafe9cccab0755874de21fe362515482b1945ce617bb62c7fb7a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG7IDAIC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIB1wXH7zuOCjTWq7fu5Y3296R8qsCxqLLsO8PSrrolEqAiEA0w%2Fz7MeNlrjGXMhnPRLSnqcSJ9AUG3BpFawI5TkynUkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBM%2Fuim5UwDUDFMH3SrcA4mMB0x4NUpauxJCKSe9X4FjxGNAGCKFMN3MWUvzTdC2uJ2DrcVXYu8qj4%2FqNhVPb%2BCGb6lFqAjNahwmkKw1YhAUpX9C8UBGKT%2FYFD0NuIYl7DX%2FkiBd33ODPgGtjcrSyE88kSFPzckfcoQ64Z6SFHXJJ0E2%2B0bE%2FeA5S9%2BTiWUBHFjTipsSbUG%2FLNhYIt8jPaD3wP2A3a7w4DL8PXz3%2B1jPX8%2FBDGoceCAJbRUI%2F0i1Pn3NcGlyj3lyX04K0Ox9KCFcCGhv4JSA0wLoc%2F17HPrgvb%2FO8a0wwz%2BNvPSXHL4M%2Fdzi4U4alVNc3Tu1mIGrMIVrRdzFRARHTZiF5F26ObBSp7JnhhSx90Ie6bHsrry30MgW0fEeML2QlLCmZVluUpP%2FCEyl196i9rOWYEL22vWDMpZC4oYnWzuHV%2Fr0SnpuRB%2FKH1LSERjP3%2FiuUd8nMzb2aBa%2BAJQcxVy3OwHyQKoMUR4tcjCKe41dQlnjMmedGB8oV8fn74EHFGBjJm%2FdkmLEk5%2FoFMpKcQ6LRTHPW%2FK%2B9YOC2eq%2FYYRNeeZwIDglFadG%2FdR6IQpxtYv%2BXsxyXajr2d1jTubcqvVNsgQMjaW3xFvTZiBcS8hCV4xWSMGu5XNXAEZmMEwFDO8oMMnt08QGOqUB7HWaDfOEQVWYJbBijER%2FztZkglqQPYOuyCDBK1tQC8L2k%2FwAYFDRfqekTNnbSJYnxjkCjb1ljEwkwAjLBV26UULol%2FdNbLeZGNOGZeyMDuMCaU9sc6HwrIyJ11dnAqcuDKArW78BIaSbcRg4zHSokPd6H2K4XofdVKziX6YvGZdFBYg4AsHVYlNhL9%2FizAyxDxpkMYmZhysZRKrMlLDWFTkvO8X2&X-Amz-Signature=6eeea4d669828962e014dce9fa637f7733fdc8faee0761f492a4bb0c6c37f3f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEJ2HWZA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGSh7As%2FYSl1IxMC4pJwrDBQNQeGFRwi9vBLdtORwDYNAiAbwNuiBkHhH%2Boezj5qRXr%2BqmcQPyHL3yUt5%2FyB4sJ4tCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMANcieiQXVcklbC%2B%2BKtwDXFjE0WojSE7KcjJUoQIfEj1kPJ1hjbNbUgu4SNV3Kj7xNZaCeFNOp%2FY9qcArWTiWEOoF4vya6o3%2FYN1Y3zJgb5xZpx9JqhQVYsHCkYla2KWvdHSUAomnIRW2aFZUUdaUvO7TsuBf2ZueghCum%2FHGxF6cakhQ1wrNnxtqFihb5Kgfcu0np7Y%2FC%2FpEZyt98uxFVdsiLNTfFz3C6zgspbJZSIikyZRdGh5IAOTjVGcolum00TAbCumzfspOJXe%2BZ0T4h5v2ffVsrOXMSmnv7ChPFxhhUTtKrMCsH2GdqtsnCNG6J3vNX7QnZ0L%2FQd2K6Gz5y1JPfwylvmD%2FRqkpFXeVXCl%2BqbprK4ouSSw3bcfBTyDbtDH3sPToeTs103xld5N4MTa4CWz32w6OlScgkcGfL%2B0RzatSFSyoogfzedPI8VGsr7xvdlpJLNJY84%2BUmt%2FZHSbAuiCZnBVeH0WjkLgwwhHmU57%2FpbpPuPjebays%2B3c9yTX8Bm6Pr2N8jodOXDz6yvq46gtgRD3dC4OT5%2FF8zcPJYDjKtETFkT2JsxDBR4ONlSG02ufgkRb7Ws9r2oEvCQZCL87DMSeAWNiweDAOLH%2BicwKmdzrU0fan0aPGw3dSxkK%2ByvqOT9GC2tMwgu7TxAY6pgGTyiMjKsJthPaDWFR7MRwNn9398jidwHfOX2Ym1vfX87OK0LSizt7LhIKkM8%2F7wfGVIlhPiAz0P9%2F99Y3O5d156xews5FrVj4n32z5F%2BCXQakdYw5weeqxK%2BFgZTaB2hy%2BEbUe5t9Y64j6Js23Ly0iWMmmrEV1k23ppDgOMSfZTgcCknqmemaph6N%2B5qtEbfb08tp53a%2Fmf4p8uhcsaB5sigHmoWhk&X-Amz-Signature=414a8c6673ee620541b11039fefec63d744c661ce6ab9dc7cc97ec809379a3f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2DUZYFE%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCkF3Ox9F8PBQRrsKexZWuSYU07dGAsot32gV8uKI7VswIgXI6Y7RUC3B6nSG%2FzyWex2gioNMGX1QQ4dFGS%2B0xhv%2BoqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGZ6jupLUH7DzNYAyrcA%2BxmlHCGKqjgJZ9Ef1vSBoD3wB%2F1f%2BSTU5%2F4S3PO27wQ9wD9Il%2FLqKHz1HCTx50Pvjg7FYnBpYm8YflqvJ7H4bUWImZlG43vlST%2F76Gx1gurOS6cmXiCcPGiFjYOKO37icN7jesXiibH1zjm2K8jOJ%2FEbjxmxOQ8EYb%2Ffs3DOpAWGjCJqaRs2qxEMBkfIOZhdnoAkousfQ46mKqASuMuZ%2BJQIxfgO9gZmsphgjfW0ehgbqoEvu%2BzH80Eub5HIcFRjNHF%2BCFX%2B6ryoeNwA1ex%2FgCqPpczk1qVpq%2BNCNguuJxmDefrjPoe0yP4c3oImiMltZDrk702fXsgfXb6YK%2Flf7Kf1qv%2FjbK68gjiijF6awVPch61WAx8%2FPULNWK0C4RJMRL4eFeqp50qCC4TQ5Ek7fN6nTKXw1dzI%2BWRdIyf03Q3DuXrRi5iBETNmr%2BBmMopmG0yK7l0qTl9ufj71OZTAnjO0JdwIukze48borRgjhsIQuJ%2BWF3K4cmLBiOQIJKPGlAvVeixrNXsANvc3nXaZmn%2BWe%2F%2BnPWOJJLFoR5VtOIGBFEBx3auYckgLnDD7lGFRMnKiNt7jVgc7f3Unq%2F4PGqJKS6Ud72PvAJMStX2HwMYXgMSJJ2hZmZsAGWIMM%2Ft08QGOqUBZmFaejbuRNC8DXG8W%2FW2%2ByW25X7SYw9nCMWYOOolYMk9gbvKW5D9m6GwDz2Is4xujDZWuT9ushtCg%2FM7d5A7%2FrT6XCk3lNrc6qc0%2FiSYfVx6WxpOKcVWrPq7Ozu1KChmE%2B22tKpwGhawD65A5SxnGN9tFohmDtSJOuZ8pdIxla3F%2FuMp44O0peyryljHW3SRwRqEwwdaba9dAHpLmy3RZv5eERkZ&X-Amz-Signature=dde5e9bb1f3ba6a1eb1578488f3d999ad3112727607f0cfac9c27c2d9855dc96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEJ2HWZA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGSh7As%2FYSl1IxMC4pJwrDBQNQeGFRwi9vBLdtORwDYNAiAbwNuiBkHhH%2Boezj5qRXr%2BqmcQPyHL3yUt5%2FyB4sJ4tCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMANcieiQXVcklbC%2B%2BKtwDXFjE0WojSE7KcjJUoQIfEj1kPJ1hjbNbUgu4SNV3Kj7xNZaCeFNOp%2FY9qcArWTiWEOoF4vya6o3%2FYN1Y3zJgb5xZpx9JqhQVYsHCkYla2KWvdHSUAomnIRW2aFZUUdaUvO7TsuBf2ZueghCum%2FHGxF6cakhQ1wrNnxtqFihb5Kgfcu0np7Y%2FC%2FpEZyt98uxFVdsiLNTfFz3C6zgspbJZSIikyZRdGh5IAOTjVGcolum00TAbCumzfspOJXe%2BZ0T4h5v2ffVsrOXMSmnv7ChPFxhhUTtKrMCsH2GdqtsnCNG6J3vNX7QnZ0L%2FQd2K6Gz5y1JPfwylvmD%2FRqkpFXeVXCl%2BqbprK4ouSSw3bcfBTyDbtDH3sPToeTs103xld5N4MTa4CWz32w6OlScgkcGfL%2B0RzatSFSyoogfzedPI8VGsr7xvdlpJLNJY84%2BUmt%2FZHSbAuiCZnBVeH0WjkLgwwhHmU57%2FpbpPuPjebays%2B3c9yTX8Bm6Pr2N8jodOXDz6yvq46gtgRD3dC4OT5%2FF8zcPJYDjKtETFkT2JsxDBR4ONlSG02ufgkRb7Ws9r2oEvCQZCL87DMSeAWNiweDAOLH%2BicwKmdzrU0fan0aPGw3dSxkK%2ByvqOT9GC2tMwgu7TxAY6pgGTyiMjKsJthPaDWFR7MRwNn9398jidwHfOX2Ym1vfX87OK0LSizt7LhIKkM8%2F7wfGVIlhPiAz0P9%2F99Y3O5d156xews5FrVj4n32z5F%2BCXQakdYw5weeqxK%2BFgZTaB2hy%2BEbUe5t9Y64j6Js23Ly0iWMmmrEV1k23ppDgOMSfZTgcCknqmemaph6N%2B5qtEbfb08tp53a%2Fmf4p8uhcsaB5sigHmoWhk&X-Amz-Signature=0af1996d84b0a24627f7e61fb7393fa54e2a138bd92c07b39185e191f5cc6b09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R22F22TL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC19nBGBrwKoXjXgDwAqAsIuOclKmrycg83XfvwFE7r6AIhAIYZHXSp3aQPweDxNuxW73iyf21QoPif15RjM7zgKQXAKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrTIPqjq4poHPANT0q3AO6rDMVrTAxsTKjjyDah%2FGbncTzBJgRAdJhlauTAn1fJH5rDEL6E9WzIdm4qkiDM7Kp4GzBCGH%2FFjPXAC4vNU68N3hgocRNHK9FizWZcpPLWTfJpVfqN2CKzFiqEjeHKFwMwHnHtQ8EJVj8B0GsJskq74AEzC0FrYQczVpfLHRIv%2F5Vh77W5uO%2Bz2%2BwF0C9PRMaiNO7BPKFvj1Slze0J%2BrI93BAruXd%2Ba4aEb8OjuSk3US6sqRtuAQhAxS9nFdanZJpJbAmaJc4%2BQNxdo%2BO36TcK0XoG4XELPQmJjKgO5jNc28TJqBVrjgXSGC7xQIPqR8zvGm78RocMNG9aO75GsOpW8Is4kLWUuq7nfwfV57CRDC9miywN3B1YSaMd10FE7s%2F0pXrlNXLPdXtV5Bk%2FK1v9oZUoQqXQGt1igLd6fBs1lrvQ8JaeC2g3TdAEy5Be8GqcVZVrhVPR8TBIE2TYr4m07BjoYoSguzea4GHcx04cUfNRWSNHDAa7aMNI6MXmIzDrB4mAuXAMBcslEeGC5NkagN0VQb%2FEnpvKS%2FS9mA3QFjRSZq76lSORzIyn9fAuNkrxwWHIE0V9iTBgqgDD5idWXFp30d8iQE9mADZ1XA4u2lIwvifdozS0sixFTCc7tPEBjqkAROmI4btZ0b1afSfEk5owX3LtiSId6w1e9iavana4gf9m%2FPt%2FZKJvZICMnusxIT8HWyhSf9JBo%2B0kpdegL7Lc2FI14sdqjQOkhfR6cjOkz6AeWDNKCSCTDZW%2FhboH88mKhGb7Hfbxgey4E51gNmXBxGi0Mz1VevKDGwOGaCiUDqywOH3Y0mnfkgDvRzJeeazq9UrMfuokxYTIehNLTICwryU8zG1&X-Amz-Signature=f25ee5ea07219625a14d7e9558e60f6ac6a48a98fe1ac10de9fbad0135d998be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEJ2HWZA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGSh7As%2FYSl1IxMC4pJwrDBQNQeGFRwi9vBLdtORwDYNAiAbwNuiBkHhH%2Boezj5qRXr%2BqmcQPyHL3yUt5%2FyB4sJ4tCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMANcieiQXVcklbC%2B%2BKtwDXFjE0WojSE7KcjJUoQIfEj1kPJ1hjbNbUgu4SNV3Kj7xNZaCeFNOp%2FY9qcArWTiWEOoF4vya6o3%2FYN1Y3zJgb5xZpx9JqhQVYsHCkYla2KWvdHSUAomnIRW2aFZUUdaUvO7TsuBf2ZueghCum%2FHGxF6cakhQ1wrNnxtqFihb5Kgfcu0np7Y%2FC%2FpEZyt98uxFVdsiLNTfFz3C6zgspbJZSIikyZRdGh5IAOTjVGcolum00TAbCumzfspOJXe%2BZ0T4h5v2ffVsrOXMSmnv7ChPFxhhUTtKrMCsH2GdqtsnCNG6J3vNX7QnZ0L%2FQd2K6Gz5y1JPfwylvmD%2FRqkpFXeVXCl%2BqbprK4ouSSw3bcfBTyDbtDH3sPToeTs103xld5N4MTa4CWz32w6OlScgkcGfL%2B0RzatSFSyoogfzedPI8VGsr7xvdlpJLNJY84%2BUmt%2FZHSbAuiCZnBVeH0WjkLgwwhHmU57%2FpbpPuPjebays%2B3c9yTX8Bm6Pr2N8jodOXDz6yvq46gtgRD3dC4OT5%2FF8zcPJYDjKtETFkT2JsxDBR4ONlSG02ufgkRb7Ws9r2oEvCQZCL87DMSeAWNiweDAOLH%2BicwKmdzrU0fan0aPGw3dSxkK%2ByvqOT9GC2tMwgu7TxAY6pgGTyiMjKsJthPaDWFR7MRwNn9398jidwHfOX2Ym1vfX87OK0LSizt7LhIKkM8%2F7wfGVIlhPiAz0P9%2F99Y3O5d156xews5FrVj4n32z5F%2BCXQakdYw5weeqxK%2BFgZTaB2hy%2BEbUe5t9Y64j6Js23Ly0iWMmmrEV1k23ppDgOMSfZTgcCknqmemaph6N%2B5qtEbfb08tp53a%2Fmf4p8uhcsaB5sigHmoWhk&X-Amz-Signature=a4ed48b0842de4eb5795bb441962c2e04f9203cbb1a7c72076621c21a8c81cee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UITGBZC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCuSRjQwfiMyi%2BzY%2FWkCbnBuJHbSEGF0rii2RlTXep0owIgUa0%2FC3efEtrwZ4Ps033Z3UUcHd8W6T6QApdpUm%2BWGMEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVJmDjgtzzSJUYbFCrcA88GnzPYGW7TR7b7FjnAAq6OG59Pp71vHfeHMOk2apQdPMcv%2Bi8xA7hiPBxXgPhLXoS6UTL80IzpMaIMddb3FDx6q2LRNOKqETUqkT5Rx%2F%2BVq4xAxYFScmkuau%2BH3USoTcO4RMMqwU2nXPto%2B8ycjp%2F%2F0RWn8%2BZ5%2BSpF285NZk31qwtgqSk7AKHKiTJF5Hx%2FoXC6cYnLzlDPHbiq9jwWMUyXpjrvU5hBjIEEUXkAeyqJLqi3hOZnjZW3Oixe5Avu%2B8%2FSYeFrqs88rrqW5xznEQ6rG2cX3kJkv6uzcvgXPI24%2F2amqN5niSVLFajlh5GETGY4KsLuq%2BBGvGNfwkJcjBPXNIybBeqgsJWdsdSG7DLxn65STQfyz4FV4QSJN7EmlKeiDn9piGl6ti7UT6nV8%2BTaJsPDxw2v1wveuV5xacJHh%2BG%2FZJ9cJOlAlIfqx6aRmp13yd%2Fi%2BRY2%2F7VLcmf%2Bd1tUONcZgEFp204YcMa901OVxYtfUAqBcY2PkMTq3Gt7R5DDTI8LqCYi1SC8pHgVqVeN0Qv8GEQ4B7uPcF0ZL2FDmTVNhenSGyYsiInR7Sdh6cMpRv2rLRDzC7Gl3VEVuj3ZGyHGqCZ%2B%2FiFwPv%2FS7NvXRQ%2FvB1CKzPzmclxDMOLt08QGOqUB7vLw55uDi65d%2BNWHMg8LingGToC6vI1PRmsmG4Q1DKkA%2BzClNNvvTyt%2F%2BDYoxOUnG5J7f0LBAycs%2BxIvFO8UQoRaB2%2FNJPnVbXJ4rP2oq7i4LhSRAwx3%2FKKp67FJUNzr%2FgCBv6U5VpZPqPOVgR3zueyEEAiEipPSt8IprPNP%2B8ekhrkmkHaGpzngHqXnmpdE%2B45QlyzZEFrfRBoJ%2B%2BDYZy%2F%2Fcd8s&X-Amz-Signature=29e18d4695e10261948b74f829888dd6196d987fe7888f28486a1d26b8e26599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEJ2HWZA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGSh7As%2FYSl1IxMC4pJwrDBQNQeGFRwi9vBLdtORwDYNAiAbwNuiBkHhH%2Boezj5qRXr%2BqmcQPyHL3yUt5%2FyB4sJ4tCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMANcieiQXVcklbC%2B%2BKtwDXFjE0WojSE7KcjJUoQIfEj1kPJ1hjbNbUgu4SNV3Kj7xNZaCeFNOp%2FY9qcArWTiWEOoF4vya6o3%2FYN1Y3zJgb5xZpx9JqhQVYsHCkYla2KWvdHSUAomnIRW2aFZUUdaUvO7TsuBf2ZueghCum%2FHGxF6cakhQ1wrNnxtqFihb5Kgfcu0np7Y%2FC%2FpEZyt98uxFVdsiLNTfFz3C6zgspbJZSIikyZRdGh5IAOTjVGcolum00TAbCumzfspOJXe%2BZ0T4h5v2ffVsrOXMSmnv7ChPFxhhUTtKrMCsH2GdqtsnCNG6J3vNX7QnZ0L%2FQd2K6Gz5y1JPfwylvmD%2FRqkpFXeVXCl%2BqbprK4ouSSw3bcfBTyDbtDH3sPToeTs103xld5N4MTa4CWz32w6OlScgkcGfL%2B0RzatSFSyoogfzedPI8VGsr7xvdlpJLNJY84%2BUmt%2FZHSbAuiCZnBVeH0WjkLgwwhHmU57%2FpbpPuPjebays%2B3c9yTX8Bm6Pr2N8jodOXDz6yvq46gtgRD3dC4OT5%2FF8zcPJYDjKtETFkT2JsxDBR4ONlSG02ufgkRb7Ws9r2oEvCQZCL87DMSeAWNiweDAOLH%2BicwKmdzrU0fan0aPGw3dSxkK%2ByvqOT9GC2tMwgu7TxAY6pgGTyiMjKsJthPaDWFR7MRwNn9398jidwHfOX2Ym1vfX87OK0LSizt7LhIKkM8%2F7wfGVIlhPiAz0P9%2F99Y3O5d156xews5FrVj4n32z5F%2BCXQakdYw5weeqxK%2BFgZTaB2hy%2BEbUe5t9Y64j6Js23Ly0iWMmmrEV1k23ppDgOMSfZTgcCknqmemaph6N%2B5qtEbfb08tp53a%2Fmf4p8uhcsaB5sigHmoWhk&X-Amz-Signature=145b86d5981f522a87d446f5ca8c53a9b382a990f76bee40c3b411df4ff7c29e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CDW5425%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCev7cI77VrgRZNbZKK9WplGyAj7NK%2FnMS%2FLzj8XUCinwIgNCLypbwBMTZmshsHrjEcMrOo7CK6bTLPe53jpJyptTsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGOOnjsD5I0RtPh7yrcA3UbcU%2BMgVya%2FjXWAMen2J2v8EeIpJUOJK8eYMIpH9%2BlH0u9ZaHhvoMpmIyT66TyZ7RKMBiccXGPBHEshYqrOy9B8b3dv0hCPe1LWlK6VEIK7B4Am4jPPE1fdfyoZciAjsMlPwrduvo8GSmuaxF64ZiPjWzQ1jz%2Bf3Xx25irrAZ4Ndq%2FBhc1zNyYw1Notmpmbi4tP6QZJQQcm1W0JrCy%2FvZz97VC5babkAbRst1UGllfzhoFSmRjX6%2BMrEmLctm7yn5m2orJCZcdR2r9R3avXxVvonLkHvw857wmppUYP9hqCH%2BB%2BooY%2FY9rh8E24NTbXk50ZI5oXpu4JO%2Bndqb0IgUyQgedZfA%2FFQmy6WRu%2Ft2kzJyS7Q2ZtmfTHuAh3vGotZkk9CN5S7Gnh%2BLmCH6JUAb2oyFWww1jYrt5V7Bgevx3R0Y%2FoLP0Wxwmtj83uyE6RgdnrWPE65pZX9Vb%2BKguq70PGQXmQahXYxW7iyoY0MkD0Ae3MIsSjUPnGHgIuF5%2BkWogDRfgE5XStnS6%2FAYQ7qMIja51W10gQ5iLRDTRlJXI7FPcVqyLciuxJM%2FBTHqfily7EES7SB8HUwu4vQWEgN%2By5UoYZtbYS3dwZFlBN9qQhHr3H3kC%2FeoO9ZrRMLXu08QGOqUB55FaP8655QkHQsrEPVBIKRCWASotnGX3YLiPh00j8NPKkzvqDnkHMjp%2Fqu%2FZq1E9aOPfAsnbhDkTh7gE0rc%2BVOD9qIuqExlHG1R4hY6g%2BidMyQ2Fcv0oi3EVmhxOhMYzoIC%2BVS1bYrlojeYTJ5ZvFm1u1oxiB%2BdXb6miK018c7UWdSbp0dLyuKCZSosebyAVX1CwH7pGjqKqPwW6wCRAHltNor69&X-Amz-Signature=330d55ac0de430723505e29dd1e87e26ea64ef50d12083800f9b359e5723c61c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656XELTA7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDv4K6fCVgtNKOVH0odHZy4fL0k6LcIo3e%2BjobkwW%2Bu6QIgS4Guqz%2FCeVap08PLliEVUI6ORhkow%2FJ%2Fggka7LPmFN8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4CCiiAQNBi3unk1yrcA2J%2Bq6HJgikPUsHa4mfeBLG2Rwp75Eo1ofQCylH2%2FJtYiVlqro6XF7rGlgQgCyDi2tK0mUJRFXMiz8ifEmTWTEeaSdvPbatsYVzPjIzoyF87kWlPcvnzmuTCOo98K9VE76s5RUWahQNGPAZ35kwtrj96wk9vWGBWV2d7dWMSrJ1uqf%2FfYCi%2BgFFoR4FfqRo9MsL2kaoKcBKwbbLHROcuxkkUWDpSPL5DuWucQSybtdBnw93oFV2GFtq%2B6Afat39pKAYaqOtw2LscEkHB6%2BvLYAOKwfTCB9jvnfbyfb7mZN0waDFXBzJI%2FcdzhvmKJ0QIX%2F09tP0JHrQp%2FoRRT05p8c71OEmlffqzzqFzxEnusXKQEojyVto5dz94%2FG9%2BaNUAKQ6PXeH7%2BGPVZqx9kQPnsRXDnNc4nUdsD%2B9aMqzDD6nXGIk4%2FitikHhOkeCojuRUkQiDGzMHcGWsnrD%2BCZY3vv1fTelzjUkfrpPS78ioDyc16%2FAjbfCEJi6j1ISO0ZfFQl01kt2MA0uboC5zKPJqzKBOurdI1E4SANZd5nRWO3X2eNlQa94ZK4%2B6ms%2Bl8Fz74LI%2Bgl9O0tHU6Sc8enYw4zjK1gnXSxTmpK%2Br8NF9SxIxNU0ahpF%2B0Ns6JZMjMNLu08QGOqUBl5XhUjZpfKHZfMufurZKD4b4mg1JYRYs1lufvTkXj3kf73Cxi1F8jUf%2BpFYOJ4JUNxxHSwVR%2B7%2BBuobur5GLsNzgHI24EhZ7%2B5BRSWwR42oFcEdIDG6WI9Q1vxceocpuRwcCAqu8xqbVAYmgjJqTBB31IXMn1kryDQ2dWpIo04UgL5D0tgrs2p9OHxCKoc%2Bf%2BDvkWLHmfUjF8Bo4GOASWDAFwhNS&X-Amz-Signature=463977e95a3732d4860476560761681b42a50d5f9dadc22842d44c4f33ad77a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AMYN6EQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIBuzF6IC%2FscerNQ14Yu%2FQGi3wDtXxb3nJg6BptFPS6mTAiEAsmKJVTYiuj8PQgFAoH2YdquOUCI7RgovgSoooE4O6TAqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIaoUF17DmGclLcW9CrcAxaTaQf5xW8COhB6PF%2BwB77YVA8vLm%2BqXfEr3FEQeYyy6Dzudv1lM9sTpoRsgSOn%2Bp%2FvhMDyMXOGW7gYF6Xzw2wHqHBKyi3msuXmVieJnunDm22nSEH5LPBpSHBL69tDgnk6BdRn1Ogp0DotZtvOj%2F56Xm9ylrJihy4BpRIm6V2xujTqIYjBezPavBJWiEz2ABd5WKq1aI8X8%2FYOH6MmPqnL0K5RGsIVWn9cH08fAwmYywoHLWy0PK3R8sWjIeVyDpR%2BGm7yLpOxwNuo8HcTaH2dFT%2BMw1hjCzDxs3%2B5vO3IziVJwiRVLMprqD7l8%2BDOTwR2OApuqbNgz6OQGVZzF71Zy1bu9lSi9Ui0AMcJhDdRHj39I2zm87j4hzii9k6Zh%2BcCK9UURRrDybJErVP73%2BuWXNFrxx6jJT0WeP6sRzdKO4FT5zbfH66eAIp27l3v9K%2FCt3%2BrjgOB8UYXShEcp0w8M7aIXrGNeNjuV3Ney1g8Te1MuLG9pNzmtqg1Ap%2BgutMZEykh%2BcpLwOD6ZAB7o%2BxpKkLrZxFUZr61Jg4IcypVma25r9cl5aSXBvgNFjz8N7GaLiutj4cSRdKcWgmO%2F1t8x9eJrhWc1y%2Bd%2BHO3oJasiTC%2FDEA4CUTZEf1uMNvt08QGOqUBP6TFvrfHmQSdoCtEF8YJWthHpLiJ1Nb%2BiOaLGasylmk0KSgtHdBOFyYwnzOYfhPwoKE1OjvVw9vEF86V4KAtd734rd3oJlGXCOTS3NTcOr3dtopXW9z1evodjVeUVJhA%2BU3JHN2CI0pFHacVU%2BkHGEzorje5Rxw8fEIgBe2RhAALtcSBWh6%2BgJwoBGAVINu52tsQGume2m400Bm5ztMVrUJu6UtQ&X-Amz-Signature=c8947fdc971ee8ac29c984eecdeaab6576c37495d513db935a59b6e4c06b58ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YMKSGWY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIBy6Y32ehXCAkGRWre9asoNy0vJuV%2B1QNHSOCHj6gPTeAiBy4d1cYMUZVFfZvXYngB2MqZXHRITtptPK99kCJBHY3iqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtka1%2FzvlbKqjlgc4KtwDqyuUY3prvbzb53Bge3MQ44D77FA2%2BlVnFbafLi70CWzISjkN%2BZ96Xs3Ki%2FlA7sBLVdRUsIInoq1gjlde%2Fvnd1L5oMLOUdn2OcIOJ4Js8Bwoxl4tzC%2FeTbJh%2FTaF3QdIgCGjv4u9ICQ88jxQ9drbAmHGtPsqTRk%2BhbtNpyIVnIi%2FK3uqS9bkRECZPSXfjWeHzfFRYpmxTIn%2BdRUfR%2FimWpvYshUV8gKhZ51LQvmNoghYr1V8evQoW0xFTBIgoo0reAH4DU792b5InL2481ZRHk4K8QZQHxv06xYot2r7ax96d9g5i5kENSfbG9zI25XoK6jOMflS0W8bTN2lbHHIm6xxX4Z250cwd1Y56NoOTvntPC7o%2B9MrMbxyGbca2nUA6bMACAtOsGBYwEz7QcKYtIEuCUoaZy%2F3hcd8p9BiMg78JC1tH1tSXJUt0EDASAHSy9indC7%2BCF8kC9Ndv85vFa7Iu14l3UYusgFAYKyaLvRakohGp11u1RdWsL7rwY8%2BSbg%2FvyGj6MOJzwQeGGZCVLX22tRtEJUtIO1oYzQR%2BeXhBrYZeuMHCZqS9x9f1aMadYQkVvA9CbL7hFYvJN77l2Jx8adGggoqBMiQUq0Y7WK3Z4hLPuq%2BwRZFPEVkwxO7TxAY6pgGvq77u2F8CZRa31wfPTWyriZF6%2Fyb7JkhPsOeFJG4qxpIhA1qbqYnsgL8eWQ2CbSRM1DT7n0LrEyV37AqWhzpI4AJYJCJoCFuzkz1SmzPjNvqFqun4SpKRdHtlpx83exrbOxtDlGHqAkVGVTBcJExMfcFeTcczO3fC2xR7sFYgWoY%2FOAY5crErOuCfOUnHnyMyM2sF%2By018DRG6kykVazFxKNjUjyA&X-Amz-Signature=b56465c6ab62120efea9c6062c5f60288faf953b80b4b949dd7e3e0426ec8cce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTZM6S5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDVNFytCZykUqr5XUER8gPCEw2%2BhJ58AE0RrqkB0x%2FGXgIhAJDeRdOMpjbS%2Bna4P6FsjufsRwJ6otS5B5Ki64vQ0zCCKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpFhTEwEvL4I97MXMq3AMizOPIL2fA9TI4INIrFUaB%2FxOjvR0UX%2FniSqBNo%2BCb%2BuD0%2BFTIUI3YKUDS4nUR0hKz94XfZMddmNa9sxq6C%2BEnBteMmmz9SnBWwWpD0S5KSYK0jsYE4w12DHfR%2FU19XdMUTKPZw%2FaBfZS%2B%2BNFQoeY6bN%2FjkfoihzJeyab0ozn5wWDQmz0%2F3UqEkLRCmdZaTiiwo9s%2B7H0WhRf7gL0lvgyU5EWrccJuymBg3qA1oGpbh7b1FlNGu9mmWVUJLPuE6X%2BL%2FPpV36dAjkkKWtnqEIVXaPy4vieCvWL190auMPpstSuntxLD8NjQnM6zpdom1tkbQkmvHfoYu%2FovUcBMLVknF0W4zJ2XZsHRhgIr57h6IMXq%2BSmaEAuuAE%2BSAt1n79Qp7JhLO2Me0oizrtkCuxGPmmD9bDGOx%2B2mPc0xw1uQ9DTWVybFgMk7%2B1n0B0xiRJOK2RtTfEwK36d2beIHIWnHI5ghXPOuc0o9MoBkCREjyI0xeFgqdR8QZs7HFNo9AAwTe9yOChT0KF1op8kVERr8q6tlPV%2BZ0OvgviBQRuQp%2Fu%2FXtXjwOH%2FrNFI%2F1yBtYNa5Cv6w3yVAv%2BwfFG743xqsURDtErnIo6RzM8wBA3kWH9H%2FY7OBD6PBmPJeSDDJ7dPEBjqkAQh7bRDb9W8mKpj3y0n2gXK14dw38yv0505Ae3I6tXHAfS4oUl3yKMjlov7JYCuiQzUbHouw8ItSjprztGV2GWVEswtAojNGj8dkUMcfKYv4ebUyPmNVuWgthJcn9GUlGfH8V8lz230oTPTsCh9P4IzwRIH00BN2vgPP%2BRb6TakUAvALd05GFJmPkSmOtT5uwxPovUr0rxZW9%2BQ9TztH3DrqcpDE&X-Amz-Signature=6ebfa488acdf6104ebb6b7dec56e7c6b4ed324437dab5e12fbbf05a2414e7634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEJ2HWZA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGSh7As%2FYSl1IxMC4pJwrDBQNQeGFRwi9vBLdtORwDYNAiAbwNuiBkHhH%2Boezj5qRXr%2BqmcQPyHL3yUt5%2FyB4sJ4tCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMANcieiQXVcklbC%2B%2BKtwDXFjE0WojSE7KcjJUoQIfEj1kPJ1hjbNbUgu4SNV3Kj7xNZaCeFNOp%2FY9qcArWTiWEOoF4vya6o3%2FYN1Y3zJgb5xZpx9JqhQVYsHCkYla2KWvdHSUAomnIRW2aFZUUdaUvO7TsuBf2ZueghCum%2FHGxF6cakhQ1wrNnxtqFihb5Kgfcu0np7Y%2FC%2FpEZyt98uxFVdsiLNTfFz3C6zgspbJZSIikyZRdGh5IAOTjVGcolum00TAbCumzfspOJXe%2BZ0T4h5v2ffVsrOXMSmnv7ChPFxhhUTtKrMCsH2GdqtsnCNG6J3vNX7QnZ0L%2FQd2K6Gz5y1JPfwylvmD%2FRqkpFXeVXCl%2BqbprK4ouSSw3bcfBTyDbtDH3sPToeTs103xld5N4MTa4CWz32w6OlScgkcGfL%2B0RzatSFSyoogfzedPI8VGsr7xvdlpJLNJY84%2BUmt%2FZHSbAuiCZnBVeH0WjkLgwwhHmU57%2FpbpPuPjebays%2B3c9yTX8Bm6Pr2N8jodOXDz6yvq46gtgRD3dC4OT5%2FF8zcPJYDjKtETFkT2JsxDBR4ONlSG02ufgkRb7Ws9r2oEvCQZCL87DMSeAWNiweDAOLH%2BicwKmdzrU0fan0aPGw3dSxkK%2ByvqOT9GC2tMwgu7TxAY6pgGTyiMjKsJthPaDWFR7MRwNn9398jidwHfOX2Ym1vfX87OK0LSizt7LhIKkM8%2F7wfGVIlhPiAz0P9%2F99Y3O5d156xews5FrVj4n32z5F%2BCXQakdYw5weeqxK%2BFgZTaB2hy%2BEbUe5t9Y64j6Js23Ly0iWMmmrEV1k23ppDgOMSfZTgcCknqmemaph6N%2B5qtEbfb08tp53a%2Fmf4p8uhcsaB5sigHmoWhk&X-Amz-Signature=1a104fcb5efb72f7a31a200f009aa222c6839a1be59d2fc733cdef08b0343b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEJ2HWZA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGSh7As%2FYSl1IxMC4pJwrDBQNQeGFRwi9vBLdtORwDYNAiAbwNuiBkHhH%2Boezj5qRXr%2BqmcQPyHL3yUt5%2FyB4sJ4tCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMANcieiQXVcklbC%2B%2BKtwDXFjE0WojSE7KcjJUoQIfEj1kPJ1hjbNbUgu4SNV3Kj7xNZaCeFNOp%2FY9qcArWTiWEOoF4vya6o3%2FYN1Y3zJgb5xZpx9JqhQVYsHCkYla2KWvdHSUAomnIRW2aFZUUdaUvO7TsuBf2ZueghCum%2FHGxF6cakhQ1wrNnxtqFihb5Kgfcu0np7Y%2FC%2FpEZyt98uxFVdsiLNTfFz3C6zgspbJZSIikyZRdGh5IAOTjVGcolum00TAbCumzfspOJXe%2BZ0T4h5v2ffVsrOXMSmnv7ChPFxhhUTtKrMCsH2GdqtsnCNG6J3vNX7QnZ0L%2FQd2K6Gz5y1JPfwylvmD%2FRqkpFXeVXCl%2BqbprK4ouSSw3bcfBTyDbtDH3sPToeTs103xld5N4MTa4CWz32w6OlScgkcGfL%2B0RzatSFSyoogfzedPI8VGsr7xvdlpJLNJY84%2BUmt%2FZHSbAuiCZnBVeH0WjkLgwwhHmU57%2FpbpPuPjebays%2B3c9yTX8Bm6Pr2N8jodOXDz6yvq46gtgRD3dC4OT5%2FF8zcPJYDjKtETFkT2JsxDBR4ONlSG02ufgkRb7Ws9r2oEvCQZCL87DMSeAWNiweDAOLH%2BicwKmdzrU0fan0aPGw3dSxkK%2ByvqOT9GC2tMwgu7TxAY6pgGTyiMjKsJthPaDWFR7MRwNn9398jidwHfOX2Ym1vfX87OK0LSizt7LhIKkM8%2F7wfGVIlhPiAz0P9%2F99Y3O5d156xews5FrVj4n32z5F%2BCXQakdYw5weeqxK%2BFgZTaB2hy%2BEbUe5t9Y64j6Js23Ly0iWMmmrEV1k23ppDgOMSfZTgcCknqmemaph6N%2B5qtEbfb08tp53a%2Fmf4p8uhcsaB5sigHmoWhk&X-Amz-Signature=3ab53716a2e993dd283b03caffef6e958ffb2920bb5a19823c0b16d7a135b19c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4Y7JNW6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIAYPKmgdQU7m5CmUjoEW8brGdV3kUKOiQisZ%2Bj7wtXSEAiEA19uFy3T3lT1IsAargVawMHtARPChYYq6dS0swAz5XpQqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFoS7HVNnlL9hG10ircA6Ly2gJoyZjcWQSvgSXy02xTbUNXm85XgNhOsrLnrKaufdZeGgHnnKBkMm58ez131GXeUWnNjcfehKaJ%2FsnG9noDVzCJOvOP2Km9rFEpWT8V3BHHkvkoWvpMFKX3IcwtT6MbzPiJy3Xj2QH42NQOxcod8lvGbsAA%2BS%2B4brYAlQzA%2FDkoYQU9nt%2FbqTovwM0Os5gW3G45rROsERqmMgOUNFvUeU0HdFIBbIl7eT%2FdOzkVyeRkj0kLf0rNpgr%2F1QmVX3D4j986Fg7mjGCsI7y3%2Fl9HQN%2FcGCm%2FBRq6jgueWlNshCaFLvb1x8UPmTqrwu3NKPAkCJeiAKzAaCsykNRy%2FPcA0znRwSxi6qfZ2TigW9pW2KLKEceQKJeS6FpnSj79ZdCN0kR1dNR6Museu8q0L70glY77Ufs%2BmJ0IQMdU7QBxB%2BVUnPewq34q%2FnICtCGcvnYMM%2BHijC66Q0EmLP%2BN0eNHOHEMDZMJx1rYD6MeR3PRje0CwnMOSnwPgwu0Y6JhggmWr0qypmNwEjh49g3nOvVpRfijGofO0bEx2Zjelgkt3GVVr20oxAdlLAxeS2PilG6XtX8VTgu1Yi34KJkPJ6wtLN7CrBQyfS%2BTNOx32Mto9bLMvKGd9dSuaIZPMJnu08QGOqUBZGmpgptcgoUQ49hIhhE4TtS6HUpTX%2FoBY6H7P78kBK0Ox39SsECGV%2B6bdrT4VPkEHoI7Cj4KEV%2F7C8s%2F1n2iQVya%2BbbeWkITSXiYqtKfTKWVGwZK3s1XBcLO6%2Fz1zX%2BySIZ2Nx06gwjXqD1ind8odjTRTlxKjYNmuoTCl34CVD1UPrgLP%2FgxLLtvlxBQTqSNFyqTEtowKXGBf6TKxfdizYfQlYgH&X-Amz-Signature=12109d07d6759a75550aa3d5a8fc7599b30e31dbf8ae394fa26be3334ab229af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4Y7JNW6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIAYPKmgdQU7m5CmUjoEW8brGdV3kUKOiQisZ%2Bj7wtXSEAiEA19uFy3T3lT1IsAargVawMHtARPChYYq6dS0swAz5XpQqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFoS7HVNnlL9hG10ircA6Ly2gJoyZjcWQSvgSXy02xTbUNXm85XgNhOsrLnrKaufdZeGgHnnKBkMm58ez131GXeUWnNjcfehKaJ%2FsnG9noDVzCJOvOP2Km9rFEpWT8V3BHHkvkoWvpMFKX3IcwtT6MbzPiJy3Xj2QH42NQOxcod8lvGbsAA%2BS%2B4brYAlQzA%2FDkoYQU9nt%2FbqTovwM0Os5gW3G45rROsERqmMgOUNFvUeU0HdFIBbIl7eT%2FdOzkVyeRkj0kLf0rNpgr%2F1QmVX3D4j986Fg7mjGCsI7y3%2Fl9HQN%2FcGCm%2FBRq6jgueWlNshCaFLvb1x8UPmTqrwu3NKPAkCJeiAKzAaCsykNRy%2FPcA0znRwSxi6qfZ2TigW9pW2KLKEceQKJeS6FpnSj79ZdCN0kR1dNR6Museu8q0L70glY77Ufs%2BmJ0IQMdU7QBxB%2BVUnPewq34q%2FnICtCGcvnYMM%2BHijC66Q0EmLP%2BN0eNHOHEMDZMJx1rYD6MeR3PRje0CwnMOSnwPgwu0Y6JhggmWr0qypmNwEjh49g3nOvVpRfijGofO0bEx2Zjelgkt3GVVr20oxAdlLAxeS2PilG6XtX8VTgu1Yi34KJkPJ6wtLN7CrBQyfS%2BTNOx32Mto9bLMvKGd9dSuaIZPMJnu08QGOqUBZGmpgptcgoUQ49hIhhE4TtS6HUpTX%2FoBY6H7P78kBK0Ox39SsECGV%2B6bdrT4VPkEHoI7Cj4KEV%2F7C8s%2F1n2iQVya%2BbbeWkITSXiYqtKfTKWVGwZK3s1XBcLO6%2Fz1zX%2BySIZ2Nx06gwjXqD1ind8odjTRTlxKjYNmuoTCl34CVD1UPrgLP%2FgxLLtvlxBQTqSNFyqTEtowKXGBf6TKxfdizYfQlYgH&X-Amz-Signature=d675dc674b859ed1556c48617f879f50fa34ef3edeed3f39d8610de4ac1cb0ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4Y7JNW6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIAYPKmgdQU7m5CmUjoEW8brGdV3kUKOiQisZ%2Bj7wtXSEAiEA19uFy3T3lT1IsAargVawMHtARPChYYq6dS0swAz5XpQqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFoS7HVNnlL9hG10ircA6Ly2gJoyZjcWQSvgSXy02xTbUNXm85XgNhOsrLnrKaufdZeGgHnnKBkMm58ez131GXeUWnNjcfehKaJ%2FsnG9noDVzCJOvOP2Km9rFEpWT8V3BHHkvkoWvpMFKX3IcwtT6MbzPiJy3Xj2QH42NQOxcod8lvGbsAA%2BS%2B4brYAlQzA%2FDkoYQU9nt%2FbqTovwM0Os5gW3G45rROsERqmMgOUNFvUeU0HdFIBbIl7eT%2FdOzkVyeRkj0kLf0rNpgr%2F1QmVX3D4j986Fg7mjGCsI7y3%2Fl9HQN%2FcGCm%2FBRq6jgueWlNshCaFLvb1x8UPmTqrwu3NKPAkCJeiAKzAaCsykNRy%2FPcA0znRwSxi6qfZ2TigW9pW2KLKEceQKJeS6FpnSj79ZdCN0kR1dNR6Museu8q0L70glY77Ufs%2BmJ0IQMdU7QBxB%2BVUnPewq34q%2FnICtCGcvnYMM%2BHijC66Q0EmLP%2BN0eNHOHEMDZMJx1rYD6MeR3PRje0CwnMOSnwPgwu0Y6JhggmWr0qypmNwEjh49g3nOvVpRfijGofO0bEx2Zjelgkt3GVVr20oxAdlLAxeS2PilG6XtX8VTgu1Yi34KJkPJ6wtLN7CrBQyfS%2BTNOx32Mto9bLMvKGd9dSuaIZPMJnu08QGOqUBZGmpgptcgoUQ49hIhhE4TtS6HUpTX%2FoBY6H7P78kBK0Ox39SsECGV%2B6bdrT4VPkEHoI7Cj4KEV%2F7C8s%2F1n2iQVya%2BbbeWkITSXiYqtKfTKWVGwZK3s1XBcLO6%2Fz1zX%2BySIZ2Nx06gwjXqD1ind8odjTRTlxKjYNmuoTCl34CVD1UPrgLP%2FgxLLtvlxBQTqSNFyqTEtowKXGBf6TKxfdizYfQlYgH&X-Amz-Signature=016bdff3bfe3036933ac5cc8c7f532abe487d315aeed9ef37030e497ed306742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4Y7JNW6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIAYPKmgdQU7m5CmUjoEW8brGdV3kUKOiQisZ%2Bj7wtXSEAiEA19uFy3T3lT1IsAargVawMHtARPChYYq6dS0swAz5XpQqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFoS7HVNnlL9hG10ircA6Ly2gJoyZjcWQSvgSXy02xTbUNXm85XgNhOsrLnrKaufdZeGgHnnKBkMm58ez131GXeUWnNjcfehKaJ%2FsnG9noDVzCJOvOP2Km9rFEpWT8V3BHHkvkoWvpMFKX3IcwtT6MbzPiJy3Xj2QH42NQOxcod8lvGbsAA%2BS%2B4brYAlQzA%2FDkoYQU9nt%2FbqTovwM0Os5gW3G45rROsERqmMgOUNFvUeU0HdFIBbIl7eT%2FdOzkVyeRkj0kLf0rNpgr%2F1QmVX3D4j986Fg7mjGCsI7y3%2Fl9HQN%2FcGCm%2FBRq6jgueWlNshCaFLvb1x8UPmTqrwu3NKPAkCJeiAKzAaCsykNRy%2FPcA0znRwSxi6qfZ2TigW9pW2KLKEceQKJeS6FpnSj79ZdCN0kR1dNR6Museu8q0L70glY77Ufs%2BmJ0IQMdU7QBxB%2BVUnPewq34q%2FnICtCGcvnYMM%2BHijC66Q0EmLP%2BN0eNHOHEMDZMJx1rYD6MeR3PRje0CwnMOSnwPgwu0Y6JhggmWr0qypmNwEjh49g3nOvVpRfijGofO0bEx2Zjelgkt3GVVr20oxAdlLAxeS2PilG6XtX8VTgu1Yi34KJkPJ6wtLN7CrBQyfS%2BTNOx32Mto9bLMvKGd9dSuaIZPMJnu08QGOqUBZGmpgptcgoUQ49hIhhE4TtS6HUpTX%2FoBY6H7P78kBK0Ox39SsECGV%2B6bdrT4VPkEHoI7Cj4KEV%2F7C8s%2F1n2iQVya%2BbbeWkITSXiYqtKfTKWVGwZK3s1XBcLO6%2Fz1zX%2BySIZ2Nx06gwjXqD1ind8odjTRTlxKjYNmuoTCl34CVD1UPrgLP%2FgxLLtvlxBQTqSNFyqTEtowKXGBf6TKxfdizYfQlYgH&X-Amz-Signature=d7aff3f98a4d8f8eff5911c2281de22291bee82a49df4c48df8054ed5383b2cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4Y7JNW6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIAYPKmgdQU7m5CmUjoEW8brGdV3kUKOiQisZ%2Bj7wtXSEAiEA19uFy3T3lT1IsAargVawMHtARPChYYq6dS0swAz5XpQqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFoS7HVNnlL9hG10ircA6Ly2gJoyZjcWQSvgSXy02xTbUNXm85XgNhOsrLnrKaufdZeGgHnnKBkMm58ez131GXeUWnNjcfehKaJ%2FsnG9noDVzCJOvOP2Km9rFEpWT8V3BHHkvkoWvpMFKX3IcwtT6MbzPiJy3Xj2QH42NQOxcod8lvGbsAA%2BS%2B4brYAlQzA%2FDkoYQU9nt%2FbqTovwM0Os5gW3G45rROsERqmMgOUNFvUeU0HdFIBbIl7eT%2FdOzkVyeRkj0kLf0rNpgr%2F1QmVX3D4j986Fg7mjGCsI7y3%2Fl9HQN%2FcGCm%2FBRq6jgueWlNshCaFLvb1x8UPmTqrwu3NKPAkCJeiAKzAaCsykNRy%2FPcA0znRwSxi6qfZ2TigW9pW2KLKEceQKJeS6FpnSj79ZdCN0kR1dNR6Museu8q0L70glY77Ufs%2BmJ0IQMdU7QBxB%2BVUnPewq34q%2FnICtCGcvnYMM%2BHijC66Q0EmLP%2BN0eNHOHEMDZMJx1rYD6MeR3PRje0CwnMOSnwPgwu0Y6JhggmWr0qypmNwEjh49g3nOvVpRfijGofO0bEx2Zjelgkt3GVVr20oxAdlLAxeS2PilG6XtX8VTgu1Yi34KJkPJ6wtLN7CrBQyfS%2BTNOx32Mto9bLMvKGd9dSuaIZPMJnu08QGOqUBZGmpgptcgoUQ49hIhhE4TtS6HUpTX%2FoBY6H7P78kBK0Ox39SsECGV%2B6bdrT4VPkEHoI7Cj4KEV%2F7C8s%2F1n2iQVya%2BbbeWkITSXiYqtKfTKWVGwZK3s1XBcLO6%2Fz1zX%2BySIZ2Nx06gwjXqD1ind8odjTRTlxKjYNmuoTCl34CVD1UPrgLP%2FgxLLtvlxBQTqSNFyqTEtowKXGBf6TKxfdizYfQlYgH&X-Amz-Signature=3ec3db6da7795dde5e5e653b525febfb6f31beafddc18733c27a5859ed2ae10b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4Y7JNW6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIAYPKmgdQU7m5CmUjoEW8brGdV3kUKOiQisZ%2Bj7wtXSEAiEA19uFy3T3lT1IsAargVawMHtARPChYYq6dS0swAz5XpQqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFoS7HVNnlL9hG10ircA6Ly2gJoyZjcWQSvgSXy02xTbUNXm85XgNhOsrLnrKaufdZeGgHnnKBkMm58ez131GXeUWnNjcfehKaJ%2FsnG9noDVzCJOvOP2Km9rFEpWT8V3BHHkvkoWvpMFKX3IcwtT6MbzPiJy3Xj2QH42NQOxcod8lvGbsAA%2BS%2B4brYAlQzA%2FDkoYQU9nt%2FbqTovwM0Os5gW3G45rROsERqmMgOUNFvUeU0HdFIBbIl7eT%2FdOzkVyeRkj0kLf0rNpgr%2F1QmVX3D4j986Fg7mjGCsI7y3%2Fl9HQN%2FcGCm%2FBRq6jgueWlNshCaFLvb1x8UPmTqrwu3NKPAkCJeiAKzAaCsykNRy%2FPcA0znRwSxi6qfZ2TigW9pW2KLKEceQKJeS6FpnSj79ZdCN0kR1dNR6Museu8q0L70glY77Ufs%2BmJ0IQMdU7QBxB%2BVUnPewq34q%2FnICtCGcvnYMM%2BHijC66Q0EmLP%2BN0eNHOHEMDZMJx1rYD6MeR3PRje0CwnMOSnwPgwu0Y6JhggmWr0qypmNwEjh49g3nOvVpRfijGofO0bEx2Zjelgkt3GVVr20oxAdlLAxeS2PilG6XtX8VTgu1Yi34KJkPJ6wtLN7CrBQyfS%2BTNOx32Mto9bLMvKGd9dSuaIZPMJnu08QGOqUBZGmpgptcgoUQ49hIhhE4TtS6HUpTX%2FoBY6H7P78kBK0Ox39SsECGV%2B6bdrT4VPkEHoI7Cj4KEV%2F7C8s%2F1n2iQVya%2BbbeWkITSXiYqtKfTKWVGwZK3s1XBcLO6%2Fz1zX%2BySIZ2Nx06gwjXqD1ind8odjTRTlxKjYNmuoTCl34CVD1UPrgLP%2FgxLLtvlxBQTqSNFyqTEtowKXGBf6TKxfdizYfQlYgH&X-Amz-Signature=aa8cd94c4d156e9d1342654bb911281386fc649b7956c3f0d81395d94b327e7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4Y7JNW6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIAYPKmgdQU7m5CmUjoEW8brGdV3kUKOiQisZ%2Bj7wtXSEAiEA19uFy3T3lT1IsAargVawMHtARPChYYq6dS0swAz5XpQqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFoS7HVNnlL9hG10ircA6Ly2gJoyZjcWQSvgSXy02xTbUNXm85XgNhOsrLnrKaufdZeGgHnnKBkMm58ez131GXeUWnNjcfehKaJ%2FsnG9noDVzCJOvOP2Km9rFEpWT8V3BHHkvkoWvpMFKX3IcwtT6MbzPiJy3Xj2QH42NQOxcod8lvGbsAA%2BS%2B4brYAlQzA%2FDkoYQU9nt%2FbqTovwM0Os5gW3G45rROsERqmMgOUNFvUeU0HdFIBbIl7eT%2FdOzkVyeRkj0kLf0rNpgr%2F1QmVX3D4j986Fg7mjGCsI7y3%2Fl9HQN%2FcGCm%2FBRq6jgueWlNshCaFLvb1x8UPmTqrwu3NKPAkCJeiAKzAaCsykNRy%2FPcA0znRwSxi6qfZ2TigW9pW2KLKEceQKJeS6FpnSj79ZdCN0kR1dNR6Museu8q0L70glY77Ufs%2BmJ0IQMdU7QBxB%2BVUnPewq34q%2FnICtCGcvnYMM%2BHijC66Q0EmLP%2BN0eNHOHEMDZMJx1rYD6MeR3PRje0CwnMOSnwPgwu0Y6JhggmWr0qypmNwEjh49g3nOvVpRfijGofO0bEx2Zjelgkt3GVVr20oxAdlLAxeS2PilG6XtX8VTgu1Yi34KJkPJ6wtLN7CrBQyfS%2BTNOx32Mto9bLMvKGd9dSuaIZPMJnu08QGOqUBZGmpgptcgoUQ49hIhhE4TtS6HUpTX%2FoBY6H7P78kBK0Ox39SsECGV%2B6bdrT4VPkEHoI7Cj4KEV%2F7C8s%2F1n2iQVya%2BbbeWkITSXiYqtKfTKWVGwZK3s1XBcLO6%2Fz1zX%2BySIZ2Nx06gwjXqD1ind8odjTRTlxKjYNmuoTCl34CVD1UPrgLP%2FgxLLtvlxBQTqSNFyqTEtowKXGBf6TKxfdizYfQlYgH&X-Amz-Signature=016bdff3bfe3036933ac5cc8c7f532abe487d315aeed9ef37030e497ed306742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4Y7JNW6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIAYPKmgdQU7m5CmUjoEW8brGdV3kUKOiQisZ%2Bj7wtXSEAiEA19uFy3T3lT1IsAargVawMHtARPChYYq6dS0swAz5XpQqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFoS7HVNnlL9hG10ircA6Ly2gJoyZjcWQSvgSXy02xTbUNXm85XgNhOsrLnrKaufdZeGgHnnKBkMm58ez131GXeUWnNjcfehKaJ%2FsnG9noDVzCJOvOP2Km9rFEpWT8V3BHHkvkoWvpMFKX3IcwtT6MbzPiJy3Xj2QH42NQOxcod8lvGbsAA%2BS%2B4brYAlQzA%2FDkoYQU9nt%2FbqTovwM0Os5gW3G45rROsERqmMgOUNFvUeU0HdFIBbIl7eT%2FdOzkVyeRkj0kLf0rNpgr%2F1QmVX3D4j986Fg7mjGCsI7y3%2Fl9HQN%2FcGCm%2FBRq6jgueWlNshCaFLvb1x8UPmTqrwu3NKPAkCJeiAKzAaCsykNRy%2FPcA0znRwSxi6qfZ2TigW9pW2KLKEceQKJeS6FpnSj79ZdCN0kR1dNR6Museu8q0L70glY77Ufs%2BmJ0IQMdU7QBxB%2BVUnPewq34q%2FnICtCGcvnYMM%2BHijC66Q0EmLP%2BN0eNHOHEMDZMJx1rYD6MeR3PRje0CwnMOSnwPgwu0Y6JhggmWr0qypmNwEjh49g3nOvVpRfijGofO0bEx2Zjelgkt3GVVr20oxAdlLAxeS2PilG6XtX8VTgu1Yi34KJkPJ6wtLN7CrBQyfS%2BTNOx32Mto9bLMvKGd9dSuaIZPMJnu08QGOqUBZGmpgptcgoUQ49hIhhE4TtS6HUpTX%2FoBY6H7P78kBK0Ox39SsECGV%2B6bdrT4VPkEHoI7Cj4KEV%2F7C8s%2F1n2iQVya%2BbbeWkITSXiYqtKfTKWVGwZK3s1XBcLO6%2Fz1zX%2BySIZ2Nx06gwjXqD1ind8odjTRTlxKjYNmuoTCl34CVD1UPrgLP%2FgxLLtvlxBQTqSNFyqTEtowKXGBf6TKxfdizYfQlYgH&X-Amz-Signature=99b6be7a919e8c0b90d08b807757fabf1ef7a3075099b506c2cfe3375446bbed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4Y7JNW6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIAYPKmgdQU7m5CmUjoEW8brGdV3kUKOiQisZ%2Bj7wtXSEAiEA19uFy3T3lT1IsAargVawMHtARPChYYq6dS0swAz5XpQqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFoS7HVNnlL9hG10ircA6Ly2gJoyZjcWQSvgSXy02xTbUNXm85XgNhOsrLnrKaufdZeGgHnnKBkMm58ez131GXeUWnNjcfehKaJ%2FsnG9noDVzCJOvOP2Km9rFEpWT8V3BHHkvkoWvpMFKX3IcwtT6MbzPiJy3Xj2QH42NQOxcod8lvGbsAA%2BS%2B4brYAlQzA%2FDkoYQU9nt%2FbqTovwM0Os5gW3G45rROsERqmMgOUNFvUeU0HdFIBbIl7eT%2FdOzkVyeRkj0kLf0rNpgr%2F1QmVX3D4j986Fg7mjGCsI7y3%2Fl9HQN%2FcGCm%2FBRq6jgueWlNshCaFLvb1x8UPmTqrwu3NKPAkCJeiAKzAaCsykNRy%2FPcA0znRwSxi6qfZ2TigW9pW2KLKEceQKJeS6FpnSj79ZdCN0kR1dNR6Museu8q0L70glY77Ufs%2BmJ0IQMdU7QBxB%2BVUnPewq34q%2FnICtCGcvnYMM%2BHijC66Q0EmLP%2BN0eNHOHEMDZMJx1rYD6MeR3PRje0CwnMOSnwPgwu0Y6JhggmWr0qypmNwEjh49g3nOvVpRfijGofO0bEx2Zjelgkt3GVVr20oxAdlLAxeS2PilG6XtX8VTgu1Yi34KJkPJ6wtLN7CrBQyfS%2BTNOx32Mto9bLMvKGd9dSuaIZPMJnu08QGOqUBZGmpgptcgoUQ49hIhhE4TtS6HUpTX%2FoBY6H7P78kBK0Ox39SsECGV%2B6bdrT4VPkEHoI7Cj4KEV%2F7C8s%2F1n2iQVya%2BbbeWkITSXiYqtKfTKWVGwZK3s1XBcLO6%2Fz1zX%2BySIZ2Nx06gwjXqD1ind8odjTRTlxKjYNmuoTCl34CVD1UPrgLP%2FgxLLtvlxBQTqSNFyqTEtowKXGBf6TKxfdizYfQlYgH&X-Amz-Signature=f1f4f4319f857e6bc607b812ece05e6a146de5183277b8789250394ca8bbe398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4Y7JNW6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIAYPKmgdQU7m5CmUjoEW8brGdV3kUKOiQisZ%2Bj7wtXSEAiEA19uFy3T3lT1IsAargVawMHtARPChYYq6dS0swAz5XpQqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFoS7HVNnlL9hG10ircA6Ly2gJoyZjcWQSvgSXy02xTbUNXm85XgNhOsrLnrKaufdZeGgHnnKBkMm58ez131GXeUWnNjcfehKaJ%2FsnG9noDVzCJOvOP2Km9rFEpWT8V3BHHkvkoWvpMFKX3IcwtT6MbzPiJy3Xj2QH42NQOxcod8lvGbsAA%2BS%2B4brYAlQzA%2FDkoYQU9nt%2FbqTovwM0Os5gW3G45rROsERqmMgOUNFvUeU0HdFIBbIl7eT%2FdOzkVyeRkj0kLf0rNpgr%2F1QmVX3D4j986Fg7mjGCsI7y3%2Fl9HQN%2FcGCm%2FBRq6jgueWlNshCaFLvb1x8UPmTqrwu3NKPAkCJeiAKzAaCsykNRy%2FPcA0znRwSxi6qfZ2TigW9pW2KLKEceQKJeS6FpnSj79ZdCN0kR1dNR6Museu8q0L70glY77Ufs%2BmJ0IQMdU7QBxB%2BVUnPewq34q%2FnICtCGcvnYMM%2BHijC66Q0EmLP%2BN0eNHOHEMDZMJx1rYD6MeR3PRje0CwnMOSnwPgwu0Y6JhggmWr0qypmNwEjh49g3nOvVpRfijGofO0bEx2Zjelgkt3GVVr20oxAdlLAxeS2PilG6XtX8VTgu1Yi34KJkPJ6wtLN7CrBQyfS%2BTNOx32Mto9bLMvKGd9dSuaIZPMJnu08QGOqUBZGmpgptcgoUQ49hIhhE4TtS6HUpTX%2FoBY6H7P78kBK0Ox39SsECGV%2B6bdrT4VPkEHoI7Cj4KEV%2F7C8s%2F1n2iQVya%2BbbeWkITSXiYqtKfTKWVGwZK3s1XBcLO6%2Fz1zX%2BySIZ2Nx06gwjXqD1ind8odjTRTlxKjYNmuoTCl34CVD1UPrgLP%2FgxLLtvlxBQTqSNFyqTEtowKXGBf6TKxfdizYfQlYgH&X-Amz-Signature=ce3e3b65381af20c26034d43168aa0aa5ccfe34adf535ffefdf879967b0d0015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
