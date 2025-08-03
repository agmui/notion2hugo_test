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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSP54IN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8JmlTDSY9r0wlQUj%2BPsPoCuYO8mPVIz0AfWL%2Bul3BaAiBpue6cE0GXKRVDPiyJ9l6Wh%2Fi1WW3SiItcgn6iJp4i6Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMzjcOEdMWITFnsREoKtwD5ZHHpTuVxt5mM3ZVHM2s5A%2BLk1FOdHQyZj6kKJTYUu3KGSux%2BU4DkxxtVDVK%2BqkFClI1MIr9ndamOFPyOaDuc2AkQUukIFTsGRVKg9stDUqBZ5gQgvMXDik6hz01lmQ9qmnsxEhED1MyYFo5WpKKScYRSEbuiu0Ba0G%2FmxgcuYVvpMYsTNZP3yEGcGxUoaLc1XIMV28rxHb0FUroJCRndYWz4KbGZnPWjx3Ndj7vfaOZm%2FPRN%2F%2FowiRhEhDGBHXj9oNBfpfNms%2BNxVwdsFHsyKnG4Nr5mZpwG09ChNeHq%2BtsSaTZGtKUugP3oBOEdegFBsNmTAAS3R5HDUtart5R2UwaVVCsIm%2FsqVrizPNY6xMKZMtQzPIiFmoh1zzcUBpGtIvN0NJzBdBYPw9MYCg6q0LBhXSqwWzk85xkn%2FY4b3NR%2BK%2FKg7zQTdvzFC1ZygJZLBSTHKQBgw35oE4uF%2FYBRnXTUvno2O%2FUKp5ywVDNK89FFddYZlAyNUGPrjQVK%2F5PImxr%2Byog0hEdiZKrB35nNkUXYWiX7rMGQe4X4NGF4FdMh8fgHAh3wFX3zjIY5NQx5quMHyVdUnPdjp0QXZ2BsawOQWn9fK%2F1Tiij64ywh2W5sGEDuAsRZQc7TewwpNm%2BxAY6pgHUUJtUmgrt3Ln0%2BV9rg5uBxs%2FBm0va%2BUW%2F9zIkFI0WO1RC42Qs1ebqtI0iJnBrd5mYyrjnV8MtFsFJrN2a12Tmyni%2FbLtEQS8eGyNXvMCZ0ppsbX8%2FhTrujWgU4y3bLCMKXMi0%2BokzkHHy3pOxT0n3D%2Fzu%2FMabacy4HoULiUDQ5ziM0Iy2wVcwlfz2zpu6Kxkp6nsRna6ZvYpUfOzBTynv5I%2BDMkyF&X-Amz-Signature=d68a09a74c0717ec9896fa7aaee800b7b8cf78eaf368017da286013156acc3be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSP54IN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8JmlTDSY9r0wlQUj%2BPsPoCuYO8mPVIz0AfWL%2Bul3BaAiBpue6cE0GXKRVDPiyJ9l6Wh%2Fi1WW3SiItcgn6iJp4i6Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMzjcOEdMWITFnsREoKtwD5ZHHpTuVxt5mM3ZVHM2s5A%2BLk1FOdHQyZj6kKJTYUu3KGSux%2BU4DkxxtVDVK%2BqkFClI1MIr9ndamOFPyOaDuc2AkQUukIFTsGRVKg9stDUqBZ5gQgvMXDik6hz01lmQ9qmnsxEhED1MyYFo5WpKKScYRSEbuiu0Ba0G%2FmxgcuYVvpMYsTNZP3yEGcGxUoaLc1XIMV28rxHb0FUroJCRndYWz4KbGZnPWjx3Ndj7vfaOZm%2FPRN%2F%2FowiRhEhDGBHXj9oNBfpfNms%2BNxVwdsFHsyKnG4Nr5mZpwG09ChNeHq%2BtsSaTZGtKUugP3oBOEdegFBsNmTAAS3R5HDUtart5R2UwaVVCsIm%2FsqVrizPNY6xMKZMtQzPIiFmoh1zzcUBpGtIvN0NJzBdBYPw9MYCg6q0LBhXSqwWzk85xkn%2FY4b3NR%2BK%2FKg7zQTdvzFC1ZygJZLBSTHKQBgw35oE4uF%2FYBRnXTUvno2O%2FUKp5ywVDNK89FFddYZlAyNUGPrjQVK%2F5PImxr%2Byog0hEdiZKrB35nNkUXYWiX7rMGQe4X4NGF4FdMh8fgHAh3wFX3zjIY5NQx5quMHyVdUnPdjp0QXZ2BsawOQWn9fK%2F1Tiij64ywh2W5sGEDuAsRZQc7TewwpNm%2BxAY6pgHUUJtUmgrt3Ln0%2BV9rg5uBxs%2FBm0va%2BUW%2F9zIkFI0WO1RC42Qs1ebqtI0iJnBrd5mYyrjnV8MtFsFJrN2a12Tmyni%2FbLtEQS8eGyNXvMCZ0ppsbX8%2FhTrujWgU4y3bLCMKXMi0%2BokzkHHy3pOxT0n3D%2Fzu%2FMabacy4HoULiUDQ5ziM0Iy2wVcwlfz2zpu6Kxkp6nsRna6ZvYpUfOzBTynv5I%2BDMkyF&X-Amz-Signature=ebf1ad7031c21d2504e0b78471aa472f3b308a5323353abbad4b4533cf040692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSP54IN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8JmlTDSY9r0wlQUj%2BPsPoCuYO8mPVIz0AfWL%2Bul3BaAiBpue6cE0GXKRVDPiyJ9l6Wh%2Fi1WW3SiItcgn6iJp4i6Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMzjcOEdMWITFnsREoKtwD5ZHHpTuVxt5mM3ZVHM2s5A%2BLk1FOdHQyZj6kKJTYUu3KGSux%2BU4DkxxtVDVK%2BqkFClI1MIr9ndamOFPyOaDuc2AkQUukIFTsGRVKg9stDUqBZ5gQgvMXDik6hz01lmQ9qmnsxEhED1MyYFo5WpKKScYRSEbuiu0Ba0G%2FmxgcuYVvpMYsTNZP3yEGcGxUoaLc1XIMV28rxHb0FUroJCRndYWz4KbGZnPWjx3Ndj7vfaOZm%2FPRN%2F%2FowiRhEhDGBHXj9oNBfpfNms%2BNxVwdsFHsyKnG4Nr5mZpwG09ChNeHq%2BtsSaTZGtKUugP3oBOEdegFBsNmTAAS3R5HDUtart5R2UwaVVCsIm%2FsqVrizPNY6xMKZMtQzPIiFmoh1zzcUBpGtIvN0NJzBdBYPw9MYCg6q0LBhXSqwWzk85xkn%2FY4b3NR%2BK%2FKg7zQTdvzFC1ZygJZLBSTHKQBgw35oE4uF%2FYBRnXTUvno2O%2FUKp5ywVDNK89FFddYZlAyNUGPrjQVK%2F5PImxr%2Byog0hEdiZKrB35nNkUXYWiX7rMGQe4X4NGF4FdMh8fgHAh3wFX3zjIY5NQx5quMHyVdUnPdjp0QXZ2BsawOQWn9fK%2F1Tiij64ywh2W5sGEDuAsRZQc7TewwpNm%2BxAY6pgHUUJtUmgrt3Ln0%2BV9rg5uBxs%2FBm0va%2BUW%2F9zIkFI0WO1RC42Qs1ebqtI0iJnBrd5mYyrjnV8MtFsFJrN2a12Tmyni%2FbLtEQS8eGyNXvMCZ0ppsbX8%2FhTrujWgU4y3bLCMKXMi0%2BokzkHHy3pOxT0n3D%2Fzu%2FMabacy4HoULiUDQ5ziM0Iy2wVcwlfz2zpu6Kxkp6nsRna6ZvYpUfOzBTynv5I%2BDMkyF&X-Amz-Signature=390d96c1c7671a0398c4ee31221135224fad4dc27df6713db4980bf00347e0ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSP54IN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8JmlTDSY9r0wlQUj%2BPsPoCuYO8mPVIz0AfWL%2Bul3BaAiBpue6cE0GXKRVDPiyJ9l6Wh%2Fi1WW3SiItcgn6iJp4i6Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMzjcOEdMWITFnsREoKtwD5ZHHpTuVxt5mM3ZVHM2s5A%2BLk1FOdHQyZj6kKJTYUu3KGSux%2BU4DkxxtVDVK%2BqkFClI1MIr9ndamOFPyOaDuc2AkQUukIFTsGRVKg9stDUqBZ5gQgvMXDik6hz01lmQ9qmnsxEhED1MyYFo5WpKKScYRSEbuiu0Ba0G%2FmxgcuYVvpMYsTNZP3yEGcGxUoaLc1XIMV28rxHb0FUroJCRndYWz4KbGZnPWjx3Ndj7vfaOZm%2FPRN%2F%2FowiRhEhDGBHXj9oNBfpfNms%2BNxVwdsFHsyKnG4Nr5mZpwG09ChNeHq%2BtsSaTZGtKUugP3oBOEdegFBsNmTAAS3R5HDUtart5R2UwaVVCsIm%2FsqVrizPNY6xMKZMtQzPIiFmoh1zzcUBpGtIvN0NJzBdBYPw9MYCg6q0LBhXSqwWzk85xkn%2FY4b3NR%2BK%2FKg7zQTdvzFC1ZygJZLBSTHKQBgw35oE4uF%2FYBRnXTUvno2O%2FUKp5ywVDNK89FFddYZlAyNUGPrjQVK%2F5PImxr%2Byog0hEdiZKrB35nNkUXYWiX7rMGQe4X4NGF4FdMh8fgHAh3wFX3zjIY5NQx5quMHyVdUnPdjp0QXZ2BsawOQWn9fK%2F1Tiij64ywh2W5sGEDuAsRZQc7TewwpNm%2BxAY6pgHUUJtUmgrt3Ln0%2BV9rg5uBxs%2FBm0va%2BUW%2F9zIkFI0WO1RC42Qs1ebqtI0iJnBrd5mYyrjnV8MtFsFJrN2a12Tmyni%2FbLtEQS8eGyNXvMCZ0ppsbX8%2FhTrujWgU4y3bLCMKXMi0%2BokzkHHy3pOxT0n3D%2Fzu%2FMabacy4HoULiUDQ5ziM0Iy2wVcwlfz2zpu6Kxkp6nsRna6ZvYpUfOzBTynv5I%2BDMkyF&X-Amz-Signature=0c2b9feb5941c4475ed0127b05dbccc36959786a998edfa50e6423c0c774469b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSP54IN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8JmlTDSY9r0wlQUj%2BPsPoCuYO8mPVIz0AfWL%2Bul3BaAiBpue6cE0GXKRVDPiyJ9l6Wh%2Fi1WW3SiItcgn6iJp4i6Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMzjcOEdMWITFnsREoKtwD5ZHHpTuVxt5mM3ZVHM2s5A%2BLk1FOdHQyZj6kKJTYUu3KGSux%2BU4DkxxtVDVK%2BqkFClI1MIr9ndamOFPyOaDuc2AkQUukIFTsGRVKg9stDUqBZ5gQgvMXDik6hz01lmQ9qmnsxEhED1MyYFo5WpKKScYRSEbuiu0Ba0G%2FmxgcuYVvpMYsTNZP3yEGcGxUoaLc1XIMV28rxHb0FUroJCRndYWz4KbGZnPWjx3Ndj7vfaOZm%2FPRN%2F%2FowiRhEhDGBHXj9oNBfpfNms%2BNxVwdsFHsyKnG4Nr5mZpwG09ChNeHq%2BtsSaTZGtKUugP3oBOEdegFBsNmTAAS3R5HDUtart5R2UwaVVCsIm%2FsqVrizPNY6xMKZMtQzPIiFmoh1zzcUBpGtIvN0NJzBdBYPw9MYCg6q0LBhXSqwWzk85xkn%2FY4b3NR%2BK%2FKg7zQTdvzFC1ZygJZLBSTHKQBgw35oE4uF%2FYBRnXTUvno2O%2FUKp5ywVDNK89FFddYZlAyNUGPrjQVK%2F5PImxr%2Byog0hEdiZKrB35nNkUXYWiX7rMGQe4X4NGF4FdMh8fgHAh3wFX3zjIY5NQx5quMHyVdUnPdjp0QXZ2BsawOQWn9fK%2F1Tiij64ywh2W5sGEDuAsRZQc7TewwpNm%2BxAY6pgHUUJtUmgrt3Ln0%2BV9rg5uBxs%2FBm0va%2BUW%2F9zIkFI0WO1RC42Qs1ebqtI0iJnBrd5mYyrjnV8MtFsFJrN2a12Tmyni%2FbLtEQS8eGyNXvMCZ0ppsbX8%2FhTrujWgU4y3bLCMKXMi0%2BokzkHHy3pOxT0n3D%2Fzu%2FMabacy4HoULiUDQ5ziM0Iy2wVcwlfz2zpu6Kxkp6nsRna6ZvYpUfOzBTynv5I%2BDMkyF&X-Amz-Signature=b8373c0b5b7aaa432c4ee33945321a29a1d53b04308b1f7ad3f04aa2b2ee181f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSP54IN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8JmlTDSY9r0wlQUj%2BPsPoCuYO8mPVIz0AfWL%2Bul3BaAiBpue6cE0GXKRVDPiyJ9l6Wh%2Fi1WW3SiItcgn6iJp4i6Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMzjcOEdMWITFnsREoKtwD5ZHHpTuVxt5mM3ZVHM2s5A%2BLk1FOdHQyZj6kKJTYUu3KGSux%2BU4DkxxtVDVK%2BqkFClI1MIr9ndamOFPyOaDuc2AkQUukIFTsGRVKg9stDUqBZ5gQgvMXDik6hz01lmQ9qmnsxEhED1MyYFo5WpKKScYRSEbuiu0Ba0G%2FmxgcuYVvpMYsTNZP3yEGcGxUoaLc1XIMV28rxHb0FUroJCRndYWz4KbGZnPWjx3Ndj7vfaOZm%2FPRN%2F%2FowiRhEhDGBHXj9oNBfpfNms%2BNxVwdsFHsyKnG4Nr5mZpwG09ChNeHq%2BtsSaTZGtKUugP3oBOEdegFBsNmTAAS3R5HDUtart5R2UwaVVCsIm%2FsqVrizPNY6xMKZMtQzPIiFmoh1zzcUBpGtIvN0NJzBdBYPw9MYCg6q0LBhXSqwWzk85xkn%2FY4b3NR%2BK%2FKg7zQTdvzFC1ZygJZLBSTHKQBgw35oE4uF%2FYBRnXTUvno2O%2FUKp5ywVDNK89FFddYZlAyNUGPrjQVK%2F5PImxr%2Byog0hEdiZKrB35nNkUXYWiX7rMGQe4X4NGF4FdMh8fgHAh3wFX3zjIY5NQx5quMHyVdUnPdjp0QXZ2BsawOQWn9fK%2F1Tiij64ywh2W5sGEDuAsRZQc7TewwpNm%2BxAY6pgHUUJtUmgrt3Ln0%2BV9rg5uBxs%2FBm0va%2BUW%2F9zIkFI0WO1RC42Qs1ebqtI0iJnBrd5mYyrjnV8MtFsFJrN2a12Tmyni%2FbLtEQS8eGyNXvMCZ0ppsbX8%2FhTrujWgU4y3bLCMKXMi0%2BokzkHHy3pOxT0n3D%2Fzu%2FMabacy4HoULiUDQ5ziM0Iy2wVcwlfz2zpu6Kxkp6nsRna6ZvYpUfOzBTynv5I%2BDMkyF&X-Amz-Signature=815137e854021ba08645bac571041a9ec13f8c91e94060afd2371e829e90a39b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSP54IN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8JmlTDSY9r0wlQUj%2BPsPoCuYO8mPVIz0AfWL%2Bul3BaAiBpue6cE0GXKRVDPiyJ9l6Wh%2Fi1WW3SiItcgn6iJp4i6Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMzjcOEdMWITFnsREoKtwD5ZHHpTuVxt5mM3ZVHM2s5A%2BLk1FOdHQyZj6kKJTYUu3KGSux%2BU4DkxxtVDVK%2BqkFClI1MIr9ndamOFPyOaDuc2AkQUukIFTsGRVKg9stDUqBZ5gQgvMXDik6hz01lmQ9qmnsxEhED1MyYFo5WpKKScYRSEbuiu0Ba0G%2FmxgcuYVvpMYsTNZP3yEGcGxUoaLc1XIMV28rxHb0FUroJCRndYWz4KbGZnPWjx3Ndj7vfaOZm%2FPRN%2F%2FowiRhEhDGBHXj9oNBfpfNms%2BNxVwdsFHsyKnG4Nr5mZpwG09ChNeHq%2BtsSaTZGtKUugP3oBOEdegFBsNmTAAS3R5HDUtart5R2UwaVVCsIm%2FsqVrizPNY6xMKZMtQzPIiFmoh1zzcUBpGtIvN0NJzBdBYPw9MYCg6q0LBhXSqwWzk85xkn%2FY4b3NR%2BK%2FKg7zQTdvzFC1ZygJZLBSTHKQBgw35oE4uF%2FYBRnXTUvno2O%2FUKp5ywVDNK89FFddYZlAyNUGPrjQVK%2F5PImxr%2Byog0hEdiZKrB35nNkUXYWiX7rMGQe4X4NGF4FdMh8fgHAh3wFX3zjIY5NQx5quMHyVdUnPdjp0QXZ2BsawOQWn9fK%2F1Tiij64ywh2W5sGEDuAsRZQc7TewwpNm%2BxAY6pgHUUJtUmgrt3Ln0%2BV9rg5uBxs%2FBm0va%2BUW%2F9zIkFI0WO1RC42Qs1ebqtI0iJnBrd5mYyrjnV8MtFsFJrN2a12Tmyni%2FbLtEQS8eGyNXvMCZ0ppsbX8%2FhTrujWgU4y3bLCMKXMi0%2BokzkHHy3pOxT0n3D%2Fzu%2FMabacy4HoULiUDQ5ziM0Iy2wVcwlfz2zpu6Kxkp6nsRna6ZvYpUfOzBTynv5I%2BDMkyF&X-Amz-Signature=8b84fb038ecd574bceb4bcee2e72775c2acaa905c1628c6144a7511bda5e71a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSP54IN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8JmlTDSY9r0wlQUj%2BPsPoCuYO8mPVIz0AfWL%2Bul3BaAiBpue6cE0GXKRVDPiyJ9l6Wh%2Fi1WW3SiItcgn6iJp4i6Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMzjcOEdMWITFnsREoKtwD5ZHHpTuVxt5mM3ZVHM2s5A%2BLk1FOdHQyZj6kKJTYUu3KGSux%2BU4DkxxtVDVK%2BqkFClI1MIr9ndamOFPyOaDuc2AkQUukIFTsGRVKg9stDUqBZ5gQgvMXDik6hz01lmQ9qmnsxEhED1MyYFo5WpKKScYRSEbuiu0Ba0G%2FmxgcuYVvpMYsTNZP3yEGcGxUoaLc1XIMV28rxHb0FUroJCRndYWz4KbGZnPWjx3Ndj7vfaOZm%2FPRN%2F%2FowiRhEhDGBHXj9oNBfpfNms%2BNxVwdsFHsyKnG4Nr5mZpwG09ChNeHq%2BtsSaTZGtKUugP3oBOEdegFBsNmTAAS3R5HDUtart5R2UwaVVCsIm%2FsqVrizPNY6xMKZMtQzPIiFmoh1zzcUBpGtIvN0NJzBdBYPw9MYCg6q0LBhXSqwWzk85xkn%2FY4b3NR%2BK%2FKg7zQTdvzFC1ZygJZLBSTHKQBgw35oE4uF%2FYBRnXTUvno2O%2FUKp5ywVDNK89FFddYZlAyNUGPrjQVK%2F5PImxr%2Byog0hEdiZKrB35nNkUXYWiX7rMGQe4X4NGF4FdMh8fgHAh3wFX3zjIY5NQx5quMHyVdUnPdjp0QXZ2BsawOQWn9fK%2F1Tiij64ywh2W5sGEDuAsRZQc7TewwpNm%2BxAY6pgHUUJtUmgrt3Ln0%2BV9rg5uBxs%2FBm0va%2BUW%2F9zIkFI0WO1RC42Qs1ebqtI0iJnBrd5mYyrjnV8MtFsFJrN2a12Tmyni%2FbLtEQS8eGyNXvMCZ0ppsbX8%2FhTrujWgU4y3bLCMKXMi0%2BokzkHHy3pOxT0n3D%2Fzu%2FMabacy4HoULiUDQ5ziM0Iy2wVcwlfz2zpu6Kxkp6nsRna6ZvYpUfOzBTynv5I%2BDMkyF&X-Amz-Signature=4a8b70ccd6a68523708b74b382e3a4146194694d827d58e686663022869efcf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSP54IN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8JmlTDSY9r0wlQUj%2BPsPoCuYO8mPVIz0AfWL%2Bul3BaAiBpue6cE0GXKRVDPiyJ9l6Wh%2Fi1WW3SiItcgn6iJp4i6Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMzjcOEdMWITFnsREoKtwD5ZHHpTuVxt5mM3ZVHM2s5A%2BLk1FOdHQyZj6kKJTYUu3KGSux%2BU4DkxxtVDVK%2BqkFClI1MIr9ndamOFPyOaDuc2AkQUukIFTsGRVKg9stDUqBZ5gQgvMXDik6hz01lmQ9qmnsxEhED1MyYFo5WpKKScYRSEbuiu0Ba0G%2FmxgcuYVvpMYsTNZP3yEGcGxUoaLc1XIMV28rxHb0FUroJCRndYWz4KbGZnPWjx3Ndj7vfaOZm%2FPRN%2F%2FowiRhEhDGBHXj9oNBfpfNms%2BNxVwdsFHsyKnG4Nr5mZpwG09ChNeHq%2BtsSaTZGtKUugP3oBOEdegFBsNmTAAS3R5HDUtart5R2UwaVVCsIm%2FsqVrizPNY6xMKZMtQzPIiFmoh1zzcUBpGtIvN0NJzBdBYPw9MYCg6q0LBhXSqwWzk85xkn%2FY4b3NR%2BK%2FKg7zQTdvzFC1ZygJZLBSTHKQBgw35oE4uF%2FYBRnXTUvno2O%2FUKp5ywVDNK89FFddYZlAyNUGPrjQVK%2F5PImxr%2Byog0hEdiZKrB35nNkUXYWiX7rMGQe4X4NGF4FdMh8fgHAh3wFX3zjIY5NQx5quMHyVdUnPdjp0QXZ2BsawOQWn9fK%2F1Tiij64ywh2W5sGEDuAsRZQc7TewwpNm%2BxAY6pgHUUJtUmgrt3Ln0%2BV9rg5uBxs%2FBm0va%2BUW%2F9zIkFI0WO1RC42Qs1ebqtI0iJnBrd5mYyrjnV8MtFsFJrN2a12Tmyni%2FbLtEQS8eGyNXvMCZ0ppsbX8%2FhTrujWgU4y3bLCMKXMi0%2BokzkHHy3pOxT0n3D%2Fzu%2FMabacy4HoULiUDQ5ziM0Iy2wVcwlfz2zpu6Kxkp6nsRna6ZvYpUfOzBTynv5I%2BDMkyF&X-Amz-Signature=2f01f85fc0938a2a55ad826890efb57df5c3e1eede70adabf05f561a08c23543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSP54IN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8JmlTDSY9r0wlQUj%2BPsPoCuYO8mPVIz0AfWL%2Bul3BaAiBpue6cE0GXKRVDPiyJ9l6Wh%2Fi1WW3SiItcgn6iJp4i6Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMzjcOEdMWITFnsREoKtwD5ZHHpTuVxt5mM3ZVHM2s5A%2BLk1FOdHQyZj6kKJTYUu3KGSux%2BU4DkxxtVDVK%2BqkFClI1MIr9ndamOFPyOaDuc2AkQUukIFTsGRVKg9stDUqBZ5gQgvMXDik6hz01lmQ9qmnsxEhED1MyYFo5WpKKScYRSEbuiu0Ba0G%2FmxgcuYVvpMYsTNZP3yEGcGxUoaLc1XIMV28rxHb0FUroJCRndYWz4KbGZnPWjx3Ndj7vfaOZm%2FPRN%2F%2FowiRhEhDGBHXj9oNBfpfNms%2BNxVwdsFHsyKnG4Nr5mZpwG09ChNeHq%2BtsSaTZGtKUugP3oBOEdegFBsNmTAAS3R5HDUtart5R2UwaVVCsIm%2FsqVrizPNY6xMKZMtQzPIiFmoh1zzcUBpGtIvN0NJzBdBYPw9MYCg6q0LBhXSqwWzk85xkn%2FY4b3NR%2BK%2FKg7zQTdvzFC1ZygJZLBSTHKQBgw35oE4uF%2FYBRnXTUvno2O%2FUKp5ywVDNK89FFddYZlAyNUGPrjQVK%2F5PImxr%2Byog0hEdiZKrB35nNkUXYWiX7rMGQe4X4NGF4FdMh8fgHAh3wFX3zjIY5NQx5quMHyVdUnPdjp0QXZ2BsawOQWn9fK%2F1Tiij64ywh2W5sGEDuAsRZQc7TewwpNm%2BxAY6pgHUUJtUmgrt3Ln0%2BV9rg5uBxs%2FBm0va%2BUW%2F9zIkFI0WO1RC42Qs1ebqtI0iJnBrd5mYyrjnV8MtFsFJrN2a12Tmyni%2FbLtEQS8eGyNXvMCZ0ppsbX8%2FhTrujWgU4y3bLCMKXMi0%2BokzkHHy3pOxT0n3D%2Fzu%2FMabacy4HoULiUDQ5ziM0Iy2wVcwlfz2zpu6Kxkp6nsRna6ZvYpUfOzBTynv5I%2BDMkyF&X-Amz-Signature=ade70139cf0a81af210151613186e8e6aef83b98c8492a6678f7a4eafca1df6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HFT4WHF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpRPx4roUZIZSPyvH34oJwymzTm1RNb8C92XcqjIJjOAIgAqXI0SsmxkNgZicn%2BUzWqU0%2B1gFlXcgJE22URHAADlYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDA3AuIG0NFT5HuR0VircA4yrOC6ilbV16R374t9V5t9T1IV6OY4xPR7PCscMnrpNvjMfncSIeii%2BaHRCYVBXAs%2FYL4067wGfvvvWO8d%2B0GyfvdPnbsttzmxMNxqOSAwaO3o0svfkoBnUB4UCY6Q2Mni3LyY%2Fjqr%2BdT6VknMw8Hssgi9jnv0w2WVIzGt5G%2FaFCKQsCEj6KYPy07oEijBzU8L19LSlbn0n3wO3MyifHk0PoLL2pLNUeZbXTcLfFO57uJ9Ty3ghRP2Mnbfs1O4313ZIXxyAkSspptmndMgrb2T%2FT6vZ9Gg8EEZonPfDUapvo5mPJwyoJI6%2BI2LhMBSODf9xVF5SrLrXig1R1XbNGWRBBOunn4pgOI94hZGdXRmcyAwNWZrlVBVE5swkoV0hRkU7awhQ%2B%2BphkFXWht1DdSUkvcfsX%2F1PsTM8WyuIihngLG9D6hu3bYde2pADR59OPb5P98TjwHO15mWnAfuyf0kXuNThFa0o0I9vC4BzPOUvD9j2stb04HPQiue%2BRNpnHcg3d6UFIf2i7HIenEZTWUpLFclNccQm%2Fo8yKOwiuEpesI7uCUJE2x3Q3r9R%2FBZDvj6GeEIXlZosIgPYIBrtedqGtk6orLMgs7W5%2FpkIqhVpHXoPuv9hQTL1PutVMPPZvsQGOqUBssVdM%2BFx%2F61TDiI%2Bk%2FGeBrLZ4oWORcTf48C4CPuIPS7gtdPHXPj0DkyRf%2F3d%2B2nWMInJlrMkOQt%2FfzKIKHZbwSt5Wdiqege33CEKh%2FLwBAk2rwLhAZyjrVhWPzo8FK%2FUjRRS17uJUyKww%2BCW1hG70f2PcJRlYgHba96fVk4pMZJ57F0rdMsRpbgJM7KU%2BqsPrZjBAuotJ%2FtxudsXnKhjQpGapeqm&X-Amz-Signature=82e29e4dfcc40eaf247b9d955bca8e0ee887e66f1603271903d73da165724192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF3WRWO3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4DWz3UMCeMyebybtoJ54lEgBtfGA5y4HnQH0H8hAc3AiByi22ZrfiLe5eg5mUZAeLEV4zuRXVMtkpkY9AIKzWXHir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMgXRar1WIwZ6MBJkmKtwDIF64mtauGWjukN7tdv%2BWak1GLPbzcCc7LJQkVLPg5IUh%2B72bJNQVmtaofVVq5%2FWMpM1BfGv%2Bk0In7CNWEJmbtSRj0oSN95zW%2Fkks4opZvwUYgrivTUq%2BgFkoLtn%2FnY9YEZUMDe70BmL8pzsiA2GNhiWFEXa2XPAoalYK9qyPiwXq4mM9HzxIro8wFLP5xVCeK411A6Us1AUpeRxhg93OjQm6bC8GrTorZGxjLN4ZLXg4%2FILaJxobGIv1SVyz14XUIwP4ULSlqnvAVLvRKYSgjd8KZJxuE1fwj%2FgHzmGUbKTsZnZxiok%2FuhLKLCPA3hlCBIKWBc4N0AHGZhJFqAv5Czz4%2FNgieoSp9KgVi0Ui2bF5lV9v3bAy6eav3VCoLLLjDPFWgQYeHF8S3laewNKX9dQEdee%2B1I6UIqlP7PdSO5l2RsRlUj1SHQSSCarH16o4J3EOXF5%2BF882%2FgFfTyoNAlTFUhltEle%2FdjYN1B3UHQkT8EHdu2u5%2BiqYGF1cRjWjvNYem2qKR90fDMihvcDRtKUPzeli%2BlHSbtM7yBkY1o79adof3RvK1eJfRA%2FwTZpynjesDF47FDQme%2F4%2FjJ3H1ov6AoK7AT%2FWweeMmuCpjk5WDvGhklFgDjN7mTMw6Nm%2BxAY6pgHE0rEgJQdg%2BOjd6bUKAWCXe6wafGN7ky%2BSmxGXGAw6IhkKoo0pIgNM4DHq6B96mwt3cpH7eFfLd%2BFPxpBlXuFP1ngN7NupYONfyuyiJYHP3XHOMwmyk%2F1rRD1K%2FySWv8OqleM8ChuBXJ7zxKeDZiFwrT63apVC1cuUXDUBr71VtWy3ncmIADn1jszNBsbUZnAmGulxxJmHIbdvov5EPALU6DC%2BWVgk&X-Amz-Signature=12fdfb7cae4a6ba014d80af021e5ab8efbd536f2fbd5b9f40411550e057442c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWU26CLQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHI9kZ78i8eUWTaR1wg0F8uFneYBMEqUgprb27u4SnkvAiEAutoSemN26OmBVlN8qe0K4VdDtSvqL3LO6%2FmnyvHUcHoq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDEBLtIdcMJOGCdY0FCrcA1QzwR7rs48hDJXcpAyMnwaQBT9cVmSEoTLoECjauJ%2BmpwBf4rZwSziroZEFtUKJlGIyXnXSGkDMc4cHnEVC8sKvc7xTv8wmgxNaoDXOm5xzOZXEaO4FrlffTeHIx6qgsXgO0iIZiZoFcbVcAQnp1rO2nJOxGIQks0714LqkUdTJjRjzT0EkcybhPJSkwm9mKLCIV4KH8buOydqiOueyv3D%2BLL4A2lBVNi3NN6lMWvLBv1SWQ3KSxFhNCe43XnQ3mEjwwzHjfOP7Qy%2Fau4heU4U0uTWvKZsLm0Y78bwXfeFG%2FHCVblue2%2BeoU2%2FCPmob6FyP%2F7tzU1a3B1TEe%2F8RtHfgMLGgUDCB719LDdXfLpy7vbEyX0L2ix8lz2gFvjmv3AlWENeMEBhxnXEUlR0Er0Rz44MLXC8v%2Bbflv76rRaDVC4CokmpbbKwPTb2lHGJlEbOZ8XprRD7HjWCfjMg1HttVpSAuuoFeLx0shg2rM4oFHwpu4%2BcnECBPPp1fCAVWpHTnkKzvXOXz5IGV2qmItf6KtAgn6KF03afoa7TM%2BLGRstSqhyTLUdumAQ0WXbTnW3c5mZhoHV7mZgcbnpLOkga%2B6weKVO2BzWmUV1JEs7MwbnMbXUSX7aOfy2eoMP7ZvsQGOqUBZ5NfNtm%2BVH8KWR%2Biw6KVNgStGCbriFKVDpbzmS6hDFwq4TmFDCEnE2g9zHt26s40NoMxRLamDIKxPgOJYJFF97nLBR6JtuL5cpqUeotcnHAtCUgz8HvPc%2BxDZVPof0lSZCl2oxfiwGzVTRDMxGmzRc%2Fwnuyr8DF2sWqxLxpmOLeiYR6xQT%2Betx%2BAyzNkdw%2BshOmprEiDrwLKVizUbN%2BB3KFLJyze&X-Amz-Signature=a578bb48d6110f008e2de3b1dd2fe3067efed069ee662c9a9a4c35964107c413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSP54IN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8JmlTDSY9r0wlQUj%2BPsPoCuYO8mPVIz0AfWL%2Bul3BaAiBpue6cE0GXKRVDPiyJ9l6Wh%2Fi1WW3SiItcgn6iJp4i6Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMzjcOEdMWITFnsREoKtwD5ZHHpTuVxt5mM3ZVHM2s5A%2BLk1FOdHQyZj6kKJTYUu3KGSux%2BU4DkxxtVDVK%2BqkFClI1MIr9ndamOFPyOaDuc2AkQUukIFTsGRVKg9stDUqBZ5gQgvMXDik6hz01lmQ9qmnsxEhED1MyYFo5WpKKScYRSEbuiu0Ba0G%2FmxgcuYVvpMYsTNZP3yEGcGxUoaLc1XIMV28rxHb0FUroJCRndYWz4KbGZnPWjx3Ndj7vfaOZm%2FPRN%2F%2FowiRhEhDGBHXj9oNBfpfNms%2BNxVwdsFHsyKnG4Nr5mZpwG09ChNeHq%2BtsSaTZGtKUugP3oBOEdegFBsNmTAAS3R5HDUtart5R2UwaVVCsIm%2FsqVrizPNY6xMKZMtQzPIiFmoh1zzcUBpGtIvN0NJzBdBYPw9MYCg6q0LBhXSqwWzk85xkn%2FY4b3NR%2BK%2FKg7zQTdvzFC1ZygJZLBSTHKQBgw35oE4uF%2FYBRnXTUvno2O%2FUKp5ywVDNK89FFddYZlAyNUGPrjQVK%2F5PImxr%2Byog0hEdiZKrB35nNkUXYWiX7rMGQe4X4NGF4FdMh8fgHAh3wFX3zjIY5NQx5quMHyVdUnPdjp0QXZ2BsawOQWn9fK%2F1Tiij64ywh2W5sGEDuAsRZQc7TewwpNm%2BxAY6pgHUUJtUmgrt3Ln0%2BV9rg5uBxs%2FBm0va%2BUW%2F9zIkFI0WO1RC42Qs1ebqtI0iJnBrd5mYyrjnV8MtFsFJrN2a12Tmyni%2FbLtEQS8eGyNXvMCZ0ppsbX8%2FhTrujWgU4y3bLCMKXMi0%2BokzkHHy3pOxT0n3D%2Fzu%2FMabacy4HoULiUDQ5ziM0Iy2wVcwlfz2zpu6Kxkp6nsRna6ZvYpUfOzBTynv5I%2BDMkyF&X-Amz-Signature=3b3735bbce330045b33d57279efc679f80db0de19a05d80b7e575dbb1f00f128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCPMWKNR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSVlod9gnXrp2DmvOPxCLdcJ%2Fuxr4LT0kXT51SLF6HQAiA7WFg9ZZPmqOYCXkaL%2FEBw4Ibkrz2Raux0BlEkuC6cayr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMCxvwrqCNgmG6zh3EKtwDe6CjWdXvBSG6fSFOwQVamEeSbJvBvCoNW0Ba8aA4HMolOgo6B6RoXCPzPFWfCT3vU7G0JvJhl7LcJ9sbmAfa1UPefntxPESzPH3IS6JOGKKJRz8JpTV%2BP5tZ0VyThv44sjszfufjyG6U9AwOAZcKh%2FAPj7VPqJ4ePz%2Fh0EfjxnMJWYZnrJ%2BZa%2FkVTJ4MnC%2B08X6QAhgEHDVW4G4wyY%2BpEfOTPd54DsfmXPSefGrAGCf9pmLI3tNsemSwuHVzuSsI4itw2s6GE6H%2Fh0L1vKDqBRN%2FIiLgFpp%2Bp%2FkCjI%2FfAS6ASqgf%2FATVf4gbo5aSS%2B%2FBJPNZrZDJxyXbSLFZRegIDUgYHN%2FBmNRMPhlpqHC5IizA0A03Ud1qSALPPwAEzdJsaKyC8UMBwsdlEgqh6p%2BTF2CyhWmsskfL3xGO6sLegvL3I%2FP9BlwQFnHGVVTFFtbrMKb7M9KV%2BZfdsz6SmzX42fTVZS7Hk4WA4x8O6GMqYIvAiEUXeOF4HjXMpVJFeJ1F1Ex3lWeLkJ8YUWZlKK7ru4aWdGwVCCe7Po2R4Kuj2pO4VnDfXS2hMWDdi80TDlFBCV0jZDJkYyVAjej%2BZlD9uAU0j9ECpzFoGxQp0guCtHkTGvz6BkXF5VILC00w9Nm%2BxAY6pgHUG0mqQGN%2BqVcYzhqOEN1YaN%2FVp1%2Bs8v8VjMulC4q%2F1oADuMyUKfAz9qtivZihzWOlJcfYgS5HRcJ5p4oH6QibqUDXlFXJ6pW3AmctJG8J1Pwo%2BAXjZ%2FWTINFmEYdQPYaVACRTtjEo6vx6zegI0zRmuUAQiPGj45%2FpYny9K1j2sjSfhr43jW7mgFY4K%2FXBHvlymV9m%2FdaS1fDuCSBMaFlp%2BelmQgSH&X-Amz-Signature=6bc87579353fd839feeac06c2366df796fc8d4b2940acafdfec929bfc5be3379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSP54IN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8JmlTDSY9r0wlQUj%2BPsPoCuYO8mPVIz0AfWL%2Bul3BaAiBpue6cE0GXKRVDPiyJ9l6Wh%2Fi1WW3SiItcgn6iJp4i6Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMzjcOEdMWITFnsREoKtwD5ZHHpTuVxt5mM3ZVHM2s5A%2BLk1FOdHQyZj6kKJTYUu3KGSux%2BU4DkxxtVDVK%2BqkFClI1MIr9ndamOFPyOaDuc2AkQUukIFTsGRVKg9stDUqBZ5gQgvMXDik6hz01lmQ9qmnsxEhED1MyYFo5WpKKScYRSEbuiu0Ba0G%2FmxgcuYVvpMYsTNZP3yEGcGxUoaLc1XIMV28rxHb0FUroJCRndYWz4KbGZnPWjx3Ndj7vfaOZm%2FPRN%2F%2FowiRhEhDGBHXj9oNBfpfNms%2BNxVwdsFHsyKnG4Nr5mZpwG09ChNeHq%2BtsSaTZGtKUugP3oBOEdegFBsNmTAAS3R5HDUtart5R2UwaVVCsIm%2FsqVrizPNY6xMKZMtQzPIiFmoh1zzcUBpGtIvN0NJzBdBYPw9MYCg6q0LBhXSqwWzk85xkn%2FY4b3NR%2BK%2FKg7zQTdvzFC1ZygJZLBSTHKQBgw35oE4uF%2FYBRnXTUvno2O%2FUKp5ywVDNK89FFddYZlAyNUGPrjQVK%2F5PImxr%2Byog0hEdiZKrB35nNkUXYWiX7rMGQe4X4NGF4FdMh8fgHAh3wFX3zjIY5NQx5quMHyVdUnPdjp0QXZ2BsawOQWn9fK%2F1Tiij64ywh2W5sGEDuAsRZQc7TewwpNm%2BxAY6pgHUUJtUmgrt3Ln0%2BV9rg5uBxs%2FBm0va%2BUW%2F9zIkFI0WO1RC42Qs1ebqtI0iJnBrd5mYyrjnV8MtFsFJrN2a12Tmyni%2FbLtEQS8eGyNXvMCZ0ppsbX8%2FhTrujWgU4y3bLCMKXMi0%2BokzkHHy3pOxT0n3D%2Fzu%2FMabacy4HoULiUDQ5ziM0Iy2wVcwlfz2zpu6Kxkp6nsRna6ZvYpUfOzBTynv5I%2BDMkyF&X-Amz-Signature=ac27bdcf365a75a9aa0e70d5a41f2da823caab8b158092514cd0346161e6f5dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4T6QGTX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCudO67rho7Rs%2FhgQE30sKzaWidjZDQF3iF0ZC04anBhQIgYILth4sGKDdadh14%2BvkXKxc1rHnOxgRGYEnJVjfcqRAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDONGCcnp6Ufj%2B5YgySrcAx95QOpxa7aV2rdV%2FsHvUWPPHxJGK712StYVL49Qfykk9R8fqdALSrtpZsbgu3L%2BDNEdxYpdI3nlp%2FoWgZ52Pq05yOry2UTX3x%2FDB0qngtBzry%2FwVrzSrv80YLM6bdEm9icaBkyXMlwFOz4M9hW8rD%2FY%2F1HkpTGfG%2FlXV%2ByuVi%2BFPpX3swzo8mETZ8WvdzGcwYBup0XdHiczGROhdSKowHa0uw2labIlEd5LSyOlGRx%2BnEx4%2FICmqjmARsVpr8oc7tmXNthQ4CxFjBLft%2BItNd3b8p0kuW22DPsUCmxIAHbZNp9kpO5gbQGYfKGqdQEVFBfcBtZq%2BCQP%2FbA1Sqx4bhY8bHg4k23f%2FhPqbvguGHTe2kE%2F7FE6g9rhFMdLodL7aLwXsHrW18jqgrmrGi71L0qsgkMXfCNErK%2F3GrCQTIflwCAhQQwlbn7rE5jORvzl06aQvlDTK19sROQ5FzX8WqC1sEik1kNBQuAmsb7yzSCIGHr4pL%2BaeFYU7M%2B4E0YBFoPc0gsIqRfOGdiZB%2FJohN%2FYTx2mkUcA6%2Fg%2BLj0VL%2Ba4P1vlQ4ofSJeHEN1Kwh%2F9rj%2FXMWuNjGNBTlWzl07H%2F%2Fc0iwKp03Bfw39xp19Dd%2FmSZRpR%2BdlcGR3U%2FdT%2BMPPZvsQGOqUBq4Nw6t5izLDW3tnucmpuv2pWq3lao4LS2ci4BRo0smOtluo2Sfa6dTsU%2FUQPrbH4FWfkfRvRXCGOoE%2BiEUmeDZije%2BpwFlN3BYFRKp8Eu3id%2FnYOoqz%2FNugQ7wOwLyUDzCYhPlJKUjOiMOqPjRWYkcqv3%2BhEOxasCJoT%2BOAKngYPjS1mwfDEX7Ih8Dx3ZzoME9S9ZRDH6RICsr9QYKdHzTPZC1xw&X-Amz-Signature=4f91f815727055b9644759deaa59bd5f10c1d9ab76c223089c172af22c4f6557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSP54IN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8JmlTDSY9r0wlQUj%2BPsPoCuYO8mPVIz0AfWL%2Bul3BaAiBpue6cE0GXKRVDPiyJ9l6Wh%2Fi1WW3SiItcgn6iJp4i6Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMzjcOEdMWITFnsREoKtwD5ZHHpTuVxt5mM3ZVHM2s5A%2BLk1FOdHQyZj6kKJTYUu3KGSux%2BU4DkxxtVDVK%2BqkFClI1MIr9ndamOFPyOaDuc2AkQUukIFTsGRVKg9stDUqBZ5gQgvMXDik6hz01lmQ9qmnsxEhED1MyYFo5WpKKScYRSEbuiu0Ba0G%2FmxgcuYVvpMYsTNZP3yEGcGxUoaLc1XIMV28rxHb0FUroJCRndYWz4KbGZnPWjx3Ndj7vfaOZm%2FPRN%2F%2FowiRhEhDGBHXj9oNBfpfNms%2BNxVwdsFHsyKnG4Nr5mZpwG09ChNeHq%2BtsSaTZGtKUugP3oBOEdegFBsNmTAAS3R5HDUtart5R2UwaVVCsIm%2FsqVrizPNY6xMKZMtQzPIiFmoh1zzcUBpGtIvN0NJzBdBYPw9MYCg6q0LBhXSqwWzk85xkn%2FY4b3NR%2BK%2FKg7zQTdvzFC1ZygJZLBSTHKQBgw35oE4uF%2FYBRnXTUvno2O%2FUKp5ywVDNK89FFddYZlAyNUGPrjQVK%2F5PImxr%2Byog0hEdiZKrB35nNkUXYWiX7rMGQe4X4NGF4FdMh8fgHAh3wFX3zjIY5NQx5quMHyVdUnPdjp0QXZ2BsawOQWn9fK%2F1Tiij64ywh2W5sGEDuAsRZQc7TewwpNm%2BxAY6pgHUUJtUmgrt3Ln0%2BV9rg5uBxs%2FBm0va%2BUW%2F9zIkFI0WO1RC42Qs1ebqtI0iJnBrd5mYyrjnV8MtFsFJrN2a12Tmyni%2FbLtEQS8eGyNXvMCZ0ppsbX8%2FhTrujWgU4y3bLCMKXMi0%2BokzkHHy3pOxT0n3D%2Fzu%2FMabacy4HoULiUDQ5ziM0Iy2wVcwlfz2zpu6Kxkp6nsRna6ZvYpUfOzBTynv5I%2BDMkyF&X-Amz-Signature=f357e848fd73903ede2d9068d3c8cb2529c6d9126d204d8883958548c0a576d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMT46SBJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvnXWqnZbjuPXIZwTWnS1Dtbk6b3AoM2qOFQuqrSMl%2BgIhAMXllMz9w%2FzEDSm4FF98yPrOIPhcPAT1p5pAsRImnwztKv8DCDQQABoMNjM3NDIzMTgzODA1IgwcrKg3TK%2FWLhaizuEq3AM5q2G1b84OZ8lY9k2XCztQTU%2FDVYzXHtK3gCmbZQSuDPu%2B3l1Fw6MnOvtg4JaX3G0Vg7P0nQGatET%2FJ%2FLWvqNwqxP7X6LytieYlV6az4V6yMzbn27HXog%2BJpyd3wVM%2BRVy2ZF5LT%2FPD0xA%2BEdxecY1PNCoDZj9FWtx8GgBaiR%2BwdlqdE5gZva218UrUTfZnf%2FkOZVyDd74WTTnrx%2B4sXX0sWdhsFCCfTfYm5C9LaZoyBcakU8F61NRQFWGO1%2FoE33VN3%2FJMoU1YhFUo61wHvP9N8EUTfBsevzO%2FKIGHGQxxHtHzl3hrNQ1ZtMi8VjZsfyLcvWdYvPFcHRzuXyRgbPTnagrkCs8oUKIISOLdppypR2D%2Bly5C1oxt44tG1ZCx0SaZanD41Rz9kEryhFQbQg8eAefDadjdhzJGg44YRD8up%2FTqcGdjLqqP8CX8TlhOmSgxjhj2VnVi0k%2F5CEugBNKgmNkC0A0JG9fCtmgtDga3AAPZRXMl7cq7FfMcnTh0QLTDdIQ1dirUvhJD0%2B5Y2PDwMpkuDiYBCZ5toK9xhHhrJ3z9huYQoDA2PKMRUXeG4Fw%2FHjVDs0BbQ%2FJaQN%2BOfu0antl0zSNmcqw1mLvKmplAuY%2Bz%2BnwaJ31eZm3TDCw2b7EBjqkAYp1OUHITcJSKnuEovwGbw0Tc0nrJKUpFt2a1SRJ9i5Xfv9a6yLqa%2FWHS9rbLvKErztVfPycnCeKWbZ21OoZ62gK6yduDWxoVtQE3pv3KSFvJDoyZa43DhTJR95%2BYX62mI%2FB2%2FhFw76oikcRB%2ByQhVx%2FyprH2uK%2FDZAPz4BrZXpQTD9XyWnkbJUUHBMBZpRj9gTbwk%2BApIDRUPYryTWFqmuvXSZV&X-Amz-Signature=d0f8b01a824b642e1812e0617a918d7480486f4a57f78cf4c5dc5457b381a5f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSP54IN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8JmlTDSY9r0wlQUj%2BPsPoCuYO8mPVIz0AfWL%2Bul3BaAiBpue6cE0GXKRVDPiyJ9l6Wh%2Fi1WW3SiItcgn6iJp4i6Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMzjcOEdMWITFnsREoKtwD5ZHHpTuVxt5mM3ZVHM2s5A%2BLk1FOdHQyZj6kKJTYUu3KGSux%2BU4DkxxtVDVK%2BqkFClI1MIr9ndamOFPyOaDuc2AkQUukIFTsGRVKg9stDUqBZ5gQgvMXDik6hz01lmQ9qmnsxEhED1MyYFo5WpKKScYRSEbuiu0Ba0G%2FmxgcuYVvpMYsTNZP3yEGcGxUoaLc1XIMV28rxHb0FUroJCRndYWz4KbGZnPWjx3Ndj7vfaOZm%2FPRN%2F%2FowiRhEhDGBHXj9oNBfpfNms%2BNxVwdsFHsyKnG4Nr5mZpwG09ChNeHq%2BtsSaTZGtKUugP3oBOEdegFBsNmTAAS3R5HDUtart5R2UwaVVCsIm%2FsqVrizPNY6xMKZMtQzPIiFmoh1zzcUBpGtIvN0NJzBdBYPw9MYCg6q0LBhXSqwWzk85xkn%2FY4b3NR%2BK%2FKg7zQTdvzFC1ZygJZLBSTHKQBgw35oE4uF%2FYBRnXTUvno2O%2FUKp5ywVDNK89FFddYZlAyNUGPrjQVK%2F5PImxr%2Byog0hEdiZKrB35nNkUXYWiX7rMGQe4X4NGF4FdMh8fgHAh3wFX3zjIY5NQx5quMHyVdUnPdjp0QXZ2BsawOQWn9fK%2F1Tiij64ywh2W5sGEDuAsRZQc7TewwpNm%2BxAY6pgHUUJtUmgrt3Ln0%2BV9rg5uBxs%2FBm0va%2BUW%2F9zIkFI0WO1RC42Qs1ebqtI0iJnBrd5mYyrjnV8MtFsFJrN2a12Tmyni%2FbLtEQS8eGyNXvMCZ0ppsbX8%2FhTrujWgU4y3bLCMKXMi0%2BokzkHHy3pOxT0n3D%2Fzu%2FMabacy4HoULiUDQ5ziM0Iy2wVcwlfz2zpu6Kxkp6nsRna6ZvYpUfOzBTynv5I%2BDMkyF&X-Amz-Signature=84242172d251bad2c0b4ecf36843cf567e9e3febc44c23fd8eb996462d67ae2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNESZ4PT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT4FXeX0wf0%2BCkma%2BUyBugPnLKANDMImODgZSEjDlubAIhAID1J%2F2vHU5ttTUpRRgr1MND%2FmXIWYEEakV%2BWa%2BLT%2F2kKv8DCDQQABoMNjM3NDIzMTgzODA1IgyAxkpFCxv45IZ5iOIq3AOhG7711eGxwmUNNjmyaVN5stRTuByVNxbvegmS57z3ugGZue2Y7uwWyzG3W5I6aLI6HhNPoK8YYlrpEMbHRSgQQWM3oI%2FprdusJepfzaXvEXZ%2BGwtZo0rEeQR2bh6ZsNNSP23FFqBas95hecQxbn%2BejhvnQCdl3S8hgd%2BEZ2u%2FlAaEPjWGwoEpmAMMpyxP%2FHRyEmG3IoUhw4U5LEmCeiSP83iBeOyt7S2lJ%2BT9WeW4Na%2BYlnBmPYdy7hBjca4Q9YvNHUFWkKvNm%2BbDJBpGhhp8IbL1Z6VWmSLY4AVAVeqyMHSN0Nv%2BmkviT5ocRmdlbGWWw%2B564tlHaOPCQrE2h6s3p6yRGhmghfAQV0meeuqFaf3XExd84o9wk4sEirAKADv12B4hElA6z4XjDhSTRoSaX18Av3pdZm9EHL998jHf28DYH6ccWbFKrhmAclaM4nOdGbOy1kycUe%2BsiFdcVY6HETScWNxMg7t1Kakp74dQMqq8XtnwX29Wfr%2F%2FpON9wUYMI7F82QWphTkhDhDXrigks3Iw4fwcWPRvWqblMDSdkzN2eg9vxEv3%2FUEH3OSLVqgkwYIPLiCsiJOfKzhcl3wQiUmGotREGxCqXCB1qMp%2BjJbkUEKjNXd8UO3dBzCc2b7EBjqkAR%2B0Xt7HwlDPQmYwGljlkIE%2FCRu4EApI5y7hurC3ZeH2%2B9NWBfo27ZzalfqZJsEH4OIGriKQwKN1okVgg31avGX5oxXV1PT7%2FVbjM7qQU8jOXKTcBxB6jpJ1ysKm%2FiJXglBbOGikRS3wTYW6KgHaPN5x8KPMwULdF8ivQJ%2BFm8I%2F3r7EmHb7Qe%2FOWfoost3JNRJAfets1R6r5QpSUpwi4mCicjr6&X-Amz-Signature=01f3f0ff8d36eee0da5cb92aa4ecfcaafb11a31438d17dc626529e3c0fb33b12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWMUSX2T%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjucB3ChmsLJpbjbXuaretJ27EZAwFr3DPn3JHnsxkTwIhANiC9AIFaWxpqnNDsQO%2B0JnhnxEl%2BhiiG8WN6loWamLLKv8DCDQQABoMNjM3NDIzMTgzODA1Igzeb7uM7xhZskNbuEwq3AO66eMNjOcytIOhIro42VT5eRg3nZEnfHdPGZHgpB6iXUpsHuIQb4s%2FimOe0lnykvfZMSAubA90poaNoeRjzOLSP6ocXUtid80RSq97tKRjb0dl3zuiLeewHqAGTQe0MloBNJ5WMu6O3q6mpp7atxSRXaA%2FI%2BhqpL5YJ2Hj3P02lLo5ylrgtTUIjtK8t32Gc8GeMEjRm%2FY6nB5u7C6vOk6yKQ64ZgGFFFQWPyYjCUI2Uu9QaBYvYn95YwrE3rgThxmlKaPkzVj0wotQd%2Bm9l2M2PSuzcLLMo8EtzBs919AbKoqjRqqTxWAyycbg3WuSm4u%2FmuvKh3F6GBGHOP24QMwSvvC8adrXObbFXG3e1u4LtiokZdaivl0IPovv96Pt73m6divfrsaxNAIn00t2J1bGD1ieYtSflJiGRnmgdbyW8PgFCHUHPBglJ998C1wciXJDhEPEBT5%2FwkFTCrl%2BdIJXFgmpyMXVUOmPGLc8m4cTBuA3C3SfHDSDnPXAldZZ7L%2BNu4ti4scg3rib11NxEv1Edo71vgWPyv2gliay%2Bo6PhKO7ec%2FM8uOPI05OFrJRXAhJtwrjEC0dvG8deglBxHZJx0R39%2F8DKdT3iHnBQtYyJS14EyNvkr3sEJL8wzDK2b7EBjqkAfjv4C29QFfD3FErYFwJDouAknXHI9AFW6mS8yi6L0vcTGl%2B9pPMd4vNw3Hpx3yaiUt6G6jyZPBj7EqP0hAWqXf8mEbijsIPKUflnV1u5bhtRju0bkuy5RAKxcJ2SZlySOkhCxl%2BtJSIQn6rmvt%2FuCjg4haDLc6lHtOslbNAGJ3iNOpqarA0iRlcIWw0HbO2CJL%2BW3c%2FCJH5A0GCvSIwcHmtIbDe&X-Amz-Signature=6b8a1c9a84a8f1ce6f1c64ec984d44ff92ff1af426ef1014dd970811808e032d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB4MOKWO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTf0xNUfCYxdsJiOgf0ofUU6D0maJ4si%2FvnU2ri%2FGzdAiA8V0tcDKykjqmDHtvGwCyyyYwCGIjSk77Q04ndFtP8rSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMBYnROE3FTQ1I5SGaKtwDsMJ7QGGCVFnvrUe4KT2emohYSE5EfOVagsjdWJ1GWF2n0fa9uVLyRXS0or1S0ZJS4nHE%2BrK3%2FHqYjM%2FNwR%2FD5BYL5561Us%2BDnZpaSwOFdR6r1fNsTkagbxBwSK1EcNSOXyqrgKGMXDuNecwBF%2BL00HlIV8ccdwOmpSrJxl%2FwcfYdzcguetYoeeN1t9rB5sBjrCn2E5rUJBR8RCNbHhgzxxK2uqCwVRdAh2vbZXILS2hm38Pu9y4U7GoOwjm14uYCLC8d21Dk1wZJZqkpmAtmW08qMi4oGHaRnSCT2mZZ%2BvZZ6S0mWJZrJBoKQlZg7r1icljXFt3Bc5ME%2FIKpV4dqsZgZX6PK2CYwsMO5gi4u0zRZx78tVWcXZcrLo6BRKYJhbOR2G%2BXFPHlFpY2ZntIkAId4aZl713rwX6Xsk41EZATdeVWFu89R0mTH0ZxurzSShNZtrOjFyFyv3PjahAXMiAHMrFM%2BxLkZRxqS9wWlHGHaoj39NTeyEvK6ZsO6KuDGeDGl0PFK6GIHiJdY5ll0a%2BPTlqThsG1eagZVSIPp3ryuYgmyXIh%2By%2BfvmqbgShGRQ3YYHBlc5Fj%2Bf9Z7jCFTSd1Fq7WISzFNgSr3KZu5dzFQCh8vD1Nlgk%2BRh4swo9m%2BxAY6pgGT%2Fot736xIQ3DgCI%2BIEqsVhqwXkfgBb2k3JudYUyN8XVlhoe%2BUDzqEySfZDhKjdfEpam3lL0RMzcWPn7OIICoVOJuc2lTQ1sCyEkminmpX5YWNlYQO%2BNQkp6V6G%2FUw3MJk6GkQzXLivT04eWR0aDNHxmqO0IdfsF3JiEsEVFklbbwvEpjYa8qUTgbARaE4ebsE0umHhiUw014qEaktJBqIz%2BNWF%2BCC&X-Amz-Signature=61ecf9d33f4332f364a5e138aaf885f81afd95996c311a6ac8de836c094a0330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O75SMBI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzI2cEj9yduwWNJQp98vKDe9vuM1icg%2BsB%2FdkdhqTiawIgaKOfXYUcweP9zzHbI6MLN8TaWIzGVoI9IKga4NE5nYgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKodh0oGraeIGegRRCrcA0cZI72N9YYm0EhK7HFowZ6vH0A%2ByNuCZAKvWv3buFg3dzVpZiY2iBelrNeJ7OQi6EDOQr314Hwq%2BhhQwkmIszUWjsyMHReC7HE9XvKxhAlUPTxSRdEtUTd0%2BrDo8TJ9bernGVNxH%2BGE9oomE2SQz%2BMRCkPibbrkz8FGZAjEsRgmL1SCFCpAbbQW0ADer64GFpAXJ0mxefNaItTbpDTU52Abbn86ogWb%2BE11F0EAcCcWRygJdHjj8c2JhSVc85l04ou7wDjIDUGlazwd%2F5ymwBJPyr8nXBDSUzEgXP65RVzW3lXXmuUQ3EhbC6jglYTn0DExK9gHSlwPpV6cEmmZgkzoVj%2FXVSUPoj0IZIQB2Q81LnCgj4vmQf5YUZ8hKLEUFMagwH9K6ZpiPZvcATwsoz7ZdkP2TvTIjBsHdiYHhLnVwT8jm7W%2BSObWdXZltoRnWN47QX7Da063%2B24C4QQaSPWqTxyTiRaGoo1Zn8vWAjjPNr0%2Ft4rhw8MwiKg5V2wch1YfURViQwGlZUhmvr3Bv%2FR3CCBcjoMkIhocuq4iG6JfUBPbHagam%2BTLfiF4Lnw15yB3xM35KtQywk0AaDMgdMsVBX8LyOUsTEGssTDfhl9mcxz%2FhrCKooTbmYkWMJLZvsQGOqUBOmV3RHRcB%2Bq0egdqgCozpMIGBAdjDMNaEofqN3XYqOWR3yte8%2B1Q%2B7Vf6mlsupUqGdlfJM0L7mLQY68A5im%2FrKOrPnZb0hk5xGkXcU1KFmIG83K8Rb25MY%2BX9P%2BJYo57s5bqo040fHYP%2Fvx%2B0g2QzDlVvieZmInynauvU01RQ4XtuJiB5I73s8At7sMh%2FWagREkQqOwYE1G%2BI1iefJxYsCDH1vB5&X-Amz-Signature=87886ab3797aae3019120b616b3a0b1aeb8f1062c0c1bb775ea4defbce9cdba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGI6ZIXO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIaOemxIIdhm7ylG6UQTDdIWCOcAAF7J%2FPYNd9oW2xBAiANc9vcu5BPLtB10hVJjE6UJf4ntnHGnO%2BbsUagAoGdfir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMOuWOx9vV5yjYsFRGKtwDd%2FPj7aCRTN9GvyeJM%2F0MA%2BgC%2FlahL7OM1UzzBTEcGg9Mp9ac%2FSSASbBX44rzlUKUTP%2FIKkfPwp%2BuQotpOb5IlaQPbBruxoaG4zmRyv1s8FGyIKZfWjJir5d%2FZGV838FK9xCsvyv2QZDgjOvmCooF03hNG7U%2BLn1MHqDkCT6k2x75zkUdQgYBQX253PwgChF2zgJWHwZ6ZMQJX44asUv3IAp33%2BAKV52eklgz5fJ9McXxVQOaSnWd8Erv%2FXjhEyZ8UI6aYMFAfvk%2BnsO2eu5MQByx45zxOmo3AsLuP0whP2fFJntKYOvl37IKM7ThvwBj3%2BoX5wE3r6cYue7syVXQQ5gjHnYhLrtcT4G8u85Jd5dkZVh%2F4uwD9h6RIDOzgbD8lfIKOx0eBkuBB2kUu%2F8NIWwbiUp1wvyiWUAcy%2B8%2F4IqqIhRf%2F7FRK2d8TrWxgL0HCcr3lRwIpXZ2zZUQQ50oM6n3Hd9nJeJDuKq%2BhCQC1jPJgPduK%2BGvUPdQg%2Bk9OHksHBg0JyznJtrnh2CCR5B6BsNJ70r0NbnWoGiddT2LwlYDsY%2FeiAcxWChI66HUpPUC6LG8Je4lcNw15XeOWgt77lZTulLoAwPOFGT0dWry7qGpgJkIxWWvlKNjMmYwzNm%2BxAY6pgEjiC2jSg03ojXiQsymuodOjZr3IpBnpdmFMILbiZJ55%2BpZX4%2BdSH%2B9HAQMRMPthg4PLW7a18YukCjD5xr1zcqKRJXAMr6%2B4Dg6BFRHUNfTAszo7HH1kxt%2BHVJtew63Q0P3bk%2FDfk0D%2Fijh%2BdMMfcNjwruaIAu5HsMpQI58DmM%2BI%2FITIl%2BNaDUo5uKZSdfPGm%2Bc2HmrN4nJsv4ni00Z7%2FUKjo4kWzSB&X-Amz-Signature=c42576f4853a1d07c958a32b09fb3c9ef2bf5e8a3bf2b6270584da3c8f801178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSP54IN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8JmlTDSY9r0wlQUj%2BPsPoCuYO8mPVIz0AfWL%2Bul3BaAiBpue6cE0GXKRVDPiyJ9l6Wh%2Fi1WW3SiItcgn6iJp4i6Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMzjcOEdMWITFnsREoKtwD5ZHHpTuVxt5mM3ZVHM2s5A%2BLk1FOdHQyZj6kKJTYUu3KGSux%2BU4DkxxtVDVK%2BqkFClI1MIr9ndamOFPyOaDuc2AkQUukIFTsGRVKg9stDUqBZ5gQgvMXDik6hz01lmQ9qmnsxEhED1MyYFo5WpKKScYRSEbuiu0Ba0G%2FmxgcuYVvpMYsTNZP3yEGcGxUoaLc1XIMV28rxHb0FUroJCRndYWz4KbGZnPWjx3Ndj7vfaOZm%2FPRN%2F%2FowiRhEhDGBHXj9oNBfpfNms%2BNxVwdsFHsyKnG4Nr5mZpwG09ChNeHq%2BtsSaTZGtKUugP3oBOEdegFBsNmTAAS3R5HDUtart5R2UwaVVCsIm%2FsqVrizPNY6xMKZMtQzPIiFmoh1zzcUBpGtIvN0NJzBdBYPw9MYCg6q0LBhXSqwWzk85xkn%2FY4b3NR%2BK%2FKg7zQTdvzFC1ZygJZLBSTHKQBgw35oE4uF%2FYBRnXTUvno2O%2FUKp5ywVDNK89FFddYZlAyNUGPrjQVK%2F5PImxr%2Byog0hEdiZKrB35nNkUXYWiX7rMGQe4X4NGF4FdMh8fgHAh3wFX3zjIY5NQx5quMHyVdUnPdjp0QXZ2BsawOQWn9fK%2F1Tiij64ywh2W5sGEDuAsRZQc7TewwpNm%2BxAY6pgHUUJtUmgrt3Ln0%2BV9rg5uBxs%2FBm0va%2BUW%2F9zIkFI0WO1RC42Qs1ebqtI0iJnBrd5mYyrjnV8MtFsFJrN2a12Tmyni%2FbLtEQS8eGyNXvMCZ0ppsbX8%2FhTrujWgU4y3bLCMKXMi0%2BokzkHHy3pOxT0n3D%2Fzu%2FMabacy4HoULiUDQ5ziM0Iy2wVcwlfz2zpu6Kxkp6nsRna6ZvYpUfOzBTynv5I%2BDMkyF&X-Amz-Signature=c416ab0dfa81d2b2c7a9ef3be2061d6b61687ae1301d9703ecded2c87e803bcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSP54IN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8JmlTDSY9r0wlQUj%2BPsPoCuYO8mPVIz0AfWL%2Bul3BaAiBpue6cE0GXKRVDPiyJ9l6Wh%2Fi1WW3SiItcgn6iJp4i6Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMzjcOEdMWITFnsREoKtwD5ZHHpTuVxt5mM3ZVHM2s5A%2BLk1FOdHQyZj6kKJTYUu3KGSux%2BU4DkxxtVDVK%2BqkFClI1MIr9ndamOFPyOaDuc2AkQUukIFTsGRVKg9stDUqBZ5gQgvMXDik6hz01lmQ9qmnsxEhED1MyYFo5WpKKScYRSEbuiu0Ba0G%2FmxgcuYVvpMYsTNZP3yEGcGxUoaLc1XIMV28rxHb0FUroJCRndYWz4KbGZnPWjx3Ndj7vfaOZm%2FPRN%2F%2FowiRhEhDGBHXj9oNBfpfNms%2BNxVwdsFHsyKnG4Nr5mZpwG09ChNeHq%2BtsSaTZGtKUugP3oBOEdegFBsNmTAAS3R5HDUtart5R2UwaVVCsIm%2FsqVrizPNY6xMKZMtQzPIiFmoh1zzcUBpGtIvN0NJzBdBYPw9MYCg6q0LBhXSqwWzk85xkn%2FY4b3NR%2BK%2FKg7zQTdvzFC1ZygJZLBSTHKQBgw35oE4uF%2FYBRnXTUvno2O%2FUKp5ywVDNK89FFddYZlAyNUGPrjQVK%2F5PImxr%2Byog0hEdiZKrB35nNkUXYWiX7rMGQe4X4NGF4FdMh8fgHAh3wFX3zjIY5NQx5quMHyVdUnPdjp0QXZ2BsawOQWn9fK%2F1Tiij64ywh2W5sGEDuAsRZQc7TewwpNm%2BxAY6pgHUUJtUmgrt3Ln0%2BV9rg5uBxs%2FBm0va%2BUW%2F9zIkFI0WO1RC42Qs1ebqtI0iJnBrd5mYyrjnV8MtFsFJrN2a12Tmyni%2FbLtEQS8eGyNXvMCZ0ppsbX8%2FhTrujWgU4y3bLCMKXMi0%2BokzkHHy3pOxT0n3D%2Fzu%2FMabacy4HoULiUDQ5ziM0Iy2wVcwlfz2zpu6Kxkp6nsRna6ZvYpUfOzBTynv5I%2BDMkyF&X-Amz-Signature=88df72e538cce96b1a37f0e39e25ea86a316b176fd6c2250b11b4702ba9780c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGVCL4CP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxFkguekJskLovvtbVdGtO1a0D7NN52v8ZOSzheXodAAiEAz8qnC%2FYyetDqHXzZex7hbGinejRb1f%2Bfp4NohXciZfcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDP1M%2F%2F%2BzFxUF6M8lBircA50l4TAjTH%2FjPgl%2FrBWP92sxn0bIN1BDCVApMaVWfpgyVqgMOyKV9dfk8OfJdLu%2BGP1ebHxp5JOXUgpSRpxIMAh3ttoYCWJtXDhApwcyhMTXb0u74xMm9ju6nW%2BB4dJxMUbeH2%2BFRvK9nvUKi66NPAZ5GNxGlJvGQNWh9T2OkixKyR%2F4b7wb%2FNuPlBPiFP6uQiSHCHVKSyX96e%2Bwb%2BiYK%2FofWbD8U3I07WnDpU8hivkSpPnZA2h5txBk7YOXIFjBMbkIFuEbMs9F7uS9%2FoBZHclFz3v%2BhiVX9qBnmYMFFGbu3TgfFOazA%2F%2Fx78wdkZsuZt23h1KGsLh3M%2F%2BBe9JPtn9zX4KvI9CRxpnrMMfV04uaBL%2BS6zS0T4RRAO3s9GicFr0rprA%2FglDpybxpsj%2F0qB5u9ELHho5pFW5S52ebIrk9L6pUTVccVCDszXsP7M7JuU68Ff%2BKNrNvqG4PiQSOOwQ2d1JmYYSCmBUZ6OrTowOhNw%2FyAH4IrgSTD789CxmcAmyesCpbUgxl1Piv5xg1w2QtxqrVXVuyeiWWlkmvFoGUWaw0BOlTkl99WGn4X4qAuO1t5r6fSEnYmCmonEH1Dp88dUg6vSfVR7Im8I7j%2FwEI6QAgcNvv5ToRxUrZMNrZvsQGOqUB6BXHYOjMPkrlNyqM2G2tjGX4XmkfOEHkz9dyuRWpN%2FFEgGHY%2FShZB5NhLVLd4%2Bg%2FIdv8GGelsBHzfmo6WTkTeAzSFEL%2BkZwV4g9QN9nPMpk6C98iJdZ9pC642L9BjOnelrsbv6UrnoQU%2Fb1cfgqY5rBNFfsAlZqIX6WYRE5hZFXxS0ADVAhuV4BHc7vrB4HCbA0UmhGwZifwXV2BIUrC585gk%2Bgn&X-Amz-Signature=3e80bd29a8ec2226f410cc784efdd3cd51310b973194a102405d93045bc19a9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGVCL4CP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxFkguekJskLovvtbVdGtO1a0D7NN52v8ZOSzheXodAAiEAz8qnC%2FYyetDqHXzZex7hbGinejRb1f%2Bfp4NohXciZfcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDP1M%2F%2F%2BzFxUF6M8lBircA50l4TAjTH%2FjPgl%2FrBWP92sxn0bIN1BDCVApMaVWfpgyVqgMOyKV9dfk8OfJdLu%2BGP1ebHxp5JOXUgpSRpxIMAh3ttoYCWJtXDhApwcyhMTXb0u74xMm9ju6nW%2BB4dJxMUbeH2%2BFRvK9nvUKi66NPAZ5GNxGlJvGQNWh9T2OkixKyR%2F4b7wb%2FNuPlBPiFP6uQiSHCHVKSyX96e%2Bwb%2BiYK%2FofWbD8U3I07WnDpU8hivkSpPnZA2h5txBk7YOXIFjBMbkIFuEbMs9F7uS9%2FoBZHclFz3v%2BhiVX9qBnmYMFFGbu3TgfFOazA%2F%2Fx78wdkZsuZt23h1KGsLh3M%2F%2BBe9JPtn9zX4KvI9CRxpnrMMfV04uaBL%2BS6zS0T4RRAO3s9GicFr0rprA%2FglDpybxpsj%2F0qB5u9ELHho5pFW5S52ebIrk9L6pUTVccVCDszXsP7M7JuU68Ff%2BKNrNvqG4PiQSOOwQ2d1JmYYSCmBUZ6OrTowOhNw%2FyAH4IrgSTD789CxmcAmyesCpbUgxl1Piv5xg1w2QtxqrVXVuyeiWWlkmvFoGUWaw0BOlTkl99WGn4X4qAuO1t5r6fSEnYmCmonEH1Dp88dUg6vSfVR7Im8I7j%2FwEI6QAgcNvv5ToRxUrZMNrZvsQGOqUB6BXHYOjMPkrlNyqM2G2tjGX4XmkfOEHkz9dyuRWpN%2FFEgGHY%2FShZB5NhLVLd4%2Bg%2FIdv8GGelsBHzfmo6WTkTeAzSFEL%2BkZwV4g9QN9nPMpk6C98iJdZ9pC642L9BjOnelrsbv6UrnoQU%2Fb1cfgqY5rBNFfsAlZqIX6WYRE5hZFXxS0ADVAhuV4BHc7vrB4HCbA0UmhGwZifwXV2BIUrC585gk%2Bgn&X-Amz-Signature=12bf956c17ef299aef6207cef805bdccb96daf6a693f5bb008afbdd25360df93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGVCL4CP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxFkguekJskLovvtbVdGtO1a0D7NN52v8ZOSzheXodAAiEAz8qnC%2FYyetDqHXzZex7hbGinejRb1f%2Bfp4NohXciZfcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDP1M%2F%2F%2BzFxUF6M8lBircA50l4TAjTH%2FjPgl%2FrBWP92sxn0bIN1BDCVApMaVWfpgyVqgMOyKV9dfk8OfJdLu%2BGP1ebHxp5JOXUgpSRpxIMAh3ttoYCWJtXDhApwcyhMTXb0u74xMm9ju6nW%2BB4dJxMUbeH2%2BFRvK9nvUKi66NPAZ5GNxGlJvGQNWh9T2OkixKyR%2F4b7wb%2FNuPlBPiFP6uQiSHCHVKSyX96e%2Bwb%2BiYK%2FofWbD8U3I07WnDpU8hivkSpPnZA2h5txBk7YOXIFjBMbkIFuEbMs9F7uS9%2FoBZHclFz3v%2BhiVX9qBnmYMFFGbu3TgfFOazA%2F%2Fx78wdkZsuZt23h1KGsLh3M%2F%2BBe9JPtn9zX4KvI9CRxpnrMMfV04uaBL%2BS6zS0T4RRAO3s9GicFr0rprA%2FglDpybxpsj%2F0qB5u9ELHho5pFW5S52ebIrk9L6pUTVccVCDszXsP7M7JuU68Ff%2BKNrNvqG4PiQSOOwQ2d1JmYYSCmBUZ6OrTowOhNw%2FyAH4IrgSTD789CxmcAmyesCpbUgxl1Piv5xg1w2QtxqrVXVuyeiWWlkmvFoGUWaw0BOlTkl99WGn4X4qAuO1t5r6fSEnYmCmonEH1Dp88dUg6vSfVR7Im8I7j%2FwEI6QAgcNvv5ToRxUrZMNrZvsQGOqUB6BXHYOjMPkrlNyqM2G2tjGX4XmkfOEHkz9dyuRWpN%2FFEgGHY%2FShZB5NhLVLd4%2Bg%2FIdv8GGelsBHzfmo6WTkTeAzSFEL%2BkZwV4g9QN9nPMpk6C98iJdZ9pC642L9BjOnelrsbv6UrnoQU%2Fb1cfgqY5rBNFfsAlZqIX6WYRE5hZFXxS0ADVAhuV4BHc7vrB4HCbA0UmhGwZifwXV2BIUrC585gk%2Bgn&X-Amz-Signature=225afba5a814293da4e573da9e3551bbb5e205f69d03702714cf67273adb566b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGVCL4CP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxFkguekJskLovvtbVdGtO1a0D7NN52v8ZOSzheXodAAiEAz8qnC%2FYyetDqHXzZex7hbGinejRb1f%2Bfp4NohXciZfcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDP1M%2F%2F%2BzFxUF6M8lBircA50l4TAjTH%2FjPgl%2FrBWP92sxn0bIN1BDCVApMaVWfpgyVqgMOyKV9dfk8OfJdLu%2BGP1ebHxp5JOXUgpSRpxIMAh3ttoYCWJtXDhApwcyhMTXb0u74xMm9ju6nW%2BB4dJxMUbeH2%2BFRvK9nvUKi66NPAZ5GNxGlJvGQNWh9T2OkixKyR%2F4b7wb%2FNuPlBPiFP6uQiSHCHVKSyX96e%2Bwb%2BiYK%2FofWbD8U3I07WnDpU8hivkSpPnZA2h5txBk7YOXIFjBMbkIFuEbMs9F7uS9%2FoBZHclFz3v%2BhiVX9qBnmYMFFGbu3TgfFOazA%2F%2Fx78wdkZsuZt23h1KGsLh3M%2F%2BBe9JPtn9zX4KvI9CRxpnrMMfV04uaBL%2BS6zS0T4RRAO3s9GicFr0rprA%2FglDpybxpsj%2F0qB5u9ELHho5pFW5S52ebIrk9L6pUTVccVCDszXsP7M7JuU68Ff%2BKNrNvqG4PiQSOOwQ2d1JmYYSCmBUZ6OrTowOhNw%2FyAH4IrgSTD789CxmcAmyesCpbUgxl1Piv5xg1w2QtxqrVXVuyeiWWlkmvFoGUWaw0BOlTkl99WGn4X4qAuO1t5r6fSEnYmCmonEH1Dp88dUg6vSfVR7Im8I7j%2FwEI6QAgcNvv5ToRxUrZMNrZvsQGOqUB6BXHYOjMPkrlNyqM2G2tjGX4XmkfOEHkz9dyuRWpN%2FFEgGHY%2FShZB5NhLVLd4%2Bg%2FIdv8GGelsBHzfmo6WTkTeAzSFEL%2BkZwV4g9QN9nPMpk6C98iJdZ9pC642L9BjOnelrsbv6UrnoQU%2Fb1cfgqY5rBNFfsAlZqIX6WYRE5hZFXxS0ADVAhuV4BHc7vrB4HCbA0UmhGwZifwXV2BIUrC585gk%2Bgn&X-Amz-Signature=8c3c63211d03d1c9b27f9323ea2a57963d31b948e8abaf55f9a3a15edaa4f66d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGVCL4CP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxFkguekJskLovvtbVdGtO1a0D7NN52v8ZOSzheXodAAiEAz8qnC%2FYyetDqHXzZex7hbGinejRb1f%2Bfp4NohXciZfcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDP1M%2F%2F%2BzFxUF6M8lBircA50l4TAjTH%2FjPgl%2FrBWP92sxn0bIN1BDCVApMaVWfpgyVqgMOyKV9dfk8OfJdLu%2BGP1ebHxp5JOXUgpSRpxIMAh3ttoYCWJtXDhApwcyhMTXb0u74xMm9ju6nW%2BB4dJxMUbeH2%2BFRvK9nvUKi66NPAZ5GNxGlJvGQNWh9T2OkixKyR%2F4b7wb%2FNuPlBPiFP6uQiSHCHVKSyX96e%2Bwb%2BiYK%2FofWbD8U3I07WnDpU8hivkSpPnZA2h5txBk7YOXIFjBMbkIFuEbMs9F7uS9%2FoBZHclFz3v%2BhiVX9qBnmYMFFGbu3TgfFOazA%2F%2Fx78wdkZsuZt23h1KGsLh3M%2F%2BBe9JPtn9zX4KvI9CRxpnrMMfV04uaBL%2BS6zS0T4RRAO3s9GicFr0rprA%2FglDpybxpsj%2F0qB5u9ELHho5pFW5S52ebIrk9L6pUTVccVCDszXsP7M7JuU68Ff%2BKNrNvqG4PiQSOOwQ2d1JmYYSCmBUZ6OrTowOhNw%2FyAH4IrgSTD789CxmcAmyesCpbUgxl1Piv5xg1w2QtxqrVXVuyeiWWlkmvFoGUWaw0BOlTkl99WGn4X4qAuO1t5r6fSEnYmCmonEH1Dp88dUg6vSfVR7Im8I7j%2FwEI6QAgcNvv5ToRxUrZMNrZvsQGOqUB6BXHYOjMPkrlNyqM2G2tjGX4XmkfOEHkz9dyuRWpN%2FFEgGHY%2FShZB5NhLVLd4%2Bg%2FIdv8GGelsBHzfmo6WTkTeAzSFEL%2BkZwV4g9QN9nPMpk6C98iJdZ9pC642L9BjOnelrsbv6UrnoQU%2Fb1cfgqY5rBNFfsAlZqIX6WYRE5hZFXxS0ADVAhuV4BHc7vrB4HCbA0UmhGwZifwXV2BIUrC585gk%2Bgn&X-Amz-Signature=55911c6eeadb7125ded75c4f67e6f001450906fab4335a674d1768b9a60a9efb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGVCL4CP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxFkguekJskLovvtbVdGtO1a0D7NN52v8ZOSzheXodAAiEAz8qnC%2FYyetDqHXzZex7hbGinejRb1f%2Bfp4NohXciZfcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDP1M%2F%2F%2BzFxUF6M8lBircA50l4TAjTH%2FjPgl%2FrBWP92sxn0bIN1BDCVApMaVWfpgyVqgMOyKV9dfk8OfJdLu%2BGP1ebHxp5JOXUgpSRpxIMAh3ttoYCWJtXDhApwcyhMTXb0u74xMm9ju6nW%2BB4dJxMUbeH2%2BFRvK9nvUKi66NPAZ5GNxGlJvGQNWh9T2OkixKyR%2F4b7wb%2FNuPlBPiFP6uQiSHCHVKSyX96e%2Bwb%2BiYK%2FofWbD8U3I07WnDpU8hivkSpPnZA2h5txBk7YOXIFjBMbkIFuEbMs9F7uS9%2FoBZHclFz3v%2BhiVX9qBnmYMFFGbu3TgfFOazA%2F%2Fx78wdkZsuZt23h1KGsLh3M%2F%2BBe9JPtn9zX4KvI9CRxpnrMMfV04uaBL%2BS6zS0T4RRAO3s9GicFr0rprA%2FglDpybxpsj%2F0qB5u9ELHho5pFW5S52ebIrk9L6pUTVccVCDszXsP7M7JuU68Ff%2BKNrNvqG4PiQSOOwQ2d1JmYYSCmBUZ6OrTowOhNw%2FyAH4IrgSTD789CxmcAmyesCpbUgxl1Piv5xg1w2QtxqrVXVuyeiWWlkmvFoGUWaw0BOlTkl99WGn4X4qAuO1t5r6fSEnYmCmonEH1Dp88dUg6vSfVR7Im8I7j%2FwEI6QAgcNvv5ToRxUrZMNrZvsQGOqUB6BXHYOjMPkrlNyqM2G2tjGX4XmkfOEHkz9dyuRWpN%2FFEgGHY%2FShZB5NhLVLd4%2Bg%2FIdv8GGelsBHzfmo6WTkTeAzSFEL%2BkZwV4g9QN9nPMpk6C98iJdZ9pC642L9BjOnelrsbv6UrnoQU%2Fb1cfgqY5rBNFfsAlZqIX6WYRE5hZFXxS0ADVAhuV4BHc7vrB4HCbA0UmhGwZifwXV2BIUrC585gk%2Bgn&X-Amz-Signature=5125b315c1c10ec9db28497df18efdf75abbb6a7ff23847a9a345b722363ca81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGVCL4CP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxFkguekJskLovvtbVdGtO1a0D7NN52v8ZOSzheXodAAiEAz8qnC%2FYyetDqHXzZex7hbGinejRb1f%2Bfp4NohXciZfcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDP1M%2F%2F%2BzFxUF6M8lBircA50l4TAjTH%2FjPgl%2FrBWP92sxn0bIN1BDCVApMaVWfpgyVqgMOyKV9dfk8OfJdLu%2BGP1ebHxp5JOXUgpSRpxIMAh3ttoYCWJtXDhApwcyhMTXb0u74xMm9ju6nW%2BB4dJxMUbeH2%2BFRvK9nvUKi66NPAZ5GNxGlJvGQNWh9T2OkixKyR%2F4b7wb%2FNuPlBPiFP6uQiSHCHVKSyX96e%2Bwb%2BiYK%2FofWbD8U3I07WnDpU8hivkSpPnZA2h5txBk7YOXIFjBMbkIFuEbMs9F7uS9%2FoBZHclFz3v%2BhiVX9qBnmYMFFGbu3TgfFOazA%2F%2Fx78wdkZsuZt23h1KGsLh3M%2F%2BBe9JPtn9zX4KvI9CRxpnrMMfV04uaBL%2BS6zS0T4RRAO3s9GicFr0rprA%2FglDpybxpsj%2F0qB5u9ELHho5pFW5S52ebIrk9L6pUTVccVCDszXsP7M7JuU68Ff%2BKNrNvqG4PiQSOOwQ2d1JmYYSCmBUZ6OrTowOhNw%2FyAH4IrgSTD789CxmcAmyesCpbUgxl1Piv5xg1w2QtxqrVXVuyeiWWlkmvFoGUWaw0BOlTkl99WGn4X4qAuO1t5r6fSEnYmCmonEH1Dp88dUg6vSfVR7Im8I7j%2FwEI6QAgcNvv5ToRxUrZMNrZvsQGOqUB6BXHYOjMPkrlNyqM2G2tjGX4XmkfOEHkz9dyuRWpN%2FFEgGHY%2FShZB5NhLVLd4%2Bg%2FIdv8GGelsBHzfmo6WTkTeAzSFEL%2BkZwV4g9QN9nPMpk6C98iJdZ9pC642L9BjOnelrsbv6UrnoQU%2Fb1cfgqY5rBNFfsAlZqIX6WYRE5hZFXxS0ADVAhuV4BHc7vrB4HCbA0UmhGwZifwXV2BIUrC585gk%2Bgn&X-Amz-Signature=225afba5a814293da4e573da9e3551bbb5e205f69d03702714cf67273adb566b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGVCL4CP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxFkguekJskLovvtbVdGtO1a0D7NN52v8ZOSzheXodAAiEAz8qnC%2FYyetDqHXzZex7hbGinejRb1f%2Bfp4NohXciZfcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDP1M%2F%2F%2BzFxUF6M8lBircA50l4TAjTH%2FjPgl%2FrBWP92sxn0bIN1BDCVApMaVWfpgyVqgMOyKV9dfk8OfJdLu%2BGP1ebHxp5JOXUgpSRpxIMAh3ttoYCWJtXDhApwcyhMTXb0u74xMm9ju6nW%2BB4dJxMUbeH2%2BFRvK9nvUKi66NPAZ5GNxGlJvGQNWh9T2OkixKyR%2F4b7wb%2FNuPlBPiFP6uQiSHCHVKSyX96e%2Bwb%2BiYK%2FofWbD8U3I07WnDpU8hivkSpPnZA2h5txBk7YOXIFjBMbkIFuEbMs9F7uS9%2FoBZHclFz3v%2BhiVX9qBnmYMFFGbu3TgfFOazA%2F%2Fx78wdkZsuZt23h1KGsLh3M%2F%2BBe9JPtn9zX4KvI9CRxpnrMMfV04uaBL%2BS6zS0T4RRAO3s9GicFr0rprA%2FglDpybxpsj%2F0qB5u9ELHho5pFW5S52ebIrk9L6pUTVccVCDszXsP7M7JuU68Ff%2BKNrNvqG4PiQSOOwQ2d1JmYYSCmBUZ6OrTowOhNw%2FyAH4IrgSTD789CxmcAmyesCpbUgxl1Piv5xg1w2QtxqrVXVuyeiWWlkmvFoGUWaw0BOlTkl99WGn4X4qAuO1t5r6fSEnYmCmonEH1Dp88dUg6vSfVR7Im8I7j%2FwEI6QAgcNvv5ToRxUrZMNrZvsQGOqUB6BXHYOjMPkrlNyqM2G2tjGX4XmkfOEHkz9dyuRWpN%2FFEgGHY%2FShZB5NhLVLd4%2Bg%2FIdv8GGelsBHzfmo6WTkTeAzSFEL%2BkZwV4g9QN9nPMpk6C98iJdZ9pC642L9BjOnelrsbv6UrnoQU%2Fb1cfgqY5rBNFfsAlZqIX6WYRE5hZFXxS0ADVAhuV4BHc7vrB4HCbA0UmhGwZifwXV2BIUrC585gk%2Bgn&X-Amz-Signature=419c3b64ea7ef54ee43fa3eb0f4f86b01a1302c9a86ee87c722907e33f04b90f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGVCL4CP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxFkguekJskLovvtbVdGtO1a0D7NN52v8ZOSzheXodAAiEAz8qnC%2FYyetDqHXzZex7hbGinejRb1f%2Bfp4NohXciZfcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDP1M%2F%2F%2BzFxUF6M8lBircA50l4TAjTH%2FjPgl%2FrBWP92sxn0bIN1BDCVApMaVWfpgyVqgMOyKV9dfk8OfJdLu%2BGP1ebHxp5JOXUgpSRpxIMAh3ttoYCWJtXDhApwcyhMTXb0u74xMm9ju6nW%2BB4dJxMUbeH2%2BFRvK9nvUKi66NPAZ5GNxGlJvGQNWh9T2OkixKyR%2F4b7wb%2FNuPlBPiFP6uQiSHCHVKSyX96e%2Bwb%2BiYK%2FofWbD8U3I07WnDpU8hivkSpPnZA2h5txBk7YOXIFjBMbkIFuEbMs9F7uS9%2FoBZHclFz3v%2BhiVX9qBnmYMFFGbu3TgfFOazA%2F%2Fx78wdkZsuZt23h1KGsLh3M%2F%2BBe9JPtn9zX4KvI9CRxpnrMMfV04uaBL%2BS6zS0T4RRAO3s9GicFr0rprA%2FglDpybxpsj%2F0qB5u9ELHho5pFW5S52ebIrk9L6pUTVccVCDszXsP7M7JuU68Ff%2BKNrNvqG4PiQSOOwQ2d1JmYYSCmBUZ6OrTowOhNw%2FyAH4IrgSTD789CxmcAmyesCpbUgxl1Piv5xg1w2QtxqrVXVuyeiWWlkmvFoGUWaw0BOlTkl99WGn4X4qAuO1t5r6fSEnYmCmonEH1Dp88dUg6vSfVR7Im8I7j%2FwEI6QAgcNvv5ToRxUrZMNrZvsQGOqUB6BXHYOjMPkrlNyqM2G2tjGX4XmkfOEHkz9dyuRWpN%2FFEgGHY%2FShZB5NhLVLd4%2Bg%2FIdv8GGelsBHzfmo6WTkTeAzSFEL%2BkZwV4g9QN9nPMpk6C98iJdZ9pC642L9BjOnelrsbv6UrnoQU%2Fb1cfgqY5rBNFfsAlZqIX6WYRE5hZFXxS0ADVAhuV4BHc7vrB4HCbA0UmhGwZifwXV2BIUrC585gk%2Bgn&X-Amz-Signature=e06f197e7144b784fc40cbbfbd77cabd484869e1d975508cc278c321c703cc38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGVCL4CP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxFkguekJskLovvtbVdGtO1a0D7NN52v8ZOSzheXodAAiEAz8qnC%2FYyetDqHXzZex7hbGinejRb1f%2Bfp4NohXciZfcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDP1M%2F%2F%2BzFxUF6M8lBircA50l4TAjTH%2FjPgl%2FrBWP92sxn0bIN1BDCVApMaVWfpgyVqgMOyKV9dfk8OfJdLu%2BGP1ebHxp5JOXUgpSRpxIMAh3ttoYCWJtXDhApwcyhMTXb0u74xMm9ju6nW%2BB4dJxMUbeH2%2BFRvK9nvUKi66NPAZ5GNxGlJvGQNWh9T2OkixKyR%2F4b7wb%2FNuPlBPiFP6uQiSHCHVKSyX96e%2Bwb%2BiYK%2FofWbD8U3I07WnDpU8hivkSpPnZA2h5txBk7YOXIFjBMbkIFuEbMs9F7uS9%2FoBZHclFz3v%2BhiVX9qBnmYMFFGbu3TgfFOazA%2F%2Fx78wdkZsuZt23h1KGsLh3M%2F%2BBe9JPtn9zX4KvI9CRxpnrMMfV04uaBL%2BS6zS0T4RRAO3s9GicFr0rprA%2FglDpybxpsj%2F0qB5u9ELHho5pFW5S52ebIrk9L6pUTVccVCDszXsP7M7JuU68Ff%2BKNrNvqG4PiQSOOwQ2d1JmYYSCmBUZ6OrTowOhNw%2FyAH4IrgSTD789CxmcAmyesCpbUgxl1Piv5xg1w2QtxqrVXVuyeiWWlkmvFoGUWaw0BOlTkl99WGn4X4qAuO1t5r6fSEnYmCmonEH1Dp88dUg6vSfVR7Im8I7j%2FwEI6QAgcNvv5ToRxUrZMNrZvsQGOqUB6BXHYOjMPkrlNyqM2G2tjGX4XmkfOEHkz9dyuRWpN%2FFEgGHY%2FShZB5NhLVLd4%2Bg%2FIdv8GGelsBHzfmo6WTkTeAzSFEL%2BkZwV4g9QN9nPMpk6C98iJdZ9pC642L9BjOnelrsbv6UrnoQU%2Fb1cfgqY5rBNFfsAlZqIX6WYRE5hZFXxS0ADVAhuV4BHc7vrB4HCbA0UmhGwZifwXV2BIUrC585gk%2Bgn&X-Amz-Signature=476c01655a54ee3bed2c5d5e29e5bf3a66e7346c6106435ff5b621015d17eb12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
