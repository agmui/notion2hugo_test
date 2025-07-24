---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T01:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T01:34:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHJMFZ5L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG2ibx%2FQj3L3AjYH1s6ez6JGi%2F3DeB4SJ6XXepQHNaUFAiEAro%2FwtfpuCFqprT1i8N6x%2BRByScnRRxkiEmAbBiyvbxUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMfLFtXWCJsCLUKSoSrcA25r6WfFBBlQ6LrF0gNRKwSIhF7w%2FG2zuGCOdcXywDJCAmO39656JAdStHN8jKH%2Fdhp7dK9f%2BHWFMI4jvajrMl%2FlFbkEhpn%2FWS3yZP06bVoDQqQrmv4Zs5ZSOP2jH57JP4PSMcj7adx3d0Xpp9DObpdmDrzGBkqUwAn5Mh6OdZHD5Ts%2FHM9zSTq4M1MUCd6ApqpafWy%2BCB3KsMAqVFtcY2gTMjnSGQ1iEOLrW5CRwaGE%2FrgWQt758fgtJbCcXrUr4lpd3Qn8E7%2FOZrwQitjJAyY%2B3B3ZrU2PrN1WCi5oEi3rm8i2Ka10EKLT%2Bcic3%2Bnm0gwcCxyjzu0fp1GQLu%2FfrCka7dnktvIniYH%2FgneG%2FFr2hIBHv58rCRloHnQLdrXdmEQkUs5FYnTQxmIcwpZ39%2FnfvFmYPt0tlCRsGCPeByK6WBhVl68mO5o5gqWRNFGlpL25B4eEWLHs1ZzTLWa1w13OLKneV5fgdLlJV0Hm5U2ABqDtjA6YGRvRqS%2FtzRR4pgayNK2E1j64o0XDqHG5f4Fs8IhFwIZdSJZL1oIo5txZJorr7EuYMQ1xZK6uIaogt%2B5vDmj%2FBH698dC2MBt0vwXoVtqDYIIknHek32XrAoo1S5Ir0af2xEGOSX3AMOHZiMQGOqUBjGlrraIQe3o1QSIT2F5co7jnX%2FtlQ%2BshUcPu24d6CjSfjCMCwyfFdk6TAl3OmRiuYkaRD%2B%2BsGwqC3J6zkyp8ZWuBbQSiSAF%2BjmuEgsnYMsTZSTaZOkpSIPuIo12AoYyHTm1ek2ysbhD6WqIj9imDqr14aNXu6Qp83ntt9BXU07LE8WY%2Fg85Ey4HkyPPN0BMa6QE4YBbsXjM0H1ZNeFCAdALFxLBo&X-Amz-Signature=12e28f516b1ee1744bebaf33f7651f3d8c92dca0b184428b29784e42fa662d5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHJMFZ5L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG2ibx%2FQj3L3AjYH1s6ez6JGi%2F3DeB4SJ6XXepQHNaUFAiEAro%2FwtfpuCFqprT1i8N6x%2BRByScnRRxkiEmAbBiyvbxUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMfLFtXWCJsCLUKSoSrcA25r6WfFBBlQ6LrF0gNRKwSIhF7w%2FG2zuGCOdcXywDJCAmO39656JAdStHN8jKH%2Fdhp7dK9f%2BHWFMI4jvajrMl%2FlFbkEhpn%2FWS3yZP06bVoDQqQrmv4Zs5ZSOP2jH57JP4PSMcj7adx3d0Xpp9DObpdmDrzGBkqUwAn5Mh6OdZHD5Ts%2FHM9zSTq4M1MUCd6ApqpafWy%2BCB3KsMAqVFtcY2gTMjnSGQ1iEOLrW5CRwaGE%2FrgWQt758fgtJbCcXrUr4lpd3Qn8E7%2FOZrwQitjJAyY%2B3B3ZrU2PrN1WCi5oEi3rm8i2Ka10EKLT%2Bcic3%2Bnm0gwcCxyjzu0fp1GQLu%2FfrCka7dnktvIniYH%2FgneG%2FFr2hIBHv58rCRloHnQLdrXdmEQkUs5FYnTQxmIcwpZ39%2FnfvFmYPt0tlCRsGCPeByK6WBhVl68mO5o5gqWRNFGlpL25B4eEWLHs1ZzTLWa1w13OLKneV5fgdLlJV0Hm5U2ABqDtjA6YGRvRqS%2FtzRR4pgayNK2E1j64o0XDqHG5f4Fs8IhFwIZdSJZL1oIo5txZJorr7EuYMQ1xZK6uIaogt%2B5vDmj%2FBH698dC2MBt0vwXoVtqDYIIknHek32XrAoo1S5Ir0af2xEGOSX3AMOHZiMQGOqUBjGlrraIQe3o1QSIT2F5co7jnX%2FtlQ%2BshUcPu24d6CjSfjCMCwyfFdk6TAl3OmRiuYkaRD%2B%2BsGwqC3J6zkyp8ZWuBbQSiSAF%2BjmuEgsnYMsTZSTaZOkpSIPuIo12AoYyHTm1ek2ysbhD6WqIj9imDqr14aNXu6Qp83ntt9BXU07LE8WY%2Fg85Ey4HkyPPN0BMa6QE4YBbsXjM0H1ZNeFCAdALFxLBo&X-Amz-Signature=7d1f9072ee14c5a6c2fa890a40258958d1e679ba499f76d0b2d2bbb16d19bdc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly highly HIGHLY recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHJMFZ5L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG2ibx%2FQj3L3AjYH1s6ez6JGi%2F3DeB4SJ6XXepQHNaUFAiEAro%2FwtfpuCFqprT1i8N6x%2BRByScnRRxkiEmAbBiyvbxUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMfLFtXWCJsCLUKSoSrcA25r6WfFBBlQ6LrF0gNRKwSIhF7w%2FG2zuGCOdcXywDJCAmO39656JAdStHN8jKH%2Fdhp7dK9f%2BHWFMI4jvajrMl%2FlFbkEhpn%2FWS3yZP06bVoDQqQrmv4Zs5ZSOP2jH57JP4PSMcj7adx3d0Xpp9DObpdmDrzGBkqUwAn5Mh6OdZHD5Ts%2FHM9zSTq4M1MUCd6ApqpafWy%2BCB3KsMAqVFtcY2gTMjnSGQ1iEOLrW5CRwaGE%2FrgWQt758fgtJbCcXrUr4lpd3Qn8E7%2FOZrwQitjJAyY%2B3B3ZrU2PrN1WCi5oEi3rm8i2Ka10EKLT%2Bcic3%2Bnm0gwcCxyjzu0fp1GQLu%2FfrCka7dnktvIniYH%2FgneG%2FFr2hIBHv58rCRloHnQLdrXdmEQkUs5FYnTQxmIcwpZ39%2FnfvFmYPt0tlCRsGCPeByK6WBhVl68mO5o5gqWRNFGlpL25B4eEWLHs1ZzTLWa1w13OLKneV5fgdLlJV0Hm5U2ABqDtjA6YGRvRqS%2FtzRR4pgayNK2E1j64o0XDqHG5f4Fs8IhFwIZdSJZL1oIo5txZJorr7EuYMQ1xZK6uIaogt%2B5vDmj%2FBH698dC2MBt0vwXoVtqDYIIknHek32XrAoo1S5Ir0af2xEGOSX3AMOHZiMQGOqUBjGlrraIQe3o1QSIT2F5co7jnX%2FtlQ%2BshUcPu24d6CjSfjCMCwyfFdk6TAl3OmRiuYkaRD%2B%2BsGwqC3J6zkyp8ZWuBbQSiSAF%2BjmuEgsnYMsTZSTaZOkpSIPuIo12AoYyHTm1ek2ysbhD6WqIj9imDqr14aNXu6Qp83ntt9BXU07LE8WY%2Fg85Ey4HkyPPN0BMa6QE4YBbsXjM0H1ZNeFCAdALFxLBo&X-Amz-Signature=9e42eada68e86fbe0876d6ee0f4816ea153bad97eb2a0e6d26e7f5361303c644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are many reasons for this because

- keeps all your code in one place
- You don’t need a monitor, mouse, and keyboard to connect to your Raspberry Pi
- Your laptop is much much faster than your Raspberry Pi so debugging is faster
- Once you are done developing on your laptop all you have to do is copy all the files over to the Pi and Docker will automatically make it work

{{% /alert %}}

## creating workspace + package

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

If you are doing the Dev container setup put these at the bottom of your `Dockerfile`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHJMFZ5L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG2ibx%2FQj3L3AjYH1s6ez6JGi%2F3DeB4SJ6XXepQHNaUFAiEAro%2FwtfpuCFqprT1i8N6x%2BRByScnRRxkiEmAbBiyvbxUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMfLFtXWCJsCLUKSoSrcA25r6WfFBBlQ6LrF0gNRKwSIhF7w%2FG2zuGCOdcXywDJCAmO39656JAdStHN8jKH%2Fdhp7dK9f%2BHWFMI4jvajrMl%2FlFbkEhpn%2FWS3yZP06bVoDQqQrmv4Zs5ZSOP2jH57JP4PSMcj7adx3d0Xpp9DObpdmDrzGBkqUwAn5Mh6OdZHD5Ts%2FHM9zSTq4M1MUCd6ApqpafWy%2BCB3KsMAqVFtcY2gTMjnSGQ1iEOLrW5CRwaGE%2FrgWQt758fgtJbCcXrUr4lpd3Qn8E7%2FOZrwQitjJAyY%2B3B3ZrU2PrN1WCi5oEi3rm8i2Ka10EKLT%2Bcic3%2Bnm0gwcCxyjzu0fp1GQLu%2FfrCka7dnktvIniYH%2FgneG%2FFr2hIBHv58rCRloHnQLdrXdmEQkUs5FYnTQxmIcwpZ39%2FnfvFmYPt0tlCRsGCPeByK6WBhVl68mO5o5gqWRNFGlpL25B4eEWLHs1ZzTLWa1w13OLKneV5fgdLlJV0Hm5U2ABqDtjA6YGRvRqS%2FtzRR4pgayNK2E1j64o0XDqHG5f4Fs8IhFwIZdSJZL1oIo5txZJorr7EuYMQ1xZK6uIaogt%2B5vDmj%2FBH698dC2MBt0vwXoVtqDYIIknHek32XrAoo1S5Ir0af2xEGOSX3AMOHZiMQGOqUBjGlrraIQe3o1QSIT2F5co7jnX%2FtlQ%2BshUcPu24d6CjSfjCMCwyfFdk6TAl3OmRiuYkaRD%2B%2BsGwqC3J6zkyp8ZWuBbQSiSAF%2BjmuEgsnYMsTZSTaZOkpSIPuIo12AoYyHTm1ek2ysbhD6WqIj9imDqr14aNXu6Qp83ntt9BXU07LE8WY%2Fg85Ey4HkyPPN0BMa6QE4YBbsXjM0H1ZNeFCAdALFxLBo&X-Amz-Signature=3e34263de46722803517ddc17abe5103ec2962a2b679793038696823d7500717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHJMFZ5L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG2ibx%2FQj3L3AjYH1s6ez6JGi%2F3DeB4SJ6XXepQHNaUFAiEAro%2FwtfpuCFqprT1i8N6x%2BRByScnRRxkiEmAbBiyvbxUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMfLFtXWCJsCLUKSoSrcA25r6WfFBBlQ6LrF0gNRKwSIhF7w%2FG2zuGCOdcXywDJCAmO39656JAdStHN8jKH%2Fdhp7dK9f%2BHWFMI4jvajrMl%2FlFbkEhpn%2FWS3yZP06bVoDQqQrmv4Zs5ZSOP2jH57JP4PSMcj7adx3d0Xpp9DObpdmDrzGBkqUwAn5Mh6OdZHD5Ts%2FHM9zSTq4M1MUCd6ApqpafWy%2BCB3KsMAqVFtcY2gTMjnSGQ1iEOLrW5CRwaGE%2FrgWQt758fgtJbCcXrUr4lpd3Qn8E7%2FOZrwQitjJAyY%2B3B3ZrU2PrN1WCi5oEi3rm8i2Ka10EKLT%2Bcic3%2Bnm0gwcCxyjzu0fp1GQLu%2FfrCka7dnktvIniYH%2FgneG%2FFr2hIBHv58rCRloHnQLdrXdmEQkUs5FYnTQxmIcwpZ39%2FnfvFmYPt0tlCRsGCPeByK6WBhVl68mO5o5gqWRNFGlpL25B4eEWLHs1ZzTLWa1w13OLKneV5fgdLlJV0Hm5U2ABqDtjA6YGRvRqS%2FtzRR4pgayNK2E1j64o0XDqHG5f4Fs8IhFwIZdSJZL1oIo5txZJorr7EuYMQ1xZK6uIaogt%2B5vDmj%2FBH698dC2MBt0vwXoVtqDYIIknHek32XrAoo1S5Ir0af2xEGOSX3AMOHZiMQGOqUBjGlrraIQe3o1QSIT2F5co7jnX%2FtlQ%2BshUcPu24d6CjSfjCMCwyfFdk6TAl3OmRiuYkaRD%2B%2BsGwqC3J6zkyp8ZWuBbQSiSAF%2BjmuEgsnYMsTZSTaZOkpSIPuIo12AoYyHTm1ek2ysbhD6WqIj9imDqr14aNXu6Qp83ntt9BXU07LE8WY%2Fg85Ey4HkyPPN0BMa6QE4YBbsXjM0H1ZNeFCAdALFxLBo&X-Amz-Signature=d1afd8dc3a1e8393a94eae36f85aa9861a26edb236a83a225faa5121af3e9f5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHJMFZ5L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG2ibx%2FQj3L3AjYH1s6ez6JGi%2F3DeB4SJ6XXepQHNaUFAiEAro%2FwtfpuCFqprT1i8N6x%2BRByScnRRxkiEmAbBiyvbxUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMfLFtXWCJsCLUKSoSrcA25r6WfFBBlQ6LrF0gNRKwSIhF7w%2FG2zuGCOdcXywDJCAmO39656JAdStHN8jKH%2Fdhp7dK9f%2BHWFMI4jvajrMl%2FlFbkEhpn%2FWS3yZP06bVoDQqQrmv4Zs5ZSOP2jH57JP4PSMcj7adx3d0Xpp9DObpdmDrzGBkqUwAn5Mh6OdZHD5Ts%2FHM9zSTq4M1MUCd6ApqpafWy%2BCB3KsMAqVFtcY2gTMjnSGQ1iEOLrW5CRwaGE%2FrgWQt758fgtJbCcXrUr4lpd3Qn8E7%2FOZrwQitjJAyY%2B3B3ZrU2PrN1WCi5oEi3rm8i2Ka10EKLT%2Bcic3%2Bnm0gwcCxyjzu0fp1GQLu%2FfrCka7dnktvIniYH%2FgneG%2FFr2hIBHv58rCRloHnQLdrXdmEQkUs5FYnTQxmIcwpZ39%2FnfvFmYPt0tlCRsGCPeByK6WBhVl68mO5o5gqWRNFGlpL25B4eEWLHs1ZzTLWa1w13OLKneV5fgdLlJV0Hm5U2ABqDtjA6YGRvRqS%2FtzRR4pgayNK2E1j64o0XDqHG5f4Fs8IhFwIZdSJZL1oIo5txZJorr7EuYMQ1xZK6uIaogt%2B5vDmj%2FBH698dC2MBt0vwXoVtqDYIIknHek32XrAoo1S5Ir0af2xEGOSX3AMOHZiMQGOqUBjGlrraIQe3o1QSIT2F5co7jnX%2FtlQ%2BshUcPu24d6CjSfjCMCwyfFdk6TAl3OmRiuYkaRD%2B%2BsGwqC3J6zkyp8ZWuBbQSiSAF%2BjmuEgsnYMsTZSTaZOkpSIPuIo12AoYyHTm1ek2ysbhD6WqIj9imDqr14aNXu6Qp83ntt9BXU07LE8WY%2Fg85Ey4HkyPPN0BMa6QE4YBbsXjM0H1ZNeFCAdALFxLBo&X-Amz-Signature=143f009d219adf4ad83fae4ba2ea83c296078e2658caa74267894458bf5b6927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHJMFZ5L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG2ibx%2FQj3L3AjYH1s6ez6JGi%2F3DeB4SJ6XXepQHNaUFAiEAro%2FwtfpuCFqprT1i8N6x%2BRByScnRRxkiEmAbBiyvbxUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMfLFtXWCJsCLUKSoSrcA25r6WfFBBlQ6LrF0gNRKwSIhF7w%2FG2zuGCOdcXywDJCAmO39656JAdStHN8jKH%2Fdhp7dK9f%2BHWFMI4jvajrMl%2FlFbkEhpn%2FWS3yZP06bVoDQqQrmv4Zs5ZSOP2jH57JP4PSMcj7adx3d0Xpp9DObpdmDrzGBkqUwAn5Mh6OdZHD5Ts%2FHM9zSTq4M1MUCd6ApqpafWy%2BCB3KsMAqVFtcY2gTMjnSGQ1iEOLrW5CRwaGE%2FrgWQt758fgtJbCcXrUr4lpd3Qn8E7%2FOZrwQitjJAyY%2B3B3ZrU2PrN1WCi5oEi3rm8i2Ka10EKLT%2Bcic3%2Bnm0gwcCxyjzu0fp1GQLu%2FfrCka7dnktvIniYH%2FgneG%2FFr2hIBHv58rCRloHnQLdrXdmEQkUs5FYnTQxmIcwpZ39%2FnfvFmYPt0tlCRsGCPeByK6WBhVl68mO5o5gqWRNFGlpL25B4eEWLHs1ZzTLWa1w13OLKneV5fgdLlJV0Hm5U2ABqDtjA6YGRvRqS%2FtzRR4pgayNK2E1j64o0XDqHG5f4Fs8IhFwIZdSJZL1oIo5txZJorr7EuYMQ1xZK6uIaogt%2B5vDmj%2FBH698dC2MBt0vwXoVtqDYIIknHek32XrAoo1S5Ir0af2xEGOSX3AMOHZiMQGOqUBjGlrraIQe3o1QSIT2F5co7jnX%2FtlQ%2BshUcPu24d6CjSfjCMCwyfFdk6TAl3OmRiuYkaRD%2B%2BsGwqC3J6zkyp8ZWuBbQSiSAF%2BjmuEgsnYMsTZSTaZOkpSIPuIo12AoYyHTm1ek2ysbhD6WqIj9imDqr14aNXu6Qp83ntt9BXU07LE8WY%2Fg85Ey4HkyPPN0BMa6QE4YBbsXjM0H1ZNeFCAdALFxLBo&X-Amz-Signature=f49bd36e788e8281483bef58e8be6db0b38243314fe2983f6d0462fd3451cea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

make a folder in `mbot_pkg` called description and a file called `mbot_description.urdf`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHJMFZ5L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG2ibx%2FQj3L3AjYH1s6ez6JGi%2F3DeB4SJ6XXepQHNaUFAiEAro%2FwtfpuCFqprT1i8N6x%2BRByScnRRxkiEmAbBiyvbxUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMfLFtXWCJsCLUKSoSrcA25r6WfFBBlQ6LrF0gNRKwSIhF7w%2FG2zuGCOdcXywDJCAmO39656JAdStHN8jKH%2Fdhp7dK9f%2BHWFMI4jvajrMl%2FlFbkEhpn%2FWS3yZP06bVoDQqQrmv4Zs5ZSOP2jH57JP4PSMcj7adx3d0Xpp9DObpdmDrzGBkqUwAn5Mh6OdZHD5Ts%2FHM9zSTq4M1MUCd6ApqpafWy%2BCB3KsMAqVFtcY2gTMjnSGQ1iEOLrW5CRwaGE%2FrgWQt758fgtJbCcXrUr4lpd3Qn8E7%2FOZrwQitjJAyY%2B3B3ZrU2PrN1WCi5oEi3rm8i2Ka10EKLT%2Bcic3%2Bnm0gwcCxyjzu0fp1GQLu%2FfrCka7dnktvIniYH%2FgneG%2FFr2hIBHv58rCRloHnQLdrXdmEQkUs5FYnTQxmIcwpZ39%2FnfvFmYPt0tlCRsGCPeByK6WBhVl68mO5o5gqWRNFGlpL25B4eEWLHs1ZzTLWa1w13OLKneV5fgdLlJV0Hm5U2ABqDtjA6YGRvRqS%2FtzRR4pgayNK2E1j64o0XDqHG5f4Fs8IhFwIZdSJZL1oIo5txZJorr7EuYMQ1xZK6uIaogt%2B5vDmj%2FBH698dC2MBt0vwXoVtqDYIIknHek32XrAoo1S5Ir0af2xEGOSX3AMOHZiMQGOqUBjGlrraIQe3o1QSIT2F5co7jnX%2FtlQ%2BshUcPu24d6CjSfjCMCwyfFdk6TAl3OmRiuYkaRD%2B%2BsGwqC3J6zkyp8ZWuBbQSiSAF%2BjmuEgsnYMsTZSTaZOkpSIPuIo12AoYyHTm1ek2ysbhD6WqIj9imDqr14aNXu6Qp83ntt9BXU07LE8WY%2Fg85Ey4HkyPPN0BMa6QE4YBbsXjM0H1ZNeFCAdALFxLBo&X-Amz-Signature=8e105f40f805b122581274f7faf2c9cb9eddc34e5f720c63498438616d832087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHJMFZ5L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG2ibx%2FQj3L3AjYH1s6ez6JGi%2F3DeB4SJ6XXepQHNaUFAiEAro%2FwtfpuCFqprT1i8N6x%2BRByScnRRxkiEmAbBiyvbxUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMfLFtXWCJsCLUKSoSrcA25r6WfFBBlQ6LrF0gNRKwSIhF7w%2FG2zuGCOdcXywDJCAmO39656JAdStHN8jKH%2Fdhp7dK9f%2BHWFMI4jvajrMl%2FlFbkEhpn%2FWS3yZP06bVoDQqQrmv4Zs5ZSOP2jH57JP4PSMcj7adx3d0Xpp9DObpdmDrzGBkqUwAn5Mh6OdZHD5Ts%2FHM9zSTq4M1MUCd6ApqpafWy%2BCB3KsMAqVFtcY2gTMjnSGQ1iEOLrW5CRwaGE%2FrgWQt758fgtJbCcXrUr4lpd3Qn8E7%2FOZrwQitjJAyY%2B3B3ZrU2PrN1WCi5oEi3rm8i2Ka10EKLT%2Bcic3%2Bnm0gwcCxyjzu0fp1GQLu%2FfrCka7dnktvIniYH%2FgneG%2FFr2hIBHv58rCRloHnQLdrXdmEQkUs5FYnTQxmIcwpZ39%2FnfvFmYPt0tlCRsGCPeByK6WBhVl68mO5o5gqWRNFGlpL25B4eEWLHs1ZzTLWa1w13OLKneV5fgdLlJV0Hm5U2ABqDtjA6YGRvRqS%2FtzRR4pgayNK2E1j64o0XDqHG5f4Fs8IhFwIZdSJZL1oIo5txZJorr7EuYMQ1xZK6uIaogt%2B5vDmj%2FBH698dC2MBt0vwXoVtqDYIIknHek32XrAoo1S5Ir0af2xEGOSX3AMOHZiMQGOqUBjGlrraIQe3o1QSIT2F5co7jnX%2FtlQ%2BshUcPu24d6CjSfjCMCwyfFdk6TAl3OmRiuYkaRD%2B%2BsGwqC3J6zkyp8ZWuBbQSiSAF%2BjmuEgsnYMsTZSTaZOkpSIPuIo12AoYyHTm1ek2ysbhD6WqIj9imDqr14aNXu6Qp83ntt9BXU07LE8WY%2Fg85Ey4HkyPPN0BMa6QE4YBbsXjM0H1ZNeFCAdALFxLBo&X-Amz-Signature=212b7a0945f8eee27f7338f4b4c0f90906fff56e33c036837aded1f23263a7df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHJMFZ5L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG2ibx%2FQj3L3AjYH1s6ez6JGi%2F3DeB4SJ6XXepQHNaUFAiEAro%2FwtfpuCFqprT1i8N6x%2BRByScnRRxkiEmAbBiyvbxUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMfLFtXWCJsCLUKSoSrcA25r6WfFBBlQ6LrF0gNRKwSIhF7w%2FG2zuGCOdcXywDJCAmO39656JAdStHN8jKH%2Fdhp7dK9f%2BHWFMI4jvajrMl%2FlFbkEhpn%2FWS3yZP06bVoDQqQrmv4Zs5ZSOP2jH57JP4PSMcj7adx3d0Xpp9DObpdmDrzGBkqUwAn5Mh6OdZHD5Ts%2FHM9zSTq4M1MUCd6ApqpafWy%2BCB3KsMAqVFtcY2gTMjnSGQ1iEOLrW5CRwaGE%2FrgWQt758fgtJbCcXrUr4lpd3Qn8E7%2FOZrwQitjJAyY%2B3B3ZrU2PrN1WCi5oEi3rm8i2Ka10EKLT%2Bcic3%2Bnm0gwcCxyjzu0fp1GQLu%2FfrCka7dnktvIniYH%2FgneG%2FFr2hIBHv58rCRloHnQLdrXdmEQkUs5FYnTQxmIcwpZ39%2FnfvFmYPt0tlCRsGCPeByK6WBhVl68mO5o5gqWRNFGlpL25B4eEWLHs1ZzTLWa1w13OLKneV5fgdLlJV0Hm5U2ABqDtjA6YGRvRqS%2FtzRR4pgayNK2E1j64o0XDqHG5f4Fs8IhFwIZdSJZL1oIo5txZJorr7EuYMQ1xZK6uIaogt%2B5vDmj%2FBH698dC2MBt0vwXoVtqDYIIknHek32XrAoo1S5Ir0af2xEGOSX3AMOHZiMQGOqUBjGlrraIQe3o1QSIT2F5co7jnX%2FtlQ%2BshUcPu24d6CjSfjCMCwyfFdk6TAl3OmRiuYkaRD%2B%2BsGwqC3J6zkyp8ZWuBbQSiSAF%2BjmuEgsnYMsTZSTaZOkpSIPuIo12AoYyHTm1ek2ysbhD6WqIj9imDqr14aNXu6Qp83ntt9BXU07LE8WY%2Fg85Ey4HkyPPN0BMa6QE4YBbsXjM0H1ZNeFCAdALFxLBo&X-Amz-Signature=340a145e22e71c784a0eef1d59faf61f23fc7aeb12ebf3be1dc471315cfb177d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHJMFZ5L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG2ibx%2FQj3L3AjYH1s6ez6JGi%2F3DeB4SJ6XXepQHNaUFAiEAro%2FwtfpuCFqprT1i8N6x%2BRByScnRRxkiEmAbBiyvbxUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMfLFtXWCJsCLUKSoSrcA25r6WfFBBlQ6LrF0gNRKwSIhF7w%2FG2zuGCOdcXywDJCAmO39656JAdStHN8jKH%2Fdhp7dK9f%2BHWFMI4jvajrMl%2FlFbkEhpn%2FWS3yZP06bVoDQqQrmv4Zs5ZSOP2jH57JP4PSMcj7adx3d0Xpp9DObpdmDrzGBkqUwAn5Mh6OdZHD5Ts%2FHM9zSTq4M1MUCd6ApqpafWy%2BCB3KsMAqVFtcY2gTMjnSGQ1iEOLrW5CRwaGE%2FrgWQt758fgtJbCcXrUr4lpd3Qn8E7%2FOZrwQitjJAyY%2B3B3ZrU2PrN1WCi5oEi3rm8i2Ka10EKLT%2Bcic3%2Bnm0gwcCxyjzu0fp1GQLu%2FfrCka7dnktvIniYH%2FgneG%2FFr2hIBHv58rCRloHnQLdrXdmEQkUs5FYnTQxmIcwpZ39%2FnfvFmYPt0tlCRsGCPeByK6WBhVl68mO5o5gqWRNFGlpL25B4eEWLHs1ZzTLWa1w13OLKneV5fgdLlJV0Hm5U2ABqDtjA6YGRvRqS%2FtzRR4pgayNK2E1j64o0XDqHG5f4Fs8IhFwIZdSJZL1oIo5txZJorr7EuYMQ1xZK6uIaogt%2B5vDmj%2FBH698dC2MBt0vwXoVtqDYIIknHek32XrAoo1S5Ir0af2xEGOSX3AMOHZiMQGOqUBjGlrraIQe3o1QSIT2F5co7jnX%2FtlQ%2BshUcPu24d6CjSfjCMCwyfFdk6TAl3OmRiuYkaRD%2B%2BsGwqC3J6zkyp8ZWuBbQSiSAF%2BjmuEgsnYMsTZSTaZOkpSIPuIo12AoYyHTm1ek2ysbhD6WqIj9imDqr14aNXu6Qp83ntt9BXU07LE8WY%2Fg85Ey4HkyPPN0BMa6QE4YBbsXjM0H1ZNeFCAdALFxLBo&X-Amz-Signature=a721a52efc69e1d5ddd212310cfb3419941d722a3796371a0e06676c37ba3842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`joint`**_**`_`**_**`state_publisher_gui`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHJMFZ5L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG2ibx%2FQj3L3AjYH1s6ez6JGi%2F3DeB4SJ6XXepQHNaUFAiEAro%2FwtfpuCFqprT1i8N6x%2BRByScnRRxkiEmAbBiyvbxUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMfLFtXWCJsCLUKSoSrcA25r6WfFBBlQ6LrF0gNRKwSIhF7w%2FG2zuGCOdcXywDJCAmO39656JAdStHN8jKH%2Fdhp7dK9f%2BHWFMI4jvajrMl%2FlFbkEhpn%2FWS3yZP06bVoDQqQrmv4Zs5ZSOP2jH57JP4PSMcj7adx3d0Xpp9DObpdmDrzGBkqUwAn5Mh6OdZHD5Ts%2FHM9zSTq4M1MUCd6ApqpafWy%2BCB3KsMAqVFtcY2gTMjnSGQ1iEOLrW5CRwaGE%2FrgWQt758fgtJbCcXrUr4lpd3Qn8E7%2FOZrwQitjJAyY%2B3B3ZrU2PrN1WCi5oEi3rm8i2Ka10EKLT%2Bcic3%2Bnm0gwcCxyjzu0fp1GQLu%2FfrCka7dnktvIniYH%2FgneG%2FFr2hIBHv58rCRloHnQLdrXdmEQkUs5FYnTQxmIcwpZ39%2FnfvFmYPt0tlCRsGCPeByK6WBhVl68mO5o5gqWRNFGlpL25B4eEWLHs1ZzTLWa1w13OLKneV5fgdLlJV0Hm5U2ABqDtjA6YGRvRqS%2FtzRR4pgayNK2E1j64o0XDqHG5f4Fs8IhFwIZdSJZL1oIo5txZJorr7EuYMQ1xZK6uIaogt%2B5vDmj%2FBH698dC2MBt0vwXoVtqDYIIknHek32XrAoo1S5Ir0af2xEGOSX3AMOHZiMQGOqUBjGlrraIQe3o1QSIT2F5co7jnX%2FtlQ%2BshUcPu24d6CjSfjCMCwyfFdk6TAl3OmRiuYkaRD%2B%2BsGwqC3J6zkyp8ZWuBbQSiSAF%2BjmuEgsnYMsTZSTaZOkpSIPuIo12AoYyHTm1ek2ysbhD6WqIj9imDqr14aNXu6Qp83ntt9BXU07LE8WY%2Fg85Ey4HkyPPN0BMa6QE4YBbsXjM0H1ZNeFCAdALFxLBo&X-Amz-Signature=6e155e0b9d889f4c1dee449aafbd9109e793cc3e6944b8c1c7ca364d2217f8ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHJMFZ5L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG2ibx%2FQj3L3AjYH1s6ez6JGi%2F3DeB4SJ6XXepQHNaUFAiEAro%2FwtfpuCFqprT1i8N6x%2BRByScnRRxkiEmAbBiyvbxUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMfLFtXWCJsCLUKSoSrcA25r6WfFBBlQ6LrF0gNRKwSIhF7w%2FG2zuGCOdcXywDJCAmO39656JAdStHN8jKH%2Fdhp7dK9f%2BHWFMI4jvajrMl%2FlFbkEhpn%2FWS3yZP06bVoDQqQrmv4Zs5ZSOP2jH57JP4PSMcj7adx3d0Xpp9DObpdmDrzGBkqUwAn5Mh6OdZHD5Ts%2FHM9zSTq4M1MUCd6ApqpafWy%2BCB3KsMAqVFtcY2gTMjnSGQ1iEOLrW5CRwaGE%2FrgWQt758fgtJbCcXrUr4lpd3Qn8E7%2FOZrwQitjJAyY%2B3B3ZrU2PrN1WCi5oEi3rm8i2Ka10EKLT%2Bcic3%2Bnm0gwcCxyjzu0fp1GQLu%2FfrCka7dnktvIniYH%2FgneG%2FFr2hIBHv58rCRloHnQLdrXdmEQkUs5FYnTQxmIcwpZ39%2FnfvFmYPt0tlCRsGCPeByK6WBhVl68mO5o5gqWRNFGlpL25B4eEWLHs1ZzTLWa1w13OLKneV5fgdLlJV0Hm5U2ABqDtjA6YGRvRqS%2FtzRR4pgayNK2E1j64o0XDqHG5f4Fs8IhFwIZdSJZL1oIo5txZJorr7EuYMQ1xZK6uIaogt%2B5vDmj%2FBH698dC2MBt0vwXoVtqDYIIknHek32XrAoo1S5Ir0af2xEGOSX3AMOHZiMQGOqUBjGlrraIQe3o1QSIT2F5co7jnX%2FtlQ%2BshUcPu24d6CjSfjCMCwyfFdk6TAl3OmRiuYkaRD%2B%2BsGwqC3J6zkyp8ZWuBbQSiSAF%2BjmuEgsnYMsTZSTaZOkpSIPuIo12AoYyHTm1ek2ysbhD6WqIj9imDqr14aNXu6Qp83ntt9BXU07LE8WY%2Fg85Ey4HkyPPN0BMa6QE4YBbsXjM0H1ZNeFCAdALFxLBo&X-Amz-Signature=7bae865ef3573c2a687347655951d586930300086251d8b9c06ad92d797b5ea2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHJMFZ5L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG2ibx%2FQj3L3AjYH1s6ez6JGi%2F3DeB4SJ6XXepQHNaUFAiEAro%2FwtfpuCFqprT1i8N6x%2BRByScnRRxkiEmAbBiyvbxUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMfLFtXWCJsCLUKSoSrcA25r6WfFBBlQ6LrF0gNRKwSIhF7w%2FG2zuGCOdcXywDJCAmO39656JAdStHN8jKH%2Fdhp7dK9f%2BHWFMI4jvajrMl%2FlFbkEhpn%2FWS3yZP06bVoDQqQrmv4Zs5ZSOP2jH57JP4PSMcj7adx3d0Xpp9DObpdmDrzGBkqUwAn5Mh6OdZHD5Ts%2FHM9zSTq4M1MUCd6ApqpafWy%2BCB3KsMAqVFtcY2gTMjnSGQ1iEOLrW5CRwaGE%2FrgWQt758fgtJbCcXrUr4lpd3Qn8E7%2FOZrwQitjJAyY%2B3B3ZrU2PrN1WCi5oEi3rm8i2Ka10EKLT%2Bcic3%2Bnm0gwcCxyjzu0fp1GQLu%2FfrCka7dnktvIniYH%2FgneG%2FFr2hIBHv58rCRloHnQLdrXdmEQkUs5FYnTQxmIcwpZ39%2FnfvFmYPt0tlCRsGCPeByK6WBhVl68mO5o5gqWRNFGlpL25B4eEWLHs1ZzTLWa1w13OLKneV5fgdLlJV0Hm5U2ABqDtjA6YGRvRqS%2FtzRR4pgayNK2E1j64o0XDqHG5f4Fs8IhFwIZdSJZL1oIo5txZJorr7EuYMQ1xZK6uIaogt%2B5vDmj%2FBH698dC2MBt0vwXoVtqDYIIknHek32XrAoo1S5Ir0af2xEGOSX3AMOHZiMQGOqUBjGlrraIQe3o1QSIT2F5co7jnX%2FtlQ%2BshUcPu24d6CjSfjCMCwyfFdk6TAl3OmRiuYkaRD%2B%2BsGwqC3J6zkyp8ZWuBbQSiSAF%2BjmuEgsnYMsTZSTaZOkpSIPuIo12AoYyHTm1ek2ysbhD6WqIj9imDqr14aNXu6Qp83ntt9BXU07LE8WY%2Fg85Ey4HkyPPN0BMa6QE4YBbsXjM0H1ZNeFCAdALFxLBo&X-Amz-Signature=d7cf86cc874f12da6692d4e629103cdaf350d48bc425161848b74bf591833540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXCVRTUR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBcTXxy3KdfHz3LvW4AURqpvbmp%2FVRxT7aWPIkpz%2FjO6AiEA4SMvin43DWTmjXZqs7lz8BOtIeOP98cH3A3qEldb50cq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDR3Py1KELv7u2%2FFmircA%2FidC6jJFB7K%2FnD0EHBFlx1%2Fwx%2FSbA4J8gNwOw4PxKSOyAl%2FDCckpbxPeyMOny7HMrm2DSQyU4sQMrvs3B17bTsOeUZcYxFjDn2nnBiUgIzLfML2bjhXA%2F8xuGt4IFQMh0svUODtKgTTKiQ%2Frdt3fTFxHD8bvRXizwPufrgD8tFvES9IBT8epWqcGsXKlo7yzEB2Jy1Zp9mHWWflSGj47KasDArPuCrNoNohjJZzGfFS6QlGt3E2JfR9wMRR1P98FdmhPf%2B8I1SbRM%2BI%2ByF8wvc1bolTgmOaH7kGb9qsXGyzBm6GGPq%2FRnlMz7RZrNa4k%2FDcurJJV5iWJLh2Oss6Z5F%2FJuJQ%2BXP6gD5hvRIWzbVmqfD03yS014qGPFH28bILaMQXMBHlgzh9zs7NJ1rY5IZ9FY%2F0mpP8Csjo4TxFwXQWUl5odFlXhsHrWpqa%2FLK%2BCPt1%2BWYG%2BLZvfgrB%2FMtgnK4KQNFWhVvxvw%2F4dgWllzCvTqp63CdPUQg%2BDkIWcQEwJvB0LjfJkg%2BzIBb65nOhIpBlbj3FsT4SIAbbi2mHadqZ%2Fpv5ywxnIUfigz20t01eqagujyQYqD6f5yuJ%2F2BySI9OGQe2BZZXzF8BV8qs1BE7nhxRptX09BSMPhE9ML%2FZiMQGOqUBZM6vEoLjmhTdM3w3e5q%2Frzg9%2FgCOAg0LgVz9GnnJalOZ7I5Rz5oB3AINcD954xkcqNWF%2FlAHCCYtq0%2FlOkwQ9fsOelaG6iETZVD6oEW3WUQEcLcSFN6KEeYOWnPtxP5VXHTy7AT0azTav%2FPxc1ZToKPiyPcemJM%2Fll36RDGHNX9dSv2B%2FJdqRJpfqXq4%2BIT%2FK6jLniWBCDm%2BActeUi9YD11Kc1My&X-Amz-Signature=8a6d4043c2c44c5ca5961ce95ee561f5d9b8248a306b33197050f043e08d4595&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXCVRTUR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBcTXxy3KdfHz3LvW4AURqpvbmp%2FVRxT7aWPIkpz%2FjO6AiEA4SMvin43DWTmjXZqs7lz8BOtIeOP98cH3A3qEldb50cq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDR3Py1KELv7u2%2FFmircA%2FidC6jJFB7K%2FnD0EHBFlx1%2Fwx%2FSbA4J8gNwOw4PxKSOyAl%2FDCckpbxPeyMOny7HMrm2DSQyU4sQMrvs3B17bTsOeUZcYxFjDn2nnBiUgIzLfML2bjhXA%2F8xuGt4IFQMh0svUODtKgTTKiQ%2Frdt3fTFxHD8bvRXizwPufrgD8tFvES9IBT8epWqcGsXKlo7yzEB2Jy1Zp9mHWWflSGj47KasDArPuCrNoNohjJZzGfFS6QlGt3E2JfR9wMRR1P98FdmhPf%2B8I1SbRM%2BI%2ByF8wvc1bolTgmOaH7kGb9qsXGyzBm6GGPq%2FRnlMz7RZrNa4k%2FDcurJJV5iWJLh2Oss6Z5F%2FJuJQ%2BXP6gD5hvRIWzbVmqfD03yS014qGPFH28bILaMQXMBHlgzh9zs7NJ1rY5IZ9FY%2F0mpP8Csjo4TxFwXQWUl5odFlXhsHrWpqa%2FLK%2BCPt1%2BWYG%2BLZvfgrB%2FMtgnK4KQNFWhVvxvw%2F4dgWllzCvTqp63CdPUQg%2BDkIWcQEwJvB0LjfJkg%2BzIBb65nOhIpBlbj3FsT4SIAbbi2mHadqZ%2Fpv5ywxnIUfigz20t01eqagujyQYqD6f5yuJ%2F2BySI9OGQe2BZZXzF8BV8qs1BE7nhxRptX09BSMPhE9ML%2FZiMQGOqUBZM6vEoLjmhTdM3w3e5q%2Frzg9%2FgCOAg0LgVz9GnnJalOZ7I5Rz5oB3AINcD954xkcqNWF%2FlAHCCYtq0%2FlOkwQ9fsOelaG6iETZVD6oEW3WUQEcLcSFN6KEeYOWnPtxP5VXHTy7AT0azTav%2FPxc1ZToKPiyPcemJM%2Fll36RDGHNX9dSv2B%2FJdqRJpfqXq4%2BIT%2FK6jLniWBCDm%2BActeUi9YD11Kc1My&X-Amz-Signature=46fb3fc2c0cb57a19920f2a379666063cf86bf291d20846586c14fa4c7029671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## launch file

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

## add new files to `setup.py` 

if we add new files types to the package we need to update the `setup.py` and rebuild

```python

from setuptools import find_packages, setup
import os
from glob import glob

files = []
for full_filepath in glob('**/*.*', recursive=True):
    filepath = os.path.split(full_filepath)
    if filepath[0] != '':
        result = (os.path.join('share', package_name, filepath[0]), [full_filepath])
        files.append(result)

package_name = 'mbot_pkg'

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

**run:**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXCVRTUR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBcTXxy3KdfHz3LvW4AURqpvbmp%2FVRxT7aWPIkpz%2FjO6AiEA4SMvin43DWTmjXZqs7lz8BOtIeOP98cH3A3qEldb50cq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDR3Py1KELv7u2%2FFmircA%2FidC6jJFB7K%2FnD0EHBFlx1%2Fwx%2FSbA4J8gNwOw4PxKSOyAl%2FDCckpbxPeyMOny7HMrm2DSQyU4sQMrvs3B17bTsOeUZcYxFjDn2nnBiUgIzLfML2bjhXA%2F8xuGt4IFQMh0svUODtKgTTKiQ%2Frdt3fTFxHD8bvRXizwPufrgD8tFvES9IBT8epWqcGsXKlo7yzEB2Jy1Zp9mHWWflSGj47KasDArPuCrNoNohjJZzGfFS6QlGt3E2JfR9wMRR1P98FdmhPf%2B8I1SbRM%2BI%2ByF8wvc1bolTgmOaH7kGb9qsXGyzBm6GGPq%2FRnlMz7RZrNa4k%2FDcurJJV5iWJLh2Oss6Z5F%2FJuJQ%2BXP6gD5hvRIWzbVmqfD03yS014qGPFH28bILaMQXMBHlgzh9zs7NJ1rY5IZ9FY%2F0mpP8Csjo4TxFwXQWUl5odFlXhsHrWpqa%2FLK%2BCPt1%2BWYG%2BLZvfgrB%2FMtgnK4KQNFWhVvxvw%2F4dgWllzCvTqp63CdPUQg%2BDkIWcQEwJvB0LjfJkg%2BzIBb65nOhIpBlbj3FsT4SIAbbi2mHadqZ%2Fpv5ywxnIUfigz20t01eqagujyQYqD6f5yuJ%2F2BySI9OGQe2BZZXzF8BV8qs1BE7nhxRptX09BSMPhE9ML%2FZiMQGOqUBZM6vEoLjmhTdM3w3e5q%2Frzg9%2FgCOAg0LgVz9GnnJalOZ7I5Rz5oB3AINcD954xkcqNWF%2FlAHCCYtq0%2FlOkwQ9fsOelaG6iETZVD6oEW3WUQEcLcSFN6KEeYOWnPtxP5VXHTy7AT0azTav%2FPxc1ZToKPiyPcemJM%2Fll36RDGHNX9dSv2B%2FJdqRJpfqXq4%2BIT%2FK6jLniWBCDm%2BActeUi9YD11Kc1My&X-Amz-Signature=6ee61f0c3d81ab57c4893171f852258b9542da522796fe8251dc9f560d5a49c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running

In a new terminal tab while `rviz` is still open run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXCVRTUR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBcTXxy3KdfHz3LvW4AURqpvbmp%2FVRxT7aWPIkpz%2FjO6AiEA4SMvin43DWTmjXZqs7lz8BOtIeOP98cH3A3qEldb50cq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDR3Py1KELv7u2%2FFmircA%2FidC6jJFB7K%2FnD0EHBFlx1%2Fwx%2FSbA4J8gNwOw4PxKSOyAl%2FDCckpbxPeyMOny7HMrm2DSQyU4sQMrvs3B17bTsOeUZcYxFjDn2nnBiUgIzLfML2bjhXA%2F8xuGt4IFQMh0svUODtKgTTKiQ%2Frdt3fTFxHD8bvRXizwPufrgD8tFvES9IBT8epWqcGsXKlo7yzEB2Jy1Zp9mHWWflSGj47KasDArPuCrNoNohjJZzGfFS6QlGt3E2JfR9wMRR1P98FdmhPf%2B8I1SbRM%2BI%2ByF8wvc1bolTgmOaH7kGb9qsXGyzBm6GGPq%2FRnlMz7RZrNa4k%2FDcurJJV5iWJLh2Oss6Z5F%2FJuJQ%2BXP6gD5hvRIWzbVmqfD03yS014qGPFH28bILaMQXMBHlgzh9zs7NJ1rY5IZ9FY%2F0mpP8Csjo4TxFwXQWUl5odFlXhsHrWpqa%2FLK%2BCPt1%2BWYG%2BLZvfgrB%2FMtgnK4KQNFWhVvxvw%2F4dgWllzCvTqp63CdPUQg%2BDkIWcQEwJvB0LjfJkg%2BzIBb65nOhIpBlbj3FsT4SIAbbi2mHadqZ%2Fpv5ywxnIUfigz20t01eqagujyQYqD6f5yuJ%2F2BySI9OGQe2BZZXzF8BV8qs1BE7nhxRptX09BSMPhE9ML%2FZiMQGOqUBZM6vEoLjmhTdM3w3e5q%2Frzg9%2FgCOAg0LgVz9GnnJalOZ7I5Rz5oB3AINcD954xkcqNWF%2FlAHCCYtq0%2FlOkwQ9fsOelaG6iETZVD6oEW3WUQEcLcSFN6KEeYOWnPtxP5VXHTy7AT0azTav%2FPxc1ZToKPiyPcemJM%2Fll36RDGHNX9dSv2B%2FJdqRJpfqXq4%2BIT%2FK6jLniWBCDm%2BActeUi9YD11Kc1My&X-Amz-Signature=07bded59771ca2485316715f48e7c9b53ef903a5374c5333fbe0b385bce6bdc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXCVRTUR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBcTXxy3KdfHz3LvW4AURqpvbmp%2FVRxT7aWPIkpz%2FjO6AiEA4SMvin43DWTmjXZqs7lz8BOtIeOP98cH3A3qEldb50cq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDR3Py1KELv7u2%2FFmircA%2FidC6jJFB7K%2FnD0EHBFlx1%2Fwx%2FSbA4J8gNwOw4PxKSOyAl%2FDCckpbxPeyMOny7HMrm2DSQyU4sQMrvs3B17bTsOeUZcYxFjDn2nnBiUgIzLfML2bjhXA%2F8xuGt4IFQMh0svUODtKgTTKiQ%2Frdt3fTFxHD8bvRXizwPufrgD8tFvES9IBT8epWqcGsXKlo7yzEB2Jy1Zp9mHWWflSGj47KasDArPuCrNoNohjJZzGfFS6QlGt3E2JfR9wMRR1P98FdmhPf%2B8I1SbRM%2BI%2ByF8wvc1bolTgmOaH7kGb9qsXGyzBm6GGPq%2FRnlMz7RZrNa4k%2FDcurJJV5iWJLh2Oss6Z5F%2FJuJQ%2BXP6gD5hvRIWzbVmqfD03yS014qGPFH28bILaMQXMBHlgzh9zs7NJ1rY5IZ9FY%2F0mpP8Csjo4TxFwXQWUl5odFlXhsHrWpqa%2FLK%2BCPt1%2BWYG%2BLZvfgrB%2FMtgnK4KQNFWhVvxvw%2F4dgWllzCvTqp63CdPUQg%2BDkIWcQEwJvB0LjfJkg%2BzIBb65nOhIpBlbj3FsT4SIAbbi2mHadqZ%2Fpv5ywxnIUfigz20t01eqagujyQYqD6f5yuJ%2F2BySI9OGQe2BZZXzF8BV8qs1BE7nhxRptX09BSMPhE9ML%2FZiMQGOqUBZM6vEoLjmhTdM3w3e5q%2Frzg9%2FgCOAg0LgVz9GnnJalOZ7I5Rz5oB3AINcD954xkcqNWF%2FlAHCCYtq0%2FlOkwQ9fsOelaG6iETZVD6oEW3WUQEcLcSFN6KEeYOWnPtxP5VXHTy7AT0azTav%2FPxc1ZToKPiyPcemJM%2Fll36RDGHNX9dSv2B%2FJdqRJpfqXq4%2BIT%2FK6jLniWBCDm%2BActeUi9YD11Kc1My&X-Amz-Signature=0a47dbbe255facf22331a2099950df65f0d8396b5461a677f59ac7bf5d4d1f66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXCVRTUR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBcTXxy3KdfHz3LvW4AURqpvbmp%2FVRxT7aWPIkpz%2FjO6AiEA4SMvin43DWTmjXZqs7lz8BOtIeOP98cH3A3qEldb50cq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDR3Py1KELv7u2%2FFmircA%2FidC6jJFB7K%2FnD0EHBFlx1%2Fwx%2FSbA4J8gNwOw4PxKSOyAl%2FDCckpbxPeyMOny7HMrm2DSQyU4sQMrvs3B17bTsOeUZcYxFjDn2nnBiUgIzLfML2bjhXA%2F8xuGt4IFQMh0svUODtKgTTKiQ%2Frdt3fTFxHD8bvRXizwPufrgD8tFvES9IBT8epWqcGsXKlo7yzEB2Jy1Zp9mHWWflSGj47KasDArPuCrNoNohjJZzGfFS6QlGt3E2JfR9wMRR1P98FdmhPf%2B8I1SbRM%2BI%2ByF8wvc1bolTgmOaH7kGb9qsXGyzBm6GGPq%2FRnlMz7RZrNa4k%2FDcurJJV5iWJLh2Oss6Z5F%2FJuJQ%2BXP6gD5hvRIWzbVmqfD03yS014qGPFH28bILaMQXMBHlgzh9zs7NJ1rY5IZ9FY%2F0mpP8Csjo4TxFwXQWUl5odFlXhsHrWpqa%2FLK%2BCPt1%2BWYG%2BLZvfgrB%2FMtgnK4KQNFWhVvxvw%2F4dgWllzCvTqp63CdPUQg%2BDkIWcQEwJvB0LjfJkg%2BzIBb65nOhIpBlbj3FsT4SIAbbi2mHadqZ%2Fpv5ywxnIUfigz20t01eqagujyQYqD6f5yuJ%2F2BySI9OGQe2BZZXzF8BV8qs1BE7nhxRptX09BSMPhE9ML%2FZiMQGOqUBZM6vEoLjmhTdM3w3e5q%2Frzg9%2FgCOAg0LgVz9GnnJalOZ7I5Rz5oB3AINcD954xkcqNWF%2FlAHCCYtq0%2FlOkwQ9fsOelaG6iETZVD6oEW3WUQEcLcSFN6KEeYOWnPtxP5VXHTy7AT0azTav%2FPxc1ZToKPiyPcemJM%2Fll36RDGHNX9dSv2B%2FJdqRJpfqXq4%2BIT%2FK6jLniWBCDm%2BActeUi9YD11Kc1My&X-Amz-Signature=d5fd6f3436fea3ef0721a2471cfd151505c6436ae1e71ca4edf792b6b033e989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
