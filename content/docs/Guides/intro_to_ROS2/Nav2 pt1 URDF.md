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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GL2YBUR%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD7t%2FaFIoat18sYqJckjjpjVAYAitN8RnQB33ksHdK4vgIhAJx9U4S0sAi9sy7XJ9OGV5u9sjS%2FQTewRwQr6%2FPPPVsHKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl1E3XFfIqhe74uB0q3ANGvFUfB6k5%2FMHZTgKgLS0a7%2FeGPgaMuUFGz0QAdfCFOl3hdd0er4Xcdn5LY4ZLCNfpKhfCljOK0xM%2Bel%2B0Ee9d8%2BpKk3Z1BxIhHhAxngTtm1XonIQGQ8SMb%2B19GsnD0l%2FnJxmz5AI7l5VQLeosRqz3gaGzIkQlysJ8KNIM1VUpdI406zHhNix1aFk%2BT1rb4G6hWehHfj5pBm1g%2BKwiEdxUClW0cZ8TXWdnfhNJKHkiWMN7wfhRcS5A%2BajeRgUwshdPMbaT394TiFh9OTtcKw6iG%2Bbjy9qpR8RABv%2Fuh4aeLtQ4HIyzqpL9NjS5Pl%2FRACOhhiv3jDAAs2j6p%2F1VlGN58t%2BqcuGMMc2MNDi%2BNKUvBel2D7rbUZ0jlfVHpa4jTX94Uj8tGun1pP5Dezf7zikiUuCJr3GG8D%2FVRIMIqZD3tpEk%2Bc7M0b6%2F99eg5eSrWW7Kefq06%2BREYi8VP%2FVpDwMzSQ14th1fEpmHz3mHB3MxHslm88xEK49upQNEuxbcKDUUIQM2RP3QpZ0OITF59TUQ6Ytwg0EXhLI1gFPjnO3UR2uJ3iT4X6YPemglDwTZRduVh6OCObnkspbBQUnUjY97H5DjsW7IOdyme%2FkTclryapSYGicw8UNHt53E7TCYpMDPBjqkARre1vYqiYe%2FNQcu%2Bfbf3fyzY2EOa3lGqS1%2F62vnoci4f5QGcQwB3TdCrHf9MwAx%2BK%2FE6KZFWGiGaHwBmibaQAmqrYDlp4MA1KELQ3ivAwCg46JJJWCWTjgCAPpEqmN4ynFZcklNY1TxQBs%2FdJnAXzN1roaCbYcszucq5awAHEvGQyQY8E%2FuubuS6MHh%2FVRspYOAPT24xpTi4Wer7enF3WFz6lUP&X-Amz-Signature=108890c3c636286c670a68abe664b2380f59fab4f5074044a3811c14883d6737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GL2YBUR%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD7t%2FaFIoat18sYqJckjjpjVAYAitN8RnQB33ksHdK4vgIhAJx9U4S0sAi9sy7XJ9OGV5u9sjS%2FQTewRwQr6%2FPPPVsHKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl1E3XFfIqhe74uB0q3ANGvFUfB6k5%2FMHZTgKgLS0a7%2FeGPgaMuUFGz0QAdfCFOl3hdd0er4Xcdn5LY4ZLCNfpKhfCljOK0xM%2Bel%2B0Ee9d8%2BpKk3Z1BxIhHhAxngTtm1XonIQGQ8SMb%2B19GsnD0l%2FnJxmz5AI7l5VQLeosRqz3gaGzIkQlysJ8KNIM1VUpdI406zHhNix1aFk%2BT1rb4G6hWehHfj5pBm1g%2BKwiEdxUClW0cZ8TXWdnfhNJKHkiWMN7wfhRcS5A%2BajeRgUwshdPMbaT394TiFh9OTtcKw6iG%2Bbjy9qpR8RABv%2Fuh4aeLtQ4HIyzqpL9NjS5Pl%2FRACOhhiv3jDAAs2j6p%2F1VlGN58t%2BqcuGMMc2MNDi%2BNKUvBel2D7rbUZ0jlfVHpa4jTX94Uj8tGun1pP5Dezf7zikiUuCJr3GG8D%2FVRIMIqZD3tpEk%2Bc7M0b6%2F99eg5eSrWW7Kefq06%2BREYi8VP%2FVpDwMzSQ14th1fEpmHz3mHB3MxHslm88xEK49upQNEuxbcKDUUIQM2RP3QpZ0OITF59TUQ6Ytwg0EXhLI1gFPjnO3UR2uJ3iT4X6YPemglDwTZRduVh6OCObnkspbBQUnUjY97H5DjsW7IOdyme%2FkTclryapSYGicw8UNHt53E7TCYpMDPBjqkARre1vYqiYe%2FNQcu%2Bfbf3fyzY2EOa3lGqS1%2F62vnoci4f5QGcQwB3TdCrHf9MwAx%2BK%2FE6KZFWGiGaHwBmibaQAmqrYDlp4MA1KELQ3ivAwCg46JJJWCWTjgCAPpEqmN4ynFZcklNY1TxQBs%2FdJnAXzN1roaCbYcszucq5awAHEvGQyQY8E%2FuubuS6MHh%2FVRspYOAPT24xpTi4Wer7enF3WFz6lUP&X-Amz-Signature=521f22c09ca9fec651189aab930a16dfee0316a9d062ac2365523134ea7806c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GL2YBUR%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD7t%2FaFIoat18sYqJckjjpjVAYAitN8RnQB33ksHdK4vgIhAJx9U4S0sAi9sy7XJ9OGV5u9sjS%2FQTewRwQr6%2FPPPVsHKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl1E3XFfIqhe74uB0q3ANGvFUfB6k5%2FMHZTgKgLS0a7%2FeGPgaMuUFGz0QAdfCFOl3hdd0er4Xcdn5LY4ZLCNfpKhfCljOK0xM%2Bel%2B0Ee9d8%2BpKk3Z1BxIhHhAxngTtm1XonIQGQ8SMb%2B19GsnD0l%2FnJxmz5AI7l5VQLeosRqz3gaGzIkQlysJ8KNIM1VUpdI406zHhNix1aFk%2BT1rb4G6hWehHfj5pBm1g%2BKwiEdxUClW0cZ8TXWdnfhNJKHkiWMN7wfhRcS5A%2BajeRgUwshdPMbaT394TiFh9OTtcKw6iG%2Bbjy9qpR8RABv%2Fuh4aeLtQ4HIyzqpL9NjS5Pl%2FRACOhhiv3jDAAs2j6p%2F1VlGN58t%2BqcuGMMc2MNDi%2BNKUvBel2D7rbUZ0jlfVHpa4jTX94Uj8tGun1pP5Dezf7zikiUuCJr3GG8D%2FVRIMIqZD3tpEk%2Bc7M0b6%2F99eg5eSrWW7Kefq06%2BREYi8VP%2FVpDwMzSQ14th1fEpmHz3mHB3MxHslm88xEK49upQNEuxbcKDUUIQM2RP3QpZ0OITF59TUQ6Ytwg0EXhLI1gFPjnO3UR2uJ3iT4X6YPemglDwTZRduVh6OCObnkspbBQUnUjY97H5DjsW7IOdyme%2FkTclryapSYGicw8UNHt53E7TCYpMDPBjqkARre1vYqiYe%2FNQcu%2Bfbf3fyzY2EOa3lGqS1%2F62vnoci4f5QGcQwB3TdCrHf9MwAx%2BK%2FE6KZFWGiGaHwBmibaQAmqrYDlp4MA1KELQ3ivAwCg46JJJWCWTjgCAPpEqmN4ynFZcklNY1TxQBs%2FdJnAXzN1roaCbYcszucq5awAHEvGQyQY8E%2FuubuS6MHh%2FVRspYOAPT24xpTi4Wer7enF3WFz6lUP&X-Amz-Signature=c27961ba8cdb0468cd565b3b58784ad2b34662b30adc52a7aa59b8c99441adce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GL2YBUR%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD7t%2FaFIoat18sYqJckjjpjVAYAitN8RnQB33ksHdK4vgIhAJx9U4S0sAi9sy7XJ9OGV5u9sjS%2FQTewRwQr6%2FPPPVsHKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl1E3XFfIqhe74uB0q3ANGvFUfB6k5%2FMHZTgKgLS0a7%2FeGPgaMuUFGz0QAdfCFOl3hdd0er4Xcdn5LY4ZLCNfpKhfCljOK0xM%2Bel%2B0Ee9d8%2BpKk3Z1BxIhHhAxngTtm1XonIQGQ8SMb%2B19GsnD0l%2FnJxmz5AI7l5VQLeosRqz3gaGzIkQlysJ8KNIM1VUpdI406zHhNix1aFk%2BT1rb4G6hWehHfj5pBm1g%2BKwiEdxUClW0cZ8TXWdnfhNJKHkiWMN7wfhRcS5A%2BajeRgUwshdPMbaT394TiFh9OTtcKw6iG%2Bbjy9qpR8RABv%2Fuh4aeLtQ4HIyzqpL9NjS5Pl%2FRACOhhiv3jDAAs2j6p%2F1VlGN58t%2BqcuGMMc2MNDi%2BNKUvBel2D7rbUZ0jlfVHpa4jTX94Uj8tGun1pP5Dezf7zikiUuCJr3GG8D%2FVRIMIqZD3tpEk%2Bc7M0b6%2F99eg5eSrWW7Kefq06%2BREYi8VP%2FVpDwMzSQ14th1fEpmHz3mHB3MxHslm88xEK49upQNEuxbcKDUUIQM2RP3QpZ0OITF59TUQ6Ytwg0EXhLI1gFPjnO3UR2uJ3iT4X6YPemglDwTZRduVh6OCObnkspbBQUnUjY97H5DjsW7IOdyme%2FkTclryapSYGicw8UNHt53E7TCYpMDPBjqkARre1vYqiYe%2FNQcu%2Bfbf3fyzY2EOa3lGqS1%2F62vnoci4f5QGcQwB3TdCrHf9MwAx%2BK%2FE6KZFWGiGaHwBmibaQAmqrYDlp4MA1KELQ3ivAwCg46JJJWCWTjgCAPpEqmN4ynFZcklNY1TxQBs%2FdJnAXzN1roaCbYcszucq5awAHEvGQyQY8E%2FuubuS6MHh%2FVRspYOAPT24xpTi4Wer7enF3WFz6lUP&X-Amz-Signature=7892b93246e3274a16430d6a9bcdc4b42ff5e5351dc2a56d88dd4a451fa3e555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GL2YBUR%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD7t%2FaFIoat18sYqJckjjpjVAYAitN8RnQB33ksHdK4vgIhAJx9U4S0sAi9sy7XJ9OGV5u9sjS%2FQTewRwQr6%2FPPPVsHKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl1E3XFfIqhe74uB0q3ANGvFUfB6k5%2FMHZTgKgLS0a7%2FeGPgaMuUFGz0QAdfCFOl3hdd0er4Xcdn5LY4ZLCNfpKhfCljOK0xM%2Bel%2B0Ee9d8%2BpKk3Z1BxIhHhAxngTtm1XonIQGQ8SMb%2B19GsnD0l%2FnJxmz5AI7l5VQLeosRqz3gaGzIkQlysJ8KNIM1VUpdI406zHhNix1aFk%2BT1rb4G6hWehHfj5pBm1g%2BKwiEdxUClW0cZ8TXWdnfhNJKHkiWMN7wfhRcS5A%2BajeRgUwshdPMbaT394TiFh9OTtcKw6iG%2Bbjy9qpR8RABv%2Fuh4aeLtQ4HIyzqpL9NjS5Pl%2FRACOhhiv3jDAAs2j6p%2F1VlGN58t%2BqcuGMMc2MNDi%2BNKUvBel2D7rbUZ0jlfVHpa4jTX94Uj8tGun1pP5Dezf7zikiUuCJr3GG8D%2FVRIMIqZD3tpEk%2Bc7M0b6%2F99eg5eSrWW7Kefq06%2BREYi8VP%2FVpDwMzSQ14th1fEpmHz3mHB3MxHslm88xEK49upQNEuxbcKDUUIQM2RP3QpZ0OITF59TUQ6Ytwg0EXhLI1gFPjnO3UR2uJ3iT4X6YPemglDwTZRduVh6OCObnkspbBQUnUjY97H5DjsW7IOdyme%2FkTclryapSYGicw8UNHt53E7TCYpMDPBjqkARre1vYqiYe%2FNQcu%2Bfbf3fyzY2EOa3lGqS1%2F62vnoci4f5QGcQwB3TdCrHf9MwAx%2BK%2FE6KZFWGiGaHwBmibaQAmqrYDlp4MA1KELQ3ivAwCg46JJJWCWTjgCAPpEqmN4ynFZcklNY1TxQBs%2FdJnAXzN1roaCbYcszucq5awAHEvGQyQY8E%2FuubuS6MHh%2FVRspYOAPT24xpTi4Wer7enF3WFz6lUP&X-Amz-Signature=001b1c954512590c9cbf57999a2c4346ab7e2496b38f68082f80e334d9440746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GL2YBUR%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD7t%2FaFIoat18sYqJckjjpjVAYAitN8RnQB33ksHdK4vgIhAJx9U4S0sAi9sy7XJ9OGV5u9sjS%2FQTewRwQr6%2FPPPVsHKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl1E3XFfIqhe74uB0q3ANGvFUfB6k5%2FMHZTgKgLS0a7%2FeGPgaMuUFGz0QAdfCFOl3hdd0er4Xcdn5LY4ZLCNfpKhfCljOK0xM%2Bel%2B0Ee9d8%2BpKk3Z1BxIhHhAxngTtm1XonIQGQ8SMb%2B19GsnD0l%2FnJxmz5AI7l5VQLeosRqz3gaGzIkQlysJ8KNIM1VUpdI406zHhNix1aFk%2BT1rb4G6hWehHfj5pBm1g%2BKwiEdxUClW0cZ8TXWdnfhNJKHkiWMN7wfhRcS5A%2BajeRgUwshdPMbaT394TiFh9OTtcKw6iG%2Bbjy9qpR8RABv%2Fuh4aeLtQ4HIyzqpL9NjS5Pl%2FRACOhhiv3jDAAs2j6p%2F1VlGN58t%2BqcuGMMc2MNDi%2BNKUvBel2D7rbUZ0jlfVHpa4jTX94Uj8tGun1pP5Dezf7zikiUuCJr3GG8D%2FVRIMIqZD3tpEk%2Bc7M0b6%2F99eg5eSrWW7Kefq06%2BREYi8VP%2FVpDwMzSQ14th1fEpmHz3mHB3MxHslm88xEK49upQNEuxbcKDUUIQM2RP3QpZ0OITF59TUQ6Ytwg0EXhLI1gFPjnO3UR2uJ3iT4X6YPemglDwTZRduVh6OCObnkspbBQUnUjY97H5DjsW7IOdyme%2FkTclryapSYGicw8UNHt53E7TCYpMDPBjqkARre1vYqiYe%2FNQcu%2Bfbf3fyzY2EOa3lGqS1%2F62vnoci4f5QGcQwB3TdCrHf9MwAx%2BK%2FE6KZFWGiGaHwBmibaQAmqrYDlp4MA1KELQ3ivAwCg46JJJWCWTjgCAPpEqmN4ynFZcklNY1TxQBs%2FdJnAXzN1roaCbYcszucq5awAHEvGQyQY8E%2FuubuS6MHh%2FVRspYOAPT24xpTi4Wer7enF3WFz6lUP&X-Amz-Signature=929b70c7b44bb8ca2dbcde3443655feb1f838502138b8b7e71b2677bf9127d35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GL2YBUR%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD7t%2FaFIoat18sYqJckjjpjVAYAitN8RnQB33ksHdK4vgIhAJx9U4S0sAi9sy7XJ9OGV5u9sjS%2FQTewRwQr6%2FPPPVsHKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl1E3XFfIqhe74uB0q3ANGvFUfB6k5%2FMHZTgKgLS0a7%2FeGPgaMuUFGz0QAdfCFOl3hdd0er4Xcdn5LY4ZLCNfpKhfCljOK0xM%2Bel%2B0Ee9d8%2BpKk3Z1BxIhHhAxngTtm1XonIQGQ8SMb%2B19GsnD0l%2FnJxmz5AI7l5VQLeosRqz3gaGzIkQlysJ8KNIM1VUpdI406zHhNix1aFk%2BT1rb4G6hWehHfj5pBm1g%2BKwiEdxUClW0cZ8TXWdnfhNJKHkiWMN7wfhRcS5A%2BajeRgUwshdPMbaT394TiFh9OTtcKw6iG%2Bbjy9qpR8RABv%2Fuh4aeLtQ4HIyzqpL9NjS5Pl%2FRACOhhiv3jDAAs2j6p%2F1VlGN58t%2BqcuGMMc2MNDi%2BNKUvBel2D7rbUZ0jlfVHpa4jTX94Uj8tGun1pP5Dezf7zikiUuCJr3GG8D%2FVRIMIqZD3tpEk%2Bc7M0b6%2F99eg5eSrWW7Kefq06%2BREYi8VP%2FVpDwMzSQ14th1fEpmHz3mHB3MxHslm88xEK49upQNEuxbcKDUUIQM2RP3QpZ0OITF59TUQ6Ytwg0EXhLI1gFPjnO3UR2uJ3iT4X6YPemglDwTZRduVh6OCObnkspbBQUnUjY97H5DjsW7IOdyme%2FkTclryapSYGicw8UNHt53E7TCYpMDPBjqkARre1vYqiYe%2FNQcu%2Bfbf3fyzY2EOa3lGqS1%2F62vnoci4f5QGcQwB3TdCrHf9MwAx%2BK%2FE6KZFWGiGaHwBmibaQAmqrYDlp4MA1KELQ3ivAwCg46JJJWCWTjgCAPpEqmN4ynFZcklNY1TxQBs%2FdJnAXzN1roaCbYcszucq5awAHEvGQyQY8E%2FuubuS6MHh%2FVRspYOAPT24xpTi4Wer7enF3WFz6lUP&X-Amz-Signature=84d31804fc65a297f540431151c8cce85afee2a4b3c388242053026e8feeac65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GL2YBUR%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD7t%2FaFIoat18sYqJckjjpjVAYAitN8RnQB33ksHdK4vgIhAJx9U4S0sAi9sy7XJ9OGV5u9sjS%2FQTewRwQr6%2FPPPVsHKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl1E3XFfIqhe74uB0q3ANGvFUfB6k5%2FMHZTgKgLS0a7%2FeGPgaMuUFGz0QAdfCFOl3hdd0er4Xcdn5LY4ZLCNfpKhfCljOK0xM%2Bel%2B0Ee9d8%2BpKk3Z1BxIhHhAxngTtm1XonIQGQ8SMb%2B19GsnD0l%2FnJxmz5AI7l5VQLeosRqz3gaGzIkQlysJ8KNIM1VUpdI406zHhNix1aFk%2BT1rb4G6hWehHfj5pBm1g%2BKwiEdxUClW0cZ8TXWdnfhNJKHkiWMN7wfhRcS5A%2BajeRgUwshdPMbaT394TiFh9OTtcKw6iG%2Bbjy9qpR8RABv%2Fuh4aeLtQ4HIyzqpL9NjS5Pl%2FRACOhhiv3jDAAs2j6p%2F1VlGN58t%2BqcuGMMc2MNDi%2BNKUvBel2D7rbUZ0jlfVHpa4jTX94Uj8tGun1pP5Dezf7zikiUuCJr3GG8D%2FVRIMIqZD3tpEk%2Bc7M0b6%2F99eg5eSrWW7Kefq06%2BREYi8VP%2FVpDwMzSQ14th1fEpmHz3mHB3MxHslm88xEK49upQNEuxbcKDUUIQM2RP3QpZ0OITF59TUQ6Ytwg0EXhLI1gFPjnO3UR2uJ3iT4X6YPemglDwTZRduVh6OCObnkspbBQUnUjY97H5DjsW7IOdyme%2FkTclryapSYGicw8UNHt53E7TCYpMDPBjqkARre1vYqiYe%2FNQcu%2Bfbf3fyzY2EOa3lGqS1%2F62vnoci4f5QGcQwB3TdCrHf9MwAx%2BK%2FE6KZFWGiGaHwBmibaQAmqrYDlp4MA1KELQ3ivAwCg46JJJWCWTjgCAPpEqmN4ynFZcklNY1TxQBs%2FdJnAXzN1roaCbYcszucq5awAHEvGQyQY8E%2FuubuS6MHh%2FVRspYOAPT24xpTi4Wer7enF3WFz6lUP&X-Amz-Signature=75a177c64db232eccfe7c6ac491ca08948f4e133c4abdf55d40b1c1b7140cdc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GL2YBUR%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD7t%2FaFIoat18sYqJckjjpjVAYAitN8RnQB33ksHdK4vgIhAJx9U4S0sAi9sy7XJ9OGV5u9sjS%2FQTewRwQr6%2FPPPVsHKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl1E3XFfIqhe74uB0q3ANGvFUfB6k5%2FMHZTgKgLS0a7%2FeGPgaMuUFGz0QAdfCFOl3hdd0er4Xcdn5LY4ZLCNfpKhfCljOK0xM%2Bel%2B0Ee9d8%2BpKk3Z1BxIhHhAxngTtm1XonIQGQ8SMb%2B19GsnD0l%2FnJxmz5AI7l5VQLeosRqz3gaGzIkQlysJ8KNIM1VUpdI406zHhNix1aFk%2BT1rb4G6hWehHfj5pBm1g%2BKwiEdxUClW0cZ8TXWdnfhNJKHkiWMN7wfhRcS5A%2BajeRgUwshdPMbaT394TiFh9OTtcKw6iG%2Bbjy9qpR8RABv%2Fuh4aeLtQ4HIyzqpL9NjS5Pl%2FRACOhhiv3jDAAs2j6p%2F1VlGN58t%2BqcuGMMc2MNDi%2BNKUvBel2D7rbUZ0jlfVHpa4jTX94Uj8tGun1pP5Dezf7zikiUuCJr3GG8D%2FVRIMIqZD3tpEk%2Bc7M0b6%2F99eg5eSrWW7Kefq06%2BREYi8VP%2FVpDwMzSQ14th1fEpmHz3mHB3MxHslm88xEK49upQNEuxbcKDUUIQM2RP3QpZ0OITF59TUQ6Ytwg0EXhLI1gFPjnO3UR2uJ3iT4X6YPemglDwTZRduVh6OCObnkspbBQUnUjY97H5DjsW7IOdyme%2FkTclryapSYGicw8UNHt53E7TCYpMDPBjqkARre1vYqiYe%2FNQcu%2Bfbf3fyzY2EOa3lGqS1%2F62vnoci4f5QGcQwB3TdCrHf9MwAx%2BK%2FE6KZFWGiGaHwBmibaQAmqrYDlp4MA1KELQ3ivAwCg46JJJWCWTjgCAPpEqmN4ynFZcklNY1TxQBs%2FdJnAXzN1roaCbYcszucq5awAHEvGQyQY8E%2FuubuS6MHh%2FVRspYOAPT24xpTi4Wer7enF3WFz6lUP&X-Amz-Signature=7d972184d81b6717309deb11fd118140c7339e04122e941284d26cd7f81b07aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GL2YBUR%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD7t%2FaFIoat18sYqJckjjpjVAYAitN8RnQB33ksHdK4vgIhAJx9U4S0sAi9sy7XJ9OGV5u9sjS%2FQTewRwQr6%2FPPPVsHKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl1E3XFfIqhe74uB0q3ANGvFUfB6k5%2FMHZTgKgLS0a7%2FeGPgaMuUFGz0QAdfCFOl3hdd0er4Xcdn5LY4ZLCNfpKhfCljOK0xM%2Bel%2B0Ee9d8%2BpKk3Z1BxIhHhAxngTtm1XonIQGQ8SMb%2B19GsnD0l%2FnJxmz5AI7l5VQLeosRqz3gaGzIkQlysJ8KNIM1VUpdI406zHhNix1aFk%2BT1rb4G6hWehHfj5pBm1g%2BKwiEdxUClW0cZ8TXWdnfhNJKHkiWMN7wfhRcS5A%2BajeRgUwshdPMbaT394TiFh9OTtcKw6iG%2Bbjy9qpR8RABv%2Fuh4aeLtQ4HIyzqpL9NjS5Pl%2FRACOhhiv3jDAAs2j6p%2F1VlGN58t%2BqcuGMMc2MNDi%2BNKUvBel2D7rbUZ0jlfVHpa4jTX94Uj8tGun1pP5Dezf7zikiUuCJr3GG8D%2FVRIMIqZD3tpEk%2Bc7M0b6%2F99eg5eSrWW7Kefq06%2BREYi8VP%2FVpDwMzSQ14th1fEpmHz3mHB3MxHslm88xEK49upQNEuxbcKDUUIQM2RP3QpZ0OITF59TUQ6Ytwg0EXhLI1gFPjnO3UR2uJ3iT4X6YPemglDwTZRduVh6OCObnkspbBQUnUjY97H5DjsW7IOdyme%2FkTclryapSYGicw8UNHt53E7TCYpMDPBjqkARre1vYqiYe%2FNQcu%2Bfbf3fyzY2EOa3lGqS1%2F62vnoci4f5QGcQwB3TdCrHf9MwAx%2BK%2FE6KZFWGiGaHwBmibaQAmqrYDlp4MA1KELQ3ivAwCg46JJJWCWTjgCAPpEqmN4ynFZcklNY1TxQBs%2FdJnAXzN1roaCbYcszucq5awAHEvGQyQY8E%2FuubuS6MHh%2FVRspYOAPT24xpTi4Wer7enF3WFz6lUP&X-Amz-Signature=62d422313c8bf9c7da273df94b814bd91bcb3ea7a25c9b3a5c035fec53f3335c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GXREXLO%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIA%2BlFPn3c0iTexknImbgD3sk6nhxBhAtOhxskblN%2FnaQAiEAyuOAT5rAS7Rbkf1UmZbXgFddlgx59HQzrwPU7J3z%2Bi4qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIIEbH%2BeGa%2FSV9XMSrcA7tmlLvC33h0UjFcKJM1BHyniuYi7Qgl%2Fn1YrERML9BCQkDmHA1f7Wk2X%2BqRUJ%2FRXNdUD1iXOzRtVt1wA747T3NUBgc1ZuN%2FihRbPK2BC%2BOkdtsu1phe4XJRIu1ivWCP%2Be9h1mQr8HtanOtZlKjKRLFcUzH1zplCMC1cUQlbtCFFDGkdKtmttJoNYP4EONhZh7PCM4Wf40fH1Awao%2BRh2ySPyhTZgnnW9E6gvnVFVtqZDKgMgcft17cYgvEhjtTHEa9sW8nWYrpAVltaGlrqT0CQvYwdRxGXaPSctOtXx2xCuykcvD8MWPLpuk7L13Yp1Y18cgodqv%2Fk%2B%2FFCQH0qlIB51JgwSJWU6asd%2FLFCwJTvKETQeS73cG6AWsjcUrQDSCXW9ALrHi31WU%2B3%2F6xeFba1sgBgyQQQUuyAgQgx8uqWziuu%2BbPmkIpep3JkgGniCMFQXHxWRMQL9QIU5CcCfKyEN4padOJRKSYJNexWKh6gLbydTuXxgvjsR%2B0hQeM9TCIzUNJATpvcnqP6VPt0%2By7IUTi5dHT%2FY8BNXz4cl%2F2JSim5xbjlrts1MhV1ZVinW66D4kg3DeTQCVQ%2Bg2hUGkecOIzz08cBJUjTGgXYAh%2B1SKglfZ46WeT0JA4eMJOlwM8GOqUBkQcAK3KMYzB%2FVE2Kl%2FZayJDIw2MY%2F%2FO7FqPxYFCLw1%2FrgA%2BV9kMyQ35I9VXAzHPIglYGn0cAzL5yNfJ5qEVmfI4l6QwBlRRPLNd8NDuNPlCAS8IC1pDumJOLY8UAHQkSxQjBPbwclrxKjoaEqLHhkWKKSBGQSRXWcx9NOEfGwDhIcIYG%2BixGYOYzFmAxEq4TB2x0XO1epHtlSE%2BkgHap2GXDqTLE&X-Amz-Signature=205ef2ee8703b6b10ee02a92b56d9c99dee53d3173c588e423e91ec48b564737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654UKVJOW%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGcqQgH8KzPplYIWrWEycfPWDnvABSZ7LZsZcfsY9W6rAiAfpqph24TfgMe5hCqK0qt89MTVLU%2F9m5B%2B%2Bj7r7BmnGiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK0SqVvkw3XQFtbWwKtwDU6BmXzk%2BmQJO391PL8pFPKgReMaQFcE3pxFmc8N2gnkBj9qIK4iD1bn4qGQSRlbU9GDZY42lLBjXpaapkzYEt6CE0v5ebiRLj7xbiTksitZ9wt7kJW7D9XK6BtFWKF45VaSMPqBXiGcbyC3rtlG%2FpM9lpjh7TiXXqGhUFfQtbKUYQgfZvoH2TAzI2MDJ6OvLAWlNuwcijjwzH3hS9lbtooc0pW6XRsGqfHh0jecrcsGr1eaHSjFUd9bnDGGKqEY4Oe%2BD%2BFPJJ9AYAIArjskCb7ZOfJ5VrD4bfoqnfDCzka59RqAOEyG8mn8S%2FQ811xmL%2F3PQPmB%2FkFKIlf4FTlPu6KTHjq6YXj2pAkJ3ErVSbqJcs%2FTdqtkRvAgBDtJU5gOp96JC06iicYrFc3ZKxvyI6hOHRW%2BaDkP659EVk37v2Zwn0WqTVuFA1wSF64fhsDhAR5O6l%2FnvT9tAv62lxhHZHvO2%2B6W5Rxs8PPE2l7gwEaLTh9PJsuwNIKeVq%2Fla92nSdsaPf0Ik%2B9pN%2Bs6c3H19GxRuQwVUOieQ5QFbMJcNe6NEPTkAKwYQM3FXJ4XMmiL85%2BClh4j9Hqe5BEtIoJinB5wVAMgLu6c6Yl8s6hSiVGrWX1Mrt6BDM9sntdYwlKXAzwY6pgHftIZQSPFPifuWaLcP512kbqg9clippQdcNRZM2aC7YK7JksLvmJ9crI0ez9gZWJQ%2FDnO4TO0F4t9x3f439m4JuwROMY5VwGt4LBbT96z1VssMW72a1LnCeGH0sK2IcAkChPwwFtJPSMYhpaT%2Bhy%2B1elkQWGJJhhSr8dd53iXXg1boBV2kDth%2FgpoMLQqOOotjds83ZBqajdeAED3B455OCXv3d7xz&X-Amz-Signature=9d474ef5c831e701ee3e34187813cdf7e293ad17185fe6ada69dd59885820753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4OIDH2N%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCICMxw61RZEgRKQ5MTn8aDfIFlskJ5rntzT5gXeFT5R9YAiEAi0qDcEhdPiLoLhjZfv5qpiEv2xfMGsD%2FD0pniu%2BlfjkqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwORTLDphlfV1UclCrcA5cGpZWSNIX6e8Q1rOuDW%2B%2Bse7rW85PjHlC8vlBv6JsubRFt85%2BYM1EOnWeYQs2V%2FPj5fmgwNbkMDAzQAzqV7K6lfkLQrKe%2BnN3sue%2Bel%2Bjmm0zEJj3tYUusOTkcBwpGLB32HBaOkoeGZ9q76xEY9khnHY7uYbVgMGTL4LDAN%2FnM792trEuT9dzMb4a6mjI74CW1oZs4QXJFf4%2FgFvpqYuuXPPKeHV9g2egaeeUJF0MRBSsuom%2Fabvg9W3%2Br%2FRyX8z3iUQQlgQPDupdjvDoPnr2E8FXDyzoYWl4appm8QUcGvRd1SroTCRF9cphuyP%2Bu3OTXI%2B%2FmCv875ZiUUvDv0MzBPrzTV744Rq0UB%2FfsqrP9joHVDFBhfWN8q%2BVFuSCI0LBsICF5SHQpcTm2pOkVs1PmxWFqNAhgxvoi1ym8r1OWDEADDjm4q8MX9oj5P5i2DI4TqP20TBv9FMJzyOHJmqevFwVhnzvl3lGW2eqnlZxSLoA%2BexSKJt7jLsOMMwlmhX7H4gkzwClpourAPd%2B2EmU5VX9Dgj0DFbkg7t%2BBCJQxBHbRKId3WZeJs2%2BD0oT0UvsVx6gg%2FinJdn1peLpJXtJrRz9aI%2BSpQS8ckdYb6SdJMbBftNs8SP2crzxxMNWlwM8GOqUBys2L%2Bjo0bcj111vditNMF190vuJVUfUMULLit9ICuQMfbY2jemPE%2BlLHJYKZfIsQU%2Fq4uXhI2O1515t4t3Kw392q3UOIB5Y9kF98oy6DJ0KGFz3LoiH91tRlXor1vmqet3TRaAh%2BsWmfSAkfBnHuxZ%2FV1iF5LUvWQgbgmddkGw3Mm25k9SHIOoMSeQnZdtZ5T4duChU%2FfCPvwgCLVftf%2BskzrQX9&X-Amz-Signature=8caaadadcf9675143287e15adc3c8491d12297655d0a4bb764509054430fcc6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GL2YBUR%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD7t%2FaFIoat18sYqJckjjpjVAYAitN8RnQB33ksHdK4vgIhAJx9U4S0sAi9sy7XJ9OGV5u9sjS%2FQTewRwQr6%2FPPPVsHKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl1E3XFfIqhe74uB0q3ANGvFUfB6k5%2FMHZTgKgLS0a7%2FeGPgaMuUFGz0QAdfCFOl3hdd0er4Xcdn5LY4ZLCNfpKhfCljOK0xM%2Bel%2B0Ee9d8%2BpKk3Z1BxIhHhAxngTtm1XonIQGQ8SMb%2B19GsnD0l%2FnJxmz5AI7l5VQLeosRqz3gaGzIkQlysJ8KNIM1VUpdI406zHhNix1aFk%2BT1rb4G6hWehHfj5pBm1g%2BKwiEdxUClW0cZ8TXWdnfhNJKHkiWMN7wfhRcS5A%2BajeRgUwshdPMbaT394TiFh9OTtcKw6iG%2Bbjy9qpR8RABv%2Fuh4aeLtQ4HIyzqpL9NjS5Pl%2FRACOhhiv3jDAAs2j6p%2F1VlGN58t%2BqcuGMMc2MNDi%2BNKUvBel2D7rbUZ0jlfVHpa4jTX94Uj8tGun1pP5Dezf7zikiUuCJr3GG8D%2FVRIMIqZD3tpEk%2Bc7M0b6%2F99eg5eSrWW7Kefq06%2BREYi8VP%2FVpDwMzSQ14th1fEpmHz3mHB3MxHslm88xEK49upQNEuxbcKDUUIQM2RP3QpZ0OITF59TUQ6Ytwg0EXhLI1gFPjnO3UR2uJ3iT4X6YPemglDwTZRduVh6OCObnkspbBQUnUjY97H5DjsW7IOdyme%2FkTclryapSYGicw8UNHt53E7TCYpMDPBjqkARre1vYqiYe%2FNQcu%2Bfbf3fyzY2EOa3lGqS1%2F62vnoci4f5QGcQwB3TdCrHf9MwAx%2BK%2FE6KZFWGiGaHwBmibaQAmqrYDlp4MA1KELQ3ivAwCg46JJJWCWTjgCAPpEqmN4ynFZcklNY1TxQBs%2FdJnAXzN1roaCbYcszucq5awAHEvGQyQY8E%2FuubuS6MHh%2FVRspYOAPT24xpTi4Wer7enF3WFz6lUP&X-Amz-Signature=ec7c708e95775437f5d080ebb99fa0d47b27b6a445758f040030f7acf23e86a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UFFAJIA%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGWFX5f%2B0ib8HQ7QwPrZ424DSIlkkUvRp6Yp221xCB19AiBBi2zBAAzZp4evqCUiMSWC9KJx4KDyMII05pRa2HKu7CqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpaqcyKwhWzQDPIvWKtwDifC1d4OCxzGiJ%2FqBtq01FimYl1BCBrPrkA4N1nPIDbGDZi2EZZAIa2W0JNdLLO%2BYzaKqBUjR2%2BLEd0xX9gMwGgFhekD5H9P8VWgdjKUe%2FJnhsyKyWD7Y9d0cusUktTqOJ%2FFfkAPk5v5s2FBL%2FJD5KIkGuOp1g0%2FHAgjudGihDmvu6gR0Ljv8Vy7hWd0%2BV7KejdjB%2FKWwH8QGnncTBzfdPxpuncuR7VtsKeGpXYDwAtRzidxSPAzXlY%2FM23iNf6qDI053%2FYCjIhf0%2BUboqCIbk8b%2FN3SwG2Zr0dYo%2B8hZ3GACF8PkJe2zLmMLza1P9yRQGkl%2Bu5Iei2dDgO158mnnIuipqhL%2BRIeRuZInTNawl7oH6j0615cXgnKJHcsOLWhazUIZuwmlwKcwniMNTSzN0rrVm8d3CebhwJBSoSIUVG11F%2F3BP22i3hm1%2BrabYJJ6ERNEx1T9%2BlIGhkWtLjZI9IYVUenisqm8BLqoNZtUuSsJk7oBme2WnDE83zZL84G61Umjo4LCOOoJ3eiHL5h2z6koY68WJnxsWU4RSd6lblQNisnJCNtlK%2FPKBI%2Bwpd%2FkxIZCUI8d5gAzr7NzToS%2BonJ5udwy7pf4irkFhiJpooUok68f1F2WUql2gZ8wlKXAzwY6pgE4UeAPb5Fh1Kv9XYDu4guZTmHSMdClLGCW7IoeWGjZfrAbzZTXmo%2BK5PP4PqfE%2F7oK%2B%2BGiA9h2%2F5wcRLV%2F77cVb8UixQ%2BeGYqwiO2cM8jnxGnaL5zZLuLR5T3%2BUjb9DJOSk9wQhy%2Fi8M5iet7OBfiTQryirbnqcKBbuT1yaZSUYHVhLaL3W7omKVQQTKAr8Ork%2FEive5y1NNo2TzDGVYQqu7osCuMU&X-Amz-Signature=ac50757b347e7f325faa2b3ee8569794fa90975451c778b8f1161832fe8b6933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GL2YBUR%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD7t%2FaFIoat18sYqJckjjpjVAYAitN8RnQB33ksHdK4vgIhAJx9U4S0sAi9sy7XJ9OGV5u9sjS%2FQTewRwQr6%2FPPPVsHKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl1E3XFfIqhe74uB0q3ANGvFUfB6k5%2FMHZTgKgLS0a7%2FeGPgaMuUFGz0QAdfCFOl3hdd0er4Xcdn5LY4ZLCNfpKhfCljOK0xM%2Bel%2B0Ee9d8%2BpKk3Z1BxIhHhAxngTtm1XonIQGQ8SMb%2B19GsnD0l%2FnJxmz5AI7l5VQLeosRqz3gaGzIkQlysJ8KNIM1VUpdI406zHhNix1aFk%2BT1rb4G6hWehHfj5pBm1g%2BKwiEdxUClW0cZ8TXWdnfhNJKHkiWMN7wfhRcS5A%2BajeRgUwshdPMbaT394TiFh9OTtcKw6iG%2Bbjy9qpR8RABv%2Fuh4aeLtQ4HIyzqpL9NjS5Pl%2FRACOhhiv3jDAAs2j6p%2F1VlGN58t%2BqcuGMMc2MNDi%2BNKUvBel2D7rbUZ0jlfVHpa4jTX94Uj8tGun1pP5Dezf7zikiUuCJr3GG8D%2FVRIMIqZD3tpEk%2Bc7M0b6%2F99eg5eSrWW7Kefq06%2BREYi8VP%2FVpDwMzSQ14th1fEpmHz3mHB3MxHslm88xEK49upQNEuxbcKDUUIQM2RP3QpZ0OITF59TUQ6Ytwg0EXhLI1gFPjnO3UR2uJ3iT4X6YPemglDwTZRduVh6OCObnkspbBQUnUjY97H5DjsW7IOdyme%2FkTclryapSYGicw8UNHt53E7TCYpMDPBjqkARre1vYqiYe%2FNQcu%2Bfbf3fyzY2EOa3lGqS1%2F62vnoci4f5QGcQwB3TdCrHf9MwAx%2BK%2FE6KZFWGiGaHwBmibaQAmqrYDlp4MA1KELQ3ivAwCg46JJJWCWTjgCAPpEqmN4ynFZcklNY1TxQBs%2FdJnAXzN1roaCbYcszucq5awAHEvGQyQY8E%2FuubuS6MHh%2FVRspYOAPT24xpTi4Wer7enF3WFz6lUP&X-Amz-Signature=f6af079de14c0b03d745a22bc950a331aa62a5ecd3d996cce9516e4b0ed6df1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGQIHKH%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGrN6SeJGX3pPAmZy8GvhKNkyJo9beVSQo%2BV7jNcbAHfAiAvXEK%2F2v9NMCH8rPibmXwiFKdLmUwEeFzGW9kYZ7BzaiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXyCfSLvWL%2BLXmLBmKtwDsKmC0TnmuVwcuJdbBOR4OAtZvhjLXNxfddpC6bww1GDoYxeyFB4LAiETmFzIwlR1JltKL%2Bq%2B07HqaPLjt%2B0%2FluaY4sXGpwDn21pfmsi%2Fd5dC%2FHourLf3nm0zpbsh32AEolQ9Zjq5YLnQB3uaWqWYAAjRrBITCDp2%2FW2T8nbXTpR4dfqJlkrJYFcRKJ8%2BiISd9qb%2BiSKwYjsUyAvJWaKMZDr2ijELfOv5YxcKivAY3yxM%2BXWd3CSk9O0ETfoU4BjZUGjAKnXkGyeRf3jXGPh%2Fd0wh%2BO8HwjG5sA28%2FiCoSh7QjtqSxeUtQ%2BeP9uOM2PMmc5K6U5LN6jnTJv73a0YJ8YBzrputkyFzvc50cjMAYciFOQoOaYJRsVAITQELyoX04WWFLYjS%2Fdzx1U3lKZwkELfMoPYUX0IuqycdQcRQpfL%2ByhcFkVb%2BxVhI%2F4lUexsdpDgi8wL2eh%2FeuNnMAYbt6LqSVRqNNx7MzYExgbCuRPv%2FfRBQkhh0LsU%2BDPDzGAbRE%2BTnfIsHn6ZTG38NyrADVpJRw07tntFryCHBSUXFOKAgP7QzkyWcFhFZrOiagKljd3Pr2oM8PswKBVObm2acJ50qWsMrFD67cXJsa%2FOKysQg5ajEgEZhlW4rKD4wr6PAzwY6pgGEwZFDswOyobB%2FuiwhBY7sVN2XFkFKVKwxvRXgYTcR4CHDfIVbGQDYk7FQM9zZfQYuwk53yv59r7fYJFLf3H11IFvh%2B2Ke%2Bl3oo5hPvxJV9id8X4ja3TrSkSiDi38B3KimvjtF3aK19qqBDf%2BEpaD43C4NM0LpJFbUA4m64LlsoVCb3lbweZzFdY%2FtwFOiKRLYeWolcSsZxjWZuphoXnyYyDSjVF7p&X-Amz-Signature=9867ccaf3f58b6b6f3d35580635c4f104c16a865ec85e039da6731fd438ce00a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GL2YBUR%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD7t%2FaFIoat18sYqJckjjpjVAYAitN8RnQB33ksHdK4vgIhAJx9U4S0sAi9sy7XJ9OGV5u9sjS%2FQTewRwQr6%2FPPPVsHKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl1E3XFfIqhe74uB0q3ANGvFUfB6k5%2FMHZTgKgLS0a7%2FeGPgaMuUFGz0QAdfCFOl3hdd0er4Xcdn5LY4ZLCNfpKhfCljOK0xM%2Bel%2B0Ee9d8%2BpKk3Z1BxIhHhAxngTtm1XonIQGQ8SMb%2B19GsnD0l%2FnJxmz5AI7l5VQLeosRqz3gaGzIkQlysJ8KNIM1VUpdI406zHhNix1aFk%2BT1rb4G6hWehHfj5pBm1g%2BKwiEdxUClW0cZ8TXWdnfhNJKHkiWMN7wfhRcS5A%2BajeRgUwshdPMbaT394TiFh9OTtcKw6iG%2Bbjy9qpR8RABv%2Fuh4aeLtQ4HIyzqpL9NjS5Pl%2FRACOhhiv3jDAAs2j6p%2F1VlGN58t%2BqcuGMMc2MNDi%2BNKUvBel2D7rbUZ0jlfVHpa4jTX94Uj8tGun1pP5Dezf7zikiUuCJr3GG8D%2FVRIMIqZD3tpEk%2Bc7M0b6%2F99eg5eSrWW7Kefq06%2BREYi8VP%2FVpDwMzSQ14th1fEpmHz3mHB3MxHslm88xEK49upQNEuxbcKDUUIQM2RP3QpZ0OITF59TUQ6Ytwg0EXhLI1gFPjnO3UR2uJ3iT4X6YPemglDwTZRduVh6OCObnkspbBQUnUjY97H5DjsW7IOdyme%2FkTclryapSYGicw8UNHt53E7TCYpMDPBjqkARre1vYqiYe%2FNQcu%2Bfbf3fyzY2EOa3lGqS1%2F62vnoci4f5QGcQwB3TdCrHf9MwAx%2BK%2FE6KZFWGiGaHwBmibaQAmqrYDlp4MA1KELQ3ivAwCg46JJJWCWTjgCAPpEqmN4ynFZcklNY1TxQBs%2FdJnAXzN1roaCbYcszucq5awAHEvGQyQY8E%2FuubuS6MHh%2FVRspYOAPT24xpTi4Wer7enF3WFz6lUP&X-Amz-Signature=25c14be63fe7b64782d8f5c55f3d2be2ee0221ae87cf07a2df83a9b65bcb9941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLFRF4RE%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGaTOQQAdluBMbvd1vgfU3wN%2B7Y%2FNPUWTKgRfhfPRZiNAiAhhar3mXQ846YxYVwKv0Ar23p3DGFedg6o%2F0ttUiNn9yqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi2k6W4IAYKG4O4WyKtwDyQrTVrnTHMrV0qVbuca2e1Gm2732h8GqHhQgIdI2EQ825mbeH%2BhRpfbSeM%2BTmTN9AGUjSfns3TT0L55IklKN%2BBY6kaqbKNKtECz%2FbKUyDotjlhLUd5LsxCmWasu%2BuU2yS2huuNaDlCbakKtoOCxsjOw4BxheTvfbC4qeKG%2BnpEYRGo8AFbXCfCPhgvOHFKmGUICS0Tqc0R9xCkOzzuk4pLjiOELcu0AwIxjhtfggxR%2FlseQDNg70rH8diKASqM6DqZ0k2PD477O7u%2BWzv73SWEYqg4G6tSuKF5lNZuQd1m3DbBHgboZzHthq31YaqbUnlvVFWQ5cJ3KmIZFMndV63huA269jAiMY78ILCzNrI%2F5EjRPlU3xgOe2UiiS7PbFOred6mbKDxXDzPGmVxCvVBTzePmieiE03y%2FRQyMHWUT1GrEa%2FHWHklGG4FQwXFobkT6s5H3HfWMBkGZWfGqurI4DCcC0xgBNhXZ4eLSxBY%2BnWmHHGSXujv9fGimQA4VBggMLtFT3yDKuS7tu2L%2FwGCRf94ezQFGzasw1TIYbBMYQeiS%2FU1M1NB4eXJFRP34qg3mdoi%2BTrlluj%2FkaYvdSsnt4ipf%2FQAlsEg4mb8Pe%2BNJtNX8UH7qLta6b5KRswqqTAzwY6pgFINr2L07opwXOxGPFEuvHTDIcbTicsDFfY%2FAaJAQyxG%2FbQO56vkla5hZdPVa6jzDq%2BSKL8xgBEN2Wg9WBEepSvodcLzd5IrX0i%2BLKMfF8Dg0P%2BHmAxs77iDAt1GYao1a8yUG1e%2BKld3qgS5y5a%2FwPXxKUGO6wYPRYMFGk5OPQDOvppQLInmHhOWZ0aTgJzsMWWblv2w0s8V2KrcW9YdD7CiAq8UEfc&X-Amz-Signature=a542d590b970a735b4638cb82e0bc8ea046e269f17f3551a03d49b39141410ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GL2YBUR%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD7t%2FaFIoat18sYqJckjjpjVAYAitN8RnQB33ksHdK4vgIhAJx9U4S0sAi9sy7XJ9OGV5u9sjS%2FQTewRwQr6%2FPPPVsHKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl1E3XFfIqhe74uB0q3ANGvFUfB6k5%2FMHZTgKgLS0a7%2FeGPgaMuUFGz0QAdfCFOl3hdd0er4Xcdn5LY4ZLCNfpKhfCljOK0xM%2Bel%2B0Ee9d8%2BpKk3Z1BxIhHhAxngTtm1XonIQGQ8SMb%2B19GsnD0l%2FnJxmz5AI7l5VQLeosRqz3gaGzIkQlysJ8KNIM1VUpdI406zHhNix1aFk%2BT1rb4G6hWehHfj5pBm1g%2BKwiEdxUClW0cZ8TXWdnfhNJKHkiWMN7wfhRcS5A%2BajeRgUwshdPMbaT394TiFh9OTtcKw6iG%2Bbjy9qpR8RABv%2Fuh4aeLtQ4HIyzqpL9NjS5Pl%2FRACOhhiv3jDAAs2j6p%2F1VlGN58t%2BqcuGMMc2MNDi%2BNKUvBel2D7rbUZ0jlfVHpa4jTX94Uj8tGun1pP5Dezf7zikiUuCJr3GG8D%2FVRIMIqZD3tpEk%2Bc7M0b6%2F99eg5eSrWW7Kefq06%2BREYi8VP%2FVpDwMzSQ14th1fEpmHz3mHB3MxHslm88xEK49upQNEuxbcKDUUIQM2RP3QpZ0OITF59TUQ6Ytwg0EXhLI1gFPjnO3UR2uJ3iT4X6YPemglDwTZRduVh6OCObnkspbBQUnUjY97H5DjsW7IOdyme%2FkTclryapSYGicw8UNHt53E7TCYpMDPBjqkARre1vYqiYe%2FNQcu%2Bfbf3fyzY2EOa3lGqS1%2F62vnoci4f5QGcQwB3TdCrHf9MwAx%2BK%2FE6KZFWGiGaHwBmibaQAmqrYDlp4MA1KELQ3ivAwCg46JJJWCWTjgCAPpEqmN4ynFZcklNY1TxQBs%2FdJnAXzN1roaCbYcszucq5awAHEvGQyQY8E%2FuubuS6MHh%2FVRspYOAPT24xpTi4Wer7enF3WFz6lUP&X-Amz-Signature=bb7f6932f9b3be6e2f4ba070460afb54978190b3dd6851598294d5d00bffd7bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3BNP3LC%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIG52qKbNDe6J%2BdREbVS46HvmfnFDl2jKck4rmqd81F1TAiApecRfLe3HBrmKg3nCAA%2FyhjsWAG8CSTXJFTqJ%2ByWeiSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8cwCkzR9N2BxmipOKtwDT3Ule9BBO2OtTooGy%2FBMC0NlO4ZFL2woS2HZzHfd8zCWBeC%2BPafx%2FWcG8Zdt5PS00EPPLptME%2B7uWbQmDBlfO37A%2BlLn0XFsAOSkc2gBNPFQHhPC3VJOpnDrHhjFQeyn%2BxVzV677UHuEJNMPaBBeyW%2FRJjBaljyV9evzB0dXE2tSwmtLYAKOFKQgAeCTEtPFWOQQadj%2F8Uw19hsOtbxr7Ets9jM0fvgtxZ%2FSZu6gjlisk8C4FSAXTcj7DlbKB1W1%2Fb0lLx8x5GFU0cKZkgggp3OkU1ZBmFRt5TZ4gCw4qt0%2FsQTE3z1vl0LSii6k2f5D1fHyGZgam5dq99DtN0qKwu69co1YudDmNgo122f0etODooJFqTyjHfyUgJ5ofYEP5CYzzTb3rInqlxu7w8Pqkb7AKOnumbtb9TyZoFT2LtXKdBwS638pNLaz26D10xPs0CogocXWgo%2BrZMyfRhItXXH7eYvP84iOB6ky9U27gSHl5k60B5kkZATSgrqswpdv%2F4swJHFcBxOJSmvnnhNr0lxYpUD6WorAQW1%2FNf4TsYV07xPq7P%2F4ToikcE1rPHC%2F1AwEJsL8s%2FABMw9CVnjMvOJCWqgRHI4dDSe3j1BJGtdRGvmvBPfeGt72OIswl6PAzwY6pgG6PAfM8qZPC0CfBpVkvHI9SAJHJ69g1Mp63o4titzSGTB2AgMGnhFL1RidSfQuji83l0EW9e4YOVTVPFW0TxRq93TmubMps37e8xHXc01IwrYve%2BPuUiHAH%2FaHngxsI8EgcPl263qi3wFjYAmPhoB6UNRPfKLMEeJCIEZMVf46m8HdLga0qYlO6%2B4ki9FSRrIV0LkreNTZYAGlE65K%2BSeyy0HUPbHa&X-Amz-Signature=2ee152dcd99d0b7f7569e298573cb7e3c4f89fe68b7c1d4ec91cfc08f0df3046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GL2YBUR%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD7t%2FaFIoat18sYqJckjjpjVAYAitN8RnQB33ksHdK4vgIhAJx9U4S0sAi9sy7XJ9OGV5u9sjS%2FQTewRwQr6%2FPPPVsHKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl1E3XFfIqhe74uB0q3ANGvFUfB6k5%2FMHZTgKgLS0a7%2FeGPgaMuUFGz0QAdfCFOl3hdd0er4Xcdn5LY4ZLCNfpKhfCljOK0xM%2Bel%2B0Ee9d8%2BpKk3Z1BxIhHhAxngTtm1XonIQGQ8SMb%2B19GsnD0l%2FnJxmz5AI7l5VQLeosRqz3gaGzIkQlysJ8KNIM1VUpdI406zHhNix1aFk%2BT1rb4G6hWehHfj5pBm1g%2BKwiEdxUClW0cZ8TXWdnfhNJKHkiWMN7wfhRcS5A%2BajeRgUwshdPMbaT394TiFh9OTtcKw6iG%2Bbjy9qpR8RABv%2Fuh4aeLtQ4HIyzqpL9NjS5Pl%2FRACOhhiv3jDAAs2j6p%2F1VlGN58t%2BqcuGMMc2MNDi%2BNKUvBel2D7rbUZ0jlfVHpa4jTX94Uj8tGun1pP5Dezf7zikiUuCJr3GG8D%2FVRIMIqZD3tpEk%2Bc7M0b6%2F99eg5eSrWW7Kefq06%2BREYi8VP%2FVpDwMzSQ14th1fEpmHz3mHB3MxHslm88xEK49upQNEuxbcKDUUIQM2RP3QpZ0OITF59TUQ6Ytwg0EXhLI1gFPjnO3UR2uJ3iT4X6YPemglDwTZRduVh6OCObnkspbBQUnUjY97H5DjsW7IOdyme%2FkTclryapSYGicw8UNHt53E7TCYpMDPBjqkARre1vYqiYe%2FNQcu%2Bfbf3fyzY2EOa3lGqS1%2F62vnoci4f5QGcQwB3TdCrHf9MwAx%2BK%2FE6KZFWGiGaHwBmibaQAmqrYDlp4MA1KELQ3ivAwCg46JJJWCWTjgCAPpEqmN4ynFZcklNY1TxQBs%2FdJnAXzN1roaCbYcszucq5awAHEvGQyQY8E%2FuubuS6MHh%2FVRspYOAPT24xpTi4Wer7enF3WFz6lUP&X-Amz-Signature=b2a585106a21c9f278699908d08bbe4d1fc01834963f86dfd493bdfe6fdb5b9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T33BKA7Y%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD%2BN2avBkEWasA5S%2FrDgrErA%2F7We4wGtrn96f%2FYKMY2LwIga75JGbTvoNStZE5AX5eKQHUG603UCcTnfmEzhNO6kUcqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbAtoCsqZc2HnzhVSrcA4%2BbGFTZV0XsFVbWmVkYsLsiSL8rfE%2BOEcJbE5KBWRUeH7SYF2L7Dm5VAurawpHyKtwXcg58ZZyHFFUSCb4abVl%2FXY%2BDYzpTwne8i3CQlQcLgxKdaYvLivfG8H8a2Z9mvZVWfSjnVdZQj9vovAaY0ZYKk8blRJwwqAT%2BJ5AFdAY436jklzqbSA44KMwRw6IWz9h%2Fy1SbL3R35vDNe3KNky24gX7IT2pC1OEO4lJXJFz8u2IchrlsvfwKsCTjn0JdQZFV2ctyYTqG2bfw0qJlS6dg%2B2LoPbcn8A18conW8kDkf9VHG%2FWEb2lrksGgBatQobUOz0AtENBoCUjiIFE3JaRUpYQ8YsB09ks63%2Fjt2KQTQa9Dnmu%2BTPOXLCkaaB9wM%2F8xbHYZfXvlul2KxtWq8gnvmpYnIBb8Vd22CbGIQrYhXL0FiIlH89e7MWMUyi3Rl4gDDTioHVugypn5brOt7v4Jj2bGA%2F%2FeU1gh4ltm929OkLUuxqI5wGONPy0oau3F1AOSRr3J0%2Br8FYci8d6EWbKUCEHcpABewcxqPNUywxrGqlOQC1nAgrZeUG16%2FWVsToZBYk4zy2%2BoHD97OzxmY%2BJOrVk%2FCPcZb0hlkCB9R%2Fl9b4al3e1H2eFfFjBtMNWlwM8GOqUBVMIElpds6xr4KI6U6RqUJmcLMI2bot8twCien1tPh%2Fs7PO%2FcbI3qPlwLaFHOjFECYrvF1ilKvhMFIGAOW2OJWD4seN%2FKogzz1QyXJKIL0xP63QKruEEdYWWHY9qznyPXJysogzB%2FEaSNV6xQ6xQLwh2WEGGa1jx%2BTptwbnFLJuFT0yqFT2JNRRrea8gI5HNl%2BMcykRxe1cJwCPjTj9veDoFVqcnx&X-Amz-Signature=78a3f2a21613c41bc38a5095f5fc8ca412518f19868cf14547ac8766cebe29ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X74DTKD%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIC484m1PF7U4poCtXW86RZtAhjHRGsUfsOdNE27RCvILAiEA7dnk7oijq3gU8tE6ghk2CIR8PulQbg%2Fn7OUf0oREr1kqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2zIuIWQxYfaQxs4yrcA9EnVhcEWP2xZHr1uVnAd7L8iiOHy42BOx95G3fE9%2F1ur82%2BMKGdTuChB2Zm5I2bhz7U2%2FJv3MolLzVdlRNuNDJEyllMToqwwFLtuDvAHtXEkct2pewW6tTb8aUJPbgkR3qx1Tw%2Bw6m2STHM0J1yMJ0YETSOCClcG8hHNIk%2FQACriZF8b3bfd8AVsqCKM%2B1pKxGha0njCox5YNwehPTT%2Bt8gTS%2BmVH2Du%2FvDgKhV88Axpeb39Smt1OmyZKHq8P2K1110nRHqNlQcv9YSTkTVinfE0Kz1JxFHuS21pvXFdhBBV%2FCqHd88SsjpKvWefzRXqMUNKCBc79ZS0RwYbjckkpPtmSOUvddZ9II1iJTVgymsQ21JoHDfvafUZikOBSojTOCNZqgbxyHkwtAAOOUNFRNhcvat%2FgFk2wgkWakwrRnKnIvVE0BU1YuBO5LpwuH2ooFhJtEKj6Q4vUbuccpM2VNSYYfnOAmU1I2CzTshO4pXURI1DizG9TpgmFNkMeIO4%2BaTpyqhAMeKCGxI6JKCUtF%2F8EF3ux7KAGO4sy0f8E57nxnJIMcIj%2BweIjT5DgPmCO7ShumSUdMBo%2FMy1AWvF0MPTeLTpCV3cM9HHYPoHfstNBvpqSqZN9m2r%2B7NMNWiwM8GOqUBg8leNnjKaD8YsSh0NvQb%2Feu4BYw6virVtD2JoO0OINzIECORqIK12hlVeMXgzt1Pl8tBgWWRZq12Ek3FV583F4hGzLHrd%2F4pHn4uxoPKZbeos4iAJZeyfxNqOKzwzKeCO41rd8DT4xpOAjYSlpFQfpFHBVfzzdjk6oJR569bfVIOJFkM8JfR3zQ1JJO6fFkgZ0WXyLs545vWU3lsQtm6%2F5H2YCGE&X-Amz-Signature=ed1fa86a8a407bdd37da9802a74edefc92debfd9c37b97bfdf8f5cae5ae6dcf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEBCRV43%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD5zcyXY4iuk2Grua7C9ZUxisNlwYWsU4YydROFFJowoAIhAN%2FokobUGLk3jX8aUmhvfpDBX5xsgK0SeAfM%2FLFXKtHLKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyvdqOyGmuC8v6xcgq3AN6B1RjFiu7FFZ66%2FJETSPwyYmhoS%2B8SR1rQDwqfamJWM4QsNrDeeEDX2NRtn%2F4z6wp6vBJmK%2ByauYO7VGdZ95gsAIb2uWXhvjrUohMs4MnDJeT6POwGMB5XYGvZZWzx5rU%2BESpCyZgOwZq6lJKPRrPJaw2is4KhmjvpT4PNsNp1jmtYLHkiDFouDOBzRtNUQvBVeUY58pwrUUbl%2BpLqE8q08V6iE7UOzpfm9qHFX%2FHpgbQ7Kfw%2ByN%2BwhLlhnKTDQWOhLhC%2FAYgw7gyS7RzgDYyYifDFZ%2FLOE3BI%2Bx%2FXpz1qTUg9H1%2Bh8A8UKelHIAIo5PrIllud5NDQDFlLL6PpfegxQfofWASy49N5C7U4PI0fBlfqlGX0BrMfESM8KjKy53lXnvz9y9D1%2F%2FY68gl3oLQUl2FOeVxckQKTNT61ezsEgbg8QlsQ2QO8nUvEmATKx%2FiGhBB2NMnprzZV1RXX%2BqHKd0LYXZboLG54TsqMAIsrsBwb06x8DjmdKwtZFwnmFCYFD6gO7iO5XjT2QsAX5hLYscg6X16RU4cTVQG0syOWi4MwRBWoLtizF33nN%2FiqclzbVewxRUekzVzgnxZmEY4qj9%2Bfja9KfQBIub%2FGoPnH7E3pxxBY5YfWwyiQTCbpcDPBjqkAYA3XRBd7%2BoBJrgcut8kTmBwBYGAqLmkVQ86sLqR3Kw9ZNREr0xo67Kl7aQINIyT%2B%2BrJDCIVsU9VkO8S9elrWH173RtILjEpJavuDVZeTjxs5tnWvEe1zUiHV7B4i3TR6Ky5wX7J8wwM5piu2AO83RKBym2lNE7yfsKSjjj1fDjdcguIit10BbhPHiSS%2FsQbfeIdmd1OrXlVQ9pA%2BqS3msdlBi88&X-Amz-Signature=37a6bc7cc8fe496219eb7a5d461ba6c90cb09dad37a7ac4ee41d88b7ce8f5f39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GL2YBUR%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD7t%2FaFIoat18sYqJckjjpjVAYAitN8RnQB33ksHdK4vgIhAJx9U4S0sAi9sy7XJ9OGV5u9sjS%2FQTewRwQr6%2FPPPVsHKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl1E3XFfIqhe74uB0q3ANGvFUfB6k5%2FMHZTgKgLS0a7%2FeGPgaMuUFGz0QAdfCFOl3hdd0er4Xcdn5LY4ZLCNfpKhfCljOK0xM%2Bel%2B0Ee9d8%2BpKk3Z1BxIhHhAxngTtm1XonIQGQ8SMb%2B19GsnD0l%2FnJxmz5AI7l5VQLeosRqz3gaGzIkQlysJ8KNIM1VUpdI406zHhNix1aFk%2BT1rb4G6hWehHfj5pBm1g%2BKwiEdxUClW0cZ8TXWdnfhNJKHkiWMN7wfhRcS5A%2BajeRgUwshdPMbaT394TiFh9OTtcKw6iG%2Bbjy9qpR8RABv%2Fuh4aeLtQ4HIyzqpL9NjS5Pl%2FRACOhhiv3jDAAs2j6p%2F1VlGN58t%2BqcuGMMc2MNDi%2BNKUvBel2D7rbUZ0jlfVHpa4jTX94Uj8tGun1pP5Dezf7zikiUuCJr3GG8D%2FVRIMIqZD3tpEk%2Bc7M0b6%2F99eg5eSrWW7Kefq06%2BREYi8VP%2FVpDwMzSQ14th1fEpmHz3mHB3MxHslm88xEK49upQNEuxbcKDUUIQM2RP3QpZ0OITF59TUQ6Ytwg0EXhLI1gFPjnO3UR2uJ3iT4X6YPemglDwTZRduVh6OCObnkspbBQUnUjY97H5DjsW7IOdyme%2FkTclryapSYGicw8UNHt53E7TCYpMDPBjqkARre1vYqiYe%2FNQcu%2Bfbf3fyzY2EOa3lGqS1%2F62vnoci4f5QGcQwB3TdCrHf9MwAx%2BK%2FE6KZFWGiGaHwBmibaQAmqrYDlp4MA1KELQ3ivAwCg46JJJWCWTjgCAPpEqmN4ynFZcklNY1TxQBs%2FdJnAXzN1roaCbYcszucq5awAHEvGQyQY8E%2FuubuS6MHh%2FVRspYOAPT24xpTi4Wer7enF3WFz6lUP&X-Amz-Signature=b1ab44737f0549db7a9991828d5665a110e6984eaa7794cccb60a2546840d896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GL2YBUR%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD7t%2FaFIoat18sYqJckjjpjVAYAitN8RnQB33ksHdK4vgIhAJx9U4S0sAi9sy7XJ9OGV5u9sjS%2FQTewRwQr6%2FPPPVsHKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl1E3XFfIqhe74uB0q3ANGvFUfB6k5%2FMHZTgKgLS0a7%2FeGPgaMuUFGz0QAdfCFOl3hdd0er4Xcdn5LY4ZLCNfpKhfCljOK0xM%2Bel%2B0Ee9d8%2BpKk3Z1BxIhHhAxngTtm1XonIQGQ8SMb%2B19GsnD0l%2FnJxmz5AI7l5VQLeosRqz3gaGzIkQlysJ8KNIM1VUpdI406zHhNix1aFk%2BT1rb4G6hWehHfj5pBm1g%2BKwiEdxUClW0cZ8TXWdnfhNJKHkiWMN7wfhRcS5A%2BajeRgUwshdPMbaT394TiFh9OTtcKw6iG%2Bbjy9qpR8RABv%2Fuh4aeLtQ4HIyzqpL9NjS5Pl%2FRACOhhiv3jDAAs2j6p%2F1VlGN58t%2BqcuGMMc2MNDi%2BNKUvBel2D7rbUZ0jlfVHpa4jTX94Uj8tGun1pP5Dezf7zikiUuCJr3GG8D%2FVRIMIqZD3tpEk%2Bc7M0b6%2F99eg5eSrWW7Kefq06%2BREYi8VP%2FVpDwMzSQ14th1fEpmHz3mHB3MxHslm88xEK49upQNEuxbcKDUUIQM2RP3QpZ0OITF59TUQ6Ytwg0EXhLI1gFPjnO3UR2uJ3iT4X6YPemglDwTZRduVh6OCObnkspbBQUnUjY97H5DjsW7IOdyme%2FkTclryapSYGicw8UNHt53E7TCYpMDPBjqkARre1vYqiYe%2FNQcu%2Bfbf3fyzY2EOa3lGqS1%2F62vnoci4f5QGcQwB3TdCrHf9MwAx%2BK%2FE6KZFWGiGaHwBmibaQAmqrYDlp4MA1KELQ3ivAwCg46JJJWCWTjgCAPpEqmN4ynFZcklNY1TxQBs%2FdJnAXzN1roaCbYcszucq5awAHEvGQyQY8E%2FuubuS6MHh%2FVRspYOAPT24xpTi4Wer7enF3WFz6lUP&X-Amz-Signature=1ac4ae57d0db2873f317ed3d4857c8c73b3d79beb4a4af44fb43e7a4f60e4fe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FOZDX5H%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBu4fYoQ6FSGlpUi49WD2qJCYmHS7WNCg1StrLpiE7AgAiEAzjHXJs%2BNtLtVWj%2Bg%2BlX79M8%2FvBx49o2w%2BhnsMyZg2asqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiDNAeFmI%2FUULhiIyrcA3FEPGRIZ1Is740erXb2Vq4SSWLaCcedECMaxLSkfxFcmoBWuVk4bBEJkQxG3IFOS8tT5Hd7suOleC6OaLBm7jrpJ0Kjd8SIcu1SjtWQaiq4cZ%2BjjHs5GJKxslwf6cJG%2FWL49rCIq57KLoWORIleeE71%2BOpGfhXGCWSMH4YpedOAOkY3cV0GAhCU16AjesrCHGudf1F4n6MdEIwRWvbJl0pUuSmbiOBuz1lTyoRb6RJVsiN6P4l8xalTZoLsFfOa453IRGMZ51DJA70%2F8PpjC2RBW10ma6%2BcEtTqQw6dvdY7NHNA%2FRdW1mrStP3F3zsX42hi2abg2GFQd9p2XLUiP63xYA9PwGn%2FBVgZxRyERLS2MzVj26fw0l2uimKqWQ2ZrHVdp6pmPfMpna1B3sXeH7wzWqpC1QBMS8M3xWJmeHGQI44het1qcr1JR4Kl63u0Sbz4H87G1psX7GUarEOgs852%2Bfx%2Fr8HZnoqhMfOmGLHI90%2BxnSMIOovW%2FU67FiuYXkWJKtLWph%2FMGIF9IRf%2FTHO3yt9WnPpodwbf2sYbRAIJ0NgfTkU%2Bgr8QaNZvag2pUXe%2FjwebTVJsHjYKeYtZX0%2FCgOqHRyEXWaUka7S5r8ir4xmS8yDiLE5eIGPrMNeiwM8GOqUBWVKrtVsV3gjqXeGuDfTca4fJQtMqagIHRpqxspvf6uTrq5AIODjNKKh2cFYbcfscnNuNRL5mnUh9b27UrR%2FJb%2Fsvk7XFdqtBCUbTQQMFDKFMVClT8wcpfIZw93oakcuo6u8rstDkuH6z2rI3sMsP74ezr3AVzgoNVJdo7qSn2kMdAfhakw6ORi5EUMRLLyP0ggyMhExlLsk2RvJghN10878D2355&X-Amz-Signature=ffbb3a2cfa5a436a81b095dbcf1125fd316ed868b783f41ff3ed7d882336b74c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FOZDX5H%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBu4fYoQ6FSGlpUi49WD2qJCYmHS7WNCg1StrLpiE7AgAiEAzjHXJs%2BNtLtVWj%2Bg%2BlX79M8%2FvBx49o2w%2BhnsMyZg2asqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiDNAeFmI%2FUULhiIyrcA3FEPGRIZ1Is740erXb2Vq4SSWLaCcedECMaxLSkfxFcmoBWuVk4bBEJkQxG3IFOS8tT5Hd7suOleC6OaLBm7jrpJ0Kjd8SIcu1SjtWQaiq4cZ%2BjjHs5GJKxslwf6cJG%2FWL49rCIq57KLoWORIleeE71%2BOpGfhXGCWSMH4YpedOAOkY3cV0GAhCU16AjesrCHGudf1F4n6MdEIwRWvbJl0pUuSmbiOBuz1lTyoRb6RJVsiN6P4l8xalTZoLsFfOa453IRGMZ51DJA70%2F8PpjC2RBW10ma6%2BcEtTqQw6dvdY7NHNA%2FRdW1mrStP3F3zsX42hi2abg2GFQd9p2XLUiP63xYA9PwGn%2FBVgZxRyERLS2MzVj26fw0l2uimKqWQ2ZrHVdp6pmPfMpna1B3sXeH7wzWqpC1QBMS8M3xWJmeHGQI44het1qcr1JR4Kl63u0Sbz4H87G1psX7GUarEOgs852%2Bfx%2Fr8HZnoqhMfOmGLHI90%2BxnSMIOovW%2FU67FiuYXkWJKtLWph%2FMGIF9IRf%2FTHO3yt9WnPpodwbf2sYbRAIJ0NgfTkU%2Bgr8QaNZvag2pUXe%2FjwebTVJsHjYKeYtZX0%2FCgOqHRyEXWaUka7S5r8ir4xmS8yDiLE5eIGPrMNeiwM8GOqUBWVKrtVsV3gjqXeGuDfTca4fJQtMqagIHRpqxspvf6uTrq5AIODjNKKh2cFYbcfscnNuNRL5mnUh9b27UrR%2FJb%2Fsvk7XFdqtBCUbTQQMFDKFMVClT8wcpfIZw93oakcuo6u8rstDkuH6z2rI3sMsP74ezr3AVzgoNVJdo7qSn2kMdAfhakw6ORi5EUMRLLyP0ggyMhExlLsk2RvJghN10878D2355&X-Amz-Signature=3fd10bd918484fe89533b914b30d3e1c626c4b3bd5c126f088ab7ff8e16fd4dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FOZDX5H%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBu4fYoQ6FSGlpUi49WD2qJCYmHS7WNCg1StrLpiE7AgAiEAzjHXJs%2BNtLtVWj%2Bg%2BlX79M8%2FvBx49o2w%2BhnsMyZg2asqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiDNAeFmI%2FUULhiIyrcA3FEPGRIZ1Is740erXb2Vq4SSWLaCcedECMaxLSkfxFcmoBWuVk4bBEJkQxG3IFOS8tT5Hd7suOleC6OaLBm7jrpJ0Kjd8SIcu1SjtWQaiq4cZ%2BjjHs5GJKxslwf6cJG%2FWL49rCIq57KLoWORIleeE71%2BOpGfhXGCWSMH4YpedOAOkY3cV0GAhCU16AjesrCHGudf1F4n6MdEIwRWvbJl0pUuSmbiOBuz1lTyoRb6RJVsiN6P4l8xalTZoLsFfOa453IRGMZ51DJA70%2F8PpjC2RBW10ma6%2BcEtTqQw6dvdY7NHNA%2FRdW1mrStP3F3zsX42hi2abg2GFQd9p2XLUiP63xYA9PwGn%2FBVgZxRyERLS2MzVj26fw0l2uimKqWQ2ZrHVdp6pmPfMpna1B3sXeH7wzWqpC1QBMS8M3xWJmeHGQI44het1qcr1JR4Kl63u0Sbz4H87G1psX7GUarEOgs852%2Bfx%2Fr8HZnoqhMfOmGLHI90%2BxnSMIOovW%2FU67FiuYXkWJKtLWph%2FMGIF9IRf%2FTHO3yt9WnPpodwbf2sYbRAIJ0NgfTkU%2Bgr8QaNZvag2pUXe%2FjwebTVJsHjYKeYtZX0%2FCgOqHRyEXWaUka7S5r8ir4xmS8yDiLE5eIGPrMNeiwM8GOqUBWVKrtVsV3gjqXeGuDfTca4fJQtMqagIHRpqxspvf6uTrq5AIODjNKKh2cFYbcfscnNuNRL5mnUh9b27UrR%2FJb%2Fsvk7XFdqtBCUbTQQMFDKFMVClT8wcpfIZw93oakcuo6u8rstDkuH6z2rI3sMsP74ezr3AVzgoNVJdo7qSn2kMdAfhakw6ORi5EUMRLLyP0ggyMhExlLsk2RvJghN10878D2355&X-Amz-Signature=88d47a47292da2e921b67d02238893d9696484f03ae888f4b04a6a5fdd8b0d20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FOZDX5H%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBu4fYoQ6FSGlpUi49WD2qJCYmHS7WNCg1StrLpiE7AgAiEAzjHXJs%2BNtLtVWj%2Bg%2BlX79M8%2FvBx49o2w%2BhnsMyZg2asqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiDNAeFmI%2FUULhiIyrcA3FEPGRIZ1Is740erXb2Vq4SSWLaCcedECMaxLSkfxFcmoBWuVk4bBEJkQxG3IFOS8tT5Hd7suOleC6OaLBm7jrpJ0Kjd8SIcu1SjtWQaiq4cZ%2BjjHs5GJKxslwf6cJG%2FWL49rCIq57KLoWORIleeE71%2BOpGfhXGCWSMH4YpedOAOkY3cV0GAhCU16AjesrCHGudf1F4n6MdEIwRWvbJl0pUuSmbiOBuz1lTyoRb6RJVsiN6P4l8xalTZoLsFfOa453IRGMZ51DJA70%2F8PpjC2RBW10ma6%2BcEtTqQw6dvdY7NHNA%2FRdW1mrStP3F3zsX42hi2abg2GFQd9p2XLUiP63xYA9PwGn%2FBVgZxRyERLS2MzVj26fw0l2uimKqWQ2ZrHVdp6pmPfMpna1B3sXeH7wzWqpC1QBMS8M3xWJmeHGQI44het1qcr1JR4Kl63u0Sbz4H87G1psX7GUarEOgs852%2Bfx%2Fr8HZnoqhMfOmGLHI90%2BxnSMIOovW%2FU67FiuYXkWJKtLWph%2FMGIF9IRf%2FTHO3yt9WnPpodwbf2sYbRAIJ0NgfTkU%2Bgr8QaNZvag2pUXe%2FjwebTVJsHjYKeYtZX0%2FCgOqHRyEXWaUka7S5r8ir4xmS8yDiLE5eIGPrMNeiwM8GOqUBWVKrtVsV3gjqXeGuDfTca4fJQtMqagIHRpqxspvf6uTrq5AIODjNKKh2cFYbcfscnNuNRL5mnUh9b27UrR%2FJb%2Fsvk7XFdqtBCUbTQQMFDKFMVClT8wcpfIZw93oakcuo6u8rstDkuH6z2rI3sMsP74ezr3AVzgoNVJdo7qSn2kMdAfhakw6ORi5EUMRLLyP0ggyMhExlLsk2RvJghN10878D2355&X-Amz-Signature=d02e7998012d2c30d11b910bb2ca23efe96534f1ccdc8c1e22716f34718f20f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RC5CMMP%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICPKdshMPegejIkxHSOt262ZPZ24c7hz7ZwcmKjtWoLXAiAs%2FDh4Pec6993%2BBh9YazsMmDKJvaEUZo%2BEJbzeaALV3iqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyQZv1Wt%2Bvkm2%2FB6aKtwDKQLl6RWyasWDkLhmtfjpMhRrAUNxxUZ%2FUz9uQBt21FkPw7ETAckr0nR4bkd4zFK0xNEDWi%2FRG9DIPsbJC4cyO93VrFPr6A9P9cI8DWXtdErnABGzfKHGfonUfEjh28dTq%2BVV%2BbmQHuOKUJj8h1g83kipHdVwkUqJZh%2F9o08JosyPPV4GpV3BDGntuyACfGyAKU7ga%2FnX%2BCPyqkIy0AuGuGMoaTegRt20XUkBfVhpMLsmrbhdNGMy1lKsIGbEuLD5ED3zMaNu18EqGp4YDJjNpB9kiiPYyoC8Z2p%2F2dxDe7PgQPQ8MrGkfPAp1gezGdqT%2BzJuVcB%2FPBrz0cQ0VvGKssEyT73q3nHCDwVJASnLPJ7x3P0D30%2FdcrlzxMXXvZAsuAHMtfnqFjzXlD9eXJALtSUVMkA1OP%2FsI4L5MEMWxZzhZapcllVYscidXSquma4LUEVA%2FwqTYFrwENk3Q1XO1816Y%2FwuVxGDyz579m3YeSfzxxB5P1a4hrr4uCOkX4CPQyAS9Vllx9Yl9hKTyEl5ZWnQ6LFiTpUxdnGJFN854tdTlQZSHB0KzVGlsDrok5ZGpvUo0JJDxWHuNzSgZYbkTGU4zYC0L53thKTUfpXFX828%2BMksO%2FJO57ewiIkw0qPAzwY6pgFZhw2HHH3fd%2FSvwAiYQsO5cu%2FfcZLsP%2BdFPbOfNhZnzw31a237Nt9nxDrYAXv3qRQjGu6LnxCD1Ki2tRJAW7aj2b7k4GMjvO4hnNCSwN%2BSRw6P4%2BUpmJzluYuGpqq%2Flbg8iQKPv3FTvevquCIjjZPscbqopcFtRKtyJgKTNGOIObTy5f%2BNopRpm1c2mtcHizPUk3nL7p%2FnkpPSkPHPi7IYhjLv7Uo%2B&X-Amz-Signature=5aa2d8a0e5d814baeb7c47480726623ddd2685a57780ed945e857d90b620d1ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FOZDX5H%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBu4fYoQ6FSGlpUi49WD2qJCYmHS7WNCg1StrLpiE7AgAiEAzjHXJs%2BNtLtVWj%2Bg%2BlX79M8%2FvBx49o2w%2BhnsMyZg2asqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiDNAeFmI%2FUULhiIyrcA3FEPGRIZ1Is740erXb2Vq4SSWLaCcedECMaxLSkfxFcmoBWuVk4bBEJkQxG3IFOS8tT5Hd7suOleC6OaLBm7jrpJ0Kjd8SIcu1SjtWQaiq4cZ%2BjjHs5GJKxslwf6cJG%2FWL49rCIq57KLoWORIleeE71%2BOpGfhXGCWSMH4YpedOAOkY3cV0GAhCU16AjesrCHGudf1F4n6MdEIwRWvbJl0pUuSmbiOBuz1lTyoRb6RJVsiN6P4l8xalTZoLsFfOa453IRGMZ51DJA70%2F8PpjC2RBW10ma6%2BcEtTqQw6dvdY7NHNA%2FRdW1mrStP3F3zsX42hi2abg2GFQd9p2XLUiP63xYA9PwGn%2FBVgZxRyERLS2MzVj26fw0l2uimKqWQ2ZrHVdp6pmPfMpna1B3sXeH7wzWqpC1QBMS8M3xWJmeHGQI44het1qcr1JR4Kl63u0Sbz4H87G1psX7GUarEOgs852%2Bfx%2Fr8HZnoqhMfOmGLHI90%2BxnSMIOovW%2FU67FiuYXkWJKtLWph%2FMGIF9IRf%2FTHO3yt9WnPpodwbf2sYbRAIJ0NgfTkU%2Bgr8QaNZvag2pUXe%2FjwebTVJsHjYKeYtZX0%2FCgOqHRyEXWaUka7S5r8ir4xmS8yDiLE5eIGPrMNeiwM8GOqUBWVKrtVsV3gjqXeGuDfTca4fJQtMqagIHRpqxspvf6uTrq5AIODjNKKh2cFYbcfscnNuNRL5mnUh9b27UrR%2FJb%2Fsvk7XFdqtBCUbTQQMFDKFMVClT8wcpfIZw93oakcuo6u8rstDkuH6z2rI3sMsP74ezr3AVzgoNVJdo7qSn2kMdAfhakw6ORi5EUMRLLyP0ggyMhExlLsk2RvJghN10878D2355&X-Amz-Signature=6001d201e9ac19af2e3531e55fac858fa8619a9ab976639072ffb70322a782de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FOZDX5H%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBu4fYoQ6FSGlpUi49WD2qJCYmHS7WNCg1StrLpiE7AgAiEAzjHXJs%2BNtLtVWj%2Bg%2BlX79M8%2FvBx49o2w%2BhnsMyZg2asqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiDNAeFmI%2FUULhiIyrcA3FEPGRIZ1Is740erXb2Vq4SSWLaCcedECMaxLSkfxFcmoBWuVk4bBEJkQxG3IFOS8tT5Hd7suOleC6OaLBm7jrpJ0Kjd8SIcu1SjtWQaiq4cZ%2BjjHs5GJKxslwf6cJG%2FWL49rCIq57KLoWORIleeE71%2BOpGfhXGCWSMH4YpedOAOkY3cV0GAhCU16AjesrCHGudf1F4n6MdEIwRWvbJl0pUuSmbiOBuz1lTyoRb6RJVsiN6P4l8xalTZoLsFfOa453IRGMZ51DJA70%2F8PpjC2RBW10ma6%2BcEtTqQw6dvdY7NHNA%2FRdW1mrStP3F3zsX42hi2abg2GFQd9p2XLUiP63xYA9PwGn%2FBVgZxRyERLS2MzVj26fw0l2uimKqWQ2ZrHVdp6pmPfMpna1B3sXeH7wzWqpC1QBMS8M3xWJmeHGQI44het1qcr1JR4Kl63u0Sbz4H87G1psX7GUarEOgs852%2Bfx%2Fr8HZnoqhMfOmGLHI90%2BxnSMIOovW%2FU67FiuYXkWJKtLWph%2FMGIF9IRf%2FTHO3yt9WnPpodwbf2sYbRAIJ0NgfTkU%2Bgr8QaNZvag2pUXe%2FjwebTVJsHjYKeYtZX0%2FCgOqHRyEXWaUka7S5r8ir4xmS8yDiLE5eIGPrMNeiwM8GOqUBWVKrtVsV3gjqXeGuDfTca4fJQtMqagIHRpqxspvf6uTrq5AIODjNKKh2cFYbcfscnNuNRL5mnUh9b27UrR%2FJb%2Fsvk7XFdqtBCUbTQQMFDKFMVClT8wcpfIZw93oakcuo6u8rstDkuH6z2rI3sMsP74ezr3AVzgoNVJdo7qSn2kMdAfhakw6ORi5EUMRLLyP0ggyMhExlLsk2RvJghN10878D2355&X-Amz-Signature=316b4f246019f82ebb781c84c13fc261bcbc506de11f1c124aae3c2c530b552a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FOZDX5H%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBu4fYoQ6FSGlpUi49WD2qJCYmHS7WNCg1StrLpiE7AgAiEAzjHXJs%2BNtLtVWj%2Bg%2BlX79M8%2FvBx49o2w%2BhnsMyZg2asqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiDNAeFmI%2FUULhiIyrcA3FEPGRIZ1Is740erXb2Vq4SSWLaCcedECMaxLSkfxFcmoBWuVk4bBEJkQxG3IFOS8tT5Hd7suOleC6OaLBm7jrpJ0Kjd8SIcu1SjtWQaiq4cZ%2BjjHs5GJKxslwf6cJG%2FWL49rCIq57KLoWORIleeE71%2BOpGfhXGCWSMH4YpedOAOkY3cV0GAhCU16AjesrCHGudf1F4n6MdEIwRWvbJl0pUuSmbiOBuz1lTyoRb6RJVsiN6P4l8xalTZoLsFfOa453IRGMZ51DJA70%2F8PpjC2RBW10ma6%2BcEtTqQw6dvdY7NHNA%2FRdW1mrStP3F3zsX42hi2abg2GFQd9p2XLUiP63xYA9PwGn%2FBVgZxRyERLS2MzVj26fw0l2uimKqWQ2ZrHVdp6pmPfMpna1B3sXeH7wzWqpC1QBMS8M3xWJmeHGQI44het1qcr1JR4Kl63u0Sbz4H87G1psX7GUarEOgs852%2Bfx%2Fr8HZnoqhMfOmGLHI90%2BxnSMIOovW%2FU67FiuYXkWJKtLWph%2FMGIF9IRf%2FTHO3yt9WnPpodwbf2sYbRAIJ0NgfTkU%2Bgr8QaNZvag2pUXe%2FjwebTVJsHjYKeYtZX0%2FCgOqHRyEXWaUka7S5r8ir4xmS8yDiLE5eIGPrMNeiwM8GOqUBWVKrtVsV3gjqXeGuDfTca4fJQtMqagIHRpqxspvf6uTrq5AIODjNKKh2cFYbcfscnNuNRL5mnUh9b27UrR%2FJb%2Fsvk7XFdqtBCUbTQQMFDKFMVClT8wcpfIZw93oakcuo6u8rstDkuH6z2rI3sMsP74ezr3AVzgoNVJdo7qSn2kMdAfhakw6ORi5EUMRLLyP0ggyMhExlLsk2RvJghN10878D2355&X-Amz-Signature=88d47a47292da2e921b67d02238893d9696484f03ae888f4b04a6a5fdd8b0d20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FOZDX5H%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBu4fYoQ6FSGlpUi49WD2qJCYmHS7WNCg1StrLpiE7AgAiEAzjHXJs%2BNtLtVWj%2Bg%2BlX79M8%2FvBx49o2w%2BhnsMyZg2asqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiDNAeFmI%2FUULhiIyrcA3FEPGRIZ1Is740erXb2Vq4SSWLaCcedECMaxLSkfxFcmoBWuVk4bBEJkQxG3IFOS8tT5Hd7suOleC6OaLBm7jrpJ0Kjd8SIcu1SjtWQaiq4cZ%2BjjHs5GJKxslwf6cJG%2FWL49rCIq57KLoWORIleeE71%2BOpGfhXGCWSMH4YpedOAOkY3cV0GAhCU16AjesrCHGudf1F4n6MdEIwRWvbJl0pUuSmbiOBuz1lTyoRb6RJVsiN6P4l8xalTZoLsFfOa453IRGMZ51DJA70%2F8PpjC2RBW10ma6%2BcEtTqQw6dvdY7NHNA%2FRdW1mrStP3F3zsX42hi2abg2GFQd9p2XLUiP63xYA9PwGn%2FBVgZxRyERLS2MzVj26fw0l2uimKqWQ2ZrHVdp6pmPfMpna1B3sXeH7wzWqpC1QBMS8M3xWJmeHGQI44het1qcr1JR4Kl63u0Sbz4H87G1psX7GUarEOgs852%2Bfx%2Fr8HZnoqhMfOmGLHI90%2BxnSMIOovW%2FU67FiuYXkWJKtLWph%2FMGIF9IRf%2FTHO3yt9WnPpodwbf2sYbRAIJ0NgfTkU%2Bgr8QaNZvag2pUXe%2FjwebTVJsHjYKeYtZX0%2FCgOqHRyEXWaUka7S5r8ir4xmS8yDiLE5eIGPrMNeiwM8GOqUBWVKrtVsV3gjqXeGuDfTca4fJQtMqagIHRpqxspvf6uTrq5AIODjNKKh2cFYbcfscnNuNRL5mnUh9b27UrR%2FJb%2Fsvk7XFdqtBCUbTQQMFDKFMVClT8wcpfIZw93oakcuo6u8rstDkuH6z2rI3sMsP74ezr3AVzgoNVJdo7qSn2kMdAfhakw6ORi5EUMRLLyP0ggyMhExlLsk2RvJghN10878D2355&X-Amz-Signature=fa415f401a1b090f70d11cb14b9e6962241c5b746604962115e9f23921521616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FOZDX5H%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBu4fYoQ6FSGlpUi49WD2qJCYmHS7WNCg1StrLpiE7AgAiEAzjHXJs%2BNtLtVWj%2Bg%2BlX79M8%2FvBx49o2w%2BhnsMyZg2asqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiDNAeFmI%2FUULhiIyrcA3FEPGRIZ1Is740erXb2Vq4SSWLaCcedECMaxLSkfxFcmoBWuVk4bBEJkQxG3IFOS8tT5Hd7suOleC6OaLBm7jrpJ0Kjd8SIcu1SjtWQaiq4cZ%2BjjHs5GJKxslwf6cJG%2FWL49rCIq57KLoWORIleeE71%2BOpGfhXGCWSMH4YpedOAOkY3cV0GAhCU16AjesrCHGudf1F4n6MdEIwRWvbJl0pUuSmbiOBuz1lTyoRb6RJVsiN6P4l8xalTZoLsFfOa453IRGMZ51DJA70%2F8PpjC2RBW10ma6%2BcEtTqQw6dvdY7NHNA%2FRdW1mrStP3F3zsX42hi2abg2GFQd9p2XLUiP63xYA9PwGn%2FBVgZxRyERLS2MzVj26fw0l2uimKqWQ2ZrHVdp6pmPfMpna1B3sXeH7wzWqpC1QBMS8M3xWJmeHGQI44het1qcr1JR4Kl63u0Sbz4H87G1psX7GUarEOgs852%2Bfx%2Fr8HZnoqhMfOmGLHI90%2BxnSMIOovW%2FU67FiuYXkWJKtLWph%2FMGIF9IRf%2FTHO3yt9WnPpodwbf2sYbRAIJ0NgfTkU%2Bgr8QaNZvag2pUXe%2FjwebTVJsHjYKeYtZX0%2FCgOqHRyEXWaUka7S5r8ir4xmS8yDiLE5eIGPrMNeiwM8GOqUBWVKrtVsV3gjqXeGuDfTca4fJQtMqagIHRpqxspvf6uTrq5AIODjNKKh2cFYbcfscnNuNRL5mnUh9b27UrR%2FJb%2Fsvk7XFdqtBCUbTQQMFDKFMVClT8wcpfIZw93oakcuo6u8rstDkuH6z2rI3sMsP74ezr3AVzgoNVJdo7qSn2kMdAfhakw6ORi5EUMRLLyP0ggyMhExlLsk2RvJghN10878D2355&X-Amz-Signature=6561de8b310098c71be1f8cbf1627eb4f1da055aec7f1b1560e3af76a54dea0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FOZDX5H%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBu4fYoQ6FSGlpUi49WD2qJCYmHS7WNCg1StrLpiE7AgAiEAzjHXJs%2BNtLtVWj%2Bg%2BlX79M8%2FvBx49o2w%2BhnsMyZg2asqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiDNAeFmI%2FUULhiIyrcA3FEPGRIZ1Is740erXb2Vq4SSWLaCcedECMaxLSkfxFcmoBWuVk4bBEJkQxG3IFOS8tT5Hd7suOleC6OaLBm7jrpJ0Kjd8SIcu1SjtWQaiq4cZ%2BjjHs5GJKxslwf6cJG%2FWL49rCIq57KLoWORIleeE71%2BOpGfhXGCWSMH4YpedOAOkY3cV0GAhCU16AjesrCHGudf1F4n6MdEIwRWvbJl0pUuSmbiOBuz1lTyoRb6RJVsiN6P4l8xalTZoLsFfOa453IRGMZ51DJA70%2F8PpjC2RBW10ma6%2BcEtTqQw6dvdY7NHNA%2FRdW1mrStP3F3zsX42hi2abg2GFQd9p2XLUiP63xYA9PwGn%2FBVgZxRyERLS2MzVj26fw0l2uimKqWQ2ZrHVdp6pmPfMpna1B3sXeH7wzWqpC1QBMS8M3xWJmeHGQI44het1qcr1JR4Kl63u0Sbz4H87G1psX7GUarEOgs852%2Bfx%2Fr8HZnoqhMfOmGLHI90%2BxnSMIOovW%2FU67FiuYXkWJKtLWph%2FMGIF9IRf%2FTHO3yt9WnPpodwbf2sYbRAIJ0NgfTkU%2Bgr8QaNZvag2pUXe%2FjwebTVJsHjYKeYtZX0%2FCgOqHRyEXWaUka7S5r8ir4xmS8yDiLE5eIGPrMNeiwM8GOqUBWVKrtVsV3gjqXeGuDfTca4fJQtMqagIHRpqxspvf6uTrq5AIODjNKKh2cFYbcfscnNuNRL5mnUh9b27UrR%2FJb%2Fsvk7XFdqtBCUbTQQMFDKFMVClT8wcpfIZw93oakcuo6u8rstDkuH6z2rI3sMsP74ezr3AVzgoNVJdo7qSn2kMdAfhakw6ORi5EUMRLLyP0ggyMhExlLsk2RvJghN10878D2355&X-Amz-Signature=bef906349d451675ba17e74731785a49b19d68b566abc540b723b26d63a0802a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


