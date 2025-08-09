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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSL6CSHQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIB%2FYLiZBPImNKp3BkT6%2BWl8UoEcMmcIcGXDYEru1M5JYAiEA9v%2FcNUkEQjPaeiuXg9gXfCC7G3yLDAx4C%2BigN9AeeeMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALbzdugbeL8%2BihlEircA%2BDSImPkx8I6Pns6o%2F7bZFDNySaUK1D%2B5R9gEsleHYIsYsI78yCvYlC6VnwdIBCYRd7hHT%2BP8H82SBrX2p75srms2bAqh0UPXLjksuMGy7DUUXpvAClD1XZVXsbN1nAgtf31Ni%2FRj9IUHyGPPRLGLBNrKtB2oBSJJQ6%2BdkCfwiRTvtFoBBQVceVUvDyt3H936iporjIsWwdypgdAbhkZ%2Ff%2FQRHKbU7LsQyZGicn7oBRA2%2BaR4KhXQKe5ZHVG8kSHL2AS0QntuuTO028kN1hUWsWyyXJo3PeqU%2BPeWcVuAJGqtQYnruUyGvrMciVjMM0rlTyksjpWszk8WlVoaJAxY1tYYztAg20wBBV1WUyhSEUkmo4%2BcJ59Pq9Cmcxw3gUq3J78tigmkmqqBBjGXufdp96rgvGtJKoxgPrSBnTjhMbaka3Xw3fmuKLZkpxy2aoFnCkksiMxMDDsoE6OnGdk2BowL4HA7fB0pDpTeygr3ZjYZgq8VuHAcHE4ZhmQg08co2ToM0eUrcHdvfEDbVIVl0a6yI2GKkddY4OEAZMQ8aXCSCob6AaFKN%2FdqwUlGiz6Q%2BbwB1KSLQ3EtpAQH6gH616i5cJx84JqbrWqJpOmSAPOmrxyO%2FgPT0LBuCYlMJP22sQGOqUBQUdlTXRuGN1K5JV9OdGcU7sCgpKvE3YhEprS5pRAyDBU9lFaGV4fceBo8hs%2FvAg%2B5tIr03oKYoy58r1hhLsuSV8j636G9LB6y%2FkfZqC6iGGS9YtNtqc9xiXjdQTPF5efwmKr2fIwTinITnGvjJDUB%2BFvmFIo5NHykPDUhbadrphZlU2jTJmhtIG2%2FFD8hQvr%2FAzMRpPm8%2B0H4Z%2BuSvmj%2F0zl9Ti%2B&X-Amz-Signature=e2f7aa6ba617929c92b8ebb541685eefcb173d8e1f7e729c6cc49800cd6ab2ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSL6CSHQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIB%2FYLiZBPImNKp3BkT6%2BWl8UoEcMmcIcGXDYEru1M5JYAiEA9v%2FcNUkEQjPaeiuXg9gXfCC7G3yLDAx4C%2BigN9AeeeMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALbzdugbeL8%2BihlEircA%2BDSImPkx8I6Pns6o%2F7bZFDNySaUK1D%2B5R9gEsleHYIsYsI78yCvYlC6VnwdIBCYRd7hHT%2BP8H82SBrX2p75srms2bAqh0UPXLjksuMGy7DUUXpvAClD1XZVXsbN1nAgtf31Ni%2FRj9IUHyGPPRLGLBNrKtB2oBSJJQ6%2BdkCfwiRTvtFoBBQVceVUvDyt3H936iporjIsWwdypgdAbhkZ%2Ff%2FQRHKbU7LsQyZGicn7oBRA2%2BaR4KhXQKe5ZHVG8kSHL2AS0QntuuTO028kN1hUWsWyyXJo3PeqU%2BPeWcVuAJGqtQYnruUyGvrMciVjMM0rlTyksjpWszk8WlVoaJAxY1tYYztAg20wBBV1WUyhSEUkmo4%2BcJ59Pq9Cmcxw3gUq3J78tigmkmqqBBjGXufdp96rgvGtJKoxgPrSBnTjhMbaka3Xw3fmuKLZkpxy2aoFnCkksiMxMDDsoE6OnGdk2BowL4HA7fB0pDpTeygr3ZjYZgq8VuHAcHE4ZhmQg08co2ToM0eUrcHdvfEDbVIVl0a6yI2GKkddY4OEAZMQ8aXCSCob6AaFKN%2FdqwUlGiz6Q%2BbwB1KSLQ3EtpAQH6gH616i5cJx84JqbrWqJpOmSAPOmrxyO%2FgPT0LBuCYlMJP22sQGOqUBQUdlTXRuGN1K5JV9OdGcU7sCgpKvE3YhEprS5pRAyDBU9lFaGV4fceBo8hs%2FvAg%2B5tIr03oKYoy58r1hhLsuSV8j636G9LB6y%2FkfZqC6iGGS9YtNtqc9xiXjdQTPF5efwmKr2fIwTinITnGvjJDUB%2BFvmFIo5NHykPDUhbadrphZlU2jTJmhtIG2%2FFD8hQvr%2FAzMRpPm8%2B0H4Z%2BuSvmj%2F0zl9Ti%2B&X-Amz-Signature=75151bc65b07c52bde2847470835f077c39144f073ad29c24e8a150ce77d0d12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSL6CSHQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIB%2FYLiZBPImNKp3BkT6%2BWl8UoEcMmcIcGXDYEru1M5JYAiEA9v%2FcNUkEQjPaeiuXg9gXfCC7G3yLDAx4C%2BigN9AeeeMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALbzdugbeL8%2BihlEircA%2BDSImPkx8I6Pns6o%2F7bZFDNySaUK1D%2B5R9gEsleHYIsYsI78yCvYlC6VnwdIBCYRd7hHT%2BP8H82SBrX2p75srms2bAqh0UPXLjksuMGy7DUUXpvAClD1XZVXsbN1nAgtf31Ni%2FRj9IUHyGPPRLGLBNrKtB2oBSJJQ6%2BdkCfwiRTvtFoBBQVceVUvDyt3H936iporjIsWwdypgdAbhkZ%2Ff%2FQRHKbU7LsQyZGicn7oBRA2%2BaR4KhXQKe5ZHVG8kSHL2AS0QntuuTO028kN1hUWsWyyXJo3PeqU%2BPeWcVuAJGqtQYnruUyGvrMciVjMM0rlTyksjpWszk8WlVoaJAxY1tYYztAg20wBBV1WUyhSEUkmo4%2BcJ59Pq9Cmcxw3gUq3J78tigmkmqqBBjGXufdp96rgvGtJKoxgPrSBnTjhMbaka3Xw3fmuKLZkpxy2aoFnCkksiMxMDDsoE6OnGdk2BowL4HA7fB0pDpTeygr3ZjYZgq8VuHAcHE4ZhmQg08co2ToM0eUrcHdvfEDbVIVl0a6yI2GKkddY4OEAZMQ8aXCSCob6AaFKN%2FdqwUlGiz6Q%2BbwB1KSLQ3EtpAQH6gH616i5cJx84JqbrWqJpOmSAPOmrxyO%2FgPT0LBuCYlMJP22sQGOqUBQUdlTXRuGN1K5JV9OdGcU7sCgpKvE3YhEprS5pRAyDBU9lFaGV4fceBo8hs%2FvAg%2B5tIr03oKYoy58r1hhLsuSV8j636G9LB6y%2FkfZqC6iGGS9YtNtqc9xiXjdQTPF5efwmKr2fIwTinITnGvjJDUB%2BFvmFIo5NHykPDUhbadrphZlU2jTJmhtIG2%2FFD8hQvr%2FAzMRpPm8%2B0H4Z%2BuSvmj%2F0zl9Ti%2B&X-Amz-Signature=197577fc2cb28dd7912b31b5bc1af68da5bef2124ae917c75b0c2ab63390f1f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSL6CSHQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIB%2FYLiZBPImNKp3BkT6%2BWl8UoEcMmcIcGXDYEru1M5JYAiEA9v%2FcNUkEQjPaeiuXg9gXfCC7G3yLDAx4C%2BigN9AeeeMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALbzdugbeL8%2BihlEircA%2BDSImPkx8I6Pns6o%2F7bZFDNySaUK1D%2B5R9gEsleHYIsYsI78yCvYlC6VnwdIBCYRd7hHT%2BP8H82SBrX2p75srms2bAqh0UPXLjksuMGy7DUUXpvAClD1XZVXsbN1nAgtf31Ni%2FRj9IUHyGPPRLGLBNrKtB2oBSJJQ6%2BdkCfwiRTvtFoBBQVceVUvDyt3H936iporjIsWwdypgdAbhkZ%2Ff%2FQRHKbU7LsQyZGicn7oBRA2%2BaR4KhXQKe5ZHVG8kSHL2AS0QntuuTO028kN1hUWsWyyXJo3PeqU%2BPeWcVuAJGqtQYnruUyGvrMciVjMM0rlTyksjpWszk8WlVoaJAxY1tYYztAg20wBBV1WUyhSEUkmo4%2BcJ59Pq9Cmcxw3gUq3J78tigmkmqqBBjGXufdp96rgvGtJKoxgPrSBnTjhMbaka3Xw3fmuKLZkpxy2aoFnCkksiMxMDDsoE6OnGdk2BowL4HA7fB0pDpTeygr3ZjYZgq8VuHAcHE4ZhmQg08co2ToM0eUrcHdvfEDbVIVl0a6yI2GKkddY4OEAZMQ8aXCSCob6AaFKN%2FdqwUlGiz6Q%2BbwB1KSLQ3EtpAQH6gH616i5cJx84JqbrWqJpOmSAPOmrxyO%2FgPT0LBuCYlMJP22sQGOqUBQUdlTXRuGN1K5JV9OdGcU7sCgpKvE3YhEprS5pRAyDBU9lFaGV4fceBo8hs%2FvAg%2B5tIr03oKYoy58r1hhLsuSV8j636G9LB6y%2FkfZqC6iGGS9YtNtqc9xiXjdQTPF5efwmKr2fIwTinITnGvjJDUB%2BFvmFIo5NHykPDUhbadrphZlU2jTJmhtIG2%2FFD8hQvr%2FAzMRpPm8%2B0H4Z%2BuSvmj%2F0zl9Ti%2B&X-Amz-Signature=aceadeb4b1bf598ba972cc001e7d11b67ee3f79df3ba46712168f2056c3d87aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSL6CSHQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIB%2FYLiZBPImNKp3BkT6%2BWl8UoEcMmcIcGXDYEru1M5JYAiEA9v%2FcNUkEQjPaeiuXg9gXfCC7G3yLDAx4C%2BigN9AeeeMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALbzdugbeL8%2BihlEircA%2BDSImPkx8I6Pns6o%2F7bZFDNySaUK1D%2B5R9gEsleHYIsYsI78yCvYlC6VnwdIBCYRd7hHT%2BP8H82SBrX2p75srms2bAqh0UPXLjksuMGy7DUUXpvAClD1XZVXsbN1nAgtf31Ni%2FRj9IUHyGPPRLGLBNrKtB2oBSJJQ6%2BdkCfwiRTvtFoBBQVceVUvDyt3H936iporjIsWwdypgdAbhkZ%2Ff%2FQRHKbU7LsQyZGicn7oBRA2%2BaR4KhXQKe5ZHVG8kSHL2AS0QntuuTO028kN1hUWsWyyXJo3PeqU%2BPeWcVuAJGqtQYnruUyGvrMciVjMM0rlTyksjpWszk8WlVoaJAxY1tYYztAg20wBBV1WUyhSEUkmo4%2BcJ59Pq9Cmcxw3gUq3J78tigmkmqqBBjGXufdp96rgvGtJKoxgPrSBnTjhMbaka3Xw3fmuKLZkpxy2aoFnCkksiMxMDDsoE6OnGdk2BowL4HA7fB0pDpTeygr3ZjYZgq8VuHAcHE4ZhmQg08co2ToM0eUrcHdvfEDbVIVl0a6yI2GKkddY4OEAZMQ8aXCSCob6AaFKN%2FdqwUlGiz6Q%2BbwB1KSLQ3EtpAQH6gH616i5cJx84JqbrWqJpOmSAPOmrxyO%2FgPT0LBuCYlMJP22sQGOqUBQUdlTXRuGN1K5JV9OdGcU7sCgpKvE3YhEprS5pRAyDBU9lFaGV4fceBo8hs%2FvAg%2B5tIr03oKYoy58r1hhLsuSV8j636G9LB6y%2FkfZqC6iGGS9YtNtqc9xiXjdQTPF5efwmKr2fIwTinITnGvjJDUB%2BFvmFIo5NHykPDUhbadrphZlU2jTJmhtIG2%2FFD8hQvr%2FAzMRpPm8%2B0H4Z%2BuSvmj%2F0zl9Ti%2B&X-Amz-Signature=c189fcce48a78766bf59f37baae9a57bce33d539e452e4bafc9530852748ebad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSL6CSHQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIB%2FYLiZBPImNKp3BkT6%2BWl8UoEcMmcIcGXDYEru1M5JYAiEA9v%2FcNUkEQjPaeiuXg9gXfCC7G3yLDAx4C%2BigN9AeeeMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALbzdugbeL8%2BihlEircA%2BDSImPkx8I6Pns6o%2F7bZFDNySaUK1D%2B5R9gEsleHYIsYsI78yCvYlC6VnwdIBCYRd7hHT%2BP8H82SBrX2p75srms2bAqh0UPXLjksuMGy7DUUXpvAClD1XZVXsbN1nAgtf31Ni%2FRj9IUHyGPPRLGLBNrKtB2oBSJJQ6%2BdkCfwiRTvtFoBBQVceVUvDyt3H936iporjIsWwdypgdAbhkZ%2Ff%2FQRHKbU7LsQyZGicn7oBRA2%2BaR4KhXQKe5ZHVG8kSHL2AS0QntuuTO028kN1hUWsWyyXJo3PeqU%2BPeWcVuAJGqtQYnruUyGvrMciVjMM0rlTyksjpWszk8WlVoaJAxY1tYYztAg20wBBV1WUyhSEUkmo4%2BcJ59Pq9Cmcxw3gUq3J78tigmkmqqBBjGXufdp96rgvGtJKoxgPrSBnTjhMbaka3Xw3fmuKLZkpxy2aoFnCkksiMxMDDsoE6OnGdk2BowL4HA7fB0pDpTeygr3ZjYZgq8VuHAcHE4ZhmQg08co2ToM0eUrcHdvfEDbVIVl0a6yI2GKkddY4OEAZMQ8aXCSCob6AaFKN%2FdqwUlGiz6Q%2BbwB1KSLQ3EtpAQH6gH616i5cJx84JqbrWqJpOmSAPOmrxyO%2FgPT0LBuCYlMJP22sQGOqUBQUdlTXRuGN1K5JV9OdGcU7sCgpKvE3YhEprS5pRAyDBU9lFaGV4fceBo8hs%2FvAg%2B5tIr03oKYoy58r1hhLsuSV8j636G9LB6y%2FkfZqC6iGGS9YtNtqc9xiXjdQTPF5efwmKr2fIwTinITnGvjJDUB%2BFvmFIo5NHykPDUhbadrphZlU2jTJmhtIG2%2FFD8hQvr%2FAzMRpPm8%2B0H4Z%2BuSvmj%2F0zl9Ti%2B&X-Amz-Signature=9ba1bfd57b8f99f95c7dcadbf44bccc09e9a56ecef74e3cd7b5c25a4a32cfc24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSL6CSHQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIB%2FYLiZBPImNKp3BkT6%2BWl8UoEcMmcIcGXDYEru1M5JYAiEA9v%2FcNUkEQjPaeiuXg9gXfCC7G3yLDAx4C%2BigN9AeeeMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALbzdugbeL8%2BihlEircA%2BDSImPkx8I6Pns6o%2F7bZFDNySaUK1D%2B5R9gEsleHYIsYsI78yCvYlC6VnwdIBCYRd7hHT%2BP8H82SBrX2p75srms2bAqh0UPXLjksuMGy7DUUXpvAClD1XZVXsbN1nAgtf31Ni%2FRj9IUHyGPPRLGLBNrKtB2oBSJJQ6%2BdkCfwiRTvtFoBBQVceVUvDyt3H936iporjIsWwdypgdAbhkZ%2Ff%2FQRHKbU7LsQyZGicn7oBRA2%2BaR4KhXQKe5ZHVG8kSHL2AS0QntuuTO028kN1hUWsWyyXJo3PeqU%2BPeWcVuAJGqtQYnruUyGvrMciVjMM0rlTyksjpWszk8WlVoaJAxY1tYYztAg20wBBV1WUyhSEUkmo4%2BcJ59Pq9Cmcxw3gUq3J78tigmkmqqBBjGXufdp96rgvGtJKoxgPrSBnTjhMbaka3Xw3fmuKLZkpxy2aoFnCkksiMxMDDsoE6OnGdk2BowL4HA7fB0pDpTeygr3ZjYZgq8VuHAcHE4ZhmQg08co2ToM0eUrcHdvfEDbVIVl0a6yI2GKkddY4OEAZMQ8aXCSCob6AaFKN%2FdqwUlGiz6Q%2BbwB1KSLQ3EtpAQH6gH616i5cJx84JqbrWqJpOmSAPOmrxyO%2FgPT0LBuCYlMJP22sQGOqUBQUdlTXRuGN1K5JV9OdGcU7sCgpKvE3YhEprS5pRAyDBU9lFaGV4fceBo8hs%2FvAg%2B5tIr03oKYoy58r1hhLsuSV8j636G9LB6y%2FkfZqC6iGGS9YtNtqc9xiXjdQTPF5efwmKr2fIwTinITnGvjJDUB%2BFvmFIo5NHykPDUhbadrphZlU2jTJmhtIG2%2FFD8hQvr%2FAzMRpPm8%2B0H4Z%2BuSvmj%2F0zl9Ti%2B&X-Amz-Signature=e915b4dbef0b8a420f546d4881da9904f33e9bf47bd5483dea7191e98aa4c251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSL6CSHQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIB%2FYLiZBPImNKp3BkT6%2BWl8UoEcMmcIcGXDYEru1M5JYAiEA9v%2FcNUkEQjPaeiuXg9gXfCC7G3yLDAx4C%2BigN9AeeeMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALbzdugbeL8%2BihlEircA%2BDSImPkx8I6Pns6o%2F7bZFDNySaUK1D%2B5R9gEsleHYIsYsI78yCvYlC6VnwdIBCYRd7hHT%2BP8H82SBrX2p75srms2bAqh0UPXLjksuMGy7DUUXpvAClD1XZVXsbN1nAgtf31Ni%2FRj9IUHyGPPRLGLBNrKtB2oBSJJQ6%2BdkCfwiRTvtFoBBQVceVUvDyt3H936iporjIsWwdypgdAbhkZ%2Ff%2FQRHKbU7LsQyZGicn7oBRA2%2BaR4KhXQKe5ZHVG8kSHL2AS0QntuuTO028kN1hUWsWyyXJo3PeqU%2BPeWcVuAJGqtQYnruUyGvrMciVjMM0rlTyksjpWszk8WlVoaJAxY1tYYztAg20wBBV1WUyhSEUkmo4%2BcJ59Pq9Cmcxw3gUq3J78tigmkmqqBBjGXufdp96rgvGtJKoxgPrSBnTjhMbaka3Xw3fmuKLZkpxy2aoFnCkksiMxMDDsoE6OnGdk2BowL4HA7fB0pDpTeygr3ZjYZgq8VuHAcHE4ZhmQg08co2ToM0eUrcHdvfEDbVIVl0a6yI2GKkddY4OEAZMQ8aXCSCob6AaFKN%2FdqwUlGiz6Q%2BbwB1KSLQ3EtpAQH6gH616i5cJx84JqbrWqJpOmSAPOmrxyO%2FgPT0LBuCYlMJP22sQGOqUBQUdlTXRuGN1K5JV9OdGcU7sCgpKvE3YhEprS5pRAyDBU9lFaGV4fceBo8hs%2FvAg%2B5tIr03oKYoy58r1hhLsuSV8j636G9LB6y%2FkfZqC6iGGS9YtNtqc9xiXjdQTPF5efwmKr2fIwTinITnGvjJDUB%2BFvmFIo5NHykPDUhbadrphZlU2jTJmhtIG2%2FFD8hQvr%2FAzMRpPm8%2B0H4Z%2BuSvmj%2F0zl9Ti%2B&X-Amz-Signature=07ac84a234d4ea3aeebbc5e975bfa7d67aacd739923be1c17f6e8a1ecc79170b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSL6CSHQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIB%2FYLiZBPImNKp3BkT6%2BWl8UoEcMmcIcGXDYEru1M5JYAiEA9v%2FcNUkEQjPaeiuXg9gXfCC7G3yLDAx4C%2BigN9AeeeMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALbzdugbeL8%2BihlEircA%2BDSImPkx8I6Pns6o%2F7bZFDNySaUK1D%2B5R9gEsleHYIsYsI78yCvYlC6VnwdIBCYRd7hHT%2BP8H82SBrX2p75srms2bAqh0UPXLjksuMGy7DUUXpvAClD1XZVXsbN1nAgtf31Ni%2FRj9IUHyGPPRLGLBNrKtB2oBSJJQ6%2BdkCfwiRTvtFoBBQVceVUvDyt3H936iporjIsWwdypgdAbhkZ%2Ff%2FQRHKbU7LsQyZGicn7oBRA2%2BaR4KhXQKe5ZHVG8kSHL2AS0QntuuTO028kN1hUWsWyyXJo3PeqU%2BPeWcVuAJGqtQYnruUyGvrMciVjMM0rlTyksjpWszk8WlVoaJAxY1tYYztAg20wBBV1WUyhSEUkmo4%2BcJ59Pq9Cmcxw3gUq3J78tigmkmqqBBjGXufdp96rgvGtJKoxgPrSBnTjhMbaka3Xw3fmuKLZkpxy2aoFnCkksiMxMDDsoE6OnGdk2BowL4HA7fB0pDpTeygr3ZjYZgq8VuHAcHE4ZhmQg08co2ToM0eUrcHdvfEDbVIVl0a6yI2GKkddY4OEAZMQ8aXCSCob6AaFKN%2FdqwUlGiz6Q%2BbwB1KSLQ3EtpAQH6gH616i5cJx84JqbrWqJpOmSAPOmrxyO%2FgPT0LBuCYlMJP22sQGOqUBQUdlTXRuGN1K5JV9OdGcU7sCgpKvE3YhEprS5pRAyDBU9lFaGV4fceBo8hs%2FvAg%2B5tIr03oKYoy58r1hhLsuSV8j636G9LB6y%2FkfZqC6iGGS9YtNtqc9xiXjdQTPF5efwmKr2fIwTinITnGvjJDUB%2BFvmFIo5NHykPDUhbadrphZlU2jTJmhtIG2%2FFD8hQvr%2FAzMRpPm8%2B0H4Z%2BuSvmj%2F0zl9Ti%2B&X-Amz-Signature=44d9943a020dc5338034de40e9c590abde128b4cde609d03de4a9aeb99216ab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSL6CSHQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIB%2FYLiZBPImNKp3BkT6%2BWl8UoEcMmcIcGXDYEru1M5JYAiEA9v%2FcNUkEQjPaeiuXg9gXfCC7G3yLDAx4C%2BigN9AeeeMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALbzdugbeL8%2BihlEircA%2BDSImPkx8I6Pns6o%2F7bZFDNySaUK1D%2B5R9gEsleHYIsYsI78yCvYlC6VnwdIBCYRd7hHT%2BP8H82SBrX2p75srms2bAqh0UPXLjksuMGy7DUUXpvAClD1XZVXsbN1nAgtf31Ni%2FRj9IUHyGPPRLGLBNrKtB2oBSJJQ6%2BdkCfwiRTvtFoBBQVceVUvDyt3H936iporjIsWwdypgdAbhkZ%2Ff%2FQRHKbU7LsQyZGicn7oBRA2%2BaR4KhXQKe5ZHVG8kSHL2AS0QntuuTO028kN1hUWsWyyXJo3PeqU%2BPeWcVuAJGqtQYnruUyGvrMciVjMM0rlTyksjpWszk8WlVoaJAxY1tYYztAg20wBBV1WUyhSEUkmo4%2BcJ59Pq9Cmcxw3gUq3J78tigmkmqqBBjGXufdp96rgvGtJKoxgPrSBnTjhMbaka3Xw3fmuKLZkpxy2aoFnCkksiMxMDDsoE6OnGdk2BowL4HA7fB0pDpTeygr3ZjYZgq8VuHAcHE4ZhmQg08co2ToM0eUrcHdvfEDbVIVl0a6yI2GKkddY4OEAZMQ8aXCSCob6AaFKN%2FdqwUlGiz6Q%2BbwB1KSLQ3EtpAQH6gH616i5cJx84JqbrWqJpOmSAPOmrxyO%2FgPT0LBuCYlMJP22sQGOqUBQUdlTXRuGN1K5JV9OdGcU7sCgpKvE3YhEprS5pRAyDBU9lFaGV4fceBo8hs%2FvAg%2B5tIr03oKYoy58r1hhLsuSV8j636G9LB6y%2FkfZqC6iGGS9YtNtqc9xiXjdQTPF5efwmKr2fIwTinITnGvjJDUB%2BFvmFIo5NHykPDUhbadrphZlU2jTJmhtIG2%2FFD8hQvr%2FAzMRpPm8%2B0H4Z%2BuSvmj%2F0zl9Ti%2B&X-Amz-Signature=ec618700627a914464b2c384d27975a5eb89caa97f9c452d0945a3285981d703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRJFZBBO%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIAGShN9bd2brOn32n%2B%2F1Lw4%2B79X1qVXQVJJZx2XFPWCVAiEAv96nsLUTYyASG0raQfPBMWweKFl63zjG34qvBgIuVdMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArZDoPHmngW3S1eSircA8vCJ1FJNH1kH%2B2ilO%2Fg%2F2VmK3ryr456naP%2FxX6asgT9mIjScwWb3Ch6P0k09WHPoqzUTCE1ZN5uGoORPmKK9GKECAOjLnrXIlarnyERy%2FPvfUfee6uDdkrGsCMkrkrMnhw%2FJvLN85785elRKIy7jSVgmSoPKQDOsRuNtJvqvfI5KuLPokkhENriB1iBKU5PYDdKIx5lmnxx%2F0z2TweVGOGlrFbwhr1cxELP%2B6G5mb9GwK6zB7n4DtDl21nNqMPpj1jDIkfKfShZ2%2FRgqor2LO5fh6OTHxFh%2F4spvuFa3pQMtfIFf2%2BoxzdUUw1%2B4xrcy%2FtML7qLB%2FVk6mfXWsvriL7N9nQox7Fr%2Bon4%2BOxYtM7FWKYkCfOjx3CkvnJNeQ0fe%2BM4Ik82ljnaWKH9p06hGFbpqGEItl1bXhll5AbI%2FE5HdEbY%2FFwPAJHc7AMY%2B1Xs%2FgmjpnXHJ%2F5b%2FrW4fdTv%2FEs5VvANb5f5%2Fl4F1HOZRwM2RWWcNI39mDYFUpftOOJl1qsW8wmqfIt5Ks8vgtFf%2BQjLLv3iRiM5zwdYFqSxB%2FW7lW5jBVTURtJ2aCdjj6nkedENpJi3f7fUDc%2Bg9t8Ga9n7sT3%2BaDeE1xTVUjk0RCmiZNNPzHuIGqqi2Zw6MJf22sQGOqUBcDDpuKAvsnCiK2oMF2VOs8J3V6JStUXPRetLo3E8XFuPuUpWZUd%2FqXD7btVhtIPQhiNfr37bwtVJ4lTSa4h0e3kpQ3%2BYF9iekaQH73mftS67924Avr0zc%2FhRfat0KimK1IurVqBmRiCWNROl%2BxidZdMp4M2Mo9HT2tqBIiTGM6Dp2GcU%2FrBm1R4yWaF5zOfaLfUGUaXVGYkeQ39O9IETnR18GlwG&X-Amz-Signature=e6e6c338182e3b87560b54f5714c3c7d9739f052ef50c54747ed8faca596edae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK73TRCH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T042000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCpKlAr1ToUU3%2BCYACfPQFFbz0beg2OSku9JogwGwyfKAIgdNowHV6nwvIHwPfeSctaZmFE%2Fac3nmV91mGUBZd9RpsqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPglZnMjNQlSfSx3uyrcA1n0aJoFOSm13rj%2FkYVixdrQDjVdBiIT1PnhNomdTBgYif8bSD4ksPvL6TNyg14f3G0tGMJPm%2FVASq7SN08ZAK0D%2FSAon2sZhhSgzlEkEti5EdnT3bsmJfDvEhcJ%2F1GU6x3bQQOfC%2FGvFN3uxoPx0lEAL5UwbJDLhOEWi8JSA%2FuFPvaugMWkKoQKX1EBVG6xKtHIUXIhtvPWSlvJJf%2FKqUYSFVPuFjojpnaVJtQ%2FsRT1LV%2FHtvdAgcaQGWxeMVho1yotFJrH21ikQ%2Fz3DWsMlOhOY4iYQveSoEONRnFbnGjeIzY6588V%2BWfdAVC%2Fyd72xxGF4gvlcn%2FY7zFLhzAYVfwca9s8e4yApXqMvS3jm2dvP4rFWnqcV5zOBLyxBCV3aKPqQ3lBuB47RXH5%2BOfLpgWMUFB47AM9RRt5zVFYasvWisYM6Y37g5bCz8%2FC8yMs3vumSDKCCeQyJujNH0dkaa76Ykm77WILFiNGUggthNy1UOcpPJbQF%2FMqYhhUAn%2Bw8AvomCVuRTXkJZTxlg0SxNBuWKKgS5fduJGs9%2F95CXieoefc50TBQBY2hNCauXyUI2UxCoSzGWpB6hJpDFNVGoOTkL5yLybxZi98BqJc6gXLPa1sLgJR2me2%2BcAfMJ722sQGOqUBtMGf%2FIQANooQojnuVEbl00w9wKpnP05Xw%2BvpJL4twyKEYpeyiXaheLFr5ljPhe5T%2BzXr3Ambvz7jo8IFxVjFQ0TUnLPZwZ9rL0M3Co3bMs9awcogW4lit1P23HoGsn7%2Baevj9f1hd5KH4j2%2F%2FP8VEiakVterEbJxpnXnjrIT1KeLeFfSQih21D%2FKVsjuVR%2F8Uj4aOWmazkijSd8QQchxHX1WdSX7&X-Amz-Signature=d367f862dfa22a617b05843b62b4145c04472fe6f2bc8d3f4eec523dbefd88d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2ZMAFM5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T042004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCfF6ByYXIiGtPc32rCtVGJxTpZyMeXNbYwJxYEW5nOrgIhAJ6iwWr0eda%2FtANmAj2Jy8nCC8Z9jzyrq7DHZYWwUlzeKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL6t6tdNx88OwJAN4q3ANTJiCLi9moLyJVERUtVOmohHlvrZ5CCmlCKSwWr0Rli2JSIpEZEvFKsjArxiWBWydJ5Vv1ur0IjySXwmDtoCC3BGKe05TXtwZ3gHC2T66wcLyvmMUw%2BmncT6T9%2FI2msKDkxKc9osBrEfhWTm0BTWcaNBpfTP0PP2IIFaUNk6ivhKmN%2BvoQBj5XLX7pOQw0adocUWO95jAe2r9dnIJp1ktAH7qROnCeQEQqID5XEiZgV9t%2FfG8BBBbOYnpIcR1fZ8Kwjv5HTLQB04Vw3IY%2FTpuWy969uss%2BT1fHgOotgcpVBpo8Iy5cdvcP4pIlMk%2B%2FPir5SWcRsWfFEXaecPR97Aac%2BFzYovfeseLRNc%2BytI0FnCTHRm4No6QGDdUSMrqVOMvEMPojWKAqI8UI4u1YFkvZKUijTdy6Is8SfSBCd6PT89TK6sm2LUbCeEoZtCV8O5j7BVLkwI1DR6ECaLozn4Kud7UzotjlkbyUkFt6TjajHJEqp4kG89mnBn9idyAnHGrHqCe4I99YN0YfG7jFugdCPVbXkaZMWtVGEKin2E%2BDJKWoQt77Uct%2Ba4SXnyPThgknwEWlXm3keS9WxDn17ukPYaiD3Lmcy6T9Tmkpvg5EWLIpduXeOXsEJ8ZSTzCX9trEBjqkARO0EsCZc3A837WDxvHfaSwYkhIA13ys3sFrVrd1V5I%2BsQCLjogOOsk0rP3kJfqHxrolYWWQvTYtNAMhaOULUIYUsNnK%2BlcGu9ISBXhlZqzYD1AU%2FZpkblrGhRk7ODxrT6wv%2B9J2ENDGn5qsUfn6vg0nijoyPQt9Sh%2BwWQci7A5fxECwTT1GbWtUJq%2Br6VCD1QbT2hI7vdVEsf9AvDbNGVbZZOik&X-Amz-Signature=cdcef97d2a22c31d00c3975bc4eb7f443e5cff28f2e42dcbb669204b6a22ded7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSL6CSHQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIB%2FYLiZBPImNKp3BkT6%2BWl8UoEcMmcIcGXDYEru1M5JYAiEA9v%2FcNUkEQjPaeiuXg9gXfCC7G3yLDAx4C%2BigN9AeeeMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALbzdugbeL8%2BihlEircA%2BDSImPkx8I6Pns6o%2F7bZFDNySaUK1D%2B5R9gEsleHYIsYsI78yCvYlC6VnwdIBCYRd7hHT%2BP8H82SBrX2p75srms2bAqh0UPXLjksuMGy7DUUXpvAClD1XZVXsbN1nAgtf31Ni%2FRj9IUHyGPPRLGLBNrKtB2oBSJJQ6%2BdkCfwiRTvtFoBBQVceVUvDyt3H936iporjIsWwdypgdAbhkZ%2Ff%2FQRHKbU7LsQyZGicn7oBRA2%2BaR4KhXQKe5ZHVG8kSHL2AS0QntuuTO028kN1hUWsWyyXJo3PeqU%2BPeWcVuAJGqtQYnruUyGvrMciVjMM0rlTyksjpWszk8WlVoaJAxY1tYYztAg20wBBV1WUyhSEUkmo4%2BcJ59Pq9Cmcxw3gUq3J78tigmkmqqBBjGXufdp96rgvGtJKoxgPrSBnTjhMbaka3Xw3fmuKLZkpxy2aoFnCkksiMxMDDsoE6OnGdk2BowL4HA7fB0pDpTeygr3ZjYZgq8VuHAcHE4ZhmQg08co2ToM0eUrcHdvfEDbVIVl0a6yI2GKkddY4OEAZMQ8aXCSCob6AaFKN%2FdqwUlGiz6Q%2BbwB1KSLQ3EtpAQH6gH616i5cJx84JqbrWqJpOmSAPOmrxyO%2FgPT0LBuCYlMJP22sQGOqUBQUdlTXRuGN1K5JV9OdGcU7sCgpKvE3YhEprS5pRAyDBU9lFaGV4fceBo8hs%2FvAg%2B5tIr03oKYoy58r1hhLsuSV8j636G9LB6y%2FkfZqC6iGGS9YtNtqc9xiXjdQTPF5efwmKr2fIwTinITnGvjJDUB%2BFvmFIo5NHykPDUhbadrphZlU2jTJmhtIG2%2FFD8hQvr%2FAzMRpPm8%2B0H4Z%2BuSvmj%2F0zl9Ti%2B&X-Amz-Signature=6dd14d9c80d256dacc71a55e06de22d0f5679adf04bc90643364074f0d800ed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLGVLXJ2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T042005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDAozMNLwY5g3LX6HmsdoZHiGVujmniX6K9j7%2BDtu4f1gIgZ%2BaKi91WlDYWh7E4raUkGH%2B%2BCDmF67VsmZ7Yhg2g5qsqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzJJPvu4j1ESkIToyrcAzzhOyPAp7%2BEDmaV8CKj7SuCuAcgLhLrgmzTTXIPlLjOd7AAQfuil9dmFlg2g7pOLSAbDIyGZgHWG4ykPki3qsVz9ZSTq9B3HJ1KX0VbrRaY1zWVKcoawukPB6VD6jpKVxgXrd5jxekHEqgxQdtd0GespL98aD2d19ySv%2Fsf52onA%2FE8ab4QE9b2ZEIuxSknad6IkLb6x8xAtMvWdWRw%2FgWMYJ7lUZ0dqeGLPZZhI67VxNok%2BHTvRzGWCCW%2FzKnCuctd7JkVxzj8CLIQjgUPA4IWrw19YjI0tUwFCon1f7Jm7uQet3%2FZfvk8pdoZeTkbNr2EOmh3vjvTlA9VlX2vYIMkPGi79LSJKXYD1e14xagwyfoIPOFaqlMV6aq7CtU8C5WxnofVQPlJKpiHGaGR%2Fvs61375x0F0FnTkcldNGXuQpDW1qEUa%2Fn7LeEZM2or%2BB4ACHSgOsRkPnBxaWDBfbyFQlozlyuw4jMGctiKF1rtTHnEP7zPhAZDD%2BgIh5WCEnbbYZ29WdAk9xL%2Bx4xXh9uByentAP1fXyOiwGEw0TS4E%2FxkFIvPDH8uIhVDnwSO08oGSAloTUUIHUkI72ZMcVWUEru4f%2FmFV%2BfaGHrycO1grc%2FvFu2T0UUqV0vkVMN%2F22sQGOqUBLPeANBzApG7bUaFsvqkS8EPeEeayYWq8V6mH6Lurbhs5SpGENISrs32xx38LSyQK02CTv6l9H%2BgxgqdVqU2xD7o7goqPR7LKtbG1h3I215QLjyVADn%2B4U0hCg6ZC%2FoQC4EY9P6TZsA7TZY8qIBk4%2FA85ziFLM54AAeIpzTiO94I9TuJAcLm%2BZ00fXu0mdUpYDVJeDtSPZuqJLCfrLaPHSXilKwdw&X-Amz-Signature=25119864bd9215e4bd1781e83b7975c9b58a4329b44f5bb786f53db52caa4690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSL6CSHQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIB%2FYLiZBPImNKp3BkT6%2BWl8UoEcMmcIcGXDYEru1M5JYAiEA9v%2FcNUkEQjPaeiuXg9gXfCC7G3yLDAx4C%2BigN9AeeeMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALbzdugbeL8%2BihlEircA%2BDSImPkx8I6Pns6o%2F7bZFDNySaUK1D%2B5R9gEsleHYIsYsI78yCvYlC6VnwdIBCYRd7hHT%2BP8H82SBrX2p75srms2bAqh0UPXLjksuMGy7DUUXpvAClD1XZVXsbN1nAgtf31Ni%2FRj9IUHyGPPRLGLBNrKtB2oBSJJQ6%2BdkCfwiRTvtFoBBQVceVUvDyt3H936iporjIsWwdypgdAbhkZ%2Ff%2FQRHKbU7LsQyZGicn7oBRA2%2BaR4KhXQKe5ZHVG8kSHL2AS0QntuuTO028kN1hUWsWyyXJo3PeqU%2BPeWcVuAJGqtQYnruUyGvrMciVjMM0rlTyksjpWszk8WlVoaJAxY1tYYztAg20wBBV1WUyhSEUkmo4%2BcJ59Pq9Cmcxw3gUq3J78tigmkmqqBBjGXufdp96rgvGtJKoxgPrSBnTjhMbaka3Xw3fmuKLZkpxy2aoFnCkksiMxMDDsoE6OnGdk2BowL4HA7fB0pDpTeygr3ZjYZgq8VuHAcHE4ZhmQg08co2ToM0eUrcHdvfEDbVIVl0a6yI2GKkddY4OEAZMQ8aXCSCob6AaFKN%2FdqwUlGiz6Q%2BbwB1KSLQ3EtpAQH6gH616i5cJx84JqbrWqJpOmSAPOmrxyO%2FgPT0LBuCYlMJP22sQGOqUBQUdlTXRuGN1K5JV9OdGcU7sCgpKvE3YhEprS5pRAyDBU9lFaGV4fceBo8hs%2FvAg%2B5tIr03oKYoy58r1hhLsuSV8j636G9LB6y%2FkfZqC6iGGS9YtNtqc9xiXjdQTPF5efwmKr2fIwTinITnGvjJDUB%2BFvmFIo5NHykPDUhbadrphZlU2jTJmhtIG2%2FFD8hQvr%2FAzMRpPm8%2B0H4Z%2BuSvmj%2F0zl9Ti%2B&X-Amz-Signature=ce43f4427b3518f51483842950759e50d6c31064192a8d5ba73ba63394075a26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GTTWUJ6%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T042010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDcDx1KGtB1Njm3qUqBl%2FP2kvi1HRiKsVX70Cl6p4YkRAIhAJHnQ3EqwfxjqjazAri76do59iCj3JFWWn2TIqkc2CB%2BKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlOYHc443y2ttd2uEq3AOar6cw2Ulf3liaczcB2Wec1ACBbvw%2BPbLgYn9%2BtHAS%2Fmq%2BcE%2B08QCJ0b3w7W6xsZbDXaNxZ0J5Hyzb923Y2pM6AFiIGeNScc7y1WTPucm9cuCX5kvWfuWiDx9IrRauuW%2FnowDbt6IjdOiTbQVKU1iWKSVyCfDiqIRL9O1GxXASjj2p0gI6xnCDDgLc33Zr73%2BouD4O4rocW%2B1EbqkRJNXAXy0idZODkU9l79dZjST7ellc2AcN%2Fid%2BmIYvVQJcof2HGc8Lq%2B2%2FkCidr936Ljr5RccJYmhkELVgkuS33C11QlBTlq05DdB9OW%2BwVcDRdtx0rihWheKvL7fj3wLKT4WuYJ1wuRwuWasXbHLPDXdQ7LgkTPtGZ7qFBaYvs43vLC7C2yTkv8mAuJIXJpOzuh4h%2BjVCiF3YmPil69KjcB69a53fUitbk9Lhs0rRKaDfMjyjUjCp8ObMtpDLHAX8m0qLG4l%2Bqrc2z%2FOiKINo8%2FVz1eLiHWWrmIHoeFM5KGU5eaSqWKemkI2w2io%2FzXtVwLbshkRRTliKE4pQMnnRMYiwpHHDDEblwEjsggS4mHi%2BuBhd9nGe1J%2FfTOQowwuYTuwe3%2B%2FPoJiAO1aPS3GXWT4raBFj59vZyj90dVsBlTCs9trEBjqkAceDryxXafmzzEM8NJbQRUmaP9mYuYlxoyRD29hRnwKm1u%2F6IDgOk90GSvBEvwA5gNb%2F8h%2FdQU%2BdBD4c9GqY0MVbFFhyatg7TNe3tznAnmQTsi%2FQ%2FUAdR5HoI7fxMxvXLL0q6lVFGIpaCTyqACgyEmQCBT88JhQ3YeQgV59eEbbN%2BNjds8heC9L%2F9Wdso9huLeXk9kgvJcHTbq7zeuu3B9pYXgqT&X-Amz-Signature=6a0cccdc6be7d704e4ed5ba9774315581a94e9161958ca0f77dba1ed9fab5065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSL6CSHQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIB%2FYLiZBPImNKp3BkT6%2BWl8UoEcMmcIcGXDYEru1M5JYAiEA9v%2FcNUkEQjPaeiuXg9gXfCC7G3yLDAx4C%2BigN9AeeeMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALbzdugbeL8%2BihlEircA%2BDSImPkx8I6Pns6o%2F7bZFDNySaUK1D%2B5R9gEsleHYIsYsI78yCvYlC6VnwdIBCYRd7hHT%2BP8H82SBrX2p75srms2bAqh0UPXLjksuMGy7DUUXpvAClD1XZVXsbN1nAgtf31Ni%2FRj9IUHyGPPRLGLBNrKtB2oBSJJQ6%2BdkCfwiRTvtFoBBQVceVUvDyt3H936iporjIsWwdypgdAbhkZ%2Ff%2FQRHKbU7LsQyZGicn7oBRA2%2BaR4KhXQKe5ZHVG8kSHL2AS0QntuuTO028kN1hUWsWyyXJo3PeqU%2BPeWcVuAJGqtQYnruUyGvrMciVjMM0rlTyksjpWszk8WlVoaJAxY1tYYztAg20wBBV1WUyhSEUkmo4%2BcJ59Pq9Cmcxw3gUq3J78tigmkmqqBBjGXufdp96rgvGtJKoxgPrSBnTjhMbaka3Xw3fmuKLZkpxy2aoFnCkksiMxMDDsoE6OnGdk2BowL4HA7fB0pDpTeygr3ZjYZgq8VuHAcHE4ZhmQg08co2ToM0eUrcHdvfEDbVIVl0a6yI2GKkddY4OEAZMQ8aXCSCob6AaFKN%2FdqwUlGiz6Q%2BbwB1KSLQ3EtpAQH6gH616i5cJx84JqbrWqJpOmSAPOmrxyO%2FgPT0LBuCYlMJP22sQGOqUBQUdlTXRuGN1K5JV9OdGcU7sCgpKvE3YhEprS5pRAyDBU9lFaGV4fceBo8hs%2FvAg%2B5tIr03oKYoy58r1hhLsuSV8j636G9LB6y%2FkfZqC6iGGS9YtNtqc9xiXjdQTPF5efwmKr2fIwTinITnGvjJDUB%2BFvmFIo5NHykPDUhbadrphZlU2jTJmhtIG2%2FFD8hQvr%2FAzMRpPm8%2B0H4Z%2BuSvmj%2F0zl9Ti%2B&X-Amz-Signature=8455933f2804337986f458682ba2adf493f2775f996f29d74bdaa0ee95b9785f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZS44DPB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T042015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBRCjcjCvlxAcawwxNqxElWHB9EG5QOhq7rDkWeMYpHLAiEA4kcVo1JPvB%2B5%2FytY7%2Bu%2BxgsJxk1ptdqgdGGSDUOrhvwqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKR8KF2W0DpeIgb2MSrcAy9QU3NyxheUhw4NfKzWuSl%2FWVwHIDsb7drmEjl2A7xM%2FUnrmE4AfionWSwnbZKvlhv9NaTNUrD%2BLkuIx8WvwPgwXZ1Alyc7ef69BTz295SF6ahse4NEngu2HwUYEKsY6dcfJB%2BfPw1vbYGtJwfIakvvi886EiXZbamf11UvWv8evLoFPPz4dneMUIX8UsIj8%2But4rfQM4Z8Y9aAjSP2Pi24rUtEKzrHZhcGx3UiALB6vh7p9uAn5e1D8OY3NHKDXTFQiYywuTrdnLUEuUF8e4eCurZR4wlkxcfg0WqfksQl0dIBwSPEUw0Wy4f2XyVT5kATknvjUyjQ1a0GVXhyTxnbTvpTFmVrjsGdlcvqh6rbUf3rSwR2l2R1Q968VtagtOxRBYFxJavkEU179ySRPTuhBoDh%2BHbxTkY0lYJ9u9IUOgcJtbHPsNSVaX%2B5qVRs2jk%2FztYDdpic2VpXPStuygj4aCgIcV9UzH6UCigI44PTkbsA97DdP6PEADk2fmuHFB6B9izYi1rtY%2BSUs%2BXloM7nafNIWsHVdGeOsnHfEiTv73yx1MXyJtkfuwzuf%2FKLCKZBC%2Baod366LQ3NNjQBsLS6pKYN7rbwKEBk9KjEXfZDONvpUCAUesX84kc4MOb12sQGOqUB1yOQUUMcQgMWnRV%2FBAG4d5EXHhiJ6wIat33%2B29FLTvEhV78Sf0evwY5C4rsgS3N25gKaWSM3rB5Y5FlY27Dl9rheZL5GBba%2F5WviVRRLs40fObSg5D1DQ%2FTLN4S2cOUKlg9Iez0nE1E9TIsTf4Hb1mo1qqiFS79hg5uhsA%2FObdKQ0HvNmeb8XUoLBWFZIt%2FrbACjcof76CFmdbnKE%2BSiLWK4mekK&X-Amz-Signature=8789ea30d116ccbd40f3f1523e5a7f6da72ebb7e26732ea691e57a1545b33443&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSL6CSHQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIB%2FYLiZBPImNKp3BkT6%2BWl8UoEcMmcIcGXDYEru1M5JYAiEA9v%2FcNUkEQjPaeiuXg9gXfCC7G3yLDAx4C%2BigN9AeeeMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALbzdugbeL8%2BihlEircA%2BDSImPkx8I6Pns6o%2F7bZFDNySaUK1D%2B5R9gEsleHYIsYsI78yCvYlC6VnwdIBCYRd7hHT%2BP8H82SBrX2p75srms2bAqh0UPXLjksuMGy7DUUXpvAClD1XZVXsbN1nAgtf31Ni%2FRj9IUHyGPPRLGLBNrKtB2oBSJJQ6%2BdkCfwiRTvtFoBBQVceVUvDyt3H936iporjIsWwdypgdAbhkZ%2Ff%2FQRHKbU7LsQyZGicn7oBRA2%2BaR4KhXQKe5ZHVG8kSHL2AS0QntuuTO028kN1hUWsWyyXJo3PeqU%2BPeWcVuAJGqtQYnruUyGvrMciVjMM0rlTyksjpWszk8WlVoaJAxY1tYYztAg20wBBV1WUyhSEUkmo4%2BcJ59Pq9Cmcxw3gUq3J78tigmkmqqBBjGXufdp96rgvGtJKoxgPrSBnTjhMbaka3Xw3fmuKLZkpxy2aoFnCkksiMxMDDsoE6OnGdk2BowL4HA7fB0pDpTeygr3ZjYZgq8VuHAcHE4ZhmQg08co2ToM0eUrcHdvfEDbVIVl0a6yI2GKkddY4OEAZMQ8aXCSCob6AaFKN%2FdqwUlGiz6Q%2BbwB1KSLQ3EtpAQH6gH616i5cJx84JqbrWqJpOmSAPOmrxyO%2FgPT0LBuCYlMJP22sQGOqUBQUdlTXRuGN1K5JV9OdGcU7sCgpKvE3YhEprS5pRAyDBU9lFaGV4fceBo8hs%2FvAg%2B5tIr03oKYoy58r1hhLsuSV8j636G9LB6y%2FkfZqC6iGGS9YtNtqc9xiXjdQTPF5efwmKr2fIwTinITnGvjJDUB%2BFvmFIo5NHykPDUhbadrphZlU2jTJmhtIG2%2FFD8hQvr%2FAzMRpPm8%2B0H4Z%2BuSvmj%2F0zl9Ti%2B&X-Amz-Signature=3307c47332750fb5c28ea4eca5d784b7dd8b4674e3326d708cae8cf204ef5a70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UASZ5OK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T042018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCC%2FHJqRn2x2%2BSonrp%2BmejNNX1LAaSAnKQB9yUyq6mxmwIhAKcvDLpslOWTGaF22YXubz1jx2YEZdoq3l787sWFHW6oKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Fzs3hs44pbiLKiQEq3APFtQX7c5dO6TctdxC1fXiKYoeuz9A6H478Fpgc%2BfEIkMpg%2BO8n3WNh2Ji2nRbNwmZVVJADsMnODywlfk4guZ92mzNj2JgruXWy8bQ66j%2Bsl7py7bfI7dpGKAzGylWW8CDZhop9NnG75nDlZyOr2zriZ7f1FXDSTih9AZSf5FnL0fN5P9J81mJH5gcKCGmCAwWJqQVkRaWMLQV14DrFOBFUkx81md8qLt1sQpxzKeATrQj%2F0GftwFMO9WCurAPHXuqlR3hDyYyQ6fnEHLBO0AS1BH5RnsWFzzIzVmHCOc%2FRdnH2QdzMPmd5KhviqCS5hIIPaPNaESYQNuc2EQy1HSYTbfteDIsOWST88GOUEPFW4aspyiFSyxwKN%2F3UgyglcTvXgYkCW39KTj4dN0YxerVcavDDyrJmoatqDwvNwEwani7fd%2BLMFlhGUdTTT1HoNYXedZXO9t9mP1VzwjUd1unpwGhyJKdoYtILfC9fqwYm5AfwSQbB4scPjLXaLNe5ZQ59BV3ps059CrCPj8DCCKpepBiwmhyfSy21dA3pNNgP30CQkUjkuHyJCluVenUmUfCCnodAyf8Y63grdyDtVC9w5tQCekkX1GyUpWb%2B%2FET%2F%2Bl8feIQlmzEb%2FUJboTCO9trEBjqkAfsktVbKRLf5IUTC19AbYc42ubHVzQwCmcv1k88EVDkBqQ2Dk13Pn2WhuDG%2BZVV8qCR0AZFsLsyOqmFfgn8ernJ8FecJYWB7Pddkmc1ZrhhqxB8xX71J7MhaGj0xW4cFMAle62uYmwDbovqD%2BynszQ%2BHCP6UBNfmvJiQUXUcppbDBqzm1OqsT2axQ2Syr7v3Y6IPdrEWsghcnHSdXzRK4aUjSDsU&X-Amz-Signature=7c91677ed7c7d4b1ae053f1eeab952440e336cf82b4aa55a6bf200b3c616a94c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V64F5DYG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T042021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICn%2Fa5spx39w2ezTVsigr6ZSNDcuBd0zg0wSgSQ2%2FSq6AiEAwf354A8PuQV0yW%2BHEdOAou8ziNlgWNKunD43pKR%2FjfoqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkq8C7dpACuyBElbyrcAwta1B5QdxpAKbMEPaRZjrxjjKAPF%2FzJD1QMzPSlHvUQ4%2F0pccSGpQ3SaTir3ZEBWkayHCd1wJj0QL1ikO0WIBMKn4G%2Fq4XgVeCk1lNsEoCmN958Za%2B3Vr5Nh0wgsPqcdyn%2FduoJHN8DexDm4vxH4u07pqP%2F6CsTVuTBdpUHH7t2y8JZTKDTmg8v%2F1TvunPny6RWdRkO4Ah6MO9Cq%2Fw6hTu4mfswIn6KD8UWGj1K0DIODPMdadswNHsXNwrNnBZy%2BDleGLrUeDyT%2FgDn4nn0dNwKy6Pc3njFkI8Anw0IgFCPrCfZl%2FwAVy5Nxs0Tl9qrVWYIo4WtMXCe98b2zz4zgtBKsNvrS3SjHHF%2F3sK3J3TEPDbO8M5tuESGCyEUsb%2FXZqdbtejJMsvhMABbJyp98du0kWgog3DLKx333lpcMSu6jY%2FjRPMr5vSd5XKwFCcKiPE8XJGkvuYeMPlFxxKn%2B5b8tpYZDFe6D6XfCkAqVsnpIcPXo7N5cCuhKbQ5C2BU4gbLrY%2FvTg4yA3BxeVh699EgZkbLT9sfO3XCiKR%2Fgvx9pa45jiu2Qz5OzgV4P%2BrYyigDCy%2BVyjZewoCAbI2pTxiNMADW0D%2B%2FBSqFv5Gis0vS40DKp%2Bbi2c95mQyBMPD12sQGOqUBmGRBtlmRPRcrRVFRPDtz2JZR5o8Bvc8VQtZHMpjdblxkVBXMcXEf8NXMDiPyN3mXi1hpv%2FJcqBLUBiplVcWfnbh%2B83ZYoVCRkcQEH0qq2Rpj7fVLw%2FzCLGJxXuXPK%2FsAe6Dzq%2FAlKWCPgLuHrC6LJY81M5%2FnxcGM961ZOk8QiSGN7BzLTCo4IX5eUEX47fsxpYhnXhhpoYdIMlsDoI4J%2FqwPOoOj&X-Amz-Signature=b9b61b9fd0ecd28850233195693e02c852da2fb5898a055508e11c4023496960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJBCKWG6%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T042026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH3yuSMmLPIMMWTEuqrefH4cyeJpQ1kv8Y0ZdiB%2FCKASAiB8A3%2Fc6JzNM1ypFs9gvZgKrO9x15BZJwhxdPmnNrIn9yqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwe%2BEgU04ijP04Un0KtwDGu68meXh1Q2ypNAucThRcilnlgZ7NGkTuuK0tz06gYD27ko06lXefdKkNtzXJ216q9tGEMrqAtgyD%2Bzg41vHkccrGe%2BuNH8glrqudKqUgDoXXXE7Lz8gFjZAUSPg0xyq7x8ctKJUuvxmuN3ulLkZB%2FIKo2e81PPRrrKTXN8izJPQQsFh7qx4NXDUrGgAH2WM4GA7oKvHJNTcQcEjpbFuUQpgTBo9isKZewgP%2BYCWtkEn78RE2wjhjDg9mCEfowUttlh3ntxY9bx7YIq1E8NpQBkC3b5QLYaSGj0fR5HfcietcCrboX4Tg7XTACKv8q7l48eiuLXis7bdLDv8Drnri4lNnWzXLtBSxmlyOoXnAlClTO7NkdhlAFxrsmiDfXivkj%2BKs34p35acvOPWYSIhBWlrJVl%2BzFFMEJV7bjRBKrVCam2e2drHHiuEE6aNzklfSaaEkIfUlN0SDJgwmSZL%2FB0itSZZPkdfQ9UxJDuaB4yGUG%2B%2BHsguXxzkgrF93KskxECznagX0LW3OdwziCrTqjvoo4rtL7EBhLOEvqNF7nUB1f3bcFjyJpee66NhO2KuLAcMyxI3pzSaklkFT9%2FltWcY1sZVHVpDir4Oj%2FdvHWIjNbNXpLI7PlokP3EwgfbaxAY6pgEJdX4J%2BSdrhUvGo%2BYjjARQw0tAapQMpwyQYlRGCD0dJNwadyGZl3IyXclcvcBmDF0Q1hcXRZ%2Fu%2Byw%2FbjmdCL6PQXtlzIdF883PmA%2B4MxDM9z0ldn1IY%2Bhmgoai8b67wsouJH7fn8%2Fcj%2BUQ4yGTMn%2FOhDU4H6dDzsV0aYwbMlX%2FgYPe7PJDO1NZDSirxPQEj18wyu3RnmbiQDg5ZTtfoXtTKlMWLl7H&X-Amz-Signature=6d7691132bab5bdec0e79d8e50975aebe23c9d498c1fa58a27bc79d6bb34fd58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUHDJNH6%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T042027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCID8e%2BFmELsvk9mcri42dQuufB%2B26sm%2B3LGVirZMJpx1fAiEAwg%2BpARhxmcbfKmrw%2BpS7g6QNxpGnyS2UTMFQKNaNTGQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLbJhDGF%2FSDm%2FlqLircA9LcODYD4xS%2BAhcPdK74qTftwVIobMxQCTjmswxJvH%2Fry2zSyoytZ6C4rdrtPHkzFwSmEiB9RgOQRtMXIa0%2BJ%2FZdqN%2FR8W6FwxXo%2B1xLPKQIer74LQxk1ESXoG0FLX8M3%2Fqy0rR3huc4MMHmyf4gA2MwgBHuefhxxuh2oWxJyvuE0QmowOti0FSrM%2BeuMC5V10r5S1qCbKplYtRS%2BzR4kLZjrdCdAPkrFsk2dH5vNcUFRyxt9n0ciIG7aF6c5Mivxioc%2FgENvIiR%2FbfClrcSjEPQTOjKsroCrAEoqiA2H78Pw%2FCHH4YP6NKEYnosp7bNoadVRXmlTU%2FWdRMGYlA%2Fl0uYjbC6wxB2CTzDtPA1mraCbw1j75QXX2qtU%2BcnW82xD98meb2vOyqZa%2BOAuDjGhptfCI6k2updgGOQjH0OdSqk%2BqvEG5jJLnwqfg0KWFtHtU474%2BRAC4NwrL%2Bin%2FwhuoepyAKy3uENN7ZVP3yx1bf77p4G%2FP%2BEcAGb%2FEnEtBLmEb72VBKoy5paYzW0rJU08dwVSyo8ivq8%2FOh4wFFVEZBIHRXDGyQz8ga0fctimgaX2hY4G2B%2BFGBp8o2rdLw9nbOcrkMOxTwAyaGsGbHZGjpfXHYTdiob1wdFvBtVMPj12sQGOqUBaZM12SmzQXxnaohx2TN8eill9xfw6vwv0WsBbro7jkUNhmRON3vVOfQyFhOEfgpGABhTQ%2F72kS91mJhciSe8wj%2FMgi7fp3x33dG6lLfVDFtbnSVCRU2wjh4OHYiph5mscaxIRTzgeZdcH0Sw8ThmmABD2ySDQe1KoBZRuM8ZYS8c5KG%2FX1WzXVTVlGMFGI2HhD7Ds1mIRi9eF6NWpnoK3dVVeiTD&X-Amz-Signature=f3260a2e17a9524ade63d6004d13a61642924929c953c5eec92629d70ca6c5c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM6NVAFP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T042030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDTbTMN5ZCGyKetE0623ePBAz1%2BI6BwHdkZQqq4bazwxAIhAK14udecn3Kmv4SrlqMb6gA4A%2Bda63xBqRsPLNS%2B%2B6GvKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzw0tpLrmGd1MgTF3Qq3ANDhYDGTKnKs6lIKBlGM8cIdlOcg%2FxYf9u1lcoUH6yVlBhyyRMr9X8LN97DrK9tPMJu5eTuyypbyJezbgrKcEd7xDaPCeeuJV%2BFm2zt2%2B33oWFzLRa06pCZnCnkV9B2E%2F17iEW99fWfT%2BCU8msnglmrvpHHRV5c2aeTOVXqGiq6%2BdGrVfQ7uDuuqWgWCqw58NLVfaa17YZkashbHc3qXGZpF7ud680AA2DDdErbrQuHFPzhjOcXHDvr7LeXpi9gp3FZJxvNoPaSbx%2FjyPO2v2TD3sFCUfdJhMzOQa7%2BYAZvF8mplTy6IpdtcmMUy4Ul427x0%2BU51Y6TQy%2FCdYgsuQfOT4CgAVoeJrhtHtVAU6rYuTyRhMqxStWXlRyHebTkOJCuqiOqTdcImgtEkgkjiI9SiGgVNd%2FKeB65PgXFnEtdE9nJkXL1Z46OGnB9RQRdqKxhdSAaDo3s1rgncr69cE49wZSPIwoBOYYc3LI%2Bxx7KYnyUIw6WuM38BNviEj4OI%2BJ%2ByGvUgWY%2F4d5aFWvy%2FxNB2K9bwKrUEnBN1U7yDPPXeFLHlGHWf4d%2F2Y63t7JSIHDR18qO3wLJQxdwxRczTUbH4a%2BpQ7pcgGzEG%2By308%2FmncH%2BoagGYDOjyKH1JjDV9trEBjqkASMCBNCs%2FRmJd6ltQgq40DzCsGmWWwAW%2Fcq1KA6tbtWE%2BmpsrEYusmuueJttjnO25DdGUUIhvangA8Q5OojmbfZftgnGkswPM2hR4Yd4N2GuGVvrhswbjqE2JDKgXoY6rGHFD7MY%2FfFhDRncfb%2BWtgjILC50Yi68WCTyHpsowND9CKHT8rBN7WxtxnWdwZ9Cjov16rixzCu08zIYXPU0QIroiaL%2F&X-Amz-Signature=691740218f913a512a5e701f22a0e836a4fa72576544f09aba806ffed7123623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSL6CSHQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIB%2FYLiZBPImNKp3BkT6%2BWl8UoEcMmcIcGXDYEru1M5JYAiEA9v%2FcNUkEQjPaeiuXg9gXfCC7G3yLDAx4C%2BigN9AeeeMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALbzdugbeL8%2BihlEircA%2BDSImPkx8I6Pns6o%2F7bZFDNySaUK1D%2B5R9gEsleHYIsYsI78yCvYlC6VnwdIBCYRd7hHT%2BP8H82SBrX2p75srms2bAqh0UPXLjksuMGy7DUUXpvAClD1XZVXsbN1nAgtf31Ni%2FRj9IUHyGPPRLGLBNrKtB2oBSJJQ6%2BdkCfwiRTvtFoBBQVceVUvDyt3H936iporjIsWwdypgdAbhkZ%2Ff%2FQRHKbU7LsQyZGicn7oBRA2%2BaR4KhXQKe5ZHVG8kSHL2AS0QntuuTO028kN1hUWsWyyXJo3PeqU%2BPeWcVuAJGqtQYnruUyGvrMciVjMM0rlTyksjpWszk8WlVoaJAxY1tYYztAg20wBBV1WUyhSEUkmo4%2BcJ59Pq9Cmcxw3gUq3J78tigmkmqqBBjGXufdp96rgvGtJKoxgPrSBnTjhMbaka3Xw3fmuKLZkpxy2aoFnCkksiMxMDDsoE6OnGdk2BowL4HA7fB0pDpTeygr3ZjYZgq8VuHAcHE4ZhmQg08co2ToM0eUrcHdvfEDbVIVl0a6yI2GKkddY4OEAZMQ8aXCSCob6AaFKN%2FdqwUlGiz6Q%2BbwB1KSLQ3EtpAQH6gH616i5cJx84JqbrWqJpOmSAPOmrxyO%2FgPT0LBuCYlMJP22sQGOqUBQUdlTXRuGN1K5JV9OdGcU7sCgpKvE3YhEprS5pRAyDBU9lFaGV4fceBo8hs%2FvAg%2B5tIr03oKYoy58r1hhLsuSV8j636G9LB6y%2FkfZqC6iGGS9YtNtqc9xiXjdQTPF5efwmKr2fIwTinITnGvjJDUB%2BFvmFIo5NHykPDUhbadrphZlU2jTJmhtIG2%2FFD8hQvr%2FAzMRpPm8%2B0H4Z%2BuSvmj%2F0zl9Ti%2B&X-Amz-Signature=95c1c4ee72bd8cda5f69ef20e3e3e13d4f5a2bd60b69de731e7854193747e183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSL6CSHQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIB%2FYLiZBPImNKp3BkT6%2BWl8UoEcMmcIcGXDYEru1M5JYAiEA9v%2FcNUkEQjPaeiuXg9gXfCC7G3yLDAx4C%2BigN9AeeeMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALbzdugbeL8%2BihlEircA%2BDSImPkx8I6Pns6o%2F7bZFDNySaUK1D%2B5R9gEsleHYIsYsI78yCvYlC6VnwdIBCYRd7hHT%2BP8H82SBrX2p75srms2bAqh0UPXLjksuMGy7DUUXpvAClD1XZVXsbN1nAgtf31Ni%2FRj9IUHyGPPRLGLBNrKtB2oBSJJQ6%2BdkCfwiRTvtFoBBQVceVUvDyt3H936iporjIsWwdypgdAbhkZ%2Ff%2FQRHKbU7LsQyZGicn7oBRA2%2BaR4KhXQKe5ZHVG8kSHL2AS0QntuuTO028kN1hUWsWyyXJo3PeqU%2BPeWcVuAJGqtQYnruUyGvrMciVjMM0rlTyksjpWszk8WlVoaJAxY1tYYztAg20wBBV1WUyhSEUkmo4%2BcJ59Pq9Cmcxw3gUq3J78tigmkmqqBBjGXufdp96rgvGtJKoxgPrSBnTjhMbaka3Xw3fmuKLZkpxy2aoFnCkksiMxMDDsoE6OnGdk2BowL4HA7fB0pDpTeygr3ZjYZgq8VuHAcHE4ZhmQg08co2ToM0eUrcHdvfEDbVIVl0a6yI2GKkddY4OEAZMQ8aXCSCob6AaFKN%2FdqwUlGiz6Q%2BbwB1KSLQ3EtpAQH6gH616i5cJx84JqbrWqJpOmSAPOmrxyO%2FgPT0LBuCYlMJP22sQGOqUBQUdlTXRuGN1K5JV9OdGcU7sCgpKvE3YhEprS5pRAyDBU9lFaGV4fceBo8hs%2FvAg%2B5tIr03oKYoy58r1hhLsuSV8j636G9LB6y%2FkfZqC6iGGS9YtNtqc9xiXjdQTPF5efwmKr2fIwTinITnGvjJDUB%2BFvmFIo5NHykPDUhbadrphZlU2jTJmhtIG2%2FFD8hQvr%2FAzMRpPm8%2B0H4Z%2BuSvmj%2F0zl9Ti%2B&X-Amz-Signature=ce66acc280f2769b3bc102da89892b5cbef54db2322c794d0e715649d0dc1ba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWQ2YFFI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCJNefqtXT%2BVB6ORGCjn33nYreQSzpM9nqq08iYhoBUiwIhAIbDJnMHsivJuoXyhYsV6i75u2UgTF3WiPFoKm0D6JAQKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvMeivg4J7SIvy6Lkq3AMpQ2OHkHgQ3OC4nDAfom8gn2%2Bi1h4DUzaPzSYT6gWekm%2F2nFeUa9%2F4HM8Ok5lZjXEqARzlUT0RVR4j5ULj3H88MdX9tXvaZHveiIUJqM0OuHb9w42zlXTmN21cuLwc%2F4ORfsQREd7acVW8B%2BgBHyjg3nEKhRT2f22xWtMaGaC1ziMCMe%2Fbj%2Fix4ffxHUbFDAiEJbQQTQ3G%2BxXR75d2R%2FFy%2FMWitCga8Vb17XFDVddXQtmQA%2BAipcXQCaqlGT7p2AKs3PK%2FchU%2BzFXpD9ES5%2FARFhMQFuM0DGI9NE%2Fg5ALBrszF9Rmrfq6uzPuU9%2B1mcDx9cDs7iklyNne3BCiuQJ7QcrFpDQgn7v5kF7RjoR%2FhCHuR7JTbDup88N5Z%2BHM2SaWJLzCf4m3v%2BH2davRohklDyDljvchU51EhQt3ZvDPIQZ52%2BUzOUBepqQ2PHB%2BV7qkh6lJnSFMOxYSrCdWPE5Y2rMEA3Dof4lPOqfa%2BkgBkFSA6yV%2FlSU8ttcnj4jIkBr6x2hpcdKfJRjfCTlw1Nj0NU9XRItOtYsR4dHjiSK0Za6x4GQV853TRXNkiOsJoPRGsmzwl9SWp%2Bbztlb2AmzPQSQ3MnHgKM2hL9iOyqZSZbPojYkapavS1meLF6zDE9trEBjqkAWgcO6gJYWKPjcUhQE%2BE8LcWWcjbAbR%2FDw8b%2F8s%2FPweYG6PBGHEC2ufpwBKWfgLce3fuF6dqPQ2NNkm9iAwQJmB5jwCEnX8bxONrsKntmUieGdOV2AH%2Bk50suiGiwCoBmX1a2ZmOjcaq5geyFDA7HIwETGVoYiAYiPFMtCJNJ9FRyc8qx4KcmJvoxWb4GF%2FRbFDMeD9JHyHIIidiF3Tbo%2Fg4BrE5&X-Amz-Signature=4b34dd454096e68bf9cc2ff1c687d77c36cfa84055289e2e8535949b748f1b58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWQ2YFFI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCJNefqtXT%2BVB6ORGCjn33nYreQSzpM9nqq08iYhoBUiwIhAIbDJnMHsivJuoXyhYsV6i75u2UgTF3WiPFoKm0D6JAQKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvMeivg4J7SIvy6Lkq3AMpQ2OHkHgQ3OC4nDAfom8gn2%2Bi1h4DUzaPzSYT6gWekm%2F2nFeUa9%2F4HM8Ok5lZjXEqARzlUT0RVR4j5ULj3H88MdX9tXvaZHveiIUJqM0OuHb9w42zlXTmN21cuLwc%2F4ORfsQREd7acVW8B%2BgBHyjg3nEKhRT2f22xWtMaGaC1ziMCMe%2Fbj%2Fix4ffxHUbFDAiEJbQQTQ3G%2BxXR75d2R%2FFy%2FMWitCga8Vb17XFDVddXQtmQA%2BAipcXQCaqlGT7p2AKs3PK%2FchU%2BzFXpD9ES5%2FARFhMQFuM0DGI9NE%2Fg5ALBrszF9Rmrfq6uzPuU9%2B1mcDx9cDs7iklyNne3BCiuQJ7QcrFpDQgn7v5kF7RjoR%2FhCHuR7JTbDup88N5Z%2BHM2SaWJLzCf4m3v%2BH2davRohklDyDljvchU51EhQt3ZvDPIQZ52%2BUzOUBepqQ2PHB%2BV7qkh6lJnSFMOxYSrCdWPE5Y2rMEA3Dof4lPOqfa%2BkgBkFSA6yV%2FlSU8ttcnj4jIkBr6x2hpcdKfJRjfCTlw1Nj0NU9XRItOtYsR4dHjiSK0Za6x4GQV853TRXNkiOsJoPRGsmzwl9SWp%2Bbztlb2AmzPQSQ3MnHgKM2hL9iOyqZSZbPojYkapavS1meLF6zDE9trEBjqkAWgcO6gJYWKPjcUhQE%2BE8LcWWcjbAbR%2FDw8b%2F8s%2FPweYG6PBGHEC2ufpwBKWfgLce3fuF6dqPQ2NNkm9iAwQJmB5jwCEnX8bxONrsKntmUieGdOV2AH%2Bk50suiGiwCoBmX1a2ZmOjcaq5geyFDA7HIwETGVoYiAYiPFMtCJNJ9FRyc8qx4KcmJvoxWb4GF%2FRbFDMeD9JHyHIIidiF3Tbo%2Fg4BrE5&X-Amz-Signature=60602792872e6f290f9d6a00fbbcb82c0c93f3d48fb786daf1aecbad11864432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWQ2YFFI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCJNefqtXT%2BVB6ORGCjn33nYreQSzpM9nqq08iYhoBUiwIhAIbDJnMHsivJuoXyhYsV6i75u2UgTF3WiPFoKm0D6JAQKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvMeivg4J7SIvy6Lkq3AMpQ2OHkHgQ3OC4nDAfom8gn2%2Bi1h4DUzaPzSYT6gWekm%2F2nFeUa9%2F4HM8Ok5lZjXEqARzlUT0RVR4j5ULj3H88MdX9tXvaZHveiIUJqM0OuHb9w42zlXTmN21cuLwc%2F4ORfsQREd7acVW8B%2BgBHyjg3nEKhRT2f22xWtMaGaC1ziMCMe%2Fbj%2Fix4ffxHUbFDAiEJbQQTQ3G%2BxXR75d2R%2FFy%2FMWitCga8Vb17XFDVddXQtmQA%2BAipcXQCaqlGT7p2AKs3PK%2FchU%2BzFXpD9ES5%2FARFhMQFuM0DGI9NE%2Fg5ALBrszF9Rmrfq6uzPuU9%2B1mcDx9cDs7iklyNne3BCiuQJ7QcrFpDQgn7v5kF7RjoR%2FhCHuR7JTbDup88N5Z%2BHM2SaWJLzCf4m3v%2BH2davRohklDyDljvchU51EhQt3ZvDPIQZ52%2BUzOUBepqQ2PHB%2BV7qkh6lJnSFMOxYSrCdWPE5Y2rMEA3Dof4lPOqfa%2BkgBkFSA6yV%2FlSU8ttcnj4jIkBr6x2hpcdKfJRjfCTlw1Nj0NU9XRItOtYsR4dHjiSK0Za6x4GQV853TRXNkiOsJoPRGsmzwl9SWp%2Bbztlb2AmzPQSQ3MnHgKM2hL9iOyqZSZbPojYkapavS1meLF6zDE9trEBjqkAWgcO6gJYWKPjcUhQE%2BE8LcWWcjbAbR%2FDw8b%2F8s%2FPweYG6PBGHEC2ufpwBKWfgLce3fuF6dqPQ2NNkm9iAwQJmB5jwCEnX8bxONrsKntmUieGdOV2AH%2Bk50suiGiwCoBmX1a2ZmOjcaq5geyFDA7HIwETGVoYiAYiPFMtCJNJ9FRyc8qx4KcmJvoxWb4GF%2FRbFDMeD9JHyHIIidiF3Tbo%2Fg4BrE5&X-Amz-Signature=7affad3894c7183c233bf9a8b1805b393e8604408b678126bde4b83228b45bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWQ2YFFI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCJNefqtXT%2BVB6ORGCjn33nYreQSzpM9nqq08iYhoBUiwIhAIbDJnMHsivJuoXyhYsV6i75u2UgTF3WiPFoKm0D6JAQKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvMeivg4J7SIvy6Lkq3AMpQ2OHkHgQ3OC4nDAfom8gn2%2Bi1h4DUzaPzSYT6gWekm%2F2nFeUa9%2F4HM8Ok5lZjXEqARzlUT0RVR4j5ULj3H88MdX9tXvaZHveiIUJqM0OuHb9w42zlXTmN21cuLwc%2F4ORfsQREd7acVW8B%2BgBHyjg3nEKhRT2f22xWtMaGaC1ziMCMe%2Fbj%2Fix4ffxHUbFDAiEJbQQTQ3G%2BxXR75d2R%2FFy%2FMWitCga8Vb17XFDVddXQtmQA%2BAipcXQCaqlGT7p2AKs3PK%2FchU%2BzFXpD9ES5%2FARFhMQFuM0DGI9NE%2Fg5ALBrszF9Rmrfq6uzPuU9%2B1mcDx9cDs7iklyNne3BCiuQJ7QcrFpDQgn7v5kF7RjoR%2FhCHuR7JTbDup88N5Z%2BHM2SaWJLzCf4m3v%2BH2davRohklDyDljvchU51EhQt3ZvDPIQZ52%2BUzOUBepqQ2PHB%2BV7qkh6lJnSFMOxYSrCdWPE5Y2rMEA3Dof4lPOqfa%2BkgBkFSA6yV%2FlSU8ttcnj4jIkBr6x2hpcdKfJRjfCTlw1Nj0NU9XRItOtYsR4dHjiSK0Za6x4GQV853TRXNkiOsJoPRGsmzwl9SWp%2Bbztlb2AmzPQSQ3MnHgKM2hL9iOyqZSZbPojYkapavS1meLF6zDE9trEBjqkAWgcO6gJYWKPjcUhQE%2BE8LcWWcjbAbR%2FDw8b%2F8s%2FPweYG6PBGHEC2ufpwBKWfgLce3fuF6dqPQ2NNkm9iAwQJmB5jwCEnX8bxONrsKntmUieGdOV2AH%2Bk50suiGiwCoBmX1a2ZmOjcaq5geyFDA7HIwETGVoYiAYiPFMtCJNJ9FRyc8qx4KcmJvoxWb4GF%2FRbFDMeD9JHyHIIidiF3Tbo%2Fg4BrE5&X-Amz-Signature=9955ebf7e62b8293a4497ef9d6aa6b6af0f6f147fe8c65f6826d56e1b6bc4cc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWQ2YFFI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCJNefqtXT%2BVB6ORGCjn33nYreQSzpM9nqq08iYhoBUiwIhAIbDJnMHsivJuoXyhYsV6i75u2UgTF3WiPFoKm0D6JAQKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvMeivg4J7SIvy6Lkq3AMpQ2OHkHgQ3OC4nDAfom8gn2%2Bi1h4DUzaPzSYT6gWekm%2F2nFeUa9%2F4HM8Ok5lZjXEqARzlUT0RVR4j5ULj3H88MdX9tXvaZHveiIUJqM0OuHb9w42zlXTmN21cuLwc%2F4ORfsQREd7acVW8B%2BgBHyjg3nEKhRT2f22xWtMaGaC1ziMCMe%2Fbj%2Fix4ffxHUbFDAiEJbQQTQ3G%2BxXR75d2R%2FFy%2FMWitCga8Vb17XFDVddXQtmQA%2BAipcXQCaqlGT7p2AKs3PK%2FchU%2BzFXpD9ES5%2FARFhMQFuM0DGI9NE%2Fg5ALBrszF9Rmrfq6uzPuU9%2B1mcDx9cDs7iklyNne3BCiuQJ7QcrFpDQgn7v5kF7RjoR%2FhCHuR7JTbDup88N5Z%2BHM2SaWJLzCf4m3v%2BH2davRohklDyDljvchU51EhQt3ZvDPIQZ52%2BUzOUBepqQ2PHB%2BV7qkh6lJnSFMOxYSrCdWPE5Y2rMEA3Dof4lPOqfa%2BkgBkFSA6yV%2FlSU8ttcnj4jIkBr6x2hpcdKfJRjfCTlw1Nj0NU9XRItOtYsR4dHjiSK0Za6x4GQV853TRXNkiOsJoPRGsmzwl9SWp%2Bbztlb2AmzPQSQ3MnHgKM2hL9iOyqZSZbPojYkapavS1meLF6zDE9trEBjqkAWgcO6gJYWKPjcUhQE%2BE8LcWWcjbAbR%2FDw8b%2F8s%2FPweYG6PBGHEC2ufpwBKWfgLce3fuF6dqPQ2NNkm9iAwQJmB5jwCEnX8bxONrsKntmUieGdOV2AH%2Bk50suiGiwCoBmX1a2ZmOjcaq5geyFDA7HIwETGVoYiAYiPFMtCJNJ9FRyc8qx4KcmJvoxWb4GF%2FRbFDMeD9JHyHIIidiF3Tbo%2Fg4BrE5&X-Amz-Signature=dc5beaa9aa0184f029ab9bc82f39bd0d3dfa84e44855fdc7979bffd55a3e7a6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWQ2YFFI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCJNefqtXT%2BVB6ORGCjn33nYreQSzpM9nqq08iYhoBUiwIhAIbDJnMHsivJuoXyhYsV6i75u2UgTF3WiPFoKm0D6JAQKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvMeivg4J7SIvy6Lkq3AMpQ2OHkHgQ3OC4nDAfom8gn2%2Bi1h4DUzaPzSYT6gWekm%2F2nFeUa9%2F4HM8Ok5lZjXEqARzlUT0RVR4j5ULj3H88MdX9tXvaZHveiIUJqM0OuHb9w42zlXTmN21cuLwc%2F4ORfsQREd7acVW8B%2BgBHyjg3nEKhRT2f22xWtMaGaC1ziMCMe%2Fbj%2Fix4ffxHUbFDAiEJbQQTQ3G%2BxXR75d2R%2FFy%2FMWitCga8Vb17XFDVddXQtmQA%2BAipcXQCaqlGT7p2AKs3PK%2FchU%2BzFXpD9ES5%2FARFhMQFuM0DGI9NE%2Fg5ALBrszF9Rmrfq6uzPuU9%2B1mcDx9cDs7iklyNne3BCiuQJ7QcrFpDQgn7v5kF7RjoR%2FhCHuR7JTbDup88N5Z%2BHM2SaWJLzCf4m3v%2BH2davRohklDyDljvchU51EhQt3ZvDPIQZ52%2BUzOUBepqQ2PHB%2BV7qkh6lJnSFMOxYSrCdWPE5Y2rMEA3Dof4lPOqfa%2BkgBkFSA6yV%2FlSU8ttcnj4jIkBr6x2hpcdKfJRjfCTlw1Nj0NU9XRItOtYsR4dHjiSK0Za6x4GQV853TRXNkiOsJoPRGsmzwl9SWp%2Bbztlb2AmzPQSQ3MnHgKM2hL9iOyqZSZbPojYkapavS1meLF6zDE9trEBjqkAWgcO6gJYWKPjcUhQE%2BE8LcWWcjbAbR%2FDw8b%2F8s%2FPweYG6PBGHEC2ufpwBKWfgLce3fuF6dqPQ2NNkm9iAwQJmB5jwCEnX8bxONrsKntmUieGdOV2AH%2Bk50suiGiwCoBmX1a2ZmOjcaq5geyFDA7HIwETGVoYiAYiPFMtCJNJ9FRyc8qx4KcmJvoxWb4GF%2FRbFDMeD9JHyHIIidiF3Tbo%2Fg4BrE5&X-Amz-Signature=ae2ba4f7bfce95e79b846e5813adc9a97b7437238a2be863d1811114a81ae69c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWQ2YFFI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCJNefqtXT%2BVB6ORGCjn33nYreQSzpM9nqq08iYhoBUiwIhAIbDJnMHsivJuoXyhYsV6i75u2UgTF3WiPFoKm0D6JAQKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvMeivg4J7SIvy6Lkq3AMpQ2OHkHgQ3OC4nDAfom8gn2%2Bi1h4DUzaPzSYT6gWekm%2F2nFeUa9%2F4HM8Ok5lZjXEqARzlUT0RVR4j5ULj3H88MdX9tXvaZHveiIUJqM0OuHb9w42zlXTmN21cuLwc%2F4ORfsQREd7acVW8B%2BgBHyjg3nEKhRT2f22xWtMaGaC1ziMCMe%2Fbj%2Fix4ffxHUbFDAiEJbQQTQ3G%2BxXR75d2R%2FFy%2FMWitCga8Vb17XFDVddXQtmQA%2BAipcXQCaqlGT7p2AKs3PK%2FchU%2BzFXpD9ES5%2FARFhMQFuM0DGI9NE%2Fg5ALBrszF9Rmrfq6uzPuU9%2B1mcDx9cDs7iklyNne3BCiuQJ7QcrFpDQgn7v5kF7RjoR%2FhCHuR7JTbDup88N5Z%2BHM2SaWJLzCf4m3v%2BH2davRohklDyDljvchU51EhQt3ZvDPIQZ52%2BUzOUBepqQ2PHB%2BV7qkh6lJnSFMOxYSrCdWPE5Y2rMEA3Dof4lPOqfa%2BkgBkFSA6yV%2FlSU8ttcnj4jIkBr6x2hpcdKfJRjfCTlw1Nj0NU9XRItOtYsR4dHjiSK0Za6x4GQV853TRXNkiOsJoPRGsmzwl9SWp%2Bbztlb2AmzPQSQ3MnHgKM2hL9iOyqZSZbPojYkapavS1meLF6zDE9trEBjqkAWgcO6gJYWKPjcUhQE%2BE8LcWWcjbAbR%2FDw8b%2F8s%2FPweYG6PBGHEC2ufpwBKWfgLce3fuF6dqPQ2NNkm9iAwQJmB5jwCEnX8bxONrsKntmUieGdOV2AH%2Bk50suiGiwCoBmX1a2ZmOjcaq5geyFDA7HIwETGVoYiAYiPFMtCJNJ9FRyc8qx4KcmJvoxWb4GF%2FRbFDMeD9JHyHIIidiF3Tbo%2Fg4BrE5&X-Amz-Signature=7affad3894c7183c233bf9a8b1805b393e8604408b678126bde4b83228b45bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWQ2YFFI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCJNefqtXT%2BVB6ORGCjn33nYreQSzpM9nqq08iYhoBUiwIhAIbDJnMHsivJuoXyhYsV6i75u2UgTF3WiPFoKm0D6JAQKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvMeivg4J7SIvy6Lkq3AMpQ2OHkHgQ3OC4nDAfom8gn2%2Bi1h4DUzaPzSYT6gWekm%2F2nFeUa9%2F4HM8Ok5lZjXEqARzlUT0RVR4j5ULj3H88MdX9tXvaZHveiIUJqM0OuHb9w42zlXTmN21cuLwc%2F4ORfsQREd7acVW8B%2BgBHyjg3nEKhRT2f22xWtMaGaC1ziMCMe%2Fbj%2Fix4ffxHUbFDAiEJbQQTQ3G%2BxXR75d2R%2FFy%2FMWitCga8Vb17XFDVddXQtmQA%2BAipcXQCaqlGT7p2AKs3PK%2FchU%2BzFXpD9ES5%2FARFhMQFuM0DGI9NE%2Fg5ALBrszF9Rmrfq6uzPuU9%2B1mcDx9cDs7iklyNne3BCiuQJ7QcrFpDQgn7v5kF7RjoR%2FhCHuR7JTbDup88N5Z%2BHM2SaWJLzCf4m3v%2BH2davRohklDyDljvchU51EhQt3ZvDPIQZ52%2BUzOUBepqQ2PHB%2BV7qkh6lJnSFMOxYSrCdWPE5Y2rMEA3Dof4lPOqfa%2BkgBkFSA6yV%2FlSU8ttcnj4jIkBr6x2hpcdKfJRjfCTlw1Nj0NU9XRItOtYsR4dHjiSK0Za6x4GQV853TRXNkiOsJoPRGsmzwl9SWp%2Bbztlb2AmzPQSQ3MnHgKM2hL9iOyqZSZbPojYkapavS1meLF6zDE9trEBjqkAWgcO6gJYWKPjcUhQE%2BE8LcWWcjbAbR%2FDw8b%2F8s%2FPweYG6PBGHEC2ufpwBKWfgLce3fuF6dqPQ2NNkm9iAwQJmB5jwCEnX8bxONrsKntmUieGdOV2AH%2Bk50suiGiwCoBmX1a2ZmOjcaq5geyFDA7HIwETGVoYiAYiPFMtCJNJ9FRyc8qx4KcmJvoxWb4GF%2FRbFDMeD9JHyHIIidiF3Tbo%2Fg4BrE5&X-Amz-Signature=10b879a65f9ee6314f2bd8d44efd4c9eafd8539f5823eb72420fbf144442a51a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWQ2YFFI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCJNefqtXT%2BVB6ORGCjn33nYreQSzpM9nqq08iYhoBUiwIhAIbDJnMHsivJuoXyhYsV6i75u2UgTF3WiPFoKm0D6JAQKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvMeivg4J7SIvy6Lkq3AMpQ2OHkHgQ3OC4nDAfom8gn2%2Bi1h4DUzaPzSYT6gWekm%2F2nFeUa9%2F4HM8Ok5lZjXEqARzlUT0RVR4j5ULj3H88MdX9tXvaZHveiIUJqM0OuHb9w42zlXTmN21cuLwc%2F4ORfsQREd7acVW8B%2BgBHyjg3nEKhRT2f22xWtMaGaC1ziMCMe%2Fbj%2Fix4ffxHUbFDAiEJbQQTQ3G%2BxXR75d2R%2FFy%2FMWitCga8Vb17XFDVddXQtmQA%2BAipcXQCaqlGT7p2AKs3PK%2FchU%2BzFXpD9ES5%2FARFhMQFuM0DGI9NE%2Fg5ALBrszF9Rmrfq6uzPuU9%2B1mcDx9cDs7iklyNne3BCiuQJ7QcrFpDQgn7v5kF7RjoR%2FhCHuR7JTbDup88N5Z%2BHM2SaWJLzCf4m3v%2BH2davRohklDyDljvchU51EhQt3ZvDPIQZ52%2BUzOUBepqQ2PHB%2BV7qkh6lJnSFMOxYSrCdWPE5Y2rMEA3Dof4lPOqfa%2BkgBkFSA6yV%2FlSU8ttcnj4jIkBr6x2hpcdKfJRjfCTlw1Nj0NU9XRItOtYsR4dHjiSK0Za6x4GQV853TRXNkiOsJoPRGsmzwl9SWp%2Bbztlb2AmzPQSQ3MnHgKM2hL9iOyqZSZbPojYkapavS1meLF6zDE9trEBjqkAWgcO6gJYWKPjcUhQE%2BE8LcWWcjbAbR%2FDw8b%2F8s%2FPweYG6PBGHEC2ufpwBKWfgLce3fuF6dqPQ2NNkm9iAwQJmB5jwCEnX8bxONrsKntmUieGdOV2AH%2Bk50suiGiwCoBmX1a2ZmOjcaq5geyFDA7HIwETGVoYiAYiPFMtCJNJ9FRyc8qx4KcmJvoxWb4GF%2FRbFDMeD9JHyHIIidiF3Tbo%2Fg4BrE5&X-Amz-Signature=a6820af25db1ff7425868a45e01e0346cc7251e942f08530e8f3ba66540cbcc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWQ2YFFI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCJNefqtXT%2BVB6ORGCjn33nYreQSzpM9nqq08iYhoBUiwIhAIbDJnMHsivJuoXyhYsV6i75u2UgTF3WiPFoKm0D6JAQKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvMeivg4J7SIvy6Lkq3AMpQ2OHkHgQ3OC4nDAfom8gn2%2Bi1h4DUzaPzSYT6gWekm%2F2nFeUa9%2F4HM8Ok5lZjXEqARzlUT0RVR4j5ULj3H88MdX9tXvaZHveiIUJqM0OuHb9w42zlXTmN21cuLwc%2F4ORfsQREd7acVW8B%2BgBHyjg3nEKhRT2f22xWtMaGaC1ziMCMe%2Fbj%2Fix4ffxHUbFDAiEJbQQTQ3G%2BxXR75d2R%2FFy%2FMWitCga8Vb17XFDVddXQtmQA%2BAipcXQCaqlGT7p2AKs3PK%2FchU%2BzFXpD9ES5%2FARFhMQFuM0DGI9NE%2Fg5ALBrszF9Rmrfq6uzPuU9%2B1mcDx9cDs7iklyNne3BCiuQJ7QcrFpDQgn7v5kF7RjoR%2FhCHuR7JTbDup88N5Z%2BHM2SaWJLzCf4m3v%2BH2davRohklDyDljvchU51EhQt3ZvDPIQZ52%2BUzOUBepqQ2PHB%2BV7qkh6lJnSFMOxYSrCdWPE5Y2rMEA3Dof4lPOqfa%2BkgBkFSA6yV%2FlSU8ttcnj4jIkBr6x2hpcdKfJRjfCTlw1Nj0NU9XRItOtYsR4dHjiSK0Za6x4GQV853TRXNkiOsJoPRGsmzwl9SWp%2Bbztlb2AmzPQSQ3MnHgKM2hL9iOyqZSZbPojYkapavS1meLF6zDE9trEBjqkAWgcO6gJYWKPjcUhQE%2BE8LcWWcjbAbR%2FDw8b%2F8s%2FPweYG6PBGHEC2ufpwBKWfgLce3fuF6dqPQ2NNkm9iAwQJmB5jwCEnX8bxONrsKntmUieGdOV2AH%2Bk50suiGiwCoBmX1a2ZmOjcaq5geyFDA7HIwETGVoYiAYiPFMtCJNJ9FRyc8qx4KcmJvoxWb4GF%2FRbFDMeD9JHyHIIidiF3Tbo%2Fg4BrE5&X-Amz-Signature=81f801c7db83eeb5a49282d13a254d2112b80c6c54aef1a15c65aec59734ff6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
