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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRGGUFN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCkb2JwybNk0SF%2FgmOiqw4kgdoS7R4wBtY%2FIEzH6RdwgIgWzuytpd3TRPCcxZmk1CZgwgNtf9MJ9cYJEa9ocsxV4kq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBcBKlk6rTrX1ri9MircA%2FOs1EUUVeKxlnaG77y3E8DpuYEzPBhoNkG5IIsuiQmWOrVzOh30EkTXke0YdVtbRDO7eRtNtQIFoMZDABK6W9r%2BpczKsU%2Bjdq7BBUSsj1mECicaoOIw2RS56COT1phZmdUeQTnKXkhoHDiu0A0DadMOrMHdC3Y7k0lZ4l05qi52EMt6cu6Q8qSxB%2F1ouY4yJak3MNCgJoL1usdrO0yRVhRXPC9kNSsJYXZEEkbT7XL2sQ5JICJtixVsHnapF6y6Qjhk4cKustzP%2Fv%2F5EC4am7jwSAqxrybPlbDRwsPskEZizVcR2F0fSz%2FDxuqNigH2vK9IGkFKsagv7XGOw0q%2Fa3NktwwZdrQrLQr3wrcbXJ96F4HXY0r22Igf%2BrCbYpaRSzBP3q7vUieQlxTXIYRifbb%2FYDIbJ3cYu2eCGBMo%2BtrEE7QKadsDDEDDznApR2DTQmqEHO3etpQAgcY6Fd%2BlRjBtxWxxzjVE%2B3rM7i1I1AphdO7u1gRXAd%2BsF5aG6oowCGpF9d9ZWrCcJu5cvWJvNwEZ7pBd8Zjbtjup%2BkUe0aihiU3MwwumKjsp%2FAyOzYaHA1p53tebACSdOELXPBPHFbIk86CpeHIsI2OLOk98O3ceAP2WU%2FU0FLKFq99KMNj498QGOqUBf75wnSkY5%2F9v0Gd%2Bz3TRHqOrozWzSOjbovitYNBPOacGCsuau3qlYggw0BMIzvjHdb52s2RkRFjIFbeIJYGOaHsHczvrIXIKYFa7AWi6moIuw5yu45Sbz8EAGCi5cgiVUt2hM3ak4bI5sq1Pw7hpi0LUq9iRY%2Bm3idBBiz%2FxpTSWQ%2FTASVYMvwnjqzhz8fOAhZyKWQVs9f1rsBLwwYe0GbtAa9SJ&X-Amz-Signature=78f2e1a93914565df06536505d5f294a91864fa327e53ced9409294428d6c064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRGGUFN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCkb2JwybNk0SF%2FgmOiqw4kgdoS7R4wBtY%2FIEzH6RdwgIgWzuytpd3TRPCcxZmk1CZgwgNtf9MJ9cYJEa9ocsxV4kq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBcBKlk6rTrX1ri9MircA%2FOs1EUUVeKxlnaG77y3E8DpuYEzPBhoNkG5IIsuiQmWOrVzOh30EkTXke0YdVtbRDO7eRtNtQIFoMZDABK6W9r%2BpczKsU%2Bjdq7BBUSsj1mECicaoOIw2RS56COT1phZmdUeQTnKXkhoHDiu0A0DadMOrMHdC3Y7k0lZ4l05qi52EMt6cu6Q8qSxB%2F1ouY4yJak3MNCgJoL1usdrO0yRVhRXPC9kNSsJYXZEEkbT7XL2sQ5JICJtixVsHnapF6y6Qjhk4cKustzP%2Fv%2F5EC4am7jwSAqxrybPlbDRwsPskEZizVcR2F0fSz%2FDxuqNigH2vK9IGkFKsagv7XGOw0q%2Fa3NktwwZdrQrLQr3wrcbXJ96F4HXY0r22Igf%2BrCbYpaRSzBP3q7vUieQlxTXIYRifbb%2FYDIbJ3cYu2eCGBMo%2BtrEE7QKadsDDEDDznApR2DTQmqEHO3etpQAgcY6Fd%2BlRjBtxWxxzjVE%2B3rM7i1I1AphdO7u1gRXAd%2BsF5aG6oowCGpF9d9ZWrCcJu5cvWJvNwEZ7pBd8Zjbtjup%2BkUe0aihiU3MwwumKjsp%2FAyOzYaHA1p53tebACSdOELXPBPHFbIk86CpeHIsI2OLOk98O3ceAP2WU%2FU0FLKFq99KMNj498QGOqUBf75wnSkY5%2F9v0Gd%2Bz3TRHqOrozWzSOjbovitYNBPOacGCsuau3qlYggw0BMIzvjHdb52s2RkRFjIFbeIJYGOaHsHczvrIXIKYFa7AWi6moIuw5yu45Sbz8EAGCi5cgiVUt2hM3ak4bI5sq1Pw7hpi0LUq9iRY%2Bm3idBBiz%2FxpTSWQ%2FTASVYMvwnjqzhz8fOAhZyKWQVs9f1rsBLwwYe0GbtAa9SJ&X-Amz-Signature=796651a7cb4908a6e30050dc769b3060c014e4d91c82f7e6b635b00d10287651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRGGUFN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCkb2JwybNk0SF%2FgmOiqw4kgdoS7R4wBtY%2FIEzH6RdwgIgWzuytpd3TRPCcxZmk1CZgwgNtf9MJ9cYJEa9ocsxV4kq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBcBKlk6rTrX1ri9MircA%2FOs1EUUVeKxlnaG77y3E8DpuYEzPBhoNkG5IIsuiQmWOrVzOh30EkTXke0YdVtbRDO7eRtNtQIFoMZDABK6W9r%2BpczKsU%2Bjdq7BBUSsj1mECicaoOIw2RS56COT1phZmdUeQTnKXkhoHDiu0A0DadMOrMHdC3Y7k0lZ4l05qi52EMt6cu6Q8qSxB%2F1ouY4yJak3MNCgJoL1usdrO0yRVhRXPC9kNSsJYXZEEkbT7XL2sQ5JICJtixVsHnapF6y6Qjhk4cKustzP%2Fv%2F5EC4am7jwSAqxrybPlbDRwsPskEZizVcR2F0fSz%2FDxuqNigH2vK9IGkFKsagv7XGOw0q%2Fa3NktwwZdrQrLQr3wrcbXJ96F4HXY0r22Igf%2BrCbYpaRSzBP3q7vUieQlxTXIYRifbb%2FYDIbJ3cYu2eCGBMo%2BtrEE7QKadsDDEDDznApR2DTQmqEHO3etpQAgcY6Fd%2BlRjBtxWxxzjVE%2B3rM7i1I1AphdO7u1gRXAd%2BsF5aG6oowCGpF9d9ZWrCcJu5cvWJvNwEZ7pBd8Zjbtjup%2BkUe0aihiU3MwwumKjsp%2FAyOzYaHA1p53tebACSdOELXPBPHFbIk86CpeHIsI2OLOk98O3ceAP2WU%2FU0FLKFq99KMNj498QGOqUBf75wnSkY5%2F9v0Gd%2Bz3TRHqOrozWzSOjbovitYNBPOacGCsuau3qlYggw0BMIzvjHdb52s2RkRFjIFbeIJYGOaHsHczvrIXIKYFa7AWi6moIuw5yu45Sbz8EAGCi5cgiVUt2hM3ak4bI5sq1Pw7hpi0LUq9iRY%2Bm3idBBiz%2FxpTSWQ%2FTASVYMvwnjqzhz8fOAhZyKWQVs9f1rsBLwwYe0GbtAa9SJ&X-Amz-Signature=e689ac5b8eee8dc151d5a5050ae27f88cd56392693ec342a5f03a458a5b41cdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRGGUFN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCkb2JwybNk0SF%2FgmOiqw4kgdoS7R4wBtY%2FIEzH6RdwgIgWzuytpd3TRPCcxZmk1CZgwgNtf9MJ9cYJEa9ocsxV4kq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBcBKlk6rTrX1ri9MircA%2FOs1EUUVeKxlnaG77y3E8DpuYEzPBhoNkG5IIsuiQmWOrVzOh30EkTXke0YdVtbRDO7eRtNtQIFoMZDABK6W9r%2BpczKsU%2Bjdq7BBUSsj1mECicaoOIw2RS56COT1phZmdUeQTnKXkhoHDiu0A0DadMOrMHdC3Y7k0lZ4l05qi52EMt6cu6Q8qSxB%2F1ouY4yJak3MNCgJoL1usdrO0yRVhRXPC9kNSsJYXZEEkbT7XL2sQ5JICJtixVsHnapF6y6Qjhk4cKustzP%2Fv%2F5EC4am7jwSAqxrybPlbDRwsPskEZizVcR2F0fSz%2FDxuqNigH2vK9IGkFKsagv7XGOw0q%2Fa3NktwwZdrQrLQr3wrcbXJ96F4HXY0r22Igf%2BrCbYpaRSzBP3q7vUieQlxTXIYRifbb%2FYDIbJ3cYu2eCGBMo%2BtrEE7QKadsDDEDDznApR2DTQmqEHO3etpQAgcY6Fd%2BlRjBtxWxxzjVE%2B3rM7i1I1AphdO7u1gRXAd%2BsF5aG6oowCGpF9d9ZWrCcJu5cvWJvNwEZ7pBd8Zjbtjup%2BkUe0aihiU3MwwumKjsp%2FAyOzYaHA1p53tebACSdOELXPBPHFbIk86CpeHIsI2OLOk98O3ceAP2WU%2FU0FLKFq99KMNj498QGOqUBf75wnSkY5%2F9v0Gd%2Bz3TRHqOrozWzSOjbovitYNBPOacGCsuau3qlYggw0BMIzvjHdb52s2RkRFjIFbeIJYGOaHsHczvrIXIKYFa7AWi6moIuw5yu45Sbz8EAGCi5cgiVUt2hM3ak4bI5sq1Pw7hpi0LUq9iRY%2Bm3idBBiz%2FxpTSWQ%2FTASVYMvwnjqzhz8fOAhZyKWQVs9f1rsBLwwYe0GbtAa9SJ&X-Amz-Signature=c4cb7683b972157acf2c4e4906ac93520d4fc11eaadb7da439a386d6de057bf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRGGUFN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCkb2JwybNk0SF%2FgmOiqw4kgdoS7R4wBtY%2FIEzH6RdwgIgWzuytpd3TRPCcxZmk1CZgwgNtf9MJ9cYJEa9ocsxV4kq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBcBKlk6rTrX1ri9MircA%2FOs1EUUVeKxlnaG77y3E8DpuYEzPBhoNkG5IIsuiQmWOrVzOh30EkTXke0YdVtbRDO7eRtNtQIFoMZDABK6W9r%2BpczKsU%2Bjdq7BBUSsj1mECicaoOIw2RS56COT1phZmdUeQTnKXkhoHDiu0A0DadMOrMHdC3Y7k0lZ4l05qi52EMt6cu6Q8qSxB%2F1ouY4yJak3MNCgJoL1usdrO0yRVhRXPC9kNSsJYXZEEkbT7XL2sQ5JICJtixVsHnapF6y6Qjhk4cKustzP%2Fv%2F5EC4am7jwSAqxrybPlbDRwsPskEZizVcR2F0fSz%2FDxuqNigH2vK9IGkFKsagv7XGOw0q%2Fa3NktwwZdrQrLQr3wrcbXJ96F4HXY0r22Igf%2BrCbYpaRSzBP3q7vUieQlxTXIYRifbb%2FYDIbJ3cYu2eCGBMo%2BtrEE7QKadsDDEDDznApR2DTQmqEHO3etpQAgcY6Fd%2BlRjBtxWxxzjVE%2B3rM7i1I1AphdO7u1gRXAd%2BsF5aG6oowCGpF9d9ZWrCcJu5cvWJvNwEZ7pBd8Zjbtjup%2BkUe0aihiU3MwwumKjsp%2FAyOzYaHA1p53tebACSdOELXPBPHFbIk86CpeHIsI2OLOk98O3ceAP2WU%2FU0FLKFq99KMNj498QGOqUBf75wnSkY5%2F9v0Gd%2Bz3TRHqOrozWzSOjbovitYNBPOacGCsuau3qlYggw0BMIzvjHdb52s2RkRFjIFbeIJYGOaHsHczvrIXIKYFa7AWi6moIuw5yu45Sbz8EAGCi5cgiVUt2hM3ak4bI5sq1Pw7hpi0LUq9iRY%2Bm3idBBiz%2FxpTSWQ%2FTASVYMvwnjqzhz8fOAhZyKWQVs9f1rsBLwwYe0GbtAa9SJ&X-Amz-Signature=0f5267177fd1f766d84c45e9fbb76858e4c581a636e9aaf95244c1898dc0f45a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRGGUFN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCkb2JwybNk0SF%2FgmOiqw4kgdoS7R4wBtY%2FIEzH6RdwgIgWzuytpd3TRPCcxZmk1CZgwgNtf9MJ9cYJEa9ocsxV4kq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBcBKlk6rTrX1ri9MircA%2FOs1EUUVeKxlnaG77y3E8DpuYEzPBhoNkG5IIsuiQmWOrVzOh30EkTXke0YdVtbRDO7eRtNtQIFoMZDABK6W9r%2BpczKsU%2Bjdq7BBUSsj1mECicaoOIw2RS56COT1phZmdUeQTnKXkhoHDiu0A0DadMOrMHdC3Y7k0lZ4l05qi52EMt6cu6Q8qSxB%2F1ouY4yJak3MNCgJoL1usdrO0yRVhRXPC9kNSsJYXZEEkbT7XL2sQ5JICJtixVsHnapF6y6Qjhk4cKustzP%2Fv%2F5EC4am7jwSAqxrybPlbDRwsPskEZizVcR2F0fSz%2FDxuqNigH2vK9IGkFKsagv7XGOw0q%2Fa3NktwwZdrQrLQr3wrcbXJ96F4HXY0r22Igf%2BrCbYpaRSzBP3q7vUieQlxTXIYRifbb%2FYDIbJ3cYu2eCGBMo%2BtrEE7QKadsDDEDDznApR2DTQmqEHO3etpQAgcY6Fd%2BlRjBtxWxxzjVE%2B3rM7i1I1AphdO7u1gRXAd%2BsF5aG6oowCGpF9d9ZWrCcJu5cvWJvNwEZ7pBd8Zjbtjup%2BkUe0aihiU3MwwumKjsp%2FAyOzYaHA1p53tebACSdOELXPBPHFbIk86CpeHIsI2OLOk98O3ceAP2WU%2FU0FLKFq99KMNj498QGOqUBf75wnSkY5%2F9v0Gd%2Bz3TRHqOrozWzSOjbovitYNBPOacGCsuau3qlYggw0BMIzvjHdb52s2RkRFjIFbeIJYGOaHsHczvrIXIKYFa7AWi6moIuw5yu45Sbz8EAGCi5cgiVUt2hM3ak4bI5sq1Pw7hpi0LUq9iRY%2Bm3idBBiz%2FxpTSWQ%2FTASVYMvwnjqzhz8fOAhZyKWQVs9f1rsBLwwYe0GbtAa9SJ&X-Amz-Signature=8af1ea802b343f2642bc1678e0ca8bc2f2b3392b3906431a92c1fb71edb2ca1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRGGUFN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCkb2JwybNk0SF%2FgmOiqw4kgdoS7R4wBtY%2FIEzH6RdwgIgWzuytpd3TRPCcxZmk1CZgwgNtf9MJ9cYJEa9ocsxV4kq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBcBKlk6rTrX1ri9MircA%2FOs1EUUVeKxlnaG77y3E8DpuYEzPBhoNkG5IIsuiQmWOrVzOh30EkTXke0YdVtbRDO7eRtNtQIFoMZDABK6W9r%2BpczKsU%2Bjdq7BBUSsj1mECicaoOIw2RS56COT1phZmdUeQTnKXkhoHDiu0A0DadMOrMHdC3Y7k0lZ4l05qi52EMt6cu6Q8qSxB%2F1ouY4yJak3MNCgJoL1usdrO0yRVhRXPC9kNSsJYXZEEkbT7XL2sQ5JICJtixVsHnapF6y6Qjhk4cKustzP%2Fv%2F5EC4am7jwSAqxrybPlbDRwsPskEZizVcR2F0fSz%2FDxuqNigH2vK9IGkFKsagv7XGOw0q%2Fa3NktwwZdrQrLQr3wrcbXJ96F4HXY0r22Igf%2BrCbYpaRSzBP3q7vUieQlxTXIYRifbb%2FYDIbJ3cYu2eCGBMo%2BtrEE7QKadsDDEDDznApR2DTQmqEHO3etpQAgcY6Fd%2BlRjBtxWxxzjVE%2B3rM7i1I1AphdO7u1gRXAd%2BsF5aG6oowCGpF9d9ZWrCcJu5cvWJvNwEZ7pBd8Zjbtjup%2BkUe0aihiU3MwwumKjsp%2FAyOzYaHA1p53tebACSdOELXPBPHFbIk86CpeHIsI2OLOk98O3ceAP2WU%2FU0FLKFq99KMNj498QGOqUBf75wnSkY5%2F9v0Gd%2Bz3TRHqOrozWzSOjbovitYNBPOacGCsuau3qlYggw0BMIzvjHdb52s2RkRFjIFbeIJYGOaHsHczvrIXIKYFa7AWi6moIuw5yu45Sbz8EAGCi5cgiVUt2hM3ak4bI5sq1Pw7hpi0LUq9iRY%2Bm3idBBiz%2FxpTSWQ%2FTASVYMvwnjqzhz8fOAhZyKWQVs9f1rsBLwwYe0GbtAa9SJ&X-Amz-Signature=e9fe41c69fbec687f3d1ec98031ce597b296c5746002d7ccb9af21e05d789fbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRGGUFN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCkb2JwybNk0SF%2FgmOiqw4kgdoS7R4wBtY%2FIEzH6RdwgIgWzuytpd3TRPCcxZmk1CZgwgNtf9MJ9cYJEa9ocsxV4kq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBcBKlk6rTrX1ri9MircA%2FOs1EUUVeKxlnaG77y3E8DpuYEzPBhoNkG5IIsuiQmWOrVzOh30EkTXke0YdVtbRDO7eRtNtQIFoMZDABK6W9r%2BpczKsU%2Bjdq7BBUSsj1mECicaoOIw2RS56COT1phZmdUeQTnKXkhoHDiu0A0DadMOrMHdC3Y7k0lZ4l05qi52EMt6cu6Q8qSxB%2F1ouY4yJak3MNCgJoL1usdrO0yRVhRXPC9kNSsJYXZEEkbT7XL2sQ5JICJtixVsHnapF6y6Qjhk4cKustzP%2Fv%2F5EC4am7jwSAqxrybPlbDRwsPskEZizVcR2F0fSz%2FDxuqNigH2vK9IGkFKsagv7XGOw0q%2Fa3NktwwZdrQrLQr3wrcbXJ96F4HXY0r22Igf%2BrCbYpaRSzBP3q7vUieQlxTXIYRifbb%2FYDIbJ3cYu2eCGBMo%2BtrEE7QKadsDDEDDznApR2DTQmqEHO3etpQAgcY6Fd%2BlRjBtxWxxzjVE%2B3rM7i1I1AphdO7u1gRXAd%2BsF5aG6oowCGpF9d9ZWrCcJu5cvWJvNwEZ7pBd8Zjbtjup%2BkUe0aihiU3MwwumKjsp%2FAyOzYaHA1p53tebACSdOELXPBPHFbIk86CpeHIsI2OLOk98O3ceAP2WU%2FU0FLKFq99KMNj498QGOqUBf75wnSkY5%2F9v0Gd%2Bz3TRHqOrozWzSOjbovitYNBPOacGCsuau3qlYggw0BMIzvjHdb52s2RkRFjIFbeIJYGOaHsHczvrIXIKYFa7AWi6moIuw5yu45Sbz8EAGCi5cgiVUt2hM3ak4bI5sq1Pw7hpi0LUq9iRY%2Bm3idBBiz%2FxpTSWQ%2FTASVYMvwnjqzhz8fOAhZyKWQVs9f1rsBLwwYe0GbtAa9SJ&X-Amz-Signature=b325002ac118f6ce5c9ad79f5bca5f3053ba0f54b443fd408e5b840f7a5ce336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRGGUFN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCkb2JwybNk0SF%2FgmOiqw4kgdoS7R4wBtY%2FIEzH6RdwgIgWzuytpd3TRPCcxZmk1CZgwgNtf9MJ9cYJEa9ocsxV4kq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBcBKlk6rTrX1ri9MircA%2FOs1EUUVeKxlnaG77y3E8DpuYEzPBhoNkG5IIsuiQmWOrVzOh30EkTXke0YdVtbRDO7eRtNtQIFoMZDABK6W9r%2BpczKsU%2Bjdq7BBUSsj1mECicaoOIw2RS56COT1phZmdUeQTnKXkhoHDiu0A0DadMOrMHdC3Y7k0lZ4l05qi52EMt6cu6Q8qSxB%2F1ouY4yJak3MNCgJoL1usdrO0yRVhRXPC9kNSsJYXZEEkbT7XL2sQ5JICJtixVsHnapF6y6Qjhk4cKustzP%2Fv%2F5EC4am7jwSAqxrybPlbDRwsPskEZizVcR2F0fSz%2FDxuqNigH2vK9IGkFKsagv7XGOw0q%2Fa3NktwwZdrQrLQr3wrcbXJ96F4HXY0r22Igf%2BrCbYpaRSzBP3q7vUieQlxTXIYRifbb%2FYDIbJ3cYu2eCGBMo%2BtrEE7QKadsDDEDDznApR2DTQmqEHO3etpQAgcY6Fd%2BlRjBtxWxxzjVE%2B3rM7i1I1AphdO7u1gRXAd%2BsF5aG6oowCGpF9d9ZWrCcJu5cvWJvNwEZ7pBd8Zjbtjup%2BkUe0aihiU3MwwumKjsp%2FAyOzYaHA1p53tebACSdOELXPBPHFbIk86CpeHIsI2OLOk98O3ceAP2WU%2FU0FLKFq99KMNj498QGOqUBf75wnSkY5%2F9v0Gd%2Bz3TRHqOrozWzSOjbovitYNBPOacGCsuau3qlYggw0BMIzvjHdb52s2RkRFjIFbeIJYGOaHsHczvrIXIKYFa7AWi6moIuw5yu45Sbz8EAGCi5cgiVUt2hM3ak4bI5sq1Pw7hpi0LUq9iRY%2Bm3idBBiz%2FxpTSWQ%2FTASVYMvwnjqzhz8fOAhZyKWQVs9f1rsBLwwYe0GbtAa9SJ&X-Amz-Signature=c468c460f4549e189f7c9addfcb4b3a316310c1c3537ced0dcf88d85f9f264ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRGGUFN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCkb2JwybNk0SF%2FgmOiqw4kgdoS7R4wBtY%2FIEzH6RdwgIgWzuytpd3TRPCcxZmk1CZgwgNtf9MJ9cYJEa9ocsxV4kq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBcBKlk6rTrX1ri9MircA%2FOs1EUUVeKxlnaG77y3E8DpuYEzPBhoNkG5IIsuiQmWOrVzOh30EkTXke0YdVtbRDO7eRtNtQIFoMZDABK6W9r%2BpczKsU%2Bjdq7BBUSsj1mECicaoOIw2RS56COT1phZmdUeQTnKXkhoHDiu0A0DadMOrMHdC3Y7k0lZ4l05qi52EMt6cu6Q8qSxB%2F1ouY4yJak3MNCgJoL1usdrO0yRVhRXPC9kNSsJYXZEEkbT7XL2sQ5JICJtixVsHnapF6y6Qjhk4cKustzP%2Fv%2F5EC4am7jwSAqxrybPlbDRwsPskEZizVcR2F0fSz%2FDxuqNigH2vK9IGkFKsagv7XGOw0q%2Fa3NktwwZdrQrLQr3wrcbXJ96F4HXY0r22Igf%2BrCbYpaRSzBP3q7vUieQlxTXIYRifbb%2FYDIbJ3cYu2eCGBMo%2BtrEE7QKadsDDEDDznApR2DTQmqEHO3etpQAgcY6Fd%2BlRjBtxWxxzjVE%2B3rM7i1I1AphdO7u1gRXAd%2BsF5aG6oowCGpF9d9ZWrCcJu5cvWJvNwEZ7pBd8Zjbtjup%2BkUe0aihiU3MwwumKjsp%2FAyOzYaHA1p53tebACSdOELXPBPHFbIk86CpeHIsI2OLOk98O3ceAP2WU%2FU0FLKFq99KMNj498QGOqUBf75wnSkY5%2F9v0Gd%2Bz3TRHqOrozWzSOjbovitYNBPOacGCsuau3qlYggw0BMIzvjHdb52s2RkRFjIFbeIJYGOaHsHczvrIXIKYFa7AWi6moIuw5yu45Sbz8EAGCi5cgiVUt2hM3ak4bI5sq1Pw7hpi0LUq9iRY%2Bm3idBBiz%2FxpTSWQ%2FTASVYMvwnjqzhz8fOAhZyKWQVs9f1rsBLwwYe0GbtAa9SJ&X-Amz-Signature=18863b932dd9bb6c27c47f05ecde763d1126623a13fe14c0c7014a1fc0aae622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBA6PSSN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCTQnzaFyudMRk6JU9LMKuDXVeAf8E6CPnhJ97rc4ArAiBKSeRuskxPz%2B4cHZu5fcpRmlH41lGvVVahP5A3N9kjHir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM8rrbZNxB5Kncx2DnKtwDueMyBG8G6SNNEm%2BnmBHDesR4wW92dpj7978C8INsl9Ukccw8Ro6h1PnWy2oDNbOaCl1kyPgBrB34ksxSBTKZi%2FcygvI185ou5enxJh3OD0puwBxT2z%2F3W%2FGTtz%2FKviv0KSbFW%2BlyqfK9eHpeYzMUILZoFh0JsOB251BBzQ2Ayg2Sb4M%2B8dX7Lcqr5qGPaGzHprFzCCzUuaECY57MVxIW5OBbFnUC1P%2FSfDjFchRWmt2q20iyeB%2FzmTYkYZw9oIHqHPcynsZjxuKDP185wh6BYjcA4BCP7fQ61ebRv%2F8JbbPV35PU1lHRzc0Sx4D5sBRo0MyOYHAKr8wjzsG9iUBQiPveOnLUbnBKhdL80x2aH9ZxpocZ9uSWnBoVr4CIk%2FrKj%2BnNk4vVzBKGqgKRdDvGCy48cqXD8ZyxKbPOcWSS%2FxCnTBIqj0TpjpxchOBRKdzWnAsIwI%2Bax7GbqNYXy0YnyS8Pk5TmtGBmNDYjoxIwqfu8N1M4N1DNWxlW9IcNma8rJTOmgLkugXQT06gRO%2B%2BV%2B%2B5eKb4tP7QC6yh3GwiQL0kXXUer6dq7nts%2BImy6RZR83hPaw9%2BKBilU5ID2VP0pxiBY6MtfgB6c%2BipgCWhGQvz7dBSwLlBaaiPdzDow0%2Fj3xAY6pgEta1F0uIGRFEzmEI7IEUop%2BxWrkehDBCUDIJsF22vQcXf894C7vrhDGPqpH3BNLxcVOrhrMj8eyNtfDE4fe68Pt%2FTHM9Tub30Om4ASoxiUdOzrN%2FTDzgqJlGeR3xzSfxxYzt1DDdZPFYNOFXMpPlRAnyFbobDLscMLMmkDbPpDc0z4OupEPtb0EaT5pXdwBKjVxNjqmGeYvG%2BuqMJuK0yFHaCG4r%2F5&X-Amz-Signature=edfdec3c96c12c270407548422ee68f94aa95b13a99553e2850c81cc9aabf73c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRLE5GIJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcD9SNECx5CYn8688CXIUnmehGvgS57oYIX8kO80lycAiEAmleZQwIFek8GKzTAnWIGf4cVC%2FgIMVqC6LqIvKaki0Mq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDAxbom2kIQXV8C%2FxmyrcA9DoShDLWkUOInzUll6ydF%2B7NWq%2B3YJtkhd9xApQinKYfVrik2c6ZyJck7fseDJzGkM8wbEMZ%2Fqy%2F5xNv2d%2BAPoySdqCwTK407j2ucdQt3ly8AA5%2BB7Co2AZpakTzHY5DcFhol6q6FM%2BBjX0jNGj5kEs%2Ffux7450zXv9Ow%2B1xmoBE%2Fm0r%2BAo0Lds9sDQtPRs1OXOFzIolyJShwYlxkLFxU0G7YMO5ehqdZOiD%2FpbwdD32VdT7%2BymYEdVoTCbfusVm8ART%2BvlqcfyITA3OXPHaiP9VxBRSR06kmVWlTwuHAUPvmJgTgGRqdBUOLuVb%2BfpzHcbOieJWNMghaqllOIz8yOktm1r8kh7TQjKRjJROXBJY2jDa%2F8XtO%2FjJyE5uPPbzYs%2FF6g3gS%2Fv6AzKFADD%2F%2BvqKEK138z3cXGcvoFNbp%2Fi0M304jJnfZhSYepJSQQBx%2F8ujz%2Bwp37reqQoSjn9Ubzv7wdoAZNf2UBMwIkE5t%2B7Tu8rC7EyO0AlK%2Bn9Z4hFT4yZn594ARPZNksQT2WEHGsHXaJkMtnnGJd9lFfqjtaNPYJItVptyJ8Hw0zh5R4mhdQeD56CUgWqDq6hP651g7lZw7S9rNqr27nE0rtNhoYTGtAA78VpAmsRiDN2MP%2F498QGOqUB9Jsx6CJ%2F%2FeeyzdZSfSfPWV3OiwR5rLrlzDR2txBCVntjjT%2Bo6YCkIj9NUi36TjmkBu5EKdRB9eds%2BQb5Q6yWyPdT0bf0TYy%2BtoQm5pAnHbXSF4PfpJYm2PgKFNxxduepvJvo%2F%2BGIuWAubY53NONgtH3pMOD9odbaGBXP7pngTiCI9SvEOnTYVVIS9epl%2BWkGjK7t0o3E8%2Baz73FRa7RuYY%2FbeqjU&X-Amz-Signature=91b9e8684dbed7fbe42745d6e145c820e330a9b189afcc9f77e73cd1bf299953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P53BQE3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdeIVUeUB7JnrUFbHSETOUKJTCqwUj%2BtBEEf3doAYMBAIgJA0SCg%2Bjfk4GnVHs29eKWhGSXFuvH5CACjlyHfQscCQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDLYjrpKMDz7ro2QP%2BircAx0VpBFcEoVwbSb%2Boy9IqTMhP5ZHKuf9AFNOkyITH6S0xC%2F9FhBg%2BP5N6TQQc4%2Bzaqxub%2F7i1IDRAPtoHFSPVkcuknR8%2FAxFqaebnJhopRQw05YhikYKqSDZJtxPberXxLVhM6qENtsL8%2F14PYYVI9kWT81%2FUo5UhOr4%2BX8lrllVFiDpMEEz73ccqmhfuTKFgJE4%2FsBsMD%2B8%2FceU2Kq0mlZkeP3I5F7uvK43xqRJauw2zo%2FFq9HYhmdMf3WRlXboCJflaRjE%2BjHBb92U8MqUlDkT3RoX2pd9ZPqy%2FSo2lMCl7g9HC9SxxbvDZ%2BmZ8TyqIjkRWILYNBFVdzgA6PIJ%2FUPPHHWo40X2jRrDvBOhhXFXrQsg3KO2x34RBoOp0d%2BTgZ0ddSei7%2Blxl5vD26NIShzrwgpXVSOx0W66FQLIDoFGqHIeyI2tDVM4v4ECWOFrdKHsJU9lXrltZEMo3jakfeic%2FGZGJENOCHwLqPnkc4UmvIUW69KfvTLL9nsNB3ECsFCgDSBD3pZNm0%2FWKMj2TbI8zadOSDHkL%2F17OGZkYuHCwDubMOX%2FDvlkp24Uwlo65u38uah5R9g0GMP%2BthAXWm8hRCsIxFHMKLWOqzmTSg%2F48O%2BOUfeYRUKDAgy4MOD598QGOqUBzHda8jrStPB%2Fu4ufDQHSpVYaSN%2FjtBnOxcb6TNE%2BGRbUpaMp404nbyDADBuzJAD1JUtgdw%2FWFnMJSfs%2BK5lNMuDe0q5fZ%2FdrCt0n6yPs3jFFRYf%2Fek5C2UU3aibT9Hh%2FME53dAAkR8xPiC69q7YuNNjcdaM9fOlLeQcJ34V53%2Fw%2FZEC2%2F4gO133gaCEmysHQNPp2W%2FsjYjP3wWYBXhLxsJ0TXuCg&X-Amz-Signature=1ba0461caf325a66a52c9ca3d63dc876c7af483861a9767334292a3d779b9e27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRGGUFN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCkb2JwybNk0SF%2FgmOiqw4kgdoS7R4wBtY%2FIEzH6RdwgIgWzuytpd3TRPCcxZmk1CZgwgNtf9MJ9cYJEa9ocsxV4kq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBcBKlk6rTrX1ri9MircA%2FOs1EUUVeKxlnaG77y3E8DpuYEzPBhoNkG5IIsuiQmWOrVzOh30EkTXke0YdVtbRDO7eRtNtQIFoMZDABK6W9r%2BpczKsU%2Bjdq7BBUSsj1mECicaoOIw2RS56COT1phZmdUeQTnKXkhoHDiu0A0DadMOrMHdC3Y7k0lZ4l05qi52EMt6cu6Q8qSxB%2F1ouY4yJak3MNCgJoL1usdrO0yRVhRXPC9kNSsJYXZEEkbT7XL2sQ5JICJtixVsHnapF6y6Qjhk4cKustzP%2Fv%2F5EC4am7jwSAqxrybPlbDRwsPskEZizVcR2F0fSz%2FDxuqNigH2vK9IGkFKsagv7XGOw0q%2Fa3NktwwZdrQrLQr3wrcbXJ96F4HXY0r22Igf%2BrCbYpaRSzBP3q7vUieQlxTXIYRifbb%2FYDIbJ3cYu2eCGBMo%2BtrEE7QKadsDDEDDznApR2DTQmqEHO3etpQAgcY6Fd%2BlRjBtxWxxzjVE%2B3rM7i1I1AphdO7u1gRXAd%2BsF5aG6oowCGpF9d9ZWrCcJu5cvWJvNwEZ7pBd8Zjbtjup%2BkUe0aihiU3MwwumKjsp%2FAyOzYaHA1p53tebACSdOELXPBPHFbIk86CpeHIsI2OLOk98O3ceAP2WU%2FU0FLKFq99KMNj498QGOqUBf75wnSkY5%2F9v0Gd%2Bz3TRHqOrozWzSOjbovitYNBPOacGCsuau3qlYggw0BMIzvjHdb52s2RkRFjIFbeIJYGOaHsHczvrIXIKYFa7AWi6moIuw5yu45Sbz8EAGCi5cgiVUt2hM3ak4bI5sq1Pw7hpi0LUq9iRY%2Bm3idBBiz%2FxpTSWQ%2FTASVYMvwnjqzhz8fOAhZyKWQVs9f1rsBLwwYe0GbtAa9SJ&X-Amz-Signature=55dca458d561c977ea75034e66ca8134f08bbebc5d4ec387687346d1b9ba5380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZWC64QK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjXmSRy%2FTQI4jtlM5WFdQTLvncfmqvXBErxX3qMbEsmQIhAP%2FraNkVeXmODGrsbsX9f12abfNoW6FRslPekNAnry6MKv8DCEgQABoMNjM3NDIzMTgzODA1IgyGhqaXTEYmeONwnZwq3AMBRRi3dtZO3hUSkKd3deKEHxira7Zhf3QBacIw%2F%2F4pRUgC%2Blbh2%2BxTMlzrCjh0DQZOvffdhnI565lW0DiDEpiKgHVon4eKh9ykrn64f0NgxTd3lQRco1FzNSfScrcnkAzBfgC7YtK0SucxWvD3VOI%2BxpsFmVO75zITFdnSfpKEeD8SXSKMBIcuhQd%2BkSnFqOdAlOvUEYnK4Efgr3ninEvpmVDgeN8E1mK9CinKKiE05tiVVVt020VX3YVkR0RkBtX9mpkDLg545DGImUdCHPwpzkrvV2TIp58928UhEGiFzQ4%2BGrMtd6FdfWQ%2FWXFHBZIvuceKfFGBjYt8BV0Z6LVRiyoTRC%2BQBFJ0IRteO5NDp6baG20YbYid5v%2Brcu3QUVNbG4OVzoezC9cuO7vv0%2FYj%2FDFk2PNIHlj7C%2ByjJBNdRU5eUHAPkzvlOKI2%2FRuU4XYkWxwqHVoVjk6b%2BbDqxdhxIqxisKeSzVWbvTW88JH90eFUuCfQljbzCyk7QKa%2FKUHKq%2FYOaB78hvm%2FTXt1vkY48U1M4XqORQUQGIB0yt%2BBuFhAHMYqwx2meGIVMEp0pGVQUQiRDBvPWX1k%2FtFB9e8ycBFJM77xl8%2Fb6cTmvPl6csJ8%2BMCwzadGIlzN%2FTDP%2BPfEBjqkAROkKvSerntpFxt2dzrdjKJ%2Bjnxn1XftvyOcBitc85wQdPgusUN2zAeVN9lLV0xWmSmP7isEp6bZgkQ6n%2B5H4F6T6i%2BEzSFR%2Bz%2BcnCGbSpnzh7rGsIpDZ4Vv6og05c62FtDRjSYndOmrfkhvedHI1k4Km76GeqpgP2CIo394Aj7ZypBBeh%2Beuvo6gMIXFja5HnwLrboGJHsUEAh0m2tztr4PG88T&X-Amz-Signature=de8fe3a97a7bf57eea93f054e133100635ba7d7c783c6974686824cf4bd78c54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRGGUFN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCkb2JwybNk0SF%2FgmOiqw4kgdoS7R4wBtY%2FIEzH6RdwgIgWzuytpd3TRPCcxZmk1CZgwgNtf9MJ9cYJEa9ocsxV4kq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBcBKlk6rTrX1ri9MircA%2FOs1EUUVeKxlnaG77y3E8DpuYEzPBhoNkG5IIsuiQmWOrVzOh30EkTXke0YdVtbRDO7eRtNtQIFoMZDABK6W9r%2BpczKsU%2Bjdq7BBUSsj1mECicaoOIw2RS56COT1phZmdUeQTnKXkhoHDiu0A0DadMOrMHdC3Y7k0lZ4l05qi52EMt6cu6Q8qSxB%2F1ouY4yJak3MNCgJoL1usdrO0yRVhRXPC9kNSsJYXZEEkbT7XL2sQ5JICJtixVsHnapF6y6Qjhk4cKustzP%2Fv%2F5EC4am7jwSAqxrybPlbDRwsPskEZizVcR2F0fSz%2FDxuqNigH2vK9IGkFKsagv7XGOw0q%2Fa3NktwwZdrQrLQr3wrcbXJ96F4HXY0r22Igf%2BrCbYpaRSzBP3q7vUieQlxTXIYRifbb%2FYDIbJ3cYu2eCGBMo%2BtrEE7QKadsDDEDDznApR2DTQmqEHO3etpQAgcY6Fd%2BlRjBtxWxxzjVE%2B3rM7i1I1AphdO7u1gRXAd%2BsF5aG6oowCGpF9d9ZWrCcJu5cvWJvNwEZ7pBd8Zjbtjup%2BkUe0aihiU3MwwumKjsp%2FAyOzYaHA1p53tebACSdOELXPBPHFbIk86CpeHIsI2OLOk98O3ceAP2WU%2FU0FLKFq99KMNj498QGOqUBf75wnSkY5%2F9v0Gd%2Bz3TRHqOrozWzSOjbovitYNBPOacGCsuau3qlYggw0BMIzvjHdb52s2RkRFjIFbeIJYGOaHsHczvrIXIKYFa7AWi6moIuw5yu45Sbz8EAGCi5cgiVUt2hM3ak4bI5sq1Pw7hpi0LUq9iRY%2Bm3idBBiz%2FxpTSWQ%2FTASVYMvwnjqzhz8fOAhZyKWQVs9f1rsBLwwYe0GbtAa9SJ&X-Amz-Signature=e8e28a1f663dcf4e13bfaab50813f68c6c6c3fd3a23cfcba71c99759dd103268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWSREOVV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCle37lKZeaxRGHh1AEKVAv4dN3Ak8%2BOl3%2FhDg06F7mZwIhAKdWpI443bHGQvPN1ma05SaYRpQdHRtA05LOp%2B7XrI5JKv8DCEgQABoMNjM3NDIzMTgzODA1IgxUBRPiVve%2BlLpRf84q3ANb1y4HtcsDFbR3OK5d10x4qQDOFYa8smxf4KY7OMNwxNOedHmhikvucx1uFHJ7ASz9OpMm596jrkbkYG%2BWYqdcBEcuCDDCMG9j%2FwC%2BsoNo0v2fxT%2FAmHp1FJ5ShG55tuu7J7BSS6RoHbcAUaN1ScDnV7xjkXA6MV7mCKGR7vPijlpGq8lZrNfv1FzwzUi0U7BQAxlig1Xpqo87iBRyOfnY3xbPYjmOZbDEAsveWAfI3VCvDEB%2FYPTFJ8tY8Mbcfomu0LEFnLMvIfpfQ5ZCdT8umul19fabh31KuAjYhJ4wDhsGwujX691tbLju9BLN2crC0J%2FPby3hPyiteGWgMn6FsMN%2BWd7PRwFTZOLBKzDiOmbRRIz5IwXVS2496JtlgoZY6bvm9rnjGaRQFhoeQQphO32chnpChCTTMcqcL2Oo5ro02vbtW3dBif4Mkoao993JypoeOUEhvicYMlnPDKad9EgX%2BCH%2FusdgfLg6tn4nX9ARRhMID8lpKwXWc%2BAHPvVuBnwkJiH3t%2FyU8ReofYjYjJwIUkUwg0%2BtA%2FITReCJmPxpLMhsAzo5ze43N%2FriIGyeE4mytlK67VsCibOpFZJNCznk0Fhp3i1RmqRcoslg5fmVToRhlHNWY%2BG0JDDM%2BPfEBjqkAZm9WuKUH62yC%2FokBZJPy2vVTbKy8Ww6esMc%2BJJD6X7H4yoJIs2N3lPrCT4kEodSiwyl6O775rClmwCaAblDev1VLLo4MytT%2BO8get8YvDUtBhgo7B2zgesaIGTCDu%2FAbt36n0P80sV3tI11Jiy9o07aOuwqDYM%2Bh8AwAu%2B1l0ZKItq0tGlRX5fg1U3Q6tAvvfTBzh%2F8MyaBIfP%2FqK7lK9o115jz&X-Amz-Signature=d5fc8aff54d1304ea1fe548a093e392fb302ae732fb17c3772ecb400c5076842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRGGUFN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCkb2JwybNk0SF%2FgmOiqw4kgdoS7R4wBtY%2FIEzH6RdwgIgWzuytpd3TRPCcxZmk1CZgwgNtf9MJ9cYJEa9ocsxV4kq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBcBKlk6rTrX1ri9MircA%2FOs1EUUVeKxlnaG77y3E8DpuYEzPBhoNkG5IIsuiQmWOrVzOh30EkTXke0YdVtbRDO7eRtNtQIFoMZDABK6W9r%2BpczKsU%2Bjdq7BBUSsj1mECicaoOIw2RS56COT1phZmdUeQTnKXkhoHDiu0A0DadMOrMHdC3Y7k0lZ4l05qi52EMt6cu6Q8qSxB%2F1ouY4yJak3MNCgJoL1usdrO0yRVhRXPC9kNSsJYXZEEkbT7XL2sQ5JICJtixVsHnapF6y6Qjhk4cKustzP%2Fv%2F5EC4am7jwSAqxrybPlbDRwsPskEZizVcR2F0fSz%2FDxuqNigH2vK9IGkFKsagv7XGOw0q%2Fa3NktwwZdrQrLQr3wrcbXJ96F4HXY0r22Igf%2BrCbYpaRSzBP3q7vUieQlxTXIYRifbb%2FYDIbJ3cYu2eCGBMo%2BtrEE7QKadsDDEDDznApR2DTQmqEHO3etpQAgcY6Fd%2BlRjBtxWxxzjVE%2B3rM7i1I1AphdO7u1gRXAd%2BsF5aG6oowCGpF9d9ZWrCcJu5cvWJvNwEZ7pBd8Zjbtjup%2BkUe0aihiU3MwwumKjsp%2FAyOzYaHA1p53tebACSdOELXPBPHFbIk86CpeHIsI2OLOk98O3ceAP2WU%2FU0FLKFq99KMNj498QGOqUBf75wnSkY5%2F9v0Gd%2Bz3TRHqOrozWzSOjbovitYNBPOacGCsuau3qlYggw0BMIzvjHdb52s2RkRFjIFbeIJYGOaHsHczvrIXIKYFa7AWi6moIuw5yu45Sbz8EAGCi5cgiVUt2hM3ak4bI5sq1Pw7hpi0LUq9iRY%2Bm3idBBiz%2FxpTSWQ%2FTASVYMvwnjqzhz8fOAhZyKWQVs9f1rsBLwwYe0GbtAa9SJ&X-Amz-Signature=f9fda6bfa32c28947965d4785936f4c2faca51460700efc83372001d43c9bd5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ5SCEV4%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEInuG2sKli%2FmDgRd99ysCiO%2FXDTVeqYP9dQAyk2jEJqAiEArw55%2Fv6fLjdm%2FwvlBg6E4dP6M006DsOCXGl45gtf8RYq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDNwZFeGoGz0HCUFrdircA18ZxAg1axsWvgvEI3DiPiPTtJmNAuGzfjQiIcu7DxaY%2BGZ4m5jFRGbbj7dmRkhMjMTnei1yJOq2RVYK%2Bn7DMQzjj7H6%2BahKP1W1DUqyioX84Cx8CKVEXdgtE52ETJur%2FBHi%2BLQDuntV%2FQIhyLWh78fRwejIba3szvutKK6ddrZaOC8CwGnMmD9mkcTlVuxlOyXq1SCYBI%2FO2Tj41BbIT1u8Jfn9rwRvktFMVuzsWg8Bs5AHb0Zp72tdMlD3jWclvRQW%2FsGLg3dmVeQ2k4aoIRwnowxZWKQJ%2FRzD0xrS0iK%2FcrGfloVX7LTdWKZMG95ez20mOUa9SDct67fl68KHxf7dkggMBmrSufj51E28HUfZtfChcokp5b5v7W9FThyCRSLVEpDkNTQ6Ma7Xhq5bFEljubANf87gWEXg%2F%2B5qG0L3d5z%2BI%2Bk%2BGzz73TlucEw3BpJNARiyWb0s6%2B6HIG8SqadByzsL%2FbI3%2Fxq%2Beqvi9netp%2FJUko1VjfH3iR8Bi0sNKLka2ItYgqC52AIqc3yjwZCSIjQlOVzsWuDw8G15q8YR2xF4P2K2OoXp543BFTRhsbc%2F9q7p4ReftozUMXx40X684xg%2F6RKrK0QjLLC9jQoibXyBei6Zw%2B9CKUAIMNL698QGOqUBycalgkeMz52qHeHmZem%2F30TNceNqK%2BWUYp%2BIinIIZ1r6dZpCOgOqCLR9jk6yYWX6Yp2aC7QJPT0FnXo3pe2LEg7DIrhxS%2FaJfac%2FkvLe4LEDDQcACMDmKm4XAZGDKtfnVWVSquvOJk0qglSLyRlTLd4Ci%2Br0aUKfzflQ3RWojAP2YFhiOXeEqqhr6%2FNrMMC3LPP%2B%2FGrUlKBJ4IMYUeKVa%2B0H%2FWeB&X-Amz-Signature=b919ade1c5e7266cf9087f560a55265c285de27a5e26530c2d62b9c083c7e510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRGGUFN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCkb2JwybNk0SF%2FgmOiqw4kgdoS7R4wBtY%2FIEzH6RdwgIgWzuytpd3TRPCcxZmk1CZgwgNtf9MJ9cYJEa9ocsxV4kq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBcBKlk6rTrX1ri9MircA%2FOs1EUUVeKxlnaG77y3E8DpuYEzPBhoNkG5IIsuiQmWOrVzOh30EkTXke0YdVtbRDO7eRtNtQIFoMZDABK6W9r%2BpczKsU%2Bjdq7BBUSsj1mECicaoOIw2RS56COT1phZmdUeQTnKXkhoHDiu0A0DadMOrMHdC3Y7k0lZ4l05qi52EMt6cu6Q8qSxB%2F1ouY4yJak3MNCgJoL1usdrO0yRVhRXPC9kNSsJYXZEEkbT7XL2sQ5JICJtixVsHnapF6y6Qjhk4cKustzP%2Fv%2F5EC4am7jwSAqxrybPlbDRwsPskEZizVcR2F0fSz%2FDxuqNigH2vK9IGkFKsagv7XGOw0q%2Fa3NktwwZdrQrLQr3wrcbXJ96F4HXY0r22Igf%2BrCbYpaRSzBP3q7vUieQlxTXIYRifbb%2FYDIbJ3cYu2eCGBMo%2BtrEE7QKadsDDEDDznApR2DTQmqEHO3etpQAgcY6Fd%2BlRjBtxWxxzjVE%2B3rM7i1I1AphdO7u1gRXAd%2BsF5aG6oowCGpF9d9ZWrCcJu5cvWJvNwEZ7pBd8Zjbtjup%2BkUe0aihiU3MwwumKjsp%2FAyOzYaHA1p53tebACSdOELXPBPHFbIk86CpeHIsI2OLOk98O3ceAP2WU%2FU0FLKFq99KMNj498QGOqUBf75wnSkY5%2F9v0Gd%2Bz3TRHqOrozWzSOjbovitYNBPOacGCsuau3qlYggw0BMIzvjHdb52s2RkRFjIFbeIJYGOaHsHczvrIXIKYFa7AWi6moIuw5yu45Sbz8EAGCi5cgiVUt2hM3ak4bI5sq1Pw7hpi0LUq9iRY%2Bm3idBBiz%2FxpTSWQ%2FTASVYMvwnjqzhz8fOAhZyKWQVs9f1rsBLwwYe0GbtAa9SJ&X-Amz-Signature=77a7477686b5707b0d178882cab5da58359ccf3275ba32ae5469304ce6bb1080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3F7FEQV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIx%2Bhm76eQ1oBaWQDDjRVDqIvbLff%2FX%2BippTCFFx98YAiBB2O7N8z%2F8GYsMdhr%2BJNllnIlAOKPUnS2pW1pYGiIFNyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM0fnIx8OLwFYMMMG4KtwDL5pUPlSu0YBmxS%2BmjHqWobtIY7Ug6aqxW14rRk6WH3eoSMh7tgeAVLYR5vzz9kvkrvo7G%2B0q31D8fjSU%2BnjUJmvqGud2F9DLxLdudEEgwn80K4883zAJ%2FTsVE8LTIxzqpCl7a5krtpTRlTdp6rvNOqmrobqo5i%2F4xQciUUHACFp2m3UpfmfNDOSOQLLeHYA7UX32c2n5EwpJXhla5LORrWgwuZDsPJ4DKHngt7vy5uxC2h9n7rgLfgimMpB3eZh98Gz4xnNgkWPKlCZBeYyMhWAnwfT0JHA4QMhKYsyRTK9BXODlDmTZHAo2tvH%2F%2B30NMkMwXHmeoEgTtR%2FLqY1Omtq%2FIJ7sOkNsnUwJcZAPjv4Ax%2BiEbyJEXtcq3QK3CIklcJFZFz%2F3aWt0pWqTQLD1%2BLQr58WpUopfsUGlbiyug1%2BZ1J3BK8OQtflyLj06OKb2ArRYJE%2FuN%2FNrooEnPiQ3cFcugAaWKNqet5aDuoxkb9y0hcEYXb0g34RI9n5E0UBKgba9ODbaRLqV%2BRjWGqyGXlfE1%2Bk%2FDQb0%2BKUT%2Bi0DFGw8oljS5uMQsXi3PuccTwXWh5GN%2BMpTegGNsszNbGtR0sah7ghrYwerOj%2BEaANlQXWhUPCEH6HVGK23i6Qw7Pn3xAY6pgHd8ckjc2Z8NwQtdG0sPSapesuImy78jVfr%2FWG8X2ufbEgiARD%2BSIa7VYa8F%2B4C4XLJcj%2BxnDwOf%2BoSGr3Jrj8fyQTaTGOs04qpVjSmx3jwQDvoJIkzm2aUMuaf8wwKE%2F%2Fd5tASKnIjwOWJ81UOVWTV%2FVwQUZznhCtlFaR5EZTsq52gdgD8LaBfXyHj0YRNZDaVesiuxrMmPG7S1A2UKNEdo6nmHQ%2Be&X-Amz-Signature=fc1cedc43cc2b19121c84d3902094a0ebee19fdb601fef794626c4ea7881d328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PCMZ2ZY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk1AXZiJDIZGL35VvYLbTusPdEKAvyTs9PHaAUWWfwUAIgUwWjgZVNzzTazJJPXz2g%2FUr1ZQj9IgADgdZGQtVhDHAq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFWVM3b9GCs3FqXB8SrcAxbC2azVezJK7OrzEoq43lKwl97l%2FgnrDNi3slrdXLXafN%2Bf5s8ydZ0AWVFD95MJ%2F2TvD6EvjwzDQ%2FrDbaQt28uKAuz3OqTPA91ed7S170dIEpscwa20k5FpCj1AeJefKBOssh3t6%2B4Zk8ywbz0TPIp4LJK4hiXpTii%2BxY1vWa%2FWug%2BhgHcwqGhFI53ykQ7FPXWWO%2BSgxLQqkLPr4sjGPwP4O92Pgnd1zAI9U6qwqqyYZIsmwLwbbRTo5q68qRf9pamBSWY6oOD%2F7%2BZafeLtp4TVGFgTSLTNUJzZzFcv9eTZjLBHg1qtIOzyaYvJ2r%2BggW0ecmmuinecAzw5SNiQxu48YSVrGI33Ri8AZJDTjqnwWFXqXIMaDctfZNziKEvlMUGR6UXCrjEV%2BrtKf5DLmUEUR0oaEzLTCm9XUAViAwyqCkAI926a4BkaddAE4XusC3jQfibYdYzQ6TywB2RXdNJsGTSeP2LTWCTPCXEY0nywih1NPJQkarSatOeIehkxE%2FiddGS%2BhiOnBYJ%2F2qV9iaRRDmgN7rdJHQB7oCa2Fp%2B8rbdTOVqZgkevLoDx5AItlopEKh0C3JjRogp7fnD0TwjqpOHImgoDEytGa59KKa9r38FM27qYeVtCCgI0MNz498QGOqUBfqsJZ52UmFgalvGN9qxZ28wAThKs3wrLXxjH5E1uH0jJMrJBrRSG%2FpcZHZNY0Y8S1SJZ9TNiFv128w3M%2Bqe3YboSCAqo5ffY%2FX7hfA82mgGBdDG%2BBz0RJz%2F60Q2xQns7itvYLckWTWPeZk5kKzO%2FVK0FPLYRVsU90Zfu1HMM4YKe%2F%2B8tsJDLoIu1SqJtU6e87loE7JpYIQ2utQdphtKKLJYjfRrc&X-Amz-Signature=eb805b8d71a929abf2eefcee9abe429ea3c9992659237a90d8d178cb8612cb7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCJRFHYF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH03%2FYoHw44BMA8vYN4iHSrxJLAdMA%2BcbNH9yuudGIn5AiBP5CBYl8K9E799gF026xNon8Bx10R5VQQQKk924VQOfCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM1DCB9mdSZnsuiHsUKtwDl6IpZaWrBb4MKD5YXExrY48uijkAnF9hERXstwr30qApR1axMtg5iKoCm1uqAkn6P1K0ypDuZZR7F5wAwzMA7z1Su4XpK9RdHlK1uaqI34ky%2FR%2Bq1vXg360jHeMgtdKptHM8etYnLY24DO2LmKO9fibPBayM7M8Wi2up2qjpf942FCLMcYpjUupqMJ%2BHtwBY4i%2FyZ2yXRezqWGBglmznD9fItqNjIDCfL1yyuEtBtcNEsgEQ0Nkmx0%2BIMVCvazVhYhKMZhULQguZLoeY0eUrXmcLqAvnQoeTjstBLIRoT0lP5wgn9v4x%2B6H1jTKVMNG9OJ8u5A9uJa6mFw2NB0gqrZQQ0Rb6AUcTnAIorJm%2BwGBgM0s0qF4EGmMIH3pQiOeBA7%2BbQjzydFkBW6O6rUId2ANkI8GSoXjC4QFyT%2BfsOVnJ%2BRz%2B0OdjJGNzGKn3Ot79GalwSoq0NyWkRmSjmf4qUrFKlGhQjomOgRhIXyjV50WgNbe6q1%2FsLiGoCiLhecZj3O%2BWL2WsRwprNhpJC28LBn7Y8W4H1lQLJzBDJOK5DXGxEOHuMgzKporYznyMcIlLmvuY9ITy6ce4MIw9WHIS0XLYUz06wF0hY3hO2zL0V8LpgZCjvmJgqbZAdPMwi%2Fn3xAY6pgGfnIGhsiYVpe0Wzya0JMTiQL5KRttO54gyjKfIEAeIFmxQ6BoSgoam3AJjOC8RJhryCM%2FCKLfwYOgWJqdpilwedTWT8otcMRQ66%2FGFZKo82nQ8MF215oPmk8eqjcsLBZXFi3KDbJZZyDjYiTxwwnFIQBB5%2BfcaCdyPg6MandQKfw4VLWJax3Gujx5nqnha5cFw2jYWs5hDf4MXjx%2Btj2FhJqOPoZe1&X-Amz-Signature=9a63bef6326d13a6736a8a3ed39dc9099c5df563d5db06574dc475e6c7fa26a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OUVLG3I%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUdl4YfFIHKtOv4h9eBRuMBho%2B4qyvmmVM2Hn0al5e%2BQIhAP5%2FHqu9h5DBPEuRj6Zlyb2rZltGzJp%2Fg4CY6ctxBZYJKv8DCEgQABoMNjM3NDIzMTgzODA1IgzSxzXRg9I8IxJkSCQq3APe3CxipLMHIhkzze4K6MRVu95MPJMJX5BVm5BQb%2BFSZqI2VN0EiExJ%2BbQdcMVUCRuvIuezITPC4VznbcIHXjjwXkL%2BEI5okiwEUHljfSKA%2FpZMliifGeFCmgnTTt0sA5jQuo9PTjuv%2BujKWbx3hIct7voiQkIcGDzaPO7uh0LwWvMKnROp%2Fgv9wYYiTjLhsHyKbkmj7yIyQJtAh6vJmyxGJCgwwEFmebGT3twzzSR5gStnafs8IpJR5gC%2F3gt8DKQPEvTHBLoRtSLFLGFWZs2Q%2F2SEXW%2FuM3DjSFY12V%2FUaUpNxsNBTK4KlBZ0y0OT%2BdOtMSeYZT99Vu%2BTO8IY1ZRFEh1n17pnJJNNuIk%2BwCuRn4gjcdJX%2BIGGWr3na0Esm%2BaY1caFAdR5dYV6w%2FNS1Am0XV%2BTAFSjnfhPNnq4nLHEDhI%2FDGZjBM8D2ND8w%2F1dDse65bj%2BWxsCV7mvQkJYkk5QypGiMWRriYkTJv%2FndnWLWeLAkN%2BVQRyX1T9DzCXO11cn9KzfpGgCf0O0etJu7iWoqmozZ%2BmyNHavK9nYL%2FA%2BYWU9wKorL8c0yLibPUxFg5y6Wh3L%2Bw4jzBCvnxdcA6dTQZQmp97XwA%2Fp2Ugx1JKvyuF%2BkRfcWsKtcBMW%2BTCH%2BvfEBjqkARa8oQjtL87XY7vmU%2FeXnuQOr0tYx0lycvcJvae5zIQuqg%2FmpY2g3qWbY7Eyyf2OjdhMNRuOXMXLjU94n5vT9BGEZf0wXRCpuor2DQmiyLM9RNurxLZ3qzGxEZSXWmQAOLf45wmb34YgaCOMK3mrcYPNj7BQV45ikOvpgPRqQwAQ1%2BbihcIj0endebLDehVPyhfJvV3cM2jqXFvIbZBaoXPd%2BsTa&X-Amz-Signature=5d58647ac1c4dbff12058f168287d4d7d3a79f1322c9bea1f4d9e1cd327fad7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R47EMQPL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUMW6E1pozUFvmVNxtosh%2FwP0z%2F1qBuPhEGLfqyef48wIhAN7pLVlEhq2dm7jzsdna5DFXWHhjfq2i%2F3Oeli8yJa6jKv8DCEgQABoMNjM3NDIzMTgzODA1IgzkJD6K%2FlzEgQhe%2FJcq3APUVK5dFJn2PqT1J6fx00sm%2FaRloLuy%2FlZ0U%2Bf93h2R0VZI9FlSPJw5L7KJKFynwz0BWRkoGK5j2n%2BctlS%2FjOky2Mx3C1e9ZK7rJ3CFgIIp%2Fmhu6ZE107ex2luqOA8%2Bs22ypUuNY7cFaXh6qsXj%2FxIRklRdqMyKcqmdCUEXbKxfU5GYqWqF%2F4lIzF%2F8Hwxy0IzaLweoriHpEZxvT91MHG94ZJPqSIvW9pzGs5YolQI%2FIHNHOmAeWfG5ci1uVEXhEHtM4VrixMHSkwENXMEp7m9f8QLd%2FhPJ1Q1a0J3j%2B4g3txPu1TAJMXzbo0BUaNTkqOn%2FAxtSOfm%2BIZ%2BsobewBoLlVhk3pdDPTrPIRrUJbAEaYW1sGnew057XZMPQF%2BDLB9AFtVZyVum1uhlNhuSqwlewl65W1iHOjd10qszHBi4YUFMhO3C1tosPgzJ6wOLah%2FCsf8%2FeK6ZDc2tJsXq%2B6QxFsd1rZiP3zJP6mZTxDifByTvqnP24VZ32979t2ZvQG61mKWQ%2ByX1nd3x3%2BKeouPl3oTDjrQqzXkX7GW9j2bhoqqobIwuxpT8q6%2B%2BdyxDfrY%2BCJWsMdrQur7hCDyt27z%2BDctEP2fw5xg4oscwYUvxQ1mrOLDkWjnwbcg2AaTCe%2BvfEBjqkAS6Ed7%2F89spHA9H7Ag%2B760gbtZRrmDF5nFwpnMmfj2vxUNRBOLje%2BB8OIcLtl24QeY6Xpw%2F%2B3Rd%2B49UyvyTTnmkSSuR%2Fzr9QwG4EksACYC4uSiIBbQq%2FsQypOQshOolFkuX%2BqDoYNH3g%2BDvfpjqQvEc%2B850We2tzY0J2c0PlBeOaHPVQxClS2sYZzuRI35MDvfKwtgMWdPDKAFKNP1YKsoQZ%2FgN9&X-Amz-Signature=f74daffbd3ed3d1347aad08f836062bbf1bce374d08fb208e3e5cf38c3648d4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRGGUFN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCkb2JwybNk0SF%2FgmOiqw4kgdoS7R4wBtY%2FIEzH6RdwgIgWzuytpd3TRPCcxZmk1CZgwgNtf9MJ9cYJEa9ocsxV4kq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBcBKlk6rTrX1ri9MircA%2FOs1EUUVeKxlnaG77y3E8DpuYEzPBhoNkG5IIsuiQmWOrVzOh30EkTXke0YdVtbRDO7eRtNtQIFoMZDABK6W9r%2BpczKsU%2Bjdq7BBUSsj1mECicaoOIw2RS56COT1phZmdUeQTnKXkhoHDiu0A0DadMOrMHdC3Y7k0lZ4l05qi52EMt6cu6Q8qSxB%2F1ouY4yJak3MNCgJoL1usdrO0yRVhRXPC9kNSsJYXZEEkbT7XL2sQ5JICJtixVsHnapF6y6Qjhk4cKustzP%2Fv%2F5EC4am7jwSAqxrybPlbDRwsPskEZizVcR2F0fSz%2FDxuqNigH2vK9IGkFKsagv7XGOw0q%2Fa3NktwwZdrQrLQr3wrcbXJ96F4HXY0r22Igf%2BrCbYpaRSzBP3q7vUieQlxTXIYRifbb%2FYDIbJ3cYu2eCGBMo%2BtrEE7QKadsDDEDDznApR2DTQmqEHO3etpQAgcY6Fd%2BlRjBtxWxxzjVE%2B3rM7i1I1AphdO7u1gRXAd%2BsF5aG6oowCGpF9d9ZWrCcJu5cvWJvNwEZ7pBd8Zjbtjup%2BkUe0aihiU3MwwumKjsp%2FAyOzYaHA1p53tebACSdOELXPBPHFbIk86CpeHIsI2OLOk98O3ceAP2WU%2FU0FLKFq99KMNj498QGOqUBf75wnSkY5%2F9v0Gd%2Bz3TRHqOrozWzSOjbovitYNBPOacGCsuau3qlYggw0BMIzvjHdb52s2RkRFjIFbeIJYGOaHsHczvrIXIKYFa7AWi6moIuw5yu45Sbz8EAGCi5cgiVUt2hM3ak4bI5sq1Pw7hpi0LUq9iRY%2Bm3idBBiz%2FxpTSWQ%2FTASVYMvwnjqzhz8fOAhZyKWQVs9f1rsBLwwYe0GbtAa9SJ&X-Amz-Signature=3feb9c720bff5c4fa7127d7e978f825b18aaab1583704d2791662291ec7fb976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRGGUFN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCkb2JwybNk0SF%2FgmOiqw4kgdoS7R4wBtY%2FIEzH6RdwgIgWzuytpd3TRPCcxZmk1CZgwgNtf9MJ9cYJEa9ocsxV4kq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBcBKlk6rTrX1ri9MircA%2FOs1EUUVeKxlnaG77y3E8DpuYEzPBhoNkG5IIsuiQmWOrVzOh30EkTXke0YdVtbRDO7eRtNtQIFoMZDABK6W9r%2BpczKsU%2Bjdq7BBUSsj1mECicaoOIw2RS56COT1phZmdUeQTnKXkhoHDiu0A0DadMOrMHdC3Y7k0lZ4l05qi52EMt6cu6Q8qSxB%2F1ouY4yJak3MNCgJoL1usdrO0yRVhRXPC9kNSsJYXZEEkbT7XL2sQ5JICJtixVsHnapF6y6Qjhk4cKustzP%2Fv%2F5EC4am7jwSAqxrybPlbDRwsPskEZizVcR2F0fSz%2FDxuqNigH2vK9IGkFKsagv7XGOw0q%2Fa3NktwwZdrQrLQr3wrcbXJ96F4HXY0r22Igf%2BrCbYpaRSzBP3q7vUieQlxTXIYRifbb%2FYDIbJ3cYu2eCGBMo%2BtrEE7QKadsDDEDDznApR2DTQmqEHO3etpQAgcY6Fd%2BlRjBtxWxxzjVE%2B3rM7i1I1AphdO7u1gRXAd%2BsF5aG6oowCGpF9d9ZWrCcJu5cvWJvNwEZ7pBd8Zjbtjup%2BkUe0aihiU3MwwumKjsp%2FAyOzYaHA1p53tebACSdOELXPBPHFbIk86CpeHIsI2OLOk98O3ceAP2WU%2FU0FLKFq99KMNj498QGOqUBf75wnSkY5%2F9v0Gd%2Bz3TRHqOrozWzSOjbovitYNBPOacGCsuau3qlYggw0BMIzvjHdb52s2RkRFjIFbeIJYGOaHsHczvrIXIKYFa7AWi6moIuw5yu45Sbz8EAGCi5cgiVUt2hM3ak4bI5sq1Pw7hpi0LUq9iRY%2Bm3idBBiz%2FxpTSWQ%2FTASVYMvwnjqzhz8fOAhZyKWQVs9f1rsBLwwYe0GbtAa9SJ&X-Amz-Signature=3736a5f86a1c5057a9a1422df518a295d2270fa832de046ace3a06d72cf258cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6HRG7PC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkzxo8fovNlbEI7DbF95y5c4g8PB81%2FxfNT0Fg42CxkAiBmoVFNQWnQd2TAPnkU%2FezK2KWh6HPsCYp4iHRw3lMpGCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMLOPr01eytlifS3wXKtwDowomUvR7JKTKMImOomV8AUpJ8gYp9FouBf66PJiaeHGZM%2B3o3n7cCUJhEMQMONiaYw3hYmDly%2BjewarD6KE7ycUVtncxzloP%2BP%2FoLEpT44cxGOUexnGQVfOAtplhuaz9NpDmJOAGA1UdNs6%2F1qjhlpl6uLej8UgiWYDhtLKHAPJy2JFPtMFBLwY5Q8753zDj0DR8qVUqOFY2J3Apf7J0VnsiA2Q9c%2B%2BDErvCeXABU9Kjq83SioZeUJ13c6AN8CEYoEG979WjHgm6nTkx2ACpncFdCkCx9Tcq%2BZj6lOcQIr8XLeJsvVGi%2Bg8D0tbm3cWMALCjdSx8auxdLcV6yMIPPnBsjcwwjOS%2BgS6TwUQ8EWSGqSUWcmbM6sgz6riZVDLlai0hTCGci6wKZaiITIrTrqy8nMcSi6yRQToW%2FNeTfaHQ0e51xbEJ%2F1xmvvX0RyjGErn8PuD95ADU9espFPOotadoZfmMCKh1N6zVNzZyBNH%2BI5SnI9Vku37ksXitdOrGvPRKyduOjNvu4lqU942oWhL57shritHpjZlgqzqFrqJ9H5XxA38XddnrjmLkPdoEsU2kd5G27DOWxvs9KTgHgVhvtnkaMLm5VpXIhLOwWawMyBvqExz2LyLh7k4ws%2Fn3xAY6pgEPmIP5dl3RWQ4b0Htsk4jezIZ%2Fxp5XzlyZjnkSZE7X4KYANHGLghvccZuyurDoJq%2F1iy5ycy9hTZFX82%2FGpz3BOrbAnseT%2FZ2fTr%2F%2FQQ9EqiGCEH3ZIxO8r3YLLpGUAOAwy7WNF2mwo5h4RDXDQwG%2FJJX9Q7rKP2GaV5lYG%2B5V3gtx%2BdfOO%2BfPrOI0tY0OaN1nyoNXHqXrubIdV9uK0xG6BbXt4X1l&X-Amz-Signature=89e87696f359da0ad758d06f84cf986032ffb8f87e6d06be039dc70bc927f9f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6HRG7PC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkzxo8fovNlbEI7DbF95y5c4g8PB81%2FxfNT0Fg42CxkAiBmoVFNQWnQd2TAPnkU%2FezK2KWh6HPsCYp4iHRw3lMpGCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMLOPr01eytlifS3wXKtwDowomUvR7JKTKMImOomV8AUpJ8gYp9FouBf66PJiaeHGZM%2B3o3n7cCUJhEMQMONiaYw3hYmDly%2BjewarD6KE7ycUVtncxzloP%2BP%2FoLEpT44cxGOUexnGQVfOAtplhuaz9NpDmJOAGA1UdNs6%2F1qjhlpl6uLej8UgiWYDhtLKHAPJy2JFPtMFBLwY5Q8753zDj0DR8qVUqOFY2J3Apf7J0VnsiA2Q9c%2B%2BDErvCeXABU9Kjq83SioZeUJ13c6AN8CEYoEG979WjHgm6nTkx2ACpncFdCkCx9Tcq%2BZj6lOcQIr8XLeJsvVGi%2Bg8D0tbm3cWMALCjdSx8auxdLcV6yMIPPnBsjcwwjOS%2BgS6TwUQ8EWSGqSUWcmbM6sgz6riZVDLlai0hTCGci6wKZaiITIrTrqy8nMcSi6yRQToW%2FNeTfaHQ0e51xbEJ%2F1xmvvX0RyjGErn8PuD95ADU9espFPOotadoZfmMCKh1N6zVNzZyBNH%2BI5SnI9Vku37ksXitdOrGvPRKyduOjNvu4lqU942oWhL57shritHpjZlgqzqFrqJ9H5XxA38XddnrjmLkPdoEsU2kd5G27DOWxvs9KTgHgVhvtnkaMLm5VpXIhLOwWawMyBvqExz2LyLh7k4ws%2Fn3xAY6pgEPmIP5dl3RWQ4b0Htsk4jezIZ%2Fxp5XzlyZjnkSZE7X4KYANHGLghvccZuyurDoJq%2F1iy5ycy9hTZFX82%2FGpz3BOrbAnseT%2FZ2fTr%2F%2FQQ9EqiGCEH3ZIxO8r3YLLpGUAOAwy7WNF2mwo5h4RDXDQwG%2FJJX9Q7rKP2GaV5lYG%2B5V3gtx%2BdfOO%2BfPrOI0tY0OaN1nyoNXHqXrubIdV9uK0xG6BbXt4X1l&X-Amz-Signature=af0696b172bedcb3b7705e61e6ebb1580c0a1db7c5d1c7fe4ac0b437717f59a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6HRG7PC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkzxo8fovNlbEI7DbF95y5c4g8PB81%2FxfNT0Fg42CxkAiBmoVFNQWnQd2TAPnkU%2FezK2KWh6HPsCYp4iHRw3lMpGCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMLOPr01eytlifS3wXKtwDowomUvR7JKTKMImOomV8AUpJ8gYp9FouBf66PJiaeHGZM%2B3o3n7cCUJhEMQMONiaYw3hYmDly%2BjewarD6KE7ycUVtncxzloP%2BP%2FoLEpT44cxGOUexnGQVfOAtplhuaz9NpDmJOAGA1UdNs6%2F1qjhlpl6uLej8UgiWYDhtLKHAPJy2JFPtMFBLwY5Q8753zDj0DR8qVUqOFY2J3Apf7J0VnsiA2Q9c%2B%2BDErvCeXABU9Kjq83SioZeUJ13c6AN8CEYoEG979WjHgm6nTkx2ACpncFdCkCx9Tcq%2BZj6lOcQIr8XLeJsvVGi%2Bg8D0tbm3cWMALCjdSx8auxdLcV6yMIPPnBsjcwwjOS%2BgS6TwUQ8EWSGqSUWcmbM6sgz6riZVDLlai0hTCGci6wKZaiITIrTrqy8nMcSi6yRQToW%2FNeTfaHQ0e51xbEJ%2F1xmvvX0RyjGErn8PuD95ADU9espFPOotadoZfmMCKh1N6zVNzZyBNH%2BI5SnI9Vku37ksXitdOrGvPRKyduOjNvu4lqU942oWhL57shritHpjZlgqzqFrqJ9H5XxA38XddnrjmLkPdoEsU2kd5G27DOWxvs9KTgHgVhvtnkaMLm5VpXIhLOwWawMyBvqExz2LyLh7k4ws%2Fn3xAY6pgEPmIP5dl3RWQ4b0Htsk4jezIZ%2Fxp5XzlyZjnkSZE7X4KYANHGLghvccZuyurDoJq%2F1iy5ycy9hTZFX82%2FGpz3BOrbAnseT%2FZ2fTr%2F%2FQQ9EqiGCEH3ZIxO8r3YLLpGUAOAwy7WNF2mwo5h4RDXDQwG%2FJJX9Q7rKP2GaV5lYG%2B5V3gtx%2BdfOO%2BfPrOI0tY0OaN1nyoNXHqXrubIdV9uK0xG6BbXt4X1l&X-Amz-Signature=e4be9e8b412a6e8afffb332d5c8af3aff8103a7b190c45f7626499a8ede4f58d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6HRG7PC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkzxo8fovNlbEI7DbF95y5c4g8PB81%2FxfNT0Fg42CxkAiBmoVFNQWnQd2TAPnkU%2FezK2KWh6HPsCYp4iHRw3lMpGCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMLOPr01eytlifS3wXKtwDowomUvR7JKTKMImOomV8AUpJ8gYp9FouBf66PJiaeHGZM%2B3o3n7cCUJhEMQMONiaYw3hYmDly%2BjewarD6KE7ycUVtncxzloP%2BP%2FoLEpT44cxGOUexnGQVfOAtplhuaz9NpDmJOAGA1UdNs6%2F1qjhlpl6uLej8UgiWYDhtLKHAPJy2JFPtMFBLwY5Q8753zDj0DR8qVUqOFY2J3Apf7J0VnsiA2Q9c%2B%2BDErvCeXABU9Kjq83SioZeUJ13c6AN8CEYoEG979WjHgm6nTkx2ACpncFdCkCx9Tcq%2BZj6lOcQIr8XLeJsvVGi%2Bg8D0tbm3cWMALCjdSx8auxdLcV6yMIPPnBsjcwwjOS%2BgS6TwUQ8EWSGqSUWcmbM6sgz6riZVDLlai0hTCGci6wKZaiITIrTrqy8nMcSi6yRQToW%2FNeTfaHQ0e51xbEJ%2F1xmvvX0RyjGErn8PuD95ADU9espFPOotadoZfmMCKh1N6zVNzZyBNH%2BI5SnI9Vku37ksXitdOrGvPRKyduOjNvu4lqU942oWhL57shritHpjZlgqzqFrqJ9H5XxA38XddnrjmLkPdoEsU2kd5G27DOWxvs9KTgHgVhvtnkaMLm5VpXIhLOwWawMyBvqExz2LyLh7k4ws%2Fn3xAY6pgEPmIP5dl3RWQ4b0Htsk4jezIZ%2Fxp5XzlyZjnkSZE7X4KYANHGLghvccZuyurDoJq%2F1iy5ycy9hTZFX82%2FGpz3BOrbAnseT%2FZ2fTr%2F%2FQQ9EqiGCEH3ZIxO8r3YLLpGUAOAwy7WNF2mwo5h4RDXDQwG%2FJJX9Q7rKP2GaV5lYG%2B5V3gtx%2BdfOO%2BfPrOI0tY0OaN1nyoNXHqXrubIdV9uK0xG6BbXt4X1l&X-Amz-Signature=ce306f7e43cdb72f495e3e6072fe0a553d0bdee8f22e0e765ff6e148607e4e50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6HRG7PC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkzxo8fovNlbEI7DbF95y5c4g8PB81%2FxfNT0Fg42CxkAiBmoVFNQWnQd2TAPnkU%2FezK2KWh6HPsCYp4iHRw3lMpGCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMLOPr01eytlifS3wXKtwDowomUvR7JKTKMImOomV8AUpJ8gYp9FouBf66PJiaeHGZM%2B3o3n7cCUJhEMQMONiaYw3hYmDly%2BjewarD6KE7ycUVtncxzloP%2BP%2FoLEpT44cxGOUexnGQVfOAtplhuaz9NpDmJOAGA1UdNs6%2F1qjhlpl6uLej8UgiWYDhtLKHAPJy2JFPtMFBLwY5Q8753zDj0DR8qVUqOFY2J3Apf7J0VnsiA2Q9c%2B%2BDErvCeXABU9Kjq83SioZeUJ13c6AN8CEYoEG979WjHgm6nTkx2ACpncFdCkCx9Tcq%2BZj6lOcQIr8XLeJsvVGi%2Bg8D0tbm3cWMALCjdSx8auxdLcV6yMIPPnBsjcwwjOS%2BgS6TwUQ8EWSGqSUWcmbM6sgz6riZVDLlai0hTCGci6wKZaiITIrTrqy8nMcSi6yRQToW%2FNeTfaHQ0e51xbEJ%2F1xmvvX0RyjGErn8PuD95ADU9espFPOotadoZfmMCKh1N6zVNzZyBNH%2BI5SnI9Vku37ksXitdOrGvPRKyduOjNvu4lqU942oWhL57shritHpjZlgqzqFrqJ9H5XxA38XddnrjmLkPdoEsU2kd5G27DOWxvs9KTgHgVhvtnkaMLm5VpXIhLOwWawMyBvqExz2LyLh7k4ws%2Fn3xAY6pgEPmIP5dl3RWQ4b0Htsk4jezIZ%2Fxp5XzlyZjnkSZE7X4KYANHGLghvccZuyurDoJq%2F1iy5ycy9hTZFX82%2FGpz3BOrbAnseT%2FZ2fTr%2F%2FQQ9EqiGCEH3ZIxO8r3YLLpGUAOAwy7WNF2mwo5h4RDXDQwG%2FJJX9Q7rKP2GaV5lYG%2B5V3gtx%2BdfOO%2BfPrOI0tY0OaN1nyoNXHqXrubIdV9uK0xG6BbXt4X1l&X-Amz-Signature=c137acd3b88a8e4a3a3ec7b3e30dcce0afe7b2017d72609a2c43c427f8a5c978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6HRG7PC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkzxo8fovNlbEI7DbF95y5c4g8PB81%2FxfNT0Fg42CxkAiBmoVFNQWnQd2TAPnkU%2FezK2KWh6HPsCYp4iHRw3lMpGCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMLOPr01eytlifS3wXKtwDowomUvR7JKTKMImOomV8AUpJ8gYp9FouBf66PJiaeHGZM%2B3o3n7cCUJhEMQMONiaYw3hYmDly%2BjewarD6KE7ycUVtncxzloP%2BP%2FoLEpT44cxGOUexnGQVfOAtplhuaz9NpDmJOAGA1UdNs6%2F1qjhlpl6uLej8UgiWYDhtLKHAPJy2JFPtMFBLwY5Q8753zDj0DR8qVUqOFY2J3Apf7J0VnsiA2Q9c%2B%2BDErvCeXABU9Kjq83SioZeUJ13c6AN8CEYoEG979WjHgm6nTkx2ACpncFdCkCx9Tcq%2BZj6lOcQIr8XLeJsvVGi%2Bg8D0tbm3cWMALCjdSx8auxdLcV6yMIPPnBsjcwwjOS%2BgS6TwUQ8EWSGqSUWcmbM6sgz6riZVDLlai0hTCGci6wKZaiITIrTrqy8nMcSi6yRQToW%2FNeTfaHQ0e51xbEJ%2F1xmvvX0RyjGErn8PuD95ADU9espFPOotadoZfmMCKh1N6zVNzZyBNH%2BI5SnI9Vku37ksXitdOrGvPRKyduOjNvu4lqU942oWhL57shritHpjZlgqzqFrqJ9H5XxA38XddnrjmLkPdoEsU2kd5G27DOWxvs9KTgHgVhvtnkaMLm5VpXIhLOwWawMyBvqExz2LyLh7k4ws%2Fn3xAY6pgEPmIP5dl3RWQ4b0Htsk4jezIZ%2Fxp5XzlyZjnkSZE7X4KYANHGLghvccZuyurDoJq%2F1iy5ycy9hTZFX82%2FGpz3BOrbAnseT%2FZ2fTr%2F%2FQQ9EqiGCEH3ZIxO8r3YLLpGUAOAwy7WNF2mwo5h4RDXDQwG%2FJJX9Q7rKP2GaV5lYG%2B5V3gtx%2BdfOO%2BfPrOI0tY0OaN1nyoNXHqXrubIdV9uK0xG6BbXt4X1l&X-Amz-Signature=f86e0cd22a7f00de62babc38a1f132d82208e7f905b115db3a8db5afaaab6feb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6HRG7PC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkzxo8fovNlbEI7DbF95y5c4g8PB81%2FxfNT0Fg42CxkAiBmoVFNQWnQd2TAPnkU%2FezK2KWh6HPsCYp4iHRw3lMpGCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMLOPr01eytlifS3wXKtwDowomUvR7JKTKMImOomV8AUpJ8gYp9FouBf66PJiaeHGZM%2B3o3n7cCUJhEMQMONiaYw3hYmDly%2BjewarD6KE7ycUVtncxzloP%2BP%2FoLEpT44cxGOUexnGQVfOAtplhuaz9NpDmJOAGA1UdNs6%2F1qjhlpl6uLej8UgiWYDhtLKHAPJy2JFPtMFBLwY5Q8753zDj0DR8qVUqOFY2J3Apf7J0VnsiA2Q9c%2B%2BDErvCeXABU9Kjq83SioZeUJ13c6AN8CEYoEG979WjHgm6nTkx2ACpncFdCkCx9Tcq%2BZj6lOcQIr8XLeJsvVGi%2Bg8D0tbm3cWMALCjdSx8auxdLcV6yMIPPnBsjcwwjOS%2BgS6TwUQ8EWSGqSUWcmbM6sgz6riZVDLlai0hTCGci6wKZaiITIrTrqy8nMcSi6yRQToW%2FNeTfaHQ0e51xbEJ%2F1xmvvX0RyjGErn8PuD95ADU9espFPOotadoZfmMCKh1N6zVNzZyBNH%2BI5SnI9Vku37ksXitdOrGvPRKyduOjNvu4lqU942oWhL57shritHpjZlgqzqFrqJ9H5XxA38XddnrjmLkPdoEsU2kd5G27DOWxvs9KTgHgVhvtnkaMLm5VpXIhLOwWawMyBvqExz2LyLh7k4ws%2Fn3xAY6pgEPmIP5dl3RWQ4b0Htsk4jezIZ%2Fxp5XzlyZjnkSZE7X4KYANHGLghvccZuyurDoJq%2F1iy5ycy9hTZFX82%2FGpz3BOrbAnseT%2FZ2fTr%2F%2FQQ9EqiGCEH3ZIxO8r3YLLpGUAOAwy7WNF2mwo5h4RDXDQwG%2FJJX9Q7rKP2GaV5lYG%2B5V3gtx%2BdfOO%2BfPrOI0tY0OaN1nyoNXHqXrubIdV9uK0xG6BbXt4X1l&X-Amz-Signature=e4be9e8b412a6e8afffb332d5c8af3aff8103a7b190c45f7626499a8ede4f58d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6HRG7PC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkzxo8fovNlbEI7DbF95y5c4g8PB81%2FxfNT0Fg42CxkAiBmoVFNQWnQd2TAPnkU%2FezK2KWh6HPsCYp4iHRw3lMpGCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMLOPr01eytlifS3wXKtwDowomUvR7JKTKMImOomV8AUpJ8gYp9FouBf66PJiaeHGZM%2B3o3n7cCUJhEMQMONiaYw3hYmDly%2BjewarD6KE7ycUVtncxzloP%2BP%2FoLEpT44cxGOUexnGQVfOAtplhuaz9NpDmJOAGA1UdNs6%2F1qjhlpl6uLej8UgiWYDhtLKHAPJy2JFPtMFBLwY5Q8753zDj0DR8qVUqOFY2J3Apf7J0VnsiA2Q9c%2B%2BDErvCeXABU9Kjq83SioZeUJ13c6AN8CEYoEG979WjHgm6nTkx2ACpncFdCkCx9Tcq%2BZj6lOcQIr8XLeJsvVGi%2Bg8D0tbm3cWMALCjdSx8auxdLcV6yMIPPnBsjcwwjOS%2BgS6TwUQ8EWSGqSUWcmbM6sgz6riZVDLlai0hTCGci6wKZaiITIrTrqy8nMcSi6yRQToW%2FNeTfaHQ0e51xbEJ%2F1xmvvX0RyjGErn8PuD95ADU9espFPOotadoZfmMCKh1N6zVNzZyBNH%2BI5SnI9Vku37ksXitdOrGvPRKyduOjNvu4lqU942oWhL57shritHpjZlgqzqFrqJ9H5XxA38XddnrjmLkPdoEsU2kd5G27DOWxvs9KTgHgVhvtnkaMLm5VpXIhLOwWawMyBvqExz2LyLh7k4ws%2Fn3xAY6pgEPmIP5dl3RWQ4b0Htsk4jezIZ%2Fxp5XzlyZjnkSZE7X4KYANHGLghvccZuyurDoJq%2F1iy5ycy9hTZFX82%2FGpz3BOrbAnseT%2FZ2fTr%2F%2FQQ9EqiGCEH3ZIxO8r3YLLpGUAOAwy7WNF2mwo5h4RDXDQwG%2FJJX9Q7rKP2GaV5lYG%2B5V3gtx%2BdfOO%2BfPrOI0tY0OaN1nyoNXHqXrubIdV9uK0xG6BbXt4X1l&X-Amz-Signature=c6c29ca28a00689532d2c5e97d5b48cc831413751f1886e23f7275e3710e2e03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6HRG7PC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkzxo8fovNlbEI7DbF95y5c4g8PB81%2FxfNT0Fg42CxkAiBmoVFNQWnQd2TAPnkU%2FezK2KWh6HPsCYp4iHRw3lMpGCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMLOPr01eytlifS3wXKtwDowomUvR7JKTKMImOomV8AUpJ8gYp9FouBf66PJiaeHGZM%2B3o3n7cCUJhEMQMONiaYw3hYmDly%2BjewarD6KE7ycUVtncxzloP%2BP%2FoLEpT44cxGOUexnGQVfOAtplhuaz9NpDmJOAGA1UdNs6%2F1qjhlpl6uLej8UgiWYDhtLKHAPJy2JFPtMFBLwY5Q8753zDj0DR8qVUqOFY2J3Apf7J0VnsiA2Q9c%2B%2BDErvCeXABU9Kjq83SioZeUJ13c6AN8CEYoEG979WjHgm6nTkx2ACpncFdCkCx9Tcq%2BZj6lOcQIr8XLeJsvVGi%2Bg8D0tbm3cWMALCjdSx8auxdLcV6yMIPPnBsjcwwjOS%2BgS6TwUQ8EWSGqSUWcmbM6sgz6riZVDLlai0hTCGci6wKZaiITIrTrqy8nMcSi6yRQToW%2FNeTfaHQ0e51xbEJ%2F1xmvvX0RyjGErn8PuD95ADU9espFPOotadoZfmMCKh1N6zVNzZyBNH%2BI5SnI9Vku37ksXitdOrGvPRKyduOjNvu4lqU942oWhL57shritHpjZlgqzqFrqJ9H5XxA38XddnrjmLkPdoEsU2kd5G27DOWxvs9KTgHgVhvtnkaMLm5VpXIhLOwWawMyBvqExz2LyLh7k4ws%2Fn3xAY6pgEPmIP5dl3RWQ4b0Htsk4jezIZ%2Fxp5XzlyZjnkSZE7X4KYANHGLghvccZuyurDoJq%2F1iy5ycy9hTZFX82%2FGpz3BOrbAnseT%2FZ2fTr%2F%2FQQ9EqiGCEH3ZIxO8r3YLLpGUAOAwy7WNF2mwo5h4RDXDQwG%2FJJX9Q7rKP2GaV5lYG%2B5V3gtx%2BdfOO%2BfPrOI0tY0OaN1nyoNXHqXrubIdV9uK0xG6BbXt4X1l&X-Amz-Signature=96eb83a4e29330fca6733d64f4391e331c58284924558a8838a59c0b674bfc3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6HRG7PC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkzxo8fovNlbEI7DbF95y5c4g8PB81%2FxfNT0Fg42CxkAiBmoVFNQWnQd2TAPnkU%2FezK2KWh6HPsCYp4iHRw3lMpGCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMLOPr01eytlifS3wXKtwDowomUvR7JKTKMImOomV8AUpJ8gYp9FouBf66PJiaeHGZM%2B3o3n7cCUJhEMQMONiaYw3hYmDly%2BjewarD6KE7ycUVtncxzloP%2BP%2FoLEpT44cxGOUexnGQVfOAtplhuaz9NpDmJOAGA1UdNs6%2F1qjhlpl6uLej8UgiWYDhtLKHAPJy2JFPtMFBLwY5Q8753zDj0DR8qVUqOFY2J3Apf7J0VnsiA2Q9c%2B%2BDErvCeXABU9Kjq83SioZeUJ13c6AN8CEYoEG979WjHgm6nTkx2ACpncFdCkCx9Tcq%2BZj6lOcQIr8XLeJsvVGi%2Bg8D0tbm3cWMALCjdSx8auxdLcV6yMIPPnBsjcwwjOS%2BgS6TwUQ8EWSGqSUWcmbM6sgz6riZVDLlai0hTCGci6wKZaiITIrTrqy8nMcSi6yRQToW%2FNeTfaHQ0e51xbEJ%2F1xmvvX0RyjGErn8PuD95ADU9espFPOotadoZfmMCKh1N6zVNzZyBNH%2BI5SnI9Vku37ksXitdOrGvPRKyduOjNvu4lqU942oWhL57shritHpjZlgqzqFrqJ9H5XxA38XddnrjmLkPdoEsU2kd5G27DOWxvs9KTgHgVhvtnkaMLm5VpXIhLOwWawMyBvqExz2LyLh7k4ws%2Fn3xAY6pgEPmIP5dl3RWQ4b0Htsk4jezIZ%2Fxp5XzlyZjnkSZE7X4KYANHGLghvccZuyurDoJq%2F1iy5ycy9hTZFX82%2FGpz3BOrbAnseT%2FZ2fTr%2F%2FQQ9EqiGCEH3ZIxO8r3YLLpGUAOAwy7WNF2mwo5h4RDXDQwG%2FJJX9Q7rKP2GaV5lYG%2B5V3gtx%2BdfOO%2BfPrOI0tY0OaN1nyoNXHqXrubIdV9uK0xG6BbXt4X1l&X-Amz-Signature=81b914c3dbd6ad7855f39cca4548a80ce63e8ff4732ff7c137d1307b73948e99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
