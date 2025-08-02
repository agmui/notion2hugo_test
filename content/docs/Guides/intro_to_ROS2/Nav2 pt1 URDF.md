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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD6HWTNO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuS2aLVSovvZF42eH13DsWyy5yuLfWus5bVV6nzUo1vAiEAv7dEZrpoM8aL7QrH5wB4FpXelBxak2mMbGuFnFwrLlgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDL4jfB1JWpb%2BQLiSYyrcA395mTiihE799zG%2BDRPKB1PmYSK20X6jg1BIrLwqV6mPX5EQmD4bKnJXPIMNyGSWxWTTIozraIokfBHm24MCep2PiVQGdt2eNoKuNilWdH9sPxIRqJEV5TJNbZ1t7BOJdrCG1EalkYQU8ybqjiA7B%2Bic7jsWUF5NMuORMwhN1h%2FhAafOe4iGXrs41R8hI16LjrJ8MXC57lIwWpt0V%2FjatxcSAOUYIeIqXN86GB4rqfAanBqSMWzGK3SGOf8Z8AkxOG0RnDa40t0%2Bg5IgtRIolc6gG4y8E29IdnGvRv%2BQ6GIJYZ69Q4lDdCr8f9SEf0S4EbXQOwVcAVKpQjR1W67Xl6c5hGrDTMmcbbERHgzaqqegb%2FgnQMp%2FCJYorRnRoV3SwUrk5krCi2rrejgswkMvswZsyv0OayVSASn6Rj7RW4vkX%2BJtVG1p43V%2BXYNbT1p5pPMyi7FTcOlvNRnsPDluu4mWfSFkhcodFlfy62XcK9Qggwa6Vjai5YF0WP2Z8keLParJ1Ca4bcb4uPuoDHE60l%2F3ADWRJpIrZSGsTjmovswvfNKsFvSjtDUznMJgdmzlojrBGycFtNsRjpa2MHceArmk8biaJhkxURgY4eVdzROSXSBvcz%2Bke5qLfGtuMMqAusQGOqUBL%2F613SvC%2BZq2qqBNhAB52KDJtJwQCV6bOht1vrdAH%2BJQQjt4n7O9XTjDVbYLXFif14aJmmBluroajNCi6fPjk6Py9s8ybV1e%2F3Y1giyZFvpzmqyc%2FU6%2B6cXu9vKtYeNdtDToRy8p%2BjRoVqtYHnipOBnDNag2aP5kWLHLGQGYEqk2XABQp9sQAzX3352B9pL%2FJSiREujC67BdDlBrNDyfM34XgZGB&X-Amz-Signature=847dc674515f90c7f7f70f3160cb04cfefdb6f7b1ac0bdadd2b09e8db9ad33bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD6HWTNO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuS2aLVSovvZF42eH13DsWyy5yuLfWus5bVV6nzUo1vAiEAv7dEZrpoM8aL7QrH5wB4FpXelBxak2mMbGuFnFwrLlgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDL4jfB1JWpb%2BQLiSYyrcA395mTiihE799zG%2BDRPKB1PmYSK20X6jg1BIrLwqV6mPX5EQmD4bKnJXPIMNyGSWxWTTIozraIokfBHm24MCep2PiVQGdt2eNoKuNilWdH9sPxIRqJEV5TJNbZ1t7BOJdrCG1EalkYQU8ybqjiA7B%2Bic7jsWUF5NMuORMwhN1h%2FhAafOe4iGXrs41R8hI16LjrJ8MXC57lIwWpt0V%2FjatxcSAOUYIeIqXN86GB4rqfAanBqSMWzGK3SGOf8Z8AkxOG0RnDa40t0%2Bg5IgtRIolc6gG4y8E29IdnGvRv%2BQ6GIJYZ69Q4lDdCr8f9SEf0S4EbXQOwVcAVKpQjR1W67Xl6c5hGrDTMmcbbERHgzaqqegb%2FgnQMp%2FCJYorRnRoV3SwUrk5krCi2rrejgswkMvswZsyv0OayVSASn6Rj7RW4vkX%2BJtVG1p43V%2BXYNbT1p5pPMyi7FTcOlvNRnsPDluu4mWfSFkhcodFlfy62XcK9Qggwa6Vjai5YF0WP2Z8keLParJ1Ca4bcb4uPuoDHE60l%2F3ADWRJpIrZSGsTjmovswvfNKsFvSjtDUznMJgdmzlojrBGycFtNsRjpa2MHceArmk8biaJhkxURgY4eVdzROSXSBvcz%2Bke5qLfGtuMMqAusQGOqUBL%2F613SvC%2BZq2qqBNhAB52KDJtJwQCV6bOht1vrdAH%2BJQQjt4n7O9XTjDVbYLXFif14aJmmBluroajNCi6fPjk6Py9s8ybV1e%2F3Y1giyZFvpzmqyc%2FU6%2B6cXu9vKtYeNdtDToRy8p%2BjRoVqtYHnipOBnDNag2aP5kWLHLGQGYEqk2XABQp9sQAzX3352B9pL%2FJSiREujC67BdDlBrNDyfM34XgZGB&X-Amz-Signature=8dc75df75ee6cf1e437558bc66398ea25f3e2391faa4d22e0e2efb395becf6fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD6HWTNO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuS2aLVSovvZF42eH13DsWyy5yuLfWus5bVV6nzUo1vAiEAv7dEZrpoM8aL7QrH5wB4FpXelBxak2mMbGuFnFwrLlgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDL4jfB1JWpb%2BQLiSYyrcA395mTiihE799zG%2BDRPKB1PmYSK20X6jg1BIrLwqV6mPX5EQmD4bKnJXPIMNyGSWxWTTIozraIokfBHm24MCep2PiVQGdt2eNoKuNilWdH9sPxIRqJEV5TJNbZ1t7BOJdrCG1EalkYQU8ybqjiA7B%2Bic7jsWUF5NMuORMwhN1h%2FhAafOe4iGXrs41R8hI16LjrJ8MXC57lIwWpt0V%2FjatxcSAOUYIeIqXN86GB4rqfAanBqSMWzGK3SGOf8Z8AkxOG0RnDa40t0%2Bg5IgtRIolc6gG4y8E29IdnGvRv%2BQ6GIJYZ69Q4lDdCr8f9SEf0S4EbXQOwVcAVKpQjR1W67Xl6c5hGrDTMmcbbERHgzaqqegb%2FgnQMp%2FCJYorRnRoV3SwUrk5krCi2rrejgswkMvswZsyv0OayVSASn6Rj7RW4vkX%2BJtVG1p43V%2BXYNbT1p5pPMyi7FTcOlvNRnsPDluu4mWfSFkhcodFlfy62XcK9Qggwa6Vjai5YF0WP2Z8keLParJ1Ca4bcb4uPuoDHE60l%2F3ADWRJpIrZSGsTjmovswvfNKsFvSjtDUznMJgdmzlojrBGycFtNsRjpa2MHceArmk8biaJhkxURgY4eVdzROSXSBvcz%2Bke5qLfGtuMMqAusQGOqUBL%2F613SvC%2BZq2qqBNhAB52KDJtJwQCV6bOht1vrdAH%2BJQQjt4n7O9XTjDVbYLXFif14aJmmBluroajNCi6fPjk6Py9s8ybV1e%2F3Y1giyZFvpzmqyc%2FU6%2B6cXu9vKtYeNdtDToRy8p%2BjRoVqtYHnipOBnDNag2aP5kWLHLGQGYEqk2XABQp9sQAzX3352B9pL%2FJSiREujC67BdDlBrNDyfM34XgZGB&X-Amz-Signature=26a1bf513797412437ad4e32564d730c7e30cbb019730842ddb2ba875eb434ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD6HWTNO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuS2aLVSovvZF42eH13DsWyy5yuLfWus5bVV6nzUo1vAiEAv7dEZrpoM8aL7QrH5wB4FpXelBxak2mMbGuFnFwrLlgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDL4jfB1JWpb%2BQLiSYyrcA395mTiihE799zG%2BDRPKB1PmYSK20X6jg1BIrLwqV6mPX5EQmD4bKnJXPIMNyGSWxWTTIozraIokfBHm24MCep2PiVQGdt2eNoKuNilWdH9sPxIRqJEV5TJNbZ1t7BOJdrCG1EalkYQU8ybqjiA7B%2Bic7jsWUF5NMuORMwhN1h%2FhAafOe4iGXrs41R8hI16LjrJ8MXC57lIwWpt0V%2FjatxcSAOUYIeIqXN86GB4rqfAanBqSMWzGK3SGOf8Z8AkxOG0RnDa40t0%2Bg5IgtRIolc6gG4y8E29IdnGvRv%2BQ6GIJYZ69Q4lDdCr8f9SEf0S4EbXQOwVcAVKpQjR1W67Xl6c5hGrDTMmcbbERHgzaqqegb%2FgnQMp%2FCJYorRnRoV3SwUrk5krCi2rrejgswkMvswZsyv0OayVSASn6Rj7RW4vkX%2BJtVG1p43V%2BXYNbT1p5pPMyi7FTcOlvNRnsPDluu4mWfSFkhcodFlfy62XcK9Qggwa6Vjai5YF0WP2Z8keLParJ1Ca4bcb4uPuoDHE60l%2F3ADWRJpIrZSGsTjmovswvfNKsFvSjtDUznMJgdmzlojrBGycFtNsRjpa2MHceArmk8biaJhkxURgY4eVdzROSXSBvcz%2Bke5qLfGtuMMqAusQGOqUBL%2F613SvC%2BZq2qqBNhAB52KDJtJwQCV6bOht1vrdAH%2BJQQjt4n7O9XTjDVbYLXFif14aJmmBluroajNCi6fPjk6Py9s8ybV1e%2F3Y1giyZFvpzmqyc%2FU6%2B6cXu9vKtYeNdtDToRy8p%2BjRoVqtYHnipOBnDNag2aP5kWLHLGQGYEqk2XABQp9sQAzX3352B9pL%2FJSiREujC67BdDlBrNDyfM34XgZGB&X-Amz-Signature=fbd98b22610c2cfd93d90bc413dd09b0e77407f01148943d8666b4f85d508daf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD6HWTNO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuS2aLVSovvZF42eH13DsWyy5yuLfWus5bVV6nzUo1vAiEAv7dEZrpoM8aL7QrH5wB4FpXelBxak2mMbGuFnFwrLlgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDL4jfB1JWpb%2BQLiSYyrcA395mTiihE799zG%2BDRPKB1PmYSK20X6jg1BIrLwqV6mPX5EQmD4bKnJXPIMNyGSWxWTTIozraIokfBHm24MCep2PiVQGdt2eNoKuNilWdH9sPxIRqJEV5TJNbZ1t7BOJdrCG1EalkYQU8ybqjiA7B%2Bic7jsWUF5NMuORMwhN1h%2FhAafOe4iGXrs41R8hI16LjrJ8MXC57lIwWpt0V%2FjatxcSAOUYIeIqXN86GB4rqfAanBqSMWzGK3SGOf8Z8AkxOG0RnDa40t0%2Bg5IgtRIolc6gG4y8E29IdnGvRv%2BQ6GIJYZ69Q4lDdCr8f9SEf0S4EbXQOwVcAVKpQjR1W67Xl6c5hGrDTMmcbbERHgzaqqegb%2FgnQMp%2FCJYorRnRoV3SwUrk5krCi2rrejgswkMvswZsyv0OayVSASn6Rj7RW4vkX%2BJtVG1p43V%2BXYNbT1p5pPMyi7FTcOlvNRnsPDluu4mWfSFkhcodFlfy62XcK9Qggwa6Vjai5YF0WP2Z8keLParJ1Ca4bcb4uPuoDHE60l%2F3ADWRJpIrZSGsTjmovswvfNKsFvSjtDUznMJgdmzlojrBGycFtNsRjpa2MHceArmk8biaJhkxURgY4eVdzROSXSBvcz%2Bke5qLfGtuMMqAusQGOqUBL%2F613SvC%2BZq2qqBNhAB52KDJtJwQCV6bOht1vrdAH%2BJQQjt4n7O9XTjDVbYLXFif14aJmmBluroajNCi6fPjk6Py9s8ybV1e%2F3Y1giyZFvpzmqyc%2FU6%2B6cXu9vKtYeNdtDToRy8p%2BjRoVqtYHnipOBnDNag2aP5kWLHLGQGYEqk2XABQp9sQAzX3352B9pL%2FJSiREujC67BdDlBrNDyfM34XgZGB&X-Amz-Signature=80799d0a1caeafe5439b459177ed5804dee7eaa19f074c32f14a121b4351ee4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD6HWTNO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuS2aLVSovvZF42eH13DsWyy5yuLfWus5bVV6nzUo1vAiEAv7dEZrpoM8aL7QrH5wB4FpXelBxak2mMbGuFnFwrLlgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDL4jfB1JWpb%2BQLiSYyrcA395mTiihE799zG%2BDRPKB1PmYSK20X6jg1BIrLwqV6mPX5EQmD4bKnJXPIMNyGSWxWTTIozraIokfBHm24MCep2PiVQGdt2eNoKuNilWdH9sPxIRqJEV5TJNbZ1t7BOJdrCG1EalkYQU8ybqjiA7B%2Bic7jsWUF5NMuORMwhN1h%2FhAafOe4iGXrs41R8hI16LjrJ8MXC57lIwWpt0V%2FjatxcSAOUYIeIqXN86GB4rqfAanBqSMWzGK3SGOf8Z8AkxOG0RnDa40t0%2Bg5IgtRIolc6gG4y8E29IdnGvRv%2BQ6GIJYZ69Q4lDdCr8f9SEf0S4EbXQOwVcAVKpQjR1W67Xl6c5hGrDTMmcbbERHgzaqqegb%2FgnQMp%2FCJYorRnRoV3SwUrk5krCi2rrejgswkMvswZsyv0OayVSASn6Rj7RW4vkX%2BJtVG1p43V%2BXYNbT1p5pPMyi7FTcOlvNRnsPDluu4mWfSFkhcodFlfy62XcK9Qggwa6Vjai5YF0WP2Z8keLParJ1Ca4bcb4uPuoDHE60l%2F3ADWRJpIrZSGsTjmovswvfNKsFvSjtDUznMJgdmzlojrBGycFtNsRjpa2MHceArmk8biaJhkxURgY4eVdzROSXSBvcz%2Bke5qLfGtuMMqAusQGOqUBL%2F613SvC%2BZq2qqBNhAB52KDJtJwQCV6bOht1vrdAH%2BJQQjt4n7O9XTjDVbYLXFif14aJmmBluroajNCi6fPjk6Py9s8ybV1e%2F3Y1giyZFvpzmqyc%2FU6%2B6cXu9vKtYeNdtDToRy8p%2BjRoVqtYHnipOBnDNag2aP5kWLHLGQGYEqk2XABQp9sQAzX3352B9pL%2FJSiREujC67BdDlBrNDyfM34XgZGB&X-Amz-Signature=48d21b167d986545be2533a9eb2df0d89b5ccd0a8dca50c5913861dffb4cfd51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD6HWTNO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuS2aLVSovvZF42eH13DsWyy5yuLfWus5bVV6nzUo1vAiEAv7dEZrpoM8aL7QrH5wB4FpXelBxak2mMbGuFnFwrLlgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDL4jfB1JWpb%2BQLiSYyrcA395mTiihE799zG%2BDRPKB1PmYSK20X6jg1BIrLwqV6mPX5EQmD4bKnJXPIMNyGSWxWTTIozraIokfBHm24MCep2PiVQGdt2eNoKuNilWdH9sPxIRqJEV5TJNbZ1t7BOJdrCG1EalkYQU8ybqjiA7B%2Bic7jsWUF5NMuORMwhN1h%2FhAafOe4iGXrs41R8hI16LjrJ8MXC57lIwWpt0V%2FjatxcSAOUYIeIqXN86GB4rqfAanBqSMWzGK3SGOf8Z8AkxOG0RnDa40t0%2Bg5IgtRIolc6gG4y8E29IdnGvRv%2BQ6GIJYZ69Q4lDdCr8f9SEf0S4EbXQOwVcAVKpQjR1W67Xl6c5hGrDTMmcbbERHgzaqqegb%2FgnQMp%2FCJYorRnRoV3SwUrk5krCi2rrejgswkMvswZsyv0OayVSASn6Rj7RW4vkX%2BJtVG1p43V%2BXYNbT1p5pPMyi7FTcOlvNRnsPDluu4mWfSFkhcodFlfy62XcK9Qggwa6Vjai5YF0WP2Z8keLParJ1Ca4bcb4uPuoDHE60l%2F3ADWRJpIrZSGsTjmovswvfNKsFvSjtDUznMJgdmzlojrBGycFtNsRjpa2MHceArmk8biaJhkxURgY4eVdzROSXSBvcz%2Bke5qLfGtuMMqAusQGOqUBL%2F613SvC%2BZq2qqBNhAB52KDJtJwQCV6bOht1vrdAH%2BJQQjt4n7O9XTjDVbYLXFif14aJmmBluroajNCi6fPjk6Py9s8ybV1e%2F3Y1giyZFvpzmqyc%2FU6%2B6cXu9vKtYeNdtDToRy8p%2BjRoVqtYHnipOBnDNag2aP5kWLHLGQGYEqk2XABQp9sQAzX3352B9pL%2FJSiREujC67BdDlBrNDyfM34XgZGB&X-Amz-Signature=bed8611c0ecbd0dc3b4cbac5d10fc3a24478c733580e0b5ad20430702a3cc83e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD6HWTNO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuS2aLVSovvZF42eH13DsWyy5yuLfWus5bVV6nzUo1vAiEAv7dEZrpoM8aL7QrH5wB4FpXelBxak2mMbGuFnFwrLlgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDL4jfB1JWpb%2BQLiSYyrcA395mTiihE799zG%2BDRPKB1PmYSK20X6jg1BIrLwqV6mPX5EQmD4bKnJXPIMNyGSWxWTTIozraIokfBHm24MCep2PiVQGdt2eNoKuNilWdH9sPxIRqJEV5TJNbZ1t7BOJdrCG1EalkYQU8ybqjiA7B%2Bic7jsWUF5NMuORMwhN1h%2FhAafOe4iGXrs41R8hI16LjrJ8MXC57lIwWpt0V%2FjatxcSAOUYIeIqXN86GB4rqfAanBqSMWzGK3SGOf8Z8AkxOG0RnDa40t0%2Bg5IgtRIolc6gG4y8E29IdnGvRv%2BQ6GIJYZ69Q4lDdCr8f9SEf0S4EbXQOwVcAVKpQjR1W67Xl6c5hGrDTMmcbbERHgzaqqegb%2FgnQMp%2FCJYorRnRoV3SwUrk5krCi2rrejgswkMvswZsyv0OayVSASn6Rj7RW4vkX%2BJtVG1p43V%2BXYNbT1p5pPMyi7FTcOlvNRnsPDluu4mWfSFkhcodFlfy62XcK9Qggwa6Vjai5YF0WP2Z8keLParJ1Ca4bcb4uPuoDHE60l%2F3ADWRJpIrZSGsTjmovswvfNKsFvSjtDUznMJgdmzlojrBGycFtNsRjpa2MHceArmk8biaJhkxURgY4eVdzROSXSBvcz%2Bke5qLfGtuMMqAusQGOqUBL%2F613SvC%2BZq2qqBNhAB52KDJtJwQCV6bOht1vrdAH%2BJQQjt4n7O9XTjDVbYLXFif14aJmmBluroajNCi6fPjk6Py9s8ybV1e%2F3Y1giyZFvpzmqyc%2FU6%2B6cXu9vKtYeNdtDToRy8p%2BjRoVqtYHnipOBnDNag2aP5kWLHLGQGYEqk2XABQp9sQAzX3352B9pL%2FJSiREujC67BdDlBrNDyfM34XgZGB&X-Amz-Signature=1a818b04fd314708fe5a2198d24805400a16ccc1f0cf24d5c2d46e3dc9abf069&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD6HWTNO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuS2aLVSovvZF42eH13DsWyy5yuLfWus5bVV6nzUo1vAiEAv7dEZrpoM8aL7QrH5wB4FpXelBxak2mMbGuFnFwrLlgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDL4jfB1JWpb%2BQLiSYyrcA395mTiihE799zG%2BDRPKB1PmYSK20X6jg1BIrLwqV6mPX5EQmD4bKnJXPIMNyGSWxWTTIozraIokfBHm24MCep2PiVQGdt2eNoKuNilWdH9sPxIRqJEV5TJNbZ1t7BOJdrCG1EalkYQU8ybqjiA7B%2Bic7jsWUF5NMuORMwhN1h%2FhAafOe4iGXrs41R8hI16LjrJ8MXC57lIwWpt0V%2FjatxcSAOUYIeIqXN86GB4rqfAanBqSMWzGK3SGOf8Z8AkxOG0RnDa40t0%2Bg5IgtRIolc6gG4y8E29IdnGvRv%2BQ6GIJYZ69Q4lDdCr8f9SEf0S4EbXQOwVcAVKpQjR1W67Xl6c5hGrDTMmcbbERHgzaqqegb%2FgnQMp%2FCJYorRnRoV3SwUrk5krCi2rrejgswkMvswZsyv0OayVSASn6Rj7RW4vkX%2BJtVG1p43V%2BXYNbT1p5pPMyi7FTcOlvNRnsPDluu4mWfSFkhcodFlfy62XcK9Qggwa6Vjai5YF0WP2Z8keLParJ1Ca4bcb4uPuoDHE60l%2F3ADWRJpIrZSGsTjmovswvfNKsFvSjtDUznMJgdmzlojrBGycFtNsRjpa2MHceArmk8biaJhkxURgY4eVdzROSXSBvcz%2Bke5qLfGtuMMqAusQGOqUBL%2F613SvC%2BZq2qqBNhAB52KDJtJwQCV6bOht1vrdAH%2BJQQjt4n7O9XTjDVbYLXFif14aJmmBluroajNCi6fPjk6Py9s8ybV1e%2F3Y1giyZFvpzmqyc%2FU6%2B6cXu9vKtYeNdtDToRy8p%2BjRoVqtYHnipOBnDNag2aP5kWLHLGQGYEqk2XABQp9sQAzX3352B9pL%2FJSiREujC67BdDlBrNDyfM34XgZGB&X-Amz-Signature=7584167d3154ea607e672d9db5e839c398121b79f37dba9f0875baee887a41b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD6HWTNO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuS2aLVSovvZF42eH13DsWyy5yuLfWus5bVV6nzUo1vAiEAv7dEZrpoM8aL7QrH5wB4FpXelBxak2mMbGuFnFwrLlgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDL4jfB1JWpb%2BQLiSYyrcA395mTiihE799zG%2BDRPKB1PmYSK20X6jg1BIrLwqV6mPX5EQmD4bKnJXPIMNyGSWxWTTIozraIokfBHm24MCep2PiVQGdt2eNoKuNilWdH9sPxIRqJEV5TJNbZ1t7BOJdrCG1EalkYQU8ybqjiA7B%2Bic7jsWUF5NMuORMwhN1h%2FhAafOe4iGXrs41R8hI16LjrJ8MXC57lIwWpt0V%2FjatxcSAOUYIeIqXN86GB4rqfAanBqSMWzGK3SGOf8Z8AkxOG0RnDa40t0%2Bg5IgtRIolc6gG4y8E29IdnGvRv%2BQ6GIJYZ69Q4lDdCr8f9SEf0S4EbXQOwVcAVKpQjR1W67Xl6c5hGrDTMmcbbERHgzaqqegb%2FgnQMp%2FCJYorRnRoV3SwUrk5krCi2rrejgswkMvswZsyv0OayVSASn6Rj7RW4vkX%2BJtVG1p43V%2BXYNbT1p5pPMyi7FTcOlvNRnsPDluu4mWfSFkhcodFlfy62XcK9Qggwa6Vjai5YF0WP2Z8keLParJ1Ca4bcb4uPuoDHE60l%2F3ADWRJpIrZSGsTjmovswvfNKsFvSjtDUznMJgdmzlojrBGycFtNsRjpa2MHceArmk8biaJhkxURgY4eVdzROSXSBvcz%2Bke5qLfGtuMMqAusQGOqUBL%2F613SvC%2BZq2qqBNhAB52KDJtJwQCV6bOht1vrdAH%2BJQQjt4n7O9XTjDVbYLXFif14aJmmBluroajNCi6fPjk6Py9s8ybV1e%2F3Y1giyZFvpzmqyc%2FU6%2B6cXu9vKtYeNdtDToRy8p%2BjRoVqtYHnipOBnDNag2aP5kWLHLGQGYEqk2XABQp9sQAzX3352B9pL%2FJSiREujC67BdDlBrNDyfM34XgZGB&X-Amz-Signature=daa5fd32c12ccc0762e7173160d4648fd775fe9b64388f116d592a8330fa6c55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZYMIV3G%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCadw7kvorw2V%2BUgh1y95I8pdLKiS5vr08bfOLj3i2V%2BgIhAKSzxjyp5uJQppI%2FzjmM1WeIeRcI1CZNR%2BFLhMtSX3gkKv8DCB4QABoMNjM3NDIzMTgzODA1IgziCRnERzQ58WWSDeoq3AOgCD0HKN2enuxqZWb%2F9fOo36pAOjVGa9%2FCEOubg714LQyl8m2tSkdYdfstt%2BcK6zBkpKuCeDWRZx4Z9oRki3DsVD9mG6UFaxgsNK3LzAIJcYvAzQzVBGPhXhwbn0eU1fsQjlACMv5VAt1jeOC13RSIKYButfcvwq1poF61THonwtRa5wCiWLkljxQsT4q1aw4fvOXEv0KdNFFmyti25V42dtIh1l%2FdAsc3LDVOqyTUN%2Bzp8ZFF6CHXTT%2FWmtV3gpb5W4Txu23PRcATXntBo4eyjBkHZ%2FMQtk64Ncpht6lBK%2Fos5YVEjZq6HqbHWsJi21%2F%2FIs8FD8h98OwTDNk%2F6vg7t5g5Gyp7gx%2Fcs9fnWpjPzdJGzVkBQLjpxBpzSXuKyNXGAwEIpN1puwcCrMaGR%2FHsDA7cPXEOYM1OEOAE98at9mMmSO5U%2BZKdZ25hpVHyzHHjw9tu5oKozwLh5tGmF5%2FdxnQHDI7gHOxMp81XNwTXFgYqVcCqQ3NNLLWoOzyN%2F50RcCuyXaPN2M6FQAKOQBw4%2Bt1016RF0AU4fUcDjtqnJbsCSeS%2BTyUNkQX%2BFKdncErf4bqp%2BiBR5Aip6ow98mCt%2BHVC6RhJ9MCLaCxzxwn4QLEzO1SPuhH2uZlvHDDxgLrEBjqkAVQuxtBafpz6yC1EutEOucTT3TwnXZl3DkmrFv29nMXFEc9lx%2FzyQPKtuOOBHSCNUAOhop%2B2Bwwx0mYAqz%2Ba6x%2F0M3lcTTYygR%2FxXpUSXo%2BoCA0p43Gbv48gu%2FRDFAw4%2BSfX%2Bfhtv9cIJi%2B1%2BluVLOvuKsi0RTEpEcPpcaTPmYUVG46qC7MhDlVa%2BiR6%2F0HjgeLpPgFIsW5LA9oiS%2BVASOYBYZ6R&X-Amz-Signature=be2778be6d2b926874313b3e3850a6fd6684eaba1e42e09c166503b5318d09a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ3TOK3Z%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiijdzXXt5AhEngKDN1XhlU7buzPmrllfwpY6D%2BI1fEwIhANXZTtE22ZffBzasvcf1D2C0cWMlAqqfTNXyKto%2FWtNMKv8DCB4QABoMNjM3NDIzMTgzODA1Igx6xI6Vk8NUCg7tBsoq3AOM7t3ZC0PsEO9n%2B9xhJXnQReEDCu1P67TzXT9HnfHCnkJh2WmXcYVuucYQH4wGe6Qcl3kyd3WkaZq%2BJUV3IYdGC3V9u014YTkxx8GUQ9cEAoSPjbkPK%2FnjhOz6fEWqbncW35GVDjXCG9hlCbJJeu4aN1Ahc9F87chXACwLgzObBT4jRiclbRNsMgmT5a2C7lVxaml5ar9%2BHPcDNovKtEwSLQT1E91BiBBnM1ZJbAO1%2BwnhXZEIvw8or%2BavLCEN0tRO%2B2CHBGYDDAFhlLzIZo2dEIg4Ftr50pRNGwKOOwomJU%2F2ghMKDJm9g3oLb2uI8bNtOTasyV7nkEcisxR1UTocqWtwrws67AJhD%2BPqHlI%2FPo0ppepUudfts4lFPsJ9wMCUZcq0BcKv4u9SAlV%2Fp%2FkZI2J22KtWw9cDdzIdxkcUuVwfTjNh0QNlQhdbXYoKybx7SexHeJjJOxryPoKpZIcHTjmkKPmBRlUw3QcSeD7tmA6%2FB%2FsMaXvM0LveBkkGCAn14zNVWjmM4BQ0tleTGsWoGhAWVAdk%2BVfojLUcjpcBe%2BKoI%2FWsnygO3HLGt0659lv4D2HPj9zyckSXEIFAPqylaE9z0WIN0Y%2Fi6eSABmRVJO0er9kYcceY%2BR8xMDDzgLrEBjqkAfJKOdXo8YBKgtlKnDdRtpwsbZ%2FwYg4UuS11RhJPCQZETlIzoyQD8Y7tgNgY1eTs%2BCtvDxhDBtr7T8x82atGNrIhlONMLMZR4SbAruavLnt%2FAD9QMpKelhudVO%2Fl4V44YcAGjYZUlO1F4UN7mEA4B7B9oO6OkFxKVz%2FGiM%2BA%2FAMXSU1zaUaNux7HMcyixlpobpfgGPbPlTS6PKXjqyyOGLhko0nK&X-Amz-Signature=d4d6be12431c3efebd5959e0296b3bdf09aa0e2399206125db383cad49a41359&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TLXKXKY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQB8bwkt3a65Ke%2BuH6xTxOa5xo0pRHiUM0U1mQm50sQgIhAPZcVpEfq5zXQGmoZE29Cnm7YNKlBKJSYofI0KIo%2BJ12Kv8DCB4QABoMNjM3NDIzMTgzODA1Igw298dCMsYIB0LaENcq3APKr5psA4xfiNbFpUirQbpTAZiE2LKMSWzr0GQyV5D76I6hWSbn%2FVjkPFlvi5fYgL7AMQK%2BkpchK94iZWAupEfMD1Vn7FR0k3M9T4FAJxv53q2b%2F9v5BgMnSISj2UCSYzrDFAmsnzj7dQNIrsWgo5RNB53qk3XuUyB16nqVR4tZBce05fk10vl51z1HeszGcZWalcgibNOHjxiWt9FhGdY7IlrdGB2pMxHdT%2B1iYhaTC1Cm6M6JLzBMTYANKoFeOASg4myafW2reUoekqWO%2BC%2B4ucqwYgnIxldNGeL1kBsckbpGL9%2F6KW%2BA9MTQu27IKPWTeD82Qt12s%2B83%2B80swIvctmH3ZTnbqpj3Ma8pSDo%2FUvv4SSvKluH2loIOqgmjDaWDSjL0a2qfglgG5uRKlLC82oYg4Jq5y4bc9mlWskSbIlDvLWgTX1N4kjqpGq6IsUCt%2B2aF4rqiw2v%2BCVqc0QfPgB3Smv78%2FQju3RlLvRbQMEy4NpB9a711YwOLZsbq3knaAppgYEwVTflb5Klku7t6BTHuAnV4xNZoD0fSVsBvWjkR%2FCk24q%2FnO0dPPd0oj8lZy1e3%2FV5Ld5SXNm6bxoALCUDYQoxNYrc8JtmvdMKfEa%2Bpog%2BQvt5JCtXgVjDigLrEBjqkASUTNQFe14xHP4Qs0WEQyyf6PfNfzjijXUavD%2BNTDTxa9QAen7VJWfZ3%2FbZs6wk5v%2B3oMWCxGEn7hdOhycECWB8chX92RFcwjfH8YrD%2Fh09%2BmQRaWrw1%2F%2BHtSeSikkeuJj0fqvkpKc9xReDa3nhSCm%2FfTE742E1JiMKuhQsfPhqXoUUWxhJ8tvmdPO7aopNZfEZPJ26vt0jfW0w8Wi4vsWuSibAG&X-Amz-Signature=feadf5d052e6089c87ddc18080b75b6c5ed92a683a15b1db76afc9328a7bdde8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD6HWTNO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuS2aLVSovvZF42eH13DsWyy5yuLfWus5bVV6nzUo1vAiEAv7dEZrpoM8aL7QrH5wB4FpXelBxak2mMbGuFnFwrLlgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDL4jfB1JWpb%2BQLiSYyrcA395mTiihE799zG%2BDRPKB1PmYSK20X6jg1BIrLwqV6mPX5EQmD4bKnJXPIMNyGSWxWTTIozraIokfBHm24MCep2PiVQGdt2eNoKuNilWdH9sPxIRqJEV5TJNbZ1t7BOJdrCG1EalkYQU8ybqjiA7B%2Bic7jsWUF5NMuORMwhN1h%2FhAafOe4iGXrs41R8hI16LjrJ8MXC57lIwWpt0V%2FjatxcSAOUYIeIqXN86GB4rqfAanBqSMWzGK3SGOf8Z8AkxOG0RnDa40t0%2Bg5IgtRIolc6gG4y8E29IdnGvRv%2BQ6GIJYZ69Q4lDdCr8f9SEf0S4EbXQOwVcAVKpQjR1W67Xl6c5hGrDTMmcbbERHgzaqqegb%2FgnQMp%2FCJYorRnRoV3SwUrk5krCi2rrejgswkMvswZsyv0OayVSASn6Rj7RW4vkX%2BJtVG1p43V%2BXYNbT1p5pPMyi7FTcOlvNRnsPDluu4mWfSFkhcodFlfy62XcK9Qggwa6Vjai5YF0WP2Z8keLParJ1Ca4bcb4uPuoDHE60l%2F3ADWRJpIrZSGsTjmovswvfNKsFvSjtDUznMJgdmzlojrBGycFtNsRjpa2MHceArmk8biaJhkxURgY4eVdzROSXSBvcz%2Bke5qLfGtuMMqAusQGOqUBL%2F613SvC%2BZq2qqBNhAB52KDJtJwQCV6bOht1vrdAH%2BJQQjt4n7O9XTjDVbYLXFif14aJmmBluroajNCi6fPjk6Py9s8ybV1e%2F3Y1giyZFvpzmqyc%2FU6%2B6cXu9vKtYeNdtDToRy8p%2BjRoVqtYHnipOBnDNag2aP5kWLHLGQGYEqk2XABQp9sQAzX3352B9pL%2FJSiREujC67BdDlBrNDyfM34XgZGB&X-Amz-Signature=f1c77d9b28cd0d741711cec9f13c5f9fe0f48431e4fc867c1327f5cca8835901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVUBNO3F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENPoqcSa7vB4e52e2fkLdguczChpttPOFxBcGVrY1XLAiEAlFG8WwkXjrb9zzrFiZcF3ZdEzNMQJ0vBtZZ%2BFh29Bswq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDAeZIfAz5FQJYK5tTCrcA5Gyj9SZS0Ll62ejhAzUC2JGnj1GcFrKVYNvUF%2BcSNDEt1ZDqXYT9w3S0jGXUOR%2B%2FshKEES9yJ%2F7ulgd95I40IRGj%2Fe5xGqQchYh8J3m0UOR0A2H8%2Bm%2BXmhEEHG2xgfVb2v662uUiGT7CDdKf%2BCwzFNIIGGF4B8Rda1RdOukHyiq%2F6SEOouYzIlBzNvls9vo3jempuGzFlZzXuC4FgpgJD1kA%2FPSGhD%2Bvszow11rP1aAL3%2Fl2wRlO3RkVmlxOmvK5cYaNLh4jwWQWZGR830rIAWKDcX9ZgSDWRevS%2Bpve4wljzXBCo8qGb0VRPvEikUm%2FOzdLM0AQT9y3LNwYmp9790s5uEadXeBOthqwWH3dfTMZ5gzCN8QDgcVf9fBA773OnEAkVlvyuYHWo%2FL9bBCAN78ry%2BQfxShU7nqcviDpnLZMtKyS%2ByJPXcd3tctLOxDblSnWIP0q6SsZmoK89l7BUv5Km0UYwVMU9R%2BAxw28%2BryPWYfJtaQfoj0yRQ9p0SXvGSsrGXCfhC6aR%2FJHixEA5FdmURLjzcM0oalfWM9fYaucuvoAecmOfPQyB0XngZJIiEDiZFSC8d3P38szbrI83lsE41u5BE8CknxnFUgDUoUt5D11z%2F%2FOfoDG2LgMPGAusQGOqUBzfLaY9um5KvV8cTAa8iAwdLWSpHgeVE%2F8g419nVlHijAgKGO4FxoihF8smFxdu1MppDxmvzT1JJdStXlNaWC0XFssJOmGGE%2BLfXbSoBLn26OXEInY%2BulQKKD%2BcJnr48eyg86qvEtG%2BUMiFONhNdXir37npvYD%2B%2BsyYwxFV45JoyByP%2BpU02N8CppFRlhi6%2F7y0vNNiuWvtLLgcFJAfLMdN5J0OCf&X-Amz-Signature=e989a921e354418d978b02e069a64a5134b6b38e34eca8ae6000ad6d0e1d1627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD6HWTNO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuS2aLVSovvZF42eH13DsWyy5yuLfWus5bVV6nzUo1vAiEAv7dEZrpoM8aL7QrH5wB4FpXelBxak2mMbGuFnFwrLlgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDL4jfB1JWpb%2BQLiSYyrcA395mTiihE799zG%2BDRPKB1PmYSK20X6jg1BIrLwqV6mPX5EQmD4bKnJXPIMNyGSWxWTTIozraIokfBHm24MCep2PiVQGdt2eNoKuNilWdH9sPxIRqJEV5TJNbZ1t7BOJdrCG1EalkYQU8ybqjiA7B%2Bic7jsWUF5NMuORMwhN1h%2FhAafOe4iGXrs41R8hI16LjrJ8MXC57lIwWpt0V%2FjatxcSAOUYIeIqXN86GB4rqfAanBqSMWzGK3SGOf8Z8AkxOG0RnDa40t0%2Bg5IgtRIolc6gG4y8E29IdnGvRv%2BQ6GIJYZ69Q4lDdCr8f9SEf0S4EbXQOwVcAVKpQjR1W67Xl6c5hGrDTMmcbbERHgzaqqegb%2FgnQMp%2FCJYorRnRoV3SwUrk5krCi2rrejgswkMvswZsyv0OayVSASn6Rj7RW4vkX%2BJtVG1p43V%2BXYNbT1p5pPMyi7FTcOlvNRnsPDluu4mWfSFkhcodFlfy62XcK9Qggwa6Vjai5YF0WP2Z8keLParJ1Ca4bcb4uPuoDHE60l%2F3ADWRJpIrZSGsTjmovswvfNKsFvSjtDUznMJgdmzlojrBGycFtNsRjpa2MHceArmk8biaJhkxURgY4eVdzROSXSBvcz%2Bke5qLfGtuMMqAusQGOqUBL%2F613SvC%2BZq2qqBNhAB52KDJtJwQCV6bOht1vrdAH%2BJQQjt4n7O9XTjDVbYLXFif14aJmmBluroajNCi6fPjk6Py9s8ybV1e%2F3Y1giyZFvpzmqyc%2FU6%2B6cXu9vKtYeNdtDToRy8p%2BjRoVqtYHnipOBnDNag2aP5kWLHLGQGYEqk2XABQp9sQAzX3352B9pL%2FJSiREujC67BdDlBrNDyfM34XgZGB&X-Amz-Signature=29450ec37ed3a9e2022de8ea56f4798636891964fefb111970773b4f62c3ba75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NYGRUJZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAF8G6zyyT3lEkoZ87s%2F%2FW1PQKZfBHKdbcxMfccPg%2F%2FLAiAii2jxH9TJAcCE7fYk4JlRUYRsgjU6s5gE6PdRuGdLYCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM%2BK%2BAFKc8gUsJqnAPKtwDpbkZUm%2F66Ly3nXhteFhwNFM6xSuVZItwU1vRfzN%2FNgrb7zfITbN8U0HjeMQzmTGK1v84BT6gu%2FivKeYuUP8xjrjItX7tx%2BsC%2BNuObH2kS8S6NM1j%2BGJguNk74aSW%2FX8mN3SSS3d5KC%2BhxamAbSna68kAlCiXitctH0T5z87cHzsz4NPJOWQmcEtvvILybqbceDdTh9sjYmVxXusonzDAJADQWMAyR70LWkIwv0Wm4%2Brhl%2Fxf5ewtETFvEOCeIloz35SqilWHzgjTEnfke58IZMhq7kTvfn5nxYWbXMUTC9em018KyC655FcQtsnIGv74%2BSQ7DBLy3YtUcVYHD1lc3al2TYdR5b07nMdh1SC5YFdewPpXlJUCifP4ABY0%2FGsNGQQkbe%2BVWWtR1jzqNEoWTseeOqwrmTuyggWwgcg%2FnORe7pfTDps50rTVkuSs%2BON%2BkMrBi4jencLLRgIVAiQwnS7EdMQZxV5ier4iArb5fAaYHAZT3JGKfmV3hdid519kDMmpTSOBlPYTds2zGIkJPyJZwH%2BdYXJWZU5%2F1ux2pwXBDUJ%2Fc%2FGLFwgeG1igNhVdGYbwSz8kbXidSewvaVllXjeCqTvIV7OekPLxTBBstFsDQQ42pO6A%2BX3MVUkw4oC6xAY6pgHvRhLC1HeaxGIhqL44%2FQK%2F1GccHzNwzMauKS295tFUXvgdo5iqu3YRIh1FAMJ0KTR%2BAHqRueXtylhO2DTuf6%2F2lMiVccbDYb5BNBmNRGwBr6nPHEnzOmMSaJRQlO6Pe7Dm0EHFnCC3tvsoYU9g6uVC4PupBDKxDSvrw7TGW2rcy2RE8QG%2FdFGhrVhBgMo9fyknfyUVcYUNUXGUdBRe450AOK9B6a51&X-Amz-Signature=fe549d232786c8a3d83ae6a3293e7b607cd0660e75f336534f8e80793bc5932c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD6HWTNO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuS2aLVSovvZF42eH13DsWyy5yuLfWus5bVV6nzUo1vAiEAv7dEZrpoM8aL7QrH5wB4FpXelBxak2mMbGuFnFwrLlgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDL4jfB1JWpb%2BQLiSYyrcA395mTiihE799zG%2BDRPKB1PmYSK20X6jg1BIrLwqV6mPX5EQmD4bKnJXPIMNyGSWxWTTIozraIokfBHm24MCep2PiVQGdt2eNoKuNilWdH9sPxIRqJEV5TJNbZ1t7BOJdrCG1EalkYQU8ybqjiA7B%2Bic7jsWUF5NMuORMwhN1h%2FhAafOe4iGXrs41R8hI16LjrJ8MXC57lIwWpt0V%2FjatxcSAOUYIeIqXN86GB4rqfAanBqSMWzGK3SGOf8Z8AkxOG0RnDa40t0%2Bg5IgtRIolc6gG4y8E29IdnGvRv%2BQ6GIJYZ69Q4lDdCr8f9SEf0S4EbXQOwVcAVKpQjR1W67Xl6c5hGrDTMmcbbERHgzaqqegb%2FgnQMp%2FCJYorRnRoV3SwUrk5krCi2rrejgswkMvswZsyv0OayVSASn6Rj7RW4vkX%2BJtVG1p43V%2BXYNbT1p5pPMyi7FTcOlvNRnsPDluu4mWfSFkhcodFlfy62XcK9Qggwa6Vjai5YF0WP2Z8keLParJ1Ca4bcb4uPuoDHE60l%2F3ADWRJpIrZSGsTjmovswvfNKsFvSjtDUznMJgdmzlojrBGycFtNsRjpa2MHceArmk8biaJhkxURgY4eVdzROSXSBvcz%2Bke5qLfGtuMMqAusQGOqUBL%2F613SvC%2BZq2qqBNhAB52KDJtJwQCV6bOht1vrdAH%2BJQQjt4n7O9XTjDVbYLXFif14aJmmBluroajNCi6fPjk6Py9s8ybV1e%2F3Y1giyZFvpzmqyc%2FU6%2B6cXu9vKtYeNdtDToRy8p%2BjRoVqtYHnipOBnDNag2aP5kWLHLGQGYEqk2XABQp9sQAzX3352B9pL%2FJSiREujC67BdDlBrNDyfM34XgZGB&X-Amz-Signature=203a1a37c26d668404b13bd250a91bb70fcf9428f9fcecf4682ac3221d6e35c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDC5AT3I%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByyjB97qGvs4N5U9WY6RBLIoIANJUCHaj4fEjp363vYAiEAzKf17NVzRR8mC3dcgpOmjr4EU0qaUImI0byCGJ9uss8q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDDKq4TbstRHk25c0iCrcA%2BREOra9exe%2BW7HYu9qwmmygHHSbqkyZT6ljn7aZrLBTDpXyEQbSbpKvOv8fx3ON%2FSd%2BIeYVs19HSsOea2UbjBAdBy2k9VAbtVIHEilrtGYJLZB2W0A3E81WyLYK1qQT6nsigGsWjVkya2kx9IquWjkXp79ZuYURCfh5uIqFL0AQw%2Bahp02aO4%2Bny2ojw0I1kDLO5NOwpO4dWn1cRUlMKLc7svJySsTYkftYOEEaIntQ2r6fAZe1aMh%2FiPh9tp0Lim3m1artsXn5dvotL8tzk3FIYDSGQlZlRu6PO4vryYUFfzfvWeQ%2BWvc2s5Os5UetSl6jY6mSLcBmEDfNG0QazmcaJMxTz8YEo1%2Bx8PMsGy404fWl8Iamhyevc0gmG2QZZqM0EBVr5dQpkTjZFhnDL5PuBKG3lQeukZjgkcoIThxOWZPx3lUMaORgk1sop5w3Cxi159E0%2FFcNg3oLUeXuz1eOd7qhkQ99sz%2F8PI%2Bkn4w0%2FMDSI%2BsfoOuHdI3sFK5v7D88ILHcSkSwn8Rd5xUbn3X1BTNktb43vjJG3ua%2B061%2F%2FHZ9yzSBC%2BfmXUgaY%2B6jUUkIJ51M8pZOt%2FZ6mUD7JuHcGO%2Fa4YPvGeGZhs7xhTHTZHNOaUe9YUFL6%2Fm1MPyAusQGOqUB5w%2BCyq%2BC0C1COs%2F8T5KtQWpnqOY0Njb%2FE3vjXS8Sjy%2FJvyI%2FjOzHe92Y0%2BQBDAYEXCNNMEXcJjM2TL96qAcRhoCbPPvv%2BBBINQ482tWmS2boB8LGyKUnRpivAbtn62JwCK4RctcfH9FhqNqYzrhdGJR09KUYpOMVWglb1s%2BwpqyuZYTzLClXgpEh9FGvEu%2BMXkd3AYZgMsz9DbN%2FElx%2BMgbbHkHd&X-Amz-Signature=c271e81491c14b744317dbe7fa9690008a4976f6da80e2a4ae1245ff34853d44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD6HWTNO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuS2aLVSovvZF42eH13DsWyy5yuLfWus5bVV6nzUo1vAiEAv7dEZrpoM8aL7QrH5wB4FpXelBxak2mMbGuFnFwrLlgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDL4jfB1JWpb%2BQLiSYyrcA395mTiihE799zG%2BDRPKB1PmYSK20X6jg1BIrLwqV6mPX5EQmD4bKnJXPIMNyGSWxWTTIozraIokfBHm24MCep2PiVQGdt2eNoKuNilWdH9sPxIRqJEV5TJNbZ1t7BOJdrCG1EalkYQU8ybqjiA7B%2Bic7jsWUF5NMuORMwhN1h%2FhAafOe4iGXrs41R8hI16LjrJ8MXC57lIwWpt0V%2FjatxcSAOUYIeIqXN86GB4rqfAanBqSMWzGK3SGOf8Z8AkxOG0RnDa40t0%2Bg5IgtRIolc6gG4y8E29IdnGvRv%2BQ6GIJYZ69Q4lDdCr8f9SEf0S4EbXQOwVcAVKpQjR1W67Xl6c5hGrDTMmcbbERHgzaqqegb%2FgnQMp%2FCJYorRnRoV3SwUrk5krCi2rrejgswkMvswZsyv0OayVSASn6Rj7RW4vkX%2BJtVG1p43V%2BXYNbT1p5pPMyi7FTcOlvNRnsPDluu4mWfSFkhcodFlfy62XcK9Qggwa6Vjai5YF0WP2Z8keLParJ1Ca4bcb4uPuoDHE60l%2F3ADWRJpIrZSGsTjmovswvfNKsFvSjtDUznMJgdmzlojrBGycFtNsRjpa2MHceArmk8biaJhkxURgY4eVdzROSXSBvcz%2Bke5qLfGtuMMqAusQGOqUBL%2F613SvC%2BZq2qqBNhAB52KDJtJwQCV6bOht1vrdAH%2BJQQjt4n7O9XTjDVbYLXFif14aJmmBluroajNCi6fPjk6Py9s8ybV1e%2F3Y1giyZFvpzmqyc%2FU6%2B6cXu9vKtYeNdtDToRy8p%2BjRoVqtYHnipOBnDNag2aP5kWLHLGQGYEqk2XABQp9sQAzX3352B9pL%2FJSiREujC67BdDlBrNDyfM34XgZGB&X-Amz-Signature=7e55e94aec8d6d23825df4e59deac06ef1bf3b9468e4db373c252e507c483c73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEYMYJDO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvrey3n5%2BSoXx9gy9D6epsxRD6GLceM3J%2B8K4uf5A28AiBTldXWpJ3i86yfAYf9v%2FLz8X1K25ub4BuaejYmDwnDkCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM36a2yeh043xazXFWKtwDzIWvQnuMSZ5tjswLWOtCw8nnN%2FDKPHU%2F8gwLABAKQ%2BjlWTeL%2Fg7TFQBwONfns22kDdUKsFnwmx6vU4yl%2Btnq97L0NzOrIGibqpKXfXWZjsYzFeCwOO0uMdoGdKmf0rgnbb1l%2FTYHUuN2Rp1jorBzX55ybWpqiBKBvXx74gELMol9o8E%2BFpDOh%2F3lp9Va38VNN6oDspxIX11I2eAIxvfZKvYwu3Hyi1ztWpdeYbCA97tWhWjQUhon%2Bv%2FoAZORKJlP8C4bkmcQaeOVitV3CLO2ZwlfdF7Gzjs5DqxPMAh%2BAResYl12PTSH5kS7CM6ssymjN53yNRghptfHlAUpNSV%2BUmoKCGb3FEHt1lGPFYftrBRTRMintgN0H6WNdzJzL5jCHoJyUXWvfy64IjSdfP3BL6itzxwy%2FN935v4%2FcHajfphS%2Fjv4ujFjij3b5G%2BdZqza7j2WYE29lQHP3thdsduMXcb9j5X3CvZ6AjSUvp3fOt84SBW2Mz7xlpXguQxuVxHoxAgmXcDBbBpizcXa%2BKS7go5JJPVKRS9YkF%2BHihheJ6dxY9K%2FjDEx9zOt%2FodghY3ak%2FCQ1Xlmad4zQPmVdPF%2BzsUFqPS%2B8bRTJn0axn7R6pazEP%2BqILOgZyzwDx0wnIC6xAY6pgHmeqaLi2oCTCsf3FF1ZYbSv4GPGWRvCqmFeTYRRICGdR%2F84qlrhV3FXIb5urysxDUtzh66JYKj62Nc3ROmitt4PbmZhrKzEcDi1VKil0U0t6%2BX9EUjmrRzQ94iNGvyTy%2FhSXVDN1RrD4ozurggbIqqo3QUEZpihd4ZCOcOTxY9FspkYGhIWT1tVeuKF6y6kKSYvtwtyZnjwT3O8v1%2BjzYifxTe98ye&X-Amz-Signature=23c83be1ac5f05df42792dbe4b023872b05da56ef295e0560a4cd5c406bcb463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DI2ND3T%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmOh%2BPjjC8LXA4riITp4KyT0%2B%2BwzP%2BWs87P41FPdGReAIhAJKyNuOFuvZYVY8tXMJTjgRfOHoBJ1cVAvBRu7zpaoKIKv8DCB4QABoMNjM3NDIzMTgzODA1IgyzIn%2FfJzLVNSJOkP0q3ANsxZik0T4kTNaWkr%2F8GLjZzfPuTIokh4TOoYCogVsMAuXOM6ISPzg2Nd1Dhqt45DXF5nY9WPJNHlYY1NNpkv60TSDXiZWTeul6RreC3xRVLxWmi%2BFicCMAhZ3QcB2xmZdJo%2FHX5aBHws8BrslqmY3ueQ2VwGO%2FqDQivycobXgH8UJyIDxR3B6tGAkLk4LtYAsPmAm06270wyPN7dSat%2Bi0aMCF1wvJjZAVYMVvXzB9SxM5SWz0HwepI9MtZxaXqYyoHZYs79Ih1FLKnl9JR8GGWnFxO1NI7DAy1Z5jZ2Q414KPinDGI3kLoDS59i%2FRGwglOP1OHBnCCT0HlLHzo0jzddodwVIRA22Gdj4iNjlDfvrcV2id%2B6gIIA6OkzWDme1cSNkX9Sron%2BoFSEEDzRksJ4wQOrmoRVZMtUXViEFkjBwso4L0TXABnWcXe8CZYQRsw9O5PiFXtyTJDcUA1ZV1djPAgpqwLF7aL%2FmQ65taieEXJ0wV%2BRvEM97vF%2FsH6xhXY6TNWprqh85vk1In7lxEmxmDv8QrbWnp1uN60mdUa8d2zacS5SxjFeAV3Yu6BgqnB%2BQpsEfVn78mFus%2F02qDC1faGeINoD8dGeUQA37DIEkBVx7Qxba2TN0%2B1zCsgLrEBjqkAdvxJFGpWi%2BS9CGvRMKk7hBs8oKcb9fqEj4nXsAuBhM3nVO4IF%2BIBS9zHCc7hRASBzt4z%2BCPblZHu%2Bx3xbfAS8zRzIx%2F9snWQWTHiHszDeMTyUiBmosp5Km6CA8YrOEez09BdfNke5bXjFJW723POVViwjZDgueDOGAMps8p2yx7cqLnqPbsbS4B3skbsjKLaRCmHaTMH5Cx6Opq9HNOVaWLWWQ%2B&X-Amz-Signature=96ba63c9919a4050de0e47ceae26dd4b2110a902d430c48d88604229feb4ddfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWVDGKSK%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T231000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvD2L22mScUpUyFSoYQprKiUto%2FxFWHrQojYF%2Fk1Vj6AiAlhevL1d7rahpl7DlCcOrVuTmhFn7l5LrIWGQRk6%2BaCir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMYM%2FrhiPyw8hir9nxKtwDuGilUt2KAS2KWUUpENNzxAH6FAq4LcLDhohOlZgGFOQIE7qpcg5BJNlLb2kepxc%2Bz3rn%2BvB9OV%2BNPKCfN1FPNbfobwqsR3giZ8INKVUkcabUWL0U19QHVaGzV%2FC5K%2FyeUyqhA765mDWLvB1IxW%2Bd3GZD%2BHKA4h0h1lsO5keNWFCbFWefXJPRSb0yKh1NZrwQxmL%2FcF8HOEShzyJH2J7%2FtoFADT5g%2Fs4sxK5lKn5pJi7%2FboSSrHcv9ofVnbztVK5P2Al8htmTGo1YIEc5aJWZLfErfeGzPaCrj4RgkuAiVfQp7hXqt8%2Br49dW0RpoAqa3YF5wWhLSoA4g7nXYWO5Su5U4%2B725G8yLOJ%2FfdRJJA60Zrw1GMxYDfZKO%2Fl7FX4WnbkE%2BOzceC4MO7ij%2BgRjNKO3mHB1TmKY6ZFwREOQmh1rCjDmQTW3w0OhtVaeSonHLSFmqMVJX1Ihhi714hADcQaQRmzrTAFfX%2B%2BkS1osuZxWxfrZvjfIaVeNv55THIdEjfZSIchJLeJGLt9lS26TVuo6L9hBdWIHGWoEquypUBoyzKHDBNsbS6wZCO%2BUXwvee5ldWQ2FBPWHQ8l3oA%2FHl8mHfF1N9GBqVPuzzvtM0GsUhVdc24fgv6MJ9xJcwqoG6xAY6pgH8pSDif0VFs2fvbmQcPa2%2B3YBcV2q5XjNpkDpL05F5UKECJPhGaZdZ7Q29lDZ7DtbSEn0eY23lwIQ9q2RqthCXbseRFbNKuuxc3tHfhEnqSXSKiiJnqr3VTvvif9b9Hor1WuffDiWW1pYWlBEm3M0GSQhjKNj2yYjqFgeu%2BbbN536phteuyt%2B8pE7v8PfTLZWggnbeIi%2FgcCitT%2BpM7ibTwrz%2F4Dzl&X-Amz-Signature=0f691c38d60a1f8706155ffc0158222847c4c83e8c88389b26f0f522b6acef79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ3TOK3Z%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T231002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiijdzXXt5AhEngKDN1XhlU7buzPmrllfwpY6D%2BI1fEwIhANXZTtE22ZffBzasvcf1D2C0cWMlAqqfTNXyKto%2FWtNMKv8DCB4QABoMNjM3NDIzMTgzODA1Igx6xI6Vk8NUCg7tBsoq3AOM7t3ZC0PsEO9n%2B9xhJXnQReEDCu1P67TzXT9HnfHCnkJh2WmXcYVuucYQH4wGe6Qcl3kyd3WkaZq%2BJUV3IYdGC3V9u014YTkxx8GUQ9cEAoSPjbkPK%2FnjhOz6fEWqbncW35GVDjXCG9hlCbJJeu4aN1Ahc9F87chXACwLgzObBT4jRiclbRNsMgmT5a2C7lVxaml5ar9%2BHPcDNovKtEwSLQT1E91BiBBnM1ZJbAO1%2BwnhXZEIvw8or%2BavLCEN0tRO%2B2CHBGYDDAFhlLzIZo2dEIg4Ftr50pRNGwKOOwomJU%2F2ghMKDJm9g3oLb2uI8bNtOTasyV7nkEcisxR1UTocqWtwrws67AJhD%2BPqHlI%2FPo0ppepUudfts4lFPsJ9wMCUZcq0BcKv4u9SAlV%2Fp%2FkZI2J22KtWw9cDdzIdxkcUuVwfTjNh0QNlQhdbXYoKybx7SexHeJjJOxryPoKpZIcHTjmkKPmBRlUw3QcSeD7tmA6%2FB%2FsMaXvM0LveBkkGCAn14zNVWjmM4BQ0tleTGsWoGhAWVAdk%2BVfojLUcjpcBe%2BKoI%2FWsnygO3HLGt0659lv4D2HPj9zyckSXEIFAPqylaE9z0WIN0Y%2Fi6eSABmRVJO0er9kYcceY%2BR8xMDDzgLrEBjqkAfJKOdXo8YBKgtlKnDdRtpwsbZ%2FwYg4UuS11RhJPCQZETlIzoyQD8Y7tgNgY1eTs%2BCtvDxhDBtr7T8x82atGNrIhlONMLMZR4SbAruavLnt%2FAD9QMpKelhudVO%2Fl4V44YcAGjYZUlO1F4UN7mEA4B7B9oO6OkFxKVz%2FGiM%2BA%2FAMXSU1zaUaNux7HMcyixlpobpfgGPbPlTS6PKXjqyyOGLhko0nK&X-Amz-Signature=ec29b145c57a3942c10fdb65ef14887500b9f78b26c1377bb0538e2a63b44319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBOYR4RG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKJDYjlfH9vNDeU2bGhNGt65nv9zkJxK5JLXhAFO3OeAiBinzNs80wkm%2FGyw27w0I6MN5DDmaqVKKn%2BfpqOSgbWrCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMoN7AbdB%2FMJS%2BQdwMKtwDy7SJIs7QbZBghG%2B1MC00XriWmVAVomnZimBDfNzDZxsKJXKWMBlXBvXYB80SBQSJVtQH1a1p2VEZkEqNgyxOP9iXXsyeXg8i8lTNSVm4%2F8iqE2xp3mfa0BpAjOM%2BP51Ld0UVFkYK%2BNLk%2FpIj1Nr1DxK5fund%2Fond3JnEcLPttmLWXLvBaf3KkqXDZ8MCVGxiwKmKlqXshOGsWUzuzcUOScFM3DJ9u3wWN2A2wtLjXJnr3VpvAv4rdZGiChZrAYk6pLduhXYQHs0xGXGk9WaKhvOLEo7tsvRVNzfCAdkyKuDXXkqVGJ3I3Yt4VtAElTRmEER%2BrKnaUuQXlCLPg19XyPgPd6kmgeKzdHQoS5KDgd73RXLXHfXmZtvwwivxl3CMIxUO3Nr6HtDEJ8c3nMuXouRHbkV0QEHwTDghNuDacrmRsude1FHFFhE9QvA%2BT5GRoizRwvuWcSCAgn9tjS1hQJJsARkVbotxoUAuf1%2B0ag4PhpUzilmjgOfRI3kVop4eNsEpfLamJWYTUPG%2FCrJMRDWX6bwyRZe46PREAPiEAxDfsu85B3DOqSS4wnsLxlTxOO8reghnL%2FQS6fQlUUqELZG0m5mIGauwuw1rEv6JAxLS0hJ2eRCsSdHtGNswioG6xAY6pgFXmXTJMMoG7KFpyzxQSdhkh7Y1SlzP1cB9qojhUypEuRgeEgQf9gjaDNA5ZE0AHZucR7GqUysqmGY%2FrG5we4LQ752FGOLHM5yd9zgB7m65LAbi%2F8BKZ8z1JjwQYvuBRkqhHaVD%2FVgBE3Djd5FBZYl3CqMRnBi6gR7jEzi6oxULyx0c10bE4SMC6ZhAsC2USgh4WigWrqS5rx2JjNzIMj7wVal2ZLWe&X-Amz-Signature=92884cc84101bfb7450a69f79f9604ca219b374e2eccaa02618869b2d63458cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD6HWTNO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuS2aLVSovvZF42eH13DsWyy5yuLfWus5bVV6nzUo1vAiEAv7dEZrpoM8aL7QrH5wB4FpXelBxak2mMbGuFnFwrLlgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDL4jfB1JWpb%2BQLiSYyrcA395mTiihE799zG%2BDRPKB1PmYSK20X6jg1BIrLwqV6mPX5EQmD4bKnJXPIMNyGSWxWTTIozraIokfBHm24MCep2PiVQGdt2eNoKuNilWdH9sPxIRqJEV5TJNbZ1t7BOJdrCG1EalkYQU8ybqjiA7B%2Bic7jsWUF5NMuORMwhN1h%2FhAafOe4iGXrs41R8hI16LjrJ8MXC57lIwWpt0V%2FjatxcSAOUYIeIqXN86GB4rqfAanBqSMWzGK3SGOf8Z8AkxOG0RnDa40t0%2Bg5IgtRIolc6gG4y8E29IdnGvRv%2BQ6GIJYZ69Q4lDdCr8f9SEf0S4EbXQOwVcAVKpQjR1W67Xl6c5hGrDTMmcbbERHgzaqqegb%2FgnQMp%2FCJYorRnRoV3SwUrk5krCi2rrejgswkMvswZsyv0OayVSASn6Rj7RW4vkX%2BJtVG1p43V%2BXYNbT1p5pPMyi7FTcOlvNRnsPDluu4mWfSFkhcodFlfy62XcK9Qggwa6Vjai5YF0WP2Z8keLParJ1Ca4bcb4uPuoDHE60l%2F3ADWRJpIrZSGsTjmovswvfNKsFvSjtDUznMJgdmzlojrBGycFtNsRjpa2MHceArmk8biaJhkxURgY4eVdzROSXSBvcz%2Bke5qLfGtuMMqAusQGOqUBL%2F613SvC%2BZq2qqBNhAB52KDJtJwQCV6bOht1vrdAH%2BJQQjt4n7O9XTjDVbYLXFif14aJmmBluroajNCi6fPjk6Py9s8ybV1e%2F3Y1giyZFvpzmqyc%2FU6%2B6cXu9vKtYeNdtDToRy8p%2BjRoVqtYHnipOBnDNag2aP5kWLHLGQGYEqk2XABQp9sQAzX3352B9pL%2FJSiREujC67BdDlBrNDyfM34XgZGB&X-Amz-Signature=d40386ac3b01ca5b5a8117fad59605d56d70dc3b0ec22189cef2093bcb681957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD6HWTNO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuS2aLVSovvZF42eH13DsWyy5yuLfWus5bVV6nzUo1vAiEAv7dEZrpoM8aL7QrH5wB4FpXelBxak2mMbGuFnFwrLlgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDL4jfB1JWpb%2BQLiSYyrcA395mTiihE799zG%2BDRPKB1PmYSK20X6jg1BIrLwqV6mPX5EQmD4bKnJXPIMNyGSWxWTTIozraIokfBHm24MCep2PiVQGdt2eNoKuNilWdH9sPxIRqJEV5TJNbZ1t7BOJdrCG1EalkYQU8ybqjiA7B%2Bic7jsWUF5NMuORMwhN1h%2FhAafOe4iGXrs41R8hI16LjrJ8MXC57lIwWpt0V%2FjatxcSAOUYIeIqXN86GB4rqfAanBqSMWzGK3SGOf8Z8AkxOG0RnDa40t0%2Bg5IgtRIolc6gG4y8E29IdnGvRv%2BQ6GIJYZ69Q4lDdCr8f9SEf0S4EbXQOwVcAVKpQjR1W67Xl6c5hGrDTMmcbbERHgzaqqegb%2FgnQMp%2FCJYorRnRoV3SwUrk5krCi2rrejgswkMvswZsyv0OayVSASn6Rj7RW4vkX%2BJtVG1p43V%2BXYNbT1p5pPMyi7FTcOlvNRnsPDluu4mWfSFkhcodFlfy62XcK9Qggwa6Vjai5YF0WP2Z8keLParJ1Ca4bcb4uPuoDHE60l%2F3ADWRJpIrZSGsTjmovswvfNKsFvSjtDUznMJgdmzlojrBGycFtNsRjpa2MHceArmk8biaJhkxURgY4eVdzROSXSBvcz%2Bke5qLfGtuMMqAusQGOqUBL%2F613SvC%2BZq2qqBNhAB52KDJtJwQCV6bOht1vrdAH%2BJQQjt4n7O9XTjDVbYLXFif14aJmmBluroajNCi6fPjk6Py9s8ybV1e%2F3Y1giyZFvpzmqyc%2FU6%2B6cXu9vKtYeNdtDToRy8p%2BjRoVqtYHnipOBnDNag2aP5kWLHLGQGYEqk2XABQp9sQAzX3352B9pL%2FJSiREujC67BdDlBrNDyfM34XgZGB&X-Amz-Signature=2b028c979bf472768069fbedc0e53b58a607afafa663c5cde5e9938ae7b14f9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCUANMGF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsMr54MthMJ9Vi1mSjgU9Ly3KxybzDr2uhckpAEyF7qwIhALolWJgiQz2J0mpQK%2BUH%2B3AbtyVbgevS06MrOW1s%2FT6LKv8DCB4QABoMNjM3NDIzMTgzODA1IgxqknurA3EEmdeUa%2B0q3AODGaVWuT9l31Z4wDkfxyiKV0oBouEFAYzmThkTNv0QXBfe2G8cPjNq4r%2F5P0gyrmNAqajYjB%2BZcMnvkjYMuFWON4vp0ChySyRqQrgVhCojqRLC1v3UXrRsLQ1U7RWpSonCg9KNjr89gxIyWxdRyp4EN%2Fw7ardfDVOCQsyoUQwnY7%2FtjTQ6sD%2FKR0wvvwdh06q%2FjPD9qkA1wpktiGm0jWA28sD3ybKarzxM56z47wI9SwAYYAmRojD5FM0IDMoKQAXvzl6ku9uhhjyar0hstcPl7kKpnS9L2f%2Fk25eT%2BAWXenwMTd8mkTfE%2Ffxe8GlXH2uI6so3Jrtz%2Fo3w6%2BJwTyBeXMC%2Buz%2BF8jcyWIPEc2s7WmYRzeZLC5QcZzZtJEfOvyCnWx1FgOLHLLWKLNHFCcCeH%2FcHgR8fBKW1i0Ufj%2FbRdaR4rCyh0yBvCi1txYoDSMayvHWRw2aItELZzHH8X%2FvKLMKd%2BWrHPWIZS0uAkJmyexoZ2BO9O54yOmQ%2FYz0MrO6Kr0%2F4mUIUkh5%2FpJOjogmpAnSA7ydUS1XFkd%2FK2IVcH2T6l%2FJCv5e23jfCrfcYSWTvPmIw5nP2yWLmpVJA%2B7V%2Bu1KBLI7Uhdr05VfKJlJFGukLzZ33T5Ahj0LxHDCzgLrEBjqkAc0O2XmWeO0rDhjvYAMHAq4sW3C%2FrJdlYjfvrNq43kvnwbbZj5SKP4Pj5iogGdteSJ%2Fjwb%2BNgvJ%2Bn5svoCzL9hgRPEXSM8P%2FvfTFgBc8EWcODjIP6pFZMjaE6wAYULK%2BqNVr%2F7KKP219%2B9vcu%2BGUowtC8Rq3oc3JxtY0xEy%2Bmag1%2FdGneoYVa3JDMAH5Mxce3J90CmZCix1MeKxfBWh7hhc3cmy9&X-Amz-Signature=eba3495a142937c946645604684e6cef34c33ea877104d224a687d074db9066e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCUANMGF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsMr54MthMJ9Vi1mSjgU9Ly3KxybzDr2uhckpAEyF7qwIhALolWJgiQz2J0mpQK%2BUH%2B3AbtyVbgevS06MrOW1s%2FT6LKv8DCB4QABoMNjM3NDIzMTgzODA1IgxqknurA3EEmdeUa%2B0q3AODGaVWuT9l31Z4wDkfxyiKV0oBouEFAYzmThkTNv0QXBfe2G8cPjNq4r%2F5P0gyrmNAqajYjB%2BZcMnvkjYMuFWON4vp0ChySyRqQrgVhCojqRLC1v3UXrRsLQ1U7RWpSonCg9KNjr89gxIyWxdRyp4EN%2Fw7ardfDVOCQsyoUQwnY7%2FtjTQ6sD%2FKR0wvvwdh06q%2FjPD9qkA1wpktiGm0jWA28sD3ybKarzxM56z47wI9SwAYYAmRojD5FM0IDMoKQAXvzl6ku9uhhjyar0hstcPl7kKpnS9L2f%2Fk25eT%2BAWXenwMTd8mkTfE%2Ffxe8GlXH2uI6so3Jrtz%2Fo3w6%2BJwTyBeXMC%2Buz%2BF8jcyWIPEc2s7WmYRzeZLC5QcZzZtJEfOvyCnWx1FgOLHLLWKLNHFCcCeH%2FcHgR8fBKW1i0Ufj%2FbRdaR4rCyh0yBvCi1txYoDSMayvHWRw2aItELZzHH8X%2FvKLMKd%2BWrHPWIZS0uAkJmyexoZ2BO9O54yOmQ%2FYz0MrO6Kr0%2F4mUIUkh5%2FpJOjogmpAnSA7ydUS1XFkd%2FK2IVcH2T6l%2FJCv5e23jfCrfcYSWTvPmIw5nP2yWLmpVJA%2B7V%2Bu1KBLI7Uhdr05VfKJlJFGukLzZ33T5Ahj0LxHDCzgLrEBjqkAc0O2XmWeO0rDhjvYAMHAq4sW3C%2FrJdlYjfvrNq43kvnwbbZj5SKP4Pj5iogGdteSJ%2Fjwb%2BNgvJ%2Bn5svoCzL9hgRPEXSM8P%2FvfTFgBc8EWcODjIP6pFZMjaE6wAYULK%2BqNVr%2F7KKP219%2B9vcu%2BGUowtC8Rq3oc3JxtY0xEy%2Bmag1%2FdGneoYVa3JDMAH5Mxce3J90CmZCix1MeKxfBWh7hhc3cmy9&X-Amz-Signature=ab167a47edcb82a6aa1f7f6afccee5f880bc4d42fbfe4401f5357e22b3a650e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCUANMGF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsMr54MthMJ9Vi1mSjgU9Ly3KxybzDr2uhckpAEyF7qwIhALolWJgiQz2J0mpQK%2BUH%2B3AbtyVbgevS06MrOW1s%2FT6LKv8DCB4QABoMNjM3NDIzMTgzODA1IgxqknurA3EEmdeUa%2B0q3AODGaVWuT9l31Z4wDkfxyiKV0oBouEFAYzmThkTNv0QXBfe2G8cPjNq4r%2F5P0gyrmNAqajYjB%2BZcMnvkjYMuFWON4vp0ChySyRqQrgVhCojqRLC1v3UXrRsLQ1U7RWpSonCg9KNjr89gxIyWxdRyp4EN%2Fw7ardfDVOCQsyoUQwnY7%2FtjTQ6sD%2FKR0wvvwdh06q%2FjPD9qkA1wpktiGm0jWA28sD3ybKarzxM56z47wI9SwAYYAmRojD5FM0IDMoKQAXvzl6ku9uhhjyar0hstcPl7kKpnS9L2f%2Fk25eT%2BAWXenwMTd8mkTfE%2Ffxe8GlXH2uI6so3Jrtz%2Fo3w6%2BJwTyBeXMC%2Buz%2BF8jcyWIPEc2s7WmYRzeZLC5QcZzZtJEfOvyCnWx1FgOLHLLWKLNHFCcCeH%2FcHgR8fBKW1i0Ufj%2FbRdaR4rCyh0yBvCi1txYoDSMayvHWRw2aItELZzHH8X%2FvKLMKd%2BWrHPWIZS0uAkJmyexoZ2BO9O54yOmQ%2FYz0MrO6Kr0%2F4mUIUkh5%2FpJOjogmpAnSA7ydUS1XFkd%2FK2IVcH2T6l%2FJCv5e23jfCrfcYSWTvPmIw5nP2yWLmpVJA%2B7V%2Bu1KBLI7Uhdr05VfKJlJFGukLzZ33T5Ahj0LxHDCzgLrEBjqkAc0O2XmWeO0rDhjvYAMHAq4sW3C%2FrJdlYjfvrNq43kvnwbbZj5SKP4Pj5iogGdteSJ%2Fjwb%2BNgvJ%2Bn5svoCzL9hgRPEXSM8P%2FvfTFgBc8EWcODjIP6pFZMjaE6wAYULK%2BqNVr%2F7KKP219%2B9vcu%2BGUowtC8Rq3oc3JxtY0xEy%2Bmag1%2FdGneoYVa3JDMAH5Mxce3J90CmZCix1MeKxfBWh7hhc3cmy9&X-Amz-Signature=de39b3849d2aeb155178c8276ae3d87b759f00c44bb73aaaa35b68a9296774cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCUANMGF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsMr54MthMJ9Vi1mSjgU9Ly3KxybzDr2uhckpAEyF7qwIhALolWJgiQz2J0mpQK%2BUH%2B3AbtyVbgevS06MrOW1s%2FT6LKv8DCB4QABoMNjM3NDIzMTgzODA1IgxqknurA3EEmdeUa%2B0q3AODGaVWuT9l31Z4wDkfxyiKV0oBouEFAYzmThkTNv0QXBfe2G8cPjNq4r%2F5P0gyrmNAqajYjB%2BZcMnvkjYMuFWON4vp0ChySyRqQrgVhCojqRLC1v3UXrRsLQ1U7RWpSonCg9KNjr89gxIyWxdRyp4EN%2Fw7ardfDVOCQsyoUQwnY7%2FtjTQ6sD%2FKR0wvvwdh06q%2FjPD9qkA1wpktiGm0jWA28sD3ybKarzxM56z47wI9SwAYYAmRojD5FM0IDMoKQAXvzl6ku9uhhjyar0hstcPl7kKpnS9L2f%2Fk25eT%2BAWXenwMTd8mkTfE%2Ffxe8GlXH2uI6so3Jrtz%2Fo3w6%2BJwTyBeXMC%2Buz%2BF8jcyWIPEc2s7WmYRzeZLC5QcZzZtJEfOvyCnWx1FgOLHLLWKLNHFCcCeH%2FcHgR8fBKW1i0Ufj%2FbRdaR4rCyh0yBvCi1txYoDSMayvHWRw2aItELZzHH8X%2FvKLMKd%2BWrHPWIZS0uAkJmyexoZ2BO9O54yOmQ%2FYz0MrO6Kr0%2F4mUIUkh5%2FpJOjogmpAnSA7ydUS1XFkd%2FK2IVcH2T6l%2FJCv5e23jfCrfcYSWTvPmIw5nP2yWLmpVJA%2B7V%2Bu1KBLI7Uhdr05VfKJlJFGukLzZ33T5Ahj0LxHDCzgLrEBjqkAc0O2XmWeO0rDhjvYAMHAq4sW3C%2FrJdlYjfvrNq43kvnwbbZj5SKP4Pj5iogGdteSJ%2Fjwb%2BNgvJ%2Bn5svoCzL9hgRPEXSM8P%2FvfTFgBc8EWcODjIP6pFZMjaE6wAYULK%2BqNVr%2F7KKP219%2B9vcu%2BGUowtC8Rq3oc3JxtY0xEy%2Bmag1%2FdGneoYVa3JDMAH5Mxce3J90CmZCix1MeKxfBWh7hhc3cmy9&X-Amz-Signature=8f18965c0c522d05b99414f926c21894e87ef5f0afa0c8ee25405d6e8a4ca868&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCUANMGF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsMr54MthMJ9Vi1mSjgU9Ly3KxybzDr2uhckpAEyF7qwIhALolWJgiQz2J0mpQK%2BUH%2B3AbtyVbgevS06MrOW1s%2FT6LKv8DCB4QABoMNjM3NDIzMTgzODA1IgxqknurA3EEmdeUa%2B0q3AODGaVWuT9l31Z4wDkfxyiKV0oBouEFAYzmThkTNv0QXBfe2G8cPjNq4r%2F5P0gyrmNAqajYjB%2BZcMnvkjYMuFWON4vp0ChySyRqQrgVhCojqRLC1v3UXrRsLQ1U7RWpSonCg9KNjr89gxIyWxdRyp4EN%2Fw7ardfDVOCQsyoUQwnY7%2FtjTQ6sD%2FKR0wvvwdh06q%2FjPD9qkA1wpktiGm0jWA28sD3ybKarzxM56z47wI9SwAYYAmRojD5FM0IDMoKQAXvzl6ku9uhhjyar0hstcPl7kKpnS9L2f%2Fk25eT%2BAWXenwMTd8mkTfE%2Ffxe8GlXH2uI6so3Jrtz%2Fo3w6%2BJwTyBeXMC%2Buz%2BF8jcyWIPEc2s7WmYRzeZLC5QcZzZtJEfOvyCnWx1FgOLHLLWKLNHFCcCeH%2FcHgR8fBKW1i0Ufj%2FbRdaR4rCyh0yBvCi1txYoDSMayvHWRw2aItELZzHH8X%2FvKLMKd%2BWrHPWIZS0uAkJmyexoZ2BO9O54yOmQ%2FYz0MrO6Kr0%2F4mUIUkh5%2FpJOjogmpAnSA7ydUS1XFkd%2FK2IVcH2T6l%2FJCv5e23jfCrfcYSWTvPmIw5nP2yWLmpVJA%2B7V%2Bu1KBLI7Uhdr05VfKJlJFGukLzZ33T5Ahj0LxHDCzgLrEBjqkAc0O2XmWeO0rDhjvYAMHAq4sW3C%2FrJdlYjfvrNq43kvnwbbZj5SKP4Pj5iogGdteSJ%2Fjwb%2BNgvJ%2Bn5svoCzL9hgRPEXSM8P%2FvfTFgBc8EWcODjIP6pFZMjaE6wAYULK%2BqNVr%2F7KKP219%2B9vcu%2BGUowtC8Rq3oc3JxtY0xEy%2Bmag1%2FdGneoYVa3JDMAH5Mxce3J90CmZCix1MeKxfBWh7hhc3cmy9&X-Amz-Signature=460fc2ad55a47a53c2b3215155b1f2c0bce0701f9240a1d68a37151732ff5ba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCUANMGF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsMr54MthMJ9Vi1mSjgU9Ly3KxybzDr2uhckpAEyF7qwIhALolWJgiQz2J0mpQK%2BUH%2B3AbtyVbgevS06MrOW1s%2FT6LKv8DCB4QABoMNjM3NDIzMTgzODA1IgxqknurA3EEmdeUa%2B0q3AODGaVWuT9l31Z4wDkfxyiKV0oBouEFAYzmThkTNv0QXBfe2G8cPjNq4r%2F5P0gyrmNAqajYjB%2BZcMnvkjYMuFWON4vp0ChySyRqQrgVhCojqRLC1v3UXrRsLQ1U7RWpSonCg9KNjr89gxIyWxdRyp4EN%2Fw7ardfDVOCQsyoUQwnY7%2FtjTQ6sD%2FKR0wvvwdh06q%2FjPD9qkA1wpktiGm0jWA28sD3ybKarzxM56z47wI9SwAYYAmRojD5FM0IDMoKQAXvzl6ku9uhhjyar0hstcPl7kKpnS9L2f%2Fk25eT%2BAWXenwMTd8mkTfE%2Ffxe8GlXH2uI6so3Jrtz%2Fo3w6%2BJwTyBeXMC%2Buz%2BF8jcyWIPEc2s7WmYRzeZLC5QcZzZtJEfOvyCnWx1FgOLHLLWKLNHFCcCeH%2FcHgR8fBKW1i0Ufj%2FbRdaR4rCyh0yBvCi1txYoDSMayvHWRw2aItELZzHH8X%2FvKLMKd%2BWrHPWIZS0uAkJmyexoZ2BO9O54yOmQ%2FYz0MrO6Kr0%2F4mUIUkh5%2FpJOjogmpAnSA7ydUS1XFkd%2FK2IVcH2T6l%2FJCv5e23jfCrfcYSWTvPmIw5nP2yWLmpVJA%2B7V%2Bu1KBLI7Uhdr05VfKJlJFGukLzZ33T5Ahj0LxHDCzgLrEBjqkAc0O2XmWeO0rDhjvYAMHAq4sW3C%2FrJdlYjfvrNq43kvnwbbZj5SKP4Pj5iogGdteSJ%2Fjwb%2BNgvJ%2Bn5svoCzL9hgRPEXSM8P%2FvfTFgBc8EWcODjIP6pFZMjaE6wAYULK%2BqNVr%2F7KKP219%2B9vcu%2BGUowtC8Rq3oc3JxtY0xEy%2Bmag1%2FdGneoYVa3JDMAH5Mxce3J90CmZCix1MeKxfBWh7hhc3cmy9&X-Amz-Signature=f2bc9343cee3e127055340345ff135b9676efaa26492b2f555e309921ac398e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCUANMGF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsMr54MthMJ9Vi1mSjgU9Ly3KxybzDr2uhckpAEyF7qwIhALolWJgiQz2J0mpQK%2BUH%2B3AbtyVbgevS06MrOW1s%2FT6LKv8DCB4QABoMNjM3NDIzMTgzODA1IgxqknurA3EEmdeUa%2B0q3AODGaVWuT9l31Z4wDkfxyiKV0oBouEFAYzmThkTNv0QXBfe2G8cPjNq4r%2F5P0gyrmNAqajYjB%2BZcMnvkjYMuFWON4vp0ChySyRqQrgVhCojqRLC1v3UXrRsLQ1U7RWpSonCg9KNjr89gxIyWxdRyp4EN%2Fw7ardfDVOCQsyoUQwnY7%2FtjTQ6sD%2FKR0wvvwdh06q%2FjPD9qkA1wpktiGm0jWA28sD3ybKarzxM56z47wI9SwAYYAmRojD5FM0IDMoKQAXvzl6ku9uhhjyar0hstcPl7kKpnS9L2f%2Fk25eT%2BAWXenwMTd8mkTfE%2Ffxe8GlXH2uI6so3Jrtz%2Fo3w6%2BJwTyBeXMC%2Buz%2BF8jcyWIPEc2s7WmYRzeZLC5QcZzZtJEfOvyCnWx1FgOLHLLWKLNHFCcCeH%2FcHgR8fBKW1i0Ufj%2FbRdaR4rCyh0yBvCi1txYoDSMayvHWRw2aItELZzHH8X%2FvKLMKd%2BWrHPWIZS0uAkJmyexoZ2BO9O54yOmQ%2FYz0MrO6Kr0%2F4mUIUkh5%2FpJOjogmpAnSA7ydUS1XFkd%2FK2IVcH2T6l%2FJCv5e23jfCrfcYSWTvPmIw5nP2yWLmpVJA%2B7V%2Bu1KBLI7Uhdr05VfKJlJFGukLzZ33T5Ahj0LxHDCzgLrEBjqkAc0O2XmWeO0rDhjvYAMHAq4sW3C%2FrJdlYjfvrNq43kvnwbbZj5SKP4Pj5iogGdteSJ%2Fjwb%2BNgvJ%2Bn5svoCzL9hgRPEXSM8P%2FvfTFgBc8EWcODjIP6pFZMjaE6wAYULK%2BqNVr%2F7KKP219%2B9vcu%2BGUowtC8Rq3oc3JxtY0xEy%2Bmag1%2FdGneoYVa3JDMAH5Mxce3J90CmZCix1MeKxfBWh7hhc3cmy9&X-Amz-Signature=de39b3849d2aeb155178c8276ae3d87b759f00c44bb73aaaa35b68a9296774cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCUANMGF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsMr54MthMJ9Vi1mSjgU9Ly3KxybzDr2uhckpAEyF7qwIhALolWJgiQz2J0mpQK%2BUH%2B3AbtyVbgevS06MrOW1s%2FT6LKv8DCB4QABoMNjM3NDIzMTgzODA1IgxqknurA3EEmdeUa%2B0q3AODGaVWuT9l31Z4wDkfxyiKV0oBouEFAYzmThkTNv0QXBfe2G8cPjNq4r%2F5P0gyrmNAqajYjB%2BZcMnvkjYMuFWON4vp0ChySyRqQrgVhCojqRLC1v3UXrRsLQ1U7RWpSonCg9KNjr89gxIyWxdRyp4EN%2Fw7ardfDVOCQsyoUQwnY7%2FtjTQ6sD%2FKR0wvvwdh06q%2FjPD9qkA1wpktiGm0jWA28sD3ybKarzxM56z47wI9SwAYYAmRojD5FM0IDMoKQAXvzl6ku9uhhjyar0hstcPl7kKpnS9L2f%2Fk25eT%2BAWXenwMTd8mkTfE%2Ffxe8GlXH2uI6so3Jrtz%2Fo3w6%2BJwTyBeXMC%2Buz%2BF8jcyWIPEc2s7WmYRzeZLC5QcZzZtJEfOvyCnWx1FgOLHLLWKLNHFCcCeH%2FcHgR8fBKW1i0Ufj%2FbRdaR4rCyh0yBvCi1txYoDSMayvHWRw2aItELZzHH8X%2FvKLMKd%2BWrHPWIZS0uAkJmyexoZ2BO9O54yOmQ%2FYz0MrO6Kr0%2F4mUIUkh5%2FpJOjogmpAnSA7ydUS1XFkd%2FK2IVcH2T6l%2FJCv5e23jfCrfcYSWTvPmIw5nP2yWLmpVJA%2B7V%2Bu1KBLI7Uhdr05VfKJlJFGukLzZ33T5Ahj0LxHDCzgLrEBjqkAc0O2XmWeO0rDhjvYAMHAq4sW3C%2FrJdlYjfvrNq43kvnwbbZj5SKP4Pj5iogGdteSJ%2Fjwb%2BNgvJ%2Bn5svoCzL9hgRPEXSM8P%2FvfTFgBc8EWcODjIP6pFZMjaE6wAYULK%2BqNVr%2F7KKP219%2B9vcu%2BGUowtC8Rq3oc3JxtY0xEy%2Bmag1%2FdGneoYVa3JDMAH5Mxce3J90CmZCix1MeKxfBWh7hhc3cmy9&X-Amz-Signature=119a96b0a67a28a4f69bd999435774fd8b21d61290759fc12f03b0622c0b0762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCUANMGF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsMr54MthMJ9Vi1mSjgU9Ly3KxybzDr2uhckpAEyF7qwIhALolWJgiQz2J0mpQK%2BUH%2B3AbtyVbgevS06MrOW1s%2FT6LKv8DCB4QABoMNjM3NDIzMTgzODA1IgxqknurA3EEmdeUa%2B0q3AODGaVWuT9l31Z4wDkfxyiKV0oBouEFAYzmThkTNv0QXBfe2G8cPjNq4r%2F5P0gyrmNAqajYjB%2BZcMnvkjYMuFWON4vp0ChySyRqQrgVhCojqRLC1v3UXrRsLQ1U7RWpSonCg9KNjr89gxIyWxdRyp4EN%2Fw7ardfDVOCQsyoUQwnY7%2FtjTQ6sD%2FKR0wvvwdh06q%2FjPD9qkA1wpktiGm0jWA28sD3ybKarzxM56z47wI9SwAYYAmRojD5FM0IDMoKQAXvzl6ku9uhhjyar0hstcPl7kKpnS9L2f%2Fk25eT%2BAWXenwMTd8mkTfE%2Ffxe8GlXH2uI6so3Jrtz%2Fo3w6%2BJwTyBeXMC%2Buz%2BF8jcyWIPEc2s7WmYRzeZLC5QcZzZtJEfOvyCnWx1FgOLHLLWKLNHFCcCeH%2FcHgR8fBKW1i0Ufj%2FbRdaR4rCyh0yBvCi1txYoDSMayvHWRw2aItELZzHH8X%2FvKLMKd%2BWrHPWIZS0uAkJmyexoZ2BO9O54yOmQ%2FYz0MrO6Kr0%2F4mUIUkh5%2FpJOjogmpAnSA7ydUS1XFkd%2FK2IVcH2T6l%2FJCv5e23jfCrfcYSWTvPmIw5nP2yWLmpVJA%2B7V%2Bu1KBLI7Uhdr05VfKJlJFGukLzZ33T5Ahj0LxHDCzgLrEBjqkAc0O2XmWeO0rDhjvYAMHAq4sW3C%2FrJdlYjfvrNq43kvnwbbZj5SKP4Pj5iogGdteSJ%2Fjwb%2BNgvJ%2Bn5svoCzL9hgRPEXSM8P%2FvfTFgBc8EWcODjIP6pFZMjaE6wAYULK%2BqNVr%2F7KKP219%2B9vcu%2BGUowtC8Rq3oc3JxtY0xEy%2Bmag1%2FdGneoYVa3JDMAH5Mxce3J90CmZCix1MeKxfBWh7hhc3cmy9&X-Amz-Signature=a4303a88fda781b4d0f8f55d46d139ab41ae455b3a04e461cc4f08d430d80452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCUANMGF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsMr54MthMJ9Vi1mSjgU9Ly3KxybzDr2uhckpAEyF7qwIhALolWJgiQz2J0mpQK%2BUH%2B3AbtyVbgevS06MrOW1s%2FT6LKv8DCB4QABoMNjM3NDIzMTgzODA1IgxqknurA3EEmdeUa%2B0q3AODGaVWuT9l31Z4wDkfxyiKV0oBouEFAYzmThkTNv0QXBfe2G8cPjNq4r%2F5P0gyrmNAqajYjB%2BZcMnvkjYMuFWON4vp0ChySyRqQrgVhCojqRLC1v3UXrRsLQ1U7RWpSonCg9KNjr89gxIyWxdRyp4EN%2Fw7ardfDVOCQsyoUQwnY7%2FtjTQ6sD%2FKR0wvvwdh06q%2FjPD9qkA1wpktiGm0jWA28sD3ybKarzxM56z47wI9SwAYYAmRojD5FM0IDMoKQAXvzl6ku9uhhjyar0hstcPl7kKpnS9L2f%2Fk25eT%2BAWXenwMTd8mkTfE%2Ffxe8GlXH2uI6so3Jrtz%2Fo3w6%2BJwTyBeXMC%2Buz%2BF8jcyWIPEc2s7WmYRzeZLC5QcZzZtJEfOvyCnWx1FgOLHLLWKLNHFCcCeH%2FcHgR8fBKW1i0Ufj%2FbRdaR4rCyh0yBvCi1txYoDSMayvHWRw2aItELZzHH8X%2FvKLMKd%2BWrHPWIZS0uAkJmyexoZ2BO9O54yOmQ%2FYz0MrO6Kr0%2F4mUIUkh5%2FpJOjogmpAnSA7ydUS1XFkd%2FK2IVcH2T6l%2FJCv5e23jfCrfcYSWTvPmIw5nP2yWLmpVJA%2B7V%2Bu1KBLI7Uhdr05VfKJlJFGukLzZ33T5Ahj0LxHDCzgLrEBjqkAc0O2XmWeO0rDhjvYAMHAq4sW3C%2FrJdlYjfvrNq43kvnwbbZj5SKP4Pj5iogGdteSJ%2Fjwb%2BNgvJ%2Bn5svoCzL9hgRPEXSM8P%2FvfTFgBc8EWcODjIP6pFZMjaE6wAYULK%2BqNVr%2F7KKP219%2B9vcu%2BGUowtC8Rq3oc3JxtY0xEy%2Bmag1%2FdGneoYVa3JDMAH5Mxce3J90CmZCix1MeKxfBWh7hhc3cmy9&X-Amz-Signature=18e5b62d644a6b4eeac0edc1bb0e39f604095e93c5f4f054b9be0e4d9bb315da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
