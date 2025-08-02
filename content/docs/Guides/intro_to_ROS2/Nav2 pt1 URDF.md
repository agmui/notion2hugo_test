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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UF7GSIT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYCoYa5B%2F8CGDdH8t4UuX0Nyjp0XZDmVbfyl8rV9r4eAiBHn41ILRwCVbTghfyfdxMAUP1KOqMIVvoNRW8ElWC15ir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMD7SQ8mJySo6RL21WKtwDDwd0nkPm4NHyzD1ShwCsslqpiNi7z2uK%2FwiwmgO%2B97LKXILoAmFHV7OekPYzf%2FYyH%2BoI9vGi7gR2Jz%2FERz0nK0OQ%2Fzfk4h2ba2i7KTWfioqOjMMOpUYwioPn9CI6WMJrFtGA9eoyJTQJuxqaYDxGBlpEdPqW0vXuFeuNidDYaeCEknYZDJ3ediAPpG2NC3QxChGZbCo%2BA1arcCTxPUGMjSw3LsaSGmrKUtB2lqe%2FyydUJrj5SoFAWLDBgz75Cw2E6svCemPIT4sb1rlx6VhauIgYnYIlbQ0yzyWho1ChIXVmLMvRfmGH9p%2Fu9pRpFt%2BYXluSpkIjTPra7GAkN30YBjhU96JevdzbaZ03COUfkujc2SDkjZs9bJ1wDLsOMCMwosu1dMz9rgWURqV%2B%2B%2FAuSnlkfQYd210JtpPNY3onOpKt97RFl354SakODAqHa0esNeDx6iBJyoF3qQHG50iKFPCmLQD66vSi5kra9qrJSLwSWJkPdTtifC%2FLG%2B7p9l%2FRBrHeFT5ZFmIB8FOSHxeR2QtOLynnUE1IJoRHH3WQOm0sg3osTIF%2FxcuCoNnLnM1M%2BQ1Ryt5zRSTeydSnK%2FxLRUqI4qaUqSCH3CpC4Lmr5umvQP6aSGuJrVg4kI0ws424xAY6pgFimg%2F5xPGZ7r1HZczKEut%2BCD95RHe4Ko3%2BcnpGWFJYwoUmulZF5s7mYLU%2BzpnSXgFp5A%2F4L%2BJR81qwXfq%2BmwyJKLVO5wrR%2FbiPUCneGSQ376QSHkDK%2BjPOhXfDkuWxh%2Bjqx0oLKAzReRLITO8TKH8TfMBN3ZveFxrF2LXk8E8RnJgITvuxks%2B6ey6oMA8gaNhxzY6nRAf%2B3Ed7bL4BoNSssYZ61GzT&X-Amz-Signature=f6c929b6591cb0016cdd760ddc25b714c0886d0c33333cdec89dacb0d95fc87b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UF7GSIT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYCoYa5B%2F8CGDdH8t4UuX0Nyjp0XZDmVbfyl8rV9r4eAiBHn41ILRwCVbTghfyfdxMAUP1KOqMIVvoNRW8ElWC15ir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMD7SQ8mJySo6RL21WKtwDDwd0nkPm4NHyzD1ShwCsslqpiNi7z2uK%2FwiwmgO%2B97LKXILoAmFHV7OekPYzf%2FYyH%2BoI9vGi7gR2Jz%2FERz0nK0OQ%2Fzfk4h2ba2i7KTWfioqOjMMOpUYwioPn9CI6WMJrFtGA9eoyJTQJuxqaYDxGBlpEdPqW0vXuFeuNidDYaeCEknYZDJ3ediAPpG2NC3QxChGZbCo%2BA1arcCTxPUGMjSw3LsaSGmrKUtB2lqe%2FyydUJrj5SoFAWLDBgz75Cw2E6svCemPIT4sb1rlx6VhauIgYnYIlbQ0yzyWho1ChIXVmLMvRfmGH9p%2Fu9pRpFt%2BYXluSpkIjTPra7GAkN30YBjhU96JevdzbaZ03COUfkujc2SDkjZs9bJ1wDLsOMCMwosu1dMz9rgWURqV%2B%2B%2FAuSnlkfQYd210JtpPNY3onOpKt97RFl354SakODAqHa0esNeDx6iBJyoF3qQHG50iKFPCmLQD66vSi5kra9qrJSLwSWJkPdTtifC%2FLG%2B7p9l%2FRBrHeFT5ZFmIB8FOSHxeR2QtOLynnUE1IJoRHH3WQOm0sg3osTIF%2FxcuCoNnLnM1M%2BQ1Ryt5zRSTeydSnK%2FxLRUqI4qaUqSCH3CpC4Lmr5umvQP6aSGuJrVg4kI0ws424xAY6pgFimg%2F5xPGZ7r1HZczKEut%2BCD95RHe4Ko3%2BcnpGWFJYwoUmulZF5s7mYLU%2BzpnSXgFp5A%2F4L%2BJR81qwXfq%2BmwyJKLVO5wrR%2FbiPUCneGSQ376QSHkDK%2BjPOhXfDkuWxh%2Bjqx0oLKAzReRLITO8TKH8TfMBN3ZveFxrF2LXk8E8RnJgITvuxks%2B6ey6oMA8gaNhxzY6nRAf%2B3Ed7bL4BoNSssYZ61GzT&X-Amz-Signature=bf2dda0295ea7508ca84b0e4de068f221259caab876b682be16fe3def863288e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UF7GSIT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYCoYa5B%2F8CGDdH8t4UuX0Nyjp0XZDmVbfyl8rV9r4eAiBHn41ILRwCVbTghfyfdxMAUP1KOqMIVvoNRW8ElWC15ir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMD7SQ8mJySo6RL21WKtwDDwd0nkPm4NHyzD1ShwCsslqpiNi7z2uK%2FwiwmgO%2B97LKXILoAmFHV7OekPYzf%2FYyH%2BoI9vGi7gR2Jz%2FERz0nK0OQ%2Fzfk4h2ba2i7KTWfioqOjMMOpUYwioPn9CI6WMJrFtGA9eoyJTQJuxqaYDxGBlpEdPqW0vXuFeuNidDYaeCEknYZDJ3ediAPpG2NC3QxChGZbCo%2BA1arcCTxPUGMjSw3LsaSGmrKUtB2lqe%2FyydUJrj5SoFAWLDBgz75Cw2E6svCemPIT4sb1rlx6VhauIgYnYIlbQ0yzyWho1ChIXVmLMvRfmGH9p%2Fu9pRpFt%2BYXluSpkIjTPra7GAkN30YBjhU96JevdzbaZ03COUfkujc2SDkjZs9bJ1wDLsOMCMwosu1dMz9rgWURqV%2B%2B%2FAuSnlkfQYd210JtpPNY3onOpKt97RFl354SakODAqHa0esNeDx6iBJyoF3qQHG50iKFPCmLQD66vSi5kra9qrJSLwSWJkPdTtifC%2FLG%2B7p9l%2FRBrHeFT5ZFmIB8FOSHxeR2QtOLynnUE1IJoRHH3WQOm0sg3osTIF%2FxcuCoNnLnM1M%2BQ1Ryt5zRSTeydSnK%2FxLRUqI4qaUqSCH3CpC4Lmr5umvQP6aSGuJrVg4kI0ws424xAY6pgFimg%2F5xPGZ7r1HZczKEut%2BCD95RHe4Ko3%2BcnpGWFJYwoUmulZF5s7mYLU%2BzpnSXgFp5A%2F4L%2BJR81qwXfq%2BmwyJKLVO5wrR%2FbiPUCneGSQ376QSHkDK%2BjPOhXfDkuWxh%2Bjqx0oLKAzReRLITO8TKH8TfMBN3ZveFxrF2LXk8E8RnJgITvuxks%2B6ey6oMA8gaNhxzY6nRAf%2B3Ed7bL4BoNSssYZ61GzT&X-Amz-Signature=38ff8019ce5c1e1ee732403d8b3778376beb1e4cdd260dfa4f79319e6963de5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UF7GSIT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYCoYa5B%2F8CGDdH8t4UuX0Nyjp0XZDmVbfyl8rV9r4eAiBHn41ILRwCVbTghfyfdxMAUP1KOqMIVvoNRW8ElWC15ir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMD7SQ8mJySo6RL21WKtwDDwd0nkPm4NHyzD1ShwCsslqpiNi7z2uK%2FwiwmgO%2B97LKXILoAmFHV7OekPYzf%2FYyH%2BoI9vGi7gR2Jz%2FERz0nK0OQ%2Fzfk4h2ba2i7KTWfioqOjMMOpUYwioPn9CI6WMJrFtGA9eoyJTQJuxqaYDxGBlpEdPqW0vXuFeuNidDYaeCEknYZDJ3ediAPpG2NC3QxChGZbCo%2BA1arcCTxPUGMjSw3LsaSGmrKUtB2lqe%2FyydUJrj5SoFAWLDBgz75Cw2E6svCemPIT4sb1rlx6VhauIgYnYIlbQ0yzyWho1ChIXVmLMvRfmGH9p%2Fu9pRpFt%2BYXluSpkIjTPra7GAkN30YBjhU96JevdzbaZ03COUfkujc2SDkjZs9bJ1wDLsOMCMwosu1dMz9rgWURqV%2B%2B%2FAuSnlkfQYd210JtpPNY3onOpKt97RFl354SakODAqHa0esNeDx6iBJyoF3qQHG50iKFPCmLQD66vSi5kra9qrJSLwSWJkPdTtifC%2FLG%2B7p9l%2FRBrHeFT5ZFmIB8FOSHxeR2QtOLynnUE1IJoRHH3WQOm0sg3osTIF%2FxcuCoNnLnM1M%2BQ1Ryt5zRSTeydSnK%2FxLRUqI4qaUqSCH3CpC4Lmr5umvQP6aSGuJrVg4kI0ws424xAY6pgFimg%2F5xPGZ7r1HZczKEut%2BCD95RHe4Ko3%2BcnpGWFJYwoUmulZF5s7mYLU%2BzpnSXgFp5A%2F4L%2BJR81qwXfq%2BmwyJKLVO5wrR%2FbiPUCneGSQ376QSHkDK%2BjPOhXfDkuWxh%2Bjqx0oLKAzReRLITO8TKH8TfMBN3ZveFxrF2LXk8E8RnJgITvuxks%2B6ey6oMA8gaNhxzY6nRAf%2B3Ed7bL4BoNSssYZ61GzT&X-Amz-Signature=86be1eeeafd87a6339ee68c8015ab19727e2220419b9923e626944b2d838c175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UF7GSIT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYCoYa5B%2F8CGDdH8t4UuX0Nyjp0XZDmVbfyl8rV9r4eAiBHn41ILRwCVbTghfyfdxMAUP1KOqMIVvoNRW8ElWC15ir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMD7SQ8mJySo6RL21WKtwDDwd0nkPm4NHyzD1ShwCsslqpiNi7z2uK%2FwiwmgO%2B97LKXILoAmFHV7OekPYzf%2FYyH%2BoI9vGi7gR2Jz%2FERz0nK0OQ%2Fzfk4h2ba2i7KTWfioqOjMMOpUYwioPn9CI6WMJrFtGA9eoyJTQJuxqaYDxGBlpEdPqW0vXuFeuNidDYaeCEknYZDJ3ediAPpG2NC3QxChGZbCo%2BA1arcCTxPUGMjSw3LsaSGmrKUtB2lqe%2FyydUJrj5SoFAWLDBgz75Cw2E6svCemPIT4sb1rlx6VhauIgYnYIlbQ0yzyWho1ChIXVmLMvRfmGH9p%2Fu9pRpFt%2BYXluSpkIjTPra7GAkN30YBjhU96JevdzbaZ03COUfkujc2SDkjZs9bJ1wDLsOMCMwosu1dMz9rgWURqV%2B%2B%2FAuSnlkfQYd210JtpPNY3onOpKt97RFl354SakODAqHa0esNeDx6iBJyoF3qQHG50iKFPCmLQD66vSi5kra9qrJSLwSWJkPdTtifC%2FLG%2B7p9l%2FRBrHeFT5ZFmIB8FOSHxeR2QtOLynnUE1IJoRHH3WQOm0sg3osTIF%2FxcuCoNnLnM1M%2BQ1Ryt5zRSTeydSnK%2FxLRUqI4qaUqSCH3CpC4Lmr5umvQP6aSGuJrVg4kI0ws424xAY6pgFimg%2F5xPGZ7r1HZczKEut%2BCD95RHe4Ko3%2BcnpGWFJYwoUmulZF5s7mYLU%2BzpnSXgFp5A%2F4L%2BJR81qwXfq%2BmwyJKLVO5wrR%2FbiPUCneGSQ376QSHkDK%2BjPOhXfDkuWxh%2Bjqx0oLKAzReRLITO8TKH8TfMBN3ZveFxrF2LXk8E8RnJgITvuxks%2B6ey6oMA8gaNhxzY6nRAf%2B3Ed7bL4BoNSssYZ61GzT&X-Amz-Signature=1c54c52cc53944bd49d0a37bae3350de3e8e1c6661968d42e10c4728aeafcc81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UF7GSIT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYCoYa5B%2F8CGDdH8t4UuX0Nyjp0XZDmVbfyl8rV9r4eAiBHn41ILRwCVbTghfyfdxMAUP1KOqMIVvoNRW8ElWC15ir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMD7SQ8mJySo6RL21WKtwDDwd0nkPm4NHyzD1ShwCsslqpiNi7z2uK%2FwiwmgO%2B97LKXILoAmFHV7OekPYzf%2FYyH%2BoI9vGi7gR2Jz%2FERz0nK0OQ%2Fzfk4h2ba2i7KTWfioqOjMMOpUYwioPn9CI6WMJrFtGA9eoyJTQJuxqaYDxGBlpEdPqW0vXuFeuNidDYaeCEknYZDJ3ediAPpG2NC3QxChGZbCo%2BA1arcCTxPUGMjSw3LsaSGmrKUtB2lqe%2FyydUJrj5SoFAWLDBgz75Cw2E6svCemPIT4sb1rlx6VhauIgYnYIlbQ0yzyWho1ChIXVmLMvRfmGH9p%2Fu9pRpFt%2BYXluSpkIjTPra7GAkN30YBjhU96JevdzbaZ03COUfkujc2SDkjZs9bJ1wDLsOMCMwosu1dMz9rgWURqV%2B%2B%2FAuSnlkfQYd210JtpPNY3onOpKt97RFl354SakODAqHa0esNeDx6iBJyoF3qQHG50iKFPCmLQD66vSi5kra9qrJSLwSWJkPdTtifC%2FLG%2B7p9l%2FRBrHeFT5ZFmIB8FOSHxeR2QtOLynnUE1IJoRHH3WQOm0sg3osTIF%2FxcuCoNnLnM1M%2BQ1Ryt5zRSTeydSnK%2FxLRUqI4qaUqSCH3CpC4Lmr5umvQP6aSGuJrVg4kI0ws424xAY6pgFimg%2F5xPGZ7r1HZczKEut%2BCD95RHe4Ko3%2BcnpGWFJYwoUmulZF5s7mYLU%2BzpnSXgFp5A%2F4L%2BJR81qwXfq%2BmwyJKLVO5wrR%2FbiPUCneGSQ376QSHkDK%2BjPOhXfDkuWxh%2Bjqx0oLKAzReRLITO8TKH8TfMBN3ZveFxrF2LXk8E8RnJgITvuxks%2B6ey6oMA8gaNhxzY6nRAf%2B3Ed7bL4BoNSssYZ61GzT&X-Amz-Signature=d98d71f00910797525a3c3be40f79eecc9489dd09403c19a9aa6ecaf6e5719ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UF7GSIT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYCoYa5B%2F8CGDdH8t4UuX0Nyjp0XZDmVbfyl8rV9r4eAiBHn41ILRwCVbTghfyfdxMAUP1KOqMIVvoNRW8ElWC15ir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMD7SQ8mJySo6RL21WKtwDDwd0nkPm4NHyzD1ShwCsslqpiNi7z2uK%2FwiwmgO%2B97LKXILoAmFHV7OekPYzf%2FYyH%2BoI9vGi7gR2Jz%2FERz0nK0OQ%2Fzfk4h2ba2i7KTWfioqOjMMOpUYwioPn9CI6WMJrFtGA9eoyJTQJuxqaYDxGBlpEdPqW0vXuFeuNidDYaeCEknYZDJ3ediAPpG2NC3QxChGZbCo%2BA1arcCTxPUGMjSw3LsaSGmrKUtB2lqe%2FyydUJrj5SoFAWLDBgz75Cw2E6svCemPIT4sb1rlx6VhauIgYnYIlbQ0yzyWho1ChIXVmLMvRfmGH9p%2Fu9pRpFt%2BYXluSpkIjTPra7GAkN30YBjhU96JevdzbaZ03COUfkujc2SDkjZs9bJ1wDLsOMCMwosu1dMz9rgWURqV%2B%2B%2FAuSnlkfQYd210JtpPNY3onOpKt97RFl354SakODAqHa0esNeDx6iBJyoF3qQHG50iKFPCmLQD66vSi5kra9qrJSLwSWJkPdTtifC%2FLG%2B7p9l%2FRBrHeFT5ZFmIB8FOSHxeR2QtOLynnUE1IJoRHH3WQOm0sg3osTIF%2FxcuCoNnLnM1M%2BQ1Ryt5zRSTeydSnK%2FxLRUqI4qaUqSCH3CpC4Lmr5umvQP6aSGuJrVg4kI0ws424xAY6pgFimg%2F5xPGZ7r1HZczKEut%2BCD95RHe4Ko3%2BcnpGWFJYwoUmulZF5s7mYLU%2BzpnSXgFp5A%2F4L%2BJR81qwXfq%2BmwyJKLVO5wrR%2FbiPUCneGSQ376QSHkDK%2BjPOhXfDkuWxh%2Bjqx0oLKAzReRLITO8TKH8TfMBN3ZveFxrF2LXk8E8RnJgITvuxks%2B6ey6oMA8gaNhxzY6nRAf%2B3Ed7bL4BoNSssYZ61GzT&X-Amz-Signature=600e719c2f5e71b381d64cb2c1df5b471dabb85af9b80dc4b0cc3ad9d3a63464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UF7GSIT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYCoYa5B%2F8CGDdH8t4UuX0Nyjp0XZDmVbfyl8rV9r4eAiBHn41ILRwCVbTghfyfdxMAUP1KOqMIVvoNRW8ElWC15ir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMD7SQ8mJySo6RL21WKtwDDwd0nkPm4NHyzD1ShwCsslqpiNi7z2uK%2FwiwmgO%2B97LKXILoAmFHV7OekPYzf%2FYyH%2BoI9vGi7gR2Jz%2FERz0nK0OQ%2Fzfk4h2ba2i7KTWfioqOjMMOpUYwioPn9CI6WMJrFtGA9eoyJTQJuxqaYDxGBlpEdPqW0vXuFeuNidDYaeCEknYZDJ3ediAPpG2NC3QxChGZbCo%2BA1arcCTxPUGMjSw3LsaSGmrKUtB2lqe%2FyydUJrj5SoFAWLDBgz75Cw2E6svCemPIT4sb1rlx6VhauIgYnYIlbQ0yzyWho1ChIXVmLMvRfmGH9p%2Fu9pRpFt%2BYXluSpkIjTPra7GAkN30YBjhU96JevdzbaZ03COUfkujc2SDkjZs9bJ1wDLsOMCMwosu1dMz9rgWURqV%2B%2B%2FAuSnlkfQYd210JtpPNY3onOpKt97RFl354SakODAqHa0esNeDx6iBJyoF3qQHG50iKFPCmLQD66vSi5kra9qrJSLwSWJkPdTtifC%2FLG%2B7p9l%2FRBrHeFT5ZFmIB8FOSHxeR2QtOLynnUE1IJoRHH3WQOm0sg3osTIF%2FxcuCoNnLnM1M%2BQ1Ryt5zRSTeydSnK%2FxLRUqI4qaUqSCH3CpC4Lmr5umvQP6aSGuJrVg4kI0ws424xAY6pgFimg%2F5xPGZ7r1HZczKEut%2BCD95RHe4Ko3%2BcnpGWFJYwoUmulZF5s7mYLU%2BzpnSXgFp5A%2F4L%2BJR81qwXfq%2BmwyJKLVO5wrR%2FbiPUCneGSQ376QSHkDK%2BjPOhXfDkuWxh%2Bjqx0oLKAzReRLITO8TKH8TfMBN3ZveFxrF2LXk8E8RnJgITvuxks%2B6ey6oMA8gaNhxzY6nRAf%2B3Ed7bL4BoNSssYZ61GzT&X-Amz-Signature=e412d3b0e4979f24200e41148310de446c58980e361f783afed7ec440e5cd768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UF7GSIT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYCoYa5B%2F8CGDdH8t4UuX0Nyjp0XZDmVbfyl8rV9r4eAiBHn41ILRwCVbTghfyfdxMAUP1KOqMIVvoNRW8ElWC15ir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMD7SQ8mJySo6RL21WKtwDDwd0nkPm4NHyzD1ShwCsslqpiNi7z2uK%2FwiwmgO%2B97LKXILoAmFHV7OekPYzf%2FYyH%2BoI9vGi7gR2Jz%2FERz0nK0OQ%2Fzfk4h2ba2i7KTWfioqOjMMOpUYwioPn9CI6WMJrFtGA9eoyJTQJuxqaYDxGBlpEdPqW0vXuFeuNidDYaeCEknYZDJ3ediAPpG2NC3QxChGZbCo%2BA1arcCTxPUGMjSw3LsaSGmrKUtB2lqe%2FyydUJrj5SoFAWLDBgz75Cw2E6svCemPIT4sb1rlx6VhauIgYnYIlbQ0yzyWho1ChIXVmLMvRfmGH9p%2Fu9pRpFt%2BYXluSpkIjTPra7GAkN30YBjhU96JevdzbaZ03COUfkujc2SDkjZs9bJ1wDLsOMCMwosu1dMz9rgWURqV%2B%2B%2FAuSnlkfQYd210JtpPNY3onOpKt97RFl354SakODAqHa0esNeDx6iBJyoF3qQHG50iKFPCmLQD66vSi5kra9qrJSLwSWJkPdTtifC%2FLG%2B7p9l%2FRBrHeFT5ZFmIB8FOSHxeR2QtOLynnUE1IJoRHH3WQOm0sg3osTIF%2FxcuCoNnLnM1M%2BQ1Ryt5zRSTeydSnK%2FxLRUqI4qaUqSCH3CpC4Lmr5umvQP6aSGuJrVg4kI0ws424xAY6pgFimg%2F5xPGZ7r1HZczKEut%2BCD95RHe4Ko3%2BcnpGWFJYwoUmulZF5s7mYLU%2BzpnSXgFp5A%2F4L%2BJR81qwXfq%2BmwyJKLVO5wrR%2FbiPUCneGSQ376QSHkDK%2BjPOhXfDkuWxh%2Bjqx0oLKAzReRLITO8TKH8TfMBN3ZveFxrF2LXk8E8RnJgITvuxks%2B6ey6oMA8gaNhxzY6nRAf%2B3Ed7bL4BoNSssYZ61GzT&X-Amz-Signature=561c62c3b8dd870d7ac1654b8a4ded9fb026415f74605b5527496eaadb64cb19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UF7GSIT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYCoYa5B%2F8CGDdH8t4UuX0Nyjp0XZDmVbfyl8rV9r4eAiBHn41ILRwCVbTghfyfdxMAUP1KOqMIVvoNRW8ElWC15ir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMD7SQ8mJySo6RL21WKtwDDwd0nkPm4NHyzD1ShwCsslqpiNi7z2uK%2FwiwmgO%2B97LKXILoAmFHV7OekPYzf%2FYyH%2BoI9vGi7gR2Jz%2FERz0nK0OQ%2Fzfk4h2ba2i7KTWfioqOjMMOpUYwioPn9CI6WMJrFtGA9eoyJTQJuxqaYDxGBlpEdPqW0vXuFeuNidDYaeCEknYZDJ3ediAPpG2NC3QxChGZbCo%2BA1arcCTxPUGMjSw3LsaSGmrKUtB2lqe%2FyydUJrj5SoFAWLDBgz75Cw2E6svCemPIT4sb1rlx6VhauIgYnYIlbQ0yzyWho1ChIXVmLMvRfmGH9p%2Fu9pRpFt%2BYXluSpkIjTPra7GAkN30YBjhU96JevdzbaZ03COUfkujc2SDkjZs9bJ1wDLsOMCMwosu1dMz9rgWURqV%2B%2B%2FAuSnlkfQYd210JtpPNY3onOpKt97RFl354SakODAqHa0esNeDx6iBJyoF3qQHG50iKFPCmLQD66vSi5kra9qrJSLwSWJkPdTtifC%2FLG%2B7p9l%2FRBrHeFT5ZFmIB8FOSHxeR2QtOLynnUE1IJoRHH3WQOm0sg3osTIF%2FxcuCoNnLnM1M%2BQ1Ryt5zRSTeydSnK%2FxLRUqI4qaUqSCH3CpC4Lmr5umvQP6aSGuJrVg4kI0ws424xAY6pgFimg%2F5xPGZ7r1HZczKEut%2BCD95RHe4Ko3%2BcnpGWFJYwoUmulZF5s7mYLU%2BzpnSXgFp5A%2F4L%2BJR81qwXfq%2BmwyJKLVO5wrR%2FbiPUCneGSQ376QSHkDK%2BjPOhXfDkuWxh%2Bjqx0oLKAzReRLITO8TKH8TfMBN3ZveFxrF2LXk8E8RnJgITvuxks%2B6ey6oMA8gaNhxzY6nRAf%2B3Ed7bL4BoNSssYZ61GzT&X-Amz-Signature=e2bdb25504dfe87cd95f9e4059862fa6f64d6c9f2d427b5dd7f5d29f75ae8b37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M2IBBNQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKKd7R6ZrPTzXechpsMc9d1IIHC1562e0WP7UOV%2FTiGAiAX3uazobW36RcYzlaK8NazE6j%2B3dQN%2FVoSzsH707B8xCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMD217Py88zusVCbFhKtwDQB8tcYPlCKG1wWXfldqML0oPD62EPGSRVDVqoIHmlt3IqHUGSgBWIat6%2BG%2FkwF8iDp10UA%2BumscuKYYquafR2KfJ1HaIq6UHC3%2F0cogvkm1N8c%2BUk3GXkvGMuYbSRSy8Fz7yw0I5nu%2FwFbekYM9WQkHbQhpSpEuL5LAxs%2FnDqfKgFq%2ByWG3yABzepzggmPLKmM948l0QGvEfDF4pL3JoH1gW9wB2ZizxtmkmrrrbbE3teLbvyjJ3CEYniG2kwliOH6oMmYkaotW%2FbqJBdsStA9vwS5guxHWi9ixZGhANEulQ%2BLCA%2BCvV3DxhN70W1UFTHwrmnBmdwkl6YOEHYTfS7he%2F%2FZD55e7L0Isl4emS7NFwB3u5RtEtZg0HU5U3avlzHF%2B5ZXpIwQYtmX5F3%2F%2BjPpOqk8dOLhPCwFFAR93yZn7%2FNxprqUabFdP9wOgENQbyCabU%2F70l5B9UmuNxqVJzv%2BBe9KM9By6cFqI1jNKkVq8avhg6ejEevrMtwVR%2Fn7hqI0zUpm07ipoMhLS%2FVpv6CInD6r2B8TzSlBYu%2FOC%2FQG8J7g5JKXJS8xYReXx%2BFQ2C%2BasbgB6%2FxMaDVuLYSAaiCYGL396sBi6GJp7XBtXZmD06AaJFAVaU8XcFr%2BUw04u4xAY6pgGoGFzoka8OB1%2BMlkLQmSiM7dnJLcoRLImmZzTk89khyVT%2BRydrdEUwf5eT1qcpMnNdqwOE2NeROvbKkGlJx%2FrVqtcCQR2eLozognqbNHsukKpsO40u45VbpuaSYHObijFD6B%2BfsHw%2Fi4R8wtsNZPfjqEOCKj84BNw9sljR5esYaEPf6FTLNRQAEHuSCu0qCg2A4XQJ2%2FPDqA2%2Bw5HZaDMm0u76yBzp&X-Amz-Signature=1d626b11daa67b5217226f5767c9db814e978773d07c94025711a73209d958d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DH7B7NH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8NWYvcC31IOpE4bPVnLPMHSugOQuQ30qxijFT%2BrpKNAiAEVvBuSfiSbhHbawKlKLkJZ7uPhaoZ0pJ1b3WVKQgPIyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMPTxARcR%2FhaCT06Z9KtwDnItJwUdsgJ0qvNR29tAcB2Zj3EhylPloLbfeKYYosWxchMrurh0m%2FNmQziZO7YhtWgHZFP47M3hBiSofUyfz9EbX%2FBoZXjbfhwQdgVbF3%2BnEYZhk18YjHBU%2BXwONgdbIpRJpV4rfXVumoORciPFMVR8sGmk97OS1aVa7lo375f%2B14W5ODFAjpw0%2FmMENbWnblBT0C%2BmA%2BaVvM6bOwWc5%2BXArh8nEw%2FK25C%2B9CgwLeDlb1wf4ox8GzkcArZVktoy9ASObE4XA%2BCe%2BM17Fu8FlGnZGGlXdIofflAZ4GpFrP5BKtVUEoYJJuastjRWPaAxcKNfQ6LIIRiuJq0vmrEVw8hIU2f2VFh%2BqMwwyX5s%2FfoLPlZfO%2F1tG%2BJbWWceVsoxqynMVWOIzsgHFXEyL%2F%2BC2495cqZzWR0Guqr7TstwElZIhS0PiSfONg0tfUX4SvapYotHq%2FEn71LBCSliUvG1HfpD6BITskv14cebNobyHOe1PRxq3e2TcYt7Db4Qqsc5WgSJ%2B54ppfEQQwa22e4FZ9TyR%2BocRAdlK9RKsaL7PrYguk%2BjD8%2FOUrJq2hXeF4sMfZz91MLK%2BDwy05KQU%2BYzQoOYkO0MfZJwqRPZRGgnqD3e6Lut4AlNIW2FWQlgw04q4xAY6pgFVFUagJlMNqj2Y2flFiRz8xLnrWDrOuM7l6pyjpr1uQg9kp3xL387xhHaTk5mhzFpSexPEJkuLWr6agt590TjdTX0QPJti1hlEa5fqi5kQN4knKi0%2BRXClB0H92x2YPltAnGMzOciiMowLHTyB8uFby50Qu8Vt2O6%2BHyXS4vM1cNiz5hS1Arz08DdrMS1WKVXuCkabegGYId83%2BuKUDITcqUUd0E7u&X-Amz-Signature=2c48d5f63bdda510c6f6909126666d7b5b0c9f8951530c2c4a35bd3ea2d14956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z375VIQD%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBO8TDeII2%2Buj%2F9AhhiADscdnn2KRGZKClCKtFD0k0dXAiBX7kammjb%2BUo19DIMGij3ujnfQYucyCUoJsR%2FiU9Q7ICr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM12vfuEeVG%2BnQiuQEKtwD2aPxBf0Wzj9xHerSOZ78o2NAuvy24fj5oev6t%2F6icsALeRp2876hR%2B9NrKUp9NTptPK%2F48Msy9qMnB%2FVjeN%2BlClJLH%2BeK4Msiuek7IGt%2BgauvFfxHFOyPqxXV1knA9DjX7NPkAdugstfg8cEfTSL57w8BdJLFr6IY7koMGPfm6Icohql9LswlybmVL6lintdhXdtV8m95oBkxeniOAYSvs84yC5jRi7Rwa6RR808HNlvJR1mf%2BiFloahR%2BI4qbuvyNpqcGamQB%2FvZM3IlZX4ZDtSmOyJUKjzG9TFM9IoXNclP8h%2FMsD8dSrsMnDiPdE4%2FYvBU%2FDEAIj4WVTn3gfmBhj%2FOvSR090f3GLi8BOeyvmWAzNsrYRzP%2FTGAukjvYDKCowoIhwcDySuAUsKI8Z0MC3NPyxDyKAHKi7h%2FIvtK%2FJhUeh8%2BT1JsEI2FmVTaiLWb0GtLBpWqEoqPK%2BAlNMt%2FpDx982wNwPsuemPIY5Qd36DToXnIwTQBFpZ5ZnJsRD1%2FBJ35q76JvXHFGPMjUDz2oUAwwLYiyfVrQpNyrRC33oOp7gucaQBbhxYlcjbpYs4IH9%2FPoCJLtYFb8EfVzUoN3ZRk9pbLFF7O2jLU1gdqZI1Fv2O5DY4%2BHBDaZwwzI64xAY6pgEKrgB98w3U8o%2BbYc2W6JeVLrvQACvDuEeF303EnE8AgoMZJeeGEWQCLcT%2B2xlkyKccWINaaN7VIJDUeNmyr%2FrZWgI1THH%2B854wVg8g4zum9In2VhJw7YgNiA%2FHN5rdHtPkepL5ZreAm8kl5BRTkT2SXafz6oYkuZYdcZibh8juKpbKNf5l6uphQxhKAk7FMgUnBl5piL2FvRjxNB6SbZE41qia%2BVJp&X-Amz-Signature=8a82b659a7a3f3fc79cbeae993379227f31681d25c63692ca853104be6cf0f83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UF7GSIT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYCoYa5B%2F8CGDdH8t4UuX0Nyjp0XZDmVbfyl8rV9r4eAiBHn41ILRwCVbTghfyfdxMAUP1KOqMIVvoNRW8ElWC15ir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMD7SQ8mJySo6RL21WKtwDDwd0nkPm4NHyzD1ShwCsslqpiNi7z2uK%2FwiwmgO%2B97LKXILoAmFHV7OekPYzf%2FYyH%2BoI9vGi7gR2Jz%2FERz0nK0OQ%2Fzfk4h2ba2i7KTWfioqOjMMOpUYwioPn9CI6WMJrFtGA9eoyJTQJuxqaYDxGBlpEdPqW0vXuFeuNidDYaeCEknYZDJ3ediAPpG2NC3QxChGZbCo%2BA1arcCTxPUGMjSw3LsaSGmrKUtB2lqe%2FyydUJrj5SoFAWLDBgz75Cw2E6svCemPIT4sb1rlx6VhauIgYnYIlbQ0yzyWho1ChIXVmLMvRfmGH9p%2Fu9pRpFt%2BYXluSpkIjTPra7GAkN30YBjhU96JevdzbaZ03COUfkujc2SDkjZs9bJ1wDLsOMCMwosu1dMz9rgWURqV%2B%2B%2FAuSnlkfQYd210JtpPNY3onOpKt97RFl354SakODAqHa0esNeDx6iBJyoF3qQHG50iKFPCmLQD66vSi5kra9qrJSLwSWJkPdTtifC%2FLG%2B7p9l%2FRBrHeFT5ZFmIB8FOSHxeR2QtOLynnUE1IJoRHH3WQOm0sg3osTIF%2FxcuCoNnLnM1M%2BQ1Ryt5zRSTeydSnK%2FxLRUqI4qaUqSCH3CpC4Lmr5umvQP6aSGuJrVg4kI0ws424xAY6pgFimg%2F5xPGZ7r1HZczKEut%2BCD95RHe4Ko3%2BcnpGWFJYwoUmulZF5s7mYLU%2BzpnSXgFp5A%2F4L%2BJR81qwXfq%2BmwyJKLVO5wrR%2FbiPUCneGSQ376QSHkDK%2BjPOhXfDkuWxh%2Bjqx0oLKAzReRLITO8TKH8TfMBN3ZveFxrF2LXk8E8RnJgITvuxks%2B6ey6oMA8gaNhxzY6nRAf%2B3Ed7bL4BoNSssYZ61GzT&X-Amz-Signature=c97f318db30424f97647f6f62362dadcfa10acf7e34207a2e3e648cc1d3708eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XORIH2J%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Ft4ibnthX8%2F%2F8qtihl7y3%2Bf%2BFLDT3MmUQPLCIZ2j6%2BgIgbgoBDKf9GJfkUVgAssANpasPH8D7lrFtwCzepzfWj4gq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEva6Ye0e1Fmlnhi3CrcA5U320fOqej1PGQr3w9zELsTm5IiXLFHpngGGjkbLWCqiab9Y%2BoMJsQ9%2BWK6o2ndNymUl3gQ05M8a0TYM4%2B2oCOm73kYWwXyjLrKwjIqSG72HTDkZwgT5I30oQP3oTsfqLRlfHrKkN6W2yyYH4oYhzAdGLtaknZdWL5eSCskdgUD3FFNazYz4%2B2kkKCgLMY7vHh37GIlYg2t1323G%2Fje2yaxqmhqrYE8T3g9XfOtYaZ5FHqCwSqeXo51l2y1wku2NTb%2BKb2r3%2BXZGYi2wzqWF%2BWjQL%2BnV1IErDl1Wn5wLt39l9ZxIlQdUNy3tkYUGDOqx9fAZwzEYtuEnq3Hb%2F5je74HqnBtpYpPqBMiMgQgPJtihmxW9wdI7nEa%2Bw59yVxS4B1buWPLWOnEUmdAS91XF8ztBP7Rq19quNQ2IPsI8PkntAMe9tVeIFWp6Veail8jviL2l2SjqybGCRc13hI8OgFLfcGi9iI2r5T33jTGRyAsuDJZDCgr1zuwcqA4LTg8SHHG8whFxKiNuFp%2BvkLt7yeQhEdrvP4y00Boj3SGIRPCa2bg8k%2Bcm%2FnhPvF7VTgB86mqWFRa%2B0Blux7lyIZNJYzlHHhAy3LavW%2BmkfUYlXbAN69%2Bc6SBn0FqwsQkMMaVuMQGOqUB6X%2F09%2F70p3S%2FNuOByYdQNrYHXdN5gGstZX50poAsP5xsukk%2FikDXNLluuZIXCmD2SidPqBMKNGycHO%2BCkIGMxjRVaWJfjtgrzPGMv0FNOwWHd4ccV3hpK0tJVFsSYZDOmYCaZINLwFCWStTPHoA6sGivcW533Tpo5ZDlKRB88R1LGjSiFp6USTkYJlwUnpX%2BteMc95L7ViNfmKhIRFA5AV7vuSKQ&X-Amz-Signature=ff53a8eefa836b4bb6aa8daff55d2b5c9bf4df873faadd820603c6edca3ba611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UF7GSIT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYCoYa5B%2F8CGDdH8t4UuX0Nyjp0XZDmVbfyl8rV9r4eAiBHn41ILRwCVbTghfyfdxMAUP1KOqMIVvoNRW8ElWC15ir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMD7SQ8mJySo6RL21WKtwDDwd0nkPm4NHyzD1ShwCsslqpiNi7z2uK%2FwiwmgO%2B97LKXILoAmFHV7OekPYzf%2FYyH%2BoI9vGi7gR2Jz%2FERz0nK0OQ%2Fzfk4h2ba2i7KTWfioqOjMMOpUYwioPn9CI6WMJrFtGA9eoyJTQJuxqaYDxGBlpEdPqW0vXuFeuNidDYaeCEknYZDJ3ediAPpG2NC3QxChGZbCo%2BA1arcCTxPUGMjSw3LsaSGmrKUtB2lqe%2FyydUJrj5SoFAWLDBgz75Cw2E6svCemPIT4sb1rlx6VhauIgYnYIlbQ0yzyWho1ChIXVmLMvRfmGH9p%2Fu9pRpFt%2BYXluSpkIjTPra7GAkN30YBjhU96JevdzbaZ03COUfkujc2SDkjZs9bJ1wDLsOMCMwosu1dMz9rgWURqV%2B%2B%2FAuSnlkfQYd210JtpPNY3onOpKt97RFl354SakODAqHa0esNeDx6iBJyoF3qQHG50iKFPCmLQD66vSi5kra9qrJSLwSWJkPdTtifC%2FLG%2B7p9l%2FRBrHeFT5ZFmIB8FOSHxeR2QtOLynnUE1IJoRHH3WQOm0sg3osTIF%2FxcuCoNnLnM1M%2BQ1Ryt5zRSTeydSnK%2FxLRUqI4qaUqSCH3CpC4Lmr5umvQP6aSGuJrVg4kI0ws424xAY6pgFimg%2F5xPGZ7r1HZczKEut%2BCD95RHe4Ko3%2BcnpGWFJYwoUmulZF5s7mYLU%2BzpnSXgFp5A%2F4L%2BJR81qwXfq%2BmwyJKLVO5wrR%2FbiPUCneGSQ376QSHkDK%2BjPOhXfDkuWxh%2Bjqx0oLKAzReRLITO8TKH8TfMBN3ZveFxrF2LXk8E8RnJgITvuxks%2B6ey6oMA8gaNhxzY6nRAf%2B3Ed7bL4BoNSssYZ61GzT&X-Amz-Signature=dc82769a83a9d859dd07aef7f3f56545d1793f7217774b083f59be3276c598fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTTEZYZG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXQKHNhhAAT%2F01uTObG8uKJZjW1Tl4ch3fGDxT5jgmhQIhAP85sbHzieqNPqoeC0dDsIE%2FW9rHnAFFuf%2F8l2WzMCLAKv8DCBYQABoMNjM3NDIzMTgzODA1IgwjMPZ5Q%2B0ZT5KYf78q3AM8iUkKayutuW%2Fw6i4KOIh0ir8OdnH0mgeY8hDbjF5fvs%2FAzcogb42IhMUBqiRKbwlUqpz3ocbqozt81hHtsUTJjS%2BOm1Wk1fdmr4xPyIRdP35h6DPidDAIEnuJEpgEVjHJ%2FPF9dxMcG%2F2ryW5gOpLuCMEFi1Lzf%2F4LpzCLMa%2B07B9%2FDs7f3zuvrKvsJgLpR0MVf8Hb%2FWgAXpBiPCjpWbhlGPNPZBYAGoxqMDIcCcOh4fDVfNZJRazSU3niYRsBfmxBHss4%2BtdpRRgET%2Btk1A8QG%2Bp8YwiFwI91cPdFIPmKg%2FydQQF1%2FA6BSfsI3PYYm528TBEBw04EINMdxogqVJy0hwVolGBMm1NaF%2FQSjRN58L1NEK9eKeGzMHOIARDsMDftPE2dJowFUynUI2MFWTtT%2B9jW0sNo7VzPV%2F91i8c0y9CU9L%2BdVxUpf092NZGK6RfMZqa0%2BBd1sQinaSqKIsM37K%2BoUlG4e5uyQoCbqrJLKJerp75TKqnaVHzanUxqVQiDEEuM%2FoMnckUFA3%2BUyDFAbxbNFW586TX1WGINnTHeTZ0lPLOG9leKfep%2F2TK1gxm2dcOVlRw2z1VbrahpzoBRCxVTeHZprVO78LqP59wTAEKdBUPOz70PftKAADDMjrjEBjqkAblHpGm3nBXBlcHrK5Pw1XvW2TvuWZG58lxurmwOp%2BknUkyqxNY1MWfNvYmusDiPEQT9Yz9rxKPsqZ%2F1pgyMa5dB7SQ3Qw1AsQaZj%2BHUcK4tcvkBEmViuLg7lfk6g2NUpxznHuZrj5s30S37WtmPEUjCvNyzyFgJurFQQBpGlQ1ACOpEeZx5f08YUILeDQl98PEpmFp2GnKuxtAtIFQa2IAYCyWE&X-Amz-Signature=7abccb4136c7cee2c059a25004895e2bebcaf07336ffef2fc246219dc5f1adf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UF7GSIT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYCoYa5B%2F8CGDdH8t4UuX0Nyjp0XZDmVbfyl8rV9r4eAiBHn41ILRwCVbTghfyfdxMAUP1KOqMIVvoNRW8ElWC15ir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMD7SQ8mJySo6RL21WKtwDDwd0nkPm4NHyzD1ShwCsslqpiNi7z2uK%2FwiwmgO%2B97LKXILoAmFHV7OekPYzf%2FYyH%2BoI9vGi7gR2Jz%2FERz0nK0OQ%2Fzfk4h2ba2i7KTWfioqOjMMOpUYwioPn9CI6WMJrFtGA9eoyJTQJuxqaYDxGBlpEdPqW0vXuFeuNidDYaeCEknYZDJ3ediAPpG2NC3QxChGZbCo%2BA1arcCTxPUGMjSw3LsaSGmrKUtB2lqe%2FyydUJrj5SoFAWLDBgz75Cw2E6svCemPIT4sb1rlx6VhauIgYnYIlbQ0yzyWho1ChIXVmLMvRfmGH9p%2Fu9pRpFt%2BYXluSpkIjTPra7GAkN30YBjhU96JevdzbaZ03COUfkujc2SDkjZs9bJ1wDLsOMCMwosu1dMz9rgWURqV%2B%2B%2FAuSnlkfQYd210JtpPNY3onOpKt97RFl354SakODAqHa0esNeDx6iBJyoF3qQHG50iKFPCmLQD66vSi5kra9qrJSLwSWJkPdTtifC%2FLG%2B7p9l%2FRBrHeFT5ZFmIB8FOSHxeR2QtOLynnUE1IJoRHH3WQOm0sg3osTIF%2FxcuCoNnLnM1M%2BQ1Ryt5zRSTeydSnK%2FxLRUqI4qaUqSCH3CpC4Lmr5umvQP6aSGuJrVg4kI0ws424xAY6pgFimg%2F5xPGZ7r1HZczKEut%2BCD95RHe4Ko3%2BcnpGWFJYwoUmulZF5s7mYLU%2BzpnSXgFp5A%2F4L%2BJR81qwXfq%2BmwyJKLVO5wrR%2FbiPUCneGSQ376QSHkDK%2BjPOhXfDkuWxh%2Bjqx0oLKAzReRLITO8TKH8TfMBN3ZveFxrF2LXk8E8RnJgITvuxks%2B6ey6oMA8gaNhxzY6nRAf%2B3Ed7bL4BoNSssYZ61GzT&X-Amz-Signature=6af1ccbcd4b4aa3d414a602c6036240aa5747568e31ffcf09a7cec50aa40022e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466663LYY2Y%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQj0tpx1pXovDH%2FLcoSuVbagjBCtuT63MnhHz5Dmeg6AIhAMDGXco8fZf2nFXsJKletOXhDY8flgpAutT4a4ht%2FOBdKv8DCBYQABoMNjM3NDIzMTgzODA1IgwCQFKMUEBydbV6hoYq3APl1hgB%2BzV7AsWku%2FHXrAXzgnb2GFq9UrMXfCRlBNz0d1HUQVBbizDCTwm4%2B%2BywHigqn%2FEuLMyZ4%2FiXT6wpf385OONcK2JEti1xQvH0VUf3LzvFb7uXqhnVpMnQNFz%2FTHDiMojo8toSdTSF4o1SCYi58ZceqjtbsLI07%2Fld3FItYe94nS9wbSdd0sCJMWAnpphvSj0AP%2FzX0mlor4nhx27J7aD7YwOTCkAJjdpsprTJgmoshNoByusniuuAtnWxK03e%2FOIXWATif20%2Fq01aomQ4RVPi9OnWnrgSnbT3JbtmpM42VrdRjuCit0ODy01LZk9tHYBgOiRHi8%2Fa%2F2jPXzWibbbCW6ZnFl5icpKScJeHWc02QPDbICmPfdBlVPKTLN2QqbpLwC5LDQ9sGAbZjcnrk0BBiT4nD9WcQSLAROX%2F9E%2FdpkSh0xFKsMEpiiVl8fyXe5CIBFzl8ZKfA4r0cZeZM%2F41eY30XyXSaHrZLOQbbVMX9q77z1Lf22q0fpdCvSZGO4%2F0XjhD7IBBle1IrzvrIo0KWArfd23saaALPDi51LZ3Z584x8nNlxS6yv10PERfqp5FvKjplSmU83juvr8G5nzCw7Ii63URTZPPW%2FMCnSnmns1wjQ4K3yeKSDCzjbjEBjqkAXwCtqbpFFaSrxRzN7rnGOBpexo0%2BWPdEjazJx5hdrWzIwPdySssADPJIBaM3F4dW9U8pEhjEnsoXS7fDlk3sWNBXwAaOg0owbocCbpe7hgpQcGIMQ9AmOhut5jg8J%2FT7ufArSO6%2FVUrnRvfT22kz9u7yvxL15w6ff9gi1ihpt9lQmkEjqbEiDUJ0achoWeEOfq%2B4wqs0BkL6VnN2DeDmwPBnpyl&X-Amz-Signature=43bab7bf9439cf68df380710616a7774bb784fda1f4a7247eab98abcf532cfe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UF7GSIT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYCoYa5B%2F8CGDdH8t4UuX0Nyjp0XZDmVbfyl8rV9r4eAiBHn41ILRwCVbTghfyfdxMAUP1KOqMIVvoNRW8ElWC15ir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMD7SQ8mJySo6RL21WKtwDDwd0nkPm4NHyzD1ShwCsslqpiNi7z2uK%2FwiwmgO%2B97LKXILoAmFHV7OekPYzf%2FYyH%2BoI9vGi7gR2Jz%2FERz0nK0OQ%2Fzfk4h2ba2i7KTWfioqOjMMOpUYwioPn9CI6WMJrFtGA9eoyJTQJuxqaYDxGBlpEdPqW0vXuFeuNidDYaeCEknYZDJ3ediAPpG2NC3QxChGZbCo%2BA1arcCTxPUGMjSw3LsaSGmrKUtB2lqe%2FyydUJrj5SoFAWLDBgz75Cw2E6svCemPIT4sb1rlx6VhauIgYnYIlbQ0yzyWho1ChIXVmLMvRfmGH9p%2Fu9pRpFt%2BYXluSpkIjTPra7GAkN30YBjhU96JevdzbaZ03COUfkujc2SDkjZs9bJ1wDLsOMCMwosu1dMz9rgWURqV%2B%2B%2FAuSnlkfQYd210JtpPNY3onOpKt97RFl354SakODAqHa0esNeDx6iBJyoF3qQHG50iKFPCmLQD66vSi5kra9qrJSLwSWJkPdTtifC%2FLG%2B7p9l%2FRBrHeFT5ZFmIB8FOSHxeR2QtOLynnUE1IJoRHH3WQOm0sg3osTIF%2FxcuCoNnLnM1M%2BQ1Ryt5zRSTeydSnK%2FxLRUqI4qaUqSCH3CpC4Lmr5umvQP6aSGuJrVg4kI0ws424xAY6pgFimg%2F5xPGZ7r1HZczKEut%2BCD95RHe4Ko3%2BcnpGWFJYwoUmulZF5s7mYLU%2BzpnSXgFp5A%2F4L%2BJR81qwXfq%2BmwyJKLVO5wrR%2FbiPUCneGSQ376QSHkDK%2BjPOhXfDkuWxh%2Bjqx0oLKAzReRLITO8TKH8TfMBN3ZveFxrF2LXk8E8RnJgITvuxks%2B6ey6oMA8gaNhxzY6nRAf%2B3Ed7bL4BoNSssYZ61GzT&X-Amz-Signature=3c4ff2c02e3af05e80a743db8cd78f62d2a792e0cf3d9bbb7b074d0aeef629d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SQQQRS2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpY0dZVi1w6OzlRqm4O7JQdWWfk91BrGZ2Pzj7DyQfvQIhAMi9mZRGEmPNmWAZ5eQnPD%2F4sQNHFqwi2gR8GBskrZgPKv8DCBYQABoMNjM3NDIzMTgzODA1IgxVg2qNdhG4ueL0UC0q3APYj5H8zhMGGmm1E2ebHSAkVYMhTMOfYvUP3ybpt%2FMlB6RkwJTtUtHKJfBbwnnl%2BhWFVVLwd3FEBuqXC06LlDgD%2FkU6Q35dSr04LVgGs6RzqQnL%2FxgV6XNh%2F9vICtbV9SzAMXuxR4L58nwY6fVDUUHGKV%2BAOUSgJDZFDXKmGQugAfe1rJGqy9xaMgI2pYSimGQQqDoJ4p60p9qDYbKp3yhqO%2BEmDudco2%2FLgwX3ng6nRr%2FjFL9yOdnAb5dNzdsb4q6qPNEsrNZMxtMftdiznb79Eqh4lUepd2nU6MoCV1%2FidFK3SPnPGPyOqooqKlRiGGFNR87qoL8D7N6eJkyTGyypQDUK8ezevP4xUe%2FbX%2FGlMOw56m3dIFui%2Bykmzr2L8faoVTpAe0bywW45GTxVO7MnlTD8ap2m8sLeyg3j0LXlSOjGli%2Bpf8s7INGiWWBCIPBKJkrqGIz%2BkNvBze%2FYyHr5682PBI6zcjAgIdRHLV5seIDcnn8M7vstGnAI1QLI2sk2V5qj9DzeiOitPGOXiBd8ilZB1KccrFUoyqsjEGaVjS0mBG9%2BTmVJBcrPCxnmh7DEfekYUbOwJSpNvxExqqLVc1qKkCP5KPCNGIdwmWOgWy8LUHY4zY1GfZsTyDCakLjEBjqkAZST4zGd9ASis2loRJ2JLoGc6r5%2Biuw714VIDzO%2BVVu90hmsHLGEUZFsLBdl55c%2BxdtVQwqfU4aOWQc3fXTet33ml6yB8oGjag0PfBt8vAhHFJRv1WYRfwY6RrFvFUmkL%2BkxGfdwgFd1exji2wmw5orJ%2FqzGj8Q4R%2FJGIML%2FoYFoyVe9ogD0Pyw1smdr1amYIGhQGuCSKP39EwvQrn0TTwBR%2F%2BxD&X-Amz-Signature=1fc499e7b85eec62b3ae97ce1f67db6db89119e545ba20b6aa397d4e8bc0ce45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2BPHQWO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlQ63DmdGfI2eqt7fbEfrPmyyQiDTLD1BxQaTwbyKBGgIgf6HWyFYTS92TeCmK6Ij7%2FCfyAuY94YRTpmDzuR7U7rYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKAsdH3%2FQ8uNBuh3TircAywuMG7DOXoNQDRdzgtlLXWM2vgr1agdM7ZvDKgzXyVdY60EXYEGC4QVYHtE3HJV58U6go1EiqlOX34o4h7I2brj7AvR4t6sj8%2BeaEaRSHXYoxs68rHNMPhMtB5E7GFa7gnTSYSYhZTAwGftFweQc76czsP7MTZua%2F01ry1waeuF45fB3bl7Ir7xsFVsG4GuyoHyDJNZKyyhks2bBbbB2lnLFnu%2F0s69wY4jxoy3aVOz3HCEw8vz2%2BM6IzH7PyvX819YGM0KIcwmp1%2BmD8p0B%2F7480KqTpgOSR8SsTqxTaeY9AzAfO173VtUsorJJLN6W0z0nwyUQEm5UZ2SswvIHNXXnLNJ7eJaTpAmKqmckKK3QLuHkk1lmiMqH%2Br9Jw1yCH28QBkxxbobh7MJZC%2BmhA1PiBRKc0Y85XMmv6DIqs36I1CBEkhO5fI4k%2Fes481%2FzUcZimSq85DnJF5NYymTBSEhgyXWJSkFJwiwK1Fcy%2F%2B1LvZZ9aHw3pGZ3Ki6Yq84FZ0H4iTRfP22WwC5TeqCpV9PwUZ%2FWXk8ZhfxFMXFq8kDe03Dr0hMMFG5MmUVRkWQ8iOwUEnl1U%2FojRhaNe%2FYunlc5bWXgVepv7WIncRSrPA6b7tLyYAbxC5xO56ZMN%2BUuMQGOqUBiLvSsODYS3px%2BlARA3CtxM4xVFASSyNK64VKyf1Uax0UEUT8wV%2BI9QmnHtjD8WKZrCKtj7FRJjYsVC8klUfWXYPQtoVCNvTB3wk8XbD64gpx0g%2FdEy3m9qLeXHI54I2d%2F%2B50pjEq6vJMv3vBSxsIfBO1WFV1BPLCHlCXHk4e7e%2BNZNwf1Kes6XmsWOZNfjSjJBQ%2Bh1y3VyWRNWLDzNAQazNIGAgj&X-Amz-Signature=82fbd48db5f49039503e27fa002c9699595b9a4dc65f83c8f087b5c7cb8add44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZIK7KZI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5FoNzHXuwjvVhAAZw1c0%2FSHrZ2y0dOy8ZQmt8%2F3QQDAiA6%2BL3Jww0S%2FhN7LGWd2gfnPjf3bEVN871M4d%2Bj9zUeCCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMc%2BJcOHithXTsam64KtwD8MDnJjzAc2PjOuWqZmtEFFEA%2FA5%2BZ%2FbGppxip24gZkzPS40Veq%2BB7A9%2Fs%2BkqxRSp5E4voElN8K%2F2lLXi7DX2c%2B2hp83OvJq9%2Bi9A3nujfVAZ8wfD4n3WWrxz3AOlNjq%2F3udreXwIfKA8HSxe0p6mW7Zn3s0cC2mqNbyyc5bZDpGI3bRVANfYtKQY0wWKYQ2CVoRze1lxUZIgSMd4rvc1b43yYqQdOCrOelPATVoqm4Om48oBU0kAH3%2Bmm8NtOGlVGzbVWbcroJ0OcVTcDWVyCgNqJtDuB30vAcGHN7NvaKKTf9Ngr9d%2FwP%2Fi%2B7gMl7QXwVIEie%2FoQvgYjwEQOJOwOaimmqcjRt6%2FpWdGT4ekZvI%2B1L5PZ%2Bko17Ucy5b7IaaVL6Vg2QNzN%2B07kvKZP%2BLZ16pnfTlZYfjOjsf1Flg3L4MARmsoTqE7q4%2FTyv3yYUKRtuwQcJ%2FX3HU4LVADTyeA%2F6KHKYXOEUJbmd5peni3ecmIHM%2BaVAzU7caHicsrauYgOZ84fGGOqy87ENzlhTTjq7ziMbxR2CTWwV6DvVGL%2FTO04WmwDHooa5KDiN%2FoUXbovqpliwz1UCyJIghW5nCgxAmkz0lluKTniEgIYF11i4wJC%2F%2FDlJuvnCZZtZ4wsJW4xAY6pgH5GiJZ0Ku44LejBkq2kYyEdlS3RDLBsbwUL9eWTroBC%2FbMviQeYSRTQCxeBvRzgQEUerYFQvMUUE7%2FLlMXn0Ky0g6cP0A6MToxSFJriT3jdCgOu%2FNElhMtd2ftW0LAkVQ9E6YdTuxAS7Ic5XgqxfFMMOSf90lSuyyel9S%2BfU6mGttCRxLqTbv1g0LrbO2qLr%2BdY8dL3BqQWDTzKSNG%2Fk%2FKD2wIrrFe&X-Amz-Signature=82d461e5f666abaafb93e35b375e5b0ff50eb7a638f3599021be14d71dfe7144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZHXPKU3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Lrtv8Cn3MC9t%2BLxKcqDgQEkbMuuVMUiFCuzSnIZ%2FDwIgEFVQTVQcF8NhyaQCcIdrBN9qdEu0aYvUDdCRre06lhMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDN9EJkjQHLAiqKGEsSrcA05xDGc0cwacHV03XQv928fwxVHnDxJedwJN51g7LUrrCXwpmOlzWApSL8qEuECrPIy87wRmWnGyl5nvjm%2Ff3FCoYGagnR8Q70nraJkUxoJJHGjYUz1hW2j7nyzRV%2FOeV0fTvVPfv60XRs4RnHCGyoaZcciTQa0EyrQGLBHt%2Fp8bS7bWI1cnRL0RG8zf8GIr3dnajloLkRNOvCPI42OeVtmnqS96MHQAklcFBxT7Xdwbu9icEym%2BNvkhEVr8qUW%2FVP%2B%2Fjuf1EPfD4bvOuAHxjWIMtwCjAGriXnrNJj2AaD%2F3vvut2dJ9SEi371ahvltz2TYXe0yGOORff71WavN0FdOEogUbBdQEuKVVBzgDA326%2FttEfUlEw3uSiWGrBuAxelKs5cUsikL7QW7cq7prXG5PZxTWYrYzY791apjjjg8AoOhLgUhw6rWMlQ0ZeE2zptEOyf5KodHjae%2B%2FsBhH88OBGTXWifGgns8lIiOka9PmNwi1A%2BSHJM3S5iNqojL0AH5oIO3g2YfkmdmmDyMlNF0%2BXO7qCCqJD7xrPaoFKE%2Bwr4%2B3Rz0bnk29murl2t9J3UwM1imhN6%2B4KDjFEAhkiI6bagpS0oaFx3%2FrvYLRzQAEFSROPGhbJQtUMn%2BFMNuRuMQGOqUBYoo9ea3GR3FivZV3D3IDbBXUpYccdIgncIxCV4w7%2BQO%2FIl1fVTPOsccJUtHpocNa7no4u0ACddXHomP4eRldJegxd2s3oFhtI%2FBvYQnQi35JsZOJ1WrG4u6PXpIE9nUo483yGNppMNHOUMFid%2BM2itsGuG4G85cJxXXJX9qjzS4wzObcC1SIoyKUHbtZoC8z7mCdO34xKlgDYmbRmpPy9leLFm8R&X-Amz-Signature=33e1bcc1b136cf8fdaca738ef62b704fe36c1c523151e54c88444d86e277f9b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAPH4JKP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FCuQgz7URctNwdiIZOConJOGLDNImFgpu%2FoBQcSM2TAiAb7ZboNyIIWa7%2BtVzZEgOwx3Gee9zMQT4xUjD7OVOE3ir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM0E6b1IwauOURpbrGKtwDQacBmr5CFDw%2FYkngauR47ivvSE%2F6uB0tYefBqzk2eFNIrnhz3OIO9m1V40QxJf%2BooQbzY7fZoxswDF6fGZblHT6Ranm2ev%2BtBIq%2FJXLoOBNTkT1%2Bn%2BE6VciSid3FuDW2qoHPc%2FuCH2zd5k1b8EeBMrk2FM3PRaMun6fwtf8NY6BMF1W6GkSAIpRTu%2Fiavn0uvfRvxABBpfYnlm%2BOH%2FPlm8EYp0juN9X8CLq2Y48Bra1CxOoO4sZ1KONYQvwX97HWLCb43OG%2BGQyT6jpS6Gq4rFO5HW7SAcid8vKnTFHMr%2Bov0JB8eSnNX%2FCMIbS1cPPbpGntkc7keUsloICbnJHnK0oN9bZY5UpefUAtrhHkT9PyUGq3wdVSW5M9i5eV6TLaczS4H4v96ecP1lz7b%2BoBSvXtsPy79gToksJRTHP1GbKnaHAJGCOnsf3KDhRHxbFH97JkOBoOiHr1B%2BJxYsbrKru9YY7ALn0FF4AitZ6J5oV9M0ev0tiWsBQDlMbyjBHQkZgyJungFh%2BlT2QQKiRpCiCYwkqPyjbeoK%2FZ1McmmHp1uPG3QQx5LriGTFDxyiB8TwTvEEgpt%2FJgqhUIbvNxrkrpvYR3zE3ITbCMtDSrYx6MLUQQ2YkqByp6koYw1o24xAY6pgGQKilQQ1ihb15hhNlfO8gCjmZz%2FYuq1IiEcNsibr97zTlBtOyz8DgAywSHcpmj6Hs8eiTOYSAlueFAd2fSx%2FNq4KS1tQH4bl0uE3EY2lCHoYyAw7oABlCtI25Lul8LBM5IEae4Pr6nvh%2Bsy01KvP9AQbAix7te%2Frlx1u8wiSQ1j%2BRgXFXeh9Pgka4W80D8oPruMoHz8bidsz0sRQmAh25NDo%2FJlWyc&X-Amz-Signature=e7057279a0e9d9d70f69fd139dadd4fac9f7e2cfdbcbc1e88b4b068a17f98dd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UF7GSIT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYCoYa5B%2F8CGDdH8t4UuX0Nyjp0XZDmVbfyl8rV9r4eAiBHn41ILRwCVbTghfyfdxMAUP1KOqMIVvoNRW8ElWC15ir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMD7SQ8mJySo6RL21WKtwDDwd0nkPm4NHyzD1ShwCsslqpiNi7z2uK%2FwiwmgO%2B97LKXILoAmFHV7OekPYzf%2FYyH%2BoI9vGi7gR2Jz%2FERz0nK0OQ%2Fzfk4h2ba2i7KTWfioqOjMMOpUYwioPn9CI6WMJrFtGA9eoyJTQJuxqaYDxGBlpEdPqW0vXuFeuNidDYaeCEknYZDJ3ediAPpG2NC3QxChGZbCo%2BA1arcCTxPUGMjSw3LsaSGmrKUtB2lqe%2FyydUJrj5SoFAWLDBgz75Cw2E6svCemPIT4sb1rlx6VhauIgYnYIlbQ0yzyWho1ChIXVmLMvRfmGH9p%2Fu9pRpFt%2BYXluSpkIjTPra7GAkN30YBjhU96JevdzbaZ03COUfkujc2SDkjZs9bJ1wDLsOMCMwosu1dMz9rgWURqV%2B%2B%2FAuSnlkfQYd210JtpPNY3onOpKt97RFl354SakODAqHa0esNeDx6iBJyoF3qQHG50iKFPCmLQD66vSi5kra9qrJSLwSWJkPdTtifC%2FLG%2B7p9l%2FRBrHeFT5ZFmIB8FOSHxeR2QtOLynnUE1IJoRHH3WQOm0sg3osTIF%2FxcuCoNnLnM1M%2BQ1Ryt5zRSTeydSnK%2FxLRUqI4qaUqSCH3CpC4Lmr5umvQP6aSGuJrVg4kI0ws424xAY6pgFimg%2F5xPGZ7r1HZczKEut%2BCD95RHe4Ko3%2BcnpGWFJYwoUmulZF5s7mYLU%2BzpnSXgFp5A%2F4L%2BJR81qwXfq%2BmwyJKLVO5wrR%2FbiPUCneGSQ376QSHkDK%2BjPOhXfDkuWxh%2Bjqx0oLKAzReRLITO8TKH8TfMBN3ZveFxrF2LXk8E8RnJgITvuxks%2B6ey6oMA8gaNhxzY6nRAf%2B3Ed7bL4BoNSssYZ61GzT&X-Amz-Signature=eab0b82166ad8f7aa0dcb2078d6e83f3dbd3de569c9e3d48a31bef71e9f261ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UF7GSIT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYCoYa5B%2F8CGDdH8t4UuX0Nyjp0XZDmVbfyl8rV9r4eAiBHn41ILRwCVbTghfyfdxMAUP1KOqMIVvoNRW8ElWC15ir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMD7SQ8mJySo6RL21WKtwDDwd0nkPm4NHyzD1ShwCsslqpiNi7z2uK%2FwiwmgO%2B97LKXILoAmFHV7OekPYzf%2FYyH%2BoI9vGi7gR2Jz%2FERz0nK0OQ%2Fzfk4h2ba2i7KTWfioqOjMMOpUYwioPn9CI6WMJrFtGA9eoyJTQJuxqaYDxGBlpEdPqW0vXuFeuNidDYaeCEknYZDJ3ediAPpG2NC3QxChGZbCo%2BA1arcCTxPUGMjSw3LsaSGmrKUtB2lqe%2FyydUJrj5SoFAWLDBgz75Cw2E6svCemPIT4sb1rlx6VhauIgYnYIlbQ0yzyWho1ChIXVmLMvRfmGH9p%2Fu9pRpFt%2BYXluSpkIjTPra7GAkN30YBjhU96JevdzbaZ03COUfkujc2SDkjZs9bJ1wDLsOMCMwosu1dMz9rgWURqV%2B%2B%2FAuSnlkfQYd210JtpPNY3onOpKt97RFl354SakODAqHa0esNeDx6iBJyoF3qQHG50iKFPCmLQD66vSi5kra9qrJSLwSWJkPdTtifC%2FLG%2B7p9l%2FRBrHeFT5ZFmIB8FOSHxeR2QtOLynnUE1IJoRHH3WQOm0sg3osTIF%2FxcuCoNnLnM1M%2BQ1Ryt5zRSTeydSnK%2FxLRUqI4qaUqSCH3CpC4Lmr5umvQP6aSGuJrVg4kI0ws424xAY6pgFimg%2F5xPGZ7r1HZczKEut%2BCD95RHe4Ko3%2BcnpGWFJYwoUmulZF5s7mYLU%2BzpnSXgFp5A%2F4L%2BJR81qwXfq%2BmwyJKLVO5wrR%2FbiPUCneGSQ376QSHkDK%2BjPOhXfDkuWxh%2Bjqx0oLKAzReRLITO8TKH8TfMBN3ZveFxrF2LXk8E8RnJgITvuxks%2B6ey6oMA8gaNhxzY6nRAf%2B3Ed7bL4BoNSssYZ61GzT&X-Amz-Signature=591e1557df28651c46dacf23a1adb2d89cdeeb63d81f45353c9adccaeaeb9abb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP2XUR53%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUQO2Yt2VaqyntRsaEaPse0Ouo2tA1j61fvVu6a1JEpAiBzxhqhUdWoIT52YuNx%2F%2Fg5dt46PSyhxpSkuOrCKH297Cr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMt%2Fl95TmvpJWlwwHoKtwDy0iyrGZV%2F4OspL1W8%2BRFuAyw9lo8LVLyzmOU4%2BICNd795mZGalwCQztZoqB5kjjsdekdYUMe0FvAgqj6EvKCg30hq9zBu2QhMQSrGWTC9%2BMVbzuUn73Aw151ZNGgSckyquFm6b9YkFlJloI2aBmGB1LaAWu0WXPJRcA9bff%2FlNUPtM%2FdlKw75hvDgzbdflmkXqd542hlokSpeON7Du5sJMdVqTO91atSDfnwNDj4WnFWVQ82u9o6dWqfFEPoZbF58sxYhwlWBACFUPxWhLu3Zdnfakx7v4JUU2zoMi0sF1wrSJhJLLG5%2BSVuIFEUjEhjNFiyGgjO0JSIRiQZY%2Bj0KyDaOiqUZzoXrxMI6p33PjFxPOi10X11uT%2B8Jy7CibeKL2rxBh988AdlCi0aP%2FQ1rWTEAffIg%2FSReVTBmSHoxVvPwXqhiqhLmkDovxdoDTjT8dBjrnLLqkh6SFfolbKYTbce4e7DmFUE%2FV4ZtITsypVcTQEK%2F4ydk3%2Fi9Q4sv3DcGWHhkl8SU1qebyf1yFlu%2BAtNp88GXq6z8qmR1PDZGvDjggz6QcPXEWhAZZxUvRIxnu1Ixol6%2FNh4jabzJpkBUn8gdZaO9izgtjk552BGuexLzihPMPE26PgvdMIw%2BZK4xAY6pgH8%2FnN73qEgvm5Fi6gMKlBoPArLcuL5RoZG4Ukb9%2BkCoyzX0x0JbWhuthUVcrbFV5NCSxBXdTcVijD15VdTiYlXcZiYFhmog7hpFfIKFNozoeKA5bCMTXSD2zy%2FL72meRIkALFffW1DnCUfhvR2OUH7rWJfOTOpUCTH2DJPy19ftfkV62JTyAocFnRHTEBRQW5nayTO%2FcBCLREric4NajNHDh2rBn7E&X-Amz-Signature=af0400716129e5a858f095d045edd5fdc1276ed74a01e45598868048a8515003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP2XUR53%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUQO2Yt2VaqyntRsaEaPse0Ouo2tA1j61fvVu6a1JEpAiBzxhqhUdWoIT52YuNx%2F%2Fg5dt46PSyhxpSkuOrCKH297Cr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMt%2Fl95TmvpJWlwwHoKtwDy0iyrGZV%2F4OspL1W8%2BRFuAyw9lo8LVLyzmOU4%2BICNd795mZGalwCQztZoqB5kjjsdekdYUMe0FvAgqj6EvKCg30hq9zBu2QhMQSrGWTC9%2BMVbzuUn73Aw151ZNGgSckyquFm6b9YkFlJloI2aBmGB1LaAWu0WXPJRcA9bff%2FlNUPtM%2FdlKw75hvDgzbdflmkXqd542hlokSpeON7Du5sJMdVqTO91atSDfnwNDj4WnFWVQ82u9o6dWqfFEPoZbF58sxYhwlWBACFUPxWhLu3Zdnfakx7v4JUU2zoMi0sF1wrSJhJLLG5%2BSVuIFEUjEhjNFiyGgjO0JSIRiQZY%2Bj0KyDaOiqUZzoXrxMI6p33PjFxPOi10X11uT%2B8Jy7CibeKL2rxBh988AdlCi0aP%2FQ1rWTEAffIg%2FSReVTBmSHoxVvPwXqhiqhLmkDovxdoDTjT8dBjrnLLqkh6SFfolbKYTbce4e7DmFUE%2FV4ZtITsypVcTQEK%2F4ydk3%2Fi9Q4sv3DcGWHhkl8SU1qebyf1yFlu%2BAtNp88GXq6z8qmR1PDZGvDjggz6QcPXEWhAZZxUvRIxnu1Ixol6%2FNh4jabzJpkBUn8gdZaO9izgtjk552BGuexLzihPMPE26PgvdMIw%2BZK4xAY6pgH8%2FnN73qEgvm5Fi6gMKlBoPArLcuL5RoZG4Ukb9%2BkCoyzX0x0JbWhuthUVcrbFV5NCSxBXdTcVijD15VdTiYlXcZiYFhmog7hpFfIKFNozoeKA5bCMTXSD2zy%2FL72meRIkALFffW1DnCUfhvR2OUH7rWJfOTOpUCTH2DJPy19ftfkV62JTyAocFnRHTEBRQW5nayTO%2FcBCLREric4NajNHDh2rBn7E&X-Amz-Signature=d68e56312e6fe3f1402dd66de8ed6202fd61547d05157cf8959dfaddaa2fc884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP2XUR53%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUQO2Yt2VaqyntRsaEaPse0Ouo2tA1j61fvVu6a1JEpAiBzxhqhUdWoIT52YuNx%2F%2Fg5dt46PSyhxpSkuOrCKH297Cr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMt%2Fl95TmvpJWlwwHoKtwDy0iyrGZV%2F4OspL1W8%2BRFuAyw9lo8LVLyzmOU4%2BICNd795mZGalwCQztZoqB5kjjsdekdYUMe0FvAgqj6EvKCg30hq9zBu2QhMQSrGWTC9%2BMVbzuUn73Aw151ZNGgSckyquFm6b9YkFlJloI2aBmGB1LaAWu0WXPJRcA9bff%2FlNUPtM%2FdlKw75hvDgzbdflmkXqd542hlokSpeON7Du5sJMdVqTO91atSDfnwNDj4WnFWVQ82u9o6dWqfFEPoZbF58sxYhwlWBACFUPxWhLu3Zdnfakx7v4JUU2zoMi0sF1wrSJhJLLG5%2BSVuIFEUjEhjNFiyGgjO0JSIRiQZY%2Bj0KyDaOiqUZzoXrxMI6p33PjFxPOi10X11uT%2B8Jy7CibeKL2rxBh988AdlCi0aP%2FQ1rWTEAffIg%2FSReVTBmSHoxVvPwXqhiqhLmkDovxdoDTjT8dBjrnLLqkh6SFfolbKYTbce4e7DmFUE%2FV4ZtITsypVcTQEK%2F4ydk3%2Fi9Q4sv3DcGWHhkl8SU1qebyf1yFlu%2BAtNp88GXq6z8qmR1PDZGvDjggz6QcPXEWhAZZxUvRIxnu1Ixol6%2FNh4jabzJpkBUn8gdZaO9izgtjk552BGuexLzihPMPE26PgvdMIw%2BZK4xAY6pgH8%2FnN73qEgvm5Fi6gMKlBoPArLcuL5RoZG4Ukb9%2BkCoyzX0x0JbWhuthUVcrbFV5NCSxBXdTcVijD15VdTiYlXcZiYFhmog7hpFfIKFNozoeKA5bCMTXSD2zy%2FL72meRIkALFffW1DnCUfhvR2OUH7rWJfOTOpUCTH2DJPy19ftfkV62JTyAocFnRHTEBRQW5nayTO%2FcBCLREric4NajNHDh2rBn7E&X-Amz-Signature=c537333286737ac8cd00ca8e3927d815226861b0652912ffba89a8a844d0196f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP2XUR53%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUQO2Yt2VaqyntRsaEaPse0Ouo2tA1j61fvVu6a1JEpAiBzxhqhUdWoIT52YuNx%2F%2Fg5dt46PSyhxpSkuOrCKH297Cr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMt%2Fl95TmvpJWlwwHoKtwDy0iyrGZV%2F4OspL1W8%2BRFuAyw9lo8LVLyzmOU4%2BICNd795mZGalwCQztZoqB5kjjsdekdYUMe0FvAgqj6EvKCg30hq9zBu2QhMQSrGWTC9%2BMVbzuUn73Aw151ZNGgSckyquFm6b9YkFlJloI2aBmGB1LaAWu0WXPJRcA9bff%2FlNUPtM%2FdlKw75hvDgzbdflmkXqd542hlokSpeON7Du5sJMdVqTO91atSDfnwNDj4WnFWVQ82u9o6dWqfFEPoZbF58sxYhwlWBACFUPxWhLu3Zdnfakx7v4JUU2zoMi0sF1wrSJhJLLG5%2BSVuIFEUjEhjNFiyGgjO0JSIRiQZY%2Bj0KyDaOiqUZzoXrxMI6p33PjFxPOi10X11uT%2B8Jy7CibeKL2rxBh988AdlCi0aP%2FQ1rWTEAffIg%2FSReVTBmSHoxVvPwXqhiqhLmkDovxdoDTjT8dBjrnLLqkh6SFfolbKYTbce4e7DmFUE%2FV4ZtITsypVcTQEK%2F4ydk3%2Fi9Q4sv3DcGWHhkl8SU1qebyf1yFlu%2BAtNp88GXq6z8qmR1PDZGvDjggz6QcPXEWhAZZxUvRIxnu1Ixol6%2FNh4jabzJpkBUn8gdZaO9izgtjk552BGuexLzihPMPE26PgvdMIw%2BZK4xAY6pgH8%2FnN73qEgvm5Fi6gMKlBoPArLcuL5RoZG4Ukb9%2BkCoyzX0x0JbWhuthUVcrbFV5NCSxBXdTcVijD15VdTiYlXcZiYFhmog7hpFfIKFNozoeKA5bCMTXSD2zy%2FL72meRIkALFffW1DnCUfhvR2OUH7rWJfOTOpUCTH2DJPy19ftfkV62JTyAocFnRHTEBRQW5nayTO%2FcBCLREric4NajNHDh2rBn7E&X-Amz-Signature=acffda51568f40c3ea7863f6abd0fbad9e3ba4dd832a578c7e317bc0ba154b53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP2XUR53%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUQO2Yt2VaqyntRsaEaPse0Ouo2tA1j61fvVu6a1JEpAiBzxhqhUdWoIT52YuNx%2F%2Fg5dt46PSyhxpSkuOrCKH297Cr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMt%2Fl95TmvpJWlwwHoKtwDy0iyrGZV%2F4OspL1W8%2BRFuAyw9lo8LVLyzmOU4%2BICNd795mZGalwCQztZoqB5kjjsdekdYUMe0FvAgqj6EvKCg30hq9zBu2QhMQSrGWTC9%2BMVbzuUn73Aw151ZNGgSckyquFm6b9YkFlJloI2aBmGB1LaAWu0WXPJRcA9bff%2FlNUPtM%2FdlKw75hvDgzbdflmkXqd542hlokSpeON7Du5sJMdVqTO91atSDfnwNDj4WnFWVQ82u9o6dWqfFEPoZbF58sxYhwlWBACFUPxWhLu3Zdnfakx7v4JUU2zoMi0sF1wrSJhJLLG5%2BSVuIFEUjEhjNFiyGgjO0JSIRiQZY%2Bj0KyDaOiqUZzoXrxMI6p33PjFxPOi10X11uT%2B8Jy7CibeKL2rxBh988AdlCi0aP%2FQ1rWTEAffIg%2FSReVTBmSHoxVvPwXqhiqhLmkDovxdoDTjT8dBjrnLLqkh6SFfolbKYTbce4e7DmFUE%2FV4ZtITsypVcTQEK%2F4ydk3%2Fi9Q4sv3DcGWHhkl8SU1qebyf1yFlu%2BAtNp88GXq6z8qmR1PDZGvDjggz6QcPXEWhAZZxUvRIxnu1Ixol6%2FNh4jabzJpkBUn8gdZaO9izgtjk552BGuexLzihPMPE26PgvdMIw%2BZK4xAY6pgH8%2FnN73qEgvm5Fi6gMKlBoPArLcuL5RoZG4Ukb9%2BkCoyzX0x0JbWhuthUVcrbFV5NCSxBXdTcVijD15VdTiYlXcZiYFhmog7hpFfIKFNozoeKA5bCMTXSD2zy%2FL72meRIkALFffW1DnCUfhvR2OUH7rWJfOTOpUCTH2DJPy19ftfkV62JTyAocFnRHTEBRQW5nayTO%2FcBCLREric4NajNHDh2rBn7E&X-Amz-Signature=7a1c09fc7263a5d67b2f938dcf0a034bb79df7e0704f2fd238773101496d3f95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP2XUR53%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUQO2Yt2VaqyntRsaEaPse0Ouo2tA1j61fvVu6a1JEpAiBzxhqhUdWoIT52YuNx%2F%2Fg5dt46PSyhxpSkuOrCKH297Cr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMt%2Fl95TmvpJWlwwHoKtwDy0iyrGZV%2F4OspL1W8%2BRFuAyw9lo8LVLyzmOU4%2BICNd795mZGalwCQztZoqB5kjjsdekdYUMe0FvAgqj6EvKCg30hq9zBu2QhMQSrGWTC9%2BMVbzuUn73Aw151ZNGgSckyquFm6b9YkFlJloI2aBmGB1LaAWu0WXPJRcA9bff%2FlNUPtM%2FdlKw75hvDgzbdflmkXqd542hlokSpeON7Du5sJMdVqTO91atSDfnwNDj4WnFWVQ82u9o6dWqfFEPoZbF58sxYhwlWBACFUPxWhLu3Zdnfakx7v4JUU2zoMi0sF1wrSJhJLLG5%2BSVuIFEUjEhjNFiyGgjO0JSIRiQZY%2Bj0KyDaOiqUZzoXrxMI6p33PjFxPOi10X11uT%2B8Jy7CibeKL2rxBh988AdlCi0aP%2FQ1rWTEAffIg%2FSReVTBmSHoxVvPwXqhiqhLmkDovxdoDTjT8dBjrnLLqkh6SFfolbKYTbce4e7DmFUE%2FV4ZtITsypVcTQEK%2F4ydk3%2Fi9Q4sv3DcGWHhkl8SU1qebyf1yFlu%2BAtNp88GXq6z8qmR1PDZGvDjggz6QcPXEWhAZZxUvRIxnu1Ixol6%2FNh4jabzJpkBUn8gdZaO9izgtjk552BGuexLzihPMPE26PgvdMIw%2BZK4xAY6pgH8%2FnN73qEgvm5Fi6gMKlBoPArLcuL5RoZG4Ukb9%2BkCoyzX0x0JbWhuthUVcrbFV5NCSxBXdTcVijD15VdTiYlXcZiYFhmog7hpFfIKFNozoeKA5bCMTXSD2zy%2FL72meRIkALFffW1DnCUfhvR2OUH7rWJfOTOpUCTH2DJPy19ftfkV62JTyAocFnRHTEBRQW5nayTO%2FcBCLREric4NajNHDh2rBn7E&X-Amz-Signature=fd533f0c045cde23096c048e0288332aa7b4e11f45b0ec9affbda2d896dbdfa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP2XUR53%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUQO2Yt2VaqyntRsaEaPse0Ouo2tA1j61fvVu6a1JEpAiBzxhqhUdWoIT52YuNx%2F%2Fg5dt46PSyhxpSkuOrCKH297Cr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMt%2Fl95TmvpJWlwwHoKtwDy0iyrGZV%2F4OspL1W8%2BRFuAyw9lo8LVLyzmOU4%2BICNd795mZGalwCQztZoqB5kjjsdekdYUMe0FvAgqj6EvKCg30hq9zBu2QhMQSrGWTC9%2BMVbzuUn73Aw151ZNGgSckyquFm6b9YkFlJloI2aBmGB1LaAWu0WXPJRcA9bff%2FlNUPtM%2FdlKw75hvDgzbdflmkXqd542hlokSpeON7Du5sJMdVqTO91atSDfnwNDj4WnFWVQ82u9o6dWqfFEPoZbF58sxYhwlWBACFUPxWhLu3Zdnfakx7v4JUU2zoMi0sF1wrSJhJLLG5%2BSVuIFEUjEhjNFiyGgjO0JSIRiQZY%2Bj0KyDaOiqUZzoXrxMI6p33PjFxPOi10X11uT%2B8Jy7CibeKL2rxBh988AdlCi0aP%2FQ1rWTEAffIg%2FSReVTBmSHoxVvPwXqhiqhLmkDovxdoDTjT8dBjrnLLqkh6SFfolbKYTbce4e7DmFUE%2FV4ZtITsypVcTQEK%2F4ydk3%2Fi9Q4sv3DcGWHhkl8SU1qebyf1yFlu%2BAtNp88GXq6z8qmR1PDZGvDjggz6QcPXEWhAZZxUvRIxnu1Ixol6%2FNh4jabzJpkBUn8gdZaO9izgtjk552BGuexLzihPMPE26PgvdMIw%2BZK4xAY6pgH8%2FnN73qEgvm5Fi6gMKlBoPArLcuL5RoZG4Ukb9%2BkCoyzX0x0JbWhuthUVcrbFV5NCSxBXdTcVijD15VdTiYlXcZiYFhmog7hpFfIKFNozoeKA5bCMTXSD2zy%2FL72meRIkALFffW1DnCUfhvR2OUH7rWJfOTOpUCTH2DJPy19ftfkV62JTyAocFnRHTEBRQW5nayTO%2FcBCLREric4NajNHDh2rBn7E&X-Amz-Signature=c537333286737ac8cd00ca8e3927d815226861b0652912ffba89a8a844d0196f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP2XUR53%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUQO2Yt2VaqyntRsaEaPse0Ouo2tA1j61fvVu6a1JEpAiBzxhqhUdWoIT52YuNx%2F%2Fg5dt46PSyhxpSkuOrCKH297Cr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMt%2Fl95TmvpJWlwwHoKtwDy0iyrGZV%2F4OspL1W8%2BRFuAyw9lo8LVLyzmOU4%2BICNd795mZGalwCQztZoqB5kjjsdekdYUMe0FvAgqj6EvKCg30hq9zBu2QhMQSrGWTC9%2BMVbzuUn73Aw151ZNGgSckyquFm6b9YkFlJloI2aBmGB1LaAWu0WXPJRcA9bff%2FlNUPtM%2FdlKw75hvDgzbdflmkXqd542hlokSpeON7Du5sJMdVqTO91atSDfnwNDj4WnFWVQ82u9o6dWqfFEPoZbF58sxYhwlWBACFUPxWhLu3Zdnfakx7v4JUU2zoMi0sF1wrSJhJLLG5%2BSVuIFEUjEhjNFiyGgjO0JSIRiQZY%2Bj0KyDaOiqUZzoXrxMI6p33PjFxPOi10X11uT%2B8Jy7CibeKL2rxBh988AdlCi0aP%2FQ1rWTEAffIg%2FSReVTBmSHoxVvPwXqhiqhLmkDovxdoDTjT8dBjrnLLqkh6SFfolbKYTbce4e7DmFUE%2FV4ZtITsypVcTQEK%2F4ydk3%2Fi9Q4sv3DcGWHhkl8SU1qebyf1yFlu%2BAtNp88GXq6z8qmR1PDZGvDjggz6QcPXEWhAZZxUvRIxnu1Ixol6%2FNh4jabzJpkBUn8gdZaO9izgtjk552BGuexLzihPMPE26PgvdMIw%2BZK4xAY6pgH8%2FnN73qEgvm5Fi6gMKlBoPArLcuL5RoZG4Ukb9%2BkCoyzX0x0JbWhuthUVcrbFV5NCSxBXdTcVijD15VdTiYlXcZiYFhmog7hpFfIKFNozoeKA5bCMTXSD2zy%2FL72meRIkALFffW1DnCUfhvR2OUH7rWJfOTOpUCTH2DJPy19ftfkV62JTyAocFnRHTEBRQW5nayTO%2FcBCLREric4NajNHDh2rBn7E&X-Amz-Signature=e24d03635dbc929e2191679a9abb38a153d39411fdff3819b8236805d75905fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP2XUR53%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUQO2Yt2VaqyntRsaEaPse0Ouo2tA1j61fvVu6a1JEpAiBzxhqhUdWoIT52YuNx%2F%2Fg5dt46PSyhxpSkuOrCKH297Cr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMt%2Fl95TmvpJWlwwHoKtwDy0iyrGZV%2F4OspL1W8%2BRFuAyw9lo8LVLyzmOU4%2BICNd795mZGalwCQztZoqB5kjjsdekdYUMe0FvAgqj6EvKCg30hq9zBu2QhMQSrGWTC9%2BMVbzuUn73Aw151ZNGgSckyquFm6b9YkFlJloI2aBmGB1LaAWu0WXPJRcA9bff%2FlNUPtM%2FdlKw75hvDgzbdflmkXqd542hlokSpeON7Du5sJMdVqTO91atSDfnwNDj4WnFWVQ82u9o6dWqfFEPoZbF58sxYhwlWBACFUPxWhLu3Zdnfakx7v4JUU2zoMi0sF1wrSJhJLLG5%2BSVuIFEUjEhjNFiyGgjO0JSIRiQZY%2Bj0KyDaOiqUZzoXrxMI6p33PjFxPOi10X11uT%2B8Jy7CibeKL2rxBh988AdlCi0aP%2FQ1rWTEAffIg%2FSReVTBmSHoxVvPwXqhiqhLmkDovxdoDTjT8dBjrnLLqkh6SFfolbKYTbce4e7DmFUE%2FV4ZtITsypVcTQEK%2F4ydk3%2Fi9Q4sv3DcGWHhkl8SU1qebyf1yFlu%2BAtNp88GXq6z8qmR1PDZGvDjggz6QcPXEWhAZZxUvRIxnu1Ixol6%2FNh4jabzJpkBUn8gdZaO9izgtjk552BGuexLzihPMPE26PgvdMIw%2BZK4xAY6pgH8%2FnN73qEgvm5Fi6gMKlBoPArLcuL5RoZG4Ukb9%2BkCoyzX0x0JbWhuthUVcrbFV5NCSxBXdTcVijD15VdTiYlXcZiYFhmog7hpFfIKFNozoeKA5bCMTXSD2zy%2FL72meRIkALFffW1DnCUfhvR2OUH7rWJfOTOpUCTH2DJPy19ftfkV62JTyAocFnRHTEBRQW5nayTO%2FcBCLREric4NajNHDh2rBn7E&X-Amz-Signature=161d91c9575a29f642f51b39ceeca9f88876ac54fe59adc976c195a2b5c72c7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP2XUR53%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUQO2Yt2VaqyntRsaEaPse0Ouo2tA1j61fvVu6a1JEpAiBzxhqhUdWoIT52YuNx%2F%2Fg5dt46PSyhxpSkuOrCKH297Cr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMt%2Fl95TmvpJWlwwHoKtwDy0iyrGZV%2F4OspL1W8%2BRFuAyw9lo8LVLyzmOU4%2BICNd795mZGalwCQztZoqB5kjjsdekdYUMe0FvAgqj6EvKCg30hq9zBu2QhMQSrGWTC9%2BMVbzuUn73Aw151ZNGgSckyquFm6b9YkFlJloI2aBmGB1LaAWu0WXPJRcA9bff%2FlNUPtM%2FdlKw75hvDgzbdflmkXqd542hlokSpeON7Du5sJMdVqTO91atSDfnwNDj4WnFWVQ82u9o6dWqfFEPoZbF58sxYhwlWBACFUPxWhLu3Zdnfakx7v4JUU2zoMi0sF1wrSJhJLLG5%2BSVuIFEUjEhjNFiyGgjO0JSIRiQZY%2Bj0KyDaOiqUZzoXrxMI6p33PjFxPOi10X11uT%2B8Jy7CibeKL2rxBh988AdlCi0aP%2FQ1rWTEAffIg%2FSReVTBmSHoxVvPwXqhiqhLmkDovxdoDTjT8dBjrnLLqkh6SFfolbKYTbce4e7DmFUE%2FV4ZtITsypVcTQEK%2F4ydk3%2Fi9Q4sv3DcGWHhkl8SU1qebyf1yFlu%2BAtNp88GXq6z8qmR1PDZGvDjggz6QcPXEWhAZZxUvRIxnu1Ixol6%2FNh4jabzJpkBUn8gdZaO9izgtjk552BGuexLzihPMPE26PgvdMIw%2BZK4xAY6pgH8%2FnN73qEgvm5Fi6gMKlBoPArLcuL5RoZG4Ukb9%2BkCoyzX0x0JbWhuthUVcrbFV5NCSxBXdTcVijD15VdTiYlXcZiYFhmog7hpFfIKFNozoeKA5bCMTXSD2zy%2FL72meRIkALFffW1DnCUfhvR2OUH7rWJfOTOpUCTH2DJPy19ftfkV62JTyAocFnRHTEBRQW5nayTO%2FcBCLREric4NajNHDh2rBn7E&X-Amz-Signature=5e1c26ff1881ef03baa252b1cbbf29c8ba88cb8a2b9c8534dada418d3b7462a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
