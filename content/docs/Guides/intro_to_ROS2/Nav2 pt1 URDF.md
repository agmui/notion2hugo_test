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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IKPB6E2%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCT1FgCZIZ2xBo2T7xJYQFXzReFFBc6Mj5ewFqnw7jvbwIhAK%2FHJBFMmPH2AGFc%2BW2M%2BnQNulEgeRlZ9XI1Y8EuHFTCKv8DCAoQABoMNjM3NDIzMTgzODA1IgyHNhZlQkiGQ%2BJedeMq3APFNg42AkwtScCrrFCDlP6nRcbnVtDFCY%2BXQiyf09s58kIt%2FruifqnW4bjMvWm2KoDhhwC89%2B%2Fc75mhKJGZGmWDbE13IkwpoeSSWz4%2FuAA%2B60YlfLCnDUB1Y6h0C4J8ob1U200ha5U0XfvfRvX1%2B9eoS8eZi3pZlcAC5P46V44vPknFXwirB7GKVJTwb84D8%2BgnRbDmPHv81bRK4bLnsPLO6L1hIYhRWDuyCxbfAb2YSYIWBWFVMKf%2BPLbkyMbrvrzB8J6d17R9RI2SCWBk3QCOaNV76JjBGce1rzfShsiRINhaJiv4Nx1PkETjcrRol52b7eRaNxn7auKPpm2MRJ%2Ff6gENtNtsy0p9jcR558uCDPuN%2BxguoMi5SAOhLtHRjlRfyBhfajI8nnxo7xvfCrBn3pngVREzD17dDdXEdIlu2bVkpz1GJoOizGaoBQBzOJ93v06vrFzOr5o5Zwk4fqlwSMVppar%2BvPV7KZnf4F6%2Ft1D9xY5ziak77XEhiQ%2FWF5OaYjdmnyB8fjqKCnCMGfFLF%2FppezvNN%2B8sC3ysu%2B13a9k9d8rCYOidiJByKMzUc3sDQGEhDqeDdeDhfHDHeSYOs39nPZB9DzTTMWZP4biQ2hPtFd49i%2B8U938gQjD1nLPNBjqkAa4diNtI5jA7sBcFSv3z1HRt6KfhjQkJilaumx0%2BiTus7SRJRIO4n3nYy7dlkILIcIGzEmpcYK0Kn52uHMqavFZCLWcye9%2BMnmEx%2B0oKZFEkmosxBAcko7dBHQLxYMiyDOvdaOIktf9zbXD5zQK%2FaouGP01NKtVYxqcXHlAuByulhS%2BgpEfYPPnIoMSUW8tYbbtYiwJkA%2FvFgdMvsAw91PTO%2FoQn&X-Amz-Signature=e61150f7f4904b3cda6de06a4d8359dc21c9372d11bc24b44f5d1a1d4bc3a8f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IKPB6E2%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCT1FgCZIZ2xBo2T7xJYQFXzReFFBc6Mj5ewFqnw7jvbwIhAK%2FHJBFMmPH2AGFc%2BW2M%2BnQNulEgeRlZ9XI1Y8EuHFTCKv8DCAoQABoMNjM3NDIzMTgzODA1IgyHNhZlQkiGQ%2BJedeMq3APFNg42AkwtScCrrFCDlP6nRcbnVtDFCY%2BXQiyf09s58kIt%2FruifqnW4bjMvWm2KoDhhwC89%2B%2Fc75mhKJGZGmWDbE13IkwpoeSSWz4%2FuAA%2B60YlfLCnDUB1Y6h0C4J8ob1U200ha5U0XfvfRvX1%2B9eoS8eZi3pZlcAC5P46V44vPknFXwirB7GKVJTwb84D8%2BgnRbDmPHv81bRK4bLnsPLO6L1hIYhRWDuyCxbfAb2YSYIWBWFVMKf%2BPLbkyMbrvrzB8J6d17R9RI2SCWBk3QCOaNV76JjBGce1rzfShsiRINhaJiv4Nx1PkETjcrRol52b7eRaNxn7auKPpm2MRJ%2Ff6gENtNtsy0p9jcR558uCDPuN%2BxguoMi5SAOhLtHRjlRfyBhfajI8nnxo7xvfCrBn3pngVREzD17dDdXEdIlu2bVkpz1GJoOizGaoBQBzOJ93v06vrFzOr5o5Zwk4fqlwSMVppar%2BvPV7KZnf4F6%2Ft1D9xY5ziak77XEhiQ%2FWF5OaYjdmnyB8fjqKCnCMGfFLF%2FppezvNN%2B8sC3ysu%2B13a9k9d8rCYOidiJByKMzUc3sDQGEhDqeDdeDhfHDHeSYOs39nPZB9DzTTMWZP4biQ2hPtFd49i%2B8U938gQjD1nLPNBjqkAa4diNtI5jA7sBcFSv3z1HRt6KfhjQkJilaumx0%2BiTus7SRJRIO4n3nYy7dlkILIcIGzEmpcYK0Kn52uHMqavFZCLWcye9%2BMnmEx%2B0oKZFEkmosxBAcko7dBHQLxYMiyDOvdaOIktf9zbXD5zQK%2FaouGP01NKtVYxqcXHlAuByulhS%2BgpEfYPPnIoMSUW8tYbbtYiwJkA%2FvFgdMvsAw91PTO%2FoQn&X-Amz-Signature=7153110060e7e4a8c307b1d37576c70e57d27cd6ea990b0cc03e916478f5ae02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IKPB6E2%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCT1FgCZIZ2xBo2T7xJYQFXzReFFBc6Mj5ewFqnw7jvbwIhAK%2FHJBFMmPH2AGFc%2BW2M%2BnQNulEgeRlZ9XI1Y8EuHFTCKv8DCAoQABoMNjM3NDIzMTgzODA1IgyHNhZlQkiGQ%2BJedeMq3APFNg42AkwtScCrrFCDlP6nRcbnVtDFCY%2BXQiyf09s58kIt%2FruifqnW4bjMvWm2KoDhhwC89%2B%2Fc75mhKJGZGmWDbE13IkwpoeSSWz4%2FuAA%2B60YlfLCnDUB1Y6h0C4J8ob1U200ha5U0XfvfRvX1%2B9eoS8eZi3pZlcAC5P46V44vPknFXwirB7GKVJTwb84D8%2BgnRbDmPHv81bRK4bLnsPLO6L1hIYhRWDuyCxbfAb2YSYIWBWFVMKf%2BPLbkyMbrvrzB8J6d17R9RI2SCWBk3QCOaNV76JjBGce1rzfShsiRINhaJiv4Nx1PkETjcrRol52b7eRaNxn7auKPpm2MRJ%2Ff6gENtNtsy0p9jcR558uCDPuN%2BxguoMi5SAOhLtHRjlRfyBhfajI8nnxo7xvfCrBn3pngVREzD17dDdXEdIlu2bVkpz1GJoOizGaoBQBzOJ93v06vrFzOr5o5Zwk4fqlwSMVppar%2BvPV7KZnf4F6%2Ft1D9xY5ziak77XEhiQ%2FWF5OaYjdmnyB8fjqKCnCMGfFLF%2FppezvNN%2B8sC3ysu%2B13a9k9d8rCYOidiJByKMzUc3sDQGEhDqeDdeDhfHDHeSYOs39nPZB9DzTTMWZP4biQ2hPtFd49i%2B8U938gQjD1nLPNBjqkAa4diNtI5jA7sBcFSv3z1HRt6KfhjQkJilaumx0%2BiTus7SRJRIO4n3nYy7dlkILIcIGzEmpcYK0Kn52uHMqavFZCLWcye9%2BMnmEx%2B0oKZFEkmosxBAcko7dBHQLxYMiyDOvdaOIktf9zbXD5zQK%2FaouGP01NKtVYxqcXHlAuByulhS%2BgpEfYPPnIoMSUW8tYbbtYiwJkA%2FvFgdMvsAw91PTO%2FoQn&X-Amz-Signature=450f0f4d0822ecde35e8eb2419ab56cc08c28296b1cc449373c84189f9943dad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IKPB6E2%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCT1FgCZIZ2xBo2T7xJYQFXzReFFBc6Mj5ewFqnw7jvbwIhAK%2FHJBFMmPH2AGFc%2BW2M%2BnQNulEgeRlZ9XI1Y8EuHFTCKv8DCAoQABoMNjM3NDIzMTgzODA1IgyHNhZlQkiGQ%2BJedeMq3APFNg42AkwtScCrrFCDlP6nRcbnVtDFCY%2BXQiyf09s58kIt%2FruifqnW4bjMvWm2KoDhhwC89%2B%2Fc75mhKJGZGmWDbE13IkwpoeSSWz4%2FuAA%2B60YlfLCnDUB1Y6h0C4J8ob1U200ha5U0XfvfRvX1%2B9eoS8eZi3pZlcAC5P46V44vPknFXwirB7GKVJTwb84D8%2BgnRbDmPHv81bRK4bLnsPLO6L1hIYhRWDuyCxbfAb2YSYIWBWFVMKf%2BPLbkyMbrvrzB8J6d17R9RI2SCWBk3QCOaNV76JjBGce1rzfShsiRINhaJiv4Nx1PkETjcrRol52b7eRaNxn7auKPpm2MRJ%2Ff6gENtNtsy0p9jcR558uCDPuN%2BxguoMi5SAOhLtHRjlRfyBhfajI8nnxo7xvfCrBn3pngVREzD17dDdXEdIlu2bVkpz1GJoOizGaoBQBzOJ93v06vrFzOr5o5Zwk4fqlwSMVppar%2BvPV7KZnf4F6%2Ft1D9xY5ziak77XEhiQ%2FWF5OaYjdmnyB8fjqKCnCMGfFLF%2FppezvNN%2B8sC3ysu%2B13a9k9d8rCYOidiJByKMzUc3sDQGEhDqeDdeDhfHDHeSYOs39nPZB9DzTTMWZP4biQ2hPtFd49i%2B8U938gQjD1nLPNBjqkAa4diNtI5jA7sBcFSv3z1HRt6KfhjQkJilaumx0%2BiTus7SRJRIO4n3nYy7dlkILIcIGzEmpcYK0Kn52uHMqavFZCLWcye9%2BMnmEx%2B0oKZFEkmosxBAcko7dBHQLxYMiyDOvdaOIktf9zbXD5zQK%2FaouGP01NKtVYxqcXHlAuByulhS%2BgpEfYPPnIoMSUW8tYbbtYiwJkA%2FvFgdMvsAw91PTO%2FoQn&X-Amz-Signature=7d49e6cd47928414cc4434cff2ceb00b25e4d86297663d3a0d308cef71cbef31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IKPB6E2%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCT1FgCZIZ2xBo2T7xJYQFXzReFFBc6Mj5ewFqnw7jvbwIhAK%2FHJBFMmPH2AGFc%2BW2M%2BnQNulEgeRlZ9XI1Y8EuHFTCKv8DCAoQABoMNjM3NDIzMTgzODA1IgyHNhZlQkiGQ%2BJedeMq3APFNg42AkwtScCrrFCDlP6nRcbnVtDFCY%2BXQiyf09s58kIt%2FruifqnW4bjMvWm2KoDhhwC89%2B%2Fc75mhKJGZGmWDbE13IkwpoeSSWz4%2FuAA%2B60YlfLCnDUB1Y6h0C4J8ob1U200ha5U0XfvfRvX1%2B9eoS8eZi3pZlcAC5P46V44vPknFXwirB7GKVJTwb84D8%2BgnRbDmPHv81bRK4bLnsPLO6L1hIYhRWDuyCxbfAb2YSYIWBWFVMKf%2BPLbkyMbrvrzB8J6d17R9RI2SCWBk3QCOaNV76JjBGce1rzfShsiRINhaJiv4Nx1PkETjcrRol52b7eRaNxn7auKPpm2MRJ%2Ff6gENtNtsy0p9jcR558uCDPuN%2BxguoMi5SAOhLtHRjlRfyBhfajI8nnxo7xvfCrBn3pngVREzD17dDdXEdIlu2bVkpz1GJoOizGaoBQBzOJ93v06vrFzOr5o5Zwk4fqlwSMVppar%2BvPV7KZnf4F6%2Ft1D9xY5ziak77XEhiQ%2FWF5OaYjdmnyB8fjqKCnCMGfFLF%2FppezvNN%2B8sC3ysu%2B13a9k9d8rCYOidiJByKMzUc3sDQGEhDqeDdeDhfHDHeSYOs39nPZB9DzTTMWZP4biQ2hPtFd49i%2B8U938gQjD1nLPNBjqkAa4diNtI5jA7sBcFSv3z1HRt6KfhjQkJilaumx0%2BiTus7SRJRIO4n3nYy7dlkILIcIGzEmpcYK0Kn52uHMqavFZCLWcye9%2BMnmEx%2B0oKZFEkmosxBAcko7dBHQLxYMiyDOvdaOIktf9zbXD5zQK%2FaouGP01NKtVYxqcXHlAuByulhS%2BgpEfYPPnIoMSUW8tYbbtYiwJkA%2FvFgdMvsAw91PTO%2FoQn&X-Amz-Signature=44971133702755dd7f4de672bb37ae4b08af2b8da6e170de4654ff5cb6b1a8fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IKPB6E2%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCT1FgCZIZ2xBo2T7xJYQFXzReFFBc6Mj5ewFqnw7jvbwIhAK%2FHJBFMmPH2AGFc%2BW2M%2BnQNulEgeRlZ9XI1Y8EuHFTCKv8DCAoQABoMNjM3NDIzMTgzODA1IgyHNhZlQkiGQ%2BJedeMq3APFNg42AkwtScCrrFCDlP6nRcbnVtDFCY%2BXQiyf09s58kIt%2FruifqnW4bjMvWm2KoDhhwC89%2B%2Fc75mhKJGZGmWDbE13IkwpoeSSWz4%2FuAA%2B60YlfLCnDUB1Y6h0C4J8ob1U200ha5U0XfvfRvX1%2B9eoS8eZi3pZlcAC5P46V44vPknFXwirB7GKVJTwb84D8%2BgnRbDmPHv81bRK4bLnsPLO6L1hIYhRWDuyCxbfAb2YSYIWBWFVMKf%2BPLbkyMbrvrzB8J6d17R9RI2SCWBk3QCOaNV76JjBGce1rzfShsiRINhaJiv4Nx1PkETjcrRol52b7eRaNxn7auKPpm2MRJ%2Ff6gENtNtsy0p9jcR558uCDPuN%2BxguoMi5SAOhLtHRjlRfyBhfajI8nnxo7xvfCrBn3pngVREzD17dDdXEdIlu2bVkpz1GJoOizGaoBQBzOJ93v06vrFzOr5o5Zwk4fqlwSMVppar%2BvPV7KZnf4F6%2Ft1D9xY5ziak77XEhiQ%2FWF5OaYjdmnyB8fjqKCnCMGfFLF%2FppezvNN%2B8sC3ysu%2B13a9k9d8rCYOidiJByKMzUc3sDQGEhDqeDdeDhfHDHeSYOs39nPZB9DzTTMWZP4biQ2hPtFd49i%2B8U938gQjD1nLPNBjqkAa4diNtI5jA7sBcFSv3z1HRt6KfhjQkJilaumx0%2BiTus7SRJRIO4n3nYy7dlkILIcIGzEmpcYK0Kn52uHMqavFZCLWcye9%2BMnmEx%2B0oKZFEkmosxBAcko7dBHQLxYMiyDOvdaOIktf9zbXD5zQK%2FaouGP01NKtVYxqcXHlAuByulhS%2BgpEfYPPnIoMSUW8tYbbtYiwJkA%2FvFgdMvsAw91PTO%2FoQn&X-Amz-Signature=d344e18c6978d2b569a7caf1e30885e9e4f9af98d3dcb83b7059bb0e47ca1c84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IKPB6E2%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCT1FgCZIZ2xBo2T7xJYQFXzReFFBc6Mj5ewFqnw7jvbwIhAK%2FHJBFMmPH2AGFc%2BW2M%2BnQNulEgeRlZ9XI1Y8EuHFTCKv8DCAoQABoMNjM3NDIzMTgzODA1IgyHNhZlQkiGQ%2BJedeMq3APFNg42AkwtScCrrFCDlP6nRcbnVtDFCY%2BXQiyf09s58kIt%2FruifqnW4bjMvWm2KoDhhwC89%2B%2Fc75mhKJGZGmWDbE13IkwpoeSSWz4%2FuAA%2B60YlfLCnDUB1Y6h0C4J8ob1U200ha5U0XfvfRvX1%2B9eoS8eZi3pZlcAC5P46V44vPknFXwirB7GKVJTwb84D8%2BgnRbDmPHv81bRK4bLnsPLO6L1hIYhRWDuyCxbfAb2YSYIWBWFVMKf%2BPLbkyMbrvrzB8J6d17R9RI2SCWBk3QCOaNV76JjBGce1rzfShsiRINhaJiv4Nx1PkETjcrRol52b7eRaNxn7auKPpm2MRJ%2Ff6gENtNtsy0p9jcR558uCDPuN%2BxguoMi5SAOhLtHRjlRfyBhfajI8nnxo7xvfCrBn3pngVREzD17dDdXEdIlu2bVkpz1GJoOizGaoBQBzOJ93v06vrFzOr5o5Zwk4fqlwSMVppar%2BvPV7KZnf4F6%2Ft1D9xY5ziak77XEhiQ%2FWF5OaYjdmnyB8fjqKCnCMGfFLF%2FppezvNN%2B8sC3ysu%2B13a9k9d8rCYOidiJByKMzUc3sDQGEhDqeDdeDhfHDHeSYOs39nPZB9DzTTMWZP4biQ2hPtFd49i%2B8U938gQjD1nLPNBjqkAa4diNtI5jA7sBcFSv3z1HRt6KfhjQkJilaumx0%2BiTus7SRJRIO4n3nYy7dlkILIcIGzEmpcYK0Kn52uHMqavFZCLWcye9%2BMnmEx%2B0oKZFEkmosxBAcko7dBHQLxYMiyDOvdaOIktf9zbXD5zQK%2FaouGP01NKtVYxqcXHlAuByulhS%2BgpEfYPPnIoMSUW8tYbbtYiwJkA%2FvFgdMvsAw91PTO%2FoQn&X-Amz-Signature=6d47787a6fe4a040e8bd50db18f2d2ab6cf57c86f6cc1a00fc44b432e207e09a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IKPB6E2%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCT1FgCZIZ2xBo2T7xJYQFXzReFFBc6Mj5ewFqnw7jvbwIhAK%2FHJBFMmPH2AGFc%2BW2M%2BnQNulEgeRlZ9XI1Y8EuHFTCKv8DCAoQABoMNjM3NDIzMTgzODA1IgyHNhZlQkiGQ%2BJedeMq3APFNg42AkwtScCrrFCDlP6nRcbnVtDFCY%2BXQiyf09s58kIt%2FruifqnW4bjMvWm2KoDhhwC89%2B%2Fc75mhKJGZGmWDbE13IkwpoeSSWz4%2FuAA%2B60YlfLCnDUB1Y6h0C4J8ob1U200ha5U0XfvfRvX1%2B9eoS8eZi3pZlcAC5P46V44vPknFXwirB7GKVJTwb84D8%2BgnRbDmPHv81bRK4bLnsPLO6L1hIYhRWDuyCxbfAb2YSYIWBWFVMKf%2BPLbkyMbrvrzB8J6d17R9RI2SCWBk3QCOaNV76JjBGce1rzfShsiRINhaJiv4Nx1PkETjcrRol52b7eRaNxn7auKPpm2MRJ%2Ff6gENtNtsy0p9jcR558uCDPuN%2BxguoMi5SAOhLtHRjlRfyBhfajI8nnxo7xvfCrBn3pngVREzD17dDdXEdIlu2bVkpz1GJoOizGaoBQBzOJ93v06vrFzOr5o5Zwk4fqlwSMVppar%2BvPV7KZnf4F6%2Ft1D9xY5ziak77XEhiQ%2FWF5OaYjdmnyB8fjqKCnCMGfFLF%2FppezvNN%2B8sC3ysu%2B13a9k9d8rCYOidiJByKMzUc3sDQGEhDqeDdeDhfHDHeSYOs39nPZB9DzTTMWZP4biQ2hPtFd49i%2B8U938gQjD1nLPNBjqkAa4diNtI5jA7sBcFSv3z1HRt6KfhjQkJilaumx0%2BiTus7SRJRIO4n3nYy7dlkILIcIGzEmpcYK0Kn52uHMqavFZCLWcye9%2BMnmEx%2B0oKZFEkmosxBAcko7dBHQLxYMiyDOvdaOIktf9zbXD5zQK%2FaouGP01NKtVYxqcXHlAuByulhS%2BgpEfYPPnIoMSUW8tYbbtYiwJkA%2FvFgdMvsAw91PTO%2FoQn&X-Amz-Signature=151fd6be1bcd3eab312e341555505fd6792418f8fd6d486292b6af0af893fa22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IKPB6E2%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCT1FgCZIZ2xBo2T7xJYQFXzReFFBc6Mj5ewFqnw7jvbwIhAK%2FHJBFMmPH2AGFc%2BW2M%2BnQNulEgeRlZ9XI1Y8EuHFTCKv8DCAoQABoMNjM3NDIzMTgzODA1IgyHNhZlQkiGQ%2BJedeMq3APFNg42AkwtScCrrFCDlP6nRcbnVtDFCY%2BXQiyf09s58kIt%2FruifqnW4bjMvWm2KoDhhwC89%2B%2Fc75mhKJGZGmWDbE13IkwpoeSSWz4%2FuAA%2B60YlfLCnDUB1Y6h0C4J8ob1U200ha5U0XfvfRvX1%2B9eoS8eZi3pZlcAC5P46V44vPknFXwirB7GKVJTwb84D8%2BgnRbDmPHv81bRK4bLnsPLO6L1hIYhRWDuyCxbfAb2YSYIWBWFVMKf%2BPLbkyMbrvrzB8J6d17R9RI2SCWBk3QCOaNV76JjBGce1rzfShsiRINhaJiv4Nx1PkETjcrRol52b7eRaNxn7auKPpm2MRJ%2Ff6gENtNtsy0p9jcR558uCDPuN%2BxguoMi5SAOhLtHRjlRfyBhfajI8nnxo7xvfCrBn3pngVREzD17dDdXEdIlu2bVkpz1GJoOizGaoBQBzOJ93v06vrFzOr5o5Zwk4fqlwSMVppar%2BvPV7KZnf4F6%2Ft1D9xY5ziak77XEhiQ%2FWF5OaYjdmnyB8fjqKCnCMGfFLF%2FppezvNN%2B8sC3ysu%2B13a9k9d8rCYOidiJByKMzUc3sDQGEhDqeDdeDhfHDHeSYOs39nPZB9DzTTMWZP4biQ2hPtFd49i%2B8U938gQjD1nLPNBjqkAa4diNtI5jA7sBcFSv3z1HRt6KfhjQkJilaumx0%2BiTus7SRJRIO4n3nYy7dlkILIcIGzEmpcYK0Kn52uHMqavFZCLWcye9%2BMnmEx%2B0oKZFEkmosxBAcko7dBHQLxYMiyDOvdaOIktf9zbXD5zQK%2FaouGP01NKtVYxqcXHlAuByulhS%2BgpEfYPPnIoMSUW8tYbbtYiwJkA%2FvFgdMvsAw91PTO%2FoQn&X-Amz-Signature=d412047d9862c5c8eea1586a89b29df36180d08941562cabca9388a03444cb21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IKPB6E2%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCT1FgCZIZ2xBo2T7xJYQFXzReFFBc6Mj5ewFqnw7jvbwIhAK%2FHJBFMmPH2AGFc%2BW2M%2BnQNulEgeRlZ9XI1Y8EuHFTCKv8DCAoQABoMNjM3NDIzMTgzODA1IgyHNhZlQkiGQ%2BJedeMq3APFNg42AkwtScCrrFCDlP6nRcbnVtDFCY%2BXQiyf09s58kIt%2FruifqnW4bjMvWm2KoDhhwC89%2B%2Fc75mhKJGZGmWDbE13IkwpoeSSWz4%2FuAA%2B60YlfLCnDUB1Y6h0C4J8ob1U200ha5U0XfvfRvX1%2B9eoS8eZi3pZlcAC5P46V44vPknFXwirB7GKVJTwb84D8%2BgnRbDmPHv81bRK4bLnsPLO6L1hIYhRWDuyCxbfAb2YSYIWBWFVMKf%2BPLbkyMbrvrzB8J6d17R9RI2SCWBk3QCOaNV76JjBGce1rzfShsiRINhaJiv4Nx1PkETjcrRol52b7eRaNxn7auKPpm2MRJ%2Ff6gENtNtsy0p9jcR558uCDPuN%2BxguoMi5SAOhLtHRjlRfyBhfajI8nnxo7xvfCrBn3pngVREzD17dDdXEdIlu2bVkpz1GJoOizGaoBQBzOJ93v06vrFzOr5o5Zwk4fqlwSMVppar%2BvPV7KZnf4F6%2Ft1D9xY5ziak77XEhiQ%2FWF5OaYjdmnyB8fjqKCnCMGfFLF%2FppezvNN%2B8sC3ysu%2B13a9k9d8rCYOidiJByKMzUc3sDQGEhDqeDdeDhfHDHeSYOs39nPZB9DzTTMWZP4biQ2hPtFd49i%2B8U938gQjD1nLPNBjqkAa4diNtI5jA7sBcFSv3z1HRt6KfhjQkJilaumx0%2BiTus7SRJRIO4n3nYy7dlkILIcIGzEmpcYK0Kn52uHMqavFZCLWcye9%2BMnmEx%2B0oKZFEkmosxBAcko7dBHQLxYMiyDOvdaOIktf9zbXD5zQK%2FaouGP01NKtVYxqcXHlAuByulhS%2BgpEfYPPnIoMSUW8tYbbtYiwJkA%2FvFgdMvsAw91PTO%2FoQn&X-Amz-Signature=63652964012389b5ef6ce2f905ba4718bc9952221911a517f763306e44cc4963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCVMXWMN%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T021017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIC39iPvrLnXF4xDjsOSMso4N8Lt16cQTgDdnagR8pZnxAiEAkjfenURRVd1cKaeS%2BsWP4QelkzPSkHABxARNlaR8JuUq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDHxtVK4DJHorGvXmgCrcA8CBcyDHHu%2FhUyOJcxrWv6rdt%2Bx%2FWVvxfGQZcQZvWOvwl8YlofmsdSRGC643W9sxdofbN0YgLEInyZI9z4bUHxpqdm7VYBSxWW9mxKnd5BXotKUy4Oag%2FtorzTeIq4OCOUBOXjGMrBxWuqgtkPkJqrwdbvgH8Z8hV7PJZiBe2ScQhvwA5w6B1PKenluZKxnAEYno9VFJS5ncbOmQ8DZaUV%2FTkveT404D8IXvuz7%2FN%2FV2YnfKxdLFYllcGkSriu3cdCnpAPVB06FEI0ZPonYmpt6jjPcX5NCSZidJWn3UwtAW7nX6xEGLE7f4i3D%2FqMF5mK2rQ%2FK2IDi2vBmVK%2FZf7id7FLrpY4h4YTmA8H3QXHxtAa7lKaUSmNjXHFdl7xbHcFnkx%2FLHkRFgPwM3EerOdyWTJPVUDW5%2FXgvDeOojJ5ahYMat%2Bn6WUpg84d0j%2Bc4s1qKI%2FRoK5Ztl0KAp9RDgs8nO2qiScc9KRhu1VVncbiE11d%2BkEojP2S%2B1rJSQ1%2BFj6TkCKm%2FFaDtrBq%2FouP%2BoYPA%2B5%2Fi3XJ6Hkv8WSkBWtBKQG8hftcEfa4jki%2FSRJXQZqg0LcQT8GctC%2FTBwq1Ian3JG%2F2rKlYwotlG9XzKO2%2FVnwTlVlAamWC9%2FlIjaMJ2ds80GOqUB6j%2FykLmBI6Lcbs%2BtvLUc%2BWfj6eJ5k8GCxtsAgvIsGTUmNq7HelBijALNhZgjaA12%2BycY0ORrtDRSSu7sv9VENqRxmpdDH6vxkfVD10bJdHUNA0WgL%2FvmvpMBVyMp4%2BbW3dlturXrKO0xi6LcG4TOQZF8ACttjJMIuxJCv6%2FXuJB0v221oq6D78%2BCxtcdag5T%2BsSOZr3tGHz0m6MhyOPSN0Axbc4x&X-Amz-Signature=5e815234bf05cdcef51f7177e3b07c7186eab7c06785260096fa45abc852bbc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TLJ72GW%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T021022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIEsvQ4rI2R6sVQjqc28rMCCi8sv31zqoQEdAkkUQzM%2FRAiBHdHVBd%2FeXACWz3Q3t1qlnDyDfni4%2B%2F2saOKjAx9mpqir%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIMNxcl3EaTww0FL1XMKtwD5ZL97ywFkTH531KX7DcQr%2FGyZ5xqvPxSPO1EA7GM4bj6x%2BjdQZLopDbX00HCsUx8JSgvGf9OMDgMzcFh9w99XjGbH%2FmB1N8lg4m5qJotoNkgWaYh0jcHaW2mFyPqBBl950yQhglbVFHMrF6Dsl9SAbbfcqtdH6S3puCERoOniYJZO7oMbs26U%2B%2BQLJX5KI0ZGil7Qs1Y8KFyBSEGKpLu2RqqXpWSvUUtqfv7F332d7mKuMZPJXieatnUXM2O94C2H8sMMsD03kdQhwcB30B6oWmkDBSdApe7C5xsKNrSNn4dYA0KG4N2FRGSL%2BhexlnMAX3W0%2F%2B3fkxItADngmV7%2FQ4xjYoMkgihYfxlojjOD0l%2B77U1GhpZ5WfLtnaLrL%2FFsRVHeeQB25QI5NpU9Mk0%2FHFcSDb0EHjKp1WwBQcDWQ3OCWjBjOBUwGz3ZfO8w0jYcM6fdCtcq9ix5MEQdEMVLyPwxnTvje9UA5OYFQHSd6KH2KzfVaMmqL3VHzg88tyo1wqUXVOIa%2FG8Vvvu5DAjD28GaV96YrIFdVK8JLix0DzMAMGhyixtYuR783yENbD%2FCWlwnNYJKdpewCxilzB2KuNtJWacQ%2FdrijGmoF%2FFpjmbtIailkfayrsgEAAwv52zzQY6pgEBg%2FbiOCnYUxuBHxXeqjNqo8bzrsgCeXO0XyACTyzk9BSuBDhNCP%2BHHue50uDoyKz4QSRI8BDUf4UzZHHIOVCYxSEwfjuUsd2wXw3Ov6DdEzUR7o%2Fvt%2BvRaBui%2FkesJu%2BcrnMwjsm2Ul6p3%2F%2BFZVdUi2rQrlzFIq7k6qfK3awjLbQipgLgkLQcL%2FfJEfcZwgKQwkcGccq4C3MJ2mdeig0mqP9Q4ocO&X-Amz-Signature=f1bb5b4df61ef159fc0955e820bc2611c59b37b1d6f1c3a78a6ba28145c484b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXLJFZH6%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T021024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCKeVDuKc2xmKOWaXl9yD1RfLJXoCycnN7LsaROkzDHUQIgLvqSVAuHeD5wA%2Fr9uKUlFuhZIF3%2B%2FIEcc5gLW5X%2FtuAq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDB6wDpAMVRqlJfxuByrcAwUMyRQCDA8Rl3Dhr7ZIcb788tQ%2Fg%2F5qvMtzt5xoAlKFTGryJ1EGdmoaF6yOyMOCfRDF%2Bnd%2F2q7Y5Hkckk1jVP%2FLmi7gUT%2FhUo609BbXG1ggce0IdeufN%2BREAbzgJ7raRxGWk1zlIPi7d1Hs1RBAZYrr%2BjzBfRrLm8USVoThrRUB%2FaAJ4QzUwBXvXrEyAo4oZyQ2QUOmLQ8TJbEHV7NDI7Qip4N%2FhVLxUe8LCDfdQfApwQvTm4jppB%2FhgsPtE6cCQMQwCRy574F2r8fb3UaNX5%2Fo2PkUuy5zgps4G7OnubWnrW6SYQvXOfW5dP4W4G3jX0rxkmduGquv9440I7%2B%2BlaiFvZWeyFGz5A98byrAdbaG9XGwWMu3g9XjyNnp2Wy47OUeUHhGCALxQhOEP0HVFY%2BIyMpuCuiBwDlfVaGicmj5FZmvB9lE5x7Udll1idJq6QQY8P92Etbk9DBgNHwkdhcJE5BW7lnG3zMt1x%2F4hv9XubkQ7iJ%2Bobe5iE1jOXPi3IeHnMf7rqzwAGNZmCTbblWTt%2FvmT2wLVbjXP%2BhDK%2Fx0qFIRXq40dgLnY9O5ibvlByrlCkml2JH26ivmN7t2tX8eg%2FVkwYjNvG0yU839eveGf1yLQEovsxfXhvKTML6ds80GOqUBOZnY1gMQh1tR0mY6GIQUTEEEYD3cDHCSvMZGnmd5AywvGkGBXD%2F4nE6DvB70k2zjYFNhTarwyf9rX0InSAEkTsuUjhFo6BzlG52tpExVEkgCILNE3bp3eOfD6M9YxDxP9AL%2BgiWYErvhOyS%2FpVQliOPU7%2FzfkpgocyO%2FK9EWzpK1dbo%2FdCXU5yMz5TAs5MjZw3Yk%2FDXs%2BuDYaa9Q3RVq3yx7kmDN&X-Amz-Signature=8f7a6ab01fb1f7c511b0c77b4e0bd66a87b40f968fd486d49449aa7c7d792b0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IKPB6E2%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCT1FgCZIZ2xBo2T7xJYQFXzReFFBc6Mj5ewFqnw7jvbwIhAK%2FHJBFMmPH2AGFc%2BW2M%2BnQNulEgeRlZ9XI1Y8EuHFTCKv8DCAoQABoMNjM3NDIzMTgzODA1IgyHNhZlQkiGQ%2BJedeMq3APFNg42AkwtScCrrFCDlP6nRcbnVtDFCY%2BXQiyf09s58kIt%2FruifqnW4bjMvWm2KoDhhwC89%2B%2Fc75mhKJGZGmWDbE13IkwpoeSSWz4%2FuAA%2B60YlfLCnDUB1Y6h0C4J8ob1U200ha5U0XfvfRvX1%2B9eoS8eZi3pZlcAC5P46V44vPknFXwirB7GKVJTwb84D8%2BgnRbDmPHv81bRK4bLnsPLO6L1hIYhRWDuyCxbfAb2YSYIWBWFVMKf%2BPLbkyMbrvrzB8J6d17R9RI2SCWBk3QCOaNV76JjBGce1rzfShsiRINhaJiv4Nx1PkETjcrRol52b7eRaNxn7auKPpm2MRJ%2Ff6gENtNtsy0p9jcR558uCDPuN%2BxguoMi5SAOhLtHRjlRfyBhfajI8nnxo7xvfCrBn3pngVREzD17dDdXEdIlu2bVkpz1GJoOizGaoBQBzOJ93v06vrFzOr5o5Zwk4fqlwSMVppar%2BvPV7KZnf4F6%2Ft1D9xY5ziak77XEhiQ%2FWF5OaYjdmnyB8fjqKCnCMGfFLF%2FppezvNN%2B8sC3ysu%2B13a9k9d8rCYOidiJByKMzUc3sDQGEhDqeDdeDhfHDHeSYOs39nPZB9DzTTMWZP4biQ2hPtFd49i%2B8U938gQjD1nLPNBjqkAa4diNtI5jA7sBcFSv3z1HRt6KfhjQkJilaumx0%2BiTus7SRJRIO4n3nYy7dlkILIcIGzEmpcYK0Kn52uHMqavFZCLWcye9%2BMnmEx%2B0oKZFEkmosxBAcko7dBHQLxYMiyDOvdaOIktf9zbXD5zQK%2FaouGP01NKtVYxqcXHlAuByulhS%2BgpEfYPPnIoMSUW8tYbbtYiwJkA%2FvFgdMvsAw91PTO%2FoQn&X-Amz-Signature=441afd9b00dcda91834c07de5873f7c146cbd7e51881a0a5e4ec6ee6b54d6cb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NH2X4P4%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T021026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCST53dg5nn3VCIYnlgVtBEimyg0o1FW4J1Zr6P7pcSwAIgFpuF2JLXmbeuXJ3m9MFzyG5XTvY7K4VeF3u4%2BNmwJOgq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDL5Fcjz6hezaMxNleircA4WRSDNO%2BocA3QhGcIX%2FEJg32ECubQIR7W4J%2BwrSd2%2BwGL3TRwglMcxV%2FjYg3qbb0ZWSdSHHP7b%2B8eutoPg%2BVaD%2Bg9PgA64yYyfesMzq7NREVNBKXbLQCzn0h2ukeFAs66Drc6zFXLYvQU7zfKrKEB5HcncO1hp59TOl6sqPu83GqEl8yaKHSB8STIAYjPi7EPoELIqfhYdXgBFgfTCIT9M14Nc8XIqCoC8ur2OgmcZ8wXP9sJ%2Fvh2kLZycTI1RwtHrRRYj2npnmxpNL1NMtXlqo6MQHhCZk%2Fja6v2CIs0wjJ744RWcco0pCu4B2BsHFKd9etxffTMcxqdEPHbyOaTzvUBwGgfuki7ugU5ScVpp9kSc%2FGuulxNatpEQa2OlTOduVLem5MZhwwyJdVLCLXI7O%2BlyUw2Q9DmIbQbetJWh4KwTB915rElcNKFd0fJGz4tXkcG9Tc%2FWbyLdt6LYHOqLXYqEb%2BiebYte%2Bb1xDV2F%2BQBYlht6pJJG%2FuG6FDFsNPA7MHEsH5cXAsqA07c9rgpO3STh3N7qgPPd4egrnTNa8a9sNgL%2BkOHnzjPE7pSRynWrxkvAfcAHB3Hm07rPmErJX9BTXXz%2Fiahn2m4fz%2FQljzSA8locVXGzxVsbbML%2Bds80GOqUBLpa%2BWTC3fehiDddY9%2F56TZX78shFxYizsUyzpyUjq89qRIRYG8jw1G9dF0GYZFndJcpPuCkB6lok78GpnenBuriiBlW9tnFqae0x9u5m1qpnqZnlTcgMuvBOshQnNIuxcV3W1mptNiNOusHfjIvm1n9J95Ve4AhA%2BAFaIF7VXnhd40bwOMLnnApCPZlc%2FaceRqUH66%2BhKB%2Bc0nBCuqBa3TUWrf50&X-Amz-Signature=98be0cfe281cfd1f6c2ffb029e2170988a879c3a73e84bba099905095aa84ca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IKPB6E2%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCT1FgCZIZ2xBo2T7xJYQFXzReFFBc6Mj5ewFqnw7jvbwIhAK%2FHJBFMmPH2AGFc%2BW2M%2BnQNulEgeRlZ9XI1Y8EuHFTCKv8DCAoQABoMNjM3NDIzMTgzODA1IgyHNhZlQkiGQ%2BJedeMq3APFNg42AkwtScCrrFCDlP6nRcbnVtDFCY%2BXQiyf09s58kIt%2FruifqnW4bjMvWm2KoDhhwC89%2B%2Fc75mhKJGZGmWDbE13IkwpoeSSWz4%2FuAA%2B60YlfLCnDUB1Y6h0C4J8ob1U200ha5U0XfvfRvX1%2B9eoS8eZi3pZlcAC5P46V44vPknFXwirB7GKVJTwb84D8%2BgnRbDmPHv81bRK4bLnsPLO6L1hIYhRWDuyCxbfAb2YSYIWBWFVMKf%2BPLbkyMbrvrzB8J6d17R9RI2SCWBk3QCOaNV76JjBGce1rzfShsiRINhaJiv4Nx1PkETjcrRol52b7eRaNxn7auKPpm2MRJ%2Ff6gENtNtsy0p9jcR558uCDPuN%2BxguoMi5SAOhLtHRjlRfyBhfajI8nnxo7xvfCrBn3pngVREzD17dDdXEdIlu2bVkpz1GJoOizGaoBQBzOJ93v06vrFzOr5o5Zwk4fqlwSMVppar%2BvPV7KZnf4F6%2Ft1D9xY5ziak77XEhiQ%2FWF5OaYjdmnyB8fjqKCnCMGfFLF%2FppezvNN%2B8sC3ysu%2B13a9k9d8rCYOidiJByKMzUc3sDQGEhDqeDdeDhfHDHeSYOs39nPZB9DzTTMWZP4biQ2hPtFd49i%2B8U938gQjD1nLPNBjqkAa4diNtI5jA7sBcFSv3z1HRt6KfhjQkJilaumx0%2BiTus7SRJRIO4n3nYy7dlkILIcIGzEmpcYK0Kn52uHMqavFZCLWcye9%2BMnmEx%2B0oKZFEkmosxBAcko7dBHQLxYMiyDOvdaOIktf9zbXD5zQK%2FaouGP01NKtVYxqcXHlAuByulhS%2BgpEfYPPnIoMSUW8tYbbtYiwJkA%2FvFgdMvsAw91PTO%2FoQn&X-Amz-Signature=710da272b019431293f7cc4889ad65a2f989120e77f102fdd5d1fb1439f872fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ERZHTLE%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T021028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDlheofhZu4vBRx838eAjkPD%2FP8NJTDanUgdcZAAfPGTwIhAJdOjEynVOZuOLTonezWv7op0IuLc2EcpMVpCTnPtLD%2BKv8DCAoQABoMNjM3NDIzMTgzODA1Igz%2FEzG9k3Tzg4OczQsq3AOQVeyV9EFVRQmS%2FuB2jTg0cTEt6cVK20ecEMg%2BnShOyw%2F6F6HDse9mppG50ZketOedLcdq6y8S0G582iY5%2Bqoc1HHRsK68YgCD7FRW8VEZeCrTLF67kMW1sOSaui9UiQUvnnGi74jkIaj1kLOxCtsGvsSvBe5g0PKvfZdaMBx3C32VrznKh6joBcujd9OJxsfGZwho6hLPekS148zMRoxTCSiWt6QETjCVOoAQywe%2BD0PYAc7BHpe%2FO%2FA2F4L1bpXsHdBV8uNFBCddEUxy%2B7uYTffSWX951R08%2Fuup706IHfu%2F7Rt974zHDz3%2BslOYn55FgT%2B8no%2FmlrNBXTGmodT98pHROdJTONJiwHAyIE4yoDhBajhfyDYbtvbLYsNhMrubc420PVA3%2B5IbMRXJdtitnXzJbJmBRX9f6S3PH7qp6rTwB4B7059LJUFerkbphA3Vkm2m8Dv4Rnwlrrv0KMgsbKsfU84jRVoyIfnSYFTfvm7gIZ50vK4hoh4HXCGIRmLcMRX9CEz7Yy0dSew8NC5A41SLXHLtZFHsdqjoqnA5nQJvQqZ6HrDj8aJIL533IsEeFX2rdRt9gcydV4rc8tLQeN1%2F43rT8KqlyT%2FnyF%2FaJqsibBgn2YM3Lb8oITCbnbPNBjqkAfkjLMV3GL4LPYzYbYxvf9nwdhaiYeyL9jWBApYybR3HOzvJwFMWdlM%2BGqoM26XDo16Nu%2Bdy8zHzSmG9GxMLgcTYm%2F27iRYgNCIV8KZZMtq5DPLyfNf5pwEItJBDQBwKsn8St9k%2B1s95ZKfjrV2CuaoSbS3%2FpFHWyaYC29C1emAaQakBkcHafTP4hcpFhAitNCnVm%2FHSfw6pd6bi0wMV%2FYraOn3y&X-Amz-Signature=fc0a0327514c311b1d1a39b1e3a06002954dfcbba27f7665d38837eccd651935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IKPB6E2%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCT1FgCZIZ2xBo2T7xJYQFXzReFFBc6Mj5ewFqnw7jvbwIhAK%2FHJBFMmPH2AGFc%2BW2M%2BnQNulEgeRlZ9XI1Y8EuHFTCKv8DCAoQABoMNjM3NDIzMTgzODA1IgyHNhZlQkiGQ%2BJedeMq3APFNg42AkwtScCrrFCDlP6nRcbnVtDFCY%2BXQiyf09s58kIt%2FruifqnW4bjMvWm2KoDhhwC89%2B%2Fc75mhKJGZGmWDbE13IkwpoeSSWz4%2FuAA%2B60YlfLCnDUB1Y6h0C4J8ob1U200ha5U0XfvfRvX1%2B9eoS8eZi3pZlcAC5P46V44vPknFXwirB7GKVJTwb84D8%2BgnRbDmPHv81bRK4bLnsPLO6L1hIYhRWDuyCxbfAb2YSYIWBWFVMKf%2BPLbkyMbrvrzB8J6d17R9RI2SCWBk3QCOaNV76JjBGce1rzfShsiRINhaJiv4Nx1PkETjcrRol52b7eRaNxn7auKPpm2MRJ%2Ff6gENtNtsy0p9jcR558uCDPuN%2BxguoMi5SAOhLtHRjlRfyBhfajI8nnxo7xvfCrBn3pngVREzD17dDdXEdIlu2bVkpz1GJoOizGaoBQBzOJ93v06vrFzOr5o5Zwk4fqlwSMVppar%2BvPV7KZnf4F6%2Ft1D9xY5ziak77XEhiQ%2FWF5OaYjdmnyB8fjqKCnCMGfFLF%2FppezvNN%2B8sC3ysu%2B13a9k9d8rCYOidiJByKMzUc3sDQGEhDqeDdeDhfHDHeSYOs39nPZB9DzTTMWZP4biQ2hPtFd49i%2B8U938gQjD1nLPNBjqkAa4diNtI5jA7sBcFSv3z1HRt6KfhjQkJilaumx0%2BiTus7SRJRIO4n3nYy7dlkILIcIGzEmpcYK0Kn52uHMqavFZCLWcye9%2BMnmEx%2B0oKZFEkmosxBAcko7dBHQLxYMiyDOvdaOIktf9zbXD5zQK%2FaouGP01NKtVYxqcXHlAuByulhS%2BgpEfYPPnIoMSUW8tYbbtYiwJkA%2FvFgdMvsAw91PTO%2FoQn&X-Amz-Signature=f50bc19258878a40185a2b3d94cc4e36ff49b5d5d9a8fc063e76d01103433ea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HJTQTPN%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T021032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDnQCj2pqmegKgz%2B1k94g92z9n8TPrznjjFfW8r%2B61ClgIgNpCEY83dsOk85SgMv%2BOdeE%2FXdsoX2QmffVjRWP0zVSUq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDMEOByE%2FNZiCSeXlGSrcA%2Bxc98jFcmBj6b7wrgxnmchkiCNmwCoJMI7u%2F0pPUfbv7EFQx0gzil0IXw%2BO0AlBY%2BVE2oSUB6goRsDENh9aq7W5DUmC6Na%2F2GEGqso51StsNXePztovGlf8Gcz8tQP61%2BGJ2TAIc57GlNTmxOKikxtf4jmYNgYiGTq%2BXe7pDtpC7vTzWQOMzjjfyxBIdG9fuoqAuLcUj7IFwuNdMCcqq3YRxeIqltSNLMAtsD1zKWxVMvX601nV%2FtBKYm5QRifTRRvey52LVHbIOfL89tdoUtAM0zElWR8N3brOf5C1KeeDA0BZHBn%2FduGMrE6Xbq%2Ff4BLUhLL3Y4DzLP1EwSE0FE03BzyPwlu5wFxJ8hsWvvG43dPiHUJZDWiwjrsgf%2Bvs%2ByjmABznamhFU5BRbsF3y%2FXhnsOVNxX%2FQMAsQGHISvv8eESgOj2lSBCmGkc9dFauH8UNa1yQDRIibU3Q0z%2FCVq%2FHe9WPxa0Lsaz7HvYSJSFFIBScty2T9iVyVpViIcz70YYRJVxXFyoEAXK%2Fxh0I5ehxPlGjg%2BIsXfcBqfnofoRDRRiIkN%2FijK%2FdilKwlTt6ckHdWSdwdwBSh8FR6l%2BSL%2FJzhzsL89hSGRlyrmcqgpXWXMYVeag76GhopPSSMJqes80GOqUBH6G0RAYPr0tCDAysudCogcKCFb3n786h3c%2FPOG%2BI%2FbQbJKK8NwOqpRQQNSmMvJjmrasSemEzmDmnoPPZa%2FwjRWQzD7ZtSGLlnN7aHYFaZtXWzwyKm4UcO3ZgIpyauHyYEC%2BjpgSjP84%2FV8E0tbkBXE6rWQlkYQws7dJTjbNPHM2Zn4%2Ff%2BzsWe3xUcGlODiOxAopBu3b3Ny34cpFV9Zt3nVerW0%2BN&X-Amz-Signature=e0371195e0c91a90aa61e9b68e701942588a5654545130da9ea3040b6154007a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IKPB6E2%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCT1FgCZIZ2xBo2T7xJYQFXzReFFBc6Mj5ewFqnw7jvbwIhAK%2FHJBFMmPH2AGFc%2BW2M%2BnQNulEgeRlZ9XI1Y8EuHFTCKv8DCAoQABoMNjM3NDIzMTgzODA1IgyHNhZlQkiGQ%2BJedeMq3APFNg42AkwtScCrrFCDlP6nRcbnVtDFCY%2BXQiyf09s58kIt%2FruifqnW4bjMvWm2KoDhhwC89%2B%2Fc75mhKJGZGmWDbE13IkwpoeSSWz4%2FuAA%2B60YlfLCnDUB1Y6h0C4J8ob1U200ha5U0XfvfRvX1%2B9eoS8eZi3pZlcAC5P46V44vPknFXwirB7GKVJTwb84D8%2BgnRbDmPHv81bRK4bLnsPLO6L1hIYhRWDuyCxbfAb2YSYIWBWFVMKf%2BPLbkyMbrvrzB8J6d17R9RI2SCWBk3QCOaNV76JjBGce1rzfShsiRINhaJiv4Nx1PkETjcrRol52b7eRaNxn7auKPpm2MRJ%2Ff6gENtNtsy0p9jcR558uCDPuN%2BxguoMi5SAOhLtHRjlRfyBhfajI8nnxo7xvfCrBn3pngVREzD17dDdXEdIlu2bVkpz1GJoOizGaoBQBzOJ93v06vrFzOr5o5Zwk4fqlwSMVppar%2BvPV7KZnf4F6%2Ft1D9xY5ziak77XEhiQ%2FWF5OaYjdmnyB8fjqKCnCMGfFLF%2FppezvNN%2B8sC3ysu%2B13a9k9d8rCYOidiJByKMzUc3sDQGEhDqeDdeDhfHDHeSYOs39nPZB9DzTTMWZP4biQ2hPtFd49i%2B8U938gQjD1nLPNBjqkAa4diNtI5jA7sBcFSv3z1HRt6KfhjQkJilaumx0%2BiTus7SRJRIO4n3nYy7dlkILIcIGzEmpcYK0Kn52uHMqavFZCLWcye9%2BMnmEx%2B0oKZFEkmosxBAcko7dBHQLxYMiyDOvdaOIktf9zbXD5zQK%2FaouGP01NKtVYxqcXHlAuByulhS%2BgpEfYPPnIoMSUW8tYbbtYiwJkA%2FvFgdMvsAw91PTO%2FoQn&X-Amz-Signature=74bb56282d61a7443828fb2e918f9148401f01cef89559f4929b5be372e5e4fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OJWWV2L%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T021034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDacIoW8zXLHAttTI0Ci%2BtSFhNOBpnebrfeBr84VpzHjAIhALpntI5EP%2FGSJ77nPSceo6ogVQkmr8LGPK7HLU%2BxObpyKv8DCAoQABoMNjM3NDIzMTgzODA1IgxuHKb7AGN7Ecuy%2FhEq3APP86N76yg5ArdBre0NRNe7CkAzrd24PGmn0a7H%2FfzFJQvDREQNRT%2Bi9A8oAoScBqQz1jLdPcluYQaO7jTKqWE%2BAVHQWibOWAlQ5zuKMplBGUE2YGHe2W3SIYVqq0nb3rC6ptI7UX8CeJE4pssOmd7y70gMsHfOe52LuT6%2FrlM4gJD3e%2BuurN0KcgXoiEZ9MrZ5aN544AULJhuYjr8lhgC4KSdkT%2BHzIqhsxJ1ZDxJ%2FFbUvJ3qoQClR2JDs7FJV3aAXEf2%2BHoGd7yVwwZQMp%2Fqx5%2BmfQ%2BmpkmiNh5%2FXI0MwyHLRA5609ZodY7V6NzDezrJQkcuhlb2Kql05EjdC74zK%2FznbshtwRPkGaLKyVbKfkv6ziobZUMWxr9rhW39UedTkxDa2sMPh6tJIf3UBD3wMSmaCDF6zUXFwx1bIKicoaDBQ%2FLM4KFPQAVhZT6wN5QmcENczzCaCE8Y8Np7y4dWvWitakuqxvV6NWkiv5krlBU9YyD65XNmUF%2FIX5s6fF7dyoLZcZwp%2BzjEQtVGW2TZizslTYKxhxbxSKqSLEAyItUIIE056rilVjfg0hU%2F%2B04MhaOrcXD2OG7ck1V5YYCQUHPYzkntiLvIKm6lrB4OopLeiLQoojVvVVSJTlDCanrPNBjqkAWwdgfDR6Rj0MzhUKJKck53fwXekWf8KcJBx5l%2FMFkCtYyZbWSWWMH44mkjZd8kwc5QVhpPjrFKdaJFaMdeHrQb3lQsRuQluM0NJ0uo6JScGuovO8BobMFm%2F4StcQ7UBXixPVsHgTO4rSaeTuMdbNgxxALBOSngAhM1D7huLzwYABQvcy4N93%2Fweufy5E%2BFdOUqFhBQR2mXyHz83X8gct2dkv6d%2F&X-Amz-Signature=322de699e620bc92c806e1d242aa6b35b65bd4b2d9f413525ccd612bab54a8e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IKPB6E2%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCT1FgCZIZ2xBo2T7xJYQFXzReFFBc6Mj5ewFqnw7jvbwIhAK%2FHJBFMmPH2AGFc%2BW2M%2BnQNulEgeRlZ9XI1Y8EuHFTCKv8DCAoQABoMNjM3NDIzMTgzODA1IgyHNhZlQkiGQ%2BJedeMq3APFNg42AkwtScCrrFCDlP6nRcbnVtDFCY%2BXQiyf09s58kIt%2FruifqnW4bjMvWm2KoDhhwC89%2B%2Fc75mhKJGZGmWDbE13IkwpoeSSWz4%2FuAA%2B60YlfLCnDUB1Y6h0C4J8ob1U200ha5U0XfvfRvX1%2B9eoS8eZi3pZlcAC5P46V44vPknFXwirB7GKVJTwb84D8%2BgnRbDmPHv81bRK4bLnsPLO6L1hIYhRWDuyCxbfAb2YSYIWBWFVMKf%2BPLbkyMbrvrzB8J6d17R9RI2SCWBk3QCOaNV76JjBGce1rzfShsiRINhaJiv4Nx1PkETjcrRol52b7eRaNxn7auKPpm2MRJ%2Ff6gENtNtsy0p9jcR558uCDPuN%2BxguoMi5SAOhLtHRjlRfyBhfajI8nnxo7xvfCrBn3pngVREzD17dDdXEdIlu2bVkpz1GJoOizGaoBQBzOJ93v06vrFzOr5o5Zwk4fqlwSMVppar%2BvPV7KZnf4F6%2Ft1D9xY5ziak77XEhiQ%2FWF5OaYjdmnyB8fjqKCnCMGfFLF%2FppezvNN%2B8sC3ysu%2B13a9k9d8rCYOidiJByKMzUc3sDQGEhDqeDdeDhfHDHeSYOs39nPZB9DzTTMWZP4biQ2hPtFd49i%2B8U938gQjD1nLPNBjqkAa4diNtI5jA7sBcFSv3z1HRt6KfhjQkJilaumx0%2BiTus7SRJRIO4n3nYy7dlkILIcIGzEmpcYK0Kn52uHMqavFZCLWcye9%2BMnmEx%2B0oKZFEkmosxBAcko7dBHQLxYMiyDOvdaOIktf9zbXD5zQK%2FaouGP01NKtVYxqcXHlAuByulhS%2BgpEfYPPnIoMSUW8tYbbtYiwJkA%2FvFgdMvsAw91PTO%2FoQn&X-Amz-Signature=e73e4251890e92af7edaf017b3b6b5e7668fd95324b670c471a9fc1f7c2fa9d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZXVBSN3%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T021038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIAiDfFAONvq8jPhDZ0Eg8frMn%2BLWdxt685ryKq15qo7wAiEAifu7ba33Ki3A4v%2B2QjaLIEIoF4Rq8AhPLZvZX2tY6%2Fcq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDNCLvbczbc4DKUwt%2BSrcA7BmnLU6BBrO3aAlcZOdXMiYLozAp8620Y4R0n7btWMDAQ38G7oURmuW7HpQYeAirdpw6%2FOtMjRqMsaIRY8dW%2BIRFBERGcz7BhZMcmNHiih6WPDuvrxjqssw%2FtZ0KtIFSADFR0drANa0Xq%2FSZxFctahVNjojVh%2BJutWBVTYIu4GYrRjAT4O4MnNWeMoEQVNwN0INluMuKRRaBLHDVkEWJrZ59tML5GHZBXddw0ftTkauT%2F8TeO%2Fc49zj4q881RUmTRLtDpCauRz7INBdtz%2FXIATzqJKZ0I7wyc5%2BDQoeVjB7xu%2BSSxaOYF7pkhv0j3PeOAsRWSwqIw7r2AhO0tRV7D0y%2B3v3SJp5mZZsZsi4%2BQkUIP%2B3E9j7t51pZgJUHGgPcy%2FhNdxJ9nVUMWB18aRs4KomccrBu67SwyUrjNvN9ehX%2BM3PhiDKaOBjy%2Fg8F9i1DPtQ1vnFR2KGwWewfQ5W%2Bm2MSBSBruM6QaQTHBy9VM%2FK4RTWqKuvFc51omC6qEKjnb1Uz4T8HTAqA6sqf4N91laLWJK3CGX7ebFnN%2FBvatYfCTLWJwWSkJ2UOnLyX5AKf6Gs0CfFtuC7NFz1a9x%2FIQzI%2Bir1GV0gTyGEoqOsD6406mZNP4qpB%2FybdBtAMIeds80GOqUBnL%2BfhkLmKQAMwWB%2B%2FfY%2BFoQcKmq61ZQJFSkjLJbq2mzh5EFdqAmPmrVYuqx3kZpGBMYqEtBC%2FgEfNPTaMREmPNpAMy0KXcNfWmfG3FQe2RPq7DHkfGqTRXKnDTth7mIVlgfiJppCILmVzFI4FMgyWuNpv%2F98JWf4FYqujdwY%2FFGpMowNu2DMm%2FzV1vs9fVPi6XTlwhTmvJHOBRAf%2FIG4R9dyRXZ1&X-Amz-Signature=8b99b61a301f43ced8c0f4b3db7299b37e35d5db4defec7d1223cb96bf858a3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJD6D252%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T021040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCnoR5C9esYpDcTuI7%2F2jyIej%2FvkpOsrGQ7bI%2F7o2CSmAIhAK%2FCyrMPhYJDtpID1mbBdKHivO8PPDmmxU%2BRIoN8qoQnKv8DCAoQABoMNjM3NDIzMTgzODA1IgyzVtjfjnGG0ahIKDcq3AMo2dvJXCnAJ%2BVTW7trAcadqW8xAwb4C15Tn6T%2Be2lTZaor673%2FGQSUR8A%2BVWt%2FM8NnoLvNpWmtBAguqUhwZ%2FOuLjrLuj3qhYg%2BGrYuxqHwvbszBngzyyy0l5TCxigFicp7CDCsPnjmjSe%2BfqcnXeXiB6GVe2JRvGziR%2Ft7F6MVjd84acXW9GQuBZQLgPMWj4pEOQhpZrY2QpcouVT7iVNVhM%2Bjr2Aivrw4uc0v5KT38OBhCMDIEo0RNu9FaroIWos%2FfHnTQEbpqK5nFx0pRxYcmrJDT%2FDnQI0yqqQHl%2BLhXQP%2F8CWDm8za6ShlvlKWGva9ZfFdvB04hyBNA6jT19%2Bze3oXNp%2BxIvfmbgilzaLgWfb9XroKQ11CuVJPlLSrMAbEFQR8AZzu%2BPM29CMwjHwKsPM9XJsGEhB7hEqsM66ZpWaB0X1VonO%2F1GZUcEnaNW53vc9E8wZqbTKZ%2FOHPp7h8Yc9rjLenz3NWA3WTPSILYjz4reIJOEzHe4TLrqsWCjfw7hNWdJGTAxZL71xra2hx%2BPo0nar6TmE9N9aaFfw9G2ft0ui6uDN%2BgqB6XjwYLKg8UguT3XW0oDtta4thTU6ejkX%2Brr%2Fqw2Rd4t1ZmmNFmBmCW4s5pjnK%2BFsLnDCXnbPNBjqkAR9NDVsgAojDgC8fVnsu7%2Bj2bk9aSeLkB0%2B7NaE%2F5xfCdVW1qJWXFgVN11xg2VeIS2491DuDW9paQXXRqavWtTjD%2BQ0V32iy1LQasKenKKqCtka3Ukh4OQ8rJrVPPOkAkRCAIFms%2FmIMhpwyH16yflJFYDOrOnOhxXYcwb1yZHGciVZlLaqFuNk%2FAKx6K5V2%2BTYfHFbRO%2BCplX0TsUZf4CtwbKRe&X-Amz-Signature=00d42e8bcf343ac2840e32218c4aff9deea58aa7f77601a6635235ee4f1b5a66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRLYQBB4%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T021042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIEAksVdRkQiyuh%2BI4MHx%2BDuJPr%2B2twtP9azeN3nr5HQmAiEAxA6v7KRv9CMOjazq0BNvLNoz2k4CETr0Jjam%2F0q6IvQq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDNcM7y4fZAAfW37WQCrcA9WJkUDi5CnmALEObF1aU%2BZZeqiBkGNjBedChvcDco%2FFxLZ8AqZD23UlKstkjhjzS7HZycp7I7y0h7sr3JeuniivbGpUQwAViHLVMivYloaU16Kb7qlTHyPjAIIMaPcy1vkbsfMx69DalBmSZviOzO1w%2ByovvkxJ3uhiAVqAVNqgtH4URqNlUB4WDmb9CEON788t%2FQoxj%2Big3e3W%2BKIppR46mQd5VZs%2FyCU2Fh1Ni8ZNz6oFnGFUGP5MbEOTJKP3eSfrSuT4K8LuKiOD8bqavO7NTSsDDYC9YFhwIAndK%2B%2BU7a5JrIAFPDRcRfqFW3rTN2wbT5wANch641EEY8ce%2BrqjBLeoeDza6PXbFBwGsWBkvD0IyIkmikRHM2MNfG1RqUSE2UxYtW8lpfD3G6%2BToay1asWzpB3z1RXB8i3%2Bkxxcl5c8I5MucUjbMQUxiX4U8r734E6E402k231UmqupFbyvgN74UKeuo7oWoWdaklyM925jYNk5oqMPL1bs34FyMPdq7ZtDH6WSHIPRrUENS11jOHz5NHbUFKJ9uK7hq57HTo6e%2BzX72LtPRSEBbJZiw5qdk%2BM6cY%2B9Op2xaL%2BnT01SkHPiPikUaOB12ZDp8sd%2FJuh63%2F3KtNUBH3quMPucs80GOqUBgV1ut9OTBqGFkWQ%2Fv%2FcLqR4Ckd1S62wJ3bxftC5oaNfdLn1zYHN3wPrtoh0vzZP%2BLs%2FR80FnXe%2FrHg%2FEMgaggGUSwXCBHIVqS%2F06BWJF3SEv2TP12Jo98uSGrFHzI8IIg5%2BGnIN7dnhlIr5oPFiw5j18g3qfLech1NdXu5JZyQ4YjJnj%2BdS1vjGsdZM6Lv9CdomHgx4VKjz01GIdSM0usGf%2BpIkh&X-Amz-Signature=4299cc83aa86141ebbf63932ca990f63d9c00d16e42dfae724f05e245d96d39a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IKPB6E2%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCT1FgCZIZ2xBo2T7xJYQFXzReFFBc6Mj5ewFqnw7jvbwIhAK%2FHJBFMmPH2AGFc%2BW2M%2BnQNulEgeRlZ9XI1Y8EuHFTCKv8DCAoQABoMNjM3NDIzMTgzODA1IgyHNhZlQkiGQ%2BJedeMq3APFNg42AkwtScCrrFCDlP6nRcbnVtDFCY%2BXQiyf09s58kIt%2FruifqnW4bjMvWm2KoDhhwC89%2B%2Fc75mhKJGZGmWDbE13IkwpoeSSWz4%2FuAA%2B60YlfLCnDUB1Y6h0C4J8ob1U200ha5U0XfvfRvX1%2B9eoS8eZi3pZlcAC5P46V44vPknFXwirB7GKVJTwb84D8%2BgnRbDmPHv81bRK4bLnsPLO6L1hIYhRWDuyCxbfAb2YSYIWBWFVMKf%2BPLbkyMbrvrzB8J6d17R9RI2SCWBk3QCOaNV76JjBGce1rzfShsiRINhaJiv4Nx1PkETjcrRol52b7eRaNxn7auKPpm2MRJ%2Ff6gENtNtsy0p9jcR558uCDPuN%2BxguoMi5SAOhLtHRjlRfyBhfajI8nnxo7xvfCrBn3pngVREzD17dDdXEdIlu2bVkpz1GJoOizGaoBQBzOJ93v06vrFzOr5o5Zwk4fqlwSMVppar%2BvPV7KZnf4F6%2Ft1D9xY5ziak77XEhiQ%2FWF5OaYjdmnyB8fjqKCnCMGfFLF%2FppezvNN%2B8sC3ysu%2B13a9k9d8rCYOidiJByKMzUc3sDQGEhDqeDdeDhfHDHeSYOs39nPZB9DzTTMWZP4biQ2hPtFd49i%2B8U938gQjD1nLPNBjqkAa4diNtI5jA7sBcFSv3z1HRt6KfhjQkJilaumx0%2BiTus7SRJRIO4n3nYy7dlkILIcIGzEmpcYK0Kn52uHMqavFZCLWcye9%2BMnmEx%2B0oKZFEkmosxBAcko7dBHQLxYMiyDOvdaOIktf9zbXD5zQK%2FaouGP01NKtVYxqcXHlAuByulhS%2BgpEfYPPnIoMSUW8tYbbtYiwJkA%2FvFgdMvsAw91PTO%2FoQn&X-Amz-Signature=3066f47887d3b3c51902661dbe6079c3a1c6420815865ad8acb680f1daf479d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IKPB6E2%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCT1FgCZIZ2xBo2T7xJYQFXzReFFBc6Mj5ewFqnw7jvbwIhAK%2FHJBFMmPH2AGFc%2BW2M%2BnQNulEgeRlZ9XI1Y8EuHFTCKv8DCAoQABoMNjM3NDIzMTgzODA1IgyHNhZlQkiGQ%2BJedeMq3APFNg42AkwtScCrrFCDlP6nRcbnVtDFCY%2BXQiyf09s58kIt%2FruifqnW4bjMvWm2KoDhhwC89%2B%2Fc75mhKJGZGmWDbE13IkwpoeSSWz4%2FuAA%2B60YlfLCnDUB1Y6h0C4J8ob1U200ha5U0XfvfRvX1%2B9eoS8eZi3pZlcAC5P46V44vPknFXwirB7GKVJTwb84D8%2BgnRbDmPHv81bRK4bLnsPLO6L1hIYhRWDuyCxbfAb2YSYIWBWFVMKf%2BPLbkyMbrvrzB8J6d17R9RI2SCWBk3QCOaNV76JjBGce1rzfShsiRINhaJiv4Nx1PkETjcrRol52b7eRaNxn7auKPpm2MRJ%2Ff6gENtNtsy0p9jcR558uCDPuN%2BxguoMi5SAOhLtHRjlRfyBhfajI8nnxo7xvfCrBn3pngVREzD17dDdXEdIlu2bVkpz1GJoOizGaoBQBzOJ93v06vrFzOr5o5Zwk4fqlwSMVppar%2BvPV7KZnf4F6%2Ft1D9xY5ziak77XEhiQ%2FWF5OaYjdmnyB8fjqKCnCMGfFLF%2FppezvNN%2B8sC3ysu%2B13a9k9d8rCYOidiJByKMzUc3sDQGEhDqeDdeDhfHDHeSYOs39nPZB9DzTTMWZP4biQ2hPtFd49i%2B8U938gQjD1nLPNBjqkAa4diNtI5jA7sBcFSv3z1HRt6KfhjQkJilaumx0%2BiTus7SRJRIO4n3nYy7dlkILIcIGzEmpcYK0Kn52uHMqavFZCLWcye9%2BMnmEx%2B0oKZFEkmosxBAcko7dBHQLxYMiyDOvdaOIktf9zbXD5zQK%2FaouGP01NKtVYxqcXHlAuByulhS%2BgpEfYPPnIoMSUW8tYbbtYiwJkA%2FvFgdMvsAw91PTO%2FoQn&X-Amz-Signature=1e06231ee5d224043c1aa32ff60cf2dee0f334ab503b9e731d7e057a5eb04484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5CK2YX3%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDz4bJnJZvmcrTsqTRU6PRV6ggmkL4gPcG%2BmJ%2BXd7f8lwIgD9EV871TxMw7vz1dU3BrhmcJSnL6lLJPYSQ%2FFSNPybAq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDHRLa7xYRUQoxiCeDircA2%2FOfXwz8paXEoDkzUQLIoiZNnteLmMh9l8up1i8iOO6azsGX6CURT4V3P90luGyw6UsaoR4LQl%2Fbqj4hEBUzHx2JGoAca80zc9t5w7cCQaOtEhzCy3iUeNkSVoo96oaDZdYsPRbJZ7UxxYYmeQfS1Vy%2BsTe%2FLz%2BlHo%2F5AtLfUVTTU5AbRDmGw8WBHLnuMyS6z7BdNMSWpPWa%2BasIooGRk3J4UL8CDHVyf0233xHykno6KmV4JMyg07%2FPl%2B7tPFbDlqQFu2Gh9C7I%2FtHJmg%2F0XtxsqmqsvqnnCBLInjHUkY8XW3Zx%2F3WkGP8WZMO9PXHwaGw9Z%2Bvi12loKIU0WV66JDAqI%2FHCNJQl2ZCZWa4THBGd80CivXRnqABt5iZOfqgHSXP4ZLTnAZ8SuzSZyvKDuv4YWUiRkOsCjSIr8ftgbD4NeaddNJrfroR%2BiYa5sqZpHehlXsWuYSQmOZjAsXE9IvVNXdTNxcxGdIS%2BsWecCqW1VL3WpYfh7f6FYxM4lDWHtF9NKalvqUNxpIIA9SI6vfuToaqK7Bf4ZAF%2FwAiOs7UKdl7ALBcSn%2FM4Fkh%2BP2pti8uwW%2FasG7QD48qy%2FsiAeGk2R6eFsLp522RJxSaz58OCjvwbE1x0UaEguugMOScs80GOqUBLPgaxRuhcDAQwy7mmMImSIgQoz8bYRoyFOwozvPQ33dUgjqq47cqOaKRA%2BnZFMCQ8yJC5byOAKJaOBXMYnMe%2F%2BGRXyEWucQ%2F326qkyZBak%2FFUawvz84vDp19bXzQYDnSmyHbHTXphxMmPGUq3UnKI7QMuqQL2je7Pb6tob%2FUM66OHHBGhItNDO%2BktSmivKLrEEmWRO2g4HyIGQRvZ8QO2eJeq9WA&X-Amz-Signature=6327cb6409120ed9b0a1be353af5c2e28a79cb8642b9b10c35a7ba24368143dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5CK2YX3%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDz4bJnJZvmcrTsqTRU6PRV6ggmkL4gPcG%2BmJ%2BXd7f8lwIgD9EV871TxMw7vz1dU3BrhmcJSnL6lLJPYSQ%2FFSNPybAq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDHRLa7xYRUQoxiCeDircA2%2FOfXwz8paXEoDkzUQLIoiZNnteLmMh9l8up1i8iOO6azsGX6CURT4V3P90luGyw6UsaoR4LQl%2Fbqj4hEBUzHx2JGoAca80zc9t5w7cCQaOtEhzCy3iUeNkSVoo96oaDZdYsPRbJZ7UxxYYmeQfS1Vy%2BsTe%2FLz%2BlHo%2F5AtLfUVTTU5AbRDmGw8WBHLnuMyS6z7BdNMSWpPWa%2BasIooGRk3J4UL8CDHVyf0233xHykno6KmV4JMyg07%2FPl%2B7tPFbDlqQFu2Gh9C7I%2FtHJmg%2F0XtxsqmqsvqnnCBLInjHUkY8XW3Zx%2F3WkGP8WZMO9PXHwaGw9Z%2Bvi12loKIU0WV66JDAqI%2FHCNJQl2ZCZWa4THBGd80CivXRnqABt5iZOfqgHSXP4ZLTnAZ8SuzSZyvKDuv4YWUiRkOsCjSIr8ftgbD4NeaddNJrfroR%2BiYa5sqZpHehlXsWuYSQmOZjAsXE9IvVNXdTNxcxGdIS%2BsWecCqW1VL3WpYfh7f6FYxM4lDWHtF9NKalvqUNxpIIA9SI6vfuToaqK7Bf4ZAF%2FwAiOs7UKdl7ALBcSn%2FM4Fkh%2BP2pti8uwW%2FasG7QD48qy%2FsiAeGk2R6eFsLp522RJxSaz58OCjvwbE1x0UaEguugMOScs80GOqUBLPgaxRuhcDAQwy7mmMImSIgQoz8bYRoyFOwozvPQ33dUgjqq47cqOaKRA%2BnZFMCQ8yJC5byOAKJaOBXMYnMe%2F%2BGRXyEWucQ%2F326qkyZBak%2FFUawvz84vDp19bXzQYDnSmyHbHTXphxMmPGUq3UnKI7QMuqQL2je7Pb6tob%2FUM66OHHBGhItNDO%2BktSmivKLrEEmWRO2g4HyIGQRvZ8QO2eJeq9WA&X-Amz-Signature=1c97d8d0773f5458d4f7f9cf8131892a2f6be3a6b615e01578f20a0e525b7f15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5CK2YX3%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDz4bJnJZvmcrTsqTRU6PRV6ggmkL4gPcG%2BmJ%2BXd7f8lwIgD9EV871TxMw7vz1dU3BrhmcJSnL6lLJPYSQ%2FFSNPybAq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDHRLa7xYRUQoxiCeDircA2%2FOfXwz8paXEoDkzUQLIoiZNnteLmMh9l8up1i8iOO6azsGX6CURT4V3P90luGyw6UsaoR4LQl%2Fbqj4hEBUzHx2JGoAca80zc9t5w7cCQaOtEhzCy3iUeNkSVoo96oaDZdYsPRbJZ7UxxYYmeQfS1Vy%2BsTe%2FLz%2BlHo%2F5AtLfUVTTU5AbRDmGw8WBHLnuMyS6z7BdNMSWpPWa%2BasIooGRk3J4UL8CDHVyf0233xHykno6KmV4JMyg07%2FPl%2B7tPFbDlqQFu2Gh9C7I%2FtHJmg%2F0XtxsqmqsvqnnCBLInjHUkY8XW3Zx%2F3WkGP8WZMO9PXHwaGw9Z%2Bvi12loKIU0WV66JDAqI%2FHCNJQl2ZCZWa4THBGd80CivXRnqABt5iZOfqgHSXP4ZLTnAZ8SuzSZyvKDuv4YWUiRkOsCjSIr8ftgbD4NeaddNJrfroR%2BiYa5sqZpHehlXsWuYSQmOZjAsXE9IvVNXdTNxcxGdIS%2BsWecCqW1VL3WpYfh7f6FYxM4lDWHtF9NKalvqUNxpIIA9SI6vfuToaqK7Bf4ZAF%2FwAiOs7UKdl7ALBcSn%2FM4Fkh%2BP2pti8uwW%2FasG7QD48qy%2FsiAeGk2R6eFsLp522RJxSaz58OCjvwbE1x0UaEguugMOScs80GOqUBLPgaxRuhcDAQwy7mmMImSIgQoz8bYRoyFOwozvPQ33dUgjqq47cqOaKRA%2BnZFMCQ8yJC5byOAKJaOBXMYnMe%2F%2BGRXyEWucQ%2F326qkyZBak%2FFUawvz84vDp19bXzQYDnSmyHbHTXphxMmPGUq3UnKI7QMuqQL2je7Pb6tob%2FUM66OHHBGhItNDO%2BktSmivKLrEEmWRO2g4HyIGQRvZ8QO2eJeq9WA&X-Amz-Signature=42a56cc7bdd68ac20e65f9ee926eedab167aa102c132a5e0040d6b2c8e3a7cb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5CK2YX3%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDz4bJnJZvmcrTsqTRU6PRV6ggmkL4gPcG%2BmJ%2BXd7f8lwIgD9EV871TxMw7vz1dU3BrhmcJSnL6lLJPYSQ%2FFSNPybAq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDHRLa7xYRUQoxiCeDircA2%2FOfXwz8paXEoDkzUQLIoiZNnteLmMh9l8up1i8iOO6azsGX6CURT4V3P90luGyw6UsaoR4LQl%2Fbqj4hEBUzHx2JGoAca80zc9t5w7cCQaOtEhzCy3iUeNkSVoo96oaDZdYsPRbJZ7UxxYYmeQfS1Vy%2BsTe%2FLz%2BlHo%2F5AtLfUVTTU5AbRDmGw8WBHLnuMyS6z7BdNMSWpPWa%2BasIooGRk3J4UL8CDHVyf0233xHykno6KmV4JMyg07%2FPl%2B7tPFbDlqQFu2Gh9C7I%2FtHJmg%2F0XtxsqmqsvqnnCBLInjHUkY8XW3Zx%2F3WkGP8WZMO9PXHwaGw9Z%2Bvi12loKIU0WV66JDAqI%2FHCNJQl2ZCZWa4THBGd80CivXRnqABt5iZOfqgHSXP4ZLTnAZ8SuzSZyvKDuv4YWUiRkOsCjSIr8ftgbD4NeaddNJrfroR%2BiYa5sqZpHehlXsWuYSQmOZjAsXE9IvVNXdTNxcxGdIS%2BsWecCqW1VL3WpYfh7f6FYxM4lDWHtF9NKalvqUNxpIIA9SI6vfuToaqK7Bf4ZAF%2FwAiOs7UKdl7ALBcSn%2FM4Fkh%2BP2pti8uwW%2FasG7QD48qy%2FsiAeGk2R6eFsLp522RJxSaz58OCjvwbE1x0UaEguugMOScs80GOqUBLPgaxRuhcDAQwy7mmMImSIgQoz8bYRoyFOwozvPQ33dUgjqq47cqOaKRA%2BnZFMCQ8yJC5byOAKJaOBXMYnMe%2F%2BGRXyEWucQ%2F326qkyZBak%2FFUawvz84vDp19bXzQYDnSmyHbHTXphxMmPGUq3UnKI7QMuqQL2je7Pb6tob%2FUM66OHHBGhItNDO%2BktSmivKLrEEmWRO2g4HyIGQRvZ8QO2eJeq9WA&X-Amz-Signature=1f766d1bf5f7ea019a2ef78253cb4a6a96e1ce7fc515c6d05689b44e2992d0a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJHL2UJY%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T021051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQD5WzL5DCgYFlaurHI%2BzAaw3bC1764HgNZdk6pDEKiiZAIgbloKm30faBVybTX8knnSKubWckKtQBz3A%2BZz%2FGu%2Bh3Mq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDDjzAQNLaickqVSqACrcA76jSsDHyq6ZVKJ6pk9WneYLVLhWfhTdpnfR1UBDIxhKgc9WQhH8eYPTmTG%2FySRy0aPmxy2jx1FRYlqeQEueeZvlD1l5KHCiH7d0BtmFEx4ltNHd4pv%2BMxz2AZCZtIOrfyofETDm%2FEcUUWTBjb7qr8Z%2FiDoUlXaGjBdbsB6j2xWiCvOkRvW%2Bj%2FFT%2B3Tm39PgmlXgh9SqnlEGYpfJ8l99FrQ2TYnqpBJrx7CduRxyxt5iJ1DIZvXypTmEqI6TpG1lJFl1lrho8wJoPlhb5v2nWyU73WCxQZNG0taPlWrr9UG%2FSx32EoyPU%2BHRSkpgeDIXAaCNDPYB0aAbxFsilgrcxyol5q1E0jRd6PnLVQ5H2lZ8zy0oWpYLvJlgyzWNJTCAJqxmY3xORtxl0ILn5aOGo0QnbwVsC3Ss3q39%2F%2B2nLJ2yJ5lfZ%2FAb3cz0D8OU7%2FSTISUP3t5NWA5C5tpWZjOekTp3ax5otTS%2F3%2FSnyyzjzFNE%2BqZtFPeX5EVrradkc2NFlLGJwQvkKMI0MKZqqM8WsCYpvTFlTrw6tt0%2FLwKfCB%2FGYoBrK6dwVhdaxszQC8zadW00OHjHZrW5OFiQ06OG0n9kziiv8oti5vJCRb%2BRJMqi2Z0KsyQHoDsqdQSwMOmcs80GOqUBcd2tq%2BQKusOuUaH1Yo%2FE7Jw5lGNIJIg6kLtbB0VZj4kGaWuFMQtocMBEW8e5kBhbPPFg2ysc4UHW%2B3ZgEgv%2Bb838Ps7NugDkgqOkr6f7MMdYghbSXA9OMvM3zWjH8j0AFK0xGO318m2pOdyqQ6Mlpvvis2y0HWJvPUtlLzcL94w42909HUwQrgn4VI2q0DIcU50ATtKkw1uvbc0RMblQ1e5uzVzt&X-Amz-Signature=9ee69b98fc592933af6bcc7a96af7cc3f67d977adb4cae5503a74488cf44b2d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5CK2YX3%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDz4bJnJZvmcrTsqTRU6PRV6ggmkL4gPcG%2BmJ%2BXd7f8lwIgD9EV871TxMw7vz1dU3BrhmcJSnL6lLJPYSQ%2FFSNPybAq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDHRLa7xYRUQoxiCeDircA2%2FOfXwz8paXEoDkzUQLIoiZNnteLmMh9l8up1i8iOO6azsGX6CURT4V3P90luGyw6UsaoR4LQl%2Fbqj4hEBUzHx2JGoAca80zc9t5w7cCQaOtEhzCy3iUeNkSVoo96oaDZdYsPRbJZ7UxxYYmeQfS1Vy%2BsTe%2FLz%2BlHo%2F5AtLfUVTTU5AbRDmGw8WBHLnuMyS6z7BdNMSWpPWa%2BasIooGRk3J4UL8CDHVyf0233xHykno6KmV4JMyg07%2FPl%2B7tPFbDlqQFu2Gh9C7I%2FtHJmg%2F0XtxsqmqsvqnnCBLInjHUkY8XW3Zx%2F3WkGP8WZMO9PXHwaGw9Z%2Bvi12loKIU0WV66JDAqI%2FHCNJQl2ZCZWa4THBGd80CivXRnqABt5iZOfqgHSXP4ZLTnAZ8SuzSZyvKDuv4YWUiRkOsCjSIr8ftgbD4NeaddNJrfroR%2BiYa5sqZpHehlXsWuYSQmOZjAsXE9IvVNXdTNxcxGdIS%2BsWecCqW1VL3WpYfh7f6FYxM4lDWHtF9NKalvqUNxpIIA9SI6vfuToaqK7Bf4ZAF%2FwAiOs7UKdl7ALBcSn%2FM4Fkh%2BP2pti8uwW%2FasG7QD48qy%2FsiAeGk2R6eFsLp522RJxSaz58OCjvwbE1x0UaEguugMOScs80GOqUBLPgaxRuhcDAQwy7mmMImSIgQoz8bYRoyFOwozvPQ33dUgjqq47cqOaKRA%2BnZFMCQ8yJC5byOAKJaOBXMYnMe%2F%2BGRXyEWucQ%2F326qkyZBak%2FFUawvz84vDp19bXzQYDnSmyHbHTXphxMmPGUq3UnKI7QMuqQL2je7Pb6tob%2FUM66OHHBGhItNDO%2BktSmivKLrEEmWRO2g4HyIGQRvZ8QO2eJeq9WA&X-Amz-Signature=e7996a1a168377f96e72070cb9e32297657ce6c33fd3ad17358885251010a291&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5CK2YX3%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDz4bJnJZvmcrTsqTRU6PRV6ggmkL4gPcG%2BmJ%2BXd7f8lwIgD9EV871TxMw7vz1dU3BrhmcJSnL6lLJPYSQ%2FFSNPybAq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDHRLa7xYRUQoxiCeDircA2%2FOfXwz8paXEoDkzUQLIoiZNnteLmMh9l8up1i8iOO6azsGX6CURT4V3P90luGyw6UsaoR4LQl%2Fbqj4hEBUzHx2JGoAca80zc9t5w7cCQaOtEhzCy3iUeNkSVoo96oaDZdYsPRbJZ7UxxYYmeQfS1Vy%2BsTe%2FLz%2BlHo%2F5AtLfUVTTU5AbRDmGw8WBHLnuMyS6z7BdNMSWpPWa%2BasIooGRk3J4UL8CDHVyf0233xHykno6KmV4JMyg07%2FPl%2B7tPFbDlqQFu2Gh9C7I%2FtHJmg%2F0XtxsqmqsvqnnCBLInjHUkY8XW3Zx%2F3WkGP8WZMO9PXHwaGw9Z%2Bvi12loKIU0WV66JDAqI%2FHCNJQl2ZCZWa4THBGd80CivXRnqABt5iZOfqgHSXP4ZLTnAZ8SuzSZyvKDuv4YWUiRkOsCjSIr8ftgbD4NeaddNJrfroR%2BiYa5sqZpHehlXsWuYSQmOZjAsXE9IvVNXdTNxcxGdIS%2BsWecCqW1VL3WpYfh7f6FYxM4lDWHtF9NKalvqUNxpIIA9SI6vfuToaqK7Bf4ZAF%2FwAiOs7UKdl7ALBcSn%2FM4Fkh%2BP2pti8uwW%2FasG7QD48qy%2FsiAeGk2R6eFsLp522RJxSaz58OCjvwbE1x0UaEguugMOScs80GOqUBLPgaxRuhcDAQwy7mmMImSIgQoz8bYRoyFOwozvPQ33dUgjqq47cqOaKRA%2BnZFMCQ8yJC5byOAKJaOBXMYnMe%2F%2BGRXyEWucQ%2F326qkyZBak%2FFUawvz84vDp19bXzQYDnSmyHbHTXphxMmPGUq3UnKI7QMuqQL2je7Pb6tob%2FUM66OHHBGhItNDO%2BktSmivKLrEEmWRO2g4HyIGQRvZ8QO2eJeq9WA&X-Amz-Signature=a55d43c82bbf91894822d806b1077ac52953e2b05ad26ae0ea1fc9d977fe5073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5CK2YX3%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDz4bJnJZvmcrTsqTRU6PRV6ggmkL4gPcG%2BmJ%2BXd7f8lwIgD9EV871TxMw7vz1dU3BrhmcJSnL6lLJPYSQ%2FFSNPybAq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDHRLa7xYRUQoxiCeDircA2%2FOfXwz8paXEoDkzUQLIoiZNnteLmMh9l8up1i8iOO6azsGX6CURT4V3P90luGyw6UsaoR4LQl%2Fbqj4hEBUzHx2JGoAca80zc9t5w7cCQaOtEhzCy3iUeNkSVoo96oaDZdYsPRbJZ7UxxYYmeQfS1Vy%2BsTe%2FLz%2BlHo%2F5AtLfUVTTU5AbRDmGw8WBHLnuMyS6z7BdNMSWpPWa%2BasIooGRk3J4UL8CDHVyf0233xHykno6KmV4JMyg07%2FPl%2B7tPFbDlqQFu2Gh9C7I%2FtHJmg%2F0XtxsqmqsvqnnCBLInjHUkY8XW3Zx%2F3WkGP8WZMO9PXHwaGw9Z%2Bvi12loKIU0WV66JDAqI%2FHCNJQl2ZCZWa4THBGd80CivXRnqABt5iZOfqgHSXP4ZLTnAZ8SuzSZyvKDuv4YWUiRkOsCjSIr8ftgbD4NeaddNJrfroR%2BiYa5sqZpHehlXsWuYSQmOZjAsXE9IvVNXdTNxcxGdIS%2BsWecCqW1VL3WpYfh7f6FYxM4lDWHtF9NKalvqUNxpIIA9SI6vfuToaqK7Bf4ZAF%2FwAiOs7UKdl7ALBcSn%2FM4Fkh%2BP2pti8uwW%2FasG7QD48qy%2FsiAeGk2R6eFsLp522RJxSaz58OCjvwbE1x0UaEguugMOScs80GOqUBLPgaxRuhcDAQwy7mmMImSIgQoz8bYRoyFOwozvPQ33dUgjqq47cqOaKRA%2BnZFMCQ8yJC5byOAKJaOBXMYnMe%2F%2BGRXyEWucQ%2F326qkyZBak%2FFUawvz84vDp19bXzQYDnSmyHbHTXphxMmPGUq3UnKI7QMuqQL2je7Pb6tob%2FUM66OHHBGhItNDO%2BktSmivKLrEEmWRO2g4HyIGQRvZ8QO2eJeq9WA&X-Amz-Signature=42a56cc7bdd68ac20e65f9ee926eedab167aa102c132a5e0040d6b2c8e3a7cb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5CK2YX3%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDz4bJnJZvmcrTsqTRU6PRV6ggmkL4gPcG%2BmJ%2BXd7f8lwIgD9EV871TxMw7vz1dU3BrhmcJSnL6lLJPYSQ%2FFSNPybAq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDHRLa7xYRUQoxiCeDircA2%2FOfXwz8paXEoDkzUQLIoiZNnteLmMh9l8up1i8iOO6azsGX6CURT4V3P90luGyw6UsaoR4LQl%2Fbqj4hEBUzHx2JGoAca80zc9t5w7cCQaOtEhzCy3iUeNkSVoo96oaDZdYsPRbJZ7UxxYYmeQfS1Vy%2BsTe%2FLz%2BlHo%2F5AtLfUVTTU5AbRDmGw8WBHLnuMyS6z7BdNMSWpPWa%2BasIooGRk3J4UL8CDHVyf0233xHykno6KmV4JMyg07%2FPl%2B7tPFbDlqQFu2Gh9C7I%2FtHJmg%2F0XtxsqmqsvqnnCBLInjHUkY8XW3Zx%2F3WkGP8WZMO9PXHwaGw9Z%2Bvi12loKIU0WV66JDAqI%2FHCNJQl2ZCZWa4THBGd80CivXRnqABt5iZOfqgHSXP4ZLTnAZ8SuzSZyvKDuv4YWUiRkOsCjSIr8ftgbD4NeaddNJrfroR%2BiYa5sqZpHehlXsWuYSQmOZjAsXE9IvVNXdTNxcxGdIS%2BsWecCqW1VL3WpYfh7f6FYxM4lDWHtF9NKalvqUNxpIIA9SI6vfuToaqK7Bf4ZAF%2FwAiOs7UKdl7ALBcSn%2FM4Fkh%2BP2pti8uwW%2FasG7QD48qy%2FsiAeGk2R6eFsLp522RJxSaz58OCjvwbE1x0UaEguugMOScs80GOqUBLPgaxRuhcDAQwy7mmMImSIgQoz8bYRoyFOwozvPQ33dUgjqq47cqOaKRA%2BnZFMCQ8yJC5byOAKJaOBXMYnMe%2F%2BGRXyEWucQ%2F326qkyZBak%2FFUawvz84vDp19bXzQYDnSmyHbHTXphxMmPGUq3UnKI7QMuqQL2je7Pb6tob%2FUM66OHHBGhItNDO%2BktSmivKLrEEmWRO2g4HyIGQRvZ8QO2eJeq9WA&X-Amz-Signature=8f4cec711d25168f0f948ebcabe942f6d63cf573c4e6bb284dd750384df07b9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5CK2YX3%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDz4bJnJZvmcrTsqTRU6PRV6ggmkL4gPcG%2BmJ%2BXd7f8lwIgD9EV871TxMw7vz1dU3BrhmcJSnL6lLJPYSQ%2FFSNPybAq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDHRLa7xYRUQoxiCeDircA2%2FOfXwz8paXEoDkzUQLIoiZNnteLmMh9l8up1i8iOO6azsGX6CURT4V3P90luGyw6UsaoR4LQl%2Fbqj4hEBUzHx2JGoAca80zc9t5w7cCQaOtEhzCy3iUeNkSVoo96oaDZdYsPRbJZ7UxxYYmeQfS1Vy%2BsTe%2FLz%2BlHo%2F5AtLfUVTTU5AbRDmGw8WBHLnuMyS6z7BdNMSWpPWa%2BasIooGRk3J4UL8CDHVyf0233xHykno6KmV4JMyg07%2FPl%2B7tPFbDlqQFu2Gh9C7I%2FtHJmg%2F0XtxsqmqsvqnnCBLInjHUkY8XW3Zx%2F3WkGP8WZMO9PXHwaGw9Z%2Bvi12loKIU0WV66JDAqI%2FHCNJQl2ZCZWa4THBGd80CivXRnqABt5iZOfqgHSXP4ZLTnAZ8SuzSZyvKDuv4YWUiRkOsCjSIr8ftgbD4NeaddNJrfroR%2BiYa5sqZpHehlXsWuYSQmOZjAsXE9IvVNXdTNxcxGdIS%2BsWecCqW1VL3WpYfh7f6FYxM4lDWHtF9NKalvqUNxpIIA9SI6vfuToaqK7Bf4ZAF%2FwAiOs7UKdl7ALBcSn%2FM4Fkh%2BP2pti8uwW%2FasG7QD48qy%2FsiAeGk2R6eFsLp522RJxSaz58OCjvwbE1x0UaEguugMOScs80GOqUBLPgaxRuhcDAQwy7mmMImSIgQoz8bYRoyFOwozvPQ33dUgjqq47cqOaKRA%2BnZFMCQ8yJC5byOAKJaOBXMYnMe%2F%2BGRXyEWucQ%2F326qkyZBak%2FFUawvz84vDp19bXzQYDnSmyHbHTXphxMmPGUq3UnKI7QMuqQL2je7Pb6tob%2FUM66OHHBGhItNDO%2BktSmivKLrEEmWRO2g4HyIGQRvZ8QO2eJeq9WA&X-Amz-Signature=6580328ba87d1777518b60f129e6d357acfe0582bba4cc341cf1ee12cbcf2258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5CK2YX3%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDz4bJnJZvmcrTsqTRU6PRV6ggmkL4gPcG%2BmJ%2BXd7f8lwIgD9EV871TxMw7vz1dU3BrhmcJSnL6lLJPYSQ%2FFSNPybAq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDHRLa7xYRUQoxiCeDircA2%2FOfXwz8paXEoDkzUQLIoiZNnteLmMh9l8up1i8iOO6azsGX6CURT4V3P90luGyw6UsaoR4LQl%2Fbqj4hEBUzHx2JGoAca80zc9t5w7cCQaOtEhzCy3iUeNkSVoo96oaDZdYsPRbJZ7UxxYYmeQfS1Vy%2BsTe%2FLz%2BlHo%2F5AtLfUVTTU5AbRDmGw8WBHLnuMyS6z7BdNMSWpPWa%2BasIooGRk3J4UL8CDHVyf0233xHykno6KmV4JMyg07%2FPl%2B7tPFbDlqQFu2Gh9C7I%2FtHJmg%2F0XtxsqmqsvqnnCBLInjHUkY8XW3Zx%2F3WkGP8WZMO9PXHwaGw9Z%2Bvi12loKIU0WV66JDAqI%2FHCNJQl2ZCZWa4THBGd80CivXRnqABt5iZOfqgHSXP4ZLTnAZ8SuzSZyvKDuv4YWUiRkOsCjSIr8ftgbD4NeaddNJrfroR%2BiYa5sqZpHehlXsWuYSQmOZjAsXE9IvVNXdTNxcxGdIS%2BsWecCqW1VL3WpYfh7f6FYxM4lDWHtF9NKalvqUNxpIIA9SI6vfuToaqK7Bf4ZAF%2FwAiOs7UKdl7ALBcSn%2FM4Fkh%2BP2pti8uwW%2FasG7QD48qy%2FsiAeGk2R6eFsLp522RJxSaz58OCjvwbE1x0UaEguugMOScs80GOqUBLPgaxRuhcDAQwy7mmMImSIgQoz8bYRoyFOwozvPQ33dUgjqq47cqOaKRA%2BnZFMCQ8yJC5byOAKJaOBXMYnMe%2F%2BGRXyEWucQ%2F326qkyZBak%2FFUawvz84vDp19bXzQYDnSmyHbHTXphxMmPGUq3UnKI7QMuqQL2je7Pb6tob%2FUM66OHHBGhItNDO%2BktSmivKLrEEmWRO2g4HyIGQRvZ8QO2eJeq9WA&X-Amz-Signature=a4a40813da67f9ae9617ec133b737258f504905c80ded50c62a0ea465d642e43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


