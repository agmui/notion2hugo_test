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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE2BCAW3%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRhvIbGBXOTxxeGDOtZp2Ze3o%2F7GfPy7jxGjvRZ19zRgIhAMFEMhYf4ueolhXzjRxPAZESgzhQzzBWISUo7%2F672yYTKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWzZ3hTDgNehIzIeUq3AP%2BATsdJTUaY4I16VE0LJUX86siaGG%2FSGja0E0RT6hQloxssQGC0UGGrg%2B1JfvfRXf7me7qmZlnm1oPhpR3uTOaDOjA%2B2zNi7wMF4ibM73kQjrP2B5k4uZXxENAQGfUf7BC5B%2FTylUVwcWXnQIbMTM1Dmq%2FuwkwMZjiP1%2FwT0auUDnwzgumFVXVgcsVNgjH%2B5kwSrXanca5Z3KtUDEH1bzZB42HyZYUcNMYwDwG%2FFM8sMg9qJgJI2tvkIyJj7VTV7opDjNrE%2FQy18XfOLlN4shmq0oYAfmqR9wHb8bV2PU409u9d%2Fqw8UGjZ2sHat5TbRWYvtpTfVVEHb8ZVci7BLFVwC0tzTm0hNU3bnWIifPUpjylK%2FudS19%2BZHE4%2FYN7BiYJeiPeBya0bdPvfUMYWiGGNbgoNC3F%2BLeZvhr2abXd9I5wataMeNtTAOvfCub530lQd%2F1LvdAyEJvCeXGs0UG9cbuw625joOY577gqo07YTfZywmt3RHt5vPXuD0x2x39z0CkwGGqrVvAjJTxrlVtWWh14wA9TtQ31zuHj2fJxj%2BHZEG0VSKAdm2r4EMO7vtjCPOaK%2Fa15V1LV%2FFiTXnroqOKD%2BRGMrkk9wFPwKpRzsiE07xIr0q1RqhaIdjChxaPUBjqkAeW6ooKp5%2FNOTdXTTYGVYvG7ZPk0wVc8Qrouea0VXzMogRLFSMrzkshfnasBROiZzaEHEV1FAE3bZegrHsI3%2FMEVyHSOt1IJVNw02Hse9kPircpZz74lJLXMCbwV9gJVw2PZi8Br%2FBr12nIhGGS%2BsFB5lblJfLvOJ6dp4WdDN3lY837xH%2BOG4ORrB68g3bNvcVKe%2Bul%2B%2FaYtM1NlxrJS4Hx7YtRJ&X-Amz-Signature=30d900425ee813c241dff2c1123b649a14c4e502adbd47d3bed74c166de6ef78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE2BCAW3%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRhvIbGBXOTxxeGDOtZp2Ze3o%2F7GfPy7jxGjvRZ19zRgIhAMFEMhYf4ueolhXzjRxPAZESgzhQzzBWISUo7%2F672yYTKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWzZ3hTDgNehIzIeUq3AP%2BATsdJTUaY4I16VE0LJUX86siaGG%2FSGja0E0RT6hQloxssQGC0UGGrg%2B1JfvfRXf7me7qmZlnm1oPhpR3uTOaDOjA%2B2zNi7wMF4ibM73kQjrP2B5k4uZXxENAQGfUf7BC5B%2FTylUVwcWXnQIbMTM1Dmq%2FuwkwMZjiP1%2FwT0auUDnwzgumFVXVgcsVNgjH%2B5kwSrXanca5Z3KtUDEH1bzZB42HyZYUcNMYwDwG%2FFM8sMg9qJgJI2tvkIyJj7VTV7opDjNrE%2FQy18XfOLlN4shmq0oYAfmqR9wHb8bV2PU409u9d%2Fqw8UGjZ2sHat5TbRWYvtpTfVVEHb8ZVci7BLFVwC0tzTm0hNU3bnWIifPUpjylK%2FudS19%2BZHE4%2FYN7BiYJeiPeBya0bdPvfUMYWiGGNbgoNC3F%2BLeZvhr2abXd9I5wataMeNtTAOvfCub530lQd%2F1LvdAyEJvCeXGs0UG9cbuw625joOY577gqo07YTfZywmt3RHt5vPXuD0x2x39z0CkwGGqrVvAjJTxrlVtWWh14wA9TtQ31zuHj2fJxj%2BHZEG0VSKAdm2r4EMO7vtjCPOaK%2Fa15V1LV%2FFiTXnroqOKD%2BRGMrkk9wFPwKpRzsiE07xIr0q1RqhaIdjChxaPUBjqkAeW6ooKp5%2FNOTdXTTYGVYvG7ZPk0wVc8Qrouea0VXzMogRLFSMrzkshfnasBROiZzaEHEV1FAE3bZegrHsI3%2FMEVyHSOt1IJVNw02Hse9kPircpZz74lJLXMCbwV9gJVw2PZi8Br%2FBr12nIhGGS%2BsFB5lblJfLvOJ6dp4WdDN3lY837xH%2BOG4ORrB68g3bNvcVKe%2Bul%2B%2FaYtM1NlxrJS4Hx7YtRJ&X-Amz-Signature=e7bd041f67df5ced64d2a46ed75dfc6877ce3715c543bc034717f2796e230167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE2BCAW3%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRhvIbGBXOTxxeGDOtZp2Ze3o%2F7GfPy7jxGjvRZ19zRgIhAMFEMhYf4ueolhXzjRxPAZESgzhQzzBWISUo7%2F672yYTKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWzZ3hTDgNehIzIeUq3AP%2BATsdJTUaY4I16VE0LJUX86siaGG%2FSGja0E0RT6hQloxssQGC0UGGrg%2B1JfvfRXf7me7qmZlnm1oPhpR3uTOaDOjA%2B2zNi7wMF4ibM73kQjrP2B5k4uZXxENAQGfUf7BC5B%2FTylUVwcWXnQIbMTM1Dmq%2FuwkwMZjiP1%2FwT0auUDnwzgumFVXVgcsVNgjH%2B5kwSrXanca5Z3KtUDEH1bzZB42HyZYUcNMYwDwG%2FFM8sMg9qJgJI2tvkIyJj7VTV7opDjNrE%2FQy18XfOLlN4shmq0oYAfmqR9wHb8bV2PU409u9d%2Fqw8UGjZ2sHat5TbRWYvtpTfVVEHb8ZVci7BLFVwC0tzTm0hNU3bnWIifPUpjylK%2FudS19%2BZHE4%2FYN7BiYJeiPeBya0bdPvfUMYWiGGNbgoNC3F%2BLeZvhr2abXd9I5wataMeNtTAOvfCub530lQd%2F1LvdAyEJvCeXGs0UG9cbuw625joOY577gqo07YTfZywmt3RHt5vPXuD0x2x39z0CkwGGqrVvAjJTxrlVtWWh14wA9TtQ31zuHj2fJxj%2BHZEG0VSKAdm2r4EMO7vtjCPOaK%2Fa15V1LV%2FFiTXnroqOKD%2BRGMrkk9wFPwKpRzsiE07xIr0q1RqhaIdjChxaPUBjqkAeW6ooKp5%2FNOTdXTTYGVYvG7ZPk0wVc8Qrouea0VXzMogRLFSMrzkshfnasBROiZzaEHEV1FAE3bZegrHsI3%2FMEVyHSOt1IJVNw02Hse9kPircpZz74lJLXMCbwV9gJVw2PZi8Br%2FBr12nIhGGS%2BsFB5lblJfLvOJ6dp4WdDN3lY837xH%2BOG4ORrB68g3bNvcVKe%2Bul%2B%2FaYtM1NlxrJS4Hx7YtRJ&X-Amz-Signature=665f5130a759ba6e693d1e3121b182668ed625e6e338286f58bf48514764bc3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE2BCAW3%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRhvIbGBXOTxxeGDOtZp2Ze3o%2F7GfPy7jxGjvRZ19zRgIhAMFEMhYf4ueolhXzjRxPAZESgzhQzzBWISUo7%2F672yYTKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWzZ3hTDgNehIzIeUq3AP%2BATsdJTUaY4I16VE0LJUX86siaGG%2FSGja0E0RT6hQloxssQGC0UGGrg%2B1JfvfRXf7me7qmZlnm1oPhpR3uTOaDOjA%2B2zNi7wMF4ibM73kQjrP2B5k4uZXxENAQGfUf7BC5B%2FTylUVwcWXnQIbMTM1Dmq%2FuwkwMZjiP1%2FwT0auUDnwzgumFVXVgcsVNgjH%2B5kwSrXanca5Z3KtUDEH1bzZB42HyZYUcNMYwDwG%2FFM8sMg9qJgJI2tvkIyJj7VTV7opDjNrE%2FQy18XfOLlN4shmq0oYAfmqR9wHb8bV2PU409u9d%2Fqw8UGjZ2sHat5TbRWYvtpTfVVEHb8ZVci7BLFVwC0tzTm0hNU3bnWIifPUpjylK%2FudS19%2BZHE4%2FYN7BiYJeiPeBya0bdPvfUMYWiGGNbgoNC3F%2BLeZvhr2abXd9I5wataMeNtTAOvfCub530lQd%2F1LvdAyEJvCeXGs0UG9cbuw625joOY577gqo07YTfZywmt3RHt5vPXuD0x2x39z0CkwGGqrVvAjJTxrlVtWWh14wA9TtQ31zuHj2fJxj%2BHZEG0VSKAdm2r4EMO7vtjCPOaK%2Fa15V1LV%2FFiTXnroqOKD%2BRGMrkk9wFPwKpRzsiE07xIr0q1RqhaIdjChxaPUBjqkAeW6ooKp5%2FNOTdXTTYGVYvG7ZPk0wVc8Qrouea0VXzMogRLFSMrzkshfnasBROiZzaEHEV1FAE3bZegrHsI3%2FMEVyHSOt1IJVNw02Hse9kPircpZz74lJLXMCbwV9gJVw2PZi8Br%2FBr12nIhGGS%2BsFB5lblJfLvOJ6dp4WdDN3lY837xH%2BOG4ORrB68g3bNvcVKe%2Bul%2B%2FaYtM1NlxrJS4Hx7YtRJ&X-Amz-Signature=f52bba1ab0c6e9b7f782cc8694784bc053fbb618c41fec83188778722f3e1d10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE2BCAW3%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRhvIbGBXOTxxeGDOtZp2Ze3o%2F7GfPy7jxGjvRZ19zRgIhAMFEMhYf4ueolhXzjRxPAZESgzhQzzBWISUo7%2F672yYTKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWzZ3hTDgNehIzIeUq3AP%2BATsdJTUaY4I16VE0LJUX86siaGG%2FSGja0E0RT6hQloxssQGC0UGGrg%2B1JfvfRXf7me7qmZlnm1oPhpR3uTOaDOjA%2B2zNi7wMF4ibM73kQjrP2B5k4uZXxENAQGfUf7BC5B%2FTylUVwcWXnQIbMTM1Dmq%2FuwkwMZjiP1%2FwT0auUDnwzgumFVXVgcsVNgjH%2B5kwSrXanca5Z3KtUDEH1bzZB42HyZYUcNMYwDwG%2FFM8sMg9qJgJI2tvkIyJj7VTV7opDjNrE%2FQy18XfOLlN4shmq0oYAfmqR9wHb8bV2PU409u9d%2Fqw8UGjZ2sHat5TbRWYvtpTfVVEHb8ZVci7BLFVwC0tzTm0hNU3bnWIifPUpjylK%2FudS19%2BZHE4%2FYN7BiYJeiPeBya0bdPvfUMYWiGGNbgoNC3F%2BLeZvhr2abXd9I5wataMeNtTAOvfCub530lQd%2F1LvdAyEJvCeXGs0UG9cbuw625joOY577gqo07YTfZywmt3RHt5vPXuD0x2x39z0CkwGGqrVvAjJTxrlVtWWh14wA9TtQ31zuHj2fJxj%2BHZEG0VSKAdm2r4EMO7vtjCPOaK%2Fa15V1LV%2FFiTXnroqOKD%2BRGMrkk9wFPwKpRzsiE07xIr0q1RqhaIdjChxaPUBjqkAeW6ooKp5%2FNOTdXTTYGVYvG7ZPk0wVc8Qrouea0VXzMogRLFSMrzkshfnasBROiZzaEHEV1FAE3bZegrHsI3%2FMEVyHSOt1IJVNw02Hse9kPircpZz74lJLXMCbwV9gJVw2PZi8Br%2FBr12nIhGGS%2BsFB5lblJfLvOJ6dp4WdDN3lY837xH%2BOG4ORrB68g3bNvcVKe%2Bul%2B%2FaYtM1NlxrJS4Hx7YtRJ&X-Amz-Signature=408cd39d8c9961231c601677e2521204cd5985f02ec408607199451f47d51b44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE2BCAW3%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRhvIbGBXOTxxeGDOtZp2Ze3o%2F7GfPy7jxGjvRZ19zRgIhAMFEMhYf4ueolhXzjRxPAZESgzhQzzBWISUo7%2F672yYTKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWzZ3hTDgNehIzIeUq3AP%2BATsdJTUaY4I16VE0LJUX86siaGG%2FSGja0E0RT6hQloxssQGC0UGGrg%2B1JfvfRXf7me7qmZlnm1oPhpR3uTOaDOjA%2B2zNi7wMF4ibM73kQjrP2B5k4uZXxENAQGfUf7BC5B%2FTylUVwcWXnQIbMTM1Dmq%2FuwkwMZjiP1%2FwT0auUDnwzgumFVXVgcsVNgjH%2B5kwSrXanca5Z3KtUDEH1bzZB42HyZYUcNMYwDwG%2FFM8sMg9qJgJI2tvkIyJj7VTV7opDjNrE%2FQy18XfOLlN4shmq0oYAfmqR9wHb8bV2PU409u9d%2Fqw8UGjZ2sHat5TbRWYvtpTfVVEHb8ZVci7BLFVwC0tzTm0hNU3bnWIifPUpjylK%2FudS19%2BZHE4%2FYN7BiYJeiPeBya0bdPvfUMYWiGGNbgoNC3F%2BLeZvhr2abXd9I5wataMeNtTAOvfCub530lQd%2F1LvdAyEJvCeXGs0UG9cbuw625joOY577gqo07YTfZywmt3RHt5vPXuD0x2x39z0CkwGGqrVvAjJTxrlVtWWh14wA9TtQ31zuHj2fJxj%2BHZEG0VSKAdm2r4EMO7vtjCPOaK%2Fa15V1LV%2FFiTXnroqOKD%2BRGMrkk9wFPwKpRzsiE07xIr0q1RqhaIdjChxaPUBjqkAeW6ooKp5%2FNOTdXTTYGVYvG7ZPk0wVc8Qrouea0VXzMogRLFSMrzkshfnasBROiZzaEHEV1FAE3bZegrHsI3%2FMEVyHSOt1IJVNw02Hse9kPircpZz74lJLXMCbwV9gJVw2PZi8Br%2FBr12nIhGGS%2BsFB5lblJfLvOJ6dp4WdDN3lY837xH%2BOG4ORrB68g3bNvcVKe%2Bul%2B%2FaYtM1NlxrJS4Hx7YtRJ&X-Amz-Signature=784b9ec234bd32a8a5bfbdac9f10a1001a35006c9cd9d0ece893b22cb5d9248e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE2BCAW3%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRhvIbGBXOTxxeGDOtZp2Ze3o%2F7GfPy7jxGjvRZ19zRgIhAMFEMhYf4ueolhXzjRxPAZESgzhQzzBWISUo7%2F672yYTKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWzZ3hTDgNehIzIeUq3AP%2BATsdJTUaY4I16VE0LJUX86siaGG%2FSGja0E0RT6hQloxssQGC0UGGrg%2B1JfvfRXf7me7qmZlnm1oPhpR3uTOaDOjA%2B2zNi7wMF4ibM73kQjrP2B5k4uZXxENAQGfUf7BC5B%2FTylUVwcWXnQIbMTM1Dmq%2FuwkwMZjiP1%2FwT0auUDnwzgumFVXVgcsVNgjH%2B5kwSrXanca5Z3KtUDEH1bzZB42HyZYUcNMYwDwG%2FFM8sMg9qJgJI2tvkIyJj7VTV7opDjNrE%2FQy18XfOLlN4shmq0oYAfmqR9wHb8bV2PU409u9d%2Fqw8UGjZ2sHat5TbRWYvtpTfVVEHb8ZVci7BLFVwC0tzTm0hNU3bnWIifPUpjylK%2FudS19%2BZHE4%2FYN7BiYJeiPeBya0bdPvfUMYWiGGNbgoNC3F%2BLeZvhr2abXd9I5wataMeNtTAOvfCub530lQd%2F1LvdAyEJvCeXGs0UG9cbuw625joOY577gqo07YTfZywmt3RHt5vPXuD0x2x39z0CkwGGqrVvAjJTxrlVtWWh14wA9TtQ31zuHj2fJxj%2BHZEG0VSKAdm2r4EMO7vtjCPOaK%2Fa15V1LV%2FFiTXnroqOKD%2BRGMrkk9wFPwKpRzsiE07xIr0q1RqhaIdjChxaPUBjqkAeW6ooKp5%2FNOTdXTTYGVYvG7ZPk0wVc8Qrouea0VXzMogRLFSMrzkshfnasBROiZzaEHEV1FAE3bZegrHsI3%2FMEVyHSOt1IJVNw02Hse9kPircpZz74lJLXMCbwV9gJVw2PZi8Br%2FBr12nIhGGS%2BsFB5lblJfLvOJ6dp4WdDN3lY837xH%2BOG4ORrB68g3bNvcVKe%2Bul%2B%2FaYtM1NlxrJS4Hx7YtRJ&X-Amz-Signature=f9e40d7a4469903e7592cb6b33d6161622ca5a7a2a7c77cbd1c988c6e9461123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE2BCAW3%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRhvIbGBXOTxxeGDOtZp2Ze3o%2F7GfPy7jxGjvRZ19zRgIhAMFEMhYf4ueolhXzjRxPAZESgzhQzzBWISUo7%2F672yYTKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWzZ3hTDgNehIzIeUq3AP%2BATsdJTUaY4I16VE0LJUX86siaGG%2FSGja0E0RT6hQloxssQGC0UGGrg%2B1JfvfRXf7me7qmZlnm1oPhpR3uTOaDOjA%2B2zNi7wMF4ibM73kQjrP2B5k4uZXxENAQGfUf7BC5B%2FTylUVwcWXnQIbMTM1Dmq%2FuwkwMZjiP1%2FwT0auUDnwzgumFVXVgcsVNgjH%2B5kwSrXanca5Z3KtUDEH1bzZB42HyZYUcNMYwDwG%2FFM8sMg9qJgJI2tvkIyJj7VTV7opDjNrE%2FQy18XfOLlN4shmq0oYAfmqR9wHb8bV2PU409u9d%2Fqw8UGjZ2sHat5TbRWYvtpTfVVEHb8ZVci7BLFVwC0tzTm0hNU3bnWIifPUpjylK%2FudS19%2BZHE4%2FYN7BiYJeiPeBya0bdPvfUMYWiGGNbgoNC3F%2BLeZvhr2abXd9I5wataMeNtTAOvfCub530lQd%2F1LvdAyEJvCeXGs0UG9cbuw625joOY577gqo07YTfZywmt3RHt5vPXuD0x2x39z0CkwGGqrVvAjJTxrlVtWWh14wA9TtQ31zuHj2fJxj%2BHZEG0VSKAdm2r4EMO7vtjCPOaK%2Fa15V1LV%2FFiTXnroqOKD%2BRGMrkk9wFPwKpRzsiE07xIr0q1RqhaIdjChxaPUBjqkAeW6ooKp5%2FNOTdXTTYGVYvG7ZPk0wVc8Qrouea0VXzMogRLFSMrzkshfnasBROiZzaEHEV1FAE3bZegrHsI3%2FMEVyHSOt1IJVNw02Hse9kPircpZz74lJLXMCbwV9gJVw2PZi8Br%2FBr12nIhGGS%2BsFB5lblJfLvOJ6dp4WdDN3lY837xH%2BOG4ORrB68g3bNvcVKe%2Bul%2B%2FaYtM1NlxrJS4Hx7YtRJ&X-Amz-Signature=c52e87adcb5401294d40e997ddbba413a03784f80abc00ac7aba516374ec65af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE2BCAW3%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRhvIbGBXOTxxeGDOtZp2Ze3o%2F7GfPy7jxGjvRZ19zRgIhAMFEMhYf4ueolhXzjRxPAZESgzhQzzBWISUo7%2F672yYTKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWzZ3hTDgNehIzIeUq3AP%2BATsdJTUaY4I16VE0LJUX86siaGG%2FSGja0E0RT6hQloxssQGC0UGGrg%2B1JfvfRXf7me7qmZlnm1oPhpR3uTOaDOjA%2B2zNi7wMF4ibM73kQjrP2B5k4uZXxENAQGfUf7BC5B%2FTylUVwcWXnQIbMTM1Dmq%2FuwkwMZjiP1%2FwT0auUDnwzgumFVXVgcsVNgjH%2B5kwSrXanca5Z3KtUDEH1bzZB42HyZYUcNMYwDwG%2FFM8sMg9qJgJI2tvkIyJj7VTV7opDjNrE%2FQy18XfOLlN4shmq0oYAfmqR9wHb8bV2PU409u9d%2Fqw8UGjZ2sHat5TbRWYvtpTfVVEHb8ZVci7BLFVwC0tzTm0hNU3bnWIifPUpjylK%2FudS19%2BZHE4%2FYN7BiYJeiPeBya0bdPvfUMYWiGGNbgoNC3F%2BLeZvhr2abXd9I5wataMeNtTAOvfCub530lQd%2F1LvdAyEJvCeXGs0UG9cbuw625joOY577gqo07YTfZywmt3RHt5vPXuD0x2x39z0CkwGGqrVvAjJTxrlVtWWh14wA9TtQ31zuHj2fJxj%2BHZEG0VSKAdm2r4EMO7vtjCPOaK%2Fa15V1LV%2FFiTXnroqOKD%2BRGMrkk9wFPwKpRzsiE07xIr0q1RqhaIdjChxaPUBjqkAeW6ooKp5%2FNOTdXTTYGVYvG7ZPk0wVc8Qrouea0VXzMogRLFSMrzkshfnasBROiZzaEHEV1FAE3bZegrHsI3%2FMEVyHSOt1IJVNw02Hse9kPircpZz74lJLXMCbwV9gJVw2PZi8Br%2FBr12nIhGGS%2BsFB5lblJfLvOJ6dp4WdDN3lY837xH%2BOG4ORrB68g3bNvcVKe%2Bul%2B%2FaYtM1NlxrJS4Hx7YtRJ&X-Amz-Signature=2bb61737fd8a5e8d6922ffaf378971939f54405bb40290fdd93716f39c29955f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE2BCAW3%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRhvIbGBXOTxxeGDOtZp2Ze3o%2F7GfPy7jxGjvRZ19zRgIhAMFEMhYf4ueolhXzjRxPAZESgzhQzzBWISUo7%2F672yYTKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWzZ3hTDgNehIzIeUq3AP%2BATsdJTUaY4I16VE0LJUX86siaGG%2FSGja0E0RT6hQloxssQGC0UGGrg%2B1JfvfRXf7me7qmZlnm1oPhpR3uTOaDOjA%2B2zNi7wMF4ibM73kQjrP2B5k4uZXxENAQGfUf7BC5B%2FTylUVwcWXnQIbMTM1Dmq%2FuwkwMZjiP1%2FwT0auUDnwzgumFVXVgcsVNgjH%2B5kwSrXanca5Z3KtUDEH1bzZB42HyZYUcNMYwDwG%2FFM8sMg9qJgJI2tvkIyJj7VTV7opDjNrE%2FQy18XfOLlN4shmq0oYAfmqR9wHb8bV2PU409u9d%2Fqw8UGjZ2sHat5TbRWYvtpTfVVEHb8ZVci7BLFVwC0tzTm0hNU3bnWIifPUpjylK%2FudS19%2BZHE4%2FYN7BiYJeiPeBya0bdPvfUMYWiGGNbgoNC3F%2BLeZvhr2abXd9I5wataMeNtTAOvfCub530lQd%2F1LvdAyEJvCeXGs0UG9cbuw625joOY577gqo07YTfZywmt3RHt5vPXuD0x2x39z0CkwGGqrVvAjJTxrlVtWWh14wA9TtQ31zuHj2fJxj%2BHZEG0VSKAdm2r4EMO7vtjCPOaK%2Fa15V1LV%2FFiTXnroqOKD%2BRGMrkk9wFPwKpRzsiE07xIr0q1RqhaIdjChxaPUBjqkAeW6ooKp5%2FNOTdXTTYGVYvG7ZPk0wVc8Qrouea0VXzMogRLFSMrzkshfnasBROiZzaEHEV1FAE3bZegrHsI3%2FMEVyHSOt1IJVNw02Hse9kPircpZz74lJLXMCbwV9gJVw2PZi8Br%2FBr12nIhGGS%2BsFB5lblJfLvOJ6dp4WdDN3lY837xH%2BOG4ORrB68g3bNvcVKe%2Bul%2B%2FaYtM1NlxrJS4Hx7YtRJ&X-Amz-Signature=b7378421af40118c3b8a61ce0618952c320c0585da1045d2b1908a0ed8531514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US5E5XYK%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrPbX6tTRGH%2BGIrlWxqjKVywrCcGaQBMG3k%2BFUjBCt2AiEAnXyUvlreIwwBWr4qHbYLLBdyKswt4yQy2o2zaf0Lm68qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1w8e64ZewG%2Bu8%2FjircA7kIQ6mKfBuEyI8pAPRjhzMXvgPr5eePTvQjZ1tNt4TuyCkki5%2BlQvhk9GwDJFlsrTNmsvtePvg7YZ2U2PhghIQXe6Ogb%2FyQApeW2u4L9gK1fyzoc2B0sg4W8rydX401sEMOQFt%2Bc5On8c3e5SATWgWcKWxY3kZED20bSXGp9KUNaWR5ysV7Q3C5ydnfQDsSb6ooN8SBIX7RLRXkn0xvVmRl2yrOO0EKMXHyprXbb0LjbTh5euyTqHe0OzlhFiRQadt6g9gXWtDr%2BxoQoij%2F0Yry3MrDfPjQtZqRhEJKpc%2FqrQ32FZlh0UpMET%2FdY1MRmqlGRv2dJs9h2fr1P5QELfKJlTG8SXn8app3%2BajyGBW0r8IL3KKoC8RozspIRa8VZIMUE7uQrohruxOGqP1PP7xj5rtUiOZ4%2B4j804ScKzIuVmjeSL1ryEEWWQKS03lOJGoNHDLFykblhd%2Fiahf8WeLnTr4SwZnEOacem3s%2BOnSIq9b8W%2BSrvSg6pg9cyxzaxZyCUEApkm1O8FXYss0y6aWR%2FcWSVVZnsfVUJ3kCDEWMLkQTVPR%2Foo3TOOnrDbOSWNnu%2FTYUxmR8g916kwTexys6KmIqbBoXnoCbrKdhpT%2FFuKeLezwuBm%2FZLOQOMLXDo9QGOqUBVl1Kg%2BY3OwHQiEfYnZSTJrB3VwZoNSeCALQDegnLsBE6Y1oAIK6QYsVbPAyvr33SACW1aoocG7J7JaoqabTtnUrw23%2BCLPcQ9ueguzZywQ%2BufejE913YivKFSdjQQJMTYH6jK8LcAfoFcpYAccufBeJlnajE6FPavVcJBlg38tigV3EbCdA8S5cgRgKrDM%2FeecRPeb%2FPdDfluhhNKOzXgVdegntH&X-Amz-Signature=778d602cd2e85d510b6fb465ad19c50fd1ac92e45d91a3f5db60575eb115e7fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGEHQLNH%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbNbJY3dJYNke8fbMw24QpXfe6b7uKmxSdPtIfnp0SpAiEA1IIZ4kM93EcqRqg%2BGnv%2BcRJMfb52C54SGoIUb%2FFYx8MqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPfjaV8XxSY2fbkqircA0ruOtCnWXhb0%2Fxzp1MN8MWb8xefLDCbag%2BNyAiMhVjpJOrNKuWhd1%2B08QKv8LfjnkMVa9HzYmp%2BxE8QZLOAD5skLtwgso3CRIti%2FdRptp4lIId1W11nq1RJu21Vd%2FSxgS%2BL61Ly3lKJlETUsSqVnpa5oX4nyTYWIIf%2B%2BxDPXkil4T%2Bft7TWIVEXw4GI%2FjZRw0YOJRrBGVPFiZhpDag9sAWoD60HLyKqaciFaRGoSwLbY7sOuh2EUQZLYdBJ7RuL0Cpatjn70%2BW9e3TLrEPgCDmUMrbcyBVk1BvlGK6xDlytaXInwNpYig65A%2FauFUo7yWh%2FEXtWbJ02Omgws%2F7thd2jW9DM1UIo3ZHQbsKHWWoDPg%2B7Y6oDSxrNz0Yydegd83AYeTYIcp%2BNROBXl6TF0RSJI%2FJTFUXsp9y%2FjJMr6cwBCv1Sx08h7Cs5UIVw5CRoPf2LIGms0ilvb615LpfwvA8AYWAkFWqmWGNctp2RHk3G8akeDkK7NU5hSRJ2F82WwoHgwrCAEhnOKctJiKoZMSuJyNVigNGLzbUZHyfeXRZKQNsjzpo0WZbHYkSVRD%2F3ZG5E31dj1SZHdVG4a7A3cZGNn62XfR%2B6g%2B7OrC2bEPIsz3lY1yX6Weh2CQz7MLjCo9QGOqUBWd6xZzsCK8R8DMBDfLbc5wmayvZHZf8fFTY2ywjOOnO8txyL5xKnS5%2BB7aYNBz8Ttl8JuiunDxOAvvwqMF0VB53wKXGdF%2BQ%2BXM0C7D1t9AT5vfZorffJmH7xa39PpaAE4piFP%2FFZlAH%2BLCKpf6hu0LCcGgl7ChUWrlRFRFKLBLB146HlKlTg2tf8wFOqgodFW8fwzZ9CEQo9fCKc%2F9gR6ISb7KYb&X-Amz-Signature=0f303f0a319dfc344bd37fd4fa8c1d135b76cc2493a2c265ef38129257ffaa34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ZYC4VV%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOarPqlzc%2FbQL%2BTIvXAogFxgIFM%2BZpqVZ15Iop7NTsFAiEA%2BAlRfjdCsz%2BHT5KLslgRC5WZ%2F524rMQBWa97XzJvrpsqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMyRO0qhhXIaYi2oyrcAw9f9aLhTpEGQ8%2F41iA4jNwNMDhsQW%2BtMJegjLXgErofBzeilG%2Bq1%2FcDIHwJtkEWDKIC6xKtgvsEd7ByQCjsDNJo3PDV7%2F1cXumOF4y5mWxftyuWJTDE8TY8J74s39y8Vmyw%2FQtPouxb9yKY6hCNUZuglhUpde6847zvoenfvjAonAE9wg0kQxPvTiOBGltb9%2BVUnUtiLZihuGXkFOaQrxrOAPP%2BRGTxG%2BM4accz42quBgW3bSNrFO24k8P7cZ6IiCEKUDF88mNDcsDdFTBkHFERXOCbATLpGn8pva1duLYGCgzjEgzADNV7NkXqhzaeY4%2BsaDxzYWhNinHX%2BBv7kbSWa7BYhgnJEDDY63U6vEtUPdccpd6at1xa7dwynEzEw9Ttn4LX1WS3DEOnf9PmmafjdoE2Y2Wf%2FSrEsTlQXnJgd21I2EC7blvSi0PSb8UXaCKCbZcJxUnGrq%2FBKT5ISfsKsBpJK9%2BnKUrZOmtq1Y6BtDBogPLe4x%2FZAmp8OeQH0ABY1lQLxP4H9GIjF9WseUNIpkngiFCGGE2yNn8hRlyyc4fQZK%2BtTWcx7tRz1ajsgEgBsjE8e9%2BFrx5OR3Srlst8mP1wGpdhh6hYFusTzxmz%2F3E2z9kyyr2WeMPfMNHro9QGOqUBwQLiE02RF5Z6N1b97wD6C7tg9jAsjLpeZdPwGQvu2oagzkwJdOtydPUgd3pjVfb8L3STwKV8u%2FVsmPqHzw369VlUF0NaY903ImDU%2Bnd%2FcvLLxWinQr2PYdd%2BcgMqst%2FaEb6fpPpAjJOPRbFKK2UHwqCYqz7b7V%2B9rNvKTbKx3gjmW1bnt8IzvgF2JTFkRXc3uwedbuKMGDb%2Bg%2BVXebnpwdwCgHlk&X-Amz-Signature=0787c6717115df674365bce69beeb87347f42b8d691d5cbd6e1fe7b79a99bdb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE2BCAW3%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRhvIbGBXOTxxeGDOtZp2Ze3o%2F7GfPy7jxGjvRZ19zRgIhAMFEMhYf4ueolhXzjRxPAZESgzhQzzBWISUo7%2F672yYTKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWzZ3hTDgNehIzIeUq3AP%2BATsdJTUaY4I16VE0LJUX86siaGG%2FSGja0E0RT6hQloxssQGC0UGGrg%2B1JfvfRXf7me7qmZlnm1oPhpR3uTOaDOjA%2B2zNi7wMF4ibM73kQjrP2B5k4uZXxENAQGfUf7BC5B%2FTylUVwcWXnQIbMTM1Dmq%2FuwkwMZjiP1%2FwT0auUDnwzgumFVXVgcsVNgjH%2B5kwSrXanca5Z3KtUDEH1bzZB42HyZYUcNMYwDwG%2FFM8sMg9qJgJI2tvkIyJj7VTV7opDjNrE%2FQy18XfOLlN4shmq0oYAfmqR9wHb8bV2PU409u9d%2Fqw8UGjZ2sHat5TbRWYvtpTfVVEHb8ZVci7BLFVwC0tzTm0hNU3bnWIifPUpjylK%2FudS19%2BZHE4%2FYN7BiYJeiPeBya0bdPvfUMYWiGGNbgoNC3F%2BLeZvhr2abXd9I5wataMeNtTAOvfCub530lQd%2F1LvdAyEJvCeXGs0UG9cbuw625joOY577gqo07YTfZywmt3RHt5vPXuD0x2x39z0CkwGGqrVvAjJTxrlVtWWh14wA9TtQ31zuHj2fJxj%2BHZEG0VSKAdm2r4EMO7vtjCPOaK%2Fa15V1LV%2FFiTXnroqOKD%2BRGMrkk9wFPwKpRzsiE07xIr0q1RqhaIdjChxaPUBjqkAeW6ooKp5%2FNOTdXTTYGVYvG7ZPk0wVc8Qrouea0VXzMogRLFSMrzkshfnasBROiZzaEHEV1FAE3bZegrHsI3%2FMEVyHSOt1IJVNw02Hse9kPircpZz74lJLXMCbwV9gJVw2PZi8Br%2FBr12nIhGGS%2BsFB5lblJfLvOJ6dp4WdDN3lY837xH%2BOG4ORrB68g3bNvcVKe%2Bul%2B%2FaYtM1NlxrJS4Hx7YtRJ&X-Amz-Signature=a84c2d41d0badd4039b296396ebf0cd7a6da52b28c0878f627dd8bb3472dc26a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2MC5FXY%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFS%2FYsKIO%2BNrmNxiaPJUlIO43pPc32GcyQQPqb%2FOXvOQIhAPngH%2Bj0%2F8BsXRcdNPFBLGhsmL3U33VsGD8ufLFuBwomKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyp2kSrWku7LbI24%2B8q3AM0AHyMR0MoiKEXgvOoXqyf8Uu6E5u9D7G8kK1EWoTGJY5kqUyyhfmddo8qYwPwhlwXUGbvkUw47iN2tUt6t%2BUsozps4bcee58oQW0a1q9aYrgOXtuvM3twYQn0MnkGLHFzyqM8z9e%2F%2BAC5F6LthK4Z6KPpM%2FCtYTNrb1vUgeSPQE3wXaKOZCpSTOoWwHTHUu5iFRT2bOh%2FU%2FgbDckP8olkRY%2FHYV%2F2vReThErTNoXj2%2FqzMyiQlfjeOZt6U5zbkjJ14BnhGvUuPv%2Fl51pKx8LG78vtsfFicPasbSa0EPx1OEqya0nzP83Rbl1lCtkTeYC6P6XQmo%2FrEz%2Fj4sjyox%2B42O29OF4OrNg9j49fGMQVmNmPOh8s34DyRavhKdRwMoSDYNFvNWx2qXddpmKmK1eDmglXglv1ATE%2FSFbHzixPq5q%2BP0oJGh4jX9SQnmhtM0ZoPHI8q%2BGYcw8kbUB%2B%2Bko%2FTkysZSUoEKDynDDdphmr64JO1rmQf8HWcsJ52ggAutZHtdNUn1o7oxKsk2y3npbYsxyfDs%2FHqWFKfWedZdVNnzVf0j3aJ5balLaPfl5FZjv6sQlh1qveMZPco%2BpKDdlPfWw114sOEGgxG%2BcPxor7uh4mtQo%2FM4UZ5s5qvzCuwqPUBjqkAbVg6Xc6h6E0pCRZBq5UC4gLYFVjmO6m3FwpSnOLbk1CZoffay0pMwtuDuh2A2ypdS1HTelfR%2FjBsM%2FSmTecAzEHjXWw4k0YJ%2BghQa9hzGrfiGsH2lxqiIEb8epBYcOw%2BAnbHJusi20LRiV4BTD%2FKbNfP%2FLmhPQv%2FZlQGUkAkSHIFyj02JxoawKcSR2oMo4tIo7rnZn%2BjeUTHhtLzXmQU9K7cOTU&X-Amz-Signature=64059209fa1f723a2fbc38a05ae28edfbb0e9f7450f38f1d9a48169775b42c95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE2BCAW3%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRhvIbGBXOTxxeGDOtZp2Ze3o%2F7GfPy7jxGjvRZ19zRgIhAMFEMhYf4ueolhXzjRxPAZESgzhQzzBWISUo7%2F672yYTKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWzZ3hTDgNehIzIeUq3AP%2BATsdJTUaY4I16VE0LJUX86siaGG%2FSGja0E0RT6hQloxssQGC0UGGrg%2B1JfvfRXf7me7qmZlnm1oPhpR3uTOaDOjA%2B2zNi7wMF4ibM73kQjrP2B5k4uZXxENAQGfUf7BC5B%2FTylUVwcWXnQIbMTM1Dmq%2FuwkwMZjiP1%2FwT0auUDnwzgumFVXVgcsVNgjH%2B5kwSrXanca5Z3KtUDEH1bzZB42HyZYUcNMYwDwG%2FFM8sMg9qJgJI2tvkIyJj7VTV7opDjNrE%2FQy18XfOLlN4shmq0oYAfmqR9wHb8bV2PU409u9d%2Fqw8UGjZ2sHat5TbRWYvtpTfVVEHb8ZVci7BLFVwC0tzTm0hNU3bnWIifPUpjylK%2FudS19%2BZHE4%2FYN7BiYJeiPeBya0bdPvfUMYWiGGNbgoNC3F%2BLeZvhr2abXd9I5wataMeNtTAOvfCub530lQd%2F1LvdAyEJvCeXGs0UG9cbuw625joOY577gqo07YTfZywmt3RHt5vPXuD0x2x39z0CkwGGqrVvAjJTxrlVtWWh14wA9TtQ31zuHj2fJxj%2BHZEG0VSKAdm2r4EMO7vtjCPOaK%2Fa15V1LV%2FFiTXnroqOKD%2BRGMrkk9wFPwKpRzsiE07xIr0q1RqhaIdjChxaPUBjqkAeW6ooKp5%2FNOTdXTTYGVYvG7ZPk0wVc8Qrouea0VXzMogRLFSMrzkshfnasBROiZzaEHEV1FAE3bZegrHsI3%2FMEVyHSOt1IJVNw02Hse9kPircpZz74lJLXMCbwV9gJVw2PZi8Br%2FBr12nIhGGS%2BsFB5lblJfLvOJ6dp4WdDN3lY837xH%2BOG4ORrB68g3bNvcVKe%2Bul%2B%2FaYtM1NlxrJS4Hx7YtRJ&X-Amz-Signature=ea52ba941847c5faed6afb525ebd804b8bba3c8c3424c9ba77af7b59c4aede6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXXOK7KV%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEC2gXc90jTlI%2BEg4pXQGea1s8wfDDqMWMou88eAj%2BR%2FAiEA9NGqmhXk8KWd3M2F5LVytGODuypIIf%2BDgU%2FCVs8r9YAqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmee5G3TFfiW%2BvtjyrcAwVGFzbDaUhrQb4VwhkAH3biqdTweQbcpVeJsPI%2BFKXFK1VK4kJOBJLmYO9LeyxHXx487DaZOGG98baqGnQmJEFgiNrEwXnxMqqrfyuoYdCwDuOoeYE9kK9%2BW%2BPZwLWEs4rCPtur2JkIdhMYyOQCMlm58aXVHRnIEhvXkUfGCVG6DmzQoFPykb78dje5ojuGmhg6y9n4UH2mesURf1EvB5W7TluhUiWeHlBhfbqGfhxcNHYBVrXKsjYcrhlcHbX1sllobL7j0QzbW4DRz7MKvS2AOGGOIHHzfM5e7Lyn2wUiyz3WCDHsjV6wG1izT02CkUPtNKK5DJMlQ7s3aujjG4SHbzMjKMGTW1INC%2BKyeR7UjXlY3z3MNEyuhHNarrLB%2BgQ2DkmJizz0z0blYzX%2FKayJuMwgIsnTb0x8T7rpEKi4zDx80yVwmQ0CWXFSMhc4F%2FlqvfNEgOmwpnnvvXk8%2Fbr7uO5P5yWHRSO5ZBPSCubZAVj2x6hJS98Z%2B1IwBYP3FjAhWKaCZwgpKPDrSAb2iAbwvj3HDTUfKyFQslZY5cYd2LhwN0D6mDjsu%2F8JIbNgNQ2Pjktc4%2FpHwXPc7dWFG3tE%2B%2BMBmktFGiRBDIEVpiC9VSFpkb5eLu2q3h3%2FMNDFo9QGOqUBYNRL6ZAWL7QiKNX6xlgd0ULf59zQh3hkG5SWjJNQTxflNEA6iXy01hpa%2BMk%2BDKxFKlJW4lWdis%2BbMu0s%2FQHdlx97qMy8kv17kZgX%2BGFWlJe9Ee56D5qsFATjjdvZ35r6aGGvY87X55bnvJl8zKI8a2EV2EzCO740thOiRAs2nTGXOWX%2FyLOzCpthVSPg3Lsc9yB5CuFDOIDR0sk%2BWSxAO77XeV3Y&X-Amz-Signature=44202a2c360a40ff1f23c964785ba4c7b7860c6f84b59c6c65c30a453675b432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE2BCAW3%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRhvIbGBXOTxxeGDOtZp2Ze3o%2F7GfPy7jxGjvRZ19zRgIhAMFEMhYf4ueolhXzjRxPAZESgzhQzzBWISUo7%2F672yYTKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWzZ3hTDgNehIzIeUq3AP%2BATsdJTUaY4I16VE0LJUX86siaGG%2FSGja0E0RT6hQloxssQGC0UGGrg%2B1JfvfRXf7me7qmZlnm1oPhpR3uTOaDOjA%2B2zNi7wMF4ibM73kQjrP2B5k4uZXxENAQGfUf7BC5B%2FTylUVwcWXnQIbMTM1Dmq%2FuwkwMZjiP1%2FwT0auUDnwzgumFVXVgcsVNgjH%2B5kwSrXanca5Z3KtUDEH1bzZB42HyZYUcNMYwDwG%2FFM8sMg9qJgJI2tvkIyJj7VTV7opDjNrE%2FQy18XfOLlN4shmq0oYAfmqR9wHb8bV2PU409u9d%2Fqw8UGjZ2sHat5TbRWYvtpTfVVEHb8ZVci7BLFVwC0tzTm0hNU3bnWIifPUpjylK%2FudS19%2BZHE4%2FYN7BiYJeiPeBya0bdPvfUMYWiGGNbgoNC3F%2BLeZvhr2abXd9I5wataMeNtTAOvfCub530lQd%2F1LvdAyEJvCeXGs0UG9cbuw625joOY577gqo07YTfZywmt3RHt5vPXuD0x2x39z0CkwGGqrVvAjJTxrlVtWWh14wA9TtQ31zuHj2fJxj%2BHZEG0VSKAdm2r4EMO7vtjCPOaK%2Fa15V1LV%2FFiTXnroqOKD%2BRGMrkk9wFPwKpRzsiE07xIr0q1RqhaIdjChxaPUBjqkAeW6ooKp5%2FNOTdXTTYGVYvG7ZPk0wVc8Qrouea0VXzMogRLFSMrzkshfnasBROiZzaEHEV1FAE3bZegrHsI3%2FMEVyHSOt1IJVNw02Hse9kPircpZz74lJLXMCbwV9gJVw2PZi8Br%2FBr12nIhGGS%2BsFB5lblJfLvOJ6dp4WdDN3lY837xH%2BOG4ORrB68g3bNvcVKe%2Bul%2B%2FaYtM1NlxrJS4Hx7YtRJ&X-Amz-Signature=1e7c741edfbf5a57d3b714939522c3aab9461e910c105f579479f9af990e9d35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7YDMTKF%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2F7vez3ZgH%2FdghfWi8qXaz4uhO26XJAcgXVov1NaJs6AiAuCsIwVca2J0XSOFunQgoQeb6Gx6Hp6zA3p7lSKHWWgCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMITtiByImjEUi141RKtwDMLo5c%2FvNI0vHer4O2Mmnxf3eGyy3GnxQm%2FB%2FSb1MQ9A756OAJnoZx7NAK4VLrFbguSViyzvBVHv6vcH5BKtjFjHFQxqUYdZH3sht07lqgveifbr4736oF8yJ%2FK%2F%2FNlmevLLAQskmrBhcE%2F6NtS9kYgtMviQMQapicgQSXGz0ciCb9ki%2BzMMMkRvHEjn%2BJ5aVNmMZVkE57HwrMY%2FjFGcFSeY90DSSVYfWu%2BxE8A7m7TB4Apfpf5OVYmQ9Ki1W9amTarzKUO3Cn4K686LBpj24VbPh6HFkdY51Ygq3UvWzVzVthZ1maUweoHDH6qFk9PwlhqV%2B1uW8GzT4UD8rTT7HLIsXUItsDOubvjkolIBAZFW380FZTw2wo8njOp8WCUnEu7bUdPr80MtG%2Fu2uSC23E91iGwjD%2FU5AEaHel0cXvlHCx6GrWOfiaE1dMYsi0y8G2qGl3gn2tsXTpTs%2BCEKckG4kQxLJSVWtfiDH9n0Hdt9TbtdHxKTeou4KgKCE6QUGYfJgvccd1t%2B6Xj%2BPX7i5D7Dkztlz6RlOflshpcKrH0BDi74A0UX%2FhjbTS3Nz3TZ8equy1QT3jjzIX9mkwJS5lRrPOVSzKh5fa83gm%2FZzvOEQlqqClE0W5bZGRFow2MKj1AY6pgHT0I5JLiOd5q69IRHQo7UmBgGGhSHodkXWCWoAOx4BQGEG5JBFgbfLaor0YgJLxJvFT3P%2FtlsaTSje49TQAR8tqSBo04cTDUa0WNZ2FaaGk7ktsmc%2FHFpXMJIZxDjiQzmIAoTKegX%2BMkEKibLX0IjTgC9eg7KmCV1q0oCSzWPiWeNoqh7OY8Y4sQodwCqwnuVrVd9KNauZvhtl%2BMogi%2Fg02A4kTRQB&X-Amz-Signature=778bd5d37ed740729ae8529d61eef0ce41182b713fbf285719b35eddbcd05f08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE2BCAW3%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRhvIbGBXOTxxeGDOtZp2Ze3o%2F7GfPy7jxGjvRZ19zRgIhAMFEMhYf4ueolhXzjRxPAZESgzhQzzBWISUo7%2F672yYTKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWzZ3hTDgNehIzIeUq3AP%2BATsdJTUaY4I16VE0LJUX86siaGG%2FSGja0E0RT6hQloxssQGC0UGGrg%2B1JfvfRXf7me7qmZlnm1oPhpR3uTOaDOjA%2B2zNi7wMF4ibM73kQjrP2B5k4uZXxENAQGfUf7BC5B%2FTylUVwcWXnQIbMTM1Dmq%2FuwkwMZjiP1%2FwT0auUDnwzgumFVXVgcsVNgjH%2B5kwSrXanca5Z3KtUDEH1bzZB42HyZYUcNMYwDwG%2FFM8sMg9qJgJI2tvkIyJj7VTV7opDjNrE%2FQy18XfOLlN4shmq0oYAfmqR9wHb8bV2PU409u9d%2Fqw8UGjZ2sHat5TbRWYvtpTfVVEHb8ZVci7BLFVwC0tzTm0hNU3bnWIifPUpjylK%2FudS19%2BZHE4%2FYN7BiYJeiPeBya0bdPvfUMYWiGGNbgoNC3F%2BLeZvhr2abXd9I5wataMeNtTAOvfCub530lQd%2F1LvdAyEJvCeXGs0UG9cbuw625joOY577gqo07YTfZywmt3RHt5vPXuD0x2x39z0CkwGGqrVvAjJTxrlVtWWh14wA9TtQ31zuHj2fJxj%2BHZEG0VSKAdm2r4EMO7vtjCPOaK%2Fa15V1LV%2FFiTXnroqOKD%2BRGMrkk9wFPwKpRzsiE07xIr0q1RqhaIdjChxaPUBjqkAeW6ooKp5%2FNOTdXTTYGVYvG7ZPk0wVc8Qrouea0VXzMogRLFSMrzkshfnasBROiZzaEHEV1FAE3bZegrHsI3%2FMEVyHSOt1IJVNw02Hse9kPircpZz74lJLXMCbwV9gJVw2PZi8Br%2FBr12nIhGGS%2BsFB5lblJfLvOJ6dp4WdDN3lY837xH%2BOG4ORrB68g3bNvcVKe%2Bul%2B%2FaYtM1NlxrJS4Hx7YtRJ&X-Amz-Signature=2ae5653d8eaed349d2cf070a360afb8740868fd410aab4e8ba124f14537be517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NBGDQY2%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOqa2ULYTZ3AsYL0OEM0Gq5l6vkEX1FojVDvQF5JnvIQIgYInKG5m0vLOgDNNaivU2G9QipH%2FiLyTmt0r1v369lUMqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8MFLL2p5XVjXNQuCrcA%2F4mOFTGRYICVDYm%2F%2FVBOSodJbvkz99F6FeWAGeqq3L7Vltg5c7gKKFaMBq%2Boesl6YWiKLzuHQrOI9HQj46xIE1i%2F1YIzkWKT3FQHTlTtxXN1mAnoZxaj4ClsrtQS4rOyfe3Vfxq1Rrx%2FsAOjT5ULL21H8zPOHN4MIpgtZAnzjiqnzG56WWCLv6fypg86cCIJV86w6LtMaiMXZ%2F9667igfCRUa23d%2BcszwHNMFlXRy2eFruEmXCFhRNW6XqMELVx4olrpWFBJsuAqzRMEUj3wnMnpS4oeUxj5M8t%2BILi%2Bign9ECWVi1yfMOkoFyh3QI9%2FHxXy6qyDLOTf4Lg51UYpN7%2BaQ%2B9L7z5N4peQm47cqfW%2B3n6r6vHpenuFjrNroEHKytajK0AG7lDEwl6AVgQJf96gWVW7S0cXwEyMpDJTZui598hpDz657u3K3EKBBAaYouOlLgmxsghBcZFkNwEkV3BG%2FcPXqK9kEayIe1OjYri%2FxPmOQywCN3B0MQbJZWWpW0ff9xNIOlxlyH3RZLiThFXcpjQFX87%2FZpWFMQQGThLYvx%2FMon0tqk6W%2B4ooWKnWAbfCAZtDdjuUcSMTDaGDbZYWt%2BeiIJ1Dy7YGIFCIymj7QjXltswpnIaBMCTMMvFo9QGOqUB84%2FGP6UvUYrAg08GR4KF5oipFWl4CVXTJHPJ5mgKCg%2F6in5HEGO2TBLrI4rm7YhanI1RzWQ1adp%2BPFiJrEvcp3V1jhZg2E0FqmoKdeL0wsFUfqdBM6gTT6tT2jhH1L30ySt%2Fycb%2BndH4hPvE8T%2BYszGexduKb7bv2TfhISP2BU%2BLYod7J4atgWiBG5P%2F6lWJ02LeYtSL0x7zM%2BdLMZhAwVh1ePeG&X-Amz-Signature=dc0275fd24e4a437872971167299a5012fef0392751358b53446883d49fe2bd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE2BCAW3%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRhvIbGBXOTxxeGDOtZp2Ze3o%2F7GfPy7jxGjvRZ19zRgIhAMFEMhYf4ueolhXzjRxPAZESgzhQzzBWISUo7%2F672yYTKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWzZ3hTDgNehIzIeUq3AP%2BATsdJTUaY4I16VE0LJUX86siaGG%2FSGja0E0RT6hQloxssQGC0UGGrg%2B1JfvfRXf7me7qmZlnm1oPhpR3uTOaDOjA%2B2zNi7wMF4ibM73kQjrP2B5k4uZXxENAQGfUf7BC5B%2FTylUVwcWXnQIbMTM1Dmq%2FuwkwMZjiP1%2FwT0auUDnwzgumFVXVgcsVNgjH%2B5kwSrXanca5Z3KtUDEH1bzZB42HyZYUcNMYwDwG%2FFM8sMg9qJgJI2tvkIyJj7VTV7opDjNrE%2FQy18XfOLlN4shmq0oYAfmqR9wHb8bV2PU409u9d%2Fqw8UGjZ2sHat5TbRWYvtpTfVVEHb8ZVci7BLFVwC0tzTm0hNU3bnWIifPUpjylK%2FudS19%2BZHE4%2FYN7BiYJeiPeBya0bdPvfUMYWiGGNbgoNC3F%2BLeZvhr2abXd9I5wataMeNtTAOvfCub530lQd%2F1LvdAyEJvCeXGs0UG9cbuw625joOY577gqo07YTfZywmt3RHt5vPXuD0x2x39z0CkwGGqrVvAjJTxrlVtWWh14wA9TtQ31zuHj2fJxj%2BHZEG0VSKAdm2r4EMO7vtjCPOaK%2Fa15V1LV%2FFiTXnroqOKD%2BRGMrkk9wFPwKpRzsiE07xIr0q1RqhaIdjChxaPUBjqkAeW6ooKp5%2FNOTdXTTYGVYvG7ZPk0wVc8Qrouea0VXzMogRLFSMrzkshfnasBROiZzaEHEV1FAE3bZegrHsI3%2FMEVyHSOt1IJVNw02Hse9kPircpZz74lJLXMCbwV9gJVw2PZi8Br%2FBr12nIhGGS%2BsFB5lblJfLvOJ6dp4WdDN3lY837xH%2BOG4ORrB68g3bNvcVKe%2Bul%2B%2FaYtM1NlxrJS4Hx7YtRJ&X-Amz-Signature=9fbf5f460bfd8bf9036de3c2fa0a6f2279217842211d0d3a331a94df2e211d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2OL6WKQ%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfqwTtai6zbVMCkXRuOJi8t36eONCLeDY4HbQTTa1BzAIgaKD2dFbWcJQOx2a4xOP%2Bq9Zl1hNirHSzCRy%2BxT2KWUoqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8Bb1QLSWSS8SEOECrcA5YYUmqKkFJ35wIvWl5nriWh%2B2SdK0MZ49SWOia0fsY4Qqx%2FYTXWPOouKHHb4j9K7%2BFpgExTc4IL%2BhiM16gPY3wgSOAsqtVuxHSuuJk1MTFF%2BZcyWyOmRwh21fQZ5iSuqjQtdReMH3ubxbcDVIwCqDMfX4v0SZTH1X%2FThcK2lXuh3VqQiKy3KzPkbbFbAPCwh%2FzlEaODD8Ftrkwav2rinbtX0BLcGnRj%2FQCrH7GZXk3kUIJ6zE4HxWkTOHrk9F7SU68%2ByQ6i5iynS3MxS7TEWtpy4sH6NFEpAZ%2BoxL95bKMJZJNS0Dw%2F1r7EDuF3EcQ7uVp2cZycwTP8zgc14djD2GbVmPVaQEYvjSqzvEhdITTP7kzhbN8wBUPJ%2F%2BnuOWhmp7F2gAGIx%2B%2FWfrGWdk7pi1ysL6lSYhki6NqmGBui92rndilvMwjeYw5WU6rt3d4Yg8p3ptwKpk%2FxjUkowB9YeRI%2BKRfAwI5ZVMxY%2F%2FcyMd%2FzCMCl0vdnZBsnY0dXHLvWU3TTnoD%2BMrXyP2bf4DsLfrZ03SBNParQW%2BC7VpRBJq3k5A5ZcKK%2F1otiA1oV%2BUw2f%2FUx60X82baKovdW8CO%2Fvf%2FrQuLB%2B20MWdRY8MfjBmj1Sq22SKUVRSFsOivdMJbFo9QGOqUBfQzE4iifZiG3OzfBcQdEuXoOtcR4ibN0EIBnQwGb6xFZX9FTspNtQricEtiX6kLCe4xM68FL4f3VYu%2Fp3aLilO1ICEpZCK%2BfiII9LxbVy%2F0iZ%2BXTMWdNiLrxwJElRuPO4JxzLGZ%2B3kwHJ1BSnGvfjuxpz3McRwfexa6KCmDs3Z3jVhZ4a%2F759BOSM3wkNzclwwf4sAvAQpvFjWdxPB%2BnP32RuATQ&X-Amz-Signature=d4a836e57125d8b4890a3e71d226f28d4795b0a02c4ce2ab512ed62f7fed6028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSOBN2QQ%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwfcWcFxJfmrpekqqn7oOVAZHfuTU%2FEWtgIlzRGP3%2FmgIgAh9%2FRShtV9ChItFOG1YEhh160zcU4l4dHzShqRfmAGkqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmlvwmt9FtJNJWI8ircA5WMLnJvYaSCOoy97GakftbEwk%2BcwxdWWCmPCG5PwfAthBQ%2BapDUxSDTc1a9ZzQT8YNm3BjdtvjfAbK%2BhvlThopKadogtzQhYV5G6AAEaxCFqqTu7al5GdoiXaEI1YjWF2lkkPcbIwmdiQOYRF7hR%2FwBNsvutNLY5d00XFwoBhbLsURs3om14T0FuCJGOdZhvoL7t6wg2ccKWt3sHYbr3364V95S5%2BSLQgB2CGFEUO3BZsTzthhNmMZlOxwa3EFTJrU68qCbpAuQKEGTEj0rI9E6vILPOKK3fe%2BoOtkTvmzQFSDiy17puoqfJMdoI6XLtp5pxX9tlkTiUZaypGku5LuwvfHQBSSAqTfA4DfnkSNAPu%2FyXKaqJ0g9SiEenoH0yf6K4rU1TWb88ffr%2F%2F4Kx3zPA2Pv7vC7p8Ht%2FHalp6zf9aDcbhKsn%2Fs3%2FX2gd7fLoj5duqzD7uFZBp%2B3R%2BhO7vC1%2FINt3V8J5IsLV93EssBtyErD4k9L4wx2pWocBmzchbvD1GTt2Rl7KGSNAaXwBgKYUL6OVbJvfiyAqDVgQDH2N3axGJvhKhGLVg030%2BJnQNcKx3vTa%2FjP9cmztfRofg%2BMoW%2Fko963hZLwtFtsMCE4TlMwYXs63CsqKOAPMKDFo9QGOqUBsX59X37CA2DJ223GV2rC9EpFYCjFRo3NJ1ktjhkR2YIXoEwDTCQW4PVSTzeV5Tz8snS4RBt2FWd3gCh3%2F4%2Bu%2BSQ%2BsiH8p3GDPYNI6lSikvuzUWJuDEl0j8yQtXtkOtq3K7j1vHXCyYk0ITfbnr9wlwTq%2FgvxZiblnLwy9pTYqpkHHYiErs0NSNgo%2FkAihKjN6rrUXWY19nMCpPbKj5%2FeKSNFipFC&X-Amz-Signature=19d6228572c23bde066d5976db99cee14dc65f35b16c75ba0bdec04506cd53bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T44O655G%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhx6ECODdWrOwIGhv8grhtFB06GebT84ftRCW0qE6TVAiAaf1AyI1J2KLFl3xCiGbQjisGd%2FiSuhwoEyoJ%2BvfrbdSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHd3Xa4WUrOnGtyFoKtwDqYgcRKAHEGTsuIjply5B%2BnVMEEWdNi1MgK3BzszxeEp52Xt7pesvKNY%2B9qUvgIS5HaTAwLJKJ0ywC%2BYdm7AqU6oegBD7brH1hNexnsePm5i9NydTwOKD%2Fx6bwLpxlFg18uc00yNFZFtiHFgMUhK4Pq8dzk8FD57CU01Zz9XbnPTPoXlHEowtNDGnKqH021dRLUBhU95RcCrHvLceOSQCyOXoKNERMNcP6%2F%2FkvTteLIwARAZW21V41q7OulIj7eaETv14IbzuUo8v%2F%2F2GjqOj%2FV2zWFdExE1z5NKs%2FnqMGqROKWxDcFXqKp78oSaSDEi12HDcvPu07sMTrXj1YxTkV0sQb6gxCdZWECcP2Nrlv0mAI3MOX4OloDxQotoNpRmcWD%2B56SQ3QvVar80K3PL6MHqrW%2BGK5gDvdzrOWzK5BBICdLi7AgVJVSr0iWAppvBTMWNGUqph0uTvvHr2Hu%2BubWS7ud5ScgaVMukNuiMWnnXMKundnXAzoDbPa5lre19eCZzlAtOz7FJiHWzrljWrcjuS9dLqSxZifaSXGQ%2Bj9T1rPjln1qJq8GjKUXXwWhVYyIzaxojt4YuDPBPj9UmHyceYsS5543on1TXyAMbxtXp70Z%2FPVM0oScjzitQw6sKj1AY6pgHyEpQJV%2FLq%2FgNwoWT%2F4swH%2BBc5lJZvwipDVhZb0mjcTCqwTFz2xTIiFDcObWCdUV4Hd0jrLUSmKC5rB98Hvkxtv7SoX7JdHTusMzr3Api3zui%2B07dv1qzgz3fVBSEK0C86nh%2FN2X7yMiGhz8BuBySIbfTVnTiC6FKE5ZmAMKLAhakaFJYHMx2qOkJDgE18MqUhGjm6VfUQ4Y%2FmDz2EfzvZE2GdbP26&X-Amz-Signature=d6ac2f4fd8f9ab2278824525f9eddc11a41c95f2ee18a7b686a9bdf78c971675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE2BCAW3%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRhvIbGBXOTxxeGDOtZp2Ze3o%2F7GfPy7jxGjvRZ19zRgIhAMFEMhYf4ueolhXzjRxPAZESgzhQzzBWISUo7%2F672yYTKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWzZ3hTDgNehIzIeUq3AP%2BATsdJTUaY4I16VE0LJUX86siaGG%2FSGja0E0RT6hQloxssQGC0UGGrg%2B1JfvfRXf7me7qmZlnm1oPhpR3uTOaDOjA%2B2zNi7wMF4ibM73kQjrP2B5k4uZXxENAQGfUf7BC5B%2FTylUVwcWXnQIbMTM1Dmq%2FuwkwMZjiP1%2FwT0auUDnwzgumFVXVgcsVNgjH%2B5kwSrXanca5Z3KtUDEH1bzZB42HyZYUcNMYwDwG%2FFM8sMg9qJgJI2tvkIyJj7VTV7opDjNrE%2FQy18XfOLlN4shmq0oYAfmqR9wHb8bV2PU409u9d%2Fqw8UGjZ2sHat5TbRWYvtpTfVVEHb8ZVci7BLFVwC0tzTm0hNU3bnWIifPUpjylK%2FudS19%2BZHE4%2FYN7BiYJeiPeBya0bdPvfUMYWiGGNbgoNC3F%2BLeZvhr2abXd9I5wataMeNtTAOvfCub530lQd%2F1LvdAyEJvCeXGs0UG9cbuw625joOY577gqo07YTfZywmt3RHt5vPXuD0x2x39z0CkwGGqrVvAjJTxrlVtWWh14wA9TtQ31zuHj2fJxj%2BHZEG0VSKAdm2r4EMO7vtjCPOaK%2Fa15V1LV%2FFiTXnroqOKD%2BRGMrkk9wFPwKpRzsiE07xIr0q1RqhaIdjChxaPUBjqkAeW6ooKp5%2FNOTdXTTYGVYvG7ZPk0wVc8Qrouea0VXzMogRLFSMrzkshfnasBROiZzaEHEV1FAE3bZegrHsI3%2FMEVyHSOt1IJVNw02Hse9kPircpZz74lJLXMCbwV9gJVw2PZi8Br%2FBr12nIhGGS%2BsFB5lblJfLvOJ6dp4WdDN3lY837xH%2BOG4ORrB68g3bNvcVKe%2Bul%2B%2FaYtM1NlxrJS4Hx7YtRJ&X-Amz-Signature=09d909319c8983cf268bd3397f8804096386ed0dd5f42883cee3e191cd66f236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE2BCAW3%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRhvIbGBXOTxxeGDOtZp2Ze3o%2F7GfPy7jxGjvRZ19zRgIhAMFEMhYf4ueolhXzjRxPAZESgzhQzzBWISUo7%2F672yYTKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWzZ3hTDgNehIzIeUq3AP%2BATsdJTUaY4I16VE0LJUX86siaGG%2FSGja0E0RT6hQloxssQGC0UGGrg%2B1JfvfRXf7me7qmZlnm1oPhpR3uTOaDOjA%2B2zNi7wMF4ibM73kQjrP2B5k4uZXxENAQGfUf7BC5B%2FTylUVwcWXnQIbMTM1Dmq%2FuwkwMZjiP1%2FwT0auUDnwzgumFVXVgcsVNgjH%2B5kwSrXanca5Z3KtUDEH1bzZB42HyZYUcNMYwDwG%2FFM8sMg9qJgJI2tvkIyJj7VTV7opDjNrE%2FQy18XfOLlN4shmq0oYAfmqR9wHb8bV2PU409u9d%2Fqw8UGjZ2sHat5TbRWYvtpTfVVEHb8ZVci7BLFVwC0tzTm0hNU3bnWIifPUpjylK%2FudS19%2BZHE4%2FYN7BiYJeiPeBya0bdPvfUMYWiGGNbgoNC3F%2BLeZvhr2abXd9I5wataMeNtTAOvfCub530lQd%2F1LvdAyEJvCeXGs0UG9cbuw625joOY577gqo07YTfZywmt3RHt5vPXuD0x2x39z0CkwGGqrVvAjJTxrlVtWWh14wA9TtQ31zuHj2fJxj%2BHZEG0VSKAdm2r4EMO7vtjCPOaK%2Fa15V1LV%2FFiTXnroqOKD%2BRGMrkk9wFPwKpRzsiE07xIr0q1RqhaIdjChxaPUBjqkAeW6ooKp5%2FNOTdXTTYGVYvG7ZPk0wVc8Qrouea0VXzMogRLFSMrzkshfnasBROiZzaEHEV1FAE3bZegrHsI3%2FMEVyHSOt1IJVNw02Hse9kPircpZz74lJLXMCbwV9gJVw2PZi8Br%2FBr12nIhGGS%2BsFB5lblJfLvOJ6dp4WdDN3lY837xH%2BOG4ORrB68g3bNvcVKe%2Bul%2B%2FaYtM1NlxrJS4Hx7YtRJ&X-Amz-Signature=bb100e64045b966ed184e7e3d0fef3904dc025f1ce23fdda19e4f91fc75b5569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JS44T6T%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5sJa7U7M98ouyMRcGWdHvT8Eiekwktgdzp0zHsCYV9QIhAL2GdwVgeiP4b86y3I%2Bb93vd24%2B0vTcC%2Be9s2AoCanVZKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoxzsxtT1Kzm%2BueAIq3AOWcvu42aG%2FeozUmspJqDGTOv2dkOkS9gtIe%2BvrVxnLBfHJx3SdxIVC84D7AdsHrMNvP0M5x3yCDJ6NmS78SnCtdg%2BayfLXzGjwKMAU1S4ZcFeVkszGs96P4Kp9fuhsM3opKi%2BpfAx5gZf2P3BagKiIEsJIzQGEIpA4SUT5RafE8pJtpPVJeZiYMt8ASsqhZDBZ3HcKSFMUNVCVwzeVOmOGegEKDEYmJKS%2BMyCOcjeJ3DMhkve%2F9N5SOV0tYnmC1RyESr%2Bh95kWXaxW%2Be2WUx3hrkxIwN8BLnM7%2B80XyTl3a0jmho4MB%2FSunsORbK%2BACc7MvRpixYDk736faadqax1lAz%2Flusl0%2BGQaqU99KxWDS9Ny4hzNvdlJiYriIS01Y%2B%2BioIGqW30Op3QCrjvaqC%2B0juC%2BGm0LeQf4u2d8w7T9qDEdLQiJ%2F0huPvlNQ8cq1WsmGiiUf2uBnaz0zEkE%2FYBcXiFvu6bB8RRCD4kL1Vvtgyzhh6wvOM%2BD13FEgsIMsrZYViOGhTMrxZrmlqkUDyq4rUrj3DCKJXBdSD8PhVqWYifITxMOKq28sGXw7vhLhNYq3nsCjmQ2NA%2BknsRD%2BHt85d%2B8lu%2Bzo%2FeZ14ZG26NyVXBS3ncgCHiCIcsOhTCTwqPUBjqkAXb46F1KUfyLwVIdO2VzTVXpM5vugHISpT2JReuCHZSy14y4I4GgqVkEnLW5dyftN5rCAIjt8aZZOlU7TD6%2B7ZSOj6EKiFS5mtzFo4%2BAj3GIhOl0wDvRX0g%2Fba94h%2B%2FR2yUtuGc5Yrz0vPh7UtH2J86ApjVoNXV4inM3Z8i8YVnEURmVjpl%2FTRak61ISu7FnAf00a9ILKbDjoN%2BTJwxBeabhu7eE&X-Amz-Signature=e638cdba9f0220a443cc2d59e6444417cab835bcedb44c8e6228feb0dada6011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JS44T6T%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5sJa7U7M98ouyMRcGWdHvT8Eiekwktgdzp0zHsCYV9QIhAL2GdwVgeiP4b86y3I%2Bb93vd24%2B0vTcC%2Be9s2AoCanVZKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoxzsxtT1Kzm%2BueAIq3AOWcvu42aG%2FeozUmspJqDGTOv2dkOkS9gtIe%2BvrVxnLBfHJx3SdxIVC84D7AdsHrMNvP0M5x3yCDJ6NmS78SnCtdg%2BayfLXzGjwKMAU1S4ZcFeVkszGs96P4Kp9fuhsM3opKi%2BpfAx5gZf2P3BagKiIEsJIzQGEIpA4SUT5RafE8pJtpPVJeZiYMt8ASsqhZDBZ3HcKSFMUNVCVwzeVOmOGegEKDEYmJKS%2BMyCOcjeJ3DMhkve%2F9N5SOV0tYnmC1RyESr%2Bh95kWXaxW%2Be2WUx3hrkxIwN8BLnM7%2B80XyTl3a0jmho4MB%2FSunsORbK%2BACc7MvRpixYDk736faadqax1lAz%2Flusl0%2BGQaqU99KxWDS9Ny4hzNvdlJiYriIS01Y%2B%2BioIGqW30Op3QCrjvaqC%2B0juC%2BGm0LeQf4u2d8w7T9qDEdLQiJ%2F0huPvlNQ8cq1WsmGiiUf2uBnaz0zEkE%2FYBcXiFvu6bB8RRCD4kL1Vvtgyzhh6wvOM%2BD13FEgsIMsrZYViOGhTMrxZrmlqkUDyq4rUrj3DCKJXBdSD8PhVqWYifITxMOKq28sGXw7vhLhNYq3nsCjmQ2NA%2BknsRD%2BHt85d%2B8lu%2Bzo%2FeZ14ZG26NyVXBS3ncgCHiCIcsOhTCTwqPUBjqkAXb46F1KUfyLwVIdO2VzTVXpM5vugHISpT2JReuCHZSy14y4I4GgqVkEnLW5dyftN5rCAIjt8aZZOlU7TD6%2B7ZSOj6EKiFS5mtzFo4%2BAj3GIhOl0wDvRX0g%2Fba94h%2B%2FR2yUtuGc5Yrz0vPh7UtH2J86ApjVoNXV4inM3Z8i8YVnEURmVjpl%2FTRak61ISu7FnAf00a9ILKbDjoN%2BTJwxBeabhu7eE&X-Amz-Signature=8c8c82f0ecccc255045aa66013044cdd71d103ff8fa053f35c7bbd45d67110e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JS44T6T%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5sJa7U7M98ouyMRcGWdHvT8Eiekwktgdzp0zHsCYV9QIhAL2GdwVgeiP4b86y3I%2Bb93vd24%2B0vTcC%2Be9s2AoCanVZKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoxzsxtT1Kzm%2BueAIq3AOWcvu42aG%2FeozUmspJqDGTOv2dkOkS9gtIe%2BvrVxnLBfHJx3SdxIVC84D7AdsHrMNvP0M5x3yCDJ6NmS78SnCtdg%2BayfLXzGjwKMAU1S4ZcFeVkszGs96P4Kp9fuhsM3opKi%2BpfAx5gZf2P3BagKiIEsJIzQGEIpA4SUT5RafE8pJtpPVJeZiYMt8ASsqhZDBZ3HcKSFMUNVCVwzeVOmOGegEKDEYmJKS%2BMyCOcjeJ3DMhkve%2F9N5SOV0tYnmC1RyESr%2Bh95kWXaxW%2Be2WUx3hrkxIwN8BLnM7%2B80XyTl3a0jmho4MB%2FSunsORbK%2BACc7MvRpixYDk736faadqax1lAz%2Flusl0%2BGQaqU99KxWDS9Ny4hzNvdlJiYriIS01Y%2B%2BioIGqW30Op3QCrjvaqC%2B0juC%2BGm0LeQf4u2d8w7T9qDEdLQiJ%2F0huPvlNQ8cq1WsmGiiUf2uBnaz0zEkE%2FYBcXiFvu6bB8RRCD4kL1Vvtgyzhh6wvOM%2BD13FEgsIMsrZYViOGhTMrxZrmlqkUDyq4rUrj3DCKJXBdSD8PhVqWYifITxMOKq28sGXw7vhLhNYq3nsCjmQ2NA%2BknsRD%2BHt85d%2B8lu%2Bzo%2FeZ14ZG26NyVXBS3ncgCHiCIcsOhTCTwqPUBjqkAXb46F1KUfyLwVIdO2VzTVXpM5vugHISpT2JReuCHZSy14y4I4GgqVkEnLW5dyftN5rCAIjt8aZZOlU7TD6%2B7ZSOj6EKiFS5mtzFo4%2BAj3GIhOl0wDvRX0g%2Fba94h%2B%2FR2yUtuGc5Yrz0vPh7UtH2J86ApjVoNXV4inM3Z8i8YVnEURmVjpl%2FTRak61ISu7FnAf00a9ILKbDjoN%2BTJwxBeabhu7eE&X-Amz-Signature=46535f3702ec4356a48af57ced2e29923e6da395e6275d3abb56387c4ff607bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JS44T6T%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5sJa7U7M98ouyMRcGWdHvT8Eiekwktgdzp0zHsCYV9QIhAL2GdwVgeiP4b86y3I%2Bb93vd24%2B0vTcC%2Be9s2AoCanVZKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoxzsxtT1Kzm%2BueAIq3AOWcvu42aG%2FeozUmspJqDGTOv2dkOkS9gtIe%2BvrVxnLBfHJx3SdxIVC84D7AdsHrMNvP0M5x3yCDJ6NmS78SnCtdg%2BayfLXzGjwKMAU1S4ZcFeVkszGs96P4Kp9fuhsM3opKi%2BpfAx5gZf2P3BagKiIEsJIzQGEIpA4SUT5RafE8pJtpPVJeZiYMt8ASsqhZDBZ3HcKSFMUNVCVwzeVOmOGegEKDEYmJKS%2BMyCOcjeJ3DMhkve%2F9N5SOV0tYnmC1RyESr%2Bh95kWXaxW%2Be2WUx3hrkxIwN8BLnM7%2B80XyTl3a0jmho4MB%2FSunsORbK%2BACc7MvRpixYDk736faadqax1lAz%2Flusl0%2BGQaqU99KxWDS9Ny4hzNvdlJiYriIS01Y%2B%2BioIGqW30Op3QCrjvaqC%2B0juC%2BGm0LeQf4u2d8w7T9qDEdLQiJ%2F0huPvlNQ8cq1WsmGiiUf2uBnaz0zEkE%2FYBcXiFvu6bB8RRCD4kL1Vvtgyzhh6wvOM%2BD13FEgsIMsrZYViOGhTMrxZrmlqkUDyq4rUrj3DCKJXBdSD8PhVqWYifITxMOKq28sGXw7vhLhNYq3nsCjmQ2NA%2BknsRD%2BHt85d%2B8lu%2Bzo%2FeZ14ZG26NyVXBS3ncgCHiCIcsOhTCTwqPUBjqkAXb46F1KUfyLwVIdO2VzTVXpM5vugHISpT2JReuCHZSy14y4I4GgqVkEnLW5dyftN5rCAIjt8aZZOlU7TD6%2B7ZSOj6EKiFS5mtzFo4%2BAj3GIhOl0wDvRX0g%2Fba94h%2B%2FR2yUtuGc5Yrz0vPh7UtH2J86ApjVoNXV4inM3Z8i8YVnEURmVjpl%2FTRak61ISu7FnAf00a9ILKbDjoN%2BTJwxBeabhu7eE&X-Amz-Signature=26f1b1356edb4583c14dfbe92b091a88f468ab6467703ae008994542d3864895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TAN6NAM%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAdpv2Pciru4WfkNCZxFpt%2FLyWf3JcSbBKyFQ0XEEd5AIgASV3XLRnIJKrFRLwISmZ5SYt8RGKyXzNZtGG4YY4DTQqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMP%2Fby%2FwtYYqNTLLNyrcA%2FrVLiFffSkH4wEZSiNMgJkY58AY7QUvh%2FHzfGZaiSawNWi1tda%2FCbsObTr9R%2F5EpdGHdDxkj4d71CQcx9B5dUBq0sTTnqAz2g8O1BRauIJme5J6Crw4Dkml1AzoZ1CYRfiDZ1fZR%2FijX7eY1IZYpITPGa0SkbFBzoNSZhilqQtZ5lZXCOfC756sV9Q%2B2e3s%2BIpYONbsUrRbkHTuLNMP32fxGz%2B4fACr3Str%2FBRDE5jmT9kS407oUzsvO4cIYI6vELAKQI0eno9MtPyPLq8UZuvfT1kFqHlbrxl9OCPPUNiQ9oNvTFdCiS6ExI%2FKxTcoyqoXD40OLUDtfN2N5jyJbQgV3SQdfypKMqm6Hv7tM%2BqaNQEb5G5Vlq4c67UiMb1ZOiydRBG%2B%2F495qJ9uP3s4T8yRcKvg9RT9254jmctRKZG2kphtqlzep7OHDWdemBC2na7TM%2FCcF0AjaQcT4RPohemdfEqAg5w6TX0M0giUVWhnkWETBOVbk2R01PaInOhnBmCkiycCJRtZmSTn8xxPNFED5tUxJ8KZT3ADIX%2Fk%2B65sKHwR7c4EtMjtHutX41HZIss%2F%2BfKZhVG0IXRY%2BgvGwdDfnxZFkHxGLYcFlqjpCPiZSYlt1V3ocrqEvkpTMPLFo9QGOqUBUc%2BRMEH36d%2BfwE2JSQyZi8ExsdI0YiEzi6rFZrozudhCtaUa7Qb8u1WO5A3nr%2FW4fZYTvbJtqoIwdqoZ8%2FaETN71%2FDyhHSWy8%2BZZo%2Fz3Yf1LhHLKadh%2BiF2a%2FYidIaFz0z2KXCsXa3Qw4kb80gpWtPZmsL3ZWxD9QI0uXhobuNda88hLKz%2F5qvM0ugqspK0r8cMkkgePrzaY%2B5u4r5Qev4U8qbBk&X-Amz-Signature=02bf7f28927885c38730416f62bd38a18427248cba8faf792b858b9c0434352c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JS44T6T%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5sJa7U7M98ouyMRcGWdHvT8Eiekwktgdzp0zHsCYV9QIhAL2GdwVgeiP4b86y3I%2Bb93vd24%2B0vTcC%2Be9s2AoCanVZKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoxzsxtT1Kzm%2BueAIq3AOWcvu42aG%2FeozUmspJqDGTOv2dkOkS9gtIe%2BvrVxnLBfHJx3SdxIVC84D7AdsHrMNvP0M5x3yCDJ6NmS78SnCtdg%2BayfLXzGjwKMAU1S4ZcFeVkszGs96P4Kp9fuhsM3opKi%2BpfAx5gZf2P3BagKiIEsJIzQGEIpA4SUT5RafE8pJtpPVJeZiYMt8ASsqhZDBZ3HcKSFMUNVCVwzeVOmOGegEKDEYmJKS%2BMyCOcjeJ3DMhkve%2F9N5SOV0tYnmC1RyESr%2Bh95kWXaxW%2Be2WUx3hrkxIwN8BLnM7%2B80XyTl3a0jmho4MB%2FSunsORbK%2BACc7MvRpixYDk736faadqax1lAz%2Flusl0%2BGQaqU99KxWDS9Ny4hzNvdlJiYriIS01Y%2B%2BioIGqW30Op3QCrjvaqC%2B0juC%2BGm0LeQf4u2d8w7T9qDEdLQiJ%2F0huPvlNQ8cq1WsmGiiUf2uBnaz0zEkE%2FYBcXiFvu6bB8RRCD4kL1Vvtgyzhh6wvOM%2BD13FEgsIMsrZYViOGhTMrxZrmlqkUDyq4rUrj3DCKJXBdSD8PhVqWYifITxMOKq28sGXw7vhLhNYq3nsCjmQ2NA%2BknsRD%2BHt85d%2B8lu%2Bzo%2FeZ14ZG26NyVXBS3ncgCHiCIcsOhTCTwqPUBjqkAXb46F1KUfyLwVIdO2VzTVXpM5vugHISpT2JReuCHZSy14y4I4GgqVkEnLW5dyftN5rCAIjt8aZZOlU7TD6%2B7ZSOj6EKiFS5mtzFo4%2BAj3GIhOl0wDvRX0g%2Fba94h%2B%2FR2yUtuGc5Yrz0vPh7UtH2J86ApjVoNXV4inM3Z8i8YVnEURmVjpl%2FTRak61ISu7FnAf00a9ILKbDjoN%2BTJwxBeabhu7eE&X-Amz-Signature=cc570b299dfbc94d035fc3b91b9c455a34bf7c58e6ed4dd0bd900575937f3dab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JS44T6T%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5sJa7U7M98ouyMRcGWdHvT8Eiekwktgdzp0zHsCYV9QIhAL2GdwVgeiP4b86y3I%2Bb93vd24%2B0vTcC%2Be9s2AoCanVZKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoxzsxtT1Kzm%2BueAIq3AOWcvu42aG%2FeozUmspJqDGTOv2dkOkS9gtIe%2BvrVxnLBfHJx3SdxIVC84D7AdsHrMNvP0M5x3yCDJ6NmS78SnCtdg%2BayfLXzGjwKMAU1S4ZcFeVkszGs96P4Kp9fuhsM3opKi%2BpfAx5gZf2P3BagKiIEsJIzQGEIpA4SUT5RafE8pJtpPVJeZiYMt8ASsqhZDBZ3HcKSFMUNVCVwzeVOmOGegEKDEYmJKS%2BMyCOcjeJ3DMhkve%2F9N5SOV0tYnmC1RyESr%2Bh95kWXaxW%2Be2WUx3hrkxIwN8BLnM7%2B80XyTl3a0jmho4MB%2FSunsORbK%2BACc7MvRpixYDk736faadqax1lAz%2Flusl0%2BGQaqU99KxWDS9Ny4hzNvdlJiYriIS01Y%2B%2BioIGqW30Op3QCrjvaqC%2B0juC%2BGm0LeQf4u2d8w7T9qDEdLQiJ%2F0huPvlNQ8cq1WsmGiiUf2uBnaz0zEkE%2FYBcXiFvu6bB8RRCD4kL1Vvtgyzhh6wvOM%2BD13FEgsIMsrZYViOGhTMrxZrmlqkUDyq4rUrj3DCKJXBdSD8PhVqWYifITxMOKq28sGXw7vhLhNYq3nsCjmQ2NA%2BknsRD%2BHt85d%2B8lu%2Bzo%2FeZ14ZG26NyVXBS3ncgCHiCIcsOhTCTwqPUBjqkAXb46F1KUfyLwVIdO2VzTVXpM5vugHISpT2JReuCHZSy14y4I4GgqVkEnLW5dyftN5rCAIjt8aZZOlU7TD6%2B7ZSOj6EKiFS5mtzFo4%2BAj3GIhOl0wDvRX0g%2Fba94h%2B%2FR2yUtuGc5Yrz0vPh7UtH2J86ApjVoNXV4inM3Z8i8YVnEURmVjpl%2FTRak61ISu7FnAf00a9ILKbDjoN%2BTJwxBeabhu7eE&X-Amz-Signature=f6e8b25a01254b0db6c1b3a7c3f5d5bfb6c301587761f5fcf4b89871c90aac52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JS44T6T%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5sJa7U7M98ouyMRcGWdHvT8Eiekwktgdzp0zHsCYV9QIhAL2GdwVgeiP4b86y3I%2Bb93vd24%2B0vTcC%2Be9s2AoCanVZKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoxzsxtT1Kzm%2BueAIq3AOWcvu42aG%2FeozUmspJqDGTOv2dkOkS9gtIe%2BvrVxnLBfHJx3SdxIVC84D7AdsHrMNvP0M5x3yCDJ6NmS78SnCtdg%2BayfLXzGjwKMAU1S4ZcFeVkszGs96P4Kp9fuhsM3opKi%2BpfAx5gZf2P3BagKiIEsJIzQGEIpA4SUT5RafE8pJtpPVJeZiYMt8ASsqhZDBZ3HcKSFMUNVCVwzeVOmOGegEKDEYmJKS%2BMyCOcjeJ3DMhkve%2F9N5SOV0tYnmC1RyESr%2Bh95kWXaxW%2Be2WUx3hrkxIwN8BLnM7%2B80XyTl3a0jmho4MB%2FSunsORbK%2BACc7MvRpixYDk736faadqax1lAz%2Flusl0%2BGQaqU99KxWDS9Ny4hzNvdlJiYriIS01Y%2B%2BioIGqW30Op3QCrjvaqC%2B0juC%2BGm0LeQf4u2d8w7T9qDEdLQiJ%2F0huPvlNQ8cq1WsmGiiUf2uBnaz0zEkE%2FYBcXiFvu6bB8RRCD4kL1Vvtgyzhh6wvOM%2BD13FEgsIMsrZYViOGhTMrxZrmlqkUDyq4rUrj3DCKJXBdSD8PhVqWYifITxMOKq28sGXw7vhLhNYq3nsCjmQ2NA%2BknsRD%2BHt85d%2B8lu%2Bzo%2FeZ14ZG26NyVXBS3ncgCHiCIcsOhTCTwqPUBjqkAXb46F1KUfyLwVIdO2VzTVXpM5vugHISpT2JReuCHZSy14y4I4GgqVkEnLW5dyftN5rCAIjt8aZZOlU7TD6%2B7ZSOj6EKiFS5mtzFo4%2BAj3GIhOl0wDvRX0g%2Fba94h%2B%2FR2yUtuGc5Yrz0vPh7UtH2J86ApjVoNXV4inM3Z8i8YVnEURmVjpl%2FTRak61ISu7FnAf00a9ILKbDjoN%2BTJwxBeabhu7eE&X-Amz-Signature=46535f3702ec4356a48af57ced2e29923e6da395e6275d3abb56387c4ff607bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JS44T6T%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5sJa7U7M98ouyMRcGWdHvT8Eiekwktgdzp0zHsCYV9QIhAL2GdwVgeiP4b86y3I%2Bb93vd24%2B0vTcC%2Be9s2AoCanVZKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoxzsxtT1Kzm%2BueAIq3AOWcvu42aG%2FeozUmspJqDGTOv2dkOkS9gtIe%2BvrVxnLBfHJx3SdxIVC84D7AdsHrMNvP0M5x3yCDJ6NmS78SnCtdg%2BayfLXzGjwKMAU1S4ZcFeVkszGs96P4Kp9fuhsM3opKi%2BpfAx5gZf2P3BagKiIEsJIzQGEIpA4SUT5RafE8pJtpPVJeZiYMt8ASsqhZDBZ3HcKSFMUNVCVwzeVOmOGegEKDEYmJKS%2BMyCOcjeJ3DMhkve%2F9N5SOV0tYnmC1RyESr%2Bh95kWXaxW%2Be2WUx3hrkxIwN8BLnM7%2B80XyTl3a0jmho4MB%2FSunsORbK%2BACc7MvRpixYDk736faadqax1lAz%2Flusl0%2BGQaqU99KxWDS9Ny4hzNvdlJiYriIS01Y%2B%2BioIGqW30Op3QCrjvaqC%2B0juC%2BGm0LeQf4u2d8w7T9qDEdLQiJ%2F0huPvlNQ8cq1WsmGiiUf2uBnaz0zEkE%2FYBcXiFvu6bB8RRCD4kL1Vvtgyzhh6wvOM%2BD13FEgsIMsrZYViOGhTMrxZrmlqkUDyq4rUrj3DCKJXBdSD8PhVqWYifITxMOKq28sGXw7vhLhNYq3nsCjmQ2NA%2BknsRD%2BHt85d%2B8lu%2Bzo%2FeZ14ZG26NyVXBS3ncgCHiCIcsOhTCTwqPUBjqkAXb46F1KUfyLwVIdO2VzTVXpM5vugHISpT2JReuCHZSy14y4I4GgqVkEnLW5dyftN5rCAIjt8aZZOlU7TD6%2B7ZSOj6EKiFS5mtzFo4%2BAj3GIhOl0wDvRX0g%2Fba94h%2B%2FR2yUtuGc5Yrz0vPh7UtH2J86ApjVoNXV4inM3Z8i8YVnEURmVjpl%2FTRak61ISu7FnAf00a9ILKbDjoN%2BTJwxBeabhu7eE&X-Amz-Signature=660623962776f4ba089aad8ba3383eb30dd2383b35f394aedeb04c3cc87aba8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JS44T6T%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5sJa7U7M98ouyMRcGWdHvT8Eiekwktgdzp0zHsCYV9QIhAL2GdwVgeiP4b86y3I%2Bb93vd24%2B0vTcC%2Be9s2AoCanVZKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoxzsxtT1Kzm%2BueAIq3AOWcvu42aG%2FeozUmspJqDGTOv2dkOkS9gtIe%2BvrVxnLBfHJx3SdxIVC84D7AdsHrMNvP0M5x3yCDJ6NmS78SnCtdg%2BayfLXzGjwKMAU1S4ZcFeVkszGs96P4Kp9fuhsM3opKi%2BpfAx5gZf2P3BagKiIEsJIzQGEIpA4SUT5RafE8pJtpPVJeZiYMt8ASsqhZDBZ3HcKSFMUNVCVwzeVOmOGegEKDEYmJKS%2BMyCOcjeJ3DMhkve%2F9N5SOV0tYnmC1RyESr%2Bh95kWXaxW%2Be2WUx3hrkxIwN8BLnM7%2B80XyTl3a0jmho4MB%2FSunsORbK%2BACc7MvRpixYDk736faadqax1lAz%2Flusl0%2BGQaqU99KxWDS9Ny4hzNvdlJiYriIS01Y%2B%2BioIGqW30Op3QCrjvaqC%2B0juC%2BGm0LeQf4u2d8w7T9qDEdLQiJ%2F0huPvlNQ8cq1WsmGiiUf2uBnaz0zEkE%2FYBcXiFvu6bB8RRCD4kL1Vvtgyzhh6wvOM%2BD13FEgsIMsrZYViOGhTMrxZrmlqkUDyq4rUrj3DCKJXBdSD8PhVqWYifITxMOKq28sGXw7vhLhNYq3nsCjmQ2NA%2BknsRD%2BHt85d%2B8lu%2Bzo%2FeZ14ZG26NyVXBS3ncgCHiCIcsOhTCTwqPUBjqkAXb46F1KUfyLwVIdO2VzTVXpM5vugHISpT2JReuCHZSy14y4I4GgqVkEnLW5dyftN5rCAIjt8aZZOlU7TD6%2B7ZSOj6EKiFS5mtzFo4%2BAj3GIhOl0wDvRX0g%2Fba94h%2B%2FR2yUtuGc5Yrz0vPh7UtH2J86ApjVoNXV4inM3Z8i8YVnEURmVjpl%2FTRak61ISu7FnAf00a9ILKbDjoN%2BTJwxBeabhu7eE&X-Amz-Signature=e49b1e7b73e28ca488bbe5f0b6f4d31fb314d8de00475571f195591af04e26dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JS44T6T%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5sJa7U7M98ouyMRcGWdHvT8Eiekwktgdzp0zHsCYV9QIhAL2GdwVgeiP4b86y3I%2Bb93vd24%2B0vTcC%2Be9s2AoCanVZKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoxzsxtT1Kzm%2BueAIq3AOWcvu42aG%2FeozUmspJqDGTOv2dkOkS9gtIe%2BvrVxnLBfHJx3SdxIVC84D7AdsHrMNvP0M5x3yCDJ6NmS78SnCtdg%2BayfLXzGjwKMAU1S4ZcFeVkszGs96P4Kp9fuhsM3opKi%2BpfAx5gZf2P3BagKiIEsJIzQGEIpA4SUT5RafE8pJtpPVJeZiYMt8ASsqhZDBZ3HcKSFMUNVCVwzeVOmOGegEKDEYmJKS%2BMyCOcjeJ3DMhkve%2F9N5SOV0tYnmC1RyESr%2Bh95kWXaxW%2Be2WUx3hrkxIwN8BLnM7%2B80XyTl3a0jmho4MB%2FSunsORbK%2BACc7MvRpixYDk736faadqax1lAz%2Flusl0%2BGQaqU99KxWDS9Ny4hzNvdlJiYriIS01Y%2B%2BioIGqW30Op3QCrjvaqC%2B0juC%2BGm0LeQf4u2d8w7T9qDEdLQiJ%2F0huPvlNQ8cq1WsmGiiUf2uBnaz0zEkE%2FYBcXiFvu6bB8RRCD4kL1Vvtgyzhh6wvOM%2BD13FEgsIMsrZYViOGhTMrxZrmlqkUDyq4rUrj3DCKJXBdSD8PhVqWYifITxMOKq28sGXw7vhLhNYq3nsCjmQ2NA%2BknsRD%2BHt85d%2B8lu%2Bzo%2FeZ14ZG26NyVXBS3ncgCHiCIcsOhTCTwqPUBjqkAXb46F1KUfyLwVIdO2VzTVXpM5vugHISpT2JReuCHZSy14y4I4GgqVkEnLW5dyftN5rCAIjt8aZZOlU7TD6%2B7ZSOj6EKiFS5mtzFo4%2BAj3GIhOl0wDvRX0g%2Fba94h%2B%2FR2yUtuGc5Yrz0vPh7UtH2J86ApjVoNXV4inM3Z8i8YVnEURmVjpl%2FTRak61ISu7FnAf00a9ILKbDjoN%2BTJwxBeabhu7eE&X-Amz-Signature=76e2031350d57cd1f4464a140e3b7e0395ea54515777da9746910f2ca319498a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


