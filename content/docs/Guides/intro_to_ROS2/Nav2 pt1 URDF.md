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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHP7M6G%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC1Eh0l0DFkXtTicC27ACJ1EYQNt0D0EotG4Cr1HaApLAIhAOYMyBLWUycXOaUxF0D%2FXTfv5GYJ4%2BIGJAR9PCL5VzNRKv8DCFMQABoMNjM3NDIzMTgzODA1IgxwQJj3Uwd1Y%2Bn3u1Qq3APmYnCRSX23uQZT2V8gQe1FHnJi7tX9jQpGmy%2FCwGOyx8B090sIrWFywNYGOwjeLz%2B0leWwp1oiPEszX%2BXplj8QqAVl8KfmeCkYFKlCTW%2FQOdYXb%2FpHYci2GVK%2FaYTjTTKhVHAU%2Bl12QSLadRNShPFDzwQvgKuD3RiFcqxWz3ipxAQGp20skrXCq5dqq0QOJThMrer4vuNjzX7LfeejXCq9krJm9fydkl2xj5Jr%2FQdRLdeXU9FC5%2BEoF9nj9VC5CghQk%2FTfaprM%2BDt6yfdrGw%2BDvjgJeooldRRplnNHTYVOjML6x2kUYhVKG6yAI%2FOQbIzF6DHC7tAywAjX3GcxTWnQdFWpWARaD%2BMuo4HKH65o5XqrwFvK1DlgyO12xKxSWu3%2F12RXpPvlqpYWc2zbPFm3vsrbLASMQ0dTMbQR9MdHWo%2BnLgYr%2FdccSkmEM9mYp0MCacf80kEYGyFtF0cy4%2BiMRsF1mhVeFag2xLLU%2BgDAUEH%2FrANqlKV06mEUAnOZBeOsjg8MZw7lm1vQSAMsrc1%2B6NpaNxWG%2F%2BlK2yZe%2F5YZD1pnmxVOrFof%2FgGt%2BvF1lqt07BFiZZ7LshsY%2FIPXufaggZ65S7xUIl5zkWChmZjplJpV3L2YOI9UIF%2FEqDDvo%2FrEBjqkAecity%2B3IAIZmk0kxjQdxzsrwFlI2HHwN9ZBWfN9x6cb5utTnCIVyMCK8VWU%2BEpyEHCg%2Be%2BNCyIrxXANIQfahZrS5qRpEc6ceRGv%2FS8pJlQqlnK6YKBIeLxtFqYyDhfzqDtTTyhNqAVaWcwozqiEEy2J%2FuHVSWj%2BWHSqVTy9Y7Ym0SgUg4AP3saPVRuzDcoqkTAX4ehQG2g9stHZTta6pLVMRlov&X-Amz-Signature=2c6e2265fc764f1019539a747bf2d2d312309502a02a951272e9f7c251a4fc43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHP7M6G%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC1Eh0l0DFkXtTicC27ACJ1EYQNt0D0EotG4Cr1HaApLAIhAOYMyBLWUycXOaUxF0D%2FXTfv5GYJ4%2BIGJAR9PCL5VzNRKv8DCFMQABoMNjM3NDIzMTgzODA1IgxwQJj3Uwd1Y%2Bn3u1Qq3APmYnCRSX23uQZT2V8gQe1FHnJi7tX9jQpGmy%2FCwGOyx8B090sIrWFywNYGOwjeLz%2B0leWwp1oiPEszX%2BXplj8QqAVl8KfmeCkYFKlCTW%2FQOdYXb%2FpHYci2GVK%2FaYTjTTKhVHAU%2Bl12QSLadRNShPFDzwQvgKuD3RiFcqxWz3ipxAQGp20skrXCq5dqq0QOJThMrer4vuNjzX7LfeejXCq9krJm9fydkl2xj5Jr%2FQdRLdeXU9FC5%2BEoF9nj9VC5CghQk%2FTfaprM%2BDt6yfdrGw%2BDvjgJeooldRRplnNHTYVOjML6x2kUYhVKG6yAI%2FOQbIzF6DHC7tAywAjX3GcxTWnQdFWpWARaD%2BMuo4HKH65o5XqrwFvK1DlgyO12xKxSWu3%2F12RXpPvlqpYWc2zbPFm3vsrbLASMQ0dTMbQR9MdHWo%2BnLgYr%2FdccSkmEM9mYp0MCacf80kEYGyFtF0cy4%2BiMRsF1mhVeFag2xLLU%2BgDAUEH%2FrANqlKV06mEUAnOZBeOsjg8MZw7lm1vQSAMsrc1%2B6NpaNxWG%2F%2BlK2yZe%2F5YZD1pnmxVOrFof%2FgGt%2BvF1lqt07BFiZZ7LshsY%2FIPXufaggZ65S7xUIl5zkWChmZjplJpV3L2YOI9UIF%2FEqDDvo%2FrEBjqkAecity%2B3IAIZmk0kxjQdxzsrwFlI2HHwN9ZBWfN9x6cb5utTnCIVyMCK8VWU%2BEpyEHCg%2Be%2BNCyIrxXANIQfahZrS5qRpEc6ceRGv%2FS8pJlQqlnK6YKBIeLxtFqYyDhfzqDtTTyhNqAVaWcwozqiEEy2J%2FuHVSWj%2BWHSqVTy9Y7Ym0SgUg4AP3saPVRuzDcoqkTAX4ehQG2g9stHZTta6pLVMRlov&X-Amz-Signature=d23896811d82360dc29cdacc23926467644580fdbb469a6a15e90b466e090a59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHP7M6G%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC1Eh0l0DFkXtTicC27ACJ1EYQNt0D0EotG4Cr1HaApLAIhAOYMyBLWUycXOaUxF0D%2FXTfv5GYJ4%2BIGJAR9PCL5VzNRKv8DCFMQABoMNjM3NDIzMTgzODA1IgxwQJj3Uwd1Y%2Bn3u1Qq3APmYnCRSX23uQZT2V8gQe1FHnJi7tX9jQpGmy%2FCwGOyx8B090sIrWFywNYGOwjeLz%2B0leWwp1oiPEszX%2BXplj8QqAVl8KfmeCkYFKlCTW%2FQOdYXb%2FpHYci2GVK%2FaYTjTTKhVHAU%2Bl12QSLadRNShPFDzwQvgKuD3RiFcqxWz3ipxAQGp20skrXCq5dqq0QOJThMrer4vuNjzX7LfeejXCq9krJm9fydkl2xj5Jr%2FQdRLdeXU9FC5%2BEoF9nj9VC5CghQk%2FTfaprM%2BDt6yfdrGw%2BDvjgJeooldRRplnNHTYVOjML6x2kUYhVKG6yAI%2FOQbIzF6DHC7tAywAjX3GcxTWnQdFWpWARaD%2BMuo4HKH65o5XqrwFvK1DlgyO12xKxSWu3%2F12RXpPvlqpYWc2zbPFm3vsrbLASMQ0dTMbQR9MdHWo%2BnLgYr%2FdccSkmEM9mYp0MCacf80kEYGyFtF0cy4%2BiMRsF1mhVeFag2xLLU%2BgDAUEH%2FrANqlKV06mEUAnOZBeOsjg8MZw7lm1vQSAMsrc1%2B6NpaNxWG%2F%2BlK2yZe%2F5YZD1pnmxVOrFof%2FgGt%2BvF1lqt07BFiZZ7LshsY%2FIPXufaggZ65S7xUIl5zkWChmZjplJpV3L2YOI9UIF%2FEqDDvo%2FrEBjqkAecity%2B3IAIZmk0kxjQdxzsrwFlI2HHwN9ZBWfN9x6cb5utTnCIVyMCK8VWU%2BEpyEHCg%2Be%2BNCyIrxXANIQfahZrS5qRpEc6ceRGv%2FS8pJlQqlnK6YKBIeLxtFqYyDhfzqDtTTyhNqAVaWcwozqiEEy2J%2FuHVSWj%2BWHSqVTy9Y7Ym0SgUg4AP3saPVRuzDcoqkTAX4ehQG2g9stHZTta6pLVMRlov&X-Amz-Signature=3e27c5f53553a04f80727eff01b4aaa273cfa078f10c2c59033257322a222aa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHP7M6G%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC1Eh0l0DFkXtTicC27ACJ1EYQNt0D0EotG4Cr1HaApLAIhAOYMyBLWUycXOaUxF0D%2FXTfv5GYJ4%2BIGJAR9PCL5VzNRKv8DCFMQABoMNjM3NDIzMTgzODA1IgxwQJj3Uwd1Y%2Bn3u1Qq3APmYnCRSX23uQZT2V8gQe1FHnJi7tX9jQpGmy%2FCwGOyx8B090sIrWFywNYGOwjeLz%2B0leWwp1oiPEszX%2BXplj8QqAVl8KfmeCkYFKlCTW%2FQOdYXb%2FpHYci2GVK%2FaYTjTTKhVHAU%2Bl12QSLadRNShPFDzwQvgKuD3RiFcqxWz3ipxAQGp20skrXCq5dqq0QOJThMrer4vuNjzX7LfeejXCq9krJm9fydkl2xj5Jr%2FQdRLdeXU9FC5%2BEoF9nj9VC5CghQk%2FTfaprM%2BDt6yfdrGw%2BDvjgJeooldRRplnNHTYVOjML6x2kUYhVKG6yAI%2FOQbIzF6DHC7tAywAjX3GcxTWnQdFWpWARaD%2BMuo4HKH65o5XqrwFvK1DlgyO12xKxSWu3%2F12RXpPvlqpYWc2zbPFm3vsrbLASMQ0dTMbQR9MdHWo%2BnLgYr%2FdccSkmEM9mYp0MCacf80kEYGyFtF0cy4%2BiMRsF1mhVeFag2xLLU%2BgDAUEH%2FrANqlKV06mEUAnOZBeOsjg8MZw7lm1vQSAMsrc1%2B6NpaNxWG%2F%2BlK2yZe%2F5YZD1pnmxVOrFof%2FgGt%2BvF1lqt07BFiZZ7LshsY%2FIPXufaggZ65S7xUIl5zkWChmZjplJpV3L2YOI9UIF%2FEqDDvo%2FrEBjqkAecity%2B3IAIZmk0kxjQdxzsrwFlI2HHwN9ZBWfN9x6cb5utTnCIVyMCK8VWU%2BEpyEHCg%2Be%2BNCyIrxXANIQfahZrS5qRpEc6ceRGv%2FS8pJlQqlnK6YKBIeLxtFqYyDhfzqDtTTyhNqAVaWcwozqiEEy2J%2FuHVSWj%2BWHSqVTy9Y7Ym0SgUg4AP3saPVRuzDcoqkTAX4ehQG2g9stHZTta6pLVMRlov&X-Amz-Signature=8d743a65d8e25a7f3504f4fe11f3b3ce17c7e10d1389dff5ee3e00195e854457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHP7M6G%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC1Eh0l0DFkXtTicC27ACJ1EYQNt0D0EotG4Cr1HaApLAIhAOYMyBLWUycXOaUxF0D%2FXTfv5GYJ4%2BIGJAR9PCL5VzNRKv8DCFMQABoMNjM3NDIzMTgzODA1IgxwQJj3Uwd1Y%2Bn3u1Qq3APmYnCRSX23uQZT2V8gQe1FHnJi7tX9jQpGmy%2FCwGOyx8B090sIrWFywNYGOwjeLz%2B0leWwp1oiPEszX%2BXplj8QqAVl8KfmeCkYFKlCTW%2FQOdYXb%2FpHYci2GVK%2FaYTjTTKhVHAU%2Bl12QSLadRNShPFDzwQvgKuD3RiFcqxWz3ipxAQGp20skrXCq5dqq0QOJThMrer4vuNjzX7LfeejXCq9krJm9fydkl2xj5Jr%2FQdRLdeXU9FC5%2BEoF9nj9VC5CghQk%2FTfaprM%2BDt6yfdrGw%2BDvjgJeooldRRplnNHTYVOjML6x2kUYhVKG6yAI%2FOQbIzF6DHC7tAywAjX3GcxTWnQdFWpWARaD%2BMuo4HKH65o5XqrwFvK1DlgyO12xKxSWu3%2F12RXpPvlqpYWc2zbPFm3vsrbLASMQ0dTMbQR9MdHWo%2BnLgYr%2FdccSkmEM9mYp0MCacf80kEYGyFtF0cy4%2BiMRsF1mhVeFag2xLLU%2BgDAUEH%2FrANqlKV06mEUAnOZBeOsjg8MZw7lm1vQSAMsrc1%2B6NpaNxWG%2F%2BlK2yZe%2F5YZD1pnmxVOrFof%2FgGt%2BvF1lqt07BFiZZ7LshsY%2FIPXufaggZ65S7xUIl5zkWChmZjplJpV3L2YOI9UIF%2FEqDDvo%2FrEBjqkAecity%2B3IAIZmk0kxjQdxzsrwFlI2HHwN9ZBWfN9x6cb5utTnCIVyMCK8VWU%2BEpyEHCg%2Be%2BNCyIrxXANIQfahZrS5qRpEc6ceRGv%2FS8pJlQqlnK6YKBIeLxtFqYyDhfzqDtTTyhNqAVaWcwozqiEEy2J%2FuHVSWj%2BWHSqVTy9Y7Ym0SgUg4AP3saPVRuzDcoqkTAX4ehQG2g9stHZTta6pLVMRlov&X-Amz-Signature=f38775fed62d94d931c8613f524ccc1472a9f636b67a7e143d2bc95f5a241266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHP7M6G%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC1Eh0l0DFkXtTicC27ACJ1EYQNt0D0EotG4Cr1HaApLAIhAOYMyBLWUycXOaUxF0D%2FXTfv5GYJ4%2BIGJAR9PCL5VzNRKv8DCFMQABoMNjM3NDIzMTgzODA1IgxwQJj3Uwd1Y%2Bn3u1Qq3APmYnCRSX23uQZT2V8gQe1FHnJi7tX9jQpGmy%2FCwGOyx8B090sIrWFywNYGOwjeLz%2B0leWwp1oiPEszX%2BXplj8QqAVl8KfmeCkYFKlCTW%2FQOdYXb%2FpHYci2GVK%2FaYTjTTKhVHAU%2Bl12QSLadRNShPFDzwQvgKuD3RiFcqxWz3ipxAQGp20skrXCq5dqq0QOJThMrer4vuNjzX7LfeejXCq9krJm9fydkl2xj5Jr%2FQdRLdeXU9FC5%2BEoF9nj9VC5CghQk%2FTfaprM%2BDt6yfdrGw%2BDvjgJeooldRRplnNHTYVOjML6x2kUYhVKG6yAI%2FOQbIzF6DHC7tAywAjX3GcxTWnQdFWpWARaD%2BMuo4HKH65o5XqrwFvK1DlgyO12xKxSWu3%2F12RXpPvlqpYWc2zbPFm3vsrbLASMQ0dTMbQR9MdHWo%2BnLgYr%2FdccSkmEM9mYp0MCacf80kEYGyFtF0cy4%2BiMRsF1mhVeFag2xLLU%2BgDAUEH%2FrANqlKV06mEUAnOZBeOsjg8MZw7lm1vQSAMsrc1%2B6NpaNxWG%2F%2BlK2yZe%2F5YZD1pnmxVOrFof%2FgGt%2BvF1lqt07BFiZZ7LshsY%2FIPXufaggZ65S7xUIl5zkWChmZjplJpV3L2YOI9UIF%2FEqDDvo%2FrEBjqkAecity%2B3IAIZmk0kxjQdxzsrwFlI2HHwN9ZBWfN9x6cb5utTnCIVyMCK8VWU%2BEpyEHCg%2Be%2BNCyIrxXANIQfahZrS5qRpEc6ceRGv%2FS8pJlQqlnK6YKBIeLxtFqYyDhfzqDtTTyhNqAVaWcwozqiEEy2J%2FuHVSWj%2BWHSqVTy9Y7Ym0SgUg4AP3saPVRuzDcoqkTAX4ehQG2g9stHZTta6pLVMRlov&X-Amz-Signature=7a539f91621155a37978f1c00c94056605f183c4751349d4f912d350d96e76ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHP7M6G%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC1Eh0l0DFkXtTicC27ACJ1EYQNt0D0EotG4Cr1HaApLAIhAOYMyBLWUycXOaUxF0D%2FXTfv5GYJ4%2BIGJAR9PCL5VzNRKv8DCFMQABoMNjM3NDIzMTgzODA1IgxwQJj3Uwd1Y%2Bn3u1Qq3APmYnCRSX23uQZT2V8gQe1FHnJi7tX9jQpGmy%2FCwGOyx8B090sIrWFywNYGOwjeLz%2B0leWwp1oiPEszX%2BXplj8QqAVl8KfmeCkYFKlCTW%2FQOdYXb%2FpHYci2GVK%2FaYTjTTKhVHAU%2Bl12QSLadRNShPFDzwQvgKuD3RiFcqxWz3ipxAQGp20skrXCq5dqq0QOJThMrer4vuNjzX7LfeejXCq9krJm9fydkl2xj5Jr%2FQdRLdeXU9FC5%2BEoF9nj9VC5CghQk%2FTfaprM%2BDt6yfdrGw%2BDvjgJeooldRRplnNHTYVOjML6x2kUYhVKG6yAI%2FOQbIzF6DHC7tAywAjX3GcxTWnQdFWpWARaD%2BMuo4HKH65o5XqrwFvK1DlgyO12xKxSWu3%2F12RXpPvlqpYWc2zbPFm3vsrbLASMQ0dTMbQR9MdHWo%2BnLgYr%2FdccSkmEM9mYp0MCacf80kEYGyFtF0cy4%2BiMRsF1mhVeFag2xLLU%2BgDAUEH%2FrANqlKV06mEUAnOZBeOsjg8MZw7lm1vQSAMsrc1%2B6NpaNxWG%2F%2BlK2yZe%2F5YZD1pnmxVOrFof%2FgGt%2BvF1lqt07BFiZZ7LshsY%2FIPXufaggZ65S7xUIl5zkWChmZjplJpV3L2YOI9UIF%2FEqDDvo%2FrEBjqkAecity%2B3IAIZmk0kxjQdxzsrwFlI2HHwN9ZBWfN9x6cb5utTnCIVyMCK8VWU%2BEpyEHCg%2Be%2BNCyIrxXANIQfahZrS5qRpEc6ceRGv%2FS8pJlQqlnK6YKBIeLxtFqYyDhfzqDtTTyhNqAVaWcwozqiEEy2J%2FuHVSWj%2BWHSqVTy9Y7Ym0SgUg4AP3saPVRuzDcoqkTAX4ehQG2g9stHZTta6pLVMRlov&X-Amz-Signature=219a5dd55df76b6800c27e03cafcbc2a554e68eba87ef6335ab3a67bd82281e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHP7M6G%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC1Eh0l0DFkXtTicC27ACJ1EYQNt0D0EotG4Cr1HaApLAIhAOYMyBLWUycXOaUxF0D%2FXTfv5GYJ4%2BIGJAR9PCL5VzNRKv8DCFMQABoMNjM3NDIzMTgzODA1IgxwQJj3Uwd1Y%2Bn3u1Qq3APmYnCRSX23uQZT2V8gQe1FHnJi7tX9jQpGmy%2FCwGOyx8B090sIrWFywNYGOwjeLz%2B0leWwp1oiPEszX%2BXplj8QqAVl8KfmeCkYFKlCTW%2FQOdYXb%2FpHYci2GVK%2FaYTjTTKhVHAU%2Bl12QSLadRNShPFDzwQvgKuD3RiFcqxWz3ipxAQGp20skrXCq5dqq0QOJThMrer4vuNjzX7LfeejXCq9krJm9fydkl2xj5Jr%2FQdRLdeXU9FC5%2BEoF9nj9VC5CghQk%2FTfaprM%2BDt6yfdrGw%2BDvjgJeooldRRplnNHTYVOjML6x2kUYhVKG6yAI%2FOQbIzF6DHC7tAywAjX3GcxTWnQdFWpWARaD%2BMuo4HKH65o5XqrwFvK1DlgyO12xKxSWu3%2F12RXpPvlqpYWc2zbPFm3vsrbLASMQ0dTMbQR9MdHWo%2BnLgYr%2FdccSkmEM9mYp0MCacf80kEYGyFtF0cy4%2BiMRsF1mhVeFag2xLLU%2BgDAUEH%2FrANqlKV06mEUAnOZBeOsjg8MZw7lm1vQSAMsrc1%2B6NpaNxWG%2F%2BlK2yZe%2F5YZD1pnmxVOrFof%2FgGt%2BvF1lqt07BFiZZ7LshsY%2FIPXufaggZ65S7xUIl5zkWChmZjplJpV3L2YOI9UIF%2FEqDDvo%2FrEBjqkAecity%2B3IAIZmk0kxjQdxzsrwFlI2HHwN9ZBWfN9x6cb5utTnCIVyMCK8VWU%2BEpyEHCg%2Be%2BNCyIrxXANIQfahZrS5qRpEc6ceRGv%2FS8pJlQqlnK6YKBIeLxtFqYyDhfzqDtTTyhNqAVaWcwozqiEEy2J%2FuHVSWj%2BWHSqVTy9Y7Ym0SgUg4AP3saPVRuzDcoqkTAX4ehQG2g9stHZTta6pLVMRlov&X-Amz-Signature=d317f91cb174082f6402873a8e8a7e8f4974408bb862255cc16a67851f4c84f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHP7M6G%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC1Eh0l0DFkXtTicC27ACJ1EYQNt0D0EotG4Cr1HaApLAIhAOYMyBLWUycXOaUxF0D%2FXTfv5GYJ4%2BIGJAR9PCL5VzNRKv8DCFMQABoMNjM3NDIzMTgzODA1IgxwQJj3Uwd1Y%2Bn3u1Qq3APmYnCRSX23uQZT2V8gQe1FHnJi7tX9jQpGmy%2FCwGOyx8B090sIrWFywNYGOwjeLz%2B0leWwp1oiPEszX%2BXplj8QqAVl8KfmeCkYFKlCTW%2FQOdYXb%2FpHYci2GVK%2FaYTjTTKhVHAU%2Bl12QSLadRNShPFDzwQvgKuD3RiFcqxWz3ipxAQGp20skrXCq5dqq0QOJThMrer4vuNjzX7LfeejXCq9krJm9fydkl2xj5Jr%2FQdRLdeXU9FC5%2BEoF9nj9VC5CghQk%2FTfaprM%2BDt6yfdrGw%2BDvjgJeooldRRplnNHTYVOjML6x2kUYhVKG6yAI%2FOQbIzF6DHC7tAywAjX3GcxTWnQdFWpWARaD%2BMuo4HKH65o5XqrwFvK1DlgyO12xKxSWu3%2F12RXpPvlqpYWc2zbPFm3vsrbLASMQ0dTMbQR9MdHWo%2BnLgYr%2FdccSkmEM9mYp0MCacf80kEYGyFtF0cy4%2BiMRsF1mhVeFag2xLLU%2BgDAUEH%2FrANqlKV06mEUAnOZBeOsjg8MZw7lm1vQSAMsrc1%2B6NpaNxWG%2F%2BlK2yZe%2F5YZD1pnmxVOrFof%2FgGt%2BvF1lqt07BFiZZ7LshsY%2FIPXufaggZ65S7xUIl5zkWChmZjplJpV3L2YOI9UIF%2FEqDDvo%2FrEBjqkAecity%2B3IAIZmk0kxjQdxzsrwFlI2HHwN9ZBWfN9x6cb5utTnCIVyMCK8VWU%2BEpyEHCg%2Be%2BNCyIrxXANIQfahZrS5qRpEc6ceRGv%2FS8pJlQqlnK6YKBIeLxtFqYyDhfzqDtTTyhNqAVaWcwozqiEEy2J%2FuHVSWj%2BWHSqVTy9Y7Ym0SgUg4AP3saPVRuzDcoqkTAX4ehQG2g9stHZTta6pLVMRlov&X-Amz-Signature=8dbf7da6ad4f2191017043bbb275b2c5b9a37d436a1c20e472b9d706c324de41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHP7M6G%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC1Eh0l0DFkXtTicC27ACJ1EYQNt0D0EotG4Cr1HaApLAIhAOYMyBLWUycXOaUxF0D%2FXTfv5GYJ4%2BIGJAR9PCL5VzNRKv8DCFMQABoMNjM3NDIzMTgzODA1IgxwQJj3Uwd1Y%2Bn3u1Qq3APmYnCRSX23uQZT2V8gQe1FHnJi7tX9jQpGmy%2FCwGOyx8B090sIrWFywNYGOwjeLz%2B0leWwp1oiPEszX%2BXplj8QqAVl8KfmeCkYFKlCTW%2FQOdYXb%2FpHYci2GVK%2FaYTjTTKhVHAU%2Bl12QSLadRNShPFDzwQvgKuD3RiFcqxWz3ipxAQGp20skrXCq5dqq0QOJThMrer4vuNjzX7LfeejXCq9krJm9fydkl2xj5Jr%2FQdRLdeXU9FC5%2BEoF9nj9VC5CghQk%2FTfaprM%2BDt6yfdrGw%2BDvjgJeooldRRplnNHTYVOjML6x2kUYhVKG6yAI%2FOQbIzF6DHC7tAywAjX3GcxTWnQdFWpWARaD%2BMuo4HKH65o5XqrwFvK1DlgyO12xKxSWu3%2F12RXpPvlqpYWc2zbPFm3vsrbLASMQ0dTMbQR9MdHWo%2BnLgYr%2FdccSkmEM9mYp0MCacf80kEYGyFtF0cy4%2BiMRsF1mhVeFag2xLLU%2BgDAUEH%2FrANqlKV06mEUAnOZBeOsjg8MZw7lm1vQSAMsrc1%2B6NpaNxWG%2F%2BlK2yZe%2F5YZD1pnmxVOrFof%2FgGt%2BvF1lqt07BFiZZ7LshsY%2FIPXufaggZ65S7xUIl5zkWChmZjplJpV3L2YOI9UIF%2FEqDDvo%2FrEBjqkAecity%2B3IAIZmk0kxjQdxzsrwFlI2HHwN9ZBWfN9x6cb5utTnCIVyMCK8VWU%2BEpyEHCg%2Be%2BNCyIrxXANIQfahZrS5qRpEc6ceRGv%2FS8pJlQqlnK6YKBIeLxtFqYyDhfzqDtTTyhNqAVaWcwozqiEEy2J%2FuHVSWj%2BWHSqVTy9Y7Ym0SgUg4AP3saPVRuzDcoqkTAX4ehQG2g9stHZTta6pLVMRlov&X-Amz-Signature=e8a64aff5a8c1282feca6990b7dbac41efe6b898ea2a076eed800fd3a1836ea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHU5UZ6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDktq3fmeonVHauPZz4koDbxA%2F7OjGyYSAy1dcaxHe8RAiEA8IQkWBz3%2B6MptT%2B3E7qXo9BwAGbLPmf7B1GbPQBNmm0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMD%2BE2FTgi%2B0R0Qa0CrcA1WxAb05jXFppwuhehKNQrpBpr2tcyPNviccw2kDuaLt9Fk3HJ2ZxtmkQD7qKgi2tBmgMxmpv257oOR8exxYSu%2FUmfnsdncRIq3tJpOwSlgnYxkCr0WRt3rW79aAgh62dd0BZ2KrS5nZ9FBMutthm%2F8MXk7weNvJmmFWLR0fie3leuaINb%2FasAb4ntEJfdgtUT5menB0gpRb3TzK4c79D%2Fqbv0Zl6KA9giGFWDVPEbeMF41ZTtmKH1CT49aEhv64jDKG3m2tHzrhLMkM4X%2FXGOA1HpgsF10V9p5T8f%2BvntCJPtJbeZFp1zd7fgpwPBsbB0TC6ZGwJ89xSZAVsX9v%2FpIbtexG4fZpHHztPkV%2FFsVlgeh8JNIr%2Fhkq72o7kE0xv89nHINku9UwUDt7nR9ah6LrBYHJ%2BL%2BOPAiwA5%2BuSXhIYTlk%2FPaY3uNMMu715pFRbCnK653E6YJIEJLMe%2BbWv7xMRastyI16li97kdaHXEHt5kv22eWbF9k1gy%2FMrppW5PKBbQODvpkyfABpXXdDC7RQiuQ%2BOfu6M0G0LmAJyJYD3oKaVpdzzE0EL82BQVt22ChUs6dO8tIhkzDdkQlgyPyyRQPHPXymaeTXnON%2Fj6gaLS7Dh1%2BFG2deH%2F%2BNMI%2Bj%2BsQGOqUBYDAym9tHLl3rCVIdfU3RiDzujz28mASEc29cyhqto3hVdPd49kTthWVjCWGGCWdAHqQV3rN9G1Blc%2FG3w9l5URjVhi71N7fSvsaO1Sn3A460KrxVHRz4jYYQ8G9%2BboCm72XCewDUbcV%2FfMxHqEeSgAhnkY0RGwMG2KAwQMGiRH9UH0eG9gkrSw%2F9MvLZk9SbKIbLWgCy3cU01QXJVdCAb6oIHuxV&X-Amz-Signature=1f2b8113a830934b2abd1a2619b222846e628da1da40f99daca32df6b5256c7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z6KWJSR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCHaFC0cJ0D8FmkMQv%2FrU0GQnfU7YVG1lNsCxMuzSJy%2FAIhAIUSTnAKA0Lr3LfKGXaX%2FAV0cWe9m3B68MlxfiPS2oEJKv8DCFMQABoMNjM3NDIzMTgzODA1Igxvl3Gje5yuzHk4pawq3ANmxH0ji84I6vpUC%2BQqkjw0ZrT8Wegec9R0NFv6YZTcH1ADzEJjJOgefno9kHuVtt%2B8k8s4%2FCyCCifxN2cxo%2BSsH4qs2ogWGnJwees5%2BPlM9aDEgFcSECb1FBk9G60nC1YUwgWboO1Ro6isSbwOmnozC%2Fa%2FF0qIwGmn9b1lDPfi%2F8PvhSFktMIb2E8908yWXpiqnDR19ozDUpNzbyR7lzgxjFV24%2Bdl5ZCB2t1qxW6eU%2BDxBgkTsqEjErLwifHBapgyQbQWH5TmLQ9dm8Gu7v9yvENKccCDWIo%2B4fUyguqD3zDwx98Ok9XYU%2FBKPZx3sLqibSvF7Y9Lr5xUxqTMVj7%2BFuxEail9E8nKpSAUE7SKhJ%2FP%2FDf%2BH6DeaadikVltLXjuD%2Bcbs8sNd4JiI%2FUlxPGr%2BrUUf6HZg35bKIX%2Bzov5SHGniIYuHWXLkGTZdZK%2BtbeMOPBpsKBZI631q7dHD%2Fyyzbyx7lJ56GXhutOBCvHvj1h4az7PoSglrvN%2F7aVsHJJLVV0LG%2FSaoaxE5Y8Ts3%2BHPpbq8GHj%2FQKo5c%2BGAmOihZO6K%2BJ89vwCxLoLKUSVDnZhNKRtRHHE6QoMIHbuzBFDWjwqksug3HAc00mT3LFmWQG9YWMAMLvJrCCy6DDJo%2FrEBjqkASdkHA75H87bt791nksivkWpORvNc18QcbDe%2Fua7CIjRzscSjd0gpwjeHnXjC%2F7gyr7GXsiMjHa4JRuk8KbF8%2BXN%2BBv8ZAhNRfTqVvYA3nLpnul%2F6gTvOx8VFptCiAxY%2FMst%2BHe%2B0ReCnx6QnH%2F%2FmSI5nYB8FvBT7RNgy1PoKx3ikzGT9wy1QKKNBmnQadQmzFH8Mvi4PsMma4ZS5xzTgIGG%2BKD4&X-Amz-Signature=a0e1bd5060891f8f533f7956d08a03a1d1d54ce2fd1143903ab5837f20b13ef5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJBP4W52%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC8if4LyHIFo7iEvUWtHYxnQul5Ow%2BtCeVV2zwYrIklVQIhAOsx%2FY%2FIaiS5ahKzBWxwaTH%2FI05nd519laC0qY4UMyn5Kv8DCFMQABoMNjM3NDIzMTgzODA1IgyKSpuv6XHzlg%2FS%2Fmkq3ANIp%2FMWF7yG%2FJWYRzxKAgcNuh%2FniDGlsjgOA4UVNY4nt65XTJv3%2BfHGdKyvwZZKr8XSNOR3eKVOYEhE5H9Q%2BPPWCt68TkKuNeMRCIS7JVVErrzKUxhbCPhKBFGxRLATB1lPO45xrJi1y8r4dMxE%2BODFsFWRnud5o77LDu%2F96j0peapzjFR212KuYUylbQ6w5%2BDCR8DVx62CCJwIa%2FK1gOEYhu99vDZUryquZTltqh8SrKr2Y%2BTpBewe6Y6O1Z97Ur%2FTC3GYHKBRc9eSDUJ%2BOUp9Lpk2vn%2FuRGsTNbfTU6fndHrdY78L1Yd2SklKsppNR8uVn%2FZeBFU5s203lFtUGUaERfn2GG58qtpTHdy56PqPhw9yWPnUFZb%2BfzZhDYj3YlhhrQjNSvzz8%2BoIX9XKt5WDpUKCHEAEiVRLamLr0hIZB6D0LoW9u8ZcSrNwIBm2YO%2FdbKchE4ubLbAV8D986sh4AZzXgmsYKDncNPvV4DQCSnqbIUEvoLFSYEe2%2FoZqJ7eTrgZ7yOiG1LGcQX5l5LJKrIEOpZ27dZ4FIU1Vn03NKwTXMNM2amHtZvDgFjQycZGsnANnI0R2O6djUlBeyE5ONRZZfJe8gd53jP0KtRr3bSuhEV6FKlA%2Fm7KN4zCDo%2FrEBjqkARnC8aym5cgcALlQyglrWZM9m%2FFiwHMHPt7vjyIGTokxAAU%2BrZjSkAaNsP3JbDc8jOprswlIEAg26EuFKUNayHqJY0OxDrLrAAP5b%2BmhNtZ7Wl6jR%2FnhkuctRmveyULvOZkUZweJlohwvqVbHKDQFsT264ma7sF3tZmV2sd%2BcwYCQa3E2jK1g13j%2FCA57jCOf2lEImXcBszLwn2MYsRNo41svSY7&X-Amz-Signature=165dc740d1be944058d849028cce9ade04fe1c7f564a96afa12059df25d021eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHP7M6G%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC1Eh0l0DFkXtTicC27ACJ1EYQNt0D0EotG4Cr1HaApLAIhAOYMyBLWUycXOaUxF0D%2FXTfv5GYJ4%2BIGJAR9PCL5VzNRKv8DCFMQABoMNjM3NDIzMTgzODA1IgxwQJj3Uwd1Y%2Bn3u1Qq3APmYnCRSX23uQZT2V8gQe1FHnJi7tX9jQpGmy%2FCwGOyx8B090sIrWFywNYGOwjeLz%2B0leWwp1oiPEszX%2BXplj8QqAVl8KfmeCkYFKlCTW%2FQOdYXb%2FpHYci2GVK%2FaYTjTTKhVHAU%2Bl12QSLadRNShPFDzwQvgKuD3RiFcqxWz3ipxAQGp20skrXCq5dqq0QOJThMrer4vuNjzX7LfeejXCq9krJm9fydkl2xj5Jr%2FQdRLdeXU9FC5%2BEoF9nj9VC5CghQk%2FTfaprM%2BDt6yfdrGw%2BDvjgJeooldRRplnNHTYVOjML6x2kUYhVKG6yAI%2FOQbIzF6DHC7tAywAjX3GcxTWnQdFWpWARaD%2BMuo4HKH65o5XqrwFvK1DlgyO12xKxSWu3%2F12RXpPvlqpYWc2zbPFm3vsrbLASMQ0dTMbQR9MdHWo%2BnLgYr%2FdccSkmEM9mYp0MCacf80kEYGyFtF0cy4%2BiMRsF1mhVeFag2xLLU%2BgDAUEH%2FrANqlKV06mEUAnOZBeOsjg8MZw7lm1vQSAMsrc1%2B6NpaNxWG%2F%2BlK2yZe%2F5YZD1pnmxVOrFof%2FgGt%2BvF1lqt07BFiZZ7LshsY%2FIPXufaggZ65S7xUIl5zkWChmZjplJpV3L2YOI9UIF%2FEqDDvo%2FrEBjqkAecity%2B3IAIZmk0kxjQdxzsrwFlI2HHwN9ZBWfN9x6cb5utTnCIVyMCK8VWU%2BEpyEHCg%2Be%2BNCyIrxXANIQfahZrS5qRpEc6ceRGv%2FS8pJlQqlnK6YKBIeLxtFqYyDhfzqDtTTyhNqAVaWcwozqiEEy2J%2FuHVSWj%2BWHSqVTy9Y7Ym0SgUg4AP3saPVRuzDcoqkTAX4ehQG2g9stHZTta6pLVMRlov&X-Amz-Signature=1b9df3e91f2386a622e3926823f4916e5017e8b441d194f60822cb09caed313d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QYELR3X%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDxVbLzvT5gddUaGQLfSlIj4Hn5XT%2BZK8ombo3GmH9wswIgP1DB%2FLsJvZaVXSzas0nwTozOnatYwlQtoEpkeBAIfg8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDItKpFH%2BQI6vX9fM%2FircA3iaYsKjyhv4ffUUBbUMpItMl01dSKbO4wUhSaN%2BBoHIPPT7d7GZiHC5l7lTLXVO9AGegSumGwiw7F50rcL%2BDKwQxq143KIqnzMsN0aIMPwqRujj8Dk0lVlZHrhAiyap813VBWHniw6tuLwwb%2FhTRhE787qcD%2BEqSXTkyuCRFovLDjxI5SbaYlTel7tcNQWqcy9RzLeJF4j3Y0pDse07RGwOxn7oWn45EXioANxv7GVKQqEwqmEXy4njxR6IMNh5rQ%2BG9AjCVFH1dfNNzSFfjG6bw6V%2BMSGT5Y7LbfIiStKejt2igK%2Fxp0X%2BpxEJhZXhYksj6KJTcUCWN2MfMPCRX9yBMmOCf%2F7dJQJLClYe%2BPL5sR%2FyMMbL%2Ft9iicLjdg8FJho3Csysxdi5hs2uQFK5MA4EIzdhroA1keZ9At47CSxTjeUc3Lbtdg7wdNYWbcZTSbWLGA31E7N9NrFi5JaBPIqiCnrRqHJNvNHe52sBIvpY7XpwcXwZTmeP9X%2FzzpqqHxC4P7FU33KbCDY1QhCqU4GtjB1lOsY70V9jj%2B8vSjhkd4JDAFniSIpYtwXgS6eS63VW2yL6cTo0upMDFkFiNzA2bnG9r2b9I3mzsGajoTb%2B6GLVob5%2BzWPrFftJMJ%2Bj%2BsQGOqUB1AcgDgwh8H2r%2FOas4nyqurqs1CImsWYvCBTW6tqbTQOas6P46%2BrFTjJnAepTqpJ3EtJkaWlaNh3ynHBPfa9hUCEyWoTGq6ZPfJZuFMLrveybuTtMRmN31XeIndGrUU5W6%2B2e0fnJkawxxcKlTeGx0ohNJSe9VLT6bguvuaG5HCEkk6igS%2BFUoi5Uc2rWE92xj%2FnF7eZz3A7vxWxJ2%2BCOovku2tT2&X-Amz-Signature=f8d61fcbac4a91240116c1b62277b1197c535e4f57cc6f1660131364b58808f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHP7M6G%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC1Eh0l0DFkXtTicC27ACJ1EYQNt0D0EotG4Cr1HaApLAIhAOYMyBLWUycXOaUxF0D%2FXTfv5GYJ4%2BIGJAR9PCL5VzNRKv8DCFMQABoMNjM3NDIzMTgzODA1IgxwQJj3Uwd1Y%2Bn3u1Qq3APmYnCRSX23uQZT2V8gQe1FHnJi7tX9jQpGmy%2FCwGOyx8B090sIrWFywNYGOwjeLz%2B0leWwp1oiPEszX%2BXplj8QqAVl8KfmeCkYFKlCTW%2FQOdYXb%2FpHYci2GVK%2FaYTjTTKhVHAU%2Bl12QSLadRNShPFDzwQvgKuD3RiFcqxWz3ipxAQGp20skrXCq5dqq0QOJThMrer4vuNjzX7LfeejXCq9krJm9fydkl2xj5Jr%2FQdRLdeXU9FC5%2BEoF9nj9VC5CghQk%2FTfaprM%2BDt6yfdrGw%2BDvjgJeooldRRplnNHTYVOjML6x2kUYhVKG6yAI%2FOQbIzF6DHC7tAywAjX3GcxTWnQdFWpWARaD%2BMuo4HKH65o5XqrwFvK1DlgyO12xKxSWu3%2F12RXpPvlqpYWc2zbPFm3vsrbLASMQ0dTMbQR9MdHWo%2BnLgYr%2FdccSkmEM9mYp0MCacf80kEYGyFtF0cy4%2BiMRsF1mhVeFag2xLLU%2BgDAUEH%2FrANqlKV06mEUAnOZBeOsjg8MZw7lm1vQSAMsrc1%2B6NpaNxWG%2F%2BlK2yZe%2F5YZD1pnmxVOrFof%2FgGt%2BvF1lqt07BFiZZ7LshsY%2FIPXufaggZ65S7xUIl5zkWChmZjplJpV3L2YOI9UIF%2FEqDDvo%2FrEBjqkAecity%2B3IAIZmk0kxjQdxzsrwFlI2HHwN9ZBWfN9x6cb5utTnCIVyMCK8VWU%2BEpyEHCg%2Be%2BNCyIrxXANIQfahZrS5qRpEc6ceRGv%2FS8pJlQqlnK6YKBIeLxtFqYyDhfzqDtTTyhNqAVaWcwozqiEEy2J%2FuHVSWj%2BWHSqVTy9Y7Ym0SgUg4AP3saPVRuzDcoqkTAX4ehQG2g9stHZTta6pLVMRlov&X-Amz-Signature=1f65eb2cd334cd082114d3167315401ec12d46889d38bf81458ae221ef161398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRAXXVCC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDwkU9YjxKLhHOflZwHgoNueuJo6WIfUhrXU%2FJ8hc0rOwIgcD2lYsovse53T0TbJgGYunPsEHb7J3bFG12rttR%2FVpYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKoBLQoJCEKCi7UOLircAwVLnLKsGHhTigb3GK3ph038nsL5tm1XZJV23EWDHpm0Qugbux0iFJ802rV91KAgBOQCNxLIr2ZytFxz5TxCOmZIdQKM3utUR6KPpG9P6tVyub3nYpijDC9lgKExFhhzO1P8HzjRsOik17UM7%2B0iH6X7k1Jk5lfviXxhsyx6H6rKRpZreJh%2FYkktjda65Q5YuFpiN%2BSdMLDUzop7f08iv%2BQCWolkSG8aFQKUU0Rs3wzHRQTzjMKVC2O0fLoQ933ev4ngXLJP6FlU9ng3EdOAo1CIU8VzVB%2FLpzV1LRuKs9ym7CGx3BylEVQdkNbDBf4cX4oGVDuq4hv6nz1ygvvcFJwAGhzm1MoeiY4f6fArXyCJT%2FOn2%2BufFd7QALU4ZFj%2BSJEtfGuQ1vGyB%2FCIqsjXgHN1%2FxdXStotkU0VWiTOmCSAX3k8UhWE%2B38ZY49xQ7jFA%2BfZVSty730G8X099YlFsaaTnLl7LFlL%2Fnjc6UnyEx0dzG%2FdLvLXozdxE7OV7p2Jna4CdGg1D1xWjquupyjKm4jfihsQ93fexzcen2NvxrNFhHnEsHIujRaMY6yM0aqB2Da0trv2JBWfvqk8o7NExRXc0KJBdWFUiWBeZcSxaN4iQ6jO%2Baaimp0KnxwpMNqi%2BsQGOqUBfFLJu7vyyZe31Muya0KLXrUF4ekCuUgALPGBVnEg1ghn%2FgAp0fsaJo%2Bsgx49Sfy9gp9AyG9mGjQG3JoNAEWvEGoXro%2BEi%2BEYDN2HdGpFxyu%2F92KIX4FRx8g6SKtYlAdwJGMs1xNVgRDzW5XAdDx5ZaEom8A1hU9o6ntz0PJLuSs98T2wjc%2BNFcXvlLrrU41mW3YyaG3OziNOqfAUJmiRp5RvpgWA&X-Amz-Signature=10c814e8f5022353b2a5c6feb1a32c2fb0f2c68a457ca15eb9e971a4a54dcb03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHP7M6G%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC1Eh0l0DFkXtTicC27ACJ1EYQNt0D0EotG4Cr1HaApLAIhAOYMyBLWUycXOaUxF0D%2FXTfv5GYJ4%2BIGJAR9PCL5VzNRKv8DCFMQABoMNjM3NDIzMTgzODA1IgxwQJj3Uwd1Y%2Bn3u1Qq3APmYnCRSX23uQZT2V8gQe1FHnJi7tX9jQpGmy%2FCwGOyx8B090sIrWFywNYGOwjeLz%2B0leWwp1oiPEszX%2BXplj8QqAVl8KfmeCkYFKlCTW%2FQOdYXb%2FpHYci2GVK%2FaYTjTTKhVHAU%2Bl12QSLadRNShPFDzwQvgKuD3RiFcqxWz3ipxAQGp20skrXCq5dqq0QOJThMrer4vuNjzX7LfeejXCq9krJm9fydkl2xj5Jr%2FQdRLdeXU9FC5%2BEoF9nj9VC5CghQk%2FTfaprM%2BDt6yfdrGw%2BDvjgJeooldRRplnNHTYVOjML6x2kUYhVKG6yAI%2FOQbIzF6DHC7tAywAjX3GcxTWnQdFWpWARaD%2BMuo4HKH65o5XqrwFvK1DlgyO12xKxSWu3%2F12RXpPvlqpYWc2zbPFm3vsrbLASMQ0dTMbQR9MdHWo%2BnLgYr%2FdccSkmEM9mYp0MCacf80kEYGyFtF0cy4%2BiMRsF1mhVeFag2xLLU%2BgDAUEH%2FrANqlKV06mEUAnOZBeOsjg8MZw7lm1vQSAMsrc1%2B6NpaNxWG%2F%2BlK2yZe%2F5YZD1pnmxVOrFof%2FgGt%2BvF1lqt07BFiZZ7LshsY%2FIPXufaggZ65S7xUIl5zkWChmZjplJpV3L2YOI9UIF%2FEqDDvo%2FrEBjqkAecity%2B3IAIZmk0kxjQdxzsrwFlI2HHwN9ZBWfN9x6cb5utTnCIVyMCK8VWU%2BEpyEHCg%2Be%2BNCyIrxXANIQfahZrS5qRpEc6ceRGv%2FS8pJlQqlnK6YKBIeLxtFqYyDhfzqDtTTyhNqAVaWcwozqiEEy2J%2FuHVSWj%2BWHSqVTy9Y7Ym0SgUg4AP3saPVRuzDcoqkTAX4ehQG2g9stHZTta6pLVMRlov&X-Amz-Signature=74131eb2c89049d80490893ad1c8dd0e05c71ca343605d4952d338d0846a1b43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX2X2LH5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD%2Bp%2BzST58AotVT5U3WtfXNa0ruwwyA6zHMkWH5E%2BKqIQIgVPG3jUFcfExvd7p11I5%2Fg0GX22QZbhAcbtumV3PJSUkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKk8SU%2BamdWoe8yStSrcA%2F22qj5Y0tgZujQzDndYbzlzmP5q523uHy3eI%2BDEa%2BIEv4d3nOtJW%2BEFJ%2Fgwk0ESfze74vFxldjVjEJas0T%2B3stiXEVUJ%2F45N88SHLjDVILnU7rtWvJG9MDRE66eRFuPBNYsN0sYnKYk1sJk3LEi6Pwjh9cVojuYI0xiepgKuBTxpX7iwqgbZDWcZDFuyiegYV10J3UuqA2yXglpFgcA9CNhdtzNBpAhX9CzhqRWbmSPfrdSPwYzlRlrcLU%2B7nCaocogDcGGiymhXtbwGMMlDImWS8wSXGinc1nEsDEn28hiSFBZTDyJYi1OnuLQVsHbT119UFrPaDVXcTXxx2Uv%2FKV1bdZgAGvKDLe5zdQco%2F4Kx3GvLnOqVoJmaKTWwYfWY6fRoyYODTC4kJoYyDAVKDlVFXRpUhwKje1Uenwvz1L9ycaQAsscB%2F2S1k7u9NhEgCcjVv81Lrp5CQGQl7W8RLfJgNx3XaIZkTnnXJK0U6kjh%2By2nHHlqn4GGJRIjQktqn8nTApF3TXw%2B2oN6oT3f8dwDdQA1Qn5JxYWeHbFKp7t4j60btPykH9XDcTYyUOCZmCcd%2BIlFwDHNsvGtPchrRsMcRCOCD3VBUMGYjBJeDUCusVBkPsX7Cx5gpmuMNui%2BsQGOqUByj8vtAiZLtjxolwffT%2F6qcApUV2qlagsWS7dLr3tUvMpiaMN2HwbCA0NlUvlNk%2Botr7x5vLBUjNY7b3%2B0kCYqQ%2BhJ84GXYIfaIjYEtF50CVEQ7mufHnlxHm%2BAXgQIWz2Zw8q%2BMaUA9WpFHbmlx3Ccplpv96tJF%2ByGuhweI5xtt1iic3ON%2BvAaPSPDMdPvtszFwB8u4lCQ83bMTmXUCrRiJ0QGBu%2B&X-Amz-Signature=1ed0c4b8a713ea4fe8b70435f3fc155ba97385d59ab50b0cbd1a177da07d244e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHP7M6G%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC1Eh0l0DFkXtTicC27ACJ1EYQNt0D0EotG4Cr1HaApLAIhAOYMyBLWUycXOaUxF0D%2FXTfv5GYJ4%2BIGJAR9PCL5VzNRKv8DCFMQABoMNjM3NDIzMTgzODA1IgxwQJj3Uwd1Y%2Bn3u1Qq3APmYnCRSX23uQZT2V8gQe1FHnJi7tX9jQpGmy%2FCwGOyx8B090sIrWFywNYGOwjeLz%2B0leWwp1oiPEszX%2BXplj8QqAVl8KfmeCkYFKlCTW%2FQOdYXb%2FpHYci2GVK%2FaYTjTTKhVHAU%2Bl12QSLadRNShPFDzwQvgKuD3RiFcqxWz3ipxAQGp20skrXCq5dqq0QOJThMrer4vuNjzX7LfeejXCq9krJm9fydkl2xj5Jr%2FQdRLdeXU9FC5%2BEoF9nj9VC5CghQk%2FTfaprM%2BDt6yfdrGw%2BDvjgJeooldRRplnNHTYVOjML6x2kUYhVKG6yAI%2FOQbIzF6DHC7tAywAjX3GcxTWnQdFWpWARaD%2BMuo4HKH65o5XqrwFvK1DlgyO12xKxSWu3%2F12RXpPvlqpYWc2zbPFm3vsrbLASMQ0dTMbQR9MdHWo%2BnLgYr%2FdccSkmEM9mYp0MCacf80kEYGyFtF0cy4%2BiMRsF1mhVeFag2xLLU%2BgDAUEH%2FrANqlKV06mEUAnOZBeOsjg8MZw7lm1vQSAMsrc1%2B6NpaNxWG%2F%2BlK2yZe%2F5YZD1pnmxVOrFof%2FgGt%2BvF1lqt07BFiZZ7LshsY%2FIPXufaggZ65S7xUIl5zkWChmZjplJpV3L2YOI9UIF%2FEqDDvo%2FrEBjqkAecity%2B3IAIZmk0kxjQdxzsrwFlI2HHwN9ZBWfN9x6cb5utTnCIVyMCK8VWU%2BEpyEHCg%2Be%2BNCyIrxXANIQfahZrS5qRpEc6ceRGv%2FS8pJlQqlnK6YKBIeLxtFqYyDhfzqDtTTyhNqAVaWcwozqiEEy2J%2FuHVSWj%2BWHSqVTy9Y7Ym0SgUg4AP3saPVRuzDcoqkTAX4ehQG2g9stHZTta6pLVMRlov&X-Amz-Signature=b4c30d07cb5bd542404463621eb1f1ff0a8fe1da56cb8ebce496dd53a4f724d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MGCMLRT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIA%2FyZrU%2Fn5A4N4iAKDYm%2BflO%2Bovbr9awldxce3UBVezcAiEAiIn0x4GwklD1v0IQfX8c3wY5yp3dI8bEejzxFGeVNPkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMLqEhv0J9vqaQc8oircA8FUR3mP%2FWS6GyZI%2BFkZTpJXQPw7OSw2Ugixx1AO7Jas2BJq6DYsdIyf718sT%2B7HJBiv3oXEgUq5WOWECS5iFYUBWdqMsHQh9C2eMOOIQpus0I%2FC4qmRYSG30dlp9GxpbzKRWv8jVWaRmsYvB%2B3uVIQBSoN2wwMEwOlTGJZRPvyF8rqffULUMIl3R3%2FSDQyx8YCUDNY2AB%2BjarB6Oefho9o7GQdopNjXzZgD6ulOqJCL8c38s4W%2BT3kS%2B3wuCLFola59m0%2Fn4jSDR0vVyfMyN7Ns2W6dsT6cZfZHd4qf1pVsu8EdFnAwsrrXv%2B%2B%2FAihFnDrpMiUA1jzTr2Pj27g74UynUa%2FW6XnxB6l1fR0UntL7iknt7%2BvCjXhuNKOjSyKwn9lq7cP5hjzbPiWp0i%2FtrrqEA9i9LjBVizd1vFr6Q9IIL2tjRpW5SE1OQ4CtRQjA5FPuwow%2FaDEnrwHoYmBp1IT9TzVq4f%2BqcePli1VRTYQ3JLBpGIdgV8IwXSyR2v1Hgga%2Baow9lm09TV%2Fo4RF%2Fmo5RAr6c4eBcs41NGB%2BjZZ9cUnEEjmktvaxzr1dLz8VNBcZaXOGtIuH0JziTwGluFsDnJwpLia%2BvvdjaVVXjWmsAatdIRlgWVdBainXeMNui%2BsQGOqUBIP2hH22bZHEr4b1VHJLbsZYykgdDfVt8T4jwWZKlVNMja%2FKkT435LYteoKHsi3tcBQEI1Lrmv3NiVkMeUVE44fGZS102tgtLg7P4PmY46jW0oLML820MaUirlm%2FjtYtIAAnKKg4GkHjLl7VPXToVEIC9YBVY3scGqmfklS4YNxp5vgD30y3tgygVMxB5%2BmwWDekI2ofAb1O8%2BRU4FnF57nUFY2nT&X-Amz-Signature=f4879a3618d64595851ba81dc9bc648f7c24f087b60dcbc9b83145813d000b49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5TUFVDZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC6X%2Bgechp1J5vYwxlv21%2Fp417rhFt1J0pcWxzf7yGmGgIhAMot0E3Ze4oU7W7wP6a9Wo5cdlQEdM9WqDOuAH%2BEIbEeKv8DCFMQABoMNjM3NDIzMTgzODA1IgyKdsgHLFH2vpHfSWYq3AOakMfEhnuUhxaiyRMtSDisNPZWZEiNpZidqqofUljK8BvkSP7M9tO8RK3fUnCQfKUOt8dHd3LLoP9akde%2FWtAoKPoefgfvAeGKjhSnXS%2BvF6IwHOX5jfLb%2Fv07mEoz6y8CJARMhv8PjGc9UtmG4VyQ1reH6yrm0ykQss%2BbNmrjmIeXkpZKu8anIX7%2FPp%2BHSf%2FAttbXBElx6hG4HvjXo1KSQX%2FeYPEv0NOHFnw1x78LhX4ARB9aL6HzTreG619o%2FyLIs%2FSidexu4SqZ1vH5eRHhBl9k0r6QRXwmaZRf4%2BaF%2BR09NAJgsNuE1pKBvivZV1W3VCzkLJSFpCpM7PUH3VSsACWSNb6vJF8VfZZCsyjgMBxGNZGYQHoiUwQvUMZORtZNLuRBK3MLiKAU%2BPxov1l3LF5q6pp2W4FC9AVUGgl2pDGgb0VUWVcQZCbb1GvNy%2FucClYXYVHGr9Azivh%2BfyFaQ5rL4C1A7%2FaEIzsp815R4ZQ1hVPPn9dvTooe1kdMsa%2Be8fiWZhEUAxOwce%2B7Na%2Fp0LEwBzGMSV7Z3bswWFEYCypnz4HhIC9bzyh4cI9yOpRUNLNwMygSMTLUbAVh9rO9rapA6ZiCJiCJYCXCyxa37F%2FTSBmWOvIqjpD6jjC7o%2FrEBjqkAYXnMDu1isCf2ZMjgiQu55uCDwBWl%2BiIQK3FzK2A9Y4Iuu14o71wk7MCskZUvJ9vVHCZffN6jXIRcNIpjYALIA9P2061aDmWgzacSidfELMGlCbIGX2z9WzKd7OfkLPob9gK1X%2B118v3kUh1M88CjBPY%2Beuzat%2FNlmRe9WFUpZUd8D4eZsoY7RC1fSFj876CZR8N%2FZj5TURBGsC%2B4WZ5%2FujxKWbM&X-Amz-Signature=db465644ecaff9f4ab982178f36b20af8159a249246c8fa59aae5f404706e446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EXRKPZW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDMa%2BKTf6j1upl7nRWjbtK4pOt6f81HvS9qZK%2BiEgBRYwIgRWYzACgvJ1HDnGMCgf2m9qwmKtSOBNRQMBaaZECosYEq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDBNapp70WfoLHY2%2BOircA65xgPg5w05oP0wHou4MWBM0NsMChDGRmx7rhazRAthHDSVt1HdJnP5lC6O1c%2BQN2VlTZtGdYlJDtJGTL2CCiKvjNHhFizqAbMm22qYcuC3ftPpxCRhgNq4ZEh0Lc8W%2F83U%2B6S4iaQebRTZx7xXr%2BB7J%2BrkpuEu75eiLGLPp0tK5KhbSraDTTGi6lvFbSMz8vJngpKeeIH1muOsbCb85SEADywZMhFbbOFJR7PpmFSvIixOTiGdW%2FBFCd36MXzlfe3VrG%2B9dcnLgaYvgm%2BYD41tutetgIQ01pryobXK7mVRtvqgajAfhg5y92BeOUo6P%2FhVeB9sYz87Y6f%2BgTn17mybd6UxeSd3B3erQdzp%2FTWV%2F8bNIhc%2FAa7IQOJj3T0QX5ZBnjm9cUu0rnS0Dhi41PTmjTk9Bueez9ZzbzlNPmn3nosWtT7pifSu1%2FFQzFBmcWcns9T%2FLvAYg7KbU9ZZAwe3l8BNbEk%2B43VMB%2B%2B2AgR4XsquSwkLqdJ6BYgEBKz21rF0cSjFYT2NB3WuaYLQJX9DHyBgBoABRllKkep5lDH6Fnfdpqud7sFkZ5uAI7K1SrntoXqrFH9Z8Xvkm20B%2B9yVpvSvaEIQsSE6PbE6TPbGU2J4Rfgi7n8kp1n3TMJ%2Bj%2BsQGOqUBniMBMZomLmPpL%2BQv7PGzuGf0695XAWJMaQyL6HrOXz%2FC9qjRXlnPJVItfUumngMcipguf6%2B%2FM4TwAZugsUET1gBfoE3k2BdAfzZ%2B%2Fqf9Swe5FWr%2FgPsM7hERS9NRUWxsV%2BtX119WeUYL3bf7qR85MnrWvQF2N5m4WiOiRJ1JKjfVfMPlgBUwAXO90FWXiq5iDxYNjh3LkbsCXo4Ll9IVUr2Qw4KG&X-Amz-Signature=ffaf4af77fc3e00c9e6e3d44fb261b86662703fe53790e90a4efa0e35f104463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRR57CPD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEOiUw%2FbFIiSsXZhMtd5IwABnS2A2akoo8IdwcZH6OunAiEAtUxf3pumBGznwmyJcDZ2OZFIuvRdHUCYKzOecNMn2bEq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDB2t8ITSW3TrTz5WbircA4SNvx0fmbVmQ29MgUB3CBYyVcW7oLrVkkaCnm1qHjM%2BE0YO30ikod8YBuUAlgJoFDhAkf9hd42meuAe3vf2KLYyadZ11Ayj%2BYNcD4bry8%2F5p0zFaOyyqXN5yyA5eFo5d4cwBraSpDgKujcfoePQfzZi4Wcljx1BejxpqzYQYbMRDQzbKNDVr%2FDMpW04aFP8mUV79p12WpjcDF8muzMF5C7JOMn2DNc0tDDaopl5el7%2BpJ4l9LYMJID43LJIrQIISQ886yptqSpChtKVBVJciJY9ZPswmrVF3oKnn8rnZ2g%2FXzYjmFQ4AGtIzG8whQPIbiOgJYYgS%2BPoSRI1FajosOAHQyEg2XFt%2FlIo9qYQ1gUuzRfkmxmeqJEFlZyes8%2FSAHkVC2PIQptXZ4tTsSsmWcHDkqT99BXPD4s6rSY78lnpg1iwBSlBWxT%2FL6VfGcodGhvRvFt1TIHB3HI3YyL%2FYJz4KYmB0b8%2FhvBHmXTy07GMji2NYRohA2JMSfNtgdQYvVJnyTxLC%2FBrGWQFvQ2vgAI%2B4hcBhrB2kn7bOwOGtWw%2FIG3fbJ2hPFJSux64Y20ID1GUniaraPAEdLKxbexGyiA1RW3FXkaqhIxsg6G3xEkOjrte58X%2BdFfa95%2BkMOWi%2BsQGOqUBmNBHQ%2FkWOSvjHB1lhssl5SPdn70HQPXlaXfnPYrulLd9l3d6xZGgR7iihmT6wgkwQNQ9L4tNnqpbrBOMzAI86Zz8ce0QZBniaEnm%2FQa77dIlRaDgPSN%2FdZ4isOFpOfEawf2PZyuOFYfBFgk%2FANxbosNyXOc8pUieKZaockcF%2FIeq2v08EgoLwHoBUlaNRAH5%2BfXwt4wA%2FU3X59hOPDaVbyMkOBt0&X-Amz-Signature=4db92a77f8627e3004d613a5e30b63aedd6fa7d9c12f529565dca364ef9afcd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJILFLNK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIHGI%2BwVg1HYVtfGxwZO1fjDPsJvli%2BITICV1rY1SWWSKAiEAyHz6MVzdw8Z0riy7eNiRr%2Fl5LbPvlS6oKR2QFN%2FOsckq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGSWt41iyzCyJ7kHyircA4LZslufQhFclCvBSXmuQyZug%2BRuJlKpKfoP%2F8rA%2BuTdHXSxlPEPPWQJTaPHiK%2Bh2YAG6gIvIiO8d6WWaho25GH5NQ0NakVigZsVXLuHuGS9SYhUCOIIk53Y%2BK7qIxY5BgP6EJ8cbHJ3h%2FCCfI3wf9THUIf2PSfUxhgNRlF5c0xffzE1FPegXjnoAMILEZ9jmYBLe46ctuiXv92yGDosCrkeFFaQpwnUuqT4FNwEsl30NfNScMiU0ymkQRxOtJbdZQTqIScC25Au6XH39iPKrDRLs5IOLICqUpUu%2BIojM%2FN7xBuE0mtQJKaazhzjrgZd0%2FMC6l1QLMD2bzx73I3YTjqGGKeK0s%2FC5oynMVgX%2BuXGvV9feJVgqEj73YpTd%2BHzfF8scB6k75Ew8zdew6OPZ81GE8YYPZ93uO11JD%2FFjqFPCVBBgMG%2FUj%2BekezCt9ng5P4P3gE3BXO0kxbQFUlJ3Qc0gYEG58Yh3Sj6fscrOCPtb4qpbQrTWo3jHEZV%2FLMTA5%2BT%2FhVz9bqHNGgF3hJx%2Bm5ksq1pIlFa4ceehCr4P3RUI7HZMhqjTtvUTyo0dw%2FIfYLZi23Ea%2FS8U9Z3b0Czk3sJRnlvF0muCW%2FJxB7mnrX1loM4GzGoEzT7Ug%2FsMPaj%2BsQGOqUBN%2BnX3W%2FRCnOwEa2GfWxiQy%2FiCZCNQn0CgOe9XRDE1TRj3JEM7E3Off%2B0AMJxU1bGACA9A1%2FwDb6V%2Fzl5rnVMWmqgo5Rr2p8lgstKiIj26XUIIbv2O1UplNdSmdQzTb8URZluj2ww19OlT5vO1aeW6j8%2BjLxFhWx357XR45sCRj7OabxBGccPw927rfDyhmRbNLc0VWowbtXEW4hz46cVfb%2BsF%2Fkq&X-Amz-Signature=34b3e67a71ed205166c00434d6d093aca469118b0cdf1ffeb003ad0e762f4c08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHP7M6G%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC1Eh0l0DFkXtTicC27ACJ1EYQNt0D0EotG4Cr1HaApLAIhAOYMyBLWUycXOaUxF0D%2FXTfv5GYJ4%2BIGJAR9PCL5VzNRKv8DCFMQABoMNjM3NDIzMTgzODA1IgxwQJj3Uwd1Y%2Bn3u1Qq3APmYnCRSX23uQZT2V8gQe1FHnJi7tX9jQpGmy%2FCwGOyx8B090sIrWFywNYGOwjeLz%2B0leWwp1oiPEszX%2BXplj8QqAVl8KfmeCkYFKlCTW%2FQOdYXb%2FpHYci2GVK%2FaYTjTTKhVHAU%2Bl12QSLadRNShPFDzwQvgKuD3RiFcqxWz3ipxAQGp20skrXCq5dqq0QOJThMrer4vuNjzX7LfeejXCq9krJm9fydkl2xj5Jr%2FQdRLdeXU9FC5%2BEoF9nj9VC5CghQk%2FTfaprM%2BDt6yfdrGw%2BDvjgJeooldRRplnNHTYVOjML6x2kUYhVKG6yAI%2FOQbIzF6DHC7tAywAjX3GcxTWnQdFWpWARaD%2BMuo4HKH65o5XqrwFvK1DlgyO12xKxSWu3%2F12RXpPvlqpYWc2zbPFm3vsrbLASMQ0dTMbQR9MdHWo%2BnLgYr%2FdccSkmEM9mYp0MCacf80kEYGyFtF0cy4%2BiMRsF1mhVeFag2xLLU%2BgDAUEH%2FrANqlKV06mEUAnOZBeOsjg8MZw7lm1vQSAMsrc1%2B6NpaNxWG%2F%2BlK2yZe%2F5YZD1pnmxVOrFof%2FgGt%2BvF1lqt07BFiZZ7LshsY%2FIPXufaggZ65S7xUIl5zkWChmZjplJpV3L2YOI9UIF%2FEqDDvo%2FrEBjqkAecity%2B3IAIZmk0kxjQdxzsrwFlI2HHwN9ZBWfN9x6cb5utTnCIVyMCK8VWU%2BEpyEHCg%2Be%2BNCyIrxXANIQfahZrS5qRpEc6ceRGv%2FS8pJlQqlnK6YKBIeLxtFqYyDhfzqDtTTyhNqAVaWcwozqiEEy2J%2FuHVSWj%2BWHSqVTy9Y7Ym0SgUg4AP3saPVRuzDcoqkTAX4ehQG2g9stHZTta6pLVMRlov&X-Amz-Signature=3d63ffbf0017213ad7af9c12708c99d92d5b62366be43484fbc0d18980701caf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHP7M6G%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC1Eh0l0DFkXtTicC27ACJ1EYQNt0D0EotG4Cr1HaApLAIhAOYMyBLWUycXOaUxF0D%2FXTfv5GYJ4%2BIGJAR9PCL5VzNRKv8DCFMQABoMNjM3NDIzMTgzODA1IgxwQJj3Uwd1Y%2Bn3u1Qq3APmYnCRSX23uQZT2V8gQe1FHnJi7tX9jQpGmy%2FCwGOyx8B090sIrWFywNYGOwjeLz%2B0leWwp1oiPEszX%2BXplj8QqAVl8KfmeCkYFKlCTW%2FQOdYXb%2FpHYci2GVK%2FaYTjTTKhVHAU%2Bl12QSLadRNShPFDzwQvgKuD3RiFcqxWz3ipxAQGp20skrXCq5dqq0QOJThMrer4vuNjzX7LfeejXCq9krJm9fydkl2xj5Jr%2FQdRLdeXU9FC5%2BEoF9nj9VC5CghQk%2FTfaprM%2BDt6yfdrGw%2BDvjgJeooldRRplnNHTYVOjML6x2kUYhVKG6yAI%2FOQbIzF6DHC7tAywAjX3GcxTWnQdFWpWARaD%2BMuo4HKH65o5XqrwFvK1DlgyO12xKxSWu3%2F12RXpPvlqpYWc2zbPFm3vsrbLASMQ0dTMbQR9MdHWo%2BnLgYr%2FdccSkmEM9mYp0MCacf80kEYGyFtF0cy4%2BiMRsF1mhVeFag2xLLU%2BgDAUEH%2FrANqlKV06mEUAnOZBeOsjg8MZw7lm1vQSAMsrc1%2B6NpaNxWG%2F%2BlK2yZe%2F5YZD1pnmxVOrFof%2FgGt%2BvF1lqt07BFiZZ7LshsY%2FIPXufaggZ65S7xUIl5zkWChmZjplJpV3L2YOI9UIF%2FEqDDvo%2FrEBjqkAecity%2B3IAIZmk0kxjQdxzsrwFlI2HHwN9ZBWfN9x6cb5utTnCIVyMCK8VWU%2BEpyEHCg%2Be%2BNCyIrxXANIQfahZrS5qRpEc6ceRGv%2FS8pJlQqlnK6YKBIeLxtFqYyDhfzqDtTTyhNqAVaWcwozqiEEy2J%2FuHVSWj%2BWHSqVTy9Y7Ym0SgUg4AP3saPVRuzDcoqkTAX4ehQG2g9stHZTta6pLVMRlov&X-Amz-Signature=db4589242f85a14a3cd03bb28b1d4493591d62515b44160e4a450370839883bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKKVBMMU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIFw8NO5Q3xY5s4SLVrOIQMQX5rjg4lVB9FGXf2vvuMlkAiEAyRbiH8k8A3YVObAAzH1tWf8r6M4jiA78g%2FNc5tprgn0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGSk79%2B3rIFzNGI95yrcA3XEe3phc614WJfMYKQF%2FHIueVW1wmUtEGrkisovn4XWLQieHUOKb4EM8U8IokfTIIisC2j9gEFBNmPgkKZrdf%2BzVPUY1pAFoOHBqTe76mPxlhijEC7JNjrn7VEoEL8avh9in2XWfb0aT1vAYxHDAdjZKfRAxJO0VCwtaqbb7HiF0QcSAcIMQEtp3IB3sar1aTdWwNRRo24v0x85TrFDEhFtECo8ltuJJfLOlDvb7f8wBNoABf3XCB%2BlB6MSp%2BZVEzjej5u9lvQSb%2FSsqH7xHZHokGaGyYV%2BST2ejR1kZDf0MdfJ1sLS6iuRtNKQGJFaIx23ys2fQQDrAS1cSG6KLEkWutAzfbmRpNwzD%2BxWtBd5qlmPjIjuboTg9ku4EQrpZC3y72Eqw1FyFYandYEDrP8G683TK%2FvG7FpuFq4nK0RYChCnTO3IrA%2ByI8NL800otIJ6RnkNh3yeu1uTN3FlYwcdmWh6eu%2F5ofymgJsc7abY%2FXkRdIIMh80YOWc83sRKCjsLAWhZu3ty3Y5hD2ra%2BdPLjHjMgy%2Fo%2BcPLRTkOV%2BgZ0P5khUU4Irm3hA8oBQhhdCjHz%2FgBzIIUKoFcdcsW6kBLhb457lJYslVRPndSKVULp%2FW0Uno3l%2BgbUYv6MNmi%2BsQGOqUBD8y2tIifaFLElUEmcA3OicHTOPHHRF1Qp9Z30J%2F7fSatVq3iFYRpXdTjM2gxv8y2%2FL6x7btVE3hdoFeOvWmM3wZlpZRXxjf2zMHlAdWKQvVz6QtYerTpuULpghVLrJni95%2FeM45bHHHnFJKLqbmHn%2BzMgOREpvdknZcfEcJaJKRqqrgZZrldqUEjI9RmHJBtzc1Gyq%2FSV0nTvseLr7oEUbGaV706&X-Amz-Signature=b2f4cbe4ae1a724c30210f7f55a2c651fe8df525fc5df5ba9ec8201522b9d8dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKKVBMMU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIFw8NO5Q3xY5s4SLVrOIQMQX5rjg4lVB9FGXf2vvuMlkAiEAyRbiH8k8A3YVObAAzH1tWf8r6M4jiA78g%2FNc5tprgn0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGSk79%2B3rIFzNGI95yrcA3XEe3phc614WJfMYKQF%2FHIueVW1wmUtEGrkisovn4XWLQieHUOKb4EM8U8IokfTIIisC2j9gEFBNmPgkKZrdf%2BzVPUY1pAFoOHBqTe76mPxlhijEC7JNjrn7VEoEL8avh9in2XWfb0aT1vAYxHDAdjZKfRAxJO0VCwtaqbb7HiF0QcSAcIMQEtp3IB3sar1aTdWwNRRo24v0x85TrFDEhFtECo8ltuJJfLOlDvb7f8wBNoABf3XCB%2BlB6MSp%2BZVEzjej5u9lvQSb%2FSsqH7xHZHokGaGyYV%2BST2ejR1kZDf0MdfJ1sLS6iuRtNKQGJFaIx23ys2fQQDrAS1cSG6KLEkWutAzfbmRpNwzD%2BxWtBd5qlmPjIjuboTg9ku4EQrpZC3y72Eqw1FyFYandYEDrP8G683TK%2FvG7FpuFq4nK0RYChCnTO3IrA%2ByI8NL800otIJ6RnkNh3yeu1uTN3FlYwcdmWh6eu%2F5ofymgJsc7abY%2FXkRdIIMh80YOWc83sRKCjsLAWhZu3ty3Y5hD2ra%2BdPLjHjMgy%2Fo%2BcPLRTkOV%2BgZ0P5khUU4Irm3hA8oBQhhdCjHz%2FgBzIIUKoFcdcsW6kBLhb457lJYslVRPndSKVULp%2FW0Uno3l%2BgbUYv6MNmi%2BsQGOqUBD8y2tIifaFLElUEmcA3OicHTOPHHRF1Qp9Z30J%2F7fSatVq3iFYRpXdTjM2gxv8y2%2FL6x7btVE3hdoFeOvWmM3wZlpZRXxjf2zMHlAdWKQvVz6QtYerTpuULpghVLrJni95%2FeM45bHHHnFJKLqbmHn%2BzMgOREpvdknZcfEcJaJKRqqrgZZrldqUEjI9RmHJBtzc1Gyq%2FSV0nTvseLr7oEUbGaV706&X-Amz-Signature=4b533ee0e441f278d02a52e7f10fc5c55ea28f32a3b5952c7310f1f208cde0b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKKVBMMU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIFw8NO5Q3xY5s4SLVrOIQMQX5rjg4lVB9FGXf2vvuMlkAiEAyRbiH8k8A3YVObAAzH1tWf8r6M4jiA78g%2FNc5tprgn0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGSk79%2B3rIFzNGI95yrcA3XEe3phc614WJfMYKQF%2FHIueVW1wmUtEGrkisovn4XWLQieHUOKb4EM8U8IokfTIIisC2j9gEFBNmPgkKZrdf%2BzVPUY1pAFoOHBqTe76mPxlhijEC7JNjrn7VEoEL8avh9in2XWfb0aT1vAYxHDAdjZKfRAxJO0VCwtaqbb7HiF0QcSAcIMQEtp3IB3sar1aTdWwNRRo24v0x85TrFDEhFtECo8ltuJJfLOlDvb7f8wBNoABf3XCB%2BlB6MSp%2BZVEzjej5u9lvQSb%2FSsqH7xHZHokGaGyYV%2BST2ejR1kZDf0MdfJ1sLS6iuRtNKQGJFaIx23ys2fQQDrAS1cSG6KLEkWutAzfbmRpNwzD%2BxWtBd5qlmPjIjuboTg9ku4EQrpZC3y72Eqw1FyFYandYEDrP8G683TK%2FvG7FpuFq4nK0RYChCnTO3IrA%2ByI8NL800otIJ6RnkNh3yeu1uTN3FlYwcdmWh6eu%2F5ofymgJsc7abY%2FXkRdIIMh80YOWc83sRKCjsLAWhZu3ty3Y5hD2ra%2BdPLjHjMgy%2Fo%2BcPLRTkOV%2BgZ0P5khUU4Irm3hA8oBQhhdCjHz%2FgBzIIUKoFcdcsW6kBLhb457lJYslVRPndSKVULp%2FW0Uno3l%2BgbUYv6MNmi%2BsQGOqUBD8y2tIifaFLElUEmcA3OicHTOPHHRF1Qp9Z30J%2F7fSatVq3iFYRpXdTjM2gxv8y2%2FL6x7btVE3hdoFeOvWmM3wZlpZRXxjf2zMHlAdWKQvVz6QtYerTpuULpghVLrJni95%2FeM45bHHHnFJKLqbmHn%2BzMgOREpvdknZcfEcJaJKRqqrgZZrldqUEjI9RmHJBtzc1Gyq%2FSV0nTvseLr7oEUbGaV706&X-Amz-Signature=57f62803d4b0570c3eed93aaf371ba67d0d12cc8c73e0a7d39c8aeae8ef1cfda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKKVBMMU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIFw8NO5Q3xY5s4SLVrOIQMQX5rjg4lVB9FGXf2vvuMlkAiEAyRbiH8k8A3YVObAAzH1tWf8r6M4jiA78g%2FNc5tprgn0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGSk79%2B3rIFzNGI95yrcA3XEe3phc614WJfMYKQF%2FHIueVW1wmUtEGrkisovn4XWLQieHUOKb4EM8U8IokfTIIisC2j9gEFBNmPgkKZrdf%2BzVPUY1pAFoOHBqTe76mPxlhijEC7JNjrn7VEoEL8avh9in2XWfb0aT1vAYxHDAdjZKfRAxJO0VCwtaqbb7HiF0QcSAcIMQEtp3IB3sar1aTdWwNRRo24v0x85TrFDEhFtECo8ltuJJfLOlDvb7f8wBNoABf3XCB%2BlB6MSp%2BZVEzjej5u9lvQSb%2FSsqH7xHZHokGaGyYV%2BST2ejR1kZDf0MdfJ1sLS6iuRtNKQGJFaIx23ys2fQQDrAS1cSG6KLEkWutAzfbmRpNwzD%2BxWtBd5qlmPjIjuboTg9ku4EQrpZC3y72Eqw1FyFYandYEDrP8G683TK%2FvG7FpuFq4nK0RYChCnTO3IrA%2ByI8NL800otIJ6RnkNh3yeu1uTN3FlYwcdmWh6eu%2F5ofymgJsc7abY%2FXkRdIIMh80YOWc83sRKCjsLAWhZu3ty3Y5hD2ra%2BdPLjHjMgy%2Fo%2BcPLRTkOV%2BgZ0P5khUU4Irm3hA8oBQhhdCjHz%2FgBzIIUKoFcdcsW6kBLhb457lJYslVRPndSKVULp%2FW0Uno3l%2BgbUYv6MNmi%2BsQGOqUBD8y2tIifaFLElUEmcA3OicHTOPHHRF1Qp9Z30J%2F7fSatVq3iFYRpXdTjM2gxv8y2%2FL6x7btVE3hdoFeOvWmM3wZlpZRXxjf2zMHlAdWKQvVz6QtYerTpuULpghVLrJni95%2FeM45bHHHnFJKLqbmHn%2BzMgOREpvdknZcfEcJaJKRqqrgZZrldqUEjI9RmHJBtzc1Gyq%2FSV0nTvseLr7oEUbGaV706&X-Amz-Signature=7e5f0b2cb7e976886b3817f79b6c0ed6e0072ada2ea0be137d41d63f7731cff5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKKVBMMU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIFw8NO5Q3xY5s4SLVrOIQMQX5rjg4lVB9FGXf2vvuMlkAiEAyRbiH8k8A3YVObAAzH1tWf8r6M4jiA78g%2FNc5tprgn0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGSk79%2B3rIFzNGI95yrcA3XEe3phc614WJfMYKQF%2FHIueVW1wmUtEGrkisovn4XWLQieHUOKb4EM8U8IokfTIIisC2j9gEFBNmPgkKZrdf%2BzVPUY1pAFoOHBqTe76mPxlhijEC7JNjrn7VEoEL8avh9in2XWfb0aT1vAYxHDAdjZKfRAxJO0VCwtaqbb7HiF0QcSAcIMQEtp3IB3sar1aTdWwNRRo24v0x85TrFDEhFtECo8ltuJJfLOlDvb7f8wBNoABf3XCB%2BlB6MSp%2BZVEzjej5u9lvQSb%2FSsqH7xHZHokGaGyYV%2BST2ejR1kZDf0MdfJ1sLS6iuRtNKQGJFaIx23ys2fQQDrAS1cSG6KLEkWutAzfbmRpNwzD%2BxWtBd5qlmPjIjuboTg9ku4EQrpZC3y72Eqw1FyFYandYEDrP8G683TK%2FvG7FpuFq4nK0RYChCnTO3IrA%2ByI8NL800otIJ6RnkNh3yeu1uTN3FlYwcdmWh6eu%2F5ofymgJsc7abY%2FXkRdIIMh80YOWc83sRKCjsLAWhZu3ty3Y5hD2ra%2BdPLjHjMgy%2Fo%2BcPLRTkOV%2BgZ0P5khUU4Irm3hA8oBQhhdCjHz%2FgBzIIUKoFcdcsW6kBLhb457lJYslVRPndSKVULp%2FW0Uno3l%2BgbUYv6MNmi%2BsQGOqUBD8y2tIifaFLElUEmcA3OicHTOPHHRF1Qp9Z30J%2F7fSatVq3iFYRpXdTjM2gxv8y2%2FL6x7btVE3hdoFeOvWmM3wZlpZRXxjf2zMHlAdWKQvVz6QtYerTpuULpghVLrJni95%2FeM45bHHHnFJKLqbmHn%2BzMgOREpvdknZcfEcJaJKRqqrgZZrldqUEjI9RmHJBtzc1Gyq%2FSV0nTvseLr7oEUbGaV706&X-Amz-Signature=bcac39a885bff7bcf0a963d91e577b6c36727592d1df89e709cce57a823be9fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKKVBMMU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIFw8NO5Q3xY5s4SLVrOIQMQX5rjg4lVB9FGXf2vvuMlkAiEAyRbiH8k8A3YVObAAzH1tWf8r6M4jiA78g%2FNc5tprgn0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGSk79%2B3rIFzNGI95yrcA3XEe3phc614WJfMYKQF%2FHIueVW1wmUtEGrkisovn4XWLQieHUOKb4EM8U8IokfTIIisC2j9gEFBNmPgkKZrdf%2BzVPUY1pAFoOHBqTe76mPxlhijEC7JNjrn7VEoEL8avh9in2XWfb0aT1vAYxHDAdjZKfRAxJO0VCwtaqbb7HiF0QcSAcIMQEtp3IB3sar1aTdWwNRRo24v0x85TrFDEhFtECo8ltuJJfLOlDvb7f8wBNoABf3XCB%2BlB6MSp%2BZVEzjej5u9lvQSb%2FSsqH7xHZHokGaGyYV%2BST2ejR1kZDf0MdfJ1sLS6iuRtNKQGJFaIx23ys2fQQDrAS1cSG6KLEkWutAzfbmRpNwzD%2BxWtBd5qlmPjIjuboTg9ku4EQrpZC3y72Eqw1FyFYandYEDrP8G683TK%2FvG7FpuFq4nK0RYChCnTO3IrA%2ByI8NL800otIJ6RnkNh3yeu1uTN3FlYwcdmWh6eu%2F5ofymgJsc7abY%2FXkRdIIMh80YOWc83sRKCjsLAWhZu3ty3Y5hD2ra%2BdPLjHjMgy%2Fo%2BcPLRTkOV%2BgZ0P5khUU4Irm3hA8oBQhhdCjHz%2FgBzIIUKoFcdcsW6kBLhb457lJYslVRPndSKVULp%2FW0Uno3l%2BgbUYv6MNmi%2BsQGOqUBD8y2tIifaFLElUEmcA3OicHTOPHHRF1Qp9Z30J%2F7fSatVq3iFYRpXdTjM2gxv8y2%2FL6x7btVE3hdoFeOvWmM3wZlpZRXxjf2zMHlAdWKQvVz6QtYerTpuULpghVLrJni95%2FeM45bHHHnFJKLqbmHn%2BzMgOREpvdknZcfEcJaJKRqqrgZZrldqUEjI9RmHJBtzc1Gyq%2FSV0nTvseLr7oEUbGaV706&X-Amz-Signature=07319c4a8cc5f13b87c570132268e2db4662abfefcef1d05cf788239afbe764b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKKVBMMU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIFw8NO5Q3xY5s4SLVrOIQMQX5rjg4lVB9FGXf2vvuMlkAiEAyRbiH8k8A3YVObAAzH1tWf8r6M4jiA78g%2FNc5tprgn0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGSk79%2B3rIFzNGI95yrcA3XEe3phc614WJfMYKQF%2FHIueVW1wmUtEGrkisovn4XWLQieHUOKb4EM8U8IokfTIIisC2j9gEFBNmPgkKZrdf%2BzVPUY1pAFoOHBqTe76mPxlhijEC7JNjrn7VEoEL8avh9in2XWfb0aT1vAYxHDAdjZKfRAxJO0VCwtaqbb7HiF0QcSAcIMQEtp3IB3sar1aTdWwNRRo24v0x85TrFDEhFtECo8ltuJJfLOlDvb7f8wBNoABf3XCB%2BlB6MSp%2BZVEzjej5u9lvQSb%2FSsqH7xHZHokGaGyYV%2BST2ejR1kZDf0MdfJ1sLS6iuRtNKQGJFaIx23ys2fQQDrAS1cSG6KLEkWutAzfbmRpNwzD%2BxWtBd5qlmPjIjuboTg9ku4EQrpZC3y72Eqw1FyFYandYEDrP8G683TK%2FvG7FpuFq4nK0RYChCnTO3IrA%2ByI8NL800otIJ6RnkNh3yeu1uTN3FlYwcdmWh6eu%2F5ofymgJsc7abY%2FXkRdIIMh80YOWc83sRKCjsLAWhZu3ty3Y5hD2ra%2BdPLjHjMgy%2Fo%2BcPLRTkOV%2BgZ0P5khUU4Irm3hA8oBQhhdCjHz%2FgBzIIUKoFcdcsW6kBLhb457lJYslVRPndSKVULp%2FW0Uno3l%2BgbUYv6MNmi%2BsQGOqUBD8y2tIifaFLElUEmcA3OicHTOPHHRF1Qp9Z30J%2F7fSatVq3iFYRpXdTjM2gxv8y2%2FL6x7btVE3hdoFeOvWmM3wZlpZRXxjf2zMHlAdWKQvVz6QtYerTpuULpghVLrJni95%2FeM45bHHHnFJKLqbmHn%2BzMgOREpvdknZcfEcJaJKRqqrgZZrldqUEjI9RmHJBtzc1Gyq%2FSV0nTvseLr7oEUbGaV706&X-Amz-Signature=57f62803d4b0570c3eed93aaf371ba67d0d12cc8c73e0a7d39c8aeae8ef1cfda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKKVBMMU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIFw8NO5Q3xY5s4SLVrOIQMQX5rjg4lVB9FGXf2vvuMlkAiEAyRbiH8k8A3YVObAAzH1tWf8r6M4jiA78g%2FNc5tprgn0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGSk79%2B3rIFzNGI95yrcA3XEe3phc614WJfMYKQF%2FHIueVW1wmUtEGrkisovn4XWLQieHUOKb4EM8U8IokfTIIisC2j9gEFBNmPgkKZrdf%2BzVPUY1pAFoOHBqTe76mPxlhijEC7JNjrn7VEoEL8avh9in2XWfb0aT1vAYxHDAdjZKfRAxJO0VCwtaqbb7HiF0QcSAcIMQEtp3IB3sar1aTdWwNRRo24v0x85TrFDEhFtECo8ltuJJfLOlDvb7f8wBNoABf3XCB%2BlB6MSp%2BZVEzjej5u9lvQSb%2FSsqH7xHZHokGaGyYV%2BST2ejR1kZDf0MdfJ1sLS6iuRtNKQGJFaIx23ys2fQQDrAS1cSG6KLEkWutAzfbmRpNwzD%2BxWtBd5qlmPjIjuboTg9ku4EQrpZC3y72Eqw1FyFYandYEDrP8G683TK%2FvG7FpuFq4nK0RYChCnTO3IrA%2ByI8NL800otIJ6RnkNh3yeu1uTN3FlYwcdmWh6eu%2F5ofymgJsc7abY%2FXkRdIIMh80YOWc83sRKCjsLAWhZu3ty3Y5hD2ra%2BdPLjHjMgy%2Fo%2BcPLRTkOV%2BgZ0P5khUU4Irm3hA8oBQhhdCjHz%2FgBzIIUKoFcdcsW6kBLhb457lJYslVRPndSKVULp%2FW0Uno3l%2BgbUYv6MNmi%2BsQGOqUBD8y2tIifaFLElUEmcA3OicHTOPHHRF1Qp9Z30J%2F7fSatVq3iFYRpXdTjM2gxv8y2%2FL6x7btVE3hdoFeOvWmM3wZlpZRXxjf2zMHlAdWKQvVz6QtYerTpuULpghVLrJni95%2FeM45bHHHnFJKLqbmHn%2BzMgOREpvdknZcfEcJaJKRqqrgZZrldqUEjI9RmHJBtzc1Gyq%2FSV0nTvseLr7oEUbGaV706&X-Amz-Signature=b88f3566ade30922044460f58e933fddd22c00b330616c95faf050c18e63ef7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKKVBMMU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIFw8NO5Q3xY5s4SLVrOIQMQX5rjg4lVB9FGXf2vvuMlkAiEAyRbiH8k8A3YVObAAzH1tWf8r6M4jiA78g%2FNc5tprgn0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGSk79%2B3rIFzNGI95yrcA3XEe3phc614WJfMYKQF%2FHIueVW1wmUtEGrkisovn4XWLQieHUOKb4EM8U8IokfTIIisC2j9gEFBNmPgkKZrdf%2BzVPUY1pAFoOHBqTe76mPxlhijEC7JNjrn7VEoEL8avh9in2XWfb0aT1vAYxHDAdjZKfRAxJO0VCwtaqbb7HiF0QcSAcIMQEtp3IB3sar1aTdWwNRRo24v0x85TrFDEhFtECo8ltuJJfLOlDvb7f8wBNoABf3XCB%2BlB6MSp%2BZVEzjej5u9lvQSb%2FSsqH7xHZHokGaGyYV%2BST2ejR1kZDf0MdfJ1sLS6iuRtNKQGJFaIx23ys2fQQDrAS1cSG6KLEkWutAzfbmRpNwzD%2BxWtBd5qlmPjIjuboTg9ku4EQrpZC3y72Eqw1FyFYandYEDrP8G683TK%2FvG7FpuFq4nK0RYChCnTO3IrA%2ByI8NL800otIJ6RnkNh3yeu1uTN3FlYwcdmWh6eu%2F5ofymgJsc7abY%2FXkRdIIMh80YOWc83sRKCjsLAWhZu3ty3Y5hD2ra%2BdPLjHjMgy%2Fo%2BcPLRTkOV%2BgZ0P5khUU4Irm3hA8oBQhhdCjHz%2FgBzIIUKoFcdcsW6kBLhb457lJYslVRPndSKVULp%2FW0Uno3l%2BgbUYv6MNmi%2BsQGOqUBD8y2tIifaFLElUEmcA3OicHTOPHHRF1Qp9Z30J%2F7fSatVq3iFYRpXdTjM2gxv8y2%2FL6x7btVE3hdoFeOvWmM3wZlpZRXxjf2zMHlAdWKQvVz6QtYerTpuULpghVLrJni95%2FeM45bHHHnFJKLqbmHn%2BzMgOREpvdknZcfEcJaJKRqqrgZZrldqUEjI9RmHJBtzc1Gyq%2FSV0nTvseLr7oEUbGaV706&X-Amz-Signature=85d5513e2c60da65e5e560a0129ae661be594e850ea6a7297727cf43dfe674c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKKVBMMU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIFw8NO5Q3xY5s4SLVrOIQMQX5rjg4lVB9FGXf2vvuMlkAiEAyRbiH8k8A3YVObAAzH1tWf8r6M4jiA78g%2FNc5tprgn0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGSk79%2B3rIFzNGI95yrcA3XEe3phc614WJfMYKQF%2FHIueVW1wmUtEGrkisovn4XWLQieHUOKb4EM8U8IokfTIIisC2j9gEFBNmPgkKZrdf%2BzVPUY1pAFoOHBqTe76mPxlhijEC7JNjrn7VEoEL8avh9in2XWfb0aT1vAYxHDAdjZKfRAxJO0VCwtaqbb7HiF0QcSAcIMQEtp3IB3sar1aTdWwNRRo24v0x85TrFDEhFtECo8ltuJJfLOlDvb7f8wBNoABf3XCB%2BlB6MSp%2BZVEzjej5u9lvQSb%2FSsqH7xHZHokGaGyYV%2BST2ejR1kZDf0MdfJ1sLS6iuRtNKQGJFaIx23ys2fQQDrAS1cSG6KLEkWutAzfbmRpNwzD%2BxWtBd5qlmPjIjuboTg9ku4EQrpZC3y72Eqw1FyFYandYEDrP8G683TK%2FvG7FpuFq4nK0RYChCnTO3IrA%2ByI8NL800otIJ6RnkNh3yeu1uTN3FlYwcdmWh6eu%2F5ofymgJsc7abY%2FXkRdIIMh80YOWc83sRKCjsLAWhZu3ty3Y5hD2ra%2BdPLjHjMgy%2Fo%2BcPLRTkOV%2BgZ0P5khUU4Irm3hA8oBQhhdCjHz%2FgBzIIUKoFcdcsW6kBLhb457lJYslVRPndSKVULp%2FW0Uno3l%2BgbUYv6MNmi%2BsQGOqUBD8y2tIifaFLElUEmcA3OicHTOPHHRF1Qp9Z30J%2F7fSatVq3iFYRpXdTjM2gxv8y2%2FL6x7btVE3hdoFeOvWmM3wZlpZRXxjf2zMHlAdWKQvVz6QtYerTpuULpghVLrJni95%2FeM45bHHHnFJKLqbmHn%2BzMgOREpvdknZcfEcJaJKRqqrgZZrldqUEjI9RmHJBtzc1Gyq%2FSV0nTvseLr7oEUbGaV706&X-Amz-Signature=3e20ead484240a7e9c3b0abf4a4c7279f167744eaa01da36f1a861e645dae401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
