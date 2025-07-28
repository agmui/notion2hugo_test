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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXJSMCGU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIApuTVYzQMLd59yEyz8bLWqKb%2B058GHux%2BbbS78zIS5mAiEA%2FCfEHY7r6O1FxRJ%2FcJ58JhPlOvH%2FIvQys%2BHMIe54DAcqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADDM%2FPkYzBqL8z8jircA8AHLoRRjbtdedVFIwfthd6brvHWMuzwhoUXF1xZ%2FT36GzU5LZiVPfyTH2Mf0%2FkClO3lRzRCIvB4Jfd13PJuFI94qMHK4os5RAFPiCvuwJWnKltCWPxbMu4TSq4LXoe51Vos%2Ft2bxco7WeQgXSEzZolktgcOrX1RUt8CFPpGMtBIrKajQflbecsdKjl38RrGlqv1hOYqZse7Pzj1eb9zDCa380T8oiR4cI%2FPT3v2ILM8RQDZ7nG8a3mgF0Gggy3rY7u53EJUYSXDf%2F5E38Z7QxbDy2ruLRoe%2FpHAQte8ZgjDv4B2syDBKzEXpHEC2gH9NSDnaQgx0tPJO4Y87K8nkFCsDD4xSpEofAgCFK4EJ0xvjB6VNLmmnDjQayjifDhAV%2FLYOfH%2FCV3DAkWGQkXG5RJzvHUbGh5dbQA60q4%2F0UhKpts%2FnKyLixtmdMUBOm1Tu257tB7Nx4qwGUW5B85iR4cQGO4oCd7vF5lYnbJAj3NNrxBWCidbWK5SxyLbGpjuZg4W1GsxDOmm0TV4WrZ0va6QJ8PWvluhuSMZ3mxGgVhSoQUFH7tkdVVz%2FCSfzUIcKqjsvqBec7gx5X%2BR0fr8QuNqCltwGyXJn3MKVdE07JdAF8%2Bpc7VsDNNNW3r9MMj7ncQGOqUBYYz7CXdqKB7%2BQUrCihl6B1yjjmZ03Q%2FR8ot3arPM%2B8NwfEbf4D%2FVg1oE1ci1NoK%2Bgn8BRMS12FxnvZMVr%2F3qf%2BDiJld%2B2tCGOnMaboeHKuHpL1hNw3JXEXzR8%2BfY0V52Lq6QkrQRuf6Qi34JJ9zUsqq4w%2Bk8THzqtKEBCXSlhiyeQ6fKvCMRYuknlc75rzGPZdUQUPDpOvVokNiUaXHfafYVGFxo&X-Amz-Signature=55790d1999a8ac52e9be8d8c61a32f5e2d519f152daf668289c37ccb264727a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXJSMCGU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIApuTVYzQMLd59yEyz8bLWqKb%2B058GHux%2BbbS78zIS5mAiEA%2FCfEHY7r6O1FxRJ%2FcJ58JhPlOvH%2FIvQys%2BHMIe54DAcqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADDM%2FPkYzBqL8z8jircA8AHLoRRjbtdedVFIwfthd6brvHWMuzwhoUXF1xZ%2FT36GzU5LZiVPfyTH2Mf0%2FkClO3lRzRCIvB4Jfd13PJuFI94qMHK4os5RAFPiCvuwJWnKltCWPxbMu4TSq4LXoe51Vos%2Ft2bxco7WeQgXSEzZolktgcOrX1RUt8CFPpGMtBIrKajQflbecsdKjl38RrGlqv1hOYqZse7Pzj1eb9zDCa380T8oiR4cI%2FPT3v2ILM8RQDZ7nG8a3mgF0Gggy3rY7u53EJUYSXDf%2F5E38Z7QxbDy2ruLRoe%2FpHAQte8ZgjDv4B2syDBKzEXpHEC2gH9NSDnaQgx0tPJO4Y87K8nkFCsDD4xSpEofAgCFK4EJ0xvjB6VNLmmnDjQayjifDhAV%2FLYOfH%2FCV3DAkWGQkXG5RJzvHUbGh5dbQA60q4%2F0UhKpts%2FnKyLixtmdMUBOm1Tu257tB7Nx4qwGUW5B85iR4cQGO4oCd7vF5lYnbJAj3NNrxBWCidbWK5SxyLbGpjuZg4W1GsxDOmm0TV4WrZ0va6QJ8PWvluhuSMZ3mxGgVhSoQUFH7tkdVVz%2FCSfzUIcKqjsvqBec7gx5X%2BR0fr8QuNqCltwGyXJn3MKVdE07JdAF8%2Bpc7VsDNNNW3r9MMj7ncQGOqUBYYz7CXdqKB7%2BQUrCihl6B1yjjmZ03Q%2FR8ot3arPM%2B8NwfEbf4D%2FVg1oE1ci1NoK%2Bgn8BRMS12FxnvZMVr%2F3qf%2BDiJld%2B2tCGOnMaboeHKuHpL1hNw3JXEXzR8%2BfY0V52Lq6QkrQRuf6Qi34JJ9zUsqq4w%2Bk8THzqtKEBCXSlhiyeQ6fKvCMRYuknlc75rzGPZdUQUPDpOvVokNiUaXHfafYVGFxo&X-Amz-Signature=ac6665db56635d2a2d18fcd47378a81a13e27c9f5399f0d0950d54b0e78519a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXJSMCGU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIApuTVYzQMLd59yEyz8bLWqKb%2B058GHux%2BbbS78zIS5mAiEA%2FCfEHY7r6O1FxRJ%2FcJ58JhPlOvH%2FIvQys%2BHMIe54DAcqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADDM%2FPkYzBqL8z8jircA8AHLoRRjbtdedVFIwfthd6brvHWMuzwhoUXF1xZ%2FT36GzU5LZiVPfyTH2Mf0%2FkClO3lRzRCIvB4Jfd13PJuFI94qMHK4os5RAFPiCvuwJWnKltCWPxbMu4TSq4LXoe51Vos%2Ft2bxco7WeQgXSEzZolktgcOrX1RUt8CFPpGMtBIrKajQflbecsdKjl38RrGlqv1hOYqZse7Pzj1eb9zDCa380T8oiR4cI%2FPT3v2ILM8RQDZ7nG8a3mgF0Gggy3rY7u53EJUYSXDf%2F5E38Z7QxbDy2ruLRoe%2FpHAQte8ZgjDv4B2syDBKzEXpHEC2gH9NSDnaQgx0tPJO4Y87K8nkFCsDD4xSpEofAgCFK4EJ0xvjB6VNLmmnDjQayjifDhAV%2FLYOfH%2FCV3DAkWGQkXG5RJzvHUbGh5dbQA60q4%2F0UhKpts%2FnKyLixtmdMUBOm1Tu257tB7Nx4qwGUW5B85iR4cQGO4oCd7vF5lYnbJAj3NNrxBWCidbWK5SxyLbGpjuZg4W1GsxDOmm0TV4WrZ0va6QJ8PWvluhuSMZ3mxGgVhSoQUFH7tkdVVz%2FCSfzUIcKqjsvqBec7gx5X%2BR0fr8QuNqCltwGyXJn3MKVdE07JdAF8%2Bpc7VsDNNNW3r9MMj7ncQGOqUBYYz7CXdqKB7%2BQUrCihl6B1yjjmZ03Q%2FR8ot3arPM%2B8NwfEbf4D%2FVg1oE1ci1NoK%2Bgn8BRMS12FxnvZMVr%2F3qf%2BDiJld%2B2tCGOnMaboeHKuHpL1hNw3JXEXzR8%2BfY0V52Lq6QkrQRuf6Qi34JJ9zUsqq4w%2Bk8THzqtKEBCXSlhiyeQ6fKvCMRYuknlc75rzGPZdUQUPDpOvVokNiUaXHfafYVGFxo&X-Amz-Signature=480438afcd8ec738129c030d4c3d0bf8cdcff0d419cfa0fe1e11afcfdfa87f79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXJSMCGU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIApuTVYzQMLd59yEyz8bLWqKb%2B058GHux%2BbbS78zIS5mAiEA%2FCfEHY7r6O1FxRJ%2FcJ58JhPlOvH%2FIvQys%2BHMIe54DAcqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADDM%2FPkYzBqL8z8jircA8AHLoRRjbtdedVFIwfthd6brvHWMuzwhoUXF1xZ%2FT36GzU5LZiVPfyTH2Mf0%2FkClO3lRzRCIvB4Jfd13PJuFI94qMHK4os5RAFPiCvuwJWnKltCWPxbMu4TSq4LXoe51Vos%2Ft2bxco7WeQgXSEzZolktgcOrX1RUt8CFPpGMtBIrKajQflbecsdKjl38RrGlqv1hOYqZse7Pzj1eb9zDCa380T8oiR4cI%2FPT3v2ILM8RQDZ7nG8a3mgF0Gggy3rY7u53EJUYSXDf%2F5E38Z7QxbDy2ruLRoe%2FpHAQte8ZgjDv4B2syDBKzEXpHEC2gH9NSDnaQgx0tPJO4Y87K8nkFCsDD4xSpEofAgCFK4EJ0xvjB6VNLmmnDjQayjifDhAV%2FLYOfH%2FCV3DAkWGQkXG5RJzvHUbGh5dbQA60q4%2F0UhKpts%2FnKyLixtmdMUBOm1Tu257tB7Nx4qwGUW5B85iR4cQGO4oCd7vF5lYnbJAj3NNrxBWCidbWK5SxyLbGpjuZg4W1GsxDOmm0TV4WrZ0va6QJ8PWvluhuSMZ3mxGgVhSoQUFH7tkdVVz%2FCSfzUIcKqjsvqBec7gx5X%2BR0fr8QuNqCltwGyXJn3MKVdE07JdAF8%2Bpc7VsDNNNW3r9MMj7ncQGOqUBYYz7CXdqKB7%2BQUrCihl6B1yjjmZ03Q%2FR8ot3arPM%2B8NwfEbf4D%2FVg1oE1ci1NoK%2Bgn8BRMS12FxnvZMVr%2F3qf%2BDiJld%2B2tCGOnMaboeHKuHpL1hNw3JXEXzR8%2BfY0V52Lq6QkrQRuf6Qi34JJ9zUsqq4w%2Bk8THzqtKEBCXSlhiyeQ6fKvCMRYuknlc75rzGPZdUQUPDpOvVokNiUaXHfafYVGFxo&X-Amz-Signature=4bd4fbc92cdce50e103c306a4b60f28503a27f9064fc12645a105c85402fa39c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXJSMCGU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIApuTVYzQMLd59yEyz8bLWqKb%2B058GHux%2BbbS78zIS5mAiEA%2FCfEHY7r6O1FxRJ%2FcJ58JhPlOvH%2FIvQys%2BHMIe54DAcqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADDM%2FPkYzBqL8z8jircA8AHLoRRjbtdedVFIwfthd6brvHWMuzwhoUXF1xZ%2FT36GzU5LZiVPfyTH2Mf0%2FkClO3lRzRCIvB4Jfd13PJuFI94qMHK4os5RAFPiCvuwJWnKltCWPxbMu4TSq4LXoe51Vos%2Ft2bxco7WeQgXSEzZolktgcOrX1RUt8CFPpGMtBIrKajQflbecsdKjl38RrGlqv1hOYqZse7Pzj1eb9zDCa380T8oiR4cI%2FPT3v2ILM8RQDZ7nG8a3mgF0Gggy3rY7u53EJUYSXDf%2F5E38Z7QxbDy2ruLRoe%2FpHAQte8ZgjDv4B2syDBKzEXpHEC2gH9NSDnaQgx0tPJO4Y87K8nkFCsDD4xSpEofAgCFK4EJ0xvjB6VNLmmnDjQayjifDhAV%2FLYOfH%2FCV3DAkWGQkXG5RJzvHUbGh5dbQA60q4%2F0UhKpts%2FnKyLixtmdMUBOm1Tu257tB7Nx4qwGUW5B85iR4cQGO4oCd7vF5lYnbJAj3NNrxBWCidbWK5SxyLbGpjuZg4W1GsxDOmm0TV4WrZ0va6QJ8PWvluhuSMZ3mxGgVhSoQUFH7tkdVVz%2FCSfzUIcKqjsvqBec7gx5X%2BR0fr8QuNqCltwGyXJn3MKVdE07JdAF8%2Bpc7VsDNNNW3r9MMj7ncQGOqUBYYz7CXdqKB7%2BQUrCihl6B1yjjmZ03Q%2FR8ot3arPM%2B8NwfEbf4D%2FVg1oE1ci1NoK%2Bgn8BRMS12FxnvZMVr%2F3qf%2BDiJld%2B2tCGOnMaboeHKuHpL1hNw3JXEXzR8%2BfY0V52Lq6QkrQRuf6Qi34JJ9zUsqq4w%2Bk8THzqtKEBCXSlhiyeQ6fKvCMRYuknlc75rzGPZdUQUPDpOvVokNiUaXHfafYVGFxo&X-Amz-Signature=4609912fd0fe19d0c6b1489f2f51c1498f1fc78c2b50c6efcae47666cf3f4efc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXJSMCGU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIApuTVYzQMLd59yEyz8bLWqKb%2B058GHux%2BbbS78zIS5mAiEA%2FCfEHY7r6O1FxRJ%2FcJ58JhPlOvH%2FIvQys%2BHMIe54DAcqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADDM%2FPkYzBqL8z8jircA8AHLoRRjbtdedVFIwfthd6brvHWMuzwhoUXF1xZ%2FT36GzU5LZiVPfyTH2Mf0%2FkClO3lRzRCIvB4Jfd13PJuFI94qMHK4os5RAFPiCvuwJWnKltCWPxbMu4TSq4LXoe51Vos%2Ft2bxco7WeQgXSEzZolktgcOrX1RUt8CFPpGMtBIrKajQflbecsdKjl38RrGlqv1hOYqZse7Pzj1eb9zDCa380T8oiR4cI%2FPT3v2ILM8RQDZ7nG8a3mgF0Gggy3rY7u53EJUYSXDf%2F5E38Z7QxbDy2ruLRoe%2FpHAQte8ZgjDv4B2syDBKzEXpHEC2gH9NSDnaQgx0tPJO4Y87K8nkFCsDD4xSpEofAgCFK4EJ0xvjB6VNLmmnDjQayjifDhAV%2FLYOfH%2FCV3DAkWGQkXG5RJzvHUbGh5dbQA60q4%2F0UhKpts%2FnKyLixtmdMUBOm1Tu257tB7Nx4qwGUW5B85iR4cQGO4oCd7vF5lYnbJAj3NNrxBWCidbWK5SxyLbGpjuZg4W1GsxDOmm0TV4WrZ0va6QJ8PWvluhuSMZ3mxGgVhSoQUFH7tkdVVz%2FCSfzUIcKqjsvqBec7gx5X%2BR0fr8QuNqCltwGyXJn3MKVdE07JdAF8%2Bpc7VsDNNNW3r9MMj7ncQGOqUBYYz7CXdqKB7%2BQUrCihl6B1yjjmZ03Q%2FR8ot3arPM%2B8NwfEbf4D%2FVg1oE1ci1NoK%2Bgn8BRMS12FxnvZMVr%2F3qf%2BDiJld%2B2tCGOnMaboeHKuHpL1hNw3JXEXzR8%2BfY0V52Lq6QkrQRuf6Qi34JJ9zUsqq4w%2Bk8THzqtKEBCXSlhiyeQ6fKvCMRYuknlc75rzGPZdUQUPDpOvVokNiUaXHfafYVGFxo&X-Amz-Signature=e4d56eee2b32cc4b319d82bab0dc14aa3618e27dd020bc0aa9728b7e2f97543d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXJSMCGU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIApuTVYzQMLd59yEyz8bLWqKb%2B058GHux%2BbbS78zIS5mAiEA%2FCfEHY7r6O1FxRJ%2FcJ58JhPlOvH%2FIvQys%2BHMIe54DAcqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADDM%2FPkYzBqL8z8jircA8AHLoRRjbtdedVFIwfthd6brvHWMuzwhoUXF1xZ%2FT36GzU5LZiVPfyTH2Mf0%2FkClO3lRzRCIvB4Jfd13PJuFI94qMHK4os5RAFPiCvuwJWnKltCWPxbMu4TSq4LXoe51Vos%2Ft2bxco7WeQgXSEzZolktgcOrX1RUt8CFPpGMtBIrKajQflbecsdKjl38RrGlqv1hOYqZse7Pzj1eb9zDCa380T8oiR4cI%2FPT3v2ILM8RQDZ7nG8a3mgF0Gggy3rY7u53EJUYSXDf%2F5E38Z7QxbDy2ruLRoe%2FpHAQte8ZgjDv4B2syDBKzEXpHEC2gH9NSDnaQgx0tPJO4Y87K8nkFCsDD4xSpEofAgCFK4EJ0xvjB6VNLmmnDjQayjifDhAV%2FLYOfH%2FCV3DAkWGQkXG5RJzvHUbGh5dbQA60q4%2F0UhKpts%2FnKyLixtmdMUBOm1Tu257tB7Nx4qwGUW5B85iR4cQGO4oCd7vF5lYnbJAj3NNrxBWCidbWK5SxyLbGpjuZg4W1GsxDOmm0TV4WrZ0va6QJ8PWvluhuSMZ3mxGgVhSoQUFH7tkdVVz%2FCSfzUIcKqjsvqBec7gx5X%2BR0fr8QuNqCltwGyXJn3MKVdE07JdAF8%2Bpc7VsDNNNW3r9MMj7ncQGOqUBYYz7CXdqKB7%2BQUrCihl6B1yjjmZ03Q%2FR8ot3arPM%2B8NwfEbf4D%2FVg1oE1ci1NoK%2Bgn8BRMS12FxnvZMVr%2F3qf%2BDiJld%2B2tCGOnMaboeHKuHpL1hNw3JXEXzR8%2BfY0V52Lq6QkrQRuf6Qi34JJ9zUsqq4w%2Bk8THzqtKEBCXSlhiyeQ6fKvCMRYuknlc75rzGPZdUQUPDpOvVokNiUaXHfafYVGFxo&X-Amz-Signature=45c862c9d29e48e5b870b57d52501fa16bb8ed1b1b2dddce79a848644edc241d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXJSMCGU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIApuTVYzQMLd59yEyz8bLWqKb%2B058GHux%2BbbS78zIS5mAiEA%2FCfEHY7r6O1FxRJ%2FcJ58JhPlOvH%2FIvQys%2BHMIe54DAcqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADDM%2FPkYzBqL8z8jircA8AHLoRRjbtdedVFIwfthd6brvHWMuzwhoUXF1xZ%2FT36GzU5LZiVPfyTH2Mf0%2FkClO3lRzRCIvB4Jfd13PJuFI94qMHK4os5RAFPiCvuwJWnKltCWPxbMu4TSq4LXoe51Vos%2Ft2bxco7WeQgXSEzZolktgcOrX1RUt8CFPpGMtBIrKajQflbecsdKjl38RrGlqv1hOYqZse7Pzj1eb9zDCa380T8oiR4cI%2FPT3v2ILM8RQDZ7nG8a3mgF0Gggy3rY7u53EJUYSXDf%2F5E38Z7QxbDy2ruLRoe%2FpHAQte8ZgjDv4B2syDBKzEXpHEC2gH9NSDnaQgx0tPJO4Y87K8nkFCsDD4xSpEofAgCFK4EJ0xvjB6VNLmmnDjQayjifDhAV%2FLYOfH%2FCV3DAkWGQkXG5RJzvHUbGh5dbQA60q4%2F0UhKpts%2FnKyLixtmdMUBOm1Tu257tB7Nx4qwGUW5B85iR4cQGO4oCd7vF5lYnbJAj3NNrxBWCidbWK5SxyLbGpjuZg4W1GsxDOmm0TV4WrZ0va6QJ8PWvluhuSMZ3mxGgVhSoQUFH7tkdVVz%2FCSfzUIcKqjsvqBec7gx5X%2BR0fr8QuNqCltwGyXJn3MKVdE07JdAF8%2Bpc7VsDNNNW3r9MMj7ncQGOqUBYYz7CXdqKB7%2BQUrCihl6B1yjjmZ03Q%2FR8ot3arPM%2B8NwfEbf4D%2FVg1oE1ci1NoK%2Bgn8BRMS12FxnvZMVr%2F3qf%2BDiJld%2B2tCGOnMaboeHKuHpL1hNw3JXEXzR8%2BfY0V52Lq6QkrQRuf6Qi34JJ9zUsqq4w%2Bk8THzqtKEBCXSlhiyeQ6fKvCMRYuknlc75rzGPZdUQUPDpOvVokNiUaXHfafYVGFxo&X-Amz-Signature=78c272edea32af007a051d4ad044b30a03e0e06b8b425716c97761d40f2b70b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXJSMCGU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIApuTVYzQMLd59yEyz8bLWqKb%2B058GHux%2BbbS78zIS5mAiEA%2FCfEHY7r6O1FxRJ%2FcJ58JhPlOvH%2FIvQys%2BHMIe54DAcqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADDM%2FPkYzBqL8z8jircA8AHLoRRjbtdedVFIwfthd6brvHWMuzwhoUXF1xZ%2FT36GzU5LZiVPfyTH2Mf0%2FkClO3lRzRCIvB4Jfd13PJuFI94qMHK4os5RAFPiCvuwJWnKltCWPxbMu4TSq4LXoe51Vos%2Ft2bxco7WeQgXSEzZolktgcOrX1RUt8CFPpGMtBIrKajQflbecsdKjl38RrGlqv1hOYqZse7Pzj1eb9zDCa380T8oiR4cI%2FPT3v2ILM8RQDZ7nG8a3mgF0Gggy3rY7u53EJUYSXDf%2F5E38Z7QxbDy2ruLRoe%2FpHAQte8ZgjDv4B2syDBKzEXpHEC2gH9NSDnaQgx0tPJO4Y87K8nkFCsDD4xSpEofAgCFK4EJ0xvjB6VNLmmnDjQayjifDhAV%2FLYOfH%2FCV3DAkWGQkXG5RJzvHUbGh5dbQA60q4%2F0UhKpts%2FnKyLixtmdMUBOm1Tu257tB7Nx4qwGUW5B85iR4cQGO4oCd7vF5lYnbJAj3NNrxBWCidbWK5SxyLbGpjuZg4W1GsxDOmm0TV4WrZ0va6QJ8PWvluhuSMZ3mxGgVhSoQUFH7tkdVVz%2FCSfzUIcKqjsvqBec7gx5X%2BR0fr8QuNqCltwGyXJn3MKVdE07JdAF8%2Bpc7VsDNNNW3r9MMj7ncQGOqUBYYz7CXdqKB7%2BQUrCihl6B1yjjmZ03Q%2FR8ot3arPM%2B8NwfEbf4D%2FVg1oE1ci1NoK%2Bgn8BRMS12FxnvZMVr%2F3qf%2BDiJld%2B2tCGOnMaboeHKuHpL1hNw3JXEXzR8%2BfY0V52Lq6QkrQRuf6Qi34JJ9zUsqq4w%2Bk8THzqtKEBCXSlhiyeQ6fKvCMRYuknlc75rzGPZdUQUPDpOvVokNiUaXHfafYVGFxo&X-Amz-Signature=ebb7549b7fb8524ce8031cc7ca5d068b0eb547ce6fd78861d329e69418c2d24d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXJSMCGU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIApuTVYzQMLd59yEyz8bLWqKb%2B058GHux%2BbbS78zIS5mAiEA%2FCfEHY7r6O1FxRJ%2FcJ58JhPlOvH%2FIvQys%2BHMIe54DAcqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADDM%2FPkYzBqL8z8jircA8AHLoRRjbtdedVFIwfthd6brvHWMuzwhoUXF1xZ%2FT36GzU5LZiVPfyTH2Mf0%2FkClO3lRzRCIvB4Jfd13PJuFI94qMHK4os5RAFPiCvuwJWnKltCWPxbMu4TSq4LXoe51Vos%2Ft2bxco7WeQgXSEzZolktgcOrX1RUt8CFPpGMtBIrKajQflbecsdKjl38RrGlqv1hOYqZse7Pzj1eb9zDCa380T8oiR4cI%2FPT3v2ILM8RQDZ7nG8a3mgF0Gggy3rY7u53EJUYSXDf%2F5E38Z7QxbDy2ruLRoe%2FpHAQte8ZgjDv4B2syDBKzEXpHEC2gH9NSDnaQgx0tPJO4Y87K8nkFCsDD4xSpEofAgCFK4EJ0xvjB6VNLmmnDjQayjifDhAV%2FLYOfH%2FCV3DAkWGQkXG5RJzvHUbGh5dbQA60q4%2F0UhKpts%2FnKyLixtmdMUBOm1Tu257tB7Nx4qwGUW5B85iR4cQGO4oCd7vF5lYnbJAj3NNrxBWCidbWK5SxyLbGpjuZg4W1GsxDOmm0TV4WrZ0va6QJ8PWvluhuSMZ3mxGgVhSoQUFH7tkdVVz%2FCSfzUIcKqjsvqBec7gx5X%2BR0fr8QuNqCltwGyXJn3MKVdE07JdAF8%2Bpc7VsDNNNW3r9MMj7ncQGOqUBYYz7CXdqKB7%2BQUrCihl6B1yjjmZ03Q%2FR8ot3arPM%2B8NwfEbf4D%2FVg1oE1ci1NoK%2Bgn8BRMS12FxnvZMVr%2F3qf%2BDiJld%2B2tCGOnMaboeHKuHpL1hNw3JXEXzR8%2BfY0V52Lq6QkrQRuf6Qi34JJ9zUsqq4w%2Bk8THzqtKEBCXSlhiyeQ6fKvCMRYuknlc75rzGPZdUQUPDpOvVokNiUaXHfafYVGFxo&X-Amz-Signature=721fe371976e090088589921d61ef0fba28e81c4fb4b10ecc92d5a5aa1359e27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXJSMCGU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIApuTVYzQMLd59yEyz8bLWqKb%2B058GHux%2BbbS78zIS5mAiEA%2FCfEHY7r6O1FxRJ%2FcJ58JhPlOvH%2FIvQys%2BHMIe54DAcqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADDM%2FPkYzBqL8z8jircA8AHLoRRjbtdedVFIwfthd6brvHWMuzwhoUXF1xZ%2FT36GzU5LZiVPfyTH2Mf0%2FkClO3lRzRCIvB4Jfd13PJuFI94qMHK4os5RAFPiCvuwJWnKltCWPxbMu4TSq4LXoe51Vos%2Ft2bxco7WeQgXSEzZolktgcOrX1RUt8CFPpGMtBIrKajQflbecsdKjl38RrGlqv1hOYqZse7Pzj1eb9zDCa380T8oiR4cI%2FPT3v2ILM8RQDZ7nG8a3mgF0Gggy3rY7u53EJUYSXDf%2F5E38Z7QxbDy2ruLRoe%2FpHAQte8ZgjDv4B2syDBKzEXpHEC2gH9NSDnaQgx0tPJO4Y87K8nkFCsDD4xSpEofAgCFK4EJ0xvjB6VNLmmnDjQayjifDhAV%2FLYOfH%2FCV3DAkWGQkXG5RJzvHUbGh5dbQA60q4%2F0UhKpts%2FnKyLixtmdMUBOm1Tu257tB7Nx4qwGUW5B85iR4cQGO4oCd7vF5lYnbJAj3NNrxBWCidbWK5SxyLbGpjuZg4W1GsxDOmm0TV4WrZ0va6QJ8PWvluhuSMZ3mxGgVhSoQUFH7tkdVVz%2FCSfzUIcKqjsvqBec7gx5X%2BR0fr8QuNqCltwGyXJn3MKVdE07JdAF8%2Bpc7VsDNNNW3r9MMj7ncQGOqUBYYz7CXdqKB7%2BQUrCihl6B1yjjmZ03Q%2FR8ot3arPM%2B8NwfEbf4D%2FVg1oE1ci1NoK%2Bgn8BRMS12FxnvZMVr%2F3qf%2BDiJld%2B2tCGOnMaboeHKuHpL1hNw3JXEXzR8%2BfY0V52Lq6QkrQRuf6Qi34JJ9zUsqq4w%2Bk8THzqtKEBCXSlhiyeQ6fKvCMRYuknlc75rzGPZdUQUPDpOvVokNiUaXHfafYVGFxo&X-Amz-Signature=f27f704db991367bf98a1ed5d14a837ad7d4885ce4bb0ab4a71fb17c46a6d6d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXJSMCGU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIApuTVYzQMLd59yEyz8bLWqKb%2B058GHux%2BbbS78zIS5mAiEA%2FCfEHY7r6O1FxRJ%2FcJ58JhPlOvH%2FIvQys%2BHMIe54DAcqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADDM%2FPkYzBqL8z8jircA8AHLoRRjbtdedVFIwfthd6brvHWMuzwhoUXF1xZ%2FT36GzU5LZiVPfyTH2Mf0%2FkClO3lRzRCIvB4Jfd13PJuFI94qMHK4os5RAFPiCvuwJWnKltCWPxbMu4TSq4LXoe51Vos%2Ft2bxco7WeQgXSEzZolktgcOrX1RUt8CFPpGMtBIrKajQflbecsdKjl38RrGlqv1hOYqZse7Pzj1eb9zDCa380T8oiR4cI%2FPT3v2ILM8RQDZ7nG8a3mgF0Gggy3rY7u53EJUYSXDf%2F5E38Z7QxbDy2ruLRoe%2FpHAQte8ZgjDv4B2syDBKzEXpHEC2gH9NSDnaQgx0tPJO4Y87K8nkFCsDD4xSpEofAgCFK4EJ0xvjB6VNLmmnDjQayjifDhAV%2FLYOfH%2FCV3DAkWGQkXG5RJzvHUbGh5dbQA60q4%2F0UhKpts%2FnKyLixtmdMUBOm1Tu257tB7Nx4qwGUW5B85iR4cQGO4oCd7vF5lYnbJAj3NNrxBWCidbWK5SxyLbGpjuZg4W1GsxDOmm0TV4WrZ0va6QJ8PWvluhuSMZ3mxGgVhSoQUFH7tkdVVz%2FCSfzUIcKqjsvqBec7gx5X%2BR0fr8QuNqCltwGyXJn3MKVdE07JdAF8%2Bpc7VsDNNNW3r9MMj7ncQGOqUBYYz7CXdqKB7%2BQUrCihl6B1yjjmZ03Q%2FR8ot3arPM%2B8NwfEbf4D%2FVg1oE1ci1NoK%2Bgn8BRMS12FxnvZMVr%2F3qf%2BDiJld%2B2tCGOnMaboeHKuHpL1hNw3JXEXzR8%2BfY0V52Lq6QkrQRuf6Qi34JJ9zUsqq4w%2Bk8THzqtKEBCXSlhiyeQ6fKvCMRYuknlc75rzGPZdUQUPDpOvVokNiUaXHfafYVGFxo&X-Amz-Signature=27b77f97e79838ccdc1d0affcbf67caac64185a0bb693dddb2d89241e7082187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXJSMCGU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIApuTVYzQMLd59yEyz8bLWqKb%2B058GHux%2BbbS78zIS5mAiEA%2FCfEHY7r6O1FxRJ%2FcJ58JhPlOvH%2FIvQys%2BHMIe54DAcqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADDM%2FPkYzBqL8z8jircA8AHLoRRjbtdedVFIwfthd6brvHWMuzwhoUXF1xZ%2FT36GzU5LZiVPfyTH2Mf0%2FkClO3lRzRCIvB4Jfd13PJuFI94qMHK4os5RAFPiCvuwJWnKltCWPxbMu4TSq4LXoe51Vos%2Ft2bxco7WeQgXSEzZolktgcOrX1RUt8CFPpGMtBIrKajQflbecsdKjl38RrGlqv1hOYqZse7Pzj1eb9zDCa380T8oiR4cI%2FPT3v2ILM8RQDZ7nG8a3mgF0Gggy3rY7u53EJUYSXDf%2F5E38Z7QxbDy2ruLRoe%2FpHAQte8ZgjDv4B2syDBKzEXpHEC2gH9NSDnaQgx0tPJO4Y87K8nkFCsDD4xSpEofAgCFK4EJ0xvjB6VNLmmnDjQayjifDhAV%2FLYOfH%2FCV3DAkWGQkXG5RJzvHUbGh5dbQA60q4%2F0UhKpts%2FnKyLixtmdMUBOm1Tu257tB7Nx4qwGUW5B85iR4cQGO4oCd7vF5lYnbJAj3NNrxBWCidbWK5SxyLbGpjuZg4W1GsxDOmm0TV4WrZ0va6QJ8PWvluhuSMZ3mxGgVhSoQUFH7tkdVVz%2FCSfzUIcKqjsvqBec7gx5X%2BR0fr8QuNqCltwGyXJn3MKVdE07JdAF8%2Bpc7VsDNNNW3r9MMj7ncQGOqUBYYz7CXdqKB7%2BQUrCihl6B1yjjmZ03Q%2FR8ot3arPM%2B8NwfEbf4D%2FVg1oE1ci1NoK%2Bgn8BRMS12FxnvZMVr%2F3qf%2BDiJld%2B2tCGOnMaboeHKuHpL1hNw3JXEXzR8%2BfY0V52Lq6QkrQRuf6Qi34JJ9zUsqq4w%2Bk8THzqtKEBCXSlhiyeQ6fKvCMRYuknlc75rzGPZdUQUPDpOvVokNiUaXHfafYVGFxo&X-Amz-Signature=f1b008dc83dbd7c068cad78a4464fae4643c1bff4f0f3c8ea242cbd86fcbe851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXJSMCGU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIApuTVYzQMLd59yEyz8bLWqKb%2B058GHux%2BbbS78zIS5mAiEA%2FCfEHY7r6O1FxRJ%2FcJ58JhPlOvH%2FIvQys%2BHMIe54DAcqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADDM%2FPkYzBqL8z8jircA8AHLoRRjbtdedVFIwfthd6brvHWMuzwhoUXF1xZ%2FT36GzU5LZiVPfyTH2Mf0%2FkClO3lRzRCIvB4Jfd13PJuFI94qMHK4os5RAFPiCvuwJWnKltCWPxbMu4TSq4LXoe51Vos%2Ft2bxco7WeQgXSEzZolktgcOrX1RUt8CFPpGMtBIrKajQflbecsdKjl38RrGlqv1hOYqZse7Pzj1eb9zDCa380T8oiR4cI%2FPT3v2ILM8RQDZ7nG8a3mgF0Gggy3rY7u53EJUYSXDf%2F5E38Z7QxbDy2ruLRoe%2FpHAQte8ZgjDv4B2syDBKzEXpHEC2gH9NSDnaQgx0tPJO4Y87K8nkFCsDD4xSpEofAgCFK4EJ0xvjB6VNLmmnDjQayjifDhAV%2FLYOfH%2FCV3DAkWGQkXG5RJzvHUbGh5dbQA60q4%2F0UhKpts%2FnKyLixtmdMUBOm1Tu257tB7Nx4qwGUW5B85iR4cQGO4oCd7vF5lYnbJAj3NNrxBWCidbWK5SxyLbGpjuZg4W1GsxDOmm0TV4WrZ0va6QJ8PWvluhuSMZ3mxGgVhSoQUFH7tkdVVz%2FCSfzUIcKqjsvqBec7gx5X%2BR0fr8QuNqCltwGyXJn3MKVdE07JdAF8%2Bpc7VsDNNNW3r9MMj7ncQGOqUBYYz7CXdqKB7%2BQUrCihl6B1yjjmZ03Q%2FR8ot3arPM%2B8NwfEbf4D%2FVg1oE1ci1NoK%2Bgn8BRMS12FxnvZMVr%2F3qf%2BDiJld%2B2tCGOnMaboeHKuHpL1hNw3JXEXzR8%2BfY0V52Lq6QkrQRuf6Qi34JJ9zUsqq4w%2Bk8THzqtKEBCXSlhiyeQ6fKvCMRYuknlc75rzGPZdUQUPDpOvVokNiUaXHfafYVGFxo&X-Amz-Signature=e774e0e323da3deb26a7e08e21568170b513622d9ab06bde2db94056ee4dcd41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFMYNQQG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDZcx4dRcnzmvd%2BUq0r%2BDjKONiTG8XjE%2F%2FEOAfalZn5kgIgP%2FqSOytcwjNO7mWTatiAIwASXb3tA%2FuwqFr9AkS46hwqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBaeXHIu291n8d%2FSircA1TNPxTxV3eB0MZuJ0djmg2i0lJl2hQyEkqTlMUzXtfVCO0i3nzKKcSvesxxSHSxwLPsBCpZFVTdNCrDW7%2FlL34faQYmYX4CP50notE0WqS%2BN%2FRkTR6Eiz5yM9Fbsnm2M9tEcoh6jq6ym2LUpkSIospNa2BqYUBJAqY8flRmg03a3yiG505Xk7QDZ6beibnz%2Bb2Om3s8Vr0balE7umAx1FZUNyOFIVp%2Bl5DbzDi0%2FPsVIGs2M%2BGXx0tw%2Fq0wEOR5%2BMoqhnhaR%2Byvp8kLNa1hiElfjKu8Kd3wWmr3kHmKk99h5%2BL3zfSAFdvJMD%2FG6z7w5J5Aj9r4WNUNsCvLN%2Fs4%2BbZHQBBLY8eYIZiL%2Fk5fsYGhMCYwhvX4LKnr8Ov4Nqj9NZ0cxfiBeJinDwYBbvpearjg55Emt8YW%2BfObpQoDuIKC41YTSwKr96KGEhkgVXALAgzPlSb0p0yXz8eLwHCjDQcxHMddQc0dZnULqNxPPt6GLRphzFk9wK%2F2W827e0PYcTjgW5o%2Fd76fCJcRTf6ewxSYVob9yf1wQJxIjl%2BSIweIvMZcXKCNkPt%2FNJkvLcuO9C1KlAOI8C9REGkj%2FwS2DPSz5eB6wUxYmIuBTbMNW%2FHHLQwm5qDHtT9AWsrdMOr8ncQGOqUBvHHpocXATvTxKNJkk8Fly0hivUDmTQWnvsyU2HD3lRRtlfuvpwZcptdvOz2cOt%2FFe61MXSiq9Y9kmLcD%2BHSeSRNOZjX%2BE9hwDsYXlwQO2dyUao4E7fXKO%2F8DE2qzMUSnCG3hZ9UmYW5PqKs3nIdmED3yE6O0XraSIqPJDqoP69IPXVJFA1xSWw2yz9GtYlH467FTCRHly2VMuiKiy8XHgxMXlZ6e&X-Amz-Signature=4a56b09c0eeb2a5371b14a45bf18097f5cfc2bd4dd5bb2605771573b1f242bfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFMYNQQG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDZcx4dRcnzmvd%2BUq0r%2BDjKONiTG8XjE%2F%2FEOAfalZn5kgIgP%2FqSOytcwjNO7mWTatiAIwASXb3tA%2FuwqFr9AkS46hwqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBaeXHIu291n8d%2FSircA1TNPxTxV3eB0MZuJ0djmg2i0lJl2hQyEkqTlMUzXtfVCO0i3nzKKcSvesxxSHSxwLPsBCpZFVTdNCrDW7%2FlL34faQYmYX4CP50notE0WqS%2BN%2FRkTR6Eiz5yM9Fbsnm2M9tEcoh6jq6ym2LUpkSIospNa2BqYUBJAqY8flRmg03a3yiG505Xk7QDZ6beibnz%2Bb2Om3s8Vr0balE7umAx1FZUNyOFIVp%2Bl5DbzDi0%2FPsVIGs2M%2BGXx0tw%2Fq0wEOR5%2BMoqhnhaR%2Byvp8kLNa1hiElfjKu8Kd3wWmr3kHmKk99h5%2BL3zfSAFdvJMD%2FG6z7w5J5Aj9r4WNUNsCvLN%2Fs4%2BbZHQBBLY8eYIZiL%2Fk5fsYGhMCYwhvX4LKnr8Ov4Nqj9NZ0cxfiBeJinDwYBbvpearjg55Emt8YW%2BfObpQoDuIKC41YTSwKr96KGEhkgVXALAgzPlSb0p0yXz8eLwHCjDQcxHMddQc0dZnULqNxPPt6GLRphzFk9wK%2F2W827e0PYcTjgW5o%2Fd76fCJcRTf6ewxSYVob9yf1wQJxIjl%2BSIweIvMZcXKCNkPt%2FNJkvLcuO9C1KlAOI8C9REGkj%2FwS2DPSz5eB6wUxYmIuBTbMNW%2FHHLQwm5qDHtT9AWsrdMOr8ncQGOqUBvHHpocXATvTxKNJkk8Fly0hivUDmTQWnvsyU2HD3lRRtlfuvpwZcptdvOz2cOt%2FFe61MXSiq9Y9kmLcD%2BHSeSRNOZjX%2BE9hwDsYXlwQO2dyUao4E7fXKO%2F8DE2qzMUSnCG3hZ9UmYW5PqKs3nIdmED3yE6O0XraSIqPJDqoP69IPXVJFA1xSWw2yz9GtYlH467FTCRHly2VMuiKiy8XHgxMXlZ6e&X-Amz-Signature=f15c0d95ed8c73b944fb469f8c562c3f5a02f3f396b41fe37fdbe19f25a59921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFMYNQQG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDZcx4dRcnzmvd%2BUq0r%2BDjKONiTG8XjE%2F%2FEOAfalZn5kgIgP%2FqSOytcwjNO7mWTatiAIwASXb3tA%2FuwqFr9AkS46hwqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBaeXHIu291n8d%2FSircA1TNPxTxV3eB0MZuJ0djmg2i0lJl2hQyEkqTlMUzXtfVCO0i3nzKKcSvesxxSHSxwLPsBCpZFVTdNCrDW7%2FlL34faQYmYX4CP50notE0WqS%2BN%2FRkTR6Eiz5yM9Fbsnm2M9tEcoh6jq6ym2LUpkSIospNa2BqYUBJAqY8flRmg03a3yiG505Xk7QDZ6beibnz%2Bb2Om3s8Vr0balE7umAx1FZUNyOFIVp%2Bl5DbzDi0%2FPsVIGs2M%2BGXx0tw%2Fq0wEOR5%2BMoqhnhaR%2Byvp8kLNa1hiElfjKu8Kd3wWmr3kHmKk99h5%2BL3zfSAFdvJMD%2FG6z7w5J5Aj9r4WNUNsCvLN%2Fs4%2BbZHQBBLY8eYIZiL%2Fk5fsYGhMCYwhvX4LKnr8Ov4Nqj9NZ0cxfiBeJinDwYBbvpearjg55Emt8YW%2BfObpQoDuIKC41YTSwKr96KGEhkgVXALAgzPlSb0p0yXz8eLwHCjDQcxHMddQc0dZnULqNxPPt6GLRphzFk9wK%2F2W827e0PYcTjgW5o%2Fd76fCJcRTf6ewxSYVob9yf1wQJxIjl%2BSIweIvMZcXKCNkPt%2FNJkvLcuO9C1KlAOI8C9REGkj%2FwS2DPSz5eB6wUxYmIuBTbMNW%2FHHLQwm5qDHtT9AWsrdMOr8ncQGOqUBvHHpocXATvTxKNJkk8Fly0hivUDmTQWnvsyU2HD3lRRtlfuvpwZcptdvOz2cOt%2FFe61MXSiq9Y9kmLcD%2BHSeSRNOZjX%2BE9hwDsYXlwQO2dyUao4E7fXKO%2F8DE2qzMUSnCG3hZ9UmYW5PqKs3nIdmED3yE6O0XraSIqPJDqoP69IPXVJFA1xSWw2yz9GtYlH467FTCRHly2VMuiKiy8XHgxMXlZ6e&X-Amz-Signature=8563d609428f7d180d2a3dd67ad99e6ef6000174808e4f4a650b198d6fe2db5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFMYNQQG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDZcx4dRcnzmvd%2BUq0r%2BDjKONiTG8XjE%2F%2FEOAfalZn5kgIgP%2FqSOytcwjNO7mWTatiAIwASXb3tA%2FuwqFr9AkS46hwqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBaeXHIu291n8d%2FSircA1TNPxTxV3eB0MZuJ0djmg2i0lJl2hQyEkqTlMUzXtfVCO0i3nzKKcSvesxxSHSxwLPsBCpZFVTdNCrDW7%2FlL34faQYmYX4CP50notE0WqS%2BN%2FRkTR6Eiz5yM9Fbsnm2M9tEcoh6jq6ym2LUpkSIospNa2BqYUBJAqY8flRmg03a3yiG505Xk7QDZ6beibnz%2Bb2Om3s8Vr0balE7umAx1FZUNyOFIVp%2Bl5DbzDi0%2FPsVIGs2M%2BGXx0tw%2Fq0wEOR5%2BMoqhnhaR%2Byvp8kLNa1hiElfjKu8Kd3wWmr3kHmKk99h5%2BL3zfSAFdvJMD%2FG6z7w5J5Aj9r4WNUNsCvLN%2Fs4%2BbZHQBBLY8eYIZiL%2Fk5fsYGhMCYwhvX4LKnr8Ov4Nqj9NZ0cxfiBeJinDwYBbvpearjg55Emt8YW%2BfObpQoDuIKC41YTSwKr96KGEhkgVXALAgzPlSb0p0yXz8eLwHCjDQcxHMddQc0dZnULqNxPPt6GLRphzFk9wK%2F2W827e0PYcTjgW5o%2Fd76fCJcRTf6ewxSYVob9yf1wQJxIjl%2BSIweIvMZcXKCNkPt%2FNJkvLcuO9C1KlAOI8C9REGkj%2FwS2DPSz5eB6wUxYmIuBTbMNW%2FHHLQwm5qDHtT9AWsrdMOr8ncQGOqUBvHHpocXATvTxKNJkk8Fly0hivUDmTQWnvsyU2HD3lRRtlfuvpwZcptdvOz2cOt%2FFe61MXSiq9Y9kmLcD%2BHSeSRNOZjX%2BE9hwDsYXlwQO2dyUao4E7fXKO%2F8DE2qzMUSnCG3hZ9UmYW5PqKs3nIdmED3yE6O0XraSIqPJDqoP69IPXVJFA1xSWw2yz9GtYlH467FTCRHly2VMuiKiy8XHgxMXlZ6e&X-Amz-Signature=2cba3522de9e458e80b116454ee0f738a061c2a7c5ef2c6cbaf7d3cbc5bc2489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFMYNQQG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDZcx4dRcnzmvd%2BUq0r%2BDjKONiTG8XjE%2F%2FEOAfalZn5kgIgP%2FqSOytcwjNO7mWTatiAIwASXb3tA%2FuwqFr9AkS46hwqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBaeXHIu291n8d%2FSircA1TNPxTxV3eB0MZuJ0djmg2i0lJl2hQyEkqTlMUzXtfVCO0i3nzKKcSvesxxSHSxwLPsBCpZFVTdNCrDW7%2FlL34faQYmYX4CP50notE0WqS%2BN%2FRkTR6Eiz5yM9Fbsnm2M9tEcoh6jq6ym2LUpkSIospNa2BqYUBJAqY8flRmg03a3yiG505Xk7QDZ6beibnz%2Bb2Om3s8Vr0balE7umAx1FZUNyOFIVp%2Bl5DbzDi0%2FPsVIGs2M%2BGXx0tw%2Fq0wEOR5%2BMoqhnhaR%2Byvp8kLNa1hiElfjKu8Kd3wWmr3kHmKk99h5%2BL3zfSAFdvJMD%2FG6z7w5J5Aj9r4WNUNsCvLN%2Fs4%2BbZHQBBLY8eYIZiL%2Fk5fsYGhMCYwhvX4LKnr8Ov4Nqj9NZ0cxfiBeJinDwYBbvpearjg55Emt8YW%2BfObpQoDuIKC41YTSwKr96KGEhkgVXALAgzPlSb0p0yXz8eLwHCjDQcxHMddQc0dZnULqNxPPt6GLRphzFk9wK%2F2W827e0PYcTjgW5o%2Fd76fCJcRTf6ewxSYVob9yf1wQJxIjl%2BSIweIvMZcXKCNkPt%2FNJkvLcuO9C1KlAOI8C9REGkj%2FwS2DPSz5eB6wUxYmIuBTbMNW%2FHHLQwm5qDHtT9AWsrdMOr8ncQGOqUBvHHpocXATvTxKNJkk8Fly0hivUDmTQWnvsyU2HD3lRRtlfuvpwZcptdvOz2cOt%2FFe61MXSiq9Y9kmLcD%2BHSeSRNOZjX%2BE9hwDsYXlwQO2dyUao4E7fXKO%2F8DE2qzMUSnCG3hZ9UmYW5PqKs3nIdmED3yE6O0XraSIqPJDqoP69IPXVJFA1xSWw2yz9GtYlH467FTCRHly2VMuiKiy8XHgxMXlZ6e&X-Amz-Signature=7e81673cf28737fb6b2763f1225bea077d74f6820da409ab54ef8a045cbc646e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFMYNQQG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDZcx4dRcnzmvd%2BUq0r%2BDjKONiTG8XjE%2F%2FEOAfalZn5kgIgP%2FqSOytcwjNO7mWTatiAIwASXb3tA%2FuwqFr9AkS46hwqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBaeXHIu291n8d%2FSircA1TNPxTxV3eB0MZuJ0djmg2i0lJl2hQyEkqTlMUzXtfVCO0i3nzKKcSvesxxSHSxwLPsBCpZFVTdNCrDW7%2FlL34faQYmYX4CP50notE0WqS%2BN%2FRkTR6Eiz5yM9Fbsnm2M9tEcoh6jq6ym2LUpkSIospNa2BqYUBJAqY8flRmg03a3yiG505Xk7QDZ6beibnz%2Bb2Om3s8Vr0balE7umAx1FZUNyOFIVp%2Bl5DbzDi0%2FPsVIGs2M%2BGXx0tw%2Fq0wEOR5%2BMoqhnhaR%2Byvp8kLNa1hiElfjKu8Kd3wWmr3kHmKk99h5%2BL3zfSAFdvJMD%2FG6z7w5J5Aj9r4WNUNsCvLN%2Fs4%2BbZHQBBLY8eYIZiL%2Fk5fsYGhMCYwhvX4LKnr8Ov4Nqj9NZ0cxfiBeJinDwYBbvpearjg55Emt8YW%2BfObpQoDuIKC41YTSwKr96KGEhkgVXALAgzPlSb0p0yXz8eLwHCjDQcxHMddQc0dZnULqNxPPt6GLRphzFk9wK%2F2W827e0PYcTjgW5o%2Fd76fCJcRTf6ewxSYVob9yf1wQJxIjl%2BSIweIvMZcXKCNkPt%2FNJkvLcuO9C1KlAOI8C9REGkj%2FwS2DPSz5eB6wUxYmIuBTbMNW%2FHHLQwm5qDHtT9AWsrdMOr8ncQGOqUBvHHpocXATvTxKNJkk8Fly0hivUDmTQWnvsyU2HD3lRRtlfuvpwZcptdvOz2cOt%2FFe61MXSiq9Y9kmLcD%2BHSeSRNOZjX%2BE9hwDsYXlwQO2dyUao4E7fXKO%2F8DE2qzMUSnCG3hZ9UmYW5PqKs3nIdmED3yE6O0XraSIqPJDqoP69IPXVJFA1xSWw2yz9GtYlH467FTCRHly2VMuiKiy8XHgxMXlZ6e&X-Amz-Signature=b7a645e223ed7003d6b3335d9f8309bae94379210f2b8f09361d3a165431b205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
