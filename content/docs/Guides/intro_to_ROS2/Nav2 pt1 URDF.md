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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWVQIKR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPuU7SxR36XIWR5opEpWfP%2BqLcae2u4WZDUjnWlGHP2gIhAO8Rd9bn40k%2B8Cb3CKuE%2FB2JhsGE1e1amNkbQbhiF2cBKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxZ5TLbiNkiGx5%2BJgq3AOVYjL2rgkfv%2FHsVLzEpZL72sV7FdgYG6KRZQ6IwH2WX60QTDbSiWA7RquntwHKitnVCNqmtXZdYV8XqpgKrdsy57hHDIOQXoCqYcSm7KHPT2OSyRXiZ33KtCSJLy2kn5FQ7qHYs3MZcUCllD562mTtgzQsZuR3Melh46PE0svBPRTc3j3fKhxkqPPfY5UOMyPSYWKTyoi6SFXSCXzsTaBbZNOmpCCA%2FeHCa%2F0CDWGx45BIw4tQXqoHyqyspwrfXeFZDCnTlfhH%2Ba2ZFTP3Zk8XfVI6JxWgqxKMZa%2Fq1pTPN%2Bbi8ZusxExUw5mAiWxc%2FgXIDKOko%2Bqf5yh6gC4qMbm2jJfOrabm9yiKWhJQi0ZLbTE%2BP1awFggylimQGrQFxb2yttcqFM4bMUru7e8oLsAw80bUBuObuPaN0xiY2WdFeIlsurfqZd2eqOFLgVmbgPvv5cPAQWmwLXNeTblt3sjsSgFMxLZqD%2BXQDPaeq1838Frhn1hEvRYiPkeclA7JZiRL7OkjLooRHDQ5LpgrcD2fOnGq8Avkv0WUlzN0kvgIZ35zuQ9hS8RWSHRSSPT0HzIMa9Zb53tIB%2BOJ1I83Ng%2B15sy2n1dpX%2FV1C7lm5FNdatfwbC8Su3LTB6YTTTCguuPEBjqkAYTLocujQkhmC28DTXQCEX%2FFdmVCIX3qN%2Fdyl61bRkVNQRYUvTFrWo2gioPw97Jm3wAXiIz8B6QPs9o9aiCnnTlmvCnnsDlm4QmCOpCCWRKmf%2Bm7QcNsWNkq%2BRgcvQ%2FGQoGsbt6yRxuQBla5POcp9%2BXWYK6rWnrn3bi9FMOrK5%2FnFeWE1XDHQhVMYuaFZ9F%2BjIYZkk8sns5nBs0bYeAtrgUNS4xi&X-Amz-Signature=858db912a4ad417a659f638e9023c91fdc00e146bee8545a92d5d5d750ed9b2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWVQIKR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPuU7SxR36XIWR5opEpWfP%2BqLcae2u4WZDUjnWlGHP2gIhAO8Rd9bn40k%2B8Cb3CKuE%2FB2JhsGE1e1amNkbQbhiF2cBKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxZ5TLbiNkiGx5%2BJgq3AOVYjL2rgkfv%2FHsVLzEpZL72sV7FdgYG6KRZQ6IwH2WX60QTDbSiWA7RquntwHKitnVCNqmtXZdYV8XqpgKrdsy57hHDIOQXoCqYcSm7KHPT2OSyRXiZ33KtCSJLy2kn5FQ7qHYs3MZcUCllD562mTtgzQsZuR3Melh46PE0svBPRTc3j3fKhxkqPPfY5UOMyPSYWKTyoi6SFXSCXzsTaBbZNOmpCCA%2FeHCa%2F0CDWGx45BIw4tQXqoHyqyspwrfXeFZDCnTlfhH%2Ba2ZFTP3Zk8XfVI6JxWgqxKMZa%2Fq1pTPN%2Bbi8ZusxExUw5mAiWxc%2FgXIDKOko%2Bqf5yh6gC4qMbm2jJfOrabm9yiKWhJQi0ZLbTE%2BP1awFggylimQGrQFxb2yttcqFM4bMUru7e8oLsAw80bUBuObuPaN0xiY2WdFeIlsurfqZd2eqOFLgVmbgPvv5cPAQWmwLXNeTblt3sjsSgFMxLZqD%2BXQDPaeq1838Frhn1hEvRYiPkeclA7JZiRL7OkjLooRHDQ5LpgrcD2fOnGq8Avkv0WUlzN0kvgIZ35zuQ9hS8RWSHRSSPT0HzIMa9Zb53tIB%2BOJ1I83Ng%2B15sy2n1dpX%2FV1C7lm5FNdatfwbC8Su3LTB6YTTTCguuPEBjqkAYTLocujQkhmC28DTXQCEX%2FFdmVCIX3qN%2Fdyl61bRkVNQRYUvTFrWo2gioPw97Jm3wAXiIz8B6QPs9o9aiCnnTlmvCnnsDlm4QmCOpCCWRKmf%2Bm7QcNsWNkq%2BRgcvQ%2FGQoGsbt6yRxuQBla5POcp9%2BXWYK6rWnrn3bi9FMOrK5%2FnFeWE1XDHQhVMYuaFZ9F%2BjIYZkk8sns5nBs0bYeAtrgUNS4xi&X-Amz-Signature=18228815a7ba0d4ff07adaadc3c31e8140aab5a833cb2e144a91c1bae7e61083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWVQIKR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPuU7SxR36XIWR5opEpWfP%2BqLcae2u4WZDUjnWlGHP2gIhAO8Rd9bn40k%2B8Cb3CKuE%2FB2JhsGE1e1amNkbQbhiF2cBKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxZ5TLbiNkiGx5%2BJgq3AOVYjL2rgkfv%2FHsVLzEpZL72sV7FdgYG6KRZQ6IwH2WX60QTDbSiWA7RquntwHKitnVCNqmtXZdYV8XqpgKrdsy57hHDIOQXoCqYcSm7KHPT2OSyRXiZ33KtCSJLy2kn5FQ7qHYs3MZcUCllD562mTtgzQsZuR3Melh46PE0svBPRTc3j3fKhxkqPPfY5UOMyPSYWKTyoi6SFXSCXzsTaBbZNOmpCCA%2FeHCa%2F0CDWGx45BIw4tQXqoHyqyspwrfXeFZDCnTlfhH%2Ba2ZFTP3Zk8XfVI6JxWgqxKMZa%2Fq1pTPN%2Bbi8ZusxExUw5mAiWxc%2FgXIDKOko%2Bqf5yh6gC4qMbm2jJfOrabm9yiKWhJQi0ZLbTE%2BP1awFggylimQGrQFxb2yttcqFM4bMUru7e8oLsAw80bUBuObuPaN0xiY2WdFeIlsurfqZd2eqOFLgVmbgPvv5cPAQWmwLXNeTblt3sjsSgFMxLZqD%2BXQDPaeq1838Frhn1hEvRYiPkeclA7JZiRL7OkjLooRHDQ5LpgrcD2fOnGq8Avkv0WUlzN0kvgIZ35zuQ9hS8RWSHRSSPT0HzIMa9Zb53tIB%2BOJ1I83Ng%2B15sy2n1dpX%2FV1C7lm5FNdatfwbC8Su3LTB6YTTTCguuPEBjqkAYTLocujQkhmC28DTXQCEX%2FFdmVCIX3qN%2Fdyl61bRkVNQRYUvTFrWo2gioPw97Jm3wAXiIz8B6QPs9o9aiCnnTlmvCnnsDlm4QmCOpCCWRKmf%2Bm7QcNsWNkq%2BRgcvQ%2FGQoGsbt6yRxuQBla5POcp9%2BXWYK6rWnrn3bi9FMOrK5%2FnFeWE1XDHQhVMYuaFZ9F%2BjIYZkk8sns5nBs0bYeAtrgUNS4xi&X-Amz-Signature=f5097885548187d3d565a5c0823697155cb1238d97900c8547ba81ce89d8e4cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWVQIKR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPuU7SxR36XIWR5opEpWfP%2BqLcae2u4WZDUjnWlGHP2gIhAO8Rd9bn40k%2B8Cb3CKuE%2FB2JhsGE1e1amNkbQbhiF2cBKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxZ5TLbiNkiGx5%2BJgq3AOVYjL2rgkfv%2FHsVLzEpZL72sV7FdgYG6KRZQ6IwH2WX60QTDbSiWA7RquntwHKitnVCNqmtXZdYV8XqpgKrdsy57hHDIOQXoCqYcSm7KHPT2OSyRXiZ33KtCSJLy2kn5FQ7qHYs3MZcUCllD562mTtgzQsZuR3Melh46PE0svBPRTc3j3fKhxkqPPfY5UOMyPSYWKTyoi6SFXSCXzsTaBbZNOmpCCA%2FeHCa%2F0CDWGx45BIw4tQXqoHyqyspwrfXeFZDCnTlfhH%2Ba2ZFTP3Zk8XfVI6JxWgqxKMZa%2Fq1pTPN%2Bbi8ZusxExUw5mAiWxc%2FgXIDKOko%2Bqf5yh6gC4qMbm2jJfOrabm9yiKWhJQi0ZLbTE%2BP1awFggylimQGrQFxb2yttcqFM4bMUru7e8oLsAw80bUBuObuPaN0xiY2WdFeIlsurfqZd2eqOFLgVmbgPvv5cPAQWmwLXNeTblt3sjsSgFMxLZqD%2BXQDPaeq1838Frhn1hEvRYiPkeclA7JZiRL7OkjLooRHDQ5LpgrcD2fOnGq8Avkv0WUlzN0kvgIZ35zuQ9hS8RWSHRSSPT0HzIMa9Zb53tIB%2BOJ1I83Ng%2B15sy2n1dpX%2FV1C7lm5FNdatfwbC8Su3LTB6YTTTCguuPEBjqkAYTLocujQkhmC28DTXQCEX%2FFdmVCIX3qN%2Fdyl61bRkVNQRYUvTFrWo2gioPw97Jm3wAXiIz8B6QPs9o9aiCnnTlmvCnnsDlm4QmCOpCCWRKmf%2Bm7QcNsWNkq%2BRgcvQ%2FGQoGsbt6yRxuQBla5POcp9%2BXWYK6rWnrn3bi9FMOrK5%2FnFeWE1XDHQhVMYuaFZ9F%2BjIYZkk8sns5nBs0bYeAtrgUNS4xi&X-Amz-Signature=f620c3a9fb935098c8138ed0939758468b036de3daee72fa67390b9fc459c9da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWVQIKR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPuU7SxR36XIWR5opEpWfP%2BqLcae2u4WZDUjnWlGHP2gIhAO8Rd9bn40k%2B8Cb3CKuE%2FB2JhsGE1e1amNkbQbhiF2cBKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxZ5TLbiNkiGx5%2BJgq3AOVYjL2rgkfv%2FHsVLzEpZL72sV7FdgYG6KRZQ6IwH2WX60QTDbSiWA7RquntwHKitnVCNqmtXZdYV8XqpgKrdsy57hHDIOQXoCqYcSm7KHPT2OSyRXiZ33KtCSJLy2kn5FQ7qHYs3MZcUCllD562mTtgzQsZuR3Melh46PE0svBPRTc3j3fKhxkqPPfY5UOMyPSYWKTyoi6SFXSCXzsTaBbZNOmpCCA%2FeHCa%2F0CDWGx45BIw4tQXqoHyqyspwrfXeFZDCnTlfhH%2Ba2ZFTP3Zk8XfVI6JxWgqxKMZa%2Fq1pTPN%2Bbi8ZusxExUw5mAiWxc%2FgXIDKOko%2Bqf5yh6gC4qMbm2jJfOrabm9yiKWhJQi0ZLbTE%2BP1awFggylimQGrQFxb2yttcqFM4bMUru7e8oLsAw80bUBuObuPaN0xiY2WdFeIlsurfqZd2eqOFLgVmbgPvv5cPAQWmwLXNeTblt3sjsSgFMxLZqD%2BXQDPaeq1838Frhn1hEvRYiPkeclA7JZiRL7OkjLooRHDQ5LpgrcD2fOnGq8Avkv0WUlzN0kvgIZ35zuQ9hS8RWSHRSSPT0HzIMa9Zb53tIB%2BOJ1I83Ng%2B15sy2n1dpX%2FV1C7lm5FNdatfwbC8Su3LTB6YTTTCguuPEBjqkAYTLocujQkhmC28DTXQCEX%2FFdmVCIX3qN%2Fdyl61bRkVNQRYUvTFrWo2gioPw97Jm3wAXiIz8B6QPs9o9aiCnnTlmvCnnsDlm4QmCOpCCWRKmf%2Bm7QcNsWNkq%2BRgcvQ%2FGQoGsbt6yRxuQBla5POcp9%2BXWYK6rWnrn3bi9FMOrK5%2FnFeWE1XDHQhVMYuaFZ9F%2BjIYZkk8sns5nBs0bYeAtrgUNS4xi&X-Amz-Signature=d592fca2bf060efb2756e5beba47c1f2db658cdb6d0731574689d5a71b8501f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWVQIKR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPuU7SxR36XIWR5opEpWfP%2BqLcae2u4WZDUjnWlGHP2gIhAO8Rd9bn40k%2B8Cb3CKuE%2FB2JhsGE1e1amNkbQbhiF2cBKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxZ5TLbiNkiGx5%2BJgq3AOVYjL2rgkfv%2FHsVLzEpZL72sV7FdgYG6KRZQ6IwH2WX60QTDbSiWA7RquntwHKitnVCNqmtXZdYV8XqpgKrdsy57hHDIOQXoCqYcSm7KHPT2OSyRXiZ33KtCSJLy2kn5FQ7qHYs3MZcUCllD562mTtgzQsZuR3Melh46PE0svBPRTc3j3fKhxkqPPfY5UOMyPSYWKTyoi6SFXSCXzsTaBbZNOmpCCA%2FeHCa%2F0CDWGx45BIw4tQXqoHyqyspwrfXeFZDCnTlfhH%2Ba2ZFTP3Zk8XfVI6JxWgqxKMZa%2Fq1pTPN%2Bbi8ZusxExUw5mAiWxc%2FgXIDKOko%2Bqf5yh6gC4qMbm2jJfOrabm9yiKWhJQi0ZLbTE%2BP1awFggylimQGrQFxb2yttcqFM4bMUru7e8oLsAw80bUBuObuPaN0xiY2WdFeIlsurfqZd2eqOFLgVmbgPvv5cPAQWmwLXNeTblt3sjsSgFMxLZqD%2BXQDPaeq1838Frhn1hEvRYiPkeclA7JZiRL7OkjLooRHDQ5LpgrcD2fOnGq8Avkv0WUlzN0kvgIZ35zuQ9hS8RWSHRSSPT0HzIMa9Zb53tIB%2BOJ1I83Ng%2B15sy2n1dpX%2FV1C7lm5FNdatfwbC8Su3LTB6YTTTCguuPEBjqkAYTLocujQkhmC28DTXQCEX%2FFdmVCIX3qN%2Fdyl61bRkVNQRYUvTFrWo2gioPw97Jm3wAXiIz8B6QPs9o9aiCnnTlmvCnnsDlm4QmCOpCCWRKmf%2Bm7QcNsWNkq%2BRgcvQ%2FGQoGsbt6yRxuQBla5POcp9%2BXWYK6rWnrn3bi9FMOrK5%2FnFeWE1XDHQhVMYuaFZ9F%2BjIYZkk8sns5nBs0bYeAtrgUNS4xi&X-Amz-Signature=18324c096701fa15ef18f8457827ce95f929b2fb06bac069f2e836ae566890a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWVQIKR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPuU7SxR36XIWR5opEpWfP%2BqLcae2u4WZDUjnWlGHP2gIhAO8Rd9bn40k%2B8Cb3CKuE%2FB2JhsGE1e1amNkbQbhiF2cBKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxZ5TLbiNkiGx5%2BJgq3AOVYjL2rgkfv%2FHsVLzEpZL72sV7FdgYG6KRZQ6IwH2WX60QTDbSiWA7RquntwHKitnVCNqmtXZdYV8XqpgKrdsy57hHDIOQXoCqYcSm7KHPT2OSyRXiZ33KtCSJLy2kn5FQ7qHYs3MZcUCllD562mTtgzQsZuR3Melh46PE0svBPRTc3j3fKhxkqPPfY5UOMyPSYWKTyoi6SFXSCXzsTaBbZNOmpCCA%2FeHCa%2F0CDWGx45BIw4tQXqoHyqyspwrfXeFZDCnTlfhH%2Ba2ZFTP3Zk8XfVI6JxWgqxKMZa%2Fq1pTPN%2Bbi8ZusxExUw5mAiWxc%2FgXIDKOko%2Bqf5yh6gC4qMbm2jJfOrabm9yiKWhJQi0ZLbTE%2BP1awFggylimQGrQFxb2yttcqFM4bMUru7e8oLsAw80bUBuObuPaN0xiY2WdFeIlsurfqZd2eqOFLgVmbgPvv5cPAQWmwLXNeTblt3sjsSgFMxLZqD%2BXQDPaeq1838Frhn1hEvRYiPkeclA7JZiRL7OkjLooRHDQ5LpgrcD2fOnGq8Avkv0WUlzN0kvgIZ35zuQ9hS8RWSHRSSPT0HzIMa9Zb53tIB%2BOJ1I83Ng%2B15sy2n1dpX%2FV1C7lm5FNdatfwbC8Su3LTB6YTTTCguuPEBjqkAYTLocujQkhmC28DTXQCEX%2FFdmVCIX3qN%2Fdyl61bRkVNQRYUvTFrWo2gioPw97Jm3wAXiIz8B6QPs9o9aiCnnTlmvCnnsDlm4QmCOpCCWRKmf%2Bm7QcNsWNkq%2BRgcvQ%2FGQoGsbt6yRxuQBla5POcp9%2BXWYK6rWnrn3bi9FMOrK5%2FnFeWE1XDHQhVMYuaFZ9F%2BjIYZkk8sns5nBs0bYeAtrgUNS4xi&X-Amz-Signature=26e79d0907cc2e3c24259462e8de5945a3f8293fe51b3e6fbbd3920c455f52e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWVQIKR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPuU7SxR36XIWR5opEpWfP%2BqLcae2u4WZDUjnWlGHP2gIhAO8Rd9bn40k%2B8Cb3CKuE%2FB2JhsGE1e1amNkbQbhiF2cBKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxZ5TLbiNkiGx5%2BJgq3AOVYjL2rgkfv%2FHsVLzEpZL72sV7FdgYG6KRZQ6IwH2WX60QTDbSiWA7RquntwHKitnVCNqmtXZdYV8XqpgKrdsy57hHDIOQXoCqYcSm7KHPT2OSyRXiZ33KtCSJLy2kn5FQ7qHYs3MZcUCllD562mTtgzQsZuR3Melh46PE0svBPRTc3j3fKhxkqPPfY5UOMyPSYWKTyoi6SFXSCXzsTaBbZNOmpCCA%2FeHCa%2F0CDWGx45BIw4tQXqoHyqyspwrfXeFZDCnTlfhH%2Ba2ZFTP3Zk8XfVI6JxWgqxKMZa%2Fq1pTPN%2Bbi8ZusxExUw5mAiWxc%2FgXIDKOko%2Bqf5yh6gC4qMbm2jJfOrabm9yiKWhJQi0ZLbTE%2BP1awFggylimQGrQFxb2yttcqFM4bMUru7e8oLsAw80bUBuObuPaN0xiY2WdFeIlsurfqZd2eqOFLgVmbgPvv5cPAQWmwLXNeTblt3sjsSgFMxLZqD%2BXQDPaeq1838Frhn1hEvRYiPkeclA7JZiRL7OkjLooRHDQ5LpgrcD2fOnGq8Avkv0WUlzN0kvgIZ35zuQ9hS8RWSHRSSPT0HzIMa9Zb53tIB%2BOJ1I83Ng%2B15sy2n1dpX%2FV1C7lm5FNdatfwbC8Su3LTB6YTTTCguuPEBjqkAYTLocujQkhmC28DTXQCEX%2FFdmVCIX3qN%2Fdyl61bRkVNQRYUvTFrWo2gioPw97Jm3wAXiIz8B6QPs9o9aiCnnTlmvCnnsDlm4QmCOpCCWRKmf%2Bm7QcNsWNkq%2BRgcvQ%2FGQoGsbt6yRxuQBla5POcp9%2BXWYK6rWnrn3bi9FMOrK5%2FnFeWE1XDHQhVMYuaFZ9F%2BjIYZkk8sns5nBs0bYeAtrgUNS4xi&X-Amz-Signature=eec3f3ac638d20c08056246c976aeeae0d0f548fe1b38baa31adc0b737137b27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWVQIKR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPuU7SxR36XIWR5opEpWfP%2BqLcae2u4WZDUjnWlGHP2gIhAO8Rd9bn40k%2B8Cb3CKuE%2FB2JhsGE1e1amNkbQbhiF2cBKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxZ5TLbiNkiGx5%2BJgq3AOVYjL2rgkfv%2FHsVLzEpZL72sV7FdgYG6KRZQ6IwH2WX60QTDbSiWA7RquntwHKitnVCNqmtXZdYV8XqpgKrdsy57hHDIOQXoCqYcSm7KHPT2OSyRXiZ33KtCSJLy2kn5FQ7qHYs3MZcUCllD562mTtgzQsZuR3Melh46PE0svBPRTc3j3fKhxkqPPfY5UOMyPSYWKTyoi6SFXSCXzsTaBbZNOmpCCA%2FeHCa%2F0CDWGx45BIw4tQXqoHyqyspwrfXeFZDCnTlfhH%2Ba2ZFTP3Zk8XfVI6JxWgqxKMZa%2Fq1pTPN%2Bbi8ZusxExUw5mAiWxc%2FgXIDKOko%2Bqf5yh6gC4qMbm2jJfOrabm9yiKWhJQi0ZLbTE%2BP1awFggylimQGrQFxb2yttcqFM4bMUru7e8oLsAw80bUBuObuPaN0xiY2WdFeIlsurfqZd2eqOFLgVmbgPvv5cPAQWmwLXNeTblt3sjsSgFMxLZqD%2BXQDPaeq1838Frhn1hEvRYiPkeclA7JZiRL7OkjLooRHDQ5LpgrcD2fOnGq8Avkv0WUlzN0kvgIZ35zuQ9hS8RWSHRSSPT0HzIMa9Zb53tIB%2BOJ1I83Ng%2B15sy2n1dpX%2FV1C7lm5FNdatfwbC8Su3LTB6YTTTCguuPEBjqkAYTLocujQkhmC28DTXQCEX%2FFdmVCIX3qN%2Fdyl61bRkVNQRYUvTFrWo2gioPw97Jm3wAXiIz8B6QPs9o9aiCnnTlmvCnnsDlm4QmCOpCCWRKmf%2Bm7QcNsWNkq%2BRgcvQ%2FGQoGsbt6yRxuQBla5POcp9%2BXWYK6rWnrn3bi9FMOrK5%2FnFeWE1XDHQhVMYuaFZ9F%2BjIYZkk8sns5nBs0bYeAtrgUNS4xi&X-Amz-Signature=05c5b773a5eb3291a4656017f7a8989c540fd4741aa4155797ea8e43872532f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWVQIKR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPuU7SxR36XIWR5opEpWfP%2BqLcae2u4WZDUjnWlGHP2gIhAO8Rd9bn40k%2B8Cb3CKuE%2FB2JhsGE1e1amNkbQbhiF2cBKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxZ5TLbiNkiGx5%2BJgq3AOVYjL2rgkfv%2FHsVLzEpZL72sV7FdgYG6KRZQ6IwH2WX60QTDbSiWA7RquntwHKitnVCNqmtXZdYV8XqpgKrdsy57hHDIOQXoCqYcSm7KHPT2OSyRXiZ33KtCSJLy2kn5FQ7qHYs3MZcUCllD562mTtgzQsZuR3Melh46PE0svBPRTc3j3fKhxkqPPfY5UOMyPSYWKTyoi6SFXSCXzsTaBbZNOmpCCA%2FeHCa%2F0CDWGx45BIw4tQXqoHyqyspwrfXeFZDCnTlfhH%2Ba2ZFTP3Zk8XfVI6JxWgqxKMZa%2Fq1pTPN%2Bbi8ZusxExUw5mAiWxc%2FgXIDKOko%2Bqf5yh6gC4qMbm2jJfOrabm9yiKWhJQi0ZLbTE%2BP1awFggylimQGrQFxb2yttcqFM4bMUru7e8oLsAw80bUBuObuPaN0xiY2WdFeIlsurfqZd2eqOFLgVmbgPvv5cPAQWmwLXNeTblt3sjsSgFMxLZqD%2BXQDPaeq1838Frhn1hEvRYiPkeclA7JZiRL7OkjLooRHDQ5LpgrcD2fOnGq8Avkv0WUlzN0kvgIZ35zuQ9hS8RWSHRSSPT0HzIMa9Zb53tIB%2BOJ1I83Ng%2B15sy2n1dpX%2FV1C7lm5FNdatfwbC8Su3LTB6YTTTCguuPEBjqkAYTLocujQkhmC28DTXQCEX%2FFdmVCIX3qN%2Fdyl61bRkVNQRYUvTFrWo2gioPw97Jm3wAXiIz8B6QPs9o9aiCnnTlmvCnnsDlm4QmCOpCCWRKmf%2Bm7QcNsWNkq%2BRgcvQ%2FGQoGsbt6yRxuQBla5POcp9%2BXWYK6rWnrn3bi9FMOrK5%2FnFeWE1XDHQhVMYuaFZ9F%2BjIYZkk8sns5nBs0bYeAtrgUNS4xi&X-Amz-Signature=71528b91ce36a010e419b88d95998158b29796c7f22b0afd1b8d6ea4746ec4d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYUMHBD3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlpdrlFcxsi%2FfVjLoAXzdprN4a63dlbqy6SArwGdKeugIhAMpPdKnr5f0Kh06Ep6FH5lBtbpfRLnrvqagDeDhpqCFFKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx17Iw2xahUg3Jexrgq3APvCNYdCBvmxzTtHMMbZxGO%2FJg8EeBNKw9EDC%2FOmsVjo0QBjfhDKFiba4XHds1wErcBTeOkC0ebBWMseYBQLjB0bLXAsNdhRiNN%2Fv4tu9KURjLHmPYFO0zp1KsczrsF9aGFuhoOx9%2BmxlVZ0V6jIhsElhQc1wIjEBeHxE9qob%2B9TP%2BRY9mPFMw7U%2F%2BJMsSUUlOp2i8UAS4rCMpZy92BTH0ge7yxb2i9q%2BC1j8bKYD1%2Bo2H5hC3H7L0xdtvLsEWVdjUU9EzUMlKNutYZKNbgSY1FS%2B8zUjAP1hWKbEYHsHJdSNA9E%2Fv5EdzjbggSMktfE5cY6R9WOD8FXhQfKCFxDxWfpA0Bq9SZ7TCx8E4caEPlm3E4wv7kmy9YQzNdmM6xMVRHp%2Byf66%2BE7B8nuEsA1cnGUBT3f44fYpKY7KQFLHk5henrDKzHRtqcajHMlQWNC9lmWMAUIPKy9T2iQyMwTsg23LJVzFPbAvXvU6KmuBQLCqJhFfrGMYADx1HqeW2EuswZFnT8m4VgK0QlngP0GZbV%2BIDX8AVaH84%2FDhVG%2FMWfsZRrIK%2BVJWHR%2FzuUYfjG2gx9KrK5My0WmNMQ%2F0txAW3pwsAgu3flBFCDU37uUJzDZOIg0OCxE0XAQyYCpTDauuPEBjqkAYJA6WQTHjSBSHkFNx1jtEc0BoAwApyZvA9lpt%2FhGqs85NC7NqhIMGuAht%2F5xgiY2d%2BJHIzJQtx3%2BxRohLSA%2BXdNTRxnpwOHTLzhGuQP9Vc6Cec5uhXKquAMaa3kr5VsKwAQv7e2cK73Cdx1ZGIjgtTWrPsRy5unkC8a4QENUXd99QgAgHd1kdQP31RvZYh6L5yD5mMMtmVU71Yq5r3VsCYSMJhy&X-Amz-Signature=674d7c206572183d4b7e094a21392c38df83103dd0cddfd5a932242aa203f6f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YRMQCWD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl5sb080W%2BV2P305Dr9fAlstLN3ArgXVweBU20NQnHRQIhANWfxEMG2QrKZyx0tr9e2%2FzXDl94JGhbeU5CtmL2H%2FMrKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4ECG%2BUL9eMQSJZUYq3AOld3Rwt2AEsL09mpBXVRReHoatVhdIO4Xa2eQgXweNSIza8TE4%2Bf4blZEeRK0rWtIqGPquv4fgwNoP6tlieW5MmIXflh6qP8Aj1NosxZc1XC9e9qSYJRPGSxjy2tNCXE1vsGE6N96CD%2BqTOVE4Zlw1WJv1o%2BFBbd4AaKlA6mHEcKUs%2FtUUhTybuICerrdf9%2FTUdWjEu8yKDbqVlLE6d9XFkO%2BlZBvIBvmp7MYSYuR6R7QQ5jhRqJ8KZWvCofSRvlgfoKUKIjFkcYUcQNFP%2BeFlpwvQlVRKcqwImt0kiwAkwg%2BqGaRbrE5V31psiAepQ0JlZ2vpFvXuhbXtsustwKT8fJnfsXJa6kYJoMxPutcrh0g7ULR6KhynJeLYGzS5jTAODwUoeRSKbZA%2B364diMe9oLmLUTT3XyWWFnnYaY34Qhb68231MqyRooDEheT324eKd%2BCRC%2Bm9lXmwhU96uTcUh%2BlMq5FM%2F1PRVRyhhST8H3h8SS2AhDyTXcJjp6mAykRCzFl5msRhni1gkKIFgKtjhCJiVBY9xFFjOEU8ugk%2Fg%2FN0BArOEfYEZsCRnCZ381pWQAXq56QgypTd5bPH%2BqevhSryB7RdkBocFo4QGCwbmNxDmF5w2nU%2FxGqI3DCYuuPEBjqkAUTimbsgWw51gS1ffFGUZgySikr9l5kpWeY6WWb9sVkW4i62HmjT2YS%2BDTooVrMAqn2boySa%2BaMJXC9rnGVPtGxqZFH3%2F2osiMb%2F1%2BHL%2F5GVGlXM%2BuICsPic52b0jwOT4NPbYUtZZLZQS1sAFfJvkgjTYJ4XBwRKUOnkKOiawJt0EIBCQ0r2tEUiOPzEkAjqfjneExxBnqy77rot3ivFgEcyunMW&X-Amz-Signature=7b8a84d6a5441ec43a3cbba1b5ffbcfa8dbf64b16a4b99cb190f2889f126abc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SIJPEE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID17Yegz6lL5tbU1VkDxoQgrR5TMBOjUGrxhTqrDs4RhAiBdU3jEfmOaLwRWiR4NufyL345wdF0ykI6H1kRDkAfkjCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwrANrKPbKvxIk3L5KtwDzF1EqC34n9zvKULSNBal%2FUtFRFfgzHpoXFL24vkEieZwhNqy8PsCb9v%2F4IQTkM3HHdPayfcppAZH%2BGeONKo2Dh2DRAdLlVmr%2F8%2FeBqSIAAPTtNPHRAvqYul2iDAQZs%2B52%2Fd0Uj5LSQZ%2FJHp%2FP043%2Bkdm8shY2DtnSykB1735Web9os8L3ViNT9ZREfgKHOZ3nGXtqtMmgbIN0JEkVEfJMPfoKbQnd%2FCaBmvXMW8vPFx%2B7X0ebs4zG%2BwxgdM7QzZY26toXH55dXHuvJKLVfyZ5PoWhACpK7oBQ00kZmBUh%2FKZTkrXqmoM8%2FoY%2F%2BP24oN5Xi8Y%2Bu%2BzPXoMhcVUvU6aExYg5ou9ELKI%2BYbtrGt38RGTXJgTDYS96PGBIRMAsTTo%2F68dsFirI5BW5ouAotAQ0KmPYMovAVEjVsLFGf0BTeJceoEeLtPmMeU3EYOpUnxKOMQdSn%2FSKJk17vuyC9s4y5O1PPphM2YFVeEE12oHo%2B%2B2lwkHGT9MQY4Odh43Y5gmSNUvo7arPScIDDSnkEQFGumI1GmTMPcJzV3V7xoZWfqNq2D0mBzAz8ETnrbUCNjKOauTBKY3rHEwvNJvk2lQRzO91klOWL4cNJpTqbJZ8Gs%2Fxx8r3EeE3vDWWmUwnrrjxAY6pgEP0Unx50oH3RHYlhYUK4GMlP0rJyW%2FWkOiZF5t0Sb2Xfsab4GjjeCJpYwl0JF3cr7agqpXQV%2B3TWYjrbngU%2B1f2mYRwsNTQS9jJ3Nnzj0%2FxIGTZz%2FNSuDXpOQWITnsncm6C6HdySyQu7rQqbijbYDsVPjYUDw2Oa25GfKX4BgeZWaIXkOsU0RXT%2F5ydZazFWVQ8KqOmxiB5PUwpsgJ9mvTmzFSgRw3&X-Amz-Signature=5e2a3e0079d99ebd29d2e8d67458ed826a552d3074c21885eeeac8499dc432d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWVQIKR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPuU7SxR36XIWR5opEpWfP%2BqLcae2u4WZDUjnWlGHP2gIhAO8Rd9bn40k%2B8Cb3CKuE%2FB2JhsGE1e1amNkbQbhiF2cBKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxZ5TLbiNkiGx5%2BJgq3AOVYjL2rgkfv%2FHsVLzEpZL72sV7FdgYG6KRZQ6IwH2WX60QTDbSiWA7RquntwHKitnVCNqmtXZdYV8XqpgKrdsy57hHDIOQXoCqYcSm7KHPT2OSyRXiZ33KtCSJLy2kn5FQ7qHYs3MZcUCllD562mTtgzQsZuR3Melh46PE0svBPRTc3j3fKhxkqPPfY5UOMyPSYWKTyoi6SFXSCXzsTaBbZNOmpCCA%2FeHCa%2F0CDWGx45BIw4tQXqoHyqyspwrfXeFZDCnTlfhH%2Ba2ZFTP3Zk8XfVI6JxWgqxKMZa%2Fq1pTPN%2Bbi8ZusxExUw5mAiWxc%2FgXIDKOko%2Bqf5yh6gC4qMbm2jJfOrabm9yiKWhJQi0ZLbTE%2BP1awFggylimQGrQFxb2yttcqFM4bMUru7e8oLsAw80bUBuObuPaN0xiY2WdFeIlsurfqZd2eqOFLgVmbgPvv5cPAQWmwLXNeTblt3sjsSgFMxLZqD%2BXQDPaeq1838Frhn1hEvRYiPkeclA7JZiRL7OkjLooRHDQ5LpgrcD2fOnGq8Avkv0WUlzN0kvgIZ35zuQ9hS8RWSHRSSPT0HzIMa9Zb53tIB%2BOJ1I83Ng%2B15sy2n1dpX%2FV1C7lm5FNdatfwbC8Su3LTB6YTTTCguuPEBjqkAYTLocujQkhmC28DTXQCEX%2FFdmVCIX3qN%2Fdyl61bRkVNQRYUvTFrWo2gioPw97Jm3wAXiIz8B6QPs9o9aiCnnTlmvCnnsDlm4QmCOpCCWRKmf%2Bm7QcNsWNkq%2BRgcvQ%2FGQoGsbt6yRxuQBla5POcp9%2BXWYK6rWnrn3bi9FMOrK5%2FnFeWE1XDHQhVMYuaFZ9F%2BjIYZkk8sns5nBs0bYeAtrgUNS4xi&X-Amz-Signature=c452ab488f06d61699b81ea3ce484c2e6feb958b302f03543d6d6d784a641f72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXEGETW2%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSlPZlp8uSOs%2BO7Ld%2B0Trsd5Ke9GWlJ6TwYeRP0LlVKwIgFp7ps%2FHD9Qx30GTb7ZfaDbKPvhO%2BXsCTncRSboixxdYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNW07n%2BkNv4GK%2BtkESrcA8l7vlO7uKosqUl87xAI9xT%2FcP70ZCXUqtuxnSdUcxdSvg6N2x7uhON2u9jdw5LMTQ26DxRqjq%2BpJvp%2Bk%2BDWoLH07KrVA80%2FQ0pNijjo3Ufz72LvXK%2BhsXLb6nhOEmqF5pyZP6LIwF8wF2DwI%2BFcHQjFAlvfiRFV2JSPegx9CTLi46guAhot77wmdmN3oUboiOn5bzoG3JcG8UmXHw8iQ7%2BoFakLrZya%2BFTae5Fr0CSKOVh8i%2FVv9hBmly3C7YddYylLAAvCx8AUtSq4ren%2B04ZRNMiiBWR67pBLrr96X%2BAb67a6tKzGhmUnU5h6TA9syvrhJm681eFWdnY3XgyHurhc6IxC9Xk4lYbxxJagnZZVtB%2FsUdlmDcNwPncVH1%2BtiTc1zevjT2SPhbQjLRMxCk8PGT03iADN7p%2BDIOWFizMwGNKEZZdlJnPH0bKjQwi9kirXlURJUpDbcXw2WqHwQjlErmYIyYCJrdphch3GbQ%2FKdZ3V%2BpW4Fzbwp1Ksq1riJ1mYmmao4kp08UOGhnhXCZqE3XGbkVGYScR%2FgJBHGF4D4fWIRAuf366Z1lk%2BhT06tvhTsVfmk5Cjghl5IGGTCz2nOjQ6weGZRtpYFMI9n%2BWmxEGqf%2Fka0OnDqqVKMKu648QGOqUBiyuVtWo%2BtKZLaikwvOl%2B80Q65IQCktiFYnQ1XpIg2YcEBQFPcsYv3OwXhHB7EDpR3%2FJkZy4eKbkORk0jssrRlOPXJhBVujFAP%2F8F5e4xfgNWSZM9hcuZfSOEMvE8uixcOtTf7HdWd8VV%2Fa7g1iadqBvaCsEbQRoBbefq%2Fpkc%2Bi2Eqn08N892Or5nlrj9qr%2B5zx3Wg8I5w7WHbgPkesKGq9AyayJj&X-Amz-Signature=156eaefc5d1bd2e34ba002532ea7e8f1ea5226a1ede2fa6ca2dde9d32349b9f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWVQIKR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPuU7SxR36XIWR5opEpWfP%2BqLcae2u4WZDUjnWlGHP2gIhAO8Rd9bn40k%2B8Cb3CKuE%2FB2JhsGE1e1amNkbQbhiF2cBKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxZ5TLbiNkiGx5%2BJgq3AOVYjL2rgkfv%2FHsVLzEpZL72sV7FdgYG6KRZQ6IwH2WX60QTDbSiWA7RquntwHKitnVCNqmtXZdYV8XqpgKrdsy57hHDIOQXoCqYcSm7KHPT2OSyRXiZ33KtCSJLy2kn5FQ7qHYs3MZcUCllD562mTtgzQsZuR3Melh46PE0svBPRTc3j3fKhxkqPPfY5UOMyPSYWKTyoi6SFXSCXzsTaBbZNOmpCCA%2FeHCa%2F0CDWGx45BIw4tQXqoHyqyspwrfXeFZDCnTlfhH%2Ba2ZFTP3Zk8XfVI6JxWgqxKMZa%2Fq1pTPN%2Bbi8ZusxExUw5mAiWxc%2FgXIDKOko%2Bqf5yh6gC4qMbm2jJfOrabm9yiKWhJQi0ZLbTE%2BP1awFggylimQGrQFxb2yttcqFM4bMUru7e8oLsAw80bUBuObuPaN0xiY2WdFeIlsurfqZd2eqOFLgVmbgPvv5cPAQWmwLXNeTblt3sjsSgFMxLZqD%2BXQDPaeq1838Frhn1hEvRYiPkeclA7JZiRL7OkjLooRHDQ5LpgrcD2fOnGq8Avkv0WUlzN0kvgIZ35zuQ9hS8RWSHRSSPT0HzIMa9Zb53tIB%2BOJ1I83Ng%2B15sy2n1dpX%2FV1C7lm5FNdatfwbC8Su3LTB6YTTTCguuPEBjqkAYTLocujQkhmC28DTXQCEX%2FFdmVCIX3qN%2Fdyl61bRkVNQRYUvTFrWo2gioPw97Jm3wAXiIz8B6QPs9o9aiCnnTlmvCnnsDlm4QmCOpCCWRKmf%2Bm7QcNsWNkq%2BRgcvQ%2FGQoGsbt6yRxuQBla5POcp9%2BXWYK6rWnrn3bi9FMOrK5%2FnFeWE1XDHQhVMYuaFZ9F%2BjIYZkk8sns5nBs0bYeAtrgUNS4xi&X-Amz-Signature=a548ad264cf5fe87c85ab931267d94a44ca8eb07baa497039651a2261dd7fed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU7X3N4H%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt2722p6RaOwLH8hSC7florxxcgaRyGsPnhNjIgPsINQIhALFDCnjXJBzYHDC8Cxz5Pu7PhD%2FO045O3jlWODfOIZxyKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyy3ksza0UiqkGfn1Qq3ANdx2OXJ4yPjz6%2BHTEfVE%2FsSjxV4aryglOKJtARt4kYLw%2B9H9wP8eYlyaav3maDZIPuH43JFGcfq02LjU5zGanl8K1%2Fu%2BTCXWPrs7nNbubhJF7MNqO%2B%2FRcTrIGODAW%2F6AufLr8mjdG9JexleR2PNjxjDBAJeT2mNlWYRVSWn5FBmE653yfaHJjo55v9P3CvLU17kYSqa%2FdzdB%2BD6ElWHLsqWbXOXWyWICubQX1Bfx9ck5V95ew5ToGmQ2Z%2FEcqS0wO%2FEwrEKWZW5BW9lv9y6fKn1HaQahjqwkNovZLzBwUNThgn4xzNm%2FQzdJ7g5ubhRfYjnRF9IofGD3cum80AvmBNzr3C0YrcKemf3rtMt4TnUx%2B%2F06s%2BT7jpXMSooKVWnocgM5kWqJe19wcMaBV5UtYEZL40JVi5NxSIO0aUP6lG5iBnRL%2Bx0uljH%2FFTw0UTcXZ5x%2BH%2FmGInv7czfnl7yFmfND3voSWBzD4LxEcv%2FayItXiuZ9mXNS2GlWmgZe%2F7rdSdU8cfZDoIn%2FWKSFoekXQr0byamfkvOT194yPzaAwc9co04TDq000ItmVgclPlr9DJDmI1KSRjrkE%2BVjMuuGbpI4cOA%2BF64PumYFjd%2BrgY6Lal3Bpqtjxc5CJcwzDbuuPEBjqkAWB6SaYtOk%2FKfESbUzDAKzT5CK0NPeDaQOeizou3hrx7k91udiA8tfAaPtpZwwesWtJjh6C6qbo%2FoPSL9G3E%2BXC2f8aCQ%2BuxKIXtsJ6zdaMogYc0B1re%2FmDMe576zZF1IvO%2FrqWX%2FPQInfITTLQtwP6lWwJSquBUyVj5mVd%2FYhemmnfItC6xwsNgVHhpeYs%2BE%2BtPfxsRKWDIBpFRLnrXyfFKhrqC&X-Amz-Signature=702f7d0dc238872d39fb74de153ab5c1c4cba8edf29d0ecbf5206107ea8ca054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWVQIKR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPuU7SxR36XIWR5opEpWfP%2BqLcae2u4WZDUjnWlGHP2gIhAO8Rd9bn40k%2B8Cb3CKuE%2FB2JhsGE1e1amNkbQbhiF2cBKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxZ5TLbiNkiGx5%2BJgq3AOVYjL2rgkfv%2FHsVLzEpZL72sV7FdgYG6KRZQ6IwH2WX60QTDbSiWA7RquntwHKitnVCNqmtXZdYV8XqpgKrdsy57hHDIOQXoCqYcSm7KHPT2OSyRXiZ33KtCSJLy2kn5FQ7qHYs3MZcUCllD562mTtgzQsZuR3Melh46PE0svBPRTc3j3fKhxkqPPfY5UOMyPSYWKTyoi6SFXSCXzsTaBbZNOmpCCA%2FeHCa%2F0CDWGx45BIw4tQXqoHyqyspwrfXeFZDCnTlfhH%2Ba2ZFTP3Zk8XfVI6JxWgqxKMZa%2Fq1pTPN%2Bbi8ZusxExUw5mAiWxc%2FgXIDKOko%2Bqf5yh6gC4qMbm2jJfOrabm9yiKWhJQi0ZLbTE%2BP1awFggylimQGrQFxb2yttcqFM4bMUru7e8oLsAw80bUBuObuPaN0xiY2WdFeIlsurfqZd2eqOFLgVmbgPvv5cPAQWmwLXNeTblt3sjsSgFMxLZqD%2BXQDPaeq1838Frhn1hEvRYiPkeclA7JZiRL7OkjLooRHDQ5LpgrcD2fOnGq8Avkv0WUlzN0kvgIZ35zuQ9hS8RWSHRSSPT0HzIMa9Zb53tIB%2BOJ1I83Ng%2B15sy2n1dpX%2FV1C7lm5FNdatfwbC8Su3LTB6YTTTCguuPEBjqkAYTLocujQkhmC28DTXQCEX%2FFdmVCIX3qN%2Fdyl61bRkVNQRYUvTFrWo2gioPw97Jm3wAXiIz8B6QPs9o9aiCnnTlmvCnnsDlm4QmCOpCCWRKmf%2Bm7QcNsWNkq%2BRgcvQ%2FGQoGsbt6yRxuQBla5POcp9%2BXWYK6rWnrn3bi9FMOrK5%2FnFeWE1XDHQhVMYuaFZ9F%2BjIYZkk8sns5nBs0bYeAtrgUNS4xi&X-Amz-Signature=5479b6ffe90c080c71053ed750b5e044d8d46678212e1111b3c047738efac280&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XL4QACY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa1WYJ0qjOMswOT0l2uUkiBV9ajCgTE0%2BuhKBfvuJcZgIgAvKP5kyIVN6Zj75nyJS7ReDK%2BZuF874yUJ%2Fj70%2FmQeMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxbW0EsDV8HmAooCircA5g5xvIL4sPBKPoBzAoIrvXYe5MmTo1bYGWXxZ8vtWzjN1s94k1r55tPdGg3OZjaCPn7EpchyR0ezPELb2flJuYJVApEkqETSRfobw6ewxMI12CXyh3uru2UjeMwBZ63pEDMeuih6q1MmsYWjtpAq4hSiuX%2F0jFQlUQI6etUXfpY2w%2FGfflbJfstHuHXdtT9ScnUBZo7OQCo9bAgjmNzp3S8mvPMO%2Fgvfr1k1ucvROL9Ph0W5gjMH8NfjqK6zxxXzbeafp7IGBBPraObHqvkuyWfcUw6eaFrC3L3zj%2B2S6eEC9KWC%2FEuMfMY7vyxc4pnu05H77zb2adIUQocnMb664p%2FjwRTaNAmW7Fr05IlkPy%2FenikokaWo%2B6bUnL6XyRlvJTFdGCXfonCIxlZa6E3ew3h5y8Q1iZ4Su2%2BMurQMXs3KUdZpEmC9sB3GMYiinpqt4ko6MyNsEVvGsTP73bcpc6WVN0mtZk6WSFX2olqSxDnGaEhALuvwihspTmEBi4wZMNe3nGUgxM%2FPbgFONXTbl8HKIW4EX%2BF8M0LtTQ%2FDC3CxtU7jjOLjQRspGNQbqzfLxU5u3M%2BY0eeXCnITQJWEH%2FXOqQUPgXMqNU1bbXzQiY%2FWthSDwvTBbCVg5ZzMLS648QGOqUBArm590FUwvNJk%2BBo798ssWB5z8WOWBFsVBpI6RE%2B1yam7FZv1Uc1yaTSjaU77FwRMKQgKE46DYozTmUuctGSftcKubJq715GKNw05FUZZUwgt7WarAds8gZSyYJNbwhob7Vc05L4DJbUDF8rwHWhri3NpBZMO%2BAiue9FH3D7xmfX1fAg6Ml5K2X1Mv3viyrQF9ySsh7xS7Xm9K87UEnvDyvbEspa&X-Amz-Signature=97efb28ecaa50e0ad3fc7aa85ba15f6cfbcf06b8aac1d3eaab3bfd242247ae67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWVQIKR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPuU7SxR36XIWR5opEpWfP%2BqLcae2u4WZDUjnWlGHP2gIhAO8Rd9bn40k%2B8Cb3CKuE%2FB2JhsGE1e1amNkbQbhiF2cBKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxZ5TLbiNkiGx5%2BJgq3AOVYjL2rgkfv%2FHsVLzEpZL72sV7FdgYG6KRZQ6IwH2WX60QTDbSiWA7RquntwHKitnVCNqmtXZdYV8XqpgKrdsy57hHDIOQXoCqYcSm7KHPT2OSyRXiZ33KtCSJLy2kn5FQ7qHYs3MZcUCllD562mTtgzQsZuR3Melh46PE0svBPRTc3j3fKhxkqPPfY5UOMyPSYWKTyoi6SFXSCXzsTaBbZNOmpCCA%2FeHCa%2F0CDWGx45BIw4tQXqoHyqyspwrfXeFZDCnTlfhH%2Ba2ZFTP3Zk8XfVI6JxWgqxKMZa%2Fq1pTPN%2Bbi8ZusxExUw5mAiWxc%2FgXIDKOko%2Bqf5yh6gC4qMbm2jJfOrabm9yiKWhJQi0ZLbTE%2BP1awFggylimQGrQFxb2yttcqFM4bMUru7e8oLsAw80bUBuObuPaN0xiY2WdFeIlsurfqZd2eqOFLgVmbgPvv5cPAQWmwLXNeTblt3sjsSgFMxLZqD%2BXQDPaeq1838Frhn1hEvRYiPkeclA7JZiRL7OkjLooRHDQ5LpgrcD2fOnGq8Avkv0WUlzN0kvgIZ35zuQ9hS8RWSHRSSPT0HzIMa9Zb53tIB%2BOJ1I83Ng%2B15sy2n1dpX%2FV1C7lm5FNdatfwbC8Su3LTB6YTTTCguuPEBjqkAYTLocujQkhmC28DTXQCEX%2FFdmVCIX3qN%2Fdyl61bRkVNQRYUvTFrWo2gioPw97Jm3wAXiIz8B6QPs9o9aiCnnTlmvCnnsDlm4QmCOpCCWRKmf%2Bm7QcNsWNkq%2BRgcvQ%2FGQoGsbt6yRxuQBla5POcp9%2BXWYK6rWnrn3bi9FMOrK5%2FnFeWE1XDHQhVMYuaFZ9F%2BjIYZkk8sns5nBs0bYeAtrgUNS4xi&X-Amz-Signature=f2cd2a9f4bf8441cb0245decf62ea1c2462a0be31deaeb7fafc3844dea54da99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEW47VEI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0u1CNh73TCVhJg7VTFrPP2CPmTR7%2FDg3MHPls10OWMAiEAhZLdVdnoWR8Vzbxp9%2B9r%2B1I9KMY3OWyIk4s7YqRL3coqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzjkAgRHQzAgldjKyrcAxzAlz2STv4Yb5hYBTKJ2ibNGTmqHhOHnPUEdNtDszDmL4u1Rcn%2By3E8EuacM%2BbLg9WI3Dzss3wGQUZeJtWwElUe1BbI6SMl0wXW5dLNtREjfGuM2bdJygqGdG0jbSjuDxH42F7t%2BMFKEUt%2FQF%2F%2FGtqkZ5tAiYfbE6SWV%2BOoTVwUE7%2FKRWIDG11ZG2Pmh7ps7SzT1jwhZjnmxAfSlSCCfhQhcTdp11Jn4bSdEg2Z8G9WP%2FsDojBD%2BYypLKzSy0FkgjAmKNwjJ9gSoK8PiwTyt%2BP4sFpsSz%2BMru%2FAFv6VIn0bfvAv649UW%2Bbwjrs1xkbKg8QPdwesI0d4TQMA6jWmS7ID1atVuuRS5LOwE%2B6eg3qS93HlyeR8mu1Lq%2FlEmKTqmEf1HFmznNx%2FS9eJzCvag9B59Wjk1cttipX9j5%2FGeQmNaUaa5JJKeAB35caI3Sw4P8q1VySjWXR4Wixd3fmcwJheMYFMSWUkcsCW%2B%2FfuuRCqEpfN1A2Ovvl%2BZ8rnKS34kYbw4WmQ0ntllwuvNVEb22hau2OhbE2EJD%2BYPDvwcG%2B5cH4mcQ36sRAW5SMF1wE%2FUkZrtdWcurTD%2FotWWYFrcnIA%2BlSKbAI4x%2F1uLc8Tf539MNNGGVMus%2F6DL9hjMO2648QGOqUBzh54WbWljUB0kz4o6VqBZymb7qpcMao5q4cCd%2BnBZ%2B1QgbaC5S7mXzXhvN4BXZvgrGVo9Zbcz%2Bq932YZjp7IpefttHeB3pd%2BUECwmPp832QFZRutPwxD74FiEbjhvXX9nmVTLbD1ndQWD%2BJvTxRbsrdjJyM0rekdHhG3qFD8bm8d8FDaxDnV9%2BgRgLVdPzQBMsMDSltrsi0DXoKqw2o2Qg1q1Lit&X-Amz-Signature=3d3546236a362c99f54396d386f2e4057c27594f5cf68e1da2bb9535f1f63f1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T7BT5ZF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtrm15PbGUqfGvIiU%2Byywe7mb%2Fla48MrYHITKdendBIAIgDQ9a%2Bt8c7Ie9Qe8DeADJXodo2oVDShreFisESszDW8cqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFQOausGVUGsfBJPSrcA67pKlZHtFkuFGPKxjE1qGD7OTRbBinAxNev8e%2FCGrzOt%2BBgpaPTL7an6EalG%2BVvUONNh7AkJ9eu7ohqHkjwyGzXDHOBuwOBWuJCbhvwpoLxj6GHXFCc8qGKOFfyS8deH5b%2FyRL0IoWO9EY1T3I2%2FPH4mlPBu9ZtxLOcyg3LNDIbDVVMDYu8uExYiqADZdKjV%2FPRpDvUH1GpiObNcJNi4QO1caJOfHpvxtFpkZolV7L6yF7drHikh8%2Flgx%2F8kLzdJ%2FTnERytQQ55lveUAXcS1DMmYWA20SQv6h0ppveXPxqGvMY7RjxUC9h456OO61PaabEjKANpdxnhx7N840Q%2F0MWX7%2BuuZCLw9DlHYHQgqATuZ%2BM92z0VXkrruWlyz4rzEsYz0HfRgrJ%2Bf4i0puFy8yTjjX56xSENyJOJUbGuilDL4%2BgQvA%2BN0YhWE7R7tF2NIbHtoh1bDnDjGTbiSesagbDEwMjQF8smP0nK0vKPWex0KstcE0iPU5dty4J77oE8sQjpO%2BAOUSRbL0AuVd5dYmbYHDMxyeQkdSS7t66pRfH5RjrYdjNUixWaddB6kkhrhGJmfOD0P5f7MAWMYilgEa1FE%2BrlgaXDtO10DwMDG32PjEJu%2BVDRLryFoU3MMKm648QGOqUB%2FcNWpk155fTQ1TSIrApTQEcGNbvtFDFCqTz%2F261txxJ8FmVIqVORYhnQxiHixBZ3ovBh6WVTpOfGyjzbCgZQeeps5c1ZwFBLe82Q%2FrjX%2BIle1Gy3LFzTL0wl1vV2QwtdZMaTgylsHNQe0LbWHzJVvgb7mRwjNWij6cBiI2hqy77XdAbw9lzSbPUUNrgA3Cgw8b6n6nc0zGHyFsU51wARDNAMDWbV&X-Amz-Signature=852cdd95de2c90816e73bf6e7ff95274e1c7870f5587092702d2a33654f120c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625S5MAHR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC92crqtczpx1o4AyN9fRAgAOFMiKnfd%2FH8fAOPWX96RwIgeWFBwjkGo012Mm9xPM393Rzhy51%2BGyAX2IOhS1wgIwwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHk2K0qZjuSb%2Bbi1CyrcA8LvNakjT1PKGP06FkMYJZZ9NAzf1gF9Aoht%2FN517fanZoN2yvPXHxAsCObNbFdHziH2NfjV8HvdPLCpV4BN4I4OWC0YqhFGuWYobbTmhSH3lPCGz4yH8RQlPa%2BX27861Ufaao0DmpYaA%2F1lyINVeN1VBUIbibuONwnFQcLt%2FLyFXw94eyuvcN5chR8E8X2cNPkkdzTvbJ30wd%2FEUkgBjlaWwAcYTmPeH83qYv0un2nNvgINYPK52OO%2B0Xm8cWCtpetMy3N80ZTttjyFYBz8ilsgamP79zeCXGE66a%2BqcTo6m4QKBmR7pCxMlqQF5AVg4zSDL3yKzn002Z%2FK0h07YXvzXBpF90bSaOfl5ObS54NqaicwoI%2B%2BrscIfEKNR3zHwnDHAy91OlmFr3PL6UoV0CrJ4go7FVe1fudVp%2FXtyPSSmPv9mPcFGo0sV9jneIJFcRnpq2AVyHk3oOrVj5c7CStrlVWTM%2FHjnQrR4cLBwLEyezeLQQpW8EEaVZi9sEL831vDS%2BKkVCQSkKR4REF4bHi1DJXyI%2FpqGrOQyfb%2BzS8054vjNxg46TQZ4m7nzRhBjkvhLbX9RoBaIr4jdDTJGTKvmxmUYpBGRqbPtwCqpPpUg1Ey4vn9tKqwM%2BAHMJ6648QGOqUBht1%2BKPqOYJhw8cZkXm5KWpnuND6bR0mnDfr7wEyYUtalnxhr2aAk44XRWl00HoNlXrDMqKJyyitCFffzTYZDMftADLvurgRBZHaladLrPTD8v%2BfXMOyuG%2BkFPpneZ4L6uBJ2Uc1SEZZA0QOwrEplVP28Hy03xSXB%2BAyi6KBJeHXwTlr7mllOEcigRB4EApwjtBwA7AiuiJBAMamdLj2HPzodnojP&X-Amz-Signature=ff6cc9b811e7b30a4af9253af4f3dbcf229d1cd3c7154048d51457f95d1c7ece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDZX5YG3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8VTbvpKQdICat1jylu6a43cXTYBq1LudnZGrYTnvpxgIhAPyTTuCtl4H8xeF0CIqObRtngNpT%2FJqjVmYSWca1L7XEKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8X8EU0JSpqH9gEaoq3AOZ3MNbhauEBKoc6nPWjyVS%2BlnFXx8%2Fkr5JRF8RwC3iga6BvE8uB4Ckv1DRA97CoIraXR9TEp26qce2QvyTmE08NgsKpzsjC3oVn4RuHRBlr1at9YH3Qs3y1gUo2q6jGZZIA5s8nxVuFOjN%2BD2I%2FjW3m%2BoEJJiG8bse3K04pm9%2FJ3%2BtuUfiyKQJByAjlwz7B%2BcOmos1TB9a3M5%2BXeAvuaOHV3SfKa%2BOSALM0awIL0hbKK4NW0iOcVe%2FBWHBUHF%2FLb516EApvRaer5mTQVtjzZLNMo5Q8JpoPYEbXUX2UIRbldtLYj01kMi2RepVyKS%2BNmBsB9KJ%2B9Y8Q3AkAVyhIBjrFURunSqBCL2HNpErZvuKGIMGVPL2zi5tR9pR9Qxc3BKWsFOTEjJGvIGmEEqv9vdSr6FPuQkcQMwldEXCVl1VDnCjeKdvRgpn0DwWe4G0tFhZJw36073oI89ilYfu6nlBLaqwzWTYNVYewhfsGgLPyU4PBSYRkoaSTJs3V7Pejle4GmRU%2FHhAoxJHGOX74cEyLtYrKcEeDGeyKQOVtZPeZkyJxMF4bueifEJFwecpB3rdAeUsAQ9gln21rQaDs39Pg%2FrV6HJ5BzB%2B95HEP8%2FGbzge3X%2B93dFg7KdC9jD%2FuuPEBjqkAWEXqY35RZZBY8SbfhBbQ93saHAGGBRNFULA7IBEMK19xpcMzt%2FL2vH70fRC4RyHBCcvvVMYlePNUnWlJN0F6rvdbYQ3U5teXxu2RuFUrBjrsuxx%2Fmbhfod%2FwxjQHaYIWlFCBxbr7qI3XNFG81xHCZ9IE3Gk9qdMhEDvRCbR8EAdRWzAFM1llPpmuFj3Qy%2B37dFY4xb5Xb9rNN0AfhgOuOQBSrp5&X-Amz-Signature=f383fd839b9993953044046e502a391b975a54a93180d74bb2f6c5ce174f45b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AFDG2BL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5KQOwDg4MctBV%2BiVdiddRix8O%2BVING0NyRQh9yPZKfgIgICuhqkrcp4X%2BctL1eV%2BxQF7dABIWF9bNH6L9hl0Z4sAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJsr%2BngqF9iROWwdpCrcA5AzIwZBDHsjsbXTBEScIcaTOq6MFh2NTspZkVz8TNO5uphZ%2FV%2FimxQ1xnC82emAA9TaYt00jLG3%2BUXBx3Yjjj6mbtq6NXgjf5qXdjX9UEGdZjRHzKip5Hlt4vPOhbrNHC%2BAg%2FDJt555DW%2FoKxV1I1%2B9EnEQ%2FZVkhSH%2FK2r%2BKnS3EmIJMHawU3WpKfskT8o9Gf07dPyRZyHTlaEQJUq%2FpKKQ%2ByWBN%2BwrkBwBkwUCyxHIyS0DRKqYAkT2DakhLb%2BxX5B6c%2FjH9oJO0S7WlsGoRT5mFLI8Y0BY9%2BiGHfZC%2F1%2FCJntNacicmETbtnt3rYQM0gIgkJx09sL2K9ZtGAu85bgXjDFEKP1toVxHjYdllOE9Y3ZajFZurG90nfXP8%2BM5GoFH9jbaDuLqopG8dmVVW41B%2FdY%2FWnD5HqlpqUgOkEbtmIfEK0ry084vMxAuLNhjFlx6tX%2BICh7Mg5r8RtG7JOmK1vDZdqhXn2FkpHsLcrvfE7w7TSAnLBwcNCnLguD5zeYlCjs1%2BIaJgfFrK3mGhQv6wjt4Uxl8%2FIhUWyqvgq3Wd6IRaa44QcqO%2Fxexy32HcQXYGgSbvUU2KkgUJkc41t%2FpEtKgzGLdMcEb1rEjDzqjB%2FpKV5c6YpMC8qjiMM6648QGOqUBLj5q%2B8Kh31SYiBZk7Gk%2FBQ4QObqP0rMgeBzW3ee7l%2FiJh8dZ%2FE1i6WIgWGjcV5tsmAItPHW0YnONpEwqWtLtZYretn4zshtf%2F9bLosMiLVNZAI3uKpTD9x2MQfg3JNhWpEW4uiUYMKcWpqy7fbueDOhxOB%2BGExVMYgHxIAXGzfmtNw%2F2nKAv6%2FFSIBcjlgagBO%2B6EgXBMZPf7iO6yLGIzdnzV4Bz&X-Amz-Signature=4d2948aa4c698f8d4ca0e1d6518f5bb968be59d63db24f0ed8084e3dc64f27a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWVQIKR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPuU7SxR36XIWR5opEpWfP%2BqLcae2u4WZDUjnWlGHP2gIhAO8Rd9bn40k%2B8Cb3CKuE%2FB2JhsGE1e1amNkbQbhiF2cBKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxZ5TLbiNkiGx5%2BJgq3AOVYjL2rgkfv%2FHsVLzEpZL72sV7FdgYG6KRZQ6IwH2WX60QTDbSiWA7RquntwHKitnVCNqmtXZdYV8XqpgKrdsy57hHDIOQXoCqYcSm7KHPT2OSyRXiZ33KtCSJLy2kn5FQ7qHYs3MZcUCllD562mTtgzQsZuR3Melh46PE0svBPRTc3j3fKhxkqPPfY5UOMyPSYWKTyoi6SFXSCXzsTaBbZNOmpCCA%2FeHCa%2F0CDWGx45BIw4tQXqoHyqyspwrfXeFZDCnTlfhH%2Ba2ZFTP3Zk8XfVI6JxWgqxKMZa%2Fq1pTPN%2Bbi8ZusxExUw5mAiWxc%2FgXIDKOko%2Bqf5yh6gC4qMbm2jJfOrabm9yiKWhJQi0ZLbTE%2BP1awFggylimQGrQFxb2yttcqFM4bMUru7e8oLsAw80bUBuObuPaN0xiY2WdFeIlsurfqZd2eqOFLgVmbgPvv5cPAQWmwLXNeTblt3sjsSgFMxLZqD%2BXQDPaeq1838Frhn1hEvRYiPkeclA7JZiRL7OkjLooRHDQ5LpgrcD2fOnGq8Avkv0WUlzN0kvgIZ35zuQ9hS8RWSHRSSPT0HzIMa9Zb53tIB%2BOJ1I83Ng%2B15sy2n1dpX%2FV1C7lm5FNdatfwbC8Su3LTB6YTTTCguuPEBjqkAYTLocujQkhmC28DTXQCEX%2FFdmVCIX3qN%2Fdyl61bRkVNQRYUvTFrWo2gioPw97Jm3wAXiIz8B6QPs9o9aiCnnTlmvCnnsDlm4QmCOpCCWRKmf%2Bm7QcNsWNkq%2BRgcvQ%2FGQoGsbt6yRxuQBla5POcp9%2BXWYK6rWnrn3bi9FMOrK5%2FnFeWE1XDHQhVMYuaFZ9F%2BjIYZkk8sns5nBs0bYeAtrgUNS4xi&X-Amz-Signature=7eb7062dd86845fe3e2ad63a8062105709e57d03090ef14d433b0c6821d38bc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWVQIKR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPuU7SxR36XIWR5opEpWfP%2BqLcae2u4WZDUjnWlGHP2gIhAO8Rd9bn40k%2B8Cb3CKuE%2FB2JhsGE1e1amNkbQbhiF2cBKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxZ5TLbiNkiGx5%2BJgq3AOVYjL2rgkfv%2FHsVLzEpZL72sV7FdgYG6KRZQ6IwH2WX60QTDbSiWA7RquntwHKitnVCNqmtXZdYV8XqpgKrdsy57hHDIOQXoCqYcSm7KHPT2OSyRXiZ33KtCSJLy2kn5FQ7qHYs3MZcUCllD562mTtgzQsZuR3Melh46PE0svBPRTc3j3fKhxkqPPfY5UOMyPSYWKTyoi6SFXSCXzsTaBbZNOmpCCA%2FeHCa%2F0CDWGx45BIw4tQXqoHyqyspwrfXeFZDCnTlfhH%2Ba2ZFTP3Zk8XfVI6JxWgqxKMZa%2Fq1pTPN%2Bbi8ZusxExUw5mAiWxc%2FgXIDKOko%2Bqf5yh6gC4qMbm2jJfOrabm9yiKWhJQi0ZLbTE%2BP1awFggylimQGrQFxb2yttcqFM4bMUru7e8oLsAw80bUBuObuPaN0xiY2WdFeIlsurfqZd2eqOFLgVmbgPvv5cPAQWmwLXNeTblt3sjsSgFMxLZqD%2BXQDPaeq1838Frhn1hEvRYiPkeclA7JZiRL7OkjLooRHDQ5LpgrcD2fOnGq8Avkv0WUlzN0kvgIZ35zuQ9hS8RWSHRSSPT0HzIMa9Zb53tIB%2BOJ1I83Ng%2B15sy2n1dpX%2FV1C7lm5FNdatfwbC8Su3LTB6YTTTCguuPEBjqkAYTLocujQkhmC28DTXQCEX%2FFdmVCIX3qN%2Fdyl61bRkVNQRYUvTFrWo2gioPw97Jm3wAXiIz8B6QPs9o9aiCnnTlmvCnnsDlm4QmCOpCCWRKmf%2Bm7QcNsWNkq%2BRgcvQ%2FGQoGsbt6yRxuQBla5POcp9%2BXWYK6rWnrn3bi9FMOrK5%2FnFeWE1XDHQhVMYuaFZ9F%2BjIYZkk8sns5nBs0bYeAtrgUNS4xi&X-Amz-Signature=9fe047f1bb910e50500baa1e56c56d996818c3df5a07673202cab1e72d5d7669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HIOOJCT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkfrH8XTYITHlNn0xrkjQFQCu%2FdDaIzoI5Rifiim8OMAIhAOw4wpINWbHSROtprykVFuiusojOXgIBBzZiSuTK3C1sKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwihelJPObtjwHiWSIq3APsHX8vLANmC2vxuZMqnvV1FtEa2DM%2FwjT9q43kZEyFMQIAo6Y35pc0kAjLgfZHqYoFmX8u7%2Fw4d4iZRvLeTa7xksnuqR%2Bj4tGeD3FMzwpQSx02aQ4E1euwrmLcQKVDEED1%2BTWgasuEBnOrUplvRRYqmCUajswLTkYlMZDJXd07wE8EZsISROVaHtkNnMv3VAynrz5VaztWNHuVMuHAgbjEdeoCGaqYDsRLP54hKESoo2GTKJc%2Bp6cnK95DPZDBizsI2DZrMPANQtkyFOjEiVeJtsoVLfzrnics2eo9QI0ZXPgKzLYumShU80dvJtH5d5Kp7%2BF4X1%2BrTb00wcRogu4s%2FhDg7TLCFTKdWEwafQCRyMF%2BLFDTheeXswf1RQ1HizMSgkSHX%2F9SCIjvkMROc3yUv2vUf4BXisiZq3fSCs20q3fEwZT%2BQ76DiqJTuW4TsnT7poMqFv1ChdkEQk3kCxWGfTgnt7cX4FhLBIV%2BDwM1Ppdm5Qkf1SEbfM1QzlKObQTRO8LIVfQyHjEJpB7UJ%2FCJrqlA4ILq7U2QqIXUPp0%2F4KDw8P6wqxmWsWfhc8lYfj6nxaCGJy1EZa8o0BuX5OfQjrp2SY%2FeqKwaNb%2B1Hv2By3dr5ADWEVk5hqpaAjCquuPEBjqkAdVMt%2FHMbVdyMrdN9n2DquoDRn1vNP8kWyJsCIB0qmWF1%2FyoqpQYTUX7%2F9IgHl3rmlVvGVy4YvzcBj3QB0QVrastNhMko%2BqbMOPemoDU%2F0uKdbUfTKe%2BfYwQEwfrmRc0SPiLTfbeW2Kv4WqwC93YNhZ24uPs1Or%2B3NqdDwMZ%2FXbcRbgdA5WVqT924p4GmsJK4ZrVF7zG3O7CSZhHHrnMYktV7yuV&X-Amz-Signature=06c1b04460e85478963eee684238944f02b9ffc74194c40512e2e43551c29f73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HIOOJCT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkfrH8XTYITHlNn0xrkjQFQCu%2FdDaIzoI5Rifiim8OMAIhAOw4wpINWbHSROtprykVFuiusojOXgIBBzZiSuTK3C1sKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwihelJPObtjwHiWSIq3APsHX8vLANmC2vxuZMqnvV1FtEa2DM%2FwjT9q43kZEyFMQIAo6Y35pc0kAjLgfZHqYoFmX8u7%2Fw4d4iZRvLeTa7xksnuqR%2Bj4tGeD3FMzwpQSx02aQ4E1euwrmLcQKVDEED1%2BTWgasuEBnOrUplvRRYqmCUajswLTkYlMZDJXd07wE8EZsISROVaHtkNnMv3VAynrz5VaztWNHuVMuHAgbjEdeoCGaqYDsRLP54hKESoo2GTKJc%2Bp6cnK95DPZDBizsI2DZrMPANQtkyFOjEiVeJtsoVLfzrnics2eo9QI0ZXPgKzLYumShU80dvJtH5d5Kp7%2BF4X1%2BrTb00wcRogu4s%2FhDg7TLCFTKdWEwafQCRyMF%2BLFDTheeXswf1RQ1HizMSgkSHX%2F9SCIjvkMROc3yUv2vUf4BXisiZq3fSCs20q3fEwZT%2BQ76DiqJTuW4TsnT7poMqFv1ChdkEQk3kCxWGfTgnt7cX4FhLBIV%2BDwM1Ppdm5Qkf1SEbfM1QzlKObQTRO8LIVfQyHjEJpB7UJ%2FCJrqlA4ILq7U2QqIXUPp0%2F4KDw8P6wqxmWsWfhc8lYfj6nxaCGJy1EZa8o0BuX5OfQjrp2SY%2FeqKwaNb%2B1Hv2By3dr5ADWEVk5hqpaAjCquuPEBjqkAdVMt%2FHMbVdyMrdN9n2DquoDRn1vNP8kWyJsCIB0qmWF1%2FyoqpQYTUX7%2F9IgHl3rmlVvGVy4YvzcBj3QB0QVrastNhMko%2BqbMOPemoDU%2F0uKdbUfTKe%2BfYwQEwfrmRc0SPiLTfbeW2Kv4WqwC93YNhZ24uPs1Or%2B3NqdDwMZ%2FXbcRbgdA5WVqT924p4GmsJK4ZrVF7zG3O7CSZhHHrnMYktV7yuV&X-Amz-Signature=0cd034cf64d868276e1174887f4d1ee69035be69032e3ba1f36bb060fa5fa4ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HIOOJCT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkfrH8XTYITHlNn0xrkjQFQCu%2FdDaIzoI5Rifiim8OMAIhAOw4wpINWbHSROtprykVFuiusojOXgIBBzZiSuTK3C1sKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwihelJPObtjwHiWSIq3APsHX8vLANmC2vxuZMqnvV1FtEa2DM%2FwjT9q43kZEyFMQIAo6Y35pc0kAjLgfZHqYoFmX8u7%2Fw4d4iZRvLeTa7xksnuqR%2Bj4tGeD3FMzwpQSx02aQ4E1euwrmLcQKVDEED1%2BTWgasuEBnOrUplvRRYqmCUajswLTkYlMZDJXd07wE8EZsISROVaHtkNnMv3VAynrz5VaztWNHuVMuHAgbjEdeoCGaqYDsRLP54hKESoo2GTKJc%2Bp6cnK95DPZDBizsI2DZrMPANQtkyFOjEiVeJtsoVLfzrnics2eo9QI0ZXPgKzLYumShU80dvJtH5d5Kp7%2BF4X1%2BrTb00wcRogu4s%2FhDg7TLCFTKdWEwafQCRyMF%2BLFDTheeXswf1RQ1HizMSgkSHX%2F9SCIjvkMROc3yUv2vUf4BXisiZq3fSCs20q3fEwZT%2BQ76DiqJTuW4TsnT7poMqFv1ChdkEQk3kCxWGfTgnt7cX4FhLBIV%2BDwM1Ppdm5Qkf1SEbfM1QzlKObQTRO8LIVfQyHjEJpB7UJ%2FCJrqlA4ILq7U2QqIXUPp0%2F4KDw8P6wqxmWsWfhc8lYfj6nxaCGJy1EZa8o0BuX5OfQjrp2SY%2FeqKwaNb%2B1Hv2By3dr5ADWEVk5hqpaAjCquuPEBjqkAdVMt%2FHMbVdyMrdN9n2DquoDRn1vNP8kWyJsCIB0qmWF1%2FyoqpQYTUX7%2F9IgHl3rmlVvGVy4YvzcBj3QB0QVrastNhMko%2BqbMOPemoDU%2F0uKdbUfTKe%2BfYwQEwfrmRc0SPiLTfbeW2Kv4WqwC93YNhZ24uPs1Or%2B3NqdDwMZ%2FXbcRbgdA5WVqT924p4GmsJK4ZrVF7zG3O7CSZhHHrnMYktV7yuV&X-Amz-Signature=0c1939e1abbf0feefaf33816cb3ccbbcfb05dddbf4d74329d5ea7ea1830d45fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HIOOJCT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkfrH8XTYITHlNn0xrkjQFQCu%2FdDaIzoI5Rifiim8OMAIhAOw4wpINWbHSROtprykVFuiusojOXgIBBzZiSuTK3C1sKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwihelJPObtjwHiWSIq3APsHX8vLANmC2vxuZMqnvV1FtEa2DM%2FwjT9q43kZEyFMQIAo6Y35pc0kAjLgfZHqYoFmX8u7%2Fw4d4iZRvLeTa7xksnuqR%2Bj4tGeD3FMzwpQSx02aQ4E1euwrmLcQKVDEED1%2BTWgasuEBnOrUplvRRYqmCUajswLTkYlMZDJXd07wE8EZsISROVaHtkNnMv3VAynrz5VaztWNHuVMuHAgbjEdeoCGaqYDsRLP54hKESoo2GTKJc%2Bp6cnK95DPZDBizsI2DZrMPANQtkyFOjEiVeJtsoVLfzrnics2eo9QI0ZXPgKzLYumShU80dvJtH5d5Kp7%2BF4X1%2BrTb00wcRogu4s%2FhDg7TLCFTKdWEwafQCRyMF%2BLFDTheeXswf1RQ1HizMSgkSHX%2F9SCIjvkMROc3yUv2vUf4BXisiZq3fSCs20q3fEwZT%2BQ76DiqJTuW4TsnT7poMqFv1ChdkEQk3kCxWGfTgnt7cX4FhLBIV%2BDwM1Ppdm5Qkf1SEbfM1QzlKObQTRO8LIVfQyHjEJpB7UJ%2FCJrqlA4ILq7U2QqIXUPp0%2F4KDw8P6wqxmWsWfhc8lYfj6nxaCGJy1EZa8o0BuX5OfQjrp2SY%2FeqKwaNb%2B1Hv2By3dr5ADWEVk5hqpaAjCquuPEBjqkAdVMt%2FHMbVdyMrdN9n2DquoDRn1vNP8kWyJsCIB0qmWF1%2FyoqpQYTUX7%2F9IgHl3rmlVvGVy4YvzcBj3QB0QVrastNhMko%2BqbMOPemoDU%2F0uKdbUfTKe%2BfYwQEwfrmRc0SPiLTfbeW2Kv4WqwC93YNhZ24uPs1Or%2B3NqdDwMZ%2FXbcRbgdA5WVqT924p4GmsJK4ZrVF7zG3O7CSZhHHrnMYktV7yuV&X-Amz-Signature=d41aef298d99fd882244e5f3e04e832484660785e1d0cac3b846ce93c1715cd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HIOOJCT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkfrH8XTYITHlNn0xrkjQFQCu%2FdDaIzoI5Rifiim8OMAIhAOw4wpINWbHSROtprykVFuiusojOXgIBBzZiSuTK3C1sKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwihelJPObtjwHiWSIq3APsHX8vLANmC2vxuZMqnvV1FtEa2DM%2FwjT9q43kZEyFMQIAo6Y35pc0kAjLgfZHqYoFmX8u7%2Fw4d4iZRvLeTa7xksnuqR%2Bj4tGeD3FMzwpQSx02aQ4E1euwrmLcQKVDEED1%2BTWgasuEBnOrUplvRRYqmCUajswLTkYlMZDJXd07wE8EZsISROVaHtkNnMv3VAynrz5VaztWNHuVMuHAgbjEdeoCGaqYDsRLP54hKESoo2GTKJc%2Bp6cnK95DPZDBizsI2DZrMPANQtkyFOjEiVeJtsoVLfzrnics2eo9QI0ZXPgKzLYumShU80dvJtH5d5Kp7%2BF4X1%2BrTb00wcRogu4s%2FhDg7TLCFTKdWEwafQCRyMF%2BLFDTheeXswf1RQ1HizMSgkSHX%2F9SCIjvkMROc3yUv2vUf4BXisiZq3fSCs20q3fEwZT%2BQ76DiqJTuW4TsnT7poMqFv1ChdkEQk3kCxWGfTgnt7cX4FhLBIV%2BDwM1Ppdm5Qkf1SEbfM1QzlKObQTRO8LIVfQyHjEJpB7UJ%2FCJrqlA4ILq7U2QqIXUPp0%2F4KDw8P6wqxmWsWfhc8lYfj6nxaCGJy1EZa8o0BuX5OfQjrp2SY%2FeqKwaNb%2B1Hv2By3dr5ADWEVk5hqpaAjCquuPEBjqkAdVMt%2FHMbVdyMrdN9n2DquoDRn1vNP8kWyJsCIB0qmWF1%2FyoqpQYTUX7%2F9IgHl3rmlVvGVy4YvzcBj3QB0QVrastNhMko%2BqbMOPemoDU%2F0uKdbUfTKe%2BfYwQEwfrmRc0SPiLTfbeW2Kv4WqwC93YNhZ24uPs1Or%2B3NqdDwMZ%2FXbcRbgdA5WVqT924p4GmsJK4ZrVF7zG3O7CSZhHHrnMYktV7yuV&X-Amz-Signature=f10736556e181c2f98e7216bf30ad9351b3849d4490c87b8711f76f87d44abdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HIOOJCT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkfrH8XTYITHlNn0xrkjQFQCu%2FdDaIzoI5Rifiim8OMAIhAOw4wpINWbHSROtprykVFuiusojOXgIBBzZiSuTK3C1sKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwihelJPObtjwHiWSIq3APsHX8vLANmC2vxuZMqnvV1FtEa2DM%2FwjT9q43kZEyFMQIAo6Y35pc0kAjLgfZHqYoFmX8u7%2Fw4d4iZRvLeTa7xksnuqR%2Bj4tGeD3FMzwpQSx02aQ4E1euwrmLcQKVDEED1%2BTWgasuEBnOrUplvRRYqmCUajswLTkYlMZDJXd07wE8EZsISROVaHtkNnMv3VAynrz5VaztWNHuVMuHAgbjEdeoCGaqYDsRLP54hKESoo2GTKJc%2Bp6cnK95DPZDBizsI2DZrMPANQtkyFOjEiVeJtsoVLfzrnics2eo9QI0ZXPgKzLYumShU80dvJtH5d5Kp7%2BF4X1%2BrTb00wcRogu4s%2FhDg7TLCFTKdWEwafQCRyMF%2BLFDTheeXswf1RQ1HizMSgkSHX%2F9SCIjvkMROc3yUv2vUf4BXisiZq3fSCs20q3fEwZT%2BQ76DiqJTuW4TsnT7poMqFv1ChdkEQk3kCxWGfTgnt7cX4FhLBIV%2BDwM1Ppdm5Qkf1SEbfM1QzlKObQTRO8LIVfQyHjEJpB7UJ%2FCJrqlA4ILq7U2QqIXUPp0%2F4KDw8P6wqxmWsWfhc8lYfj6nxaCGJy1EZa8o0BuX5OfQjrp2SY%2FeqKwaNb%2B1Hv2By3dr5ADWEVk5hqpaAjCquuPEBjqkAdVMt%2FHMbVdyMrdN9n2DquoDRn1vNP8kWyJsCIB0qmWF1%2FyoqpQYTUX7%2F9IgHl3rmlVvGVy4YvzcBj3QB0QVrastNhMko%2BqbMOPemoDU%2F0uKdbUfTKe%2BfYwQEwfrmRc0SPiLTfbeW2Kv4WqwC93YNhZ24uPs1Or%2B3NqdDwMZ%2FXbcRbgdA5WVqT924p4GmsJK4ZrVF7zG3O7CSZhHHrnMYktV7yuV&X-Amz-Signature=ef193064626aa5b9943a31b674eb07f4c9e22c59a785dea4b2d34037d924ada8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HIOOJCT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkfrH8XTYITHlNn0xrkjQFQCu%2FdDaIzoI5Rifiim8OMAIhAOw4wpINWbHSROtprykVFuiusojOXgIBBzZiSuTK3C1sKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwihelJPObtjwHiWSIq3APsHX8vLANmC2vxuZMqnvV1FtEa2DM%2FwjT9q43kZEyFMQIAo6Y35pc0kAjLgfZHqYoFmX8u7%2Fw4d4iZRvLeTa7xksnuqR%2Bj4tGeD3FMzwpQSx02aQ4E1euwrmLcQKVDEED1%2BTWgasuEBnOrUplvRRYqmCUajswLTkYlMZDJXd07wE8EZsISROVaHtkNnMv3VAynrz5VaztWNHuVMuHAgbjEdeoCGaqYDsRLP54hKESoo2GTKJc%2Bp6cnK95DPZDBizsI2DZrMPANQtkyFOjEiVeJtsoVLfzrnics2eo9QI0ZXPgKzLYumShU80dvJtH5d5Kp7%2BF4X1%2BrTb00wcRogu4s%2FhDg7TLCFTKdWEwafQCRyMF%2BLFDTheeXswf1RQ1HizMSgkSHX%2F9SCIjvkMROc3yUv2vUf4BXisiZq3fSCs20q3fEwZT%2BQ76DiqJTuW4TsnT7poMqFv1ChdkEQk3kCxWGfTgnt7cX4FhLBIV%2BDwM1Ppdm5Qkf1SEbfM1QzlKObQTRO8LIVfQyHjEJpB7UJ%2FCJrqlA4ILq7U2QqIXUPp0%2F4KDw8P6wqxmWsWfhc8lYfj6nxaCGJy1EZa8o0BuX5OfQjrp2SY%2FeqKwaNb%2B1Hv2By3dr5ADWEVk5hqpaAjCquuPEBjqkAdVMt%2FHMbVdyMrdN9n2DquoDRn1vNP8kWyJsCIB0qmWF1%2FyoqpQYTUX7%2F9IgHl3rmlVvGVy4YvzcBj3QB0QVrastNhMko%2BqbMOPemoDU%2F0uKdbUfTKe%2BfYwQEwfrmRc0SPiLTfbeW2Kv4WqwC93YNhZ24uPs1Or%2B3NqdDwMZ%2FXbcRbgdA5WVqT924p4GmsJK4ZrVF7zG3O7CSZhHHrnMYktV7yuV&X-Amz-Signature=0c1939e1abbf0feefaf33816cb3ccbbcfb05dddbf4d74329d5ea7ea1830d45fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HIOOJCT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkfrH8XTYITHlNn0xrkjQFQCu%2FdDaIzoI5Rifiim8OMAIhAOw4wpINWbHSROtprykVFuiusojOXgIBBzZiSuTK3C1sKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwihelJPObtjwHiWSIq3APsHX8vLANmC2vxuZMqnvV1FtEa2DM%2FwjT9q43kZEyFMQIAo6Y35pc0kAjLgfZHqYoFmX8u7%2Fw4d4iZRvLeTa7xksnuqR%2Bj4tGeD3FMzwpQSx02aQ4E1euwrmLcQKVDEED1%2BTWgasuEBnOrUplvRRYqmCUajswLTkYlMZDJXd07wE8EZsISROVaHtkNnMv3VAynrz5VaztWNHuVMuHAgbjEdeoCGaqYDsRLP54hKESoo2GTKJc%2Bp6cnK95DPZDBizsI2DZrMPANQtkyFOjEiVeJtsoVLfzrnics2eo9QI0ZXPgKzLYumShU80dvJtH5d5Kp7%2BF4X1%2BrTb00wcRogu4s%2FhDg7TLCFTKdWEwafQCRyMF%2BLFDTheeXswf1RQ1HizMSgkSHX%2F9SCIjvkMROc3yUv2vUf4BXisiZq3fSCs20q3fEwZT%2BQ76DiqJTuW4TsnT7poMqFv1ChdkEQk3kCxWGfTgnt7cX4FhLBIV%2BDwM1Ppdm5Qkf1SEbfM1QzlKObQTRO8LIVfQyHjEJpB7UJ%2FCJrqlA4ILq7U2QqIXUPp0%2F4KDw8P6wqxmWsWfhc8lYfj6nxaCGJy1EZa8o0BuX5OfQjrp2SY%2FeqKwaNb%2B1Hv2By3dr5ADWEVk5hqpaAjCquuPEBjqkAdVMt%2FHMbVdyMrdN9n2DquoDRn1vNP8kWyJsCIB0qmWF1%2FyoqpQYTUX7%2F9IgHl3rmlVvGVy4YvzcBj3QB0QVrastNhMko%2BqbMOPemoDU%2F0uKdbUfTKe%2BfYwQEwfrmRc0SPiLTfbeW2Kv4WqwC93YNhZ24uPs1Or%2B3NqdDwMZ%2FXbcRbgdA5WVqT924p4GmsJK4ZrVF7zG3O7CSZhHHrnMYktV7yuV&X-Amz-Signature=958e0fb6bc4d40d85831f35ac9de5d0c09dc74822894719d1470e81d29e02370&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HIOOJCT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkfrH8XTYITHlNn0xrkjQFQCu%2FdDaIzoI5Rifiim8OMAIhAOw4wpINWbHSROtprykVFuiusojOXgIBBzZiSuTK3C1sKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwihelJPObtjwHiWSIq3APsHX8vLANmC2vxuZMqnvV1FtEa2DM%2FwjT9q43kZEyFMQIAo6Y35pc0kAjLgfZHqYoFmX8u7%2Fw4d4iZRvLeTa7xksnuqR%2Bj4tGeD3FMzwpQSx02aQ4E1euwrmLcQKVDEED1%2BTWgasuEBnOrUplvRRYqmCUajswLTkYlMZDJXd07wE8EZsISROVaHtkNnMv3VAynrz5VaztWNHuVMuHAgbjEdeoCGaqYDsRLP54hKESoo2GTKJc%2Bp6cnK95DPZDBizsI2DZrMPANQtkyFOjEiVeJtsoVLfzrnics2eo9QI0ZXPgKzLYumShU80dvJtH5d5Kp7%2BF4X1%2BrTb00wcRogu4s%2FhDg7TLCFTKdWEwafQCRyMF%2BLFDTheeXswf1RQ1HizMSgkSHX%2F9SCIjvkMROc3yUv2vUf4BXisiZq3fSCs20q3fEwZT%2BQ76DiqJTuW4TsnT7poMqFv1ChdkEQk3kCxWGfTgnt7cX4FhLBIV%2BDwM1Ppdm5Qkf1SEbfM1QzlKObQTRO8LIVfQyHjEJpB7UJ%2FCJrqlA4ILq7U2QqIXUPp0%2F4KDw8P6wqxmWsWfhc8lYfj6nxaCGJy1EZa8o0BuX5OfQjrp2SY%2FeqKwaNb%2B1Hv2By3dr5ADWEVk5hqpaAjCquuPEBjqkAdVMt%2FHMbVdyMrdN9n2DquoDRn1vNP8kWyJsCIB0qmWF1%2FyoqpQYTUX7%2F9IgHl3rmlVvGVy4YvzcBj3QB0QVrastNhMko%2BqbMOPemoDU%2F0uKdbUfTKe%2BfYwQEwfrmRc0SPiLTfbeW2Kv4WqwC93YNhZ24uPs1Or%2B3NqdDwMZ%2FXbcRbgdA5WVqT924p4GmsJK4ZrVF7zG3O7CSZhHHrnMYktV7yuV&X-Amz-Signature=b17abef71ef263f02672afd6d137b86db6379e66ae4751f869054f8f8d16e907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HIOOJCT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkfrH8XTYITHlNn0xrkjQFQCu%2FdDaIzoI5Rifiim8OMAIhAOw4wpINWbHSROtprykVFuiusojOXgIBBzZiSuTK3C1sKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwihelJPObtjwHiWSIq3APsHX8vLANmC2vxuZMqnvV1FtEa2DM%2FwjT9q43kZEyFMQIAo6Y35pc0kAjLgfZHqYoFmX8u7%2Fw4d4iZRvLeTa7xksnuqR%2Bj4tGeD3FMzwpQSx02aQ4E1euwrmLcQKVDEED1%2BTWgasuEBnOrUplvRRYqmCUajswLTkYlMZDJXd07wE8EZsISROVaHtkNnMv3VAynrz5VaztWNHuVMuHAgbjEdeoCGaqYDsRLP54hKESoo2GTKJc%2Bp6cnK95DPZDBizsI2DZrMPANQtkyFOjEiVeJtsoVLfzrnics2eo9QI0ZXPgKzLYumShU80dvJtH5d5Kp7%2BF4X1%2BrTb00wcRogu4s%2FhDg7TLCFTKdWEwafQCRyMF%2BLFDTheeXswf1RQ1HizMSgkSHX%2F9SCIjvkMROc3yUv2vUf4BXisiZq3fSCs20q3fEwZT%2BQ76DiqJTuW4TsnT7poMqFv1ChdkEQk3kCxWGfTgnt7cX4FhLBIV%2BDwM1Ppdm5Qkf1SEbfM1QzlKObQTRO8LIVfQyHjEJpB7UJ%2FCJrqlA4ILq7U2QqIXUPp0%2F4KDw8P6wqxmWsWfhc8lYfj6nxaCGJy1EZa8o0BuX5OfQjrp2SY%2FeqKwaNb%2B1Hv2By3dr5ADWEVk5hqpaAjCquuPEBjqkAdVMt%2FHMbVdyMrdN9n2DquoDRn1vNP8kWyJsCIB0qmWF1%2FyoqpQYTUX7%2F9IgHl3rmlVvGVy4YvzcBj3QB0QVrastNhMko%2BqbMOPemoDU%2F0uKdbUfTKe%2BfYwQEwfrmRc0SPiLTfbeW2Kv4WqwC93YNhZ24uPs1Or%2B3NqdDwMZ%2FXbcRbgdA5WVqT924p4GmsJK4ZrVF7zG3O7CSZhHHrnMYktV7yuV&X-Amz-Signature=864b7d9a26c926facea96de7b0dc8fd72cbe9c63cd98859020390c76343b71d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
