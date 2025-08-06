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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X6SUP2B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDCyUsvl6sRtI%2BmJIO76CZSiTJbNqY5%2BxU6rzN1NGT7YgIgE%2BHnibb0rIGfy%2B3EsYBJ41K5mnC0qNg8QNprZ1H38VAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJjjrzXinAwHcb1meCrcAwO5TA6w%2Bma26jFgISOypI1smyQo9dP%2FL%2Bl0F82cfje5%2B6NDbiVOIhWnCqanH%2FetmgtpVd7B64pUp3hSGIpzKlDW0p651gIIr2XmR5MUu4ds9y4YdIi70JoYyKOBYrewxQSzpBQFcWUCEkSlp%2FNDq1B%2BLrVYP8pE1fl1XN%2F3EL%2F62nsX8zALk2LLvKr5m4b1I4FsVzCwOFLzw%2B2kTts9zQG4lokOeJ9OQwvKgQF5D%2Fw72a5Utth4seALl5fLgMfcj3%2FA4lU%2F7UeaWjb1oYx01uO%2BQrKxfZlyX%2FSpmRiWiGu%2FYj4i0fpaxH%2BDSABJwNdiwscCxhHtmYFZb79Laujj7vazMzHNJ2t6jjvqX%2F%2BrxguVZJErpEDAI5WB5%2F2E%2FPHnuMXP81Cfpx2zqVinxpZCAztAAHelQ0M%2Fff4Rm82MmS4gyYqdfKOsvBiCC%2BEpRTB7fC6RRhH0Mj3gglMpPOem480I97HTQwFPEloRZLKXpRlV99RnYWQb2pcwmuEPSDuH2GhhUpKGwIm7z3uVAZ9cpPsl%2FuTenQgxRBuOZTtxoe0BwG%2BifPbGXyFBNx9cEpeAYfV1sijOiIQKPqR7zq%2FYcyJD5J%2BoHC1FWrDrRqkS%2FLdy03vQXskEeLX8HAaHMOP6zcQGOqUBKJGBzy%2BrsZh2nwwOALgsC4swePzBOR3Pz6uszK1Rx2eZbOsTn0dD6Cv01D7GgsGdaAY5hRAorZupfsYLsh5iRh5DlQqY2pfPJuoP3Vz6Q0E9ulBdU7T56DR%2FzmVdCpC1duIkEU%2BliXJgi6bTlhuYhd1TJujGYDH%2BYmDZJ57p2WOGhU0J7FdL0VrNUwKAif3gKeF%2BA8P%2F0Yx4vry1b7%2F4FFEYNevL&X-Amz-Signature=0819d7896c9ebac7fb35da4f593b7dec7ab1f04310858bf141af2f4ac24b1894&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X6SUP2B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDCyUsvl6sRtI%2BmJIO76CZSiTJbNqY5%2BxU6rzN1NGT7YgIgE%2BHnibb0rIGfy%2B3EsYBJ41K5mnC0qNg8QNprZ1H38VAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJjjrzXinAwHcb1meCrcAwO5TA6w%2Bma26jFgISOypI1smyQo9dP%2FL%2Bl0F82cfje5%2B6NDbiVOIhWnCqanH%2FetmgtpVd7B64pUp3hSGIpzKlDW0p651gIIr2XmR5MUu4ds9y4YdIi70JoYyKOBYrewxQSzpBQFcWUCEkSlp%2FNDq1B%2BLrVYP8pE1fl1XN%2F3EL%2F62nsX8zALk2LLvKr5m4b1I4FsVzCwOFLzw%2B2kTts9zQG4lokOeJ9OQwvKgQF5D%2Fw72a5Utth4seALl5fLgMfcj3%2FA4lU%2F7UeaWjb1oYx01uO%2BQrKxfZlyX%2FSpmRiWiGu%2FYj4i0fpaxH%2BDSABJwNdiwscCxhHtmYFZb79Laujj7vazMzHNJ2t6jjvqX%2F%2BrxguVZJErpEDAI5WB5%2F2E%2FPHnuMXP81Cfpx2zqVinxpZCAztAAHelQ0M%2Fff4Rm82MmS4gyYqdfKOsvBiCC%2BEpRTB7fC6RRhH0Mj3gglMpPOem480I97HTQwFPEloRZLKXpRlV99RnYWQb2pcwmuEPSDuH2GhhUpKGwIm7z3uVAZ9cpPsl%2FuTenQgxRBuOZTtxoe0BwG%2BifPbGXyFBNx9cEpeAYfV1sijOiIQKPqR7zq%2FYcyJD5J%2BoHC1FWrDrRqkS%2FLdy03vQXskEeLX8HAaHMOP6zcQGOqUBKJGBzy%2BrsZh2nwwOALgsC4swePzBOR3Pz6uszK1Rx2eZbOsTn0dD6Cv01D7GgsGdaAY5hRAorZupfsYLsh5iRh5DlQqY2pfPJuoP3Vz6Q0E9ulBdU7T56DR%2FzmVdCpC1duIkEU%2BliXJgi6bTlhuYhd1TJujGYDH%2BYmDZJ57p2WOGhU0J7FdL0VrNUwKAif3gKeF%2BA8P%2F0Yx4vry1b7%2F4FFEYNevL&X-Amz-Signature=e3fcf1b725b72ac7649b980a2fa02db654e3d061cc95c2afba48388952af0be8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X6SUP2B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDCyUsvl6sRtI%2BmJIO76CZSiTJbNqY5%2BxU6rzN1NGT7YgIgE%2BHnibb0rIGfy%2B3EsYBJ41K5mnC0qNg8QNprZ1H38VAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJjjrzXinAwHcb1meCrcAwO5TA6w%2Bma26jFgISOypI1smyQo9dP%2FL%2Bl0F82cfje5%2B6NDbiVOIhWnCqanH%2FetmgtpVd7B64pUp3hSGIpzKlDW0p651gIIr2XmR5MUu4ds9y4YdIi70JoYyKOBYrewxQSzpBQFcWUCEkSlp%2FNDq1B%2BLrVYP8pE1fl1XN%2F3EL%2F62nsX8zALk2LLvKr5m4b1I4FsVzCwOFLzw%2B2kTts9zQG4lokOeJ9OQwvKgQF5D%2Fw72a5Utth4seALl5fLgMfcj3%2FA4lU%2F7UeaWjb1oYx01uO%2BQrKxfZlyX%2FSpmRiWiGu%2FYj4i0fpaxH%2BDSABJwNdiwscCxhHtmYFZb79Laujj7vazMzHNJ2t6jjvqX%2F%2BrxguVZJErpEDAI5WB5%2F2E%2FPHnuMXP81Cfpx2zqVinxpZCAztAAHelQ0M%2Fff4Rm82MmS4gyYqdfKOsvBiCC%2BEpRTB7fC6RRhH0Mj3gglMpPOem480I97HTQwFPEloRZLKXpRlV99RnYWQb2pcwmuEPSDuH2GhhUpKGwIm7z3uVAZ9cpPsl%2FuTenQgxRBuOZTtxoe0BwG%2BifPbGXyFBNx9cEpeAYfV1sijOiIQKPqR7zq%2FYcyJD5J%2BoHC1FWrDrRqkS%2FLdy03vQXskEeLX8HAaHMOP6zcQGOqUBKJGBzy%2BrsZh2nwwOALgsC4swePzBOR3Pz6uszK1Rx2eZbOsTn0dD6Cv01D7GgsGdaAY5hRAorZupfsYLsh5iRh5DlQqY2pfPJuoP3Vz6Q0E9ulBdU7T56DR%2FzmVdCpC1duIkEU%2BliXJgi6bTlhuYhd1TJujGYDH%2BYmDZJ57p2WOGhU0J7FdL0VrNUwKAif3gKeF%2BA8P%2F0Yx4vry1b7%2F4FFEYNevL&X-Amz-Signature=dce1a8de5ab9c24ad1aacec208c1c1de3e89d3c529ba2b38bf0f51fe2096a7ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X6SUP2B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDCyUsvl6sRtI%2BmJIO76CZSiTJbNqY5%2BxU6rzN1NGT7YgIgE%2BHnibb0rIGfy%2B3EsYBJ41K5mnC0qNg8QNprZ1H38VAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJjjrzXinAwHcb1meCrcAwO5TA6w%2Bma26jFgISOypI1smyQo9dP%2FL%2Bl0F82cfje5%2B6NDbiVOIhWnCqanH%2FetmgtpVd7B64pUp3hSGIpzKlDW0p651gIIr2XmR5MUu4ds9y4YdIi70JoYyKOBYrewxQSzpBQFcWUCEkSlp%2FNDq1B%2BLrVYP8pE1fl1XN%2F3EL%2F62nsX8zALk2LLvKr5m4b1I4FsVzCwOFLzw%2B2kTts9zQG4lokOeJ9OQwvKgQF5D%2Fw72a5Utth4seALl5fLgMfcj3%2FA4lU%2F7UeaWjb1oYx01uO%2BQrKxfZlyX%2FSpmRiWiGu%2FYj4i0fpaxH%2BDSABJwNdiwscCxhHtmYFZb79Laujj7vazMzHNJ2t6jjvqX%2F%2BrxguVZJErpEDAI5WB5%2F2E%2FPHnuMXP81Cfpx2zqVinxpZCAztAAHelQ0M%2Fff4Rm82MmS4gyYqdfKOsvBiCC%2BEpRTB7fC6RRhH0Mj3gglMpPOem480I97HTQwFPEloRZLKXpRlV99RnYWQb2pcwmuEPSDuH2GhhUpKGwIm7z3uVAZ9cpPsl%2FuTenQgxRBuOZTtxoe0BwG%2BifPbGXyFBNx9cEpeAYfV1sijOiIQKPqR7zq%2FYcyJD5J%2BoHC1FWrDrRqkS%2FLdy03vQXskEeLX8HAaHMOP6zcQGOqUBKJGBzy%2BrsZh2nwwOALgsC4swePzBOR3Pz6uszK1Rx2eZbOsTn0dD6Cv01D7GgsGdaAY5hRAorZupfsYLsh5iRh5DlQqY2pfPJuoP3Vz6Q0E9ulBdU7T56DR%2FzmVdCpC1duIkEU%2BliXJgi6bTlhuYhd1TJujGYDH%2BYmDZJ57p2WOGhU0J7FdL0VrNUwKAif3gKeF%2BA8P%2F0Yx4vry1b7%2F4FFEYNevL&X-Amz-Signature=7f9e6c11f39e978c7316e564df56b9146b5533ff0c6a7df6e5a95e39f3630407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X6SUP2B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDCyUsvl6sRtI%2BmJIO76CZSiTJbNqY5%2BxU6rzN1NGT7YgIgE%2BHnibb0rIGfy%2B3EsYBJ41K5mnC0qNg8QNprZ1H38VAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJjjrzXinAwHcb1meCrcAwO5TA6w%2Bma26jFgISOypI1smyQo9dP%2FL%2Bl0F82cfje5%2B6NDbiVOIhWnCqanH%2FetmgtpVd7B64pUp3hSGIpzKlDW0p651gIIr2XmR5MUu4ds9y4YdIi70JoYyKOBYrewxQSzpBQFcWUCEkSlp%2FNDq1B%2BLrVYP8pE1fl1XN%2F3EL%2F62nsX8zALk2LLvKr5m4b1I4FsVzCwOFLzw%2B2kTts9zQG4lokOeJ9OQwvKgQF5D%2Fw72a5Utth4seALl5fLgMfcj3%2FA4lU%2F7UeaWjb1oYx01uO%2BQrKxfZlyX%2FSpmRiWiGu%2FYj4i0fpaxH%2BDSABJwNdiwscCxhHtmYFZb79Laujj7vazMzHNJ2t6jjvqX%2F%2BrxguVZJErpEDAI5WB5%2F2E%2FPHnuMXP81Cfpx2zqVinxpZCAztAAHelQ0M%2Fff4Rm82MmS4gyYqdfKOsvBiCC%2BEpRTB7fC6RRhH0Mj3gglMpPOem480I97HTQwFPEloRZLKXpRlV99RnYWQb2pcwmuEPSDuH2GhhUpKGwIm7z3uVAZ9cpPsl%2FuTenQgxRBuOZTtxoe0BwG%2BifPbGXyFBNx9cEpeAYfV1sijOiIQKPqR7zq%2FYcyJD5J%2BoHC1FWrDrRqkS%2FLdy03vQXskEeLX8HAaHMOP6zcQGOqUBKJGBzy%2BrsZh2nwwOALgsC4swePzBOR3Pz6uszK1Rx2eZbOsTn0dD6Cv01D7GgsGdaAY5hRAorZupfsYLsh5iRh5DlQqY2pfPJuoP3Vz6Q0E9ulBdU7T56DR%2FzmVdCpC1duIkEU%2BliXJgi6bTlhuYhd1TJujGYDH%2BYmDZJ57p2WOGhU0J7FdL0VrNUwKAif3gKeF%2BA8P%2F0Yx4vry1b7%2F4FFEYNevL&X-Amz-Signature=71d7bf4ef6a16c484a36404cef033a32b7b4fe65e74c9a238497357021151252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X6SUP2B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDCyUsvl6sRtI%2BmJIO76CZSiTJbNqY5%2BxU6rzN1NGT7YgIgE%2BHnibb0rIGfy%2B3EsYBJ41K5mnC0qNg8QNprZ1H38VAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJjjrzXinAwHcb1meCrcAwO5TA6w%2Bma26jFgISOypI1smyQo9dP%2FL%2Bl0F82cfje5%2B6NDbiVOIhWnCqanH%2FetmgtpVd7B64pUp3hSGIpzKlDW0p651gIIr2XmR5MUu4ds9y4YdIi70JoYyKOBYrewxQSzpBQFcWUCEkSlp%2FNDq1B%2BLrVYP8pE1fl1XN%2F3EL%2F62nsX8zALk2LLvKr5m4b1I4FsVzCwOFLzw%2B2kTts9zQG4lokOeJ9OQwvKgQF5D%2Fw72a5Utth4seALl5fLgMfcj3%2FA4lU%2F7UeaWjb1oYx01uO%2BQrKxfZlyX%2FSpmRiWiGu%2FYj4i0fpaxH%2BDSABJwNdiwscCxhHtmYFZb79Laujj7vazMzHNJ2t6jjvqX%2F%2BrxguVZJErpEDAI5WB5%2F2E%2FPHnuMXP81Cfpx2zqVinxpZCAztAAHelQ0M%2Fff4Rm82MmS4gyYqdfKOsvBiCC%2BEpRTB7fC6RRhH0Mj3gglMpPOem480I97HTQwFPEloRZLKXpRlV99RnYWQb2pcwmuEPSDuH2GhhUpKGwIm7z3uVAZ9cpPsl%2FuTenQgxRBuOZTtxoe0BwG%2BifPbGXyFBNx9cEpeAYfV1sijOiIQKPqR7zq%2FYcyJD5J%2BoHC1FWrDrRqkS%2FLdy03vQXskEeLX8HAaHMOP6zcQGOqUBKJGBzy%2BrsZh2nwwOALgsC4swePzBOR3Pz6uszK1Rx2eZbOsTn0dD6Cv01D7GgsGdaAY5hRAorZupfsYLsh5iRh5DlQqY2pfPJuoP3Vz6Q0E9ulBdU7T56DR%2FzmVdCpC1duIkEU%2BliXJgi6bTlhuYhd1TJujGYDH%2BYmDZJ57p2WOGhU0J7FdL0VrNUwKAif3gKeF%2BA8P%2F0Yx4vry1b7%2F4FFEYNevL&X-Amz-Signature=576970c1efe7bab82c092fb5fa4dce4753eea52ea74b6ba61760f69c95a8a05d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X6SUP2B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDCyUsvl6sRtI%2BmJIO76CZSiTJbNqY5%2BxU6rzN1NGT7YgIgE%2BHnibb0rIGfy%2B3EsYBJ41K5mnC0qNg8QNprZ1H38VAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJjjrzXinAwHcb1meCrcAwO5TA6w%2Bma26jFgISOypI1smyQo9dP%2FL%2Bl0F82cfje5%2B6NDbiVOIhWnCqanH%2FetmgtpVd7B64pUp3hSGIpzKlDW0p651gIIr2XmR5MUu4ds9y4YdIi70JoYyKOBYrewxQSzpBQFcWUCEkSlp%2FNDq1B%2BLrVYP8pE1fl1XN%2F3EL%2F62nsX8zALk2LLvKr5m4b1I4FsVzCwOFLzw%2B2kTts9zQG4lokOeJ9OQwvKgQF5D%2Fw72a5Utth4seALl5fLgMfcj3%2FA4lU%2F7UeaWjb1oYx01uO%2BQrKxfZlyX%2FSpmRiWiGu%2FYj4i0fpaxH%2BDSABJwNdiwscCxhHtmYFZb79Laujj7vazMzHNJ2t6jjvqX%2F%2BrxguVZJErpEDAI5WB5%2F2E%2FPHnuMXP81Cfpx2zqVinxpZCAztAAHelQ0M%2Fff4Rm82MmS4gyYqdfKOsvBiCC%2BEpRTB7fC6RRhH0Mj3gglMpPOem480I97HTQwFPEloRZLKXpRlV99RnYWQb2pcwmuEPSDuH2GhhUpKGwIm7z3uVAZ9cpPsl%2FuTenQgxRBuOZTtxoe0BwG%2BifPbGXyFBNx9cEpeAYfV1sijOiIQKPqR7zq%2FYcyJD5J%2BoHC1FWrDrRqkS%2FLdy03vQXskEeLX8HAaHMOP6zcQGOqUBKJGBzy%2BrsZh2nwwOALgsC4swePzBOR3Pz6uszK1Rx2eZbOsTn0dD6Cv01D7GgsGdaAY5hRAorZupfsYLsh5iRh5DlQqY2pfPJuoP3Vz6Q0E9ulBdU7T56DR%2FzmVdCpC1duIkEU%2BliXJgi6bTlhuYhd1TJujGYDH%2BYmDZJ57p2WOGhU0J7FdL0VrNUwKAif3gKeF%2BA8P%2F0Yx4vry1b7%2F4FFEYNevL&X-Amz-Signature=cfbd510751e184145c72e9c46e13e7ac9e5701c500c74f5f4e2d5e646c45b83e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X6SUP2B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDCyUsvl6sRtI%2BmJIO76CZSiTJbNqY5%2BxU6rzN1NGT7YgIgE%2BHnibb0rIGfy%2B3EsYBJ41K5mnC0qNg8QNprZ1H38VAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJjjrzXinAwHcb1meCrcAwO5TA6w%2Bma26jFgISOypI1smyQo9dP%2FL%2Bl0F82cfje5%2B6NDbiVOIhWnCqanH%2FetmgtpVd7B64pUp3hSGIpzKlDW0p651gIIr2XmR5MUu4ds9y4YdIi70JoYyKOBYrewxQSzpBQFcWUCEkSlp%2FNDq1B%2BLrVYP8pE1fl1XN%2F3EL%2F62nsX8zALk2LLvKr5m4b1I4FsVzCwOFLzw%2B2kTts9zQG4lokOeJ9OQwvKgQF5D%2Fw72a5Utth4seALl5fLgMfcj3%2FA4lU%2F7UeaWjb1oYx01uO%2BQrKxfZlyX%2FSpmRiWiGu%2FYj4i0fpaxH%2BDSABJwNdiwscCxhHtmYFZb79Laujj7vazMzHNJ2t6jjvqX%2F%2BrxguVZJErpEDAI5WB5%2F2E%2FPHnuMXP81Cfpx2zqVinxpZCAztAAHelQ0M%2Fff4Rm82MmS4gyYqdfKOsvBiCC%2BEpRTB7fC6RRhH0Mj3gglMpPOem480I97HTQwFPEloRZLKXpRlV99RnYWQb2pcwmuEPSDuH2GhhUpKGwIm7z3uVAZ9cpPsl%2FuTenQgxRBuOZTtxoe0BwG%2BifPbGXyFBNx9cEpeAYfV1sijOiIQKPqR7zq%2FYcyJD5J%2BoHC1FWrDrRqkS%2FLdy03vQXskEeLX8HAaHMOP6zcQGOqUBKJGBzy%2BrsZh2nwwOALgsC4swePzBOR3Pz6uszK1Rx2eZbOsTn0dD6Cv01D7GgsGdaAY5hRAorZupfsYLsh5iRh5DlQqY2pfPJuoP3Vz6Q0E9ulBdU7T56DR%2FzmVdCpC1duIkEU%2BliXJgi6bTlhuYhd1TJujGYDH%2BYmDZJ57p2WOGhU0J7FdL0VrNUwKAif3gKeF%2BA8P%2F0Yx4vry1b7%2F4FFEYNevL&X-Amz-Signature=1770dc1fe989bc8c273d2e9e57d6c108218a48075b58c661c72db47f3877e5eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X6SUP2B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDCyUsvl6sRtI%2BmJIO76CZSiTJbNqY5%2BxU6rzN1NGT7YgIgE%2BHnibb0rIGfy%2B3EsYBJ41K5mnC0qNg8QNprZ1H38VAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJjjrzXinAwHcb1meCrcAwO5TA6w%2Bma26jFgISOypI1smyQo9dP%2FL%2Bl0F82cfje5%2B6NDbiVOIhWnCqanH%2FetmgtpVd7B64pUp3hSGIpzKlDW0p651gIIr2XmR5MUu4ds9y4YdIi70JoYyKOBYrewxQSzpBQFcWUCEkSlp%2FNDq1B%2BLrVYP8pE1fl1XN%2F3EL%2F62nsX8zALk2LLvKr5m4b1I4FsVzCwOFLzw%2B2kTts9zQG4lokOeJ9OQwvKgQF5D%2Fw72a5Utth4seALl5fLgMfcj3%2FA4lU%2F7UeaWjb1oYx01uO%2BQrKxfZlyX%2FSpmRiWiGu%2FYj4i0fpaxH%2BDSABJwNdiwscCxhHtmYFZb79Laujj7vazMzHNJ2t6jjvqX%2F%2BrxguVZJErpEDAI5WB5%2F2E%2FPHnuMXP81Cfpx2zqVinxpZCAztAAHelQ0M%2Fff4Rm82MmS4gyYqdfKOsvBiCC%2BEpRTB7fC6RRhH0Mj3gglMpPOem480I97HTQwFPEloRZLKXpRlV99RnYWQb2pcwmuEPSDuH2GhhUpKGwIm7z3uVAZ9cpPsl%2FuTenQgxRBuOZTtxoe0BwG%2BifPbGXyFBNx9cEpeAYfV1sijOiIQKPqR7zq%2FYcyJD5J%2BoHC1FWrDrRqkS%2FLdy03vQXskEeLX8HAaHMOP6zcQGOqUBKJGBzy%2BrsZh2nwwOALgsC4swePzBOR3Pz6uszK1Rx2eZbOsTn0dD6Cv01D7GgsGdaAY5hRAorZupfsYLsh5iRh5DlQqY2pfPJuoP3Vz6Q0E9ulBdU7T56DR%2FzmVdCpC1duIkEU%2BliXJgi6bTlhuYhd1TJujGYDH%2BYmDZJ57p2WOGhU0J7FdL0VrNUwKAif3gKeF%2BA8P%2F0Yx4vry1b7%2F4FFEYNevL&X-Amz-Signature=625400445296f8ef1fac6794bf28d031b86777c9dac96ab5f0528ff57ac4dcbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X6SUP2B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDCyUsvl6sRtI%2BmJIO76CZSiTJbNqY5%2BxU6rzN1NGT7YgIgE%2BHnibb0rIGfy%2B3EsYBJ41K5mnC0qNg8QNprZ1H38VAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJjjrzXinAwHcb1meCrcAwO5TA6w%2Bma26jFgISOypI1smyQo9dP%2FL%2Bl0F82cfje5%2B6NDbiVOIhWnCqanH%2FetmgtpVd7B64pUp3hSGIpzKlDW0p651gIIr2XmR5MUu4ds9y4YdIi70JoYyKOBYrewxQSzpBQFcWUCEkSlp%2FNDq1B%2BLrVYP8pE1fl1XN%2F3EL%2F62nsX8zALk2LLvKr5m4b1I4FsVzCwOFLzw%2B2kTts9zQG4lokOeJ9OQwvKgQF5D%2Fw72a5Utth4seALl5fLgMfcj3%2FA4lU%2F7UeaWjb1oYx01uO%2BQrKxfZlyX%2FSpmRiWiGu%2FYj4i0fpaxH%2BDSABJwNdiwscCxhHtmYFZb79Laujj7vazMzHNJ2t6jjvqX%2F%2BrxguVZJErpEDAI5WB5%2F2E%2FPHnuMXP81Cfpx2zqVinxpZCAztAAHelQ0M%2Fff4Rm82MmS4gyYqdfKOsvBiCC%2BEpRTB7fC6RRhH0Mj3gglMpPOem480I97HTQwFPEloRZLKXpRlV99RnYWQb2pcwmuEPSDuH2GhhUpKGwIm7z3uVAZ9cpPsl%2FuTenQgxRBuOZTtxoe0BwG%2BifPbGXyFBNx9cEpeAYfV1sijOiIQKPqR7zq%2FYcyJD5J%2BoHC1FWrDrRqkS%2FLdy03vQXskEeLX8HAaHMOP6zcQGOqUBKJGBzy%2BrsZh2nwwOALgsC4swePzBOR3Pz6uszK1Rx2eZbOsTn0dD6Cv01D7GgsGdaAY5hRAorZupfsYLsh5iRh5DlQqY2pfPJuoP3Vz6Q0E9ulBdU7T56DR%2FzmVdCpC1duIkEU%2BliXJgi6bTlhuYhd1TJujGYDH%2BYmDZJ57p2WOGhU0J7FdL0VrNUwKAif3gKeF%2BA8P%2F0Yx4vry1b7%2F4FFEYNevL&X-Amz-Signature=ab20f6ded6035fe78de5aad4379ac93d6f4aa29786e5f125d94256c3cfe1db84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4JVIPR3%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIAf08EY5nzFELlXzPPsMh8JVQGCfNb80xZBfEj%2FDMuHqAiAg3GF5lb2WNI2s9LYsoXgjxljGVtPUG0StBkQ%2BOiW3Gyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMhlhYNNlQpmoAxUJsKtwD6sphH0qJEKj%2BAOWi6IRLivekGd%2BbMkxlmJmgaZm1BGgLKRxjL0Cq%2F7ouYiv5F3kRKRah2Ju%2F%2FEiSMuJFsJTwJuJglEwckMGxYnhXQ%2BSGB31LCrlu2Hl76omJZvpc7hhOSRiI99%2F1hp3Il%2BWIdNnFZPNLxti7U9dGEqkCxcGuOXub5vqdxvduiEr0ebjbd2VgYDnqlaWlNA2ACvJ1z6smLitNgPH7GICtvmDTG%2B%2Boc7DifHSLkCYP4dpNuxEWDs2IOTBZ9oYbD6MLhg76mb3f4Oq07%2Bpqb1iYkiBWzTY%2BjSGgeramOd2ytqCTptU4fwT%2F7MI3ToMSw6u25E5FOcOYmtZbbuCktfa9iFMN0V0c3gBFv%2FxniCPm4Rmdf%2FzSe2UV0VQJGaVY8TTOsGJEyb3Q%2Fh3h5loZpAyESWSKTD90zxC1kpQEZOrN0mo1oWhbnuJmoFLDzgvV8Q3CIWQzg9ClDmO5CTRmhIfkT%2FsVhBZm7W6c%2FNEm%2F5AxXGrZLiFw6k3LKExTynG%2BthEfijfCvpDMp7uvYdCHX7EsdgAiCJt9pL2dBDwVvFk1S8nlaDang%2FgmFJS3LYVtm7SEocU34s7gfkyV0MOkjFMOon34dl%2BoZowWHvFmIVlWkQZZvnMwpPvNxAY6pgGJ36wC8zq2N5iU40S0Zu2OWSc0%2BpbHlpBXRyzf94h3pNazJFYMwEx%2B1A4nQUIoRSs%2FSxNAuSLM0A4oPM1tHhFuCQiYvdiT2eoDPz720rG%2F%2FEOnhnPwlJhHkEIffRe0a446b8pxdKBYcvCo5wn9rM4LxxtiVJQYXlD3kqigih8FASIYFkD6VaBYA58HGc5UUTk8ZF0VJOtnI%2F%2BJ4GtqSEGhUQg7RH8s&X-Amz-Signature=3438e766ae4ffedc287945daa005e1545efe5a501231c8499c6e2a81a9372a3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LPRTYGH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIChqMT25oN1PNuLqVZKvEUjJdqqKAb51uh7WVzGzyMZxAiEAjTtyY%2BwU8xIba4%2B%2FUsZLkbuGRg3lkIYcimIJ2jGujncq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJPvvf9YWegp1MbjISrcA41ukWwlloeDMd%2B8XEYakJ1ma6mdL0TQbYwWKgALN1m4vPRblJEmetoQBWxgPPuJHaS32pt7%2FdGeAApNVQAo7BfwcgVyauIX8qYNH2Nh9p0RLp873b4aHLId9Ka8v0d0nhqKBtljj7VMf3r8G3Wh%2Fw7E92ZklUeG29XQejJfWRuiOeSn8SmAXVde%2FntioCkQeV7dCWePafJ1IwzfO3tG2ERU7FSTLLeXZVtQEKqkE3ZEhkdkusAxqVvebpfLphpNVqkznMVshb3fspR%2Bkm66%2BOjRM3YUUewRjds98yKSH%2FDIAPxBSGuNoinSsJ76ayFlsWrM%2B2%2FfDu8D%2FbO%2F9cJxCs%2F4clpESlOVYP6efqOypllaOBeLmWiw3kZEoGfYHwij5m7v0Sr8y5ZYG0BoTaDvuXfixeQV2mLPb2iN6fqmWfVQHYCouSYb7HHenRkTrxZyqKZH97FL0a01otAlSb2%2FDQX1EAu89QMSaiGh5eLjNh3Ram8fwuwnxTIfXDpiZnp8QiqsOaeNdGMdeS8WdxNKuH0fZe7qUaSOv8OG9tUN4q7hiwC9T6%2F244vxytg2Ux%2FUYA%2FfoxDzv%2BqkkY2idPSnBW4tL4IBPKFOfApP1JYBiOwOJejrISUeegHh%2FsgWMNX6zcQGOqUBdRqvOP0sjNFxtTLCWeNmFpNbBuYHzin%2FzFYoTp%2BKB8FNGzzhZiVj%2FTkWAwICP2dq59Nth3XmUh%2FMyvZppdoj9InXhhvEA%2BIcE0A3vkg%2F%2BrS0tIHKRNgeNapCNceKnqgOBU%2BKhSHhtkhbYEDA%2BctUbpqPJ2NBrEfjU4DygvFlVhQYy5KMAPDLf5W%2BCo4ObkFKvX1%2FDcS7Ad8sxU%2F6d1SozLSdTU%2BO&X-Amz-Signature=91d21b50b97d727db158d730eee94a0cfe8498329a90ec4ad3d7eda400780f56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SCI6A7O%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCX73PjCAO9iLa6fs%2BU7l4n7xNYEya9Y1%2B%2Bd%2FTgUHMfCgIhAL2BXDaiS%2BOanylS8jhZ1h7IiRP4JoUPrgME2wNlXYkcKv8DCHkQABoMNjM3NDIzMTgzODA1IgzudKljCokY%2FxAX3SEq3AMMF90ByboC%2B64%2F15eRtwOEjUmk4JMxR9WwP%2B%2FF11zb5wTH7YPfC6krmy633%2FgLgecK2pYCp5SOjWHshr10k3kS292W9XI%2B4qXsTDpcIBEY40RKAkRi5gtHmk42KaagqNxqe%2FXFRuJsl4bUOyeGhnuE8ENHFY9T54sw3g51awpn2B6VCs4BCaIbNYp9rLCicTA08MOj5CAT5ch%2Bxz3CF9gEvE5pSDWADzjT%2B4eUG92dAXD1p0PgayCaASUcKChzeXo6nnE46Oott8MA%2BWWBOA35akjVtZfGyXmXsUvivcts6n%2BaiqYsmkS4prWiimntZJGcxetNsnD8yZolb2X5kA9hb6rVTBis8v8T6HMQJ1fpsklvByHzI8ru3cBCB9%2FNhPeKIYyFVPBODN%2BRN8oTKynmIME%2FvDMheeewfRkf3WKpN%2BhmiI0xIimQpjpoDJOlu%2B41sIHDOwUQHUnILRvUUGBr2IgWSfXF7l0iHouPaVz%2B9eaqOQYigYAvXn1Yjib6LNXjLS8BmsxGsreYvwRwMccoUvaU%2BEIo5laOAw%2F6LF5cDyt0fXDInMWjXrDiulsq%2BqTrcpWFAsDsYURZc%2BMdfBs%2FqT8Z578cYIhqat0%2BUBasNzgPlm%2BeXtZG5tI9gjDr%2Bs3EBjqkAT2aJGz0j0OL%2BWZ0ibn1aWnpLHOmKhyrfafgcxPZGD5I6R%2FF43cdr11Tm4nAfBviIwyDTT246BdWmtFaf2yQwNYy0e%2FauhOb7QFcHpGWhOv%2FcnU4ceEHzHKwNI%2BuFaCpy8XMHQ3Wi9aWQocOd%2FR8vrbHGe80COxSOtvkfeJa0QaASCHes%2Fm6JVB9FxhZj%2BjrjBSXEVIo%2BXCAkt8TWErnHdI6fM7F&X-Amz-Signature=e7ce72a73def4dae6209aeaa71f8f196507d4a0c8e1affd87d0f2188a6c74047&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X6SUP2B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDCyUsvl6sRtI%2BmJIO76CZSiTJbNqY5%2BxU6rzN1NGT7YgIgE%2BHnibb0rIGfy%2B3EsYBJ41K5mnC0qNg8QNprZ1H38VAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJjjrzXinAwHcb1meCrcAwO5TA6w%2Bma26jFgISOypI1smyQo9dP%2FL%2Bl0F82cfje5%2B6NDbiVOIhWnCqanH%2FetmgtpVd7B64pUp3hSGIpzKlDW0p651gIIr2XmR5MUu4ds9y4YdIi70JoYyKOBYrewxQSzpBQFcWUCEkSlp%2FNDq1B%2BLrVYP8pE1fl1XN%2F3EL%2F62nsX8zALk2LLvKr5m4b1I4FsVzCwOFLzw%2B2kTts9zQG4lokOeJ9OQwvKgQF5D%2Fw72a5Utth4seALl5fLgMfcj3%2FA4lU%2F7UeaWjb1oYx01uO%2BQrKxfZlyX%2FSpmRiWiGu%2FYj4i0fpaxH%2BDSABJwNdiwscCxhHtmYFZb79Laujj7vazMzHNJ2t6jjvqX%2F%2BrxguVZJErpEDAI5WB5%2F2E%2FPHnuMXP81Cfpx2zqVinxpZCAztAAHelQ0M%2Fff4Rm82MmS4gyYqdfKOsvBiCC%2BEpRTB7fC6RRhH0Mj3gglMpPOem480I97HTQwFPEloRZLKXpRlV99RnYWQb2pcwmuEPSDuH2GhhUpKGwIm7z3uVAZ9cpPsl%2FuTenQgxRBuOZTtxoe0BwG%2BifPbGXyFBNx9cEpeAYfV1sijOiIQKPqR7zq%2FYcyJD5J%2BoHC1FWrDrRqkS%2FLdy03vQXskEeLX8HAaHMOP6zcQGOqUBKJGBzy%2BrsZh2nwwOALgsC4swePzBOR3Pz6uszK1Rx2eZbOsTn0dD6Cv01D7GgsGdaAY5hRAorZupfsYLsh5iRh5DlQqY2pfPJuoP3Vz6Q0E9ulBdU7T56DR%2FzmVdCpC1duIkEU%2BliXJgi6bTlhuYhd1TJujGYDH%2BYmDZJ57p2WOGhU0J7FdL0VrNUwKAif3gKeF%2BA8P%2F0Yx4vry1b7%2F4FFEYNevL&X-Amz-Signature=33c0916fdbdd8bd8937e95a6320e3cfa8028c6002373b8db45d49f5f16628aad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLM2M4KF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIEsRi01g76sRqqFpJrAOF4Ck9KRck7%2F7R%2BmR6SURUchVAiBMxAwD7UDXnwgRPfTviU42TI9hHTUMcT5SEC3H7IQ2jCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMxC65FNjC7AopVjSMKtwDg6gf%2BezfziCrmmHiDN5%2FEFsu%2BZOkeo9a8Ew1PfvDXCGF2VOFVp8j8q6s0nNODKAutW9tyNS%2FSJR2Q0Hq5GiFuMtR5NuvafEwvb1E%2FEcjqTO7mSxx8wUgtN7cylvQvYSI50%2Fjl3RrdNMcEl%2BOpvk8Vc8sy%2FvdtjD4yuMmY5wM5fFlqjLpJMmtkK3mOuT5qGRU%2BvdYSO0nnvLJN0atWqs5xpLgXio2y%2Bw4t1VaQLYhbKhrRfvo6ASXlEMBxaIsF5ydHx%2BYr8HJqmHUjbAMBMW86nj3eH2PXfK4z0u62DG6gFMTar6vwsxC63wGmho2ryR23qeWQhGWoMNXlIlzHLZSGFn%2B9MNQWdb074FhriDOHknUX4JmJfrw%2BSp1DAtCEGdqiVErAE%2FL7sApQCZHxMZIzovF6mJZ8df28LzjEIbRQKtD2sSll3iUvDsjJL4SeJxIZcLtx7mCswrIPKHfQnyWHdEZYaaGdpgMkmfLnSU0Oc1SUHiJreEt9Hy7YvdRL9SWb4eicRbEdj1iJBxD4owVo%2F927em9NbVEZZI84Rf0KrPGK8jFHPS8A1KI7s7u5XQZfNEagQz%2F3GAhs7fKwKerBKnVimY%2BRn%2BNGjOJeuHWl%2Bj5bnz11CqtGkhgRY8w2PrNxAY6pgEkqIE0DBuyozXwwsRTcQDLF8D58zZR%2B1IY0vNOKU9xf5H05uy6F8e90lo4%2B79VDsPV6yMJ9c9ZFNozBzdbcHGFzfpxnf3RhpL47LpaA8BOPYfQvjtYc6CZkgAT4a9APc3w7LAoF6vZHgB3RNGcYtrrvVMSYYrjl3x7BmJSTMjiYgiL6%2B6eQV3lQfZgYPbGEJtbb2ur1LHnom86yvviv5VGc50FrmH7&X-Amz-Signature=194d1ebffd90501ebc6115150b91050569746aa0cdfd811b319c14e62ef79ded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X6SUP2B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDCyUsvl6sRtI%2BmJIO76CZSiTJbNqY5%2BxU6rzN1NGT7YgIgE%2BHnibb0rIGfy%2B3EsYBJ41K5mnC0qNg8QNprZ1H38VAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJjjrzXinAwHcb1meCrcAwO5TA6w%2Bma26jFgISOypI1smyQo9dP%2FL%2Bl0F82cfje5%2B6NDbiVOIhWnCqanH%2FetmgtpVd7B64pUp3hSGIpzKlDW0p651gIIr2XmR5MUu4ds9y4YdIi70JoYyKOBYrewxQSzpBQFcWUCEkSlp%2FNDq1B%2BLrVYP8pE1fl1XN%2F3EL%2F62nsX8zALk2LLvKr5m4b1I4FsVzCwOFLzw%2B2kTts9zQG4lokOeJ9OQwvKgQF5D%2Fw72a5Utth4seALl5fLgMfcj3%2FA4lU%2F7UeaWjb1oYx01uO%2BQrKxfZlyX%2FSpmRiWiGu%2FYj4i0fpaxH%2BDSABJwNdiwscCxhHtmYFZb79Laujj7vazMzHNJ2t6jjvqX%2F%2BrxguVZJErpEDAI5WB5%2F2E%2FPHnuMXP81Cfpx2zqVinxpZCAztAAHelQ0M%2Fff4Rm82MmS4gyYqdfKOsvBiCC%2BEpRTB7fC6RRhH0Mj3gglMpPOem480I97HTQwFPEloRZLKXpRlV99RnYWQb2pcwmuEPSDuH2GhhUpKGwIm7z3uVAZ9cpPsl%2FuTenQgxRBuOZTtxoe0BwG%2BifPbGXyFBNx9cEpeAYfV1sijOiIQKPqR7zq%2FYcyJD5J%2BoHC1FWrDrRqkS%2FLdy03vQXskEeLX8HAaHMOP6zcQGOqUBKJGBzy%2BrsZh2nwwOALgsC4swePzBOR3Pz6uszK1Rx2eZbOsTn0dD6Cv01D7GgsGdaAY5hRAorZupfsYLsh5iRh5DlQqY2pfPJuoP3Vz6Q0E9ulBdU7T56DR%2FzmVdCpC1duIkEU%2BliXJgi6bTlhuYhd1TJujGYDH%2BYmDZJ57p2WOGhU0J7FdL0VrNUwKAif3gKeF%2BA8P%2F0Yx4vry1b7%2F4FFEYNevL&X-Amz-Signature=559e4a0854e31091febdd482310e0caa667de5aaa83994e24a9061fb33fde1e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNSBMHYL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDRCzQB5fmvZ9bMALJRyd%2BqIRYiUBsEOhCJbWXVGTK%2FvgIgQSKeoDSrPi%2B6fGryvjqWtOXV8YflWkgjJ1Mq5Y57zFUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDMidqt1jBcWsnsbWzSrcAxjCfhNyDFg36thwVkWYKE%2FF40ezgw7iOBhm9DjIpzjaleMMonYet9MdxN7QYyTWR1m5dRPaag5J4k8Ke33fC4mW4n0HN0zeghAvsjWQd4YZwlG5PYy%2BFiQOxMUE%2F%2B4txU5A2rm4Cjwes1PkQTGly296Crbx%2Bv6Ic9jI1iwl5Phmsu7CBS%2Bx0dCytjxNHaUzK7GLoCZaw8vAXTRf1weDOc3ZjD%2FrQ8SB9LLCgbe%2Fxz%2Bhb4L%2FAnnbJt0UdTy%2FCmn5d8nvjPfV3Fqx4cPAH4JLekWe8FJWzpMFNyilsNe09qCJXqvPozswBTfhp7C0jNOWmMHyVg579c2zxwvU027psOFTofbDT1SnS3uWQFlMmIAwgzDxqA2iRHBsHWkgETNEmKZ0qtDcc3OFCcFgmoJf%2BsgqMdCV9ZbKWwahRc95j%2B8RfNrwrsLeBiE2mDp32IzAiLdRLOvPVIyc%2Fi4Q6oXtuTz1A%2FVdTLQ1Y9tt6rIfMtPcuqzpvjmVTnkDNGDyv28zCzBsYs2HOMYfr%2FkdsYSGisL6zNhCSxS3avK3UbxrrKMeXMCpYXd4xaiM9Te7iojrWnxVz%2Fl8iHU3%2FpDVZAvtwG68vU7YoNLQy%2F5%2F9MXS6HGgdRihSxaJEBJd9RiuMJH7zcQGOqUBAop4Tw6tY5drKTMtYues3iKhBfdxkyqT4uvefLdZ9Jw6jd%2FY%2FqUSgoHHYlsp9FPjpKqA53FbUFn%2FEJyj4I6jcQwtRY5cZVbwiAv9wstcSMOPmLWW5SrqdzZpd4jiiXab2amgpFoxXZ10XfJQ3ErWpBoiX6nYJxeQaJo6ZkfqQk6vNXzd8Wm%2B0iKP8%2F%2B30BoYj0LdOAitviAGFJ3euKBqRZ009evf&X-Amz-Signature=75c7e3092d425958e8e48efed8dd9f74de6a33ff469245c7bf6645646d1fa032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X6SUP2B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDCyUsvl6sRtI%2BmJIO76CZSiTJbNqY5%2BxU6rzN1NGT7YgIgE%2BHnibb0rIGfy%2B3EsYBJ41K5mnC0qNg8QNprZ1H38VAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJjjrzXinAwHcb1meCrcAwO5TA6w%2Bma26jFgISOypI1smyQo9dP%2FL%2Bl0F82cfje5%2B6NDbiVOIhWnCqanH%2FetmgtpVd7B64pUp3hSGIpzKlDW0p651gIIr2XmR5MUu4ds9y4YdIi70JoYyKOBYrewxQSzpBQFcWUCEkSlp%2FNDq1B%2BLrVYP8pE1fl1XN%2F3EL%2F62nsX8zALk2LLvKr5m4b1I4FsVzCwOFLzw%2B2kTts9zQG4lokOeJ9OQwvKgQF5D%2Fw72a5Utth4seALl5fLgMfcj3%2FA4lU%2F7UeaWjb1oYx01uO%2BQrKxfZlyX%2FSpmRiWiGu%2FYj4i0fpaxH%2BDSABJwNdiwscCxhHtmYFZb79Laujj7vazMzHNJ2t6jjvqX%2F%2BrxguVZJErpEDAI5WB5%2F2E%2FPHnuMXP81Cfpx2zqVinxpZCAztAAHelQ0M%2Fff4Rm82MmS4gyYqdfKOsvBiCC%2BEpRTB7fC6RRhH0Mj3gglMpPOem480I97HTQwFPEloRZLKXpRlV99RnYWQb2pcwmuEPSDuH2GhhUpKGwIm7z3uVAZ9cpPsl%2FuTenQgxRBuOZTtxoe0BwG%2BifPbGXyFBNx9cEpeAYfV1sijOiIQKPqR7zq%2FYcyJD5J%2BoHC1FWrDrRqkS%2FLdy03vQXskEeLX8HAaHMOP6zcQGOqUBKJGBzy%2BrsZh2nwwOALgsC4swePzBOR3Pz6uszK1Rx2eZbOsTn0dD6Cv01D7GgsGdaAY5hRAorZupfsYLsh5iRh5DlQqY2pfPJuoP3Vz6Q0E9ulBdU7T56DR%2FzmVdCpC1duIkEU%2BliXJgi6bTlhuYhd1TJujGYDH%2BYmDZJ57p2WOGhU0J7FdL0VrNUwKAif3gKeF%2BA8P%2F0Yx4vry1b7%2F4FFEYNevL&X-Amz-Signature=4542c37e7aa4bef19287dbc6d501e307761c44ae0f7b1717bbef955237bb4131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYNSMADZ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCDjrjbfElaJVX3jNCT1%2FET9UDGa%2BN8DbrIbg5jGwmeyQIhANHXL3Cjg%2FwI1YZBDW6EKIoKSQcF8gtygGmBWl1ulkSlKv8DCHkQABoMNjM3NDIzMTgzODA1IgwUl%2BicZVGyYZNqItUq3ANmwztFctEXUHm2zsO%2Fjp6f5U3wC0RDOdwMrUla7W3%2BtFw4xPJruLSyxyPUbYPpVUR0fncoYyJSuoXkFAJJlcSS%2FJ9rj4C6FHX6%2FWxMTF%2FoazbfjnL16YMEUjDIgr%2BqyGE4aKRtTI8%2Bku3iW66ZJWdjv898JI0%2FNGRxU3eQ1BnPJsiHm7q%2BpYgDMupYekrE0ud9jkJw7CtsXcPYRX5fGCcNIn7kMSk9ervb6PlhOP90RDunGHZD%2ByO1Ik5n7f6l2BnVNMOkAJ45jY2hbUxisNwHTllFYu54CgBr%2F9ikyynD5mzdgpT%2B6PbzNqyVD6cKghXcFN49y2iQI9IfsTnY83CuoeT5mtfbKkAwRvwxM9PvVdL%2B04XCJU9DFbrDnQnpQH9zksaa6EhRlLPYmzP9EqYvbxaKwggGiE%2BhYDoR%2F%2FelFBI1LxpfcZHYMMquXqfixHxLtrz0VQQ8JSZ5bgyC7ulFvgCQZZzyx8ZgeZdgSKc4jr9%2BVBfTkvWOeY1dw3lQEuWsTsjNzV%2FXxh7Ag2XeAt6uxfbBEVOPoPym%2F7yHc9nnQMT8yGHnYIpQrU0DNS9yyacNmYcLqI7fz5PJqotHXo56tEP3zcpnXfXvkr96DtMZ7z6XyKo1YFtqGWLhHjDG%2B83EBjqkAa8KWCbCW1Ba4XoaTxoUSeZaaXitbdJSkRf1AiV%2BteAL51AAMPcsYp0VjSk%2F9XV73v1XIFaGKZrT1gy1Ef7lAdoYPWGfaj1i3YBHnnu0fbY%2FHMc0zJuMrCPNMBrU2M9eT%2BhDNVoB7kLYff0VnaMj93RjY4m6Sr5o3ja%2Ffe2LaxCUQCiQ7pZl56gMvT%2BffKOB9n6XlSQ%2FxcELRN1dnE2Ym1ccXZ8G&X-Amz-Signature=e78e902493fb4ef3f5f2ad08b8dd3ae55ed200d72b29568b0aba68745c5400e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X6SUP2B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDCyUsvl6sRtI%2BmJIO76CZSiTJbNqY5%2BxU6rzN1NGT7YgIgE%2BHnibb0rIGfy%2B3EsYBJ41K5mnC0qNg8QNprZ1H38VAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJjjrzXinAwHcb1meCrcAwO5TA6w%2Bma26jFgISOypI1smyQo9dP%2FL%2Bl0F82cfje5%2B6NDbiVOIhWnCqanH%2FetmgtpVd7B64pUp3hSGIpzKlDW0p651gIIr2XmR5MUu4ds9y4YdIi70JoYyKOBYrewxQSzpBQFcWUCEkSlp%2FNDq1B%2BLrVYP8pE1fl1XN%2F3EL%2F62nsX8zALk2LLvKr5m4b1I4FsVzCwOFLzw%2B2kTts9zQG4lokOeJ9OQwvKgQF5D%2Fw72a5Utth4seALl5fLgMfcj3%2FA4lU%2F7UeaWjb1oYx01uO%2BQrKxfZlyX%2FSpmRiWiGu%2FYj4i0fpaxH%2BDSABJwNdiwscCxhHtmYFZb79Laujj7vazMzHNJ2t6jjvqX%2F%2BrxguVZJErpEDAI5WB5%2F2E%2FPHnuMXP81Cfpx2zqVinxpZCAztAAHelQ0M%2Fff4Rm82MmS4gyYqdfKOsvBiCC%2BEpRTB7fC6RRhH0Mj3gglMpPOem480I97HTQwFPEloRZLKXpRlV99RnYWQb2pcwmuEPSDuH2GhhUpKGwIm7z3uVAZ9cpPsl%2FuTenQgxRBuOZTtxoe0BwG%2BifPbGXyFBNx9cEpeAYfV1sijOiIQKPqR7zq%2FYcyJD5J%2BoHC1FWrDrRqkS%2FLdy03vQXskEeLX8HAaHMOP6zcQGOqUBKJGBzy%2BrsZh2nwwOALgsC4swePzBOR3Pz6uszK1Rx2eZbOsTn0dD6Cv01D7GgsGdaAY5hRAorZupfsYLsh5iRh5DlQqY2pfPJuoP3Vz6Q0E9ulBdU7T56DR%2FzmVdCpC1duIkEU%2BliXJgi6bTlhuYhd1TJujGYDH%2BYmDZJ57p2WOGhU0J7FdL0VrNUwKAif3gKeF%2BA8P%2F0Yx4vry1b7%2F4FFEYNevL&X-Amz-Signature=7692e8b0be16619ddd6112471792792fdeb257b7fbe71d3a1e939e6aa63cdcfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QXONR6N%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQC1eRWAzrr71tYMLybXnLUKI8FPbek6zwndPrbYgChaRgIgcFPMvpUDpOg2sSPdfYQ1OoUYAdSZTuMGWSwqgiHZ7YAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPHvyyLA5%2Bl%2FrqwdTircA2uJPRbM3SweF5MBFkMO9%2FFEfncN15Gmzx3k698Bhjpod6ly6oEF%2FPLCt4UUmWmTjOouLqDgYvqIwNDe2HNFg%2FkWaqkOVhClltqY%2FxAfvR8I0pjksFI7Xn9ZAq4in4u3T9NM4AAQouE3V%2FGF9Q81r4zgmhQrk044PhxOXz8rWtlEw7MEtzX%2F%2FE5f%2BMk5bEnnW6DZvKIqaA3mOBxwfI55OJoYu11p0NuQP3v4Tc9xY2WUMxIUSTcR4ddQOOHMoC0X6ft5yKwufG4dS%2Fz95xQh1txADyMyb4bN%2Bd7gYHcUFNbObWM5KYRBEovYkUUYOZHhZe3nQEjSpmVi2wjuUxp%2F9hcpwerjUk3WGdF5M43wNjwJEbttuzAb9u7GL%2BfC%2BWSxzeyqe%2BgLd5C1tRxbaHXX%2BIJZlpafw2rJ9ARivIaEBdTfSgWEbVGDkio78p3j%2FbPRXlsQ6uUIg9wgpCwhXEX3%2FNbDMUvMdzNazbqSNCslHHO1XrGtvRLXzo%2BKyFyjvMpAIh7c90La56P5QFMsCKrZinBe8jj8jV3frpdaeT0PAAgAnlycOExsfZ5VGa%2FdcRi528W9o0vx9wbnKyzzxw4dBn3%2BAQjiGfwe3J7WbZkK4g8TpA3cq9QpJYCU5Ie%2BMNr8zcQGOqUBAZrLXKokZ6wSj2M9yqrpsaBwcwKyEv1Cj4NL6bDtSwHQky2weDRzB8nWnRIVsT9ujhsbbUN2rlLG8eHT%2B43RqhWcqbHY0G5cS6Np1Zr4wTAsLP6HEiRDISQP2R3QAjKx9u59gAR6upHNnelMPWdAwxcoaQPHKO%2BEwl3PP4mNfK%2Fecv%2FP%2BwRfHGtKlkiZGlPzd0DyI8Iaz7blJY8VXY5Cm1kiI2e7&X-Amz-Signature=7e659e27722f0d0fdf09ba7cd57abf324e65aa74d894e1a5bccb8cc2a91d0603&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQTOVQCP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCJmRpYclrCYhL2FhjJIh%2FGi8xzDz67LkQM5n14VW%2B2TgIhAPTYEGZwGN2Xa%2B8vxTvaQ3ozrRQ%2Fx%2BpkJJf5OYJ9sdKSKv8DCHkQABoMNjM3NDIzMTgzODA1IgxN4YuzBny8wJi%2BecEq3AOUMByX5inMcI%2BLih1q9JxD455E6Bcyx6lv31wHKTvU1%2FSDP8OESHt9uk24PYfTMh0UplbljDoYpk39a%2Fto7%2BoGg0ngl8MKCL5vblSQ4kEzmK9fn1c0y0T31Cc8XDovLc7BXu6fwNtlH7u7Gr6UVK3dqGcToZJLGJgZJUKbXnKdEcoyO7jrtpOC8K%2BjMnwHAupc9zVngvGSBmmBENcoZy%2FHVib5xtOcB4JMIREHtrPX6bfxw0yPjEEmN%2BKDP1xAEjZdUMpAOBdxTnAZxcnV2Pj%2BAExDGoB%2F4npw%2FslomDlcdNzgNsLhWpFtGSekOMgi03slr9lYKuBdmUJTAuywH9m4DcapVpTpTNIJUuyHyZmXGWccCzCpoFKvaG9w79ZpZrKQozc6qr3N0x%2F%2B8%2BrjqavIo%2Beann9eWd1nWBAd7%2FULn73l7A7312Mo0DLmLtLI5tU3AQj%2F2GWpMuUvUdIwxuofwqe9kFK6VSxJM1624Bs%2BI7TmVayE8o6CNnhVTh5xXkGONZoKHb%2Bipq75t%2B7tLUahnrkaf9CCn2O33KsFYU9XTGiq%2FUlvRcR6qnTPrTUXYqenn0Dq7hqex08Yw3dOG6iAfUyKMIOmHLbT6ro7N41l47T%2FeNXOy4BeHNBn9DDR%2Bs3EBjqkAZo0JcrzXJL3hay%2BURD6MnIrymctZkE3Isg7e7E4Tza433Oh7XHAy0oJfwpe6EF1gtU1OlerkoFab2KVhhgMW07TvXoE3K6B3n7xutF4DFBq3EUf7223Wf8xbP1Bj1mF%2Bc6qRIR8wsODapgVdxQkL5DcmKmsxeVcx%2FCTkQcJ6hrGMeE7t48XylOiWemjzDrcn8a0hbYOSb01%2FbbN4hHUN0MDVnhQ&X-Amz-Signature=a7a097fa41fb1e1d818cfb02da451403e176bd35f147a46913b97e997f4a4724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644KYEGQN%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQD4Goe8UfesilmhCLiTZGT%2Bb9QekAax3KlUZIsd%2FNL%2FpgIgab419NWkfSUvFaVXcTcVEkB9S1zuNsFADNBqpC5SjMIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJB8bXfk%2BgBRTqd61SrcA%2FpCviosueuvKSvQbsREIh6imrZLqhIij6M6AEc3CsihrJKd0DkVwoBcO%2FlztsSv5V1RXPjgDGQ9YegPH3QM2x07%2Fi2G4fisy7QUeLfosG5o%2BDPu6gfuNK706qX6Ai1fGF8fYBuMmzGCW%2BrV6w0CvSBF7lwNormV%2Bfp0vro%2F58LzsuuFlPuLdkpmKzzxBurzmLHdbeCeHPnCMpD4aJ2EXoW8aeRi45NxMwFClsWtk1a5tWDQ4uQWIMPkwj%2FidRCJJOc%2BWuYEORHzgCpa35EgLfB5Hoz2yuWSElOuZvvaR5kUgMR0cudw%2Fc8wy0kDsCokiXs%2FfkCu2Fe6D%2FD2x5znbXHPBH4YHsvUc5BubjRloYLX1mK%2FUmiUdEdWtJAcnMNs7X1jUZoQRLy5%2BV9%2FAgIVAJcuqIUizqu86xdN9Qt6Nrztnw%2F3dZe5wAkiw5JXgpbU1RBUyKFbwGY4ymXmFEq6XU4IVFIlOGG0ATxINFC%2BwMfG3fMCRmm7dSKb4Wl8uGgdwUhHptIx8S%2FA6O3fmwBFAt25%2Fh4RgkGI%2FIiymG9PRZdrdVQ2GGVdfpGEPPl%2FElYRkbwj58GLGVDwZMNU5hGaKNnKtQyoGDcJJJfSb3f38F2T3aM8SBh8i%2BNPuloiMOX7zcQGOqUBK386l1p7hd91QYVNisurZ3bezYzpdqgigVdaNw4pPwgzeKnAcXIi1Uvqs2vyf4EnoZLgvDZHniBa7ybyVoqlcc7RNbxoMIZkTGpNIc%2FoorSa0l74CUdqfT2SKZ%2BtFE0cPq6KfHa9R%2FW8C4ykaEj4bORnbKz7iLebK9Y7ZPT2ywA2je2U4vdP97w4x6RQ%2FOu4Wvk3Q8RA%2BvV6nAiy9FO5bb8MFymu&X-Amz-Signature=5150445010558317a6cf3775880987cdd8108d52210d41f3b2b56b721e235c03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCFGZAMT%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDgm1QCgCbFI7tiCSIRIdElHk0WpYeP6i5bmyD49vtNDwIhAJ3346jkvTqJfnOnhFsj9SYLsqtAWQevVEHKu0KIMwBVKv8DCHkQABoMNjM3NDIzMTgzODA1IgzzvvRAuE7XHz0VVbcq3AP63z4gDAqa2I4iX9n1Oikv3aMSSomtom52aj6XdZDZzAgbZwoN%2BX%2FDT%2FqYNmBVAdjkOqUkXFP%2BuLblZC7koBqgFT5vhashM4JLH0qziizOyVan9qFdoWPFuDaykZryWByfMEhuSK%2FutXtVzdc%2Fi29o6mKvphS8p9CdwRvUxHsX7K6BQIKMBkijDqYG4ApblPxY4QkeOIjhkNZ%2FuA18XN9hmTQmX2DYEEqbTb3p086ww4o5GgBGJ4P9JqNuHlXedKtDr1Qf40sLunpkp3eAY3gjDQZ9d%2F7%2F8jN04XEYo%2BWYNnJElT5aiwLbzE%2FAOB%2Fl31S03myWQWfxaCtwxQj6QiDUtrv4pJOZf4XCPy9GQ8lm%2BnH01WNgeluPHd4CEu3H3GLAJcWS5eDiRgODYDxTjmZ%2BP8STYBCJviWYsnd5D1kfE%2FwSIp9aUJk56Gv3EVvfb0AfhkEC11emOM3xDUQoT8xAsyPJVUqLyWQUbeAFAgcDz2GYkpX8iOzPJb4OjcR5Qr73h%2BRenmqsFt7Zapbrf3qMXeheWNmgOU3xMEaIrGYhZpgSQVD%2FQEn%2FxhfKF0qT1a%2BEzk67151wCag5P%2FCKDNAf6%2F%2B0iPP5HB2AHy2pR%2B4S%2BdvCgvJL6bxcKxOe2TDC%2B83EBjqkATIChMqmhFPFX2j3%2BW%2BODrL5x7Nf%2FpIv9EwFnKzxjMKdGwC5Vjpk%2FHFIUsuayrsisA%2Ba4XOin%2BR4%2BUcAt4WIgna7Zqa37gRWf%2Bkdn7LffWIskJ35tDlGwR0EIOi9r7EKJZzqYDj%2B4VEAn1bX2Piyr4ObribMeYqS3hZfTeRRYYrdbZ9aKnoSZWZs%2Bfpl52gYVUo7bEyTHGkcLZPvlUroBNEu7r6H&X-Amz-Signature=f841ba1d9e5a7d4c42da55de55b8cba2f51e3716c222e18af72f6e5f2b8f7d27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWT6QFAV%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIB6NSq49GEh8E0nrN81B5hkEW5M6xXTPyb57IgwCf%2FtiAiBk1%2FWH7g4PSe07vvkgFmxqYAk0%2FzJBxDKoJxwMs1OAlCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMVMqanKyCa91oNuhYKtwDO0%2BAUjqECMOzka2UIzH%2BjHgFj9i07oUCJOFfTySU1wbXjFTg6X9tggWze8aFtFKaZzA5BRta%2F2cejKK77G3MFtT8Z%2BvMoCcH32sMnbahXNFlBujevoyo7JCKIryOL%2BuKat9QUpZT2qgnNgW9r%2Bo3ceY4zEIZT7MHVzVG%2Fdb8UUoQB9beIBPC9PJxxsDrEGnhh1OCAx15Fuf2OMekqWlV0cIZ4lwSN84BhIXVRaZaj3kEbEB22fFFDAEvVxEgT7X4ODikPdfRipBwEtuxt39ofBSJ0fgDemOrGtFgTVrPwaRaKMl2p7klKTxcWeEF8JcMJGozqa%2FEQsso9H22pGaQpe6ofkIuaM33JSOsPCAUlFvc7eU4aqX6dlr7TIqYj1aOLFnkWxQEFrMpjk%2Bb21zjjLMmhCxC2vfJ1EJryoQ5ZdVMOZQQuNCv50kj%2FLnhW3Re9OvP2ZYMpw5pjojMMGM%2BZAr8gxAJV9pGxFg%2BG0k1V6IVmvhKIy7Gfanh3DdKvs%2BPckQnCp3cOI9%2B%2FKQN361UiWMACk%2FRDw%2BHNgNMgAMC9V5g1tDgM1q4RHycSkot7%2FScT%2FPEiW2xrknd%2F7oBLaFv1Ugol2k81l8IJSOa7moFhK8%2BreDNbrOxZ48KJ88w0vrNxAY6pgHixY3pE4BCNcuA409%2B8%2FmRyWnwwBlHOgZChgzrwCqIySNTHXAp3ugk5GjJlAbfleQWYIfHkjv%2BmLxvg47orYInpsyN%2BP8md3sUFJ4i%2BtoLgmvUSI%2B7jklg0%2BByxlNqsXM4VT82ESSPd1ETgIM5%2BubuSeLP2p%2BJn6kwjUOJP%2FK4Zk9UCZsVGq6XA7QYDk6mtBiZcbsRSYwxf%2B0RYnf1IqNehKPPFBWY&X-Amz-Signature=f0eb7064572b30afe893fd2c7423bb010e95cc66c13fec7eb1fc61dd814dd47d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X6SUP2B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDCyUsvl6sRtI%2BmJIO76CZSiTJbNqY5%2BxU6rzN1NGT7YgIgE%2BHnibb0rIGfy%2B3EsYBJ41K5mnC0qNg8QNprZ1H38VAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJjjrzXinAwHcb1meCrcAwO5TA6w%2Bma26jFgISOypI1smyQo9dP%2FL%2Bl0F82cfje5%2B6NDbiVOIhWnCqanH%2FetmgtpVd7B64pUp3hSGIpzKlDW0p651gIIr2XmR5MUu4ds9y4YdIi70JoYyKOBYrewxQSzpBQFcWUCEkSlp%2FNDq1B%2BLrVYP8pE1fl1XN%2F3EL%2F62nsX8zALk2LLvKr5m4b1I4FsVzCwOFLzw%2B2kTts9zQG4lokOeJ9OQwvKgQF5D%2Fw72a5Utth4seALl5fLgMfcj3%2FA4lU%2F7UeaWjb1oYx01uO%2BQrKxfZlyX%2FSpmRiWiGu%2FYj4i0fpaxH%2BDSABJwNdiwscCxhHtmYFZb79Laujj7vazMzHNJ2t6jjvqX%2F%2BrxguVZJErpEDAI5WB5%2F2E%2FPHnuMXP81Cfpx2zqVinxpZCAztAAHelQ0M%2Fff4Rm82MmS4gyYqdfKOsvBiCC%2BEpRTB7fC6RRhH0Mj3gglMpPOem480I97HTQwFPEloRZLKXpRlV99RnYWQb2pcwmuEPSDuH2GhhUpKGwIm7z3uVAZ9cpPsl%2FuTenQgxRBuOZTtxoe0BwG%2BifPbGXyFBNx9cEpeAYfV1sijOiIQKPqR7zq%2FYcyJD5J%2BoHC1FWrDrRqkS%2FLdy03vQXskEeLX8HAaHMOP6zcQGOqUBKJGBzy%2BrsZh2nwwOALgsC4swePzBOR3Pz6uszK1Rx2eZbOsTn0dD6Cv01D7GgsGdaAY5hRAorZupfsYLsh5iRh5DlQqY2pfPJuoP3Vz6Q0E9ulBdU7T56DR%2FzmVdCpC1duIkEU%2BliXJgi6bTlhuYhd1TJujGYDH%2BYmDZJ57p2WOGhU0J7FdL0VrNUwKAif3gKeF%2BA8P%2F0Yx4vry1b7%2F4FFEYNevL&X-Amz-Signature=86ebb186cc26e2b4fb50b0028bca0ad2fb0a5067d30a2c1bfe91de58e51e26b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X6SUP2B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDCyUsvl6sRtI%2BmJIO76CZSiTJbNqY5%2BxU6rzN1NGT7YgIgE%2BHnibb0rIGfy%2B3EsYBJ41K5mnC0qNg8QNprZ1H38VAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJjjrzXinAwHcb1meCrcAwO5TA6w%2Bma26jFgISOypI1smyQo9dP%2FL%2Bl0F82cfje5%2B6NDbiVOIhWnCqanH%2FetmgtpVd7B64pUp3hSGIpzKlDW0p651gIIr2XmR5MUu4ds9y4YdIi70JoYyKOBYrewxQSzpBQFcWUCEkSlp%2FNDq1B%2BLrVYP8pE1fl1XN%2F3EL%2F62nsX8zALk2LLvKr5m4b1I4FsVzCwOFLzw%2B2kTts9zQG4lokOeJ9OQwvKgQF5D%2Fw72a5Utth4seALl5fLgMfcj3%2FA4lU%2F7UeaWjb1oYx01uO%2BQrKxfZlyX%2FSpmRiWiGu%2FYj4i0fpaxH%2BDSABJwNdiwscCxhHtmYFZb79Laujj7vazMzHNJ2t6jjvqX%2F%2BrxguVZJErpEDAI5WB5%2F2E%2FPHnuMXP81Cfpx2zqVinxpZCAztAAHelQ0M%2Fff4Rm82MmS4gyYqdfKOsvBiCC%2BEpRTB7fC6RRhH0Mj3gglMpPOem480I97HTQwFPEloRZLKXpRlV99RnYWQb2pcwmuEPSDuH2GhhUpKGwIm7z3uVAZ9cpPsl%2FuTenQgxRBuOZTtxoe0BwG%2BifPbGXyFBNx9cEpeAYfV1sijOiIQKPqR7zq%2FYcyJD5J%2BoHC1FWrDrRqkS%2FLdy03vQXskEeLX8HAaHMOP6zcQGOqUBKJGBzy%2BrsZh2nwwOALgsC4swePzBOR3Pz6uszK1Rx2eZbOsTn0dD6Cv01D7GgsGdaAY5hRAorZupfsYLsh5iRh5DlQqY2pfPJuoP3Vz6Q0E9ulBdU7T56DR%2FzmVdCpC1duIkEU%2BliXJgi6bTlhuYhd1TJujGYDH%2BYmDZJ57p2WOGhU0J7FdL0VrNUwKAif3gKeF%2BA8P%2F0Yx4vry1b7%2F4FFEYNevL&X-Amz-Signature=8e07f9c13672f4259360bcb3aca34f573c299f36f2903df20e8a8b252c6c4b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WZAOITL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIB5nEp77wzpBRTDuFv%2FvjjO3biu3zEy7LTx30ggzB71SAiBsG7fbiaFtAIxYNqU%2Fapw6YGKDz8wt7G%2FKW2HiAB48NSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMQhFWrTwyA8T85jXCKtwDxlOWuNhmaJ%2BxUdiYhaQsFwTZfNRaCIdzAoWTk2ILul%2Fy7OV82XV4yKYCPVdC8hRrs281SUcZhQfnlWtBSwKuncV4c%2FHj1WsK56QJ5cs7BDUB8Z848MmC5rLqumntvJw56f%2FhMJIoI%2FGOzU%2FgzCCNh5l1S5Vqd0tXYVxO%2FzNlLUPKW0bHzbOdNZ9hntUotXOg8C3ybfYrrFVhSeTA20VsS9Ovu9wmJSc14czGOUrKuQ3Macr1EATkRClI0d0SlYFBWQ0cANDZp57fMUahWfKFC%2FV8Au47RPWFVKNOay75%2BICT%2BQ5rYY7d%2Fq0hHkpzupGD2E%2F2T9ajUOqSvObNN45%2F%2F8FGv0EJn1DpPuoovC1B0R30Zf6oZ1PUuaKuDTMZL3iJJVsGJ1pGmHburWgDfu4C64Sik4rrErHOyFqMJyGYTfAODMDo2Ir28hbSNoE3WKNCx306llPZMCZh7aMdBCqfmubJ7L5jNGSWE0lR9%2FMNI7%2FBXhDxoUPosdQqqruqdaL5FWz932G3MO2abWpclmZVhXbbG2E6OSGI6CcbzQc0F%2BDrFvmwVt0R5Q9BuQkZ9UtbuLGquyMzQ6Co2jA3%2F8uyG%2FB0i4Lqk5azUI5GMVaVvybwyag0FjkWML27mNIw5vvNxAY6pgEqcM7pUAUum2voJL%2BWNVapnE9j28HuMIOHS3oPJEQgrFgZMmbv0pUVT%2BUiEV1wNukR%2F7gmJHeTQwI7B4%2B1JhJ1UCoTfBVPJMewZqvsBFWXIMxqse9e8zIYMnUxpqCFqiy93x044UnJ7ED7CxeMFJpSh92zNNiJXTNI2SRz709YyFW6plJ0yqagCBvqKUNcbyIfYam5Ipxmm6mnKO8NtpRCIYyMGWV0&X-Amz-Signature=3c545e7a907f1507c6d1412c948c136870f7ded655f8f5e9fd20d82ec5308b82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WZAOITL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIB5nEp77wzpBRTDuFv%2FvjjO3biu3zEy7LTx30ggzB71SAiBsG7fbiaFtAIxYNqU%2Fapw6YGKDz8wt7G%2FKW2HiAB48NSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMQhFWrTwyA8T85jXCKtwDxlOWuNhmaJ%2BxUdiYhaQsFwTZfNRaCIdzAoWTk2ILul%2Fy7OV82XV4yKYCPVdC8hRrs281SUcZhQfnlWtBSwKuncV4c%2FHj1WsK56QJ5cs7BDUB8Z848MmC5rLqumntvJw56f%2FhMJIoI%2FGOzU%2FgzCCNh5l1S5Vqd0tXYVxO%2FzNlLUPKW0bHzbOdNZ9hntUotXOg8C3ybfYrrFVhSeTA20VsS9Ovu9wmJSc14czGOUrKuQ3Macr1EATkRClI0d0SlYFBWQ0cANDZp57fMUahWfKFC%2FV8Au47RPWFVKNOay75%2BICT%2BQ5rYY7d%2Fq0hHkpzupGD2E%2F2T9ajUOqSvObNN45%2F%2F8FGv0EJn1DpPuoovC1B0R30Zf6oZ1PUuaKuDTMZL3iJJVsGJ1pGmHburWgDfu4C64Sik4rrErHOyFqMJyGYTfAODMDo2Ir28hbSNoE3WKNCx306llPZMCZh7aMdBCqfmubJ7L5jNGSWE0lR9%2FMNI7%2FBXhDxoUPosdQqqruqdaL5FWz932G3MO2abWpclmZVhXbbG2E6OSGI6CcbzQc0F%2BDrFvmwVt0R5Q9BuQkZ9UtbuLGquyMzQ6Co2jA3%2F8uyG%2FB0i4Lqk5azUI5GMVaVvybwyag0FjkWML27mNIw5vvNxAY6pgEqcM7pUAUum2voJL%2BWNVapnE9j28HuMIOHS3oPJEQgrFgZMmbv0pUVT%2BUiEV1wNukR%2F7gmJHeTQwI7B4%2B1JhJ1UCoTfBVPJMewZqvsBFWXIMxqse9e8zIYMnUxpqCFqiy93x044UnJ7ED7CxeMFJpSh92zNNiJXTNI2SRz709YyFW6plJ0yqagCBvqKUNcbyIfYam5Ipxmm6mnKO8NtpRCIYyMGWV0&X-Amz-Signature=6cc744a2a38953f17c2acf9a331c476dda1af4519b13735a3d2fd9be86251107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WZAOITL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIB5nEp77wzpBRTDuFv%2FvjjO3biu3zEy7LTx30ggzB71SAiBsG7fbiaFtAIxYNqU%2Fapw6YGKDz8wt7G%2FKW2HiAB48NSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMQhFWrTwyA8T85jXCKtwDxlOWuNhmaJ%2BxUdiYhaQsFwTZfNRaCIdzAoWTk2ILul%2Fy7OV82XV4yKYCPVdC8hRrs281SUcZhQfnlWtBSwKuncV4c%2FHj1WsK56QJ5cs7BDUB8Z848MmC5rLqumntvJw56f%2FhMJIoI%2FGOzU%2FgzCCNh5l1S5Vqd0tXYVxO%2FzNlLUPKW0bHzbOdNZ9hntUotXOg8C3ybfYrrFVhSeTA20VsS9Ovu9wmJSc14czGOUrKuQ3Macr1EATkRClI0d0SlYFBWQ0cANDZp57fMUahWfKFC%2FV8Au47RPWFVKNOay75%2BICT%2BQ5rYY7d%2Fq0hHkpzupGD2E%2F2T9ajUOqSvObNN45%2F%2F8FGv0EJn1DpPuoovC1B0R30Zf6oZ1PUuaKuDTMZL3iJJVsGJ1pGmHburWgDfu4C64Sik4rrErHOyFqMJyGYTfAODMDo2Ir28hbSNoE3WKNCx306llPZMCZh7aMdBCqfmubJ7L5jNGSWE0lR9%2FMNI7%2FBXhDxoUPosdQqqruqdaL5FWz932G3MO2abWpclmZVhXbbG2E6OSGI6CcbzQc0F%2BDrFvmwVt0R5Q9BuQkZ9UtbuLGquyMzQ6Co2jA3%2F8uyG%2FB0i4Lqk5azUI5GMVaVvybwyag0FjkWML27mNIw5vvNxAY6pgEqcM7pUAUum2voJL%2BWNVapnE9j28HuMIOHS3oPJEQgrFgZMmbv0pUVT%2BUiEV1wNukR%2F7gmJHeTQwI7B4%2B1JhJ1UCoTfBVPJMewZqvsBFWXIMxqse9e8zIYMnUxpqCFqiy93x044UnJ7ED7CxeMFJpSh92zNNiJXTNI2SRz709YyFW6plJ0yqagCBvqKUNcbyIfYam5Ipxmm6mnKO8NtpRCIYyMGWV0&X-Amz-Signature=fcab42266a9df6096af1f6a19e5a709482a9a87ca539c71dfccfaf37d8f82879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WZAOITL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIB5nEp77wzpBRTDuFv%2FvjjO3biu3zEy7LTx30ggzB71SAiBsG7fbiaFtAIxYNqU%2Fapw6YGKDz8wt7G%2FKW2HiAB48NSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMQhFWrTwyA8T85jXCKtwDxlOWuNhmaJ%2BxUdiYhaQsFwTZfNRaCIdzAoWTk2ILul%2Fy7OV82XV4yKYCPVdC8hRrs281SUcZhQfnlWtBSwKuncV4c%2FHj1WsK56QJ5cs7BDUB8Z848MmC5rLqumntvJw56f%2FhMJIoI%2FGOzU%2FgzCCNh5l1S5Vqd0tXYVxO%2FzNlLUPKW0bHzbOdNZ9hntUotXOg8C3ybfYrrFVhSeTA20VsS9Ovu9wmJSc14czGOUrKuQ3Macr1EATkRClI0d0SlYFBWQ0cANDZp57fMUahWfKFC%2FV8Au47RPWFVKNOay75%2BICT%2BQ5rYY7d%2Fq0hHkpzupGD2E%2F2T9ajUOqSvObNN45%2F%2F8FGv0EJn1DpPuoovC1B0R30Zf6oZ1PUuaKuDTMZL3iJJVsGJ1pGmHburWgDfu4C64Sik4rrErHOyFqMJyGYTfAODMDo2Ir28hbSNoE3WKNCx306llPZMCZh7aMdBCqfmubJ7L5jNGSWE0lR9%2FMNI7%2FBXhDxoUPosdQqqruqdaL5FWz932G3MO2abWpclmZVhXbbG2E6OSGI6CcbzQc0F%2BDrFvmwVt0R5Q9BuQkZ9UtbuLGquyMzQ6Co2jA3%2F8uyG%2FB0i4Lqk5azUI5GMVaVvybwyag0FjkWML27mNIw5vvNxAY6pgEqcM7pUAUum2voJL%2BWNVapnE9j28HuMIOHS3oPJEQgrFgZMmbv0pUVT%2BUiEV1wNukR%2F7gmJHeTQwI7B4%2B1JhJ1UCoTfBVPJMewZqvsBFWXIMxqse9e8zIYMnUxpqCFqiy93x044UnJ7ED7CxeMFJpSh92zNNiJXTNI2SRz709YyFW6plJ0yqagCBvqKUNcbyIfYam5Ipxmm6mnKO8NtpRCIYyMGWV0&X-Amz-Signature=a4bc6656ba2568903bde47bb2a58de59ad6da4701eef1520814fe397290b1d36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WZAOITL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIB5nEp77wzpBRTDuFv%2FvjjO3biu3zEy7LTx30ggzB71SAiBsG7fbiaFtAIxYNqU%2Fapw6YGKDz8wt7G%2FKW2HiAB48NSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMQhFWrTwyA8T85jXCKtwDxlOWuNhmaJ%2BxUdiYhaQsFwTZfNRaCIdzAoWTk2ILul%2Fy7OV82XV4yKYCPVdC8hRrs281SUcZhQfnlWtBSwKuncV4c%2FHj1WsK56QJ5cs7BDUB8Z848MmC5rLqumntvJw56f%2FhMJIoI%2FGOzU%2FgzCCNh5l1S5Vqd0tXYVxO%2FzNlLUPKW0bHzbOdNZ9hntUotXOg8C3ybfYrrFVhSeTA20VsS9Ovu9wmJSc14czGOUrKuQ3Macr1EATkRClI0d0SlYFBWQ0cANDZp57fMUahWfKFC%2FV8Au47RPWFVKNOay75%2BICT%2BQ5rYY7d%2Fq0hHkpzupGD2E%2F2T9ajUOqSvObNN45%2F%2F8FGv0EJn1DpPuoovC1B0R30Zf6oZ1PUuaKuDTMZL3iJJVsGJ1pGmHburWgDfu4C64Sik4rrErHOyFqMJyGYTfAODMDo2Ir28hbSNoE3WKNCx306llPZMCZh7aMdBCqfmubJ7L5jNGSWE0lR9%2FMNI7%2FBXhDxoUPosdQqqruqdaL5FWz932G3MO2abWpclmZVhXbbG2E6OSGI6CcbzQc0F%2BDrFvmwVt0R5Q9BuQkZ9UtbuLGquyMzQ6Co2jA3%2F8uyG%2FB0i4Lqk5azUI5GMVaVvybwyag0FjkWML27mNIw5vvNxAY6pgEqcM7pUAUum2voJL%2BWNVapnE9j28HuMIOHS3oPJEQgrFgZMmbv0pUVT%2BUiEV1wNukR%2F7gmJHeTQwI7B4%2B1JhJ1UCoTfBVPJMewZqvsBFWXIMxqse9e8zIYMnUxpqCFqiy93x044UnJ7ED7CxeMFJpSh92zNNiJXTNI2SRz709YyFW6plJ0yqagCBvqKUNcbyIfYam5Ipxmm6mnKO8NtpRCIYyMGWV0&X-Amz-Signature=29eb1153ec8a2f5e68e8f16b67f5cc0f81c6bb341430eb35573c28534fb5b84d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WZAOITL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIB5nEp77wzpBRTDuFv%2FvjjO3biu3zEy7LTx30ggzB71SAiBsG7fbiaFtAIxYNqU%2Fapw6YGKDz8wt7G%2FKW2HiAB48NSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMQhFWrTwyA8T85jXCKtwDxlOWuNhmaJ%2BxUdiYhaQsFwTZfNRaCIdzAoWTk2ILul%2Fy7OV82XV4yKYCPVdC8hRrs281SUcZhQfnlWtBSwKuncV4c%2FHj1WsK56QJ5cs7BDUB8Z848MmC5rLqumntvJw56f%2FhMJIoI%2FGOzU%2FgzCCNh5l1S5Vqd0tXYVxO%2FzNlLUPKW0bHzbOdNZ9hntUotXOg8C3ybfYrrFVhSeTA20VsS9Ovu9wmJSc14czGOUrKuQ3Macr1EATkRClI0d0SlYFBWQ0cANDZp57fMUahWfKFC%2FV8Au47RPWFVKNOay75%2BICT%2BQ5rYY7d%2Fq0hHkpzupGD2E%2F2T9ajUOqSvObNN45%2F%2F8FGv0EJn1DpPuoovC1B0R30Zf6oZ1PUuaKuDTMZL3iJJVsGJ1pGmHburWgDfu4C64Sik4rrErHOyFqMJyGYTfAODMDo2Ir28hbSNoE3WKNCx306llPZMCZh7aMdBCqfmubJ7L5jNGSWE0lR9%2FMNI7%2FBXhDxoUPosdQqqruqdaL5FWz932G3MO2abWpclmZVhXbbG2E6OSGI6CcbzQc0F%2BDrFvmwVt0R5Q9BuQkZ9UtbuLGquyMzQ6Co2jA3%2F8uyG%2FB0i4Lqk5azUI5GMVaVvybwyag0FjkWML27mNIw5vvNxAY6pgEqcM7pUAUum2voJL%2BWNVapnE9j28HuMIOHS3oPJEQgrFgZMmbv0pUVT%2BUiEV1wNukR%2F7gmJHeTQwI7B4%2B1JhJ1UCoTfBVPJMewZqvsBFWXIMxqse9e8zIYMnUxpqCFqiy93x044UnJ7ED7CxeMFJpSh92zNNiJXTNI2SRz709YyFW6plJ0yqagCBvqKUNcbyIfYam5Ipxmm6mnKO8NtpRCIYyMGWV0&X-Amz-Signature=4d960e6980f3a0fb5a77b4c4f1fc710715dba0d492e7e5c96cf7450305cfe195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WZAOITL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIB5nEp77wzpBRTDuFv%2FvjjO3biu3zEy7LTx30ggzB71SAiBsG7fbiaFtAIxYNqU%2Fapw6YGKDz8wt7G%2FKW2HiAB48NSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMQhFWrTwyA8T85jXCKtwDxlOWuNhmaJ%2BxUdiYhaQsFwTZfNRaCIdzAoWTk2ILul%2Fy7OV82XV4yKYCPVdC8hRrs281SUcZhQfnlWtBSwKuncV4c%2FHj1WsK56QJ5cs7BDUB8Z848MmC5rLqumntvJw56f%2FhMJIoI%2FGOzU%2FgzCCNh5l1S5Vqd0tXYVxO%2FzNlLUPKW0bHzbOdNZ9hntUotXOg8C3ybfYrrFVhSeTA20VsS9Ovu9wmJSc14czGOUrKuQ3Macr1EATkRClI0d0SlYFBWQ0cANDZp57fMUahWfKFC%2FV8Au47RPWFVKNOay75%2BICT%2BQ5rYY7d%2Fq0hHkpzupGD2E%2F2T9ajUOqSvObNN45%2F%2F8FGv0EJn1DpPuoovC1B0R30Zf6oZ1PUuaKuDTMZL3iJJVsGJ1pGmHburWgDfu4C64Sik4rrErHOyFqMJyGYTfAODMDo2Ir28hbSNoE3WKNCx306llPZMCZh7aMdBCqfmubJ7L5jNGSWE0lR9%2FMNI7%2FBXhDxoUPosdQqqruqdaL5FWz932G3MO2abWpclmZVhXbbG2E6OSGI6CcbzQc0F%2BDrFvmwVt0R5Q9BuQkZ9UtbuLGquyMzQ6Co2jA3%2F8uyG%2FB0i4Lqk5azUI5GMVaVvybwyag0FjkWML27mNIw5vvNxAY6pgEqcM7pUAUum2voJL%2BWNVapnE9j28HuMIOHS3oPJEQgrFgZMmbv0pUVT%2BUiEV1wNukR%2F7gmJHeTQwI7B4%2B1JhJ1UCoTfBVPJMewZqvsBFWXIMxqse9e8zIYMnUxpqCFqiy93x044UnJ7ED7CxeMFJpSh92zNNiJXTNI2SRz709YyFW6plJ0yqagCBvqKUNcbyIfYam5Ipxmm6mnKO8NtpRCIYyMGWV0&X-Amz-Signature=fcab42266a9df6096af1f6a19e5a709482a9a87ca539c71dfccfaf37d8f82879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WZAOITL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIB5nEp77wzpBRTDuFv%2FvjjO3biu3zEy7LTx30ggzB71SAiBsG7fbiaFtAIxYNqU%2Fapw6YGKDz8wt7G%2FKW2HiAB48NSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMQhFWrTwyA8T85jXCKtwDxlOWuNhmaJ%2BxUdiYhaQsFwTZfNRaCIdzAoWTk2ILul%2Fy7OV82XV4yKYCPVdC8hRrs281SUcZhQfnlWtBSwKuncV4c%2FHj1WsK56QJ5cs7BDUB8Z848MmC5rLqumntvJw56f%2FhMJIoI%2FGOzU%2FgzCCNh5l1S5Vqd0tXYVxO%2FzNlLUPKW0bHzbOdNZ9hntUotXOg8C3ybfYrrFVhSeTA20VsS9Ovu9wmJSc14czGOUrKuQ3Macr1EATkRClI0d0SlYFBWQ0cANDZp57fMUahWfKFC%2FV8Au47RPWFVKNOay75%2BICT%2BQ5rYY7d%2Fq0hHkpzupGD2E%2F2T9ajUOqSvObNN45%2F%2F8FGv0EJn1DpPuoovC1B0R30Zf6oZ1PUuaKuDTMZL3iJJVsGJ1pGmHburWgDfu4C64Sik4rrErHOyFqMJyGYTfAODMDo2Ir28hbSNoE3WKNCx306llPZMCZh7aMdBCqfmubJ7L5jNGSWE0lR9%2FMNI7%2FBXhDxoUPosdQqqruqdaL5FWz932G3MO2abWpclmZVhXbbG2E6OSGI6CcbzQc0F%2BDrFvmwVt0R5Q9BuQkZ9UtbuLGquyMzQ6Co2jA3%2F8uyG%2FB0i4Lqk5azUI5GMVaVvybwyag0FjkWML27mNIw5vvNxAY6pgEqcM7pUAUum2voJL%2BWNVapnE9j28HuMIOHS3oPJEQgrFgZMmbv0pUVT%2BUiEV1wNukR%2F7gmJHeTQwI7B4%2B1JhJ1UCoTfBVPJMewZqvsBFWXIMxqse9e8zIYMnUxpqCFqiy93x044UnJ7ED7CxeMFJpSh92zNNiJXTNI2SRz709YyFW6plJ0yqagCBvqKUNcbyIfYam5Ipxmm6mnKO8NtpRCIYyMGWV0&X-Amz-Signature=7ff865b20b5d8fc66112d898e22e5b4e23a84d3f1ebb2de2d4f1f27c1fbbaa9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WZAOITL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIB5nEp77wzpBRTDuFv%2FvjjO3biu3zEy7LTx30ggzB71SAiBsG7fbiaFtAIxYNqU%2Fapw6YGKDz8wt7G%2FKW2HiAB48NSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMQhFWrTwyA8T85jXCKtwDxlOWuNhmaJ%2BxUdiYhaQsFwTZfNRaCIdzAoWTk2ILul%2Fy7OV82XV4yKYCPVdC8hRrs281SUcZhQfnlWtBSwKuncV4c%2FHj1WsK56QJ5cs7BDUB8Z848MmC5rLqumntvJw56f%2FhMJIoI%2FGOzU%2FgzCCNh5l1S5Vqd0tXYVxO%2FzNlLUPKW0bHzbOdNZ9hntUotXOg8C3ybfYrrFVhSeTA20VsS9Ovu9wmJSc14czGOUrKuQ3Macr1EATkRClI0d0SlYFBWQ0cANDZp57fMUahWfKFC%2FV8Au47RPWFVKNOay75%2BICT%2BQ5rYY7d%2Fq0hHkpzupGD2E%2F2T9ajUOqSvObNN45%2F%2F8FGv0EJn1DpPuoovC1B0R30Zf6oZ1PUuaKuDTMZL3iJJVsGJ1pGmHburWgDfu4C64Sik4rrErHOyFqMJyGYTfAODMDo2Ir28hbSNoE3WKNCx306llPZMCZh7aMdBCqfmubJ7L5jNGSWE0lR9%2FMNI7%2FBXhDxoUPosdQqqruqdaL5FWz932G3MO2abWpclmZVhXbbG2E6OSGI6CcbzQc0F%2BDrFvmwVt0R5Q9BuQkZ9UtbuLGquyMzQ6Co2jA3%2F8uyG%2FB0i4Lqk5azUI5GMVaVvybwyag0FjkWML27mNIw5vvNxAY6pgEqcM7pUAUum2voJL%2BWNVapnE9j28HuMIOHS3oPJEQgrFgZMmbv0pUVT%2BUiEV1wNukR%2F7gmJHeTQwI7B4%2B1JhJ1UCoTfBVPJMewZqvsBFWXIMxqse9e8zIYMnUxpqCFqiy93x044UnJ7ED7CxeMFJpSh92zNNiJXTNI2SRz709YyFW6plJ0yqagCBvqKUNcbyIfYam5Ipxmm6mnKO8NtpRCIYyMGWV0&X-Amz-Signature=646c172f9b06cfd65f8599fd159c692e030e03729d5f1689ab59069dea80d5fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WZAOITL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIB5nEp77wzpBRTDuFv%2FvjjO3biu3zEy7LTx30ggzB71SAiBsG7fbiaFtAIxYNqU%2Fapw6YGKDz8wt7G%2FKW2HiAB48NSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMQhFWrTwyA8T85jXCKtwDxlOWuNhmaJ%2BxUdiYhaQsFwTZfNRaCIdzAoWTk2ILul%2Fy7OV82XV4yKYCPVdC8hRrs281SUcZhQfnlWtBSwKuncV4c%2FHj1WsK56QJ5cs7BDUB8Z848MmC5rLqumntvJw56f%2FhMJIoI%2FGOzU%2FgzCCNh5l1S5Vqd0tXYVxO%2FzNlLUPKW0bHzbOdNZ9hntUotXOg8C3ybfYrrFVhSeTA20VsS9Ovu9wmJSc14czGOUrKuQ3Macr1EATkRClI0d0SlYFBWQ0cANDZp57fMUahWfKFC%2FV8Au47RPWFVKNOay75%2BICT%2BQ5rYY7d%2Fq0hHkpzupGD2E%2F2T9ajUOqSvObNN45%2F%2F8FGv0EJn1DpPuoovC1B0R30Zf6oZ1PUuaKuDTMZL3iJJVsGJ1pGmHburWgDfu4C64Sik4rrErHOyFqMJyGYTfAODMDo2Ir28hbSNoE3WKNCx306llPZMCZh7aMdBCqfmubJ7L5jNGSWE0lR9%2FMNI7%2FBXhDxoUPosdQqqruqdaL5FWz932G3MO2abWpclmZVhXbbG2E6OSGI6CcbzQc0F%2BDrFvmwVt0R5Q9BuQkZ9UtbuLGquyMzQ6Co2jA3%2F8uyG%2FB0i4Lqk5azUI5GMVaVvybwyag0FjkWML27mNIw5vvNxAY6pgEqcM7pUAUum2voJL%2BWNVapnE9j28HuMIOHS3oPJEQgrFgZMmbv0pUVT%2BUiEV1wNukR%2F7gmJHeTQwI7B4%2B1JhJ1UCoTfBVPJMewZqvsBFWXIMxqse9e8zIYMnUxpqCFqiy93x044UnJ7ED7CxeMFJpSh92zNNiJXTNI2SRz709YyFW6plJ0yqagCBvqKUNcbyIfYam5Ipxmm6mnKO8NtpRCIYyMGWV0&X-Amz-Signature=4ec4db74d6728959020d404519ba4f1391a138f9dfc7cca19e7dd61fa7f53b49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
