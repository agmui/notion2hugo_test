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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPEFAPDV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIHO8FPgW7NO%2FIsnO%2BAJMflKiC8ieystf8SHzLV7vV3PSAiB6odSOLIQQtTFx2iTQON%2BGCrjAI1Ge95m3%2F%2Bw6RHfHcSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMS3lmkOw6ByitJIHGKtwDnBguHjTA9K5f%2FWKGcIIawiQqFejOVmJljCuuc2lmB2TtP0brBEHUsV3VU2mZr5S%2Fp8htELhVuuZ7I9KsUOJ8rCAvMepX7QtIPBKt4taEYiZI7DgcmDuGCwKpQlphH6mRtTqovTH9l188M4CuXREwmQx0Np66gQygE41i1y6VsaPZrk4pTAnt4zR3%2BrPoOLKYxsm7%2F32a9Z0VGE353fbqcv4z2ktjML62Nm%2FclQ%2BPGpFOCrlvVnskPqQop%2BZJa9Yv3z4xLkiR8S5Ua9Rz1AF1jLiXnSCSLnkZHYe2LRkxxj85zBOETNzlP6i6ruBTLap1J7FzTBsxKa11Hfrf%2FRpdWGuD3jKdo2OyGt0rH%2B03MPHnyBWc%2Bu88JFyJai57vVworI9oPMdBb9lawUKAyVvF3cDZxw7yNtfTuCXtL80bcK%2BqAH%2BkKsTbl%2BSNhtsryldNYr2dc%2F7x6PFAkw8Igh59mLSyaGne6aH8e2beRkZkd0gOjPooIpNixmxo%2BF2oEwKhTtSnOXLoZpCBta65vx8PfUPFMwKRSOuR59XVkHnv7uvxL%2F%2Bz5quRdH%2FIGXT%2B4Nq4HJB%2F3sFO3dxanKULooMfwFEByd6gdvG68nTFaNzZxbc4cATgrJTzSxwChMcwqp%2F4xAY6pgEC2VQLW2OguTtWbbAk0RlFtkoC7TYiyF%2F4qXix1OGZHlDpddqwcaMLcDVywnDXhL%2FtEAEulS%2FMkD2EB404%2BRe%2B8JKuPzKTpXMFyjhWaZbqScylwn7Y%2FUqlI8FqREnKVGOBZD1xyCedbz%2BfMv8j%2Bs29Gu0cr31HZIvUC0O%2FsRevrtklxj6IJOtraBnFF38UZLD%2FIe33clKGJAq8oEJTU3oyxyZ4AIxA&X-Amz-Signature=6379565114b1cb58cf0e0b9e3f9e3a4187a29663f8e5ec6532eda2a16cad6668&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPEFAPDV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIHO8FPgW7NO%2FIsnO%2BAJMflKiC8ieystf8SHzLV7vV3PSAiB6odSOLIQQtTFx2iTQON%2BGCrjAI1Ge95m3%2F%2Bw6RHfHcSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMS3lmkOw6ByitJIHGKtwDnBguHjTA9K5f%2FWKGcIIawiQqFejOVmJljCuuc2lmB2TtP0brBEHUsV3VU2mZr5S%2Fp8htELhVuuZ7I9KsUOJ8rCAvMepX7QtIPBKt4taEYiZI7DgcmDuGCwKpQlphH6mRtTqovTH9l188M4CuXREwmQx0Np66gQygE41i1y6VsaPZrk4pTAnt4zR3%2BrPoOLKYxsm7%2F32a9Z0VGE353fbqcv4z2ktjML62Nm%2FclQ%2BPGpFOCrlvVnskPqQop%2BZJa9Yv3z4xLkiR8S5Ua9Rz1AF1jLiXnSCSLnkZHYe2LRkxxj85zBOETNzlP6i6ruBTLap1J7FzTBsxKa11Hfrf%2FRpdWGuD3jKdo2OyGt0rH%2B03MPHnyBWc%2Bu88JFyJai57vVworI9oPMdBb9lawUKAyVvF3cDZxw7yNtfTuCXtL80bcK%2BqAH%2BkKsTbl%2BSNhtsryldNYr2dc%2F7x6PFAkw8Igh59mLSyaGne6aH8e2beRkZkd0gOjPooIpNixmxo%2BF2oEwKhTtSnOXLoZpCBta65vx8PfUPFMwKRSOuR59XVkHnv7uvxL%2F%2Bz5quRdH%2FIGXT%2B4Nq4HJB%2F3sFO3dxanKULooMfwFEByd6gdvG68nTFaNzZxbc4cATgrJTzSxwChMcwqp%2F4xAY6pgEC2VQLW2OguTtWbbAk0RlFtkoC7TYiyF%2F4qXix1OGZHlDpddqwcaMLcDVywnDXhL%2FtEAEulS%2FMkD2EB404%2BRe%2B8JKuPzKTpXMFyjhWaZbqScylwn7Y%2FUqlI8FqREnKVGOBZD1xyCedbz%2BfMv8j%2Bs29Gu0cr31HZIvUC0O%2FsRevrtklxj6IJOtraBnFF38UZLD%2FIe33clKGJAq8oEJTU3oyxyZ4AIxA&X-Amz-Signature=3c2211cb6545463982572aa2412c4ddaa282a392d5f5cd7d381bd50e5aa62e41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPEFAPDV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIHO8FPgW7NO%2FIsnO%2BAJMflKiC8ieystf8SHzLV7vV3PSAiB6odSOLIQQtTFx2iTQON%2BGCrjAI1Ge95m3%2F%2Bw6RHfHcSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMS3lmkOw6ByitJIHGKtwDnBguHjTA9K5f%2FWKGcIIawiQqFejOVmJljCuuc2lmB2TtP0brBEHUsV3VU2mZr5S%2Fp8htELhVuuZ7I9KsUOJ8rCAvMepX7QtIPBKt4taEYiZI7DgcmDuGCwKpQlphH6mRtTqovTH9l188M4CuXREwmQx0Np66gQygE41i1y6VsaPZrk4pTAnt4zR3%2BrPoOLKYxsm7%2F32a9Z0VGE353fbqcv4z2ktjML62Nm%2FclQ%2BPGpFOCrlvVnskPqQop%2BZJa9Yv3z4xLkiR8S5Ua9Rz1AF1jLiXnSCSLnkZHYe2LRkxxj85zBOETNzlP6i6ruBTLap1J7FzTBsxKa11Hfrf%2FRpdWGuD3jKdo2OyGt0rH%2B03MPHnyBWc%2Bu88JFyJai57vVworI9oPMdBb9lawUKAyVvF3cDZxw7yNtfTuCXtL80bcK%2BqAH%2BkKsTbl%2BSNhtsryldNYr2dc%2F7x6PFAkw8Igh59mLSyaGne6aH8e2beRkZkd0gOjPooIpNixmxo%2BF2oEwKhTtSnOXLoZpCBta65vx8PfUPFMwKRSOuR59XVkHnv7uvxL%2F%2Bz5quRdH%2FIGXT%2B4Nq4HJB%2F3sFO3dxanKULooMfwFEByd6gdvG68nTFaNzZxbc4cATgrJTzSxwChMcwqp%2F4xAY6pgEC2VQLW2OguTtWbbAk0RlFtkoC7TYiyF%2F4qXix1OGZHlDpddqwcaMLcDVywnDXhL%2FtEAEulS%2FMkD2EB404%2BRe%2B8JKuPzKTpXMFyjhWaZbqScylwn7Y%2FUqlI8FqREnKVGOBZD1xyCedbz%2BfMv8j%2Bs29Gu0cr31HZIvUC0O%2FsRevrtklxj6IJOtraBnFF38UZLD%2FIe33clKGJAq8oEJTU3oyxyZ4AIxA&X-Amz-Signature=07c43fc43fad25418911f2b1aa44944a03f4af56d3d93564bcb21cd42ff646f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPEFAPDV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIHO8FPgW7NO%2FIsnO%2BAJMflKiC8ieystf8SHzLV7vV3PSAiB6odSOLIQQtTFx2iTQON%2BGCrjAI1Ge95m3%2F%2Bw6RHfHcSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMS3lmkOw6ByitJIHGKtwDnBguHjTA9K5f%2FWKGcIIawiQqFejOVmJljCuuc2lmB2TtP0brBEHUsV3VU2mZr5S%2Fp8htELhVuuZ7I9KsUOJ8rCAvMepX7QtIPBKt4taEYiZI7DgcmDuGCwKpQlphH6mRtTqovTH9l188M4CuXREwmQx0Np66gQygE41i1y6VsaPZrk4pTAnt4zR3%2BrPoOLKYxsm7%2F32a9Z0VGE353fbqcv4z2ktjML62Nm%2FclQ%2BPGpFOCrlvVnskPqQop%2BZJa9Yv3z4xLkiR8S5Ua9Rz1AF1jLiXnSCSLnkZHYe2LRkxxj85zBOETNzlP6i6ruBTLap1J7FzTBsxKa11Hfrf%2FRpdWGuD3jKdo2OyGt0rH%2B03MPHnyBWc%2Bu88JFyJai57vVworI9oPMdBb9lawUKAyVvF3cDZxw7yNtfTuCXtL80bcK%2BqAH%2BkKsTbl%2BSNhtsryldNYr2dc%2F7x6PFAkw8Igh59mLSyaGne6aH8e2beRkZkd0gOjPooIpNixmxo%2BF2oEwKhTtSnOXLoZpCBta65vx8PfUPFMwKRSOuR59XVkHnv7uvxL%2F%2Bz5quRdH%2FIGXT%2B4Nq4HJB%2F3sFO3dxanKULooMfwFEByd6gdvG68nTFaNzZxbc4cATgrJTzSxwChMcwqp%2F4xAY6pgEC2VQLW2OguTtWbbAk0RlFtkoC7TYiyF%2F4qXix1OGZHlDpddqwcaMLcDVywnDXhL%2FtEAEulS%2FMkD2EB404%2BRe%2B8JKuPzKTpXMFyjhWaZbqScylwn7Y%2FUqlI8FqREnKVGOBZD1xyCedbz%2BfMv8j%2Bs29Gu0cr31HZIvUC0O%2FsRevrtklxj6IJOtraBnFF38UZLD%2FIe33clKGJAq8oEJTU3oyxyZ4AIxA&X-Amz-Signature=ff622a56b69fb6d37141e6d87a2d6048c2ed3383e688abf0831941b1ef5046a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPEFAPDV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIHO8FPgW7NO%2FIsnO%2BAJMflKiC8ieystf8SHzLV7vV3PSAiB6odSOLIQQtTFx2iTQON%2BGCrjAI1Ge95m3%2F%2Bw6RHfHcSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMS3lmkOw6ByitJIHGKtwDnBguHjTA9K5f%2FWKGcIIawiQqFejOVmJljCuuc2lmB2TtP0brBEHUsV3VU2mZr5S%2Fp8htELhVuuZ7I9KsUOJ8rCAvMepX7QtIPBKt4taEYiZI7DgcmDuGCwKpQlphH6mRtTqovTH9l188M4CuXREwmQx0Np66gQygE41i1y6VsaPZrk4pTAnt4zR3%2BrPoOLKYxsm7%2F32a9Z0VGE353fbqcv4z2ktjML62Nm%2FclQ%2BPGpFOCrlvVnskPqQop%2BZJa9Yv3z4xLkiR8S5Ua9Rz1AF1jLiXnSCSLnkZHYe2LRkxxj85zBOETNzlP6i6ruBTLap1J7FzTBsxKa11Hfrf%2FRpdWGuD3jKdo2OyGt0rH%2B03MPHnyBWc%2Bu88JFyJai57vVworI9oPMdBb9lawUKAyVvF3cDZxw7yNtfTuCXtL80bcK%2BqAH%2BkKsTbl%2BSNhtsryldNYr2dc%2F7x6PFAkw8Igh59mLSyaGne6aH8e2beRkZkd0gOjPooIpNixmxo%2BF2oEwKhTtSnOXLoZpCBta65vx8PfUPFMwKRSOuR59XVkHnv7uvxL%2F%2Bz5quRdH%2FIGXT%2B4Nq4HJB%2F3sFO3dxanKULooMfwFEByd6gdvG68nTFaNzZxbc4cATgrJTzSxwChMcwqp%2F4xAY6pgEC2VQLW2OguTtWbbAk0RlFtkoC7TYiyF%2F4qXix1OGZHlDpddqwcaMLcDVywnDXhL%2FtEAEulS%2FMkD2EB404%2BRe%2B8JKuPzKTpXMFyjhWaZbqScylwn7Y%2FUqlI8FqREnKVGOBZD1xyCedbz%2BfMv8j%2Bs29Gu0cr31HZIvUC0O%2FsRevrtklxj6IJOtraBnFF38UZLD%2FIe33clKGJAq8oEJTU3oyxyZ4AIxA&X-Amz-Signature=7495838fbd751e3fb3308b7da31737abfd5b01b3e0166ac1e55ef6595a7767a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPEFAPDV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIHO8FPgW7NO%2FIsnO%2BAJMflKiC8ieystf8SHzLV7vV3PSAiB6odSOLIQQtTFx2iTQON%2BGCrjAI1Ge95m3%2F%2Bw6RHfHcSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMS3lmkOw6ByitJIHGKtwDnBguHjTA9K5f%2FWKGcIIawiQqFejOVmJljCuuc2lmB2TtP0brBEHUsV3VU2mZr5S%2Fp8htELhVuuZ7I9KsUOJ8rCAvMepX7QtIPBKt4taEYiZI7DgcmDuGCwKpQlphH6mRtTqovTH9l188M4CuXREwmQx0Np66gQygE41i1y6VsaPZrk4pTAnt4zR3%2BrPoOLKYxsm7%2F32a9Z0VGE353fbqcv4z2ktjML62Nm%2FclQ%2BPGpFOCrlvVnskPqQop%2BZJa9Yv3z4xLkiR8S5Ua9Rz1AF1jLiXnSCSLnkZHYe2LRkxxj85zBOETNzlP6i6ruBTLap1J7FzTBsxKa11Hfrf%2FRpdWGuD3jKdo2OyGt0rH%2B03MPHnyBWc%2Bu88JFyJai57vVworI9oPMdBb9lawUKAyVvF3cDZxw7yNtfTuCXtL80bcK%2BqAH%2BkKsTbl%2BSNhtsryldNYr2dc%2F7x6PFAkw8Igh59mLSyaGne6aH8e2beRkZkd0gOjPooIpNixmxo%2BF2oEwKhTtSnOXLoZpCBta65vx8PfUPFMwKRSOuR59XVkHnv7uvxL%2F%2Bz5quRdH%2FIGXT%2B4Nq4HJB%2F3sFO3dxanKULooMfwFEByd6gdvG68nTFaNzZxbc4cATgrJTzSxwChMcwqp%2F4xAY6pgEC2VQLW2OguTtWbbAk0RlFtkoC7TYiyF%2F4qXix1OGZHlDpddqwcaMLcDVywnDXhL%2FtEAEulS%2FMkD2EB404%2BRe%2B8JKuPzKTpXMFyjhWaZbqScylwn7Y%2FUqlI8FqREnKVGOBZD1xyCedbz%2BfMv8j%2Bs29Gu0cr31HZIvUC0O%2FsRevrtklxj6IJOtraBnFF38UZLD%2FIe33clKGJAq8oEJTU3oyxyZ4AIxA&X-Amz-Signature=5358eb858ab5fa383fdee9160f9e6603cc27a72debc06ad27f154d1b21d7d62b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPEFAPDV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIHO8FPgW7NO%2FIsnO%2BAJMflKiC8ieystf8SHzLV7vV3PSAiB6odSOLIQQtTFx2iTQON%2BGCrjAI1Ge95m3%2F%2Bw6RHfHcSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMS3lmkOw6ByitJIHGKtwDnBguHjTA9K5f%2FWKGcIIawiQqFejOVmJljCuuc2lmB2TtP0brBEHUsV3VU2mZr5S%2Fp8htELhVuuZ7I9KsUOJ8rCAvMepX7QtIPBKt4taEYiZI7DgcmDuGCwKpQlphH6mRtTqovTH9l188M4CuXREwmQx0Np66gQygE41i1y6VsaPZrk4pTAnt4zR3%2BrPoOLKYxsm7%2F32a9Z0VGE353fbqcv4z2ktjML62Nm%2FclQ%2BPGpFOCrlvVnskPqQop%2BZJa9Yv3z4xLkiR8S5Ua9Rz1AF1jLiXnSCSLnkZHYe2LRkxxj85zBOETNzlP6i6ruBTLap1J7FzTBsxKa11Hfrf%2FRpdWGuD3jKdo2OyGt0rH%2B03MPHnyBWc%2Bu88JFyJai57vVworI9oPMdBb9lawUKAyVvF3cDZxw7yNtfTuCXtL80bcK%2BqAH%2BkKsTbl%2BSNhtsryldNYr2dc%2F7x6PFAkw8Igh59mLSyaGne6aH8e2beRkZkd0gOjPooIpNixmxo%2BF2oEwKhTtSnOXLoZpCBta65vx8PfUPFMwKRSOuR59XVkHnv7uvxL%2F%2Bz5quRdH%2FIGXT%2B4Nq4HJB%2F3sFO3dxanKULooMfwFEByd6gdvG68nTFaNzZxbc4cATgrJTzSxwChMcwqp%2F4xAY6pgEC2VQLW2OguTtWbbAk0RlFtkoC7TYiyF%2F4qXix1OGZHlDpddqwcaMLcDVywnDXhL%2FtEAEulS%2FMkD2EB404%2BRe%2B8JKuPzKTpXMFyjhWaZbqScylwn7Y%2FUqlI8FqREnKVGOBZD1xyCedbz%2BfMv8j%2Bs29Gu0cr31HZIvUC0O%2FsRevrtklxj6IJOtraBnFF38UZLD%2FIe33clKGJAq8oEJTU3oyxyZ4AIxA&X-Amz-Signature=e96c5807e73cbf130b262ce7747febac4abb7da011bce8b702ce52c86f7a7f7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPEFAPDV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIHO8FPgW7NO%2FIsnO%2BAJMflKiC8ieystf8SHzLV7vV3PSAiB6odSOLIQQtTFx2iTQON%2BGCrjAI1Ge95m3%2F%2Bw6RHfHcSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMS3lmkOw6ByitJIHGKtwDnBguHjTA9K5f%2FWKGcIIawiQqFejOVmJljCuuc2lmB2TtP0brBEHUsV3VU2mZr5S%2Fp8htELhVuuZ7I9KsUOJ8rCAvMepX7QtIPBKt4taEYiZI7DgcmDuGCwKpQlphH6mRtTqovTH9l188M4CuXREwmQx0Np66gQygE41i1y6VsaPZrk4pTAnt4zR3%2BrPoOLKYxsm7%2F32a9Z0VGE353fbqcv4z2ktjML62Nm%2FclQ%2BPGpFOCrlvVnskPqQop%2BZJa9Yv3z4xLkiR8S5Ua9Rz1AF1jLiXnSCSLnkZHYe2LRkxxj85zBOETNzlP6i6ruBTLap1J7FzTBsxKa11Hfrf%2FRpdWGuD3jKdo2OyGt0rH%2B03MPHnyBWc%2Bu88JFyJai57vVworI9oPMdBb9lawUKAyVvF3cDZxw7yNtfTuCXtL80bcK%2BqAH%2BkKsTbl%2BSNhtsryldNYr2dc%2F7x6PFAkw8Igh59mLSyaGne6aH8e2beRkZkd0gOjPooIpNixmxo%2BF2oEwKhTtSnOXLoZpCBta65vx8PfUPFMwKRSOuR59XVkHnv7uvxL%2F%2Bz5quRdH%2FIGXT%2B4Nq4HJB%2F3sFO3dxanKULooMfwFEByd6gdvG68nTFaNzZxbc4cATgrJTzSxwChMcwqp%2F4xAY6pgEC2VQLW2OguTtWbbAk0RlFtkoC7TYiyF%2F4qXix1OGZHlDpddqwcaMLcDVywnDXhL%2FtEAEulS%2FMkD2EB404%2BRe%2B8JKuPzKTpXMFyjhWaZbqScylwn7Y%2FUqlI8FqREnKVGOBZD1xyCedbz%2BfMv8j%2Bs29Gu0cr31HZIvUC0O%2FsRevrtklxj6IJOtraBnFF38UZLD%2FIe33clKGJAq8oEJTU3oyxyZ4AIxA&X-Amz-Signature=e33135782176041a3c22b832045c9e976d46074e342dc8d6efde9fe0c2f11ca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPEFAPDV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIHO8FPgW7NO%2FIsnO%2BAJMflKiC8ieystf8SHzLV7vV3PSAiB6odSOLIQQtTFx2iTQON%2BGCrjAI1Ge95m3%2F%2Bw6RHfHcSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMS3lmkOw6ByitJIHGKtwDnBguHjTA9K5f%2FWKGcIIawiQqFejOVmJljCuuc2lmB2TtP0brBEHUsV3VU2mZr5S%2Fp8htELhVuuZ7I9KsUOJ8rCAvMepX7QtIPBKt4taEYiZI7DgcmDuGCwKpQlphH6mRtTqovTH9l188M4CuXREwmQx0Np66gQygE41i1y6VsaPZrk4pTAnt4zR3%2BrPoOLKYxsm7%2F32a9Z0VGE353fbqcv4z2ktjML62Nm%2FclQ%2BPGpFOCrlvVnskPqQop%2BZJa9Yv3z4xLkiR8S5Ua9Rz1AF1jLiXnSCSLnkZHYe2LRkxxj85zBOETNzlP6i6ruBTLap1J7FzTBsxKa11Hfrf%2FRpdWGuD3jKdo2OyGt0rH%2B03MPHnyBWc%2Bu88JFyJai57vVworI9oPMdBb9lawUKAyVvF3cDZxw7yNtfTuCXtL80bcK%2BqAH%2BkKsTbl%2BSNhtsryldNYr2dc%2F7x6PFAkw8Igh59mLSyaGne6aH8e2beRkZkd0gOjPooIpNixmxo%2BF2oEwKhTtSnOXLoZpCBta65vx8PfUPFMwKRSOuR59XVkHnv7uvxL%2F%2Bz5quRdH%2FIGXT%2B4Nq4HJB%2F3sFO3dxanKULooMfwFEByd6gdvG68nTFaNzZxbc4cATgrJTzSxwChMcwqp%2F4xAY6pgEC2VQLW2OguTtWbbAk0RlFtkoC7TYiyF%2F4qXix1OGZHlDpddqwcaMLcDVywnDXhL%2FtEAEulS%2FMkD2EB404%2BRe%2B8JKuPzKTpXMFyjhWaZbqScylwn7Y%2FUqlI8FqREnKVGOBZD1xyCedbz%2BfMv8j%2Bs29Gu0cr31HZIvUC0O%2FsRevrtklxj6IJOtraBnFF38UZLD%2FIe33clKGJAq8oEJTU3oyxyZ4AIxA&X-Amz-Signature=7500c44f2fb55a03d869f7f5d4cba9044ad265ac8335e6bd50c7b2795def4d27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPEFAPDV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIHO8FPgW7NO%2FIsnO%2BAJMflKiC8ieystf8SHzLV7vV3PSAiB6odSOLIQQtTFx2iTQON%2BGCrjAI1Ge95m3%2F%2Bw6RHfHcSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMS3lmkOw6ByitJIHGKtwDnBguHjTA9K5f%2FWKGcIIawiQqFejOVmJljCuuc2lmB2TtP0brBEHUsV3VU2mZr5S%2Fp8htELhVuuZ7I9KsUOJ8rCAvMepX7QtIPBKt4taEYiZI7DgcmDuGCwKpQlphH6mRtTqovTH9l188M4CuXREwmQx0Np66gQygE41i1y6VsaPZrk4pTAnt4zR3%2BrPoOLKYxsm7%2F32a9Z0VGE353fbqcv4z2ktjML62Nm%2FclQ%2BPGpFOCrlvVnskPqQop%2BZJa9Yv3z4xLkiR8S5Ua9Rz1AF1jLiXnSCSLnkZHYe2LRkxxj85zBOETNzlP6i6ruBTLap1J7FzTBsxKa11Hfrf%2FRpdWGuD3jKdo2OyGt0rH%2B03MPHnyBWc%2Bu88JFyJai57vVworI9oPMdBb9lawUKAyVvF3cDZxw7yNtfTuCXtL80bcK%2BqAH%2BkKsTbl%2BSNhtsryldNYr2dc%2F7x6PFAkw8Igh59mLSyaGne6aH8e2beRkZkd0gOjPooIpNixmxo%2BF2oEwKhTtSnOXLoZpCBta65vx8PfUPFMwKRSOuR59XVkHnv7uvxL%2F%2Bz5quRdH%2FIGXT%2B4Nq4HJB%2F3sFO3dxanKULooMfwFEByd6gdvG68nTFaNzZxbc4cATgrJTzSxwChMcwqp%2F4xAY6pgEC2VQLW2OguTtWbbAk0RlFtkoC7TYiyF%2F4qXix1OGZHlDpddqwcaMLcDVywnDXhL%2FtEAEulS%2FMkD2EB404%2BRe%2B8JKuPzKTpXMFyjhWaZbqScylwn7Y%2FUqlI8FqREnKVGOBZD1xyCedbz%2BfMv8j%2Bs29Gu0cr31HZIvUC0O%2FsRevrtklxj6IJOtraBnFF38UZLD%2FIe33clKGJAq8oEJTU3oyxyZ4AIxA&X-Amz-Signature=f586e9c8c73e586080637a4936a89a2f3c949b158d9e8c8f13b56549512488f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPAJXCX6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T171009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCP3o%2FjjYDDf8j5%2B41W5GNPDdEo8ovuXvaBWDbzYyk9OgIhAO5R6LgpeajbgWATUzjS3WiODiRE%2FJjVqK3QRuyz42P5Kv8DCEoQABoMNjM3NDIzMTgzODA1IgzSlObYwej1WW%2BDQc8q3AMIb2nFHsAzlam6VF7j%2B0fBVkSxXu5pZiBSY43HfwOB3op9cvE%2BdX%2FxqNiL95z8w%2BmyMirsnIPghfuAb%2B4nBaAM2vQSiZYPo00CWEN8d2G1EIQIU3%2B22tE0DuKhTQJpIbDYAANHsfznkeO9hk4teUl7EMU4Y4XwGDiauUnyaC0oyThdA%2BiDV3d4DkFCJXH8NzhECYClwi6Fy5uZEGFHj737XwkcovcN%2FV%2BAIo0XN5BjSMothVbFCx1EDZgN%2FLlb8njUTsZQYFJdAXCY7Fg1j06WCFn1n2%2FeQ%2F4vAB3EtdMJJrlUquQmJQn0IdIUbdjEhAPVPZzSqc9IIYka62KK7R7eoKWU%2Bw4b%2FIMKGYVSrOtycl7V0lZuH3pb%2B4yTTfdpdXxeczK5t24AqmGrzFJHoLsORobX7%2Bwwgq5z1ILcSmFRJADUcpgjHPqVzCmGRw8C3CezuXvK9JxrL0isqISAI3VRjzj5QTWxc73gUk6UoqgrMnTctGpql3aA%2B0x94uqpq%2BzhkGE9TqnFz9%2BW9yWmDUsJ6oyirTo6dXRjFOg1NZWwNQ4mGkH86WLkBhdJ5l5fPSjBeD03JGXFquPk0VBhS2toi25Rns7YnZas%2BPsVJiWcd3VeZ8BZnOosJ5HDlDDpnvjEBjqkAWxTbUddTIY30Sm7f2Hwm1NG3uYKIvE7JqxidjJicVLrRCTOHZQe7oBbuUFQbx66wNhUqCyWlZe7V7kDwoQmTbiVP0VlPNU5Qiro8NsTVMhhzIsQn%2B8L%2BdeFyuXCatTa%2FTzpTV2%2BjI7a36A0mgVzb7lveeBYbH9cuj6TKZo3Sd9Lns4sYXEHlcpb214H9yZ%2B%2FHXMlA%2BuexbP6PhKAGGwv57JYPZf&X-Amz-Signature=9c95adfbad3bd0bc63d3eb6df34d9cd4cc727777f2ba12a0729bfc887c77145a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E2MTFFX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T171010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD0LS2mlI9uBgwMz66yaJDpiYuB4exR9Zca8TKtuCU1egIhAJboxahIjOkwPNeQ8FWelgHak6zBpgNd%2B9DvtnFyM3EgKv8DCEoQABoMNjM3NDIzMTgzODA1IgyaXC1ELP6lwlLN2E8q3AMDbZnk%2FWMnXmLmboaZ4AO5Fymfbay65kIw2kYiAParCH0ru8IEJJXIy8ts2jQqUK52xW2bmzyfEM%2B2GZrmXDKmyDdNgXrgJ5ntgmfrEckQmU6Nu3WhIFrl54mpe7J1AHP8Iw7f%2B3%2FjtYudRbgIwRQQJh5Yr1EfKGR4HSWYs08SUevX0UATi3y7xt%2BIzQR%2F1ikcBM2lKDo5q6BxGZFtPyu2QhT432cRH2QbiURmCui%2FNsFMBYhShoRNGkGXz%2BLotgugX9H7ff7WcZnCixlYK%2BfGTVPXbDkJziJzzMCe2GW%2FiiwAY1YzsAzBdeX02HWZ8BJSjbuaCkXewZpldyHQ9730Rtzla3hILYdBR7Gew0kPCpm9S3jERdw2nq70wHJJnFuSv0c2rQq7WxAsgJiVW4xWe8F4R8qjF7dk6ijGwJ0cLFfZYf0qtU58mAjQIsPuy14Y4dBgTkAUdlV3q1R5DHcwXOv6tB2Bxj5KhRM09PoiXY1zVFv8Ck7jEQHkohvH8ShmUVs%2FfJlcqLuHjm%2BSrnRIxJSHqD1bEHRlyXr7MlgyMotpHQVG5eKTRBH96L82iZNSFFb9p4qy48MsxBCEjHGuUlhfniZHgIhIIB036DczI%2BpzKZq5z8%2BVutOVIjCyn%2FjEBjqkAdMWExjr7RXL2N2b3bvgIB60xUQC2L79CqgT4TiNfAZIuqxZSWe11lOmDGlYQW6Ipop78ANZHuWGHg%2BfyT%2FaYB7zYryaiF35RTKIm0BIx92KgJ8B1e%2BsjxDan1A3If2wltt3Vbavwe%2BJksVu5pYmynbLXGuyGkrwSSjCgFYSyHJCL0ZVpeV2Lu%2FkZiNu8lt3Tz7Vla7LzO%2B3JaL%2FzbkhDxcU0N7Z&X-Amz-Signature=aa6e90e0dd171530a5b11aa06d6d6cff527abeb6cfe7cf5a0d5929f24c60c183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM7BWRO4%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T171011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIHkF7PmtBszTzK41EdZf2bJ2NMe4T4kf9bTEYpoerweBAiEAmdYdRKMwP3IgHC74Q7bvG6V1c5MuC7XBeunDeaDy63sq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJzwYDEpF4enWd8h0ircA%2Fn3kS74vNWtxB2T9Q407Fo0k3M7lES%2F410QivUKiIyR6%2Fj7t9zJbv1tuomQvxhFyyn0sbsKokQbYIe65JnmAFo7LHjm3yYhpyiNSMK5rAWaD6XpjOL0%2BilIOuiZDuIoYvdocE%2FkBtlFwqsHYCc1t4Nsu7NvmZdI1XF03M63m5IkUHcAHnzDbNqQtStusxNcg72uAA%2B8jeRfMYB9iIsF%2BOCfvf%2BYIpoHiq%2FLLZNb6vpOui8PNy2wpyN0x4FO5%2B9XGM%2FRH9ErIiil1SHISaM5LD7uXsfEdMUn%2Fug7OiPTnZvt%2BHZW2TjA41dqkbHLpqeZTH2%2FOYgGPNhUgM4kDZt%2BXsVU74jNt%2FRfWSnU2Q2GFtaCUzhBu%2BHpIEanPkMdxraJ%2BwKbsYEneddWyo6rORMrMkAqd8DtTmGLtgUQFVZ6ZcUxRryjTEN2w3GLZUYttg34lFglOFrVT7DK8Fh00v0W7qIs5zihKER4Fx1H90viqtI8qTVKag4Ci9iwzOL2gX277QNETRGrIKhXDT9RxO%2BQuGKd3aT5zNscUfrjXnrdAhvac7fBXXTpVUn74NBGC41ssemh5GKYJ9Rstd5a4SWSZe%2FOhMDpGYxh6vgcqMT%2FWU8x2%2B1zCi4BK%2BryWH%2ByMMmf%2BMQGOqUB9yT91xTpgFLtb%2FArCPV8ZCvxGf5b6YqKANCdThvNasK4IwAFEfw8DYmHKrHVAWNptE1v7tk0w4NGZZBmFKNj9Ag1MNbwWYjnZ03rfz517AchwCCTY5Kd07OXPBlzdD5BtAPPe%2F3KqB3jX9TjazWPZbagkrhCZYuReAVa5asIAaQuQLEnR0SvmogPeAxuxGBado1d%2FQvMLcObNDcrvcOfhbYY65pQ&X-Amz-Signature=dc0b23465eecc877bc72c6acfc7c703977b79821abf491282e0bd7436a48ce8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPEFAPDV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIHO8FPgW7NO%2FIsnO%2BAJMflKiC8ieystf8SHzLV7vV3PSAiB6odSOLIQQtTFx2iTQON%2BGCrjAI1Ge95m3%2F%2Bw6RHfHcSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMS3lmkOw6ByitJIHGKtwDnBguHjTA9K5f%2FWKGcIIawiQqFejOVmJljCuuc2lmB2TtP0brBEHUsV3VU2mZr5S%2Fp8htELhVuuZ7I9KsUOJ8rCAvMepX7QtIPBKt4taEYiZI7DgcmDuGCwKpQlphH6mRtTqovTH9l188M4CuXREwmQx0Np66gQygE41i1y6VsaPZrk4pTAnt4zR3%2BrPoOLKYxsm7%2F32a9Z0VGE353fbqcv4z2ktjML62Nm%2FclQ%2BPGpFOCrlvVnskPqQop%2BZJa9Yv3z4xLkiR8S5Ua9Rz1AF1jLiXnSCSLnkZHYe2LRkxxj85zBOETNzlP6i6ruBTLap1J7FzTBsxKa11Hfrf%2FRpdWGuD3jKdo2OyGt0rH%2B03MPHnyBWc%2Bu88JFyJai57vVworI9oPMdBb9lawUKAyVvF3cDZxw7yNtfTuCXtL80bcK%2BqAH%2BkKsTbl%2BSNhtsryldNYr2dc%2F7x6PFAkw8Igh59mLSyaGne6aH8e2beRkZkd0gOjPooIpNixmxo%2BF2oEwKhTtSnOXLoZpCBta65vx8PfUPFMwKRSOuR59XVkHnv7uvxL%2F%2Bz5quRdH%2FIGXT%2B4Nq4HJB%2F3sFO3dxanKULooMfwFEByd6gdvG68nTFaNzZxbc4cATgrJTzSxwChMcwqp%2F4xAY6pgEC2VQLW2OguTtWbbAk0RlFtkoC7TYiyF%2F4qXix1OGZHlDpddqwcaMLcDVywnDXhL%2FtEAEulS%2FMkD2EB404%2BRe%2B8JKuPzKTpXMFyjhWaZbqScylwn7Y%2FUqlI8FqREnKVGOBZD1xyCedbz%2BfMv8j%2Bs29Gu0cr31HZIvUC0O%2FsRevrtklxj6IJOtraBnFF38UZLD%2FIe33clKGJAq8oEJTU3oyxyZ4AIxA&X-Amz-Signature=f9c161ad7627cc2d4ba169f92fa2874aa156def5074a45b2b1e58bae34e2fe8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QFZUYT5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T171013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQChTNMWcwpUKt%2Bwp4I%2F%2Fhu62O4k%2BZdDgWUtkow%2Bk8EGnQIgC3N4HZpzSbTovgyc%2B4ngNtWGPDrdTsljc1Ump8YvNtgq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDN2HLma%2BbLC4EPnctCrcAw92CHf8k9cRXhEyL%2F1OiABIvU1j2s%2BoGTwhsnoZ90n2Qe5xTRgFp9ZyzjfTSjn0wAugn4k1OhcdE3CjRg%2BE5zUDXw0pkeHLU06JdCGotLnVo8wCzuWuu0%2FO7HlbnSRUfUi0cN3cF%2BdPznx5a%2Fzs0ZIcHWVyRwoNTz5C3LGqqORESTZ60L4SIZId0NGKyG0rnfb2UwiYPLyr9mlXHyycpHB9IKgulgGKRqaEnV6Lfzp3P3wpqLN0%2FFzPSg2FyO6KKL7N7999LJ0W9aDavj6%2Bm0H3jZcEc%2BgLovZgnYuSphKq2DIzaaKw6tGzZlAc9z87uvWmnaC3mWpTqqHS8jnwIS7IuYIn6s7f4vFl02bGRyuhe6AsAu6Iaw2PjQc1c3ZPcDwwlcTyFaBGuCZk7lDNBJJ%2FADVMO79qTSbKDsAS4maz7o14IiZanAhFIHGY9OIGYCDqdKnCwn75swGjSPIGeLpxDBhNONxSrB%2Bz62ZxQ%2FxEhkRMUbf7AUTr1J7C4P9U7w5pktVfNLsj8MH4zarnLml2IbpibwO1ajDTKWxWxteLas9t53wYBWezfPBgj2KdXPvq4jEqMJ4ROcK88NXkhR%2FnPQHBdnvpSbhsmwaM9BbtsKqpJKukJ7K0uEpNMJyf%2BMQGOqUBUqVQFgIKCelKEANUADdoq%2BuJiS7frZau37%2BKI6csjK2r3Qz%2FHm6ePCX2pijSpAnEn%2Fym5Kx7VBI5BM90Q7klwx%2FMoseV2Gy73ftOT2%2BG3334PvFed02rt1hfxJdpXDDt5z%2FjOWnvbswl74i7eWvN4JBB2IyT%2BX4BE8evl47Ohb4it7cVXC5r8BFinuLcO8qv9aZaNCzgZ7FqE8tROaBL9mVOSJcQ&X-Amz-Signature=3d253823f42ef281c5b56bb9ae55aa9a035a7392c83255fe7b41d121c5b0e316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPEFAPDV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIHO8FPgW7NO%2FIsnO%2BAJMflKiC8ieystf8SHzLV7vV3PSAiB6odSOLIQQtTFx2iTQON%2BGCrjAI1Ge95m3%2F%2Bw6RHfHcSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMS3lmkOw6ByitJIHGKtwDnBguHjTA9K5f%2FWKGcIIawiQqFejOVmJljCuuc2lmB2TtP0brBEHUsV3VU2mZr5S%2Fp8htELhVuuZ7I9KsUOJ8rCAvMepX7QtIPBKt4taEYiZI7DgcmDuGCwKpQlphH6mRtTqovTH9l188M4CuXREwmQx0Np66gQygE41i1y6VsaPZrk4pTAnt4zR3%2BrPoOLKYxsm7%2F32a9Z0VGE353fbqcv4z2ktjML62Nm%2FclQ%2BPGpFOCrlvVnskPqQop%2BZJa9Yv3z4xLkiR8S5Ua9Rz1AF1jLiXnSCSLnkZHYe2LRkxxj85zBOETNzlP6i6ruBTLap1J7FzTBsxKa11Hfrf%2FRpdWGuD3jKdo2OyGt0rH%2B03MPHnyBWc%2Bu88JFyJai57vVworI9oPMdBb9lawUKAyVvF3cDZxw7yNtfTuCXtL80bcK%2BqAH%2BkKsTbl%2BSNhtsryldNYr2dc%2F7x6PFAkw8Igh59mLSyaGne6aH8e2beRkZkd0gOjPooIpNixmxo%2BF2oEwKhTtSnOXLoZpCBta65vx8PfUPFMwKRSOuR59XVkHnv7uvxL%2F%2Bz5quRdH%2FIGXT%2B4Nq4HJB%2F3sFO3dxanKULooMfwFEByd6gdvG68nTFaNzZxbc4cATgrJTzSxwChMcwqp%2F4xAY6pgEC2VQLW2OguTtWbbAk0RlFtkoC7TYiyF%2F4qXix1OGZHlDpddqwcaMLcDVywnDXhL%2FtEAEulS%2FMkD2EB404%2BRe%2B8JKuPzKTpXMFyjhWaZbqScylwn7Y%2FUqlI8FqREnKVGOBZD1xyCedbz%2BfMv8j%2Bs29Gu0cr31HZIvUC0O%2FsRevrtklxj6IJOtraBnFF38UZLD%2FIe33clKGJAq8oEJTU3oyxyZ4AIxA&X-Amz-Signature=d2dd53f0f92a71a8dc39293a4c91597e44099c2f27e4fad639a6ed8145742b10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676TBIEMX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T171015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDABJZD7A4ZHhXSkgfW%2Bp7JzHUGbB4HgH4rpmfOyhb%2BKwIgGu4NmRUMXY8eN9ADzr3A%2BwCWT22fPhDzTLV%2B%2BVBGIMIq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOrKlI1g5u0QSdsY%2FyrcAymJ06tN1vMMJEzRXicychzWu%2FO30f2EZaixVVfd3TOk%2FIO30BvdheTUaLwizgVUpOCVI3fS95oyHSjgwcD2414Z%2FbtvXUuFDrTECAslbR%2FtHRRWppMsjdf6ba9yH4CFZneE%2Fi2mApPRbWSPvzkJwc9Xh4zUqJrk8cdYg22Ttm1rac%2F7FIHVLLuHw%2B5cjG7VJkP4RLAqKGotQhdFjSqwvwEOLg3j1%2Bg2SY0Xr5yZMgI95jzCIzgN7XCAK04oE1RgeDr0OXMkctWi%2F0pAOxXD215YLZI%2FvVSaCmZrolnwE93UDdR%2BRKHqDQb4uJXvhWVV4CrKpfH5V7mS7ce1wzea4hnf3uH%2FXpeGzcy2J9NxtOfvY7a3V%2BOtyiWiQt%2FyqhwFqHqP6mVAgHkx1FUiYmJQRWlf0DqU2J4p%2FMcC9Ahj69tIsBH5bvYUrM4XwlvFiI%2BSHJLx4n3ebZHHqZzH84pfQbl3HZQ8FR4VuYOpoeVu3c5TthaQE%2BgnerhSCQjkBTOQmqkHoA1PTvWRgY2q40hHXv6z9hW5vSmBvjrBlsStm8Ab2RWwOJbalymuUm3OgBmltc%2FDeYgIJrCitWQWFdeZoQ%2BZK981bNiV0%2BkQbdp360wommUPwF34yp52XEf5MPKf%2BMQGOqUBFGqPXTh0YM1jNex2Vux1xEmXMlIdusZk8qF6kYlw892IzCSYzcHOQAAgqQWlfZC0pwlQIzPlid5idUYAtHWIp%2FGaNfr5XR0e9%2B9IXx%2BPVgycspnwxje6iXvp9A%2FR56CquxfHADfQpwCj9BMHgetTvHeQCuRM1T7w6hwUQDIuSgWrcchV%2FcrzpnvBomLO2z0Y65rFstAiCEBpZDmjZJCazpc%2BXiyX&X-Amz-Signature=389afe8e3904fb6f3fbe24e437df613df78f1c028829abc1a9daf77fea23dfb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPEFAPDV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIHO8FPgW7NO%2FIsnO%2BAJMflKiC8ieystf8SHzLV7vV3PSAiB6odSOLIQQtTFx2iTQON%2BGCrjAI1Ge95m3%2F%2Bw6RHfHcSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMS3lmkOw6ByitJIHGKtwDnBguHjTA9K5f%2FWKGcIIawiQqFejOVmJljCuuc2lmB2TtP0brBEHUsV3VU2mZr5S%2Fp8htELhVuuZ7I9KsUOJ8rCAvMepX7QtIPBKt4taEYiZI7DgcmDuGCwKpQlphH6mRtTqovTH9l188M4CuXREwmQx0Np66gQygE41i1y6VsaPZrk4pTAnt4zR3%2BrPoOLKYxsm7%2F32a9Z0VGE353fbqcv4z2ktjML62Nm%2FclQ%2BPGpFOCrlvVnskPqQop%2BZJa9Yv3z4xLkiR8S5Ua9Rz1AF1jLiXnSCSLnkZHYe2LRkxxj85zBOETNzlP6i6ruBTLap1J7FzTBsxKa11Hfrf%2FRpdWGuD3jKdo2OyGt0rH%2B03MPHnyBWc%2Bu88JFyJai57vVworI9oPMdBb9lawUKAyVvF3cDZxw7yNtfTuCXtL80bcK%2BqAH%2BkKsTbl%2BSNhtsryldNYr2dc%2F7x6PFAkw8Igh59mLSyaGne6aH8e2beRkZkd0gOjPooIpNixmxo%2BF2oEwKhTtSnOXLoZpCBta65vx8PfUPFMwKRSOuR59XVkHnv7uvxL%2F%2Bz5quRdH%2FIGXT%2B4Nq4HJB%2F3sFO3dxanKULooMfwFEByd6gdvG68nTFaNzZxbc4cATgrJTzSxwChMcwqp%2F4xAY6pgEC2VQLW2OguTtWbbAk0RlFtkoC7TYiyF%2F4qXix1OGZHlDpddqwcaMLcDVywnDXhL%2FtEAEulS%2FMkD2EB404%2BRe%2B8JKuPzKTpXMFyjhWaZbqScylwn7Y%2FUqlI8FqREnKVGOBZD1xyCedbz%2BfMv8j%2Bs29Gu0cr31HZIvUC0O%2FsRevrtklxj6IJOtraBnFF38UZLD%2FIe33clKGJAq8oEJTU3oyxyZ4AIxA&X-Amz-Signature=92537b492064dcc912f1c8f4547e108bf03991afb8cde1a60e5a6bf6c063d1fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OWHYT3K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T171017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFvXKPu4xDcQK1R0TXX3XRFQb%2BkOxuJd2rT10lq4wF4jAiEAiACZSkjvE%2BwQ7rxM1IW1dJS1KwkeZ6wyviI78ozO6Q0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOwtNcxoAPkBEpDGiCrcAza0m3v9fDqlL%2Ful9m6qK0%2BBizYT%2BXQG6cs4QRHGvFaaWPiG4zJs5C5TclDymeju6KaHcbRkyXJS%2FnbIqv4J%2ByX49RU%2BnBNsmugXPAf%2F7J0AItTwoD22pvIxKjA7BGCTmVmbjJKaKvWYR6xfpC0dMNO2SqiNjTYLdnnvisRTmMId9olqcmGrCQbIN6%2BE33%2BGZ24RP4pRz8bTMGeBwMXZ0MuT%2FdPqulUz1Od4Hp%2B5L8zJpfPSS2XHUP2oudJAEUk0LYkDZ%2FuyQBoaixuDwtdwRGW5rwHwHeP3C9Jug1VtEFpvfyzwKTKBdgHQ8bsO6paC%2BUUOMpk2luR%2B3CeZ%2FBt3f0NXpXTK3xnEUkauxurBIekxFCjBcVRjX%2Bi056KJw6PWv%2BOcYyXs01vNM7ihYxh7b3AR9Cy2wx7I3SDaWSvkC3ym4fmWSi15jvTCG5uPL10%2FLJ9wdflLFb1aH0eKhrg0b3DCwp5PGwwHuPmO%2BW14b4WqOfMy76dZnh5fE5mh%2F%2BK8AdnW%2BZE7naN%2F5wN9b7LqPs4VIR%2Bo0%2FMN5N%2BDzvpDwZf0DI2wwrKnbZ4Pg8pfgx3qhniaK4hNbwNSa5pEe5LZnea8AO4mZZ7wKNajnOVv8C9JgDhdR7XccKf2diJnMI2f%2BMQGOqUBhe1Rt1fkjY9PNPx%2Fdu49PdAc0iyfIq9zz0AqZoNNJtDvMpwK4Ksvd6fxQLss8NoiIEdbWkWKTpvjawQt5n1USJcKz%2BGATPLUlH9l2jvLvQN9uGwLhMBpBXuiyj%2B4emwzSx16UH5Tm8wNlElkD0Zo%2FhWXouM6seMPSEMkgcWm3WED405cIPMaMvfzOWp1iAsp8tcod6fkMiKiXE2geALTwiWC6Ln2&X-Amz-Signature=364317cce449409ac4d25160d5e16a0ec447ffb35748d917da62d9eebb9d0199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPEFAPDV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIHO8FPgW7NO%2FIsnO%2BAJMflKiC8ieystf8SHzLV7vV3PSAiB6odSOLIQQtTFx2iTQON%2BGCrjAI1Ge95m3%2F%2Bw6RHfHcSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMS3lmkOw6ByitJIHGKtwDnBguHjTA9K5f%2FWKGcIIawiQqFejOVmJljCuuc2lmB2TtP0brBEHUsV3VU2mZr5S%2Fp8htELhVuuZ7I9KsUOJ8rCAvMepX7QtIPBKt4taEYiZI7DgcmDuGCwKpQlphH6mRtTqovTH9l188M4CuXREwmQx0Np66gQygE41i1y6VsaPZrk4pTAnt4zR3%2BrPoOLKYxsm7%2F32a9Z0VGE353fbqcv4z2ktjML62Nm%2FclQ%2BPGpFOCrlvVnskPqQop%2BZJa9Yv3z4xLkiR8S5Ua9Rz1AF1jLiXnSCSLnkZHYe2LRkxxj85zBOETNzlP6i6ruBTLap1J7FzTBsxKa11Hfrf%2FRpdWGuD3jKdo2OyGt0rH%2B03MPHnyBWc%2Bu88JFyJai57vVworI9oPMdBb9lawUKAyVvF3cDZxw7yNtfTuCXtL80bcK%2BqAH%2BkKsTbl%2BSNhtsryldNYr2dc%2F7x6PFAkw8Igh59mLSyaGne6aH8e2beRkZkd0gOjPooIpNixmxo%2BF2oEwKhTtSnOXLoZpCBta65vx8PfUPFMwKRSOuR59XVkHnv7uvxL%2F%2Bz5quRdH%2FIGXT%2B4Nq4HJB%2F3sFO3dxanKULooMfwFEByd6gdvG68nTFaNzZxbc4cATgrJTzSxwChMcwqp%2F4xAY6pgEC2VQLW2OguTtWbbAk0RlFtkoC7TYiyF%2F4qXix1OGZHlDpddqwcaMLcDVywnDXhL%2FtEAEulS%2FMkD2EB404%2BRe%2B8JKuPzKTpXMFyjhWaZbqScylwn7Y%2FUqlI8FqREnKVGOBZD1xyCedbz%2BfMv8j%2Bs29Gu0cr31HZIvUC0O%2FsRevrtklxj6IJOtraBnFF38UZLD%2FIe33clKGJAq8oEJTU3oyxyZ4AIxA&X-Amz-Signature=5454fdc484c70389624cc21af3644927f0f023f7800d98957dd68a83ac37d60f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZQCSON3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T171018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIG%2FZzlY7ytYBVfxnRagJEfh7451vTiQioeWGHGKxDIQfAiBHqu6VztCeF8oUh50FI0Vq32jqEzqb26yTsCLItPOjdyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM5VHFWb0P3xub4H4RKtwDzy7eVB2mJPZHrsxx9YHtFbRc%2FmpI%2FKXOaXt9fP8i9vqc2AIecaeeajYbhNasVqBpwkpP75UKtyN%2Frnh9jRiA80dOclXPUpVOKmj54%2Fre5TJRF5YSmmmlR4i8aZWlI7oKyEBeO6hPv4OQW0%2BiPxkGALFviK0iDmRiKTg%2BAu4J5Ir1TbAovDVzOYgr1s83LrMtcQ%2FERDvhvl06hn9dVY5Qv6I20bmT2gMD0m1KDXziRtMfh4fjLAwxIg8%2F%2BoiFXM%2FIB7%2BTfs%2FSGkAf7ItPbOws7sqxMJULGNcpWoOgUZeUXWvZLnjhwJsYhLzC5VLryLilmA9MRyBCk97Ol2pHNoV4iqeMUeJXT7XVI4GBsrFBzBE8wlpB8Xp8IOtoVcrh5W6EqDepfaCzhfntdfYtli3klTy0UbYHmWaS1GttihOksBF%2Fhc2FnmiL1YUbXQQUo%2BVqbpQYm0PrbavYr3CE6rJ9RqGGxwQcx97jjRjlO7JRsoVHjP8Fah5oX4NtmSCvOd16y%2BWK9Pv7iDj1T2CLs1aA3mRrjoWKQay0bcDUdCAfjLi5wN4c59WcU1l2kBmSmQaIa42MDrU1SKDH9BQkadSvd%2Fo0wf6GzFJ%2BN2Fv51V1OdQNHUpTx7U9700zyyUw2Z74xAY6pgG3sCUtdMFDYh2R4nJq7U6JEOcl%2FFXuRlGIaPdttdfg02DJKTbDQoTAgzKR6qBIIfQJge%2FRXOP7zTFUy7ZHYoa7XGWbKKd%2BC7as9ppAf7lf6i1Rzb7K3VKFN3wxbjTfWDznbVLkibV16Ss%2F3kdnJdbRY4fcF4PUW4P8H20aofqAt2%2B1OCB82gHxa0RSEPHdZGwxkPrvKtQcUvhRb0KAJCsMSQRoVK6o&X-Amz-Signature=d31c8ed6140f80d29145a6fb7917b6cfddfd9e382a682e6d93bf15320fa5914a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAZZUUYW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T171019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCv8VjG3iD20zl51fzZvJews%2Fik5ncFON43ooVrg9HKKQIhAPM1ggbLZzGWf%2FvKP%2BEH4wfmAjRrPIF6eBdTFwykUR9WKv8DCEoQABoMNjM3NDIzMTgzODA1IgxyXMj%2BdZ5GOifZI0Yq3APcjMM54%2B%2BwXCFkM7XXWOfaG2fHRXqthhTPU7QDLNKM9K4TNLeuXq0u8v%2BYVEQvIUqklbbpRssqdkSvFCxqMLL%2BNI7Y5FfdofZ3x005Hj0TQOYq6TurZePpA4nmAMd1eko%2F6dBA2YHJos0%2FVCZD6p1AAZtWg9fbJt0FP3zJwGHHqruPfdGzl%2FUnFMWiTXpTnoVMNfeP1A7MWUdKddC%2B%2F1WKcPRfsJfrpCZnStXTR3s%2BFiZrOXqKaQROYDd6bB1xsyDN2O8HqsPxVf7AEQsaxBQMVq9YKQN12JU3vUWestoJZOqqkG6p0rkTMoPNaOi%2BC1WXuCAtI1kRDfgNYJSYv8GAmasNbDw2Yz%2F4Ex5eM39%2B8rW2hGP5sZwa4VGkLaeL3rJZFV7zUpOqfd4oVP9xeS29DAoWhTOyQ7o1zX2TUB04pWiJdt67gGJUh4W0TONDmyXMg0RduMBot%2F6UBjuhTd6%2Bpu%2Bpuj4AkOZH34x7lBu9gMvJNnygMTHe%2BeHJVrRsnWaeFmMovgmQwGyh53TeiAt21s9FOqA9MziaEo0wwdlBffY%2Fzhw29nxpTSU282k6JdPNihtdnkWMrD%2F8UPpP2GFXEu%2FcCqwxyGmSR0mHBNTSgQoXuznbazGIqcd%2BajC7n%2FjEBjqkAT9WG0Hd6PWerr%2FFpDU21SF%2BU69xAFuivuvblKfLxva6WOOWGusMC8bC3B8Mxbwi0kqns0t761sR%2Biukl50gtos%2F8G0kwHFU05jjvC4XTUy3Ef1ZclMIkpz9tpiNnItVZwj99Lz3jpWNiDTqOb3bcvuIKk7qj6Y0JippPVO1wt1JEQEzXeyiz8g2J%2BADA7dALWt5kiuC%2BxRcb7SbPEj700Nz2NZs&X-Amz-Signature=690c3d2719889c2113b0ece48877e0fafa218a23c5dc1e32fc4e48cc29d20e0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZMJELSB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T171020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDnsIYjNOnM6wyLaXPjFnRkzVORzSSDMOelkYAqQPyhKAIgN%2BZDb%2B6G6JCN9U%2F1UtkbfukcPiGAZHTpd0jr4PyWiJkq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDHbbrjuSOWtYeZf3uSrcA7akZjJxweARdk9Tj4SxSVHEiLEdoCQRqve9f02Na3H%2Bi3LNaFRiuWsSLO6qUt6kEy0SGWwqE67EtGjq%2FnVZxrIHUiPbXdSqBOnrhJE7RXQhw8kdb9dF%2Feu%2Bl8s3CXrhLOQmVcW7V5LPXuPXVT5o5vRT4c2pZ4GE3YA9C28KGfafTiY%2B89ME5eslhHeNHp2YWAaGyfZgmsWuPgoiyhe38rk0L3xedTn%2FwOSfokfWOFRX8qFmCE3zwzAZecsm0ZmEo46jyPv1WQODGsSpMsf5BVhRsMb4z507ubvpA0ptIW6tcAeYSIPKYgc1TDk9r2UjcayfkRLQqdsm5215Pb6M18nhC401GNycBEqakFU3AWKevFCSgAbnMMMbmbHOeAF9hOLmbztNT7jCPnI2%2FGRHqU0AN7qRshNKmVJzo1MbnRpipEBmVnNuYnKGzylimkqeaBe1EzoDzmJ%2BC9o8JloR1HAUCyvKXTTL5jgErSgQfO1p4NcpMMFPL0Dh4icIP9XKl2U4rRfd4n6YAONI3w6H74w8eKZPvenofP%2B8lIJQQ654qNV9o%2BmP72e4Ec8UcRXQDH1J17NgonfI%2FVDe9DWSbI13cs5qv1PdQ%2FuTHjYEi7oJPqSsOrryfuG%2B0DODMLyf%2BMQGOqUB9oVd4G9t%2F5QZjsz0SfqVspC8TlK6C2KDRqpDfsavNPInjux5VokRWRZsAiYCxlnhFdJRMj0tHBERJC5lEyljtSOhZxnXRy8vo30nDt6bt7EhhA6vM9ScVNbsHDKkmh2wEFhcobD3I4RpBCxcbcW%2F5VRoFvcXHz%2BTHHQEZRdBGQujYYUxWgNK8vwnAsjdW%2FcfD64jw2K7ry2t84gj7j%2BfDOHFzccK&X-Amz-Signature=b4e933e1cf3897dbcf44a32ebc197b6e1ea789dbd461047a2f3c472c263ee96a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674VK67VB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T171021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCFjxEvkNx0zPh3A8CZZue%2BJ2Dyvqs%2BXKn6MbO4hIDn9wIgF7EobHI9mBEc2eLfuGy8rTNIAJ%2Bd1c9DJveinzkBwsgq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPf533qFl5XBQWojNCrcA74L4tEYYsL9n8HxTY7Ezc%2FZGm0DZTgjaIaLQ3JGgSrBjKRRVThBon7D6ualgeeGne1Wna3fbuGCLh12XRXPBgnre8eslUEp68eWL7xY3ato7mWCRb9NOJQnKPOZtvBkW8uq3VgQQXrjC1%2Bqs4ITH4EDbNDx6rtrO5tc%2Fic3JrjHPkhIkO34ELPx%2FiT7xoL7xD7d%2BMd%2FvZ8Qlm6SZNyUctoMI7nVsAjpW1bghxMVq3g%2BwI0rGmYaUkidVf%2FilYRlcxL3Nvks4Ahsem2OsO906CiNbvXFaMzXJaZyaaDi5WTpgB45YywUZla3zwnANlCdzlWIHPa2%2FU%2BOw3zGdHYO2JKgQUrkRS%2FnnN%2BpFlRTOVYl21WONAnzY8sMlYgM92ZEAS%2FXVh7MJp6ibCHQsOERgz6tP79TqN38I15tlGkDL3rREs%2Bs4V5Zr%2Bx%2FzEsaT%2Fvs7sTwZ2VlDbxfmbVQ0wRIDl30a%2FJxl75lcCQc%2BJOm%2BfPKnJQplfgL2sxHkfdQD%2BQc7Xsr35PCM1Aer6SGnsvbKx8nP%2FBUX%2BwJEFS%2BoovvIpMH14fM9hA5Tm89l%2BqbCJrOoaUddb9ZkvhmEM7kqPF9VkN77AdyTCgQj%2FWqzU%2F3b0tpVyUqmOUheyevB9B2MMWf%2BMQGOqUBTRv%2FOVNNlWWbe0AKH%2Fbko8U7NkH3JLWFBJKUR8d7fBe0NCKZkNgNdCnToxwAW1%2BE29oq9DAy2yqIMb%2BGziBBMZ4bcC%2Fnua%2B3CBV7tPwyzgc%2F2xzrqHNx2cRHMeE8H5wbMgnmmNYBi%2FnxwJOtwxhjLfeAOlH82uYuIGg5hqj42yohfCB03Bq81WgnYNMuPQK8Y7msOh%2BpMJFbAGxdt3Y42FtMr0nc&X-Amz-Signature=67799c62b69f0888615d108e18ccea66970e3c23756bc2ca067ba93453e6da48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A27TX3I%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T171023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCID0lb%2BYOz4VJjv2NIuRnVvuetODhtnIDZLwKLgfT0d52AiANL8m7nJi8zN4RK1xGimhO1Qk9caxkJE3qfB8OhxcS2Sr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMUrJYxIx57dwX7lk9KtwDvPbNL%2BmRHQe5CDvF5h4ImibYHg4pWEW6QSWHhuKV5J%2F1c2uczTIJTjwrVtCOS1nvM7KQ3%2Fh%2BRq1QBJdaEqDuzBomeDQi%2FKC8yjvbJZgyHU8Dc3zrhPLSsTLCoWruxe7LDAiV0AfiVHCWyaYsY8O%2FQMaFUKgUAuNCkx3k2fZ2dgCJxTfciaINnCci63Zh%2B0BHYTCU9OsATlH0fVtwfpt0r4s4RusxYcOt2%2Fs%2FyRZfh792eOb0l6uxrxcqjW2BssymzmjuGgzqsX9AF3FAFdcwKNfYw3BTttmE8iToqYOp4T%2Bdnt0%2BHsbgC7H1NdtQXLb26JU%2BQ466Za8z3DghX1vSfELsyyHwMAm79fNW8CbhYm39OAbMCnxNaWaaZmgpsWlik%2FIyTQmd0XAFBpixAgZZB8PzEWxTkVGzwjE%2BteYObFqiD5ZGH%2Bt8UmI5FP6myOTgA4PP2SilHcVhqKwWbNjLDhkHDmJpB08OZCYwj%2FX0WTgtf5OLfRQA8f3Y7RtvHU15NWfatVY4Babsm1SaFhRNgukjIAQ4q2YvH3vToapH8h8ROq6UmAq4CUaA6ujKFBTWvmF7ybvTWLVDLLs%2B4ZOj2AJbfaDU03oAAOAD5MKAWf0z308JU1uvSEAtnV8ws5%2F4xAY6pgEzcG8jQbLQ1Iw5VJpUCTz6CE2up%2F41gRfnH7xqbc9%2B7orZw%2FJovi4jBgb4SzpdP7HAbMEb%2FJLhKEw4Ahnhlz9QCmVaAtqNhmhGxZynm83tbI11YFFSmtlRaYJeGsChCnMMekoH10v8UUAlE%2FcY2UEnXgauO2QrUlqwIYzCNzBh%2BeM%2FOFOhluWIF1lWlIs9JWf1s8S1mNtaqDvrAm%2BmEej%2BHmLwWIxi&X-Amz-Signature=b45c4ee09da220d97d1e3915afc9a12347148dc17d0fbe32ec9b3b2c28e271b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPEFAPDV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIHO8FPgW7NO%2FIsnO%2BAJMflKiC8ieystf8SHzLV7vV3PSAiB6odSOLIQQtTFx2iTQON%2BGCrjAI1Ge95m3%2F%2Bw6RHfHcSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMS3lmkOw6ByitJIHGKtwDnBguHjTA9K5f%2FWKGcIIawiQqFejOVmJljCuuc2lmB2TtP0brBEHUsV3VU2mZr5S%2Fp8htELhVuuZ7I9KsUOJ8rCAvMepX7QtIPBKt4taEYiZI7DgcmDuGCwKpQlphH6mRtTqovTH9l188M4CuXREwmQx0Np66gQygE41i1y6VsaPZrk4pTAnt4zR3%2BrPoOLKYxsm7%2F32a9Z0VGE353fbqcv4z2ktjML62Nm%2FclQ%2BPGpFOCrlvVnskPqQop%2BZJa9Yv3z4xLkiR8S5Ua9Rz1AF1jLiXnSCSLnkZHYe2LRkxxj85zBOETNzlP6i6ruBTLap1J7FzTBsxKa11Hfrf%2FRpdWGuD3jKdo2OyGt0rH%2B03MPHnyBWc%2Bu88JFyJai57vVworI9oPMdBb9lawUKAyVvF3cDZxw7yNtfTuCXtL80bcK%2BqAH%2BkKsTbl%2BSNhtsryldNYr2dc%2F7x6PFAkw8Igh59mLSyaGne6aH8e2beRkZkd0gOjPooIpNixmxo%2BF2oEwKhTtSnOXLoZpCBta65vx8PfUPFMwKRSOuR59XVkHnv7uvxL%2F%2Bz5quRdH%2FIGXT%2B4Nq4HJB%2F3sFO3dxanKULooMfwFEByd6gdvG68nTFaNzZxbc4cATgrJTzSxwChMcwqp%2F4xAY6pgEC2VQLW2OguTtWbbAk0RlFtkoC7TYiyF%2F4qXix1OGZHlDpddqwcaMLcDVywnDXhL%2FtEAEulS%2FMkD2EB404%2BRe%2B8JKuPzKTpXMFyjhWaZbqScylwn7Y%2FUqlI8FqREnKVGOBZD1xyCedbz%2BfMv8j%2Bs29Gu0cr31HZIvUC0O%2FsRevrtklxj6IJOtraBnFF38UZLD%2FIe33clKGJAq8oEJTU3oyxyZ4AIxA&X-Amz-Signature=81b87058698f4d928f8e11b38f64b26c024fd00639eeee8f8a46fd887955f7d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPEFAPDV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIHO8FPgW7NO%2FIsnO%2BAJMflKiC8ieystf8SHzLV7vV3PSAiB6odSOLIQQtTFx2iTQON%2BGCrjAI1Ge95m3%2F%2Bw6RHfHcSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMS3lmkOw6ByitJIHGKtwDnBguHjTA9K5f%2FWKGcIIawiQqFejOVmJljCuuc2lmB2TtP0brBEHUsV3VU2mZr5S%2Fp8htELhVuuZ7I9KsUOJ8rCAvMepX7QtIPBKt4taEYiZI7DgcmDuGCwKpQlphH6mRtTqovTH9l188M4CuXREwmQx0Np66gQygE41i1y6VsaPZrk4pTAnt4zR3%2BrPoOLKYxsm7%2F32a9Z0VGE353fbqcv4z2ktjML62Nm%2FclQ%2BPGpFOCrlvVnskPqQop%2BZJa9Yv3z4xLkiR8S5Ua9Rz1AF1jLiXnSCSLnkZHYe2LRkxxj85zBOETNzlP6i6ruBTLap1J7FzTBsxKa11Hfrf%2FRpdWGuD3jKdo2OyGt0rH%2B03MPHnyBWc%2Bu88JFyJai57vVworI9oPMdBb9lawUKAyVvF3cDZxw7yNtfTuCXtL80bcK%2BqAH%2BkKsTbl%2BSNhtsryldNYr2dc%2F7x6PFAkw8Igh59mLSyaGne6aH8e2beRkZkd0gOjPooIpNixmxo%2BF2oEwKhTtSnOXLoZpCBta65vx8PfUPFMwKRSOuR59XVkHnv7uvxL%2F%2Bz5quRdH%2FIGXT%2B4Nq4HJB%2F3sFO3dxanKULooMfwFEByd6gdvG68nTFaNzZxbc4cATgrJTzSxwChMcwqp%2F4xAY6pgEC2VQLW2OguTtWbbAk0RlFtkoC7TYiyF%2F4qXix1OGZHlDpddqwcaMLcDVywnDXhL%2FtEAEulS%2FMkD2EB404%2BRe%2B8JKuPzKTpXMFyjhWaZbqScylwn7Y%2FUqlI8FqREnKVGOBZD1xyCedbz%2BfMv8j%2Bs29Gu0cr31HZIvUC0O%2FsRevrtklxj6IJOtraBnFF38UZLD%2FIe33clKGJAq8oEJTU3oyxyZ4AIxA&X-Amz-Signature=4917549b49c5ef74bbba160f86366bfe4efe930e73e92b697d248af66b5b14a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OECVEU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIHq%2BQNiyQMgTiP4oZOgNKjOe3ZqN%2F7ZPqdO3w7o659iHAiEAqKsWEE%2B9NSopEtiZrT6PlKve%2FJZh26ysNdQ2xCo0bGUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGxRNAXY63AxyFQBwCrcAwOZbB9baA%2F83vEZ6QgumXoaz%2FIllhuX%2FEZxtRwdGWlYrDrktoXh5%2FU%2F2BUVEZzxvRL8vOsUQdrqr8usWAkwGzf3HLbflGsRLyZu0abi17FchxbmyKff8P7wzwtAID%2BCB4OOxNJ9fVnM5LReBI81uQRk5%2FtGY7vcba9nAE51cRXaW3SXNmk8nbfiySsHxBsAAaqJM4XCMhpu1RXBRvoL4HwM9l9Wdt6CkRJh8NM5yCFbjepOKE3NWteR6Z%2FRp32eamY1%2BN3%2FrShnBb3Tq5fdjqLkn5C%2FJNDhkXVZSnuq5LXKz%2FgMsMv%2B7B2JP%2BenYrqO4VYKYNlZzudNgcmcLlOLSryz8VnchYf1Uq8qI0OLXlefxa2wfreekt8nR4qlyjdAnQgjWtN6QSbdFNGcB3yMEZOfcLiqEL%2F%2BYoeG3XUQWKWgTaBIO1NbfkIj4zO8%2F3KXfUcId%2BKaTFopPYTPtz8TApVRHsg%2B4rwPXHITcT8ye7o4l5SbxcR0qsHrk2whfOEFUcaw%2F7yLHDSasV6Wds27uXG7LDGGFgqnQrdtwVL%2Bpas09Hag065EI2KdSdLwTFxUkuczceDBnmzVBkpFxlZtM%2BDorHMgSwINI9WfRU4eZEHpHstYj2ex6fyig95kMPqf%2BMQGOqUBD0g0JTE%2FISpJIiHzyltWmGT4R%2Byso4fUZKPHDj1J7He9Xn%2FH7tEoWF8Tv4FuRicldkHbrjFhSnzrAXnFn8XnEPT%2BwoqC%2B8DUI9fOlBDWtMMeGEy5QkZfhxbb6vZCbhQcPg3U0Q%2B%2B6KEoAmeffirfhdfq2AStlVCbWDGSdacMPjpZc4GvA8lXudHCKKP0sa%2BMGdLUvpg%2F3xccH%2FyBIxZLqhHxRBVu&X-Amz-Signature=831ae3f6a6b42dc7a46bf85c4718bb4254ba5ffba42f6cf626c42d9f8e33f30a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OECVEU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIHq%2BQNiyQMgTiP4oZOgNKjOe3ZqN%2F7ZPqdO3w7o659iHAiEAqKsWEE%2B9NSopEtiZrT6PlKve%2FJZh26ysNdQ2xCo0bGUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGxRNAXY63AxyFQBwCrcAwOZbB9baA%2F83vEZ6QgumXoaz%2FIllhuX%2FEZxtRwdGWlYrDrktoXh5%2FU%2F2BUVEZzxvRL8vOsUQdrqr8usWAkwGzf3HLbflGsRLyZu0abi17FchxbmyKff8P7wzwtAID%2BCB4OOxNJ9fVnM5LReBI81uQRk5%2FtGY7vcba9nAE51cRXaW3SXNmk8nbfiySsHxBsAAaqJM4XCMhpu1RXBRvoL4HwM9l9Wdt6CkRJh8NM5yCFbjepOKE3NWteR6Z%2FRp32eamY1%2BN3%2FrShnBb3Tq5fdjqLkn5C%2FJNDhkXVZSnuq5LXKz%2FgMsMv%2B7B2JP%2BenYrqO4VYKYNlZzudNgcmcLlOLSryz8VnchYf1Uq8qI0OLXlefxa2wfreekt8nR4qlyjdAnQgjWtN6QSbdFNGcB3yMEZOfcLiqEL%2F%2BYoeG3XUQWKWgTaBIO1NbfkIj4zO8%2F3KXfUcId%2BKaTFopPYTPtz8TApVRHsg%2B4rwPXHITcT8ye7o4l5SbxcR0qsHrk2whfOEFUcaw%2F7yLHDSasV6Wds27uXG7LDGGFgqnQrdtwVL%2Bpas09Hag065EI2KdSdLwTFxUkuczceDBnmzVBkpFxlZtM%2BDorHMgSwINI9WfRU4eZEHpHstYj2ex6fyig95kMPqf%2BMQGOqUBD0g0JTE%2FISpJIiHzyltWmGT4R%2Byso4fUZKPHDj1J7He9Xn%2FH7tEoWF8Tv4FuRicldkHbrjFhSnzrAXnFn8XnEPT%2BwoqC%2B8DUI9fOlBDWtMMeGEy5QkZfhxbb6vZCbhQcPg3U0Q%2B%2B6KEoAmeffirfhdfq2AStlVCbWDGSdacMPjpZc4GvA8lXudHCKKP0sa%2BMGdLUvpg%2F3xccH%2FyBIxZLqhHxRBVu&X-Amz-Signature=f445fd332cbdf004a0b553938b89d9cce581d97ae10c9ad83dcd44a08f6355f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OECVEU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIHq%2BQNiyQMgTiP4oZOgNKjOe3ZqN%2F7ZPqdO3w7o659iHAiEAqKsWEE%2B9NSopEtiZrT6PlKve%2FJZh26ysNdQ2xCo0bGUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGxRNAXY63AxyFQBwCrcAwOZbB9baA%2F83vEZ6QgumXoaz%2FIllhuX%2FEZxtRwdGWlYrDrktoXh5%2FU%2F2BUVEZzxvRL8vOsUQdrqr8usWAkwGzf3HLbflGsRLyZu0abi17FchxbmyKff8P7wzwtAID%2BCB4OOxNJ9fVnM5LReBI81uQRk5%2FtGY7vcba9nAE51cRXaW3SXNmk8nbfiySsHxBsAAaqJM4XCMhpu1RXBRvoL4HwM9l9Wdt6CkRJh8NM5yCFbjepOKE3NWteR6Z%2FRp32eamY1%2BN3%2FrShnBb3Tq5fdjqLkn5C%2FJNDhkXVZSnuq5LXKz%2FgMsMv%2B7B2JP%2BenYrqO4VYKYNlZzudNgcmcLlOLSryz8VnchYf1Uq8qI0OLXlefxa2wfreekt8nR4qlyjdAnQgjWtN6QSbdFNGcB3yMEZOfcLiqEL%2F%2BYoeG3XUQWKWgTaBIO1NbfkIj4zO8%2F3KXfUcId%2BKaTFopPYTPtz8TApVRHsg%2B4rwPXHITcT8ye7o4l5SbxcR0qsHrk2whfOEFUcaw%2F7yLHDSasV6Wds27uXG7LDGGFgqnQrdtwVL%2Bpas09Hag065EI2KdSdLwTFxUkuczceDBnmzVBkpFxlZtM%2BDorHMgSwINI9WfRU4eZEHpHstYj2ex6fyig95kMPqf%2BMQGOqUBD0g0JTE%2FISpJIiHzyltWmGT4R%2Byso4fUZKPHDj1J7He9Xn%2FH7tEoWF8Tv4FuRicldkHbrjFhSnzrAXnFn8XnEPT%2BwoqC%2B8DUI9fOlBDWtMMeGEy5QkZfhxbb6vZCbhQcPg3U0Q%2B%2B6KEoAmeffirfhdfq2AStlVCbWDGSdacMPjpZc4GvA8lXudHCKKP0sa%2BMGdLUvpg%2F3xccH%2FyBIxZLqhHxRBVu&X-Amz-Signature=a5c9f6f269023fb1b223ec64209abe7c66a42a7404ae5165d52aeeaa046b3bbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OECVEU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIHq%2BQNiyQMgTiP4oZOgNKjOe3ZqN%2F7ZPqdO3w7o659iHAiEAqKsWEE%2B9NSopEtiZrT6PlKve%2FJZh26ysNdQ2xCo0bGUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGxRNAXY63AxyFQBwCrcAwOZbB9baA%2F83vEZ6QgumXoaz%2FIllhuX%2FEZxtRwdGWlYrDrktoXh5%2FU%2F2BUVEZzxvRL8vOsUQdrqr8usWAkwGzf3HLbflGsRLyZu0abi17FchxbmyKff8P7wzwtAID%2BCB4OOxNJ9fVnM5LReBI81uQRk5%2FtGY7vcba9nAE51cRXaW3SXNmk8nbfiySsHxBsAAaqJM4XCMhpu1RXBRvoL4HwM9l9Wdt6CkRJh8NM5yCFbjepOKE3NWteR6Z%2FRp32eamY1%2BN3%2FrShnBb3Tq5fdjqLkn5C%2FJNDhkXVZSnuq5LXKz%2FgMsMv%2B7B2JP%2BenYrqO4VYKYNlZzudNgcmcLlOLSryz8VnchYf1Uq8qI0OLXlefxa2wfreekt8nR4qlyjdAnQgjWtN6QSbdFNGcB3yMEZOfcLiqEL%2F%2BYoeG3XUQWKWgTaBIO1NbfkIj4zO8%2F3KXfUcId%2BKaTFopPYTPtz8TApVRHsg%2B4rwPXHITcT8ye7o4l5SbxcR0qsHrk2whfOEFUcaw%2F7yLHDSasV6Wds27uXG7LDGGFgqnQrdtwVL%2Bpas09Hag065EI2KdSdLwTFxUkuczceDBnmzVBkpFxlZtM%2BDorHMgSwINI9WfRU4eZEHpHstYj2ex6fyig95kMPqf%2BMQGOqUBD0g0JTE%2FISpJIiHzyltWmGT4R%2Byso4fUZKPHDj1J7He9Xn%2FH7tEoWF8Tv4FuRicldkHbrjFhSnzrAXnFn8XnEPT%2BwoqC%2B8DUI9fOlBDWtMMeGEy5QkZfhxbb6vZCbhQcPg3U0Q%2B%2B6KEoAmeffirfhdfq2AStlVCbWDGSdacMPjpZc4GvA8lXudHCKKP0sa%2BMGdLUvpg%2F3xccH%2FyBIxZLqhHxRBVu&X-Amz-Signature=9798b32c43ba0a0e79f6e1d8afc00171cd5d4380ca61d9c7bd86b28b1f23c4c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OECVEU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIHq%2BQNiyQMgTiP4oZOgNKjOe3ZqN%2F7ZPqdO3w7o659iHAiEAqKsWEE%2B9NSopEtiZrT6PlKve%2FJZh26ysNdQ2xCo0bGUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGxRNAXY63AxyFQBwCrcAwOZbB9baA%2F83vEZ6QgumXoaz%2FIllhuX%2FEZxtRwdGWlYrDrktoXh5%2FU%2F2BUVEZzxvRL8vOsUQdrqr8usWAkwGzf3HLbflGsRLyZu0abi17FchxbmyKff8P7wzwtAID%2BCB4OOxNJ9fVnM5LReBI81uQRk5%2FtGY7vcba9nAE51cRXaW3SXNmk8nbfiySsHxBsAAaqJM4XCMhpu1RXBRvoL4HwM9l9Wdt6CkRJh8NM5yCFbjepOKE3NWteR6Z%2FRp32eamY1%2BN3%2FrShnBb3Tq5fdjqLkn5C%2FJNDhkXVZSnuq5LXKz%2FgMsMv%2B7B2JP%2BenYrqO4VYKYNlZzudNgcmcLlOLSryz8VnchYf1Uq8qI0OLXlefxa2wfreekt8nR4qlyjdAnQgjWtN6QSbdFNGcB3yMEZOfcLiqEL%2F%2BYoeG3XUQWKWgTaBIO1NbfkIj4zO8%2F3KXfUcId%2BKaTFopPYTPtz8TApVRHsg%2B4rwPXHITcT8ye7o4l5SbxcR0qsHrk2whfOEFUcaw%2F7yLHDSasV6Wds27uXG7LDGGFgqnQrdtwVL%2Bpas09Hag065EI2KdSdLwTFxUkuczceDBnmzVBkpFxlZtM%2BDorHMgSwINI9WfRU4eZEHpHstYj2ex6fyig95kMPqf%2BMQGOqUBD0g0JTE%2FISpJIiHzyltWmGT4R%2Byso4fUZKPHDj1J7He9Xn%2FH7tEoWF8Tv4FuRicldkHbrjFhSnzrAXnFn8XnEPT%2BwoqC%2B8DUI9fOlBDWtMMeGEy5QkZfhxbb6vZCbhQcPg3U0Q%2B%2B6KEoAmeffirfhdfq2AStlVCbWDGSdacMPjpZc4GvA8lXudHCKKP0sa%2BMGdLUvpg%2F3xccH%2FyBIxZLqhHxRBVu&X-Amz-Signature=66210e1b243f4b2ba0dcb926ca57de29ab65223366ae31b9f658d9e7c045013f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OECVEU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIHq%2BQNiyQMgTiP4oZOgNKjOe3ZqN%2F7ZPqdO3w7o659iHAiEAqKsWEE%2B9NSopEtiZrT6PlKve%2FJZh26ysNdQ2xCo0bGUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGxRNAXY63AxyFQBwCrcAwOZbB9baA%2F83vEZ6QgumXoaz%2FIllhuX%2FEZxtRwdGWlYrDrktoXh5%2FU%2F2BUVEZzxvRL8vOsUQdrqr8usWAkwGzf3HLbflGsRLyZu0abi17FchxbmyKff8P7wzwtAID%2BCB4OOxNJ9fVnM5LReBI81uQRk5%2FtGY7vcba9nAE51cRXaW3SXNmk8nbfiySsHxBsAAaqJM4XCMhpu1RXBRvoL4HwM9l9Wdt6CkRJh8NM5yCFbjepOKE3NWteR6Z%2FRp32eamY1%2BN3%2FrShnBb3Tq5fdjqLkn5C%2FJNDhkXVZSnuq5LXKz%2FgMsMv%2B7B2JP%2BenYrqO4VYKYNlZzudNgcmcLlOLSryz8VnchYf1Uq8qI0OLXlefxa2wfreekt8nR4qlyjdAnQgjWtN6QSbdFNGcB3yMEZOfcLiqEL%2F%2BYoeG3XUQWKWgTaBIO1NbfkIj4zO8%2F3KXfUcId%2BKaTFopPYTPtz8TApVRHsg%2B4rwPXHITcT8ye7o4l5SbxcR0qsHrk2whfOEFUcaw%2F7yLHDSasV6Wds27uXG7LDGGFgqnQrdtwVL%2Bpas09Hag065EI2KdSdLwTFxUkuczceDBnmzVBkpFxlZtM%2BDorHMgSwINI9WfRU4eZEHpHstYj2ex6fyig95kMPqf%2BMQGOqUBD0g0JTE%2FISpJIiHzyltWmGT4R%2Byso4fUZKPHDj1J7He9Xn%2FH7tEoWF8Tv4FuRicldkHbrjFhSnzrAXnFn8XnEPT%2BwoqC%2B8DUI9fOlBDWtMMeGEy5QkZfhxbb6vZCbhQcPg3U0Q%2B%2B6KEoAmeffirfhdfq2AStlVCbWDGSdacMPjpZc4GvA8lXudHCKKP0sa%2BMGdLUvpg%2F3xccH%2FyBIxZLqhHxRBVu&X-Amz-Signature=7b6966a1bf21bcad5cf006a06673450309fae69357baec7a5845988770087db6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OECVEU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIHq%2BQNiyQMgTiP4oZOgNKjOe3ZqN%2F7ZPqdO3w7o659iHAiEAqKsWEE%2B9NSopEtiZrT6PlKve%2FJZh26ysNdQ2xCo0bGUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGxRNAXY63AxyFQBwCrcAwOZbB9baA%2F83vEZ6QgumXoaz%2FIllhuX%2FEZxtRwdGWlYrDrktoXh5%2FU%2F2BUVEZzxvRL8vOsUQdrqr8usWAkwGzf3HLbflGsRLyZu0abi17FchxbmyKff8P7wzwtAID%2BCB4OOxNJ9fVnM5LReBI81uQRk5%2FtGY7vcba9nAE51cRXaW3SXNmk8nbfiySsHxBsAAaqJM4XCMhpu1RXBRvoL4HwM9l9Wdt6CkRJh8NM5yCFbjepOKE3NWteR6Z%2FRp32eamY1%2BN3%2FrShnBb3Tq5fdjqLkn5C%2FJNDhkXVZSnuq5LXKz%2FgMsMv%2B7B2JP%2BenYrqO4VYKYNlZzudNgcmcLlOLSryz8VnchYf1Uq8qI0OLXlefxa2wfreekt8nR4qlyjdAnQgjWtN6QSbdFNGcB3yMEZOfcLiqEL%2F%2BYoeG3XUQWKWgTaBIO1NbfkIj4zO8%2F3KXfUcId%2BKaTFopPYTPtz8TApVRHsg%2B4rwPXHITcT8ye7o4l5SbxcR0qsHrk2whfOEFUcaw%2F7yLHDSasV6Wds27uXG7LDGGFgqnQrdtwVL%2Bpas09Hag065EI2KdSdLwTFxUkuczceDBnmzVBkpFxlZtM%2BDorHMgSwINI9WfRU4eZEHpHstYj2ex6fyig95kMPqf%2BMQGOqUBD0g0JTE%2FISpJIiHzyltWmGT4R%2Byso4fUZKPHDj1J7He9Xn%2FH7tEoWF8Tv4FuRicldkHbrjFhSnzrAXnFn8XnEPT%2BwoqC%2B8DUI9fOlBDWtMMeGEy5QkZfhxbb6vZCbhQcPg3U0Q%2B%2B6KEoAmeffirfhdfq2AStlVCbWDGSdacMPjpZc4GvA8lXudHCKKP0sa%2BMGdLUvpg%2F3xccH%2FyBIxZLqhHxRBVu&X-Amz-Signature=a5c9f6f269023fb1b223ec64209abe7c66a42a7404ae5165d52aeeaa046b3bbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OECVEU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIHq%2BQNiyQMgTiP4oZOgNKjOe3ZqN%2F7ZPqdO3w7o659iHAiEAqKsWEE%2B9NSopEtiZrT6PlKve%2FJZh26ysNdQ2xCo0bGUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGxRNAXY63AxyFQBwCrcAwOZbB9baA%2F83vEZ6QgumXoaz%2FIllhuX%2FEZxtRwdGWlYrDrktoXh5%2FU%2F2BUVEZzxvRL8vOsUQdrqr8usWAkwGzf3HLbflGsRLyZu0abi17FchxbmyKff8P7wzwtAID%2BCB4OOxNJ9fVnM5LReBI81uQRk5%2FtGY7vcba9nAE51cRXaW3SXNmk8nbfiySsHxBsAAaqJM4XCMhpu1RXBRvoL4HwM9l9Wdt6CkRJh8NM5yCFbjepOKE3NWteR6Z%2FRp32eamY1%2BN3%2FrShnBb3Tq5fdjqLkn5C%2FJNDhkXVZSnuq5LXKz%2FgMsMv%2B7B2JP%2BenYrqO4VYKYNlZzudNgcmcLlOLSryz8VnchYf1Uq8qI0OLXlefxa2wfreekt8nR4qlyjdAnQgjWtN6QSbdFNGcB3yMEZOfcLiqEL%2F%2BYoeG3XUQWKWgTaBIO1NbfkIj4zO8%2F3KXfUcId%2BKaTFopPYTPtz8TApVRHsg%2B4rwPXHITcT8ye7o4l5SbxcR0qsHrk2whfOEFUcaw%2F7yLHDSasV6Wds27uXG7LDGGFgqnQrdtwVL%2Bpas09Hag065EI2KdSdLwTFxUkuczceDBnmzVBkpFxlZtM%2BDorHMgSwINI9WfRU4eZEHpHstYj2ex6fyig95kMPqf%2BMQGOqUBD0g0JTE%2FISpJIiHzyltWmGT4R%2Byso4fUZKPHDj1J7He9Xn%2FH7tEoWF8Tv4FuRicldkHbrjFhSnzrAXnFn8XnEPT%2BwoqC%2B8DUI9fOlBDWtMMeGEy5QkZfhxbb6vZCbhQcPg3U0Q%2B%2B6KEoAmeffirfhdfq2AStlVCbWDGSdacMPjpZc4GvA8lXudHCKKP0sa%2BMGdLUvpg%2F3xccH%2FyBIxZLqhHxRBVu&X-Amz-Signature=542096e1f2f343876a6a8ba9e6b5341f7127af4b9b10134f76ff93d95b29a5a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OECVEU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIHq%2BQNiyQMgTiP4oZOgNKjOe3ZqN%2F7ZPqdO3w7o659iHAiEAqKsWEE%2B9NSopEtiZrT6PlKve%2FJZh26ysNdQ2xCo0bGUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGxRNAXY63AxyFQBwCrcAwOZbB9baA%2F83vEZ6QgumXoaz%2FIllhuX%2FEZxtRwdGWlYrDrktoXh5%2FU%2F2BUVEZzxvRL8vOsUQdrqr8usWAkwGzf3HLbflGsRLyZu0abi17FchxbmyKff8P7wzwtAID%2BCB4OOxNJ9fVnM5LReBI81uQRk5%2FtGY7vcba9nAE51cRXaW3SXNmk8nbfiySsHxBsAAaqJM4XCMhpu1RXBRvoL4HwM9l9Wdt6CkRJh8NM5yCFbjepOKE3NWteR6Z%2FRp32eamY1%2BN3%2FrShnBb3Tq5fdjqLkn5C%2FJNDhkXVZSnuq5LXKz%2FgMsMv%2B7B2JP%2BenYrqO4VYKYNlZzudNgcmcLlOLSryz8VnchYf1Uq8qI0OLXlefxa2wfreekt8nR4qlyjdAnQgjWtN6QSbdFNGcB3yMEZOfcLiqEL%2F%2BYoeG3XUQWKWgTaBIO1NbfkIj4zO8%2F3KXfUcId%2BKaTFopPYTPtz8TApVRHsg%2B4rwPXHITcT8ye7o4l5SbxcR0qsHrk2whfOEFUcaw%2F7yLHDSasV6Wds27uXG7LDGGFgqnQrdtwVL%2Bpas09Hag065EI2KdSdLwTFxUkuczceDBnmzVBkpFxlZtM%2BDorHMgSwINI9WfRU4eZEHpHstYj2ex6fyig95kMPqf%2BMQGOqUBD0g0JTE%2FISpJIiHzyltWmGT4R%2Byso4fUZKPHDj1J7He9Xn%2FH7tEoWF8Tv4FuRicldkHbrjFhSnzrAXnFn8XnEPT%2BwoqC%2B8DUI9fOlBDWtMMeGEy5QkZfhxbb6vZCbhQcPg3U0Q%2B%2B6KEoAmeffirfhdfq2AStlVCbWDGSdacMPjpZc4GvA8lXudHCKKP0sa%2BMGdLUvpg%2F3xccH%2FyBIxZLqhHxRBVu&X-Amz-Signature=3c933709a2f9fc6abd650fe1c19ef27b43189dcff6315736c863b05310bf143b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OECVEU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIHq%2BQNiyQMgTiP4oZOgNKjOe3ZqN%2F7ZPqdO3w7o659iHAiEAqKsWEE%2B9NSopEtiZrT6PlKve%2FJZh26ysNdQ2xCo0bGUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGxRNAXY63AxyFQBwCrcAwOZbB9baA%2F83vEZ6QgumXoaz%2FIllhuX%2FEZxtRwdGWlYrDrktoXh5%2FU%2F2BUVEZzxvRL8vOsUQdrqr8usWAkwGzf3HLbflGsRLyZu0abi17FchxbmyKff8P7wzwtAID%2BCB4OOxNJ9fVnM5LReBI81uQRk5%2FtGY7vcba9nAE51cRXaW3SXNmk8nbfiySsHxBsAAaqJM4XCMhpu1RXBRvoL4HwM9l9Wdt6CkRJh8NM5yCFbjepOKE3NWteR6Z%2FRp32eamY1%2BN3%2FrShnBb3Tq5fdjqLkn5C%2FJNDhkXVZSnuq5LXKz%2FgMsMv%2B7B2JP%2BenYrqO4VYKYNlZzudNgcmcLlOLSryz8VnchYf1Uq8qI0OLXlefxa2wfreekt8nR4qlyjdAnQgjWtN6QSbdFNGcB3yMEZOfcLiqEL%2F%2BYoeG3XUQWKWgTaBIO1NbfkIj4zO8%2F3KXfUcId%2BKaTFopPYTPtz8TApVRHsg%2B4rwPXHITcT8ye7o4l5SbxcR0qsHrk2whfOEFUcaw%2F7yLHDSasV6Wds27uXG7LDGGFgqnQrdtwVL%2Bpas09Hag065EI2KdSdLwTFxUkuczceDBnmzVBkpFxlZtM%2BDorHMgSwINI9WfRU4eZEHpHstYj2ex6fyig95kMPqf%2BMQGOqUBD0g0JTE%2FISpJIiHzyltWmGT4R%2Byso4fUZKPHDj1J7He9Xn%2FH7tEoWF8Tv4FuRicldkHbrjFhSnzrAXnFn8XnEPT%2BwoqC%2B8DUI9fOlBDWtMMeGEy5QkZfhxbb6vZCbhQcPg3U0Q%2B%2B6KEoAmeffirfhdfq2AStlVCbWDGSdacMPjpZc4GvA8lXudHCKKP0sa%2BMGdLUvpg%2F3xccH%2FyBIxZLqhHxRBVu&X-Amz-Signature=674d57a993551628cf856ae509a92a50e594adc0a53de6fc2d221b6b50c7498a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
