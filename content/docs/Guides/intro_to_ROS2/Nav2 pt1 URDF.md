---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-28T21:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-28T21:43:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SMFVK7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEMM9DaWlL6ygaZ2Y5E5MLXX957mtiRzeJU6WXYRkg%2BVAiEAgftNI1THoz4knkoz1tihdQAtB4RDd88i0dTGeT3fjUYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGM7fNe8NOBPR%2BcnwSrcA9DPCQtutmh1Wc2LWLSXP7Epp4TeD3%2F%2FTd4hPhybkdtXAuiiNGIA6pDOcHTkp2ofaN%2BpeSHuxkV8vkBStizgHVUigMhMSsO4lMldXfykPUAHeorm4ScShH8orGR4k5J2C%2Fs616ZOhDbnnVJy%2BilpWG5dbbM8fL7qK%2B8WpZ178BdtXKyNG016FcehMA05aXU4D%2BtuKPcWp6eEAY3EBHL4zh4XQqsplPwSk1nHo%2FJ9L37BXduYTdU4NpyN2MuvFctayAFUEL07BZ7JNbT2E7RCEsFXBItqtvr5mbW55jpHZMH%2BP03SpL6McAxrqo1pfqO%2BNtwqIQh1Qe1v0Ufwl8JltNv2gJccLIohAWvErkcwGvSdR7WCodtqWYbvJurNGI2kd4zGEsgttOamFf65ajHFXGyz%2FfUEmtuBHPMpOYtFMLu9W5Q0X4JUGQ5uTzXZjOjG2E1HdG8pKFuEp6k0w5DraoqDNtIk4Szy3em2KBMRyVebOJnz%2B64oAndMwAgbsxuAGzeb%2BU3dHLcVJOJiSr10Z%2FGJcpjh4mNg6k7sZQ6EyrvOFFFFHRLWgpbse%2BruCZRXtWgWtiZDpR5r7VtdzWeOnaDMKRri1CqbQuCNt2aC90dETVFEXAmn7W0KVl7fMOXMoMQGOqUB9upLHljtyKeDu2gnz0SAIfnnsRSNRdTftAWZmOx9H8U5lTIeoU0bXTj5vs50Jxt0v1ROdUBK%2FPU4AhM5yivHs5gIooDL%2BPf1yar4%2BU83XzFXW6qI%2BCZSzK%2BNLOOva2mkBkANjWFK9ELQNpDRvYGR%2BztHC2zB9KYIUM20o%2F2011NdA6TClkpEP2BXLwNdZoUUHk%2B%2FokavqWSfKMKNb5JvK%2BUZ%2Bezs&X-Amz-Signature=63507358f0121f15e31bd63d2a9bdfa53c092f2da24fa076bf2d4e4b4c58a9dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SMFVK7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEMM9DaWlL6ygaZ2Y5E5MLXX957mtiRzeJU6WXYRkg%2BVAiEAgftNI1THoz4knkoz1tihdQAtB4RDd88i0dTGeT3fjUYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGM7fNe8NOBPR%2BcnwSrcA9DPCQtutmh1Wc2LWLSXP7Epp4TeD3%2F%2FTd4hPhybkdtXAuiiNGIA6pDOcHTkp2ofaN%2BpeSHuxkV8vkBStizgHVUigMhMSsO4lMldXfykPUAHeorm4ScShH8orGR4k5J2C%2Fs616ZOhDbnnVJy%2BilpWG5dbbM8fL7qK%2B8WpZ178BdtXKyNG016FcehMA05aXU4D%2BtuKPcWp6eEAY3EBHL4zh4XQqsplPwSk1nHo%2FJ9L37BXduYTdU4NpyN2MuvFctayAFUEL07BZ7JNbT2E7RCEsFXBItqtvr5mbW55jpHZMH%2BP03SpL6McAxrqo1pfqO%2BNtwqIQh1Qe1v0Ufwl8JltNv2gJccLIohAWvErkcwGvSdR7WCodtqWYbvJurNGI2kd4zGEsgttOamFf65ajHFXGyz%2FfUEmtuBHPMpOYtFMLu9W5Q0X4JUGQ5uTzXZjOjG2E1HdG8pKFuEp6k0w5DraoqDNtIk4Szy3em2KBMRyVebOJnz%2B64oAndMwAgbsxuAGzeb%2BU3dHLcVJOJiSr10Z%2FGJcpjh4mNg6k7sZQ6EyrvOFFFFHRLWgpbse%2BruCZRXtWgWtiZDpR5r7VtdzWeOnaDMKRri1CqbQuCNt2aC90dETVFEXAmn7W0KVl7fMOXMoMQGOqUB9upLHljtyKeDu2gnz0SAIfnnsRSNRdTftAWZmOx9H8U5lTIeoU0bXTj5vs50Jxt0v1ROdUBK%2FPU4AhM5yivHs5gIooDL%2BPf1yar4%2BU83XzFXW6qI%2BCZSzK%2BNLOOva2mkBkANjWFK9ELQNpDRvYGR%2BztHC2zB9KYIUM20o%2F2011NdA6TClkpEP2BXLwNdZoUUHk%2B%2FokavqWSfKMKNb5JvK%2BUZ%2Bezs&X-Amz-Signature=3ead66bdd1504591448c218b9216e0387c5d57fe349d096b7a2facec3911a453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SMFVK7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEMM9DaWlL6ygaZ2Y5E5MLXX957mtiRzeJU6WXYRkg%2BVAiEAgftNI1THoz4knkoz1tihdQAtB4RDd88i0dTGeT3fjUYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGM7fNe8NOBPR%2BcnwSrcA9DPCQtutmh1Wc2LWLSXP7Epp4TeD3%2F%2FTd4hPhybkdtXAuiiNGIA6pDOcHTkp2ofaN%2BpeSHuxkV8vkBStizgHVUigMhMSsO4lMldXfykPUAHeorm4ScShH8orGR4k5J2C%2Fs616ZOhDbnnVJy%2BilpWG5dbbM8fL7qK%2B8WpZ178BdtXKyNG016FcehMA05aXU4D%2BtuKPcWp6eEAY3EBHL4zh4XQqsplPwSk1nHo%2FJ9L37BXduYTdU4NpyN2MuvFctayAFUEL07BZ7JNbT2E7RCEsFXBItqtvr5mbW55jpHZMH%2BP03SpL6McAxrqo1pfqO%2BNtwqIQh1Qe1v0Ufwl8JltNv2gJccLIohAWvErkcwGvSdR7WCodtqWYbvJurNGI2kd4zGEsgttOamFf65ajHFXGyz%2FfUEmtuBHPMpOYtFMLu9W5Q0X4JUGQ5uTzXZjOjG2E1HdG8pKFuEp6k0w5DraoqDNtIk4Szy3em2KBMRyVebOJnz%2B64oAndMwAgbsxuAGzeb%2BU3dHLcVJOJiSr10Z%2FGJcpjh4mNg6k7sZQ6EyrvOFFFFHRLWgpbse%2BruCZRXtWgWtiZDpR5r7VtdzWeOnaDMKRri1CqbQuCNt2aC90dETVFEXAmn7W0KVl7fMOXMoMQGOqUB9upLHljtyKeDu2gnz0SAIfnnsRSNRdTftAWZmOx9H8U5lTIeoU0bXTj5vs50Jxt0v1ROdUBK%2FPU4AhM5yivHs5gIooDL%2BPf1yar4%2BU83XzFXW6qI%2BCZSzK%2BNLOOva2mkBkANjWFK9ELQNpDRvYGR%2BztHC2zB9KYIUM20o%2F2011NdA6TClkpEP2BXLwNdZoUUHk%2B%2FokavqWSfKMKNb5JvK%2BUZ%2Bezs&X-Amz-Signature=349def10d99ac6775f6ceb5752451f0f07bd436d2bbd43d380877260cbe60a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SMFVK7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEMM9DaWlL6ygaZ2Y5E5MLXX957mtiRzeJU6WXYRkg%2BVAiEAgftNI1THoz4knkoz1tihdQAtB4RDd88i0dTGeT3fjUYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGM7fNe8NOBPR%2BcnwSrcA9DPCQtutmh1Wc2LWLSXP7Epp4TeD3%2F%2FTd4hPhybkdtXAuiiNGIA6pDOcHTkp2ofaN%2BpeSHuxkV8vkBStizgHVUigMhMSsO4lMldXfykPUAHeorm4ScShH8orGR4k5J2C%2Fs616ZOhDbnnVJy%2BilpWG5dbbM8fL7qK%2B8WpZ178BdtXKyNG016FcehMA05aXU4D%2BtuKPcWp6eEAY3EBHL4zh4XQqsplPwSk1nHo%2FJ9L37BXduYTdU4NpyN2MuvFctayAFUEL07BZ7JNbT2E7RCEsFXBItqtvr5mbW55jpHZMH%2BP03SpL6McAxrqo1pfqO%2BNtwqIQh1Qe1v0Ufwl8JltNv2gJccLIohAWvErkcwGvSdR7WCodtqWYbvJurNGI2kd4zGEsgttOamFf65ajHFXGyz%2FfUEmtuBHPMpOYtFMLu9W5Q0X4JUGQ5uTzXZjOjG2E1HdG8pKFuEp6k0w5DraoqDNtIk4Szy3em2KBMRyVebOJnz%2B64oAndMwAgbsxuAGzeb%2BU3dHLcVJOJiSr10Z%2FGJcpjh4mNg6k7sZQ6EyrvOFFFFHRLWgpbse%2BruCZRXtWgWtiZDpR5r7VtdzWeOnaDMKRri1CqbQuCNt2aC90dETVFEXAmn7W0KVl7fMOXMoMQGOqUB9upLHljtyKeDu2gnz0SAIfnnsRSNRdTftAWZmOx9H8U5lTIeoU0bXTj5vs50Jxt0v1ROdUBK%2FPU4AhM5yivHs5gIooDL%2BPf1yar4%2BU83XzFXW6qI%2BCZSzK%2BNLOOva2mkBkANjWFK9ELQNpDRvYGR%2BztHC2zB9KYIUM20o%2F2011NdA6TClkpEP2BXLwNdZoUUHk%2B%2FokavqWSfKMKNb5JvK%2BUZ%2Bezs&X-Amz-Signature=1aef71b3df8b81ffb08555fb7cab9679136ad0b340a7e4dc65b994de2faff90f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SMFVK7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEMM9DaWlL6ygaZ2Y5E5MLXX957mtiRzeJU6WXYRkg%2BVAiEAgftNI1THoz4knkoz1tihdQAtB4RDd88i0dTGeT3fjUYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGM7fNe8NOBPR%2BcnwSrcA9DPCQtutmh1Wc2LWLSXP7Epp4TeD3%2F%2FTd4hPhybkdtXAuiiNGIA6pDOcHTkp2ofaN%2BpeSHuxkV8vkBStizgHVUigMhMSsO4lMldXfykPUAHeorm4ScShH8orGR4k5J2C%2Fs616ZOhDbnnVJy%2BilpWG5dbbM8fL7qK%2B8WpZ178BdtXKyNG016FcehMA05aXU4D%2BtuKPcWp6eEAY3EBHL4zh4XQqsplPwSk1nHo%2FJ9L37BXduYTdU4NpyN2MuvFctayAFUEL07BZ7JNbT2E7RCEsFXBItqtvr5mbW55jpHZMH%2BP03SpL6McAxrqo1pfqO%2BNtwqIQh1Qe1v0Ufwl8JltNv2gJccLIohAWvErkcwGvSdR7WCodtqWYbvJurNGI2kd4zGEsgttOamFf65ajHFXGyz%2FfUEmtuBHPMpOYtFMLu9W5Q0X4JUGQ5uTzXZjOjG2E1HdG8pKFuEp6k0w5DraoqDNtIk4Szy3em2KBMRyVebOJnz%2B64oAndMwAgbsxuAGzeb%2BU3dHLcVJOJiSr10Z%2FGJcpjh4mNg6k7sZQ6EyrvOFFFFHRLWgpbse%2BruCZRXtWgWtiZDpR5r7VtdzWeOnaDMKRri1CqbQuCNt2aC90dETVFEXAmn7W0KVl7fMOXMoMQGOqUB9upLHljtyKeDu2gnz0SAIfnnsRSNRdTftAWZmOx9H8U5lTIeoU0bXTj5vs50Jxt0v1ROdUBK%2FPU4AhM5yivHs5gIooDL%2BPf1yar4%2BU83XzFXW6qI%2BCZSzK%2BNLOOva2mkBkANjWFK9ELQNpDRvYGR%2BztHC2zB9KYIUM20o%2F2011NdA6TClkpEP2BXLwNdZoUUHk%2B%2FokavqWSfKMKNb5JvK%2BUZ%2Bezs&X-Amz-Signature=7824af0b88b5cc80b7cccde3ff2cd865829ecc47f434c95e038891e0f24263dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SMFVK7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEMM9DaWlL6ygaZ2Y5E5MLXX957mtiRzeJU6WXYRkg%2BVAiEAgftNI1THoz4knkoz1tihdQAtB4RDd88i0dTGeT3fjUYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGM7fNe8NOBPR%2BcnwSrcA9DPCQtutmh1Wc2LWLSXP7Epp4TeD3%2F%2FTd4hPhybkdtXAuiiNGIA6pDOcHTkp2ofaN%2BpeSHuxkV8vkBStizgHVUigMhMSsO4lMldXfykPUAHeorm4ScShH8orGR4k5J2C%2Fs616ZOhDbnnVJy%2BilpWG5dbbM8fL7qK%2B8WpZ178BdtXKyNG016FcehMA05aXU4D%2BtuKPcWp6eEAY3EBHL4zh4XQqsplPwSk1nHo%2FJ9L37BXduYTdU4NpyN2MuvFctayAFUEL07BZ7JNbT2E7RCEsFXBItqtvr5mbW55jpHZMH%2BP03SpL6McAxrqo1pfqO%2BNtwqIQh1Qe1v0Ufwl8JltNv2gJccLIohAWvErkcwGvSdR7WCodtqWYbvJurNGI2kd4zGEsgttOamFf65ajHFXGyz%2FfUEmtuBHPMpOYtFMLu9W5Q0X4JUGQ5uTzXZjOjG2E1HdG8pKFuEp6k0w5DraoqDNtIk4Szy3em2KBMRyVebOJnz%2B64oAndMwAgbsxuAGzeb%2BU3dHLcVJOJiSr10Z%2FGJcpjh4mNg6k7sZQ6EyrvOFFFFHRLWgpbse%2BruCZRXtWgWtiZDpR5r7VtdzWeOnaDMKRri1CqbQuCNt2aC90dETVFEXAmn7W0KVl7fMOXMoMQGOqUB9upLHljtyKeDu2gnz0SAIfnnsRSNRdTftAWZmOx9H8U5lTIeoU0bXTj5vs50Jxt0v1ROdUBK%2FPU4AhM5yivHs5gIooDL%2BPf1yar4%2BU83XzFXW6qI%2BCZSzK%2BNLOOva2mkBkANjWFK9ELQNpDRvYGR%2BztHC2zB9KYIUM20o%2F2011NdA6TClkpEP2BXLwNdZoUUHk%2B%2FokavqWSfKMKNb5JvK%2BUZ%2Bezs&X-Amz-Signature=dad9fc6460ee3d03630d63f88bdf86f906ffe15424ed5cda3985659ace15e2c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SMFVK7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEMM9DaWlL6ygaZ2Y5E5MLXX957mtiRzeJU6WXYRkg%2BVAiEAgftNI1THoz4knkoz1tihdQAtB4RDd88i0dTGeT3fjUYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGM7fNe8NOBPR%2BcnwSrcA9DPCQtutmh1Wc2LWLSXP7Epp4TeD3%2F%2FTd4hPhybkdtXAuiiNGIA6pDOcHTkp2ofaN%2BpeSHuxkV8vkBStizgHVUigMhMSsO4lMldXfykPUAHeorm4ScShH8orGR4k5J2C%2Fs616ZOhDbnnVJy%2BilpWG5dbbM8fL7qK%2B8WpZ178BdtXKyNG016FcehMA05aXU4D%2BtuKPcWp6eEAY3EBHL4zh4XQqsplPwSk1nHo%2FJ9L37BXduYTdU4NpyN2MuvFctayAFUEL07BZ7JNbT2E7RCEsFXBItqtvr5mbW55jpHZMH%2BP03SpL6McAxrqo1pfqO%2BNtwqIQh1Qe1v0Ufwl8JltNv2gJccLIohAWvErkcwGvSdR7WCodtqWYbvJurNGI2kd4zGEsgttOamFf65ajHFXGyz%2FfUEmtuBHPMpOYtFMLu9W5Q0X4JUGQ5uTzXZjOjG2E1HdG8pKFuEp6k0w5DraoqDNtIk4Szy3em2KBMRyVebOJnz%2B64oAndMwAgbsxuAGzeb%2BU3dHLcVJOJiSr10Z%2FGJcpjh4mNg6k7sZQ6EyrvOFFFFHRLWgpbse%2BruCZRXtWgWtiZDpR5r7VtdzWeOnaDMKRri1CqbQuCNt2aC90dETVFEXAmn7W0KVl7fMOXMoMQGOqUB9upLHljtyKeDu2gnz0SAIfnnsRSNRdTftAWZmOx9H8U5lTIeoU0bXTj5vs50Jxt0v1ROdUBK%2FPU4AhM5yivHs5gIooDL%2BPf1yar4%2BU83XzFXW6qI%2BCZSzK%2BNLOOva2mkBkANjWFK9ELQNpDRvYGR%2BztHC2zB9KYIUM20o%2F2011NdA6TClkpEP2BXLwNdZoUUHk%2B%2FokavqWSfKMKNb5JvK%2BUZ%2Bezs&X-Amz-Signature=f1704dc121fc6a30d886e0a6c6690e48645ff9ffec61eb98c4e9679496ed4482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SMFVK7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEMM9DaWlL6ygaZ2Y5E5MLXX957mtiRzeJU6WXYRkg%2BVAiEAgftNI1THoz4knkoz1tihdQAtB4RDd88i0dTGeT3fjUYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGM7fNe8NOBPR%2BcnwSrcA9DPCQtutmh1Wc2LWLSXP7Epp4TeD3%2F%2FTd4hPhybkdtXAuiiNGIA6pDOcHTkp2ofaN%2BpeSHuxkV8vkBStizgHVUigMhMSsO4lMldXfykPUAHeorm4ScShH8orGR4k5J2C%2Fs616ZOhDbnnVJy%2BilpWG5dbbM8fL7qK%2B8WpZ178BdtXKyNG016FcehMA05aXU4D%2BtuKPcWp6eEAY3EBHL4zh4XQqsplPwSk1nHo%2FJ9L37BXduYTdU4NpyN2MuvFctayAFUEL07BZ7JNbT2E7RCEsFXBItqtvr5mbW55jpHZMH%2BP03SpL6McAxrqo1pfqO%2BNtwqIQh1Qe1v0Ufwl8JltNv2gJccLIohAWvErkcwGvSdR7WCodtqWYbvJurNGI2kd4zGEsgttOamFf65ajHFXGyz%2FfUEmtuBHPMpOYtFMLu9W5Q0X4JUGQ5uTzXZjOjG2E1HdG8pKFuEp6k0w5DraoqDNtIk4Szy3em2KBMRyVebOJnz%2B64oAndMwAgbsxuAGzeb%2BU3dHLcVJOJiSr10Z%2FGJcpjh4mNg6k7sZQ6EyrvOFFFFHRLWgpbse%2BruCZRXtWgWtiZDpR5r7VtdzWeOnaDMKRri1CqbQuCNt2aC90dETVFEXAmn7W0KVl7fMOXMoMQGOqUB9upLHljtyKeDu2gnz0SAIfnnsRSNRdTftAWZmOx9H8U5lTIeoU0bXTj5vs50Jxt0v1ROdUBK%2FPU4AhM5yivHs5gIooDL%2BPf1yar4%2BU83XzFXW6qI%2BCZSzK%2BNLOOva2mkBkANjWFK9ELQNpDRvYGR%2BztHC2zB9KYIUM20o%2F2011NdA6TClkpEP2BXLwNdZoUUHk%2B%2FokavqWSfKMKNb5JvK%2BUZ%2Bezs&X-Amz-Signature=49bb468cd6bc03c05c42046555b8022bd3d686beb0662e86846104619de1e686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SMFVK7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEMM9DaWlL6ygaZ2Y5E5MLXX957mtiRzeJU6WXYRkg%2BVAiEAgftNI1THoz4knkoz1tihdQAtB4RDd88i0dTGeT3fjUYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGM7fNe8NOBPR%2BcnwSrcA9DPCQtutmh1Wc2LWLSXP7Epp4TeD3%2F%2FTd4hPhybkdtXAuiiNGIA6pDOcHTkp2ofaN%2BpeSHuxkV8vkBStizgHVUigMhMSsO4lMldXfykPUAHeorm4ScShH8orGR4k5J2C%2Fs616ZOhDbnnVJy%2BilpWG5dbbM8fL7qK%2B8WpZ178BdtXKyNG016FcehMA05aXU4D%2BtuKPcWp6eEAY3EBHL4zh4XQqsplPwSk1nHo%2FJ9L37BXduYTdU4NpyN2MuvFctayAFUEL07BZ7JNbT2E7RCEsFXBItqtvr5mbW55jpHZMH%2BP03SpL6McAxrqo1pfqO%2BNtwqIQh1Qe1v0Ufwl8JltNv2gJccLIohAWvErkcwGvSdR7WCodtqWYbvJurNGI2kd4zGEsgttOamFf65ajHFXGyz%2FfUEmtuBHPMpOYtFMLu9W5Q0X4JUGQ5uTzXZjOjG2E1HdG8pKFuEp6k0w5DraoqDNtIk4Szy3em2KBMRyVebOJnz%2B64oAndMwAgbsxuAGzeb%2BU3dHLcVJOJiSr10Z%2FGJcpjh4mNg6k7sZQ6EyrvOFFFFHRLWgpbse%2BruCZRXtWgWtiZDpR5r7VtdzWeOnaDMKRri1CqbQuCNt2aC90dETVFEXAmn7W0KVl7fMOXMoMQGOqUB9upLHljtyKeDu2gnz0SAIfnnsRSNRdTftAWZmOx9H8U5lTIeoU0bXTj5vs50Jxt0v1ROdUBK%2FPU4AhM5yivHs5gIooDL%2BPf1yar4%2BU83XzFXW6qI%2BCZSzK%2BNLOOva2mkBkANjWFK9ELQNpDRvYGR%2BztHC2zB9KYIUM20o%2F2011NdA6TClkpEP2BXLwNdZoUUHk%2B%2FokavqWSfKMKNb5JvK%2BUZ%2Bezs&X-Amz-Signature=6d9f0b3193af2edf0eb52a10b06a51a82571d480ad37a468a66c5e25ff726133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SMFVK7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEMM9DaWlL6ygaZ2Y5E5MLXX957mtiRzeJU6WXYRkg%2BVAiEAgftNI1THoz4knkoz1tihdQAtB4RDd88i0dTGeT3fjUYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGM7fNe8NOBPR%2BcnwSrcA9DPCQtutmh1Wc2LWLSXP7Epp4TeD3%2F%2FTd4hPhybkdtXAuiiNGIA6pDOcHTkp2ofaN%2BpeSHuxkV8vkBStizgHVUigMhMSsO4lMldXfykPUAHeorm4ScShH8orGR4k5J2C%2Fs616ZOhDbnnVJy%2BilpWG5dbbM8fL7qK%2B8WpZ178BdtXKyNG016FcehMA05aXU4D%2BtuKPcWp6eEAY3EBHL4zh4XQqsplPwSk1nHo%2FJ9L37BXduYTdU4NpyN2MuvFctayAFUEL07BZ7JNbT2E7RCEsFXBItqtvr5mbW55jpHZMH%2BP03SpL6McAxrqo1pfqO%2BNtwqIQh1Qe1v0Ufwl8JltNv2gJccLIohAWvErkcwGvSdR7WCodtqWYbvJurNGI2kd4zGEsgttOamFf65ajHFXGyz%2FfUEmtuBHPMpOYtFMLu9W5Q0X4JUGQ5uTzXZjOjG2E1HdG8pKFuEp6k0w5DraoqDNtIk4Szy3em2KBMRyVebOJnz%2B64oAndMwAgbsxuAGzeb%2BU3dHLcVJOJiSr10Z%2FGJcpjh4mNg6k7sZQ6EyrvOFFFFHRLWgpbse%2BruCZRXtWgWtiZDpR5r7VtdzWeOnaDMKRri1CqbQuCNt2aC90dETVFEXAmn7W0KVl7fMOXMoMQGOqUB9upLHljtyKeDu2gnz0SAIfnnsRSNRdTftAWZmOx9H8U5lTIeoU0bXTj5vs50Jxt0v1ROdUBK%2FPU4AhM5yivHs5gIooDL%2BPf1yar4%2BU83XzFXW6qI%2BCZSzK%2BNLOOva2mkBkANjWFK9ELQNpDRvYGR%2BztHC2zB9KYIUM20o%2F2011NdA6TClkpEP2BXLwNdZoUUHk%2B%2FokavqWSfKMKNb5JvK%2BUZ%2Bezs&X-Amz-Signature=842e87f32e327eb57014760cbe1c7444590626a761f6dd1ec5513670ad4921cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
   
    <collision>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
    </collision>

    <xacro:box_inertia m="15" w="${base_width}" d="${base_length}" h="${base_height}"/>
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

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SMFVK7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEMM9DaWlL6ygaZ2Y5E5MLXX957mtiRzeJU6WXYRkg%2BVAiEAgftNI1THoz4knkoz1tihdQAtB4RDd88i0dTGeT3fjUYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGM7fNe8NOBPR%2BcnwSrcA9DPCQtutmh1Wc2LWLSXP7Epp4TeD3%2F%2FTd4hPhybkdtXAuiiNGIA6pDOcHTkp2ofaN%2BpeSHuxkV8vkBStizgHVUigMhMSsO4lMldXfykPUAHeorm4ScShH8orGR4k5J2C%2Fs616ZOhDbnnVJy%2BilpWG5dbbM8fL7qK%2B8WpZ178BdtXKyNG016FcehMA05aXU4D%2BtuKPcWp6eEAY3EBHL4zh4XQqsplPwSk1nHo%2FJ9L37BXduYTdU4NpyN2MuvFctayAFUEL07BZ7JNbT2E7RCEsFXBItqtvr5mbW55jpHZMH%2BP03SpL6McAxrqo1pfqO%2BNtwqIQh1Qe1v0Ufwl8JltNv2gJccLIohAWvErkcwGvSdR7WCodtqWYbvJurNGI2kd4zGEsgttOamFf65ajHFXGyz%2FfUEmtuBHPMpOYtFMLu9W5Q0X4JUGQ5uTzXZjOjG2E1HdG8pKFuEp6k0w5DraoqDNtIk4Szy3em2KBMRyVebOJnz%2B64oAndMwAgbsxuAGzeb%2BU3dHLcVJOJiSr10Z%2FGJcpjh4mNg6k7sZQ6EyrvOFFFFHRLWgpbse%2BruCZRXtWgWtiZDpR5r7VtdzWeOnaDMKRri1CqbQuCNt2aC90dETVFEXAmn7W0KVl7fMOXMoMQGOqUB9upLHljtyKeDu2gnz0SAIfnnsRSNRdTftAWZmOx9H8U5lTIeoU0bXTj5vs50Jxt0v1ROdUBK%2FPU4AhM5yivHs5gIooDL%2BPf1yar4%2BU83XzFXW6qI%2BCZSzK%2BNLOOva2mkBkANjWFK9ELQNpDRvYGR%2BztHC2zB9KYIUM20o%2F2011NdA6TClkpEP2BXLwNdZoUUHk%2B%2FokavqWSfKMKNb5JvK%2BUZ%2Bezs&X-Amz-Signature=3e05b9ce3ee86b794ca718435263192613319467b9f1f62232826bd3d0d22e74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SMFVK7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEMM9DaWlL6ygaZ2Y5E5MLXX957mtiRzeJU6WXYRkg%2BVAiEAgftNI1THoz4knkoz1tihdQAtB4RDd88i0dTGeT3fjUYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGM7fNe8NOBPR%2BcnwSrcA9DPCQtutmh1Wc2LWLSXP7Epp4TeD3%2F%2FTd4hPhybkdtXAuiiNGIA6pDOcHTkp2ofaN%2BpeSHuxkV8vkBStizgHVUigMhMSsO4lMldXfykPUAHeorm4ScShH8orGR4k5J2C%2Fs616ZOhDbnnVJy%2BilpWG5dbbM8fL7qK%2B8WpZ178BdtXKyNG016FcehMA05aXU4D%2BtuKPcWp6eEAY3EBHL4zh4XQqsplPwSk1nHo%2FJ9L37BXduYTdU4NpyN2MuvFctayAFUEL07BZ7JNbT2E7RCEsFXBItqtvr5mbW55jpHZMH%2BP03SpL6McAxrqo1pfqO%2BNtwqIQh1Qe1v0Ufwl8JltNv2gJccLIohAWvErkcwGvSdR7WCodtqWYbvJurNGI2kd4zGEsgttOamFf65ajHFXGyz%2FfUEmtuBHPMpOYtFMLu9W5Q0X4JUGQ5uTzXZjOjG2E1HdG8pKFuEp6k0w5DraoqDNtIk4Szy3em2KBMRyVebOJnz%2B64oAndMwAgbsxuAGzeb%2BU3dHLcVJOJiSr10Z%2FGJcpjh4mNg6k7sZQ6EyrvOFFFFHRLWgpbse%2BruCZRXtWgWtiZDpR5r7VtdzWeOnaDMKRri1CqbQuCNt2aC90dETVFEXAmn7W0KVl7fMOXMoMQGOqUB9upLHljtyKeDu2gnz0SAIfnnsRSNRdTftAWZmOx9H8U5lTIeoU0bXTj5vs50Jxt0v1ROdUBK%2FPU4AhM5yivHs5gIooDL%2BPf1yar4%2BU83XzFXW6qI%2BCZSzK%2BNLOOva2mkBkANjWFK9ELQNpDRvYGR%2BztHC2zB9KYIUM20o%2F2011NdA6TClkpEP2BXLwNdZoUUHk%2B%2FokavqWSfKMKNb5JvK%2BUZ%2Bezs&X-Amz-Signature=9e69b08f29d0686b697cbb9515bc97823d77b8cf224563c606d529baf8595cdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SMFVK7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEMM9DaWlL6ygaZ2Y5E5MLXX957mtiRzeJU6WXYRkg%2BVAiEAgftNI1THoz4knkoz1tihdQAtB4RDd88i0dTGeT3fjUYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGM7fNe8NOBPR%2BcnwSrcA9DPCQtutmh1Wc2LWLSXP7Epp4TeD3%2F%2FTd4hPhybkdtXAuiiNGIA6pDOcHTkp2ofaN%2BpeSHuxkV8vkBStizgHVUigMhMSsO4lMldXfykPUAHeorm4ScShH8orGR4k5J2C%2Fs616ZOhDbnnVJy%2BilpWG5dbbM8fL7qK%2B8WpZ178BdtXKyNG016FcehMA05aXU4D%2BtuKPcWp6eEAY3EBHL4zh4XQqsplPwSk1nHo%2FJ9L37BXduYTdU4NpyN2MuvFctayAFUEL07BZ7JNbT2E7RCEsFXBItqtvr5mbW55jpHZMH%2BP03SpL6McAxrqo1pfqO%2BNtwqIQh1Qe1v0Ufwl8JltNv2gJccLIohAWvErkcwGvSdR7WCodtqWYbvJurNGI2kd4zGEsgttOamFf65ajHFXGyz%2FfUEmtuBHPMpOYtFMLu9W5Q0X4JUGQ5uTzXZjOjG2E1HdG8pKFuEp6k0w5DraoqDNtIk4Szy3em2KBMRyVebOJnz%2B64oAndMwAgbsxuAGzeb%2BU3dHLcVJOJiSr10Z%2FGJcpjh4mNg6k7sZQ6EyrvOFFFFHRLWgpbse%2BruCZRXtWgWtiZDpR5r7VtdzWeOnaDMKRri1CqbQuCNt2aC90dETVFEXAmn7W0KVl7fMOXMoMQGOqUB9upLHljtyKeDu2gnz0SAIfnnsRSNRdTftAWZmOx9H8U5lTIeoU0bXTj5vs50Jxt0v1ROdUBK%2FPU4AhM5yivHs5gIooDL%2BPf1yar4%2BU83XzFXW6qI%2BCZSzK%2BNLOOva2mkBkANjWFK9ELQNpDRvYGR%2BztHC2zB9KYIUM20o%2F2011NdA6TClkpEP2BXLwNdZoUUHk%2B%2FokavqWSfKMKNb5JvK%2BUZ%2Bezs&X-Amz-Signature=ccbb888631399d2091606cdaa6fc5df7c7bca5371eb73de40acf439b9ad13c72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SMFVK7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEMM9DaWlL6ygaZ2Y5E5MLXX957mtiRzeJU6WXYRkg%2BVAiEAgftNI1THoz4knkoz1tihdQAtB4RDd88i0dTGeT3fjUYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGM7fNe8NOBPR%2BcnwSrcA9DPCQtutmh1Wc2LWLSXP7Epp4TeD3%2F%2FTd4hPhybkdtXAuiiNGIA6pDOcHTkp2ofaN%2BpeSHuxkV8vkBStizgHVUigMhMSsO4lMldXfykPUAHeorm4ScShH8orGR4k5J2C%2Fs616ZOhDbnnVJy%2BilpWG5dbbM8fL7qK%2B8WpZ178BdtXKyNG016FcehMA05aXU4D%2BtuKPcWp6eEAY3EBHL4zh4XQqsplPwSk1nHo%2FJ9L37BXduYTdU4NpyN2MuvFctayAFUEL07BZ7JNbT2E7RCEsFXBItqtvr5mbW55jpHZMH%2BP03SpL6McAxrqo1pfqO%2BNtwqIQh1Qe1v0Ufwl8JltNv2gJccLIohAWvErkcwGvSdR7WCodtqWYbvJurNGI2kd4zGEsgttOamFf65ajHFXGyz%2FfUEmtuBHPMpOYtFMLu9W5Q0X4JUGQ5uTzXZjOjG2E1HdG8pKFuEp6k0w5DraoqDNtIk4Szy3em2KBMRyVebOJnz%2B64oAndMwAgbsxuAGzeb%2BU3dHLcVJOJiSr10Z%2FGJcpjh4mNg6k7sZQ6EyrvOFFFFHRLWgpbse%2BruCZRXtWgWtiZDpR5r7VtdzWeOnaDMKRri1CqbQuCNt2aC90dETVFEXAmn7W0KVl7fMOXMoMQGOqUB9upLHljtyKeDu2gnz0SAIfnnsRSNRdTftAWZmOx9H8U5lTIeoU0bXTj5vs50Jxt0v1ROdUBK%2FPU4AhM5yivHs5gIooDL%2BPf1yar4%2BU83XzFXW6qI%2BCZSzK%2BNLOOva2mkBkANjWFK9ELQNpDRvYGR%2BztHC2zB9KYIUM20o%2F2011NdA6TClkpEP2BXLwNdZoUUHk%2B%2FokavqWSfKMKNb5JvK%2BUZ%2Bezs&X-Amz-Signature=91d652a69e4a60bd6f4762fb720abf6b4b933bd3b268faaf3fdccc1d24d6f417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOWZALDJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIG1v%2BR1IgjGwDe6eNb7ZmrrO9w7hlB66wBBejvGpdSrEAiBD06OVVT1yHymt41nDfYQWHwZWv%2FVTDEL%2F98Ltnzc5niqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhigQdP0cKLM3KH0sKtwDa78algXup2pWG0zRXvkNTe0%2BTitOaDQfIV4KgeHp2IzzqCR5zsbso2KbEMprOhoIYi5lKdvdjjOJwhuaxA22UFqAGQl4rnCerjsfhnHsSaWMP6j4n4s9dvuGSOqqeB848WYQe43vo7V%2BXz81lftdWMWTXN%2BHivFd5YIW%2B935J%2FxiC9pEFEN1T3TqZdj%2BiHPRh%2BiuRbyuaX1H4d8uKQackSNcSwvHrgUtXQKvHyCwPs6F2eopMv69qzdOXb%2F9s1zkQ4X8hJ5lVaRKzach0ful5QQ6YeR46T050DgXZz6P0SPzvclzRMLRr8vkoDa8D%2F7yeN4dcWhABTuFNjTq6RuPdQqCRUhcjVvryrdotlNcwLc4jdL6Dbj%2FaXyz%2BmZ4BM4Gq1j2WuC5YjA3yS95q1viwkQBADyZjgA2Ye37wbljY4ZlTL7FJPHcnk%2BftVkWwYhncOvCKSrt7Y25icPl09eMICFfkrhuvnVusjq%2Fdzexb0pjZ1xPRoXvsKojMFsjIpI6XF8Rpf47VpWsg%2BOi2qGFAnilPyfBu%2FoBez8JAx2AMf%2FQhSJbTBCWOuZQYSvWjQ2fnX0i3PU1sEY5t6zOrkdGQb9c8vGBjXVr2%2F18%2BwT3m1tNDgbmA9VJrLQ2tRQwwc2gxAY6pgHKFinBx0Ik0UjaTNi0wK4aGGKpiFQ4rSdsM6lQl1%2FvBW8smeN4OYrmwPXEHJwoCZIWSEgZu7bM0bPpJZVwacv6RCxAjc9pDiNvQ9lTfETd2NM2YdsvzHdYSet%2F9BkxWbS1FnhggMVaVJEefpEjoZ0aDbaLg1bDxe32ZMiArv22MrmGVhapFFinB%2FFE0MrpaGNhYlWzxJ44ThpudE0ifj5KANj1%2BiRk&X-Amz-Signature=f878bf2cb638e95419927a498d5dbcdfb235bd792b6d70c97e81bf27f79e5636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOWZALDJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIG1v%2BR1IgjGwDe6eNb7ZmrrO9w7hlB66wBBejvGpdSrEAiBD06OVVT1yHymt41nDfYQWHwZWv%2FVTDEL%2F98Ltnzc5niqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhigQdP0cKLM3KH0sKtwDa78algXup2pWG0zRXvkNTe0%2BTitOaDQfIV4KgeHp2IzzqCR5zsbso2KbEMprOhoIYi5lKdvdjjOJwhuaxA22UFqAGQl4rnCerjsfhnHsSaWMP6j4n4s9dvuGSOqqeB848WYQe43vo7V%2BXz81lftdWMWTXN%2BHivFd5YIW%2B935J%2FxiC9pEFEN1T3TqZdj%2BiHPRh%2BiuRbyuaX1H4d8uKQackSNcSwvHrgUtXQKvHyCwPs6F2eopMv69qzdOXb%2F9s1zkQ4X8hJ5lVaRKzach0ful5QQ6YeR46T050DgXZz6P0SPzvclzRMLRr8vkoDa8D%2F7yeN4dcWhABTuFNjTq6RuPdQqCRUhcjVvryrdotlNcwLc4jdL6Dbj%2FaXyz%2BmZ4BM4Gq1j2WuC5YjA3yS95q1viwkQBADyZjgA2Ye37wbljY4ZlTL7FJPHcnk%2BftVkWwYhncOvCKSrt7Y25icPl09eMICFfkrhuvnVusjq%2Fdzexb0pjZ1xPRoXvsKojMFsjIpI6XF8Rpf47VpWsg%2BOi2qGFAnilPyfBu%2FoBez8JAx2AMf%2FQhSJbTBCWOuZQYSvWjQ2fnX0i3PU1sEY5t6zOrkdGQb9c8vGBjXVr2%2F18%2BwT3m1tNDgbmA9VJrLQ2tRQwwc2gxAY6pgHKFinBx0Ik0UjaTNi0wK4aGGKpiFQ4rSdsM6lQl1%2FvBW8smeN4OYrmwPXEHJwoCZIWSEgZu7bM0bPpJZVwacv6RCxAjc9pDiNvQ9lTfETd2NM2YdsvzHdYSet%2F9BkxWbS1FnhggMVaVJEefpEjoZ0aDbaLg1bDxe32ZMiArv22MrmGVhapFFinB%2FFE0MrpaGNhYlWzxJ44ThpudE0ifj5KANj1%2BiRk&X-Amz-Signature=4d1bca7c4cf621c028ccdcf1a5630a0bcebfd096bc06fc6f704ea74618d0918b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOWZALDJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIG1v%2BR1IgjGwDe6eNb7ZmrrO9w7hlB66wBBejvGpdSrEAiBD06OVVT1yHymt41nDfYQWHwZWv%2FVTDEL%2F98Ltnzc5niqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhigQdP0cKLM3KH0sKtwDa78algXup2pWG0zRXvkNTe0%2BTitOaDQfIV4KgeHp2IzzqCR5zsbso2KbEMprOhoIYi5lKdvdjjOJwhuaxA22UFqAGQl4rnCerjsfhnHsSaWMP6j4n4s9dvuGSOqqeB848WYQe43vo7V%2BXz81lftdWMWTXN%2BHivFd5YIW%2B935J%2FxiC9pEFEN1T3TqZdj%2BiHPRh%2BiuRbyuaX1H4d8uKQackSNcSwvHrgUtXQKvHyCwPs6F2eopMv69qzdOXb%2F9s1zkQ4X8hJ5lVaRKzach0ful5QQ6YeR46T050DgXZz6P0SPzvclzRMLRr8vkoDa8D%2F7yeN4dcWhABTuFNjTq6RuPdQqCRUhcjVvryrdotlNcwLc4jdL6Dbj%2FaXyz%2BmZ4BM4Gq1j2WuC5YjA3yS95q1viwkQBADyZjgA2Ye37wbljY4ZlTL7FJPHcnk%2BftVkWwYhncOvCKSrt7Y25icPl09eMICFfkrhuvnVusjq%2Fdzexb0pjZ1xPRoXvsKojMFsjIpI6XF8Rpf47VpWsg%2BOi2qGFAnilPyfBu%2FoBez8JAx2AMf%2FQhSJbTBCWOuZQYSvWjQ2fnX0i3PU1sEY5t6zOrkdGQb9c8vGBjXVr2%2F18%2BwT3m1tNDgbmA9VJrLQ2tRQwwc2gxAY6pgHKFinBx0Ik0UjaTNi0wK4aGGKpiFQ4rSdsM6lQl1%2FvBW8smeN4OYrmwPXEHJwoCZIWSEgZu7bM0bPpJZVwacv6RCxAjc9pDiNvQ9lTfETd2NM2YdsvzHdYSet%2F9BkxWbS1FnhggMVaVJEefpEjoZ0aDbaLg1bDxe32ZMiArv22MrmGVhapFFinB%2FFE0MrpaGNhYlWzxJ44ThpudE0ifj5KANj1%2BiRk&X-Amz-Signature=5c4ea3cfa68ed743cfd9e3ddffedfb003445b0ee448d73be46661e8901d411cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOWZALDJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIG1v%2BR1IgjGwDe6eNb7ZmrrO9w7hlB66wBBejvGpdSrEAiBD06OVVT1yHymt41nDfYQWHwZWv%2FVTDEL%2F98Ltnzc5niqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhigQdP0cKLM3KH0sKtwDa78algXup2pWG0zRXvkNTe0%2BTitOaDQfIV4KgeHp2IzzqCR5zsbso2KbEMprOhoIYi5lKdvdjjOJwhuaxA22UFqAGQl4rnCerjsfhnHsSaWMP6j4n4s9dvuGSOqqeB848WYQe43vo7V%2BXz81lftdWMWTXN%2BHivFd5YIW%2B935J%2FxiC9pEFEN1T3TqZdj%2BiHPRh%2BiuRbyuaX1H4d8uKQackSNcSwvHrgUtXQKvHyCwPs6F2eopMv69qzdOXb%2F9s1zkQ4X8hJ5lVaRKzach0ful5QQ6YeR46T050DgXZz6P0SPzvclzRMLRr8vkoDa8D%2F7yeN4dcWhABTuFNjTq6RuPdQqCRUhcjVvryrdotlNcwLc4jdL6Dbj%2FaXyz%2BmZ4BM4Gq1j2WuC5YjA3yS95q1viwkQBADyZjgA2Ye37wbljY4ZlTL7FJPHcnk%2BftVkWwYhncOvCKSrt7Y25icPl09eMICFfkrhuvnVusjq%2Fdzexb0pjZ1xPRoXvsKojMFsjIpI6XF8Rpf47VpWsg%2BOi2qGFAnilPyfBu%2FoBez8JAx2AMf%2FQhSJbTBCWOuZQYSvWjQ2fnX0i3PU1sEY5t6zOrkdGQb9c8vGBjXVr2%2F18%2BwT3m1tNDgbmA9VJrLQ2tRQwwc2gxAY6pgHKFinBx0Ik0UjaTNi0wK4aGGKpiFQ4rSdsM6lQl1%2FvBW8smeN4OYrmwPXEHJwoCZIWSEgZu7bM0bPpJZVwacv6RCxAjc9pDiNvQ9lTfETd2NM2YdsvzHdYSet%2F9BkxWbS1FnhggMVaVJEefpEjoZ0aDbaLg1bDxe32ZMiArv22MrmGVhapFFinB%2FFE0MrpaGNhYlWzxJ44ThpudE0ifj5KANj1%2BiRk&X-Amz-Signature=0997b537fd955868d660e9b861538bb2352c69002863e9ca3c1e7bf333667855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOWZALDJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIG1v%2BR1IgjGwDe6eNb7ZmrrO9w7hlB66wBBejvGpdSrEAiBD06OVVT1yHymt41nDfYQWHwZWv%2FVTDEL%2F98Ltnzc5niqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhigQdP0cKLM3KH0sKtwDa78algXup2pWG0zRXvkNTe0%2BTitOaDQfIV4KgeHp2IzzqCR5zsbso2KbEMprOhoIYi5lKdvdjjOJwhuaxA22UFqAGQl4rnCerjsfhnHsSaWMP6j4n4s9dvuGSOqqeB848WYQe43vo7V%2BXz81lftdWMWTXN%2BHivFd5YIW%2B935J%2FxiC9pEFEN1T3TqZdj%2BiHPRh%2BiuRbyuaX1H4d8uKQackSNcSwvHrgUtXQKvHyCwPs6F2eopMv69qzdOXb%2F9s1zkQ4X8hJ5lVaRKzach0ful5QQ6YeR46T050DgXZz6P0SPzvclzRMLRr8vkoDa8D%2F7yeN4dcWhABTuFNjTq6RuPdQqCRUhcjVvryrdotlNcwLc4jdL6Dbj%2FaXyz%2BmZ4BM4Gq1j2WuC5YjA3yS95q1viwkQBADyZjgA2Ye37wbljY4ZlTL7FJPHcnk%2BftVkWwYhncOvCKSrt7Y25icPl09eMICFfkrhuvnVusjq%2Fdzexb0pjZ1xPRoXvsKojMFsjIpI6XF8Rpf47VpWsg%2BOi2qGFAnilPyfBu%2FoBez8JAx2AMf%2FQhSJbTBCWOuZQYSvWjQ2fnX0i3PU1sEY5t6zOrkdGQb9c8vGBjXVr2%2F18%2BwT3m1tNDgbmA9VJrLQ2tRQwwc2gxAY6pgHKFinBx0Ik0UjaTNi0wK4aGGKpiFQ4rSdsM6lQl1%2FvBW8smeN4OYrmwPXEHJwoCZIWSEgZu7bM0bPpJZVwacv6RCxAjc9pDiNvQ9lTfETd2NM2YdsvzHdYSet%2F9BkxWbS1FnhggMVaVJEefpEjoZ0aDbaLg1bDxe32ZMiArv22MrmGVhapFFinB%2FFE0MrpaGNhYlWzxJ44ThpudE0ifj5KANj1%2BiRk&X-Amz-Signature=285b48adc578b40f09bfbdc263a3db47efd8a07e0706068cea6590e616fa3d28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOWZALDJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIG1v%2BR1IgjGwDe6eNb7ZmrrO9w7hlB66wBBejvGpdSrEAiBD06OVVT1yHymt41nDfYQWHwZWv%2FVTDEL%2F98Ltnzc5niqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhigQdP0cKLM3KH0sKtwDa78algXup2pWG0zRXvkNTe0%2BTitOaDQfIV4KgeHp2IzzqCR5zsbso2KbEMprOhoIYi5lKdvdjjOJwhuaxA22UFqAGQl4rnCerjsfhnHsSaWMP6j4n4s9dvuGSOqqeB848WYQe43vo7V%2BXz81lftdWMWTXN%2BHivFd5YIW%2B935J%2FxiC9pEFEN1T3TqZdj%2BiHPRh%2BiuRbyuaX1H4d8uKQackSNcSwvHrgUtXQKvHyCwPs6F2eopMv69qzdOXb%2F9s1zkQ4X8hJ5lVaRKzach0ful5QQ6YeR46T050DgXZz6P0SPzvclzRMLRr8vkoDa8D%2F7yeN4dcWhABTuFNjTq6RuPdQqCRUhcjVvryrdotlNcwLc4jdL6Dbj%2FaXyz%2BmZ4BM4Gq1j2WuC5YjA3yS95q1viwkQBADyZjgA2Ye37wbljY4ZlTL7FJPHcnk%2BftVkWwYhncOvCKSrt7Y25icPl09eMICFfkrhuvnVusjq%2Fdzexb0pjZ1xPRoXvsKojMFsjIpI6XF8Rpf47VpWsg%2BOi2qGFAnilPyfBu%2FoBez8JAx2AMf%2FQhSJbTBCWOuZQYSvWjQ2fnX0i3PU1sEY5t6zOrkdGQb9c8vGBjXVr2%2F18%2BwT3m1tNDgbmA9VJrLQ2tRQwwc2gxAY6pgHKFinBx0Ik0UjaTNi0wK4aGGKpiFQ4rSdsM6lQl1%2FvBW8smeN4OYrmwPXEHJwoCZIWSEgZu7bM0bPpJZVwacv6RCxAjc9pDiNvQ9lTfETd2NM2YdsvzHdYSet%2F9BkxWbS1FnhggMVaVJEefpEjoZ0aDbaLg1bDxe32ZMiArv22MrmGVhapFFinB%2FFE0MrpaGNhYlWzxJ44ThpudE0ifj5KANj1%2BiRk&X-Amz-Signature=e21d9fe08973215a63d0101ea47e71cbe763d5125b6b90dde005a517db022270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
