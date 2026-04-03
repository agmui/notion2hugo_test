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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WN6B7OG%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWzwpm1b1jWOdWAz%2B0JEIxK%2BOm5X6jCvOMbcqcSW43bgIhAPKmzV65M1ougHDYDVERKqi75bqe3VHihjgDPk5oKXRvKv8DCHcQABoMNjM3NDIzMTgzODA1IgzgsMfyNBAJo%2FXyGQwq3APBqz6d6dpV5t%2BtvuNo2bJxhhVa%2FTTdRQ3P4dyuaqpWLGrwmuILRmIgDvMjjpwPsj%2BhlQDrPzEqHv5hKd6yR1RHS417%2BCVa9RVRqvy6yFbby4%2FKxRGQQplZR0eqnzWedkYeq3hmw4emDUb%2BaxpLEc9txt51UxyxrqWWWkz8seyU6OEZ3mIbHEtCzyeu7gWY%2FAUwiGQgUbBeO%2BzKLo3TASZSuuZILTRMF%2B4HuKZmpKYp8ZcB02ZCe3kZ3Xi%2Fb9Hw%2BDvcf5w1wJ0qTrY72WG1%2FSc39swgX1Pr7JvVR2cVgWsv3QQXrfavLSzAjwzgNi%2B90PW%2FB2eIA%2FcyxnlKuwK0oxUgZbI0X1tXUYHMhXNbrLNyRM4JK9tqVhcDsNTZgzfd6b0Cz%2B7AjagdTteBLGZhKoeYXs4sMeSdDyNLAyAQVEiTBrjo4K9FlrA3BPCi2euq7cElNkr2rCaESMyMHNmwwINVhvJke5OGQrxR%2FUL3csAPpj4QoQuguPGlpwVhq%2BeBOInzM2QporgTlM98PLXCkL2HWcNCX7TAbMRrFbBsOeb%2FTVs7KdGhY%2FphjzWOdRyyAq6Fyib1KpwIRQ1FIYeegjx16Wrxgs2jPt7Qkj3dNRXZ3K16Z%2F8nvpiasCpTLTDMyLvOBjqkAcYJKDg7zjfl12yydFtOX%2F%2B556bx1XX8Kyz0g8F0iLI%2BcuaoUujcdpFvTg%2B75XugcqN8sqarAfTGISlIjod28JXAS%2FfP8CCORByrF%2FWuFP9bT9sP7GJuCQxHvlUPb8bAwmHcWeJ8fIdWaTvIDi1TSpYhqJ5%2Bt9t8NmNCF511mbXpSKMiWZvFCJCTcOorzGX18oLuvvABUJP22h5dgobmgg49SeOo&X-Amz-Signature=598d3823a16f0769af3e3ea80f61a7598bd66dba722283afe7d8e19e0cda8931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WN6B7OG%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWzwpm1b1jWOdWAz%2B0JEIxK%2BOm5X6jCvOMbcqcSW43bgIhAPKmzV65M1ougHDYDVERKqi75bqe3VHihjgDPk5oKXRvKv8DCHcQABoMNjM3NDIzMTgzODA1IgzgsMfyNBAJo%2FXyGQwq3APBqz6d6dpV5t%2BtvuNo2bJxhhVa%2FTTdRQ3P4dyuaqpWLGrwmuILRmIgDvMjjpwPsj%2BhlQDrPzEqHv5hKd6yR1RHS417%2BCVa9RVRqvy6yFbby4%2FKxRGQQplZR0eqnzWedkYeq3hmw4emDUb%2BaxpLEc9txt51UxyxrqWWWkz8seyU6OEZ3mIbHEtCzyeu7gWY%2FAUwiGQgUbBeO%2BzKLo3TASZSuuZILTRMF%2B4HuKZmpKYp8ZcB02ZCe3kZ3Xi%2Fb9Hw%2BDvcf5w1wJ0qTrY72WG1%2FSc39swgX1Pr7JvVR2cVgWsv3QQXrfavLSzAjwzgNi%2B90PW%2FB2eIA%2FcyxnlKuwK0oxUgZbI0X1tXUYHMhXNbrLNyRM4JK9tqVhcDsNTZgzfd6b0Cz%2B7AjagdTteBLGZhKoeYXs4sMeSdDyNLAyAQVEiTBrjo4K9FlrA3BPCi2euq7cElNkr2rCaESMyMHNmwwINVhvJke5OGQrxR%2FUL3csAPpj4QoQuguPGlpwVhq%2BeBOInzM2QporgTlM98PLXCkL2HWcNCX7TAbMRrFbBsOeb%2FTVs7KdGhY%2FphjzWOdRyyAq6Fyib1KpwIRQ1FIYeegjx16Wrxgs2jPt7Qkj3dNRXZ3K16Z%2F8nvpiasCpTLTDMyLvOBjqkAcYJKDg7zjfl12yydFtOX%2F%2B556bx1XX8Kyz0g8F0iLI%2BcuaoUujcdpFvTg%2B75XugcqN8sqarAfTGISlIjod28JXAS%2FfP8CCORByrF%2FWuFP9bT9sP7GJuCQxHvlUPb8bAwmHcWeJ8fIdWaTvIDi1TSpYhqJ5%2Bt9t8NmNCF511mbXpSKMiWZvFCJCTcOorzGX18oLuvvABUJP22h5dgobmgg49SeOo&X-Amz-Signature=8aff0f3252e4093170c5aed9df6faf30242dd61f4974197b9693772a134414e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WN6B7OG%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWzwpm1b1jWOdWAz%2B0JEIxK%2BOm5X6jCvOMbcqcSW43bgIhAPKmzV65M1ougHDYDVERKqi75bqe3VHihjgDPk5oKXRvKv8DCHcQABoMNjM3NDIzMTgzODA1IgzgsMfyNBAJo%2FXyGQwq3APBqz6d6dpV5t%2BtvuNo2bJxhhVa%2FTTdRQ3P4dyuaqpWLGrwmuILRmIgDvMjjpwPsj%2BhlQDrPzEqHv5hKd6yR1RHS417%2BCVa9RVRqvy6yFbby4%2FKxRGQQplZR0eqnzWedkYeq3hmw4emDUb%2BaxpLEc9txt51UxyxrqWWWkz8seyU6OEZ3mIbHEtCzyeu7gWY%2FAUwiGQgUbBeO%2BzKLo3TASZSuuZILTRMF%2B4HuKZmpKYp8ZcB02ZCe3kZ3Xi%2Fb9Hw%2BDvcf5w1wJ0qTrY72WG1%2FSc39swgX1Pr7JvVR2cVgWsv3QQXrfavLSzAjwzgNi%2B90PW%2FB2eIA%2FcyxnlKuwK0oxUgZbI0X1tXUYHMhXNbrLNyRM4JK9tqVhcDsNTZgzfd6b0Cz%2B7AjagdTteBLGZhKoeYXs4sMeSdDyNLAyAQVEiTBrjo4K9FlrA3BPCi2euq7cElNkr2rCaESMyMHNmwwINVhvJke5OGQrxR%2FUL3csAPpj4QoQuguPGlpwVhq%2BeBOInzM2QporgTlM98PLXCkL2HWcNCX7TAbMRrFbBsOeb%2FTVs7KdGhY%2FphjzWOdRyyAq6Fyib1KpwIRQ1FIYeegjx16Wrxgs2jPt7Qkj3dNRXZ3K16Z%2F8nvpiasCpTLTDMyLvOBjqkAcYJKDg7zjfl12yydFtOX%2F%2B556bx1XX8Kyz0g8F0iLI%2BcuaoUujcdpFvTg%2B75XugcqN8sqarAfTGISlIjod28JXAS%2FfP8CCORByrF%2FWuFP9bT9sP7GJuCQxHvlUPb8bAwmHcWeJ8fIdWaTvIDi1TSpYhqJ5%2Bt9t8NmNCF511mbXpSKMiWZvFCJCTcOorzGX18oLuvvABUJP22h5dgobmgg49SeOo&X-Amz-Signature=0b61dbce4ecb39d54a4064d65a88cd9abcd6755f77cb9a188a6855c8212cffc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WN6B7OG%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWzwpm1b1jWOdWAz%2B0JEIxK%2BOm5X6jCvOMbcqcSW43bgIhAPKmzV65M1ougHDYDVERKqi75bqe3VHihjgDPk5oKXRvKv8DCHcQABoMNjM3NDIzMTgzODA1IgzgsMfyNBAJo%2FXyGQwq3APBqz6d6dpV5t%2BtvuNo2bJxhhVa%2FTTdRQ3P4dyuaqpWLGrwmuILRmIgDvMjjpwPsj%2BhlQDrPzEqHv5hKd6yR1RHS417%2BCVa9RVRqvy6yFbby4%2FKxRGQQplZR0eqnzWedkYeq3hmw4emDUb%2BaxpLEc9txt51UxyxrqWWWkz8seyU6OEZ3mIbHEtCzyeu7gWY%2FAUwiGQgUbBeO%2BzKLo3TASZSuuZILTRMF%2B4HuKZmpKYp8ZcB02ZCe3kZ3Xi%2Fb9Hw%2BDvcf5w1wJ0qTrY72WG1%2FSc39swgX1Pr7JvVR2cVgWsv3QQXrfavLSzAjwzgNi%2B90PW%2FB2eIA%2FcyxnlKuwK0oxUgZbI0X1tXUYHMhXNbrLNyRM4JK9tqVhcDsNTZgzfd6b0Cz%2B7AjagdTteBLGZhKoeYXs4sMeSdDyNLAyAQVEiTBrjo4K9FlrA3BPCi2euq7cElNkr2rCaESMyMHNmwwINVhvJke5OGQrxR%2FUL3csAPpj4QoQuguPGlpwVhq%2BeBOInzM2QporgTlM98PLXCkL2HWcNCX7TAbMRrFbBsOeb%2FTVs7KdGhY%2FphjzWOdRyyAq6Fyib1KpwIRQ1FIYeegjx16Wrxgs2jPt7Qkj3dNRXZ3K16Z%2F8nvpiasCpTLTDMyLvOBjqkAcYJKDg7zjfl12yydFtOX%2F%2B556bx1XX8Kyz0g8F0iLI%2BcuaoUujcdpFvTg%2B75XugcqN8sqarAfTGISlIjod28JXAS%2FfP8CCORByrF%2FWuFP9bT9sP7GJuCQxHvlUPb8bAwmHcWeJ8fIdWaTvIDi1TSpYhqJ5%2Bt9t8NmNCF511mbXpSKMiWZvFCJCTcOorzGX18oLuvvABUJP22h5dgobmgg49SeOo&X-Amz-Signature=dca4b5623651a06298516c37248577c7e0f7c7e76f84fd120c898e214cf53b04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WN6B7OG%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWzwpm1b1jWOdWAz%2B0JEIxK%2BOm5X6jCvOMbcqcSW43bgIhAPKmzV65M1ougHDYDVERKqi75bqe3VHihjgDPk5oKXRvKv8DCHcQABoMNjM3NDIzMTgzODA1IgzgsMfyNBAJo%2FXyGQwq3APBqz6d6dpV5t%2BtvuNo2bJxhhVa%2FTTdRQ3P4dyuaqpWLGrwmuILRmIgDvMjjpwPsj%2BhlQDrPzEqHv5hKd6yR1RHS417%2BCVa9RVRqvy6yFbby4%2FKxRGQQplZR0eqnzWedkYeq3hmw4emDUb%2BaxpLEc9txt51UxyxrqWWWkz8seyU6OEZ3mIbHEtCzyeu7gWY%2FAUwiGQgUbBeO%2BzKLo3TASZSuuZILTRMF%2B4HuKZmpKYp8ZcB02ZCe3kZ3Xi%2Fb9Hw%2BDvcf5w1wJ0qTrY72WG1%2FSc39swgX1Pr7JvVR2cVgWsv3QQXrfavLSzAjwzgNi%2B90PW%2FB2eIA%2FcyxnlKuwK0oxUgZbI0X1tXUYHMhXNbrLNyRM4JK9tqVhcDsNTZgzfd6b0Cz%2B7AjagdTteBLGZhKoeYXs4sMeSdDyNLAyAQVEiTBrjo4K9FlrA3BPCi2euq7cElNkr2rCaESMyMHNmwwINVhvJke5OGQrxR%2FUL3csAPpj4QoQuguPGlpwVhq%2BeBOInzM2QporgTlM98PLXCkL2HWcNCX7TAbMRrFbBsOeb%2FTVs7KdGhY%2FphjzWOdRyyAq6Fyib1KpwIRQ1FIYeegjx16Wrxgs2jPt7Qkj3dNRXZ3K16Z%2F8nvpiasCpTLTDMyLvOBjqkAcYJKDg7zjfl12yydFtOX%2F%2B556bx1XX8Kyz0g8F0iLI%2BcuaoUujcdpFvTg%2B75XugcqN8sqarAfTGISlIjod28JXAS%2FfP8CCORByrF%2FWuFP9bT9sP7GJuCQxHvlUPb8bAwmHcWeJ8fIdWaTvIDi1TSpYhqJ5%2Bt9t8NmNCF511mbXpSKMiWZvFCJCTcOorzGX18oLuvvABUJP22h5dgobmgg49SeOo&X-Amz-Signature=dbc4c3e7a38c6d5d304b2413eecadc0e204b5692c377c8d2831bb92b77a5e45e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WN6B7OG%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWzwpm1b1jWOdWAz%2B0JEIxK%2BOm5X6jCvOMbcqcSW43bgIhAPKmzV65M1ougHDYDVERKqi75bqe3VHihjgDPk5oKXRvKv8DCHcQABoMNjM3NDIzMTgzODA1IgzgsMfyNBAJo%2FXyGQwq3APBqz6d6dpV5t%2BtvuNo2bJxhhVa%2FTTdRQ3P4dyuaqpWLGrwmuILRmIgDvMjjpwPsj%2BhlQDrPzEqHv5hKd6yR1RHS417%2BCVa9RVRqvy6yFbby4%2FKxRGQQplZR0eqnzWedkYeq3hmw4emDUb%2BaxpLEc9txt51UxyxrqWWWkz8seyU6OEZ3mIbHEtCzyeu7gWY%2FAUwiGQgUbBeO%2BzKLo3TASZSuuZILTRMF%2B4HuKZmpKYp8ZcB02ZCe3kZ3Xi%2Fb9Hw%2BDvcf5w1wJ0qTrY72WG1%2FSc39swgX1Pr7JvVR2cVgWsv3QQXrfavLSzAjwzgNi%2B90PW%2FB2eIA%2FcyxnlKuwK0oxUgZbI0X1tXUYHMhXNbrLNyRM4JK9tqVhcDsNTZgzfd6b0Cz%2B7AjagdTteBLGZhKoeYXs4sMeSdDyNLAyAQVEiTBrjo4K9FlrA3BPCi2euq7cElNkr2rCaESMyMHNmwwINVhvJke5OGQrxR%2FUL3csAPpj4QoQuguPGlpwVhq%2BeBOInzM2QporgTlM98PLXCkL2HWcNCX7TAbMRrFbBsOeb%2FTVs7KdGhY%2FphjzWOdRyyAq6Fyib1KpwIRQ1FIYeegjx16Wrxgs2jPt7Qkj3dNRXZ3K16Z%2F8nvpiasCpTLTDMyLvOBjqkAcYJKDg7zjfl12yydFtOX%2F%2B556bx1XX8Kyz0g8F0iLI%2BcuaoUujcdpFvTg%2B75XugcqN8sqarAfTGISlIjod28JXAS%2FfP8CCORByrF%2FWuFP9bT9sP7GJuCQxHvlUPb8bAwmHcWeJ8fIdWaTvIDi1TSpYhqJ5%2Bt9t8NmNCF511mbXpSKMiWZvFCJCTcOorzGX18oLuvvABUJP22h5dgobmgg49SeOo&X-Amz-Signature=6c3bc929075b296ce9767ca89ce3b484da59c1aca617cfc88738d09157610f8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WN6B7OG%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWzwpm1b1jWOdWAz%2B0JEIxK%2BOm5X6jCvOMbcqcSW43bgIhAPKmzV65M1ougHDYDVERKqi75bqe3VHihjgDPk5oKXRvKv8DCHcQABoMNjM3NDIzMTgzODA1IgzgsMfyNBAJo%2FXyGQwq3APBqz6d6dpV5t%2BtvuNo2bJxhhVa%2FTTdRQ3P4dyuaqpWLGrwmuILRmIgDvMjjpwPsj%2BhlQDrPzEqHv5hKd6yR1RHS417%2BCVa9RVRqvy6yFbby4%2FKxRGQQplZR0eqnzWedkYeq3hmw4emDUb%2BaxpLEc9txt51UxyxrqWWWkz8seyU6OEZ3mIbHEtCzyeu7gWY%2FAUwiGQgUbBeO%2BzKLo3TASZSuuZILTRMF%2B4HuKZmpKYp8ZcB02ZCe3kZ3Xi%2Fb9Hw%2BDvcf5w1wJ0qTrY72WG1%2FSc39swgX1Pr7JvVR2cVgWsv3QQXrfavLSzAjwzgNi%2B90PW%2FB2eIA%2FcyxnlKuwK0oxUgZbI0X1tXUYHMhXNbrLNyRM4JK9tqVhcDsNTZgzfd6b0Cz%2B7AjagdTteBLGZhKoeYXs4sMeSdDyNLAyAQVEiTBrjo4K9FlrA3BPCi2euq7cElNkr2rCaESMyMHNmwwINVhvJke5OGQrxR%2FUL3csAPpj4QoQuguPGlpwVhq%2BeBOInzM2QporgTlM98PLXCkL2HWcNCX7TAbMRrFbBsOeb%2FTVs7KdGhY%2FphjzWOdRyyAq6Fyib1KpwIRQ1FIYeegjx16Wrxgs2jPt7Qkj3dNRXZ3K16Z%2F8nvpiasCpTLTDMyLvOBjqkAcYJKDg7zjfl12yydFtOX%2F%2B556bx1XX8Kyz0g8F0iLI%2BcuaoUujcdpFvTg%2B75XugcqN8sqarAfTGISlIjod28JXAS%2FfP8CCORByrF%2FWuFP9bT9sP7GJuCQxHvlUPb8bAwmHcWeJ8fIdWaTvIDi1TSpYhqJ5%2Bt9t8NmNCF511mbXpSKMiWZvFCJCTcOorzGX18oLuvvABUJP22h5dgobmgg49SeOo&X-Amz-Signature=49375151d48750cdafba1092a5a0cd23f63bc1ea6f89b2124afb6d64eee3fc98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WN6B7OG%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWzwpm1b1jWOdWAz%2B0JEIxK%2BOm5X6jCvOMbcqcSW43bgIhAPKmzV65M1ougHDYDVERKqi75bqe3VHihjgDPk5oKXRvKv8DCHcQABoMNjM3NDIzMTgzODA1IgzgsMfyNBAJo%2FXyGQwq3APBqz6d6dpV5t%2BtvuNo2bJxhhVa%2FTTdRQ3P4dyuaqpWLGrwmuILRmIgDvMjjpwPsj%2BhlQDrPzEqHv5hKd6yR1RHS417%2BCVa9RVRqvy6yFbby4%2FKxRGQQplZR0eqnzWedkYeq3hmw4emDUb%2BaxpLEc9txt51UxyxrqWWWkz8seyU6OEZ3mIbHEtCzyeu7gWY%2FAUwiGQgUbBeO%2BzKLo3TASZSuuZILTRMF%2B4HuKZmpKYp8ZcB02ZCe3kZ3Xi%2Fb9Hw%2BDvcf5w1wJ0qTrY72WG1%2FSc39swgX1Pr7JvVR2cVgWsv3QQXrfavLSzAjwzgNi%2B90PW%2FB2eIA%2FcyxnlKuwK0oxUgZbI0X1tXUYHMhXNbrLNyRM4JK9tqVhcDsNTZgzfd6b0Cz%2B7AjagdTteBLGZhKoeYXs4sMeSdDyNLAyAQVEiTBrjo4K9FlrA3BPCi2euq7cElNkr2rCaESMyMHNmwwINVhvJke5OGQrxR%2FUL3csAPpj4QoQuguPGlpwVhq%2BeBOInzM2QporgTlM98PLXCkL2HWcNCX7TAbMRrFbBsOeb%2FTVs7KdGhY%2FphjzWOdRyyAq6Fyib1KpwIRQ1FIYeegjx16Wrxgs2jPt7Qkj3dNRXZ3K16Z%2F8nvpiasCpTLTDMyLvOBjqkAcYJKDg7zjfl12yydFtOX%2F%2B556bx1XX8Kyz0g8F0iLI%2BcuaoUujcdpFvTg%2B75XugcqN8sqarAfTGISlIjod28JXAS%2FfP8CCORByrF%2FWuFP9bT9sP7GJuCQxHvlUPb8bAwmHcWeJ8fIdWaTvIDi1TSpYhqJ5%2Bt9t8NmNCF511mbXpSKMiWZvFCJCTcOorzGX18oLuvvABUJP22h5dgobmgg49SeOo&X-Amz-Signature=5b98161ca4c6476e9d6c06bc917d26574ca52f2307208e46a3b03d945c776995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WN6B7OG%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWzwpm1b1jWOdWAz%2B0JEIxK%2BOm5X6jCvOMbcqcSW43bgIhAPKmzV65M1ougHDYDVERKqi75bqe3VHihjgDPk5oKXRvKv8DCHcQABoMNjM3NDIzMTgzODA1IgzgsMfyNBAJo%2FXyGQwq3APBqz6d6dpV5t%2BtvuNo2bJxhhVa%2FTTdRQ3P4dyuaqpWLGrwmuILRmIgDvMjjpwPsj%2BhlQDrPzEqHv5hKd6yR1RHS417%2BCVa9RVRqvy6yFbby4%2FKxRGQQplZR0eqnzWedkYeq3hmw4emDUb%2BaxpLEc9txt51UxyxrqWWWkz8seyU6OEZ3mIbHEtCzyeu7gWY%2FAUwiGQgUbBeO%2BzKLo3TASZSuuZILTRMF%2B4HuKZmpKYp8ZcB02ZCe3kZ3Xi%2Fb9Hw%2BDvcf5w1wJ0qTrY72WG1%2FSc39swgX1Pr7JvVR2cVgWsv3QQXrfavLSzAjwzgNi%2B90PW%2FB2eIA%2FcyxnlKuwK0oxUgZbI0X1tXUYHMhXNbrLNyRM4JK9tqVhcDsNTZgzfd6b0Cz%2B7AjagdTteBLGZhKoeYXs4sMeSdDyNLAyAQVEiTBrjo4K9FlrA3BPCi2euq7cElNkr2rCaESMyMHNmwwINVhvJke5OGQrxR%2FUL3csAPpj4QoQuguPGlpwVhq%2BeBOInzM2QporgTlM98PLXCkL2HWcNCX7TAbMRrFbBsOeb%2FTVs7KdGhY%2FphjzWOdRyyAq6Fyib1KpwIRQ1FIYeegjx16Wrxgs2jPt7Qkj3dNRXZ3K16Z%2F8nvpiasCpTLTDMyLvOBjqkAcYJKDg7zjfl12yydFtOX%2F%2B556bx1XX8Kyz0g8F0iLI%2BcuaoUujcdpFvTg%2B75XugcqN8sqarAfTGISlIjod28JXAS%2FfP8CCORByrF%2FWuFP9bT9sP7GJuCQxHvlUPb8bAwmHcWeJ8fIdWaTvIDi1TSpYhqJ5%2Bt9t8NmNCF511mbXpSKMiWZvFCJCTcOorzGX18oLuvvABUJP22h5dgobmgg49SeOo&X-Amz-Signature=bba9af825f80214a0365e26ad4dcfa95c9ef47c4ae923c0e766f0a41167d2897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WN6B7OG%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWzwpm1b1jWOdWAz%2B0JEIxK%2BOm5X6jCvOMbcqcSW43bgIhAPKmzV65M1ougHDYDVERKqi75bqe3VHihjgDPk5oKXRvKv8DCHcQABoMNjM3NDIzMTgzODA1IgzgsMfyNBAJo%2FXyGQwq3APBqz6d6dpV5t%2BtvuNo2bJxhhVa%2FTTdRQ3P4dyuaqpWLGrwmuILRmIgDvMjjpwPsj%2BhlQDrPzEqHv5hKd6yR1RHS417%2BCVa9RVRqvy6yFbby4%2FKxRGQQplZR0eqnzWedkYeq3hmw4emDUb%2BaxpLEc9txt51UxyxrqWWWkz8seyU6OEZ3mIbHEtCzyeu7gWY%2FAUwiGQgUbBeO%2BzKLo3TASZSuuZILTRMF%2B4HuKZmpKYp8ZcB02ZCe3kZ3Xi%2Fb9Hw%2BDvcf5w1wJ0qTrY72WG1%2FSc39swgX1Pr7JvVR2cVgWsv3QQXrfavLSzAjwzgNi%2B90PW%2FB2eIA%2FcyxnlKuwK0oxUgZbI0X1tXUYHMhXNbrLNyRM4JK9tqVhcDsNTZgzfd6b0Cz%2B7AjagdTteBLGZhKoeYXs4sMeSdDyNLAyAQVEiTBrjo4K9FlrA3BPCi2euq7cElNkr2rCaESMyMHNmwwINVhvJke5OGQrxR%2FUL3csAPpj4QoQuguPGlpwVhq%2BeBOInzM2QporgTlM98PLXCkL2HWcNCX7TAbMRrFbBsOeb%2FTVs7KdGhY%2FphjzWOdRyyAq6Fyib1KpwIRQ1FIYeegjx16Wrxgs2jPt7Qkj3dNRXZ3K16Z%2F8nvpiasCpTLTDMyLvOBjqkAcYJKDg7zjfl12yydFtOX%2F%2B556bx1XX8Kyz0g8F0iLI%2BcuaoUujcdpFvTg%2B75XugcqN8sqarAfTGISlIjod28JXAS%2FfP8CCORByrF%2FWuFP9bT9sP7GJuCQxHvlUPb8bAwmHcWeJ8fIdWaTvIDi1TSpYhqJ5%2Bt9t8NmNCF511mbXpSKMiWZvFCJCTcOorzGX18oLuvvABUJP22h5dgobmgg49SeOo&X-Amz-Signature=6b0384ebe7c007297dcd0668b3016e28a9c743be67979b787f7056afc71ce643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKWJ2OVK%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQdTagsqJs%2FZZGTzKxsymp7bS5dCAkYErzJ01pQJ5KrAiAoqxO4m1jGW91o7O7j2mzmJDpwA%2BRr3zzP8NEXLPb4zir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMf20H37lKiczlks30KtwDeR7bZi9gwsdme48SuhI0fudgEU94iFENRa05kBi%2FsJd%2FEL3D9OlMCG2RcXfdTD2dI5b2j2ZHjgJ2%2BC50uwZC5jw%2B7gy0opTdnyqBXbDlZ6mYBGcoQAHJ9qTRqg0rJF3lVYcCq9cgg3Y2t%2FhlyHtd3QNAktgi7a6jYOQ4CD%2BSAqxaU%2BcU2uTvZ3GI4G5LKSM8dyOaQoul5t7qro%2F62BHS0tl%2BAo0JyPr77cs0bHa3y%2FiDrOTze57%2FbFbObxwDTAYy%2BkhYXs3cloa2wgQJRzDY3VKErgotufdLlhMDUbAQ%2FKxwP49Y31Olem%2Bz8MY%2FbDNKdPzgASz7GxnhJwhhkGxJZs%2F2K%2BiWppKkwjxDyqBsNbn94b9PrX5NRpyltFeldFT59SBu63CGqt7PaAarRAfhryQvdBUf3INCvi8%2FXljpNAvmNhoKpObnzF3x%2BJrxjrbkUZdNaaVxgujpFEcKi4QYIxYoo1kYzplfNtecCBFOE9W0vBBYjc65ENFpKW4das8yp6R5bncFQw9%2FTiSHlIIXqv7CSZaRhy4nC9CzAKeUBu07v2L%2FojWxO2eVg6rWbNuU1KxqVdhphspFlN%2F%2FONNUj6jMJLejUXuNm6QSrYSp46rCknJcys1SljAqumUwici7zgY6pgEPAeK4R0SzIqS6OAfcrI74VNX6E4acyCEgJN9Dbxr%2FsGlAbycDP6dbETvdDHnmNFOJRf%2F%2BskyBljpb3au5fmbRTJwPgPno73xbcTpopYRrmaYrHv9Jfp2ojq2zkB%2Fla%2FTBTar5eLll9s4HcIv9ogA2B8rzyYhdNnwqI%2FXjRmNsCtwORMNa4%2BOq2SS8Zl0vXagfN%2F8Nl%2F6qUaPqLOjmTCK1Z3eXR6i6&X-Amz-Signature=f492d6baa2d5db9be6e004254d65fcd9c4922af370b3f28dd6191ca68f7291b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7IRPEPG%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMRVrWH01w7jioki3FNxA3qkfLKqBxz%2FxuEAgXcKTJ6AiEA4YfEMdkXAnFJnICoH7MgIWTwkEL1EwzBj4FeT2Blsjsq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAkCoAvUUpCkBDC6HyrcA4%2BrZBkzh0oZ%2FUAxh8JE8XDVsZ3IIN2tOe2r35PhENj%2FB4Gb7T6nseVfCAyZxVl0J8zA6Wu0Hn87fpHdFzuRWr3H5f53jh1EvZJlxJ%2BbU4UuGps5lweuRHu7tZ0bdF2G7Atkv0puGhWhUDPjV3gx%2BKCxIv0IFhWqioRmychsUcYjSa3ez1IIBOC1HLhED%2BHPcsEoXHh7tGWd%2B%2FSSfkVUzBet3TczX%2FC%2FAsBKaykMfCwYusjMc%2BDNUqSXywCojXghlSFROj1v7i3TGRIPs%2Btb3ZTx%2B986s0E5FxCW6M63%2Fenl6NrbFQB232JbF6ahREMMkOnpHrQrVUS%2FG4F%2BhIAyQViRFyEZt0Uf0yuxi3Y4a3E4HExvZx1RdQDLf5LQD%2F7tVYJA4fheTN%2FEZ%2FtwobK4teehGeVEULX%2BWBLVUbdmNp0nj2QsZjiNw9xNti2%2FVVTt7ow19qEKEaXwWsG7rXNXToXB28n9G4NJCUR6wAmT6NL6j%2B1QYdlS%2F57E%2BCDlC%2FqZ7uhJI8AjwyK%2BJic%2BvecYF8e0GWl7%2FpH4P%2BpNjGOxxZyF0bez3ZoRRxgpQykORtcnnGXEjZlhMIhv068FylnKY9Imh9WbPfuCJ%2FuUZDv0x9AhbEv519T4T7FiQe6EMMjGu84GOqUBiTh06lm2U5SQLqkGlvUtuJ70d00212oodcR3KLcdm%2Bov9UoInC8WsCnqBLBMaLaddGEJXIrE%2Fk%2BKGPVlwOLRIEsfcdgJX1lUWVEZOd8FtGP08x6lKSsdWd8Gj8OLXTGV7qPJcqS3Rn40N38NTEEckvP3x02AomhGFibpHOBGfdI06KGe9zdheQMtLmgAGcvVmwXi8%2FDUIj1Qe5Q5N1IoVggJnARq&X-Amz-Signature=da12505f952218f85d837b3493ef84cdb6eaf7fa3ddea483b9eb397c0ac401fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VWZXAGR%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmqFdVJLuMl8VVJQg5yBZtTjU9E1kvLor98RjVoZ5zcAiAe72Yk7Tax6FnrkVqSGJkhGzkQ9ZFlZ3h6JxfMHz7o%2BSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM5MsOTqU74nAVYvBrKtwD7IWQGoHQy8N2%2F5c3x5fFEElw%2FN75M1nfjTeUOujy631KkVIVFn23hRuwPm1UrRldyQkpwxGZQ8QwWR7Izuf9Zbr5mPTTuTvtWPAzayvtChHgJoYnPqUsISr8MvF9gMHuvuM8GjTsQmiGfYmBSgor5Y1leY2ZgqluKClLLNzDseGHE62fr7cEBz3UjZCNZfMcfk0GaLYDnVkAOonF05IOLQUWeyCmrbWFmwM5xGo%2BItidTfYGPZ%2FXR%2BqF3JSWQ4GCpkQqBR5mQgIDh0OWEIUMCc5eNuXLbGZ9C3BFxofoxj%2FgTMWK%2BuhNW49wdzaBfc8r%2BGsWfLx%2BeYbsiof%2Bskl6l2YAzLI0wlmGzRI6UW8ugfgkdRiAZL7uBTE3vjgEJbAGRlmsyY0WRVhVWTFPMtDL%2B2YIDb6YrRItTVVE0R7hExxuTEtS0w42zpp21y1TZzdkCgXdwCDzHUsP5ccTIDCPik5obYX4T5P%2FUbjBBKnh%2F5uRqlZMgzrFfghGymNusXisa30f%2FVCkhq9d2sR9dQyJZJk95MQVc3SZygS8sMXYNUlHg9y%2BUQ1GF9tlXrk5wF4rHBFyXXmakh30UDrr84EwIdkq7COcgmAQvA8gcYplCmgSi3SiT8QlyDP9gDIwtIW8zgY6pgHfGSalmszbDEs4sYgulSD8Af7WgITDf9Hduoucp7KvOKFwdBfQJIPpVzMhKN5W5R9oBV9wgDkRvgFV8KqkiiW6HigENbJrAzI6TxXka1tMqODY5re7092LbsADGSMYAY48WnjM4Gf1sHNGjVc%2FvsjrcPqMZWyzN08aHNwLMbUeQF5QB6pGbU4xVyJmAuM8OwpyGoUK0VnrVbDIaj6Y7EI8AfQJZHmo&X-Amz-Signature=09a898f8570ca55382e78094db4f4e7c6635b4ace5d673729be976baf716b6c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WN6B7OG%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWzwpm1b1jWOdWAz%2B0JEIxK%2BOm5X6jCvOMbcqcSW43bgIhAPKmzV65M1ougHDYDVERKqi75bqe3VHihjgDPk5oKXRvKv8DCHcQABoMNjM3NDIzMTgzODA1IgzgsMfyNBAJo%2FXyGQwq3APBqz6d6dpV5t%2BtvuNo2bJxhhVa%2FTTdRQ3P4dyuaqpWLGrwmuILRmIgDvMjjpwPsj%2BhlQDrPzEqHv5hKd6yR1RHS417%2BCVa9RVRqvy6yFbby4%2FKxRGQQplZR0eqnzWedkYeq3hmw4emDUb%2BaxpLEc9txt51UxyxrqWWWkz8seyU6OEZ3mIbHEtCzyeu7gWY%2FAUwiGQgUbBeO%2BzKLo3TASZSuuZILTRMF%2B4HuKZmpKYp8ZcB02ZCe3kZ3Xi%2Fb9Hw%2BDvcf5w1wJ0qTrY72WG1%2FSc39swgX1Pr7JvVR2cVgWsv3QQXrfavLSzAjwzgNi%2B90PW%2FB2eIA%2FcyxnlKuwK0oxUgZbI0X1tXUYHMhXNbrLNyRM4JK9tqVhcDsNTZgzfd6b0Cz%2B7AjagdTteBLGZhKoeYXs4sMeSdDyNLAyAQVEiTBrjo4K9FlrA3BPCi2euq7cElNkr2rCaESMyMHNmwwINVhvJke5OGQrxR%2FUL3csAPpj4QoQuguPGlpwVhq%2BeBOInzM2QporgTlM98PLXCkL2HWcNCX7TAbMRrFbBsOeb%2FTVs7KdGhY%2FphjzWOdRyyAq6Fyib1KpwIRQ1FIYeegjx16Wrxgs2jPt7Qkj3dNRXZ3K16Z%2F8nvpiasCpTLTDMyLvOBjqkAcYJKDg7zjfl12yydFtOX%2F%2B556bx1XX8Kyz0g8F0iLI%2BcuaoUujcdpFvTg%2B75XugcqN8sqarAfTGISlIjod28JXAS%2FfP8CCORByrF%2FWuFP9bT9sP7GJuCQxHvlUPb8bAwmHcWeJ8fIdWaTvIDi1TSpYhqJ5%2Bt9t8NmNCF511mbXpSKMiWZvFCJCTcOorzGX18oLuvvABUJP22h5dgobmgg49SeOo&X-Amz-Signature=7b10605d25c9f7d4d35fc2a769bf85648ff6b7d77b9c845210480a1875e6a441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FTE3LFJ%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlSTkah7bFZgtuCV0Bad4mGNHyGrnW%2BDlStGL54uJerAiAHOZ9XnoNiLfsXP%2BDKOE2hfhCh5tgtC6mv6dpvxb4xLCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM3nVzsvPO5dTjcH7mKtwDjw28dCef0juYGjLFOKNxtIzTIkanskv7OUWNueAkpvbdwvU1dbJBSoVm8iiy%2FHTKODqJN2zF7PT5unewCyvzQHdJG0tK5qOg2CMeuicC3RnsSpn5e0FuEtLioaXyOrshuQb1YPxEUnxGuMMS4vlhmZZskqBUEnIQ01AifVaIedxyQWlcocUVdP39LH%2F%2BiGzyy4xLqfO3yIKZX8jbA7ZiMXE3PMClOnm7A7TyHa2parThBxedNdGJTm2XPHiUrrflMypxuj68Aw27JC31vKCmz3bptVntqqUTyiWoXXi4FkF19yKuFzZdq0cSw%2BbaT1HY5N7bO1n7uRcDmn3pP3Kv0179t%2FwDgGQfWGN22JnY5mvc2TAWJn19JO6xffJEY2wCgO8NXc%2F22Tsgo1wwKUztT3G7GrWYFrNcrs%2BKur2V6mMl5GeRL57V3IerQjPkXhyo496Cc65v7k3%2BUwcye8lJTtgrdxId274HldvAdFF5X5CUdgoREHjtWceQQBFYYXNSBnd0eeGTGc0VxeTfalYe7a76T3%2B%2F2ogQTjwzPR6nCHPMVlD%2BcDTqW4akPHkBLrgDXRYhUtsJIpfmA7EdcHdP%2FkVKO4JP1qorGuIa9weMwkAVOiQLMyuLOnb2kagwsMe7zgY6pgF2u39J2fEJhpR6hpG4Ur6bDjid6PmWm8ru3jjjqHTN9dKAoUGWDM0vaYmGrrytYqXdHeU6Dn4cT3Zs31QDX68tkUKwG0tr4j%2FOpe29u1kJOug4YkjLEyt1iPQL56zle1Z69UVNRh5YZxaCWCfTzRZRdav3u9pn0OZczINCPUHw3cOcqg%2FfRP68ZPMejASF%2FgEEag70AmQiCMo12NhMvX2UZwO2%2Fj5z&X-Amz-Signature=1d71392c89a644129dfae3acc52033cc0e440d5129be28dec37b7f2b96421bc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WN6B7OG%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWzwpm1b1jWOdWAz%2B0JEIxK%2BOm5X6jCvOMbcqcSW43bgIhAPKmzV65M1ougHDYDVERKqi75bqe3VHihjgDPk5oKXRvKv8DCHcQABoMNjM3NDIzMTgzODA1IgzgsMfyNBAJo%2FXyGQwq3APBqz6d6dpV5t%2BtvuNo2bJxhhVa%2FTTdRQ3P4dyuaqpWLGrwmuILRmIgDvMjjpwPsj%2BhlQDrPzEqHv5hKd6yR1RHS417%2BCVa9RVRqvy6yFbby4%2FKxRGQQplZR0eqnzWedkYeq3hmw4emDUb%2BaxpLEc9txt51UxyxrqWWWkz8seyU6OEZ3mIbHEtCzyeu7gWY%2FAUwiGQgUbBeO%2BzKLo3TASZSuuZILTRMF%2B4HuKZmpKYp8ZcB02ZCe3kZ3Xi%2Fb9Hw%2BDvcf5w1wJ0qTrY72WG1%2FSc39swgX1Pr7JvVR2cVgWsv3QQXrfavLSzAjwzgNi%2B90PW%2FB2eIA%2FcyxnlKuwK0oxUgZbI0X1tXUYHMhXNbrLNyRM4JK9tqVhcDsNTZgzfd6b0Cz%2B7AjagdTteBLGZhKoeYXs4sMeSdDyNLAyAQVEiTBrjo4K9FlrA3BPCi2euq7cElNkr2rCaESMyMHNmwwINVhvJke5OGQrxR%2FUL3csAPpj4QoQuguPGlpwVhq%2BeBOInzM2QporgTlM98PLXCkL2HWcNCX7TAbMRrFbBsOeb%2FTVs7KdGhY%2FphjzWOdRyyAq6Fyib1KpwIRQ1FIYeegjx16Wrxgs2jPt7Qkj3dNRXZ3K16Z%2F8nvpiasCpTLTDMyLvOBjqkAcYJKDg7zjfl12yydFtOX%2F%2B556bx1XX8Kyz0g8F0iLI%2BcuaoUujcdpFvTg%2B75XugcqN8sqarAfTGISlIjod28JXAS%2FfP8CCORByrF%2FWuFP9bT9sP7GJuCQxHvlUPb8bAwmHcWeJ8fIdWaTvIDi1TSpYhqJ5%2Bt9t8NmNCF511mbXpSKMiWZvFCJCTcOorzGX18oLuvvABUJP22h5dgobmgg49SeOo&X-Amz-Signature=31f6c35b7e8db69b50e3ff520ede84e2cea8fe910967496975356d86ac8c6f39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5MPH3VB%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPTiGUovAAbpWW2zpDvPZlXz8S1zdAIeUwPuzZ5dWcbAiBZRg1AV0I0uEp9TGpKYI9gZJo1yBfH%2Fb78rRn%2F8%2BbnOCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMsV%2BrGnwGw5dj61KtKtwDvVHGgtoEgh%2F1QRy%2FxdqAB3c83GTkmAuXfs2sRT8fBBtrfVZD0QhgknckzX5E3RwJt37I0AzbuklJDAdbFjugwE5fxImZoKKatMFSJDlM5AysXdvjonOemzBRPBNEbHx76d5XOWJXO1xgGMsC48v6iqjIHALMn2mB5dpunkFMHs6vaGH3OjfK4zRDtO0tHd2QgysgBho3N8WjNuALdw8IIGT12XrUqO57DFDhVR8NiMvWD9wKSAlxNevWGdMIv2%2BX5WAXNPZBl%2BBDkZL%2Fi8m7%2FUVxd3nqCF0agZdH%2FNvEYgY64vyKUp3w5n6y0prJW9yCljQBVrJF1TeCj3ICeSVSdT6%2BFSpfwkCkSirMUn57%2FX9m2zE8sgZ5RVH7m%2BzQdH8YoeJ2W1nB2w%2Frt5KeUcj8HtnwzF8w%2F6CeAD3i%2BJyVj2OnraeQglyuEqlOh%2Frhen2xK8isn8owkUat1lSLbWd5DXY%2FBVPbr1vwySHyEDuoBV98Q44KPVzqrEJYLvBqkOvpkjDLPEHzHZHPqLOeR9uLv4s8zESl3aukTQnThiXVB90HW5Tr9XsiCf%2FsQB9%2BTAfkc6zu8Hsgt9bIoou2uHi19p%2BqUn4VUDUV7ilngpCbA5lH5gP97lexYx3WSBAw1ce7zgY6pgGm6sgr3Si30bI4L5mxHEgN7tQlHAacTrZD%2F1et2xILxwbfxXBHgi4XoxTcb4DuZl7CAJQAVFonVCwnKaSrN2hKVrJRXTvFkPw2pSsXcfnNDaLO%2FU%2Bl3ZeBCPwarVEANf9oiQ0%2BpLKdB8x5nH50OUU6R8thQdunpy%2BD1S0bK2W9PV%2FuyQhZwoVtzBab3sVGIKUZcWhc9ZEDNIhu90uoDLztWl3se2wh&X-Amz-Signature=84be75fca5fa1bd0ff278f53fa524179cc95df388b387b9bb063a15963dfd7be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WN6B7OG%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWzwpm1b1jWOdWAz%2B0JEIxK%2BOm5X6jCvOMbcqcSW43bgIhAPKmzV65M1ougHDYDVERKqi75bqe3VHihjgDPk5oKXRvKv8DCHcQABoMNjM3NDIzMTgzODA1IgzgsMfyNBAJo%2FXyGQwq3APBqz6d6dpV5t%2BtvuNo2bJxhhVa%2FTTdRQ3P4dyuaqpWLGrwmuILRmIgDvMjjpwPsj%2BhlQDrPzEqHv5hKd6yR1RHS417%2BCVa9RVRqvy6yFbby4%2FKxRGQQplZR0eqnzWedkYeq3hmw4emDUb%2BaxpLEc9txt51UxyxrqWWWkz8seyU6OEZ3mIbHEtCzyeu7gWY%2FAUwiGQgUbBeO%2BzKLo3TASZSuuZILTRMF%2B4HuKZmpKYp8ZcB02ZCe3kZ3Xi%2Fb9Hw%2BDvcf5w1wJ0qTrY72WG1%2FSc39swgX1Pr7JvVR2cVgWsv3QQXrfavLSzAjwzgNi%2B90PW%2FB2eIA%2FcyxnlKuwK0oxUgZbI0X1tXUYHMhXNbrLNyRM4JK9tqVhcDsNTZgzfd6b0Cz%2B7AjagdTteBLGZhKoeYXs4sMeSdDyNLAyAQVEiTBrjo4K9FlrA3BPCi2euq7cElNkr2rCaESMyMHNmwwINVhvJke5OGQrxR%2FUL3csAPpj4QoQuguPGlpwVhq%2BeBOInzM2QporgTlM98PLXCkL2HWcNCX7TAbMRrFbBsOeb%2FTVs7KdGhY%2FphjzWOdRyyAq6Fyib1KpwIRQ1FIYeegjx16Wrxgs2jPt7Qkj3dNRXZ3K16Z%2F8nvpiasCpTLTDMyLvOBjqkAcYJKDg7zjfl12yydFtOX%2F%2B556bx1XX8Kyz0g8F0iLI%2BcuaoUujcdpFvTg%2B75XugcqN8sqarAfTGISlIjod28JXAS%2FfP8CCORByrF%2FWuFP9bT9sP7GJuCQxHvlUPb8bAwmHcWeJ8fIdWaTvIDi1TSpYhqJ5%2Bt9t8NmNCF511mbXpSKMiWZvFCJCTcOorzGX18oLuvvABUJP22h5dgobmgg49SeOo&X-Amz-Signature=1dbccdcf6ec6754fa74783387c745eeebd9079613d661baaa71f37bdde172037&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HFPWPZU%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNSsWQcct2FHlIBXP4CK3nDzNWu3PHsvnSSolUwkKllAiBuZFA7fZyu%2BM5YifzSZVnXfW3ryEgyubLpoDnViH%2BWZir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMx7UimfvRbZ3iegAIKtwDbEL2OuOnYinjAQ5JK9Gh9Nz9y9mF8%2B5HlfqxFqwtVXlbZKhquKdaoe%2B3r1TVq6L7uvMcHHuYw%2BD816yuMkUzDdKDPiiFcCKLB9LufJ%2BNzhhK6hcVK9Rtb8RSppL0k4qtCiJFR25a%2FPMuakKhLTZKQKIHdnxMgO5ncnXC3C75Kid5laQzO%2BZOFU%2FAp2LORzY8zEjNAwdhNOdEIf0r91mPQk44DNL2WX84wqps6zUYTu86ByJjKbQ%2FhrNTjWRqakN%2BHY%2F8OOlrwd%2BGIC1%2Bz%2BB8GH78b8R7FtYIG9Fohj8Ri9ER7iyPgbZW09Gw252q%2FR6ZEIFuSh%2FhHfFOt8VJBJcnru%2FKZYYH6jYT7UmhTrJtZeIzMDMatwm2t75l0VFdzYUSc9pIHkUSguNdy3oeCKKtY%2FmW8cVovXp1rvt%2Bog%2BuQv5CqlCFWEXaC6R6jmhQrW4Pvh6Jpkz3DL64Hb1fmgsEUrvEWTz7%2BD0tfwFHripsFeFLqW1eHVElcRGTDrisK2DA3KsFr1wBK25BfLPIG%2BRWZ8VVZUHnGZrg%2Fk3y1dGD%2BmSrt3qz9EUfXL28o%2Bcs%2BHruji1nKJxbXEJ3HQ0nvDWyucpIM6eJ%2B5pBvmL3rIuMFpLDzNOaiYPDsPwv%2FEkw4cW7zgY6pgEjevhnCtR7xvM35AKejWGn%2BMHdqVbp69m6Tz%2FVzpoyVj%2F0JjpsQ0GHy3wGXaxyBtMMbsGrJ6ARpyKkE%2ByoKWkx6AzojCOAqaMxbHvwxzQVZga%2BzbV2fMVBjJNmTe1HC%2BQppgJ4n2wlMg8JUfEo6DfQPWUffmlYdr4krmhb80rwZUmYaif%2BOaUoccQSZ%2FCnpf93yCTQW10bYQCudXzmhlENMKL3zkJW&X-Amz-Signature=23f4d475d759ed47439eb2407055aa1942a7ad779ffd8010298669dd82a417b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WN6B7OG%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWzwpm1b1jWOdWAz%2B0JEIxK%2BOm5X6jCvOMbcqcSW43bgIhAPKmzV65M1ougHDYDVERKqi75bqe3VHihjgDPk5oKXRvKv8DCHcQABoMNjM3NDIzMTgzODA1IgzgsMfyNBAJo%2FXyGQwq3APBqz6d6dpV5t%2BtvuNo2bJxhhVa%2FTTdRQ3P4dyuaqpWLGrwmuILRmIgDvMjjpwPsj%2BhlQDrPzEqHv5hKd6yR1RHS417%2BCVa9RVRqvy6yFbby4%2FKxRGQQplZR0eqnzWedkYeq3hmw4emDUb%2BaxpLEc9txt51UxyxrqWWWkz8seyU6OEZ3mIbHEtCzyeu7gWY%2FAUwiGQgUbBeO%2BzKLo3TASZSuuZILTRMF%2B4HuKZmpKYp8ZcB02ZCe3kZ3Xi%2Fb9Hw%2BDvcf5w1wJ0qTrY72WG1%2FSc39swgX1Pr7JvVR2cVgWsv3QQXrfavLSzAjwzgNi%2B90PW%2FB2eIA%2FcyxnlKuwK0oxUgZbI0X1tXUYHMhXNbrLNyRM4JK9tqVhcDsNTZgzfd6b0Cz%2B7AjagdTteBLGZhKoeYXs4sMeSdDyNLAyAQVEiTBrjo4K9FlrA3BPCi2euq7cElNkr2rCaESMyMHNmwwINVhvJke5OGQrxR%2FUL3csAPpj4QoQuguPGlpwVhq%2BeBOInzM2QporgTlM98PLXCkL2HWcNCX7TAbMRrFbBsOeb%2FTVs7KdGhY%2FphjzWOdRyyAq6Fyib1KpwIRQ1FIYeegjx16Wrxgs2jPt7Qkj3dNRXZ3K16Z%2F8nvpiasCpTLTDMyLvOBjqkAcYJKDg7zjfl12yydFtOX%2F%2B556bx1XX8Kyz0g8F0iLI%2BcuaoUujcdpFvTg%2B75XugcqN8sqarAfTGISlIjod28JXAS%2FfP8CCORByrF%2FWuFP9bT9sP7GJuCQxHvlUPb8bAwmHcWeJ8fIdWaTvIDi1TSpYhqJ5%2Bt9t8NmNCF511mbXpSKMiWZvFCJCTcOorzGX18oLuvvABUJP22h5dgobmgg49SeOo&X-Amz-Signature=0e03eda06725a3d027a723448433da60eb5d671dbdcbaa0d821623ed3d62a67f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTNTOWLJ%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVG8tAcRS0Zo9mesecpXInIKpYoIJy94WKzlyTKCmPLAiEA1U0b5KGFpkdBs1vjXXM8MUQ%2FW%2Byz2OmXHO50UfoUygQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDA6vYGpLaMwr%2BHM%2FCircA60qPifqxvsKX2yBxLqPAS8IILZStkDaOwLeSoUaojPldAX%2Fw4x2VKBHEq6urZxEeFEPE%2BXR258WKG8X5U5kt6p3T9%2BesQg3q8rY6acl0X%2Biv4bUm%2FgB2DUBoDV7zatk5TWkJXszNogp69MGwAeMj%2BNbveU%2F%2FctURJjDlm%2Fx6zK6v6UMAXpwSGDE6sPDGfZvh53hJPkzil2eAdS%2F%2BseGL1311gzn%2F4TX%2FjINIVf9to7Tg45TagXWhygFwGHvC3R6UgfVrCrtDlEE3nFBkrL69ikZl4PyC6an2Lb4CuPfKJdVYB2afmrcLGBfrXzpgnciGpm8u2VkMDkjYXFROfF8XDxJSVlwkPN3XtAzZ%2BKdUWsbJnjmOrL7eGTAVe5f1eKgdvje9yW82hcPAJATKgUESrqfHZtFlpUo4%2Fra0xPDiT89S%2FYcr0MCjjqP4puHUcaC1ssn4kNo5ZgBZ%2F%2FEbIpyiaQMupg6r9IWvzlM7C9Z%2Fsz%2B3oPgEEqXuKKnKgFKXSw%2FP6u27hpmUC6yXIMAyuvC1EubfbDBnugxnxMHcJfYzczjJN6p0iuSYt6T4LHHA0Du96%2BraGi7uRP36Xh13OEtAdVmF9EwZbMyp%2BLy68E1AVZujQ3Yw3I3nfgjO3WpMMfFu84GOqUB92U3ooydttpxUIggM7KzNvnYYZ0azk5LWyYR1NovkvExHhFLQqzYXk%2FnG8hwaRLNY57W%2BKj0P9%2BmAWPxrx7Q3cGhEQUDpCSWZyjui4%2BG2cLgzh4g2oelc6gglQk1Fo%2BdKww8t79gQBhpmWpqG%2FqsaCv4ZFC9i3SCaKwCOWXgC9SdtRmL1p5h9DfFi4fzQYE9g%2FANauu67N7mv%2FiUV79Tm2An%2F%2B4r&X-Amz-Signature=21c50ffb5b50893ad2143fd40500cb92893565829f9ead9c8a0b4c4ebc21a9f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WN6B7OG%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWzwpm1b1jWOdWAz%2B0JEIxK%2BOm5X6jCvOMbcqcSW43bgIhAPKmzV65M1ougHDYDVERKqi75bqe3VHihjgDPk5oKXRvKv8DCHcQABoMNjM3NDIzMTgzODA1IgzgsMfyNBAJo%2FXyGQwq3APBqz6d6dpV5t%2BtvuNo2bJxhhVa%2FTTdRQ3P4dyuaqpWLGrwmuILRmIgDvMjjpwPsj%2BhlQDrPzEqHv5hKd6yR1RHS417%2BCVa9RVRqvy6yFbby4%2FKxRGQQplZR0eqnzWedkYeq3hmw4emDUb%2BaxpLEc9txt51UxyxrqWWWkz8seyU6OEZ3mIbHEtCzyeu7gWY%2FAUwiGQgUbBeO%2BzKLo3TASZSuuZILTRMF%2B4HuKZmpKYp8ZcB02ZCe3kZ3Xi%2Fb9Hw%2BDvcf5w1wJ0qTrY72WG1%2FSc39swgX1Pr7JvVR2cVgWsv3QQXrfavLSzAjwzgNi%2B90PW%2FB2eIA%2FcyxnlKuwK0oxUgZbI0X1tXUYHMhXNbrLNyRM4JK9tqVhcDsNTZgzfd6b0Cz%2B7AjagdTteBLGZhKoeYXs4sMeSdDyNLAyAQVEiTBrjo4K9FlrA3BPCi2euq7cElNkr2rCaESMyMHNmwwINVhvJke5OGQrxR%2FUL3csAPpj4QoQuguPGlpwVhq%2BeBOInzM2QporgTlM98PLXCkL2HWcNCX7TAbMRrFbBsOeb%2FTVs7KdGhY%2FphjzWOdRyyAq6Fyib1KpwIRQ1FIYeegjx16Wrxgs2jPt7Qkj3dNRXZ3K16Z%2F8nvpiasCpTLTDMyLvOBjqkAcYJKDg7zjfl12yydFtOX%2F%2B556bx1XX8Kyz0g8F0iLI%2BcuaoUujcdpFvTg%2B75XugcqN8sqarAfTGISlIjod28JXAS%2FfP8CCORByrF%2FWuFP9bT9sP7GJuCQxHvlUPb8bAwmHcWeJ8fIdWaTvIDi1TSpYhqJ5%2Bt9t8NmNCF511mbXpSKMiWZvFCJCTcOorzGX18oLuvvABUJP22h5dgobmgg49SeOo&X-Amz-Signature=6390d50d6d6f4824417ce4489c8a128ccb8659cc51a3bf4d21d8fc684891d985&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DHVPERY%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEv2wTeRAL%2BvbPMr9%2BNDV0PqI13CnJ0yhVjrW5tpoLuwIgAh%2BiEEYnpqTuCbyyWBtOZ6mghjRHpN6t8LTGLcqEAygq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDCHoGYpYauHdbRC0jSrcA%2FrhTrFK2OIolQKP%2Fd4Hr%2FJdc1gydIMeRzItB7RLVXJDjmDVSI%2FjxMKLq3Eg6cSGx7y845un%2F4MshnGn2Ks4YBs8p%2FxU%2FjwuwItiXG8TcaViisFmUZ9a18CW6mosrEsLhvsM4Hiv7cPHQYnFEvDBOfrSqnbE8xHxGCTs7pczg80MXtbYQx3aqqfz1pd%2Fz46FzzrhcXLpJV9Ps7szdaMWKtXyciUMrI4UC6pQ2ZB1nSy9Xm1UxhZu6WefE%2FlSP2mXkttSLU4z49NoaIBx%2FgygGO7v2STSjJaTf%2FCRzVFXxi25N9sLnbxiOWKMmtLUu%2BMBR3ZYcoR0N%2F69ikWdhj6IgW2hjf8KbbJH0D4w74rnvxYT0hIA4HzNz3NdcR0H9pnmLMi%2FJQbUy18ffPPpn5ZlNe3V3bIC%2BB7hh9hJLNqPqWjp%2B%2F7nVsiAYm5uUSox%2FzxB%2Fc3BL%2BXHNaArhtayafM0lreoTyGDqqGLyJej4P8gHNHvf93IaPgz%2Bvj6brdh8HYlP87oMmHjTstf%2FQeKJa%2BVAJUKD72lLcWlmh9EIe0cpzQ88%2F46ZcPp%2BwgO37Za5ZPvu94UDML7mVnIHV6ubOleM2%2Bfnk%2BAxeNTLsX1JybkPPscPFzEjKQU8qYgXobNMJvIu84GOqUBSU8K7DjZMbgLjiWBH2oL8kNxuBYj%2FkoZ%2B%2B7EGXtvyWXa%2F16hpfB58wn2uK3%2F2F4yb7bTs6sh%2FqVWerSbZi3AL4fglG4tUb9hdDMkhabpvAKNrgq1%2B9yEKRq1OIj%2B2geRAPAqtnOuPcx%2F0Czwd8V6rpaWgpeo%2BCsgqFVLmjgc4Vuya1Wzwg%2FdSrd6I%2FL5ox0Cv7Fxb2%2BrcNB4PuhF%2Blx%2FBwbOZZTK&X-Amz-Signature=6bffd154611f3f77caa3697d6ef3de4914ab4124cc766777c21ba05e1313dda7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ4R7VYL%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZ5eyE%2Bnpoou0frPvL08Z8T2mynNITpp%2BZ7iMiWdWJjAiAhJnRtz4DjE6L%2BlG9L2nQb52dDlkbsVZ6R%2FtVyWIkifCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMkTR7Xj%2FF0dAW8Fb2KtwD%2BBOV9iGoGmpozQjfJfMipPkCmNe00vqxfzGXNbxTlfHVJTeU39rQmNH9raJQiiujSPVfzaGixAbjryLMa0ieuNt0zpuvN0vBDiEdFBr4LpINgQqY4L3nobv24O4mfCBc6%2F9EvvsNV%2Ff%2F%2FltE9nZ96QhNtbBlAnPUvuozvR4ACxn88MA26Fit266P6%2FFba4%2FWluhiUsk8fDk3ljYnoXS5UwyuOn5Q2rVVMeR5xkex8ztfpQ5jKGcVbvI52J3V9i5R8wcCHXNDzn30i%2FVbOzD0dHe0420TCxbAHQDPaqM%2FWCCnD1mDwBl7F3anzNz%2BSHfx35LdrlNYK1W25CKxNqOAu2J7k3gGGwXV0ssOYR%2FWiTJksgl40n%2Bjyp%2Bs0%2Bn9eiLYubtXC2rq%2BxCL1y3UVHgUhQMEr2JvsQzVF67NdKqgXkx0gKTV1%2FrL6lziQ3lMzgpdyuewXHzGuhX0De%2B8%2BJbkEnqWVuT%2F8HuOVW6aQbQYVCbRUzmfy3miyMEMXX0DnGw486W9I55GOYvDtDZnOlgzMP9RC4FHRW7Xef1NfxYxPPmnC%2F0%2FZdbfV5mEG7Oxp2Wx2VrrScuQ2qMAMuiCjRh46P1e55a5px5mGlwNlv2gY22%2FBWsiafl7jTgaHJ4wr8e7zgY6pgEEU05DeCGjZJGCAyuOA174VUgo13UXIofFzqBM8YgCUwehEMAhywd0LTQbS64qLyCQ3gFkBAzapnTvlHHMcBwbmosqL%2B1mRZtgH0ViYSmCC2Do1m8lPQCHEWMeC87cOhWu%2FMoD5zsLAJWYlgGsG1CNSqSr1l9DE4XhRujYq5EFPZZZHI4GANRwPJZ6AKfPw4Kpmb6jYNBE7PGMJ%2BKtbhGfqznlHVoS&X-Amz-Signature=6d63836b39fa2908a5e8758f76c2fccc16d91a61f87f055653c19c0bfad658c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQATELOI%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbGiwJhp5HpdvbyL0LEvhzxHyo3jHKc8pueWTuX%2ByEDAiAbJ8p9wQBsGtT3RQyRYVlt9jtVfEpNcA13fnjsX1IgPCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMY16X5HnO%2Fl2RLHuCKtwDsTOYVdRPSBOd%2BO2CaRamGslYf%2BrG4d7xPkj2Rae1teNDmAyWqPBhMTHfeXlONAvWu9rktN0OEN1n23G0PwAgc5HzSpHPyEwbRk%2F%2Ba2KmI4297NFXiml0IEABaZ%2FAXfpXKg0bQgBaE5FJdfzG0cXWfFdGaZ98IWfM9TTJZObf87PG%2BxEYRfmrifm19WaZA%2BI5NLg%2FuLLpyx42WUAsPdOeUITMPTk%2Fru2dYqD%2BJy%2FZHEBkv0Rq3LhJTvBRtircWVnezMNVXif38pZ4pykoRWpZ63k0Nnq9vPS5f6J9RUdi2u6u5lfmf9Sk5Qgs1d%2FvDhN%2BiH4axJIhakZwo3GZDIeMIB6kDgoVIhW%2FCM%2BtBSxG2kQL9dYraueVhXQnfVD4PVauKbd9iLt9s%2FgsFKNguFGNQU2VYqbjy2AJh%2FEnmFNf%2FAL9ocG5mzy3XxrA70wdEch4%2B%2F%2B8DiAhSHCNn6ztVTCnM4qlBox02wuJcYgpJKl0D2E5YMFWM%2FS%2BJPUf3aYX3heHex0Gq9WWEKA3vLONTqA4CPPl1EXv%2B3eid0VE1nn3RFsSM8JGmVH240ywtNE%2FRXfLQdl8sbz1bDiWiqUbfLyw%2F3UQW5ywqTViXZR3WRIakbJsKoU8L%2F5PCAI99sswgsa7zgY6pgEE8NV2fF5VYXg7ngx1MwJeCrI7DX1V6e2krkUbyKYPAaBXYkBpoajab%2FjUfxRlNZq4bOl0lLYFtuyGVNYK52vPK8Hi8S0KwDoYkgzr9VM4P7TJPJrvucEUsu0iAPaWnNuKeENWYviHLXxM1E%2BVYCBnDe8dtTmHz45JpFopQV%2BESHvEqb32SqKnbWXH5ipHAcU%2BLFAoLlJByVLVIe32ZKdyitYmewgV&X-Amz-Signature=dcdc1178eacfdcb6b174a9516a671016d89e63a12bc7e42bb4553aaf00b5b99f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WN6B7OG%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWzwpm1b1jWOdWAz%2B0JEIxK%2BOm5X6jCvOMbcqcSW43bgIhAPKmzV65M1ougHDYDVERKqi75bqe3VHihjgDPk5oKXRvKv8DCHcQABoMNjM3NDIzMTgzODA1IgzgsMfyNBAJo%2FXyGQwq3APBqz6d6dpV5t%2BtvuNo2bJxhhVa%2FTTdRQ3P4dyuaqpWLGrwmuILRmIgDvMjjpwPsj%2BhlQDrPzEqHv5hKd6yR1RHS417%2BCVa9RVRqvy6yFbby4%2FKxRGQQplZR0eqnzWedkYeq3hmw4emDUb%2BaxpLEc9txt51UxyxrqWWWkz8seyU6OEZ3mIbHEtCzyeu7gWY%2FAUwiGQgUbBeO%2BzKLo3TASZSuuZILTRMF%2B4HuKZmpKYp8ZcB02ZCe3kZ3Xi%2Fb9Hw%2BDvcf5w1wJ0qTrY72WG1%2FSc39swgX1Pr7JvVR2cVgWsv3QQXrfavLSzAjwzgNi%2B90PW%2FB2eIA%2FcyxnlKuwK0oxUgZbI0X1tXUYHMhXNbrLNyRM4JK9tqVhcDsNTZgzfd6b0Cz%2B7AjagdTteBLGZhKoeYXs4sMeSdDyNLAyAQVEiTBrjo4K9FlrA3BPCi2euq7cElNkr2rCaESMyMHNmwwINVhvJke5OGQrxR%2FUL3csAPpj4QoQuguPGlpwVhq%2BeBOInzM2QporgTlM98PLXCkL2HWcNCX7TAbMRrFbBsOeb%2FTVs7KdGhY%2FphjzWOdRyyAq6Fyib1KpwIRQ1FIYeegjx16Wrxgs2jPt7Qkj3dNRXZ3K16Z%2F8nvpiasCpTLTDMyLvOBjqkAcYJKDg7zjfl12yydFtOX%2F%2B556bx1XX8Kyz0g8F0iLI%2BcuaoUujcdpFvTg%2B75XugcqN8sqarAfTGISlIjod28JXAS%2FfP8CCORByrF%2FWuFP9bT9sP7GJuCQxHvlUPb8bAwmHcWeJ8fIdWaTvIDi1TSpYhqJ5%2Bt9t8NmNCF511mbXpSKMiWZvFCJCTcOorzGX18oLuvvABUJP22h5dgobmgg49SeOo&X-Amz-Signature=4deed91d452577721a000e3afcc8ddfea6283453d09a58319dbdb9e4e3af6d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WN6B7OG%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWzwpm1b1jWOdWAz%2B0JEIxK%2BOm5X6jCvOMbcqcSW43bgIhAPKmzV65M1ougHDYDVERKqi75bqe3VHihjgDPk5oKXRvKv8DCHcQABoMNjM3NDIzMTgzODA1IgzgsMfyNBAJo%2FXyGQwq3APBqz6d6dpV5t%2BtvuNo2bJxhhVa%2FTTdRQ3P4dyuaqpWLGrwmuILRmIgDvMjjpwPsj%2BhlQDrPzEqHv5hKd6yR1RHS417%2BCVa9RVRqvy6yFbby4%2FKxRGQQplZR0eqnzWedkYeq3hmw4emDUb%2BaxpLEc9txt51UxyxrqWWWkz8seyU6OEZ3mIbHEtCzyeu7gWY%2FAUwiGQgUbBeO%2BzKLo3TASZSuuZILTRMF%2B4HuKZmpKYp8ZcB02ZCe3kZ3Xi%2Fb9Hw%2BDvcf5w1wJ0qTrY72WG1%2FSc39swgX1Pr7JvVR2cVgWsv3QQXrfavLSzAjwzgNi%2B90PW%2FB2eIA%2FcyxnlKuwK0oxUgZbI0X1tXUYHMhXNbrLNyRM4JK9tqVhcDsNTZgzfd6b0Cz%2B7AjagdTteBLGZhKoeYXs4sMeSdDyNLAyAQVEiTBrjo4K9FlrA3BPCi2euq7cElNkr2rCaESMyMHNmwwINVhvJke5OGQrxR%2FUL3csAPpj4QoQuguPGlpwVhq%2BeBOInzM2QporgTlM98PLXCkL2HWcNCX7TAbMRrFbBsOeb%2FTVs7KdGhY%2FphjzWOdRyyAq6Fyib1KpwIRQ1FIYeegjx16Wrxgs2jPt7Qkj3dNRXZ3K16Z%2F8nvpiasCpTLTDMyLvOBjqkAcYJKDg7zjfl12yydFtOX%2F%2B556bx1XX8Kyz0g8F0iLI%2BcuaoUujcdpFvTg%2B75XugcqN8sqarAfTGISlIjod28JXAS%2FfP8CCORByrF%2FWuFP9bT9sP7GJuCQxHvlUPb8bAwmHcWeJ8fIdWaTvIDi1TSpYhqJ5%2Bt9t8NmNCF511mbXpSKMiWZvFCJCTcOorzGX18oLuvvABUJP22h5dgobmgg49SeOo&X-Amz-Signature=33c91d37826653341d9cab01490bba6148f862a668140a1aec82f7fd3e7ea9a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REGGOJ73%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWtew6TJNMjQDcEqfHStGIF1yaD8Eh79HoJqRnWgnQ1QIgWi9Gqzl3dpbNrGRtiMLzfZ%2BxIxYph71mCJOMADx4SeIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOPtPTAlkQsfezi34CrcA%2BlZOwFVKLPcDWjJQl8%2BnZcy8F7RdvxDO01vWYfE3J%2BNQBN2zIZspP6UXCHz11iMO%2BiV%2Bp4yH84gDkwwsWoCGWXVbfzgSng5ffneJ9Iu4xy3tqazniYR%2Fpk9f0G%2FMx3jTj2S7O2ReJE0Jl%2FcPSqlHkbnwaO%2FBNLf%2BXndzUnFfSQUyVSAlpmnwEC7E9U21%2FIXDkImCJ5js7l7rF%2BQanylCxtFKXq2r943jSIBKjDTSkHioH2lw0B1%2F16Dqj1909t5RfvPggfrzrp8NKLtBkL0gyky4Lr8zGrG3kBwNqCBoQ%2BozXeelGAjeswRuQ4bRWLbmycERT1eSpeJiCIFtS7ygm9WxqFPYmeRQvbuiE3gXjUQkomWwLMZSdjjkdtoWdSPR1JR5JA2D5NmbWLcuEHGAD3XyZP4T0P%2FApkWHgSggJNfpD9%2BwBtIxTMz7ZvJo4gc8sxWKZKeoTN1P8GhESntwuiOrg3AoLWRLqZIeM2H2vHSb4w8DDXfCWTnvP9TPO3x0hyAqv4YYbbddeWasJqQGt1yGEhu2DlfKU4vuU%2FjGSVaMypa38itYRHEYocP5POcDGTOsznoLheuuzdCIBmg6h1bPmOP8thWlrI5zwIZcVE4nZj7q1lKYjg87vg2MIfIu84GOqUBxRpDlzxbrVtOkDujNYXwJY2MjnFKsctDE2%2B9n3ydK2Efs4Gx2pEM7fRHVQxH%2BWCzJZSoT7c%2FHl65rZ%2F0xeWeZbkys2ZJyFib9DkljNH2TF0%2FjCGeMNlP8GWnB6XT6Yy%2FE9TGvLGIGA56uYHkKf9M3ZIjPfGSYhccLHNjhUU0zSbWrX2Qlr%2BbGzNEvieMDh2XTO81n3uFBiPc3jNwHiRTcYMtzA4i&X-Amz-Signature=731af5d504063d2f541b58c216460f34ae20aca7e6d07841cc5a4e193a0a0f57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REGGOJ73%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWtew6TJNMjQDcEqfHStGIF1yaD8Eh79HoJqRnWgnQ1QIgWi9Gqzl3dpbNrGRtiMLzfZ%2BxIxYph71mCJOMADx4SeIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOPtPTAlkQsfezi34CrcA%2BlZOwFVKLPcDWjJQl8%2BnZcy8F7RdvxDO01vWYfE3J%2BNQBN2zIZspP6UXCHz11iMO%2BiV%2Bp4yH84gDkwwsWoCGWXVbfzgSng5ffneJ9Iu4xy3tqazniYR%2Fpk9f0G%2FMx3jTj2S7O2ReJE0Jl%2FcPSqlHkbnwaO%2FBNLf%2BXndzUnFfSQUyVSAlpmnwEC7E9U21%2FIXDkImCJ5js7l7rF%2BQanylCxtFKXq2r943jSIBKjDTSkHioH2lw0B1%2F16Dqj1909t5RfvPggfrzrp8NKLtBkL0gyky4Lr8zGrG3kBwNqCBoQ%2BozXeelGAjeswRuQ4bRWLbmycERT1eSpeJiCIFtS7ygm9WxqFPYmeRQvbuiE3gXjUQkomWwLMZSdjjkdtoWdSPR1JR5JA2D5NmbWLcuEHGAD3XyZP4T0P%2FApkWHgSggJNfpD9%2BwBtIxTMz7ZvJo4gc8sxWKZKeoTN1P8GhESntwuiOrg3AoLWRLqZIeM2H2vHSb4w8DDXfCWTnvP9TPO3x0hyAqv4YYbbddeWasJqQGt1yGEhu2DlfKU4vuU%2FjGSVaMypa38itYRHEYocP5POcDGTOsznoLheuuzdCIBmg6h1bPmOP8thWlrI5zwIZcVE4nZj7q1lKYjg87vg2MIfIu84GOqUBxRpDlzxbrVtOkDujNYXwJY2MjnFKsctDE2%2B9n3ydK2Efs4Gx2pEM7fRHVQxH%2BWCzJZSoT7c%2FHl65rZ%2F0xeWeZbkys2ZJyFib9DkljNH2TF0%2FjCGeMNlP8GWnB6XT6Yy%2FE9TGvLGIGA56uYHkKf9M3ZIjPfGSYhccLHNjhUU0zSbWrX2Qlr%2BbGzNEvieMDh2XTO81n3uFBiPc3jNwHiRTcYMtzA4i&X-Amz-Signature=76e48e62d2ccafe07dddd719b6c759c22d7d42af38394d29379d4c2f32108472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REGGOJ73%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWtew6TJNMjQDcEqfHStGIF1yaD8Eh79HoJqRnWgnQ1QIgWi9Gqzl3dpbNrGRtiMLzfZ%2BxIxYph71mCJOMADx4SeIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOPtPTAlkQsfezi34CrcA%2BlZOwFVKLPcDWjJQl8%2BnZcy8F7RdvxDO01vWYfE3J%2BNQBN2zIZspP6UXCHz11iMO%2BiV%2Bp4yH84gDkwwsWoCGWXVbfzgSng5ffneJ9Iu4xy3tqazniYR%2Fpk9f0G%2FMx3jTj2S7O2ReJE0Jl%2FcPSqlHkbnwaO%2FBNLf%2BXndzUnFfSQUyVSAlpmnwEC7E9U21%2FIXDkImCJ5js7l7rF%2BQanylCxtFKXq2r943jSIBKjDTSkHioH2lw0B1%2F16Dqj1909t5RfvPggfrzrp8NKLtBkL0gyky4Lr8zGrG3kBwNqCBoQ%2BozXeelGAjeswRuQ4bRWLbmycERT1eSpeJiCIFtS7ygm9WxqFPYmeRQvbuiE3gXjUQkomWwLMZSdjjkdtoWdSPR1JR5JA2D5NmbWLcuEHGAD3XyZP4T0P%2FApkWHgSggJNfpD9%2BwBtIxTMz7ZvJo4gc8sxWKZKeoTN1P8GhESntwuiOrg3AoLWRLqZIeM2H2vHSb4w8DDXfCWTnvP9TPO3x0hyAqv4YYbbddeWasJqQGt1yGEhu2DlfKU4vuU%2FjGSVaMypa38itYRHEYocP5POcDGTOsznoLheuuzdCIBmg6h1bPmOP8thWlrI5zwIZcVE4nZj7q1lKYjg87vg2MIfIu84GOqUBxRpDlzxbrVtOkDujNYXwJY2MjnFKsctDE2%2B9n3ydK2Efs4Gx2pEM7fRHVQxH%2BWCzJZSoT7c%2FHl65rZ%2F0xeWeZbkys2ZJyFib9DkljNH2TF0%2FjCGeMNlP8GWnB6XT6Yy%2FE9TGvLGIGA56uYHkKf9M3ZIjPfGSYhccLHNjhUU0zSbWrX2Qlr%2BbGzNEvieMDh2XTO81n3uFBiPc3jNwHiRTcYMtzA4i&X-Amz-Signature=64264ceea2cfed4c1b2733e64abbf2bdb8cd402d1160aae7b3f90b358b6d12a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REGGOJ73%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWtew6TJNMjQDcEqfHStGIF1yaD8Eh79HoJqRnWgnQ1QIgWi9Gqzl3dpbNrGRtiMLzfZ%2BxIxYph71mCJOMADx4SeIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOPtPTAlkQsfezi34CrcA%2BlZOwFVKLPcDWjJQl8%2BnZcy8F7RdvxDO01vWYfE3J%2BNQBN2zIZspP6UXCHz11iMO%2BiV%2Bp4yH84gDkwwsWoCGWXVbfzgSng5ffneJ9Iu4xy3tqazniYR%2Fpk9f0G%2FMx3jTj2S7O2ReJE0Jl%2FcPSqlHkbnwaO%2FBNLf%2BXndzUnFfSQUyVSAlpmnwEC7E9U21%2FIXDkImCJ5js7l7rF%2BQanylCxtFKXq2r943jSIBKjDTSkHioH2lw0B1%2F16Dqj1909t5RfvPggfrzrp8NKLtBkL0gyky4Lr8zGrG3kBwNqCBoQ%2BozXeelGAjeswRuQ4bRWLbmycERT1eSpeJiCIFtS7ygm9WxqFPYmeRQvbuiE3gXjUQkomWwLMZSdjjkdtoWdSPR1JR5JA2D5NmbWLcuEHGAD3XyZP4T0P%2FApkWHgSggJNfpD9%2BwBtIxTMz7ZvJo4gc8sxWKZKeoTN1P8GhESntwuiOrg3AoLWRLqZIeM2H2vHSb4w8DDXfCWTnvP9TPO3x0hyAqv4YYbbddeWasJqQGt1yGEhu2DlfKU4vuU%2FjGSVaMypa38itYRHEYocP5POcDGTOsznoLheuuzdCIBmg6h1bPmOP8thWlrI5zwIZcVE4nZj7q1lKYjg87vg2MIfIu84GOqUBxRpDlzxbrVtOkDujNYXwJY2MjnFKsctDE2%2B9n3ydK2Efs4Gx2pEM7fRHVQxH%2BWCzJZSoT7c%2FHl65rZ%2F0xeWeZbkys2ZJyFib9DkljNH2TF0%2FjCGeMNlP8GWnB6XT6Yy%2FE9TGvLGIGA56uYHkKf9M3ZIjPfGSYhccLHNjhUU0zSbWrX2Qlr%2BbGzNEvieMDh2XTO81n3uFBiPc3jNwHiRTcYMtzA4i&X-Amz-Signature=d0bc99d35ad2ee6af3b65e554c57c93629e486ddc41ca66f4fec668fb702a057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDSY5465%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDytcer82kjdNavm0UACRto66F1p6GFigwKAPyRVYIKtAIhAJ0WBVZ4T34d%2FQsfEi1CsbmYPtGcAPUVe0O5HgLO4YVuKv8DCHcQABoMNjM3NDIzMTgzODA1IgwiwoE4FvyzL54J7w8q3AOqIcdkYW0zCv%2BWk1k9Cmpj7zRnjjeC4pXb0ywLImfhlyAzfwsesGYFEqWk2UvqVU81xTNOwmQtNO4CEf8FhcvmBwxshPfGYKsF39cgszrQ19a6ww58kEr1KPBjsjmvCut7G8qyHseCg6nO112tSBMiE1OYLi9TMQdtAJpkgiN98dTSwiaRrNkhKV7U2%2FUcYoRJfRGsDQupVjCjCgN%2F76dzFKNZq1Ou%2FWeHAfyKwJ1DQvh6osZTkd81I44wp9tVaEiLZ1sf5tPIiptmuq2%2Bpu5yYpUb8hXfg4psAQ%2BCo2F%2FDBk871AeHgeCZDJ3PaSixHPGvnbjlVqOk4XKFs8v0cdCAmjnaKxzw2ayTyyIEtEvPz4lso2IPOc2NQses%2FPCc8vVOlnAdumoEpRIHfLgafncswhUxEbKfs7kti9f67VERLieKpgR%2BvgEh5wUmgzPHvPJO2FuCXmdTAoxdfe1ku6VVGG3ZdZ55n9sGlXrUJn%2FOWiA59ESyKBsS2q9vgis9aIQc7aDdgY0jUdP3CP8LY926CMymEoj9BK0H3ABA4DreeESddX%2FBSNPyRAnAkymb5KEaBZAJQaKaD%2BLARzjqTku0ewDjmIzWCX1MAV%2FsUwzCman8Pz7xmblQKeTrzCgyLvOBjqkAd2I%2FP%2B8yLkuzuapsderZE8MolvAMzlSuXwnSN2DnBI2k71maEY7WUfPVWxRYCsiu91zQzmXAaZXcrUVzye3RcvW3Re%2FiQBH5h%2BxxbL8cIzLixeZFfuITqIpfmLZA3OTCr%2FP1MR7KuYQqsN0gOBwXvxh3EEJTGTkm4FNGHrvieWBdFQj52ao3PaTWhOr1RnBzBzdOgnV2LNFKmp3LGC1LGepVMd9&X-Amz-Signature=d36cd11582d5c081695e70bdee077e150d69eb41d75c3009358815cc60e45fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REGGOJ73%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWtew6TJNMjQDcEqfHStGIF1yaD8Eh79HoJqRnWgnQ1QIgWi9Gqzl3dpbNrGRtiMLzfZ%2BxIxYph71mCJOMADx4SeIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOPtPTAlkQsfezi34CrcA%2BlZOwFVKLPcDWjJQl8%2BnZcy8F7RdvxDO01vWYfE3J%2BNQBN2zIZspP6UXCHz11iMO%2BiV%2Bp4yH84gDkwwsWoCGWXVbfzgSng5ffneJ9Iu4xy3tqazniYR%2Fpk9f0G%2FMx3jTj2S7O2ReJE0Jl%2FcPSqlHkbnwaO%2FBNLf%2BXndzUnFfSQUyVSAlpmnwEC7E9U21%2FIXDkImCJ5js7l7rF%2BQanylCxtFKXq2r943jSIBKjDTSkHioH2lw0B1%2F16Dqj1909t5RfvPggfrzrp8NKLtBkL0gyky4Lr8zGrG3kBwNqCBoQ%2BozXeelGAjeswRuQ4bRWLbmycERT1eSpeJiCIFtS7ygm9WxqFPYmeRQvbuiE3gXjUQkomWwLMZSdjjkdtoWdSPR1JR5JA2D5NmbWLcuEHGAD3XyZP4T0P%2FApkWHgSggJNfpD9%2BwBtIxTMz7ZvJo4gc8sxWKZKeoTN1P8GhESntwuiOrg3AoLWRLqZIeM2H2vHSb4w8DDXfCWTnvP9TPO3x0hyAqv4YYbbddeWasJqQGt1yGEhu2DlfKU4vuU%2FjGSVaMypa38itYRHEYocP5POcDGTOsznoLheuuzdCIBmg6h1bPmOP8thWlrI5zwIZcVE4nZj7q1lKYjg87vg2MIfIu84GOqUBxRpDlzxbrVtOkDujNYXwJY2MjnFKsctDE2%2B9n3ydK2Efs4Gx2pEM7fRHVQxH%2BWCzJZSoT7c%2FHl65rZ%2F0xeWeZbkys2ZJyFib9DkljNH2TF0%2FjCGeMNlP8GWnB6XT6Yy%2FE9TGvLGIGA56uYHkKf9M3ZIjPfGSYhccLHNjhUU0zSbWrX2Qlr%2BbGzNEvieMDh2XTO81n3uFBiPc3jNwHiRTcYMtzA4i&X-Amz-Signature=4054363343f1e3d515525964c6c408fda1c1e62da633360738dfd8cf85b27491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REGGOJ73%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWtew6TJNMjQDcEqfHStGIF1yaD8Eh79HoJqRnWgnQ1QIgWi9Gqzl3dpbNrGRtiMLzfZ%2BxIxYph71mCJOMADx4SeIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOPtPTAlkQsfezi34CrcA%2BlZOwFVKLPcDWjJQl8%2BnZcy8F7RdvxDO01vWYfE3J%2BNQBN2zIZspP6UXCHz11iMO%2BiV%2Bp4yH84gDkwwsWoCGWXVbfzgSng5ffneJ9Iu4xy3tqazniYR%2Fpk9f0G%2FMx3jTj2S7O2ReJE0Jl%2FcPSqlHkbnwaO%2FBNLf%2BXndzUnFfSQUyVSAlpmnwEC7E9U21%2FIXDkImCJ5js7l7rF%2BQanylCxtFKXq2r943jSIBKjDTSkHioH2lw0B1%2F16Dqj1909t5RfvPggfrzrp8NKLtBkL0gyky4Lr8zGrG3kBwNqCBoQ%2BozXeelGAjeswRuQ4bRWLbmycERT1eSpeJiCIFtS7ygm9WxqFPYmeRQvbuiE3gXjUQkomWwLMZSdjjkdtoWdSPR1JR5JA2D5NmbWLcuEHGAD3XyZP4T0P%2FApkWHgSggJNfpD9%2BwBtIxTMz7ZvJo4gc8sxWKZKeoTN1P8GhESntwuiOrg3AoLWRLqZIeM2H2vHSb4w8DDXfCWTnvP9TPO3x0hyAqv4YYbbddeWasJqQGt1yGEhu2DlfKU4vuU%2FjGSVaMypa38itYRHEYocP5POcDGTOsznoLheuuzdCIBmg6h1bPmOP8thWlrI5zwIZcVE4nZj7q1lKYjg87vg2MIfIu84GOqUBxRpDlzxbrVtOkDujNYXwJY2MjnFKsctDE2%2B9n3ydK2Efs4Gx2pEM7fRHVQxH%2BWCzJZSoT7c%2FHl65rZ%2F0xeWeZbkys2ZJyFib9DkljNH2TF0%2FjCGeMNlP8GWnB6XT6Yy%2FE9TGvLGIGA56uYHkKf9M3ZIjPfGSYhccLHNjhUU0zSbWrX2Qlr%2BbGzNEvieMDh2XTO81n3uFBiPc3jNwHiRTcYMtzA4i&X-Amz-Signature=471e9f744c59721156ca7a73359afd7e2a22a3315e6f8f5c286bbaf887bb4ccc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REGGOJ73%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWtew6TJNMjQDcEqfHStGIF1yaD8Eh79HoJqRnWgnQ1QIgWi9Gqzl3dpbNrGRtiMLzfZ%2BxIxYph71mCJOMADx4SeIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOPtPTAlkQsfezi34CrcA%2BlZOwFVKLPcDWjJQl8%2BnZcy8F7RdvxDO01vWYfE3J%2BNQBN2zIZspP6UXCHz11iMO%2BiV%2Bp4yH84gDkwwsWoCGWXVbfzgSng5ffneJ9Iu4xy3tqazniYR%2Fpk9f0G%2FMx3jTj2S7O2ReJE0Jl%2FcPSqlHkbnwaO%2FBNLf%2BXndzUnFfSQUyVSAlpmnwEC7E9U21%2FIXDkImCJ5js7l7rF%2BQanylCxtFKXq2r943jSIBKjDTSkHioH2lw0B1%2F16Dqj1909t5RfvPggfrzrp8NKLtBkL0gyky4Lr8zGrG3kBwNqCBoQ%2BozXeelGAjeswRuQ4bRWLbmycERT1eSpeJiCIFtS7ygm9WxqFPYmeRQvbuiE3gXjUQkomWwLMZSdjjkdtoWdSPR1JR5JA2D5NmbWLcuEHGAD3XyZP4T0P%2FApkWHgSggJNfpD9%2BwBtIxTMz7ZvJo4gc8sxWKZKeoTN1P8GhESntwuiOrg3AoLWRLqZIeM2H2vHSb4w8DDXfCWTnvP9TPO3x0hyAqv4YYbbddeWasJqQGt1yGEhu2DlfKU4vuU%2FjGSVaMypa38itYRHEYocP5POcDGTOsznoLheuuzdCIBmg6h1bPmOP8thWlrI5zwIZcVE4nZj7q1lKYjg87vg2MIfIu84GOqUBxRpDlzxbrVtOkDujNYXwJY2MjnFKsctDE2%2B9n3ydK2Efs4Gx2pEM7fRHVQxH%2BWCzJZSoT7c%2FHl65rZ%2F0xeWeZbkys2ZJyFib9DkljNH2TF0%2FjCGeMNlP8GWnB6XT6Yy%2FE9TGvLGIGA56uYHkKf9M3ZIjPfGSYhccLHNjhUU0zSbWrX2Qlr%2BbGzNEvieMDh2XTO81n3uFBiPc3jNwHiRTcYMtzA4i&X-Amz-Signature=64264ceea2cfed4c1b2733e64abbf2bdb8cd402d1160aae7b3f90b358b6d12a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REGGOJ73%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWtew6TJNMjQDcEqfHStGIF1yaD8Eh79HoJqRnWgnQ1QIgWi9Gqzl3dpbNrGRtiMLzfZ%2BxIxYph71mCJOMADx4SeIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOPtPTAlkQsfezi34CrcA%2BlZOwFVKLPcDWjJQl8%2BnZcy8F7RdvxDO01vWYfE3J%2BNQBN2zIZspP6UXCHz11iMO%2BiV%2Bp4yH84gDkwwsWoCGWXVbfzgSng5ffneJ9Iu4xy3tqazniYR%2Fpk9f0G%2FMx3jTj2S7O2ReJE0Jl%2FcPSqlHkbnwaO%2FBNLf%2BXndzUnFfSQUyVSAlpmnwEC7E9U21%2FIXDkImCJ5js7l7rF%2BQanylCxtFKXq2r943jSIBKjDTSkHioH2lw0B1%2F16Dqj1909t5RfvPggfrzrp8NKLtBkL0gyky4Lr8zGrG3kBwNqCBoQ%2BozXeelGAjeswRuQ4bRWLbmycERT1eSpeJiCIFtS7ygm9WxqFPYmeRQvbuiE3gXjUQkomWwLMZSdjjkdtoWdSPR1JR5JA2D5NmbWLcuEHGAD3XyZP4T0P%2FApkWHgSggJNfpD9%2BwBtIxTMz7ZvJo4gc8sxWKZKeoTN1P8GhESntwuiOrg3AoLWRLqZIeM2H2vHSb4w8DDXfCWTnvP9TPO3x0hyAqv4YYbbddeWasJqQGt1yGEhu2DlfKU4vuU%2FjGSVaMypa38itYRHEYocP5POcDGTOsznoLheuuzdCIBmg6h1bPmOP8thWlrI5zwIZcVE4nZj7q1lKYjg87vg2MIfIu84GOqUBxRpDlzxbrVtOkDujNYXwJY2MjnFKsctDE2%2B9n3ydK2Efs4Gx2pEM7fRHVQxH%2BWCzJZSoT7c%2FHl65rZ%2F0xeWeZbkys2ZJyFib9DkljNH2TF0%2FjCGeMNlP8GWnB6XT6Yy%2FE9TGvLGIGA56uYHkKf9M3ZIjPfGSYhccLHNjhUU0zSbWrX2Qlr%2BbGzNEvieMDh2XTO81n3uFBiPc3jNwHiRTcYMtzA4i&X-Amz-Signature=a150c412b1a8ac15ef4847d2c9a509e4d581e7ba4597b9231c7ad5e462b716f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REGGOJ73%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWtew6TJNMjQDcEqfHStGIF1yaD8Eh79HoJqRnWgnQ1QIgWi9Gqzl3dpbNrGRtiMLzfZ%2BxIxYph71mCJOMADx4SeIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOPtPTAlkQsfezi34CrcA%2BlZOwFVKLPcDWjJQl8%2BnZcy8F7RdvxDO01vWYfE3J%2BNQBN2zIZspP6UXCHz11iMO%2BiV%2Bp4yH84gDkwwsWoCGWXVbfzgSng5ffneJ9Iu4xy3tqazniYR%2Fpk9f0G%2FMx3jTj2S7O2ReJE0Jl%2FcPSqlHkbnwaO%2FBNLf%2BXndzUnFfSQUyVSAlpmnwEC7E9U21%2FIXDkImCJ5js7l7rF%2BQanylCxtFKXq2r943jSIBKjDTSkHioH2lw0B1%2F16Dqj1909t5RfvPggfrzrp8NKLtBkL0gyky4Lr8zGrG3kBwNqCBoQ%2BozXeelGAjeswRuQ4bRWLbmycERT1eSpeJiCIFtS7ygm9WxqFPYmeRQvbuiE3gXjUQkomWwLMZSdjjkdtoWdSPR1JR5JA2D5NmbWLcuEHGAD3XyZP4T0P%2FApkWHgSggJNfpD9%2BwBtIxTMz7ZvJo4gc8sxWKZKeoTN1P8GhESntwuiOrg3AoLWRLqZIeM2H2vHSb4w8DDXfCWTnvP9TPO3x0hyAqv4YYbbddeWasJqQGt1yGEhu2DlfKU4vuU%2FjGSVaMypa38itYRHEYocP5POcDGTOsznoLheuuzdCIBmg6h1bPmOP8thWlrI5zwIZcVE4nZj7q1lKYjg87vg2MIfIu84GOqUBxRpDlzxbrVtOkDujNYXwJY2MjnFKsctDE2%2B9n3ydK2Efs4Gx2pEM7fRHVQxH%2BWCzJZSoT7c%2FHl65rZ%2F0xeWeZbkys2ZJyFib9DkljNH2TF0%2FjCGeMNlP8GWnB6XT6Yy%2FE9TGvLGIGA56uYHkKf9M3ZIjPfGSYhccLHNjhUU0zSbWrX2Qlr%2BbGzNEvieMDh2XTO81n3uFBiPc3jNwHiRTcYMtzA4i&X-Amz-Signature=89ccb2d204750b741407daa73d746a9c192d2deebbd7a19c69d4d9dcf91bdb9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REGGOJ73%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWtew6TJNMjQDcEqfHStGIF1yaD8Eh79HoJqRnWgnQ1QIgWi9Gqzl3dpbNrGRtiMLzfZ%2BxIxYph71mCJOMADx4SeIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOPtPTAlkQsfezi34CrcA%2BlZOwFVKLPcDWjJQl8%2BnZcy8F7RdvxDO01vWYfE3J%2BNQBN2zIZspP6UXCHz11iMO%2BiV%2Bp4yH84gDkwwsWoCGWXVbfzgSng5ffneJ9Iu4xy3tqazniYR%2Fpk9f0G%2FMx3jTj2S7O2ReJE0Jl%2FcPSqlHkbnwaO%2FBNLf%2BXndzUnFfSQUyVSAlpmnwEC7E9U21%2FIXDkImCJ5js7l7rF%2BQanylCxtFKXq2r943jSIBKjDTSkHioH2lw0B1%2F16Dqj1909t5RfvPggfrzrp8NKLtBkL0gyky4Lr8zGrG3kBwNqCBoQ%2BozXeelGAjeswRuQ4bRWLbmycERT1eSpeJiCIFtS7ygm9WxqFPYmeRQvbuiE3gXjUQkomWwLMZSdjjkdtoWdSPR1JR5JA2D5NmbWLcuEHGAD3XyZP4T0P%2FApkWHgSggJNfpD9%2BwBtIxTMz7ZvJo4gc8sxWKZKeoTN1P8GhESntwuiOrg3AoLWRLqZIeM2H2vHSb4w8DDXfCWTnvP9TPO3x0hyAqv4YYbbddeWasJqQGt1yGEhu2DlfKU4vuU%2FjGSVaMypa38itYRHEYocP5POcDGTOsznoLheuuzdCIBmg6h1bPmOP8thWlrI5zwIZcVE4nZj7q1lKYjg87vg2MIfIu84GOqUBxRpDlzxbrVtOkDujNYXwJY2MjnFKsctDE2%2B9n3ydK2Efs4Gx2pEM7fRHVQxH%2BWCzJZSoT7c%2FHl65rZ%2F0xeWeZbkys2ZJyFib9DkljNH2TF0%2FjCGeMNlP8GWnB6XT6Yy%2FE9TGvLGIGA56uYHkKf9M3ZIjPfGSYhccLHNjhUU0zSbWrX2Qlr%2BbGzNEvieMDh2XTO81n3uFBiPc3jNwHiRTcYMtzA4i&X-Amz-Signature=08a9c388cd8a002a1e4983ffe874195cccc96cf17b881da5d108d6a7e2618723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


