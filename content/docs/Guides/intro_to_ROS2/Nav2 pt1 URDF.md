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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW2HSVCQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDLMVIRd7CcLRsz%2FDvi17HjC4ltKmWJyePpaGxv2Elu5AiBAX8orsOQNf%2F6VDysfjtiT1FLrJSTmw0%2BSzyEp1HFvVyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMT104H01KDt5pH3sbKtwDK5QRVPVFAmvKKMKs5kYG5OZ11R84%2FnE5ptg5LMDYowIkXpp47iZ5qYrT7ExUhxi9SO7BVeIbMageCoEnlAUT%2FFtptXRTFr7FbCVta%2FCtzf2YhVXm1rz6oN7PmaaiIjzqcyXJ4NyFXhcHtCPJQdWGmbXH6Zx1srpgRhzQx3o59ynvMYocwyLcccYrQcYnkrVBcJyvWj7XErs5vaWEhdLBTFr38nR6RWLjdmwD7VL%2BgBrfleZNNGvBc0H1GM9Nt49OzluALlNohdyL4S2eZWJnFeZxn4KMxeRdwKmYq48IzJeVoGDylaeQvLJcFw8mc50xmfn1vsrTth9eEf%2BehDKQ%2FImK%2BbnOWOg2IeedH9RcEJm8J3GwElxmjykvlMSNsyFH%2BbmXbpKS%2F2dJPzzfgAP5CF0ohA3AWCHRZ72ngJYGRX6eWK6ps0GEVyXecf61M4%2BItGK%2BuqXGWmb3KgLN%2BiuKleRF8cH2LkhqJNSyBpJ1kM%2Bft0vOTdIFJRMzDQJZWlFqRh3iumWy91MqfhQP%2BAL4ttzK7J8kkUQkxy1lPVrlaBhAyzw6o2cpz4%2FESF5Vq7heTXw2R4WUswitcVGIzk7FJTujJmivERVDBo60jtAuGOS8cBObSOYrc%2F4Ki0EwjdvBxAY6pgHRIKor%2B2%2BajM8ZKdUm64cp%2Fkg7zLPJVBAJWO9z7qpvD7%2B1el6m%2FDDcwEwFPj2hZ8YPROUjbtDes3fI30BOjSeU71bRWd3PNnvsj7M1hKfDMUrvoY8C0IvMdPTnRe9MZeUz9Xa55EzPXsZt%2BuCxGN%2FKFd1lMMM4suxDOlBtiBjIxsncJHScKjZldgMx%2FnUb2SRBbQBf03vD5hJofox7Etw2TQcdbUoo&X-Amz-Signature=6f8d5a21920a42b92117cc93096abf687ffcf1da32258bd5ca0923a9455f821c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW2HSVCQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDLMVIRd7CcLRsz%2FDvi17HjC4ltKmWJyePpaGxv2Elu5AiBAX8orsOQNf%2F6VDysfjtiT1FLrJSTmw0%2BSzyEp1HFvVyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMT104H01KDt5pH3sbKtwDK5QRVPVFAmvKKMKs5kYG5OZ11R84%2FnE5ptg5LMDYowIkXpp47iZ5qYrT7ExUhxi9SO7BVeIbMageCoEnlAUT%2FFtptXRTFr7FbCVta%2FCtzf2YhVXm1rz6oN7PmaaiIjzqcyXJ4NyFXhcHtCPJQdWGmbXH6Zx1srpgRhzQx3o59ynvMYocwyLcccYrQcYnkrVBcJyvWj7XErs5vaWEhdLBTFr38nR6RWLjdmwD7VL%2BgBrfleZNNGvBc0H1GM9Nt49OzluALlNohdyL4S2eZWJnFeZxn4KMxeRdwKmYq48IzJeVoGDylaeQvLJcFw8mc50xmfn1vsrTth9eEf%2BehDKQ%2FImK%2BbnOWOg2IeedH9RcEJm8J3GwElxmjykvlMSNsyFH%2BbmXbpKS%2F2dJPzzfgAP5CF0ohA3AWCHRZ72ngJYGRX6eWK6ps0GEVyXecf61M4%2BItGK%2BuqXGWmb3KgLN%2BiuKleRF8cH2LkhqJNSyBpJ1kM%2Bft0vOTdIFJRMzDQJZWlFqRh3iumWy91MqfhQP%2BAL4ttzK7J8kkUQkxy1lPVrlaBhAyzw6o2cpz4%2FESF5Vq7heTXw2R4WUswitcVGIzk7FJTujJmivERVDBo60jtAuGOS8cBObSOYrc%2F4Ki0EwjdvBxAY6pgHRIKor%2B2%2BajM8ZKdUm64cp%2Fkg7zLPJVBAJWO9z7qpvD7%2B1el6m%2FDDcwEwFPj2hZ8YPROUjbtDes3fI30BOjSeU71bRWd3PNnvsj7M1hKfDMUrvoY8C0IvMdPTnRe9MZeUz9Xa55EzPXsZt%2BuCxGN%2FKFd1lMMM4suxDOlBtiBjIxsncJHScKjZldgMx%2FnUb2SRBbQBf03vD5hJofox7Etw2TQcdbUoo&X-Amz-Signature=3b93b504bf1025ea30d33560675707ad8e0ae149ad3aa85ded5df54c512d3a19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW2HSVCQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDLMVIRd7CcLRsz%2FDvi17HjC4ltKmWJyePpaGxv2Elu5AiBAX8orsOQNf%2F6VDysfjtiT1FLrJSTmw0%2BSzyEp1HFvVyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMT104H01KDt5pH3sbKtwDK5QRVPVFAmvKKMKs5kYG5OZ11R84%2FnE5ptg5LMDYowIkXpp47iZ5qYrT7ExUhxi9SO7BVeIbMageCoEnlAUT%2FFtptXRTFr7FbCVta%2FCtzf2YhVXm1rz6oN7PmaaiIjzqcyXJ4NyFXhcHtCPJQdWGmbXH6Zx1srpgRhzQx3o59ynvMYocwyLcccYrQcYnkrVBcJyvWj7XErs5vaWEhdLBTFr38nR6RWLjdmwD7VL%2BgBrfleZNNGvBc0H1GM9Nt49OzluALlNohdyL4S2eZWJnFeZxn4KMxeRdwKmYq48IzJeVoGDylaeQvLJcFw8mc50xmfn1vsrTth9eEf%2BehDKQ%2FImK%2BbnOWOg2IeedH9RcEJm8J3GwElxmjykvlMSNsyFH%2BbmXbpKS%2F2dJPzzfgAP5CF0ohA3AWCHRZ72ngJYGRX6eWK6ps0GEVyXecf61M4%2BItGK%2BuqXGWmb3KgLN%2BiuKleRF8cH2LkhqJNSyBpJ1kM%2Bft0vOTdIFJRMzDQJZWlFqRh3iumWy91MqfhQP%2BAL4ttzK7J8kkUQkxy1lPVrlaBhAyzw6o2cpz4%2FESF5Vq7heTXw2R4WUswitcVGIzk7FJTujJmivERVDBo60jtAuGOS8cBObSOYrc%2F4Ki0EwjdvBxAY6pgHRIKor%2B2%2BajM8ZKdUm64cp%2Fkg7zLPJVBAJWO9z7qpvD7%2B1el6m%2FDDcwEwFPj2hZ8YPROUjbtDes3fI30BOjSeU71bRWd3PNnvsj7M1hKfDMUrvoY8C0IvMdPTnRe9MZeUz9Xa55EzPXsZt%2BuCxGN%2FKFd1lMMM4suxDOlBtiBjIxsncJHScKjZldgMx%2FnUb2SRBbQBf03vD5hJofox7Etw2TQcdbUoo&X-Amz-Signature=c8bf82ea3061b1569cbfdba0466e0ec0032aa098034d884a22b45002539e5e77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW2HSVCQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDLMVIRd7CcLRsz%2FDvi17HjC4ltKmWJyePpaGxv2Elu5AiBAX8orsOQNf%2F6VDysfjtiT1FLrJSTmw0%2BSzyEp1HFvVyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMT104H01KDt5pH3sbKtwDK5QRVPVFAmvKKMKs5kYG5OZ11R84%2FnE5ptg5LMDYowIkXpp47iZ5qYrT7ExUhxi9SO7BVeIbMageCoEnlAUT%2FFtptXRTFr7FbCVta%2FCtzf2YhVXm1rz6oN7PmaaiIjzqcyXJ4NyFXhcHtCPJQdWGmbXH6Zx1srpgRhzQx3o59ynvMYocwyLcccYrQcYnkrVBcJyvWj7XErs5vaWEhdLBTFr38nR6RWLjdmwD7VL%2BgBrfleZNNGvBc0H1GM9Nt49OzluALlNohdyL4S2eZWJnFeZxn4KMxeRdwKmYq48IzJeVoGDylaeQvLJcFw8mc50xmfn1vsrTth9eEf%2BehDKQ%2FImK%2BbnOWOg2IeedH9RcEJm8J3GwElxmjykvlMSNsyFH%2BbmXbpKS%2F2dJPzzfgAP5CF0ohA3AWCHRZ72ngJYGRX6eWK6ps0GEVyXecf61M4%2BItGK%2BuqXGWmb3KgLN%2BiuKleRF8cH2LkhqJNSyBpJ1kM%2Bft0vOTdIFJRMzDQJZWlFqRh3iumWy91MqfhQP%2BAL4ttzK7J8kkUQkxy1lPVrlaBhAyzw6o2cpz4%2FESF5Vq7heTXw2R4WUswitcVGIzk7FJTujJmivERVDBo60jtAuGOS8cBObSOYrc%2F4Ki0EwjdvBxAY6pgHRIKor%2B2%2BajM8ZKdUm64cp%2Fkg7zLPJVBAJWO9z7qpvD7%2B1el6m%2FDDcwEwFPj2hZ8YPROUjbtDes3fI30BOjSeU71bRWd3PNnvsj7M1hKfDMUrvoY8C0IvMdPTnRe9MZeUz9Xa55EzPXsZt%2BuCxGN%2FKFd1lMMM4suxDOlBtiBjIxsncJHScKjZldgMx%2FnUb2SRBbQBf03vD5hJofox7Etw2TQcdbUoo&X-Amz-Signature=dba6c3c6bc7aa6e4a8605c34e8fd303ffb5174902a503faa8259e27017744a44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW2HSVCQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDLMVIRd7CcLRsz%2FDvi17HjC4ltKmWJyePpaGxv2Elu5AiBAX8orsOQNf%2F6VDysfjtiT1FLrJSTmw0%2BSzyEp1HFvVyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMT104H01KDt5pH3sbKtwDK5QRVPVFAmvKKMKs5kYG5OZ11R84%2FnE5ptg5LMDYowIkXpp47iZ5qYrT7ExUhxi9SO7BVeIbMageCoEnlAUT%2FFtptXRTFr7FbCVta%2FCtzf2YhVXm1rz6oN7PmaaiIjzqcyXJ4NyFXhcHtCPJQdWGmbXH6Zx1srpgRhzQx3o59ynvMYocwyLcccYrQcYnkrVBcJyvWj7XErs5vaWEhdLBTFr38nR6RWLjdmwD7VL%2BgBrfleZNNGvBc0H1GM9Nt49OzluALlNohdyL4S2eZWJnFeZxn4KMxeRdwKmYq48IzJeVoGDylaeQvLJcFw8mc50xmfn1vsrTth9eEf%2BehDKQ%2FImK%2BbnOWOg2IeedH9RcEJm8J3GwElxmjykvlMSNsyFH%2BbmXbpKS%2F2dJPzzfgAP5CF0ohA3AWCHRZ72ngJYGRX6eWK6ps0GEVyXecf61M4%2BItGK%2BuqXGWmb3KgLN%2BiuKleRF8cH2LkhqJNSyBpJ1kM%2Bft0vOTdIFJRMzDQJZWlFqRh3iumWy91MqfhQP%2BAL4ttzK7J8kkUQkxy1lPVrlaBhAyzw6o2cpz4%2FESF5Vq7heTXw2R4WUswitcVGIzk7FJTujJmivERVDBo60jtAuGOS8cBObSOYrc%2F4Ki0EwjdvBxAY6pgHRIKor%2B2%2BajM8ZKdUm64cp%2Fkg7zLPJVBAJWO9z7qpvD7%2B1el6m%2FDDcwEwFPj2hZ8YPROUjbtDes3fI30BOjSeU71bRWd3PNnvsj7M1hKfDMUrvoY8C0IvMdPTnRe9MZeUz9Xa55EzPXsZt%2BuCxGN%2FKFd1lMMM4suxDOlBtiBjIxsncJHScKjZldgMx%2FnUb2SRBbQBf03vD5hJofox7Etw2TQcdbUoo&X-Amz-Signature=2b926c67adcea68101f0fe60662c0a094163c595598de2cfd8e180855f77aa33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW2HSVCQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDLMVIRd7CcLRsz%2FDvi17HjC4ltKmWJyePpaGxv2Elu5AiBAX8orsOQNf%2F6VDysfjtiT1FLrJSTmw0%2BSzyEp1HFvVyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMT104H01KDt5pH3sbKtwDK5QRVPVFAmvKKMKs5kYG5OZ11R84%2FnE5ptg5LMDYowIkXpp47iZ5qYrT7ExUhxi9SO7BVeIbMageCoEnlAUT%2FFtptXRTFr7FbCVta%2FCtzf2YhVXm1rz6oN7PmaaiIjzqcyXJ4NyFXhcHtCPJQdWGmbXH6Zx1srpgRhzQx3o59ynvMYocwyLcccYrQcYnkrVBcJyvWj7XErs5vaWEhdLBTFr38nR6RWLjdmwD7VL%2BgBrfleZNNGvBc0H1GM9Nt49OzluALlNohdyL4S2eZWJnFeZxn4KMxeRdwKmYq48IzJeVoGDylaeQvLJcFw8mc50xmfn1vsrTth9eEf%2BehDKQ%2FImK%2BbnOWOg2IeedH9RcEJm8J3GwElxmjykvlMSNsyFH%2BbmXbpKS%2F2dJPzzfgAP5CF0ohA3AWCHRZ72ngJYGRX6eWK6ps0GEVyXecf61M4%2BItGK%2BuqXGWmb3KgLN%2BiuKleRF8cH2LkhqJNSyBpJ1kM%2Bft0vOTdIFJRMzDQJZWlFqRh3iumWy91MqfhQP%2BAL4ttzK7J8kkUQkxy1lPVrlaBhAyzw6o2cpz4%2FESF5Vq7heTXw2R4WUswitcVGIzk7FJTujJmivERVDBo60jtAuGOS8cBObSOYrc%2F4Ki0EwjdvBxAY6pgHRIKor%2B2%2BajM8ZKdUm64cp%2Fkg7zLPJVBAJWO9z7qpvD7%2B1el6m%2FDDcwEwFPj2hZ8YPROUjbtDes3fI30BOjSeU71bRWd3PNnvsj7M1hKfDMUrvoY8C0IvMdPTnRe9MZeUz9Xa55EzPXsZt%2BuCxGN%2FKFd1lMMM4suxDOlBtiBjIxsncJHScKjZldgMx%2FnUb2SRBbQBf03vD5hJofox7Etw2TQcdbUoo&X-Amz-Signature=5f8cd93533b0812c84b28ea9377a38a80070c47e56eac0e3614d2ef8692d3839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW2HSVCQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDLMVIRd7CcLRsz%2FDvi17HjC4ltKmWJyePpaGxv2Elu5AiBAX8orsOQNf%2F6VDysfjtiT1FLrJSTmw0%2BSzyEp1HFvVyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMT104H01KDt5pH3sbKtwDK5QRVPVFAmvKKMKs5kYG5OZ11R84%2FnE5ptg5LMDYowIkXpp47iZ5qYrT7ExUhxi9SO7BVeIbMageCoEnlAUT%2FFtptXRTFr7FbCVta%2FCtzf2YhVXm1rz6oN7PmaaiIjzqcyXJ4NyFXhcHtCPJQdWGmbXH6Zx1srpgRhzQx3o59ynvMYocwyLcccYrQcYnkrVBcJyvWj7XErs5vaWEhdLBTFr38nR6RWLjdmwD7VL%2BgBrfleZNNGvBc0H1GM9Nt49OzluALlNohdyL4S2eZWJnFeZxn4KMxeRdwKmYq48IzJeVoGDylaeQvLJcFw8mc50xmfn1vsrTth9eEf%2BehDKQ%2FImK%2BbnOWOg2IeedH9RcEJm8J3GwElxmjykvlMSNsyFH%2BbmXbpKS%2F2dJPzzfgAP5CF0ohA3AWCHRZ72ngJYGRX6eWK6ps0GEVyXecf61M4%2BItGK%2BuqXGWmb3KgLN%2BiuKleRF8cH2LkhqJNSyBpJ1kM%2Bft0vOTdIFJRMzDQJZWlFqRh3iumWy91MqfhQP%2BAL4ttzK7J8kkUQkxy1lPVrlaBhAyzw6o2cpz4%2FESF5Vq7heTXw2R4WUswitcVGIzk7FJTujJmivERVDBo60jtAuGOS8cBObSOYrc%2F4Ki0EwjdvBxAY6pgHRIKor%2B2%2BajM8ZKdUm64cp%2Fkg7zLPJVBAJWO9z7qpvD7%2B1el6m%2FDDcwEwFPj2hZ8YPROUjbtDes3fI30BOjSeU71bRWd3PNnvsj7M1hKfDMUrvoY8C0IvMdPTnRe9MZeUz9Xa55EzPXsZt%2BuCxGN%2FKFd1lMMM4suxDOlBtiBjIxsncJHScKjZldgMx%2FnUb2SRBbQBf03vD5hJofox7Etw2TQcdbUoo&X-Amz-Signature=f1cbf9fb4ae920b7b671dd4411c698ab42c3823837e4f5e555865a2f7cb63481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW2HSVCQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDLMVIRd7CcLRsz%2FDvi17HjC4ltKmWJyePpaGxv2Elu5AiBAX8orsOQNf%2F6VDysfjtiT1FLrJSTmw0%2BSzyEp1HFvVyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMT104H01KDt5pH3sbKtwDK5QRVPVFAmvKKMKs5kYG5OZ11R84%2FnE5ptg5LMDYowIkXpp47iZ5qYrT7ExUhxi9SO7BVeIbMageCoEnlAUT%2FFtptXRTFr7FbCVta%2FCtzf2YhVXm1rz6oN7PmaaiIjzqcyXJ4NyFXhcHtCPJQdWGmbXH6Zx1srpgRhzQx3o59ynvMYocwyLcccYrQcYnkrVBcJyvWj7XErs5vaWEhdLBTFr38nR6RWLjdmwD7VL%2BgBrfleZNNGvBc0H1GM9Nt49OzluALlNohdyL4S2eZWJnFeZxn4KMxeRdwKmYq48IzJeVoGDylaeQvLJcFw8mc50xmfn1vsrTth9eEf%2BehDKQ%2FImK%2BbnOWOg2IeedH9RcEJm8J3GwElxmjykvlMSNsyFH%2BbmXbpKS%2F2dJPzzfgAP5CF0ohA3AWCHRZ72ngJYGRX6eWK6ps0GEVyXecf61M4%2BItGK%2BuqXGWmb3KgLN%2BiuKleRF8cH2LkhqJNSyBpJ1kM%2Bft0vOTdIFJRMzDQJZWlFqRh3iumWy91MqfhQP%2BAL4ttzK7J8kkUQkxy1lPVrlaBhAyzw6o2cpz4%2FESF5Vq7heTXw2R4WUswitcVGIzk7FJTujJmivERVDBo60jtAuGOS8cBObSOYrc%2F4Ki0EwjdvBxAY6pgHRIKor%2B2%2BajM8ZKdUm64cp%2Fkg7zLPJVBAJWO9z7qpvD7%2B1el6m%2FDDcwEwFPj2hZ8YPROUjbtDes3fI30BOjSeU71bRWd3PNnvsj7M1hKfDMUrvoY8C0IvMdPTnRe9MZeUz9Xa55EzPXsZt%2BuCxGN%2FKFd1lMMM4suxDOlBtiBjIxsncJHScKjZldgMx%2FnUb2SRBbQBf03vD5hJofox7Etw2TQcdbUoo&X-Amz-Signature=c686e39616cdbb18292c0d5dc2a50e550aca8238ae86cc0fde3e0249ffd312e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW2HSVCQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDLMVIRd7CcLRsz%2FDvi17HjC4ltKmWJyePpaGxv2Elu5AiBAX8orsOQNf%2F6VDysfjtiT1FLrJSTmw0%2BSzyEp1HFvVyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMT104H01KDt5pH3sbKtwDK5QRVPVFAmvKKMKs5kYG5OZ11R84%2FnE5ptg5LMDYowIkXpp47iZ5qYrT7ExUhxi9SO7BVeIbMageCoEnlAUT%2FFtptXRTFr7FbCVta%2FCtzf2YhVXm1rz6oN7PmaaiIjzqcyXJ4NyFXhcHtCPJQdWGmbXH6Zx1srpgRhzQx3o59ynvMYocwyLcccYrQcYnkrVBcJyvWj7XErs5vaWEhdLBTFr38nR6RWLjdmwD7VL%2BgBrfleZNNGvBc0H1GM9Nt49OzluALlNohdyL4S2eZWJnFeZxn4KMxeRdwKmYq48IzJeVoGDylaeQvLJcFw8mc50xmfn1vsrTth9eEf%2BehDKQ%2FImK%2BbnOWOg2IeedH9RcEJm8J3GwElxmjykvlMSNsyFH%2BbmXbpKS%2F2dJPzzfgAP5CF0ohA3AWCHRZ72ngJYGRX6eWK6ps0GEVyXecf61M4%2BItGK%2BuqXGWmb3KgLN%2BiuKleRF8cH2LkhqJNSyBpJ1kM%2Bft0vOTdIFJRMzDQJZWlFqRh3iumWy91MqfhQP%2BAL4ttzK7J8kkUQkxy1lPVrlaBhAyzw6o2cpz4%2FESF5Vq7heTXw2R4WUswitcVGIzk7FJTujJmivERVDBo60jtAuGOS8cBObSOYrc%2F4Ki0EwjdvBxAY6pgHRIKor%2B2%2BajM8ZKdUm64cp%2Fkg7zLPJVBAJWO9z7qpvD7%2B1el6m%2FDDcwEwFPj2hZ8YPROUjbtDes3fI30BOjSeU71bRWd3PNnvsj7M1hKfDMUrvoY8C0IvMdPTnRe9MZeUz9Xa55EzPXsZt%2BuCxGN%2FKFd1lMMM4suxDOlBtiBjIxsncJHScKjZldgMx%2FnUb2SRBbQBf03vD5hJofox7Etw2TQcdbUoo&X-Amz-Signature=4b741ecb7a41a9f3fa335abc4bc4bece892e221982a0ed687eeb5abdbd9075cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW2HSVCQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDLMVIRd7CcLRsz%2FDvi17HjC4ltKmWJyePpaGxv2Elu5AiBAX8orsOQNf%2F6VDysfjtiT1FLrJSTmw0%2BSzyEp1HFvVyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMT104H01KDt5pH3sbKtwDK5QRVPVFAmvKKMKs5kYG5OZ11R84%2FnE5ptg5LMDYowIkXpp47iZ5qYrT7ExUhxi9SO7BVeIbMageCoEnlAUT%2FFtptXRTFr7FbCVta%2FCtzf2YhVXm1rz6oN7PmaaiIjzqcyXJ4NyFXhcHtCPJQdWGmbXH6Zx1srpgRhzQx3o59ynvMYocwyLcccYrQcYnkrVBcJyvWj7XErs5vaWEhdLBTFr38nR6RWLjdmwD7VL%2BgBrfleZNNGvBc0H1GM9Nt49OzluALlNohdyL4S2eZWJnFeZxn4KMxeRdwKmYq48IzJeVoGDylaeQvLJcFw8mc50xmfn1vsrTth9eEf%2BehDKQ%2FImK%2BbnOWOg2IeedH9RcEJm8J3GwElxmjykvlMSNsyFH%2BbmXbpKS%2F2dJPzzfgAP5CF0ohA3AWCHRZ72ngJYGRX6eWK6ps0GEVyXecf61M4%2BItGK%2BuqXGWmb3KgLN%2BiuKleRF8cH2LkhqJNSyBpJ1kM%2Bft0vOTdIFJRMzDQJZWlFqRh3iumWy91MqfhQP%2BAL4ttzK7J8kkUQkxy1lPVrlaBhAyzw6o2cpz4%2FESF5Vq7heTXw2R4WUswitcVGIzk7FJTujJmivERVDBo60jtAuGOS8cBObSOYrc%2F4Ki0EwjdvBxAY6pgHRIKor%2B2%2BajM8ZKdUm64cp%2Fkg7zLPJVBAJWO9z7qpvD7%2B1el6m%2FDDcwEwFPj2hZ8YPROUjbtDes3fI30BOjSeU71bRWd3PNnvsj7M1hKfDMUrvoY8C0IvMdPTnRe9MZeUz9Xa55EzPXsZt%2BuCxGN%2FKFd1lMMM4suxDOlBtiBjIxsncJHScKjZldgMx%2FnUb2SRBbQBf03vD5hJofox7Etw2TQcdbUoo&X-Amz-Signature=4764d110527463090e1f6e82406d0952455b5378a1ffa14d3f51b70eeaf5cd46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSGOAHAL%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDGUfENoNbxInktzB7iW1rxH8Dp9S8bOxKOshVHOMpr%2FAIhAMOUOT7LxWra6D9yHJI2nN%2FQ8nGxTnjFP1md7NNvoRTqKv8DCEEQABoMNjM3NDIzMTgzODA1IgxPlTpUNs1LUjtJfPoq3ANg1rdwNyZRniyrgeLmP%2FBjaLIG5xDkaPYwfuAt2uh7eV%2BjBr8%2FI68ZAhLZMmZKYxyx7vrOGFxifzkwMJta4jdAb6RgOcFrZ4QSuEVxar97%2BS8QShzV9k7AbAo%2B8vE4SX9jGu%2ByOcpq6eExoItRuOxs8KGS4GvtzlE18D8K0q6ALIk4MFzneuwf5CJ29xDfNXysfRK4Y7%2BflJPtTUIoWxd4LxhSa4IOUqsIWBNhl6UUxDzzPekH04UYW9jvYSXodfG8JIGJhhzXOl6Gju1QVcFitgUvtuZtScfS6Z%2B8mhKUCphHmqkCsUg8Cd6u%2F1f1dFS7uInygpHByTzll3PqcO8o2Qj7FECp6AxGIoX5dovnnWU%2FTPvtQ36qMHd0rVAXelQIPNYiDTUnCog0JQoWx2jmnMTwFwgDK9AlaEs6RC8rRgKt0gSSofABak7LXlYTIKvcpZjSpSNfjO2ADxf%2BxVWJMYcP1rr974nsSCHFHk2qHZZesuu2aMU1bbgWFxnmduXc1CV4pLQNPN6kiiEe7iL9UaJT%2FQbpaGqp2Jv20rLhWjfhsPEfkHNeAK%2BwTrc6DCHKFdVBSXcp1jq8peA1iT8JhsiwIz8jih7LH%2Fj22rKFFk1T6h%2FSMtUQpcWCRzCk3MHEBjqkARvM2L5oz6NtoB8wC%2FFail9N4hUk4gSwJIf3sobQDB%2B%2BRJkCdClXP6eHQsYZ611ntTIuEwO6CROtXaAMYWEm1SlHG2ZMZiiX6WWOOWq%2B9ULkKVF8ZkfaMz2hGQGeS4AXKIY0tW20BTaUS3JAz6xas6N6XWSqe9XgrZWd4F%2BQZ8lYvK560qwnt1EIfG9RXiBxLEkLjoV1s6G3Jf%2Fg0SWPrwtE85zI&X-Amz-Signature=afddd5cf6d818baf824d9bc4ecaaa2274880021302b7923ae4bc954c0abe58cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GDTGKZA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDDe3nevgdarRscPGgTeK69EiVvD9gzWwPupf5P3Zt%2FwAIhANTzGcanHuyqCldayinQHQq0BKi1akST%2B61AhkBl7XkHKv8DCEIQABoMNjM3NDIzMTgzODA1Igxqa6iBARXJ3c5HjI8q3AMhLWVYbjiNASDgxwuLTUskTVvouqh9Ndqg65IULvm7%2B7KalaydcRYXLFGYmfkVac7WDgoB%2Fsui%2FO19Ab2YztTilTAXucfxyIy5oAeJbatpltt3XpB%2BtJgqbkMiWPtG7NEGksq4YT109sXxRPUWBBIP%2FbrO7oFNRSJYkYLBrZxLGzEHcC7mA7dlsN1VA%2FnPk4YDPDnvBiWidy8wbwEbymhBlkIGQLYkL49e1hfuywZr1lkvw3dRUO3yZBbF0A4o7rT2YETro66E1Q4Aino5u8tosnuZ4hlSfr8L1sl7jKH3Xn0YrHsA52YH00mUgC5SBSSTfE2eAXzRGQlXHhadQZWo97MN5NuRtfuViLZanOEbHbmYm4hFntRxU4EUUtSyQcuJTuiHQBAODLN90CRkl%2BJe4MHollW80BUxMRY09GDoCA7vCil0DzAbs7YpkTWJRZAjGsUjslMVuWh7m%2FrzRplwKvikr0UNj%2BKc3pO36G0MsfAOidWUUceY6vD82podI9BWS73GMHcIc2JCMN4jTWtPoJkPwPM7pmFk6TdvMln8RMihJUMxjufLGusxBC2%2F7WXOjeR%2B7HL56N2nnP%2BUMYjhx9P7suRCA0dWt6A9yT8mbTSgf1Ald7TV6c5QCDDY3MHEBjqkAbxd4IKggUBfH4kyRpWCBxYrhn%2FboXiKDPCtBox6cI%2Byuw3LbdTXoQF6aZMuC9iHPoO7XU5vCjwBjUr4uB6QmBIk5WakbnH0Mf3ZlWB0dvS%2BV8j%2B8dYcj7DaNAVt8Z5IvC5v7f8qtTj0HZGNEaxTEPZo5LSd78sgbB9kna3FgTi%2FLiidgHksycTeJQeod7nOofe9IaQV4OnJzOe4DtRWVBph7uhB&X-Amz-Signature=e9b0744b1a1569d082498fdac92dc60a606fdce70dcb3eea71d9b636b30f681b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SONK3WSA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIEdv97gCAcFPKLV6fJbBGhTufSRnItemJFJtIHsFPSzxAiBw6FiKZe5q8%2BHfzWOJJ7cNoB7gLx7BU3EEzyFUIuQamSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMbWXFGxhy4kJ4Xe3oKtwDtJ%2B8hDVBvbKzA39xHpxGM63yiIW1%2FrIoxwHuKZvo3PkGcbqkbqgKy4guuBo6MIIqRXd6IAX0i9zqQYTVMXxaUOyjl25vQIR1N5E8SR77Vmk6CJBnN0idBHASlIJATdmoUIT2vX%2Ft2Hu4TWi5uzhjy%2FITgSnbH4Pt3FObhMrUhrM80R%2BltcehT5Z1rMoSQ4%2FY8np%2BKkMScdj%2ByWBAr8QEEWD90cvhpxfHZ2MsU0Ff2gis8me1De0VhRcvdNmxDpqCN4ItbPYHgfrNIt6vYFVlZ9aURlTZAU8AyL%2Fjv7xGMH0ZeyLbb5oC%2B4Ak0JZlVvxv1oZuij6HHjtM1N7eeqFOoIAMuT5R4Vtf5Z3dAjkz3iq11R0NEKy1Cj8M7x25JYgegR32qRcFjfghsGCRzhFJMA3tebdaiPZZKdLjxrS8qTc2YE75qmLN60MijDSYfS6%2FbePjHAG0F%2FCfYjnuEwZM7tjjOrrqQYTIJzn2F7eCng%2BXv6fbnJHsm3PcCe0CEgNFWSnum1%2Fiq6yzbmDuapklbD6T0ZUlxyWc4uD3x0o6zvpR5UBOV45ngzrPNvdLIWwG0cJlJWEAdt15%2BsKoaf0MRXwKe0rnXJ7bjju3X02Lwjmc%2FsNNUzExrdxHt8Aw79vBxAY6pgEtNbxbh60toeJDTc9JrC%2BIvyRN4DJXKX%2F1ADthbO4Q4Pj%2BGJgwYvH2uQXJPLiIEI8pzsjO0CUIHKVVJvbM%2FSDUvjp%2ForUwRbf9K5e2Xl6vUSh1ZTDhtaKXre2efkLXRLHRJ4ioP%2BgodUtwQptkO0GqdOojJOBgelVP5XZPY562mKa1qYUGyhjar22nyusZqUuP6qLapaR5EVbvDuMRrSbtHZAVzgk%2F&X-Amz-Signature=732ed663c0a7754cf3d30705790aae3ca39cee1aa28d81f7cfeb78488f9d4123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW2HSVCQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDLMVIRd7CcLRsz%2FDvi17HjC4ltKmWJyePpaGxv2Elu5AiBAX8orsOQNf%2F6VDysfjtiT1FLrJSTmw0%2BSzyEp1HFvVyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMT104H01KDt5pH3sbKtwDK5QRVPVFAmvKKMKs5kYG5OZ11R84%2FnE5ptg5LMDYowIkXpp47iZ5qYrT7ExUhxi9SO7BVeIbMageCoEnlAUT%2FFtptXRTFr7FbCVta%2FCtzf2YhVXm1rz6oN7PmaaiIjzqcyXJ4NyFXhcHtCPJQdWGmbXH6Zx1srpgRhzQx3o59ynvMYocwyLcccYrQcYnkrVBcJyvWj7XErs5vaWEhdLBTFr38nR6RWLjdmwD7VL%2BgBrfleZNNGvBc0H1GM9Nt49OzluALlNohdyL4S2eZWJnFeZxn4KMxeRdwKmYq48IzJeVoGDylaeQvLJcFw8mc50xmfn1vsrTth9eEf%2BehDKQ%2FImK%2BbnOWOg2IeedH9RcEJm8J3GwElxmjykvlMSNsyFH%2BbmXbpKS%2F2dJPzzfgAP5CF0ohA3AWCHRZ72ngJYGRX6eWK6ps0GEVyXecf61M4%2BItGK%2BuqXGWmb3KgLN%2BiuKleRF8cH2LkhqJNSyBpJ1kM%2Bft0vOTdIFJRMzDQJZWlFqRh3iumWy91MqfhQP%2BAL4ttzK7J8kkUQkxy1lPVrlaBhAyzw6o2cpz4%2FESF5Vq7heTXw2R4WUswitcVGIzk7FJTujJmivERVDBo60jtAuGOS8cBObSOYrc%2F4Ki0EwjdvBxAY6pgHRIKor%2B2%2BajM8ZKdUm64cp%2Fkg7zLPJVBAJWO9z7qpvD7%2B1el6m%2FDDcwEwFPj2hZ8YPROUjbtDes3fI30BOjSeU71bRWd3PNnvsj7M1hKfDMUrvoY8C0IvMdPTnRe9MZeUz9Xa55EzPXsZt%2BuCxGN%2FKFd1lMMM4suxDOlBtiBjIxsncJHScKjZldgMx%2FnUb2SRBbQBf03vD5hJofox7Etw2TQcdbUoo&X-Amz-Signature=a127a9d90f152c6b5966a0661a0a25954d835dbc3449ea95ddb320d7b126b4a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJHT765U%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIHk%2F1UQT6u8qXttiK4H28CCAFZd0oqGHIZJcMjQkNUHjAiBoNHI8U3DqeGqWEMW2BFPWGhe%2FAhV%2FvHC057oFn2PlICr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMbMbr8KKWD0wGLcQHKtwDRvPOJWgloDZyFMVwg2%2F3%2Bn%2B40yLnnvHUMfWqattMs6HYI65Qb0RoCxlZS6eyClN2JK4V0wTM0t1BzoDO22r3Ea4xlSpLKjCdaeGqgHaYOrRJp7crhuoyV06IoT5StkRjMSSXoseX7ebI2SfxovWWWWUeyOaKByKcarRh8OHFpiRs5AyyobUCzyzkoGOC7G0AtLjyG8umlLfp24rwbG%2BlWjOH9zigdKPgSiiLdLOQtTPsOrcM2ETaP7P%2BrvrjAB5R78jeFss9jhWNSrk51hZUxTaN3UGxm2kwdO0bCZQqN1PjWiQK6WN%2BTV7ZMtHVFK%2B4bLTddDk%2B2qA95YHaBaMiXmQT5jL0nC147sjWmmCpD4dv7ZtxYQa7fw6QxoSbnVUO6DCw7%2FOjGpbud60GvF6jwkMuzndKe0fUqYuuShT0W9iJWoPhvcI19l53IlaVuyPLeI20ckC9JKybmghK7u6I8ivb3pDSOZfeROkX6Z8jZNBfJ1aul%2Bh7CGDWc%2BAqF9RT6fHXjUtFXOVNWLAL%2FgqkXgY6U%2Fuz7N%2BY5jULms4delybx%2BkvW6IB5ZTKRzANbuj7avqMPejmPQb%2Bi%2B0i6ozU3D2pJJ1awjjo5heZMmuGo4uusfyZnokfJw5zagEw19zBxAY6pgEKgHB1FsEtQeCujXEw7%2F37Q18AcqIOmdrzmwE4seRgL%2B6Xl47PPUu6Jch%2Fn5herv%2BIpMYJmECZJuQLWGOvC1D9r%2BVuveVDwKsD34EiC9ZQgkj75QuvADzPPvULGFZCmX%2Fle3LCAkNIQrDzTfJVHgxmzmKFwM851e4mwYBU2GGhwkuzqQQqquEowYHUneUzQ9i2AlKmq1PyYPf0clNmyEnLZfsKRmyo&X-Amz-Signature=f6cecf20f59b5359d7f676cfb763e8e21835033f1f03d37b615d4260a835eb6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW2HSVCQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDLMVIRd7CcLRsz%2FDvi17HjC4ltKmWJyePpaGxv2Elu5AiBAX8orsOQNf%2F6VDysfjtiT1FLrJSTmw0%2BSzyEp1HFvVyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMT104H01KDt5pH3sbKtwDK5QRVPVFAmvKKMKs5kYG5OZ11R84%2FnE5ptg5LMDYowIkXpp47iZ5qYrT7ExUhxi9SO7BVeIbMageCoEnlAUT%2FFtptXRTFr7FbCVta%2FCtzf2YhVXm1rz6oN7PmaaiIjzqcyXJ4NyFXhcHtCPJQdWGmbXH6Zx1srpgRhzQx3o59ynvMYocwyLcccYrQcYnkrVBcJyvWj7XErs5vaWEhdLBTFr38nR6RWLjdmwD7VL%2BgBrfleZNNGvBc0H1GM9Nt49OzluALlNohdyL4S2eZWJnFeZxn4KMxeRdwKmYq48IzJeVoGDylaeQvLJcFw8mc50xmfn1vsrTth9eEf%2BehDKQ%2FImK%2BbnOWOg2IeedH9RcEJm8J3GwElxmjykvlMSNsyFH%2BbmXbpKS%2F2dJPzzfgAP5CF0ohA3AWCHRZ72ngJYGRX6eWK6ps0GEVyXecf61M4%2BItGK%2BuqXGWmb3KgLN%2BiuKleRF8cH2LkhqJNSyBpJ1kM%2Bft0vOTdIFJRMzDQJZWlFqRh3iumWy91MqfhQP%2BAL4ttzK7J8kkUQkxy1lPVrlaBhAyzw6o2cpz4%2FESF5Vq7heTXw2R4WUswitcVGIzk7FJTujJmivERVDBo60jtAuGOS8cBObSOYrc%2F4Ki0EwjdvBxAY6pgHRIKor%2B2%2BajM8ZKdUm64cp%2Fkg7zLPJVBAJWO9z7qpvD7%2B1el6m%2FDDcwEwFPj2hZ8YPROUjbtDes3fI30BOjSeU71bRWd3PNnvsj7M1hKfDMUrvoY8C0IvMdPTnRe9MZeUz9Xa55EzPXsZt%2BuCxGN%2FKFd1lMMM4suxDOlBtiBjIxsncJHScKjZldgMx%2FnUb2SRBbQBf03vD5hJofox7Etw2TQcdbUoo&X-Amz-Signature=c070b34b81e4e89d7a6774ee5534fd26dd209b28245695afbd7a1257353f36ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6CL56IY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIDFhXaUiIb3BI5a40cTlUlKAIYQiJ3c5EKFtXUYR5EXWAiEAoAwCLZRkuM1YTiIaWahI4VuY5t9BcRBaVTjn%2BDhkPN4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDHwCWPh7f6RQxhLBICrcA1esd4qsIgi5A5JuL%2BgnZENg1HeJ%2F%2FLodEeFg%2BUWp6QbqDVwj7Xa%2BmWF%2FaJPtQYQKRAJ8lL7hwQNat5ObLcSD2PQgvm6VpVJNf%2FxDyzBYzAdMQWnP7oyOTipdimsefJ2HkQDeMVHLL5aUr6e7yCd9YuwqY2XjNLyxfGV8ZeBS4ZvhQPvWYgr5uQQQPXCyvtf1gxm8dkC0pZCoEJx%2BLrQtD9g8XRJ7OJfEAqY6%2BNhEUMplmw9wSYUyI2uc%2FxuBqmw4VTapJ3wJtewVgwwckSbCi9VwNmTsbUV24aEqUR89PhGw7TgjMKrim3i28h6rGe1KnnmZ7VB1gKFjQl%2FOAnweigV%2BMED1Ctj8Q91m2QdJg4kBX2vKNYKCurpmoSLva0fVEfWsj5lKtvrTNaBtJ5%2FE53otp8F9deGW0ZVA%2BIyFD6h%2F7u3McISLHGImctdhPzf4458KjKETFPGR8qB8D4iSE0gJ1wOiU8pZSgZ94MRvS4kFsKuwdkKQZVm175jEPRgfyE4DkT%2FBPuaz5XsaEhRLO99Z8s%2FepROoh0zjbLyhcBGZ2Sys%2FRZSbh9WISZsm%2Bpuq6ViFGTzPQ2KqPB%2FKr1%2Fn8Jz1aHjpXqJ9psb1SHyIbirUMDBYJ6BT1a1sOuMKvcwcQGOqUB7%2B53ZVIc871vLkYXUESK2%2FzBMy3QGOfw5eKFCr0QcECnPjV1yVlkkIs2tsrWX2NypQliVT%2BPD5uhWpX9wlGS8yOCcYgHVUORMfs2fXx8z0d93k0bZTT2szrsdRZJXwabiiAISLBdYRQYnRkjfeC2pwDs3k%2BcGpCmX64baDWarpIAqcZJ%2Br%2BnnBfC%2BJNqNRMN9%2BtT%2FMgA97JF9RKDedkdU0UeZtQo&X-Amz-Signature=1289a501b4e5109137d5d3038b2e7f45a2c1ead898f9e1d07b96c066c5406c51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW2HSVCQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDLMVIRd7CcLRsz%2FDvi17HjC4ltKmWJyePpaGxv2Elu5AiBAX8orsOQNf%2F6VDysfjtiT1FLrJSTmw0%2BSzyEp1HFvVyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMT104H01KDt5pH3sbKtwDK5QRVPVFAmvKKMKs5kYG5OZ11R84%2FnE5ptg5LMDYowIkXpp47iZ5qYrT7ExUhxi9SO7BVeIbMageCoEnlAUT%2FFtptXRTFr7FbCVta%2FCtzf2YhVXm1rz6oN7PmaaiIjzqcyXJ4NyFXhcHtCPJQdWGmbXH6Zx1srpgRhzQx3o59ynvMYocwyLcccYrQcYnkrVBcJyvWj7XErs5vaWEhdLBTFr38nR6RWLjdmwD7VL%2BgBrfleZNNGvBc0H1GM9Nt49OzluALlNohdyL4S2eZWJnFeZxn4KMxeRdwKmYq48IzJeVoGDylaeQvLJcFw8mc50xmfn1vsrTth9eEf%2BehDKQ%2FImK%2BbnOWOg2IeedH9RcEJm8J3GwElxmjykvlMSNsyFH%2BbmXbpKS%2F2dJPzzfgAP5CF0ohA3AWCHRZ72ngJYGRX6eWK6ps0GEVyXecf61M4%2BItGK%2BuqXGWmb3KgLN%2BiuKleRF8cH2LkhqJNSyBpJ1kM%2Bft0vOTdIFJRMzDQJZWlFqRh3iumWy91MqfhQP%2BAL4ttzK7J8kkUQkxy1lPVrlaBhAyzw6o2cpz4%2FESF5Vq7heTXw2R4WUswitcVGIzk7FJTujJmivERVDBo60jtAuGOS8cBObSOYrc%2F4Ki0EwjdvBxAY6pgHRIKor%2B2%2BajM8ZKdUm64cp%2Fkg7zLPJVBAJWO9z7qpvD7%2B1el6m%2FDDcwEwFPj2hZ8YPROUjbtDes3fI30BOjSeU71bRWd3PNnvsj7M1hKfDMUrvoY8C0IvMdPTnRe9MZeUz9Xa55EzPXsZt%2BuCxGN%2FKFd1lMMM4suxDOlBtiBjIxsncJHScKjZldgMx%2FnUb2SRBbQBf03vD5hJofox7Etw2TQcdbUoo&X-Amz-Signature=6d1d9a2def370e549d3e3e6be62c395ae94af21607de5393767054ad5b27f134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFBERX2Q%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDEbMYCT2wDkIQabjoZJKERdfYHy%2BQAWJv71OZZWODKCwIhAKiwIwGtE9Jke2QhvBCY77zfGfwJLhh3qbwWNsOzF3nUKv8DCEEQABoMNjM3NDIzMTgzODA1Igxb1xBKqKxzuQM5m3Iq3AO1XMX4tu4Ai%2BblCL2tQDT9giO0Rv5u45UGNkxSL%2BcGFr6TMJ89%2BBv5TrYx3fIA5VND6oJa4Kz%2BzCYqrPg1QJTY7%2BsmpbsqhKXyn2hIUO5sV1UXv7NWabqTyo21c%2FOIJ4PR3ObUAJuCzNiLRLQM9ZG5SVQFTxGrkJVTrAFbOSvpY%2BVRINXJauLJK8RKc%2FOQxcPgB2K%2BKr7m94Zl%2BYylfljwSPxXIxTVUtVVpHYsKDU8L8go8cH%2B9fJy9eCUCKczexN431HT2mUAWi2020AM3xmdvIMrxvoxkh3X1fp5yt45hX7NuIlBFKW68Xx01LMRAVJhF7oEAt7yadf2b479zVVO5LMNWC02SNfbsmxnzZUnx7wJoetIXmssRqmY%2F8upJ8r7uCUbqP3K0V6mvEjIuTTfsohloI55Oac1wgoMiNtXKZHaXVMzDiJKbGUn6WYlKZCC6LlVOiFUUwC4EcBIx6AVKbMZz4auKfnIOxr1tI8XE0MbQt9Bm38FyvdkJLrZmFbSXfChAUBSObVQlk1kzmEJfD31QMs5mRdSulvJMoBVQNCWY6AYWXjTtDctvvWibsF8zsU0E4ZQ4yqBJDDtwm0hFxRzgkGfQRVJBQsTzGQIFAxvf6y7oCEWYfn06TCK3MHEBjqkARBZWwn11ZQSf7f9f3O89KYhTss%2BCnlQ%2ByLzLhRSYtZ3LsVFdQ63ypOEZhMBz0DSbMKVZ1lC3r5OQEz7wKtZ2kwFWd4AF9sNTDjOOCk67Rr5U%2BBd0DYYKI4XDXbA32LoMEl3c1WnSBZkTMRJHjOKRVvN5bWWZ1%2FhcnsofDj4JASFN9DbHEQkYBEgLTzIZWk7cTTa4RZ14m9hH5u8%2BkfQ%2BbRekTwd&X-Amz-Signature=efb21b456f1f078a7668783c831c120c400441ec38575494c8df67e5528e7395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW2HSVCQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDLMVIRd7CcLRsz%2FDvi17HjC4ltKmWJyePpaGxv2Elu5AiBAX8orsOQNf%2F6VDysfjtiT1FLrJSTmw0%2BSzyEp1HFvVyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMT104H01KDt5pH3sbKtwDK5QRVPVFAmvKKMKs5kYG5OZ11R84%2FnE5ptg5LMDYowIkXpp47iZ5qYrT7ExUhxi9SO7BVeIbMageCoEnlAUT%2FFtptXRTFr7FbCVta%2FCtzf2YhVXm1rz6oN7PmaaiIjzqcyXJ4NyFXhcHtCPJQdWGmbXH6Zx1srpgRhzQx3o59ynvMYocwyLcccYrQcYnkrVBcJyvWj7XErs5vaWEhdLBTFr38nR6RWLjdmwD7VL%2BgBrfleZNNGvBc0H1GM9Nt49OzluALlNohdyL4S2eZWJnFeZxn4KMxeRdwKmYq48IzJeVoGDylaeQvLJcFw8mc50xmfn1vsrTth9eEf%2BehDKQ%2FImK%2BbnOWOg2IeedH9RcEJm8J3GwElxmjykvlMSNsyFH%2BbmXbpKS%2F2dJPzzfgAP5CF0ohA3AWCHRZ72ngJYGRX6eWK6ps0GEVyXecf61M4%2BItGK%2BuqXGWmb3KgLN%2BiuKleRF8cH2LkhqJNSyBpJ1kM%2Bft0vOTdIFJRMzDQJZWlFqRh3iumWy91MqfhQP%2BAL4ttzK7J8kkUQkxy1lPVrlaBhAyzw6o2cpz4%2FESF5Vq7heTXw2R4WUswitcVGIzk7FJTujJmivERVDBo60jtAuGOS8cBObSOYrc%2F4Ki0EwjdvBxAY6pgHRIKor%2B2%2BajM8ZKdUm64cp%2Fkg7zLPJVBAJWO9z7qpvD7%2B1el6m%2FDDcwEwFPj2hZ8YPROUjbtDes3fI30BOjSeU71bRWd3PNnvsj7M1hKfDMUrvoY8C0IvMdPTnRe9MZeUz9Xa55EzPXsZt%2BuCxGN%2FKFd1lMMM4suxDOlBtiBjIxsncJHScKjZldgMx%2FnUb2SRBbQBf03vD5hJofox7Etw2TQcdbUoo&X-Amz-Signature=d15cf47e93c1e6091ec16174c00fd1fa99c7de7c13a3f319be59a74fbf28ecea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z57IZUQ6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIEh3Yy5ad4EAQyDoh2h10V%2FVNl%2Fa%2BmBEz58AzPbcPBzbAiBTydvCMfjTPa1IvzNxmlFSm6cX7AL%2BRsf6VWAIi4HFxCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM6mh0bpinjGTOZj%2BGKtwDNrnFai%2BNDy4odQN6pqocr3yGZtUQXl%2FjJHWZsVWrFU7z5aoloRBLaaOHV6W8RGZMacP7%2Fxe4mgH0%2FoaXSqWxZ4vVkRn4%2F7aA4rNS3QUJe%2BRPPHh7a66wqsgFCNW1w3OLIuVPNoDrGE%2FOt3XKIa8yucVuPVsvHSfjUI4OoRPQjYfUgsnGI71f75ynouIHxltniw%2FB1FDA2ja3%2F25gFZir2OaJ%2BE%2FGuXOwiK9fK%2BWr8A1buL0SGAdEVGOx8maBKdLgg%2BkDlA0zdT0imduIDMTuLaPPlUp3yj0slU5l%2Bkt0jY8eHAcsP10DQKACwvTDdRr0D30rlhxQzmhpqfTz179U8AZCTEo44kev80VbOMcOmJQhBwYFmP08z5NAvgdVHpGJERWAleDyN0lpwJZR8smJyM16ypmga%2BQJW3z6J6vXkqgnb%2F83sQ0blnOdX4h7m6oXh%2Fceu9Xl33y%2FXaPB2QfrBlz6hfykYha%2F69qc3dqMCCEZRz%2Bj6cWs3TLCrVZinsujHEIQWaeEgscLvKQIhC9OkjsNoTWvIE5KNw%2F6M29wuM6jSIKoIvcQw3ZwRO4NIz3SR1VCODToz5G1WKXGUk4M%2BvzQY%2BWB5hez1VR3X1VN9Qy2dKn%2F8iziTc3HnyMwjdvBxAY6pgEbVOFfauMwWnbm%2BCrRonG%2BmNh2nYV39E%2FNKqWfM88Kp4Mq%2F2clWpWSolOdI9PsUhZ1Si4ohCqMQwz6pvrvPyvlAAChM%2BlJCTAmXqGNeTYBMCigha096YqYI5nLwYaHyGICGooJ8u9MgBcwmf0lCaKQ93kg2WPUTNe4x42F6BhJF7DPFNv8lG8GSycELcN%2FBLoWwaMh2lsKxyUG6%2BGY%2B0VFCg7VNizP&X-Amz-Signature=bb1901a41a9a4459885dc44aa2ae07602554390a788a0502e356f936f03e350a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MNFR47L%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQD5IJtLCSzz02e66wg5PQTtqLbDsDlbU2wrIhPqr%2BhGOgIhALNEAlcozSbLPBYBTgbJ%2BBn0MiYxpDr%2Bn7A%2BYcI1p4JFKv8DCEEQABoMNjM3NDIzMTgzODA1IgztDUvmyM%2Bx1N5D0hoq3AMPC1zO%2FAeVvrzjgxM8gZ13ZcggsEitApyclgzDC6v8B1xSCDfpJQXtjsL3Xpw53XhvF%2F4dhWo7C4JKYo%2BGYS4Zie03rWV8tRehouXQRUh2w7vc5Xsr54cUBU5KNu1%2FH8dLIWsS5ahg2TKkU00pdWYT0a6NTxdr0xyE2V8AtDxA80y4aToOfOJbrFr3WTabKaWDNslBA%2FZZkO7Stozvugy5xnGnQe50Iykq9H4yksaAaD%2FwTgVAw7F9xugIf9j77EKn4C94hil0oaqdglRETE95A2LqBzUpx4j2cLxdkoWI2mhKOfny%2Byt4PyI5p2CadSueGGMrQuPb36jiZ475B8L%2FjE1sA0abYoPsGp0Hmj15vBe29CF7zdzSLKvsro5XBvVl%2BHhYCgTNgBCKpOK5SncCDPqxyuDhhab1Ih9Q7PXFRsMQD0xUfYuvQVnLemW0UHXbnj8NOgbyvpp92ZHKYWj0yk33rDimHi%2BszuifOcR2GBQMWgknkh8VTfDM%2BSvEDnjy9%2FzDZ452RViYkVj61XM%2F7fbG4eA9Ymq9UtiRQQEkBXCppLyE1tEi1JEBr0emmfxOulmcLkBgI5VcP4Uktm6XlYuYTD6Rx97JcM0RQbbKuXEJpCKg48%2Fdm4%2B8jzCs3cHEBjqkARo47gCQoROAruQJzGGXKOJUh4DVNxHG%2BVbHkBZvWBhdkcOTi8PJj7eKhM8drceeFW3jwvLtBhgxCWMU424HZjoIMk9OT4tGXd5UmX1Yq42W%2F2XYnZWoDdxznV9SMqbEXwI6L69Tz9CFndjdMj%2BXMDYaaZ1rkOkP6vEw7LNMZotEu78rlzHGgqrpkgPXKpRqxvFC8lmK5zTWAOkJDjKziRbrc4b3&X-Amz-Signature=ee27defd4b6bebed8064206e2a57a5612bfe3caa11956a8fcb51134ae9fc3eae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UJBAVQ5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIHDu0oBYpdxseEoE5RIVfEQzK3g2rwrIll9eQ5F3gpJdAiBSRec70xHTA7r60ya31cRx4Lzn6sm8q332QBIfMw26Iyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMIoFb%2BSTeIcJrxlJdKtwDvf61E3IqSDEZ2ImI6hjJEktYXJwz4yzik4TmvkooVW55lNjhqpBy3yYyWCJTlhUZfau2iwaE1j8LwtFFt%2F%2B4Z3vDqBp2163brFoVSLPLx03x4Lwm8R%2Bn49ZtJUdZlWplHXpqJ1I39D6Bp44JuweNdfF4u8J%2BdGIagIa%2BCk3%2B1YnXNLA8bkdv4JlJelGT55jUMz%2FPuSiO0bYf%2FVWBwh7cppTOha1ODy%2FjqSfcz62t7g5lEw9qktFRv5mtCtFKTNIFZFq7OIEwBOjY0qLM5l8xse05FxdkJvsyAh%2FUvYUUIYSJh0Um8BBrQg3D6HVP6luTWd2cFS4%2F%2BKqUncSXsaKgOkVhmul7GJbwTgvJ198IFc3NXXcS8JRtkVz%2FjOpBFHK%2BeMLXtxaGUUl%2FEQiNyB3VUQwlLudpgeBc56b0xxZDAh3vwgF3%2BcQOXiOSN9gsINA939fPP%2Fe8GaRcYheBHBm%2BMlMIIp2qrFG03BtKePTkLHbHVYR7Ee2UBHTL52H9YkynfPP0OQNp8nncvie3aK03o0UpOnnhywR%2BXLhPJvYS2JwfANFKgFkSmJ50kb3POBWf%2BMATAlVuAx4xPNpWG7FxvkJWgdxzjUkfrADaZQofR5jNb%2B3uoSRXX7ijctgwgtzBxAY6pgGU68JitDNdSUIx%2BlUI3%2B4ybirQbq7yzJqKFsvv2XmJZy2Ps1W%2FGjtDwAJLvTh6U2TP7NpO4apaRpU9AiQVDF6SN818IxMKYiYYp0Q5HyI0r1bsPa3kxIKcEMOr3Uu4HjrUKM8eZeIVilz9McNeM3D49DEBsNRY4xZE1iwBuQCjOeJNIjBfxooxaWyFcPYSa777Yefx6feaxFCOEBsUp3gpi7hVcOyq&X-Amz-Signature=88c4533f0bdc315ae896e228bcd7cca15b30ed2808fbc448ee8111dc9c9d522c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMCHC2FG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCGnIm5Rn%2FTUpaqTx13rSahjFxYkYlQHT59HJcmGpF9FgIgMKneSslC7spnT5tRNA2h1ZjFXoeFzR4W6KrVVo6KiEgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGegUikigbolbZB25CrcAx8b66YzkHWIn53apMVj9ZxA83f7hdouxgZ5oxM62ckO4mOzV5P%2Blvl1ipL277sp7DC85mRdo%2FLmlU7I0HAX0q1dgTaIsHC3SVIlo4IpaGOHJw6%2BLl2baFNeeRCT01jHOb3ek6nPMM45jAKh476JfJZdn21lSWqurEXLT8FNyABYnZbZk4tnn8695Ug647GnyRKo9zow76BTMzCNuhG3xkMvjUuuTJfBRZ82Pnzq94kJlBaxkW2RrQTiE6lWAWaqUN79PEudQoPb9%2FYSzuhi%2FHk70Gzs8Q5b3jnW%2Fdd9xOcBdsWhd4e6yqNt3zceibINjLcGIeYFFMIp9BOHPdi6zOPU%2Bop8lfQb13ZrtX9wxJqqOx7NDQ8ylashrNJGV7%2FW5w8oy%2FH6ZOcZZ4rYoI7Vg7mECb9ESChDhGNsNQ7zfvW35v%2FHYpd9dvhQPFpOgYpIkJ3zMs4kPFdI9GEXXgOMnMQwgfvmgncxxIOAMYQXgoM0asvchgETpA1b4E3kDgqU2RWUYEcc769ap9tt6bCjCUASIs%2BnXLHhvE%2FbdKfeERr9QqGTbXr%2BfPjeoT2iX7KEcctg8TNw9CA9ejbX2ruy1llmq6obuDbxV0qoKY1NM4lSkwP3AypWDy%2BJ6bNOMIfdwcQGOqUBVxJq%2BJkUXGxqJWKXFn%2BUsoOuAUkjXbhsA57IMMyp%2Ba7i3vMyi0ReOh2Csj4Zgq0aGdyB3CoBRytejcDGPayCXZN9TPevEqkpAhIYA73gsTcLMfqKtObgbrL35vXcyv%2F%2BMWHFeIMsb7efwoA0Sz9Q%2FDKrKdWcIZjv%2B7KawiIqX%2BskmMD8sp44Z5vFxp2GfmCMfRx4%2B7XbSXbNYu8JDDDE2hyvmcqg&X-Amz-Signature=b0680b08a2ce94f3f0cccc2321c0e9a99553e67711c226e5c4b3bffabbd265ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USNSG57J%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC7mngzK4AUdZN62w8zdfrUtku1AUyyZCPSLd0r1whXHQIgBolzJLZqX2D2wkqXs9T0VzTo18qlcr9ASTqh%2BL4oC2wq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDFKjiVAXifFHGsJVDCrcA2kTQc8DTwQW42HQ9zj%2BeIpTENV9gP0amgeJ7iQzZbWsO9YD%2BPaLES9qbsvPys6FW6g2HbJQSJADLOkgotYhca111eBN0d58qZndY6upNodGokckkkn4ogUgsDNCmYI%2F%2Fnd0Ne5z8IkwXxc46jDVWdoXTsw9Y0Kr%2F8EwTgLlJcJp2X5ZAizBMroH24qchLbD25%2BXr2MugHNgEK9pf7EU4LvxSP5g8dCkR4W4iz6SwRVkEMCzKlE7N3JBy%2FStLSIqrIvAumLIeygy6jU3OdpPlYTkj6ekgPg0T3J6isco%2B4YjHvk0tB%2Ff8Oe0PIJ1fN2Mg17O6pG2UhaylT5jqS%2FiexDkkKQDlryXisttDPqfFHckM018gRoni89IbeEsxWUyF3JWq2fTg63S55b1cmqdG0cK6xYt5OFKE20c%2BGyu0uq4wd27zvJNaBwYxb%2BdC5tCydYpbudnk6%2FEVKQMyxRx8ym3jlm6bM9rSDd8UMrmthCUwBHeVwt7K2qA4s%2BKJDNvfMAu0MIyylYyMCRma67rSvGlyMCm6RfUgavTGA2emMK%2FQdtG1noO1P0xBlLorwy5JjgomNFrKT9NG9dkXEaucCDxm3HDmIlcfdjlFJkx7YL8EX%2BG6Bbnzz%2BXpCt%2BMIrdwcQGOqUBDVZTlDVYYg70AvYBaEjmLntU0Gq5P2zVVEIQYzaS3u7Gk9ndWVR%2B%2BYQpOffCZ%2BCRFm2k2qq0%2FMY1RIFGZiX9SrkmykuwL6C0Q4WmL6fqGf2%2FfWC1gctdG9hRXZj9x9YmilVX1mD5NZdkntlkcT0QhpBZn3TNb5f6SMAtA2gcfaVMYdGhmpZ5B3aHR2b9%2BXoJhNCPt0KC1QRxo45g7Ei7J%2BCcz6Xn&X-Amz-Signature=b50515fde9382c6c85b8a259b674ab17968efdb854bbaba76a94077b2e395b79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW2HSVCQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDLMVIRd7CcLRsz%2FDvi17HjC4ltKmWJyePpaGxv2Elu5AiBAX8orsOQNf%2F6VDysfjtiT1FLrJSTmw0%2BSzyEp1HFvVyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMT104H01KDt5pH3sbKtwDK5QRVPVFAmvKKMKs5kYG5OZ11R84%2FnE5ptg5LMDYowIkXpp47iZ5qYrT7ExUhxi9SO7BVeIbMageCoEnlAUT%2FFtptXRTFr7FbCVta%2FCtzf2YhVXm1rz6oN7PmaaiIjzqcyXJ4NyFXhcHtCPJQdWGmbXH6Zx1srpgRhzQx3o59ynvMYocwyLcccYrQcYnkrVBcJyvWj7XErs5vaWEhdLBTFr38nR6RWLjdmwD7VL%2BgBrfleZNNGvBc0H1GM9Nt49OzluALlNohdyL4S2eZWJnFeZxn4KMxeRdwKmYq48IzJeVoGDylaeQvLJcFw8mc50xmfn1vsrTth9eEf%2BehDKQ%2FImK%2BbnOWOg2IeedH9RcEJm8J3GwElxmjykvlMSNsyFH%2BbmXbpKS%2F2dJPzzfgAP5CF0ohA3AWCHRZ72ngJYGRX6eWK6ps0GEVyXecf61M4%2BItGK%2BuqXGWmb3KgLN%2BiuKleRF8cH2LkhqJNSyBpJ1kM%2Bft0vOTdIFJRMzDQJZWlFqRh3iumWy91MqfhQP%2BAL4ttzK7J8kkUQkxy1lPVrlaBhAyzw6o2cpz4%2FESF5Vq7heTXw2R4WUswitcVGIzk7FJTujJmivERVDBo60jtAuGOS8cBObSOYrc%2F4Ki0EwjdvBxAY6pgHRIKor%2B2%2BajM8ZKdUm64cp%2Fkg7zLPJVBAJWO9z7qpvD7%2B1el6m%2FDDcwEwFPj2hZ8YPROUjbtDes3fI30BOjSeU71bRWd3PNnvsj7M1hKfDMUrvoY8C0IvMdPTnRe9MZeUz9Xa55EzPXsZt%2BuCxGN%2FKFd1lMMM4suxDOlBtiBjIxsncJHScKjZldgMx%2FnUb2SRBbQBf03vD5hJofox7Etw2TQcdbUoo&X-Amz-Signature=0023d90dc6b16644c31e40644c821e9799f972678af2b96a5df0a580f254fda6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW2HSVCQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDLMVIRd7CcLRsz%2FDvi17HjC4ltKmWJyePpaGxv2Elu5AiBAX8orsOQNf%2F6VDysfjtiT1FLrJSTmw0%2BSzyEp1HFvVyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMT104H01KDt5pH3sbKtwDK5QRVPVFAmvKKMKs5kYG5OZ11R84%2FnE5ptg5LMDYowIkXpp47iZ5qYrT7ExUhxi9SO7BVeIbMageCoEnlAUT%2FFtptXRTFr7FbCVta%2FCtzf2YhVXm1rz6oN7PmaaiIjzqcyXJ4NyFXhcHtCPJQdWGmbXH6Zx1srpgRhzQx3o59ynvMYocwyLcccYrQcYnkrVBcJyvWj7XErs5vaWEhdLBTFr38nR6RWLjdmwD7VL%2BgBrfleZNNGvBc0H1GM9Nt49OzluALlNohdyL4S2eZWJnFeZxn4KMxeRdwKmYq48IzJeVoGDylaeQvLJcFw8mc50xmfn1vsrTth9eEf%2BehDKQ%2FImK%2BbnOWOg2IeedH9RcEJm8J3GwElxmjykvlMSNsyFH%2BbmXbpKS%2F2dJPzzfgAP5CF0ohA3AWCHRZ72ngJYGRX6eWK6ps0GEVyXecf61M4%2BItGK%2BuqXGWmb3KgLN%2BiuKleRF8cH2LkhqJNSyBpJ1kM%2Bft0vOTdIFJRMzDQJZWlFqRh3iumWy91MqfhQP%2BAL4ttzK7J8kkUQkxy1lPVrlaBhAyzw6o2cpz4%2FESF5Vq7heTXw2R4WUswitcVGIzk7FJTujJmivERVDBo60jtAuGOS8cBObSOYrc%2F4Ki0EwjdvBxAY6pgHRIKor%2B2%2BajM8ZKdUm64cp%2Fkg7zLPJVBAJWO9z7qpvD7%2B1el6m%2FDDcwEwFPj2hZ8YPROUjbtDes3fI30BOjSeU71bRWd3PNnvsj7M1hKfDMUrvoY8C0IvMdPTnRe9MZeUz9Xa55EzPXsZt%2BuCxGN%2FKFd1lMMM4suxDOlBtiBjIxsncJHScKjZldgMx%2FnUb2SRBbQBf03vD5hJofox7Etw2TQcdbUoo&X-Amz-Signature=64159141dabfb69b2b2e2d1c639748c3cb09b493c64307039bac8bd379f7d262&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRGITWF7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDjEbqy0vcBL9x47L6RHmsOzNk34YsBjAKye2GI0LXmIwIhAJHpn07UILMGkQtllSP%2FmyxF5UmIigLyvkiq0CoMtyjhKv8DCEEQABoMNjM3NDIzMTgzODA1Igwsc8OZKCB06Ftbym4q3AMOLgGpTbu97NhRkId8f2N9t40eQUkmbDd3ybNN08St%2B7vQBU4zV4Mdv08e4uzXovmWLvO6BMj137ReWOeEOH5%2FQmBKFshVwSrROVfkAa9NSEYuAhDaKbrrGeksRCV%2BQFSKpXdMEA7hzsbcXXlterpGdAr38V0kCTs0p0Cx7QyMaeIcgLwvqOmOjmr55OKjqNAWMLqljpx6V8hTpw%2Bv4xN1TX0WFFvnRNSKaE8t%2FLqz1HrvAoeQvm2z709TaGnsorFPzZXjdkKMf93cyzrd9ahoRdrLd5fAe9%2BOxHW9uhfb1xp%2BpB%2FJ4DSijBoQ5%2Bwt0rTmhNrwiY%2FSY9G4aTxTHqCf33lhXwxsEYm4qluAAuxv5J%2BZJF8YOdLsmvUHAOshy3JDQ5TZsksAZ58n82wuNNMBFXsZQN%2Fb9vNmnsYAF%2BhigWLn7aE%2FBSV1X4Z%2Bjeu7dAtcyKf8MLvq3yXcw9HeWqaSkdza0%2BjwvsJA%2FHBpL0EZUf27nnu%2Bxv6CGozraig2HT5LYOEMInn7kAS%2FY8kq2yD3FnRr3%2BpBbK3bbsHFxr6uHaqFZ8dMeWhsA9zCgwobjK0jlJ0ZgfX00NpH39Ik%2Ba7XspGn8%2FuXGAkU%2BVl6l1I%2BG8xncdZ5Qh0qyYu%2F%2FTCT3MHEBjqkAeRzOr9yc2Lil%2F98KWo%2FwypO8Z0ndLVOeXvWiItkeoE%2FiDrArcFJNfNluLd9AO9OQIWGVKxuQnbUJTFyuCAGeuK5HTFxEKbNy5hjhPfMgPRpSAhxw0PVXeNXVQ%2Ba5Euyi7l8dadjuUudcYGCGIldbA%2BBv5aWIn0bLLo9HnJz9HqtVrMsStTCCHgoh7hDmJDBsZqQXsG%2BEJ%2Bk7aIPGEjk1G18U1Ur&X-Amz-Signature=328aa979a0945f025cf98d964a72d06ec78ce1d5b2cdcb37822b4b484f6aa947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRGITWF7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDjEbqy0vcBL9x47L6RHmsOzNk34YsBjAKye2GI0LXmIwIhAJHpn07UILMGkQtllSP%2FmyxF5UmIigLyvkiq0CoMtyjhKv8DCEEQABoMNjM3NDIzMTgzODA1Igwsc8OZKCB06Ftbym4q3AMOLgGpTbu97NhRkId8f2N9t40eQUkmbDd3ybNN08St%2B7vQBU4zV4Mdv08e4uzXovmWLvO6BMj137ReWOeEOH5%2FQmBKFshVwSrROVfkAa9NSEYuAhDaKbrrGeksRCV%2BQFSKpXdMEA7hzsbcXXlterpGdAr38V0kCTs0p0Cx7QyMaeIcgLwvqOmOjmr55OKjqNAWMLqljpx6V8hTpw%2Bv4xN1TX0WFFvnRNSKaE8t%2FLqz1HrvAoeQvm2z709TaGnsorFPzZXjdkKMf93cyzrd9ahoRdrLd5fAe9%2BOxHW9uhfb1xp%2BpB%2FJ4DSijBoQ5%2Bwt0rTmhNrwiY%2FSY9G4aTxTHqCf33lhXwxsEYm4qluAAuxv5J%2BZJF8YOdLsmvUHAOshy3JDQ5TZsksAZ58n82wuNNMBFXsZQN%2Fb9vNmnsYAF%2BhigWLn7aE%2FBSV1X4Z%2Bjeu7dAtcyKf8MLvq3yXcw9HeWqaSkdza0%2BjwvsJA%2FHBpL0EZUf27nnu%2Bxv6CGozraig2HT5LYOEMInn7kAS%2FY8kq2yD3FnRr3%2BpBbK3bbsHFxr6uHaqFZ8dMeWhsA9zCgwobjK0jlJ0ZgfX00NpH39Ik%2Ba7XspGn8%2FuXGAkU%2BVl6l1I%2BG8xncdZ5Qh0qyYu%2F%2FTCT3MHEBjqkAeRzOr9yc2Lil%2F98KWo%2FwypO8Z0ndLVOeXvWiItkeoE%2FiDrArcFJNfNluLd9AO9OQIWGVKxuQnbUJTFyuCAGeuK5HTFxEKbNy5hjhPfMgPRpSAhxw0PVXeNXVQ%2Ba5Euyi7l8dadjuUudcYGCGIldbA%2BBv5aWIn0bLLo9HnJz9HqtVrMsStTCCHgoh7hDmJDBsZqQXsG%2BEJ%2Bk7aIPGEjk1G18U1Ur&X-Amz-Signature=385d12afe7648ac49aaeb7e207095ecd9059aa33b0bb40fca12f11c65b54438a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRGITWF7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDjEbqy0vcBL9x47L6RHmsOzNk34YsBjAKye2GI0LXmIwIhAJHpn07UILMGkQtllSP%2FmyxF5UmIigLyvkiq0CoMtyjhKv8DCEEQABoMNjM3NDIzMTgzODA1Igwsc8OZKCB06Ftbym4q3AMOLgGpTbu97NhRkId8f2N9t40eQUkmbDd3ybNN08St%2B7vQBU4zV4Mdv08e4uzXovmWLvO6BMj137ReWOeEOH5%2FQmBKFshVwSrROVfkAa9NSEYuAhDaKbrrGeksRCV%2BQFSKpXdMEA7hzsbcXXlterpGdAr38V0kCTs0p0Cx7QyMaeIcgLwvqOmOjmr55OKjqNAWMLqljpx6V8hTpw%2Bv4xN1TX0WFFvnRNSKaE8t%2FLqz1HrvAoeQvm2z709TaGnsorFPzZXjdkKMf93cyzrd9ahoRdrLd5fAe9%2BOxHW9uhfb1xp%2BpB%2FJ4DSijBoQ5%2Bwt0rTmhNrwiY%2FSY9G4aTxTHqCf33lhXwxsEYm4qluAAuxv5J%2BZJF8YOdLsmvUHAOshy3JDQ5TZsksAZ58n82wuNNMBFXsZQN%2Fb9vNmnsYAF%2BhigWLn7aE%2FBSV1X4Z%2Bjeu7dAtcyKf8MLvq3yXcw9HeWqaSkdza0%2BjwvsJA%2FHBpL0EZUf27nnu%2Bxv6CGozraig2HT5LYOEMInn7kAS%2FY8kq2yD3FnRr3%2BpBbK3bbsHFxr6uHaqFZ8dMeWhsA9zCgwobjK0jlJ0ZgfX00NpH39Ik%2Ba7XspGn8%2FuXGAkU%2BVl6l1I%2BG8xncdZ5Qh0qyYu%2F%2FTCT3MHEBjqkAeRzOr9yc2Lil%2F98KWo%2FwypO8Z0ndLVOeXvWiItkeoE%2FiDrArcFJNfNluLd9AO9OQIWGVKxuQnbUJTFyuCAGeuK5HTFxEKbNy5hjhPfMgPRpSAhxw0PVXeNXVQ%2Ba5Euyi7l8dadjuUudcYGCGIldbA%2BBv5aWIn0bLLo9HnJz9HqtVrMsStTCCHgoh7hDmJDBsZqQXsG%2BEJ%2Bk7aIPGEjk1G18U1Ur&X-Amz-Signature=4e31719ee5706da50e1fff7e0d0611c1784813e5c7066b7052cd8dbce0ab101a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRGITWF7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDjEbqy0vcBL9x47L6RHmsOzNk34YsBjAKye2GI0LXmIwIhAJHpn07UILMGkQtllSP%2FmyxF5UmIigLyvkiq0CoMtyjhKv8DCEEQABoMNjM3NDIzMTgzODA1Igwsc8OZKCB06Ftbym4q3AMOLgGpTbu97NhRkId8f2N9t40eQUkmbDd3ybNN08St%2B7vQBU4zV4Mdv08e4uzXovmWLvO6BMj137ReWOeEOH5%2FQmBKFshVwSrROVfkAa9NSEYuAhDaKbrrGeksRCV%2BQFSKpXdMEA7hzsbcXXlterpGdAr38V0kCTs0p0Cx7QyMaeIcgLwvqOmOjmr55OKjqNAWMLqljpx6V8hTpw%2Bv4xN1TX0WFFvnRNSKaE8t%2FLqz1HrvAoeQvm2z709TaGnsorFPzZXjdkKMf93cyzrd9ahoRdrLd5fAe9%2BOxHW9uhfb1xp%2BpB%2FJ4DSijBoQ5%2Bwt0rTmhNrwiY%2FSY9G4aTxTHqCf33lhXwxsEYm4qluAAuxv5J%2BZJF8YOdLsmvUHAOshy3JDQ5TZsksAZ58n82wuNNMBFXsZQN%2Fb9vNmnsYAF%2BhigWLn7aE%2FBSV1X4Z%2Bjeu7dAtcyKf8MLvq3yXcw9HeWqaSkdza0%2BjwvsJA%2FHBpL0EZUf27nnu%2Bxv6CGozraig2HT5LYOEMInn7kAS%2FY8kq2yD3FnRr3%2BpBbK3bbsHFxr6uHaqFZ8dMeWhsA9zCgwobjK0jlJ0ZgfX00NpH39Ik%2Ba7XspGn8%2FuXGAkU%2BVl6l1I%2BG8xncdZ5Qh0qyYu%2F%2FTCT3MHEBjqkAeRzOr9yc2Lil%2F98KWo%2FwypO8Z0ndLVOeXvWiItkeoE%2FiDrArcFJNfNluLd9AO9OQIWGVKxuQnbUJTFyuCAGeuK5HTFxEKbNy5hjhPfMgPRpSAhxw0PVXeNXVQ%2Ba5Euyi7l8dadjuUudcYGCGIldbA%2BBv5aWIn0bLLo9HnJz9HqtVrMsStTCCHgoh7hDmJDBsZqQXsG%2BEJ%2Bk7aIPGEjk1G18U1Ur&X-Amz-Signature=1a037e518a2791906e3546a3f6011fc451f4ec8086c706915d5ec59828551f29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRGITWF7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDjEbqy0vcBL9x47L6RHmsOzNk34YsBjAKye2GI0LXmIwIhAJHpn07UILMGkQtllSP%2FmyxF5UmIigLyvkiq0CoMtyjhKv8DCEEQABoMNjM3NDIzMTgzODA1Igwsc8OZKCB06Ftbym4q3AMOLgGpTbu97NhRkId8f2N9t40eQUkmbDd3ybNN08St%2B7vQBU4zV4Mdv08e4uzXovmWLvO6BMj137ReWOeEOH5%2FQmBKFshVwSrROVfkAa9NSEYuAhDaKbrrGeksRCV%2BQFSKpXdMEA7hzsbcXXlterpGdAr38V0kCTs0p0Cx7QyMaeIcgLwvqOmOjmr55OKjqNAWMLqljpx6V8hTpw%2Bv4xN1TX0WFFvnRNSKaE8t%2FLqz1HrvAoeQvm2z709TaGnsorFPzZXjdkKMf93cyzrd9ahoRdrLd5fAe9%2BOxHW9uhfb1xp%2BpB%2FJ4DSijBoQ5%2Bwt0rTmhNrwiY%2FSY9G4aTxTHqCf33lhXwxsEYm4qluAAuxv5J%2BZJF8YOdLsmvUHAOshy3JDQ5TZsksAZ58n82wuNNMBFXsZQN%2Fb9vNmnsYAF%2BhigWLn7aE%2FBSV1X4Z%2Bjeu7dAtcyKf8MLvq3yXcw9HeWqaSkdza0%2BjwvsJA%2FHBpL0EZUf27nnu%2Bxv6CGozraig2HT5LYOEMInn7kAS%2FY8kq2yD3FnRr3%2BpBbK3bbsHFxr6uHaqFZ8dMeWhsA9zCgwobjK0jlJ0ZgfX00NpH39Ik%2Ba7XspGn8%2FuXGAkU%2BVl6l1I%2BG8xncdZ5Qh0qyYu%2F%2FTCT3MHEBjqkAeRzOr9yc2Lil%2F98KWo%2FwypO8Z0ndLVOeXvWiItkeoE%2FiDrArcFJNfNluLd9AO9OQIWGVKxuQnbUJTFyuCAGeuK5HTFxEKbNy5hjhPfMgPRpSAhxw0PVXeNXVQ%2Ba5Euyi7l8dadjuUudcYGCGIldbA%2BBv5aWIn0bLLo9HnJz9HqtVrMsStTCCHgoh7hDmJDBsZqQXsG%2BEJ%2Bk7aIPGEjk1G18U1Ur&X-Amz-Signature=eb4a409303a6e243d6ab48ffa8604d179499932193c15c93906d83808ccc0a2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRGITWF7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDjEbqy0vcBL9x47L6RHmsOzNk34YsBjAKye2GI0LXmIwIhAJHpn07UILMGkQtllSP%2FmyxF5UmIigLyvkiq0CoMtyjhKv8DCEEQABoMNjM3NDIzMTgzODA1Igwsc8OZKCB06Ftbym4q3AMOLgGpTbu97NhRkId8f2N9t40eQUkmbDd3ybNN08St%2B7vQBU4zV4Mdv08e4uzXovmWLvO6BMj137ReWOeEOH5%2FQmBKFshVwSrROVfkAa9NSEYuAhDaKbrrGeksRCV%2BQFSKpXdMEA7hzsbcXXlterpGdAr38V0kCTs0p0Cx7QyMaeIcgLwvqOmOjmr55OKjqNAWMLqljpx6V8hTpw%2Bv4xN1TX0WFFvnRNSKaE8t%2FLqz1HrvAoeQvm2z709TaGnsorFPzZXjdkKMf93cyzrd9ahoRdrLd5fAe9%2BOxHW9uhfb1xp%2BpB%2FJ4DSijBoQ5%2Bwt0rTmhNrwiY%2FSY9G4aTxTHqCf33lhXwxsEYm4qluAAuxv5J%2BZJF8YOdLsmvUHAOshy3JDQ5TZsksAZ58n82wuNNMBFXsZQN%2Fb9vNmnsYAF%2BhigWLn7aE%2FBSV1X4Z%2Bjeu7dAtcyKf8MLvq3yXcw9HeWqaSkdza0%2BjwvsJA%2FHBpL0EZUf27nnu%2Bxv6CGozraig2HT5LYOEMInn7kAS%2FY8kq2yD3FnRr3%2BpBbK3bbsHFxr6uHaqFZ8dMeWhsA9zCgwobjK0jlJ0ZgfX00NpH39Ik%2Ba7XspGn8%2FuXGAkU%2BVl6l1I%2BG8xncdZ5Qh0qyYu%2F%2FTCT3MHEBjqkAeRzOr9yc2Lil%2F98KWo%2FwypO8Z0ndLVOeXvWiItkeoE%2FiDrArcFJNfNluLd9AO9OQIWGVKxuQnbUJTFyuCAGeuK5HTFxEKbNy5hjhPfMgPRpSAhxw0PVXeNXVQ%2Ba5Euyi7l8dadjuUudcYGCGIldbA%2BBv5aWIn0bLLo9HnJz9HqtVrMsStTCCHgoh7hDmJDBsZqQXsG%2BEJ%2Bk7aIPGEjk1G18U1Ur&X-Amz-Signature=0ef2511042f21aa891e510078f6feb75b6a6bfce14568216ca760a8a60ed42f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRGITWF7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDjEbqy0vcBL9x47L6RHmsOzNk34YsBjAKye2GI0LXmIwIhAJHpn07UILMGkQtllSP%2FmyxF5UmIigLyvkiq0CoMtyjhKv8DCEEQABoMNjM3NDIzMTgzODA1Igwsc8OZKCB06Ftbym4q3AMOLgGpTbu97NhRkId8f2N9t40eQUkmbDd3ybNN08St%2B7vQBU4zV4Mdv08e4uzXovmWLvO6BMj137ReWOeEOH5%2FQmBKFshVwSrROVfkAa9NSEYuAhDaKbrrGeksRCV%2BQFSKpXdMEA7hzsbcXXlterpGdAr38V0kCTs0p0Cx7QyMaeIcgLwvqOmOjmr55OKjqNAWMLqljpx6V8hTpw%2Bv4xN1TX0WFFvnRNSKaE8t%2FLqz1HrvAoeQvm2z709TaGnsorFPzZXjdkKMf93cyzrd9ahoRdrLd5fAe9%2BOxHW9uhfb1xp%2BpB%2FJ4DSijBoQ5%2Bwt0rTmhNrwiY%2FSY9G4aTxTHqCf33lhXwxsEYm4qluAAuxv5J%2BZJF8YOdLsmvUHAOshy3JDQ5TZsksAZ58n82wuNNMBFXsZQN%2Fb9vNmnsYAF%2BhigWLn7aE%2FBSV1X4Z%2Bjeu7dAtcyKf8MLvq3yXcw9HeWqaSkdza0%2BjwvsJA%2FHBpL0EZUf27nnu%2Bxv6CGozraig2HT5LYOEMInn7kAS%2FY8kq2yD3FnRr3%2BpBbK3bbsHFxr6uHaqFZ8dMeWhsA9zCgwobjK0jlJ0ZgfX00NpH39Ik%2Ba7XspGn8%2FuXGAkU%2BVl6l1I%2BG8xncdZ5Qh0qyYu%2F%2FTCT3MHEBjqkAeRzOr9yc2Lil%2F98KWo%2FwypO8Z0ndLVOeXvWiItkeoE%2FiDrArcFJNfNluLd9AO9OQIWGVKxuQnbUJTFyuCAGeuK5HTFxEKbNy5hjhPfMgPRpSAhxw0PVXeNXVQ%2Ba5Euyi7l8dadjuUudcYGCGIldbA%2BBv5aWIn0bLLo9HnJz9HqtVrMsStTCCHgoh7hDmJDBsZqQXsG%2BEJ%2Bk7aIPGEjk1G18U1Ur&X-Amz-Signature=4e31719ee5706da50e1fff7e0d0611c1784813e5c7066b7052cd8dbce0ab101a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRGITWF7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDjEbqy0vcBL9x47L6RHmsOzNk34YsBjAKye2GI0LXmIwIhAJHpn07UILMGkQtllSP%2FmyxF5UmIigLyvkiq0CoMtyjhKv8DCEEQABoMNjM3NDIzMTgzODA1Igwsc8OZKCB06Ftbym4q3AMOLgGpTbu97NhRkId8f2N9t40eQUkmbDd3ybNN08St%2B7vQBU4zV4Mdv08e4uzXovmWLvO6BMj137ReWOeEOH5%2FQmBKFshVwSrROVfkAa9NSEYuAhDaKbrrGeksRCV%2BQFSKpXdMEA7hzsbcXXlterpGdAr38V0kCTs0p0Cx7QyMaeIcgLwvqOmOjmr55OKjqNAWMLqljpx6V8hTpw%2Bv4xN1TX0WFFvnRNSKaE8t%2FLqz1HrvAoeQvm2z709TaGnsorFPzZXjdkKMf93cyzrd9ahoRdrLd5fAe9%2BOxHW9uhfb1xp%2BpB%2FJ4DSijBoQ5%2Bwt0rTmhNrwiY%2FSY9G4aTxTHqCf33lhXwxsEYm4qluAAuxv5J%2BZJF8YOdLsmvUHAOshy3JDQ5TZsksAZ58n82wuNNMBFXsZQN%2Fb9vNmnsYAF%2BhigWLn7aE%2FBSV1X4Z%2Bjeu7dAtcyKf8MLvq3yXcw9HeWqaSkdza0%2BjwvsJA%2FHBpL0EZUf27nnu%2Bxv6CGozraig2HT5LYOEMInn7kAS%2FY8kq2yD3FnRr3%2BpBbK3bbsHFxr6uHaqFZ8dMeWhsA9zCgwobjK0jlJ0ZgfX00NpH39Ik%2Ba7XspGn8%2FuXGAkU%2BVl6l1I%2BG8xncdZ5Qh0qyYu%2F%2FTCT3MHEBjqkAeRzOr9yc2Lil%2F98KWo%2FwypO8Z0ndLVOeXvWiItkeoE%2FiDrArcFJNfNluLd9AO9OQIWGVKxuQnbUJTFyuCAGeuK5HTFxEKbNy5hjhPfMgPRpSAhxw0PVXeNXVQ%2Ba5Euyi7l8dadjuUudcYGCGIldbA%2BBv5aWIn0bLLo9HnJz9HqtVrMsStTCCHgoh7hDmJDBsZqQXsG%2BEJ%2Bk7aIPGEjk1G18U1Ur&X-Amz-Signature=800debab1290a336e6f73cf6370a7714dde556055cb08b163a78a8bfc8b0c208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRGITWF7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDjEbqy0vcBL9x47L6RHmsOzNk34YsBjAKye2GI0LXmIwIhAJHpn07UILMGkQtllSP%2FmyxF5UmIigLyvkiq0CoMtyjhKv8DCEEQABoMNjM3NDIzMTgzODA1Igwsc8OZKCB06Ftbym4q3AMOLgGpTbu97NhRkId8f2N9t40eQUkmbDd3ybNN08St%2B7vQBU4zV4Mdv08e4uzXovmWLvO6BMj137ReWOeEOH5%2FQmBKFshVwSrROVfkAa9NSEYuAhDaKbrrGeksRCV%2BQFSKpXdMEA7hzsbcXXlterpGdAr38V0kCTs0p0Cx7QyMaeIcgLwvqOmOjmr55OKjqNAWMLqljpx6V8hTpw%2Bv4xN1TX0WFFvnRNSKaE8t%2FLqz1HrvAoeQvm2z709TaGnsorFPzZXjdkKMf93cyzrd9ahoRdrLd5fAe9%2BOxHW9uhfb1xp%2BpB%2FJ4DSijBoQ5%2Bwt0rTmhNrwiY%2FSY9G4aTxTHqCf33lhXwxsEYm4qluAAuxv5J%2BZJF8YOdLsmvUHAOshy3JDQ5TZsksAZ58n82wuNNMBFXsZQN%2Fb9vNmnsYAF%2BhigWLn7aE%2FBSV1X4Z%2Bjeu7dAtcyKf8MLvq3yXcw9HeWqaSkdza0%2BjwvsJA%2FHBpL0EZUf27nnu%2Bxv6CGozraig2HT5LYOEMInn7kAS%2FY8kq2yD3FnRr3%2BpBbK3bbsHFxr6uHaqFZ8dMeWhsA9zCgwobjK0jlJ0ZgfX00NpH39Ik%2Ba7XspGn8%2FuXGAkU%2BVl6l1I%2BG8xncdZ5Qh0qyYu%2F%2FTCT3MHEBjqkAeRzOr9yc2Lil%2F98KWo%2FwypO8Z0ndLVOeXvWiItkeoE%2FiDrArcFJNfNluLd9AO9OQIWGVKxuQnbUJTFyuCAGeuK5HTFxEKbNy5hjhPfMgPRpSAhxw0PVXeNXVQ%2Ba5Euyi7l8dadjuUudcYGCGIldbA%2BBv5aWIn0bLLo9HnJz9HqtVrMsStTCCHgoh7hDmJDBsZqQXsG%2BEJ%2Bk7aIPGEjk1G18U1Ur&X-Amz-Signature=5a456a6e8108246017a3127015ec062cf0478e6b9e69fd78f8fb44b305955579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRGITWF7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDjEbqy0vcBL9x47L6RHmsOzNk34YsBjAKye2GI0LXmIwIhAJHpn07UILMGkQtllSP%2FmyxF5UmIigLyvkiq0CoMtyjhKv8DCEEQABoMNjM3NDIzMTgzODA1Igwsc8OZKCB06Ftbym4q3AMOLgGpTbu97NhRkId8f2N9t40eQUkmbDd3ybNN08St%2B7vQBU4zV4Mdv08e4uzXovmWLvO6BMj137ReWOeEOH5%2FQmBKFshVwSrROVfkAa9NSEYuAhDaKbrrGeksRCV%2BQFSKpXdMEA7hzsbcXXlterpGdAr38V0kCTs0p0Cx7QyMaeIcgLwvqOmOjmr55OKjqNAWMLqljpx6V8hTpw%2Bv4xN1TX0WFFvnRNSKaE8t%2FLqz1HrvAoeQvm2z709TaGnsorFPzZXjdkKMf93cyzrd9ahoRdrLd5fAe9%2BOxHW9uhfb1xp%2BpB%2FJ4DSijBoQ5%2Bwt0rTmhNrwiY%2FSY9G4aTxTHqCf33lhXwxsEYm4qluAAuxv5J%2BZJF8YOdLsmvUHAOshy3JDQ5TZsksAZ58n82wuNNMBFXsZQN%2Fb9vNmnsYAF%2BhigWLn7aE%2FBSV1X4Z%2Bjeu7dAtcyKf8MLvq3yXcw9HeWqaSkdza0%2BjwvsJA%2FHBpL0EZUf27nnu%2Bxv6CGozraig2HT5LYOEMInn7kAS%2FY8kq2yD3FnRr3%2BpBbK3bbsHFxr6uHaqFZ8dMeWhsA9zCgwobjK0jlJ0ZgfX00NpH39Ik%2Ba7XspGn8%2FuXGAkU%2BVl6l1I%2BG8xncdZ5Qh0qyYu%2F%2FTCT3MHEBjqkAeRzOr9yc2Lil%2F98KWo%2FwypO8Z0ndLVOeXvWiItkeoE%2FiDrArcFJNfNluLd9AO9OQIWGVKxuQnbUJTFyuCAGeuK5HTFxEKbNy5hjhPfMgPRpSAhxw0PVXeNXVQ%2Ba5Euyi7l8dadjuUudcYGCGIldbA%2BBv5aWIn0bLLo9HnJz9HqtVrMsStTCCHgoh7hDmJDBsZqQXsG%2BEJ%2Bk7aIPGEjk1G18U1Ur&X-Amz-Signature=e9315caf34ba9d9322f113673e55985f3cf7816e83ac45f7771acd9d7b5fe042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
